/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/analytics.js":
/*!**************************!*\
  !*** ./src/analytics.js ***!
  \**************************/
/***/ (function() {

eval("function createAnalytics() {\n  var counter = 0;\n  var isExisted = true;\n  var updateAnalytics = function updateAnalytics() {\n    counter += 1;\n    console.log('Clicks: ' + getAnalytics());\n  };\n  document.addEventListener('click', updateAnalytics);\n  function getAnalytics() {\n    if (isExisted) {\n      return counter;\n    }\n    console.log('Ops, there is no analytics');\n  }\n  return {\n    getAnalytics: getAnalytics,\n    removeAnalytics: function removeAnalytics() {\n      document.removeEventListener('click', updateAnalytics);\n      isExisted = false;\n    }\n  };\n}\nwindow.analytics = createAnalytics();\n\n//# sourceURL=webpack://webpack_test/./src/analytics.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/analytics.js"]();
/******/ 	
/******/ })()
;