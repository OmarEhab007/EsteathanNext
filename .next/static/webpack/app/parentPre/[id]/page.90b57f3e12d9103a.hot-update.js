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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ParentPre; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ \"(app-pages-browser)/./node_modules/mongoose/dist/browser.umd.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction ParentPre() {\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    console.log(params);\n    // search for student with id = params.id in the database and get the student's parent's phone number\n    const [searchNumber, setSearchNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [studentId, setStudentId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [parentPhone, setParentPhone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const id = params.id;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"reqParent\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container h-100\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: \" d-flex justify-content-center align-items-end text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"\",\n                            children: \" أدخل كود التأكيد المرسل الى هاتف ولي الأمر \"\n                        }, void 0, false, {\n                            fileName: \"/home/omar/projects/zezo/EsteathanNext-main/app/parentPre/[id]/page.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/omar/projects/zezo/EsteathanNext-main/app/parentPre/[id]/page.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"d-flex justify-content-center align-items-center form-outer \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            action: \"\",\n                            className: \"w-50 p-5 border-success\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    for: \"personalId\",\n                                    className: \"form-labe mb-3\",\n                                    children: [\n                                        \" \",\n                                        \"كود التأكيد\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/omar/projects/zezo/EsteathanNext-main/app/parentPre/[id]/page.jsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"personalId\",\n                                    name: \"personalId\",\n                                    className: \"form-control border-success\"\n                                }, void 0, false, {\n                                    fileName: \"/home/omar/projects/zezo/EsteathanNext-main/app/parentPre/[id]/page.jsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"./student.html\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-success mt-3 text-center m-auto d-block \",\n                                        type: \"button\",\n                                        children: [\n                                            \" \",\n                                            \"تأكيد\",\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/omar/projects/zezo/EsteathanNext-main/app/parentPre/[id]/page.jsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/omar/projects/zezo/EsteathanNext-main/app/parentPre/[id]/page.jsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/omar/projects/zezo/EsteathanNext-main/app/parentPre/[id]/page.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/omar/projects/zezo/EsteathanNext-main/app/parentPre/[id]/page.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/omar/projects/zezo/EsteathanNext-main/app/parentPre/[id]/page.jsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/omar/projects/zezo/EsteathanNext-main/app/parentPre/[id]/page.jsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(ParentPre, \"lKeXwADVq1tJ9D+ZnWWP5QEbxXk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams\n    ];\n});\n_c = ParentPre;\nvar _c;\n$RefreshReg$(_c, \"ParentPre\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYXJlbnRQcmUvW2lkXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ3dEO0FBQ1o7QUFDYjtBQUVoQixTQUFTTTs7SUFDdEIsTUFBTUMsU0FBU0gsMERBQVNBO0lBQ3hCSSxRQUFRQyxHQUFHLENBQUNGO0lBQ1oscUdBQXFHO0lBQ3JHLE1BQU0sQ0FBQ0csY0FBY0MsZ0JBQWdCLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ1MsV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNXLGFBQWFDLGVBQWUsR0FBR1osK0NBQVFBLENBQUM7SUFDL0MsTUFBTWEsS0FBS1QsT0FBT1MsRUFBRTtJQUlwQixxQkFDRTtrQkFDRSw0RUFBQ0M7WUFBS0MsV0FBVTtzQkFDZCw0RUFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBT0YsV0FBVTtrQ0FDaEIsNEVBQUNHOzRCQUFHSCxXQUFVO3NDQUFHOzs7Ozs7Ozs7OztrQ0FHbkIsOERBQUNDO3dCQUFJRCxXQUFVO2tDQUNiLDRFQUFDSTs0QkFBS0MsUUFBTzs0QkFBR0wsV0FBVTs7OENBQ3hCLDhEQUFDTTtvQ0FBTUMsS0FBSTtvQ0FBYVAsV0FBVTs7d0NBQy9CO3dDQUFJO3dDQUNPOzs7Ozs7OzhDQUVkLDhEQUFDUTtvQ0FDQ0MsTUFBSztvQ0FDTFgsSUFBRztvQ0FDSFksTUFBSztvQ0FDTFYsV0FBVTs7Ozs7OzhDQUdaLDhEQUFDVztvQ0FBRUMsTUFBSzs4Q0FDTiw0RUFBQ0M7d0NBQ0NiLFdBQVU7d0NBQ1ZTLE1BQUs7OzRDQUVKOzRDQUFJOzRDQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVN4QjtHQS9Dd0JyQjs7UUFDUEYsc0RBQVNBOzs7S0FERkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhcmVudFByZS9baWRdL3BhZ2UuanN4PzQyMTAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2UsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyBzZXQgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhcmVudFByZSgpIHtcclxuICBjb25zdCBwYXJhbXMgPSB1c2VQYXJhbXMoKTtcclxuICBjb25zb2xlLmxvZyhwYXJhbXMpO1xyXG4gIC8vIHNlYXJjaCBmb3Igc3R1ZGVudCB3aXRoIGlkID0gcGFyYW1zLmlkIGluIHRoZSBkYXRhYmFzZSBhbmQgZ2V0IHRoZSBzdHVkZW50J3MgcGFyZW50J3MgcGhvbmUgbnVtYmVyXHJcbiAgY29uc3QgW3NlYXJjaE51bWJlciwgc2V0U2VhcmNoTnVtYmVyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdHVkZW50SWQsIHNldFN0dWRlbnRJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcGFyZW50UGhvbmUsIHNldFBhcmVudFBob25lXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGlkID0gcGFyYW1zLmlkO1xyXG5cclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cInJlcVBhcmVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGgtMTAwXCI+XHJcbiAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIiBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1lbmQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIlwiPiDYo9iv2K7ZhCDZg9mI2K8g2KfZhNiq2KPZg9mK2K8g2KfZhNmF2LHYs9mEINin2YTZiSDZh9in2KrZgSDZiNmE2Yog2KfZhNij2YXYsSA8L2g0PlxyXG4gICAgICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgZm9ybS1vdXRlciBcIj5cclxuICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgY2xhc3NOYW1lPVwidy01MCBwLTUgYm9yZGVyLXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGVyc29uYWxJZFwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZSBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICDZg9mI2K8g2KfZhNiq2KPZg9mK2K97XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIGlkPVwicGVyc29uYWxJZFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGVyc29uYWxJZFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgYm9yZGVyLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIuL3N0dWRlbnQuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgbXQtMyB0ZXh0LWNlbnRlciBtLWF1dG8gZC1ibG9jayBcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICDYqtij2YPZitive1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVBhcmFtcyIsInNldCIsIlBhcmVudFByZSIsInBhcmFtcyIsImNvbnNvbGUiLCJsb2ciLCJzZWFyY2hOdW1iZXIiLCJzZXRTZWFyY2hOdW1iZXIiLCJzdHVkZW50SWQiLCJzZXRTdHVkZW50SWQiLCJwYXJlbnRQaG9uZSIsInNldFBhcmVudFBob25lIiwiaWQiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaGVhZGVyIiwiaDQiLCJmb3JtIiwiYWN0aW9uIiwibGFiZWwiLCJmb3IiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwiYSIsImhyZWYiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/parentPre/[id]/page.jsx\n"));

/***/ })

});