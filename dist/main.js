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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/buttonsSymbols.js":
/*!*******************************!*\
  !*** ./src/buttonsSymbols.js ***!
  \*******************************/
/*! exports provided: shuffledArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shuffledArray\", function() { return shuffledArray; });\nconst symbolsStore = [\"a\", \"b\", \"c\", \"d\", \"e\", \"f\", \"g\", \"h\", \"i\", \"j\", \"k\", \"l\", \"m\", \"n\", \"o\", \"p\", \"q\", \"r\"];\n\nconst symbolsToDispatch = (fieldSize) => ((fieldSize[0] * fieldSize[1]) / 2);\n\nconst shuffle = (array) => array.sort(() => Math.random() - 0.5);\n\nconst shuffledArray = (fieldSize) => shuffle(symbolsStore.slice(0, symbolsToDispatch(fieldSize)));\n\n\n\n\n//# sourceURL=webpack:///./src/buttonsSymbols.js?");

/***/ }),

/***/ "./src/createField.js":
/*!****************************!*\
  !*** ./src/createField.js ***!
  \****************************/
/*! exports provided: createField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createField\", function() { return createField; });\nlet container = document.createElement(\"div\");\ncontainer.class = \"container\"\ndocument.body.appendChild(container)\n\nconst createField = (fieldSize) => {\n    for (let i = 0; i < fieldSize[0]; i++) {\n        let row =  document.createElement(\"div\");\n        row.className = i + \"row\";\n        container.appendChild(row);\n        \n        for(let j = 0; j < fieldSize[1]; j++) {\n            let button = document.createElement(\"button\")\n            row.appendChild(button)\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/createField.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createField */ \"./src/createField.js\");\n/* harmony import */ var _buttonsSymbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttonsSymbols */ \"./src/buttonsSymbols.js\");\n\n\n\nconst simpleField = [4, 4];\nconst mediumField = [5, 5];\nconst largeField = [6, 6];\n\nObject(_createField__WEBPACK_IMPORTED_MODULE_0__[\"createField\"])(largeField);\nconsole.log(Object(_buttonsSymbols__WEBPACK_IMPORTED_MODULE_1__[\"shuffledArray\"])(largeField));\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });