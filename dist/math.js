/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/math.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/math.js":
/*!*********************!*\
  !*** ./src/math.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _math_Complex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math/Complex.js */ \"./src/math/Complex.js\");\n/* harmony import */ var _math_Vector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math/Vector.js */ \"./src/math/Vector.js\");\n/* harmony import */ var _math_Matrix_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math/Matrix.js */ \"./src/math/Matrix.js\");\n/* harmony import */ var _math_minus_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./math/minus.js */ \"./src/math/minus.js\");\n/* harmony import */ var _math_reverse_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./math/reverse.js */ \"./src/math/reverse.js\");\n/* harmony import */ var _math_isNumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./math/isNumber.js */ \"./src/math/isNumber.js\");\n/* harmony import */ var _math_isFinite_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./math/isFinite.js */ \"./src/math/isFinite.js\");\n/* harmony import */ var _math_add_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./math/add.js */ \"./src/math/add.js\");\n/* harmony import */ var _math_sub_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./math/sub.js */ \"./src/math/sub.js\");\n/* harmony import */ var _math_mul_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./math/mul.js */ \"./src/math/mul.js\");\n/* harmony import */ var _math_div_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./math/div.js */ \"./src/math/div.js\");\n/* harmony import */ var _math_abs_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./math/abs.js */ \"./src/math/abs.js\");\n/* harmony import */ var _math_exp_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./math/exp.js */ \"./src/math/exp.js\");\n/* harmony import */ var _math_sin_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./math/sin.js */ \"./src/math/sin.js\");\n/* harmony import */ var _math_cos_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./math/cos.js */ \"./src/math/cos.js\");\n/* harmony import */ var _math_tan_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./math/tan.js */ \"./src/math/tan.js\");\n/* harmony import */ var _math_diff_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./math/diff.js */ \"./src/math/diff.js\");\n/* harmony import */ var _math_integral_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./math/integral.js */ \"./src/math/integral.js\");\n/* harmony import */ var _math_solver_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./math/solver.js */ \"./src/math/solver.js\");\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nwindow.math = window.math || {\n  minus: _math_minus_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  reverse: _math_reverse_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  isNumber: _math_isNumber_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  isFinite: _math_isFinite_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  add: _math_add_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  sub: _math_sub_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  mul: _math_mul_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n  div: _math_div_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n  abs: _math_abs_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n  exp: _math_exp_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n  sin: _math_sin_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\n  cos: _math_cos_js__WEBPACK_IMPORTED_MODULE_14__[\"default\"],\n  tan: _math_tan_js__WEBPACK_IMPORTED_MODULE_15__[\"default\"],\n  diff: _math_diff_js__WEBPACK_IMPORTED_MODULE_16__[\"default\"],\n  integral: _math_integral_js__WEBPACK_IMPORTED_MODULE_17__[\"default\"],\n  solver: _math_solver_js__WEBPACK_IMPORTED_MODULE_18__[\"default\"],\n  vector: function vector() {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _construct(_math_Vector_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], args);\n  },\n  matrix: function matrix() {\n    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      args[_key2] = arguments[_key2];\n    }\n\n    return _construct(_math_Matrix_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], args);\n  },\n  complex: function complex() {\n    var re = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.0;\n    var im = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0;\n    return new _math_Complex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](re, im);\n  }\n};\nconsole.log('===== math module print =====');\nconsole.log(window.math);\n\n//# sourceURL=webpack:///./src/math.js?");

/***/ }),

/***/ "./src/math/Complex.js":
/*!*****************************!*\
  !*** ./src/math/Complex.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Complex_toString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Complex/toString.js */ \"./src/math/Complex/toString.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Complex =\n/*#__PURE__*/\nfunction () {\n  function Complex(re, im) {\n    _classCallCheck(this, Complex);\n\n    this._real = re, this._imag = im;\n  }\n\n  _createClass(Complex, [{\n    key: \"add\",\n    value: function add(a) {\n      if (typeof a === 'number') return new Complex(this.real + a, this.imag);else if (a instanceof Complex) return new Complex(this.real + a.real, this.imag + a.imag);\n      throw new Error('! Complex.add invalid argument');\n    }\n  }, {\n    key: \"sub\",\n    value: function sub(a) {\n      if (typeof a === 'number') return new Complex(this.real - a, this.imag);else if (a instanceof Complex) return new Complex(this.real - a.real, this.imag - a.imag);\n      throw new Error('! Complex.sub invalid argument');\n    }\n  }, {\n    key: \"mul\",\n    value: function mul(a) {\n      if (typeof a === 'number') return new Complex(a * this.real, a * this.imag);else if (a instanceof Complex) return new Complex(this.real * a.real - this.imag * a.imag, this.real * a.imag + this.imag * a.real);\n      throw new Error('! Complex.mul invalid argument');\n    }\n  }, {\n    key: \"div\",\n    value: function div(a) {\n      if (typeof a === 'number') return new Complex(this.real / a, this.imag / a);else if (a instanceof Complex) {\n        var abs2 = a.abs2;\n        return new Complex((this.real * a.real + this.imag * a.imag) / abs2, (this.imag * a.real - this.real * a.imag) / abs2);\n      }\n      throw new Error('! Complex.div invalid argument');\n    }\n  }, {\n    key: \"minus\",\n    value: function minus() {\n      return new Complex(-this.real, -this.imag);\n    }\n  }, {\n    key: \"conj\",\n    value: function conj() {\n      return new Complex(this.real, -this.imag);\n    }\n  }, {\n    key: \"reverse\",\n    value: function reverse() {\n      var abs2 = this.abs2;\n      return new Complex(this.real / abs2, -this.imag / abs2);\n    }\n  }, {\n    key: \"toString\",\n    value: function toString(config) {\n      return Object(_Complex_toString_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, config);\n    }\n  }, {\n    key: \"isNumber\",\n    value: function isNumber() {\n      return true;\n    }\n  }, {\n    key: \"isFinite\",\n    value: function isFinite() {\n      return Number.isFinite(this.re) && Number.isFinit(this.im);\n    }\n  }, {\n    key: \"re\",\n    get: function get() {\n      return this._real;\n    }\n  }, {\n    key: \"real\",\n    get: function get() {\n      return this._real;\n    }\n  }, {\n    key: \"im\",\n    get: function get() {\n      return this._imag;\n    }\n  }, {\n    key: \"imag\",\n    get: function get() {\n      return this._imag;\n    }\n  }, {\n    key: \"abs2\",\n    get: function get() {\n      return this.real * this.real + this.imag * this.imag;\n    }\n  }, {\n    key: \"r\",\n    get: function get() {\n      return Math.sqrt(this.abs2);\n    }\n  }, {\n    key: \"abs\",\n    get: function get() {\n      return this.r;\n    }\n  }, {\n    key: \"arg\",\n    get: function get() {\n      return Math.atan2(this.real, this.imag);\n    }\n  }]);\n\n  return Complex;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Complex);\n\n//# sourceURL=webpack:///./src/math/Complex.js?");

/***/ }),

/***/ "./src/math/Complex/toString.js":
/*!**************************************!*\
  !*** ./src/math/Complex/toString.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar toString = function toString(z, config) {\n  var MIN = 1.0e-8;\n  var str = Math.abs(z.real) < MIN ? '' : z.real.toString();\n\n  if (Math.abs(z.imag) < MIN) {}\n\n  if (z.imag < 0) str += z.imag + 'i';else str += '+' + z.imag + 'i';\n  return str;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (toString);\n\n//# sourceURL=webpack:///./src/math/Complex/toString.js?");

/***/ }),

/***/ "./src/math/Matrix.js":
/*!****************************!*\
  !*** ./src/math/Matrix.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.js */ \"./src/math/add.js\");\n/* harmony import */ var _sub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sub.js */ \"./src/math/sub.js\");\n/* harmony import */ var _mul_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mul.js */ \"./src/math/mul.js\");\n/* harmony import */ var _Vector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Vector.js */ \"./src/math/Vector.js\");\n/* harmony import */ var _Matrix_sweepOut_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Matrix/sweepOut.js */ \"./src/math/Matrix/sweepOut.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\nvar Matrix =\n/*#__PURE__*/\nfunction (_Array) {\n  _inherits(Matrix, _Array);\n\n  function Matrix() {\n    var _getPrototypeOf2;\n\n    _classCallCheck(this, Matrix);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Matrix)).call.apply(_getPrototypeOf2, [this].concat(args)));\n  }\n\n  _createClass(Matrix, [{\n    key: \"colVector\",\n    value: function colVector(i) {\n      return _construct(_Vector_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _toConsumableArray(this[i]));\n    }\n  }, {\n    key: \"rawVector\",\n    value: function rawVector(i) {\n      return _construct(_Vector_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _toConsumableArray(this.map(function (a, j, arr) {\n        return a[i];\n      })));\n    }\n  }, {\n    key: \"mul\",\n    value: function mul(mat) {\n      if (mat instanceof _Vector_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"] && this.rawSize === mat.length) return _construct(_Vector_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _toConsumableArray(this.map(function (a, i, arr) {\n        return Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr.colVector(i), mat);\n      })));\n      if (mat instanceof Matrix && this.rawSize === mat.colSize) return _construct(Matrix, _toConsumableArray(this.map(function (a, i, arr) {\n        return mat[0].map(function (b, j, arr2) {\n          return Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr.colVector(i), mat.rawVector(j));\n        });\n      })));\n      throw new Error('! Matrix.mul invalid argument  typeof(mat)=' + _typeof(mat));\n    }\n  }, {\n    key: \"add\",\n    value: function add(mat) {\n      if (mat instanceof Matrix && this.colSize === mat.colSize && this.rawSize === mat.colSize) {\n        return _construct(Matrix, _toConsumableArray(this.map(function (a, i) {\n          return a.map(function (b, j) {\n            return Object(_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(b, mat[i][j]);\n          });\n        })));\n      }\n\n      throw new Error('! Matrix.add invalid argument  typeof(mat)=' + _typeof(mat));\n    }\n  }, {\n    key: \"sub\",\n    value: function sub(mat) {\n      if (mat instanceof Matrix && this.colSize === mat.colSize && this.rawSize === mat.colSize) {\n        return _construct(Matrix, _toConsumableArray(this.map(function (a, i) {\n          return a.map(function (b, j) {\n            return Object(_sub_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(b, mat[i][j]);\n          });\n        })));\n      }\n\n      throw new Error('! Matrix.sub invalid argument  typeof(mat)=' + _typeof(mat));\n    }\n  }, {\n    key: \"reverse\",\n    value: function reverse() {\n      var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'sweepOut';\n      if (method === 'sweepOut') return Object(_Matrix_sweepOut_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this);\n    }\n  }, {\n    key: \"colSize\",\n    get: function get() {\n      return this[0].length;\n    }\n  }, {\n    key: \"rawSize\",\n    get: function get() {\n      return this.length;\n    }\n  }]);\n\n  return Matrix;\n}(_wrapNativeSuper(Array));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Matrix);\n\n//# sourceURL=webpack:///./src/math/Matrix.js?");

/***/ }),

/***/ "./src/math/Matrix/swapCol.js":
/*!************************************!*\
  !*** ./src/math/Matrix/swapCol.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar swapCol = function swapCol(arr2d, i, j) {\n  for (var k = 0; k < arr2d.length; k++) {\n    var tmp = arr2d[k][i];\n    arr2d[k][i] = arr2d[k][j];\n    arr2d[k][j] = tmp;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (swapCol);\n\n//# sourceURL=webpack:///./src/math/Matrix/swapCol.js?");

/***/ }),

/***/ "./src/math/Matrix/swapRaw.js":
/*!************************************!*\
  !*** ./src/math/Matrix/swapRaw.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar swapRaw = function swapRaw(arr2d, i, j) {\n  var tmp = arr2d[i];\n  arr2d[i] = arr2d[j];\n  arr2d[j] = tmp;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (swapRaw);\n\n//# sourceURL=webpack:///./src/math/Matrix/swapRaw.js?");

/***/ }),

/***/ "./src/math/Matrix/sweepOut.js":
/*!*************************************!*\
  !*** ./src/math/Matrix/sweepOut.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add.js */ \"./src/math/add.js\");\n/* harmony import */ var _sub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sub.js */ \"./src/math/sub.js\");\n/* harmony import */ var _div_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../div.js */ \"./src/math/div.js\");\n/* harmony import */ var _mul_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mul.js */ \"./src/math/mul.js\");\n/* harmony import */ var _swapRaw_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./swapRaw.js */ \"./src/math/Matrix/swapRaw.js\");\n/* harmony import */ var _swapCol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./swapCol.js */ \"./src/math/Matrix/swapCol.js\");\n/* harmony import */ var _Matrix_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Matrix.js */ \"./src/math/Matrix.js\");\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\n\n\n\n\n\n\n\nvar divRaw = function divRaw(arr2d, i, scale) {\n  for (var k = 0; k < arr2d[0].length; k++) {\n    arr2d[i][k] = Object(_div_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr2d[i][k], scale);\n  }\n};\n\nvar scaleSubRaw = function scaleSubRaw(arr2d, j, i, scale) {\n  for (var k = 0; k < arr2d[0].length; k++) {\n    arr2d[j][k] = Object(_sub_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr2d[j][k], Object(_mul_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(scale, arr2d[i][k]));\n  }\n};\n\nvar sweepOut = function sweepOut(origin) {\n  console.log('===== Matrix.sweepOut START =====');\n  var arr = [];\n\n  for (var i = 0; i < origin.colSize; i++) {\n    var raw = [];\n\n    for (var j = 0; j < 2 * origin.rawSize; j++) {\n      raw.push(0);\n    }\n\n    for (var _j = 0; _j < origin.rawSize; _j++) {\n      raw[_j] = origin[i][_j];\n    }\n\n    raw[origin.rawSize + i] = 1;\n    arr.push(raw);\n  }\n\n  console.log('forward elimination START');\n\n  for (var _i = 0; _i < origin.colSize; _i++) {\n    divRaw(arr, _i, arr[_i][_i]);\n\n    for (var _j2 = _i + 1; _j2 < origin.colSize; _j2++) {\n      scaleSubRaw(arr, _j2, _i, arr[_j2][_i]);\n    }\n  }\n\n  console.log('forward elimination FINISH');\n  console.log('backward elimination START');\n\n  for (var _i2 = origin.colSize - 1; _i2 > 0; _i2--) {\n    for (var _j3 = _i2 - 1; _j3 >= 0; _j3--) {\n      scaleSubRaw(arr, _j3, _i2, arr[_j3][_i2]);\n    }\n  }\n\n  console.log('backward elimination FINISH');\n  console.log('===== Matrix.sweepOut FINISH =====');\n  return _construct(_Matrix_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _toConsumableArray(arr.map(function (e) {\n    return e.slice(origin.rawSize);\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sweepOut);\n\n//# sourceURL=webpack:///./src/math/Matrix/sweepOut.js?");

/***/ }),

/***/ "./src/math/Vector.js":
/*!****************************!*\
  !*** ./src/math/Vector.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.js */ \"./src/math/add.js\");\n/* harmony import */ var _sub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sub.js */ \"./src/math/sub.js\");\n/* harmony import */ var _mul_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mul.js */ \"./src/math/mul.js\");\n/* harmony import */ var _conj_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conj.js */ \"./src/math/conj.js\");\n/* harmony import */ var _Matrix_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Matrix.js */ \"./src/math/Matrix.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\nvar Vector =\n/*#__PURE__*/\nfunction (_Array) {\n  _inherits(Vector, _Array);\n\n  function Vector() {\n    var _getPrototypeOf2;\n\n    _classCallCheck(this, Vector);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Vector)).call.apply(_getPrototypeOf2, [this].concat(args)));\n  }\n\n  _createClass(Vector, [{\n    key: \"abs2\",\n    value: function abs2() {\n      return this.reduce(function (e) {\n        return Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e, Object(_conj_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e));\n      });\n    }\n  }, {\n    key: \"abs\",\n    value: function abs() {\n      return Math.sqrt(this.abs2());\n    }\n  }, {\n    key: \"add\",\n    value: function add(a) {\n      if (a instanceof Vector && this.length === a.length) return this.map(function (e, i) {\n        return Object(_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e, a[i]);\n      });\n      throw new Error('! Vector.add(a)  invalid parameter  typeof(a)=' + _typeof(a));\n    }\n  }, {\n    key: \"sub\",\n    value: function sub(a) {\n      if (a instanceof Vector && this.length === a.length) return this.map(function (e, i) {\n        return Object(_sub_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e, a[i]);\n      });\n      throw new Error('! Vector.sub(a)  invalid parameter  typeof(a)=' + _typeof(a));\n    }\n  }, {\n    key: \"mul\",\n    value: function mul(a) {\n      var _this = this;\n\n      if (typeof a === 'number') return this.map(function (e) {\n        return Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e, a);\n      });\n      if (a instanceof Vector && this.length === a.length) return this.reduce(function (sum, e, i) {\n        return Object(_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sum, Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e, a[i]));\n      }, 0);\n      if (a instanceof _Matrix_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"] && this.length === a.colSize) return a[0].map(function (e, i) {\n        return Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this, a.rawVector(i));\n      });\n      throw new Error('! Vector.mul(a)  invalid parameter  typeof(a)=' + _typeof(a));\n    }\n  }, {\n    key: \"length\",\n    get: function get() {\n      return this.length;\n    }\n  }]);\n\n  return Vector;\n}(_wrapNativeSuper(Array));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Vector);\n\n//# sourceURL=webpack:///./src/math/Vector.js?");

/***/ }),

/***/ "./src/math/abs.js":
/*!*************************!*\
  !*** ./src/math/abs.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar abs = function abs(x) {\n  if (typeof x === 'number') return Math.abs(x);\n  var abs = x.abs;\n  if (typeof abs === 'function') return abs();\n  if (abs != null) return abs;\n  throw new Error('! math.abs invalid argument  typeof(x)=' + _typeof(x));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (abs);\n\n//# sourceURL=webpack:///./src/math/abs.js?");

/***/ }),

/***/ "./src/math/add.js":
/*!*************************!*\
  !*** ./src/math/add.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar add = function add() {\n  var add2 = function add2(a, b) {\n    if (typeof a === 'number' && typeof b === 'number') return a + b;\n    if (typeof a.add === 'function') return a.add(b);\n    if (typeof b.add === 'function') return b.add(a);\n    throw new Error('! math.add invalid argument');\n  };\n\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  return args.reduce(function (acc, a) {\n    return add2(acc, a);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (add);\n\n//# sourceURL=webpack:///./src/math/add.js?");

/***/ }),

/***/ "./src/math/conj.js":
/*!**************************!*\
  !*** ./src/math/conj.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar conj = function conj(x) {\n  if (typeof x === 'number') return x;\n  if (typeof x.conj === 'function') return x.conj();\n  throw new Error('! math.conj(x) invalid parameter  typeof(x)=' + _typeof(x));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (conj);\n\n//# sourceURL=webpack:///./src/math/conj.js?");

/***/ }),

/***/ "./src/math/cos.js":
/*!*************************!*\
  !*** ./src/math/cos.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Complex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Complex.js */ \"./src/math/Complex.js\");\n/* harmony import */ var _exp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exp.js */ \"./src/math/exp.js\");\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add.js */ \"./src/math/add.js\");\n/* harmony import */ var _sub_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sub.js */ \"./src/math/sub.js\");\n/* harmony import */ var _mul_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mul.js */ \"./src/math/mul.js\");\n/* harmony import */ var _div_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./div.js */ \"./src/math/div.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\n\n\n\n\n\nvar cos = function cos(x) {\n  if (typeof x === 'number') return Math.cos(x);else if (x instanceof _Complex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n    var ix = Object(_mul_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(new _Complex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 1), x);\n    return Object(_div_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_add_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_exp_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ix), Object(_exp_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ix.minus())), 2); //\tthrow new Error('math.cos(Complex)は未実装です');\n  }\n  throw new Error('! math.cos invalid argument  typeof(x)=' + _typeof(x));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (cos);\n\n//# sourceURL=webpack:///./src/math/cos.js?");

/***/ }),

/***/ "./src/math/diff.js":
/*!**************************!*\
  !*** ./src/math/diff.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.js */ \"./src/math/add.js\");\n/* harmony import */ var _sub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sub.js */ \"./src/math/sub.js\");\n/* harmony import */ var _mul_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mul.js */ \"./src/math/mul.js\");\n/* harmony import */ var _div_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./div.js */ \"./src/math/div.js\");\n\n\n\n\nvar diff = {\n  forward: function forward(func, x) {\n    var dx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1.0e-8;\n    return Object(_div_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_sub_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(func(Object(_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(x, dx)), func(x)), dx);\n  },\n  central: function central(func, x) {\n    var dx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1.0e-8;\n    return Object(_div_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_sub_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(func(Object(_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(x, dx)), func(Object(_sub_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(x, dx))), Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(2, dx));\n  },\n  backward: function backward(func, x) {\n    var dx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1.0e-8;\n    return Object(_div_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_sub_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(func(Object(_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(x)), func(Object(_sub_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(x, dx))), dx);\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (diff);\n\n//# sourceURL=webpack:///./src/math/diff.js?");

/***/ }),

/***/ "./src/math/div.js":
/*!*************************!*\
  !*** ./src/math/div.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar div = function div() {\n  var div2 = function div2(a, b) {\n    if (typeof a === 'number' && typeof b === 'number') return a / b;else if (typeof a.div === 'function') return a.div(b);else if (typeof b.mul === 'function' && typeof b.reverse === 'function') return b.reverse().mul(a);\n    throw new Error('! math.dev invalid parameter');\n  };\n\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  return args.reduce(function (acc, a) {\n    return div2(acc, a);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (div);\n\n//# sourceURL=webpack:///./src/math/div.js?");

/***/ }),

/***/ "./src/math/exp.js":
/*!*************************!*\
  !*** ./src/math/exp.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Complex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Complex.js */ \"./src/math/Complex.js\");\n\n\nvar exp = function exp(x) {\n  if (typeof x === 'number') return Math.exp(x);else if (x instanceof _Complex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n    var abs = Math.exp(x.real);\n    return new _Complex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](abs * Math.cos(x.imag), abs * Math.sin(x.imag));\n  }\n  throw new Error('! math.exp invalid argument');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (exp);\n\n//# sourceURL=webpack:///./src/math/exp.js?");

/***/ }),

/***/ "./src/math/integral.js":
/*!******************************!*\
  !*** ./src/math/integral.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _integral_trapezoid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./integral/trapezoid.js */ \"./src/math/integral/trapezoid.js\");\n/* harmony import */ var _integral_simpson_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./integral/simpson.js */ \"./src/math/integral/simpson.js\");\n\n\nvar integral = {\n  trapezoid: _integral_trapezoid_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  simpson: _integral_simpson_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (integral);\n\n//# sourceURL=webpack:///./src/math/integral.js?");

/***/ }),

/***/ "./src/math/integral/simpson.js":
/*!**************************************!*\
  !*** ./src/math/integral/simpson.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add.js */ \"./src/math/add.js\");\n/* harmony import */ var _sub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sub.js */ \"./src/math/sub.js\");\n/* harmony import */ var _mul_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mul.js */ \"./src/math/mul.js\");\n/* harmony import */ var _div_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../div.js */ \"./src/math/div.js\");\n\n\n\n\n\nvar simpson = function simpson(func, x0, x1) {\n  var N2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;\n  var N = Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(2, N2);\n  var dx = Object(_div_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_sub_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(x1, x0), N);\n  var even = 0;\n\n  for (var i = 2; i < N; i += 2) {\n    even = Object(_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(even, func(Object(_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(x0, Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(i, dx))));\n  }\n\n  var odd = 0;\n\n  for (var _i = 1; _i < N; _i += 2) {\n    odd = Object(_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(odd, func(Object(_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(x0, Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_i, dx))));\n  } //    console.log(even, odd);\n\n\n  return Object(_div_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dx, Object(_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(func(x0), Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(2, even), Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(4, odd), func(x1))), 3);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (simpson);\n\n//# sourceURL=webpack:///./src/math/integral/simpson.js?");

/***/ }),

/***/ "./src/math/integral/trapezoid.js":
/*!****************************************!*\
  !*** ./src/math/integral/trapezoid.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add.js */ \"./src/math/add.js\");\n/* harmony import */ var _sub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sub.js */ \"./src/math/sub.js\");\n/* harmony import */ var _mul_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mul.js */ \"./src/math/mul.js\");\n/* harmony import */ var _div_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../div.js */ \"./src/math/div.js\");\n\n\n\n\n\nvar trapezoid = function trapezoid(func, x0, x1) {\n  var N = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1000;\n  var dx = Object(_div_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_sub_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(x1, x0), N);\n  var sum = 0;\n  var xmin = x0,\n      xmax;\n\n  for (var i = 0; i < N; i++) {\n    xmax = Object(_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(x0, Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(i + 1, dx)); //\tconsole.log(xmin, xmax, func(xmin), func(xmax));\n\n    sum = Object(_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sum, Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(func(xmax), func(xmin)), dx, 0.5));\n    xmin = xmax;\n  }\n\n  return sum;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (trapezoid);\n\n//# sourceURL=webpack:///./src/math/integral/trapezoid.js?");

/***/ }),

/***/ "./src/math/isFinite.js":
/*!******************************!*\
  !*** ./src/math/isFinite.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar isFinite = function isFinite(x) {\n  if (typeof x === 'number') return Number.isFinite(x);\n  if (typeof x.isFinite === 'function') return x.isFinite();\n  throw new Error('! math.isFinite invalid argument  typeof(x)=' + _typeof(x));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isFinite);\n\n//# sourceURL=webpack:///./src/math/isFinite.js?");

/***/ }),

/***/ "./src/math/isNumber.js":
/*!******************************!*\
  !*** ./src/math/isNumber.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar isNumber = function isNumber(x) {\n  if (typeof x === 'number') return Math.isNumber(x);\n  if (typeof x.isNumber === 'function') return Math.isNumber();\n  throw new Error('! math.isNumber invalid argument  typeof(x)=' + _typeof(x));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isNumber);\n\n//# sourceURL=webpack:///./src/math/isNumber.js?");

/***/ }),

/***/ "./src/math/minus.js":
/*!***************************!*\
  !*** ./src/math/minus.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar minus = function minus(x) {\n  if (typeof x === 'number') return -x;\n  if (x.minus === 'function') return x.minus();\n  throw new Error('! math.minus invalid argument   typeof(' + _typeof(x) + ')');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (minus);\n\n//# sourceURL=webpack:///./src/math/minus.js?");

/***/ }),

/***/ "./src/math/mul.js":
/*!*************************!*\
  !*** ./src/math/mul.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar mul = function mul() {\n  var mul2 = function mul2(a, b) {\n    if (typeof a === 'number' && typeof b === 'number') return a * b;\n    if (typeof a.mul === 'function') return a.mul(b);\n    if (typeof b.mul === 'function') return b.mul(a);\n    throw new Error('! math.mul invalid argument');\n  };\n\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  return args.reduce(function (acc, a) {\n    return mul2(acc, a);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mul);\n\n//# sourceURL=webpack:///./src/math/mul.js?");

/***/ }),

/***/ "./src/math/reverse.js":
/*!*****************************!*\
  !*** ./src/math/reverse.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar reverse = function reverse(x) {\n  if (typeof x === 'number') return 1 / x;\n  if (x.reverse === 'function') return x.reverse();\n  throw new Error('! math.reverse invalid argument   typeof(' + _typeof(x) + ')');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reverse);\n\n//# sourceURL=webpack:///./src/math/reverse.js?");

/***/ }),

/***/ "./src/math/sin.js":
/*!*************************!*\
  !*** ./src/math/sin.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Complex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Complex.js */ \"./src/math/Complex.js\");\n/* harmony import */ var _exp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exp */ \"./src/math/exp.js\");\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add.js */ \"./src/math/add.js\");\n/* harmony import */ var _sub_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sub.js */ \"./src/math/sub.js\");\n/* harmony import */ var _mul_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mul.js */ \"./src/math/mul.js\");\n/* harmony import */ var _div_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./div.js */ \"./src/math/div.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\n\n\n\n\n\nvar sin = function sin(x) {\n  if (typeof x === 'number') return Math.sin(x);else if (x instanceof _Complex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n    var ix = Object(_mul_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(new _Complex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 1), x);\n    return Object(_div_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_sub_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_exp__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ix), Object(_exp__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ix.minus())), Object(_mul_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(2, new _Complex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 1))); //\tthrow new Error('math.sin(Complex)は未実装です');\n  }\n  throw new Error('! math.sin invalid argument  typeof(x)=' + _typeof(x));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sin);\n\n//# sourceURL=webpack:///./src/math/sin.js?");

/***/ }),

/***/ "./src/math/solver.js":
/*!****************************!*\
  !*** ./src/math/solver.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _solver_bisection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solver/bisection.js */ \"./src/math/solver/bisection.js\");\n/* harmony import */ var _solver_newton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solver/newton.js */ \"./src/math/solver/newton.js\");\n\n\nvar solver = {\n  bisection: _solver_bisection_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  newton: _solver_newton_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (solver);\n\n//# sourceURL=webpack:///./src/math/solver.js?");

/***/ }),

/***/ "./src/math/solver/bisection.js":
/*!**************************************!*\
  !*** ./src/math/solver/bisection.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar MAX_COUNT = 10000;\n\nvar bisection = function bisection(func, x0, x1) {\n  var thre = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1.0e-8;\n  //    console.log('===== solver.bysection START  =====');\n  var y0 = func(x0),\n      y1 = func(x1);\n  var xmid = 0.5 * (x1 + x0);\n  var ymid = func(xmid);\n\n  if (y0 * y1 > 0) {\n    throw new Error(\"solver.bysection f(x0=\".concat(x0, \")=\").concat(y0, \"  f(x1=\").concat(x1, \")=\").concat(y1, \" was invalid parameter\"));\n  } //    console.log(`x0=${x0} xmid=${xmid} x1=${x1} y0=${y0} ymid=${ymid} y1=${y1}`);\n\n\n  var isBreak = function isBreak(ans0, ans_mid, ans1) {\n    if (Math.abs(ans0, ans_mid) > thre) return false;\n    if (Math.abs(ans1, ans_mid) > thre) return false;\n    return true;\n  };\n\n  for (var count = 0;; count++) {\n    if (isBreak(y0, ymid, y1)) break; //\tconsole.log(`i=${count}  x0=${x0} xmid=${xmid} x1=${x1} y0=${y0} ymid=${ymid} y1=${y1}`);\n\n    if (y0 * ymid > 0) {\n      y0 = ymid;\n      x0 = xmid;\n    } else {\n      y1 = ymid;\n      x1 = xmid;\n    }\n\n    xmid = 0.5 * (x0 + x1);\n    ymid = func(xmid);\n    if (count === MAX_COUNT) throw new Error(\"solver.bisection iteration=\".concat(count, \" over\"));\n  } //    console.log(`f(x0=${x0})=${y0}`, `f(xmid=${xmid})=${ymid}`, `f(x1=${x1})=${y1}`);\n  //    console.log('===== solver.bysection FINISH =====');\n\n\n  return xmid;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (bisection);\n\n//# sourceURL=webpack:///./src/math/solver/bisection.js?");

/***/ }),

/***/ "./src/math/solver/newton.js":
/*!***********************************!*\
  !*** ./src/math/solver/newton.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _diff_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../diff.js */ \"./src/math/diff.js\");\n\nvar MAX_LOOP = 100;\n\nvar newton = function newton(func, x0) {\n  var thre = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1.0e-10;\n  var y0 = func(x0);\n  var x1 = x0 - y0 / _diff_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].central(func, x0);\n  var y1 = func(x1);\n\n  for (var i = 0;; i++) {\n    x0 = x1;\n    y0 = y1;\n    x1 = x0 - y0 / _diff_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].central(func, x0);\n    y1 = func(x1); //\tconsole.log(`x0=${x0} x1=${x1}`);\n\n    if (Math.abs(x0 - x1) < thre) break;\n    if (i === MAX_LOOP) throw new Error(\"solver.bisection iteration=\".concat(MAX_LOOP, \" over\"));\n  }\n\n  return x1;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newton);\n\n//# sourceURL=webpack:///./src/math/solver/newton.js?");

/***/ }),

/***/ "./src/math/sub.js":
/*!*************************!*\
  !*** ./src/math/sub.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar sub = function sub() {\n  var sub2 = function sub2(a, b) {\n    if (typeof a === 'number' && typeof b === 'number') return a - b;\n    if (typeof a.sub === 'function') return a.sub(b);\n    if (typeof b.add === 'function' && typeof b.minus === 'function') return b.minus().add(a);\n    throw new Error('! math.sub invalid argument');\n  };\n\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  return args.reduce(function (acc, a) {\n    return sub2(acc, a);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sub);\n\n//# sourceURL=webpack:///./src/math/sub.js?");

/***/ }),

/***/ "./src/math/tan.js":
/*!*************************!*\
  !*** ./src/math/tan.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Complex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Complex.js */ \"./src/math/Complex.js\");\n/* harmony import */ var _cos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cos.js */ \"./src/math/cos.js\");\n/* harmony import */ var _sin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sin.js */ \"./src/math/sin.js\");\n/* harmony import */ var _div_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./div.js */ \"./src/math/div.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\n\n\n\nvar tan = function tan(x) {\n  if (typeof x === 'number') return Math.tan(x);else if (x instanceof _Complex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n    return Object(_div_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_sin_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(x), Object(_cos_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(x));\n    throw new Error('math.tan(Complex)は未実装です');\n  }\n  throw new Error('! math.tan(x) invalid argument  typeof(x)' + _typeof(x));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tan);\n\n//# sourceURL=webpack:///./src/math/tan.js?");

/***/ })

/******/ });