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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("kqZg");


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "YEck":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"detail": "MeetupDetail_detail__C_8IT"
};


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "kqZg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./components/meetups/MeetupDetail.module.css
var MeetupDetail_module = __webpack_require__("YEck");
var MeetupDetail_module_default = /*#__PURE__*/__webpack_require__.n(MeetupDetail_module);

// CONCATENATED MODULE: ./components/meetups/MeetupDetail.js




function MeetupDetail(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
    className: MeetupDetail_module_default.a.detail,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      src: props.image,
      alt: props.title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
      children: props.title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("address", {
      children: props.address
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      children: props.description
    })]
  });
}

/* harmony default export */ var meetups_MeetupDetail = (MeetupDetail);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__("ykE2");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./pages/[meetupId]/index.js







function MeetupDetails(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: props.meetupData.title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "description",
        content: props.meetupData.description
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(meetups_MeetupDetail, {
      image: props.meetupData.image,
      title: props.meetupData.title,
      address: props.meetupData.address,
      description: props.meetupData.description
    }), " //props.meetupData because we have that meetupData prop. So first we can drill into meetupData and then access to image,title,address and description"]
  });
}

async function getStaticPaths() {
  //getStaticPaths() is another important function which you need in dynamic pages to tell NextJS for which dynamic parameter values this page should be pre-generated.
  const client = await external_mongodb_["MongoClient"].connect('mongodb+srv://Huzaifa:huzaifa123@cluster0.bu6az.mongodb.net/meetups?retryWrites=true&w=majority' //we need to add username and passwrd but this code is not accessible for the clients and this will give us connected client eventually
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

  const client = await external_mongodb_["MongoClient"].connect('mongodb+srv://Huzaifa:huzaifa123@cluster0.bu6az.mongodb.net/meetups?retryWrites=true&w=majority' //we need to add username and passwrd but this code is not accessible for the clients and this will give us connected client eventually
  );
  const db = client.db(); //db method which we get hold of that database to which we are connecting here

  const meetupsCollection = db.collection('meetups'); //and then with database, we can get access to our meetupsCollection. Collection is a method having name of your choice.

  const selectedMeetup = await meetupsCollection.findOne({
    _id: Object(external_mongodb_["ObjectId"])(meetupId)
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
/* harmony default export */ var _meetupId_ = __webpack_exports__["default"] = (MeetupDetails);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "ykE2":
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ })

/******/ });