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
      color: "3d3d3d"
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "Copyright 2020 BACKHAUL-MATCH"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(_widgets_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/",
    underline: "always",
    classes: {
      colorPrimary: "3d3d3d"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, "\u96B1\u79C1\u6B0A\u653F\u7B56"), __jsx(_widgets_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/",
    underline: "always",
    classes: linkColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "\u5408\u4F5C\u63D0\u6848"), __jsx(_widgets_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/",
    underline: "always",
    classes: linkColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, "\u806F\u7D61\u6211\u5011"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvRm9vdGVyLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZSIsIm1ha2VTdHlsZXMiLCJzcGFjaW5nIiwicGFsZXR0ZSIsImNyZWF0ZVN0eWxlcyIsImZvb3RlciIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0eXBlIiwiZ3JleSIsImxpbmsiLCJjb2xvciIsIkZvb3RlciIsImNsYXNzZXMiLCJsaW5rQ29sb3IiLCJjb2xvclByaW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLG9FQUFVLENBQUM7QUFBQSxNQUFFQyxPQUFGLFFBQUVBLE9BQUY7QUFBQSxNQUFXQyxPQUFYLFFBQVdBLE9BQVg7QUFBQSxTQUErQkMsc0VBQVksQ0FBQztBQUN0RUMsVUFBTSxFQUFFO0FBQ05DLGFBQU8sRUFBRUosT0FBTyxDQUFDLENBQUQsRUFBSSxDQUFKLENBRFY7QUFFTkssZUFBUyxFQUFFLE1BRkw7QUFHTkMscUJBQWUsRUFDYkwsT0FBTyxDQUFDTSxJQUFSLEtBQWlCLE9BQWpCLEdBQTJCTixPQUFPLENBQUNPLElBQVIsQ0FBYSxHQUFiLENBQTNCLEdBQStDUCxPQUFPLENBQUNPLElBQVIsQ0FBYSxHQUFiO0FBSjNDLEtBRDhEO0FBT3RFQyxRQUFJLEVBQUU7QUFDSkMsV0FBSyxFQUFFO0FBREg7QUFQZ0UsR0FBRCxDQUEzQztBQUFBLENBQUQsQ0FBM0I7QUFZZSxTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQy9CLE1BQU1DLE9BQU8sR0FBR2QsUUFBUSxFQUF4QjtBQUNBLE1BQU1lLFNBQVMsR0FBRztBQUFDQyxnQkFBWSxFQUFFRixPQUFPLENBQUNIO0FBQXZCLEdBQWxCO0FBQ0EsU0FDRTtBQUFRLGFBQVMsRUFBRUcsT0FBTyxDQUFDVCxNQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUNFLGFBQVMsTUFEWDtBQUVFLFdBQU8sRUFBQyxRQUZWO0FBR0UsY0FBVSxFQUFDLFFBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FMRixFQVFFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFlLGFBQVMsRUFBQyxRQUF6QjtBQUFrQyxXQUFPLEVBQUU7QUFDekNXLGtCQUFZLEVBQUU7QUFEMkIsS0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FERixFQUlFLE1BQUMscURBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFlLGFBQVMsRUFBQyxRQUF6QjtBQUFrQyxXQUFPLEVBQUVELFNBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBSkYsRUFLRSxNQUFDLHFEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBZSxhQUFTLEVBQUMsUUFBekI7QUFBa0MsV0FBTyxFQUFFQSxTQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUxGLENBUkYsQ0FERixDQURGO0FBb0JEOztHQXZCdUJGLE07VUFDTmIsUTs7O0tBRE1hLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGU1MjhkOTliM2YyMzFmMTYyNGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cG9ncmFwaHksIGNyZWF0ZVN0eWxlcywgVGhlbWUsIG1ha2VTdHlsZXMsIEJveCwgR3JpZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiLi4vd2lkZ2V0cy9MaW5rXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXMoKHtzcGFjaW5nLCBwYWxldHRlfTogVGhlbWUpID0+IGNyZWF0ZVN0eWxlcyh7XHJcbiAgZm9vdGVyOiB7XHJcbiAgICBwYWRkaW5nOiBzcGFjaW5nKDMsIDIpLFxyXG4gICAgbWFyZ2luVG9wOiAnYXV0bycsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XHJcbiAgICAgIHBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/IHBhbGV0dGUuZ3JleVsyMDBdIDogcGFsZXR0ZS5ncmV5WzgwMF0sXHJcbiAgfSxcclxuICBsaW5rOiB7XHJcbiAgICBjb2xvcjogXCIzZDNkM2RcIlxyXG4gIH1cclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gIGNvbnN0IGxpbmtDb2xvciA9IHtjb2xvclByaW1hcnk6IGNsYXNzZXMubGlua307XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0+XHJcbiAgICAgIDxHcmlkXHJcbiAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAganVzdGlmeT0nY2VudGVyJ1xyXG4gICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcclxuICAgICAgPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgQ29weXJpZ2h0IDIwMjAgQkFDS0hBVUwtTUFUQ0hcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPEJveD5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIHVuZGVybGluZT0nYWx3YXlzJyBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgIGNvbG9yUHJpbWFyeTogXCIzZDNkM2RcIlxyXG4gICAgICAgICAgfX0+6Zqx56eB5qyK5pS/562WPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj0nLycgdW5kZXJsaW5lPSdhbHdheXMnIGNsYXNzZXM9e2xpbmtDb2xvcn0+5ZCI5L2c5o+Q5qGIPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj0nLycgdW5kZXJsaW5lPSdhbHdheXMnIGNsYXNzZXM9e2xpbmtDb2xvcn0+6IGv57Wh5oiR5YCRPC9MaW5rPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9