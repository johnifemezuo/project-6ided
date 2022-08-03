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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jotai */ \"./node_modules/jotai/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _base_atom_useAtom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../base/atom/useAtom */ \"./base/atom/useAtom.ts\");\n/* harmony import */ var _Layout_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Layout/Container */ \"./Layout/Container.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction HeroSection() {\n    _s();\n    var ref = _slicedToArray((0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom)(_base_atom_useAtom__WEBPACK_IMPORTED_MODULE_2__.reviewTopButton), 2), setUseRevealButton = ref[1];\n    gsap__WEBPACK_IMPORTED_MODULE_5__[\"default\"].registerPlugin((gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6___default()));\n    var target;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        target = document.querySelector(\".dec\");\n        // ANIMATION\n        var callMe = function() {\n            return setUseRevealButton(\"true\");\n        };\n        var callMeOff = function() {\n            return setUseRevealButton(false);\n        };\n        var tl = gsap__WEBPACK_IMPORTED_MODULE_5__[\"default\"].timeline({\n            defaults: {\n                opacity: 0,\n                duration: 0.8,\n                ease: \"Power3.easeInOut\"\n            },\n            scrollTrigger: {\n                trigger: target,\n                toggleActions: \"play none none reset\",\n                // start: \"600px 80%\",\n                scrub: 0.5,\n                onLeaveBack: callMeOff\n            }\n        });\n        tl.to(target, {\n            opacity: 1\n        }).call(callMe);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        ref: target,\n        id: \"heroSection\",\n        className: \" -mt-[20vh] h-[110vh] text-center bgimg py-12 w-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout_Container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-6xl text-[#acd2ccd0] lg:text-[20vh] mt-[30vh] uppercase\",\n                    children: \"6ided\"\n                }, void 0, false, {\n                    fileName: \"/home/johnifemezuo/John/projects/theshedman/project-6ided/components/Pages/IndexIndex/HeroSection/HeroSection.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"dec text-2xl text-[#ffffffad] mt-[20vh] lg:mt-[200px] tracking-wider lg:text-[4.3vh] px-6 lg:px-20 leading-relaxed\",\n                    children: \"We create beautiful and functional software experiences for amazing brands\"\n                }, void 0, false, {\n                    fileName: \"/home/johnifemezuo/John/projects/theshedman/project-6ided/components/Pages/IndexIndex/HeroSection/HeroSection.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/johnifemezuo/John/projects/theshedman/project-6ided/components/Pages/IndexIndex/HeroSection/HeroSection.tsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/johnifemezuo/John/projects/theshedman/project-6ided/components/Pages/IndexIndex/HeroSection/HeroSection.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(HeroSection, \"6zjCasRo4lt4vH9D3Rz4iL3AA1Y=\", false, function() {\n    return [\n        jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom\n    ];\n});\n_c = HeroSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroSection);\nvar _c;\n$RefreshReg$(_c, \"HeroSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2VzL0luZGV4SW5kZXgvSGVyb1NlY3Rpb24vSGVyb1NlY3Rpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdCO0FBQzRCO0FBQ3BCO0FBQ1M7QUFDdUI7QUFDWDs7QUFFckQsU0FBU08sV0FBVyxHQUFHOztJQUNwQixJQUErQkwsR0FBd0Isa0JBQXhCQSw4Q0FBTyxDQUFDRywrREFBZSxDQUFDLE1BQTlDRyxrQkFBa0IsR0FBSU4sR0FBd0IsR0FBNUI7SUFFNUJGLDJEQUFtQixDQUFDQyxnRUFBYSxDQUFDLENBQUM7SUFFbkMsSUFBSVMsTUFBTTtJQUNWTixnREFBUyxDQUFDLFdBQU07UUFDZE0sTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV4QyxZQUFZO1FBRVosSUFBTUMsTUFBTSxHQUFHO21CQUFNTCxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7U0FBQTtRQUMvQyxJQUFNTSxTQUFTLEdBQUc7bUJBQU1OLGtCQUFrQixDQUFDLEtBQUssQ0FBQztTQUFBO1FBRWpELElBQU1PLEVBQUUsR0FBR2YscURBQWEsQ0FBQztZQUN2QmlCLFFBQVEsRUFBRTtnQkFBRUMsT0FBTyxFQUFFLENBQUM7Z0JBQUVDLFFBQVEsRUFBRSxHQUFHO2dCQUFFQyxJQUFJLEVBQUUsa0JBQWtCO2FBQUU7WUFDakVDLGFBQWEsRUFBRTtnQkFDYkMsT0FBTyxFQUFFWixNQUFNO2dCQUNmYSxhQUFhLEVBQUUsc0JBQXNCO2dCQUNyQyxzQkFBc0I7Z0JBQ3RCQyxLQUFLLEVBQUUsR0FBRztnQkFDVkMsV0FBVyxFQUFFWCxTQUFTO2FBQ3ZCO1NBQ0YsQ0FBQztRQUVGQyxFQUFFLENBQUNXLEVBQUUsQ0FBQ2hCLE1BQU0sRUFBRTtZQUFDUSxPQUFPLEVBQUUsQ0FBQztTQUFDLENBQUMsQ0FDMUJTLElBQUksQ0FBQ2QsTUFBTSxDQUFDO0tBR2QsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNFLDhEQUFDZSxTQUFPO1FBQ05DLEdBQUcsRUFBRW5CLE1BQU07UUFDWG9CLEVBQUUsRUFBQyxhQUFhO1FBQ2hCQyxTQUFTLEVBQUMsc0RBQXdEO2tCQUVsRSw0RUFBQ3pCLHlEQUFTOzs4QkFDUiw4REFBQzBCLElBQUU7b0JBQUNELFNBQVMsRUFBQyw4REFBK0Q7OEJBQUMsT0FFOUU7Ozs7O3dCQUFLOzhCQUNMLDhEQUFDQyxJQUFFO29CQUFFRCxTQUFTLEVBQUMsb0hBQXFIOzhCQUFDLDRFQUdySTs7Ozs7d0JBQUs7Ozs7OztnQkFDSzs7Ozs7WUFDSixDQUNWO0NBQ0g7R0FoRFF4QixXQUFXOztRQUNjTCwwQ0FBTzs7O0FBRGhDSyxLQUFBQSxXQUFXO0FBa0RwQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGFnZXMvSW5kZXhJbmRleC9IZXJvU2VjdGlvbi9IZXJvU2VjdGlvbi50c3g/NjgzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IFNjcm9sbFRyaWdnZXIgZnJvbSBcImdzYXAvZGlzdC9TY3JvbGxUcmlnZ2VyXCI7XG5pbXBvcnQgeyB1c2VBdG9tIH0gZnJvbSBcImpvdGFpXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZXZpZXdUb3BCdXR0b24gfSBmcm9tIFwiLi4vLi4vLi4vLi4vYmFzZS9hdG9tL3VzZUF0b21cIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uLy4uLy4uL0xheW91dC9Db250YWluZXJcIjtcblxuZnVuY3Rpb24gSGVyb1NlY3Rpb24oKSB7XG4gICBjb25zdCBbLCBzZXRVc2VSZXZlYWxCdXR0b25dID0gdXNlQXRvbShyZXZpZXdUb3BCdXR0b24pO1xuXG4gIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG4gIFxuICBsZXQgdGFyZ2V0OiBhbnk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWNcIik7XG5cbiAgICAvLyBBTklNQVRJT05cblxuICAgIGNvbnN0IGNhbGxNZSA9ICgpID0+IHNldFVzZVJldmVhbEJ1dHRvbihcInRydWVcIik7XG4gICAgY29uc3QgY2FsbE1lT2ZmID0gKCkgPT4gc2V0VXNlUmV2ZWFsQnV0dG9uKGZhbHNlKTtcblxuICAgIGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICBkZWZhdWx0czogeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC44LCBlYXNlOiBcIlBvd2VyMy5lYXNlSW5PdXRcIiB9LFxuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiB0YXJnZXQsXG4gICAgICAgIHRvZ2dsZUFjdGlvbnM6IFwicGxheSBub25lIG5vbmUgcmVzZXRcIixcbiAgICAgICAgLy8gc3RhcnQ6IFwiNjAwcHggODAlXCIsXG4gICAgICAgIHNjcnViOiAwLjUsXG4gICAgICAgIG9uTGVhdmVCYWNrOiBjYWxsTWVPZmYsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgdGwudG8odGFyZ2V0LCB7b3BhY2l0eTogMX0pXG4gICAgLmNhbGwoY2FsbE1lKVxuXG5cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb25cbiAgICAgIHJlZj17dGFyZ2V0fVxuICAgICAgaWQ9XCJoZXJvU2VjdGlvblwiXG4gICAgICBjbGFzc05hbWU9XCIgLW10LVsyMHZoXSBoLVsxMTB2aF0gdGV4dC1jZW50ZXIgYmdpbWcgIHB5LTEyICB3LWZ1bGxcIlxuICAgID5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTZ4bCB0ZXh0LVsjYWNkMmNjZDBdICBsZzp0ZXh0LVsyMHZoXSBtdC1bMzB2aF0gdXBwZXJjYXNlXCI+XG4gICAgICAgICAgNmlkZWRcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGgxICBjbGFzc05hbWU9XCJkZWMgdGV4dC0yeGwgdGV4dC1bI2ZmZmZmZmFkXSBtdC1bMjB2aF0gbGc6bXQtWzIwMHB4XSB0cmFja2luZy13aWRlciBsZzp0ZXh0LVs0LjN2aF0gIHB4LTYgbGc6cHgtMjAgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgV2UgY3JlYXRlIGJlYXV0aWZ1bCBhbmQgZnVuY3Rpb25hbCBzb2Z0d2FyZSBleHBlcmllbmNlcyBmb3IgYW1hemluZ1xuICAgICAgICAgIGJyYW5kc1xuICAgICAgICA8L2gxPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZXJvU2VjdGlvbjtcbiJdLCJuYW1lcyI6WyJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsInVzZUF0b20iLCJSZWFjdCIsInVzZUVmZmVjdCIsInJldmlld1RvcEJ1dHRvbiIsIkNvbnRhaW5lciIsIkhlcm9TZWN0aW9uIiwic2V0VXNlUmV2ZWFsQnV0dG9uIiwicmVnaXN0ZXJQbHVnaW4iLCJ0YXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjYWxsTWUiLCJjYWxsTWVPZmYiLCJ0bCIsInRpbWVsaW5lIiwiZGVmYXVsdHMiLCJvcGFjaXR5IiwiZHVyYXRpb24iLCJlYXNlIiwic2Nyb2xsVHJpZ2dlciIsInRyaWdnZXIiLCJ0b2dnbGVBY3Rpb25zIiwic2NydWIiLCJvbkxlYXZlQmFjayIsInRvIiwiY2FsbCIsInNlY3Rpb24iLCJyZWYiLCJpZCIsImNsYXNzTmFtZSIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Pages/IndexIndex/HeroSection/HeroSection.tsx\n");

/***/ })

});