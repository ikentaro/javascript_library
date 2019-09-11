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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _audio_context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio/context.js */ \"./src/audio/context.js\");\n/* harmony import */ var _audio_viewer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio/viewer.js */ \"./src/audio/viewer.js\");\n/* harmony import */ var _audio_create_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio/create.js */ \"./src/audio/create.js\");\n/* harmony import */ var _audio_connect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audio/connect.js */ \"./src/audio/connect.js\");\n/* harmony import */ var _audio_module_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./audio/module.js */ \"./src/audio/module.js\");\n/* harmony import */ var _audio_setGainControl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./audio/setGainControl.js */ \"./src/audio/setGainControl.js\");\n/* harmony import */ var _audio_setQvalControl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./audio/setQvalControl.js */ \"./src/audio/setQvalControl.js\");\n/* harmony import */ var _audio_setFreqControl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./audio/setFreqControl.js */ \"./src/audio/setFreqControl.js\");\n/* harmony import */ var _audio_setDetuneControl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./audio/setDetuneControl.js */ \"./src/audio/setDetuneControl.js\");\n/* harmony import */ var _audio_setDelayControl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./audio/setDelayControl.js */ \"./src/audio/setDelayControl.js\");\n/* harmony import */ var _audio_setFeedbackControl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./audio/setFeedbackControl.js */ \"./src/audio/setFeedbackControl.js\");\n/* harmony import */ var _audio_setMixControl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./audio/setMixControl.js */ \"./src/audio/setMixControl.js\");\n/* harmony import */ var _audio_setStateControl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./audio/setStateControl.js */ \"./src/audio/setStateControl.js\");\n/* harmony import */ var _audio_setSmoothingTimeControl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./audio/setSmoothingTimeControl.js */ \"./src/audio/setSmoothingTimeControl.js\");\n/* harmony import */ var _audio_setFilterOption_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./audio/setFilterOption.js */ \"./src/audio/setFilterOption.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nwindow.audio = window.audio || {\n  context: _audio_context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  create: _audio_create_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  connect: _audio_connect_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  viewer: _audio_viewer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  module: _audio_module_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  setGainControl: _audio_setGainControl_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  setQvalControl: _audio_setQvalControl_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  setFreqControl: _audio_setFreqControl_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  setDetuneControl: _audio_setDetuneControl_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  setDelayControl: _audio_setDelayControl_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n  setFilterOption: _audio_setFilterOption_js__WEBPACK_IMPORTED_MODULE_14__[\"default\"],\n  setFeedbackControl: _audio_setFeedbackControl_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n  setMixControl: _audio_setMixControl_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n  setStateControl: _audio_setStateControl_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n  setSmoothingTimeControl: _audio_setSmoothingTimeControl_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"]\n};\nconsole.log('===== audio module print =====');\nconsole.log(window.audio);\n\n//# sourceURL=webpack:///./src/audio.js?");

/***/ }),

/***/ "./src/audio/connect.js":
/*!******************************!*\
  !*** ./src/audio/connect.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar connect = function connect() {\n  var _ref,\n      _arguments = arguments;\n\n  var _loop = function _loop(i) {\n    var input = i < 0 || _arguments.length <= i ? undefined : _arguments[i];\n    var next = i + 1 < 0 || _arguments.length <= i + 1 ? undefined : _arguments[i + 1];\n\n    if (next.inputs != null && Array.isArray(next.inputs)) {\n      next.inputs.forEach(function (a) {\n        input.connect(a);\n      });\n    } else {\n      input.connect(next);\n    }\n  };\n\n  for (var i = 0; i < arguments.length - 1; i++) {\n    _loop(i);\n  }\n\n  return _ref = arguments.length - 1, _ref < 0 || arguments.length <= _ref ? undefined : arguments[_ref];\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (connect);\n\n//# sourceURL=webpack:///./src/audio/connect.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.js */ \"./src/audio/context.js\");\n/* harmony import */ var _create_decodeAudioData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create/decodeAudioData.js */ \"./src/audio/create/decodeAudioData.js\");\n\n\nvar create = {\n  elementSource: function elementSource(htmlElem) {\n    return _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createMediaElementSource(htmlElem);\n  },\n  bufferSource: function bufferSource(url) {\n    return _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createBufferSource();\n  },\n  decodeAudioData: _create_decodeAudioData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  // return Promise;\n  oscillator: function oscillator() {\n    return _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createOscillator();\n  },\n  gain: function gain() {\n    return _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createGain();\n  },\n  biquadFilter: function biquadFilter() {\n    return _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createBiquadFilter();\n  },\n  delay: function delay() {\n    return _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createDelay();\n  },\n  merger: function merger() {\n    return _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createChannelMerger();\n  },\n  analyser: function analyser() {\n    return _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createAnalyser();\n  },\n  analyzer: function analyzer() {\n    return _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createAnalyser();\n  },\n  mediaStreamSource: function mediaStreamSource(stream) {\n    return _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createMediaStreamSource(stream);\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (create);\n\n//# sourceURL=webpack:///./src/audio/create.js?");

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

/***/ "./src/audio/module.js":
/*!*****************************!*\
  !*** ./src/audio/module.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_delay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/delay.js */ \"./src/audio/module/delay.js\");\n/* harmony import */ var _module_pingPongDelay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/pingPongDelay.js */ \"./src/audio/module/pingPongDelay.js\");\n/* harmony import */ var _module_chorus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/chorus.js */ \"./src/audio/module/chorus.js\");\n\n\n\nvar module = {\n  delay: _module_delay_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  pingPongDelay: _module_pingPongDelay_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  chorus: _module_chorus_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (module);\n\n//# sourceURL=webpack:///./src/audio/module.js?");

/***/ }),

/***/ "./src/audio/module/chorus.js":
/*!************************************!*\
  !*** ./src/audio/module/chorus.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create.js */ \"./src/audio/create.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Module =\n/*#__PURE__*/\nfunction () {\n  function Module() {\n    _classCallCheck(this, Module);\n\n    this.lfo = _create_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].oscillator();\n    this.input = _create_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gain();\n    this.depth = _create_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gain();\n    this.delay = _create_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].delay();\n    this._mix = _create_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gain();\n    this.output = _create_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gain();\n    this.lfo.connect(this.depth).connect(this.delay.delayTime);\n    this.input.connect(this.delay).connect(this._mix);\n    this.inputs = [this.input];\n  }\n\n  _createClass(Module, [{\n    key: \"connect\",\n    value: function connect(next) {\n      this.input.connect(next);\n\n      this._mix.connect(next);\n\n      return next;\n    }\n  }, {\n    key: \"disconnect\",\n    value: function disconnect() {\n      this.input.disconnect();\n\n      this._mix.disconnect();\n    }\n  }, {\n    key: \"mix\",\n    get: function get() {\n      return this._mix.gain.value;\n    },\n    set: function set(val) {\n      this._mix.gain.value = val;\n    }\n  }]);\n\n  return Module;\n}();\n\nvar chorus = function chorus() {\n  return new Module();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (chorus);\n\n//# sourceURL=webpack:///./src/audio/module/chorus.js?");

/***/ }),

/***/ "./src/audio/module/delay.js":
/*!***********************************!*\
  !*** ./src/audio/module/delay.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create.js */ \"./src/audio/create.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Module =\n/*#__PURE__*/\nfunction () {\n  function Module() {\n    _classCallCheck(this, Module);\n\n    this.delay = _create_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].delay();\n    this.feedback = _create_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gain();\n    this.dry = _create_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gain();\n    this.wet = _create_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gain();\n    this.delay.connect(this.wet);\n    this.delay.connect(this.feedback).connect(this.delay);\n    this.wet.gain.value = 0.0;\n    this.dry.gain.value = 1.0;\n    this.inputs = [this.delay, this.dry];\n  }\n\n  _createClass(Module, [{\n    key: \"connect\",\n    value: function connect(next) {\n      this.wet.connect(next);\n      this.dry.connect(next);\n      return next;\n    }\n  }, {\n    key: \"disconnect\",\n    value: function disconnect() {\n      this.wet.disconnect();\n      this.dry.disconnect();\n    }\n  }, {\n    key: \"delayTime\",\n    get: function get() {\n      return this.delay.delayTime;\n    }\n  }, {\n    key: \"feedbackGain\",\n    get: function get() {\n      return this.feedback.gain;\n    }\n  }, {\n    key: \"mix\",\n    get: function get() {\n      return this.wet.gain.value;\n    },\n    set: function set(val) {\n      this.wet.gain.value = val;\n      this.dry.gain.value = 1.0 - val;\n    }\n  }]);\n\n  return Module;\n}();\n\nvar delay = function delay() {\n  return new Module();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (delay);\n\n//# sourceURL=webpack:///./src/audio/module/delay.js?");

/***/ }),

/***/ "./src/audio/module/pingPongDelay.js":
/*!*******************************************!*\
  !*** ./src/audio/module/pingPongDelay.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create.js */ \"./src/audio/create.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Module =\n/*#__PURE__*/\nfunction () {\n  function Module() {\n    _classCallCheck(this, Module);\n\n    this.merger = _create_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].merger();\n    this.delay1 = _create_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].delay();\n    this.delay2 = _create_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].delay();\n    this.feedback = _create_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gain();\n    this.wet = _create_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gain();\n    this.dry = _create_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gain();\n    this.delay1.connect(this.delay2).connect(this.feedback).connect(this.delay1);\n    this.delay1.connect(this.merger, 0, 0);\n    this.delay2.connect(this.merger, 0, 1);\n    this.merger.connect(this.wet);\n    this.inputs = [this.delay1, this.dry];\n  }\n\n  _createClass(Module, [{\n    key: \"connect\",\n    value: function connect(next) {\n      this.dry.connect(next);\n      this.wet.connect(next);\n      return next;\n    }\n  }, {\n    key: \"disconnect\",\n    value: function disconnect() {\n      this.dry.disconnect();\n      this.wet.disconnect();\n    }\n  }, {\n    key: \"delayTime1\",\n    get: function get() {\n      return this.delay1.delayTime;\n    }\n  }, {\n    key: \"delayTime2\",\n    get: function get() {\n      return this.delay2.delayTime;\n    }\n  }, {\n    key: \"feedbackGain\",\n    get: function get() {\n      return this.feedback.gain;\n    }\n  }, {\n    key: \"mix\",\n    get: function get() {\n      return this.wet.gain.value;\n    },\n    set: function set(val) {\n      this.wet.gain.value = val;\n      this.dry.gain.value = 1.0 - val;\n    }\n  }]);\n\n  return Module;\n}();\n\nvar pingPhongDelay = function pingPhongDelay() {\n  return new Module();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pingPhongDelay);\n\n//# sourceURL=webpack:///./src/audio/module/pingPongDelay.js?");

/***/ }),

/***/ "./src/audio/setDelayControl.js":
/*!**************************************!*\
  !*** ./src/audio/setDelayControl.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar setDelayControl = function setDelayControl(delay, input, valHtml) {\n  var fix = 5;\n\n  if (input.step != null && input.step < 1.0) {\n    fix = 0;\n    var step = input.step;\n\n    while (step < 1.0) {\n      fix++;\n      step *= 10;\n    }\n  }\n\n  if (valHtml != null) {\n    var setValue = valHtml.tagName === 'INPUT' ? function () {\n      valHtml.value = Number(delay.delayTime.value).toFixed(fix);\n    } : function () {\n      valHtml.innerHTML = Number(delay.delayTime.value).toFixed(fix);\n    };\n    delay.delayTime.value = Number(input.value);\n    setValue();\n    input.addEventListener('change', function () {\n      delay.delayTime.value = Number(input.value);\n      setValue();\n    });\n  } else {\n    delay.delayTime.value = Number(input.value);\n    input.addEventListener('change', function () {\n      delay.delayTime.value = Number(input.value);\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setDelayControl);\n\n//# sourceURL=webpack:///./src/audio/setDelayControl.js?");

/***/ }),

/***/ "./src/audio/setDetuneControl.js":
/*!***************************************!*\
  !*** ./src/audio/setDetuneControl.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar setDetuneControl = function setDetuneControl(audioNode, input, valHtml) {\n  var setValue = valHtml.tagName === 'INPUT' ? function () {\n    valHtml.value = audioNode.detune.value;\n  } : function () {\n    valHtml.innerHTML = audioNode.detune.value;\n  };\n  audioNode.detune.value = input.value;\n  setValue();\n  input.addEventListener('change', function () {\n    audioNode.detune.value = Number(input.value);\n    setValue();\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setDetuneControl);\n\n//# sourceURL=webpack:///./src/audio/setDetuneControl.js?");

/***/ }),

/***/ "./src/audio/setFeedbackControl.js":
/*!*****************************************!*\
  !*** ./src/audio/setFeedbackControl.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar setFeedbackControl = function setFeedbackControl(module, input, valHtml) {\n  var fix = 3;\n\n  if (input.step != null && input.step < 1.0) {\n    fix = 0;\n    var step = input.step;\n\n    while (step < 1.0) {\n      fix++;\n      step *= 10;\n    }\n  }\n\n  if (valHtml != null) {\n    var setValue = valHtml.tagName === 'INPUT' ? function () {\n      valHtml.value = Number(module.feedbackGain.value).toFixed(fix);\n    } : function () {\n      valHtml.innerHTML = Number(module.feedbackGain.value).toFixed(fix);\n    };\n    module.feedbackGain.value = input.value;\n    setValue();\n    input.addEventListener('change', function () {\n      module.feedbackGain.value = Number(input.value);\n      setValue();\n    });\n  } else {\n    module.feedbackGain.value = input.value;\n    input.addEventListener('change', function () {\n      module.feedbackGain.value = Number(input.value);\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setFeedbackControl);\n\n//# sourceURL=webpack:///./src/audio/setFeedbackControl.js?");

/***/ }),

/***/ "./src/audio/setFilterOption.js":
/*!**************************************!*\
  !*** ./src/audio/setFilterOption.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar list = [{\n  name: 'lowpass',\n  ja: 'ローパス'\n}, {\n  name: 'highpass',\n  ja: 'ハイパス'\n}, {\n  name: 'bandpass',\n  ja: 'バンドパス'\n}, {\n  name: 'lowshelf',\n  ja: 'ローシェルフ'\n}, {\n  name: 'highshelf',\n  ja: 'ハイシェルフ'\n}, {\n  name: 'peaking',\n  ja: 'ピーキング'\n}, {\n  name: 'notch',\n  ja: 'ノッチ'\n}, {\n  name: 'allpass',\n  ja: 'オールパス'\n}];\n\nvar setFilterOption = function setFilterOption(filter, select) {\n  var ja = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n\n  for (var _i = 0, _list = list; _i < _list.length; _i++) {\n    var a = _list[_i];\n\n    var _option = document.createElement('option');\n\n    _option.value = a.name;\n    _option.innerHTML = ja ? a.ja : a.name;\n    select.appendChild(_option);\n  }\n\n  var option = _toConsumableArray(select.children).filter(function (a) {\n    return a.value === filter.type;\n  })[0];\n\n  if (option != null) option.selected = true;\n  select.addEventListener('change', function () {\n    var option = select[select.selectedIndex];\n    filter.type = option.value;\n    console.log('===== set filter type ', filter.type, '=====');\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setFilterOption);\n\n//# sourceURL=webpack:///./src/audio/setFilterOption.js?");

/***/ }),

/***/ "./src/audio/setFreqControl.js":
/*!*************************************!*\
  !*** ./src/audio/setFreqControl.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar setFreqControl = function setFreqControl(audioNode, input, valHtml) {\n  var setValue = valHtml.tagName === 'INPUT' ? function () {\n    valHtml.value = audioNode.frequency.value;\n  } : function () {\n    valHtml.innerHTML = audioNode.frequency.value;\n  };\n  audioNode.frequency.value = input.value;\n  setValue();\n  input.addEventListener('change', function () {\n    audioNode.frequency.value = Number(input.value);\n    setValue();\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setFreqControl);\n\n//# sourceURL=webpack:///./src/audio/setFreqControl.js?");

/***/ }),

/***/ "./src/audio/setGainControl.js":
/*!*************************************!*\
  !*** ./src/audio/setGainControl.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar setGainControl = function setGainControl(gain, input, valHtml) {\n  var fix = 3;\n\n  if (input.step != null && Number(input.step) < 1.0) {\n    fix = 0;\n    var step = input.step;\n\n    while (step < 1.0) {\n      fix++;\n      step *= 10;\n    }\n  }\n\n  if (valHtml != null) {\n    var setValue = valHtml.tagName === 'INPUT' ? function () {\n      valHtml.value = Number(gain.gain.value).toFixed(fix);\n    } : function () {\n      valHtml.innerHTML = Number(gain.gain.value).toFixed(fix);\n    };\n    gain.gain.value = Number(input.value);\n    setValue();\n    input.addEventListener('change', function () {\n      gain.gain.value = Number(input.value);\n      setValue();\n    });\n  } else {\n    gain.gain.value = input.value;\n    input.addEventListener('change', function () {\n      gain.gain.value = Number(input.value);\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setGainControl);\n\n//# sourceURL=webpack:///./src/audio/setGainControl.js?");

/***/ }),

/***/ "./src/audio/setMixControl.js":
/*!************************************!*\
  !*** ./src/audio/setMixControl.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar setMixControl = function setMixControl(module, input, valHtml) {\n  var fix = 3;\n\n  if (input.step != null && input.step < 1.0) {\n    fix = 0;\n    var step = input.step;\n\n    while (step < 1.0) {\n      fix++;\n      step *= 10;\n    }\n  }\n\n  if (valHtml != null) {\n    var setValue = valHtml.tagName === 'INPUT' ? function () {\n      valHtml.value = Number(module.mix).toFixed(fix);\n    } : function () {\n      valHtml.innerHTML = Number(module.mix).toFixed(fix);\n    };\n    module.mix = input.value;\n    setValue();\n    input.addEventListener('change', function () {\n      module.mix = Number(input.value);\n      setValue();\n    });\n  } else {\n    module.mix = input.value;\n    input.addEventListener('change', function () {\n      module.mix = Number(input.value);\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setMixControl);\n\n//# sourceURL=webpack:///./src/audio/setMixControl.js?");

/***/ }),

/***/ "./src/audio/setQvalControl.js":
/*!*************************************!*\
  !*** ./src/audio/setQvalControl.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar setQvalControl = function setQvalControl(filter, input, valHtml) {\n  var fix = 3;\n\n  if (input.step != null && Number(input.step) < 1.0) {\n    fix = 0;\n    var step = input.step;\n\n    while (step < 1.0) {\n      fix++;\n      step *= 10;\n    }\n  }\n\n  if (valHtml != null) {\n    var setValue = valHtml.tagName === 'INPUT' ? function () {\n      valHtml.value = Number(filter.Q.value).toFixed(fix);\n    } : function () {\n      valHtml.innerHTML = Number(filter.Q.value).toFixed(fix);\n    };\n    filter.Q.value = input.value;\n    setValue();\n    input.addEventListener('change', function () {\n      filter.Q.value = Number(input.value);\n      setValue();\n    });\n  } else {\n    filter.Q.value = input.value;\n    input.addEventListener('change', function () {\n      filter.Q.value = Number(input.value);\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setQvalControl);\n\n//# sourceURL=webpack:///./src/audio/setQvalControl.js?");

/***/ }),

/***/ "./src/audio/setSmoothingTimeControl.js":
/*!**********************************************!*\
  !*** ./src/audio/setSmoothingTimeControl.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar setSmoothingTimeControl = function setSmoothingTimeControl(analyzer, input, valHtml) {\n  var setValue = valHtml.tagName === 'INPUT' ? function () {\n    valHtml.value = analyzer.smoothingTimeConstant;\n  } : function () {\n    valHtml.innerHTML = analyzer.smoothingTimeConstant;\n  };\n  analyzer.snoothingTimeConstant = Number(input.value);\n  setValue();\n  input.addEventListener('change', function () {\n    analyzer.smoothingTimeConstant = Number(input.value);\n    setValue();\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setSmoothingTimeControl);\n\n//# sourceURL=webpack:///./src/audio/setSmoothingTimeControl.js?");

/***/ }),

/***/ "./src/audio/setStateControl.js":
/*!**************************************!*\
  !*** ./src/audio/setStateControl.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.js */ \"./src/audio/context.js\");\n\n\nvar setStateControl = function setStateControl(button) {\n  var set = function set() {\n    button.innerHTML = _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state;\n  };\n\n  _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addEventListener('statechange', set);\n  button.addEventListener('click', function () {\n    console.log('state change  befor ', _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state);\n    if (_context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state === 'running') _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].suspend();\n    if (_context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state === 'suspended') _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].resume();\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setStateControl);\n\n//# sourceURL=webpack:///./src/audio/setStateControl.js?");

/***/ }),

/***/ "./src/audio/viewer.js":
/*!*****************************!*\
  !*** ./src/audio/viewer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _viewer_baseLatency_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewer/baseLatency.js */ \"./src/audio/viewer/baseLatency.js\");\n/* harmony import */ var _viewer_outputLatency_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewer/outputLatency.js */ \"./src/audio/viewer/outputLatency.js\");\n/* harmony import */ var _viewer_currentTime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewer/currentTime.js */ \"./src/audio/viewer/currentTime.js\");\n/* harmony import */ var _viewer_state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewer/state.js */ \"./src/audio/viewer/state.js\");\n/* harmony import */ var _viewer_analyzer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewer/analyzer.js */ \"./src/audio/viewer/analyzer.js\");\n\n\n\n\n\nvar viewer = {\n  baseLatency: _viewer_baseLatency_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  outputLatency: _viewer_outputLatency_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  currentTime: _viewer_currentTime_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  state: _viewer_state_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  analyzer: _viewer_analyzer_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (viewer);\n\n//# sourceURL=webpack:///./src/audio/viewer.js?");

/***/ }),

/***/ "./src/audio/viewer/analyzer.js":
/*!**************************************!*\
  !*** ./src/audio/viewer/analyzer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context.js */ \"./src/audio/context.js\");\n\n\nvar analyzer = function analyzer(node, graWave, graFreq) {\n  var preiod = 1.0 / _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sampleRate;\n  var freqDivN = _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sampleRate / node.fftSize;\n\n  if (graWave != null) {\n    graWave.setXTitle('時間 [s]');\n    graWave.setYLabel(0.5);\n    graWave.setXLabel(0.01);\n  }\n\n  if (graFreq != null) {\n    graFreq.setXTitle('周波数 [Hz]');\n    graFreq.setYLabel(25);\n    graFreq.setXLabel(4000);\n  }\n\n  var draw = function draw() {\n    var waveForm = new Float32Array(node.fftSize);\n    var freqForm = new Float32Array(node.frequencyBinCount);\n    var timeArray = new Float32Array(node.fftSize);\n\n    for (var i = 0; i < timeArray.length; i++) {\n      timeArray[i] = i * preiod;\n    }\n\n    var freqArray = new Float32Array(node.frequencyBinCount);\n\n    for (var _i = 0; _i < timeArray.length; _i++) {\n      freqArray[_i] = _i * freqDivN;\n    }\n\n    node.getFloatFrequencyData(freqForm);\n    node.getFloatTimeDomainData(waveForm);\n    if (graWave != null) graWave.draw(timeArray, waveForm);\n    if (graFreq != null) graFreq.draw(freqArray, freqForm);\n    window.requestAnimationFrame(draw);\n  };\n\n  window.requestAnimationFrame(draw);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (analyzer);\n\n//# sourceURL=webpack:///./src/audio/viewer/analyzer.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context.js */ \"./src/audio/context.js\");\n\n\nvar currentTime = function currentTime(html) {\n  if (_context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentTime == null) html.innerHTML = '未実装';else {\n    var fix = 1;\n\n    if (html.tagName === 'INPUT') {\n      var set = function set() {\n        html.value = _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentTime.toFixed(fix);\n        window.requestAnimationFrame(set);\n      };\n\n      window.requestAnimationFrame(set);\n    } else {\n      var _set = function _set() {\n        html.innerHTML = _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentTime.toFixed(fix);\n        window.requestAnimationFrame(_set);\n      };\n\n      window.requestAnimationFrame(_set);\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (currentTime);\n\n//# sourceURL=webpack:///./src/audio/viewer/currentTime.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context.js */ \"./src/audio/context.js\");\n\n\nvar state = function state(html) {\n  if (_context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state == null) html.innerHTML = '未実装';else {\n    if (html.tagName === 'INPUT') {\n      var set = function set() {\n        html.value = _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state;\n        window.requestAnimationFrame(set);\n      };\n\n      window.requestAnimationFrame(set);\n    } else {\n      var _set = function _set() {\n        html.innerHTML = _context_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state;\n        window.requestAnimationFrame(_set);\n      };\n\n      window.requestAnimationFrame(_set);\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (state);\n\n//# sourceURL=webpack:///./src/audio/viewer/state.js?");

/***/ })

/******/ });