module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[meetupId]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/MeetupDetail.js":
/*!********************************************!*\
  !*** ./components/meetups/MeetupDetail.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeetupDetail.module.css */ "./components/meetups/MeetupDetail.module.css");
/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\Huzaifa\\next-js-proj_newmeetupApp\\components\\meetups\\MeetupDetail.js";


function MeetupDetail(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.detail,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: props.image,
      alt: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
      children: props.address
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: props.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MeetupDetail);

/***/ }),

/***/ "./components/meetups/MeetupDetail.module.css":
/*!****************************************************!*\
  !*** ./components/meetups/MeetupDetail.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"detail": "MeetupDetail_detail__C_8IT"
};


/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ "./components/meetups/MeetupDetail.js");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\Huzaifa\\next-js-proj_newmeetupApp\\pages\\[meetupId]\\index.js";



function MeetupDetails(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: props.meetupData.image,
    title: props.meetupData.title,
    address: props.meetupData.address,
    description: props.meetupData.description
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this) //props.meetupData because we have that meetupData prop. So first we can drill into meetupData and then access to image,title,address and description
  ;
}

async function getStaticPaths() {
  //getStaticPaths() is another important function which you need in dynamic pages to tell NextJS for which dynamic parameter values this page should be pre-generated.
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_2__["MongoClient"].connect('mongodb+srv://Huzaifa:huzaifa123@cluster0.bu6az.mongodb.net/meetups?retryWrites=true&w=majority' //we need to add username and passwrd but this code is not accessible for the clients and this will give us connected client eventually
  );
  const db = client.db(); //db method which we get hold of that database to which we are connecting here

  const meetupsCollection = db.collection('meetups'); //and then with database, we can get access to our meetupsCollection. Collection is a method having name of your choice.

  const meetups = await meetupsCollection.find({}, {
    _id: 1
  }).toArray(); //find give access to all the meetups...... Here we are interested in only Ids, and therefore we can tweak find and pass empty object as first argument, here we also use filter criteria to filter certain values, but here we need to find all ids, so leave as an empty object that means give me all the objects and have no filter criteria,,and in the second argument,where we can define which fields should be extracted for every document. By default, all the fields should be return, but we can only interest is Id so here we can give the id. We only fetching the ids here, We fetch the document objects, but each will contain the ID,nothing else

  client.close();
  return {
    fallback: false,
    //fallback key tells NextJS whether your paths array contains all supported parameter values or just some of them. If we set fallback set to false, you say that your paths contains all supported meetupId values. That means if user enters anything that not supported here for example meetupId:m3 , so it shows an error of 404 . If we set a fallback to true, NextJs try to generate a page for this meetupId(m3) dynamically on the server for incoming request.It allows to pre-generate some of your pages for specific meetupId values and then pre-generate the missing ones dynamically when requests for them are coming in. Here, we initialized to false, because to indicate that I defined all supported paths here.
    paths: meetups.map(meetup => ({
      params: {
        meetupId: meetup._id.toString()
      }
    })) //Here we map all the meetups to access an every meetup item which is a document with an Id into an object because paths should an array of objects
    // [
    //   {
    //     params: {
    //       meetupId: 'm1',
    //     },
    //   },
    //   {
    //     params: {
    //       meetupId: 'm2',
    //     },
    //   },
    // ],

  };
} //its only used in getStaticPropsand used when the page is dynamic.

async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId; // getStaticProps() have a context which have a params key and meetupId is an identifier of having a page with that folder name

  const client = await mongodb__WEBPACK_IMPORTED_MODULE_2__["MongoClient"].connect('mongodb+srv://Huzaifa:huzaifa123@cluster0.bu6az.mongodb.net/meetups?retryWrites=true&w=majority' //we need to add username and passwrd but this code is not accessible for the clients and this will give us connected client eventually
  );
  const db = client.db(); //db method which we get hold of that database to which we are connecting here

  const meetupsCollection = db.collection('meetups'); //and then with database, we can get access to our meetupsCollection. Collection is a method having name of your choice.

  const selectedMeetup = await meetupsCollection.findOne({
    _id: Object(mongodb__WEBPACK_IMPORTED_MODULE_2__["ObjectId"])(meetupId)
  }); //findOne() finds one single document and pass an object where we define how to filter. and here we can add _id and pass meetupId so this finds a single meetup.....auto-generated Ids have strings by Default in mongo,,To ensure that we can correctly look for a specific id from database, we need to convert it from String to such an ObjectId thing,

  client.close(); //here we close the connection once we are done from fetching data

  return {
    props: {
      meetupData: {
        //here we could chnge id to String so again we return an object to convert an id to string otherwise we get an error.
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description
      }
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (MeetupDetails);

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTWVldHVwRGV0YWlsIiwicHJvcHMiLCJjbGFzc2VzIiwiZGV0YWlsIiwiaW1hZ2UiLCJ0aXRsZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIk1lZXR1cERldGFpbHMiLCJtZWV0dXBEYXRhIiwiZ2V0U3RhdGljUGF0aHMiLCJjbGllbnQiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cHNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsIm1lZXR1cHMiLCJmaW5kIiwiX2lkIiwidG9BcnJheSIsImNsb3NlIiwiZmFsbGJhY2siLCJwYXRocyIsIm1hcCIsIm1lZXR1cCIsInBhcmFtcyIsIm1lZXR1cElkIiwidG9TdHJpbmciLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJzZWxlY3RlZE1lZXR1cCIsImZpbmRPbmUiLCJPYmplY3RJZCIsImlkIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7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QWhDLENBSDRDLENBR0Y7O0FBRTFDLFFBQU1oQixNQUFNLEdBQUcsTUFBTUMsbURBQVcsQ0FBQ0MsT0FBWixDQUNuQixpR0FEbUIsQ0FDK0U7QUFEL0UsR0FBckI7QUFHQSxRQUFNQyxFQUFFLEdBQUdILE1BQU0sQ0FBQ0csRUFBUCxFQUFYLENBUjRDLENBUXBCOztBQUV4QixRQUFNQyxpQkFBaUIsR0FBR0QsRUFBRSxDQUFDRSxVQUFILENBQWMsU0FBZCxDQUExQixDQVY0QyxDQVVROztBQUVwRCxRQUFNZSxjQUFjLEdBQUcsTUFBTWhCLGlCQUFpQixDQUFDaUIsT0FBbEIsQ0FBMEI7QUFDckRiLE9BQUcsRUFBRWMsd0RBQVEsQ0FBQ04sUUFBRDtBQUR3QyxHQUExQixDQUE3QixDQVo0QyxDQWN4Qzs7QUFFSmhCLFFBQU0sQ0FBQ1UsS0FBUCxHQWhCNEMsQ0FnQjVCOztBQUVoQixTQUFPO0FBQ0xwQixTQUFLLEVBQUU7QUFDTFEsZ0JBQVUsRUFBRTtBQUFJO0FBQ2R5QixVQUFFLEVBQUVILGNBQWMsQ0FBQ1osR0FBZixDQUFtQlMsUUFBbkIsRUFETTtBQUVWdkIsYUFBSyxFQUFDMEIsY0FBYyxDQUFDMUIsS0FGWDtBQUdWQyxlQUFPLEVBQUN5QixjQUFjLENBQUN6QixPQUhiO0FBSVZGLGFBQUssRUFBQzJCLGNBQWMsQ0FBQzNCLEtBSlg7QUFLVkcsbUJBQVcsRUFBRXdCLGNBQWMsQ0FBQ3hCO0FBTGxCO0FBRFA7QUFERixHQUFQO0FBWUQ7QUFFY0MsNEVBQWYsRTs7Ozs7Ozs7Ozs7QUM5RUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvW21lZXR1cElkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBjbGFzc2VzIGZyb20gJy4vTWVldHVwRGV0YWlsLm1vZHVsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gTWVldHVwRGV0YWlsKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWx9PlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgc3JjPXtwcm9wcy5pbWFnZX1cclxuICAgICAgICBhbHQ9e3Byb3BzLnRpdGxlfVxyXG4gICAgICAvPlxyXG4gICAgICA8aDE+e3Byb3BzLnRpdGxlfTwvaDE+XHJcbiAgICAgIDxhZGRyZXNzPntwcm9wcy5hZGRyZXNzfTwvYWRkcmVzcz5cclxuICAgICAgPHA+e3Byb3BzLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWw7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGV0YWlsXCI6IFwiTWVldHVwRGV0YWlsX2RldGFpbF9fQ184SVRcIlxufTtcbiIsImltcG9ydCBNZWV0dXBEZXRhaWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbCc7XHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50LCBPYmplY3RJZCB9IGZyb20gJ21vbmdvZGInO1xyXG5cclxuZnVuY3Rpb24gTWVldHVwRGV0YWlscyhwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWVldHVwRGV0YWlsXHJcbiAgICAgIGltYWdlPXtwcm9wcy5tZWV0dXBEYXRhLmltYWdlfVxyXG4gICAgICB0aXRsZT17cHJvcHMubWVldHVwRGF0YS50aXRsZX1cclxuICAgICAgYWRkcmVzcz17cHJvcHMubWVldHVwRGF0YS5hZGRyZXNzfVxyXG4gICAgICBkZXNjcmlwdGlvbj17cHJvcHMubWVldHVwRGF0YS5kZXNjcmlwdGlvbn1cclxuICAgIC8+IC8vcHJvcHMubWVldHVwRGF0YSBiZWNhdXNlIHdlIGhhdmUgdGhhdCBtZWV0dXBEYXRhIHByb3AuIFNvIGZpcnN0IHdlIGNhbiBkcmlsbCBpbnRvIG1lZXR1cERhdGEgYW5kIHRoZW4gYWNjZXNzIHRvIGltYWdlLHRpdGxlLGFkZHJlc3MgYW5kIGRlc2NyaXB0aW9uXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIC8vZ2V0U3RhdGljUGF0aHMoKSBpcyBhbm90aGVyIGltcG9ydGFudCBmdW5jdGlvbiB3aGljaCB5b3UgbmVlZCBpbiBkeW5hbWljIHBhZ2VzIHRvIHRlbGwgTmV4dEpTIGZvciB3aGljaCBkeW5hbWljIHBhcmFtZXRlciB2YWx1ZXMgdGhpcyBwYWdlIHNob3VsZCBiZSBwcmUtZ2VuZXJhdGVkLlxyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICAnbW9uZ29kYitzcnY6Ly9IdXphaWZhOmh1emFpZmExMjNAY2x1c3RlcjAuYnU2YXoubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknIC8vd2UgbmVlZCB0byBhZGQgdXNlcm5hbWUgYW5kIHBhc3N3cmQgYnV0IHRoaXMgY29kZSBpcyBub3QgYWNjZXNzaWJsZSBmb3IgdGhlIGNsaWVudHMgYW5kIHRoaXMgd2lsbCBnaXZlIHVzIGNvbm5lY3RlZCBjbGllbnQgZXZlbnR1YWxseVxyXG4gICk7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTsgLy9kYiBtZXRob2Qgd2hpY2ggd2UgZ2V0IGhvbGQgb2YgdGhhdCBkYXRhYmFzZSB0byB3aGljaCB3ZSBhcmUgY29ubmVjdGluZyBoZXJlXHJcblxyXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpOyAvL2FuZCB0aGVuIHdpdGggZGF0YWJhc2UsIHdlIGNhbiBnZXQgYWNjZXNzIHRvIG91ciBtZWV0dXBzQ29sbGVjdGlvbi4gQ29sbGVjdGlvbiBpcyBhIG1ldGhvZCBoYXZpbmcgbmFtZSBvZiB5b3VyIGNob2ljZS5cclxuICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCh7fSwgeyBfaWQ6IDEgfSkudG9BcnJheSgpOyAvL2ZpbmQgZ2l2ZSBhY2Nlc3MgdG8gYWxsIHRoZSBtZWV0dXBzLi4uLi4uIEhlcmUgd2UgYXJlIGludGVyZXN0ZWQgaW4gb25seSBJZHMsIGFuZCB0aGVyZWZvcmUgd2UgY2FuIHR3ZWFrIGZpbmQgYW5kIHBhc3MgZW1wdHkgb2JqZWN0IGFzIGZpcnN0IGFyZ3VtZW50LCBoZXJlIHdlIGFsc28gdXNlIGZpbHRlciBjcml0ZXJpYSB0byBmaWx0ZXIgY2VydGFpbiB2YWx1ZXMsIGJ1dCBoZXJlIHdlIG5lZWQgdG8gZmluZCBhbGwgaWRzLCBzbyBsZWF2ZSBhcyBhbiBlbXB0eSBvYmplY3QgdGhhdCBtZWFucyBnaXZlIG1lIGFsbCB0aGUgb2JqZWN0cyBhbmQgaGF2ZSBubyBmaWx0ZXIgY3JpdGVyaWEsLGFuZCBpbiB0aGUgc2Vjb25kIGFyZ3VtZW50LHdoZXJlIHdlIGNhbiBkZWZpbmUgd2hpY2ggZmllbGRzIHNob3VsZCBiZSBleHRyYWN0ZWQgZm9yIGV2ZXJ5IGRvY3VtZW50LiBCeSBkZWZhdWx0LCBhbGwgdGhlIGZpZWxkcyBzaG91bGQgYmUgcmV0dXJuLCBidXQgd2UgY2FuIG9ubHkgaW50ZXJlc3QgaXMgSWQgc28gaGVyZSB3ZSBjYW4gZ2l2ZSB0aGUgaWQuIFdlIG9ubHkgZmV0Y2hpbmcgdGhlIGlkcyBoZXJlLCBXZSBmZXRjaCB0aGUgZG9jdW1lbnQgb2JqZWN0cywgYnV0IGVhY2ggd2lsbCBjb250YWluIHRoZSBJRCxub3RoaW5nIGVsc2VcclxuICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGZhbGxiYWNrOiBmYWxzZSwgLy9mYWxsYmFjayBrZXkgdGVsbHMgTmV4dEpTIHdoZXRoZXIgeW91ciBwYXRocyBhcnJheSBjb250YWlucyBhbGwgc3VwcG9ydGVkIHBhcmFtZXRlciB2YWx1ZXMgb3IganVzdCBzb21lIG9mIHRoZW0uIElmIHdlIHNldCBmYWxsYmFjayBzZXQgdG8gZmFsc2UsIHlvdSBzYXkgdGhhdCB5b3VyIHBhdGhzIGNvbnRhaW5zIGFsbCBzdXBwb3J0ZWQgbWVldHVwSWQgdmFsdWVzLiBUaGF0IG1lYW5zIGlmIHVzZXIgZW50ZXJzIGFueXRoaW5nIHRoYXQgbm90IHN1cHBvcnRlZCBoZXJlIGZvciBleGFtcGxlIG1lZXR1cElkOm0zICwgc28gaXQgc2hvd3MgYW4gZXJyb3Igb2YgNDA0IC4gSWYgd2Ugc2V0IGEgZmFsbGJhY2sgdG8gdHJ1ZSwgTmV4dEpzIHRyeSB0byBnZW5lcmF0ZSBhIHBhZ2UgZm9yIHRoaXMgbWVldHVwSWQobTMpIGR5bmFtaWNhbGx5IG9uIHRoZSBzZXJ2ZXIgZm9yIGluY29taW5nIHJlcXVlc3QuSXQgYWxsb3dzIHRvIHByZS1nZW5lcmF0ZSBzb21lIG9mIHlvdXIgcGFnZXMgZm9yIHNwZWNpZmljIG1lZXR1cElkIHZhbHVlcyBhbmQgdGhlbiBwcmUtZ2VuZXJhdGUgdGhlIG1pc3Npbmcgb25lcyBkeW5hbWljYWxseSB3aGVuIHJlcXVlc3RzIGZvciB0aGVtIGFyZSBjb21pbmcgaW4uIEhlcmUsIHdlIGluaXRpYWxpemVkIHRvIGZhbHNlLCBiZWNhdXNlIHRvIGluZGljYXRlIHRoYXQgSSBkZWZpbmVkIGFsbCBzdXBwb3J0ZWQgcGF0aHMgaGVyZS5cclxuICAgIHBhdGhzOiBtZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoe1xyXG4gICAgICBwYXJhbXM6IHsgbWVldHVwSWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSB9LFxyXG4gICAgfSkpLCAvL0hlcmUgd2UgbWFwIGFsbCB0aGUgbWVldHVwcyB0byBhY2Nlc3MgYW4gZXZlcnkgbWVldHVwIGl0ZW0gd2hpY2ggaXMgYSBkb2N1bWVudCB3aXRoIGFuIElkIGludG8gYW4gb2JqZWN0IGJlY2F1c2UgcGF0aHMgc2hvdWxkIGFuIGFycmF5IG9mIG9iamVjdHNcclxuXHJcbiAgICAvLyBbXHJcbiAgICAvLyAgIHtcclxuICAgIC8vICAgICBwYXJhbXM6IHtcclxuICAgIC8vICAgICAgIG1lZXR1cElkOiAnbTEnLFxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyAgIHtcclxuICAgIC8vICAgICBwYXJhbXM6IHtcclxuICAgIC8vICAgICAgIG1lZXR1cElkOiAnbTInLFxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyBdLFxyXG4gIH07XHJcbn0gLy9pdHMgb25seSB1c2VkIGluIGdldFN0YXRpY1Byb3BzYW5kIHVzZWQgd2hlbiB0aGUgcGFnZSBpcyBkeW5hbWljLlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICAvLyBmZXRjaCBkYXRhIGZvciBhIHNpbmdsZSBtZWV0dXBcclxuXHJcbiAgY29uc3QgbWVldHVwSWQgPSBjb250ZXh0LnBhcmFtcy5tZWV0dXBJZDsgLy8gZ2V0U3RhdGljUHJvcHMoKSBoYXZlIGEgY29udGV4dCB3aGljaCBoYXZlIGEgcGFyYW1zIGtleSBhbmQgbWVldHVwSWQgaXMgYW4gaWRlbnRpZmllciBvZiBoYXZpbmcgYSBwYWdlIHdpdGggdGhhdCBmb2xkZXIgbmFtZVxyXG5cclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgJ21vbmdvZGIrc3J2Oi8vSHV6YWlmYTpodXphaWZhMTIzQGNsdXN0ZXIwLmJ1NmF6Lm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JyAvL3dlIG5lZWQgdG8gYWRkIHVzZXJuYW1lIGFuZCBwYXNzd3JkIGJ1dCB0aGlzIGNvZGUgaXMgbm90IGFjY2Vzc2libGUgZm9yIHRoZSBjbGllbnRzIGFuZCB0aGlzIHdpbGwgZ2l2ZSB1cyBjb25uZWN0ZWQgY2xpZW50IGV2ZW50dWFsbHlcclxuICApO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7IC8vZGIgbWV0aG9kIHdoaWNoIHdlIGdldCBob2xkIG9mIHRoYXQgZGF0YWJhc2UgdG8gd2hpY2ggd2UgYXJlIGNvbm5lY3RpbmcgaGVyZVxyXG5cclxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTsgLy9hbmQgdGhlbiB3aXRoIGRhdGFiYXNlLCB3ZSBjYW4gZ2V0IGFjY2VzcyB0byBvdXIgbWVldHVwc0NvbGxlY3Rpb24uIENvbGxlY3Rpb24gaXMgYSBtZXRob2QgaGF2aW5nIG5hbWUgb2YgeW91ciBjaG9pY2UuXHJcblxyXG4gIGNvbnN0IHNlbGVjdGVkTWVldHVwID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZE9uZSh7XHJcbiAgICBfaWQ6IE9iamVjdElkKG1lZXR1cElkKSxcclxuICB9KTsgLy9maW5kT25lKCkgZmluZHMgb25lIHNpbmdsZSBkb2N1bWVudCBhbmQgcGFzcyBhbiBvYmplY3Qgd2hlcmUgd2UgZGVmaW5lIGhvdyB0byBmaWx0ZXIuIGFuZCBoZXJlIHdlIGNhbiBhZGQgX2lkIGFuZCBwYXNzIG1lZXR1cElkIHNvIHRoaXMgZmluZHMgYSBzaW5nbGUgbWVldHVwLi4uLi5hdXRvLWdlbmVyYXRlZCBJZHMgaGF2ZSBzdHJpbmdzIGJ5IERlZmF1bHQgaW4gbW9uZ28sLFRvIGVuc3VyZSB0aGF0IHdlIGNhbiBjb3JyZWN0bHkgbG9vayBmb3IgYSBzcGVjaWZpYyBpZCBmcm9tIGRhdGFiYXNlLCB3ZSBuZWVkIHRvIGNvbnZlcnQgaXQgZnJvbSBTdHJpbmcgdG8gc3VjaCBhbiBPYmplY3RJZCB0aGluZyxcclxuXHJcbiAgY2xpZW50LmNsb3NlKCk7IC8vaGVyZSB3ZSBjbG9zZSB0aGUgY29ubmVjdGlvbiBvbmNlIHdlIGFyZSBkb25lIGZyb20gZmV0Y2hpbmcgZGF0YVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbWVldHVwRGF0YTogeyAgIC8vaGVyZSB3ZSBjb3VsZCBjaG5nZSBpZCB0byBTdHJpbmcgc28gYWdhaW4gd2UgcmV0dXJuIGFuIG9iamVjdCB0byBjb252ZXJ0IGFuIGlkIHRvIHN0cmluZyBvdGhlcndpc2Ugd2UgZ2V0IGFuIGVycm9yLlxyXG4gICAgICAgIGlkOiBzZWxlY3RlZE1lZXR1cC5faWQudG9TdHJpbmcoKSxcclxuICAgICAgICB0aXRsZTpzZWxlY3RlZE1lZXR1cC50aXRsZSxcclxuICAgICAgICBhZGRyZXNzOnNlbGVjdGVkTWVldHVwLmFkZHJlc3MsXHJcbiAgICAgICAgaW1hZ2U6c2VsZWN0ZWRNZWV0dXAuaW1hZ2UsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHNlbGVjdGVkTWVldHVwLmRlc2NyaXB0aW9uXHJcblxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbHM7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvZGJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=