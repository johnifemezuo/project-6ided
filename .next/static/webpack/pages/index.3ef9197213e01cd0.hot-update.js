"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Pages/IndexIndex/HeroSection/HeroSection.tsx":
/*!*****************************************************************!*\
  !*** ./components/Pages/IndexIndex/HeroSection/HeroSection.tsx ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Layout_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Layout/Container */ \"./Layout/Container.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction HeroSection() {\n    _s();\n    var ref = _slicedToArray(useAtom(reviewTopButton), 2), setUseRevealButton = ref[1];\n    gsap.registerPlugin((gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default()));\n    var target;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        target = document.querySelector(\".dec\");\n        setTimeout(function() {\n            return console.log(target);\n        }, 2000);\n        // ANIMATION\n        var callMe = function() {\n            return setUseRevealButton(true);\n        };\n        var callMeOff = function() {\n            return setUseRevealButton(false);\n        };\n        gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default()().reveal(\".slide-right\", {\n            duration: 3000,\n            origin: \"left\",\n            distance: \"300px\",\n            easing: \"ease-in-out\"\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        ref: target,\n        id: \"heroSection\",\n        className: \" -mt-[20vh] h-[110vh] text-center bgimg py-12 w-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout_Container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-6xl text-[#acd2ccd0] lg:text-[20vh] mt-[30vh] uppercase\",\n                    children: \"6ided\"\n                }, void 0, false, {\n                    fileName: \"/home/johnifemezuo/John/projects/theshedman/project-6ided/components/Pages/IndexIndex/HeroSection/HeroSection.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"dec text-2xl text-[#ffffffad] mt-[20vh] lg:mt-[200px] tracking-wider lg:text-[4.3vh] px-6 lg:px-20 leading-relaxed\",\n                    children: \"We create beautiful and functional software experiences for amazing brands\"\n                }, void 0, false, {\n                    fileName: \"/home/johnifemezuo/John/projects/theshedman/project-6ided/components/Pages/IndexIndex/HeroSection/HeroSection.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/johnifemezuo/John/projects/theshedman/project-6ided/components/Pages/IndexIndex/HeroSection/HeroSection.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/johnifemezuo/John/projects/theshedman/project-6ided/components/Pages/IndexIndex/HeroSection/HeroSection.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(HeroSection, \"6zjCasRo4lt4vH9D3Rz4iL3AA1Y=\", true);\n_c = HeroSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroSection);\nvar _c;\n$RefreshReg$(_c, \"HeroSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2VzL0luZGV4SW5kZXgvSGVyb1NlY3Rpb24vSGVyb1NlY3Rpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ1g7QUFDWTs7QUFFckQsU0FBU0ksV0FBVyxHQUFHOztJQUNwQixJQUErQkMsR0FBd0Isa0JBQXhCQSxPQUFPLENBQUNDLGVBQWUsQ0FBQyxNQUE5Q0Msa0JBQWtCLEdBQUlGLEdBQXdCLEdBQTVCO0lBRTVCRyxJQUFJLENBQUNDLGNBQWMsQ0FBQ1QsZ0VBQWEsQ0FBQyxDQUFDO0lBRW5DLElBQUlVLE1BQU07SUFDVlIsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RRLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeENDLFVBQVUsQ0FBQzttQkFBTUMsT0FBTyxDQUFDQyxHQUFHLENBQUNMLE1BQU0sQ0FBQztTQUFBLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFNUMsWUFBWTtRQUVaLElBQU1NLE1BQU0sR0FBRzttQkFBTVQsa0JBQWtCLENBQUMsSUFBSSxDQUFDO1NBQUE7UUFDN0MsSUFBTVUsU0FBUyxHQUFHO21CQUFNVixrQkFBa0IsQ0FBQyxLQUFLLENBQUM7U0FBQTtRQUVqRFAsOERBQWEsRUFBRSxDQUFDa0IsTUFBTSxDQUFDLGNBQWMsRUFBRTtZQUNyQ0MsUUFBUSxFQUFFLElBQUk7WUFDZEMsTUFBTSxFQUFFLE1BQU07WUFDZEMsUUFBUSxFQUFFLE9BQU87WUFDakJDLE1BQU0sRUFBRSxhQUFhO1NBQ3RCLENBQUMsQ0FBQztLQUNKLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRSw4REFBQ0MsU0FBTztRQUNOQyxHQUFHLEVBQUVkLE1BQU07UUFDWGUsRUFBRSxFQUFDLGFBQWE7UUFDaEJDLFNBQVMsRUFBQyxzREFBd0Q7a0JBRWxFLDRFQUFDdkIseURBQVM7OzhCQUNSLDhEQUFDd0IsSUFBRTtvQkFBQ0QsU0FBUyxFQUFDLDhEQUErRDs4QkFBQyxPQUU5RTs7Ozs7d0JBQUs7OEJBQ0wsOERBQUNDLElBQUU7b0JBQUNELFNBQVMsRUFBQyxvSEFBcUg7OEJBQUMsNEVBR3BJOzs7Ozt3QkFBSzs7Ozs7O2dCQUNLOzs7OztZQUNKLENBQ1Y7Q0FDSDtHQXhDUXRCLFdBQVc7QUFBWEEsS0FBQUEsV0FBVztBQTBDcEIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BhZ2VzL0luZGV4SW5kZXgvSGVyb1NlY3Rpb24vSGVyb1NlY3Rpb24udHN4PzY4M2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNjcm9sbFRyaWdnZXIgZnJvbSBcImdzYXAvZGlzdC9TY3JvbGxUcmlnZ2VyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi8uLi8uLi9MYXlvdXQvQ29udGFpbmVyXCI7XG5cbmZ1bmN0aW9uIEhlcm9TZWN0aW9uKCkge1xuICAgY29uc3QgWywgc2V0VXNlUmV2ZWFsQnV0dG9uXSA9IHVzZUF0b20ocmV2aWV3VG9wQnV0dG9uKTtcblxuICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuICBcbiAgbGV0IHRhcmdldDogYW55O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVjXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gY29uc29sZS5sb2codGFyZ2V0KSwgMjAwMCk7XG5cbiAgICAvLyBBTklNQVRJT05cblxuICAgIGNvbnN0IGNhbGxNZSA9ICgpID0+IHNldFVzZVJldmVhbEJ1dHRvbih0cnVlKTtcbiAgICBjb25zdCBjYWxsTWVPZmYgPSAoKSA9PiBzZXRVc2VSZXZlYWxCdXR0b24oZmFsc2UpO1xuXG4gICAgU2Nyb2xsVHJpZ2dlcigpLnJldmVhbChcIi5zbGlkZS1yaWdodFwiLCB7XG4gICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICAgIG9yaWdpbjogXCJsZWZ0XCIsXG4gICAgICBkaXN0YW5jZTogXCIzMDBweFwiLFxuICAgICAgZWFzaW5nOiBcImVhc2UtaW4tb3V0XCIsXG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICByZWY9e3RhcmdldH1cbiAgICAgIGlkPVwiaGVyb1NlY3Rpb25cIlxuICAgICAgY2xhc3NOYW1lPVwiIC1tdC1bMjB2aF0gaC1bMTEwdmhdIHRleHQtY2VudGVyIGJnaW1nICBweS0xMiAgdy1mdWxsXCJcbiAgICA+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgdGV4dC1bI2FjZDJjY2QwXSAgbGc6dGV4dC1bMjB2aF0gbXQtWzMwdmhdIHVwcGVyY2FzZVwiPlxuICAgICAgICAgIDZpZGVkXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJkZWMgdGV4dC0yeGwgdGV4dC1bI2ZmZmZmZmFkXSBtdC1bMjB2aF0gbGc6bXQtWzIwMHB4XSB0cmFja2luZy13aWRlciBsZzp0ZXh0LVs0LjN2aF0gIHB4LTYgbGc6cHgtMjAgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgV2UgY3JlYXRlIGJlYXV0aWZ1bCBhbmQgZnVuY3Rpb25hbCBzb2Z0d2FyZSBleHBlcmllbmNlcyBmb3IgYW1hemluZ1xuICAgICAgICAgIGJyYW5kc1xuICAgICAgICA8L2gxPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZXJvU2VjdGlvbjtcbiJdLCJuYW1lcyI6WyJTY3JvbGxUcmlnZ2VyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJDb250YWluZXIiLCJIZXJvU2VjdGlvbiIsInVzZUF0b20iLCJyZXZpZXdUb3BCdXR0b24iLCJzZXRVc2VSZXZlYWxCdXR0b24iLCJnc2FwIiwicmVnaXN0ZXJQbHVnaW4iLCJ0YXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsImNhbGxNZSIsImNhbGxNZU9mZiIsInJldmVhbCIsImR1cmF0aW9uIiwib3JpZ2luIiwiZGlzdGFuY2UiLCJlYXNpbmciLCJzZWN0aW9uIiwicmVmIiwiaWQiLCJjbGFzc05hbWUiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Pages/IndexIndex/HeroSection/HeroSection.tsx\n");

/***/ })

});