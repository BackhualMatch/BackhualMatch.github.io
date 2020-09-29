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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _widgets_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widgets/Link */ "./src/components/widgets/Link.tsx");
var _jsxFileName = "Z:\\Vmware\\Shared\\Backhual\\backhual_frontend_website\\src\\components\\sections\\Footer.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var useStyle = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (_ref) {
  var spacing = _ref.spacing,
      palette = _ref.palette;
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
    footer: {
      padding: spacing(3, 2),
      marginTop: 'auto',
      backgroundColor: palette.type === 'light' ? palette.grey[200] : palette.grey[800]
    },
    link: {
      color: "#3d3d3d"
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
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    justify: "center",
    alignItems: "center",
    spacing: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 6,
    style: {
      justifyContent: "flex-end",
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "Copyright 2020 BACKHAUL-MATCH")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx(_widgets_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/",
    underline: "always",
    TypographyClasses: linkColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "\u96B1\u79C1\u6B0A\u653F\u7B56"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }), __jsx(_widgets_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/",
    underline: "always",
    TypographyClasses: linkColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "\u5408\u4F5C\u63D0\u6848"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }), __jsx(_widgets_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/",
    underline: "always",
    TypographyClasses: linkColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvRm9vdGVyLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZSIsIm1ha2VTdHlsZXMiLCJzcGFjaW5nIiwicGFsZXR0ZSIsImNyZWF0ZVN0eWxlcyIsImZvb3RlciIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0eXBlIiwiZ3JleSIsImxpbmsiLCJjb2xvciIsIkZvb3RlciIsImNsYXNzZXMiLCJsaW5rQ29sb3IiLCJjb2xvclByaW1hcnkiLCJqdXN0aWZ5Q29udGVudCIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLG9FQUFVLENBQUM7QUFBQSxNQUFFQyxPQUFGLFFBQUVBLE9BQUY7QUFBQSxNQUFXQyxPQUFYLFFBQVdBLE9BQVg7QUFBQSxTQUErQkMsc0VBQVksQ0FBQztBQUN0RUMsVUFBTSxFQUFFO0FBQ05DLGFBQU8sRUFBRUosT0FBTyxDQUFDLENBQUQsRUFBSSxDQUFKLENBRFY7QUFFTkssZUFBUyxFQUFFLE1BRkw7QUFHTkMscUJBQWUsRUFDYkwsT0FBTyxDQUFDTSxJQUFSLEtBQWlCLE9BQWpCLEdBQTJCTixPQUFPLENBQUNPLElBQVIsQ0FBYSxHQUFiLENBQTNCLEdBQStDUCxPQUFPLENBQUNPLElBQVIsQ0FBYSxHQUFiO0FBSjNDLEtBRDhEO0FBT3RFQyxRQUFJLEVBQUU7QUFDSkMsV0FBSyxFQUFFO0FBREg7QUFQZ0UsR0FBRCxDQUEzQztBQUFBLENBQUQsQ0FBM0I7QUFZZSxTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQy9CLE1BQU1DLE9BQU8sR0FBR2QsUUFBUSxFQUF4QjtBQUNBLE1BQU1lLFNBQVMsR0FBRztBQUFDQyxnQkFBWSxFQUFFRixPQUFPLENBQUNIO0FBQXZCLEdBQWxCO0FBQ0EsU0FDRTtBQUFRLGFBQVMsRUFBRUcsT0FBTyxDQUFDVCxNQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUNFLGFBQVMsTUFEWDtBQUVFLFdBQU8sRUFBQyxRQUZWO0FBR0UsY0FBVSxFQUFDLFFBSGI7QUFJRSxXQUFPLEVBQUUsQ0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxDQUFmO0FBQWtCLFNBQUssRUFBRTtBQUN2Qlksb0JBQWMsRUFBRSxVQURPO0FBRXZCQyxhQUFPLEVBQUU7QUFGYyxLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUUsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQUpGLENBTkYsRUFjRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFlLGFBQVMsRUFBQyxRQUF6QjtBQUFrQyxxQkFBaUIsRUFBRUgsU0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FERixFQUVFLE1BQUMscURBQUQ7QUFBSyxTQUFLLEVBQUUsQ0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLHFEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBZSxhQUFTLEVBQUMsUUFBekI7QUFBa0MscUJBQWlCLEVBQUVBLFNBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBSEYsRUFJRSxNQUFDLHFEQUFEO0FBQUssU0FBSyxFQUFFLENBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0UsTUFBQyxxREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQWUsYUFBUyxFQUFDLFFBQXpCO0FBQWtDLHFCQUFpQixFQUFFQSxTQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUxGLENBREYsQ0FkRixDQURGLENBREY7QUE0QkQ7O0dBL0J1QkYsTTtVQUNOYixROzs7S0FETWEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42Y2QwZWQxMjY4ODdkNjQ2YWM1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwb2dyYXBoeSwgY3JlYXRlU3R5bGVzLCBUaGVtZSwgbWFrZVN0eWxlcywgQm94LCBHcmlkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCIuLi93aWRnZXRzL0xpbmtcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcygoe3NwYWNpbmcsIHBhbGV0dGV9OiBUaGVtZSkgPT4gY3JlYXRlU3R5bGVzKHtcclxuICBmb290ZXI6IHtcclxuICAgIHBhZGRpbmc6IHNwYWNpbmcoMywgMiksXHJcbiAgICBtYXJnaW5Ub3A6ICdhdXRvJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjpcclxuICAgICAgcGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gcGFsZXR0ZS5ncmV5WzIwMF0gOiBwYWxldHRlLmdyZXlbODAwXSxcclxuICB9LFxyXG4gIGxpbms6IHtcclxuICAgIGNvbG9yOiBcIiMzZDNkM2RcIlxyXG4gIH1cclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gIGNvbnN0IGxpbmtDb2xvciA9IHtjb2xvclByaW1hcnk6IGNsYXNzZXMubGlua307XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0+XHJcbiAgICAgIDxHcmlkXHJcbiAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAganVzdGlmeT0nY2VudGVyJ1xyXG4gICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcclxuICAgICAgICBzcGFjaW5nPXszfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gc3R5bGU9e3tcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsXHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIlxyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIENvcHlyaWdodCAyMDIwIEJBQ0tIQVVMLU1BVENIXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLycgdW5kZXJsaW5lPSdhbHdheXMnIFR5cG9ncmFwaHlDbGFzc2VzPXtsaW5rQ29sb3J9PumaseengeasiuaUv+etljwvTGluaz5cclxuICAgICAgICAgICAgPEJveCB3aWR0aD17Mn0vPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvJyB1bmRlcmxpbmU9J2Fsd2F5cycgVHlwb2dyYXBoeUNsYXNzZXM9e2xpbmtDb2xvcn0+5ZCI5L2c5o+Q5qGIPC9MaW5rPlxyXG4gICAgICAgICAgICA8Qm94IHdpZHRoPXsyfS8+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIHVuZGVybGluZT0nYWx3YXlzJyBUeXBvZ3JhcGh5Q2xhc3Nlcz17bGlua0NvbG9yfT7oga/ntaHmiJHlgJE8L0xpbms+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvZm9vdGVyPlxyXG4gIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=