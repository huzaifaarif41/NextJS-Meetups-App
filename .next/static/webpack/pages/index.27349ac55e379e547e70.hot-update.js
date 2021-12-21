webpackHotUpdate_N_E("pages/index",{

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
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "React Meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Browse a huge list of highly active Meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtDQUdBOztBQUNBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3ZCLHNCQUNFLHFFQUFDLDhDQUFEO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0UscUVBQUMsc0VBQUQ7QUFBWSxhQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0QsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztLQXRCU0YsUTtBQStDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFZUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjczNDlhYzU1ZTM3OWU1NDdlNzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vb3VyLWRvbWFpbi5jb20vXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XHJcblxyXG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdCc7XHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy9tZXRhZGF0YSB1c2VkIHdoZW4gd2UgZGVwbG95IG91ciBBcHBsaWNhdGlvbnMuIEluIG5leHRKcywgdGhlcmUgaXMgc3BlY2lhbCBIZWFkIGNvbXBvbmVudCBzbyB3aGVyZSB3ZSBhZGQgZGF0YSwgZGVzY3JpcHRpb24gZXRjLlxyXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+IFxyXG4gICAgICA8SGVhZD4gICBcclxuICAgICAgICA8dGl0bGU+UmVhY3QgTWVldHVwczwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J0Jyb3dzZSBhIGh1Z2UgbGlzdCBvZiBoaWdobHkgYWN0aXZlIE1lZXR1cHMnIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30gLz47XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4vLyAgIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxO1xyXG4vLyAgIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzO1xyXG4vL2ZldGNoIGRhdGEgZnJvbSBhbiBBUElcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQUyxcclxuLy8gICAgIH0sXHJcbi8vICAgfTtcclxuLy8gfSAvL2l0IGlzIGFuIGFsdGVybmF0aXZlIHRvIGdldFN0YXRpY1Byb3BzKCkgYW5kIHRoZSBkaWZmZXJlbmNlIHRvIGdldFNlcnZlclNpZGVQcm9wcygpIHRoYXQgdGhpcyBmdW5jdGlvbiB3aWxsIG5vdyBub3QgcnVuIGR1cmluZyBidWlsZCBwcm9jZXNzIGJ1dCBpbnN0ZWFkIGFsd2F5cyBvbiB0aGUgc2VydmVyIGFmdGVyIGRlcGxveW1lbnRcclxuLy9pdHMgZ3VhcmFudGVlZCB0byBydW4gZm9yIGV2ZXJ5IHJlcXVlc3QgYnV0IGl0IGNvdWxkIGJlIGRpc2FkdmFudGFnZSBiZWNhdXNlIHRoYXQgbWVhbnMgdGhhdCB5b3UgbmVlZCB0byB3YWl0IGZvciB5b3VyIHBhZ2UgdG8gYmUgZ2VuZXJhdGVkIG9uIGV2ZXJ5IGluY29taW5nIHJlcXVlc3QuLiBZb3UgZG9udCBoYXZlIGFjY2VzcyBvbiBSZXF1ZXN0IGFuZCBSZXNwb25zZSBpbiBnZXRTdGF0aWNQcm9wcygpLiBJZiB5b3UgaGF2ZSByZWFsbHkgYSBkYXRhIHRoYXQgY2hhbmdlcyBtdWx0aXBsZSB0aW1lcyBldmVyeSBzZWNvbmQgdGhlbiB0aGVyZWZvcmUgcmV2YWxpZGF0ZSB3b250IGhlbHB5b3UsIHNvIGdldFNlcnZlclNpZGVQcm9wcygpIG1pZ2h0IGJlIHVzZWZ1bFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgLy8gICAvL2ZldGNoIGRhdGEgZnJvbSBhbiBBUElcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgJ21vbmdvZGIrc3J2Oi8vSHV6YWlmYTpodXphaWZhMTIzQGNsdXN0ZXIwLmJ1NmF6Lm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JyAvL3dlIG5lZWQgdG8gYWRkIHVzZXJuYW1lIGFuZCBwYXNzd3JkIGJ1dCB0aGlzIGNvZGUgaXMgbm90IGFjY2Vzc2libGUgZm9yIHRoZSBjbGllbnRzIGFuZCB0aGlzIHdpbGwgZ2l2ZSB1cyBjb25uZWN0ZWQgY2xpZW50IGV2ZW50dWFsbHlcclxuICApO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7IC8vZGIgbWV0aG9kIHdoaWNoIHdlIGdldCBob2xkIG9mIHRoYXQgZGF0YWJhc2UgdG8gd2hpY2ggd2UgYXJlIGNvbm5lY3RpbmcgaGVyZVxyXG5cclxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTsgLy9hbmQgdGhlbiB3aXRoIGRhdGFiYXNlLCB3ZSBjYW4gZ2V0IGFjY2VzcyB0byBvdXIgbWVldHVwc0NvbGxlY3Rpb24uIENvbGxlY3Rpb24gaXMgYSBtZXRob2QgaGF2aW5nIG5hbWUgb2YgeW91ciBjaG9pY2UuXHJcblxyXG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpOyAvL2ZpbmQgbWV0aG9kIHdpbGwgZmluZCBkZWZhdWx0IGFsbCB0aGUgZG9jdW1lbnRzIGluIHRoYXQgY29sbGVjdGlvbiBhbmQgdGhlbiB1bHRpbWF0ZWx5IHdlIGdldCBvdXIgbWVldHVwcyBoZXJlIGFuZCB0b0FycmF5KCkgbWV0aG9kIGlzIHRvIGJlIHByZWNpc2UgdG8gZ2V0IGFuIGFycmF5IG9mIGNvbGxlY3Rpb25zXHJcbiAgY2xpZW50LmNsb3NlKCk7IC8vaGVyZSB3ZSBjbG9zZSB0aGUgY29ubmVjdGlvbiBvbmNlIHdlIGFyZSBkb25lIGZyb20gZmV0Y2hpbmcgZGF0YVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbWVldHVwczogbWVldHVwcy5tYXAoKG1lZXR1cCkgPT4gKHtcclxuICAgICAgICB0aXRsZTogbWVldHVwLnRpdGxlLFxyXG4gICAgICAgIGFkZHJlc3M6IG1lZXR1cC5hZGRyZXNzLFxyXG4gICAgICAgIGltYWdlOiBtZWV0dXAuaW1hZ2UsXHJcbiAgICAgICAgaWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSxcclxuICAgICAgfSkpLCAvL2hlcmUgYXJlIHRoZSBtZWV0dXBzIHdoaWNoIHdlIGNhbiBmZXRjaCBmcm9tIG1vbmdvZGJcclxuICAgIH0sIC8vbWVldHVwcyBpcyBhIGtleSBpbiByZXR1cm4gb2JqZWN0IGFuZCBzbyB1c2UgdGhhdCBpZGVudGlmaWVyIGluIE1lZXR1cExpc3QgYXMgYSBwcm9wcy5tZWV0dXBzIGFuZCB0aGVuIGhvdyB3ZSBjYW4gbW92ZSB0aGUgZGF0YSBmZXRjaGluZyBhd2F5IGZyb20gdGhlIGNsaWVudCB0byBzZXJ2ZXIgc2lkZVxyXG4gICAgcmV2YWxpZGF0ZTogMSxcclxuICB9OyAvLyB0aGlzIHByb3BlcnR5IGluIGdldFN0YXRpY1Byb3BzKCkgYW5kIHdoZW4gd2UgYWRkIHRoaXMgcHJvcGVydHkgdG8gdGhlIHJldHVybiBvYmplY3QsIHdlIHVubG9jayBhIGZlYXR1cmUgY2FsbGVkIGluY3JlbWVudGFsIFN0YXRpYyBHZW5lcmF0aW9uLiBSZXZhbGlkYXRlIG5lZWRzIGEgbnVtYmVyIGFuZCB0aGlzIG51bWJlciBpcyB0aGUgbnVtYmVyIG9mIHNlY29uZHMsIE5FWFRKUyB3aWxsIHdhaXQgdW50aWwgaXQgcmVnZW5lcmF0ZXMgdGhpcyBwYWdlIGZvciBpbmNvbWluZyByZXF1ZXN0LiBJdCBtZWFucyB0aGlzIHBhZ2UgaXMgbm90IGp1c3QgYmUgZ2VuZXJhdGVkIGR1cmluZyBidWlsZCBwcm9jZXNzIGJ1dCBhbHNvIGJlIGdlbmVyYXRlZCBldmVyeSBjb3VwbGUgb2Ygc2Vjb25kcyBvbiB0aGUgc2VydmVyLCBpZiB0aGVyZSBhcmUgcmVxdWVzdHMgZm9yIHRoaXMgcGFnZS4gU28sIGlmIGRhdGEgY2FuIGNoYW5nZSBpbiBldmVyeSAxIGhvdXIsIHNvIGl0IGNoYW5nZWQgdG8gMzYwMCBhbmQgaWYgZGF0YSBjaGFuZ2VzIGluIGV2ZXJ5IG9uZSBzZWNvbmQgc28gaXQgc2hvdWxkIGJlIGluaXRpYWxpemVkIHRvIDEuIEl0IGVuc3VyZXMgdGhhdCB0aGlzIHBhZ2UgY291bGQgYmUgdXBkYXRlZCBhZnRlciBkZXBsb3ltZW50XHJcbn1cclxuLy9pZiB5b3UgbmVlZCB0byBhZGQgZGF0YSBmZXRjaGluZyB0byBhIHBhZ2UgY29tcG9uZW50LCB5b3UgY2FuIGRvIGJ5IGV4cG9ydGluZyBhIHNwZWNpYWwgZnVuY3Rpb24gZnJvbSBpbnNpZGUgeW91ciBwYWdlIGNvbXBvbmVudCBmaWxlIGFuZCBpdHMgb25seSB3b3JrIGluIHBhZ2UgY29tcG9uZW50IGZpbGVzIGFuZCBub3Qgb24gcmVndWxhciBjb21wb25lbnRzLCBidXQgb25seSB3b3JrIGluIGNvbXBvbmVudCBmaWxlcyBpbnNpZGUgdGhlIHBhZ2VzIGZvbGRlclxyXG4vLyAvL2l0IGhhcyB0byBiZSBjYWxsZWQgZ2V0U3RhdGljUHJvcHMgYW5kIE5leHRKcyBmaXJzdCBvZiBhbGwsIGNhbGwgZ2V0U3RhdGljUHJvcHMgZnVuY3Rpb24gYmVmb3JlIGl0cyBjYWxsZWQgdGhlIGNvbXBvbmVudCBmdW5jdGlvbiBhbmQgZ2V0U3RhdGljUHJvcHMgaGF2ZSBhIGpvYiB0byBwcmVwYXJlIHByb3BzIGZvciB0aGlzIHBhZ2UgYW5kIHRoaXMgcHJvcHMgY291bGQgY29udGFpbiB0aGUgZGF0YSB0aGlzIHBhZ2UgbmVlZHMgYW5kIGl0cyBhbGxvd2VkIHRvIGJlIGFzeW5jaHJvbm91cyB3aGljaCBtZWFucyBpdCB3YWl0cyB1bnRpbCB5b3VyIGRhdGEgaXMgbG9hZGVkXHJcbi8vIC8vSW4gZ2V0U3RhdGljUHJvcHMoKSx5b3UgY2FuIGV4ZWN1dGUgYW55IGNvZGUsIHRoYXQgd291bGQgbm9ybWFsbHkgb25seSBydW4gb24gYSBzZXJ2ZXIgYmVjdWFzZSBhbnkgY29kZSBoZXJlIHdpbGwgbmV2ZXIgZW5kIG9uIGEgY2xpZW50IHNpZGUgYW5kIG5ldmVyIGV4ZWN1dGUgb24gY2xpZW50IHNpZGVcclxuLy8gLy9pbiBwYWdlIGNvbXBvbmVudCBmdW5jdGlvbiwgcmVjaWV2ZXMgYSBwcm9wcyBvYmplY3QgYW5kIHRoZSBvYmplY3Qgd2lsbCBiZSB0aGUgb2JqZWN0IHlvdSBzZXQgYXMgYSBwcm9wcyBoZXJlXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==