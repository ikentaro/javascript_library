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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _math_Complex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math/Complex.js */ \"./src/math/Complex.js\");\n/* harmony import */ var _math_minus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math/minus.js */ \"./src/math/minus.js\");\n/* harmony import */ var _math_reverse_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math/reverse.js */ \"./src/math/reverse.js\");\n/* harmony import */ var _math_add_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./math/add.js */ \"./src/math/add.js\");\n/* harmony import */ var _math_sub_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./math/sub.js */ \"./src/math/sub.js\");\n/* harmony import */ var _math_mul_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./math/mul.js */ \"./src/math/mul.js\");\n/* harmony import */ var _math_div_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./math/div.js */ \"./src/math/div.js\");\n/* harmony import */ var _math_exp_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./math/exp.js */ \"./src/math/exp.js\");\n/* harmony import */ var _math_sin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./math/sin.js */ \"./src/math/sin.js\");\n/* harmony import */ var _math_cos_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./math/cos.js */ \"./src/math/cos.js\");\n/* harmony import */ var _math_tan_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./math/tan.js */ \"./src/math/tan.js\");\n/* harmony import */ var _math_diff_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./math/diff.js */ \"./src/math/diff.js\");\n/* harmony import */ var _math_solver_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./math/solver.js */ \"./src/math/solver.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nwindow.math = window.math || {\n  minus: _math_minus_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  reverse: _math_reverse_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  add: _math_add_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  sub: _math_sub_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  mul: _math_mul_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  div: _math_div_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  exp: _math_exp_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  sin: _math_sin_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  cos: _math_cos_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n  tan: _math_tan_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n  diff: _math_diff_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n  solver: _math_solver_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n  complex: function complex() {\n    var re = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.0;\n    var im = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0;\n    return new _math_Complex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](re, im);\n  }\n};\nconsole.log('===== math module print =====');\nconsole.log(window.math);\n\n//# sourceURL=webpack:///./src/math.js?");

/***/ }),

/***/ "./src/math/Complex.js":
/*!*****************************!*\
  !*** ./src/math/Complex.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Complex_toString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Complex/toString.js */ \"./src/math/Complex/toString.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Complex =\n/*#__PURE__*/\nfunction () {\n  function Complex(re, im) {\n    _classCallCheck(this, Complex);\n\n    this._real = re, this._imag = im;\n  }\n\n  _createClass(Complex, [{\n    key: \"add\",\n    value: function add(a) {\n      if (typeof a === 'number') return new Complex(this.real + a, this.imag);else if (a instanceof Complex) return new Complex(this.real + a.real, this.imag + a.imag);\n      throw new Error('! Complex.add invalid argument');\n    }\n  }, {\n    key: \"sub\",\n    value: function sub(a) {\n      if (typeof a === 'number') return new Complex(this.real - a, this.imag);else if (a instanceof Complex) return new Complex(this.real - a.real, this.imag - a.imag);\n      throw new Error('! Complex.sub invalid argument');\n    }\n  }, {\n    key: \"mul\",\n    value: function mul(a) {\n      if (typeof a === 'number') return new Complex(a * this.real, a * this.imag);else if (a instanceof Complex) return new Complex(this.real * a.real - this.imag * a.imag, this.real * a.imag + this.imag * a.real);\n      throw new Error('! Complex.mul invalid argument');\n    }\n  }, {\n    key: \"div\",\n    value: function div(a) {\n      if (typeof a === 'number') return new Complex(this.real / a, this.imag / a);else if (a instanceof Complex) {\n        var abs2 = a.abs2;\n        return new Complex((this.real * a.real + this.imag * a.imag) / abs2, (this.imag * a.real - this.real * a.imag) / abs2);\n      }\n      throw new Error('! Complex.div invalid argument');\n    }\n  }, {\n    key: \"minus\",\n    value: function minus() {\n      return new Complex(-this.real, -this.imag);\n    }\n  }, {\n    key: \"conj\",\n    value: function conj() {\n      return new Complex(this.real, -this.imag);\n    }\n  }, {\n    key: \"reverse\",\n    value: function reverse() {\n      var abs2 = this.abs2;\n      return new Complex(this.real / abs2, -this.imag / abs2);\n    }\n  }, {\n    key: \"toString\",\n    value: function toString(config) {\n      return Object(_Complex_toString_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, config);\n    }\n  }, {\n    key: \"re\",\n    get: function get() {\n      return this._real;\n    }\n  }, {\n    key: \"real\",\n    get: function get() {\n      return this._real;\n    }\n  }, {\n    key: \"im\",\n    get: function get() {\n      return this._imag;\n    }\n  }, {\n    key: \"imag\",\n    get: function get() {\n      return this._imag;\n    }\n  }, {\n    key: \"abs2\",\n    get: function get() {\n      return this.real * this.real + this.imag * this.imag;\n    }\n  }, {\n    key: \"r\",\n    get: function get() {\n      return Math.sqrt(this.abs2);\n    }\n  }, {\n    key: \"abs\",\n    get: function get() {\n      return this.r;\n    }\n  }, {\n    key: \"arg\",\n    get: function get() {\n      return Math.atan2(this.real, this.imag);\n    }\n  }]);\n\n  return Complex;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Complex);\n\n//# sourceURL=webpack:///./src/math/Complex.js?");

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

/***/ "./src/math/add.js":
/*!*************************!*\
  !*** ./src/math/add.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar add = function add() {\n  var add2 = function add2(a, b) {\n    if (typeof a === 'number' && typeof b === 'number') return a + b;\n    if (typeof a.add === 'function') return a.add(b);\n    if (typeof b.add === 'function') return b.add(a);\n    throw new Error('! math.add invalid argument');\n  };\n\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  return args.reduce(function (acc, a) {\n    return add2(acc, a);\n  }, 0);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (add);\n\n//# sourceURL=webpack:///./src/math/add.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\nvar mul = function mul() {\n  var mul2 = function mul2(a, b) {\n    if (typeof a === 'number' && typeof b === 'number') return a * b;\n    if (typeof a.mul === 'function') return a.mul(b);\n    if (typeof b.mul === 'function') return b.mul(a);\n    throw new Error('! math.mul invalid argument');\n  };\n\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  return args.reduce(function (acc, a) {\n    return mul2(acc, a);\n  }, 1);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mul);\n\n//# sourceURL=webpack:///./src/math/mul.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _solver_bisection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solver/bisection.js */ \"./src/math/solver/bisection.js\");\n\nvar solver = {\n  bisection: _solver_bisection_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (solver);\n\n//# sourceURL=webpack:///./src/math/solver.js?");

/***/ }),

/***/ "./src/math/solver/bisection.js":
/*!**************************************!*\
  !*** ./src/math/solver/bisection.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar MAX_COUNT = 10000;\n\nvar bisection = function bisection(func, x0, x1) {\n  var thre = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1.0e-8;\n  console.log('===== solver.bysection START  =====');\n  var y0 = func(x0),\n      y1 = func(x1);\n  var xmid = 0.5 * (x1 + x0);\n  var ymid = func(xmid);\n\n  if (y0 * y1 > 0) {\n    throw new Error(\"solver.bysection f(x0=\".concat(x0, \")=\").concat(y0, \"  f(x1=\").concat(x1, \")=\").concat(y1, \" was invalid parameter\"));\n  }\n\n  console.log(\"x0=\".concat(x0, \" xmid=\").concat(xmid, \" x1=\").concat(x1, \" y0=\").concat(y0, \" ymid=\").concat(ymid, \" y1=\").concat(y1));\n\n  var isBreak = function isBreak(ans0, ans_mid, ans1) {\n    if (Math.abs(ans0, ans_mid) > thre) return false;\n    if (Math.abs(ans1, ans_mid) > thre) return false;\n    return true;\n  };\n\n  for (var count = 0;; count++) {\n    if (isBreak(y0, ymid, y1)) break;\n    console.log(\"i=\".concat(count, \"  x0=\").concat(x0, \" xmid=\").concat(xmid, \" x1=\").concat(x1, \" y0=\").concat(y0, \" ymid=\").concat(ymid, \" y1=\").concat(y1));\n\n    if (y0 * ymid > 0) {\n      y0 = ymid;\n      x0 = xmid;\n    } else {\n      y1 = ymid;\n      x1 = xmid;\n    }\n\n    xmid = 0.5 * (x0 + x1);\n    ymid = func(xmid);\n    if (count === MAX_COUNT) throw new Error(\"solver.bisection iteration=\".concat(count, \" over\"));\n  }\n\n  console.log(\"f(x0=\".concat(x0, \")=\").concat(y0), \"f(xmid=\".concat(xmid, \")=\").concat(ymid), \"f(x1=\".concat(x1, \")=\").concat(y1));\n  console.log('===== solver.bysection FINISH =====');\n  return xmid;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (bisection);\n\n//# sourceURL=webpack:///./src/math/solver/bisection.js?");

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