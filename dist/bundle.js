/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/utility.ts":
/*!***************************!*\
  !*** ./src/js/utility.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STUDENTS_COUNT: () => (/* binding */ STUDENTS_COUNT),
/* harmony export */   addition: () => (/* binding */ addition),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   testing: () => (/* binding */ testing)
/* harmony export */ });
function multiply(a, b, c) {
    return a * b * c;
}
/*
export default function addition(a, b, c) {
    return a+b+c;
}
*/
var STUDENTS_COUNT = 23;
function addition(a, b, c) {
    return a + b + c;
}
function testing() {
    console.log('testing hai');
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/js/utility.ts");
//import { mul, add } from "./utility.js";

//import add from "./utility.js";
var result = _utility__WEBPACK_IMPORTED_MODULE_0__.addition(2, 3, 4);
console.log(result);
console.log(_utility__WEBPACK_IMPORTED_MODULE_0__.STUDENTS_COUNT);
var result1 = _utility__WEBPACK_IMPORTED_MODULE_0__.multiply(2, 3, 4);
console.log(result1);
console.log('done');
_utility__WEBPACK_IMPORTED_MODULE_0__.testing();

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyxRQUFRLENBQUMsQ0FBVSxFQUFFLENBQVUsRUFBRSxDQUFVO0lBQ2hELE9BQU8sQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7QUFDakIsQ0FBQztBQUVEOzs7O0VBSUU7QUFDSyxJQUFNLGNBQWMsR0FBRyxFQUFFLENBQUM7QUFFakMsU0FBUyxRQUFRLENBQUMsQ0FBVSxFQUFFLENBQVUsRUFBRSxDQUFVO0lBQ2hELE9BQU8sQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7QUFDakIsQ0FBQztBQUVELFNBQVMsT0FBTztJQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFL0IsQ0FBQztBQU1BOzs7Ozs7O1VDeEJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkMsMENBQTBDO0FBQ047QUFFckMsaUNBQWlDO0FBR2pDLElBQU0sTUFBTSxHQUFHLDhDQUFnQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLG9EQUFzQixDQUFDLENBQUM7QUFFcEMsSUFBTSxPQUFPLEdBQUcsOENBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUUxQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEIsNkNBQWUsRUFBRSxDQUFDOzs7Ozs7Ozs7O0FDZmxCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjaXB0X3ByYWN0aXNlLy4vc3JjL2pzL3V0aWxpdHkudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjaXB0X3ByYWN0aXNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY2lwdF9wcmFjdGlzZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHlwZXNjaXB0X3ByYWN0aXNlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHlwZXNjaXB0X3ByYWN0aXNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjaXB0X3ByYWN0aXNlLy4vc3JjL2pzL2luZGV4LnRzIiwid2VicGFjazovL3R5cGVzY2lwdF9wcmFjdGlzZS8uL3NyYy9zY3NzL21haW4uc2Nzcz9jYmI3Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIG11bHRpcGx5KGEgOiBudW1iZXIsIGIgOiBudW1iZXIsIGMgOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGEqYipjO1xyXG59XHJcblxyXG4vKlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRpdGlvbihhLCBiLCBjKSB7XHJcbiAgICByZXR1cm4gYStiK2M7XHJcbn1cclxuKi9cclxuZXhwb3J0IGNvbnN0IFNUVURFTlRTX0NPVU5UID0gMjM7XHJcblxyXG5mdW5jdGlvbiBhZGRpdGlvbihhIDogbnVtYmVyLCBiIDogbnVtYmVyLCBjIDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBhK2IrYztcclxufVxyXG5cclxuZnVuY3Rpb24gdGVzdGluZygpIHtcclxuICAgIGNvbnNvbGUubG9nKCd0ZXN0aW5nIGhhaScpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIG11bHRpcGx5LFxyXG5cdGFkZGl0aW9uLFxyXG4gICAgdGVzdGluZ1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIgLy9pbXBvcnQgeyBtdWwsIGFkZCB9IGZyb20gXCIuL3V0aWxpdHkuanNcIjtcclxuaW1wb3J0ICogYXMgdXRpbGl0eSBmcm9tICcuL3V0aWxpdHknO1xyXG5cclxuLy9pbXBvcnQgYWRkIGZyb20gXCIuL3V0aWxpdHkuanNcIjtcclxuXHJcblxyXG5jb25zdCByZXN1bHQgPSB1dGlsaXR5LmFkZGl0aW9uKDIsIDMsIDQpO1xyXG5cclxuY29uc29sZS5sb2cocmVzdWx0KTtcclxuY29uc29sZS5sb2codXRpbGl0eS5TVFVERU5UU19DT1VOVCk7XHJcblxyXG5jb25zdCByZXN1bHQxID0gdXRpbGl0eS5tdWx0aXBseSgyLCAzLCA0KTtcclxuXHJcbmNvbnNvbGUubG9nKHJlc3VsdDEpO1xyXG5jb25zb2xlLmxvZygnZG9uZScpO1xyXG51dGlsaXR5LnRlc3RpbmcoKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=