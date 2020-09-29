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
    flex: true,
    flexDirection: "column",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvSGVhZGVyLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZSIsIm1ha2VTdHlsZXMiLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJjcmVhdGVTdHlsZXMiLCJ0aXRsZSIsImZsZXhHcm93IiwibG9nbyIsImRvd24iLCJtYXhIZWlnaHQiLCJ1cCIsImFwcGJhciIsImJhY2tncm91bmRDb2xvciIsIkhlYWRlciIsImNsYXNzZXMiLCJjb2xvclByaW1hcnkiLCJ1c2VGdW5jdGlvblN0eWxlIiwibG9naW5CdG4iLCJib3JkZXJSYWRpdXMiLCJVbmxvZ2luRnVuY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxvRUFBVSxDQUFDO0FBQUE7O0FBQUEsTUFBRUMsT0FBRixRQUFFQSxPQUFGO0FBQUEsTUFBV0MsV0FBWCxRQUFXQSxXQUFYO0FBQUEsU0FBbUNDLHNFQUFZLENBQUM7QUFDMUVDLFNBQUssRUFBRTtBQUNMQyxjQUFRLEVBQUU7QUFETCxLQURtRTtBQUkxRUMsUUFBSSxnSEFDREosV0FBVyxDQUFDSyxJQUFaLENBQWlCLElBQWpCLENBREMsRUFDd0I7QUFDeEJDLGVBQVMsRUFBRTtBQURhLEtBRHhCLG9HQUlETixXQUFXLENBQUNPLEVBQVosQ0FBZSxJQUFmLENBSkMsRUFJc0I7QUFDdEJELGVBQVMsRUFBRTtBQURXLEtBSnRCLFNBSnNFO0FBWTFFRSxVQUFNLEVBQUU7QUFDTkMscUJBQWUsRUFBRTtBQURYO0FBWmtFLEdBQUQsQ0FBL0M7QUFBQSxDQUFELENBQTNCO0FBaUJlLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFDL0IsTUFBTUMsT0FBTyxHQUFHZCxRQUFRLEVBQXhCO0FBQ0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFRLFlBQVEsRUFBQyxRQUFqQjtBQUEwQixXQUFPLEVBQUU7QUFBQ2Usa0JBQVksRUFBRUQsT0FBTyxDQUFDSDtBQUF2QixLQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVHLE9BQU8sQ0FBQ1QsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsa0JBQVQ7QUFBNEIsYUFBUyxFQUFFUyxPQUFPLENBQUNQLElBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsRUFZRSxNQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixDQURGLENBREYsQ0FERixDQURGO0FBc0JEOztHQXhCdUJNLE07VUFDTmIsUTs7O0tBRE1hLE07QUEwQnhCLElBQU1HLGdCQUFnQixHQUFHZixvRUFBVSxDQUFDO0FBQUE7O0FBQUEsU0FBZUcsc0VBQVksQ0FBQztBQUM5RGEsWUFBUSxFQUFFO0FBQ1JDLGtCQUFZLEVBQUU7QUFETjtBQURvRCxHQUFELENBQTNCO0FBQUEsQ0FBRCxDQUFuQzs7QUFLQSxTQUFTQyxnQkFBVCxHQUE0QjtBQUFBOztBQUMxQixNQUFNTCxPQUFPLEdBQUdFLGdCQUFnQixFQUFoQztBQUNBLFNBQ0UsTUFBQyxxREFBRDtBQUFLLFFBQUksTUFBVDtBQUFVLGlCQUFhLEVBQUMsUUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFDRSxXQUFPLEVBQUMsTUFEVjtBQUVFLFNBQUssRUFBQyxTQUZSO0FBR0UsYUFBUyxFQUFFRixPQUFPLENBQUNHLFFBSHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFRRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNFLE1BQUMsd0RBQUQ7QUFDRSxXQUFPLEVBQUMsV0FEVjtBQUVFLFNBQUssRUFBQyxTQUZSO0FBR0UsYUFBUyxFQUFFSCxPQUFPLENBQUNHLFFBSHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEYsQ0FERjtBQW1CRDs7SUFyQlFFLGdCO1VBQ1NILGdCOzs7TUFEVEcsZ0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmZiMjI3OWZmZDlkNTI0NWVmN2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cG9ncmFwaHksIGNyZWF0ZVN0eWxlcywgVGhlbWUsIG1ha2VTdHlsZXMsIEJveCwgR3JpZCwgQXBwQmFyLCBUb29sYmFyLCBCdXR0b24sIFN2Z0ljb24sIEljb24sIEljb25CdXR0b24sIENvbnRhaW5lciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiLi4vd2lkZ2V0cy9MaW5rXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXMoKHtzcGFjaW5nLCBicmVha3BvaW50c306IFRoZW1lKSA9PiBjcmVhdGVTdHlsZXMoe1xyXG4gIHRpdGxlOiB7XHJcbiAgICBmbGV4R3JvdzogMVxyXG4gIH0sXHJcbiAgbG9nbzoge1xyXG4gICAgW2JyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIG1heEhlaWdodDogNDhcclxuICAgIH0sXHJcbiAgICBbYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgIG1heEhlaWdodDogNTRcclxuICAgIH0sXHJcbiAgfSxcclxuICBhcHBiYXI6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlcj5cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj0nc3RhdGljJyBjbGFzc2VzPXt7Y29sb3JQcmltYXJ5OiBjbGFzc2VzLmFwcGJhcn19PlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9pbWFnZXMvbG9nby5zdmcnIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfSAvPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8SWNvbkJ1dHRvbiBlZGdlPVwic3RhcnRcIiBjbGFzc05hbWU9e2NsYXNzZXMubWVudUJ1dHRvbn0gY29sb3I9XCJpbmhlcml0XCIgYXJpYS1sYWJlbD1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPiAqL31cclxuICAgICAgICAgICAgey8qIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2JyBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgIE5ld3NcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PiAqL31cclxuICAgICAgICAgICAgPFVubG9naW5GdW5jdGlvbnMgLz5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICA8L2hlYWRlcj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IHVzZUZ1bmN0aW9uU3R5bGUgPSBtYWtlU3R5bGVzKCh7fTogVGhlbWUpID0+IGNyZWF0ZVN0eWxlcyh7XHJcbiAgbG9naW5CdG46IHtcclxuICAgIGJvcmRlclJhZGl1czogNjRcclxuICB9XHJcbn0pKTtcclxuZnVuY3Rpb24gVW5sb2dpbkZ1bmN0aW9ucygpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlRnVuY3Rpb25TdHlsZSgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGZsZXggZmxleERpcmVjdGlvbj0nY29sdW1uJz5cclxuICAgICAgPEJ1dHRvbiBcclxuICAgICAgICB2YXJpYW50PSd0ZXh0JyBcclxuICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubG9naW5CdG59XHJcbiAgICAgID5cclxuICAgICAgICDpppbpoIFcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDxCb3g+PC9Cb3g+XHJcbiAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJyBcclxuICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubG9naW5CdG59XHJcbiAgICAgID5cclxuICAgICAgICDnmbvlhaVcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L0JveD5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9