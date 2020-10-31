/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar dom = function () {\n\t//Global Count Variable\n\tvar _slidePosition = 1;\n\tvar _movement = 0;\n\n\t//Selectors\n\tvar slides = document.querySelectorAll(\".sliderImage\");\n\tvar slideArray = [...slides];\n\tvar rightArrow = document.querySelector(\".arrowRight\");\n\tvar leftArrow = document.querySelector(\".arrowLeft\");\n\n\tvar sliderSet = document.querySelector(\".sliderSet\");\n\n\t//Event\n\t//Arrow Action\n\trightArrow.addEventListener(\"click\", function () {\n\t\tmoveRight(slideArray);\n\t});\n\tleftArrow.addEventListener(\"click\", function () {\n\t\tmoveLeft(slideArray);\n\t});\n\n\tvar currentSlide = () => {\n\t\treturn _slidePosition;\n\t};\n\n\tvar slideOne = function () {\n\t\tsliderSet.style.transform = `translateX(0px)`;\n\t\t_slidePosition = 1;\n\t\t_movement = 0;\n\t};\n\n\tvar slideLast = function () {\n\t\t_movement = 1200 * (slideArray.length - 1);\n\n\t\tsliderSet.style.transform = `translateX(-${_movement}px)`;\n\t\t_slidePosition = slideArray.length;\n\t};\n\n\tvar moveRight = function (slideArray) {\n\t\tif (_slidePosition === slideArray.length) {\n\t\t\tclearTimeout(timeOut);\n\t\t\tslideOne();\n\t\t\tcurrentBubble();\n\t\t\ttimeFunc();\n\t\t} else {\n\t\t\tclearTimeout(timeOut);\n\n\t\t\t_movement += 1200;\n\t\t\tsliderSet.style.transform = `translateX(-${_movement}px)`;\n\t\t\t_slidePosition += 1;\n\n\t\t\tcurrentBubble();\n\t\t\ttimeFunc();\n\t\t}\n\t};\n\n\tvar moveLeft = function (slideArray) {\n\t\tif (_slidePosition === 1) {\n\t\t\tclearTimeout(timeOut);\n\t\t\tslideLast();\n\t\t\tcurrentBubble();\n\t\t\ttimeFunc();\n\t\t} else {\n\t\t\tclearTimeout(timeOut);\n\n\t\t\t_movement -= 1200;\n\t\t\tsliderSet.style.transform = `translateX(-${_movement}px)`;\n\t\t\t_slidePosition -= 1;\n\n\t\t\tcurrentBubble();\n\t\t\ttimeFunc();\n\t\t}\n\t};\n\n\t//Set timeout\n\n\tvar timeOut;\n\n\tvar timeFunc = function () {\n\t\ttimeOut = setTimeout(function () {\n\t\t\tmoveRight(slideArray);\n\t\t}, 2000);\n\t};\n\n\ttimeFunc();\n\n\t//Bubble Zone\n\n\t//Selectors\n\tvar bubbleArea = document.querySelector(\".bubbles\");\n\tvar bubble = `<div class=\"bubble\"></div>`;\n\tvar bubbleArray = [];\n\n\tvar bubbleSelect = function (bubble) {\n\t\tlet bubbleIndex = bubbleArray.indexOf(bubble) + 1;\n\t\tlet distance = bubbleIndex - _slidePosition;\n\t\tlet moveDistance = distance * 1200;\n\n\t\t_slidePosition += distance;\n\t\t_movement += moveDistance;\n\n\t\tsliderSet.style.transform = `translateX(-${_movement}px)`;\n\n\t\tcurrentBubble();\n\t};\n\n\tvar currentBubble = function () {\n\t\tbubbleArray.forEach((bubble) => {\n\t\t\tif (bubbleArray.indexOf(bubble) === _slidePosition - 1) {\n\t\t\t\tbubble.classList.toggle(\"selected\");\n\t\t\t} else {\n\t\t\t\tbubble.classList.remove(\"selected\");\n\t\t\t}\n\t\t});\n\t};\n\n\tvar bubbleGenerator = function () {\n\t\tfor (let i = 0; i < slideArray.length; i++) {\n\t\t\tbubbleArea.innerHTML += bubble;\n\t\t}\n\n\t\tlet bubbles = document.querySelectorAll(\".bubble\");\n\t\tbubbleArray = [...bubbles];\n\t\tbubbleArray.forEach((bubble) => {\n\t\t\tbubble.addEventListener(\"click\", function () {\n\t\t\t\tbubbleSelect(bubble);\n\t\t\t});\n\n\t\t\tcurrentBubble(bubble);\n\t\t});\n\t};\n\n\treturn {\n\t\tcurrentSlide,\n\t\trightArrow,\n\t\tbubbleGenerator,\n\t};\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\n\n\n//# sourceURL=webpack://slider/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\n\n\n\n//Module Start\n\nconst dom = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.default)();\ndom.bubbleGenerator();\n\n\n//# sourceURL=webpack://slider/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;