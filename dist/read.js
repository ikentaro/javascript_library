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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sf2_readInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sf2/readInfo.js */ \"./src/read/sf2/readInfo.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar sf2 = function sf2(promise) {\n  console.log('===== Read SoundFont2 File START =====');\n  promise.then(function (data) {\n    var _check$data = _slicedToArray(check(data).data, 3),\n        infoChunk = _check$data[0],\n        sampleChunk = _check$data[1],\n        presetChunk = _check$data[2];\n\n    var _presetChunk$data = _slicedToArray(presetChunk.data, 8),\n        presetHeader = _presetChunk$data[0],\n        presetBag = _presetChunk$data[1],\n        presetModerator = _presetChunk$data[2],\n        presetGenerator = _presetChunk$data[3],\n        instHeader = _presetChunk$data[4],\n        instBag = _presetChunk$data[5],\n        instModerator = _presetChunk$data[6],\n        instGenerator = _presetChunk$data[7];\n\n    var infoData = Object(_sf2_readInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(infoChunk);\n    return data;\n  });\n  console.log('===== Read SoundFont2 File FINISH =====');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sf2);\n\nfunction check(data) {\n  if (data.type !== 'sfbk') throw new Error('Sound Fontファイルではありません');\n  if (data.data.length !== 3) throw new Error('Sound Fontファイル形式が不正です');\n  if (data.data[0].type !== 'INFO') throw new Error('Sound Fontの1つ目のチャンクはINFOであるべきです');\n  if (data.data[1].type !== 'sdta') throw new Error('Sound Fontの2つ目のチャンクはsdtaであるべきです');\n  if (data.data[2].type !== 'pdta') throw new Error('Sound Fontの3つ目のチャンクはpdtaであるべきです');\n  if (data.data[1].data[0].type !== 'smpl') throw new Error('sdtaチャンクの１つ目はsmplであるべきです');\n  if (data.data[1].data[1] && data.data[1].data[1].type !== 'sm24') throw new Error('sdtaチャンクのふたつ目のチャンクがsm24ではありません');\n  if (data.data[2].data[0].type !== \"phdr\") throw new Error('pdtaのひとつ目のチャンクはphdrであるべきです');\n  if (data.data[2].data[1].type !== \"pbag\") throw new Error('pdtaのひとつ目のチャンクはpbagであるべきです');\n  if (data.data[2].data[2].type !== \"pmod\") throw new Error('pdtaのひとつ目のチャンクはpmodであるべきです');\n  if (data.data[2].data[3].type !== \"pgen\") throw new Error('pdtaのひとつ目のチャンクはpgenであるべきです');\n  if (data.data[2].data[4].type !== \"inst\") throw new Error('pdtaのひとつ目のチャンクはinstであるべきです');\n  if (data.data[2].data[5].type !== \"ibag\") throw new Error('pdtaのひとつ目のチャンクはibagであるべきです');\n  if (data.data[2].data[6].type !== \"imod\") throw new Error('pdtaのひとつ目のチャンクはimodであるべきです');\n  if (data.data[2].data[7].type !== \"igen\") throw new Error('pdtaのひとつ目のチャンクはigenであるべきです');\n  if (data.data[2].data[8].type !== \"shdr\") throw new Error('pdtaのひとつ目のチャンクはshdrであるべきです');\n  return data;\n}\n\n;\n\n//# sourceURL=webpack:///./src/read/sf2.js?");

/***/ }),

/***/ "./src/read/sf2/readInfo.js":
/*!**********************************!*\
  !*** ./src/read/sf2/readInfo.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar readInfo = function readInfo(chunk) {\n  var info = {};\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = chunk.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var a = _step.value;\n      console.log(a);\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n        _iterator[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  return info;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (readInfo);\n\n//# sourceURL=webpack:///./src/read/sf2/readInfo.js?");

/***/ })

/******/ });