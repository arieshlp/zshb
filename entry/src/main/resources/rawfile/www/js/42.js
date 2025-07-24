(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/breakLawReport.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/caseDetail/components/breakLawReport.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/index.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "breakLawReport",
  props: {
    info: {
      type: Object,
      default: function _default() {}
    }
  },
  methods: {
    toDetail: function toDetail(item) {
      var name = item.fileName.split('.'),
          type = name[name.length - 1];

      if (type == 'png' || type == 'jpg' || type == 'jpeg') {
        Object(vant__WEBPACK_IMPORTED_MODULE_2__["ImagePreview"])(['http://10.221.29.4:17000' + item.url]);
      } else {
        this.$router.push({
          name: "pdfH5",
          query: {
            url: 'http://10.221.29.4:7001/ra/file/getFile?id=' + item.id,
            name: item.fileName
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/cancelReport.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/caseDetail/components/cancelReport.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/index.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "cancelReport",
  props: {
    info: {
      type: Object,
      default: function _default() {}
    }
  },
  methods: {
    toDetail: function toDetail(item) {
      var name = item.fileName.split('.'),
          type = name[name.length - 1];

      if (type == 'png' || type == 'jpg' || type == 'jpeg') {
        Object(vant__WEBPACK_IMPORTED_MODULE_2__["ImagePreview"])(['http://10.221.29.4:17000' + item.url]);
      } else {
        this.$router.push({
          name: "pdfH5",
          query: {
            url: 'http://10.221.29.4:7001/ra/file/getFile?id=' + item.id,
            name: item.fileName
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/insideDealReport.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/caseDetail/components/insideDealReport.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/index.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "insideDealReport",
  props: {
    info: {
      type: Object,
      default: function _default() {}
    }
  },
  methods: {
    toDetail: function toDetail(item) {
      var name = item.fileName.split('.'),
          type = name[name.length - 1];

      if (type == 'png' || type == 'jpg' || type == 'jpeg') {
        Object(vant__WEBPACK_IMPORTED_MODULE_2__["ImagePreview"])(['http://10.221.29.4:17000' + item.url]);
      } else {
        this.$router.push({
          name: "pdfH5",
          query: {
            url: 'http://10.221.29.4:7001/ra/file/getFile?id=' + item.id,
            name: item.fileName
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/penaltyDealReport.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/caseDetail/components/penaltyDealReport.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/index.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "penaltyDealReport",
  props: {
    info: {
      type: Object,
      default: function _default() {}
    }
  },
  methods: {
    toDetail: function toDetail(item) {
      var name = item.fileName.split('.'),
          type = name[name.length - 1];

      if (type == 'png' || type == 'jpg' || type == 'jpeg') {
        Object(vant__WEBPACK_IMPORTED_MODULE_2__["ImagePreview"])(['http://10.221.29.4:17000' + item.url]);
      } else {
        this.$router.push({
          name: "pdfH5",
          query: {
            url: 'http://10.221.29.4:7001/ra/file/getFile?id=' + item.id,
            name: item.fileName
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/penaltyReport.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/caseDetail/components/penaltyReport.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/index.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "penaltyReport",
  props: {
    info: {
      type: Object,
      default: function _default() {}
    }
  },
  methods: {
    toDetail: function toDetail(item) {
      var name = item.fileName.split('.'),
          type = name[name.length - 1];

      if (type == 'png' || type == 'jpg' || type == 'jpeg') {
        Object(vant__WEBPACK_IMPORTED_MODULE_2__["ImagePreview"])(['http://10.221.29.4:17000' + item.url]);
      } else {
        this.$router.push({
          name: "pdfH5",
          query: {
            url: 'http://10.221.29.4:7001/ra/file/getFile?id=' + item.id,
            name: item.fileName
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/registerReport.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/caseDetail/components/registerReport.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/index.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "registerReport",
  props: {
    info: {
      type: Object,
      default: function _default() {}
    }
  },
  methods: {
    toDetail: function toDetail(item) {
      var name = item.fileName.split('.'),
          type = name[name.length - 1];

      if (type == 'png' || type == 'jpg' || type == 'jpeg') {
        Object(vant__WEBPACK_IMPORTED_MODULE_2__["ImagePreview"])(['http://10.221.29.4:17000' + item.url]);
      } else {
        this.$router.push({
          name: "pdfH5",
          query: {
            url: 'http://10.221.29.4:7001/ra/file/getFile?id=' + item.id,
            name: item.fileName
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/caseDetail/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_case__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/case */ "./src/api/case.js");
/* harmony import */ var _views_caseCheck_caseDetail_components_registerReport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/caseCheck/caseDetail/components/registerReport */ "./src/views/caseCheck/caseDetail/components/registerReport.vue");
/* harmony import */ var _views_caseCheck_caseDetail_components_cancelReport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/caseCheck/caseDetail/components/cancelReport */ "./src/views/caseCheck/caseDetail/components/cancelReport.vue");
/* harmony import */ var _views_caseCheck_caseDetail_components_insideDealReport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/views/caseCheck/caseDetail/components/insideDealReport */ "./src/views/caseCheck/caseDetail/components/insideDealReport.vue");
/* harmony import */ var _views_caseCheck_caseDetail_components_penaltyReport__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/views/caseCheck/caseDetail/components/penaltyReport */ "./src/views/caseCheck/caseDetail/components/penaltyReport.vue");
/* harmony import */ var _views_caseCheck_caseDetail_components_breakLawReport__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/views/caseCheck/caseDetail/components/breakLawReport */ "./src/views/caseCheck/caseDetail/components/breakLawReport.vue");
/* harmony import */ var _views_caseCheck_caseDetail_components_penaltyDealReport__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/views/caseCheck/caseDetail/components/penaltyDealReport */ "./src/views/caseCheck/caseDetail/components/penaltyDealReport.vue");
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/index.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_11__);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    registerReport: _views_caseCheck_caseDetail_components_registerReport__WEBPACK_IMPORTED_MODULE_4__["default"],
    cancelReport: _views_caseCheck_caseDetail_components_cancelReport__WEBPACK_IMPORTED_MODULE_5__["default"],
    insideDealReport: _views_caseCheck_caseDetail_components_insideDealReport__WEBPACK_IMPORTED_MODULE_6__["default"],
    penaltyReport: _views_caseCheck_caseDetail_components_penaltyReport__WEBPACK_IMPORTED_MODULE_7__["default"],
    breakLawReport: _views_caseCheck_caseDetail_components_breakLawReport__WEBPACK_IMPORTED_MODULE_8__["default"],
    penaltyDealReport: _views_caseCheck_caseDetail_components_penaltyDealReport__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  data: function data() {
    return {
      navTitle: '',
      loading: true,
      dialog: false,
      nextName: '',
      showPickerUser: false,
      info: {},
      caseName: '',
      columnsPerson: [],
      personArr: [],
      currentIndex: 0,
      nextDept: '',
      nextDeptId: '',
      nextNum: '',
      approvalUserId: localStorage.getItem("approvalUserId"),
      fileIdArr: [],
      content: '',
      url: localStorage.getItem("signUrl"),
      currentDate: new Date(),
      endPop: false,
      minEndDate: '',
      endTime: dayjs__WEBPACK_IMPORTED_MODULE_11___default()(new Date()).format('YYYY年MM月DD日')
    };
  },
  mounted: function mounted() {
    this.caseId = this.$route.query.caseId;
    this.caseName = this.$route.query.caseName;
    this.navTitle = this.$route.query.status == '待审批' ? '案件审批' : '案件详情';
    this.currentIndex = this.$route.query.status == '已审批' ? 999 : 0;
    console.log(this.approvalUserId);
    console.log(this.url);
    this.queryDetail();
  },
  methods: {
    initDate: function initDate() {
      var year = new Date().getFullYear(),
          month = new Date().getMonth() + 1,
          day = new Date().getDate();

      if (month < 10) {
        month = '0' + month;
      }

      if (day < 10) {
        day = '0' + day;
      }

      return year + '年' + month + '月' + day + '日';
    },
    showEndTime: function showEndTime(index, item) {
      var tempTime = '';

      if (index === 0) {
        tempTime = this.info.assistSignDate;
      } else {
        if (item.current === true) {
          tempTime = this.info.values[index - 1].signDate;
        }
      }

      var year = tempTime.substr(0, 4);
      var month = tempTime.substr(5, 2);
      var day = tempTime.substr(8, 2);
      var formatTime = year + '-' + month + '-' + day;
      var nextTime = dayjs__WEBPACK_IMPORTED_MODULE_11___default()(formatTime).format('YYYY-MM-DD');
      this.minEndDate = new Date(nextTime);
      this.endPop = true;
    },
    onConfirmEndTime: function onConfirmEndTime(value) {
      this.endTime = dayjs__WEBPACK_IMPORTED_MODULE_11___default()(value).format('YYYY年MM月DD日');
      this.endPop = false;
    },
    queryDetail: function queryDetail() {
      var _this = this;

      Object(_api_case__WEBPACK_IMPORTED_MODULE_3__["getReportDetail"])({
        caseId: this.caseId
      }).then(function (res) {
        _this.info = res.data;
        _this.info.takerSign = _this.info.takerSign ? 'http://10.221.29.4:7001/ra' + _this.info.takerSign : '';
        _this.info.assistSign = _this.info.assistSign ? 'http://10.221.29.4:7001/ra' + _this.info.assistSign : '';
        var arr = res.data.values;

        for (var i = 0; i < arr.length; i++) {
          arr[i].signUrl = 'http://10.221.29.4:7001/ra' + arr[i].signUrl;

          if (arr[i].current && res.data.status == '待审批') {
            arr[i].signDate = _this.endTime;

            if (_this.type == 'ppa') {
              if (arr[i].attrName.indexOf('审批') > -1) {
                arr[i].opinion = 1;
                arr[i].content = arr[i].content ? arr[i].content : '拟同意';
              }
            } else {
              arr[i].opinion = 1;
              var content = arr[i].nextNum == 0 ? '同意' : '拟同意';
              arr[i].content = arr[i].content ? arr[i].content : content;
            }

            _this.currentIndex = i + 1;
            _this.nextNum = arr[i].nextNum;

            if (i != arr.length - 1) {
              _this.nextDept = arr[i + 1].deptType;
              _this.nextDeptId = arr[i + 1].deptId;
            }
          } else if (arr[i].current) {
            _this.nextName = arr[i].approvalUsername;
          }
        } //判断是否为第一步


        if (_this.currentIndex == 0) {
          _this.fileList = [];
          var files = res.data.files;

          if (_this.info.assist) {
            _this.currentUserId = _this.info.assist;
          } else {
            _this.currentUserId = _this.info.taker;
            _this.info.takerSignDate = _this.initDate();
          }

          files.forEach(function (item) {
            _this.fileList.push({
              id: item.id,
              name: item.fileName,
              url: item.url
            });
          });

          if (_this.info.assist) {
            _this.nextDept = arr[0].deptType;
            _this.nextDeptId = arr[0].deptId;

            if (res.data.status != '待审批') {
              _this.nextName = _this.info.assistName;
            }
          } else {
            _this.nextDept = '协办人';
            _this.nextDeptId = '';

            if (res.data.status != '待审批') {
              _this.nextName = _this.info.takerName;
            }
          }
        }

        if (_this.info.type != 'ppa') {
          _this.initPersonData();
        }
      });
      this.loading = false;
    },
    initPersonData: function initPersonData() {
      var _this2 = this;

      Object(_api_case__WEBPACK_IMPORTED_MODULE_3__["getUserList"])({
        deptId: this.nextDeptId,
        type: this.nextDept
      }).then(function (res) {
        var data = res.data;
        _this2.columnsPerson = [];
        data.forEach(function (item) {
          _this2.columnsPerson.push(item.username);
        });
        _this2.personArr = res.data;
      });
    },
    submit: function submit() {
      var info = this.info,
          currentIndex = this.currentIndex,
          nextDept = this.nextDept,
          nextName = this.nextName;
      var type = info.type;

      if (nextDept && !nextName) {
        Object(vant__WEBPACK_IMPORTED_MODULE_10__["Toast"])('请选择下一个步骤办理人员');
        return;
      }

      if (currentIndex != 0) {
        var opinion = info.values[currentIndex - 1].opinion,
            signUrl = info.values[currentIndex - 1].signUrl;

        if (type != 'ppa') {
          this.dialog = true;
        } else {
          // if(opinion == 0 && type != 'ppa'){
          // this.$confirm('是否确定为不同意?', '提示', {
          //     confirmButtonText: '确定',
          //     cancelButtonText: '取消',
          //     type: 'warning'
          // }).then(() => {
          //     this.handleNext();
          // }).catch(() => {});
          // }else{
          this.handleNext(); // }
        }
      } else {
        if (type != 'ppa') {
          this.dialog = true;
        } else {
          this.handleSave();
        }
      }
    },
    handleSave: function handleSave() {
      var _this3 = this;

      if (this.currentIndex != 0) {
        this.handleNext();
      } else {
        var info = this.info,
            nextName = this.nextName,
            nextDept = this.nextDept,
            personArr = this.personArr,
            caseId = this.caseId,
            approvalUserId = this.approvalUserId,
            url = this.url;
        info.approvalId = caseId || '';

        if (!info.taker) {
          info.taker = approvalUserId;
        } else {
          info.assist = approvalUserId;
          info.assistSign = url;
          info.assistSignDate = this.initDate();
        }

        info.files = this.fileIdArr;

        if (nextDept) {
          for (var i = 0; i < personArr.length; i++) {
            if (personArr[i].username == nextName) {
              info.next = personArr[i].approvalUserId;
            }
          }
        }

        Object(_api_case__WEBPACK_IMPORTED_MODULE_3__["addReport"])(info).then(function () {
          Object(vant__WEBPACK_IMPORTED_MODULE_10__["Toast"])('成功');

          if (nextDept) {
            _this3.dialog = false;
          }

          _this3.$router.go(-1);
        }).finally(function () {});
      }
    },
    handleNext: function handleNext() {
      var _this4 = this;

      var info = this.info,
          nextDept = this.nextDept,
          nextName = this.nextName,
          personArr = this.personArr,
          url = this.url;
      var string = info.values[this.currentIndex - 1];

      if (nextDept) {
        for (var i = 0; i < personArr.length; i++) {
          if (personArr[i].username == nextName) {
            string.next = personArr[i].approvalUserId;
          }
        }
      }

      string.signUrl = url;
      string.caseId = this.caseId;
      string.signDate = this.endTime;
      Object(_api_case__WEBPACK_IMPORTED_MODULE_3__["signReport"])(string, info.type).then(function () {
        Object(vant__WEBPACK_IMPORTED_MODULE_10__["Toast"])('成功');

        if (_this4.nextDept) {
          _this4.dialog = false;
        }

        _this4.$router.go(-1);
      }).finally(function () {});
    },
    onConfirmUser: function onConfirmUser(value) {
      this.nextName = value;
      this.showPickerUser = false;
    },
    closeModal: function closeModal() {
      this.dialog = false;
    },
    sure: function sure() {
      var _this5 = this;

      var info = this.info,
          currentIndex = this.currentIndex;
      var that = this;

      if (this.content === '') {
        Object(vant__WEBPACK_IMPORTED_MODULE_10__["Toast"])('请输入签名密码');
        return;
      }

      Object(_api_case__WEBPACK_IMPORTED_MODULE_3__["checkPwd"])({
        password: this.content
      }).then(function (res) {
        if (res.msg == 'success') {
          if (currentIndex != 0) {
            that.$set(info.values[_this5.currentIndex - 1], 'signUrl', that.url);
            that.$set(info.values[_this5.currentIndex - 1], 'approvalUsername', that.username);

            _this5.handleNext();
          } else if (currentIndex == 0) {
            if (!info.takerSign) {
              that.$set(that.info, 'takerSign', that.url);
            } else {
              that.$set(that.info, 'assistSign', that.url);
            }

            _this5.handleSave();
          }

          _this5.closeModal();
        } else {
          Object(vant__WEBPACK_IMPORTED_MODULE_10__["Toast"])(res.msg);
        }
      }).finally(function () {});
    },
    changeOpinion: function changeOpinion(item) {
      var that = this;

      if (item.opinion == 1) {
        that.$set(item, 'content', item.nextNum > 0 ? '拟同意' : '同意');
      } else {
        that.$set(item, 'content', '不同意');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/breakLawReport.vue?vue&type=template&id=02ec931a&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/caseDetail/components/breakLawReport.vue?vue&type=template&id=02ec931a&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "content_div" }, [
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("审批号")]),
        _c("span", { staticClass: "value" }, [
          _vm._v(
            " 昆生环拘移（" +
              _vm._s(new Date().getFullYear()) +
              "）年1- " +
              _vm._s(_vm.info.punishNo) +
              "号"
          ),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("案由")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.reason)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("企业名称或其他经营者")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.adminResult)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("组织机构代码")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.orgCode)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("地址")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.addr)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("邮政编码")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.zipCode)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("法定代表人或负责人")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.legalMan)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("有效证件及号码")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.legalId)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("联系电话")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.legalTel)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("企业主要负责人")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.linkMan)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("有效证件及号码")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.linkId)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("联系电话")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.legalTel)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("调查人员")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.investName)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("承办部门")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.chargeDept)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("案情简介")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.simpleSituation)),
        ]),
      ]),
    ]),
    _c("div", { staticClass: "center_title" }, [
      _c("span", [
        _vm._v(
          _vm._s(
            _vm.info.type == "cpa"
              ? "行政拘留处罚移送依据及处理意见"
              : "移送依据及处理意见"
          )
        ),
      ]),
    ]),
    _c("div", { staticClass: "max_text" }, [
      _c("span", [_vm._v(_vm._s(_vm.info.simpleSituation))]),
    ]),
    _c(
      "div",
      { staticClass: "max_file" },
      [
        _c("span", [_vm._v("附件")]),
        _vm._l(_vm.info.files, function (item) {
          return _c("div", [
            _c(
              "span",
              {
                staticClass: "file",
                on: {
                  click: function ($event) {
                    return _vm.toDetail(item)
                  },
                },
              },
              [_vm._v(_vm._s(item.fileName))]
            ),
          ])
        }),
      ],
      2
    ),
    _c("div", { staticClass: "content_div_item_two" }, [
      _c("span", { staticClass: "text" }, [_vm._v("经办人")]),
      _vm.info.takerSign
        ? _c("img", { staticClass: "icon", attrs: { src: _vm.info.takerSign } })
        : _vm._e(),
      _c("span", { staticClass: "text" }, [_vm._v("协办人")]),
      _vm.info.assistSign
        ? _c("img", {
            staticClass: "icon",
            attrs: { src: _vm.info.assistSign },
          })
        : _vm._e(),
      _c("span", { staticClass: "text date" }, [
        _vm._v(" " + _vm._s(_vm.info.takerSignDate)),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/cancelReport.vue?vue&type=template&id=699c210a&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/caseDetail/components/cancelReport.vue?vue&type=template&id=699c210a&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "content_div" }, [
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("案件来源")]),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.source)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("原立案号")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.caseNo)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("案由")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.reason)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("名称或姓名")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.name)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("地址（住址）")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.addr)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("邮政编码")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.zipCode)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [
          _vm._v("营业执照注册号(公民身份号码)"),
        ]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.idNo)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("组织机构代码（行业）")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.orgCode)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("社会信用代码")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.creditCode)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("法定代表人（负责人）")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.legalMan)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("职务")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.post)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("销案理由")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.cancelReason)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("备注")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.remark)),
        ]),
      ]),
    ]),
    _vm._m(0),
    _c("div", { staticClass: "max_text" }, [
      _c("span", [_vm._v(_vm._s(_vm.info.simpleSituation))]),
    ]),
    _c(
      "div",
      { staticClass: "max_file" },
      [
        _c("span", [_vm._v("附件")]),
        _vm._l(_vm.info.files, function (item) {
          return _c("div", [
            _c(
              "span",
              {
                staticClass: "file",
                on: {
                  click: function ($event) {
                    return _vm.toDetail(item)
                  },
                },
              },
              [_vm._v(_vm._s(item.fileName))]
            ),
          ])
        }),
      ],
      2
    ),
    _c("div", { staticClass: "content_div_item_two" }, [
      _c("span", { staticClass: "text" }, [_vm._v("承办人")]),
      _vm.info.takerSign
        ? _c("img", { staticClass: "icon", attrs: { src: _vm.info.takerSign } })
        : _vm._e(),
      _c("span", { staticClass: "text" }, [_vm._v("协办人")]),
      _vm.info.assistSign
        ? _c("img", {
            staticClass: "icon",
            attrs: { src: _vm.info.assistSign },
          })
        : _vm._e(),
      _c("span", { staticClass: "text date" }, [
        _vm._v(" " + _vm._s(_vm.info.takerSignDate)),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "center_title" }, [
      _c("span", [_vm._v("承办人意见")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/insideDealReport.vue?vue&type=template&id=45eb2cd0&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/caseDetail/components/insideDealReport.vue?vue&type=template&id=45eb2cd0&scoped=true& ***!
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
  return _c("div", [
    _c("div", { staticClass: "content_div" }, [
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("申请事项")]),
        _c("span", { staticClass: "value" }, [
          _vm._v(
            " " +
              _vm._s(_vm.info.applyItem) +
              " " +
              _vm._s(
                _vm.info.type == "ana"
                  ? "事先(听证)告知书审批"
                  : _vm.info.type == "ida"
                  ? "延期办理案件审批"
                  : _vm.info.type == "idfa"
                  ? "延期分期缴纳罚款审批"
                  : _vm.info.type == "iia"
                  ? "处罚决定书审批"
                  : _vm.info.type == "inba"
                  ? "案件处罚决定书审批"
                  : _vm.info.type == "insa"
                  ? "案件处罚决定书审批"
                  : ""
              ) +
              " "
          ),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("案由")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.reason)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("案件来源")]),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.source)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("名称或姓名")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.name)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("社会信用代码/身份证号")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.idNo)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("联系电话")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.tel)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("地址（住址）")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.addr)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("法定代表人(负责人)")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.legalMan)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("职务")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.post)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("备注")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.remark)),
        ]),
      ]),
    ]),
    _vm._m(0),
    _c("div", { staticClass: "max_text" }, [
      _c("span", [_vm._v(_vm._s(_vm.info.simpleSituation))]),
    ]),
    _c(
      "div",
      { staticClass: "max_file" },
      [
        _c("span", [_vm._v("附件")]),
        _vm._l(_vm.info.files, function (item) {
          return _c("div", [
            _c(
              "span",
              {
                staticClass: "file",
                on: {
                  click: function ($event) {
                    return _vm.toDetail(item)
                  },
                },
              },
              [_vm._v(_vm._s(item.fileName))]
            ),
          ])
        }),
      ],
      2
    ),
    _c("div", { staticClass: "content_div_item_two" }, [
      _c("span", { staticClass: "text" }, [_vm._v("承办人")]),
      _vm.info.takerSign
        ? _c("img", { staticClass: "icon", attrs: { src: _vm.info.takerSign } })
        : _vm._e(),
      _c("span", { staticClass: "text" }, [_vm._v("协办人")]),
      _vm.info.assistSign
        ? _c("img", {
            staticClass: "icon",
            attrs: { src: _vm.info.assistSign },
          })
        : _vm._e(),
      _c("span", { staticClass: "text date" }, [
        _vm._v(" " + _vm._s(_vm.info.takerSignDate)),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "center_title" }, [
      _c("span", [_vm._v("案情简介及其处理建议")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/penaltyDealReport.vue?vue&type=template&id=536524c6&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/caseDetail/components/penaltyDealReport.vue?vue&type=template&id=536524c6&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "content_div" }, [
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("标题")]),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.source) + "行政处罚决定书信息公开审批"),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("备注")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.remark)),
        ]),
      ]),
    ]),
    _vm._m(0),
    _c("div", { staticClass: "max_text" }, [
      _c("span", [_vm._v(_vm._s(_vm.info.linkMan))]),
    ]),
    _c(
      "div",
      { staticClass: "max_file" },
      [
        _c("span", [_vm._v("附件")]),
        _vm._l(_vm.info.files, function (item) {
          return _c("div", [
            _c(
              "span",
              {
                staticClass: "file",
                on: {
                  click: function ($event) {
                    return _vm.toDetail(item)
                  },
                },
              },
              [_vm._v(_vm._s(item.fileName))]
            ),
          ])
        }),
      ],
      2
    ),
    _c("div", { staticClass: "content_div_item_two" }, [
      _c("span", { staticClass: "text" }, [_vm._v("西山分局")]),
      _c("span", { staticClass: "text date" }, [
        _vm._v(" " + _vm._s(_vm.info.takerSignDate)),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "center_title" }, [
      _c("span", [_vm._v("分局拟稿人")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/penaltyReport.vue?vue&type=template&id=60281691&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/caseDetail/components/penaltyReport.vue?vue&type=template&id=60281691&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "content_div" }, [
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("案由")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.reason)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("案件来源")]),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.source)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("当事人名称/姓名")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.name)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("法定代表人（负责人）")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.legalMan)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("工作单位")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.workName)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("职务或职业")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.post)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("地址或住址")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.addr)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("法定代表人")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.addr)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("立案时间")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.caseDate)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("案件承办人及执法证编号")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.linkMan)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("行政处罚决定书文号")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.punishNo)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("简要案情及查处经过")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.simpleSituation)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("处理依据及结果")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.result)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("行政复议行政诉讼情况")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.adminResult)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [
          _vm._v("处罚执行情况及罚没财物的处置情况"),
        ]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.punishSituation)),
        ]),
      ]),
    ]),
    _vm._m(0),
    _c("div", { staticClass: "max_text" }, [
      _c("span", [_vm._v(_vm._s(_vm.info.cancelReason))]),
    ]),
    _c(
      "div",
      { staticClass: "max_file" },
      [
        _c("span", [_vm._v("附件")]),
        _vm._l(_vm.info.files, function (item) {
          return _c("div", [
            _c(
              "span",
              {
                staticClass: "file",
                on: {
                  click: function ($event) {
                    return _vm.toDetail(item)
                  },
                },
              },
              [_vm._v(_vm._s(item.fileName))]
            ),
          ])
        }),
      ],
      2
    ),
    _c("div", { staticClass: "content_div_item_two" }, [
      _c("span", { staticClass: "text" }, [_vm._v("承办人")]),
      _vm.info.takerSign
        ? _c("img", { staticClass: "icon", attrs: { src: _vm.info.takerSign } })
        : _vm._e(),
      _c("span", { staticClass: "text" }, [_vm._v("协办人")]),
      _vm.info.assistSign
        ? _c("img", {
            staticClass: "icon",
            attrs: { src: _vm.info.assistSign },
          })
        : _vm._e(),
      _c("span", { staticClass: "text date" }, [
        _vm._v(" " + _vm._s(_vm.info.takerSignDate)),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "center_title" }, [
      _c("span", [_vm._v("承办人意见")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/registerReport.vue?vue&type=template&id=4abd08f3&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/caseDetail/components/registerReport.vue?vue&type=template&id=4abd08f3&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "content_div" }, [
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("案件来源")]),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.source)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("立案号")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.caseNo)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("案由")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.reason)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("名称或姓名")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.name)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("邮政编码")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.zipCode)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("社会信用代码/身份证号")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.idNo)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("联系电话")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.tel)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("地址（住址）")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.addr)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("法定代表人")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.legalMan)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("职务")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.post)),
        ]),
      ]),
      _c("div", { staticClass: "content_div_item" }, [
        _c("span", { staticClass: "text" }, [_vm._v("备注")]),
        _c("br"),
        _c("span", { staticClass: "value" }, [
          _vm._v(" " + _vm._s(_vm.info.remark)),
        ]),
      ]),
    ]),
    _vm._m(0),
    _c("div", { staticClass: "max_text" }, [
      _c("span", [_vm._v(_vm._s(_vm.info.simpleSituation))]),
    ]),
    _c(
      "div",
      { staticClass: "max_file" },
      [
        _c("span", [_vm._v("附件")]),
        _vm._l(_vm.info.files, function (item) {
          return _c("div", [
            _c(
              "span",
              {
                staticClass: "file",
                on: {
                  click: function ($event) {
                    return _vm.toDetail(item)
                  },
                },
              },
              [_vm._v(_vm._s(item.fileName))]
            ),
          ])
        }),
      ],
      2
    ),
    _c("div", { staticClass: "content_div_item_two" }, [
      _c("span", { staticClass: "text" }, [_vm._v("承办人")]),
      _vm.info.takerSign
        ? _c("img", { staticClass: "icon", attrs: { src: _vm.info.takerSign } })
        : _vm._e(),
      _c("span", { staticClass: "text" }, [_vm._v("协办人")]),
      _vm.info.assistSign
        ? _c("img", {
            staticClass: "icon",
            attrs: { src: _vm.info.assistSign },
          })
        : _vm._e(),
      _c("span", { staticClass: "text date" }, [
        _vm._v(" " + _vm._s(_vm.info.takerSignDate)),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "center_title" }, [
      _c("span", [_vm._v("案情简介及立案理由")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/index.vue?vue&type=template&id=34660b16&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/caseDetail/index.vue?vue&type=template&id=34660b16&scoped=true& ***!
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
    [
      _c("van-nav-bar", {
        attrs: { title: _vm.navTitle, "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
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
      _c(
        "div",
        {
          staticClass: "check-detail-wrapper",
          style:
            _vm.info.status === "待审批"
              ? "height: calc(100vh - 135px)"
              : "height: calc(100vh - 55px);",
        },
        [
          _c("div", { staticClass: "center_title" }, [
            _c("span", [_vm._v("基本信息")]),
            _c("div", { staticClass: "type" }, [
              _c("span", [_vm._v(_vm._s(_vm.caseName))]),
            ]),
          ]),
          _vm.info.type == "ra"
            ? _c("register-report", { attrs: { info: _vm.info } })
            : _vm._e(),
          _vm.info.type == "ca"
            ? _c("cancel-report", { attrs: { info: _vm.info } })
            : _vm._e(),
          _vm.info.type == "ana" ||
          _vm.info.type == "ida" ||
          _vm.info.type == "idfa" ||
          _vm.info.type == "iia" ||
          _vm.info.type == "inba" ||
          _vm.info.type == "insa"
            ? _c("inside-deal-report", { attrs: { info: _vm.info } })
            : _vm._e(),
          _vm.info.type == "cea"
            ? _c("penalty-report", { attrs: { info: _vm.info } })
            : _vm._e(),
          _vm.info.type == "cpa" || _vm.info.type == "cca"
            ? _c("break-law-report", { attrs: { info: _vm.info } })
            : _vm._e(),
          _vm.info.type == "ppa"
            ? _c("penalty-deal-report", { attrs: { info: _vm.info } })
            : _vm._e(),
          _vm._l(_vm.info.values, function (item, i) {
            return _c("div", [
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: item.signDate || item.current,
                      expression: "item.signDate || item.current",
                    },
                  ],
                  staticClass: "center_title",
                },
                [_c("span", [_vm._v(_vm._s(item.attrName))])]
              ),
              _c(
                "div",
                {
                  class:
                    _vm.info.status === "待审批" && item.current
                      ? "max_text_two"
                      : "more_div",
                },
                [
                  _vm.info.status === "待审批" && item.current
                    ? _c(
                        "div",
                        [
                          _c(
                            "van-radio-group",
                            {
                              attrs: { direction: "horizontal" },
                              on: {
                                change: function ($event) {
                                  return _vm.changeOpinion(item)
                                },
                              },
                              model: {
                                value: item.opinion,
                                callback: function ($$v) {
                                  _vm.$set(item, "opinion", $$v)
                                },
                                expression: "item.opinion",
                              },
                            },
                            [
                              _c(
                                "van-radio",
                                { attrs: { name: 1, "icon-size": "16px" } },
                                [
                                  _vm._v(
                                    _vm._s(
                                      item.nextNum == 0 ? "同意" : "拟同意"
                                    )
                                  ),
                                ]
                              ),
                              _c(
                                "van-radio",
                                { attrs: { name: 0, "icon-size": "16px" } },
                                [_vm._v("不同意")]
                              ),
                            ],
                            1
                          ),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: item.content,
                                expression: "item.content",
                              },
                            ],
                            staticClass: "inputW",
                            attrs: { rows: "6", placeholder: "请输入意见" },
                            domProps: { value: item.content },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(item, "content", $event.target.value)
                              },
                            },
                          }),
                          (_vm.info.type == "inba" ||
                            _vm.info.typetype == "insa" ||
                            _vm.info.typetype == "iia") &&
                          item.attrName.indexOf("市局法规处") > -1
                            ? _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.remark,
                                    expression: "item.remark",
                                  },
                                ],
                                staticClass: "inputW",
                                attrs: {
                                  rows: "6",
                                  placeholder: "请输入文书审核意见",
                                },
                                domProps: { value: item.remark },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "remark",
                                      $event.target.value
                                    )
                                  },
                                },
                              })
                            : _vm._e(),
                          _c(
                            "div",
                            {
                              staticStyle: {
                                display: "flex",
                                "justify-content": "flex-end",
                                "margin-top": "10px",
                              },
                            },
                            [
                              _c(
                                "div",
                                {
                                  on: {
                                    click: function ($event) {
                                      return _vm.showEndTime(i, item)
                                    },
                                  },
                                },
                                [
                                  _vm._v(" " + _vm._s(_vm.endTime) + " "),
                                  _c("van-icon", {
                                    attrs: { name: "arrow-down" },
                                  }),
                                ],
                                1
                              ),
                            ]
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
                  !(_vm.info.status === "待审批" && item.current) &&
                  item.signDate
                    ? _c("div", [
                        _c("div", { staticClass: "max_text" }, [
                          _c("span", [_vm._v(_vm._s(item.content))]),
                          (_vm.info.type == "inba" ||
                            _vm.info.typetype == "insa" ||
                            _vm.info.typetype == "iia") &&
                          item.attrName.indexOf("市局法规处") > -1
                            ? _c("span", [_vm._v(_vm._s(item.remark))])
                            : _vm._e(),
                        ]),
                        _c("div", { staticClass: "content_div_item_two" }, [
                          _c("span", { staticClass: "text" }, [
                            _vm._v(
                              _vm._s(
                                _vm.info.type != "ppa"
                                  ? item.sign
                                  : item.approvalUsername
                              )
                            ),
                          ]),
                          item.signUrl && _vm.info.type != "ppa"
                            ? _c("img", {
                                staticClass: "icon",
                                attrs: { src: item.signUrl },
                              })
                            : _vm._e(),
                          _c("span", { staticClass: "text date" }, [
                            _vm._v(_vm._s(item.signDate)),
                          ]),
                        ]),
                      ])
                    : _vm._e(),
                ]
              ),
            ])
          }),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.nextDept,
                  expression: "nextDept",
                },
              ],
              staticClass: "center_title",
            },
            [_c("span", [_vm._v("下一步骤")])]
          ),
          _vm.info.status === "待审批" && _vm.nextDept && _vm.info.type != "ppa"
            ? _c(
                "div",
                { staticClass: "content_div" },
                [
                  _c("van-field", {
                    attrs: {
                      "is-link": "",
                      readonly: "",
                      name: "picker",
                      label: "办理人",
                      "input-align": "right",
                      placeholder: "点击选择下一步骤办理人",
                    },
                    on: {
                      click: function ($event) {
                        _vm.showPickerUser = true
                      },
                    },
                    model: {
                      value: _vm.nextName,
                      callback: function ($$v) {
                        _vm.nextName = $$v
                      },
                      expression: "nextName",
                    },
                  }),
                  _c(
                    "van-popup",
                    {
                      attrs: { position: "bottom" },
                      model: {
                        value: _vm.showPickerUser,
                        callback: function ($$v) {
                          _vm.showPickerUser = $$v
                        },
                        expression: "showPickerUser",
                      },
                    },
                    [
                      _c("van-picker", {
                        attrs: {
                          "show-toolbar": "",
                          columns: _vm.columnsPerson,
                          "value-key": "name",
                        },
                        on: {
                          confirm: _vm.onConfirmUser,
                          cancel: function ($event) {
                            _vm.showPickerUser = false
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
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value:
                    _vm.info.status !== "待审批" && _vm.currentIndex != 999,
                  expression: "info.status !== '待审批' && currentIndex!=999",
                },
              ],
              staticClass: "content_div",
            },
            [
              _c("div", { staticClass: "content_div_item" }, [
                _c("span", { staticClass: "text" }, [_vm._v("办理人")]),
                _c("span", { staticClass: "value" }, [
                  _vm._v(_vm._s(_vm.nextName)),
                ]),
              ]),
            ]
          ),
        ],
        2
      ),
      _vm.info.status === "待审批"
        ? _c("div", { staticClass: "check-detail-bottom" }, [
            _c(
              "div",
              {
                staticClass: "yes",
                on: {
                  click: function ($event) {
                    return _vm.submit()
                  },
                },
              },
              [_vm._v("确定提交")]
            ),
          ])
        : _vm._e(),
      _c(
        "van-popup",
        {
          style: { width: "90%" },
          model: {
            value: _vm.dialog,
            callback: function ($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog",
          },
        },
        [
          _c(
            "div",
            { staticClass: "popupWrapper" },
            [
              _c("p", [_vm._v("请输入签名密码")]),
              _c("van-field", {
                attrs: { type: "password", placeholder: "请输入签名密码" },
                model: {
                  value: _vm.content,
                  callback: function ($$v) {
                    _vm.content = $$v
                  },
                  expression: "content",
                },
              }),
              _c(
                "div",
                { staticClass: "popupFooter" },
                [
                  _c(
                    "van-button",
                    {
                      attrs: { type: "default" },
                      on: { click: _vm.closeModal },
                    },
                    [_vm._v("取消")]
                  ),
                  _c(
                    "van-button",
                    { attrs: { type: "info" }, on: { click: _vm.sure } },
                    [_vm._v("确定")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
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
          _c("van-datetime-picker", {
            attrs: {
              type: "date",
              title: "选择年月",
              "min-date": _vm.minEndDate,
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
          }),
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/breakLawReport.vue?vue&type=style&index=0&id=02ec931a&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/caseDetail/components/breakLawReport.vue?vue&type=style&index=0&id=02ec931a&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".center_title[data-v-02ec931a] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 20px;\n  font-size: 16px;\n  font-weight: 600;\n  height: 40px;\n  line-height: 40px;\n}\n.center_title .type[data-v-02ec931a] {\n  color: #43cf7c;\n  font-size: 12px;\n}\n.content_div[data-v-02ec931a] {\n  margin: 5px 10px;\n  background: #ffffff;\n  padding: 15px;\n  border-radius: 10px;\n}\n.content_div .content_div_item[data-v-02ec931a] {\n  line-height: 20px;\n  margin-bottom: 5px;\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n}\n.content_div .content_div_item .text[data-v-02ec931a] {\n  color: rgba(18, 18, 54, 0.5);\n  min-width: 85px;\n}\n.content_div .content_div_item .value[data-v-02ec931a] {\n  color: #121236;\n  font-weight: 500;\n}\n.content_div[data-v-02ec931a]  .van-cell {\n  padding: 0;\n}\n.max_text[data-v-02ec931a] {\n  background: #ffffff;\n  font-size: 12px;\n  font-weight: 500;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n  border-bottom: 1px solid #f5f6f8;\n  padding: 15px;\n  margin: 5px 10px 0 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.max_file[data-v-02ec931a] {\n  background: #ffffff;\n  font-size: 12px;\n  font-weight: 500;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n  border-bottom: 1px solid #f5f6f8;\n  padding: 5px 15px;\n  margin: 0 10px 0 10px;\n  line-height: 25px;\n}\n.max_file .file[data-v-02ec931a] {\n  color: #16bcff;\n}\n.content_div_item_two[data-v-02ec931a] {\n  font-size: 12px;\n  padding: 5px 15px;\n  margin: 0 10px 5px;\n  background: #ffffff;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  display: flex;\n  line-height: 30px;\n  /*justify-content: space-between;*/\n}\n.content_div_item_two .text[data-v-02ec931a] {\n  color: rgba(18, 18, 54, 0.5);\n  /*min-width: 85px;*/\n  /*width: 60px;*/\n}\n.content_div_item_two > img[data-v-02ec931a] {\n  height: 25px;\n  margin: 0px 10px;\n}\n.content_div_item_two .date[data-v-02ec931a] {\n  margin-left: auto;\n}\n.content_div_item_two .value[data-v-02ec931a] {\n  color: #121236;\n  font-weight: 500;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/cancelReport.vue?vue&type=style&index=0&id=699c210a&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/caseDetail/components/cancelReport.vue?vue&type=style&index=0&id=699c210a&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".center_title[data-v-699c210a] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 20px;\n  font-size: 16px;\n  font-weight: 600;\n  height: 40px;\n  line-height: 40px;\n}\n.center_title .type[data-v-699c210a] {\n  color: #43cf7c;\n  font-size: 12px;\n}\n.content_div[data-v-699c210a] {\n  margin: 5px 10px;\n  background: #ffffff;\n  padding: 15px;\n  border-radius: 10px;\n}\n.content_div .content_div_item[data-v-699c210a] {\n  line-height: 20px;\n  margin-bottom: 5px;\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n}\n.content_div .content_div_item .text[data-v-699c210a] {\n  color: rgba(18, 18, 54, 0.5);\n  min-width: 85px;\n}\n.content_div .content_div_item .value[data-v-699c210a] {\n  color: #121236;\n  font-weight: 500;\n}\n.content_div[data-v-699c210a]  .van-cell {\n  padding: 0;\n}\n.max_text[data-v-699c210a] {\n  background: #ffffff;\n  font-size: 12px;\n  font-weight: 500;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n  border-bottom: 1px solid #f5f6f8;\n  padding: 15px;\n  margin: 5px 10px 0 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.max_file[data-v-699c210a] {\n  background: #ffffff;\n  font-size: 12px;\n  font-weight: 500;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n  border-bottom: 1px solid #f5f6f8;\n  padding: 5px 15px;\n  margin: 0 10px 0 10px;\n  line-height: 25px;\n}\n.max_file .file[data-v-699c210a] {\n  color: #16bcff;\n}\n.content_div_item_two[data-v-699c210a] {\n  font-size: 12px;\n  padding: 5px 15px;\n  margin: 0 10px 5px;\n  background: #ffffff;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  display: flex;\n  line-height: 30px;\n  /*justify-content: space-between;*/\n}\n.content_div_item_two .text[data-v-699c210a] {\n  color: rgba(18, 18, 54, 0.5);\n  /*min-width: 85px;*/\n  /*width: 60px;*/\n}\n.content_div_item_two > img[data-v-699c210a] {\n  height: 25px;\n  margin: 0px 10px;\n}\n.content_div_item_two .date[data-v-699c210a] {\n  margin-left: auto;\n}\n.content_div_item_two .value[data-v-699c210a] {\n  color: #121236;\n  font-weight: 500;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/insideDealReport.vue?vue&type=style&index=0&id=45eb2cd0&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/caseDetail/components/insideDealReport.vue?vue&type=style&index=0&id=45eb2cd0&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".center_title[data-v-45eb2cd0] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 20px;\n  font-size: 16px;\n  font-weight: 600;\n  height: 40px;\n  line-height: 40px;\n}\n.center_title .type[data-v-45eb2cd0] {\n  color: #43cf7c;\n  font-size: 12px;\n}\n.content_div[data-v-45eb2cd0] {\n  margin: 5px 10px;\n  background: #ffffff;\n  padding: 15px;\n  border-radius: 10px;\n}\n.content_div .content_div_item[data-v-45eb2cd0] {\n  line-height: 20px;\n  margin-bottom: 5px;\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n}\n.content_div .content_div_item .text[data-v-45eb2cd0] {\n  color: rgba(18, 18, 54, 0.5);\n  min-width: 85px;\n}\n.content_div .content_div_item .value[data-v-45eb2cd0] {\n  color: #121236;\n  font-weight: 500;\n}\n.content_div[data-v-45eb2cd0]  .van-cell {\n  padding: 0;\n}\n.max_text[data-v-45eb2cd0] {\n  background: #ffffff;\n  font-size: 12px;\n  font-weight: 500;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n  border-bottom: 1px solid #f5f6f8;\n  padding: 15px;\n  margin: 5px 10px 0 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.max_file[data-v-45eb2cd0] {\n  background: #ffffff;\n  font-size: 12px;\n  font-weight: 500;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n  border-bottom: 1px solid #f5f6f8;\n  padding: 5px 15px;\n  margin: 0 10px 0 10px;\n  line-height: 25px;\n}\n.max_file .file[data-v-45eb2cd0] {\n  color: #16bcff;\n}\n.content_div_item_two[data-v-45eb2cd0] {\n  font-size: 12px;\n  padding: 5px 15px;\n  margin: 0 10px 5px;\n  background: #ffffff;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  display: flex;\n  line-height: 30px;\n  /*justify-content: space-between;*/\n}\n.content_div_item_two .text[data-v-45eb2cd0] {\n  color: rgba(18, 18, 54, 0.5);\n  /*min-width: 85px;*/\n  /*width: 60px;*/\n}\n.content_div_item_two > img[data-v-45eb2cd0] {\n  height: 25px;\n  margin: 0px 10px;\n}\n.content_div_item_two .date[data-v-45eb2cd0] {\n  margin-left: auto;\n}\n.content_div_item_two .value[data-v-45eb2cd0] {\n  color: #121236;\n  font-weight: 500;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/penaltyDealReport.vue?vue&type=style&index=0&id=536524c6&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/caseDetail/components/penaltyDealReport.vue?vue&type=style&index=0&id=536524c6&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".center_title[data-v-536524c6] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 20px;\n  font-size: 16px;\n  font-weight: 600;\n  height: 40px;\n  line-height: 40px;\n}\n.center_title .type[data-v-536524c6] {\n  color: #43cf7c;\n  font-size: 12px;\n}\n.content_div[data-v-536524c6] {\n  margin: 5px 10px;\n  background: #ffffff;\n  padding: 15px;\n  border-radius: 10px;\n}\n.content_div .content_div_item[data-v-536524c6] {\n  line-height: 20px;\n  margin-bottom: 5px;\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n}\n.content_div .content_div_item .text[data-v-536524c6] {\n  color: rgba(18, 18, 54, 0.5);\n  min-width: 85px;\n}\n.content_div .content_div_item .value[data-v-536524c6] {\n  color: #121236;\n  font-weight: 500;\n}\n.content_div[data-v-536524c6]  .van-cell {\n  padding: 0;\n}\n.max_text[data-v-536524c6] {\n  background: #ffffff;\n  font-size: 12px;\n  font-weight: 500;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n  border-bottom: 1px solid #f5f6f8;\n  padding: 15px;\n  margin: 5px 10px 0 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.max_file[data-v-536524c6] {\n  background: #ffffff;\n  font-size: 12px;\n  font-weight: 500;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n  border-bottom: 1px solid #f5f6f8;\n  padding: 5px 15px;\n  margin: 0 10px 0 10px;\n  line-height: 25px;\n}\n.max_file .file[data-v-536524c6] {\n  color: #16bcff;\n}\n.content_div_item_two[data-v-536524c6] {\n  font-size: 12px;\n  padding: 5px 15px;\n  margin: 0 10px 5px;\n  background: #ffffff;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  display: flex;\n  line-height: 30px;\n  /*justify-content: space-between;*/\n}\n.content_div_item_two .text[data-v-536524c6] {\n  color: rgba(18, 18, 54, 0.5);\n  /*min-width: 85px;*/\n  /*width: 60px;*/\n}\n.content_div_item_two > img[data-v-536524c6] {\n  height: 25px;\n  margin: 0px 10px;\n}\n.content_div_item_two .date[data-v-536524c6] {\n  margin-left: auto;\n}\n.content_div_item_two .value[data-v-536524c6] {\n  color: #121236;\n  font-weight: 500;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/penaltyReport.vue?vue&type=style&index=0&id=60281691&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/caseDetail/components/penaltyReport.vue?vue&type=style&index=0&id=60281691&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".center_title[data-v-60281691] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 20px;\n  font-size: 16px;\n  font-weight: 600;\n  height: 40px;\n  line-height: 40px;\n}\n.center_title .type[data-v-60281691] {\n  color: #43cf7c;\n  font-size: 12px;\n}\n.content_div[data-v-60281691] {\n  margin: 5px 10px;\n  background: #ffffff;\n  padding: 15px;\n  border-radius: 10px;\n}\n.content_div .content_div_item[data-v-60281691] {\n  line-height: 20px;\n  margin-bottom: 5px;\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n}\n.content_div .content_div_item .text[data-v-60281691] {\n  color: rgba(18, 18, 54, 0.5);\n  min-width: 85px;\n}\n.content_div .content_div_item .value[data-v-60281691] {\n  color: #121236;\n  font-weight: 500;\n}\n.content_div[data-v-60281691]  .van-cell {\n  padding: 0;\n}\n.max_text[data-v-60281691] {\n  background: #ffffff;\n  font-size: 12px;\n  font-weight: 500;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n  border-bottom: 1px solid #f5f6f8;\n  padding: 15px;\n  margin: 5px 10px 0 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.max_file[data-v-60281691] {\n  background: #ffffff;\n  font-size: 12px;\n  font-weight: 500;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n  border-bottom: 1px solid #f5f6f8;\n  padding: 5px 15px;\n  margin: 0 10px 0 10px;\n  line-height: 25px;\n}\n.max_file .file[data-v-60281691] {\n  color: #16bcff;\n}\n.content_div_item_two[data-v-60281691] {\n  font-size: 12px;\n  padding: 5px 15px;\n  margin: 0 10px 5px;\n  background: #ffffff;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  display: flex;\n  line-height: 30px;\n  /*justify-content: space-between;*/\n}\n.content_div_item_two .text[data-v-60281691] {\n  color: rgba(18, 18, 54, 0.5);\n  /*min-width: 85px;*/\n  /*width: 60px;*/\n}\n.content_div_item_two > img[data-v-60281691] {\n  height: 25px;\n  margin: 0px 10px;\n}\n.content_div_item_two .date[data-v-60281691] {\n  margin-left: auto;\n}\n.content_div_item_two .value[data-v-60281691] {\n  color: #121236;\n  font-weight: 500;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/registerReport.vue?vue&type=style&index=0&id=4abd08f3&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/caseDetail/components/registerReport.vue?vue&type=style&index=0&id=4abd08f3&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".center_title[data-v-4abd08f3] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 20px;\n  font-size: 16px;\n  font-weight: 600;\n  height: 40px;\n  line-height: 40px;\n}\n.center_title .type[data-v-4abd08f3] {\n  color: #43cf7c;\n  font-size: 12px;\n}\n.content_div[data-v-4abd08f3] {\n  margin: 5px 10px;\n  background: #ffffff;\n  padding: 15px;\n  border-radius: 10px;\n}\n.content_div .content_div_item[data-v-4abd08f3] {\n  line-height: 20px;\n  margin-bottom: 5px;\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n}\n.content_div .content_div_item .text[data-v-4abd08f3] {\n  color: rgba(18, 18, 54, 0.5);\n  min-width: 85px;\n}\n.content_div .content_div_item .value[data-v-4abd08f3] {\n  color: #121236;\n  font-weight: 500;\n}\n.content_div[data-v-4abd08f3]  .van-cell {\n  padding: 0;\n}\n.max_text[data-v-4abd08f3] {\n  background: #ffffff;\n  font-size: 12px;\n  font-weight: 500;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n  border-bottom: 1px solid #f5f6f8;\n  padding: 15px;\n  margin: 5px 10px 0 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.max_file[data-v-4abd08f3] {\n  background: #ffffff;\n  font-size: 12px;\n  font-weight: 500;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n  border-bottom: 1px solid #f5f6f8;\n  padding: 5px 15px;\n  margin: 0 10px 0 10px;\n  line-height: 25px;\n}\n.max_file .file[data-v-4abd08f3] {\n  color: #16bcff;\n}\n.content_div_item_two[data-v-4abd08f3] {\n  font-size: 12px;\n  padding: 5px 15px;\n  margin: 0 10px 5px;\n  background: #ffffff;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  display: flex;\n  line-height: 30px;\n  /*justify-content: space-between;*/\n}\n.content_div_item_two .text[data-v-4abd08f3] {\n  color: rgba(18, 18, 54, 0.5);\n  /*min-width: 85px;*/\n  /*width: 60px;*/\n}\n.content_div_item_two > img[data-v-4abd08f3] {\n  height: 25px;\n  margin: 0px 10px;\n}\n.content_div_item_two .date[data-v-4abd08f3] {\n  margin-left: auto;\n}\n.content_div_item_two .value[data-v-4abd08f3] {\n  color: #121236;\n  font-weight: 500;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/index.vue?vue&type=style&index=0&id=34660b16&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/caseDetail/index.vue?vue&type=style&index=0&id=34660b16&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".check-detail-wrapper[data-v-34660b16] {\n  overflow-y: auto;\n  background-color: #F4F5F7;\n}\n.check-detail-wrapper .center_title[data-v-34660b16] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 20px;\n  font-size: 16px;\n  font-weight: 600;\n  height: 40px;\n  line-height: 40px;\n}\n.check-detail-wrapper .center_title .type[data-v-34660b16] {\n  color: #43cf7c;\n  font-size: 12px;\n}\n.check-detail-wrapper .content_div[data-v-34660b16] {\n  margin: 5px 10px;\n  background: #ffffff;\n  padding: 15px;\n  border-radius: 10px;\n}\n.check-detail-wrapper .content_div .content_div_item[data-v-34660b16] {\n  line-height: 20px;\n  margin-bottom: 5px;\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n}\n.check-detail-wrapper .content_div .content_div_item .text[data-v-34660b16] {\n  color: rgba(18, 18, 54, 0.5);\n  min-width: 85px;\n}\n.check-detail-wrapper .content_div .content_div_item .value[data-v-34660b16] {\n  color: #121236;\n  font-weight: 500;\n}\n.check-detail-wrapper .content_div[data-v-34660b16]  .van-cell {\n  padding: 0;\n}\n.check-detail-wrapper .max_text[data-v-34660b16] {\n  background: #ffffff;\n  font-size: 12px;\n  font-weight: 500;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n  border-bottom: 1px solid #f5f6f8;\n  padding: 15px;\n  margin: 5px 10px 0 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.check-detail-wrapper .max_file[data-v-34660b16] {\n  background: #ffffff;\n  font-size: 12px;\n  font-weight: 500;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n  border-bottom: 1px solid #f5f6f8;\n  padding: 5px 15px;\n  margin: 0 10px 0 10px;\n  line-height: 20px;\n}\n.check-detail-wrapper .max_file .file[data-v-34660b16] {\n  color: #16bcff;\n}\n.check-detail-wrapper .content_div_item_two[data-v-34660b16] {\n  font-size: 12px;\n  padding: 5px 15px;\n  margin: 0 10px 5px;\n  background: #ffffff;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  display: flex;\n  line-height: 30px;\n  /*justify-content: space-between;*/\n}\n.check-detail-wrapper .content_div_item_two .text[data-v-34660b16] {\n  color: rgba(18, 18, 54, 0.5);\n  /*min-width: 85px;*/\n  /*width: 60px;*/\n}\n.check-detail-wrapper .content_div_item_two > img[data-v-34660b16] {\n  height: 25px;\n  margin: 0px 10px;\n}\n.check-detail-wrapper .content_div_item_two .date[data-v-34660b16] {\n  margin-left: auto;\n}\n.check-detail-wrapper .content_div_item_two .value[data-v-34660b16] {\n  color: #121236;\n  font-weight: 500;\n}\n.check-detail-wrapper .max_text_two[data-v-34660b16] {\n  background: #ffffff;\n  font-size: 12px;\n  font-weight: 500;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n  border-bottom: 1px solid #f5f6f8;\n  padding: 15px;\n  margin: 5px 10px;\n  border-radius: 10px;\n}\n.check-detail-wrapper .max_text_two .inputW[data-v-34660b16] {\n  border: 1px solid #ebedf0;\n  padding-left: 5px;\n  margin-top: 10px;\n  width: calc(100% - 10px);\n}\n.check-detail-wrapper .more_div[data-v-34660b16] {\n  padding: 0px;\n}\n.check-detail-bottom[data-v-34660b16] {\n  background-color: #F4F5F7;\n  height: 80px;\n  align-items: center;\n  display: flex;\n}\n.check-detail-bottom .yes[data-v-34660b16] {\n  width: 350px;\n  height: 50px;\n  line-height: 50px;\n  border-radius: 10px;\n  margin: 0 auto;\n  background: #447bfc;\n  color: #ffffff;\n  text-align: center;\n}\nvan-popup[data-v-34660b16] {\n  border-radius: 8px;\n}\n.popupWrapper[data-v-34660b16] {\n  padding: 16px;\n}\n.popupWrapper p[data-v-34660b16] {\n  font-size: 16px;\n  /*text-align: center*/\n}\n.popupWrapper .content[data-v-34660b16] {\n  padding: 10px 0;\n  margin: 10px 0;\n  line-height: 20px;\n  font-size: 14px;\n  color: #888d95;\n  max-height: calc(100vh - 350px);\n  overflow: auto;\n  white-space: pre-line;\n}\n.popupWrapper .popupFooter[data-v-34660b16] {\n  margin-top: 20px;\n  display: flex;\n  justify-content: space-around;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/breakLawReport.vue?vue&type=style&index=0&id=02ec931a&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/caseDetail/components/breakLawReport.vue?vue&type=style&index=0&id=02ec931a&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./breakLawReport.vue?vue&type=style&index=0&id=02ec931a&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/breakLawReport.vue?vue&type=style&index=0&id=02ec931a&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4848b8a5", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/cancelReport.vue?vue&type=style&index=0&id=699c210a&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/caseDetail/components/cancelReport.vue?vue&type=style&index=0&id=699c210a&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./cancelReport.vue?vue&type=style&index=0&id=699c210a&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/cancelReport.vue?vue&type=style&index=0&id=699c210a&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("793dfff8", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/insideDealReport.vue?vue&type=style&index=0&id=45eb2cd0&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/caseDetail/components/insideDealReport.vue?vue&type=style&index=0&id=45eb2cd0&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./insideDealReport.vue?vue&type=style&index=0&id=45eb2cd0&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/insideDealReport.vue?vue&type=style&index=0&id=45eb2cd0&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6f797d96", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/penaltyDealReport.vue?vue&type=style&index=0&id=536524c6&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/caseDetail/components/penaltyDealReport.vue?vue&type=style&index=0&id=536524c6&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./penaltyDealReport.vue?vue&type=style&index=0&id=536524c6&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/penaltyDealReport.vue?vue&type=style&index=0&id=536524c6&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2ec30c2a", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/penaltyReport.vue?vue&type=style&index=0&id=60281691&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/caseDetail/components/penaltyReport.vue?vue&type=style&index=0&id=60281691&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./penaltyReport.vue?vue&type=style&index=0&id=60281691&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/penaltyReport.vue?vue&type=style&index=0&id=60281691&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5330b4f0", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/registerReport.vue?vue&type=style&index=0&id=4abd08f3&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/caseDetail/components/registerReport.vue?vue&type=style&index=0&id=4abd08f3&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./registerReport.vue?vue&type=style&index=0&id=4abd08f3&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/registerReport.vue?vue&type=style&index=0&id=4abd08f3&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("f8f6f042", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/index.vue?vue&type=style&index=0&id=34660b16&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/caseCheck/caseDetail/index.vue?vue&type=style&index=0&id=34660b16&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=34660b16&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/index.vue?vue&type=style&index=0&id=34660b16&scoped=true&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("a4189cd0", content, false, {"sourceMap":false,"shadowMode":false});
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

/***/ "./src/views/caseCheck/caseDetail/components/breakLawReport.vue":
/*!**********************************************************************!*\
  !*** ./src/views/caseCheck/caseDetail/components/breakLawReport.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _breakLawReport_vue_vue_type_template_id_02ec931a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakLawReport.vue?vue&type=template&id=02ec931a&scoped=true& */ "./src/views/caseCheck/caseDetail/components/breakLawReport.vue?vue&type=template&id=02ec931a&scoped=true&");
/* harmony import */ var _breakLawReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breakLawReport.vue?vue&type=script&lang=js& */ "./src/views/caseCheck/caseDetail/components/breakLawReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _breakLawReport_vue_vue_type_style_index_0_id_02ec931a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breakLawReport.vue?vue&type=style&index=0&id=02ec931a&lang=scss&scoped=true& */ "./src/views/caseCheck/caseDetail/components/breakLawReport.vue?vue&type=style&index=0&id=02ec931a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _breakLawReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _breakLawReport_vue_vue_type_template_id_02ec931a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _breakLawReport_vue_vue_type_template_id_02ec931a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "02ec931a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/caseCheck/caseDetail/components/breakLawReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/caseCheck/caseDetail/components/breakLawReport.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./src/views/caseCheck/caseDetail/components/breakLawReport.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_breakLawReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./breakLawReport.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/breakLawReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_breakLawReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/caseCheck/caseDetail/components/breakLawReport.vue?vue&type=style&index=0&id=02ec931a&lang=scss&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./src/views/caseCheck/caseDetail/components/breakLawReport.vue?vue&type=style&index=0&id=02ec931a&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_breakLawReport_vue_vue_type_style_index_0_id_02ec931a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./breakLawReport.vue?vue&type=style&index=0&id=02ec931a&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/breakLawReport.vue?vue&type=style&index=0&id=02ec931a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_breakLawReport_vue_vue_type_style_index_0_id_02ec931a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_breakLawReport_vue_vue_type_style_index_0_id_02ec931a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_breakLawReport_vue_vue_type_style_index_0_id_02ec931a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_breakLawReport_vue_vue_type_style_index_0_id_02ec931a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/caseCheck/caseDetail/components/breakLawReport.vue?vue&type=template&id=02ec931a&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./src/views/caseCheck/caseDetail/components/breakLawReport.vue?vue&type=template&id=02ec931a&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_breakLawReport_vue_vue_type_template_id_02ec931a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./breakLawReport.vue?vue&type=template&id=02ec931a&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/breakLawReport.vue?vue&type=template&id=02ec931a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_breakLawReport_vue_vue_type_template_id_02ec931a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_breakLawReport_vue_vue_type_template_id_02ec931a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/caseCheck/caseDetail/components/cancelReport.vue":
/*!********************************************************************!*\
  !*** ./src/views/caseCheck/caseDetail/components/cancelReport.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cancelReport_vue_vue_type_template_id_699c210a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cancelReport.vue?vue&type=template&id=699c210a&scoped=true& */ "./src/views/caseCheck/caseDetail/components/cancelReport.vue?vue&type=template&id=699c210a&scoped=true&");
/* harmony import */ var _cancelReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cancelReport.vue?vue&type=script&lang=js& */ "./src/views/caseCheck/caseDetail/components/cancelReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _cancelReport_vue_vue_type_style_index_0_id_699c210a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cancelReport.vue?vue&type=style&index=0&id=699c210a&lang=scss&scoped=true& */ "./src/views/caseCheck/caseDetail/components/cancelReport.vue?vue&type=style&index=0&id=699c210a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _cancelReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cancelReport_vue_vue_type_template_id_699c210a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cancelReport_vue_vue_type_template_id_699c210a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "699c210a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/caseCheck/caseDetail/components/cancelReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/caseCheck/caseDetail/components/cancelReport.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./src/views/caseCheck/caseDetail/components/cancelReport.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cancelReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./cancelReport.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/cancelReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cancelReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/caseCheck/caseDetail/components/cancelReport.vue?vue&type=style&index=0&id=699c210a&lang=scss&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./src/views/caseCheck/caseDetail/components/cancelReport.vue?vue&type=style&index=0&id=699c210a&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cancelReport_vue_vue_type_style_index_0_id_699c210a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./cancelReport.vue?vue&type=style&index=0&id=699c210a&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/cancelReport.vue?vue&type=style&index=0&id=699c210a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cancelReport_vue_vue_type_style_index_0_id_699c210a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cancelReport_vue_vue_type_style_index_0_id_699c210a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cancelReport_vue_vue_type_style_index_0_id_699c210a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cancelReport_vue_vue_type_style_index_0_id_699c210a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/caseCheck/caseDetail/components/cancelReport.vue?vue&type=template&id=699c210a&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./src/views/caseCheck/caseDetail/components/cancelReport.vue?vue&type=template&id=699c210a&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cancelReport_vue_vue_type_template_id_699c210a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./cancelReport.vue?vue&type=template&id=699c210a&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/cancelReport.vue?vue&type=template&id=699c210a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cancelReport_vue_vue_type_template_id_699c210a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cancelReport_vue_vue_type_template_id_699c210a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/caseCheck/caseDetail/components/insideDealReport.vue":
/*!************************************************************************!*\
  !*** ./src/views/caseCheck/caseDetail/components/insideDealReport.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _insideDealReport_vue_vue_type_template_id_45eb2cd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insideDealReport.vue?vue&type=template&id=45eb2cd0&scoped=true& */ "./src/views/caseCheck/caseDetail/components/insideDealReport.vue?vue&type=template&id=45eb2cd0&scoped=true&");
/* harmony import */ var _insideDealReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insideDealReport.vue?vue&type=script&lang=js& */ "./src/views/caseCheck/caseDetail/components/insideDealReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _insideDealReport_vue_vue_type_style_index_0_id_45eb2cd0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./insideDealReport.vue?vue&type=style&index=0&id=45eb2cd0&lang=scss&scoped=true& */ "./src/views/caseCheck/caseDetail/components/insideDealReport.vue?vue&type=style&index=0&id=45eb2cd0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _insideDealReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _insideDealReport_vue_vue_type_template_id_45eb2cd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _insideDealReport_vue_vue_type_template_id_45eb2cd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "45eb2cd0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/caseCheck/caseDetail/components/insideDealReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/caseCheck/caseDetail/components/insideDealReport.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./src/views/caseCheck/caseDetail/components/insideDealReport.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_insideDealReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./insideDealReport.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/insideDealReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_insideDealReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/caseCheck/caseDetail/components/insideDealReport.vue?vue&type=style&index=0&id=45eb2cd0&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./src/views/caseCheck/caseDetail/components/insideDealReport.vue?vue&type=style&index=0&id=45eb2cd0&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_insideDealReport_vue_vue_type_style_index_0_id_45eb2cd0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./insideDealReport.vue?vue&type=style&index=0&id=45eb2cd0&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/insideDealReport.vue?vue&type=style&index=0&id=45eb2cd0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_insideDealReport_vue_vue_type_style_index_0_id_45eb2cd0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_insideDealReport_vue_vue_type_style_index_0_id_45eb2cd0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_insideDealReport_vue_vue_type_style_index_0_id_45eb2cd0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_insideDealReport_vue_vue_type_style_index_0_id_45eb2cd0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/caseCheck/caseDetail/components/insideDealReport.vue?vue&type=template&id=45eb2cd0&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./src/views/caseCheck/caseDetail/components/insideDealReport.vue?vue&type=template&id=45eb2cd0&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_insideDealReport_vue_vue_type_template_id_45eb2cd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./insideDealReport.vue?vue&type=template&id=45eb2cd0&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/insideDealReport.vue?vue&type=template&id=45eb2cd0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_insideDealReport_vue_vue_type_template_id_45eb2cd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_insideDealReport_vue_vue_type_template_id_45eb2cd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/caseCheck/caseDetail/components/penaltyDealReport.vue":
/*!*************************************************************************!*\
  !*** ./src/views/caseCheck/caseDetail/components/penaltyDealReport.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _penaltyDealReport_vue_vue_type_template_id_536524c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./penaltyDealReport.vue?vue&type=template&id=536524c6&scoped=true& */ "./src/views/caseCheck/caseDetail/components/penaltyDealReport.vue?vue&type=template&id=536524c6&scoped=true&");
/* harmony import */ var _penaltyDealReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./penaltyDealReport.vue?vue&type=script&lang=js& */ "./src/views/caseCheck/caseDetail/components/penaltyDealReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _penaltyDealReport_vue_vue_type_style_index_0_id_536524c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./penaltyDealReport.vue?vue&type=style&index=0&id=536524c6&lang=scss&scoped=true& */ "./src/views/caseCheck/caseDetail/components/penaltyDealReport.vue?vue&type=style&index=0&id=536524c6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _penaltyDealReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _penaltyDealReport_vue_vue_type_template_id_536524c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _penaltyDealReport_vue_vue_type_template_id_536524c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "536524c6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/caseCheck/caseDetail/components/penaltyDealReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/caseCheck/caseDetail/components/penaltyDealReport.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./src/views/caseCheck/caseDetail/components/penaltyDealReport.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_penaltyDealReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./penaltyDealReport.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/penaltyDealReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_penaltyDealReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/caseCheck/caseDetail/components/penaltyDealReport.vue?vue&type=style&index=0&id=536524c6&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************!*\
  !*** ./src/views/caseCheck/caseDetail/components/penaltyDealReport.vue?vue&type=style&index=0&id=536524c6&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_penaltyDealReport_vue_vue_type_style_index_0_id_536524c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./penaltyDealReport.vue?vue&type=style&index=0&id=536524c6&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/penaltyDealReport.vue?vue&type=style&index=0&id=536524c6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_penaltyDealReport_vue_vue_type_style_index_0_id_536524c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_penaltyDealReport_vue_vue_type_style_index_0_id_536524c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_penaltyDealReport_vue_vue_type_style_index_0_id_536524c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_penaltyDealReport_vue_vue_type_style_index_0_id_536524c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/caseCheck/caseDetail/components/penaltyDealReport.vue?vue&type=template&id=536524c6&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./src/views/caseCheck/caseDetail/components/penaltyDealReport.vue?vue&type=template&id=536524c6&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_penaltyDealReport_vue_vue_type_template_id_536524c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./penaltyDealReport.vue?vue&type=template&id=536524c6&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/penaltyDealReport.vue?vue&type=template&id=536524c6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_penaltyDealReport_vue_vue_type_template_id_536524c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_penaltyDealReport_vue_vue_type_template_id_536524c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/caseCheck/caseDetail/components/penaltyReport.vue":
/*!*********************************************************************!*\
  !*** ./src/views/caseCheck/caseDetail/components/penaltyReport.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _penaltyReport_vue_vue_type_template_id_60281691_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./penaltyReport.vue?vue&type=template&id=60281691&scoped=true& */ "./src/views/caseCheck/caseDetail/components/penaltyReport.vue?vue&type=template&id=60281691&scoped=true&");
/* harmony import */ var _penaltyReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./penaltyReport.vue?vue&type=script&lang=js& */ "./src/views/caseCheck/caseDetail/components/penaltyReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _penaltyReport_vue_vue_type_style_index_0_id_60281691_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./penaltyReport.vue?vue&type=style&index=0&id=60281691&lang=scss&scoped=true& */ "./src/views/caseCheck/caseDetail/components/penaltyReport.vue?vue&type=style&index=0&id=60281691&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _penaltyReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _penaltyReport_vue_vue_type_template_id_60281691_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _penaltyReport_vue_vue_type_template_id_60281691_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "60281691",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/caseCheck/caseDetail/components/penaltyReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/caseCheck/caseDetail/components/penaltyReport.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./src/views/caseCheck/caseDetail/components/penaltyReport.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_penaltyReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./penaltyReport.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/penaltyReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_penaltyReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/caseCheck/caseDetail/components/penaltyReport.vue?vue&type=style&index=0&id=60281691&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./src/views/caseCheck/caseDetail/components/penaltyReport.vue?vue&type=style&index=0&id=60281691&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_penaltyReport_vue_vue_type_style_index_0_id_60281691_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./penaltyReport.vue?vue&type=style&index=0&id=60281691&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/penaltyReport.vue?vue&type=style&index=0&id=60281691&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_penaltyReport_vue_vue_type_style_index_0_id_60281691_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_penaltyReport_vue_vue_type_style_index_0_id_60281691_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_penaltyReport_vue_vue_type_style_index_0_id_60281691_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_penaltyReport_vue_vue_type_style_index_0_id_60281691_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/caseCheck/caseDetail/components/penaltyReport.vue?vue&type=template&id=60281691&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./src/views/caseCheck/caseDetail/components/penaltyReport.vue?vue&type=template&id=60281691&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_penaltyReport_vue_vue_type_template_id_60281691_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./penaltyReport.vue?vue&type=template&id=60281691&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/penaltyReport.vue?vue&type=template&id=60281691&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_penaltyReport_vue_vue_type_template_id_60281691_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_penaltyReport_vue_vue_type_template_id_60281691_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/caseCheck/caseDetail/components/registerReport.vue":
/*!**********************************************************************!*\
  !*** ./src/views/caseCheck/caseDetail/components/registerReport.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _registerReport_vue_vue_type_template_id_4abd08f3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registerReport.vue?vue&type=template&id=4abd08f3&scoped=true& */ "./src/views/caseCheck/caseDetail/components/registerReport.vue?vue&type=template&id=4abd08f3&scoped=true&");
/* harmony import */ var _registerReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registerReport.vue?vue&type=script&lang=js& */ "./src/views/caseCheck/caseDetail/components/registerReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _registerReport_vue_vue_type_style_index_0_id_4abd08f3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registerReport.vue?vue&type=style&index=0&id=4abd08f3&lang=scss&scoped=true& */ "./src/views/caseCheck/caseDetail/components/registerReport.vue?vue&type=style&index=0&id=4abd08f3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _registerReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _registerReport_vue_vue_type_template_id_4abd08f3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _registerReport_vue_vue_type_template_id_4abd08f3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4abd08f3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/caseCheck/caseDetail/components/registerReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/caseCheck/caseDetail/components/registerReport.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./src/views/caseCheck/caseDetail/components/registerReport.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registerReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./registerReport.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/registerReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registerReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/caseCheck/caseDetail/components/registerReport.vue?vue&type=style&index=0&id=4abd08f3&lang=scss&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./src/views/caseCheck/caseDetail/components/registerReport.vue?vue&type=style&index=0&id=4abd08f3&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registerReport_vue_vue_type_style_index_0_id_4abd08f3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./registerReport.vue?vue&type=style&index=0&id=4abd08f3&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/registerReport.vue?vue&type=style&index=0&id=4abd08f3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registerReport_vue_vue_type_style_index_0_id_4abd08f3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registerReport_vue_vue_type_style_index_0_id_4abd08f3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registerReport_vue_vue_type_style_index_0_id_4abd08f3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registerReport_vue_vue_type_style_index_0_id_4abd08f3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/caseCheck/caseDetail/components/registerReport.vue?vue&type=template&id=4abd08f3&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./src/views/caseCheck/caseDetail/components/registerReport.vue?vue&type=template&id=4abd08f3&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registerReport_vue_vue_type_template_id_4abd08f3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./registerReport.vue?vue&type=template&id=4abd08f3&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/components/registerReport.vue?vue&type=template&id=4abd08f3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registerReport_vue_vue_type_template_id_4abd08f3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registerReport_vue_vue_type_template_id_4abd08f3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/caseCheck/caseDetail/index.vue":
/*!**************************************************!*\
  !*** ./src/views/caseCheck/caseDetail/index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_34660b16_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=34660b16&scoped=true& */ "./src/views/caseCheck/caseDetail/index.vue?vue&type=template&id=34660b16&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/caseCheck/caseDetail/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_34660b16_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=34660b16&scoped=true&lang=scss& */ "./src/views/caseCheck/caseDetail/index.vue?vue&type=style&index=0&id=34660b16&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_34660b16_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_34660b16_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "34660b16",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/caseCheck/caseDetail/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/caseCheck/caseDetail/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/views/caseCheck/caseDetail/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/caseCheck/caseDetail/index.vue?vue&type=style&index=0&id=34660b16&scoped=true&lang=scss&":
/*!************************************************************************************************************!*\
  !*** ./src/views/caseCheck/caseDetail/index.vue?vue&type=style&index=0&id=34660b16&scoped=true&lang=scss& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_34660b16_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=34660b16&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/index.vue?vue&type=style&index=0&id=34660b16&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_34660b16_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_34660b16_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_34660b16_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_34660b16_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/caseCheck/caseDetail/index.vue?vue&type=template&id=34660b16&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./src/views/caseCheck/caseDetail/index.vue?vue&type=template&id=34660b16&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_34660b16_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=34660b16&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/caseCheck/caseDetail/index.vue?vue&type=template&id=34660b16&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_34660b16_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_34660b16_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2Nhc2VDaGVjay9jYXNlRGV0YWlsL2NvbXBvbmVudHMvYnJlYWtMYXdSZXBvcnQudnVlIiwid2VicGFjazovLy9zcmMvdmlld3MvY2FzZUNoZWNrL2Nhc2VEZXRhaWwvY29tcG9uZW50cy9jYW5jZWxSZXBvcnQudnVlIiwid2VicGFjazovLy9zcmMvdmlld3MvY2FzZUNoZWNrL2Nhc2VEZXRhaWwvY29tcG9uZW50cy9pbnNpZGVEZWFsUmVwb3J0LnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2Nhc2VDaGVjay9jYXNlRGV0YWlsL2NvbXBvbmVudHMvcGVuYWx0eURlYWxSZXBvcnQudnVlIiwid2VicGFjazovLy9zcmMvdmlld3MvY2FzZUNoZWNrL2Nhc2VEZXRhaWwvY29tcG9uZW50cy9wZW5hbHR5UmVwb3J0LnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2Nhc2VDaGVjay9jYXNlRGV0YWlsL2NvbXBvbmVudHMvcmVnaXN0ZXJSZXBvcnQudnVlIiwid2VicGFjazovLy9zcmMvdmlld3MvY2FzZUNoZWNrL2Nhc2VEZXRhaWwvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jYXNlQ2hlY2svY2FzZURldGFpbC9jb21wb25lbnRzL2JyZWFrTGF3UmVwb3J0LnZ1ZT81Y2M5Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jYXNlQ2hlY2svY2FzZURldGFpbC9jb21wb25lbnRzL2NhbmNlbFJlcG9ydC52dWU/N2RkMSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2FzZUNoZWNrL2Nhc2VEZXRhaWwvY29tcG9uZW50cy9pbnNpZGVEZWFsUmVwb3J0LnZ1ZT84ZGM4Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jYXNlQ2hlY2svY2FzZURldGFpbC9jb21wb25lbnRzL3BlbmFsdHlEZWFsUmVwb3J0LnZ1ZT80MjJlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jYXNlQ2hlY2svY2FzZURldGFpbC9jb21wb25lbnRzL3BlbmFsdHlSZXBvcnQudnVlPzg5NjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Nhc2VDaGVjay9jYXNlRGV0YWlsL2NvbXBvbmVudHMvcmVnaXN0ZXJSZXBvcnQudnVlPzllMjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Nhc2VDaGVjay9jYXNlRGV0YWlsL2luZGV4LnZ1ZT9lMzcwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zcGxpdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Nhc2VDaGVjay9jYXNlRGV0YWlsL2NvbXBvbmVudHMvYnJlYWtMYXdSZXBvcnQudnVlPzUyNDgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Nhc2VDaGVjay9jYXNlRGV0YWlsL2NvbXBvbmVudHMvY2FuY2VsUmVwb3J0LnZ1ZT9iMGE0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jYXNlQ2hlY2svY2FzZURldGFpbC9jb21wb25lbnRzL2luc2lkZURlYWxSZXBvcnQudnVlPzc0ZTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Nhc2VDaGVjay9jYXNlRGV0YWlsL2NvbXBvbmVudHMvcGVuYWx0eURlYWxSZXBvcnQudnVlPzA2YWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Nhc2VDaGVjay9jYXNlRGV0YWlsL2NvbXBvbmVudHMvcGVuYWx0eVJlcG9ydC52dWU/YWQxMSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2FzZUNoZWNrL2Nhc2VEZXRhaWwvY29tcG9uZW50cy9yZWdpc3RlclJlcG9ydC52dWU/NzI1YyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2FzZUNoZWNrL2Nhc2VEZXRhaWwvaW5kZXgudnVlPzAzNDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Nhc2VDaGVjay9jYXNlRGV0YWlsL2NvbXBvbmVudHMvYnJlYWtMYXdSZXBvcnQudnVlP2EyMGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Nhc2VDaGVjay9jYXNlRGV0YWlsL2NvbXBvbmVudHMvY2FuY2VsUmVwb3J0LnZ1ZT80MzBlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jYXNlQ2hlY2svY2FzZURldGFpbC9jb21wb25lbnRzL2luc2lkZURlYWxSZXBvcnQudnVlP2VlNjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Nhc2VDaGVjay9jYXNlRGV0YWlsL2NvbXBvbmVudHMvcGVuYWx0eURlYWxSZXBvcnQudnVlP2Q4OGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Nhc2VDaGVjay9jYXNlRGV0YWlsL2NvbXBvbmVudHMvcGVuYWx0eVJlcG9ydC52dWU/MmU0ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2FzZUNoZWNrL2Nhc2VEZXRhaWwvY29tcG9uZW50cy9yZWdpc3RlclJlcG9ydC52dWU/N2FlYiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2FzZUNoZWNrL2Nhc2VEZXRhaWwvaW5kZXgudnVlP2QwMTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9jYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jYXNlQ2hlY2svY2FzZURldGFpbC9jb21wb25lbnRzL2JyZWFrTGF3UmVwb3J0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2FzZUNoZWNrL2Nhc2VEZXRhaWwvY29tcG9uZW50cy9icmVha0xhd1JlcG9ydC52dWU/ZjE3YyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2FzZUNoZWNrL2Nhc2VEZXRhaWwvY29tcG9uZW50cy9icmVha0xhd1JlcG9ydC52dWU/ZjNmNSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2FzZUNoZWNrL2Nhc2VEZXRhaWwvY29tcG9uZW50cy9icmVha0xhd1JlcG9ydC52dWU/ZjJlZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2FzZUNoZWNrL2Nhc2VEZXRhaWwvY29tcG9uZW50cy9jYW5jZWxSZXBvcnQudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jYXNlQ2hlY2svY2FzZURldGFpbC9jb21wb25lbnRzL2NhbmNlbFJlcG9ydC52dWU/YWExZCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2FzZUNoZWNrL2Nhc2VEZXRhaWwvY29tcG9uZW50cy9jYW5jZWxSZXBvcnQudnVlP2M3MjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Nhc2VDaGVjay9jYXNlRGV0YWlsL2NvbXBvbmVudHMvY2FuY2VsUmVwb3J0LnZ1ZT83N2ZkIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jYXNlQ2hlY2svY2FzZURldGFpbC9jb21wb25lbnRzL2luc2lkZURlYWxSZXBvcnQudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jYXNlQ2hlY2svY2FzZURldGFpbC9jb21wb25lbnRzL2luc2lkZURlYWxSZXBvcnQudnVlP2RmNDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Nhc2VDaGVjay9jYXNlRGV0YWlsL2NvbXBvbmVudHMvaW5zaWRlRGVhbFJlcG9ydC52dWU/YzQ4ZCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2FzZUNoZWNrL2Nhc2VEZXRhaWwvY29tcG9uZW50cy9pbnNpZGVEZWFsUmVwb3J0LnZ1ZT84NTBiIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jYXNlQ2hlY2svY2FzZURldGFpbC9jb21wb25lbnRzL3BlbmFsdHlEZWFsUmVwb3J0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2FzZUNoZWNrL2Nhc2VEZXRhaWwvY29tcG9uZW50cy9wZW5hbHR5RGVhbFJlcG9ydC52dWU/NDkwYyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2FzZUNoZWNrL2Nhc2VEZXRhaWwvY29tcG9uZW50cy9wZW5hbHR5RGVhbFJlcG9ydC52dWU/YmRjNiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2FzZUNoZWNrL2Nhc2VEZXRhaWwvY29tcG9uZW50cy9wZW5hbHR5RGVhbFJlcG9ydC52dWU/NGI5MyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2FzZUNoZWNrL2Nhc2VEZXRhaWwvY29tcG9uZW50cy9wZW5hbHR5UmVwb3J0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2FzZUNoZWNrL2Nhc2VEZXRhaWwvY29tcG9uZW50cy9wZW5hbHR5UmVwb3J0LnZ1ZT81NzhjIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jYXNlQ2hlY2svY2FzZURldGFpbC9jb21wb25lbnRzL3BlbmFsdHlSZXBvcnQudnVlP2JmZjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Nhc2VDaGVjay9jYXNlRGV0YWlsL2NvbXBvbmVudHMvcGVuYWx0eVJlcG9ydC52dWU/YjAyMSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2FzZUNoZWNrL2Nhc2VEZXRhaWwvY29tcG9uZW50cy9yZWdpc3RlclJlcG9ydC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Nhc2VDaGVjay9jYXNlRGV0YWlsL2NvbXBvbmVudHMvcmVnaXN0ZXJSZXBvcnQudnVlP2E5YmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Nhc2VDaGVjay9jYXNlRGV0YWlsL2NvbXBvbmVudHMvcmVnaXN0ZXJSZXBvcnQudnVlPzg0MWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Nhc2VDaGVjay9jYXNlRGV0YWlsL2NvbXBvbmVudHMvcmVnaXN0ZXJSZXBvcnQudnVlPzBhMWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Nhc2VDaGVjay9jYXNlRGV0YWlsL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY2FzZUNoZWNrL2Nhc2VEZXRhaWwvaW5kZXgudnVlPzg5OTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Nhc2VDaGVjay9jYXNlRGV0YWlsL2luZGV4LnZ1ZT84MTgwIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jYXNlQ2hlY2svY2FzZURldGFpbC9pbmRleC52dWU/NGIyOSJdLCJuYW1lcyI6WyJxdWVyeVNlbGVjdEJ5SWQiLCJpZCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJkaXNjdXNzU2VsZWN0QnlDYXNlSWQiLCJzdXBlcnZpc2VTZWxlY3RCeUNhc2VJZCIsImxlZ2FsU2VsZWN0QnlDYXNlSWQiLCJzZWxlY3RCeUNhc2VJZCIsInB1bmlzaFNlbGVjdEJ5Q2FzZUlkIiwiZ2V0SGVhcmluZ0J5Q2FzZUlkIiwic3RhZ2VTZWxlY3RCeUNhc2VJZCIsImdldFVzZXJJbmZvIiwiZGF0YSIsInBhcmFtcyIsImdldFVzZXJMaXN0IiwicXVlcnlUeXBlQ2FzZUxpc3QiLCJhZGRSZXBvcnQiLCJnZXRSZXBvcnREZXRhaWwiLCJzaWduUmVwb3J0IiwidHlwZSIsImNvdW50SW5mbyIsImdldEFsbFJlcG9ydCIsImNoZWNrUHdkIiwicXVlcnlEaXZpc2lvbiIsImdldFN1cGVyQmF0Y2giLCJnZXRTdXBlckxpc3QiLCJpbmZvIiwiZ2V0U3VwZXJMaXN0RGV0YWlsIiwiYm9hcmQiLCJjb3VudHlMaXN0IiwiaW5mb0xpc3QiLCJiYXNlSW5mbyIsImRpc3RyaWJ1dGUiLCJoYW5kbGUiLCJmaW5hbCIsImNvbXBhbnkiLCJwcm9ibGVtIiwidGltZUdyb3VwIiwidW5pdCIsInByb2JsZW1MaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVGQTtBQUVBO0FBQ0Esd0JBREE7QUFFQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBO0FBREEsR0FGQTtBQVFBO0FBQ0EsWUFEQSxvQkFDQSxJQURBLEVBQ0E7QUFDQTtBQUFBLFVBQ0EsNEJBREE7O0FBRUE7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0Es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b0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtDQUFrQztBQUNuRCxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0NBQWtDO0FBQ25ELG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQ0FBa0M7QUFDbkQsb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtDQUFrQztBQUNuRCxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0NBQWtDO0FBQ25ELG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQ0FBa0M7QUFDbkQsb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtDQUFrQztBQUNuRCxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0NBQWtDO0FBQ25ELG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQ0FBa0M7QUFDbkQsb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtDQUFrQztBQUNuRCxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0NBQWtDO0FBQ25ELG9CQUFvQixzQkFBc0I7QUFDMUM7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QUFBLHdDQUE4VCxDQUFnQiw4VUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FsVjtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUc7QUFDdkM7QUFDTDtBQUNzQzs7O0FBR25HO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSxxR0FBTTtBQUNSLEVBQUUsOEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQStULENBQWdCLCtVQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQW5WO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnRztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHMUY7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxxR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBMFMsQ0FBZ0Isc1VBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOVQ7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvNDIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2RpdlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9kaXZfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+5a6h5om55Y+3PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPiDmmIbnlJ/njq/mi5jnp7vvvIh7e25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1977yJ5bm0MS0ge3tpbmZvLnB1bmlzaE5vfX3lj7c8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9kaXZfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+5qGI55SxPC9zcGFuPjxicj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ge3sgaW5mby5yZWFzb24gfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9kaXZfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+5LyB5Lia5ZCN56ew5oiW5YW25LuW57uP6JCl6ICFPC9zcGFuPjxicj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ge3sgaW5mby5hZG1pblJlc3VsdCB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2Rpdl9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7nu4Tnu4fmnLrmnoTku6PnoIE8L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPiB7eyBpbmZvLm9yZ0NvZGUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9kaXZfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+5Zyw5Z2APC9zcGFuPjxicj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ge3sgaW5mby5hZGRyIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfZGl2X2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPumCruaUv+e8lueggTwvc3Bhbj48YnI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+IHt7IGluZm8uemlwQ29kZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2Rpdl9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7ms5Xlrprku6PooajkurrmiJbotJ/otKPkuro8L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPiB7eyBpbmZvLmxlZ2FsTWFuIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfZGl2X2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPuacieaViOivgeS7tuWPiuWPt+eggTwvc3Bhbj48YnI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+IHt7IGluZm8ubGVnYWxJZCB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2Rpdl9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7ogZTns7vnlLXor508L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPiB7eyBpbmZvLmxlZ2FsVGVsIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfZGl2X2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPuS8geS4muS4u+imgei0n+i0o+S6ujwvc3Bhbj48YnI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+IHt7IGluZm8ubGlua01hbiB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2Rpdl9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7mnInmlYjor4Hku7blj4rlj7fnoIE8L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPiB7eyBpbmZvLmxpbmtJZCB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2Rpdl9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7ogZTns7vnlLXor508L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPiB7eyBpbmZvLmxlZ2FsVGVsIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfZGl2X2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPuiwg+afpeS6uuWRmDwvc3Bhbj48YnI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+IHt7IGluZm8uaW52ZXN0TmFtZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2Rpdl9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7mib/lip7pg6jpl6g8L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPiB7eyBpbmZvLmNoYXJnZURlcHQgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9kaXZfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+5qGI5oOF566A5LuLPC9zcGFuPjxicj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ge3sgaW5mby5zaW1wbGVTaXR1YXRpb24gfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXJfdGl0bGVcIj5cclxuICAgICAgICAgICAgPHNwYW4+e3tpbmZvLnR5cGU9PSdjcGEnPyfooYzmlL/mi5jnlZnlpITnvZrnp7vpgIHkvp3mja7lj4rlpITnkIbmhI/op4EnOifnp7vpgIHkvp3mja7lj4rlpITnkIbmhI/op4EnfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1heF90ZXh0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuPnt7aW5mby5zaW1wbGVTaXR1YXRpb259fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWF4X2ZpbGVcIj5cclxuICAgICAgICAgICAgPHNwYW4+6ZmE5Lu2PC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2IHYtZm9yPVwiaXRlbSBpbiBpbmZvLmZpbGVzXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZpbGVcIiBAY2xpY2s9XCJ0b0RldGFpbChpdGVtKVwiPnt7aXRlbS5maWxlTmFtZX19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9kaXZfaXRlbV90d29cIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+57uP5Yqe5Lq6PC9zcGFuPlxyXG4gICAgICAgICAgICA8aW1nIHYtaWY9XCJpbmZvLnRha2VyU2lnblwiIDpzcmM9XCJpbmZvLnRha2VyU2lnblwiIGNsYXNzPVwiaWNvblwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7ljY/lip7kuro8L3NwYW4+XHJcbiAgICAgICAgICAgIDxpbWcgdi1pZj1cImluZm8uYXNzaXN0U2lnblwiICA6c3JjPVwiaW5mby5hc3Npc3RTaWduXCIgY2xhc3M9XCJpY29uXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dCBkYXRlXCI+IHt7IGluZm8udGFrZXJTaWduRGF0ZSB9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7SW1hZ2VQcmV2aWV3fSBmcm9tIFwidmFudFwiO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcImJyZWFrTGF3UmVwb3J0XCIsXHJcbiAgICAgICAgcHJvcHMgOiB7XHJcbiAgICAgICAgICAgIGluZm86IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHt9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzIDoge1xyXG4gICAgICAgICAgICB0b0RldGFpbChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IGl0ZW0uZmlsZU5hbWUuc3BsaXQoJy4nKSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gbmFtZVtuYW1lLmxlbmd0aC0xXTtcclxuICAgICAgICAgICAgICAgIGlmKHR5cGUgPT0gJ3BuZycgfHwgdHlwZSA9PSAnanBnJyB8fCB0eXBlID09ICdqcGVnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgSW1hZ2VQcmV2aWV3KFsnaHR0cDovLzEwLjIyMS4yOS40OjE3MDAwJytpdGVtLnVybF0pXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicGRmSDVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMC4yMjEuMjkuNDo3MDAxL3JhL2ZpbGUvZ2V0RmlsZT9pZD0nK2l0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLmZpbGVOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgICAuY2VudGVyX3RpdGxle1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICAudHlwZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDY3LCAyMDcsIDEyNCwgMSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udGVudF9kaXYge1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgLmNvbnRlbnRfZGl2X2l0ZW0ge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogODVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudmFsdWUge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMSk7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDo6di1kZWVwIC52YW4tY2VsbCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1heF90ZXh0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI0NSwgMjQ2LCAyNDgsIDEpO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMTBweCAwIDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIH1cclxuICAgIC5tYXhfZmlsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNDUsIDI0NiwgMjQ4LCAxKTtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgICAgICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgLmZpbGUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzE2YmNmZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udGVudF9kaXZfaXRlbV90d28ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgICAgICBtYXJnaW46IDAgMTBweCA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgLypqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47Ki9cclxuICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgICAgICAgIC8qbWluLXdpZHRoOiA4NXB4OyovXHJcbiAgICAgICAgICAgIC8qd2lkdGg6IDYwcHg7Ki9cclxuICAgICAgICB9XHJcbiAgICAgICAgPmltZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggMTBweFxyXG4gICAgICAgIH1cclxuICAgICAgICAuZGF0ZXtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC52YWx1ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9kaXZcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfZGl2X2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPuahiOS7tuadpea6kDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ge3sgaW5mby5zb3VyY2UgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9kaXZfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+5Y6f56uL5qGI5Y+3PC9zcGFuPjxicj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ge3sgaW5mby5jYXNlTm8gfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9kaXZfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+5qGI55SxPC9zcGFuPjxicj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ge3sgaW5mby5yZWFzb24gfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9kaXZfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+5ZCN56ew5oiW5aeT5ZCNPC9zcGFuPjxicj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ge3sgaW5mby5uYW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfZGl2X2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPuWcsOWdgO+8iOS9j+WdgO+8iTwvc3Bhbj48YnI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+IHt7IGluZm8uYWRkciB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2Rpdl9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7pgq7mlL/nvJbnoIE8L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPiB7eyBpbmZvLnppcENvZGUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9kaXZfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+6JCl5Lia5omn54Wn5rOo5YaM5Y+3KOWFrOawkei6q+S7veWPt+eggSk8L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPiB7eyBpbmZvLmlkTm8gfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9kaXZfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+57uE57uH5py65p6E5Luj56CB77yI6KGM5Lia77yJPC9zcGFuPjxicj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ge3sgaW5mby5vcmdDb2RlIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfZGl2X2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPuekvuS8muS/oeeUqOS7o+eggTwvc3Bhbj48YnI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+IHt7IGluZm8uY3JlZGl0Q29kZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2Rpdl9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7ms5Xlrprku6PooajkurrvvIjotJ/otKPkurrvvIk8L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPiB7eyBpbmZvLmxlZ2FsTWFuIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfZGl2X2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPuiBjOWKoTwvc3Bhbj48YnI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+IHt7IGluZm8ucG9zdCB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2Rpdl9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7plIDmoYjnkIbnlLE8L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPiB7eyBpbmZvLmNhbmNlbFJlYXNvbiB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2Rpdl9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7lpIfms6g8L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPiB7eyBpbmZvLnJlbWFyayB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlcl90aXRsZVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj7mib/lip7kurrmhI/op4E8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1heF90ZXh0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuPnt7aW5mby5zaW1wbGVTaXR1YXRpb259fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWF4X2ZpbGVcIj5cclxuICAgICAgICAgICAgPHNwYW4+6ZmE5Lu2PC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2IHYtZm9yPVwiaXRlbSBpbiBpbmZvLmZpbGVzXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZpbGVcIiBAY2xpY2s9XCJ0b0RldGFpbChpdGVtKVwiPnt7aXRlbS5maWxlTmFtZX19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9kaXZfaXRlbV90d29cIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+5om/5Yqe5Lq6PC9zcGFuPlxyXG4gICAgICAgICAgICA8aW1nIHYtaWY9XCJpbmZvLnRha2VyU2lnblwiIDpzcmM9XCJpbmZvLnRha2VyU2lnblwiIGNsYXNzPVwiaWNvblwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7ljY/lip7kuro8L3NwYW4+XHJcbiAgICAgICAgICAgIDxpbWcgdi1pZj1cImluZm8uYXNzaXN0U2lnblwiICA6c3JjPVwiaW5mby5hc3Npc3RTaWduXCIgY2xhc3M9XCJpY29uXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dCBkYXRlXCI+IHt7IGluZm8udGFrZXJTaWduRGF0ZSB9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7SW1hZ2VQcmV2aWV3fSBmcm9tIFwidmFudFwiO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcImNhbmNlbFJlcG9ydFwiLFxyXG4gICAgICAgIHByb3BzIDoge1xyXG4gICAgICAgICAgICBpbmZvOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7fVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kcyA6IHtcclxuICAgICAgICAgICAgdG9EZXRhaWwoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBpdGVtLmZpbGVOYW1lLnNwbGl0KCcuJyksXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IG5hbWVbbmFtZS5sZW5ndGgtMV07XHJcbiAgICAgICAgICAgICAgICBpZih0eXBlID09ICdwbmcnIHx8IHR5cGUgPT0gJ2pwZycgfHwgdHlwZSA9PSAnanBlZycpe1xyXG4gICAgICAgICAgICAgICAgICAgIEltYWdlUHJldmlldyhbJ2h0dHA6Ly8xMC4yMjEuMjkuNDoxNzAwMCcraXRlbS51cmxdKVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBkZkg1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vMTAuMjIxLjI5LjQ6NzAwMS9yYS9maWxlL2dldEZpbGU/aWQ9JytpdGVtLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogaXRlbS5maWxlTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gICAgLmNlbnRlcl90aXRsZXtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBtYXJnaW46IDAgMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgLnR5cGUge1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSg2NywgMjA3LCAxMjQsIDEpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbnRlbnRfZGl2IHtcclxuICAgICAgICBtYXJnaW46IDVweCAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIC5jb250ZW50X2Rpdl9pdGVtIHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDg1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnZhbHVlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICA6OnYtZGVlcCAudmFuLWNlbGwge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tYXhfdGV4dCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNDUsIDI0NiwgMjQ4LCAxKTtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDEwcHggMCAxMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAubWF4X2ZpbGUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjQ1LCAyNDYsIDI0OCwgMSk7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIC5maWxlIHtcclxuICAgICAgICAgICAgY29sb3I6ICMxNmJjZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbnRlbnRfZGl2X2l0ZW1fdHdvIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDEwcHggNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIC8qanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyovXHJcbiAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgICAgICAgICAvKm1pbi13aWR0aDogODVweDsqL1xyXG4gICAgICAgICAgICAvKndpZHRoOiA2MHB4OyovXHJcbiAgICAgICAgfVxyXG4gICAgICAgID5pbWcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDEwcHhcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRhdGV7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudmFsdWUge1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfZGl2XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2Rpdl9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7nlLPor7fkuovpobk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgaW5mby5hcHBseUl0ZW0gfX1cclxuICAgICAgICAgICAgICAgICAgICB7e2luZm8udHlwZT09J2FuYSc/J+S6i+WFiCjlkKzor4Ep5ZGK55+l5Lmm5a6h5om5J1xyXG4gICAgICAgICAgICAgICAgICAgIDppbmZvLnR5cGU9PSdpZGEnPyflu7bmnJ/lip7nkIbmoYjku7blrqHmibknXHJcbiAgICAgICAgICAgICAgICAgICAgOmluZm8udHlwZT09J2lkZmEnPyflu7bmnJ/liIbmnJ/nvLTnurPnvZrmrL7lrqHmibknXHJcbiAgICAgICAgICAgICAgICAgICAgOmluZm8udHlwZT09J2lpYSc/J+WkhOe9muWGs+WumuS5puWuoeaJuSdcclxuICAgICAgICAgICAgICAgICAgICA6aW5mby50eXBlPT0naW5iYSc/J+ahiOS7tuWkhOe9muWGs+WumuS5puWuoeaJuSdcclxuICAgICAgICAgICAgICAgICAgICA6aW5mby50eXBlPT0naW5zYSc/J+ahiOS7tuWkhOe9muWGs+WumuS5puWuoeaJuSc6Jyd9fVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfZGl2X2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPuahiOeUsTwvc3Bhbj48YnI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+IHt7IGluZm8ucmVhc29uIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfZGl2X2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPuahiOS7tuadpea6kDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ge3sgaW5mby5zb3VyY2UgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9kaXZfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+5ZCN56ew5oiW5aeT5ZCNPC9zcGFuPjxicj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ge3sgaW5mby5uYW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfZGl2X2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPuekvuS8muS/oeeUqOS7o+eggS/ouqvku73or4Hlj7c8L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPiB7eyBpbmZvLmlkTm8gfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9kaXZfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+6IGU57O755S16K+dPC9zcGFuPjxicj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ge3sgaW5mby50ZWwgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9kaXZfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+5Zyw5Z2A77yI5L2P5Z2A77yJPC9zcGFuPjxicj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ge3sgaW5mby5hZGRyIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfZGl2X2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPuazleWumuS7o+ihqOS6uijotJ/otKPkuropPC9zcGFuPjxicj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ge3sgaW5mby5sZWdhbE1hbiB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2Rpdl9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7ogYzliqE8L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPiB7eyBpbmZvLnBvc3QgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9kaXZfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+5aSH5rOoPC9zcGFuPjxicj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ge3sgaW5mby5yZW1hcmsgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXJfdGl0bGVcIj5cclxuICAgICAgICAgICAgPHNwYW4+5qGI5oOF566A5LuL5Y+K5YW25aSE55CG5bu66K6uPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYXhfdGV4dFwiPlxyXG4gICAgICAgICAgICA8c3Bhbj57e2luZm8uc2ltcGxlU2l0dWF0aW9ufX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1heF9maWxlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPumZhOS7tjwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cIml0ZW0gaW4gaW5mby5maWxlc1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmaWxlXCIgQGNsaWNrPVwidG9EZXRhaWwoaXRlbSlcIj57e2l0ZW0uZmlsZU5hbWV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfZGl2X2l0ZW1fdHdvXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPuaJv+WKnuS6ujwvc3Bhbj5cclxuICAgICAgICAgICAgPGltZyB2LWlmPVwiaW5mby50YWtlclNpZ25cIiA6c3JjPVwiaW5mby50YWtlclNpZ25cIiBjbGFzcz1cImljb25cIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+5Y2P5Yqe5Lq6PC9zcGFuPlxyXG4gICAgICAgICAgICA8aW1nIHYtaWY9XCJpbmZvLmFzc2lzdFNpZ25cIiAgOnNyYz1cImluZm8uYXNzaXN0U2lnblwiIGNsYXNzPVwiaWNvblwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQgZGF0ZVwiPiB7eyBpbmZvLnRha2VyU2lnbkRhdGUgfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQge0ltYWdlUHJldmlld30gZnJvbSBcInZhbnRcIjtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogXCJpbnNpZGVEZWFsUmVwb3J0XCIsXHJcbiAgICAgICAgcHJvcHMgOiB7XHJcbiAgICAgICAgICAgIGluZm86IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHt9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzIDoge1xyXG4gICAgICAgICAgICB0b0RldGFpbChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IGl0ZW0uZmlsZU5hbWUuc3BsaXQoJy4nKSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gbmFtZVtuYW1lLmxlbmd0aC0xXTtcclxuICAgICAgICAgICAgICAgIGlmKHR5cGUgPT0gJ3BuZycgfHwgdHlwZSA9PSAnanBnJyB8fCB0eXBlID09ICdqcGVnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgSW1hZ2VQcmV2aWV3KFsnaHR0cDovLzEwLjIyMS4yOS40OjE3MDAwJytpdGVtLnVybF0pXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicGRmSDVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMC4yMjEuMjkuNDo3MDAxL3JhL2ZpbGUvZ2V0RmlsZT9pZD0nK2l0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLmZpbGVOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgICAuY2VudGVyX3RpdGxle1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICAudHlwZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDY3LCAyMDcsIDEyNCwgMSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udGVudF9kaXYge1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgLmNvbnRlbnRfZGl2X2l0ZW0ge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogODVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudmFsdWUge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMSk7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDo6di1kZWVwIC52YW4tY2VsbCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1heF90ZXh0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI0NSwgMjQ2LCAyNDgsIDEpO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMTBweCAwIDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIH1cclxuICAgIC5tYXhfZmlsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNDUsIDI0NiwgMjQ4LCAxKTtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgICAgICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgLmZpbGUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzE2YmNmZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udGVudF9kaXZfaXRlbV90d28ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgICAgICBtYXJnaW46IDAgMTBweCA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgLypqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47Ki9cclxuICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgICAgICAgIC8qbWluLXdpZHRoOiA4NXB4OyovXHJcbiAgICAgICAgICAgIC8qd2lkdGg6IDYwcHg7Ki9cclxuICAgICAgICB9XHJcbiAgICAgICAgPmltZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggMTBweFxyXG4gICAgICAgIH1cclxuICAgICAgICAuZGF0ZXtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC52YWx1ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9kaXZcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfZGl2X2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPuagh+mimDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ge3sgaW5mby5zb3VyY2UgfX3ooYzmlL/lpITnvZrlhrPlrprkuabkv6Hmga/lhazlvIDlrqHmibk8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9kaXZfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+5aSH5rOoPC9zcGFuPjxicj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ge3sgaW5mby5yZW1hcmsgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXJfdGl0bGVcIj5cclxuICAgICAgICAgICAgPHNwYW4+5YiG5bGA5ouf56i/5Lq6PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYXhfdGV4dFwiPlxyXG4gICAgICAgICAgICA8c3Bhbj57e2luZm8ubGlua01hbn19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYXhfZmlsZVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj7pmYTku7Y8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJpdGVtIGluIGluZm8uZmlsZXNcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmlsZVwiIEBjbGljaz1cInRvRGV0YWlsKGl0ZW0pXCI+e3tpdGVtLmZpbGVOYW1lfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2Rpdl9pdGVtX3R3b1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7opb/lsbHliIblsYA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dCBkYXRlXCI+IHt7IGluZm8udGFrZXJTaWduRGF0ZSB9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7SW1hZ2VQcmV2aWV3fSBmcm9tIFwidmFudFwiO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcInBlbmFsdHlEZWFsUmVwb3J0XCIsXHJcbiAgICAgICAgcHJvcHMgOiB7XHJcbiAgICAgICAgICAgIGluZm86IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHt9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzIDoge1xyXG4gICAgICAgICAgICB0b0RldGFpbChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IGl0ZW0uZmlsZU5hbWUuc3BsaXQoJy4nKSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gbmFtZVtuYW1lLmxlbmd0aC0xXTtcclxuICAgICAgICAgICAgICAgIGlmKHR5cGUgPT0gJ3BuZycgfHwgdHlwZSA9PSAnanBnJyB8fCB0eXBlID09ICdqcGVnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgSW1hZ2VQcmV2aWV3KFsnaHR0cDovLzEwLjIyMS4yOS40OjE3MDAwJytpdGVtLnVybF0pXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicGRmSDVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMC4yMjEuMjkuNDo3MDAxL3JhL2ZpbGUvZ2V0RmlsZT9pZD0nK2l0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLmZpbGVOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgICAuY2VudGVyX3RpdGxle1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICAudHlwZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDY3LCAyMDcsIDEyNCwgMSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udGVudF9kaXYge1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgLmNvbnRlbnRfZGl2X2l0ZW0ge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogODVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudmFsdWUge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMSk7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDo6di1kZWVwIC52YW4tY2VsbCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1heF90ZXh0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI0NSwgMjQ2LCAyNDgsIDEpO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMTBweCAwIDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIH1cclxuICAgIC5tYXhfZmlsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNDUsIDI0NiwgMjQ4LCAxKTtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgICAgICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgLmZpbGUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzE2YmNmZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udGVudF9kaXZfaXRlbV90d28ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgICAgICBtYXJnaW46IDAgMTBweCA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgLypqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47Ki9cclxuICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgICAgICAgIC8qbWluLXdpZHRoOiA4NXB4OyovXHJcbiAgICAgICAgICAgIC8qd2lkdGg6IDYwcHg7Ki9cclxuICAgICAgICB9XHJcbiAgICAgICAgPmltZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggMTBweFxyXG4gICAgICAgIH1cclxuICAgICAgICAuZGF0ZXtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC52YWx1ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9kaXZcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfZGl2X2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPuahiOeUsTwvc3Bhbj48YnI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+IHt7IGluZm8ucmVhc29uIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfZGl2X2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPuahiOS7tuadpea6kDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ge3sgaW5mby5zb3VyY2UgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9kaXZfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+5b2T5LqL5Lq65ZCN56ewL+Wnk+WQjTwvc3Bhbj48YnI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+IHt7IGluZm8ubmFtZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2Rpdl9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7ms5Xlrprku6PooajkurrvvIjotJ/otKPkurrvvIk8L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPiB7eyBpbmZvLmxlZ2FsTWFuIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfZGl2X2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPuW3peS9nOWNleS9jTwvc3Bhbj48YnI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+IHt7IGluZm8ud29ya05hbWUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9kaXZfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+6IGM5Yqh5oiW6IGM5LiaPC9zcGFuPjxicj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ge3sgaW5mby5wb3N0IH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfZGl2X2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPuWcsOWdgOaIluS9j+WdgDwvc3Bhbj48YnI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+IHt7IGluZm8uYWRkciB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2Rpdl9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7ms5Xlrprku6Pooajkuro8L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPiB7eyBpbmZvLmFkZHIgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9kaXZfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+56uL5qGI5pe26Ze0PC9zcGFuPjxicj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ge3sgaW5mby5jYXNlRGF0ZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2Rpdl9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7moYjku7bmib/lip7kurrlj4rmiafms5Xor4HnvJblj7c8L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPiB7eyBpbmZvLmxpbmtNYW4gfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9kaXZfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+6KGM5pS/5aSE572a5Yaz5a6a5Lmm5paH5Y+3PC9zcGFuPjxicj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ge3sgaW5mby5wdW5pc2hObyB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2Rpdl9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7nroDopoHmoYjmg4Xlj4rmn6XlpITnu4/ov4c8L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPiB7eyBpbmZvLnNpbXBsZVNpdHVhdGlvbiB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2Rpdl9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7lpITnkIbkvp3mja7lj4rnu5Pmnpw8L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPiB7eyBpbmZvLnJlc3VsdCB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2Rpdl9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7ooYzmlL/lpI3orq7ooYzmlL/or4norrzmg4XlhrU8L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPiB7eyBpbmZvLmFkbWluUmVzdWx0IH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfZGl2X2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPuWkhOe9muaJp+ihjOaDheWGteWPiue9muayoei0oueJqeeahOWkhOe9ruaDheWGtTwvc3Bhbj48YnI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+IHt7IGluZm8ucHVuaXNoU2l0dWF0aW9uIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyX3RpdGxlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPuaJv+WKnuS6uuaEj+ingTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWF4X3RleHRcIj5cclxuICAgICAgICAgICAgPHNwYW4+e3tpbmZvLmNhbmNlbFJlYXNvbn19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYXhfZmlsZVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj7pmYTku7Y8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJpdGVtIGluIGluZm8uZmlsZXNcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmlsZVwiIEBjbGljaz1cInRvRGV0YWlsKGl0ZW0pXCI+e3tpdGVtLmZpbGVOYW1lfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2Rpdl9pdGVtX3R3b1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7mib/lip7kuro8L3NwYW4+XHJcbiAgICAgICAgICAgIDxpbWcgdi1pZj1cImluZm8udGFrZXJTaWduXCIgOnNyYz1cImluZm8udGFrZXJTaWduXCIgY2xhc3M9XCJpY29uXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPuWNj+WKnuS6ujwvc3Bhbj5cclxuICAgICAgICAgICAgPGltZyB2LWlmPVwiaW5mby5hc3Npc3RTaWduXCIgIDpzcmM9XCJpbmZvLmFzc2lzdFNpZ25cIiBjbGFzcz1cImljb25cIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0IGRhdGVcIj4ge3sgaW5mby50YWtlclNpZ25EYXRlIH19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHtJbWFnZVByZXZpZXd9IGZyb20gXCJ2YW50XCI7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG5hbWU6IFwicGVuYWx0eVJlcG9ydFwiLFxyXG4gICAgICAgIHByb3BzIDoge1xyXG4gICAgICAgICAgICBpbmZvOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7fVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kcyA6IHtcclxuICAgICAgICAgICAgdG9EZXRhaWwoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBpdGVtLmZpbGVOYW1lLnNwbGl0KCcuJyksXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IG5hbWVbbmFtZS5sZW5ndGgtMV07XHJcbiAgICAgICAgICAgICAgICBpZih0eXBlID09ICdwbmcnIHx8IHR5cGUgPT0gJ2pwZycgfHwgdHlwZSA9PSAnanBlZycpe1xyXG4gICAgICAgICAgICAgICAgICAgIEltYWdlUHJldmlldyhbJ2h0dHA6Ly8xMC4yMjEuMjkuNDoxNzAwMCcraXRlbS51cmxdKVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBkZkg1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vMTAuMjIxLjI5LjQ6NzAwMS9yYS9maWxlL2dldEZpbGU/aWQ9JytpdGVtLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogaXRlbS5maWxlTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gICAgLmNlbnRlcl90aXRsZXtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBtYXJnaW46IDAgMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgLnR5cGUge1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSg2NywgMjA3LCAxMjQsIDEpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbnRlbnRfZGl2IHtcclxuICAgICAgICBtYXJnaW46IDVweCAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIC5jb250ZW50X2Rpdl9pdGVtIHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDg1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnZhbHVlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICA6OnYtZGVlcCAudmFuLWNlbGwge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tYXhfdGV4dCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNDUsIDI0NiwgMjQ4LCAxKTtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDEwcHggMCAxMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAubWF4X2ZpbGUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjQ1LCAyNDYsIDI0OCwgMSk7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIC5maWxlIHtcclxuICAgICAgICAgICAgY29sb3I6ICMxNmJjZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbnRlbnRfZGl2X2l0ZW1fdHdvIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDEwcHggNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIC8qanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyovXHJcbiAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgICAgICAgICAvKm1pbi13aWR0aDogODVweDsqL1xyXG4gICAgICAgICAgICAvKndpZHRoOiA2MHB4OyovXHJcbiAgICAgICAgfVxyXG4gICAgICAgID5pbWcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDEwcHhcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRhdGV7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudmFsdWUge1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfZGl2XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2Rpdl9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7moYjku7bmnaXmupA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+IHt7IGluZm8uc291cmNlIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfZGl2X2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPueri+ahiOWPtzwvc3Bhbj48YnI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+IHt7IGluZm8uY2FzZU5vIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfZGl2X2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPuahiOeUsTwvc3Bhbj48YnI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+IHt7IGluZm8ucmVhc29uIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfZGl2X2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPuWQjeensOaIluWnk+WQjTwvc3Bhbj48YnI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+IHt7IGluZm8ubmFtZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2Rpdl9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7pgq7mlL/nvJbnoIE8L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPiB7eyBpbmZvLnppcENvZGUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9kaXZfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+56S+5Lya5L+h55So5Luj56CBL+i6q+S7veivgeWPtzwvc3Bhbj48YnI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+IHt7IGluZm8uaWRObyB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2Rpdl9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7ogZTns7vnlLXor508L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPiB7eyBpbmZvLnRlbCB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2Rpdl9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7lnLDlnYDvvIjkvY/lnYDvvIk8L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPiB7eyBpbmZvLmFkZHIgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9kaXZfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+5rOV5a6a5Luj6KGo5Lq6PC9zcGFuPjxicj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ge3sgaW5mby5sZWdhbE1hbiB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2Rpdl9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7ogYzliqE8L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPiB7eyBpbmZvLnBvc3QgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9kaXZfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+5aSH5rOoPC9zcGFuPjxicj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ge3sgaW5mby5yZW1hcmsgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXJfdGl0bGVcIj5cclxuICAgICAgICAgICAgPHNwYW4+5qGI5oOF566A5LuL5Y+K56uL5qGI55CG55SxPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYXhfdGV4dFwiPlxyXG4gICAgICAgICAgICA8c3Bhbj57e2luZm8uc2ltcGxlU2l0dWF0aW9ufX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1heF9maWxlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPumZhOS7tjwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cIml0ZW0gaW4gaW5mby5maWxlc1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmaWxlXCIgQGNsaWNrPVwidG9EZXRhaWwoaXRlbSlcIj57e2l0ZW0uZmlsZU5hbWV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfZGl2X2l0ZW1fdHdvXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPuaJv+WKnuS6ujwvc3Bhbj5cclxuICAgICAgICAgICAgPGltZyB2LWlmPVwiaW5mby50YWtlclNpZ25cIiA6c3JjPVwiaW5mby50YWtlclNpZ25cIiBjbGFzcz1cImljb25cIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+5Y2P5Yqe5Lq6PC9zcGFuPlxyXG4gICAgICAgICAgICA8aW1nIHYtaWY9XCJpbmZvLmFzc2lzdFNpZ25cIiAgOnNyYz1cImluZm8uYXNzaXN0U2lnblwiIGNsYXNzPVwiaWNvblwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQgZGF0ZVwiPiB7eyBpbmZvLnRha2VyU2lnbkRhdGUgfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQge0ltYWdlUHJldmlld30gZnJvbSBcInZhbnRcIlxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG5hbWU6IFwicmVnaXN0ZXJSZXBvcnRcIixcclxuICAgICAgICBwcm9wcyA6IHtcclxuICAgICAgICAgICAgaW5mbzoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4ge31cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHMgOiB7XHJcbiAgICAgICAgICAgIHRvRGV0YWlsKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBuYW1lID0gaXRlbS5maWxlTmFtZS5zcGxpdCgnLicpLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBuYW1lW25hbWUubGVuZ3RoLTFdO1xyXG4gICAgICAgICAgICAgICAgaWYodHlwZSA9PSAncG5nJyB8fCB0eXBlID09ICdqcGcnIHx8IHR5cGUgPT0gJ2pwZWcnKXtcclxuICAgICAgICAgICAgICAgICAgICBJbWFnZVByZXZpZXcoWydodHRwOi8vMTAuMjIxLjI5LjQ6MTcwMDAnK2l0ZW0udXJsXSlcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwZGZINVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovLzEwLjIyMS4yOS40OjcwMDEvcmEvZmlsZS9nZXRGaWxlP2lkPScraXRlbS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0uZmlsZU5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICAgIC5jZW50ZXJfdGl0bGV7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIC50eXBlIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoNjcsIDIwNywgMTI0LCAxKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb250ZW50X2RpdiB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAuY29udGVudF9kaXZfaXRlbSB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA4NXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC52YWx1ZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgOjp2LWRlZXAgLnZhbi1jZWxsIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubWF4X3RleHQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjQ1LCAyNDYsIDI0OCwgMSk7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBtYXJnaW46IDVweCAxMHB4IDAgMTBweDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLm1heF9maWxlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI0NSwgMjQ2LCAyNDgsIDEpO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICAuZmlsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMTZiY2ZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb250ZW50X2Rpdl9pdGVtX3R3byB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAxMHB4IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAvKmp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsqL1xyXG4gICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgICAgICAgLyptaW4td2lkdGg6IDg1cHg7Ki9cclxuICAgICAgICAgICAgLyp3aWR0aDogNjBweDsqL1xyXG4gICAgICAgIH1cclxuICAgICAgICA+aW1nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCAxMHB4XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kYXRle1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnZhbHVlIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMSk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDx2YW4tbmF2LWJhciA6dGl0bGU9XCJuYXZUaXRsZVwiIGxlZnQtYXJyb3cgQGNsaWNrLWxlZnQ9XCIkcm91dGVyLmdvKC0xKVwiLz5cclxuICAgICAgICA8dmFuLWxvYWRpbmcgdi1pZj1cImxvYWRpbmdcIiBzaXplPVwiMjRweFwiIGNvbG9yPVwiIzAwOTRmZlwiIHZlcnRpY2FsIHN0eWxlPVwibWFyZ2luLXRvcDogNTAlXCI+5Yqg6L295LitLi4uPC92YW4tbG9hZGluZz5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2stZGV0YWlsLXdyYXBwZXJcIlxyXG4gICAgICAgICAgICAgOnN0eWxlPVwiaW5mby5zdGF0dXMgPT09ICflvoXlrqHmibknID8gJ2hlaWdodDogY2FsYygxMDB2aCAtIDEzNXB4KScgOiAnaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTVweCk7J1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj7ln7rmnKzkv6Hmga88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IGNhc2VOYW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cmVnaXN0ZXItcmVwb3J0IDppbmZvPVwiaW5mb1wiIHYtaWY9XCJpbmZvLnR5cGU9PSdyYSdcIi8+XHJcbiAgICAgICAgICAgIDxjYW5jZWwtcmVwb3J0IDppbmZvPVwiaW5mb1wiIHYtaWY9XCJpbmZvLnR5cGU9PSdjYSdcIi8+XHJcbiAgICAgICAgICAgIDxpbnNpZGUtZGVhbC1yZXBvcnQgOmluZm89XCJpbmZvXCJcclxuICAgICAgICAgICAgICAgIHYtaWY9XCJpbmZvLnR5cGU9PSdhbmEnfHxpbmZvLnR5cGU9PSdpZGEnfHxpbmZvLnR5cGU9PSdpZGZhJ1xyXG4gICAgICAgICAgICAgICAgfHxpbmZvLnR5cGU9PSdpaWEnfHxpbmZvLnR5cGU9PSdpbmJhJ3x8aW5mby50eXBlPT0naW5zYSdcIi8+XHJcbiAgICAgICAgICAgIDxwZW5hbHR5LXJlcG9ydCA6aW5mbz1cImluZm9cIiB2LWlmPVwiaW5mby50eXBlPT0nY2VhJ1wiLz5cclxuICAgICAgICAgICAgPGJyZWFrLWxhdy1yZXBvcnQgOmluZm89XCJpbmZvXCIgdi1pZj1cImluZm8udHlwZT09J2NwYScgfHwgaW5mby50eXBlPT0nY2NhJ1wiLz5cclxuICAgICAgICAgICAgPHBlbmFsdHktZGVhbC1yZXBvcnQgOmluZm89XCJpbmZvXCIgdi1pZj1cImluZm8udHlwZT09J3BwYSdcIi8+XHJcbiAgICAgICAgICAgIDxkaXYgdi1mb3I9XCIoaXRlbSxpKSBpbiBpbmZvLnZhbHVlc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlcl90aXRsZVwiIHYtc2hvdz1cIml0ZW0uc2lnbkRhdGUgfHwgaXRlbS5jdXJyZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3tpdGVtLmF0dHJOYW1lfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiKGluZm8uc3RhdHVzID09PSAn5b6F5a6h5om5JyYmaXRlbS5jdXJyZW50KSA/ICdtYXhfdGV4dF90d28nOidtb3JlX2RpdidcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJpbmZvLnN0YXR1cyA9PT0gJ+W+heWuoeaJuScmJiBpdGVtLmN1cnJlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZhbi1yYWRpby1ncm91cCB2LW1vZGVsPVwiaXRlbS5vcGluaW9uXCIgIGRpcmVjdGlvbj1cImhvcml6b250YWxcIiAgQGNoYW5nZT1cImNoYW5nZU9waW5pb24oaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2YW4tcmFkaW8gOm5hbWU9XCIxXCIgaWNvbi1zaXplPVwiMTZweFwiPnt7aXRlbS5uZXh0TnVtPT0wPyflkIzmhI8nOifmi5/lkIzmhI8nfX08L3Zhbi1yYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2YW4tcmFkaW8gOm5hbWU9XCIwXCIgaWNvbi1zaXplPVwiMTZweFwiPuS4jeWQjOaEjzwvdmFuLXJhZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Zhbi1yYWRpby1ncm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCI2XCIgdi1tb2RlbD1cIml0ZW0uY29udGVudFwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5oSP6KeBXCIgY2xhc3M9XCJpbnB1dFdcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjZcIiB2LWlmPVwiKGluZm8udHlwZT09J2luYmEnfHxpbmZvLnR5cGV0eXBlPT0naW5zYSd8fGluZm8udHlwZXR5cGU9PSdpaWEnKSAmJml0ZW0uYXR0ck5hbWUuaW5kZXhPZign5biC5bGA5rOV6KeE5aSEJyk+LTFcIiB2LW1vZGVsPVwiaXRlbS5yZW1hcmtcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeaWh+S5puWuoeaguOaEj+ingVwiIGNsYXNzPVwiaW5wdXRXXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO21hcmdpbi10b3A6IDEwcHhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgQGNsaWNrPVwic2hvd0VuZFRpbWUoaSxpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZW5kVGltZX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZhbi1pY29uIG5hbWU9XCJhcnJvdy1kb3duXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIiEoaW5mby5zdGF0dXMgPT09ICflvoXlrqHmibknJiYgaXRlbS5jdXJyZW50KSAmJiBpdGVtLnNpZ25EYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXhfdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3tpdGVtLmNvbnRlbnR9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCIoaW5mby50eXBlPT0naW5iYSd8fGluZm8udHlwZXR5cGU9PSdpbnNhJ3x8aW5mby50eXBldHlwZT09J2lpYScpICYmaXRlbS5hdHRyTmFtZS5pbmRleE9mKCfluILlsYDms5Xop4TlpIQnKT4tMVwiPnt7aXRlbS5yZW1hcmt9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2Rpdl9pdGVtX3R3b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+e3tpbmZvLnR5cGUgIT0gJ3BwYSc/aXRlbS5zaWduOml0ZW0uYXBwcm92YWxVc2VybmFtZX19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB2LWlmPVwiaXRlbS5zaWduVXJsICYmIGluZm8udHlwZSAhPSAncHBhJ1wiIDpzcmM9XCJpdGVtLnNpZ25VcmxcIiBjbGFzcz1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dCBkYXRlXCI+e3sgaXRlbS5zaWduRGF0ZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlcl90aXRsZVwiIHYtc2hvdz1cIm5leHREZXB0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj7kuIvkuIDmraXpqqQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9kaXZcIiB2LWlmPVwiaW5mby5zdGF0dXMgPT09ICflvoXlrqHmibknICYmIG5leHREZXB0ICYmIGluZm8udHlwZSAhPSAncHBhJ1wiPlxyXG4gICAgICAgICAgICAgICAgPHZhbi1maWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwibmV4dE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpcy1saW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwaWNrZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuWKnueQhuS6ulwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LWFsaWduPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIueCueWHu+mAieaLqeS4i+S4gOatpemqpOWKnueQhuS6ulwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInNob3dQaWNrZXJVc2VyID0gdHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHZhbi1wb3B1cCB2LW1vZGVsPVwic2hvd1BpY2tlclVzZXJcIiBwb3NpdGlvbj1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2YW4tcGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93LXRvb2xiYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjb2x1bW5zPVwiY29sdW1uc1BlcnNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS1rZXk9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjb25maXJtPVwib25Db25maXJtVXNlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2FuY2VsPVwic2hvd1BpY2tlclVzZXIgPSBmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvdmFuLXBvcHVwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfZGl2XCIgdi1zaG93PVwiaW5mby5zdGF0dXMgIT09ICflvoXlrqHmibknICYmIGN1cnJlbnRJbmRleCE9OTk5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9kaXZfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPuWKnueQhuS6ujwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+e3tuZXh0TmFtZX19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgdi1pZj1cImluZm8uc3RhdHVzID09PSAn5b6F5a6h5om5J1wiIGNsYXNzPVwiY2hlY2stZGV0YWlsLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwieWVzXCIgQGNsaWNrPVwic3VibWl0KClcIj7noa7lrprmj5DkuqQ8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dmFuLXBvcHVwIHYtbW9kZWw9XCJkaWFsb2dcIiA6c3R5bGU9XCJ7IHdpZHRoOiAnOTAlJyB9XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cFdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwPuivt+i+k+WFpeetvuWQjeWvhueggTwvcD5cclxuICAgICAgICAgICAgICAgIDx2YW4tZmllbGQgdi1tb2RlbD1cImNvbnRlbnRcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeetvuWQjeWvhueggVwiLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cEZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2YW4tYnV0dG9uIHR5cGU9XCJkZWZhdWx0XCIgQGNsaWNrPVwiY2xvc2VNb2RhbFwiPuWPlua2iDwvdmFuLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8dmFuLWJ1dHRvbiB0eXBlPVwiaW5mb1wiIEBjbGljaz1cInN1cmVcIj7noa7lrpo8L3Zhbi1idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC92YW4tcG9wdXA+XHJcblxyXG4gICAgICAgIDwhLS3ml7bpl7QtLT5cclxuICAgICAgICA8dmFuLXBvcHVwIHYtbW9kZWw9XCJlbmRQb3BcIiBwb3NpdGlvbj1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICA8dmFuLWRhdGV0aW1lLXBpY2tlciAgdi1tb2RlbD1cImN1cnJlbnREYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwi6YCJ5oup5bm05pyIXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDptaW4tZGF0ZT1cIm1pbkVuZERhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNvbmZpcm09XCJvbkNvbmZpcm1FbmRUaW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjYW5jZWw9XCJlbmRQb3A9ZmFsc2VcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvdmFuLXBvcHVwPlxyXG5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7Z2V0UmVwb3J0RGV0YWlsLGdldFVzZXJMaXN0LHNpZ25SZXBvcnQsYWRkUmVwb3J0LGNoZWNrUHdkfSBmcm9tIFwiLi4vLi4vLi4vYXBpL2Nhc2VcIlxyXG4gICAgaW1wb3J0IHJlZ2lzdGVyUmVwb3J0IGZyb20gXCJAL3ZpZXdzL2Nhc2VDaGVjay9jYXNlRGV0YWlsL2NvbXBvbmVudHMvcmVnaXN0ZXJSZXBvcnRcIjtcclxuICAgIGltcG9ydCBjYW5jZWxSZXBvcnQgZnJvbSBcIkAvdmlld3MvY2FzZUNoZWNrL2Nhc2VEZXRhaWwvY29tcG9uZW50cy9jYW5jZWxSZXBvcnRcIjtcclxuICAgIGltcG9ydCBpbnNpZGVEZWFsUmVwb3J0IGZyb20gXCJAL3ZpZXdzL2Nhc2VDaGVjay9jYXNlRGV0YWlsL2NvbXBvbmVudHMvaW5zaWRlRGVhbFJlcG9ydFwiO1xyXG4gICAgaW1wb3J0IHBlbmFsdHlSZXBvcnQgZnJvbSBcIkAvdmlld3MvY2FzZUNoZWNrL2Nhc2VEZXRhaWwvY29tcG9uZW50cy9wZW5hbHR5UmVwb3J0XCI7XHJcbiAgICBpbXBvcnQgYnJlYWtMYXdSZXBvcnQgZnJvbSBcIkAvdmlld3MvY2FzZUNoZWNrL2Nhc2VEZXRhaWwvY29tcG9uZW50cy9icmVha0xhd1JlcG9ydFwiO1xyXG4gICAgaW1wb3J0IHBlbmFsdHlEZWFsUmVwb3J0IGZyb20gXCJAL3ZpZXdzL2Nhc2VDaGVjay9jYXNlRGV0YWlsL2NvbXBvbmVudHMvcGVuYWx0eURlYWxSZXBvcnRcIjtcclxuICAgIGltcG9ydCB7VG9hc3R9IGZyb20gXCJ2YW50XCI7XHJcbiAgICBpbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogXCJpbmRleFwiLFxyXG4gICAgICAgIGNvbXBvbmVudHMgOiB7XHJcbiAgICAgICAgICAgIHJlZ2lzdGVyUmVwb3J0LFxyXG4gICAgICAgICAgICBjYW5jZWxSZXBvcnQsXHJcbiAgICAgICAgICAgIGluc2lkZURlYWxSZXBvcnQsXHJcbiAgICAgICAgICAgIHBlbmFsdHlSZXBvcnQsXHJcbiAgICAgICAgICAgIGJyZWFrTGF3UmVwb3J0LFxyXG4gICAgICAgICAgICBwZW5hbHR5RGVhbFJlcG9ydFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YSAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBuYXZUaXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGlhbG9nIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBuZXh0TmFtZSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgc2hvd1BpY2tlclVzZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaW5mbyA6IHt9LFxyXG4gICAgICAgICAgICAgICAgY2FzZU5hbWUgOiAnJyxcclxuICAgICAgICAgICAgICAgIGNvbHVtbnNQZXJzb246W10sXHJcbiAgICAgICAgICAgICAgICBwZXJzb25BcnIgOiBbXSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCA6IDAsXHJcbiAgICAgICAgICAgICAgICBuZXh0RGVwdCA6ICcnLFxyXG4gICAgICAgICAgICAgICAgbmV4dERlcHRJZCA6ICcnLFxyXG4gICAgICAgICAgICAgICAgbmV4dE51bSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgYXBwcm92YWxVc2VySWQgOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFwcHJvdmFsVXNlcklkXCIpLFxyXG4gICAgICAgICAgICAgICAgZmlsZUlkQXJyIDogW10sXHJcbiAgICAgICAgICAgICAgICBjb250ZW50IDogJycsXHJcbiAgICAgICAgICAgICAgICB1cmwgOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNpZ25VcmxcIiksXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZTpuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgZW5kUG9wOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1pbkVuZERhdGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgZW5kVGltZTogZGF5anMobmV3IERhdGUoKSkuZm9ybWF0KCdZWVlZ5bm0TU3mnIhEROaXpScpLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhc2VJZCA9IHRoaXMuJHJvdXRlLnF1ZXJ5LmNhc2VJZDtcclxuICAgICAgICAgICAgdGhpcy5jYXNlTmFtZSA9IHRoaXMuJHJvdXRlLnF1ZXJ5LmNhc2VOYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm5hdlRpdGxlID0gdGhpcy4kcm91dGUucXVlcnkuc3RhdHVzPT0n5b6F5a6h5om5Jz8n5qGI5Lu25a6h5om5Jzon5qGI5Lu26K+m5oOFJztcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSB0aGlzLiRyb3V0ZS5xdWVyeS5zdGF0dXMgPT0gJ+W3suWuoeaJuSc/OTk5OjA7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXBwcm92YWxVc2VySWQpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXJsKVxyXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5RGV0YWlsKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGluaXREYXRlKCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICAgICAgICAgICAgICBtb250aCA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSsxLFxyXG4gICAgICAgICAgICAgICAgICAgIGRheSA9IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYobW9udGg8MTApe1xyXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoID0gJzAnK21vbnRoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoZGF5PDEwKXtcclxuICAgICAgICAgICAgICAgICAgICBkYXkgPSAnMCcrZGF5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHllYXIrJ+W5tCcrbW9udGgrJ+aciCcrZGF5Kyfml6UnO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaG93RW5kVGltZShpbmRleCxpdGVtKXtcclxuICAgICAgICAgICAgICAgIGxldCB0ZW1wVGltZSA9ICcnXHJcbiAgICAgICAgICAgICAgICBpZihpbmRleD09PTApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBUaW1lID0gdGhpcy5pbmZvLmFzc2lzdFNpZ25EYXRlO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5jdXJyZW50PT09dHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBUaW1lID0gdGhpcy5pbmZvLnZhbHVlc1tpbmRleC0xXS5zaWduRGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgeWVhciA9IHRlbXBUaW1lLnN1YnN0cigwLDQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1vbnRoID0gdGVtcFRpbWUuc3Vic3RyKDUsMik7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF5ID0gdGVtcFRpbWUuc3Vic3RyKDgsMik7XHJcbiAgICAgICAgICAgICAgICBsZXQgZm9ybWF0VGltZSA9IHllYXIrJy0nK21vbnRoKyctJytkYXk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV4dFRpbWUgPSBkYXlqcyhmb3JtYXRUaW1lKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWluRW5kRGF0ZSA9IG5ldyBEYXRlKG5leHRUaW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kUG9wPSB0cnVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkNvbmZpcm1FbmRUaW1lKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZFRpbWUgPSBkYXlqcyh2YWx1ZSkuZm9ybWF0KCdZWVlZ5bm0TU3mnIhEROaXpScpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZFBvcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBxdWVyeURldGFpbCgpe1xyXG4gICAgICAgICAgICAgICAgZ2V0UmVwb3J0RGV0YWlsKHtjYXNlSWQ6dGhpcy5jYXNlSWR9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZm8gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZm8udGFrZXJTaWduID0gdGhpcy5pbmZvLnRha2VyU2lnbj8naHR0cDovLzEwLjIyMS4yOS40OjcwMDEvcmEnKyB0aGlzLmluZm8udGFrZXJTaWduOicnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5mby5hc3Npc3RTaWduID0gdGhpcy5pbmZvLmFzc2lzdFNpZ24/J2h0dHA6Ly8xMC4yMjEuMjkuNDo3MDAxL3JhJysgdGhpcy5pbmZvLmFzc2lzdFNpZ246Jyc7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFyciA9IHJlcy5kYXRhLnZhbHVlcztcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxhcnIubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJbaV0uc2lnblVybCA9ICdodHRwOi8vMTAuMjIxLjI5LjQ6NzAwMS9yYScrIGFycltpXS5zaWduVXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihhcnJbaV0uY3VycmVudCAmJiByZXMuZGF0YS5zdGF0dXMgPT0gJ+W+heWuoeaJuScpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyW2ldLnNpZ25EYXRlID0gdGhpcy5lbmRUaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy50eXBlID09ICdwcGEnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihhcnJbaV0uYXR0ck5hbWUuaW5kZXhPZign5a6h5om5Jyk+LTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJbaV0ub3BpbmlvbiA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycltpXS5jb250ZW50ID0gYXJyW2ldLmNvbnRlbnQ/YXJyW2ldLmNvbnRlbnQ6J+aLn+WQjOaEjydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJbaV0ub3BpbmlvbiA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBhcnJbaV0ubmV4dE51bSA9PSAwPyflkIzmhI8nOifmi5/lkIzmhI8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycltpXS5jb250ZW50ID0gYXJyW2ldLmNvbnRlbnQ/YXJyW2ldLmNvbnRlbnQ6Y29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBpKzE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHROdW0gPSBhcnJbaV0ubmV4dE51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGkhPWFyci5sZW5ndGgtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0RGVwdCA9IGFycltpKzFdLmRlcHRUeXBlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dERlcHRJZCA9IGFycltpKzFdLmRlcHRJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYoYXJyW2ldLmN1cnJlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0TmFtZSA9IGFycltpXS5hcHByb3ZhbFVzZXJuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8v5Yik5pat5piv5ZCm5Li656ys5LiA5q2lXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50SW5kZXggPT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGVzID0gcmVzLmRhdGEuZmlsZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5mby5hc3Npc3Qpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlcklkID0gdGhpcy5pbmZvLmFzc2lzdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VySWQgPSB0aGlzLmluZm8udGFrZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluZm8udGFrZXJTaWduRGF0ZSA9IHRoaXMuaW5pdERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlcy5mb3JFYWNoKGl0ZW09PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZUxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgOiBpdGVtLmZpbGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCA6IGl0ZW0udXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5pbmZvLmFzc2lzdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHREZXB0ID0gYXJyWzBdLmRlcHRUeXBlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0RGVwdElkID0gYXJyWzBdLmRlcHRJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLnN0YXR1cyAhPSAn5b6F5a6h5om5Jyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0TmFtZSA9IHRoaXMuaW5mby5hc3Npc3ROYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dERlcHQgPSAn5Y2P5Yqe5Lq6JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dERlcHRJZCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEuc3RhdHVzICE9ICflvoXlrqHmibknKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHROYW1lID0gdGhpcy5pbmZvLnRha2VyTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmluZm8udHlwZSAhPSAncHBhJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdFBlcnNvbkRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXRQZXJzb25EYXRhKCl7XHJcbiAgICAgICAgICAgICAgICBnZXRVc2VyTGlzdCh7ZGVwdElkOnRoaXMubmV4dERlcHRJZCx0eXBlOnRoaXMubmV4dERlcHR9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sdW1uc1BlcnNvbiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaChpdGVtPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29sdW1uc1BlcnNvbi5wdXNoKGl0ZW0udXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVyc29uQXJyID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VibWl0KCl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7aW5mbyxjdXJyZW50SW5kZXgsbmV4dERlcHQsbmV4dE5hbWV9ID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGxldCB0eXBlID0gaW5mby50eXBlO1xyXG4gICAgICAgICAgICAgICAgaWYobmV4dERlcHQgJiYgIW5leHROYW1lKXtcclxuICAgICAgICAgICAgICAgICAgICBUb2FzdCgn6K+36YCJ5oup5LiL5LiA5Liq5q2l6aqk5Yqe55CG5Lq65ZGYJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudEluZGV4ICE9IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvcGluaW9uID0gaW5mby52YWx1ZXNbY3VycmVudEluZGV4LTFdLm9waW5pb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25VcmwgPSBpbmZvLnZhbHVlc1tjdXJyZW50SW5kZXgtMV0uc2lnblVybDtcclxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlICE9ICdwcGEnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZihvcGluaW9uID09IDAgJiYgdHlwZSAhPSAncHBhJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLiRjb25maXJtKCfmmK/lkKbnoa7lrprkuLrkuI3lkIzmhI8/JywgJ+aPkOekuicsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25maXJtQnV0dG9uVGV4dDogJ+ehruWumicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ+WPlua2iCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdHlwZTogJ3dhcm5pbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmhhbmRsZU5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZU5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGUgIT0gJ3BwYScpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaGFuZGxlU2F2ZSgpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50SW5kZXggIT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVOZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7aW5mbyxuZXh0TmFtZSxuZXh0RGVwdCxwZXJzb25BcnIsY2FzZUlkLGFwcHJvdmFsVXNlcklkLHVybH0gPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIGluZm8uYXBwcm92YWxJZCA9IGNhc2VJZHx8Jyc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIWluZm8udGFrZXIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZvLnRha2VyID0gYXBwcm92YWxVc2VySWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm8uYXNzaXN0ID0gYXBwcm92YWxVc2VySWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm8uYXNzaXN0U2lnbiA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5mby5hc3Npc3RTaWduRGF0ZSA9IHRoaXMuaW5pdERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5mby5maWxlcyA9IHRoaXMuZmlsZUlkQXJyO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG5leHREZXB0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8cGVyc29uQXJyLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBlcnNvbkFycltpXS51c2VybmFtZSA9PSBuZXh0TmFtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mby5uZXh0ID0gcGVyc29uQXJyW2ldLmFwcHJvdmFsVXNlcklkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGFkZFJlcG9ydChpbmZvKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+aIkOWKnycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihuZXh0RGVwdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIuZ28oLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7fSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhhbmRsZU5leHQoKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtpbmZvLG5leHREZXB0LG5leHROYW1lLHBlcnNvbkFycix1cmx9ID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGxldCBzdHJpbmcgPSBpbmZvLnZhbHVlc1t0aGlzLmN1cnJlbnRJbmRleC0xXTtcclxuICAgICAgICAgICAgICAgIGlmKG5leHREZXB0KXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxwZXJzb25BcnIubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwZXJzb25BcnJbaV0udXNlcm5hbWUgPT0gbmV4dE5hbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nLm5leHQgPSBwZXJzb25BcnJbaV0uYXBwcm92YWxVc2VySWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdHJpbmcuc2lnblVybCA9IHVybDtcclxuICAgICAgICAgICAgICAgIHN0cmluZy5jYXNlSWQgPSB0aGlzLmNhc2VJZDtcclxuICAgICAgICAgICAgICAgIHN0cmluZy5zaWduRGF0ZSA9IHRoaXMuZW5kVGltZTtcclxuICAgICAgICAgICAgICAgIHNpZ25SZXBvcnQoc3RyaW5nLGluZm8udHlwZSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+aIkOWKnycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMubmV4dERlcHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIuZ28oLTEpXHJcbiAgICAgICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHt9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25Db25maXJtVXNlcih2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHROYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQaWNrZXJVc2VyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsb3NlTW9kYWwoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1cmUoKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtpbmZvLGN1cnJlbnRJbmRleH0gPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5jb250ZW50PT09Jycpe1xyXG4gICAgICAgICAgICAgICAgICAgIFRvYXN0KCfor7fovpPlhaXnrb7lkI3lr4bnoIEnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNoZWNrUHdkKHtwYXNzd29yZDogdGhpcy5jb250ZW50IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMubXNnID09ICdzdWNjZXNzJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihjdXJyZW50SW5kZXggIT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kc2V0KGluZm8udmFsdWVzW3RoaXMuY3VycmVudEluZGV4LTFdLCdzaWduVXJsJyx0aGF0LnVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kc2V0KGluZm8udmFsdWVzW3RoaXMuY3VycmVudEluZGV4LTFdLCdhcHByb3ZhbFVzZXJuYW1lJyx0aGF0LnVzZXJuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZU5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKGN1cnJlbnRJbmRleCA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighaW5mby50YWtlclNpZ24pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRzZXQodGhhdC5pbmZvLCd0YWtlclNpZ24nLHRoYXQudXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kc2V0KHRoYXQuaW5mbywnYXNzaXN0U2lnbicsdGhhdC51cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVNhdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KHJlcy5tc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7fSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNoYW5nZU9waW5pb24oaXRlbSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBpZihpdGVtLm9waW5pb24gPT0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kc2V0KGl0ZW0sJ2NvbnRlbnQnLGl0ZW0ubmV4dE51bT4wPyfmi5/lkIzmhI8nOiflkIzmhI8nKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJHNldChpdGVtLCdjb250ZW50Jywn5LiN5ZCM5oSPJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG4gICAgLmNoZWNrLWRldGFpbC13cmFwcGVyIHtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY1Rjc7XHJcbiAgICAgICAgLmNlbnRlcl90aXRsZXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAudHlwZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSg2NywgMjA3LCAxMjQsIDEpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZW50X2RpdiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIC5jb250ZW50X2Rpdl9pdGVtIHtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogODVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC52YWx1ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA6OnYtZGVlcCAudmFuLWNlbGwge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubWF4X3RleHQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI0NSwgMjQ2LCAyNDgsIDEpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweCAxMHB4IDAgMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXhfZmlsZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjQ1LCAyNDYsIDI0OCwgMSk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAuZmlsZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzE2YmNmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudF9kaXZfaXRlbV90d28ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMTBweCA1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgLypqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47Ki9cclxuICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgICAgICAgICAgIC8qbWluLXdpZHRoOiA4NXB4OyovXHJcbiAgICAgICAgICAgICAgICAvKndpZHRoOiA2MHB4OyovXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPmltZyB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAxMHB4XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRhdGV7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudmFsdWUge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMSk7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXhfdGV4dF90d28ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI0NSwgMjQ2LCAyNDgsIDEpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweCAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAuaW5wdXRXIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYmVkZjA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vcmVfZGl2e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNoZWNrLWRldGFpbC1ib3R0b20ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY1Rjc7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAueWVzIHtcclxuICAgICAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg2OCwgMTIzLCAyNTIsIDEpO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhbi1wb3B1cCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wb3B1cFdyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIC8qdGV4dC1hbGlnbjogY2VudGVyKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigxMzYsIDE0MSwgMTQ5KTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDM1MHB4KTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wb3B1cEZvb3RlciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudF9kaXZcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2X2l0ZW1cIiB9LCBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwi5a6h5om55Y+3XCIpXSksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiIOaYhueUn+eOr+aLmOenu++8iFwiICtcbiAgICAgICAgICAgICAgX3ZtLl9zKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSkgK1xuICAgICAgICAgICAgICBcIu+8ieW5tDEtIFwiICtcbiAgICAgICAgICAgICAgX3ZtLl9zKF92bS5pbmZvLnB1bmlzaE5vKSArXG4gICAgICAgICAgICAgIFwi5Y+3XCJcbiAgICAgICAgICApLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50X2Rpdl9pdGVtXCIgfSwgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIuahiOeUsVwiKV0pLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmluZm8ucmVhc29uKSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2X2l0ZW1cIiB9LCBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwi5LyB5Lia5ZCN56ew5oiW5YW25LuW57uP6JCl6ICFXCIpXSksXG4gICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uaW5mby5hZG1pblJlc3VsdCkpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50X2Rpdl9pdGVtXCIgfSwgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIue7hOe7h+acuuaehOS7o+eggVwiKV0pLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmluZm8ub3JnQ29kZSkpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50X2Rpdl9pdGVtXCIgfSwgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIuWcsOWdgFwiKV0pLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmluZm8uYWRkcikpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50X2Rpdl9pdGVtXCIgfSwgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIumCruaUv+e8lueggVwiKV0pLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmluZm8uemlwQ29kZSkpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50X2Rpdl9pdGVtXCIgfSwgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIuazleWumuS7o+ihqOS6uuaIlui0n+i0o+S6ulwiKV0pLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmluZm8ubGVnYWxNYW4pKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudF9kaXZfaXRlbVwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCLmnInmlYjor4Hku7blj4rlj7fnoIFcIildKSxcbiAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5pbmZvLmxlZ2FsSWQpKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudF9kaXZfaXRlbVwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCLogZTns7vnlLXor51cIildKSxcbiAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5pbmZvLmxlZ2FsVGVsKSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2X2l0ZW1cIiB9LCBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwi5LyB5Lia5Li76KaB6LSf6LSj5Lq6XCIpXSksXG4gICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uaW5mby5saW5rTWFuKSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2X2l0ZW1cIiB9LCBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwi5pyJ5pWI6K+B5Lu25Y+K5Y+356CBXCIpXSksXG4gICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uaW5mby5saW5rSWQpKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudF9kaXZfaXRlbVwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCLogZTns7vnlLXor51cIildKSxcbiAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5pbmZvLmxlZ2FsVGVsKSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2X2l0ZW1cIiB9LCBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwi6LCD5p+l5Lq65ZGYXCIpXSksXG4gICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uaW5mby5pbnZlc3ROYW1lKSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2X2l0ZW1cIiB9LCBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwi5om/5Yqe6YOo6ZeoXCIpXSksXG4gICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uaW5mby5jaGFyZ2VEZXB0KSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2X2l0ZW1cIiB9LCBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwi5qGI5oOF566A5LuLXCIpXSksXG4gICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uaW5mby5zaW1wbGVTaXR1YXRpb24pKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlcl90aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgIF92bS5fdihcbiAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICBfdm0uaW5mby50eXBlID09IFwiY3BhXCJcbiAgICAgICAgICAgICAgPyBcIuihjOaUv+aLmOeVmeWkhOe9muenu+mAgeS+neaNruWPiuWkhOeQhuaEj+ingVwiXG4gICAgICAgICAgICAgIDogXCLnp7vpgIHkvp3mja7lj4rlpITnkIbmhI/op4FcIlxuICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWF4X3RleHRcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmluZm8uc2ltcGxlU2l0dWF0aW9uKSldKSxcbiAgICBdKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcIm1heF9maWxlXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLpmYTku7ZcIildKSxcbiAgICAgICAgX3ZtLl9sKF92bS5pbmZvLmZpbGVzLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmaWxlXCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9EZXRhaWwoaXRlbSlcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS5maWxlTmFtZSkpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKVxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2X2l0ZW1fdHdvXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCLnu4/lip7kurpcIildKSxcbiAgICAgIF92bS5pbmZvLnRha2VyU2lnblxuICAgICAgICA/IF9jKFwiaW1nXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvblwiLCBhdHRyczogeyBzcmM6IF92bS5pbmZvLnRha2VyU2lnbiB9IH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIuWNj+WKnuS6ulwiKV0pLFxuICAgICAgX3ZtLmluZm8uYXNzaXN0U2lnblxuICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25cIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmluZm8uYXNzaXN0U2lnbiB9LFxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0IGRhdGVcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uaW5mby50YWtlclNpZ25EYXRlKSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50X2RpdlwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudF9kaXZfaXRlbVwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCLmoYjku7bmnaXmupBcIildKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5pbmZvLnNvdXJjZSkpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50X2Rpdl9pdGVtXCIgfSwgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIuWOn+eri+ahiOWPt1wiKV0pLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmluZm8uY2FzZU5vKSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2X2l0ZW1cIiB9LCBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwi5qGI55SxXCIpXSksXG4gICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uaW5mby5yZWFzb24pKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudF9kaXZfaXRlbVwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCLlkI3np7DmiJblp5PlkI1cIildKSxcbiAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5pbmZvLm5hbWUpKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudF9kaXZfaXRlbVwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCLlnLDlnYDvvIjkvY/lnYDvvIlcIildKSxcbiAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5pbmZvLmFkZHIpKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudF9kaXZfaXRlbVwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCLpgq7mlL/nvJbnoIFcIildKSxcbiAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5pbmZvLnppcENvZGUpKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudF9kaXZfaXRlbVwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCLokKXkuJrmiafnhafms6jlhozlj7co5YWs5rCR6Lqr5Lu95Y+356CBKVwiKSxcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uaW5mby5pZE5vKSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2X2l0ZW1cIiB9LCBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwi57uE57uH5py65p6E5Luj56CB77yI6KGM5Lia77yJXCIpXSksXG4gICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uaW5mby5vcmdDb2RlKSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2X2l0ZW1cIiB9LCBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwi56S+5Lya5L+h55So5Luj56CBXCIpXSksXG4gICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uaW5mby5jcmVkaXRDb2RlKSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2X2l0ZW1cIiB9LCBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwi5rOV5a6a5Luj6KGo5Lq677yI6LSf6LSj5Lq677yJXCIpXSksXG4gICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uaW5mby5sZWdhbE1hbikpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50X2Rpdl9pdGVtXCIgfSwgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIuiBjOWKoVwiKV0pLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmluZm8ucG9zdCkpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50X2Rpdl9pdGVtXCIgfSwgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIumUgOahiOeQhueUsVwiKV0pLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmluZm8uY2FuY2VsUmVhc29uKSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2X2l0ZW1cIiB9LCBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwi5aSH5rOoXCIpXSksXG4gICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uaW5mby5yZW1hcmspKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgICBfdm0uX20oMCksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtYXhfdGV4dFwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaW5mby5zaW1wbGVTaXR1YXRpb24pKV0pLFxuICAgIF0pLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWF4X2ZpbGVcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIumZhOS7tlwiKV0pLFxuICAgICAgICBfdm0uX2woX3ZtLmluZm8uZmlsZXMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGVcIixcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b0RldGFpbChpdGVtKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLmZpbGVOYW1lKSldXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIDJcbiAgICApLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudF9kaXZfaXRlbV90d29cIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIuaJv+WKnuS6ulwiKV0pLFxuICAgICAgX3ZtLmluZm8udGFrZXJTaWduXG4gICAgICAgID8gX2MoXCJpbWdcIiwgeyBzdGF0aWNDbGFzczogXCJpY29uXCIsIGF0dHJzOiB7IHNyYzogX3ZtLmluZm8udGFrZXJTaWduIH0gfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwi5Y2P5Yqe5Lq6XCIpXSksXG4gICAgICBfdm0uaW5mby5hc3Npc3RTaWduXG4gICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvblwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uaW5mby5hc3Npc3RTaWduIH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQgZGF0ZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5pbmZvLnRha2VyU2lnbkRhdGUpKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyX3RpdGxlXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmib/lip7kurrmhI/op4FcIildKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50X2RpdlwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudF9kaXZfaXRlbVwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCLnlLPor7fkuovpoblcIildKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmluZm8uYXBwbHlJdGVtKSArXG4gICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgIF92bS5pbmZvLnR5cGUgPT0gXCJhbmFcIlxuICAgICAgICAgICAgICAgICAgPyBcIuS6i+WFiCjlkKzor4Ep5ZGK55+l5Lmm5a6h5om5XCJcbiAgICAgICAgICAgICAgICAgIDogX3ZtLmluZm8udHlwZSA9PSBcImlkYVwiXG4gICAgICAgICAgICAgICAgICA/IFwi5bu25pyf5Yqe55CG5qGI5Lu25a6h5om5XCJcbiAgICAgICAgICAgICAgICAgIDogX3ZtLmluZm8udHlwZSA9PSBcImlkZmFcIlxuICAgICAgICAgICAgICAgICAgPyBcIuW7tuacn+WIhuacn+e8tOe6s+e9muasvuWuoeaJuVwiXG4gICAgICAgICAgICAgICAgICA6IF92bS5pbmZvLnR5cGUgPT0gXCJpaWFcIlxuICAgICAgICAgICAgICAgICAgPyBcIuWkhOe9muWGs+WumuS5puWuoeaJuVwiXG4gICAgICAgICAgICAgICAgICA6IF92bS5pbmZvLnR5cGUgPT0gXCJpbmJhXCJcbiAgICAgICAgICAgICAgICAgID8gXCLmoYjku7blpITnvZrlhrPlrprkuablrqHmiblcIlxuICAgICAgICAgICAgICAgICAgOiBfdm0uaW5mby50eXBlID09IFwiaW5zYVwiXG4gICAgICAgICAgICAgICAgICA/IFwi5qGI5Lu25aSE572a5Yaz5a6a5Lmm5a6h5om5XCJcbiAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgXCIgXCJcbiAgICAgICAgICApLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50X2Rpdl9pdGVtXCIgfSwgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIuahiOeUsVwiKV0pLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmluZm8ucmVhc29uKSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2X2l0ZW1cIiB9LCBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwi5qGI5Lu25p2l5rqQXCIpXSksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uaW5mby5zb3VyY2UpKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudF9kaXZfaXRlbVwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCLlkI3np7DmiJblp5PlkI1cIildKSxcbiAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5pbmZvLm5hbWUpKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudF9kaXZfaXRlbVwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCLnpL7kvJrkv6HnlKjku6PnoIEv6Lqr5Lu96K+B5Y+3XCIpXSksXG4gICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uaW5mby5pZE5vKSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2X2l0ZW1cIiB9LCBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwi6IGU57O755S16K+dXCIpXSksXG4gICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uaW5mby50ZWwpKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudF9kaXZfaXRlbVwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCLlnLDlnYDvvIjkvY/lnYDvvIlcIildKSxcbiAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5pbmZvLmFkZHIpKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudF9kaXZfaXRlbVwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCLms5Xlrprku6Pooajkuroo6LSf6LSj5Lq6KVwiKV0pLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmluZm8ubGVnYWxNYW4pKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudF9kaXZfaXRlbVwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCLogYzliqFcIildKSxcbiAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5pbmZvLnBvc3QpKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudF9kaXZfaXRlbVwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCLlpIfms6hcIildKSxcbiAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5pbmZvLnJlbWFyaykpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICAgIF92bS5fbSgwKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1heF90ZXh0XCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pbmZvLnNpbXBsZVNpdHVhdGlvbikpXSksXG4gICAgXSksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJtYXhfZmlsZVwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6ZmE5Lu2XCIpXSksXG4gICAgICAgIF92bS5fbChfdm0uaW5mby5maWxlcywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmlsZVwiLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvRGV0YWlsKGl0ZW0pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uZmlsZU5hbWUpKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSlcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgMlxuICAgICksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50X2Rpdl9pdGVtX3R3b1wiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwi5om/5Yqe5Lq6XCIpXSksXG4gICAgICBfdm0uaW5mby50YWtlclNpZ25cbiAgICAgICAgPyBfYyhcImltZ1wiLCB7IHN0YXRpY0NsYXNzOiBcImljb25cIiwgYXR0cnM6IHsgc3JjOiBfdm0uaW5mby50YWtlclNpZ24gfSB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCLljY/lip7kurpcIildKSxcbiAgICAgIF92bS5pbmZvLmFzc2lzdFNpZ25cbiAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uXCIsXG4gICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5pbmZvLmFzc2lzdFNpZ24gfSxcbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dCBkYXRlXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmluZm8udGFrZXJTaWduRGF0ZSkpLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJfdGl0bGVcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuahiOaDheeugOS7i+WPiuWFtuWkhOeQhuW7uuiurlwiKV0pLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50X2Rpdl9pdGVtXCIgfSwgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIuagh+mimFwiKV0pLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmluZm8uc291cmNlKSArIFwi6KGM5pS/5aSE572a5Yaz5a6a5Lmm5L+h5oGv5YWs5byA5a6h5om5XCIpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50X2Rpdl9pdGVtXCIgfSwgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIuWkh+azqFwiKV0pLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmluZm8ucmVtYXJrKSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSksXG4gICAgX3ZtLl9tKDApLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWF4X3RleHRcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmluZm8ubGlua01hbikpXSksXG4gICAgXSksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJtYXhfZmlsZVwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6ZmE5Lu2XCIpXSksXG4gICAgICAgIF92bS5fbChfdm0uaW5mby5maWxlcywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmlsZVwiLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvRGV0YWlsKGl0ZW0pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uZmlsZU5hbWUpKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSlcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgMlxuICAgICksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50X2Rpdl9pdGVtX3R3b1wiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwi6KW/5bGx5YiG5bGAXCIpXSksXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0IGRhdGVcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uaW5mby50YWtlclNpZ25EYXRlKSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlcl90aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5YiG5bGA5ouf56i/5Lq6XCIpXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudF9kaXZcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2X2l0ZW1cIiB9LCBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwi5qGI55SxXCIpXSksXG4gICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uaW5mby5yZWFzb24pKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudF9kaXZfaXRlbVwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCLmoYjku7bmnaXmupBcIildKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5pbmZvLnNvdXJjZSkpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50X2Rpdl9pdGVtXCIgfSwgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIuW9k+S6i+S6uuWQjeensC/lp5PlkI1cIildKSxcbiAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5pbmZvLm5hbWUpKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudF9kaXZfaXRlbVwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCLms5Xlrprku6PooajkurrvvIjotJ/otKPkurrvvIlcIildKSxcbiAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5pbmZvLmxlZ2FsTWFuKSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2X2l0ZW1cIiB9LCBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwi5bel5L2c5Y2V5L2NXCIpXSksXG4gICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uaW5mby53b3JrTmFtZSkpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50X2Rpdl9pdGVtXCIgfSwgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIuiBjOWKoeaIluiBjOS4mlwiKV0pLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmluZm8ucG9zdCkpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50X2Rpdl9pdGVtXCIgfSwgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIuWcsOWdgOaIluS9j+WdgFwiKV0pLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmluZm8uYWRkcikpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50X2Rpdl9pdGVtXCIgfSwgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIuazleWumuS7o+ihqOS6ulwiKV0pLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmluZm8uYWRkcikpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50X2Rpdl9pdGVtXCIgfSwgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIueri+ahiOaXtumXtFwiKV0pLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmluZm8uY2FzZURhdGUpKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudF9kaXZfaXRlbVwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCLmoYjku7bmib/lip7kurrlj4rmiafms5Xor4HnvJblj7dcIildKSxcbiAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5pbmZvLmxpbmtNYW4pKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudF9kaXZfaXRlbVwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCLooYzmlL/lpITnvZrlhrPlrprkuabmloflj7dcIildKSxcbiAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5pbmZvLnB1bmlzaE5vKSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2X2l0ZW1cIiB9LCBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwi566A6KaB5qGI5oOF5Y+K5p+l5aSE57uP6L+HXCIpXSksXG4gICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uaW5mby5zaW1wbGVTaXR1YXRpb24pKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudF9kaXZfaXRlbVwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCLlpITnkIbkvp3mja7lj4rnu5PmnpxcIildKSxcbiAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5pbmZvLnJlc3VsdCkpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50X2Rpdl9pdGVtXCIgfSwgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIuihjOaUv+WkjeiuruihjOaUv+ivieiuvOaDheWGtVwiKV0pLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmluZm8uYWRtaW5SZXN1bHQpKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudF9kaXZfaXRlbVwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCLlpITnvZrmiafooYzmg4XlhrXlj4rnvZrmsqHotKLniannmoTlpITnva7mg4XlhrVcIiksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmluZm8ucHVuaXNoU2l0dWF0aW9uKSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSksXG4gICAgX3ZtLl9tKDApLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWF4X3RleHRcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmluZm8uY2FuY2VsUmVhc29uKSldKSxcbiAgICBdKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcIm1heF9maWxlXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLpmYTku7ZcIildKSxcbiAgICAgICAgX3ZtLl9sKF92bS5pbmZvLmZpbGVzLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmaWxlXCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9EZXRhaWwoaXRlbSlcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS5maWxlTmFtZSkpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKVxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2X2l0ZW1fdHdvXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCLmib/lip7kurpcIildKSxcbiAgICAgIF92bS5pbmZvLnRha2VyU2lnblxuICAgICAgICA/IF9jKFwiaW1nXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvblwiLCBhdHRyczogeyBzcmM6IF92bS5pbmZvLnRha2VyU2lnbiB9IH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIuWNj+WKnuS6ulwiKV0pLFxuICAgICAgX3ZtLmluZm8uYXNzaXN0U2lnblxuICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25cIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmluZm8uYXNzaXN0U2lnbiB9LFxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0IGRhdGVcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uaW5mby50YWtlclNpZ25EYXRlKSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlcl90aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5om/5Yqe5Lq65oSP6KeBXCIpXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudF9kaXZcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2X2l0ZW1cIiB9LCBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwi5qGI5Lu25p2l5rqQXCIpXSksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uaW5mby5zb3VyY2UpKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudF9kaXZfaXRlbVwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCLnq4vmoYjlj7dcIildKSxcbiAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5pbmZvLmNhc2VObykpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50X2Rpdl9pdGVtXCIgfSwgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIuahiOeUsVwiKV0pLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmluZm8ucmVhc29uKSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2X2l0ZW1cIiB9LCBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwi5ZCN56ew5oiW5aeT5ZCNXCIpXSksXG4gICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uaW5mby5uYW1lKSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2X2l0ZW1cIiB9LCBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwi6YKu5pS/57yW56CBXCIpXSksXG4gICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uaW5mby56aXBDb2RlKSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2X2l0ZW1cIiB9LCBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwi56S+5Lya5L+h55So5Luj56CBL+i6q+S7veivgeWPt1wiKV0pLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmluZm8uaWRObykpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50X2Rpdl9pdGVtXCIgfSwgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIuiBlOezu+eUteivnVwiKV0pLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmluZm8udGVsKSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2X2l0ZW1cIiB9LCBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwi5Zyw5Z2A77yI5L2P5Z2A77yJXCIpXSksXG4gICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uaW5mby5hZGRyKSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2X2l0ZW1cIiB9LCBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwi5rOV5a6a5Luj6KGo5Lq6XCIpXSksXG4gICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uaW5mby5sZWdhbE1hbikpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50X2Rpdl9pdGVtXCIgfSwgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIuiBjOWKoVwiKV0pLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmluZm8ucG9zdCkpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50X2Rpdl9pdGVtXCIgfSwgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIuWkh+azqFwiKV0pLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmluZm8ucmVtYXJrKSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSksXG4gICAgX3ZtLl9tKDApLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWF4X3RleHRcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmluZm8uc2ltcGxlU2l0dWF0aW9uKSldKSxcbiAgICBdKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcIm1heF9maWxlXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLpmYTku7ZcIildKSxcbiAgICAgICAgX3ZtLl9sKF92bS5pbmZvLmZpbGVzLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmaWxlXCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9EZXRhaWwoaXRlbSlcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS5maWxlTmFtZSkpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKVxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2X2l0ZW1fdHdvXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCLmib/lip7kurpcIildKSxcbiAgICAgIF92bS5pbmZvLnRha2VyU2lnblxuICAgICAgICA/IF9jKFwiaW1nXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvblwiLCBhdHRyczogeyBzcmM6IF92bS5pbmZvLnRha2VyU2lnbiB9IH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIuWNj+WKnuS6ulwiKV0pLFxuICAgICAgX3ZtLmluZm8uYXNzaXN0U2lnblxuICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25cIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmluZm8uYXNzaXN0U2lnbiB9LFxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0IGRhdGVcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uaW5mby50YWtlclNpZ25EYXRlKSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlcl90aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5qGI5oOF566A5LuL5Y+K56uL5qGI55CG55SxXCIpXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcInZhbi1uYXYtYmFyXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgdGl0bGU6IF92bS5uYXZUaXRsZSwgXCJsZWZ0LWFycm93XCI6IFwiXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImNsaWNrLWxlZnRcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF92bS5sb2FkaW5nXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInZhbi1sb2FkaW5nXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXRvcFwiOiBcIjUwJVwiIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNpemU6IFwiMjRweFwiLCBjb2xvcjogXCIjMDA5NGZmXCIsIHZlcnRpY2FsOiBcIlwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIuWKoOi9veS4rS4uLlwiKV1cbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNoZWNrLWRldGFpbC13cmFwcGVyXCIsXG4gICAgICAgICAgc3R5bGU6XG4gICAgICAgICAgICBfdm0uaW5mby5zdGF0dXMgPT09IFwi5b6F5a6h5om5XCJcbiAgICAgICAgICAgICAgPyBcImhlaWdodDogY2FsYygxMDB2aCAtIDEzNXB4KVwiXG4gICAgICAgICAgICAgIDogXCJoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NXB4KTtcIixcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyX3RpdGxlXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLln7rmnKzkv6Hmga9cIildKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidHlwZVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5jYXNlTmFtZSkpXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uaW5mby50eXBlID09IFwicmFcIlxuICAgICAgICAgICAgPyBfYyhcInJlZ2lzdGVyLXJlcG9ydFwiLCB7IGF0dHJzOiB7IGluZm86IF92bS5pbmZvIH0gfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLmluZm8udHlwZSA9PSBcImNhXCJcbiAgICAgICAgICAgID8gX2MoXCJjYW5jZWwtcmVwb3J0XCIsIHsgYXR0cnM6IHsgaW5mbzogX3ZtLmluZm8gfSB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uaW5mby50eXBlID09IFwiYW5hXCIgfHxcbiAgICAgICAgICBfdm0uaW5mby50eXBlID09IFwiaWRhXCIgfHxcbiAgICAgICAgICBfdm0uaW5mby50eXBlID09IFwiaWRmYVwiIHx8XG4gICAgICAgICAgX3ZtLmluZm8udHlwZSA9PSBcImlpYVwiIHx8XG4gICAgICAgICAgX3ZtLmluZm8udHlwZSA9PSBcImluYmFcIiB8fFxuICAgICAgICAgIF92bS5pbmZvLnR5cGUgPT0gXCJpbnNhXCJcbiAgICAgICAgICAgID8gX2MoXCJpbnNpZGUtZGVhbC1yZXBvcnRcIiwgeyBhdHRyczogeyBpbmZvOiBfdm0uaW5mbyB9IH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5pbmZvLnR5cGUgPT0gXCJjZWFcIlxuICAgICAgICAgICAgPyBfYyhcInBlbmFsdHktcmVwb3J0XCIsIHsgYXR0cnM6IHsgaW5mbzogX3ZtLmluZm8gfSB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uaW5mby50eXBlID09IFwiY3BhXCIgfHwgX3ZtLmluZm8udHlwZSA9PSBcImNjYVwiXG4gICAgICAgICAgICA/IF9jKFwiYnJlYWstbGF3LXJlcG9ydFwiLCB7IGF0dHJzOiB7IGluZm86IF92bS5pbmZvIH0gfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLmluZm8udHlwZSA9PSBcInBwYVwiXG4gICAgICAgICAgICA/IF9jKFwicGVuYWx0eS1kZWFsLXJlcG9ydFwiLCB7IGF0dHJzOiB7IGluZm86IF92bS5pbmZvIH0gfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl9sKF92bS5pbmZvLnZhbHVlcywgZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS5zaWduRGF0ZSB8fCBpdGVtLmN1cnJlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLnNpZ25EYXRlIHx8IGl0ZW0uY3VycmVudFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNlbnRlcl90aXRsZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW19jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLmF0dHJOYW1lKSldKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmluZm8uc3RhdHVzID09PSBcIuW+heWuoeaJuVwiICYmIGl0ZW0uY3VycmVudFxuICAgICAgICAgICAgICAgICAgICAgID8gXCJtYXhfdGV4dF90d29cIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJtb3JlX2RpdlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLmluZm8uc3RhdHVzID09PSBcIuW+heWuoeaJuVwiICYmIGl0ZW0uY3VycmVudFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YW4tcmFkaW8tZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXJlY3Rpb246IFwiaG9yaXpvbnRhbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZU9waW5pb24oaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS5vcGluaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGl0ZW0sIFwib3BpbmlvblwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5vcGluaW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFuLXJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbmFtZTogMSwgXCJpY29uLXNpemVcIjogXCIxNnB4XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm5leHROdW0gPT0gMCA/IFwi5ZCM5oSPXCIgOiBcIuaLn+WQjOaEj1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbi1yYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IDAsIFwiaWNvbi1zaXplXCI6IFwiMTZweFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuS4jeWQjOaEj1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0uY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLmNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3dzOiBcIjZcIiwgcGxhY2Vob2xkZXI6IFwi6K+36L6T5YWl5oSP6KeBXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogaXRlbS5jb250ZW50IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGl0ZW0sIFwiY29udGVudFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKF92bS5pbmZvLnR5cGUgPT0gXCJpbmJhXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaW5mby50eXBldHlwZSA9PSBcImluc2FcIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pbmZvLnR5cGV0eXBlID09IFwiaWlhXCIpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uYXR0ck5hbWUuaW5kZXhPZihcIuW4guWxgOazleinhOWkhFwiKSA+IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0ucmVtYXJrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLnJlbWFya1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0V1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIuivt+i+k+WFpeaWh+S5puWuoeaguOaEj+ingVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogaXRlbS5yZW1hcmsgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVtYXJrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImp1c3RpZnktY29udGVudFwiOiBcImZsZXgtZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luLXRvcFwiOiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNob3dFbmRUaW1lKGksIGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmVuZFRpbWUpICsgXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidmFuLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJhcnJvdy1kb3duXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICEoX3ZtLmluZm8uc3RhdHVzID09PSBcIuW+heWuoeaJuVwiICYmIGl0ZW0uY3VycmVudCkgJiZcbiAgICAgICAgICAgICAgICAgIGl0ZW0uc2lnbkRhdGVcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1heF90ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5jb250ZW50KSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKF92bS5pbmZvLnR5cGUgPT0gXCJpbmJhXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaW5mby50eXBldHlwZSA9PSBcImluc2FcIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pbmZvLnR5cGV0eXBlID09IFwiaWlhXCIpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uYXR0ck5hbWUuaW5kZXhPZihcIuW4guWxgOazleinhOWkhFwiKSA+IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5yZW1hcmspKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50X2Rpdl9pdGVtX3R3b1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pbmZvLnR5cGUgIT0gXCJwcGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5zaWduXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpdGVtLmFwcHJvdmFsVXNlcm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zaWduVXJsICYmIF92bS5pbmZvLnR5cGUgIT0gXCJwcGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogaXRlbS5zaWduVXJsIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQgZGF0ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0uc2lnbkRhdGUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5uZXh0RGVwdCxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibmV4dERlcHRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjZW50ZXJfdGl0bGVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLkuIvkuIDmraXpqqRcIildKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5pbmZvLnN0YXR1cyA9PT0gXCLlvoXlrqHmiblcIiAmJiBfdm0ubmV4dERlcHQgJiYgX3ZtLmluZm8udHlwZSAhPSBcInBwYVwiXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250ZW50X2RpdlwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2YW4tZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiaXMtbGlua1wiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicGlja2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi5Yqe55CG5Lq6XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJpbnB1dC1hbGlnblwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi54K55Ye76YCJ5oup5LiL5LiA5q2l6aqk5Yqe55CG5Lq6XCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zaG93UGlja2VyVXNlciA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubmV4dE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5uZXh0TmFtZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJuZXh0TmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2YW4tcG9wdXBcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBvc2l0aW9uOiBcImJvdHRvbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvd1BpY2tlclVzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd1BpY2tlclVzZXIgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dQaWNrZXJVc2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidmFuLXBpY2tlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3ctdG9vbGJhclwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBfdm0uY29sdW1uc1BlcnNvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZS1rZXlcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybTogX3ZtLm9uQ29uZmlybVVzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zaG93UGlja2VyVXNlciA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICBfdm0uaW5mby5zdGF0dXMgIT09IFwi5b6F5a6h5om5XCIgJiYgX3ZtLmN1cnJlbnRJbmRleCAhPSA5OTksXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImluZm8uc3RhdHVzICE9PSAn5b6F5a6h5om5JyAmJiBjdXJyZW50SW5kZXghPTk5OVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2X2l0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCLlip7nkIbkurpcIildKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLm5leHROYW1lKSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgICksXG4gICAgICBfdm0uaW5mby5zdGF0dXMgPT09IFwi5b6F5a6h5om5XCJcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNoZWNrLWRldGFpbC1ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInllc1wiLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCLnoa7lrprmj5DkuqRcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2YW4tcG9wdXBcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBcIjkwJVwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZGlhbG9nLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmRpYWxvZyA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGlhbG9nXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicG9wdXBXcmFwcGVyXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCLor7fovpPlhaXnrb7lkI3lr4bnoIFcIildKSxcbiAgICAgICAgICAgICAgX2MoXCJ2YW4tZmllbGRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwicGFzc3dvcmRcIiwgcGxhY2Vob2xkZXI6IFwi6K+36L6T5YWl562+5ZCN5a+G56CBXCIgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jb250ZW50LFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbnRlbnQgPSAkJHZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBvcHVwRm9vdGVyXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2YW4tYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImRlZmF1bHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2VNb2RhbCB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5Y+W5raIXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInZhbi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0eXBlOiBcImluZm9cIiB9LCBvbjogeyBjbGljazogX3ZtLnN1cmUgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi56Gu5a6aXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcInZhbi1wb3B1cFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgcG9zaXRpb246IFwiYm90dG9tXCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5lbmRQb3AsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICBfdm0uZW5kUG9wID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlbmRQb3BcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ2YW4tZGF0ZXRpbWUtcGlja2VyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICB0aXRsZTogXCLpgInmi6nlubTmnIhcIixcbiAgICAgICAgICAgICAgXCJtaW4tZGF0ZVwiOiBfdm0ubWluRW5kRGF0ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjb25maXJtOiBfdm0ub25Db25maXJtRW5kVGltZSxcbiAgICAgICAgICAgICAgY2FuY2VsOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmVuZFBvcCA9IGZhbHNlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5jdXJyZW50RGF0ZSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uY3VycmVudERhdGUgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjdXJyZW50RGF0ZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIid1c2Ugc3RyaWN0JztcbnZhciAkZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5mb3JFYWNoO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2ZvckVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbm1vZHVsZS5leHBvcnRzID0gIVNUUklDVF9NRVRIT0QgPyBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZvcmVhY2ggLS0gc2FmZVxufSA6IFtdLmZvckVhY2g7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xudmFyIHN0aWNreUhlbHBlcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLXN0aWNreS1oZWxwZXJzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIFVOU1VQUE9SVEVEX1kgPSBzdGlja3lIZWxwZXJzLlVOU1VQUE9SVEVEX1k7XG52YXIgTUFYX1VJTlQzMiA9IDB4RkZGRkZGRkY7XG52YXIgbWluID0gTWF0aC5taW47XG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXG4vLyBDaHJvbWUgNTEgaGFzIGEgYnVnZ3kgXCJzcGxpdFwiIGltcGxlbWVudGF0aW9uIHdoZW4gUmVnRXhwI2V4ZWMgIT09IG5hdGl2ZUV4ZWNcbi8vIFdlZXggSlMgaGFzIGZyb3plbiBidWlsdC1pbiBwcm90b3R5cGVzLCBzbyB1c2UgdHJ5IC8gY2F0Y2ggd3JhcHBlclxudmFyIFNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWdleHAvbm8tZW1wdHktZ3JvdXAgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgdmFyIHJlID0gLyg/OikvO1xuICB2YXIgb3JpZ2luYWxFeGVjID0gcmUuZXhlYztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9yaWdpbmFsRXhlYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICB2YXIgcmVzdWx0ID0gJ2FiJy5zcGxpdChyZSk7XG4gIHJldHVybiByZXN1bHQubGVuZ3RoICE9PSAyIHx8IHJlc3VsdFswXSAhPT0gJ2EnIHx8IHJlc3VsdFsxXSAhPT0gJ2InO1xufSk7XG5cbnZhciBCVUdHWSA9ICdhYmJjJy5zcGxpdCgvKGIpKi8pWzFdID09PSAnYycgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlZ2V4cC9uby1lbXB0eS1ncm91cCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICAndGVzdCcuc3BsaXQoLyg/OikvLCAtMSkubGVuZ3RoICE9PSA0IHx8XG4gICdhYicuc3BsaXQoLyg/OmFiKSovKS5sZW5ndGggIT09IDIgfHxcbiAgJy4nLnNwbGl0KC8oLj8pKC4/KS8pLmxlbmd0aCAhPT0gNCB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVnZXhwL25vLWVtcHR5LWNhcHR1cmluZy1ncm91cCwgcmVnZXhwL25vLWVtcHR5LWdyb3VwIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gICcuJy5zcGxpdCgvKCkoKS8pLmxlbmd0aCA+IDEgfHxcbiAgJycuc3BsaXQoLy4/LykubGVuZ3RoO1xuXG4vLyBAQHNwbGl0IGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc3BsaXQnLCBmdW5jdGlvbiAoU1BMSVQsIG5hdGl2ZVNwbGl0LCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgdmFyIGludGVybmFsU3BsaXQgPSAnMCcuc3BsaXQodW5kZWZpbmVkLCAwKS5sZW5ndGggPyBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgIHJldHVybiBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCA/IFtdIDogY2FsbChuYXRpdmVTcGxpdCwgdGhpcywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gIH0gOiBuYXRpdmVTcGxpdDtcblxuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNwbGl0YCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc3BsaXRcbiAgICBmdW5jdGlvbiBzcGxpdChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgc3BsaXR0ZXIgPSBpc051bGxPclVuZGVmaW5lZChzZXBhcmF0b3IpID8gdW5kZWZpbmVkIDogZ2V0TWV0aG9kKHNlcGFyYXRvciwgU1BMSVQpO1xuICAgICAgcmV0dXJuIHNwbGl0dGVyXG4gICAgICAgID8gY2FsbChzcGxpdHRlciwgc2VwYXJhdG9yLCBPLCBsaW1pdClcbiAgICAgICAgOiBjYWxsKGludGVybmFsU3BsaXQsIHRvU3RyaW5nKE8pLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzcGxpdFxuICAgIC8vXG4gICAgLy8gTk9URTogVGhpcyBjYW5ub3QgYmUgcHJvcGVybHkgcG9seWZpbGxlZCBpbiBlbmdpbmVzIHRoYXQgZG9uJ3Qgc3VwcG9ydFxuICAgIC8vIHRoZSAneScgZmxhZy5cbiAgICBmdW5jdGlvbiAoc3RyaW5nLCBsaW1pdCkge1xuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QodGhpcyk7XG4gICAgICB2YXIgUyA9IHRvU3RyaW5nKHN0cmluZyk7XG5cbiAgICAgIGlmICghQlVHR1kpIHtcbiAgICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShpbnRlcm5hbFNwbGl0LCByeCwgUywgbGltaXQsIGludGVybmFsU3BsaXQgIT09IG5hdGl2ZVNwbGl0KTtcbiAgICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3RvcihyeCwgUmVnRXhwKTtcbiAgICAgIHZhciB1bmljb2RlTWF0Y2hpbmcgPSByeC51bmljb2RlO1xuICAgICAgdmFyIGZsYWdzID0gKHJ4Lmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHJ4Lm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAocngudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoVU5TVVBQT1JURURfWSA/ICdnJyA6ICd5Jyk7XG4gICAgICAvLyBeKD8gKyByeCArICkgaXMgbmVlZGVkLCBpbiBjb21iaW5hdGlvbiB3aXRoIHNvbWUgUyBzbGljaW5nLCB0b1xuICAgICAgLy8gc2ltdWxhdGUgdGhlICd5JyBmbGFnLlxuICAgICAgdmFyIHNwbGl0dGVyID0gbmV3IEMoVU5TVVBQT1JURURfWSA/ICdeKD86JyArIHJ4LnNvdXJjZSArICcpJyA6IHJ4LCBmbGFncyk7XG4gICAgICB2YXIgbGltID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IE1BWF9VSU5UMzIgOiBsaW1pdCA+Pj4gMDtcbiAgICAgIGlmIChsaW0gPT09IDApIHJldHVybiBbXTtcbiAgICAgIGlmIChTLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlZ0V4cEV4ZWMoc3BsaXR0ZXIsIFMpID09PSBudWxsID8gW1NdIDogW107XG4gICAgICB2YXIgcCA9IDA7XG4gICAgICB2YXIgcSA9IDA7XG4gICAgICB2YXIgQSA9IFtdO1xuICAgICAgd2hpbGUgKHEgPCBTLmxlbmd0aCkge1xuICAgICAgICBzcGxpdHRlci5sYXN0SW5kZXggPSBVTlNVUFBPUlRFRF9ZID8gMCA6IHE7XG4gICAgICAgIHZhciB6ID0gcmVnRXhwRXhlYyhzcGxpdHRlciwgVU5TVVBQT1JURURfWSA/IHN0cmluZ1NsaWNlKFMsIHEpIDogUyk7XG4gICAgICAgIHZhciBlO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgeiA9PT0gbnVsbCB8fFxuICAgICAgICAgIChlID0gbWluKHRvTGVuZ3RoKHNwbGl0dGVyLmxhc3RJbmRleCArIChVTlNVUFBPUlRFRF9ZID8gcSA6IDApKSwgUy5sZW5ndGgpKSA9PT0gcFxuICAgICAgICApIHtcbiAgICAgICAgICBxID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHEsIHVuaWNvZGVNYXRjaGluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHVzaChBLCBzdHJpbmdTbGljZShTLCBwLCBxKSk7XG4gICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IHoubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBwdXNoKEEsIHpbaV0pO1xuICAgICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xuICAgICAgICAgIH1cbiAgICAgICAgICBxID0gcCA9IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHB1c2goQSwgc3RyaW5nU2xpY2UoUywgcCkpO1xuICAgICAgcmV0dXJuIEE7XG4gICAgfVxuICBdO1xufSwgQlVHR1kgfHwgIVNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQywgVU5TVVBQT1JURURfWSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XG52YXIgRE9NVG9rZW5MaXN0UHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS10b2tlbi1saXN0LXByb3RvdHlwZScpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbnZhciBoYW5kbGVQcm90b3R5cGUgPSBmdW5jdGlvbiAoQ29sbGVjdGlvblByb3RvdHlwZSkge1xuICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUgJiYgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoICE9PSBmb3JFYWNoKSB0cnkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCAnZm9yRWFjaCcsIGZvckVhY2gpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCA9IGZvckVhY2g7XG4gIH1cbn07XG5cbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcbiAgaWYgKERPTUl0ZXJhYmxlc1tDT0xMRUNUSU9OX05BTUVdKSB7XG4gICAgaGFuZGxlUHJvdG90eXBlKGdsb2JhbFRoaXNbQ09MTEVDVElPTl9OQU1FXSAmJiBnbG9iYWxUaGlzW0NPTExFQ1RJT05fTkFNRV0ucHJvdG90eXBlKTtcbiAgfVxufVxuXG5oYW5kbGVQcm90b3R5cGUoRE9NVG9rZW5MaXN0UHJvdG90eXBlKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2VudGVyX3RpdGxlW2RhdGEtdi0wMmVjOTMxYV0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogMCAyMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbn1cXG4uY2VudGVyX3RpdGxlIC50eXBlW2RhdGEtdi0wMmVjOTMxYV0ge1xcbiAgY29sb3I6ICM0M2NmN2M7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5jb250ZW50X2RpdltkYXRhLXYtMDJlYzkzMWFdIHtcXG4gIG1hcmdpbjogNXB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5jb250ZW50X2RpdiAuY29udGVudF9kaXZfaXRlbVtkYXRhLXYtMDJlYzkzMWFdIHtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmNvbnRlbnRfZGl2IC5jb250ZW50X2Rpdl9pdGVtIC50ZXh0W2RhdGEtdi0wMmVjOTMxYV0ge1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIG1pbi13aWR0aDogODVweDtcXG59XFxuLmNvbnRlbnRfZGl2IC5jb250ZW50X2Rpdl9pdGVtIC52YWx1ZVtkYXRhLXYtMDJlYzkzMWFdIHtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLmNvbnRlbnRfZGl2W2RhdGEtdi0wMmVjOTMxYV0gIC52YW4tY2VsbCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4ubWF4X3RleHRbZGF0YS12LTAyZWM5MzFhXSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjVmNmY4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG1hcmdpbjogNXB4IDEwcHggMCAxMHB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG4ubWF4X2ZpbGVbZGF0YS12LTAyZWM5MzFhXSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjVmNmY4O1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxuICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG59XFxuLm1heF9maWxlIC5maWxlW2RhdGEtdi0wMmVjOTMxYV0ge1xcbiAgY29sb3I6ICMxNmJjZmY7XFxufVxcbi5jb250ZW50X2Rpdl9pdGVtX3R3b1tkYXRhLXYtMDJlYzkzMWFdIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgbWFyZ2luOiAwIDEwcHggNXB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIC8qanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyovXFxufVxcbi5jb250ZW50X2Rpdl9pdGVtX3R3byAudGV4dFtkYXRhLXYtMDJlYzkzMWFdIHtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICAvKm1pbi13aWR0aDogODVweDsqL1xcbiAgLyp3aWR0aDogNjBweDsqL1xcbn1cXG4uY29udGVudF9kaXZfaXRlbV90d28gPiBpbWdbZGF0YS12LTAyZWM5MzFhXSB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBtYXJnaW46IDBweCAxMHB4O1xcbn1cXG4uY29udGVudF9kaXZfaXRlbV90d28gLmRhdGVbZGF0YS12LTAyZWM5MzFhXSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuLmNvbnRlbnRfZGl2X2l0ZW1fdHdvIC52YWx1ZVtkYXRhLXYtMDJlYzkzMWFdIHtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2VudGVyX3RpdGxlW2RhdGEtdi02OTljMjEwYV0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogMCAyMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbn1cXG4uY2VudGVyX3RpdGxlIC50eXBlW2RhdGEtdi02OTljMjEwYV0ge1xcbiAgY29sb3I6ICM0M2NmN2M7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5jb250ZW50X2RpdltkYXRhLXYtNjk5YzIxMGFdIHtcXG4gIG1hcmdpbjogNXB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5jb250ZW50X2RpdiAuY29udGVudF9kaXZfaXRlbVtkYXRhLXYtNjk5YzIxMGFdIHtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmNvbnRlbnRfZGl2IC5jb250ZW50X2Rpdl9pdGVtIC50ZXh0W2RhdGEtdi02OTljMjEwYV0ge1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIG1pbi13aWR0aDogODVweDtcXG59XFxuLmNvbnRlbnRfZGl2IC5jb250ZW50X2Rpdl9pdGVtIC52YWx1ZVtkYXRhLXYtNjk5YzIxMGFdIHtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLmNvbnRlbnRfZGl2W2RhdGEtdi02OTljMjEwYV0gIC52YW4tY2VsbCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4ubWF4X3RleHRbZGF0YS12LTY5OWMyMTBhXSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjVmNmY4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG1hcmdpbjogNXB4IDEwcHggMCAxMHB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG4ubWF4X2ZpbGVbZGF0YS12LTY5OWMyMTBhXSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjVmNmY4O1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxuICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG59XFxuLm1heF9maWxlIC5maWxlW2RhdGEtdi02OTljMjEwYV0ge1xcbiAgY29sb3I6ICMxNmJjZmY7XFxufVxcbi5jb250ZW50X2Rpdl9pdGVtX3R3b1tkYXRhLXYtNjk5YzIxMGFdIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgbWFyZ2luOiAwIDEwcHggNXB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIC8qanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyovXFxufVxcbi5jb250ZW50X2Rpdl9pdGVtX3R3byAudGV4dFtkYXRhLXYtNjk5YzIxMGFdIHtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICAvKm1pbi13aWR0aDogODVweDsqL1xcbiAgLyp3aWR0aDogNjBweDsqL1xcbn1cXG4uY29udGVudF9kaXZfaXRlbV90d28gPiBpbWdbZGF0YS12LTY5OWMyMTBhXSB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBtYXJnaW46IDBweCAxMHB4O1xcbn1cXG4uY29udGVudF9kaXZfaXRlbV90d28gLmRhdGVbZGF0YS12LTY5OWMyMTBhXSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuLmNvbnRlbnRfZGl2X2l0ZW1fdHdvIC52YWx1ZVtkYXRhLXYtNjk5YzIxMGFdIHtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2VudGVyX3RpdGxlW2RhdGEtdi00NWViMmNkMF0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogMCAyMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbn1cXG4uY2VudGVyX3RpdGxlIC50eXBlW2RhdGEtdi00NWViMmNkMF0ge1xcbiAgY29sb3I6ICM0M2NmN2M7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5jb250ZW50X2RpdltkYXRhLXYtNDVlYjJjZDBdIHtcXG4gIG1hcmdpbjogNXB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5jb250ZW50X2RpdiAuY29udGVudF9kaXZfaXRlbVtkYXRhLXYtNDVlYjJjZDBdIHtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmNvbnRlbnRfZGl2IC5jb250ZW50X2Rpdl9pdGVtIC50ZXh0W2RhdGEtdi00NWViMmNkMF0ge1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIG1pbi13aWR0aDogODVweDtcXG59XFxuLmNvbnRlbnRfZGl2IC5jb250ZW50X2Rpdl9pdGVtIC52YWx1ZVtkYXRhLXYtNDVlYjJjZDBdIHtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLmNvbnRlbnRfZGl2W2RhdGEtdi00NWViMmNkMF0gIC52YW4tY2VsbCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4ubWF4X3RleHRbZGF0YS12LTQ1ZWIyY2QwXSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjVmNmY4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG1hcmdpbjogNXB4IDEwcHggMCAxMHB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG4ubWF4X2ZpbGVbZGF0YS12LTQ1ZWIyY2QwXSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjVmNmY4O1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxuICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG59XFxuLm1heF9maWxlIC5maWxlW2RhdGEtdi00NWViMmNkMF0ge1xcbiAgY29sb3I6ICMxNmJjZmY7XFxufVxcbi5jb250ZW50X2Rpdl9pdGVtX3R3b1tkYXRhLXYtNDVlYjJjZDBdIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgbWFyZ2luOiAwIDEwcHggNXB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIC8qanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyovXFxufVxcbi5jb250ZW50X2Rpdl9pdGVtX3R3byAudGV4dFtkYXRhLXYtNDVlYjJjZDBdIHtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICAvKm1pbi13aWR0aDogODVweDsqL1xcbiAgLyp3aWR0aDogNjBweDsqL1xcbn1cXG4uY29udGVudF9kaXZfaXRlbV90d28gPiBpbWdbZGF0YS12LTQ1ZWIyY2QwXSB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBtYXJnaW46IDBweCAxMHB4O1xcbn1cXG4uY29udGVudF9kaXZfaXRlbV90d28gLmRhdGVbZGF0YS12LTQ1ZWIyY2QwXSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuLmNvbnRlbnRfZGl2X2l0ZW1fdHdvIC52YWx1ZVtkYXRhLXYtNDVlYjJjZDBdIHtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2VudGVyX3RpdGxlW2RhdGEtdi01MzY1MjRjNl0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogMCAyMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbn1cXG4uY2VudGVyX3RpdGxlIC50eXBlW2RhdGEtdi01MzY1MjRjNl0ge1xcbiAgY29sb3I6ICM0M2NmN2M7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5jb250ZW50X2RpdltkYXRhLXYtNTM2NTI0YzZdIHtcXG4gIG1hcmdpbjogNXB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5jb250ZW50X2RpdiAuY29udGVudF9kaXZfaXRlbVtkYXRhLXYtNTM2NTI0YzZdIHtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmNvbnRlbnRfZGl2IC5jb250ZW50X2Rpdl9pdGVtIC50ZXh0W2RhdGEtdi01MzY1MjRjNl0ge1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIG1pbi13aWR0aDogODVweDtcXG59XFxuLmNvbnRlbnRfZGl2IC5jb250ZW50X2Rpdl9pdGVtIC52YWx1ZVtkYXRhLXYtNTM2NTI0YzZdIHtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLmNvbnRlbnRfZGl2W2RhdGEtdi01MzY1MjRjNl0gIC52YW4tY2VsbCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4ubWF4X3RleHRbZGF0YS12LTUzNjUyNGM2XSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjVmNmY4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG1hcmdpbjogNXB4IDEwcHggMCAxMHB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG4ubWF4X2ZpbGVbZGF0YS12LTUzNjUyNGM2XSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjVmNmY4O1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxuICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG59XFxuLm1heF9maWxlIC5maWxlW2RhdGEtdi01MzY1MjRjNl0ge1xcbiAgY29sb3I6ICMxNmJjZmY7XFxufVxcbi5jb250ZW50X2Rpdl9pdGVtX3R3b1tkYXRhLXYtNTM2NTI0YzZdIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgbWFyZ2luOiAwIDEwcHggNXB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIC8qanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyovXFxufVxcbi5jb250ZW50X2Rpdl9pdGVtX3R3byAudGV4dFtkYXRhLXYtNTM2NTI0YzZdIHtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICAvKm1pbi13aWR0aDogODVweDsqL1xcbiAgLyp3aWR0aDogNjBweDsqL1xcbn1cXG4uY29udGVudF9kaXZfaXRlbV90d28gPiBpbWdbZGF0YS12LTUzNjUyNGM2XSB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBtYXJnaW46IDBweCAxMHB4O1xcbn1cXG4uY29udGVudF9kaXZfaXRlbV90d28gLmRhdGVbZGF0YS12LTUzNjUyNGM2XSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuLmNvbnRlbnRfZGl2X2l0ZW1fdHdvIC52YWx1ZVtkYXRhLXYtNTM2NTI0YzZdIHtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2VudGVyX3RpdGxlW2RhdGEtdi02MDI4MTY5MV0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogMCAyMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbn1cXG4uY2VudGVyX3RpdGxlIC50eXBlW2RhdGEtdi02MDI4MTY5MV0ge1xcbiAgY29sb3I6ICM0M2NmN2M7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5jb250ZW50X2RpdltkYXRhLXYtNjAyODE2OTFdIHtcXG4gIG1hcmdpbjogNXB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5jb250ZW50X2RpdiAuY29udGVudF9kaXZfaXRlbVtkYXRhLXYtNjAyODE2OTFdIHtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmNvbnRlbnRfZGl2IC5jb250ZW50X2Rpdl9pdGVtIC50ZXh0W2RhdGEtdi02MDI4MTY5MV0ge1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIG1pbi13aWR0aDogODVweDtcXG59XFxuLmNvbnRlbnRfZGl2IC5jb250ZW50X2Rpdl9pdGVtIC52YWx1ZVtkYXRhLXYtNjAyODE2OTFdIHtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLmNvbnRlbnRfZGl2W2RhdGEtdi02MDI4MTY5MV0gIC52YW4tY2VsbCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4ubWF4X3RleHRbZGF0YS12LTYwMjgxNjkxXSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjVmNmY4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG1hcmdpbjogNXB4IDEwcHggMCAxMHB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG4ubWF4X2ZpbGVbZGF0YS12LTYwMjgxNjkxXSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjVmNmY4O1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxuICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG59XFxuLm1heF9maWxlIC5maWxlW2RhdGEtdi02MDI4MTY5MV0ge1xcbiAgY29sb3I6ICMxNmJjZmY7XFxufVxcbi5jb250ZW50X2Rpdl9pdGVtX3R3b1tkYXRhLXYtNjAyODE2OTFdIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgbWFyZ2luOiAwIDEwcHggNXB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIC8qanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyovXFxufVxcbi5jb250ZW50X2Rpdl9pdGVtX3R3byAudGV4dFtkYXRhLXYtNjAyODE2OTFdIHtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICAvKm1pbi13aWR0aDogODVweDsqL1xcbiAgLyp3aWR0aDogNjBweDsqL1xcbn1cXG4uY29udGVudF9kaXZfaXRlbV90d28gPiBpbWdbZGF0YS12LTYwMjgxNjkxXSB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBtYXJnaW46IDBweCAxMHB4O1xcbn1cXG4uY29udGVudF9kaXZfaXRlbV90d28gLmRhdGVbZGF0YS12LTYwMjgxNjkxXSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuLmNvbnRlbnRfZGl2X2l0ZW1fdHdvIC52YWx1ZVtkYXRhLXYtNjAyODE2OTFdIHtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2VudGVyX3RpdGxlW2RhdGEtdi00YWJkMDhmM10ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogMCAyMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbn1cXG4uY2VudGVyX3RpdGxlIC50eXBlW2RhdGEtdi00YWJkMDhmM10ge1xcbiAgY29sb3I6ICM0M2NmN2M7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5jb250ZW50X2RpdltkYXRhLXYtNGFiZDA4ZjNdIHtcXG4gIG1hcmdpbjogNXB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5jb250ZW50X2RpdiAuY29udGVudF9kaXZfaXRlbVtkYXRhLXYtNGFiZDA4ZjNdIHtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmNvbnRlbnRfZGl2IC5jb250ZW50X2Rpdl9pdGVtIC50ZXh0W2RhdGEtdi00YWJkMDhmM10ge1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIG1pbi13aWR0aDogODVweDtcXG59XFxuLmNvbnRlbnRfZGl2IC5jb250ZW50X2Rpdl9pdGVtIC52YWx1ZVtkYXRhLXYtNGFiZDA4ZjNdIHtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLmNvbnRlbnRfZGl2W2RhdGEtdi00YWJkMDhmM10gIC52YW4tY2VsbCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4ubWF4X3RleHRbZGF0YS12LTRhYmQwOGYzXSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjVmNmY4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG1hcmdpbjogNXB4IDEwcHggMCAxMHB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG4ubWF4X2ZpbGVbZGF0YS12LTRhYmQwOGYzXSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjVmNmY4O1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxuICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG59XFxuLm1heF9maWxlIC5maWxlW2RhdGEtdi00YWJkMDhmM10ge1xcbiAgY29sb3I6ICMxNmJjZmY7XFxufVxcbi5jb250ZW50X2Rpdl9pdGVtX3R3b1tkYXRhLXYtNGFiZDA4ZjNdIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgbWFyZ2luOiAwIDEwcHggNXB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIC8qanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyovXFxufVxcbi5jb250ZW50X2Rpdl9pdGVtX3R3byAudGV4dFtkYXRhLXYtNGFiZDA4ZjNdIHtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICAvKm1pbi13aWR0aDogODVweDsqL1xcbiAgLyp3aWR0aDogNjBweDsqL1xcbn1cXG4uY29udGVudF9kaXZfaXRlbV90d28gPiBpbWdbZGF0YS12LTRhYmQwOGYzXSB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBtYXJnaW46IDBweCAxMHB4O1xcbn1cXG4uY29udGVudF9kaXZfaXRlbV90d28gLmRhdGVbZGF0YS12LTRhYmQwOGYzXSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuLmNvbnRlbnRfZGl2X2l0ZW1fdHdvIC52YWx1ZVtkYXRhLXYtNGFiZDA4ZjNdIHtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2hlY2stZGV0YWlsLXdyYXBwZXJbZGF0YS12LTM0NjYwYjE2XSB7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjVGNztcXG59XFxuLmNoZWNrLWRldGFpbC13cmFwcGVyIC5jZW50ZXJfdGl0bGVbZGF0YS12LTM0NjYwYjE2XSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiAwIDIwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxufVxcbi5jaGVjay1kZXRhaWwtd3JhcHBlciAuY2VudGVyX3RpdGxlIC50eXBlW2RhdGEtdi0zNDY2MGIxNl0ge1xcbiAgY29sb3I6ICM0M2NmN2M7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5jaGVjay1kZXRhaWwtd3JhcHBlciAuY29udGVudF9kaXZbZGF0YS12LTM0NjYwYjE2XSB7XFxuICBtYXJnaW46IDVweCAxMHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uY2hlY2stZGV0YWlsLXdyYXBwZXIgLmNvbnRlbnRfZGl2IC5jb250ZW50X2Rpdl9pdGVtW2RhdGEtdi0zNDY2MGIxNl0ge1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4uY2hlY2stZGV0YWlsLXdyYXBwZXIgLmNvbnRlbnRfZGl2IC5jb250ZW50X2Rpdl9pdGVtIC50ZXh0W2RhdGEtdi0zNDY2MGIxNl0ge1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIG1pbi13aWR0aDogODVweDtcXG59XFxuLmNoZWNrLWRldGFpbC13cmFwcGVyIC5jb250ZW50X2RpdiAuY29udGVudF9kaXZfaXRlbSAudmFsdWVbZGF0YS12LTM0NjYwYjE2XSB7XFxuICBjb2xvcjogIzEyMTIzNjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5jaGVjay1kZXRhaWwtd3JhcHBlciAuY29udGVudF9kaXZbZGF0YS12LTM0NjYwYjE2XSAgLnZhbi1jZWxsIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5jaGVjay1kZXRhaWwtd3JhcHBlciAubWF4X3RleHRbZGF0YS12LTM0NjYwYjE2XSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjVmNmY4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG1hcmdpbjogNXB4IDEwcHggMCAxMHB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG4uY2hlY2stZGV0YWlsLXdyYXBwZXIgLm1heF9maWxlW2RhdGEtdi0zNDY2MGIxNl0ge1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y1ZjZmODtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxufVxcbi5jaGVjay1kZXRhaWwtd3JhcHBlciAubWF4X2ZpbGUgLmZpbGVbZGF0YS12LTM0NjYwYjE2XSB7XFxuICBjb2xvcjogIzE2YmNmZjtcXG59XFxuLmNoZWNrLWRldGFpbC13cmFwcGVyIC5jb250ZW50X2Rpdl9pdGVtX3R3b1tkYXRhLXYtMzQ2NjBiMTZdIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgbWFyZ2luOiAwIDEwcHggNXB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIC8qanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyovXFxufVxcbi5jaGVjay1kZXRhaWwtd3JhcHBlciAuY29udGVudF9kaXZfaXRlbV90d28gLnRleHRbZGF0YS12LTM0NjYwYjE2XSB7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgLyptaW4td2lkdGg6IDg1cHg7Ki9cXG4gIC8qd2lkdGg6IDYwcHg7Ki9cXG59XFxuLmNoZWNrLWRldGFpbC13cmFwcGVyIC5jb250ZW50X2Rpdl9pdGVtX3R3byA+IGltZ1tkYXRhLXYtMzQ2NjBiMTZdIHtcXG4gIGhlaWdodDogMjVweDtcXG4gIG1hcmdpbjogMHB4IDEwcHg7XFxufVxcbi5jaGVjay1kZXRhaWwtd3JhcHBlciAuY29udGVudF9kaXZfaXRlbV90d28gLmRhdGVbZGF0YS12LTM0NjYwYjE2XSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuLmNoZWNrLWRldGFpbC13cmFwcGVyIC5jb250ZW50X2Rpdl9pdGVtX3R3byAudmFsdWVbZGF0YS12LTM0NjYwYjE2XSB7XFxuICBjb2xvcjogIzEyMTIzNjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5jaGVjay1kZXRhaWwtd3JhcHBlciAubWF4X3RleHRfdHdvW2RhdGEtdi0zNDY2MGIxNl0ge1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y1ZjZmODtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBtYXJnaW46IDVweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLmNoZWNrLWRldGFpbC13cmFwcGVyIC5tYXhfdGV4dF90d28gLmlucHV0V1tkYXRhLXYtMzQ2NjBiMTZdIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmVkZjA7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XFxufVxcbi5jaGVjay1kZXRhaWwtd3JhcHBlciAubW9yZV9kaXZbZGF0YS12LTM0NjYwYjE2XSB7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcbi5jaGVjay1kZXRhaWwtYm90dG9tW2RhdGEtdi0zNDY2MGIxNl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjVGNztcXG4gIGhlaWdodDogODBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uY2hlY2stZGV0YWlsLWJvdHRvbSAueWVzW2RhdGEtdi0zNDY2MGIxNl0ge1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBiYWNrZ3JvdW5kOiAjNDQ3YmZjO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbnZhbi1wb3B1cFtkYXRhLXYtMzQ2NjBiMTZdIHtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuLnBvcHVwV3JhcHBlcltkYXRhLXYtMzQ2NjBiMTZdIHtcXG4gIHBhZGRpbmc6IDE2cHg7XFxufVxcbi5wb3B1cFdyYXBwZXIgcFtkYXRhLXYtMzQ2NjBiMTZdIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIC8qdGV4dC1hbGlnbjogY2VudGVyKi9cXG59XFxuLnBvcHVwV3JhcHBlciAuY29udGVudFtkYXRhLXYtMzQ2NjBiMTZdIHtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzg4OGQ5NTtcXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzNTBweCk7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG59XFxuLnBvcHVwV3JhcHBlciAucG9wdXBGb290ZXJbZGF0YS12LTM0NjYwYjE2XSB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2JyZWFrTGF3UmVwb3J0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTAyZWM5MzFhJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNDg0OGI4YTVcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9icmVha0xhd1JlcG9ydC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wMmVjOTMxYSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2JyZWFrTGF3UmVwb3J0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTAyZWM5MzFhJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhbmNlbFJlcG9ydC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02OTljMjEwYSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjc5M2RmZmY4XCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2FuY2VsUmVwb3J0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY5OWMyMTBhJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2FuY2VsUmVwb3J0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY5OWMyMTBhJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luc2lkZURlYWxSZXBvcnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDVlYjJjZDAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI2Zjc5N2Q5NlwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luc2lkZURlYWxSZXBvcnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDVlYjJjZDAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbnNpZGVEZWFsUmVwb3J0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ1ZWIyY2QwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BlbmFsdHlEZWFsUmVwb3J0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTUzNjUyNGM2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMmVjMzBjMmFcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wZW5hbHR5RGVhbFJlcG9ydC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01MzY1MjRjNiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BlbmFsdHlEZWFsUmVwb3J0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTUzNjUyNGM2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BlbmFsdHlSZXBvcnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjAyODE2OTEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI1MzMwYjRmMFwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BlbmFsdHlSZXBvcnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjAyODE2OTEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wZW5hbHR5UmVwb3J0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYwMjgxNjkxJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlZ2lzdGVyUmVwb3J0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRhYmQwOGYzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiZjhmNmYwNDJcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZWdpc3RlclJlcG9ydC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00YWJkMDhmMyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlZ2lzdGVyUmVwb3J0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRhYmQwOGYzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM0NjYwYjE2JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiYTQxODljZDBcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zNDY2MGIxNiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM0NjYwYjE2JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xyXG5cclxuLyoqXHJcbiAqIOahiOS7tuivpuaDhVxyXG4gKiAqL1xyXG5leHBvcnQgY29uc3QgcXVlcnlTZWxlY3RCeUlkID0oaWQpPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcGkvY2FzZS9zZWxlY3RCeUlkLycraWQsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gIH0pXHJcbn1cclxuLy8g6ZuG5L2T6K6o6K666K+m5oOFXHJcbmV4cG9ydCBjb25zdCBkaXNjdXNzU2VsZWN0QnlDYXNlSWQgPSAoaWQpID0+e1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcGkvZGlzY3Vzcy9zZWxlY3RCeUNhc2VJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgfSlcclxufTtcclxuLy8g6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBzdXBlcnZpc2VTZWxlY3RCeUNhc2VJZCA9IChpZCkgPT57XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9zdXBlcnZpc2Uvc2VsZWN0QnlDYXNlSWQvJytpZCxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgfSlcclxufTtcclxuLy8g5ZGK55+l6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBsZWdhbFNlbGVjdEJ5Q2FzZUlkID0gKGlkKSA9PntcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBpL2xlZ2FsL3NlbGVjdEJ5Q2FzZUlkLycraWQsXHJcbiAgICBtZXRob2Q6ICdwb3N0JyxcclxuICB9KVxyXG59O1xyXG4vLyDlkYrnn6Xor6bmg4VcclxuZXhwb3J0IGNvbnN0IHNlbGVjdEJ5Q2FzZUlkID0gKGlkKSA9PntcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBpL2luZm9ybS9zZWxlY3RCeUNhc2VJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgfSlcclxufTtcclxuLy8g6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBwdW5pc2hTZWxlY3RCeUNhc2VJZCA9IChpZCkgPT57XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9wdW5pc2gvc2VsZWN0QnlDYXNlSWQvJytpZCxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgfSlcclxufTtcclxuLy8g6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBnZXRIZWFyaW5nQnlDYXNlSWQgPSAoaWQpID0+e1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcGkvaGVhcmluZy9nZXRIZWFyaW5nQnlDYXNlSWQvJytpZCxcclxuICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gIH0pXHJcbn07XHJcbi8vIOivpuaDhVxyXG5leHBvcnQgY29uc3Qgc3RhZ2VTZWxlY3RCeUNhc2VJZCA9IChpZCkgPT57XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9zdGFnZS9zZWxlY3RCeUNhc2VJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgfSlcclxufTtcclxuXHJcbi8v5qC55o2udG9rZW7ojrflj5bkvIHkuJrkv6Hmga9cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJJbmZvID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL3VzZXIvZ2V0SW5mb1wiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+iOt+WPlueUqOaIt1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlckxpc3QgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvdXNlclwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+afpeeci+WuoeaJueWtkOmhueWIl+ihqFxyXG5leHBvcnQgY29uc3QgcXVlcnlUeXBlQ2FzZUxpc3QgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvYXBwcm92YWwvcXVlcnlBcHBMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v5paw5bu65a6h5om56KGoXHJcbmV4cG9ydCBjb25zdCBhZGRSZXBvcnQgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvYXBwcm92YWwvaW5zXCIsXHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+iOt+WPluWNleS4quWuoeaJueihqOS/oeaBr1xyXG5leHBvcnQgY29uc3QgZ2V0UmVwb3J0RGV0YWlsID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL2FwcHJvdmFsXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v562+5ZCN5a6h5om5XHJcbmV4cG9ydCBjb25zdCBzaWduUmVwb3J0ID0gKGRhdGEsdHlwZSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvYXBwcm92YWwvc2lnbj90eXBlPVwiK3R5cGUsXHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/nu5/orqFcclxuZXhwb3J0IGNvbnN0IGNvdW50SW5mbyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS9hcHByb3ZhbC9nZXRTdGF0XCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBnZXRBbGxSZXBvcnQgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvYXBwcm92YWwvZGV0YWlsXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v5qCh6aqM5a+G56CBXHJcbmV4cG9ydCBjb25zdCBjaGVja1B3ZCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS91c2VyL2NoZWNrUHdkXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v5pSv6ZifL+WIhuWxgOS4i+aLieahhlxyXG5leHBvcnQgY29uc3QgcXVlcnlEaXZpc2lvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS91c2VyL2RpdlwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiXHJcbiAgfSk7XHJcbn07XHJcbi8v546v5L+d552j5a+fLeiOt+WPluaJueasoeWIl+ihqFxyXG5leHBvcnQgY29uc3QgZ2V0U3VwZXJCYXRjaCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9iYXRjaExpc3RcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/njq/kv53nnaPlr58t6I635Y+W5om55qyh5YiX6KGoXHJcbmV4cG9ydCBjb25zdCBnZXRTdXBlckxpc3QgPSAoaW5mbyxkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9saXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgcGFyYW1zOiBpbmZvLFxyXG4gICAgZGF0YSA6IGRhdGFcclxuICB9KTtcclxufTtcclxuLy/njq/kv53nnaPlr58t6I635Y+W5om55qyh5YiX6KGoXHJcbmV4cG9ydCBjb25zdCBnZXRTdXBlckxpc3REZXRhaWwgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBib2FyZCgpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2JvYXJkXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3VudHlMaXN0KHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvYm9hcmQvZ2V0Q291bnR5XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IHBhcmFtcyxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluZm9MaXN0KHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5mby9saXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IHBhcmFtcyxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJhc2VJbmZvKHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5mby9nZXRCeUlkXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IHBhcmFtcyxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RyaWJ1dGUocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbmZvL2Rpc3RyaWJ1dGUvXCIgKyBwYXJhbXMsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGUocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbmZvL2hhbmRsZS9cIiArIHBhcmFtcyxcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmFsKHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5mby9maW5hbC9cIiArIHBhcmFtcyxcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhbnkocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbmZvL3F5QnlJbmZvSWRcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogcGFyYW1zLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvYmxlbSgpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luc3BlY3Rpb25Jc3N1ZXNcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVHcm91cCgpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luc3BlY3Rpb25Jc3N1ZXMvdGltZUdyb3VwXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1bml0KCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5zcGVjdGlvbklzc3Vlcy9nZXRVbml0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9ibGVtTGlzdChwYXJhbXMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luc3BlY3Rpb25Jc3N1ZXMvcGFnZUxpc3RcIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBwYXJhbXMsXHJcbiAgfSk7XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vYnJlYWtMYXdSZXBvcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAyZWM5MzFhJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2JyZWFrTGF3UmVwb3J0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vYnJlYWtMYXdSZXBvcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2JyZWFrTGF3UmVwb3J0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTAyZWM5MzFhJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMDJlYzkzMWFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDJlYzkzMWEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDJlYzkzMWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDJlYzkzMWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2JyZWFrTGF3UmVwb3J0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMmVjOTMxYSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwMmVjOTMxYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL2Nhc2VDaGVjay9jYXNlRGV0YWlsL2NvbXBvbmVudHMvYnJlYWtMYXdSZXBvcnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9icmVha0xhd1JlcG9ydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYnJlYWtMYXdSZXBvcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYnJlYWtMYXdSZXBvcnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDJlYzkzMWEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9icmVha0xhd1JlcG9ydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDJlYzkzMWEmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2NhbmNlbFJlcG9ydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njk5YzIxMGEmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2FuY2VsUmVwb3J0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY2FuY2VsUmVwb3J0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9jYW5jZWxSZXBvcnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Njk5YzIxMGEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2OTljMjEwYVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2OTljMjEwYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2OTljMjEwYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2OTljMjEwYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY2FuY2VsUmVwb3J0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02OTljMjEwYSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2OTljMjEwYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL2Nhc2VDaGVjay9jYXNlRGV0YWlsL2NvbXBvbmVudHMvY2FuY2VsUmVwb3J0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2FuY2VsUmVwb3J0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jYW5jZWxSZXBvcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2FuY2VsUmVwb3J0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY5OWMyMTBhJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2FuY2VsUmVwb3J0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02OTljMjEwYSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5zaWRlRGVhbFJlcG9ydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDVlYjJjZDAmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5zaWRlRGVhbFJlcG9ydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luc2lkZURlYWxSZXBvcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luc2lkZURlYWxSZXBvcnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDVlYjJjZDAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI0NWViMmNkMFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0NWViMmNkMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0NWViMmNkMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0NWViMmNkMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5zaWRlRGVhbFJlcG9ydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDVlYjJjZDAmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDVlYjJjZDAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9jYXNlQ2hlY2svY2FzZURldGFpbC9jb21wb25lbnRzL2luc2lkZURlYWxSZXBvcnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbnNpZGVEZWFsUmVwb3J0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbnNpZGVEZWFsUmVwb3J0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luc2lkZURlYWxSZXBvcnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDVlYjJjZDAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbnNpZGVEZWFsUmVwb3J0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NWViMmNkMCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcGVuYWx0eURlYWxSZXBvcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUzNjUyNGM2JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3BlbmFsdHlEZWFsUmVwb3J0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vcGVuYWx0eURlYWxSZXBvcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3BlbmFsdHlEZWFsUmVwb3J0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTUzNjUyNGM2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNTM2NTI0YzZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTM2NTI0YzYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTM2NTI0YzYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTM2NTI0YzYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3BlbmFsdHlEZWFsUmVwb3J0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MzY1MjRjNiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1MzY1MjRjNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL2Nhc2VDaGVjay9jYXNlRGV0YWlsL2NvbXBvbmVudHMvcGVuYWx0eURlYWxSZXBvcnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wZW5hbHR5RGVhbFJlcG9ydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGVuYWx0eURlYWxSZXBvcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGVuYWx0eURlYWxSZXBvcnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTM2NTI0YzYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wZW5hbHR5RGVhbFJlcG9ydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTM2NTI0YzYmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3BlbmFsdHlSZXBvcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYwMjgxNjkxJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3BlbmFsdHlSZXBvcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9wZW5hbHR5UmVwb3J0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9wZW5hbHR5UmVwb3J0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYwMjgxNjkxJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjAyODE2OTFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjAyODE2OTEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjAyODE2OTEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjAyODE2OTEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3BlbmFsdHlSZXBvcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYwMjgxNjkxJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzYwMjgxNjkxJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvY2FzZUNoZWNrL2Nhc2VEZXRhaWwvY29tcG9uZW50cy9wZW5hbHR5UmVwb3J0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGVuYWx0eVJlcG9ydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGVuYWx0eVJlcG9ydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wZW5hbHR5UmVwb3J0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYwMjgxNjkxJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGVuYWx0eVJlcG9ydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjAyODE2OTEmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3JlZ2lzdGVyUmVwb3J0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YWJkMDhmMyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9yZWdpc3RlclJlcG9ydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3JlZ2lzdGVyUmVwb3J0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9yZWdpc3RlclJlcG9ydC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00YWJkMDhmMyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjRhYmQwOGYzXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRhYmQwOGYzJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRhYmQwOGYzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRhYmQwOGYzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9yZWdpc3RlclJlcG9ydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGFiZDA4ZjMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGFiZDA4ZjMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9jYXNlQ2hlY2svY2FzZURldGFpbC9jb21wb25lbnRzL3JlZ2lzdGVyUmVwb3J0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVnaXN0ZXJSZXBvcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlZ2lzdGVyUmVwb3J0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlZ2lzdGVyUmVwb3J0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRhYmQwOGYzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVnaXN0ZXJSZXBvcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhYmQwOGYzJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzQ2NjBiMTYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzQ2NjBiMTYmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzNDY2MGIxNlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczNDY2MGIxNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczNDY2MGIxNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczNDY2MGIxNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM0NjYwYjE2JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM0NjYwYjE2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvY2FzZUNoZWNrL2Nhc2VEZXRhaWwvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzQ2NjBiMTYmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzQ2NjBiMTYmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9