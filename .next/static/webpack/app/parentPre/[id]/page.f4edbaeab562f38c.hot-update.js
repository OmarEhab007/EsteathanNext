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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ParentPre; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction ParentPre() {\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    console.log(params);\n    // search for student with id = params.id in the database and get the student's parent's phone number\n    const [studentId, setStudentId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [parentPhone, setParentPhone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    setStudentId(params.id);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{\n        if (studentId) {\n            const data = await fetch(\"/api/students/$}\");\n            const result = await data.json();\n            const student = result.data;\n            console.log(student);\n        }\n    }, [\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"reqParent\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container h-100\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: \" d-flex justify-content-center align-items-end text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"\",\n                            children: \" أدخل كود التأكيد المرسل الى هاتف ولي الأمر \"\n                        }, void 0, false, {\n                            fileName: \"/home/omar/projects/zezo/EsteathanNext-main/app/parentPre/[id]/page.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/omar/projects/zezo/EsteathanNext-main/app/parentPre/[id]/page.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"d-flex justify-content-center align-items-center form-outer \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            action: \"\",\n                            className: \"w-50 p-5 border-success\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    for: \"personalId\",\n                                    className: \"form-labe mb-3\",\n                                    children: [\n                                        \" \",\n                                        \"كود التأكيد\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/omar/projects/zezo/EsteathanNext-main/app/parentPre/[id]/page.jsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"personalId\",\n                                    name: \"personalId\",\n                                    className: \"form-control border-success\"\n                                }, void 0, false, {\n                                    fileName: \"/home/omar/projects/zezo/EsteathanNext-main/app/parentPre/[id]/page.jsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"./student.html\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-success mt-3 text-center m-auto d-block \",\n                                        type: \"button\",\n                                        children: [\n                                            \" \",\n                                            \"تأكيد\",\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/omar/projects/zezo/EsteathanNext-main/app/parentPre/[id]/page.jsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/omar/projects/zezo/EsteathanNext-main/app/parentPre/[id]/page.jsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/omar/projects/zezo/EsteathanNext-main/app/parentPre/[id]/page.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/omar/projects/zezo/EsteathanNext-main/app/parentPre/[id]/page.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/omar/projects/zezo/EsteathanNext-main/app/parentPre/[id]/page.jsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/omar/projects/zezo/EsteathanNext-main/app/parentPre/[id]/page.jsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(ParentPre, \"zihTNUE+rKy8U3/GdEM/54x9kdE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams\n    ];\n});\n_c = ParentPre;\nvar _c;\n$RefreshReg$(_c, \"ParentPre\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYXJlbnRQcmUvW2lkXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUN3RDtBQUNaO0FBRTdCLFNBQVNLOztJQUN0QixNQUFNQyxTQUFTRiwwREFBU0E7SUFDeEJHLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixxR0FBcUc7SUFDckcsTUFBTSxDQUFDRyxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1EsYUFBYUMsZUFBZSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUMvQ08sYUFBYUosT0FBT08sRUFBRTtJQUV0QlgsZ0RBQVNBLENBQUM7UUFDUixJQUFJTyxXQUFXO1lBQ2IsTUFBTUssT0FBTyxNQUFNQyxNQUFPO1lBQzFCLE1BQU1DLFNBQVMsTUFBTUYsS0FBS0csSUFBSTtZQUM5QixNQUFNQyxVQUFVRixPQUFPRixJQUFJO1lBQzNCUCxRQUFRQyxHQUFHLENBQUNVO1FBQ2Q7SUFDRixHQUFHO1FBQUNMO0tBQUc7SUFFUCxxQkFDRTtrQkFDRSw0RUFBQ007WUFBS0MsV0FBVTtzQkFDZCw0RUFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBT0YsV0FBVTtrQ0FDaEIsNEVBQUNHOzRCQUFHSCxXQUFVO3NDQUFHOzs7Ozs7Ozs7OztrQ0FHbkIsOERBQUNDO3dCQUFJRCxXQUFVO2tDQUNiLDRFQUFDSTs0QkFBS0MsUUFBTzs0QkFBR0wsV0FBVTs7OENBQ3hCLDhEQUFDTTtvQ0FBTUMsS0FBSTtvQ0FBYVAsV0FBVTs7d0NBQy9CO3dDQUFJO3dDQUNPOzs7Ozs7OzhDQUVkLDhEQUFDUTtvQ0FDQ0MsTUFBSztvQ0FDTGhCLElBQUc7b0NBQ0hpQixNQUFLO29DQUNMVixXQUFVOzs7Ozs7OENBR1osOERBQUNXO29DQUFFQyxNQUFLOzhDQUNOLDRFQUFDQzt3Q0FDQ2IsV0FBVTt3Q0FDVlMsTUFBSzs7NENBRUo7NENBQUk7NENBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3hCO0dBckR3QnhCOztRQUNQRCxzREFBU0E7OztLQURGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFyZW50UHJlL1tpZF0vcGFnZS5qc3g/NDIxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXJlbnRQcmUoKSB7XHJcbiAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKCk7XHJcbiAgY29uc29sZS5sb2cocGFyYW1zKTtcclxuICAvLyBzZWFyY2ggZm9yIHN0dWRlbnQgd2l0aCBpZCA9IHBhcmFtcy5pZCBpbiB0aGUgZGF0YWJhc2UgYW5kIGdldCB0aGUgc3R1ZGVudCdzIHBhcmVudCdzIHBob25lIG51bWJlclxyXG4gIGNvbnN0IFtzdHVkZW50SWQsIHNldFN0dWRlbnRJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcGFyZW50UGhvbmUsIHNldFBhcmVudFBob25lXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIHNldFN0dWRlbnRJZChwYXJhbXMuaWQpO1xyXG5cclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKHN0dWRlbnRJZCkge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goYC9hcGkvc3R1ZGVudHMvJH1gKTtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGF0YS5qc29uKCk7XHJcbiAgICAgIGNvbnN0IHN0dWRlbnQgPSByZXN1bHQuZGF0YTtcclxuICAgICAgY29uc29sZS5sb2coc3R1ZGVudCk7XHJcbiAgICB9XHJcbiAgfSwgW2lkXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJyZXFQYXJlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBoLTEwMFwiPlxyXG4gICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtZW5kIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJcIj4g2KPYr9iu2YQg2YPZiNivINin2YTYqtij2YPZitivINin2YTZhdix2LPZhCDYp9mE2Ykg2YfYp9iq2YEg2YjZhNmKINin2YTYo9mF2LEgPC9oND5cclxuICAgICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGZvcm0tb3V0ZXIgXCI+XHJcbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIGNsYXNzTmFtZT1cInctNTAgcC01IGJvcmRlci1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBlcnNvbmFsSWRcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmUgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAg2YPZiNivINin2YTYqtij2YPZitive1wiIFwifVxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInBlcnNvbmFsSWRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBlcnNvbmFsSWRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGJvcmRlci1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiLi9zdHVkZW50Lmh0bWxcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIG10LTMgdGV4dC1jZW50ZXIgbS1hdXRvIGQtYmxvY2sgXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAg2KrYo9mD2YrYr3tcIiBcIn1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VQYXJhbXMiLCJQYXJlbnRQcmUiLCJwYXJhbXMiLCJjb25zb2xlIiwibG9nIiwic3R1ZGVudElkIiwic2V0U3R1ZGVudElkIiwicGFyZW50UGhvbmUiLCJzZXRQYXJlbnRQaG9uZSIsImlkIiwiZGF0YSIsImZldGNoIiwicmVzdWx0IiwianNvbiIsInN0dWRlbnQiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaGVhZGVyIiwiaDQiLCJmb3JtIiwiYWN0aW9uIiwibGFiZWwiLCJmb3IiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwiYSIsImhyZWYiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/parentPre/[id]/page.jsx\n"));

/***/ })

});