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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _svg_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svg/config.js */ \"./src/svg/config.js\");\n/* harmony import */ var _svg_dump_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg/dump.js */ \"./src/svg/dump.js\");\n/* harmony import */ var _svg_graph_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg/graph.js */ \"./src/svg/graph.js\");\n/* harmony import */ var _svg_hist_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg/hist.js */ \"./src/svg/hist.js\");\n\n\n\n\nvar svg = {\n  config: _svg_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  graph: _svg_graph_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  dump: _svg_dump_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  hist: _svg_hist_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n};\nwindow.svg = window.svg || svg;\nif (window.svg === svg) console.log('>>>>> svg module Loaded <<<<<');\n\n//# sourceURL=webpack:///./src/svg.js?");

/***/ }),

/***/ "./src/svg/class/Graph.js":
/*!********************************!*\
  !*** ./src/svg/class/Graph.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Graph_draw_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Graph/draw.js */ \"./src/svg/class/Graph/draw.js\");\n/* harmony import */ var _Graph_drawFunc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Graph/drawFunc.js */ \"./src/svg/class/Graph/drawFunc.js\");\n/* harmony import */ var _Graph_drawFuncAdd_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Graph/drawFuncAdd.js */ \"./src/svg/class/Graph/drawFuncAdd.js\");\n/* harmony import */ var _Graph_setXTitle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Graph/setXTitle.js */ \"./src/svg/class/Graph/setXTitle.js\");\n/* harmony import */ var _Graph_setYLabel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Graph/setYLabel.js */ \"./src/svg/class/Graph/setYLabel.js\");\n/* harmony import */ var _Graph_setXLabel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Graph/setXLabel.js */ \"./src/svg/class/Graph/setXLabel.js\");\n/* harmony import */ var _Graph_clear_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Graph/clear.js */ \"./src/svg/class/Graph/clear.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\n\nvar Graph =\n/*#__PURE__*/\nfunction () {\n  function Graph(group, options) {\n    _classCallCheck(this, Graph);\n\n    this._g = group;\n    var width = this.disp.width.animVal.value,\n        height = this.disp.height.animVal.value,\n        x0 = this.disp.x.animVal.value,\n        y0 = this.disp.y.animVal.value;\n    this._lines = [this._g.polyline(x0, y0 + 0.5 * height, x0 + width, y0 + 0.5 * height).attr({\n      strokeWidth: 2,\n      stroke: 'blue',\n      fill: 'none'\n    })];\n\n    if (options != null && _typeof(options) === 'object') {\n      for (var _i = 0, _Object$entries = Object.entries(options); _i < _Object$entries.length; _i++) {\n        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),\n            k = _Object$entries$_i[0],\n            v = _Object$entries$_i[1];\n\n        if (this[k] == null) this[k] = v;\n      }\n    } //\tconsole.log(this);\n\n  }\n\n  _createClass(Graph, [{\n    key: \"line\",\n    value: function line() {\n      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n      return this._lines[index];\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(x, y) {\n      Object(_Graph_draw_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, x, y);\n\n      return this;\n    }\n  }, {\n    key: \"drawFunc\",\n    value: function drawFunc(func, xmin, xmax, ymin, ymax) {\n      Object(_Graph_drawFunc_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, func, xmin, xmax, ymin, ymax);\n\n      return this;\n    }\n  }, {\n    key: \"drawFuncAdd\",\n    value: function drawFuncAdd(func) {\n      Object(_Graph_drawFuncAdd_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, func);\n\n      return this;\n    }\n  }, {\n    key: \"setXTitle\",\n    value: function setXTitle(title) {\n      Object(_Graph_setXTitle_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, title);\n    }\n  }, {\n    key: \"setYLabel\",\n    value: function setYLabel(div) {\n      Object(_Graph_setYLabel_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, div);\n    }\n  }, {\n    key: \"setXLabel\",\n    value: function setXLabel(div) {\n      Object(_Graph_setXLabel_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, div);\n    }\n  }, {\n    key: \"setOption\",\n    value: function setOption(options) {\n      if (options != null && _typeof(options) === 'object') {\n        for (var _i2 = 0, _Object$entries2 = Object.entries(options); _i2 < _Object$entries2.length; _i2++) {\n          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),\n              key = _Object$entries2$_i[0],\n              val = _Object$entries2$_i[1];\n\n          this[key] = value;\n        }\n      }\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      Object(_Graph_clear_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this);\n    }\n  }, {\n    key: \"disp\",\n    get: function get() {\n      return _toConsumableArray(this.node.children).find(function (a) {\n        return a.tagName === 'rect';\n      });\n    }\n  }, {\n    key: \"node\",\n    get: function get() {\n      return this._g.node;\n    }\n  }]);\n\n  return Graph;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Graph);\n\n//# sourceURL=webpack:///./src/svg/class/Graph.js?");

/***/ }),

/***/ "./src/svg/class/Graph/clear.js":
/*!**************************************!*\
  !*** ./src/svg/class/Graph/clear.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar clear = function clear(g) {\n  _toConsumableArray(g.node.children).forEach(function (a) {\n    if (a !== g.disp) a.remove();\n  });\n\n  g._lines = [];\n  var width = g.disp.width.animVal.value,\n      height = g.disp.height.animVal.value,\n      x0 = g.disp.x.animVal.value,\n      y0 = g.disp.y.animVal.value;\n\n  g._lines.push(g._g.polyline(x0, y0 + 0.5 * height, x0 + width, y0 + 0.5 * height).attr({\n    strokeWidth: 2,\n    stroke: 'blue',\n    fill: 'none'\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (clear);\n\n//# sourceURL=webpack:///./src/svg/class/Graph/clear.js?");

/***/ }),

/***/ "./src/svg/class/Graph/colorList.js":
/*!******************************************!*\
  !*** ./src/svg/class/Graph/colorList.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar colorList = ['blue', 'red', 'green', 'yellow', 'magenta'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (colorList);\n\n//# sourceURL=webpack:///./src/svg/class/Graph/colorList.js?");

/***/ }),

/***/ "./src/svg/class/Graph/draw.js":
/*!*************************************!*\
  !*** ./src/svg/class/Graph/draw.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar draw = function draw(g, x, y) {\n  var width = g.disp.width.animVal.value;\n  var height = g.disp.height.animVal.value;\n  var x0 = g.disp.x.animVal.value;\n  var y0 = g.disp.y.animVal.value + height;\n  var line = g.line(0);\n  var xmax = g.xmax == null ? Math.max.apply(Math, _toConsumableArray(x)) : g.xmax;\n  var xmin = g.xmin == null ? Math.min.apply(Math, _toConsumableArray(x)) : g.xmin;\n  var ymax = g.ymax == null ? Math.max.apply(Math, _toConsumableArray(y)) : g.ymax;\n  var ymin = g.ymin == null ? Math.min.apply(Math, _toConsumableArray(y)) : g.ymin;\n  var scaleX = width / (xmax - xmin);\n  var scaleY = ymax === ymin ? 0 : height / (ymax - ymin);\n  var str = ''; //    console.log('scaleX', scaleX, 'scaleY', scaleY);\n\n  if (scaleY === 0) {\n    for (var i = 0; i < x.length; i++) {\n      var xval = x0 + scaleX * (x[i] - xmin),\n          yval = y0 - 0.5 * height;\n      str += xval + ',' + yval + ',';\n    }\n  } else {\n    for (var _i = 0; _i < x.length; _i++) {\n      if (y[_i] < ymin) y[_i] = ymin;\n      if (y[_i] > ymax) y[_i] = ymax;\n\n      var _xval = x0 + scaleX * (x[_i] - xmin);\n\n      var _yval = y0 - scaleY * (y[_i] - ymin);\n\n      str += _xval + ',' + _yval + ',';\n    }\n  }\n\n  str = str.slice(0, -1);\n  g.xmax = xmax, g.xmin = xmin, g.ymax = ymax, g.ymin = ymin; //    console.log('str :',str);\n  //    console.log('ymax :', ymax);\n  //    console.log('ymin :', ymin);\n\n  line.attr({\n    points: str\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (draw);\n\n//# sourceURL=webpack:///./src/svg/class/Graph/draw.js?");

/***/ }),

/***/ "./src/svg/class/Graph/drawFunc.js":
/*!*****************************************!*\
  !*** ./src/svg/class/Graph/drawFunc.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar N = 1000;\n\nvar drawFunc = function drawFunc(g, func, xin_min, xin_max, yin_min, yin_max) {\n  var width = g.disp.width.animVal.value;\n  var height = g.disp.height.animVal.value;\n  var x0 = g.disp.x.animVal.value;\n  var y0 = g.disp.y.animVal.value + height;\n  var line = g.line(0);\n  var xmax = xin_max != null ? xin_max : g.xmax;\n  var xmin = xin_min != null ? xin_min : g.xmin; //    console.log(xin_min, xin_max, xmin, xmax);\n\n  var delta = (xmax - xmin) / (N - 1);\n  var x = [],\n      y = [];\n\n  for (var i = 0; i < N; i++) {\n    var tmpx = xmin + i * delta;\n    x.push(tmpx);\n    y.push(func(tmpx));\n  }\n\n  var ymax = yin_max || g.ymax || Math.max.apply(Math, y);\n  var ymin = yin_min || g.ymin || Math.min.apply(Math, y);\n  var scaleX = width / (xmax - xmin);\n  var scaleY = ymax === ymin ? 0 : height / (ymax - ymin);\n  var str = '';\n\n  if (scaleY === 0) {\n    for (var _i = 0; _i < x.length; _i++) {\n      var xval = x0 + scaleX * (x[_i] - xmin),\n          yval = y0 - 0.5 * height;\n      str += xval + ',' + yval + ',';\n    }\n  } else {\n    for (var _i2 = 0; _i2 < x.length; _i2++) {\n      if (y[_i2] < ymin) y[_i2] = ymin;\n      if (y[_i2] > ymax) y[_i2] = ymax;\n\n      var _xval = x0 + scaleX * (x[_i2] - xmin);\n\n      var _yval = y0 - scaleY * (y[_i2] - ymin);\n\n      str += _xval + ',' + _yval + ',';\n    }\n  }\n\n  str = str.slice(0, -1);\n  g.xmax = xmax, g.xmin = xmin, g.ymax = ymax, g.ymin = ymin;\n  line.attr({\n    points: str\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (drawFunc);\n\n//# sourceURL=webpack:///./src/svg/class/Graph/drawFunc.js?");

/***/ }),

/***/ "./src/svg/class/Graph/drawFuncAdd.js":
/*!********************************************!*\
  !*** ./src/svg/class/Graph/drawFuncAdd.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _colorList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorList.js */ \"./src/svg/class/Graph/colorList.js\");\n\nvar N = 1000;\n\nvar drawFuncAdd = function drawFuncAdd(g, func, xin_min, xin_max, yin_min, yin_max) {\n  var width = g.disp.width.animVal.value;\n  var height = g.disp.height.animVal.value;\n  var x0 = g.disp.x.animVal.value;\n  var y0 = g.disp.y.animVal.value + height;\n\n  var line = g._g.polyline(x0, y0 + 0.5 * height, x0 + width, y0 + 0.5 * height);\n\n  line.attr({\n    strokeWidth: 2,\n    stroke: _colorList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][g._lines.length],\n    fill: 'none'\n  });\n\n  g._lines.push(line);\n\n  var xmax = g.xmax;\n  var xmin = g.xmin;\n  var delta = (xmax - xmin) / (N - 1);\n  var x = [],\n      y = [];\n\n  for (var i = 0; i < N; i++) {\n    var tmpx = xmin + i * delta;\n    x.push(tmpx);\n    y.push(func(tmpx));\n  }\n\n  var ymax = g.ymax;\n  var ymin = g.ymin;\n  var scaleX = width / (xmax - xmin);\n  var scaleY = ymax === ymin ? 0 : height / (ymax - ymin);\n  var str = '';\n\n  if (scaleY === 0) {\n    for (var _i = 0; _i < x.length; _i++) {\n      var xval = x0 + scaleX * (x[_i] - xmin),\n          yval = y0 - 0.5 * height;\n      str += xval + ',' + yval + ',';\n    }\n  } else {\n    for (var _i2 = 0; _i2 < x.length; _i2++) {\n      if (y[_i2] < ymin) y[_i2] = ymin;\n      if (y[_i2] > ymax) y[_i2] = ymax;\n\n      var _xval = x0 + scaleX * (x[_i2] - xmin);\n\n      var _yval = y0 - scaleY * (y[_i2] - ymin);\n\n      str += _xval + ',' + _yval + ',';\n    }\n  }\n\n  str = str.slice(0, -1);\n  g.xmax = xmax, g.xmin = xmin, g.ymax = ymax, g.ymin = ymin;\n  line.attr({\n    points: str\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (drawFuncAdd);\n\n//# sourceURL=webpack:///./src/svg/class/Graph/drawFuncAdd.js?");

/***/ }),

/***/ "./src/svg/class/Graph/setXLabel.js":
/*!******************************************!*\
  !*** ./src/svg/class/Graph/setXLabel.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar setXLabel = function setXLabel(g, div) {\n  var width = g.disp.width.animVal.value;\n  var height = g.disp.height.animVal.value;\n  var x0 = g.disp.x.animVal.value;\n  var y0 = g.disp.y.animVal.value + height;\n  var xmax = g.xmax == null ? 0 : g.xmax;\n  var xmin = g.xmin == null ? 0 : g.xmin;\n  var scaleX = width / (xmax - xmin);\n  var remind = xmin % div;\n\n  for (var x = xmin - remind; x <= xmax; x += div) {\n    var xpos = x0 + scaleX * (x - xmin);\n\n    g._g.text(xpos, y0, String(x)).attr({\n      textAnchor: \"middle\",\n      dominantBaseline: \"hanging\"\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setXLabel);\n\n//# sourceURL=webpack:///./src/svg/class/Graph/setXLabel.js?");

/***/ }),

/***/ "./src/svg/class/Graph/setXTitle.js":
/*!******************************************!*\
  !*** ./src/svg/class/Graph/setXTitle.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar setXTitle = function setXTitle(g, string) {\n  var width = g.disp.width.animVal.value;\n  var height = g.disp.height.animVal.value;\n  var x0 = g.disp.x.animVal.value;\n  var y0 = g.disp.y.animVal.value + height;\n\n  g._g.text(x0 + 0.5 * width, y0 + 0.05 * height, string).attr({\n    textAnchor: \"middle\",\n    dominantBaseline: \"hanging\"\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setXTitle);\n\n//# sourceURL=webpack:///./src/svg/class/Graph/setXTitle.js?");

/***/ }),

/***/ "./src/svg/class/Graph/setYLabel.js":
/*!******************************************!*\
  !*** ./src/svg/class/Graph/setYLabel.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar setYLabel = function setYLabel(g, div) {\n  var width = g.disp.width.animVal.value;\n  var height = g.disp.height.animVal.value;\n  var x0 = g.disp.x.animVal.value;\n  var y0 = g.disp.y.animVal.value + height;\n  var ymax = g.ymax == null ? 0 : g.ymax;\n  var ymin = g.ymin == null ? 0 : g.ymin;\n  var scaleY = ymax === ymin ? 0 : height / (ymax - ymin);\n\n  for (var y = ymin; y <= ymax; y += div) {\n    var ypos = y0 - scaleY * (y - ymin);\n\n    g._g.text(x0, ypos, String(y)).attr({\n      textAnchor: \"end\",\n      dominantBaseline: \"middle\"\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setYLabel);\n\n//# sourceURL=webpack:///./src/svg/class/Graph/setYLabel.js?");

/***/ }),

/***/ "./src/svg/class/Hist.js":
/*!*******************************!*\
  !*** ./src/svg/class/Hist.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Hist_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hist/init.js */ \"./src/svg/class/Hist/init.js\");\n/* harmony import */ var _Hist_draw_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hist/draw.js */ \"./src/svg/class/Hist/draw.js\");\n/* harmony import */ var _Hist_fill_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hist/fill.js */ \"./src/svg/class/Hist/fill.js\");\n/* harmony import */ var _Hist_dump_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hist/dump.js */ \"./src/svg/class/Hist/dump.js\");\n/* harmony import */ var _Hist_reset_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Hist/reset.js */ \"./src/svg/class/Hist/reset.js\");\n/* harmony import */ var _Hist_drawFunc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Hist/drawFunc.js */ \"./src/svg/class/Hist/drawFunc.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\nvar Hist =\n/*#__PURE__*/\nfunction () {\n  function Hist(data, label, group, options) {\n    _classCallCheck(this, Hist);\n\n    this._g = group;\n    this._drawObj = [];\n    Object(_Hist_init_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, data, label, options.labelWidth);\n  }\n\n  _createClass(Hist, [{\n    key: \"draw\",\n    value: function draw(options) {\n      Object(_Hist_draw_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this);\n    }\n  }, {\n    key: \"fill\",\n    value: function fill(label) {\n      var weight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0;\n\n      Object(_Hist_fill_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, label, weight);\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      Object(_Hist_reset_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this);\n    }\n  }, {\n    key: \"dump\",\n    value: function dump() {\n      Object(_Hist_dump_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this);\n    }\n  }, {\n    key: \"binContent\",\n    value: function binContent(i) {\n      return this._bins[i].content;\n    }\n  }, {\n    key: \"binLabel\",\n    value: function binLabel(i) {\n      return this._bins[i].label;\n    }\n  }, {\n    key: \"contentArray\",\n    value: function contentArray() {\n      return this._bins.map(function (a) {\n        return a.content;\n      }).slice(0, -1);\n    }\n  }, {\n    key: \"labelArray\",\n    value: function labelArray() {\n      return this._bins.map(function (a) {\n        return a.label;\n      }).slice(0, -1);\n    }\n  }, {\n    key: \"drawFunc\",\n    value: function drawFunc(func) {\n      return Object(_Hist_drawFunc_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, func);\n    }\n  }, {\n    key: \"disp\",\n    get: function get() {\n      return _toConsumableArray(this.node.children).find(function (a) {\n        return a.tagName === 'rect';\n      });\n    }\n  }, {\n    key: \"node\",\n    get: function get() {\n      return this._g.node;\n    }\n  }]);\n\n  return Hist;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hist);\n\n//# sourceURL=webpack:///./src/svg/class/Hist.js?");

/***/ }),

/***/ "./src/svg/class/Hist/draw.js":
/*!************************************!*\
  !*** ./src/svg/class/Hist/draw.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar draw = function draw(h) {\n  var width = h.disp.width.animVal.value,\n      height = h.disp.height.animVal.value,\n      x0 = h.disp.x.animVal.value,\n      y0 = h.disp.y.animVal.value + height;\n\n  var max = h._bins.reduce(function (max, a) {\n    return max > a.content ? max : a.content;\n  }, 0);\n\n  var scaleY = max > 0 ? height / (1.1 * (max + Math.sqrt(max))) : 0;\n  var scaleX = width / (h._bins.length - 1);\n\n  for (var i = 0; i < h._bins.length - 1; i++) {\n    var barLength = h._bins[i].content * scaleY;\n    var barPos = y0 - barLength,\n        sqrtContLen = Math.sqrt(h._bins[i].content) * scaleY;\n    if (h._bins[i].elem == null) h._bins[i].elem = h._g.rect(x0 + i * scaleX, barPos, scaleX, barLength).attr({\n      stroke: 'none',\n      fill: 'cyan'\n    });else h._bins[i].elem.attr({\n      'x': x0 + i * scaleX,\n      'y': barPos,\n      'width': scaleX,\n      'height': barLength\n    });\n    if (h._bins[i].bar == null) h._bins[i].bar = h._g.line(x0 + i * scaleX, barPos, x0 + (i + 1) * scaleX, barPos).attr({\n      stroke: 'black',\n      strokeWidth: 2\n    });else h._bins[i].bar.attr({\n      'x1': x0 + i * scaleX,\n      'y1': barPos,\n      'x2': x0 + (i + 1) * scaleX,\n      'y2': barPos\n    });\n    if (h._bins[i].errbar == null) h._bins[i].errbar = h._g.line(x0 + (i + 0.5) * scaleX, barPos - sqrtContLen, x0 + (i + 0.5) * scaleX, barPos + sqrtContLen).attr({\n      stroke: 'black',\n      strokeWidth: 2\n    });else h._bins[i].errbar.attr({\n      'x1': x0 + (i + 0.5) * scaleX,\n      'y1': barPos - sqrtContLen,\n      'x2': x0 + (i + 0.5) * scaleX,\n      'y2': barPos + sqrtContLen\n    });\n  }\n\n  var grid = getGrid(1.1 * max); //    console.log(grid);\n\n  if (h._labelY == null) h._labelY = [];else {\n    h._labelY.forEach(function (a) {\n      return a.remove();\n    });\n\n    h._labelY = [];\n  }\n\n  for (var l = 0; l < 1.1 * (max + Math.sqrt(max)); l += grid) {\n    h._labelY.push(h._g.text(x0, y0 - scaleY * l, String(l)).attr({\n      textAnchor: \"end\",\n      dominantBaseline: \"middle\"\n    }));\n  }\n\n  var entries = h._bins.reduce(function (sum, a) {\n    return sum + a.content;\n  }, 0);\n\n  if (h._stat == null) h._stat = h._g.text(x0 + width, y0 - height, \"Entries : \".concat(entries)).attr({\n    textAnchor: \"end\",\n    domainantBaseline: 'hanging'\n  });else h._stat.attr({\n    text: \"Entries : \".concat(entries)\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (draw);\n\nfunction getGrid(max) {\n  if (max < 10) return 1;\n  if (max < 50) return 5;\n  if (max < 100) return 10;\n  return Math.round(max / 10);\n}\n\n//# sourceURL=webpack:///./src/svg/class/Hist/draw.js?");

/***/ }),

/***/ "./src/svg/class/Hist/drawFunc.js":
/*!****************************************!*\
  !*** ./src/svg/class/Hist/drawFunc.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar drawFunc = function drawFunc(h, func) {\n  var width = h.disp.width.animVal.value,\n      height = h.disp.height.animVal.value,\n      x0 = h.disp.x.animVal.value,\n      y0 = h.disp.y.animVal.value + height;\n\n  var max = h._bins.reduce(function (max, a) {\n    return max > a.content ? max : a.content;\n  }, 0);\n\n  var scaleY = height / (1.1 * (max + Math.sqrt(max))),\n      scaleX = width / (h._bins.length - 1);\n  var arr = [];\n\n  for (var i = 0; i < h._bins.length - 1; i++) {\n    arr.push(x0 + scaleX * (Number(h._bins[i].label) - Number(h._bins[0].label)), y0 - scaleY * func(Number(h._bins[i].label)));\n  }\n\n  var elem = h._g.polyline(arr).attr({\n    strokeWidth: 2,\n    stroke: 'red',\n    fill: 'none'\n  });\n\n  h._drawObj.push({\n    object: func,\n    'elem': elem\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (drawFunc);\n\n//# sourceURL=webpack:///./src/svg/class/Hist/drawFunc.js?");

/***/ }),

/***/ "./src/svg/class/Hist/dump.js":
/*!************************************!*\
  !*** ./src/svg/class/Hist/dump.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar dump = function dump(h) {\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = h._bins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var bin = _step.value;\n      console.log(bin);\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n        _iterator[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dump);\n\n//# sourceURL=webpack:///./src/svg/class/Hist/dump.js?");

/***/ }),

/***/ "./src/svg/class/Hist/fill.js":
/*!************************************!*\
  !*** ./src/svg/class/Hist/fill.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar fill = function fill(h, label) {\n  var weight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1.0;\n\n  var bin = h._bins.find(function (a) {\n    return a.label == label;\n  });\n\n  if (bin != null) {\n    bin.content++;\n  } else {\n    //\tconsole.log(`bin:${label}が見つかりませんでした`);\n    h._bins[h._bins.length - 1].content++;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fill);\n\n//# sourceURL=webpack:///./src/svg/class/Hist/fill.js?");

/***/ }),

/***/ "./src/svg/class/Hist/init.js":
/*!************************************!*\
  !*** ./src/svg/class/Hist/init.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar init = function init(h, data, label, labelWidth) {\n  h._bins = [];\n\n  for (var _i = 0; _i < label.length; _i++) {\n    h._bins.push({\n      'label': label[_i],\n      content: data[_i]\n    });\n  }\n\n  h._bins.push({\n    'label': null,\n    content: 0\n  });\n\n  console.log('lW :', labelWidth);\n  var height = h.disp.height.animVal.value;\n  var scaleX = h.disp.width.animVal.value / label.length;\n  var x0 = h.disp.x.animVal.value;\n  var y0 = h.disp.y.animVal.value + height;\n  var i = 0;\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = h._bins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var obj = _step.value;\n\n      //\tconsole.log('i=', i, i%labelWidth);\n      if (i % labelWidth != 0) {\n        i++;\n        continue;\n      }\n\n      if (obj.label == null) continue;\n      i++;\n      obj.svgXLabel = h._g.text(x0 + (0.5 + i) * scaleX, y0 + 0.02 * height, String(obj.label)).attr({\n        textAnchor: 'middle',\n        dominantBaseline: 'hanging'\n      });\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n        _iterator[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (init);\n\n//# sourceURL=webpack:///./src/svg/class/Hist/init.js?");

/***/ }),

/***/ "./src/svg/class/Hist/reset.js":
/*!*************************************!*\
  !*** ./src/svg/class/Hist/reset.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar reset = function reset(h) {\n  h._bins.forEach(function (bin) {\n    bin.content = 0;\n  });\n\n  h.draw();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reset);\n\n//# sourceURL=webpack:///./src/svg/class/Hist/reset.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/svg/config.js\");\n/* harmony import */ var _class_Graph_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class/Graph.js */ \"./src/svg/class/Graph.js\");\n\n\n\nvar graph = function graph(x0, y0, width, height, options) {\n  console.log('===== svg.graph CALL =====');\n  if (width == null) width = _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].paper.node.clientWidth;\n  if (height == null) height = _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].paper.node.clientHeight;\n  if (x0 == null) x0 = 0;\n  if (y0 == null) y0 = 0;\n  var group = _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].paper.g();\n  var display = group.rect(x0 + 0.1 * width, y0 + 0.1 * height, 0.8 * width, 0.8 * height);\n  display.attr({\n    fill: 'none',\n    stroke: 'black',\n    strokeWidth: 1\n  });\n  return new _class_Graph_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](group, options);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (graph);\n\n//# sourceURL=webpack:///./src/svg/graph.js?");

/***/ }),

/***/ "./src/svg/hist.js":
/*!*************************!*\
  !*** ./src/svg/hist.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/svg/config.js\");\n/* harmony import */ var _class_Hist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class/Hist.js */ \"./src/svg/class/Hist.js\");\n\n\n\nvar hist = function hist(data, label, labelWidth, x0, y0, height, width) {\n  console.log('===== svg.hist CALL =====');\n  if (labelWidth == null) labelWidth = 1;\n  if (width == null) width = _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].paper.node.clientWidth;\n  if (height == null) height = _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].paper.node.clientHeight;\n  if (x0 == null) x0 = 0;\n  if (y0 == null) y0 = 0;\n  var group = _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].paper.g();\n  var display = group.rect(x0 + 0.1 * width, y0 + 0.1 * height, 0.8 * width, 0.8 * height);\n  display.attr({\n    fill: 'none',\n    stroke: 'black',\n    strokeWidth: 1\n  });\n  return new _class_Hist_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](data, label, group, {\n    'labelWidth': labelWidth\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (hist);\n\n//# sourceURL=webpack:///./src/svg/hist.js?");

/***/ })

/******/ });