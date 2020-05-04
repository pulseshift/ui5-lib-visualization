"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

sap.ui.define([
  /* no dependencies */
], function () {
  var exports = {};
  var module = {
    exports: null
  };

  (function (f) {
    if (_typeof(exports) === "object" && typeof module !== "undefined") {
      module.exports = f();
    } else if (typeof define === "function" && define.amd) {
      define([], f);
    } else {
      var g;

      if (typeof window !== "undefined") {
        g = window;
      } else if (typeof global !== "undefined") {
        g = global;
      } else if (typeof self !== "undefined") {
        g = self;
      } else {
        g = this;
      }

      g.lodashDefer = f();
    }
  })(function () {
    var define, module, exports;
    return function () {
      function r(e, n, t) {
        function o(i, f) {
          if (!n[i]) {
            if (!e[i]) {
              var c = "function" == typeof require && require;
              if (!f && c) return c(i, !0);
              if (u) return u(i, !0);
              var a = new Error("Cannot find module '" + i + "'");
              throw a.code = "MODULE_NOT_FOUND", a;
            }

            var p = n[i] = {
              exports: {}
            };
            e[i][0].call(p.exports, function (r) {
              var n = e[i][1][r];
              return o(n || r);
            }, p, p.exports, r, e, n, t);
          }

          return n[i].exports;
        }

        for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
          o(t[i]);
        }

        return o;
      }

      return r;
    }()({
      1: [function (require, module, exports) {
        /**
         * lodash (Custom Build) <https://lodash.com/>
         * Build: `lodash modularize exports="npm" -o ./`
         * Copyright jQuery Foundation and other contributors <https://jquery.org/>
         * Released under MIT license <https://lodash.com/license>
         * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
         * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
         */

        /** Used as the `TypeError` message for "Functions" methods. */
        var FUNC_ERROR_TEXT = 'Expected a function';
        /**
         * A faster alternative to `Function#apply`, this function invokes `func`
         * with the `this` binding of `thisArg` and the arguments of `args`.
         *
         * @private
         * @param {Function} func The function to invoke.
         * @param {*} thisArg The `this` binding of `func`.
         * @param {Array} args The arguments to invoke `func` with.
         * @returns {*} Returns the result of `func`.
         */

        function apply(func, thisArg, args) {
          switch (args.length) {
            case 0:
              return func.call(thisArg);

            case 1:
              return func.call(thisArg, args[0]);

            case 2:
              return func.call(thisArg, args[0], args[1]);

            case 3:
              return func.call(thisArg, args[0], args[1], args[2]);
          }

          return func.apply(thisArg, args);
        }
        /* Built-in method references for those with the same name as other `lodash` methods. */


        var nativeMax = Math.max;
        /**
         * The base implementation of `_.delay` and `_.defer` which accepts `args`
         * to provide to `func`.
         *
         * @private
         * @param {Function} func The function to delay.
         * @param {number} wait The number of milliseconds to delay invocation.
         * @param {Array} args The arguments to provide to `func`.
         * @returns {number} Returns the timer id.
         */

        function baseDelay(func, wait, args) {
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }

          return setTimeout(function () {
            func.apply(undefined, args);
          }, wait);
        }
        /**
         * The base implementation of `_.rest` which doesn't validate or coerce arguments.
         *
         * @private
         * @param {Function} func The function to apply a rest parameter to.
         * @param {number} [start=func.length-1] The start position of the rest parameter.
         * @returns {Function} Returns the new function.
         */


        function baseRest(func, start) {
          start = nativeMax(start === undefined ? func.length - 1 : start, 0);
          return function () {
            var args = arguments,
                index = -1,
                length = nativeMax(args.length - start, 0),
                array = Array(length);

            while (++index < length) {
              array[index] = args[start + index];
            }

            index = -1;
            var otherArgs = Array(start + 1);

            while (++index < start) {
              otherArgs[index] = args[index];
            }

            otherArgs[start] = array;
            return apply(func, this, otherArgs);
          };
        }
        /**
         * Defers invoking the `func` until the current call stack has cleared. Any
         * additional arguments are provided to `func` when it's invoked.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Function
         * @param {Function} func The function to defer.
         * @param {...*} [args] The arguments to invoke `func` with.
         * @returns {number} Returns the timer id.
         * @example
         *
         * _.defer(function(text) {
         *   console.log(text);
         * }, 'deferred');
         * // => Logs 'deferred' after one or more milliseconds.
         */


        var defer = baseRest(function (func, args) {
          return baseDelay(func, 1, args);
        });
        module.exports = defer;
      }, {}]
    }, {}, [1])(1);
  });

  return module.exports;
});