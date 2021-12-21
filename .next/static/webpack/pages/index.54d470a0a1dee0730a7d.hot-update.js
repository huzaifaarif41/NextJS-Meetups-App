webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\Huzaifa\\next-js-proj_newmeetupApp\\pages\\index.js";
//our-domain.com/


 //metadata used when we deploy our Applications. In nextJs, there is special Head component so where we add data, description etc.

function HomePage(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "React Meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), ";"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
} // export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// } //it is an alternative to getStaticProps() and the difference to getServerSideProps() that this function will now not run during build process but instead always on the server after deployment
//its guaranteed to run for every request but it could be disadvantage because that means that you need to wait for your page to be generated on every incoming request.. You dont have access on Request and Response in getStaticProps(). If you have really a data that changes multiple times every second then therefore revalidate wont helpyou, so getServerSideProps() might be useful


_c = HomePage;
//if you need to add data fetching to a page component, you can do by exporting a special function from inside your page component file and its only work in page component files and not on regular components, but only work in component files inside the pages folder
// //it has to be called getStaticProps and NextJs first of all, call getStaticProps function before its called the component function and getStaticProps have a job to prepare props for this page and this props could contain the data this page needs and its allowed to be asynchronous which means it waits until your data is loaded
// //In getStaticProps(),you can execute any code, that would normally only run on a server becuase any code here will never end on a client side and never execute on client side
// //in page component function, recieves a props object and the object will be the object you set as a props here
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaGVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGlCQUFpQixtQkFBTyxDQUFDLHFGQUE2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXREO0FBQ0E7QUFHQTtDQUdBOztBQUNBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3ZCLHNCQUNFLHFFQUFDLDhDQUFEO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFLHFFQUFDLHNFQUFEO0FBQVksYUFBTyxFQUFFQSxLQUFLLENBQUNDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFELEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7S0FyQlNGLFE7QUE4Q1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRWVBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU0ZDQ3MGEwYTFkZWUwNzMwYTdkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZCcpXG4iLCIvL291ci1kb21haW4uY29tL1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xyXG5cclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3QnO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vbWV0YWRhdGEgdXNlZCB3aGVuIHdlIGRlcGxveSBvdXIgQXBwbGljYXRpb25zLiBJbiBuZXh0SnMsIHRoZXJlIGlzIHNwZWNpYWwgSGVhZCBjb21wb25lbnQgc28gd2hlcmUgd2UgYWRkIGRhdGEsIGRlc2NyaXB0aW9uIGV0Yy5cclxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PiBcclxuICAgICAgPEhlYWQ+ICAgXHJcbiAgICAgICAgPHRpdGxlPlJlYWN0IE1lZXR1cHM8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+O1xyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuLy8gICBjb25zdCByZXEgPSBjb250ZXh0LnJlcTtcclxuLy8gICBjb25zdCByZXMgPSBjb250ZXh0LnJlcztcclxuLy9mZXRjaCBkYXRhIGZyb20gYW4gQVBJXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7XHJcbi8vICAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFMsXHJcbi8vICAgICB9LFxyXG4vLyAgIH07XHJcbi8vIH0gLy9pdCBpcyBhbiBhbHRlcm5hdGl2ZSB0byBnZXRTdGF0aWNQcm9wcygpIGFuZCB0aGUgZGlmZmVyZW5jZSB0byBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB0aGF0IHRoaXMgZnVuY3Rpb24gd2lsbCBub3cgbm90IHJ1biBkdXJpbmcgYnVpbGQgcHJvY2VzcyBidXQgaW5zdGVhZCBhbHdheXMgb24gdGhlIHNlcnZlciBhZnRlciBkZXBsb3ltZW50XHJcbi8vaXRzIGd1YXJhbnRlZWQgdG8gcnVuIGZvciBldmVyeSByZXF1ZXN0IGJ1dCBpdCBjb3VsZCBiZSBkaXNhZHZhbnRhZ2UgYmVjYXVzZSB0aGF0IG1lYW5zIHRoYXQgeW91IG5lZWQgdG8gd2FpdCBmb3IgeW91ciBwYWdlIHRvIGJlIGdlbmVyYXRlZCBvbiBldmVyeSBpbmNvbWluZyByZXF1ZXN0Li4gWW91IGRvbnQgaGF2ZSBhY2Nlc3Mgb24gUmVxdWVzdCBhbmQgUmVzcG9uc2UgaW4gZ2V0U3RhdGljUHJvcHMoKS4gSWYgeW91IGhhdmUgcmVhbGx5IGEgZGF0YSB0aGF0IGNoYW5nZXMgbXVsdGlwbGUgdGltZXMgZXZlcnkgc2Vjb25kIHRoZW4gdGhlcmVmb3JlIHJldmFsaWRhdGUgd29udCBoZWxweW91LCBzbyBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSBtaWdodCBiZSB1c2VmdWxcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIC8vICAgLy9mZXRjaCBkYXRhIGZyb20gYW4gQVBJXHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgICdtb25nb2RiK3NydjovL0h1emFpZmE6aHV6YWlmYTEyM0BjbHVzdGVyMC5idTZhei5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eScgLy93ZSBuZWVkIHRvIGFkZCB1c2VybmFtZSBhbmQgcGFzc3dyZCBidXQgdGhpcyBjb2RlIGlzIG5vdCBhY2Nlc3NpYmxlIGZvciB0aGUgY2xpZW50cyBhbmQgdGhpcyB3aWxsIGdpdmUgdXMgY29ubmVjdGVkIGNsaWVudCBldmVudHVhbGx5XHJcbiAgKTtcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpOyAvL2RiIG1ldGhvZCB3aGljaCB3ZSBnZXQgaG9sZCBvZiB0aGF0IGRhdGFiYXNlIHRvIHdoaWNoIHdlIGFyZSBjb25uZWN0aW5nIGhlcmVcclxuXHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7IC8vYW5kIHRoZW4gd2l0aCBkYXRhYmFzZSwgd2UgY2FuIGdldCBhY2Nlc3MgdG8gb3VyIG1lZXR1cHNDb2xsZWN0aW9uLiBDb2xsZWN0aW9uIGlzIGEgbWV0aG9kIGhhdmluZyBuYW1lIG9mIHlvdXIgY2hvaWNlLlxyXG5cclxuICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTsgLy9maW5kIG1ldGhvZCB3aWxsIGZpbmQgZGVmYXVsdCBhbGwgdGhlIGRvY3VtZW50cyBpbiB0aGF0IGNvbGxlY3Rpb24gYW5kIHRoZW4gdWx0aW1hdGVseSB3ZSBnZXQgb3VyIG1lZXR1cHMgaGVyZSBhbmQgdG9BcnJheSgpIG1ldGhvZCBpcyB0byBiZSBwcmVjaXNlIHRvIGdldCBhbiBhcnJheSBvZiBjb2xsZWN0aW9uc1xyXG4gIGNsaWVudC5jbG9zZSgpOyAvL2hlcmUgd2UgY2xvc2UgdGhlIGNvbm5lY3Rpb24gb25jZSB3ZSBhcmUgZG9uZSBmcm9tIGZldGNoaW5nIGRhdGFcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1lZXR1cHM6IG1lZXR1cHMubWFwKChtZWV0dXApID0+ICh7XHJcbiAgICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcclxuICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICBpbWFnZTogbWVldHVwLmltYWdlLFxyXG4gICAgICAgIGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgIH0pKSwgLy9oZXJlIGFyZSB0aGUgbWVldHVwcyB3aGljaCB3ZSBjYW4gZmV0Y2ggZnJvbSBtb25nb2RiXHJcbiAgICB9LCAvL21lZXR1cHMgaXMgYSBrZXkgaW4gcmV0dXJuIG9iamVjdCBhbmQgc28gdXNlIHRoYXQgaWRlbnRpZmllciBpbiBNZWV0dXBMaXN0IGFzIGEgcHJvcHMubWVldHVwcyBhbmQgdGhlbiBob3cgd2UgY2FuIG1vdmUgdGhlIGRhdGEgZmV0Y2hpbmcgYXdheSBmcm9tIHRoZSBjbGllbnQgdG8gc2VydmVyIHNpZGVcclxuICAgIHJldmFsaWRhdGU6IDEsXHJcbiAgfTsgLy8gdGhpcyBwcm9wZXJ0eSBpbiBnZXRTdGF0aWNQcm9wcygpIGFuZCB3aGVuIHdlIGFkZCB0aGlzIHByb3BlcnR5IHRvIHRoZSByZXR1cm4gb2JqZWN0LCB3ZSB1bmxvY2sgYSBmZWF0dXJlIGNhbGxlZCBpbmNyZW1lbnRhbCBTdGF0aWMgR2VuZXJhdGlvbi4gUmV2YWxpZGF0ZSBuZWVkcyBhIG51bWJlciBhbmQgdGhpcyBudW1iZXIgaXMgdGhlIG51bWJlciBvZiBzZWNvbmRzLCBORVhUSlMgd2lsbCB3YWl0IHVudGlsIGl0IHJlZ2VuZXJhdGVzIHRoaXMgcGFnZSBmb3IgaW5jb21pbmcgcmVxdWVzdC4gSXQgbWVhbnMgdGhpcyBwYWdlIGlzIG5vdCBqdXN0IGJlIGdlbmVyYXRlZCBkdXJpbmcgYnVpbGQgcHJvY2VzcyBidXQgYWxzbyBiZSBnZW5lcmF0ZWQgZXZlcnkgY291cGxlIG9mIHNlY29uZHMgb24gdGhlIHNlcnZlciwgaWYgdGhlcmUgYXJlIHJlcXVlc3RzIGZvciB0aGlzIHBhZ2UuIFNvLCBpZiBkYXRhIGNhbiBjaGFuZ2UgaW4gZXZlcnkgMSBob3VyLCBzbyBpdCBjaGFuZ2VkIHRvIDM2MDAgYW5kIGlmIGRhdGEgY2hhbmdlcyBpbiBldmVyeSBvbmUgc2Vjb25kIHNvIGl0IHNob3VsZCBiZSBpbml0aWFsaXplZCB0byAxLiBJdCBlbnN1cmVzIHRoYXQgdGhpcyBwYWdlIGNvdWxkIGJlIHVwZGF0ZWQgYWZ0ZXIgZGVwbG95bWVudFxyXG59XHJcbi8vaWYgeW91IG5lZWQgdG8gYWRkIGRhdGEgZmV0Y2hpbmcgdG8gYSBwYWdlIGNvbXBvbmVudCwgeW91IGNhbiBkbyBieSBleHBvcnRpbmcgYSBzcGVjaWFsIGZ1bmN0aW9uIGZyb20gaW5zaWRlIHlvdXIgcGFnZSBjb21wb25lbnQgZmlsZSBhbmQgaXRzIG9ubHkgd29yayBpbiBwYWdlIGNvbXBvbmVudCBmaWxlcyBhbmQgbm90IG9uIHJlZ3VsYXIgY29tcG9uZW50cywgYnV0IG9ubHkgd29yayBpbiBjb21wb25lbnQgZmlsZXMgaW5zaWRlIHRoZSBwYWdlcyBmb2xkZXJcclxuLy8gLy9pdCBoYXMgdG8gYmUgY2FsbGVkIGdldFN0YXRpY1Byb3BzIGFuZCBOZXh0SnMgZmlyc3Qgb2YgYWxsLCBjYWxsIGdldFN0YXRpY1Byb3BzIGZ1bmN0aW9uIGJlZm9yZSBpdHMgY2FsbGVkIHRoZSBjb21wb25lbnQgZnVuY3Rpb24gYW5kIGdldFN0YXRpY1Byb3BzIGhhdmUgYSBqb2IgdG8gcHJlcGFyZSBwcm9wcyBmb3IgdGhpcyBwYWdlIGFuZCB0aGlzIHByb3BzIGNvdWxkIGNvbnRhaW4gdGhlIGRhdGEgdGhpcyBwYWdlIG5lZWRzIGFuZCBpdHMgYWxsb3dlZCB0byBiZSBhc3luY2hyb25vdXMgd2hpY2ggbWVhbnMgaXQgd2FpdHMgdW50aWwgeW91ciBkYXRhIGlzIGxvYWRlZFxyXG4vLyAvL0luIGdldFN0YXRpY1Byb3BzKCkseW91IGNhbiBleGVjdXRlIGFueSBjb2RlLCB0aGF0IHdvdWxkIG5vcm1hbGx5IG9ubHkgcnVuIG9uIGEgc2VydmVyIGJlY3Vhc2UgYW55IGNvZGUgaGVyZSB3aWxsIG5ldmVyIGVuZCBvbiBhIGNsaWVudCBzaWRlIGFuZCBuZXZlciBleGVjdXRlIG9uIGNsaWVudCBzaWRlXHJcbi8vIC8vaW4gcGFnZSBjb21wb25lbnQgZnVuY3Rpb24sIHJlY2lldmVzIGEgcHJvcHMgb2JqZWN0IGFuZCB0aGUgb2JqZWN0IHdpbGwgYmUgdGhlIG9iamVjdCB5b3Ugc2V0IGFzIGEgcHJvcHMgaGVyZVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=