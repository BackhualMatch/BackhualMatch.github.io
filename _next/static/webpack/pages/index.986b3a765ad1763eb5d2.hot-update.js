webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/sections/Header.tsx":
/*!********************************************!*\
  !*** ./src/components/sections/Header.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _widgets_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../widgets/Link */ "./src/components/widgets/Link.tsx");


var _jsxFileName = "Z:\\Vmware\\Shared\\Backhual\\backhual_frontend_website\\src\\components\\sections\\Header.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var useStyle = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (_ref) {
  var _logo;

  var spacing = _ref.spacing,
      breakpoints = _ref.breakpoints;
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    title: {
      flexGrow: 1
    },
    logo: (_logo = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_logo, breakpoints.down('sm'), {
      maxHeight: 48
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_logo, breakpoints.up('md'), {
      maxHeight: 54
    }), _logo)
  });
});
function Header() {
  _s();

  var classes = useStyle();
  return __jsx("header", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AppBar"], {
    position: "static",
    classes: {
      colorPrimary: '#ffffff'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx(_widgets_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/images/logo.svg",
    className: classes.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "Login"))));
}

_s(Header, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [useStyle];
});

_c = Header;

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvSGVhZGVyLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZSIsIm1ha2VTdHlsZXMiLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJjcmVhdGVTdHlsZXMiLCJ0aXRsZSIsImZsZXhHcm93IiwibG9nbyIsImRvd24iLCJtYXhIZWlnaHQiLCJ1cCIsIkhlYWRlciIsImNsYXNzZXMiLCJjb2xvclByaW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLG9FQUFVLENBQUM7QUFBQTs7QUFBQSxNQUFFQyxPQUFGLFFBQUVBLE9BQUY7QUFBQSxNQUFXQyxXQUFYLFFBQVdBLFdBQVg7QUFBQSxTQUFtQ0Msc0VBQVksQ0FBQztBQUMxRUMsU0FBSyxFQUFFO0FBQ0xDLGNBQVEsRUFBRTtBQURMLEtBRG1FO0FBSTFFQyxRQUFJLGdIQUNESixXQUFXLENBQUNLLElBQVosQ0FBaUIsSUFBakIsQ0FEQyxFQUN3QjtBQUN4QkMsZUFBUyxFQUFFO0FBRGEsS0FEeEIsb0dBSUROLFdBQVcsQ0FBQ08sRUFBWixDQUFlLElBQWYsQ0FKQyxFQUlzQjtBQUN0QkQsZUFBUyxFQUFFO0FBRFcsS0FKdEI7QUFKc0UsR0FBRCxDQUEvQztBQUFBLENBQUQsQ0FBM0I7QUFjZSxTQUFTRSxNQUFULEdBQWtCO0FBQUE7O0FBQy9CLE1BQU1DLE9BQU8sR0FBR1osUUFBUSxFQUF4QjtBQUNBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBUSxZQUFRLEVBQUMsUUFBakI7QUFBMEIsV0FBTyxFQUFFO0FBQUNhLGtCQUFZLEVBQUU7QUFBZixLQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVELE9BQU8sQ0FBQ1AsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsa0JBQVQ7QUFBNEIsYUFBUyxFQUFFTyxPQUFPLENBQUNMLElBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsRUFZRSxNQUFDLHdEQUFEO0FBQVEsU0FBSyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpGLENBREYsQ0FERixDQURGO0FBb0JEOztHQXRCdUJJLE07VUFDTlgsUTs7O0tBRE1XLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTg2YjNhNzY1YWQxNzYzZWI1ZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cG9ncmFwaHksIGNyZWF0ZVN0eWxlcywgVGhlbWUsIG1ha2VTdHlsZXMsIEJveCwgR3JpZCwgQXBwQmFyLCBUb29sYmFyLCBCdXR0b24sIFN2Z0ljb24sIEljb24sIEljb25CdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIi4uL3dpZGdldHMvTGlua1wiO1xyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKCh7c3BhY2luZywgYnJlYWtwb2ludHN9OiBUaGVtZSkgPT4gY3JlYXRlU3R5bGVzKHtcclxuICB0aXRsZToge1xyXG4gICAgZmxleEdyb3c6IDFcclxuICB9LFxyXG4gIGxvZ286IHtcclxuICAgIFticmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBtYXhIZWlnaHQ6IDQ4XHJcbiAgICB9LFxyXG4gICAgW2JyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBtYXhIZWlnaHQ6IDU0XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlcj5cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj0nc3RhdGljJyBjbGFzc2VzPXt7Y29sb3JQcmltYXJ5OiAnI2ZmZmZmZid9fT5cclxuICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28uc3ZnXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299IC8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIDxJY29uQnV0dG9uIGVkZ2U9XCJzdGFydFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufSBjb2xvcj1cImluaGVyaXRcIiBhcmlhLWxhYmVsPVwibWVudVwiPlxyXG4gICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj4gKi99XHJcbiAgICAgICAgICB7LyogPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgIE5ld3NcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT4gKi99XHJcbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPSdpbmhlcml0Jz5Mb2dpbjwvQnV0dG9uPlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICA8L2hlYWRlcj5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9