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
/******/ 	return __webpack_require__(__webpack_require__.s = "./components/06-utilities/readmore/readmore.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/06-utilities/readmore/readmore.js":
/*!******************************************************!*\
  !*** ./components/06-utilities/readmore/readmore.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Drupal.behaviors.readmore = {
  attach(context) {
    const ReadSmore = __webpack_require__(/*! read-smore */ "./node_modules/read-smore/dist/index.js");
    const readMores = context.querySelectorAll(".js-read-smore");
    const options = {
      moreText: 'Read more',
      lessText: 'Read less',
      blockClassName: 'u-readmore',
      isInline: false
    };

    // Pass in options param
    ReadSmore(readMores, options).init();

    //// Initializing Inline button
    const readMoresInline = context.querySelectorAll(".js-read-smore-inline");
    const optionsInline = {
      moreText: 'Read more',
      lessText: 'Read less',
      blockClassName: 'u-readmore--inline',
      isInline: true
    };

    // Pass in options param
    ReadSmore(readMoresInline, optionsInline).init();
  }
};

/***/ }),

/***/ "./node_modules/read-smore/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/read-smore/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var e={blockClassName:"read-smore",wordsCount:30,charsCount:null,moreText:"Read More",lessText:"Read Less",isInline:!1};function n(n,r){r=Object.assign({},e,r);var t={originalContentArr:[],truncatedContentArr:[]};function a(e){return void 0!==e.dataset.readSmoreChars||null!==r.charsCount}return{init:function(){for(var e=0,o=n.length;e<o;++e)l=e,void 0,void 0,void 0,void 0,c=function(e){return void 0!==e.dataset.readSmoreChars?parseInt(e.dataset.readSmoreChars):null!==r.charsCount?parseInt(r.charsCount):void 0!==e.dataset.readSmoreWords?parseInt(e.dataset.readSmoreWords):null!==r.wordsCount?parseInt(r.wordsCount):void 0}(i=n[e]),u=function(e,n,r){void 0===r&&(r=!1);var t=function(e){return e.replace(/(^\s*)|(\s*$)/gi,"")}(e);return r?t.split("").slice(0,n-1).join("")+"...":t.split(/\s+/).slice(0,n-1).join(" ")+"..."}(d=i.innerHTML,c,a(i)),C=a(i)?d.length:(s=d,null!==s&&""!==s&&s.replace(/<[^>]+>/g,"")).split(" ").filter(function(e){return""!==e.trim()}).length,t.originalContentArr.push(d),t.truncatedContentArr.push(u),c<C&&(i.innerHTML=t.truncatedContentArr[l],function(e){var a=document.createElement("span");a.className=r.blockClassName+"__link-wrap",a.innerHTML=function(e){return'\n      <a id="'+r.blockClassName+"_"+e+'"\n        class="'+r.blockClassName+'__link"\n        style="cursor:pointer">\n          '+r.moreText+"\n      </a>\n    "}(e),n[e].after(a),function(e){document.querySelector("#"+r.blockClassName+"_"+e).addEventListener("click",function(a){n[e].classList.toggle("is-expanded");var o=a.currentTarget;"true"!==o.dataset.clicked?(n[e].innerHTML=t.originalContentArr[e],o.innerHTML=r.lessText,o.dataset.clicked=!0):(n[e].innerHTML=t.truncatedContentArr[e],o.innerHTML=r.moreText,o.dataset.clicked=!1)})}(e)}(l));var s,i,l,c,d,u,C}}}n.options=e,module.exports=n;
//# sourceMappingURL=index.js.map


/***/ })

/******/ });
//# sourceMappingURL=readmore.js.map