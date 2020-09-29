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
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _widgets_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widgets/Link */ "./src/components/widgets/Link.tsx");



var _jsxFileName = "Z:\\Vmware\\Shared\\Backhual\\backhual_frontend_website\\src\\components\\sections\\Header.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var useStyle = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (_ref) {
  var _logo;

  var spacing = _ref.spacing,
      breakpoints = _ref.breakpoints;
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["createStyles"])({
    title: {
      flexGrow: 1
    },
    logo: (_logo = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_logo, breakpoints.down('sm'), {
      maxHeight: 48
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_logo, breakpoints.up('md'), {
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
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["AppBar"], {
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
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Toolbar"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(_widgets_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/logo.svg",
    className: classes.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }))), __jsx(UnloginFunctions, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  })))));
}

_s(Header, "eTC39ZLyyKld6i5R1gil2d/OHGM=", false, function () {
  return [useStyle];
});

_c = Header;
var useFunctionStyle = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (_ref2) {
  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2);

  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["createStyles"])({
    loginBtn: {
      borderRadius: 64
    }
  });
});

function UnloginFunctions() {
  _s2();

  var classes = useFunctionStyle();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "text",
    color: "primary",
    className: classes.loginBtn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, "\u9996\u9801"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "contained",
    color: "primary",
    className: classes.loginBtn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, "\u767B\u5165"));
}

_s2(UnloginFunctions, "bb10zg0cnw177wA+kwR12uJiPLo=", false, function () {
  return [useFunctionStyle];
});

_c2 = UnloginFunctions;

var _c, _c2;

$RefreshReg$(_c, "Header");
$RefreshReg$(_c2, "UnloginFunctions");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvSGVhZGVyLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZSIsIm1ha2VTdHlsZXMiLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJjcmVhdGVTdHlsZXMiLCJ0aXRsZSIsImZsZXhHcm93IiwibG9nbyIsImRvd24iLCJtYXhIZWlnaHQiLCJ1cCIsImFwcGJhciIsImJhY2tncm91bmRDb2xvciIsIkhlYWRlciIsImNsYXNzZXMiLCJjb2xvclByaW1hcnkiLCJ1c2VGdW5jdGlvblN0eWxlIiwibG9naW5CdG4iLCJib3JkZXJSYWRpdXMiLCJVbmxvZ2luRnVuY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxvRUFBVSxDQUFDO0FBQUE7O0FBQUEsTUFBRUMsT0FBRixRQUFFQSxPQUFGO0FBQUEsTUFBV0MsV0FBWCxRQUFXQSxXQUFYO0FBQUEsU0FBbUNDLHNFQUFZLENBQUM7QUFDMUVDLFNBQUssRUFBRTtBQUNMQyxjQUFRLEVBQUU7QUFETCxLQURtRTtBQUkxRUMsUUFBSSxnSEFDREosV0FBVyxDQUFDSyxJQUFaLENBQWlCLElBQWpCLENBREMsRUFDd0I7QUFDeEJDLGVBQVMsRUFBRTtBQURhLEtBRHhCLG9HQUlETixXQUFXLENBQUNPLEVBQVosQ0FBZSxJQUFmLENBSkMsRUFJc0I7QUFDdEJELGVBQVMsRUFBRTtBQURXLEtBSnRCLFNBSnNFO0FBWTFFRSxVQUFNLEVBQUU7QUFDTkMscUJBQWUsRUFBRTtBQURYO0FBWmtFLEdBQUQsQ0FBL0M7QUFBQSxDQUFELENBQTNCO0FBaUJlLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFDL0IsTUFBTUMsT0FBTyxHQUFHZCxRQUFRLEVBQXhCO0FBQ0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFRLFlBQVEsRUFBQyxRQUFqQjtBQUEwQixXQUFPLEVBQUU7QUFBQ2Usa0JBQVksRUFBRUQsT0FBTyxDQUFDSDtBQUF2QixLQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVHLE9BQU8sQ0FBQ1QsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsa0JBQVQ7QUFBNEIsYUFBUyxFQUFFUyxPQUFPLENBQUNQLElBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsRUFZRSxNQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixDQURGLENBREYsQ0FERixDQURGO0FBc0JEOztHQXhCdUJNLE07VUFDTmIsUTs7O0tBRE1hLE07QUEwQnhCLElBQU1HLGdCQUFnQixHQUFHZixvRUFBVSxDQUFDO0FBQUE7O0FBQUEsU0FBZUcsc0VBQVksQ0FBQztBQUM5RGEsWUFBUSxFQUFFO0FBQ1JDLGtCQUFZLEVBQUU7QUFETjtBQURvRCxHQUFELENBQTNCO0FBQUEsQ0FBRCxDQUFuQzs7QUFLQSxTQUFTQyxnQkFBVCxHQUE0QjtBQUFBOztBQUMxQixNQUFNTCxPQUFPLEdBQUdFLGdCQUFnQixFQUFoQztBQUNBLFNBQ0UsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUNFLFdBQU8sRUFBQyxNQURWO0FBRUUsU0FBSyxFQUFDLFNBRlI7QUFHRSxhQUFTLEVBQUVGLE9BQU8sQ0FBQ0csUUFIckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQVFFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBU0UsTUFBQyx3REFBRDtBQUNFLFdBQU8sRUFBQyxXQURWO0FBRUUsU0FBSyxFQUFDLFNBRlI7QUFHRSxhQUFTLEVBQUVILE9BQU8sQ0FBQ0csUUFIckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFURixDQURGO0FBbUJEOztJQXJCUUUsZ0I7VUFDU0gsZ0I7OztNQURURyxnQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wYjM3ZGYzOGU5ZTY5MGNjMmJhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwb2dyYXBoeSwgY3JlYXRlU3R5bGVzLCBUaGVtZSwgbWFrZVN0eWxlcywgQm94LCBHcmlkLCBBcHBCYXIsIFRvb2xiYXIsIEJ1dHRvbiwgU3ZnSWNvbiwgSWNvbiwgSWNvbkJ1dHRvbiwgQ29udGFpbmVyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCIuLi93aWRnZXRzL0xpbmtcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcygoe3NwYWNpbmcsIGJyZWFrcG9pbnRzfTogVGhlbWUpID0+IGNyZWF0ZVN0eWxlcyh7XHJcbiAgdGl0bGU6IHtcclxuICAgIGZsZXhHcm93OiAxXHJcbiAgfSxcclxuICBsb2dvOiB7XHJcbiAgICBbYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgbWF4SGVpZ2h0OiA0OFxyXG4gICAgfSxcclxuICAgIFticmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgbWF4SGVpZ2h0OiA1NFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGFwcGJhcjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyPlxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPSdzdGF0aWMnIGNsYXNzZXM9e3tjb2xvclByaW1hcnk6IGNsYXNzZXMuYXBwYmFyfX0+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL2ltYWdlcy9sb2dvLnN2ZycgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299IC8+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDxJY29uQnV0dG9uIGVkZ2U9XCJzdGFydFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufSBjb2xvcj1cImluaGVyaXRcIiBhcmlhLWxhYmVsPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+ICovfVxyXG4gICAgICAgICAgICB7LyogPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgTmV3c1xyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+ICovfVxyXG4gICAgICAgICAgICA8VW5sb2dpbkZ1bmN0aW9ucyAvPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgIDwvaGVhZGVyPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgdXNlRnVuY3Rpb25TdHlsZSA9IG1ha2VTdHlsZXMoKHt9OiBUaGVtZSkgPT4gY3JlYXRlU3R5bGVzKHtcclxuICBsb2dpbkJ0bjoge1xyXG4gICAgYm9yZGVyUmFkaXVzOiA2NFxyXG4gIH1cclxufSkpO1xyXG5mdW5jdGlvbiBVbmxvZ2luRnVuY3Rpb25zKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VGdW5jdGlvblN0eWxlKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgdmFyaWFudD0ndGV4dCcgXHJcbiAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ2luQnRufVxyXG4gICAgICA+XHJcbiAgICAgICAg6aaW6aCBXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8Qm94PjwvQm94PlxyXG4gICAgICA8QnV0dG9uIFxyXG4gICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCcgXHJcbiAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ2luQnRufVxyXG4gICAgICA+XHJcbiAgICAgICAg55m75YWlXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==