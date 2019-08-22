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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/svg.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/svg.js":
/*!********************!*\
  !*** ./src/svg.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _svg_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svg/config.js */ \"./src/svg/config.js\");\n/* harmony import */ var _svg_dump_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg/dump.js */ \"./src/svg/dump.js\");\n/* harmony import */ var _svg_graph_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg/graph.js */ \"./src/svg/graph.js\");\n\n\n\nwindow.svg = window.svg || {\n  config: _svg_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  graph: _svg_graph_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  dump: _svg_dump_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\nconsole.log('===== svg module print =====');\nconsole.log(window.svg);\n\n//# sourceURL=webpack:///./src/svg.js?");

/***/ }),

/***/ "./src/svg/class/Graph.js":
/*!********************************!*\
  !*** ./src/svg/class/Graph.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Graph_draw_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Graph/draw.js */ \"./src/svg/class/Graph/draw.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Graph =\n/*#__PURE__*/\nfunction () {\n  function Graph(group) {\n    _classCallCheck(this, Graph);\n\n    this._g = group;\n    var width = this.disp.width.animVal.value,\n        height = this.disp.height.animVal.value,\n        x0 = this.disp.x.animVal.value,\n        y0 = this.disp.y.animVal.value;\n    this._lines = [this._g.polyline(x0, y0 + 0.5 * height, x0 + width, y0 + 0.5 * height).attr({\n      strokeWidth: 2,\n      stroke: 'blue',\n      fill: 'none'\n    })];\n  }\n\n  _createClass(Graph, [{\n    key: \"line\",\n    value: function line() {\n      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n      return this._lines[index];\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(x, y) {\n      Object(_Graph_draw_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, x, y);\n    }\n  }, {\n    key: \"disp\",\n    get: function get() {\n      return _toConsumableArray(this.node.children).find(function (a) {\n        return a.tagName === 'rect';\n      });\n    }\n  }, {\n    key: \"node\",\n    get: function get() {\n      return this._g.node;\n    }\n  }]);\n\n  return Graph;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Graph);\n\n//# sourceURL=webpack:///./src/svg/class/Graph.js?");

/***/ }),

/***/ "./src/svg/class/Graph/draw.js":
/*!*************************************!*\
  !*** ./src/svg/class/Graph/draw.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar draw = function draw(g, x, y) {\n  var width = g.disp.width.animVal.value;\n  var height = g.disp.height.animVal.value;\n  var x0 = g.disp.x.animVal.value;\n  var y0 = g.disp.y.animVal.value + height;\n  var line = g.line(0);\n  var xmax = Math.max.apply(Math, _toConsumableArray(x)),\n      xmin = Math.min.apply(Math, _toConsumableArray(x)),\n      ymax = Math.max.apply(Math, _toConsumableArray(y)),\n      ymin = Math.min.apply(Math, _toConsumableArray(y));\n  var scaleX = width / (xmax - xmin);\n  var scaleY = ymax === ymin ? 0 : height / (ymax - ymin);\n  var str = ''; //    console.log('scaleX', scaleX, 'scaleY', scaleY);\n\n  if (scaleY === 0) {\n    for (var i = 0; i < x.length; i++) {\n      var xval = x0 + scaleX * (x[i] - xmin);\n      var yval = y0 - 0.5 * height;\n      str += xval + ',' + yval + ',';\n    }\n  } else {\n    for (var _i = 0; _i < x.length; _i++) {\n      var _xval = x0 + scaleX * (x[_i] - xmin);\n\n      var _yval = y0 - scaleY * (y[_i] - ymin);\n\n      str += _xval + ',' + _yval + ',';\n    }\n  }\n\n  str = str.slice(0, -1); //    console.log('str :',str);\n\n  console.log('ymax :', ymax);\n  console.log('ymin :', ymin);\n  line.attr({\n    points: str\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (draw);\n\n//# sourceURL=webpack:///./src/svg/class/Graph/draw.js?");

/***/ }),

/***/ "./src/svg/config.js":
/*!***************************!*\
  !*** ./src/svg/config.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_setPaper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/setPaper.js */ \"./src/svg/config/setPaper.js\");\n\nvar config = {\n  paper: null,\n  setPaper: function setPaper(elem) {\n    return Object(_config_setPaper_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(config, elem);\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n//# sourceURL=webpack:///./src/svg/config.js?");

/***/ }),

/***/ "./src/svg/config/setPaper.js":
/*!************************************!*\
  !*** ./src/svg/config/setPaper.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar setPaper = function setPaper(config, elem) {\n  if (elem instanceof HTMLElement) {\n    config.paper = Snap(elem.clientWidth, elem.clientHeight);\n    config.paper.appendTo(elem);\n  } else throw new Error('!!!!! elem unknown type ' + _typeof(elem) + ' !!!!');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setPaper);\n\n//# sourceURL=webpack:///./src/svg/config/setPaper.js?");

/***/ }),

/***/ "./src/svg/dump.js":
/*!*************************!*\
  !*** ./src/svg/dump.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/svg/config.js\");\n\n\nvar dump = function dump() {\n  console.log('===== svg dump =====');\n  console.log('>>>>> Paper Object');\n  console.log('> width  :', _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].paper.node.clientWidth);\n  console.log('> height :', _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].paper.node.clientHeight);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dump);\n\n//# sourceURL=webpack:///./src/svg/dump.js?");

/***/ }),

/***/ "./src/svg/graph.js":
/*!**************************!*\
  !*** ./src/svg/graph.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/svg/config.js\");\n/* harmony import */ var _class_Graph_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class/Graph.js */ \"./src/svg/class/Graph.js\");\n\n\n\nvar graph = function graph() {\n  console.log('===== svg.graph CALL =====');\n  var width = _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].paper.node.clientWidth,\n      height = _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].paper.node.clientHeight;\n  var group = _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].paper.g();\n  var display = group.rect(0.1 * width, 0.1 * height, 0.8 * width, 0.8 * height);\n  display.attr({\n    fill: 'none',\n    stroke: 'black',\n    strokeWidth: 1\n  });\n  return new _class_Graph_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](group);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (graph);\n\n//# sourceURL=webpack:///./src/svg/graph.js?");

/***/ })

/******/ });