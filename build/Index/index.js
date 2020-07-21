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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Index/index.ux");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/Index/index.ux!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/Index/index.ux!./src/Index/index.ux":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/Index/index.ux!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/Index/index.ux!./src/Index/index.ux ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "alignItems": "center"
  },
  ".homepage": {
    "flexDirection": "column",
    "alignItems": "center",
    "width": "100%"
  },
  ".me": {
    "flexDirection": "column",
    "alignItems": "center",
    "width": "100%"
  },
  ".title": {
    "fontSize": "50px",
    "color": "#ffffff"
  },
  ".text-part": {
    "flexDirection": "column"
  },
  ".greatings": {
    "fontSize": "100px",
    "color": "#ffffff",
    "fontWeight": "600",
    "letterSpacing": "5px"
  },
  ".desc": {
    "color": "#ffffff"
  },
  ".hero": {
    "backgroundColor": "#008df8",
    "height": "400px",
    "width": "100%",
    "alignItems": "center",
    "justifyContent": "space-around"
  },
  ".emergency": {
    "backgroundColor": "#EC6A6A"
  },
  ".main": {
    "backgroundColor": "#FFFFFF",
    "paddingTop": "30px",
    "paddingRight": "30px",
    "paddingBottom": "30px",
    "paddingLeft": "30px",
    "width": "100%",
    "marginTop": "-30px",
    "borderTopRightRadius": "30px",
    "borderTopLeftRadius": "30px",
    "justifyContent": "space-around",
    "alignItems": "center",
    "flexDirection": "column"
  },
  ".htsitem": {
    "width": "95%",
    "height": "120px",
    "backgroundColor": "#FFFFFF",
    "borderTopWidth": "5px",
    "borderRightWidth": "5px",
    "borderBottomWidth": "5px",
    "borderLeftWidth": "5px",
    "borderStyle": "solid",
    "borderTopColor": "#cccccc",
    "borderRightColor": "#cccccc",
    "borderBottomColor": "#cccccc",
    "borderLeftColor": "#cccccc",
    "borderRadius": "20px",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "paddingLeft": "30px",
    "paddingRight": "30px",
    "marginTop": "50px"
  },
  ".htsitem .hts-title": {
    "fontWeight": "600"
  },
  ".htsitem .hts-status": {
    "fontWeight": "600"
  },
  ".htsitem .hts-btn": {
    "width": "48px",
    "height": "48px"
  },
  ".tab-container": {
    "height": "120px",
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
  ".tab-img": {
    "width": "48px",
    "height": "48px"
  },
  ".tab-text": {
    "fontSize": "24px",
    "fontWeight": "700"
  },
  ".avatar": {
    "width": "256px",
    "height": "256px"
  },
  ".realuser": {
    "width": "256px",
    "height": "256px",
    "borderRadius": "128px",
    "borderTopWidth": "2px",
    "borderRightWidth": "2px",
    "borderBottomWidth": "2px",
    "borderLeftWidth": "2px",
    "borderStyle": "solid",
    "borderTopColor": "#dddddd",
    "borderRightColor": "#dddddd",
    "borderBottomColor": "#dddddd",
    "borderLeftColor": "#dddddd",
    "backgroundImage": "https://avatars.dicebear.com/v2/identicon/user.svg"
  },
  ".me .hero": {
    "flexDirection": "column",
    "justifyContent": "center",
    "height": "480px"
  },
  ".me .main .getVip": {
    "background": "{\"values\":[{\"type\":\"linearGradient\",\"directions\":[\"to\",\"right\"],\"values\":[\"#434343 0%\",\"#000000 100%\"]}]}",
    "height": "100px",
    "width": "95%",
    "marginTop": "20px",
    "borderRadius": "20px",
    "paddingTop": "20px",
    "paddingRight": "30px",
    "paddingBottom": "20px",
    "paddingLeft": "30px",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  ".me .main .getVip .circle": {
    "position": "absolute",
    "top": "-30px",
    "left": "-300px",
    "borderRadius": "200px",
    "width": "600px",
    "height": "600px",
    "backgroundColor": "rgba(255,255,255,0.05)"
  },
  ".me .main .getVip .leftContent": {
    "width": "200px",
    "display": "flex",
    "alignItems": "center"
  },
  ".me .main .getVip .rightContent": {
    "width": "70%",
    "height": "60px",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".me .main .getVip .leftContent .VIP": {
    "fontSize": "38px",
    "fontWeight": "700",
    "color": "#fcf4ab",
    "marginRight": "10px",
    "letterSpacing": "4px"
  },
  ".me .main .getVip .leftContent .status": {
    "fontSize": "18px",
    "color": "#fcf4ab",
    "letterSpacing": "2px"
  },
  ".me .main .getVip .rightContent .advantages": {
    "height": "60px"
  },
  ".me .main .getVip .rightContent .advantages .advantage": {
    "height": "60px",
    "display": "flex",
    "justifyContent": "flex-end",
    "alignItems": "center"
  },
  ".me .main .getVip .rightContent .advantages .advantage .slogen": {
    "lineHeight": "60px",
    "fontSize": "24px",
    "letterSpacing": "2px",
    "color": "#fcf4ab"
  },
  ".me .main .getVip .rightContent .joinVip": {
    "width": "120px",
    "backgroundColor": "#fcf4ab",
    "borderRadius": "30px",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "height": "80%",
    "marginLeft": "20px"
  },
  ".me .main .getVip .rightContent .joinVip .joinText": {
    "fontSize": "24px",
    "color": "#111111",
    "letterSpacing": "2px"
  },
  ".username": {
    "fontSize": "50px",
    "color": "#ffffff",
    "letterSpacing": "10px",
    "fontWeight": "600"
  },
  ".t_d": {
    "flexDirection": "column"
  },
  ".t_d .hts-desc": {
    "fontSize": "20px"
  },
  ".refresh": {
    "height": "32px",
    "width": "32px",
    "position": "absolute",
    "right": "25px",
    "top": "25px"
  },
  ".refreshing": {
    "animationName": "Rotate",
    "animationDuration": "1000ms",
    "animationIterationCount": -1,
    "animationTimingFunction": "ease-in-out"
  },
  "@KEYFRAMES": {
    "Rotate": [
      {
        "transform": "{\"rotate\":\"0deg\"}",
        "time": 0
      },
      {
        "transform": "{\"rotate\":\"360deg\"}",
        "time": 100
      }
    ]
  }
}

/***/ }),

/***/ "./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/common/library/user_card/component/c_login.ux!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/common/library/user_card/component/c_login.ux!./src/common/library/user_card/component/c_login.ux":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/common/library/user_card/component/c_login.ux!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/common/library/user_card/component/c_login.ux!./src/common/library/user_card/component/c_login.ux ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".user-card": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignContent": "center",
    "alignItems": "center",
    "width": "90%",
    "height": "320px",
    "borderRadius": "15px",
    "paddingTop": "0px",
    "paddingRight": "15px",
    "paddingBottom": "0px",
    "paddingLeft": "15px",
    "backgroundImage": "/common/library/user_card/img/login_bg.png"
  },
  ".usercard-top": {
    "width": "100%",
    "height": "190px"
  },
  ".portrait": {
    "width": "40%",
    "justifyContent": "space-around",
    "alignItems": "center",
    "textAlign": "right"
  },
  ".portrait-noexpand": {
    "width": "100%",
    "flexDirection": "column",
    "justifyContent": "space-around",
    "alignItems": "center",
    "textAlign": "right"
  },
  ".portrait image": {
    "borderRadius": "70px",
    "width": "100px",
    "height": "100px",
    "marginTop": "50px",
    "marginRight": "33.3px",
    "marginBottom": "0px",
    "marginLeft": "50px"
  },
  ".portrait-noexpand image": {
    "borderRadius": "70px",
    "width": "100px",
    "height": "100px"
  },
  ".name text": {
    "fontWeight": "500",
    "fontSize": "31px",
    "color": "#5B441A",
    "marginTop": "50px",
    "marginRight": "0px",
    "marginBottom": "0px",
    "marginLeft": "0px"
  },
  ".usercard-bottom": {
    "width": "100%",
    "height": "160px",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".usercard-bottom-item": {
    "flexDirection": "column",
    "alignItems": "center",
    "width": "25%"
  },
  ".item-top": {
    "marginBottom": "14px"
  },
  ".item-top text": {
    "fontWeight": "bold",
    "fontSize": "31px",
    "textAlign": "center",
    "color": "#5B441A"
  },
  ".item-bottom text": {
    "fontSize": "25px",
    "fontWeight": "400",
    "textAlign": "center",
    "color": "#5B441A"
  },
  ".line": {
    "height": "50px",
    "width": "2px",
    "marginTop": "0px",
    "marginRight": "20px",
    "marginBottom": "0px",
    "marginLeft": "20px",
    "backgroundColor": "rgba(0,0,0,0.2)"
  }
}

/***/ }),

/***/ "./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/common/library/user_card/component/c_logout.ux!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/common/library/user_card/component/c_logout.ux!./src/common/library/user_card/component/c_logout.ux":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/common/library/user_card/component/c_logout.ux!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/common/library/user_card/component/c_logout.ux!./src/common/library/user_card/component/c_logout.ux ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".user-card-nologin": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignContent": "center",
    "alignItems": "center",
    "width": "90%",
    "height": "320px",
    "borderRadius": "15px",
    "paddingTop": "0px",
    "paddingRight": "15px",
    "paddingBottom": "0px",
    "paddingLeft": "15px",
    "backgroundImage": "/common/library/user_card/img/nologin_bg.png"
  },
  ".portrait-noexpand": {
    "width": "100%",
    "flexDirection": "column",
    "justifyContent": "space-around",
    "alignItems": "center",
    "textAlign": "right"
  },
  ".portrait-noexpand image": {
    "width": "100px",
    "height": "100px"
  },
  ".name-nologin": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "marginTop": "41px"
  },
  ".main-title": {
    "fontSize": "31px",
    "fontWeight": "400",
    "color": "#1A1A1A"
  },
  ".sub-title": {
    "fontSize": "25px",
    "fontWeight": "400",
    "color": "#7B7B7B"
  }
}

/***/ }),

/***/ "./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/common/library/user_card/user_card.ux!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/common/library/user_card/user_card.ux!./src/common/library/user_card/user_card.ux":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/common/library/user_card/user_card.ux!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/common/library/user_card/user_card.ux!./src/common/library/user_card/user_card.ux ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "alignContent": "center",
    "alignItems": "center",
    "width": "100%"
  }
}

/***/ }),

/***/ "./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./src/Index/index.ux":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./src/Index/index.ux ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
          "attr": {},
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "homepage"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": function () {return ['hero', this.emergency_type===1?'':'emergency']},
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "text-part"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.$tc('message.index.greatings',this.emergency_type)}
                          },
                          "classList": [
                            "greatings"
                          ]
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.$tc('message.index.desc',this.emergency_type)}
                          },
                          "classList": [
                            "desc"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "pic-part"
                      ],
                      "children": [
                        {
                          "type": "image",
                          "attr": {
                            "src": function () {return this.emergency_type===1?'../Common/safety.svg':'../Common/error.svg'}
                          }
                        }
                      ]
                    }
                  ]
                },
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
                        "src": "/Common/refresh.svg"
                      },
                      "classList": function () {return ['refresh', this.refreshing?'refreshing':'']},
                      "events": {
                        "click": "refreshInfo"
                      }
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "htsitem"
                      ],
                      "events": {
                        "click": "activateService"
                      },
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.$t('message.index.htslist.first')}
                          },
                          "classList": [
                            "hts-title"
                          ]
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.status?'启用':'未启用'}
                          },
                          "classList": [
                            "hts-status"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "htsitem"
                      ],
                      "events": {
                        "click": function(evt){this.routeTo('EmergencyEvents',evt)}
                      },
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.$t('message.index.htslist.second')}
                          },
                          "classList": [
                            "hts-title"
                          ]
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.accidents.length===0?'无':this.$t('message.index.htslist.accidents',[this.accidents.length])}
                          },
                          "classList": [
                            "hts-status"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "htsitem"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.$t('message.index.htslist.third')}
                          },
                          "classList": [
                            "hts-title"
                          ]
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.inner_pos}
                          },
                          "classList": [
                            "hts-status"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "htsitem"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.$tc('message.index.htslist.forth')}
                          },
                          "classList": [
                            "hts-title"
                          ]
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.ht_level}
                          },
                          "classList": [
                            "hts-status"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "htsitem"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.$tc('message.index.htslist.fifth')}
                          },
                          "classList": [
                            "hts-title"
                          ]
                        },
                        {
                          "type": "image",
                          "attr": {
                            "src": "/Common/right.svg"
                          },
                          "classList": [
                            "hts-btn"
                          ],
                          "events": {
                            "click": function(evt){this.routeTo('Indoor',evt)}
                          }
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "htsitem"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.$tc('message.index.htslist.sixth')}
                          },
                          "classList": [
                            "hts-title"
                          ]
                        },
                        {
                          "type": "image",
                          "attr": {
                            "src": "/Common/right.svg"
                          },
                          "classList": [
                            "hts-btn"
                          ],
                          "events": {
                            "click": function(evt){this.routeTo('Urgency',evt)}
                          }
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
                "me"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": function () {return ['hero', this.emergency_type===1?'':'emergency']},
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": "/Common/user.svg"
                      },
                      "classList": [
                        "avatar"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.username}
                      },
                      "classList": [
                        "username"
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "main"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "getVip"
                      ],
                      "children": [
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "circle"
                          ]
                        },
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "leftContent"
                          ],
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": "VIP"
                              },
                              "classList": [
                                "VIP"
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.isVIP?'已开通':'未开通'}
                              },
                              "classList": [
                                "status"
                              ]
                            }
                          ]
                        },
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "rightContent"
                          ],
                          "children": [
                            {
                              "type": "list",
                              "attr": {
                                "id": "advantages"
                              },
                              "classList": [
                                "advantages"
                              ],
                              "id": "advantages",
                              "children": [
                                {
                                  "type": "block",
                                  "attr": {},
                                  "repeat": function () {return this.vipAdvantages},
                                  "children": [
                                    {
                                      "type": "list-item",
                                      "attr": {
                                        "type": "advantage"
                                      },
                                      "classList": [
                                        "advantage"
                                      ],
                                      "children": [
                                        {
                                          "type": "text",
                                          "attr": {
                                            "value": function () {return this.$item}
                                          },
                                          "classList": [
                                            "slogen"
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
                                "joinVip"
                              ],
                              "children": [
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": function () {return this.isVIP?'取消':'开通'}
                                  },
                                  "classList": [
                                    "joinText"
                                  ],
                                  "events": {
                                    "click": "joinVIP"
                                  }
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
                        "htsitem"
                      ],
                      "children": [
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "t_d"
                          ],
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.$t('message.index.settings.first.title')}
                              },
                              "classList": [
                                "hts-title"
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.$t('message.index.settings.first.desc')}
                              },
                              "classList": [
                                "hts-desc"
                              ]
                            }
                          ]
                        },
                        {
                          "type": "switch",
                          "attr": {},
                          "events": {
                            "change": "onCardServiceChange"
                          }
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "htsitem"
                      ],
                      "children": [
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "t_d"
                          ],
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.$t('message.index.settings.second.title')}
                              },
                              "classList": [
                                "hts-title"
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.$t('message.index.settings.second.desc')}
                              },
                              "classList": [
                                "hts-desc"
                              ]
                            }
                          ]
                        },
                        {
                          "type": "switch",
                          "attr": {},
                          "events": {
                            "change": "onUrgentPushChange"
                          }
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "htsitem"
                      ],
                      "children": [
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "t_d"
                          ],
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.$t('message.index.settings.forth.title')}
                              },
                              "classList": [
                                "hts-title"
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.$t('message.index.settings.forth.desc')}
                              },
                              "classList": [
                                "hts-desc"
                              ]
                            }
                          ]
                        },
                        {
                          "type": "switch",
                          "attr": {},
                          "events": {
                            "change": "onRoundtripChanged"
                          }
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "htsitem"
                      ],
                      "children": [
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "t_d"
                          ],
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.$t('message.index.settings.fifth.title')}
                              },
                              "classList": [
                                "hts-title"
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.$t('message.index.settings.fifth.desc')}
                              },
                              "classList": [
                                "hts-desc"
                              ]
                            }
                          ]
                        },
                        {
                          "type": "switch",
                          "attr": {},
                          "events": {
                            "change": "onDevMode"
                          }
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "htsitem"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.$t('message.index.settings.third.title')}
                          },
                          "classList": [
                            "hts-title"
                          ]
                        },
                        {
                          "type": "image",
                          "attr": {
                            "src": "/Common/right.svg"
                          },
                          "classList": [
                            "hts-btn"
                          ],
                          "events": {
                            "click": "showAbout"
                          }
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
    }
  ]
}

/***/ }),

/***/ "./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./src/common/library/user_card/component/c_login.ux":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./src/common/library/user_card/component/c_login.ux ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "user-card"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "usercard-top"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": function () {return [this.expand.length>0?'portrait':'portrait-noexpand']},
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/common/library/user_card/img/c_user_card_login_avatar.png"
              }
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "name"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.userInfo.username}
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "block",
      "attr": {},
      "shown": function () {return this.expand.length>0},
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "usercard-bottom"
          ],
          "children": [
            {
              "type": "block",
              "attr": {},
              "repeat": function () {return this.expand},
              "children": [
                {
                  "type": "block",
                  "attr": {},
                  "shown": function () {return this.$idx>0},
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "line"
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "usercard-bottom-item"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "item-top"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.$item.number}
                          }
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "item-bottom"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.$item.name}
                          }
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
    }
  ]
}

/***/ }),

/***/ "./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./src/common/library/user_card/component/c_logout.ux":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./src/common/library/user_card/component/c_logout.ux ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "user-card-nologin"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "portrait-noexpand"
      ],
      "children": [
        {
          "type": "image",
          "attr": {
            "src": "/common/library/user_card/img/c_user_card_no_login_avatar.png"
          }
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "name-nologin"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.content.title}
              },
              "classList": [
                "main-title"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.content.subTitle}
              },
              "classList": [
                "sub-title"
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./src/common/library/user_card/user_card.ux":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./src/common/library/user_card/user_card.ux ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
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
      "type": "login",
      "attr": {
        "content": function () {return this.content_login}
      },
      "shown": function () {return this.isLogin}
    },
    {
      "type": "logout",
      "attr": {
        "content": function () {return this.content_logout}
      },
      "shown": function () {return !this.isLogin}
    }
  ]
}

/***/ }),

/***/ "./node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/preset-env&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./src/Index/index.ux":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./node_modules/babel-loader/lib?presets[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/preset-env&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./src/Index/index.ux ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.card"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _system4 = _interopRequireDefault($app_require$("@app-module/system.bluetooth"));

var _system5 = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _system6 = _interopRequireDefault($app_require$("@app-module/system.resident"));

var _bt_next = _interopRequireDefault(__webpack_require__(/*! ../Common/bt_next.js */ "./src/Common/bt_next.js"));

var _system7 = _interopRequireDefault($app_require$("@app-module/system.notification"));

var _system8 = _interopRequireDefault($app_require$("@app-module/system.geolocation"));

var _system9 = _interopRequireDefault($app_require$("@app-module/system.storage"));

var _const = __webpack_require__(/*! ../const.js */ "./src/const.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_const.baseUrl);
module.exports = {
  data: {
    componentData: {},
    emergency_type: 1,
    status: false,
    inner_pos: "未知",
    ht_level: "未知",
    accidents: [],
    refreshing: false,
    pos_detail: null,
    first_in: false,
    tablist: [{
      title: '首页',
      render: false,
      nurl: '../Common/home_nnor.png',
      curl: '../Common/home_bcho.png'
    }, {
      title: '我的',
      render: false,
      nurl: '../Common/mine_nnor.png',
      curl: '../Common/mine_bcho.png'
    }],
    username: '游客',
    vipAdvantages: ['超值权益，速来体验!', '现在开通9折起!', '超多店铺优惠等你拿!'],
    vipAdvantagesIdx: 0,
    isVIP: false,
    cardService: false,
    urgentPush: false,
    roundtrip: false,
    intervalid: null
  },

  onInit() {
    console.log(global);
    this.$page.setTitleBar({
      text: this.$t('message.index.title')
    });

    if (typeof this.accidents === "string") {
      this.status = true;
      this.accidents = JSON.parse(this.accidents);
      console.log(JSON.stringify(this.accidents));

      if (this.accidents.length > 0) {
        this.emergency_type = 0;
        this.$page.setTitleBar({
          backgroundColor: '#EC6A6A'
        });
      } else {
        this.emergency_type = 1;
        this.$page.setTitleBar({
          backgroundColor: '#008DF8'
        });
      }
    }

    if (typeof this.inner_pos === "string") {
      if (this.inner_pos !== "未知") {
        this.status = true;
        this.pos_detail = JSON.parse(this.inner_pos);
        this.inner_pos = this.pos_detail.position;
        console.log(JSON.stringify(this.pos_detail));
      }
    }

    console.log("checkstate");
  },

  onReady(options) {
    let that = this;

    _system9.default.get({
      key: 'isVIP',
      success: function (data) {
        that.isVIP = data;
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`);
      }
    });

    console.log("Page Ready");
    setInterval(() => {
      this.vipAdvantagesIdx++;
      this.vipAdvantagesIdx %= 3;
      this.$element('advantages').scrollTo({
        index: this.vipAdvantagesIdx
      });
    }, 3000);
  },

  onShow: function () {
    console.log("show");
    this.$page.setTitleBar({
      text: this.$t('message.index.title'),
      backgroundColor: this.emergency_type === 1 ? '#008df8' : '#EC6A6A'
    });
  },
  onHide: function () {
    _system7.default.show({
      contentTitle: '查看当前安全事件',
      clickAction: {
        uri: '/EmergencyEvents'
      }
    });
  },

  routeTo(pagename) {
    if (this.inner_pos === '未知' && pagename !== 'Indoor') {
      _system3.default.showToast({
        message: '请至少获取一次您的位置信息',
        duration: 1000
      });

      return;
    }

    _system.default.push({
      uri: `/${pagename}`,
      params: {
        inner_pos: this.pos_detail,
        accidents: this.accidents,
        lightMode: global.lightMode
      },
      success: function () {
        console.log('launchApp success .');
      },
      fail: function (error) {
        console.log('launchApp fail :' + error.message);
      },
      complete: function () {
        console.log('launchApp complete.');
      }
    });
  },

  activateService: function () {
    this.status = !this.status;

    if (this.status) {
      this.refreshInfo();
    }
  },
  onLightMapEnabled: function (val) {
    global.lightMode = val.checked;
    console.log("启用浅色主题", global.lightMode);
  },
  onCardServiceChange: function (val) {
    this.cardService = val.checked;
    console.log("卡片服务", this.cardService);

    _system3.default.showToast({
      message: "当前由于OPPO快应用政策\n尚未支持,请联系开发者",
      duration: 1000
    });
  },
  onUrgentPushChange: function (val) {
    this.urgentPush = val.checked;
    console.log("紧急推送", this.urgentPush);

    _system3.default.showToast({
      message: "当前由于OPPO快应用政策\n尚未支持,请联系开发者",
      duration: 1000
    });
  },
  onRoundtripChanged: function (val) {
    console.log("Round trip checked:", val.checked);
    this.roundtrip = val.checked;

    if (this.roundtrip) {
      console.log("In Interval");
      let that = this;
      that.refreshInfo();
      this.intervalid = setInterval(() => {
        console.log("In Interval");
        that.refreshInfo();
      }, 15000);
    } else {
      clearInterval(this.intervalid);
    }
  },

  showAbout() {
    _system3.default.showDialog({
      title: '关于开发者',
      message: '一些介绍的话',
      buttons: [{
        text: '确认',
        color: '#008df8'
      }]
    });
  },

  onTabIdxChange(evt) {
    this.$page.setTitleBar({
      text: this.tablist[evt.index].title,
      backgroundColor: this.emergency_type === 1 ? "#008DF8" : '#EC6A6A'
    });
    this.modifyListItemData(evt.index);
  },

  modifyListItemData(index) {
    this.tablist.forEach(element => {
      element.render = false;
    });
    this.tablist[index].render = true;
  },

  refreshInfo: async function () {
    if (!this.status) {
      _system3.default.showToast({
        message: '请先启动服务',
        duration: 1000
      });

      return false;
    }

    if (!this.refreshing) {
      _system3.default.showToast({
        message: '开始刷新',
        duration: 2000
      });

      this.refreshing = true;

      _system8.default.getLocationType({
        success: function (data) {
          console.log(`handling success: locationType = ${data.types}`);
        },
        fail: function (data, code) {
          console.log(`handling fail, code = ${code}`);
        }
      });

      let geoPos = await this.getLocationPromise().catch(err => {
        console.log("Get Location err = ", err);
      });
      console.log("Get Location Res = ", geoPos);

      if (typeof geoPos === "undefined") {
        geoPos = {
          latitude: '30.55517',
          longitude: '104.002715'
        };
      } else if (typeof geoPos === "string") {
        geoPos = JSON.parse(geoPos);

        _system3.default.showToast({
          message: `您拿到了Location信息:${geoPos.latitude}, ${geoPos.longitude}`,
          duration: 2000
        });
      }

      console.log("start to Get BasePoints");
      console.log(_const.baseUrl);
      let basePoints = await _system5.default.fetch({
        url: `${_const.baseUrl}/getBasePoints`
      }).catch(err => {
        console.log("Handling failed events, err = ", err);
      });
      console.log(basePoints);

      if (basePoints.data.code === 200) {
        console.log("成功获取basepoints");
        basePoints = JSON.parse(basePoints.data.data);
      } else {
        console.log("Error when get basepoints");
        return false;
      }

      let isIn = this.isInbuilding(basePoints, geoPos);
      console.log(isIn);

      if (!isIn) {
        console.log("您不在楼内");

        if (this.first_in) {
          _system3.default.showToast({
            message: '您已离开Overwatch监控的建筑',
            duration: 2000
          });

          this.first_in = false;
        } else {
          _system3.default.showToast({
            message: '您不在Overwatch监控的建筑内',
            duration: 2000
          });
        }

        this.refreshing = false;
        this.inner_pos = "未知";
        this.emergency_type = 1;
        this.ht_level = "未知";
        this.accidents = [];
        this.pos_detail = null;
        return false;
      } else {
        if (!this.first_in) {
          _system3.default.showToast({
            message: '您已进入Overwatch监控的建筑',
            duration: 2000
          });

          _system7.default.show({
            contentTitle: `您已经进入Overwatch监控的建筑`,
            contentText: '点此查看详细',
            clickAction: {
              uri: '/'
            }
          });

          this.first_in = true;
        }
      }

      let id;

      if (global.productiontip === "dev") {
        id = 76638;

        _system3.default.showToast({
          message: `cameraid:${id}`
        });

        await this.universalRefreshProcess(id);
      } else {
        id = 2;
        (0, _bt_next.default)(_system4.default, this.universalRefreshProcess.bind(this));
        console.log("AFTER BT() ");
      }
    } else {
      _system3.default.showToast({
        message: '正在刷新',
        duration: 500
      });
    }
  },

  async universalRefreshProcess(val) {
    console.log("val type:", typeof val);
    let id;

    if (typeof val === 'number') {
      id = val;
    } else if (typeof val === 'object') {
      id = val[0].camera_id;
    }

    console.log("拿取自身位置");
    let res = await _system5.default.fetch({
      url: `${_const.baseUrl}/getCamera?id=${id}`
    }).catch(err => {
      console.log("handling fail, err = " + err);
    });
    let result = res.data;

    if (result.code === 200) {
      console.log(result.data);
      this.pos_detail = JSON.parse(result.data);
      this.inner_pos = this.pos_detail.position;
    } else {
      console.log("ERROR POS");
    }

    console.log("拿取当前人流量");
    res = await _system5.default.fetch({
      url: `${_const.baseUrl}/getCurrentNumById?id=${id}`
    }).catch(err => {
      console.log("handling fail, err = " + err);
    });
    result = res.data;

    if (result.code === 200) {
      console.log(result.data);
      this.ht_level = result.data;
    } else {
      console.log("ERROR HT");
    }

    res = await _system5.default.fetch({
      url: `${_const.baseUrl}/getCurrentAccidents`
    }).catch(err => {
      console.log("handling fail, err = " + err);
    });
    result = res.data;

    if (result.code === 200) {
      this.accidents = JSON.parse(result.data);

      if (global.productiontip === "dev") {}

      if (this.accidents.length > 0) {
        this.emergency_type = 0;
        this.$page.setTitleBar({
          backgroundColor: '#EC6A6A'
        });

        _system7.default.show({
          contentTitle: `您所在的建筑有${this.accidents.length}项紧急事件!`,
          contentText: '点此查看',
          clickAction: {
            uri: '/EmergencyEvents'
          }
        });
      } else {
        this.emergency_type = 1;
        this.$page.setTitleBar({
          backgroundColor: '#008DF8'
        });
      }
    } else {
      console.log("ERROR ACC");
    }

    this.refreshing = false;

    _system3.default.showToast({
      message: '刷新完成',
      duration: 500
    });
  },

  getLocationPromise() {
    console.log("Start To Get Location");
    console.log(_const.baseUrl);
    return new Promise((resolve, reject) => {
      _system8.default.getLocation({
        timeout: 3000,
        success: function (data) {
          console.log(`handling success: longitude = ${data.longitude}, latitude = ${data.latitude}`);
          resolve(data);
        },
        fail: function (data, code) {
          console.log(`handling fail, code = ${code} data = ${data}`);
          reject(code);
        }
      });
    });
  },

  isInbuilding(basepoints, geoPos) {
    console.log("Is In Building");
    console.log(JSON.stringify(basepoints));
    console.log(JSON.stringify(geoPos));
    let left_vertical = false;
    let top_horizontal = false;
    let latitude = geoPos.latitude;
    let longitude = geoPos.longitude;
    let canvas_x = 0;
    let canvas_y = 0;
    let lb = basepoints[0];
    let rb = basepoints[1];
    let lt = basepoints[2];
    let rt = basepoints[3];
    let k1, b1, k2, b2;
    k1 = (lt[0] - lb[0]) / (lt[1] - lb[1]);
    k2 = (lt[0] - rt[0]) / (lt[1] - rt[1]);
    b1 = lb[1] - k1 * lb[0];
    b2 = lt[1] - k2 * lt[0];

    if (k1 === 0) {
      console.log("左边线段垂直");
      left_vertical = true;
    }

    if (!Number.isFinite(k2)) {
      console.log("上边线段水平");
      top_horizontal = true;
    }

    if (left_vertical) {
      canvas_x = latitude - lt[0];
    } else {
      canvas_x = Math.abs(k1 * latitude - longitude + b1) / Math.sqrt(k1 * k1 + -1 * -1);
    }

    if (top_horizontal) {
      canvas_y = lt[1] - longitude;
    } else {
      canvas_y = Math.abs(k2 * latitude - longitude + b2) / Math.sqrt(k2 * k2 + -1 * -1);
    }

    let latitude_len = Math.sqrt((rt[0] - lt[0]) * (rt[0] - lt[0]) + (rt[1] - lt[1]) * (rt[1] - lt[1]));
    let longitude_len = Math.sqrt((lt[0] - lb[0]) * (lt[0] - lb[0]) + (lt[1] - lb[1]) * (lt[1] - lb[1]));

    if (canvas_x < latitude_len && canvas_x > 0 && canvas_y < longitude_len && canvas_y > 0) {
      console.log("在内");
      return true;
    }

    console.log("不在内");
    return true;
  },

  onDevMode: function (val) {
    let checked = val.checked;
    console.log("Dev", checked);

    if (checked) {
      _system3.default.showToast({
        message: "切换为生产模式，需要蓝牙部署才可以正常运行！",
        duration: 2000
      });

      global.productiontip = 'pro';
    } else {
      _system3.default.showToast({
        message: "切换为开发者模式",
        duration: 2000
      });

      global.productiontip = 'dev';
    }
  },

  joinVIP() {
    if (!this.isVIP) {
      _system9.default.set({
        key: 'isVIP',
        value: true,
        success: function (data) {
          console.log('handling success');
        },
        fail: function (data, code) {
          console.log(`handling fail, code = ${code}`);
        }
      });

      this.isVIP = true;
    } else {
      _system9.default.delete({
        key: 'isVIP',
        success: function (data) {
          console.log('delete success');
        },
        fail: function (data, code) {
          console.log(`handling fail, code = ${code}`);
        }
      });

      this.isVIP = false;
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

/***/ "./node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/preset-env&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./src/common/library/user_card/component/c_login.ux":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./node_modules/babel-loader/lib?presets[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/preset-env&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./src/common/library/user_card/component/c_login.ux ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

module.exports = {
  props: ['content'],

  data() {
    return {
      userInfo: this.content.userInfo,
      expand: this.content.expand
    };
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

/***/ "./node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/preset-env&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./src/common/library/user_card/component/c_logout.ux":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./node_modules/babel-loader/lib?presets[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/preset-env&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./src/common/library/user_card/component/c_logout.ux ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

module.exports = {
  props: ['content']
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

/***/ "./node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/preset-env&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./src/common/library/user_card/user_card.ux":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./node_modules/babel-loader/lib?presets[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/preset-env&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./src/common/library/user_card/user_card.ux ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

module.exports = {
  data: {
    isLogin: false,
    content_login: {
      userInfo: {
        username: "Jiaqi"
      },
      expand: [{
        number: "12",
        name: "优惠券"
      }, {
        number: "34",
        name: "唯品币"
      }, {
        number: "56.00",
        name: "零钱"
      }]
    },
    content_logout: {
      title: "登录华为账户",
      subTitle: "大波红包等你拿xxxx"
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

/***/ "./node_modules/fa-toolkit/lib/fa-compiler/loader.js?type=component!./src/common/library/user_card/component/c_login.ux?name=login":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/fa-toolkit/lib/fa-compiler/loader.js?type=component!./src/common/library/user_card/component/c_login.ux?name=login ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../../../../node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!../../../../../node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./c_login.ux */ "./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./src/common/library/user_card/component/c_login.ux")
var $app_style$ = __webpack_require__(/*! !../../../../../node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../../../../node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/common/library/user_card/component/c_login.ux!../../../../../node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/common/library/user_card/component/c_login.ux!./c_login.ux */ "./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/common/library/user_card/component/c_login.ux!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/common/library/user_card/component/c_login.ux!./src/common/library/user_card/component/c_login.ux")
var $app_script$ = __webpack_require__(/*! !../../../../../node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!../../../../../node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!../../../../../node_modules/babel-loader?presets[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/preset-env&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!../../../../../node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./c_login.ux */ "./node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/preset-env&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./src/common/library/user_card/component/c_login.ux")

$app_define$('@app-component/login', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./node_modules/fa-toolkit/lib/fa-compiler/loader.js?type=component!./src/common/library/user_card/component/c_logout.ux?name=logout":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/fa-toolkit/lib/fa-compiler/loader.js?type=component!./src/common/library/user_card/component/c_logout.ux?name=logout ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../../../../node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!../../../../../node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./c_logout.ux */ "./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./src/common/library/user_card/component/c_logout.ux")
var $app_style$ = __webpack_require__(/*! !../../../../../node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../../../../node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/common/library/user_card/component/c_logout.ux!../../../../../node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/common/library/user_card/component/c_logout.ux!./c_logout.ux */ "./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/common/library/user_card/component/c_logout.ux!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/common/library/user_card/component/c_logout.ux!./src/common/library/user_card/component/c_logout.ux")
var $app_script$ = __webpack_require__(/*! !../../../../../node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!../../../../../node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!../../../../../node_modules/babel-loader?presets[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/preset-env&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!../../../../../node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./c_logout.ux */ "./node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/preset-env&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./src/common/library/user_card/component/c_logout.ux")

$app_define$('@app-component/logout', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./node_modules/fa-toolkit/lib/fa-compiler/loader.js?type=component!./src/common/library/user_card/user_card.ux?name=user_card":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/fa-toolkit/lib/fa-compiler/loader.js?type=component!./src/common/library/user_card/user_card.ux?name=user_card ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../../node_modules/fa-toolkit/lib/fa-compiler/loader.js?type=component!./component/c_login.ux?name=login */ "./node_modules/fa-toolkit/lib/fa-compiler/loader.js?type=component!./src/common/library/user_card/component/c_login.ux?name=login")
__webpack_require__(/*! !../../../../node_modules/fa-toolkit/lib/fa-compiler/loader.js?type=component!./component/c_logout.ux?name=logout */ "./node_modules/fa-toolkit/lib/fa-compiler/loader.js?type=component!./src/common/library/user_card/component/c_logout.ux?name=logout")
var $app_template$ = __webpack_require__(/*! !../../../../node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../../../node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!../../../../node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./user_card.ux */ "./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./src/common/library/user_card/user_card.ux")
var $app_style$ = __webpack_require__(/*! !../../../../node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../../../node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/common/library/user_card/user_card.ux!../../../../node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/common/library/user_card/user_card.ux!./user_card.ux */ "./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/common/library/user_card/user_card.ux!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/common/library/user_card/user_card.ux!./src/common/library/user_card/user_card.ux")
var $app_script$ = __webpack_require__(/*! !../../../../node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!../../../../node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!../../../../node_modules/babel-loader?presets[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/preset-env&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!../../../../node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./user_card.ux */ "./node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/preset-env&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./src/common/library/user_card/user_card.ux")

$app_define$('@app-component/user_card', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./src/Common/bt_next.js":
/*!*******************************!*\
  !*** ./src/Common/bt_next.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// blue tooth support
// var bluetooth = $app_require$( '@app-module/system.bluetooth');
// DEBUG data
const DEBUG = true;
const DEBUG_X = 12683465.562662857;
const DEBUG_Y = 2557889.670743966;
const DEBUG_CID = 76638; // camera device set

var specific_device_set = []; // env 

const n = 3; // rssi with 1m distance

const A = 70;

function getD(rssi) {
  return Math.pow(10, (Math.abs(rssi) - A) / (10 * n));
}

function getPointAndId() {
  // use set to get point and cid
  let first = specific_device_set[0];
  let second = specific_device_set[1];
  let third = specific_device_set[2];

  if (!first || !second || !third) {
    return null;
  }

  let a = first.point_x - third.point_x;
  let b = first.point_y - third.point_y;
  let c = Math.pow(first.point_x, 2) - Math.pow(second.point_x, 2) + Math.pow(first.point_y, 2) - Math.pow(second.point_y, 2) + Math.pow(first.distance, 2) - Math.pow(first.distance, 2);
  let d = second.point_x - third.point_x;
  let e = second.point_y - third.point_y;
  let f = Math.pow(second.point_x, 2) - Math.pow(third.point_x, 2) + Math.pow(second.point_y, 2) - Math.pow(third.point_y, 2) + Math.pow(second.distance, 2) - Math.pow(seconnd.distance, 2);
  let x = (b * f - e * c) / (2 * b * d - 2 * a * e);
  let y = (a * f - d * c) / (2 * a * e - 2 * b * d);
  let mid = first.distance < seconnd.distance ? first : second;
  let min = mid.distance < third.distance ? mid : third;
  return [x, y, min.camera_id];
} // main


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
  });

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
            let camera_id = device_name.split('-')[1];
            let point_x = device_name.split('-')[2];
            let point_y = device_name.split('-')[3];
            let dis = getD(device.RSSI);
            specific_device_set.push({
              camera_id: Number(camera_id),
              RSSI: device.RSSI,
              point: [point_x, point_y],
              distance: dis
            }); // get first

            if (specific_device_set.size() >= 3) {
              let res = getPointAndId();

              if (res) {
                if (DEBUG) {
                  res = [DEBUG_X, DEBUG_Y, DEBUG_CID];
                }

                find_camera_callback(res);
              }
            }
          }
        });
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

/***/ "./src/Index/index.ux":
/*!****************************!*\
  !*** ./src/Index/index.ux ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../node_modules/fa-toolkit/lib/fa-compiler/loader.js?type=component!../common/library/user_card/user_card.ux?name=user_card */ "./node_modules/fa-toolkit/lib/fa-compiler/loader.js?type=component!./src/common/library/user_card/user_card.ux?name=user_card")
var $app_template$ = __webpack_require__(/*! !../../node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!../../node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./index.ux */ "./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./src/Index/index.ux")
var $app_style$ = __webpack_require__(/*! !../../node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/Index/index.ux!../../node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/Index/index.ux!./index.ux */ "./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/Index/index.ux!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/Index/index.ux!./src/Index/index.ux")
var $app_script$ = __webpack_require__(/*! !../../node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!../../node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!../../node_modules/babel-loader?presets[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/preset-env&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!../../node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./index.ux */ "./node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/preset-env&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./src/Index/index.ux")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerName:'fa-toolkit', packagerVersion: '2.5.2-Stable.300'})

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQvSW5kZXgvaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luZGV4L2luZGV4LnV4PzA4ZGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9saWJyYXJ5L3VzZXJfY2FyZC9jb21wb25lbnQvY19sb2dpbi51eD8yMmFmIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vbGlicmFyeS91c2VyX2NhcmQvY29tcG9uZW50L2NfbG9nb3V0LnV4PzczNzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9saWJyYXJ5L3VzZXJfY2FyZC91c2VyX2NhcmQudXg/M2EyMyIsIndlYnBhY2s6Ly8vLi9zcmMvSW5kZXgvaW5kZXgudXg/NWY2YiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2xpYnJhcnkvdXNlcl9jYXJkL2NvbXBvbmVudC9jX2xvZ2luLnV4PzE3OTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9saWJyYXJ5L3VzZXJfY2FyZC9jb21wb25lbnQvY19sb2dvdXQudXg/YjJkNiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2xpYnJhcnkvdXNlcl9jYXJkL3VzZXJfY2FyZC51eD83MzAzIiwid2VicGFjazovLy8uL3NyYy9JbmRleC9pbmRleC51eD80ZTEyIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vbGlicmFyeS91c2VyX2NhcmQvY29tcG9uZW50L2NfbG9naW4udXg/YWEwMCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2xpYnJhcnkvdXNlcl9jYXJkL2NvbXBvbmVudC9jX2xvZ291dC51eD8xYWQ4Iiwid2VicGFjazovLy8uL3NyYy9jb21tb24vbGlicmFyeS91c2VyX2NhcmQvdXNlcl9jYXJkLnV4PzI3ZmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9saWJyYXJ5L3VzZXJfY2FyZC9jb21wb25lbnQvY19sb2dpbi51eCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2xpYnJhcnkvdXNlcl9jYXJkL2NvbXBvbmVudC9jX2xvZ291dC51eCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2xpYnJhcnkvdXNlcl9jYXJkL3VzZXJfY2FyZC51eCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tbW9uL2J0X25leHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luZGV4L2luZGV4LnV4Iiwid2VicGFjazovLy8uL3NyYy9jb25zdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9JbmRleC9pbmRleC51eFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5jb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLmhvbWVwYWdlXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiXG4gIH0sXG4gIFwiLm1lXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiXG4gIH0sXG4gIFwiLnRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiNTBweFwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCIudGV4dC1wYXJ0XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5ncmVhdGluZ3NcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxMDBweFwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNjAwXCIsXG4gICAgXCJsZXR0ZXJTcGFjaW5nXCI6IFwiNXB4XCJcbiAgfSxcbiAgXCIuZGVzY1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcIi5oZXJvXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwMDhkZjhcIixcbiAgICBcImhlaWdodFwiOiBcIjQwMHB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYXJvdW5kXCJcbiAgfSxcbiAgXCIuZW1lcmdlbmN5XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNFQzZBNkFcIlxuICB9LFxuICBcIi5tYWluXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIi0zMHB4XCIsXG4gICAgXCJib3JkZXJUb3BSaWdodFJhZGl1c1wiOiBcIjMwcHhcIixcbiAgICBcImJvcmRlclRvcExlZnRSYWRpdXNcIjogXCIzMHB4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWFyb3VuZFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiLmh0c2l0ZW1cIjoge1xuICAgIFwid2lkdGhcIjogXCI5NSVcIixcbiAgICBcImhlaWdodFwiOiBcIjEyMHB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjVweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjVweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCI1cHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjVweFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjY2NjY2NjXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiI2NjY2NjY1wiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjY2NjY2NjXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjY2NjY2NjXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyMHB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNTBweFwiXG4gIH0sXG4gIFwiLmh0c2l0ZW0gLmh0cy10aXRsZVwiOiB7XG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNjAwXCJcbiAgfSxcbiAgXCIuaHRzaXRlbSAuaHRzLXN0YXR1c1wiOiB7XG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNjAwXCJcbiAgfSxcbiAgXCIuaHRzaXRlbSAuaHRzLWJ0blwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjQ4cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjQ4cHhcIlxuICB9LFxuICBcIi50YWItY29udGFpbmVyXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjEyMHB4XCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjYmJiYmJiXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiI2JiYmJiYlwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjYmJiYmJiXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjYmJiYmJiXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWFyb3VuZFwiXG4gIH0sXG4gIFwiLnRhYi1jb250ZW50XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIudGFiLWltZ1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjQ4cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjQ4cHhcIlxuICB9LFxuICBcIi50YWItdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI0cHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI3MDBcIlxuICB9LFxuICBcIi5hdmF0YXJcIjoge1xuICAgIFwid2lkdGhcIjogXCIyNTZweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMjU2cHhcIlxuICB9LFxuICBcIi5yZWFsdXNlclwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjI1NnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIyNTZweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTI4cHhcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMnB4XCIsXG4gICAgXCJib3JkZXJSaWdodFdpZHRoXCI6IFwiMnB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjJweFwiLFxuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IFwiMnB4XCIsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiNkZGRkZGRcIixcbiAgICBcImJvcmRlclJpZ2h0Q29sb3JcIjogXCIjZGRkZGRkXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNkZGRkZGRcIixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcIiNkZGRkZGRcIixcbiAgICBcImJhY2tncm91bmRJbWFnZVwiOiBcImh0dHBzOi8vYXZhdGFycy5kaWNlYmVhci5jb20vdjIvaWRlbnRpY29uL3VzZXIuc3ZnXCJcbiAgfSxcbiAgXCIubWUgLmhlcm9cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImhlaWdodFwiOiBcIjQ4MHB4XCJcbiAgfSxcbiAgXCIubWUgLm1haW4gLmdldFZpcFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwie1xcXCJ2YWx1ZXNcXFwiOlt7XFxcInR5cGVcXFwiOlxcXCJsaW5lYXJHcmFkaWVudFxcXCIsXFxcImRpcmVjdGlvbnNcXFwiOltcXFwidG9cXFwiLFxcXCJyaWdodFxcXCJdLFxcXCJ2YWx1ZXNcXFwiOltcXFwiIzQzNDM0MyAwJVxcXCIsXFxcIiMwMDAwMDAgMTAwJVxcXCJdfV19XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDBweFwiLFxuICAgIFwid2lkdGhcIjogXCI5NSVcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjIwcHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHB4XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIubWUgLm1haW4gLmdldFZpcCAuY2lyY2xlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcFwiOiBcIi0zMHB4XCIsXG4gICAgXCJsZWZ0XCI6IFwiLTMwMHB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyMDBweFwiLFxuICAgIFwid2lkdGhcIjogXCI2MDBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNjAwcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMjU1LDI1NSwyNTUsMC4wNSlcIlxuICB9LFxuICBcIi5tZSAubWFpbiAuZ2V0VmlwIC5sZWZ0Q29udGVudFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjIwMHB4XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLm1lIC5tYWluIC5nZXRWaXAgLnJpZ2h0Q29udGVudFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjcwJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNjBweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIubWUgLm1haW4gLmdldFZpcCAubGVmdENvbnRlbnQgLlZJUFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjM4cHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI3MDBcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZjZjRhYlwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMHB4XCIsXG4gICAgXCJsZXR0ZXJTcGFjaW5nXCI6IFwiNHB4XCJcbiAgfSxcbiAgXCIubWUgLm1haW4gLmdldFZpcCAubGVmdENvbnRlbnQgLnN0YXR1c1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE4cHhcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZjZjRhYlwiLFxuICAgIFwibGV0dGVyU3BhY2luZ1wiOiBcIjJweFwiXG4gIH0sXG4gIFwiLm1lIC5tYWluIC5nZXRWaXAgLnJpZ2h0Q29udGVudCAuYWR2YW50YWdlc1wiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI2MHB4XCJcbiAgfSxcbiAgXCIubWUgLm1haW4gLmdldFZpcCAucmlnaHRDb250ZW50IC5hZHZhbnRhZ2VzIC5hZHZhbnRhZ2VcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNjBweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1lbmRcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5tZSAubWFpbiAuZ2V0VmlwIC5yaWdodENvbnRlbnQgLmFkdmFudGFnZXMgLmFkdmFudGFnZSAuc2xvZ2VuXCI6IHtcbiAgICBcImxpbmVIZWlnaHRcIjogXCI2MHB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI0cHhcIixcbiAgICBcImxldHRlclNwYWNpbmdcIjogXCIycHhcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZjZjRhYlwiXG4gIH0sXG4gIFwiLm1lIC5tYWluIC5nZXRWaXAgLnJpZ2h0Q29udGVudCAuam9pblZpcFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEyMHB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmNmNGFiXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIzMHB4XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImhlaWdodFwiOiBcIjgwJVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwcHhcIlxuICB9LFxuICBcIi5tZSAubWFpbiAuZ2V0VmlwIC5yaWdodENvbnRlbnQgLmpvaW5WaXAgLmpvaW5UZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjRweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMTExMTExXCIsXG4gICAgXCJsZXR0ZXJTcGFjaW5nXCI6IFwiMnB4XCJcbiAgfSxcbiAgXCIudXNlcm5hbWVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI1MHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImxldHRlclNwYWNpbmdcIjogXCIxMHB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNjAwXCJcbiAgfSxcbiAgXCIudF9kXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi50X2QgLmh0cy1kZXNjXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjBweFwiXG4gIH0sXG4gIFwiLnJlZnJlc2hcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMzJweFwiLFxuICAgIFwid2lkdGhcIjogXCIzMnB4XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJyaWdodFwiOiBcIjI1cHhcIixcbiAgICBcInRvcFwiOiBcIjI1cHhcIlxuICB9LFxuICBcIi5yZWZyZXNoaW5nXCI6IHtcbiAgICBcImFuaW1hdGlvbk5hbWVcIjogXCJSb3RhdGVcIixcbiAgICBcImFuaW1hdGlvbkR1cmF0aW9uXCI6IFwiMTAwMG1zXCIsXG4gICAgXCJhbmltYXRpb25JdGVyYXRpb25Db3VudFwiOiAtMSxcbiAgICBcImFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uXCI6IFwiZWFzZS1pbi1vdXRcIlxuICB9LFxuICBcIkBLRVlGUkFNRVNcIjoge1xuICAgIFwiUm90YXRlXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJ0cmFuc2Zvcm1cIjogXCJ7XFxcInJvdGF0ZVxcXCI6XFxcIjBkZWdcXFwifVwiLFxuICAgICAgICBcInRpbWVcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ0cmFuc2Zvcm1cIjogXCJ7XFxcInJvdGF0ZVxcXCI6XFxcIjM2MGRlZ1xcXCJ9XCIsXG4gICAgICAgIFwidGltZVwiOiAxMDBcbiAgICAgIH1cbiAgICBdXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIudXNlci1jYXJkXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IFwiOTAlXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMjBweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTVweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTVweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxNXB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kSW1hZ2VcIjogXCIvY29tbW9uL2xpYnJhcnkvdXNlcl9jYXJkL2ltZy9sb2dpbl9iZy5wbmdcIlxuICB9LFxuICBcIi51c2VyY2FyZC10b3BcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxOTBweFwiXG4gIH0sXG4gIFwiLnBvcnRyYWl0XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNDAlXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWFyb3VuZFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwicmlnaHRcIlxuICB9LFxuICBcIi5wb3J0cmFpdC1ub2V4cGFuZFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYXJvdW5kXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJyaWdodFwiXG4gIH0sXG4gIFwiLnBvcnRyYWl0IGltYWdlXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjcwcHhcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMHB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1MHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMzLjNweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNTBweFwiXG4gIH0sXG4gIFwiLnBvcnRyYWl0LW5vZXhwYW5kIGltYWdlXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjcwcHhcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMHB4XCJcbiAgfSxcbiAgXCIubmFtZSB0ZXh0XCI6IHtcbiAgICBcImZvbnRXZWlnaHRcIjogXCI1MDBcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzFweFwiLFxuICAgIFwiY29sb3JcIjogXCIjNUI0NDFBXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1MHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjBweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMHB4XCJcbiAgfSxcbiAgXCIudXNlcmNhcmQtYm90dG9tXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTYwcHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIudXNlcmNhcmQtYm90dG9tLWl0ZW1cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwid2lkdGhcIjogXCIyNSVcIlxuICB9LFxuICBcIi5pdGVtLXRvcFwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxNHB4XCJcbiAgfSxcbiAgXCIuaXRlbS10b3AgdGV4dFwiOiB7XG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMXB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImNvbG9yXCI6IFwiIzVCNDQxQVwiXG4gIH0sXG4gIFwiLml0ZW0tYm90dG9tIHRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNXB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNDAwXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImNvbG9yXCI6IFwiIzVCNDQxQVwiXG4gIH0sXG4gIFwiLmxpbmVcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNTBweFwiLFxuICAgIFwid2lkdGhcIjogXCIycHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjBweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyMHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuMilcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLnVzZXItY2FyZC1ub2xvZ2luXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IFwiOTAlXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMjBweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTVweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTVweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxNXB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kSW1hZ2VcIjogXCIvY29tbW9uL2xpYnJhcnkvdXNlcl9jYXJkL2ltZy9ub2xvZ2luX2JnLnBuZ1wiXG4gIH0sXG4gIFwiLnBvcnRyYWl0LW5vZXhwYW5kXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1hcm91bmRcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcInRleHRBbGlnblwiOiBcInJpZ2h0XCJcbiAgfSxcbiAgXCIucG9ydHJhaXQtbm9leHBhbmQgaW1hZ2VcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwcHhcIlxuICB9LFxuICBcIi5uYW1lLW5vbG9naW5cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjQxcHhcIlxuICB9LFxuICBcIi5tYWluLXRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzFweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjQwMFwiLFxuICAgIFwiY29sb3JcIjogXCIjMUExQTFBXCJcbiAgfSxcbiAgXCIuc3ViLXRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjVweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjQwMFwiLFxuICAgIFwiY29sb3JcIjogXCIjN0I3QjdCXCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5jb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25Db250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNvbnRhaW5lclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRhYnNcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjaGFuZ2VcIjogXCJvblRhYklkeENoYW5nZVwiXG4gICAgICB9LFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0YWItY29udGVudFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiaG9tZXBhZ2VcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWydoZXJvJywgdGhpcy5lbWVyZ2VuY3lfdHlwZT09PTE/Jyc6J2VtZXJnZW5jeSddfSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1wYXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJHRjKCdtZXNzYWdlLmluZGV4LmdyZWF0aW5ncycsdGhpcy5lbWVyZ2VuY3lfdHlwZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdyZWF0aW5nc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kdGMoJ21lc3NhZ2UuaW5kZXguZGVzYycsdGhpcy5lbWVyZ2VuY3lfdHlwZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGljLXBhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmVtZXJnZW5jeV90eXBlPT09MT8nLi4vQ29tbW9uL3NhZmV0eS5zdmcnOicuLi9Db21tb24vZXJyb3Iuc3ZnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwibWFpblwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9Db21tb24vcmVmcmVzaC5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbJ3JlZnJlc2gnLCB0aGlzLnJlZnJlc2hpbmc/J3JlZnJlc2hpbmcnOicnXX0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcInJlZnJlc2hJbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJodHNpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJhY3RpdmF0ZVNlcnZpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kdCgnbWVzc2FnZS5pbmRleC5odHNsaXN0LmZpcnN0Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0cy10aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zdGF0dXM/J+WQr+eUqCc6J+acquWQr+eUqCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0cy1zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHRzaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKGV2dCl7dGhpcy5yb3V0ZVRvKCdFbWVyZ2VuY3lFdmVudHMnLGV2dCl9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiR0KCdtZXNzYWdlLmluZGV4Lmh0c2xpc3Quc2Vjb25kJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0cy10aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5hY2NpZGVudHMubGVuZ3RoPT09MD8n5pegJzp0aGlzLiR0KCdtZXNzYWdlLmluZGV4Lmh0c2xpc3QuYWNjaWRlbnRzJyxbdGhpcy5hY2NpZGVudHMubGVuZ3RoXSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0cy1zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHRzaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiR0KCdtZXNzYWdlLmluZGV4Lmh0c2xpc3QudGhpcmQnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHRzLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmlubmVyX3Bvc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHRzLXN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJodHNpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJHRjKCdtZXNzYWdlLmluZGV4Lmh0c2xpc3QuZm9ydGgnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHRzLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmh0X2xldmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHMtc3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImh0c2l0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kdGMoJ21lc3NhZ2UuaW5kZXguaHRzbGlzdC5maWZ0aCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHMtdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiL0NvbW1vbi9yaWdodC5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHMtYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oZXZ0KXt0aGlzLnJvdXRlVG8oJ0luZG9vcicsZXZ0KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImh0c2l0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kdGMoJ21lc3NhZ2UuaW5kZXguaHRzbGlzdC5zaXh0aCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHMtdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiL0NvbW1vbi9yaWdodC5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHMtYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oZXZ0KXt0aGlzLnJvdXRlVG8oJ1VyZ2VuY3knLGV2dCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcIm1lXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsnaGVybycsIHRoaXMuZW1lcmdlbmN5X3R5cGU9PT0xPycnOidlbWVyZ2VuY3knXX0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiL0NvbW1vbi91c2VyLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImF2YXRhclwiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy51c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwibWFpblwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJnZXRWaXBcIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRDb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlZJUFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlZJUFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pc1ZJUD8n5bey5byA6YCaJzon5pyq5byA6YCaJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0Q29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImxpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJhZHZhbnRhZ2VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWR2YW50YWdlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcImFkdmFudGFnZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnZpcEFkdmFudGFnZXN9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJsaXN0LWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhZHZhbnRhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZHZhbnRhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2xvZ2VuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImpvaW5WaXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pc1ZJUD8n5Y+W5raIJzon5byA6YCaJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiam9pblRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcImpvaW5WSVBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImh0c2l0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRfZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiR0KCdtZXNzYWdlLmluZGV4LnNldHRpbmdzLmZpcnN0LnRpdGxlJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0cy10aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kdCgnbWVzc2FnZS5pbmRleC5zZXR0aW5ncy5maXJzdC5kZXNjJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0cy1kZXNjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN3aXRjaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoYW5nZVwiOiBcIm9uQ2FyZFNlcnZpY2VDaGFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHRzaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidF9kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJHQoJ21lc3NhZ2UuaW5kZXguc2V0dGluZ3Muc2Vjb25kLnRpdGxlJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0cy10aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kdCgnbWVzc2FnZS5pbmRleC5zZXR0aW5ncy5zZWNvbmQuZGVzYycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHMtZGVzY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzd2l0Y2hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGFuZ2VcIjogXCJvblVyZ2VudFB1c2hDaGFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHRzaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidF9kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJHQoJ21lc3NhZ2UuaW5kZXguc2V0dGluZ3MuZm9ydGgudGl0bGUnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHRzLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiR0KCdtZXNzYWdlLmluZGV4LnNldHRpbmdzLmZvcnRoLmRlc2MnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHRzLWRlc2NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3dpdGNoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hhbmdlXCI6IFwib25Sb3VuZHRyaXBDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImh0c2l0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRfZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiR0KCdtZXNzYWdlLmluZGV4LnNldHRpbmdzLmZpZnRoLnRpdGxlJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0cy10aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kdCgnbWVzc2FnZS5pbmRleC5zZXR0aW5ncy5maWZ0aC5kZXNjJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0cy1kZXNjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN3aXRjaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoYW5nZVwiOiBcIm9uRGV2TW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJodHNpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJHQoJ21lc3NhZ2UuaW5kZXguc2V0dGluZ3MudGhpcmQudGl0bGUnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHRzLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9Db21tb24vcmlnaHQuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHRzLWJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwic2hvd0Fib3V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRhYi1iYXJcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJ0YWItY29udGFpbmVyXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJ0YWItY29udGVudFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicmVwZWF0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50YWJsaXN0fSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5yZW5kZXI/dGhpcy4kaXRlbS5jdXJsOnRoaXMuJGl0ZW0ubnVybH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwidGFiLWltZ1wiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwidGFiLXRleHRcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJ1c2VyLWNhcmRcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ1c2VyY2FyZC10b3BcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gW3RoaXMuZXhwYW5kLmxlbmd0aD4wPydwb3J0cmFpdCc6J3BvcnRyYWl0LW5vZXhwYW5kJ119LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiL2NvbW1vbi9saWJyYXJ5L3VzZXJfY2FyZC9pbWcvY191c2VyX2NhcmRfbG9naW5fYXZhdGFyLnBuZ1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy51c2VySW5mby51c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImJsb2NrXCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5leHBhbmQubGVuZ3RoPjB9LFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJ1c2VyY2FyZC1ib3R0b21cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImJsb2NrXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmV4cGFuZH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaWR4PjB9LFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInVzZXJjYXJkLWJvdHRvbS1pdGVtXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0tdG9wXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0ubnVtYmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS1ib3R0b21cIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcInVzZXItY2FyZC1ub2xvZ2luXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicG9ydHJhaXQtbm9leHBhbmRcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJzcmNcIjogXCIvY29tbW9uL2xpYnJhcnkvdXNlcl9jYXJkL2ltZy9jX3VzZXJfY2FyZF9ub19sb2dpbl9hdmF0YXIucG5nXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJuYW1lLW5vbG9naW5cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5jb250ZW50LnRpdGxlfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJtYWluLXRpdGxlXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmNvbnRlbnQuc3ViVGl0bGV9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInN1Yi10aXRsZVwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY29udGFpbmVyXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwibG9naW5cIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwiY29udGVudFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuY29udGVudF9sb2dpbn1cbiAgICAgIH0sXG4gICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pc0xvZ2lufVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwibG9nb3V0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcImNvbnRlbnRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmNvbnRlbnRfbG9nb3V0fVxuICAgICAgfSxcbiAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiAhdGhpcy5pc0xvZ2lufVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCAkYXBwX3JlcXVpcmUkKXtcInVzZSBzdHJpY3RcIjtcblxudmFyIF9zeXN0ZW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0ucm91dGVyXCIpKTtcblxudmFyIF9zeXN0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLmNhcmRcIikpO1xuXG52YXIgX3N5c3RlbTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0ucHJvbXB0XCIpKTtcblxudmFyIF9zeXN0ZW00ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLmJsdWV0b290aFwiKSk7XG5cbnZhciBfc3lzdGVtNSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5mZXRjaFwiKSk7XG5cbnZhciBfc3lzdGVtNiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5yZXNpZGVudFwiKSk7XG5cbnZhciBfYnRfbmV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL0NvbW1vbi9idF9uZXh0LmpzXCIpKTtcblxudmFyIF9zeXN0ZW03ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLm5vdGlmaWNhdGlvblwiKSk7XG5cbnZhciBfc3lzdGVtOCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5nZW9sb2NhdGlvblwiKSk7XG5cbnZhciBfc3lzdGVtOSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5zdG9yYWdlXCIpKTtcblxudmFyIF9jb25zdCA9IHJlcXVpcmUoXCIuLi9jb25zdC5qc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuY29uc29sZS5sb2coX2NvbnN0LmJhc2VVcmwpO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRhdGE6IHtcbiAgICBjb21wb25lbnREYXRhOiB7fSxcbiAgICBlbWVyZ2VuY3lfdHlwZTogMSxcbiAgICBzdGF0dXM6IGZhbHNlLFxuICAgIGlubmVyX3BvczogXCLmnKrnn6VcIixcbiAgICBodF9sZXZlbDogXCLmnKrnn6VcIixcbiAgICBhY2NpZGVudHM6IFtdLFxuICAgIHJlZnJlc2hpbmc6IGZhbHNlLFxuICAgIHBvc19kZXRhaWw6IG51bGwsXG4gICAgZmlyc3RfaW46IGZhbHNlLFxuICAgIHRhYmxpc3Q6IFt7XG4gICAgICB0aXRsZTogJ+mmlumhtScsXG4gICAgICByZW5kZXI6IGZhbHNlLFxuICAgICAgbnVybDogJy4uL0NvbW1vbi9ob21lX25ub3IucG5nJyxcbiAgICAgIGN1cmw6ICcuLi9Db21tb24vaG9tZV9iY2hvLnBuZydcbiAgICB9LCB7XG4gICAgICB0aXRsZTogJ+aIkeeahCcsXG4gICAgICByZW5kZXI6IGZhbHNlLFxuICAgICAgbnVybDogJy4uL0NvbW1vbi9taW5lX25ub3IucG5nJyxcbiAgICAgIGN1cmw6ICcuLi9Db21tb24vbWluZV9iY2hvLnBuZydcbiAgICB9XSxcbiAgICB1c2VybmFtZTogJ+a4uOWuoicsXG4gICAgdmlwQWR2YW50YWdlczogWyfotoXlgLzmnYPnm4rvvIzpgJ/mnaXkvZPpqowhJywgJ+eOsOWcqOW8gOmAmjnmipjotbchJywgJ+i2heWkmuW6l+mTuuS8mOaDoOetieS9oOaLvyEnXSxcbiAgICB2aXBBZHZhbnRhZ2VzSWR4OiAwLFxuICAgIGlzVklQOiBmYWxzZSxcbiAgICBjYXJkU2VydmljZTogZmFsc2UsXG4gICAgdXJnZW50UHVzaDogZmFsc2UsXG4gICAgcm91bmR0cmlwOiBmYWxzZSxcbiAgICBpbnRlcnZhbGlkOiBudWxsXG4gIH0sXG5cbiAgb25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKGdsb2JhbCk7XG4gICAgdGhpcy4kcGFnZS5zZXRUaXRsZUJhcih7XG4gICAgICB0ZXh0OiB0aGlzLiR0KCdtZXNzYWdlLmluZGV4LnRpdGxlJylcbiAgICB9KTtcblxuICAgIGlmICh0eXBlb2YgdGhpcy5hY2NpZGVudHMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRoaXMuc3RhdHVzID0gdHJ1ZTtcbiAgICAgIHRoaXMuYWNjaWRlbnRzID0gSlNPTi5wYXJzZSh0aGlzLmFjY2lkZW50cyk7XG4gICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmFjY2lkZW50cykpO1xuXG4gICAgICBpZiAodGhpcy5hY2NpZGVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmVtZXJnZW5jeV90eXBlID0gMDtcbiAgICAgICAgdGhpcy4kcGFnZS5zZXRUaXRsZUJhcih7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0VDNkE2QSdcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVtZXJnZW5jeV90eXBlID0gMTtcbiAgICAgICAgdGhpcy4kcGFnZS5zZXRUaXRsZUJhcih7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwOERGOCdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLmlubmVyX3BvcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgaWYgKHRoaXMuaW5uZXJfcG9zICE9PSBcIuacquefpVwiKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wb3NfZGV0YWlsID0gSlNPTi5wYXJzZSh0aGlzLmlubmVyX3Bvcyk7XG4gICAgICAgIHRoaXMuaW5uZXJfcG9zID0gdGhpcy5wb3NfZGV0YWlsLnBvc2l0aW9uO1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnBvc19kZXRhaWwpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcImNoZWNrc3RhdGVcIik7XG4gIH0sXG5cbiAgb25SZWFkeShvcHRpb25zKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuXG4gICAgX3N5c3RlbTkuZGVmYXVsdC5nZXQoe1xuICAgICAga2V5OiAnaXNWSVAnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdGhhdC5pc1ZJUCA9IGRhdGE7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gKGRhdGEsIGNvZGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYGhhbmRsaW5nIGZhaWwsIGNvZGUgPSAke2NvZGV9YCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhcIlBhZ2UgUmVhZHlcIik7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy52aXBBZHZhbnRhZ2VzSWR4Kys7XG4gICAgICB0aGlzLnZpcEFkdmFudGFnZXNJZHggJT0gMztcbiAgICAgIHRoaXMuJGVsZW1lbnQoJ2FkdmFudGFnZXMnKS5zY3JvbGxUbyh7XG4gICAgICAgIGluZGV4OiB0aGlzLnZpcEFkdmFudGFnZXNJZHhcbiAgICAgIH0pO1xuICAgIH0sIDMwMDApO1xuICB9LFxuXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwic2hvd1wiKTtcbiAgICB0aGlzLiRwYWdlLnNldFRpdGxlQmFyKHtcbiAgICAgIHRleHQ6IHRoaXMuJHQoJ21lc3NhZ2UuaW5kZXgudGl0bGUnKSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5lbWVyZ2VuY3lfdHlwZSA9PT0gMSA/ICcjMDA4ZGY4JyA6ICcjRUM2QTZBJ1xuICAgIH0pO1xuICB9LFxuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcbiAgICBfc3lzdGVtNy5kZWZhdWx0LnNob3coe1xuICAgICAgY29udGVudFRpdGxlOiAn5p+l55yL5b2T5YmN5a6J5YWo5LqL5Lu2JyxcbiAgICAgIGNsaWNrQWN0aW9uOiB7XG4gICAgICAgIHVyaTogJy9FbWVyZ2VuY3lFdmVudHMnXG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgcm91dGVUbyhwYWdlbmFtZSkge1xuICAgIGlmICh0aGlzLmlubmVyX3BvcyA9PT0gJ+acquefpScgJiYgcGFnZW5hbWUgIT09ICdJbmRvb3InKSB7XG4gICAgICBfc3lzdGVtMy5kZWZhdWx0LnNob3dUb2FzdCh7XG4gICAgICAgIG1lc3NhZ2U6ICfor7foh7PlsJHojrflj5bkuIDmrKHmgqjnmoTkvY3nva7kv6Hmga8nLFxuICAgICAgICBkdXJhdGlvbjogMTAwMFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBfc3lzdGVtLmRlZmF1bHQucHVzaCh7XG4gICAgICB1cmk6IGAvJHtwYWdlbmFtZX1gLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGlubmVyX3BvczogdGhpcy5wb3NfZGV0YWlsLFxuICAgICAgICBhY2NpZGVudHM6IHRoaXMuYWNjaWRlbnRzLFxuICAgICAgICBsaWdodE1vZGU6IGdsb2JhbC5saWdodE1vZGVcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsYXVuY2hBcHAgc3VjY2VzcyAuJyk7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsYXVuY2hBcHAgZmFpbCA6JyArIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsYXVuY2hBcHAgY29tcGxldGUuJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgYWN0aXZhdGVTZXJ2aWNlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zdGF0dXMgPSAhdGhpcy5zdGF0dXM7XG5cbiAgICBpZiAodGhpcy5zdGF0dXMpIHtcbiAgICAgIHRoaXMucmVmcmVzaEluZm8oKTtcbiAgICB9XG4gIH0sXG4gIG9uTGlnaHRNYXBFbmFibGVkOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgZ2xvYmFsLmxpZ2h0TW9kZSA9IHZhbC5jaGVja2VkO1xuICAgIGNvbnNvbGUubG9nKFwi5ZCv55So5rWF6Imy5Li76aKYXCIsIGdsb2JhbC5saWdodE1vZGUpO1xuICB9LFxuICBvbkNhcmRTZXJ2aWNlQ2hhbmdlOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgdGhpcy5jYXJkU2VydmljZSA9IHZhbC5jaGVja2VkO1xuICAgIGNvbnNvbGUubG9nKFwi5Y2h54mH5pyN5YqhXCIsIHRoaXMuY2FyZFNlcnZpY2UpO1xuXG4gICAgX3N5c3RlbTMuZGVmYXVsdC5zaG93VG9hc3Qoe1xuICAgICAgbWVzc2FnZTogXCLlvZPliY3nlLHkuo5PUFBP5b+r5bqU55So5pS/562WXFxu5bCa5pyq5pSv5oyBLOivt+iBlOezu+W8gOWPkeiAhVwiLFxuICAgICAgZHVyYXRpb246IDEwMDBcbiAgICB9KTtcbiAgfSxcbiAgb25VcmdlbnRQdXNoQ2hhbmdlOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgdGhpcy51cmdlbnRQdXNoID0gdmFsLmNoZWNrZWQ7XG4gICAgY29uc29sZS5sb2coXCLntKfmgKXmjqjpgIFcIiwgdGhpcy51cmdlbnRQdXNoKTtcblxuICAgIF9zeXN0ZW0zLmRlZmF1bHQuc2hvd1RvYXN0KHtcbiAgICAgIG1lc3NhZ2U6IFwi5b2T5YmN55Sx5LqOT1BQT+W/q+W6lOeUqOaUv+etllxcbuWwmuacquaUr+aMgSzor7fogZTns7vlvIDlj5HogIVcIixcbiAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgfSk7XG4gIH0sXG4gIG9uUm91bmR0cmlwQ2hhbmdlZDogZnVuY3Rpb24gKHZhbCkge1xuICAgIGNvbnNvbGUubG9nKFwiUm91bmQgdHJpcCBjaGVja2VkOlwiLCB2YWwuY2hlY2tlZCk7XG4gICAgdGhpcy5yb3VuZHRyaXAgPSB2YWwuY2hlY2tlZDtcblxuICAgIGlmICh0aGlzLnJvdW5kdHJpcCkge1xuICAgICAgY29uc29sZS5sb2coXCJJbiBJbnRlcnZhbFwiKTtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIHRoYXQucmVmcmVzaEluZm8oKTtcbiAgICAgIHRoaXMuaW50ZXJ2YWxpZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJJbiBJbnRlcnZhbFwiKTtcbiAgICAgICAgdGhhdC5yZWZyZXNoSW5mbygpO1xuICAgICAgfSwgMTUwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxpZCk7XG4gICAgfVxuICB9LFxuXG4gIHNob3dBYm91dCgpIHtcbiAgICBfc3lzdGVtMy5kZWZhdWx0LnNob3dEaWFsb2coe1xuICAgICAgdGl0bGU6ICflhbPkuo7lvIDlj5HogIUnLFxuICAgICAgbWVzc2FnZTogJ+S4gOS6m+S7i+e7jeeahOivnScsXG4gICAgICBidXR0b25zOiBbe1xuICAgICAgICB0ZXh0OiAn56Gu6K6kJyxcbiAgICAgICAgY29sb3I6ICcjMDA4ZGY4J1xuICAgICAgfV1cbiAgICB9KTtcbiAgfSxcblxuICBvblRhYklkeENoYW5nZShldnQpIHtcbiAgICB0aGlzLiRwYWdlLnNldFRpdGxlQmFyKHtcbiAgICAgIHRleHQ6IHRoaXMudGFibGlzdFtldnQuaW5kZXhdLnRpdGxlLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmVtZXJnZW5jeV90eXBlID09PSAxID8gXCIjMDA4REY4XCIgOiAnI0VDNkE2QSdcbiAgICB9KTtcbiAgICB0aGlzLm1vZGlmeUxpc3RJdGVtRGF0YShldnQuaW5kZXgpO1xuICB9LFxuXG4gIG1vZGlmeUxpc3RJdGVtRGF0YShpbmRleCkge1xuICAgIHRoaXMudGFibGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgZWxlbWVudC5yZW5kZXIgPSBmYWxzZTtcbiAgICB9KTtcbiAgICB0aGlzLnRhYmxpc3RbaW5kZXhdLnJlbmRlciA9IHRydWU7XG4gIH0sXG5cbiAgcmVmcmVzaEluZm86IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdHVzKSB7XG4gICAgICBfc3lzdGVtMy5kZWZhdWx0LnNob3dUb2FzdCh7XG4gICAgICAgIG1lc3NhZ2U6ICfor7flhYjlkK/liqjmnI3liqEnLFxuICAgICAgICBkdXJhdGlvbjogMTAwMFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMucmVmcmVzaGluZykge1xuICAgICAgX3N5c3RlbTMuZGVmYXVsdC5zaG93VG9hc3Qoe1xuICAgICAgICBtZXNzYWdlOiAn5byA5aeL5Yi35pawJyxcbiAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlZnJlc2hpbmcgPSB0cnVlO1xuXG4gICAgICBfc3lzdGVtOC5kZWZhdWx0LmdldExvY2F0aW9uVHlwZSh7XG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYGhhbmRsaW5nIHN1Y2Nlc3M6IGxvY2F0aW9uVHlwZSA9ICR7ZGF0YS50eXBlc31gKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24gKGRhdGEsIGNvZGUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgaGFuZGxpbmcgZmFpbCwgY29kZSA9ICR7Y29kZX1gKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGxldCBnZW9Qb3MgPSBhd2FpdCB0aGlzLmdldExvY2F0aW9uUHJvbWlzZSgpLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2V0IExvY2F0aW9uIGVyciA9IFwiLCBlcnIpO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcIkdldCBMb2NhdGlvbiBSZXMgPSBcIiwgZ2VvUG9zKTtcblxuICAgICAgaWYgKHR5cGVvZiBnZW9Qb3MgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgZ2VvUG9zID0ge1xuICAgICAgICAgIGxhdGl0dWRlOiAnMzAuNTU1MTcnLFxuICAgICAgICAgIGxvbmdpdHVkZTogJzEwNC4wMDI3MTUnXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBnZW9Qb3MgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgZ2VvUG9zID0gSlNPTi5wYXJzZShnZW9Qb3MpO1xuXG4gICAgICAgIF9zeXN0ZW0zLmRlZmF1bHQuc2hvd1RvYXN0KHtcbiAgICAgICAgICBtZXNzYWdlOiBg5oKo5ou/5Yiw5LqGTG9jYXRpb27kv6Hmga86JHtnZW9Qb3MubGF0aXR1ZGV9LCAke2dlb1Bvcy5sb25naXR1ZGV9YCxcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2coXCJzdGFydCB0byBHZXQgQmFzZVBvaW50c1wiKTtcbiAgICAgIGNvbnNvbGUubG9nKF9jb25zdC5iYXNlVXJsKTtcbiAgICAgIGxldCBiYXNlUG9pbnRzID0gYXdhaXQgX3N5c3RlbTUuZGVmYXVsdC5mZXRjaCh7XG4gICAgICAgIHVybDogYCR7X2NvbnN0LmJhc2VVcmx9L2dldEJhc2VQb2ludHNgXG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkhhbmRsaW5nIGZhaWxlZCBldmVudHMsIGVyciA9IFwiLCBlcnIpO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhiYXNlUG9pbnRzKTtcblxuICAgICAgaWYgKGJhc2VQb2ludHMuZGF0YS5jb2RlID09PSAyMDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLmiJDlip/ojrflj5ZiYXNlcG9pbnRzXCIpO1xuICAgICAgICBiYXNlUG9pbnRzID0gSlNPTi5wYXJzZShiYXNlUG9pbnRzLmRhdGEuZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHdoZW4gZ2V0IGJhc2Vwb2ludHNcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgbGV0IGlzSW4gPSB0aGlzLmlzSW5idWlsZGluZyhiYXNlUG9pbnRzLCBnZW9Qb3MpO1xuICAgICAgY29uc29sZS5sb2coaXNJbik7XG5cbiAgICAgIGlmICghaXNJbikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuaCqOS4jeWcqOalvOWGhVwiKTtcblxuICAgICAgICBpZiAodGhpcy5maXJzdF9pbikge1xuICAgICAgICAgIF9zeXN0ZW0zLmRlZmF1bHQuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICfmgqjlt7LnprvlvIBPdmVyd2F0Y2jnm5HmjqfnmoTlu7rnrZEnLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHRoaXMuZmlyc3RfaW4gPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfc3lzdGVtMy5kZWZhdWx0LnNob3dUb2FzdCh7XG4gICAgICAgICAgICBtZXNzYWdlOiAn5oKo5LiN5ZyoT3ZlcndhdGNo55uR5o6n55qE5bu6562R5YaFJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlZnJlc2hpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbm5lcl9wb3MgPSBcIuacquefpVwiO1xuICAgICAgICB0aGlzLmVtZXJnZW5jeV90eXBlID0gMTtcbiAgICAgICAgdGhpcy5odF9sZXZlbCA9IFwi5pyq55+lXCI7XG4gICAgICAgIHRoaXMuYWNjaWRlbnRzID0gW107XG4gICAgICAgIHRoaXMucG9zX2RldGFpbCA9IG51bGw7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghdGhpcy5maXJzdF9pbikge1xuICAgICAgICAgIF9zeXN0ZW0zLmRlZmF1bHQuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICfmgqjlt7Lov5vlhaVPdmVyd2F0Y2jnm5HmjqfnmoTlu7rnrZEnLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIF9zeXN0ZW03LmRlZmF1bHQuc2hvdyh7XG4gICAgICAgICAgICBjb250ZW50VGl0bGU6IGDmgqjlt7Lnu4/ov5vlhaVPdmVyd2F0Y2jnm5HmjqfnmoTlu7rnrZFgLFxuICAgICAgICAgICAgY29udGVudFRleHQ6ICfngrnmraTmn6XnnIvor6bnu4YnLFxuICAgICAgICAgICAgY2xpY2tBY3Rpb246IHtcbiAgICAgICAgICAgICAgdXJpOiAnLydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHRoaXMuZmlyc3RfaW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBpZDtcblxuICAgICAgaWYgKGdsb2JhbC5wcm9kdWN0aW9udGlwID09PSBcImRldlwiKSB7XG4gICAgICAgIGlkID0gNzY2Mzg7XG5cbiAgICAgICAgX3N5c3RlbTMuZGVmYXVsdC5zaG93VG9hc3Qoe1xuICAgICAgICAgIG1lc3NhZ2U6IGBjYW1lcmFpZDoke2lkfWBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy51bml2ZXJzYWxSZWZyZXNoUHJvY2VzcyhpZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZCA9IDI7XG4gICAgICAgICgwLCBfYnRfbmV4dC5kZWZhdWx0KShfc3lzdGVtNC5kZWZhdWx0LCB0aGlzLnVuaXZlcnNhbFJlZnJlc2hQcm9jZXNzLmJpbmQodGhpcykpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkFGVEVSIEJUKCkgXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBfc3lzdGVtMy5kZWZhdWx0LnNob3dUb2FzdCh7XG4gICAgICAgIG1lc3NhZ2U6ICfmraPlnKjliLfmlrAnLFxuICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgdW5pdmVyc2FsUmVmcmVzaFByb2Nlc3ModmFsKSB7XG4gICAgY29uc29sZS5sb2coXCJ2YWwgdHlwZTpcIiwgdHlwZW9mIHZhbCk7XG4gICAgbGV0IGlkO1xuXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICBpZCA9IHZhbDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZCA9IHZhbFswXS5jYW1lcmFfaWQ7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCLmi7/lj5boh6rouqvkvY3nva5cIik7XG4gICAgbGV0IHJlcyA9IGF3YWl0IF9zeXN0ZW01LmRlZmF1bHQuZmV0Y2goe1xuICAgICAgdXJsOiBgJHtfY29uc3QuYmFzZVVybH0vZ2V0Q2FtZXJhP2lkPSR7aWR9YFxuICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImhhbmRsaW5nIGZhaWwsIGVyciA9IFwiICsgZXJyKTtcbiAgICB9KTtcbiAgICBsZXQgcmVzdWx0ID0gcmVzLmRhdGE7XG5cbiAgICBpZiAocmVzdWx0LmNvZGUgPT09IDIwMCkge1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xuICAgICAgdGhpcy5wb3NfZGV0YWlsID0gSlNPTi5wYXJzZShyZXN1bHQuZGF0YSk7XG4gICAgICB0aGlzLmlubmVyX3BvcyA9IHRoaXMucG9zX2RldGFpbC5wb3NpdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJFUlJPUiBQT1NcIik7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCLmi7/lj5blvZPliY3kurrmtYHph49cIik7XG4gICAgcmVzID0gYXdhaXQgX3N5c3RlbTUuZGVmYXVsdC5mZXRjaCh7XG4gICAgICB1cmw6IGAke19jb25zdC5iYXNlVXJsfS9nZXRDdXJyZW50TnVtQnlJZD9pZD0ke2lkfWBcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJoYW5kbGluZyBmYWlsLCBlcnIgPSBcIiArIGVycik7XG4gICAgfSk7XG4gICAgcmVzdWx0ID0gcmVzLmRhdGE7XG5cbiAgICBpZiAocmVzdWx0LmNvZGUgPT09IDIwMCkge1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xuICAgICAgdGhpcy5odF9sZXZlbCA9IHJlc3VsdC5kYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVSUk9SIEhUXCIpO1xuICAgIH1cblxuICAgIHJlcyA9IGF3YWl0IF9zeXN0ZW01LmRlZmF1bHQuZmV0Y2goe1xuICAgICAgdXJsOiBgJHtfY29uc3QuYmFzZVVybH0vZ2V0Q3VycmVudEFjY2lkZW50c2BcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJoYW5kbGluZyBmYWlsLCBlcnIgPSBcIiArIGVycik7XG4gICAgfSk7XG4gICAgcmVzdWx0ID0gcmVzLmRhdGE7XG5cbiAgICBpZiAocmVzdWx0LmNvZGUgPT09IDIwMCkge1xuICAgICAgdGhpcy5hY2NpZGVudHMgPSBKU09OLnBhcnNlKHJlc3VsdC5kYXRhKTtcblxuICAgICAgaWYgKGdsb2JhbC5wcm9kdWN0aW9udGlwID09PSBcImRldlwiKSB7fVxuXG4gICAgICBpZiAodGhpcy5hY2NpZGVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmVtZXJnZW5jeV90eXBlID0gMDtcbiAgICAgICAgdGhpcy4kcGFnZS5zZXRUaXRsZUJhcih7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0VDNkE2QSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3N5c3RlbTcuZGVmYXVsdC5zaG93KHtcbiAgICAgICAgICBjb250ZW50VGl0bGU6IGDmgqjmiYDlnKjnmoTlu7rnrZHmnIkke3RoaXMuYWNjaWRlbnRzLmxlbmd0aH3pobnntKfmgKXkuovku7YhYCxcbiAgICAgICAgICBjb250ZW50VGV4dDogJ+eCueatpOafpeeciycsXG4gICAgICAgICAgY2xpY2tBY3Rpb246IHtcbiAgICAgICAgICAgIHVyaTogJy9FbWVyZ2VuY3lFdmVudHMnXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZW1lcmdlbmN5X3R5cGUgPSAxO1xuICAgICAgICB0aGlzLiRwYWdlLnNldFRpdGxlQmFyKHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDA4REY4J1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJFUlJPUiBBQ0NcIik7XG4gICAgfVxuXG4gICAgdGhpcy5yZWZyZXNoaW5nID0gZmFsc2U7XG5cbiAgICBfc3lzdGVtMy5kZWZhdWx0LnNob3dUb2FzdCh7XG4gICAgICBtZXNzYWdlOiAn5Yi35paw5a6M5oiQJyxcbiAgICAgIGR1cmF0aW9uOiA1MDBcbiAgICB9KTtcbiAgfSxcblxuICBnZXRMb2NhdGlvblByb21pc2UoKSB7XG4gICAgY29uc29sZS5sb2coXCJTdGFydCBUbyBHZXQgTG9jYXRpb25cIik7XG4gICAgY29uc29sZS5sb2coX2NvbnN0LmJhc2VVcmwpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBfc3lzdGVtOC5kZWZhdWx0LmdldExvY2F0aW9uKHtcbiAgICAgICAgdGltZW91dDogMzAwMCxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgaGFuZGxpbmcgc3VjY2VzczogbG9uZ2l0dWRlID0gJHtkYXRhLmxvbmdpdHVkZX0sIGxhdGl0dWRlID0gJHtkYXRhLmxhdGl0dWRlfWApO1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uIChkYXRhLCBjb2RlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYGhhbmRsaW5nIGZhaWwsIGNvZGUgPSAke2NvZGV9IGRhdGEgPSAke2RhdGF9YCk7XG4gICAgICAgICAgcmVqZWN0KGNvZGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcblxuICBpc0luYnVpbGRpbmcoYmFzZXBvaW50cywgZ2VvUG9zKSB7XG4gICAgY29uc29sZS5sb2coXCJJcyBJbiBCdWlsZGluZ1wiKTtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShiYXNlcG9pbnRzKSk7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZ2VvUG9zKSk7XG4gICAgbGV0IGxlZnRfdmVydGljYWwgPSBmYWxzZTtcbiAgICBsZXQgdG9wX2hvcml6b250YWwgPSBmYWxzZTtcbiAgICBsZXQgbGF0aXR1ZGUgPSBnZW9Qb3MubGF0aXR1ZGU7XG4gICAgbGV0IGxvbmdpdHVkZSA9IGdlb1Bvcy5sb25naXR1ZGU7XG4gICAgbGV0IGNhbnZhc194ID0gMDtcbiAgICBsZXQgY2FudmFzX3kgPSAwO1xuICAgIGxldCBsYiA9IGJhc2Vwb2ludHNbMF07XG4gICAgbGV0IHJiID0gYmFzZXBvaW50c1sxXTtcbiAgICBsZXQgbHQgPSBiYXNlcG9pbnRzWzJdO1xuICAgIGxldCBydCA9IGJhc2Vwb2ludHNbM107XG4gICAgbGV0IGsxLCBiMSwgazIsIGIyO1xuICAgIGsxID0gKGx0WzBdIC0gbGJbMF0pIC8gKGx0WzFdIC0gbGJbMV0pO1xuICAgIGsyID0gKGx0WzBdIC0gcnRbMF0pIC8gKGx0WzFdIC0gcnRbMV0pO1xuICAgIGIxID0gbGJbMV0gLSBrMSAqIGxiWzBdO1xuICAgIGIyID0gbHRbMV0gLSBrMiAqIGx0WzBdO1xuXG4gICAgaWYgKGsxID09PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIuW3pui+uee6v+auteWeguebtFwiKTtcbiAgICAgIGxlZnRfdmVydGljYWwgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGsyKSkge1xuICAgICAgY29uc29sZS5sb2coXCLkuIrovrnnur/mrrXmsLTlubNcIik7XG4gICAgICB0b3BfaG9yaXpvbnRhbCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGxlZnRfdmVydGljYWwpIHtcbiAgICAgIGNhbnZhc194ID0gbGF0aXR1ZGUgLSBsdFswXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FudmFzX3ggPSBNYXRoLmFicyhrMSAqIGxhdGl0dWRlIC0gbG9uZ2l0dWRlICsgYjEpIC8gTWF0aC5zcXJ0KGsxICogazEgKyAtMSAqIC0xKTtcbiAgICB9XG5cbiAgICBpZiAodG9wX2hvcml6b250YWwpIHtcbiAgICAgIGNhbnZhc195ID0gbHRbMV0gLSBsb25naXR1ZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbnZhc195ID0gTWF0aC5hYnMoazIgKiBsYXRpdHVkZSAtIGxvbmdpdHVkZSArIGIyKSAvIE1hdGguc3FydChrMiAqIGsyICsgLTEgKiAtMSk7XG4gICAgfVxuXG4gICAgbGV0IGxhdGl0dWRlX2xlbiA9IE1hdGguc3FydCgocnRbMF0gLSBsdFswXSkgKiAocnRbMF0gLSBsdFswXSkgKyAocnRbMV0gLSBsdFsxXSkgKiAocnRbMV0gLSBsdFsxXSkpO1xuICAgIGxldCBsb25naXR1ZGVfbGVuID0gTWF0aC5zcXJ0KChsdFswXSAtIGxiWzBdKSAqIChsdFswXSAtIGxiWzBdKSArIChsdFsxXSAtIGxiWzFdKSAqIChsdFsxXSAtIGxiWzFdKSk7XG5cbiAgICBpZiAoY2FudmFzX3ggPCBsYXRpdHVkZV9sZW4gJiYgY2FudmFzX3ggPiAwICYmIGNhbnZhc195IDwgbG9uZ2l0dWRlX2xlbiAmJiBjYW52YXNfeSA+IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwi5Zyo5YaFXCIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCLkuI3lnKjlhoVcIik7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG5cbiAgb25EZXZNb2RlOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgbGV0IGNoZWNrZWQgPSB2YWwuY2hlY2tlZDtcbiAgICBjb25zb2xlLmxvZyhcIkRldlwiLCBjaGVja2VkKTtcblxuICAgIGlmIChjaGVja2VkKSB7XG4gICAgICBfc3lzdGVtMy5kZWZhdWx0LnNob3dUb2FzdCh7XG4gICAgICAgIG1lc3NhZ2U6IFwi5YiH5o2i5Li655Sf5Lqn5qih5byP77yM6ZyA6KaB6JOd54mZ6YOo572y5omN5Y+v5Lul5q2j5bi46L+Q6KGM77yBXCIsXG4gICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICB9KTtcblxuICAgICAgZ2xvYmFsLnByb2R1Y3Rpb250aXAgPSAncHJvJztcbiAgICB9IGVsc2Uge1xuICAgICAgX3N5c3RlbTMuZGVmYXVsdC5zaG93VG9hc3Qoe1xuICAgICAgICBtZXNzYWdlOiBcIuWIh+aNouS4uuW8gOWPkeiAheaooeW8j1wiLFxuICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgfSk7XG5cbiAgICAgIGdsb2JhbC5wcm9kdWN0aW9udGlwID0gJ2Rldic7XG4gICAgfVxuICB9LFxuXG4gIGpvaW5WSVAoKSB7XG4gICAgaWYgKCF0aGlzLmlzVklQKSB7XG4gICAgICBfc3lzdGVtOS5kZWZhdWx0LnNldCh7XG4gICAgICAgIGtleTogJ2lzVklQJyxcbiAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2hhbmRsaW5nIHN1Y2Nlc3MnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24gKGRhdGEsIGNvZGUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgaGFuZGxpbmcgZmFpbCwgY29kZSA9ICR7Y29kZX1gKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuaXNWSVAgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBfc3lzdGVtOS5kZWZhdWx0LmRlbGV0ZSh7XG4gICAgICAgIGtleTogJ2lzVklQJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlIHN1Y2Nlc3MnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24gKGRhdGEsIGNvZGUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgaGFuZGxpbmcgZmFpbCwgY29kZSA9ICR7Y29kZX1gKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuaXNWSVAgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxufTtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJvcHM6IFsnY29udGVudCddLFxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXJJbmZvOiB0aGlzLmNvbnRlbnQudXNlckluZm8sXG4gICAgICBleHBhbmQ6IHRoaXMuY29udGVudC5leHBhbmRcbiAgICB9O1xuICB9XG5cbn07XG52YXIgbW9kdWxlT3duID0gZXhwb3J0cy5kZWZhdWx0IHx8IG1vZHVsZS5leHBvcnRzO1xudmFyIGFjY2Vzc29ycyA9IFsncHVibGljJywgJ3Byb3RlY3RlZCcsICdwcml2YXRlJ107XG5pZiAobW9kdWxlT3duLmRhdGEgJiYgYWNjZXNzb3JzLnNvbWUoZnVuY3Rpb24gKGFjYykge1xuICAgIHJldHVybiBtb2R1bGVPd25bYWNjXTtcbiAgfSkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlIGRhdGEgbXVzdCBub3QgY29leGlzdCB3aXRoIHB1YmxpYywgcHJvdGVjdGVkLCBvciBwcml2YXRlLiBQbGVhc2UgcmVwbGFjZSBkYXRhIHdpdGggcHVibGljLicpO1xufSBlbHNlIGlmICghbW9kdWxlT3duLmRhdGEpIHtcbiAgbW9kdWxlT3duLmRhdGEgPSB7fTtcbiAgbW9kdWxlT3duLl9kZXNjcmlwdG9yID0ge307XG4gIGFjY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uKGFjYykge1xuICAgIHZhciBhY2NUeXBlID0gdHlwZW9mIG1vZHVsZU93blthY2NdO1xuICAgIGlmIChhY2NUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgbW9kdWxlT3duLmRhdGEgPSBPYmplY3QuYXNzaWduKG1vZHVsZU93bi5kYXRhLCBtb2R1bGVPd25bYWNjXSk7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG1vZHVsZU93blthY2NdKSB7XG4gICAgICAgIG1vZHVsZU93bi5fZGVzY3JpcHRvcltuYW1lXSA9IHthY2Nlc3MgOiBhY2N9O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWNjVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlICcgKyBhY2MgKyAnIHZhbHVlIG11c3Qgbm90IGJlIGEgZnVuY3Rpb24uIENoYW5nZSB0aGUgdmFsdWUgdG8gYW4gb2JqZWN0LicpO1xuICAgIH1cbiAgfSk7XG59fSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCAkYXBwX3JlcXVpcmUkKXtcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHByb3BzOiBbJ2NvbnRlbnQnXVxufTtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGF0YToge1xuICAgIGlzTG9naW46IGZhbHNlLFxuICAgIGNvbnRlbnRfbG9naW46IHtcbiAgICAgIHVzZXJJbmZvOiB7XG4gICAgICAgIHVzZXJuYW1lOiBcIkppYXFpXCJcbiAgICAgIH0sXG4gICAgICBleHBhbmQ6IFt7XG4gICAgICAgIG51bWJlcjogXCIxMlwiLFxuICAgICAgICBuYW1lOiBcIuS8mOaDoOWIuFwiXG4gICAgICB9LCB7XG4gICAgICAgIG51bWJlcjogXCIzNFwiLFxuICAgICAgICBuYW1lOiBcIuWUr+WTgeW4gVwiXG4gICAgICB9LCB7XG4gICAgICAgIG51bWJlcjogXCI1Ni4wMFwiLFxuICAgICAgICBuYW1lOiBcIumbtumSsVwiXG4gICAgICB9XVxuICAgIH0sXG4gICAgY29udGVudF9sb2dvdXQ6IHtcbiAgICAgIHRpdGxlOiBcIueZu+W9leWNjuS4uui0puaIt1wiLFxuICAgICAgc3ViVGl0bGU6IFwi5aSn5rOi57qi5YyF562J5L2g5ou/eHh4eFwiXG4gICAgfVxuICB9XG59O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSBkYXRhIG11c3Qgbm90IGNvZXhpc3Qgd2l0aCBwdWJsaWMsIHByb3RlY3RlZCwgb3IgcHJpdmF0ZS4gUGxlYXNlIHJlcGxhY2UgZGF0YSB3aXRoIHB1YmxpYy4nKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSAnICsgYWNjICsgJyB2YWx1ZSBtdXN0IG5vdCBiZSBhIGZ1bmN0aW9uLiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGFuIG9iamVjdC4nKTtcbiAgICB9XG4gIH0pO1xufX0iLCJ2YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9jX2xvZ2luLnV4XCIpXG52YXIgJGFwcF9zdHlsZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD0vVXNlcnMvYnl0ZWRhbmNlL1NDVS/lv6vlupTnlKgvaGFwYXBwL2NvbS5wZW9wbGUuZmluYWwxL3NyYy9jb21tb24vbGlicmFyeS91c2VyX2NhcmQvY29tcG9uZW50L2NfbG9naW4udXghLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD0vVXNlcnMvYnl0ZWRhbmNlL1NDVS/lv6vlupTnlKgvaGFwYXBwL2NvbS5wZW9wbGUuZmluYWwxL3NyYy9jb21tb24vbGlicmFyeS91c2VyX2NhcmQvY29tcG9uZW50L2NfbG9naW4udXghLi9jX2xvZ2luLnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9wcmVzZXRzW109L1VzZXJzL2J5dGVkYW5jZS9TQ1Uv5b+r5bqU55SoL2hhcGFwcC9jb20ucGVvcGxlLmZpbmFsMS9ub2RlX21vZHVsZXMvQGJhYmVsL3ByZXNldC1lbnYmcGx1Z2luc1tdPS9Vc2Vycy9ieXRlZGFuY2UvU0NVL+W/q+W6lOeUqC9oYXBhcHAvY29tLnBlb3BsZS5maW5hbDEvbm9kZV9tb2R1bGVzL0BiYWJlbC9wbHVnaW4tdHJhbnNmb3JtLW1vZHVsZXMtY29tbW9uanMmcGx1Z2luc1tdPS9Vc2Vycy9ieXRlZGFuY2UvU0NVL+W/q+W6lOeUqC9oYXBhcHAvY29tLnBlb3BsZS5maW5hbDEvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2pzeC1sb2FkZXIuanMmcGx1Z2luc1tdPS9Vc2Vycy9ieXRlZGFuY2UvU0NVL+W/q+W6lOeUqC9oYXBhcHAvY29tLnBlb3BsZS5maW5hbDEvbm9kZV9tb2R1bGVzL0BiYWJlbC9wbHVnaW4tcHJvcG9zYWwtY2xhc3MtcHJvcGVydGllcyZwbHVnaW5zW109L1VzZXJzL2J5dGVkYW5jZS9TQ1Uv5b+r5bqU55SoL2hhcGFwcC9jb20ucGVvcGxlLmZpbmFsMS9ub2RlX21vZHVsZXMvQGJhYmVsL3BsdWdpbi1wcm9wb3NhbC1vYmplY3QtcmVzdC1zcHJlYWQmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2NfbG9naW4udXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9sb2dpbicsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG4iLCJ2YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9jX2xvZ291dC51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9L1VzZXJzL2J5dGVkYW5jZS9TQ1Uv5b+r5bqU55SoL2hhcGFwcC9jb20ucGVvcGxlLmZpbmFsMS9zcmMvY29tbW9uL2xpYnJhcnkvdXNlcl9jYXJkL2NvbXBvbmVudC9jX2xvZ291dC51eCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPS9Vc2Vycy9ieXRlZGFuY2UvU0NVL+W/q+W6lOeUqC9oYXBhcHAvY29tLnBlb3BsZS5maW5hbDEvc3JjL2NvbW1vbi9saWJyYXJ5L3VzZXJfY2FyZC9jb21wb25lbnQvY19sb2dvdXQudXghLi9jX2xvZ291dC51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPS9Vc2Vycy9ieXRlZGFuY2UvU0NVL+W/q+W6lOeUqC9oYXBhcHAvY29tLnBlb3BsZS5maW5hbDEvbm9kZV9tb2R1bGVzL0BiYWJlbC9wcmVzZXQtZW52JnBsdWdpbnNbXT0vVXNlcnMvYnl0ZWRhbmNlL1NDVS/lv6vlupTnlKgvaGFwYXBwL2NvbS5wZW9wbGUuZmluYWwxL25vZGVfbW9kdWxlcy9AYmFiZWwvcGx1Z2luLXRyYW5zZm9ybS1tb2R1bGVzLWNvbW1vbmpzJnBsdWdpbnNbXT0vVXNlcnMvYnl0ZWRhbmNlL1NDVS/lv6vlupTnlKgvaGFwYXBwL2NvbS5wZW9wbGUuZmluYWwxL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9qc3gtbG9hZGVyLmpzJnBsdWdpbnNbXT0vVXNlcnMvYnl0ZWRhbmNlL1NDVS/lv6vlupTnlKgvaGFwYXBwL2NvbS5wZW9wbGUuZmluYWwxL25vZGVfbW9kdWxlcy9AYmFiZWwvcGx1Z2luLXByb3Bvc2FsLWNsYXNzLXByb3BlcnRpZXMmcGx1Z2luc1tdPS9Vc2Vycy9ieXRlZGFuY2UvU0NVL+W/q+W6lOeUqC9oYXBhcHAvY29tLnBlb3BsZS5maW5hbDEvbm9kZV9tb2R1bGVzL0BiYWJlbC9wbHVnaW4tcHJvcG9zYWwtb2JqZWN0LXJlc3Qtc3ByZWFkJmNvbW1lbnRzPWZhbHNlIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9jX2xvZ291dC51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L2xvZ291dCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG4iLCJyZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvbG9hZGVyLmpzP3R5cGU9Y29tcG9uZW50IS4vY29tcG9uZW50L2NfbG9naW4udXg/bmFtZT1sb2dpblwiKVxucmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2xvYWRlci5qcz90eXBlPWNvbXBvbmVudCEuL2NvbXBvbmVudC9jX2xvZ291dC51eD9uYW1lPWxvZ291dFwiKVxudmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vdXNlcl9jYXJkLnV4XCIpXG52YXIgJGFwcF9zdHlsZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD0vVXNlcnMvYnl0ZWRhbmNlL1NDVS/lv6vlupTnlKgvaGFwYXBwL2NvbS5wZW9wbGUuZmluYWwxL3NyYy9jb21tb24vbGlicmFyeS91c2VyX2NhcmQvdXNlcl9jYXJkLnV4IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9L1VzZXJzL2J5dGVkYW5jZS9TQ1Uv5b+r5bqU55SoL2hhcGFwcC9jb20ucGVvcGxlLmZpbmFsMS9zcmMvY29tbW9uL2xpYnJhcnkvdXNlcl9jYXJkL3VzZXJfY2FyZC51eCEuL3VzZXJfY2FyZC51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPS9Vc2Vycy9ieXRlZGFuY2UvU0NVL+W/q+W6lOeUqC9oYXBhcHAvY29tLnBlb3BsZS5maW5hbDEvbm9kZV9tb2R1bGVzL0BiYWJlbC9wcmVzZXQtZW52JnBsdWdpbnNbXT0vVXNlcnMvYnl0ZWRhbmNlL1NDVS/lv6vlupTnlKgvaGFwYXBwL2NvbS5wZW9wbGUuZmluYWwxL25vZGVfbW9kdWxlcy9AYmFiZWwvcGx1Z2luLXRyYW5zZm9ybS1tb2R1bGVzLWNvbW1vbmpzJnBsdWdpbnNbXT0vVXNlcnMvYnl0ZWRhbmNlL1NDVS/lv6vlupTnlKgvaGFwYXBwL2NvbS5wZW9wbGUuZmluYWwxL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9qc3gtbG9hZGVyLmpzJnBsdWdpbnNbXT0vVXNlcnMvYnl0ZWRhbmNlL1NDVS/lv6vlupTnlKgvaGFwYXBwL2NvbS5wZW9wbGUuZmluYWwxL25vZGVfbW9kdWxlcy9AYmFiZWwvcGx1Z2luLXByb3Bvc2FsLWNsYXNzLXByb3BlcnRpZXMmcGx1Z2luc1tdPS9Vc2Vycy9ieXRlZGFuY2UvU0NVL+W/q+W6lOeUqC9oYXBhcHAvY29tLnBlb3BsZS5maW5hbDEvbm9kZV9tb2R1bGVzL0BiYWJlbC9wbHVnaW4tcHJvcG9zYWwtb2JqZWN0LXJlc3Qtc3ByZWFkJmNvbW1lbnRzPWZhbHNlIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi91c2VyX2NhcmQudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC91c2VyX2NhcmQnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIGJsdWUgdG9vdGggc3VwcG9ydFxuLy8gdmFyIGJsdWV0b290aCA9ICRhcHBfcmVxdWlyZSQoICdAYXBwLW1vZHVsZS9zeXN0ZW0uYmx1ZXRvb3RoJyk7XG4vLyBERUJVRyBkYXRhXG5jb25zdCBERUJVRyA9IHRydWU7XG5jb25zdCBERUJVR19YID0gMTI2ODM0NjUuNTYyNjYyODU3O1xuY29uc3QgREVCVUdfWSA9IDI1NTc4ODkuNjcwNzQzOTY2O1xuY29uc3QgREVCVUdfQ0lEID0gNzY2Mzg7IC8vIGNhbWVyYSBkZXZpY2Ugc2V0XG5cbnZhciBzcGVjaWZpY19kZXZpY2Vfc2V0ID0gW107IC8vIGVudiBcblxuY29uc3QgbiA9IDM7IC8vIHJzc2kgd2l0aCAxbSBkaXN0YW5jZVxuXG5jb25zdCBBID0gNzA7XG5cbmZ1bmN0aW9uIGdldEQocnNzaSkge1xuICByZXR1cm4gTWF0aC5wb3coMTAsIChNYXRoLmFicyhyc3NpKSAtIEEpIC8gKDEwICogbikpO1xufVxuXG5mdW5jdGlvbiBnZXRQb2ludEFuZElkKCkge1xuICAvLyB1c2Ugc2V0IHRvIGdldCBwb2ludCBhbmQgY2lkXG4gIGxldCBmaXJzdCA9IHNwZWNpZmljX2RldmljZV9zZXRbMF07XG4gIGxldCBzZWNvbmQgPSBzcGVjaWZpY19kZXZpY2Vfc2V0WzFdO1xuICBsZXQgdGhpcmQgPSBzcGVjaWZpY19kZXZpY2Vfc2V0WzJdO1xuXG4gIGlmICghZmlyc3QgfHwgIXNlY29uZCB8fCAhdGhpcmQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGxldCBhID0gZmlyc3QucG9pbnRfeCAtIHRoaXJkLnBvaW50X3g7XG4gIGxldCBiID0gZmlyc3QucG9pbnRfeSAtIHRoaXJkLnBvaW50X3k7XG4gIGxldCBjID0gTWF0aC5wb3coZmlyc3QucG9pbnRfeCwgMikgLSBNYXRoLnBvdyhzZWNvbmQucG9pbnRfeCwgMikgKyBNYXRoLnBvdyhmaXJzdC5wb2ludF95LCAyKSAtIE1hdGgucG93KHNlY29uZC5wb2ludF95LCAyKSArIE1hdGgucG93KGZpcnN0LmRpc3RhbmNlLCAyKSAtIE1hdGgucG93KGZpcnN0LmRpc3RhbmNlLCAyKTtcbiAgbGV0IGQgPSBzZWNvbmQucG9pbnRfeCAtIHRoaXJkLnBvaW50X3g7XG4gIGxldCBlID0gc2Vjb25kLnBvaW50X3kgLSB0aGlyZC5wb2ludF95O1xuICBsZXQgZiA9IE1hdGgucG93KHNlY29uZC5wb2ludF94LCAyKSAtIE1hdGgucG93KHRoaXJkLnBvaW50X3gsIDIpICsgTWF0aC5wb3coc2Vjb25kLnBvaW50X3ksIDIpIC0gTWF0aC5wb3codGhpcmQucG9pbnRfeSwgMikgKyBNYXRoLnBvdyhzZWNvbmQuZGlzdGFuY2UsIDIpIC0gTWF0aC5wb3coc2Vjb25uZC5kaXN0YW5jZSwgMik7XG4gIGxldCB4ID0gKGIgKiBmIC0gZSAqIGMpIC8gKDIgKiBiICogZCAtIDIgKiBhICogZSk7XG4gIGxldCB5ID0gKGEgKiBmIC0gZCAqIGMpIC8gKDIgKiBhICogZSAtIDIgKiBiICogZCk7XG4gIGxldCBtaWQgPSBmaXJzdC5kaXN0YW5jZSA8IHNlY29ubmQuZGlzdGFuY2UgPyBmaXJzdCA6IHNlY29uZDtcbiAgbGV0IG1pbiA9IG1pZC5kaXN0YW5jZSA8IHRoaXJkLmRpc3RhbmNlID8gbWlkIDogdGhpcmQ7XG4gIHJldHVybiBbeCwgeSwgbWluLmNhbWVyYV9pZF07XG59IC8vIG1haW5cblxuXG5hc3luYyBmdW5jdGlvbiBidChibHVldG9vdGgsIGZpbmRfY2FtZXJhX2NhbGxiYWNrKSB7XG4gIC8vIG9wZW4gYmx1ZXRvb3RoXG4gIGJsdWV0b290aC5vcGVuQWRhcHRlcih7XG4gICAgb3BlcmF0ZUFkYXB0ZXI6IHRydWUsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc1wiKTtcbiAgICAgIGJsdWV0b290aC5nZXRBZGFwdGVyU3RhdGUoe1xuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBoYW5kbGluZyBhZGFwdGVyIHN0YXRlLCBhdmFpbGFibGUgPSAke2RhdGEuYXZhaWxhYmxlfSwgZGlzY292ZXJpbmcgPSAke2RhdGEuZGlzY292ZXJpbmd9YCk7XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uIChkYXRhLCBjb2RlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYGhhbmRsaW5nIGZhaWwsIGNvZGUgPSAke2NvZGV9IGRhdGEgPSAke2RhdGF9YCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2NvbXBsZXRlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZmFpbDogZnVuY3Rpb24gKGRhdGEsIGNvZGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBidCBvcGVuIGZhaWwsIGNvZGUgPSAke2NvZGV9LCBkYXRhPSR7ZGF0YX1gKTtcbiAgICB9LFxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coXCJjb21wbGV0ZWQhXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgYmx1ZXRvb3RoLm9uZGV2aWNlZm91bmQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGNvbnNvbGUubG9nKFwiRGF0YVwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgYmx1ZXRvb3RoLmdldERldmljZXMoe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJHZXQgRGV2aWNlc1wiKTtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICBkYXRhLmRldmljZXMuZm9yRWFjaChkZXZpY2UgPT4ge1xuICAgICAgICAgIGxldCBkZXZpY2VfbmFtZSA9IGRldmljZS5uYW1lO1xuXG4gICAgICAgICAgaWYgKGRldmljZV9uYW1lLnN1YnN0cmluZygwLCAzKSA9PSBcIk9XLVwiKSB7XG4gICAgICAgICAgICAvLyDlj5HnjrDkuoZjYW1lcmHmiY3lgZzmraLmiavmj4/vvIzkv53or4Hmr4/mrKHpg73kvJrlkJHosIPnlKjogIXov5Tlm57mnInmlYjmlbDmja5cbiAgICAgICAgICAgIGJsdWV0b290aC5zdG9wRGV2aWNlc0Rpc2NvdmVyeSgpO1xuICAgICAgICAgICAgYmx1ZXRvb3RoLmNsb3NlQWRhcHRlcih7XG4gICAgICAgICAgICAgIG9wZXJhdGVBZGFwdGVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKGRhdGEsIGNvZGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgYnQgb3BlbiBmYWlsLCBjb2RlID0gJHtjb2RlfSwgZGF0YT0ke2RhdGF9YCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGV0IGNhbWVyYV9pZCA9IGRldmljZV9uYW1lLnNwbGl0KCctJylbMV07XG4gICAgICAgICAgICBsZXQgcG9pbnRfeCA9IGRldmljZV9uYW1lLnNwbGl0KCctJylbMl07XG4gICAgICAgICAgICBsZXQgcG9pbnRfeSA9IGRldmljZV9uYW1lLnNwbGl0KCctJylbM107XG4gICAgICAgICAgICBsZXQgZGlzID0gZ2V0RChkZXZpY2UuUlNTSSk7XG4gICAgICAgICAgICBzcGVjaWZpY19kZXZpY2Vfc2V0LnB1c2goe1xuICAgICAgICAgICAgICBjYW1lcmFfaWQ6IE51bWJlcihjYW1lcmFfaWQpLFxuICAgICAgICAgICAgICBSU1NJOiBkZXZpY2UuUlNTSSxcbiAgICAgICAgICAgICAgcG9pbnQ6IFtwb2ludF94LCBwb2ludF95XSxcbiAgICAgICAgICAgICAgZGlzdGFuY2U6IGRpc1xuICAgICAgICAgICAgfSk7IC8vIGdldCBmaXJzdFxuXG4gICAgICAgICAgICBpZiAoc3BlY2lmaWNfZGV2aWNlX3NldC5zaXplKCkgPj0gMykge1xuICAgICAgICAgICAgICBsZXQgcmVzID0gZ2V0UG9pbnRBbmRJZCgpO1xuXG4gICAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgICAgICAgICAgIHJlcyA9IFtERUJVR19YLCBERUJVR19ZLCBERUJVR19DSURdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZpbmRfY2FtZXJhX2NhbGxiYWNrKHJlcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9OyAvL+W8gOWni+aJq+aPj1xuXG5cbiAgYmx1ZXRvb3RoLnN0YXJ0RGV2aWNlc0Rpc2NvdmVyeSh7XG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coJ3N0YXJ0IGRpc2NvdmVyeSBzdWNjZXNzJyk7XG4gICAgfSxcbiAgICBmYWlsOiBmdW5jdGlvbiAoZGF0YSwgY29kZSkge1xuICAgICAgY29uc29sZS5sb2coYGJ0IHN0YXJ0IGRpc2NvdmVyeSBmYWlsLCBjb2RlID0gJHtjb2RlfSwgZGF0YT0ke2RhdGF9YCk7XG4gICAgfVxuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidDsiLCJyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvbG9hZGVyLmpzP3R5cGU9Y29tcG9uZW50IS4uL2NvbW1vbi9saWJyYXJ5L3VzZXJfY2FyZC91c2VyX2NhcmQudXg/bmFtZT11c2VyX2NhcmRcIilcbnZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL2luZGV4LnV4XCIpXG52YXIgJGFwcF9zdHlsZSQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD0vVXNlcnMvYnl0ZWRhbmNlL1NDVS/lv6vlupTnlKgvaGFwYXBwL2NvbS5wZW9wbGUuZmluYWwxL3NyYy9JbmRleC9pbmRleC51eCEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPS9Vc2Vycy9ieXRlZGFuY2UvU0NVL+W/q+W6lOeUqC9oYXBhcHAvY29tLnBlb3BsZS5maW5hbDEvc3JjL0luZGV4L2luZGV4LnV4IS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT0vVXNlcnMvYnl0ZWRhbmNlL1NDVS/lv6vlupTnlKgvaGFwYXBwL2NvbS5wZW9wbGUuZmluYWwxL25vZGVfbW9kdWxlcy9AYmFiZWwvcHJlc2V0LWVudiZwbHVnaW5zW109L1VzZXJzL2J5dGVkYW5jZS9TQ1Uv5b+r5bqU55SoL2hhcGFwcC9jb20ucGVvcGxlLmZpbmFsMS9ub2RlX21vZHVsZXMvQGJhYmVsL3BsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109L1VzZXJzL2J5dGVkYW5jZS9TQ1Uv5b+r5bqU55SoL2hhcGFwcC9jb20ucGVvcGxlLmZpbmFsMS9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvanN4LWxvYWRlci5qcyZwbHVnaW5zW109L1VzZXJzL2J5dGVkYW5jZS9TQ1Uv5b+r5bqU55SoL2hhcGFwcC9jb20ucGVvcGxlLmZpbmFsMS9ub2RlX21vZHVsZXMvQGJhYmVsL3BsdWdpbi1wcm9wb3NhbC1jbGFzcy1wcm9wZXJ0aWVzJnBsdWdpbnNbXT0vVXNlcnMvYnl0ZWRhbmNlL1NDVS/lv6vlupTnlKgvaGFwYXBwL2NvbS5wZW9wbGUuZmluYWwxL25vZGVfbW9kdWxlcy9AYmFiZWwvcGx1Z2luLXByb3Bvc2FsLW9iamVjdC1yZXN0LXNwcmVhZCZjb21tZW50cz1mYWxzZSEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vaW5kZXgudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG5cbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLHsgcGFja2FnZXJOYW1lOidmYS10b29sa2l0JywgcGFja2FnZXJWZXJzaW9uOiAnMi41LjItU3RhYmxlLjMwMCd9KSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXREaXN0YW5jZUJ5TEwgPSBnZXREaXN0YW5jZUJ5TEw7XG5leHBvcnRzLk1lcmNhdG9yMmxvbkxhdCA9IE1lcmNhdG9yMmxvbkxhdDtcbmV4cG9ydHMubWFwT2JqZWN0ID0gZXhwb3J0cy5pc0pTT04gPSBleHBvcnRzLnVjVXJsID0gZXhwb3J0cy53ZWJVcmwgPSBleHBvcnRzLmJhc2VVcmwgPSB2b2lkIDA7XG5jb25zdCBiYXNlVXJsID0gJ2h0dHA6Ly8xODIuOTIuMjA4LjQ3Ojg4OTknO1xuZXhwb3J0cy5iYXNlVXJsID0gYmFzZVVybDtcbmNvbnN0IHdlYlVybCA9ICdodHRwOi8vMTgyLjkyLjIwOC40Nzo4MDg2L0luZG9vci8nOyAvL+e6v+S4iueOr+Wig1xuLy8gZXhwb3J0IGNvbnN0IHdlYlVybCA9ICdodHRwOi8vMTkyLjE2OC4xLjEwMzo4MDgwL21hcC9JbmRvb3IvJyAvL+a1i+ivleeOr+Wig1xuXG5leHBvcnRzLndlYlVybCA9IHdlYlVybDtcbmNvbnN0IHVjVXJsID0gJ2h0dHA6Ly8xOTIuMTY4LjEuMTAzOjgwODAvZmx1ZW50Lyc7IC8vIGV4cG9ydCBjb25zdCB1Y1VybCA9ICdodHRwOi8vMTgyLjkyLjIwOC40Nzo4MDg3LydcblxuZXhwb3J0cy51Y1VybCA9IHVjVXJsO1xuXG5jb25zdCBpc0pTT04gPSBmdW5jdGlvbiAoZGF0YSkge1xuICB0cnkge1xuICAgIGxldCByZXMgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgIHJldHVybiByZXM7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuZXhwb3J0cy5pc0pTT04gPSBpc0pTT047XG5jb25zdCBtYXBPYmplY3QgPSB7XG4gIG1pblg6IDEyNjgzNDA3Ljc4NjI4MzUsXG4gIG1heFg6IDEyNjgzNTIzLjcwNzgwMzcsXG4gIG1pblk6IDI1NTc4MzguMzU4ODgxLFxuICBtYXhZOiAyNTU3OTI3Ljc0NTk4MTIsXG4gIGNlbnRlcjoge1xuICAgIHg6IDEyNjgzNDY1Ljc0NzA0MzYsXG4gICAgeTogMjU1Nzg4My4wNTI0MzExXG4gIH1cbn07IC8vIOe7j+e6rOW6pui9rOaNouaIkOS4ieinkuWHveaVsOS4reW6puWIhuihqOW9ouW8j+OAglxuXG5leHBvcnRzLm1hcE9iamVjdCA9IG1hcE9iamVjdDtcblxuZnVuY3Rpb24gcmFkKGQpIHtcbiAgcmV0dXJuIGQgKiBNYXRoLlBJIC8gMTgwLjA7XG59IC8vIOagueaNrue7j+e6rOW6puiuoeeul+i3neemu++8jOWPguaVsOWIhuWIq+S4uuesrOS4gOeCueeahOe6rOW6pu+8jOe7j+W6pu+8m+esrOS6jOeCueeahOe6rOW6pu+8jOe7j+W6plxuXG5cbmZ1bmN0aW9uIGdldERpc3RhbmNlQnlMTChfbGF0MSwgX2xuZzEsIF9sYXQyLCBfbG5nMikge1xuICBsZXQgbGF0MSA9IE51bWJlcihfbGF0MSk7XG4gIGxldCBsYXQyID0gTnVtYmVyKF9sYXQyKTtcbiAgbGV0IGxuZzIgPSBOdW1iZXIoX2xuZzIpO1xuICBsZXQgbG5nMSA9IE51bWJlcihfbG5nMik7XG4gIGNvbnNvbGUubG9nKGDlvIDlp4vorqHnrpcgJHtsYXQxfSAke2xhdDJ9ICR7bG5nMX0gJHtsbmcyfWApO1xuICB2YXIgcmFkTGF0MSA9IHJhZChsYXQxKTtcbiAgdmFyIHJhZExhdDIgPSByYWQobGF0Mik7XG4gIHZhciBhID0gcmFkTGF0MSAtIHJhZExhdDI7XG4gIHZhciBiID0gcmFkKGxuZzEpIC0gcmFkKGxuZzIpO1xuICB2YXIgcyA9IDIgKiBNYXRoLmFzaW4oTWF0aC5zcXJ0KE1hdGgucG93KE1hdGguc2luKGEgLyAyKSwgMikgKyBNYXRoLmNvcyhyYWRMYXQxKSAqIE1hdGguY29zKHJhZExhdDIpICogTWF0aC5wb3coTWF0aC5zaW4oYiAvIDIpLCAyKSkpO1xuICBzID0gcyAqIDYzNzguMTM3OyAvLyBFQVJUSF9SQURJVVM7XG5cbiAgcyA9IE1hdGgucm91bmQocyAqIDEwMDAwKSAvIDEwMDAwOyAvL+i+k+WHuuS4uuWFrOmHjFxuXG4gIHZhciBkaXN0YW5jZSA9IHM7XG4gIHZhciBkaXN0YW5jZV9zdHIgPSBcIlwiO1xuICBjb25zb2xlLmxvZyhcIuW+l+WHuueahOi3neemu1wiLCBzKTtcblxuICBpZiAocGFyc2VJbnQoZGlzdGFuY2UpID49IDEpIHtcbiAgICBkaXN0YW5jZV9zdHIgPSBkaXN0YW5jZS50b0ZpeGVkKDEpICsgXCJrbVwiO1xuICB9IGVsc2Uge1xuICAgIGRpc3RhbmNlX3N0ciA9IChkaXN0YW5jZSAqIDEwMDApLnRvRml4ZWQoMSkgKyBcIm1cIjtcbiAgfSAvL3M9cy50b0ZpeGVkKDQpO1xuXG5cbiAgY29uc29sZS5pbmZvKCdseWog6Led56a75pivJywgcyk7XG4gIGNvbnNvbGUuaW5mbygnbHlqIOi3neemu+aYrycsIGRpc3RhbmNlX3N0cik7XG4gIHJldHVybiBkaXN0YW5jZV9zdHI7XG59XG5cbmZ1bmN0aW9uIE1lcmNhdG9yMmxvbkxhdChtZXJjYXRvclgsIG1lcmNhdG9yWSkge1xuICB2YXIgeHkgPSBbXTtcbiAgdmFyIHggPSBtZXJjYXRvclggLyAyMDAzNzUwOC4zNCAqIDE4MDtcbiAgdmFyIHkgPSBtZXJjYXRvclkgLyAyMDAzNzUwOC4zNCAqIDE4MDtcbiAgeSA9IDE4MCAvIE1hdGguUEkgKiAoMiAqIE1hdGguYXRhbihNYXRoLmV4cCh5ICogTWF0aC5QSSAvIDE4MCkpIC0gTWF0aC5QSSAvIDIpO1xuICB4eS5wdXNoKHgpO1xuICB4eS5wdXNoKHkpO1xuICByZXR1cm4geHk7XG59Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN4UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM1cEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDekhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbGxCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQy9IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==