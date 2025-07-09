(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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

/***/ "./node_modules/core-js/internals/get-json-replacer-function.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/get-json-replacer-function.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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

/***/ "./node_modules/core-js/modules/es.json.stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.json.stringify.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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


/***/ }),

/***/ "./src/assets/level0.png":
/*!*******************************!*\
  !*** ./src/assets/level0.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAkCAYAAAAXSR0AAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANPSURBVGiB3Zq/T9tAFMe/fsIJYmmROjBXFPYOSN1L/4AOLAgs2r1b1/4D3bKxIDGSDGVgot1bsfQPaNUFJCuOIek5CdhO/Lo0lfGv2MnZXPpZktz3+e7e3Xv208UaIpyenr4cj8fviOgFMz/SdV0HAE3TEP5MalNRS7LJy+XlJfr9friJAfwEcMbMzYODg2/Ra+6N0Gq1zmu12rYMR2bVqhp3Gp1OB7ZtTzM70zTtg2EY3//1P/lycnLyo16vrxedpIpRmVdLw3EcXF1dZdqE0TTttWEYnwCAAKDZbJ7XarX1iQEz3/sME9XCNippeXxJwvd9mKaZyzY0xtHh4aEOANRoNOpLS0vbshwpcwHK2OgopmliPB6n6ik8Xl5efg8AtLa21ppnIlUvQJmbaVkWBoNBrD0PzPwWACgIgo20QSMXSHdElWgGACEErq+vY7YFeHp8fLxFuq5vLtriyJ6T53mF75spbFFVEZCmqbCZpmkiCIJYe1GCIHhCD+GIKqnOzLAsC8PhMGY7K5Q12Lxams2smuwNE0Lg5uYmNu480CItgCwNADzPQ7vdjvkwL4kpP89kFyXS2+22lPtmlNhDSdUFkKl1Oh3c3t7GxpUBhX+ougBFtGnzdRwHvV4vZi+LeymfNBGVF6do367rwrKsWB8ySaxD/+dUTxpXJqkPpbTJZmkqR7Nt27i7u4vZy6bUOlSVVBdCQAgR66MMqEwnZ9VkbpjrunlO3qUReyhFJ6RCxM6z0XOeIBWmlDpUlQeXbdtwXTfWR5lMPRyZoGI6Z2mO40T/sawEijaolM6zbrTrutIPPfIitQ5VIdKZ+cEWE5Bch2ZpVUVzt9uF7/sJrlaDknXorJHe7/dn/pNNFrnrUNVT3fO8Ug898kLM7C96qjMzut1uhpvVQEQ2AfgNqJ/OWVqv18NoNMp0tiIuiJm/qp7OWdpgMCjtsLggvwzDuCAiaoRbVUvnLM3zvMoOPXJwBAC0u7v7hZk/L1qqM7NKi9lbWVn5CPwtm/b29l4FQfBzkVJdCKHKfROapr3Z2dnxgFAdur+//ywaqRNUS/XhcFjJYXEOzkaj0fPJu6FA5A1mAGg0GvXV1dUWgA0i2lTtbWXf9x+y3mRMeSX8D7F3DlzHIyccAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/level2.png":
/*!*******************************!*\
  !*** ./src/assets/level2.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAkCAYAAAAXSR0AAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAWASURBVGiBzVpLbxxFEP6qdyxHJiIgRQJxRCa5ICE4ROLGgSDlyg/gABInFE5InPgD3PgBDrLEJT5w8YWQG5EShaCYCLBi7LXlR+K1Y5LF+BHbu8VhZna6e6p7umcfTkmWpl1T1TXffPXQbBMs+eBr/nDvmK+OKbzfZZw7e4bHiAAigAAQsXat/WVr5dGV1+y/F5k/h86048r9FNlP65ef5hKsPTGMGIRFMGapgeut7+mObWPc/e6X3RsvT/DlqofsgWrpVKVdOKiq0i4cVPslh8i9pQbmlpX3HgZmQfhme5rulwB9+4vu36++xJN1gq8HpAVqX0A6QLVjCwR1ZUvh5oNGGPIpih9vTdOPQLof3rnavXFugicZALP2B8c1p9xnTl9TnJ10nfmKtpN0BM7oU4oNxdoluweEX+YjwEz3msLnPAYAavIKj0+M82VpU/FB8oA4fTWxdpIuDYqi7Vw6MAW9AEluzTfw/DgOTwCvvHaIrwBATUzyTGzwMHSe4AN8wtBRsJ0IJPTYhLgEO11+XWxg45/IzlXs+RkAJMcdXDAcU/6k1jWy2pOzytARQOy0k3zmYXNJp/3DE4ut07cvdLbCEQsBzZbC7yv+JlQhb77+CV9Kzp7hi0XaOYLNdCUgyW/n0hEV7Iyxk3SUZ4zTTr9J9vnvPuFWbN0UpNPFpaSKnXpcfrbYBuV7DYZLPgEThAqQe9sKOp+drbs138DRCfoWAs4nDOsp9ZSMZpKdz4Wuh4/vIY21O117sQWWqjQlhDKCtG4+flqvbkqSMdQMvr+UNIOvTkmfz3K66tjElQcLVADLmwp/rvVVN0uSFMARKAPVmZKRjLB7TD2f6YW7Icb4zHwx0N4n3F7ov27akjK0R9DqAh6ioyx4thhR1ycxge36XLchgsDEuLPQwEkHA5ck34gtRkQxSQveTEm5Pkt2MpB6bO76HDpZAGlsvy01sNUeXN3URUt5PSAHqI5gewGLKSl07Ip0tcModAbVgn3q2y9vER4+Gmzd1KWX8oAjwEAmlYA07ARQHT6HOaO299KuPkzxzKHWXBLFJJdPt65yRvUxHnJs9mRxb6mBrr7/ECTp+RffursGxjPJXQODZlQf47V7Kbu2iXK/qbCzO5y6qUvCkcHrxd1vJ+m0JxVSMi7NyxOJa0Zd2VZotoZXN3UpNyUxJdPg5Q8QPjtJlz613WPq+UwvfDNqe58w1xwNmIDelCqLezq/2brYhpESdXQz6tyKMt7LsEVO+WxtzoHaTTXZOeoZ9cGqwrO94ddNXRxzqNlHTJ0DVNuPzvBMV05JoWMHvBwxNmtGXd1WWN0eXarnUppDS12y75QUgPR1bI/P0IbY3if8sTp6MAFrDi11SSdbrLlEYJJN6Gqffl1YQ0x/9jgtMIEs5Z0p6WWguwYOekZFfkuAz7/WFXYPRls3dUmcQPqYBBRGQ5pRjTrutSvW6zuERzV/ZBuUuOdQ34MY6xTUQc+oRh0P8Nnew1A/eoRKctKh46TBY7HzZL5+EWbULgMPN04fTAaeJAy0mXG+TsMwpxXHOBXos58ZdWFDYe/56aY6ADQU7iru4na9UyOSLv70R+pI0AWe/tjYIbSG9LE4Upqb03RXjRG+CwWyfGok3E7SiUAadv7TH+19GtlHjyohYAoAVHOKbnY69LP4YBojADiYZNuRR6cxvGK/Kl2nAyxtvhhgAnjWOsS3QHb6bu0afXTSocX6TBJAdejgtZN08nmnpZbCwdHIAPML4VPM0BGQAQoA69foLZup/TGJSkDCdS88fmCxHsDjp6P5WFwlDMwy4b38bChQ9MyeTF7h8aM3MNNlXBhP+CIBkYdn7TUP4EBuvmb8d0hYOL15szgS3sX11g/lI+H/AxoFi9JEiEyrAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/level3.png":
/*!*******************************!*\
  !*** ./src/assets/level3.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/level4.png":
/*!*******************************!*\
  !*** ./src/assets/level4.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/level5.png":
/*!*******************************!*\
  !*** ./src/assets/level5.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAkCAYAAAAXSR0AAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAVWSURBVGiB1ZrPb9xEFMe/b9ZJQGrVIkXckACF9o5EJe6UP4A/ob1zaMUFBOKOhNTc4NA/gBx6yaG0RSKAWlpAUCRKSUsJFaFtyK9NNsmuN57HwV57bM+MZ+yN0z4p0ehpZzz+zHzfe6t9hIL1P3/jLQq332Ux9SYhOibFsQkQAUQACEQiHWf+2Ec5v0jHJX+6Vn6+ui4p86v9ovCM/JpU/Lyj8dIcePtBzkWE+8w0L1h+QefxfXFObvX+hZkrMnjhdBU8KrykHpIbPCrAbwLPDapwg/nkG/DKDftngHnJ/NHkefxcAjqYfeleJF6cyW2IRPl0E0gmfx14Zqiu8CxqUOaSuicbqO4i+OElJ/AAIMDv0DlciscA9i68ciWi6Rkwx9zBAMd/rIxjvzT4q8fs6TeOR3Og7EnrL79P5jdY2AUvX3aGCQASdJE/wwQACJ7FlMTR02x5CRM8X3/8wlLv1wHQ+qWyVp2Dk1aovHwZiPa8gAI4LnfwHgCIQfTy3OgBZaiy8sZYoUKBZwBmX6sFNagwH38N7i35wkyMzgJAQAhPgBkgCbAAIwkxo2dRPGBWQg9zFn0ZYAIIHM9R/QCIWFlr5OfCM5C+HFP6SIs/WzPzc7r+aC6zBEGU/eB4ThpKCdy9C/7vph/DvL0afopTwT6On8ze3gAv3WCyBy0kGWdlR3jlg4sPNA8JTvDiA03mKweqhZfMzz0j3PCOmzrrAKcCFZgLvNgv4wxagKe7JTZ4JjXkb3ozNZj2BGQHJJe/BKKBFzydScZ0kJ7g6IUc4MV+ncQ4OQSUIOVvvcl/CGp4sgDsPPSGZ7IAzBVxyABPJyXijFXql0ASxzJIaKwGX3haNXTvgtd+bMKvZMFIL7Y4lGlK8RfjECGFZ0ospZvrdOv1ftuaKbz0HTRqGKyBH13z5VVpQXo9LHHoqcvKNjUkXy2r1MCPvgLksCY2swXFk64Th0w378CyclM1rHwL7P3ry8rJUsmrG/KKQyWJcQ6GCZ5JDbqbO1Y1bP0BbPxaC5aL5SQfbyg5eTXemOKQAs+elf1CiU0NjWrU4TqwslAblosFJonZksCh1ajqXMCghtEJKn4kB7qyAHBUC5SrFcomOEnp0GpUJzXoa1Ssfgf0V+pycragWVY2wPPJym3UqL1FYOv3hqjcLJeU6mTlTFOKf9xZ2VMNuTUH66DV6/UJeVqgj0PuWVmfWOzw2lQDrV1XJhy8BUB1PemflVF589qoUbFxEwjXasOpY8kN1UlsPFk59QOGrHwwNSr1FkG9e035eFsQZ1/XrPyM1KjhOmjjh6ZsalkQb901Kyf/nuYaFQyxeTgwgbRs8s/KB1+jFuABTmqg7k/AcLMxmLqWlE1ZPVgdn3SJxQOejxpUeIU96dRAu3+CdpfGAqauKd/ldRJzzcooJZy2a1Ta34TYut0YSFMLOp1wGEWTEweRlduqUcEStJV2wxyaCcJqwJK6AE/rs/KzUaOK3m3Q/vYYkDSzCLglBEU3cj/8j5KUMnbxg82NEqauFFvbjKlRoriW2PsL1P+nbXYlI+DB5DncElKK2VKLSi2o0grJ6lfm2w8o76fhGsTOnZbR6Y2ZLwKAOPJh91onCK8WN53C09weQBr8egBNbr1xLIcQO7+1jM1om2IbnwBJ992RD3pvT0z075vAjLdZbDxqELt3QNFO++g0JsBn6GOE8Tix59/ffU10BlfLt0HfLecO1QOe4dYX/aL/N0T4uFVoOmNgPmJ+fdQbCmS5MvvQLKb2to/OUQcnhsPnTro0uWYNuOWO51yTq0N3sq2Zl0CgqItg95dWgGmssiX8fz7zUdrAI6xSAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/level6.png":
/*!*******************************!*\
  !*** ./src/assets/level6.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAkCAYAAAAXSR0AAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAASNSURBVGiBzZq7bhtHFIb/c7iSE8uJjNhFihSG4dh1UhhIHwdwF+QNfEG6pEubF0iXB3CZQipyExBATiUgF8nwDQbk2KIkhpBlyZIjihYlmyL3pOByd8md3Z3ZnaH0A4R+LmdnZ74zl0NxCEOSrz76VNp7X0tl7BOITMrb74yBCAABFLwMvKSVKVjfsBfje/VVuf8baLs+gIcIVV8ww74/Rb/i7+F7Bp7QuXl+FhOTV2x1NheqrfodQOXqHfDqvexCIjMdyLfjv+B+Aqh/7YMl/9SZC8467Rqq6b0ZoherqDyc1QLfg0hf0M/dHwGAAaBz49ysTLx3ISIfj0LsrwRGgpeBJ8PyzutPg3PwCpXFOW2YPSJyS77EGACwXMUJeuvUFSBoVGoD+l4BO9NH99JAPccTKj+eAw5fGwEFcBqb/E0P6PvnpuMPyoRayEcMAYBiXh2E4QAa+CJtjMNcmge9XDOF2Ws14QYAeOi+uQicjDpEvU5L4OPXR+PJsLxEvn9r4IHoeqYHgTaXwbUHKCzBefkclz2ZmLwEkcSDtBpWEB5RbHCUDgIZ1i/J8gdN43VTJd/ny14Is0inTEbBkCeKBpiLEZ8OlRLleXEO6LRhQWc9VcT6PhwAjqb3QP0lgpMZtJy2cHUetLMOW/LChigfKqOF6qL+4ZkQ87yxDK4/SlIpIU+1fka+94YkWqqy11I5nlAV9VNrF/zkDzWVEvIAPQiZO38ImAynZRRMZdAcQuUnfwLdjppKCRltSvbTKcqufwCwxDzMfew5XL0D2t1MY1JKmZuSyh9djkqG5Yf6FUwe2lgBP/tHCcOGvLAVBtEO2+tgitrLUSl5vdUAV+fVJCzJeIRm+iJTUeFd5ahcXQB8X8XBmmJpk/5aOvKd2UKgePku6NV2Kghbim1K5mvUSKGWqefFKmijmk3CkqK0yTjyvTd6OarZ6I/70lD3G+DluzkY7Kncd/nA5+eoZBi0wSCHQSvQRl65F7voXtY2JbvpFKnrTw2CKK9z7QGotZMLwaaSadOxgWrik+s/bdVAW7WsvjtRcoSW3FGD/SplLS3ndXNUajXA/z7M770DaX+XL+1LBqrvc3NUEVDtaGACgJc/gszXWFvpjlb9Q+C5/gh00NTtv3VppE1k2GkZPdTgOm3VC//IZkt6aZPRtKRkuhMvk3iOxvNTfBwqtRrgtUXD7tuXR932oVTGx1ytn9n/kgs+0A6aJK73fpb2jwVMANsegF0SOesy3bGXTiXTIxBAzx4Dr/f0u+1IzP4CU1f+AgQEgZODBM4OUPT+0nYdtPN85PASIqzQT1hgVCrf9xtJeR3Jgq3hU4NWFGprB/R8abTgUiSCWwDA9MPL33HYvh3mcJZHkN5xmALe74DXn44UWoYaPO5/BwSn73iq+RkOD6r9NhMQth+ZvsAUtTXV158C7X3HnPREoOs0jTYQAAUAntr7EN03t7VGR9i56KN8bw8q/bcGam654qMvkZmO+B/3z4YCUVISlbmKE3j39LSge1HGT15ycTi27yVxCDb+OdT37TePMkXKPRL+P3wBZo2d2jHxAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/style/loading_style.js":
/*!************************************!*\
  !*** ./src/style/loading_style.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n#circle{\n    animation: loading-circle 1.4s ease-in-out infinite;\n    /* \u5706\u5185\u586B\u5145 */\n    fill: none;\n    /* \u5706\u5468\u989C\u8272 */\n    stroke: #447bfc;\n    /* \u5706\u5468\u5BBD\u5EA6 */\n    stroke-width: 2;\n}\n\n#loading-circle {\n    position: fixed;\n    z-index: 100000;\n    top: calc(50% - 100px);\n    left: calc(50% - 25px);\n}\n\n@keyframes loading-circle {\n    0% {\n        stroke-dasharray: 1px 200px;\n        stroke-dashoffset: 0;\n    }\n    30% {\n        stroke-dasharray: 100px 200px;\n        stroke-dashoffset: -15px;\n        stroke: green;\n    }\n    100% {\n        stroke-dasharray: 100px 200px;\n        stroke-dashoffset: -120px;\n    }\n}\n\n.circle-loading-svg {\n    animation: loading-rotate 1.4s linear infinite;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n}\n\n@keyframes loading-rotate {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(1turn);\n    }\n}");

/***/ }),

/***/ "./src/utils/upload.js":
/*!*****************************!*\
  !*** ./src/utils/upload.js ***!
  \*****************************/
/*! exports provided: upload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: imgJugdeLevel, AQIJugdeBgColor, AQIJugdeTextColor, getSectionTime, isExpire, openBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWpzb24tcmVwbGFjZXItZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5jb25jYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5qc29uLnN0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2xldmVsMC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9sZXZlbDIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbGV2ZWwzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2xldmVsNC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9sZXZlbDUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbGV2ZWw2LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvbG9hZGluZ19zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXBsb2FkLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy91dGlscy5qcyJdLCJuYW1lcyI6WyJ1cGxvYWQiLCJ1cmwiLCJmaWxlVXJpIiwicGFyYW1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJpbmRleE9mIiwidXBsb2FkZXIiLCJGaWxlVXRpbHMiLCJVcGxvYWRlciIsInByb2dyZXNzYmFyIiwic2hvd1Byb2dyZXNzYmFyIiwib25TdWNjZXNzIiwicmVzcG9uc2UiLCJzZXRWYWx1ZSIsImhpZGUiLCJvbkZhaWwiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJvblByb2dyZXNzIiwicHJvZ3Jlc3MiLCJwZXJjZW50IiwibG9hZGVkIiwidG90YWwiLCJ0b0ZpeGVkIiwid2luZG93IiwibmF2aWdhdG9yIiwiZGlhbG9nc1BsdXMiLCJwcm9ncmVzc1N0YXJ0IiwiaXNFeHBpcmUiLCJ0aW1lIiwiZXhwaXJlIiwic3RvcmUiLCJzdGF0ZSIsInVzZXIiLCJpc0F1dG9Mb2dpbiIsIkRhdGUiLCJub3ciLCJpbWdKdWdkZUxldmVsIiwidmFsdWUiLCJsZXZlbDAiLCJsZXZlbDIiLCJsZXZlbDMiLCJsZXZlbDQiLCJsZXZlbDUiLCJsZXZlbDYiLCJ0ZXh0Q29sb3JzIiwiQVFJSnVnZGVCZ0NvbG9yIiwiQVFJSnVnZGVUZXh0Q29sb3IiLCJnZXRTZWN0aW9uVGltZSIsIm5vd0RhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsImhvdXJzIiwiZ2V0SG91cnMiLCJvcGVuQnJvd3NlciIsIm9wZW5VcmwiLCJyZWYiLCJmaXJzdCIsImNvcmRvdmEiLCJJbkFwcEJyb3dzZXIiLCJvcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY2xvc2UiLCJpbnNlcnRDU1MiLCJjb2RlIiwibG9hZGluZ19zdHlsZSIsImV4ZWN1dGVTY3JpcHQiLCJtZXNzYWdlT2JqIiwiZGF0YSIsIm1ldGhvZCIsImNvcmRvdmFfdXBsb2FkIiwiY29yZG92YV9kb3dubG9hZCIsImNvcmRvdmFfZmlsZV9vcGVuIiwiY29yZG92YV9maWxlX3NlbGVjdCIsImNvcmRvdmFfY2FtZXJhIiwiY29yZG92YV9sb2NhdGUiLCJjb3Jkb3ZhX3NjYW4iLCJjb3Jkb3ZhX25hdmlnYXRpb24iLCJtc2dPYmoiLCJjYWxsYmFjayIsImVycm9yQ2FsbGJhY2siLCJ0aGVuIiwic3VjY2VzcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJjYXRjaCIsImUiLCJuYW1lIiwid2l0aENyZWRlbnRpYWxzIiwiZG93bmxvYWQiLCJmaWxlUGF0aCIsImZpbGV0eXBlIiwic3Vic3RyaW5nIiwibGFzdEluZGV4T2YiLCJwbHVnaW5zIiwiZmlsZU9wZW5lcjIiLCJnZXRNSU1FVHlwZSIsImNob29zZUZpbGUiLCJjYW1lcmEiLCJnZXRQaWN0dXJlIiwic3VjIiwibG9jYXRlIiwibG9jYXRpb24iLCJiYXJjb2RlU2Nhbm5lciIsInNjYW4iLCJyZXN1bHQiLCJ0ZXh0IiwicHJlZmVyRnJvbnRDYW1lcmEiLCJzaG93RmxpcENhbWVyYUJ1dHRvbiIsInNob3dUb3JjaEJ1dHRvbiIsInRvcmNoT24iLCJwcm9tcHQiLCJyZXN1bHREaXNwbGF5RHVyYXRpb24iLCJmb3JtYXRzIiwib3JpZW50YXRpb24iLCJkaXNhYmxlQW5pbWF0aW9ucyIsImRpc2FibGVTdWNjZXNzQmVlcCIsImxvY2FsTmF2aWdhdGlvbiIsInN0YXJ0IiwiYWxlcnQiLCJ0eXBlIiwidG9MbmciLCJKRCIsInRvTGF0IiwiV0QiLCJteUxuZyIsIkxvbmdpdHVkZSIsIm15TGF0IiwiTGF0aXR1ZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0Esd0NBQXdDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1BhO0FBQ2Isa0JBQWtCLG1CQUFPLENBQUMscUdBQW9DO0FBQzlELGNBQWMsbUJBQU8sQ0FBQywyRUFBdUI7QUFDN0MsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ25ELGNBQWMsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDaEQsZUFBZSxtQkFBTyxDQUFDLDZFQUF3Qjs7QUFFL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixlQUFlO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdCYTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjtBQUN4QyxjQUFjLG1CQUFPLENBQUMsMkVBQXVCO0FBQzdDLGVBQWUsbUJBQU8sQ0FBQyw2RUFB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LEtBcEJEO0FBd0JELEdBM0JELENBMkJFLE9BQU80RSxDQUFQLEVBQVU7QUFDVjNFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZMEUsQ0FBWjtBQUNEO0FBQ0YsQyIsImZpbGUiOiJqcy8xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDB4MUZGRkZGRkZGRkZGRkY7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID4gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgJFR5cGVFcnJvcignTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG5cbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHJlcGxhY2VyKSB7XG4gIGlmIChpc0NhbGxhYmxlKHJlcGxhY2VyKSkgcmV0dXJuIHJlcGxhY2VyO1xuICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXR1cm47XG4gIHZhciByYXdMZW5ndGggPSByZXBsYWNlci5sZW5ndGg7XG4gIHZhciBrZXlzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmF3TGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZWxlbWVudCA9IHJlcGxhY2VyW2ldO1xuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PSAnc3RyaW5nJykgcHVzaChrZXlzLCBlbGVtZW50KTtcbiAgICBlbHNlIGlmICh0eXBlb2YgZWxlbWVudCA9PSAnbnVtYmVyJyB8fCBjbGFzc29mKGVsZW1lbnQpID09PSAnTnVtYmVyJyB8fCBjbGFzc29mKGVsZW1lbnQpID09PSAnU3RyaW5nJykgcHVzaChrZXlzLCB0b1N0cmluZyhlbGVtZW50KSk7XG4gIH1cbiAgdmFyIGtleXNMZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIHJvb3QgPSB0cnVlO1xuICByZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICBpZiAocm9vdCkge1xuICAgICAgcm9vdCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAoaXNBcnJheSh0aGlzKSkgcmV0dXJuIHZhbHVlO1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwga2V5c0xlbmd0aDsgaisrKSBpZiAoa2V5c1tqXSA9PT0ga2V5KSByZXR1cm4gdmFsdWU7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlcicpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXY4LXZlcnNpb24nKTtcblxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFID0gd2VsbEtub3duU3ltYm9sKCdpc0NvbmNhdFNwcmVhZGFibGUnKTtcblxuLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4vLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3OVxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgPSBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBhcnJheSA9IFtdO1xuICBhcnJheVtJU19DT05DQVRfU1BSRUFEQUJMRV0gPSBmYWxzZTtcbiAgcmV0dXJuIGFycmF5LmNvbmNhdCgpWzBdICE9PSBhcnJheTtcbn0pO1xuXG52YXIgaXNDb25jYXRTcHJlYWRhYmxlID0gZnVuY3Rpb24gKE8pIHtcbiAgaWYgKCFpc09iamVjdChPKSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgc3ByZWFkYWJsZSA9IE9bSVNfQ09OQ0FUX1NQUkVBREFCTEVdO1xuICByZXR1cm4gc3ByZWFkYWJsZSAhPT0gdW5kZWZpbmVkID8gISFzcHJlYWRhYmxlIDogaXNBcnJheShPKTtcbn07XG5cbnZhciBGT1JDRUQgPSAhSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCB8fCAhYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnY29uY2F0Jyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuY29uY2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmNvbmNhdFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQGlzQ29uY2F0U3ByZWFkYWJsZSBhbmQgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgYXJpdHk6IDEsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgY29uY2F0OiBmdW5jdGlvbiBjb25jYXQoYXJnKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcbiAgICB2YXIgbiA9IDA7XG4gICAgdmFyIGksIGssIGxlbmd0aCwgbGVuLCBFO1xuICAgIGZvciAoaSA9IC0xLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIEUgPSBpID09PSAtMSA/IE8gOiBhcmd1bWVudHNbaV07XG4gICAgICBpZiAoaXNDb25jYXRTcHJlYWRhYmxlKEUpKSB7XG4gICAgICAgIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKEUpO1xuICAgICAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobiArIGxlbik7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBsZW47IGsrKywgbisrKSBpZiAoayBpbiBFKSBjcmVhdGVQcm9wZXJ0eShBLCBuLCBFW2tdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihuICsgMSk7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KEEsIG4rKywgRSk7XG4gICAgICB9XG4gICAgfVxuICAgIEEubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xudmFyIGdldFJlcGxhY2VyRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWpzb24tcmVwbGFjZXItZnVuY3Rpb24nKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcblxudmFyICRTdHJpbmcgPSBTdHJpbmc7XG52YXIgJHN0cmluZ2lmeSA9IGdldEJ1aWx0SW4oJ0pTT04nLCAnc3RyaW5naWZ5Jyk7XG52YXIgZXhlYyA9IHVuY3VycnlUaGlzKC8uLy5leGVjKTtcbnZhciBjaGFyQXQgPSB1bmN1cnJ5VGhpcygnJy5jaGFyQXQpO1xudmFyIGNoYXJDb2RlQXQgPSB1bmN1cnJ5VGhpcygnJy5jaGFyQ29kZUF0KTtcbnZhciByZXBsYWNlID0gdW5jdXJyeVRoaXMoJycucmVwbGFjZSk7XG52YXIgbnVtYmVyVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcygxLjAudG9TdHJpbmcpO1xuXG52YXIgdGVzdGVyID0gL1tcXHVEODAwLVxcdURGRkZdL2c7XG52YXIgbG93ID0gL15bXFx1RDgwMC1cXHVEQkZGXSQvO1xudmFyIGhpID0gL15bXFx1REMwMC1cXHVERkZGXSQvO1xuXG52YXIgV1JPTkdfU1lNQk9MU19DT05WRVJTSU9OID0gIU5BVElWRV9TWU1CT0wgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgc3ltYm9sID0gZ2V0QnVpbHRJbignU3ltYm9sJykoJ3N0cmluZ2lmeSBkZXRlY3Rpb24nKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgcmV0dXJuICRzdHJpbmdpZnkoW3N5bWJvbF0pICE9PSAnW251bGxdJ1xuICAgIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAgIHx8ICRzdHJpbmdpZnkoeyBhOiBzeW1ib2wgfSkgIT09ICd7fSdcbiAgICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICAgIHx8ICRzdHJpbmdpZnkoT2JqZWN0KHN5bWJvbCkpICE9PSAne30nO1xufSk7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXdlbGwtZm9ybWVkLXN0cmluZ2lmeVxudmFyIElMTF9GT1JNRURfVU5JQ09ERSA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICRzdHJpbmdpZnkoJ1xcdURGMDZcXHVEODM0JykgIT09ICdcIlxcXFx1ZGYwNlxcXFx1ZDgzNFwiJ1xuICAgIHx8ICRzdHJpbmdpZnkoJ1xcdURFQUQnKSAhPT0gJ1wiXFxcXHVkZWFkXCInO1xufSk7XG5cbnZhciBzdHJpbmdpZnlXaXRoU3ltYm9sc0ZpeCA9IGZ1bmN0aW9uIChpdCwgcmVwbGFjZXIpIHtcbiAgdmFyIGFyZ3MgPSBhcnJheVNsaWNlKGFyZ3VtZW50cyk7XG4gIHZhciAkcmVwbGFjZXIgPSBnZXRSZXBsYWNlckZ1bmN0aW9uKHJlcGxhY2VyKTtcbiAgaWYgKCFpc0NhbGxhYmxlKCRyZXBsYWNlcikgJiYgKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gIGFyZ3NbMV0gPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIC8vIHNvbWUgb2xkIGltcGxlbWVudGF0aW9ucyAobGlrZSBXZWJLaXQpIGNvdWxkIHBhc3MgbnVtYmVycyBhcyBrZXlzXG4gICAgaWYgKGlzQ2FsbGFibGUoJHJlcGxhY2VyKSkgdmFsdWUgPSBjYWxsKCRyZXBsYWNlciwgdGhpcywgJFN0cmluZyhrZXkpLCB2YWx1ZSk7XG4gICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgfTtcbiAgcmV0dXJuIGFwcGx5KCRzdHJpbmdpZnksIG51bGwsIGFyZ3MpO1xufTtcblxudmFyIGZpeElsbEZvcm1lZCA9IGZ1bmN0aW9uIChtYXRjaCwgb2Zmc2V0LCBzdHJpbmcpIHtcbiAgdmFyIHByZXYgPSBjaGFyQXQoc3RyaW5nLCBvZmZzZXQgLSAxKTtcbiAgdmFyIG5leHQgPSBjaGFyQXQoc3RyaW5nLCBvZmZzZXQgKyAxKTtcbiAgaWYgKChleGVjKGxvdywgbWF0Y2gpICYmICFleGVjKGhpLCBuZXh0KSkgfHwgKGV4ZWMoaGksIG1hdGNoKSAmJiAhZXhlYyhsb3csIHByZXYpKSkge1xuICAgIHJldHVybiAnXFxcXHUnICsgbnVtYmVyVG9TdHJpbmcoY2hhckNvZGVBdChtYXRjaCwgMCksIDE2KTtcbiAgfSByZXR1cm4gbWF0Y2g7XG59O1xuXG5pZiAoJHN0cmluZ2lmeSkge1xuICAvLyBgSlNPTi5zdHJpbmdpZnlgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWpzb24uc3RyaW5naWZ5XG4gICQoeyB0YXJnZXQ6ICdKU09OJywgc3RhdDogdHJ1ZSwgYXJpdHk6IDMsIGZvcmNlZDogV1JPTkdfU1lNQk9MU19DT05WRVJTSU9OIHx8IElMTF9GT1JNRURfVU5JQ09ERSB9LCB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCwgcmVwbGFjZXIsIHNwYWNlKSB7XG4gICAgICB2YXIgYXJncyA9IGFycmF5U2xpY2UoYXJndW1lbnRzKTtcbiAgICAgIHZhciByZXN1bHQgPSBhcHBseShXUk9OR19TWU1CT0xTX0NPTlZFUlNJT04gPyBzdHJpbmdpZnlXaXRoU3ltYm9sc0ZpeCA6ICRzdHJpbmdpZnksIG51bGwsIGFyZ3MpO1xuICAgICAgcmV0dXJuIElMTF9GT1JNRURfVU5JQ09ERSAmJiB0eXBlb2YgcmVzdWx0ID09ICdzdHJpbmcnID8gcmVwbGFjZShyZXN1bHQsIHRlc3RlciwgZml4SWxsRm9ybWVkKSA6IHJlc3VsdDtcbiAgICB9XG4gIH0pO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRlFBQUFBa0NBWUFBQUFYU1IwQUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQU5QU1VSQlZHaUIzWnEvVDl0QUZNZS9mc0lKWW1tUk9qQlhGUFlPU04xTC80QU9MQWdzMnIxYjEvNEQzYkt4SURHU0RHVmdvdDFic2ZRUGFOVUZKQ3VPSWVrNUNkaE8vTG8wbGZHdjJNblpYUHBaa3R6MytlN2UzWHYyMDhVYUlweWVucjRjajhmdmlPZ0ZNei9TZFYwSEFFM1RFUDVNYWxOUlM3TEp5K1hsSmZyOWZyaUpBZndFY01iTXpZT0RnMi9SYSs2TjBHcTF6bXUxMnJZTVIyYlZxaHAzR3AxT0I3WnRUek03MHpUdGcyRVkzLy8xUC9seWNuTHlvMTZ2cnhlZHBJcFJtVmRMdzNFY1hGMWRaZHFFMFRUdHRXRVlud0NBQUtEWmJKN1hhclgxaVFFejMvc01FOVhDTmlwcGVYeEp3dmQ5bUthWnl6WTB4dEhoNGFFT0FOUm9OT3BMUzB2YnNod3Bjd0hLMk9nb3BtbGlQQjZuNmlrOFhsNWVmZzhBdExhMjFwcG5JbFV2UUptYmFWa1dCb05CckQwUHpQd1dBQ2dJZ28yMFFTTVhTSGRFbFdnR0FDRUVycSt2WTdZRmVIcDhmTHhGdXE1dkx0cml5SjZUNTNtRjc1c3BiRkZWRVpDbXFiQ1pwbWtpQ0lKWWUxR0NJSGhDRCtHSUtxbk96TEFzQzhQaE1HWTdLNVExMkx4YW1zMnNtdXdORTBMZzV1WW1OdTQ4MENJdGdDd05BRHpQUTd2ZGp2a3dMNGtwUDg5a0Z5WFMyKzIybFB0bWxOaERTZFVGa0tsMU9oM2MzdDdHeHBVQmhYK291Z0JGdEduemRSd0h2VjR2WmkrTGV5bWZOQkdWRjZkbzM2N3J3cktzV0I4eVNheEQvK2RVVHhwWEpxa1BwYlRKWm1rcVI3TnQyN2k3dTR2Wnk2YlVPbFNWVkJkQ1FBZ1I2Nk1NcUV3blo5VmticGpydW5sTzNxVVJleWhGSjZSQ3hNNnowWE9lSUJXbWxEcFVsUWVYYmR0d1hUZldSNWxNUFJ5Wm9HSTZaMm1PNDBUL3Nhd0VpamFvbE02emJyVHJ1dElQUGZJaXRRNVZJZEtaK2NFV0U1QmNoMlpwVlVWenQ5dUY3L3NKcmxhRGtuWG9ySkhlNy9kbi9wTk5Gcm5yVU5WVDNmTzhVZzg5OGtMTTdDOTZxak16dXQxdWhwdlZRRVEyQWZnTnFKL09XVnF2MThOb05NcDB0aUl1aUptL3FwN09XZHBnTUNqdHNMZ2d2d3pEdUNBaWFvUmJWVXZuTE0zenZNb09QWEp3QkFDMHU3djdoWmsvTDFxcU03TktpOWxiV1ZuNUNQd3RtL2IyOWw0RlFmQnprVkpkQ0tIS2ZST2FwcjNaMmRueGdGQWR1cisvL3l3YXFSTlVTL1hoY0ZqSllYRU96a2FqMGZQSnU2RkE1QTFtQUdnMEd2WFYxZFVXZ0EwaTJsVHRiV1hmOXgreTNtUk1lU1g4RDdGM0RsekhJeWNjQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRlFBQUFBa0NBWUFBQUFYU1IwQUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQVdBU1VSQlZHaUJ6VnBMYnh4RkVQNnFkeXhISmlJZ1JRSnhSQ2E1SUNFNFJPTEdnU0RseWcvZ0FCSW5GRTVJblBnRDNQZ0JEckxFSlQ1dzhZV1FHNUVTaGFDWUNMQmk3TFhsUitLMVk1TEYrQkhidThWaFpuYTZlNnA3dW1jZlRrbVdwbDFUMVRYZmZQWFFiQk1zK2VCci9uRHZtSytPS2J6ZlpadzdlNGJIaUFBaWdBQVFzWGF0L1dWcjVkR1YxK3kvRjVrL2g4NjA0OHI5Rk5sUDY1ZWY1aEtzUFRHTUdJUkZNR2FwZ2V1dDcrbU9iV1BjL2U2WDNSc3ZUL0RscW9mc2dXcnBWS1ZkT0tpcTBpNGNWUHNsaDhpOXBRYm1scFgzSGdabVFmaG1lNXJ1bHdCOSs0dnUzNisreEpOMWdxOEhwQVZxWDBBNlFMVmpDd1IxWlV2aDVvTkdHUElwaWg5dlRkT1BRTG9mM3JuYXZYRnVnaWNaQUxQMkI4YzFwOXhuVGw5VG5KMTBuZm1LdHBOMEJNN29VNG9OeGRvbHV3ZUVYK1lqd0V6M21zTG5QQVlBYXZJS2owK004MlZwVS9GQjhvQTRmVFd4ZHBJdURZcWk3Vnc2TUFXOUFFbHV6VGZ3L0RnT1R3Q3Z2SGFJcndCQVRVenlUR3p3TUhTZTRBTjh3dEJSc0owSUpQVFloTGdFTzExK1hXeGc0NS9JemxYcytSa0FKTWNkWERBY1UvNmsxald5MnBPenl0QVJRT3kwazN6bVlYTkpwLzNERTR1dDA3Y3ZkTGJDRVFzQnpaYkM3eXYrSmxRaGI3NytDVjlLenA3aGkwWGFPWUxOZENVZ3lXL24waEVWN0l5eGszU1VaNHpUVHI5Sjl2bnZQdUZXYk4wVXBOUEZwYVNLblhwY2ZyYllCdVY3RFlaTFBnRVRoQXFRZTlzS09wK2RyYnMxMzhEUkNmb1dBczRuRE9zcDlaU01acEtkejRXdWg0L3ZJWTIxTzExN3NRV1dxalFsaERLQ3RHNCtmbHF2YmtxU01kUU12citVTklPdlRrbWZ6M0s2NnRqRWxRY0xWQURMbXdwL3J2VlZOMHVTRk1BUktBUFZtWktSakxCN1REMmY2WVc3SWNiNHpId3gwTjRuM0Y3b3YyN2FrakswUjlEcUFoNmlveXg0dGhoUjF5Y3hnZTM2WExjaGdzREV1TFBRd0VrSEE1Y2szNGd0UmtReFNRdmVURW01UGt0Mk1wQjZiTzc2SERwWkFHbHN2eTAxc05VZVhOM1VSVXQ1UFNBSHFJNWdld0dMS1NsMDdJcDB0Y01vZEFiVmduM3EyeTl2RVI0K0dtemQxS1dYOG9BandFQW1sWUEwN0FSUUhUNkhPYU8yOTlLdVBrenh6S0hXWEJMRkpKZFB0NjV5UnZVeEhuSnM5bVJ4YjZtQnJyNy9FQ1RwK1JmZnVyc0d4alBKWFFPRFpsUWY0N1Y3S2J1MmlYSy9xYkN6TzV5NnFVdkNrY0hyeGQxdkorbTBKeFZTTWk3Tnl4T0phMFpkMlZab3RvWlhOM1VwTnlVeEpkUGc1UThRUGp0Smx6NjEzV1BxK1V3dmZETnFlNTh3MXh3Tm1JRGVsQ3FMZXpxLzJicllocEVTZFhRejZ0eUtNdDdMc0VWTytXeHR6b0hhVFRYWk9lb1o5Y0dxd3JPOTRkZE5YUnh6cU5sSFRKMERWTnVQenZCTVYwNUpvV01IdkJ3eE5tdEdYZDFXV04wZVhhcm5VcHBEUzEyeTc1UVVnUFIxYkkvUDBJYlkzaWY4c1RwNk1BRnJEaTExU1NkYnJMbEVZSkpONkdxZmZsMVlRMHgvOWpndE1JRXM1WjBwNldXZ3V3WU9la1pGZmt1QXo3L1dGWFlQUmxzM2RVbWNRUHFZQkJSR1E1cFJqVHJ1dFN2VzZ6dUVSelYvWkJ1VXVPZFEzNE1ZNnhUVVFjK29SaDBQOE5uZXcxQS9lb1JLY3RLaDQ2VEJZN0h6Wkw1K0VXYlVMZ01QTjA0ZlRBYWVKQXkwbVhHK1RzTXdweFhIT0JYb3M1OFpkV0ZEWWUvNTZhWTZBRFFVN2lydTRuYTlVeU9TTHY3MFIrcEkwQVdlL3RqWUliU0c5TEU0VXBxYjAzUlhqUkcrQ3dXeWZHb2szRTdTaVVBYWR2N1RIKzE5R3RsSGp5b2hZQW9BVkhPS2JuWTY5TFA0WUJvakFEaVlaTnVSUjZjeHZHSy9LbDJuQXl4dHZoaGdBbmpXT3NTM1FIYjZidTBhZlhUU29jWDZUQkpBZGVqZ3RaTjA4bm1ucFpiQ3dkSElBUE1MNFZQTTBCR1FBUW9BNjlmb0xadXAvVEdKU2tEQ2RTODhmbUN4SHNEanA2UDVXRndsRE13eTRiMzhiQ2hROU15ZVRGN2g4YU0zTU5ObFhCaFArQ0lCa1lkbjdUVVA0RUJ1dm1iOGQwaFlPTDE1c3pnUzNzWDExZy9sSStIL0F4b0ZpOUpFaUV5ckFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZRQUFBQWtDQVlBQUFBWFNSMEFBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFZWFNVUkJWR2lCMVZwSmJ4eEZGUDZxMG1OTDJNYUFja09BZ2t4eTRnS1NCZUlhZ3hRSWlBcy9BTzdjdVBJSHVQRUQ4Z09TUXc2eGdwUTRpaUFPVHV3UUsyUWgzajNCY1d6SFczdkxlR1pjajBOUGQ5ZldYZFdlOGNMem9jZlZyNnZlKzk0NlBZOUJvdytIdmpoYjJYMzFZNG1YUGlWUWQxZXBzOFRBd0JnREF3TnZYTTAxbnZ6UEdBT1g3bHVmVDY0ODRsWFd0T2YxOWJ5emN1UmtqSVBwQ3VmUTVmSnZtTjM2VjE0aWdFMkNVYi9nN0NMT3pkN1JuMUgyUDNYenMydmRiYS8zeFlLWXl0dUI0cHFDK2J5NmdwWnpuRUJ4aGRjbXB3bHFlcFlQM1Y0YXdmREwwVndlQXZwSjRHZDhVMDRZZWZ6aDdSdTlFMTJsemo0aVF2SkhqaXNJQkVCNDg4cHJTTzRKSjY5OGhjbGI4R3dYVFc3TU9NRUVBQVo4eFRudW43ankzcmNLb08vZStPVGFtMjNkUFc0UWRPWGhDWUsrTDl3OFZzQmc1UkhPczAwNXMyaWp0b25yODdlY1lNcEV3QVhjKzdnVUFYcTFwNzJqMU5GWDFNcitJT2dHd2Y3MkF5d0c5VGxiTlo0Y1RUWWFtTCtGeWw2bEVLQUEzdUFMeXo4QkFIK24vYTFMV1lwbENwL2pMVEtQeU5qWDExaXA4dkF5bHJtZk94SmtHbHk4aS9MV1hGRXdJeUw4QUFCQmpmWk9FeEVFa3hKcXhBQXdnQnBYU0ZkaThVTEtTeHBQeWl2dkYyMW80MDNPZ2VVc0lwWFhTMDRHd2NoTEp3YUc4WEFLSThzUGlnT1owdnU0Y3FvMzZBbzZ6eERJQkVXU1FWV2VSWWxkNHhVRThGeWdVaVBZakNRWXdMV3pJMTZ5RzBuakZaQ2VKd2F3REowc3hsK3ZiV0NnWU42MEVZZm9EV0l3czcweEZTVDJNRVY1U2RqRWN3emxVd1hCR3NwbjhrSTFuaVJmbnB5SjV4S1Vzd3hlaTV3RDgzOWdWMVNiaEJPQW9KTkJra2N5d2pieFBNbkRzbmh0WVVzYW1QbThVTUJNMG9OTXVqY2J4bmZMbWVvRURDNE9ZMjc3UlJNb3FoUWtJUVhUY3FxaUVpakk4V1lsRkJrRUtGdjV6UFNTNWswamxSaThzcHpNa0RNdkZZMXZUR04wNWRIKzBiT1FFdkt5NWZaVEdFemhxVUFSa1R4TVA4dVppZ0FRQTFraUlXYlJkVnF0aHJpNThHZFQ0TmtvMEpPK0VvcUlGUFF0RElDc2ZMSENFQm1FZ1RQU052UklMNDBiN3NLWXJ2MitNSVM2cU84SHMxd0s5S1N2Q2grQllndXZUT0VCNkVYSVZoaVN3cVRjSTY4aW91WlJ5YVBobDRxR2x2N0NpMWRMclVGUUk2VW9xY3Fub0RUYm8rWVhrWGhOS2tJZUhwWUM1VTVGc3B3VG16TjR0UGEwS2REeVNDbEtRTnpQYWNuZFdVU1FnR0xyVWQxaG14cWhXSS9xSWFmMC9GbzF4T0RpY0RONE9ja0krY2pLbGpWUER6dDJQYXEwMWUybEVRZ1NMUUV1aTR5aWxGUkxtVEtMaU5RVlNLbmpPUGFvZDVaSDhiS3kwZ3hXWHFSNUtDdFVHRkpGaXhjRzRJQjZWSXRCcHpabk1SWk90UUl2SjBsRktmVVdwemZxUmVnUWV0U29NRnJPY2hoL3JScmlyc2ZMNGxaUkkrVFZ5dXpWendFQTdEMnFVVVFNNVRPTTErRE5mblBsbDRwa09ZZVhSNUgxN3ZNZ0tJaXFPdVZhdVdpUG1oKzJhdDcwNzFIdEhZUk56dGlnOTFiK3h1cnVldk1vRmFDQUN2UisvNmNlZFdyckdhWTN5eTJDeVorQytPMjdqNGVsN3h3cG45Y2Fpb2ZYbzY3dGhyaS84ckExQ0JXa3dQZ2hJTWZEb2lKU3ZEQWNabzlLUkJoZGJlMGJwQ0praGp5UUU0cUgxNk1tTDBvS3BTTGd3ZW9UaE5XTjFxQ3pEd3FpSCtOODNqazJpcEIzRVlrVmxUd2FXYm5WUEJzRlVsRXM1K3oySEo1dFAyOGVsU1lvK2FhVS85VXlEVDIvSCtQaU5VdDZrRS9YdlZrM25vVTNLNCtHMWZCQVgzcjRVbENuZWkxQVVNb09SYlV5SDhjZVZRaUJoOGNBVEhDMkhBQUlDWFRTVmhnaTVjM0tuRjFFWUhwWW9iQlZpNUJ2ZW5tOFBvYXQybmJMY05rdkNmQmhMb2lHekNFRy8yR0d2TmtqWlVRbWJ4OXFEQ1ZvdkxrelU0M1A1ZTNubU45WlBHb3NBV0FhNTJlR09Xdmp2eHJDUTFJd0Y0VDB6M3RnTEFOTTY4Q1lZNysxYW9qeFEzcnA0U1RDQlFEZzIyZi9HZGdUOWV1dTRTcFprZXdSSFhnYm9JaXhiUGZxWWc5UHc4bWpCVEdsZFZIcCtBVm9wS09kTHljK3IxRnQwalpjNWU4MWNJSmdHQ1EyUWtIdkZnU01oVlBZcWI4NlNoQVRZc0QzK081SkZaQytlRlRPVFg1UU56elZkM1l6QXhTNEJzYmdhU3oxM0xtZGVTeFZsbzhNd0ppSTBDOEVQdG83WDc0Y3J6R0Q2MnBQKzJzNGNZbEFwOXQ1MnhuM3lEVTMxenpHczNsam9yam9HUGxHZFF1UDE4Y09GVGlKQ0dDVElPb1hZQmZ4dFRrUy9oK2VDZ016R2MyVW9nQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGUUFBQUFrQ0FZQUFBQVhTUjBBQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBV0pTVVJCVkdpQnpWckxiaHhGRkQyM3VrZm1zZUNoaUFobGgweXlZMEVnVWlRZ0c4SUhzR0RIZ3NlYUhSSXJmb0FkSCtBUHdCSUl5V1FSc0NKTXdNR0pqQmNJc0dNaGhCQVFlV1l5NDBkaXo5aHpXWFQzZEQxdWRWZjM5SXc1MGtqdHZuVnYzVHBWZFc1NXBnZ1dlT3VqMS9tby93SFUzR1dNVHA3ZzFsTXRFQUZJUDlvejYrOHRtL0VNT0RZTzhYUGlJL2Z6OXQwYzRuKy9CRDM0dzZBSHdEWVlTMUQ4R2IzeTR5M2J4OGhndFBIK2RaNTc1bW9WY3NKSnRXMGg1TWcyMHc5QzI4a1JkVmVoZW10bHpaWXdvby9weXVwUDJZdHg3NlAxdCsveW8rZm1xNU9EY0ZLdGRtd1JYSjlVaWVENlVBZmJpTzU5VmNHRDNxUlhWNzhBQUFVQW80MTNydU9SWitmQmpHUlZweC8yUEJzZmdGZ1BIaDZEREp1ZFpISGY1STAvR2VoNEYxRjd1YUxYYUlIdlhHd0JnT0pyODNOb25ia0twUE02TVRsQ2pDSS9iM3dyNTZMSkZXMzFFTzBzQXllSEZiM29TUnkyUGdRQWhYTlhGcDBCMWlSSEhxUUFLNGFmVkhNbkdPRVlwbDlvM3dXSXV0K0RIdjVaMlMvSmg5NERnQmpIaCtjUnB5c2lxemxJYzhxa2FQeHNhNVBseHdDVGFYWmpwSEVNRzRQSVE0SGg1d3dpOTJPWTJ1UE5XWWJhMzRMcTNRbHE2MG5tT1Y2NWZDbm11Yk1YakJXZ2sycTBoNS9nOGQ5Y2dWUWRMc0VJamNIUVNDVXJmamFDWWxKcDJLdWhteUl1eFU2R0dqbFM4c1hrSkM5TVVxMTFWeEFqOTdNSUxvcWg5Y3kyelNGWVJ0UmVCa2FEOG9abFlENFQrNGtqYStzTEc3SXVPVVYrZWsvNlRuQnlaUC9rQnNsVmdxanpIZWpoWDZLdERtSnB1K3ZJU1hXM3QrTlhhMkF1d1lhZU5xckRadDlxZnhPcXZ5NTUxRWFjOXdodjhuS1JrbVpjS0c2V09VU0hIVko5TVF5UXBhYytIVTVsYWRoTmprZ05JMDQ2dGpYME5JdVVIUU0xaTVRZ0UxcVJpbmFXQVI3YW5VOE1XVU9kSXVXUmhkTHRiaGVwMmVod05nSmZrWW82MzRJTy8zWnphUUN5aGpya0pJbmtXMS9jakFYYk1TT251ZzU3aTVUZHNSQkRJbFh0L1FyVjM1Q1RiQUN4c1dwS3QyTkdLZ250QXNqUnQzK2dEb2NWS1ZtSG5WVTc2Q0JxM3hENmJBNnhYMmZnSmFlMFNCWEpoTjFWblNKVlFZZjFJaFcxYndCODRrbW1HYmdhYWgrR1BlZTl3aUkxYnFIYmt0YVRGNmxxT3B5UnFqbzNRVWYzWE4rR0VSTllFRzg5S1d1RXRZdFVQbEVKcVFFNkxFcEdEUjNlK3cxcTcyZTV2NFlScHdjTWQ5N3JGcWtBSFFZQVlyTDBOSHNvamxGVmgyblFRZFJaa1pPWUFzWWFtcERENFNzdWhWT2t4bzNMWTVTVEkrOEV1Zkxyei9rcVZwMFZDTXRsYWpBMGxFQm1zYkVUQ1M1U1lUcnNvRUtoQ3lsU3Fuc1ROR2g3T3BzT1luSDI5SmwydG51ZEl1WFg0VXBGeWpxdUphVEsrYXVEVGFqOVRkYzJaVGdIZStrd1hFeE9UbkJkY29LTGxHaHppeFFOMmxEZEh6eE8wMFdzSitLUXFxT0lZTU5XWFljQnFValYxR0V3VkhkVjdtUUcwTGE4T2RQMWk1U3R3MW5qOGhnbU9ZR0ZEdVlDaU83ZkFnMjdibUl6UXNFWHpQKzNJbVhIZ0ZPa2FIOExkTER0SCswTWtIOGZHalF3dTBoeEJWSjF2K1oxR0VjN1VMM2JuZ0hNRGpGT0hnd1JQZGJ5a1ZOY3BJUnpZMmpsTDlCaFlqWko5Y1VZdnpzSnVUWXpmUkMxRlVqMWpaZjY0Uzc5ZlZ2OC9idm9jb0hPWWhPM1VVcGlxTjV0ME5BY3hpbGhUWUdQdFpKb0RtcjhDZ0JKQkFUYzVpQ1k0Y0ltSnZYMVhyaEFIdjlneTc0aGQwcWczK20xMVRXRjF1T2ZtZ1lmT2JESUtWbTFPakgyS3JZSnJud2JKYzNuYUdlcVh4WlhBeThBZ0tJWEZyN0I4ZTdYbGpGZ1lIbFRyNS8yN0t4dzczVVp5OCszSzNqWStDK1c5Y0U5L0xQN0NaRGV2cU9YRnQvQThMNTEzcEFKOE45NmswZ1dTSzJod3hLcHFyOE9ITzlOemtValVPL1NXNzhNZ0pSUUFLQ1hQMy9lWGFsSUIrWWh0WFM3NnpFZ3Q2dFJwTlRCM1VZdkoweUFKWXpveGV4dUtDQ2NQUG5hL0J6T1hsekVhSEFlcmFjdkpHY25TcHVtbi9USXhLTE44Nno5bmZ1aHNKMW9HM1pPN2Y5MEpMTmJlQ1g4UDh5MFZySVRQQXdoQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRlFBQUFBa0NBWUFBQUFYU1IwQUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQVZXU1VSQlZHaUIxWnJQYjl4RUZNZS9iOVpKUUdyVklrWGNrQUNGOW81RUplNlVQNEEvb2IxemFNVUZCT0tPaE5UYzROQS9nQng2eWFHMFJTS0FXbHBBVUNSS1NVc0pGYUZ0eUs5Tk5zbXVONTdId1Y1N2JNK01aK3lOMHo0cDBlaHBaenorekh6ZmU2dDloSUwxUDMvakxRcTMzMlV4OVNZaE9pYkZzUWtRQVVRQUNFUWlIV2YrMkVjNXYwakhKWCs2Vm42K3VpNHA4NnY5b3ZDTS9KcFUvTHlqOGRJY2VQdEJ6a1dFKzh3MEwxaCtRZWZ4ZlhGT2J2WCtoWmtyTW5qaGRCVThLcnlrSHBJYlBDckFid0xQRGFwd2cvbmtHL0RLRGZ0bmdIbkovTkhrZWZ4Y0FqcVlmZWxlSkY2Y3lXMklSUGwwRTBnbWZ4MTRacWl1OEN4cVVPYVN1aWNicU80aStPRWxKL0FBSU1EdjBEbGNpc2NBOWk2OGNpV2k2Umt3eDl6QkFNZC9ySXhqdnpUNHE4ZnM2VGVPUjNPZzdFbnJMNzlQNWpkWTJBVXZYM2FHQ1FBU2RKRS93d1FBQ0o3RmxNVFIwMng1Q1JNOFgzLzh3bEx2MXdIUStxV3lWcDJEazFhb3ZId1ppUGE4Z0FJNExuZndIZ0NJUWZUeTNPZ0JaYWl5OHNaWW9VS0Jad0JtWDZzRk5hZ3dIMzhON2kzNXdreU16Z0pBUUFoUGdCa2dDYkFBSXdreG8yZFJQR0JXUWc5ekZuMFpZQUlJSE05Ui9RQ0lXRmxyNU9mQ001QytIRlA2U0lzL1d6UHpjN3IrYUM2ekJFR1UvZUI0VGhwS0NkeTlDLzd2cGgvRHZMMGFmb3BUd1Q2T244emUzZ0F2M1dDeUJ5MGtHV2RsUjNqbGc0c1BOQThKVHZEaUEwM21Ld2VxaFpmTXp6MGozUENPbXpyckFLY0NGWmdMdk5ndjR3eGFnS2U3SlRaNEpqWGtiM296TlpqMkJHUUhKSmUvQktLQkZ6eWRTY1owa0o3ZzZJVWM0TVYrbmNRNE9RU1VJT1Z2dmNsL0NHcDRzZ0RzUFBTR1o3SUF6QlZ4eUFCUEp5WGlqRlhxbDBBU3h6SklhS3dHWDNoYU5YVHZndGQrYk1LdlpNRklMN1k0bEdsSzhSZmpFQ0dGWjBvc3BadnJkT3YxZnR1YUtiejBIVFJxR0t5QkgxM3o1VlZwUVhvOUxISG9xY3ZLTmpVa1h5MnIxTUNQdmdMa3NDWTJzd1hGazY0VGgwdzM3OEN5Y2xNMXJId0w3UDNyeThySlVzbXJHL0tLUXlXSmNRNkdDWjVKRGJxYk8xWTFiUDBCYlB4YUM1YUw1U1FmYnlnNWVUWGVtT0tRQXMrZWxmMUNpVTBOaldyVTRUcXdzbEFibG9zRkpvblprc0NoMWFqcVhNQ2dodEVKS240a0I3cXlBSEJVQzVTckZjb21PRW5wMEdwVUp6WG9hMVNzZmdmMFYrcHljcmFnV1ZZMndQUEp5bTNVcUwxRllPdjNocWpjTEplVTZtVGxURk9LZjl4WjJWTU51VFVINjZEVjYvVUplVnFnajBQdVdWbWZXT3p3MmxRRHJWMVhKaHk4QlVCMVBlbWZsVkY1ODlxb1ViRnhFd2pYYXNPcFk4a04xVWxzUEZrNTlRT0dySHd3TlNyMUZrRzllMDM1ZUZzUVoxL1hyUHlNMUtqaE9tampoNlpzYWxrUWI5MDFLeWYvbnVZYUZReXhlVGd3Z2JSczhzL0tCMStqRnVBQlRtcWc3ay9BY0xNeG1McVdsRTFaUFZnZG4zU0p4UU9lanhwVWVJVTk2ZFJBdTMrQ2RwZkdBcWF1S2QvbGRSSnp6Y29vSlp5MmExVGEzNFRZdXQwWVNGTUxPcDF3R0VXVEV3ZVJsZHVxVWNFU3RKVjJ3eHlhQ2NKcXdKSzZBRS9ycy9LelVhT0szbTNRL3ZZWWtEU3pDTGdsQkVVM2NqLzhqNUtVTW5ieGc4Mk5FcWF1RkZ2YmpLbFJvcmlXMlBzTDFQK25iWFlsSStEQjVEbmNFbEtLMlZLTFNpMm8wZ3JKNmxmbTJ3OG83NmZoR3NUT25aYlI2WTJaTHdLQU9QSmg5MW9uQ0s4V041M0MwOXdlUUJyOGVnQk5icjF4TEljUU83KzFqTTFvbTJJYm53Qko5OTJSRDNwdlQwejA3NXZBakxkWmJEeHFFTHQzUU5GTysrZzBKc0JuNkdPRThUaXg1OS9mZlUxMEJsZkx0MEhmTGVjTzFRT2U0ZFlYL2FML04wVDR1RlZvT21OZ1BtSitmZFFiQ21TNU12dlFMS2IydG8vT1VRY25oc1BuVHJvMHVXWU51T1dPNTF5VHEwTjNzcTJabDBDZ3FJdGc5NWRXZ0dtc3NpWDhmejd6VWRyQUk2eFNBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGUUFBQUFrQ0FZQUFBQVhTUjBBQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBU05TVVJCVkdpQnpacTdiaHRIRkliL2M3aVNFOHVKak5oRmloU0c0ZGgxVWhoSUh3ZHdGK1FOZkVHNnBFdWJGMGlYQjNDWlFpcHlFeEJBVGlVZ0Y4bndEUWJrMktJa2hwQmx5WklqaWhZbG15TDNwT0J5ZDhtZDNaM1puYUgwQTRSK0xtZG5aNzR6bDBOeENFT1Nyejc2Vk5wN1gwdGw3Qk9JVE1yYjc0eUJDQUFCRkx3TXZLU1ZLVmpmc0JmamUvVlZ1ZjhiYUxzK2dJY0lWVjh3dzc0L1JiL2k3K0Y3QnA3UXVYbCtGaE9UVjJ4MU5oZXFyZm9kUU9YcUhmRHF2ZXhDSWpNZHlMZmp2K0IrQXFoLzdZTWwvOVNaQzg0NjdScXE2YjBab2hlcnFEeWMxUUxmZzBoZjBNL2RId0dBQWFCejQ5eXNUTHgzSVNJZmowTHNyd1JHZ3BlQko4UHl6dXRQZzNQd0NwWEZPVzJZUFNKeVM3N0VHQUN3WE1VSmV1dlVGU0JvVkdvRCtsNEJPOU5IOTlKQVBjY1RLaitlQXc1Zkd3RUZjQnFiL0UwUDZQdm5wdU1QeW9SYXlFY01BWUJpWGgyRTRRQWErQ0p0ak1OY21nZTlYRE9GMldzMTRRWUFlT2krdVFpY2pEcEV2VTVMNE9QWFIrUEpzTHhFdm45cjRJSG9lcVlIZ1RhWHdiVUhLQ3pCZWZrY2x6MlptTHdFa2NTRHRCcFdFQjVSYkhDVURnSVoxaS9KOGdkTjQzVlRKZC9ueTE0SXMwaW5URWJCa0NlS0JwaUxFWjhPbFJMbGVYRU82TFJoUVdjOVZjVDZQaHdBanFiM1FQMGxncE1adEp5MmNIVWV0TE1PVy9MQ2hpZ2ZLcU9GNnFMKzRaa1E4N3l4REs0L1NsSXBJVSsxZmthKzk0WWtXcXF5MTFJNW5sQVY5Vk5yRi96a0R6V1ZFdklBUFFpWk8zOEltQXluWlJSTVpkQWNRdVVuZndMZGpwcEtDUmx0U3ZiVEtjcXVmd0N3eER6TWZldzVYTDBEMnQxTVkxSkttWnVTeWg5ZGprcUc1WWY2RlV3ZTJsZ0JQL3RIQ2NPR3ZMQVZCdEVPMit0Z2l0ckxVU2w1dmRVQVYrZlZKQ3pKZUlSbStpSlRVZUZkNWFoY1hRQjhYOFhCbW1KcGsvNWFPdktkMlVLZ2VQa3U2TlYyS2doYmltMUs1bXZVU0tHV3FlZkZLbWlqbWszQ2txSzB5VGp5dlRkNk9hclo2SS83MGxEM0crRGx1emtZN0tuY2QvbkE1K2VvWkJpMHdTQ0hRU3ZRUmw2NUY3dm9YdFkySmJ2cEZLbnJUdzJDS0s5ejdRR290Wk1Md2FhU2FkT3hnV3JpaytzL2JkVkFXN1dzdmp0UmNvU1czRkdEL1NwbExTM25kWE5VYWpYQS96N003NzBEYVgrWEwrMUxCcXJ2YzNOVUVWRHRhR0FDZ0pjL2dzelhXRnZwamxiOVErQzUvZ2gwME5UdHYzVnBwRTFrMkdrWlBkVGdPbTNWQy8vSVprdDZhWlBSdEtSa3VoTXZrM2lPeHZOVGZCd3F0UnJndFVYRDd0dVhSOTMyb1ZUR3gxeXRuOW4va2dzKzBBNmFKSzczZnBiMmp3Vk1BTnNlZ0YwU09lc3kzYkdYVGlYVEl4QkF6eDREci9mMHUrMUl6UDRDVTFmK0FnUUVnWk9EQk00T1VQVCswbllkdFBOODVQQVNJcXpRVDFoZ1ZDcmY5eHRKZVIzSmdxM2hVNE5XRkdwckIvUjhhYlRnVWlTQ1d3REE5TVBMMzNIWXZoM21jSlpIa041eG1BTGU3NERYbjQ0VVdvWWFQTzUvQndTbjczaXErUmtPRDZyOU5oTVF0aCtadnNBVXRUWFYxNThDN1gzSG5QUkVvT3MwalRZUUFBVUFudHI3RU4wM3Q3VkdSOWk1NktOOGJ3OHEvYmNHYW02NTRxTXZrWm1PK0IvM3o0WUNVVklTbGJtS0UzajM5TFNnZTFIR1QxNXljVGkyN3lWeENEYitPZFQzN1RlUE1rWEtQUkwrUDN3QlpvMmQyakh4QUFBQUFFbEZUa1N1UW1DQ1wiIiwiZXhwb3J0IGRlZmF1bHQgYFxyXG4jY2lyY2xle1xyXG4gICAgYW5pbWF0aW9uOiBsb2FkaW5nLWNpcmNsZSAxLjRzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gICAgLyog5ZyG5YaF5aGr5YWFICovXHJcbiAgICBmaWxsOiBub25lO1xyXG4gICAgLyog5ZyG5ZGo6aKc6ImyICovXHJcbiAgICBzdHJva2U6ICM0NDdiZmM7XHJcbiAgICAvKiDlnIblkajlrr3luqYgKi9cclxuICAgIHN0cm9rZS13aWR0aDogMjtcclxufVxyXG5cclxuI2xvYWRpbmctY2lyY2xlIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDEwMDAwMDtcclxuICAgIHRvcDogY2FsYyg1MCUgLSAxMDBweCk7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDI1cHgpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxvYWRpbmctY2lyY2xlIHtcclxuICAgIDAlIHtcclxuICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAxcHggMjAwcHg7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgICB9XHJcbiAgICAzMCUge1xyXG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEwMHB4IDIwMHB4O1xyXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTVweDtcclxuICAgICAgICBzdHJva2U6IGdyZWVuO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMTAwcHggMjAwcHg7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNpcmNsZS1sb2FkaW5nLXN2ZyB7XHJcbiAgICBhbmltYXRpb246IGxvYWRpbmctcm90YXRlIDEuNHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbG9hZGluZy1yb3RhdGUge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMXR1cm4pO1xyXG4gICAgfVxyXG59YCIsImltcG9ydCBGaWxlVXRpbHMgZnJvbSBcIkAvdXRpbHMvRmlsZVV0aWxzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBsb2FkKHVybCwgZmlsZVVyaSwgcGFyYW1zKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGlmICgoZmlsZVVyaS5pbmRleE9mKCdjb250ZW50JykgPT09IC0xKSAmJiAoZmlsZVVyaS5pbmRleE9mKCdmaWxlOi8vLycpID09PSAtMSkpIHtcclxuICAgICAgICAgICAgZmlsZVVyaSA9ICdmaWxlOi8vJyArIGZpbGVVcmk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB1cGxvYWRlciA9IG5ldyBGaWxlVXRpbHMuRmlsZVV0aWxzLlVwbG9hZGVyKHtcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICBmaWxlVXJpLFxyXG4gICAgICAgICAgICBwYXJhbXNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NiYXIgPSBzaG93UHJvZ3Jlc3NiYXIoKTtcclxuXHJcbiAgICAgICAgdXBsb2FkZXIub25TdWNjZXNzID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIG5hdmlnYXRvci5kaWFsb2dzUGx1cy5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgIGlmIChwcm9ncmVzc2Jhcikge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NiYXIuc2V0VmFsdWUoMTAwKTtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzYmFyLmhpZGUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpXHJcbiAgICAgICAgfTtcclxuICAgICAgICB1cGxvYWRlci5vbkZhaWwgPSAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2UnLCBlcnJvcik7XHJcbiAgICAgICAgICAgIGlmIChwcm9ncmVzc2Jhcikge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NiYXIuaGlkZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdXBsb2FkZXIub25Qcm9ncmVzcyA9IChwcm9ncmVzcykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGVyY2VudCA9ICgocHJvZ3Jlc3MubG9hZGVkIC8gcHJvZ3Jlc3MudG90YWwpICogMTAwKS50b0ZpeGVkKDApO1xyXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3NiYXIpIHtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzYmFyLnNldFZhbHVlKHBlcmNlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB1cGxvYWRlci51cGxvYWQoKTtcclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2hvd1Byb2dyZXNzYmFyKCkge1xyXG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IuZGlhbG9nc1BsdXMpIHtcclxuICAgICAgICAvLyBuYXZpZ2F0b3IuZGlhbG9nc1BsdXMuc2hvd0xvYWRpbmcoJ+S4iuS8oOS4rScsICfor7fnqI3lkI4nKVxyXG4gICAgICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLmRpYWxvZ3NQbHVzLnByb2dyZXNzU3RhcnQoJ+S4iuS8oOS4rScsICfor7fnqI3lkI4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIi4uL3JvdXRlclwiO1xyXG5pbXBvcnQgbGV2ZWwwIGZyb20gJy4uL2Fzc2V0cy9sZXZlbDAucG5nJ1xyXG5pbXBvcnQgbGV2ZWwyIGZyb20gJy4uL2Fzc2V0cy9sZXZlbDIucG5nJ1xyXG5pbXBvcnQgbGV2ZWwzIGZyb20gJy4uL2Fzc2V0cy9sZXZlbDMucG5nJ1xyXG5pbXBvcnQgbGV2ZWw0IGZyb20gJy4uL2Fzc2V0cy9sZXZlbDQucG5nJ1xyXG5pbXBvcnQgbGV2ZWw1IGZyb20gJy4uL2Fzc2V0cy9sZXZlbDUucG5nJ1xyXG5pbXBvcnQgbGV2ZWw2IGZyb20gJy4uL2Fzc2V0cy9sZXZlbDYucG5nJ1xyXG5pbXBvcnQgRmlsZVV0aWxzIGZyb20gXCJAL3V0aWxzL0ZpbGVVdGlsc1wiO1xyXG5pbXBvcnQge2Rvd25sb2FkfSBmcm9tIFwiQC91dGlscy9kb3dubG9hZFwiO1xyXG5pbXBvcnQge3VwbG9hZH0gZnJvbSBcIkAvdXRpbHMvdXBsb2FkXCI7XHJcbmltcG9ydCB7TG9hZGluZ30gZnJvbSBcInZhbnRcIjtcclxuXHJcbi8qKiAqXHJcbiAqIOWIpOaWreeUqOaIt+aYr+WQpui/h+acn+OAgeaYr+WQpuiHquWKqOeZu+W9lVxyXG4gKiBAcGFyYW0gdGltZSDnmbvlvZXml7bpl7RcclxuICogQHBhcmFtIGV4cGlyZSDov4fmnJ/ml7bpl7RcclxuICovXHJcbmNvbnN0IGlzRXhwaXJlID0gKHRpbWUsIGV4cGlyZSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKCd1dGlscycsc3RvcmUuc3RhdGUudXNlci5pc0F1dG9Mb2dpbik7XHJcbiAgLy9zdG9yZS5zdGF0ZS51c2VyLmlzQXV0b0xvZ2luIHRydWXoh6rliqjnmbvlvZVcclxuICBpZiAoc3RvcmUuc3RhdGUudXNlci5pc0F1dG9Mb2dpbikge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoIXRpbWUpIHtcclxuICAgICAgLy8gY2xlYXJTdG9yYWdlKCk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coRGF0ZS5ub3coKSwgdGltZSArIGV4cGlyZSxEYXRlLm5vdygpID4gdGltZSArIGV4cGlyZSk7XHJcbiAgICAgIHJldHVybiBEYXRlLm5vdygpID4gdGltZSArIGV4cGlyZTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICog5Yik5pat56uZ54K55rC06LSo54q25oCB6IOM5pmv6aKc6ImyXHJcbiAqIEBwYXJhbSB2YWx1ZSDlgLxcclxuICogKi9cclxuZXhwb3J0IGNvbnN0IGltZ0p1Z2RlTGV2ZWwgPSAodmFsdWUpID0+IHtcclxuICBpZiAodmFsdWUgPT09IG51bGwpIHtcclxuICAgIHJldHVybiAgbGV2ZWwwO1xyXG4gIH0gZWxzZSBpZiAodmFsdWUgPT09ICfihaEnKSB7XHJcbiAgICByZXR1cm4gIGxldmVsMjtcclxuICB9IGVsc2UgaWYgKHZhbHVlID09PSAn4oWiJykge1xyXG4gICAgcmV0dXJuICBsZXZlbDM7XHJcbiAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ+KFoycpIHtcclxuICAgIHJldHVybiAgbGV2ZWw0O1xyXG4gIH0gZWxzZSBpZiAodmFsdWUgPT09ICfihaQnKSB7XHJcbiAgICByZXR1cm4gIGxldmVsNTtcclxuICB9IGVsc2UgaWYgKHZhbHVlID09PSAn5Yqj4oWkJykge1xyXG4gICAgcmV0dXJuICBsZXZlbDY7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAgbGV2ZWwwO1xyXG4gIH1cclxufVxyXG5cclxuLy/ml6XljoblrZfkvZPpopzoibJcclxuY29uc3QgdGV4dENvbG9ycyA9IFtcclxuICAncmdiYSgyMDQsIDIwNCwgMjA0LCAxKScsXHJcbiAgJ3JnYmEoMCwgMjI4LCAwLCAxKScsXHJcbiAgJ3JnYmEoMjU1LCAxOTEsIDAsIDEpJyxcclxuICAncmdiYSgyNTUsIDEyNiwgMCwgMSknLFxyXG4gICdyZ2JhKDI1NSwgMCwgMCwgMSknLFxyXG4gICdyZ2JhKDE1MywgMCwgNzYsIDEpJyxcclxuICAncmdiYSgxMjYsIDAsIDc1LCAxKSdcclxuXTtcclxuXHJcbi8qKlxyXG4gKiDliKTmlq1BUUnog4zmma/popzoibJcclxuICogQHBhcmFtIHZhbHVlIOWAvFxyXG4gKiAqL1xyXG5leHBvcnQgY29uc3QgQVFJSnVnZGVCZ0NvbG9yID0gKHZhbHVlKSA9PiB7XHJcbiAgaWYodmFsdWUgPT09IG51bGwpe1xyXG4gICAgcmV0dXJuICdiYWNrZ3JvdW5kOiAnICsgdGV4dENvbG9yc1swXTtcclxuICB9ZWxzZSBpZiAodmFsdWUgPD0gNTApIHtcclxuICAgIHJldHVybiAnYmFja2dyb3VuZDogJyArIHRleHRDb2xvcnNbMV07XHJcbiAgfSBlbHNlIGlmICh2YWx1ZSA8PSAxMDAgJiYgdmFsdWUgPiA1MCkge1xyXG4gICAgcmV0dXJuICdiYWNrZ3JvdW5kOiAnICsgdGV4dENvbG9yc1syXTtcclxuICB9IGVsc2UgaWYgKHZhbHVlIDw9IDE1MCAmJiB2YWx1ZSA+IDEwMCkge1xyXG4gICAgcmV0dXJuICdiYWNrZ3JvdW5kOiAnICsgdGV4dENvbG9yc1szXTtcclxuICB9IGVsc2UgaWYgKHZhbHVlIDw9IDIwMCAmJiB2YWx1ZSA+IDE1MCkge1xyXG4gICAgcmV0dXJuICdiYWNrZ3JvdW5kOiAnICsgdGV4dENvbG9yc1s0XTtcclxuICB9IGVsc2UgaWYgKHZhbHVlIDw9IDMwMCAmJiB2YWx1ZSA+IDIwMCkge1xyXG4gICAgcmV0dXJuICdiYWNrZ3JvdW5kOiAnICsgdGV4dENvbG9yc1s1XTtcclxuICB9IGVsc2UgaWYgKHZhbHVlID4gMzAwKSB7XHJcbiAgICByZXR1cm4gJ2JhY2tncm91bmQ6ICcgKyB0ZXh0Q29sb3JzWzZdO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gJ2JhY2tncm91bmQ6ICcgKyB0ZXh0Q29sb3JzWzBdO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWrUFRSeWtl+S9k+minOiJslxyXG4gKiBAcGFyYW0gdmFsdWUg5YC8XHJcbiAqICovXHJcbmV4cG9ydCBjb25zdCBBUUlKdWdkZVRleHRDb2xvciA9ICh2YWx1ZSkgPT4ge1xyXG4gIGlmKHZhbHVlID09PSBudWxsKXtcclxuICAgIHJldHVybiAnY29sb3I6ICcgKyB0ZXh0Q29sb3JzWzBdO1xyXG4gIH0gZWxzZSBpZiAodmFsdWUgPD0gNTApIHtcclxuICAgIHJldHVybiAnY29sb3I6JyArIHRleHRDb2xvcnNbMV07XHJcbiAgfSBlbHNlIGlmICh2YWx1ZSA8PSAxMDAgJiYgdmFsdWUgPiA1MCkge1xyXG4gICAgcmV0dXJuICdjb2xvcjonICsgdGV4dENvbG9yc1syXTtcclxuICB9IGVsc2UgaWYgKHZhbHVlIDw9IDE1MCAmJiB2YWx1ZSA+IDEwMCkge1xyXG4gICAgcmV0dXJuICdjb2xvcjonICsgdGV4dENvbG9yc1szXTtcclxuICB9IGVsc2UgaWYgKHZhbHVlIDw9IDIwMCAmJiB2YWx1ZSA+IDE1MCkge1xyXG4gICAgcmV0dXJuICdjb2xvcjonICsgdGV4dENvbG9yc1s0XTtcclxuICB9IGVsc2UgaWYgKHZhbHVlIDw9IDMwMCAmJiB2YWx1ZSA+IDIwMCkge1xyXG4gICAgcmV0dXJuICdjb2xvcjonICsgdGV4dENvbG9yc1s1XTtcclxuICB9IGVsc2UgaWYgKHZhbHVlID4gMzAwKSB7XHJcbiAgICByZXR1cm4gJ2NvbG9yOicgKyB0ZXh0Q29sb3JzWzZdO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gJ2NvbG9yOicgKyB0ZXh0Q29sb3JzWzBdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlY3Rpb25UaW1lID0gKCkgPT57XHJcbiAgbGV0IG5vd0RhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGxldCB5ZWFyID0gbm93RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gIGxldCBtb250aCA9IG5vd0RhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgbGV0IGRheSA9IG5vd0RhdGUuZ2V0RGF0ZSgpO1xyXG4gIGxldCBob3VycyA9IG5vd0RhdGUuZ2V0SG91cnMoKTtcclxuICBpZiAoaG91cnMgPCA0ICYmIGhvdXJzID49IDApIHtcclxuICAgIGhvdXJzID0gMDtcclxuICB9IGVsc2UgaWYgKGhvdXJzIDwgOCAmJiBob3VycyA+PSA0KSB7XHJcbiAgICBob3VycyA9IDQ7XHJcbiAgfSBlbHNlIGlmIChob3VycyA8IDEyICYmIGhvdXJzID49IDgpIHtcclxuICAgIGhvdXJzID0gODtcclxuICB9IGVsc2UgaWYgKGhvdXJzIDwgMTYgJiYgaG91cnMgPj0gMTIpIHtcclxuICAgIGhvdXJzID0gMTI7XHJcbiAgfSBlbHNlIGlmIChob3VycyA8IDIwICYmIGhvdXJzID49IDE2KSB7XHJcbiAgICBob3VycyA9IDE2O1xyXG4gIH0gZWxzZSBpZiAoaG91cnMgPD0gMjMgJiYgaG91cnMgPj0gMjApIHtcclxuICAgIGhvdXJzID0gMjA7XHJcbiAgfVxyXG4gIG1vbnRoID0gbW9udGggPCAxMCA/IFwiMFwiICsgbW9udGggOiBtb250aDtcclxuICBkYXkgPSBkYXkgPCAxMCA/IFwiMFwiICsgZGF5IDogZGF5O1xyXG4gIGhvdXJzID0gaG91cnMgPCAxMCA/IFwiMFwiICsgaG91cnMgOiBob3VycztcclxuICByZXR1cm4geWVhciArIFwiLVwiICsgbW9udGggKyBcIi1cIiArIGRheSArIFwiIFwiICsgaG91cnMgKyBcIjowMFwiO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGlzRXhwaXJlLFxyXG59O1xyXG5cclxuaW1wb3J0IHZ1ZUluc3RhbmNlIGZyb20gXCJAL21haW5cIjtcclxuaW1wb3J0IGxvYWRpbmdfc3R5bGUgZnJvbSBcIi4uL3N0eWxlL2xvYWRpbmdfc3R5bGVcIjtcclxuZXhwb3J0IGNvbnN0IG9wZW5Ccm93c2VyID0gKHVybCkgPT4ge1xyXG5cclxuICBvcGVuVXJsKHVybClcclxuICByZXR1cm5cclxuXHJcbiAgbGV0IHJlZlxyXG4gIGxldCBmaXJzdCA9IHRydWVcclxuICBpZiAod2luZG93LmNvcmRvdmEpIHtcclxuICAgIHJlZiA9IGNvcmRvdmEuSW5BcHBCcm93c2VyLm9wZW4odXJsLCAnX3NlbGYnLCAnbG9jYXRpb249bm8sdG9vbGJhcj1ubyx6b29tPW5vLGZ1bGxzY3JlZW49bm8nKTtcclxuXHJcbiAgICByZWYuYWRkRXZlbnRMaXN0ZW5lcignbG9hZHN0YXJ0JywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnVybCA9PT0gJ2h0dHA6Ly9hcHA6Ly9jbG9zZScgfHwgZXZlbnQudXJsID09PSAnYXBwOi8vY2xvc2UnIHx8IGV2ZW50LnVybCA9PT0gJ2Nsb3NlJykge1xyXG4gICAgICAgICAgICByZWYuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpcnN0KSB7XHJcbiAgICAgICAgICAvLyDliqBsb2FkaW5nXHJcbiAgICAgICAgICByZWYuaW5zZXJ0Q1NTKHtcclxuICAgICAgICAgICAgY29kZTogbG9hZGluZ19zdHlsZVxyXG4gICAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICByZWYuZXhlY3V0ZVNjcmlwdCh7XHJcbiAgICAgICAgICAgICAgY29kZTogYFxyXG4gICAgICAgICAgICAgICAgd2luZG93LmNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2lyY2xlLmlkID0gJ2xvYWRpbmctY2lyY2xlJ1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmNpcmNsZS5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImNpcmNsZS1sb2FkaW5nLXN2Z1wiPjxzdmcgaGVpZ2h0PVwiNTBcIiB3aWR0aD1cIjUwXCIgdmlld0JveD1cIjAgMCA1MCA1MFwiPjxjaXJjbGUgaWQ9XCJjaXJjbGVcIiBjeD1cIjI1XCIgY3k9XCIyNVwiIHI9XCIyMFwiLz48L3N2Zz48L2Rpdj4nXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdpbmRvdy5jaXJjbGUpXHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRzdG9wJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChmaXJzdCkge1xyXG4gICAgICAgIHJlZi5leGVjdXRlU2NyaXB0KHtcclxuICAgICAgICAgIGNvZGU6IGBpZih3aW5kb3cuY2lyY2xlKSB3aW5kb3cuY2lyY2xlLnJlbW92ZSgpYFxyXG4gICAgICAgIH0sICgpID0+IHsgZmlyc3QgPSBmYWxzZSB9KVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJlZi5hZGRFdmVudExpc3RlbmVyKCdsb2FkZXJyb3InLCAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKGZpcnN0KSB7XHJcbiAgICAgICAgcmVmLmV4ZWN1dGVTY3JpcHQoe1xyXG4gICAgICAgICAgY29kZTogYGlmKHdpbmRvdy5jaXJjbGUpIHdpbmRvdy5jaXJjbGUucmVtb3ZlKClgXHJcbiAgICAgICAgfSwgKCkgPT4geyBmaXJzdCA9IGZhbHNlIH0pXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8g55uR5ZCs5a2Q6aG16Z2i6LCD55SoY29yZG92YeS6i+S7tlxyXG4gICAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBtZXNzYWdlT2JqID0+IHtcclxuICAgICAgaWYgKCFtZXNzYWdlT2JqLmRhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnIyMjIyMjIG1lc3NhZ2Ugb2JqIGVycm9yICMjIyMjIyAnKTtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBtZXRob2QgPSBtZXNzYWdlT2JqLmRhdGEubWV0aG9kXHJcbiAgICAgIHN3aXRjaCAobWV0aG9kKSB7XHJcbiAgICAgICAgY2FzZSAndXBsb2FkJzpcclxuICAgICAgICAgIGNvcmRvdmFfdXBsb2FkKG1lc3NhZ2VPYmosIHJlZik7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2Rvd25sb2FkJzpcclxuICAgICAgICAgIGNvcmRvdmFfZG93bmxvYWQobWVzc2FnZU9iaiwgcmVmKTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnb3Blbic6XHJcbiAgICAgICAgICBjb3Jkb3ZhX2ZpbGVfb3BlbihtZXNzYWdlT2JqLCByZWYpOyBicmVhaztcclxuICAgICAgICBjYXNlICdzZWxlY3QnOlxyXG4gICAgICAgICAgY29yZG92YV9maWxlX3NlbGVjdChtZXNzYWdlT2JqLCByZWYpOyBicmVhaztcclxuICAgICAgICBjYXNlICdjYW1lcmEnOlxyXG4gICAgICAgICAgY29yZG92YV9jYW1lcmEobWVzc2FnZU9iaiwgcmVmKTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbG9jYXRlJzpcclxuICAgICAgICAgIGNvcmRvdmFfbG9jYXRlKG1lc3NhZ2VPYmosIHJlZik7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3NjYW5Db2RlJzpcclxuICAgICAgICAgIGNvcmRvdmFfc2NhbihtZXNzYWdlT2JqLCByZWYpOyBicmVhaztcclxuICAgICAgICBjYXNlICduYXZpZ2F0aW9uJzpcclxuICAgICAgICAgIGNvcmRvdmFfbmF2aWdhdGlvbihtZXNzYWdlT2JqLCByZWYpOyBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICByZWYgPSB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnKVxyXG4gIH1cclxuICByZXR1cm4gcmVmXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvcmRvdmFfdXBsb2FkKG1zZ09iaiwgcmVmKSB7XHJcbiAgY29uc3QgdXJsID0gbXNnT2JqLmRhdGEudXJsO1xyXG4gIGNvbnN0IGZpbGVVcmkgPSBtc2dPYmouZGF0YS5maWxlVXJpO1xyXG4gIGNvbnN0IHBhcmFtcyA9IG1zZ09iai5kYXRhLnBhcmFtcztcclxuICBjb25zdCBjYWxsYmFjayA9IG1zZ09iai5kYXRhLmNhbGxiYWNrXHJcbiAgY29uc3QgZXJyb3JDYWxsYmFjayA9IG1zZ09iai5kYXRhLmVycm9yXHJcblxyXG4gIHRyeSB7XHJcbiAgICB1cGxvYWQodXJsLCBmaWxlVXJpLCBwYXJhbXMpLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgIGNhbGxiYWNrICYmIHJlZi5leGVjdXRlU2NyaXB0KHtjb2RlOmAke2NhbGxiYWNrfSgnJHtKU09OLnN0cmluZ2lmeShzdWNjZXNzKX0nKWB9LCAoKSA9PiB7XHJcbiAgICAgIH0pO1xyXG4gICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICBlcnJvckNhbGxiYWNrICYmIHJlZi5leGVjdXRlU2NyaXB0KHtjb2RlOmAke2Vycm9yQ2FsbGJhY2t9KCcke2Vycm9yfScpYH0sICgpID0+IHtcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGNvcmRvdmFfZG93bmxvYWQobXNnT2JqKSB7XHJcbiAgY29uc3QgdXJsID0gbXNnT2JqLmRhdGEudXJsO1xyXG4gIGNvbnN0IG5hbWUgPSBtc2dPYmouZGF0YS5uYW1lO1xyXG4gIGNvbnN0IHdpdGhDcmVkZW50aWFscyA9IG1zZ09iai5kYXRhLndpdGhDcmVkZW50aWFscztcclxuICB0cnkge1xyXG4gICAgZG93bmxvYWQodXJsLCBuYW1lLCB3aXRoQ3JlZGVudGlhbHMpXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gY29yZG92YV9maWxlX29wZW4obXNnT2JqKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGZpbGVQYXRoID0gbXNnT2JqLmRhdGEuZmlsZVBhdGg7XHJcbiAgICBjb25zdCBmaWxldHlwZSA9IGZpbGVQYXRoLnN1YnN0cmluZyhmaWxlUGF0aC5sYXN0SW5kZXhPZignLicpICsgMSlcclxuICAgIGNvcmRvdmEucGx1Z2lucy5maWxlT3BlbmVyMi5vcGVuKFxyXG4gICAgICAgIGZpbGVQYXRoLFxyXG4gICAgICAgIEZpbGVVdGlscy5GaWxlVXRpbHMuZ2V0TUlNRVR5cGUoZmlsZXR5cGUpLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gY29yZG92YV9maWxlX3NlbGVjdChtc2dPYmosIHJlZikge1xyXG4gIGNvbnN0IGNhbGxiYWNrID0gbXNnT2JqLmRhdGEuY2FsbGJhY2tcclxuICBjb25zdCBlcnJvckNhbGxiYWNrID0gbXNnT2JqLmRhdGEuZXJyb3JcclxuICB0cnkge1xyXG4gICAgd2luZG93Lm5hdmlnYXRvci5kaWFsb2dzUGx1cy5jaG9vc2VGaWxlKGDor7fpgInmi6nmlofku7ZgLCBzdWNjZXNzID0+IHtcclxuICAgICAgY2FsbGJhY2sgJiYgcmVmLmV4ZWN1dGVTY3JpcHQoe2NvZGU6YCR7Y2FsbGJhY2t9KCcke3N1Y2Nlc3N9JylgfSwgKCkgPT4ge1xyXG4gICAgICB9KTtcclxuICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgIGVycm9yQ2FsbGJhY2sgJiYgcmVmLmV4ZWN1dGVTY3JpcHQoe2NvZGU6YCR7ZXJyb3JDYWxsYmFja30oJyR7ZXJyb3J9JylgfSwgKCkgPT4ge1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGNvcmRvdmFfY2FtZXJhKG1zZ09iaiwgcmVmKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNhbGxiYWNrID0gbXNnT2JqLmRhdGEuY2FsbGJhY2tcclxuICAgIGNvbnN0IHBhcmFtcyA9IG1zZ09iai5kYXRhLnBhcmFtc1xyXG4gICAgY29uc3QgZXJyb3JDYWxsYmFjayA9IG1zZ09iai5kYXRhLmVycm9yXHJcbiAgICB3aW5kb3cubmF2aWdhdG9yLmNhbWVyYS5nZXRQaWN0dXJlKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICBjYWxsYmFjayAmJiByZWYuZXhlY3V0ZVNjcmlwdCh7Y29kZTpgJHtjYWxsYmFja30oJyR7c3VjY2Vzc30nKWB9LCAoKSA9PiB7XHJcbiAgICAgIH0pO1xyXG4gICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICBlcnJvckNhbGxiYWNrICYmIHJlZi5leGVjdXRlU2NyaXB0KHtjb2RlOmAke2Vycm9yQ2FsbGJhY2t9KCcke2Vycm9yfScpYH0sICgpID0+IHtcclxuICAgICAgfSk7XHJcbiAgICB9LCBwYXJhbXMpXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gY29yZG92YV9sb2NhdGUobXNnT2JqLCByZWYpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY2FsbGJhY2sgPSBtc2dPYmouZGF0YS5jYWxsYmFja1xyXG4gICAgY29uc3QgZXJyb3JDYWxsYmFjayA9IG1zZ09iai5kYXRhLmVycm9yXHJcbiAgICAvKk1Mb2MuZWNobyhzdWNjZXNzID0+IHtcclxuICAgICAgY2FsbGJhY2sgJiYgcmVmLmV4ZWN1dGVTY3JpcHQoe2NvZGU6YCR7Y2FsbGJhY2t9KCcke0pTT04uc3RyaW5naWZ5KHN1Y2Nlc3MpfScpYH0sICgpID0+IHtcclxuICAgICAgfSk7XHJcbiAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgIGVycm9yQ2FsbGJhY2sgJiYgcmVmLmV4ZWN1dGVTY3JpcHQoe2NvZGU6YCR7ZXJyb3JDYWxsYmFja30oJyR7SlNPTi5zdHJpbmdpZnkoZXJyb3IpfScpYH0sICgpID0+IHtcclxuICAgICAgfSk7XHJcbiAgICB9LCBbe31dKSovXHJcbiAgICB3aW5kb3cuc3VjLmxvY2F0ZS5sb2NhdGUobG9jYXRpb24gPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhsb2NhdGlvbilcclxuICAgICAgY2FsbGJhY2sgJiYgcmVmLmV4ZWN1dGVTY3JpcHQoe2NvZGU6YCR7Y2FsbGJhY2t9KCcke0pTT04uc3RyaW5naWZ5KGxvY2F0aW9uKX0nKWB9LCAoKSA9PiB7fSk7XHJcbiAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgIGVycm9yQ2FsbGJhY2sgJiYgcmVmLmV4ZWN1dGVTY3JpcHQoe2NvZGU6YCR7ZXJyb3JDYWxsYmFja30oJyR7SlNPTi5zdHJpbmdpZnkoZXJyb3IpfScpYH0sICgpID0+IHt9KTtcclxuICAgIH0pXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gY29yZG92YV9zY2FuKG1zZ09iaiwgcmVmKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNhbGxiYWNrID0gbXNnT2JqLmRhdGEuY2FsbGJhY2tcclxuICAgIGNvbnN0IGVycm9yQ2FsbGJhY2sgPSBtc2dPYmouZGF0YS5lcnJvclxyXG4gICAgY29yZG92YS5wbHVnaW5zLmJhcmNvZGVTY2FubmVyLnNjYW4oXHJcbiAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICBjYWxsYmFjayAmJiByZWYuZXhlY3V0ZVNjcmlwdCh7Y29kZTpgJHtjYWxsYmFja30oJyR7cmVzdWx0LnRleHR9JylgfSwgKCkgPT4ge30pO1xyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICBlcnJvckNhbGxiYWNrICYmIHJlZi5leGVjdXRlU2NyaXB0KHtjb2RlOmAke2Vycm9yQ2FsbGJhY2t9KCcke0pTT04uc3RyaW5naWZ5KGVycm9yKX0nKWB9LCAoKSA9PiB7fSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwcmVmZXJGcm9udENhbWVyYSA6IGZhbHNlLCAvLyBpT1MgYW5kIEFuZHJvaWRcclxuICAgICAgICBzaG93RmxpcENhbWVyYUJ1dHRvbiA6IGZhbHNlLCAvLyBpT1MgYW5kIEFuZHJvaWRcclxuICAgICAgICBzaG93VG9yY2hCdXR0b24gOiBmYWxzZSwgLy8gaU9TIGFuZCBBbmRyb2lkXHJcbiAgICAgICAgdG9yY2hPbjogZmFsc2UsIC8vIEFuZHJvaWQsIGxhdW5jaCB3aXRoIHRoZSB0b3JjaCBzd2l0Y2hlZCBvbiAoaWYgYXZhaWxhYmxlKVxyXG4gICAgICAgIHByb21wdCA6IFwi6K+35bCG5LqM57u056CB5pS+572u5omr5o+P5Yy65Z+f5YaFXCIsIC8vIEFuZHJvaWRcclxuICAgICAgICByZXN1bHREaXNwbGF5RHVyYXRpb246IDAsIC8vIEFuZHJvaWQsIGRpc3BsYXkgc2Nhbm5lZCB0ZXh0IGZvciBYIG1zLiAwIHN1cHByZXNzZXMgaXQgZW50aXJlbHksIGRlZmF1bHQgMTUwMFxyXG4gICAgICAgIGZvcm1hdHMgOiBcIlFSX0NPREUsUERGXzQxN1wiLCAvLyBkZWZhdWx0OiBhbGwgYnV0IFBERl80MTcgYW5kIFJTU19FWFBBTkRFRFxyXG4gICAgICAgIG9yaWVudGF0aW9uIDogXCJwb3J0cmFpdFwiLCAvLyBBbmRyb2lkIG9ubHkgKHBvcnRyYWl0fGxhbmRzY2FwZSksIGRlZmF1bHQgdW5zZXQgc28gaXQgcm90YXRlcyB3aXRoIHRoZSBkZXZpY2VcclxuICAgICAgICBkaXNhYmxlQW5pbWF0aW9ucyA6IHRydWUsIC8vIGlPU1xyXG4gICAgICAgIGRpc2FibGVTdWNjZXNzQmVlcDogZmFsc2UgLy8gaU9TXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGNvcmRvdmFfbmF2aWdhdGlvbihtc2dPYmosIHJlZikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBlcnJvckNhbGxiYWNrID0gbXNnT2JqLmRhdGEuZXJyb3JcclxuXHJcbiAgICB3aW5kb3cuc3VjLmxvY2F0ZS5sb2NhdGUobG9jYXRpb24gPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhsb2NhdGlvbilcclxuXHJcbiAgICAgIGxvY2FsTmF2aWdhdGlvbi5zdGFydChcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgYWxlcnQoZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOiBcImF1dG9cIixcclxuICAgICAgICAgIHRvTG5nOiBtc2dPYmouZGF0YS5KRCxcclxuICAgICAgICAgIHRvTGF0OiBtc2dPYmouZGF0YS5XRCxcclxuICAgICAgICAgIG15TG5nOiBsb2NhdGlvbi5Mb25naXR1ZGUsXHJcbiAgICAgICAgICBteUxhdDogbG9jYXRpb24uTGF0aXR1ZGUsXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgZXJyb3JDYWxsYmFjayAmJiByZWYuZXhlY3V0ZVNjcmlwdCh7Y29kZTpgJHtlcnJvckNhbGxiYWNrfSgnJHtKU09OLnN0cmluZ2lmeShlcnJvcil9JylgfSwgKCkgPT4ge30pO1xyXG4gICAgfSlcclxuXHJcblxyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlKVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9