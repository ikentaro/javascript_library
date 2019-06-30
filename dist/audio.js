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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/audio.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/audio.js":
/*!**********************!*\
  !*** ./src/audio.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _audio_context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio/context.js */ \"./src/audio/context.js\");\n/* harmony import */ var _audio_viewer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio/viewer.js */ \"./src/audio/viewer.js\");\n/* harmony import */ var _audio_create_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio/create.js */ \"./src/audio/create.js\");\n\n\n\nwindow.audio = window.audio || {\n  context: _audio_context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  create: _audio_create_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  viewer: _audio_viewer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\nconsole.log('===== audio module print =====');\nconsole.log(window.audio);\n\n//# sourceURL=webpack:///./src/audio.js?");

/***/ }),

/***/ "./src/audio/context.js":
/*!******************************!*\
  !*** ./src/audio/context.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar context = new (window.AudioContext || window.webkitAudioContext)();\n/* harmony default export */ __webpack_exports__[\"default\"] = (context);\n\n//# sourceURL=webpack:///./src/audio/context.js?");

/***/ }),

/***/ "./src/audio/create.js":
/*!*****************************!*\
  !*** ./src/audio/create.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.js */ \"./src/audio/context.js\");\n/* harmony import */ var _create_decodeAudioData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create/decodeAudioData.js */ \"./src/audio/create/decodeAudioData.js\");\n\n\nvar create = {\n  elementSource: function elementSource(htmlElem) {\n    return _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createMediaElementSource(htmlElem);\n  },\n  bufferSource: function bufferSource(url) {\n    return _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createBufferSource();\n  },\n  decodeAudioData: _create_decodeAudioData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  oscillator: function oscillator() {\n    return _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createOscillator();\n  },\n  gain: function gain() {\n    return _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createGain();\n  },\n  biquadFilter: function biquadFilter() {\n    return _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createBiquadFilter();\n  },\n  delay: function delay() {\n    return _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createDelay();\n  },\n  analyser: function analyser() {\n    return _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createAnalyser();\n  },\n  analyzer: function analyzer() {\n    return _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createAnalyser();\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (create);\n\n//# sourceURL=webpack:///./src/audio/create.js?");

/***/ }),

/***/ "./src/audio/create/decodeAudioData.js":
/*!*********************************************!*\
  !*** ./src/audio/create/decodeAudioData.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context.js */ \"./src/audio/context.js\");\n\n\nvar decodeAudioData = function decodeAudioData(url) {\n  return new Promise(function (resolve) {\n    fetch(url).then(function (res) {\n      return res.arrayBuffer();\n    }).then(function (arrBuf) {\n      return _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].decodeAudioData(arrBuf);\n    }).then(function (audioBuf) {\n      return resolve(audioBuf);\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (decodeAudioData);\n\n//# sourceURL=webpack:///./src/audio/create/decodeAudioData.js?");

/***/ }),

/***/ "./src/audio/viewer.js":
/*!*****************************!*\
  !*** ./src/audio/viewer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _viewer_baseLatency_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewer/baseLatency.js */ \"./src/audio/viewer/baseLatency.js\");\n/* harmony import */ var _viewer_outputLatency_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewer/outputLatency.js */ \"./src/audio/viewer/outputLatency.js\");\n/* harmony import */ var _viewer_currentTime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewer/currentTime.js */ \"./src/audio/viewer/currentTime.js\");\n/* harmony import */ var _viewer_state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewer/state.js */ \"./src/audio/viewer/state.js\");\n\n\n\n\nvar viewer = {\n  baseLatency: _viewer_baseLatency_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  outputLatency: _viewer_outputLatency_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  currentTime: _viewer_currentTime_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  state: _viewer_state_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (viewer);\n\n//# sourceURL=webpack:///./src/audio/viewer.js?");

/***/ }),

/***/ "./src/audio/viewer/baseLatency.js":
/*!*****************************************!*\
  !*** ./src/audio/viewer/baseLatency.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context.js */ \"./src/audio/context.js\");\n\n\nvar baseLatency = function baseLatency(html) {\n  if (_context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].baseLatency == null) html.innerHTML = '未実装';else {\n    var set = function set() {\n      html.innerHTML = _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].baseLatency;\n      window.requestAnimationFrame(set);\n    };\n\n    window.requestAnimationFrame(set);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (baseLatency);\n\n//# sourceURL=webpack:///./src/audio/viewer/baseLatency.js?");

/***/ }),

/***/ "./src/audio/viewer/currentTime.js":
/*!*****************************************!*\
  !*** ./src/audio/viewer/currentTime.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context.js */ \"./src/audio/context.js\");\n\n\nvar currentTime = function currentTime(html) {\n  if (_context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentTime == null) html.innerHTML = '未実装';else {\n    var set = function set() {\n      html.innerHTML = _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentTime;\n      window.requestAnimationFrame(set);\n    };\n\n    window.requestAnimationFrame(set);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (currentTime);\n\n//# sourceURL=webpack:///./src/audio/viewer/currentTime.js?");

/***/ }),

/***/ "./src/audio/viewer/outputLatency.js":
/*!*******************************************!*\
  !*** ./src/audio/viewer/outputLatency.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context.js */ \"./src/audio/context.js\");\n\n\nvar outputLatency = function outputLatency(html) {\n  if (_context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].outputLatency == null) html.innerHTML = '未実装';else {\n    var set = function set() {\n      html.innerHTML = _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].outputLatency;\n      window.requestAnimationFrame(set);\n    };\n\n    window.requestAnimationFrame(set);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (outputLatency);\n\n//# sourceURL=webpack:///./src/audio/viewer/outputLatency.js?");

/***/ }),

/***/ "./src/audio/viewer/state.js":
/*!***********************************!*\
  !*** ./src/audio/viewer/state.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context.js */ \"./src/audio/context.js\");\n\n\nvar state = function state(html) {\n  if (_context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state == null) html.innerHTML = '未実装';else {\n    var set = function set() {\n      html.innerHTML = _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state;\n      window.requestAnimationFrame(set);\n    };\n\n    window.requestAnimationFrame(set);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (state);\n\n//# sourceURL=webpack:///./src/audio/viewer/state.js?");

/***/ })

/******/ });