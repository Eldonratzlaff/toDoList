"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["adddel"],{

/***/ "./src/adddel.js":
/*!***********************!*\
  !*** ./src/adddel.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// import tasks from './index';\n\nconst reIndex = () => {\n  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];\n  for (let i = 0; i < tasks.length; i += 1) {\n    tasks[i].index = i + 1;\n  }\n  localStorage.setItem('tasks', JSON.stringify(tasks));\n};\n\n// remove an element\n\nwindow.deletebtn = (index) => {\n  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];\n  const result = tasks.filter((item) => item.index !== index);\n  const newtasks = result;\n  for (let i = 0; i < newtasks.length; i += 1) {\n    newtasks[i].index = i + 1;\n  }\n  localStorage.setItem('tasks', JSON.stringify(newtasks));\n  window.location.reload();\n};\n\n// checket\nwindow.checkboxx = (i) => {\n  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];\n  if (tasks[i].Completed === false) {\n    tasks[i].Completed = true;\n  } else { tasks[i].Completed = false; }\n  localStorage.setItem('tasks', JSON.stringify(tasks));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reIndex);\n\n//# sourceURL=webpack://todolist/./src/adddel.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/adddel.js"));
/******/ }
]);