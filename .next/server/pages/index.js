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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/MeetupItem.js":
/*!******************************************!*\
  !*** ./components/meetups/MeetupItem.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Card */ "./components/ui/Card.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MeetupItem.module.css */ "./components/meetups/MeetupItem.module.css");
/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\Huzaifa\\next-js-proj_newmeetupApp\\components\\meetups\\MeetupItem.js";




function MeetupItem(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  function showDetailsHandler() {
    router.push('/' + props.id); //useRouter dont have just one query property which gives the access to all that data that might be part of that URL for a dynamic page but it also have methods for navigating programatically. Here we use push method. This pushes a new page onto the stack of pages and its equivalent of using the Link component
  } //meetupid is something we get via props because when we rendered meetupList, we passed the id prop into MeetupItem and therefore inside of meetupItem,we can now construct dynamic path by using props.id, so this will lead us to slash(/) and then specific Id of the meetupItem


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.item,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.image,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: props.image,
          alt: props.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.content,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: props.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
          children: props.address
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.actions,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: showDetailsHandler,
          children: "Show Details"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MeetupItem);

/***/ }),

/***/ "./components/meetups/MeetupItem.module.css":
/*!**************************************************!*\
  !*** ./components/meetups/MeetupItem.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "MeetupItem_item__3siMU",
	"image": "MeetupItem_image__13rAP",
	"content": "MeetupItem_content__3uEkT",
	"actions": "MeetupItem_actions__LvT9B"
};


/***/ }),

/***/ "./components/meetups/MeetupList.js":
/*!******************************************!*\
  !*** ./components/meetups/MeetupList.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MeetupItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeetupItem */ "./components/meetups/MeetupItem.js");
/* harmony import */ var _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeetupList.module.css */ "./components/meetups/MeetupList.module.css");
/* harmony import */ var _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\Huzaifa\\next-js-proj_newmeetupApp\\components\\meetups\\MeetupList.js";



function MeetupList(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    className: _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.list,
    children: props.meetups.map(meetup => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MeetupItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      id: meetup.id,
      image: meetup.image,
      title: meetup.title,
      address: meetup.address
    }, meetup.id, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MeetupList);

/***/ }),

/***/ "./components/meetups/MeetupList.module.css":
/*!**************************************************!*\
  !*** ./components/meetups/MeetupList.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"list": "MeetupList_list__1iafn"
};


/***/ }),

/***/ "./components/ui/Card.js":
/*!*******************************!*\
  !*** ./components/ui/Card.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ "./components/ui/Card.module.css");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\Huzaifa\\next-js-proj_newmeetupApp\\components\\ui\\Card.js";


function Card(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/ui/Card.module.css":
/*!***************************************!*\
  !*** ./components/ui/Card.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "Card_card__3KSLO"
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\Huzaifa\\next-js-proj_newmeetupApp\\pages\\index.js";
//our-domain.com/



 //metadata used when we deploy our Applications. In nextJs, there is special Head component so where we add data, description etc.

function HomePage(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__["default"], {
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


async function getStaticProps() {
  //   //fetch data from an API
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_2__["MongoClient"].connect('mongodb+srv://Huzaifa:huzaifa123@cluster0.bu6az.mongodb.net/meetups?retryWrites=true&w=majority' //we need to add username and passwrd but this code is not accessible for the clients and this will give us connected client eventually
  );
  const db = client.db(); //db method which we get hold of that database to which we are connecting here

  const meetupsCollection = db.collection('meetups'); //and then with database, we can get access to our meetupsCollection. Collection is a method having name of your choice.

  const meetups = await meetupsCollection.find().toArray(); //find method will find default all the documents in that collection and then ultimately we get our meetups here and toArray() method is to be precise to get an array of collections

  client.close(); //here we close the connection once we are done from fetching data

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      })) //here are the meetups which we can fetch from mongodb

    },
    //meetups is a key in return object and so use that identifier in MeetupList as a props.meetups and then how we can move the data fetching away from the client to server side
    revalidate: 1
  }; // this property in getStaticProps() and when we add this property to the return object, we unlock a feature called incremental Static Generation. Revalidate needs a number and this number is the number of seconds, NEXTJS will wait until it regenerates this page for incoming request. It means this page is not just be generated during build process but also be generated every couple of seconds on the server, if there are requests for this page. So, if data can change in every 1 hour, so it changed to 3600 and if data changes in every one second so it should be initialized to 1. It ensures that this page could be updated after deployment
} //if you need to add data fetching to a page component, you can do by exporting a special function from inside your page component file and its only work in page component files and not on regular components, but only work in component files inside the pages folder
// //it has to be called getStaticProps and NextJs first of all, call getStaticProps function before its called the component function and getStaticProps have a job to prepare props for this page and this props could contain the data this page needs and its allowed to be asynchronous which means it waits until your data is loaded
// //In getStaticProps(),you can execute any code, that would normally only run on a server becuase any code here will never end on a client side and never execute on client side
// //in page component function, recieves a props object and the object will be the object you set as a props here

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cEl0ZW0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL0NhcmQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIk1lZXR1cEl0ZW0iLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInNob3dEZXRhaWxzSGFuZGxlciIsInB1c2giLCJpZCIsImNsYXNzZXMiLCJpdGVtIiwiaW1hZ2UiLCJ0aXRsZSIsImNvbnRlbnQiLCJhZGRyZXNzIiwiYWN0aW9ucyIsIk1lZXR1cExpc3QiLCJsaXN0IiwibWVldHVwcyIsIm1hcCIsIm1lZXR1cCIsIkNhcmQiLCJjYXJkIiwiY2hpbGRyZW4iLCJIb21lUGFnZSIsImdldFN0YXRpY1Byb3BzIiwiY2xpZW50IiwiTW9uZ29DbGllbnQiLCJjb25uZWN0IiwiZGIiLCJtZWV0dXBzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJmaW5kIiwidG9BcnJheSIsImNsb3NlIiwiX2lkIiwidG9TdHJpbmciLCJyZXZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFDekIsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxXQUFTQyxrQkFBVCxHQUE4QjtBQUM1QkYsVUFBTSxDQUFDRyxJQUFQLENBQVksTUFBTUosS0FBSyxDQUFDSyxFQUF4QixFQUQ0QixDQUNDO0FBQzlCLEdBTHdCLENBS3ZCOzs7QUFDRixzQkFDRTtBQUFJLGFBQVMsRUFBRUMsNkRBQU8sQ0FBQ0MsSUFBdkI7QUFBQSwyQkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUQsNkRBQU8sQ0FBQ0UsS0FBeEI7QUFBQSwrQkFDRTtBQUFLLGFBQUcsRUFBRVIsS0FBSyxDQUFDUSxLQUFoQjtBQUF1QixhQUFHLEVBQUVSLEtBQUssQ0FBQ1M7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFO0FBQUssaUJBQVMsRUFBRUgsNkRBQU8sQ0FBQ0ksT0FBeEI7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLVixLQUFLLENBQUNTO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUEsb0JBQVVULEtBQUssQ0FBQ1c7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQVFFO0FBQUssaUJBQVMsRUFBRUwsNkRBQU8sQ0FBQ00sT0FBeEI7QUFBQSwrQkFDRTtBQUFRLGlCQUFPLEVBQUVULGtCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQ7O0FBRWNKLHlFQUFmLEU7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVBLFNBQVNjLFVBQVQsQ0FBb0JiLEtBQXBCLEVBQTJCO0FBQ3pCLHNCQUNFO0FBQUksYUFBUyxFQUFFTSw2REFBTyxDQUFDUSxJQUF2QjtBQUFBLGNBQ0dkLEtBQUssQ0FBQ2UsT0FBTixDQUFjQyxHQUFkLENBQW1CQyxNQUFELGlCQUNqQixxRUFBQyxtREFBRDtBQUVFLFFBQUUsRUFBRUEsTUFBTSxDQUFDWixFQUZiO0FBR0UsV0FBSyxFQUFFWSxNQUFNLENBQUNULEtBSGhCO0FBSUUsV0FBSyxFQUFFUyxNQUFNLENBQUNSLEtBSmhCO0FBS0UsYUFBTyxFQUFFUSxNQUFNLENBQUNOO0FBTGxCLE9BQ09NLE1BQU0sQ0FBQ1osRUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRDs7QUFFY1EseUVBQWYsRTs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7O0FBRUEsU0FBU0ssSUFBVCxDQUFjbEIsS0FBZCxFQUFxQjtBQUNuQixzQkFBTztBQUFLLGFBQVMsRUFBRU0sdURBQU8sQ0FBQ2EsSUFBeEI7QUFBQSxjQUErQm5CLEtBQUssQ0FBQ29CO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztBQUVjRixtRUFBZixFOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUVBO0NBR0E7O0FBQ0EsU0FBU0csUUFBVCxDQUFrQnJCLEtBQWxCLEVBQXlCO0FBQ3ZCLHNCQUNFLHFFQUFDLDhDQUFEO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0UscUVBQUMsc0VBQUQ7QUFBWSxhQUFPLEVBQUVBLEtBQUssQ0FBQ2U7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0QsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLGVBQWVPLGNBQWYsR0FBZ0M7QUFDckM7QUFDQSxRQUFNQyxNQUFNLEdBQUcsTUFBTUMsbURBQVcsQ0FBQ0MsT0FBWixDQUNuQixpR0FEbUIsQ0FDK0U7QUFEL0UsR0FBckI7QUFHQSxRQUFNQyxFQUFFLEdBQUdILE1BQU0sQ0FBQ0csRUFBUCxFQUFYLENBTHFDLENBS2I7O0FBRXhCLFFBQU1DLGlCQUFpQixHQUFHRCxFQUFFLENBQUNFLFVBQUgsQ0FBYyxTQUFkLENBQTFCLENBUHFDLENBT2U7O0FBRXBELFFBQU1iLE9BQU8sR0FBRyxNQUFNWSxpQkFBaUIsQ0FBQ0UsSUFBbEIsR0FBeUJDLE9BQXpCLEVBQXRCLENBVHFDLENBU3FCOztBQUMxRFAsUUFBTSxDQUFDUSxLQUFQLEdBVnFDLENBVXJCOztBQUVoQixTQUFPO0FBQ0wvQixTQUFLLEVBQUU7QUFDTGUsYUFBTyxFQUFFQSxPQUFPLENBQUNDLEdBQVIsQ0FBYUMsTUFBRCxLQUFhO0FBQ2hDUixhQUFLLEVBQUVRLE1BQU0sQ0FBQ1IsS0FEa0I7QUFFaENFLGVBQU8sRUFBRU0sTUFBTSxDQUFDTixPQUZnQjtBQUdoQ0gsYUFBSyxFQUFFUyxNQUFNLENBQUNULEtBSGtCO0FBSWhDSCxVQUFFLEVBQUVZLE1BQU0sQ0FBQ2UsR0FBUCxDQUFXQyxRQUFYO0FBSjRCLE9BQWIsQ0FBWixDQURKLENBTUE7O0FBTkEsS0FERjtBQVFGO0FBQ0hDLGNBQVUsRUFBRTtBQVRQLEdBQVAsQ0FacUMsQ0FzQmxDO0FBQ0osQyxDQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVlYix1RUFBZixFOzs7Ozs7Ozs7OztBQzVEQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgQ2FyZCBmcm9tICcuLi91aS9DYXJkJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vTWVldHVwSXRlbS5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gTWVldHVwSXRlbShwcm9wcykge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBmdW5jdGlvbiBzaG93RGV0YWlsc0hhbmRsZXIoKSB7XG4gICAgcm91dGVyLnB1c2goJy8nICsgcHJvcHMuaWQpOyAvL3VzZVJvdXRlciBkb250IGhhdmUganVzdCBvbmUgcXVlcnkgcHJvcGVydHkgd2hpY2ggZ2l2ZXMgdGhlIGFjY2VzcyB0byBhbGwgdGhhdCBkYXRhIHRoYXQgbWlnaHQgYmUgcGFydCBvZiB0aGF0IFVSTCBmb3IgYSBkeW5hbWljIHBhZ2UgYnV0IGl0IGFsc28gaGF2ZSBtZXRob2RzIGZvciBuYXZpZ2F0aW5nIHByb2dyYW1hdGljYWxseS4gSGVyZSB3ZSB1c2UgcHVzaCBtZXRob2QuIFRoaXMgcHVzaGVzIGEgbmV3IHBhZ2Ugb250byB0aGUgc3RhY2sgb2YgcGFnZXMgYW5kIGl0cyBlcXVpdmFsZW50IG9mIHVzaW5nIHRoZSBMaW5rIGNvbXBvbmVudFxuICB9IC8vbWVldHVwaWQgaXMgc29tZXRoaW5nIHdlIGdldCB2aWEgcHJvcHMgYmVjYXVzZSB3aGVuIHdlIHJlbmRlcmVkIG1lZXR1cExpc3QsIHdlIHBhc3NlZCB0aGUgaWQgcHJvcCBpbnRvIE1lZXR1cEl0ZW0gYW5kIHRoZXJlZm9yZSBpbnNpZGUgb2YgbWVldHVwSXRlbSx3ZSBjYW4gbm93IGNvbnN0cnVjdCBkeW5hbWljIHBhdGggYnkgdXNpbmcgcHJvcHMuaWQsIHNvIHRoaXMgd2lsbCBsZWFkIHVzIHRvIHNsYXNoKC8pIGFuZCB0aGVuIHNwZWNpZmljIElkIG9mIHRoZSBtZWV0dXBJdGVtXG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cbiAgICAgIDxDYXJkPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XG4gICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSBhbHQ9e3Byb3BzLnRpdGxlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgICAgPGgzPntwcm9wcy50aXRsZX08L2gzPlxuICAgICAgICAgIDxhZGRyZXNzPntwcm9wcy5hZGRyZXNzfTwvYWRkcmVzcz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd0RldGFpbHNIYW5kbGVyfT5TaG93IERldGFpbHM8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9saT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVldHVwSXRlbTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIml0ZW1cIjogXCJNZWV0dXBJdGVtX2l0ZW1fXzNzaU1VXCIsXG5cdFwiaW1hZ2VcIjogXCJNZWV0dXBJdGVtX2ltYWdlX18xM3JBUFwiLFxuXHRcImNvbnRlbnRcIjogXCJNZWV0dXBJdGVtX2NvbnRlbnRfXzN1RWtUXCIsXG5cdFwiYWN0aW9uc1wiOiBcIk1lZXR1cEl0ZW1fYWN0aW9uc19fTHZUOUJcIlxufTtcbiIsImltcG9ydCBNZWV0dXBJdGVtIGZyb20gJy4vTWVldHVwSXRlbSc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL01lZXR1cExpc3QubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIE1lZXR1cExpc3QocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxuICAgICAge3Byb3BzLm1lZXR1cHMubWFwKChtZWV0dXApID0+IChcbiAgICAgICAgPE1lZXR1cEl0ZW1cbiAgICAgICAgICBrZXk9e21lZXR1cC5pZH1cbiAgICAgICAgICBpZD17bWVldHVwLmlkfVxuICAgICAgICAgIGltYWdlPXttZWV0dXAuaW1hZ2V9XG4gICAgICAgICAgdGl0bGU9e21lZXR1cC50aXRsZX1cbiAgICAgICAgICBhZGRyZXNzPXttZWV0dXAuYWRkcmVzc31cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lZXR1cExpc3Q7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsaXN0XCI6IFwiTWVldHVwTGlzdF9saXN0X18xaWFmblwiXG59O1xuIiwiaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9DYXJkLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBDYXJkKHByb3BzKSB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2FyZFwiOiBcIkNhcmRfY2FyZF9fM0tTTE9cIlxufTtcbiIsIi8vb3VyLWRvbWFpbi5jb20vXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XHJcblxyXG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdCc7XHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy9tZXRhZGF0YSB1c2VkIHdoZW4gd2UgZGVwbG95IG91ciBBcHBsaWNhdGlvbnMuIEluIG5leHRKcywgdGhlcmUgaXMgc3BlY2lhbCBIZWFkIGNvbXBvbmVudCBzbyB3aGVyZSB3ZSBhZGQgZGF0YSwgZGVzY3JpcHRpb24gZXRjLlxyXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+IFxyXG4gICAgICA8SGVhZD4gICBcclxuICAgICAgICA8dGl0bGU+UmVhY3QgTWVldHVwczwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J0Jyb3dzZSBhIGh1Z2UgbGlzdCBvZiBoaWdobHkgYWN0aXZlIE1lZXR1cHMnIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30gLz47XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4vLyAgIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxO1xyXG4vLyAgIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzO1xyXG4vL2ZldGNoIGRhdGEgZnJvbSBhbiBBUElcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQUyxcclxuLy8gICAgIH0sXHJcbi8vICAgfTtcclxuLy8gfSAvL2l0IGlzIGFuIGFsdGVybmF0aXZlIHRvIGdldFN0YXRpY1Byb3BzKCkgYW5kIHRoZSBkaWZmZXJlbmNlIHRvIGdldFNlcnZlclNpZGVQcm9wcygpIHRoYXQgdGhpcyBmdW5jdGlvbiB3aWxsIG5vdyBub3QgcnVuIGR1cmluZyBidWlsZCBwcm9jZXNzIGJ1dCBpbnN0ZWFkIGFsd2F5cyBvbiB0aGUgc2VydmVyIGFmdGVyIGRlcGxveW1lbnRcclxuLy9pdHMgZ3VhcmFudGVlZCB0byBydW4gZm9yIGV2ZXJ5IHJlcXVlc3QgYnV0IGl0IGNvdWxkIGJlIGRpc2FkdmFudGFnZSBiZWNhdXNlIHRoYXQgbWVhbnMgdGhhdCB5b3UgbmVlZCB0byB3YWl0IGZvciB5b3VyIHBhZ2UgdG8gYmUgZ2VuZXJhdGVkIG9uIGV2ZXJ5IGluY29taW5nIHJlcXVlc3QuLiBZb3UgZG9udCBoYXZlIGFjY2VzcyBvbiBSZXF1ZXN0IGFuZCBSZXNwb25zZSBpbiBnZXRTdGF0aWNQcm9wcygpLiBJZiB5b3UgaGF2ZSByZWFsbHkgYSBkYXRhIHRoYXQgY2hhbmdlcyBtdWx0aXBsZSB0aW1lcyBldmVyeSBzZWNvbmQgdGhlbiB0aGVyZWZvcmUgcmV2YWxpZGF0ZSB3b250IGhlbHB5b3UsIHNvIGdldFNlcnZlclNpZGVQcm9wcygpIG1pZ2h0IGJlIHVzZWZ1bFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgLy8gICAvL2ZldGNoIGRhdGEgZnJvbSBhbiBBUElcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgJ21vbmdvZGIrc3J2Oi8vSHV6YWlmYTpodXphaWZhMTIzQGNsdXN0ZXIwLmJ1NmF6Lm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JyAvL3dlIG5lZWQgdG8gYWRkIHVzZXJuYW1lIGFuZCBwYXNzd3JkIGJ1dCB0aGlzIGNvZGUgaXMgbm90IGFjY2Vzc2libGUgZm9yIHRoZSBjbGllbnRzIGFuZCB0aGlzIHdpbGwgZ2l2ZSB1cyBjb25uZWN0ZWQgY2xpZW50IGV2ZW50dWFsbHlcclxuICApO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7IC8vZGIgbWV0aG9kIHdoaWNoIHdlIGdldCBob2xkIG9mIHRoYXQgZGF0YWJhc2UgdG8gd2hpY2ggd2UgYXJlIGNvbm5lY3RpbmcgaGVyZVxyXG5cclxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTsgLy9hbmQgdGhlbiB3aXRoIGRhdGFiYXNlLCB3ZSBjYW4gZ2V0IGFjY2VzcyB0byBvdXIgbWVldHVwc0NvbGxlY3Rpb24uIENvbGxlY3Rpb24gaXMgYSBtZXRob2QgaGF2aW5nIG5hbWUgb2YgeW91ciBjaG9pY2UuXHJcblxyXG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpOyAvL2ZpbmQgbWV0aG9kIHdpbGwgZmluZCBkZWZhdWx0IGFsbCB0aGUgZG9jdW1lbnRzIGluIHRoYXQgY29sbGVjdGlvbiBhbmQgdGhlbiB1bHRpbWF0ZWx5IHdlIGdldCBvdXIgbWVldHVwcyBoZXJlIGFuZCB0b0FycmF5KCkgbWV0aG9kIGlzIHRvIGJlIHByZWNpc2UgdG8gZ2V0IGFuIGFycmF5IG9mIGNvbGxlY3Rpb25zXHJcbiAgY2xpZW50LmNsb3NlKCk7IC8vaGVyZSB3ZSBjbG9zZSB0aGUgY29ubmVjdGlvbiBvbmNlIHdlIGFyZSBkb25lIGZyb20gZmV0Y2hpbmcgZGF0YVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbWVldHVwczogbWVldHVwcy5tYXAoKG1lZXR1cCkgPT4gKHtcclxuICAgICAgICB0aXRsZTogbWVldHVwLnRpdGxlLFxyXG4gICAgICAgIGFkZHJlc3M6IG1lZXR1cC5hZGRyZXNzLFxyXG4gICAgICAgIGltYWdlOiBtZWV0dXAuaW1hZ2UsXHJcbiAgICAgICAgaWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSxcclxuICAgICAgfSkpLCAvL2hlcmUgYXJlIHRoZSBtZWV0dXBzIHdoaWNoIHdlIGNhbiBmZXRjaCBmcm9tIG1vbmdvZGJcclxuICAgIH0sIC8vbWVldHVwcyBpcyBhIGtleSBpbiByZXR1cm4gb2JqZWN0IGFuZCBzbyB1c2UgdGhhdCBpZGVudGlmaWVyIGluIE1lZXR1cExpc3QgYXMgYSBwcm9wcy5tZWV0dXBzIGFuZCB0aGVuIGhvdyB3ZSBjYW4gbW92ZSB0aGUgZGF0YSBmZXRjaGluZyBhd2F5IGZyb20gdGhlIGNsaWVudCB0byBzZXJ2ZXIgc2lkZVxyXG4gICAgcmV2YWxpZGF0ZTogMSxcclxuICB9OyAvLyB0aGlzIHByb3BlcnR5IGluIGdldFN0YXRpY1Byb3BzKCkgYW5kIHdoZW4gd2UgYWRkIHRoaXMgcHJvcGVydHkgdG8gdGhlIHJldHVybiBvYmplY3QsIHdlIHVubG9jayBhIGZlYXR1cmUgY2FsbGVkIGluY3JlbWVudGFsIFN0YXRpYyBHZW5lcmF0aW9uLiBSZXZhbGlkYXRlIG5lZWRzIGEgbnVtYmVyIGFuZCB0aGlzIG51bWJlciBpcyB0aGUgbnVtYmVyIG9mIHNlY29uZHMsIE5FWFRKUyB3aWxsIHdhaXQgdW50aWwgaXQgcmVnZW5lcmF0ZXMgdGhpcyBwYWdlIGZvciBpbmNvbWluZyByZXF1ZXN0LiBJdCBtZWFucyB0aGlzIHBhZ2UgaXMgbm90IGp1c3QgYmUgZ2VuZXJhdGVkIGR1cmluZyBidWlsZCBwcm9jZXNzIGJ1dCBhbHNvIGJlIGdlbmVyYXRlZCBldmVyeSBjb3VwbGUgb2Ygc2Vjb25kcyBvbiB0aGUgc2VydmVyLCBpZiB0aGVyZSBhcmUgcmVxdWVzdHMgZm9yIHRoaXMgcGFnZS4gU28sIGlmIGRhdGEgY2FuIGNoYW5nZSBpbiBldmVyeSAxIGhvdXIsIHNvIGl0IGNoYW5nZWQgdG8gMzYwMCBhbmQgaWYgZGF0YSBjaGFuZ2VzIGluIGV2ZXJ5IG9uZSBzZWNvbmQgc28gaXQgc2hvdWxkIGJlIGluaXRpYWxpemVkIHRvIDEuIEl0IGVuc3VyZXMgdGhhdCB0aGlzIHBhZ2UgY291bGQgYmUgdXBkYXRlZCBhZnRlciBkZXBsb3ltZW50XHJcbn1cclxuLy9pZiB5b3UgbmVlZCB0byBhZGQgZGF0YSBmZXRjaGluZyB0byBhIHBhZ2UgY29tcG9uZW50LCB5b3UgY2FuIGRvIGJ5IGV4cG9ydGluZyBhIHNwZWNpYWwgZnVuY3Rpb24gZnJvbSBpbnNpZGUgeW91ciBwYWdlIGNvbXBvbmVudCBmaWxlIGFuZCBpdHMgb25seSB3b3JrIGluIHBhZ2UgY29tcG9uZW50IGZpbGVzIGFuZCBub3Qgb24gcmVndWxhciBjb21wb25lbnRzLCBidXQgb25seSB3b3JrIGluIGNvbXBvbmVudCBmaWxlcyBpbnNpZGUgdGhlIHBhZ2VzIGZvbGRlclxyXG4vLyAvL2l0IGhhcyB0byBiZSBjYWxsZWQgZ2V0U3RhdGljUHJvcHMgYW5kIE5leHRKcyBmaXJzdCBvZiBhbGwsIGNhbGwgZ2V0U3RhdGljUHJvcHMgZnVuY3Rpb24gYmVmb3JlIGl0cyBjYWxsZWQgdGhlIGNvbXBvbmVudCBmdW5jdGlvbiBhbmQgZ2V0U3RhdGljUHJvcHMgaGF2ZSBhIGpvYiB0byBwcmVwYXJlIHByb3BzIGZvciB0aGlzIHBhZ2UgYW5kIHRoaXMgcHJvcHMgY291bGQgY29udGFpbiB0aGUgZGF0YSB0aGlzIHBhZ2UgbmVlZHMgYW5kIGl0cyBhbGxvd2VkIHRvIGJlIGFzeW5jaHJvbm91cyB3aGljaCBtZWFucyBpdCB3YWl0cyB1bnRpbCB5b3VyIGRhdGEgaXMgbG9hZGVkXHJcbi8vIC8vSW4gZ2V0U3RhdGljUHJvcHMoKSx5b3UgY2FuIGV4ZWN1dGUgYW55IGNvZGUsIHRoYXQgd291bGQgbm9ybWFsbHkgb25seSBydW4gb24gYSBzZXJ2ZXIgYmVjdWFzZSBhbnkgY29kZSBoZXJlIHdpbGwgbmV2ZXIgZW5kIG9uIGEgY2xpZW50IHNpZGUgYW5kIG5ldmVyIGV4ZWN1dGUgb24gY2xpZW50IHNpZGVcclxuLy8gLy9pbiBwYWdlIGNvbXBvbmVudCBmdW5jdGlvbiwgcmVjaWV2ZXMgYSBwcm9wcyBvYmplY3QgYW5kIHRoZSBvYmplY3Qgd2lsbCBiZSB0aGUgb2JqZWN0IHlvdSBzZXQgYXMgYSBwcm9wcyBoZXJlXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=