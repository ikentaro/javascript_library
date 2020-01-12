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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _read_riff_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./read/riff.js */ \"./src/read/riff.js\");\n\nvar read = {\n  riff: _read_riff_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\nwindow.read = window.read || read;\nif (window.read === read) console.log('read Module Loaded');\n\n//# sourceURL=webpack:///./src/read.js?");

/***/ }),

/***/ "./src/read/riff.js":
/*!**************************!*\
  !*** ./src/read/riff.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar riff = function riff(url) {\n  return fetch(url).then(function (response) {\n    return response.arrayBuffer();\n  }).then(function (arrayBuffer) {\n    var array = new Uint8Array(arrayBuffer);\n    if (String.fromCharCode.apply(\"\", array.subarray(0, 4)) !== \"RIFF\") throw new Error(file_path + \"はRIFFファイルではありません\");\n    if (get_size(array.subarray(4, 8)) !== array.length - 8) throw new Error(file_path + \"ファイルサイズが一致しません \" + size + \"  \" + array.length);\n    console.log('Read RIFF :', url);\n    console.log('     SIZE :', get_size(array.subarray(4, 8)));\n    return riff_data(array);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (riff);\n\nfunction get_size(array) {\n  return new Uint32Array(new Uint8Array(array).buffer)[0];\n}\n\n;\n\nfunction riff_data(array) {\n  var id = String.fromCharCode.apply(\"\", array.subarray(0, 4));\n  var size = get_size(array.subarray(4, 8));\n\n  if (id === \"RIFF\" || id === \"LIST\") {\n    var pos = 12;\n    var type = String.fromCharCode.apply(\"\", array.subarray(8, 12));\n    var data = [];\n\n    while (pos < size + 8) {\n      var child = riff_data(array.subarray(pos, array.length)); // 再帰\n\n      data.push(child);\n      pos += 8 + child.size;\n    }\n\n    var sum = 0;\n\n    for (var _i = 0, _data = data; _i < _data.length; _i++) {\n      var d = _data[_i];\n      sum += d.size;\n    }\n\n    sum += 8 * data.length + 4;\n    if (sum !== size) throw new Error(type + \"チャンクのファイルサイズが一致しません \" + size + \"  \" + sum);\n    return {\n      type: type,\n      size: size,\n      data: data\n    };\n  } else return {\n    type: id,\n    size: size,\n    data: array.subarray(8, 8 + size)\n  };\n}\n\n//# sourceURL=webpack:///./src/read/riff.js?");

/***/ })

/******/ });