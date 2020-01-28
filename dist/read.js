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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/read.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/read.js":
/*!*********************!*\
  !*** ./src/read.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _read_riff_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./read/riff.js */ \"./src/read/riff.js\");\n/* harmony import */ var _read_sf2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./read/sf2.js */ \"./src/read/sf2.js\");\n\n\nvar read = {\n  riff: _read_riff_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  sf2: function sf2(filepath) {\n    return Object(_read_sf2_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_read_riff_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(filepath));\n  }\n};\nwindow.read = window.read || read;\nif (window.read === read) console.log('>>>>> read Module Loaded <<<<<');\n\n//# sourceURL=webpack:///./src/read.js?");

/***/ }),

/***/ "./src/read/riff.js":
/*!**************************!*\
  !*** ./src/read/riff.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar riff = function riff(url) {\n  return fetch(url).then(function (response) {\n    return response.arrayBuffer();\n  }).then(function (arrayBuffer) {\n    var array = new Uint8Array(arrayBuffer);\n    if (String.fromCharCode.apply(\"\", array.subarray(0, 4)) !== \"RIFF\") throw new Error(file_path + \"はRIFFファイルではありません\");\n    if (get_size(array.subarray(4, 8)) !== array.length - 8) throw new Error(file_path + \"ファイルサイズが一致しません \" + size + \"  \" + array.length);\n    console.log('Read RIFF :', url);\n    console.log('     SIZE :', get_size(array.subarray(4, 8)));\n    return riff_data(array);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (riff);\n\nfunction get_size(array) {\n  return new Uint32Array(new Uint8Array(array).buffer)[0];\n}\n\n;\n\nfunction riff_data(array) {\n  var id = String.fromCharCode.apply(\"\", array.subarray(0, 4));\n  var size = get_size(array.subarray(4, 8));\n\n  if (id === \"RIFF\" || id === \"LIST\") {\n    var pos = 12;\n    var type = String.fromCharCode.apply(\"\", array.subarray(8, 12));\n    var data = [];\n\n    while (pos < size + 8) {\n      var child = riff_data(array.subarray(pos, array.length)); // 再帰\n\n      data.push(child);\n      pos += 8 + child.size;\n    }\n\n    var sum = 0;\n\n    for (var _i = 0, _data = data; _i < _data.length; _i++) {\n      var d = _data[_i];\n      sum += d.size;\n    }\n\n    sum += 8 * data.length + 4;\n    if (sum !== size) throw new Error(type + \"チャンクのファイルサイズが一致しません \" + size + \"  \" + sum);\n    return {\n      type: type,\n      size: size,\n      data: data\n    };\n  } else return {\n    type: id,\n    size: size,\n    data: array.subarray(8, 8 + size)\n  };\n}\n\n//# sourceURL=webpack:///./src/read/riff.js?");

/***/ }),

/***/ "./src/read/sf2.js":
/*!*************************!*\
  !*** ./src/read/sf2.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sf2_readInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sf2/readInfo.js */ \"./src/read/sf2/readInfo.js\");\n/* harmony import */ var _sf2_makeSample_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sf2/makeSample.js */ \"./src/read/sf2/makeSample.js\");\n/* harmony import */ var _sf2_parseInstHeader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sf2/parseInstHeader.js */ \"./src/read/sf2/parseInstHeader.js\");\n/* harmony import */ var _sf2_parseGenMod_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sf2/parseGenMod.js */ \"./src/read/sf2/parseGenMod.js\");\n/* harmony import */ var _sf2_parsePresetHeader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sf2/parsePresetHeader.js */ \"./src/read/sf2/parsePresetHeader.js\");\n/* harmony import */ var _sf2_parsePreset_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sf2/parsePreset.js */ \"./src/read/sf2/parsePreset.js\");\n/* harmony import */ var _sf2_parseInst_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sf2/parseInst.js */ \"./src/read/sf2/parseInst.js\");\n/* harmony import */ var _sf2_SoundFont_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sf2/SoundFont.js */ \"./src/read/sf2/SoundFont.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\nvar sf2 = function sf2(promise) {\n  return promise.then(function (data) {\n    var _check$data = _slicedToArray(check(data).data, 3),\n        infoChunk = _check$data[0],\n        sampleChunk = _check$data[1],\n        presetChunk = _check$data[2];\n\n    var _presetChunk$data = _slicedToArray(presetChunk.data, 9),\n        presetHeader = _presetChunk$data[0],\n        presetBag = _presetChunk$data[1],\n        presetModulator = _presetChunk$data[2],\n        presetGenerator = _presetChunk$data[3],\n        instHeader = _presetChunk$data[4],\n        instBag = _presetChunk$data[5],\n        instModulator = _presetChunk$data[6],\n        instGenerator = _presetChunk$data[7],\n        sampleHeader = _presetChunk$data[8];\n\n    var infoData = Object(_sf2_readInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(infoChunk);\n    var samples = Object(_sf2_makeSample_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(sampleHeader, sampleChunk);\n    var instList = Object(_sf2_parseInstHeader_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(instHeader, instBag);\n    instList.forEach(function (a) {\n      return Object(_sf2_parseGenMod_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(a.zones, instGenerator, instModulator);\n    });\n    var presetList = Object(_sf2_parsePresetHeader_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(presetHeader, presetBag);\n    presetList.forEach(function (a) {\n      return Object(_sf2_parseGenMod_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(a.zones, presetGenerator, presetModulator);\n    });\n    var insts = instList.map(function (a) {\n      return Object(_sf2_parseInst_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(a, samples);\n    });\n    var presets = presetList.map(function (a) {\n      return Object(_sf2_parsePreset_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(a, insts);\n    });\n    return new _sf2_SoundFont_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"](infoData, presets);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sf2);\n\nfunction check(data) {\n  if (data.type !== 'sfbk') throw new Error('Sound Fontファイルではありません');\n  if (data.data.length !== 3) throw new Error('Sound Fontファイル形式が不正です');\n  if (data.data[0].type !== 'INFO') throw new Error('Sound Fontの1つ目のチャンクはINFOであるべきです');\n  if (data.data[1].type !== 'sdta') throw new Error('Sound Fontの2つ目のチャンクはsdtaであるべきです');\n  if (data.data[2].type !== 'pdta') throw new Error('Sound Fontの3つ目のチャンクはpdtaであるべきです');\n  if (data.data[1].data[0].type !== 'smpl') throw new Error('sdtaチャンクの１つ目はsmplであるべきです');\n  if (data.data[1].data[1] && data.data[1].data[1].type !== 'sm24') throw new Error('sdtaチャンクのふたつ目のチャンクがsm24ではありません');\n  if (data.data[2].data[0].type !== \"phdr\") throw new Error('pdtaのひとつ目のチャンクはphdrであるべきです');\n  if (data.data[2].data[1].type !== \"pbag\") throw new Error('pdtaのひとつ目のチャンクはpbagであるべきです');\n  if (data.data[2].data[2].type !== \"pmod\") throw new Error('pdtaのひとつ目のチャンクはpmodであるべきです');\n  if (data.data[2].data[3].type !== \"pgen\") throw new Error('pdtaのひとつ目のチャンクはpgenであるべきです');\n  if (data.data[2].data[4].type !== \"inst\") throw new Error('pdtaのひとつ目のチャンクはinstであるべきです');\n  if (data.data[2].data[5].type !== \"ibag\") throw new Error('pdtaのひとつ目のチャンクはibagであるべきです');\n  if (data.data[2].data[6].type !== \"imod\") throw new Error('pdtaのひとつ目のチャンクはimodであるべきです');\n  if (data.data[2].data[7].type !== \"igen\") throw new Error('pdtaのひとつ目のチャンクはigenであるべきです');\n  if (data.data[2].data[8].type !== \"shdr\") throw new Error('pdtaのひとつ目のチャンクはshdrであるべきです');\n  return data;\n}\n\n;\n\n//# sourceURL=webpack:///./src/read/sf2.js?");

/***/ }),

/***/ "./src/read/sf2/Inst.js":
/*!******************************!*\
  !*** ./src/read/sf2/Inst.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Inst =\n/*#__PURE__*/\nfunction () {\n  function Inst(name, globalZone, zones) {\n    _classCallCheck(this, Inst);\n\n    this._name = name;\n    this._globalZone = globalZone;\n    this._zones = zones;\n  }\n\n  _createClass(Inst, [{\n    key: \"name\",\n    get: function get() {\n      return this._name;\n    }\n  }]);\n\n  return Inst;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Inst);\n\n//# sourceURL=webpack:///./src/read/sf2/Inst.js?");

/***/ }),

/***/ "./src/read/sf2/Preset.js":
/*!********************************!*\
  !*** ./src/read/sf2/Preset.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Preset =\n/*#__PURE__*/\nfunction () {\n  function Preset(name, MIDINumber, bankID, globalZone, zones, library, generator, morphology) {\n    _classCallCheck(this, Preset);\n\n    this._name = name;\n    this._MIDINumber = MIDINumber;\n    this._bankID = bankID;\n    this._globalZone = globalZone;\n    this._zones = zones;\n    this._library = library;\n    this._generator = generator;\n    this._morphology = morphology;\n  }\n\n  _createClass(Preset, [{\n    key: \"name\",\n    get: function get() {\n      return this._name;\n    }\n  }, {\n    key: \"MIDINumber\",\n    get: function get() {\n      return this._MIDINumber;\n    }\n  }, {\n    key: \"bankID\",\n    get: function get() {\n      return this._bankID;\n    }\n  }, {\n    key: \"library\",\n    get: function get() {\n      return this._library;\n    }\n  }, {\n    key: \"generator\",\n    get: function get() {\n      return this._generator;\n    }\n  }, {\n    key: \"morphology\",\n    get: function get() {\n      return this._morphology;\n    }\n  }]);\n\n  return Preset;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Preset);\n\n//# sourceURL=webpack:///./src/read/sf2/Preset.js?");

/***/ }),

/***/ "./src/read/sf2/Sample.js":
/*!********************************!*\
  !*** ./src/read/sf2/Sample.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Sample_print_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sample/print.js */ \"./src/read/sf2/Sample/print.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Sample =\n/*#__PURE__*/\nfunction () {\n  function Sample(name, data, loopStart, loopEnd, samplingRate, originPitch, correction, link, type) {\n    _classCallCheck(this, Sample);\n\n    this._name = name;\n    this._data = data;\n    this._loopStart = loopStart;\n    this._loopEnd = loopEnd;\n    this._samplingRate = samplingRate;\n    this._originPitch = originPitch;\n    this._correction = correction;\n    this._link = link;\n    this._type = type;\n  }\n\n  _createClass(Sample, [{\n    key: \"print\",\n    value: function print() {\n      Object(_Sample_print_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this);\n    }\n  }, {\n    key: \"name\",\n    get: function get() {\n      return this._name;\n    }\n  }, {\n    key: \"data\",\n    get: function get() {\n      return this._data;\n    }\n  }, {\n    key: \"loopStart\",\n    get: function get() {\n      return this._loopStart;\n    }\n  }, {\n    key: \"loopEnd\",\n    get: function get() {\n      return this._loopEnd;\n    }\n  }, {\n    key: \"samplingRate\",\n    get: function get() {\n      return this._samplingRate;\n    }\n  }, {\n    key: \"originPitch\",\n    get: function get() {\n      return this._originPitch;\n    }\n  }, {\n    key: \"correction\",\n    get: function get() {\n      return this._correction;\n    }\n  }, {\n    key: \"link\",\n    get: function get() {\n      return this._link;\n    }\n  }, {\n    key: \"type\",\n    get: function get() {\n      return this._type;\n    }\n  }]);\n\n  return Sample;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sample);\n\n//# sourceURL=webpack:///./src/read/sf2/Sample.js?");

/***/ }),

/***/ "./src/read/sf2/Sample/print.js":
/*!**************************************!*\
  !*** ./src/read/sf2/Sample/print.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar print = function print(sample) {\n  var str = '===== SF2::Sample Print =====\\n';\n  str += 'Name : ' + sample.name + '\\n';\n  str += 'Data.length : ' + sample.data.length;\n  str += ' ( Loop [' + sample.loopStart + ': ' + sample.loopEnd + ' ] )\\n';\n  str += 'Sampling Rate : ' + sample.samplingRate + '\\n';\n  str += 'Origin Pitch  : ' + sample.originPitch + '\\n';\n  str += 'Correction    : ' + sample.correction + '\\n';\n  str += '      link    : ' + sample.link + '\\n';\n  str += '      type    : ' + sample.type + '\\n';\n  console.log(str);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (print);\n\n//# sourceURL=webpack:///./src/read/sf2/Sample/print.js?");

/***/ }),

/***/ "./src/read/sf2/SoundFont.js":
/*!***********************************!*\
  !*** ./src/read/sf2/SoundFont.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar SoundFont =\n/*#__PURE__*/\nfunction () {\n  function SoundFont(info, presets) {\n    _classCallCheck(this, SoundFont);\n\n    this._info = info;\n    this._presets = presets.sort(function (a, b) {\n      if (a.bankID < b.bankID) return -1;\n      if (a.bankID > b.bankID) return 1;\n      if (a.MIDINumber < b.MIDINumber) return -1;\n      if (a.MIDINumber > b.MIDINumber) return 1;\n      return 0;\n    });\n  }\n\n  _createClass(SoundFont, [{\n    key: \"name\",\n    get: function get() {\n      return this._info.name;\n    }\n  }, {\n    key: \"version\",\n    get: function get() {\n      return this._info.sf_version;\n    }\n  }, {\n    key: \"engin\",\n    get: function get() {\n      return this._info.sound_engin;\n    }\n  }, {\n    key: \"date\",\n    get: function get() {\n      return this._info.date;\n    }\n  }, {\n    key: \"copyright\",\n    get: function get() {\n      return this._info.copy_right;\n    }\n  }, {\n    key: \"presets\",\n    get: function get() {\n      return this._presets;\n    }\n  }]);\n\n  return SoundFont;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SoundFont);\n\n//# sourceURL=webpack:///./src/read/sf2/SoundFont.js?");

/***/ }),

/***/ "./src/read/sf2/generatorNameList.js":
/*!*******************************************!*\
  !*** ./src/read/sf2/generatorNameList.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar generatorNameList = [\"start_addrs_offset\", \"end_addrs_offset\", \"start_loop_addrs_offset\", \"end_loop_addrs_offset\", \"start_addrs_coarse\", \"mod_flo_to_pitch\", \"viv_flo_to_pitch\", \"vib_env_to_pitch\", \"init_filter_Fc\", \"init_filter_Q\", \"mod_flo_to_filter_Fc\", // [10]\n\"mod_env_to_filter_Fc\", \"end_addrs_coarse_offset\", \"mod_flo_to_volume\", \"unused1\", // reserved\n\"chouse_effect_send\", \"reverb_effect_send\", \"pan\", \"unused2\", // reserved\n\"unused3\", // reserved\n\"unused4\", // reserved [20]\n\"decay_mod_flo\", \"freq_mod_flo\", \"delay_vib_flo\", \"freq_viv_flo\", \"delay_mod_env\", \"attack_mod_env\", \"hold_mod_env\", \"decay_mod_env\", \"sustain_mod_env\", \"release_mod_env\", // [30]\n\"keynum_to_mod_env_hold\", \"keynum_to_mod_env_decay\", \"delay_vol_env\", \"attack_vol_env\", \"hold_vol_env\", \"decay_vol_env\", \"sustain_vol_env\", \"release_vol_env\", \"keynum_to_vol_env_hold\", \"keynum_to_vol_env_decay\", // [40] \n\"instrument\", \"reserved1\", // reserved\n\"key_range\", \"vel_range\", \"start_loop_addrs_coarse_offset\", \"keynum\", \"velocity\", \"init_attenuation\", \"reserved2\", // reserved\n\"end_loop_addrs_coarse_offset\", // [50]\n\"coarse_tune\", \"fine_tune\", \"sample_id\", \"sample_modes\", \"reserved3\", // reserved\n\"scale_tuning\", \"exclusive_class\", \"overriding_root_key\", \"unused5\", // reserved\n\"end_oper\" // [60]\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (generatorNameList);\n\n//# sourceURL=webpack:///./src/read/sf2/generatorNameList.js?");

/***/ }),

/***/ "./src/read/sf2/getDoubleWord.js":
/*!***************************************!*\
  !*** ./src/read/sf2/getDoubleWord.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar p = [1, Math.pow(256, 1), Math.pow(256, 2), Math.pow(256, 3)];\n\nvar getDoubleWord = function getDoubleWord(array, index) {\n  return p[0] * array[index] + p[1] * array[index + 1] + p[2] * array[index + 2] + p[3] * array[index + 3];\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getDoubleWord);\n\n//# sourceURL=webpack:///./src/read/sf2/getDoubleWord.js?");

/***/ }),

/***/ "./src/read/sf2/getShort.js":
/*!**********************************!*\
  !*** ./src/read/sf2/getShort.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar getShort = function getShort(array, index) {\n  return new Int16Array(array.subarray(index, index + 1).buffer)[0];\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getShort);\n\n//# sourceURL=webpack:///./src/read/sf2/getShort.js?");

/***/ }),

/***/ "./src/read/sf2/getString.js":
/*!***********************************!*\
  !*** ./src/read/sf2/getString.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar getString = function getString(array, first, last) {\n  return String.fromCharCode.apply('', array.subarray(first, last).filter(function (a) {\n    return a !== 0;\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getString);\n\n//# sourceURL=webpack:///./src/read/sf2/getString.js?");

/***/ }),

/***/ "./src/read/sf2/getWord.js":
/*!*********************************!*\
  !*** ./src/read/sf2/getWord.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar getWord = function getWord(array, index) {\n  return array[index] + 256 * array[index + 1];\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getWord);\n\n//# sourceURL=webpack:///./src/read/sf2/getWord.js?");

/***/ }),

/***/ "./src/read/sf2/makeSample.js":
/*!************************************!*\
  !*** ./src/read/sf2/makeSample.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getString.js */ \"./src/read/sf2/getString.js\");\n/* harmony import */ var _getDoubleWord_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDoubleWord.js */ \"./src/read/sf2/getDoubleWord.js\");\n/* harmony import */ var _getWord_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWord.js */ \"./src/read/sf2/getWord.js\");\n/* harmony import */ var _Sample_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sample.js */ \"./src/read/sf2/Sample.js\");\n\n\n\n\n\nvar makeSample = function makeSample(header, data) {\n  var samples = [];\n\n  for (var i = 0; i < header.data.length; i += 46) {\n    var name = Object(_getString_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(header.data, i, i + 20);\n    if (name === 'EOS') continue;\n    var start = Object(_getDoubleWord_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(header.data, i + 20);\n    var end = Object(_getDoubleWord_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(header.data, i + 24);\n    var sampleData = getSampleData(data, start, end);\n    var loopStart = Object(_getDoubleWord_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(header.data, i + 28) - start;\n    var loopEnd = Object(_getDoubleWord_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(header.data, i + 32) - start;\n    var samplingRate = Object(_getDoubleWord_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(header.data, i + 36);\n    var originPitch = header.data[i + 40];\n    var correction = header.data[i + 41];\n    var link = Object(_getWord_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(header.data, i + 42);\n    var type = Object(_getWord_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(header.data, i + 44);\n    samples.push(new _Sample_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](name, sampleData, loopStart, loopEnd, samplingRate, originPitch, correction, link, type));\n  }\n\n  return samples;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (makeSample);\n\nfunction getSampleData(sampleData, start, end) {\n  var smpl = sampleData.data[0];\n  var sm24 = sampleData.data[1];\n  var int_data = new Int16Array(new Uint8Array(smpl.data.subarray(2 * start, 2 * end)).buffer);\n  var data = new Float32Array(int_data.length);\n\n  if (sm24 != null) {\n    var int_sm24 = new Int8Array(new Uint8Array(sm24.data.subarray(start, end)).buffer);\n\n    for (var i = 0; i < int_data.length; i++) {\n      data[i] = (256 * int_data[i] + int_sm24[i]) / (32767. * 256.);\n    } // Max of int16_t*uint8_t              \n\n  } else for (var _i = 0; _i < int_data.length; _i++) {\n    data[_i] = int_data[_i] / 32767.;\n  } // Max of int16_t                                              \n\n\n  return data;\n}\n\n;\n\n//# sourceURL=webpack:///./src/read/sf2/makeSample.js?");

/***/ }),

/***/ "./src/read/sf2/parseGenMod.js":
/*!*************************************!*\
  !*** ./src/read/sf2/parseGenMod.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parseGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseGenerator.js */ \"./src/read/sf2/parseGenerator.js\");\n/* harmony import */ var _parseModulator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseModulator.js */ \"./src/read/sf2/parseModulator.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar parseGenMod = function parseGenMod(zones, genChunk, modChunk) {\n  for (var i = 0; i < zones.length; i++) {\n    zones[i].generators = {};\n    zones[i].modulators = [];\n\n    for (var j = zones[i].genStart; j < zones[i].genEnd; j++) {\n      var _parseGenerator = Object(_parseGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(genChunk.data, j),\n          _parseGenerator2 = _slicedToArray(_parseGenerator, 2),\n          key = _parseGenerator2[0],\n          value = _parseGenerator2[1];\n\n      if (zones[i].generators[key] != null) throw new Error('!!!!! SF2 Zone has same generator data ' + key + ' !!!!!');\n      zones[i].generators[key] = value;\n    }\n\n    for (var _j = zones[i].modStart; _j < zones[i].modEnd; _j++) {\n      zones[i].modulators.push(Object(_parseModulator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(modChunk.data, _j));\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (parseGenMod);\n\n//# sourceURL=webpack:///./src/read/sf2/parseGenMod.js?");

/***/ }),

/***/ "./src/read/sf2/parseGenerator.js":
/*!****************************************!*\
  !*** ./src/read/sf2/parseGenerator.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getString.js */ \"./src/read/sf2/getString.js\");\n/* harmony import */ var _getDoubleWord_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDoubleWord.js */ \"./src/read/sf2/getDoubleWord.js\");\n/* harmony import */ var _getWord_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWord.js */ \"./src/read/sf2/getWord.js\");\n/* harmony import */ var _generatorNameList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generatorNameList.js */ \"./src/read/sf2/generatorNameList.js\");\n\n\n\n\n\nvar parseGenerator = function parseGenerator(data, offset) {\n  offset *= 4;\n  var id = Object(_getWord_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data, offset);\n  if (id < 0 || _generatorNameList_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].length < id) throw new Error('!!!!! SoundFont2 Invaild Generator ID = ' + id + '!!!!!');\n  var name = _generatorNameList_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"][id];\n  if (name === 'vel_range' || name === 'key_range') return [name, [data[offset + 2], data[offset + 3]]];else return [name, Object(_getWord_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data, offset + 2)];\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (parseGenerator);\n\n//# sourceURL=webpack:///./src/read/sf2/parseGenerator.js?");

/***/ }),

/***/ "./src/read/sf2/parseInst.js":
/*!***********************************!*\
  !*** ./src/read/sf2/parseInst.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Inst_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Inst.js */ \"./src/read/sf2/Inst.js\");\n\n\nvar parseInst = function parseInst(instHeader, sampleList) {\n  instHeader.zones.forEach(function (a) {\n    delete a.genStart;\n    delete a.genEnd;\n    delete a.modStart;\n    delete a.modEnd;\n  });\n  var globalZone;\n  if (instHeader.zones[0].generators.sample_id == null) globalZone = instHeader.zones[0];\n  var zones = [];\n\n  for (var i = 0; i < instHeader.zones.length; i++) {\n    if (instHeader.zones[i].generators.sample_id == null && i === 0 && globalZone != null) continue;\n    if (instHeader.zones[i].generators.sample_id == null && i !== 0 && globalZone == null) throw new Error('!!!!! Inst[' + instHeader.name + '] zone not found instrument !!!!!');\n    if (instHeader.zones[i].generators.sample_id == null) throw new Error('!!!!! Inst[' + instHeader.name + '] zone not found instrument !!!!!');\n    delete instHeader.zones[i].generators.sample_id;\n    instHeader.zones[i].generators.sample = sampleList[i];\n    zones.push(instHeader.zones[i]);\n  }\n\n  return new _Inst_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](instHeader.name, globalZone, instHeader.zones);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (parseInst);\n\n//# sourceURL=webpack:///./src/read/sf2/parseInst.js?");

/***/ }),

/***/ "./src/read/sf2/parseInstHeader.js":
/*!*****************************************!*\
  !*** ./src/read/sf2/parseInstHeader.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getString.js */ \"./src/read/sf2/getString.js\");\n/* harmony import */ var _getDoubleWord_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDoubleWord.js */ \"./src/read/sf2/getDoubleWord.js\");\n/* harmony import */ var _getWord_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWord.js */ \"./src/read/sf2/getWord.js\");\n\n\n\n\nvar parseInstHeader = function parseInstHeader(header, bag) {\n  var bagIndex = 0,\n      modIndex = 0,\n      genIndex = 0;\n  var instHeaders = [];\n\n  for (var i = 0; i < header.data.length; i += 22) {\n    var name = Object(_getString_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(header.data, i, i + 20);\n    if (name === \"EOI\") continue; // End Of Instrument\n\n    var nextBagIndex = Object(_getWord_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(header.data, i + 42); // 次のInstのデータを読む\n\n    var zones = [];\n\n    for (var j = bagIndex; j < nextBagIndex; j++) {\n      var nextGenIndex = Object(_getWord_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(bag.data, 4 * (j + 1));\n      var nextModIndex = Object(_getWord_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(bag.data, 4 * (j + 1) + 2);\n      zones.push({\n        genStart: genIndex,\n        genEnd: nextGenIndex,\n        modStart: modIndex,\n        modEnd: nextModIndex\n      });\n      genIndex = nextGenIndex;\n      modIndex = nextModIndex;\n    }\n\n    instHeaders.push({\n      'name': name,\n      'zones': zones\n    });\n    bagIndex = nextBagIndex;\n  }\n\n  return instHeaders;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (parseInstHeader);\n\n//# sourceURL=webpack:///./src/read/sf2/parseInstHeader.js?");

/***/ }),

/***/ "./src/read/sf2/parseModulator.js":
/*!****************************************!*\
  !*** ./src/read/sf2/parseModulator.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getString.js */ \"./src/read/sf2/getString.js\");\n/* harmony import */ var _getDoubleWord_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDoubleWord.js */ \"./src/read/sf2/getDoubleWord.js\");\n/* harmony import */ var _getWord_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWord.js */ \"./src/read/sf2/getWord.js\");\n/* harmony import */ var _getShort_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getShort.js */ \"./src/read/sf2/getShort.js\");\n/* harmony import */ var _generatorNameList_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generatorNameList.js */ \"./src/read/sf2/generatorNameList.js\");\n\n\n\n\n\n\nvar parseModulator = function parseModulator(data, offset) {\n  offset *= 10;\n  return {\n    modSrcOper: Object(_getWord_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data, offset),\n    generatorName: _generatorNameList_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"][Object(_getWord_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data, offset + 2)],\n    mount: Object(_getShort_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(data, offset + 4),\n    modAmtSrcOper: Object(_getWord_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data, 6),\n    modTransOper: Object(_getWord_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data, 8)\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (parseModulator);\n\n//# sourceURL=webpack:///./src/read/sf2/parseModulator.js?");

/***/ }),

/***/ "./src/read/sf2/parsePreset.js":
/*!*************************************!*\
  !*** ./src/read/sf2/parsePreset.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Preset_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Preset.js */ \"./src/read/sf2/Preset.js\");\n\n\nvar parsePreset = function parsePreset(presetHeader, instList) {\n  presetHeader.zones.forEach(function (a) {\n    delete a.genStart;\n    delete a.genEnd;\n    delete a.modStart;\n    delete a.modEnd;\n  });\n  var globalZone;\n  if (presetHeader.zones[0].generators.instrument == null) globalZone = presetHeader.zones[0]; //    else console.log('Mo GlobalZones');\n\n  var zones = [];\n\n  for (var i = 0; i < presetHeader.zones.length; i++) {\n    if (presetHeader.zones[i].generators.instrument == null && i === 0 && globalZone != null) continue;\n    if (presetHeader.zones[i].generators.instrument == null && i !== 0 && globalZone == null) throw new Error('!!!!! Preset[' + presetHeader.name + '] zone not found instrument !!!!!');\n    presetHeader.zones[i].generators.instrument = instList[i];\n    zones.push(presetHeader.zones[i]);\n  }\n\n  return new _Preset_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](presetHeader.name, presetHeader.MIDINumber, presetHeader.bankID, globalZone, presetHeader.zones, presetHeader.library, presetHeader.generator, presetHeader.morphology);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (parsePreset);\n\n//# sourceURL=webpack:///./src/read/sf2/parsePreset.js?");

/***/ }),

/***/ "./src/read/sf2/parsePresetHeader.js":
/*!*******************************************!*\
  !*** ./src/read/sf2/parsePresetHeader.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getString.js */ \"./src/read/sf2/getString.js\");\n/* harmony import */ var _getDoubleWord_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDoubleWord.js */ \"./src/read/sf2/getDoubleWord.js\");\n/* harmony import */ var _getWord_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWord.js */ \"./src/read/sf2/getWord.js\");\n\n\n\n\nvar parsePresetHeader = function parsePresetHeader(header, bag) {\n  var bagIndex = 0,\n      genIndex = 0,\n      modIndex = 0;\n  var presetHeaders = [];\n\n  for (var i = 0; i < header.data.length; i += 38) {\n    var name = Object(_getString_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(header.data, i, i + 20);\n    if (name === 'EOP') continue; // End Of Preset\n\n    var MIDINumber = Object(_getWord_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(header.data, i + 20);\n    var bankID = Object(_getWord_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(header.data, i + 22);\n    var nextBagIndex = Object(_getWord_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(header.data, i + 62); // 38 (presetSize) +24 (offset)\n\n    var library = Object(_getDoubleWord_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(header.data, i + 26);\n    var generator = Object(_getDoubleWord_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(header.data, i + 30);\n    var morphology = Object(_getDoubleWord_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(header.data, i + 34);\n    var zones = [];\n\n    for (var j = bagIndex; j < nextBagIndex; j++) {\n      var nextGenIndex = Object(_getWord_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(bag.data, 4 * (j + 1));\n      var nextModIndex = Object(_getWord_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(bag.data, 4 * (j + 1) + 2);\n      zones.push({\n        genStart: genIndex,\n        genEnd: nextGenIndex,\n        modStart: modIndex,\n        modEnd: nextModIndex\n      });\n      genIndex = nextGenIndex;\n      modIndex = nextModIndex;\n    }\n\n    presetHeaders.push({\n      'name': name,\n      'zones': zones,\n      'MIDINumber': MIDINumber,\n      'bankID': bankID,\n      'library': library,\n      'generator': generator,\n      'morphology': morphology\n    });\n  }\n\n  return presetHeaders;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (parsePresetHeader);\n\n//# sourceURL=webpack:///./src/read/sf2/parsePresetHeader.js?");

/***/ }),

/***/ "./src/read/sf2/readInfo.js":
/*!**********************************!*\
  !*** ./src/read/sf2/readInfo.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getString.js */ \"./src/read/sf2/getString.js\");\n\n\nvar readInfo = function readInfo(chunk) {\n  var info = {};\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = chunk.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var a = _step.value;\n      if (a.type === 'ifil') info['sf_version'] = 1000 * a.data[0] + 100 * a.data[1] + 10 * a.data[2] + a.data[3];else if (a.type === 'isng') info['sound_engin'] = Object(_getString_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a.data, 0, a.size);else if (a.type === 'INAM') info['name'] = Object(_getString_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a.data, 0, a.size);else if (a.type === 'irom') info['ROM'] = Object(_getString_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a.data, 0, a.size);else if (a.type === 'iver') info['rom_version'] = 1000 * a.data[0] + 100 * a.data[1] + 10 * a.data[2] + a.data[3];else if (a.type === 'ICRD') info['date'] = Object(_getString_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a.data, 0, a.size);else if (a.type === 'IENG') info['designer'] = Object(_getString_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a.data, 0, a.size);else if (a.type === 'IPRD') info['product'] = Object(_getString_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a.data, 0, a.size);else if (a.type === 'ICOP') info['copy_right'] = Object(_getString_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a.data, 0, a.size);else if (a.type === 'ICMT') info['comment'] = Object(_getString_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a.data, 0, a.size);else if (a.type === 'ISFT') info['tool'] = Object(_getString_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a.data, 0, a.size);else throw new Error('!!!!! read.sf2  Sound Font  Infoチャンク 不明な識別子があります ' + a.type + ' !!!!!'); //\tconsole.log(a);\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n        _iterator[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  return info;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (readInfo);\n\n//# sourceURL=webpack:///./src/read/sf2/readInfo.js?");

/***/ })

/******/ });