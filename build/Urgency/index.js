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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Urgency/index.ux");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/Urgency/index.ux!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/Urgency/index.ux!./src/Urgency/index.ux":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/Urgency/index.ux!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/Urgency/index.ux!./src/Urgency/index.ux ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
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
  ".btns": {
    "marginTop": "30px",
    "width": "100%",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".btns .btn": {
    "width": "100%",
    "height": "120px",
    "borderRadius": "40px",
    "backgroundColor": "#FFFFFF",
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
  ".btn-text": {
    "color": "#111111",
    "fontSize": "30px",
    "fontWeight": "700"
  },
  ".btn-primary": {
    "backgroundColor": "#008DF8"
  },
  ".container": {
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignContent": "center",
    "alignItems": "center"
  },
  ".bestroute": {
    "paddingTop": "30px",
    "paddingRight": "30px",
    "paddingBottom": "30px",
    "paddingLeft": "30px",
    "width": "680px",
    "backgroundColor": "rgba(0,0,0,0)",
    "justifyContent": "space-around",
    "flexDirection": "column",
    "alignItems": "center",
    "marginBottom": "30px"
  },
  ".route-title": {
    "fontSize": "40px",
    "color": "#111111",
    "fontWeight": "700",
    "paddingTop": "30px",
    "paddingBottom": "30px",
    "width": "100%",
    "borderRadius": "40px",
    "backgroundColor": "#FFFFFF",
    "textAlign": "center",
    "marginBottom": "30px"
  },
  ".bestroute .inner_route": {
    "marginTop": "30px",
    "marginBottom": "30px",
    "justifyContent": "space-around",
    "flexDirection": "column",
    "alignItems": "center",
    "width": "100%",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "40px",
    "paddingTop": "40px",
    "paddingRight": "10px",
    "paddingBottom": "40px",
    "paddingLeft": "10px"
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
  ".inner_text": {
    "fontSize": "34px",
    "fontWeight": "500",
    "color": "#333333"
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
  },
  ".loading": {
    "backgroundColor": "#FFFFFF",
    "paddingTop": "30px",
    "paddingRight": "30px",
    "paddingBottom": "30px",
    "paddingLeft": "30px",
    "width": "100%",
    "fontSize": "35px",
    "fontFamily": "800",
    "borderRadius": "40px",
    "textAlign": "center"
  },
  ".web-container": {
    "width": "640px",
    "height": "640px",
    "borderRadius": "20px"
  }
}

/***/ }),

/***/ "./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./src/Urgency/index.ux":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./src/Urgency/index.ux ***!
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
            "bestroute"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "当前最佳逃生路线"
              },
              "classList": [
                "route-title"
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "inner_route"
              ],
              "shown": function () {return this.route!==null?true:false},
              "children": [
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
                            "value": function () {return this.$item.position}
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
                }
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "正在载入中"
              },
              "classList": [
                "loading"
              ],
              "shown": function () {return !(this.route!==null?true:false)}
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "btns"
              ],
              "shown": function () {return this.found},
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "btn"
                  ],
                  "events": {
                    "click": "getIntoMap"
                  },
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": "进入室内地图查看紧急路线"
                      },
                      "classList": [
                        "btn-text"
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

/***/ "./node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/preset-env&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./src/Urgency/index.ux":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./node_modules/babel-loader/lib?presets[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/preset-env&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./src/Urgency/index.ux ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.router"));

var _bt = _interopRequireDefault(__webpack_require__(/*! ../Common/bt.js */ "./src/Common/bt.js"));

var _const = __webpack_require__(/*! ../const */ "./src/const.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  public: {
    inner_pos: '',
    title: 'World',
    building_basepoints: null,
    curFloor: 2,
    allcameras: null,
    firstDraw: true,
    route: null,
    found: false,
    isUnionIde: false
  },
  onInit: function () {
    console.log("Inner POS ", this.inner_pos);
    console.log("Pos type", typeof this.inner_pos);

    if (this.inner_pos != '') {
      this.inner_pos = JSON.parse(this.inner_pos);
      console.log("after Converted,latitude", this.inner_pos.latitude);
    } else {
      console.log("inner_pos究竟是？", this.inner_pos);
      console.error("服务未启动!");
    }
  },
  onShow: async function () {
    console.log("show");
    this.$page.setTitleBar({
      text: "应急路线",
      backgroundColor: '#008df8'
    });
    let that = this;
    await this.getBestPath();
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

  async getBestPath() {
    let res = await _system.default.fetch({
      url: `${_const.baseUrl}/getBestPath?cameraid=${this.inner_pos.id}`
    }).catch(err => {
      console.log("Error GBP", err);
    });
    let result = res.data;

    if (result.code === 200) {
      this.found = true;
      this.route = JSON.parse(result.data);
    } else {
      console.error("Bad Response, Code:", result.code);
    }
  },

  loadESMap() {
    const webview = $app_require$('@app-module/system.webview');

    webview.loadUrl({
      url: 'http://192.168.1.6:8080/RouteAnalyser/RouteAnalyser/testForReplaceCanvas.html'
    });
  },

  disabledPageMove: function (event) {
    event.stopPropagation();
    return false;
  },
  getIntoMap: function () {
    _system3.default.push({
      uri: '/Indoor',
      params: {
        routeFrom: 'Urgency'
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

/***/ "./src/Urgency/index.ux":
/*!******************************!*\
  !*** ./src/Urgency/index.ux ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!../../node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./index.ux */ "./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./src/Urgency/index.ux")
var $app_style$ = __webpack_require__(/*! !../../node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/Urgency/index.ux!../../node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/Urgency/index.ux!./index.ux */ "./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/Urgency/index.ux!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/Urgency/index.ux!./src/Urgency/index.ux")
var $app_script$ = __webpack_require__(/*! !../../node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!../../node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!../../node_modules/babel-loader?presets[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/preset-env&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!../../node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./index.ux */ "./node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/preset-env&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./src/Urgency/index.ux")

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQvVXJnZW5jeS9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvVXJnZW5jeS9pbmRleC51eD9hNmE5Iiwid2VicGFjazovLy8uL3NyYy9VcmdlbmN5L2luZGV4LnV4PzMyZGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VyZ2VuY3kvaW5kZXgudXg/YjBkNCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tbW9uL2J0LmpzIiwid2VicGFjazovLy8uL3NyYy9VcmdlbmN5L2luZGV4LnV4Iiwid2VicGFjazovLy8uL3NyYy9jb25zdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9VcmdlbmN5L2luZGV4LnV4XCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLm1hcC1oZXJvXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwMDhkZjhcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1hcm91bmRcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBweFwiXG4gIH0sXG4gIFwiLm1hcC1jb250YWluZXJcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjIwcHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjMwcHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMwcHhcIlxuICB9LFxuICBcIiNtYXBcIjoge1xuICAgIFwid2lkdGhcIjogXCI2NDBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNjQwcHhcIlxuICB9LFxuICBcIi5sZWdlbmRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMzBweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMzBweFwiLFxuICAgIFwid2lkdGhcIjogXCI2ODBweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMjBweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1hcm91bmRcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBweFwiXG4gIH0sXG4gIFwiLmxpcGljXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNDBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDBweFwiXG4gIH0sXG4gIFwiLmxpdHh0XCI6IHtcbiAgICBcImZvbnRXZWlnaHRcIjogXCI2MDBcIixcbiAgICBcImNvbG9yXCI6IFwiIzExMTExMVwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyNXB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBweFwiXG4gIH0sXG4gIFwiLmZsb29yX3NlbGVjdG9yXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjgwcHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYXJvdW5kXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMHB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMzBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjMwcHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjMwcHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMwcHhcIlxuICB9LFxuICBcIi5mbG9vcl9zZWxlY3RvciAuZGVzY1wiOiB7XG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNjAwXCIsXG4gICAgXCJjb2xvclwiOiBcIiMxMTExMTFcIlxuICB9LFxuICBcIi5mbG9vcl9zZWxlY3RvciAuZmxvb3Jfb3BpbmlvblwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNjAwXCJcbiAgfSxcbiAgXCIuYnRuc1wiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMHB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLmJ0bnMgLmJ0blwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImhlaWdodFwiOiBcIjEyMHB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI0MHB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjRweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjRweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCI0cHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjRweFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjZGRkZGRkXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiI2RkZGRkZFwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZGRkZGRkXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjZGRkZGRkXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5idG4tdGV4dFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMxMTExMTFcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzBweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjcwMFwiXG4gIH0sXG4gIFwiLmJ0bi1wcmltYXJ5XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwMDhERjhcIlxuICB9LFxuICBcIi5jb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJhbGlnbkNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5iZXN0cm91dGVcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjMwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcHhcIixcbiAgICBcIndpZHRoXCI6IFwiNjgwcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMClcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYXJvdW5kXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzMHB4XCJcbiAgfSxcbiAgXCIucm91dGUtdGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI0MHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMxMTExMTFcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI3MDBcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBweFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI0MHB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMwcHhcIlxuICB9LFxuICBcIi5iZXN0cm91dGUgLmlubmVyX3JvdXRlXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjMwcHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMwcHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYXJvdW5kXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjQwcHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCI0MHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNDBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHB4XCJcbiAgfSxcbiAgXCIucGF0aF9jb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnBhdGhfY29udGFpbmVyIC5wYXRoLWl0ZW1cIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICAgIFwiZm9udFNpemVcIjogXCI0MnB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNjAwXCJcbiAgfSxcbiAgXCIuaW5uZXJfdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjM0cHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI1MDBcIixcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiXG4gIH0sXG4gIFwiLnBhdGhfY29udGFpbmVyIC5wYXRoLXBvaW50ZXJcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMzJweFwiLFxuICAgIFwid2lkdGhcIjogXCIzMnB4XCJcbiAgfSxcbiAgXCIubm90X2ZvdW5kXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiNDBweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjYwMFwiLFxuICAgIFwid2lkdGhcIjogXCI3NSVcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjMwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjE1cHhcIlxuICB9LFxuICBcIi5sb2FkaW5nXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzVweFwiLFxuICAgIFwiZm9udEZhbWlseVwiOiBcIjgwMFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNDBweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIud2ViLWNvbnRhaW5lclwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjY0MHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI2NDBweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMjBweFwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY29udGFpbmVyXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibWFwLWhlcm9cIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiYmVzdHJvdXRlXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuW9k+WJjeacgOS9s+mAg+eUn+i3r+e6v1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInJvdXRlLXRpdGxlXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiaW5uZXJfcm91dGVcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yb3V0ZSE9PW51bGw/dHJ1ZTpmYWxzZX0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInBhdGhfY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucm91dGUucGF0aH0sXG4gICAgICAgICAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5mb3VuZH0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhdGgtaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLnBvc2l0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbm5lcl90ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiL0NvbW1vbi9kb3duLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhdGgtcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yb3V0ZS5wYXRoLmxlbmd0aC0xIT09dGhpcy4kaWR4fVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuato+WcqOi9veWFpeS4rVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImxvYWRpbmdcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gISh0aGlzLnJvdXRlIT09bnVsbD90cnVlOmZhbHNlKX1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImJ0bnNcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5mb3VuZH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImJ0blwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwiZ2V0SW50b01hcFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLov5vlhaXlrqTlhoXlnLDlm77mn6XnnIvntKfmgKXot6/nur9cIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJidG4tdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG52YXIgX3N5c3RlbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5mZXRjaFwiKSk7XG5cbnZhciBfc3lzdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5wcm9tcHRcIikpO1xuXG52YXIgX3N5c3RlbTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0ucm91dGVyXCIpKTtcblxudmFyIF9idCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL0NvbW1vbi9idC5qc1wiKSk7XG5cbnZhciBfY29uc3QgPSByZXF1aXJlKFwiLi4vY29uc3RcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwdWJsaWM6IHtcbiAgICBpbm5lcl9wb3M6ICcnLFxuICAgIHRpdGxlOiAnV29ybGQnLFxuICAgIGJ1aWxkaW5nX2Jhc2Vwb2ludHM6IG51bGwsXG4gICAgY3VyRmxvb3I6IDIsXG4gICAgYWxsY2FtZXJhczogbnVsbCxcbiAgICBmaXJzdERyYXc6IHRydWUsXG4gICAgcm91dGU6IG51bGwsXG4gICAgZm91bmQ6IGZhbHNlLFxuICAgIGlzVW5pb25JZGU6IGZhbHNlXG4gIH0sXG4gIG9uSW5pdDogZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwiSW5uZXIgUE9TIFwiLCB0aGlzLmlubmVyX3Bvcyk7XG4gICAgY29uc29sZS5sb2coXCJQb3MgdHlwZVwiLCB0eXBlb2YgdGhpcy5pbm5lcl9wb3MpO1xuXG4gICAgaWYgKHRoaXMuaW5uZXJfcG9zICE9ICcnKSB7XG4gICAgICB0aGlzLmlubmVyX3BvcyA9IEpTT04ucGFyc2UodGhpcy5pbm5lcl9wb3MpO1xuICAgICAgY29uc29sZS5sb2coXCJhZnRlciBDb252ZXJ0ZWQsbGF0aXR1ZGVcIiwgdGhpcy5pbm5lcl9wb3MubGF0aXR1ZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcImlubmVyX3Bvc+eptuern+aYr++8n1wiLCB0aGlzLmlubmVyX3Bvcyk7XG4gICAgICBjb25zb2xlLmVycm9yKFwi5pyN5Yqh5pyq5ZCv5YqoIVwiKTtcbiAgICB9XG4gIH0sXG4gIG9uU2hvdzogYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwic2hvd1wiKTtcbiAgICB0aGlzLiRwYWdlLnNldFRpdGxlQmFyKHtcbiAgICAgIHRleHQ6IFwi5bqU5oCl6Lev57q/XCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDA4ZGY4J1xuICAgIH0pO1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBhd2FpdCB0aGlzLmdldEJlc3RQYXRoKCk7XG4gIH0sXG4gIGNoYW5nZWZsb29yOiBhc3luYyBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgY29uc29sZS5sb2coXCJDaGFuZ2UgVG8gXCIsIGV2dC5uZXdWYWx1ZSk7XG5cbiAgICBpZiAoZXZ0Lm5ld1ZhbHVlICE9IHRoaXMuY3VyRmxvb3IpIHtcbiAgICAgIHRoaXMuY3VyRmxvb3IgPSBldnQubmV3VmFsdWU7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJDdXJyZW50IEZsb29yOiBcIiwgdGhpcy5jdXJGbG9vcik7XG5cbiAgICBpZiAodGhpcy5maXJzdERyYXcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgY2FudmFzID0gdGhpcy4kZWxlbWVudCgnbWFwJyk7XG4gICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5pc1VuaW9uSWRlID8gNjQwIDogY2FudmFzLndpZHRoLCB0aGlzLmlzVW5pb25JZGUgPyA2NDAgOiBjYW52YXMuaGVpZ2h0KTtcbiAgICBhd2FpdCB0aGlzLmN0eERyYXdJbWFnZShjdHgsIGAuLi9Db21tb24vbWFwcy9tYXAke3RoaXMuY3VyRmxvb3J9Zi5qcGdgLCAwLCAwLCB0aGlzLmlzVW5pb25JZGUgPyA2NDAgOiBjYW52YXMud2lkdGgsIHRoaXMuaXNVbmlvbklkZSA/IDY0MCA6IGNhbnZhcy5oZWlnaHQpLmNhdGNoKGVyciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkxvYWRlZCBGYWlsZWQsIEVycm9yID0gXCIsIGVycik7XG4gICAgfSk7XG4gICAgbGV0IHVzZXJQb3MgPSB0aGlzLmxsMkNhbnZhc0Nvb3IodGhpcy5pbm5lcl9wb3MubGF0aXR1ZGUsIHRoaXMuaW5uZXJfcG9zLmxvbmdpdHVkZSwgdGhpcy5pc1VuaW9uSWRlID8gNjQwIDogY2FudmFzLndpZHRoLCB0aGlzLmlzVW5pb25JZGUgPyA2NDAgOiBjYW52YXMuaGVpZ2h0KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmlubmVyX3Bvcy5mbG9vcik7XG4gICAgY29uc29sZS5sb2codGhpcy5jdXJGbG9vcik7XG5cbiAgICBpZiAodGhpcy5pbm5lcl9wb3MuZmxvb3IgPT0gdGhpcy5jdXJGbG9vcikge1xuICAgICAgY29uc29sZS5sb2coXCJJcyBoZXJlXCIpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY3R4RHJhd0ltYWdlKGN0eCwgYC4uL0NvbW1vbi91c2VyX3Bvcy5wbmdgLCB1c2VyUG9zWzBdIC0gMjUsIHVzZXJQb3NbMV0gLSA0NSwgNTAsIDUwKS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9hZGVkIEZhaWxlZCwgRXJyb3IgPSBcIiwgZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICB9LCAyMDApO1xuICAgIH1cblxuICAgIHRoaXMuYWxsY2FtZXJhcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuZmxvb3IgPT0gdGhpcy5jdXJGbG9vcikge1xuICAgICAgICBsZXQgY2FtZXJhX3BvcyA9IHRoaXMubGwyQ2FudmFzQ29vcihlbGVtZW50LmxhdGl0dWRlLCBlbGVtZW50LmxvbmdpdHVkZSwgdGhpcy5pc1VuaW9uSWRlID8gNjQwIDogY2FudmFzLndpZHRoLCB0aGlzLmlzVW5pb25JZGUgPyA2NDAgOiBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgbGV0IGNhbWVyYV9jZW50ZXJfcG9zX3ggPSBjYW1lcmFfcG9zWzBdIC0gMTU7XG4gICAgICAgIGxldCBjYW1lcmFfY2VuZXJfcG9zX3kgPSBjYW1lcmFfcG9zWzFdIC0gMjQ7XG4gICAgICAgIGxldCBodF91bnNhZmVfY29sb3IgPSAncmdiYSgxOTYsMjUsMjUsNDApJztcbiAgICAgICAgbGV0IGh0X3NhZmVfY29sb3IgPSAncmdiYSgwLDI1MSw4Miw0MCknO1xuXG4gICAgICAgIGlmIChlbGVtZW50Lm51bXMgPiBlbGVtZW50LnRocmVzaG9sZCAvIDIgfHwgIWVsZW1lbnQuaXNmcmVlKSB7XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGh0X3Vuc2FmZV9jb2xvcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gaHRfc2FmZV9jb2xvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByYW5nZSA9IDMwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5udW1zOyBpKyspIHtcbiAgICAgICAgICBsZXQgcmFuZE51bTEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAocmFuZ2UgKiAyICsgMSkgLSByYW5nZSk7XG4gICAgICAgICAgbGV0IHJhbmROdW0yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHJhbmdlICogMiArIDEpIC0gcmFuZ2UpO1xuICAgICAgICAgIGN0eC5maWxsUmVjdChjYW1lcmFfY2VudGVyX3Bvc194ICsgcmFuZE51bTEsIGNhbWVyYV9jZW5lcl9wb3NfeSArIHJhbmROdW0yLCA1LCA1KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3R4RHJhd0ltYWdlKGN0eCwgJy4uL0NvbW1vbi9jYW1lcmEucG5nJywgY2FtZXJhX2NlbnRlcl9wb3NfeCwgY2FtZXJhX2NlbmVyX3Bvc195LCAzMCwgMzApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZm91bmQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLnu6fnu61kcmF3cGF0aFwiKTtcbiAgICAgICAgdGhpcy5kcmF3UGF0aCgpO1xuICAgICAgfVxuICAgIH0sIDQwMCk7XG4gIH0sXG5cbiAgbGwyQ2FudmFzQ29vcihsYXRpdHVkZSwgbG9uZ2l0dWRlLCBjYW52YXNfd2lkdGgsIGNhbnZhc19oZWlnaHQpIHtcbiAgICBjb25zb2xlLmxvZyhgY2FudmFzIHdpZHRoOiR7Y2FudmFzX3dpZHRofSxjYW52YXMgaGVpZ2h0OiR7Y2FudmFzX2hlaWdodH1gKTtcbiAgICBsZXQgY2FudmFzX3ggPSAwO1xuICAgIGxldCBjYW52YXNfeSA9IDA7XG4gICAgbGV0IGxlZnRfdmVydGljYWwgPSBmYWxzZTtcbiAgICBsZXQgdG9wX2hvcml6b250YWwgPSBmYWxzZTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmJ1aWxkaW5nX2Jhc2Vwb2ludHNbMF1bMF0pO1xuICAgIGxldCBsYiA9IHRoaXMuYnVpbGRpbmdfYmFzZXBvaW50c1swXTtcbiAgICBsZXQgcmIgPSB0aGlzLmJ1aWxkaW5nX2Jhc2Vwb2ludHNbMV07XG4gICAgbGV0IGx0ID0gdGhpcy5idWlsZGluZ19iYXNlcG9pbnRzWzJdO1xuICAgIGxldCBydCA9IHRoaXMuYnVpbGRpbmdfYmFzZXBvaW50c1szXTtcbiAgICBjb25zb2xlLmxvZyhgbGI6JHtsYn0scmI6JHtyYn0sbHQ6JHtsdH0scnQ6JHtydH1gKTtcbiAgICBsZXQgazEsIGIxLCBrMiwgYjI7XG4gICAgazEgPSAobHRbMF0gLSBsYlswXSkgLyAobHRbMV0gLSBsYlsxXSk7XG4gICAgazIgPSAobHRbMF0gLSBydFswXSkgLyAobHRbMV0gLSBydFsxXSk7XG4gICAgYjEgPSBsYlsxXSAtIGsxICogbGJbMF07XG4gICAgYjIgPSBsdFsxXSAtIGsyICogbHRbMF07XG4gICAgY29uc29sZS5sb2coYGsxOiR7azF9LGsyOiR7azJ9LGIxOiR7YjF9LGIyOiR7YjJ9YCk7XG5cbiAgICBpZiAoazEgPT09IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwi5bem6L6557q/5q615Z6C55u0XCIpO1xuICAgICAgbGVmdF92ZXJ0aWNhbCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoazIpKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIuS4iui+uee6v+auteawtOW5s1wiKTtcbiAgICAgIHRvcF9ob3Jpem9udGFsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobGVmdF92ZXJ0aWNhbCkge1xuICAgICAgY2FudmFzX3ggPSBsYXRpdHVkZSAtIGx0WzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYW52YXNfeCA9IE1hdGguYWJzKGsxICogbGF0aXR1ZGUgLSBsb25naXR1ZGUgKyBiMSkgLyBNYXRoLnNxcnQoazEgKiBrMSArIC0xICogLTEpO1xuICAgIH1cblxuICAgIGlmICh0b3BfaG9yaXpvbnRhbCkge1xuICAgICAgY2FudmFzX3kgPSBsdFsxXSAtIGxvbmdpdHVkZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FudmFzX3kgPSBNYXRoLmFicyhrMiAqIGxhdGl0dWRlIC0gbG9uZ2l0dWRlICsgYjIpIC8gTWF0aC5zcXJ0KGsyICogazIgKyAtMSAqIC0xKTtcbiAgICB9XG5cbiAgICBsZXQgYXNwZWN0X3ggPSBjYW52YXNfd2lkdGggLyBNYXRoLnNxcnQoKHJ0WzBdIC0gbHRbMF0pICogKHJ0WzBdIC0gbHRbMF0pICsgKHJ0WzFdIC0gbHRbMV0pICogKHJ0WzFdIC0gbHRbMV0pKTtcbiAgICBsZXQgYXNwZWN0X3kgPSBjYW52YXNfaGVpZ2h0IC8gTWF0aC5zcXJ0KChsdFswXSAtIGxiWzBdKSAqIChsdFswXSAtIGxiWzBdKSArIChsdFsxXSAtIGxiWzFdKSAqIChsdFsxXSAtIGxiWzFdKSk7XG4gICAgY2FudmFzX3ggKj0gYXNwZWN0X3g7XG4gICAgY2FudmFzX3kgKj0gYXNwZWN0X3k7XG4gICAgY29uc29sZS5sb2coYHg6JHtjYW52YXNfeH0seToke2NhbnZhc195fWApO1xuICAgIHJldHVybiBbY2FudmFzX3gsIGNhbnZhc195XTtcbiAgfSxcblxuICBhc3luYyBjdHhEcmF3SW1hZ2UoY3R4LCBwYXRoLCB4LCB5LCB3aWR0aCA9IDAsIGhlaWdodCA9IDApIHtcbiAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9IHBhdGg7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGltZy5vbmxvYWQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGDlm77lg4/liqDovb3lrozmiJA6JHtwYXRofWApO1xuXG4gICAgICAgIGlmICh3aWR0aCA9PT0gMCB8fCBoZWlnaHQgPT09IDApIHtcbiAgICAgICAgICBhd2FpdCBjdHguZHJhd0ltYWdlKGltZywgeCwgeSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXdhaXQgY3R4LmRyYXdJbWFnZShpbWcsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfTtcblxuICAgICAgaW1nLm9uZXJyb3IgPSBlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCLlm77lg4/liqDovb3lh7rplJlcIik7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sXG5cbiAgZHJhd1BhdGgoKSB7XG4gICAgbGV0IGNhbnZhcyA9IHRoaXMuJGVsZW1lbnQoJ21hcCcpO1xuICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHgubGluZVdpZHRoID0gMTA7XG4gICAgY3R4LmxpbmVDYXAgPSAncm91bmQnO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIHRoaXMucm91dGUucGF0aC5mb3JFYWNoKGkgPT4ge1xuICAgICAgY29uc29sZS5sb2coaSk7XG4gICAgICBsZXQgcmVzID0gdGhpcy5hbGxjYW1lcmFzLmZpbmQoZWxlID0+IGVsZS5pZCA9PSBpLm5vZGVpZCk7XG4gICAgICBjb25zb2xlLmxvZyhcInJlc1wiLCByZXMpO1xuXG4gICAgICBpZiAocmVzLmZsb29yID09IHRoaXMuY3VyRmxvb3IpIHtcbiAgICAgICAgbGV0IHJlc3BvcyA9IHRoaXMubGwyQ2FudmFzQ29vcihyZXMubGF0aXR1ZGUsIHJlcy5sb25naXR1ZGUsIHRoaXMuaXNVbmlvbklkZSA/IDY0MCA6IGNhbnZhcy53aWR0aCwgdGhpcy5pc1VuaW9uSWRlID8gNjQwIDogY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgY3R4Lm1vdmVUbyhyZXNwb3NbMF0sIHJlc3Bvc1sxXSAtIDUpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGDnp7vliqjliLAgJHtyZXNwb3NbMF19LCAke3Jlc3Bvc1sxXX1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHgubGluZVRvKHJlc3Bvc1swXSwgcmVzcG9zWzFdIC0gNSk7XG4gICAgICAgICAgY29uc29sZS5sb2coYOe7mOWItuWIsCAke3Jlc3Bvc1swXX0sICR7cmVzcG9zWzFdfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgY291bnQgKz0gMTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH0sXG5cbiAgYXN5bmMgZ2V0QmVzdFBhdGgoKSB7XG4gICAgbGV0IHJlcyA9IGF3YWl0IF9zeXN0ZW0uZGVmYXVsdC5mZXRjaCh7XG4gICAgICB1cmw6IGAke19jb25zdC5iYXNlVXJsfS9nZXRCZXN0UGF0aD9jYW1lcmFpZD0ke3RoaXMuaW5uZXJfcG9zLmlkfWBcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvciBHQlBcIiwgZXJyKTtcbiAgICB9KTtcbiAgICBsZXQgcmVzdWx0ID0gcmVzLmRhdGE7XG5cbiAgICBpZiAocmVzdWx0LmNvZGUgPT09IDIwMCkge1xuICAgICAgdGhpcy5mb3VuZCA9IHRydWU7XG4gICAgICB0aGlzLnJvdXRlID0gSlNPTi5wYXJzZShyZXN1bHQuZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJCYWQgUmVzcG9uc2UsIENvZGU6XCIsIHJlc3VsdC5jb2RlKTtcbiAgICB9XG4gIH0sXG5cbiAgbG9hZEVTTWFwKCkge1xuICAgIGNvbnN0IHdlYnZpZXcgPSAkYXBwX3JlcXVpcmUkKCdAYXBwLW1vZHVsZS9zeXN0ZW0ud2VidmlldycpO1xuXG4gICAgd2Vidmlldy5sb2FkVXJsKHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xOTIuMTY4LjEuNjo4MDgwL1JvdXRlQW5hbHlzZXIvUm91dGVBbmFseXNlci90ZXN0Rm9yUmVwbGFjZUNhbnZhcy5odG1sJ1xuICAgIH0pO1xuICB9LFxuXG4gIGRpc2FibGVkUGFnZU1vdmU6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcbiAgZ2V0SW50b01hcDogZnVuY3Rpb24gKCkge1xuICAgIF9zeXN0ZW0zLmRlZmF1bHQucHVzaCh7XG4gICAgICB1cmk6ICcvSW5kb29yJyxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICByb3V0ZUZyb206ICdVcmdlbmN5J1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2xhdW5jaEFwcCBzdWNjZXNzIC4nKTtcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2xhdW5jaEFwcCBmYWlsIDonICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2xhdW5jaEFwcCBjb21wbGV0ZS4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIGJsdWUgdG9vdGggc3VwcG9ydFxuLy8gdmFyIGJsdWV0b290aCA9ICRhcHBfcmVxdWlyZSQoICdAYXBwLW1vZHVsZS9zeXN0ZW0uYmx1ZXRvb3RoJyk7XG4vLyBjYW1lcmEgZGV2aWNlIHNldFxudmFyIHNwZWNpZmljX2RldmljZV9zZXQgPSBuZXcgU2V0KCk7IC8vIG1haW5cblxuYXN5bmMgZnVuY3Rpb24gYnQoYmx1ZXRvb3RoLCBmaW5kX2NhbWVyYV9jYWxsYmFjaykge1xuICAvLyBvcGVuIGJsdWV0b290aFxuICBibHVldG9vdGgub3BlbkFkYXB0ZXIoe1xuICAgIG9wZXJhdGVBZGFwdGVyOiB0cnVlLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NcIik7XG4gICAgICBibHVldG9vdGguZ2V0QWRhcHRlclN0YXRlKHtcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgaGFuZGxpbmcgYWRhcHRlciBzdGF0ZSwgYXZhaWxhYmxlID0gJHtkYXRhLmF2YWlsYWJsZX0sIGRpc2NvdmVyaW5nID0gJHtkYXRhLmRpc2NvdmVyaW5nfWApO1xuICAgICAgICB9LFxuICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZGF0YSwgY29kZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBoYW5kbGluZyBmYWlsLCBjb2RlID0gJHtjb2RlfSBkYXRhID0gJHtkYXRhfWApO1xuICAgICAgICB9LFxuICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdjb21wbGV0ZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGZhaWw6IGZ1bmN0aW9uIChkYXRhLCBjb2RlKSB7XG4gICAgICBjb25zb2xlLmxvZyhgYnQgb3BlbiBmYWlsLCBjb2RlID0gJHtjb2RlfSwgZGF0YT0ke2RhdGF9YCk7XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiY29tcGxldGVkIVwiKTtcbiAgICB9XG4gIH0pOyAvLyDlnKjmiavmj4/kuYvliY3lhYjms6jlhozorr7lpIflj5HnjrDlm57osINcblxuICBibHVldG9vdGgub25kZXZpY2Vmb3VuZCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgY29uc29sZS5sb2coXCJEYXRhXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICBibHVldG9vdGguZ2V0RGV2aWNlcyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkdldCBEZXZpY2VzXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgIGRhdGEuZGV2aWNlcy5mb3JFYWNoKGRldmljZSA9PiB7XG4gICAgICAgICAgbGV0IGRldmljZV9uYW1lID0gZGV2aWNlLm5hbWU7XG5cbiAgICAgICAgICBpZiAoZGV2aWNlX25hbWUuc3Vic3RyaW5nKDAsIDMpID09IFwiT1ctXCIpIHtcbiAgICAgICAgICAgIC8vIOWPkeeOsOS6hmNhbWVyYeaJjeWBnOatouaJq+aPj++8jOS/neivgeavj+asoemDveS8muWQkeiwg+eUqOiAhei/lOWbnuacieaViOaVsOaNrlxuICAgICAgICAgICAgYmx1ZXRvb3RoLnN0b3BEZXZpY2VzRGlzY292ZXJ5KCk7XG4gICAgICAgICAgICBibHVldG9vdGguY2xvc2VBZGFwdGVyKHtcbiAgICAgICAgICAgICAgb3BlcmF0ZUFkYXB0ZXI6IGZhbHNlLFxuICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZGF0YSwgY29kZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBidCBvcGVuIGZhaWwsIGNvZGUgPSAke2NvZGV9LCBkYXRhPSR7ZGF0YX1gKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsZXQgY2FtZXJhX2lkID0gZGV2aWNlX25hbWUuc3Vic3RyaW5nKDMpO1xuICAgICAgICAgICAgc3BlY2lmaWNfZGV2aWNlX3NldC5hZGQoe1xuICAgICAgICAgICAgICBjYW1lcmFfaWQ6IE51bWJlcihjYW1lcmFfaWQpLFxuICAgICAgICAgICAgICBSU1NJOiBkZXZpY2UuUlNTSVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmaW5kX2NhbWVyYV9jYWxsYmFjayhbLi4uc3BlY2lmaWNfZGV2aWNlX3NldF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7IC8vIOS4iuWxguWbnuiwg1xuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWbnuiwg+S9v+eUqOaWueazle+8mlxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqICBmdW5jdGlvbihhbGxfY2FtZXJhX2xpc3QpIHtcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiAgICAvLyBhbGxfY2FtZXJhX2xpc3TmmK9saXN0XHJcbiAgICAgICAgICogICAgYWxsX2NhbWVyYV9saXN0LmZvckVhY2goZGV2aWNlX2l0ZW0gPT4ge1xyXG4gICAgICAgICAqICAgICAgICBsZXQgY2FtZXJhX2lkID0gZGV2aWNlX2l0ZW0uY2FtZXJhX2lkOyAvLyBOdW1iZXLnsbvlnotcclxuICAgICAgICAgKiAgICAgICAgbGV0IHN0cm9uZyAgICA9IGRldmljZV9pdGVtLlJTU0k7ICAgICAgLy8gTnVtYmVy57G75Z6LICAgXHJcbiAgICAgICAgICogICAgfSk7XHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogfVxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqL1xuICAgICAgfVxuICAgIH0pO1xuICB9OyAvL+W8gOWni+aJq+aPj1xuXG5cbiAgYmx1ZXRvb3RoLnN0YXJ0RGV2aWNlc0Rpc2NvdmVyeSh7XG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coJ3N0YXJ0IGRpc2NvdmVyeSBzdWNjZXNzJyk7XG4gICAgfSxcbiAgICBmYWlsOiBmdW5jdGlvbiAoZGF0YSwgY29kZSkge1xuICAgICAgY29uc29sZS5sb2coYGJ0IHN0YXJ0IGRpc2NvdmVyeSBmYWlsLCBjb2RlID0gJHtjb2RlfSwgZGF0YT0ke2RhdGF9YCk7XG4gICAgfVxuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidDsiLCJ2YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9pbmRleC51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9L1VzZXJzL2J5dGVkYW5jZS9TQ1Uv5b+r5bqU55SoL2hhcGFwcC9jb20ucGVvcGxlLmZpbmFsMS9zcmMvVXJnZW5jeS9pbmRleC51eCEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPS9Vc2Vycy9ieXRlZGFuY2UvU0NVL+W/q+W6lOeUqC9oYXBhcHAvY29tLnBlb3BsZS5maW5hbDEvc3JjL1VyZ2VuY3kvaW5kZXgudXghLi9pbmRleC51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1zY3JpcHQtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPS9Vc2Vycy9ieXRlZGFuY2UvU0NVL+W/q+W6lOeUqC9oYXBhcHAvY29tLnBlb3BsZS5maW5hbDEvbm9kZV9tb2R1bGVzL0BiYWJlbC9wcmVzZXQtZW52JnBsdWdpbnNbXT0vVXNlcnMvYnl0ZWRhbmNlL1NDVS/lv6vlupTnlKgvaGFwYXBwL2NvbS5wZW9wbGUuZmluYWwxL25vZGVfbW9kdWxlcy9AYmFiZWwvcGx1Z2luLXRyYW5zZm9ybS1tb2R1bGVzLWNvbW1vbmpzJnBsdWdpbnNbXT0vVXNlcnMvYnl0ZWRhbmNlL1NDVS/lv6vlupTnlKgvaGFwYXBwL2NvbS5wZW9wbGUuZmluYWwxL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9qc3gtbG9hZGVyLmpzJnBsdWdpbnNbXT0vVXNlcnMvYnl0ZWRhbmNlL1NDVS/lv6vlupTnlKgvaGFwYXBwL2NvbS5wZW9wbGUuZmluYWwxL25vZGVfbW9kdWxlcy9AYmFiZWwvcGx1Z2luLXByb3Bvc2FsLWNsYXNzLXByb3BlcnRpZXMmcGx1Z2luc1tdPS9Vc2Vycy9ieXRlZGFuY2UvU0NVL+W/q+W6lOeUqC9oYXBhcHAvY29tLnBlb3BsZS5maW5hbDEvbm9kZV9tb2R1bGVzL0BiYWJlbC9wbHVnaW4tcHJvcG9zYWwtb2JqZWN0LXJlc3Qtc3ByZWFkJmNvbW1lbnRzPWZhbHNlIS4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9pbmRleC51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L2luZGV4JywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gJGFwcF90ZW1wbGF0ZSRcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSAkYXBwX3N0eWxlJFxufSlcblxuJGFwcF9ib290c3RyYXAkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcseyBwYWNrYWdlck5hbWU6J2ZhLXRvb2xraXQnLCBwYWNrYWdlclZlcnNpb246ICcyLjUuMi1TdGFibGUuMzAwJ30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldERpc3RhbmNlQnlMTCA9IGdldERpc3RhbmNlQnlMTDtcbmV4cG9ydHMuTWVyY2F0b3IybG9uTGF0ID0gTWVyY2F0b3IybG9uTGF0O1xuZXhwb3J0cy5tYXBPYmplY3QgPSBleHBvcnRzLmlzSlNPTiA9IGV4cG9ydHMudWNVcmwgPSBleHBvcnRzLndlYlVybCA9IGV4cG9ydHMuYmFzZVVybCA9IHZvaWQgMDtcbmNvbnN0IGJhc2VVcmwgPSAnaHR0cDovLzE4Mi45Mi4yMDguNDc6ODg5OSc7XG5leHBvcnRzLmJhc2VVcmwgPSBiYXNlVXJsO1xuY29uc3Qgd2ViVXJsID0gJ2h0dHA6Ly8xODIuOTIuMjA4LjQ3OjgwODYvSW5kb29yLyc7IC8v57q/5LiK546v5aKDXG4vLyBleHBvcnQgY29uc3Qgd2ViVXJsID0gJ2h0dHA6Ly8xOTIuMTY4LjEuMTAzOjgwODAvbWFwL0luZG9vci8nIC8v5rWL6K+V546v5aKDXG5cbmV4cG9ydHMud2ViVXJsID0gd2ViVXJsO1xuY29uc3QgdWNVcmwgPSAnaHR0cDovLzE5Mi4xNjguMS4xMDM6ODA4MC9mbHVlbnQvJzsgLy8gZXhwb3J0IGNvbnN0IHVjVXJsID0gJ2h0dHA6Ly8xODIuOTIuMjA4LjQ3OjgwODcvJ1xuXG5leHBvcnRzLnVjVXJsID0gdWNVcmw7XG5cbmNvbnN0IGlzSlNPTiA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHRyeSB7XG4gICAgbGV0IHJlcyA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5leHBvcnRzLmlzSlNPTiA9IGlzSlNPTjtcbmNvbnN0IG1hcE9iamVjdCA9IHtcbiAgbWluWDogMTI2ODM0MDcuNzg2MjgzNSxcbiAgbWF4WDogMTI2ODM1MjMuNzA3ODAzNyxcbiAgbWluWTogMjU1NzgzOC4zNTg4ODEsXG4gIG1heFk6IDI1NTc5MjcuNzQ1OTgxMixcbiAgY2VudGVyOiB7XG4gICAgeDogMTI2ODM0NjUuNzQ3MDQzNixcbiAgICB5OiAyNTU3ODgzLjA1MjQzMTFcbiAgfVxufTsgLy8g57uP57qs5bqm6L2s5o2i5oiQ5LiJ6KeS5Ye95pWw5Lit5bqm5YiG6KGo5b2i5byP44CCXG5cbmV4cG9ydHMubWFwT2JqZWN0ID0gbWFwT2JqZWN0O1xuXG5mdW5jdGlvbiByYWQoZCkge1xuICByZXR1cm4gZCAqIE1hdGguUEkgLyAxODAuMDtcbn0gLy8g5qC55o2u57uP57qs5bqm6K6h566X6Led56a777yM5Y+C5pWw5YiG5Yir5Li656ys5LiA54K555qE57qs5bqm77yM57uP5bqm77yb56ys5LqM54K555qE57qs5bqm77yM57uP5bqmXG5cblxuZnVuY3Rpb24gZ2V0RGlzdGFuY2VCeUxMKF9sYXQxLCBfbG5nMSwgX2xhdDIsIF9sbmcyKSB7XG4gIGxldCBsYXQxID0gTnVtYmVyKF9sYXQxKTtcbiAgbGV0IGxhdDIgPSBOdW1iZXIoX2xhdDIpO1xuICBsZXQgbG5nMiA9IE51bWJlcihfbG5nMik7XG4gIGxldCBsbmcxID0gTnVtYmVyKF9sbmcyKTtcbiAgY29uc29sZS5sb2coYOW8gOWni+iuoeeulyAke2xhdDF9ICR7bGF0Mn0gJHtsbmcxfSAke2xuZzJ9YCk7XG4gIHZhciByYWRMYXQxID0gcmFkKGxhdDEpO1xuICB2YXIgcmFkTGF0MiA9IHJhZChsYXQyKTtcbiAgdmFyIGEgPSByYWRMYXQxIC0gcmFkTGF0MjtcbiAgdmFyIGIgPSByYWQobG5nMSkgLSByYWQobG5nMik7XG4gIHZhciBzID0gMiAqIE1hdGguYXNpbihNYXRoLnNxcnQoTWF0aC5wb3coTWF0aC5zaW4oYSAvIDIpLCAyKSArIE1hdGguY29zKHJhZExhdDEpICogTWF0aC5jb3MocmFkTGF0MikgKiBNYXRoLnBvdyhNYXRoLnNpbihiIC8gMiksIDIpKSk7XG4gIHMgPSBzICogNjM3OC4xMzc7IC8vIEVBUlRIX1JBRElVUztcblxuICBzID0gTWF0aC5yb3VuZChzICogMTAwMDApIC8gMTAwMDA7IC8v6L6T5Ye65Li65YWs6YeMXG5cbiAgdmFyIGRpc3RhbmNlID0gcztcbiAgdmFyIGRpc3RhbmNlX3N0ciA9IFwiXCI7XG4gIGNvbnNvbGUubG9nKFwi5b6X5Ye655qE6Led56a7XCIsIHMpO1xuXG4gIGlmIChwYXJzZUludChkaXN0YW5jZSkgPj0gMSkge1xuICAgIGRpc3RhbmNlX3N0ciA9IGRpc3RhbmNlLnRvRml4ZWQoMSkgKyBcImttXCI7XG4gIH0gZWxzZSB7XG4gICAgZGlzdGFuY2Vfc3RyID0gKGRpc3RhbmNlICogMTAwMCkudG9GaXhlZCgxKSArIFwibVwiO1xuICB9IC8vcz1zLnRvRml4ZWQoNCk7XG5cblxuICBjb25zb2xlLmluZm8oJ2x5aiDot53nprvmmK8nLCBzKTtcbiAgY29uc29sZS5pbmZvKCdseWog6Led56a75pivJywgZGlzdGFuY2Vfc3RyKTtcbiAgcmV0dXJuIGRpc3RhbmNlX3N0cjtcbn1cblxuZnVuY3Rpb24gTWVyY2F0b3IybG9uTGF0KG1lcmNhdG9yWCwgbWVyY2F0b3JZKSB7XG4gIHZhciB4eSA9IFtdO1xuICB2YXIgeCA9IG1lcmNhdG9yWCAvIDIwMDM3NTA4LjM0ICogMTgwO1xuICB2YXIgeSA9IG1lcmNhdG9yWSAvIDIwMDM3NTA4LjM0ICogMTgwO1xuICB5ID0gMTgwIC8gTWF0aC5QSSAqICgyICogTWF0aC5hdGFuKE1hdGguZXhwKHkgKiBNYXRoLlBJIC8gMTgwKSkgLSBNYXRoLlBJIC8gMik7XG4gIHh5LnB1c2goeCk7XG4gIHh5LnB1c2goeSk7XG4gIHJldHVybiB4eTtcbn0iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQy9MQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDN0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=