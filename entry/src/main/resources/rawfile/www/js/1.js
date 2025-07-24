(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/mine/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/mine/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappMock_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {},
  data: function data() {
    return {
      info: {
        mc: '1',
        ssbm: ''
      },
      token: localStorage.getItem('token')
    };
  },
  computed: {
    firstName: function firstName() {
      return this.info.mc.split('')[0];
    }
  },
  mounted: function mounted() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo: function getUserInfo() {
      var _this = this;

      return Object(D_helipingWork_APP_kmEnvPortable_webappMock_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('/zshb/getUserObject', {
                  token: _this.token
                });

              case 3:
                response = _context.sent;

                if (response.data.code === 200) {
                  _this.info = response.data.data.userVO;
                } else {
                  Object(vant__WEBPACK_IMPORTED_MODULE_4__["Toast"])(response.data.message);
                }

                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                Object(vant__WEBPACK_IMPORTED_MODULE_4__["Toast"])('请求失败，请重试');

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }))();
    },
    showSet: function showSet() {
      this.$router.push({
        name: 'systemSet'
      });
    },
    onLogout: function onLogout() {
      var _this2 = this;

      vant__WEBPACK_IMPORTED_MODULE_4__["Dialog"].confirm({
        title: '提示',
        message: '退出登录'
      }).then(function () {
        localStorage.removeItem('token');

        _this2.$router.push('/login');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"9d17f796-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/mine/index.vue?vue&type=template&id=3348b2b0&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9d17f796-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/mine/index.vue?vue&type=template&id=3348b2b0&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "mine-page" },
    [
      _c("van-nav-bar", {
        staticStyle: { background: "none" },
        attrs: { title: "我的", "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c("div", { staticClass: "mine-wrapper" }, [
        _c("div", { staticClass: "headWrapper", on: { click: _vm.showSet } }, [
          _c("div", { staticClass: "circle-name" }, [
            _vm._v(_vm._s(_vm.firstName)),
          ]),
          _c("div", [
            _c(
              "div",
              {
                staticClass: "fs",
                staticStyle: { "justify-content": "start" },
              },
              [
                _c("span", { staticClass: "name" }, [
                  _vm._v(_vm._s(_vm.info.mc)),
                ]),
                _vm.info.ssbm
                  ? _c("span", { staticClass: "department" }, [
                      _vm._v(_vm._s(_vm.info.ssbm)),
                    ])
                  : _vm._e(),
                _c("br"),
              ]
            ),
            _c(
              "span",
              {
                staticStyle: {
                  color: "rgba(31, 51, 73, 0.5)",
                  "font-size": "14px",
                },
              },
              [_vm._v(_vm._s(_vm.info.username))]
            ),
          ]),
        ]),
        _c("ul", { staticClass: "contentTop" }, [
          _c("li", { staticClass: "logout", on: { click: _vm.onLogout } }, [
            _c("div", { staticClass: "fs" }, [_vm._v(" 注销登录 ")]),
          ]),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

<<<<<<< HEAD
var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
=======
var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
>>>>>>> 3779deaf709a5b6cc85c29d360b193e9ba6be2b6
};


/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

<<<<<<< HEAD
// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(/*! ../modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegExp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) !== 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () {
      execCalled = true;
      return null;
    };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: call(nativeRegExpMethod, regexp, str, arg2) };
        }
        return { done: true, value: call(nativeMethod, str, regexp, arg2) };
      }
      return { done: false };
    });

    defineBuiltIn(String.prototype, KEY, methods[0]);
    defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
=======
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");

var push = uncurryThis([].push);

module.exports = function (replacer) {
  if (isCallable(replacer)) return replacer;
  if (!isArray(replacer)) return;
  var rawLength = replacer.length;
  var keys = [];
  for (var i = 0; i < rawLength; i++) {
    var element = replacer[i];
    if (typeof element == 'string') push(keys, element);
    else if (typeof element == 'number' || classof(element) === 'Number' || classof(element) === 'String') push(keys, toString(element));
  }
  var keysLength = keys.length;
  var root = true;
  return function (key, value) {
    if (root) {
      root = false;
      return value;
    }
    if (isArray(this)) return value;
    for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
  };
>>>>>>> 3779deaf709a5b6cc85c29d360b193e9ba6be2b6
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

<<<<<<< HEAD
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

var $TypeError = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = call(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  throw new $TypeError('RegExp#exec called on incompatible receiver');
};

=======
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

>>>>>>> 3779deaf709a5b6cc85c29d360b193e9ba6be2b6

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var regexpFlags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var getInternalState = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js").get;
var UNSUPPORTED_DOT_ALL = __webpack_require__(/*! ../internals/regexp-unsupported-dot-all */ "./node_modules/core-js/internals/regexp-unsupported-dot-all.js");
var UNSUPPORTED_NCG = __webpack_require__(/*! ../internals/regexp-unsupported-ncg */ "./node_modules/core-js/internals/regexp-unsupported-ncg.js");

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis(''.charAt);
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call(nativeExec, re1, 'a');
  call(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice(match.input, charsAdded);
        match[0] = stringSlice(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = globalThis.RegExp;

var UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') !== null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
  return !$RegExp('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') !== null;
});

module.exports = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-unsupported-dot-all.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-unsupported-dot-all.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

<<<<<<< HEAD
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = globalThis.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.test('\n') && re.flags === 's');
});

=======
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");
var getReplacerFunction = __webpack_require__(/*! ../internals/get-json-replacer-function */ "./node_modules/core-js/internals/get-json-replacer-function.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ "./node_modules/core-js/internals/symbol-constructor-detection.js");

var $String = String;
var $stringify = getBuiltIn('JSON', 'stringify');
var exec = uncurryThis(/./.exec);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var replace = uncurryThis(''.replace);
var numberToString = uncurryThis(1.0.toString);

var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function () {
  var symbol = getBuiltIn('Symbol')('stringify detection');
  // MS Edge converts symbol values to JSON as {}
  return $stringify([symbol]) !== '[null]'
    // WebKit converts symbol values to JSON as null
    || $stringify({ a: symbol }) !== '{}'
    // V8 throws on boxed symbols
    || $stringify(Object(symbol)) !== '{}';
});

// https://github.com/tc39/proposal-well-formed-stringify
var ILL_FORMED_UNICODE = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

var stringifyWithSymbolsFix = function (it, replacer) {
  var args = arraySlice(arguments);
  var $replacer = getReplacerFunction(replacer);
  if (!isCallable($replacer) && (it === undefined || isSymbol(it))) return; // IE8 returns string on undefined
  args[1] = function (key, value) {
    // some old implementations (like WebKit) could pass numbers as keys
    if (isCallable($replacer)) value = call($replacer, this, $String(key), value);
    if (!isSymbol(value)) return value;
  };
  return apply($stringify, null, args);
};

var fixIllFormed = function (match, offset, string) {
  var prev = charAt(string, offset - 1);
  var next = charAt(string, offset + 1);
  if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
    return '\\u' + numberToString(charCodeAt(match, 0), 16);
  } return match;
};

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  $({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var result = apply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace(result, tester, fixIllFormed) : result;
    }
  });
}

>>>>>>> 3779deaf709a5b6cc85c29d360b193e9ba6be2b6

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-unsupported-ncg.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-unsupported-ncg.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = globalThis.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

<<<<<<< HEAD
=======
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAkCAYAAAAXSR0AAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANPSURBVGiB3Zq/T9tAFMe/fsIJYmmROjBXFPYOSN1L/4AOLAgs2r1b1/4D3bKxIDGSDGVgot1bsfQPaNUFJCuOIek5CdhO/Lo0lfGv2MnZXPpZktz3+e7e3Xv208UaIpyenr4cj8fviOgFMz/SdV0HAE3TEP5MalNRS7LJy+XlJfr9friJAfwEcMbMzYODg2/Ra+6N0Gq1zmu12rYMR2bVqhp3Gp1OB7ZtTzM70zTtg2EY3//1P/lycnLyo16vrxedpIpRmVdLw3EcXF1dZdqE0TTttWEYnwCAAKDZbJ7XarX1iQEz3/sME9XCNippeXxJwvd9mKaZyzY0xtHh4aEOANRoNOpLS0vbshwpcwHK2OgopmliPB6n6ik8Xl5efg8AtLa21ppnIlUvQJmbaVkWBoNBrD0PzPwWACgIgo20QSMXSHdElWgGACEErq+vY7YFeHp8fLxFuq5vLtriyJ6T53mF75spbFFVEZCmqbCZpmkiCIJYe1GCIHhCD+GIKqnOzLAsC8PhMGY7K5Q12Lxams2smuwNE0Lg5uYmNu480CItgCwNADzPQ7vdjvkwL4kpP89kFyXS2+22lPtmlNhDSdUFkKl1Oh3c3t7GxpUBhX+ougBFtGnzdRwHvV4vZi+LeymfNBGVF6do367rwrKsWB8ySaxD/+dUTxpXJqkPpbTJZmkqR7Nt27i7u4vZy6bUOlSVVBdCQAgR66MMqEwnZ9VkbpjrunlO3qUReyhFJ6RCxM6z0XOeIBWmlDpUlQeXbdtwXTfWR5lMPRyZoGI6Z2mO40T/sawEijaolM6zbrTrutIPPfIitQ5VIdKZ+cEWE5Bch2ZpVUVzt9uF7/sJrlaDknXorJHe7/dn/pNNFrnrUNVT3fO8Ug898kLM7C96qjMzut1uhpvVQEQ2AfgNqJ/OWVqv18NoNMp0tiIuiJm/qp7OWdpgMCjtsLggvwzDuCAiaoRbVUvnLM3zvMoOPXJwBAC0u7v7hZk/L1qqM7NKi9lbWVn5CPwtm/b29l4FQfBzkVJdCKHKfROapr3Z2dnxgFAdur+//ywaqRNUS/XhcFjJYXEOzkaj0fPJu6FA5A1mAGg0GvXV1dUWgA0i2lTtbWXf9x+y3mRMeSX8D7F3DlzHIyccAAAAAElFTkSuQmCC"
>>>>>>> 3779deaf709a5b6cc85c29d360b193e9ba6be2b6

/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var exec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});

<<<<<<< HEAD
=======
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAkCAYAAAAXSR0AAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAWASURBVGiBzVpLbxxFEP6qdyxHJiIgRQJxRCa5ICE4ROLGgSDlyg/gABInFE5InPgD3PgBDrLEJT5w8YWQG5EShaCYCLBi7LXlR+K1Y5LF+BHbu8VhZna6e6p7umcfTkmWpl1T1TXffPXQbBMs+eBr/nDvmK+OKbzfZZw7e4bHiAAigAAQsXat/WVr5dGV1+y/F5k/h86048r9FNlP65ef5hKsPTGMGIRFMGapgeut7+mObWPc/e6X3RsvT/DlqofsgWrpVKVdOKiq0i4cVPslh8i9pQbmlpX3HgZmQfhme5rulwB9+4vu36++xJN1gq8HpAVqX0A6QLVjCwR1ZUvh5oNGGPIpih9vTdOPQLof3rnavXFugicZALP2B8c1p9xnTl9TnJ10nfmKtpN0BM7oU4oNxdoluweEX+YjwEz3msLnPAYAavIKj0+M82VpU/FB8oA4fTWxdpIuDYqi7Vw6MAW9AEluzTfw/DgOTwCvvHaIrwBATUzyTGzwMHSe4AN8wtBRsJ0IJPTYhLgEO11+XWxg45/IzlXs+RkAJMcdXDAcU/6k1jWy2pOzytARQOy0k3zmYXNJp/3DE4ut07cvdLbCEQsBzZbC7yv+JlQhb77+CV9Kzp7hi0XaOYLNdCUgyW/n0hEV7Iyxk3SUZ4zTTr9J9vnvPuFWbN0UpNPFpaSKnXpcfrbYBuV7DYZLPgEThAqQe9sKOp+drbs138DRCfoWAs4nDOsp9ZSMZpKdz4Wuh4/vIY21O117sQWWqjQlhDKCtG4+flqvbkqSMdQMvr+UNIOvTkmfz3K66tjElQcLVADLmwp/rvVVN0uSFMARKAPVmZKRjLB7TD2f6YW7Icb4zHwx0N4n3F7ov27akjK0R9DqAh6ioyx4thhR1ycxge36XLchgsDEuLPQwEkHA5ck34gtRkQxSQveTEm5Pkt2MpB6bO76HDpZAGlsvy01sNUeXN3URUt5PSAHqI5gewGLKSl07Ip0tcModAbVgn3q2y9vER4+Gmzd1KWX8oAjwEAmlYA07ARQHT6HOaO299KuPkzxzKHWXBLFJJdPt65yRvUxHnJs9mRxb6mBrr7/ECTp+RffursGxjPJXQODZlQf47V7Kbu2iXK/qbCzO5y6qUvCkcHrxd1vJ+m0JxVSMi7NyxOJa0Zd2VZotoZXN3UpNyUxJdPg5Q8QPjtJlz613WPq+UwvfDNqe58w1xwNmIDelCqLezq/2brYhpESdXQz6tyKMt7LsEVO+WxtzoHaTTXZOeoZ9cGqwrO94ddNXRxzqNlHTJ0DVNuPzvBMV05JoWMHvBwxNmtGXd1WWN0eXarnUppDS12y75QUgPR1bI/P0IbY3if8sTp6MAFrDi11SSdbrLlEYJJN6Gqffl1YQ0x/9jgtMIEs5Z0p6WWguwYOekZFfkuAz7/WFXYPRls3dUmcQPqYBBRGQ5pRjTrutSvW6zuERzV/ZBuUuOdQ34MY6xTUQc+oRh0P8Nnew1A/eoRKctKh46TBY7HzZL5+EWbULgMPN04fTAaeJAy0mXG+TsMwpxXHOBXos58ZdWFDYe/56aY6ADQU7iru4na9UyOSLv70R+pI0AWe/tjYIbSG9LE4Upqb03RXjRG+CwWyfGok3E7SiUAadv7TH+19GtlHjyohYAoAVHOKbnY69LP4YBojADiYZNuRR6cxvGK/Kl2nAyxtvhhgAnjWOsS3QHb6bu0afXTSocX6TBJAdejgtZN08nmnpZbCwdHIAPML4VPM0BGQAQoA69foLZup/TGJSkDCdS88fmCxHsDjp6P5WFwlDMwy4b38bChQ9MyeTF7h8aM3MNNlXBhP+CIBkYdn7TUP4EBuvmb8d0hYOL15szgS3sX11g/lI+H/AxoFi9JEiEyrAAAAAElFTkSuQmCC"
>>>>>>> 3779deaf709a5b6cc85c29d360b193e9ba6be2b6

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

<<<<<<< HEAD
=======
module.exports = "data:image/png;base64,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"
>>>>>>> 3779deaf709a5b6cc85c29d360b193e9ba6be2b6

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/mine/index.vue?vue&type=style&index=0&id=3348b2b0&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/mine/index.vue?vue&type=style&index=0&id=3348b2b0&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/assets/我的背景.png */ "./src/assets/我的背景.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n.mine-page[data-v-3348b2b0] {\n  width: 100vw;\n  height: 100vh;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n  background-size: cover;\n}\n.mine-page .van-nav-bar[data-v-3348b2b0]::after {\n  display: none;\n}\n.fs[data-v-3348b2b0] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.home-header-wrapper[data-v-3348b2b0] {\n  padding: 24px 15px 7px 15px;\n  color: #333333;\n  font-weight: bold;\n}\n.home-header-wrapper img[data-v-3348b2b0] {\n  width: 24px;\n  height: 24px;\n}\n.mine-wrapper[data-v-3348b2b0] {\n  padding: 80px 30px 0;\n  overflow: auto;\n}\n.mine-wrapper .headWrapper[data-v-3348b2b0] {\n  width: 100%;\n  line-height: 30px;\n  display: flex;\n  align-items: center;\n}\n.mine-wrapper .headWrapper img[data-v-3348b2b0] {\n  width: 70px;\n  height: 70px;\n  margin-right: 10px;\n  border-radius: 50%;\n}\n.mine-wrapper .headWrapper .name[data-v-3348b2b0] {\n  padding-right: 10px;\n  font-weight: bold;\n  color: #1F3349;\n  font-size: 18px;\n}\n.mine-wrapper .headWrapper .department[data-v-3348b2b0] {\n  padding: 2px 7px;\n  background-color: rgba(68, 123, 252, 0.2);\n  border-radius: 4px;\n  font-size: 12px;\n  color: #447BFC;\n  line-height: 20px;\n}\n.mine-wrapper ul.contentTop[data-v-3348b2b0] {\n  margin: 40px 0;\n}\n.mine-wrapper ul.contentTop li[data-v-3348b2b0] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 60px;\n  line-height: 60px;\n  cursor: pointer;\n  font-size: 16px;\n  color: #1F3349;\n}\n.mine-wrapper ul.contentTop li img[data-v-3348b2b0] {\n  width: 16px;\n  margin-right: 10px;\n}\n.logout .fs[data-v-3348b2b0] {\n  justify-content: center;\n  width: 100%;\n  border-radius: 10px;\n  background-color: #F4F6FF;\n  height: 50px;\n  margin-top: 50px;\n}\n.circle-name[data-v-3348b2b0] {\n  border-radius: 50%;\n  background-color: #447BFC;\n  color: white;\n  font-size: 36px;\n  height: 70px;\n  width: 70px;\n  text-align: center;\n  line-height: 70px;\n  margin-right: 20px;\n}", ""]);
// Exports
module.exports = exports;

<<<<<<< HEAD
=======
module.exports = "data:image/png;base64,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"
>>>>>>> 3779deaf709a5b6cc85c29d360b193e9ba6be2b6

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/mine/index.vue?vue&type=style&index=0&id=3348b2b0&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/mine/index.vue?vue&type=style&index=0&id=3348b2b0&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

<<<<<<< HEAD
// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=3348b2b0&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/mine/index.vue?vue&type=style&index=0&id=3348b2b0&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("074269ee", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}
=======
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAkCAYAAAAXSR0AAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAVWSURBVGiB1ZrPb9xEFMe/b9ZJQGrVIkXckACF9o5EJe6UP4A/ob1zaMUFBOKOhNTc4NA/gBx6yaG0RSKAWlpAUCRKSUsJFaFtyK9NNsmuN57HwV57bM+MZ+yN0z4p0ehpZzz+zHzfe6t9hIL1P3/jLQq332Ux9SYhOibFsQkQAUQACEQiHWf+2Ec5v0jHJX+6Vn6+ui4p86v9ovCM/JpU/Lyj8dIcePtBzkWE+8w0L1h+QefxfXFObvX+hZkrMnjhdBU8KrykHpIbPCrAbwLPDapwg/nkG/DKDftngHnJ/NHkefxcAjqYfeleJF6cyW2IRPl0E0gmfx14Zqiu8CxqUOaSuicbqO4i+OElJ/AAIMDv0DlciscA9i68ciWi6Rkwx9zBAMd/rIxjvzT4q8fs6TeOR3Og7EnrL79P5jdY2AUvX3aGCQASdJE/wwQACJ7FlMTR02x5CRM8X3/8wlLv1wHQ+qWyVp2Dk1aovHwZiPa8gAI4LnfwHgCIQfTy3OgBZaiy8sZYoUKBZwBmX6sFNagwH38N7i35wkyMzgJAQAhPgBkgCbAAIwkxo2dRPGBWQg9zFn0ZYAIIHM9R/QCIWFlr5OfCM5C+HFP6SIs/WzPzc7r+aC6zBEGU/eB4ThpKCdy9C/7vph/DvL0afopTwT6On8ze3gAv3WCyBy0kGWdlR3jlg4sPNA8JTvDiA03mKweqhZfMzz0j3PCOmzrrAKcCFZgLvNgv4wxagKe7JTZ4JjXkb3ozNZj2BGQHJJe/BKKBFzydScZ0kJ7g6IUc4MV+ncQ4OQSUIOVvvcl/CGp4sgDsPPSGZ7IAzBVxyABPJyXijFXql0ASxzJIaKwGX3haNXTvgtd+bMKvZMFIL7Y4lGlK8RfjECGFZ0ospZvrdOv1ftuaKbz0HTRqGKyBH13z5VVpQXo9LHHoqcvKNjUkXy2r1MCPvgLksCY2swXFk64Th0w378CyclM1rHwL7P3ry8rJUsmrG/KKQyWJcQ6GCZ5JDbqbO1Y1bP0BbPxaC5aL5SQfbyg5eTXemOKQAs+elf1CiU0NjWrU4TqwslAblosFJonZksCh1ajqXMCghtEJKn4kB7qyAHBUC5SrFcomOEnp0GpUJzXoa1Ssfgf0V+pycragWVY2wPPJym3UqL1FYOv3hqjcLJeU6mTlTFOKf9xZ2VMNuTUH66DV6/UJeVqgj0PuWVmfWOzw2lQDrV1XJhy8BUB1PemflVF589qoUbFxEwjXasOpY8kN1UlsPFk59QOGrHwwNSr1FkG9e035eFsQZ1/XrPyM1KjhOmjjh6ZsalkQb901Kyf/nuYaFQyxeTgwgbRs8s/KB1+jFuABTmqg7k/AcLMxmLqWlE1ZPVgdn3SJxQOejxpUeIU96dRAu3+CdpfGAqauKd/ldRJzzcooJZy2a1Ta34TYut0YSFMLOp1wGEWTEweRlduqUcEStJV2wxyaCcJqwJK6AE/rs/KzUaOK3m3Q/vYYkDSzCLglBEU3cj/8j5KUMnbxg82NEqauFFvbjKlRoriW2PsL1P+nbXYlI+DB5DncElKK2VKLSi2o0grJ6lfm2w8o76fhGsTOnZbR6Y2ZLwKAOPJh91onCK8WN53C09weQBr8egBNbr1xLIcQO7+1jM1om2IbnwBJ992RD3pvT0z075vAjLdZbDxqELt3QNFO++g0JsBn6GOE8Tix59/ffU10BlfLt0HfLecO1QOe4dYX/aL/N0T4uFVoOmNgPmJ+fdQbCmS5MvvQLKb2to/OUQcnhsPnTro0uWYNuOWO51yTq0N3sq2Zl0CgqItg95dWgGmssiX8fz7zUdrAI6xSAAAAAElFTkSuQmCC"
>>>>>>> 3779deaf709a5b6cc85c29d360b193e9ba6be2b6

/***/ }),

/***/ "./src/assets/我的背景.png":
/*!*****************************!*\
  !*** ./src/assets/我的背景.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

<<<<<<< HEAD
module.exports = __webpack_require__.p + "img/我的背景.png";
=======
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAkCAYAAAAXSR0AAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAASNSURBVGiBzZq7bhtHFIb/c7iSE8uJjNhFihSG4dh1UhhIHwdwF+QNfEG6pEubF0iXB3CZQipyExBATiUgF8nwDQbk2KIkhpBlyZIjihYlmyL3pOByd8md3Z3ZnaH0A4R+LmdnZ74zl0NxCEOSrz76VNp7X0tl7BOITMrb74yBCAABFLwMvKSVKVjfsBfje/VVuf8baLs+gIcIVV8ww74/Rb/i7+F7Bp7QuXl+FhOTV2x1NheqrfodQOXqHfDqvexCIjMdyLfjv+B+Aqh/7YMl/9SZC8467Rqq6b0ZoherqDyc1QLfg0hf0M/dHwGAAaBz49ysTLx3ISIfj0LsrwRGgpeBJ8PyzutPg3PwCpXFOW2YPSJyS77EGACwXMUJeuvUFSBoVGoD+l4BO9NH99JAPccTKj+eAw5fGwEFcBqb/E0P6PvnpuMPyoRayEcMAYBiXh2E4QAa+CJtjMNcmge9XDOF2Ws14QYAeOi+uQicjDpEvU5L4OPXR+PJsLxEvn9r4IHoeqYHgTaXwbUHKCzBefkclz2ZmLwEkcSDtBpWEB5RbHCUDgIZ1i/J8gdN43VTJd/ny14Is0inTEbBkCeKBpiLEZ8OlRLleXEO6LRhQWc9VcT6PhwAjqb3QP0lgpMZtJy2cHUetLMOW/LChigfKqOF6qL+4ZkQ87yxDK4/SlIpIU+1fka+94YkWqqy11I5nlAV9VNrF/zkDzWVEvIAPQiZO38ImAynZRRMZdAcQuUnfwLdjppKCRltSvbTKcqufwCwxDzMfew5XL0D2t1MY1JKmZuSyh9djkqG5Yf6FUwe2lgBP/tHCcOGvLAVBtEO2+tgitrLUSl5vdUAV+fVJCzJeIRm+iJTUeFd5ahcXQB8X8XBmmJpk/5aOvKd2UKgePku6NV2Kghbim1K5mvUSKGWqefFKmijmk3CkqK0yTjyvTd6OarZ6I/70lD3G+DluzkY7Kncd/nA5+eoZBi0wSCHQSvQRl65F7voXtY2JbvpFKnrTw2CKK9z7QGotZMLwaaSadOxgWrik+s/bdVAW7WsvjtRcoSW3FGD/SplLS3ndXNUajXA/z7M770DaX+XL+1LBqrvc3NUEVDtaGACgJc/gszXWFvpjlb9Q+C5/gh00NTtv3VppE1k2GkZPdTgOm3VC//IZkt6aZPRtKRkuhMvk3iOxvNTfBwqtRrgtUXD7tuXR932oVTGx1ytn9n/kgs+0A6aJK73fpb2jwVMANsegF0SOesy3bGXTiXTIxBAzx4Dr/f0u+1IzP4CU1f+AgQEgZODBM4OUPT+0nYdtPN85PASIqzQT1hgVCrf9xtJeR3Jgq3hU4NWFGprB/R8abTgUiSCWwDA9MPL33HYvh3mcJZHkN5xmALe74DXn44UWoYaPO5/BwSn73iq+RkOD6r9NhMQth+ZvsAUtTXV158C7X3HnPREoOs0jTYQAAUAntr7EN03t7VGR9i56KN8bw8q/bcGam654qMvkZmO+B/3z4YCUVISlbmKE3j39LSge1HGT15ycTi27yVxCDb+OdT37TePMkXKPRL+P3wBZo2d2jHxAAAAAElFTkSuQmCC"
>>>>>>> 3779deaf709a5b6cc85c29d360b193e9ba6be2b6

/***/ }),

/***/ "./src/views/mine/index.vue":
/*!**********************************!*\
  !*** ./src/views/mine/index.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _index_vue_vue_type_template_id_3348b2b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3348b2b0&scoped=true& */ "./src/views/mine/index.vue?vue&type=template&id=3348b2b0&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/mine/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_3348b2b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=3348b2b0&lang=scss&scoped=true& */ "./src/views/mine/index.vue?vue&type=style&index=0&id=3348b2b0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3348b2b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_3348b2b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3348b2b0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/mine/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);
=======
/* harmony default export */ __webpack_exports__["default"] = ("\n#circle{\n    animation: loading-circle 1.4s ease-in-out infinite;\n    /* \u5706\u5185\u586B\u5145 */\n    fill: none;\n    /* \u5706\u5468\u989C\u8272 */\n    stroke: #447bfc;\n    /* \u5706\u5468\u5BBD\u5EA6 */\n    stroke-width: 2;\n}\n\n#loading-circle {\n    position: fixed;\n    z-index: 100000;\n    top: calc(50% - 100px);\n    left: calc(50% - 25px);\n}\n\n@keyframes loading-circle {\n    0% {\n        stroke-dasharray: 1px 200px;\n        stroke-dashoffset: 0;\n    }\n    30% {\n        stroke-dasharray: 100px 200px;\n        stroke-dashoffset: -15px;\n        stroke: green;\n    }\n    100% {\n        stroke-dasharray: 100px 200px;\n        stroke-dashoffset: -120px;\n    }\n}\n\n.circle-loading-svg {\n    animation: loading-rotate 1.4s linear infinite;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n}\n\n@keyframes loading-rotate {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(1turn);\n    }\n}");
>>>>>>> 3779deaf709a5b6cc85c29d360b193e9ba6be2b6

/***/ }),

/***/ "./src/views/mine/index.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/views/mine/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/mine/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/mine/index.vue?vue&type=style&index=0&id=3348b2b0&lang=scss&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./src/views/mine/index.vue?vue&type=style&index=0&id=3348b2b0&lang=scss&scoped=true& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3348b2b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=3348b2b0&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/mine/index.vue?vue&type=style&index=0&id=3348b2b0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3348b2b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3348b2b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3348b2b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3348b2b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));

=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upload", function() { return upload; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_FileUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/FileUtils */ "./src/utils/FileUtils.js");



function upload(url, fileUri, params) {
  return new Promise(function (resolve, reject) {
    if (fileUri.indexOf('content') === -1 && fileUri.indexOf('file:///') === -1) {
      fileUri = 'file://' + fileUri;
    }

    var uploader = new _utils_FileUtils__WEBPACK_IMPORTED_MODULE_2__["default"].FileUtils.Uploader({
      url: url,
      fileUri: fileUri,
      params: params
    });
    var progressbar = showProgressbar();

    uploader.onSuccess = function (response) {
      // navigator.dialogsPlus.hideLoading()
      if (progressbar) {
        progressbar.setValue(100);
        progressbar.hide();
      }

      resolve(response);
    };

    uploader.onFail = function (error) {
      console.log('e', error);

      if (progressbar) {
        progressbar.hide();
      }

      reject(error);
    };

    uploader.onProgress = function (progress) {
      var percent = (progress.loaded / progress.total * 100).toFixed(0);

      if (progressbar) {
        progressbar.setValue(percent);
      }
    };

    uploader.upload();
  });
}

function showProgressbar() {
  if (window.navigator.dialogsPlus) {
    // navigator.dialogsPlus.showLoading('上传中', '请稍后')
    return window.navigator.dialogsPlus.progressStart('上传中', '请稍后');
  } else {
    return null;
  }
}
>>>>>>> 3779deaf709a5b6cc85c29d360b193e9ba6be2b6

/***/ }),

/***/ "./src/views/mine/index.vue?vue&type=template&id=3348b2b0&scoped=true&":
/*!*****************************************************************************!*\
  !*** ./src/views/mine/index.vue?vue&type=template&id=3348b2b0&scoped=true& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9d17f796_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3348b2b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9d17f796-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=3348b2b0&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"9d17f796-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/mine/index.vue?vue&type=template&id=3348b2b0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9d17f796_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3348b2b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9d17f796_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3348b2b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });


=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imgJugdeLevel", function() { return imgJugdeLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AQIJugdeBgColor", function() { return AQIJugdeBgColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AQIJugdeTextColor", function() { return AQIJugdeTextColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSectionTime", function() { return getSectionTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExpire", function() { return isExpire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openBrowser", function() { return openBrowser; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./src/store/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../router */ "./src/router/index.js");
/* harmony import */ var _assets_level0_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/level0.png */ "./src/assets/level0.png");
/* harmony import */ var _assets_level0_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_level0_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_level2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/level2.png */ "./src/assets/level2.png");
/* harmony import */ var _assets_level2_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_level2_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_level3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/level3.png */ "./src/assets/level3.png");
/* harmony import */ var _assets_level3_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_level3_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_level4_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/level4.png */ "./src/assets/level4.png");
/* harmony import */ var _assets_level4_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_level4_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_level5_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/level5.png */ "./src/assets/level5.png");
/* harmony import */ var _assets_level5_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_level5_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_level6_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/level6.png */ "./src/assets/level6.png");
/* harmony import */ var _assets_level6_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_level6_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_FileUtils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/FileUtils */ "./src/utils/FileUtils.js");
/* harmony import */ var _utils_download__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/utils/download */ "./src/utils/download.js");
/* harmony import */ var _utils_upload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/utils/upload */ "./src/utils/upload.js");
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/index.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/main */ "./src/main.js");
/* harmony import */ var _style_loading_style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../style/loading_style */ "./src/style/loading_style.js");















/** *
 * 判断用户是否过期、是否自动登录
 * @param time 登录时间
 * @param expire 过期时间
 */

var isExpire = function isExpire(time, expire) {
  // console.log('utils',store.state.user.isAutoLogin);
  //store.state.user.isAutoLogin true自动登录
  if (_store__WEBPACK_IMPORTED_MODULE_3__["default"].state.user.isAutoLogin) {
    return false;
  } else {
    if (!time) {
      // clearStorage();
      return true;
    } else {
      // console.log(Date.now(), time + expire,Date.now() > time + expire);
      return Date.now() > time + expire;
    }
  }
};
/**
 * 判断站点水质状态背景颜色
 * @param value 值
 * */


var imgJugdeLevel = function imgJugdeLevel(value) {
  if (value === null) {
    return _assets_level0_png__WEBPACK_IMPORTED_MODULE_5___default.a;
  } else if (value === 'Ⅱ') {
    return _assets_level2_png__WEBPACK_IMPORTED_MODULE_6___default.a;
  } else if (value === 'Ⅲ') {
    return _assets_level3_png__WEBPACK_IMPORTED_MODULE_7___default.a;
  } else if (value === 'Ⅳ') {
    return _assets_level4_png__WEBPACK_IMPORTED_MODULE_8___default.a;
  } else if (value === 'Ⅴ') {
    return _assets_level5_png__WEBPACK_IMPORTED_MODULE_9___default.a;
  } else if (value === '劣Ⅴ') {
    return _assets_level6_png__WEBPACK_IMPORTED_MODULE_10___default.a;
  } else {
    return _assets_level0_png__WEBPACK_IMPORTED_MODULE_5___default.a;
  }
}; //日历字体颜色

var textColors = ['rgba(204, 204, 204, 1)', 'rgba(0, 228, 0, 1)', 'rgba(255, 191, 0, 1)', 'rgba(255, 126, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(153, 0, 76, 1)', 'rgba(126, 0, 75, 1)'];
/**
 * 判断AQI背景颜色
 * @param value 值
 * */

var AQIJugdeBgColor = function AQIJugdeBgColor(value) {
  if (value === null) {
    return 'background: ' + textColors[0];
  } else if (value <= 50) {
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
  if (value === null) {
    return 'color: ' + textColors[0];
  } else if (value <= 50) {
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
var getSectionTime = function getSectionTime() {
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
  return year + "-" + month + "-" + day + " " + hours + ":00";
};



var openBrowser = function openBrowser(url) {
  openUrl(url);
  return;
  var ref;
  var first = true;

  if (window.cordova) {
    ref = cordova.InAppBrowser.open(url, '_self', 'location=no,toolbar=no,zoom=no,fullscreen=no');
    ref.addEventListener('loadstart', function (event) {
      if (event.url === 'http://app://close' || event.url === 'app://close' || event.url === 'close') {
        ref.close();
      }

      if (first) {
        // 加loading
        ref.insertCSS({
          code: _style_loading_style__WEBPACK_IMPORTED_MODULE_16__["default"]
        }, function () {
          ref.executeScript({
            code: "\n                window.circle = document.createElement('div')\n                window.circle.id = 'loading-circle'\n                window.circle.innerHTML = '<div class=\"circle-loading-svg\"><svg height=\"50\" width=\"50\" viewBox=\"0 0 50 50\"><circle id=\"circle\" cx=\"25\" cy=\"25\" r=\"20\"/></svg></div>'\n                document.body.appendChild(window.circle)\n                "
          });
        });
      }
    });
    ref.addEventListener('loadstop', function (event) {
      if (first) {
        ref.executeScript({
          code: "if(window.circle) window.circle.remove()"
        }, function () {
          first = false;
        });
      }
    });
    ref.addEventListener('loaderror', function (event) {
      if (first) {
        ref.executeScript({
          code: "if(window.circle) window.circle.remove()"
        }, function () {
          first = false;
        });
      }
    }); // 监听子页面调用cordova事件

    ref.addEventListener('message', function (messageObj) {
      if (!messageObj.data) {
        console.log('###### message obj error ###### ');
        return;
      }

      var method = messageObj.data.method;

      switch (method) {
        case 'upload':
          cordova_upload(messageObj, ref);
          break;

        case 'download':
          cordova_download(messageObj, ref);
          break;

        case 'open':
          cordova_file_open(messageObj, ref);
          break;

        case 'select':
          cordova_file_select(messageObj, ref);
          break;

        case 'camera':
          cordova_camera(messageObj, ref);
          break;

        case 'locate':
          cordova_locate(messageObj, ref);
          break;

        case 'scanCode':
          cordova_scan(messageObj, ref);
          break;

        case 'navigation':
          cordova_navigation(messageObj, ref);
          break;
      }
    });
  } else {
    ref = window.open(url, '_blank');
  }

  return ref;
};

function cordova_upload(msgObj, ref) {
  var url = msgObj.data.url;
  var fileUri = msgObj.data.fileUri;
  var params = msgObj.data.params;
  var callback = msgObj.data.callback;
  var errorCallback = msgObj.data.error;

  try {
    Object(_utils_upload__WEBPACK_IMPORTED_MODULE_13__["upload"])(url, fileUri, params).then(function (success) {
      callback && ref.executeScript({
        code: "".concat(callback, "('").concat(JSON.stringify(success), "')")
      }, function () {});
    }).catch(function (error) {
      errorCallback && ref.executeScript({
        code: "".concat(errorCallback, "('").concat(error, "')")
      }, function () {});
    });
  } catch (e) {
    console.log(e);
  }
}

function cordova_download(msgObj) {
  var url = msgObj.data.url;
  var name = msgObj.data.name;
  var withCredentials = msgObj.data.withCredentials;

  try {
    Object(_utils_download__WEBPACK_IMPORTED_MODULE_12__["download"])(url, name, withCredentials);
  } catch (e) {
    console.log(e);
  }
}

function cordova_file_open(msgObj) {
  try {
    var filePath = msgObj.data.filePath;
    var filetype = filePath.substring(filePath.lastIndexOf('.') + 1);
    cordova.plugins.fileOpener2.open(filePath, _utils_FileUtils__WEBPACK_IMPORTED_MODULE_11__["default"].FileUtils.getMIMEType(filetype), {
      error: function error() {},
      success: function success() {}
    });
  } catch (e) {
    console.log(e);
  }
}

function cordova_file_select(msgObj, ref) {
  var callback = msgObj.data.callback;
  var errorCallback = msgObj.data.error;

  try {
    window.navigator.dialogsPlus.chooseFile("\u8BF7\u9009\u62E9\u6587\u4EF6", function (success) {
      callback && ref.executeScript({
        code: "".concat(callback, "('").concat(success, "')")
      }, function () {});
    }, function (error) {
      console.log(error);
      errorCallback && ref.executeScript({
        code: "".concat(errorCallback, "('").concat(error, "')")
      }, function () {});
    });
  } catch (e) {
    console.log(e);
  }
}

function cordova_camera(msgObj, ref) {
  try {
    var callback = msgObj.data.callback;
    var params = msgObj.data.params;
    var errorCallback = msgObj.data.error;
    window.navigator.camera.getPicture(function (success) {
      callback && ref.executeScript({
        code: "".concat(callback, "('").concat(success, "')")
      }, function () {});
    }, function (error) {
      errorCallback && ref.executeScript({
        code: "".concat(errorCallback, "('").concat(error, "')")
      }, function () {});
    }, params);
  } catch (e) {
    console.log(e);
  }
}

function cordova_locate(msgObj, ref) {
  try {
    var callback = msgObj.data.callback;
    var errorCallback = msgObj.data.error;
    /*MLoc.echo(success => {
      callback && ref.executeScript({code:`${callback}('${JSON.stringify(success)}')`}, () => {
      });
    }, error => {
      errorCallback && ref.executeScript({code:`${errorCallback}('${JSON.stringify(error)}')`}, () => {
      });
    }, [{}])*/

    window.suc.locate.locate(function (location) {
      console.log(location);
      callback && ref.executeScript({
        code: "".concat(callback, "('").concat(JSON.stringify(location), "')")
      }, function () {});
    }, function (error) {
      errorCallback && ref.executeScript({
        code: "".concat(errorCallback, "('").concat(JSON.stringify(error), "')")
      }, function () {});
    });
  } catch (e) {
    console.log(e);
  }
}

function cordova_scan(msgObj, ref) {
  try {
    var callback = msgObj.data.callback;
    var errorCallback = msgObj.data.error;
    cordova.plugins.barcodeScanner.scan(function (result) {
      callback && ref.executeScript({
        code: "".concat(callback, "('").concat(result.text, "')")
      }, function () {});
    }, function (error) {
      errorCallback && ref.executeScript({
        code: "".concat(errorCallback, "('").concat(JSON.stringify(error), "')")
      }, function () {});
    }, {
      preferFrontCamera: false,
      // iOS and Android
      showFlipCameraButton: false,
      // iOS and Android
      showTorchButton: false,
      // iOS and Android
      torchOn: false,
      // Android, launch with the torch switched on (if available)
      prompt: "请将二维码放置扫描区域内",
      // Android
      resultDisplayDuration: 0,
      // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
      formats: "QR_CODE,PDF_417",
      // default: all but PDF_417 and RSS_EXPANDED
      orientation: "portrait",
      // Android only (portrait|landscape), default unset so it rotates with the device
      disableAnimations: true,
      // iOS
      disableSuccessBeep: false // iOS

    });
  } catch (e) {
    console.log(e);
  }
}

function cordova_navigation(msgObj, ref) {
  try {
    var errorCallback = msgObj.data.error;
    window.suc.locate.locate(function (location) {
      console.log(location);
      localNavigation.start(function () {}, function (e) {
        alert(e);
      }, {
        type: "auto",
        toLng: msgObj.data.JD,
        toLat: msgObj.data.WD,
        myLng: location.Longitude,
        myLat: location.Latitude
      });
    }, function (error) {
      errorCallback && ref.executeScript({
        code: "".concat(errorCallback, "('").concat(JSON.stringify(error), "')")
      }, function () {});
    });
  } catch (e) {
    console.log(e);
  }
}
>>>>>>> 3779deaf709a5b6cc85c29d360b193e9ba6be2b6

/***/ })

}]);
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL21pbmUvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9taW5lL2luZGV4LnZ1ZT84YzA2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hZHZhbmNlLXN0cmluZy1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1leGVjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1zdGlja3ktaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLXVuc3VwcG9ydGVkLWRvdC1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC11bnN1cHBvcnRlZC1uY2cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5yZWdleHAuZXhlYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zcGxpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbWluZS9pbmRleC52dWU/MDU3OCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbWluZS9pbmRleC52dWU/ZGUyNyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL+aIkeeahOiDjOaZry5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21pbmUvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9taW5lL2luZGV4LnZ1ZT85MzhjIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9taW5lL2luZGV4LnZ1ZT9kYzc0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9taW5lL2luZGV4LnZ1ZT9kNmQ1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQ0E7QUFDQTtBQUVBO0FBQ0EsZUFEQTtBQUVBLGdCQUZBO0FBR0EsTUFIQSxrQkFHQTtBQUNBO0FBQ0E7QUFDQSxlQURBO0FBRUE7QUFGQSxPQURBO0FBS0E7QUFMQTtBQU9BLEdBWEE7QUFZQTtBQUNBLGFBREEsdUJBQ0E7QUFDQTtBQUNBO0FBSEEsR0FaQTtBQWlCQSxTQWpCQSxxQkFpQkE7QUFDQTtBQUNBLEdBbkJBO0FBb0JBO0FBQ0EsZUFEQSx5QkFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFQTtBQUNBO0FBREEsa0JBRkE7O0FBQUE7QUFFQSx3QkFGQTs7QUFLQTtBQUNBO0FBQ0EsaUJBRkEsTUFFQTtBQUNBO0FBQ0E7O0FBVEE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFXQTs7QUFYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFBLEtBZEE7QUFlQSxXQWZBLHFCQWVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsS0FqQkE7QUFrQkEsWUFsQkEsc0JBa0JBO0FBQUE7O0FBQ0E7QUFDQSxtQkFEQTtBQUVBO0FBRkEsU0FHQSxJQUhBLENBR0E7QUFDQTs7QUFDQTtBQUNBLE9BTkE7QUFPQTtBQTFCQTtBQXBCQSxHOzs7Ozs7Ozs7Ozs7QUNyQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSywyQkFBMkI7QUFDaEM7QUFDQTtBQUNBLHNCQUFzQixxQkFBcUI7QUFDM0MsZ0JBQWdCLGdDQUFnQztBQUNoRDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUCxpQkFBaUIsOEJBQThCO0FBQy9DLG1CQUFtQixrQ0FBa0MscUJBQXFCLEVBQUU7QUFDNUUscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw2QkFBNkI7QUFDM0QsZUFBZTtBQUNmO0FBQ0EsNEJBQTRCLHNCQUFzQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsNEJBQTRCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNEJBQTRCO0FBQzlDLG9CQUFvQiw2QkFBNkIsc0JBQXNCLEVBQUU7QUFDekUsdUJBQXVCLG9CQUFvQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaEVhO0FBQ2IsYUFBYSxtQkFBTyxDQUFDLDJGQUErQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1BhO0FBQ2I7QUFDQSxtQkFBTyxDQUFDLG1GQUEyQjtBQUNuQyxXQUFXLG1CQUFPLENBQUMscUZBQTRCO0FBQy9DLG9CQUFvQixtQkFBTyxDQUFDLHlGQUE4QjtBQUMxRCxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDbkQsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjtBQUN4QyxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDOUQsa0NBQWtDLG1CQUFPLENBQUMsdUhBQTZDOztBQUV2RjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFVBQVU7QUFDdkM7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsV0FBVztBQUN4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQSxjQUFjO0FBQ2QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzNFYTtBQUNiLFdBQVcsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDL0MsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDbkQsY0FBYyxtQkFBTyxDQUFDLGlGQUEwQjtBQUNoRCxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRW5EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BCYTtBQUNiO0FBQ0E7QUFDQSxXQUFXLG1CQUFPLENBQUMscUZBQTRCO0FBQy9DLGtCQUFrQixtQkFBTyxDQUFDLHFHQUFvQztBQUM5RCxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLGtCQUFrQixtQkFBTyxDQUFDLG1GQUEyQjtBQUNyRCxvQkFBb0IsbUJBQU8sQ0FBQyxxR0FBb0M7QUFDaEUsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxhQUFhLG1CQUFPLENBQUMscUZBQTRCO0FBQ2pELHVCQUF1QixtQkFBTyxDQUFDLHVGQUE2QjtBQUM1RCwwQkFBMEIsbUJBQU8sQ0FBQywrR0FBeUM7QUFDM0Usc0JBQXNCLG1CQUFPLENBQUMsdUdBQXFDOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDcEhhO0FBQ2IsZUFBZSxtQkFBTyxDQUFDLDZFQUF3Qjs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakJhO0FBQ2IsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjtBQUN4QyxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRW5EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOUJhO0FBQ2IsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjtBQUN4QyxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRW5EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1ZZO0FBQ2IsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjtBQUN4QyxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRW5EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDWFk7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLFdBQVcsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRTdDO0FBQ0E7QUFDQSxHQUFHLDJEQUEyRDtBQUM5RDtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNSWTtBQUNiLFdBQVcsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDL0Msa0JBQWtCLG1CQUFPLENBQUMscUdBQW9DO0FBQzlELG9DQUFvQyxtQkFBTyxDQUFDLCtIQUFpRDtBQUM3RixlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLHdCQUF3QixtQkFBTyxDQUFDLG1HQUFtQztBQUNuRSw2QkFBNkIsbUJBQU8sQ0FBQywyR0FBdUM7QUFDNUUseUJBQXlCLG1CQUFPLENBQUMsaUdBQWtDO0FBQ25FLHlCQUF5QixtQkFBTyxDQUFDLG1HQUFtQztBQUNwRSxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGlCQUFpQixtQkFBTyxDQUFDLG1HQUFtQztBQUM1RCxvQkFBb0IsbUJBQU8sQ0FBQyxxR0FBb0M7QUFDaEUsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNENBQTRDO0FBQ3JFO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EseUJBQXlCLG1CQUFtQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQzlHRDtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRyxzQ0FBc0MsbUJBQU8sQ0FBQyxpSEFBeUQ7QUFDdkcsb0NBQW9DLG1CQUFPLENBQUMsZ0RBQW1CO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUyxzQkFBc0IsK0JBQStCLGlCQUFpQixrQkFBa0IsMEVBQTBFLDJCQUEyQixHQUFHLG1EQUFtRCxrQkFBa0IsR0FBRyx3QkFBd0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyx5Q0FBeUMsZ0NBQWdDLG1CQUFtQixzQkFBc0IsR0FBRyw2Q0FBNkMsZ0JBQWdCLGlCQUFpQixHQUFHLGtDQUFrQyx5QkFBeUIsbUJBQW1CLEdBQUcsK0NBQStDLGdCQUFnQixzQkFBc0Isa0JBQWtCLHdCQUF3QixHQUFHLG1EQUFtRCxnQkFBZ0IsaUJBQWlCLHVCQUF1Qix1QkFBdUIsR0FBRyxxREFBcUQsd0JBQXdCLHNCQUFzQixtQkFBbUIsb0JBQW9CLEdBQUcsMkRBQTJELHFCQUFxQiw4Q0FBOEMsdUJBQXVCLG9CQUFvQixtQkFBbUIsc0JBQXNCLEdBQUcsZ0RBQWdELG1CQUFtQixHQUFHLG1EQUFtRCxrQkFBa0IsbUNBQW1DLHdCQUF3QixpQkFBaUIsc0JBQXNCLG9CQUFvQixvQkFBb0IsbUJBQW1CLEdBQUcsdURBQXVELGdCQUFnQix1QkFBdUIsR0FBRyxnQ0FBZ0MsNEJBQTRCLGdCQUFnQix3QkFBd0IsOEJBQThCLGlCQUFpQixxQkFBcUIsR0FBRyxpQ0FBaUMsdUJBQXVCLDhCQUE4QixpQkFBaUIsb0JBQW9CLGlCQUFpQixnQkFBZ0IsdUJBQXVCLHNCQUFzQix1QkFBdUIsR0FBRztBQUMxaEU7QUFDQTs7Ozs7Ozs7Ozs7O0FDVEE7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMscXhCQUF1YztBQUM3ZDtBQUNBLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsNkhBQWdFO0FBQ2xGLDhDQUE4QyxxQ0FBcUM7QUFDbkY7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7OztBQ1hmLGlCQUFpQixxQkFBdUIsa0I7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUcxRjtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUE4UixDQUFnQixzVUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FsVDtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy8xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJtaW5lLXBhZ2VcIj5cclxuICAgIDx2YW4tbmF2LWJhclxyXG4gICAgICB0aXRsZT1cIuaIkeeahFwiXHJcbiAgICAgIGxlZnQtYXJyb3dcclxuICAgICAgQGNsaWNrLWxlZnQ9XCIkcm91dGVyLmdvKC0xKVwiXHJcbiAgICAgIHN0eWxlPVwiYmFja2dyb3VuZDogbm9uZVwiXHJcbiAgICA+XHJcbiAgICA8L3Zhbi1uYXYtYmFyPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1pbmUtd3JhcHBlclwiPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRXcmFwcGVyXCIgQGNsaWNrPVwic2hvd1NldFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtbmFtZVwiPnt7IGZpcnN0TmFtZSB9fTwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnNcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogc3RhcnRcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+e3tpbmZvLm1jfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVwYXJ0bWVudFwiIHYtaWY9XCJpbmZvLnNzYm1cIj57e2luZm8uc3NibX19PC9zcGFuPjxici8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6IHJnYmEoMzEsIDUxLCA3MywgMC41KTtmb250LXNpemU6IDE0cHhcIj57e2luZm8udXNlcm5hbWV9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8dWwgY2xhc3M9XCJjb250ZW50VG9wXCI+XHJcbiAgICAgICAgPGxpIEBjbGljaz1cIm9uTG9nb3V0XCIgY2xhc3M9XCJsb2dvdXRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmc1wiPlxyXG4gICAgICAgICAgICDms6jplIDnmbvlvZVcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHtEaWFsb2csIFRvYXN0fSBmcm9tIFwidmFudFwiO1xyXG4gIGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiaW5kZXhcIixcclxuICAgIGNvbXBvbmVudHM6IHt9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpbmZvOiB7XHJcbiAgICAgICAgICBtYzogJzEnLFxyXG4gICAgICAgICAgc3NibTogJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b2tlbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJywpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICBmaXJzdE5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5mby5tYy5zcGxpdCgnJylbMF1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGFzeW5jIGdldFVzZXJJbmZvKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy96c2hiL2dldFVzZXJPYmplY3QnLCB7XHJcbiAgICAgICAgICAgIHRva2VuOiB0aGlzLnRva2VuLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5jb2RlID09PSAyMDApIHtcclxuICAgICAgICAgICAgdGhpcy5pbmZvID0gcmVzcG9uc2UuZGF0YS5kYXRhLnVzZXJWTztcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFRvYXN0KHJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIFRvYXN0KCfor7fmsYLlpLHotKXvvIzor7fph43or5UnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHNob3dTZXQoKSB7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6ICdzeXN0ZW1TZXQnfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uTG9nb3V0KCkge1xyXG4gICAgICAgIERpYWxvZy5jb25maXJtKHtcclxuICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgIG1lc3NhZ2U6ICfpgIDlh7rnmbvlvZUnXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKVxyXG4gICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuXHJcbiAgLm1pbmUtcGFnZSB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwifkAvYXNzZXRzL+aIkeeahOiDjOaZry5wbmdcIikgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbiAgICAudmFuLW5hdi1iYXIge1xyXG4gICAgICAvL2NvbG9yOiAjNDJiOTgzO1xyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuaG9tZS1oZWFkZXItd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDE1cHggN3B4IDE1cHg7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWluZS13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDgwcHggMzBweCAwO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgLmhlYWRXcmFwcGVyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hbWUge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICMxRjMzNDk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGVwYXJ0bWVudCB7XHJcbiAgICAgICAgcGFkZGluZzogMnB4IDdweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY4LCAxMjMsIDI1MiwgMC4yKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjNDQ3QkZDO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdWwuY29udGVudFRvcCB7XHJcbiAgICAgIG1hcmdpbjogNDBweCAwO1xyXG5cclxuICAgICAgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICMxRjMzNDk7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5sb2dvdXQge1xyXG4gICAgLmZzIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNkZGO1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2lyY2xlLW5hbWUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0N0JGQztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDcwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibWluZS1wYWdlXCIgfSxcbiAgICBbXG4gICAgICBfYyhcInZhbi1uYXYtYmFyXCIsIHtcbiAgICAgICAgc3RhdGljU3R5bGU6IHsgYmFja2dyb3VuZDogXCJub25lXCIgfSxcbiAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwi5oiR55qEXCIsIFwibGVmdC1hcnJvd1wiOiBcIlwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJjbGljay1sZWZ0XCI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5nbygtMSlcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1pbmUtd3JhcHBlclwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkV3JhcHBlclwiLCBvbjogeyBjbGljazogX3ZtLnNob3dTZXQgfSB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjaXJjbGUtbmFtZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmZpcnN0TmFtZSkpLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZnNcIixcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImp1c3RpZnktY29udGVudFwiOiBcInN0YXJ0XCIgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hbWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pbmZvLm1jKSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLmluZm8uc3NibVxuICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJkZXBhcnRtZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmluZm8uc3NibSkpLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMzEsIDUxLCA3MywgMC41KVwiLFxuICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIxNHB4XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmluZm8udXNlcm5hbWUpKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcInVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFRvcFwiIH0sIFtcbiAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibG9nb3V0XCIsIG9uOiB7IGNsaWNrOiBfdm0ub25Mb2dvdXQgfSB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZzXCIgfSwgW192bS5fdihcIiDms6jplIDnmbvlvZUgXCIpXSksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIndXNlIHN0cmljdCc7XG52YXIgY2hhckF0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy1tdWx0aWJ5dGUnKS5jaGFyQXQ7XG5cbi8vIGBBZHZhbmNlU3RyaW5nSW5kZXhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hZHZhbmNlc3RyaW5naW5kZXhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFMsIGluZGV4LCB1bmljb2RlKSB7XG4gIHJldHVybiBpbmRleCArICh1bmljb2RlID8gY2hhckF0KFMsIGluZGV4KS5sZW5ndGggOiAxKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YCBzaW5jZSBpdCdzIG1vdmVkIHRvIGVudHJ5IHBvaW50c1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5yZWdleHAuZXhlYycpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xudmFyIFJlZ0V4cFByb3RvdHlwZSA9IFJlZ0V4cC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgZXhlYywgRk9SQ0VELCBTSEFNKSB7XG4gIHZhciBTWU1CT0wgPSB3ZWxsS25vd25TeW1ib2woS0VZKTtcblxuICB2YXIgREVMRUdBVEVTX1RPX1NZTUJPTCA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3RyaW5nIG1ldGhvZHMgY2FsbCBzeW1ib2wtbmFtZWQgUmVnRXhwIG1ldGhvZHNcbiAgICB2YXIgTyA9IHt9O1xuICAgIE9bU1lNQk9MXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH07XG4gICAgcmV0dXJuICcnW0tFWV0oTykgIT09IDc7XG4gIH0pO1xuXG4gIHZhciBERUxFR0FURVNfVE9fRVhFQyA9IERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTeW1ib2wtbmFtZWQgUmVnRXhwIG1ldGhvZHMgY2FsbCAuZXhlY1xuICAgIHZhciBleGVjQ2FsbGVkID0gZmFsc2U7XG4gICAgdmFyIHJlID0gL2EvO1xuXG4gICAgaWYgKEtFWSA9PT0gJ3NwbGl0Jykge1xuICAgICAgLy8gV2UgY2FuJ3QgdXNlIHJlYWwgcmVnZXggaGVyZSBzaW5jZSBpdCBjYXVzZXMgZGVvcHRpbWl6YXRpb25cbiAgICAgIC8vIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uIGluIFY4XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzA2XG4gICAgICByZSA9IHt9O1xuICAgICAgLy8gUmVnRXhwW0BAc3BsaXRdIGRvZXNuJ3QgY2FsbCB0aGUgcmVnZXgncyBleGVjIG1ldGhvZCwgYnV0IGZpcnN0IGNyZWF0ZXNcbiAgICAgIC8vIGEgbmV3IG9uZS4gV2UgbmVlZCB0byByZXR1cm4gdGhlIHBhdGNoZWQgcmVnZXggd2hlbiBjcmVhdGluZyB0aGUgbmV3IG9uZS5cbiAgICAgIHJlLmNvbnN0cnVjdG9yID0ge307XG4gICAgICByZS5jb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlOyB9O1xuICAgICAgcmUuZmxhZ3MgPSAnJztcbiAgICAgIHJlW1NZTUJPTF0gPSAvLi9bU1lNQk9MXTtcbiAgICB9XG5cbiAgICByZS5leGVjID0gZnVuY3Rpb24gKCkge1xuICAgICAgZXhlY0NhbGxlZCA9IHRydWU7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgcmVbU1lNQk9MXSgnJyk7XG4gICAgcmV0dXJuICFleGVjQ2FsbGVkO1xuICB9KTtcblxuICBpZiAoXG4gICAgIURFTEVHQVRFU19UT19TWU1CT0wgfHxcbiAgICAhREVMRUdBVEVTX1RPX0VYRUMgfHxcbiAgICBGT1JDRURcbiAgKSB7XG4gICAgdmFyIG5hdGl2ZVJlZ0V4cE1ldGhvZCA9IC8uL1tTWU1CT0xdO1xuICAgIHZhciBtZXRob2RzID0gZXhlYyhTWU1CT0wsICcnW0tFWV0sIGZ1bmN0aW9uIChuYXRpdmVNZXRob2QsIHJlZ2V4cCwgc3RyLCBhcmcyLCBmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgdmFyICRleGVjID0gcmVnZXhwLmV4ZWM7XG4gICAgICBpZiAoJGV4ZWMgPT09IHJlZ2V4cEV4ZWMgfHwgJGV4ZWMgPT09IFJlZ0V4cFByb3RvdHlwZS5leGVjKSB7XG4gICAgICAgIGlmIChERUxFR0FURVNfVE9fU1lNQk9MICYmICFmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgICAgIC8vIFRoZSBuYXRpdmUgU3RyaW5nIG1ldGhvZCBhbHJlYWR5IGRlbGVnYXRlcyB0byBAQG1ldGhvZCAodGhpc1xuICAgICAgICAgIC8vIHBvbHlmaWxsZWQgZnVuY3Rpb24pLCBsZWFzaW5nIHRvIGluZmluaXRlIHJlY3Vyc2lvbi5cbiAgICAgICAgICAvLyBXZSBhdm9pZCBpdCBieSBkaXJlY3RseSBjYWxsaW5nIHRoZSBuYXRpdmUgQEBtZXRob2QgbWV0aG9kLlxuICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBjYWxsKG5hdGl2ZVJlZ0V4cE1ldGhvZCwgcmVnZXhwLCBzdHIsIGFyZzIpIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IGNhbGwobmF0aXZlTWV0aG9kLCBzdHIsIHJlZ2V4cCwgYXJnMikgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IGRvbmU6IGZhbHNlIH07XG4gICAgfSk7XG5cbiAgICBkZWZpbmVCdWlsdEluKFN0cmluZy5wcm90b3R5cGUsIEtFWSwgbWV0aG9kc1swXSk7XG4gICAgZGVmaW5lQnVpbHRJbihSZWdFeHBQcm90b3R5cGUsIFNZTUJPTCwgbWV0aG9kc1sxXSk7XG4gIH1cblxuICBpZiAoU0hBTSkgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KFJlZ0V4cFByb3RvdHlwZVtTWU1CT0xdLCAnc2hhbScsIHRydWUpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBSZWdFeHBFeGVjYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwZXhlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoUiwgUykge1xuICB2YXIgZXhlYyA9IFIuZXhlYztcbiAgaWYgKGlzQ2FsbGFibGUoZXhlYykpIHtcbiAgICB2YXIgcmVzdWx0ID0gY2FsbChleGVjLCBSLCBTKTtcbiAgICBpZiAocmVzdWx0ICE9PSBudWxsKSBhbk9iamVjdChyZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKGNsYXNzb2YoUikgPT09ICdSZWdFeHAnKSByZXR1cm4gY2FsbChyZWdleHBFeGVjLCBSLCBTKTtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1JlZ0V4cCNleGVjIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgcmVjZWl2ZXInKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSByZWdleHAvbm8tZW1wdHktY2FwdHVyaW5nLWdyb3VwLCByZWdleHAvbm8tZW1wdHktZ3JvdXAsIHJlZ2V4cC9uby1sYXp5LWVuZHMgLS0gdGVzdGluZyAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVnZXhwL25vLXVzZWxlc3MtcXVhbnRpZmllciAtLSB0ZXN0aW5nICovXG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgcmVnZXhwRmxhZ3MgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWZsYWdzJyk7XG52YXIgc3RpY2t5SGVscGVycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtc3RpY2t5LWhlbHBlcnMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJykuZ2V0O1xudmFyIFVOU1VQUE9SVEVEX0RPVF9BTEwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLXVuc3VwcG9ydGVkLWRvdC1hbGwnKTtcbnZhciBVTlNVUFBPUlRFRF9OQ0cgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLXVuc3VwcG9ydGVkLW5jZycpO1xuXG52YXIgbmF0aXZlUmVwbGFjZSA9IHNoYXJlZCgnbmF0aXZlLXN0cmluZy1yZXBsYWNlJywgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKTtcbnZhciBuYXRpdmVFeGVjID0gUmVnRXhwLnByb3RvdHlwZS5leGVjO1xudmFyIHBhdGNoZWRFeGVjID0gbmF0aXZlRXhlYztcbnZhciBjaGFyQXQgPSB1bmN1cnJ5VGhpcygnJy5jaGFyQXQpO1xudmFyIGluZGV4T2YgPSB1bmN1cnJ5VGhpcygnJy5pbmRleE9mKTtcbnZhciByZXBsYWNlID0gdW5jdXJyeVRoaXMoJycucmVwbGFjZSk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbnZhciBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgcmUxID0gL2EvO1xuICB2YXIgcmUyID0gL2IqL2c7XG4gIGNhbGwobmF0aXZlRXhlYywgcmUxLCAnYScpO1xuICBjYWxsKG5hdGl2ZUV4ZWMsIHJlMiwgJ2EnKTtcbiAgcmV0dXJuIHJlMS5sYXN0SW5kZXggIT09IDAgfHwgcmUyLmxhc3RJbmRleCAhPT0gMDtcbn0pKCk7XG5cbnZhciBVTlNVUFBPUlRFRF9ZID0gc3RpY2t5SGVscGVycy5CUk9LRU5fQ0FSRVQ7XG5cbi8vIG5vbnBhcnRpY2lwYXRpbmcgY2FwdHVyaW5nIGdyb3VwLCBjb3BpZWQgZnJvbSBlczUtc2hpbSdzIFN0cmluZyNzcGxpdCBwYXRjaC5cbnZhciBOUENHX0lOQ0xVREVEID0gLygpPz8vLmV4ZWMoJycpWzFdICE9PSB1bmRlZmluZWQ7XG5cbnZhciBQQVRDSCA9IFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyB8fCBOUENHX0lOQ0xVREVEIHx8IFVOU1VQUE9SVEVEX1kgfHwgVU5TVVBQT1JURURfRE9UX0FMTCB8fCBVTlNVUFBPUlRFRF9OQ0c7XG5cbmlmIChQQVRDSCkge1xuICBwYXRjaGVkRXhlYyA9IGZ1bmN0aW9uIGV4ZWMoc3RyaW5nKSB7XG4gICAgdmFyIHJlID0gdGhpcztcbiAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHJlKTtcbiAgICB2YXIgc3RyID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgICB2YXIgcmF3ID0gc3RhdGUucmF3O1xuICAgIHZhciByZXN1bHQsIHJlQ29weSwgbGFzdEluZGV4LCBtYXRjaCwgaSwgb2JqZWN0LCBncm91cDtcblxuICAgIGlmIChyYXcpIHtcbiAgICAgIHJhdy5sYXN0SW5kZXggPSByZS5sYXN0SW5kZXg7XG4gICAgICByZXN1bHQgPSBjYWxsKHBhdGNoZWRFeGVjLCByYXcsIHN0cik7XG4gICAgICByZS5sYXN0SW5kZXggPSByYXcubGFzdEluZGV4O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICB2YXIgZ3JvdXBzID0gc3RhdGUuZ3JvdXBzO1xuICAgIHZhciBzdGlja3kgPSBVTlNVUFBPUlRFRF9ZICYmIHJlLnN0aWNreTtcbiAgICB2YXIgZmxhZ3MgPSBjYWxsKHJlZ2V4cEZsYWdzLCByZSk7XG4gICAgdmFyIHNvdXJjZSA9IHJlLnNvdXJjZTtcbiAgICB2YXIgY2hhcnNBZGRlZCA9IDA7XG4gICAgdmFyIHN0ckNvcHkgPSBzdHI7XG5cbiAgICBpZiAoc3RpY2t5KSB7XG4gICAgICBmbGFncyA9IHJlcGxhY2UoZmxhZ3MsICd5JywgJycpO1xuICAgICAgaWYgKGluZGV4T2YoZmxhZ3MsICdnJykgPT09IC0xKSB7XG4gICAgICAgIGZsYWdzICs9ICdnJztcbiAgICAgIH1cblxuICAgICAgc3RyQ29weSA9IHN0cmluZ1NsaWNlKHN0ciwgcmUubGFzdEluZGV4KTtcbiAgICAgIC8vIFN1cHBvcnQgYW5jaG9yZWQgc3RpY2t5IGJlaGF2aW9yLlxuICAgICAgaWYgKHJlLmxhc3RJbmRleCA+IDAgJiYgKCFyZS5tdWx0aWxpbmUgfHwgcmUubXVsdGlsaW5lICYmIGNoYXJBdChzdHIsIHJlLmxhc3RJbmRleCAtIDEpICE9PSAnXFxuJykpIHtcbiAgICAgICAgc291cmNlID0gJyg/OiAnICsgc291cmNlICsgJyknO1xuICAgICAgICBzdHJDb3B5ID0gJyAnICsgc3RyQ29weTtcbiAgICAgICAgY2hhcnNBZGRlZCsrO1xuICAgICAgfVxuICAgICAgLy8gXig/ICsgcnggKyApIGlzIG5lZWRlZCwgaW4gY29tYmluYXRpb24gd2l0aCBzb21lIHN0ciBzbGljaW5nLCB0b1xuICAgICAgLy8gc2ltdWxhdGUgdGhlICd5JyBmbGFnLlxuICAgICAgcmVDb3B5ID0gbmV3IFJlZ0V4cCgnXig/OicgKyBzb3VyY2UgKyAnKScsIGZsYWdzKTtcbiAgICB9XG5cbiAgICBpZiAoTlBDR19JTkNMVURFRCkge1xuICAgICAgcmVDb3B5ID0gbmV3IFJlZ0V4cCgnXicgKyBzb3VyY2UgKyAnJCg/IVxcXFxzKScsIGZsYWdzKTtcbiAgICB9XG4gICAgaWYgKFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORykgbGFzdEluZGV4ID0gcmUubGFzdEluZGV4O1xuXG4gICAgbWF0Y2ggPSBjYWxsKG5hdGl2ZUV4ZWMsIHN0aWNreSA/IHJlQ29weSA6IHJlLCBzdHJDb3B5KTtcblxuICAgIGlmIChzdGlja3kpIHtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBtYXRjaC5pbnB1dCA9IHN0cmluZ1NsaWNlKG1hdGNoLmlucHV0LCBjaGFyc0FkZGVkKTtcbiAgICAgICAgbWF0Y2hbMF0gPSBzdHJpbmdTbGljZShtYXRjaFswXSwgY2hhcnNBZGRlZCk7XG4gICAgICAgIG1hdGNoLmluZGV4ID0gcmUubGFzdEluZGV4O1xuICAgICAgICByZS5sYXN0SW5kZXggKz0gbWF0Y2hbMF0ubGVuZ3RoO1xuICAgICAgfSBlbHNlIHJlLmxhc3RJbmRleCA9IDA7XG4gICAgfSBlbHNlIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgJiYgbWF0Y2gpIHtcbiAgICAgIHJlLmxhc3RJbmRleCA9IHJlLmdsb2JhbCA/IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoIDogbGFzdEluZGV4O1xuICAgIH1cbiAgICBpZiAoTlBDR19JTkNMVURFRCAmJiBtYXRjaCAmJiBtYXRjaC5sZW5ndGggPiAxKSB7XG4gICAgICAvLyBGaXggYnJvd3NlcnMgd2hvc2UgYGV4ZWNgIG1ldGhvZHMgZG9uJ3QgY29uc2lzdGVudGx5IHJldHVybiBgdW5kZWZpbmVkYFxuICAgICAgLy8gZm9yIE5QQ0csIGxpa2UgSUU4LiBOT1RFOiBUaGlzIGRvZXNuJ3Qgd29yayBmb3IgLyguPyk/L1xuICAgICAgY2FsbChuYXRpdmVSZXBsYWNlLCBtYXRjaFswXSwgcmVDb3B5LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoIC0gMjsgaSsrKSB7XG4gICAgICAgICAgaWYgKGFyZ3VtZW50c1tpXSA9PT0gdW5kZWZpbmVkKSBtYXRjaFtpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG1hdGNoICYmIGdyb3Vwcykge1xuICAgICAgbWF0Y2guZ3JvdXBzID0gb2JqZWN0ID0gY3JlYXRlKG51bGwpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBncm91cCA9IGdyb3Vwc1tpXTtcbiAgICAgICAgb2JqZWN0W2dyb3VwWzBdXSA9IG1hdGNoW2dyb3VwWzFdXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2g7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGF0Y2hlZEV4ZWM7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbi8vIGBSZWdFeHAucHJvdG90eXBlLmZsYWdzYCBnZXR0ZXIgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0LXJlZ2V4cC5wcm90b3R5cGUuZmxhZ3Ncbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdGhhdCA9IGFuT2JqZWN0KHRoaXMpO1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIGlmICh0aGF0Lmhhc0luZGljZXMpIHJlc3VsdCArPSAnZCc7XG4gIGlmICh0aGF0Lmdsb2JhbCkgcmVzdWx0ICs9ICdnJztcbiAgaWYgKHRoYXQuaWdub3JlQ2FzZSkgcmVzdWx0ICs9ICdpJztcbiAgaWYgKHRoYXQubXVsdGlsaW5lKSByZXN1bHQgKz0gJ20nO1xuICBpZiAodGhhdC5kb3RBbGwpIHJlc3VsdCArPSAncyc7XG4gIGlmICh0aGF0LnVuaWNvZGUpIHJlc3VsdCArPSAndSc7XG4gIGlmICh0aGF0LnVuaWNvZGVTZXRzKSByZXN1bHQgKz0gJ3YnO1xuICBpZiAodGhhdC5zdGlja3kpIHJlc3VsdCArPSAneSc7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG4vLyBiYWJlbC1taW5pZnkgYW5kIENsb3N1cmUgQ29tcGlsZXIgdHJhbnNwaWxlcyBSZWdFeHAoJ2EnLCAneScpIC0+IC9hL3kgYW5kIGl0IGNhdXNlcyBTeW50YXhFcnJvclxudmFyICRSZWdFeHAgPSBnbG9iYWxUaGlzLlJlZ0V4cDtcblxudmFyIFVOU1VQUE9SVEVEX1kgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciByZSA9ICRSZWdFeHAoJ2EnLCAneScpO1xuICByZS5sYXN0SW5kZXggPSAyO1xuICByZXR1cm4gcmUuZXhlYygnYWJjZCcpICE9PSBudWxsO1xufSk7XG5cbi8vIFVDIEJyb3dzZXIgYnVnXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTAwOFxudmFyIE1JU1NFRF9TVElDS1kgPSBVTlNVUFBPUlRFRF9ZIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICEkUmVnRXhwKCdhJywgJ3knKS5zdGlja3k7XG59KTtcblxudmFyIEJST0tFTl9DQVJFVCA9IFVOU1VQUE9SVEVEX1kgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03NzM2ODdcbiAgdmFyIHJlID0gJFJlZ0V4cCgnXnInLCAnZ3knKTtcbiAgcmUubGFzdEluZGV4ID0gMjtcbiAgcmV0dXJuIHJlLmV4ZWMoJ3N0cicpICE9PSBudWxsO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBCUk9LRU5fQ0FSRVQ6IEJST0tFTl9DQVJFVCxcbiAgTUlTU0VEX1NUSUNLWTogTUlTU0VEX1NUSUNLWSxcbiAgVU5TVVBQT1JURURfWTogVU5TVVBQT1JURURfWVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxuLy8gYmFiZWwtbWluaWZ5IGFuZCBDbG9zdXJlIENvbXBpbGVyIHRyYW5zcGlsZXMgUmVnRXhwKCcuJywgJ3MnKSAtPiAvLi9zIGFuZCBpdCBjYXVzZXMgU3ludGF4RXJyb3JcbnZhciAkUmVnRXhwID0gZ2xvYmFsVGhpcy5SZWdFeHA7XG5cbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgcmUgPSAkUmVnRXhwKCcuJywgJ3MnKTtcbiAgcmV0dXJuICEocmUuZG90QWxsICYmIHJlLnRlc3QoJ1xcbicpICYmIHJlLmZsYWdzID09PSAncycpO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbi8vIGJhYmVsLW1pbmlmeSBhbmQgQ2xvc3VyZSBDb21waWxlciB0cmFuc3BpbGVzIFJlZ0V4cCgnKD88YT5iKScsICdnJykgLT4gLyg/PGE+YikvZyBhbmQgaXQgY2F1c2VzIFN5bnRheEVycm9yXG52YXIgJFJlZ0V4cCA9IGdsb2JhbFRoaXMuUmVnRXhwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlID0gJFJlZ0V4cCgnKD88YT5iKScsICdnJyk7XG4gIHJldHVybiByZS5leGVjKCdiJykuZ3JvdXBzLmEgIT09ICdiJyB8fFxuICAgICdiJy5yZXBsYWNlKHJlLCAnJDxhPmMnKSAhPT0gJ2JjJztcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYycpO1xuXG4vLyBgUmVnRXhwLnByb3RvdHlwZS5leGVjYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS5leGVjXG4kKHsgdGFyZ2V0OiAnUmVnRXhwJywgcHJvdG86IHRydWUsIGZvcmNlZDogLy4vLmV4ZWMgIT09IGV4ZWMgfSwge1xuICBleGVjOiBleGVjXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG52YXIgc3RpY2t5SGVscGVycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtc3RpY2t5LWhlbHBlcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgVU5TVVBQT1JURURfWSA9IHN0aWNreUhlbHBlcnMuVU5TVVBQT1JURURfWTtcbnZhciBNQVhfVUlOVDMyID0gMHhGRkZGRkZGRjtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbi8vIENocm9tZSA1MSBoYXMgYSBidWdneSBcInNwbGl0XCIgaW1wbGVtZW50YXRpb24gd2hlbiBSZWdFeHAjZXhlYyAhPT0gbmF0aXZlRXhlY1xuLy8gV2VleCBKUyBoYXMgZnJvemVuIGJ1aWx0LWluIHByb3RvdHlwZXMsIHNvIHVzZSB0cnkgLyBjYXRjaCB3cmFwcGVyXG52YXIgU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlZ2V4cC9uby1lbXB0eS1ncm91cCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICB2YXIgcmUgPSAvKD86KS87XG4gIHZhciBvcmlnaW5hbEV4ZWMgPSByZS5leGVjO1xuICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gb3JpZ2luYWxFeGVjLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gIHZhciByZXN1bHQgPSAnYWInLnNwbGl0KHJlKTtcbiAgcmV0dXJuIHJlc3VsdC5sZW5ndGggIT09IDIgfHwgcmVzdWx0WzBdICE9PSAnYScgfHwgcmVzdWx0WzFdICE9PSAnYic7XG59KTtcblxudmFyIEJVR0dZID0gJ2FiYmMnLnNwbGl0KC8oYikqLylbMV0gPT09ICdjJyB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVnZXhwL25vLWVtcHR5LWdyb3VwIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gICd0ZXN0Jy5zcGxpdCgvKD86KS8sIC0xKS5sZW5ndGggIT09IDQgfHxcbiAgJ2FiJy5zcGxpdCgvKD86YWIpKi8pLmxlbmd0aCAhPT0gMiB8fFxuICAnLicuc3BsaXQoLyguPykoLj8pLykubGVuZ3RoICE9PSA0IHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWdleHAvbm8tZW1wdHktY2FwdHVyaW5nLWdyb3VwLCByZWdleHAvbm8tZW1wdHktZ3JvdXAgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgJy4nLnNwbGl0KC8oKSgpLykubGVuZ3RoID4gMSB8fFxuICAnJy5zcGxpdCgvLj8vKS5sZW5ndGg7XG5cbi8vIEBAc3BsaXQgbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdzcGxpdCcsIGZ1bmN0aW9uIChTUExJVCwgbmF0aXZlU3BsaXQsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICB2YXIgaW50ZXJuYWxTcGxpdCA9ICcwJy5zcGxpdCh1bmRlZmluZWQsIDApLmxlbmd0aCA/IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgcmV0dXJuIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwID8gW10gOiBjYWxsKG5hdGl2ZVNwbGl0LCB0aGlzLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgfSA6IG5hdGl2ZVNwbGl0O1xuXG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc3BsaXRgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zcGxpdFxuICAgIGZ1bmN0aW9uIHNwbGl0KHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBzcGxpdHRlciA9IGlzTnVsbE9yVW5kZWZpbmVkKHNlcGFyYXRvcikgPyB1bmRlZmluZWQgOiBnZXRNZXRob2Qoc2VwYXJhdG9yLCBTUExJVCk7XG4gICAgICByZXR1cm4gc3BsaXR0ZXJcbiAgICAgICAgPyBjYWxsKHNwbGl0dGVyLCBzZXBhcmF0b3IsIE8sIGxpbWl0KVxuICAgICAgICA6IGNhbGwoaW50ZXJuYWxTcGxpdCwgdG9TdHJpbmcoTyksIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNwbGl0XG4gICAgLy9cbiAgICAvLyBOT1RFOiBUaGlzIGNhbm5vdCBiZSBwcm9wZXJseSBwb2x5ZmlsbGVkIGluIGVuZ2luZXMgdGhhdCBkb24ndCBzdXBwb3J0XG4gICAgLy8gdGhlICd5JyBmbGFnLlxuICAgIGZ1bmN0aW9uIChzdHJpbmcsIGxpbWl0KSB7XG4gICAgICB2YXIgcnggPSBhbk9iamVjdCh0aGlzKTtcbiAgICAgIHZhciBTID0gdG9TdHJpbmcoc3RyaW5nKTtcblxuICAgICAgaWYgKCFCVUdHWSkge1xuICAgICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKGludGVybmFsU3BsaXQsIHJ4LCBTLCBsaW1pdCwgaW50ZXJuYWxTcGxpdCAhPT0gbmF0aXZlU3BsaXQpO1xuICAgICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHJ4LCBSZWdFeHApO1xuICAgICAgdmFyIHVuaWNvZGVNYXRjaGluZyA9IHJ4LnVuaWNvZGU7XG4gICAgICB2YXIgZmxhZ3MgPSAocnguaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAocngubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChyeC51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChVTlNVUFBPUlRFRF9ZID8gJ2cnIDogJ3knKTtcbiAgICAgIC8vIF4oPyArIHJ4ICsgKSBpcyBuZWVkZWQsIGluIGNvbWJpbmF0aW9uIHdpdGggc29tZSBTIHNsaWNpbmcsIHRvXG4gICAgICAvLyBzaW11bGF0ZSB0aGUgJ3knIGZsYWcuXG4gICAgICB2YXIgc3BsaXR0ZXIgPSBuZXcgQyhVTlNVUFBPUlRFRF9ZID8gJ14oPzonICsgcnguc291cmNlICsgJyknIDogcngsIGZsYWdzKTtcbiAgICAgIHZhciBsaW0gPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gTUFYX1VJTlQzMiA6IGxpbWl0ID4+PiAwO1xuICAgICAgaWYgKGxpbSA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgaWYgKFMubGVuZ3RoID09PSAwKSByZXR1cm4gcmVnRXhwRXhlYyhzcGxpdHRlciwgUykgPT09IG51bGwgPyBbU10gOiBbXTtcbiAgICAgIHZhciBwID0gMDtcbiAgICAgIHZhciBxID0gMDtcbiAgICAgIHZhciBBID0gW107XG4gICAgICB3aGlsZSAocSA8IFMubGVuZ3RoKSB7XG4gICAgICAgIHNwbGl0dGVyLmxhc3RJbmRleCA9IFVOU1VQUE9SVEVEX1kgPyAwIDogcTtcbiAgICAgICAgdmFyIHogPSByZWdFeHBFeGVjKHNwbGl0dGVyLCBVTlNVUFBPUlRFRF9ZID8gc3RyaW5nU2xpY2UoUywgcSkgOiBTKTtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB6ID09PSBudWxsIHx8XG4gICAgICAgICAgKGUgPSBtaW4odG9MZW5ndGgoc3BsaXR0ZXIubGFzdEluZGV4ICsgKFVOU1VQUE9SVEVEX1kgPyBxIDogMCkpLCBTLmxlbmd0aCkpID09PSBwXG4gICAgICAgICkge1xuICAgICAgICAgIHEgPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgcSwgdW5pY29kZU1hdGNoaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwdXNoKEEsIHN0cmluZ1NsaWNlKFMsIHAsIHEpKTtcbiAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gei5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIHB1c2goQSwgeltpXSk7XG4gICAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHEgPSBwID0gZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcHVzaChBLCBzdHJpbmdTbGljZShTLCBwKSk7XG4gICAgICByZXR1cm4gQTtcbiAgICB9XG4gIF07XG59LCBCVUdHWSB8fCAhU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDLCBVTlNVUFBPUlRFRF9ZKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiQC9hc3NldHMv5oiR55qE6IOM5pmvLnBuZ1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4ubWluZS1wYWdlW2RhdGEtdi0zMzQ4YjJiMF0ge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuLm1pbmUtcGFnZSAudmFuLW5hdi1iYXJbZGF0YS12LTMzNDhiMmIwXTo6YWZ0ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmZzW2RhdGEtdi0zMzQ4YjJiMF0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhvbWUtaGVhZGVyLXdyYXBwZXJbZGF0YS12LTMzNDhiMmIwXSB7XFxuICBwYWRkaW5nOiAyNHB4IDE1cHggN3B4IDE1cHg7XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uaG9tZS1oZWFkZXItd3JhcHBlciBpbWdbZGF0YS12LTMzNDhiMmIwXSB7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG59XFxuLm1pbmUtd3JhcHBlcltkYXRhLXYtMzM0OGIyYjBdIHtcXG4gIHBhZGRpbmc6IDgwcHggMzBweCAwO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbi5taW5lLXdyYXBwZXIgLmhlYWRXcmFwcGVyW2RhdGEtdi0zMzQ4YjJiMF0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubWluZS13cmFwcGVyIC5oZWFkV3JhcHBlciBpbWdbZGF0YS12LTMzNDhiMmIwXSB7XFxuICB3aWR0aDogNzBweDtcXG4gIGhlaWdodDogNzBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLm1pbmUtd3JhcHBlciAuaGVhZFdyYXBwZXIgLm5hbWVbZGF0YS12LTMzNDhiMmIwXSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzFGMzM0OTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLm1pbmUtd3JhcHBlciAuaGVhZFdyYXBwZXIgLmRlcGFydG1lbnRbZGF0YS12LTMzNDhiMmIwXSB7XFxuICBwYWRkaW5nOiAycHggN3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2OCwgMTIzLCAyNTIsIDAuMik7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogIzQ0N0JGQztcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbn1cXG4ubWluZS13cmFwcGVyIHVsLmNvbnRlbnRUb3BbZGF0YS12LTMzNDhiMmIwXSB7XFxuICBtYXJnaW46IDQwcHggMDtcXG59XFxuLm1pbmUtd3JhcHBlciB1bC5jb250ZW50VG9wIGxpW2RhdGEtdi0zMzQ4YjJiMF0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBsaW5lLWhlaWdodDogNjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjMUYzMzQ5O1xcbn1cXG4ubWluZS13cmFwcGVyIHVsLmNvbnRlbnRUb3AgbGkgaW1nW2RhdGEtdi0zMzQ4YjJiMF0ge1xcbiAgd2lkdGg6IDE2cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5sb2dvdXQgLmZzW2RhdGEtdi0zMzQ4YjJiMF0ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNkZGO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuLmNpcmNsZS1uYW1lW2RhdGEtdi0zMzQ4YjJiMF0ge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0N0JGQztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG4gIGhlaWdodDogNzBweDtcXG4gIHdpZHRoOiA3MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDcwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzM0OGIyYjAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIwNzQyNjllZVwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMzNDhiMmIwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzM0OGIyYjAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcv5oiR55qE6IOM5pmvLnBuZ1wiOyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMzNDhiMmIwJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMzNDhiMmIwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMzM0OGIyYjBcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwTW9ja1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczMzQ4YjJiMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczMzQ4YjJiMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczMzQ4YjJiMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMzNDhiMmIwJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzMzNDhiMmIwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvbWluZS9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMzQ4YjJiMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI5ZDE3Zjc5Ni12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMzQ4YjJiMCZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWpzb24tcmVwbGFjZXItZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5jb25jYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5qc29uLnN0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2xldmVsMC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9sZXZlbDIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbGV2ZWwzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2xldmVsNC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9sZXZlbDUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbGV2ZWw2LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvbG9hZGluZ19zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXBsb2FkLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy91dGlscy5qcyJdLCJuYW1lcyI6WyJ1cGxvYWQiLCJ1cmwiLCJmaWxlVXJpIiwicGFyYW1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJpbmRleE9mIiwidXBsb2FkZXIiLCJGaWxlVXRpbHMiLCJVcGxvYWRlciIsInByb2dyZXNzYmFyIiwic2hvd1Byb2dyZXNzYmFyIiwib25TdWNjZXNzIiwicmVzcG9uc2UiLCJzZXRWYWx1ZSIsImhpZGUiLCJvbkZhaWwiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJvblByb2dyZXNzIiwicHJvZ3Jlc3MiLCJwZXJjZW50IiwibG9hZGVkIiwidG90YWwiLCJ0b0ZpeGVkIiwid2luZG93IiwibmF2aWdhdG9yIiwiZGlhbG9nc1BsdXMiLCJwcm9ncmVzc1N0YXJ0IiwiaXNFeHBpcmUiLCJ0aW1lIiwiZXhwaXJlIiwic3RvcmUiLCJzdGF0ZSIsInVzZXIiLCJpc0F1dG9Mb2dpbiIsIkRhdGUiLCJub3ciLCJpbWdKdWdkZUxldmVsIiwidmFsdWUiLCJsZXZlbDAiLCJsZXZlbDIiLCJsZXZlbDMiLCJsZXZlbDQiLCJsZXZlbDUiLCJsZXZlbDYiLCJ0ZXh0Q29sb3JzIiwiQVFJSnVnZGVCZ0NvbG9yIiwiQVFJSnVnZGVUZXh0Q29sb3IiLCJnZXRTZWN0aW9uVGltZSIsIm5vd0RhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsImhvdXJzIiwiZ2V0SG91cnMiLCJvcGVuQnJvd3NlciIsIm9wZW5VcmwiLCJyZWYiLCJmaXJzdCIsImNvcmRvdmEiLCJJbkFwcEJyb3dzZXIiLCJvcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY2xvc2UiLCJpbnNlcnRDU1MiLCJjb2RlIiwibG9hZGluZ19zdHlsZSIsImV4ZWN1dGVTY3JpcHQiLCJtZXNzYWdlT2JqIiwiZGF0YSIsIm1ldGhvZCIsImNvcmRvdmFfdXBsb2FkIiwiY29yZG92YV9kb3dubG9hZCIsImNvcmRvdmFfZmlsZV9vcGVuIiwiY29yZG92YV9maWxlX3NlbGVjdCIsImNvcmRvdmFfY2FtZXJhIiwiY29yZG92YV9sb2NhdGUiLCJjb3Jkb3ZhX3NjYW4iLCJjb3Jkb3ZhX25hdmlnYXRpb24iLCJtc2dPYmoiLCJjYWxsYmFjayIsImVycm9yQ2FsbGJhY2siLCJ0aGVuIiwic3VjY2VzcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJjYXRjaCIsImUiLCJuYW1lIiwid2l0aENyZWRlbnRpYWxzIiwiZG93bmxvYWQiLCJmaWxlUGF0aCIsImZpbGV0eXBlIiwic3Vic3RyaW5nIiwibGFzdEluZGV4T2YiLCJwbHVnaW5zIiwiZmlsZU9wZW5lcjIiLCJnZXRNSU1FVHlwZSIsImNob29zZUZpbGUiLCJjYW1lcmEiLCJnZXRQaWN0dXJlIiwic3VjIiwibG9jYXRlIiwibG9jYXRpb24iLCJiYXJjb2RlU2Nhbm5lciIsInNjYW4iLCJyZXN1bHQiLCJ0ZXh0IiwicHJlZmVyRnJvbnRDYW1lcmEiLCJzaG93RmxpcENhbWVyYUJ1dHRvbiIsInNob3dUb3JjaEJ1dHRvbiIsInRvcmNoT24iLCJwcm9tcHQiLCJyZXN1bHREaXNwbGF5RHVyYXRpb24iLCJmb3JtYXRzIiwib3JpZW50YXRpb24iLCJkaXNhYmxlQW5pbWF0aW9ucyIsImRpc2FibGVTdWNjZXNzQmVlcCIsImxvY2FsTmF2aWdhdGlvbiIsInN0YXJ0IiwiYWxlcnQiLCJ0eXBlIiwidG9MbmciLCJKRCIsInRvTGF0IiwiV0QiLCJteUxuZyIsIkxvbmdpdHVkZSIsIm15TGF0IiwiTGF0aXR1ZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0Esd0NBQXdDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1BhO0FBQ2Isa0JBQWtCLG1CQUFPLENBQUMscUdBQW9DO0FBQzlELGNBQWMsbUJBQU8sQ0FBQywyRUFBdUI7QUFDN0MsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ25ELGNBQWMsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDaEQsZUFBZSxtQkFBTyxDQUFDLDZFQUF3Qjs7QUFFL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixlQUFlO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdCYTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjtBQUN4QyxjQUFjLG1CQUFPLENBQUMsMkVBQXVCO0FBQzdDLGVBQWUsbUJBQU8sQ0FBQyw2RUFB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LEtBcEJEO0FBd0JELEdBM0JELENBMkJFLE9BQU80RSxDQUFQLEVBQVU7QUFDVjNFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZMEUsQ0FBWjtBQUNEO0FBQ0YsQyIsImZpbGUiOiJqcy8xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDB4MUZGRkZGRkZGRkZGRkY7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID4gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgJFR5cGVFcnJvcignTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG5cbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHJlcGxhY2VyKSB7XG4gIGlmIChpc0NhbGxhYmxlKHJlcGxhY2VyKSkgcmV0dXJuIHJlcGxhY2VyO1xuICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXR1cm47XG4gIHZhciByYXdMZW5ndGggPSByZXBsYWNlci5sZW5ndGg7XG4gIHZhciBrZXlzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmF3TGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZWxlbWVudCA9IHJlcGxhY2VyW2ldO1xuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PSAnc3RyaW5nJykgcHVzaChrZXlzLCBlbGVtZW50KTtcbiAgICBlbHNlIGlmICh0eXBlb2YgZWxlbWVudCA9PSAnbnVtYmVyJyB8fCBjbGFzc29mKGVsZW1lbnQpID09PSAnTnVtYmVyJyB8fCBjbGFzc29mKGVsZW1lbnQpID09PSAnU3RyaW5nJykgcHVzaChrZXlzLCB0b1N0cmluZyhlbGVtZW50KSk7XG4gIH1cbiAgdmFyIGtleXNMZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIHJvb3QgPSB0cnVlO1xuICByZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICBpZiAocm9vdCkge1xuICAgICAgcm9vdCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAoaXNBcnJheSh0aGlzKSkgcmV0dXJuIHZhbHVlO1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwga2V5c0xlbmd0aDsgaisrKSBpZiAoa2V5c1tqXSA9PT0ga2V5KSByZXR1cm4gdmFsdWU7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlcicpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXY4LXZlcnNpb24nKTtcblxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFID0gd2VsbEtub3duU3ltYm9sKCdpc0NvbmNhdFNwcmVhZGFibGUnKTtcblxuLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4vLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3OVxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgPSBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBhcnJheSA9IFtdO1xuICBhcnJheVtJU19DT05DQVRfU1BSRUFEQUJMRV0gPSBmYWxzZTtcbiAgcmV0dXJuIGFycmF5LmNvbmNhdCgpWzBdICE9PSBhcnJheTtcbn0pO1xuXG52YXIgaXNDb25jYXRTcHJlYWRhYmxlID0gZnVuY3Rpb24gKE8pIHtcbiAgaWYgKCFpc09iamVjdChPKSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgc3ByZWFkYWJsZSA9IE9bSVNfQ09OQ0FUX1NQUkVBREFCTEVdO1xuICByZXR1cm4gc3ByZWFkYWJsZSAhPT0gdW5kZWZpbmVkID8gISFzcHJlYWRhYmxlIDogaXNBcnJheShPKTtcbn07XG5cbnZhciBGT1JDRUQgPSAhSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCB8fCAhYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnY29uY2F0Jyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuY29uY2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmNvbmNhdFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQGlzQ29uY2F0U3ByZWFkYWJsZSBhbmQgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgYXJpdHk6IDEsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgY29uY2F0OiBmdW5jdGlvbiBjb25jYXQoYXJnKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcbiAgICB2YXIgbiA9IDA7XG4gICAgdmFyIGksIGssIGxlbmd0aCwgbGVuLCBFO1xuICAgIGZvciAoaSA9IC0xLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIEUgPSBpID09PSAtMSA/IE8gOiBhcmd1bWVudHNbaV07XG4gICAgICBpZiAoaXNDb25jYXRTcHJlYWRhYmxlKEUpKSB7XG4gICAgICAgIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKEUpO1xuICAgICAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobiArIGxlbik7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBsZW47IGsrKywgbisrKSBpZiAoayBpbiBFKSBjcmVhdGVQcm9wZXJ0eShBLCBuLCBFW2tdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihuICsgMSk7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KEEsIG4rKywgRSk7XG4gICAgICB9XG4gICAgfVxuICAgIEEubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xudmFyIGdldFJlcGxhY2VyRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWpzb24tcmVwbGFjZXItZnVuY3Rpb24nKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcblxudmFyICRTdHJpbmcgPSBTdHJpbmc7XG52YXIgJHN0cmluZ2lmeSA9IGdldEJ1aWx0SW4oJ0pTT04nLCAnc3RyaW5naWZ5Jyk7XG52YXIgZXhlYyA9IHVuY3VycnlUaGlzKC8uLy5leGVjKTtcbnZhciBjaGFyQXQgPSB1bmN1cnJ5VGhpcygnJy5jaGFyQXQpO1xudmFyIGNoYXJDb2RlQXQgPSB1bmN1cnJ5VGhpcygnJy5jaGFyQ29kZUF0KTtcbnZhciByZXBsYWNlID0gdW5jdXJyeVRoaXMoJycucmVwbGFjZSk7XG52YXIgbnVtYmVyVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcygxLjAudG9TdHJpbmcpO1xuXG52YXIgdGVzdGVyID0gL1tcXHVEODAwLVxcdURGRkZdL2c7XG52YXIgbG93ID0gL15bXFx1RDgwMC1cXHVEQkZGXSQvO1xudmFyIGhpID0gL15bXFx1REMwMC1cXHVERkZGXSQvO1xuXG52YXIgV1JPTkdfU1lNQk9MU19DT05WRVJTSU9OID0gIU5BVElWRV9TWU1CT0wgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgc3ltYm9sID0gZ2V0QnVpbHRJbignU3ltYm9sJykoJ3N0cmluZ2lmeSBkZXRlY3Rpb24nKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgcmV0dXJuICRzdHJpbmdpZnkoW3N5bWJvbF0pICE9PSAnW251bGxdJ1xuICAgIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAgIHx8ICRzdHJpbmdpZnkoeyBhOiBzeW1ib2wgfSkgIT09ICd7fSdcbiAgICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICAgIHx8ICRzdHJpbmdpZnkoT2JqZWN0KHN5bWJvbCkpICE9PSAne30nO1xufSk7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXdlbGwtZm9ybWVkLXN0cmluZ2lmeVxudmFyIElMTF9GT1JNRURfVU5JQ09ERSA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICRzdHJpbmdpZnkoJ1xcdURGMDZcXHVEODM0JykgIT09ICdcIlxcXFx1ZGYwNlxcXFx1ZDgzNFwiJ1xuICAgIHx8ICRzdHJpbmdpZnkoJ1xcdURFQUQnKSAhPT0gJ1wiXFxcXHVkZWFkXCInO1xufSk7XG5cbnZhciBzdHJpbmdpZnlXaXRoU3ltYm9sc0ZpeCA9IGZ1bmN0aW9uIChpdCwgcmVwbGFjZXIpIHtcbiAgdmFyIGFyZ3MgPSBhcnJheVNsaWNlKGFyZ3VtZW50cyk7XG4gIHZhciAkcmVwbGFjZXIgPSBnZXRSZXBsYWNlckZ1bmN0aW9uKHJlcGxhY2VyKTtcbiAgaWYgKCFpc0NhbGxhYmxlKCRyZXBsYWNlcikgJiYgKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gIGFyZ3NbMV0gPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIC8vIHNvbWUgb2xkIGltcGxlbWVudGF0aW9ucyAobGlrZSBXZWJLaXQpIGNvdWxkIHBhc3MgbnVtYmVycyBhcyBrZXlzXG4gICAgaWYgKGlzQ2FsbGFibGUoJHJlcGxhY2VyKSkgdmFsdWUgPSBjYWxsKCRyZXBsYWNlciwgdGhpcywgJFN0cmluZyhrZXkpLCB2YWx1ZSk7XG4gICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgfTtcbiAgcmV0dXJuIGFwcGx5KCRzdHJpbmdpZnksIG51bGwsIGFyZ3MpO1xufTtcblxudmFyIGZpeElsbEZvcm1lZCA9IGZ1bmN0aW9uIChtYXRjaCwgb2Zmc2V0LCBzdHJpbmcpIHtcbiAgdmFyIHByZXYgPSBjaGFyQXQoc3RyaW5nLCBvZmZzZXQgLSAxKTtcbiAgdmFyIG5leHQgPSBjaGFyQXQoc3RyaW5nLCBvZmZzZXQgKyAxKTtcbiAgaWYgKChleGVjKGxvdywgbWF0Y2gpICYmICFleGVjKGhpLCBuZXh0KSkgfHwgKGV4ZWMoaGksIG1hdGNoKSAmJiAhZXhlYyhsb3csIHByZXYpKSkge1xuICAgIHJldHVybiAnXFxcXHUnICsgbnVtYmVyVG9TdHJpbmcoY2hhckNvZGVBdChtYXRjaCwgMCksIDE2KTtcbiAgfSByZXR1cm4gbWF0Y2g7XG59O1xuXG5pZiAoJHN0cmluZ2lmeSkge1xuICAvLyBgSlNPTi5zdHJpbmdpZnlgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWpzb24uc3RyaW5naWZ5XG4gICQoeyB0YXJnZXQ6ICdKU09OJywgc3RhdDogdHJ1ZSwgYXJpdHk6IDMsIGZvcmNlZDogV1JPTkdfU1lNQk9MU19DT05WRVJTSU9OIHx8IElMTF9GT1JNRURfVU5JQ09ERSB9LCB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCwgcmVwbGFjZXIsIHNwYWNlKSB7XG4gICAgICB2YXIgYXJncyA9IGFycmF5U2xpY2UoYXJndW1lbnRzKTtcbiAgICAgIHZhciByZXN1bHQgPSBhcHBseShXUk9OR19TWU1CT0xTX0NPTlZFUlNJT04gPyBzdHJpbmdpZnlXaXRoU3ltYm9sc0ZpeCA6ICRzdHJpbmdpZnksIG51bGwsIGFyZ3MpO1xuICAgICAgcmV0dXJuIElMTF9GT1JNRURfVU5JQ09ERSAmJiB0eXBlb2YgcmVzdWx0ID09ICdzdHJpbmcnID8gcmVwbGFjZShyZXN1bHQsIHRlc3RlciwgZml4SWxsRm9ybWVkKSA6IHJlc3VsdDtcbiAgICB9XG4gIH0pO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRlFBQUFBa0NBWUFBQUFYU1IwQUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQU5QU1VSQlZHaUIzWnEvVDl0QUZNZS9mc0lKWW1tUk9qQlhGUFlPU04xTC80QU9MQWdzMnIxYjEvNEQzYkt4SURHU0RHVmdvdDFic2ZRUGFOVUZKQ3VPSWVrNUNkaE8vTG8wbGZHdjJNblpYUHBaa3R6MytlN2UzWHYyMDhVYUlweWVucjRjajhmdmlPZ0ZNei9TZFYwSEFFM1RFUDVNYWxOUlM3TEp5K1hsSmZyOWZyaUpBZndFY01iTXpZT0RnMi9SYSs2TjBHcTF6bXUxMnJZTVIyYlZxaHAzR3AxT0I3WnRUek03MHpUdGcyRVkzLy8xUC9seWNuTHlvMTZ2cnhlZHBJcFJtVmRMdzNFY1hGMWRaZHFFMFRUdHRXRVlud0NBQUtEWmJKN1hhclgxaVFFejMvc01FOVhDTmlwcGVYeEp3dmQ5bUthWnl6WTB4dEhoNGFFT0FOUm9OT3BMUzB2YnNod3Bjd0hLMk9nb3BtbGlQQjZuNmlrOFhsNWVmZzhBdExhMjFwcG5JbFV2UUptYmFWa1dCb05CckQwUHpQd1dBQ2dJZ28yMFFTTVhTSGRFbFdnR0FDRUVycSt2WTdZRmVIcDhmTHhGdXE1dkx0cml5SjZUNTNtRjc1c3BiRkZWRVpDbXFiQ1pwbWtpQ0lKWWUxR0NJSGhDRCtHSUtxbk96TEFzQzhQaE1HWTdLNVExMkx4YW1zMnNtdXdORTBMZzV1WW1OdTQ4MENJdGdDd05BRHpQUTd2ZGp2a3dMNGtwUDg5a0Z5WFMyKzIybFB0bWxOaERTZFVGa0tsMU9oM2MzdDdHeHBVQmhYK291Z0JGdEduemRSd0h2VjR2WmkrTGV5bWZOQkdWRjZkbzM2N3J3cktzV0I4eVNheEQvK2RVVHhwWEpxa1BwYlRKWm1rcVI3TnQyN2k3dTR2Wnk2YlVPbFNWVkJkQ1FBZ1I2Nk1NcUV3blo5VmticGpydW5sTzNxVVJleWhGSjZSQ3hNNnowWE9lSUJXbWxEcFVsUWVYYmR0d1hUZldSNWxNUFJ5Wm9HSTZaMm1PNDBUL3Nhd0VpamFvbE02emJyVHJ1dElQUGZJaXRRNVZJZEtaK2NFV0U1QmNoMlpwVlVWenQ5dUY3L3NKcmxhRGtuWG9ySkhlNy9kbi9wTk5Gcm5yVU5WVDNmTzhVZzg5OGtMTTdDOTZxak16dXQxdWhwdlZRRVEyQWZnTnFKL09XVnF2MThOb05NcDB0aUl1aUptL3FwN09XZHBnTUNqdHNMZ2d2d3pEdUNBaWFvUmJWVXZuTE0zenZNb09QWEp3QkFDMHU3djdoWmsvTDFxcU03TktpOWxiV1ZuNUNQd3RtL2IyOWw0RlFmQnprVkpkQ0tIS2ZST2FwcjNaMmRueGdGQWR1cisvL3l3YXFSTlVTL1hoY0ZqSllYRU96a2FqMGZQSnU2RkE1QTFtQUdnMEd2WFYxZFVXZ0EwaTJsVHRiV1hmOXgreTNtUk1lU1g4RDdGM0RsekhJeWNjQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRlFBQUFBa0NBWUFBQUFYU1IwQUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQVdBU1VSQlZHaUJ6VnBMYnh4RkVQNnFkeXhISmlJZ1JRSnhSQ2E1SUNFNFJPTEdnU0RseWcvZ0FCSW5GRTVJblBnRDNQZ0JEckxFSlQ1dzhZV1FHNUVTaGFDWUNMQmk3TFhsUitLMVk1TEYrQkhidThWaFpuYTZlNnA3dW1jZlRrbVdwbDFUMVRYZmZQWFFiQk1zK2VCci9uRHZtSytPS2J6ZlpadzdlNGJIaUFBaWdBQVFzWGF0L1dWcjVkR1YxK3kvRjVrL2g4NjA0OHI5Rk5sUDY1ZWY1aEtzUFRHTUdJUkZNR2FwZ2V1dDcrbU9iV1BjL2U2WDNSc3ZUL0RscW9mc2dXcnBWS1ZkT0tpcTBpNGNWUHNsaDhpOXBRYm1scFgzSGdabVFmaG1lNXJ1bHdCOSs0dnUzNisreEpOMWdxOEhwQVZxWDBBNlFMVmpDd1IxWlV2aDVvTkdHUElwaWg5dlRkT1BRTG9mM3JuYXZYRnVnaWNaQUxQMkI4YzFwOXhuVGw5VG5KMTBuZm1LdHBOMEJNN29VNG9OeGRvbHV3ZUVYK1lqd0V6M21zTG5QQVlBYXZJS2owK004MlZwVS9GQjhvQTRmVFd4ZHBJdURZcWk3Vnc2TUFXOUFFbHV6VGZ3L0RnT1R3Q3Z2SGFJcndCQVRVenlUR3p3TUhTZTRBTjh3dEJSc0owSUpQVFloTGdFTzExK1hXeGc0NS9JemxYcytSa0FKTWNkWERBY1UvNmsxald5MnBPenl0QVJRT3kwazN6bVlYTkpwLzNERTR1dDA3Y3ZkTGJDRVFzQnpaYkM3eXYrSmxRaGI3NytDVjlLenA3aGkwWGFPWUxOZENVZ3lXL24waEVWN0l5eGszU1VaNHpUVHI5Sjl2bnZQdUZXYk4wVXBOUEZwYVNLblhwY2ZyYllCdVY3RFlaTFBnRVRoQXFRZTlzS09wK2RyYnMxMzhEUkNmb1dBczRuRE9zcDlaU01acEtkejRXdWg0L3ZJWTIxTzExN3NRV1dxalFsaERLQ3RHNCtmbHF2YmtxU01kUU12citVTklPdlRrbWZ6M0s2NnRqRWxRY0xWQURMbXdwL3J2VlZOMHVTRk1BUktBUFZtWktSakxCN1REMmY2WVc3SWNiNHpId3gwTjRuM0Y3b3YyN2FrakswUjlEcUFoNmlveXg0dGhoUjF5Y3hnZTM2WExjaGdzREV1TFBRd0VrSEE1Y2szNGd0UmtReFNRdmVURW01UGt0Mk1wQjZiTzc2SERwWkFHbHN2eTAxc05VZVhOM1VSVXQ1UFNBSHFJNWdld0dMS1NsMDdJcDB0Y01vZEFiVmduM3EyeTl2RVI0K0dtemQxS1dYOG9BandFQW1sWUEwN0FSUUhUNkhPYU8yOTlLdVBrenh6S0hXWEJMRkpKZFB0NjV5UnZVeEhuSnM5bVJ4YjZtQnJyNy9FQ1RwK1JmZnVyc0d4alBKWFFPRFpsUWY0N1Y3S2J1MmlYSy9xYkN6TzV5NnFVdkNrY0hyeGQxdkorbTBKeFZTTWk3Tnl4T0phMFpkMlZab3RvWlhOM1VwTnlVeEpkUGc1UThRUGp0Smx6NjEzV1BxK1V3dmZETnFlNTh3MXh3Tm1JRGVsQ3FMZXpxLzJicllocEVTZFhRejZ0eUtNdDdMc0VWTytXeHR6b0hhVFRYWk9lb1o5Y0dxd3JPOTRkZE5YUnh6cU5sSFRKMERWTnVQenZCTVYwNUpvV01IdkJ3eE5tdEdYZDFXV04wZVhhcm5VcHBEUzEyeTc1UVVnUFIxYkkvUDBJYlkzaWY4c1RwNk1BRnJEaTExU1NkYnJMbEVZSkpONkdxZmZsMVlRMHgvOWpndE1JRXM1WjBwNldXZ3V3WU9la1pGZmt1QXo3L1dGWFlQUmxzM2RVbWNRUHFZQkJSR1E1cFJqVHJ1dFN2VzZ6dUVSelYvWkJ1VXVPZFEzNE1ZNnhUVVFjK29SaDBQOE5uZXcxQS9lb1JLY3RLaDQ2VEJZN0h6Wkw1K0VXYlVMZ01QTjA0ZlRBYWVKQXkwbVhHK1RzTXdweFhIT0JYb3M1OFpkV0ZEWWUvNTZhWTZBRFFVN2lydTRuYTlVeU9TTHY3MFIrcEkwQVdlL3RqWUliU0c5TEU0VXBxYjAzUlhqUkcrQ3dXeWZHb2szRTdTaVVBYWR2N1RIKzE5R3RsSGp5b2hZQW9BVkhPS2JuWTY5TFA0WUJvakFEaVlaTnVSUjZjeHZHSy9LbDJuQXl4dHZoaGdBbmpXT3NTM1FIYjZidTBhZlhUU29jWDZUQkpBZGVqZ3RaTjA4bm1ucFpiQ3dkSElBUE1MNFZQTTBCR1FBUW9BNjlmb0xadXAvVEdKU2tEQ2RTODhmbUN4SHNEanA2UDVXRndsRE13eTRiMzhiQ2hROU15ZVRGN2g4YU0zTU5ObFhCaFArQ0lCa1lkbjdUVVA0RUJ1dm1iOGQwaFlPTDE1c3pnUzNzWDExZy9sSStIL0F4b0ZpOUpFaUV5ckFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZRQUFBQWtDQVlBQUFBWFNSMEFBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFZWFNVUkJWR2lCMVZwSmJ4eEZGUDZxMG1OTDJNYUFja09BZ2t4eTRnS1NCZUlhZ3hRSWlBcy9BTzdjdVBJSHVQRUQ4Z09TUXc2eGdwUTRpaUFPVHV3UUsyUWgzajNCY1d6SFczdkxlR1pjajBOUGQ5ZldYZFdlOGNMem9jZlZyNnZlKzk0NlBZOUJvdytIdmpoYjJYMzFZNG1YUGlWUWQxZXBzOFRBd0JnREF3TnZYTTAxbnZ6UEdBT1g3bHVmVDY0ODRsWFd0T2YxOWJ5emN1UmtqSVBwQ3VmUTVmSnZtTjM2VjE0aWdFMkNVYi9nN0NMT3pkN1JuMUgyUDNYenMydmRiYS8zeFlLWXl0dUI0cHFDK2J5NmdwWnpuRUJ4aGRjbXB3bHFlcFlQM1Y0YXdmREwwVndlQXZwSjRHZDhVMDRZZWZ6aDdSdTlFMTJsemo0aVF2SkhqaXNJQkVCNDg4cHJTTzRKSjY5OGhjbGI4R3dYVFc3TU9NRUVBQVo4eFRudW43ankzcmNLb08vZStPVGFtMjNkUFc0UWRPWGhDWUsrTDl3OFZzQmc1UkhPczAwNXMyaWp0b25yODdlY1lNcEV3QVhjKzdnVUFYcTFwNzJqMU5GWDFNcitJT2dHd2Y3MkF5d0c5VGxiTlo0Y1RUWWFtTCtGeWw2bEVLQUEzdUFMeXo4QkFIK24vYTFMV1lwbENwL2pMVEtQeU5qWDExaXA4dkF5bHJtZk94SmtHbHk4aS9MV1hGRXdJeUw4QUFCQmpmWk9FeEVFa3hKcXhBQXdnQnBYU0ZkaThVTEtTeHBQeWl2dkYyMW80MDNPZ2VVc0lwWFhTMDRHd2NoTEp3YUc4WEFLSThzUGlnT1owdnU0Y3FvMzZBbzZ6eERJQkVXU1FWV2VSWWxkNHhVRThGeWdVaVBZakNRWXdMV3pJMTZ5RzBuakZaQ2VKd2F3REowc3hsK3ZiV0NnWU42MEVZZm9EV0l3czcweEZTVDJNRVY1U2RqRWN3emxVd1hCR3NwbjhrSTFuaVJmbnB5SjV4S1Vzd3hlaTV3RDgzOWdWMVNiaEJPQW9KTkJra2N5d2pieFBNbkRzbmh0WVVzYW1QbThVTUJNMG9OTXVqY2J4bmZMbWVvRURDNE9ZMjc3UlJNb3FoUWtJUVhUY3FxaUVpakk4V1lsRkJrRUtGdjV6UFNTNWswamxSaThzcHpNa0RNdkZZMXZUR04wNWRIKzBiT1FFdkt5NWZaVEdFemhxVUFSa1R4TVA4dVppZ0FRQTFraUlXYlJkVnF0aHJpNThHZFQ0TmtvMEpPK0VvcUlGUFF0RElDc2ZMSENFQm1FZ1RQU052UklMNDBiN3NLWXJ2MitNSVM2cU84SHMxd0s5S1N2Q2grQllndXZUT0VCNkVYSVZoaVN3cVRjSTY4aW91WlJ5YVBobDRxR2x2N0NpMWRMclVGUUk2VW9xY3Fub0RUYm8rWVhrWGhOS2tJZUhwWUM1VTVGc3B3VG16TjR0UGEwS2REeVNDbEtRTnpQYWNuZFdVU1FnR0xyVWQxaG14cWhXSS9xSWFmMC9GbzF4T0RpY0RONE9ja0krY2pLbGpWUER6dDJQYXEwMWUybEVRZ1NMUUV1aTR5aWxGUkxtVEtMaU5RVlNLbmpPUGFvZDVaSDhiS3kwZ3hXWHFSNUtDdFVHRkpGaXhjRzRJQjZWSXRCcHpabk1SWk90UUl2SjBsRktmVVdwemZxUmVnUWV0U29NRnJPY2hoL3JScmlyc2ZMNGxaUkkrVFZ5dXpWendFQTdEMnFVVVFNNVRPTTErRE5mblBsbDRwa09ZZVhSNUgxN3ZNZ0tJaXFPdVZhdVdpUG1oKzJhdDcwNzFIdEhZUk56dGlnOTFiK3h1cnVldk1vRmFDQUN2UisvNmNlZFdyckdhWTN5eTJDeVorQytPMjdqNGVsN3h3cG45Y2Fpb2ZYbzY3dGhyaS84ckExQ0JXa3dQZ2hJTWZEb2lKU3ZEQWNabzlLUkJoZGJlMGJwQ0praGp5UUU0cUgxNk1tTDBvS3BTTGd3ZW9UaE5XTjFxQ3pEd3FpSCtOODNqazJpcEIzRVlrVmxUd2FXYm5WUEJzRlVsRXM1K3oySEo1dFAyOGVsU1lvK2FhVS85VXlEVDIvSCtQaU5VdDZrRS9YdlZrM25vVTNLNCtHMWZCQVgzcjRVbENuZWkxQVVNb09SYlV5SDhjZVZRaUJoOGNBVEhDMkhBQUlDWFRTVmhnaTVjM0tuRjFFWUhwWW9iQlZpNUJ2ZW5tOFBvYXQybmJMY05rdkNmQmhMb2lHekNFRy8yR0d2TmtqWlVRbWJ4OXFEQ1ZvdkxrelU0M1A1ZTNubU45WlBHb3NBV0FhNTJlR09Xdmp2eHJDUTFJd0Y0VDB6M3RnTEFOTTY4Q1lZNysxYW9qeFEzcnA0U1RDQlFEZzIyZi9HZGdUOWV1dTRTcFprZXdSSFhnYm9JaXhiUGZxWWc5UHc4bWpCVEdsZFZIcCtBVm9wS09kTHljK3IxRnQwalpjNWU4MWNJSmdHQ1EyUWtIdkZnU01oVlBZcWI4NlNoQVRZc0QzK081SkZaQytlRlRPVFg1UU56elZkM1l6QXhTNEJzYmdhU3oxM0xtZGVTeFZsbzhNd0ppSTBDOEVQdG83WDc0Y3J6R0Q2MnBQKzJzNGNZbEFwOXQ1MnhuM3lEVTMxenpHczNsam9yam9HUGxHZFF1UDE4Y09GVGlKQ0dDVElPb1hZQmZ4dFRrUy9oK2VDZ016R2MyVW9nQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGUUFBQUFrQ0FZQUFBQVhTUjBBQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBV0pTVVJCVkdpQnpWckxiaHhGRkQyM3VrZm1zZUNoaUFobGgweXlZMEVnVWlRZ0c4SUhzR0RIZ3NlYUhSSXJmb0FkSCtBUHdCSUl5V1FSc0NKTXdNR0pqQmNJc0dNaGhCQVFlV1l5NDBkaXo5aHpXWFQzZEQxdWRWZjM5SXc1MGtqdHZuVnYzVHBWZFc1NXBnZ1dlT3VqMS9tby93SFUzR1dNVHA3ZzFsTXRFQUZJUDlvejYrOHRtL0VNT0RZTzhYUGlJL2Z6OXQwYzRuKy9CRDM0dzZBSHdEWVlTMUQ4R2IzeTR5M2J4OGhndFBIK2RaNTc1bW9WY3NKSnRXMGg1TWcyMHc5QzI4a1JkVmVoZW10bHpaWXdvby9weXVwUDJZdHg3NlAxdCsveW8rZm1xNU9EY0ZLdGRtd1JYSjlVaWVENlVBZmJpTzU5VmNHRDNxUlhWNzhBQUFVQW80MTNydU9SWitmQmpHUlZweC8yUEJzZmdGZ1BIaDZEREp1ZFpISGY1STAvR2VoNEYxRjd1YUxYYUlIdlhHd0JnT0pyODNOb25ia0twUE02TVRsQ2pDSS9iM3dyNTZMSkZXMzFFTzBzQXllSEZiM29TUnkyUGdRQWhYTlhGcDBCMWlSSEhxUUFLNGFmVkhNbkdPRVlwbDlvM3dXSXV0K0RIdjVaMlMvSmg5NERnQmpIaCtjUnB5c2lxemxJYzhxa2FQeHNhNVBseHdDVGFYWmpwSEVNRzRQSVE0SGg1d3dpOTJPWTJ1UE5XWWJhMzRMcTNRbHE2MG5tT1Y2NWZDbm11Yk1YakJXZ2sycTBoNS9nOGQ5Y2dWUWRMc0VJamNIUVNDVXJmamFDWWxKcDJLdWhteUl1eFU2R0dqbFM4c1hrSkM5TVVxMTFWeEFqOTdNSUxvcWg5Y3kyelNGWVJ0UmVCa2FEOG9abFlENFQrNGtqYStzTEc3SXVPVVYrZWsvNlRuQnlaUC9rQnNsVmdxanpIZWpoWDZLdERtSnB1K3ZJU1hXM3QrTlhhMkF1d1lhZU5xckRadDlxZnhPcXZ5NTUxRWFjOXdodjhuS1JrbVpjS0c2V09VU0hIVko5TVF5UXBhYytIVTVsYWRoTmprZ05JMDQ2dGpYME5JdVVIUU0xaTVRZ0UxcVJpbmFXQVI3YW5VOE1XVU9kSXVXUmhkTHRiaGVwMmVod05nSmZrWW82MzRJTy8zWnphUUN5aGpya0pJbmtXMS9jakFYYk1TT251ZzU3aTVUZHNSQkRJbFh0L1FyVjM1Q1RiQUN4c1dwS3QyTkdLZ250QXNqUnQzK2dEb2NWS1ZtSG5WVTc2Q0JxM3hENmJBNnhYMmZnSmFlMFNCWEpoTjFWblNKVlFZZjFJaFcxYndCODRrbW1HYmdhYWgrR1BlZTl3aUkxYnFIYmt0YVRGNmxxT3B5UnFqbzNRVWYzWE4rR0VSTllFRzg5S1d1RXRZdFVQbEVKcVFFNkxFcEdEUjNlK3cxcTcyZTV2NFlScHdjTWQ5N3JGcWtBSFFZQVlyTDBOSHNvamxGVmgyblFRZFJaa1pPWUFzWWFtcERENFNzdWhWT2t4bzNMWTVTVEkrOEV1Zkxyei9rcVZwMFZDTXRsYWpBMGxFQm1zYkVUQ1M1U1lUcnNvRUtoQ3lsU3Fuc1ROR2g3T3BzT1luSDI5SmwydG51ZEl1WFg0VXBGeWpxdUphVEsrYXVEVGFqOVRkYzJaVGdIZStrd1hFeE9UbkJkY29LTGxHaHppeFFOMmxEZEh6eE8wMFdzSitLUXFxT0lZTU5XWFljQnFValYxR0V3VkhkVjdtUUcwTGE4T2RQMWk1U3R3MW5qOGhnbU9ZR0ZEdVlDaU83ZkFnMjdibUl6UXNFWHpQKzNJbVhIZ0ZPa2FIOExkTER0SCswTWtIOGZHalF3dTBoeEJWSjF2K1oxR0VjN1VMM2JuZ0hNRGpGT0hnd1JQZGJ5a1ZOY3BJUnpZMmpsTDlCaFlqWko5Y1VZdnpzSnVUWXpmUkMxRlVqMWpaZjY0Uzc5ZlZ2OC9idm9jb0hPWWhPM1VVcGlxTjV0ME5BY3hpbGhUWUdQdFpKb0RtcjhDZ0JKQkFUYzVpQ1k0Y0ltSnZYMVhyaEFIdjlneTc0aGQwcWczK20xMVRXRjF1T2ZtZ1lmT2JESUtWbTFPakgyS3JZSnJud2JKYzNuYUdlcVh4WlhBeThBZ0tJWEZyN0I4ZTdYbGpGZ1lIbFRyNS8yN0t4dzczVVp5OCszSzNqWStDK1c5Y0U5L0xQN0NaRGV2cU9YRnQvQThMNTEzcEFKOE45NmswZ1dTSzJod3hLcHFyOE9ITzlOemtValVPL1NXNzhNZ0pSUUFLQ1hQMy9lWGFsSUIrWWh0WFM3NnpFZ3Q2dFJwTlRCM1VZdkoweUFKWXpveGV4dUtDQ2NQUG5hL0J6T1hsekVhSEFlcmFjdkpHY25TcHVtbi9USXhLTE44Nno5bmZ1aHNKMW9HM1pPN2Y5MEpMTmJlQ1g4UDh5MFZySVRQQXdoQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRlFBQUFBa0NBWUFBQUFYU1IwQUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQVZXU1VSQlZHaUIxWnJQYjl4RUZNZS9iOVpKUUdyVklrWGNrQUNGOW81RUplNlVQNEEvb2IxemFNVUZCT0tPaE5UYzROQS9nQng2eWFHMFJTS0FXbHBBVUNSS1NVc0pGYUZ0eUs5Tk5zbXVONTdId1Y1N2JNK01aK3lOMHo0cDBlaHBaenorekh6ZmU2dDloSUwxUDMvakxRcTMzMlV4OVNZaE9pYkZzUWtRQVVRQUNFUWlIV2YrMkVjNXYwakhKWCs2Vm42K3VpNHA4NnY5b3ZDTS9KcFUvTHlqOGRJY2VQdEJ6a1dFKzh3MEwxaCtRZWZ4ZlhGT2J2WCtoWmtyTW5qaGRCVThLcnlrSHBJYlBDckFid0xQRGFwd2cvbmtHL0RLRGZ0bmdIbkovTkhrZWZ4Y0FqcVlmZWxlSkY2Y3lXMklSUGwwRTBnbWZ4MTRacWl1OEN4cVVPYVN1aWNicU80aStPRWxKL0FBSU1EdjBEbGNpc2NBOWk2OGNpV2k2Umt3eDl6QkFNZC9ySXhqdnpUNHE4ZnM2VGVPUjNPZzdFbnJMNzlQNWpkWTJBVXZYM2FHQ1FBU2RKRS93d1FBQ0o3RmxNVFIwMng1Q1JNOFgzLzh3bEx2MXdIUStxV3lWcDJEazFhb3ZId1ppUGE4Z0FJNExuZndIZ0NJUWZUeTNPZ0JaYWl5OHNaWW9VS0Jad0JtWDZzRk5hZ3dIMzhON2kzNXdreU16Z0pBUUFoUGdCa2dDYkFBSXdreG8yZFJQR0JXUWc5ekZuMFpZQUlJSE05Ui9RQ0lXRmxyNU9mQ001QytIRlA2U0lzL1d6UHpjN3IrYUM2ekJFR1UvZUI0VGhwS0NkeTlDLzd2cGgvRHZMMGFmb3BUd1Q2T244emUzZ0F2M1dDeUJ5MGtHV2RsUjNqbGc0c1BOQThKVHZEaUEwM21Ld2VxaFpmTXp6MGozUENPbXpyckFLY0NGWmdMdk5ndjR3eGFnS2U3SlRaNEpqWGtiM296TlpqMkJHUUhKSmUvQktLQkZ6eWRTY1owa0o3ZzZJVWM0TVYrbmNRNE9RU1VJT1Z2dmNsL0NHcDRzZ0RzUFBTR1o3SUF6QlZ4eUFCUEp5WGlqRlhxbDBBU3h6SklhS3dHWDNoYU5YVHZndGQrYk1LdlpNRklMN1k0bEdsSzhSZmpFQ0dGWjBvc3BadnJkT3YxZnR1YUtiejBIVFJxR0t5QkgxM3o1VlZwUVhvOUxISG9xY3ZLTmpVa1h5MnIxTUNQdmdMa3NDWTJzd1hGazY0VGgwdzM3OEN5Y2xNMXJId0w3UDNyeThySlVzbXJHL0tLUXlXSmNRNkdDWjVKRGJxYk8xWTFiUDBCYlB4YUM1YUw1U1FmYnlnNWVUWGVtT0tRQXMrZWxmMUNpVTBOaldyVTRUcXdzbEFibG9zRkpvblprc0NoMWFqcVhNQ2dodEVKS240a0I3cXlBSEJVQzVTckZjb21PRW5wMEdwVUp6WG9hMVNzZmdmMFYrcHljcmFnV1ZZMndQUEp5bTNVcUwxRllPdjNocWpjTEplVTZtVGxURk9LZjl4WjJWTU51VFVINjZEVjYvVUplVnFnajBQdVdWbWZXT3p3MmxRRHJWMVhKaHk4QlVCMVBlbWZsVkY1ODlxb1ViRnhFd2pYYXNPcFk4a04xVWxzUEZrNTlRT0dySHd3TlNyMUZrRzllMDM1ZUZzUVoxL1hyUHlNMUtqaE9tampoNlpzYWxrUWI5MDFLeWYvbnVZYUZReXhlVGd3Z2JSczhzL0tCMStqRnVBQlRtcWc3ay9BY0xNeG1McVdsRTFaUFZnZG4zU0p4UU9lanhwVWVJVTk2ZFJBdTMrQ2RwZkdBcWF1S2QvbGRSSnp6Y29vSlp5MmExVGEzNFRZdXQwWVNGTUxPcDF3R0VXVEV3ZVJsZHVxVWNFU3RKVjJ3eHlhQ2NKcXdKSzZBRS9ycy9LelVhT0szbTNRL3ZZWWtEU3pDTGdsQkVVM2NqLzhqNUtVTW5ieGc4Mk5FcWF1RkZ2YmpLbFJvcmlXMlBzTDFQK25iWFlsSStEQjVEbmNFbEtLMlZLTFNpMm8wZ3JKNmxmbTJ3OG83NmZoR3NUT25aYlI2WTJaTHdLQU9QSmg5MW9uQ0s4V041M0MwOXdlUUJyOGVnQk5icjF4TEljUU83KzFqTTFvbTJJYm53Qko5OTJSRDNwdlQwejA3NXZBakxkWmJEeHFFTHQzUU5GTysrZzBKc0JuNkdPRThUaXg1OS9mZlUxMEJsZkx0MEhmTGVjTzFRT2U0ZFlYL2FML04wVDR1RlZvT21OZ1BtSitmZFFiQ21TNU12dlFMS2IydG8vT1VRY25oc1BuVHJvMHVXWU51T1dPNTF5VHEwTjNzcTJabDBDZ3FJdGc5NWRXZ0dtc3NpWDhmejd6VWRyQUk2eFNBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGUUFBQUFrQ0FZQUFBQVhTUjBBQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBU05TVVJCVkdpQnpacTdiaHRIRkliL2M3aVNFOHVKak5oRmloU0c0ZGgxVWhoSUh3ZHdGK1FOZkVHNnBFdWJGMGlYQjNDWlFpcHlFeEJBVGlVZ0Y4bndEUWJrMktJa2hwQmx5WklqaWhZbG15TDNwT0J5ZDhtZDNaM1puYUgwQTRSK0xtZG5aNzR6bDBOeENFT1Nyejc2Vk5wN1gwdGw3Qk9JVE1yYjc0eUJDQUFCRkx3TXZLU1ZLVmpmc0JmamUvVlZ1ZjhiYUxzK2dJY0lWVjh3dzc0L1JiL2k3K0Y3QnA3UXVYbCtGaE9UVjJ4MU5oZXFyZm9kUU9YcUhmRHF2ZXhDSWpNZHlMZmp2K0IrQXFoLzdZTWwvOVNaQzg0NjdScXE2YjBab2hlcnFEeWMxUUxmZzBoZjBNL2RId0dBQWFCejQ5eXNUTHgzSVNJZmowTHNyd1JHZ3BlQko4UHl6dXRQZzNQd0NwWEZPVzJZUFNKeVM3N0VHQUN3WE1VSmV1dlVGU0JvVkdvRCtsNEJPOU5IOTlKQVBjY1RLaitlQXc1Zkd3RUZjQnFiL0UwUDZQdm5wdU1QeW9SYXlFY01BWUJpWGgyRTRRQWErQ0p0ak1OY21nZTlYRE9GMldzMTRRWUFlT2krdVFpY2pEcEV2VTVMNE9QWFIrUEpzTHhFdm45cjRJSG9lcVlIZ1RhWHdiVUhLQ3pCZWZrY2x6MlptTHdFa2NTRHRCcFdFQjVSYkhDVURnSVoxaS9KOGdkTjQzVlRKZC9ueTE0SXMwaW5URWJCa0NlS0JwaUxFWjhPbFJMbGVYRU82TFJoUVdjOVZjVDZQaHdBanFiM1FQMGxncE1adEp5MmNIVWV0TE1PVy9MQ2hpZ2ZLcU9GNnFMKzRaa1E4N3l4REs0L1NsSXBJVSsxZmthKzk0WWtXcXF5MTFJNW5sQVY5Vk5yRi96a0R6V1ZFdklBUFFpWk8zOEltQXluWlJSTVpkQWNRdVVuZndMZGpwcEtDUmx0U3ZiVEtjcXVmd0N3eER6TWZldzVYTDBEMnQxTVkxSkttWnVTeWg5ZGprcUc1WWY2RlV3ZTJsZ0JQL3RIQ2NPR3ZMQVZCdEVPMit0Z2l0ckxVU2w1dmRVQVYrZlZKQ3pKZUlSbStpSlRVZUZkNWFoY1hRQjhYOFhCbW1KcGsvNWFPdktkMlVLZ2VQa3U2TlYyS2doYmltMUs1bXZVU0tHV3FlZkZLbWlqbWszQ2txSzB5VGp5dlRkNk9hclo2SS83MGxEM0crRGx1emtZN0tuY2QvbkE1K2VvWkJpMHdTQ0hRU3ZRUmw2NUY3dm9YdFkySmJ2cEZLbnJUdzJDS0s5ejdRR290Wk1Md2FhU2FkT3hnV3JpaytzL2JkVkFXN1dzdmp0UmNvU1czRkdEL1NwbExTM25kWE5VYWpYQS96N003NzBEYVgrWEwrMUxCcXJ2YzNOVUVWRHRhR0FDZ0pjL2dzelhXRnZwamxiOVErQzUvZ2gwME5UdHYzVnBwRTFrMkdrWlBkVGdPbTNWQy8vSVprdDZhWlBSdEtSa3VoTXZrM2lPeHZOVGZCd3F0UnJndFVYRDd0dVhSOTMyb1ZUR3gxeXRuOW4va2dzKzBBNmFKSzczZnBiMmp3Vk1BTnNlZ0YwU09lc3kzYkdYVGlYVEl4QkF6eDREci9mMHUrMUl6UDRDVTFmK0FnUUVnWk9EQk00T1VQVCswbllkdFBOODVQQVNJcXpRVDFoZ1ZDcmY5eHRKZVIzSmdxM2hVNE5XRkdwckIvUjhhYlRnVWlTQ1d3REE5TVBMMzNIWXZoM21jSlpIa041eG1BTGU3NERYbjQ0VVdvWWFQTzUvQndTbjczaXErUmtPRDZyOU5oTVF0aCtadnNBVXRUWFYxNThDN1gzSG5QUkVvT3MwalRZUUFBVUFudHI3RU4wM3Q3VkdSOWk1NktOOGJ3OHEvYmNHYW02NTRxTXZrWm1PK0IvM3o0WUNVVklTbGJtS0UzajM5TFNnZTFIR1QxNXljVGkyN3lWeENEYitPZFQzN1RlUE1rWEtQUkwrUDN3QlpvMmQyakh4QUFBQUFFbEZUa1N1UW1DQ1wiIiwiZXhwb3J0IGRlZmF1bHQgYFxyXG4jY2lyY2xle1xyXG4gICAgYW5pbWF0aW9uOiBsb2FkaW5nLWNpcmNsZSAxLjRzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gICAgLyog5ZyG5YaF5aGr5YWFICovXHJcbiAgICBmaWxsOiBub25lO1xyXG4gICAgLyog5ZyG5ZGo6aKc6ImyICovXHJcbiAgICBzdHJva2U6ICM0NDdiZmM7XHJcbiAgICAvKiDlnIblkajlrr3luqYgKi9cclxuICAgIHN0cm9rZS13aWR0aDogMjtcclxufVxyXG5cclxuI2xvYWRpbmctY2lyY2xlIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDEwMDAwMDtcclxuICAgIHRvcDogY2FsYyg1MCUgLSAxMDBweCk7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDI1cHgpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxvYWRpbmctY2lyY2xlIHtcclxuICAgIDAlIHtcclxuICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAxcHggMjAwcHg7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgICB9XHJcbiAgICAzMCUge1xyXG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEwMHB4IDIwMHB4O1xyXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTVweDtcclxuICAgICAgICBzdHJva2U6IGdyZWVuO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMTAwcHggMjAwcHg7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNpcmNsZS1sb2FkaW5nLXN2ZyB7XHJcbiAgICBhbmltYXRpb246IGxvYWRpbmctcm90YXRlIDEuNHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbG9hZGluZy1yb3RhdGUge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMXR1cm4pO1xyXG4gICAgfVxyXG59YCIsImltcG9ydCBGaWxlVXRpbHMgZnJvbSBcIkAvdXRpbHMvRmlsZVV0aWxzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBsb2FkKHVybCwgZmlsZVVyaSwgcGFyYW1zKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGlmICgoZmlsZVVyaS5pbmRleE9mKCdjb250ZW50JykgPT09IC0xKSAmJiAoZmlsZVVyaS5pbmRleE9mKCdmaWxlOi8vLycpID09PSAtMSkpIHtcclxuICAgICAgICAgICAgZmlsZVVyaSA9ICdmaWxlOi8vJyArIGZpbGVVcmk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB1cGxvYWRlciA9IG5ldyBGaWxlVXRpbHMuRmlsZVV0aWxzLlVwbG9hZGVyKHtcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICBmaWxlVXJpLFxyXG4gICAgICAgICAgICBwYXJhbXNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NiYXIgPSBzaG93UHJvZ3Jlc3NiYXIoKTtcclxuXHJcbiAgICAgICAgdXBsb2FkZXIub25TdWNjZXNzID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIG5hdmlnYXRvci5kaWFsb2dzUGx1cy5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgIGlmIChwcm9ncmVzc2Jhcikge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NiYXIuc2V0VmFsdWUoMTAwKTtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzYmFyLmhpZGUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpXHJcbiAgICAgICAgfTtcclxuICAgICAgICB1cGxvYWRlci5vbkZhaWwgPSAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2UnLCBlcnJvcik7XHJcbiAgICAgICAgICAgIGlmIChwcm9ncmVzc2Jhcikge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NiYXIuaGlkZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdXBsb2FkZXIub25Qcm9ncmVzcyA9IChwcm9ncmVzcykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGVyY2VudCA9ICgocHJvZ3Jlc3MubG9hZGVkIC8gcHJvZ3Jlc3MudG90YWwpICogMTAwKS50b0ZpeGVkKDApO1xyXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3NiYXIpIHtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzYmFyLnNldFZhbHVlKHBlcmNlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB1cGxvYWRlci51cGxvYWQoKTtcclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2hvd1Byb2dyZXNzYmFyKCkge1xyXG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IuZGlhbG9nc1BsdXMpIHtcclxuICAgICAgICAvLyBuYXZpZ2F0b3IuZGlhbG9nc1BsdXMuc2hvd0xvYWRpbmcoJ+S4iuS8oOS4rScsICfor7fnqI3lkI4nKVxyXG4gICAgICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLmRpYWxvZ3NQbHVzLnByb2dyZXNzU3RhcnQoJ+S4iuS8oOS4rScsICfor7fnqI3lkI4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIi4uL3JvdXRlclwiO1xyXG5pbXBvcnQgbGV2ZWwwIGZyb20gJy4uL2Fzc2V0cy9sZXZlbDAucG5nJ1xyXG5pbXBvcnQgbGV2ZWwyIGZyb20gJy4uL2Fzc2V0cy9sZXZlbDIucG5nJ1xyXG5pbXBvcnQgbGV2ZWwzIGZyb20gJy4uL2Fzc2V0cy9sZXZlbDMucG5nJ1xyXG5pbXBvcnQgbGV2ZWw0IGZyb20gJy4uL2Fzc2V0cy9sZXZlbDQucG5nJ1xyXG5pbXBvcnQgbGV2ZWw1IGZyb20gJy4uL2Fzc2V0cy9sZXZlbDUucG5nJ1xyXG5pbXBvcnQgbGV2ZWw2IGZyb20gJy4uL2Fzc2V0cy9sZXZlbDYucG5nJ1xyXG5pbXBvcnQgRmlsZVV0aWxzIGZyb20gXCJAL3V0aWxzL0ZpbGVVdGlsc1wiO1xyXG5pbXBvcnQge2Rvd25sb2FkfSBmcm9tIFwiQC91dGlscy9kb3dubG9hZFwiO1xyXG5pbXBvcnQge3VwbG9hZH0gZnJvbSBcIkAvdXRpbHMvdXBsb2FkXCI7XHJcbmltcG9ydCB7TG9hZGluZ30gZnJvbSBcInZhbnRcIjtcclxuXHJcbi8qKiAqXHJcbiAqIOWIpOaWreeUqOaIt+aYr+WQpui/h+acn+OAgeaYr+WQpuiHquWKqOeZu+W9lVxyXG4gKiBAcGFyYW0gdGltZSDnmbvlvZXml7bpl7RcclxuICogQHBhcmFtIGV4cGlyZSDov4fmnJ/ml7bpl7RcclxuICovXHJcbmNvbnN0IGlzRXhwaXJlID0gKHRpbWUsIGV4cGlyZSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKCd1dGlscycsc3RvcmUuc3RhdGUudXNlci5pc0F1dG9Mb2dpbik7XHJcbiAgLy9zdG9yZS5zdGF0ZS51c2VyLmlzQXV0b0xvZ2luIHRydWXoh6rliqjnmbvlvZVcclxuICBpZiAoc3RvcmUuc3RhdGUudXNlci5pc0F1dG9Mb2dpbikge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoIXRpbWUpIHtcclxuICAgICAgLy8gY2xlYXJTdG9yYWdlKCk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coRGF0ZS5ub3coKSwgdGltZSArIGV4cGlyZSxEYXRlLm5vdygpID4gdGltZSArIGV4cGlyZSk7XHJcbiAgICAgIHJldHVybiBEYXRlLm5vdygpID4gdGltZSArIGV4cGlyZTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICog5Yik5pat56uZ54K55rC06LSo54q25oCB6IOM5pmv6aKc6ImyXHJcbiAqIEBwYXJhbSB2YWx1ZSDlgLxcclxuICogKi9cclxuZXhwb3J0IGNvbnN0IGltZ0p1Z2RlTGV2ZWwgPSAodmFsdWUpID0+IHtcclxuICBpZiAodmFsdWUgPT09IG51bGwpIHtcclxuICAgIHJldHVybiAgbGV2ZWwwO1xyXG4gIH0gZWxzZSBpZiAodmFsdWUgPT09ICfihaEnKSB7XHJcbiAgICByZXR1cm4gIGxldmVsMjtcclxuICB9IGVsc2UgaWYgKHZhbHVlID09PSAn4oWiJykge1xyXG4gICAgcmV0dXJuICBsZXZlbDM7XHJcbiAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ+KFoycpIHtcclxuICAgIHJldHVybiAgbGV2ZWw0O1xyXG4gIH0gZWxzZSBpZiAodmFsdWUgPT09ICfihaQnKSB7XHJcbiAgICByZXR1cm4gIGxldmVsNTtcclxuICB9IGVsc2UgaWYgKHZhbHVlID09PSAn5Yqj4oWkJykge1xyXG4gICAgcmV0dXJuICBsZXZlbDY7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAgbGV2ZWwwO1xyXG4gIH1cclxufVxyXG5cclxuLy/ml6XljoblrZfkvZPpopzoibJcclxuY29uc3QgdGV4dENvbG9ycyA9IFtcclxuICAncmdiYSgyMDQsIDIwNCwgMjA0LCAxKScsXHJcbiAgJ3JnYmEoMCwgMjI4LCAwLCAxKScsXHJcbiAgJ3JnYmEoMjU1LCAxOTEsIDAsIDEpJyxcclxuICAncmdiYSgyNTUsIDEyNiwgMCwgMSknLFxyXG4gICdyZ2JhKDI1NSwgMCwgMCwgMSknLFxyXG4gICdyZ2JhKDE1MywgMCwgNzYsIDEpJyxcclxuICAncmdiYSgxMjYsIDAsIDc1LCAxKSdcclxuXTtcclxuXHJcbi8qKlxyXG4gKiDliKTmlq1BUUnog4zmma/popzoibJcclxuICogQHBhcmFtIHZhbHVlIOWAvFxyXG4gKiAqL1xyXG5leHBvcnQgY29uc3QgQVFJSnVnZGVCZ0NvbG9yID0gKHZhbHVlKSA9PiB7XHJcbiAgaWYodmFsdWUgPT09IG51bGwpe1xyXG4gICAgcmV0dXJuICdiYWNrZ3JvdW5kOiAnICsgdGV4dENvbG9yc1swXTtcclxuICB9ZWxzZSBpZiAodmFsdWUgPD0gNTApIHtcclxuICAgIHJldHVybiAnYmFja2dyb3VuZDogJyArIHRleHRDb2xvcnNbMV07XHJcbiAgfSBlbHNlIGlmICh2YWx1ZSA8PSAxMDAgJiYgdmFsdWUgPiA1MCkge1xyXG4gICAgcmV0dXJuICdiYWNrZ3JvdW5kOiAnICsgdGV4dENvbG9yc1syXTtcclxuICB9IGVsc2UgaWYgKHZhbHVlIDw9IDE1MCAmJiB2YWx1ZSA+IDEwMCkge1xyXG4gICAgcmV0dXJuICdiYWNrZ3JvdW5kOiAnICsgdGV4dENvbG9yc1szXTtcclxuICB9IGVsc2UgaWYgKHZhbHVlIDw9IDIwMCAmJiB2YWx1ZSA+IDE1MCkge1xyXG4gICAgcmV0dXJuICdiYWNrZ3JvdW5kOiAnICsgdGV4dENvbG9yc1s0XTtcclxuICB9IGVsc2UgaWYgKHZhbHVlIDw9IDMwMCAmJiB2YWx1ZSA+IDIwMCkge1xyXG4gICAgcmV0dXJuICdiYWNrZ3JvdW5kOiAnICsgdGV4dENvbG9yc1s1XTtcclxuICB9IGVsc2UgaWYgKHZhbHVlID4gMzAwKSB7XHJcbiAgICByZXR1cm4gJ2JhY2tncm91bmQ6ICcgKyB0ZXh0Q29sb3JzWzZdO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gJ2JhY2tncm91bmQ6ICcgKyB0ZXh0Q29sb3JzWzBdO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWrUFRSeWtl+S9k+minOiJslxyXG4gKiBAcGFyYW0gdmFsdWUg5YC8XHJcbiAqICovXHJcbmV4cG9ydCBjb25zdCBBUUlKdWdkZVRleHRDb2xvciA9ICh2YWx1ZSkgPT4ge1xyXG4gIGlmKHZhbHVlID09PSBudWxsKXtcclxuICAgIHJldHVybiAnY29sb3I6ICcgKyB0ZXh0Q29sb3JzWzBdO1xyXG4gIH0gZWxzZSBpZiAodmFsdWUgPD0gNTApIHtcclxuICAgIHJldHVybiAnY29sb3I6JyArIHRleHRDb2xvcnNbMV07XHJcbiAgfSBlbHNlIGlmICh2YWx1ZSA8PSAxMDAgJiYgdmFsdWUgPiA1MCkge1xyXG4gICAgcmV0dXJuICdjb2xvcjonICsgdGV4dENvbG9yc1syXTtcclxuICB9IGVsc2UgaWYgKHZhbHVlIDw9IDE1MCAmJiB2YWx1ZSA+IDEwMCkge1xyXG4gICAgcmV0dXJuICdjb2xvcjonICsgdGV4dENvbG9yc1szXTtcclxuICB9IGVsc2UgaWYgKHZhbHVlIDw9IDIwMCAmJiB2YWx1ZSA+IDE1MCkge1xyXG4gICAgcmV0dXJuICdjb2xvcjonICsgdGV4dENvbG9yc1s0XTtcclxuICB9IGVsc2UgaWYgKHZhbHVlIDw9IDMwMCAmJiB2YWx1ZSA+IDIwMCkge1xyXG4gICAgcmV0dXJuICdjb2xvcjonICsgdGV4dENvbG9yc1s1XTtcclxuICB9IGVsc2UgaWYgKHZhbHVlID4gMzAwKSB7XHJcbiAgICByZXR1cm4gJ2NvbG9yOicgKyB0ZXh0Q29sb3JzWzZdO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gJ2NvbG9yOicgKyB0ZXh0Q29sb3JzWzBdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlY3Rpb25UaW1lID0gKCkgPT57XHJcbiAgbGV0IG5vd0RhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGxldCB5ZWFyID0gbm93RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gIGxldCBtb250aCA9IG5vd0RhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgbGV0IGRheSA9IG5vd0RhdGUuZ2V0RGF0ZSgpO1xyXG4gIGxldCBob3VycyA9IG5vd0RhdGUuZ2V0SG91cnMoKTtcclxuICBpZiAoaG91cnMgPCA0ICYmIGhvdXJzID49IDApIHtcclxuICAgIGhvdXJzID0gMDtcclxuICB9IGVsc2UgaWYgKGhvdXJzIDwgOCAmJiBob3VycyA+PSA0KSB7XHJcbiAgICBob3VycyA9IDQ7XHJcbiAgfSBlbHNlIGlmIChob3VycyA8IDEyICYmIGhvdXJzID49IDgpIHtcclxuICAgIGhvdXJzID0gODtcclxuICB9IGVsc2UgaWYgKGhvdXJzIDwgMTYgJiYgaG91cnMgPj0gMTIpIHtcclxuICAgIGhvdXJzID0gMTI7XHJcbiAgfSBlbHNlIGlmIChob3VycyA8IDIwICYmIGhvdXJzID49IDE2KSB7XHJcbiAgICBob3VycyA9IDE2O1xyXG4gIH0gZWxzZSBpZiAoaG91cnMgPD0gMjMgJiYgaG91cnMgPj0gMjApIHtcclxuICAgIGhvdXJzID0gMjA7XHJcbiAgfVxyXG4gIG1vbnRoID0gbW9udGggPCAxMCA/IFwiMFwiICsgbW9udGggOiBtb250aDtcclxuICBkYXkgPSBkYXkgPCAxMCA/IFwiMFwiICsgZGF5IDogZGF5O1xyXG4gIGhvdXJzID0gaG91cnMgPCAxMCA/IFwiMFwiICsgaG91cnMgOiBob3VycztcclxuICByZXR1cm4geWVhciArIFwiLVwiICsgbW9udGggKyBcIi1cIiArIGRheSArIFwiIFwiICsgaG91cnMgKyBcIjowMFwiO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGlzRXhwaXJlLFxyXG59O1xyXG5cclxuaW1wb3J0IHZ1ZUluc3RhbmNlIGZyb20gXCJAL21haW5cIjtcclxuaW1wb3J0IGxvYWRpbmdfc3R5bGUgZnJvbSBcIi4uL3N0eWxlL2xvYWRpbmdfc3R5bGVcIjtcclxuZXhwb3J0IGNvbnN0IG9wZW5Ccm93c2VyID0gKHVybCkgPT4ge1xyXG5cclxuICBvcGVuVXJsKHVybClcclxuICByZXR1cm5cclxuXHJcbiAgbGV0IHJlZlxyXG4gIGxldCBmaXJzdCA9IHRydWVcclxuICBpZiAod2luZG93LmNvcmRvdmEpIHtcclxuICAgIHJlZiA9IGNvcmRvdmEuSW5BcHBCcm93c2VyLm9wZW4odXJsLCAnX3NlbGYnLCAnbG9jYXRpb249bm8sdG9vbGJhcj1ubyx6b29tPW5vLGZ1bGxzY3JlZW49bm8nKTtcclxuXHJcbiAgICByZWYuYWRkRXZlbnRMaXN0ZW5lcignbG9hZHN0YXJ0JywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnVybCA9PT0gJ2h0dHA6Ly9hcHA6Ly9jbG9zZScgfHwgZXZlbnQudXJsID09PSAnYXBwOi8vY2xvc2UnIHx8IGV2ZW50LnVybCA9PT0gJ2Nsb3NlJykge1xyXG4gICAgICAgICAgICByZWYuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpcnN0KSB7XHJcbiAgICAgICAgICAvLyDliqBsb2FkaW5nXHJcbiAgICAgICAgICByZWYuaW5zZXJ0Q1NTKHtcclxuICAgICAgICAgICAgY29kZTogbG9hZGluZ19zdHlsZVxyXG4gICAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICByZWYuZXhlY3V0ZVNjcmlwdCh7XHJcbiAgICAgICAgICAgICAgY29kZTogYFxyXG4gICAgICAgICAgICAgICAgd2luZG93LmNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2lyY2xlLmlkID0gJ2xvYWRpbmctY2lyY2xlJ1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmNpcmNsZS5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImNpcmNsZS1sb2FkaW5nLXN2Z1wiPjxzdmcgaGVpZ2h0PVwiNTBcIiB3aWR0aD1cIjUwXCIgdmlld0JveD1cIjAgMCA1MCA1MFwiPjxjaXJjbGUgaWQ9XCJjaXJjbGVcIiBjeD1cIjI1XCIgY3k9XCIyNVwiIHI9XCIyMFwiLz48L3N2Zz48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdpbmRvdy5jaXJjbGUpXHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRzdG9wJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChmaXJzdCkge1xyXG4gICAgICAgIHJlZi5leGVjdXRlU2NyaXB0KHtcclxuICAgICAgICAgIGNvZGU6IGBpZih3aW5kb3cuY2lyY2xlKSB3aW5kb3cuY2lyY2xlLnJlbW92ZSgpYFxyXG4gICAgICAgIH0sICgpID0+IHsgZmlyc3QgPSBmYWxzZSB9KVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJlZi5hZGRFdmVudExpc3RlbmVyKCdsb2FkZXJyb3InLCAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKGZpcnN0KSB7XHJcbiAgICAgICAgcmVmLmV4ZWN1dGVTY3JpcHQoe1xyXG4gICAgICAgICAgY29kZTogYGlmKHdpbmRvdy5jaXJjbGUpIHdpbmRvdy5jaXJjbGUucmVtb3ZlKClgXHJcbiAgICAgICAgfSwgKCkgPT4geyBmaXJzdCA9IGZhbHNlIH0pXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8g55uR5ZCs5a2Q6aG16Z2i6LCD55SoY29yZG92YeS6i+S7tlxyXG4gICAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBtZXNzYWdlT2JqID0+IHtcclxuICAgICAgaWYgKCFtZXNzYWdlT2JqLmRhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnIyMjIyMjIG1lc3NhZ2Ugb2JqIGVycm9yICMjIyMjIyAnKTtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBtZXRob2QgPSBtZXNzYWdlT2JqLmRhdGEubWV0aG9kXHJcbiAgICAgIHN3aXRjaCAobWV0aG9kKSB7XHJcbiAgICAgICAgY2FzZSAndXBsb2FkJzpcclxuICAgICAgICAgIGNvcmRvdmFfdXBsb2FkKG1lc3NhZ2VPYmosIHJlZik7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2Rvd25sb2FkJzpcclxuICAgICAgICAgIGNvcmRvdmFfZG93bmxvYWQobWVzc2FnZU9iaiwgcmVmKTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnb3Blbic6XHJcbiAgICAgICAgICBjb3Jkb3ZhX2ZpbGVfb3BlbihtZXNzYWdlT2JqLCByZWYpOyBicmVhaztcclxuICAgICAgICBjYXNlICdzZWxlY3QnOlxyXG4gICAgICAgICAgY29yZG92YV9maWxlX3NlbGVjdChtZXNzYWdlT2JqLCByZWYpOyBicmVhaztcclxuICAgICAgICBjYXNlICdjYW1lcmEnOlxyXG4gICAgICAgICAgY29yZG92YV9jYW1lcmEobWVzc2FnZU9iaiwgcmVmKTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbG9jYXRlJzpcclxuICAgICAgICAgIGNvcmRvdmFfbG9jYXRlKG1lc3NhZ2VPYmosIHJlZik7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3NjYW5Db2RlJzpcclxuICAgICAgICAgIGNvcmRvdmFfc2NhbihtZXNzYWdlT2JqLCByZWYpOyBicmVhaztcclxuICAgICAgICBjYXNlICduYXZpZ2F0aW9uJzpcclxuICAgICAgICAgIGNvcmRvdmFfbmF2aWdhdGlvbihtZXNzYWdlT2JqLCByZWYpOyBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICByZWYgPSB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnKVxyXG4gIH1cclxuICByZXR1cm4gcmVmXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvcmRvdmFfdXBsb2FkKG1zZ09iaiwgcmVmKSB7XHJcbiAgY29uc3QgdXJsID0gbXNnT2JqLmRhdGEudXJsO1xyXG4gIGNvbnN0IGZpbGVVcmkgPSBtc2dPYmouZGF0YS5maWxlVXJpO1xyXG4gIGNvbnN0IHBhcmFtcyA9IG1zZ09iai5kYXRhLnBhcmFtcztcclxuICBjb25zdCBjYWxsYmFjayA9IG1zZ09iai5kYXRhLmNhbGxiYWNrXHJcbiAgY29uc3QgZXJyb3JDYWxsYmFjayA9IG1zZ09iai5kYXRhLmVycm9yXHJcblxyXG4gIHRyeSB7XHJcbiAgICB1cGxvYWQodXJsLCBmaWxlVXJpLCBwYXJhbXMpLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgIGNhbGxiYWNrICYmIHJlZi5leGVjdXRlU2NyaXB0KHtjb2RlOmAke2NhbGxiYWNrfSgnJHtKU09OLnN0cmluZ2lmeShzdWNjZXNzKX0nKWB9LCAoKSA9PiB7XHJcbiAgICAgIH0pO1xyXG4gICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICBlcnJvckNhbGxiYWNrICYmIHJlZi5leGVjdXRlU2NyaXB0KHtjb2RlOmAke2Vycm9yQ2FsbGJhY2t9KCcke2Vycm9yfScpYH0sICgpID0+IHtcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGNvcmRvdmFfZG93bmxvYWQobXNnT2JqKSB7XHJcbiAgY29uc3QgdXJsID0gbXNnT2JqLmRhdGEudXJsO1xyXG4gIGNvbnN0IG5hbWUgPSBtc2dPYmouZGF0YS5uYW1lO1xyXG4gIGNvbnN0IHdpdGhDcmVkZW50aWFscyA9IG1zZ09iai5kYXRhLndpdGhDcmVkZW50aWFscztcclxuICB0cnkge1xyXG4gICAgZG93bmxvYWQodXJsLCBuYW1lLCB3aXRoQ3JlZGVudGlhbHMpXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gY29yZG92YV9maWxlX29wZW4obXNnT2JqKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGZpbGVQYXRoID0gbXNnT2JqLmRhdGEuZmlsZVBhdGg7XHJcbiAgICBjb25zdCBmaWxldHlwZSA9IGZpbGVQYXRoLnN1YnN0cmluZyhmaWxlUGF0aC5sYXN0SW5kZXhPZignLicpICsgMSlcclxuICAgIGNvcmRvdmEucGx1Z2lucy5maWxlT3BlbmVyMi5vcGVuKFxyXG4gICAgICAgIGZpbGVQYXRoLFxyXG4gICAgICAgIEZpbGVVdGlscy5GaWxlVXRpbHMuZ2V0TUlNRVR5cGUoZmlsZXR5cGUpLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gY29yZG92YV9maWxlX3NlbGVjdChtc2dPYmosIHJlZikge1xyXG4gIGNvbnN0IGNhbGxiYWNrID0gbXNnT2JqLmRhdGEuY2FsbGJhY2tcclxuICBjb25zdCBlcnJvckNhbGxiYWNrID0gbXNnT2JqLmRhdGEuZXJyb3JcclxuICB0cnkge1xyXG4gICAgd2luZG93Lm5hdmlnYXRvci5kaWFsb2dzUGx1cy5jaG9vc2VGaWxlKGDor7fpgInmi6nmlofku7ZgLCBzdWNjZXNzID0+IHtcclxuICAgICAgY2FsbGJhY2sgJiYgcmVmLmV4ZWN1dGVTY3JpcHQoe2NvZGU6YCR7Y2FsbGJhY2t9KCcke3N1Y2Nlc3N9JylgfSwgKCkgPT4ge1xyXG4gICAgICB9KTtcclxuICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgIGVycm9yQ2FsbGJhY2sgJiYgcmVmLmV4ZWN1dGVTY3JpcHQoe2NvZGU6YCR7ZXJyb3JDYWxsYmFja30oJyR7ZXJyb3J9JylgfSwgKCkgPT4ge1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGNvcmRvdmFfY2FtZXJhKG1zZ09iaiwgcmVmKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNhbGxiYWNrID0gbXNnT2JqLmRhdGEuY2FsbGJhY2tcclxuICAgIGNvbnN0IHBhcmFtcyA9IG1zZ09iai5kYXRhLnBhcmFtc1xyXG4gICAgY29uc3QgZXJyb3JDYWxsYmFjayA9IG1zZ09iai5kYXRhLmVycm9yXHJcbiAgICB3aW5kb3cubmF2aWdhdG9yLmNhbWVyYS5nZXRQaWN0dXJlKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICBjYWxsYmFjayAmJiByZWYuZXhlY3V0ZVNjcmlwdCh7Y29kZTpgJHtjYWxsYmFja30oJyR7c3VjY2Vzc30nKWB9LCAoKSA9PiB7XHJcbiAgICAgIH0pO1xyXG4gICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICBlcnJvckNhbGxiYWNrICYmIHJlZi5leGVjdXRlU2NyaXB0KHtjb2RlOmAke2Vycm9yQ2FsbGJhY2t9KCcke2Vycm9yfScpYH0sICgpID0+IHtcclxuICAgICAgfSk7XHJcbiAgICB9LCBwYXJhbXMpXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gY29yZG92YV9sb2NhdGUobXNnT2JqLCByZWYpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY2FsbGJhY2sgPSBtc2dPYmouZGF0YS5jYWxsYmFja1xyXG4gICAgY29uc3QgZXJyb3JDYWxsYmFjayA9IG1zZ09iai5kYXRhLmVycm9yXHJcbiAgICAvKk1Mb2MuZWNobyhzdWNjZXNzID0+IHtcclxuICAgICAgY2FsbGJhY2sgJiYgcmVmLmV4ZWN1dGVTY3JpcHQoe2NvZGU6YCR7Y2FsbGJhY2t9KCcke0pTT04uc3RyaW5naWZ5KHN1Y2Nlc3MpfScpYH0sICgpID0+IHtcclxuICAgICAgfSk7XHJcbiAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgIGVycm9yQ2FsbGJhY2sgJiYgcmVmLmV4ZWN1dGVTY3JpcHQoe2NvZGU6YCR7ZXJyb3JDYWxsYmFja30oJyR7SlNPTi5zdHJpbmdpZnkoZXJyb3IpfScpYH0sICgpID0+IHtcclxuICAgICAgfSk7XHJcbiAgICB9LCBbe31dKSovXHJcbiAgICB3aW5kb3cuc3VjLmxvY2F0ZS5sb2NhdGUobG9jYXRpb24gPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhsb2NhdGlvbilcclxuICAgICAgY2FsbGJhY2sgJiYgcmVmLmV4ZWN1dGVTY3JpcHQoe2NvZGU6YCR7Y2FsbGJhY2t9KCcke0pTT04uc3RyaW5naWZ5KGxvY2F0aW9uKX0nKWB9LCAoKSA9PiB7fSk7XHJcbiAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgIGVycm9yQ2FsbGJhY2sgJiYgcmVmLmV4ZWN1dGVTY3JpcHQoe2NvZGU6YCR7ZXJyb3JDYWxsYmFja30oJyR7SlNPTi5zdHJpbmdpZnkoZXJyb3IpfScpYH0sICgpID0+IHt9KTtcclxuICAgIH0pXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gY29yZG92YV9zY2FuKG1zZ09iaiwgcmVmKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNhbGxiYWNrID0gbXNnT2JqLmRhdGEuY2FsbGJhY2tcclxuICAgIGNvbnN0IGVycm9yQ2FsbGJhY2sgPSBtc2dPYmouZGF0YS5lcnJvclxyXG4gICAgY29yZG92YS5wbHVnaW5zLmJhcmNvZGVTY2FubmVyLnNjYW4oXHJcbiAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICBjYWxsYmFjayAmJiByZWYuZXhlY3V0ZVNjcmlwdCh7Y29kZTpgJHtjYWxsYmFja30oJyR7cmVzdWx0LnRleHR9JylgfSwgKCkgPT4ge30pO1xyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICBlcnJvckNhbGxiYWNrICYmIHJlZi5leGVjdXRlU2NyaXB0KHtjb2RlOmAke2Vycm9yQ2FsbGJhY2t9KCcke0pTT04uc3RyaW5naWZ5KGVycm9yKX0nKWB9LCAoKSA9PiB7fSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwcmVmZXJGcm9udENhbWVyYSA6IGZhbHNlLCAvLyBpT1MgYW5kIEFuZHJvaWRcclxuICAgICAgICBzaG93RmxpcENhbWVyYUJ1dHRvbiA6IGZhbHNlLCAvLyBpT1MgYW5kIEFuZHJvaWRcclxuICAgICAgICBzaG93VG9yY2hCdXR0b24gOiBmYWxzZSwgLy8gaU9TIGFuZCBBbmRyb2lkXHJcbiAgICAgICAgdG9yY2hPbjogZmFsc2UsIC8vIEFuZHJvaWQsIGxhdW5jaCB3aXRoIHRoZSB0b3JjaCBzd2l0Y2hlZCBvbiAoaWYgYXZhaWxhYmxlKVxyXG4gICAgICAgIHByb21wdCA6IFwi6K+35bCG5LqM57u056CB5pS+572u5omr5o+P5Yy65Z+f5YaFXCIsIC8vIEFuZHJvaWRcclxuICAgICAgICByZXN1bHREaXNwbGF5RHVyYXRpb246IDAsIC8vIEFuZHJvaWQsIGRpc3BsYXkgc2Nhbm5lZCB0ZXh0IGZvciBYIG1zLiAwIHN1cHByZXNzZXMgaXQgZW50aXJlbHksIGRlZmF1bHQgMTUwMFxyXG4gICAgICAgIGZvcm1hdHMgOiBcIlFSX0NPREUsUERGXzQxN1wiLCAvLyBkZWZhdWx0OiBhbGwgYnV0IFBERl80MTcgYW5kIFJTU19FWFBBTkRFRFxyXG4gICAgICAgIG9yaWVudGF0aW9uIDogXCJwb3J0cmFpdFwiLCAvLyBBbmRyb2lkIG9ubHkgKHBvcnRyYWl0fGxhbmRzY2FwZSksIGRlZmF1bHQgdW5zZXQgc28gaXQgcm90YXRlcyB3aXRoIHRoZSBkZXZpY2VcclxuICAgICAgICBkaXNhYmxlQW5pbWF0aW9ucyA6IHRydWUsIC8vIGlPU1xyXG4gICAgICAgIGRpc2FibGVTdWNjZXNzQmVlcDogZmFsc2UgLy8gaU9TXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGNvcmRvdmFfbmF2aWdhdGlvbihtc2dPYmosIHJlZikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBlcnJvckNhbGxiYWNrID0gbXNnT2JqLmRhdGEuZXJyb3JcclxuXHJcbiAgICB3aW5kb3cuc3VjLmxvY2F0ZS5sb2NhdGUobG9jYXRpb24gPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhsb2NhdGlvbilcclxuXHJcbiAgICAgIGxvY2FsTmF2aWdhdGlvbi5zdGFydChcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgYWxlcnQoZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOiBcImF1dG9cIixcclxuICAgICAgICAgIHRvTG5nOiBtc2dPYmouZGF0YS5KRCxcclxuICAgICAgICAgIHRvTGF0OiBtc2dPYmouZGF0YS5XRCxcclxuICAgICAgICAgIG15TG5nOiBsb2NhdGlvbi5Mb25naXR1ZGUsXHJcbiAgICAgICAgICBteUxhdDogbG9jYXRpb24uTGF0aXR1ZGUsXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgZXJyb3JDYWxsYmFjayAmJiByZWYuZXhlY3V0ZVNjcmlwdCh7Y29kZTpgJHtlcnJvckNhbGxiYWNrfSgnJHtKU09OLnN0cmluZ2lmeShlcnJvcil9JylgfSwgKCkgPT4ge30pO1xyXG4gICAgfSlcclxuXHJcblxyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlKVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
>>>>>>> 3779deaf709a5b6cc85c29d360b193e9ba6be2b6
