"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Global/Navbar/NavLinks.tsx":
/*!***********************************************!*\
  !*** ./components/Global/Navbar/NavLinks.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jotai */ \"./node_modules/jotai/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _base_atom_useAtom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../base/atom/useAtom */ \"./base/atom/useAtom.ts\");\n/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavLink */ \"./components/Global/Navbar/NavLink.tsx\");\n/* harmony import */ var _styles_StyledNavbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/StyledNavbar */ \"./components/Global/Navbar/styles/StyledNavbar.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction NavLinks() {\n    var addActiveClass = function addActiveClass(path) {\n        return router.pathname === path ? \"text-white \" : \"text-textColor\";\n    };\n    _s();\n    var ref = _slicedToArray((0,jotai__WEBPACK_IMPORTED_MODULE_6__.useAtom)(_base_atom_useAtom__WEBPACK_IMPORTED_MODULE_3__.openNav), 2), openNavbar = ref[0], setOpenNavbar = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_StyledNavbar__WEBPACK_IMPORTED_MODULE_5__.StyledNavLinks, {\n        $isOpen: openNavbar,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavLink__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                activeClass: addActiveClass(\"#aboutUs\"),\n                navLink: \"#aboutUs\",\n                children: \"Company\"\n            }, void 0, false, {\n                fileName: \"/home/johnifemezuo/John/projects/theshedman/project-6ided/components/Global/Navbar/NavLinks.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavLink__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                activeClass: addActiveClass(\"/#activities\"),\n                navLink: \"#activities\",\n                children: \"Our activities\"\n            }, void 0, false, {\n                fileName: \"/home/johnifemezuo/John/projects/theshedman/project-6ided/components/Global/Navbar/NavLinks.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavLink__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                activeClass: addActiveClass(\"#solution\"),\n                navLink: \"#solution\",\n                children: \"Solution\"\n            }, void 0, false, {\n                fileName: \"/home/johnifemezuo/John/projects/theshedman/project-6ided/components/Global/Navbar/NavLinks.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavLink__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                activeClass: addActiveClass(\"#contact\"),\n                navLink: \"#contact\",\n                children: \"Contact\"\n            }, void 0, false, {\n                fileName: \"/home/johnifemezuo/John/projects/theshedman/project-6ided/components/Global/Navbar/NavLinks.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/johnifemezuo/John/projects/theshedman/project-6ided/components/Global/Navbar/NavLinks.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(NavLinks, \"2cjqGu8LyiqBvE5ZzRla0ZB+G0s=\", false, function() {\n    return [\n        jotai__WEBPACK_IMPORTED_MODULE_6__.useAtom,\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = NavLinks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavLinks);\nvar _c;\n$RefreshReg$(_c, \"NavLinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dsb2JhbC9OYXZiYXIvTmF2TGlua3MudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBRVE7QUFDZDtBQUMyQjtBQUVyQjtBQUN1Qjs7QUFFdkQsU0FBU00sUUFBUSxHQUFHO1FBS1RDLGNBQWMsR0FBdkIsU0FBU0EsY0FBYyxDQUFDQyxJQUFTLEVBQUU7UUFDakMsT0FBT0MsTUFBTSxDQUFDQyxRQUFRLEtBQUtGLElBQUksR0FDM0IsYUFBYSxHQUNiLGdCQUFnQixDQUFDO0tBQ3RCOztJQVJELElBQW9DUixHQUFnQixrQkFBaEJBLDhDQUFPLENBQUNHLHVEQUFPLENBQUMsTUFBN0NRLFVBQVUsR0FBbUJYLEdBQWdCLEdBQW5DLEVBQUVZLGFBQWEsR0FBSVosR0FBZ0IsR0FBcEI7SUFFaEMsSUFBTVMsTUFBTSxHQUFHUixzREFBUyxFQUFFO0lBUTFCLHFCQUNFLDhEQUFDSSxnRUFBYztRQUFDUSxPQUFPLEVBQUVGLFVBQVU7OzBCQUNqQyw4REFBQ1AsZ0RBQU87Z0JBQUNVLFdBQVcsRUFBRVAsY0FBYyxDQUFDLFVBQVUsQ0FBQztnQkFBRVEsT0FBTyxFQUFDLFVBQVU7MEJBQUMsU0FFckU7Ozs7O29CQUFVOzBCQUNWLDhEQUFDWCxnREFBTztnQkFBQ1UsV0FBVyxFQUFFUCxjQUFjLENBQUMsY0FBYyxDQUFDO2dCQUFFUSxPQUFPLEVBQUMsYUFBYTswQkFBQyxnQkFFNUU7Ozs7O29CQUFVOzBCQUNWLDhEQUFDWCxnREFBTztnQkFDTlUsV0FBVyxFQUFFUCxjQUFjLENBQUMsV0FBVyxDQUFDO2dCQUN4Q1EsT0FBTyxFQUFDLFdBQVc7MEJBQ3BCLFVBRUQ7Ozs7O29CQUFVOzBCQUNWLDhEQUFDWCxnREFBTztnQkFBQ1UsV0FBVyxFQUFFUCxjQUFjLENBQUMsVUFBVSxDQUFDO2dCQUFFUSxPQUFPLEVBQUMsVUFBVTswQkFBQyxTQUVyRTs7Ozs7b0JBQVU7Ozs7OztZQUdLLENBQ2pCO0NBQ0g7R0FoQ1FULFFBQVE7O1FBQ3FCTiwwQ0FBTztRQUU1QkMsa0RBQVM7OztBQUhqQkssS0FBQUEsUUFBUTtBQWtDakIsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0dsb2JhbC9OYXZiYXIvTmF2TGlua3MudHN4PzlkNWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQXRvbSB9IGZyb20gXCJqb3RhaVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBvcGVuTmF2IH0gZnJvbSBcIi4uLy4uLy4uL2Jhc2UvYXRvbS91c2VBdG9tXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9VSS9CdXR0b24vQnV0dG9uXCI7XG5pbXBvcnQgTmF2TGluayBmcm9tIFwiLi9OYXZMaW5rXCI7XG5pbXBvcnQgeyBTdHlsZWROYXZMaW5rcyB9IGZyb20gXCIuL3N0eWxlcy9TdHlsZWROYXZiYXJcIjtcblxuZnVuY3Rpb24gTmF2TGlua3MoKSB7XG4gIGNvbnN0IFtvcGVuTmF2YmFyLCBzZXRPcGVuTmF2YmFyXSA9IHVzZUF0b20ob3Blbk5hdik7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgZnVuY3Rpb24gYWRkQWN0aXZlQ2xhc3MocGF0aDogYW55KSB7XG4gICAgcmV0dXJuIHJvdXRlci5wYXRobmFtZSA9PT0gcGF0aFxuICAgICAgPyBcInRleHQtd2hpdGUgXCJcbiAgICAgIDogXCJ0ZXh0LXRleHRDb2xvclwiO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkTmF2TGlua3MgJGlzT3Blbj17b3Blbk5hdmJhcn0+XG4gICAgICA8TmF2TGluayBhY3RpdmVDbGFzcz17YWRkQWN0aXZlQ2xhc3MoXCIjYWJvdXRVc1wiKX0gbmF2TGluaz1cIiNhYm91dFVzXCI+XG4gICAgICAgIENvbXBhbnlcbiAgICAgIDwvTmF2TGluaz5cbiAgICAgIDxOYXZMaW5rIGFjdGl2ZUNsYXNzPXthZGRBY3RpdmVDbGFzcyhcIi8jYWN0aXZpdGllc1wiKX0gbmF2TGluaz1cIiNhY3Rpdml0aWVzXCI+XG4gICAgICAgIE91ciBhY3Rpdml0aWVzXG4gICAgICA8L05hdkxpbms+XG4gICAgICA8TmF2TGlua1xuICAgICAgICBhY3RpdmVDbGFzcz17YWRkQWN0aXZlQ2xhc3MoXCIjc29sdXRpb25cIil9XG4gICAgICAgIG5hdkxpbms9XCIjc29sdXRpb25cIlxuICAgICAgPlxuICAgICAgICBTb2x1dGlvblxuICAgICAgPC9OYXZMaW5rPlxuICAgICAgPE5hdkxpbmsgYWN0aXZlQ2xhc3M9e2FkZEFjdGl2ZUNsYXNzKFwiI2NvbnRhY3RcIil9IG5hdkxpbms9XCIjY29udGFjdFwiPlxuICAgICAgICBDb250YWN0XG4gICAgICA8L05hdkxpbms+XG5cbiAgICAgIFxuICAgIDwvU3R5bGVkTmF2TGlua3M+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkxpbmtzO1xuIl0sIm5hbWVzIjpbInVzZUF0b20iLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsIm9wZW5OYXYiLCJOYXZMaW5rIiwiU3R5bGVkTmF2TGlua3MiLCJOYXZMaW5rcyIsImFkZEFjdGl2ZUNsYXNzIiwicGF0aCIsInJvdXRlciIsInBhdGhuYW1lIiwib3Blbk5hdmJhciIsInNldE9wZW5OYXZiYXIiLCIkaXNPcGVuIiwiYWN0aXZlQ2xhc3MiLCJuYXZMaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Global/Navbar/NavLinks.tsx\n");

/***/ })

});