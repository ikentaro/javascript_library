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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/three.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/three.js":
/*!**********************!*\
  !*** ./src/three.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _three_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./three/config.js */ \"./src/three/config.js\");\n/* harmony import */ var _three_camera_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./three/camera.js */ \"./src/three/camera.js\");\n/* harmony import */ var _three_scene_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./three/scene.js */ \"./src/three/scene.js\");\n/* harmony import */ var _three_geom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./three/geom.js */ \"./src/three/geom.js\");\n/* harmony import */ var _three_renderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./three/renderer.js */ \"./src/three/renderer.js\");\n/* harmony import */ var _three_material_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./three/material.js */ \"./src/three/material.js\");\n/* harmony import */ var _three_helper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./three/helper.js */ \"./src/three/helper.js\");\n\n\n\n\n\n\n\nwindow.three = window.three || {\n  getCamera: function getCamera() {\n    return _three_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].camera;\n  },\n  getRenderer: function getRenderer() {\n    return _three_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderer;\n  },\n  getScene: function getScene() {\n    return _three_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scene;\n  },\n  camera: _three_camera_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  renderer: _three_renderer_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  scene: _three_scene_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  geom: _three_geom_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  material: _three_material_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  mesh: function mesh(geom, material) {\n    return new THREE.Mesh(geom, material);\n  },\n  helper: _three_helper_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n};\nconsole.log('===== three module print =====');\nconsole.log(window.three);\n\n//# sourceURL=webpack:///./src/three.js?");

/***/ }),

/***/ "./src/three/camera.js":
/*!*****************************!*\
  !*** ./src/three/camera.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/three/config.js\");\n/* harmony import */ var _camera_prespective_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camera/prespective.js */ \"./src/three/camera/prespective.js\");\n/* harmony import */ var _camera_orthographic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camera/orthographic.js */ \"./src/three/camera/orthographic.js\");\n\n\n\nvar camera = {\n  prespective: function prespective() {\n    _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].camera = _camera_prespective_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].apply(void 0, arguments);\n    return _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].camera;\n  },\n  orthographic: function orthographic() {\n    _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].camera = _camera_orthographic_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].apply(void 0, arguments);\n    return _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].camera;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (camera);\n\n//# sourceURL=webpack:///./src/three/camera.js?");

/***/ }),

/***/ "./src/three/camera/orthographic.js":
/*!******************************************!*\
  !*** ./src/three/camera/orthographic.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar orthographic = function orthographic() {};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (orthographic);\n\n//# sourceURL=webpack:///./src/three/camera/orthographic.js?");

/***/ }),

/***/ "./src/three/camera/prespective.js":
/*!*****************************************!*\
  !*** ./src/three/camera/prespective.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _prespective_parseParam_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prespective/parseParam.js */ \"./src/three/camera/prespective/parseParam.js\");\n\n\nvar prespective = function prespective() {\n  var _parseParam = _prespective_parseParam_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apply(void 0, arguments),\n      fov = _parseParam.fov,\n      aspect = _parseParam.aspect,\n      near = _parseParam.near,\n      far = _parseParam.far; //    console.log(fov, aspect, near, far);\n\n\n  return new THREE.PerspectiveCamera(fov, aspect, near, far);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (prespective);\n\n//# sourceURL=webpack:///./src/three/camera/prespective.js?");

/***/ }),

/***/ "./src/three/camera/prespective/parseParam.js":
/*!****************************************************!*\
  !*** ./src/three/camera/prespective/parseParam.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar parseParam = function parseParam() {\n  var obj = {\n    fov: 45,\n    aspect: 1,\n    near: 0.1,\n    far: 2000\n  };\n  if (arguments.length === 1 && _typeof(arguments.length <= 0 ? undefined : arguments[0]) === 'object') return Object.assign(obj, arguments.length <= 0 ? undefined : arguments[0]);\n\n  if ((arguments.length <= 0 ? undefined : arguments[0]) === 'number') {\n    obj.fov = arguments.length <= 0 ? undefined : arguments[0];\n    if (obj[1] != null) obj.aspcet = arguments.length <= 1 ? undefined : arguments[1];\n    if (obj[2] != null) obj.near = arguments.length <= 2 ? undefined : arguments[2];\n    if (obj[3] != null) obj.far = arguments.length <= 1 ? undefined : arguments[1];\n    return obj;\n  }\n\n  throw new Error('! three.camera.prespective invalid parameters');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (parseParam);\n\n//# sourceURL=webpack:///./src/three/camera/prespective/parseParam.js?");

/***/ }),

/***/ "./src/three/config.js":
/*!*****************************!*\
  !*** ./src/three/config.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar config = {\n  camera: null,\n  scene: null,\n  renderer: null\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n//# sourceURL=webpack:///./src/three/config.js?");

/***/ }),

/***/ "./src/three/geom.js":
/*!***************************!*\
  !*** ./src/three/geom.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _geom_plane_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geom/plane.js */ \"./src/three/geom/plane.js\");\n/* harmony import */ var _geom_box_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geom/box.js */ \"./src/three/geom/box.js\");\n\n\nvar geom = {\n  box: _geom_box_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  plane: _geom_plane_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (geom);\n\n//# sourceURL=webpack:///./src/three/geom.js?");

/***/ }),

/***/ "./src/three/geom/box.js":
/*!*******************************!*\
  !*** ./src/three/geom/box.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _box_parseParam_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./box/parseParam.js */ \"./src/three/geom/box/parseParam.js\");\n\n\nvar box = function box() {};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (box);\n\n//# sourceURL=webpack:///./src/three/geom/box.js?");

/***/ }),

/***/ "./src/three/geom/box/parseParam.js":
/*!******************************************!*\
  !*** ./src/three/geom/box/parseParam.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar parseParam = function parseParam() {\n  var obj = {\n    width: undefined,\n    height: undefined,\n    depth: undefined,\n    widthSegments: 1,\n    heightSegments: 1,\n    depthSegments: 1\n  };\n\n  if (arguments.length === 1 && _typeof(arguments.length <= 0 ? undefined : arguments[0]) === 'object') {\n    obj = Object.assgin(obj, arguments.length <= 0 ? undefined : arguments[0]);\n  } else throw new Error('! three.geom.box invalid arguments');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (parseParam);\n\n//# sourceURL=webpack:///./src/three/geom/box/parseParam.js?");

/***/ }),

/***/ "./src/three/geom/plane.js":
/*!*********************************!*\
  !*** ./src/three/geom/plane.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _plane_parseParam_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plane/parseParam.js */ \"./src/three/geom/plane/parseParam.js\");\n\n\nvar plane = function plane() {\n  var _parseParam = _plane_parseParam_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apply(void 0, arguments),\n      width = _parseParam.width,\n      height = _parseParam.height,\n      widthSegments = _parseParam.widthSegments,\n      heightSegments = _parseParam.heightSegments;\n\n  new THREE.PlaneGeometry(width, height, widthSegments, heightSegments);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (plane);\n\n//# sourceURL=webpack:///./src/three/geom/plane.js?");

/***/ }),

/***/ "./src/three/geom/plane/parseParam.js":
/*!********************************************!*\
  !*** ./src/three/geom/plane/parseParam.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar parseParam = function parseParam() {\n  var obj = {\n    width: undefined,\n    height: undefined,\n    widthSegments: 1,\n    heightSegments: 1\n  };\n\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  if (args.length === 1 && _typeof(args[0]) === 'object') {\n    return check(Object.assign(obj, args[0]));\n  }\n\n  if (args.length === 2 && args.every(function (e) {\n    return typeof e === 'number';\n  })) {\n    obj.width = args[0];\n    obj.height = args[1];\n    return check(obj);\n  }\n\n  throw new Error(' three.geom.plane invalid parameters');\n};\n\nfunction check(obj) {\n  if (obj.width == null) throw new Error('! three.geom.plane.width is null');\n  if (obj.height == null) throw new Error('! three.geom.plane.height is null');\n  return obj;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (parseParam);\n\n//# sourceURL=webpack:///./src/three/geom/plane/parseParam.js?");

/***/ }),

/***/ "./src/three/helper.js":
/*!*****************************!*\
  !*** ./src/three/helper.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar helper = {\n  axis: function axis() {\n    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;\n    return new THREE.AxesHelper(size);\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (helper);\n\n//# sourceURL=webpack:///./src/three/helper.js?");

/***/ }),

/***/ "./src/three/material.js":
/*!*******************************!*\
  !*** ./src/three/material.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar material = {\n  basic: function basic(obj) {\n    return new THREE.MeshBasicMaterial(obj);\n  },\n  normal: function normal(obj) {\n    return new THREE.MeshNormalMaterial(obj);\n  },\n  lambert: function lambert(obj) {\n    return new THREE.MeshLambertMaterial(obj);\n  },\n  phong: function phong(obj) {\n    return new THREE.MeshPhongMaterial(obj);\n  },\n  toon: function toon(obj) {\n    return new THREE.MeshToonMaterial(obj);\n  },\n  standard: function standard(obj) {\n    return new THREE.MeshStandardMaterial(obj);\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (material);\n\n//# sourceURL=webpack:///./src/three/material.js?");

/***/ }),

/***/ "./src/three/renderer.js":
/*!*******************************!*\
  !*** ./src/three/renderer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/three/config.js\");\n/* harmony import */ var _renderer_gl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer/gl.js */ \"./src/three/renderer/gl.js\");\n\n\nvar renderer = {\n  gl: function gl(obj) {\n    _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderer = Object(_renderer_gl_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj);\n    return _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderer;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderer);\n\n//# sourceURL=webpack:///./src/three/renderer.js?");

/***/ }),

/***/ "./src/three/renderer/gl.js":
/*!**********************************!*\
  !*** ./src/three/renderer/gl.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar gl = function gl(obj) {\n  var renderer = new THREE.WebGLRenderer();\n  console.log(obj);\n\n  if (_typeof(obj) === 'object' && obj.html instanceof HTMLElement) {\n    console.log('setSize');\n    renderer.setSize(obj.html.clientWidth, obj.html.clientHeight);\n  }\n\n  return renderer;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (gl);\n\n//# sourceURL=webpack:///./src/three/renderer/gl.js?");

/***/ }),

/***/ "./src/three/scene.js":
/*!****************************!*\
  !*** ./src/three/scene.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Scene = new THREE.Scene();\nvar scene = {\n  add: function add(obj) {\n    Scene.add(obj);\n  },\n  remove: function remove(obj) {\n    Scene.remove(obj);\n  },\n  children: function children() {\n    return Scene.children();\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (scene);\n\n//# sourceURL=webpack:///./src/three/scene.js?");

/***/ })

/******/ });