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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/EmergencyEvents/index.ux");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/EmergencyEvents/index.ux!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/EmergencyEvents/index.ux!./src/EmergencyEvents/index.ux":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/EmergencyEvents/index.ux!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/EmergencyEvents/index.ux!./src/EmergencyEvents/index.ux ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".btn": {
    "width": "50%",
    "height": "80px",
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
    "alignItems": "center",
    "marginTop": "30px"
  },
  ".btn-text": {
    "color": "#333333",
    "fontWeight": "700",
    "fontSize": "30px"
  },
  ".container": {
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignContent": "center",
    "alignItems": "center"
  },
  ".hero": {
    "backgroundColor": "#008df8",
    "height": "400px",
    "width": "100%",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center"
  },
  ".title": {
    "fontSize": "75px",
    "fontWeight": "700",
    "color": "#ffffff",
    "letterSpacing": "10px"
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
  ".emergency_events": {
    "width": "90%",
    "backgroundColor": "#FFFFFF",
    "paddingTop": "30px",
    "paddingBottom": "30px",
    "flexDirection": "column"
  },
  ".emergency_item": {
    "borderTopWidth": "5px",
    "borderRightWidth": "5px",
    "borderBottomWidth": "5px",
    "borderLeftWidth": "5px",
    "borderStyle": "solid",
    "borderTopColor": "#cccccc",
    "borderRightColor": "#cccccc",
    "borderBottomColor": "#cccccc",
    "borderLeftColor": "#cccccc",
    "borderRadius": "30px",
    "marginTop": "30px",
    "marginBottom": "30px",
    "paddingTop": "30px",
    "paddingRight": "30px",
    "paddingBottom": "30px",
    "paddingLeft": "30px",
    "justifyContent": "space-around",
    "flexDirection": "column"
  },
  ".emergency_item .emergency_title": {
    "fontSize": "50px",
    "fontWeight": "600"
  },
  ".emergency_item .emergency_place": {
    "fontSize": "30px",
    "fontWeight": "600"
  }
}

/***/ }),

/***/ "./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./src/EmergencyEvents/index.ux":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./src/EmergencyEvents/index.ux ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
        "hero"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return (this.accidents===null?0:this.accidents.length)+'项紧急事件'}
          },
          "classList": [
            "title"
          ]
        },
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
                "value": "进入室内地图查看详情"
              },
              "classList": [
                "btn-text"
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
            "emergency_events"
          ],
          "shown": function () {return this.accidents!==null},
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "emergency_item"
              ],
              "repeat": function () {return this.accidents},
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return '事件:'+(this.$item.description)}
                  },
                  "classList": [
                    "emergency_title"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return '地点:'+(this.$item.position)}
                  },
                  "classList": [
                    "emergency_place"
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

/***/ "./node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/preset-env&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./src/EmergencyEvents/index.ux":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./node_modules/babel-loader/lib?presets[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/preset-env&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./src/EmergencyEvents/index.ux ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _const = __webpack_require__(/*! ../const.js */ "./src/const.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  public: {
    accidents: null
  },
  onInit: async function () {
    if (this.accidents === null) {
      let res = await _system2.default.fetch({
        url: `${_const.baseUrl}/getCurrentAccidents`
      }).catch(err => {
        console.error(err);
      });
      let result = res.data;

      if (result.code === 200) {
        this.accidents = JSON.parse(result.data);
      } else {
        console.log("ERROR GCA");
        this.accidents = [];
      }
    } else {
      this.accidents = JSON.parse(this.accidents);
      console.log(JSON.stringify(this.accidents));
    }
  },
  onShow: function () {
    console.log("show");
    this.$page.setTitleBar({
      text: "紧急事件列表",
      backgroundColor: '#008df8'
    });
  },
  getIntoMap: function () {
    _system.default.push({
      uri: '/Indoor',
      params: {
        routeFrom: 'EmergencyEvents'
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

/***/ "./src/EmergencyEvents/index.ux":
/*!**************************************!*\
  !*** ./src/EmergencyEvents/index.ux ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!../../node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./index.ux */ "./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./src/EmergencyEvents/index.ux")
var $app_style$ = __webpack_require__(/*! !../../node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!../../node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/EmergencyEvents/index.ux!../../node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/EmergencyEvents/index.ux!./index.ux */ "./node_modules/fa-toolkit/lib/fa-compiler/fa-json-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/EmergencyEvents/index.ux!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/src/EmergencyEvents/index.ux!./src/EmergencyEvents/index.ux")
var $app_script$ = __webpack_require__(/*! !../../node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!../../node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!../../node_modules/babel-loader?presets[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/preset-env&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!../../node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./index.ux */ "./node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!./node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/preset-env&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-class-properties&plugins[]=/Users/bytedance/SCU/快应用/hapapp/com.people.final1/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!./node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./src/EmergencyEvents/index.ux")

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQvRW1lcmdlbmN5RXZlbnRzL2luZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL3NyYy9FbWVyZ2VuY3lFdmVudHMvaW5kZXgudXg/Yzg0YiIsIndlYnBhY2s6Ly8vLi9zcmMvRW1lcmdlbmN5RXZlbnRzL2luZGV4LnV4P2Y4NTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VtZXJnZW5jeUV2ZW50cy9pbmRleC51eD9hNGNmIiwid2VicGFjazovLy8uL3NyYy9FbWVyZ2VuY3lFdmVudHMvaW5kZXgudXgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL0VtZXJnZW5jeUV2ZW50cy9pbmRleC51eFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5idG5cIjoge1xuICAgIFwid2lkdGhcIjogXCI1MCVcIixcbiAgICBcImhlaWdodFwiOiBcIjgwcHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjQwcHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiNHB4XCIsXG4gICAgXCJib3JkZXJSaWdodFdpZHRoXCI6IFwiNHB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjRweFwiLFxuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IFwiNHB4XCIsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiNkZGRkZGRcIixcbiAgICBcImJvcmRlclJpZ2h0Q29sb3JcIjogXCIjZGRkZGRkXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNkZGRkZGRcIixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcIiNkZGRkZGRcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMzBweFwiXG4gIH0sXG4gIFwiLmJ0bi10ZXh0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjcwMFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMHB4XCJcbiAgfSxcbiAgXCIuY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwiYWxpZ25Db250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuaGVyb1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDA4ZGY4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI0MDBweFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiNzVweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjcwMFwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJsZXR0ZXJTcGFjaW5nXCI6IFwiMTBweFwiXG4gIH0sXG4gIFwiLm1haW5cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjMwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcHhcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiLTMwcHhcIixcbiAgICBcImJvcmRlclRvcFJpZ2h0UmFkaXVzXCI6IFwiMzBweFwiLFxuICAgIFwiYm9yZGVyVG9wTGVmdFJhZGl1c1wiOiBcIjMwcHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYXJvdW5kXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCIuZW1lcmdlbmN5X2V2ZW50c1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjkwJVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjMwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMHB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCIuZW1lcmdlbmN5X2l0ZW1cIjoge1xuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCI1cHhcIixcbiAgICBcImJvcmRlclJpZ2h0V2lkdGhcIjogXCI1cHhcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiNXB4XCIsXG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogXCI1cHhcIixcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI2NjY2NjY1wiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcIiNjY2NjY2NcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI2NjY2NjY1wiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiI2NjY2NjY1wiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMzBweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMzBweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMzBweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjMwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYXJvdW5kXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCIuZW1lcmdlbmN5X2l0ZW0gLmVtZXJnZW5jeV90aXRsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjUwcHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI2MDBcIlxuICB9LFxuICBcIi5lbWVyZ2VuY3lfaXRlbSAuZW1lcmdlbmN5X3BsYWNlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzBweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjYwMFwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY29udGFpbmVyXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiaGVyb1wiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy5hY2NpZGVudHM9PT1udWxsPzA6dGhpcy5hY2NpZGVudHMubGVuZ3RoKSsn6aG557Sn5oCl5LqL5Lu2J31cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwidGl0bGVcIlxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImJ0blwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IFwiZ2V0SW50b01hcFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLov5vlhaXlrqTlhoXlnLDlm77mn6XnnIvor6bmg4VcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJidG4tdGV4dFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIm1haW5cIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiZW1lcmdlbmN5X2V2ZW50c1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5hY2NpZGVudHMhPT1udWxsfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiZW1lcmdlbmN5X2l0ZW1cIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYWNjaWRlbnRzfSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICfkuovku7Y6JysodGhpcy4kaXRlbS5kZXNjcmlwdGlvbil9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImVtZXJnZW5jeV90aXRsZVwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gJ+WcsOeCuTonKyh0aGlzLiRpdGVtLnBvc2l0aW9uKX1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiZW1lcmdlbmN5X3BsYWNlXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgJGFwcF9yZXF1aXJlJCl7XCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfc3lzdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLnJvdXRlclwiKSk7XG5cbnZhciBfc3lzdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5mZXRjaFwiKSk7XG5cbnZhciBfY29uc3QgPSByZXF1aXJlKFwiLi4vY29uc3QuanNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwdWJsaWM6IHtcbiAgICBhY2NpZGVudHM6IG51bGxcbiAgfSxcbiAgb25Jbml0OiBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuYWNjaWRlbnRzID09PSBudWxsKSB7XG4gICAgICBsZXQgcmVzID0gYXdhaXQgX3N5c3RlbTIuZGVmYXVsdC5mZXRjaCh7XG4gICAgICAgIHVybDogYCR7X2NvbnN0LmJhc2VVcmx9L2dldEN1cnJlbnRBY2NpZGVudHNgXG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcbiAgICAgIGxldCByZXN1bHQgPSByZXMuZGF0YTtcblxuICAgICAgaWYgKHJlc3VsdC5jb2RlID09PSAyMDApIHtcbiAgICAgICAgdGhpcy5hY2NpZGVudHMgPSBKU09OLnBhcnNlKHJlc3VsdC5kYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1IgR0NBXCIpO1xuICAgICAgICB0aGlzLmFjY2lkZW50cyA9IFtdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjY2lkZW50cyA9IEpTT04ucGFyc2UodGhpcy5hY2NpZGVudHMpO1xuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5hY2NpZGVudHMpKTtcbiAgICB9XG4gIH0sXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwic2hvd1wiKTtcbiAgICB0aGlzLiRwYWdlLnNldFRpdGxlQmFyKHtcbiAgICAgIHRleHQ6IFwi57Sn5oCl5LqL5Lu25YiX6KGoXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDA4ZGY4J1xuICAgIH0pO1xuICB9LFxuICBnZXRJbnRvTWFwOiBmdW5jdGlvbiAoKSB7XG4gICAgX3N5c3RlbS5kZWZhdWx0LnB1c2goe1xuICAgICAgdXJpOiAnL0luZG9vcicsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgcm91dGVGcm9tOiAnRW1lcmdlbmN5RXZlbnRzJ1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2xhdW5jaEFwcCBzdWNjZXNzIC4nKTtcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2xhdW5jaEFwcCBmYWlsIDonICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2xhdW5jaEFwcCBjb21wbGV0ZS4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19IiwidmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPS9Vc2Vycy9ieXRlZGFuY2UvU0NVL+W/q+W6lOeUqC9oYXBhcHAvY29tLnBlb3BsZS5maW5hbDEvc3JjL0VtZXJnZW5jeUV2ZW50cy9pbmRleC51eCEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPS9Vc2Vycy9ieXRlZGFuY2UvU0NVL+W/q+W6lOeUqC9oYXBhcHAvY29tLnBlb3BsZS5maW5hbDEvc3JjL0VtZXJnZW5jeUV2ZW50cy9pbmRleC51eCEuL2luZGV4LnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9wcmVzZXRzW109L1VzZXJzL2J5dGVkYW5jZS9TQ1Uv5b+r5bqU55SoL2hhcGFwcC9jb20ucGVvcGxlLmZpbmFsMS9ub2RlX21vZHVsZXMvQGJhYmVsL3ByZXNldC1lbnYmcGx1Z2luc1tdPS9Vc2Vycy9ieXRlZGFuY2UvU0NVL+W/q+W6lOeUqC9oYXBhcHAvY29tLnBlb3BsZS5maW5hbDEvbm9kZV9tb2R1bGVzL0BiYWJlbC9wbHVnaW4tdHJhbnNmb3JtLW1vZHVsZXMtY29tbW9uanMmcGx1Z2luc1tdPS9Vc2Vycy9ieXRlZGFuY2UvU0NVL+W/q+W6lOeUqC9oYXBhcHAvY29tLnBlb3BsZS5maW5hbDEvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2pzeC1sb2FkZXIuanMmcGx1Z2luc1tdPS9Vc2Vycy9ieXRlZGFuY2UvU0NVL+W/q+W6lOeUqC9oYXBhcHAvY29tLnBlb3BsZS5maW5hbDEvbm9kZV9tb2R1bGVzL0BiYWJlbC9wbHVnaW4tcHJvcG9zYWwtY2xhc3MtcHJvcGVydGllcyZwbHVnaW5zW109L1VzZXJzL2J5dGVkYW5jZS9TQ1Uv5b+r5bqU55SoL2hhcGFwcC9jb20ucGVvcGxlLmZpbmFsMS9ub2RlX21vZHVsZXMvQGJhYmVsL3BsdWdpbi1wcm9wb3NhbC1vYmplY3QtcmVzdC1zcHJlYWQmY29tbWVudHM9ZmFsc2UhLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2luZGV4LnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuXG4kYXBwX2Jvb3RzdHJhcCQoJ0BhcHAtY29tcG9uZW50L2luZGV4Jyx7IHBhY2thZ2VyTmFtZTonZmEtdG9vbGtpdCcsIHBhY2thZ2VyVmVyc2lvbjogJzIuNS4yLVN0YWJsZS4zMDAnfSkiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0RGlzdGFuY2VCeUxMID0gZ2V0RGlzdGFuY2VCeUxMO1xuZXhwb3J0cy5NZXJjYXRvcjJsb25MYXQgPSBNZXJjYXRvcjJsb25MYXQ7XG5leHBvcnRzLm1hcE9iamVjdCA9IGV4cG9ydHMuaXNKU09OID0gZXhwb3J0cy51Y1VybCA9IGV4cG9ydHMud2ViVXJsID0gZXhwb3J0cy5iYXNlVXJsID0gdm9pZCAwO1xuY29uc3QgYmFzZVVybCA9ICdodHRwOi8vMTgyLjkyLjIwOC40Nzo4ODk5JztcbmV4cG9ydHMuYmFzZVVybCA9IGJhc2VVcmw7XG5jb25zdCB3ZWJVcmwgPSAnaHR0cDovLzE4Mi45Mi4yMDguNDc6ODA4Ni9JbmRvb3IvJzsgLy/nur/kuIrnjq/looNcbi8vIGV4cG9ydCBjb25zdCB3ZWJVcmwgPSAnaHR0cDovLzE5Mi4xNjguMS4xMDM6ODA4MC9tYXAvSW5kb29yLycgLy/mtYvor5Xnjq/looNcblxuZXhwb3J0cy53ZWJVcmwgPSB3ZWJVcmw7XG5jb25zdCB1Y1VybCA9ICdodHRwOi8vMTkyLjE2OC4xLjEwMzo4MDgwL2ZsdWVudC8nOyAvLyBleHBvcnQgY29uc3QgdWNVcmwgPSAnaHR0cDovLzE4Mi45Mi4yMDguNDc6ODA4Ny8nXG5cbmV4cG9ydHMudWNVcmwgPSB1Y1VybDtcblxuY29uc3QgaXNKU09OID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgdHJ5IHtcbiAgICBsZXQgcmVzID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICByZXR1cm4gcmVzO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmV4cG9ydHMuaXNKU09OID0gaXNKU09OO1xuY29uc3QgbWFwT2JqZWN0ID0ge1xuICBtaW5YOiAxMjY4MzQwNy43ODYyODM1LFxuICBtYXhYOiAxMjY4MzUyMy43MDc4MDM3LFxuICBtaW5ZOiAyNTU3ODM4LjM1ODg4MSxcbiAgbWF4WTogMjU1NzkyNy43NDU5ODEyLFxuICBjZW50ZXI6IHtcbiAgICB4OiAxMjY4MzQ2NS43NDcwNDM2LFxuICAgIHk6IDI1NTc4ODMuMDUyNDMxMVxuICB9XG59OyAvLyDnu4/nuqzluqbovazmjaLmiJDkuInop5Llh73mlbDkuK3luqbliIbooajlvaLlvI/jgIJcblxuZXhwb3J0cy5tYXBPYmplY3QgPSBtYXBPYmplY3Q7XG5cbmZ1bmN0aW9uIHJhZChkKSB7XG4gIHJldHVybiBkICogTWF0aC5QSSAvIDE4MC4wO1xufSAvLyDmoLnmja7nu4/nuqzluqborqHnrpfot53nprvvvIzlj4LmlbDliIbliKvkuLrnrKzkuIDngrnnmoTnuqzluqbvvIznu4/luqbvvJvnrKzkuozngrnnmoTnuqzluqbvvIznu4/luqZcblxuXG5mdW5jdGlvbiBnZXREaXN0YW5jZUJ5TEwoX2xhdDEsIF9sbmcxLCBfbGF0MiwgX2xuZzIpIHtcbiAgbGV0IGxhdDEgPSBOdW1iZXIoX2xhdDEpO1xuICBsZXQgbGF0MiA9IE51bWJlcihfbGF0Mik7XG4gIGxldCBsbmcyID0gTnVtYmVyKF9sbmcyKTtcbiAgbGV0IGxuZzEgPSBOdW1iZXIoX2xuZzIpO1xuICBjb25zb2xlLmxvZyhg5byA5aeL6K6h566XICR7bGF0MX0gJHtsYXQyfSAke2xuZzF9ICR7bG5nMn1gKTtcbiAgdmFyIHJhZExhdDEgPSByYWQobGF0MSk7XG4gIHZhciByYWRMYXQyID0gcmFkKGxhdDIpO1xuICB2YXIgYSA9IHJhZExhdDEgLSByYWRMYXQyO1xuICB2YXIgYiA9IHJhZChsbmcxKSAtIHJhZChsbmcyKTtcbiAgdmFyIHMgPSAyICogTWF0aC5hc2luKE1hdGguc3FydChNYXRoLnBvdyhNYXRoLnNpbihhIC8gMiksIDIpICsgTWF0aC5jb3MocmFkTGF0MSkgKiBNYXRoLmNvcyhyYWRMYXQyKSAqIE1hdGgucG93KE1hdGguc2luKGIgLyAyKSwgMikpKTtcbiAgcyA9IHMgKiA2Mzc4LjEzNzsgLy8gRUFSVEhfUkFESVVTO1xuXG4gIHMgPSBNYXRoLnJvdW5kKHMgKiAxMDAwMCkgLyAxMDAwMDsgLy/ovpPlh7rkuLrlhazph4xcblxuICB2YXIgZGlzdGFuY2UgPSBzO1xuICB2YXIgZGlzdGFuY2Vfc3RyID0gXCJcIjtcbiAgY29uc29sZS5sb2coXCLlvpflh7rnmoTot53nprtcIiwgcyk7XG5cbiAgaWYgKHBhcnNlSW50KGRpc3RhbmNlKSA+PSAxKSB7XG4gICAgZGlzdGFuY2Vfc3RyID0gZGlzdGFuY2UudG9GaXhlZCgxKSArIFwia21cIjtcbiAgfSBlbHNlIHtcbiAgICBkaXN0YW5jZV9zdHIgPSAoZGlzdGFuY2UgKiAxMDAwKS50b0ZpeGVkKDEpICsgXCJtXCI7XG4gIH0gLy9zPXMudG9GaXhlZCg0KTtcblxuXG4gIGNvbnNvbGUuaW5mbygnbHlqIOi3neemu+aYrycsIHMpO1xuICBjb25zb2xlLmluZm8oJ2x5aiDot53nprvmmK8nLCBkaXN0YW5jZV9zdHIpO1xuICByZXR1cm4gZGlzdGFuY2Vfc3RyO1xufVxuXG5mdW5jdGlvbiBNZXJjYXRvcjJsb25MYXQobWVyY2F0b3JYLCBtZXJjYXRvclkpIHtcbiAgdmFyIHh5ID0gW107XG4gIHZhciB4ID0gbWVyY2F0b3JYIC8gMjAwMzc1MDguMzQgKiAxODA7XG4gIHZhciB5ID0gbWVyY2F0b3JZIC8gMjAwMzc1MDguMzQgKiAxODA7XG4gIHkgPSAxODAgLyBNYXRoLlBJICogKDIgKiBNYXRoLmF0YW4oTWF0aC5leHAoeSAqIE1hdGguUEkgLyAxODApKSAtIE1hdGguUEkgLyAyKTtcbiAgeHkucHVzaCh4KTtcbiAgeHkucHVzaCh5KTtcbiAgcmV0dXJuIHh5O1xufSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=