webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/sections/Footer.tsx":
/*!********************************************!*\
  !*** ./src/components/sections/Footer.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _widgets_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../widgets/Link */ "./src/components/widgets/Link.tsx");


var _jsxFileName = "Z:\\Vmware\\Shared\\Backhual\\backhual_frontend_website\\src\\components\\sections\\Footer.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var useStyle = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (_ref) {
  var _footerLeft, _footerRight;

  var spacing = _ref.spacing,
      breakpoints = _ref.breakpoints;
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    footer: {
      padding: spacing(3, 2),
      marginTop: 'auto',
      backgroundColor: 'white'
    },
    footerLeft: (_footerLeft = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_footerLeft, breakpoints.down('sm'), {
      justifyContent: 'center',
      display: 'flex'
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_footerLeft, breakpoints.up('md'), {}), _footerLeft),
    footerRight: (_footerRight = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_footerRight, breakpoints.down('sm'), {
      justifyContent: 'center',
      display: 'flex'
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_footerRight, breakpoints.up('md'), {
      justifyContent: "flex-end",
      display: "flex"
    }), _footerRight),
    link: {
      color: '#3d3d3d'
    }
  });
});
function Footer() {
  _s();

  var classes = useStyle();
  var linkColor = {
    colorPrimary: classes.link
  };
  return __jsx("footer", {
    className: classes.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    justify: "center",
    alignItems: "center",
    spacing: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    md: 6,
    sm: 12,
    className: classes.footerLeft,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "Copyright 2020 BACKHAUL-MATCH")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    md: 6,
    sm: 12,
    className: classes.footerRight,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx(_widgets_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/",
    underline: "always",
    TypographyClasses: linkColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, "\u96B1\u79C1\u6B0A\u653F\u7B56"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    display: "inline-block",
    width: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }), __jsx(_widgets_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/",
    underline: "always",
    TypographyClasses: linkColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, "\u5408\u4F5C\u63D0\u6848"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    display: "inline-block",
    width: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }), __jsx(_widgets_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/",
    underline: "always",
    TypographyClasses: linkColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, "\u806F\u7D61\u6211\u5011")))));
}

_s(Footer, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [useStyle];
});

_c = Footer;

var _c;

$RefreshReg$(_c, "Footer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvRm9vdGVyLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZSIsIm1ha2VTdHlsZXMiLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJjcmVhdGVTdHlsZXMiLCJmb290ZXIiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwiYmFja2dyb3VuZENvbG9yIiwiZm9vdGVyTGVmdCIsImRvd24iLCJqdXN0aWZ5Q29udGVudCIsImRpc3BsYXkiLCJ1cCIsImZvb3RlclJpZ2h0IiwibGluayIsImNvbG9yIiwiRm9vdGVyIiwiY2xhc3NlcyIsImxpbmtDb2xvciIsImNvbG9yUHJpbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBR0Msb0VBQVUsQ0FBQztBQUFBOztBQUFBLE1BQUVDLE9BQUYsUUFBRUEsT0FBRjtBQUFBLE1BQVdDLFdBQVgsUUFBV0EsV0FBWDtBQUFBLFNBQW1DQyxzRUFBWSxDQUFDO0FBQzFFQyxVQUFNLEVBQUU7QUFDTkMsYUFBTyxFQUFFSixPQUFPLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FEVjtBQUVOSyxlQUFTLEVBQUUsTUFGTDtBQUdOQyxxQkFBZSxFQUFFO0FBSFgsS0FEa0U7QUFNMUVDLGNBQVUsNEhBQ1BOLFdBQVcsQ0FBQ08sSUFBWixDQUFpQixJQUFqQixDQURPLEVBQ2tCO0FBQ3hCQyxvQkFBYyxFQUFFLFFBRFE7QUFFeEJDLGFBQU8sRUFBRTtBQUZlLEtBRGxCLDBHQUtQVCxXQUFXLENBQUNVLEVBQVosQ0FBZSxJQUFmLENBTE8sRUFLZ0IsRUFMaEIsZUFOZ0U7QUFjMUVDLGVBQVcsOEhBQ1JYLFdBQVcsQ0FBQ08sSUFBWixDQUFpQixJQUFqQixDQURRLEVBQ2lCO0FBQ3hCQyxvQkFBYyxFQUFFLFFBRFE7QUFFeEJDLGFBQU8sRUFBRTtBQUZlLEtBRGpCLDJHQUtSVCxXQUFXLENBQUNVLEVBQVosQ0FBZSxJQUFmLENBTFEsRUFLZTtBQUN0QkYsb0JBQWMsRUFBRSxVQURNO0FBRXRCQyxhQUFPLEVBQUU7QUFGYSxLQUxmLGdCQWQrRDtBQXdCMUVHLFFBQUksRUFBRTtBQUNKQyxXQUFLLEVBQUU7QUFESDtBQXhCb0UsR0FBRCxDQUEvQztBQUFBLENBQUQsQ0FBM0I7QUE2QmUsU0FBU0MsTUFBVCxHQUFrQjtBQUFBOztBQUMvQixNQUFNQyxPQUFPLEdBQUdsQixRQUFRLEVBQXhCO0FBQ0EsTUFBTW1CLFNBQVMsR0FBRztBQUFDQyxnQkFBWSxFQUFFRixPQUFPLENBQUNIO0FBQXZCLEdBQWxCO0FBQ0EsU0FDRTtBQUFRLGFBQVMsRUFBRUcsT0FBTyxDQUFDYixNQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUNFLGFBQVMsTUFEWDtBQUVFLFdBQU8sRUFBQyxRQUZWO0FBR0UsY0FBVSxFQUFDLFFBSGI7QUFJRSxXQUFPLEVBQUUsQ0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxDQUFmO0FBQWtCLE1BQUUsRUFBRSxFQUF0QjtBQUEwQixhQUFTLEVBQUVhLE9BQU8sQ0FBQ1QsVUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FERixDQU5GLEVBV0UsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxDQUFmO0FBQWtCLE1BQUUsRUFBRSxFQUF0QjtBQUEwQixhQUFTLEVBQUVTLE9BQU8sQ0FBQ0osV0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFlLGFBQVMsRUFBQyxRQUF6QjtBQUFrQyxxQkFBaUIsRUFBRUssU0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FERixFQUVFLE1BQUMscURBQUQ7QUFBSyxXQUFPLEVBQUMsY0FBYjtBQUE0QixTQUFLLEVBQUUsQ0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyxxREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQWUsYUFBUyxFQUFDLFFBQXpCO0FBQWtDLHFCQUFpQixFQUFFQSxTQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUhGLEVBSUUsTUFBQyxxREFBRDtBQUFLLFdBQU8sRUFBQyxjQUFiO0FBQTRCLFNBQUssRUFBRSxDQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRSxNQUFDLHFEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBZSxhQUFTLEVBQUMsUUFBekI7QUFBa0MscUJBQWlCLEVBQUVBLFNBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBTEYsQ0FERixDQVhGLENBREYsQ0FERjtBQXlCRDs7R0E1QnVCRixNO1VBQ05qQixROzs7S0FETWlCLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGNiYTZhODQyZmI2OThlMWM2OTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cG9ncmFwaHksIGNyZWF0ZVN0eWxlcywgVGhlbWUsIG1ha2VTdHlsZXMsIEJveCwgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnLi4vd2lkZ2V0cy9MaW5rJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcygoe3NwYWNpbmcsIGJyZWFrcG9pbnRzfTogVGhlbWUpID0+IGNyZWF0ZVN0eWxlcyh7XHJcbiAgZm9vdGVyOiB7XHJcbiAgICBwYWRkaW5nOiBzcGFjaW5nKDMsIDIpLFxyXG4gICAgbWFyZ2luVG9wOiAnYXV0bycsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgfSxcclxuICBmb290ZXJMZWZ0OiB7XHJcbiAgICBbYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCdcclxuICAgIH0sXHJcbiAgICBbYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZm9vdGVyUmlnaHQ6IHtcclxuICAgIFticmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4J1xyXG4gICAgfSxcclxuICAgIFticmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIixcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCJcclxuICAgIH0sXHJcbiAgfSxcclxuICBsaW5rOiB7XHJcbiAgICBjb2xvcjogJyMzZDNkM2QnXHJcbiAgfVxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgY29uc3QgbGlua0NvbG9yID0ge2NvbG9yUHJpbWFyeTogY2xhc3Nlcy5saW5rfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyfT5cclxuICAgICAgPEdyaWRcclxuICAgICAgICBjb250YWluZXJcclxuICAgICAgICBqdXN0aWZ5PSdjZW50ZXInXHJcbiAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xyXG4gICAgICAgIHNwYWNpbmc9ezN9XHJcbiAgICAgID5cclxuICAgICAgICA8R3JpZCBpdGVtIG1kPXs2fSBzbT17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJMZWZ0fT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICBDb3B5cmlnaHQgMjAyMCBCQUNLSEFVTC1NQVRDSFxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIG1kPXs2fSBzbT17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJSaWdodH0+XHJcbiAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvJyB1bmRlcmxpbmU9J2Fsd2F5cycgVHlwb2dyYXBoeUNsYXNzZXM9e2xpbmtDb2xvcn0+6Zqx56eB5qyK5pS/562WPC9MaW5rPlxyXG4gICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIiB3aWR0aD17OH0vPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvJyB1bmRlcmxpbmU9J2Fsd2F5cycgVHlwb2dyYXBoeUNsYXNzZXM9e2xpbmtDb2xvcn0+5ZCI5L2c5o+Q5qGIPC9MaW5rPlxyXG4gICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIiB3aWR0aD17OH0vPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvJyB1bmRlcmxpbmU9J2Fsd2F5cycgVHlwb2dyYXBoeUNsYXNzZXM9e2xpbmtDb2xvcn0+6IGv57Wh5oiR5YCRPC9MaW5rPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9