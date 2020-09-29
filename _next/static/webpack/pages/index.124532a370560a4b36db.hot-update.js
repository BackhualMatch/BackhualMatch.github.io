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
    }
  });
});
function Footer() {
  _s();

  var classes = useStyle();
  return __jsx("footer", {
    className: classes.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    justify: "center",
    alignItems: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, "Copyright 2020 BACKHAUL-MATCH"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(_widgets_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/",
    underline: "always",
    style: {
      color: "3d3d3d"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, "\u96B1\u79C1\u6B0A\u653F\u7B56"), __jsx(_widgets_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/",
    underline: "always",
    style: {
      color: "3d3d3d"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "\u5408\u4F5C\u63D0\u6848"), __jsx(_widgets_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/",
    underline: "always",
    style: {
      color: "3d3d3d"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvRm9vdGVyLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZSIsIm1ha2VTdHlsZXMiLCJzcGFjaW5nIiwicGFsZXR0ZSIsImNyZWF0ZVN0eWxlcyIsImZvb3RlciIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0eXBlIiwiZ3JleSIsIkZvb3RlciIsImNsYXNzZXMiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBR0Msb0VBQVUsQ0FBQztBQUFBLE1BQUVDLE9BQUYsUUFBRUEsT0FBRjtBQUFBLE1BQVdDLE9BQVgsUUFBV0EsT0FBWDtBQUFBLFNBQStCQyxzRUFBWSxDQUFDO0FBQ3RFQyxVQUFNLEVBQUU7QUFDTkMsYUFBTyxFQUFFSixPQUFPLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FEVjtBQUVOSyxlQUFTLEVBQUUsTUFGTDtBQUdOQyxxQkFBZSxFQUNiTCxPQUFPLENBQUNNLElBQVIsS0FBaUIsT0FBakIsR0FBMkJOLE9BQU8sQ0FBQ08sSUFBUixDQUFhLEdBQWIsQ0FBM0IsR0FBK0NQLE9BQU8sQ0FBQ08sSUFBUixDQUFhLEdBQWI7QUFKM0M7QUFEOEQsR0FBRCxDQUEzQztBQUFBLENBQUQsQ0FBM0I7QUFTZSxTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQy9CLE1BQU1DLE9BQU8sR0FBR1osUUFBUSxFQUF4QjtBQUNBLFNBQ0U7QUFBUSxhQUFTLEVBQUVZLE9BQU8sQ0FBQ1AsTUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFDRSxhQUFTLE1BRFg7QUFFRSxXQUFPLEVBQUMsUUFGVjtBQUdFLGNBQVUsRUFBQyxRQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBTEYsRUFRRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBZSxhQUFTLEVBQUMsUUFBekI7QUFBa0MsU0FBSyxFQUFFO0FBQUNRLFdBQUssRUFBRTtBQUFSLEtBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBREYsRUFFRSxNQUFDLHFEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBZSxhQUFTLEVBQUMsUUFBekI7QUFBa0MsU0FBSyxFQUFFO0FBQUNBLFdBQUssRUFBRTtBQUFSLEtBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBRkYsRUFHRSxNQUFDLHFEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBZSxhQUFTLEVBQUMsUUFBekI7QUFBa0MsU0FBSyxFQUFFO0FBQUNBLFdBQUssRUFBRTtBQUFSLEtBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBSEYsQ0FSRixDQURGLENBREY7QUFrQkQ7O0dBcEJ1QkYsTTtVQUNOWCxROzs7S0FETVcsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xMjQ1MzJhMzcwNTYwYTRiMzZkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwb2dyYXBoeSwgY3JlYXRlU3R5bGVzLCBUaGVtZSwgbWFrZVN0eWxlcywgQm94LCBHcmlkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCIuLi93aWRnZXRzL0xpbmtcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcygoe3NwYWNpbmcsIHBhbGV0dGV9OiBUaGVtZSkgPT4gY3JlYXRlU3R5bGVzKHtcclxuICBmb290ZXI6IHtcclxuICAgIHBhZGRpbmc6IHNwYWNpbmcoMywgMiksXHJcbiAgICBtYXJnaW5Ub3A6ICdhdXRvJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjpcclxuICAgICAgcGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gcGFsZXR0ZS5ncmV5WzIwMF0gOiBwYWxldHRlLmdyZXlbODAwXSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0+XHJcbiAgICAgIDxHcmlkXHJcbiAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAganVzdGlmeT0nY2VudGVyJ1xyXG4gICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcclxuICAgICAgPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgQ29weXJpZ2h0IDIwMjAgQkFDS0hBVUwtTUFUQ0hcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPEJveD5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIHVuZGVybGluZT0nYWx3YXlzJyBzdHlsZT17e2NvbG9yOiBcIjNkM2QzZFwifX0+6Zqx56eB5qyK5pS/562WPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj0nLycgdW5kZXJsaW5lPSdhbHdheXMnIHN0eWxlPXt7Y29sb3I6IFwiM2QzZDNkXCJ9fT7lkIjkvZzmj5DmoYg8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPScvJyB1bmRlcmxpbmU9J2Fsd2F5cycgc3R5bGU9e3tjb2xvcjogXCIzZDNkM2RcIn19PuiBr+e1oeaIkeWAkTwvTGluaz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==