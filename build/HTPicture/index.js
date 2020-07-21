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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/HTPicture/index.ux");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/HTPicture/index.ux!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/HTPicture/index.ux!./src/HTPicture/index.ux":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/HTPicture/index.ux!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/HTPicture/index.ux!./src/HTPicture/index.ux ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignContent": "center",
    "alignItems": "center"
  },
  ".title": {
    "fontSize": "100px"
  },
  ".map-hero": {
    "flexDirection": "column",
    "backgroundColor": "#008df8",
    "width": "100%",
    "alignItems": "center",
    "justifyContent": "space-around",
    "paddingTop": "30px",
    "paddingBottom": "30px"
  },
  ".map-container": {
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "backgroundColor": "#ffffff",
    "borderRadius": "20px",
    "marginTop": "30px",
    "marginBottom": "30px"
  },
  "#map": {
    "width": "640px",
    "height": "640px"
  },
  ".legend": {
    "marginTop": "30px",
    "marginBottom": "30px",
    "width": "680px",
    "borderRadius": "20px",
    "backgroundColor": "#FFFFFF",
    "justifyContent": "space-around",
    "paddingTop": "30px",
    "paddingBottom": "30px"
  },
  ".lipic": {
    "width": "40px",
    "height": "40px"
  },
  ".litxt": {
    "fontWeight": "600",
    "color": "#111111",
    "fontSize": "25px",
    "marginLeft": "10px"
  },
  ".floor_selector": {
    "width": "680px",
    "justifyContent": "space-around",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "10px",
    "paddingTop": "30px",
    "paddingBottom": "30px",
    "marginTop": "30px",
    "marginBottom": "30px"
  },
  ".floor_selector .desc": {
    "fontWeight": "600",
    "color": "#111111"
  },
  ".floor_selector .floor_opinion": {
    "backgroundColor": "#FFFFFF",
    "fontWeight": "600"
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
  ".navigation": {
    "width": "100%",
    "marginBottom": "30px",
    "paddingTop": "30px",
    "paddingBottom": "30px",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".search_input": {
    "backgroundColor": "#FFFFFF",
    "borderRadius": "20px",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "borderTopWidth": "5px",
    "borderRightWidth": "5px",
    "borderBottomWidth": "5px",
    "borderLeftWidth": "5px",
    "borderStyle": "solid",
    "borderTopColor": "#cccccc",
    "borderRightColor": "#cccccc",
    "borderBottomColor": "#cccccc",
    "borderLeftColor": "#cccccc",
    "width": "80%",
    "fontSize": "25px",
    "fontWeight": "600",
    "marginRight": "20px"
  },
  ".search_btn": {
    "width": "64px",
    "height": "64px"
  },
  ".route": {
    "flexDirection": "column",
    "alignItems": "center"
  },
  ".route .route-title": {
    "fontSize": "40px",
    "color": "#111111",
    "fontWeight": "700"
  },
  ".path_container": {
    "flexDirection": "column",
    "alignItems": "center"
  },
  ".path_container .path-item": {
    "width": "100%",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "backgroundColor": "#FFFFFF",
    "fontSize": "42px",
    "fontWeight": "600"
  },
  ".path_container .path-pointer": {
    "height": "32px",
    "width": "32px"
  },
  ".not_found": {
    "fontSize": "40px",
    "fontWeight": "600",
    "width": "75%",
    "textAlign": "center",
    "paddingTop": "30px",
    "paddingRight": "30px",
    "paddingBottom": "30px",
    "paddingLeft": "30px",
    "borderRadius": "15px"
  }
}

/***/ }),

/***/ "./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./src/HTPicture/index.ux":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./src/HTPicture/index.ux ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
      "type": "div",
      "attr": {},
      "classList": [
        "map-hero"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "map-container"
          ],
          "children": [
            {
              "type": "canvas",
              "attr": {
                "id": "map"
              },
              "id": "map"
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "legend"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "legend-item"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/Common/user_pos.svg"
                  },
                  "classList": [
                    "lipic"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.$t('message.HTP.legend.user_pos')}
                  },
                  "classList": [
                    "litxt"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "legend-item"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/Common/range.png"
                  },
                  "classList": [
                    "lipic"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.$t('message.HTP.legend.ht_level')}
                  },
                  "classList": [
                    "litxt"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "legend-item"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/Common/camera.svg"
                  },
                  "classList": [
                    "lipic"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.$t('message.HTP.legend.camera_pos')}
                  },
                  "classList": [
                    "litxt"
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
            "floor_selector"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.$t('message.HTP.floor_selector.desc')}
              },
              "classList": [
                "desc"
              ]
            },
            {
              "type": "select",
              "attr": {
                "id": "floor_select"
              },
              "id": "floor_select",
              "events": {
                "change": "changefloor"
              },
              "classList": [
                "floor_select"
              ],
              "children": [
                {
                  "type": "option",
                  "attr": {
                    "value": "5",
                    "selected": function () {return this.curFloor===5?true:false},
                    "content": "5层"
                  },
                  "classList": [
                    "floor_opinion"
                  ]
                },
                {
                  "type": "option",
                  "attr": {
                    "value": "4",
                    "selected": function () {return this.curFloor===4?true:false},
                    "content": "4层"
                  },
                  "classList": [
                    "floor_opinion"
                  ]
                },
                {
                  "type": "option",
                  "attr": {
                    "value": "3",
                    "selected": function () {return this.curFloor===3?true:false},
                    "content": "3层"
                  },
                  "classList": [
                    "floor_opinion"
                  ]
                },
                {
                  "type": "option",
                  "attr": {
                    "value": "2",
                    "selected": function () {return this.curFloor===2?true:false},
                    "content": "2层"
                  },
                  "classList": [
                    "floor_opinion"
                  ]
                },
                {
                  "type": "option",
                  "attr": {
                    "value": "1",
                    "selected": function () {return this.curFloor===1?true:false},
                    "content": "1层"
                  },
                  "classList": [
                    "floor_opinion"
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
        "main"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "navigation"
          ],
          "children": [
            {
              "type": "input",
              "attr": {
                "type": "text",
                "id": "input_value",
                "placeholder": "输入您要去的楼内场所"
              },
              "id": "input_value",
              "classList": [
                "search_input"
              ],
              "events": {
                "change": "search_value_changed"
              }
            },
            {
              "type": "image",
              "attr": {
                "src": "/Common/search3.svg"
              },
              "classList": [
                "search_btn"
              ],
              "events": {
                "click": "searchPlace"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "route"
          ],
          "shown": function () {return this.route!==null?true:false},
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return '路线:前往'+this.search_value}
              },
              "classList": [
                "route-title"
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "path_container"
              ],
              "repeat": function () {return this.route.path},
              "shown": function () {return this.found},
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "path-item"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.$item.nodeName}
                      },
                      "classList": [
                        "inner_text"
                      ]
                    }
                  ]
                },
                {
                  "type": "image",
                  "attr": {
                    "src": "/Common/down.svg"
                  },
                  "classList": [
                    "path-pointer"
                  ],
                  "shown": function () {return this.route.path.length-1!==this.$idx}
                }
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "没找到通往该节点的路径，可能是您的输入有误"
              },
              "classList": [
                "not_found"
              ],
              "shown": function () {return !this.found}
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/preset-env&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./src/HTPicture/index.ux":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./node_modules/babel-loader/lib?presets[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/preset-env&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./src/HTPicture/index.ux ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _const = __webpack_require__(/*! ../const */ "./src/const.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  protected: {
    inner_pos: '',
    title: '人流量图与导航',
    building_basepoints: null,
    curFloor: 2,
    allcameras: null,
    firstDraw: true,
    search_value: '',
    route: null,
    found: false,
    isUnionIde: false
  },
  onInit: function () {
    if (this.inner_pos != '') {
      this.inner_pos = JSON.parse(this.inner_pos);
      console.log("after Converted,latitude", this.inner_pos.latitude);
    } else {
      console.error("服务未启动!");
    }
  },
  onShow: async function () {
    console.log("show");
    this.$page.setTitleBar({
      text: "人流量图与导航",
      backgroundColor: '#008df8'
    });
    let that = this;
    let res = await _system.default.fetch({
      url: `${_const.baseUrl}/getBasePoints`
    }).catch(error => {
      console.log("Handling fail, error = ", error);
    });
    let result = res.data;

    if (result.code === 200) {
      this.building_basepoints = JSON.parse(result.data);
      console.log(typeof this.building_basepoints);
      console.log("建筑的基准点", this.building_basepoints[0]);
    } else {
      console.log("GetBasePoints Faild, Code", result.code);
    }

    let canvas = this.$element('map');
    let ctx = canvas.getContext('2d');

    if (typeof canvas.width === "undefined") {
      console.log("联盟ide");
      this.isUnionIde = true;
    }

    ctx.clearRect(0, 0, this.isUnionIde ? 640 : canvas.width, this.isUnionIde ? 640 : canvas.height);
    await this.ctxDrawImage(ctx, `../Common/maps/map${this.curFloor}f.jpg`, 0, 0, this.isUnionIde ? 640 : canvas.width, this.isUnionIde ? 640 : canvas.height).catch(err => {
      console.log("Loaded Failed, Error = ", err);
    });
    let userPos = this.ll2CanvasCoor(this.inner_pos.latitude, this.inner_pos.longitude, this.isUnionIde ? 640 : canvas.width, this.isUnionIde ? 640 : canvas.height);
    setTimeout(() => {
      this.ctxDrawImage(ctx, `../Common/user_pos.png`, userPos[0] - 25, userPos[1] - 45, 50, 50).catch(err => {
        console.log("Loaded Failed, Error = ", err);
      });
    }, 200);
    res = await _system.default.fetch({
      url: `${_const.baseUrl}/getAllCamera`
    }).catch(err => {
      console.log("Failed, ", err);
    });
    result = res.data;

    if (result.code === 200) {
      let cameras = result.data;
      this.allcameras = await JSON.parse(cameras);
      this.allcameras.forEach(element => {
        if (element.floor === this.curFloor) {
          let camera_pos = this.ll2CanvasCoor(element.latitude, element.longitude, this.isUnionIde ? 640 : canvas.width, this.isUnionIde ? 640 : canvas.height);
          let camera_center_pos_x = camera_pos[0] - 15;
          let camera_cener_pos_y = camera_pos[1] - 24;
          let ht_unsafe_color = 'rgba(196,25,25,40)';
          let ht_safe_color = 'rgba(0,251,82,40)';

          if (element.nums > element.threshold / 2 || !element.isfree) {
            ctx.fillStyle = ht_unsafe_color;
          } else {
            ctx.fillStyle = ht_safe_color;
          }

          let range = 30;

          for (let i = 0; i < element.nums; i++) {
            let randNum1 = Math.floor(Math.random() * (range * 2 + 1) - range);
            let randNum2 = Math.floor(Math.random() * (range * 2 + 1) - range);
            ctx.fillRect(camera_center_pos_x + randNum1, camera_cener_pos_y + randNum2, 5, 5);
          }

          this.ctxDrawImage(ctx, '../Common/camera.png', camera_center_pos_x, camera_cener_pos_y, 30, 30);
        }
      });
    }

    this.firstDraw = false;
  },
  changefloor: async function (evt) {
    console.log("Change To ", evt.newValue);

    if (evt.newValue != this.curFloor) {
      this.curFloor = evt.newValue;
    }

    console.log("Current Floor: ", this.curFloor);

    if (this.firstDraw) {
      return;
    }

    let canvas = this.$element('map');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, this.isUnionIde ? 640 : canvas.width, this.isUnionIde ? 640 : canvas.height);
    await this.ctxDrawImage(ctx, `../Common/maps/map${this.curFloor}f.jpg`, 0, 0, this.isUnionIde ? 640 : canvas.width, this.isUnionIde ? 640 : canvas.height).catch(err => {
      console.log("Loaded Failed, Error = ", err);
    });
    let userPos = this.ll2CanvasCoor(this.inner_pos.latitude, this.inner_pos.longitude, this.isUnionIde ? 640 : canvas.width, this.isUnionIde ? 640 : canvas.height);
    console.log(this.inner_pos.floor);
    console.log(this.curFloor);

    if (this.inner_pos.floor == this.curFloor) {
      console.log("Is here");
      setTimeout(() => {
        this.ctxDrawImage(ctx, `../Common/user_pos.png`, userPos[0] - 25, userPos[1] - 45, 50, 50).catch(err => {
          console.log("Loaded Failed, Error = ", err);
        });
      }, 200);
    }

    this.allcameras.forEach(element => {
      if (element.floor == this.curFloor) {
        let camera_pos = this.ll2CanvasCoor(element.latitude, element.longitude, this.isUnionIde ? 640 : canvas.width, this.isUnionIde ? 640 : canvas.height);
        let camera_center_pos_x = camera_pos[0] - 15;
        let camera_cener_pos_y = camera_pos[1] - 24;
        let ht_unsafe_color = 'rgba(196,25,25,40)';
        let ht_safe_color = 'rgba(0,251,82,40)';

        if (element.nums > element.threshold / 2 || !element.isfree) {
          ctx.fillStyle = ht_unsafe_color;
        } else {
          ctx.fillStyle = ht_safe_color;
        }

        let range = 30;

        for (let i = 0; i < element.nums; i++) {
          let randNum1 = Math.floor(Math.random() * (range * 2 + 1) - range);
          let randNum2 = Math.floor(Math.random() * (range * 2 + 1) - range);
          ctx.fillRect(camera_center_pos_x + randNum1, camera_cener_pos_y + randNum2, 5, 5);
        }

        this.ctxDrawImage(ctx, '../Common/camera.png', camera_center_pos_x, camera_cener_pos_y, 30, 30);
      }
    });
    setTimeout(() => {
      if (this.found) {
        console.log("继续drawpath");
        this.drawPath();
      }
    }, 400);
  },
  searchPlace: async function () {
    this.$element('input_value').focus({
      focus: false
    });
    let that = this;
    console.log(this.search_value);

    if (this.search_value === "") {
      _system2.default.showToast({
        message: '请输入目的地再搜索',
        duration: 2000
      });
    } else {
      let res = await _system.default.fetch({
        url: `${_const.baseUrl}/getBestPathWithDest?cameraid=${that.inner_pos.id}&destCameraId=${that.search_value}`
      }).catch(err => {
        console.log("handling fail, error: ", err);
      });
      console.log("code: " + res.data.code);

      if (res.data.code === 200) {
        this.found = true;
        console.log("data: " + res.data.data);
        this.route = JSON.parse(res.data.data);
        this.changefloor({
          newValue: this.curFloor
        });
      } else {
        this.found = false;
        console.log("Error Found Code = ", res.data.code);

        if (res.data.code == 404) {
          _system2.default.showToast({
            message: '没有找到该节点，输入有误',
            duration: 2000
          });
        } else if (res.data.code == 502) {
          _system2.default.showToast({
            message: '无有效路径',
            duration: 2000
          });
        } else {
          _system2.default.showToast({
            message: '未知错误',
            duration: 2000
          });
        }
      }
    }
  },
  search_value_changed: function (evt) {
    this.search_value = evt.value;
  },
  id2name: async function (cameraid) {
    let that = this;
    let name = '';
    let res = await _system.default.fetch({
      url: `${_const.baseUrl}/getCamera?id=${cameraid}`
    }).catch(error => {
      console.log("handling fail, code = " + error);
      return "Cannot Found This Camera";
    });
    console.log(res);
    console.log("code: " + res.data.code);
    console.log("data: " + res.data.data);

    if (res.data.code === 200) {
      let re = JSON.parse(res.data.data);
      console.log("re: ", re.position);
      name = re.position;
    }

    return name;
  },

  ll2CanvasCoor(latitude, longitude, canvas_width, canvas_height) {
    console.log(`canvas width:${canvas_width},canvas height:${canvas_height}`);
    let canvas_x = 0;
    let canvas_y = 0;
    let left_vertical = false;
    let top_horizontal = false;
    console.log(this.building_basepoints[0][0]);
    let lb = this.building_basepoints[0];
    let rb = this.building_basepoints[1];
    let lt = this.building_basepoints[2];
    let rt = this.building_basepoints[3];
    console.log(`lb:${lb},rb:${rb},lt:${lt},rt:${rt}`);
    let k1, b1, k2, b2;
    k1 = (lt[0] - lb[0]) / (lt[1] - lb[1]);
    k2 = (lt[0] - rt[0]) / (lt[1] - rt[1]);
    b1 = lb[1] - k1 * lb[0];
    b2 = lt[1] - k2 * lt[0];
    console.log(`k1:${k1},k2:${k2},b1:${b1},b2:${b2}`);

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

    let aspect_x = canvas_width / Math.sqrt((rt[0] - lt[0]) * (rt[0] - lt[0]) + (rt[1] - lt[1]) * (rt[1] - lt[1]));
    let aspect_y = canvas_height / Math.sqrt((lt[0] - lb[0]) * (lt[0] - lb[0]) + (lt[1] - lb[1]) * (lt[1] - lb[1]));
    canvas_x *= aspect_x;
    canvas_y *= aspect_y;
    console.log(`x:${canvas_x},y:${canvas_y}`);
    return [canvas_x, canvas_y];
  },

  async ctxDrawImage(ctx, path, x, y, width = 0, height = 0) {
    let img = new Image();
    img.src = path;
    return new Promise(function (resolve, reject) {
      img.onload = async () => {
        console.log(`图像加载完成:${path}`);

        if (width === 0 || height === 0) {
          await ctx.drawImage(img, x, y);
        } else {
          await ctx.drawImage(img, x, y, width, height);
        }

        resolve();
      };

      img.onerror = e => {
        console.log("图像加载出错");
        reject(e);
      };
    });
  },

  drawPath() {
    let canvas = this.$element('map');
    let ctx = canvas.getContext('2d');
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.beginPath();
    let count = 0;
    this.route.path.forEach(i => {
      console.log(i);
      let res = this.allcameras.find(ele => ele.id == i.nodeid);
      console.log("res", res);

      if (res.floor == this.curFloor) {
        let respos = this.ll2CanvasCoor(res.latitude, res.longitude, this.isUnionIde ? 640 : canvas.width, this.isUnionIde ? 640 : canvas.height);

        if (count === 0) {
          ctx.moveTo(respos[0], respos[1] - 5);
          console.log(`移动到 ${respos[0]}, ${respos[1]}`);
        } else {
          ctx.lineTo(respos[0], respos[1] - 5);
          console.log(`绘制到 ${respos[0]}, ${respos[1]}`);
        }

        count += 1;
      }
    });
    ctx.stroke();
  },

  refreshAndDraw() {}

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

/***/ "./src/HTPicture/index.ux":
/*!********************************!*\
  !*** ./src/HTPicture/index.ux ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!../../node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./index.ux */ "./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./src/HTPicture/index.ux")
var $app_style$ = __webpack_require__(/*! !../../node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/HTPicture/index.ux!../../node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/HTPicture/index.ux!./index.ux */ "./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/HTPicture/index.ux!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/HTPicture/index.ux!./src/HTPicture/index.ux")
var $app_script$ = __webpack_require__(/*! !../../node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!../../node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!../../node_modules/babel-loader?presets[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/preset-env&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!../../node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./index.ux */ "./node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/preset-env&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./src/HTPicture/index.ux")

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQvSFRQaWN0dXJlL2luZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL3NyYy9IVFBpY3R1cmUvaW5kZXgudXg/NTU1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvSFRQaWN0dXJlL2luZGV4LnV4P2I5YzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL0hUUGljdHVyZS9pbmRleC51eD8xYjhjIiwid2VicGFjazovLy8uL3NyYy9IVFBpY3R1cmUvaW5kZXgudXgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL0hUUGljdHVyZS9pbmRleC51eFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5jb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJhbGlnbkNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi50aXRsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjEwMHB4XCJcbiAgfSxcbiAgXCIubWFwLWhlcm9cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAwOGRmOFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWFyb3VuZFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjMwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMHB4XCJcbiAgfSxcbiAgXCIubWFwLWNvbnRhaW5lclwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMjBweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMzBweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMzBweFwiXG4gIH0sXG4gIFwiI21hcFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjY0MHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI2NDBweFwiXG4gIH0sXG4gIFwiLmxlZ2VuZFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzMHB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjY4MHB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyMHB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWFyb3VuZFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjMwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMHB4XCJcbiAgfSxcbiAgXCIubGlwaWNcIjoge1xuICAgIFwid2lkdGhcIjogXCI0MHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI0MHB4XCJcbiAgfSxcbiAgXCIubGl0eHRcIjoge1xuICAgIFwiZm9udFdlaWdodFwiOiBcIjYwMFwiLFxuICAgIFwiY29sb3JcIjogXCIjMTExMTExXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI1cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMHB4XCJcbiAgfSxcbiAgXCIuZmxvb3Jfc2VsZWN0b3JcIjoge1xuICAgIFwid2lkdGhcIjogXCI2ODBweFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1hcm91bmRcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEwcHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMzBweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMzBweFwiXG4gIH0sXG4gIFwiLmZsb29yX3NlbGVjdG9yIC5kZXNjXCI6IHtcbiAgICBcImZvbnRXZWlnaHRcIjogXCI2MDBcIixcbiAgICBcImNvbG9yXCI6IFwiIzExMTExMVwiXG4gIH0sXG4gIFwiLmZsb29yX3NlbGVjdG9yIC5mbG9vcl9vcGluaW9uXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI2MDBcIlxuICB9LFxuICBcIi5tYWluXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIi0zMHB4XCIsXG4gICAgXCJib3JkZXJUb3BSaWdodFJhZGl1c1wiOiBcIjMwcHhcIixcbiAgICBcImJvcmRlclRvcExlZnRSYWRpdXNcIjogXCIzMHB4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWFyb3VuZFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiLm5hdmlnYXRpb25cIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMzBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjMwcHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuc2VhcmNoX2lucHV0XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHB4XCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjVweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjVweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCI1cHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjVweFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjY2NjY2NjXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiI2NjY2NjY1wiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjY2NjY2NjXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjY2NjY2NjXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjgwJVwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyNXB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNjAwXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwcHhcIlxuICB9LFxuICBcIi5zZWFyY2hfYnRuXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjRweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNjRweFwiXG4gIH0sXG4gIFwiLnJvdXRlXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5yb3V0ZSAucm91dGUtdGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI0MHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMxMTExMTFcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI3MDBcIlxuICB9LFxuICBcIi5wYXRoX2NvbnRhaW5lclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIucGF0aF9jb250YWluZXIgLnBhdGgtaXRlbVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjQycHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI2MDBcIlxuICB9LFxuICBcIi5wYXRoX2NvbnRhaW5lciAucGF0aC1wb2ludGVyXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjMycHhcIixcbiAgICBcIndpZHRoXCI6IFwiMzJweFwiXG4gIH0sXG4gIFwiLm5vdF9mb3VuZFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjQwcHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI2MDBcIixcbiAgICBcIndpZHRoXCI6IFwiNzUlXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxNXB4XCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJtYXAtaGVyb1wiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJtYXAtY29udGFpbmVyXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJjYW52YXNcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwibWFwXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJpZFwiOiBcIm1hcFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwibGVnZW5kXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJsZWdlbmQtaXRlbVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9Db21tb24vdXNlcl9wb3Muc3ZnXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwibGlwaWNcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJHQoJ21lc3NhZ2UuSFRQLmxlZ2VuZC51c2VyX3BvcycpfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJsaXR4dFwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJsZWdlbmQtaXRlbVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9Db21tb24vcmFuZ2UucG5nXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwibGlwaWNcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJHQoJ21lc3NhZ2UuSFRQLmxlZ2VuZC5odF9sZXZlbCcpfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJsaXR4dFwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJsZWdlbmQtaXRlbVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9Db21tb24vY2FtZXJhLnN2Z1wiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImxpcGljXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiR0KCdtZXNzYWdlLkhUUC5sZWdlbmQuY2FtZXJhX3BvcycpfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJsaXR4dFwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiZmxvb3Jfc2VsZWN0b3JcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kdCgnbWVzc2FnZS5IVFAuZmxvb3Jfc2VsZWN0b3IuZGVzYycpfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJkZXNjXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcImZsb29yX3NlbGVjdFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiaWRcIjogXCJmbG9vcl9zZWxlY3RcIixcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2hhbmdlXCI6IFwiY2hhbmdlZmxvb3JcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJmbG9vcl9zZWxlY3RcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgIFwic2VsZWN0ZWRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmN1ckZsb29yPT09NT90cnVlOmZhbHNlfSxcbiAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IFwiNeWxglwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImZsb29yX29waW5pb25cIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiNFwiLFxuICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGVkXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5jdXJGbG9vcj09PTQ/dHJ1ZTpmYWxzZX0sXG4gICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiBcIjTlsYJcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJmbG9vcl9vcGluaW9uXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIjNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RlZFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuY3VyRmxvb3I9PT0zP3RydWU6ZmFsc2V9LFxuICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjogXCIz5bGCXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiZmxvb3Jfb3BpbmlvblwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic2VsZWN0ZWRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmN1ckZsb29yPT09Mj90cnVlOmZhbHNlfSxcbiAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IFwiMuWxglwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImZsb29yX29waW5pb25cIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGVkXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5jdXJGbG9vcj09PTE/dHJ1ZTpmYWxzZX0sXG4gICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiBcIjHlsYJcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJmbG9vcl9vcGluaW9uXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIm1haW5cIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwibmF2aWdhdGlvblwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcImlucHV0X3ZhbHVlXCIsXG4gICAgICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIui+k+WFpeaCqOimgeWOu+eahOalvOWGheWcuuaJgFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiaWRcIjogXCJpbnB1dF92YWx1ZVwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzZWFyY2hfaW5wdXRcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjaGFuZ2VcIjogXCJzZWFyY2hfdmFsdWVfY2hhbmdlZFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJzcmNcIjogXCIvQ29tbW9uL3NlYXJjaDMuc3ZnXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwic2VhcmNoX2J0blwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwic2VhcmNoUGxhY2VcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicm91dGVcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucm91dGUhPT1udWxsP3RydWU6ZmFsc2V9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICfot6/nur865YmN5b6AJyt0aGlzLnNlYXJjaF92YWx1ZX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwicm91dGUtdGl0bGVcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJwYXRoX2NvbnRhaW5lclwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicmVwZWF0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yb3V0ZS5wYXRofSxcbiAgICAgICAgICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZm91bmR9LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJwYXRoLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5ub2RlTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5uZXJfdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogXCIvQ29tbW9uL2Rvd24uc3ZnXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwicGF0aC1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yb3V0ZS5wYXRoLmxlbmd0aC0xIT09dGhpcy4kaWR4fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLmsqHmib7liLDpgJrlvoDor6XoioLngrnnmoTot6/lvoTvvIzlj6/og73mmK/mgqjnmoTovpPlhaXmnInor69cIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJub3RfZm91bmRcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gIXRoaXMuZm91bmR9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG52YXIgX3N5c3RlbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5mZXRjaFwiKSk7XG5cbnZhciBfc3lzdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5wcm9tcHRcIikpO1xuXG52YXIgX2NvbnN0ID0gcmVxdWlyZShcIi4uL2NvbnN0XCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJvdGVjdGVkOiB7XG4gICAgaW5uZXJfcG9zOiAnJyxcbiAgICB0aXRsZTogJ+S6uua1gemHj+WbvuS4juWvvOiIqicsXG4gICAgYnVpbGRpbmdfYmFzZXBvaW50czogbnVsbCxcbiAgICBjdXJGbG9vcjogMixcbiAgICBhbGxjYW1lcmFzOiBudWxsLFxuICAgIGZpcnN0RHJhdzogdHJ1ZSxcbiAgICBzZWFyY2hfdmFsdWU6ICcnLFxuICAgIHJvdXRlOiBudWxsLFxuICAgIGZvdW5kOiBmYWxzZSxcbiAgICBpc1VuaW9uSWRlOiBmYWxzZVxuICB9LFxuICBvbkluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pbm5lcl9wb3MgIT0gJycpIHtcbiAgICAgIHRoaXMuaW5uZXJfcG9zID0gSlNPTi5wYXJzZSh0aGlzLmlubmVyX3Bvcyk7XG4gICAgICBjb25zb2xlLmxvZyhcImFmdGVyIENvbnZlcnRlZCxsYXRpdHVkZVwiLCB0aGlzLmlubmVyX3Bvcy5sYXRpdHVkZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCLmnI3liqHmnKrlkK/liqghXCIpO1xuICAgIH1cbiAgfSxcbiAgb25TaG93OiBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJzaG93XCIpO1xuICAgIHRoaXMuJHBhZ2Uuc2V0VGl0bGVCYXIoe1xuICAgICAgdGV4dDogXCLkurrmtYHph4/lm77kuI7lr7zoiKpcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDhkZjgnXG4gICAgfSk7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCByZXMgPSBhd2FpdCBfc3lzdGVtLmRlZmF1bHQuZmV0Y2goe1xuICAgICAgdXJsOiBgJHtfY29uc3QuYmFzZVVybH0vZ2V0QmFzZVBvaW50c2BcbiAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkhhbmRsaW5nIGZhaWwsIGVycm9yID0gXCIsIGVycm9yKTtcbiAgICB9KTtcbiAgICBsZXQgcmVzdWx0ID0gcmVzLmRhdGE7XG5cbiAgICBpZiAocmVzdWx0LmNvZGUgPT09IDIwMCkge1xuICAgICAgdGhpcy5idWlsZGluZ19iYXNlcG9pbnRzID0gSlNPTi5wYXJzZShyZXN1bHQuZGF0YSk7XG4gICAgICBjb25zb2xlLmxvZyh0eXBlb2YgdGhpcy5idWlsZGluZ19iYXNlcG9pbnRzKTtcbiAgICAgIGNvbnNvbGUubG9nKFwi5bu6562R55qE5Z+65YeG54K5XCIsIHRoaXMuYnVpbGRpbmdfYmFzZXBvaW50c1swXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiR2V0QmFzZVBvaW50cyBGYWlsZCwgQ29kZVwiLCByZXN1bHQuY29kZSk7XG4gICAgfVxuXG4gICAgbGV0IGNhbnZhcyA9IHRoaXMuJGVsZW1lbnQoJ21hcCcpO1xuICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGlmICh0eXBlb2YgY2FudmFzLndpZHRoID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIuiBlOebn2lkZVwiKTtcbiAgICAgIHRoaXMuaXNVbmlvbklkZSA9IHRydWU7XG4gICAgfVxuXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmlzVW5pb25JZGUgPyA2NDAgOiBjYW52YXMud2lkdGgsIHRoaXMuaXNVbmlvbklkZSA/IDY0MCA6IGNhbnZhcy5oZWlnaHQpO1xuICAgIGF3YWl0IHRoaXMuY3R4RHJhd0ltYWdlKGN0eCwgYC4uL0NvbW1vbi9tYXBzL21hcCR7dGhpcy5jdXJGbG9vcn1mLmpwZ2AsIDAsIDAsIHRoaXMuaXNVbmlvbklkZSA/IDY0MCA6IGNhbnZhcy53aWR0aCwgdGhpcy5pc1VuaW9uSWRlID8gNjQwIDogY2FudmFzLmhlaWdodCkuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiTG9hZGVkIEZhaWxlZCwgRXJyb3IgPSBcIiwgZXJyKTtcbiAgICB9KTtcbiAgICBsZXQgdXNlclBvcyA9IHRoaXMubGwyQ2FudmFzQ29vcih0aGlzLmlubmVyX3Bvcy5sYXRpdHVkZSwgdGhpcy5pbm5lcl9wb3MubG9uZ2l0dWRlLCB0aGlzLmlzVW5pb25JZGUgPyA2NDAgOiBjYW52YXMud2lkdGgsIHRoaXMuaXNVbmlvbklkZSA/IDY0MCA6IGNhbnZhcy5oZWlnaHQpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jdHhEcmF3SW1hZ2UoY3R4LCBgLi4vQ29tbW9uL3VzZXJfcG9zLnBuZ2AsIHVzZXJQb3NbMF0gLSAyNSwgdXNlclBvc1sxXSAtIDQ1LCA1MCwgNTApLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9hZGVkIEZhaWxlZCwgRXJyb3IgPSBcIiwgZXJyKTtcbiAgICAgIH0pO1xuICAgIH0sIDIwMCk7XG4gICAgcmVzID0gYXdhaXQgX3N5c3RlbS5kZWZhdWx0LmZldGNoKHtcbiAgICAgIHVybDogYCR7X2NvbnN0LmJhc2VVcmx9L2dldEFsbENhbWVyYWBcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJGYWlsZWQsIFwiLCBlcnIpO1xuICAgIH0pO1xuICAgIHJlc3VsdCA9IHJlcy5kYXRhO1xuXG4gICAgaWYgKHJlc3VsdC5jb2RlID09PSAyMDApIHtcbiAgICAgIGxldCBjYW1lcmFzID0gcmVzdWx0LmRhdGE7XG4gICAgICB0aGlzLmFsbGNhbWVyYXMgPSBhd2FpdCBKU09OLnBhcnNlKGNhbWVyYXMpO1xuICAgICAgdGhpcy5hbGxjYW1lcmFzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50LmZsb29yID09PSB0aGlzLmN1ckZsb29yKSB7XG4gICAgICAgICAgbGV0IGNhbWVyYV9wb3MgPSB0aGlzLmxsMkNhbnZhc0Nvb3IoZWxlbWVudC5sYXRpdHVkZSwgZWxlbWVudC5sb25naXR1ZGUsIHRoaXMuaXNVbmlvbklkZSA/IDY0MCA6IGNhbnZhcy53aWR0aCwgdGhpcy5pc1VuaW9uSWRlID8gNjQwIDogY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgbGV0IGNhbWVyYV9jZW50ZXJfcG9zX3ggPSBjYW1lcmFfcG9zWzBdIC0gMTU7XG4gICAgICAgICAgbGV0IGNhbWVyYV9jZW5lcl9wb3NfeSA9IGNhbWVyYV9wb3NbMV0gLSAyNDtcbiAgICAgICAgICBsZXQgaHRfdW5zYWZlX2NvbG9yID0gJ3JnYmEoMTk2LDI1LDI1LDQwKSc7XG4gICAgICAgICAgbGV0IGh0X3NhZmVfY29sb3IgPSAncmdiYSgwLDI1MSw4Miw0MCknO1xuXG4gICAgICAgICAgaWYgKGVsZW1lbnQubnVtcyA+IGVsZW1lbnQudGhyZXNob2xkIC8gMiB8fCAhZWxlbWVudC5pc2ZyZWUpIHtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBodF91bnNhZmVfY29sb3I7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBodF9zYWZlX2NvbG9yO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCByYW5nZSA9IDMwO1xuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50Lm51bXM7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJhbmROdW0xID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHJhbmdlICogMiArIDEpIC0gcmFuZ2UpO1xuICAgICAgICAgICAgbGV0IHJhbmROdW0yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHJhbmdlICogMiArIDEpIC0gcmFuZ2UpO1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KGNhbWVyYV9jZW50ZXJfcG9zX3ggKyByYW5kTnVtMSwgY2FtZXJhX2NlbmVyX3Bvc195ICsgcmFuZE51bTIsIDUsIDUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuY3R4RHJhd0ltYWdlKGN0eCwgJy4uL0NvbW1vbi9jYW1lcmEucG5nJywgY2FtZXJhX2NlbnRlcl9wb3NfeCwgY2FtZXJhX2NlbmVyX3Bvc195LCAzMCwgMzApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmZpcnN0RHJhdyA9IGZhbHNlO1xuICB9LFxuICBjaGFuZ2VmbG9vcjogYXN5bmMgZnVuY3Rpb24gKGV2dCkge1xuICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlIFRvIFwiLCBldnQubmV3VmFsdWUpO1xuXG4gICAgaWYgKGV2dC5uZXdWYWx1ZSAhPSB0aGlzLmN1ckZsb29yKSB7XG4gICAgICB0aGlzLmN1ckZsb29yID0gZXZ0Lm5ld1ZhbHVlO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudCBGbG9vcjogXCIsIHRoaXMuY3VyRmxvb3IpO1xuXG4gICAgaWYgKHRoaXMuZmlyc3REcmF3KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGNhbnZhcyA9IHRoaXMuJGVsZW1lbnQoJ21hcCcpO1xuICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuaXNVbmlvbklkZSA/IDY0MCA6IGNhbnZhcy53aWR0aCwgdGhpcy5pc1VuaW9uSWRlID8gNjQwIDogY2FudmFzLmhlaWdodCk7XG4gICAgYXdhaXQgdGhpcy5jdHhEcmF3SW1hZ2UoY3R4LCBgLi4vQ29tbW9uL21hcHMvbWFwJHt0aGlzLmN1ckZsb29yfWYuanBnYCwgMCwgMCwgdGhpcy5pc1VuaW9uSWRlID8gNjQwIDogY2FudmFzLndpZHRoLCB0aGlzLmlzVW5pb25JZGUgPyA2NDAgOiBjYW52YXMuaGVpZ2h0KS5jYXRjaChlcnIgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJMb2FkZWQgRmFpbGVkLCBFcnJvciA9IFwiLCBlcnIpO1xuICAgIH0pO1xuICAgIGxldCB1c2VyUG9zID0gdGhpcy5sbDJDYW52YXNDb29yKHRoaXMuaW5uZXJfcG9zLmxhdGl0dWRlLCB0aGlzLmlubmVyX3Bvcy5sb25naXR1ZGUsIHRoaXMuaXNVbmlvbklkZSA/IDY0MCA6IGNhbnZhcy53aWR0aCwgdGhpcy5pc1VuaW9uSWRlID8gNjQwIDogY2FudmFzLmhlaWdodCk7XG4gICAgY29uc29sZS5sb2codGhpcy5pbm5lcl9wb3MuZmxvb3IpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY3VyRmxvb3IpO1xuXG4gICAgaWYgKHRoaXMuaW5uZXJfcG9zLmZsb29yID09IHRoaXMuY3VyRmxvb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSXMgaGVyZVwiKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmN0eERyYXdJbWFnZShjdHgsIGAuLi9Db21tb24vdXNlcl9wb3MucG5nYCwgdXNlclBvc1swXSAtIDI1LCB1c2VyUG9zWzFdIC0gNDUsIDUwLCA1MCkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvYWRlZCBGYWlsZWQsIEVycm9yID0gXCIsIGVycik7XG4gICAgICAgIH0pO1xuICAgICAgfSwgMjAwKTtcbiAgICB9XG5cbiAgICB0aGlzLmFsbGNhbWVyYXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmZsb29yID09IHRoaXMuY3VyRmxvb3IpIHtcbiAgICAgICAgbGV0IGNhbWVyYV9wb3MgPSB0aGlzLmxsMkNhbnZhc0Nvb3IoZWxlbWVudC5sYXRpdHVkZSwgZWxlbWVudC5sb25naXR1ZGUsIHRoaXMuaXNVbmlvbklkZSA/IDY0MCA6IGNhbnZhcy53aWR0aCwgdGhpcy5pc1VuaW9uSWRlID8gNjQwIDogY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGxldCBjYW1lcmFfY2VudGVyX3Bvc194ID0gY2FtZXJhX3Bvc1swXSAtIDE1O1xuICAgICAgICBsZXQgY2FtZXJhX2NlbmVyX3Bvc195ID0gY2FtZXJhX3Bvc1sxXSAtIDI0O1xuICAgICAgICBsZXQgaHRfdW5zYWZlX2NvbG9yID0gJ3JnYmEoMTk2LDI1LDI1LDQwKSc7XG4gICAgICAgIGxldCBodF9zYWZlX2NvbG9yID0gJ3JnYmEoMCwyNTEsODIsNDApJztcblxuICAgICAgICBpZiAoZWxlbWVudC5udW1zID4gZWxlbWVudC50aHJlc2hvbGQgLyAyIHx8ICFlbGVtZW50LmlzZnJlZSkge1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBodF91bnNhZmVfY29sb3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGh0X3NhZmVfY29sb3I7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmFuZ2UgPSAzMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQubnVtczsgaSsrKSB7XG4gICAgICAgICAgbGV0IHJhbmROdW0xID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHJhbmdlICogMiArIDEpIC0gcmFuZ2UpO1xuICAgICAgICAgIGxldCByYW5kTnVtMiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChyYW5nZSAqIDIgKyAxKSAtIHJhbmdlKTtcbiAgICAgICAgICBjdHguZmlsbFJlY3QoY2FtZXJhX2NlbnRlcl9wb3NfeCArIHJhbmROdW0xLCBjYW1lcmFfY2VuZXJfcG9zX3kgKyByYW5kTnVtMiwgNSwgNSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN0eERyYXdJbWFnZShjdHgsICcuLi9Db21tb24vY2FtZXJhLnBuZycsIGNhbWVyYV9jZW50ZXJfcG9zX3gsIGNhbWVyYV9jZW5lcl9wb3NfeSwgMzAsIDMwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmZvdW5kKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi57un57utZHJhd3BhdGhcIik7XG4gICAgICAgIHRoaXMuZHJhd1BhdGgoKTtcbiAgICAgIH1cbiAgICB9LCA0MDApO1xuICB9LFxuICBzZWFyY2hQbGFjZTogYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuJGVsZW1lbnQoJ2lucHV0X3ZhbHVlJykuZm9jdXMoe1xuICAgICAgZm9jdXM6IGZhbHNlXG4gICAgfSk7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3ZhbHVlKTtcblxuICAgIGlmICh0aGlzLnNlYXJjaF92YWx1ZSA9PT0gXCJcIikge1xuICAgICAgX3N5c3RlbTIuZGVmYXVsdC5zaG93VG9hc3Qoe1xuICAgICAgICBtZXNzYWdlOiAn6K+36L6T5YWl55uu55qE5Zyw5YaN5pCc57SiJyxcbiAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcmVzID0gYXdhaXQgX3N5c3RlbS5kZWZhdWx0LmZldGNoKHtcbiAgICAgICAgdXJsOiBgJHtfY29uc3QuYmFzZVVybH0vZ2V0QmVzdFBhdGhXaXRoRGVzdD9jYW1lcmFpZD0ke3RoYXQuaW5uZXJfcG9zLmlkfSZkZXN0Q2FtZXJhSWQ9JHt0aGF0LnNlYXJjaF92YWx1ZX1gXG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsaW5nIGZhaWwsIGVycm9yOiBcIiwgZXJyKTtcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJjb2RlOiBcIiArIHJlcy5kYXRhLmNvZGUpO1xuXG4gICAgICBpZiAocmVzLmRhdGEuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgIHRoaXMuZm91bmQgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyhcImRhdGE6IFwiICsgcmVzLmRhdGEuZGF0YSk7XG4gICAgICAgIHRoaXMucm91dGUgPSBKU09OLnBhcnNlKHJlcy5kYXRhLmRhdGEpO1xuICAgICAgICB0aGlzLmNoYW5nZWZsb29yKHtcbiAgICAgICAgICBuZXdWYWx1ZTogdGhpcy5jdXJGbG9vclxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZm91bmQgPSBmYWxzZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBGb3VuZCBDb2RlID0gXCIsIHJlcy5kYXRhLmNvZGUpO1xuXG4gICAgICAgIGlmIChyZXMuZGF0YS5jb2RlID09IDQwNCkge1xuICAgICAgICAgIF9zeXN0ZW0yLmRlZmF1bHQuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICfmsqHmnInmib7liLDor6XoioLngrnvvIzovpPlhaXmnInor68nLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXMuZGF0YS5jb2RlID09IDUwMikge1xuICAgICAgICAgIF9zeXN0ZW0yLmRlZmF1bHQuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICfml6DmnInmlYjot6/lvoQnLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfc3lzdGVtMi5kZWZhdWx0LnNob3dUb2FzdCh7XG4gICAgICAgICAgICBtZXNzYWdlOiAn5pyq55+l6ZSZ6K+vJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHNlYXJjaF92YWx1ZV9jaGFuZ2VkOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgdGhpcy5zZWFyY2hfdmFsdWUgPSBldnQudmFsdWU7XG4gIH0sXG4gIGlkMm5hbWU6IGFzeW5jIGZ1bmN0aW9uIChjYW1lcmFpZCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgbmFtZSA9ICcnO1xuICAgIGxldCByZXMgPSBhd2FpdCBfc3lzdGVtLmRlZmF1bHQuZmV0Y2goe1xuICAgICAgdXJsOiBgJHtfY29uc3QuYmFzZVVybH0vZ2V0Q2FtZXJhP2lkPSR7Y2FtZXJhaWR9YFxuICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaGFuZGxpbmcgZmFpbCwgY29kZSA9IFwiICsgZXJyb3IpO1xuICAgICAgcmV0dXJuIFwiQ2Fubm90IEZvdW5kIFRoaXMgQ2FtZXJhXCI7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocmVzKTtcbiAgICBjb25zb2xlLmxvZyhcImNvZGU6IFwiICsgcmVzLmRhdGEuY29kZSk7XG4gICAgY29uc29sZS5sb2coXCJkYXRhOiBcIiArIHJlcy5kYXRhLmRhdGEpO1xuXG4gICAgaWYgKHJlcy5kYXRhLmNvZGUgPT09IDIwMCkge1xuICAgICAgbGV0IHJlID0gSlNPTi5wYXJzZShyZXMuZGF0YS5kYXRhKTtcbiAgICAgIGNvbnNvbGUubG9nKFwicmU6IFwiLCByZS5wb3NpdGlvbik7XG4gICAgICBuYW1lID0gcmUucG9zaXRpb247XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hbWU7XG4gIH0sXG5cbiAgbGwyQ2FudmFzQ29vcihsYXRpdHVkZSwgbG9uZ2l0dWRlLCBjYW52YXNfd2lkdGgsIGNhbnZhc19oZWlnaHQpIHtcbiAgICBjb25zb2xlLmxvZyhgY2FudmFzIHdpZHRoOiR7Y2FudmFzX3dpZHRofSxjYW52YXMgaGVpZ2h0OiR7Y2FudmFzX2hlaWdodH1gKTtcbiAgICBsZXQgY2FudmFzX3ggPSAwO1xuICAgIGxldCBjYW52YXNfeSA9IDA7XG4gICAgbGV0IGxlZnRfdmVydGljYWwgPSBmYWxzZTtcbiAgICBsZXQgdG9wX2hvcml6b250YWwgPSBmYWxzZTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmJ1aWxkaW5nX2Jhc2Vwb2ludHNbMF1bMF0pO1xuICAgIGxldCBsYiA9IHRoaXMuYnVpbGRpbmdfYmFzZXBvaW50c1swXTtcbiAgICBsZXQgcmIgPSB0aGlzLmJ1aWxkaW5nX2Jhc2Vwb2ludHNbMV07XG4gICAgbGV0IGx0ID0gdGhpcy5idWlsZGluZ19iYXNlcG9pbnRzWzJdO1xuICAgIGxldCBydCA9IHRoaXMuYnVpbGRpbmdfYmFzZXBvaW50c1szXTtcbiAgICBjb25zb2xlLmxvZyhgbGI6JHtsYn0scmI6JHtyYn0sbHQ6JHtsdH0scnQ6JHtydH1gKTtcbiAgICBsZXQgazEsIGIxLCBrMiwgYjI7XG4gICAgazEgPSAobHRbMF0gLSBsYlswXSkgLyAobHRbMV0gLSBsYlsxXSk7XG4gICAgazIgPSAobHRbMF0gLSBydFswXSkgLyAobHRbMV0gLSBydFsxXSk7XG4gICAgYjEgPSBsYlsxXSAtIGsxICogbGJbMF07XG4gICAgYjIgPSBsdFsxXSAtIGsyICogbHRbMF07XG4gICAgY29uc29sZS5sb2coYGsxOiR7azF9LGsyOiR7azJ9LGIxOiR7YjF9LGIyOiR7YjJ9YCk7XG5cbiAgICBpZiAoazEgPT09IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwi5bem6L6557q/5q615Z6C55u0XCIpO1xuICAgICAgbGVmdF92ZXJ0aWNhbCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoazIpKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIuS4iui+uee6v+auteawtOW5s1wiKTtcbiAgICAgIHRvcF9ob3Jpem9udGFsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobGVmdF92ZXJ0aWNhbCkge1xuICAgICAgY2FudmFzX3ggPSBsYXRpdHVkZSAtIGx0WzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYW52YXNfeCA9IE1hdGguYWJzKGsxICogbGF0aXR1ZGUgLSBsb25naXR1ZGUgKyBiMSkgLyBNYXRoLnNxcnQoazEgKiBrMSArIC0xICogLTEpO1xuICAgIH1cblxuICAgIGlmICh0b3BfaG9yaXpvbnRhbCkge1xuICAgICAgY2FudmFzX3kgPSBsdFsxXSAtIGxvbmdpdHVkZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FudmFzX3kgPSBNYXRoLmFicyhrMiAqIGxhdGl0dWRlIC0gbG9uZ2l0dWRlICsgYjIpIC8gTWF0aC5zcXJ0KGsyICogazIgKyAtMSAqIC0xKTtcbiAgICB9XG5cbiAgICBsZXQgYXNwZWN0X3ggPSBjYW52YXNfd2lkdGggLyBNYXRoLnNxcnQoKHJ0WzBdIC0gbHRbMF0pICogKHJ0WzBdIC0gbHRbMF0pICsgKHJ0WzFdIC0gbHRbMV0pICogKHJ0WzFdIC0gbHRbMV0pKTtcbiAgICBsZXQgYXNwZWN0X3kgPSBjYW52YXNfaGVpZ2h0IC8gTWF0aC5zcXJ0KChsdFswXSAtIGxiWzBdKSAqIChsdFswXSAtIGxiWzBdKSArIChsdFsxXSAtIGxiWzFdKSAqIChsdFsxXSAtIGxiWzFdKSk7XG4gICAgY2FudmFzX3ggKj0gYXNwZWN0X3g7XG4gICAgY2FudmFzX3kgKj0gYXNwZWN0X3k7XG4gICAgY29uc29sZS5sb2coYHg6JHtjYW52YXNfeH0seToke2NhbnZhc195fWApO1xuICAgIHJldHVybiBbY2FudmFzX3gsIGNhbnZhc195XTtcbiAgfSxcblxuICBhc3luYyBjdHhEcmF3SW1hZ2UoY3R4LCBwYXRoLCB4LCB5LCB3aWR0aCA9IDAsIGhlaWdodCA9IDApIHtcbiAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9IHBhdGg7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGltZy5vbmxvYWQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGDlm77lg4/liqDovb3lrozmiJA6JHtwYXRofWApO1xuXG4gICAgICAgIGlmICh3aWR0aCA9PT0gMCB8fCBoZWlnaHQgPT09IDApIHtcbiAgICAgICAgICBhd2FpdCBjdHguZHJhd0ltYWdlKGltZywgeCwgeSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXdhaXQgY3R4LmRyYXdJbWFnZShpbWcsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfTtcblxuICAgICAgaW1nLm9uZXJyb3IgPSBlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCLlm77lg4/liqDovb3lh7rplJlcIik7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sXG5cbiAgZHJhd1BhdGgoKSB7XG4gICAgbGV0IGNhbnZhcyA9IHRoaXMuJGVsZW1lbnQoJ21hcCcpO1xuICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHgubGluZVdpZHRoID0gMTA7XG4gICAgY3R4LmxpbmVDYXAgPSAncm91bmQnO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIHRoaXMucm91dGUucGF0aC5mb3JFYWNoKGkgPT4ge1xuICAgICAgY29uc29sZS5sb2coaSk7XG4gICAgICBsZXQgcmVzID0gdGhpcy5hbGxjYW1lcmFzLmZpbmQoZWxlID0+IGVsZS5pZCA9PSBpLm5vZGVpZCk7XG4gICAgICBjb25zb2xlLmxvZyhcInJlc1wiLCByZXMpO1xuXG4gICAgICBpZiAocmVzLmZsb29yID09IHRoaXMuY3VyRmxvb3IpIHtcbiAgICAgICAgbGV0IHJlc3BvcyA9IHRoaXMubGwyQ2FudmFzQ29vcihyZXMubGF0aXR1ZGUsIHJlcy5sb25naXR1ZGUsIHRoaXMuaXNVbmlvbklkZSA/IDY0MCA6IGNhbnZhcy53aWR0aCwgdGhpcy5pc1VuaW9uSWRlID8gNjQwIDogY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgY3R4Lm1vdmVUbyhyZXNwb3NbMF0sIHJlc3Bvc1sxXSAtIDUpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGDnp7vliqjliLAgJHtyZXNwb3NbMF19LCAke3Jlc3Bvc1sxXX1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHgubGluZVRvKHJlc3Bvc1swXSwgcmVzcG9zWzFdIC0gNSk7XG4gICAgICAgICAgY29uc29sZS5sb2coYOe7mOWItuWIsCAke3Jlc3Bvc1swXX0sICR7cmVzcG9zWzFdfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgY291bnQgKz0gMTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH0sXG5cbiAgcmVmcmVzaEFuZERyYXcoKSB7fVxuXG59O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSBkYXRhIG11c3Qgbm90IGNvZXhpc3Qgd2l0aCBwdWJsaWMsIHByb3RlY3RlZCwgb3IgcHJpdmF0ZS4gUGxlYXNlIHJlcGxhY2UgZGF0YSB3aXRoIHB1YmxpYy4nKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSAnICsgYWNjICsgJyB2YWx1ZSBtdXN0IG5vdCBiZSBhIGZ1bmN0aW9uLiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGFuIG9iamVjdC4nKTtcbiAgICB9XG4gIH0pO1xufX0iLCJ2YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9pbmRleC51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9L1VzZXJzL2J5dGVkYW5jZS9TQ1Uv5b+r5bqU55SoL2hhcGFwcC9jb20ucGVvcGxlLmZpbmFsMS9zcmMvSFRQaWN0dXJlL2luZGV4LnV4IS4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9L1VzZXJzL2J5dGVkYW5jZS9TQ1Uv5b+r5bqU55SoL2hhcGFwcC9jb20ucGVvcGxlLmZpbmFsMS9zcmMvSFRQaWN0dXJlL2luZGV4LnV4IS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT0vVXNlcnMvYnl0ZWRhbmNlL1NDVS/lv6vlupTnlKgvaGFwYXBwL2NvbS5wZW9wbGUuZmluYWwxL25vZGVfbW9kdWxlcy9AYmFiZWwvcHJlc2V0LWVudiZwbHVnaW5zW109L1VzZXJzL2J5dGVkYW5jZS9TQ1Uv5b+r5bqU55SoL2hhcGFwcC9jb20ucGVvcGxlLmZpbmFsMS9ub2RlX21vZHVsZXMvQGJhYmVsL3BsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109L1VzZXJzL2J5dGVkYW5jZS9TQ1Uv5b+r5bqU55SoL2hhcGFwcC9jb20ucGVvcGxlLmZpbmFsMS9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvanN4LWxvYWRlci5qcyZwbHVnaW5zW109L1VzZXJzL2J5dGVkYW5jZS9TQ1Uv5b+r5bqU55SoL2hhcGFwcC9jb20ucGVvcGxlLmZpbmFsMS9ub2RlX21vZHVsZXMvQGJhYmVsL3BsdWdpbi1wcm9wb3NhbC1jbGFzcy1wcm9wZXJ0aWVzJnBsdWdpbnNbXT0vVXNlcnMvYnl0ZWRhbmNlL1NDVS/lv6vlupTnlKgvaGFwYXBwL2NvbS5wZW9wbGUuZmluYWwxL25vZGVfbW9kdWxlcy9AYmFiZWwvcGx1Z2luLXByb3Bvc2FsLW9iamVjdC1yZXN0LXNwcmVhZCZjb21tZW50cz1mYWxzZSEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vaW5kZXgudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG5cbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLHsgcGFja2FnZXJOYW1lOidmYS10b29sa2l0JywgcGFja2FnZXJWZXJzaW9uOiAnMi41LjItU3RhYmxlLjMwMCd9KSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXREaXN0YW5jZUJ5TEwgPSBnZXREaXN0YW5jZUJ5TEw7XG5leHBvcnRzLk1lcmNhdG9yMmxvbkxhdCA9IE1lcmNhdG9yMmxvbkxhdDtcbmV4cG9ydHMubWFwT2JqZWN0ID0gZXhwb3J0cy5pc0pTT04gPSBleHBvcnRzLnVjVXJsID0gZXhwb3J0cy53ZWJVcmwgPSBleHBvcnRzLmJhc2VVcmwgPSB2b2lkIDA7XG5jb25zdCBiYXNlVXJsID0gJ2h0dHA6Ly8xODIuOTIuMjA4LjQ3Ojg4OTknO1xuZXhwb3J0cy5iYXNlVXJsID0gYmFzZVVybDtcbmNvbnN0IHdlYlVybCA9ICdodHRwOi8vMTgyLjkyLjIwOC40Nzo4MDg2L0luZG9vci8nOyAvL+e6v+S4iueOr+Wig1xuLy8gZXhwb3J0IGNvbnN0IHdlYlVybCA9ICdodHRwOi8vMTkyLjE2OC4xLjEwMzo4MDgwL21hcC9JbmRvb3IvJyAvL+a1i+ivleeOr+Wig1xuXG5leHBvcnRzLndlYlVybCA9IHdlYlVybDtcbmNvbnN0IHVjVXJsID0gJ2h0dHA6Ly8xOTIuMTY4LjEuMTAzOjgwODAvZmx1ZW50Lyc7IC8vIGV4cG9ydCBjb25zdCB1Y1VybCA9ICdodHRwOi8vMTgyLjkyLjIwOC40Nzo4MDg3LydcblxuZXhwb3J0cy51Y1VybCA9IHVjVXJsO1xuXG5jb25zdCBpc0pTT04gPSBmdW5jdGlvbiAoZGF0YSkge1xuICB0cnkge1xuICAgIGxldCByZXMgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgIHJldHVybiByZXM7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuZXhwb3J0cy5pc0pTT04gPSBpc0pTT047XG5jb25zdCBtYXBPYmplY3QgPSB7XG4gIG1pblg6IDEyNjgzNDA3Ljc4NjI4MzUsXG4gIG1heFg6IDEyNjgzNTIzLjcwNzgwMzcsXG4gIG1pblk6IDI1NTc4MzguMzU4ODgxLFxuICBtYXhZOiAyNTU3OTI3Ljc0NTk4MTIsXG4gIGNlbnRlcjoge1xuICAgIHg6IDEyNjgzNDY1Ljc0NzA0MzYsXG4gICAgeTogMjU1Nzg4My4wNTI0MzExXG4gIH1cbn07IC8vIOe7j+e6rOW6pui9rOaNouaIkOS4ieinkuWHveaVsOS4reW6puWIhuihqOW9ouW8j+OAglxuXG5leHBvcnRzLm1hcE9iamVjdCA9IG1hcE9iamVjdDtcblxuZnVuY3Rpb24gcmFkKGQpIHtcbiAgcmV0dXJuIGQgKiBNYXRoLlBJIC8gMTgwLjA7XG59IC8vIOagueaNrue7j+e6rOW6puiuoeeul+i3neemu++8jOWPguaVsOWIhuWIq+S4uuesrOS4gOeCueeahOe6rOW6pu+8jOe7j+W6pu+8m+esrOS6jOeCueeahOe6rOW6pu+8jOe7j+W6plxuXG5cbmZ1bmN0aW9uIGdldERpc3RhbmNlQnlMTChfbGF0MSwgX2xuZzEsIF9sYXQyLCBfbG5nMikge1xuICBsZXQgbGF0MSA9IE51bWJlcihfbGF0MSk7XG4gIGxldCBsYXQyID0gTnVtYmVyKF9sYXQyKTtcbiAgbGV0IGxuZzIgPSBOdW1iZXIoX2xuZzIpO1xuICBsZXQgbG5nMSA9IE51bWJlcihfbG5nMik7XG4gIGNvbnNvbGUubG9nKGDlvIDlp4vorqHnrpcgJHtsYXQxfSAke2xhdDJ9ICR7bG5nMX0gJHtsbmcyfWApO1xuICB2YXIgcmFkTGF0MSA9IHJhZChsYXQxKTtcbiAgdmFyIHJhZExhdDIgPSByYWQobGF0Mik7XG4gIHZhciBhID0gcmFkTGF0MSAtIHJhZExhdDI7XG4gIHZhciBiID0gcmFkKGxuZzEpIC0gcmFkKGxuZzIpO1xuICB2YXIgcyA9IDIgKiBNYXRoLmFzaW4oTWF0aC5zcXJ0KE1hdGgucG93KE1hdGguc2luKGEgLyAyKSwgMikgKyBNYXRoLmNvcyhyYWRMYXQxKSAqIE1hdGguY29zKHJhZExhdDIpICogTWF0aC5wb3coTWF0aC5zaW4oYiAvIDIpLCAyKSkpO1xuICBzID0gcyAqIDYzNzguMTM3OyAvLyBFQVJUSF9SQURJVVM7XG5cbiAgcyA9IE1hdGgucm91bmQocyAqIDEwMDAwKSAvIDEwMDAwOyAvL+i+k+WHuuS4uuWFrOmHjFxuXG4gIHZhciBkaXN0YW5jZSA9IHM7XG4gIHZhciBkaXN0YW5jZV9zdHIgPSBcIlwiO1xuICBjb25zb2xlLmxvZyhcIuW+l+WHuueahOi3neemu1wiLCBzKTtcblxuICBpZiAocGFyc2VJbnQoZGlzdGFuY2UpID49IDEpIHtcbiAgICBkaXN0YW5jZV9zdHIgPSBkaXN0YW5jZS50b0ZpeGVkKDEpICsgXCJrbVwiO1xuICB9IGVsc2Uge1xuICAgIGRpc3RhbmNlX3N0ciA9IChkaXN0YW5jZSAqIDEwMDApLnRvRml4ZWQoMSkgKyBcIm1cIjtcbiAgfSAvL3M9cy50b0ZpeGVkKDQpO1xuXG5cbiAgY29uc29sZS5pbmZvKCdseWog6Led56a75pivJywgcyk7XG4gIGNvbnNvbGUuaW5mbygnbHlqIOi3neemu+aYrycsIGRpc3RhbmNlX3N0cik7XG4gIHJldHVybiBkaXN0YW5jZV9zdHI7XG59XG5cbmZ1bmN0aW9uIE1lcmNhdG9yMmxvbkxhdChtZXJjYXRvclgsIG1lcmNhdG9yWSkge1xuICB2YXIgeHkgPSBbXTtcbiAgdmFyIHggPSBtZXJjYXRvclggLyAyMDAzNzUwOC4zNCAqIDE4MDtcbiAgdmFyIHkgPSBtZXJjYXRvclkgLyAyMDAzNzUwOC4zNCAqIDE4MDtcbiAgeSA9IDE4MCAvIE1hdGguUEkgKiAoMiAqIE1hdGguYXRhbihNYXRoLmV4cCh5ICogTWF0aC5QSSAvIDE4MCkpIC0gTWF0aC5QSSAvIDIpO1xuICB4eS5wdXNoKHgpO1xuICB4eS5wdXNoKHkpO1xuICByZXR1cm4geHk7XG59Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNyWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9