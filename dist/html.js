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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/html.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/html.js":
/*!*********************!*\
  !*** ./src/html.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _html_add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html/add.js */ \"./src/html/add.js\");\n/* harmony import */ var _html_set_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html/set.js */ \"./src/html/set.js\");\n\n\nvar html = {\n  add: _html_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  set: _html_set_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\nwindow.html = window.html || html;\nif (html === window.html) console.log('>>>>> html Module Loaded <<<<<');\n\n//# sourceURL=webpack:///./src/html.js?");

/***/ }),

/***/ "./src/html/add.js":
/*!*************************!*\
  !*** ./src/html/add.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add/event.js */ \"./src/html/add/event.js\");\n\nvar add = {\n  event: _add_event_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (add);\n\n//# sourceURL=webpack:///./src/html/add.js?");

/***/ }),

/***/ "./src/html/add/event.js":
/*!*******************************!*\
  !*** ./src/html/add/event.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar event = function event(elem, evName, func) {\n  var isExec = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n  // 早期return を使った型分別\n  if (elem instanceof HTMLElement) addEvent(elem, evName, func, isExec);else if (Array.isArray(elem) && elem.every(function (a) {\n    return a instanceof HTMLElement;\n  })) elem.forEach(function (a) {\n    addEvent(a, evName, func, isExec);\n  });else if (Array.isArray(elem) && elem.every(function (a) {\n    return Array.isArray(a);\n  })) elem.forEach(function (a) {\n    event(a, evName, func, isExec);\n  });else if (Array.isArray(elem) && elem.find(function (a) {\n    return a instanceof HTMLElement;\n  })) {\n    elem.filter(function (a) {\n      return a instanceof HTMLElement;\n    }).forEach(function (a) {\n      addEvent(a, evName, func, isExec);\n    });\n    elem.filter(function (a) {\n      return Array.isArray(a);\n    }).forEach(function (a) {\n      return event(a, evName, func, isExec);\n    });\n  } else throw new Error('!!!!! html.add.event invalid element typeof(elem) ' + _typeof(elem) + '!!!!!');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (event);\n\nfunction addEvent(elem, evName, func, isExec) {\n  elem.addEventListener(evName, func);\n  if (isExec) elem.dispatchEvent(new Event(evName));\n}\n\n//# sourceURL=webpack:///./src/html/add/event.js?");

/***/ }),

/***/ "./src/html/set.js":
/*!*************************!*\
  !*** ./src/html/set.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _set_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set/property.js */ \"./src/html/set/property.js\");\n/* harmony import */ var _set_style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set/style.js */ \"./src/html/set/style.js\");\n\n\nvar set = {\n  property: _set_property_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  value: function value(elem, func) {\n    var isExec = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n    Object(_set_property_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(elem, func, isExec);\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (set);\n\n//# sourceURL=webpack:///./src/html/set.js?");

/***/ }),

/***/ "./src/html/set/property.js":
/*!**********************************!*\
  !*** ./src/html/set/property.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar property = function property(elem, pName, value) {\n  if (elem instanceof HTMLElement) setProperty(elem, pName, value);else if (Array.isArray(elem) && elem.every(function (a) {\n    return a instanceof HTMLElement;\n  }) && Array.isArray(value) && elem.length === value.length) elem.forEach(function (a, i) {\n    setProperty(a, pName, value[i]);\n  });else if (Array.isArray(elem) && elem.every(function (a) {\n    return a instanceof HTMLElement;\n  })) elem.forEach(function (a) {\n    setProperty(a, pName, value);\n  });else if (Array.isArray(elem) && elem.every(function (a) {\n    return Array.isArray(a);\n  })) elem.forEach(function (a) {\n    property(a, pName, value);\n  });else if (Array.isArray(elem) && elem.find(function (a) {\n    return a instanceof HTMLElement;\n  })) {\n    elem.filter(function (a) {\n      return a instanceof HTMLElement;\n    }).forEach(function (a) {\n      setProperty(a, pName, value);\n    });\n    elem.filter(function (a) {\n      return Array.isArray(a);\n    }).forEach(function (a) {\n      property(a, pName, value);\n    });\n  } else throw new Error('!!!!! html.set.property invalid element typeof(elem) ' + _typeof(elem) + ' !!!!!');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (property);\n\nfunction setProperty(elem, pName, value) {\n  if (_typeof(value) !== _typeof(elem[pName])) console.warn('type of property is not matched', _typeof(elem[pName]), _typeof(value));\n  elem[pName] = value;\n}\n\n//# sourceURL=webpack:///./src/html/set/property.js?");

/***/ }),

/***/ "./src/html/set/style.js":
/*!*******************************!*\
  !*** ./src/html/set/style.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar style = function style(elem, styleObj) {\n  for (var _i = 0, _Object$entries = Object.entries(styleObj); _i < _Object$entries.length; _i++) {\n    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),\n        key = _Object$entries$_i[0],\n        val = _Object$entries$_i[1];\n\n    console.log('set style', key, val);\n    elem.style[key] = val;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (style);\n\n//# sourceURL=webpack:///./src/html/set/style.js?");

/***/ })

/******/ });