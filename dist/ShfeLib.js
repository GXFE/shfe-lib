(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd)
    define('ShfeLib', [], factory);
  else if (typeof exports === 'object') exports['ShfeLib'] = factory();
  else root['ShfeLib'] = factory();
})(window, function() {
  return /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {}
        /******/
      }); // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ); // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true; // Return the exports of the module
      /******/
      /******/ /******/ return module.exports;
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          /******/ configurable: false,
          /******/ enumerable: true,
          /******/ get: getter
          /******/
        });
        /******/
      }
      /******/
    }; // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function(exports) {
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module['default'];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, 'a', getter);
      /******/ return getter;
      /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__(
      (__webpack_require__.s = './src/index.js')
    );
    /******/
  })(
    /************************************************************************/
    /******/ {
      /***/ './src/Cookie.js':
        /*!***********************!*\
  !*** ./src/Cookie.js ***!
  \***********************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          var _createClass = (function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ('value' in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          })();

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          var Cookie = (function() {
            function Cookie() {
              _classCallCheck(this, Cookie);
            }

            _createClass(Cookie, [
              {
                key: 'set',

                /**
                 * 设置cookie
                 * @param name 名称
                 * @param value 值
                 * @param expires 有效时间（单位：小时）（可选） 默认：24h
                 */
                value: function set(name, value, expires) {
                  var expTimes = expires
                    ? Number(expires) * 60 * 60 * 1000
                    : 24 * 60 * 60 * 1000; // 毫秒
                  var expDate = new Date();
                  expDate.setTime(expDate.getTime() + expTimes);
                  var expString = expires
                    ? '; expires=' + expDate.toUTCString()
                    : '';
                  var pathString = '; path=/';
                  document.cookie =
                    name + '=' + encodeURI(value) + expString + pathString;
                }
                /**
                 * 读cookie
                 * @param name
                 */
              },
              {
                key: 'get',
                value: function get(name) {
                  var cookieStr = '; ' + document.cookie + '; ';
                  var index = cookieStr.indexOf('; ' + name + '=');
                  if (index !== -1) {
                    var s = cookieStr.substring(
                      index + name.length + 3,
                      cookieStr.length
                    );
                    return decodeURI(s.substring(0, s.indexOf('; ')));
                  } else {
                    return null;
                  }
                }
                /**
                 * 删除cookie
                 * @param name
                 */
              },
              {
                key: 'del',
                value: function del(name) {
                  var exp = new Date(new Date().getTime() - 1);
                  var s = this.read(name);
                  if (s !== null) {
                    document.cookie =
                      name +
                      '=' +
                      s +
                      '; expires=' +
                      exp.toUTCString() +
                      '; path=/';
                  }
                }
              }
            ]);

            return Cookie;
          })();

          /* harmony default export */ __webpack_exports__['default'] = Cookie;

          /***/
        },

      /***/ './src/Date.js':
        /*!*********************!*\
  !*** ./src/Date.js ***!
  \*********************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony default export */ __webpack_exports__['default'] = {
            name: 'Date'
          };

          /***/
        },

      /***/ './src/index.js':
        /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _Cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ./Cookie */ './src/Cookie.js'
          );
          /* harmony import */ var _Date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ./Date */ './src/Date.js'
          );
          var _extends =
            Object.assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };

          var lib = {
            name: 'lib',
            getBrowser: function getBrowser() {
              return '浏览器';
            },
            getOs: function getOs() {
              return '系统';
            }
          };

          /* harmony default export */ __webpack_exports__[
            'default'
          ] = _extends({}, lib, {
            Cookie: _Cookie__WEBPACK_IMPORTED_MODULE_0__['default'],
            Date: _Date__WEBPACK_IMPORTED_MODULE_1__['default']
          });

          /***/
        }

      /******/
    }
  );
});
//# sourceMappingURL=ShfeLib.js.map
