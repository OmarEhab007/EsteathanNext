"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/parentPre/[id]/page",{

/***/ "(app-pages-browser)/./app/parentPre/[id]/page.jsx":
/*!*************************************!*\
  !*** ./app/parentPre/[id]/page.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ParentPre; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction ParentPre() {\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    console.log(params);\n    // search for student with id = params.id in the database and get the student's parent's phone number\n    const [searchNumber, setSearchNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [studentId, setStudentId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleSearch = async (event)=>{\n        event.preventDefault();\n        const response = await fetch(\"/api/students/\".concat(searchNumber));\n        const result = await response.json();\n        const student = result.data;\n        console.log(student);\n        if (student) {\n            setStudentId(student.id);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"reqParent\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container h-100\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: \" d-flex justify-content-center align-items-end text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"\",\n                            children: \" أدخل كود التأكيد المرسل الى هاتف ولي الأمر \"\n                        }, void 0, false, {\n                            fileName: \"/home/omar/projects/zezo/EsteathanNext-main/app/parentPre/[id]/page.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/omar/projects/zezo/EsteathanNext-main/app/parentPre/[id]/page.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"d-flex justify-content-center align-items-center form-outer \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            action: \"\",\n                            className: \"w-50 p-5 border-success\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    for: \"personalId\",\n                                    className: \"form-labe mb-3\",\n                                    children: [\n                                        \" \",\n                                        \"كود التأكيد\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/omar/projects/zezo/EsteathanNext-main/app/parentPre/[id]/page.jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"personalId\",\n                                    name: \"personalId\",\n                                    className: \"form-control border-success\"\n                                }, void 0, false, {\n                                    fileName: \"/home/omar/projects/zezo/EsteathanNext-main/app/parentPre/[id]/page.jsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"./student.html\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-success mt-3 text-center m-auto d-block \",\n                                        type: \"button\",\n                                        children: [\n                                            \" \",\n                                            \"تأكيد\",\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/omar/projects/zezo/EsteathanNext-main/app/parentPre/[id]/page.jsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/omar/projects/zezo/EsteathanNext-main/app/parentPre/[id]/page.jsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/omar/projects/zezo/EsteathanNext-main/app/parentPre/[id]/page.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/omar/projects/zezo/EsteathanNext-main/app/parentPre/[id]/page.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/omar/projects/zezo/EsteathanNext-main/app/parentPre/[id]/page.jsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/omar/projects/zezo/EsteathanNext-main/app/parentPre/[id]/page.jsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(ParentPre, \"vRiK70z/9NQe/xTZ2hjAaFuKFzk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams\n    ];\n});\n_c = ParentPre;\nvar _c;\n$RefreshReg$(_c, \"ParentPre\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYXJlbnRQcmUvW2lkXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUN3QztBQUNJO0FBRTdCLFNBQVNHOztJQUN0QixNQUFNQyxTQUFTRiwwREFBU0E7SUFDeEJHLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixxR0FBcUc7SUFDckcsTUFBTSxDQUFDRyxjQUFjQyxnQkFBZ0IsR0FBR1AsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDUSxXQUFXQyxhQUFhLEdBQUdULCtDQUFRQSxDQUFDO0lBRTNDLE1BQU1VLGVBQWUsT0FBT0M7UUFDMUJBLE1BQU1DLGNBQWM7UUFDcEIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLGlCQUE4QixPQUFiUjtRQUM5QyxNQUFNUyxTQUFTLE1BQU1GLFNBQVNHLElBQUk7UUFDbEMsTUFBTUMsVUFBVUYsT0FBT0csSUFBSTtRQUMzQmQsUUFBUUMsR0FBRyxDQUFDWTtRQUNaLElBQUlBLFNBQVM7WUFDWFIsYUFBYVEsUUFBUUUsRUFBRTtRQUN6QjtJQUNGO0lBR0EscUJBQ0U7a0JBQ0UsNEVBQUNDO1lBQUtDLFdBQVU7c0JBQ2QsNEVBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQU9GLFdBQVU7a0NBQ2hCLDRFQUFDRzs0QkFBR0gsV0FBVTtzQ0FBRzs7Ozs7Ozs7Ozs7a0NBR25CLDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ0k7NEJBQUtDLFFBQU87NEJBQUdMLFdBQVU7OzhDQUN4Qiw4REFBQ007b0NBQU1DLEtBQUk7b0NBQWFQLFdBQVU7O3dDQUMvQjt3Q0FBSTt3Q0FDTzs7Ozs7Ozs4Q0FFZCw4REFBQ1E7b0NBQ0NDLE1BQUs7b0NBQ0xYLElBQUc7b0NBQ0hZLE1BQUs7b0NBQ0xWLFdBQVU7Ozs7Ozs4Q0FHWiw4REFBQ1c7b0NBQUVDLE1BQUs7OENBQ04sNEVBQUNDO3dDQUNDYixXQUFVO3dDQUNWUyxNQUFLOzs0Q0FFSjs0Q0FBSTs0Q0FDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTeEI7R0F2RHdCNUI7O1FBQ1BELHNEQUFTQTs7O0tBREZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYXJlbnRQcmUvW2lkXS9wYWdlLmpzeD80MjEwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFyZW50UHJlKCkge1xyXG4gIGNvbnN0IHBhcmFtcyA9IHVzZVBhcmFtcygpO1xyXG4gIGNvbnNvbGUubG9nKHBhcmFtcyk7XHJcbiAgLy8gc2VhcmNoIGZvciBzdHVkZW50IHdpdGggaWQgPSBwYXJhbXMuaWQgaW4gdGhlIGRhdGFiYXNlIGFuZCBnZXQgdGhlIHN0dWRlbnQncyBwYXJlbnQncyBwaG9uZSBudW1iZXJcclxuICBjb25zdCBbc2VhcmNoTnVtYmVyLCBzZXRTZWFyY2hOdW1iZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N0dWRlbnRJZCwgc2V0U3R1ZGVudElkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvc3R1ZGVudHMvJHtzZWFyY2hOdW1iZXJ9YCk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zdCBzdHVkZW50ID0gcmVzdWx0LmRhdGE7XHJcbiAgICBjb25zb2xlLmxvZyhzdHVkZW50KTtcclxuICAgIGlmIChzdHVkZW50KSB7XHJcbiAgICAgIHNldFN0dWRlbnRJZChzdHVkZW50LmlkKTtcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwicmVxUGFyZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgaC0xMDBcIj5cclxuICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWVuZCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiXCI+INij2K/YrtmEINmD2YjYryDYp9mE2KrYo9mD2YrYryDYp9mE2YXYsdiz2YQg2KfZhNmJINmH2KfYqtmBINmI2YTZiiDYp9mE2KPZhdixIDwvaDQ+XHJcbiAgICAgICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBmb3JtLW91dGVyIFwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBjbGFzc05hbWU9XCJ3LTUwIHAtNSBib3JkZXItc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwZXJzb25hbElkXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgINmD2YjYryDYp9mE2KrYo9mD2YrYr3tcIiBcIn1cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJwZXJzb25hbElkXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJzb25hbElkXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBib3JkZXItc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi4vc3R1ZGVudC5odG1sXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBtdC0zIHRleHQtY2VudGVyIG0tYXV0byBkLWJsb2NrIFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgINiq2KPZg9mK2K97XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUGFyYW1zIiwiUGFyZW50UHJlIiwicGFyYW1zIiwiY29uc29sZSIsImxvZyIsInNlYXJjaE51bWJlciIsInNldFNlYXJjaE51bWJlciIsInN0dWRlbnRJZCIsInNldFN0dWRlbnRJZCIsImhhbmRsZVNlYXJjaCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwicmVzdWx0IiwianNvbiIsInN0dWRlbnQiLCJkYXRhIiwiaWQiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaGVhZGVyIiwiaDQiLCJmb3JtIiwiYWN0aW9uIiwibGFiZWwiLCJmb3IiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwiYSIsImhyZWYiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/parentPre/[id]/page.jsx\n"));

/***/ })

});