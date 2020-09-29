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
    }), _logo),
    appbar: {
      backgroundColor: '#ffffff'
    }
  });
});
function Header() {
  _s();

  var classes = useStyle();
  return __jsx("header", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AppBar"], {
    position: "static",
    classes: {
      colorPrimary: classes.appbar
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx(_widgets_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/images/logo.svg",
    className: classes.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "outlined",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvSGVhZGVyLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZSIsIm1ha2VTdHlsZXMiLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJjcmVhdGVTdHlsZXMiLCJ0aXRsZSIsImZsZXhHcm93IiwibG9nbyIsImRvd24iLCJtYXhIZWlnaHQiLCJ1cCIsImFwcGJhciIsImJhY2tncm91bmRDb2xvciIsIkhlYWRlciIsImNsYXNzZXMiLCJjb2xvclByaW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLG9FQUFVLENBQUM7QUFBQTs7QUFBQSxNQUFFQyxPQUFGLFFBQUVBLE9BQUY7QUFBQSxNQUFXQyxXQUFYLFFBQVdBLFdBQVg7QUFBQSxTQUFtQ0Msc0VBQVksQ0FBQztBQUMxRUMsU0FBSyxFQUFFO0FBQ0xDLGNBQVEsRUFBRTtBQURMLEtBRG1FO0FBSTFFQyxRQUFJLGdIQUNESixXQUFXLENBQUNLLElBQVosQ0FBaUIsSUFBakIsQ0FEQyxFQUN3QjtBQUN4QkMsZUFBUyxFQUFFO0FBRGEsS0FEeEIsb0dBSUROLFdBQVcsQ0FBQ08sRUFBWixDQUFlLElBQWYsQ0FKQyxFQUlzQjtBQUN0QkQsZUFBUyxFQUFFO0FBRFcsS0FKdEIsU0FKc0U7QUFZMUVFLFVBQU0sRUFBRTtBQUNOQyxxQkFBZSxFQUFFO0FBRFg7QUFaa0UsR0FBRCxDQUEvQztBQUFBLENBQUQsQ0FBM0I7QUFpQmUsU0FBU0MsTUFBVCxHQUFrQjtBQUFBOztBQUMvQixNQUFNQyxPQUFPLEdBQUdkLFFBQVEsRUFBeEI7QUFDQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQVEsWUFBUSxFQUFDLFFBQWpCO0FBQTBCLFdBQU8sRUFBRTtBQUFDZSxrQkFBWSxFQUFFRCxPQUFPLENBQUNIO0FBQXZCLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUcsT0FBTyxDQUFDVCxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyxrQkFBVDtBQUE0QixhQUFTLEVBQUVTLE9BQU8sQ0FBQ1AsSUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FERixFQVlFLE1BQUMsd0RBQUQ7QUFDRSxXQUFPLEVBQUMsVUFEVjtBQUVFLFNBQUssRUFBQyxTQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRixDQURGLENBREYsQ0FERjtBQXlCRDs7R0EzQnVCTSxNO1VBQ05iLFE7OztLQURNYSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjczODBkMGU1ZWY5NjlmNGQ3MmNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBvZ3JhcGh5LCBjcmVhdGVTdHlsZXMsIFRoZW1lLCBtYWtlU3R5bGVzLCBCb3gsIEdyaWQsIEFwcEJhciwgVG9vbGJhciwgQnV0dG9uLCBTdmdJY29uLCBJY29uLCBJY29uQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCIuLi93aWRnZXRzL0xpbmtcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcygoe3NwYWNpbmcsIGJyZWFrcG9pbnRzfTogVGhlbWUpID0+IGNyZWF0ZVN0eWxlcyh7XHJcbiAgdGl0bGU6IHtcclxuICAgIGZsZXhHcm93OiAxXHJcbiAgfSxcclxuICBsb2dvOiB7XHJcbiAgICBbYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgbWF4SGVpZ2h0OiA0OFxyXG4gICAgfSxcclxuICAgIFticmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgbWF4SGVpZ2h0OiA1NFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGFwcGJhcjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXHJcbiAgfVxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXI+XHJcbiAgICAgIDxBcHBCYXIgcG9zaXRpb249J3N0YXRpYycgY2xhc3Nlcz17e2NvbG9yUHJpbWFyeTogY2xhc3Nlcy5hcHBiYXJ9fT5cclxuICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9Jy9pbWFnZXMvbG9nby5zdmcnIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfSAvPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiA8SWNvbkJ1dHRvbiBlZGdlPVwic3RhcnRcIiBjbGFzc05hbWU9e2NsYXNzZXMubWVudUJ1dHRvbn0gY29sb3I9XCJpbmhlcml0XCIgYXJpYS1sYWJlbD1cIm1lbnVcIj5cclxuICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+ICovfVxyXG4gICAgICAgICAgey8qIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2JyBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICBOZXdzXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+ICovfVxyXG4gICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnIFxyXG4gICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICA8L2hlYWRlcj5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9