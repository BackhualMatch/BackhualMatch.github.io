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
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_footerLeft, breakpoints.up('md'), {
      justifyContent: "flex-end",
      display: "flex"
    }), _footerLeft),
    footerRight: (_footerRight = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_footerRight, breakpoints.down('sm'), {
      justifyContent: 'center',
      display: 'flex'
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_footerRight, breakpoints.up('md'), {}), _footerRight),
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
    style: {
      color: '#3d3d3d'
    },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvRm9vdGVyLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZSIsIm1ha2VTdHlsZXMiLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJjcmVhdGVTdHlsZXMiLCJmb290ZXIiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwiYmFja2dyb3VuZENvbG9yIiwiZm9vdGVyTGVmdCIsImRvd24iLCJqdXN0aWZ5Q29udGVudCIsImRpc3BsYXkiLCJ1cCIsImZvb3RlclJpZ2h0IiwibGluayIsImNvbG9yIiwiRm9vdGVyIiwiY2xhc3NlcyIsImxpbmtDb2xvciIsImNvbG9yUHJpbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBR0Msb0VBQVUsQ0FBQztBQUFBOztBQUFBLE1BQUVDLE9BQUYsUUFBRUEsT0FBRjtBQUFBLE1BQVdDLFdBQVgsUUFBV0EsV0FBWDtBQUFBLFNBQW1DQyxzRUFBWSxDQUFDO0FBQzFFQyxVQUFNLEVBQUU7QUFDTkMsYUFBTyxFQUFFSixPQUFPLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FEVjtBQUVOSyxlQUFTLEVBQUUsTUFGTDtBQUdOQyxxQkFBZSxFQUFFO0FBSFgsS0FEa0U7QUFNMUVDLGNBQVUsNEhBQ1BOLFdBQVcsQ0FBQ08sSUFBWixDQUFpQixJQUFqQixDQURPLEVBQ2tCO0FBQ3hCQyxvQkFBYyxFQUFFLFFBRFE7QUFFeEJDLGFBQU8sRUFBRTtBQUZlLEtBRGxCLDBHQUtQVCxXQUFXLENBQUNVLEVBQVosQ0FBZSxJQUFmLENBTE8sRUFLZ0I7QUFDdEJGLG9CQUFjLEVBQUUsVUFETTtBQUV0QkMsYUFBTyxFQUFFO0FBRmEsS0FMaEIsZUFOZ0U7QUFnQjFFRSxlQUFXLDhIQUNSWCxXQUFXLENBQUNPLElBQVosQ0FBaUIsSUFBakIsQ0FEUSxFQUNpQjtBQUN4QkMsb0JBQWMsRUFBRSxRQURRO0FBRXhCQyxhQUFPLEVBQUU7QUFGZSxLQURqQiwyR0FLUlQsV0FBVyxDQUFDVSxFQUFaLENBQWUsSUFBZixDQUxRLEVBS2UsRUFMZixnQkFoQitEO0FBd0IxRUUsUUFBSSxFQUFFO0FBQ0pDLFdBQUssRUFBRTtBQURIO0FBeEJvRSxHQUFELENBQS9DO0FBQUEsQ0FBRCxDQUEzQjtBQTZCZSxTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQy9CLE1BQU1DLE9BQU8sR0FBR2xCLFFBQVEsRUFBeEI7QUFDQSxNQUFNbUIsU0FBUyxHQUFHO0FBQUNDLGdCQUFZLEVBQUVGLE9BQU8sQ0FBQ0g7QUFBdkIsR0FBbEI7QUFDQSxTQUNFO0FBQVEsYUFBUyxFQUFFRyxPQUFPLENBQUNiLE1BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsV0FBTyxFQUFDLFFBRlY7QUFHRSxjQUFVLEVBQUMsUUFIYjtBQUlFLFdBQU8sRUFBRSxDQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLENBQWY7QUFBa0IsTUFBRSxFQUFFLEVBQXRCO0FBQTBCLGFBQVMsRUFBRWEsT0FBTyxDQUFDVCxVQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFZLFNBQUssRUFBRTtBQUFDTyxXQUFLLEVBQUU7QUFBUixLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQURGLENBTkYsRUFXRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLENBQWY7QUFBa0IsTUFBRSxFQUFFLEVBQXRCO0FBQTBCLGFBQVMsRUFBRUUsT0FBTyxDQUFDSixXQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQWUsYUFBUyxFQUFDLFFBQXpCO0FBQWtDLHFCQUFpQixFQUFFSyxTQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQURGLEVBRUUsTUFBQyxxREFBRDtBQUFLLFdBQU8sRUFBQyxjQUFiO0FBQTRCLFNBQUssRUFBRSxDQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLHFEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBZSxhQUFTLEVBQUMsUUFBekI7QUFBa0MscUJBQWlCLEVBQUVBLFNBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBSEYsRUFJRSxNQUFDLHFEQUFEO0FBQUssV0FBTyxFQUFDLGNBQWI7QUFBNEIsU0FBSyxFQUFFLENBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFLE1BQUMscURBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFlLGFBQVMsRUFBQyxRQUF6QjtBQUFrQyxxQkFBaUIsRUFBRUEsU0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FMRixDQURGLENBWEYsQ0FERixDQURGO0FBeUJEOztHQTVCdUJGLE07VUFDTmpCLFE7OztLQURNaUIsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hZmU3OGYzY2IwODc2ZDhmMGM1My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwb2dyYXBoeSwgY3JlYXRlU3R5bGVzLCBUaGVtZSwgbWFrZVN0eWxlcywgQm94LCBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgTGluayBmcm9tICcuLi93aWRnZXRzL0xpbmsnO1xyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKCh7c3BhY2luZywgYnJlYWtwb2ludHN9OiBUaGVtZSkgPT4gY3JlYXRlU3R5bGVzKHtcclxuICBmb290ZXI6IHtcclxuICAgIHBhZGRpbmc6IHNwYWNpbmcoMywgMiksXHJcbiAgICBtYXJnaW5Ub3A6ICdhdXRvJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICB9LFxyXG4gIGZvb3RlckxlZnQ6IHtcclxuICAgIFticmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4J1xyXG4gICAgfSxcclxuICAgIFticmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIixcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCJcclxuICAgIH0sXHJcbiAgfSxcclxuICBmb290ZXJSaWdodDoge1xyXG4gICAgW2JyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnXHJcbiAgICB9LFxyXG4gICAgW2JyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgfSxcclxuICB9LFxyXG4gIGxpbms6IHtcclxuICAgIGNvbG9yOiAnIzNkM2QzZCdcclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICBjb25zdCBsaW5rQ29sb3IgPSB7Y29sb3JQcmltYXJ5OiBjbGFzc2VzLmxpbmt9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJ9PlxyXG4gICAgICA8R3JpZFxyXG4gICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgIGp1c3RpZnk9J2NlbnRlcidcclxuICAgICAgICBhbGlnbkl0ZW1zPSdjZW50ZXInXHJcbiAgICAgICAgc3BhY2luZz17M31cclxuICAgICAgPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9IHNtPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3RlckxlZnR9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3tjb2xvcjogJyMzZDNkM2QnfX0+XHJcbiAgICAgICAgICAgIENvcHlyaWdodCAyMDIwIEJBQ0tIQVVMLU1BVENIXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9IHNtPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3RlclJpZ2h0fT5cclxuICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIHVuZGVybGluZT0nYWx3YXlzJyBUeXBvZ3JhcGh5Q2xhc3Nlcz17bGlua0NvbG9yfT7pmrHnp4HmrIrmlL/nrZY8L0xpbms+XHJcbiAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImlubGluZS1ibG9ja1wiIHdpZHRoPXs4fS8+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIHVuZGVybGluZT0nYWx3YXlzJyBUeXBvZ3JhcGh5Q2xhc3Nlcz17bGlua0NvbG9yfT7lkIjkvZzmj5DmoYg8L0xpbms+XHJcbiAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImlubGluZS1ibG9ja1wiIHdpZHRoPXs4fS8+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIHVuZGVybGluZT0nYWx3YXlzJyBUeXBvZ3JhcGh5Q2xhc3Nlcz17bGlua0NvbG9yfT7oga/ntaHmiJHlgJE8L0xpbms+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvZm9vdGVyPlxyXG4gIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=