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
    display: "inline-flex",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvSGVhZGVyLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZSIsIm1ha2VTdHlsZXMiLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJjcmVhdGVTdHlsZXMiLCJ0aXRsZSIsImZsZXhHcm93IiwibG9nbyIsImRvd24iLCJtYXhIZWlnaHQiLCJ1cCIsImFwcGJhciIsImJhY2tncm91bmRDb2xvciIsIkhlYWRlciIsImNsYXNzZXMiLCJjb2xvclByaW1hcnkiLCJ1c2VGdW5jdGlvblN0eWxlIiwibG9naW5CdG4iLCJib3JkZXJSYWRpdXMiLCJVbmxvZ2luRnVuY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxvRUFBVSxDQUFDO0FBQUE7O0FBQUEsTUFBRUMsT0FBRixRQUFFQSxPQUFGO0FBQUEsTUFBV0MsV0FBWCxRQUFXQSxXQUFYO0FBQUEsU0FBbUNDLHNFQUFZLENBQUM7QUFDMUVDLFNBQUssRUFBRTtBQUNMQyxjQUFRLEVBQUU7QUFETCxLQURtRTtBQUkxRUMsUUFBSSxnSEFDREosV0FBVyxDQUFDSyxJQUFaLENBQWlCLElBQWpCLENBREMsRUFDd0I7QUFDeEJDLGVBQVMsRUFBRTtBQURhLEtBRHhCLG9HQUlETixXQUFXLENBQUNPLEVBQVosQ0FBZSxJQUFmLENBSkMsRUFJc0I7QUFDdEJELGVBQVMsRUFBRTtBQURXLEtBSnRCLFNBSnNFO0FBWTFFRSxVQUFNLEVBQUU7QUFDTkMscUJBQWUsRUFBRTtBQURYO0FBWmtFLEdBQUQsQ0FBL0M7QUFBQSxDQUFELENBQTNCO0FBaUJlLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFDL0IsTUFBTUMsT0FBTyxHQUFHZCxRQUFRLEVBQXhCO0FBQ0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFRLFlBQVEsRUFBQyxRQUFqQjtBQUEwQixXQUFPLEVBQUU7QUFBQ2Usa0JBQVksRUFBRUQsT0FBTyxDQUFDSDtBQUF2QixLQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVHLE9BQU8sQ0FBQ1QsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsa0JBQVQ7QUFBNEIsYUFBUyxFQUFFUyxPQUFPLENBQUNQLElBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsRUFZRSxNQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixDQURGLENBREYsQ0FERixDQURGO0FBc0JEOztHQXhCdUJNLE07VUFDTmIsUTs7O0tBRE1hLE07QUEwQnhCLElBQU1HLGdCQUFnQixHQUFHZixvRUFBVSxDQUFDO0FBQUE7O0FBQUEsU0FBZUcsc0VBQVksQ0FBQztBQUM5RGEsWUFBUSxFQUFFO0FBQ1JDLGtCQUFZLEVBQUU7QUFETjtBQURvRCxHQUFELENBQTNCO0FBQUEsQ0FBRCxDQUFuQzs7QUFLQSxTQUFTQyxnQkFBVCxHQUE0QjtBQUFBOztBQUMxQixNQUFNTCxPQUFPLEdBQUdFLGdCQUFnQixFQUFoQztBQUNBLFNBQ0UsTUFBQyxxREFBRDtBQUFLLFdBQU8sRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQ0UsV0FBTyxFQUFDLE1BRFY7QUFFRSxTQUFLLEVBQUMsU0FGUjtBQUdFLGFBQVMsRUFBRUYsT0FBTyxDQUFDRyxRQUhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBUUUsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFTRSxNQUFDLHdEQUFEO0FBQ0UsV0FBTyxFQUFDLFdBRFY7QUFFRSxTQUFLLEVBQUMsU0FGUjtBQUdFLGFBQVMsRUFBRUgsT0FBTyxDQUFDRyxRQUhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRGLENBREY7QUFtQkQ7O0lBckJRRSxnQjtVQUNTSCxnQjs7O01BRFRHLGdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNiMDUxMTFiNTA2MGM2NDdmMGU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBvZ3JhcGh5LCBjcmVhdGVTdHlsZXMsIFRoZW1lLCBtYWtlU3R5bGVzLCBCb3gsIEdyaWQsIEFwcEJhciwgVG9vbGJhciwgQnV0dG9uLCBTdmdJY29uLCBJY29uLCBJY29uQnV0dG9uLCBDb250YWluZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIi4uL3dpZGdldHMvTGlua1wiO1xyXG5cclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKCh7c3BhY2luZywgYnJlYWtwb2ludHN9OiBUaGVtZSkgPT4gY3JlYXRlU3R5bGVzKHtcclxuICB0aXRsZToge1xyXG4gICAgZmxleEdyb3c6IDFcclxuICB9LFxyXG4gIGxvZ286IHtcclxuICAgIFticmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBtYXhIZWlnaHQ6IDQ4XHJcbiAgICB9LFxyXG4gICAgW2JyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBtYXhIZWlnaHQ6IDU0XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYXBwYmFyOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXI+XHJcbiAgICAgIDxBcHBCYXIgcG9zaXRpb249J3N0YXRpYycgY2xhc3Nlcz17e2NvbG9yUHJpbWFyeTogY2xhc3Nlcy5hcHBiYXJ9fT5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvaW1hZ2VzL2xvZ28uc3ZnJyBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30gLz5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPEljb25CdXR0b24gZWRnZT1cInN0YXJ0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVCdXR0b259IGNvbG9yPVwiaW5oZXJpdFwiIGFyaWEtbGFiZWw9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNicgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgICBOZXdzXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT4gKi99XHJcbiAgICAgICAgICAgIDxVbmxvZ2luRnVuY3Rpb25zIC8+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCB1c2VGdW5jdGlvblN0eWxlID0gbWFrZVN0eWxlcygoe306IFRoZW1lKSA9PiBjcmVhdGVTdHlsZXMoe1xyXG4gIGxvZ2luQnRuOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6IDY0XHJcbiAgfVxyXG59KSk7XHJcbmZ1bmN0aW9uIFVubG9naW5GdW5jdGlvbnMoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZUZ1bmN0aW9uU3R5bGUoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBkaXNwbGF5PSdpbmxpbmUtZmxleCc+XHJcbiAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgdmFyaWFudD0ndGV4dCcgXHJcbiAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ2luQnRufVxyXG4gICAgICA+XHJcbiAgICAgICAg6aaW6aCBXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8Qm94PjwvQm94PlxyXG4gICAgICA8QnV0dG9uIFxyXG4gICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCcgXHJcbiAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ2luQnRufVxyXG4gICAgICA+XHJcbiAgICAgICAg55m75YWlXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==