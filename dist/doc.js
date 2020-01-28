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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/doc.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/doc.js":
/*!********************!*\
  !*** ./src/doc.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _doc_get_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doc/get.js */ \"./src/doc/get.js\");\n/* harmony import */ var _doc_table_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doc/table.js */ \"./src/doc/table.js\");\n/* harmony import */ var _doc_create_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doc/create.js */ \"./src/doc/create.js\");\n/* harmony import */ var _doc_createSelect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doc/createSelect.js */ \"./src/doc/createSelect.js\");\n\n\n\n\nvar doc = {\n  get: _doc_get_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  create: _doc_create_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  createSelect: _doc_createSelect_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  table: _doc_table_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\nwindow.doc = window.doc || doc;\nif (doc === window.doc) console.log('>>>>> doc Module Loaded <<<<<');\n\n//# sourceURL=webpack:///./src/doc.js?");

/***/ }),

/***/ "./src/doc/create.js":
/*!***************************!*\
  !*** ./src/doc/create.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _html_set_style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../html/set/style.js */ \"./src/html/set/style.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\nvar create = function create(tag, content) {\n  var elem = document.createElement(tag);\n  if (typeof content == null) return elem;else if (typeof content === 'string' || typeof content === 'number') {\n    elem.innerHTML = content;\n    return elem;\n  } else if (content instanceof HTMLElement) {\n    elem.append(content);\n    return elem;\n  } else if (_typeof(content) === 'object') {\n    for (var _i = 0, _Object$entries = Object.entries(content); _i < _Object$entries.length; _i++) {\n      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),\n          key = _Object$entries$_i[0],\n          val = _Object$entries$_i[1];\n\n      if (key === 'style') Object(_html_set_style_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(elem, val);else elem[key] = val;\n    }\n\n    return elem;\n  }\n  throw new Error('!!!!! doc.create(' + tag + ' invalid content !!!!!');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (create);\n\n//# sourceURL=webpack:///./src/doc/create.js?");

/***/ }),

/***/ "./src/doc/createSelect.js":
/*!*********************************!*\
  !*** ./src/doc/createSelect.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.js */ \"./src/doc/create.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\nvar createSelect = function createSelect() {\n  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var select = document.createElement('select');\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var a = _step.value;\n\n      if (typeof a === 'string' || typeof a === 'number') {\n        var option = Object(_create_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('option', {\n          innerHTML: a\n        });\n        select.appendChild(option);\n      } else if (_typeof(a) === 'object') {\n        select.appendChild(Object(_create_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('option', a));\n      }\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n        _iterator[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  return select;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createSelect);\n\n//# sourceURL=webpack:///./src/doc/createSelect.js?");

/***/ }),

/***/ "./src/doc/get.js":
/*!************************!*\
  !*** ./src/doc/get.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _get_id_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get/id.js */ \"./src/doc/get/id.js\");\n\nvar get = {\n  id: _get_id_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (get);\n\n//# sourceURL=webpack:///./src/doc/get.js?");

/***/ }),

/***/ "./src/doc/get/id.js":
/*!***************************!*\
  !*** ./src/doc/get/id.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar id = function id(arg) {\n  if (typeof arg === 'string') return document.getElementById(arg);\n  if (Array.isArray(arg) && arg.every(function (a) {\n    return typeof a === 'string';\n  })) return arg.map(function (a) {\n    return document.getElementById(a);\n  });\n  if (Array.isArray(arg) && arg.every(function (a) {\n    return Array.isArray(a);\n  })) return arg.map(function (a) {\n    return id(a);\n  });\n  throw new Error('!!!!! doc.get.id invailed argment typeof(id)=' + _typeof(id) + '!!!!!');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (id);\n\n//# sourceURL=webpack:///./src/doc/get/id.js?");

/***/ }),

/***/ "./src/doc/table.js":
/*!**************************!*\
  !*** ./src/doc/table.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _table_row_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table/row.js */ \"./src/doc/table/row.js\");\n\nvar table = {\n  row: _table_row_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (table);\n\n//# sourceURL=webpack:///./src/doc/table.js?");

/***/ }),

/***/ "./src/doc/table/row.js":
/*!******************************!*\
  !*** ./src/doc/table/row.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _row_td_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./row/td.js */ \"./src/doc/table/row/td.js\");\n/* harmony import */ var _row_th_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./row/th.js */ \"./src/doc/table/row/th.js\");\n\n\nvar row = {\n  td: _row_td_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  th: _row_th_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (row);\n\n//# sourceURL=webpack:///./src/doc/table/row.js?");

/***/ }),

/***/ "./src/doc/table/row/td.js":
/*!*********************************!*\
  !*** ./src/doc/table/row/td.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../create.js */ \"./src/doc/create.js\");\n\n\nvar td = function td(array) {\n  var tr = document.createElement('tr');\n  array.forEach(function (a) {\n    var td = Object(_create_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('td', a);\n    tr.append(td);\n  });\n  return tr;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (td);\n\n//# sourceURL=webpack:///./src/doc/table/row/td.js?");

/***/ }),

/***/ "./src/doc/table/row/th.js":
/*!*********************************!*\
  !*** ./src/doc/table/row/th.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar th = function th(array) {\n  var tr = document.createElement('tr');\n  array.forEach(function (a) {\n    var th = document.createElement('th');\n    th.innerHTML = a;\n    tr.appendChild(th);\n  });\n  return tr;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (th);\n\n//# sourceURL=webpack:///./src/doc/table/row/th.js?");

/***/ }),

/***/ "./src/html/set/style.js":
/*!*******************************!*\
  !*** ./src/html/set/style.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar style = function style(elem, styleObj) {\n  for (var _i = 0, _Object$entries = Object.entries(styleObj); _i < _Object$entries.length; _i++) {\n    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),\n        key = _Object$entries$_i[0],\n        val = _Object$entries$_i[1];\n\n    elem.style.key = value;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (style);\n\n//# sourceURL=webpack:///./src/html/set/style.js?");

/***/ })

/******/ });