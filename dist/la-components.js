(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "lodash"], factory);
	else if(typeof exports === 'object')
		exports["LAComponents"] = factory(require("react"), require("lodash"));
	else
		root["LAComponents"] = factory(root["React"], root["_"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Timeline = undefined;

var _Timeline = __webpack_require__(3);

var _Timeline2 = _interopRequireDefault(_Timeline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Timeline = _Timeline2.default;
exports.default = _Timeline2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ComponentSuite = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Timeline = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComponentSuite = exports.ComponentSuite = function ComponentSuite() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Timeline.Timeline, { numWeeks: 12 })
    );
};

exports.default = ComponentSuite;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Timeline = undefined;

var _lodash = __webpack_require__(5);

var _lodash2 = _interopRequireDefault(_lodash);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Timeline = exports.Timeline = function Timeline(_ref) {
    var numWeeks = _ref.numWeeks;

    var height = 100,
        width = 1000;
    var margin = 10;
    var segmentHeight = 10,
        segmentWidth = (width - 2 * margin) / numWeeks;
    var segments = _lodash2.default.range(numWeeks + 1).map(function (i) {
        var x = margin + segmentWidth * i;
        var y = height - margin;
        return _react2.default.createElement('line', { key: 'segment_' + i,
            x1: x,
            y1: y,
            x2: x,
            y2: y - segmentHeight });
    });

    return _react2.default.createElement(
        'svg',
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 ' + width + ' ' + height },
        _react2.default.createElement('line', { key: 'axis',
            x1: margin,
            y1: height - margin,
            x2: width - margin,
            y2: height - margin }),
        segments
    );
};

exports.default = Timeline;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Timeline = exports.ComponentSuite = undefined;

var _ComponentSuite = __webpack_require__(2);

var _ComponentSuite2 = _interopRequireDefault(_ComponentSuite);

var _Timeline = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ComponentSuite = _ComponentSuite2.default;
exports.Timeline = _Timeline.Timeline;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ })
/******/ ]);
});