(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "lodash"], factory);
	else if(typeof exports === 'object')
		exports["LAComponents"] = factory(require("react"), require("lodash"));
	else
		root["LAComponents"] = factory(root["React"], root["_"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_60__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(59);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TimelineItem = exports.Timeline = undefined;

var _Timeline = __webpack_require__(38);

var _Timeline2 = _interopRequireDefault(_Timeline);

var _TimelineItem = __webpack_require__(39);

var _TimelineItem2 = _interopRequireDefault(_TimelineItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Timeline = _Timeline2.default;
exports.TimelineItem = _TimelineItem2.default;
exports.default = _Timeline2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MotivatorIcon = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AttainmentMotivatorIcon = __webpack_require__(19);

var _AttainmentMotivatorIcon2 = _interopRequireDefault(_AttainmentMotivatorIcon);

var _CareerMotivatorIcon = __webpack_require__(20);

var _CareerMotivatorIcon2 = _interopRequireDefault(_CareerMotivatorIcon);

var _FamilyMotivatorIcon = __webpack_require__(21);

var _FamilyMotivatorIcon2 = _interopRequireDefault(_FamilyMotivatorIcon);

var _FearOfFailureMotivatorIcon = __webpack_require__(22);

var _FearOfFailureMotivatorIcon2 = _interopRequireDefault(_FearOfFailureMotivatorIcon);

var _MasteryMotivatorIcon = __webpack_require__(23);

var _MasteryMotivatorIcon2 = _interopRequireDefault(_MasteryMotivatorIcon);

var _MoneyMotivatorIcon = __webpack_require__(24);

var _MoneyMotivatorIcon2 = _interopRequireDefault(_MoneyMotivatorIcon);

var _OptionsMotivatorIcon = __webpack_require__(25);

var _OptionsMotivatorIcon2 = _interopRequireDefault(_OptionsMotivatorIcon);

var _ProfessionalCommunityMotivatorIcon = __webpack_require__(26);

var _ProfessionalCommunityMotivatorIcon2 = _interopRequireDefault(_ProfessionalCommunityMotivatorIcon);

var _SelfDevelopmentMotivatorIcon = __webpack_require__(27);

var _SelfDevelopmentMotivatorIcon2 = _interopRequireDefault(_SelfDevelopmentMotivatorIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var motivatorMap = {
    "attainment": _AttainmentMotivatorIcon2.default,
    "career": _CareerMotivatorIcon2.default,
    "family": _FamilyMotivatorIcon2.default,
    "fear-of-failure": _FearOfFailureMotivatorIcon2.default,
    "mastery": _MasteryMotivatorIcon2.default,
    "money": _MoneyMotivatorIcon2.default,
    "options": _OptionsMotivatorIcon2.default,
    "professional-community": _ProfessionalCommunityMotivatorIcon2.default,
    "self-development": _SelfDevelopmentMotivatorIcon2.default
};

var sizes = {
    "small": {
        height: "80px",
        width: "80px"
    },
    "medium": {
        height: "120px",
        width: "120px"
    },
    "large": {
        height: "160px",
        width: "160px"
    }
};

var MotivatorIcon = exports.MotivatorIcon = function MotivatorIcon(_ref) {
    var motivator = _ref.motivator,
        size = _ref.size;

    var Component = motivatorMap[motivator];

    var _ref2 = size ? sizes[size] : sizes['medium'],
        height = _ref2.height,
        width = _ref2.width;

    return _react2.default.createElement(Component, { height: height, width: width });
};

exports.default = MotivatorIcon;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Avatar = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Avatar = exports.Avatar = function Avatar() {
    return _react2.default.createElement('div', null);
};

exports.default = Avatar;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ComponentSuite = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Timeline = __webpack_require__(3);

var _MotivatorIcon = __webpack_require__(4);

var _MotivatorIcon2 = _interopRequireDefault(_MotivatorIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComponentSuite = exports.ComponentSuite = function ComponentSuite() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Timeline.Timeline, { numWeeks: 12 }),
        _react2.default.createElement(_MotivatorIcon2.default, { motivator: 'attainment' }),
        _react2.default.createElement(_MotivatorIcon2.default, { motivator: 'career' }),
        _react2.default.createElement(_MotivatorIcon2.default, { motivator: 'family' }),
        _react2.default.createElement(_MotivatorIcon2.default, { motivator: 'fear-of-failure' }),
        _react2.default.createElement(_MotivatorIcon2.default, { motivator: 'mastery' }),
        _react2.default.createElement(_MotivatorIcon2.default, { motivator: 'money' }),
        _react2.default.createElement(_MotivatorIcon2.default, { motivator: 'options' }),
        _react2.default.createElement(_MotivatorIcon2.default, { motivator: 'professional-community' }),
        _react2.default.createElement(_MotivatorIcon2.default, { motivator: 'self-development' })
    );
};

exports.default = ComponentSuite;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Graph = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Graph = exports.Graph = function Graph() {
    return _react2.default.createElement('div', null);
};

exports.default = Graph;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MotivatorIcon = exports.MotivatorDynamicImage = undefined;

var _MotivatorDynamicImage = __webpack_require__(34);

var _MotivatorDynamicImage2 = _interopRequireDefault(_MotivatorDynamicImage);

var _MotivatorIcon = __webpack_require__(4);

var _MotivatorIcon2 = _interopRequireDefault(_MotivatorIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.MotivatorDynamicImage = _MotivatorDynamicImage2.default;
exports.MotivatorIcon = _MotivatorIcon2.default;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Tree = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tree = exports.Tree = function Tree() {
    return _react2.default.createElement('div', null);
};

exports.default = Tree;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 160 160" }, this.props),
        _react2.default.createElement("path", { className: "st0", d: "M144.2 95.8c0 35.5-28.7 64.2-64.2 64.2s-64.2-28.7-64.2-64.2S44.5 31.6 80 31.6s64.2 28.7 64.2 64.2" }),
        _react2.default.createElement("path", { className: "st1", d: "M124.9 58.2c-4.9-1.7-11.3 0-15.6 3.7v-.1c0-4.7-.5-7.8-.5-7.9 0-.1-.1-.2-.1-.2 0-.1-.1-.2-.1-.3-.1-.1-.1-.2-.2-.3-.1-.1-.1-.2-.2-.2-.1-.1-.2-.2-.3-.2-.1-.1-.2-.1-.3-.1-.1 0-.3-.1-.4-.1H53c-.9 0-1.7.7-1.9 1.6 0 .1-.5 3.1-.5 7.9-4.3-3.6-10.6-5.3-15.5-3.6-4.4 1.5-6.5 5.5-5.7 10.8 1.3 8.8 11 14.3 19.5 19.1 5.3 3 10.3 5.9 12.4 9 3.5 5.1.1 8-.3 8.3-.7.5-.9 1.6-.4 2.3.3.4.8.7 1.3.7.3 0 .7-.1 1-.3 1.3-1 3-3.1 3.2-6 3.3 4.7 5.5 8.6 6.9 12.2 1 2.6 1.7 5 2.1 7.6.4 2.6.5 5.2.5 8.2 0 5.7-1.9 11.1-4.8 14.8-1.5 1.9-3.2 3.4-5.1 4.4-1.9 1-3.9 1.6-6 1.6-.5 0-1 .2-1.4.6-.4.4-.6.9-.6 1.4s.2 1 .6 1.4c.4.4.9.6 1.4.6h40.4c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4s-.2-1-.6-1.4c-.4-.4-.9-.6-1.4-.6-2.1 0-4.1-.6-6-1.6-2.8-1.5-5.3-4.2-7.1-7.6-1.8-3.4-2.8-7.4-2.8-11.7 0-3 .1-5.7.5-8.2.6-3.8 1.7-7.4 3.9-11.6 1.3-2.5 3-5.2 5.1-8.3.2 2.9 1.8 5 3.2 6 .3.2.6.3 1 .3.5 0 1-.2 1.3-.7.5-.7.4-1.8-.3-2.3-.4-.3-3.8-3.2-.3-8.3 2.1-3.1 7.1-5.9 12.4-9 8.5-4.8 18.2-10.4 19.5-19.1 1-5.3-1.1-9.2-5.6-10.8zM32.6 68.6c-.6-3.7.7-6.2 3.6-7.2 4.3-1.5 11.5.7 14.6 5.7.3 3.1.8 6.6 1.7 10.3 1 3.9 2.5 8 4.7 12-2.1-1.4-4.4-2.7-6.8-4-7.8-4.6-16.7-9.6-17.8-16.8zm94.8 0c-1.1 7.2-10 12.3-17.9 16.7-2.4 1.4-4.8 2.7-6.9 4.1 2.2-4 3.8-8.1 4.8-12 .9-3.6 1.5-7.1 1.7-10.2 3.1-5.1 10.3-7.3 14.7-5.8 2.9 1 4.2 3.5 3.6 7.2z" }),
        _react2.default.createElement("path", { className: "st2", d: "M91.6 99.6c1.4-1.9 2.9-4 4.6-6.2 4.2-5.5 6.7-11.4 8.1-17 1.4-5.6 1.8-10.7 1.8-14.7 0-4.3-.4-7.1-.5-7.2-.1-.8-.9-1.3-1.7-1.2-.8.1-1.3.9-1.2 1.7 0 0 .4 2.6.4 6.7 0 3.7-.4 8.7-1.7 13.9-1.3 5.3-3.7 10.9-7.6 15.9-1.7 2.2-3.3 4.3-4.7 6.3-.5.7-.3 1.6.4 2 .7.6 1.6.5 2.1-.2M89.7 150.2c-5.1-4.3-8.7-11.8-8.6-20 0-4.5.3-8.4 1.3-12.3 1-3.9 2.7-7.9 5.5-12.6.4-.7.2-1.6-.5-2-.7-.4-1.6-.2-2 .5-3 4.9-4.8 9.2-5.9 13.4-1.1 4.2-1.4 8.3-1.4 13 0 9.1 3.8 17.3 9.7 22.2.6.5 1.5.4 2-.2.6-.6.5-1.5-.1-2M123.8 61.4c-4.3-1.5-11.6.7-14.6 5.7-.5 6.5-2.2 14.5-6.5 22.3 2.1-1.4 4.4-2.7 6.8-4.1 7.9-4.5 16.8-9.6 17.9-16.7.6-3.7-.7-6.2-3.6-7.2m2.2 7c-1 6.5-9.6 11.4-17.2 15.8-.9.5-1.8 1.1-2.8 1.6 2.4-5.6 4-11.7 4.5-18.3 2.9-4.2 9.2-6.1 12.8-4.8.8.3 3.4 1.2 2.7 5.7zM36.2 61.4c-2.9 1-4.1 3.5-3.6 7.2 1.1 7.2 10 12.3 17.9 16.7 2.4 1.3 4.7 2.7 6.7 4-4.3-7.8-6-15.9-6.5-22.4-3.1-4.9-10.3-7-14.5-5.5m14.9 22.7c-7.6-4.3-16.2-9.2-17.2-15.8-.7-4.6 1.8-5.4 2.6-5.7 3.7-1.3 10 .6 12.8 4.8.6 6.6 2.1 12.7 4.5 18.3-.8-.5-1.7-1.1-2.7-1.6z" }),
        _react2.default.createElement("path", { className: "st3", d: "M40.9 129.7l77.9.1.4-16.4-78.3-.2zM50.9 35.7l5.5-3.8 2.1 6.3 6.7.1-1.9 6.4 5.3 4-5.3 4 1.9 6.4-6.7.1-2.1 6.3-5.5-3.8-5.5 3.8-2.1-6.3-6.7-.1 2-6.4-5.4-4 5.4-4-2-6.4 6.7-.1 2.1-6.3z" }),
        _react2.default.createElement("path", { className: "st4", d: "M40.9 129.7v-16.5L61 134.1l.1 16.5zM99.1 150.8v-16.5l20.1-20.1.1 15.6z" }),
        _react2.default.createElement("path", { className: "st3", d: "M28 142.2l-6.1 8.8 39.2-.4-.1-16.5h-.1l-39.1.4zM132.1 142.5l6.1 8.3H99.1v-16.5h39.1z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 160 160" }, this.props),
        _react2.default.createElement("path", { className: "st0", d: "M144.2 95.8c0 35.5-28.7 64.2-64.2 64.2s-64.2-28.7-64.2-64.2S44.5 31.6 80 31.6s64.2 28.7 64.2 64.2" }),
        _react2.default.createElement("path", { className: "st1 st2", d: "M72 48.4v24.1h-9.6v32.1H47.1V90.2L31 104.6V74.1L16.4 87.3c-.4 2.8-.6 5.6-.6 8.5 0 35.2 28.3 63.7 63.4 64.2V48.4H72z" }),
        _react2.default.createElement("path", { className: "st3", d: "M34 31.7H11c-3.1 0-5.7-2.5-5.7-5.7s2.5-5.7 5.7-5.7h23c3.1 0 5.7 2.5 5.7 5.7s-2.6 5.7-5.7 5.7z" }),
        _react2.default.createElement("path", { className: "st3", d: "M42 21.4H31c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4h11c1.9 0 3.4 1.5 3.4 3.4 0 1.8-1.5 3.4-3.4 3.4zM19 13.3h-4.3c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4H19c1.9 0 3.4 1.5 3.4 3.4s-1.5 3.4-3.4 3.4z" }),
        _react2.default.createElement("path", { className: "st4", d: "M39.3 34h-9.6l-4 96c4.6 7.3 10.7 13.7 17.8 18.6L39.3 34z" }),
        _react2.default.createElement("path", { className: "st5", d: "M53.8 58.1l-3.9 94.4c5.3 2.8 11.1 5 17.3 6.2L63.4 58.1h-9.6z" }),
        _react2.default.createElement("path", { className: "st3", d: "M62.1 53.5h-11c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4h11c1.9 0 3.4 1.5 3.4 3.4 0 1.8-1.5 3.4-3.4 3.4z" }),
        _react2.default.createElement("path", { className: "st3", d: "M54.1 49.5H38.3c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4h15.8c1.9 0 3.4 1.5 3.4 3.4s-1.6 3.4-3.4 3.4z" }),
        _react2.default.createElement("path", { className: "st4", d: "M39.3 34h-9.6l-4 96c4.6 7.3 10.7 13.7 17.8 18.6L39.3 34z" }),
        _react2.default.createElement("path", { className: "st6", d: "M32.7 49.5c-.6 0-1-.5-1-1l.3-6.7c0-.5.5-.9 1-.9s.9.5.9 1l-.3 6.7c0 .5-.4.9-.9.9zM31 89.4c-.6 0-1-.5-1-1l1.4-33.8c0-.5.5-.9 1-.9s.9.5.9 1L32 88.5c0 .5-.4.9-1 .9z" }),
        _react2.default.createElement("path", { className: "st4", d: "M56.7 75.8c-.6 0-1-.5-1-1l.3-8.4c0-.5.4-.9 1-.9.5 0 .9.5.9 1l-.3 8.4c0 .5-.4.9-.9.9zM55.4 106.7c-.6 0-1-.5-1-1L55.5 80c0-.5.5-.9 1-.9s.9.5.9 1l-1.1 25.7c0 .5-.4.9-.9.9z" }),
        _react2.default.createElement("path", { className: "st7", d: "M91 159.1V21.4c0-3.8-3.1-6.9-6.9-6.9-3.8 0-6.9 3.1-6.9 6.9v138.5c.9 0 1.9.1 2.8.1 3.7 0 7.4-.3 11-.9z" }),
        _react2.default.createElement("path", { className: "st8", d: "M139.3 120.5v-99c0-3.8-3.1-6.9-6.9-6.9H84.1c3.8 0 6.9 3.1 6.9 6.9V159c21.9-3.7 40-18.6 48.3-38.5z" }),
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("path", { className: "st9", d: "M99.9 45.5c-.2 0-.4-.1-.6-.1.2 0 .4.1.6.1zM99.3 45.4c2-.6 3.4-2.4 3.4-4.5v-1.5h-6.9v1.5c.1 2.1 1.5 3.9 3.5 4.5zM100.2 45.5h-.3.3zM100.6 45.6h-.3.3z" }),
          _react2.default.createElement("path", { className: "st10", d: "M100.3 30.2h.3-.3zM99.9 30.3h.3-.3zM99.3 30.4c.2-.1.4-.1.6-.1-.2 0-.4.1-.6.1zM102.7 35c0-2.2-1.5-4-3.4-4.5-2 .6-3.4 2.4-3.4 4.5v4.4h6.9V35z" }),
          _react2.default.createElement("path", { className: "st11", d: "M99.3 45.4zM99.9 30.3zM100.3 45.5s-.1 0 0 0c-.1 0 0 0 0 0zM99.3 30.4zM100.2 30.3s.1-.1 0 0c.1-.1 0 0 0 0zM100 45.5c-.1 0-.1 0 0 0-.1 0-.1 0 0 0zM102.7 40.8c0 2.2-1.5 4-3.4 4.5.2.1.4.1.6.1h.7c2.6 0 4.7-2.1 4.7-4.7v-1.5h-2.6v1.6z" }),
          _react2.default.createElement("path", { className: "st11", d: "M102.7 35v4.4h2.6V35c0-2.6-2.1-4.7-4.7-4.7h-.3-.4c-.2 0-.4.1-.6.1 2 .6 3.4 2.4 3.4 4.6z" }),
          _react2.default.createElement("path", { className: "st8", d: "M99.9 67c-.2 0-.4-.1-.6-.1 2-.6 3.4-2.4 3.4-4.5v-1.5h-6.9v1.5c.1 2.4 1.8 4.3 4.1 4.6zM100.2 67.1h-.3.3zM100.6 67.1h-.3.3z" }),
          _react2.default.createElement("path", { className: "st7", d: "M100.3 51.8h.3-.3zM99.3 51.9c.2-.1.4-.1.6-.1-.2 0-.4.1-.6.1zM102.7 56.5c0-2.2-1.5-4-3.4-4.5-2 .6-3.4 2.4-3.4 4.5v4.4h6.9v-4.4zM100 51.8h.2-.2z" }),
          _react2.default.createElement("path", { className: "st11", d: "M99.3 51.9zM100.2 51.8s.1 0 0 0c.1 0 0 0 0 0zM100.3 67.1s-.1 0 0 0c-.1 0 0 0 0 0zM99.9 67zM99.9 51.8zM102.7 62.4c0 2.2-1.5 4-3.4 4.5.2.1.4.1.6.1h.7c2.6 0 4.7-2.1 4.7-4.7v-1.5h-2.6v1.6z" }),
          _react2.default.createElement("path", { className: "st11", d: "M102.7 56.5v4.4h2.6v-4.4c0-2.6-2.1-4.7-4.7-4.7h-.3H100h-.1c-.2 0-.4.1-.6.1 2 .6 3.4 2.4 3.4 4.6z" }),
          _react2.default.createElement("path", { className: "st9", d: "M99.9 88.6c-.2 0-.4-.1-.6-.1.2 0 .4 0 .6.1zM100.2 88.6h-.2.2zM99.3 88.4c2-.6 3.4-2.4 3.4-4.5v-1.5h-6.9v1.5c.1 2.2 1.5 4 3.5 4.5zM100.6 88.6h-.3.3z" }),
          _react2.default.createElement("path", { className: "st10", d: "M102.7 78c0-2.2-1.5-4-3.4-4.5.2-.1.4-.1.6-.1-2.3.3-4.1 2.3-4.1 4.7v4.4h6.9V78zM100.3 73.3h.3-.3zM99.9 73.3h.3-.3z" }),
          _react2.default.createElement("path", { className: "st11", d: "M99.3 88.4zM99.9 73.3zM100 88.6c-.1 0-.1 0 0 0-.1 0-.1 0 0 0zM100.3 88.6s-.1 0 0 0c-.1 0 0 0 0 0zM100.2 73.3s.1 0 0 0c.1 0 0 0 0 0zM102.7 83.9c0 2.2-1.5 4-3.4 4.5.2.1.4.1.6.1H100.5c2.6 0 4.7-2.1 4.7-4.7v-1.5h-2.6v1.6z" }),
          _react2.default.createElement("path", { className: "st11", d: "M102.7 78v4.4h2.6V78c0-2.6-2.1-4.7-4.7-4.7h-.3-.4c-.2 0-.4.1-.6.1 2 .6 3.4 2.4 3.4 4.6z" }),
          _react2.default.createElement("path", { className: "st9", d: "M99.9 110.1c-.2 0-.4-.1-.6-.1 2-.6 3.4-2.4 3.4-4.5V104h-6.9v1.5c.1 2.3 1.8 4.3 4.1 4.6zM100.2 110.1h-.3.3zM100.6 110.1h-.3.3z" }),
          _react2.default.createElement("path", { className: "st10", d: "M102.7 99.5c0-2.2-1.5-4-3.4-4.5-2 .6-3.4 2.4-3.4 4.5v4.4h6.9v-4.4zM100.3 94.8h.3-.3zM100 94.9h.3c-.2-.1-.3 0-.3 0zM99.3 95c.2-.1.4-.1.6-.1-.2 0-.4 0-.6.1z" }),
          _react2.default.createElement("path", { className: "st11", d: "M99.9 110.1zM99.9 94.9zM100.3 110.1s-.1 0 0 0c-.1 0 0 0 0 0zM99.3 95zM100.2 94.8s.1 0 0 0c.1 0 0 0 0 0zM102.7 105.4c0 2.2-1.5 4-3.4 4.5.2.1.4.1.6.1h.7c2.6 0 4.7-2.1 4.7-4.7v-1.5h-2.6v1.6z" }),
          _react2.default.createElement("path", { className: "st11", d: "M102.7 99.5v4.4h2.6v-4.4c0-2.6-2.1-4.7-4.7-4.7h-.3-.4c-.2 0-.4.1-.6.1 2 .7 3.4 2.5 3.4 4.6z" }),
          _react2.default.createElement("path", { className: "st8", d: "M115.6 45.5h-.3.3zM115.9 45.6h-.3.3zM114.6 45.4c2-.6 3.4-2.4 3.4-4.5v-1.5h-6.9v1.5c.1 2.1 1.6 3.9 3.5 4.5zM115.3 45.5c-.2 0-.4-.1-.6-.1.2 0 .4.1.6.1z" }),
          _react2.default.createElement("path", { className: "st7", d: "M115.3 30.3h.3-.3zM114.7 30.4c.2-.1.4-.1.6-.1-.2 0-.4.1-.6.1zM118.1 35c0-2.2-1.5-4-3.4-4.5-2 .6-3.4 2.4-3.4 4.5v4.4h6.9V35zM115.6 30.2h.3-.3z" }),
          _react2.default.createElement("path", { className: "st11", d: "M115.3 30.3zM115.6 45.5zM114.6 30.4c.1 0 .1 0 0 0 .1 0 .1 0 0 0zM115.6 30.3s0-.1 0 0c0-.1 0 0 0 0zM115.3 45.5zM114.6 45.4c.1 0 .1 0 0 0 .1 0 .1 0 0 0zM118.1 40.8c0 2.2-1.5 4-3.4 4.5.2.1.4.1.6.1h.7c2.6 0 4.7-2.1 4.7-4.7v-1.5h-2.6v1.6z" }),
          _react2.default.createElement("path", { className: "st11", d: "M118.1 35v4.4h2.6V35c0-2.6-2.1-4.7-4.7-4.7h-.3-.4c-.2 0-.4.1-.6.1 1.9.6 3.4 2.4 3.4 4.6z" }),
          _react2.default.createElement("path", { className: "st9", d: "M115.6 67.1h-.3.3zM115.3 67c-.2 0-.4-.1-.6-.1 2-.6 3.4-2.4 3.4-4.5v-1.5h-6.9v1.5c0 2.4 1.8 4.3 4.1 4.6zM115.9 67.1h-.3.3z" }),
          _react2.default.createElement("path", { className: "st10", d: "M115 51.9c.1 0 .2 0 .3-.1-.1 0-.2 0-.3.1zM115.6 51.8h.3-.3zM118.1 56.5c0-2.2-1.5-4-3.4-4.5-2 .6-3.4 2.4-3.4 4.5v4.4h6.9v-4.4zM114.7 51.9c.1 0 .2-.1.3-.1-.1.1-.2.1-.3.1zM115.3 51.8h0z" }),
          _react2.default.createElement("path", { className: "st11", d: "M114.6 51.9c.1 0 .1 0 0 0 .1 0 .1 0 0 0zM115 51.9zM115.5 51.8c.1 0 .1 0 0 0 .1 0 .1 0 0 0zM115.3 67zM115.6 67.1zM115.3 51.8zM118.1 62.4c0 2.2-1.5 4-3.4 4.5.2.1.4.1.6.1h.7c2.6 0 4.7-2.1 4.7-4.7v-1.5h-2.6v1.6z" }),
          _react2.default.createElement("path", { className: "st11", d: "M118.1 56.5v4.4h2.6v-4.4c0-2.6-2.1-4.7-4.7-4.7h-.3H115.4h-.1c-.1 0-.2 0-.3.1-.1 0-.2 0-.3.1 1.9.5 3.4 2.3 3.4 4.5z" }),
          _react2.default.createElement("path", { className: "st9", d: "M114.6 88.4c2-.6 3.4-2.4 3.4-4.5v-1.5h-6.9v1.5c.1 2.2 1.6 4 3.5 4.5zM115.9 88.6h-.3.3zM115.6 88.6h-.2.2zM115.3 88.6c-.2 0-.4-.1-.6-.1.2 0 .4 0 .6.1z" }),
          _react2.default.createElement("path", { className: "st10", d: "M115.6 73.3h.3-.3zM118.1 78c0-2.2-1.5-4-3.4-4.5.2-.1.4-.1.6-.1-2.3.3-4.1 2.3-4.1 4.7v4.4h6.9V78zM115.3 73.3h.3-.3z" }),
          _react2.default.createElement("path", { className: "st11", d: "M115.6 88.6zM115.6 73.3zM114.6 88.4h.1-.1zM115.3 88.6zM115.3 73.3zM118.1 83.9c0 2.2-1.5 4-3.4 4.5.2.1.4.1.6.1h.7c2.6 0 4.7-2.1 4.7-4.7v-1.5h-2.6v1.6z" }),
          _react2.default.createElement("path", { className: "st11", d: "M118.1 78v4.4h2.6V78c0-2.6-2.1-4.7-4.7-4.7h-.3-.4c-.2 0-.4.1-.6.1 1.9.6 3.4 2.4 3.4 4.6z" }),
          _react2.default.createElement("path", { className: "st8", d: "M115.6 110.1h-.3.3zM115.9 110.1h-.3.3zM115.3 110.1c-.2 0-.4-.1-.6-.1 2-.6 3.4-2.4 3.4-4.5V104h-6.9v1.5c0 2.3 1.8 4.3 4.1 4.6z" }),
          _react2.default.createElement("path", { className: "st7", d: "M115.6 94.8h.3-.3zM118.1 99.5c0-2.2-1.5-4-3.4-4.5-2 .6-3.4 2.4-3.4 4.5v4.4h6.9v-4.4zM115.3 94.9h.3c-.1-.1-.2 0-.3 0zM114.7 95c.2-.1.4-.1.6-.1-.2 0-.4 0-.6.1z" }),
          _react2.default.createElement("path", { className: "st11", d: "M115.3 94.9zM114.6 95c.1 0 .1 0 0 0 .1 0 .1 0 0 0zM115.3 110.1zM115.6 94.8zM115.6 110.1zM118.1 105.4c0 2.2-1.5 4-3.4 4.5.2.1.4.1.6.1h.7c2.6 0 4.7-2.1 4.7-4.7v-1.5h-2.6v1.6z" }),
          _react2.default.createElement("path", { className: "st11", d: "M118.1 99.5v4.4h2.6v-4.4c0-2.6-2.1-4.7-4.7-4.7h-.3-.4c-.2 0-.4.1-.6.1 1.9.7 3.4 2.5 3.4 4.6z" }),
          _react2.default.createElement("path", { className: "st9", d: "M130 45.4c2-.6 3.4-2.4 3.4-4.5v-1.5h-6.9v1.5c.1 2.1 1.5 3.9 3.5 4.5zM131.3 45.6h-.3.3zM130.6 45.5c-.2 0-.4-.1-.6-.1.2 0 .4.1.6.1zM130.9 45.5h-.3.3z" }),
          _react2.default.createElement("path", { className: "st10", d: "M133.4 35c0-2.2-1.5-4-3.4-4.5-2 .6-3.4 2.4-3.4 4.5v4.4h6.9V35zM130 30.4c.2-.1.4-.1.6-.1-.2 0-.4.1-.6.1zM130.6 30.3h.3-.3zM131 30.2h.3-.3z" }),
          _react2.default.createElement("path", { className: "st11", d: "M130.9 30.3s.1-.1 0 0c.1-.1 0 0 0 0zM130.6 30.3zM130.7 45.5c-.1 0-.1 0 0 0-.1 0-.1 0 0 0zM130 45.4zM131 45.5s-.1 0 0 0c-.1 0 0 0 0 0zM130 30.4zM133.4 40.8c0 2.2-1.5 4-3.4 4.5.2.1.4.1.6.1h.7c2.6 0 4.7-2.1 4.7-4.7v-1.5h-2.6v1.6z" }),
          _react2.default.createElement("path", { className: "st11", d: "M133.4 35v4.4h2.6V35c0-2.6-2.1-4.7-4.7-4.7h-.3-.4c-.2 0-.4.1-.6.1 2 .6 3.4 2.4 3.4 4.6z" }),
          _react2.default.createElement("path", { className: "st8", d: "M131.3 67.1h-.3.3zM130.9 67.1h-.3.3zM130.6 67c-.2 0-.4-.1-.6-.1 2-.6 3.4-2.4 3.4-4.5v-1.5h-6.9v1.5c.1 2.4 1.8 4.3 4.1 4.6z" }),
          _react2.default.createElement("path", { className: "st7", d: "M130.7 51.8h.2-.2zM130 51.9c.2-.1.4-.1.6-.1-.2 0-.4.1-.6.1zM133.4 56.5c0-2.2-1.5-4-3.4-4.5-2 .6-3.4 2.4-3.4 4.5v4.4h6.9v-4.4zM131 51.8h.3-.3z" }),
          _react2.default.createElement("path", { className: "st11", d: "M130.6 67zM130 51.9zM131 67.1s-.1 0 0 0c-.1 0 0 0 0 0zM130.6 51.8zM130.9 51.8s.1 0 0 0c.1 0 0 0 0 0zM133.4 62.4c0 2.2-1.5 4-3.4 4.5.2.1.4.1.6.1h.7c2.6 0 4.7-2.1 4.7-4.7v-1.5h-2.6v1.6z" }),
          _react2.default.createElement("path", { className: "st11", d: "M133.4 56.5v4.4h2.6v-4.4c0-2.6-2.1-4.7-4.7-4.7h-.3H130.7h-.1c-.2 0-.4.1-.6.1 2 .6 3.4 2.4 3.4 4.6z" }),
          _react2.default.createElement("path", { className: "st8", d: "M131.3 88.6h-.3.3zM130.6 88.6c-.2 0-.4-.1-.6-.1.2 0 .4 0 .6.1zM130.9 88.6h-.2.2zM130 88.4c2-.6 3.4-2.4 3.4-4.5v-1.5h-6.9v1.5c.1 2.2 1.5 4 3.5 4.5z" }),
          _react2.default.createElement("path", { className: "st7", d: "M133.4 78c0-2.2-1.5-4-3.4-4.5.2-.1.4-.1.6-.1-2.3.3-4.1 2.3-4.1 4.7v4.4h6.9V78zM130.6 73.3h.3-.3zM131 73.3h.3-.3z" }),
          _react2.default.createElement("path", { className: "st11", d: "M130.6 73.3zM130 88.4zM131 88.6s-.1 0 0 0c-.1 0 0 0 0 0zM130.7 88.6c-.1 0-.1 0 0 0-.1 0-.1 0 0 0zM130.9 73.3s.1 0 0 0c.1 0 0 0 0 0zM133.4 83.9c0 2.2-1.5 4-3.4 4.5.2.1.4.1.6.1H131.2c2.6 0 4.7-2.1 4.7-4.7v-1.5h-2.6v1.6z" }),
          _react2.default.createElement("path", { className: "st11", d: "M133.4 78v4.4h2.6V78c0-2.6-2.1-4.7-4.7-4.7h-.3-.4c-.2 0-.4.1-.6.1 2 .6 3.4 2.4 3.4 4.6z" }),
          _react2.default.createElement("path", { className: "st9", d: "M131.3 110.1h-.3.3zM130.6 110.1c-.2 0-.4-.1-.6-.1 2-.6 3.4-2.4 3.4-4.5V104h-6.9v1.5c.1 2.3 1.8 4.3 4.1 4.6zM130.9 110.1h-.3.3z" }),
          _react2.default.createElement("path", { className: "st10", d: "M130 95c.2-.1.4-.1.6-.1-.2 0-.4 0-.6.1zM131 94.8h.3-.3zM133.4 99.5c0-2.2-1.5-4-3.4-4.5-2 .6-3.4 2.4-3.4 4.5v4.4h6.9v-4.4zM130.7 94.9h.3c-.2-.1-.3 0-.3 0z" }),
          _react2.default.createElement("path", { className: "st11", d: "M130.6 94.9zM130.9 94.8s.1 0 0 0c.1 0 0 0 0 0zM131 110.1s-.1 0 0 0c-.1 0 0 0 0 0zM130 95zM130.6 110.1zM133.4 105.4c0 2.2-1.5 4-3.4 4.5.2.1.4.1.6.1h.7c2.6 0 4.7-2.1 4.7-4.7v-1.5h-2.6v1.6z" }),
          _react2.default.createElement("path", { className: "st11", d: "M133.4 99.5v4.4h2.6v-4.4c0-2.6-2.1-4.7-4.7-4.7h-.3-.4c-.2 0-.4.1-.6.1 2 .7 3.4 2.5 3.4 4.6z" }),
          _react2.default.createElement("path", { className: "st9", d: "M99.6 131.6c-.1 0-.2 0-.3-.1.1 0 .2.1.3.1zM100.2 131.7h-.2c0-.1.1-.1.2 0zM100.6 131.7h-.3.3zM99.9 131.6c-.1 0-.2 0-.3-.1.1.1.2.1.3.1zM99.3 131.5c2-.6 3.4-2.4 3.4-4.5v-1.5h-6.9v1.5c.1 2.1 1.5 3.9 3.5 4.5z" }),
          _react2.default.createElement("path", { className: "st10", d: "M100.3 116.4h.3c-.1-.1-.2 0-.3 0zM102.7 121.1c0-2.2-1.5-4-3.4-4.5.3-.1.6-.1.9-.2-2.4.2-4.4 2.2-4.4 4.7v4.4h6.9v-4.4z" }),
          _react2.default.createElement("path", { className: "st11", d: "M99.6 131.6zM100.3 131.7s-.1 0 0 0c-.1 0 0 0 0 0zM100.2 116.4s.1 0 0 0c.1 0 0 0 0 0zM100 131.6c-.1 0-.1 0 0 0-.1 0-.1 0 0 0zM99.3 131.5zM102.7 127c0 2.2-1.5 4-3.4 4.5.1 0 .2.1.3.1.1 0 .2 0 .3.1h.7c2.6 0 4.7-2.1 4.7-4.7v-1.5h-2.6v1.5z" }),
          _react2.default.createElement("path", { className: "st11", d: "M102.7 121.1v4.4h2.6v-4.4c0-2.6-2.1-4.7-4.7-4.7h-.3-.1c-.3 0-.6.1-.9.2 2 .5 3.4 2.3 3.4 4.5z" }),
          _react2.default.createElement("path", { className: "st9", d: "M115.9 131.7h-.3.3zM115.3 131.6c-.1 0-.2 0-.3-.1.1.1.2.1.3.1zM114.6 131.5c2-.6 3.4-2.4 3.4-4.5v-1.5h-6.9v1.5c.1 2.1 1.6 3.9 3.5 4.5zM115 131.6c-.1 0-.2 0-.3-.1.1 0 .2.1.3.1zM115.5 131.7h-.2c.1-.1.2-.1.2 0z" }),
          _react2.default.createElement("path", { className: "st10", d: "M118.1 121.1c0-2.2-1.5-4-3.4-4.5.2-.1.4-.1.6-.1-2.3.3-4.1 2.3-4.1 4.7v4.4h6.9v-4.5zM115.6 116.4h.3c-.1-.1-.2 0-.3 0zM115.3 116.4h.3-.3z" }),
          _react2.default.createElement("path", { className: "st11", d: "M115.3 131.6zM115 131.6zM115.3 116.4zM114.6 131.5c.1 0 .1 0 0 0 .1 0 .1 0 0 0zM115.6 131.7zM115.6 116.4zM118.1 127c0 2.2-1.5 4-3.4 4.5.1 0 .2.1.3.1.1 0 .2 0 .3.1h.7c2.6 0 4.7-2.1 4.7-4.7v-1.5h-2.6v1.5z" }),
          _react2.default.createElement("path", { className: "st11", d: "M118.1 121.1v4.4h2.6v-4.4c0-2.6-2.1-4.7-4.7-4.7h-.3-.4c-.2 0-.4.1-.6.1 1.9.6 3.4 2.4 3.4 4.6z" }),
          _react2.default.createElement("path", { className: "st8", d: "M130.3 131.6c-.1 0-.2 0-.3-.1.1 0 .2.1.3.1zM133.4 127v-1.5h-6.9v1.5c0 2.2 1.5 4 3.4 4.5 2.1-.6 3.5-2.4 3.5-4.5zM130.9 131.7h-.2c0-.1.1-.1.2 0zM130.6 131.6c-.1 0-.2 0-.3-.1.1.1.2.1.3.1zM131.3 131.7h-.3.3z" }),
          _react2.default.createElement("path", { className: "st7", d: "M130.6 116.4h.3-.3zM133.4 121.1c0-2.2-1.5-4-3.4-4.5.2-.1.4-.1.6-.1-2.3.3-4.1 2.3-4.1 4.7v4.4h6.9v-4.5zM131 116.4h.3c-.1-.1-.2 0-.3 0z" }),
          _react2.default.createElement("path", { className: "st11", d: "M130.9 116.4s.1 0 0 0c.1 0 0 0 0 0zM131 131.7s-.1 0 0 0c-.1 0 0 0 0 0zM130 131.5zM130.6 116.4zM130.3 131.6zM130.7 131.6c-.1 0-.1 0 0 0-.1 0-.1 0 0 0zM136 127v-1.5h-2.6v1.5c0 2.2-1.5 4-3.4 4.5.1 0 .2.1.3.1.1 0 .2 0 .3.1h.7c.9 0 1.7-.2 2.4-.7.8-1.2 1.6-2.5 2.3-3.8v-.2z" }),
          _react2.default.createElement("path", { className: "st11", d: "M133.4 121.1v4.4h2.6v-4.4c0-2.6-2.1-4.7-4.7-4.7h-.3-.4c-.2 0-.4.1-.6.1 2 .6 3.4 2.4 3.4 4.6z" }),
          _react2.default.createElement("path", { className: "st9", d: "M99.9 153.2c-.2 0-.4-.1-.6-.1.2 0 .4 0 .6.1zM100.6 153.2h-.3.3zM100.2 153.2h-.2.2zM99.3 153c2-.6 3.4-2.4 3.4-4.5V147h-6.9v1.5c.1 2.1 1.5 4 3.5 4.5z" }),
          _react2.default.createElement("path", { className: "st10", d: "M100.3 137.9h.3-.3zM99.9 137.9h.3-.3zM102.7 142.6c0-2.2-1.5-4-3.4-4.5.2-.1.4-.1.6-.1-2.3.3-4.1 2.3-4.1 4.7v4.4h6.9v-4.5z" }),
          _react2.default.createElement("path", { className: "st11", d: "M100 153.2c-.1 0-.1 0 0 0-.1 0-.1 0 0 0zM99.3 153zM100.2 137.9s.1 0 0 0c.1 0 0 0 0 0zM100.3 153.2s-.1 0 0 0c-.1 0 0 0 0 0zM99.9 137.9zM102.7 148.5c0 2.2-1.5 4-3.4 4.5.2.1.4.1.6.1h.7c2.6 0 4.7-2.1 4.7-4.7v-1.5h-2.6v1.6z" }),
          _react2.default.createElement("path", { className: "st11", d: "M102.7 142.6v4.4h2.6v-4.4c0-2.6-2.1-4.7-4.7-4.7h-.3-.4c-.2 0-.4.1-.6.1 2 .6 3.4 2.4 3.4 4.6z" }),
          _react2.default.createElement("path", { className: "st9", d: "M118.1 146.9h-6.9v1.5c0 1.1.4 2.1 1 2.9 2-1.2 4-2.5 5.9-3.9v-.5z" }),
          _react2.default.createElement("path", { className: "st10", d: "M115.3 137.9h.3-.3zM115.6 137.9h.3-.3zM118.1 142.6c0-2.2-1.5-4-3.4-4.5.2-.1.4-.1.6-.1-2.3.3-4.1 2.3-4.1 4.7v4.4h6.9v-4.5z" }),
          _react2.default.createElement("path", { className: "st11", d: "M115.3 137.9zM115.6 137.9zM118.1 146.9v.5c.2-.2.5-.4.7-.5h-.7z" }),
          _react2.default.createElement("path", { className: "st11", d: "M118.1 142.6v4.4h.7c.6-.5 1.2-1 1.8-1.4v-2.9c0-2.6-2.1-4.7-4.7-4.7h-.3-.4c-.2 0-.4.1-.6.1 2 .5 3.5 2.3 3.5 4.5z" })
        )
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 160 160" }, this.props),
        _react2.default.createElement("path", { className: "st0", d: "M144.2 95.8c0 35.5-28.7 64.2-64.2 64.2s-64.2-28.7-64.2-64.2S44.5 31.6 80 31.6s64.2 28.7 64.2 64.2" }),
        _react2.default.createElement("path", { className: "st1", d: "M80 160c26.1 0 48.6-15.6 58.6-38-18-9-38.3-14.1-59.8-14.1-20.7 0-40.4 4.7-57.9 13.2C30.7 143.9 53.5 160 80 160" }),
        _react2.default.createElement("path", { className: "st2", d: "M59.8 69.3H114v66.4H59.8z" }),
        _react2.default.createElement("path", { className: "st3", d: "M51.9 135.7V69.3l2.6-41.5 5.3 41.5v66.4z" }),
        _react2.default.createElement("path", { className: "st4", d: "M46.5 69.3l5.3-41.5h2.7l-2.6 41.5z" }),
        _react2.default.createElement("path", { className: "st5", d: "M51.8 27.8h61.9l5.3 41.5H57.1z" }),
        _react2.default.createElement("path", { className: "st6", d: "M95.1 36.7l1.6 4.9h7V20h-8.6z" }),
        _react2.default.createElement("path", { className: "st6", d: "M103.7 42.9h-7c-.6 0-1.1-.4-1.2-.9l-1.6-5c0-.1-.1-.3-.1-.4V20c0-.7.6-1.3 1.3-1.3h8.6c.7 0 1.3.6 1.3 1.3v21.6c0 .8-.6 1.3-1.3 1.3zm-6.1-2.5h4.8v-19h-6v15.2l1.2 3.8z" }),
        _react2.default.createElement("path", { className: "st7", d: "M102.5 42.5c-.6 0-1-.5-1-1v-9.4c0-.6.5-1 1-1 .6 0 1 .5 1 1v9.4c0 .5-.5 1-1 1zM102.5 28.2c-.6 0-1-.5-1-1v-4c0-.6.5-1 1-1 .6 0 1 .5 1 1v4c0 .5-.5 1-1 1z" }),
        _react2.default.createElement("path", { className: "st8", d: "M93.5 14.9H76.9c-2.3 0-4.1-1.8-4.1-4.1s1.8-4.1 4.1-4.1h16.6c2.3 0 4.1 1.8 4.1 4.1s-1.8 4.1-4.1 4.1z" }),
        _react2.default.createElement("path", { className: "st8", d: "M99.3 7.4h-7.9c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5h7.9c1.4 0 2.5 1.1 2.5 2.5s-1.2 2.5-2.5 2.5z" }),
        _react2.default.createElement("path", { className: "st9", d: "M105.5 20.9H93c-1.4 0-2.4-1.1-2.4-2.4s1-2.5 2.4-2.5h12.5c1.4 0 2.4 1.1 2.4 2.4s-1.1 2.5-2.4 2.5z" }),
        _react2.default.createElement("path", { className: "st8", d: "M68.7 5.7h-3.1c-1.4 0-2.5-1.1-2.5-2.5S64.2.7 65.6.7h3.1c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5z" }),
        _react2.default.createElement("path", { className: "st10", d: "M75.7 78.1h.4c-.2-.1-.3 0-.4 0zM76.2 78h.5-.5z" }),
        _react2.default.createElement("path", { className: "st11", d: "M80.2 85.7c0-3.5-2.4-6.5-5.6-7.4.3-.1.7-.2 1-.2-3.8.5-6.7 3.8-6.7 7.7v7.1h11.3v-7.2z" }),
        _react2.default.createElement("path", { className: "st4", d: "M76.1 78h0zM75.6 78.1zM76.7 78h-.5-.5-.1c-.3 0-.7.1-1 .2 3.3.9 5.6 3.9 5.6 7.4v7.1h4.2v-7.1c0-4.1-3.4-7.6-7.7-7.6z" }),
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("path", { className: "st10", d: "M75.7 110.4h.4-.4zM76.2 110.4h.5c-.2-.1-.3 0-.5 0z" }),
          _react2.default.createElement("path", { className: "st12", d: "M80.2 118.1c0-3.5-2.4-6.5-5.6-7.4.3-.1.7-.2 1-.2-3.8.5-6.7 3.8-6.7 7.7v7.1h11.3v-7.2z" }),
          _react2.default.createElement("path", { className: "st4", d: "M76.1 110.4h0zM75.6 110.4zM76.7 110.3h-.5-.5-.1c-.3 0-.7.1-1 .2 3.3.9 5.6 3.9 5.6 7.4v7.1h4.2v-7.1c0-4.1-3.4-7.6-7.7-7.6z" })
        ),
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("path", { className: "st10", d: "M97.2 110.4h.4-.4zM97.8 110.4h.5c-.2-.1-.4 0-.5 0z" }),
          _react2.default.createElement("path", { className: "st13", d: "M101.8 118.1c0-3.5-2.4-6.5-5.6-7.4.3-.1.7-.2 1-.2-3.8.5-6.7 3.8-6.7 7.7v17.6h11.3v-17.7z" }),
          _react2.default.createElement("path", { className: "st4", d: "M97.7 110.4h.1-.1zM97.2 110.4zM98.3 110.3h-.5-.5-.1c-.3 0-.7.1-1 .2 3.3.9 5.6 3.9 5.6 7.4v17.6h4.2v-17.6c0-4.1-3.5-7.6-7.7-7.6z" })
        ),
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("path", { className: "st10", d: "M97.2 78.1h.4c-.1-.1-.2 0-.4 0zM97.8 78h.5-.5z" }),
          _react2.default.createElement("path", { className: "st12", d: "M101.8 85.7c0-3.5-2.4-6.5-5.6-7.4.3-.1.7-.2 1-.2-3.8.5-6.7 3.8-6.7 7.7v7.1h11.3v-7.2z" }),
          _react2.default.createElement("path", { className: "st4", d: "M97.7 78h.1-.1zM97.2 78.1zM98.3 78h-.5-.5-.1c-.3 0-.7.1-1 .2 3.3.9 5.6 3.9 5.6 7.4v7.1h4.2v-7.1c0-4.1-3.5-7.6-7.7-7.6z" })
        ),
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("path", { className: "st14", d: "M51.9 110.5c-7.7 1.6-15.2 3.8-22.4 6.7l22.4 18.5v-25.2z" })
        ),
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("path", { className: "st5", d: "M90.5 133.6h18.9v2.2H90.5z" })
        ),
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("circle", { className: "st12", cx: "99.2", cy: "123.6", r: "1.7" })
        )
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 160 160" }, this.props),
        _react2.default.createElement("path", { className: "st0", d: "M20.1 72.7c-2.8 7.2-4.3 15-4.3 23.1 0 35.5 28.7 64.2 64.2 64.2s64.2-28.7 64.2-64.2c0-8.2-1.5-16-4.3-23.1H20.1z" }),
        _react2.default.createElement("path", { className: "st1", d: "M80 31.6c-27.3 0-50.6 17-59.9 41.1h119.8c-9.3-24.1-32.6-41.1-59.9-41.1z" }),
        _react2.default.createElement("path", { className: "st2", d: "M65.6 71.9c0-8 6.5-14.4 14.4-14.4S94.4 64 94.4 71.9" }),
        _react2.default.createElement("path", { className: "st3", d: "M86.1 67.5c-.6 0-1.2-.1-1.7-.5-1.6-.9-2.2-3-1.2-4.7l20.1-34.7c.9-1.6 3-2.2 4.7-1.2 1.6.9 2.2 3 1.2 4.7L89 65.8c-.6 1.1-1.7 1.7-2.9 1.7z" }),
        _react2.default.createElement("ellipse", { transform: "rotate(-60 108.967 24.466)", className: "st4", cx: "109", cy: "24.5", rx: "9.6", ry: "9.6" }),
        _react2.default.createElement("path", { className: "st5", d: "M103.4 22.1c-.1 0-.3 0-.4-.1-.4-.2-.5-.7-.3-1.1 1.2-2.1 3.3-3.4 5.7-3.6 1.4-.1 2.9.2 4.1 1 .4.2.5.7.3 1.1-.2.4-.7.5-1.1.3-1-.6-2.1-.8-3.2-.7-1.9.1-3.5 1.2-4.5 2.8 0 .1-.3.3-.6.3z" }),
        _react2.default.createElement("path", { className: "st6", d: "M65.6 75.1c0-8 6.5-14.4 14.4-14.4s14.4 6.5 14.4 14.4" }),
        _react2.default.createElement("path", { className: "st7", d: "M119.6 79.7H39.9l-26.8 60.4h133.2z" }),
        _react2.default.createElement("path", { d: "M87.9 115.5L117 81.4H42.5l29.1 34.1-4.4 21.2h25.1z" }),
        _react2.default.createElement("path", { className: "st8", d: "M42.5 81.4L18 136.7h49.2l4.4-21.2z" }),
        _react2.default.createElement("path", { className: "st9", d: "M92.3 136.7h49.2L117 81.4l-29.1 34.1z" }),
        _react2.default.createElement(
          "g",
          { className: "st10" },
          _react2.default.createElement("path", { className: "st11", d: "M65.6 75.4c0 4.7 6.5 8.5 14.4 8.5s14.4-3.8 14.4-8.5" })
        )
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 160 160" }, this.props),
        _react2.default.createElement("path", { className: "st0", d: "M144.2 95.8c0 35.5-28.7 64.2-64.2 64.2s-64.2-28.7-64.2-64.2S44.5 31.6 80 31.6s64.2 28.7 64.2 64.2" }),
        _react2.default.createElement("path", { className: "st1", d: "M78 155c.5.8 1.7 1.4 3.2 1.4 1.4 0 2.7-.6 3.2-1.4H105c4.1-1.7 8-3.9 11.6-6.4v-30.7c0-1.5-1.2-2.7-2.7-2.7H49c-1.8 0-3.2 1.4-3.2 3.2v31.8c2.9 1.9 6 3.5 9.2 4.8h23z" }),
        _react2.default.createElement("path", { className: "st2", d: "M81.2 154.1c0-3.8-14.7-6.9-32.8-6.9v-34.6c18.1 0 32.8 3.1 32.8 6.9v34.6" }),
        _react2.default.createElement("path", { className: "st3", d: "M81.2 154.1c0-6.8-13.2-12.3-29.4-12.3v-34.6c16.2 0 29.4 5.5 29.4 12.3v34.6" }),
        _react2.default.createElement("path", { className: "st4", d: "M81.2 154.1c0-9.1-11.7-16.6-26.2-16.6V103c14.5 0 26.2 7.4 26.2 16.6v34.5" }),
        _react2.default.createElement("path", { className: "st2", d: "M81.2 154.1c0-3.8 14.7-6.9 32.8-6.9v-34.6c-18.1 0-32.8 3.1-32.8 6.9v34.6" }),
        _react2.default.createElement("path", { className: "st3", d: "M81.2 154.1c0-6.8 13.1-12.3 29.4-12.3v-34.6c-16.2 0-29.4 5.5-29.4 12.3v34.6" }),
        _react2.default.createElement("path", { className: "st4", d: "M81.2 154.1c0-9.1 11.7-16.6 26.2-16.6V103c-14.5 0-26.2 7.4-26.2 16.6v34.5" }),
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("ellipse", { className: "st5", cx: "81.2", cy: "134.6", rx: "4.5", ry: "3" }),
          _react2.default.createElement("path", { className: "st5", d: "M84.8 135.8H38.6c-2.3 0-4.2-1.9-4.2-4.2V87.4c0-2.3 1.9-4.2 4.2-4.2h46.1" }),
          _react2.default.createElement("path", { className: "st2", d: "M81.2 134.6c0-5-19.4-9.1-43.3-9.1V79.9c23.9 0 43.3 4.1 43.3 9.1v45.6" }),
          _react2.default.createElement("path", { className: "st3", d: "M81.2 134.6c0-9-17.4-16.3-38.8-16.3V72.7c21.4 0 38.8 7.3 38.8 16.3v45.6" }),
          _react2.default.createElement("path", { className: "st4", d: "M81.2 134.6c0-12.1-15.5-21.9-34.6-21.9V67.1c19.1 0 34.6 9.8 34.6 21.9v45.6" }),
          _react2.default.createElement("path", { className: "st5", d: "M124.4 83.2H84.8c-2 0-3.6 1.6-3.6 3.6v45.4c0 2 1.6 3.6 3.6 3.6h39.6c2 0 3.6-1.6 3.6-3.6V86.8c-.1-2-1.7-3.6-3.6-3.6" }),
          _react2.default.createElement("path", { className: "st2", d: "M81.2 134.6c0-5 19.4-9.1 43.3-9.1V79.9c-23.9 0-43.3 4.1-43.3 9.1v45.6" }),
          _react2.default.createElement("path", { className: "st3", d: "M81.2 134.6c0-9 17.4-16.3 38.8-16.3V72.7C98.5 72.7 81.2 80 81.2 89v45.6" }),
          _react2.default.createElement("path", { className: "st4", d: "M81.2 134.6c0-12.1 15.5-21.9 34.6-21.9V67.1c-19.1 0-34.6 9.8-34.6 21.9v45.6" })
        ),
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("path", { className: "st6", d: "M134.5 49.8H28.6c-2.9 0-5.2 2.3-5.2 5.2v54.4c0 2.9 2.3 5.2 5.2 5.2H76c.8 1.4 2.8 2.3 5.2 2.3s4.4-1 5.2-2.3h48.1c2.4 0 4.4-2 4.4-4.4v-56c0-2.4-1.9-4.4-4.4-4.4z" }),
          _react2.default.createElement("path", { className: "st2", d: "M81.2 113.3c0-6.2-24-11.3-53.5-11.3V45.7c29.6 0 53.5 5 53.5 11.3v56.3" }),
          _react2.default.createElement("path", { className: "st3", d: "M81.2 113.3c0-11.1-21.5-20.1-47.9-20.1V36.8c26.5 0 47.9 9 47.9 20.1v56.4" }),
          _react2.default.createElement("path", { className: "st4", d: "M81.2 113.3c0-14.9-19.1-27-42.7-27V29.9c23.6 0 42.7 12.1 42.7 27v56.4" }),
          _react2.default.createElement("path", { className: "st2", d: "M81.2 113.3c0-6.2 24-11.3 53.5-11.3V45.7c-29.6 0-53.5 5-53.5 11.3v56.3" }),
          _react2.default.createElement("path", { className: "st3", d: "M81.2 113.3c0-11.1 21.4-20.1 47.9-20.1V36.8c-26.5 0-47.9 9-47.9 20.1v56.4" }),
          _react2.default.createElement("path", { className: "st4", d: "M81.2 113.3c0-14.9 19.1-27 42.7-27V29.9c-23.6 0-42.7 12.1-42.7 27v56.4" }),
          _react2.default.createElement("path", { className: "st7", d: "M72 49.7c-.2 0-.4-.1-.5-.2-1-.8-2.1-1.6-3.2-2.3-1-.7-2.1-1.3-3.2-1.9-.2-.1-.3-.3-.4-.5-.1-.2 0-.4.1-.6.1-.2.3-.3.5-.4.2-.1.4 0 .6.1 1.2.6 2.3 1.3 3.3 1.9 1.1.7 2.3 1.6 3.4 2.4.3.3.4.8.1 1.1-.2.2-.4.3-.7.4.1 0 .1 0 0 0zM62.5 42.3c.2.1.4.2.4.4.1.2.1.4 0 .6-.1.2-.2.3-.4.4-.1 0-.2.1-.3.1-.1 0-.2 0-.3-.1-1-.4-2-.8-3.2-1.2-1-.4-2.1-.7-3.2-1-1.1-.3-2.2-.6-3.2-.8-.2 0-.4-.2-.5-.3-.1-.2-.2-.4-.1-.6 0-.2.2-.4.4-.5.2-.1.4-.1.6-.1 1.2.3 2.4.6 3.3.8 1.1.3 2.2.7 3.3 1 1.1.4 2.2.8 3.2 1.3M55.6 79.2h-.2c-1.1-.3-2.1-.6-3.2-.8-.2 0-.4-.2-.5-.4-.1-.2-.1-.4-.1-.6 0-.2.2-.4.3-.5.2-.1.4-.2.6-.1 1.2.3 2.4.6 3.3.8.4.1.7.6.6 1-.1.4-.4.6-.8.6zM49.1 40h-.2c-1.3-.2-2.3-.3-3.2-.5-1-.1-2.1-.2-3.2-.3-.2 0-.4-.1-.6-.3-.1-.2-.2-.4-.2-.6 0-.2.1-.4.3-.5.2-.1.4-.2.6-.2 1.2.1 2.3.2 3.3.3 1 .1 2 .3 3.3.5.4.1.7.5.7.9 0 .2-.1.4-.3.5-.2.2-.4.2-.5.2zM78.6 95c-.3 0-.6-.2-.7-.4-.8-1.5-1.9-2.9-3.2-4.4-.9-1-2-2.1-3.2-3-1-.8-2-1.6-3.2-2.3-.2-.1-.3-.3-.4-.5 0-.2 0-.4.1-.6.3-.4.7-.5 1.1-.2 1.2.8 2.3 1.6 3.4 2.4 1.2 1 2.4 2.1 3.4 3.2 1.4 1.5 2.5 3.1 3.4 4.7.2.4.1.9-.3 1.1h-.4zM78.6 87.5c-.3 0-.6-.1-.7-.4-.8-1.5-1.9-2.9-3.2-4.4-.3-.3-.3-.8.1-1.1.3-.3.8-.3 1.1.1 1.4 1.5 2.5 3.1 3.4 4.7.1.2.1.4.1.6-.1.2-.2.4-.4.5-.1-.1-.3 0-.4 0zM78.6 57.3c-.3 0-.6-.1-.7-.4-.8-1.5-1.9-3-3.2-4.4-.3-.3-.2-.8.1-1.1.2-.1.4-.2.6-.2.2 0 .4.1.6.3 1.4 1.5 2.5 3.1 3.4 4.7.1.2.1.4.1.6-.1.2-.2.4-.4.5-.2-.1-.4 0-.5 0zM65.5 83.1c-.1 0-.2 0-.3-.1-1-.5-2.1-1.1-3.2-1.5-1-.4-2-.8-3.2-1.2-.2-.1-.4-.2-.5-.4-.1-.2-.1-.4 0-.6.1-.2.2-.4.4-.5.2-.1.4-.1.6 0 1.3.5 2.4.9 3.3 1.3 1.1.5 2.2 1 3.3 1.6.4.2.5.7.3 1.1-.2.1-.4.3-.7.3zM45.8 47.1s-.1 0 0 0l-3.3-.3c-.4 0-.8-.4-.7-.9 0-.2.1-.4.3-.5.2-.1.4-.2.6-.2 1.2.1 2.4.2 3.3.3.2 0 .4.1.5.3.1.2.2.4.1.6 0 .2-.1.4-.3.5-.2.2-.3.2-.5.2zM49.1 77.8H49c-1.2-.2-2.3-.3-3.2-.5-1.1-.1-2.2-.2-3.2-.3-.2 0-.4-.1-.5-.3-.1-.2-.2-.4-.2-.6 0-.2.1-.4.3-.6.2-.1.4-.2.6-.2 1.2.1 2.4.2 3.3.3 1 .1 2.1.3 3.3.5.2 0 .4.1.5.3.1.2.2.4.1.6-.2.5-.5.8-.9.8zM78.6 64.8h-.2c-.2-.1-.4-.2-.5-.4-.8-1.4-1.9-2.9-3.2-4.3-1-1.1-2-2.1-3.2-3-.2-.1-.3-.3-.3-.5s0-.4.2-.6c.1-.2.3-.3.5-.3s.4 0 .6.2c1.2 1 2.4 2.1 3.4 3.2 1.4 1.5 2.5 3.1 3.4 4.6.2.4.1.9-.3 1.1h-.4zM65.5 52.9c-.1 0-.2 0-.4-.1-1-.5-2.1-1.1-3.2-1.5-1-.4-2-.8-3.2-1.2-1.2-.4-2.2-.7-3.2-1-.4-.1-.7-.6-.6-1 .1-.2.2-.4.4-.5.2-.1.4-.1.6-.1 1.2.3 2.3.7 3.3 1 1.3.5 2.4.9 3.3 1.3 1 .4 2.1 1 3.3 1.6.2.1.3.3.4.5.1.2 0 .4-.1.6-.1.3-.3.4-.6.4zM78.6 72.4c-.3 0-.6-.1-.7-.4-.8-1.5-1.9-2.9-3.2-4.4-.9-1-2-2.1-3.2-3-1-.8-2.1-1.6-3.2-2.3-1-.6-2-1.2-3.2-1.9-.2-.1-.3-.3-.4-.5-.1-.2 0-.4.1-.6.1-.2.3-.3.5-.4.2-.1.4 0 .6.1 1.2.6 2.3 1.3 3.3 1.9 1.1.7 2.3 1.6 3.4 2.4 1.2 1 2.4 2.1 3.4 3.2 1.4 1.5 2.5 3.1 3.4 4.7.1.2.1.4.1.6-.1.2-.2.4-.4.5-.2 0-.4.1-.5.1zM52.4 48.2h-.2c-1.1-.2-2.2-.4-3.2-.6-.4-.1-.7-.5-.6-.9 0-.2.2-.4.3-.5.1-.2.3-.2.5-.2 1.2.2 2.4.4 3.3.6.4.1.7.5.6.9 0 .2-.2.4-.4.5 0 .2-.2.2-.3.2zM58.9 65.2h-.3c-.9-.3-2-.7-3.2-1-1.1-.3-2.1-.6-3.2-.8-1.1-.2-2.2-.4-3.2-.6-1.2-.2-2.2-.3-3.2-.5-1.1-.1-2.1-.2-3.2-.3-.2 0-.4-.1-.6-.3-.1-.2-.2-.4-.2-.6 0-.2.1-.4.3-.6.2-.1.4-.2.6-.2 1 .1 2 .1 3.3.3 1 .1 2.1.3 3.3.5 1 .2 2 .4 3.3.6 1.1.3 2.3.5 3.3.8 1.4.4 2.4.7 3.3 1.1.2.1.4.2.5.4.1.2.1.4 0 .6-.1.2-.2.4-.4.5-.1 0-.3.1-.4.1zM52.3 70.9h-.2c-1.1-.2-2.1-.5-3.2-.6h-.1l-3.2-.5c-1-.1-2.1-.2-3.2-.3-.2 0-.4-.1-.6-.3-.1-.2-.2-.4-.2-.6 0-.4.4-.8.8-.7 1.2.1 2.3.2 3.3.3l3.3.5c1.2.2 2.3.4 3.3.7.2 0 .4.2.5.3.1.2.2.4.1.6.1.3-.2.6-.6.6zM62.2 58.9c-.1 0-.2 0-.3-.1-1-.4-2-.8-3.2-1.2-1-.4-2.1-.7-3.2-1-1.1-.3-2.2-.6-3.2-.8-1.3-.3-2.3-.5-3.2-.6-1.3-.2-2.3-.3-3.2-.5-1-.1-2.1-.2-3.2-.3-.2 0-.4-.1-.6-.3-.1-.2-.2-.4-.2-.6 0-.4.4-.8.8-.8 1.2.1 2.3.2 3.3.3 1.2.1 2.3.3 3.3.5 1.2.2 2.3.4 3.3.7 1.1.2 2.2.5 3.3.8 1.1.3 2.2.7 3.3 1 1.2.4 2.3.9 3.3 1.3.2.1.3.2.4.4.1.2.1.4 0 .6-.1.2-.2.4-.4.4-.1.2-.2.2-.3.2zM78.6 79.9c-.3 0-.6-.1-.7-.4-.8-1.5-1.9-2.9-3.2-4.4-.9-1-2-2.1-3.2-3-1-.8-2-1.6-3.2-2.3-.2-.1-.3-.3-.4-.5 0-.2 0-.4.1-.6.3-.4.7-.5 1.1-.2 1.2.8 2.3 1.6 3.4 2.4 1.2 1 2.4 2.1 3.4 3.2 1.4 1.5 2.5 3.1 3.4 4.7.1.2.1.4.1.6-.1.2-.2.4-.4.5h-.4zM72 79.8c-.2 0-.4-.1-.5-.2-1-.8-2.1-1.6-3.2-2.3-1-.6-2-1.2-3.2-1.9-1.1-.6-2.1-1.1-3.2-1.5-1-.4-2-.8-3.2-1.2-1-.4-2.1-.7-3.2-1-.4-.1-.7-.5-.6-1 .1-.4.6-.7 1-.5 1.1.3 2.2.7 3.3 1 1.2.4 2.3.9 3.3 1.3 1.1.5 2.2 1 3.3 1.6 1.2.6 2.3 1.3 3.3 1.9 1.1.7 2.3 1.6 3.4 2.4.2.1.3.3.3.5s0 .4-.2.6c-.1.2-.3.3-.6.3z" }),
          _react2.default.createElement(
            "g",
            null,
            _react2.default.createElement("path", { className: "st7", d: "M90.4 49.7c-.2 0-.4-.1-.6-.3-.3-.3-.2-.8.1-1.1 1.1-.9 2.2-1.7 3.4-2.4 1-.7 2.2-1.3 3.3-1.9.2-.1.4-.1.6-.1.2.1.4.2.5.4.1.2.1.4.1.6-.1.2-.2.4-.4.5-1.1.6-2.2 1.2-3.2 1.9-1.1.7-2.2 1.5-3.2 2.3-.1 0-.3.1-.6.1.1 0 0 0 0 0zM100 42.3c1-.4 2.1-.9 3.3-1.3 1.1-.4 2.2-.7 3.3-1 .9-.2 2.1-.6 3.3-.8.2 0 .4 0 .6.1.2.1.3.3.4.5 0 .2 0 .4-.1.6-.1.2-.3.3-.5.3-1.1.2-2.1.5-3.2.8-1.2.3-2.2.7-3.2 1-1.2.4-2.3.8-3.2 1.2-.1 0-.2.1-.3.1-.1 0-.2 0-.3-.1-.2-.1-.4-.2-.4-.4-.1-.2-.1-.4 0-.6 0-.2.1-.3.3-.4M106.1 78.7c-.1-.4.1-.9.6-1 1-.3 2.1-.6 3.3-.8.2 0 .4 0 .6.1.2.1.3.3.3.5s0 .4-.1.6c-.1.2-.3.3-.5.4-1.1.2-2.2.5-3.2.8h-.2c-.3-.1-.7-.3-.8-.6zM113 39.9c-.2-.1-.3-.3-.3-.5-.1-.4.2-.9.7-.9 1.3-.2 2.3-.3 3.3-.5 1-.1 2.1-.2 3.3-.3.2 0 .4.1.6.2.2.1.2.3.3.5 0 .2-.1.4-.2.6-.1.2-.3.3-.6.3-1.1.1-2.2.2-3.2.3-.9.1-1.9.2-3.2.5h-.2c-.2-.1-.4-.1-.5-.2zM83.9 95c.3 0 .6-.2.7-.4.8-1.5 1.9-2.9 3.2-4.4.9-1 2-2.1 3.2-3 1-.8 2-1.6 3.2-2.3.2-.1.3-.3.4-.5 0-.2 0-.4-.1-.6-.3-.4-.7-.5-1.1-.2-1.2.7-2.4 1.5-3.4 2.4-1.2 1-2.4 2.1-3.4 3.2-1.4 1.5-2.5 3.1-3.4 4.7-.2.4-.1.9.3 1.1h.4zM83.9 87.5c.3 0 .6-.1.7-.4.8-1.5 1.9-2.9 3.2-4.4.3-.3.3-.8-.1-1.1-.3-.3-.8-.3-1.1.1-1.4 1.5-2.5 3.1-3.4 4.7-.1.2-.1.4-.1.6.1.2.2.4.4.5.2-.1.3 0 .4 0zM83.5 57.2c-.2-.1-.3-.3-.4-.5-.1-.2 0-.4.1-.6.9-1.6 2-3.1 3.4-4.7.1-.2.3-.2.6-.3.2 0 .4.1.6.2.3.3.3.8.1 1.1-1.3 1.4-2.4 2.9-3.2 4.4-.1.3-.4.4-.7.4-.2.1-.3.1-.5 0zM96.3 82.7c-.2-.4-.1-.9.3-1.1 1.3-.6 2.4-1.1 3.4-1.6 1-.4 2-.8 3.3-1.3.2-.1.4-.1.6 0 .2.1.3.3.4.5.1.2.1.4 0 .6-.1.2-.3.3-.5.4-1.2.4-2.3.8-3.2 1.2-1.1.5-2.2 1-3.2 1.5-.1.1-.2.1-.3.1-.3.1-.6-.1-.8-.3zM116.2 47c-.2-.1-.3-.3-.3-.5s0-.4.1-.6c.1-.2.3-.3.5-.3.9-.1 2.1-.2 3.3-.3.2 0 .4.1.6.2.2.1.2.3.3.5 0 .4-.3.8-.7.9-1.1.1-2.2.2-3.2.3h-.1c-.1-.1-.3-.1-.5-.2zM112.7 77.1c0-.2 0-.4.1-.6.1-.2.3-.3.5-.3 1.2-.2 2.3-.4 3.3-.5.9-.1 2.1-.2 3.3-.3.2 0 .4 0 .6.2.2.1.3.3.3.6 0 .2-.1.4-.2.6-.1.2-.3.3-.5.3-1.1.1-2.2.2-3.2.3-1 .1-2 .3-3.2.5h-.1c-.5-.1-.9-.4-.9-.8zM83.9 64.8h.2c.2-.1.4-.2.5-.4.8-1.4 1.9-2.9 3.2-4.3 1-1.1 2-2.1 3.2-3 .2-.1.3-.3.3-.5s0-.4-.2-.6c-.1-.2-.3-.3-.5-.3s-.4 0-.6.2c-1.2 1-2.4 2.1-3.4 3.2-1.4 1.5-2.5 3.1-3.4 4.6-.2.4-.1.9.3 1.1h.4zM96.4 52.5c-.1-.2-.1-.4-.1-.6.1-.2.2-.4.4-.5 1.2-.6 2.3-1.1 3.3-1.6.9-.4 2-.8 3.3-1.3 1-.4 2.1-.7 3.3-1 .2-.1.4 0 .6.1.2.1.3.3.4.5.1.4-.1.9-.6 1-1 .3-2 .6-3.2 1-1.2.4-2.3.8-3.2 1.2-1.1.5-2.2 1-3.2 1.5-.1.1-.2.1-.4.1s-.5-.1-.6-.4zM83.5 72.3c-.2-.1-.3-.3-.4-.5-.1-.2 0-.4.1-.6.9-1.6 2-3.2 3.4-4.7 1-1.1 2.1-2.2 3.4-3.2 1.1-.9 2.2-1.7 3.4-2.4 1-.7 2.2-1.3 3.3-1.9.2-.1.4-.1.6-.1.2.1.4.2.5.4.1.2.1.4.1.6-.1.2-.2.4-.4.5-1.2.6-2.3 1.2-3.2 1.9-1.1.7-2.2 1.5-3.2 2.3-1.2 1-2.3 2-3.2 3-1.3 1.4-2.4 2.9-3.2 4.4-.1.3-.4.4-.7.4-.2 0-.3-.1-.5-.1zM109.8 48.1c-.2-.1-.3-.3-.4-.5-.1-.4.2-.8.6-.9.9-.2 2.1-.4 3.3-.6.2 0 .4 0 .6.1.2.1.3.3.3.5.1.4-.2.8-.6.9-1.1.2-2.2.4-3.2.6h-.2c-.2 0-.3 0-.4-.1zM103.3 65.1c-.2-.1-.3-.3-.4-.5-.1-.2-.1-.4 0-.6.1-.2.3-.3.5-.4.9-.3 2-.7 3.3-1.1 1.1-.3 2.2-.6 3.3-.8 1.3-.3 2.3-.5 3.3-.6 1.2-.2 2.3-.4 3.3-.5 1.3-.1 2.3-.2 3.3-.3.2 0 .4 0 .6.2.2.1.3.3.3.6 0 .2 0 .4-.2.6-.1.2-.3.3-.6.3-1.1.1-2.2.2-3.2.3-1 .1-2 .2-3.2.5-1.1.2-2.2.4-3.2.6-1.1.2-2.2.5-3.2.8-1.2.3-2.4.7-3.2 1h-.3c-.2 0-.3 0-.4-.1zM109.4 70.2c-.1-.2 0-.4.1-.6.1-.2.3-.3.5-.3 1-.2 2.1-.4 3.3-.7l3.3-.5c1-.1 2.1-.2 3.3-.3.4 0 .8.3.8.7 0 .2-.1.4-.2.6-.1.2-.3.3-.6.3-1.1.1-2.2.2-3.2.3l-3.2.5h-.1c-1.1.2-2.2.4-3.2.6h-.2c-.2.1-.5-.2-.6-.6zM100 58.8c-.2-.1-.4-.2-.4-.4-.1-.2-.1-.4 0-.6.1-.2.2-.3.4-.4 1-.4 2.1-.9 3.3-1.3 1.1-.4 2.2-.7 3.3-1 1.1-.3 2.2-.6 3.3-.8 1-.2 2.1-.5 3.3-.7 1.1-.2 2.1-.3 3.3-.5 1-.1 2.1-.2 3.3-.3.4 0 .8.3.8.8 0 .2-.1.4-.2.6-.1.2-.3.3-.6.3-1.1.1-2.2.2-3.2.3-.9.1-1.9.3-3.2.5-.9.2-2 .4-3.2.6-1.1.2-2.1.5-3.2.8-1.2.3-2.2.7-3.2 1-1.2.4-2.3.8-3.2 1.2-.1 0-.2.1-.3.1-.1-.1-.2-.1-.3-.2zM83.9 79.9c.3 0 .6-.1.7-.4.8-1.5 1.9-2.9 3.2-4.4.9-1 2-2.1 3.2-3 1-.8 2-1.6 3.2-2.3.2-.1.3-.3.4-.5 0-.2 0-.4-.1-.6-.3-.4-.7-.5-1.1-.2-1.2.7-2.4 1.5-3.4 2.4-1.2 1-2.4 2.1-3.4 3.2-1.4 1.5-2.5 3.1-3.4 4.7-.1.2-.1.4-.1.6.1.2.2.4.4.5h.4zM90.5 79.8c.2 0 .4-.1.5-.2 1-.8 2.1-1.6 3.2-2.3 1-.6 2-1.2 3.2-1.9 1.1-.6 2.1-1.1 3.2-1.5 1-.4 2-.8 3.2-1.2 1-.4 2.1-.7 3.2-1 .4-.1.7-.5.6-1-.1-.4-.6-.7-1-.5-1.1.3-2.2.7-3.3 1-1.2.4-2.3.9-3.3 1.3-1.1.5-2.2 1-3.3 1.6-1.2.6-2.3 1.3-3.3 1.9-1.1.7-2.3 1.6-3.4 2.4-.2.1-.3.3-.3.5s0 .4.2.6c.1.2.4.3.6.3z" })
          )
        ),
        _react2.default.createElement("path", { className: "st8", d: "M41.9 68.9l-4.5-1.5-1.3-4.6c-.2-.7-.8-1.2-1.5-1.4-.7-.1-1.5.2-1.9.7l-2.9 3.8-4.8-.2c-.7 0-1.4.4-1.8 1-.4.6-.3 1.4.1 2l2.7 3.9-1.7 4.5c-.2.7-.1 1.5.4 2s1.3.7 2 .5l4.5-1.4 3.7 3c.6.5 1.4.5 2 .2.7-.3 1.1-1 1.1-1.7l.1-4.8 4-2.6c.6-.4.9-1.1.8-1.9.2-.7-.3-1.3-1-1.5zM141.6 129.2l-4.5-1.5-1.3-4.6c-.2-.7-.8-1.2-1.5-1.4-.7-.1-1.5.2-1.9.7l-2.9 3.8-4.8-.2c-.7 0-1.4.4-1.8 1-.4.6-.3 1.4.1 2l2.7 3.9-1.7 4.5c-.2.7-.1 1.5.4 2s1.3.7 2 .5l4.5-1.4 3.7 3c.6.5 1.4.5 2 .2.7-.3 1.1-1 1.1-1.7l.1-4.8 4-2.6c.6-.4.9-1.1.8-1.9.2-.6-.3-1.3-1-1.5zM102.1 30.5L97.6 29l-1.3-4.6c-.2-.7-.8-1.2-1.5-1.4-.7-.1-1.5.2-1.9.7L90 27.6l-4.8-.2c-.7 0-1.4.4-1.8 1-.4.6-.3 1.4.1 2l2.7 3.9-1.7 4.5c-.2.7-.1 1.5.4 2s1.3.7 2 .5l4.5-1.4 3.7 3c.6.5 1.4.5 2 .2.7-.3 1.1-1 1.1-1.7l.1-4.8 4-2.6c.6-.4.9-1.1.8-1.9.2-.7-.3-1.3-1-1.6z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 160 160" }, this.props),
        _react2.default.createElement("path", { className: "st0", d: "M144.2 95.8c0 35.5-28.7 64.2-64.2 64.2s-64.2-28.7-64.2-64.2S44.5 31.6 80 31.6s64.2 28.7 64.2 64.2" }),
        _react2.default.createElement("path", { className: "st1", d: "M110.5 27.9l-14.6 65c-.4 1.9-2.4 3.2-4.3 2.7l-21.7-4.9c-1.9-.4-3.2-2.4-2.7-4.3l14.6-65c.4-1.9 2.4-3.2 4.3-2.7l21.7 4.9c2 .5 3.2 2.4 2.7 4.3" }),
        _react2.default.createElement("path", { className: "st2", d: "M79.3 45.4H79c-.6-.1-1-.7-.9-1.4l1.7-7.8c.1-.6.7-1 1.4-.9.6.1 1 .7.9 1.4l-1.7 7.8c-.2.6-.6.9-1.1.9z" }),
        _react2.default.createElement("path", { className: "st2", d: "M92.7 94.3c-.2 0-.4 0-.6-.1l-21.6-4.9c-1.1-.2-1.9-1.3-1.9-2.4 0-.2 0-.3.1-.5L76.1 53c.1-.6.7-1 1.4-.9.6.1 1 .7.9 1.4l-7.5 33.4c0 .1.1.2.1.2L92.6 92c.1 0 .2-.1.2-.1l14.6-65v-.1c0-.1-.1-.2-.1-.2l-21.7-4.9c-.1 0-.2.1-.2.1l-.2.9c-.1.7-.4 1.7-.6 2.9l-1.8 7.9c-.1.6-.7 1-1.4.9-.6-.1-1-.7-.9-1.4l2.6-11.6v-.1c.2-1.1 1.3-1.9 2.4-1.9.2 0 .4 0 .5.1l21.7 4.9c1.1.2 1.9 1.3 1.9 2.4 0 .2 0 .3-.1.5l-14.6 65c0 1.2-1.1 2-2.2 2z" }),
        _react2.default.createElement("path", { className: "st3", d: "M140.3 55.9l-45.1 49c-1.3 1.5-3.6 1.6-5.1.2l-16.3-15c-1.5-1.3-1.5-3.6-.2-5.1l45.2-49c1.3-1.5 3.6-1.6 5.1-.2l16.3 15.1c1.4 1.3 1.5 3.6.1 5" }),
        _react2.default.createElement("path", { className: "st2", d: "M92.8 104.7c-.6 0-1.2-.2-1.7-.6L74.8 89c-.5-.5-.8-1.1-.8-1.8 0-.6.2-1.2.6-1.7l45.2-49c.5-.5 1.1-.8 1.8-.8.6 0 1.2.2 1.7.7l16.3 15.1c.5.5.8 1.1.8 1.8 0 .6-.2 1.2-.7 1.7l-.1.1L94.5 104c-.3.4-1 .7-1.7.7zM121.5 38L76.3 87v.1c0 .1 0 .1.1.1l16.3 15.1h.1c.1 0 .1 0 .2-.1l45-48.8s0-.1.1-.1l.1-.1c0-.1 0-.1-.1-.1L121.8 38H121.5z" }),
        _react2.default.createElement("path", { className: "st4", d: "M152.1 95.1l-63.6 19.8c-1.9.6-3.9-.5-4.5-2.4l-6.6-21.2c-.6-1.9.5-3.9 2.4-4.5L143.4 67c1.9-.6 3.9.5 4.5 2.4l6.6 21.2c.6 1.9-.5 3.9-2.4 4.5" }),
        _react2.default.createElement("path", { className: "st2", d: "M87.8 113.7c-1.1 0-2-.7-2.4-1.7l-6.6-21.2c-.1-.2-.1-.5-.1-.7 0-1.1.7-2.1 1.7-2.4L144 67.8c.2-.1.5-.1.7-.1 1.1 0 2.1.7 2.4 1.7l6.6 21.2c.1.2.1.5.1.7 0 1.1-.7 2.1-1.7 2.4h-.1l-63.5 19.8c-.3.1-.5.2-.7.2zM144.7 70L81.1 89.8c-.1 0-.1.1-.1.2v.1l6.6 21.2c0 .1.1.1.2.1h.1l63.6-19.8c.1 0 .1-.1.1-.2L145 70.2c-.1-.2-.2-.2-.3-.2z" }),
        _react2.default.createElement("path", { className: "st5", d: "M142.8 134.9l-65-14.6c-1.9-.4-3.2-2.4-2.7-4.3L80 94.3c.4-1.9 2.4-3.2 4.3-2.7l65 14.6c1.9.4 3.2 2.4 2.7 4.3l-4.9 21.7c-.4 1.9-2.4 3.1-4.3 2.7" }),
        _react2.default.createElement("path", { className: "st2", d: "M143.9 133.6c-.2 0-.3 0-.5-.1l-.5-.1-64.5-14.5c-1.1-.2-1.9-1.3-1.9-2.4 0-.2 0-.3.1-.5l4.9-21.7c.2-1.1 1.3-2 2.4-1.9.2 0 .3 0 .5.1l65 14.6c1.1.2 1.9 1.3 1.9 2.4 0 .2 0 .3-.1.5l-4.9 21.6c-.3 1.2-1.3 2-2.4 2zm-.1-2.3s.1 0 0 0c.1 0 .1 0 0 0 .1 0 .2-.1.2-.1l4.9-21.6v-.1c0-.1-.1-.2-.1-.2l-65-14.6c-.1 0-.2.1-.2.1l-4.9 21.7c0 .1.1.2.1.2l65 14.6z" }),
        _react2.default.createElement("path", { className: "st6", d: "M84.3 95.1c0 22.1-17.9 39.9-39.9 39.9-22.1 0-40-17.9-40-39.9 0-22.1 17.9-40 40-40 22 .1 39.9 17.9 39.9 40" }),
        _react2.default.createElement("path", { className: "st7", d: "M33.7 89.6c.7.7 1.7 1.1 2.7 1.1 1 0 1.9-.4 2.7-1.1L66.7 62c-2.2-1.5-4.5-2.7-6.9-3.7l-26 26c-1.5 1.4-1.5 3.8-.1 5.3zM68.7 63.5L50.6 81.6c-1.5 1.5-1.5 3.9 0 5.3.7.7 1.7 1.1 2.7 1.1 1 0 1.9-.4 2.7-1.1l18.3-18.3c-1.7-1.9-3.6-3.6-5.6-5.1zM33.2 106.1c-1-1-2.6-1-3.6 0l-15.3 15.3c1.1 1.3 2.3 2.5 3.5 3.6l15.3-15.3c1-1 1-2.6.1-3.6zM50 103.5c-1-1-2.6-1-3.6 0l-24.6 24.6c1.4 1 2.9 1.9 4.5 2.6L50 107c1-.9 1-2.5 0-3.5z" }),
        _react2.default.createElement("path", { className: "st8", d: "M14.9 116.3s-.1-.1 0 0c-.4-.5-.6-.9-.9-1.3-.4-.7-.3-1.5.4-2 .7-.4 1.5-.3 2 .4.3.4.5.8.8 1.1.5.6.3 1.5-.3 2-.7.5-1.5.4-2-.2zm3.7 4.4c-.5-.6-.4-1.4.1-1.9.6-.6 1.5-.6 2 0 .3.3.7.6 1 1 .6.5.6 1.4.1 2-.5.6-1.4.6-2 .1l-1.2-1.2zm-7.3-10.6c-.1-.1-.2-.2-.2-.3-.2-.5-.4-.9-.6-1.4-.3-.7.1-1.6.8-1.9.7-.3 1.6.1 1.9.8.2.4.3.9.5 1.3.3.7 0 1.6-.7 1.9-.6.2-1.3.1-1.7-.4zm12.8 15.1c-.4-.5-.4-1.2-.1-1.7.4-.7 1.3-.8 2-.4.4.2.8.5 1.2.7.7.4.9 1.3.5 2s-1.3.9-2 .5c-.4-.3-.8-.5-1.3-.8l-.3-.3zm-15-21.9l-.3-.6-.3-1.5c-.1-.8.4-1.5 1.2-1.7.8-.1 1.5.4 1.7 1.2.1.4.2.9.3 1.3.2.8-.3 1.5-1.1 1.7-.6.2-1.1 0-1.5-.4zm21.4 25.2c-.3-.4-.4-.9-.2-1.4.3-.7 1.1-1.1 1.9-.8.4.2.9.3 1.3.5.7.3 1.1 1.1.9 1.8-.3.7-1.1 1.1-1.8.9-.5-.2-.9-.3-1.4-.5-.4-.2-.6-.4-.7-.5zM8.4 96.2c-.2-.3-.4-.6-.4-.9v-1.5c0-.8.7-1.4 1.5-1.4s1.4.7 1.4 1.5v1.4c0 .8-.6 1.4-1.4 1.4-.5 0-.9-.2-1.1-.5zm29 34.2c-.3-.3-.4-.7-.3-1.2.1-.8.9-1.3 1.7-1.2.4.1.9.1 1.4.2.8.1 1.3.8 1.2 1.6-.1.8-.8 1.3-1.6 1.2-.5-.1-1-.1-1.5-.2-.4 0-.7-.2-.9-.4zM9.1 89.1c-.3-.3-.4-.8-.3-1.2l.3-1.5c.2-.8 1-1.2 1.7-1 .8.2 1.2 1 1 1.7-.1.4-.2.9-.3 1.3-.2.8-.9 1.3-1.7 1.1-.2 0-.5-.2-.7-.4zm35.4 41.7c-.2-.2-.3-.5-.3-.9 0-.8.6-1.5 1.4-1.5.5 0 .9 0 1.4-.1.8-.1 1.5.5 1.5 1.3.1.8-.5 1.5-1.3 1.5-.5 0-1 .1-1.5.1-.5.2-.9 0-1.2-.4zM11.2 82.2c-.3-.4-.4-1-.2-1.5s.4-.9.6-1.4c.3-.7 1.2-1 1.9-.7.7.3 1 1.2.7 1.9l-.6 1.2c-.3.7-1.2 1.1-1.9.8-.2 0-.4-.1-.5-.3zm40.4 47.7l-.3-.6c-.2-.8.3-1.5 1-1.7.4-.1.9-.2 1.3-.4.8-.2 1.6.2 1.8 1 .2.8-.2 1.6-1 1.8-.5.1-1 .3-1.4.4-.5.1-1.1-.1-1.4-.5zM14.7 76c-.4-.5-.5-1.2-.1-1.7l.9-1.2c.5-.6 1.4-.7 2-.3.6.5.7 1.4.3 2-.3.4-.5.7-.8 1.1-.5.6-1.3.8-2 .3-.1 0-.2-.1-.3-.2zm43.6 51.4c-.1-.1-.1-.2-.2-.3-.3-.7 0-1.6.7-1.9l1.2-.6c.7-.4 1.6-.1 1.9.6.4.7.1 1.6-.6 1.9-.4.2-.9.5-1.3.7-.6.3-1.3.1-1.7-.4zM19.4 70.6c-.5-.6-.4-1.4.1-2 .4-.3.7-.7 1.1-1 .6-.5 1.5-.5 2 .1s.4 1.5-.2 2c-.3.3-.7.6-1 .9-.5.7-1.4.6-2 0zm45 53.1c-.5-.7-.4-1.6.2-2.1.4-.3.7-.6 1.1-.9.5-.4 1.2-.4 1.7-.1-.3-.5-.2-1.2.3-1.7.3-.3.7-.6 1-1 .5-.6 1.5-.6 2-.1.6.5.6 1.5.1 2-.3.4-.7.7-1 1.1-.5.5-1.2.5-1.8.2.3.6.2 1.3-.4 1.8l-1.2.9c-.6.6-1.5.5-2-.1zM25.1 66.3c0-.1-.1-.1-.1-.2-.4-.7-.2-1.6.5-2 .4-.3.9-.5 1.3-.8.7-.4 1.6-.1 1.9.6.4.7.1 1.6-.6 1.9-.4.2-.8.5-1.2.7-.6.4-1.4.3-1.8-.2zm47.1 49.2c-.4-.5-.5-1.2-.1-1.7.3-.4.5-.8.7-1.2.4-.7 1.3-.9 2-.5s.9 1.3.5 2c-.3.4-.5.8-.8 1.3-.4.7-1.3.8-2 .4-.1-.1-.3-.2-.3-.3zM31.5 63.2c-.1-.1-.2-.3-.2-.4-.3-.7.1-1.6.9-1.8.5-.2.9-.3 1.4-.5.8-.2 1.6.2 1.8.9.2.8-.2 1.6-.9 1.8-.4.1-.9.3-1.3.4-.7.2-1.3 0-1.7-.4zm44 46c-.3-.4-.4-.9-.2-1.5.2-.4.3-.9.5-1.3.3-.7 1.1-1.1 1.8-.9.7.3 1.1 1.1.9 1.8-.2.5-.3.9-.5 1.4-.3.7-1.1 1.1-1.9.8-.2 0-.4-.2-.6-.3zm-37-47.7c-.2-.2-.3-.4-.3-.7-.1-.8.4-1.5 1.2-1.6.5-.1 1-.1 1.5-.2.8-.1 1.5.5 1.6 1.3.1.8-.5 1.5-1.3 1.6-.5 0-.9.1-1.4.2-.6-.1-1-.3-1.3-.6zm39 40.8c-.3-.3-.4-.7-.3-1.2.1-.4.2-.9.2-1.4.1-.8.8-1.3 1.6-1.2.8.1 1.3.8 1.2 1.6-.1.5-.1 1-.2 1.5-.1.8-.9 1.3-1.7 1.2-.3-.1-.6-.3-.8-.5zM45.6 61.2c-.2-.3-.4-.6-.3-1 .1-.8.7-1.4 1.5-1.3.3 0 .6 0 .9.1.2 0 .4 0 .6.1.8.1 1.4.8 1.3 1.6-.1.8-.8 1.4-1.6 1.3-.2 0-.4 0-.6-.1-.3 0-.5 0-.8-.1-.4-.1-.8-.3-1-.6zm32.5 34c-.2-.2-.3-.5-.3-.9 0-.5 0-.9-.1-1.4-.1-.8.5-1.5 1.3-1.5.8-.1 1.5.5 1.5 1.3 0 .5.1 1 .1 1.5 0 .8-.6 1.4-1.4 1.5-.4 0-.8-.2-1.1-.5zM52.6 62.4c-.3-.3-.4-.8-.3-1.3.2-.8 1-1.2 1.8-1 .5.1 1 .3 1.4.4.8.2 1.2 1.1.9 1.8-.2.8-1.1 1.2-1.8.9-.4-.1-.9-.3-1.3-.4-.2 0-.5-.1-.7-.4zm24.6 25.7l-.3-.6c-.1-.4-.2-.9-.3-1.3-.2-.8.2-1.6 1-1.8.8-.2 1.6.2 1.8 1 .1.5.3 1 .4 1.4.2.8-.3 1.5-1.1 1.7-.6.2-1.2 0-1.5-.4zm-17.9-23c-.4-.4-.4-1-.2-1.6.4-.7 1.2-1 1.9-.6.4.2.9.5 1.3.7.7.4.9 1.3.5 2s-1.3.9-2 .5c-.4-.2-.8-.4-1.2-.7 0-.1-.2-.2-.3-.3zm15.6 16.2c-.1-.1-.1-.2-.2-.3l-.6-1.2c-.4-.7-.1-1.6.6-1.9.7-.4 1.6-.1 1.9.6.2.4.4.9.7 1.3.3.7 0 1.6-.7 1.9-.6.3-1.3.1-1.7-.4zM65.3 69c-.4-.5-.4-1.3 0-1.8.5-.6 1.4-.7 2-.2.4.3.8.6 1.1 1 .6.5.6 1.4.1 2-.5.6-1.4.6-2 .1-.3-.3-.7-.6-1-.9l-.2-.2zm5.9 6.2s0-.1 0 0c-.3-.4-.6-.8-.9-1.1-.5-.6-.4-1.5.2-2 .6-.5 1.5-.4 2 .2l.9 1.2c.5.6.3 1.5-.3 2-.6.4-1.4.3-1.9-.3zM36.1 101.7c.5-.7 1.2-1 2.1-1 .4 0 .8.1 1.2.2.4.2.9.3 1.4.5.5.2 1.1.4 1.7.5.6.2 1.3.2 2.1.2 1.2 0 2-.2 2.5-.7.5-.5.7-1 .7-1.6 0-.5-.1-.9-.4-1.2-.3-.3-.7-.6-1.2-.8-.5-.2-1.1-.4-1.8-.6-.7-.2-1.5-.4-2.3-.7-.8-.2-1.5-.5-2.3-.8-.8-.3-1.4-.7-2-1.2-.6-.5-1.1-1.1-1.4-1.9-.4-.8-.6-1.7-.6-2.8 0-1.4.3-2.5.8-3.5s1.2-1.8 2.1-2.5c.9-.7 1.9-1.1 3-1.5 1.1-.3 2.3-.5 3.6-.5 2.4 0 4.3.4 5.5 1.1 1.3.7 1.9 1.7 1.9 2.8 0 .8-.2 1.5-.7 2-.5.5-1.1.8-1.9.8-.5 0-.9 0-1.2-.1-.4-.1-.7-.2-1.1-.4-.4-.1-.8-.3-1.2-.4-.4-.1-1-.1-1.6-.1-.8 0-1.5.2-2 .6-.5.4-.8.9-.8 1.5 0 .4.1.6.3.9.2.2.5.4 1 .6.4.2 1 .4 1.7.6.7.2 1.6.5 2.6.8l2.4.9c.8.3 1.4.8 2.1 1.4.6.6 1.1 1.2 1.4 2 .4.8.5 1.8.5 3 0 1.4-.3 2.7-.8 3.7s-1.2 1.9-2.1 2.6c-.9.7-2 1.2-3.2 1.5a16 16 0 0 1-3.9.5c-.9 0-1.8-.1-2.9-.3-1-.2-2-.4-2.9-.8-.9-.4-1.6-.8-2.2-1.3-.6-.5-.9-1.2-.9-1.9.1-.8.3-1.5.8-2.1z" }),
        _react2.default.createElement("path", { className: "st8", d: "M44.6 115.3c-.9 0-1.7-.8-1.7-1.7V77.5c0-.9.8-1.7 1.7-1.7.9 0 1.7.8 1.7 1.7v36.1c0 .9-.8 1.7-1.7 1.7z" }),
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("path", { className: "st9", d: "M66.7 148c.6-.6 1.7-.6 2.3 0 .6.6.6 1.7 0 2.3l-7.1 7.1c1.2.4 2.4.7 3.7 1l12.1-12.1c.6-.6 1.7-.6 2.3 0 .6.6.6 1.7 0 2.3l-10.5 10.5c3.4.6 6.9.8 10.4.8 3.3 0 6.5-.2 9.6-.7-.3-.5-.1-1.1.3-1.4.3-.3.7-.5 1-.8.5-.4 1.2-.4 1.6.1.4.5.4 1.2-.1 1.6l-.1.1c1.3-.3 2.7-.6 4-.9 4-4.6 6.4-10.6 6.4-17.1 0-14.5-11.7-26.2-26.2-26.2s-26.2 11.7-26.2 26.2c0 5 1.4 9.8 3.9 13.8 1.4.6 2.9 1.2 4.4 1.7l8.2-8.3zm29.1 7c-.3.4-.6.8-.9 1.1-.2.3-.5.4-.9.4-.3 0-.5-.1-.7-.3-.5-.4-.5-1.1-.1-1.6.3-.3.5-.7.8-1 .4-.5 1.1-.6 1.6-.2.4.4.6 1.1.2 1.6zm2.5-4.4c-.2.4-.4.9-.6 1.3-.2.4-.6.6-1 .6-.2 0-.4 0-.5-.1-.6-.3-.8-1-.5-1.5l.6-1.2c.3-.6.9-.8 1.5-.6.5.3.8.9.5 1.5zm1.6-4.8c-.1.5-.2.9-.3 1.4-.1.5-.6.8-1.1.8h-.3c-.6-.2-1-.8-.8-1.4.1-.4.2-.8.3-1.3.1-.6.7-1 1.3-.9.6.2 1 .8.9 1.4zm.5-3.6c0 .6-.5 1.1-1.1 1.1h-.1c-.6 0-1.1-.6-1.1-1.2v-1.3c0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1c.1.5.1.9.1 1.4zm-.3-5.5c.1.5.1.9.2 1.4.1.6-.4 1.2-1 1.3h-.1c-.6 0-1.1-.4-1.1-1 0-.4-.1-.9-.2-1.3-.1-.6.3-1.2.9-1.3.6-.1 1.2.3 1.3.9zm-1.4-4.9c.2.4.3.9.5 1.3.2.6-.1 1.2-.7 1.4-.1 0-.2.1-.4.1-.5 0-.9-.3-1.1-.8-.1-.4-.3-.8-.4-1.2-.2-.6 0-1.2.6-1.5.6-.1 1.3.1 1.5.7zm-3.9-4.7c.5-.4 1.2-.2 1.6.3.3.4.5.8.8 1.2.3.5.1 1.2-.4 1.6-.2.1-.4.2-.6.2-.4 0-.8-.2-1-.6-.2-.4-.5-.7-.7-1.1-.4-.6-.3-1.3.3-1.6zm-3.3-3.6c.4-.5 1.2-.5 1.6 0l.3.3.7.7c.4.5.4 1.2-.1 1.6-.2.2-.5.3-.8.3-.3 0-.6-.1-.8-.4-.2-.2-.4-.4-.6-.7l-.3-.3c-.4-.3-.5-1 0-1.5zm-4-2.8c.3-.5 1-.7 1.6-.4.4.3.8.5 1.2.8.5.4.6 1.1.3 1.6-.2.3-.6.5-.9.5-.2 0-.5-.1-.7-.2-.4-.2-.7-.5-1.1-.7-.5-.3-.7-1-.4-1.6zm-4.4-1.8c.2-.6.9-.9 1.5-.7.4.2.9.3 1.3.5.6.2.8.9.6 1.5-.2.4-.6.7-1 .7-.2 0-.3 0-.4-.1-.4-.2-.8-.3-1.2-.5-.7-.2-1-.9-.8-1.4zm-4.7-1c.1-.6.7-1.1 1.3-1 .5.1.9.1 1.4.2.6.1 1 .7.9 1.3-.1.5-.6.9-1.1.9h-.2c-.4-.1-.8-.2-1.3-.2-.7 0-1.1-.5-1-1.2zm-3.8-1.1c.5 0 1-.1 1.4-.1.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.2-.4 0-.9 0-1.3.1h-.1c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.2zm-5 .9c.5-.1.9-.3 1.4-.4.6-.1 1.2.2 1.4.9.1.6-.2 1.2-.9 1.4l-1.2.3H70c-.5 0-.9-.3-1.1-.8-.2-.6.1-1.2.7-1.4zm-4.7 2c.4-.2.8-.4 1.3-.6.6-.3 1.2 0 1.5.5.3.6 0 1.2-.5 1.5l-1.2.6c-.2.1-.4.1-.5.1-.4 0-.8-.2-1-.6-.3-.6-.1-1.2.4-1.5zm-4.1 2.8c.4-.3.7-.6 1.1-.9.5-.4 1.2-.3 1.6.2.4.5.3 1.2-.2 1.6-.3.3-.7.5-1 .8-.2.2-.5.3-.7.3-.3 0-.6-.1-.9-.4-.5-.5-.4-1.2.1-1.6zm-3.5 3.7c.3-.4.6-.7.9-1.1.4-.5 1.1-.5 1.6-.1s.5 1.1.1 1.6c-.3.3-.6.7-.8 1-.2.3-.6.4-.9.4-.2 0-.5-.1-.7-.2-.5-.4-.6-1.1-.2-1.6zm-2.6 4.3c.2-.4.4-.9.6-1.3.3-.6 1-.8 1.5-.5.6.3.8 1 .5 1.5l-.6 1.2c-.2.4-.6.7-1 .7-.2 0-.3 0-.5-.1-.6-.2-.8-.9-.5-1.5zm-1.7 4.8c.1-.5.2-.9.4-1.4.2-.6.8-.9 1.4-.8.6.2.9.8.8 1.4l-.3 1.2c-.1.5-.6.9-1.1.9h-.3c-.7-.1-1-.7-.9-1.3zm-.6 3.6c0-.6.6-1.1 1.2-1 .6 0 1.1.6 1 1.2 0 .4-.1.9-.1 1.3 0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.2.1-.5.1-1 .1-1.4zm.4 6.4c-.1-.5-.2-.9-.2-1.4-.1-.6.4-1.2 1-1.3.6-.1 1.2.4 1.3 1 .1.4.1.9.2 1.3.1.6-.3 1.2-.9 1.3H54c-.6.1-1.1-.3-1.2-.9zm2.5 5.6c-.4 0-.9-.3-1-.7-.2-.4-.4-.9-.5-1.3-.2-.6.1-1.2.7-1.5.6-.2 1.2.1 1.5.7.1.4.3.8.5 1.2.2.6 0 1.2-.6 1.5-.3 0-.4.1-.6.1zm1.4 3.7c-.3-.4-.5-.8-.8-1.2-.3-.5-.2-1.2.4-1.6.5-.3 1.2-.2 1.6.4.2.4.5.7.7 1.1.4.5.2 1.2-.3 1.6-.2.1-.4.2-.7.2-.3 0-.6-.2-.9-.5z" }),
          _react2.default.createElement("path", { className: "st10", d: "M69 148c-.6-.6-1.7-.6-2.3 0l-8.3 8.3c.1 0 .2.1.3.1 0-.2.2-.4.3-.6.5-.4 1.2-.4 1.6 0l.3.3.6.6c.2.2.3.4.4.7l7.1-7.1c.7-.6.7-1.6 0-2.3zM80.1 146.3c-.6-.6-1.7-.6-2.3 0l-12.1 12.1c1.3.3 2.6.5 3.9.8l10.5-10.5c.7-.7.7-1.8 0-2.4z" }),
          _react2.default.createElement("path", { className: "st11", d: "M91.8 125.4c.2.2.4.4.6.7.2.2.5.4.8.4.3 0 .6-.1.8-.3.5-.4.5-1.1.1-1.6l-.7-.7-.3-.3c-.5-.4-1.2-.4-1.6 0-.4.5-.4 1.2 0 1.6.1 0 .2.1.3.2zM94.5 128.6c.2.4.5.7.7 1.1.2.4.6.6 1 .6.2 0 .4-.1.6-.2.5-.3.7-1 .4-1.6-.2-.4-.5-.8-.8-1.2-.4-.5-1.1-.7-1.6-.3-.6.4-.7 1.1-.3 1.6zM96.6 132.7c.2.4.3.8.4 1.2.2.5.6.8 1.1.8.1 0 .2 0 .4-.1.6-.2.9-.8.7-1.4-.2-.5-.3-.9-.5-1.3-.2-.6-.9-.9-1.5-.6-.6.1-.8.8-.6 1.4zM74.7 119.1c.5 0 .9-.1 1.4-.1.6 0 1.1-.5 1.1-1.2 0-.6-.5-1.1-1.1-1.1-.5 0-1 0-1.4.1-.6 0-1.1.6-1 1.2-.1.6.4 1.1 1 1.1zM87.9 122.3c.4.2.7.5 1.1.7.2.1.4.2.7.2.4 0 .7-.2.9-.5.4-.5.2-1.2-.3-1.6-.4-.3-.8-.5-1.2-.8-.5-.3-1.2-.2-1.6.4-.3.6-.1 1.3.4 1.6zM83.8 120.3c.4.1.8.3 1.2.5.1.1.3.1.4.1.4 0 .9-.3 1-.7.2-.6 0-1.2-.6-1.5-.4-.2-.9-.4-1.3-.5-.6-.2-1.2.1-1.5.7-.1.5.2 1.2.8 1.4zM99.3 139.6c-.6 0-1.1.5-1.1 1.1v1.3c0 .6.4 1.2 1.1 1.2h.1c.6 0 1.1-.5 1.1-1.1v-1.4c-.1-.5-.6-1.1-1.2-1.1zM95.5 153.4c-.5-.4-1.2-.3-1.6.2-.3.3-.5.7-.8 1-.4.5-.3 1.2.1 1.6.2.2.5.3.7.3.3 0 .7-.1.9-.4.3-.4.6-.7.9-1.1.5-.5.3-1.2-.2-1.6zM97.8 149.1c-.6-.3-1.2 0-1.5.6l-.6 1.2c-.3.6-.1 1.2.5 1.5.2.1.3.1.5.1.4 0 .8-.2 1-.6.2-.4.4-.9.6-1.3.3-.6 0-1.2-.5-1.5zM98.8 135.8c-.6.1-1 .7-.9 1.3.1.4.1.9.2 1.3.1.6.6 1 1.1 1h.1c.6-.1 1.1-.6 1-1.3-.1-.5-.1-.9-.2-1.4-.1-.6-.7-1-1.3-.9zM92.5 157.1c-.4-.5-1.1-.5-1.6-.1-.3.3-.7.6-1 .8-.4.3-.6 1-.3 1.4.9-.1 1.8-.3 2.7-.5l.1-.1c.4-.3.5-1 .1-1.5zM69.9 119.9h.3l1.2-.3c.6-.1 1-.8.9-1.4-.1-.6-.8-1-1.4-.9-.5.1-.9.2-1.4.4-.6.2-.9.8-.8 1.4.3.5.7.8 1.2.8zM99 144.5c-.6-.1-1.2.3-1.3.9-.1.4-.2.8-.3 1.3-.2.6.2 1.2.8 1.4h.3c.5 0 1-.3 1.1-.8.1-.5.2-.9.3-1.4.1-.7-.3-1.3-.9-1.4zM79.3 119.2c.4.1.9.1 1.3.2h.2c.5 0 1-.4 1.1-.9.1-.6-.3-1.2-.9-1.3-.5-.1-.9-.2-1.4-.2-.6-.1-1.2.4-1.3 1 0 .6.4 1.1 1 1.2zM56.4 149.3c-.2-.4-.3-.8-.5-1.2-.2-.6-.9-.9-1.5-.7-.6.2-.9.9-.7 1.5.2.4.3.9.5 1.3s.6.7 1 .7c.1 0 .3 0 .4-.1.7-.3 1-.9.8-1.5zM54.1 146.2c.6-.1 1-.7.9-1.3-.1-.4-.1-.8-.2-1.3-.1-.6-.7-1.1-1.3-1-.6.1-1.1.7-1 1.3.1.5.1.9.2 1.4.1.5.6.9 1.1.9.2.1.3.1.3 0zM58.6 153.3c-.2-.4-.5-.7-.7-1.1-.3-.5-1-.7-1.6-.4-.5.3-.7 1-.4 1.6.2.4.5.8.8 1.2.2.3.6.5.9.5.2 0 .5-.1.7-.2.5-.4.7-1.1.3-1.6zM53.5 141.5c.6 0 1.1-.5 1.2-1.1 0-.4 0-.9.1-1.3 0-.6-.4-1.2-1-1.2s-1.2.4-1.2 1c0 .5-.1 1-.1 1.4-.1.6.4 1.2 1 1.2zM57.5 127.8c.2.2.4.2.7.2.3 0 .7-.2.9-.4.3-.3.5-.7.8-1 .4-.5.4-1.2-.1-1.6s-1.2-.4-1.6.1c-.3.4-.6.7-.9 1.1-.4.5-.3 1.2.2 1.6zM53.9 136.7h.3c.5 0 1-.4 1.1-.9l.3-1.2c.2-.6-.2-1.2-.8-1.4-.6-.2-1.2.2-1.4.8-.1.5-.3.9-.4 1.4-.1.5.2 1.1.9 1.3zM61.5 124.5c.3 0 .5-.1.7-.3.3-.3.7-.6 1-.8.5-.4.6-1.1.2-1.6-.4-.5-1.1-.6-1.6-.2-.4.3-.8.6-1.1.9-.5.4-.5 1.1-.1 1.6.3.3.6.4.9.4zM65.5 121.8c.2 0 .4 0 .5-.1l1.2-.6c.6-.3.8-.9.5-1.5-.3-.6-.9-.8-1.5-.5-.4.2-.9.4-1.3.6-.6.3-.8 1-.5 1.5.3.4.7.6 1.1.6zM55.2 132c.2.1.3.1.5.1.4 0 .8-.2 1-.7l.6-1.2c.3-.6.1-1.2-.5-1.5-.6-.3-1.2-.1-1.5.5-.2.4-.4.8-.6 1.3-.3.6-.1 1.3.5 1.5zM61.6 156.7l-.6-.6-.3-.3c-.4-.5-1.2-.5-1.6 0-.2.2-.3.4-.3.6 1.1.4 2.1.7 3.2 1-.1-.2-.2-.5-.4-.7z" }),
          _react2.default.createElement("path", { className: "st12", d: "M62 157.4z" })
        ),
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("path", { className: "st13", d: "M70.2 137.7c.4-.9.9-1.7 1.5-2.4.7-.7 1.4-1.2 2.4-1.6.9-.4 2-.6 3.1-.6.5 0 1.1 0 1.6.1s1 .2 1.5.4c.4.2.8.4 1.1.7.3.3.4.7.4 1.1 0 .2 0 .4-.1.6-.1.2-.2.4-.3.5-.1.2-.3.3-.5.4-.2.1-.4.1-.6.1-.2 0-.4 0-.6-.1-.2-.1-.4-.2-.7-.2-.2-.1-.5-.2-.8-.2-.3-.1-.6-.1-.9-.1-.7 0-1.3.1-1.8.4-.5.2-.9.6-1.2 1-.3.4-.5.8-.7 1.4-.1.5-.2 1-.2 1.6 0 .6.1 1.1.2 1.6.2.5.4.9.7 1.3.3.4.7.7 1.1.9.4.2 1 .3 1.6.3.5 0 1 0 1.3-.1.3-.1.6-.2.9-.2.2-.1.4-.2.6-.2.2-.1.4-.1.6-.1.3 0 .6.1.8.2.2.1.4.3.5.4.1.2.2.3.2.5v.4c0 .5-.2.9-.5 1.2-.3.3-.7.6-1.2.8-.5.2-1 .4-1.6.4-.6.1-1.1.1-1.5.1-1.2 0-2.2-.2-3.2-.6-.9-.4-1.7-.9-2.3-1.6-.6-.7-1.1-1.5-1.4-2.4-.3-.9-.5-1.9-.5-2.9 0-1.1.1-2.1.5-3.1z" })
        ),
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("path", { className: "st13", d: "M76.7 152c-.8 0-1.4-.6-1.4-1.4V132c0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4v18.6c0 .8-.7 1.4-1.4 1.4z" })
        )
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 160 160" }, this.props),
        _react2.default.createElement("path", { className: "st0", d: "M144.2 95.8c0-35.5-28.7-64.2-64.2-64.2S15.8 60.3 15.8 95.8c0 33 24.8 60.1 56.8 63.8L59.2 54.5c-.8-6.3 3.7-12.1 10-12.9l9-1.1c6.3-.8 12.1 3.7 12.9 10l13.3 104.7c23.4-9.7 39.8-32.6 39.8-59.4z" }),
        _react2.default.createElement("path", { className: "st1", d: "M136.1 44l7.8 8.4-3.3 12.6-49.9 19.3-2.8-21.7z" }),
        _react2.default.createElement("path", { className: "st2", d: "M136.1 44l-3.8-.4-48.7 18.8 3.8.4zM72.6 64.9l6 11.4-5.1 10.1-3.7 1.3-48.9-27 3.6-1.3z" }),
        _react2.default.createElement("path", { className: "st1", d: "M20.9 60.7l-7.5 9.8 8.4 11.7 46.1 5.3-2.8-21.7z" }),
        _react2.default.createElement("path", { className: "st2", d: "M81.8 160L68.3 53.4c-.7-5.8 3-11.2 8.6-12.7.2 0 .4-.1.6-.1.2 0 .4-.1.6-.1h.3l-9 1.1c-6.3.8-10.8 6.6-10 12.9l13.4 105.1c2.4.3 4.9.4 7.4.4h1.6z" }),
        _react2.default.createElement("path", { className: "st1", d: "M78.3 40.4H78c-.2 0-.4.1-.6.1-.2 0-.4.1-.6.1-5.6 1.4-9.3 6.8-8.6 12.7L81.8 160c8-.2 15.7-1.9 22.7-4.8L91.2 50.4c-.8-6.3-6.6-10.8-12.9-10z" }),
        _react2.default.createElement("path", { className: "st1", d: "M78.3 40.4H78c-.2 0-.4.1-.6.1-.2 0-.4.1-.6.1-5.6 1.4-9.3 6.8-8.6 12.7L81.8 160c8-.2 15.7-1.9 22.7-4.8L91.2 50.4c-.8-6.3-6.6-10.8-12.9-10z" }),
        _react2.default.createElement("path", { className: "st3", d: "M73.1 63.9c-.5 0-.9-.4-1-.9l-.8-6.5c-.1-.6.3-1.1.9-1.1.6-.1 1.1.3 1.1.9l.8 6.5c.1.6-.3 1.1-.9 1.1h-.1zM81.6 130.7c-.5 0-.9-.4-1-.9l-4.3-34c-.1-.6.3-1.1.9-1.1.6-.1 1.1.3 1.1.9l4.3 34c.1.6-.3 1.1-.9 1.1h-.1z" }),
        _react2.default.createElement("path", { className: "st1", d: "M78 40.5c-.2 0-.4.1-.6.1.2-.1.4-.1.6-.1zM68.3 53.4L81.8 160 68.3 53.4c-.7-5.8 3-11.2 8.6-12.7-5.6 1.4-9.4 6.8-8.6 12.7z" }),
        _react2.default.createElement("path", { className: "st2", d: "M135.5 72.2l6.1 11.4-5.2 10.1-3.6 1.3-51-27.3 3.6-1.3z" }),
        _react2.default.createElement("path", { className: "st1", d: "M131.9 73.5l6 11.4-5.1 10.1-48.2-5.6-2.8-21.7z" }),
        _react2.default.createElement("path", { className: "st2", d: "M13.1 89.6l-2.9 12.6 7.4 8.5 3.9.3 44.2-39.8-3.9-.4z" }),
        _react2.default.createElement("path", { className: "st1", d: "M17 90l-3 12.5 7.5 8.5 46.9-18.1-2.7-21.7z" }),
        _react2.default.createElement("path", { className: "st2", d: "M84.6 89.4l-2.8-21.7-12.2 5.9 2.8 21.7z" }),
        _react2.default.createElement("path", { className: "st4", d: "M72.6 159.6l-4.8-37.4c-13.1 3-25.2 8.7-35.6 16.6 10.3 11.3 24.5 19 40.4 20.8zM104.6 155.1c11.8-4.9 21.8-13.2 28.8-23.7-10.1-5.6-21.3-9.3-33.2-10.8l4.4 34.5z" }),
        _react2.default.createElement("path", { className: "st5", d: "M67.9 122.2c-7.2 1.6-14.1 4.1-20.6 7.3l25.4 30.1-4.8-37.4z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 160 160" }, this.props),
        _react2.default.createElement("path", { className: "st0", d: "M144.2 95.8c0 35.5-28.7 64.2-64.2 64.2s-64.2-28.7-64.2-64.2S44.5 31.6 80 31.6s64.2 28.7 64.2 64.2" }),
        _react2.default.createElement("path", { className: "st1", d: "M104.4 82.1l-49.1 28.3c-4.6 2.7-6.2 8.5-3.5 13.1s8.5 6.2 13.1 3.5l45.9-26.5-13.1-22.6 6.7 4.2z" }),
        _react2.default.createElement("path", { className: "st1", d: "M48.1 119.9l55.7-32.2-31.7 29.9c-4.6 2.7-6.2 8.5-3.5 13.1s8.5 6.2 13.1 3.5l37-21.3c11.6-6.7 15.6-21.5 8.9-33.1-6.7-11.6-21.5-15.6-33.1-8.9l-56 32.3c-4.6 2.7-6.2 8.5-3.5 13.1 2.6 4.6 8.5 6.2 13.1 3.6" }),
        _react2.default.createElement("path", { className: "st2", d: "M120 103.8L64 71.4c-11.6-6.7-26.4-2.7-33.1 8.9-6.7 11.6-2.7 26.4 8.9 33.1l37 21.3c4.6 2.7 10.5 1.1 13.1-3.5.9-1.6 1.3-3.4 1.3-5.1l2.4 1.4c4.6 2.7 10.5 1.1 13.1-3.5.9-1.6 1.3-3.4 1.3-5.1l2.4 1.4c4.6 2.7 10.5 1.1 13.1-3.5 2.7-4.5 1.1-10.4-3.5-13zM54.9 88.5l-.3-.3.3.3z" }),
        _react2.default.createElement("path", { className: "st2", d: "M79 60.1L45.6 69l5 18.6L84 78.7c5.1-1.4 8.2-6.6 6.8-11.8-1.4-5.2-6.7-8.2-11.8-6.8z" }),
        _react2.default.createElement("path", { className: "st1", d: "M76.1 97.1c-2 0-4.1-.7-5.8-2.1-3.9-3.2-4.5-9-1.3-12.9l7.1-8.8c1.5-1.9 3.7-3.1 6.1-3.3l20.3-2.2c5-.5 9.5 3.1 10.1 8.1.5 5-3.1 9.5-8.1 10.1L88 87.9l-4.8 5.9c-1.8 2.2-4.4 3.3-7.1 3.3z" }),
        _react2.default.createElement("circle", { className: "st1", cx: "42.9", cy: "112.1", r: "9.6" }),
        _react2.default.createElement("circle", { className: "st1", cx: "57.6", cy: "120.1", r: "9.6" }),
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("circle", { className: "st1", cx: "72.3", cy: "127.4", r: "9.6" })
        ),
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("path", { className: "st3", d: "M8.6 100.9c-.6-.2-.9-1-.6-1.8l14.3-40c.3-.8 1-1.3 1.7-1l20.2 7.2c.6.2.9 1.1.6 1.9l-14.3 40c-.3.8-1 1.3-1.7 1l-20.2-7.3z" })
        ),
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("path", { className: "st4", d: "M27.9 104.6c-.1 0-.2 0-.3-.1-.5-.2-.8-.8-.6-1.3L35.3 80c.2-.5.8-.8 1.3-.6.5.2.8.8.6 1.3L28.9 104c-.2.4-.6.6-1 .6z" })
        ),
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("path", { className: "st4", d: "M37.9 76.8c-.1 0-.2 0-.3-.1-.5-.2-.8-.8-.6-1.3l2.2-6.2c0-.1.1-.2.1-.3l-13.9-5c-.5-.2-.8-.8-.6-1.3.2-.5.8-.8 1.3-.6l14.1 5c1 .4 1.4 1.6 1 2.8L39 76c-.3.6-.7.8-1.1.8zm1.5-7.8z" })
        ),
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("path", { className: "st5", d: "M152.1 100.9c.6-.2.9-1.1.6-1.9l-14.3-40c-.3-.8-1-1.3-1.7-1l-20.2 7.2c-.6.2-.9 1.1-.6 1.9l14.3 40c.3.8 1 1.3 1.7 1l20.2-7.2z" })
        ),
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("path", { className: "st6", d: "M132.6 105.3c-.4 0-.8-.3-1-.7l-3.2-9c-.2-.5.1-1.1.6-1.3.5-.2 1.1.1 1.3.6l3.2 9c.2.5-.1 1.1-.6 1.3-.1 0-.2.1-.3.1z" })
        ),
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("path", { className: "st6", d: "M126.9 89.2c-.4 0-.8-.3-1-.7l-7-19.7c-.2-.6-.2-1.2-.1-1.7.2-.6.6-1.1 1.2-1.3l14.6-5.2c.5-.2 1.1.1 1.3.6.2.5-.1 1.1-.6 1.3l-14.5 5.2v.4l7 19.7c.2.5-.1 1.1-.6 1.3-.1.1-.2.1-.3.1z" })
        )
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 160 160" }, this.props),
        _react2.default.createElement("path", { className: "st0", d: "M143.3 87c-1.9-14-8.3-26.3-17.4-35.8l10.4 74.9c6.3-11.6 9-25.1 7-39.1zM16.2 104.6c2.2 15.8 10 29.5 21 39.3L25.7 61.1c-8 12.5-11.7 27.7-9.5 43.5z" }),
        _react2.default.createElement("path", { className: "st1", d: "M70.9 32.2c21.1-2.9 41.3 4.8 55 19l-3.7-26.6c-.2-1.8-1.9-3.1-3.7-2.8L25.4 34.7c-1.8.2-3.1 1.9-2.8 3.7l3.1 22.7c9.8-15.2 25.9-26.2 45.2-28.9z" }),
        _react2.default.createElement("path", { className: "st1", d: "M55.3 155.2l-.9-6.2c-.1-1 .6-1.9 1.5-2l8.4-1.2c1-.1 1.9.6 2 1.5l1.2 8.4c.1 1-.6 1.9-1.5 2l-2 .3c7.8 2 16.1 2.5 24.6 1.3 21.1-2.9 38.4-15.8 47.8-33.3L126 51.2c-13.8-14.2-33.9-21.9-55-19-19.3 2.7-35.4 13.7-45.2 28.9l11.5 82.8c5.3 4.7 11.4 8.5 18 11.3z" }),
        _react2.default.createElement("path", { className: "st2", d: "M67.6 155.7l-1.2-8.4c-.1-1-1.1-1.7-2-1.5L56 147c-1 .1-1.7 1.1-1.5 2l.9 6.2c2.8 1.2 5.7 2.1 8.6 2.9l2.1-.3c1-.2 1.7-1.1 1.5-2.1z" }),
        _react2.default.createElement("path", { className: "st3", d: "M102.4 15.2l5.6-3.7 1.9 6.4 6.7.3-2.2 6.3 5.2 4.2-5.4 3.9 1.7 6.4-6.6-.1-2.4 6.2-5.4-4-5.5 3.7-2-6.4-6.7-.3 2.2-6.3-5.2-4.2 5.4-3.8-1.7-6.5 6.7.1 2.3-6.2z" }),
        _react2.default.createElement("path", { className: "st4", d: "M58.8 48.4c-.6-.1-1.1-.5-1.2-1.1-.1-.7.4-1.4 1.1-1.5l44.3-6.2c.7-.1 1.4.4 1.5 1.1.1.7-.4 1.4-1.1 1.5l-44.3 6.2h-.3zM59.5 53.4c-.6-.1-1.1-.5-1.2-1.1-.1-.7.4-1.4 1.1-1.5l21.5-3c.7-.1 1.4.4 1.5 1.1.1.7-.4 1.4-1.1 1.5l-21.5 3h-.3z" }),
        _react2.default.createElement("path", { className: "st2", d: "M52 56.5l-8.4 1.2c-1 .1-1.9-.6-2-1.5l-1.2-8.4c-.1-1 .6-1.9 1.5-2l8.4-1.2c1-.1 1.9.6 2 1.5l1.2 8.4c.2 1-.5 1.9-1.5 2z" }),
        _react2.default.createElement("path", { className: "st5", d: "M47.7 54.4c-.2 0-.5-.1-.7-.3l-4-3c-.6-.4-.7-1.3-.3-1.8.4-.6 1.3-.7 1.8-.3l3 2.2 8.4-11.1c.4-.6 1.3-.7 1.8-.3.6.4.7 1.3.3 1.8l-9.2 12.2c-.3.4-.7.6-1.1.6z" }),
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("path", { className: "st4", d: "M62.3 73.7c-.6-.1-1.1-.5-1.2-1.1-.1-.7.4-1.4 1.1-1.5l44.3-6.2c.7-.1 1.4.4 1.5 1.1.1.7-.4 1.4-1.1 1.5l-44.3 6.2h-.3zM63 78.7c-.6-.1-1.1-.5-1.2-1.1-.1-.7.4-1.4 1.1-1.5l21.5-3c.7-.1 1.4.4 1.5 1.1.1.7-.4 1.4-1.1 1.5l-21.5 3H63z" }),
          _react2.default.createElement("path", { className: "st2", d: "M55.5 81.8L47.1 83c-1 .1-1.9-.6-2-1.5l-1.2-8.4c-.1-1 .6-1.9 1.5-2l8.4-1.2c1-.1 1.9.6 2 1.5l1.2 8.4c.2 1-.5 1.9-1.5 2z" }),
          _react2.default.createElement("path", { className: "st5", d: "M51.2 79.7c-.2 0-.5-.1-.7-.3l-4-3c-.6-.4-.7-1.3-.3-1.8.4-.6 1.3-.7 1.8-.3l3 2.2 8.4-11.1c.4-.6 1.3-.7 1.8-.3.6.4.7 1.3.3 1.8l-9.2 12.2c-.2.3-.5.5-.9.5 0 .1-.1.1-.2.1z" })
        ),
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("path", { className: "st4", d: "M65.9 99c-.6-.1-1.1-.5-1.2-1.1-.1-.7.4-1.4 1.1-1.5l44.3-6.2c.7-.1 1.4.4 1.5 1.1.1.7-.4 1.4-1.1 1.5L66.2 99h-.3zM66.6 104c-.6-.1-1.1-.5-1.2-1.1-.1-.7.4-1.4 1.1-1.5l21.5-3c.7-.1 1.4.4 1.5 1.1.1.7-.4 1.4-1.1 1.5l-21.5 3h-.3z" }),
          _react2.default.createElement("path", { className: "st2", d: "M59.1 107.1l-8.4 1.2c-1 .1-1.9-.6-2-1.5l-1.2-8.4c-.1-1 .6-1.9 1.5-2l8.4-1.2c1-.1 1.9.6 2 1.5l1.2 8.4c.1 1-.6 1.9-1.5 2z" }),
          _react2.default.createElement("path", { className: "st5", d: "M54.7 105c-.2 0-.5-.1-.7-.3l-4-3c-.6-.4-.7-1.3-.3-1.8.4-.6 1.3-.7 1.8-.3l3 2.2L63 90.7c.4-.6 1.3-.7 1.8-.3.6.4.7 1.3.3 1.8l-9.2 12.2c-.3.5-.8.6-1.2.6z" })
        ),
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("path", { className: "st4", d: "M69.4 124.3c-.6-.1-1.1-.5-1.2-1.1-.1-.7.4-1.4 1.1-1.5l44.3-6.2c.7-.1 1.4.4 1.5 1.1.1.7-.4 1.4-1.1 1.5l-44.3 6.2h-.3zM70.1 129.3c-.6-.1-1.1-.5-1.2-1.1-.1-.7.4-1.4 1.1-1.5l21.5-3c.7-.1 1.4.4 1.5 1.1.1.7-.4 1.4-1.1 1.5l-21.5 3h-.3z" }),
          _react2.default.createElement("path", { className: "st2", d: "M62.6 132.4l-8.4 1.2c-1 .1-1.9-.6-2-1.5l-1.2-8.4c-.1-1 .6-1.9 1.5-2l8.4-1.2c1-.1 1.9.6 2 1.5l1.2 8.4c.1 1-.5 1.9-1.5 2z" }),
          _react2.default.createElement("path", { className: "st5", d: "M58.2 130.3c-.2 0-.5-.1-.7-.3l-4-3c-.6-.4-.7-1.3-.3-1.8.4-.6 1.3-.7 1.8-.3l3 2.2 8.4-11.1c.4-.6 1.3-.7 1.8-.3.6.4.7 1.3.3 1.8l-9.2 12.2c-.2.3-.5.5-.9.5 0 .1-.1.1-.2.1z" })
        ),
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("path", { className: "st4", d: "M72.9 149.6c-.6-.1-1.1-.5-1.2-1.1-.1-.7.4-1.4 1.1-1.5l44.3-6.2c.7-.1 1.4.4 1.5 1.1.1.7-.4 1.4-1.1 1.5l-44.3 6.2h-.3zM73.6 154.6c-.6-.1-1.1-.5-1.2-1.1-.1-.7.4-1.4 1.1-1.5l21.5-3c.7-.1 1.4.4 1.5 1.1.1.7-.4 1.4-1.1 1.5l-21.5 3h-.3z" }),
          _react2.default.createElement("path", { className: "st6", d: "M61.7 155.6c-.2 0-.5-.1-.7-.3l-4-3c-.6-.4-.7-1.3-.3-1.8.4-.6 1.3-.7 1.8-.3l3 2.2 8.4-11.1c.4-.6 1.3-.7 1.8-.3.6.4.7 1.3.3 1.8L62.8 155c-.2.3-.5.5-.9.5 0 .1-.1.1-.2.1z" })
        )
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AttainmentMotivatorIcon = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(50);

var _attainment = __webpack_require__(10);

var _attainment2 = _interopRequireDefault(_attainment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AttainmentMotivatorIcon = exports.AttainmentMotivatorIcon = function AttainmentMotivatorIcon(_ref) {
    var height = _ref.height,
        width = _ref.width;
    return _react2.default.createElement(_attainment2.default, {
        className: 'attainment-motivator-icon',
        height: height,
        width: width });
};

exports.default = AttainmentMotivatorIcon;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CareerMotivatorIcon = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(51);

var _career = __webpack_require__(11);

var _career2 = _interopRequireDefault(_career);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CareerMotivatorIcon = exports.CareerMotivatorIcon = function CareerMotivatorIcon(_ref) {
    var height = _ref.height,
        width = _ref.width;
    return _react2.default.createElement(_career2.default, {
        className: 'career-motivator-icon',
        height: height,
        width: width });
};

exports.default = CareerMotivatorIcon;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FamilyMotivatorIcon = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(52);

var _family = __webpack_require__(12);

var _family2 = _interopRequireDefault(_family);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FamilyMotivatorIcon = exports.FamilyMotivatorIcon = function FamilyMotivatorIcon(_ref) {
    var height = _ref.height,
        width = _ref.width;
    return _react2.default.createElement(_family2.default, {
        className: 'family-motivator-icon',
        height: height,
        width: width });
};

exports.default = FamilyMotivatorIcon;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FearOfFailureMotivatorIcon = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(53);

var _fearOfFailure = __webpack_require__(13);

var _fearOfFailure2 = _interopRequireDefault(_fearOfFailure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FearOfFailureMotivatorIcon = exports.FearOfFailureMotivatorIcon = function FearOfFailureMotivatorIcon(_ref) {
    var height = _ref.height,
        width = _ref.width;
    return _react2.default.createElement(_fearOfFailure2.default, {
        className: 'fear-of-failure-motivator-icon',
        height: height,
        width: width });
};

exports.default = FearOfFailureMotivatorIcon;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MasteryMotivatorIcon = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(54);

var _mastery = __webpack_require__(14);

var _mastery2 = _interopRequireDefault(_mastery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MasteryMotivatorIcon = exports.MasteryMotivatorIcon = function MasteryMotivatorIcon(_ref) {
    var height = _ref.height,
        width = _ref.width;
    return _react2.default.createElement(_mastery2.default, {
        className: 'mastery-motivator-icon',
        height: height,
        width: width });
};

exports.default = MasteryMotivatorIcon;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MoneyMotivatorIcon = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(55);

var _money = __webpack_require__(15);

var _money2 = _interopRequireDefault(_money);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoneyMotivatorIcon = exports.MoneyMotivatorIcon = function MoneyMotivatorIcon(_ref) {
    var height = _ref.height,
        width = _ref.width;
    return _react2.default.createElement(_money2.default, {
        className: 'money-motivator-icon',
        height: height,
        width: width });
};

exports.default = MoneyMotivatorIcon;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OptionsMotivatorIcon = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(56);

var _options = __webpack_require__(16);

var _options2 = _interopRequireDefault(_options);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptionsMotivatorIcon = exports.OptionsMotivatorIcon = function OptionsMotivatorIcon(_ref) {
    var height = _ref.height,
        width = _ref.width;
    return _react2.default.createElement(_options2.default, {
        className: 'options-motivator-icon',
        height: height,
        width: width });
};

exports.default = OptionsMotivatorIcon;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProfessionalCommunityMotivatorIcon = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(57);

var _professionalCommunity = __webpack_require__(17);

var _professionalCommunity2 = _interopRequireDefault(_professionalCommunity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProfessionalCommunityMotivatorIcon = exports.ProfessionalCommunityMotivatorIcon = function ProfessionalCommunityMotivatorIcon(_ref) {
    var height = _ref.height,
        width = _ref.width;
    return _react2.default.createElement(_professionalCommunity2.default, {
        className: 'professional-community-motivator-icon',
        height: height,
        width: width });
};

exports.default = ProfessionalCommunityMotivatorIcon;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SelfDevelopmentMotivatorIcon = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(58);

var _selfDevelopment = __webpack_require__(18);

var _selfDevelopment2 = _interopRequireDefault(_selfDevelopment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelfDevelopmentMotivatorIcon = exports.SelfDevelopmentMotivatorIcon = function SelfDevelopmentMotivatorIcon(_ref) {
    var height = _ref.height,
        width = _ref.width;
    return _react2.default.createElement(_selfDevelopment2.default, {
        className: 'self-development-motivator-icon',
        height: height,
        width: width });
};

exports.default = SelfDevelopmentMotivatorIcon;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AttainmentMotivatorDynamicImage = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AttainmentMotivatorDynamicImage = exports.AttainmentMotivatorDynamicImage = function AttainmentMotivatorDynamicImage(_ref) {
    var scale = _ref.scale;
    return _react2.default.createElement('div', null);
};

exports.default = AttainmentMotivatorDynamicImage;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CareerMotivatorDynamicImage = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CareerMotivatorDynamicImage = exports.CareerMotivatorDynamicImage = function CareerMotivatorDynamicImage(_ref) {
    var scale = _ref.scale;
    return _react2.default.createElement('div', null);
};

exports.default = CareerMotivatorDynamicImage;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FamilyMotivatorDynamicImage = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FamilyMotivatorDynamicImage = exports.FamilyMotivatorDynamicImage = function FamilyMotivatorDynamicImage(_ref) {
    var scale = _ref.scale;
    return _react2.default.createElement('div', null);
};

exports.default = FamilyMotivatorDynamicImage;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FearOfFailureMotivatorDynamicImage = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FearOfFailureMotivatorDynamicImage = exports.FearOfFailureMotivatorDynamicImage = function FearOfFailureMotivatorDynamicImage(_ref) {
    var scale = _ref.scale;
    return _react2.default.createElement('div', null);
};

exports.default = FearOfFailureMotivatorDynamicImage;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MasteryMotivatorDynamicImage = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MasteryMotivatorDynamicImage = exports.MasteryMotivatorDynamicImage = function MasteryMotivatorDynamicImage(_ref) {
    var scale = _ref.scale;
    return _react2.default.createElement('div', null);
};

exports.default = MasteryMotivatorDynamicImage;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MoneyMotivatorDynamicImage = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoneyMotivatorDynamicImage = exports.MoneyMotivatorDynamicImage = function MoneyMotivatorDynamicImage(_ref) {
    var scale = _ref.scale;
    return _react2.default.createElement('div', null);
};

exports.default = MoneyMotivatorDynamicImage;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MotivatorDynamicImage = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AttainmentMotivatorDynamicImage = __webpack_require__(28);

var _AttainmentMotivatorDynamicImage2 = _interopRequireDefault(_AttainmentMotivatorDynamicImage);

var _CareerMotivatorDynamicImage = __webpack_require__(29);

var _CareerMotivatorDynamicImage2 = _interopRequireDefault(_CareerMotivatorDynamicImage);

var _FamilyMotivatorDynamicImage = __webpack_require__(30);

var _FamilyMotivatorDynamicImage2 = _interopRequireDefault(_FamilyMotivatorDynamicImage);

var _FearOfFailureMotivatorDynamicImage = __webpack_require__(31);

var _FearOfFailureMotivatorDynamicImage2 = _interopRequireDefault(_FearOfFailureMotivatorDynamicImage);

var _MasteryMotivatorDynamicImage = __webpack_require__(32);

var _MasteryMotivatorDynamicImage2 = _interopRequireDefault(_MasteryMotivatorDynamicImage);

var _MoneyMotivatorDynamicImage = __webpack_require__(33);

var _MoneyMotivatorDynamicImage2 = _interopRequireDefault(_MoneyMotivatorDynamicImage);

var _OptionsMotivatorDynamicImage = __webpack_require__(35);

var _OptionsMotivatorDynamicImage2 = _interopRequireDefault(_OptionsMotivatorDynamicImage);

var _ProfessionalCommunityMotivatorDynamicImage = __webpack_require__(36);

var _ProfessionalCommunityMotivatorDynamicImage2 = _interopRequireDefault(_ProfessionalCommunityMotivatorDynamicImage);

var _SelfDevelopmentMotivatorDynamicImage = __webpack_require__(37);

var _SelfDevelopmentMotivatorDynamicImage2 = _interopRequireDefault(_SelfDevelopmentMotivatorDynamicImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var motivatorMap = {
    "attainment": _AttainmentMotivatorDynamicImage2.default,
    "career": _CareerMotivatorDynamicImage2.default,
    "family": _FamilyMotivatorDynamicImage2.default,
    "fear-of-failure": _FearOfFailureMotivatorDynamicImage2.default,
    "mastery": _MasteryMotivatorDynamicImage2.default,
    "money": _MoneyMotivatorDynamicImage2.default,
    "options": _OptionsMotivatorDynamicImage2.default,
    "professional-community": _ProfessionalCommunityMotivatorDynamicImage2.default,
    "self-development": _SelfDevelopmentMotivatorDynamicImage2.default
};

var MotivatorDynamicImage = exports.MotivatorDynamicImage = function MotivatorDynamicImage(_ref) {
    var motivator = _ref.motivator,
        scale = _ref.scale;

    var Component = motivatorMap[motivator];
    return _react2.default.createElement(Component, { scale: scale });
};

exports.default = MotivatorDynamicImage;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OptionsMotivatorDynamicImage = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptionsMotivatorDynamicImage = exports.OptionsMotivatorDynamicImage = function OptionsMotivatorDynamicImage(_ref) {
    var scale = _ref.scale;
    return _react2.default.createElement('div', null);
};

exports.default = OptionsMotivatorDynamicImage;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProfessionalCommunityMotivatorDynamicImage = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProfessionalCommunityMotivatorDynamicImage = exports.ProfessionalCommunityMotivatorDynamicImage = function ProfessionalCommunityMotivatorDynamicImage(_ref) {
    var scale = _ref.scale;
    return _react2.default.createElement('div', null);
};

exports.default = ProfessionalCommunityMotivatorDynamicImage;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SelfDevelopmentMotivatorDynamicImage = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelfDevelopmentMotivatorDynamicImage = exports.SelfDevelopmentMotivatorDynamicImage = function SelfDevelopmentMotivatorDynamicImage(_ref) {
    var scale = _ref.scale;
    return _react2.default.createElement('div', null);
};

exports.default = SelfDevelopmentMotivatorDynamicImage;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Timeline = undefined;

var _lodash = __webpack_require__(60);

var _lodash2 = _interopRequireDefault(_lodash);

var _react = __webpack_require__(0);

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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TimelineItem = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimelineItem = exports.TimelineItem = function TimelineItem(_ref) {
    var type = _ref.type;
    return _react2.default.createElement('div', { className: type });
};

exports.default = TimelineItem;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Tree = exports.TimelineItem = exports.Timeline = exports.MotivatorIcon = exports.MotivatorDynamicImage = exports.Graph = exports.ComponentSuite = exports.Avatar = undefined;

var _Avatar = __webpack_require__(5);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _ComponentSuite = __webpack_require__(6);

var _ComponentSuite2 = _interopRequireDefault(_ComponentSuite);

var _Graph = __webpack_require__(7);

var _Graph2 = _interopRequireDefault(_Graph);

var _Motivators = __webpack_require__(8);

var _Timeline = __webpack_require__(3);

var _Tree = __webpack_require__(9);

var _Tree2 = _interopRequireDefault(_Tree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Avatar = _Avatar2.default;
exports.ComponentSuite = _ComponentSuite2.default;
exports.Graph = _Graph2.default;
exports.MotivatorDynamicImage = _Motivators.MotivatorDynamicImage;
exports.MotivatorIcon = _Motivators.MotivatorIcon;
exports.Timeline = _Timeline.Timeline;
exports.TimelineItem = _Timeline.TimelineItem;
exports.Tree = _Tree2.default;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".attainment-motivator-icon .st0 {\n  fill: #3381B8; }\n\n.attainment-motivator-icon .st1 {\n  fill: #F8B133; }\n\n.attainment-motivator-icon .st2 {\n  fill: #F29100; }\n\n.attainment-motivator-icon .st3 {\n  fill: #BD1622; }\n\n.attainment-motivator-icon .st4 {\n  fill: #7A1520; }\n", ""]);

// exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".career-motivator-icon .st0 {\n  fill: #1E8FA7; }\n\n.career-motivator-icon .st1 {\n  opacity: 0.5; }\n\n.career-motivator-icon .st2 {\n  fill: #FFFFFF; }\n\n.career-motivator-icon .st3 {\n  fill: #D9D9D9; }\n\n.career-motivator-icon .st4 {\n  fill: #B25353; }\n\n.career-motivator-icon .st5 {\n  fill: #7A1520; }\n\n.career-motivator-icon .st6 {\n  fill: #9A1915; }\n\n.career-motivator-icon .st7 {\n  fill: #99A5BA; }\n\n.career-motivator-icon .st8 {\n  fill: #BCC6DF; }\n\n.career-motivator-icon .st9 {\n  fill: #E7AB5C; }\n\n.career-motivator-icon .st10 {\n  fill: #C08749; }\n\n.career-motivator-icon .st11 {\n  fill: #1F374F; }\n", ""]);

// exports


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".family-motivator-icon .st0 {\n  fill: #3381B8; }\n\n.family-motivator-icon .st1 {\n  fill: #93C01F; }\n\n.family-motivator-icon .st2 {\n  fill: #BCC6DF; }\n\n.family-motivator-icon .st3 {\n  fill: #99A5BA; }\n\n.family-motivator-icon .st4 {\n  fill: #1F374F; }\n\n.family-motivator-icon .st5 {\n  fill: #966153; }\n\n.family-motivator-icon .st6 {\n  fill: #DE7561; }\n\n.family-motivator-icon .st7 {\n  fill: #F3A07D; }\n\n.family-motivator-icon .st8 {\n  fill: #D9D9D9; }\n\n.family-motivator-icon .st9 {\n  fill: #B25353; }\n\n.family-motivator-icon .st10 {\n  fill: #C08749; }\n\n.family-motivator-icon .st11 {\n  fill: #9099AA; }\n\n.family-motivator-icon .st12 {\n  fill: #F8B133; }\n\n.family-motivator-icon .st13 {\n  fill: #BD1622; }\n\n.family-motivator-icon .st14 {\n  fill: #5C6C26; }\n", ""]);

// exports


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".fear-of-failure-motivator-icon .st0 {\n  fill: #92B153; }\n\n.fear-of-failure-motivator-icon .st1 {\n  fill: #1E8FA7; }\n\n.fear-of-failure-motivator-icon .st2 {\n  fill: #9099AA; }\n\n.fear-of-failure-motivator-icon .st3 {\n  fill: #636362; }\n\n.fear-of-failure-motivator-icon .st4 {\n  fill: #BD1622; }\n\n.fear-of-failure-motivator-icon .st5 {\n  fill: #CE6026; }\n\n.fear-of-failure-motivator-icon .st6 {\n  fill: #BCC6DF; }\n\n.fear-of-failure-motivator-icon .st7 {\n  fill: #C08749; }\n\n.fear-of-failure-motivator-icon .st8 {\n  fill: #745449; }\n\n.fear-of-failure-motivator-icon .st9 {\n  fill: #3F3431; }\n\n.fear-of-failure-motivator-icon .st10 {\n  opacity: 0.7; }\n\n.fear-of-failure-motivator-icon .st11 {\n  fill: #1D1D1B; }\n", ""]);

// exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".mastery-motivator-icon .st0 {\n  fill: #BCC6DF; }\n\n.mastery-motivator-icon .st1 {\n  fill: #643A8D; }\n\n.mastery-motivator-icon .st2 {\n  fill: #CDB888; }\n\n.mastery-motivator-icon .st3 {\n  fill: #E8D198; }\n\n.mastery-motivator-icon .st4 {\n  fill: #FCE5A7; }\n\n.mastery-motivator-icon .st5 {\n  fill: #CC6216; }\n\n.mastery-motivator-icon .st6 {\n  fill: #5C6C26; }\n\n.mastery-motivator-icon .st7 {\n  fill: #1D1D1B; }\n\n.mastery-motivator-icon .st8 {\n  fill: #F8B133; }\n", ""]);

// exports


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".money-motivator-icon .st0 {\n  fill: #B25353; }\n\n.money-motivator-icon .st1 {\n  fill: #93C01F; }\n\n.money-motivator-icon .st2 {\n  fill: #5C6C26; }\n\n.money-motivator-icon .st3 {\n  fill: #8DB723; }\n\n.money-motivator-icon .st4 {\n  fill: #80A229; }\n\n.money-motivator-icon .st5 {\n  fill: #7B982A; }\n\n.money-motivator-icon .st6 {\n  fill: #F8B133; }\n\n.money-motivator-icon .st7 {\n  fill: #E7AB5C; }\n\n.money-motivator-icon .st8 {\n  fill: #CE6026; }\n\n.money-motivator-icon .st9 {\n  fill: #CCCCCC; }\n\n.money-motivator-icon .st10 {\n  fill: #BCB9B8; }\n\n.money-motivator-icon .st11 {\n  fill: #4D4D4D; }\n\n.money-motivator-icon .st12 {\n  fill: #FFFFFF; }\n\n.money-motivator-icon .st13 {\n  fill: #6F6F6E; }\n", ""]);

// exports


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".options-motivator-icon .st0 {\n  fill: #BD1622; }\n\n.options-motivator-icon .st1 {\n  fill: #BCC6DF; }\n\n.options-motivator-icon .st2 {\n  fill: #99A5BA; }\n\n.options-motivator-icon .st3 {\n  fill: #FFFFFF; }\n\n.options-motivator-icon .st4 {\n  fill: #93C01F; }\n\n.options-motivator-icon .st5 {\n  fill: #5C6C26; }\n", ""]);

// exports


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".professional-community-motivator-icon .st0 {\n  fill: #254E6C; }\n\n.professional-community-motivator-icon .st1 {\n  fill: #DD8F75; }\n\n.professional-community-motivator-icon .st2 {\n  fill: #F6B8A3; }\n\n.professional-community-motivator-icon .st3 {\n  fill: #E20613; }\n\n.professional-community-motivator-icon .st4 {\n  fill: #9A1915; }\n\n.professional-community-motivator-icon .st5 {\n  fill: #93C01F; }\n\n.professional-community-motivator-icon .st6 {\n  fill: #596F34; }\n", ""]);

// exports


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".self-development-motivator-icon .st0 {\n  fill: #1E8FA7; }\n\n.self-development-motivator-icon .st1 {\n  fill: #E6E6E6; }\n\n.self-development-motivator-icon .st2 {\n  fill: #FFFFFF; }\n\n.self-development-motivator-icon .st3 {\n  fill: #F8B133; }\n\n.self-development-motivator-icon .st4 {\n  fill: #000C12; }\n\n.self-development-motivator-icon .st5 {\n  fill: #3BA935; }\n\n.self-development-motivator-icon .st6 {\n  fill: #E20613; }\n", ""]);

// exports


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(41);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./AttainmentMotivatorIcon.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./AttainmentMotivatorIcon.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./CareerMotivatorIcon.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./CareerMotivatorIcon.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./FamilyMotivatorIcon.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./FamilyMotivatorIcon.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./FearOfFailureMotivatorIcon.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./FearOfFailureMotivatorIcon.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./MasteryMotivatorIcon.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./MasteryMotivatorIcon.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./MoneyMotivatorIcon.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./MoneyMotivatorIcon.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./OptionsMotivatorIcon.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./OptionsMotivatorIcon.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./ProfessionalCommunityMotivatorIcon.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./ProfessionalCommunityMotivatorIcon.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./SelfDevelopmentMotivatorIcon.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./SelfDevelopmentMotivatorIcon.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 59 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_60__;

/***/ })
/******/ ]);
});