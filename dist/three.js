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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _three_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./three/config.js */ \"./src/three/config.js\");\n/* harmony import */ var _three_dump_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./three/dump.js */ \"./src/three/dump.js\");\n/* harmony import */ var _three_mesh_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./three/mesh.js */ \"./src/three/mesh.js\");\n/* harmony import */ var _three_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./three/render.js */ \"./src/three/render.js\");\n/* harmony import */ var _three_camera_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./three/camera.js */ \"./src/three/camera.js\");\n/* harmony import */ var _three_material_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./three/material.js */ \"./src/three/material.js\");\n/* harmony import */ var _three_geom_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./three/geom.js */ \"./src/three/geom.js\");\n/* harmony import */ var _three_light_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./three/light.js */ \"./src/three/light.js\");\n/* harmony import */ var _three_axis_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./three/axis.js */ \"./src/three/axis.js\");\n/* harmony import */ var _three_texture_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./three/texture.js */ \"./src/three/texture.js\");\n/* harmony import */ var _three_orbitControl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./three/orbitControl.js */ \"./src/three/orbitControl.js\");\n\n\n\n\n\n\n\n\n\n\n\nwindow.three = window.three || {\n  config: _three_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  dump: _three_dump_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  render: _three_render_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  camera: _three_camera_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  material: _three_material_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  geom: _three_geom_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  light: _three_light_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  mesh: _three_mesh_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  axis: _three_axis_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  orbitControl: _three_orbitControl_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n  texture: _three_texture_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n  // Promise texture(ural);\n  vector3: function vector3(x, y, z) {\n    return new THREE.Vector3(x, y, z);\n  },\n  geometory: function geometory() {\n    return new THREE.Geometry();\n  },\n  line: function line(geom, material) {\n    return new THREE.Line(geom, material);\n  }\n};\nconsole.log('===== three module dump =====');\nconsole.log(window.three);\n\n//# sourceURL=webpack:///./src/three.js?");

/***/ }),

/***/ "./src/three/axis.js":
/*!***************************!*\
  !*** ./src/three/axis.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/three/config.js\");\n\n\nvar axis = function axis(size) {\n  var axis = new THREE.AxesHelper(size);\n  _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scene.add(axis);\n  return axis;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (axis);\n\n//# sourceURL=webpack:///./src/three/axis.js?");

/***/ }),

/***/ "./src/three/camera.js":
/*!*****************************!*\
  !*** ./src/three/camera.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/three/config.js\");\n/* harmony import */ var _camera_perspective_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camera/perspective.js */ \"./src/three/camera/perspective.js\");\n/* harmony import */ var _camera_orthographic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camera/orthographic.js */ \"./src/three/camera/orthographic.js\");\n\n\n\nvar camera = {\n  perspective: function perspective() {\n    _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].camera = _camera_perspective_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].apply(void 0, arguments);\n    return _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].camera;\n  },\n  orthographics: function orthographics() {\n    _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].camera = _camera_orthographic_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].apply(void 0, arguments);\n    return _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].camera;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (camera);\n\n//# sourceURL=webpack:///./src/three/camera.js?");

/***/ }),

/***/ "./src/three/camera/orthographic.js":
/*!******************************************!*\
  !*** ./src/three/camera/orthographic.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _orthographic_parseArgs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orthographic/parseArgs.js */ \"./src/three/camera/orthographic/parseArgs.js\");\n/* harmony import */ var _setParam_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setParam.js */ \"./src/three/camera/setParam.js\");\n\n\n\nvar orthographic = function orthographic() {\n  var obj = _orthographic_parseArgs_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apply(void 0, arguments);\n  var cam = new THREE.OrthographicCamera(obj.left, obj.right, obj.top, obj.bottom, obj.near, obj.far);\n  Object(_setParam_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cam, obj);\n  return cam;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (orthographic);\n\n//# sourceURL=webpack:///./src/three/camera/orthographic.js?");

/***/ }),

/***/ "./src/three/camera/orthographic/parseArgs.js":
/*!****************************************************!*\
  !*** ./src/three/camera/orthographic/parseArgs.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _readOnlyError(name) { throw new Error(\"\\\"\" + name + \"\\\" is read-only\"); }\n\nvar parseArgs = function parseArgs() {\n  var obj = {\n    left: null,\n    right: null,\n    top: null,\n    bottom: null,\n    near: 0.1,\n    far: 2000\n  };\n\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  if (args.length === 1 && _typeof(args[0]) === 'object') obj = (_readOnlyError(\"obj\"), Object.assign(obj, args[0]));\n\n  if (3 < args.length && args.every(function (a) {\n    return typeof a === 'number';\n  })) {\n    obj.left = args[0], obj.right = args[1], obj.top = args[2], obj.bottom = args[3];\n  }\n\n  if (4 < args.length && typeof args[4] === 'number') obj.near = args[4];\n  if (5 < args.length && typeof args[5] === 'number') obj.far = args[5];\n  if (obj.left == null || obj.right == null || obj.top == null || obj.bottom == null) throw new Error('! three.camera.orthographic invalid arguments');\n  return obj;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (parseArgs);\n\n//# sourceURL=webpack:///./src/three/camera/orthographic/parseArgs.js?");

/***/ }),

/***/ "./src/three/camera/perspective.js":
/*!*****************************************!*\
  !*** ./src/three/camera/perspective.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _perspective_parseArgs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perspective/parseArgs.js */ \"./src/three/camera/perspective/parseArgs.js\");\n/* harmony import */ var _setParam_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setParam.js */ \"./src/three/camera/setParam.js\");\n\n\n\nvar perspective = function perspective() {\n  var obj = _perspective_parseArgs_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apply(void 0, arguments);\n  var cam = new THREE.PerspectiveCamera(obj.fov, obj.aspect, obj.near, obj.far);\n  Object(_setParam_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cam, obj);\n  return cam;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (perspective);\n\n//# sourceURL=webpack:///./src/three/camera/perspective.js?");

/***/ }),

/***/ "./src/three/camera/perspective/parseArgs.js":
/*!***************************************************!*\
  !*** ./src/three/camera/perspective/parseArgs.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ \"./src/three/config.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\nvar parseArgs = function parseArgs() {\n  var aspect = 1;\n  if (_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].html != null) aspect = _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].html.clientWidth / _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].html.clientHeight;\n  var obj = {\n    fov: 50,\n    'aspect': aspect,\n    near: 0.1,\n    far: 2000\n  };\n  if (arguments.length === 0) return obj;\n  if (arguments.length === 1 && _typeof(arguments.length <= 0 ? undefined : arguments[0]) === 'object') return Object.assign(obj, arguments.length <= 0 ? undefined : arguments[0]);\n  throw new Error('! three.camera.perspective invalid argument');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (parseArgs);\n\n//# sourceURL=webpack:///./src/three/camera/perspective/parseArgs.js?");

/***/ }),

/***/ "./src/three/camera/setParam.js":
/*!**************************************!*\
  !*** ./src/three/camera/setParam.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar setParam = function setParam(cam, obj) {\n  if (obj.pos != null || obj.position != null) {\n    var pos = obj.position || obj.pos;\n\n    if (Array.isArray(pos) && pos.length === 3 && pos.every(function (a) {\n      return typeof a === 'number';\n    })) {\n      cam.position.x = pos[0], cam.position.y = pos[1], cam.position.z = pos[2];\n    }\n\n    if (_typeof(pos) === 'object') {\n      if (typeof pos.x === 'number') cam.positon.x = pos.x;\n      if (typeof pos.y === 'number') cam.positon.y = pos.y;\n      if (typeof pos.z === 'number') cam.positon.z = pos.z;\n    }\n  }\n\n  if (obj.lookAt != null && Array.isArray(obj.lookAt) && obj.lookAt.length === 3 && obj.lookAt.every(function (a) {\n    return typeof a === 'number';\n  })) {\n    cam.lookAt.apply(cam, _toConsumableArray(obj.lookAt));\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setParam);\n\n//# sourceURL=webpack:///./src/three/camera/setParam.js?");

/***/ }),

/***/ "./src/three/config.js":
/*!*****************************!*\
  !*** ./src/three/config.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_scene_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/scene.js */ \"./src/three/config/scene.js\");\n/* harmony import */ var _config_renderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/renderer.js */ \"./src/three/config/renderer.js\");\n/* harmony import */ var _config_set_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/set.js */ \"./src/three/config/set.js\");\n/* harmony import */ var _config_dump_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/dump.js */ \"./src/three/config/dump.js\");\n\n\n\n\nvar config = {\n  scene: _config_scene_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  renderer: _config_renderer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  camera: null,\n  html: null,\n  set: function set(obj) {\n    Object(_config_set_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(config, obj);\n  },\n  dump: function dump() {\n    Object(_config_dump_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(config);\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n//# sourceURL=webpack:///./src/three/config.js?");

/***/ }),

/***/ "./src/three/config/dump.js":
/*!**********************************!*\
  !*** ./src/three/config/dump.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar dump = function dump(config) {\n  console.log('===== three.config.dump START  =====');\n  if (config.camera.isPerspectiveCamera === true) console.log('> Camera : Prespective');else if (config.camera.isOrthograhicCamera === true) console.log('> Camera : Orthograhic');else if (config.camera == null) console.log('> Camera : no camera !');else console.log('> Camera : unknown !!!');\n  console.log('> aspect :', config.camera.aspect); //    console.log(config.camera.isPrespectiveCamera\n\n  console.log('===== three.config.dump FINISH =====');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dump);\n\n//# sourceURL=webpack:///./src/three/config/dump.js?");

/***/ }),

/***/ "./src/three/config/renderer.js":
/*!**************************************!*\
  !*** ./src/three/config/renderer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar renderer = new THREE.WebGLRenderer();\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderer);\n\n//# sourceURL=webpack:///./src/three/config/renderer.js?");

/***/ }),

/***/ "./src/three/config/scene.js":
/*!***********************************!*\
  !*** ./src/three/config/scene.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar scene = new THREE.Scene();\n/* harmony default export */ __webpack_exports__[\"default\"] = (scene);\n\n//# sourceURL=webpack:///./src/three/config/scene.js?");

/***/ }),

/***/ "./src/three/config/set.js":
/*!*********************************!*\
  !*** ./src/three/config/set.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar set = function set(config, obj) {\n  console.log('three.config.set');\n  config = Object.assign(config, obj);\n  console.log(config);\n\n  if (config.html != null && typeof config.renderer.setSize === 'function') {\n    console.log('setSize : ', config.html.clientWidth, config.html.clientHeight);\n    console.log(config.renderer);\n    config.renderer.setSize(config.html.clientWidth, config.html.clientHeight);\n    config.html.appendChild(config.renderer.domElement);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (set);\n\n//# sourceURL=webpack:///./src/three/config/set.js?");

/***/ }),

/***/ "./src/three/dump.js":
/*!***************************!*\
  !*** ./src/three/dump.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dump_renderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dump/renderer.js */ \"./src/three/dump/renderer.js\");\n/* harmony import */ var _dump_camera_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dump/camera.js */ \"./src/three/dump/camera.js\");\n\n\nvar dump = {\n  renderer: _dump_renderer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  camera: _dump_camera_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (dump);\n\n//# sourceURL=webpack:///./src/three/dump.js?");

/***/ }),

/***/ "./src/three/dump/camera.js":
/*!**********************************!*\
  !*** ./src/three/dump/camera.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ \"./src/three/config.js\");\n\n\nvar camera = function camera(a) {\n  if (a == null) a = _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].camera;\n  console.log(a);\n\n  if (a instanceof THREE.PerspectiveCamera) {\n    console.log('===== PerspectiveCamera  Dump =====');\n    console.log('> fov :', a.fov);\n    console.log('> aspect :', a.aspect);\n  } else if (a instanceof THREE.OrthographicCamera) {\n    console.log('===== OrthographicCamera  Dump =====');\n    console.log('> [ left, right, top, bottom ] : [', a.left, ',', a.right, ',', a.top, ',', a.bottom, ']');\n  } else throw new Error('! three.camera is invalid ');\n\n  console.log('> [ near , far ] : [', a.near, ',', a.far, ']');\n  console.log('> pos [ x, y, z ] : [', a.position.x, ',', a.position.y, ',', a.position.z, ']');\n  console.log('> rot [ x, y, z ] : [', a.rotation.x, ',', a.rotation.y, ',', a.rotation.z, ']');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (camera);\n\n//# sourceURL=webpack:///./src/three/dump/camera.js?");

/***/ }),

/***/ "./src/three/dump/renderer.js":
/*!************************************!*\
  !*** ./src/three/dump/renderer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ \"./src/three/config.js\");\n\n\nvar renderer = function renderer(a) {\n  if (a == null) a = _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderer;\n\n  if (a instanceof THREE.WebGLRenderer) {\n    console.log('===== WebGLRenderer  Dump =====');\n  } else console.log('===== unknown Renderer =====');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderer);\n\n//# sourceURL=webpack:///./src/three/dump/renderer.js?");

/***/ }),

/***/ "./src/three/geom.js":
/*!***************************!*\
  !*** ./src/three/geom.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _geom_plane_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geom/plane.js */ \"./src/three/geom/plane.js\");\n/* harmony import */ var _geom_box_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geom/box.js */ \"./src/three/geom/box.js\");\n/* harmony import */ var _geom_sphere_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geom/sphere.js */ \"./src/three/geom/sphere.js\");\n/* harmony import */ var _geom_circle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geom/circle.js */ \"./src/three/geom/circle.js\");\n/* harmony import */ var _geom_cube_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./geom/cube.js */ \"./src/three/geom/cube.js\");\n/* harmony import */ var _geom_cylinder_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./geom/cylinder.js */ \"./src/three/geom/cylinder.js\");\n/* harmony import */ var _geom_torus_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./geom/torus.js */ \"./src/three/geom/torus.js\");\n/* harmony import */ var _geom_torusKnot_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./geom/torusKnot.js */ \"./src/three/geom/torusKnot.js\");\n/* harmony import */ var _geom_lathe_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./geom/lathe.js */ \"./src/three/geom/lathe.js\");\n\n\n\n\n\n\n\n\n\nvar geom = {\n  plane: _geom_plane_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  box: _geom_box_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  sphere: _geom_sphere_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  circle: _geom_circle_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  cube: _geom_cube_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  torusKnot: _geom_torusKnot_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  lathe: _geom_lathe_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (geom);\n\n//# sourceURL=webpack:///./src/three/geom.js?");

/***/ }),

/***/ "./src/three/geom/box.js":
/*!*******************************!*\
  !*** ./src/three/geom/box.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar box = function box(width, height, depth) {\n  var widthSegments = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;\n  var heightSegments = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;\n  var depthSegments = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;\n  return new THREE.BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (box);\n\n//# sourceURL=webpack:///./src/three/geom/box.js?");

/***/ }),

/***/ "./src/three/geom/circle.js":
/*!**********************************!*\
  !*** ./src/three/geom/circle.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar circle = function circle() {\n  var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;\n  var segments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;\n  var thetaStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n  var thetaLength = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2 * Math.PI;\n  return new THREE.CircleGeometry(radius, segments, thetaStart, thetaLength);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (circle);\n\n//# sourceURL=webpack:///./src/three/geom/circle.js?");

/***/ }),

/***/ "./src/three/geom/cube.js":
/*!********************************!*\
  !*** ./src/three/geom/cube.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar cube = function cube() {\n  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n  var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;\n  var widthSegments = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;\n  var heightSegments = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;\n  var depthSegemtns = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;\n  return new THREE.CubeGeometry(width, height, depth, widthSegemtns, heightSegments, depthSegments);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (cube);\n\n//# sourceURL=webpack:///./src/three/geom/cube.js?");

/***/ }),

/***/ "./src/three/geom/cylinder.js":
/*!************************************!*\
  !*** ./src/three/geom/cylinder.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar cylinder = function cylinder() {\n  var radiusTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;\n  var radiusBottom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;\n  var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;\n  var radiusSegments = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 8;\n  var heightSegments = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;\n  var openEnded = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;\n  return new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radiusSegments, heightSegments, openEnded);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (cylinder);\n\n//# sourceURL=webpack:///./src/three/geom/cylinder.js?");

/***/ }),

/***/ "./src/three/geom/lathe.js":
/*!*********************************!*\
  !*** ./src/three/geom/lathe.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar lathe = function lathe(points) {\n  var segments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 12;\n  var phiStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n  var phiLength = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2 * Math.PI;\n  return new THREE.LatheGeometry(points, segments, phiStart, phiLength);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (lathe);\n\n//# sourceURL=webpack:///./src/three/geom/lathe.js?");

/***/ }),

/***/ "./src/three/geom/plane.js":
/*!*********************************!*\
  !*** ./src/three/geom/plane.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar plane = function plane(width, height) {\n  var widthSegments = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;\n  var heightSegments = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;\n  return new THREE.PlaneGeometry(width, height, widthSegments, heightSegments);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (plane);\n\n//# sourceURL=webpack:///./src/three/geom/plane.js?");

/***/ }),

/***/ "./src/three/geom/sphere.js":
/*!**********************************!*\
  !*** ./src/three/geom/sphere.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar sphere = function sphere() {\n  var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;\n  var widthSegments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;\n  var heightSegments = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 6;\n  var phiStart = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n  var phiLength = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2 * Math.PI;\n  var thetaStart = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;\n  var thetaLength = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : Math.PI;\n  return new THREE.SphereGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sphere);\n\n//# sourceURL=webpack:///./src/three/geom/sphere.js?");

/***/ }),

/***/ "./src/three/geom/torus.js":
/*!*********************************!*\
  !*** ./src/three/geom/torus.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar torus = function torus() {\n  var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var tube = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 40;\n  var radialSegments = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 8;\n  var tubularSegments = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 6;\n  return new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (torus);\n\n//# sourceURL=webpack:///./src/three/geom/torus.js?");

/***/ }),

/***/ "./src/three/geom/torusKnot.js":
/*!*************************************!*\
  !*** ./src/three/geom/torusKnot.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar torusKnot = function torusKnot() {\n  var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var tube = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 40;\n  var radialSegments = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 64;\n  var tubularSegments = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 8;\n  var p = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2;\n  var q = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 3;\n  var heightScale = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;\n  return new THREE.TorusKnotGeometry(radius, tube, radialSegments, tubularSegments, p, q, heightScale);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (torusKnot);\n\n//# sourceURL=webpack:///./src/three/geom/torusKnot.js?");

/***/ }),

/***/ "./src/three/light.js":
/*!****************************!*\
  !*** ./src/three/light.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/three/config.js\");\n/* harmony import */ var _light_ambient_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./light/ambient.js */ \"./src/three/light/ambient.js\");\n/* harmony import */ var _light_directional_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./light/directional.js */ \"./src/three/light/directional.js\");\n/* harmony import */ var _light_point_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./light/point.js */ \"./src/three/light/point.js\");\n/* harmony import */ var _light_spot_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./light/spot.js */ \"./src/three/light/spot.js\");\n\n\n\n\n\nvar light = {\n  ambient: function ambient() {\n    var hex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0xFFFFFF;\n\n    var light = Object(_light_ambient_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(hex);\n\n    _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scene.add(light);\n    return light;\n  },\n  directional: function directional() {\n    var hex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0xFFFFFF;\n    var intensity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0;\n\n    var light = Object(_light_directional_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(hex, intensity);\n\n    _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scene.add(light);\n    return light;\n  },\n  point: function point() {\n    var hex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0xFFFFFF;\n    var intensity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0;\n    var distance = arguments.length > 2 ? arguments[2] : undefined;\n\n    var light = Object(_light_point_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(hex, intensity, distance);\n\n    _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scene.add(light);\n    return light;\n  },\n  spot: function spot() {\n    var hex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0xFFFFFF;\n    var intensity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0;\n    var distance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.0;\n    var angle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Math.PI / 3;\n    var exponent = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 10;\n\n    var light = Object(_light_spot_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(hex, intensity, distance, angle, exponent);\n\n    _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scene.add(light);\n    return light;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (light);\n\n//# sourceURL=webpack:///./src/three/light.js?");

/***/ }),

/***/ "./src/three/light/ambient.js":
/*!************************************!*\
  !*** ./src/three/light/ambient.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar ambient = function ambient(hex) {\n  return new THREE.AmbientLight(hex);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ambient);\n\n//# sourceURL=webpack:///./src/three/light/ambient.js?");

/***/ }),

/***/ "./src/three/light/directional.js":
/*!****************************************!*\
  !*** ./src/three/light/directional.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar directional = function directional(hex, intensity) {\n  return new THREE.DirectionalLight(hex, intensity);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (directional);\n\n//# sourceURL=webpack:///./src/three/light/directional.js?");

/***/ }),

/***/ "./src/three/light/point.js":
/*!**********************************!*\
  !*** ./src/three/light/point.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar point = function point(hex, intensity, distance) {\n  return new THREE.PointLight(hex, intensity, distance);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (point);\n\n//# sourceURL=webpack:///./src/three/light/point.js?");

/***/ }),

/***/ "./src/three/light/spot.js":
/*!*********************************!*\
  !*** ./src/three/light/spot.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar spot = function spot() {\n  var hex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0xFFFFFF;\n  var intensity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0;\n  var distance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.0;\n  var angle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Math.PI / 3;\n  var exponent = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 10.;\n  return new THREE.SpotLight(hex, intensity, distance, angle, exponent);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (spot);\n\n//# sourceURL=webpack:///./src/three/light/spot.js?");

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

/***/ "./src/three/mesh.js":
/*!***************************!*\
  !*** ./src/three/mesh.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/three/config.js\");\n/* harmony import */ var _setObj3D_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setObj3D.js */ \"./src/three/setObj3D.js\");\n\n\n\nvar mesh = function mesh(geom, material, param) {\n  var mesh = new THREE.Mesh(geom, material);\n  if (param != null) Object(_setObj3D_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(mesh, param);\n  _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scene.add(mesh);\n  return mesh;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mesh);\n\n//# sourceURL=webpack:///./src/three/mesh.js?");

/***/ }),

/***/ "./src/three/orbitControl.js":
/*!***********************************!*\
  !*** ./src/three/orbitControl.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/three/config.js\");\n\n\nvar orbitControl = function orbitControl() {\n  var controls = new THREE.OrbitControls(_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].camera);\n\n  var update = function update() {\n    controls.update();\n    requestAnimationFrame(update);\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (orbitControl);\n\n//# sourceURL=webpack:///./src/three/orbitControl.js?");

/***/ }),

/***/ "./src/three/render.js":
/*!*****************************!*\
  !*** ./src/three/render.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/three/config.js\");\n\n\nvar render = function render() {\n  _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderer.render(_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scene, _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].camera);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (render);\n\n//# sourceURL=webpack:///./src/three/render.js?");

/***/ }),

/***/ "./src/three/setObj3D.js":
/*!*******************************!*\
  !*** ./src/three/setObj3D.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vector3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector3.js */ \"./src/three/vector3.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\nvar setObj3D = function setObj3D(obj, config) {\n  if (Array.isArray(config.pos) && config.pos.length === 3 && config.pos.every(function (a) {\n    return typeof a === 'number';\n  })) {\n    obj.position.x = config.pos[0];\n    obj.position.y = config.pos[1];\n    obj.position.z = config.pos[2];\n  } else if (_typeof(config.pos) === 'object') {\n    if (typeof config.pos.x === 'number') obj.position.x = config.pos.x;\n    if (typeof config.pos.y === 'number') obj.position.x = config.pos.y;\n    if (typeof config.pos.z === 'number') obj.position.x = config.pos.z;\n  }\n\n  if (Array.isArray(config.position) && config.position.length === 3 && config.position.every(function (a) {\n    return typeof a === 'number';\n  })) {\n    obj.position.x = config.position[0];\n    obj.position.y = config.position[1];\n    obj.position.z = config.position[2];\n  } else if (_typeof(config.position) === 'object') {\n    if (typeof config.position.x === 'number') obj.position.x = config.position.x;\n    if (typeof config.position.y === 'number') obj.position.x = config.position.y;\n    if (typeof config.position.z === 'number') obj.position.x = config.position.z;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setObj3D);\n\n//# sourceURL=webpack:///./src/three/setObj3D.js?");

/***/ }),

/***/ "./src/three/texture.js":
/*!******************************!*\
  !*** ./src/three/texture.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar loader = new THREE.TextureLoader();\n\nvar texture = function texture(url) {\n  console.log(url);\n  return new Promise(function (resolve, reject) {\n    loader.load(url, function (loaded) {\n      console.log('load Texture', loaded);\n      resolve(loaded);\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (texture);\n\n//# sourceURL=webpack:///./src/three/texture.js?");

/***/ }),

/***/ "./src/three/vector3.js":
/*!******************************!*\
  !*** ./src/three/vector3.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar vector3 = function vector3(val) {\n  if (Array.isArray(val) && val.length === 3 && val.every(function (a) {\n    return typeof a === 'number';\n  })) return new THREE.Vector3(val[0], val[1], val[2]);\n  if (typeof val.x === 'number' && typeof val.y === 'number' && typeof val.z === 'number') return new THREE.Vector3(val.x, val.y, val.z);\n  throw new Error('! three.vector3 invalid parameter');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vector3);\n\n//# sourceURL=webpack:///./src/three/vector3.js?");

/***/ })

/******/ });