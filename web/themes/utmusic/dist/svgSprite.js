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
/******/ 	return __webpack_require__(__webpack_require__.s = "./webpack/svgSprite.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./images sync recursive \\.svg$":
/*!****************************!*\
  !*** ./images sync \.svg$ ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./icons/UTMS_logo.svg": "./images/icons/UTMS_logo.svg",
	"./icons/admission.svg": "./images/icons/admission.svg",
	"./icons/alert.svg": "./images/icons/alert.svg",
	"./icons/apply.svg": "./images/icons/apply.svg",
	"./icons/arrow_next.svg": "./images/icons/arrow_next.svg",
	"./icons/arrow_previous.svg": "./images/icons/arrow_previous.svg",
	"./icons/calendar.svg": "./images/icons/calendar.svg",
	"./icons/chevron-down-solid.svg": "./images/icons/chevron-down-solid.svg",
	"./icons/chevron-left-solid.svg": "./images/icons/chevron-left-solid.svg",
	"./icons/chevron-right-solid.svg": "./images/icons/chevron-right-solid.svg",
	"./icons/defy_gravity.svg": "./images/icons/defy_gravity.svg",
	"./icons/download.svg": "./images/icons/download.svg",
	"./icons/external link.svg": "./images/icons/external link.svg",
	"./icons/featured_article.svg": "./images/icons/featured_article.svg",
	"./icons/featured_event.svg": "./images/icons/featured_event.svg",
	"./icons/graduate.svg": "./images/icons/graduate.svg",
	"./icons/hamburger.svg": "./images/icons/hamburger.svg",
	"./icons/interface_link_square.svg": "./images/icons/interface_link_square.svg",
	"./icons/link-shevron.svg": "./images/icons/link-shevron.svg",
	"./icons/location.svg": "./images/icons/location.svg",
	"./icons/logo-footer.svg": "./images/icons/logo-footer.svg",
	"./icons/logo.svg": "./images/icons/logo.svg",
	"./icons/mail.svg": "./images/icons/mail.svg",
	"./icons/minus-solid.svg": "./images/icons/minus-solid.svg",
	"./icons/non-music.svg": "./images/icons/non-music.svg",
	"./icons/phone.svg": "./images/icons/phone.svg",
	"./icons/play.svg": "./images/icons/play.svg",
	"./icons/plus-solid.svg": "./images/icons/plus-solid.svg",
	"./icons/quotes.svg": "./images/icons/quotes.svg",
	"./icons/search.svg": "./images/icons/search.svg",
	"./icons/social-facebook.svg": "./images/icons/social-facebook.svg",
	"./icons/social-instagram.svg": "./images/icons/social-instagram.svg",
	"./icons/social-linkedin.svg": "./images/icons/social-linkedin.svg",
	"./icons/social-twitter.svg": "./images/icons/social-twitter.svg",
	"./icons/social-youtube.svg": "./images/icons/social-youtube.svg",
	"./icons/time.svg": "./images/icons/time.svg",
	"./icons/timer.svg": "./images/icons/timer.svg",
	"./icons/undergraduates.svg": "./images/icons/undergraduates.svg",
	"./icons/xmark.svg": "./images/icons/xmark.svg",
	"./svg/external-link-square-alt-white.svg": "./images/svg/external-link-square-alt-white.svg",
	"./svg/external-link-square-alt.svg": "./images/svg/external-link-square-alt.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./images sync recursive \\.svg$";

/***/ }),

/***/ "./images/icons/UTMS_logo.svg":
/*!************************************!*\
  !*** ./images/icons/UTMS_logo.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "UTMS_logo-usage",
      viewBox: "0 0 381 93",
      url: __webpack_require__.p + "../dist/icons.svg#UTMS_logo",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/admission.svg":
/*!************************************!*\
  !*** ./images/icons/admission.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "admission-usage",
      viewBox: "0 0 30 41",
      url: __webpack_require__.p + "../dist/icons.svg#admission",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/alert.svg":
/*!********************************!*\
  !*** ./images/icons/alert.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "alert-usage",
      viewBox: "0 0 31 28",
      url: __webpack_require__.p + "../dist/icons.svg#alert",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/apply.svg":
/*!********************************!*\
  !*** ./images/icons/apply.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "apply-usage",
      viewBox: "0 0 34 34",
      url: __webpack_require__.p + "../dist/icons.svg#apply",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/arrow_next.svg":
/*!*************************************!*\
  !*** ./images/icons/arrow_next.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "arrow_next-usage",
      viewBox: "0 0 37 37",
      url: __webpack_require__.p + "../dist/icons.svg#arrow_next",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/arrow_previous.svg":
/*!*****************************************!*\
  !*** ./images/icons/arrow_previous.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "arrow_previous-usage",
      viewBox: "0 0 37 37",
      url: __webpack_require__.p + "../dist/icons.svg#arrow_previous",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/calendar.svg":
/*!***********************************!*\
  !*** ./images/icons/calendar.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "calendar-usage",
      viewBox: "0 0 24 24",
      url: __webpack_require__.p + "../dist/icons.svg#calendar",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/chevron-down-solid.svg":
/*!*********************************************!*\
  !*** ./images/icons/chevron-down-solid.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "chevron-down-solid-usage",
      viewBox: "0 0 27 27",
      url: __webpack_require__.p + "../dist/icons.svg#chevron-down-solid",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/chevron-left-solid.svg":
/*!*********************************************!*\
  !*** ./images/icons/chevron-left-solid.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "chevron-left-solid-usage",
      viewBox: "0 0 27 27",
      url: __webpack_require__.p + "../dist/icons.svg#chevron-left-solid",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/chevron-right-solid.svg":
/*!**********************************************!*\
  !*** ./images/icons/chevron-right-solid.svg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "chevron-right-solid-usage",
      viewBox: "0 0 27 27",
      url: __webpack_require__.p + "../dist/icons.svg#chevron-right-solid",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/defy_gravity.svg":
/*!***************************************!*\
  !*** ./images/icons/defy_gravity.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "defy_gravity-usage",
      viewBox: "0 0 123 71",
      url: __webpack_require__.p + "../dist/icons.svg#defy_gravity",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/download.svg":
/*!***********************************!*\
  !*** ./images/icons/download.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "download-usage",
      viewBox: "0 0 32 32",
      url: __webpack_require__.p + "../dist/icons.svg#download",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/external link.svg":
/*!****************************************!*\
  !*** ./images/icons/external link.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "external link-usage",
      viewBox: "0 0 16 17",
      url: __webpack_require__.p + "../dist/icons.svg#external link",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/featured_article.svg":
/*!*******************************************!*\
  !*** ./images/icons/featured_article.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "featured_article-usage",
      viewBox: "0 0 38 36",
      url: __webpack_require__.p + "../dist/icons.svg#featured_article",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/featured_event.svg":
/*!*****************************************!*\
  !*** ./images/icons/featured_event.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "featured_event-usage",
      viewBox: "0 0 36 40",
      url: __webpack_require__.p + "../dist/icons.svg#featured_event",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/graduate.svg":
/*!***********************************!*\
  !*** ./images/icons/graduate.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "graduate-usage",
      viewBox: "0 0 42 37",
      url: __webpack_require__.p + "../dist/icons.svg#graduate",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/hamburger.svg":
/*!************************************!*\
  !*** ./images/icons/hamburger.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "hamburger-usage",
      viewBox: "0 0 69 47",
      url: __webpack_require__.p + "../dist/icons.svg#hamburger",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/interface_link_square.svg":
/*!************************************************!*\
  !*** ./images/icons/interface_link_square.svg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "interface_link_square-usage",
      viewBox: "0 0 24 24",
      url: __webpack_require__.p + "../dist/icons.svg#interface_link_square",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/link-shevron.svg":
/*!***************************************!*\
  !*** ./images/icons/link-shevron.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "link-shevron-usage",
      viewBox: "0 0 8 8",
      url: __webpack_require__.p + "../dist/icons.svg#link-shevron",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/location.svg":
/*!***********************************!*\
  !*** ./images/icons/location.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "location-usage",
      viewBox: "0 0 24 24",
      url: __webpack_require__.p + "../dist/icons.svg#location",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/logo-footer.svg":
/*!**************************************!*\
  !*** ./images/icons/logo-footer.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "logo-footer-usage",
      viewBox: "0 0 210 84",
      url: __webpack_require__.p + "../dist/icons.svg#logo-footer",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/logo.svg":
/*!*******************************!*\
  !*** ./images/icons/logo.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "logo-usage",
      viewBox: "0 0 600 178.49",
      url: __webpack_require__.p + "../dist/icons.svg#logo",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/mail.svg":
/*!*******************************!*\
  !*** ./images/icons/mail.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "mail-usage",
      viewBox: "0 0 24 24",
      url: __webpack_require__.p + "../dist/icons.svg#mail",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/minus-solid.svg":
/*!**************************************!*\
  !*** ./images/icons/minus-solid.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "minus-solid-usage",
      viewBox: "0 0 27 27",
      url: __webpack_require__.p + "../dist/icons.svg#minus-solid",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/non-music.svg":
/*!************************************!*\
  !*** ./images/icons/non-music.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "non-music-usage",
      viewBox: "0 0 33 37",
      url: __webpack_require__.p + "../dist/icons.svg#non-music",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/phone.svg":
/*!********************************!*\
  !*** ./images/icons/phone.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "phone-usage",
      viewBox: "0 0 24 24",
      url: __webpack_require__.p + "../dist/icons.svg#phone",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/play.svg":
/*!*******************************!*\
  !*** ./images/icons/play.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "play-usage",
      viewBox: "0 0 56 53",
      url: __webpack_require__.p + "../dist/icons.svg#play",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/plus-solid.svg":
/*!*************************************!*\
  !*** ./images/icons/plus-solid.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "plus-solid-usage",
      viewBox: "0 0 27 27",
      url: __webpack_require__.p + "../dist/icons.svg#plus-solid",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/quotes.svg":
/*!*********************************!*\
  !*** ./images/icons/quotes.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "quotes-usage",
      viewBox: "0 0 29 24",
      url: __webpack_require__.p + "../dist/icons.svg#quotes",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/search.svg":
/*!*********************************!*\
  !*** ./images/icons/search.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "search-usage",
      viewBox: "0 0 27 27",
      url: __webpack_require__.p + "../dist/icons.svg#search",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/social-facebook.svg":
/*!******************************************!*\
  !*** ./images/icons/social-facebook.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "social-facebook-usage",
      viewBox: "0 0 28 28",
      url: __webpack_require__.p + "../dist/icons.svg#social-facebook",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/social-instagram.svg":
/*!*******************************************!*\
  !*** ./images/icons/social-instagram.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "social-instagram-usage",
      viewBox: "0 0 28 28",
      url: __webpack_require__.p + "../dist/icons.svg#social-instagram",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/social-linkedin.svg":
/*!******************************************!*\
  !*** ./images/icons/social-linkedin.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "social-linkedin-usage",
      viewBox: "0 0 28 28",
      url: __webpack_require__.p + "../dist/icons.svg#social-linkedin",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/social-twitter.svg":
/*!*****************************************!*\
  !*** ./images/icons/social-twitter.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "social-twitter-usage",
      viewBox: "0 0 28 28",
      url: __webpack_require__.p + "../dist/icons.svg#social-twitter",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/social-youtube.svg":
/*!*****************************************!*\
  !*** ./images/icons/social-youtube.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "social-youtube-usage",
      viewBox: "0 0 31 28",
      url: __webpack_require__.p + "../dist/icons.svg#social-youtube",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/time.svg":
/*!*******************************!*\
  !*** ./images/icons/time.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "time-usage",
      viewBox: "0 0 24 24",
      url: __webpack_require__.p + "../dist/icons.svg#time",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/timer.svg":
/*!********************************!*\
  !*** ./images/icons/timer.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "timer-usage",
      viewBox: "0 0 22 22",
      url: __webpack_require__.p + "../dist/icons.svg#timer",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/undergraduates.svg":
/*!*****************************************!*\
  !*** ./images/icons/undergraduates.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "undergraduates-usage",
      viewBox: "0 0 31 37",
      url: __webpack_require__.p + "../dist/icons.svg#undergraduates",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/xmark.svg":
/*!********************************!*\
  !*** ./images/icons/xmark.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "xmark-usage",
      viewBox: "0 0 320 512",
      url: __webpack_require__.p + "../dist/icons.svg#xmark",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/svg/external-link-square-alt-white.svg":
/*!*******************************************************!*\
  !*** ./images/svg/external-link-square-alt-white.svg ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e5f467c3cbab382654997e403a7e2d4f.svg");

/***/ }),

/***/ "./images/svg/external-link-square-alt.svg":
/*!*************************************************!*\
  !*** ./images/svg/external-link-square-alt.svg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2642479dc43f579eb0feb8b6405ada1f.svg");

/***/ }),

/***/ "./webpack/svgSprite.js":
/*!******************************!*\
  !*** ./webpack/svgSprite.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(__webpack_require__("./images sync recursive \\.svg$"));

/***/ })

/******/ });
//# sourceMappingURL=svgSprite.js.map