/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Indoor/Indoor.ux");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/Indoor/Indoor.ux!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/Indoor/Indoor.ux!./src/Indoor/Indoor.ux":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/Indoor/Indoor.ux!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/Indoor/Indoor.ux!./src/Indoor/Indoor.ux ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".loading": {
    "marginTop": "30px",
    "marginRight": "0px",
    "marginBottom": "30px",
    "marginLeft": "0px"
  },
  ".container": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignContent": "center",
    "alignItems": "center"
  },
  ".map": {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".nearby": {
    "display": "flex",
    "justifyContent": "flex-start",
    "alignItems": "center",
    "flexDirection": "column",
    "backgroundColor": "#efefef"
  },
  ".nearby .nearbyTitle": {
    "borderRadius": "30px",
    "marginTop": "60px",
    "width": "640px",
    "paddingTop": "40px",
    "paddingRight": "40px",
    "paddingBottom": "40px",
    "paddingLeft": "40px",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "borderTopWidth": "6px",
    "borderRightWidth": "6px",
    "borderBottomWidth": "6px",
    "borderLeftWidth": "6px",
    "borderStyle": "solid",
    "borderTopColor": "#dddddd",
    "borderRightColor": "#dddddd",
    "borderBottomColor": "#dddddd",
    "borderLeftColor": "#dddddd",
    "background": "{\"values\":[{\"type\":\"linearGradient\",\"directions\":[\"225deg\"],\"values\":[\"#FF3CAC 0%\",\"#784BA0 50%\",\"#2B86C5 100%\"]}]}"
  },
  ".nearby .nearbyTitle .sidetitle": {
    "fontSize": "30px",
    "fontWeight": "500",
    "color": "#FFFFFF"
  },
  ".nearby .nearbyTitle .cameraName": {
    "color": "#FFFFFF",
    "fontSize": "36px",
    "fontWeight": "700",
    "letterSpacing": "2px"
  },
  ".nearby .nearbyCoupon": {
    "marginTop": "60px",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "30px",
    "borderTopWidth": "6px",
    "borderRightWidth": "6px",
    "borderBottomWidth": "6px",
    "borderLeftWidth": "6px",
    "borderStyle": "solid",
    "borderTopColor": "#dddddd",
    "borderRightColor": "#dddddd",
    "borderBottomColor": "#dddddd",
    "borderLeftColor": "#dddddd",
    "width": "700px",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "flexDirection": "column",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px"
  },
  ".nearby .nearbyCoupon .header": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "width": "100%",
    "alignItems": "center",
    "paddingLeft": "10px",
    "paddingRight": "10px"
  },
  ".nearby .nearbyCoupon .header .couponTit": {
    "fontSize": "36px",
    "fontWeight": "700",
    "color": "#000000"
  },
  ".nearby .nearbyCoupon .header .couponMore": {
    "fontSize": "28px",
    "fontWeight": "600"
  },
  ".nearby .nearbyCoupon .mainCoupons": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "center",
    "width": "100%",
    "height": "250px",
    "paddingLeft": "10px",
    "paddingRight": "10px",
    "alignItems": "center",
    "marginTop": "30px"
  },
  ".nearby .nearbyCoupon .mainCoupons .loadMore": {
    "background": "{\"values\":[{\"type\":\"linearGradient\",\"directions\":[\"45deg\"],\"values\":[\"#007adf 0%\",\"#00ecbc 100%\"]}]}",
    "borderRadius": "10px",
    "width": "160px",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "marginRight": "20px"
  },
  ".nearby .nearbyCoupon .mainCoupons .loadMore .loadMoreText": {
    "color": "#FFFFFF",
    "fontWeight": "700",
    "fontSize": "30px",
    "letterSpacing": "4px"
  },
  ".nearby .nearbyCoupon .mainCoupons .mainCoupon": {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "flex-start",
    "justifyContent": "space-between",
    "width": "180px",
    "height": "250px",
    "marginRight": "30px"
  },
  ".nearby .nearbyCoupon .mainCoupons .mainCoupon .stuffName": {
    "lines": 1,
    "textOverflow": "ellipsis",
    "color": "#000000",
    "fontWeight": "600"
  },
  ".nearby .nearbyCoupon .mainCoupons .mainCoupon .stuffImg": {
    "width": "180px",
    "height": "120px",
    "borderRadius": "10px",
    "objectFit": "cover"
  },
  ".nearby .nearbyCoupon .mainCoupons .mainCoupon .price .newPrice": {
    "color": "#e92a2a",
    "marginRight": "5px",
    "fontWeight": "600"
  },
  ".nearby .nearbyCoupon .mainCoupons .mainCoupon .price .oldPrice": {
    "color": "#cccccc",
    "fontSize": "16px",
    "textDecoration": "line-through"
  },
  ".nearby .nearbyCoupon .mainCoupons .mainCoupon .storeName": {
    "color": "#000000",
    "fontSize": "24px"
  },
  ".nearby .nearbyRecommendation": {
    "marginTop": "60px",
    "width": "700px",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "flexDirection": "column"
  },
  ".nearby .nearbyRecommendation .header": {
    "display": "flex",
    "flexDirection": "row",
    "width": "100%",
    "alignItems": "flex-end",
    "paddingLeft": "10px",
    "paddingRight": "10px"
  },
  ".nearby .nearbyRecommendation .header .nearbyRecommendationTitle": {
    "fontSize": "36px",
    "fontWeight": "700",
    "color": "#000000",
    "marginRight": "15px"
  },
  ".nearby .nearbyRecommendation .header .description": {
    "fontSize": "24px",
    "color": "#333333",
    "letterSpacing": "3px"
  },
  ".nearby .nearbyRecommendation .recommendations": {
    "display": "flex",
    "flexDirection": "column",
    "width": "100%",
    "marginTop": "10px"
  },
  ".nearby .nearbyRecommendation .recommendations .recommendation": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "width": "100%",
    "backgroundColor": "#ffffff",
    "marginTop": "20px",
    "marginRight": "0px",
    "marginBottom": "20px",
    "marginLeft": "0px",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "borderRadius": "20px",
    "borderTopWidth": "6px",
    "borderRightWidth": "6px",
    "borderBottomWidth": "6px",
    "borderLeftWidth": "6px",
    "borderStyle": "solid",
    "borderTopColor": "#dddddd",
    "borderRightColor": "#dddddd",
    "borderBottomColor": "#dddddd",
    "borderLeftColor": "#dddddd"
  },
  ".nearby .nearbyRecommendation .recommendations .recommendation .main": {
    "width": "100%",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "flex-start"
  },
  ".nearby .nearbyRecommendation .recommendations .recommendation .main .desc": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "flex-start",
    "marginLeft": "30px"
  },
  ".nearby .nearbyRecommendation .recommendations .recommendation .main .desc .storeTitle": {
    "fontSize": "40px",
    "fontWeight": "700",
    "color": "#000000",
    "marginTop": "5px",
    "marginRight": "0px",
    "marginBottom": "5px",
    "marginLeft": "0px",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  ".nearby .nearbyRecommendation .recommendations .recommendation .main .desc .storeRates": {
    "fontSize": "28px",
    "color": "#ec4141",
    "fontWeight": "700",
    "marginTop": "5px",
    "marginRight": "0px",
    "marginBottom": "5px",
    "marginLeft": "0px"
  },
  ".nearby .nearbyRecommendation .recommendations .recommendation .main .desc .storeDistance": {
    "fontSize": "28px",
    "color": "#000000",
    "fontWeight": "700",
    "marginTop": "5px",
    "marginRight": "0px",
    "marginBottom": "5px",
    "marginLeft": "0px"
  },
  ".nearby .nearbyRecommendation .recommendations .recommendation .main .recommendation-img": {
    "width": "200px",
    "height": "200px",
    "borderRadius": "10px",
    "objectFit": "cover",
    "borderTopWidth": "2px",
    "borderRightWidth": "2px",
    "borderBottomWidth": "2px",
    "borderLeftWidth": "2px",
    "borderStyle": "solid",
    "borderTopColor": "#111111",
    "borderRightColor": "#111111",
    "borderBottomColor": "#111111",
    "borderLeftColor": "#111111"
  },
  ".nearby .nearbyRecommendation .recommendations .recommendation .footer": {
    "marginTop": "20px",
    "borderTopWidth": "2px",
    "borderTopStyle": "solid",
    "borderTopColor": "#eeeeee",
    "fontSize": "30px",
    "lineHeight": "30px",
    "paddingTop": "10px",
    "display": "flex",
    "flexDirection": "row-reverse",
    "color": "#333333"
  },
  ".tab-container": {
    "height": "130px",
    "borderTopWidth": "1px",
    "borderTopColor": "#bbbbbb",
    "borderRightColor": "#bbbbbb",
    "borderBottomColor": "#bbbbbb",
    "borderLeftColor": "#bbbbbb",
    "backgroundColor": "#ffffff",
    "justifyContent": "space-around"
  },
  ".tab-content": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".web-container": {
    "width": "750px",
    "height": "100%"
  },
  ".small_bar": {
    "width": "100%",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "height": "106px",
    "borderBottomWidth": "4px",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#eeeeee",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".functions_row": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "marginTop": "15px",
    "marginRight": "0px",
    "marginBottom": "15px",
    "marginLeft": "0px"
  },
  ".function_item": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "width": "20%"
  },
  ".function_image": {
    "width": "80px",
    "height": "80px",
    "marginBottom": "5px"
  },
  ".function_text": {
    "fontSize": "20px",
    "fontWeight": "600"
  },
  ".small_bar .inner_bar": {
    "width": "40%",
    "height": "20px",
    "borderRadius": "10px",
    "backgroundColor": "#eeeeee"
  },
  ".features_bar": {
    "width": "100%",
    "height": "100%",
    "marginTop": "30px",
    "marginBottom": "15px",
    "display": "flex",
    "flexDirection": "column"
  },
  ".features_bar .search_box": {
    "width": "100%",
    "height": "100px",
    "borderRadius": "20px",
    "borderTopWidth": "6px",
    "borderRightWidth": "6px",
    "borderBottomWidth": "6px",
    "borderLeftWidth": "6px",
    "borderStyle": "solid",
    "borderTopColor": "#dddddd",
    "borderRightColor": "#dddddd",
    "borderBottomColor": "#dddddd",
    "borderLeftColor": "#dddddd",
    "paddingTop": "15px",
    "paddingRight": "40px",
    "paddingBottom": "15px",
    "paddingLeft": "40px",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "marginTop": "15px",
    "marginRight": "0px",
    "marginBottom": "15px",
    "marginLeft": "0px"
  },
  ".features_bar .search_box_text": {
    "fontWeight": "700",
    "color": "#666666",
    "textAlign": "right",
    "fontSize": "30px"
  },
  ".features_bar .search_btn": {
    "width": "48px",
    "height": "48px"
  },
  ".controller-bar": {
    "position": "absolute",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "paddingTop": "0px",
    "paddingRight": "30px",
    "paddingBottom": "30px",
    "paddingLeft": "30px",
    "alignItems": "center",
    "bottom": "-360px",
    "width": "750px",
    "height": "430px",
    "zIndex": 100,
    "backgroundColor": "#ffffff",
    "borderTopLeftRadius": "30px",
    "borderTopRightRadius": "30px"
  },
  ".controller-bar-minied-showed": {
    "animationName": "controllerBarMiniShow",
    "animationDuration": "500ms",
    "animationTimingFunction": "ease-in-out",
    "animationFillMode": "forwards"
  },
  "@KEYFRAMES": {
    "controllerBarMiniShow": [
      {
        "transform": "{\"translateY\":\"0px\"}",
        "time": 0
      },
      {
        "transform": "{\"translateY\":\"-360px\"}",
        "time": 100
      }
    ],
    "controllerBarShowMini": [
      {
        "transform": "{\"translateY\":\"-360px\"}",
        "time": 0
      },
      {
        "transform": "{\"translateY\":\"0px\"}",
        "time": 100
      }
    ],
    "storeInfoBarShowClose": [
      {
        "transform": "{\"translateY\":\"-400px\"}",
        "time": 0
      },
      {
        "transform": "{\"translateY\":\"0px\"}",
        "time": 100
      }
    ],
    "storeInfoBarCloseShow": [
      {
        "transform": "{\"translateY\":\"0px\"}",
        "time": 0
      },
      {
        "transform": "{\"translateY\":\"-400px\"}",
        "time": 100
      }
    ],
    "searchBarCloseShow": [
      {
        "transform": "{\"translateY\":\"0px\"}",
        "time": 0
      },
      {
        "transform": "{\"translateY\":\"300px\"}",
        "time": 100
      }
    ],
    "searchBarShowClose": [
      {
        "transform": "{\"translateY\":\"300px\"}",
        "time": 0
      },
      {
        "transform": "{\"translateY\":\"-500px\"}",
        "time": 100
      }
    ],
    "navigationBarCloseShow": [
      {
        "transform": "{\"translateY\":\"0px\"}",
        "time": 0
      },
      {
        "transform": "{\"translateY\":\"-380px\"}",
        "time": 100
      }
    ],
    "navigationBarShowClose": [
      {
        "transform": "{\"translateY\":\"-380px\"}",
        "time": 0
      },
      {
        "transform": "{\"translateY\":\"0px\"}",
        "time": 100
      }
    ]
  },
  ".controller-bar-showed-minied": {
    "animationName": "controllerBarShowMini",
    "animationDuration": "500ms",
    "animationTimingFunction": "ease-in-out",
    "animationFillMode": "forwards"
  },
  ".store-info-bar": {
    "position": "absolute",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "paddingTop": "40px",
    "paddingRight": "40px",
    "paddingBottom": "40px",
    "paddingLeft": "40px",
    "alignItems": "flex-start",
    "bottom": "-400px",
    "width": "750px",
    "height": "400px",
    "zIndex": 101,
    "backgroundColor": "#ffffff",
    "borderTopLeftRadius": "30px",
    "borderTopRightRadius": "30px"
  },
  ".store-info-bar-showed-closed": {
    "animationName": "storeInfoBarShowClose",
    "animationDuration": "500ms",
    "animationTimingFunction": "ease-in-out",
    "animationFillMode": "forwards"
  },
  ".store-info-bar-closed-showed": {
    "animationName": "storeInfoBarCloseShow",
    "animationDuration": "500ms",
    "animationTimingFunction": "ease-in-out",
    "animationFillMode": "forwards"
  },
  ".store-info-bar .store-close": {
    "position": "absolute",
    "top": "40px",
    "right": "40px",
    "width": "48px",
    "height": "48px"
  },
  ".store-title": {
    "lines": 1,
    "textOverflow": "ellipsis",
    "fontWeight": "700",
    "fontSize": "40px",
    "color": "#222222",
    "width": "450px"
  },
  ".store-distance-location": {
    "marginTop": "10px",
    "marginRight": "0px",
    "marginBottom": "10px",
    "marginLeft": "0px",
    "fontSize": "26px",
    "color": "#555555",
    "fontFamily": "monospace"
  },
  ".store-detail-btn": {
    "width": "100%",
    "marginTop": "20px",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "height": "80px",
    "borderRadius": "35px"
  },
  ".store-detail-btn .store-detail-btn-text": {
    "fontWeight": "700",
    "fontSize": "30px"
  },
  ".store-controller-bar": {
    "position": "absolute",
    "paddingTop": "10px",
    "paddingRight": "30px",
    "paddingBottom": "10px",
    "paddingLeft": "30px",
    "bottom": "0px",
    "height": "120px",
    "width": "750px",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "alignItems": "center",
    "borderTopWidth": "1px",
    "borderTopStyle": "solid",
    "borderTopColor": "#cccccc"
  },
  ".store-controller-item": {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "flexDirection": "column"
  },
  ".store-controller-item-image": {
    "width": "48px",
    "height": "48px"
  },
  ".store-controller-item-text": {
    "fontSize": "20px"
  },
  ".store-controller-btns": {
    "display": "flex",
    "justifyContent": "space-between",
    "alignItems": "center",
    "width": "330px",
    "paddingTop": "10px",
    "paddingRight": "0px",
    "paddingBottom": "10px",
    "paddingLeft": "0px"
  },
  ".store-controller-btn": {
    "backgroundColor": "#FFFFFF",
    "paddingTop": "10px",
    "paddingRight": "10px",
    "paddingBottom": "10px",
    "paddingLeft": "10px",
    "width": "150px",
    "height": "80px",
    "borderRadius": "40px",
    "borderTopWidth": "4px",
    "borderRightWidth": "4px",
    "borderBottomWidth": "4px",
    "borderLeftWidth": "4px",
    "borderStyle": "solid",
    "borderTopColor": "#dddddd",
    "borderRightColor": "#dddddd",
    "borderBottomColor": "#dddddd",
    "borderLeftColor": "#dddddd",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".btn-primary": {
    "backgroundColor": "#008df8",
    "borderTopColor": "#FFFFFF",
    "borderRightColor": "#FFFFFF",
    "borderBottomColor": "#FFFFFF",
    "borderLeftColor": "#FFFFFF"
  },
  ".btn-primary .store-detail-btn-text": {
    "color": "#FFFFFF"
  },
  ".btn-primary .store-controller-btn-text": {
    "color": "#FFFFFF"
  },
  ".btn-primary .navi-bottom-btn-text": {
    "color": "#FFFFFF"
  },
  ".store-controller-btn-text": {
    "fontWeight": "700",
    "color": "#111111",
    "fontSize": "30px"
  },
  ".search-bar": {
    "position": "absolute",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "top": "-200px",
    "width": "700px",
    "zIndex": 100,
    "backgroundColor": "rgba(0,0,0,0)"
  },
  ".search-bar-searchbox": {
    "backgroundColor": "#FFFFFF",
    "marginBottom": "20px",
    "width": "100%",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "borderRadius": "30px"
  },
  ".search-bar-input": {
    "borderRadius": "15px",
    "width": "90%",
    "height": "80px"
  },
  ".search-bar-back": {
    "width": "48px",
    "height": "48px",
    "marginRight": "20px"
  },
  ".search-bar-results": {
    "width": "100%",
    "paddingTop": "10px",
    "paddingRight": "10px",
    "paddingBottom": "10px",
    "paddingLeft": "10px",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "30px",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".search-no-result": {
    "paddingTop": "30px",
    "paddingRight": "30px",
    "paddingBottom": "30px",
    "paddingLeft": "30px"
  },
  ".search-no-result-text": {
    "fontSize": "32px",
    "fontWeight": "700",
    "color": "#000000"
  },
  ".search-bar-result": {
    "width": "100%",
    "paddingTop": "10px",
    "paddingRight": "10px",
    "paddingBottom": "10px",
    "paddingLeft": "10px",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  ".search-result-title-desc": {
    "width": "80%",
    "marginTop": "10px",
    "marginRight": "30px",
    "marginBottom": "10px",
    "marginLeft": "30px",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "flex-end",
    "paddingBottom": "20px",
    "borderBottomWidth": "3px",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#dddddd"
  },
  ".search-result-title": {
    "fontSize": "35px",
    "fontWeight": "700",
    "color": "#000000"
  },
  ".search-result-desc": {
    "fontSize": "35px",
    "fontWeight": "700",
    "color": "#222222"
  },
  ".search-result-route": {
    "width": "80px",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "marginRight": "20px"
  },
  ".search-result-route-image": {
    "width": "64px",
    "height": "64px"
  },
  ".search-result-route-text": {
    "fontSize": "24px"
  },
  ".search-result-icon": {
    "height": "48px",
    "width": "48px",
    "marginLeft": "20px"
  },
  ".search-bar-closed-showed": {
    "animationName": "searchBarCloseShow",
    "animationDuration": "500ms",
    "animationTimingFunction": "ease-in-out",
    "animationFillMode": "forwards"
  },
  ".search-bar-showed-closed": {
    "animationName": "searchBarShowClose",
    "animationDuration": "500ms",
    "animationTimingFunction": "ease-in-out",
    "animationFillMode": "forwards"
  },
  ".navigation-bar": {
    "position": "absolute",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "center",
    "bottom": "-380px",
    "width": "750px",
    "height": "380px",
    "zIndex": 103,
    "backgroundColor": "#FFFFFF",
    "borderTopLeftRadius": "30px",
    "borderTopRightRadius": "30px",
    "paddingTop": "20px",
    "paddingRight": "50px",
    "paddingBottom": "20px",
    "paddingLeft": "50px"
  },
  ".navigation-bar-closed-showed": {
    "animationName": "navigationBarCloseShow",
    "animationTimingFunction": "ease-in-out",
    "animationDuration": "500ms",
    "animationFillMode": "forwards"
  },
  ".navigation-bar-showed-closed": {
    "animationName": "navigationBarShowClose",
    "animationTimingFunction": "ease-in-out",
    "animationDuration": "500ms",
    "animationFillMode": "forwards"
  },
  ".navigation-bar-title-remain": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "borderBottomWidth": "4px",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#dddddd"
  },
  ".navigation-bar-title": {
    "fontWeight": "800",
    "fontSize": "32px",
    "color": "#666666",
    "textAlign": "left",
    "width": "100%",
    "paddingTop": "10px"
  },
  ".navigation-bar-remain": {
    "textAlign": "left",
    "width": "100%",
    "marginBottom": "10px",
    "paddingBottom": "10px",
    "fontWeight": "800",
    "color": "#666666",
    "fontSize": "20px"
  },
  ".navigation-bar-desc-wrap": {
    "width": "100%",
    "display": "flex",
    "height": "120px",
    "marginTop": "10px",
    "marginRight": "0px",
    "marginBottom": "10px",
    "marginLeft": "0px",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  ".navigation-icon": {
    "width": "84px",
    "height": "84px"
  },
  ".navigation-desc": {
    "display": "flex",
    "width": "60%",
    "textAlign": "left",
    "flexDirection": "column",
    "lineHeight": "100px",
    "paddingTop": "0px",
    "paddingRight": "10px",
    "paddingBottom": "0px",
    "paddingLeft": "10px"
  },
  ".navigation-cur-desc": {
    "lines": 1,
    "textOverflow": "ellipsis",
    "fontSize": "40px",
    "fontWeight": "800",
    "color": "#008df8"
  },
  ".navigation-next-desc": {
    "lines": 1,
    "textOverflow": "ellipsis",
    "fontSize": "20px",
    "fontWeight": "800",
    "color": "#888888"
  },
  ".navigation-time": {
    "fontSize": "28px",
    "fontWeight": "800",
    "width": "20%",
    "height": "100px",
    "textAlign": "right",
    "textOverflow": "ellipsis",
    "lines": 1
  },
  ".navi-bottom-btns": {
    "position": "absolute",
    "bottom": "0px",
    "width": "100%",
    "height": "120px",
    "display": "flex",
    "flexDirection": "row"
  },
  ".navi-bottom-btn": {
    "marginBottom": "40px",
    "marginLeft": "10px",
    "marginRight": "10px",
    "width": "100%",
    "borderRadius": "40px",
    "display": "flex",
    "borderTopWidth": "4px",
    "borderRightWidth": "4px",
    "borderBottomWidth": "4px",
    "borderLeftWidth": "4px",
    "borderStyle": "solid",
    "borderTopColor": "#eeeeee",
    "borderRightColor": "#eeeeee",
    "borderBottomColor": "#eeeeee",
    "borderLeftColor": "#eeeeee",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".navi-bottom-btn-text": {
    "fontWeight": "700"
  },
  ".title": {
    "fontSize": "100px"
  },
  ".tab-img": {
    "width": "64px",
    "height": "64px"
  },
  ".tab-text": {
    "fontSize": "24px",
    "fontWeight": "700"
  }
}

/***/ }),

/***/ "./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./src/Indoor/Indoor.ux":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./src/Indoor/Indoor.ux ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "container"
  ],
  "children": [
    {
      "type": "tabs",
      "attr": {},
      "events": {
        "change": "onTabIdxChange"
      },
      "children": [
        {
          "type": "tab-content",
          "attr": {
            "scrollable": "false"
          },
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "map"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "web-container"
                  ],
                  "children": [
                    {
                      "type": "web",
                      "attr": {
                        "id": "web",
                        "src": function () {return this.src},
                        "trustedurl": function () {return this.trustedurl}
                      },
                      "id": "web",
                      "events": {
                        "message": "onWebMessage",
                        "pagefinish": "onWebPageFinish",
                        "titlereceive": "onTitlereceive"
                      }
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {
                    "id": "cwrap"
                  },
                  "classList": function () {return ['controller-bar', this.controllerBarStatus]},
                  "id": "cwrap",
                  "events": {
                    "touchmove": "onTouchMoveControllerBar",
                    "touchstart": "onTouchStartControllerBar",
                    "touchend": "onTouchingEndControllerBar",
                    "click": "controllerBarClickDelegator"
                  },
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "small_bar"
                      ],
                      "events": {
                        "click": "toggleControllerBarStatus"
                      },
                      "children": [
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "inner_bar"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "features_bar"
                      ],
                      "children": [
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "search_box"
                          ],
                          "events": {
                            "click": "openSearchBar"
                          },
                          "children": [
                            {
                              "type": "image",
                              "attr": {
                                "src": "/Common/search3.svg"
                              },
                              "classList": [
                                "search_btn"
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": "您要去哪儿？"
                              },
                              "classList": [
                                "search_box_text"
                              ]
                            }
                          ]
                        },
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "functions_row"
                          ],
                          "children": [
                            {
                              "type": "div",
                              "attr": {},
                              "classList": [
                                "function_item"
                              ],
                              "events": {
                                "click": "switchViewMode"
                              },
                              "children": [
                                {
                                  "type": "image",
                                  "attr": {
                                    "src": "/Common/3d.svg",
                                    "alt": "视图切换"
                                  },
                                  "classList": [
                                    "function_image"
                                  ]
                                },
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": function () {return this.curViewMode}
                                  },
                                  "classList": [
                                    "function_text"
                                  ]
                                }
                              ]
                            },
                            {
                              "type": "div",
                              "attr": {},
                              "classList": [
                                "function_item"
                              ],
                              "events": {
                                "click": "switchFloor"
                              },
                              "children": [
                                {
                                  "type": "image",
                                  "attr": {
                                    "src": "/Common/层级.svg",
                                    "alt": "楼层切换"
                                  },
                                  "classList": [
                                    "function_image"
                                  ],
                                  "style": {
                                    "width": "96px",
                                    "height": "96px"
                                  }
                                },
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": function () {return (this.curVisibleFloorNum)+'层'}
                                  },
                                  "classList": [
                                    "function_text"
                                  ]
                                }
                              ]
                            },
                            {
                              "type": "div",
                              "attr": {},
                              "classList": [
                                "function_item"
                              ],
                              "events": {
                                "click": "switchMapMode"
                              },
                              "children": [
                                {
                                  "type": "image",
                                  "attr": {
                                    "src": "/Common/热力图.svg",
                                    "alt": "地图/热力图"
                                  },
                                  "classList": [
                                    "function_image"
                                  ]
                                },
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": function () {return '显示'+(this.curMapMode==='map'?'热力图':'地图')}
                                  },
                                  "classList": [
                                    "function_text"
                                  ]
                                }
                              ]
                            },
                            {
                              "type": "div",
                              "attr": {},
                              "classList": [
                                "function_item"
                              ],
                              "events": {
                                "click": "focusMySelf"
                              },
                              "children": [
                                {
                                  "type": "image",
                                  "attr": {
                                    "src": "/Common/定位.svg",
                                    "alt": "锁定自己"
                                  },
                                  "classList": [
                                    "function_image"
                                  ]
                                },
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": "锁定自己"
                                  },
                                  "classList": [
                                    "function_text"
                                  ]
                                }
                              ]
                            },
                            {
                              "type": "div",
                              "attr": {},
                              "classList": [
                                "function_item"
                              ],
                              "events": {
                                "click": "showEmergencyEvents"
                              },
                              "children": [
                                {
                                  "type": "image",
                                  "attr": {
                                    "src": "/Common/紧急.svg",
                                    "alt": "更新紧急事件"
                                  },
                                  "classList": [
                                    "function_image"
                                  ]
                                },
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": "更新紧急事件"
                                  },
                                  "classList": [
                                    "function_text"
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "nearby"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "nearbyTitle"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": "探索"
                      },
                      "classList": [
                        "sidetitle"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return ' '+(this.curCameraName||'未知')+' '}
                      },
                      "classList": [
                        "cameraName"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": "的附近"
                      },
                      "classList": [
                        "sidetitle"
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "nearbyCoupon"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "header"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": "附近优惠"
                          },
                          "classList": [
                            "couponTit"
                          ]
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": "详细 ᐳ"
                          },
                          "classList": [
                            "couponMore"
                          ],
                          "events": {
                            "click": "notSupported"
                          }
                        }
                      ]
                    },
                    {
                      "type": "list",
                      "attr": {},
                      "classList": [
                        "mainCoupons"
                      ],
                      "shown": function () {return this.normalCoupons.length>0},
                      "events": {
                        "scrollbottom": function(evt){this.onScrollBottom('normal',evt)}
                      },
                      "children": [
                        {
                          "type": "block",
                          "attr": {},
                          "repeat": function () {return this.normalCoupons},
                          "children": [
                            {
                              "type": "list-item",
                              "attr": {
                                "type": "product"
                              },
                              "classList": [
                                "mainCoupon"
                              ],
                              "events": {
                                "click": "onNormalCoupon"
                              },
                              "children": [
                                {
                                  "type": "image",
                                  "attr": {
                                    "src": function () {return `https://placeimg.com/180/120/nature`},
                                    "alt": "mockImage"
                                  },
                                  "classList": [
                                    "stuffImg"
                                  ]
                                },
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": function () {return this.$item.title}
                                  },
                                  "classList": [
                                    "stuffName"
                                  ]
                                },
                                {
                                  "type": "div",
                                  "attr": {},
                                  "classList": [
                                    "price"
                                  ],
                                  "children": [
                                    {
                                      "type": "text",
                                      "attr": {
                                        "value": function () {return this.$item.newPrice}
                                      },
                                      "classList": [
                                        "newPrice"
                                      ]
                                    },
                                    {
                                      "type": "text",
                                      "attr": {
                                        "value": function () {return this.$item.oldPrice}
                                      },
                                      "classList": [
                                        "oldPrice"
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": function () {return this.$item.store}
                                  },
                                  "classList": [
                                    "storeName"
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "loading"
                      ],
                      "shown": function () {return !(this.normalCoupons.length>0)},
                      "children": [
                        {
                          "type": "progress",
                          "attr": {
                            "type": "circular"
                          }
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": "正在加载"
                          },
                          "classList": [
                            "loading"
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "nearbyCoupon"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "header"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": "VIP优惠"
                          },
                          "classList": [
                            "couponTit"
                          ]
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": "详细 ᐳ"
                          },
                          "classList": [
                            "couponMore"
                          ],
                          "events": {
                            "click": "notSupported"
                          }
                        }
                      ]
                    },
                    {
                      "type": "list",
                      "attr": {},
                      "classList": [
                        "mainCoupons"
                      ],
                      "shown": function () {return this.vipCoupons.length>0},
                      "children": [
                        {
                          "type": "block",
                          "attr": {},
                          "repeat": function () {return this.vipCoupons},
                          "children": [
                            {
                              "type": "list-item",
                              "attr": {
                                "type": "product"
                              },
                              "classList": [
                                "mainCoupon"
                              ],
                              "events": {
                                "click": "onVipCoupon"
                              },
                              "children": [
                                {
                                  "type": "image",
                                  "attr": {
                                    "src": function () {return `https://placeimg.com/180/120/any`},
                                    "alt": "mockImage"
                                  },
                                  "classList": [
                                    "stuffImg"
                                  ]
                                },
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": function () {return this.$item.title}
                                  },
                                  "classList": [
                                    "stuffName"
                                  ]
                                },
                                {
                                  "type": "div",
                                  "attr": {},
                                  "classList": [
                                    "price"
                                  ],
                                  "children": [
                                    {
                                      "type": "text",
                                      "attr": {
                                        "value": function () {return this.$item.newPrice}
                                      },
                                      "classList": [
                                        "newPrice"
                                      ]
                                    },
                                    {
                                      "type": "text",
                                      "attr": {
                                        "value": function () {return this.$item.oldPrice}
                                      },
                                      "classList": [
                                        "oldPrice"
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": function () {return this.$item.store}
                                  },
                                  "classList": [
                                    "storeName"
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "list-item",
                          "attr": {
                            "type": "loadMore"
                          },
                          "classList": [
                            "loadMore"
                          ],
                          "events": {
                            "click": function(evt){this.onScrollBottom('vip',evt)}
                          },
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": "加载更多"
                              },
                              "classList": [
                                "loadMoreText"
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "loading"
                      ],
                      "shown": function () {return !(this.vipCoupons.length>0)},
                      "children": [
                        {
                          "type": "progress",
                          "attr": {
                            "type": "circular"
                          }
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": "正在加载"
                          },
                          "classList": [
                            "loading"
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "nearbyRecommendation"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "header"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": "为你推荐"
                          },
                          "classList": [
                            "nearbyRecommendationTitle"
                          ]
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": "发现精品好店"
                          },
                          "classList": [
                            "description"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "recommendations"
                      ],
                      "shown": function () {return this.recommendationList.length>0},
                      "children": [
                        {
                          "type": "div",
                          "attr": {
                            "type": "recommendation-item"
                          },
                          "classList": [
                            "recommendation"
                          ],
                          "repeat": function () {return this.recommendationList},
                          "children": [
                            {
                              "type": "div",
                              "attr": {},
                              "classList": [
                                "main"
                              ],
                              "children": [
                                {
                                  "type": "image",
                                  "attr": {
                                    "src": function () {return `https://i.picsum.photos/id/${this.$item.imgID}/200/200.jpg`},
                                    "alt": "mockImg"
                                  },
                                  "classList": [
                                    "recommendation-img"
                                  ]
                                },
                                {
                                  "type": "div",
                                  "attr": {},
                                  "classList": [
                                    "desc"
                                  ],
                                  "children": [
                                    {
                                      "type": "text",
                                      "attr": {
                                        "value": function () {return this.$item.storeName}
                                      },
                                      "classList": [
                                        "storeTitle"
                                      ]
                                    },
                                    {
                                      "type": "text",
                                      "attr": {
                                        "value": function () {return (this.$item.rating)+'分'}
                                      },
                                      "classList": [
                                        "storeRates"
                                      ]
                                    },
                                    {
                                      "type": "text",
                                      "attr": {
                                        "value": function () {return '距你'+(this.$item.distance)+'米'}
                                      },
                                      "classList": [
                                        "storeDistance"
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "type": "div",
                              "attr": {},
                              "classList": [
                                "footer"
                              ],
                              "children": [
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": function () {return '\"'+(this.$item.comment)+'\"'}
                                  },
                                  "classList": [
                                    "comment"
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "loading"
                      ],
                      "shown": function () {return !(this.recommendationList.length>0)},
                      "children": [
                        {
                          "type": "progress",
                          "attr": {
                            "type": "circular"
                          }
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": "正在加载"
                          },
                          "classList": [
                            "loading"
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "tab-bar",
          "attr": {},
          "classList": [
            "tab-container"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "tab-content"
              ],
              "repeat": function () {return this.tablist},
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.$item.render?this.$item.curl:this.$item.nurl}
                  },
                  "classList": [
                    "tab-img"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.$item.title}
                  },
                  "classList": [
                    "tab-text"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": function () {return ['store-info-bar', this.storeInfoBarStatus]},
      "events": {
        "click": "preventEventPenetration"
      },
      "children": [
        {
          "type": "image",
          "attr": {
            "src": "/Common/close.svg",
            "alt": "关闭"
          },
          "classList": [
            "store-close"
          ],
          "events": {
            "click": "closeStoreInfoBar"
          }
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.curStoreInfo.name}
          },
          "classList": [
            "store-title"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return '距您'+(this.curStoreInfo.distance)+' | '+(this.curStoreInfo.location)}
          },
          "classList": [
            "store-distance-location"
          ]
        },
        {
          "type": "div",
          "attr": {
            "show": function () {return this.curStoreInfo.name!=='房间'}
          },
          "classList": [
            "store-detail-btn",
            "btn-primary"
          ],
          "events": {
            "click": "viewStoreDetail"
          },
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "查看店铺"
              },
              "classList": [
                "store-detail-btn-text"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "store-controller-bar"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "store-controller-item"
              ],
              "events": {
                "click": "toggleSearchBar"
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/Common/搜索.svg",
                    "alt": "功能图片"
                  },
                  "classList": [
                    "store-controller-item-image"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "搜索"
                  },
                  "classList": [
                    "store-controller-item-text"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "store-controller-item"
              ],
              "events": {
                "click": "notSupported"
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/Common/收藏2.svg",
                    "alt": "功能图片"
                  },
                  "classList": [
                    "store-controller-item-image"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "收藏"
                  },
                  "classList": [
                    "store-controller-item-text"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "store-controller-item"
              ],
              "events": {
                "click": "notSupported"
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/Common/分享2.svg",
                    "alt": "功能图片"
                  },
                  "classList": [
                    "store-controller-item-image"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "分享"
                  },
                  "classList": [
                    "store-controller-item-text"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "store-controller-btns"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "store-controller-btn"
                  ],
                  "events": {
                    "click": "showRoutes"
                  },
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": "路线"
                      },
                      "classList": [
                        "store-controller-btn-text"
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "store-controller-btn",
                    "btn-primary"
                  ],
                  "events": {
                    "click": "beginNavigation"
                  },
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": "导航"
                      },
                      "classList": [
                        "store-controller-btn-text"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": function () {return ['search-bar', this.searchBarStatus]},
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "search-bar-searchbox"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/Common/返回.svg",
                "alt": "返回"
              },
              "classList": [
                "search-bar-back"
              ],
              "events": {
                "click": "closeSearchBar"
              }
            },
            {
              "type": "input",
              "attr": {
                "type": "text",
                "id": "search-bar-input",
                "placeholder": "搜索",
                "value": function () {return this.searchValue}
              },
              "id": "search-bar-input",
              "classList": [
                "search-bar-input"
              ],
              "events": {
                "change": "on_search_value_changed"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "search-bar-results"
          ],
          "shown": function () {return this.isSearching},
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "search-no-result"
              ],
              "shown": function () {return this.searchResult.length===0},
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "无结果"
                  },
                  "classList": [
                    "search-no-result-text"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "search-bar-result"
              ],
              "repeat": function () {return this.searchResult},
              "shown": function () {return this.searchResult.length>0&&!(this.searchResult.length===0)},
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/Common/坐标.svg",
                    "alt": "坐标"
                  },
                  "classList": [
                    "search-result-icon"
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "search-result-title-desc"
                  ],
                  "events": {
                    "click": function(evt){this.focusOnStore(this.$item.id,this.$item.name,evt)}
                  },
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.$item.name}
                      },
                      "classList": [
                        "search-result-title"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.$item.id}
                      },
                      "classList": [
                        "search-result-desc"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": function () {return ['navigation-bar', this.navigationBarStatus]},
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "navigation-bar-title-remain"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return '正在前往 '+(this.navigationDescription.name)}
              },
              "classList": [
                "navigation-bar-title"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return '还剩 '+(this.navigationDescription.remain)}
              },
              "classList": [
                "navigation-bar-remain"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "navigation-bar-desc-wrap"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/Common/front.svg",
                "alt": "导航图标"
              },
              "classList": [
                "navigation-icon"
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "navigation-desc"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.navigationDescription.desc}
                  },
                  "classList": [
                    "navigation-cur-desc"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.navigationDescription.next}
                  },
                  "classList": [
                    "navigation-next-desc"
                  ]
                }
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.navigationDescription.time}
              },
              "classList": [
                "navigation-time"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "navi-bottom-btns"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "navi-bottom-btn"
              ],
              "events": {
                "click": "resetNavigation"
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "重置导航"
                  },
                  "classList": [
                    "navi-bottom-btn-text"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "navi-bottom-btn",
                "btn-primary"
              ],
              "events": {
                "click": "cancelNavigation"
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "取消导航"
                  },
                  "classList": [
                    "navi-bottom-btn-text"
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/preset-env&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./src/Indoor/Indoor.ux":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./node_modules/babel-loader/lib?presets[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/preset-env&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./src/Indoor/Indoor.ux ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.bluetooth"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _bt = _interopRequireDefault(__webpack_require__(/*! ../Common/bt.js */ "./src/Common/bt.js"));

var _system4 = _interopRequireDefault($app_require$("@app-module/system.audio"));

var _system5 = _interopRequireDefault($app_require$("@app-module/system.storage"));

var _const = __webpack_require__(/*! ../const.js */ "./src/const.js");

var _system6 = _interopRequireDefault($app_require$("@app-module/system.sensor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = {
  public: {
    routeFrom: ''
  },
  protected: {
    title: 'World',
    trustedurl: [_const.webUrl],
    unSrc: _const.ucUrl,
    src: _const.webUrl,
    searchBarStatus: '',
    controllerBarStatus: '',
    storeInfoBarStatus: '',
    navigationBarStatus: '',
    curStoreInfo: {
      id: '',
      name: '必胜客',
      location: '商场一层A37',
      distance: '300米'
    },
    navigationDescription: {
      name: '未知',
      desc: '正在加载',
      next: '正在加载',
      time: '未知',
      remain: '未知'
    },
    isTouchingControllerBar: false,
    cannotCancel: false,
    curViewMode: '2D',
    curVisibleFloorNum: 1,
    curUserFloorNum: 1,
    curDirection: 45,
    destinationCameraID: 0,
    curCameraID: -1,
    lastCameraID: -2,
    curX: '',
    curY: '',
    curCameraName: '',
    curMapMode: 'map',
    tablist: [{
      title: '地图',
      render: false,
      nurl: '../Common/地图_nor.svg',
      curl: '../Common/地图_act.svg'
    }, {
      title: '附近',
      render: false,
      nurl: '../Common/附近活动_nor.svg',
      curl: '../Common/附近活动_act.svg'
    }],
    isSearching: false,
    searchResult: [],
    searchValue: '',
    locationUpdateIntervalID: 0,
    normalCoupons: [],
    vipCoupons: [],
    recommendationList: []
  },
  onInit: function () {
    console.log("来自", this.routeFrom);
  },
  onShow: function () {
    const that = this;

    _system6.default.subscribeCompass({
      callback: function (ret) {
        let result = 180 / Math.PI * ret.direction;
        that.curDirection = -result;
      }
    });
  },
  onHide: function () {
    clearInterval(this.locationUpdateIntervalID);

    _system6.default.unsubscribeCompass();
  },

  onTabIdxChange(evt) {
    this.modifyListItemData(evt.index);

    if (evt.index === 1) {
      this.initNearByData();
    }
  },

  modifyListItemData(index) {
    this.tablist.forEach(element => {
      element.render = false;
    });
    this.tablist[index].render = true;
  },

  initNearByData() {
    setTimeout(() => {
      this.recommendationList = [{
        imgID: 111,
        storeName: '麦当劳',
        rating: '4.6',
        distance: '13.4',
        comment: '好吃好玩好实惠~'
      }, {
        imgID: 112,
        storeName: '必胜客',
        rating: '4.4',
        distance: '32.4',
        comment: '披萨超级大，吃的超过瘾～'
      }, {
        imgID: 110,
        storeName: '星巴克',
        rating: '4.9',
        distance: '36.2',
        comment: '看书、聊天、装13的最佳去处～'
      }, {
        imgID: 171,
        storeName: '圣玛丽',
        rating: '3.7',
        distance: '26.3',
        comment: '很好的店铺～装修的很好～'
      }, {
        imgID: 145,
        storeName: '肯德基',
        rating: '4.5',
        distance: '17.6',
        comment: '小孩比较爱吃，大人就是陪孩子吃吃罢了～'
      }];
      this.normalCoupons = [{
        imgID: 123,
        title: '海盐黑金咖啡',
        oldPrice: '¥51',
        newPrice: '¥25.5',
        store: '海岩咖啡'
      }, {
        imgID: 129,
        title: '奶茶三兄弟',
        oldPrice: '¥6.5',
        newPrice: '¥13',
        store: 'CoCo都可'
      }, {
        imgID: 133,
        title: '海底捞30元优惠券',
        oldPrice: '¥30',
        newPrice: '¥28.8',
        store: '海底捞'
      }, {
        imgID: 134,
        title: '夏威夷水果披萨9寸',
        oldPrice: '¥19.9',
        newPrice: '¥9.9',
        store: '大嘴巴意式披萨'
      }];
      this.vipCoupons = [{
        imgID: 110,
        title: '海盐黑金咖啡',
        oldPrice: '¥51',
        newPrice: '¥15.5',
        store: '海岩咖啡'
      }, {
        imgID: 141,
        title: '奶茶三兄弟',
        oldPrice: '¥3.5',
        newPrice: '¥13',
        store: 'CoCo都可'
      }, {
        imgID: 132,
        title: '海底捞30元优惠券',
        oldPrice: '¥30',
        newPrice: '¥25.8',
        store: '海底捞'
      }, {
        imgID: 131,
        title: '夏威夷水果披萨9寸',
        oldPrice: '¥19.9',
        newPrice: '¥5.9',
        store: '大嘴巴意式披萨'
      }];
    }, 1500);
  },

  beginSyncLocation() {
    this.locationUpdateIntervalID = setInterval(async () => {
      if (global.productiontip === 'dev') {
        if (this.destinationCameraID !== 0) {
          this.curCameraID = this.destinationCameraID;
        } else {
          this.curCameraID = 76638;
        }

        if (this.curCameraID !== this.lastCameraID) {
          this.lastCameraID = this.curCameraID;
          const res = await _system3.default.fetch({
            url: `${_const.baseUrl}/getCamera?id=${this.curCameraID}`
          }).catch(e => {
            console.log(e);
          });
          const result = res.data;

          if (result.code === 200) {
            console.log("获取camera");
            const cameraInfo = JSON.parse(result.data);
            this.curCameraName = cameraInfo.position;
            this.curX = cameraInfo.latitude;
            this.curY = cameraInfo.longitude;
            this.curUserFloorNum = cameraInfo.floor;
            console.log(this.curX);
            console.log(this.curY);
          } else {
            _system.default.showToast({
              message: 'getCamera 出错'
            });
          }
        }
      } else {}

      this.universalRefreshProcess(this.curCameraID);
    }, 200);
    this.openControllerBar();
  },

  onWebPageStart() {},

  onWebPageFinish() {
    console.log("Page Finished");
  },

  onTitlereceive({
    title: data
  }) {
    this.$page.setTitleBar({
      text: data
    });
  },

  onWebError() {},

  onWebMessage(e) {
    console.log(e.message);
    const symbol = e.message.slice(0, 3);

    if (symbol !== 'Web') {
      return;
    }

    const info = e.message.slice(3);
    this.runProtocol(info);
  },

  postToWeb(data) {
    if (typeof data === "object") {
      this.$element('web').postMessage({
        message: `Hap${JSON.stringify(data)}`
      });
    } else if (typeof data === "string") {
      this.$element('web').postMessage({
        message: `Hap${data}`
      });
    }
  },

  onTouchMoveControllerBar: function (event) {},
  onTouchStartControllerBar: function () {
    this.isTouchingControllerBar = true;
  },
  onTouchingEndControllerBar: function () {
    this.isTouchingControllerBar = false;
  },

  async runProtocol(info) {
    let res = (0, _const.isJSON)(info);

    if (typeof res === "object") {
      const type = res.type;
      const detail = res.detail;
      console.log("处理高级信号");
      console.log(type);
      console.log(detail);

      switch (type) {
        case 'storeInfo':
          if (typeof detail === 'object') {
            this.curStoreInfo.id = detail.id;
            this.curStoreInfo.name = detail.name;
            this.openStoreInfoBar();
            let res = await _system3.default.fetch({
              url: `${_const.baseUrl}/getCamera?id=${detail.id}`
            }).catch(err => console.log(err));
            const result = res.data;

            if (result.code === 200) {
              console.log("导航");
              const d = JSON.parse(result.data);
              this.curStoreInfo.location = d.logicalPosition;
              this.curStoreInfo.distance = this.calcDistanceByLL(d.latitude, d.longitude);
            }
          }

          break;

        case 'searchResult':
          if (Array.isArray(detail)) {
            this.searchResult = detail.slice(0, 6);
          } else {
            _system.default.showToast({
              message: 'detail数据类型错误'
            });
          }

          break;

        case "naviDesc":
          this.navigationDescription = _objectSpread({
            name: this.navigationDescription.name
          }, detail);
          break;

        case "errorInfo":
          console.log("收到errorInfo");

          if (typeof detail !== 'object') {
            detail = JSON.parse(detail);
          }

          _system.default.showDialog({
            title: detail.errorTitle,
            message: detail.errorInfo,
            buttons: [{
              text: "好吧",
              color: '#33dd44'
            }],
            success: function (data) {
              console.log('handling callback');
            },
            cancel: function (data) {
              console.log('handling cancel');
            },
            fail: function (data, code) {
              console.log(`handling fail, code = ${code}`);
            }
          });

          break;

        case 'ret':
          this.processReturnProperty(detail);
          break;

        default:
          break;
      }
    } else if (typeof res === "boolean") {
      switch (info) {
        case "Ready":
          this.beginSyncLocation();
          setTimeout(async () => {
            switch (this.routeFrom) {
              case "Urgency":
                let res = await _system3.default.fetch({
                  url: `${_const.baseUrl}/getBestPath?cameraid=${this.curCameraID}`
                }).catch(err => {
                  console.log("Error GBP", err);
                });
                let result = res.data;

                if (result.code === 200) {
                  const epMsg = {
                    type: 'route',
                    detail: JSON.parse(result.data)
                  };
                  this.postToWeb(epMsg);
                } else {
                  console.error("Bad Response, Code:", result.code);
                }

                break;

              case "EmergencyEvents":
                this.showEmergencyEvents();
                break;

              default:
                break;
            }
          }, 200);
          break;

        default:
          break;
      }
    } else {
      console.error("Type Error in isJSON");
    }
  },

  async processReturnProperty(msg) {
    if (typeof msg === 'string') {
      switch (msg) {
        case "2D":
          this.curViewMode = "2D";
          break;

        case "3D":
          this.curViewMode = "3D";
          break;

        case "HeatMap":
          this.curMapMode = "heatmap";
          break;

        case "Map":
          this.curMapMode = "map";
          break;

        case "F1":
        case "F2":
        case "F3":
          this.curVisibleFloorNum = msg.slice(1);
          break;

        case "NaviBegin":
          _system.default.showToast({
            message: '模拟导航开始'
          });

          let res = await _system3.default.fetch({
            url: `${_const.baseUrl}/getRandomPromoteAudioUrl`
          }).catch(err => console.error(err));
          let result = res.data;

          if (result.code === 200) {
            let audioUrl = result.data;
            _system4.default.src = audioUrl.split('"')[1];
            console.log(_system4.default);
            _system4.default.notificationVisible = false;
            _system4.default.loop = false;
            _system4.default.autoplay = true;

            _system4.default.onerror = function (e) {
              console.log("错误", e);
            };
          } else {
            _system.default.showToast({
              message: "音频接口错误"
            });
          }

          this.cannotCancel = true;
          setTimeout(() => {
            this.cannotCancel = false;
          }, 3000);
          this.openNavigationBar();
          this.toggleSearchBar("closed");
          break;

        case "NaviEnd":
          _system.default.showToast({
            message: '您已到达目的地\n模拟导航结束'
          });

          this.closeNavigationBar();
          setTimeout(() => {
            this.beginSyncLocation();
          }, 200);
          break;

        case "NaviCancel":
          _system.default.showToast({
            message: '您已取消模拟导航'
          });

          this.closeNavigationBar();
          setTimeout(() => {
            this.beginSyncLocation();
          }, 200);
          break;

        case "PER":
          _system.default.showToast({
            message: '后端路径节点问题'
          });

          break;

        case "ERROR":
          _system.default.showToast({
            message: '未知错误！'
          });

          break;

        default:
          console.log(`返回属性：${msg}`);
          break;
      }
    }
  },

  toggleControllerBarStatus: function (type) {
    console.log("点击之前状态");
    console.log(this.controllerBarStatus);

    if (typeof type === 'string') {
      if (type === 'showed') {
        this.controllerBarStatus = 'controller-bar-minied-showed';
      } else if (type === 'minied' && this.controllerBarStatus === 'controller-bar-minied-showed') {
        console.log("最小化控制栏");
        this.controllerBarStatus = 'controller-bar-showed-minied';
      }

      return;
    }

    if (this.controllerBarStatus === '') {
      this.controllerBarStatus = 'controller-bar-minied-showed';
      return;
    }

    this.controllerBarStatus = this.controllerBarStatus === 'controller-bar-minied-showed' ? 'controller-bar-showed-minied' : 'controller-bar-minied-showed';
    console.log("点击之后状态");
    console.log(this.controllerBarStatus);
  },
  controllerBarClickDelegator: function (event) {},
  on_search_value_changed: function (e) {
    this.searchValue = e.text;

    if (this.searchValue !== "") {
      this.isSearching = true;
      const searchMsg = {
        type: 'search',
        detail: {
          keyword: this.searchValue
        }
      };
      this.postToWeb(searchMsg);
    } else {
      this.searchResult = [];
    }
  },
  switchViewMode: function () {
    this.postToWeb(this.curViewMode === '2D' ? '3D' : '2D');
  },
  switchFloor: function () {
    this.postToWeb(`F${this.curVisibleFloorNum % 3 + 1}`);
  },
  switchMapMode: function () {
    if (this.curMapMode === 'map') {
      const applyHeatMapMsg = {
        type: 'applyHeatMap',
        detail: null
      };
      this.postToWeb(JSON.stringify(applyHeatMapMsg));
    } else {
      const removeHeatMapMsg = {
        type: 'removeHeatMap',
        detail: null
      };
      this.postToWeb(JSON.stringify(removeHeatMapMsg));
    }
  },
  toggleStoreInfoBar: function (type, isNavi) {
    if (typeof type === 'string') {
      if (type === 'showed') {
        this.storeInfoBarStatus = 'store-info-bar-closed-showed';
      } else if (type === 'closed') {
        this.storeInfoBarStatus = 'store-info-bar-showed-closed';

        if (typeof isNavi === 'boolean') {
          return;
        }

        this.toggleControllerBarStatus('showed');
      }

      return;
    }

    if (this.storeInfoBarStatus === '') {
      this.storeInfoBarStatus = 'store-info-bar-closed-showed';
      return;
    }

    console.log(this.storeInfoBarStatus);
    this.storeInfoBarStatus = this.storeInfoBarStatus === 'store-info-bar-showed-closed' ? 'store-info-bar-closed-showed' : 'store-info-bar-showed-closed';
  },
  preventEventPenetration: function () {},
  viewStoreDetail: function () {
    _system.default.showToast({
      message: '暂不支持',
      duration: 2000
    });
  },

  universalRefreshProcess(val) {
    const msg = {
      type: 'loc',
      detail: {
        x: this.curX,
        y: this.curY,
        floorNum: this.curUserFloorNum,
        direction: this.curDirection
      }
    };
    this.postToWeb(msg);
  },

  randomCurLocationInfoGenerator() {
    let xRange = [_const.mapObject.minX, _const.mapObject.maxX];
    let yRange = [_const.mapObject.minY, _const.mapObject.maxY];
    let randX = Math.floor(Math.random() * Math.ceil(xRange[1] - xRange[0])) + xRange[0];
    let randY = Math.floor(Math.random() * Math.ceil(yRange[1] - yRange[0])) + yRange[0];
    let randDirection = Math.floor(Math.random() * 360);
    return {
      randX,
      randY,
      randDirection
    };
  },

  toggleSearchBar: function (type) {
    console.log(this.searchBarStatus);

    if (typeof type === 'string') {
      if (type === 'showed') {
        this.searchBarStatus = 'search-bar-closed-showed';
      } else if (type === 'closed' && this.searchBarStatus === 'search-bar-closed-showed') {
        this.searchBarStatus = 'search-bar-showed-closed';
      }

      return;
    }

    if (this.searchBarStatus === '') {
      this.searchBarStatus = 'search-bar-closed-showed';
      return;
    }

    this.searchBarStatus = this.searchBarStatus === 'search-bar-closed-showed' ? 'search-bar-showed-closed' : 'search-bar-closed-showed';
  },

  openSearchBar() {
    if (this.controllerBarStatus === 'controller-bar-minied-showed') {
      this.toggleControllerBarStatus('minied');
    }

    if (this.storeInfoBarStatus === 'store-info-bar-closed-showed') {
      this.toggleStoreInfoBar('closed');
    }

    setTimeout(() => {
      this.toggleSearchBar('showed');
    }, 100);
  },

  closeSearchBar() {
    this.$element('search-bar-input').focus({
      focus: false
    });
    this.toggleSearchBar('closed');

    if (this.storeInfoBarStatus === 'store-info-bar-closed-showed') {
      this.toggleStoreInfoBar('closed');
    }

    setTimeout(() => {
      this.toggleControllerBarStatus('showed');
    }, 500);
    setTimeout(() => {
      this.searchResult = [];
      this.isSearching = false;
      this.searchValue = '';
    }, 500);
  },

  openStoreInfoBar() {
    if (this.searchBarStatus === 'search-bar-closed-showed') {
      this.toggleSearchBar('closed');
      setTimeout(() => {
        this.searchResult = [];
        this.isSearching = false;
        this.searchValue = '';
      }, 500);
    }

    if (this.controllerBarStatus === 'controller-bar-minied-showed') {
      this.toggleControllerBarStatus('minied');
    }

    setTimeout(() => {
      this.toggleStoreInfoBar('showed');
    }, 300);
  },

  closeStoreInfoBar() {
    this.toggleSearchBar('closed');
    this.toggleStoreInfoBar('closed');
    setTimeout(() => {
      this.toggleControllerBarStatus('showed');
    }, 300);
  },

  openControllerBar() {
    if (this.searchBarStatus === 'search-bar-closed-showed') {
      this.toggleSearchBar('closed');
      setTimeout(() => {
        this.searchResult = [];
        this.isSearching = false;
        this.searchValue = '';
      }, 500);
    }

    if (this.storeInfoBarStatus === 'store-info-bar-closed-showed') {
      this.toggleStoreInfoBar('closed');
    }

    setTimeout(() => {
      this.toggleControllerBarStatus('showed');
    }, 300);
  },

  openNavigationBar() {
    if (this.storeInfoBarStatus === 'store-info-bar-closed-showed') {
      this.toggleStoreInfoBar('closed', true);
    }

    this.navigationBarStatus = 'navigation-bar-closed-showed';
  },

  closeNavigationBar() {
    if (this.navigationBarStatus === 'navigation-bar-closed-showed') {
      this.navigationBarStatus = 'navigation-bar-showed-closed';
    }

    setTimeout(() => {
      this.navigationDescription = {
        name: '未知',
        desc: '正在加载',
        next: '正在加载',
        time: '未知',
        remain: '未知'
      };
    }, 500);
  },

  showRoutes: async function () {
    const that = this;

    if (global.productiontip === 'dev') {
      const res = await _system3.default.fetch({
        url: `${_const.baseUrl}/navigateWithAStar?cameraid=${that.curCameraID}&destCameraId=${that.curStoreInfo.id}`
      }).catch(err => {
        console.log(err);
      });
      console.log("路线展示");
      const result = res.data;
      console.log(result.code);
      console.log(result.data);

      if (result.code === 200) {
        if (result.data === "") {
          _system.default.showToast({
            message: "无法到达该点，请查看紧急事件"
          });

          return;
        }

        const routeMsg = {
          type: 'route',
          detail: JSON.parse(result.data)
        };
        this.postToWeb(routeMsg);
      } else if (result.code === 502) {
        _system.default.showToast({
          message: '没有找到可行的路线'
        });
      } else if (result.code === 404) {
        _system.default.showToast({
          message: '不可导航点'
        });
      } else {
        _system.default.showToast({
          message: `位置错误${result.code}`
        });
      }
    }
  },
  beginNavigation: async function () {
    const that = this;

    if (global.productiontip === 'dev') {
      const res = await _system3.default.fetch({
        url: `${_const.baseUrl}/navigateWithAStar?cameraid=${that.curCameraID}&destCameraId=${that.curStoreInfo.id}`
      }).catch(err => {
        console.log(err);
      });
      console.log("开始导航");
      const result = res.data;
      console.log(result.code);
      console.log(result.data === "");

      if (result.code === 200) {
        if (result.data === "") {
          _system.default.showToast({
            message: "无法到达该点，请查看紧急事件"
          });

          return;
        }

        const naviMsg = {
          type: 'navi',
          detail: JSON.parse(result.data)
        };
        clearInterval(this.locationUpdateIntervalID);
        this.navigationDescription.name = that.curStoreInfo.name;
        this.postToWeb(naviMsg);
        this.destinationCameraID = that.curStoreInfo.id;
      } else if (result.code === 502) {
        _system.default.showToast({
          message: '没有找到可行的路线'
        });
      } else if (result.code === 404) {
        _system.default.showToast({
          message: '路径源地址不存在'
        });
      } else {
        _system.default.showToast({
          message: `位置错误${result.code}`
        });
      }
    }
  },
  focusOnStore: async function (id, name) {
    this.$element('search-bar-input').focus({
      focus: false
    });
    console.log("聚焦");
    console.log(id);
    const focusMsg = {
      type: 'focus',
      detail: id
    };
    this.postToWeb(focusMsg);
    this.curStoreInfo.id = id;
    this.curStoreInfo.name = name;
    this.openStoreInfoBar();
    let res = await _system3.default.fetch({
      url: `${_const.baseUrl}/getCamera?id=${id}`
    }).catch(err => console.log(err));
    const result = res.data;

    if (result.code === 200) {
      console.log("导航");
      const d = JSON.parse(result.data);
      this.curStoreInfo.location = d.logicalPosition;
      this.curStoreInfo.distance = this.calcDistanceByLL(d.latitude, d.longitude);
    }
  },
  calcDistanceByLL: function (x, y) {
    const that = this;
    let [x1, y1] = (0, _const.Mercator2lonLat)(x, y);
    let [x2, y2] = (0, _const.Mercator2lonLat)(this.curX, this.curY);
    return (0, _const.getDistanceByLL)(x1, y1, x2, y2);
  },
  moreTools: function () {
    _system.default.showToast({
      message: '敬请期待!'
    });
  },
  focusMySelf: function () {
    this.postToWeb('focusMyLoc');
  },
  resetNavigation: function () {
    this.cannotCancel = true;
    setTimeout(() => {
      this.cannotCancel = false;
    }, 3000);
    this.postToWeb("RESETNAVI");
  },
  cancelNavigation: function () {
    if (!this.cannotCancel) {
      this.destinationCameraID = this.curCameraID;
      this.postToWeb("CANCELNAVI");
    } else {
      _system.default.showToast({
        message: '导航准备阶段不可取消'
      });
    }
  },

  async showEmergencyEvents() {
    const res = await _system3.default.fetch({
      url: `${_const.baseUrl}/getCurrentAccidents`
    }).catch(err => {
      console.error(err);
    });
    const result = res.data;

    if (result.code === 200) {
      const acList = JSON.parse(result.data);

      if (acList.length === 0) {
        _system.default.showToast({
          message: '无紧急事件'
        });

        return;
      }

      const acMsg = {
        type: 'accidents',
        detail: acList
      };
      this.postToWeb(acMsg);
    } else {
      _system.default.showToast({
        message: "显示紧急事件出错"
      });
    }
  },

  notSupported() {
    _system.default.showToast({
      message: "暂不支持，后续增加"
    });
  },

  onVipCoupon: function () {
    _system5.default.get({
      key: 'isVIP',
      success: function (data) {
        console.log("success ", data);

        if (!data) {
          _system.default.showToast({
            message: "开通VIP即可获得专项优惠～"
          });
        } else {
          _system.default.showToast({
            message: "您已获得VIP专项优惠!"
          });
        }
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`);
      }
    });
  },
  onNormalCoupon: function () {
    _system.default.showToast({
      message: "您已获得普通用户优惠!"
    });
  },
  onScrollBottom: function (type) {
    console.log(type);

    switch (type) {
      case 'normal':
        this.normalCoupons.push(...[{
          imgID: 123,
          title: '海盐黑金咖啡',
          oldPrice: '¥51',
          newPrice: '¥25.5',
          store: '海岩咖啡'
        }, {
          imgID: 129,
          title: '奶茶三兄弟',
          oldPrice: '¥6.5',
          newPrice: '¥13',
          store: 'CoCo都可'
        }, {
          imgID: 133,
          title: '海底捞30元优惠券',
          oldPrice: '¥30',
          newPrice: '¥28.8',
          store: '海底捞'
        }, {
          imgID: 134,
          title: '夏威夷水果披萨9寸',
          oldPrice: '¥19.9',
          newPrice: '¥9.9',
          store: '大嘴巴意式披萨'
        }]);
        console.log(this.normalCoupons.length);
        break;

      case 'vip':
        this.vipCoupons.push(...[{
          imgID: 110,
          title: '海盐黑金咖啡',
          oldPrice: '¥51',
          newPrice: '¥15.5',
          store: '海岩咖啡'
        }, {
          imgID: 141,
          title: '奶茶三兄弟',
          oldPrice: '¥3.5',
          newPrice: '¥13',
          store: 'CoCo都可'
        }, {
          imgID: 132,
          title: '海底捞30元优惠券',
          oldPrice: '¥30',
          newPrice: '¥25.8',
          store: '海底捞'
        }, {
          imgID: 131,
          title: '夏威夷水果披萨9寸',
          oldPrice: '¥19.9',
          newPrice: '¥5.9',
          store: '大嘴巴意式披萨'
        }]);
        console.log(this.vipCoupons.length);
        break;
    }
  }
};
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}

/***/ }),

/***/ "./src/Common/bt.js":
/*!**************************!*\
  !*** ./src/Common/bt.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// blue tooth support
// var bluetooth = $app_require$( '@app-module/system.bluetooth');
// camera device set
var specific_device_set = new Set(); // main

async function bt(bluetooth, find_camera_callback) {
  // open bluetooth
  bluetooth.openAdapter({
    operateAdapter: true,
    success: function (data) {
      console.log("Success");
      bluetooth.getAdapterState({
        success: function (data) {
          console.log(`handling adapter state, available = ${data.available}, discovering = ${data.discovering}`);
        },
        fail: function (data, code) {
          console.log(`handling fail, code = ${code} data = ${data}`);
        },
        complete: function () {
          console.log('complete');
        }
      });
    },
    fail: function (data, code) {
      console.log(`bt open fail, code = ${code}, data=${data}`);
    },
    complete: function (data) {
      console.log("completed!");
    }
  }); // 在扫描之前先注册设备发现回调

  bluetooth.ondevicefound = function (data) {
    console.log("Data", JSON.stringify(data));
    bluetooth.getDevices({
      success: function (data) {
        console.log("Get Devices");
        console.log(JSON.stringify(data));
        data.devices.forEach(device => {
          let device_name = device.name;

          if (device_name.substring(0, 3) == "OW-") {
            // 发现了camera才停止扫描，保证每次都会向调用者返回有效数据
            bluetooth.stopDevicesDiscovery();
            bluetooth.closeAdapter({
              operateAdapter: false,
              fail: function (data, code) {
                console.log(`bt open fail, code = ${code}, data=${data}`);
              }
            });
            let camera_id = device_name.substring(3);
            specific_device_set.add({
              camera_id: Number(camera_id),
              RSSI: device.RSSI
            });
            find_camera_callback([...specific_device_set]);
          }
        }); // 上层回调

        /**
         * 回调使用方法：
         * 
         *  function(all_camera_list) {
         * 
         *    // all_camera_list是list
         *    all_camera_list.forEach(device_item => {
         *        let camera_id = device_item.camera_id; // Number类型
         *        let strong    = device_item.RSSI;      // Number类型   
         *    });
         * 
         * }
         * 
         */
      }
    });
  }; //开始扫描


  bluetooth.startDevicesDiscovery({
    success: function () {
      console.log('start discovery success');
    },
    fail: function (data, code) {
      console.log(`bt start discovery fail, code = ${code}, data=${data}`);
    }
  });
}

module.exports = bt;

/***/ }),

/***/ "./src/Indoor/Indoor.ux":
/*!******************************!*\
  !*** ./src/Indoor/Indoor.ux ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!../../node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./Indoor.ux */ "./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./src/Indoor/Indoor.ux")
var $app_style$ = __webpack_require__(/*! !../../node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/Indoor/Indoor.ux!../../node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/Indoor/Indoor.ux!./Indoor.ux */ "./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/Indoor/Indoor.ux!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/Indoor/Indoor.ux!./src/Indoor/Indoor.ux")
var $app_script$ = __webpack_require__(/*! !../../node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!../../node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!../../node_modules/babel-loader?presets[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/preset-env&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!../../node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./Indoor.ux */ "./node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/preset-env&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./src/Indoor/Indoor.ux")

$app_define$('@app-component/Indoor', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/Indoor',{ packagerName:'fa-toolkit', packagerVersion: '2.5.2-Stable.300'})

/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDistanceByLL = getDistanceByLL;
exports.Mercator2lonLat = Mercator2lonLat;
exports.mapObject = exports.isJSON = exports.ucUrl = exports.webUrl = exports.baseUrl = void 0;
const baseUrl = 'http://182.92.208.47:8899';
exports.baseUrl = baseUrl;
const webUrl = 'http://182.92.208.47:8086/Indoor/'; //线上环境
// export const webUrl = 'http://192.168.1.103:8080/map/Indoor/' //测试环境

exports.webUrl = webUrl;
const ucUrl = 'http://192.168.1.103:8080/fluent/'; // export const ucUrl = 'http://182.92.208.47:8087/'

exports.ucUrl = ucUrl;

const isJSON = function (data) {
  try {
    let res = JSON.parse(data);
    return res;
  } catch (err) {
    return false;
  }
};

exports.isJSON = isJSON;
const mapObject = {
  minX: 12683407.7862835,
  maxX: 12683523.7078037,
  minY: 2557838.358881,
  maxY: 2557927.7459812,
  center: {
    x: 12683465.7470436,
    y: 2557883.0524311
  }
}; // 经纬度转换成三角函数中度分表形式。

exports.mapObject = mapObject;

function rad(d) {
  return d * Math.PI / 180.0;
} // 根据经纬度计算距离，参数分别为第一点的纬度，经度；第二点的纬度，经度


function getDistanceByLL(_lat1, _lng1, _lat2, _lng2) {
  let lat1 = Number(_lat1);
  let lat2 = Number(_lat2);
  let lng2 = Number(_lng2);
  let lng1 = Number(_lng2);
  console.log(`开始计算 ${lat1} ${lat2} ${lng1} ${lng2}`);
  var radLat1 = rad(lat1);
  var radLat2 = rad(lat2);
  var a = radLat1 - radLat2;
  var b = rad(lng1) - rad(lng2);
  var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
  s = s * 6378.137; // EARTH_RADIUS;

  s = Math.round(s * 10000) / 10000; //输出为公里

  var distance = s;
  var distance_str = "";
  console.log("得出的距离", s);

  if (parseInt(distance) >= 1) {
    distance_str = distance.toFixed(1) + "km";
  } else {
    distance_str = (distance * 1000).toFixed(1) + "m";
  } //s=s.toFixed(4);


  console.info('lyj 距离是', s);
  console.info('lyj 距离是', distance_str);
  return distance_str;
}

function Mercator2lonLat(mercatorX, mercatorY) {
  var xy = [];
  var x = mercatorX / 20037508.34 * 180;
  var y = mercatorY / 20037508.34 * 180;
  y = 180 / Math.PI * (2 * Math.atan(Math.exp(y * Math.PI / 180)) - Math.PI / 2);
  xy.push(x);
  xy.push(y);
  return xy;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQvSW5kb29yL0luZG9vci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvSW5kb29yL0luZG9vci51eD80MTgwIiwid2VicGFjazovLy8uL3NyYy9JbmRvb3IvSW5kb29yLnV4PzE5ZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luZG9vci9JbmRvb3IudXg/MTE1YyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tbW9uL2J0LmpzIiwid2VicGFjazovLy8uL3NyYy9JbmRvb3IvSW5kb29yLnV4Iiwid2VicGFjazovLy8uL3NyYy9jb25zdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9JbmRvb3IvSW5kb29yLnV4XCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLmxvYWRpbmdcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMzBweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIwcHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIwcHhcIlxuICB9LFxuICBcIi5jb250YWluZXJcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5tYXBcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIubmVhcmJ5XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtc3RhcnRcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlZmVmZWZcIlxuICB9LFxuICBcIi5uZWFyYnkgLm5lYXJieVRpdGxlXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjMwcHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjYwcHhcIixcbiAgICBcIndpZHRoXCI6IFwiNjQwcHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCI0MHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0MHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNDBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0MHB4XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiNnB4XCIsXG4gICAgXCJib3JkZXJSaWdodFdpZHRoXCI6IFwiNnB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjZweFwiLFxuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IFwiNnB4XCIsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiNkZGRkZGRcIixcbiAgICBcImJvcmRlclJpZ2h0Q29sb3JcIjogXCIjZGRkZGRkXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNkZGRkZGRcIixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcIiNkZGRkZGRcIixcbiAgICBcImJhY2tncm91bmRcIjogXCJ7XFxcInZhbHVlc1xcXCI6W3tcXFwidHlwZVxcXCI6XFxcImxpbmVhckdyYWRpZW50XFxcIixcXFwiZGlyZWN0aW9uc1xcXCI6W1xcXCIyMjVkZWdcXFwiXSxcXFwidmFsdWVzXFxcIjpbXFxcIiNGRjNDQUMgMCVcXFwiLFxcXCIjNzg0QkEwIDUwJVxcXCIsXFxcIiMyQjg2QzUgMTAwJVxcXCJdfV19XCJcbiAgfSxcbiAgXCIubmVhcmJ5IC5uZWFyYnlUaXRsZSAuc2lkZXRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzBweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjUwMFwiLFxuICAgIFwiY29sb3JcIjogXCIjRkZGRkZGXCJcbiAgfSxcbiAgXCIubmVhcmJ5IC5uZWFyYnlUaXRsZSAuY2FtZXJhTmFtZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzZweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjcwMFwiLFxuICAgIFwibGV0dGVyU3BhY2luZ1wiOiBcIjJweFwiXG4gIH0sXG4gIFwiLm5lYXJieSAubmVhcmJ5Q291cG9uXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjYwcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjMwcHhcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiNnB4XCIsXG4gICAgXCJib3JkZXJSaWdodFdpZHRoXCI6IFwiNnB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjZweFwiLFxuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IFwiNnB4XCIsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiNkZGRkZGRcIixcbiAgICBcImJvcmRlclJpZ2h0Q29sb3JcIjogXCIjZGRkZGRkXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNkZGRkZGRcIixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcIiNkZGRkZGRcIixcbiAgICBcIndpZHRoXCI6IFwiNzAwcHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcHhcIlxuICB9LFxuICBcIi5uZWFyYnkgLm5lYXJieUNvdXBvbiAuaGVhZGVyXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMHB4XCJcbiAgfSxcbiAgXCIubmVhcmJ5IC5uZWFyYnlDb3Vwb24gLmhlYWRlciAuY291cG9uVGl0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzZweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjcwMFwiLFxuICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCJcbiAgfSxcbiAgXCIubmVhcmJ5IC5uZWFyYnlDb3Vwb24gLmhlYWRlciAuY291cG9uTW9yZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI2MDBcIlxuICB9LFxuICBcIi5uZWFyYnkgLm5lYXJieUNvdXBvbiAubWFpbkNvdXBvbnNcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImhlaWdodFwiOiBcIjI1MHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEwcHhcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjMwcHhcIlxuICB9LFxuICBcIi5uZWFyYnkgLm5lYXJieUNvdXBvbiAubWFpbkNvdXBvbnMgLmxvYWRNb3JlXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ7XFxcInZhbHVlc1xcXCI6W3tcXFwidHlwZVxcXCI6XFxcImxpbmVhckdyYWRpZW50XFxcIixcXFwiZGlyZWN0aW9uc1xcXCI6W1xcXCI0NWRlZ1xcXCJdLFxcXCJ2YWx1ZXNcXFwiOltcXFwiIzAwN2FkZiAwJVxcXCIsXFxcIiMwMGVjYmMgMTAwJVxcXCJdfV19XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMHB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjE2MHB4XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjBweFwiXG4gIH0sXG4gIFwiLm5lYXJieSAubmVhcmJ5Q291cG9uIC5tYWluQ291cG9ucyAubG9hZE1vcmUgLmxvYWRNb3JlVGV4dFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI3MDBcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzBweFwiLFxuICAgIFwibGV0dGVyU3BhY2luZ1wiOiBcIjRweFwiXG4gIH0sXG4gIFwiLm5lYXJieSAubmVhcmJ5Q291cG9uIC5tYWluQ291cG9ucyAubWFpbkNvdXBvblwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtc3RhcnRcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwid2lkdGhcIjogXCIxODBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMjUwcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMzBweFwiXG4gIH0sXG4gIFwiLm5lYXJieSAubmVhcmJ5Q291cG9uIC5tYWluQ291cG9ucyAubWFpbkNvdXBvbiAuc3R1ZmZOYW1lXCI6IHtcbiAgICBcImxpbmVzXCI6IDEsXG4gICAgXCJ0ZXh0T3ZlcmZsb3dcIjogXCJlbGxpcHNpc1wiLFxuICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNjAwXCJcbiAgfSxcbiAgXCIubmVhcmJ5IC5uZWFyYnlDb3Vwb24gLm1haW5Db3Vwb25zIC5tYWluQ291cG9uIC5zdHVmZkltZ1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjE4MHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMjBweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTBweFwiLFxuICAgIFwib2JqZWN0Rml0XCI6IFwiY292ZXJcIlxuICB9LFxuICBcIi5uZWFyYnkgLm5lYXJieUNvdXBvbiAubWFpbkNvdXBvbnMgLm1haW5Db3Vwb24gLnByaWNlIC5uZXdQcmljZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNlOTJhMmFcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNXB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNjAwXCJcbiAgfSxcbiAgXCIubmVhcmJ5IC5uZWFyYnlDb3Vwb24gLm1haW5Db3Vwb25zIC5tYWluQ291cG9uIC5wcmljZSAub2xkUHJpY2VcIjoge1xuICAgIFwiY29sb3JcIjogXCIjY2NjY2NjXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjE2cHhcIixcbiAgICBcInRleHREZWNvcmF0aW9uXCI6IFwibGluZS10aHJvdWdoXCJcbiAgfSxcbiAgXCIubmVhcmJ5IC5uZWFyYnlDb3Vwb24gLm1haW5Db3Vwb25zIC5tYWluQ291cG9uIC5zdG9yZU5hbWVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI0cHhcIlxuICB9LFxuICBcIi5uZWFyYnkgLm5lYXJieVJlY29tbWVuZGF0aW9uXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjYwcHhcIixcbiAgICBcIndpZHRoXCI6IFwiNzAwcHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiLm5lYXJieSAubmVhcmJ5UmVjb21tZW5kYXRpb24gLmhlYWRlclwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1lbmRcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBweFwiXG4gIH0sXG4gIFwiLm5lYXJieSAubmVhcmJ5UmVjb21tZW5kYXRpb24gLmhlYWRlciAubmVhcmJ5UmVjb21tZW5kYXRpb25UaXRsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjM2cHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI3MDBcIixcbiAgICBcImNvbG9yXCI6IFwiIzAwMDAwMFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxNXB4XCJcbiAgfSxcbiAgXCIubmVhcmJ5IC5uZWFyYnlSZWNvbW1lbmRhdGlvbiAuaGVhZGVyIC5kZXNjcmlwdGlvblwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI0cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuICAgIFwibGV0dGVyU3BhY2luZ1wiOiBcIjNweFwiXG4gIH0sXG4gIFwiLm5lYXJieSAubmVhcmJ5UmVjb21tZW5kYXRpb24gLnJlY29tbWVuZGF0aW9uc1wiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMHB4XCJcbiAgfSxcbiAgXCIubmVhcmJ5IC5uZWFyYnlSZWNvbW1lbmRhdGlvbiAucmVjb21tZW5kYXRpb25zIC5yZWNvbW1lbmRhdGlvblwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjIwcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyMHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMHB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMjBweFwiLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCI2cHhcIixcbiAgICBcImJvcmRlclJpZ2h0V2lkdGhcIjogXCI2cHhcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiNnB4XCIsXG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogXCI2cHhcIixcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI2RkZGRkZFwiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcIiNkZGRkZGRcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI2RkZGRkZFwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiI2RkZGRkZFwiXG4gIH0sXG4gIFwiLm5lYXJieSAubmVhcmJ5UmVjb21tZW5kYXRpb24gLnJlY29tbWVuZGF0aW9ucyAucmVjb21tZW5kYXRpb24gLm1haW5cIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LXN0YXJ0XCJcbiAgfSxcbiAgXCIubmVhcmJ5IC5uZWFyYnlSZWNvbW1lbmRhdGlvbiAucmVjb21tZW5kYXRpb25zIC5yZWNvbW1lbmRhdGlvbiAubWFpbiAuZGVzY1wiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMwcHhcIlxuICB9LFxuICBcIi5uZWFyYnkgLm5lYXJieVJlY29tbWVuZGF0aW9uIC5yZWNvbW1lbmRhdGlvbnMgLnJlY29tbWVuZGF0aW9uIC5tYWluIC5kZXNjIC5zdG9yZVRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiNDBweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjcwMFwiLFxuICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIwcHhcIixcbiAgICBcImxpbmVzXCI6IDEsXG4gICAgXCJ0ZXh0T3ZlcmZsb3dcIjogXCJlbGxpcHNpc1wiXG4gIH0sXG4gIFwiLm5lYXJieSAubmVhcmJ5UmVjb21tZW5kYXRpb24gLnJlY29tbWVuZGF0aW9ucyAucmVjb21tZW5kYXRpb24gLm1haW4gLmRlc2MgLnN0b3JlUmF0ZXNcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyOHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNlYzQxNDFcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI3MDBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIwcHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjBweFwiXG4gIH0sXG4gIFwiLm5lYXJieSAubmVhcmJ5UmVjb21tZW5kYXRpb24gLnJlY29tbWVuZGF0aW9ucyAucmVjb21tZW5kYXRpb24gLm1haW4gLmRlc2MgLnN0b3JlRGlzdGFuY2VcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyOHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMwMDAwMDBcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI3MDBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIwcHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjBweFwiXG4gIH0sXG4gIFwiLm5lYXJieSAubmVhcmJ5UmVjb21tZW5kYXRpb24gLnJlY29tbWVuZGF0aW9ucyAucmVjb21tZW5kYXRpb24gLm1haW4gLnJlY29tbWVuZGF0aW9uLWltZ1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjIwMHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIyMDBweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTBweFwiLFxuICAgIFwib2JqZWN0Rml0XCI6IFwiY292ZXJcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMnB4XCIsXG4gICAgXCJib3JkZXJSaWdodFdpZHRoXCI6IFwiMnB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjJweFwiLFxuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IFwiMnB4XCIsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiMxMTExMTFcIixcbiAgICBcImJvcmRlclJpZ2h0Q29sb3JcIjogXCIjMTExMTExXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiMxMTExMTFcIixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcIiMxMTExMTFcIlxuICB9LFxuICBcIi5uZWFyYnkgLm5lYXJieVJlY29tbWVuZGF0aW9uIC5yZWNvbW1lbmRhdGlvbnMgLnJlY29tbWVuZGF0aW9uIC5mb290ZXJcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBweFwiLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCIycHhcIixcbiAgICBcImJvcmRlclRvcFN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI2VlZWVlZVwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMHB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMzBweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEwcHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93LXJldmVyc2VcIixcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiXG4gIH0sXG4gIFwiLnRhYi1jb250YWluZXJcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMTMwcHhcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiNiYmJiYmJcIixcbiAgICBcImJvcmRlclJpZ2h0Q29sb3JcIjogXCIjYmJiYmJiXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNiYmJiYmJcIixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcIiNiYmJiYmJcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYXJvdW5kXCJcbiAgfSxcbiAgXCIudGFiLWNvbnRlbnRcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi53ZWItY29udGFpbmVyXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzUwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMCVcIlxuICB9LFxuICBcIi5zbWFsbF9iYXJcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTA2cHhcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiNHB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21TdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNlZWVlZWVcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLmZ1bmN0aW9uc19yb3dcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTVweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIwcHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjE1cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIwcHhcIlxuICB9LFxuICBcIi5mdW5jdGlvbl9pdGVtXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwid2lkdGhcIjogXCIyMCVcIlxuICB9LFxuICBcIi5mdW5jdGlvbl9pbWFnZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjgwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjgwcHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVweFwiXG4gIH0sXG4gIFwiLmZ1bmN0aW9uX3RleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyMHB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNjAwXCJcbiAgfSxcbiAgXCIuc21hbGxfYmFyIC5pbm5lcl9iYXJcIjoge1xuICAgIFwid2lkdGhcIjogXCI0MCVcIixcbiAgICBcImhlaWdodFwiOiBcIjIwcHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEwcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlZWVlZWVcIlxuICB9LFxuICBcIi5mZWF0dXJlc19iYXJcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDAlXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxNXB4XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiLmZlYXR1cmVzX2JhciAuc2VhcmNoX2JveFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMHB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyMHB4XCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjZweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjZweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCI2cHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjZweFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjZGRkZGRkXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiI2RkZGRkZFwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZGRkZGRkXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjZGRkZGRkXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTVweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNDBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjE1cHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNDBweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTVweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIwcHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjE1cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIwcHhcIlxuICB9LFxuICBcIi5mZWF0dXJlc19iYXIgLnNlYXJjaF9ib3hfdGV4dFwiOiB7XG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNzAwXCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NjY2NjZcIixcbiAgICBcInRleHRBbGlnblwiOiBcInJpZ2h0XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMwcHhcIlxuICB9LFxuICBcIi5mZWF0dXJlc19iYXIgLnNlYXJjaF9idG5cIjoge1xuICAgIFwid2lkdGhcIjogXCI0OHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI0OHB4XCJcbiAgfSxcbiAgXCIuY29udHJvbGxlci1iYXJcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjMwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBweFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiYm90dG9tXCI6IFwiLTM2MHB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjc1MHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI0MzBweFwiLFxuICAgIFwiekluZGV4XCI6IDEwMCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJvcmRlclRvcExlZnRSYWRpdXNcIjogXCIzMHB4XCIsXG4gICAgXCJib3JkZXJUb3BSaWdodFJhZGl1c1wiOiBcIjMwcHhcIlxuICB9LFxuICBcIi5jb250cm9sbGVyLWJhci1taW5pZWQtc2hvd2VkXCI6IHtcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJjb250cm9sbGVyQmFyTWluaVNob3dcIixcbiAgICBcImFuaW1hdGlvbkR1cmF0aW9uXCI6IFwiNTAwbXNcIixcbiAgICBcImFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uXCI6IFwiZWFzZS1pbi1vdXRcIixcbiAgICBcImFuaW1hdGlvbkZpbGxNb2RlXCI6IFwiZm9yd2FyZHNcIlxuICB9LFxuICBcIkBLRVlGUkFNRVNcIjoge1xuICAgIFwiY29udHJvbGxlckJhck1pbmlTaG93XCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJ0cmFuc2Zvcm1cIjogXCJ7XFxcInRyYW5zbGF0ZVlcXFwiOlxcXCIwcHhcXFwifVwiLFxuICAgICAgICBcInRpbWVcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ0cmFuc2Zvcm1cIjogXCJ7XFxcInRyYW5zbGF0ZVlcXFwiOlxcXCItMzYwcHhcXFwifVwiLFxuICAgICAgICBcInRpbWVcIjogMTAwXG4gICAgICB9XG4gICAgXSxcbiAgICBcImNvbnRyb2xsZXJCYXJTaG93TWluaVwiOiBbXG4gICAgICB7XG4gICAgICAgIFwidHJhbnNmb3JtXCI6IFwie1xcXCJ0cmFuc2xhdGVZXFxcIjpcXFwiLTM2MHB4XFxcIn1cIixcbiAgICAgICAgXCJ0aW1lXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwidHJhbnNmb3JtXCI6IFwie1xcXCJ0cmFuc2xhdGVZXFxcIjpcXFwiMHB4XFxcIn1cIixcbiAgICAgICAgXCJ0aW1lXCI6IDEwMFxuICAgICAgfVxuICAgIF0sXG4gICAgXCJzdG9yZUluZm9CYXJTaG93Q2xvc2VcIjogW1xuICAgICAge1xuICAgICAgICBcInRyYW5zZm9ybVwiOiBcIntcXFwidHJhbnNsYXRlWVxcXCI6XFxcIi00MDBweFxcXCJ9XCIsXG4gICAgICAgIFwidGltZVwiOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInRyYW5zZm9ybVwiOiBcIntcXFwidHJhbnNsYXRlWVxcXCI6XFxcIjBweFxcXCJ9XCIsXG4gICAgICAgIFwidGltZVwiOiAxMDBcbiAgICAgIH1cbiAgICBdLFxuICAgIFwic3RvcmVJbmZvQmFyQ2xvc2VTaG93XCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJ0cmFuc2Zvcm1cIjogXCJ7XFxcInRyYW5zbGF0ZVlcXFwiOlxcXCIwcHhcXFwifVwiLFxuICAgICAgICBcInRpbWVcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ0cmFuc2Zvcm1cIjogXCJ7XFxcInRyYW5zbGF0ZVlcXFwiOlxcXCItNDAwcHhcXFwifVwiLFxuICAgICAgICBcInRpbWVcIjogMTAwXG4gICAgICB9XG4gICAgXSxcbiAgICBcInNlYXJjaEJhckNsb3NlU2hvd1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwidHJhbnNmb3JtXCI6IFwie1xcXCJ0cmFuc2xhdGVZXFxcIjpcXFwiMHB4XFxcIn1cIixcbiAgICAgICAgXCJ0aW1lXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwidHJhbnNmb3JtXCI6IFwie1xcXCJ0cmFuc2xhdGVZXFxcIjpcXFwiMzAwcHhcXFwifVwiLFxuICAgICAgICBcInRpbWVcIjogMTAwXG4gICAgICB9XG4gICAgXSxcbiAgICBcInNlYXJjaEJhclNob3dDbG9zZVwiOiBbXG4gICAgICB7XG4gICAgICAgIFwidHJhbnNmb3JtXCI6IFwie1xcXCJ0cmFuc2xhdGVZXFxcIjpcXFwiMzAwcHhcXFwifVwiLFxuICAgICAgICBcInRpbWVcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ0cmFuc2Zvcm1cIjogXCJ7XFxcInRyYW5zbGF0ZVlcXFwiOlxcXCItNTAwcHhcXFwifVwiLFxuICAgICAgICBcInRpbWVcIjogMTAwXG4gICAgICB9XG4gICAgXSxcbiAgICBcIm5hdmlnYXRpb25CYXJDbG9zZVNob3dcIjogW1xuICAgICAge1xuICAgICAgICBcInRyYW5zZm9ybVwiOiBcIntcXFwidHJhbnNsYXRlWVxcXCI6XFxcIjBweFxcXCJ9XCIsXG4gICAgICAgIFwidGltZVwiOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInRyYW5zZm9ybVwiOiBcIntcXFwidHJhbnNsYXRlWVxcXCI6XFxcIi0zODBweFxcXCJ9XCIsXG4gICAgICAgIFwidGltZVwiOiAxMDBcbiAgICAgIH1cbiAgICBdLFxuICAgIFwibmF2aWdhdGlvbkJhclNob3dDbG9zZVwiOiBbXG4gICAgICB7XG4gICAgICAgIFwidHJhbnNmb3JtXCI6IFwie1xcXCJ0cmFuc2xhdGVZXFxcIjpcXFwiLTM4MHB4XFxcIn1cIixcbiAgICAgICAgXCJ0aW1lXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwidHJhbnNmb3JtXCI6IFwie1xcXCJ0cmFuc2xhdGVZXFxcIjpcXFwiMHB4XFxcIn1cIixcbiAgICAgICAgXCJ0aW1lXCI6IDEwMFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgXCIuY29udHJvbGxlci1iYXItc2hvd2VkLW1pbmllZFwiOiB7XG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwiY29udHJvbGxlckJhclNob3dNaW5pXCIsXG4gICAgXCJhbmltYXRpb25EdXJhdGlvblwiOiBcIjUwMG1zXCIsXG4gICAgXCJhbmltYXRpb25UaW1pbmdGdW5jdGlvblwiOiBcImVhc2UtaW4tb3V0XCIsXG4gICAgXCJhbmltYXRpb25GaWxsTW9kZVwiOiBcImZvcndhcmRzXCJcbiAgfSxcbiAgXCIuc3RvcmUtaW5mby1iYXJcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjQwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjQwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI0MHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjQwcHhcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJib3R0b21cIjogXCItNDAwcHhcIixcbiAgICBcIndpZHRoXCI6IFwiNzUwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjQwMHB4XCIsXG4gICAgXCJ6SW5kZXhcIjogMTAxLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYm9yZGVyVG9wTGVmdFJhZGl1c1wiOiBcIjMwcHhcIixcbiAgICBcImJvcmRlclRvcFJpZ2h0UmFkaXVzXCI6IFwiMzBweFwiXG4gIH0sXG4gIFwiLnN0b3JlLWluZm8tYmFyLXNob3dlZC1jbG9zZWRcIjoge1xuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcInN0b3JlSW5mb0JhclNob3dDbG9zZVwiLFxuICAgIFwiYW5pbWF0aW9uRHVyYXRpb25cIjogXCI1MDBtc1wiLFxuICAgIFwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb25cIjogXCJlYXNlLWluLW91dFwiLFxuICAgIFwiYW5pbWF0aW9uRmlsbE1vZGVcIjogXCJmb3J3YXJkc1wiXG4gIH0sXG4gIFwiLnN0b3JlLWluZm8tYmFyLWNsb3NlZC1zaG93ZWRcIjoge1xuICAgIFwiYW5pbWF0aW9uTmFtZVwiOiBcInN0b3JlSW5mb0JhckNsb3NlU2hvd1wiLFxuICAgIFwiYW5pbWF0aW9uRHVyYXRpb25cIjogXCI1MDBtc1wiLFxuICAgIFwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb25cIjogXCJlYXNlLWluLW91dFwiLFxuICAgIFwiYW5pbWF0aW9uRmlsbE1vZGVcIjogXCJmb3J3YXJkc1wiXG4gIH0sXG4gIFwiLnN0b3JlLWluZm8tYmFyIC5zdG9yZS1jbG9zZVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3BcIjogXCI0MHB4XCIsXG4gICAgXCJyaWdodFwiOiBcIjQwcHhcIixcbiAgICBcIndpZHRoXCI6IFwiNDhweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDhweFwiXG4gIH0sXG4gIFwiLnN0b3JlLXRpdGxlXCI6IHtcbiAgICBcImxpbmVzXCI6IDEsXG4gICAgXCJ0ZXh0T3ZlcmZsb3dcIjogXCJlbGxpcHNpc1wiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjcwMFwiLFxuICAgIFwiZm9udFNpemVcIjogXCI0MHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMyMjIyMjJcIixcbiAgICBcIndpZHRoXCI6IFwiNDUwcHhcIlxuICB9LFxuICBcIi5zdG9yZS1kaXN0YW5jZS1sb2NhdGlvblwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjBweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTBweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjBweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyNnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM1NTU1NTVcIixcbiAgICBcImZvbnRGYW1pbHlcIjogXCJtb25vc3BhY2VcIlxuICB9LFxuICBcIi5zdG9yZS1kZXRhaWwtYnRuXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJoZWlnaHRcIjogXCI4MHB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIzNXB4XCJcbiAgfSxcbiAgXCIuc3RvcmUtZGV0YWlsLWJ0biAuc3RvcmUtZGV0YWlsLWJ0bi10ZXh0XCI6IHtcbiAgICBcImZvbnRXZWlnaHRcIjogXCI3MDBcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzBweFwiXG4gIH0sXG4gIFwiLnN0b3JlLWNvbnRyb2xsZXItYmFyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHB4XCIsXG4gICAgXCJib3R0b21cIjogXCIwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjEyMHB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjc1MHB4XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1hcm91bmRcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJUb3BTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiNjY2NjY2NcIlxuICB9LFxuICBcIi5zdG9yZS1jb250cm9sbGVyLWl0ZW1cIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCIuc3RvcmUtY29udHJvbGxlci1pdGVtLWltYWdlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNDhweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDhweFwiXG4gIH0sXG4gIFwiLnN0b3JlLWNvbnRyb2xsZXItaXRlbS10ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjBweFwiXG4gIH0sXG4gIFwiLnN0b3JlLWNvbnRyb2xsZXItYnRuc1wiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjMzMHB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIwcHhcIlxuICB9LFxuICBcIi5zdG9yZS1jb250cm9sbGVyLWJ0blwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTBweFwiLFxuICAgIFwid2lkdGhcIjogXCIxNTBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiODBweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNDBweFwiLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCI0cHhcIixcbiAgICBcImJvcmRlclJpZ2h0V2lkdGhcIjogXCI0cHhcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiNHB4XCIsXG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogXCI0cHhcIixcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI2RkZGRkZFwiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcIiNkZGRkZGRcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI2RkZGRkZFwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiI2RkZGRkZFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuYnRuLXByaW1hcnlcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAwOGRmOFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjRkZGRkZGXCJcbiAgfSxcbiAgXCIuYnRuLXByaW1hcnkgLnN0b3JlLWRldGFpbC1idG4tdGV4dFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNGRkZGRkZcIlxuICB9LFxuICBcIi5idG4tcHJpbWFyeSAuc3RvcmUtY29udHJvbGxlci1idG4tdGV4dFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNGRkZGRkZcIlxuICB9LFxuICBcIi5idG4tcHJpbWFyeSAubmF2aS1ib3R0b20tYnRuLXRleHRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjRkZGRkZGXCJcbiAgfSxcbiAgXCIuc3RvcmUtY29udHJvbGxlci1idG4tdGV4dFwiOiB7XG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNzAwXCIsXG4gICAgXCJjb2xvclwiOiBcIiMxMTExMTFcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzBweFwiXG4gIH0sXG4gIFwiLnNlYXJjaC1iYXJcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJ0b3BcIjogXCItMjAwcHhcIixcbiAgICBcIndpZHRoXCI6IFwiNzAwcHhcIixcbiAgICBcInpJbmRleFwiOiAxMDAsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDApXCJcbiAgfSxcbiAgXCIuc2VhcmNoLWJhci1zZWFyY2hib3hcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjBweFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIzMHB4XCJcbiAgfSxcbiAgXCIuc2VhcmNoLWJhci1pbnB1dFwiOiB7XG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxNXB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjkwJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiODBweFwiXG4gIH0sXG4gIFwiLnNlYXJjaC1iYXItYmFja1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjQ4cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjQ4cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjBweFwiXG4gIH0sXG4gIFwiLnNlYXJjaC1iYXItcmVzdWx0c1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIzMHB4XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5zZWFyY2gtbm8tcmVzdWx0XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHB4XCJcbiAgfSxcbiAgXCIuc2VhcmNoLW5vLXJlc3VsdC10ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzJweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjcwMFwiLFxuICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCJcbiAgfSxcbiAgXCIuc2VhcmNoLWJhci1yZXN1bHRcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTBweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnNlYXJjaC1yZXN1bHQtdGl0bGUtZGVzY1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjgwJVwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzMHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzBweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtZW5kXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjBweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIzcHhcIixcbiAgICBcImJvcmRlckJvdHRvbVN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI2RkZGRkZFwiXG4gIH0sXG4gIFwiLnNlYXJjaC1yZXN1bHQtdGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzNXB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNzAwXCIsXG4gICAgXCJjb2xvclwiOiBcIiMwMDAwMDBcIlxuICB9LFxuICBcIi5zZWFyY2gtcmVzdWx0LWRlc2NcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzNXB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNzAwXCIsXG4gICAgXCJjb2xvclwiOiBcIiMyMjIyMjJcIlxuICB9LFxuICBcIi5zZWFyY2gtcmVzdWx0LXJvdXRlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiODBweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwcHhcIlxuICB9LFxuICBcIi5zZWFyY2gtcmVzdWx0LXJvdXRlLWltYWdlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjRweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNjRweFwiXG4gIH0sXG4gIFwiLnNlYXJjaC1yZXN1bHQtcm91dGUtdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI0cHhcIlxuICB9LFxuICBcIi5zZWFyY2gtcmVzdWx0LWljb25cIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNDhweFwiLFxuICAgIFwid2lkdGhcIjogXCI0OHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjBweFwiXG4gIH0sXG4gIFwiLnNlYXJjaC1iYXItY2xvc2VkLXNob3dlZFwiOiB7XG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwic2VhcmNoQmFyQ2xvc2VTaG93XCIsXG4gICAgXCJhbmltYXRpb25EdXJhdGlvblwiOiBcIjUwMG1zXCIsXG4gICAgXCJhbmltYXRpb25UaW1pbmdGdW5jdGlvblwiOiBcImVhc2UtaW4tb3V0XCIsXG4gICAgXCJhbmltYXRpb25GaWxsTW9kZVwiOiBcImZvcndhcmRzXCJcbiAgfSxcbiAgXCIuc2VhcmNoLWJhci1zaG93ZWQtY2xvc2VkXCI6IHtcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJzZWFyY2hCYXJTaG93Q2xvc2VcIixcbiAgICBcImFuaW1hdGlvbkR1cmF0aW9uXCI6IFwiNTAwbXNcIixcbiAgICBcImFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uXCI6IFwiZWFzZS1pbi1vdXRcIixcbiAgICBcImFuaW1hdGlvbkZpbGxNb2RlXCI6IFwiZm9yd2FyZHNcIlxuICB9LFxuICBcIi5uYXZpZ2F0aW9uLWJhclwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJib3R0b21cIjogXCItMzgwcHhcIixcbiAgICBcIndpZHRoXCI6IFwiNzUwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjM4MHB4XCIsXG4gICAgXCJ6SW5kZXhcIjogMTAzLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICAgIFwiYm9yZGVyVG9wTGVmdFJhZGl1c1wiOiBcIjMwcHhcIixcbiAgICBcImJvcmRlclRvcFJpZ2h0UmFkaXVzXCI6IFwiMzBweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjUwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjUwcHhcIlxuICB9LFxuICBcIi5uYXZpZ2F0aW9uLWJhci1jbG9zZWQtc2hvd2VkXCI6IHtcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJuYXZpZ2F0aW9uQmFyQ2xvc2VTaG93XCIsXG4gICAgXCJhbmltYXRpb25UaW1pbmdGdW5jdGlvblwiOiBcImVhc2UtaW4tb3V0XCIsXG4gICAgXCJhbmltYXRpb25EdXJhdGlvblwiOiBcIjUwMG1zXCIsXG4gICAgXCJhbmltYXRpb25GaWxsTW9kZVwiOiBcImZvcndhcmRzXCJcbiAgfSxcbiAgXCIubmF2aWdhdGlvbi1iYXItc2hvd2VkLWNsb3NlZFwiOiB7XG4gICAgXCJhbmltYXRpb25OYW1lXCI6IFwibmF2aWdhdGlvbkJhclNob3dDbG9zZVwiLFxuICAgIFwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb25cIjogXCJlYXNlLWluLW91dFwiLFxuICAgIFwiYW5pbWF0aW9uRHVyYXRpb25cIjogXCI1MDBtc1wiLFxuICAgIFwiYW5pbWF0aW9uRmlsbE1vZGVcIjogXCJmb3J3YXJkc1wiXG4gIH0sXG4gIFwiLm5hdmlnYXRpb24tYmFyLXRpdGxlLXJlbWFpblwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjRweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZGRkZGRkXCJcbiAgfSxcbiAgXCIubmF2aWdhdGlvbi1iYXItdGl0bGVcIjoge1xuICAgIFwiZm9udFdlaWdodFwiOiBcIjgwMFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NjY2NjZcIixcbiAgICBcInRleHRBbGlnblwiOiBcImxlZnRcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEwcHhcIlxuICB9LFxuICBcIi5uYXZpZ2F0aW9uLWJhci1yZW1haW5cIjoge1xuICAgIFwidGV4dEFsaWduXCI6IFwibGVmdFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTBweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjgwMFwiLFxuICAgIFwiY29sb3JcIjogXCIjNjY2NjY2XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjIwcHhcIlxuICB9LFxuICBcIi5uYXZpZ2F0aW9uLWJhci1kZXNjLXdyYXBcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTIwcHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjEwcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMHB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5uYXZpZ2F0aW9uLWljb25cIjoge1xuICAgIFwid2lkdGhcIjogXCI4NHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4NHB4XCJcbiAgfSxcbiAgXCIubmF2aWdhdGlvbi1kZXNjXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjYwJVwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwibGVmdFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjEwMHB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEwcHhcIlxuICB9LFxuICBcIi5uYXZpZ2F0aW9uLWN1ci1kZXNjXCI6IHtcbiAgICBcImxpbmVzXCI6IDEsXG4gICAgXCJ0ZXh0T3ZlcmZsb3dcIjogXCJlbGxpcHNpc1wiLFxuICAgIFwiZm9udFNpemVcIjogXCI0MHB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiODAwXCIsXG4gICAgXCJjb2xvclwiOiBcIiMwMDhkZjhcIlxuICB9LFxuICBcIi5uYXZpZ2F0aW9uLW5leHQtZGVzY1wiOiB7XG4gICAgXCJsaW5lc1wiOiAxLFxuICAgIFwidGV4dE92ZXJmbG93XCI6IFwiZWxsaXBzaXNcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjBweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjgwMFwiLFxuICAgIFwiY29sb3JcIjogXCIjODg4ODg4XCJcbiAgfSxcbiAgXCIubmF2aWdhdGlvbi10aW1lXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjhweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjgwMFwiLFxuICAgIFwid2lkdGhcIjogXCIyMCVcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMHB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJyaWdodFwiLFxuICAgIFwidGV4dE92ZXJmbG93XCI6IFwiZWxsaXBzaXNcIixcbiAgICBcImxpbmVzXCI6IDFcbiAgfSxcbiAgXCIubmF2aS1ib3R0b20tYnRuc1wiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJib3R0b21cIjogXCIwcHhcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTIwcHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCIubmF2aS1ib3R0b20tYnRuXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjQwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEwcHhcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNDBweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiNHB4XCIsXG4gICAgXCJib3JkZXJSaWdodFdpZHRoXCI6IFwiNHB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjRweFwiLFxuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IFwiNHB4XCIsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiNlZWVlZWVcIixcbiAgICBcImJvcmRlclJpZ2h0Q29sb3JcIjogXCIjZWVlZWVlXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNlZWVlZWVcIixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcIiNlZWVlZWVcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIubmF2aS1ib3R0b20tYnRuLXRleHRcIjoge1xuICAgIFwiZm9udFdlaWdodFwiOiBcIjcwMFwiXG4gIH0sXG4gIFwiLnRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTAwcHhcIlxuICB9LFxuICBcIi50YWItaW1nXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjRweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNjRweFwiXG4gIH0sXG4gIFwiLnRhYi10ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjRweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjcwMFwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY29udGFpbmVyXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGFic1wiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNoYW5nZVwiOiBcIm9uVGFiSWR4Q2hhbmdlXCJcbiAgICAgIH0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRhYi1jb250ZW50XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwic2Nyb2xsYWJsZVwiOiBcImZhbHNlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJtYXBcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWItY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIndlYlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwid2ViXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc3JjfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHJ1c3RlZHVybFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudHJ1c3RlZHVybH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJ3ZWJcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJvbldlYk1lc3NhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFnZWZpbmlzaFwiOiBcIm9uV2ViUGFnZUZpbmlzaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZXJlY2VpdmVcIjogXCJvblRpdGxlcmVjZWl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJjd3JhcFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbJ2NvbnRyb2xsZXItYmFyJywgdGhpcy5jb250cm9sbGVyQmFyU3RhdHVzXX0sXG4gICAgICAgICAgICAgICAgICBcImlkXCI6IFwiY3dyYXBcIixcbiAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0b3VjaG1vdmVcIjogXCJvblRvdWNoTW92ZUNvbnRyb2xsZXJCYXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0b3VjaHN0YXJ0XCI6IFwib25Ub3VjaFN0YXJ0Q29udHJvbGxlckJhclwiLFxuICAgICAgICAgICAgICAgICAgICBcInRvdWNoZW5kXCI6IFwib25Ub3VjaGluZ0VuZENvbnRyb2xsZXJCYXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcImNvbnRyb2xsZXJCYXJDbGlja0RlbGVnYXRvclwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzbWFsbF9iYXJcIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcInRvZ2dsZUNvbnRyb2xsZXJCYXJTdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlubmVyX2JhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlc19iYXJcIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlYXJjaF9ib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcIm9wZW5TZWFyY2hCYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogXCIvQ29tbW9uL3NlYXJjaDMuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VhcmNoX2J0blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5oKo6KaB5Y675ZOq5YS/77yfXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VhcmNoX2JveF90ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZ1bmN0aW9uc19yb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmdW5jdGlvbl9pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJzd2l0Y2hWaWV3TW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9Db21tb24vM2Quc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsdFwiOiBcIuinhuWbvuWIh+aNolwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZ1bmN0aW9uX2ltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmN1clZpZXdNb2RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmdW5jdGlvbl90ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZ1bmN0aW9uX2l0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcInN3aXRjaEZsb29yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiL0NvbW1vbi/lsYLnuqcuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsdFwiOiBcIualvOWxguWIh+aNolwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZ1bmN0aW9uX2ltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiBcIjk2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IFwiOTZweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMuY3VyVmlzaWJsZUZsb29yTnVtKSsn5bGCJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnVuY3Rpb25fdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmdW5jdGlvbl9pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJzd2l0Y2hNYXBNb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiL0NvbW1vbi/ng63lipvlm74uc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsdFwiOiBcIuWcsOWbvi/ng63lipvlm75cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmdW5jdGlvbl9pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gJ+aYvuekuicrKHRoaXMuY3VyTWFwTW9kZT09PSdtYXAnPyfng63lipvlm74nOiflnLDlm74nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnVuY3Rpb25fdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmdW5jdGlvbl9pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJmb2N1c015U2VsZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9Db21tb24v5a6a5L2NLnN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbHRcIjogXCLplIHlrproh6rlt7FcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmdW5jdGlvbl9pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6ZSB5a6a6Ieq5bexXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnVuY3Rpb25fdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmdW5jdGlvbl9pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJzaG93RW1lcmdlbmN5RXZlbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiL0NvbW1vbi/ntKfmgKUuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsdFwiOiBcIuabtOaWsOe0p+aApeS6i+S7tlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZ1bmN0aW9uX2ltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLmm7TmlrDntKfmgKXkuovku7ZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmdW5jdGlvbl90ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcIm5lYXJieVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIm5lYXJieVRpdGxlXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuaOoue0olwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpZGV0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gJyAnKyh0aGlzLmN1ckNhbWVyYU5hbWV8fCfmnKrnn6UnKSsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNhbWVyYU5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIueahOmZhOi/kVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpZGV0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJuZWFyYnlDb3Vwb25cIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIumZhOi/keS8mOaDoFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvdXBvblRpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6K+m57uGIOGQs1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvdXBvbk1vcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcIm5vdFN1cHBvcnRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJsaXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWFpbkNvdXBvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubm9ybWFsQ291cG9ucy5sZW5ndGg+MH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzY3JvbGxib3R0b21cIjogZnVuY3Rpb24oZXZ0KXt0aGlzLm9uU2Nyb2xsQm90dG9tKCdub3JtYWwnLGV2dCl9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubm9ybWFsQ291cG9uc30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImxpc3QtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicHJvZHVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1haW5Db3Vwb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcIm9uTm9ybWFsQ291cG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gYGh0dHBzOi8vcGxhY2VpbWcuY29tLzE4MC8xMjAvbmF0dXJlYH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsdFwiOiBcIm1vY2tJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0dWZmSW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHVmZk5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0ubmV3UHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5ld1ByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLm9sZFByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvbGRQcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLnN0b3JlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdG9yZU5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxvYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICEodGhpcy5ub3JtYWxDb3Vwb25zLmxlbmd0aD4wKX0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInByb2dyZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2lyY3VsYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuato+WcqOWKoOi9vVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxvYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJuZWFyYnlDb3Vwb25cIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlZJUOS8mOaDoFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvdXBvblRpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6K+m57uGIOGQs1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvdXBvbk1vcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcIm5vdFN1cHBvcnRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJsaXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWFpbkNvdXBvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudmlwQ291cG9ucy5sZW5ndGg+MH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnZpcENvdXBvbnN9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJsaXN0LWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInByb2R1Y3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYWluQ291cG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJvblZpcENvdXBvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIGBodHRwczovL3BsYWNlaW1nLmNvbS8xODAvMTIwL2FueWB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbHRcIjogXCJtb2NrSW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHVmZkltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R1ZmZOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLm5ld1ByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuZXdQcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5vbGRQcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib2xkUHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5zdG9yZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RvcmVOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImxpc3QtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImxvYWRNb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9hZE1vcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbihldnQpe3RoaXMub25TY3JvbGxCb3R0b20oJ3ZpcCcsZXZ0KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuWKoOi9veabtOWkmlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxvYWRNb3JlVGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gISh0aGlzLnZpcENvdXBvbnMubGVuZ3RoPjApfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicHJvZ3Jlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjaXJjdWxhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5q2j5Zyo5Yqg6L29XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIm5lYXJieVJlY29tbWVuZGF0aW9uXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLkuLrkvaDmjqjojZBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuZWFyYnlSZWNvbW1lbmRhdGlvblRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLlj5HnjrDnsr7lk4Hlpb3lupdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWNvbW1lbmRhdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmVjb21tZW5kYXRpb25MaXN0Lmxlbmd0aD4wfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicmVjb21tZW5kYXRpb24taXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlY29tbWVuZGF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJlY29tbWVuZGF0aW9uTGlzdH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1haW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiBgaHR0cHM6Ly9pLnBpY3N1bS5waG90b3MvaWQvJHt0aGlzLiRpdGVtLmltZ0lEfS8yMDAvMjAwLmpwZ2B9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbHRcIjogXCJtb2NrSW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVjb21tZW5kYXRpb24taW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0uc3RvcmVOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdG9yZVRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy4kaXRlbS5yYXRpbmcpKyfliIYnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdG9yZVJhdGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiAn6Led5L2gJysodGhpcy4kaXRlbS5kaXN0YW5jZSkrJ+exsyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0b3JlRGlzdGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb290ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gJ1xcXCInKyh0aGlzLiRpdGVtLmNvbW1lbnQpKydcXFwiJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tbWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gISh0aGlzLnJlY29tbWVuZGF0aW9uTGlzdC5sZW5ndGg+MCl9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwcm9ncmVzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNpcmN1bGFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLmraPlnKjliqDovb1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRhYi1iYXJcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJ0YWItY29udGFpbmVyXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJ0YWItY29udGVudFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicmVwZWF0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50YWJsaXN0fSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5yZW5kZXI/dGhpcy4kaXRlbS5jdXJsOnRoaXMuJGl0ZW0ubnVybH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwidGFiLWltZ1wiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwidGFiLXRleHRcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsnc3RvcmUtaW5mby1iYXInLCB0aGlzLnN0b3JlSW5mb0JhclN0YXR1c119LFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwicHJldmVudEV2ZW50UGVuZXRyYXRpb25cIlxuICAgICAgfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJzcmNcIjogXCIvQ29tbW9uL2Nsb3NlLnN2Z1wiLFxuICAgICAgICAgICAgXCJhbHRcIjogXCLlhbPpl61cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJzdG9yZS1jbG9zZVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IFwiY2xvc2VTdG9yZUluZm9CYXJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuY3VyU3RvcmVJbmZvLm5hbWV9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInN0b3JlLXRpdGxlXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiAn6Led5oKoJysodGhpcy5jdXJTdG9yZUluZm8uZGlzdGFuY2UpKycgfCAnKyh0aGlzLmN1clN0b3JlSW5mby5sb2NhdGlvbil9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInN0b3JlLWRpc3RhbmNlLWxvY2F0aW9uXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJzaG93XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5jdXJTdG9yZUluZm8ubmFtZSE9PSfmiL/pl7QnfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJzdG9yZS1kZXRhaWwtYnRuXCIsXG4gICAgICAgICAgICBcImJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJ2aWV3U3RvcmVEZXRhaWxcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5p+l55yL5bqX6ZO6XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic3RvcmUtZGV0YWlsLWJ0bi10ZXh0XCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInN0b3JlLWNvbnRyb2xsZXItYmFyXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzdG9yZS1jb250cm9sbGVyLWl0ZW1cIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcInRvZ2dsZVNlYXJjaEJhclwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9Db21tb24v5pCc57SiLnN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICBcImFsdFwiOiBcIuWKn+iDveWbvueJh1wiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInN0b3JlLWNvbnRyb2xsZXItaXRlbS1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5pCc57SiXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwic3RvcmUtY29udHJvbGxlci1pdGVtLXRleHRcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic3RvcmUtY29udHJvbGxlci1pdGVtXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJub3RTdXBwb3J0ZWRcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogXCIvQ29tbW9uL+aUtuiXjzIuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYWx0XCI6IFwi5Yqf6IO95Zu+54mHXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwic3RvcmUtY29udHJvbGxlci1pdGVtLWltYWdlXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLmlLbol49cIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJzdG9yZS1jb250cm9sbGVyLWl0ZW0tdGV4dFwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzdG9yZS1jb250cm9sbGVyLWl0ZW1cIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcIm5vdFN1cHBvcnRlZFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9Db21tb24v5YiG5LqrMi5zdmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbHRcIjogXCLlip/og73lm77niYdcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJzdG9yZS1jb250cm9sbGVyLWl0ZW0taW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuWIhuS6q1wiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInN0b3JlLWNvbnRyb2xsZXItaXRlbS10ZXh0XCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInN0b3JlLWNvbnRyb2xsZXItYnRuc1wiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInN0b3JlLWNvbnRyb2xsZXItYnRuXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJzaG93Um91dGVzXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIui3r+e6v1wiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0b3JlLWNvbnRyb2xsZXItYnRuLXRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwic3RvcmUtY29udHJvbGxlci1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwiYmVnaW5OYXZpZ2F0aW9uXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuWvvOiIqlwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0b3JlLWNvbnRyb2xsZXItYnRuLXRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsnc2VhcmNoLWJhcicsIHRoaXMuc2VhcmNoQmFyU3RhdHVzXX0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInNlYXJjaC1iYXItc2VhcmNoYm94XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiL0NvbW1vbi/ov5Tlm54uc3ZnXCIsXG4gICAgICAgICAgICAgICAgXCJhbHRcIjogXCLov5Tlm55cIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzZWFyY2gtYmFyLWJhY2tcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcImNsb3NlU2VhcmNoQmFyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcInNlYXJjaC1iYXItaW5wdXRcIixcbiAgICAgICAgICAgICAgICBcInBsYWNlaG9sZGVyXCI6IFwi5pCc57SiXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc2VhcmNoVmFsdWV9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiaWRcIjogXCJzZWFyY2gtYmFyLWlucHV0XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInNlYXJjaC1iYXItaW5wdXRcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjaGFuZ2VcIjogXCJvbl9zZWFyY2hfdmFsdWVfY2hhbmdlZFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJzZWFyY2gtYmFyLXJlc3VsdHNcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXNTZWFyY2hpbmd9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzZWFyY2gtbm8tcmVzdWx0XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc2VhcmNoUmVzdWx0Lmxlbmd0aD09PTB9LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5peg57uT5p6cXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwic2VhcmNoLW5vLXJlc3VsdC10ZXh0XCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInNlYXJjaC1iYXItcmVzdWx0XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnNlYXJjaFJlc3VsdH0sXG4gICAgICAgICAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnNlYXJjaFJlc3VsdC5sZW5ndGg+MCYmISh0aGlzLnNlYXJjaFJlc3VsdC5sZW5ndGg9PT0wKX0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9Db21tb24v5Z2Q5qCHLnN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICBcImFsdFwiOiBcIuWdkOagh1wiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInNlYXJjaC1yZXN1bHQtaWNvblwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJzZWFyY2gtcmVzdWx0LXRpdGxlLWRlc2NcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbihldnQpe3RoaXMuZm9jdXNPblN0b3JlKHRoaXMuJGl0ZW0uaWQsdGhpcy4kaXRlbS5uYW1lLGV2dCl9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNlYXJjaC1yZXN1bHQtdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNlYXJjaC1yZXN1bHQtZGVzY1wiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWyduYXZpZ2F0aW9uLWJhcicsIHRoaXMubmF2aWdhdGlvbkJhclN0YXR1c119LFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJuYXZpZ2F0aW9uLWJhci10aXRsZS1yZW1haW5cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gJ+ato+WcqOWJjeW+gCAnKyh0aGlzLm5hdmlnYXRpb25EZXNjcmlwdGlvbi5uYW1lKX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwibmF2aWdhdGlvbi1iYXItdGl0bGVcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICfov5jliakgJysodGhpcy5uYXZpZ2F0aW9uRGVzY3JpcHRpb24ucmVtYWluKX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwibmF2aWdhdGlvbi1iYXItcmVtYWluXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcIm5hdmlnYXRpb24tYmFyLWRlc2Mtd3JhcFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9Db21tb24vZnJvbnQuc3ZnXCIsXG4gICAgICAgICAgICAgICAgXCJhbHRcIjogXCLlr7zoiKrlm77moIdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJuYXZpZ2F0aW9uLWljb25cIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJuYXZpZ2F0aW9uLWRlc2NcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5uYXZpZ2F0aW9uRGVzY3JpcHRpb24uZGVzY31cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwibmF2aWdhdGlvbi1jdXItZGVzY1wiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5uYXZpZ2F0aW9uRGVzY3JpcHRpb24ubmV4dH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwibmF2aWdhdGlvbi1uZXh0LWRlc2NcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm5hdmlnYXRpb25EZXNjcmlwdGlvbi50aW1lfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJuYXZpZ2F0aW9uLXRpbWVcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwibmF2aS1ib3R0b20tYnRuc1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwibmF2aS1ib3R0b20tYnRuXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJyZXNldE5hdmlnYXRpb25cIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6YeN572u5a+86IiqXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwibmF2aS1ib3R0b20tYnRuLXRleHRcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwibmF2aS1ib3R0b20tYnRuXCIsXG4gICAgICAgICAgICAgICAgXCJidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwiY2FuY2VsTmF2aWdhdGlvblwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLlj5bmtojlr7zoiKpcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJuYXZpLWJvdHRvbS1idG4tdGV4dFwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG52YXIgX3N5c3RlbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5wcm9tcHRcIikpO1xuXG52YXIgX3N5c3RlbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0uYmx1ZXRvb3RoXCIpKTtcblxudmFyIF9zeXN0ZW0zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLmZldGNoXCIpKTtcblxudmFyIF9idCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL0NvbW1vbi9idC5qc1wiKSk7XG5cbnZhciBfc3lzdGVtNCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5hdWRpb1wiKSk7XG5cbnZhciBfc3lzdGVtNSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5zdG9yYWdlXCIpKTtcblxudmFyIF9jb25zdCA9IHJlcXVpcmUoXCIuLi9jb25zdC5qc1wiKTtcblxudmFyIF9zeXN0ZW02ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLnNlbnNvclwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHVibGljOiB7XG4gICAgcm91dGVGcm9tOiAnJ1xuICB9LFxuICBwcm90ZWN0ZWQ6IHtcbiAgICB0aXRsZTogJ1dvcmxkJyxcbiAgICB0cnVzdGVkdXJsOiBbX2NvbnN0LndlYlVybF0sXG4gICAgdW5TcmM6IF9jb25zdC51Y1VybCxcbiAgICBzcmM6IF9jb25zdC53ZWJVcmwsXG4gICAgc2VhcmNoQmFyU3RhdHVzOiAnJyxcbiAgICBjb250cm9sbGVyQmFyU3RhdHVzOiAnJyxcbiAgICBzdG9yZUluZm9CYXJTdGF0dXM6ICcnLFxuICAgIG5hdmlnYXRpb25CYXJTdGF0dXM6ICcnLFxuICAgIGN1clN0b3JlSW5mbzoge1xuICAgICAgaWQ6ICcnLFxuICAgICAgbmFtZTogJ+W/heiDnOWuoicsXG4gICAgICBsb2NhdGlvbjogJ+WVhuWcuuS4gOWxgkEzNycsXG4gICAgICBkaXN0YW5jZTogJzMwMOexsydcbiAgICB9LFxuICAgIG5hdmlnYXRpb25EZXNjcmlwdGlvbjoge1xuICAgICAgbmFtZTogJ+acquefpScsXG4gICAgICBkZXNjOiAn5q2j5Zyo5Yqg6L29JyxcbiAgICAgIG5leHQ6ICfmraPlnKjliqDovb0nLFxuICAgICAgdGltZTogJ+acquefpScsXG4gICAgICByZW1haW46ICfmnKrnn6UnXG4gICAgfSxcbiAgICBpc1RvdWNoaW5nQ29udHJvbGxlckJhcjogZmFsc2UsXG4gICAgY2Fubm90Q2FuY2VsOiBmYWxzZSxcbiAgICBjdXJWaWV3TW9kZTogJzJEJyxcbiAgICBjdXJWaXNpYmxlRmxvb3JOdW06IDEsXG4gICAgY3VyVXNlckZsb29yTnVtOiAxLFxuICAgIGN1ckRpcmVjdGlvbjogNDUsXG4gICAgZGVzdGluYXRpb25DYW1lcmFJRDogMCxcbiAgICBjdXJDYW1lcmFJRDogLTEsXG4gICAgbGFzdENhbWVyYUlEOiAtMixcbiAgICBjdXJYOiAnJyxcbiAgICBjdXJZOiAnJyxcbiAgICBjdXJDYW1lcmFOYW1lOiAnJyxcbiAgICBjdXJNYXBNb2RlOiAnbWFwJyxcbiAgICB0YWJsaXN0OiBbe1xuICAgICAgdGl0bGU6ICflnLDlm74nLFxuICAgICAgcmVuZGVyOiBmYWxzZSxcbiAgICAgIG51cmw6ICcuLi9Db21tb24v5Zyw5Zu+X25vci5zdmcnLFxuICAgICAgY3VybDogJy4uL0NvbW1vbi/lnLDlm75fYWN0LnN2ZydcbiAgICB9LCB7XG4gICAgICB0aXRsZTogJ+mZhOi/kScsXG4gICAgICByZW5kZXI6IGZhbHNlLFxuICAgICAgbnVybDogJy4uL0NvbW1vbi/pmYTov5HmtLvliqhfbm9yLnN2ZycsXG4gICAgICBjdXJsOiAnLi4vQ29tbW9uL+mZhOi/kea0u+WKqF9hY3Quc3ZnJ1xuICAgIH1dLFxuICAgIGlzU2VhcmNoaW5nOiBmYWxzZSxcbiAgICBzZWFyY2hSZXN1bHQ6IFtdLFxuICAgIHNlYXJjaFZhbHVlOiAnJyxcbiAgICBsb2NhdGlvblVwZGF0ZUludGVydmFsSUQ6IDAsXG4gICAgbm9ybWFsQ291cG9uczogW10sXG4gICAgdmlwQ291cG9uczogW10sXG4gICAgcmVjb21tZW5kYXRpb25MaXN0OiBbXVxuICB9LFxuICBvbkluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcIuadpeiHqlwiLCB0aGlzLnJvdXRlRnJvbSk7XG4gIH0sXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgX3N5c3RlbTYuZGVmYXVsdC5zdWJzY3JpYmVDb21wYXNzKHtcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAocmV0KSB7XG4gICAgICAgIGxldCByZXN1bHQgPSAxODAgLyBNYXRoLlBJICogcmV0LmRpcmVjdGlvbjtcbiAgICAgICAgdGhhdC5jdXJEaXJlY3Rpb24gPSAtcmVzdWx0O1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMubG9jYXRpb25VcGRhdGVJbnRlcnZhbElEKTtcblxuICAgIF9zeXN0ZW02LmRlZmF1bHQudW5zdWJzY3JpYmVDb21wYXNzKCk7XG4gIH0sXG5cbiAgb25UYWJJZHhDaGFuZ2UoZXZ0KSB7XG4gICAgdGhpcy5tb2RpZnlMaXN0SXRlbURhdGEoZXZ0LmluZGV4KTtcblxuICAgIGlmIChldnQuaW5kZXggPT09IDEpIHtcbiAgICAgIHRoaXMuaW5pdE5lYXJCeURhdGEoKTtcbiAgICB9XG4gIH0sXG5cbiAgbW9kaWZ5TGlzdEl0ZW1EYXRhKGluZGV4KSB7XG4gICAgdGhpcy50YWJsaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBlbGVtZW50LnJlbmRlciA9IGZhbHNlO1xuICAgIH0pO1xuICAgIHRoaXMudGFibGlzdFtpbmRleF0ucmVuZGVyID0gdHJ1ZTtcbiAgfSxcblxuICBpbml0TmVhckJ5RGF0YSgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucmVjb21tZW5kYXRpb25MaXN0ID0gW3tcbiAgICAgICAgaW1nSUQ6IDExMSxcbiAgICAgICAgc3RvcmVOYW1lOiAn6bqm5b2T5YqzJyxcbiAgICAgICAgcmF0aW5nOiAnNC42JyxcbiAgICAgICAgZGlzdGFuY2U6ICcxMy40JyxcbiAgICAgICAgY29tbWVudDogJ+WlveWQg+WlveeOqeWlveWunuaDoH4nXG4gICAgICB9LCB7XG4gICAgICAgIGltZ0lEOiAxMTIsXG4gICAgICAgIHN0b3JlTmFtZTogJ+W/heiDnOWuoicsXG4gICAgICAgIHJhdGluZzogJzQuNCcsXG4gICAgICAgIGRpc3RhbmNlOiAnMzIuNCcsXG4gICAgICAgIGNvbW1lbnQ6ICfmiqvokKjotoXnuqflpKfvvIzlkIPnmoTotoXov4fnmL7vvZ4nXG4gICAgICB9LCB7XG4gICAgICAgIGltZ0lEOiAxMTAsXG4gICAgICAgIHN0b3JlTmFtZTogJ+aYn+W3tOWFiycsXG4gICAgICAgIHJhdGluZzogJzQuOScsXG4gICAgICAgIGRpc3RhbmNlOiAnMzYuMicsXG4gICAgICAgIGNvbW1lbnQ6ICfnnIvkuabjgIHogYrlpKnjgIHoo4UxM+eahOacgOS9s+WOu+WkhO+9nidcbiAgICAgIH0sIHtcbiAgICAgICAgaW1nSUQ6IDE3MSxcbiAgICAgICAgc3RvcmVOYW1lOiAn5Zyj546b5Li9JyxcbiAgICAgICAgcmF0aW5nOiAnMy43JyxcbiAgICAgICAgZGlzdGFuY2U6ICcyNi4zJyxcbiAgICAgICAgY29tbWVudDogJ+W+iOWlveeahOW6l+mTuu+9nuijheS/rueahOW+iOWlve+9nidcbiAgICAgIH0sIHtcbiAgICAgICAgaW1nSUQ6IDE0NSxcbiAgICAgICAgc3RvcmVOYW1lOiAn6IKv5b635Z+6JyxcbiAgICAgICAgcmF0aW5nOiAnNC41JyxcbiAgICAgICAgZGlzdGFuY2U6ICcxNy42JyxcbiAgICAgICAgY29tbWVudDogJ+Wwj+WtqeavlOi+g+eIseWQg++8jOWkp+S6uuWwseaYr+mZquWtqeWtkOWQg+WQg+e9ouS6hu+9nidcbiAgICAgIH1dO1xuICAgICAgdGhpcy5ub3JtYWxDb3Vwb25zID0gW3tcbiAgICAgICAgaW1nSUQ6IDEyMyxcbiAgICAgICAgdGl0bGU6ICfmtbfnm5Dpu5Hph5HlkpbllaEnLFxuICAgICAgICBvbGRQcmljZTogJ8KlNTEnLFxuICAgICAgICBuZXdQcmljZTogJ8KlMjUuNScsXG4gICAgICAgIHN0b3JlOiAn5rW35bKp5ZKW5ZWhJ1xuICAgICAgfSwge1xuICAgICAgICBpbWdJRDogMTI5LFxuICAgICAgICB0aXRsZTogJ+WltuiMtuS4ieWFhOW8nycsXG4gICAgICAgIG9sZFByaWNlOiAnwqU2LjUnLFxuICAgICAgICBuZXdQcmljZTogJ8KlMTMnLFxuICAgICAgICBzdG9yZTogJ0NvQ2/pg73lj68nXG4gICAgICB9LCB7XG4gICAgICAgIGltZ0lEOiAxMzMsXG4gICAgICAgIHRpdGxlOiAn5rW35bqV5o2eMzDlhYPkvJjmg6DliLgnLFxuICAgICAgICBvbGRQcmljZTogJ8KlMzAnLFxuICAgICAgICBuZXdQcmljZTogJ8KlMjguOCcsXG4gICAgICAgIHN0b3JlOiAn5rW35bqV5o2eJ1xuICAgICAgfSwge1xuICAgICAgICBpbWdJRDogMTM0LFxuICAgICAgICB0aXRsZTogJ+Wkj+WogeWkt+awtOaenOaKq+iQqDnlr7gnLFxuICAgICAgICBvbGRQcmljZTogJ8KlMTkuOScsXG4gICAgICAgIG5ld1ByaWNlOiAnwqU5LjknLFxuICAgICAgICBzdG9yZTogJ+Wkp+WYtOW3tOaEj+W8j+aKq+iQqCdcbiAgICAgIH1dO1xuICAgICAgdGhpcy52aXBDb3Vwb25zID0gW3tcbiAgICAgICAgaW1nSUQ6IDExMCxcbiAgICAgICAgdGl0bGU6ICfmtbfnm5Dpu5Hph5HlkpbllaEnLFxuICAgICAgICBvbGRQcmljZTogJ8KlNTEnLFxuICAgICAgICBuZXdQcmljZTogJ8KlMTUuNScsXG4gICAgICAgIHN0b3JlOiAn5rW35bKp5ZKW5ZWhJ1xuICAgICAgfSwge1xuICAgICAgICBpbWdJRDogMTQxLFxuICAgICAgICB0aXRsZTogJ+WltuiMtuS4ieWFhOW8nycsXG4gICAgICAgIG9sZFByaWNlOiAnwqUzLjUnLFxuICAgICAgICBuZXdQcmljZTogJ8KlMTMnLFxuICAgICAgICBzdG9yZTogJ0NvQ2/pg73lj68nXG4gICAgICB9LCB7XG4gICAgICAgIGltZ0lEOiAxMzIsXG4gICAgICAgIHRpdGxlOiAn5rW35bqV5o2eMzDlhYPkvJjmg6DliLgnLFxuICAgICAgICBvbGRQcmljZTogJ8KlMzAnLFxuICAgICAgICBuZXdQcmljZTogJ8KlMjUuOCcsXG4gICAgICAgIHN0b3JlOiAn5rW35bqV5o2eJ1xuICAgICAgfSwge1xuICAgICAgICBpbWdJRDogMTMxLFxuICAgICAgICB0aXRsZTogJ+Wkj+WogeWkt+awtOaenOaKq+iQqDnlr7gnLFxuICAgICAgICBvbGRQcmljZTogJ8KlMTkuOScsXG4gICAgICAgIG5ld1ByaWNlOiAnwqU1LjknLFxuICAgICAgICBzdG9yZTogJ+Wkp+WYtOW3tOaEj+W8j+aKq+iQqCdcbiAgICAgIH1dO1xuICAgIH0sIDE1MDApO1xuICB9LFxuXG4gIGJlZ2luU3luY0xvY2F0aW9uKCkge1xuICAgIHRoaXMubG9jYXRpb25VcGRhdGVJbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKGdsb2JhbC5wcm9kdWN0aW9udGlwID09PSAnZGV2Jykge1xuICAgICAgICBpZiAodGhpcy5kZXN0aW5hdGlvbkNhbWVyYUlEICE9PSAwKSB7XG4gICAgICAgICAgdGhpcy5jdXJDYW1lcmFJRCA9IHRoaXMuZGVzdGluYXRpb25DYW1lcmFJRDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmN1ckNhbWVyYUlEID0gNzY2Mzg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jdXJDYW1lcmFJRCAhPT0gdGhpcy5sYXN0Q2FtZXJhSUQpIHtcbiAgICAgICAgICB0aGlzLmxhc3RDYW1lcmFJRCA9IHRoaXMuY3VyQ2FtZXJhSUQ7XG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgX3N5c3RlbTMuZGVmYXVsdC5mZXRjaCh7XG4gICAgICAgICAgICB1cmw6IGAke19jb25zdC5iYXNlVXJsfS9nZXRDYW1lcmE/aWQ9JHt0aGlzLmN1ckNhbWVyYUlEfWBcbiAgICAgICAgICB9KS5jYXRjaChlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlcy5kYXRhO1xuXG4gICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09PSAyMDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6I635Y+WY2FtZXJhXCIpO1xuICAgICAgICAgICAgY29uc3QgY2FtZXJhSW5mbyA9IEpTT04ucGFyc2UocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgdGhpcy5jdXJDYW1lcmFOYW1lID0gY2FtZXJhSW5mby5wb3NpdGlvbjtcbiAgICAgICAgICAgIHRoaXMuY3VyWCA9IGNhbWVyYUluZm8ubGF0aXR1ZGU7XG4gICAgICAgICAgICB0aGlzLmN1clkgPSBjYW1lcmFJbmZvLmxvbmdpdHVkZTtcbiAgICAgICAgICAgIHRoaXMuY3VyVXNlckZsb29yTnVtID0gY2FtZXJhSW5mby5mbG9vcjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VyWCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1clkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfc3lzdGVtLmRlZmF1bHQuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ2dldENhbWVyYSDlh7rplJknXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7fVxuXG4gICAgICB0aGlzLnVuaXZlcnNhbFJlZnJlc2hQcm9jZXNzKHRoaXMuY3VyQ2FtZXJhSUQpO1xuICAgIH0sIDIwMCk7XG4gICAgdGhpcy5vcGVuQ29udHJvbGxlckJhcigpO1xuICB9LFxuXG4gIG9uV2ViUGFnZVN0YXJ0KCkge30sXG5cbiAgb25XZWJQYWdlRmluaXNoKCkge1xuICAgIGNvbnNvbGUubG9nKFwiUGFnZSBGaW5pc2hlZFwiKTtcbiAgfSxcblxuICBvblRpdGxlcmVjZWl2ZSh7XG4gICAgdGl0bGU6IGRhdGFcbiAgfSkge1xuICAgIHRoaXMuJHBhZ2Uuc2V0VGl0bGVCYXIoe1xuICAgICAgdGV4dDogZGF0YVxuICAgIH0pO1xuICB9LFxuXG4gIG9uV2ViRXJyb3IoKSB7fSxcblxuICBvbldlYk1lc3NhZ2UoZSkge1xuICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XG4gICAgY29uc3Qgc3ltYm9sID0gZS5tZXNzYWdlLnNsaWNlKDAsIDMpO1xuXG4gICAgaWYgKHN5bWJvbCAhPT0gJ1dlYicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpbmZvID0gZS5tZXNzYWdlLnNsaWNlKDMpO1xuICAgIHRoaXMucnVuUHJvdG9jb2woaW5mbyk7XG4gIH0sXG5cbiAgcG9zdFRvV2ViKGRhdGEpIHtcbiAgICBpZiAodHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQoJ3dlYicpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgbWVzc2FnZTogYEhhcCR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9YFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgdGhpcy4kZWxlbWVudCgnd2ViJykucG9zdE1lc3NhZ2Uoe1xuICAgICAgICBtZXNzYWdlOiBgSGFwJHtkYXRhfWBcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBvblRvdWNoTW92ZUNvbnRyb2xsZXJCYXI6IGZ1bmN0aW9uIChldmVudCkge30sXG4gIG9uVG91Y2hTdGFydENvbnRyb2xsZXJCYXI6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlzVG91Y2hpbmdDb250cm9sbGVyQmFyID0gdHJ1ZTtcbiAgfSxcbiAgb25Ub3VjaGluZ0VuZENvbnRyb2xsZXJCYXI6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlzVG91Y2hpbmdDb250cm9sbGVyQmFyID0gZmFsc2U7XG4gIH0sXG5cbiAgYXN5bmMgcnVuUHJvdG9jb2woaW5mbykge1xuICAgIGxldCByZXMgPSAoMCwgX2NvbnN0LmlzSlNPTikoaW5mbyk7XG5cbiAgICBpZiAodHlwZW9mIHJlcyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgY29uc3QgdHlwZSA9IHJlcy50eXBlO1xuICAgICAgY29uc3QgZGV0YWlsID0gcmVzLmRldGFpbDtcbiAgICAgIGNvbnNvbGUubG9nKFwi5aSE55CG6auY57qn5L+h5Y+3XCIpO1xuICAgICAgY29uc29sZS5sb2codHlwZSk7XG4gICAgICBjb25zb2xlLmxvZyhkZXRhaWwpO1xuXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnc3RvcmVJbmZvJzpcbiAgICAgICAgICBpZiAodHlwZW9mIGRldGFpbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRoaXMuY3VyU3RvcmVJbmZvLmlkID0gZGV0YWlsLmlkO1xuICAgICAgICAgICAgdGhpcy5jdXJTdG9yZUluZm8ubmFtZSA9IGRldGFpbC5uYW1lO1xuICAgICAgICAgICAgdGhpcy5vcGVuU3RvcmVJbmZvQmFyKCk7XG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgX3N5c3RlbTMuZGVmYXVsdC5mZXRjaCh7XG4gICAgICAgICAgICAgIHVybDogYCR7X2NvbnN0LmJhc2VVcmx9L2dldENhbWVyYT9pZD0ke2RldGFpbC5pZH1gXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXMuZGF0YTtcblxuICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09PSAyMDApIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlr7zoiKpcIik7XG4gICAgICAgICAgICAgIGNvbnN0IGQgPSBKU09OLnBhcnNlKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgICAgdGhpcy5jdXJTdG9yZUluZm8ubG9jYXRpb24gPSBkLmxvZ2ljYWxQb3NpdGlvbjtcbiAgICAgICAgICAgICAgdGhpcy5jdXJTdG9yZUluZm8uZGlzdGFuY2UgPSB0aGlzLmNhbGNEaXN0YW5jZUJ5TEwoZC5sYXRpdHVkZSwgZC5sb25naXR1ZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3NlYXJjaFJlc3VsdCc6XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGV0YWlsKSkge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hSZXN1bHQgPSBkZXRhaWwuc2xpY2UoMCwgNik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9zeXN0ZW0uZGVmYXVsdC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICBtZXNzYWdlOiAnZGV0YWls5pWw5o2u57G75Z6L6ZSZ6K+vJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIm5hdmlEZXNjXCI6XG4gICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uRGVzY3JpcHRpb24gPSBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmF2aWdhdGlvbkRlc2NyaXB0aW9uLm5hbWVcbiAgICAgICAgICB9LCBkZXRhaWwpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJlcnJvckluZm9cIjpcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIuaUtuWIsGVycm9ySW5mb1wiKTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgZGV0YWlsICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZGV0YWlsID0gSlNPTi5wYXJzZShkZXRhaWwpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF9zeXN0ZW0uZGVmYXVsdC5zaG93RGlhbG9nKHtcbiAgICAgICAgICAgIHRpdGxlOiBkZXRhaWwuZXJyb3JUaXRsZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGRldGFpbC5lcnJvckluZm8sXG4gICAgICAgICAgICBidXR0b25zOiBbe1xuICAgICAgICAgICAgICB0ZXh0OiBcIuWlveWQp1wiLFxuICAgICAgICAgICAgICBjb2xvcjogJyMzM2RkNDQnXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoYW5kbGluZyBjYWxsYmFjaycpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbmNlbDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hhbmRsaW5nIGNhbmNlbCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChkYXRhLCBjb2RlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBoYW5kbGluZyBmYWlsLCBjb2RlID0gJHtjb2RlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncmV0JzpcbiAgICAgICAgICB0aGlzLnByb2Nlc3NSZXR1cm5Qcm9wZXJ0eShkZXRhaWwpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVzID09PSBcImJvb2xlYW5cIikge1xuICAgICAgc3dpdGNoIChpbmZvKSB7XG4gICAgICAgIGNhc2UgXCJSZWFkeVwiOlxuICAgICAgICAgIHRoaXMuYmVnaW5TeW5jTG9jYXRpb24oKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5yb3V0ZUZyb20pIHtcbiAgICAgICAgICAgICAgY2FzZSBcIlVyZ2VuY3lcIjpcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgX3N5c3RlbTMuZGVmYXVsdC5mZXRjaCh7XG4gICAgICAgICAgICAgICAgICB1cmw6IGAke19jb25zdC5iYXNlVXJsfS9nZXRCZXN0UGF0aD9jYW1lcmFpZD0ke3RoaXMuY3VyQ2FtZXJhSUR9YFxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIEdCUFwiLCBlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSByZXMuZGF0YTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBlcE1zZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3JvdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiBKU09OLnBhcnNlKHJlc3VsdC5kYXRhKVxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIHRoaXMucG9zdFRvV2ViKGVwTXNnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkJhZCBSZXNwb25zZSwgQ29kZTpcIiwgcmVzdWx0LmNvZGUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgXCJFbWVyZ2VuY3lFdmVudHNcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFbWVyZ2VuY3lFdmVudHMoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihcIlR5cGUgRXJyb3IgaW4gaXNKU09OXCIpO1xuICAgIH1cbiAgfSxcblxuICBhc3luYyBwcm9jZXNzUmV0dXJuUHJvcGVydHkobXNnKSB7XG4gICAgaWYgKHR5cGVvZiBtc2cgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzd2l0Y2ggKG1zZykge1xuICAgICAgICBjYXNlIFwiMkRcIjpcbiAgICAgICAgICB0aGlzLmN1clZpZXdNb2RlID0gXCIyRFwiO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCIzRFwiOlxuICAgICAgICAgIHRoaXMuY3VyVmlld01vZGUgPSBcIjNEXCI7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIkhlYXRNYXBcIjpcbiAgICAgICAgICB0aGlzLmN1ck1hcE1vZGUgPSBcImhlYXRtYXBcIjtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiTWFwXCI6XG4gICAgICAgICAgdGhpcy5jdXJNYXBNb2RlID0gXCJtYXBcIjtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiRjFcIjpcbiAgICAgICAgY2FzZSBcIkYyXCI6XG4gICAgICAgIGNhc2UgXCJGM1wiOlxuICAgICAgICAgIHRoaXMuY3VyVmlzaWJsZUZsb29yTnVtID0gbXNnLnNsaWNlKDEpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJOYXZpQmVnaW5cIjpcbiAgICAgICAgICBfc3lzdGVtLmRlZmF1bHQuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICfmqKHmi5/lr7zoiKrlvIDlp4snXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgX3N5c3RlbTMuZGVmYXVsdC5mZXRjaCh7XG4gICAgICAgICAgICB1cmw6IGAke19jb25zdC5iYXNlVXJsfS9nZXRSYW5kb21Qcm9tb3RlQXVkaW9VcmxgXG4gICAgICAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gICAgICAgICAgbGV0IHJlc3VsdCA9IHJlcy5kYXRhO1xuXG4gICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09PSAyMDApIHtcbiAgICAgICAgICAgIGxldCBhdWRpb1VybCA9IHJlc3VsdC5kYXRhO1xuICAgICAgICAgICAgX3N5c3RlbTQuZGVmYXVsdC5zcmMgPSBhdWRpb1VybC5zcGxpdCgnXCInKVsxXTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKF9zeXN0ZW00LmRlZmF1bHQpO1xuICAgICAgICAgICAgX3N5c3RlbTQuZGVmYXVsdC5ub3RpZmljYXRpb25WaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBfc3lzdGVtNC5kZWZhdWx0Lmxvb3AgPSBmYWxzZTtcbiAgICAgICAgICAgIF9zeXN0ZW00LmRlZmF1bHQuYXV0b3BsYXkgPSB0cnVlO1xuXG4gICAgICAgICAgICBfc3lzdGVtNC5kZWZhdWx0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIumUmeivr1wiLCBlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9zeXN0ZW0uZGVmYXVsdC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICBtZXNzYWdlOiBcIumfs+mikeaOpeWPo+mUmeivr1wiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmNhbm5vdENhbmNlbCA9IHRydWU7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNhbm5vdENhbmNlbCA9IGZhbHNlO1xuICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICAgIHRoaXMub3Blbk5hdmlnYXRpb25CYXIoKTtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVNlYXJjaEJhcihcImNsb3NlZFwiKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiTmF2aUVuZFwiOlxuICAgICAgICAgIF9zeXN0ZW0uZGVmYXVsdC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgbWVzc2FnZTogJ+aCqOW3suWIsOi+vuebrueahOWcsFxcbuaooeaLn+WvvOiIque7k+adnydcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHRoaXMuY2xvc2VOYXZpZ2F0aW9uQmFyKCk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJlZ2luU3luY0xvY2F0aW9uKCk7XG4gICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiTmF2aUNhbmNlbFwiOlxuICAgICAgICAgIF9zeXN0ZW0uZGVmYXVsdC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgbWVzc2FnZTogJ+aCqOW3suWPlua2iOaooeaLn+WvvOiIqidcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHRoaXMuY2xvc2VOYXZpZ2F0aW9uQmFyKCk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJlZ2luU3luY0xvY2F0aW9uKCk7XG4gICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiUEVSXCI6XG4gICAgICAgICAgX3N5c3RlbS5kZWZhdWx0LnNob3dUb2FzdCh7XG4gICAgICAgICAgICBtZXNzYWdlOiAn5ZCO56uv6Lev5b6E6IqC54K56Zeu6aKYJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIkVSUk9SXCI6XG4gICAgICAgICAgX3N5c3RlbS5kZWZhdWx0LnNob3dUb2FzdCh7XG4gICAgICAgICAgICBtZXNzYWdlOiAn5pyq55+l6ZSZ6K+v77yBJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLmxvZyhg6L+U5Zue5bGe5oCn77yaJHttc2d9YCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHRvZ2dsZUNvbnRyb2xsZXJCYXJTdGF0dXM6IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgY29uc29sZS5sb2coXCLngrnlh7vkuYvliY3nirbmgIFcIik7XG4gICAgY29uc29sZS5sb2codGhpcy5jb250cm9sbGVyQmFyU3RhdHVzKTtcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh0eXBlID09PSAnc2hvd2VkJykge1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXJCYXJTdGF0dXMgPSAnY29udHJvbGxlci1iYXItbWluaWVkLXNob3dlZCc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdtaW5pZWQnICYmIHRoaXMuY29udHJvbGxlckJhclN0YXR1cyA9PT0gJ2NvbnRyb2xsZXItYmFyLW1pbmllZC1zaG93ZWQnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5pyA5bCP5YyW5o6n5Yi25qCPXCIpO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXJCYXJTdGF0dXMgPSAnY29udHJvbGxlci1iYXItc2hvd2VkLW1pbmllZCc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb250cm9sbGVyQmFyU3RhdHVzID09PSAnJykge1xuICAgICAgdGhpcy5jb250cm9sbGVyQmFyU3RhdHVzID0gJ2NvbnRyb2xsZXItYmFyLW1pbmllZC1zaG93ZWQnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY29udHJvbGxlckJhclN0YXR1cyA9IHRoaXMuY29udHJvbGxlckJhclN0YXR1cyA9PT0gJ2NvbnRyb2xsZXItYmFyLW1pbmllZC1zaG93ZWQnID8gJ2NvbnRyb2xsZXItYmFyLXNob3dlZC1taW5pZWQnIDogJ2NvbnRyb2xsZXItYmFyLW1pbmllZC1zaG93ZWQnO1xuICAgIGNvbnNvbGUubG9nKFwi54K55Ye75LmL5ZCO54q25oCBXCIpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY29udHJvbGxlckJhclN0YXR1cyk7XG4gIH0sXG4gIGNvbnRyb2xsZXJCYXJDbGlja0RlbGVnYXRvcjogZnVuY3Rpb24gKGV2ZW50KSB7fSxcbiAgb25fc2VhcmNoX3ZhbHVlX2NoYW5nZWQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgdGhpcy5zZWFyY2hWYWx1ZSA9IGUudGV4dDtcblxuICAgIGlmICh0aGlzLnNlYXJjaFZhbHVlICE9PSBcIlwiKSB7XG4gICAgICB0aGlzLmlzU2VhcmNoaW5nID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHNlYXJjaE1zZyA9IHtcbiAgICAgICAgdHlwZTogJ3NlYXJjaCcsXG4gICAgICAgIGRldGFpbDoge1xuICAgICAgICAgIGtleXdvcmQ6IHRoaXMuc2VhcmNoVmFsdWVcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHRoaXMucG9zdFRvV2ViKHNlYXJjaE1zZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VhcmNoUmVzdWx0ID0gW107XG4gICAgfVxuICB9LFxuICBzd2l0Y2hWaWV3TW9kZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucG9zdFRvV2ViKHRoaXMuY3VyVmlld01vZGUgPT09ICcyRCcgPyAnM0QnIDogJzJEJyk7XG4gIH0sXG4gIHN3aXRjaEZsb29yOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5wb3N0VG9XZWIoYEYke3RoaXMuY3VyVmlzaWJsZUZsb29yTnVtICUgMyArIDF9YCk7XG4gIH0sXG4gIHN3aXRjaE1hcE1vZGU6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5jdXJNYXBNb2RlID09PSAnbWFwJykge1xuICAgICAgY29uc3QgYXBwbHlIZWF0TWFwTXNnID0ge1xuICAgICAgICB0eXBlOiAnYXBwbHlIZWF0TWFwJyxcbiAgICAgICAgZGV0YWlsOiBudWxsXG4gICAgICB9O1xuICAgICAgdGhpcy5wb3N0VG9XZWIoSlNPTi5zdHJpbmdpZnkoYXBwbHlIZWF0TWFwTXNnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlbW92ZUhlYXRNYXBNc2cgPSB7XG4gICAgICAgIHR5cGU6ICdyZW1vdmVIZWF0TWFwJyxcbiAgICAgICAgZGV0YWlsOiBudWxsXG4gICAgICB9O1xuICAgICAgdGhpcy5wb3N0VG9XZWIoSlNPTi5zdHJpbmdpZnkocmVtb3ZlSGVhdE1hcE1zZykpO1xuICAgIH1cbiAgfSxcbiAgdG9nZ2xlU3RvcmVJbmZvQmFyOiBmdW5jdGlvbiAodHlwZSwgaXNOYXZpKSB7XG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHR5cGUgPT09ICdzaG93ZWQnKSB7XG4gICAgICAgIHRoaXMuc3RvcmVJbmZvQmFyU3RhdHVzID0gJ3N0b3JlLWluZm8tYmFyLWNsb3NlZC1zaG93ZWQnO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnY2xvc2VkJykge1xuICAgICAgICB0aGlzLnN0b3JlSW5mb0JhclN0YXR1cyA9ICdzdG9yZS1pbmZvLWJhci1zaG93ZWQtY2xvc2VkJztcblxuICAgICAgICBpZiAodHlwZW9mIGlzTmF2aSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50b2dnbGVDb250cm9sbGVyQmFyU3RhdHVzKCdzaG93ZWQnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0b3JlSW5mb0JhclN0YXR1cyA9PT0gJycpIHtcbiAgICAgIHRoaXMuc3RvcmVJbmZvQmFyU3RhdHVzID0gJ3N0b3JlLWluZm8tYmFyLWNsb3NlZC1zaG93ZWQnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RvcmVJbmZvQmFyU3RhdHVzKTtcbiAgICB0aGlzLnN0b3JlSW5mb0JhclN0YXR1cyA9IHRoaXMuc3RvcmVJbmZvQmFyU3RhdHVzID09PSAnc3RvcmUtaW5mby1iYXItc2hvd2VkLWNsb3NlZCcgPyAnc3RvcmUtaW5mby1iYXItY2xvc2VkLXNob3dlZCcgOiAnc3RvcmUtaW5mby1iYXItc2hvd2VkLWNsb3NlZCc7XG4gIH0sXG4gIHByZXZlbnRFdmVudFBlbmV0cmF0aW9uOiBmdW5jdGlvbiAoKSB7fSxcbiAgdmlld1N0b3JlRGV0YWlsOiBmdW5jdGlvbiAoKSB7XG4gICAgX3N5c3RlbS5kZWZhdWx0LnNob3dUb2FzdCh7XG4gICAgICBtZXNzYWdlOiAn5pqC5LiN5pSv5oyBJyxcbiAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgfSk7XG4gIH0sXG5cbiAgdW5pdmVyc2FsUmVmcmVzaFByb2Nlc3ModmFsKSB7XG4gICAgY29uc3QgbXNnID0ge1xuICAgICAgdHlwZTogJ2xvYycsXG4gICAgICBkZXRhaWw6IHtcbiAgICAgICAgeDogdGhpcy5jdXJYLFxuICAgICAgICB5OiB0aGlzLmN1clksXG4gICAgICAgIGZsb29yTnVtOiB0aGlzLmN1clVzZXJGbG9vck51bSxcbiAgICAgICAgZGlyZWN0aW9uOiB0aGlzLmN1ckRpcmVjdGlvblxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5wb3N0VG9XZWIobXNnKTtcbiAgfSxcblxuICByYW5kb21DdXJMb2NhdGlvbkluZm9HZW5lcmF0b3IoKSB7XG4gICAgbGV0IHhSYW5nZSA9IFtfY29uc3QubWFwT2JqZWN0Lm1pblgsIF9jb25zdC5tYXBPYmplY3QubWF4WF07XG4gICAgbGV0IHlSYW5nZSA9IFtfY29uc3QubWFwT2JqZWN0Lm1pblksIF9jb25zdC5tYXBPYmplY3QubWF4WV07XG4gICAgbGV0IHJhbmRYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5jZWlsKHhSYW5nZVsxXSAtIHhSYW5nZVswXSkpICsgeFJhbmdlWzBdO1xuICAgIGxldCByYW5kWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguY2VpbCh5UmFuZ2VbMV0gLSB5UmFuZ2VbMF0pKSArIHlSYW5nZVswXTtcbiAgICBsZXQgcmFuZERpcmVjdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDM2MCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJhbmRYLFxuICAgICAgcmFuZFksXG4gICAgICByYW5kRGlyZWN0aW9uXG4gICAgfTtcbiAgfSxcblxuICB0b2dnbGVTZWFyY2hCYXI6IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hCYXJTdGF0dXMpO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHR5cGUgPT09ICdzaG93ZWQnKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoQmFyU3RhdHVzID0gJ3NlYXJjaC1iYXItY2xvc2VkLXNob3dlZCc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdjbG9zZWQnICYmIHRoaXMuc2VhcmNoQmFyU3RhdHVzID09PSAnc2VhcmNoLWJhci1jbG9zZWQtc2hvd2VkJykge1xuICAgICAgICB0aGlzLnNlYXJjaEJhclN0YXR1cyA9ICdzZWFyY2gtYmFyLXNob3dlZC1jbG9zZWQnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2VhcmNoQmFyU3RhdHVzID09PSAnJykge1xuICAgICAgdGhpcy5zZWFyY2hCYXJTdGF0dXMgPSAnc2VhcmNoLWJhci1jbG9zZWQtc2hvd2VkJztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNlYXJjaEJhclN0YXR1cyA9IHRoaXMuc2VhcmNoQmFyU3RhdHVzID09PSAnc2VhcmNoLWJhci1jbG9zZWQtc2hvd2VkJyA/ICdzZWFyY2gtYmFyLXNob3dlZC1jbG9zZWQnIDogJ3NlYXJjaC1iYXItY2xvc2VkLXNob3dlZCc7XG4gIH0sXG5cbiAgb3BlblNlYXJjaEJhcigpIHtcbiAgICBpZiAodGhpcy5jb250cm9sbGVyQmFyU3RhdHVzID09PSAnY29udHJvbGxlci1iYXItbWluaWVkLXNob3dlZCcpIHtcbiAgICAgIHRoaXMudG9nZ2xlQ29udHJvbGxlckJhclN0YXR1cygnbWluaWVkJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RvcmVJbmZvQmFyU3RhdHVzID09PSAnc3RvcmUtaW5mby1iYXItY2xvc2VkLXNob3dlZCcpIHtcbiAgICAgIHRoaXMudG9nZ2xlU3RvcmVJbmZvQmFyKCdjbG9zZWQnKTtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudG9nZ2xlU2VhcmNoQmFyKCdzaG93ZWQnKTtcbiAgICB9LCAxMDApO1xuICB9LFxuXG4gIGNsb3NlU2VhcmNoQmFyKCkge1xuICAgIHRoaXMuJGVsZW1lbnQoJ3NlYXJjaC1iYXItaW5wdXQnKS5mb2N1cyh7XG4gICAgICBmb2N1czogZmFsc2VcbiAgICB9KTtcbiAgICB0aGlzLnRvZ2dsZVNlYXJjaEJhcignY2xvc2VkJyk7XG5cbiAgICBpZiAodGhpcy5zdG9yZUluZm9CYXJTdGF0dXMgPT09ICdzdG9yZS1pbmZvLWJhci1jbG9zZWQtc2hvd2VkJykge1xuICAgICAgdGhpcy50b2dnbGVTdG9yZUluZm9CYXIoJ2Nsb3NlZCcpO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy50b2dnbGVDb250cm9sbGVyQmFyU3RhdHVzKCdzaG93ZWQnKTtcbiAgICB9LCA1MDApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZWFyY2hSZXN1bHQgPSBbXTtcbiAgICAgIHRoaXMuaXNTZWFyY2hpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2VhcmNoVmFsdWUgPSAnJztcbiAgICB9LCA1MDApO1xuICB9LFxuXG4gIG9wZW5TdG9yZUluZm9CYXIoKSB7XG4gICAgaWYgKHRoaXMuc2VhcmNoQmFyU3RhdHVzID09PSAnc2VhcmNoLWJhci1jbG9zZWQtc2hvd2VkJykge1xuICAgICAgdGhpcy50b2dnbGVTZWFyY2hCYXIoJ2Nsb3NlZCcpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0ID0gW107XG4gICAgICAgIHRoaXMuaXNTZWFyY2hpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZWFyY2hWYWx1ZSA9ICcnO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb250cm9sbGVyQmFyU3RhdHVzID09PSAnY29udHJvbGxlci1iYXItbWluaWVkLXNob3dlZCcpIHtcbiAgICAgIHRoaXMudG9nZ2xlQ29udHJvbGxlckJhclN0YXR1cygnbWluaWVkJyk7XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnRvZ2dsZVN0b3JlSW5mb0Jhcignc2hvd2VkJyk7XG4gICAgfSwgMzAwKTtcbiAgfSxcblxuICBjbG9zZVN0b3JlSW5mb0JhcigpIHtcbiAgICB0aGlzLnRvZ2dsZVNlYXJjaEJhcignY2xvc2VkJyk7XG4gICAgdGhpcy50b2dnbGVTdG9yZUluZm9CYXIoJ2Nsb3NlZCcpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy50b2dnbGVDb250cm9sbGVyQmFyU3RhdHVzKCdzaG93ZWQnKTtcbiAgICB9LCAzMDApO1xuICB9LFxuXG4gIG9wZW5Db250cm9sbGVyQmFyKCkge1xuICAgIGlmICh0aGlzLnNlYXJjaEJhclN0YXR1cyA9PT0gJ3NlYXJjaC1iYXItY2xvc2VkLXNob3dlZCcpIHtcbiAgICAgIHRoaXMudG9nZ2xlU2VhcmNoQmFyKCdjbG9zZWQnKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdCA9IFtdO1xuICAgICAgICB0aGlzLmlzU2VhcmNoaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2VhcmNoVmFsdWUgPSAnJztcbiAgICAgIH0sIDUwMCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RvcmVJbmZvQmFyU3RhdHVzID09PSAnc3RvcmUtaW5mby1iYXItY2xvc2VkLXNob3dlZCcpIHtcbiAgICAgIHRoaXMudG9nZ2xlU3RvcmVJbmZvQmFyKCdjbG9zZWQnKTtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudG9nZ2xlQ29udHJvbGxlckJhclN0YXR1cygnc2hvd2VkJyk7XG4gICAgfSwgMzAwKTtcbiAgfSxcblxuICBvcGVuTmF2aWdhdGlvbkJhcigpIHtcbiAgICBpZiAodGhpcy5zdG9yZUluZm9CYXJTdGF0dXMgPT09ICdzdG9yZS1pbmZvLWJhci1jbG9zZWQtc2hvd2VkJykge1xuICAgICAgdGhpcy50b2dnbGVTdG9yZUluZm9CYXIoJ2Nsb3NlZCcsIHRydWUpO1xuICAgIH1cblxuICAgIHRoaXMubmF2aWdhdGlvbkJhclN0YXR1cyA9ICduYXZpZ2F0aW9uLWJhci1jbG9zZWQtc2hvd2VkJztcbiAgfSxcblxuICBjbG9zZU5hdmlnYXRpb25CYXIoKSB7XG4gICAgaWYgKHRoaXMubmF2aWdhdGlvbkJhclN0YXR1cyA9PT0gJ25hdmlnYXRpb24tYmFyLWNsb3NlZC1zaG93ZWQnKSB7XG4gICAgICB0aGlzLm5hdmlnYXRpb25CYXJTdGF0dXMgPSAnbmF2aWdhdGlvbi1iYXItc2hvd2VkLWNsb3NlZCc7XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm5hdmlnYXRpb25EZXNjcmlwdGlvbiA9IHtcbiAgICAgICAgbmFtZTogJ+acquefpScsXG4gICAgICAgIGRlc2M6ICfmraPlnKjliqDovb0nLFxuICAgICAgICBuZXh0OiAn5q2j5Zyo5Yqg6L29JyxcbiAgICAgICAgdGltZTogJ+acquefpScsXG4gICAgICAgIHJlbWFpbjogJ+acquefpSdcbiAgICAgIH07XG4gICAgfSwgNTAwKTtcbiAgfSxcblxuICBzaG93Um91dGVzOiBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICBpZiAoZ2xvYmFsLnByb2R1Y3Rpb250aXAgPT09ICdkZXYnKSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBfc3lzdGVtMy5kZWZhdWx0LmZldGNoKHtcbiAgICAgICAgdXJsOiBgJHtfY29uc3QuYmFzZVVybH0vbmF2aWdhdGVXaXRoQVN0YXI/Y2FtZXJhaWQ9JHt0aGF0LmN1ckNhbWVyYUlEfSZkZXN0Q2FtZXJhSWQ9JHt0aGF0LmN1clN0b3JlSW5mby5pZH1gXG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcIui3r+e6v+WxleekulwiKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHJlcy5kYXRhO1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0LmNvZGUpO1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xuXG4gICAgICBpZiAocmVzdWx0LmNvZGUgPT09IDIwMCkge1xuICAgICAgICBpZiAocmVzdWx0LmRhdGEgPT09IFwiXCIpIHtcbiAgICAgICAgICBfc3lzdGVtLmRlZmF1bHQuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwi5peg5rOV5Yiw6L6+6K+l54K577yM6K+35p+l55yL57Sn5oCl5LqL5Lu2XCJcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJvdXRlTXNnID0ge1xuICAgICAgICAgIHR5cGU6ICdyb3V0ZScsXG4gICAgICAgICAgZGV0YWlsOiBKU09OLnBhcnNlKHJlc3VsdC5kYXRhKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnBvc3RUb1dlYihyb3V0ZU1zZyk7XG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09PSA1MDIpIHtcbiAgICAgICAgX3N5c3RlbS5kZWZhdWx0LnNob3dUb2FzdCh7XG4gICAgICAgICAgbWVzc2FnZTogJ+ayoeacieaJvuWIsOWPr+ihjOeahOi3r+e6vydcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09PSA0MDQpIHtcbiAgICAgICAgX3N5c3RlbS5kZWZhdWx0LnNob3dUb2FzdCh7XG4gICAgICAgICAgbWVzc2FnZTogJ+S4jeWPr+WvvOiIqueCuSdcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfc3lzdGVtLmRlZmF1bHQuc2hvd1RvYXN0KHtcbiAgICAgICAgICBtZXNzYWdlOiBg5L2N572u6ZSZ6K+vJHtyZXN1bHQuY29kZX1gXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgYmVnaW5OYXZpZ2F0aW9uOiBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICBpZiAoZ2xvYmFsLnByb2R1Y3Rpb250aXAgPT09ICdkZXYnKSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBfc3lzdGVtMy5kZWZhdWx0LmZldGNoKHtcbiAgICAgICAgdXJsOiBgJHtfY29uc3QuYmFzZVVybH0vbmF2aWdhdGVXaXRoQVN0YXI/Y2FtZXJhaWQ9JHt0aGF0LmN1ckNhbWVyYUlEfSZkZXN0Q2FtZXJhSWQ9JHt0aGF0LmN1clN0b3JlSW5mby5pZH1gXG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcIuW8gOWni+WvvOiIqlwiKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHJlcy5kYXRhO1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0LmNvZGUpO1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEgPT09IFwiXCIpO1xuXG4gICAgICBpZiAocmVzdWx0LmNvZGUgPT09IDIwMCkge1xuICAgICAgICBpZiAocmVzdWx0LmRhdGEgPT09IFwiXCIpIHtcbiAgICAgICAgICBfc3lzdGVtLmRlZmF1bHQuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwi5peg5rOV5Yiw6L6+6K+l54K577yM6K+35p+l55yL57Sn5oCl5LqL5Lu2XCJcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5hdmlNc2cgPSB7XG4gICAgICAgICAgdHlwZTogJ25hdmknLFxuICAgICAgICAgIGRldGFpbDogSlNPTi5wYXJzZShyZXN1bHQuZGF0YSlcbiAgICAgICAgfTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmxvY2F0aW9uVXBkYXRlSW50ZXJ2YWxJRCk7XG4gICAgICAgIHRoaXMubmF2aWdhdGlvbkRlc2NyaXB0aW9uLm5hbWUgPSB0aGF0LmN1clN0b3JlSW5mby5uYW1lO1xuICAgICAgICB0aGlzLnBvc3RUb1dlYihuYXZpTXNnKTtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbkNhbWVyYUlEID0gdGhhdC5jdXJTdG9yZUluZm8uaWQ7XG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09PSA1MDIpIHtcbiAgICAgICAgX3N5c3RlbS5kZWZhdWx0LnNob3dUb2FzdCh7XG4gICAgICAgICAgbWVzc2FnZTogJ+ayoeacieaJvuWIsOWPr+ihjOeahOi3r+e6vydcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdC5jb2RlID09PSA0MDQpIHtcbiAgICAgICAgX3N5c3RlbS5kZWZhdWx0LnNob3dUb2FzdCh7XG4gICAgICAgICAgbWVzc2FnZTogJ+i3r+W+hOa6kOWcsOWdgOS4jeWtmOWcqCdcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfc3lzdGVtLmRlZmF1bHQuc2hvd1RvYXN0KHtcbiAgICAgICAgICBtZXNzYWdlOiBg5L2N572u6ZSZ6K+vJHtyZXN1bHQuY29kZX1gXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZm9jdXNPblN0b3JlOiBhc3luYyBmdW5jdGlvbiAoaWQsIG5hbWUpIHtcbiAgICB0aGlzLiRlbGVtZW50KCdzZWFyY2gtYmFyLWlucHV0JykuZm9jdXMoe1xuICAgICAgZm9jdXM6IGZhbHNlXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCLogZrnhKZcIik7XG4gICAgY29uc29sZS5sb2coaWQpO1xuICAgIGNvbnN0IGZvY3VzTXNnID0ge1xuICAgICAgdHlwZTogJ2ZvY3VzJyxcbiAgICAgIGRldGFpbDogaWRcbiAgICB9O1xuICAgIHRoaXMucG9zdFRvV2ViKGZvY3VzTXNnKTtcbiAgICB0aGlzLmN1clN0b3JlSW5mby5pZCA9IGlkO1xuICAgIHRoaXMuY3VyU3RvcmVJbmZvLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMub3BlblN0b3JlSW5mb0JhcigpO1xuICAgIGxldCByZXMgPSBhd2FpdCBfc3lzdGVtMy5kZWZhdWx0LmZldGNoKHtcbiAgICAgIHVybDogYCR7X2NvbnN0LmJhc2VVcmx9L2dldENhbWVyYT9pZD0ke2lkfWBcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgY29uc3QgcmVzdWx0ID0gcmVzLmRhdGE7XG5cbiAgICBpZiAocmVzdWx0LmNvZGUgPT09IDIwMCkge1xuICAgICAgY29uc29sZS5sb2coXCLlr7zoiKpcIik7XG4gICAgICBjb25zdCBkID0gSlNPTi5wYXJzZShyZXN1bHQuZGF0YSk7XG4gICAgICB0aGlzLmN1clN0b3JlSW5mby5sb2NhdGlvbiA9IGQubG9naWNhbFBvc2l0aW9uO1xuICAgICAgdGhpcy5jdXJTdG9yZUluZm8uZGlzdGFuY2UgPSB0aGlzLmNhbGNEaXN0YW5jZUJ5TEwoZC5sYXRpdHVkZSwgZC5sb25naXR1ZGUpO1xuICAgIH1cbiAgfSxcbiAgY2FsY0Rpc3RhbmNlQnlMTDogZnVuY3Rpb24gKHgsIHkpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBsZXQgW3gxLCB5MV0gPSAoMCwgX2NvbnN0Lk1lcmNhdG9yMmxvbkxhdCkoeCwgeSk7XG4gICAgbGV0IFt4MiwgeTJdID0gKDAsIF9jb25zdC5NZXJjYXRvcjJsb25MYXQpKHRoaXMuY3VyWCwgdGhpcy5jdXJZKTtcbiAgICByZXR1cm4gKDAsIF9jb25zdC5nZXREaXN0YW5jZUJ5TEwpKHgxLCB5MSwgeDIsIHkyKTtcbiAgfSxcbiAgbW9yZVRvb2xzOiBmdW5jdGlvbiAoKSB7XG4gICAgX3N5c3RlbS5kZWZhdWx0LnNob3dUb2FzdCh7XG4gICAgICBtZXNzYWdlOiAn5pWs6K+35pyf5b6FISdcbiAgICB9KTtcbiAgfSxcbiAgZm9jdXNNeVNlbGY6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnBvc3RUb1dlYignZm9jdXNNeUxvYycpO1xuICB9LFxuICByZXNldE5hdmlnYXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNhbm5vdENhbmNlbCA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNhbm5vdENhbmNlbCA9IGZhbHNlO1xuICAgIH0sIDMwMDApO1xuICAgIHRoaXMucG9zdFRvV2ViKFwiUkVTRVROQVZJXCIpO1xuICB9LFxuICBjYW5jZWxOYXZpZ2F0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLmNhbm5vdENhbmNlbCkge1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbkNhbWVyYUlEID0gdGhpcy5jdXJDYW1lcmFJRDtcbiAgICAgIHRoaXMucG9zdFRvV2ViKFwiQ0FOQ0VMTkFWSVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3N5c3RlbS5kZWZhdWx0LnNob3dUb2FzdCh7XG4gICAgICAgIG1lc3NhZ2U6ICflr7zoiKrlh4blpIfpmLbmrrXkuI3lj6/lj5bmtognXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgc2hvd0VtZXJnZW5jeUV2ZW50cygpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBfc3lzdGVtMy5kZWZhdWx0LmZldGNoKHtcbiAgICAgIHVybDogYCR7X2NvbnN0LmJhc2VVcmx9L2dldEN1cnJlbnRBY2NpZGVudHNgXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9KTtcbiAgICBjb25zdCByZXN1bHQgPSByZXMuZGF0YTtcblxuICAgIGlmIChyZXN1bHQuY29kZSA9PT0gMjAwKSB7XG4gICAgICBjb25zdCBhY0xpc3QgPSBKU09OLnBhcnNlKHJlc3VsdC5kYXRhKTtcblxuICAgICAgaWYgKGFjTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgX3N5c3RlbS5kZWZhdWx0LnNob3dUb2FzdCh7XG4gICAgICAgICAgbWVzc2FnZTogJ+aXoOe0p+aApeS6i+S7tidcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBhY01zZyA9IHtcbiAgICAgICAgdHlwZTogJ2FjY2lkZW50cycsXG4gICAgICAgIGRldGFpbDogYWNMaXN0XG4gICAgICB9O1xuICAgICAgdGhpcy5wb3N0VG9XZWIoYWNNc2cpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfc3lzdGVtLmRlZmF1bHQuc2hvd1RvYXN0KHtcbiAgICAgICAgbWVzc2FnZTogXCLmmL7npLrntKfmgKXkuovku7blh7rplJlcIlxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIG5vdFN1cHBvcnRlZCgpIHtcbiAgICBfc3lzdGVtLmRlZmF1bHQuc2hvd1RvYXN0KHtcbiAgICAgIG1lc3NhZ2U6IFwi5pqC5LiN5pSv5oyB77yM5ZCO57ut5aKe5YqgXCJcbiAgICB9KTtcbiAgfSxcblxuICBvblZpcENvdXBvbjogZnVuY3Rpb24gKCkge1xuICAgIF9zeXN0ZW01LmRlZmF1bHQuZ2V0KHtcbiAgICAgIGtleTogJ2lzVklQJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzcyBcIiwgZGF0YSk7XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgX3N5c3RlbS5kZWZhdWx0LnNob3dUb2FzdCh7XG4gICAgICAgICAgICBtZXNzYWdlOiBcIuW8gOmAmlZJUOWNs+WPr+iOt+W+l+S4k+mhueS8mOaDoO+9nlwiXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3N5c3RlbS5kZWZhdWx0LnNob3dUb2FzdCh7XG4gICAgICAgICAgICBtZXNzYWdlOiBcIuaCqOW3suiOt+W+l1ZJUOS4k+mhueS8mOaDoCFcIlxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gKGRhdGEsIGNvZGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYGhhbmRsaW5nIGZhaWwsIGNvZGUgPSAke2NvZGV9YCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIG9uTm9ybWFsQ291cG9uOiBmdW5jdGlvbiAoKSB7XG4gICAgX3N5c3RlbS5kZWZhdWx0LnNob3dUb2FzdCh7XG4gICAgICBtZXNzYWdlOiBcIuaCqOW3suiOt+W+l+aZrumAmueUqOaIt+S8mOaDoCFcIlxuICAgIH0pO1xuICB9LFxuICBvblNjcm9sbEJvdHRvbTogZnVuY3Rpb24gKHR5cGUpIHtcbiAgICBjb25zb2xlLmxvZyh0eXBlKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnbm9ybWFsJzpcbiAgICAgICAgdGhpcy5ub3JtYWxDb3Vwb25zLnB1c2goLi4uW3tcbiAgICAgICAgICBpbWdJRDogMTIzLFxuICAgICAgICAgIHRpdGxlOiAn5rW355uQ6buR6YeR5ZKW5ZWhJyxcbiAgICAgICAgICBvbGRQcmljZTogJ8KlNTEnLFxuICAgICAgICAgIG5ld1ByaWNlOiAnwqUyNS41JyxcbiAgICAgICAgICBzdG9yZTogJ+a1t+WyqeWSluWVoSdcbiAgICAgICAgfSwge1xuICAgICAgICAgIGltZ0lEOiAxMjksXG4gICAgICAgICAgdGl0bGU6ICflpbbojLbkuInlhYTlvJ8nLFxuICAgICAgICAgIG9sZFByaWNlOiAnwqU2LjUnLFxuICAgICAgICAgIG5ld1ByaWNlOiAnwqUxMycsXG4gICAgICAgICAgc3RvcmU6ICdDb0Nv6YO95Y+vJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaW1nSUQ6IDEzMyxcbiAgICAgICAgICB0aXRsZTogJ+a1t+W6leaNnjMw5YWD5LyY5oOg5Yi4JyxcbiAgICAgICAgICBvbGRQcmljZTogJ8KlMzAnLFxuICAgICAgICAgIG5ld1ByaWNlOiAnwqUyOC44JyxcbiAgICAgICAgICBzdG9yZTogJ+a1t+W6leaNnidcbiAgICAgICAgfSwge1xuICAgICAgICAgIGltZ0lEOiAxMzQsXG4gICAgICAgICAgdGl0bGU6ICflpI/lqIHlpLfmsLTmnpzmiqvokKg55a+4JyxcbiAgICAgICAgICBvbGRQcmljZTogJ8KlMTkuOScsXG4gICAgICAgICAgbmV3UHJpY2U6ICfCpTkuOScsXG4gICAgICAgICAgc3RvcmU6ICflpKflmLTlt7TmhI/lvI/miqvokKgnXG4gICAgICAgIH1dKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5ub3JtYWxDb3Vwb25zLmxlbmd0aCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICd2aXAnOlxuICAgICAgICB0aGlzLnZpcENvdXBvbnMucHVzaCguLi5be1xuICAgICAgICAgIGltZ0lEOiAxMTAsXG4gICAgICAgICAgdGl0bGU6ICfmtbfnm5Dpu5Hph5HlkpbllaEnLFxuICAgICAgICAgIG9sZFByaWNlOiAnwqU1MScsXG4gICAgICAgICAgbmV3UHJpY2U6ICfCpTE1LjUnLFxuICAgICAgICAgIHN0b3JlOiAn5rW35bKp5ZKW5ZWhJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaW1nSUQ6IDE0MSxcbiAgICAgICAgICB0aXRsZTogJ+WltuiMtuS4ieWFhOW8nycsXG4gICAgICAgICAgb2xkUHJpY2U6ICfCpTMuNScsXG4gICAgICAgICAgbmV3UHJpY2U6ICfCpTEzJyxcbiAgICAgICAgICBzdG9yZTogJ0NvQ2/pg73lj68nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpbWdJRDogMTMyLFxuICAgICAgICAgIHRpdGxlOiAn5rW35bqV5o2eMzDlhYPkvJjmg6DliLgnLFxuICAgICAgICAgIG9sZFByaWNlOiAnwqUzMCcsXG4gICAgICAgICAgbmV3UHJpY2U6ICfCpTI1LjgnLFxuICAgICAgICAgIHN0b3JlOiAn5rW35bqV5o2eJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaW1nSUQ6IDEzMSxcbiAgICAgICAgICB0aXRsZTogJ+Wkj+WogeWkt+awtOaenOaKq+iQqDnlr7gnLFxuICAgICAgICAgIG9sZFByaWNlOiAnwqUxOS45JyxcbiAgICAgICAgICBuZXdQcmljZTogJ8KlNS45JyxcbiAgICAgICAgICBzdG9yZTogJ+Wkp+WYtOW3tOaEj+W8j+aKq+iQqCdcbiAgICAgICAgfV0pO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnZpcENvdXBvbnMubGVuZ3RoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSBkYXRhIG11c3Qgbm90IGNvZXhpc3Qgd2l0aCBwdWJsaWMsIHByb3RlY3RlZCwgb3IgcHJpdmF0ZS4gUGxlYXNlIHJlcGxhY2UgZGF0YSB3aXRoIHB1YmxpYy4nKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSAnICsgYWNjICsgJyB2YWx1ZSBtdXN0IG5vdCBiZSBhIGZ1bmN0aW9uLiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGFuIG9iamVjdC4nKTtcbiAgICB9XG4gIH0pO1xufX0iLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gYmx1ZSB0b290aCBzdXBwb3J0XG4vLyB2YXIgYmx1ZXRvb3RoID0gJGFwcF9yZXF1aXJlJCggJ0BhcHAtbW9kdWxlL3N5c3RlbS5ibHVldG9vdGgnKTtcbi8vIGNhbWVyYSBkZXZpY2Ugc2V0XG52YXIgc3BlY2lmaWNfZGV2aWNlX3NldCA9IG5ldyBTZXQoKTsgLy8gbWFpblxuXG5hc3luYyBmdW5jdGlvbiBidChibHVldG9vdGgsIGZpbmRfY2FtZXJhX2NhbGxiYWNrKSB7XG4gIC8vIG9wZW4gYmx1ZXRvb3RoXG4gIGJsdWV0b290aC5vcGVuQWRhcHRlcih7XG4gICAgb3BlcmF0ZUFkYXB0ZXI6IHRydWUsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc1wiKTtcbiAgICAgIGJsdWV0b290aC5nZXRBZGFwdGVyU3RhdGUoe1xuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBoYW5kbGluZyBhZGFwdGVyIHN0YXRlLCBhdmFpbGFibGUgPSAke2RhdGEuYXZhaWxhYmxlfSwgZGlzY292ZXJpbmcgPSAke2RhdGEuZGlzY292ZXJpbmd9YCk7XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uIChkYXRhLCBjb2RlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYGhhbmRsaW5nIGZhaWwsIGNvZGUgPSAke2NvZGV9IGRhdGEgPSAke2RhdGF9YCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2NvbXBsZXRlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZmFpbDogZnVuY3Rpb24gKGRhdGEsIGNvZGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBidCBvcGVuIGZhaWwsIGNvZGUgPSAke2NvZGV9LCBkYXRhPSR7ZGF0YX1gKTtcbiAgICB9LFxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coXCJjb21wbGV0ZWQhXCIpO1xuICAgIH1cbiAgfSk7IC8vIOWcqOaJq+aPj+S5i+WJjeWFiOazqOWGjOiuvuWkh+WPkeeOsOWbnuiwg1xuXG4gIGJsdWV0b290aC5vbmRldmljZWZvdW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhcIkRhdGFcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIGJsdWV0b290aC5nZXREZXZpY2VzKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2V0IERldmljZXNcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgZGF0YS5kZXZpY2VzLmZvckVhY2goZGV2aWNlID0+IHtcbiAgICAgICAgICBsZXQgZGV2aWNlX25hbWUgPSBkZXZpY2UubmFtZTtcblxuICAgICAgICAgIGlmIChkZXZpY2VfbmFtZS5zdWJzdHJpbmcoMCwgMykgPT0gXCJPVy1cIikge1xuICAgICAgICAgICAgLy8g5Y+R546w5LqGY2FtZXJh5omN5YGc5q2i5omr5o+P77yM5L+d6K+B5q+P5qyh6YO95Lya5ZCR6LCD55So6ICF6L+U5Zue5pyJ5pWI5pWw5o2uXG4gICAgICAgICAgICBibHVldG9vdGguc3RvcERldmljZXNEaXNjb3ZlcnkoKTtcbiAgICAgICAgICAgIGJsdWV0b290aC5jbG9zZUFkYXB0ZXIoe1xuICAgICAgICAgICAgICBvcGVyYXRlQWRhcHRlcjogZmFsc2UsXG4gICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChkYXRhLCBjb2RlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGJ0IG9wZW4gZmFpbCwgY29kZSA9ICR7Y29kZX0sIGRhdGE9JHtkYXRhfWApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldCBjYW1lcmFfaWQgPSBkZXZpY2VfbmFtZS5zdWJzdHJpbmcoMyk7XG4gICAgICAgICAgICBzcGVjaWZpY19kZXZpY2Vfc2V0LmFkZCh7XG4gICAgICAgICAgICAgIGNhbWVyYV9pZDogTnVtYmVyKGNhbWVyYV9pZCksXG4gICAgICAgICAgICAgIFJTU0k6IGRldmljZS5SU1NJXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZpbmRfY2FtZXJhX2NhbGxiYWNrKFsuLi5zcGVjaWZpY19kZXZpY2Vfc2V0XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTsgLy8g5LiK5bGC5Zue6LCDXG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5Zue6LCD5L2/55So5pa55rOV77yaXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogIGZ1bmN0aW9uKGFsbF9jYW1lcmFfbGlzdCkge1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqICAgIC8vIGFsbF9jYW1lcmFfbGlzdOaYr2xpc3RcclxuICAgICAgICAgKiAgICBhbGxfY2FtZXJhX2xpc3QuZm9yRWFjaChkZXZpY2VfaXRlbSA9PiB7XHJcbiAgICAgICAgICogICAgICAgIGxldCBjYW1lcmFfaWQgPSBkZXZpY2VfaXRlbS5jYW1lcmFfaWQ7IC8vIE51bWJlcuexu+Wei1xyXG4gICAgICAgICAqICAgICAgICBsZXQgc3Ryb25nICAgID0gZGV2aWNlX2l0ZW0uUlNTSTsgICAgICAvLyBOdW1iZXLnsbvlnosgICBcclxuICAgICAgICAgKiAgICB9KTtcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiB9XHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICovXG4gICAgICB9XG4gICAgfSk7XG4gIH07IC8v5byA5aeL5omr5o+PXG5cblxuICBibHVldG9vdGguc3RhcnREZXZpY2VzRGlzY292ZXJ5KHtcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZygnc3RhcnQgZGlzY292ZXJ5IHN1Y2Nlc3MnKTtcbiAgICB9LFxuICAgIGZhaWw6IGZ1bmN0aW9uIChkYXRhLCBjb2RlKSB7XG4gICAgICBjb25zb2xlLmxvZyhgYnQgc3RhcnQgZGlzY292ZXJ5IGZhaWwsIGNvZGUgPSAke2NvZGV9LCBkYXRhPSR7ZGF0YX1gKTtcbiAgICB9XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ0OyIsInZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL0luZG9vci51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9L1VzZXJzL2J5dGVkYW5jZS9TQ1Uv5b+r5bqU55SoL2hhcGFwcC9jb20ucGVvcGxlLmZpbmFsMS9zcmMvSW5kb29yL0luZG9vci51eCEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPS9Vc2Vycy9ieXRlZGFuY2UvU0NVL+W/q+W6lOeUqC9oYXBhcHAvY29tLnBlb3BsZS5maW5hbDEvc3JjL0luZG9vci9JbmRvb3IudXghLi9JbmRvb3IudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT0vVXNlcnMvYnl0ZWRhbmNlL1NDVS/lv6vlupTnlKgvaGFwYXBwL2NvbS5wZW9wbGUuZmluYWwxL25vZGVfbW9kdWxlcy9AYmFiZWwvcHJlc2V0LWVudiZwbHVnaW5zW109L1VzZXJzL2J5dGVkYW5jZS9TQ1Uv5b+r5bqU55SoL2hhcGFwcC9jb20ucGVvcGxlLmZpbmFsMS9ub2RlX21vZHVsZXMvQGJhYmVsL3BsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109L1VzZXJzL2J5dGVkYW5jZS9TQ1Uv5b+r5bqU55SoL2hhcGFwcC9jb20ucGVvcGxlLmZpbmFsMS9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvanN4LWxvYWRlci5qcyZwbHVnaW5zW109L1VzZXJzL2J5dGVkYW5jZS9TQ1Uv5b+r5bqU55SoL2hhcGFwcC9jb20ucGVvcGxlLmZpbmFsMS9ub2RlX21vZHVsZXMvQGJhYmVsL3BsdWdpbi1wcm9wb3NhbC1jbGFzcy1wcm9wZXJ0aWVzJnBsdWdpbnNbXT0vVXNlcnMvYnl0ZWRhbmNlL1NDVS/lv6vlupTnlKgvaGFwYXBwL2NvbS5wZW9wbGUuZmluYWwxL25vZGVfbW9kdWxlcy9AYmFiZWwvcGx1Z2luLXByb3Bvc2FsLW9iamVjdC1yZXN0LXNwcmVhZCZjb21tZW50cz1mYWxzZSEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vSW5kb29yLnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvSW5kb29yJywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gJGFwcF90ZW1wbGF0ZSRcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSAkYXBwX3N0eWxlJFxufSlcblxuJGFwcF9ib290c3RyYXAkKCdAYXBwLWNvbXBvbmVudC9JbmRvb3InLHsgcGFja2FnZXJOYW1lOidmYS10b29sa2l0JywgcGFja2FnZXJWZXJzaW9uOiAnMi41LjItU3RhYmxlLjMwMCd9KSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXREaXN0YW5jZUJ5TEwgPSBnZXREaXN0YW5jZUJ5TEw7XG5leHBvcnRzLk1lcmNhdG9yMmxvbkxhdCA9IE1lcmNhdG9yMmxvbkxhdDtcbmV4cG9ydHMubWFwT2JqZWN0ID0gZXhwb3J0cy5pc0pTT04gPSBleHBvcnRzLnVjVXJsID0gZXhwb3J0cy53ZWJVcmwgPSBleHBvcnRzLmJhc2VVcmwgPSB2b2lkIDA7XG5jb25zdCBiYXNlVXJsID0gJ2h0dHA6Ly8xODIuOTIuMjA4LjQ3Ojg4OTknO1xuZXhwb3J0cy5iYXNlVXJsID0gYmFzZVVybDtcbmNvbnN0IHdlYlVybCA9ICdodHRwOi8vMTgyLjkyLjIwOC40Nzo4MDg2L0luZG9vci8nOyAvL+e6v+S4iueOr+Wig1xuLy8gZXhwb3J0IGNvbnN0IHdlYlVybCA9ICdodHRwOi8vMTkyLjE2OC4xLjEwMzo4MDgwL21hcC9JbmRvb3IvJyAvL+a1i+ivleeOr+Wig1xuXG5leHBvcnRzLndlYlVybCA9IHdlYlVybDtcbmNvbnN0IHVjVXJsID0gJ2h0dHA6Ly8xOTIuMTY4LjEuMTAzOjgwODAvZmx1ZW50Lyc7IC8vIGV4cG9ydCBjb25zdCB1Y1VybCA9ICdodHRwOi8vMTgyLjkyLjIwOC40Nzo4MDg3LydcblxuZXhwb3J0cy51Y1VybCA9IHVjVXJsO1xuXG5jb25zdCBpc0pTT04gPSBmdW5jdGlvbiAoZGF0YSkge1xuICB0cnkge1xuICAgIGxldCByZXMgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgIHJldHVybiByZXM7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuZXhwb3J0cy5pc0pTT04gPSBpc0pTT047XG5jb25zdCBtYXBPYmplY3QgPSB7XG4gIG1pblg6IDEyNjgzNDA3Ljc4NjI4MzUsXG4gIG1heFg6IDEyNjgzNTIzLjcwNzgwMzcsXG4gIG1pblk6IDI1NTc4MzguMzU4ODgxLFxuICBtYXhZOiAyNTU3OTI3Ljc0NTk4MTIsXG4gIGNlbnRlcjoge1xuICAgIHg6IDEyNjgzNDY1Ljc0NzA0MzYsXG4gICAgeTogMjU1Nzg4My4wNTI0MzExXG4gIH1cbn07IC8vIOe7j+e6rOW6pui9rOaNouaIkOS4ieinkuWHveaVsOS4reW6puWIhuihqOW9ouW8j+OAglxuXG5leHBvcnRzLm1hcE9iamVjdCA9IG1hcE9iamVjdDtcblxuZnVuY3Rpb24gcmFkKGQpIHtcbiAgcmV0dXJuIGQgKiBNYXRoLlBJIC8gMTgwLjA7XG59IC8vIOagueaNrue7j+e6rOW6puiuoeeul+i3neemu++8jOWPguaVsOWIhuWIq+S4uuesrOS4gOeCueeahOe6rOW6pu+8jOe7j+W6pu+8m+esrOS6jOeCueeahOe6rOW6pu+8jOe7j+W6plxuXG5cbmZ1bmN0aW9uIGdldERpc3RhbmNlQnlMTChfbGF0MSwgX2xuZzEsIF9sYXQyLCBfbG5nMikge1xuICBsZXQgbGF0MSA9IE51bWJlcihfbGF0MSk7XG4gIGxldCBsYXQyID0gTnVtYmVyKF9sYXQyKTtcbiAgbGV0IGxuZzIgPSBOdW1iZXIoX2xuZzIpO1xuICBsZXQgbG5nMSA9IE51bWJlcihfbG5nMik7XG4gIGNvbnNvbGUubG9nKGDlvIDlp4vorqHnrpcgJHtsYXQxfSAke2xhdDJ9ICR7bG5nMX0gJHtsbmcyfWApO1xuICB2YXIgcmFkTGF0MSA9IHJhZChsYXQxKTtcbiAgdmFyIHJhZExhdDIgPSByYWQobGF0Mik7XG4gIHZhciBhID0gcmFkTGF0MSAtIHJhZExhdDI7XG4gIHZhciBiID0gcmFkKGxuZzEpIC0gcmFkKGxuZzIpO1xuICB2YXIgcyA9IDIgKiBNYXRoLmFzaW4oTWF0aC5zcXJ0KE1hdGgucG93KE1hdGguc2luKGEgLyAyKSwgMikgKyBNYXRoLmNvcyhyYWRMYXQxKSAqIE1hdGguY29zKHJhZExhdDIpICogTWF0aC5wb3coTWF0aC5zaW4oYiAvIDIpLCAyKSkpO1xuICBzID0gcyAqIDYzNzguMTM3OyAvLyBFQVJUSF9SQURJVVM7XG5cbiAgcyA9IE1hdGgucm91bmQocyAqIDEwMDAwKSAvIDEwMDAwOyAvL+i+k+WHuuS4uuWFrOmHjFxuXG4gIHZhciBkaXN0YW5jZSA9IHM7XG4gIHZhciBkaXN0YW5jZV9zdHIgPSBcIlwiO1xuICBjb25zb2xlLmxvZyhcIuW+l+WHuueahOi3neemu1wiLCBzKTtcblxuICBpZiAocGFyc2VJbnQoZGlzdGFuY2UpID49IDEpIHtcbiAgICBkaXN0YW5jZV9zdHIgPSBkaXN0YW5jZS50b0ZpeGVkKDEpICsgXCJrbVwiO1xuICB9IGVsc2Uge1xuICAgIGRpc3RhbmNlX3N0ciA9IChkaXN0YW5jZSAqIDEwMDApLnRvRml4ZWQoMSkgKyBcIm1cIjtcbiAgfSAvL3M9cy50b0ZpeGVkKDQpO1xuXG5cbiAgY29uc29sZS5pbmZvKCdseWog6Led56a75pivJywgcyk7XG4gIGNvbnNvbGUuaW5mbygnbHlqIOi3neemu+aYrycsIGRpc3RhbmNlX3N0cik7XG4gIHJldHVybiBkaXN0YW5jZV9zdHI7XG59XG5cbmZ1bmN0aW9uIE1lcmNhdG9yMmxvbkxhdChtZXJjYXRvclgsIG1lcmNhdG9yWSkge1xuICB2YXIgeHkgPSBbXTtcbiAgdmFyIHggPSBtZXJjYXRvclggLyAyMDAzNzUwOC4zNCAqIDE4MDtcbiAgdmFyIHkgPSBtZXJjYXRvclkgLyAyMDAzNzUwOC4zNCAqIDE4MDtcbiAgeSA9IDE4MCAvIE1hdGguUEkgKiAoMiAqIE1hdGguYXRhbihNYXRoLmV4cCh5ICogTWF0aC5QSSAvIDE4MCkpIC0gTWF0aC5QSSAvIDIpO1xuICB4eS5wdXNoKHgpO1xuICB4eS5wdXNoKHkpO1xuICByZXR1cm4geHk7XG59Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwNkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcDBDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3JpQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=