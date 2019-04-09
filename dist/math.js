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
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/Complex.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/abs.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/conj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/minus.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/reverse.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/add.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/sub.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/mul.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/div.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/exp.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/cos.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/sin.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/tan.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/solver.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/diff.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/integral.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/Vector.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nwindow.math = window.math || {\n  complex: function complex() {\n    var re = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n    var im = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n    return new !(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/Complex.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(re, im);\n  },\n  abs: !(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/abs.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n  // abs(x)\n  minus: !(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/minus.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n  // minus(x)\n  reverse: !(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/reverse.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n  // reverse(x)\n  add: !(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/add.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n  // add(...args)\n  sub: !(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/sub.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n  // add(...args)\n  mul: !(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/mul.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n  // mul(...args)\n  div: !(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/div.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n  // div(...args)\n  exp: !(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/exp.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n  // exp(x)\n  cos: !(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/cos.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n  // cos(x)\n  sin: !(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/sin.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n  // sin(x)\n  tan: !(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/tan.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n  // tan(x)\n  solver: !(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/solver.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n  // module\n  diff: !(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/diff.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n  integral: !(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/integral.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n  vector: function vector() {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _construct(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './math/Vector.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), args);\n  } // test:()=>{\n  // \tconst vec=new Vector(1, 2, 3);\n  // \tconsole.log('vec', vec);\n  // \tconsole.log(vec instanceof Vector);\n  // }\n\n};\nconsole.log('===== math module print =====');\nconsole.log(window.math);\n\n//# sourceURL=webpack:///./src/math.js?");

/***/ })

/******/ });