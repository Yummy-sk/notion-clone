// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/@babel/runtime/helpers/asyncToGenerator.js":[function(require,module,exports) {
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"node_modules/@babel/runtime/helpers/typeof.js":[function(require,module,exports) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"node_modules/@babel/runtime/helpers/regeneratorRuntime.js":[function(require,module,exports) {
var define;
var _typeof = require("./typeof.js")["default"];

function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) {
            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
          }

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./typeof.js":"node_modules/@babel/runtime/helpers/typeof.js"}],"node_modules/@babel/runtime/regenerator/index.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// TODO(Babel 8): Remove this file.
var runtime = require("../helpers/regeneratorRuntime")();

module.exports = runtime; // Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
},{"../helpers/regeneratorRuntime":"node_modules/@babel/runtime/helpers/regeneratorRuntime.js"}],"node_modules/@babel/runtime/helpers/classCallCheck.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"node_modules/@babel/runtime/helpers/createClass.js":[function(require,module,exports) {
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"node_modules/@babel/runtime/helpers/arrayLikeToArray.js":[function(require,module,exports) {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":[function(require,module,exports) {
var arrayLikeToArray = require("./arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayLikeToArray.js":"node_modules/@babel/runtime/helpers/arrayLikeToArray.js"}],"node_modules/@babel/runtime/helpers/iterableToArray.js":[function(require,module,exports) {
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":[function(require,module,exports) {
var arrayLikeToArray = require("./arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayLikeToArray.js":"node_modules/@babel/runtime/helpers/arrayLikeToArray.js"}],"node_modules/@babel/runtime/helpers/nonIterableSpread.js":[function(require,module,exports) {
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"node_modules/@babel/runtime/helpers/toConsumableArray.js":[function(require,module,exports) {
var arrayWithoutHoles = require("./arrayWithoutHoles.js");

var iterableToArray = require("./iterableToArray.js");

var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");

var nonIterableSpread = require("./nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayWithoutHoles.js":"node_modules/@babel/runtime/helpers/arrayWithoutHoles.js","./iterableToArray.js":"node_modules/@babel/runtime/helpers/iterableToArray.js","./unsupportedIterableToArray.js":"node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js","./nonIterableSpread.js":"node_modules/@babel/runtime/helpers/nonIterableSpread.js"}],"src/public/images/document.png":[function(require,module,exports) {
module.exports = "/document.40151865.png";
},{}],"src/util/querySelector.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$ = void 0;

var $ = function $(_ref) {
  var selector = _ref.selector;
  return document.querySelector(selector);
};

exports.$ = $;
},{}],"src/util/createDomeElem.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDOMElement = void 0;

var createDOMElement = function createDOMElement(_ref) {
  var tagName = _ref.tagName,
      _ref$attrs = _ref.attrs,
      attrs = _ref$attrs === void 0 ? null : _ref$attrs;
  var element = document.createElement(tagName);
  attrs && attrs.forEach(function (_ref2) {
    var attr = _ref2.attr,
        value = _ref2.value;
    attr !== 'textContent' ? element.setAttribute(attr, value) : element.textContent = value;
  });
  return element;
};

exports.createDOMElement = createDOMElement;
},{}],"src/util/localStorage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDocument = exports.removeDocument = exports.getDocument = void 0;
var storage = window.localStorage;

var getDocument = function getDocument(key) {
  try {
    var storedValue = storage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : {
      title: '',
      content: ''
    };
  } catch (e) {
    alert(e.message);
    console.error(e.message);
  }
};

exports.getDocument = getDocument;

var setDocument = function setDocument(key, value) {
  storage.setItem(key, JSON.stringify(value));
};

exports.setDocument = setDocument;

var removeDocument = function removeDocument(key) {
  storage.removeItem(key);
};

exports.removeDocument = removeDocument;
},{}],"src/util/debounce.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounce = void 0;

var debounce = function debounce(func, wait) {
  var timerId = null;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(function () {
      func.apply(void 0, args);
    }, wait);
  };
};

exports.debounce = debounce;
},{}],"src/util/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "$", {
  enumerable: true,
  get: function () {
    return _querySelector.$;
  }
});
Object.defineProperty(exports, "createDOMElement", {
  enumerable: true,
  get: function () {
    return _createDomeElem.createDOMElement;
  }
});
Object.defineProperty(exports, "debounce", {
  enumerable: true,
  get: function () {
    return _debounce.debounce;
  }
});
Object.defineProperty(exports, "getDocument", {
  enumerable: true,
  get: function () {
    return _localStorage.getDocument;
  }
});
Object.defineProperty(exports, "removeDocument", {
  enumerable: true,
  get: function () {
    return _localStorage.removeDocument;
  }
});
Object.defineProperty(exports, "setDocument", {
  enumerable: true,
  get: function () {
    return _localStorage.setDocument;
  }
});

var _querySelector = require("./querySelector.js");

var _createDomeElem = require("./createDomeElem.js");

var _localStorage = require("./localStorage.js");

var _debounce = require("./debounce.js");
},{"./querySelector.js":"src/util/querySelector.js","./createDomeElem.js":"src/util/createDomeElem.js","./localStorage.js":"src/util/localStorage.js","./debounce.js":"src/util/debounce.js"}],"src/router.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.push = exports.initRouter = void 0;
var ROUTE_CHANGE_EVENT_NAME = 'routeChange';

var initRouter = function initRouter(_ref) {
  var router = _ref.router;
  window.addEventListener(ROUTE_CHANGE_EVENT_NAME, function (_ref2) {
    var detail = _ref2.detail;
    var nextUrl = detail.nextUrl;

    if (nextUrl) {
      history.pushState(null, null, nextUrl);
      router();
    }
  });
};

exports.initRouter = initRouter;

var push = function push(_ref3) {
  var nextUrl = _ref3.nextUrl;
  window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT_NAME, {
    detail: {
      nextUrl: nextUrl
    }
  }));
};

exports.push = push;
},{}],"src/components/DocumentList/DocumentList.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocumentList = DocumentList;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _document = _interopRequireDefault(require("../../public/images/document.png"));

var _index2 = require("../../util/index.js");

var _router = require("../../router.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DocumentList(_ref) {
  var $target = _ref.$target,
      onClickDocument = _ref.onClickDocument,
      onAddDocument = _ref.onAddDocument,
      onDeleteDocument = _ref.onDeleteDocument;
  var state = [];
  var $documentList = (0, _index2.createDOMElement)({
    tagName: 'div',
    attrs: [{
      attr: 'class',
      value: 'document-list'
    }]
  });

  var makeDocumentTree = function makeDocumentTree(_ref2) {
    var id = _ref2.id,
        title = _ref2.title,
        documents = _ref2.documents,
        margin = _ref2.margin;
    return "\n            <details id=\"detail-".concat(id, "\" style=\"margin-left:").concat(margin, "px\" ").concat(state.includes(String(id)) && 'open', ">\n                <summary class=\"toggle\" data-index=\"").concat(id, "\">\n                <img class=\"doc-img\" src=").concat(_document.default, " alt=\"doc-img\"/>\n                <span>").concat(title ? title : '제목 없음', "</span>\n                <span class=\"option-container\">\n                    <input type=\"button\" class=\"option-btn remove\" />\n                    <input type=\"button\" class=\"option-btn add\" />\n                </span>\n                </summary>\n                ").concat(documents.length ? documents.map(function (_ref3) {
      var id = _ref3.id,
          title = _ref3.title,
          documents = _ref3.documents;
      return makeDocumentTree({
        id: id,
        title: title,
        documents: documents,
        margin: margin + 10
      });
    }).join('') : "<p style=\"margin-left:".concat(margin + 5, "px\">\uD558\uC704 \uD398\uC774\uC9C0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</p>"), "\n            </details>\n        ");
  };

  var generateHTML = function generateHTML(_ref4) {
    var document = _ref4.document;
    return "\n            <h1>Documents</h1>\n            ".concat(document.map(function (_ref5) {
      var id = _ref5.id,
          title = _ref5.title,
          documents = _ref5.documents;
      var margin = 0;
      return makeDocumentTree({
        id: id,
        title: title,
        documents: documents,
        margin: margin
      });
    }).join(''), "\n        ");
  };

  var registerEvents = function registerEvents() {
    $documentList.addEventListener('click', /*#__PURE__*/function () {
      var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(e) {
        var target, tagName, summary, index, classList, _index, _summary$closest$pare, rootParent, routePath;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                target = e.target;
                tagName = target.tagName;
                summary = target.closest('summary');

                if (!(tagName === 'H1')) {
                  _context.next = 6;
                  break;
                }

                (0, _router.push)({
                  nextUrl: '/'
                });
                return _context.abrupt("return");

              case 6:
                if (!(summary && tagName !== 'INPUT')) {
                  _context.next = 12;
                  break;
                }

                index = summary.dataset.index;
                (0, _router.push)({
                  nextUrl: "/documents/".concat(index)
                });
                _context.next = 11;
                return onClickDocument({
                  docId: index
                });

              case 11:
                return _context.abrupt("return");

              case 12:
                if (!(tagName === 'INPUT')) {
                  _context.next = 27;
                  break;
                }

                classList = target.classList;
                _index = summary.dataset.index;

                if (!classList.contains('remove')) {
                  _context.next = 23;
                  break;
                }

                if (!confirm('삭제하시겠습니까?')) {
                  _context.next = 22;
                  break;
                }

                _context.next = 19;
                return onDeleteDocument({
                  docId: _index
                });

              case 19:
                rootParent = (_summary$closest$pare = summary.closest('details').parentNode) === null || _summary$closest$pare === void 0 ? void 0 : _summary$closest$pare.id;
                alert('삭제되었습니다.');

                if (rootParent) {
                  routePath = rootParent.split('-').at(-1);
                  (0, _router.push)({
                    nextUrl: "/documents/".concat(routePath)
                  });
                } else {
                  (0, _router.push)({
                    nextUrl: '/'
                  });
                }

              case 22:
                return _context.abrupt("return");

              case 23:
                if (!classList.contains('add')) {
                  _context.next = 27;
                  break;
                }

                _context.next = 26;
                return onAddDocument({
                  docId: _index
                });

              case 26:
                return _context.abrupt("return");

              case 27:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref6.apply(this, arguments);
      };
    }());
  };

  this.render = function (_ref7) {
    var document = _ref7.document;
    $documentList.innerHTML = generateHTML({
      document: document
    });
    $target.appendChild($documentList);
  };

  this.setState = function (_ref8) {
    var nextState = _ref8.nextState,
        openState = _ref8.openState;
    state = (0, _toConsumableArray2.default)(openState);
    $documentList.innerHTML = generateHTML({
      document: nextState
    });
  };

  registerEvents();
}
},{"@babel/runtime/helpers/toConsumableArray":"node_modules/@babel/runtime/helpers/toConsumableArray.js","@babel/runtime/helpers/asyncToGenerator":"node_modules/@babel/runtime/helpers/asyncToGenerator.js","@babel/runtime/regenerator":"node_modules/@babel/runtime/regenerator/index.js","../../public/images/document.png":"src/public/images/document.png","../../util/index.js":"src/util/index.js","../../router.js":"src/router.js"}],"node_modules/@babel/runtime/helpers/defineProperty.js":[function(require,module,exports) {
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"src/components/Editor/Editor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Editor = Editor;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _document = _interopRequireDefault(require("../../public/images/document.png"));

var _index = require("../../util/index.js");

var _router = require("../../router.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Editor(_ref) {
  var $target = _ref.$target,
      compareStateWithStoredState = _ref.compareStateWithStoredState,
      storeAtStorageWhileInput = _ref.storeAtStorageWhileInput,
      onEditDocument = _ref.onEditDocument;
  var isRendered = false;
  var state = {
    title: '',
    content: ''
  };

  var generateHTML = function generateHTML() {
    return "\n            <input type=\"text\" name=\"title\" class=\"document-edit-input\" placeholder=\"\uC81C\uBAA9 \uC5C6\uC74C\" autofocus />\n            <textarea class=\"document-edit-textarea\" name=\"content\" placeholder=\"\uB0B4\uC6A9 \uC5C6\uC74C\"></textarea>\n            <div class=\"sub-document\"></div>\n        ";
  };

  var registerInputEvent = function registerInputEvent() {
    $target.addEventListener('input', /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(e) {
        var _objectSpread2;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                state = _objectSpread(_objectSpread({}, state), {}, (_objectSpread2 = {}, (0, _defineProperty2.default)(_objectSpread2, e.target.name, e.target.value), (0, _defineProperty2.default)(_objectSpread2, "updatedAt", new Date()), _objectSpread2));
                _context.next = 3;
                return storeAtStorageWhileInput({
                  state: state
                });

              case 3:
                _context.next = 5;
                return onEditDocument({
                  docId: state.id,
                  content: state
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    $target.addEventListener('click', function (_ref3) {
      var target = _ref3.target;
      var tagName = target.tagName;

      if (tagName === 'BUTTON') {
        var id = target.dataset.index;
        (0, _router.push)({
          nextUrl: "/documents/".concat(id)
        });
      }
    });
  };

  var refelectDocumentValue = /*#__PURE__*/function () {
    var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(_ref4) {
      var nextState, $title, $content, $subDocument, _state, title, content, documents;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              nextState = _ref4.nextState;

              if (!isRendered) {
                $target.innerHTML = generateHTML();
                isRendered = true;
              }

              $title = (0, _index.$)({
                selector: '.document-edit-input'
              });
              $content = (0, _index.$)({
                selector: '.document-edit-textarea'
              });
              $subDocument = (0, _index.$)({
                selector: '.sub-document'
              });
              _context2.next = 7;
              return compareStateWithStoredState({
                nextState: nextState,
                state: state
              });

            case 7:
              state = _context2.sent;
              _state = state, title = _state.title, content = _state.content, documents = _state.documents;
              $title.value = title;
              $content.value = content ? content : '';
              $subDocument.innerHTML = documents.map(function (_ref6) {
                var id = _ref6.id,
                    title = _ref6.title;
                return "\n            <button class=\"sub-document-item\" data-index=\"".concat(id, "\">\n                <img class=\"doc-img\" src=").concat(_document.default, " alt=\"doc-img\"/>\n                ").concat(title ? title : '제목없음', "\n            </button>");
              }).join('');

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function refelectDocumentValue(_x2) {
      return _ref5.apply(this, arguments);
    };
  }();

  this.render = function (_ref7) {
    var state = _ref7.state;
    $target.innerHTML = generateHTML();
    refelectDocumentValue({
      nextState: state
    });
  };

  registerInputEvent();
}
},{"@babel/runtime/helpers/defineProperty":"node_modules/@babel/runtime/helpers/defineProperty.js","@babel/runtime/helpers/asyncToGenerator":"node_modules/@babel/runtime/helpers/asyncToGenerator.js","@babel/runtime/regenerator":"node_modules/@babel/runtime/regenerator/index.js","../../public/images/document.png":"src/public/images/document.png","../../util/index.js":"src/util/index.js","../../router.js":"src/router.js"}],"src/components/DocumentEdit/DocumentEdit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocumentEdit = DocumentEdit;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _Editor = require("../Editor/Editor.js");

var _index = require("../../util/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function DocumentEdit(_ref) {
  var $target = _ref.$target,
      onEditDocument = _ref.onEditDocument;

  var compareStateWithStoredState = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(_ref2) {
      var nextState, state, id, key, storedState, _id, title, content;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              nextState = _ref2.nextState, state = _ref2.state;
              id = nextState.id;
              key = "document-".concat(id);
              storedState = (0, _index.getDocument)(key);

              if (!(storedState && storedState.updatedAt > nextState.updatedAt && confirm('이미 저장된 내용이 있습니다. 저장하시겠습니까?'))) {
                _context.next = 10;
                break;
              }

              _id = storedState.id, title = storedState.title, content = storedState.content;
              _context.next = 8;
              return onEditDocument({
                docId: _id,
                content: {
                  title: title,
                  content: content
                }
              });

            case 8:
              (0, _index.removeDocument)(key);
              return _context.abrupt("return", _objectSpread(_objectSpread({}, state), storedState));

            case 10:
              return _context.abrupt("return", _objectSpread(_objectSpread({}, state), nextState));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function compareStateWithStoredState(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var storeAtStorageWhileInput = function storeAtStorageWhileInput(_ref4) {
    var state = _ref4.state;
    var id = state.id;
    var key = "document-".concat(id);
    (0, _index.setDocument)(key, state);
  };

  var editor = new _Editor.Editor({
    $target: $target,
    compareStateWithStoredState: compareStateWithStoredState,
    storeAtStorageWhileInput: (0, _index.debounce)(storeAtStorageWhileInput, 800),
    onEditDocument: (0, _index.debounce)(onEditDocument, 1000)
  });

  this.render = function (_ref5) {
    var state = _ref5.state;
    editor.render({
      state: state
    });
  };
}
},{"@babel/runtime/helpers/defineProperty":"node_modules/@babel/runtime/helpers/defineProperty.js","@babel/runtime/helpers/asyncToGenerator":"node_modules/@babel/runtime/helpers/asyncToGenerator.js","@babel/runtime/regenerator":"node_modules/@babel/runtime/regenerator/index.js","../Editor/Editor.js":"src/components/Editor/Editor.js","../../util/index.js":"src/util/index.js"}],"src/public/images/greeting.png":[function(require,module,exports) {
module.exports = "/greeting.a059f552.png";
},{}],"src/components/DocumentRoot/DocumentRoot.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocumentRoot = DocumentRoot;

var _greeting = _interopRequireDefault(require("../../public/images/greeting.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DocumentRoot(_ref) {
  var $target = _ref.$target;

  var generateHTML = function generateHTML() {
    return "<img class=\"greeting-img\" src=".concat(_greeting.default, " alt=\"greeting-img\"/>");
  };

  this.render = function () {
    $target.innerHTML = generateHTML();
  };
}
},{"../../public/images/greeting.png":"src/public/images/greeting.png"}],"src/components/DocumentAdd/DocumentAdd.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocumentAdd = DocumentAdd;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _createDomeElem = require("../../util/createDomeElem.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DocumentAdd(_ref) {
  var $target = _ref.$target,
      onAddDocument = _ref.onAddDocument;
  var $documentAdd = (0, _createDomeElem.createDOMElement)({
    tagName: 'button',
    attrs: [{
      attr: 'class',
      value: 'document-add-btn'
    }, {
      attr: 'textContent',
      value: '+ 새 페이지'
    }]
  });

  var removeEventListener = function removeEventListener() {
    $documentAdd.addEventListener('click', /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return onAddDocument({
                docId: null
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
  };

  this.render = function () {
    $target.appendChild($documentAdd);
  };

  removeEventListener();
}
},{"@babel/runtime/helpers/asyncToGenerator":"node_modules/@babel/runtime/helpers/asyncToGenerator.js","@babel/runtime/regenerator":"node_modules/@babel/runtime/regenerator/index.js","../../util/createDomeElem.js":"src/util/createDomeElem.js"}],"src/components/NotFound/NotFound.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotFound = NotFound;

function NotFound(_ref) {
  var $target = _ref.$target;

  var generateHTML = function generateHTML() {
    return "<img class=\"not-found-img\" src=\"https://i.imgur.com/EQJG7Qb.png\" alt=\"Not Found\" />";
  };

  this.render = function () {
    $target.innerHTML = generateHTML();
  };
}
},{}],"src/components/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DocumentAdd", {
  enumerable: true,
  get: function () {
    return _DocumentAdd.DocumentAdd;
  }
});
Object.defineProperty(exports, "DocumentEdit", {
  enumerable: true,
  get: function () {
    return _DocumentEdit.DocumentEdit;
  }
});
Object.defineProperty(exports, "DocumentList", {
  enumerable: true,
  get: function () {
    return _DocumentList.DocumentList;
  }
});
Object.defineProperty(exports, "DocumentRoot", {
  enumerable: true,
  get: function () {
    return _DocumentRoot.DocumentRoot;
  }
});
Object.defineProperty(exports, "NotFound", {
  enumerable: true,
  get: function () {
    return _NotFound.NotFound;
  }
});

var _DocumentList = require("./DocumentList/DocumentList.js");

var _DocumentEdit = require("./DocumentEdit/DocumentEdit.js");

var _DocumentRoot = require("./DocumentRoot/DocumentRoot.js");

var _DocumentAdd = require("./DocumentAdd/DocumentAdd.js");

var _NotFound = require("./NotFound/NotFound.js");
},{"./DocumentList/DocumentList.js":"src/components/DocumentList/DocumentList.js","./DocumentEdit/DocumentEdit.js":"src/components/DocumentEdit/DocumentEdit.js","./DocumentRoot/DocumentRoot.js":"src/components/DocumentRoot/DocumentRoot.js","./DocumentAdd/DocumentAdd.js":"src/components/DocumentAdd/DocumentAdd.js","./NotFound/NotFound.js":"src/components/NotFound/NotFound.js"}],"src/pages/SideBar/SideBar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideBar = SideBar;

var _index = require("../../components/index.js");

var _createDomeElem = require("../../util/createDomeElem.js");

function SideBar(_ref) {
  var $target = _ref.$target,
      documents = _ref.documents,
      onClickDocument = _ref.onClickDocument,
      onAddDocument = _ref.onAddDocument,
      onDeleteDocument = _ref.onDeleteDocument;
  var state = documents;
  var $sideBar = (0, _createDomeElem.createDOMElement)({
    tagName: 'aside'
  });
  var documentList = new _index.DocumentList({
    $target: $sideBar,
    onClickDocument: onClickDocument,
    onAddDocument: onAddDocument,
    onDeleteDocument: onDeleteDocument
  });
  var documentAdd = new _index.DocumentAdd({
    $target: $sideBar,
    onAddDocument: onAddDocument
  });

  this.render = function () {
    $target.appendChild($sideBar);
    documentList.render({
      document: state
    });
    documentAdd.render();
  };

  this.setState = function (_ref2) {
    var nextState = _ref2.nextState,
        openState = _ref2.openState;
    state = nextState;
    documentList.setState({
      nextState: state,
      openState: openState
    });
  };
}
},{"../../components/index.js":"src/components/index.js","../../util/createDomeElem.js":"src/util/createDomeElem.js"}],"src/pages/DocumentPage/DocumentPage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocumentPage = DocumentPage;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _index = require("../../components/index.js");

var _router2 = require("../../router.js");

var _createDomeElem = require("../../util/createDomeElem.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DocumentPage(_ref) {
  var $target = _ref.$target,
      onGetOneDocument = _ref.onGetOneDocument,
      onEditDocument = _ref.onEditDocument;
  var $documentPage = (0, _createDomeElem.createDOMElement)({
    tagName: 'section'
  });
  var documentRoot = new _index.DocumentRoot({
    $target: $documentPage
  });
  var documentEdit = new _index.DocumentEdit({
    $target: $documentPage,
    onEditDocument: onEditDocument
  });
  var notFound = new _index.NotFound({
    $target: $documentPage
  });

  var _router = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var pathname, documentId, document;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              pathname = window.location.pathname;

              if (!(pathname === "/")) {
                _context.next = 4;
                break;
              }

              documentRoot.render();
              return _context.abrupt("return");

            case 4:
              if (!pathname.includes("/documents/")) {
                _context.next = 14;
                break;
              }

              documentId = pathname.split('/').at(-1);
              _context.next = 8;
              return onGetOneDocument({
                docId: documentId
              });

            case 8:
              document = _context.sent;

              if (!document) {
                _context.next = 12;
                break;
              }

              documentEdit.render({
                state: document
              });
              return _context.abrupt("return");

            case 12:
              notFound.render();
              return _context.abrupt("return");

            case 14:
              notFound.render();

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function router() {
      return _ref2.apply(this, arguments);
    };
  }();

  this.render = function () {
    $target.appendChild($documentPage);

    _router();

    (0, _router2.initRouter)({
      router: function router() {
        return _router();
      }
    });
  };
}
},{"@babel/runtime/helpers/asyncToGenerator":"node_modules/@babel/runtime/helpers/asyncToGenerator.js","@babel/runtime/regenerator":"node_modules/@babel/runtime/regenerator/index.js","../../components/index.js":"src/components/index.js","../../router.js":"src/router.js","../../util/createDomeElem.js":"src/util/createDomeElem.js"}],"src/pages/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DocumentPage", {
  enumerable: true,
  get: function () {
    return _DocumentPage.DocumentPage;
  }
});
Object.defineProperty(exports, "SideBar", {
  enumerable: true,
  get: function () {
    return _SideBar.SideBar;
  }
});

var _SideBar = require("./SideBar/SideBar.js");

var _DocumentPage = require("./DocumentPage/DocumentPage.js");
},{"./SideBar/SideBar.js":"src/pages/SideBar/SideBar.js","./DocumentPage/DocumentPage.js":"src/pages/DocumentPage/DocumentPage.js"}],"src/api/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_ROOT = function API_ROOT(_ref) {
  var path = _ref.path;
  return "https://kdt-frontend.programmers.co.kr/documents".concat(path);
};

var returnOptions = function returnOptions(_ref2) {
  var method = _ref2.method,
      content = _ref2.content;
  return (0, _defineProperty2.default)({
    method: method,
    headers: (0, _defineProperty2.default)({
      'x-username': 'yeummy-sk'
    }, method === 'POST' || method === 'PUT' ? 'Content-Type' : 'Accept', 'application/json')
  }, method === 'POST' || method === 'PUT' ? 'body' : 'params', JSON.stringify(content));
};

var useFetch = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(_ref4) {
    var path, method, _ref4$content, content, options, response;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            path = _ref4.path, method = _ref4.method, _ref4$content = _ref4.content, content = _ref4$content === void 0 ? '' : _ref4$content;
            _context.prev = 1;
            options = returnOptions({
              method: method,
              content: content
            });
            _context.next = 5;
            return fetch(API_ROOT({
              path: path
            }), options);

          case 5:
            response = _context.sent;

            if (!(!response || !response.ok)) {
              _context.next = 8;
              break;
            }

            throw Error(response.status);

          case 8:
            _context.next = 10;
            return response.json();

          case 10:
            return _context.abrupt("return", _context.sent);

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](1);
            alert(_context.t0.message);
            console.error(_context.t0.message);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 13]]);
  }));

  return function useFetch(_x) {
    return _ref5.apply(this, arguments);
  };
}();

var API = {
  GET: function () {
    var _GET = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(_ref6) {
      var path;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              path = _ref6.path;
              _context2.next = 3;
              return useFetch({
                path: path,
                method: 'GET'
              });

            case 3:
              return _context2.abrupt("return", _context2.sent);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function GET(_x2) {
      return _GET.apply(this, arguments);
    }

    return GET;
  }(),
  POST: function () {
    var _POST = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(_ref7) {
      var path, content;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              path = _ref7.path, content = _ref7.content;
              _context3.next = 3;
              return useFetch({
                path: path,
                method: 'POST',
                content: content
              });

            case 3:
              return _context3.abrupt("return", _context3.sent);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function POST(_x3) {
      return _POST.apply(this, arguments);
    }

    return POST;
  }(),
  PUT: function () {
    var _PUT = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(_ref8) {
      var path, content;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              path = _ref8.path, content = _ref8.content;
              _context4.next = 3;
              return useFetch({
                path: path,
                method: 'PUT',
                content: content
              });

            case 3:
              return _context4.abrupt("return", _context4.sent);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function PUT(_x4) {
      return _PUT.apply(this, arguments);
    }

    return PUT;
  }(),
  DELETE: function () {
    var _DELETE = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(_ref9) {
      var path;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              path = _ref9.path;
              _context5.next = 3;
              return useFetch({
                path: path,
                method: 'DELETE'
              });

            case 3:
              return _context5.abrupt("return", _context5.sent);

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function DELETE(_x5) {
      return _DELETE.apply(this, arguments);
    }

    return DELETE;
  }()
};
var _default = API;
exports.default = _default;
},{"@babel/runtime/helpers/asyncToGenerator":"node_modules/@babel/runtime/helpers/asyncToGenerator.js","@babel/runtime/helpers/defineProperty":"node_modules/@babel/runtime/helpers/defineProperty.js","@babel/runtime/regenerator":"node_modules/@babel/runtime/regenerator/index.js"}],"src/api/documentApi.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _api = _interopRequireDefault(require("./api.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useApi = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(_ref) {
    var method, _ref$content, content, _ref$id, id, makeParam, response;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            method = _ref.method, _ref$content = _ref.content, content = _ref$content === void 0 ? '' : _ref$content, _ref$id = _ref.id, id = _ref$id === void 0 ? '' : _ref$id;

            makeParam = function makeParam() {
              switch (method) {
                case 'GET':
                  if (Boolean(id)) return {
                    path: "/".concat(id)
                  };
                  return {
                    path: ''
                  };

                case 'POST':
                  return {
                    path: '',
                    content: content
                  };

                case 'PUT':
                  return {
                    path: "/".concat(id),
                    content: content
                  };

                case 'DELETE':
                  return {
                    path: "/".concat(id)
                  };

                default:
                  throw new Error('잘못된 method 입니다.');
              }
            };

            _context.prev = 2;
            _context.next = 5;
            return _api.default[method](makeParam());

          case 5:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](2);
            alert(_context.t0.message);
            console.error(_context.t0.message);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 9]]);
  }));

  return function useApi(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var LIST_API = {
  getAllDocuments: function () {
    var _getAllDocuments = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return useApi({
                method: 'GET'
              });

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function getAllDocuments() {
      return _getAllDocuments.apply(this, arguments);
    }

    return getAllDocuments;
  }(),
  getOneDocument: function () {
    var _getOneDocument = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(_ref3) {
      var id;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              id = _ref3.id;
              _context3.next = 3;
              return useApi({
                method: 'GET',
                id: id
              });

            case 3:
              return _context3.abrupt("return", _context3.sent);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function getOneDocument(_x2) {
      return _getOneDocument.apply(this, arguments);
    }

    return getOneDocument;
  }(),
  createDocument: function () {
    var _createDocument = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(_ref4) {
      var content;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              content = _ref4.content;
              _context4.next = 3;
              return useApi({
                method: 'POST',
                content: content
              });

            case 3:
              return _context4.abrupt("return", _context4.sent);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function createDocument(_x3) {
      return _createDocument.apply(this, arguments);
    }

    return createDocument;
  }(),
  editDocument: function () {
    var _editDocument = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(_ref5) {
      var id, content;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              id = _ref5.id, content = _ref5.content;
              _context5.next = 3;
              return useApi({
                method: 'PUT',
                id: id,
                content: content
              });

            case 3:
              return _context5.abrupt("return", _context5.sent);

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function editDocument(_x4) {
      return _editDocument.apply(this, arguments);
    }

    return editDocument;
  }(),
  deleteDocument: function () {
    var _deleteDocument = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(_ref6) {
      var id;
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              id = _ref6.id;
              _context6.next = 3;
              return useApi({
                method: 'DELETE',
                id: id
              });

            case 3:
              return _context6.abrupt("return", _context6.sent);

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function deleteDocument(_x5) {
      return _deleteDocument.apply(this, arguments);
    }

    return deleteDocument;
  }()
};
var _default = LIST_API;
exports.default = _default;
},{"@babel/runtime/helpers/asyncToGenerator":"node_modules/@babel/runtime/helpers/asyncToGenerator.js","@babel/runtime/regenerator":"node_modules/@babel/runtime/regenerator/index.js","./api.js":"src/api/api.js"}],"src/App.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _index = require("./pages/index.js");

var _documentApi = _interopRequireDefault(require("./api/documentApi.js"));

var _index2 = require("./util/index.js");

var _router = require("./router.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = /*#__PURE__*/function () {
  function App(_ref) {
    var $target = _ref.$target,
        initialState = _ref.initialState;
    (0, _classCallCheck2.default)(this, App);
    this.openState = [];
    this.$target = $target;
    this.sideBar = new _index.SideBar({
      $target: this.$target,
      documents: initialState,
      onClickDocument: this.onClickDocument.bind(this),
      onAddDocument: this.onAddDocument.bind(this),
      onDeleteDocument: this.onDeleteDocument.bind(this)
    });
    this.documentPage = new _index.DocumentPage({
      $target: this.$target,
      onGetOneDocument: this.onGetOneDocument.bind(this),
      onEditDocument: this.onEditDocument.bind(this)
    });
  }

  (0, _createClass2.default)(App, [{
    key: "onGetAllDocument",
    value: function () {
      var _onGetAllDocument = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _documentApi.default.getAllDocuments();

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function onGetAllDocument() {
        return _onGetAllDocument.apply(this, arguments);
      }

      return onGetAllDocument;
    }()
  }, {
    key: "onGetOneDocument",
    value: function () {
      var _onGetOneDocument = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(_ref2) {
        var docId;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                docId = _ref2.docId;
                _context2.next = 3;
                return _documentApi.default.getOneDocument({
                  id: docId
                });

              case 3:
                return _context2.abrupt("return", _context2.sent);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function onGetOneDocument(_x) {
        return _onGetOneDocument.apply(this, arguments);
      }

      return onGetOneDocument;
    }()
  }, {
    key: "onClickDocument",
    value: function () {
      var _onClickDocument = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(_ref3) {
        var docId, idx;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                docId = _ref3.docId;
                _context3.next = 3;
                return _documentApi.default.getOneDocument({
                  id: docId
                });

              case 3:
                if (this.openState.includes(docId)) {
                  idx = this.openState.indexOf(docId);
                  this.openState.splice(idx, 1);
                } else {
                  this.openState.push(docId);
                }

                (0, _router.push)({
                  nextUrl: "/documents/".concat(docId)
                });

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onClickDocument(_x2) {
        return _onClickDocument.apply(this, arguments);
      }

      return onClickDocument;
    }()
  }, {
    key: "onAddDocument",
    value: function () {
      var _onAddDocument = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(_ref4) {
        var docId, doc, docs;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                docId = _ref4.docId;
                _context4.next = 3;
                return _documentApi.default.createDocument({
                  content: {
                    title: "",
                    parent: docId
                  }
                });

              case 3:
                doc = _context4.sent;
                _context4.next = 6;
                return this.onGetAllDocument();

              case 6:
                docs = _context4.sent;
                this.sideBar.setState({
                  nextState: docs,
                  openState: this.openState
                });
                (0, _router.push)({
                  nextUrl: "/documents/".concat(doc.id)
                });

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onAddDocument(_x3) {
        return _onAddDocument.apply(this, arguments);
      }

      return onAddDocument;
    }()
  }, {
    key: "onDeleteDocument",
    value: function () {
      var _onDeleteDocument = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(_ref5) {
        var docId, docs;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                docId = _ref5.docId;
                _context5.next = 3;
                return _documentApi.default.deleteDocument({
                  id: docId
                });

              case 3:
                _context5.next = 5;
                return this.onGetAllDocument();

              case 5:
                docs = _context5.sent;
                this.sideBar.setState({
                  nextState: docs,
                  openState: this.openState
                });

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function onDeleteDocument(_x4) {
        return _onDeleteDocument.apply(this, arguments);
      }

      return onDeleteDocument;
    }()
  }, {
    key: "onEditDocument",
    value: function () {
      var _onEditDocument = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(_ref6) {
        var docId, content, doc, $doc;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                docId = _ref6.docId, content = _ref6.content;
                _context6.next = 3;
                return _documentApi.default.editDocument({
                  id: docId,
                  content: content
                });

              case 3:
                doc = _context6.sent;
                $doc = (0, _index2.$)({
                  selector: "[data-index=\"".concat(docId, "\"] > span")
                });
                $doc.innerText = doc.title;
                (0, _index2.removeDocument)("document-".concat(docId));

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function onEditDocument(_x5) {
        return _onEditDocument.apply(this, arguments);
      }

      return onEditDocument;
    }()
  }, {
    key: "render",
    value: function render() {
      this.sideBar.render();
      this.documentPage.render();
    }
  }]);
  return App;
}();

var _default = App;
exports.default = _default;
},{"@babel/runtime/helpers/asyncToGenerator":"node_modules/@babel/runtime/helpers/asyncToGenerator.js","@babel/runtime/helpers/classCallCheck":"node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/regenerator":"node_modules/@babel/runtime/regenerator/index.js","./pages/index.js":"src/pages/index.js","./api/documentApi.js":"src/api/documentApi.js","./util/index.js":"src/util/index.js","./router.js":"src/router.js"}],"src/Main.js":[function(require,module,exports) {
"use strict";

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _App = _interopRequireDefault(require("./App.js"));

var _documentApi = _interopRequireDefault(require("./api/documentApi.js"));

var _index = require("./util/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Main() {
  this.init = /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var $main, app;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            $main = (0, _index.$)({
              selector: 'main'
            });
            _context.t0 = _App.default;
            _context.t1 = $main;
            _context.next = 6;
            return _documentApi.default.getAllDocuments();

          case 6:
            _context.t2 = _context.sent;
            _context.t3 = {
              $target: _context.t1,
              initialState: _context.t2
            };
            app = new _context.t0(_context.t3);
            app.render();
            _context.next = 16;
            break;

          case 12:
            _context.prev = 12;
            _context.t4 = _context["catch"](0);
            alert(_context.t4.message);
            console.error(_context.t4.message);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));
}

;
var main = new Main();
main.init();
},{"@babel/runtime/helpers/asyncToGenerator":"node_modules/@babel/runtime/helpers/asyncToGenerator.js","@babel/runtime/regenerator":"node_modules/@babel/runtime/regenerator/index.js","./App.js":"src/App.js","./api/documentApi.js":"src/api/documentApi.js","./util/index.js":"src/util/index.js"}],"../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52759" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/Main.js"], null)
//# sourceMappingURL=/Main.808200b3.js.map