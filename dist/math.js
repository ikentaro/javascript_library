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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _math_Complex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math/Complex.js */ \"./src/math/Complex.js\");\n/* harmony import */ var _math_Vector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math/Vector.js */ \"./src/math/Vector.js\");\n/* harmony import */ var _math_Matrix_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math/Matrix.js */ \"./src/math/Matrix.js\");\n/* harmony import */ var _math_makeMatrix_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./math/makeMatrix.js */ \"./src/math/makeMatrix.js\");\n/* harmony import */ var _math_unitMatrix_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./math/unitMatrix.js */ \"./src/math/unitMatrix.js\");\n/* harmony import */ var _math_minus_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./math/minus.js */ \"./src/math/minus.js\");\n/* harmony import */ var _math_reverse_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./math/reverse.js */ \"./src/math/reverse.js\");\n/* harmony import */ var _math_isNumber_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./math/isNumber.js */ \"./src/math/isNumber.js\");\n/* harmony import */ var _math_isFinite_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./math/isFinite.js */ \"./src/math/isFinite.js\");\n/* harmony import */ var _math_add_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./math/add.js */ \"./src/math/add.js\");\n/* harmony import */ var _math_sub_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./math/sub.js */ \"./src/math/sub.js\");\n/* harmony import */ var _math_mul_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./math/mul.js */ \"./src/math/mul.js\");\n/* harmony import */ var _math_div_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./math/div.js */ \"./src/math/div.js\");\n/* harmony import */ var _math_abs_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./math/abs.js */ \"./src/math/abs.js\");\n/* harmony import */ var _math_exp_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./math/exp.js */ \"./src/math/exp.js\");\n/* harmony import */ var _math_sin_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./math/sin.js */ \"./src/math/sin.js\");\n/* harmony import */ var _math_cos_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./math/cos.js */ \"./src/math/cos.js\");\n/* harmony import */ var _math_tan_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./math/tan.js */ \"./src/math/tan.js\");\n/* harmony import */ var _math_pow_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./math/pow.js */ \"./src/math/pow.js\");\n/* harmony import */ var _math_log_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./math/log.js */ \"./src/math/log.js\");\n/* harmony import */ var _math_asin_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./math/asin.js */ \"./src/math/asin.js\");\n/* harmony import */ var _math_acos_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./math/acos.js */ \"./src/math/acos.js\");\n/* harmony import */ var _math_atan_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./math/atan.js */ \"./src/math/atan.js\");\n/* harmony import */ var _math_diff_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./math/diff.js */ \"./src/math/diff.js\");\n/* harmony import */ var _math_integral_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./math/integral.js */ \"./src/math/integral.js\");\n/* harmony import */ var _math_solver_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./math/solver.js */ \"./src/math/solver.js\");\n/* harmony import */ var _math_rungeKutta_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./math/rungeKutta.js */ \"./src/math/rungeKutta.js\");\n/* harmony import */ var _math_eulr_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./math/eulr.js */ \"./src/math/eulr.js\");\n/* harmony import */ var _math_random_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./math/random.js */ \"./src/math/random.js\");\n/* harmony import */ var _math_fit_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./math/fit.js */ \"./src/math/fit.js\");\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar math = {\n  minus: _math_minus_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  reverse: _math_reverse_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  isNumber: _math_isNumber_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  isFinite: _math_isFinite_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  add: _math_add_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n  sub: _math_sub_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n  mul: _math_mul_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n  div: _math_div_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n  abs: _math_abs_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\n  exp: _math_exp_js__WEBPACK_IMPORTED_MODULE_14__[\"default\"],\n  sin: _math_sin_js__WEBPACK_IMPORTED_MODULE_15__[\"default\"],\n  cos: _math_cos_js__WEBPACK_IMPORTED_MODULE_16__[\"default\"],\n  tan: _math_tan_js__WEBPACK_IMPORTED_MODULE_17__[\"default\"],\n  pow: _math_pow_js__WEBPACK_IMPORTED_MODULE_18__[\"default\"],\n  log: _math_log_js__WEBPACK_IMPORTED_MODULE_19__[\"default\"],\n  asin: _math_asin_js__WEBPACK_IMPORTED_MODULE_20__[\"default\"],\n  acos: _math_acos_js__WEBPACK_IMPORTED_MODULE_21__[\"default\"],\n  atan: _math_atan_js__WEBPACK_IMPORTED_MODULE_22__[\"default\"],\n  diff: _math_diff_js__WEBPACK_IMPORTED_MODULE_23__[\"default\"],\n  integral: _math_integral_js__WEBPACK_IMPORTED_MODULE_24__[\"default\"],\n  solver: _math_solver_js__WEBPACK_IMPORTED_MODULE_25__[\"default\"],\n  rungeKutta: _math_rungeKutta_js__WEBPACK_IMPORTED_MODULE_26__[\"default\"],\n  eulr: _math_eulr_js__WEBPACK_IMPORTED_MODULE_27__[\"default\"],\n  random: _math_random_js__WEBPACK_IMPORTED_MODULE_28__[\"default\"],\n  fit: _math_fit_js__WEBPACK_IMPORTED_MODULE_29__[\"default\"],\n  vector: function vector() {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _construct(_math_Vector_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], args);\n  },\n  matrix: function matrix() {\n    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      args[_key2] = arguments[_key2];\n    }\n\n    return _construct(_math_Matrix_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], args);\n  },\n  makeMatrix: function makeMatrix(colSize, rawSize) {\n    return Object(_math_makeMatrix_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(colSize, rawSize);\n  },\n  unitMatrix: function unitMatrix(size) {\n    return Object(_math_unitMatrix_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(size);\n  },\n  complex: function complex() {\n    var re = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.0;\n    var im = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0;\n    return new _math_Complex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](re, im);\n  }\n};\nwindow.math = window.math || math;\nif (window.math === math) console.log('>>>>> math Module Loaded <<<<<');\n\n//# sourceURL=webpack:///./src/math.js?");

/***/ }),

/***/ "./src/math/Complex.js":
/*!*****************************!*\
  !*** ./src/math/Complex.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Complex_toString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Complex/toString.js */ \"./src/math/Complex/toString.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Complex =\n/*#__PURE__*/\nfunction () {\n  function Complex(re, im) {\n    _classCallCheck(this, Complex);\n\n    this._real = re, this._imag = im;\n  }\n\n  _createClass(Complex, [{\n    key: \"add\",\n    value: function add(a) {\n      if (typeof a === 'number') return new Complex(this.real + a, this.imag);else if (a instanceof Complex) return new Complex(this.real + a.real, this.imag + a.imag);\n      throw new Error('! Complex.add invalid argument');\n    }\n  }, {\n    key: \"sub\",\n    value: function sub(a) {\n      if (typeof a === 'number') return new Complex(this.real - a, this.imag);else if (a instanceof Complex) return new Complex(this.real - a.real, this.imag - a.imag);\n      throw new Error('! Complex.sub invalid argument');\n    }\n  }, {\n    key: \"mul\",\n    value: function mul(a) {\n      if (typeof a === 'number') return new Complex(a * this.real, a * this.imag);else if (a instanceof Complex) return new Complex(this.real * a.real - this.imag * a.imag, this.real * a.imag + this.imag * a.real);\n      throw new Error('! Complex.mul invalid argument');\n    }\n  }, {\n    key: \"div\",\n    value: function div(a) {\n      if (typeof a === 'number') return new Complex(this.real / a, this.imag / a);else if (a instanceof Complex) {\n        var abs2 = a.abs2;\n        return new Complex((this.real * a.real + this.imag * a.imag) / abs2, (this.imag * a.real - this.real * a.imag) / abs2);\n      }\n      throw new Error('! Complex.div invalid argument');\n    }\n  }, {\n    key: \"minus\",\n    value: function minus() {\n      return new Complex(-this.real, -this.imag);\n    }\n  }, {\n    key: \"conj\",\n    value: function conj() {\n      return new Complex(this.real, -this.imag);\n    }\n  }, {\n    key: \"reverse\",\n    value: function reverse() {\n      var abs2 = this.abs2;\n      return new Complex(this.real / abs2, -this.imag / abs2);\n    }\n  }, {\n    key: \"copy\",\n    value: function copy() {\n      return new Complex(this.real, this.imag);\n    }\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      return Object(_Complex_toString_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this);\n    }\n  }, {\n    key: \"isNumber\",\n    value: function isNumber() {\n      return true;\n    }\n  }, {\n    key: \"isFinite\",\n    value: function isFinite() {\n      return Number.isFinite(this.re) && Number.isFinit(this.im);\n    }\n  }, {\n    key: \"isSame\",\n    value: function isSame(x) {\n      var thre = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0e-8;\n      if (typeof x === 'number') return Math.abs(this.im) < thre && Math.abs(this.re - x) < thre;else if (x instanceof Complex) return Math.abs(this.im - x.im) && Math.abs(this.re - x.re) < thre;\n      throw new Error('! Complex.isSame invalid parameter');\n    }\n  }, {\n    key: \"re\",\n    get: function get() {\n      return this._real;\n    }\n  }, {\n    key: \"real\",\n    get: function get() {\n      return this._real;\n    }\n  }, {\n    key: \"im\",\n    get: function get() {\n      return this._imag;\n    }\n  }, {\n    key: \"imag\",\n    get: function get() {\n      return this._imag;\n    }\n  }, {\n    key: \"abs2\",\n    get: function get() {\n      return this.real * this.real + this.imag * this.imag;\n    }\n  }, {\n    key: \"r\",\n    get: function get() {\n      return Math.sqrt(this.abs2);\n    }\n  }, {\n    key: \"abs\",\n    get: function get() {\n      return this.r;\n    }\n  }, {\n    key: \"arg\",\n    get: function get() {\n      return Math.atan2(this.imag, this.real);\n    }\n  }]);\n\n  return Complex;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Complex);\n\n//# sourceURL=webpack:///./src/math/Complex.js?");

/***/ }),

/***/ "./src/math/Complex/toString.js":
/*!**************************************!*\
  !*** ./src/math/Complex/toString.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar toString = function toString(z) {\n  var MIN = 1.0e-8;\n  var str = Math.abs(z.real) < MIN ? '' : z.real.toFixed(3);\n\n  if (Math.abs(z.imag) < MIN) {} else if (z.imag < 0) str += z.imag.toFixed(3) + 'i';else str += '+' + z.imag.toFixed(3) + 'i';\n\n  return str;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (toString);\n\n//# sourceURL=webpack:///./src/math/Complex/toString.js?");

/***/ }),

/***/ "./src/math/Matrix.js":
/*!****************************!*\
  !*** ./src/math/Matrix.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.js */ \"./src/math/add.js\");\n/* harmony import */ var _sub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sub.js */ \"./src/math/sub.js\");\n/* harmony import */ var _mul_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mul.js */ \"./src/math/mul.js\");\n/* harmony import */ var _copy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./copy.js */ \"./src/math/copy.js\");\n/* harmony import */ var _isComplex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isComplex.js */ \"./src/math/isComplex.js\");\n/* harmony import */ var _Vector_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Vector.js */ \"./src/math/Vector.js\");\n/* harmony import */ var _Matrix_sweepOut_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Matrix/sweepOut.js */ \"./src/math/Matrix/sweepOut.js\");\n/* harmony import */ var _Matrix_jacobi_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Matrix/jacobi.js */ \"./src/math/Matrix/jacobi.js\");\n/* harmony import */ var _Matrix_toString_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Matrix/toString.js */ \"./src/math/Matrix/toString.js\");\n/* harmony import */ var _Matrix_isSymmetric_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Matrix/isSymmetric.js */ \"./src/math/Matrix/isSymmetric.js\");\n/* harmony import */ var _Matrix_isHermite_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Matrix/isHermite.js */ \"./src/math/Matrix/isHermite.js\");\n/* harmony import */ var _Matrix_leverrierFaddev_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Matrix/leverrierFaddev.js */ \"./src/math/Matrix/leverrierFaddev.js\");\n/* harmony import */ var _solver_dka_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./solver/dka.js */ \"./src/math/solver/dka.js\");\n/* harmony import */ var _solver_bairstow_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./solver/bairstow.js */ \"./src/math/solver/bairstow.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Matrix =\n/*#__PURE__*/\nfunction (_Array) {\n  _inherits(Matrix, _Array);\n\n  function Matrix() {\n    var _getPrototypeOf2;\n\n    _classCallCheck(this, Matrix);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Matrix)).call.apply(_getPrototypeOf2, [this].concat(args)));\n  }\n\n  _createClass(Matrix, [{\n    key: \"colVector\",\n    value: function colVector(i) {\n      return _construct(_Vector_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _toConsumableArray(this[i].map(function (e) {\n        return Object(_copy_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e);\n      })));\n    }\n  }, {\n    key: \"rawVector\",\n    value: function rawVector(i) {\n      return _construct(_Vector_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _toConsumableArray(this.map(function (a, j, arr) {\n        return Object(_copy_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(a[i]);\n      })));\n    }\n  }, {\n    key: \"tr\",\n    value: function tr() {\n      return this.reduce(function (sum, e, i) {\n        return Object(_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sum, e[i]);\n      }, 0);\n    }\n  }, {\n    key: \"eigenAll\",\n    value: function eigenAll() {\n      var params = Object(_Matrix_leverrierFaddev_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(this); //\tbairstow(params);\n\n      Object(_solver_dka_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(params); //\tthrow new Error('! Matrix.eigenAll temp STOP');\n    }\n  }, {\n    key: \"jacobi\",\n    value: function jacobi() {\n      return Object(_Matrix_jacobi_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this);\n    }\n  }, {\n    key: \"isSymmetric\",\n    value: function isSymmetric() {\n      return Object(_Matrix_isSymmetric_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this);\n    }\n  }, {\n    key: \"isHermite\",\n    value: function isHermite() {\n      return Object(_Matrix_isHermite_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(this);\n    }\n  }, {\n    key: \"mul\",\n    value: function mul(mat) {\n      if (typeof mat === 'number') return _construct(Matrix, _toConsumableArray(this.map(function (raw) {\n        return raw.map(function (e) {\n          return Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(mat, Object(_copy_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e));\n        });\n      })));\n      if (mat instanceof _Vector_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"] && this.rawSize === mat.length) return _construct(_Vector_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _toConsumableArray(this.map(function (a, i, arr) {\n        return Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr.colVector(i), mat);\n      })));\n      if (mat instanceof Matrix && this.rawSize === mat.colSize) return _construct(Matrix, _toConsumableArray(this.map(function (a, i, arr) {\n        return mat[0].map(function (b, j, arr2) {\n          return Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr.colVector(i), mat.rawVector(j));\n        });\n      })));\n      throw new Error('! Matrix.mul invalid argument  typeof(mat)=' + _typeof(mat));\n    }\n  }, {\n    key: \"add\",\n    value: function add(mat) {\n      if (mat instanceof Matrix && this.colSize === mat.colSize && this.rawSize === mat.colSize) return _construct(Matrix, _toConsumableArray(this.map(function (a, i) {\n        return a.map(function (b, j) {\n          return Object(_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(b, mat[i][j]);\n        });\n      })));\n      throw new Error('! Matrix.add invalid argument  typeof(mat)=' + _typeof(mat));\n    }\n  }, {\n    key: \"sub\",\n    value: function sub(mat) {\n      if (mat instanceof Matrix && this.colSize === mat.colSize && this.rawSize === mat.colSize) return _construct(Matrix, _toConsumableArray(this.map(function (a, i) {\n        return a.map(function (b, j) {\n          return Object(_sub_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(b, mat[i][j]);\n        });\n      })));\n      throw new Error('! Matrix.sub invalid argument  typeof(mat)=' + _typeof(mat));\n    }\n  }, {\n    key: \"reverse\",\n    value: function reverse() {\n      var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'sweepOut';\n      if (method === 'sweepOut') return Object(_Matrix_sweepOut_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this);\n    }\n  }, {\n    key: \"copy\",\n    value: function copy() {\n      return _construct(Matrix, _toConsumableArray(this.map(function (raw) {\n        return raw.map(function (e) {\n          return Object(_copy_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e);\n        });\n      })));\n    }\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      return Object(_Matrix_toString_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this);\n    }\n  }, {\n    key: \"isSquare\",\n    value: function isSquare() {\n      return this.colSize === this.rawSize;\n    }\n  }, {\n    key: \"isComplex\",\n    value: function isComplex() {\n      return this.one(function (raw) {\n        return raw.one(function (e) {\n          return Object(_isComplex_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(e);\n        });\n      });\n    }\n  }, {\n    key: \"colSize\",\n    get: function get() {\n      return this[0].length;\n    }\n  }, {\n    key: \"rawSize\",\n    get: function get() {\n      return this.length;\n    }\n  }]);\n\n  return Matrix;\n}(_wrapNativeSuper(Array));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Matrix);\n\n//# sourceURL=webpack:///./src/math/Matrix.js?");

/***/ }),

/***/ "./src/math/Matrix/isHermite.js":
/*!**************************************!*\
  !*** ./src/math/Matrix/isHermite.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _isSame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isSame.js */ \"./src/math/isSame.js\");\n/* harmony import */ var _conj_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../conj.js */ \"./src/math/conj.js\");\n/* harmony import */ var _isComplex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../isComplex.js */ \"./src/math/isComplex.js\");\n\n\n\n\nvar isHermite = function isHermite(mat) {\n  var thre = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0e-8;\n  if (mat.colSize !== mat.rawSize) return false;\n\n  for (var i = 0; i < mat.colSize; i++) {\n    for (var j = 0; j < i; j++) {\n      if (Object(_isSame_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(mat[i][j], Object(_conj_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(mat[j][i]), thre) === false) return false;\n    }\n  }\n\n  for (var _i = 0; _i < mat.colSize; _i++) {\n    if (Object(_isComplex_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(mat[_i][_i]) === true) return false;\n  }\n\n  return true;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isHermite);\n\n//# sourceURL=webpack:///./src/math/Matrix/isHermite.js?");

/***/ }),

/***/ "./src/math/Matrix/isSymmetric.js":
/*!****************************************!*\
  !*** ./src/math/Matrix/isSymmetric.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _isSame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isSame.js */ \"./src/math/isSame.js\");\n\n\nvar isSymmetric = function isSymmetric(mat) {\n  var thre = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0e-8;\n  if (mat.colSize !== mat.rawSize) return false;\n\n  for (var i = 0; i < mat.colSize; i++) {\n    for (var j = 0; j < i; j++) {\n      if (Object(_isSame_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(mat[i][j], mat[j][i], thre) === false) return false;\n    }\n  }\n\n  return true;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isSymmetric);\n\n//# sourceURL=webpack:///./src/math/Matrix/isSymmetric.js?");

/***/ }),

/***/ "./src/math/Matrix/jacobi.js":
/*!***********************************!*\
  !*** ./src/math/Matrix/jacobi.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add.js */ \"./src/math/add.js\");\n/* harmony import */ var _sub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sub.js */ \"./src/math/sub.js\");\n/* harmony import */ var _mul_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mul.js */ \"./src/math/mul.js\");\n/* harmony import */ var _div_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../div.js */ \"./src/math/div.js\");\n/* harmony import */ var _abs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../abs.js */ \"./src/math/abs.js\");\n/* harmony import */ var _sin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sin.js */ \"./src/math/sin.js\");\n/* harmony import */ var _cos_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cos.js */ \"./src/math/cos.js\");\n/* harmony import */ var _pow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pow.js */ \"./src/math/pow.js\");\n/* harmony import */ var _isSame_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../isSame.js */ \"./src/math/isSame.js\");\n/* harmony import */ var _minus_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../minus.js */ \"./src/math/minus.js\");\n/* harmony import */ var _unitMatrix_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../unitMatrix.js */ \"./src/math/unitMatrix.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\n\nvar MAX_LOOP = 100;\n\nvar jacobi = function jacobi(origin) {\n  var thre = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0e-8;\n  //    console.log(origin.toString());\n  if (origin.isSymmetric() === false) throw new Error('! Matrix.jacobi should be symmetric matrix');\n  var mat = origin.copy(); //    console.log('===== Matrix.jacobi START  =====');\n\n  var A = Object(_unitMatrix_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(origin.colSize);\n\n  for (var count = 0;; count++) {\n    var _maxIndex = maxIndex(mat),\n        _maxIndex2 = _slicedToArray(_maxIndex, 2),\n        p = _maxIndex2[0],\n        q = _maxIndex2[1];\n\n    var theta = Object(_isSame_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(mat[p][p], mat[q][q]) ? Math.PI / 4 : Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(0.5, Math.atan(Object(_div_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(-2, mat[p][q]), Object(_sub_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(mat[p][p], mat[q][q]))));\n    var AA = Object(_unitMatrix_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(A.colSize);\n    AA[p][p] = Object(_cos_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(theta);\n    AA[q][q] = Object(_cos_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(theta);\n    AA[p][q] = Object(_sin_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(theta);\n    AA[q][p] = Object(_minus_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(Object(_sin_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(theta));\n    A = Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(A, AA);\n    var praw = mat.rawVector(p),\n        qraw = mat.rawVector(q),\n        pcol = mat.colVector(p),\n        qcol = mat.colVector(q);\n\n    for (var i = 0; i < mat.colSize; i++) {\n      if (i !== p && i !== q) {\n        mat[p][i] = Object(_sub_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(pcol[i], Object(_cos_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(theta)), Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(qcol[i], Object(_sin_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(theta)));\n        mat[q][i] = Object(_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(pcol[i], Object(_sin_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(theta)), Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(qcol[i], Object(_cos_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(theta)));\n        mat[i][p] = Object(_sub_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(praw[i], Object(_cos_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(theta)), Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(qraw[i], Object(_sin_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(theta)));\n        mat[i][q] = Object(_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(praw[i], Object(_sin_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(theta)), Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(qraw[i], Object(_cos_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(theta)));\n      }\n\n      mat[p][p] = Object(_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(praw[p], Object(_pow_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_cos_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(theta), 2)), Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(qraw[q], Object(_pow_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_sin_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(theta), 2)), Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(-2, praw[q], Object(_sin_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(theta), Object(_cos_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(theta)));\n      mat[q][q] = Object(_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(praw[p], Object(_pow_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_sin_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(theta), 2)), Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(qraw[q], Object(_pow_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_cos_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(theta), 2)), Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(2, praw[q], Object(_sin_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(theta), Object(_cos_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(theta)));\n    }\n\n    mat[p][q] = 0;\n    mat[q][p] = 0; //\tmat[p][q]=add(mul(0.5, sub(praw[p], qraw[q]), sin(mul(2, theta))), mul(praw[q], cos(mul(2, theta))));\n    //\tmat[q][p]=add(mul(0.5, sub(praw[p], qraw[q]), sin(mul(2, theta))), mul(praw[q], cos(mul(2, theta))));\n    //\tconsole.log(p, q, theta);\n    //\tthrow new Error('temp');\n\n    if (isBreak(mat)) break;\n    if (count === MAX_LOOP) throw new Error('! Matrix.jacobi iteration over ' + MAX_LOOP);\n  }\n\n  var eigens = mat.map(function (e, i) {\n    return mat[i][i];\n  }); //    console.log(mat.toString());\n  //    console.log(A.toString());\n  //    console.log('===== Matrix.jacobi FINISH =====');\n\n  return [eigens, A];\n\n  function maxIndex(mat) {\n    var ii,\n        jj,\n        max = 0;\n\n    for (var _i2 = 0; _i2 < mat.colSize; _i2++) {\n      for (var j = 0; j < _i2; j++) {\n        var val = Object(_abs_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(mat[_i2][j]);\n\n        if (max < val) {\n          max = val;\n          ii = _i2;\n          jj = j;\n        }\n      }\n    }\n\n    return [ii, jj];\n  }\n\n  function isBreak(mat) {\n    for (var _i3 = 0; _i3 < mat.colSize; _i3++) {\n      for (var j = 0; j < _i3; j++) {\n        if (Object(_abs_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(mat[_i3][j]) > thre) return false;\n      }\n    }\n\n    return true;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (jacobi);\n\n//# sourceURL=webpack:///./src/math/Matrix/jacobi.js?");

/***/ }),

/***/ "./src/math/Matrix/leverrierFaddev.js":
/*!********************************************!*\
  !*** ./src/math/Matrix/leverrierFaddev.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mul_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mul.js */ \"./src/math/mul.js\");\n/* harmony import */ var _sub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sub.js */ \"./src/math/sub.js\");\n/* harmony import */ var _div_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../div.js */ \"./src/math/div.js\");\n/* harmony import */ var _minus_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../minus.js */ \"./src/math/minus.js\");\n/* harmony import */ var _unitMatrix_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../unitMatrix.js */ \"./src/math/unitMatrix.js\");\n\n\n\n\n\n\nvar leverrierFaddev = function leverrierFaddev(mat) {\n  console.log('===== Leverrir Faddev Method START  =====');\n  var E = Object(_unitMatrix_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(mat.colSize);\n  var B = mat.copy();\n  var params = [-1.0, B.tr()];\n\n  for (var i = 0; i < mat.colSize - 1; i++) {\n    B = Object(_mul_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(mat, Object(_sub_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(B, Object(_mul_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(params[params.length - 1], E)));\n    params.push(Object(_div_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(B.tr(), i + 2));\n  }\n\n  console.log('===== Leverrir Faddev Method FINISH =====');\n  return params.map(function (a) {\n    return Object(_minus_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(a);\n  }); // x^n + p[0]*x^(n-1)+....p[n-1];\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (leverrierFaddev);\n\n//# sourceURL=webpack:///./src/math/Matrix/leverrierFaddev.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _abs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abs.js */ \"./src/math/abs.js\");\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add.js */ \"./src/math/add.js\");\n/* harmony import */ var _sub_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sub.js */ \"./src/math/sub.js\");\n/* harmony import */ var _div_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../div.js */ \"./src/math/div.js\");\n/* harmony import */ var _mul_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mul.js */ \"./src/math/mul.js\");\n/* harmony import */ var _copy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../copy.js */ \"./src/math/copy.js\");\n/* harmony import */ var _swapRaw_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./swapRaw.js */ \"./src/math/Matrix/swapRaw.js\");\n/* harmony import */ var _swapCol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./swapCol.js */ \"./src/math/Matrix/swapCol.js\");\n/* harmony import */ var _Matrix_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Matrix.js */ \"./src/math/Matrix.js\");\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\n\n\n\n\n\n\n\n\nvar THRE = 1.0e-8;\n\nvar sweepOut = function sweepOut(origin) {\n  //    console.log('===== Matrix.sweepOut START =====');\n  var arr = [];\n\n  for (var i = 0; i < origin.colSize; i++) {\n    var raw = [];\n\n    for (var j = 0; j < 2 * origin.rawSize; j++) {\n      raw.push(0);\n    }\n\n    for (var _j = 0; _j < origin.rawSize; _j++) {\n      raw[_j] = Object(_copy_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(origin[i][_j]);\n    }\n\n    raw[origin.rawSize + i] = 1;\n    arr.push(raw);\n  } //    console.log('forward elimination START');\n\n\n  for (var _i = 0; _i < origin.colSize; _i++) {\n    var max = Object(_abs_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr[_i][_i]),\n        pivot = _i;\n\n    for (var _j2 = _i + 1; _j2 < origin.colSize; _j2++) {\n      var tmp = Object(_abs_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr[_j2][_i]);\n\n      if (tmp > max) {\n        max = tmp;\n        pivot = _j2;\n      }\n    }\n\n    if (max < THRE) throw new Error('! Matrix.solve(method=\"sweepOut\") can not solve');\n    if (pivot != _i) Object(_swapRaw_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(arr, _i, pivot);\n    divRaw(arr, _i, arr[_i][_i]);\n\n    for (var _j3 = _i + 1; _j3 < origin.colSize; _j3++) {\n      scaleSubRaw(arr, _j3, _i, arr[_j3][_i]);\n    }\n  } //    console.log('forward elimination FINISH');\n  //    console.log('backward elimination START');\n\n\n  for (var _i2 = origin.colSize - 1; _i2 > 0; _i2--) {\n    for (var _j4 = _i2 - 1; _j4 >= 0; _j4--) {\n      scaleSubRaw(arr, _j4, _i2, arr[_j4][_i2]);\n    }\n  } //    console.log('backward elimination FINISH');\n  //    console.log('===== Matrix.sweepOut FINISH =====');\n\n\n  return _construct(_Matrix_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _toConsumableArray(arr.map(function (e) {\n    return e.slice(origin.rawSize);\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sweepOut);\n\nfunction divRaw(arr2d, i, scale) {\n  for (var k = 0; k < arr2d[0].length; k++) {\n    arr2d[i][k] = Object(_div_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(arr2d[i][k], scale);\n  }\n}\n\nfunction scaleSubRaw(arr2d, j, i, scale) {\n  for (var k = 0; k < arr2d[0].length; k++) {\n    arr2d[j][k] = Object(_sub_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr2d[j][k], Object(_mul_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(scale, arr2d[i][k]));\n  }\n}\n\n//# sourceURL=webpack:///./src/math/Matrix/sweepOut.js?");

/***/ }),

/***/ "./src/math/Matrix/toString.js":
/*!*************************************!*\
  !*** ./src/math/Matrix/toString.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar toString = function toString(mat) {\n  var str = '';\n\n  for (var i = 0; i < mat.colSize; i++) {\n    str += '[ ';\n\n    for (var j = 0; j < mat.rawSize; j++) {\n      str += mat[i][j].toFixed(3) + ', ';\n    } //\tstr=str.slice(-2);\n\n\n    str += ' ]\\n';\n  }\n\n  return str;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (toString);\n\n//# sourceURL=webpack:///./src/math/Matrix/toString.js?");

/***/ }),

/***/ "./src/math/Vector.js":
/*!****************************!*\
  !*** ./src/math/Vector.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _copy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./copy.js */ \"./src/math/copy.js\");\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.js */ \"./src/math/add.js\");\n/* harmony import */ var _sub_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sub.js */ \"./src/math/sub.js\");\n/* harmony import */ var _mul_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mul.js */ \"./src/math/mul.js\");\n/* harmony import */ var _conj_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./conj.js */ \"./src/math/conj.js\");\n/* harmony import */ var _Matrix_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Matrix.js */ \"./src/math/Matrix.js\");\n/* harmony import */ var _isComplex_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isComplex.js */ \"./src/math/isComplex.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\n\n\nvar Vector =\n/*#__PURE__*/\nfunction (_Array) {\n  _inherits(Vector, _Array);\n\n  function Vector() {\n    var _getPrototypeOf2;\n\n    _classCallCheck(this, Vector);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Vector)).call.apply(_getPrototypeOf2, [this].concat(args)));\n  }\n\n  _createClass(Vector, [{\n    key: \"abs2\",\n    value: function abs2() {\n      return this.reduce(function (sum, e) {\n        return Object(_add_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(sum, Object(_mul_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e, Object(_conj_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(e)));\n      }, 0);\n    }\n  }, {\n    key: \"abs\",\n    value: function abs() {\n      return Math.sqrt(this.abs2());\n    }\n  }, {\n    key: \"copy\",\n    value: function copy() {\n      return _construct(Vector, _toConsumableArray(this.map(function (a) {\n        return Object(_copy_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a);\n      })));\n    }\n  }, {\n    key: \"add\",\n    value: function add(a) {\n      if (a instanceof Vector && this.length === a.length) return this.map(function (e, i) {\n        return Object(_add_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e, a[i]);\n      });\n      throw new Error('! Vector.add(a)  invalid parameter  typeof(a)=' + _typeof(a));\n    }\n  }, {\n    key: \"sub\",\n    value: function sub(a) {\n      if (a instanceof Vector && this.length === a.length) return this.map(function (e, i) {\n        return Object(_sub_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e, a[i]);\n      });\n      throw new Error('! Vector.sub(a)  invalid parameter  typeof(a)=' + _typeof(a));\n    }\n  }, {\n    key: \"mul\",\n    value: function mul(a) {\n      var _this = this;\n\n      if (typeof a === 'number') return this.map(function (e) {\n        return Object(_mul_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e, a);\n      });\n      if (a instanceof Vector && this.length === a.length) return this.reduce(function (sum, e, i) {\n        return Object(_add_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(sum, Object(_mul_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e, a[i]));\n      }, 0);\n      if (a instanceof _Matrix_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"] && this.length === a.colSize) return a[0].map(function (e, i) {\n        return Object(_mul_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this, a.rawVector(i));\n      });\n      throw new Error('! Vector.mul(a)  invalid parameter  typeof(a)=' + _typeof(a));\n    }\n  }, {\n    key: \"isComplex\",\n    value: function isComplex() {\n      return this.one(function (e) {\n        return Object(_isComplex_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(e);\n      });\n    }\n  }, {\n    key: \"length\",\n    get: function get() {\n      return this.length;\n    }\n  }]);\n\n  return Vector;\n}(_wrapNativeSuper(Array));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Vector);\n\n//# sourceURL=webpack:///./src/math/Vector.js?");

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

/***/ "./src/math/acos.js":
/*!**************************!*\
  !*** ./src/math/acos.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Complex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Complex.js */ \"./src/math/Complex.js\");\n/* harmony import */ var _exp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exp.js */ \"./src/math/exp.js\");\n/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log.js */ \"./src/math/log.js\");\n/* harmony import */ var _sqrt_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sqrt.js */ \"./src/math/sqrt.js\");\n/* harmony import */ var _minus_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./minus.js */ \"./src/math/minus.js\");\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add.js */ \"./src/math/add.js\");\n/* harmony import */ var _sub_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sub.js */ \"./src/math/sub.js\");\n/* harmony import */ var _mul_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mul.js */ \"./src/math/mul.js\");\n/* harmony import */ var _div_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./div.js */ \"./src/math/div.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\n\n\n\n\n\n\n\n\nvar acos = function acos(x) {\n  if (typeof x === 'number') return Math.acos(x);\n\n  if (x instanceof _Complex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n    var pureI = new _Complex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 1);\n    return Object(_mul_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_minus_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(pureI), Object(_log_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_add_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_mul_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(pureI, Object(_sqrt_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_sub_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(1, Object(_mul_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(x, x)))), x)));\n  }\n\n  throw new Error('! math.asin invalid argument  typeof(x)=' + _typeof(x));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (acos);\n\n//# sourceURL=webpack:///./src/math/acos.js?");

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

/***/ "./src/math/asin.js":
/*!**************************!*\
  !*** ./src/math/asin.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Complex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Complex.js */ \"./src/math/Complex.js\");\n/* harmony import */ var _exp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exp.js */ \"./src/math/exp.js\");\n/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log.js */ \"./src/math/log.js\");\n/* harmony import */ var _sqrt_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sqrt.js */ \"./src/math/sqrt.js\");\n/* harmony import */ var _minus_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./minus.js */ \"./src/math/minus.js\");\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add.js */ \"./src/math/add.js\");\n/* harmony import */ var _sub_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sub.js */ \"./src/math/sub.js\");\n/* harmony import */ var _mul_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mul.js */ \"./src/math/mul.js\");\n/* harmony import */ var _div_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./div.js */ \"./src/math/div.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\n\n\n\n\n\n\n\n\nvar asin = function asin(x) {\n  if (typeof x === 'number') return Math.asin(x);\n\n  if (x instanceof _Complex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n    var pureI = new _Complex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 1);\n    return Object(_mul_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_minus_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(pureI), Object(_log_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_add_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_sqrt_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_sub_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(1, Object(_mul_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(x, x))), Object(_mul_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(pureI, x))));\n  }\n\n  throw new Error('! math.asin invalid argument  typeof(x)=' + _typeof(x));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (asin);\n\n//# sourceURL=webpack:///./src/math/asin.js?");

/***/ }),

/***/ "./src/math/atan.js":
/*!**************************!*\
  !*** ./src/math/atan.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Complex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Complex.js */ \"./src/math/Complex.js\");\n/* harmony import */ var _exp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exp.js */ \"./src/math/exp.js\");\n/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log.js */ \"./src/math/log.js\");\n/* harmony import */ var _sqrt_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sqrt.js */ \"./src/math/sqrt.js\");\n/* harmony import */ var _minus_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./minus.js */ \"./src/math/minus.js\");\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add.js */ \"./src/math/add.js\");\n/* harmony import */ var _sub_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sub.js */ \"./src/math/sub.js\");\n/* harmony import */ var _mul_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mul.js */ \"./src/math/mul.js\");\n/* harmony import */ var _div_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./div.js */ \"./src/math/div.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\n\n\n\n\n\n\n\n\nvar atan = function atan(x) {\n  if (typeof x === 'number') return Math.atan(x);\n\n  if (x instanceof _Complex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n    var pureI = new _Complex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 1);\n    return Object(_mul_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(0.5, pureI, Object(_log_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_div_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_add_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(pureI, x), Object(_sub_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(pureI, x))));\n  }\n\n  throw new Error('! math.atan invalid argument  typeof(x)=' + _typeof(x));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (atan);\n\n//# sourceURL=webpack:///./src/math/atan.js?");

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

/***/ "./src/math/copy.js":
/*!**************************!*\
  !*** ./src/math/copy.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar copy = function copy(x) {\n  if (typeof x.copy === 'function') return x.copy(x);\n  if (_typeof(x) !== 'object') return x;\n  if (Array.isArray(x)) return x.map(function (a) {\n    return copy(a);\n  });\n  throw new Error('! math.copy invalid argument  typeof(x)=' + _typeof(x));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (copy);\n\n//# sourceURL=webpack:///./src/math/copy.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector.js */ \"./src/math/Vector.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\n\nvar div = function div() {\n  var div2 = function div2(a, b) {\n    if (typeof a === 'number' && typeof b === 'number') return a / b;else if (typeof a.div === 'function') return a.div(b);else if (typeof b.mul === 'function' && typeof b.reverse === 'function') return b.reverse().mul(a);else if (Array.isArray(a) && a.every(function (b) {\n      return typeof b === 'number';\n    }) && typeof b == 'number') return _construct(_Vector_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _toConsumableArray(a.map(function (a) {\n      return a / b;\n    })));\n    console.log('a=', a);\n    console.log('a.every', a.every(function (b) {\n      return typeof b === 'number';\n    }));\n    console.log('b=', b);\n    console.log('b=', _typeof(b));\n    throw new Error('! math.div invalid parameter');\n  };\n\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  return args.reduce(function (acc, a) {\n    return div2(acc, a);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (div);\n\n//# sourceURL=webpack:///./src/math/div.js?");

/***/ }),

/***/ "./src/math/eulr.js":
/*!**************************!*\
  !*** ./src/math/eulr.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar eulr = function eulr() {};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (eulr);\n\n//# sourceURL=webpack:///./src/math/eulr.js?");

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

/***/ "./src/math/fit.js":
/*!*************************!*\
  !*** ./src/math/fit.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fit_simplex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fit/simplex.js */ \"./src/math/fit/simplex.js\");\n\nvar fit = {\n  simplex: _fit_simplex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (fit);\n\n//# sourceURL=webpack:///./src/math/fit.js?");

/***/ }),

/***/ "./src/math/fit/simplex.js":
/*!*********************************!*\
  !*** ./src/math/fit/simplex.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar refrectConst = 1.0;\nvar expandConst = 2.0;\nvar diminishConst = 0.5;\nvar simplexMinSize = 1.0e-8;\n\nvar simplex = function simplex(data, func, initpar) {\n  var xarr = data.x;\n  var yarr = data.y;\n  var errarr = data.err;\n  if (typeof func !== 'function') throw new Error('fit.simplexの第二引数はfunctionのみです'); //    console.log('===== fit.simplex START =====');\n\n  if (initpar == null) initpar = _toConsumableArray(new Array(func.length - 1).keys()).map(function (a) {\n    return 1;\n  });\n  var simplex = [{\n    param: initpar,\n    chi2: calcChi2.apply(void 0, _toConsumableArray(initpar))\n  }];\n\n  for (var i = 0; i < initpar.length; i++) {\n    var newpar = initpar.map(function (a) {\n      return Math.random() * a;\n    });\n    simplex.push({\n      param: newpar,\n      chi2: calcChi2.apply(void 0, _toConsumableArray(newpar))\n    });\n  }\n\n  simplex.sort(sortFunc);\n\n  while (next() > simplexMinSize) {} //    console.log(simplex[0].param);\n\n\n  return {\n    param: simplex[0].param,\n    chi2: simplex[0].chi2,\n    'function': function _function(x) {\n      return func.apply(void 0, [x].concat(_toConsumableArray(simplex[0].param)));\n    }\n  };\n\n  function next() {\n    var worst = simplex[simplex.length - 1]; //\tconsole.log('===== before =====');\n    //\tsimplex.forEach((a, i)=>{ console.log(i, a.chi2) });\n\n    function shrink() {\n      //\t    console.log('shrink operation');\n      for (var _i = 1; _i < simplex.length; _i++) {\n        simplex[_i].param = simplex[_i].param.map(function (a, j) {\n          return 0.5 * (simplex[0].param[j] + a);\n        });\n        simplex[_i].chi2 = calcChi2.apply(void 0, _toConsumableArray(simplex[_i].param));\n      }\n    }\n\n    var centerParam = _toConsumableArray(new Array(worst.param.length)).map(function (a) {\n      return 0;\n    });\n\n    for (var _i2 = 0; _i2 < simplex.length; _i2++) {\n      for (var j = 0; j < centerParam.length; j++) {\n        centerParam[j] += simplex[_i2].param[j];\n      }\n    }\n\n    for (var _j = 0; _j < centerParam.length; _j++) {\n      centerParam[_j] /= simplex.length;\n    }\n\n    var reflectParam = centerParam.map(function (a, i) {\n      return (1.0 + refrectConst) * a - refrectConst * worst.param[i];\n    });\n    var reflectChi2 = calcChi2.apply(void 0, _toConsumableArray(reflectParam)); //\tconsole.log('reflect chi2 :', reflectChi2);\n\n    if (reflectChi2 < simplex[0].chi2) {\n      var expandParam = reflectParam.map(function (a, i) {\n        return expandConst * a + (1.0 - expandConst) * centerParam[i];\n      });\n      var expandChi2 = calcChi2.apply(void 0, _toConsumableArray(expandParam)); //\t    console.log('expand chi2  :', expandChi2);\n\n      if (expandChi2 < reflectChi2) {\n        worst.param = expandParam;\n        worst.chi2 = expandChi2;\n      } else {\n        worst.param = reflectParam;\n        worst.chi2 = reflectChi2;\n      }\n    } else if (reflectChi2 < simplex[simplex.length - 2].chi2) {\n      worst.param = reflectParam;\n      worst.chi2 = reflectChi2;\n    } else if (reflectChi2 < worst.chi2) {\n      var diminishParam = worst.param.map(function (a, i) {\n        return diminishConst * a + (1.0 - diminishConst) * centerParam[i];\n      });\n      var diminishChi2 = calcChi2.apply(void 0, _toConsumableArray(diminishParam));\n\n      if (diminishChi2 < worst.chi2) {\n        //\t\tconsole.log('diminish chi2 :', diminishChi2);\n        worst.param = diminishParam;\n        worst.chi2 = diminishChi2;\n      } else shrink();\n    } else shrink();\n\n    simplex.sort(sortFunc); //\tconsole.log('===== after =====');\n    //\tsimplex.forEach((a, i)=>{ console.log(i, a.chi2) });\n    //\tconsole.log('judge param :', 2*Math.abs(simplex[simplex.length-1].chi2-simplex[0].chi2)/(simplex[simplex.length-1].chi2+simplex[0].chi2));\n\n    return 2 * Math.abs(simplex[simplex.length - 1].chi2 - simplex[0].chi2) / (simplex[simplex.length - 1].chi2 + simplex[0].chi2);\n  }\n\n  function sortFunc(a, b) {\n    if (b.chi2 < a.chi2) return 1;\n    if (a.chi2 < b.chi2) return -1;\n    throw new ERror('Simplexが縮退しました 適切なパラメーターでやり直して下さい');\n  }\n\n  function calcChi2() {\n    var sum = 0;\n\n    for (var _len = arguments.length, param = new Array(_len), _key = 0; _key < _len; _key++) {\n      param[_key] = arguments[_key];\n    }\n\n    for (var _i3 = 0; _i3 < xarr.length; _i3++) {\n      if (errarr[_i3] > 0) {\n        sum += Math.pow((yarr[_i3] - func.apply(void 0, [xarr[_i3]].concat(param))) / errarr[_i3], 2); //\t\tconsole.log(yarr[i], func(xarr[i], ...param), errarr[i]);\n      }\n    }\n\n    return sum;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (simplex);\n\n//# sourceURL=webpack:///./src/math/fit/simplex.js?");

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

/***/ "./src/math/isComplex.js":
/*!*******************************!*\
  !*** ./src/math/isComplex.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar isComplex = function isComplex(x) {\n  if (typeof x === 'number') return false;\n  if (_typeof(x.isComplex)) return x.isComplex();\n  throw new Error('! math.isComplex invalid error  typeof(x)=' + _typeof(x));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isComplex);\n\n//# sourceURL=webpack:///./src/math/isComplex.js?");

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

/***/ "./src/math/isSame.js":
/*!****************************!*\
  !*** ./src/math/isSame.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar isSame = function isSame(a, b) {\n  var thre = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1.0e-8;\n  if (typeof a === 'number' && typeof b === 'number') return Math.abs(a - b) < thre;\n  if (typeof a.isSame === 'function') return a.isSame(b, thre);\n  if (typeof b.isSame === 'function') return b.isSame(a, thre);\n  throw new Error('! math.isSame invalid arguments');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isSame);\n\n//# sourceURL=webpack:///./src/math/isSame.js?");

/***/ }),

/***/ "./src/math/log.js":
/*!*************************!*\
  !*** ./src/math/log.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Complex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Complex.js */ \"./src/math/Complex.js\");\n/* harmony import */ var _exp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exp */ \"./src/math/exp.js\");\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add.js */ \"./src/math/add.js\");\n/* harmony import */ var _sub_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sub.js */ \"./src/math/sub.js\");\n/* harmony import */ var _mul_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mul.js */ \"./src/math/mul.js\");\n/* harmony import */ var _div_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./div.js */ \"./src/math/div.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\n\n\n\n\n\nvar log = function log(x) {\n  if (typeof x === 'number') return Math.log(x);\n\n  if (x instanceof _Complex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n    return new _Complex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](Math.log(x.r), x.arg);\n  }\n\n  throw new Error('! math.log invalid argument  typeof(x)=' + _typeof(x));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (log);\n\n//# sourceURL=webpack:///./src/math/log.js?");

/***/ }),

/***/ "./src/math/makeMatrix.js":
/*!********************************!*\
  !*** ./src/math/makeMatrix.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Matrix_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Matrix.js */ \"./src/math/Matrix.js\");\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar makeMatrix = function makeMatrix(colSize, rawSize) {\n  var col = [];\n\n  for (var i = 0; i < colSize; i++) {\n    var raw = [];\n\n    for (var j = 0; j < rawSize; j++) {\n      raw.push(0);\n    }\n\n    col.push(raw);\n  }\n\n  return _construct(_Matrix_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], col);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (makeMatrix);\n\n//# sourceURL=webpack:///./src/math/makeMatrix.js?");

/***/ }),

/***/ "./src/math/minus.js":
/*!***************************!*\
  !*** ./src/math/minus.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar minus = function minus(x) {\n  if (typeof x === 'number') return -x;\n  if (typeof x.minus === 'function') return x.minus();\n  throw new Error('! math.minus invalid argument   typeof(' + _typeof(x) + ')');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (minus);\n\n//# sourceURL=webpack:///./src/math/minus.js?");

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

/***/ "./src/math/pow.js":
/*!*************************!*\
  !*** ./src/math/pow.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Complex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Complex.js */ \"./src/math/Complex.js\");\n\n\nvar pow = function pow(x, n) {\n  if (typeof x === 'number' && typeof n === 'number') return Math.pow(x, n);\n\n  if (x instanceof _Complex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] && typeof n === 'number') {\n    var r = Math.pow(x.r, n);\n    var arg = x.arg * n;\n    return new _Complex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](r * Math.cos(arg), r * Math.sin(arg));\n  }\n\n  throw new Error('! math.pow invalied arguments');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pow);\n\n//# sourceURL=webpack:///./src/math/pow.js?");

/***/ }),

/***/ "./src/math/random.js":
/*!****************************!*\
  !*** ./src/math/random.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _random_LCG_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random/LCG.js */ \"./src/math/random/LCG.js\");\n/* harmony import */ var _random_dump_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./random/dump.js */ \"./src/math/random/dump.js\");\n/* harmony import */ var _random_gauss_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./random/gauss.js */ \"./src/math/random/gauss.js\");\n\n\n\nvar lgc = new _random_LCG_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1664525, 1013904223, Math.pow(2.0, 32));\nvar engine = lgc;\nvar random = {\n  get lgc() {\n    return lgc;\n  },\n\n  zeroToOne: function zeroToOne() {\n    return engine.zeroToOne();\n  },\n  dump: function dump() {\n    Object(_random_dump_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(engine);\n  },\n  gauss: function gauss(mean, sigma) {\n    return Object(_random_gauss_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(engine, mean, sigma);\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (random);\n\n//# sourceURL=webpack:///./src/math/random.js?");

/***/ }),

/***/ "./src/math/random/LCG.js":
/*!********************************!*\
  !*** ./src/math/random/LCG.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar LGC =\n/*#__PURE__*/\nfunction () {\n  function LGC(a, c, max) {\n    var seed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n\n    _classCallCheck(this, LGC);\n\n    this._a = a;\n    this._c = c;\n    this._max = max;\n    this._seed = seed;\n  }\n\n  _createClass(LGC, [{\n    key: \"setSeed\",\n    value: function setSeed(seed) {\n      if (IsInterger(seed) !== true) throw new Error('!!!!! LGC.setSeed seed should be integer !!!!!');\n      if (seed < 0 || this._max < seed) throw new Error(\"!!!!! LGC.setSeed Invalid Range \".concat(seed, \" [0. \").concat(this._seed, \"]\"));\n      this._seed = seed;\n    }\n  }, {\n    key: \"zeroToOne\",\n    value: function zeroToOne() {\n      this._seed = (this._a * this._seed + this._c) % this._max;\n      return this._seed / this._max;\n    }\n  }, {\n    key: \"seed\",\n    get: function get() {\n      return this._seed;\n    }\n  }]);\n\n  return LGC;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LGC);\n\n//# sourceURL=webpack:///./src/math/random/LCG.js?");

/***/ }),

/***/ "./src/math/random/dump.js":
/*!*********************************!*\
  !*** ./src/math/random/dump.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar dump = function dump(g) {\n  console.log('===== random dump =====');\n  console.log('Seed :', g._seed);\n  console.log('=======================');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dump);\n\n//# sourceURL=webpack:///./src/math/random/dump.js?");

/***/ }),

/***/ "./src/math/random/gauss.js":
/*!**********************************!*\
  !*** ./src/math/random/gauss.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar gauss = function gauss(engine, mean, sigma) {\n  var a1 = engine.zeroToOne();\n  var a2 = engine.zeroToOne();\n  return Math.sqrt(-2 * Math.log(a1)) * sigma * Math.sin(2 * Math.PI * a2) + mean;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (gauss);\n\n//# sourceURL=webpack:///./src/math/random/gauss.js?");

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

/***/ "./src/math/round.js":
/*!***************************!*\
  !*** ./src/math/round.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Complex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Complex.js */ \"./src/math/Complex.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\nvar round = function round(x, precision) {\n  if (typeof x === 'number') return innerRound(x, precision);\n\n  if (x instanceof _Complex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n    var roundReal = innerRound(x.real, precision);\n    var roundImag = innerRound(x.imag, precision);\n    if (roundImag !== 0) return new _Complex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](roundReal, roundImag);else return roundReal;\n  }\n\n  throw new Error('! math.round invalid argument typeof(x)=' + _typeof(x));\n};\n\nfunction innerRound(number, precision) {\n  var shift = function shift(number, precision, reverseShift) {\n    if (reverseShift) {\n      precision = -precision;\n    }\n\n    var numArray = (\"\" + number).split(\"e\");\n    return +(numArray[0] + \"e\" + (numArray[1] ? +numArray[1] + precision : precision));\n  };\n\n  return shift(Math.round(shift(number, precision, false)), precision, true);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (round);\n\n//# sourceURL=webpack:///./src/math/round.js?");

/***/ }),

/***/ "./src/math/rungeKutta.js":
/*!********************************!*\
  !*** ./src/math/rungeKutta.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rungeKutta_step_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rungeKutta/step.js */ \"./src/math/rungeKutta/step.js\");\n/* harmony import */ var _rungeKutta_iterate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rungeKutta/iterate.js */ \"./src/math/rungeKutta/iterate.js\");\n\n\nvar rungeKutta = {\n  step: _rungeKutta_step_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  iterate: _rungeKutta_iterate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (rungeKutta);\n\n//# sourceURL=webpack:///./src/math/rungeKutta.js?");

/***/ }),

/***/ "./src/math/rungeKutta/iterate.js":
/*!****************************************!*\
  !*** ./src/math/rungeKutta/iterate.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _step_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step.js */ \"./src/math/rungeKutta/step.js\");\n\n\nvar iterate = function iterate(func, args, n) {\n  var delta = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1.0e-8;\n  var next = args;\n\n  for (var i = 0; i < n; i++) {\n    next = Object(_step_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(func, next, delta); //\tconsole.log('ite', i, ' next :',next);\n  }\n\n  return next;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (iterate);\n\n//# sourceURL=webpack:///./src/math/rungeKutta/iterate.js?");

/***/ }),

/***/ "./src/math/rungeKutta/step.js":
/*!*************************************!*\
  !*** ./src/math/rungeKutta/step.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add.js */ \"./src/math/add.js\");\n/* harmony import */ var _sub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sub.js */ \"./src/math/sub.js\");\n/* harmony import */ var _div_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../div.js */ \"./src/math/div.js\");\n/* harmony import */ var _mul_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mul.js */ \"./src/math/mul.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\n\n\n\n\nvar step = function step(func, args) {\n  var delta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1.0e-8;\n\n  if (typeof func === 'function' && Array.isArray(args)) {\n    var k1 = func.apply(void 0, _toConsumableArray(args));\n    var k2 = func.apply(void 0, _toConsumableArray(args.map(function (a, i) {\n      return Object(_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a, Object(_mul_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(0.5, delta, k1[i]));\n    })));\n    var k3 = func.apply(void 0, _toConsumableArray(args.map(function (a, i) {\n      return Object(_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a, Object(_mul_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(0.5, delta, k2[i]));\n    })));\n    var k4 = func.apply(void 0, _toConsumableArray(args.map(function (a, i) {\n      return Object(_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a, Object(_mul_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(delta, k3[i]));\n    })));\n    return args.map(function (a, i) {\n      return Object(_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a, Object(_div_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_mul_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(delta, Object(_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(k1[i], Object(_mul_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(2, k2[i]), Object(_mul_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(2, k3[i]), k4[i])), 6));\n    });\n  }\n\n  throw new Error('! math.rungeKutta.setp Invalid argument !');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (step);\n\n//# sourceURL=webpack:///./src/math/rungeKutta/step.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _solver_bisection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solver/bisection.js */ \"./src/math/solver/bisection.js\");\n/* harmony import */ var _solver_newton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solver/newton.js */ \"./src/math/solver/newton.js\");\n/* harmony import */ var _solver_bairstow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solver/bairstow.js */ \"./src/math/solver/bairstow.js\");\n/* harmony import */ var _solver_dka_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solver/dka.js */ \"./src/math/solver/dka.js\");\n\n\n\n\nvar solver = {\n  bisection: _solver_bisection_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  newton: _solver_newton_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  bairstow: _solver_bairstow_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  dka: _solver_dka_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (solver);\n\n//# sourceURL=webpack:///./src/math/solver.js?");

/***/ }),

/***/ "./src/math/solver/bairstow.js":
/*!*************************************!*\
  !*** ./src/math/solver/bairstow.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _minus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../minus.js */ \"./src/math/minus.js\");\n/* harmony import */ var _sqrt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sqrt.js */ \"./src/math/sqrt.js\");\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add.js */ \"./src/math/add.js\");\n/* harmony import */ var _sub_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sub.js */ \"./src/math/sub.js\");\n/* harmony import */ var _mul_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mul.js */ \"./src/math/mul.js\");\n/* harmony import */ var _div_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../div.js */ \"./src/math/div.js\");\n/* harmony import */ var _abs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../abs.js */ \"./src/math/abs.js\");\n\n\n\n\n\n\n\n\nvar bairstow = function bairstow(a) {\n  var thre = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0e-10;\n  console.log('===== Bairstow START  =====');\n  if (a.length <= 1) throw new Error('! solver.bairstow invalid a.length shold be 2');\n  if (a.length === 2) return [Object(_div_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_minus_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a[1]), a[0])];\n  var ans = [];\n  var p = 1,\n      q = 1;\n  var b = [],\n      c = [];\n  b.push(a[0]);\n  c.push(b[0]);\n  b.push(Object(_sub_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(a[1], Object(_mul_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(p, b[0])));\n  c.push(Object(_sub_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(b[1], Object(_mul_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(p, c[0])));\n\n  for (var i = 2; i < a.length; i++) {\n    b.push(Object(_sub_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(a[i], Object(_mul_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(p, b[i - 1]), Object(_mul_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(q, b[i - 2])));\n    c.push(Object(_sub_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(b[i], Object(_mul_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(p, c[i - 1]), Object(_mul_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(q, c[i - 2])));\n  }\n\n  var D = Object(_sub_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_mul_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(c[a.length - 3], c[a.length - 3]), Object(_mul_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(c[a.length - 4], Object(_sub_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(c[a.length - 2], b[a.length - 2])));\n  var delta_p = Object(_div_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_sub_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_mul_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(b[a.length - 2], c[a.length - 3]), Object(_mul_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(b[a.length - 1], c[a.length - 4])), D);\n  var delta_q = Object(_div_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_sub_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_mul_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(b[a.length - 1], c[a.length - 3]), Object(_mul_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(b[a.length - 2], Object(_sub_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(c[a.length - 2], b[a.length - 2]))), D);\n\n  while (a.length > 0) {\n    if (a.length === 2) {\n      ans.push(Object(_div_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_minus_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a[1]), a[0]));\n      a = [];\n      break;\n    } else if (a.length === 3) {\n      var _D = Object(_sqrt_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_sub_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_mul_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(a[1], a[1]), Object(_mul_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(4, a[0], a[2])));\n\n      ans.push(Object(_div_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_add_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_minus_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a[1]), _D), 2, a[2]));\n      ans.push(Object(_div_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_sub_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_minus_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a[1]), _D), 2, a[2]));\n      a = [];\n      break;\n    } //    console.log('delta_p', delta_p, ' delta_q', delta_q);\n\n\n    while (Object(_abs_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(delta_p) > thre || Object(_abs_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(delta_q) > thre) {\n      p = Object(_add_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(p, delta_p);\n      q = Object(_add_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(q, delta_q);\n      b[1] = Object(_sub_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(a[1], Object(_mul_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(p, b[0]));\n      c[1] = Object(_sub_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(b[1], Object(_mul_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(p, c[0]));\n\n      for (var _i = 2; _i < a.length; _i++) {\n        b[_i] = Object(_sub_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(a[_i], Object(_mul_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(p, b[_i - 1]), Object(_mul_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(q, b[_i - 2]));\n        c[_i] = Object(_sub_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(b[_i], Object(_mul_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(p, c[_i - 1]), Object(_mul_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(q, c[_i - 2]));\n      }\n\n      D = Object(_sub_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_mul_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(c[a.length - 3], c[a.length - 3]), Object(_mul_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(c[a.length - 4], Object(_sub_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(c[a.length - 2], b[a.length - 2])));\n      delta_p = Object(_div_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_sub_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_mul_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(b[a.length - 2], c[a.length - 3]), Object(_mul_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(b[a.length - 1], c[a.length - 4])), D);\n      delta_q = Object(_div_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_sub_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_mul_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(b[a.length - 1], c[a.length - 3]), Object(_mul_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(b[a.length - 2], Object(_sub_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(c[a.length - 2], b[a.length - 2]))), D);\n      console.log('delta_p', delta_p, ' delta_q', delta_q);\n    }\n\n    console.log('p=', p, ' q=', q);\n    var D2 = Object(_sqrt_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_sub_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_mul_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(p, p), Object(_mul_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(4, q)));\n    ans.push(Object(_div_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_add_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_minus_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(p), D2), 2));\n    ans.push(Object(_div_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_sub_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_minus_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(p), D2), 2));\n    console.log(ans);\n    a = b.slice(0, -2); //\tthrow new Error('! temp');\n  }\n\n  console.log('===== Bairstow FINISH =====');\n  console.log(ans);\n  return ans;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (bairstow);\n\n//# sourceURL=webpack:///./src/math/solver/bairstow.js?");

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

/***/ "./src/math/solver/dka.js":
/*!********************************!*\
  !*** ./src/math/solver/dka.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add.js */ \"./src/math/add.js\");\n/* harmony import */ var _sub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sub.js */ \"./src/math/sub.js\");\n/* harmony import */ var _mul_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mul.js */ \"./src/math/mul.js\");\n/* harmony import */ var _pow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pow.js */ \"./src/math/pow.js\");\n/* harmony import */ var _div_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../div.js */ \"./src/math/div.js\");\n/* harmony import */ var _abs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../abs.js */ \"./src/math/abs.js\");\n/* harmony import */ var _exp_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../exp.js */ \"./src/math/exp.js\");\n/* harmony import */ var _copy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../copy.js */ \"./src/math/copy.js\");\n/* harmony import */ var _minus_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../minus.js */ \"./src/math/minus.js\");\n/* harmony import */ var _round_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../round.js */ \"./src/math/round.js\");\n/* harmony import */ var _Complex_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Complex.js */ \"./src/math/Complex.js\");\n\n\n\n\n\n\n\n\n\n\n\nvar MAX_LOOP = 1000;\n\nvar dka = function dka(a) {\n  var thre = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0e-8;\n  //    console.log('===== solver.dka START  =====');\n  a = a.map(function (e) {\n    return Object(_div_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(e, a[0]);\n  });\n  var n = a.length - 1;\n  var pureI = new _Complex_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"](0, 1);\n\n  var func = function func(x) {\n    var sum = 0;\n\n    for (var i = 0; i < a.length; i++) {\n      sum = Object(_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sum, Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(a[i], Object(_pow_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(x, n - i)));\n    }\n\n    return sum;\n  };\n\n  var ans0 = [],\n      ans1 = [];\n  var r = a.reduce(function (before, e) {\n    return Object(_abs_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(before) > Object(_abs_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(e) ? Object(_abs_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(before) : Object(_abs_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(e);\n  });\n\n  for (var i = 0; i < n; i++) {\n    ans0.push(Object(_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(_minus_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_div_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(a[1], n)), Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(r, Object(_exp_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_mul_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(pureI, Object(_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(_div_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(2 * i * Math.PI, n), Object(_div_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(1, 2 * n)))))));\n  }\n\n  for (var _i = 0; _i < n; _i++) {\n    var tmp = func(ans0[_i]);\n\n    for (var j = 0; j < n; j++) {\n      if (_i === j) continue;\n      tmp = Object(_div_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(tmp, Object(_sub_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ans0[_i], ans0[j]));\n    }\n\n    ans1.push(Object(_sub_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ans0[_i], tmp));\n  }\n\n  for (var loop = 0;; loop++) {\n    for (var _i2 = 0; _i2 < n; _i2++) {\n      var _tmp = func(ans0[_i2]);\n\n      for (var _j = 0; _j < n; _j++) {\n        if (_i2 === _j) continue;\n        _tmp = Object(_div_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_tmp, Object(_sub_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ans0[_i2], ans0[_j]));\n      }\n\n      ans1[_i2] = Object(_sub_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ans0[_i2], _tmp);\n    }\n\n    var flag = true;\n\n    for (var _i3 = 0; _i3 < ans0.length; _i3++) {\n      if (Object(_abs_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_sub_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ans0[_i3], ans1[_i3])) > thre) flag = false;\n    }\n\n    if (flag === true) break;\n    ans0 = ans1.map(function (e) {\n      return Object(_copy_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(e);\n    });\n    if (loop === MAX_LOOP) throw new Error('solver.dka iteration over');\n  } //    console.log(ans1);\n  //    console.log('===== solver.dka FINISH =====');\n\n\n  console.log(ans1.map(function (e) {\n    return Object(_round_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(e, Math.ceil(e));\n  }));\n  return ans1.map(function (e) {\n    return Object(_round_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(e, Math.ceil(e));\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dka);\n\n//# sourceURL=webpack:///./src/math/solver/dka.js?");

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

/***/ "./src/math/sqrt.js":
/*!**************************!*\
  !*** ./src/math/sqrt.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Complex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Complex.js */ \"./src/math/Complex.js\");\n\n\nvar sqrt = function sqrt(x) {\n  if (typeof x === 'number' && x >= 0) return Math.sqrt(x);\n  if (typeof x === 'number' && x < 0) return new _Complex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, Math.sqrt(-x));\n\n  if (x instanceof _Complex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n    var r = Math.pow(x.r, 0.5);\n    var arg = x.arg * 0.5;\n    return new _Complex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](r * Math.cos(arg), r * Math.sin(arg));\n  }\n\n  throw new Error('! math.sqrt invalied arguments');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sqrt);\n\n//# sourceURL=webpack:///./src/math/sqrt.js?");

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

/***/ }),

/***/ "./src/math/unitMatrix.js":
/*!********************************!*\
  !*** ./src/math/unitMatrix.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Matrix_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Matrix.js */ \"./src/math/Matrix.js\");\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar unitMatrix = function unitMatrix(n) {\n  var arr2d = [];\n\n  for (var i = 0; i < n; i++) {\n    var arr = [];\n\n    for (var j = 0; j < n; j++) {\n      arr.push(0);\n    }\n\n    arr2d.push(arr);\n  }\n\n  for (var _i = 0; _i < n; _i++) {\n    arr2d[_i][_i] = 1;\n  }\n\n  return _construct(_Matrix_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], arr2d);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (unitMatrix);\n\n//# sourceURL=webpack:///./src/math/unitMatrix.js?");

/***/ })

/******/ });