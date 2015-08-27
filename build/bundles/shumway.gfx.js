/*

 Copyright 2014 Mozilla Foundation

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
console.time("Load Shared Dependencies");
var Shumway, Shumway$$inline_0 = Shumway || (Shumway = {});
Shumway$$inline_0.version = "0.11.465";
Shumway$$inline_0.build = "25cba6c";
var jsGlobal = function() {
  return this || (0,eval)("this//# sourceURL=jsGlobal-getter");
}(), inBrowser = "undefined" !== typeof window && "document" in window && "plugins" in window.document, inFirefox = "undefined" !== typeof navigator && 0 <= navigator.userAgent.indexOf("Firefox");
jsGlobal.performance || (jsGlobal.performance = {});
jsGlobal.performance.now || (jsGlobal.performance.now = function() {
  return Date.now();
});
function lazyInitializer(h, p, r) {
  Object.defineProperty(h, p, {get:function() {
    var a = r();
    Object.defineProperty(h, p, {value:a, configurable:!0, enumerable:!0});
    return a;
  }, configurable:!0, enumerable:!0});
}
var START_TIME = performance.now();
(function(h) {
  function p(d) {
    return (d | 0) === d;
  }
  function r(d) {
    return "object" === typeof d || "function" === typeof d;
  }
  function a(d) {
    return String(Number(d)) === d;
  }
  function x(d) {
    var f = 0;
    if ("number" === typeof d) {
      return f = d | 0, d === f && 0 <= f ? !0 : d >>> 0 === d;
    }
    if ("string" !== typeof d) {
      return !1;
    }
    var g = d.length;
    if (0 === g) {
      return !1;
    }
    if ("0" === d) {
      return !0;
    }
    if (g > h.UINT32_CHAR_BUFFER_LENGTH) {
      return !1;
    }
    var c = 0, f = d.charCodeAt(c++) - 48;
    if (1 > f || 9 < f) {
      return !1;
    }
    for (var e = 0, y = 0;c < g;) {
      y = d.charCodeAt(c++) - 48;
      if (0 > y || 9 < y) {
        return !1;
      }
      e = f;
      f = 10 * f + y;
    }
    return e < h.UINT32_MAX_DIV_10 || e === h.UINT32_MAX_DIV_10 && y <= h.UINT32_MAX_MOD_10 ? !0 : !1;
  }
  (function(d) {
    d[d._0 = 48] = "_0";
    d[d._1 = 49] = "_1";
    d[d._2 = 50] = "_2";
    d[d._3 = 51] = "_3";
    d[d._4 = 52] = "_4";
    d[d._5 = 53] = "_5";
    d[d._6 = 54] = "_6";
    d[d._7 = 55] = "_7";
    d[d._8 = 56] = "_8";
    d[d._9 = 57] = "_9";
  })(h.CharacterCodes || (h.CharacterCodes = {}));
  h.UINT32_CHAR_BUFFER_LENGTH = 10;
  h.UINT32_MAX = 4294967295;
  h.UINT32_MAX_DIV_10 = 429496729;
  h.UINT32_MAX_MOD_10 = 5;
  h.isString = function(d) {
    return "string" === typeof d;
  };
  h.isFunction = function(d) {
    return "function" === typeof d;
  };
  h.isNumber = function(d) {
    return "number" === typeof d;
  };
  h.isInteger = p;
  h.isArray = function(d) {
    return d instanceof Array;
  };
  h.isNumberOrString = function(d) {
    return "number" === typeof d || "string" === typeof d;
  };
  h.isObject = r;
  h.toNumber = function(d) {
    return +d;
  };
  h.isNumericString = a;
  h.isNumeric = function(d) {
    if ("number" === typeof d) {
      return !0;
    }
    if ("string" === typeof d) {
      var f = d.charCodeAt(0);
      return 65 <= f && 90 >= f || 97 <= f && 122 >= f || 36 === f || 95 === f ? !1 : x(d) || a(d);
    }
    return !1;
  };
  h.isIndex = x;
  h.isNullOrUndefined = function(d) {
    return void 0 == d;
  };
  h.argumentsToString = function(d) {
    for (var f = [], g = 0;g < d.length;g++) {
      var c = d[g];
      try {
        var e;
        e = "object" === typeof c && c ? "toString" in c ? c.toString() : Object.prototype.toString.call(c) : c + "";
        f.push(e);
      } catch (y) {
        f.push("<unprintable value>");
      }
    }
    return f.join(", ");
  };
  var n;
  (function(d) {
    d.error = function(c) {
      console.error(c);
      throw Error(c);
    };
    d.assert = function(c, e) {
      void 0 === e && (e = "assertion failed");
      "" === c && (c = !0);
      if (!c) {
        if ("undefined" !== typeof console && "assert" in console) {
          throw console.assert(!1, e), Error(e);
        }
        d.error(e.toString());
      }
    };
    d.assertUnreachable = function(c) {
      var e = Error().stack.split("\n")[1];
      throw Error("Reached unreachable location " + e + c);
    };
    d.assertNotImplemented = function(c, e) {
      c || d.error("notImplemented: " + e);
    };
    var f = Object.create(null);
    d.warning = function(c, e, g) {
    };
    d.warnCounts = function() {
      var c = [], e;
      for (e in f) {
        c.push({key:e, count:f[e]});
      }
      c.sort(function(e, c) {
        return c.count - e.count;
      });
      return c.reduce(function(e, c) {
        return e + ("\n" + c.count + "\t" + c.key);
      }, "");
    };
    d.notUsed = function(c) {
    };
    d.notImplemented = function(c) {
    };
    d.dummyConstructor = function(c) {
    };
    d.abstractMethod = function(c) {
    };
    var g = {};
    d.somewhatImplemented = function(c) {
      g[c] || (g[c] = !0, d.warning("somewhatImplemented: " + c));
    };
    d.unexpected = function(c) {
      d.assert(!1, "Unexpected: " + c);
    };
    d.unexpectedCase = function(c) {
      d.assert(!1, "Unexpected Case: " + c);
    };
  })(n = h.Debug || (h.Debug = {}));
  h.getTicks = function() {
    return performance.now();
  };
  (function(d) {
    function f(c, e) {
      for (var g = 0, w = c.length;g < w;g++) {
        if (c[g] === e) {
          return g;
        }
      }
      c.push(e);
      return c.length - 1;
    }
    d.popManyInto = function(c, e, g) {
      for (var w = e - 1;0 <= w;w--) {
        g[w] = c.pop();
      }
      g.length = e;
    };
    d.popMany = function(c, e) {
      var g = c.length - e, w = c.slice(g, this.length);
      c.length = g;
      return w;
    };
    d.popManyIntoVoid = function(c, e) {
      c.length -= e;
    };
    d.pushMany = function(c, e) {
      for (var g = 0;g < e.length;g++) {
        c.push(e[g]);
      }
    };
    d.top = function(c) {
      return c.length && c[c.length - 1];
    };
    d.last = function(c) {
      return c.length && c[c.length - 1];
    };
    d.peek = function(c) {
      return c[c.length - 1];
    };
    d.indexOf = function(c, e) {
      for (var g = 0, w = c.length;g < w;g++) {
        if (c[g] === e) {
          return g;
        }
      }
      return -1;
    };
    d.equals = function(c, e) {
      if (c.length !== e.length) {
        return !1;
      }
      for (var g = 0;g < c.length;g++) {
        if (c[g] !== e[g]) {
          return !1;
        }
      }
      return !0;
    };
    d.pushUnique = f;
    d.unique = function(c) {
      for (var e = [], g = 0;g < c.length;g++) {
        f(e, c[g]);
      }
      return e;
    };
    d.copyFrom = function(c, e) {
      c.length = 0;
      d.pushMany(c, e);
    };
    d.ensureTypedArrayCapacity = function(c, e) {
      if (c.length < e) {
        var g = c;
        c = new c.constructor(h.IntegerUtilities.nearestPowerOfTwo(e));
        c.set(g, 0);
      }
      return c;
    };
    d.memCopy = function(c, e, g, w, f) {
      void 0 === g && (g = 0);
      void 0 === w && (w = 0);
      void 0 === f && (f = 0);
      0 < w || 0 < f && f < e.length ? (0 >= f && (f = e.length - w), c.set(e.subarray(w, w + f), g)) : c.set(e, g);
    };
    var g = function() {
      function c(e) {
        void 0 === e && (e = 16);
        this._f32 = this._i32 = this._u16 = this._u8 = null;
        this._offset = 0;
        this.ensureCapacity(e);
      }
      c.prototype.reset = function() {
        this._offset = 0;
      };
      Object.defineProperty(c.prototype, "offset", {get:function() {
        return this._offset;
      }, enumerable:!0, configurable:!0});
      c.prototype.getIndex = function(e) {
        return this._offset / e;
      };
      c.prototype.ensureAdditionalCapacity = function(e) {
        this.ensureCapacity(this._offset + e);
      };
      c.prototype.ensureCapacity = function(e) {
        if (!this._u8) {
          this._u8 = new Uint8Array(e);
        } else {
          if (this._u8.length > e) {
            return;
          }
        }
        var c = 2 * this._u8.length;
        c < e && (c = e);
        e = new Uint8Array(c);
        e.set(this._u8, 0);
        this._u8 = e;
        this._u16 = new Uint16Array(e.buffer);
        this._i32 = new Int32Array(e.buffer);
        this._f32 = new Float32Array(e.buffer);
      };
      c.prototype.writeInt = function(e) {
        this.ensureCapacity(this._offset + 4);
        this.writeIntUnsafe(e);
      };
      c.prototype.writeIntAt = function(e, c) {
        this.ensureCapacity(c + 4);
        this._i32[c >> 2] = e;
      };
      c.prototype.writeIntUnsafe = function(e) {
        this._i32[this._offset >> 2] = e;
        this._offset += 4;
      };
      c.prototype.writeFloat = function(e) {
        this.ensureCapacity(this._offset + 4);
        this.writeFloatUnsafe(e);
      };
      c.prototype.writeFloatUnsafe = function(e) {
        this._f32[this._offset >> 2] = e;
        this._offset += 4;
      };
      c.prototype.write4Floats = function(e, c, g, f) {
        this.ensureCapacity(this._offset + 16);
        this.write4FloatsUnsafe(e, c, g, f);
      };
      c.prototype.write4FloatsUnsafe = function(e, c, g, f) {
        var d = this._offset >> 2;
        this._f32[d + 0] = e;
        this._f32[d + 1] = c;
        this._f32[d + 2] = g;
        this._f32[d + 3] = f;
        this._offset += 16;
      };
      c.prototype.write6Floats = function(e, c, g, f, d, b) {
        this.ensureCapacity(this._offset + 24);
        this.write6FloatsUnsafe(e, c, g, f, d, b);
      };
      c.prototype.write6FloatsUnsafe = function(e, c, g, f, d, b) {
        var a = this._offset >> 2;
        this._f32[a + 0] = e;
        this._f32[a + 1] = c;
        this._f32[a + 2] = g;
        this._f32[a + 3] = f;
        this._f32[a + 4] = d;
        this._f32[a + 5] = b;
        this._offset += 24;
      };
      c.prototype.subF32View = function() {
        return this._f32.subarray(0, this._offset >> 2);
      };
      c.prototype.subI32View = function() {
        return this._i32.subarray(0, this._offset >> 2);
      };
      c.prototype.subU16View = function() {
        return this._u16.subarray(0, this._offset >> 1);
      };
      c.prototype.subU8View = function() {
        return this._u8.subarray(0, this._offset);
      };
      c.prototype.hashWords = function(e, c, g) {
        c = this._i32;
        for (var f = 0;f < g;f++) {
          e = (31 * e | 0) + c[f] | 0;
        }
        return e;
      };
      c.prototype.reserve = function(e) {
        e = e + 3 & -4;
        this.ensureCapacity(this._offset + e);
        this._offset += e;
      };
      return c;
    }();
    d.ArrayWriter = g;
  })(h.ArrayUtilities || (h.ArrayUtilities = {}));
  var b = function() {
    function d(f) {
      this._u8 = new Uint8Array(f);
      this._u16 = new Uint16Array(f);
      this._i32 = new Int32Array(f);
      this._f32 = new Float32Array(f);
      this._offset = 0;
    }
    Object.defineProperty(d.prototype, "offset", {get:function() {
      return this._offset;
    }, enumerable:!0, configurable:!0});
    d.prototype.isEmpty = function() {
      return this._offset === this._u8.length;
    };
    d.prototype.readInt = function() {
      var f = this._i32[this._offset >> 2];
      this._offset += 4;
      return f;
    };
    d.prototype.readFloat = function() {
      var f = this._f32[this._offset >> 2];
      this._offset += 4;
      return f;
    };
    return d;
  }();
  h.ArrayReader = b;
  (function(d) {
    function f(c, e) {
      return Object.prototype.hasOwnProperty.call(c, e);
    }
    function g(c, e) {
      for (var g in e) {
        f(e, g) && (c[g] = e[g]);
      }
    }
    d.boxValue = function(c) {
      return void 0 == c || r(c) ? c : Object(c);
    };
    d.toKeyValueArray = function(c) {
      var e = Object.prototype.hasOwnProperty, g = [], f;
      for (f in c) {
        e.call(c, f) && g.push([f, c[f]]);
      }
      return g;
    };
    d.isPrototypeWriteable = function(c) {
      return Object.getOwnPropertyDescriptor(c, "prototype").writable;
    };
    d.hasOwnProperty = f;
    d.propertyIsEnumerable = function(c, e) {
      return Object.prototype.propertyIsEnumerable.call(c, e);
    };
    d.getPropertyDescriptor = function(c, e) {
      do {
        var g = Object.getOwnPropertyDescriptor(c, e);
        if (g) {
          return g;
        }
        c = Object.getPrototypeOf(c);
      } while (c);
      return null;
    };
    d.hasOwnGetter = function(c, e) {
      var g = Object.getOwnPropertyDescriptor(c, e);
      return !(!g || !g.get);
    };
    d.getOwnGetter = function(c, e) {
      var g = Object.getOwnPropertyDescriptor(c, e);
      return g ? g.get : null;
    };
    d.hasOwnSetter = function(c, e) {
      var g = Object.getOwnPropertyDescriptor(c, e);
      return !(!g || !g.set);
    };
    d.createMap = function() {
      return Object.create(null);
    };
    d.createArrayMap = function() {
      return [];
    };
    d.defineReadOnlyProperty = function(c, e, g) {
      Object.defineProperty(c, e, {value:g, writable:!1, configurable:!0, enumerable:!1});
    };
    d.getOwnPropertyDescriptors = function(c) {
      for (var e = d.createMap(), g = Object.getOwnPropertyNames(c), f = 0;f < g.length;f++) {
        e[g[f]] = Object.getOwnPropertyDescriptor(c, g[f]);
      }
      return e;
    };
    d.cloneObject = function(c) {
      var e = Object.create(Object.getPrototypeOf(c));
      g(e, c);
      return e;
    };
    d.copyProperties = function(c, e) {
      for (var g in e) {
        c[g] = e[g];
      }
    };
    d.copyOwnProperties = g;
    d.copyOwnPropertyDescriptors = function(c, e, g, d, b) {
      void 0 === g && (g = null);
      void 0 === d && (d = !0);
      void 0 === b && (b = !1);
      for (var a in e) {
        if (f(e, a) && (!g || g(a))) {
          var l = Object.getOwnPropertyDescriptor(e, a);
          if (d || !f(c, a)) {
            try {
              b && !1 === l.writable && (l.writable = !0), Object.defineProperty(c, a, l);
            } catch (k) {
              n.assert("Can't define: " + a);
            }
          }
        }
      }
    };
    d.copyPropertiesByList = function(c, e, g) {
      for (var f = 0;f < g.length;f++) {
        var d = g[f];
        c[d] = e[d];
      }
    };
    d.getLatestGetterOrSetterPropertyDescriptor = function(c, e) {
      for (var g = {};c;) {
        var f = Object.getOwnPropertyDescriptor(c, e);
        f && (g.get = g.get || f.get, g.set = g.set || f.set);
        if (g.get && g.set) {
          break;
        }
        c = Object.getPrototypeOf(c);
      }
      return g;
    };
    d.defineNonEnumerableGetterOrSetter = function(c, e, g, f) {
      var b = d.getLatestGetterOrSetterPropertyDescriptor(c, e);
      b.configurable = !0;
      b.enumerable = !1;
      f ? b.get = g : b.set = g;
      Object.defineProperty(c, e, b);
    };
    d.defineNonEnumerableGetter = function(c, e, g) {
      Object.defineProperty(c, e, {get:g, configurable:!0, enumerable:!1});
    };
    d.defineNonEnumerableSetter = function(c, e, g) {
      Object.defineProperty(c, e, {set:g, configurable:!0, enumerable:!1});
    };
    d.defineNonEnumerableProperty = function(c, e, g) {
      Object.defineProperty(c, e, {value:g, writable:!0, configurable:!0, enumerable:!1});
    };
    d.defineNonEnumerableForwardingProperty = function(c, e, g) {
      Object.defineProperty(c, e, {get:l.makeForwardingGetter(g), set:l.makeForwardingSetter(g), writable:!0, configurable:!0, enumerable:!1});
    };
    d.defineNewNonEnumerableProperty = function(c, e, g) {
      d.defineNonEnumerableProperty(c, e, g);
    };
    d.createPublicAliases = function(c, e) {
      for (var g = {value:null, writable:!0, configurable:!0, enumerable:!1}, f = 0;f < e.length;f++) {
        var d = e[f];
        g.value = c[d];
        Object.defineProperty(c, "$Bg" + d, g);
      }
    };
  })(h.ObjectUtilities || (h.ObjectUtilities = {}));
  var l;
  (function(d) {
    d.makeForwardingGetter = function(f) {
      return new Function('return this["' + f + '"]//# sourceURL=fwd-get-' + f + ".as");
    };
    d.makeForwardingSetter = function(f) {
      return new Function("value", 'this["' + f + '"] = value;//# sourceURL=fwd-set-' + f + ".as");
    };
    d.bindSafely = function(f, g) {
      function c() {
        return f.apply(g, arguments);
      }
      c.boundTo = g;
      return c;
    };
  })(l = h.FunctionUtilities || (h.FunctionUtilities = {}));
  (function(d) {
    function f(e) {
      return "string" === typeof e ? '"' + e + '"' : "number" === typeof e || "boolean" === typeof e ? String(e) : e instanceof Array ? "[] " + e.length : typeof e;
    }
    function g(c, g, f) {
      e[0] = c;
      e[1] = g;
      e[2] = f;
      return e.join("");
    }
    function c(e, c, g, f) {
      y[0] = e;
      y[1] = c;
      y[2] = g;
      y[3] = f;
      return y.join("");
    }
    d.repeatString = function(e, c) {
      for (var g = "", f = 0;f < c;f++) {
        g += e;
      }
      return g;
    };
    d.memorySizeToString = function(e) {
      e |= 0;
      return 1024 > e ? e + " B" : 1048576 > e ? (e / 1024).toFixed(2) + "KB" : (e / 1048576).toFixed(2) + "MB";
    };
    d.toSafeString = f;
    d.toSafeArrayString = function(e) {
      for (var c = [], g = 0;g < e.length;g++) {
        c.push(f(e[g]));
      }
      return c.join(", ");
    };
    d.utf8decode = function(e) {
      for (var c = new Uint8Array(4 * e.length), g = 0, f = 0, d = e.length;f < d;f++) {
        var w = e.charCodeAt(f);
        if (127 >= w) {
          c[g++] = w;
        } else {
          if (55296 <= w && 56319 >= w) {
            var y = e.charCodeAt(f + 1);
            56320 <= y && 57343 >= y && (w = ((w & 1023) << 10) + (y & 1023) + 65536, ++f);
          }
          0 !== (w & 4292870144) ? (c[g++] = 248 | w >>> 24 & 3, c[g++] = 128 | w >>> 18 & 63, c[g++] = 128 | w >>> 12 & 63, c[g++] = 128 | w >>> 6 & 63) : 0 !== (w & 4294901760) ? (c[g++] = 240 | w >>> 18 & 7, c[g++] = 128 | w >>> 12 & 63, c[g++] = 128 | w >>> 6 & 63) : 0 !== (w & 4294965248) ? (c[g++] = 224 | w >>> 12 & 15, c[g++] = 128 | w >>> 6 & 63) : c[g++] = 192 | w >>> 6 & 31;
          c[g++] = 128 | w & 63;
        }
      }
      return c.subarray(0, g);
    };
    d.utf8encode = function(e) {
      for (var c = 0, g = "";c < e.length;) {
        var f = e[c++] & 255;
        if (127 >= f) {
          g += String.fromCharCode(f);
        } else {
          var d = 192, w = 5;
          do {
            if ((f & (d >> 1 | 128)) === d) {
              break;
            }
            d = d >> 1 | 128;
            --w;
          } while (0 <= w);
          if (0 >= w) {
            g += String.fromCharCode(f);
          } else {
            for (var f = f & (1 << w) - 1, d = !1, y = 5;y >= w;--y) {
              var b = e[c++];
              if (128 != (b & 192)) {
                d = !0;
                break;
              }
              f = f << 6 | b & 63;
            }
            if (d) {
              for (w = c - (7 - y);w < c;++w) {
                g += String.fromCharCode(e[w] & 255);
              }
            } else {
              g = 65536 <= f ? g + String.fromCharCode(f - 65536 >> 10 & 1023 | 55296, f & 1023 | 56320) : g + String.fromCharCode(f);
            }
          }
        }
      }
      return g;
    };
    d.base64ArrayBuffer = function(e) {
      var f = "";
      e = new Uint8Array(e);
      for (var d = e.byteLength, w = d % 3, d = d - w, y, b, a, I, l = 0;l < d;l += 3) {
        I = e[l] << 16 | e[l + 1] << 8 | e[l + 2], y = (I & 16515072) >> 18, b = (I & 258048) >> 12, a = (I & 4032) >> 6, I &= 63, f += c("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[y], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[b], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[a], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[I]);
      }
      1 == w ? (I = e[d], f += g("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(I & 252) >> 2], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(I & 3) << 4], "==")) : 2 == w && (I = e[d] << 8 | e[d + 1], f += c("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(I & 64512) >> 10], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(I & 1008) >> 4], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(I & 15) << 
      2], "="));
      return f;
    };
    d.escapeString = function(e) {
      void 0 !== e && (e = e.replace(/[^\w$]/gi, "$"), /^\d/.test(e) && (e = "$" + e));
      return e;
    };
    d.fromCharCodeArray = function(e) {
      for (var c = "", g = 0;g < e.length;g += 16384) {
        var f = Math.min(e.length - g, 16384), c = c + String.fromCharCode.apply(null, e.subarray(g, g + f))
      }
      return c;
    };
    d.variableLengthEncodeInt32 = function(e) {
      for (var c = 32 - Math.clz32(e), g = Math.ceil(c / 6), c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[g], g = g - 1;0 <= g;g--) {
        c += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[e >> 6 * g & 63];
      }
      return c;
    };
    d.toEncoding = function(e) {
      return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[e];
    };
    d.fromEncoding = function(e) {
      if (65 <= e && 90 >= e) {
        return e - 65;
      }
      if (97 <= e && 122 >= e) {
        return e - 71;
      }
      if (48 <= e && 57 >= e) {
        return e + 4;
      }
      if (36 === e) {
        return 62;
      }
      if (95 === e) {
        return 63;
      }
    };
    d.variableLengthDecodeInt32 = function(e) {
      for (var c = d.fromEncoding(e.charCodeAt(0)), g = 0, f = 0;f < c;f++) {
        var w = 6 * (c - f - 1), g = g | d.fromEncoding(e.charCodeAt(1 + f)) << w
      }
      return g;
    };
    d.trimMiddle = function(e, c) {
      if (e.length <= c) {
        return e;
      }
      var g = c >> 1, f = c - g - 1;
      return e.substr(0, g) + "\u2026" + e.substr(e.length - f, f);
    };
    d.multiple = function(e, c) {
      for (var g = "", f = 0;f < c;f++) {
        g += e;
      }
      return g;
    };
    d.indexOfAny = function(e, c, g) {
      for (var f = e.length, d = 0;d < c.length;d++) {
        var w = e.indexOf(c[d], g);
        0 <= w && (f = Math.min(f, w));
      }
      return f === e.length ? -1 : f;
    };
    var e = Array(3), y = Array(4), w = Array(5), b = Array(6), a = Array(7), l = Array(8), k = Array(9);
    d.concat3 = g;
    d.concat4 = c;
    d.concat5 = function(e, c, g, f, d) {
      w[0] = e;
      w[1] = c;
      w[2] = g;
      w[3] = f;
      w[4] = d;
      return w.join("");
    };
    d.concat6 = function(e, c, g, f, d, w) {
      b[0] = e;
      b[1] = c;
      b[2] = g;
      b[3] = f;
      b[4] = d;
      b[5] = w;
      return b.join("");
    };
    d.concat7 = function(e, c, g, f, d, w, y) {
      a[0] = e;
      a[1] = c;
      a[2] = g;
      a[3] = f;
      a[4] = d;
      a[5] = w;
      a[6] = y;
      return a.join("");
    };
    d.concat8 = function(e, c, g, f, d, w, y, b) {
      l[0] = e;
      l[1] = c;
      l[2] = g;
      l[3] = f;
      l[4] = d;
      l[5] = w;
      l[6] = y;
      l[7] = b;
      return l.join("");
    };
    d.concat9 = function(e, c, g, f, d, w, y, b, a) {
      k[0] = e;
      k[1] = c;
      k[2] = g;
      k[3] = f;
      k[4] = d;
      k[5] = w;
      k[6] = y;
      k[7] = b;
      k[8] = a;
      return k.join("");
    };
  })(h.StringUtilities || (h.StringUtilities = {}));
  (function(d) {
    var f = new Uint8Array([7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21]), g = new Int32Array([-680876936, -389564586, 606105819, -1044525330, -176418897, 1200080426, -1473231341, -45705983, 1770035416, -1958414417, -42063, -1990404162, 1804603682, -40341101, -1502002290, 1236535329, -165796510, -1069501632, 
    643717713, -373897302, -701558691, 38016083, -660478335, -405537848, 568446438, -1019803690, -187363961, 1163531501, -1444681467, -51403784, 1735328473, -1926607734, -378558, -2022574463, 1839030562, -35309556, -1530992060, 1272893353, -155497632, -1094730640, 681279174, -358537222, -722521979, 76029189, -640364487, -421815835, 530742520, -995338651, -198630844, 1126891415, -1416354905, -57434055, 1700485571, -1894986606, -1051523, -2054922799, 1873313359, -30611744, -1560198380, 1309151649, 
    -145523070, -1120210379, 718787259, -343485551]);
    d.hashBytesTo32BitsMD5 = function(c, e, d) {
      var w = 1732584193, b = -271733879, a = -1732584194, l = 271733878, k = d + 72 & -64, v = new Uint8Array(k), m;
      for (m = 0;m < d;++m) {
        v[m] = c[e++];
      }
      v[m++] = 128;
      for (c = k - 8;m < c;) {
        v[m++] = 0;
      }
      v[m++] = d << 3 & 255;
      v[m++] = d >> 5 & 255;
      v[m++] = d >> 13 & 255;
      v[m++] = d >> 21 & 255;
      v[m++] = d >>> 29 & 255;
      v[m++] = 0;
      v[m++] = 0;
      v[m++] = 0;
      c = new Int32Array(16);
      for (m = 0;m < k;) {
        for (d = 0;16 > d;++d, m += 4) {
          c[d] = v[m] | v[m + 1] << 8 | v[m + 2] << 16 | v[m + 3] << 24;
        }
        var u = w;
        e = b;
        var t = a, n = l, q, h;
        for (d = 0;64 > d;++d) {
          16 > d ? (q = e & t | ~e & n, h = d) : 32 > d ? (q = n & e | ~n & t, h = 5 * d + 1 & 15) : 48 > d ? (q = e ^ t ^ n, h = 3 * d + 5 & 15) : (q = t ^ (e | ~n), h = 7 * d & 15);
          var x = n, u = u + q + g[d] + c[h] | 0;
          q = f[d];
          n = t;
          t = e;
          e = e + (u << q | u >>> 32 - q) | 0;
          u = x;
        }
        w = w + u | 0;
        b = b + e | 0;
        a = a + t | 0;
        l = l + n | 0;
      }
      return w;
    };
    d.hashBytesTo32BitsAdler = function(c, e, g) {
      var f = 1, d = 0;
      for (g = e + g;e < g;++e) {
        f = (f + (c[e] & 255)) % 65521, d = (d + f) % 65521;
      }
      return d << 16 | f;
    };
    d.mixHash = function(c, e) {
      return (31 * c | 0) + e | 0;
    };
  })(h.HashUtilities || (h.HashUtilities = {}));
  var u = function() {
    function d() {
    }
    d.seed = function(f) {
      d._state[0] = f;
      d._state[1] = f;
    };
    d.reset = function() {
      d._state[0] = 57005;
      d._state[1] = 48879;
    };
    d.next = function() {
      var f = this._state, g = Math.imul(18273, f[0] & 65535) + (f[0] >>> 16) | 0;
      f[0] = g;
      var c = Math.imul(36969, f[1] & 65535) + (f[1] >>> 16) | 0;
      f[1] = c;
      f = (g << 16) + (c & 65535) | 0;
      return 2.3283064365386963E-10 * (0 > f ? f + 4294967296 : f);
    };
    d._state = new Uint32Array([57005, 48879]);
    return d;
  }();
  h.Random = u;
  Math.random = function() {
    return u.next();
  };
  h.installTimeWarper = function() {
    var d = Date, f = 1428107694580;
    jsGlobal.Date = function(g, c, e, y, w, b, a) {
      switch(arguments.length) {
        case 0:
          return new d(f);
        case 1:
          return new d(g);
        case 2:
          return new d(g, c);
        case 3:
          return new d(g, c, e);
        case 4:
          return new d(g, c, e, y);
        case 5:
          return new d(g, c, e, y, w);
        case 6:
          return new d(g, c, e, y, w, b);
        default:
          return new d(g, c, e, y, w, b, a);
      }
    };
    jsGlobal.Date.now = function() {
      return f += 10;
    };
    jsGlobal.Date.UTC = function() {
      return d.UTC.apply(d, arguments);
    };
  };
  (function() {
    function d() {
      this.id = "$weakmap" + f++;
    }
    if ("function" !== typeof jsGlobal.WeakMap) {
      var f = 0;
      d.prototype = {has:function(g) {
        return g.hasOwnProperty(this.id);
      }, get:function(g, c) {
        return g.hasOwnProperty(this.id) ? g[this.id] : c;
      }, set:function(g, c) {
        Object.defineProperty(g, this.id, {value:c, enumerable:!1, configurable:!0});
      }, delete:function(g) {
        delete g[this.id];
      }};
      jsGlobal.WeakMap = d;
    }
  })();
  b = function() {
    function d() {
      "undefined" !== typeof ShumwayCom && ShumwayCom.getWeakMapKeys ? (this._map = new WeakMap, this._id = 0, this._newAdditions = []) : this._list = [];
    }
    d.prototype.clear = function() {
      this._map ? this._map.clear() : this._list.length = 0;
    };
    d.prototype.push = function(f) {
      this._map ? (this._map.set(f, this._id++), this._newAdditions.forEach(function(g) {
        g.push(f);
      })) : this._list.push(f);
    };
    d.prototype.remove = function(f) {
      this._map ? this._map.delete(f) : this._list[this._list.indexOf(f)] = null;
    };
    d.prototype.forEach = function(f) {
      if (this._map) {
        var g = [];
        this._newAdditions.push(g);
        var c = this._map, e = ShumwayCom.getWeakMapKeys(c);
        e.sort(function(e, g) {
          return c.get(e) - c.get(g);
        });
        e.forEach(function(e) {
          0 !== e._referenceCount && f(e);
        });
        g.forEach(function(e) {
          0 !== e._referenceCount && f(e);
        });
        this._newAdditions.splice(this._newAdditions.indexOf(g), 1);
      } else {
        for (var g = this._list, d = 0, e = 0;e < g.length;e++) {
          var w = g[e];
          w && (0 === w._referenceCount ? (g[e] = null, d++) : f(w));
        }
        if (16 < d && d > g.length >> 2) {
          d = [];
          for (e = 0;e < g.length;e++) {
            (w = g[e]) && 0 < w._referenceCount && d.push(w);
          }
          this._list = d;
        }
      }
    };
    Object.defineProperty(d.prototype, "length", {get:function() {
      return this._map ? -1 : this._list.length;
    }, enumerable:!0, configurable:!0});
    return d;
  }();
  h.WeakList = b;
  var k;
  (function(d) {
    d.pow2 = function(f) {
      return f === (f | 0) ? 0 > f ? 1 / (1 << -f) : 1 << f : Math.pow(2, f);
    };
    d.clamp = function(f, g, c) {
      return Math.max(g, Math.min(c, f));
    };
    d.roundHalfEven = function(f) {
      if (.5 === Math.abs(f % 1)) {
        var g = Math.floor(f);
        return 0 === g % 2 ? g : Math.ceil(f);
      }
      return Math.round(f);
    };
    d.altTieBreakRound = function(f, g) {
      return .5 !== Math.abs(f % 1) || g ? Math.round(f) : f | 0;
    };
    d.epsilonEquals = function(f, g) {
      return 1E-7 > Math.abs(f - g);
    };
  })(k = h.NumberUtilities || (h.NumberUtilities = {}));
  (function(d) {
    d[d.MaxU16 = 65535] = "MaxU16";
    d[d.MaxI16 = 32767] = "MaxI16";
    d[d.MinI16 = -32768] = "MinI16";
  })(h.Numbers || (h.Numbers = {}));
  var t;
  (function(d) {
    function f(e) {
      return 256 * e << 16 >> 16;
    }
    function g(e) {
      return e / 256;
    }
    var c = new ArrayBuffer(8);
    d.i8 = new Int8Array(c);
    d.u8 = new Uint8Array(c);
    d.i32 = new Int32Array(c);
    d.f32 = new Float32Array(c);
    d.f64 = new Float64Array(c);
    d.nativeLittleEndian = 1 === (new Int8Array((new Int32Array([1])).buffer))[0];
    d.floatToInt32 = function(e) {
      d.f32[0] = e;
      return d.i32[0];
    };
    d.int32ToFloat = function(e) {
      d.i32[0] = e;
      return d.f32[0];
    };
    d.swap16 = function(e) {
      return (e & 255) << 8 | e >> 8 & 255;
    };
    d.swap32 = function(e) {
      return (e & 255) << 24 | (e & 65280) << 8 | e >> 8 & 65280 | e >> 24 & 255;
    };
    d.toS8U8 = f;
    d.fromS8U8 = g;
    d.clampS8U8 = function(e) {
      return g(f(e));
    };
    d.toS16 = function(e) {
      return e << 16 >> 16;
    };
    d.bitCount = function(e) {
      e -= e >> 1 & 1431655765;
      e = (e & 858993459) + (e >> 2 & 858993459);
      return 16843009 * (e + (e >> 4) & 252645135) >> 24;
    };
    d.ones = function(e) {
      e -= e >> 1 & 1431655765;
      e = (e & 858993459) + (e >> 2 & 858993459);
      return 16843009 * (e + (e >> 4) & 252645135) >> 24;
    };
    d.trailingZeros = function(e) {
      return d.ones((e & -e) - 1);
    };
    d.getFlags = function(e, c) {
      var g = "";
      for (e = 0;e < c.length;e++) {
        e & 1 << e && (g += c[e] + " ");
      }
      return 0 === g.length ? "" : g.trim();
    };
    d.isPowerOfTwo = function(e) {
      return e && 0 === (e & e - 1);
    };
    d.roundToMultipleOfFour = function(e) {
      return e + 3 & -4;
    };
    d.nearestPowerOfTwo = function(e) {
      e--;
      e |= e >> 1;
      e |= e >> 2;
      e |= e >> 4;
      e |= e >> 8;
      e |= e >> 16;
      e++;
      return e;
    };
    d.roundToMultipleOfPowerOfTwo = function(e, c) {
      var g = (1 << c) - 1;
      return e + g & ~g;
    };
    d.toHEX = function(e) {
      return "0x" + ("00000000" + (0 > e ? 4294967295 + e + 1 : e).toString(16)).substr(-8);
    };
    Math.imul || (Math.imul = function(e, c) {
      var g = e & 65535, f = c & 65535;
      return g * f + ((e >>> 16 & 65535) * f + g * (c >>> 16 & 65535) << 16 >>> 0) | 0;
    });
    Math.clz32 || (Math.clz32 = function(e) {
      e |= e >> 1;
      e |= e >> 2;
      e |= e >> 4;
      e |= e >> 8;
      return 32 - d.ones(e | e >> 16);
    });
  })(t = h.IntegerUtilities || (h.IntegerUtilities = {}));
  (function(d) {
    function f(g, c, e, f, d, b) {
      return (e - g) * (b - c) - (f - c) * (d - g);
    }
    d.pointInPolygon = function(g, c, e) {
      for (var f = 0, d = e.length - 2, b = 0;b < d;b += 2) {
        var a = e[b + 0], l = e[b + 1], k = e[b + 2], v = e[b + 3];
        (l <= c && v > c || l > c && v <= c) && g < a + (c - l) / (v - l) * (k - a) && f++;
      }
      return 1 === (f & 1);
    };
    d.signedArea = f;
    d.counterClockwise = function(g, c, e, d, w, b) {
      return 0 < f(g, c, e, d, w, b);
    };
    d.clockwise = function(g, c, e, d, w, b) {
      return 0 > f(g, c, e, d, w, b);
    };
    d.pointInPolygonInt32 = function(g, c, e) {
      g |= 0;
      c |= 0;
      for (var f = 0, d = e.length - 2, b = 0;b < d;b += 2) {
        var a = e[b + 0], l = e[b + 1], k = e[b + 2], v = e[b + 3];
        (l <= c && v > c || l > c && v <= c) && g < a + (c - l) / (v - l) * (k - a) && f++;
      }
      return 1 === (f & 1);
    };
  })(h.GeometricUtilities || (h.GeometricUtilities = {}));
  (function(d) {
    d[d.Error = 1] = "Error";
    d[d.Warn = 2] = "Warn";
    d[d.Debug = 4] = "Debug";
    d[d.Log = 8] = "Log";
    d[d.Info = 16] = "Info";
    d[d.All = 31] = "All";
  })(h.LogLevel || (h.LogLevel = {}));
  b = function() {
    function d(f, g) {
      void 0 === f && (f = !1);
      this._tab = "  ";
      this._padding = "";
      this._suppressOutput = f;
      this._out = g || d._consoleOut;
      this._outNoNewline = g || d._consoleOutNoNewline;
    }
    Object.defineProperty(d.prototype, "suppressOutput", {get:function() {
      return this._suppressOutput;
    }, set:function(f) {
      this._suppressOutput = f;
    }, enumerable:!0, configurable:!0});
    d.prototype.write = function(f, g) {
      void 0 === f && (f = "");
      void 0 === g && (g = !1);
      this._suppressOutput || this._outNoNewline((g ? this._padding : "") + f);
    };
    d.prototype.writeLn = function(f) {
      void 0 === f && (f = "");
      this._suppressOutput || this._out(this._padding + f);
    };
    d.prototype.writeObject = function(f, g) {
      void 0 === f && (f = "");
      this._suppressOutput || this._out(this._padding + f, g);
    };
    d.prototype.writeTimeLn = function(f) {
      void 0 === f && (f = "");
      this._suppressOutput || this._out(this._padding + performance.now().toFixed(2) + " " + f);
    };
    d.prototype.writeComment = function(f) {
      f = (f || "").split("\n");
      if (1 === f.length) {
        this.writeLn("// " + f[0]);
      } else {
        this.writeLn("/**");
        for (var g = 0;g < f.length;g++) {
          this.writeLn(" * " + f[g]);
        }
        this.writeLn(" */");
      }
    };
    d.prototype.writeLns = function(f) {
      f = (f || "").split("\n");
      for (var g = 0;g < f.length;g++) {
        this.writeLn(f[g]);
      }
    };
    d.prototype.errorLn = function(f) {
      d.logLevel & 1 && this.boldRedLn(f);
    };
    d.prototype.warnLn = function(f) {
      d.logLevel & 2 && this.yellowLn(f);
    };
    d.prototype.debugLn = function(f) {
      d.logLevel & 4 && this.purpleLn(f);
    };
    d.prototype.logLn = function(f) {
      d.logLevel & 8 && this.writeLn(f);
    };
    d.prototype.infoLn = function(f) {
      d.logLevel & 16 && this.writeLn(f);
    };
    d.prototype.yellowLn = function(f) {
      this.colorLn(d.YELLOW, f);
    };
    d.prototype.greenLn = function(f) {
      this.colorLn(d.GREEN, f);
    };
    d.prototype.boldRedLn = function(f) {
      this.colorLn(d.BOLD_RED, f);
    };
    d.prototype.redLn = function(f) {
      this.colorLn(d.RED, f);
    };
    d.prototype.purpleLn = function(f) {
      this.colorLn(d.PURPLE, f);
    };
    d.prototype.colorLn = function(f, g) {
      this._suppressOutput || (inBrowser ? this._out(this._padding + g) : this._out(this._padding + f + g + d.ENDC));
    };
    d.prototype.redLns = function(f) {
      this.colorLns(d.RED, f);
    };
    d.prototype.colorLns = function(f, g) {
      for (var c = (g || "").split("\n"), e = 0;e < c.length;e++) {
        this.colorLn(f, c[e]);
      }
    };
    d.prototype.enter = function(f) {
      this._suppressOutput || this._out(this._padding + f);
      this.indent();
    };
    d.prototype.leaveAndEnter = function(f) {
      this.leave(f);
      this.indent();
    };
    d.prototype.leave = function(f) {
      this.outdent();
      !this._suppressOutput && f && this._out(this._padding + f);
    };
    d.prototype.indent = function() {
      this._padding += this._tab;
    };
    d.prototype.outdent = function() {
      0 < this._padding.length && (this._padding = this._padding.substring(0, this._padding.length - this._tab.length));
    };
    d.prototype.writeArray = function(f, g, c) {
      void 0 === g && (g = !1);
      void 0 === c && (c = !1);
      g = g || !1;
      for (var e = 0, d = f.length;e < d;e++) {
        var w = "";
        g && (w = null === f[e] ? "null" : void 0 === f[e] ? "undefined" : f[e].constructor.name, w += " ");
        var b = c ? "" : ("" + e).padRight(" ", 4);
        this.writeLn(b + w + f[e]);
      }
    };
    d.PURPLE = "\u001b[94m";
    d.YELLOW = "\u001b[93m";
    d.GREEN = "\u001b[92m";
    d.RED = "\u001b[91m";
    d.BOLD_RED = "\u001b[1;91m";
    d.ENDC = "\u001b[0m";
    d.logLevel = 31;
    d._consoleOut = console.log.bind(console);
    d._consoleOutNoNewline = console.log.bind(console);
    return d;
  }();
  h.IndentingWriter = b;
  var q = function() {
    return function(d, f) {
      this.value = d;
      this.next = f;
    };
  }(), b = function() {
    function d(f) {
      this._compare = f;
      this._head = null;
      this._length = 0;
    }
    d.prototype.push = function(f) {
      this._length++;
      if (this._head) {
        var g = this._head, c = null;
        f = new q(f, null);
        for (var e = this._compare;g;) {
          if (0 < e(g.value, f.value)) {
            c ? (f.next = g, c.next = f) : (f.next = this._head, this._head = f);
            return;
          }
          c = g;
          g = g.next;
        }
        c.next = f;
      } else {
        this._head = new q(f, null);
      }
    };
    d.prototype.forEach = function(f) {
      for (var g = this._head, c = null;g;) {
        var e = f(g.value);
        if (e === d.RETURN) {
          break;
        } else {
          e === d.DELETE ? g = c ? c.next = g.next : this._head = this._head.next : (c = g, g = g.next);
        }
      }
    };
    d.prototype.isEmpty = function() {
      return !this._head;
    };
    d.prototype.pop = function() {
      if (this._head) {
        this._length--;
        var f = this._head;
        this._head = this._head.next;
        return f.value;
      }
    };
    d.prototype.contains = function(f) {
      for (var g = this._head;g;) {
        if (g.value === f) {
          return !0;
        }
        g = g.next;
      }
      return !1;
    };
    d.prototype.toString = function() {
      for (var f = "[", g = this._head;g;) {
        f += g.value.toString(), (g = g.next) && (f += ",");
      }
      return f + "]";
    };
    d.RETURN = 1;
    d.DELETE = 2;
    return d;
  }();
  h.SortedList = b;
  b = function() {
    function d(f, g) {
      void 0 === g && (g = 12);
      this.start = this.index = 0;
      this._size = 1 << g;
      this._mask = this._size - 1;
      this.array = new f(this._size);
    }
    d.prototype.get = function(f) {
      return this.array[f];
    };
    d.prototype.forEachInReverse = function(f) {
      if (!this.isEmpty()) {
        for (var g = 0 === this.index ? this._size - 1 : this.index - 1, c = this.start - 1 & this._mask;g !== c && !f(this.array[g], g);) {
          g = 0 === g ? this._size - 1 : g - 1;
        }
      }
    };
    d.prototype.write = function(f) {
      this.array[this.index] = f;
      this.index = this.index + 1 & this._mask;
      this.index === this.start && (this.start = this.start + 1 & this._mask);
    };
    d.prototype.isFull = function() {
      return (this.index + 1 & this._mask) === this.start;
    };
    d.prototype.isEmpty = function() {
      return this.index === this.start;
    };
    d.prototype.reset = function() {
      this.start = this.index = 0;
    };
    return d;
  }();
  h.CircularBuffer = b;
  (function(d) {
    function f(e) {
      return e + (d.BITS_PER_WORD - 1) >> d.ADDRESS_BITS_PER_WORD << d.ADDRESS_BITS_PER_WORD;
    }
    function g(e, c) {
      e = e || "1";
      c = c || "0";
      for (var g = "", f = 0;f < length;f++) {
        g += this.get(f) ? e : c;
      }
      return g;
    }
    function c(e) {
      for (var c = [], g = 0;g < length;g++) {
        this.get(g) && c.push(e ? e[g] : g);
      }
      return c.join(", ");
    }
    d.ADDRESS_BITS_PER_WORD = 5;
    d.BITS_PER_WORD = 1 << d.ADDRESS_BITS_PER_WORD;
    d.BIT_INDEX_MASK = d.BITS_PER_WORD - 1;
    var e = function() {
      function e(c) {
        this.size = f(c);
        this.dirty = this.count = 0;
        this.length = c;
        this.bits = new Uint32Array(this.size >> d.ADDRESS_BITS_PER_WORD);
      }
      e.prototype.recount = function() {
        if (this.dirty) {
          for (var e = this.bits, c = 0, g = 0, f = e.length;g < f;g++) {
            var d = e[g], d = d - (d >> 1 & 1431655765), d = (d & 858993459) + (d >> 2 & 858993459), c = c + (16843009 * (d + (d >> 4) & 252645135) >> 24)
          }
          this.count = c;
          this.dirty = 0;
        }
      };
      e.prototype.set = function(e) {
        var c = e >> d.ADDRESS_BITS_PER_WORD, g = this.bits[c];
        e = g | 1 << (e & d.BIT_INDEX_MASK);
        this.bits[c] = e;
        this.dirty |= g ^ e;
      };
      e.prototype.setAll = function() {
        for (var e = this.bits, c = 0, g = e.length;c < g;c++) {
          e[c] = 4294967295;
        }
        this.count = this.size;
        this.dirty = 0;
      };
      e.prototype.assign = function(e) {
        this.count = e.count;
        this.dirty = e.dirty;
        this.size = e.size;
        for (var c = 0, g = this.bits.length;c < g;c++) {
          this.bits[c] = e.bits[c];
        }
      };
      e.prototype.clear = function(e) {
        var c = e >> d.ADDRESS_BITS_PER_WORD, g = this.bits[c];
        e = g & ~(1 << (e & d.BIT_INDEX_MASK));
        this.bits[c] = e;
        this.dirty |= g ^ e;
      };
      e.prototype.get = function(e) {
        return 0 !== (this.bits[e >> d.ADDRESS_BITS_PER_WORD] & 1 << (e & d.BIT_INDEX_MASK));
      };
      e.prototype.clearAll = function() {
        for (var e = this.bits, c = 0, g = e.length;c < g;c++) {
          e[c] = 0;
        }
        this.dirty = this.count = 0;
      };
      e.prototype._union = function(e) {
        var c = this.dirty, g = this.bits;
        e = e.bits;
        for (var f = 0, d = g.length;f < d;f++) {
          var w = g[f], y = w | e[f];
          g[f] = y;
          c |= w ^ y;
        }
        this.dirty = c;
      };
      e.prototype.intersect = function(e) {
        var c = this.dirty, g = this.bits;
        e = e.bits;
        for (var f = 0, d = g.length;f < d;f++) {
          var w = g[f], y = w & e[f];
          g[f] = y;
          c |= w ^ y;
        }
        this.dirty = c;
      };
      e.prototype.subtract = function(e) {
        var c = this.dirty, g = this.bits;
        e = e.bits;
        for (var f = 0, d = g.length;f < d;f++) {
          var w = g[f], y = w & ~e[f];
          g[f] = y;
          c |= w ^ y;
        }
        this.dirty = c;
      };
      e.prototype.negate = function() {
        for (var e = this.dirty, c = this.bits, g = 0, f = c.length;g < f;g++) {
          var d = c[g], w = ~d;
          c[g] = w;
          e |= d ^ w;
        }
        this.dirty = e;
      };
      e.prototype.forEach = function(e) {
        for (var c = this.bits, g = 0, f = c.length;g < f;g++) {
          var w = c[g];
          if (w) {
            for (var y = 0;y < d.BITS_PER_WORD;y++) {
              w & 1 << y && e(g * d.BITS_PER_WORD + y);
            }
          }
        }
      };
      e.prototype.toArray = function() {
        for (var e = [], c = this.bits, g = 0, f = c.length;g < f;g++) {
          var w = c[g];
          if (w) {
            for (var y = 0;y < d.BITS_PER_WORD;y++) {
              w & 1 << y && e.push(g * d.BITS_PER_WORD + y);
            }
          }
        }
        return e;
      };
      e.prototype.equals = function(e) {
        if (this.size !== e.size) {
          return !1;
        }
        var c = this.bits;
        e = e.bits;
        for (var g = 0, f = c.length;g < f;g++) {
          if (c[g] !== e[g]) {
            return !1;
          }
        }
        return !0;
      };
      e.prototype.contains = function(e) {
        if (this.size !== e.size) {
          return !1;
        }
        var c = this.bits;
        e = e.bits;
        for (var g = 0, f = c.length;g < f;g++) {
          if ((c[g] | e[g]) !== c[g]) {
            return !1;
          }
        }
        return !0;
      };
      e.prototype.isEmpty = function() {
        this.recount();
        return 0 === this.count;
      };
      e.prototype.clone = function() {
        var c = new e(this.length);
        c._union(this);
        return c;
      };
      return e;
    }();
    d.Uint32ArrayBitSet = e;
    var y = function() {
      function e(c) {
        this.dirty = this.count = 0;
        this.size = f(c);
        this.bits = 0;
        this.singleWord = !0;
        this.length = c;
      }
      e.prototype.recount = function() {
        if (this.dirty) {
          var e = this.bits, e = e - (e >> 1 & 1431655765), e = (e & 858993459) + (e >> 2 & 858993459);
          this.count = 0 + (16843009 * (e + (e >> 4) & 252645135) >> 24);
          this.dirty = 0;
        }
      };
      e.prototype.set = function(e) {
        var c = this.bits;
        this.bits = e = c | 1 << (e & d.BIT_INDEX_MASK);
        this.dirty |= c ^ e;
      };
      e.prototype.setAll = function() {
        this.bits = 4294967295;
        this.count = this.size;
        this.dirty = 0;
      };
      e.prototype.assign = function(e) {
        this.count = e.count;
        this.dirty = e.dirty;
        this.size = e.size;
        this.bits = e.bits;
      };
      e.prototype.clear = function(e) {
        var c = this.bits;
        this.bits = e = c & ~(1 << (e & d.BIT_INDEX_MASK));
        this.dirty |= c ^ e;
      };
      e.prototype.get = function(e) {
        return 0 !== (this.bits & 1 << (e & d.BIT_INDEX_MASK));
      };
      e.prototype.clearAll = function() {
        this.dirty = this.count = this.bits = 0;
      };
      e.prototype._union = function(e) {
        var c = this.bits;
        this.bits = e = c | e.bits;
        this.dirty = c ^ e;
      };
      e.prototype.intersect = function(e) {
        var c = this.bits;
        this.bits = e = c & e.bits;
        this.dirty = c ^ e;
      };
      e.prototype.subtract = function(e) {
        var c = this.bits;
        this.bits = e = c & ~e.bits;
        this.dirty = c ^ e;
      };
      e.prototype.negate = function() {
        var e = this.bits, c = ~e;
        this.bits = c;
        this.dirty = e ^ c;
      };
      e.prototype.forEach = function(e) {
        var c = this.bits;
        if (c) {
          for (var g = 0;g < d.BITS_PER_WORD;g++) {
            c & 1 << g && e(g);
          }
        }
      };
      e.prototype.toArray = function() {
        var e = [], c = this.bits;
        if (c) {
          for (var g = 0;g < d.BITS_PER_WORD;g++) {
            c & 1 << g && e.push(g);
          }
        }
        return e;
      };
      e.prototype.equals = function(e) {
        return this.bits === e.bits;
      };
      e.prototype.contains = function(e) {
        var c = this.bits;
        return (c | e.bits) === c;
      };
      e.prototype.isEmpty = function() {
        this.recount();
        return 0 === this.count;
      };
      e.prototype.clone = function() {
        var c = new e(this.length);
        c._union(this);
        return c;
      };
      return e;
    }();
    d.Uint32BitSet = y;
    y.prototype.toString = c;
    y.prototype.toBitString = g;
    e.prototype.toString = c;
    e.prototype.toBitString = g;
    d.BitSetFunctor = function(c) {
      var g = 1 === f(c) >> d.ADDRESS_BITS_PER_WORD ? y : e;
      return function() {
        return new g(c);
      };
    };
  })(h.BitSets || (h.BitSets = {}));
  b = function() {
    function d() {
    }
    d.randomStyle = function() {
      d._randomStyleCache || (d._randomStyleCache = "#ff5e3a #ff9500 #ffdb4c #87fc70 #52edc7 #1ad6fd #c644fc #ef4db6 #4a4a4a #dbddde #ff3b30 #ff9500 #ffcc00 #4cd964 #34aadc #007aff #5856d6 #ff2d55 #8e8e93 #c7c7cc #5ad427 #c86edf #d1eefc #e0f8d8 #fb2b69 #f7f7f7 #1d77ef #d6cec3 #55efcb #ff4981 #ffd3e0 #f7f7f7 #ff1300 #1f1f21 #bdbec2 #ff3a2d".split(" "));
      return d._randomStyleCache[d._nextStyle++ % d._randomStyleCache.length];
    };
    d.gradientColor = function(f) {
      return d._gradient[d._gradient.length * k.clamp(f, 0, 1) | 0];
    };
    d.contrastStyle = function(f) {
      f = parseInt(f.substr(1), 16);
      return 128 <= (299 * (f >> 16) + 587 * (f >> 8 & 255) + 114 * (f & 255)) / 1E3 ? "#000000" : "#ffffff";
    };
    d.reset = function() {
      d._nextStyle = 0;
    };
    d.TabToolbar = "#252c33";
    d.Toolbars = "#343c45";
    d.HighlightBlue = "#1d4f73";
    d.LightText = "#f5f7fa";
    d.ForegroundText = "#b6babf";
    d.Black = "#000000";
    d.VeryDark = "#14171a";
    d.Dark = "#181d20";
    d.Light = "#a9bacb";
    d.Grey = "#8fa1b2";
    d.DarkGrey = "#5f7387";
    d.Blue = "#46afe3";
    d.Purple = "#6b7abb";
    d.Pink = "#df80ff";
    d.Red = "#eb5368";
    d.Orange = "#d96629";
    d.LightOrange = "#d99b28";
    d.Green = "#70bf53";
    d.BlueGrey = "#5e88b0";
    d._nextStyle = 0;
    d._gradient = "#FF0000 #FF1100 #FF2300 #FF3400 #FF4600 #FF5700 #FF6900 #FF7B00 #FF8C00 #FF9E00 #FFAF00 #FFC100 #FFD300 #FFE400 #FFF600 #F7FF00 #E5FF00 #D4FF00 #C2FF00 #B0FF00 #9FFF00 #8DFF00 #7CFF00 #6AFF00 #58FF00 #47FF00 #35FF00 #24FF00 #12FF00 #00FF00".split(" ");
    return d;
  }();
  h.ColorStyle = b;
  b = function() {
    function d(f, g, c, e) {
      this.xMin = f | 0;
      this.yMin = g | 0;
      this.xMax = c | 0;
      this.yMax = e | 0;
    }
    d.FromUntyped = function(f) {
      return new d(f.xMin, f.yMin, f.xMax, f.yMax);
    };
    d.FromRectangle = function(f) {
      return new d(20 * f.x | 0, 20 * f.y | 0, 20 * (f.x + f.width) | 0, 20 * (f.y + f.height) | 0);
    };
    d.prototype.setElements = function(f, g, c, e) {
      this.xMin = f;
      this.yMin = g;
      this.xMax = c;
      this.yMax = e;
    };
    d.prototype.copyFrom = function(f) {
      this.setElements(f.xMin, f.yMin, f.xMax, f.yMax);
    };
    d.prototype.contains = function(f, g) {
      return f < this.xMin !== f < this.xMax && g < this.yMin !== g < this.yMax;
    };
    d.prototype.unionInPlace = function(f) {
      f.isEmpty() || (this.extendByPoint(f.xMin, f.yMin), this.extendByPoint(f.xMax, f.yMax));
    };
    d.prototype.extendByPoint = function(f, g) {
      this.extendByX(f);
      this.extendByY(g);
    };
    d.prototype.extendByX = function(f) {
      134217728 === this.xMin ? this.xMin = this.xMax = f : (this.xMin = Math.min(this.xMin, f), this.xMax = Math.max(this.xMax, f));
    };
    d.prototype.extendByY = function(f) {
      134217728 === this.yMin ? this.yMin = this.yMax = f : (this.yMin = Math.min(this.yMin, f), this.yMax = Math.max(this.yMax, f));
    };
    d.prototype.intersects = function(f) {
      return this.contains(f.xMin, f.yMin) || this.contains(f.xMax, f.yMax);
    };
    d.prototype.isEmpty = function() {
      return this.xMax <= this.xMin || this.yMax <= this.yMin;
    };
    Object.defineProperty(d.prototype, "width", {get:function() {
      return this.xMax - this.xMin;
    }, set:function(f) {
      this.xMax = this.xMin + f;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "height", {get:function() {
      return this.yMax - this.yMin;
    }, set:function(f) {
      this.yMax = this.yMin + f;
    }, enumerable:!0, configurable:!0});
    d.prototype.getBaseWidth = function(f) {
      var g = Math.abs(Math.cos(f));
      f = Math.abs(Math.sin(f));
      return g * (this.xMax - this.xMin) + f * (this.yMax - this.yMin);
    };
    d.prototype.getBaseHeight = function(f) {
      var g = Math.abs(Math.cos(f));
      return Math.abs(Math.sin(f)) * (this.xMax - this.xMin) + g * (this.yMax - this.yMin);
    };
    d.prototype.setEmpty = function() {
      this.xMin = this.yMin = this.xMax = this.yMax = 0;
    };
    d.prototype.setToSentinels = function() {
      this.xMin = this.yMin = this.xMax = this.yMax = 134217728;
    };
    d.prototype.clone = function() {
      return new d(this.xMin, this.yMin, this.xMax, this.yMax);
    };
    d.prototype.toString = function() {
      return "{ xMin: " + this.xMin + ", xMin: " + this.yMin + ", xMax: " + this.xMax + ", xMax: " + this.yMax + " }";
    };
    return d;
  }();
  h.Bounds = b;
  b = function() {
    function d(f, g, c, e) {
      n.assert(p(f));
      n.assert(p(g));
      n.assert(p(c));
      n.assert(p(e));
      this._xMin = f | 0;
      this._yMin = g | 0;
      this._xMax = c | 0;
      this._yMax = e | 0;
    }
    d.FromUntyped = function(f) {
      return new d(f.xMin, f.yMin, f.xMax, f.yMax);
    };
    d.FromRectangle = function(f) {
      return new d(20 * f.x | 0, 20 * f.y | 0, 20 * (f.x + f.width) | 0, 20 * (f.y + f.height) | 0);
    };
    d.prototype.setElements = function(f, g, c, e) {
      this.xMin = f;
      this.yMin = g;
      this.xMax = c;
      this.yMax = e;
    };
    d.prototype.copyFrom = function(f) {
      this.setElements(f.xMin, f.yMin, f.xMax, f.yMax);
    };
    d.prototype.contains = function(f, g) {
      return f < this.xMin !== f < this.xMax && g < this.yMin !== g < this.yMax;
    };
    d.prototype.unionInPlace = function(f) {
      f.isEmpty() || (this.extendByPoint(f.xMin, f.yMin), this.extendByPoint(f.xMax, f.yMax));
    };
    d.prototype.extendByPoint = function(f, g) {
      this.extendByX(f);
      this.extendByY(g);
    };
    d.prototype.extendByX = function(f) {
      134217728 === this.xMin ? this.xMin = this.xMax = f : (this.xMin = Math.min(this.xMin, f), this.xMax = Math.max(this.xMax, f));
    };
    d.prototype.extendByY = function(f) {
      134217728 === this.yMin ? this.yMin = this.yMax = f : (this.yMin = Math.min(this.yMin, f), this.yMax = Math.max(this.yMax, f));
    };
    d.prototype.intersects = function(f) {
      return this.contains(f._xMin, f._yMin) || this.contains(f._xMax, f._yMax);
    };
    d.prototype.isEmpty = function() {
      return this._xMax <= this._xMin || this._yMax <= this._yMin;
    };
    Object.defineProperty(d.prototype, "xMin", {get:function() {
      return this._xMin;
    }, set:function(f) {
      n.assert(p(f));
      this._xMin = f;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "yMin", {get:function() {
      return this._yMin;
    }, set:function(f) {
      n.assert(p(f));
      this._yMin = f | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "xMax", {get:function() {
      return this._xMax;
    }, set:function(f) {
      n.assert(p(f));
      this._xMax = f | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "width", {get:function() {
      return this._xMax - this._xMin;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "yMax", {get:function() {
      return this._yMax;
    }, set:function(f) {
      n.assert(p(f));
      this._yMax = f | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "height", {get:function() {
      return this._yMax - this._yMin;
    }, enumerable:!0, configurable:!0});
    d.prototype.getBaseWidth = function(f) {
      var g = Math.abs(Math.cos(f));
      f = Math.abs(Math.sin(f));
      return g * (this._xMax - this._xMin) + f * (this._yMax - this._yMin);
    };
    d.prototype.getBaseHeight = function(f) {
      var g = Math.abs(Math.cos(f));
      return Math.abs(Math.sin(f)) * (this._xMax - this._xMin) + g * (this._yMax - this._yMin);
    };
    d.prototype.setEmpty = function() {
      this._xMin = this._yMin = this._xMax = this._yMax = 0;
    };
    d.prototype.clone = function() {
      return new d(this.xMin, this.yMin, this.xMax, this.yMax);
    };
    d.prototype.toString = function() {
      return "{ xMin: " + this._xMin + ", yMin: " + this._yMin + ", xMax: " + this._xMax + ", yMax: " + this._yMax + " }";
    };
    d.prototype.assertValid = function() {
    };
    return d;
  }();
  h.DebugBounds = b;
  b = function() {
    function d(f, g, c, e) {
      this.r = f;
      this.g = g;
      this.b = c;
      this.a = e;
    }
    d.FromARGB = function(f) {
      return new d((f >> 16 & 255) / 255, (f >> 8 & 255) / 255, (f >> 0 & 255) / 255, (f >> 24 & 255) / 255);
    };
    d.FromRGBA = function(f) {
      return d.FromARGB(m.RGBAToARGB(f));
    };
    d.prototype.toRGBA = function() {
      return 255 * this.r << 24 | 255 * this.g << 16 | 255 * this.b << 8 | 255 * this.a;
    };
    d.prototype.toCSSStyle = function() {
      return m.rgbaToCSSStyle(this.toRGBA());
    };
    d.prototype.set = function(f) {
      this.r = f.r;
      this.g = f.g;
      this.b = f.b;
      this.a = f.a;
    };
    d.randomColor = function(f) {
      void 0 === f && (f = 1);
      return new d(Math.random(), Math.random(), Math.random(), f);
    };
    d.parseColor = function(f) {
      d.colorCache || (d.colorCache = Object.create(null));
      if (d.colorCache[f]) {
        return d.colorCache[f];
      }
      var g = document.createElement("span");
      document.body.appendChild(g);
      g.style.backgroundColor = f;
      var c = getComputedStyle(g).backgroundColor;
      document.body.removeChild(g);
      (g = /^rgb\((\d+), (\d+), (\d+)\)$/.exec(c)) || (g = /^rgba\((\d+), (\d+), (\d+), ([\d.]+)\)$/.exec(c));
      c = new d(0, 0, 0, 0);
      c.r = parseFloat(g[1]) / 255;
      c.g = parseFloat(g[2]) / 255;
      c.b = parseFloat(g[3]) / 255;
      c.a = g[4] ? parseFloat(g[4]) / 255 : 1;
      return d.colorCache[f] = c;
    };
    d.Red = new d(1, 0, 0, 1);
    d.Green = new d(0, 1, 0, 1);
    d.Blue = new d(0, 0, 1, 1);
    d.None = new d(0, 0, 0, 0);
    d.White = new d(1, 1, 1, 1);
    d.Black = new d(0, 0, 0, 1);
    d.colorCache = {};
    return d;
  }();
  h.Color = b;
  var m;
  (function(d) {
    function f(e) {
      var c = e >> 0 & 255, g = e >> 8 & 255, f = e >> 24 & 255;
      e = (Math.imul(e >> 16 & 255, f) + 127) / 255 | 0;
      g = (Math.imul(g, f) + 127) / 255 | 0;
      c = (Math.imul(c, f) + 127) / 255 | 0;
      return f << 24 | e << 16 | g << 8 | c;
    }
    function g() {
      if (!c) {
        c = new Uint8Array(65536);
        for (var e = 0;256 > e;e++) {
          for (var g = 0;256 > g;g++) {
            c[(g << 8) + e] = Math.imul(255, e) / g;
          }
        }
      }
    }
    d.RGBAToARGB = function(e) {
      return e >> 8 & 16777215 | (e & 255) << 24;
    };
    d.ARGBToRGBA = function(e) {
      return e << 8 | e >> 24 & 255;
    };
    d.rgbaToCSSStyle = function(e) {
      return h.StringUtilities.concat9("rgba(", e >> 24 & 255, ",", e >> 16 & 255, ",", e >> 8 & 255, ",", (e & 255) / 255, ")");
    };
    d.cssStyleToRGBA = function(e) {
      if ("#" === e[0]) {
        if (7 === e.length) {
          return parseInt(e.substring(1), 16) << 8 | 255;
        }
      } else {
        if ("r" === e[0]) {
          var c = e.substring(5, e.length - 1).split(",");
          e = parseInt(c[0]);
          var g = parseInt(c[1]), f = parseInt(c[2]), c = parseFloat(c[3]);
          return (e & 255) << 24 | (g & 255) << 16 | (f & 255) << 8 | 255 * c & 255;
        }
      }
      return 4278190335;
    };
    d.hexToRGB = function(e) {
      return parseInt(e.slice(1), 16);
    };
    d.rgbToHex = function(e) {
      return "#" + ("000000" + (e >>> 0).toString(16)).slice(-6);
    };
    d.isValidHexColor = function(e) {
      return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(e);
    };
    d.clampByte = function(e) {
      return Math.max(0, Math.min(255, e));
    };
    d.unpremultiplyARGB = function(e) {
      var c = e >> 0 & 255, g = e >> 8 & 255, f = e >> 24 & 255;
      e = Math.imul(255, e >> 16 & 255) / f & 255;
      g = Math.imul(255, g) / f & 255;
      c = Math.imul(255, c) / f & 255;
      return f << 24 | e << 16 | g << 8 | c;
    };
    d.premultiplyARGB = f;
    var c;
    d.ensureUnpremultiplyTable = g;
    d.getUnpremultiplyTable = function() {
      g();
      return c;
    };
    d.tableLookupUnpremultiplyARGB = function(e) {
      e |= 0;
      var g = e >> 24 & 255;
      if (0 === g) {
        return 0;
      }
      if (255 === g) {
        return e;
      }
      var f, d, b = g << 8, a = c;
      d = a[b + (e >> 16 & 255)];
      f = a[b + (e >> 8 & 255)];
      e = a[b + (e >> 0 & 255)];
      return g << 24 | d << 16 | f << 8 | e;
    };
    d.blendPremultipliedBGRA = function(e, c) {
      var g = c & 16711935, f = c >> 8 & 16711935, d, b = e >> 8 & 16711935, a = 256 - (c & 255);
      d = Math.imul(e & 16711935, a) >> 8;
      b = Math.imul(b, a) >> 8;
      return (f + b & 16711935) << 8 | g + d & 16711935;
    };
    var e = t.swap32;
    d.convertImage = function(g, d, b, a) {
      var l = b.length;
      if (g === d) {
        if (b !== a) {
          for (g = 0;g < l;g++) {
            a[g] = b[g];
          }
        }
      } else {
        if (1 === g && 3 === d) {
          for (h.ColorUtilities.ensureUnpremultiplyTable(), g = 0;g < l;g++) {
            var k = b[g];
            d = k & 255;
            if (0 === d) {
              a[g] = 0;
            } else {
              if (255 === d) {
                a[g] = 4278190080 | k >> 8 & 16777215;
              } else {
                var m = k >> 24 & 255, u = k >> 16 & 255, k = k >> 8 & 255, t = d << 8, q = c, k = q[t + k], u = q[t + u], m = q[t + m];
                a[g] = d << 24 | m << 16 | u << 8 | k;
              }
            }
          }
        } else {
          if (2 === g && 3 === d) {
            for (g = 0;g < l;g++) {
              a[g] = e(b[g]);
            }
          } else {
            if (3 === g && 1 === d) {
              for (g = 0;g < l;g++) {
                d = b[g], a[g] = e(f(d & 4278255360 | d >> 16 & 255 | (d & 255) << 16));
              }
            } else {
              for (n.somewhatImplemented("Image Format Conversion: " + v[g] + " -> " + v[d]), g = 0;g < l;g++) {
                a[g] = b[g];
              }
            }
          }
        }
      }
    };
  })(m = h.ColorUtilities || (h.ColorUtilities = {}));
  b = function() {
    function d(f) {
      void 0 === f && (f = 32);
      this._list = [];
      this._maxSize = f;
    }
    d.prototype.acquire = function(f) {
      if (d._enabled) {
        for (var g = this._list, c = 0;c < g.length;c++) {
          var e = g[c];
          if (e.byteLength >= f) {
            return g.splice(c, 1), e;
          }
        }
      }
      return new ArrayBuffer(f);
    };
    d.prototype.release = function(f) {
      if (d._enabled) {
        var g = this._list;
        g.length === this._maxSize && g.shift();
        g.push(f);
      }
    };
    d.prototype.ensureUint8ArrayLength = function(f, g) {
      if (f.length >= g) {
        return f;
      }
      var c = Math.max(f.length + g, (3 * f.length >> 1) + 1), c = new Uint8Array(this.acquire(c), 0, c);
      c.set(f);
      this.release(f.buffer);
      return c;
    };
    d.prototype.ensureFloat64ArrayLength = function(f, g) {
      if (f.length >= g) {
        return f;
      }
      var c = Math.max(f.length + g, (3 * f.length >> 1) + 1), c = new Float64Array(this.acquire(c * Float64Array.BYTES_PER_ELEMENT), 0, c);
      c.set(f);
      this.release(f.buffer);
      return c;
    };
    d._enabled = !0;
    return d;
  }();
  h.ArrayBufferPool = b;
  (function(d) {
    (function(f) {
      f[f.EXTERNAL_INTERFACE_FEATURE = 1] = "EXTERNAL_INTERFACE_FEATURE";
      f[f.CLIPBOARD_FEATURE = 2] = "CLIPBOARD_FEATURE";
      f[f.SHAREDOBJECT_FEATURE = 3] = "SHAREDOBJECT_FEATURE";
      f[f.VIDEO_FEATURE = 4] = "VIDEO_FEATURE";
      f[f.SOUND_FEATURE = 5] = "SOUND_FEATURE";
      f[f.NETCONNECTION_FEATURE = 6] = "NETCONNECTION_FEATURE";
    })(d.Feature || (d.Feature = {}));
    (function(f) {
      f[f.AVM1_ERROR = 1] = "AVM1_ERROR";
      f[f.AVM2_ERROR = 2] = "AVM2_ERROR";
    })(d.ErrorTypes || (d.ErrorTypes = {}));
    (function(f) {
      f[f.LoadSource = 0] = "LoadSource";
      f[f.LoadWhitelistAllowed = 1] = "LoadWhitelistAllowed";
      f[f.LoadWhitelistDenied = 2] = "LoadWhitelistDenied";
      f[f.StreamAllowed = 3] = "StreamAllowed";
      f[f.StreamDenied = 4] = "StreamDenied";
      f[f.StreamCrossdomain = 5] = "StreamCrossdomain";
    })(d.LoadResource || (d.LoadResource = {}));
    d.instance;
  })(h.Telemetry || (h.Telemetry = {}));
  (function(d) {
    d.instance;
  })(h.FileLoadingService || (h.FileLoadingService = {}));
  (function(d) {
    d[d.BuiltinAbc = 0] = "BuiltinAbc";
    d[d.PlayerglobalAbcs = 1] = "PlayerglobalAbcs";
    d[d.PlayerglobalManifest = 2] = "PlayerglobalManifest";
    d[d.ShellAbc = 3] = "ShellAbc";
  })(h.SystemResourceId || (h.SystemResourceId = {}));
  (function(d) {
    d.instance;
  })(h.SystemResourcesLoadingService || (h.SystemResourcesLoadingService = {}));
  h.registerCSSFont = function(d, f, g) {
    if (inBrowser) {
      var c = document.head;
      c.insertBefore(document.createElement("style"), c.firstChild);
      c = document.styleSheets[0];
      f = "@font-face{font-family:swffont" + d + ";src:url(data:font/opentype;base64," + h.StringUtilities.base64ArrayBuffer(f.buffer) + ")}";
      c.insertRule(f, c.cssRules.length);
      g && (g = document.createElement("div"), g.style.fontFamily = "swffont" + d, g.innerHTML = "hello", document.body.appendChild(g), document.body.removeChild(g));
    } else {
      n.warning("Cannot register CSS font outside the browser");
    }
  };
  h.registerFallbackFont = function() {
    var d = document.styleSheets[0];
    d.insertRule('@font-face{font-family:AdobeBlank;src:url("data:font/opentype;base64,T1RUTwAKAIAAAwAgQ0ZGIDTeCDQAACFkAAAZPERTSUcAAAABAABKqAAAAAhPUy8yAF+xmwAAARAAAABgY21hcCRDbtEAAAdcAAAZ6GhlYWQFl9tDAAAArAAAADZoaGVhB1oD7wAAAOQAAAAkaG10eAPoAHwAADqgAAAQBm1heHAIAVAAAAABCAAAAAZuYW1lIE0HkgAAAXAAAAXrcG9zdP+4ADIAACFEAAAAIAABAAAAAQuFfcPHtV8PPPUAAwPoAAAAANFMRfMAAAAA0UxF8wB8/4gDbANwAAAAAwACAAAAAAAAAAEAAANw/4gAAAPoAHwAfANsAAEAAAAAAAAAAAAAAAAAAAACAABQAAgBAAAAAwPoAZAABQAAAooCWAAAAEsCigJYAAABXgAyANwAAAAAAAAAAAAAAAD3/67/+9///w/gAD8AAAAAQURCTwBAAAD//wNw/4gAAANwAHhgLwH/AAAAAAAAAAAAAAAgAAAAAAARANIAAQAAAAAAAQALAAAAAQAAAAAAAgAHAAsAAQAAAAAAAwAbABIAAQAAAAAABAALAAAAAQAAAAAABQA6AC0AAQAAAAAABgAKAGcAAwABBAkAAACUAHEAAwABBAkAAQAWAQUAAwABBAkAAgAOARsAAwABBAkAAwA2ASkAAwABBAkABAAWAQUAAwABBAkABQB0AV8AAwABBAkABgAUAdMAAwABBAkACAA0AecAAwABBAkACwA0AhsAAwABBAkADQKWAk8AAwABBAkADgA0BOVBZG9iZSBCbGFua1JlZ3VsYXIxLjA0NTtBREJPO0Fkb2JlQmxhbms7QURPQkVWZXJzaW9uIDEuMDQ1O1BTIDEuMDQ1O2hvdGNvbnYgMS4wLjgyO21ha2VvdGYubGliMi41LjYzNDA2QWRvYmVCbGFuawBDAG8AcAB5AHIAaQBnAGgAdAAgAKkAIAAyADAAMQAzACwAIAAyADAAMQA1ACAAQQBkAG8AYgBlACAAUwB5AHMAdABlAG0AcwAgAEkAbgBjAG8AcgBwAG8AcgBhAHQAZQBkACAAKABoAHQAdABwADoALwAvAHcAdwB3AC4AYQBkAG8AYgBlAC4AYwBvAG0ALwApAC4AQQBkAG8AYgBlACAAQgBsAGEAbgBrAFIAZQBnAHUAbABhAHIAMQAuADAANAA1ADsAQQBEAEIATwA7AEEAZABvAGIAZQBCAGwAYQBuAGsAOwBBAEQATwBCAEUAVgBlAHIAcwBpAG8AbgAgADEALgAwADQANQA7AFAAUwAgADEALgAwADQANQA7AGgAbwB0AGMAbwBuAHYAIAAxAC4AMAAuADgAMgA7AG0AYQBrAGUAbwB0AGYALgBsAGkAYgAyAC4ANQAuADYAMwA0ADAANgBBAGQAbwBiAGUAQgBsAGEAbgBrAEEAZABvAGIAZQAgAFMAeQBzAHQAZQBtAHMAIABJAG4AYwBvAHIAcABvAHIAYQB0AGUAZABoAHQAdABwADoALwAvAHcAdwB3AC4AYQBkAG8AYgBlAC4AYwBvAG0ALwB0AHkAcABlAC8AVABoAGkAcwAgAEYAbwBuAHQAIABTAG8AZgB0AHcAYQByAGUAIABpAHMAIABsAGkAYwBlAG4AcwBlAGQAIAB1AG4AZABlAHIAIAB0AGgAZQAgAFMASQBMACAATwBwAGUAbgAgAEYAbwBuAHQAIABMAGkAYwBlAG4AcwBlACwAIABWAGUAcgBzAGkAbwBuACAAMQAuADEALgAgAFQAaABpAHMAIABGAG8AbgB0ACAAUwBvAGYAdAB3AGEAcgBlACAAaQBzACAAZABpAHMAdAByAGkAYgB1AHQAZQBkACAAbwBuACAAYQBuACAAIgBBAFMAIABJAFMAIgAgAEIAQQBTAEkAUwAsACAAVwBJAFQASABPAFUAVAAgAFcAQQBSAFIAQQBOAFQASQBFAFMAIABPAFIAIABDAE8ATgBEAEkAVABJAE8ATgBTACAATwBGACAAQQBOAFkAIABLAEkATgBEACwAIABlAGkAdABoAGUAcgAgAGUAeABwAHIAZQBzAHMAIABvAHIAIABpAG0AcABsAGkAZQBkAC4AIABTAGUAZQAgAHQAaABlACAAUwBJAEwAIABPAHAAZQBuACAARgBvAG4AdAAgAEwAaQBjAGUAbgBzAGUAIABmAG8AcgAgAHQAaABlACAAcwBwAGUAYwBpAGYAaQBjACAAbABhAG4AZwB1AGEAZwBlACwAIABwAGUAcgBtAGkAcwBzAGkAbwBuAHMAIABhAG4AZAAgAGwAaQBtAGkAdABhAHQAaQBvAG4AcwAgAGcAbwB2AGUAcgBuAGkAbgBnACAAeQBvAHUAcgAgAHUAcwBlACAAbwBmACAAdABoAGkAcwAgAEYAbwBuAHQAIABTAG8AZgB0AHcAYQByAGUALgBoAHQAdABwADoALwAvAHMAYwByAGkAcAB0AHMALgBzAGkAbAAuAG8AcgBnAC8ATwBGAEwAAAAABQAAAAMAAAA4AAAABAAAAFgAAQAAAAAALAADAAEAAAA4AAMACgAAAFgABgAMAAAAAAABAAAABAAgAAAABAAEAAEAAAf///8AAAAA//8AAQABAAAAAAAMAAAAABmQAAAAAAAAAiAAAAAAAAAH/wAAAAEAAAgAAAAP/wAAAAEAABAAAAAX/wAAAAEAABgAAAAf/wAAAAEAACAAAAAn/wAAAAEAACgAAAAv/wAAAAEAADAAAAA3/wAAAAEAADgAAAA//wAAAAEAAEAAAABH/wAAAAEAAEgAAABP/wAAAAEAAFAAAABX/wAAAAEAAFgAAABf/wAAAAEAAGAAAABn/wAAAAEAAGgAAABv/wAAAAEAAHAAAAB3/wAAAAEAAHgAAAB//wAAAAEAAIAAAACH/wAAAAEAAIgAAACP/wAAAAEAAJAAAACX/wAAAAEAAJgAAACf/wAAAAEAAKAAAACn/wAAAAEAAKgAAACv/wAAAAEAALAAAAC3/wAAAAEAALgAAAC//wAAAAEAAMAAAADH/wAAAAEAAMgAAADP/wAAAAEAANAAAADX/wAAAAEAAOAAAADn/wAAAAEAAOgAAADv/wAAAAEAAPAAAAD3/wAAAAEAAPgAAAD9zwAAAAEAAP3wAAD//QAABfEAAQAAAAEH/wAAAAEAAQgAAAEP/wAAAAEAARAAAAEX/wAAAAEAARgAAAEf/wAAAAEAASAAAAEn/wAAAAEAASgAAAEv/wAAAAEAATAAAAE3/wAAAAEAATgAAAE//wAAAAEAAUAAAAFH/wAAAAEAAUgAAAFP/wAAAAEAAVAAAAFX/wAAAAEAAVgAAAFf/wAAAAEAAWAAAAFn/wAAAAEAAWgAAAFv/wAAAAEAAXAAAAF3/wAAAAEAAXgAAAF//wAAAAEAAYAAAAGH/wAAAAEAAYgAAAGP/wAAAAEAAZAAAAGX/wAAAAEAAZgAAAGf/wAAAAEAAaAAAAGn/wAAAAEAAagAAAGv/wAAAAEAAbAAAAG3/wAAAAEAAbgAAAG//wAAAAEAAcAAAAHH/wAAAAEAAcgAAAHP/wAAAAEAAdAAAAHX/wAAAAEAAdgAAAHf/wAAAAEAAeAAAAHn/wAAAAEAAegAAAHv/wAAAAEAAfAAAAH3/wAAAAEAAfgAAAH//QAAAAEAAgAAAAIH/wAAAAEAAggAAAIP/wAAAAEAAhAAAAIX/wAAAAEAAhgAAAIf/wAAAAEAAiAAAAIn/wAAAAEAAigAAAIv/wAAAAEAAjAAAAI3/wAAAAEAAjgAAAI//wAAAAEAAkAAAAJH/wAAAAEAAkgAAAJP/wAAAAEAAlAAAAJX/wAAAAEAAlgAAAJf/wAAAAEAAmAAAAJn/wAAAAEAAmgAAAJv/wAAAAEAAnAAAAJ3/wAAAAEAAngAAAJ//wAAAAEAAoAAAAKH/wAAAAEAAogAAAKP/wAAAAEAApAAAAKX/wAAAAEAApgAAAKf/wAAAAEAAqAAAAKn/wAAAAEAAqgAAAKv/wAAAAEAArAAAAK3/wAAAAEAArgAAAK//wAAAAEAAsAAAALH/wAAAAEAAsgAAALP/wAAAAEAAtAAAALX/wAAAAEAAtgAAALf/wAAAAEAAuAAAALn/wAAAAEAAugAAALv/wAAAAEAAvAAAAL3/wAAAAEAAvgAAAL//QAAAAEAAwAAAAMH/wAAAAEAAwgAAAMP/wAAAAEAAxAAAAMX/wAAAAEAAxgAAAMf/wAAAAEAAyAAAAMn/wAAAAEAAygAAAMv/wAAAAEAAzAAAAM3/wAAAAEAAzgAAAM//wAAAAEAA0AAAANH/wAAAAEAA0gAAANP/wAAAAEAA1AAAANX/wAAAAEAA1gAAANf/wAAAAEAA2AAAANn/wAAAAEAA2gAAANv/wAAAAEAA3AAAAN3/wAAAAEAA3gAAAN//wAAAAEAA4AAAAOH/wAAAAEAA4gAAAOP/wAAAAEAA5AAAAOX/wAAAAEAA5gAAAOf/wAAAAEAA6AAAAOn/wAAAAEAA6gAAAOv/wAAAAEAA7AAAAO3/wAAAAEAA7gAAAO//wAAAAEAA8AAAAPH/wAAAAEAA8gAAAPP/wAAAAEAA9AAAAPX/wAAAAEAA9gAAAPf/wAAAAEAA+AAAAPn/wAAAAEAA+gAAAPv/wAAAAEAA/AAAAP3/wAAAAEAA/gAAAP//QAAAAEABAAAAAQH/wAAAAEABAgAAAQP/wAAAAEABBAAAAQX/wAAAAEABBgAAAQf/wAAAAEABCAAAAQn/wAAAAEABCgAAAQv/wAAAAEABDAAAAQ3/wAAAAEABDgAAAQ//wAAAAEABEAAAARH/wAAAAEABEgAAARP/wAAAAEABFAAAARX/wAAAAEABFgAAARf/wAAAAEABGAAAARn/wAAAAEABGgAAARv/wAAAAEABHAAAAR3/wAAAAEABHgAAAR//wAAAAEABIAAAASH/wAAAAEABIgAAASP/wAAAAEABJAAAASX/wAAAAEABJgAAASf/wAAAAEABKAAAASn/wAAAAEABKgAAASv/wAAAAEABLAAAAS3/wAAAAEABLgAAAS//wAAAAEABMAAAATH/wAAAAEABMgAAATP/wAAAAEABNAAAATX/wAAAAEABNgAAATf/wAAAAEABOAAAATn/wAAAAEABOgAAATv/wAAAAEABPAAAAT3/wAAAAEABPgAAAT//QAAAAEABQAAAAUH/wAAAAEABQgAAAUP/wAAAAEABRAAAAUX/wAAAAEABRgAAAUf/wAAAAEABSAAAAUn/wAAAAEABSgAAAUv/wAAAAEABTAAAAU3/wAAAAEABTgAAAU//wAAAAEABUAAAAVH/wAAAAEABUgAAAVP/wAAAAEABVAAAAVX/wAAAAEABVgAAAVf/wAAAAEABWAAAAVn/wAAAAEABWgAAAVv/wAAAAEABXAAAAV3/wAAAAEABXgAAAV//wAAAAEABYAAAAWH/wAAAAEABYgAAAWP/wAAAAEABZAAAAWX/wAAAAEABZgAAAWf/wAAAAEABaAAAAWn/wAAAAEABagAAAWv/wAAAAEABbAAAAW3/wAAAAEABbgAAAW//wAAAAEABcAAAAXH/wAAAAEABcgAAAXP/wAAAAEABdAAAAXX/wAAAAEABdgAAAXf/wAAAAEABeAAAAXn/wAAAAEABegAAAXv/wAAAAEABfAAAAX3/wAAAAEABfgAAAX//QAAAAEABgAAAAYH/wAAAAEABggAAAYP/wAAAAEABhAAAAYX/wAAAAEABhgAAAYf/wAAAAEABiAAAAYn/wAAAAEABigAAAYv/wAAAAEABjAAAAY3/wAAAAEABjgAAAY//wAAAAEABkAAAAZH/wAAAAEABkgAAAZP/wAAAAEABlAAAAZX/wAAAAEABlgAAAZf/wAAAAEABmAAAAZn/wAAAAEABmgAAAZv/wAAAAEABnAAAAZ3/wAAAAEABngAAAZ//wAAAAEABoAAAAaH/wAAAAEABogAAAaP/wAAAAEABpAAAAaX/wAAAAEABpgAAAaf/wAAAAEABqAAAAan/wAAAAEABqgAAAav/wAAAAEABrAAAAa3/wAAAAEABrgAAAa//wAAAAEABsAAAAbH/wAAAAEABsgAAAbP/wAAAAEABtAAAAbX/wAAAAEABtgAAAbf/wAAAAEABuAAAAbn/wAAAAEABugAAAbv/wAAAAEABvAAAAb3/wAAAAEABvgAAAb//QAAAAEABwAAAAcH/wAAAAEABwgAAAcP/wAAAAEABxAAAAcX/wAAAAEABxgAAAcf/wAAAAEAByAAAAcn/wAAAAEABygAAAcv/wAAAAEABzAAAAc3/wAAAAEABzgAAAc//wAAAAEAB0AAAAdH/wAAAAEAB0gAAAdP/wAAAAEAB1AAAAdX/wAAAAEAB1gAAAdf/wAAAAEAB2AAAAdn/wAAAAEAB2gAAAdv/wAAAAEAB3AAAAd3/wAAAAEAB3gAAAd//wAAAAEAB4AAAAeH/wAAAAEAB4gAAAeP/wAAAAEAB5AAAAeX/wAAAAEAB5gAAAef/wAAAAEAB6AAAAen/wAAAAEAB6gAAAev/wAAAAEAB7AAAAe3/wAAAAEAB7gAAAe//wAAAAEAB8AAAAfH/wAAAAEAB8gAAAfP/wAAAAEAB9AAAAfX/wAAAAEAB9gAAAff/wAAAAEAB+AAAAfn/wAAAAEAB+gAAAfv/wAAAAEAB/AAAAf3/wAAAAEAB/gAAAf//QAAAAEACAAAAAgH/wAAAAEACAgAAAgP/wAAAAEACBAAAAgX/wAAAAEACBgAAAgf/wAAAAEACCAAAAgn/wAAAAEACCgAAAgv/wAAAAEACDAAAAg3/wAAAAEACDgAAAg//wAAAAEACEAAAAhH/wAAAAEACEgAAAhP/wAAAAEACFAAAAhX/wAAAAEACFgAAAhf/wAAAAEACGAAAAhn/wAAAAEACGgAAAhv/wAAAAEACHAAAAh3/wAAAAEACHgAAAh//wAAAAEACIAAAAiH/wAAAAEACIgAAAiP/wAAAAEACJAAAAiX/wAAAAEACJgAAAif/wAAAAEACKAAAAin/wAAAAEACKgAAAiv/wAAAAEACLAAAAi3/wAAAAEACLgAAAi//wAAAAEACMAAAAjH/wAAAAEACMgAAAjP/wAAAAEACNAAAAjX/wAAAAEACNgAAAjf/wAAAAEACOAAAAjn/wAAAAEACOgAAAjv/wAAAAEACPAAAAj3/wAAAAEACPgAAAj//QAAAAEACQAAAAkH/wAAAAEACQgAAAkP/wAAAAEACRAAAAkX/wAAAAEACRgAAAkf/wAAAAEACSAAAAkn/wAAAAEACSgAAAkv/wAAAAEACTAAAAk3/wAAAAEACTgAAAk//wAAAAEACUAAAAlH/wAAAAEACUgAAAlP/wAAAAEACVAAAAlX/wAAAAEACVgAAAlf/wAAAAEACWAAAAln/wAAAAEACWgAAAlv/wAAAAEACXAAAAl3/wAAAAEACXgAAAl//wAAAAEACYAAAAmH/wAAAAEACYgAAAmP/wAAAAEACZAAAAmX/wAAAAEACZgAAAmf/wAAAAEACaAAAAmn/wAAAAEACagAAAmv/wAAAAEACbAAAAm3/wAAAAEACbgAAAm//wAAAAEACcAAAAnH/wAAAAEACcgAAAnP/wAAAAEACdAAAAnX/wAAAAEACdgAAAnf/wAAAAEACeAAAAnn/wAAAAEACegAAAnv/wAAAAEACfAAAAn3/wAAAAEACfgAAAn//QAAAAEACgAAAAoH/wAAAAEACggAAAoP/wAAAAEAChAAAAoX/wAAAAEAChgAAAof/wAAAAEACiAAAAon/wAAAAEACigAAAov/wAAAAEACjAAAAo3/wAAAAEACjgAAAo//wAAAAEACkAAAApH/wAAAAEACkgAAApP/wAAAAEAClAAAApX/wAAAAEAClgAAApf/wAAAAEACmAAAApn/wAAAAEACmgAAApv/wAAAAEACnAAAAp3/wAAAAEACngAAAp//wAAAAEACoAAAAqH/wAAAAEACogAAAqP/wAAAAEACpAAAAqX/wAAAAEACpgAAAqf/wAAAAEACqAAAAqn/wAAAAEACqgAAAqv/wAAAAEACrAAAAq3/wAAAAEACrgAAAq//wAAAAEACsAAAArH/wAAAAEACsgAAArP/wAAAAEACtAAAArX/wAAAAEACtgAAArf/wAAAAEACuAAAArn/wAAAAEACugAAArv/wAAAAEACvAAAAr3/wAAAAEACvgAAAr//QAAAAEACwAAAAsH/wAAAAEACwgAAAsP/wAAAAEACxAAAAsX/wAAAAEACxgAAAsf/wAAAAEACyAAAAsn/wAAAAEACygAAAsv/wAAAAEACzAAAAs3/wAAAAEACzgAAAs//wAAAAEAC0AAAAtH/wAAAAEAC0gAAAtP/wAAAAEAC1AAAAtX/wAAAAEAC1gAAAtf/wAAAAEAC2AAAAtn/wAAAAEAC2gAAAtv/wAAAAEAC3AAAAt3/wAAAAEAC3gAAAt//wAAAAEAC4AAAAuH/wAAAAEAC4gAAAuP/wAAAAEAC5AAAAuX/wAAAAEAC5gAAAuf/wAAAAEAC6AAAAun/wAAAAEAC6gAAAuv/wAAAAEAC7AAAAu3/wAAAAEAC7gAAAu//wAAAAEAC8AAAAvH/wAAAAEAC8gAAAvP/wAAAAEAC9AAAAvX/wAAAAEAC9gAAAvf/wAAAAEAC+AAAAvn/wAAAAEAC+gAAAvv/wAAAAEAC/AAAAv3/wAAAAEAC/gAAAv//QAAAAEADAAAAAwH/wAAAAEADAgAAAwP/wAAAAEADBAAAAwX/wAAAAEADBgAAAwf/wAAAAEADCAAAAwn/wAAAAEADCgAAAwv/wAAAAEADDAAAAw3/wAAAAEADDgAAAw//wAAAAEADEAAAAxH/wAAAAEADEgAAAxP/wAAAAEADFAAAAxX/wAAAAEADFgAAAxf/wAAAAEADGAAAAxn/wAAAAEADGgAAAxv/wAAAAEADHAAAAx3/wAAAAEADHgAAAx//wAAAAEADIAAAAyH/wAAAAEADIgAAAyP/wAAAAEADJAAAAyX/wAAAAEADJgAAAyf/wAAAAEADKAAAAyn/wAAAAEADKgAAAyv/wAAAAEADLAAAAy3/wAAAAEADLgAAAy//wAAAAEADMAAAAzH/wAAAAEADMgAAAzP/wAAAAEADNAAAAzX/wAAAAEADNgAAAzf/wAAAAEADOAAAAzn/wAAAAEADOgAAAzv/wAAAAEADPAAAAz3/wAAAAEADPgAAAz//QAAAAEADQAAAA0H/wAAAAEADQgAAA0P/wAAAAEADRAAAA0X/wAAAAEADRgAAA0f/wAAAAEADSAAAA0n/wAAAAEADSgAAA0v/wAAAAEADTAAAA03/wAAAAEADTgAAA0//wAAAAEADUAAAA1H/wAAAAEADUgAAA1P/wAAAAEADVAAAA1X/wAAAAEADVgAAA1f/wAAAAEADWAAAA1n/wAAAAEADWgAAA1v/wAAAAEADXAAAA13/wAAAAEADXgAAA1//wAAAAEADYAAAA2H/wAAAAEADYgAAA2P/wAAAAEADZAAAA2X/wAAAAEADZgAAA2f/wAAAAEADaAAAA2n/wAAAAEADagAAA2v/wAAAAEADbAAAA23/wAAAAEADbgAAA2//wAAAAEADcAAAA3H/wAAAAEADcgAAA3P/wAAAAEADdAAAA3X/wAAAAEADdgAAA3f/wAAAAEADeAAAA3n/wAAAAEADegAAA3v/wAAAAEADfAAAA33/wAAAAEADfgAAA3//QAAAAEADgAAAA4H/wAAAAEADggAAA4P/wAAAAEADhAAAA4X/wAAAAEADhgAAA4f/wAAAAEADiAAAA4n/wAAAAEADigAAA4v/wAAAAEADjAAAA43/wAAAAEADjgAAA4//wAAAAEADkAAAA5H/wAAAAEADkgAAA5P/wAAAAEADlAAAA5X/wAAAAEADlgAAA5f/wAAAAEADmAAAA5n/wAAAAEADmgAAA5v/wAAAAEADnAAAA53/wAAAAEADngAAA5//wAAAAEADoAAAA6H/wAAAAEADogAAA6P/wAAAAEADpAAAA6X/wAAAAEADpgAAA6f/wAAAAEADqAAAA6n/wAAAAEADqgAAA6v/wAAAAEADrAAAA63/wAAAAEADrgAAA6//wAAAAEADsAAAA7H/wAAAAEADsgAAA7P/wAAAAEADtAAAA7X/wAAAAEADtgAAA7f/wAAAAEADuAAAA7n/wAAAAEADugAAA7v/wAAAAEADvAAAA73/wAAAAEADvgAAA7//QAAAAEADwAAAA8H/wAAAAEADwgAAA8P/wAAAAEADxAAAA8X/wAAAAEADxgAAA8f/wAAAAEADyAAAA8n/wAAAAEADygAAA8v/wAAAAEADzAAAA83/wAAAAEADzgAAA8//wAAAAEAD0AAAA9H/wAAAAEAD0gAAA9P/wAAAAEAD1AAAA9X/wAAAAEAD1gAAA9f/wAAAAEAD2AAAA9n/wAAAAEAD2gAAA9v/wAAAAEAD3AAAA93/wAAAAEAD3gAAA9//wAAAAEAD4AAAA+H/wAAAAEAD4gAAA+P/wAAAAEAD5AAAA+X/wAAAAEAD5gAAA+f/wAAAAEAD6AAAA+n/wAAAAEAD6gAAA+v/wAAAAEAD7AAAA+3/wAAAAEAD7gAAA+//wAAAAEAD8AAAA/H/wAAAAEAD8gAAA/P/wAAAAEAD9AAAA/X/wAAAAEAD9gAAA/f/wAAAAEAD+AAAA/n/wAAAAEAD+gAAA/v/wAAAAEAD/AAAA/3/wAAAAEAD/gAAA///QAAAAEAEAAAABAH/wAAAAEAEAgAABAP/wAAAAEAEBAAABAX/wAAAAEAEBgAABAf/wAAAAEAECAAABAn/wAAAAEAECgAABAv/wAAAAEAEDAAABA3/wAAAAEAEDgAABA//wAAAAEAEEAAABBH/wAAAAEAEEgAABBP/wAAAAEAEFAAABBX/wAAAAEAEFgAABBf/wAAAAEAEGAAABBn/wAAAAEAEGgAABBv/wAAAAEAEHAAABB3/wAAAAEAEHgAABB//wAAAAEAEIAAABCH/wAAAAEAEIgAABCP/wAAAAEAEJAAABCX/wAAAAEAEJgAABCf/wAAAAEAEKAAABCn/wAAAAEAEKgAABCv/wAAAAEAELAAABC3/wAAAAEAELgAABC//wAAAAEAEMAAABDH/wAAAAEAEMgAABDP/wAAAAEAENAAABDX/wAAAAEAENgAABDf/wAAAAEAEOAAABDn/wAAAAEAEOgAABDv/wAAAAEAEPAAABD3/wAAAAEAEPgAABD//QAAAAEAAwAAAAAAAP+1ADIAAAAAAAAAAAAAAAAAAAAAAAAAAAEABAIAAQEBC0Fkb2JlQmxhbmsAAQEBMPgb+ByLDB74HQH4HgKL+wz6APoEBR4aBF8MHxwIAQwi91UP92IR91oMJRwZHwwkAAUBAQYOVmFwQWRvYmVJZGVudGl0eUNvcHlyaWdodCAyMDEzLCAyMDE1IEFkb2JlIFN5c3RlbXMgSW5jb3Jwb3JhdGVkIChodHRwOi8vd3d3LmFkb2JlLmNvbS8pLkFkb2JlIEJsYW5rQWRvYmVCbGFuay0yMDQ5AAACAAEH/wMAAQAAAAgBCAECAAEASwBMAE0ATgBPAFAAUQBSAFMAVABVAFYAVwBYAFkAWgBbAFwAXQBeAF8AYABhAGIAYwBkAGUAZgBnAGgAaQBqAGsAbABtAG4AbwBwAHEAcgBzAHQAdQB2AHcAeAB5AHoAewB8AH0AfgB/AIAAgQCCAIMAhACFAIYAhwCIAIkAigCLAIwAjQCOAI8AkACRAJIAkwCUAJUAlgCXAJgAmQCaAJsAnACdAJ4AnwCgAKEAogCjAKQApQCmAKcAqACpAKoAqwCsAK0ArgCvALAAsQCyALMAtAC1ALYAtwC4ALkAugC7ALwAvQC+AL8AwADBAMIAwwDEAMUAxgDHAMgAyQDKAMsAzADNAM4AzwDQANEA0gDTANQA1QDWANcA2ADZANoA2wDcAN0A3gDfAOAA4QDiAOMA5ADlAOYA5wDoAOkA6gDrAOwA7QDuAO8A8ADxAPIA8wD0APUA9gD3APgA+QD6APsA/AD9AP4A/wEAAQEBAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMBFAEVARYBFwEYARkBGgEbARwBHQEeAR8BIAEhASIBIwEkASUBJgEnASgBKQEqASsBLAEtAS4BLwEwATEBMgEzATQBNQE2ATcBOAE5AToBOwE8AT0BPgE/AUABQQFCAUMBRAFFAUYBRwFIAUkBSgFLAUwBTQFOAU8BUAFRAVIBUwFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEBYgFjAWQBZQFmAWcBaAFpAWoBawFsAW0BbgFvAXABcQFyAXMBdAF1AXYBdwF4AXkBegF7AXwBfQF+AX8BgAGBAYIBgwGEAYUBhgGHAYgBiQGKAYsBjAGNAY4BjwGQAZEBkgGTAZQBlQGWAZcBmAGZAZoBmwGcAZ0BngGfAaABoQGiAaMBpAGlAaYBpwGoAakBqgGrAawBrQGuAa8BsAGxAbIBswG0AbUBtgG3AbgBuQG6AbsBvAG9Ab4BvwHAAcEBwgHDAcQBxQHGAccByAHJAcoBywHMAc0BzgHPAdAB0QHSAdMB1AHVAdYB1wHYAdkB2gHbAdwB3QHeAd8B4AHhAeIB4wHkAeUB5gHnAegB6QHqAesB7AHtAe4B7wHwAfEB8gHzAfQB9QH2AfcB+AH5AfoB+wH8Af0B/gH/AgACAQICAgMCBAIFAgYCBwIIAgkCCgILAgwCDQIOAg8CEAIRAhICEwIUAhUCFgIXAhgCGQIaAhsCHAIdAh4CHwIgAiECIgIjAiQCJQImAicCKAIpAioCKwIsAi0CLgIvAjACMQIyAjMCNAI1AjYCNwI4AjkCOgI7AjwCPQI+Aj8CQAJBAkICQwJEAkUCRgJHAkgCSQJKAksCTAJNAk4CTwJQAlECUgJTAlQCVQJWAlcCWAJZAloCWwJcAl0CXgJfAmACYQJiAmMCZAJlAmYCZwJoAmkCagJrAmwCbQJuAm8CcAJxAnICcwJ0AnUCdgJ3AngCeQJ6AnsCfAJ9An4CfwKAAoECggKDAoQChQKGAocCiAKJAooCiwKMAo0CjgKPApACkQKSApMClAKVApYClwKYApkCmgKbApwCnQKeAp8CoAKhAqICowKkAqUCpgKnAqgCqQKqAqsCrAKtAq4CrwKwArECsgKzArQCtQK2ArcCuAK5AroCuwK8Ar0CvgK/AsACwQLCAsMCxALFAsYCxwLIAskCygLLAswCzQLOAs8C0ALRAtIC0wLUAtUC1gLXAtgC2QLaAtsC3ALdAt4C3wLgAuEC4gLjAuQC5QLmAucC6ALpAuoC6wLsAu0C7gLvAvAC8QLyAvMC9AL1AvYC9wL4AvkC+gL7AvwC/QL+Av8DAAMBAwIDAwMEAwUDBgMHAwgDCQMKAwsDDAMNAw4DDwMQAxEDEgMTAxQDFQMWAxcDGAMZAxoDGwMcAx0DHgMfAyADIQMiAyMDJAMlAyYDJwMoAykDKgMrAywDLQMuAy8DMAMxAzIDMwM0AzUDNgM3AzgDOQM6AzsDPAM9Az4DPwNAA0EDQgNDA0QDRQNGA0cDSANJA0oDSwNMA00DTgNPA1ADUQNSA1MDVANVA1YDVwNYA1kDWgNbA1wDXQNeA18DYANhA2IDYwNkA2UDZgNnA2gDaQNqA2sDbANtA24DbwNwA3EDcgNzA3QDdQN2A3cDeAN5A3oDewN8A30DfgN/A4ADgQOCA4MDhAOFA4YDhwOIA4kDigOLA4wDjQOOA48DkAORA5IDkwOUA5UDlgOXA5gDmQOaA5sDnAOdA54DnwOgA6EDogOjA6QDpQOmA6cDqAOpA6oDqwOsA60DrgOvA7ADsQOyA7MDtAO1A7YDtwO4A7kDugO7A7wDvQO+A78DwAPBA8IDwwPEA8UDxgPHA8gDyQPKA8sDzAPNA84DzwPQA9ED0gPTA9QD1QPWA9cD2APZA9oD2wPcA90D3gPfA+AD4QPiA+MD5APlA+YD5wPoA+kD6gPrA+wD7QPuA+8D8APxA/ID8wP0A/UD9gP3A/gD+QP6A/sD/AP9A/4D/wQABAEEAgQDBAQEBQQGBAcECAQJBAoECwQMBA0EDgQPBBAEEQQSBBMEFAQVBBYEFwQYBBkEGgQbBBwEHQQeBB8EIAQhBCIEIwQkBCUEJgQnBCgEKQQqBCsELAQtBC4ELwQwBDEEMgQzBDQENQQ2BDcEOAQ5BDoEOwQ8BD0EPgQ/BEAEQQRCBEMERARFBEYERwRIBEkESgRLBEwETQROBE8EUARRBFIEUwRUBFUEVgRXBFgEWQRaBFsEXARdBF4EXwRgBGEEYgRjBGQEZQRmBGcEaARpBGoEawRsBG0EbgRvBHAEcQRyBHMEdAR1BHYEdwR4BHkEegR7BHwEfQR+BH8EgASBBIIEgwSEBIUEhgSHBIgEiQSKBIsEjASNBI4EjwSQBJEEkgSTBJQElQSWBJcEmASZBJoEmwScBJ0EngSfBKAEoQSiBKMEpASlBKYEpwSoBKkEqgSrBKwErQSuBK8EsASxBLIEswS0BLUEtgS3BLgEuQS6BLsEvAS9BL4EvwTABMEEwgTDBMQExQTGBMcEyATJBMoEywTMBM0EzgTPBNAE0QTSBNME1ATVBNYE1wTYBNkE2gTbBNwE3QTeBN8E4AThBOIE4wTkBOUE5gTnBOgE6QTqBOsE7ATtBO4E7wTwBPEE8gTzBPQE9QT2BPcE+AT5BPoE+wT8BP0E/gT/BQAFAQUCBQMFBAUFBQYFBwUIBQkFCgULBQwFDQUOBQ8FEAURBRIFEwUUBRUFFgUXBRgFGQUaBRsFHAUdBR4FHwUgBSEFIgUjBSQFJQUmBScFKAUpBSoFKwUsBS0FLgUvBTAFMQUyBTMFNAU1BTYFNwU4BTkFOgU7BTwFPQU+BT8FQAVBBUIFQwVEBUUFRgVHBUgFSQVKBUsFTAVNBU4FTwVQBVEFUgVTBVQFVQVWBVcFWAVZBVoFWwVcBV0FXgVfBWAFYQViBWMFZAVlBWYFZwVoBWkFagVrBWwFbQVuBW8FcAVxBXIFcwV0BXUFdgV3BXgFeQV6BXsFfAV9BX4FfwWABYEFggWDBYQFhQWGBYcFiAWJBYoFiwWMBY0FjgWPBZAFkQWSBZMFlAWVBZYFlwWYBZkFmgWbBZwFnQWeBZ8FoAWhBaIFowWkBaUFpgWnBagFqQWqBasFrAWtBa4FrwWwBbEFsgWzBbQFtQW2BbcFuAW5BboFuwW8Bb0FvgW/BcAFwQXCBcMFxAXFBcYFxwXIBckFygXLBcwFzQXOBc8F0AXRBdIF0wXUBdUF1gXXBdgF2QXaBdsF3AXdBd4F3wXgBeEF4gXjBeQF5QXmBecF6AXpBeoF6wXsBe0F7gXvBfAF8QXyBfMF9AX1BfYF9wX4BfkF+gX7BfwF/QX+Bf8GAAYBBgIGAwYEBgUGBgYHBggGCQYKBgsGDAYNBg4GDwYQBhEGEgYTBhQGFQYWBhcGGAYZBhoGGwYcBh0GHgYfBiAGIQYiBiMGJAYlBiYGJwYoBikGKgYrBiwGLQYuBi8GMAYxBjIGMwY0BjUGNgY3BjgGOQY6BjsGPAY9Bj4GPwZABkEGQgZDBkQGRQZGBkcGSAZJBkoGSwZMBk0GTgZPBlAGUQZSBlMGVAZVBlYGVwZYBlkGWgZbBlwGXQZeBl8GYAZhBmIGYwZkBmUGZgZnBmgGaQZqBmsGbAZtBm4GbwZwBnEGcgZzBnQGdQZ2BncGeAZ5BnoGewZ8Bn0GfgZ/BoAGgQaCBoMGhAaFBoYGhwaIBokGigaLBowGjQaOBo8GkAaRBpIGkwaUBpUGlgaXBpgGmQaaBpsGnAadBp4GnwagBqEGogajBqQGpQamBqcGqAapBqoGqwasBq0GrgavBrAGsQayBrMGtAa1BrYGtwa4BrkGuga7BrwGvQa+Br8GwAbBBsIGwwbEBsUGxgbHBsgGyQbKBssGzAbNBs4GzwbQBtEG0gbTBtQG1QbWBtcG2AbZBtoG2wbcBt0G3gbfBuAG4QbiBuMG5AblBuYG5wboBukG6gbrBuwG7QbuBu8G8AbxBvIG8wb0BvUG9gb3BvgG+Qb6BvsG/Ab9Bv4G/wcABwEHAgcDBwQHBQcGBwcHCAcJBwoHCwcMBw0HDgcPBxAHEQcSBxMHFAcVBxYHFwcYBxkHGgcbBxwHHQceBx8HIAchByIHIwckByUHJgcnBygHKQcqBysHLActBy4HLwcwBzEHMgczBzQHNQc2BzcHOAc5BzoHOwc8Bz0HPgc/B0AHQQdCB0MHRAdFB0YHRwdIB0kHSgdLB0wHTQdOB08HUAdRB1IHUwdUB1UHVgdXB1gHWQdaB1sHXAddB14HXwdgB2EHYgdjB2QHZQdmB2cHaAdpB2oHawdsB20HbgdvB3AHcQdyB3MHdAd1B3YHdwd4B3kHegd7B3wHfQd+B38HgAeBB4IHgweEB4UHhgeHB4gHiQeKB4sHjAeNB44HjweQB5EHkgeTB5QHlQeWB5cHmAeZB5oHmwecB50HngefB6AHoQeiB6MHpAelB6YHpweoB6kHqgerB6wHrQeuB68HsAexB7IHswe0B7UHtge3B7gHuQe6B7sHvAe9B74HvwfAB8EHwgfDB8QHxQfGB8cHyAfJB8oHywfMB80HzgfPB9AH0QfSB9MH1AfVB9YH1wfYB9kH2gfbB9wH3QfeB98H4AfhB+IH4wfkB+UH5gfnB+gH6QfqB+sH7AftB+4H7wfwB/EH8gfzB/QH9Qf2B/cH+Af5B/oH+wf8B/0H/gf/CAAIAQgCCAMIBAgFCAYIBwgICAkICggLCAwIDQgOCA8IEAgRCBIIEwgUCBUIFggXCBgIGQgaCBsIHAgdCB4IHwggCCEIIggjCCQIJQgmCCcIKAgpCCoIKwgsCC0ILggvCDAIMQgyCDMINAg1CDYINwg4CDkIOgg7CDwIPQg+CD8IQAhBCEIIQwhECEUIRghHCEgISQhKCEsg+wy3+iS3AfcQt/kstwP3EPoEFf58+YT6fAf9WP4nFfnSB/fF/DMFprAV+8X4NwX49gamYhX90gf7xfgzBXBmFffF/DcF/PYGDg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4OAAEBAQr4HwwmmhwZLRL7joscBUaLBr0KvQv65xUD6AB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAA==");}', 
    d.cssRules.length);
  };
  (function(d) {
    d.instance = {enabled:!1, initJS:function(f) {
    }, registerCallback:function(f) {
    }, unregisterCallback:function(f) {
    }, eval:function(f) {
    }, call:function(f) {
    }, getId:function() {
      return null;
    }};
  })(h.ExternalInterfaceService || (h.ExternalInterfaceService = {}));
  (function(d) {
    d[d.InvalidCallback = -3] = "InvalidCallback";
    d[d.AlreadyTaken = -2] = "AlreadyTaken";
    d[d.InvalidName = -1] = "InvalidName";
    d[d.Success = 0] = "Success";
  })(h.LocalConnectionConnectResult || (h.LocalConnectionConnectResult = {}));
  (function(d) {
    d[d.NotConnected = -1] = "NotConnected";
    d[d.Success = 0] = "Success";
  })(h.LocalConnectionCloseResult || (h.LocalConnectionCloseResult = {}));
  (function(d) {
    d.instance;
  })(h.LocalConnectionService || (h.LocalConnectionService = {}));
  (function(d) {
    d.instance = {setClipboard:function(f) {
    }};
  })(h.ClipboardService || (h.ClipboardService = {}));
  b = function() {
    function d() {
      this._queues = {};
    }
    d.prototype.register = function(f, g) {
      n.assert(f);
      n.assert(g);
      var c = this._queues[f];
      if (c) {
        if (-1 < c.indexOf(g)) {
          return;
        }
      } else {
        c = this._queues[f] = [];
      }
      c.push(g);
    };
    d.prototype.unregister = function(f, g) {
      n.assert(f);
      n.assert(g);
      var c = this._queues[f];
      if (c) {
        var e = c.indexOf(g);
        -1 !== e && c.splice(e, 1);
        0 === c.length && (this._queues[f] = null);
      }
    };
    d.prototype.notify = function(f, g) {
      var c = this._queues[f];
      if (c) {
        c = c.slice();
        g = Array.prototype.slice.call(arguments, 0);
        for (var e = 0;e < c.length;e++) {
          c[e].apply(null, g);
        }
      }
    };
    d.prototype.notify1 = function(f, g) {
      var c = this._queues[f];
      if (c) {
        for (var c = c.slice(), e = 0;e < c.length;e++) {
          (0,c[e])(f, g);
        }
      }
    };
    return d;
  }();
  h.Callback = b;
  (function(d) {
    d[d.None = 0] = "None";
    d[d.PremultipliedAlphaARGB = 1] = "PremultipliedAlphaARGB";
    d[d.StraightAlphaARGB = 2] = "StraightAlphaARGB";
    d[d.StraightAlphaRGBA = 3] = "StraightAlphaRGBA";
    d[d.JPEG = 4] = "JPEG";
    d[d.PNG = 5] = "PNG";
    d[d.GIF = 6] = "GIF";
  })(h.ImageType || (h.ImageType = {}));
  var v = h.ImageType;
  h.getMIMETypeForImageType = function(d) {
    switch(d) {
      case 4:
        return "image/jpeg";
      case 5:
        return "image/png";
      case 6:
        return "image/gif";
      default:
        return "text/plain";
    }
  };
  (function(d) {
    d.toCSSCursor = function(f) {
      switch(f) {
        case 0:
          return "auto";
        case 2:
          return "pointer";
        case 3:
          return "grab";
        case 4:
          return "text";
        default:
          return "default";
      }
    };
  })(h.UI || (h.UI = {}));
  b = function() {
    function d() {
      this.promise = new Promise(function(f, g) {
        this.resolve = f;
        this.reject = g;
      }.bind(this));
    }
    d.prototype.then = function(f, g) {
      return this.promise.then(f, g);
    };
    return d;
  }();
  h.PromiseWrapper = b;
})(Shumway || (Shumway = {}));
(function() {
  function h(c) {
    if ("function" !== typeof c) {
      throw new TypeError("Invalid deferred constructor");
    }
    var e = q();
    c = new c(e);
    var g = e.resolve;
    if ("function" !== typeof g) {
      throw new TypeError("Invalid resolve construction function");
    }
    e = e.reject;
    if ("function" !== typeof e) {
      throw new TypeError("Invalid reject construction function");
    }
    return {promise:c, resolve:g, reject:e};
  }
  function p(c, e) {
    if ("object" !== typeof c || null === c) {
      return !1;
    }
    try {
      var g = c.then;
      if ("function" !== typeof g) {
        return !1;
      }
      g.call(c, e.resolve, e.reject);
    } catch (f) {
      g = e.reject, g(f);
    }
    return !0;
  }
  function r(c) {
    return "object" === typeof c && null !== c && "undefined" !== typeof c.promiseStatus;
  }
  function a(c, e) {
    if ("unresolved" === c.promiseStatus) {
      var g = c.rejectReactions;
      c.result = e;
      c.resolveReactions = void 0;
      c.rejectReactions = void 0;
      c.promiseStatus = "has-rejection";
      x(g, e);
    }
  }
  function x(c, e) {
    for (var g = 0;g < c.length;g++) {
      n({reaction:c[g], argument:e});
    }
  }
  function n(c) {
    0 === g.length && setTimeout(b, 0);
    g.push(c);
  }
  function b() {
    for (;0 < g.length;) {
      var c = g[0];
      try {
        a: {
          var e = c.reaction, f = e.deferred, w = e.handler, b = void 0, a = void 0;
          try {
            b = w(c.argument);
          } catch (l) {
            var k = f.reject;
            k(l);
            break a;
          }
          if (b === f.promise) {
            k = f.reject, k(new TypeError("Self resolution"));
          } else {
            try {
              if (a = p(b, f), !a) {
                var v = f.resolve;
                v(b);
              }
            } catch (m) {
              k = f.reject, k(m);
            }
          }
        }
      } catch (u) {
        if ("function" === typeof d.onerror) {
          d.onerror(u);
        }
      }
      g.shift();
    }
  }
  function l(c) {
    throw c;
  }
  function u(c) {
    return c;
  }
  function k(c) {
    return function(e) {
      a(c, e);
    };
  }
  function t(c) {
    return function(e) {
      if ("unresolved" === c.promiseStatus) {
        var g = c.resolveReactions;
        c.result = e;
        c.resolveReactions = void 0;
        c.rejectReactions = void 0;
        c.promiseStatus = "has-resolution";
        x(g, e);
      }
    };
  }
  function q() {
    function c(e, g) {
      c.resolve = e;
      c.reject = g;
    }
    return c;
  }
  function m(c, e, g) {
    return function(f) {
      if (f === c) {
        return g(new TypeError("Self resolution"));
      }
      var d = c.promiseConstructor;
      if (r(f) && f.promiseConstructor === d) {
        return f.then(e, g);
      }
      d = h(d);
      return p(f, d) ? d.promise.then(e, g) : e(f);
    };
  }
  function v(c, e, g, f) {
    return function(d) {
      e[c] = d;
      f.countdown--;
      0 === f.countdown && g.resolve(e);
    };
  }
  function d(c) {
    if ("function" !== typeof c) {
      throw new TypeError("resolver is not a function");
    }
    if ("object" !== typeof this) {
      throw new TypeError("Promise to initialize is not an object");
    }
    this.promiseStatus = "unresolved";
    this.resolveReactions = [];
    this.rejectReactions = [];
    this.result = void 0;
    var e = t(this), g = k(this);
    try {
      c(e, g);
    } catch (f) {
      a(this, f);
    }
    this.promiseConstructor = d;
    return this;
  }
  var f = Function("return this")();
  if (f.Promise) {
    "function" !== typeof f.Promise.all && (f.Promise.all = function(c) {
      var e = 0, g = [], d, b, a = new f.Promise(function(e, c) {
        d = e;
        b = c;
      });
      c.forEach(function(c, f) {
        e++;
        c.then(function(c) {
          g[f] = c;
          e--;
          0 === e && d(g);
        }, b);
      });
      0 === e && d(g);
      return a;
    }), "function" !== typeof f.Promise.resolve && (f.Promise.resolve = function(c) {
      return new f.Promise(function(e) {
        e(c);
      });
    });
  } else {
    var g = [];
    d.all = function(c) {
      var e = h(this), g = [], f = {countdown:0}, d = 0;
      c.forEach(function(c) {
        c = this.cast(c);
        var b = v(d, g, e, f);
        c.then(b, e.reject);
        d++;
        f.countdown++;
      }, this);
      0 === d && e.resolve(g);
      return e.promise;
    };
    d.cast = function(c) {
      if (r(c)) {
        return c;
      }
      var e = h(this);
      e.resolve(c);
      return e.promise;
    };
    d.reject = function(c) {
      var e = h(this);
      e.reject(c);
      return e.promise;
    };
    d.resolve = function(c) {
      var e = h(this);
      e.resolve(c);
      return e.promise;
    };
    d.prototype = {"catch":function(c) {
      this.then(void 0, c);
    }, then:function(c, e) {
      if (!r(this)) {
        throw new TypeError("this is not a Promises");
      }
      var g = h(this.promiseConstructor), f = "function" === typeof e ? e : l, d = m(this, "function" === typeof c ? c : u, f), d = {deferred:g, handler:d}, f = {deferred:g, handler:f};
      switch(this.promiseStatus) {
        case "unresolved":
          this.resolveReactions.push(d);
          this.rejectReactions.push(f);
          break;
        case "has-resolution":
          n({reaction:d, argument:this.result});
          break;
        case "has-rejection":
          n({reaction:f, argument:this.result});
      }
      return g.promise;
    }};
    f.Promise = d;
  }
})();
"undefined" !== typeof exports && (exports.Shumway = Shumway);
(function() {
  function h(h, r, a) {
    h[r] || Object.defineProperty(h, r, {value:a, writable:!0, configurable:!0, enumerable:!1});
  }
  h(String.prototype, "padRight", function(h, r) {
    var a = this, x = a.replace(/\033\[[0-9]*m/g, "").length;
    if (!h || x >= r) {
      return a;
    }
    for (var x = (r - x) / h.length, n = 0;n < x;n++) {
      a += h;
    }
    return a;
  });
  h(String.prototype, "padLeft", function(h, r) {
    var a = this, x = a.length;
    if (!h || x >= r) {
      return a;
    }
    for (var x = (r - x) / h.length, n = 0;n < x;n++) {
      a = h + a;
    }
    return a;
  });
  h(String.prototype, "trim", function() {
    return this.replace(/^\s+|\s+$/g, "");
  });
  h(String.prototype, "endsWith", function(h) {
    return -1 !== this.indexOf(h, this.length - h.length);
  });
  h(Array.prototype, "replace", function(h, r) {
    if (h === r) {
      return 0;
    }
    for (var a = 0, x = 0;x < this.length;x++) {
      this[x] === h && (this[x] = r, a++);
    }
    return a;
  });
})();
(function(h) {
  (function(p) {
    var r = h.isObject, a = function() {
      function b(a, l, t, n) {
        this.shortName = a;
        this.longName = l;
        this.type = t;
        n = n || {};
        this.positional = n.positional;
        this.parseFn = n.parse;
        this.value = n.defaultValue;
      }
      b.prototype.parse = function(b) {
        this.value = "boolean" === this.type ? b : "number" === this.type ? parseInt(b, 10) : b;
        this.parseFn && this.parseFn(this.value);
      };
      return b;
    }();
    p.Argument = a;
    var x = function() {
      function b() {
        this.args = [];
      }
      b.prototype.addArgument = function(b, l, t, n) {
        b = new a(b, l, t, n);
        this.args.push(b);
        return b;
      };
      b.prototype.addBoundOption = function(b) {
        this.args.push(new a(b.shortName, b.longName, b.type, {parse:function(a) {
          b.value = a;
        }}));
      };
      b.prototype.addBoundOptionSet = function(b) {
        var a = this;
        b.options.forEach(function(b) {
          n.isOptionSet(b) ? a.addBoundOptionSet(b) : a.addBoundOption(b);
        });
      };
      b.prototype.getUsage = function() {
        var b = "";
        this.args.forEach(function(a) {
          b = a.positional ? b + a.longName : b + ("[-" + a.shortName + "|--" + a.longName + ("boolean" === a.type ? "" : " " + a.type[0].toUpperCase()) + "]");
          b += " ";
        });
        return b;
      };
      b.prototype.parse = function(b) {
        var a = {}, l = [];
        this.args.forEach(function(f) {
          f.positional ? l.push(f) : (a["-" + f.shortName] = f, a["--" + f.longName] = f);
        });
        for (var n = [];b.length;) {
          var m = b.shift(), v = null, d = m;
          if ("--" == m) {
            n = n.concat(b);
            break;
          } else {
            if ("-" == m.slice(0, 1) || "--" == m.slice(0, 2)) {
              v = a[m];
              if (!v) {
                continue;
              }
              d = "boolean" !== v.type ? b.shift() : !0;
            } else {
              l.length ? v = l.shift() : n.push(d);
            }
          }
          v && v.parse(d);
        }
        return n;
      };
      return b;
    }();
    p.ArgumentParser = x;
    var n = function() {
      function a(b, l) {
        void 0 === l && (l = null);
        this.open = !1;
        this.name = b;
        this.settings = l || {};
        this.options = [];
      }
      a.isOptionSet = function(u) {
        return u instanceof a ? !0 : "object" !== typeof u || null === u || u instanceof b ? !1 : "options" in u && "name" in u && "settings" in u;
      };
      a.prototype.register = function(b) {
        if (a.isOptionSet(b)) {
          for (var k = 0;k < this.options.length;k++) {
            var t = this.options[k];
            if (a.isOptionSet(t) && t.name === b.name) {
              return t;
            }
          }
        }
        this.options.push(b);
        if (this.settings) {
          if (a.isOptionSet(b)) {
            k = this.settings[b.name], r(k) && (b.settings = k.settings, b.open = k.open);
          } else {
            if ("undefined" !== typeof this.settings[b.longName]) {
              switch(b.type) {
                case "boolean":
                  b.value = !!this.settings[b.longName];
                  break;
                case "number":
                  b.value = +this.settings[b.longName];
                  break;
                default:
                  b.value = this.settings[b.longName];
              }
            }
          }
        }
        return b;
      };
      a.prototype.trace = function(b) {
        b.enter(this.name + " {");
        this.options.forEach(function(a) {
          a.trace(b);
        });
        b.leave("}");
      };
      a.prototype.getSettings = function() {
        var b = {};
        this.options.forEach(function(k) {
          a.isOptionSet(k) ? b[k.name] = {settings:k.getSettings(), open:k.open} : b[k.longName] = k.value;
        });
        return b;
      };
      a.prototype.setSettings = function(b) {
        b && this.options.forEach(function(k) {
          a.isOptionSet(k) ? k.name in b && k.setSettings(b[k.name].settings) : k.longName in b && (k.value = b[k.longName]);
        });
      };
      return a;
    }();
    p.OptionSet = n;
    var b = function() {
      function b(a, l, t, n, m, v) {
        void 0 === v && (v = null);
        this.longName = l;
        this.shortName = a;
        this.type = t;
        this.value = this.defaultValue = n;
        this.description = m;
        this.config = v;
      }
      b.prototype.parse = function(b) {
        this.value = b;
      };
      b.prototype.trace = function(b) {
        b.writeLn(("-" + this.shortName + "|--" + this.longName).padRight(" ", 30) + " = " + this.type + " " + this.value + " [" + this.defaultValue + "] (" + this.description + ")");
      };
      return b;
    }();
    p.Option = b;
  })(h.Options || (h.Options = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(r) {
    r.ROOT = "Shumway Options";
    r.shumwayOptions = new h.Options.OptionSet(r.ROOT);
    r.setSettings = function(a) {
      r.shumwayOptions.setSettings(a);
    };
    r.getSettings = function() {
      return r.shumwayOptions.getSettings();
    };
  })(h.Settings || (h.Settings = {}));
  var p = h.Options.Option;
  h.loggingOptions = h.Settings.shumwayOptions.register(new h.Options.OptionSet("Logging Options"));
  h.omitRepeatedWarnings = h.loggingOptions.register(new p("wo", "warnOnce", "boolean", !0, "Omit Repeated Warnings"));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    var r = function() {
      function a(a, n) {
        this._parent = a;
        this._timers = h.ObjectUtilities.createMap();
        this._name = n;
        this._count = this._total = this._last = this._begin = 0;
      }
      a.time = function(h, n) {
        a.start(h);
        n();
        a.stop();
      };
      a.start = function(h) {
        a._top = a._top._timers[h] || (a._top._timers[h] = new a(a._top, h));
        a._top.start();
        h = a._flat._timers[h] || (a._flat._timers[h] = new a(a._flat, h));
        h.start();
        a._flatStack.push(h);
      };
      a.stop = function() {
        a._top.stop();
        a._top = a._top._parent;
        a._flatStack.pop().stop();
      };
      a.stopStart = function(h) {
        a.stop();
        a.start(h);
      };
      a.prototype.start = function() {
        this._begin = h.getTicks();
      };
      a.prototype.stop = function() {
        this._last = h.getTicks() - this._begin;
        this._total += this._last;
        this._count += 1;
      };
      a.prototype.toJSON = function() {
        return {name:this._name, total:this._total, timers:this._timers};
      };
      a.prototype.trace = function(a) {
        a.enter(this._name + ": " + this._total.toFixed(2) + " ms, count: " + this._count + ", average: " + (this._total / this._count).toFixed(2) + " ms");
        for (var n in this._timers) {
          this._timers[n].trace(a);
        }
        a.outdent();
      };
      a.trace = function(h) {
        a._base.trace(h);
        a._flat.trace(h);
      };
      a._base = new a(null, "Total");
      a._top = a._base;
      a._flat = new a(null, "Flat");
      a._flatStack = [];
      return a;
    }();
    p.Timer = r;
    r = function() {
      function a(a) {
        this._enabled = a;
        this.clear();
      }
      Object.defineProperty(a.prototype, "counts", {get:function() {
        return this._counts;
      }, enumerable:!0, configurable:!0});
      a.prototype.setEnabled = function(a) {
        this._enabled = a;
      };
      a.prototype.clear = function() {
        this._counts = h.ObjectUtilities.createMap();
        this._times = h.ObjectUtilities.createMap();
      };
      a.prototype.toJSON = function() {
        return {counts:this._counts, times:this._times};
      };
      a.prototype.count = function(a, n, b) {
        void 0 === n && (n = 1);
        void 0 === b && (b = 0);
        if (this._enabled) {
          return void 0 === this._counts[a] && (this._counts[a] = 0, this._times[a] = 0), this._counts[a] += n, this._times[a] += b, this._counts[a];
        }
      };
      a.prototype.trace = function(a) {
        for (var n in this._counts) {
          a.writeLn(n + ": " + this._counts[n]);
        }
      };
      a.prototype._pairToString = function(a, n) {
        var b = n[0], l = n[1], u = a[b], b = b + ": " + l;
        u && (b += ", " + u.toFixed(4), 1 < l && (b += " (" + (u / l).toFixed(4) + ")"));
        return b;
      };
      a.prototype.toStringSorted = function() {
        var a = this, n = this._times, b = [], l;
        for (l in this._counts) {
          b.push([l, this._counts[l]]);
        }
        b.sort(function(b, a) {
          return a[1] - b[1];
        });
        return b.map(function(b) {
          return a._pairToString(n, b);
        }).join(", ");
      };
      a.prototype.traceSorted = function(a, n) {
        void 0 === n && (n = !1);
        var b = this, l = this._times, u = [], k;
        for (k in this._counts) {
          u.push([k, this._counts[k]]);
        }
        u.sort(function(b, a) {
          return a[1] - b[1];
        });
        n ? a.writeLn(u.map(function(a) {
          return b._pairToString(l, a);
        }).join(", ")) : u.forEach(function(k) {
          a.writeLn(b._pairToString(l, k));
        });
      };
      a.instance = new a(!0);
      return a;
    }();
    p.Counter = r;
    r = function() {
      function a(a) {
        this._samples = new Float64Array(a);
        this._index = this._count = 0;
      }
      a.prototype.push = function(a) {
        this._count < this._samples.length && this._count++;
        this._index++;
        this._samples[this._index % this._samples.length] = a;
      };
      a.prototype.average = function() {
        for (var a = 0, n = 0;n < this._count;n++) {
          a += this._samples[n];
        }
        return a / this._count;
      };
      return a;
    }();
    p.Average = r;
  })(h.Metrics || (h.Metrics = {}));
})(Shumway || (Shumway = {}));
var __extends = this.__extends || function(h, p) {
  function r() {
    this.constructor = h;
  }
  for (var a in p) {
    p.hasOwnProperty(a) && (h[a] = p[a]);
  }
  r.prototype = p.prototype;
  h.prototype = new r;
};
(function(h) {
  (function(h) {
    function r(g) {
      for (var c = Math.max.apply(null, g), e = g.length, f = 1 << c, d = new Uint32Array(f), b = c << 16 | 65535, a = 0;a < f;a++) {
        d[a] = b;
      }
      for (var b = 0, a = 1, l = 2;a <= c;b <<= 1, ++a, l <<= 1) {
        for (var k = 0;k < e;++k) {
          if (g[k] === a) {
            for (var v = 0, m = 0;m < a;++m) {
              v = 2 * v + (b >> m & 1);
            }
            for (m = v;m < f;m += l) {
              d[m] = a << 16 | k;
            }
            ++b;
          }
        }
      }
      return {codes:d, maxBits:c};
    }
    var a;
    (function(g) {
      g[g.INIT = 0] = "INIT";
      g[g.BLOCK_0 = 1] = "BLOCK_0";
      g[g.BLOCK_1 = 2] = "BLOCK_1";
      g[g.BLOCK_2_PRE = 3] = "BLOCK_2_PRE";
      g[g.BLOCK_2 = 4] = "BLOCK_2";
      g[g.DONE = 5] = "DONE";
      g[g.ERROR = 6] = "ERROR";
      g[g.VERIFY_HEADER = 7] = "VERIFY_HEADER";
    })(a || (a = {}));
    a = function() {
      function g(c) {
      }
      g.prototype.push = function(c) {
      };
      g.prototype.close = function() {
      };
      g.create = function(c) {
        return "undefined" !== typeof ShumwayCom && ShumwayCom.createSpecialInflate ? new v(c, ShumwayCom.createSpecialInflate) : new x(c);
      };
      g.prototype._processZLibHeader = function(c, e, g) {
        if (e + 2 > g) {
          return 0;
        }
        c = c[e] << 8 | c[e + 1];
        e = null;
        2048 !== (c & 3840) ? e = "inflate: unknown compression method" : 0 !== c % 31 ? e = "inflate: bad FCHECK" : 0 !== (c & 32) && (e = "inflate: FDICT bit set");
        if (e) {
          if (this.onError) {
            this.onError(e);
          }
          return -1;
        }
        return 2;
      };
      g.inflate = function(c, e, f) {
        var d = new Uint8Array(e), b = 0;
        e = g.create(f);
        e.onData = function(e) {
          var c = Math.min(e.length, d.length - b);
          c && h.memCopy(d, e, b, 0, c);
          b += c;
        };
        e.onError = function(e) {
          throw Error(e);
        };
        e.push(c);
        e.close();
        return d;
      };
      return g;
    }();
    h.Inflate = a;
    var x = function(g) {
      function c(e) {
        g.call(this, e);
        this._buffer = null;
        this._bitLength = this._bitBuffer = this._bufferPosition = this._bufferSize = 0;
        this._window = new Uint8Array(65794);
        this._windowPosition = 0;
        this._state = e ? 7 : 0;
        this._isFinalBlock = !1;
        this._distanceTable = this._literalTable = null;
        this._block0Read = 0;
        this._block2State = null;
        this._copyState = {state:0, len:0, lenBits:0, dist:0, distBits:0};
        if (!m) {
          n = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
          b = new Uint16Array(30);
          l = new Uint8Array(30);
          for (var c = e = 0, f = 1;30 > e;++e) {
            b[e] = f, f += 1 << (l[e] = ~~((c += 2 < e ? 1 : 0) / 2));
          }
          var d = new Uint8Array(288);
          for (e = 0;32 > e;++e) {
            d[e] = 5;
          }
          u = r(d.subarray(0, 32));
          k = new Uint16Array(29);
          t = new Uint8Array(29);
          c = e = 0;
          for (f = 3;29 > e;++e) {
            k[e] = f - (28 == e ? 1 : 0), f += 1 << (t[e] = ~~((c += 4 < e ? 1 : 0) / 4 % 6));
          }
          for (e = 0;288 > e;++e) {
            d[e] = 144 > e || 279 < e ? 8 : 256 > e ? 9 : 7;
          }
          q = r(d);
          m = !0;
        }
      }
      __extends(c, g);
      c.prototype.push = function(e) {
        if (!this._buffer || this._buffer.length < this._bufferSize + e.length) {
          var c = new Uint8Array(this._bufferSize + e.length);
          this._buffer && c.set(this._buffer);
          this._buffer = c;
        }
        this._buffer.set(e, this._bufferSize);
        this._bufferSize += e.length;
        this._bufferPosition = 0;
        e = !1;
        do {
          c = this._windowPosition;
          if (0 === this._state && (e = this._decodeInitState())) {
            break;
          }
          switch(this._state) {
            case 1:
              e = this._decodeBlock0();
              break;
            case 3:
              if (e = this._decodeBlock2Pre()) {
                break;
              }
            ;
            case 2:
            ;
            case 4:
              e = this._decodeBlock();
              break;
            case 6:
            ;
            case 5:
              this._bufferPosition = this._bufferSize;
              break;
            case 7:
              var g = this._processZLibHeader(this._buffer, this._bufferPosition, this._bufferSize);
              0 < g ? (this._bufferPosition += g, this._state = 0) : 0 === g ? e = !0 : this._state = 6;
          }
          if (0 < this._windowPosition - c) {
            this.onData(this._window.subarray(c, this._windowPosition));
          }
          65536 <= this._windowPosition && ("copyWithin" in this._buffer ? this._window.copyWithin(0, this._windowPosition - 32768, this._windowPosition) : this._window.set(this._window.subarray(this._windowPosition - 32768, this._windowPosition)), this._windowPosition = 32768);
        } while (!e && this._bufferPosition < this._bufferSize);
        this._bufferPosition < this._bufferSize ? ("copyWithin" in this._buffer ? this._buffer.copyWithin(0, this._bufferPosition, this._bufferSize) : this._buffer.set(this._buffer.subarray(this._bufferPosition, this._bufferSize)), this._bufferSize -= this._bufferPosition) : this._bufferSize = 0;
      };
      c.prototype._decodeInitState = function() {
        if (this._isFinalBlock) {
          return this._state = 5, !1;
        }
        var e = this._buffer, c = this._bufferSize, g = this._bitBuffer, f = this._bitLength, d = this._bufferPosition;
        if (3 > (c - d << 3) + f) {
          return !0;
        }
        3 > f && (g |= e[d++] << f, f += 8);
        var b = g & 7, g = g >> 3, f = f - 3;
        switch(b >> 1) {
          case 0:
            f = g = 0;
            if (4 > c - d) {
              return !0;
            }
            var a = e[d] | e[d + 1] << 8, e = e[d + 2] | e[d + 3] << 8, d = d + 4;
            if (65535 !== (a ^ e)) {
              this._error("inflate: invalid block 0 length");
              e = 6;
              break;
            }
            0 === a ? e = 0 : (this._block0Read = a, e = 1);
            break;
          case 1:
            e = 2;
            this._literalTable = q;
            this._distanceTable = u;
            break;
          case 2:
            if (26 > (c - d << 3) + f) {
              return !0;
            }
            for (;14 > f;) {
              g |= e[d++] << f, f += 8;
            }
            a = (g >> 10 & 15) + 4;
            if ((c - d << 3) + f < 14 + 3 * a) {
              return !0;
            }
            for (var c = {numLiteralCodes:(g & 31) + 257, numDistanceCodes:(g >> 5 & 31) + 1, codeLengthTable:void 0, bitLengths:void 0, codesRead:0, dupBits:0}, g = g >> 14, f = f - 14, l = new Uint8Array(19), k = 0;k < a;++k) {
              3 > f && (g |= e[d++] << f, f += 8), l[n[k]] = g & 7, g >>= 3, f -= 3;
            }
            for (;19 > k;k++) {
              l[n[k]] = 0;
            }
            c.bitLengths = new Uint8Array(c.numLiteralCodes + c.numDistanceCodes);
            c.codeLengthTable = r(l);
            this._block2State = c;
            e = 3;
            break;
          default:
            return this._error("inflate: unsupported block type"), !1;
        }
        this._isFinalBlock = !!(b & 1);
        this._state = e;
        this._bufferPosition = d;
        this._bitBuffer = g;
        this._bitLength = f;
        return !1;
      };
      c.prototype._error = function(e) {
        if (this.onError) {
          this.onError(e);
        }
      };
      c.prototype._decodeBlock0 = function() {
        var e = this._bufferPosition, c = this._windowPosition, g = this._block0Read, f = 65794 - c, d = this._bufferSize - e, b = d < g, a = Math.min(f, d, g);
        this._window.set(this._buffer.subarray(e, e + a), c);
        this._windowPosition = c + a;
        this._bufferPosition = e + a;
        this._block0Read = g - a;
        return g === a ? (this._state = 0, !1) : b && f < d;
      };
      c.prototype._readBits = function(e) {
        var c = this._bitBuffer, g = this._bitLength;
        if (e > g) {
          var f = this._bufferPosition, d = this._bufferSize;
          do {
            if (f >= d) {
              return this._bufferPosition = f, this._bitBuffer = c, this._bitLength = g, -1;
            }
            c |= this._buffer[f++] << g;
            g += 8;
          } while (e > g);
          this._bufferPosition = f;
        }
        this._bitBuffer = c >> e;
        this._bitLength = g - e;
        return c & (1 << e) - 1;
      };
      c.prototype._readCode = function(e) {
        var c = this._bitBuffer, g = this._bitLength, f = e.maxBits;
        if (f > g) {
          var d = this._bufferPosition, b = this._bufferSize;
          do {
            if (d >= b) {
              return this._bufferPosition = d, this._bitBuffer = c, this._bitLength = g, -1;
            }
            c |= this._buffer[d++] << g;
            g += 8;
          } while (f > g);
          this._bufferPosition = d;
        }
        e = e.codes[c & (1 << f) - 1];
        f = e >> 16;
        if (e & 32768) {
          return this._error("inflate: invalid encoding"), this._state = 6, -1;
        }
        this._bitBuffer = c >> f;
        this._bitLength = g - f;
        return e & 65535;
      };
      c.prototype._decodeBlock2Pre = function() {
        var e = this._block2State, c = e.numLiteralCodes + e.numDistanceCodes, g = e.bitLengths, f = e.codesRead, d = 0 < f ? g[f - 1] : 0, b = e.codeLengthTable, a;
        if (0 < e.dupBits) {
          a = this._readBits(e.dupBits);
          if (0 > a) {
            return !0;
          }
          for (;a--;) {
            g[f++] = d;
          }
          e.dupBits = 0;
        }
        for (;f < c;) {
          var l = this._readCode(b);
          if (0 > l) {
            return e.codesRead = f, !0;
          }
          if (16 > l) {
            g[f++] = d = l;
          } else {
            var k;
            switch(l) {
              case 16:
                k = 2;
                a = 3;
                l = d;
                break;
              case 17:
                a = k = 3;
                l = 0;
                break;
              case 18:
                k = 7, a = 11, l = 0;
            }
            for (;a--;) {
              g[f++] = l;
            }
            a = this._readBits(k);
            if (0 > a) {
              return e.codesRead = f, e.dupBits = k, !0;
            }
            for (;a--;) {
              g[f++] = l;
            }
            d = l;
          }
        }
        this._literalTable = r(g.subarray(0, e.numLiteralCodes));
        this._distanceTable = r(g.subarray(e.numLiteralCodes));
        this._state = 4;
        this._block2State = null;
        return !1;
      };
      c.prototype._decodeBlock = function() {
        var e = this._literalTable, c = this._distanceTable, g = this._window, f = this._windowPosition, d = this._copyState, a, v, m, n;
        if (0 !== d.state) {
          switch(d.state) {
            case 1:
              if (0 > (a = this._readBits(d.lenBits))) {
                return !0;
              }
              d.len += a;
              d.state = 2;
            case 2:
              if (0 > (a = this._readCode(c))) {
                return !0;
              }
              d.distBits = l[a];
              d.dist = b[a];
              d.state = 3;
            case 3:
              a = 0;
              if (0 < d.distBits && 0 > (a = this._readBits(d.distBits))) {
                return !0;
              }
              n = d.dist + a;
              v = d.len;
              for (a = f - n;v--;) {
                g[f++] = g[a++];
              }
              d.state = 0;
              if (65536 <= f) {
                return this._windowPosition = f, !1;
              }
              break;
          }
        }
        do {
          a = this._readCode(e);
          if (0 > a) {
            return this._windowPosition = f, !0;
          }
          if (256 > a) {
            g[f++] = a;
          } else {
            if (256 < a) {
              this._windowPosition = f;
              a -= 257;
              m = t[a];
              v = k[a];
              a = 0 === m ? 0 : this._readBits(m);
              if (0 > a) {
                return d.state = 1, d.len = v, d.lenBits = m, !0;
              }
              v += a;
              a = this._readCode(c);
              if (0 > a) {
                return d.state = 2, d.len = v, !0;
              }
              m = l[a];
              n = b[a];
              a = 0 === m ? 0 : this._readBits(m);
              if (0 > a) {
                return d.state = 3, d.len = v, d.dist = n, d.distBits = m, !0;
              }
              n += a;
              for (a = f - n;v--;) {
                g[f++] = g[a++];
              }
            } else {
              this._state = 0;
              break;
            }
          }
        } while (65536 > f);
        this._windowPosition = f;
        return !1;
      };
      return c;
    }(a), n, b, l, u, k, t, q, m = !1, v = function(g) {
      function c(e, c) {
        g.call(this, e);
        this._verifyHeader = e;
        this._specialInflate = c();
        this._specialInflate.setDataCallback(function(e) {
          this.onData(e);
        }.bind(this));
      }
      __extends(c, g);
      c.prototype.push = function(e) {
        if (this._verifyHeader) {
          var c;
          this._buffer ? (c = new Uint8Array(this._buffer.length + e.length), c.set(this._buffer), c.set(e, this._buffer.length), this._buffer = null) : c = new Uint8Array(e);
          var g = this._processZLibHeader(c, 0, c.length);
          if (0 === g) {
            this._buffer = c;
            return;
          }
          this._verifyHeader = !0;
          0 < g && (e = c.subarray(g));
        }
        this._specialInflate.push(e);
      };
      c.prototype.close = function() {
        this._specialInflate && (this._specialInflate.close(), this._specialInflate = null);
      };
      return c;
    }(a), d;
    (function(g) {
      g[g.WRITE = 0] = "WRITE";
      g[g.DONE = 1] = "DONE";
      g[g.ZLIB_HEADER = 2] = "ZLIB_HEADER";
    })(d || (d = {}));
    var f = function() {
      function g() {
        this.a = 1;
        this.b = 0;
      }
      g.prototype.update = function(c, e, g) {
        for (var f = this.a, d = this.b;e < g;++e) {
          f = (f + (c[e] & 255)) % 65521, d = (d + f) % 65521;
        }
        this.a = f;
        this.b = d;
      };
      g.prototype.getChecksum = function() {
        return this.b << 16 | this.a;
      };
      return g;
    }();
    h.Adler32 = f;
    d = function() {
      function g(c) {
        this._state = (this._writeZlibHeader = c) ? 2 : 0;
        this._adler32 = c ? new f : null;
      }
      g.prototype.push = function(c) {
        2 === this._state && (this.onData(new Uint8Array([120, 156])), this._state = 0);
        for (var e = c.length, g = e + 5 * Math.ceil(e / 65535), g = new Uint8Array(g), f = 0, d = 0;65535 < e;) {
          g.set(new Uint8Array([0, 255, 255, 0, 0]), f), f += 5, g.set(c.subarray(d, d + 65535), f), d += 65535, f += 65535, e -= 65535;
        }
        g.set(new Uint8Array([0, e & 255, e >> 8 & 255, ~e & 255, ~e >> 8 & 255]), f);
        f += 5;
        g.set(c.subarray(d, e), f);
        this.onData(g);
        this._adler32 && this._adler32.update(c, 0, e);
      };
      g.prototype.close = function() {
        this._state = 1;
        this.onData(new Uint8Array([1, 0, 0, 255, 255]));
        if (this._adler32) {
          var c = this._adler32.getChecksum();
          this.onData(new Uint8Array([c & 255, c >> 8 & 255, c >> 16 & 255, c >>> 24 & 255]));
        }
      };
      return g;
    }();
    h.Deflate = d;
  })(h.ArrayUtilities || (h.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    function r(c) {
      for (var e = new Uint16Array(c), g = 0;g < c;g++) {
        e[g] = 1024;
      }
      return e;
    }
    function a(c, e, g, f) {
      for (var d = 1, b = 0, a = 0;a < g;a++) {
        var l = f.decodeBit(c, d + e), d = (d << 1) + l, b = b | l << a
      }
      return b;
    }
    function x(c, e) {
      var g = [];
      g.length = e;
      for (var f = 0;f < e;f++) {
        g[f] = new k(c);
      }
      return g;
    }
    var n = function() {
      function c() {
        this.pos = this.available = 0;
        this.buffer = new Uint8Array(2E3);
      }
      c.prototype.append = function(e) {
        var c = this.pos + this.available, g = c + e.length;
        if (g > this.buffer.length) {
          for (var f = 2 * this.buffer.length;f < g;) {
            f *= 2;
          }
          g = new Uint8Array(f);
          g.set(this.buffer);
          this.buffer = g;
        }
        this.buffer.set(e, c);
        this.available += e.length;
      };
      c.prototype.compact = function() {
        0 !== this.available && (this.buffer.set(this.buffer.subarray(this.pos, this.pos + this.available), 0), this.pos = 0);
      };
      c.prototype.readByte = function() {
        if (0 >= this.available) {
          throw Error("Unexpected end of file");
        }
        this.available--;
        return this.buffer[this.pos++];
      };
      return c;
    }(), b = function() {
      function c(e) {
        this.onData = e;
        this.processed = 0;
      }
      c.prototype.writeBytes = function(e) {
        this.onData.call(null, e);
        this.processed += e.length;
      };
      return c;
    }(), l = function() {
      function c(e) {
        this.outStream = e;
        this.buf = null;
        this.size = this.pos = 0;
        this.isFull = !1;
        this.totalPos = this.writePos = 0;
      }
      c.prototype.create = function(e) {
        this.buf = new Uint8Array(e);
        this.pos = 0;
        this.size = e;
        this.isFull = !1;
        this.totalPos = this.writePos = 0;
      };
      c.prototype.putByte = function(e) {
        this.totalPos++;
        this.buf[this.pos++] = e;
        this.pos === this.size && (this.flush(), this.pos = 0, this.isFull = !0);
      };
      c.prototype.getByte = function(e) {
        return this.buf[e <= this.pos ? this.pos - e : this.size - e + this.pos];
      };
      c.prototype.flush = function() {
        this.writePos < this.pos && (this.outStream.writeBytes(this.buf.subarray(this.writePos, this.pos)), this.writePos = this.pos === this.size ? 0 : this.pos);
      };
      c.prototype.copyMatch = function(e, c) {
        for (var g = this.pos, f = this.size, d = this.buf, b = e <= g ? g - e : f - e + g, a = c;0 < a;) {
          for (var l = Math.min(Math.min(a, f - g), f - b), k = 0;k < l;k++) {
            var v = d[b++];
            d[g++] = v;
          }
          g === f && (this.pos = g, this.flush(), g = 0, this.isFull = !0);
          b === f && (b = 0);
          a -= l;
        }
        this.pos = g;
        this.totalPos += c;
      };
      c.prototype.checkDistance = function(e) {
        return e <= this.pos || this.isFull;
      };
      c.prototype.isEmpty = function() {
        return 0 === this.pos && !this.isFull;
      };
      return c;
    }(), u = function() {
      function c(e) {
        this.inStream = e;
        this.code = this.range = 0;
        this.corrupted = !1;
      }
      c.prototype.init = function() {
        0 !== this.inStream.readByte() && (this.corrupted = !0);
        this.range = -1;
        for (var e = 0, c = 0;4 > c;c++) {
          e = e << 8 | this.inStream.readByte();
        }
        e === this.range && (this.corrupted = !0);
        this.code = e;
      };
      c.prototype.isFinishedOK = function() {
        return 0 === this.code;
      };
      c.prototype.decodeDirectBits = function(e) {
        var c = 0, g = this.range, f = this.code;
        do {
          var g = g >>> 1 | 0, f = f - g | 0, d = f >> 31, f = f + (g & d) | 0;
          f === g && (this.corrupted = !0);
          0 <= g && 16777216 > g && (g <<= 8, f = f << 8 | this.inStream.readByte());
          c = (c << 1) + d + 1 | 0;
        } while (--e);
        this.range = g;
        this.code = f;
        return c;
      };
      c.prototype.decodeBit = function(e, c) {
        var g = this.range, f = this.code, d = e[c], b = (g >>> 11) * d;
        f >>> 0 < b ? (d = d + (2048 - d >> 5) | 0, g = b | 0, b = 0) : (d = d - (d >> 5) | 0, f = f - b | 0, g = g - b | 0, b = 1);
        e[c] = d & 65535;
        0 <= g && 16777216 > g && (g <<= 8, f = f << 8 | this.inStream.readByte());
        this.range = g;
        this.code = f;
        return b;
      };
      return c;
    }(), k = function() {
      function c(e) {
        this.numBits = e;
        this.probs = r(1 << e);
      }
      c.prototype.decode = function(e) {
        for (var c = 1, g = 0;g < this.numBits;g++) {
          c = (c << 1) + e.decodeBit(this.probs, c);
        }
        return c - (1 << this.numBits);
      };
      c.prototype.reverseDecode = function(e) {
        return a(this.probs, 0, this.numBits, e);
      };
      return c;
    }(), t = function() {
      function c() {
        this.choice = r(2);
        this.lowCoder = x(3, 16);
        this.midCoder = x(3, 16);
        this.highCoder = new k(8);
      }
      c.prototype.decode = function(e, c) {
        return 0 === e.decodeBit(this.choice, 0) ? this.lowCoder[c].decode(e) : 0 === e.decodeBit(this.choice, 1) ? 8 + this.midCoder[c].decode(e) : 16 + this.highCoder.decode(e);
      };
      return c;
    }(), q = function() {
      function c(e, c) {
        this.rangeDec = new u(e);
        this.outWindow = new l(c);
        this.markerIsMandatory = !1;
        this.dictSizeInProperties = this.dictSize = this.lp = this.pb = this.lc = 0;
        this.leftToUnpack = this.unpackSize = void 0;
        this.reps = new Int32Array(4);
        this.state = 0;
      }
      c.prototype.decodeProperties = function(e) {
        var c = e[0];
        if (225 <= c) {
          throw Error("Incorrect LZMA properties");
        }
        this.lc = c % 9;
        c = c / 9 | 0;
        this.pb = c / 5 | 0;
        this.lp = c % 5;
        for (c = this.dictSizeInProperties = 0;4 > c;c++) {
          this.dictSizeInProperties |= e[c + 1] << 8 * c;
        }
        this.dictSize = this.dictSizeInProperties;
        4096 > this.dictSize && (this.dictSize = 4096);
      };
      c.prototype.create = function() {
        this.outWindow.create(this.dictSize);
        this.init();
        this.rangeDec.init();
        this.reps[0] = 0;
        this.reps[1] = 0;
        this.reps[2] = 0;
        this.state = this.reps[3] = 0;
        this.leftToUnpack = this.unpackSize;
      };
      c.prototype.decodeLiteral = function(e, c) {
        var g = this.outWindow, f = this.rangeDec, d = 0;
        g.isEmpty() || (d = g.getByte(1));
        var b = 1, d = 768 * (((g.totalPos & (1 << this.lp) - 1) << this.lc) + (d >> 8 - this.lc));
        if (7 <= e) {
          g = g.getByte(c + 1);
          do {
            var a = g >> 7 & 1, g = g << 1, l = f.decodeBit(this.litProbs, d + ((1 + a << 8) + b)), b = b << 1 | l;
            if (a !== l) {
              break;
            }
          } while (256 > b);
        }
        for (;256 > b;) {
          b = b << 1 | f.decodeBit(this.litProbs, d + b);
        }
        return b - 256 & 255;
      };
      c.prototype.decodeDistance = function(e) {
        var c = e;
        3 < c && (c = 3);
        e = this.rangeDec;
        c = this.posSlotDecoder[c].decode(e);
        if (4 > c) {
          return c;
        }
        var g = (c >> 1) - 1, f = (2 | c & 1) << g;
        14 > c ? f = f + a(this.posDecoders, f - c, g, e) | 0 : (f = f + (e.decodeDirectBits(g - 4) << 4) | 0, f = f + this.alignDecoder.reverseDecode(e) | 0);
        return f;
      };
      c.prototype.init = function() {
        this.litProbs = r(768 << this.lc + this.lp);
        this.posSlotDecoder = x(6, 4);
        this.alignDecoder = new k(4);
        this.posDecoders = r(115);
        this.isMatch = r(192);
        this.isRep = r(12);
        this.isRepG0 = r(12);
        this.isRepG1 = r(12);
        this.isRepG2 = r(12);
        this.isRep0Long = r(192);
        this.lenDecoder = new t;
        this.repLenDecoder = new t;
      };
      c.prototype.decode = function(e) {
        for (var c = this.rangeDec, g = this.outWindow, b = this.pb, a = this.dictSize, l = this.markerIsMandatory, k = this.leftToUnpack, n = this.isMatch, t = this.isRep, u = this.isRepG0, q = this.isRepG1, h = this.isRepG2, r = this.isRep0Long, p = this.lenDecoder, x = this.repLenDecoder, z = this.reps[0], B = this.reps[1], E = this.reps[2], A = this.reps[3], C = this.state;;) {
          if (e && 48 > c.inStream.available) {
            this.outWindow.flush();
            break;
          }
          if (0 === k && !l && (this.outWindow.flush(), c.isFinishedOK())) {
            return d;
          }
          var F = g.totalPos & (1 << b) - 1;
          if (0 === c.decodeBit(n, (C << 4) + F)) {
            if (0 === k) {
              return m;
            }
            g.putByte(this.decodeLiteral(C, z));
            C = 4 > C ? 0 : 10 > C ? C - 3 : C - 6;
            k--;
          } else {
            if (0 !== c.decodeBit(t, C)) {
              if (0 === k || g.isEmpty()) {
                return m;
              }
              if (0 === c.decodeBit(u, C)) {
                if (0 === c.decodeBit(r, (C << 4) + F)) {
                  C = 7 > C ? 9 : 11;
                  g.putByte(g.getByte(z + 1));
                  k--;
                  continue;
                }
              } else {
                var G;
                0 === c.decodeBit(q, C) ? G = B : (0 === c.decodeBit(h, C) ? G = E : (G = A, A = E), E = B);
                B = z;
                z = G;
              }
              F = x.decode(c, F);
              C = 7 > C ? 8 : 11;
            } else {
              A = E;
              E = B;
              B = z;
              F = p.decode(c, F);
              C = 7 > C ? 7 : 10;
              z = this.decodeDistance(F);
              if (-1 === z) {
                return this.outWindow.flush(), c.isFinishedOK() ? v : m;
              }
              if (0 === k || z >= a || !g.checkDistance(z)) {
                return m;
              }
            }
            F += 2;
            G = !1;
            void 0 !== k && k < F && (F = k, G = !0);
            g.copyMatch(z + 1, F);
            k -= F;
            if (G) {
              return m;
            }
          }
        }
        this.state = C;
        this.reps[0] = z;
        this.reps[1] = B;
        this.reps[2] = E;
        this.reps[3] = A;
        this.leftToUnpack = k;
        return f;
      };
      c.prototype.flushOutput = function() {
        this.outWindow.flush();
      };
      return c;
    }(), m = 0, v = 1, d = 2, f = 3, g;
    (function(c) {
      c[c.WAIT_FOR_LZMA_HEADER = 0] = "WAIT_FOR_LZMA_HEADER";
      c[c.WAIT_FOR_SWF_HEADER = 1] = "WAIT_FOR_SWF_HEADER";
      c[c.PROCESS_DATA = 2] = "PROCESS_DATA";
      c[c.CLOSED = 3] = "CLOSED";
      c[c.ERROR = 4] = "ERROR";
    })(g || (g = {}));
    g = function() {
      function c(e) {
        void 0 === e && (e = !1);
        this._state = e ? 1 : 0;
        this.buffer = null;
      }
      c.prototype.push = function(e) {
        if (2 > this._state) {
          var c = this.buffer ? this.buffer.length : 0, g = (1 === this._state ? 17 : 13) + 5;
          if (c + e.length < g) {
            g = new Uint8Array(c + e.length);
            0 < c && g.set(this.buffer);
            g.set(e, c);
            this.buffer = g;
            return;
          }
          var d = new Uint8Array(g);
          0 < c && d.set(this.buffer);
          d.set(e.subarray(0, g - c), c);
          this._inStream = new n;
          this._inStream.append(d.subarray(g - 5));
          this._outStream = new b(function(e) {
            this.onData.call(null, e);
          }.bind(this));
          this._decoder = new q(this._inStream, this._outStream);
          if (1 === this._state) {
            this._decoder.decodeProperties(d.subarray(12, 17)), this._decoder.markerIsMandatory = !1, this._decoder.unpackSize = ((d[4] | d[5] << 8 | d[6] << 16 | d[7] << 24) >>> 0) - 8;
          } else {
            this._decoder.decodeProperties(d.subarray(0, 5));
            for (var c = 0, a = !1, l = 0;8 > l;l++) {
              var k = d[5 + l];
              255 !== k && (a = !0);
              c |= k << 8 * l;
            }
            this._decoder.markerIsMandatory = !a;
            this._decoder.unpackSize = a ? c : void 0;
          }
          this._decoder.create();
          e = e.subarray(g);
          this._state = 2;
        } else {
          if (2 !== this._state) {
            return;
          }
        }
        try {
          this._inStream.append(e);
          var v = this._decoder.decode(!0);
          this._inStream.compact();
          v !== f && this._checkError(v);
        } catch (m) {
          this._decoder.flushOutput(), this._decoder = null, this._error(m);
        }
      };
      c.prototype.close = function() {
        if (2 === this._state) {
          this._state = 3;
          try {
            var e = this._decoder.decode(!1);
            this._checkError(e);
          } catch (c) {
            this._decoder.flushOutput(), this._error(c);
          }
          this._decoder = null;
        }
      };
      c.prototype._error = function(e) {
        this._state = 4;
        if (this.onError) {
          this.onError(e);
        }
      };
      c.prototype._checkError = function(e) {
        var c;
        e === m ? c = "LZMA decoding error" : e === f ? c = "Decoding is not complete" : e === v ? void 0 !== this._decoder.unpackSize && this._decoder.unpackSize !== this._outStream.processed && (c = "Finished with end marker before than specified size") : c = "Internal LZMA Error";
        c && this._error(c);
      };
      return c;
    }();
    h.LzmaDecoder = g;
  })(h.ArrayUtilities || (h.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    function r(b) {
      return "string" === typeof b ? b : void 0 == b ? null : b + "";
    }
    var a = h.Debug.notImplemented, x = h.StringUtilities.utf8decode, n = h.StringUtilities.utf8encode, b = h.NumberUtilities.clamp, l = function() {
      return function(b, a, d) {
        this.buffer = b;
        this.length = a;
        this.littleEndian = d;
      };
    }();
    p.PlainObjectDataBuffer = l;
    for (var u = new Uint32Array(33), k = 1, t = 0;32 >= k;k++) {
      u[k] = t = t << 1 | 1;
    }
    var q;
    (function(b) {
      b[b.U8 = 1] = "U8";
      b[b.I32 = 2] = "I32";
      b[b.F32 = 4] = "F32";
    })(q || (q = {}));
    k = function() {
      function k(b) {
        void 0 === b && (b = k.INITIAL_SIZE);
        this._buffer || (this._buffer = new ArrayBuffer(b), this._position = this._length = 0, this._resetViews(), this._littleEndian = k._nativeLittleEndian, this._bitLength = this._bitBuffer = 0);
      }
      k.FromArrayBuffer = function(b, d) {
        void 0 === d && (d = -1);
        var f = Object.create(k.prototype);
        f._buffer = b;
        f._length = -1 === d ? b.byteLength : d;
        f._position = 0;
        f._resetViews();
        f._littleEndian = k._nativeLittleEndian;
        f._bitBuffer = 0;
        f._bitLength = 0;
        return f;
      };
      k.FromPlainObject = function(b) {
        var d = k.FromArrayBuffer(b.buffer, b.length);
        d._littleEndian = b.littleEndian;
        return d;
      };
      k.prototype.toPlainObject = function() {
        return new l(this._buffer, this._length, this._littleEndian);
      };
      k.prototype.clone = function() {
        var b = k.FromArrayBuffer((new Uint8Array(this._u8)).buffer, this._length);
        b._position = this._position;
        b._littleEndian = this._littleEndian;
        b._bitBuffer = this._bitBuffer;
        b._bitLength = this._bitLength;
        return b;
      };
      k.prototype._resetViews = function() {
        this._u8 = new Uint8Array(this._buffer);
        this._f32 = this._i32 = null;
      };
      k.prototype._requestViews = function(b) {
        0 === (this._buffer.byteLength & 3) && (null === this._i32 && b & 2 && (this._i32 = new Int32Array(this._buffer)), null === this._f32 && b & 4 && (this._f32 = new Float32Array(this._buffer)));
      };
      k.prototype.getBytes = function() {
        return new Uint8Array(this._buffer, 0, this._length);
      };
      k.prototype._ensureCapacity = function(b) {
        var d = this._buffer;
        if (!(d.byteLength >= b)) {
          for (var f = Math.max(d.byteLength, 1);f < b;) {
            f *= 2;
          }
          4294967295 < f && this.sec.throwError("RangeError", Errors.ParamRangeError);
          f = k._arrayBufferPool.acquire(f);
          b = this._u8;
          this._buffer = f;
          this._resetViews();
          this._u8.set(b);
          f = this._u8;
          for (b = b.length;b < f.length;b++) {
            f[b] = 0;
          }
          k._arrayBufferPool.release(d);
        }
      };
      k.prototype.clear = function() {
        this._position = this._length = 0;
      };
      k.prototype.readBoolean = function() {
        return 0 !== this.readUnsignedByte();
      };
      k.prototype.readByte = function() {
        return this.readUnsignedByte() << 24 >> 24;
      };
      k.prototype.readUnsignedByte = function() {
        this._position + 1 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        return this._u8[this._position++];
      };
      k.prototype.readBytes = function(b, d, f) {
        var g = this._position;
        d >>>= 0;
        f >>>= 0;
        0 === f && (f = this._length - g);
        g + f > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        b.length < d + f && (b._ensureCapacity(d + f), b.length = d + f);
        b._u8.set(new Uint8Array(this._buffer, g, f), d);
        this._position += f;
      };
      k.prototype.readShort = function() {
        return this.readUnsignedShort() << 16 >> 16;
      };
      k.prototype.readUnsignedShort = function() {
        var b = this._u8, d = this._position;
        d + 2 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var f = b[d + 0], b = b[d + 1];
        this._position = d + 2;
        return this._littleEndian ? b << 8 | f : f << 8 | b;
      };
      k.prototype.readInt = function() {
        var b = this._u8, d = this._position;
        d + 4 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var f = b[d + 0], g = b[d + 1], c = b[d + 2], b = b[d + 3];
        this._position = d + 4;
        return this._littleEndian ? b << 24 | c << 16 | g << 8 | f : f << 24 | g << 16 | c << 8 | b;
      };
      k.prototype.readUnsignedInt = function() {
        return this.readInt() >>> 0;
      };
      k.prototype.readFloat = function() {
        var b = this._position;
        b + 4 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        this._position = b + 4;
        this._requestViews(4);
        if (this._littleEndian && 0 === (b & 3) && this._f32) {
          return this._f32[b >> 2];
        }
        var d = this._u8, f = h.IntegerUtilities.u8;
        this._littleEndian ? (f[0] = d[b + 0], f[1] = d[b + 1], f[2] = d[b + 2], f[3] = d[b + 3]) : (f[3] = d[b + 0], f[2] = d[b + 1], f[1] = d[b + 2], f[0] = d[b + 3]);
        return h.IntegerUtilities.f32[0];
      };
      k.prototype.readDouble = function() {
        var b = this._u8, d = this._position;
        d + 8 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var f = h.IntegerUtilities.u8;
        this._littleEndian ? (f[0] = b[d + 0], f[1] = b[d + 1], f[2] = b[d + 2], f[3] = b[d + 3], f[4] = b[d + 4], f[5] = b[d + 5], f[6] = b[d + 6], f[7] = b[d + 7]) : (f[0] = b[d + 7], f[1] = b[d + 6], f[2] = b[d + 5], f[3] = b[d + 4], f[4] = b[d + 3], f[5] = b[d + 2], f[6] = b[d + 1], f[7] = b[d + 0]);
        this._position = d + 8;
        return h.IntegerUtilities.f64[0];
      };
      k.prototype.writeBoolean = function(b) {
        this.writeByte(b ? 1 : 0);
      };
      k.prototype.writeByte = function(b) {
        var d = this._position + 1;
        this._ensureCapacity(d);
        this._u8[this._position++] = b;
        d > this._length && (this._length = d);
      };
      k.prototype.writeUnsignedByte = function(b) {
        var d = this._position + 1;
        this._ensureCapacity(d);
        this._u8[this._position++] = b;
        d > this._length && (this._length = d);
      };
      k.prototype.writeRawBytes = function(b) {
        var d = this._position + b.length;
        this._ensureCapacity(d);
        this._u8.set(b, this._position);
        this._position = d;
        d > this._length && (this._length = d);
      };
      k.prototype.writeBytes = function(a, d, f) {
        h.isNullOrUndefined(a) && this.sec.throwError("TypeError", Errors.NullPointerError, "bytes");
        d >>>= 0;
        f >>>= 0;
        2 > arguments.length && (d = 0);
        3 > arguments.length && (f = 0);
        d === b(d, 0, a.length) && d + f === b(d + f, 0, a.length) || this.sec.throwError("RangeError", Errors.ParamRangeError);
        0 === f && (f = a.length - d);
        this.writeRawBytes(new Int8Array(a._buffer, d, f));
      };
      k.prototype.writeShort = function(b) {
        this.writeUnsignedShort(b);
      };
      k.prototype.writeUnsignedShort = function(b) {
        var d = this._position;
        this._ensureCapacity(d + 2);
        var f = this._u8;
        this._littleEndian ? (f[d + 0] = b, f[d + 1] = b >> 8) : (f[d + 0] = b >> 8, f[d + 1] = b);
        this._position = d += 2;
        d > this._length && (this._length = d);
      };
      k.prototype.writeInt = function(b) {
        this.writeUnsignedInt(b);
      };
      k.prototype.write2Ints = function(b, d) {
        this.write2UnsignedInts(b, d);
      };
      k.prototype.write4Ints = function(b, d, f, g) {
        this.write4UnsignedInts(b, d, f, g);
      };
      k.prototype.writeUnsignedInt = function(b) {
        var d = this._position;
        this._ensureCapacity(d + 4);
        this._requestViews(2);
        if (this._littleEndian === k._nativeLittleEndian && 0 === (d & 3) && this._i32) {
          this._i32[d >> 2] = b;
        } else {
          var f = this._u8;
          this._littleEndian ? (f[d + 0] = b, f[d + 1] = b >> 8, f[d + 2] = b >> 16, f[d + 3] = b >> 24) : (f[d + 0] = b >> 24, f[d + 1] = b >> 16, f[d + 2] = b >> 8, f[d + 3] = b);
        }
        this._position = d += 4;
        d > this._length && (this._length = d);
      };
      k.prototype.write2UnsignedInts = function(b, d) {
        var f = this._position;
        this._ensureCapacity(f + 8);
        this._requestViews(2);
        this._littleEndian === k._nativeLittleEndian && 0 === (f & 3) && this._i32 ? (this._i32[(f >> 2) + 0] = b, this._i32[(f >> 2) + 1] = d, this._position = f += 8, f > this._length && (this._length = f)) : (this.writeUnsignedInt(b), this.writeUnsignedInt(d));
      };
      k.prototype.write4UnsignedInts = function(b, d, f, g) {
        var c = this._position;
        this._ensureCapacity(c + 16);
        this._requestViews(2);
        this._littleEndian === k._nativeLittleEndian && 0 === (c & 3) && this._i32 ? (this._i32[(c >> 2) + 0] = b, this._i32[(c >> 2) + 1] = d, this._i32[(c >> 2) + 2] = f, this._i32[(c >> 2) + 3] = g, this._position = c += 16, c > this._length && (this._length = c)) : (this.writeUnsignedInt(b), this.writeUnsignedInt(d), this.writeUnsignedInt(f), this.writeUnsignedInt(g));
      };
      k.prototype.writeFloat = function(b) {
        var d = this._position;
        this._ensureCapacity(d + 4);
        this._requestViews(4);
        if (this._littleEndian === k._nativeLittleEndian && 0 === (d & 3) && this._f32) {
          this._f32[d >> 2] = b;
        } else {
          var f = this._u8;
          h.IntegerUtilities.f32[0] = b;
          b = h.IntegerUtilities.u8;
          this._littleEndian ? (f[d + 0] = b[0], f[d + 1] = b[1], f[d + 2] = b[2], f[d + 3] = b[3]) : (f[d + 0] = b[3], f[d + 1] = b[2], f[d + 2] = b[1], f[d + 3] = b[0]);
        }
        this._position = d += 4;
        d > this._length && (this._length = d);
      };
      k.prototype.write6Floats = function(b, d, f, g, c, e) {
        var a = this._position;
        this._ensureCapacity(a + 24);
        this._requestViews(4);
        this._littleEndian === k._nativeLittleEndian && 0 === (a & 3) && this._f32 ? (this._f32[(a >> 2) + 0] = b, this._f32[(a >> 2) + 1] = d, this._f32[(a >> 2) + 2] = f, this._f32[(a >> 2) + 3] = g, this._f32[(a >> 2) + 4] = c, this._f32[(a >> 2) + 5] = e, this._position = a += 24, a > this._length && (this._length = a)) : (this.writeFloat(b), this.writeFloat(d), this.writeFloat(f), this.writeFloat(g), this.writeFloat(c), this.writeFloat(e));
      };
      k.prototype.writeDouble = function(b) {
        var d = this._position;
        this._ensureCapacity(d + 8);
        var f = this._u8;
        h.IntegerUtilities.f64[0] = b;
        b = h.IntegerUtilities.u8;
        this._littleEndian ? (f[d + 0] = b[0], f[d + 1] = b[1], f[d + 2] = b[2], f[d + 3] = b[3], f[d + 4] = b[4], f[d + 5] = b[5], f[d + 6] = b[6], f[d + 7] = b[7]) : (f[d + 0] = b[7], f[d + 1] = b[6], f[d + 2] = b[5], f[d + 3] = b[4], f[d + 4] = b[3], f[d + 5] = b[2], f[d + 6] = b[1], f[d + 7] = b[0]);
        this._position = d += 8;
        d > this._length && (this._length = d);
      };
      k.prototype.readRawBytes = function() {
        return new Int8Array(this._buffer, 0, this._length);
      };
      k.prototype.writeUTF = function(b) {
        b = r(b);
        b = x(b);
        this.writeShort(b.length);
        this.writeRawBytes(b);
      };
      k.prototype.writeUTFBytes = function(b) {
        b = r(b);
        b = x(b);
        this.writeRawBytes(b);
      };
      k.prototype.readUTF = function() {
        return this.readUTFBytes(this.readShort());
      };
      k.prototype.readUTFBytes = function(b) {
        b >>>= 0;
        var d = this._position;
        d + b > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        this._position += b;
        return n(new Int8Array(this._buffer, d, b));
      };
      Object.defineProperty(k.prototype, "length", {get:function() {
        return this._length;
      }, set:function(a) {
        a >>>= 0;
        a > this._buffer.byteLength && this._ensureCapacity(a);
        this._length = a;
        this._position = b(this._position, 0, this._length);
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(k.prototype, "bytesAvailable", {get:function() {
        return this._length - this._position;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(k.prototype, "position", {get:function() {
        return this._position;
      }, set:function(b) {
        this._position = b >>> 0;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(k.prototype, "buffer", {get:function() {
        return this._buffer;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(k.prototype, "bytes", {get:function() {
        return this._u8;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(k.prototype, "ints", {get:function() {
        this._requestViews(2);
        return this._i32;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(k.prototype, "objectEncoding", {get:function() {
        return this._objectEncoding;
      }, set:function(b) {
        this._objectEncoding = b >>> 0;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(k.prototype, "endian", {get:function() {
        return this._littleEndian ? "littleEndian" : "bigEndian";
      }, set:function(b) {
        b = r(b);
        this._littleEndian = "auto" === b ? k._nativeLittleEndian : "littleEndian" === b;
      }, enumerable:!0, configurable:!0});
      k.prototype.toString = function() {
        return n(new Int8Array(this._buffer, 0, this._length));
      };
      k.prototype.toBlob = function(b) {
        return new Blob([new Int8Array(this._buffer, this._position, this._length)], {type:b});
      };
      k.prototype.writeMultiByte = function(b, d) {
        r(b);
        r(d);
        a("packageInternal flash.utils.ObjectOutput::writeMultiByte");
      };
      k.prototype.readMultiByte = function(b, d) {
        r(d);
        a("packageInternal flash.utils.ObjectInput::readMultiByte");
      };
      k.prototype.getValue = function(b) {
        b |= 0;
        return b >= this._length ? void 0 : this._u8[b];
      };
      k.prototype.setValue = function(b, d) {
        b |= 0;
        var f = b + 1;
        this._ensureCapacity(f);
        this._u8[b] = d;
        f > this._length && (this._length = f);
      };
      k.prototype.readFixed = function() {
        return this.readInt() / 65536;
      };
      k.prototype.readFixed8 = function() {
        return this.readShort() / 256;
      };
      k.prototype.readFloat16 = function() {
        var b = this.readUnsignedShort(), d = b >> 15 ? -1 : 1, f = (b & 31744) >> 10, b = b & 1023;
        return f ? 31 === f ? b ? NaN : Infinity * d : d * Math.pow(2, f - 15) * (1 + b / 1024) : d * Math.pow(2, -14) * (b / 1024);
      };
      k.prototype.readEncodedU32 = function() {
        var b = this.readUnsignedByte();
        if (!(b & 128)) {
          return b;
        }
        b = b & 127 | this.readUnsignedByte() << 7;
        if (!(b & 16384)) {
          return b;
        }
        b = b & 16383 | this.readUnsignedByte() << 14;
        if (!(b & 2097152)) {
          return b;
        }
        b = b & 2097151 | this.readUnsignedByte() << 21;
        return b & 268435456 ? b & 268435455 | this.readUnsignedByte() << 28 : b;
      };
      k.prototype.readBits = function(b) {
        return this.readUnsignedBits(b) << 32 - b >> 32 - b;
      };
      k.prototype.readUnsignedBits = function(b) {
        for (var d = this._bitBuffer, f = this._bitLength;b > f;) {
          d = d << 8 | this.readUnsignedByte(), f += 8;
        }
        f -= b;
        b = d >>> f & u[b];
        this._bitBuffer = d;
        this._bitLength = f;
        return b;
      };
      k.prototype.readFixedBits = function(b) {
        return this.readBits(b) / 65536;
      };
      k.prototype.readString = function(b) {
        var d = this._position;
        if (b) {
          d + b > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError), this._position += b;
        } else {
          b = 0;
          for (var f = d;f < this._length && this._u8[f];f++) {
            b++;
          }
          this._position += b + 1;
        }
        return n(new Int8Array(this._buffer, d, b));
      };
      k.prototype.align = function() {
        this._bitLength = this._bitBuffer = 0;
      };
      k.prototype.deflate = function() {
        this.compress("deflate");
      };
      k.prototype.inflate = function() {
        this.uncompress("deflate");
      };
      k.prototype.compress = function(b) {
        b = 0 === arguments.length ? "zlib" : r(b);
        var d;
        switch(b) {
          case "zlib":
            d = new p.Deflate(!0);
            break;
          case "deflate":
            d = new p.Deflate(!1);
            break;
          default:
            return;
        }
        var f = new k;
        d.onData = f.writeRawBytes.bind(f);
        d.push(this._u8.subarray(0, this._length));
        d.close();
        this._ensureCapacity(f._u8.length);
        this._u8.set(f._u8);
        this.length = f.length;
        this._position = 0;
      };
      k.prototype.uncompress = function(b) {
        b = 0 === arguments.length ? "zlib" : r(b);
        var d;
        switch(b) {
          case "zlib":
            d = p.Inflate.create(!0);
            break;
          case "deflate":
            d = p.Inflate.create(!1);
            break;
          case "lzma":
            d = new p.LzmaDecoder(!1);
            break;
          default:
            return;
        }
        var f = new k, g;
        d.onData = f.writeRawBytes.bind(f);
        d.onError = function(c) {
          return g = c;
        };
        d.push(this._u8.subarray(0, this._length));
        g && this.sec.throwError("IOError", Errors.CompressedDataError);
        d.close();
        this._ensureCapacity(f._u8.length);
        this._u8.set(f._u8);
        this.length = f.length;
        this._position = 0;
      };
      k._nativeLittleEndian = 1 === (new Int8Array((new Int32Array([1])).buffer))[0];
      k.INITIAL_SIZE = 128;
      k._arrayBufferPool = new h.ArrayBufferPool;
      return k;
    }();
    p.DataBuffer = k;
  })(h.ArrayUtilities || (h.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  var p = h.ArrayUtilities.DataBuffer, r = h.ArrayUtilities.ensureTypedArrayCapacity;
  (function(a) {
    a[a.BeginSolidFill = 1] = "BeginSolidFill";
    a[a.BeginGradientFill = 2] = "BeginGradientFill";
    a[a.BeginBitmapFill = 3] = "BeginBitmapFill";
    a[a.EndFill = 4] = "EndFill";
    a[a.LineStyleSolid = 5] = "LineStyleSolid";
    a[a.LineStyleGradient = 6] = "LineStyleGradient";
    a[a.LineStyleBitmap = 7] = "LineStyleBitmap";
    a[a.LineEnd = 8] = "LineEnd";
    a[a.MoveTo = 9] = "MoveTo";
    a[a.LineTo = 10] = "LineTo";
    a[a.CurveTo = 11] = "CurveTo";
    a[a.CubicCurveTo = 12] = "CubicCurveTo";
  })(h.PathCommand || (h.PathCommand = {}));
  (function(a) {
    a[a.Linear = 16] = "Linear";
    a[a.Radial = 18] = "Radial";
  })(h.GradientType || (h.GradientType = {}));
  (function(a) {
    a[a.Pad = 0] = "Pad";
    a[a.Reflect = 1] = "Reflect";
    a[a.Repeat = 2] = "Repeat";
  })(h.GradientSpreadMethod || (h.GradientSpreadMethod = {}));
  (function(a) {
    a[a.RGB = 0] = "RGB";
    a[a.LinearRGB = 1] = "LinearRGB";
  })(h.GradientInterpolationMethod || (h.GradientInterpolationMethod = {}));
  (function(a) {
    a[a.None = 0] = "None";
    a[a.Normal = 1] = "Normal";
    a[a.Vertical = 2] = "Vertical";
    a[a.Horizontal = 3] = "Horizontal";
  })(h.LineScaleMode || (h.LineScaleMode = {}));
  var a = function() {
    return function(a, b, l, u, k, t, q, m, v, d, f) {
      this.commands = a;
      this.commandsPosition = b;
      this.coordinates = l;
      this.morphCoordinates = u;
      this.coordinatesPosition = k;
      this.styles = t;
      this.stylesLength = q;
      this.morphStyles = m;
      this.morphStylesLength = v;
      this.hasFills = d;
      this.hasLines = f;
    };
  }();
  h.PlainObjectShapeData = a;
  var x;
  (function(a) {
    a[a.Commands = 32] = "Commands";
    a[a.Coordinates = 128] = "Coordinates";
    a[a.Styles = 16] = "Styles";
  })(x || (x = {}));
  x = function() {
    function n(b) {
      void 0 === b && (b = !0);
      b && this.clear();
    }
    n.FromPlainObject = function(b) {
      var a = new n(!1);
      a.commands = b.commands;
      a.coordinates = b.coordinates;
      a.morphCoordinates = b.morphCoordinates;
      a.commandsPosition = b.commandsPosition;
      a.coordinatesPosition = b.coordinatesPosition;
      a.styles = p.FromArrayBuffer(b.styles, b.stylesLength);
      a.styles.endian = "auto";
      b.morphStyles && (a.morphStyles = p.FromArrayBuffer(b.morphStyles, b.morphStylesLength), a.morphStyles.endian = "auto");
      a.hasFills = b.hasFills;
      a.hasLines = b.hasLines;
      return a;
    };
    n.prototype.moveTo = function(b, a) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = 9;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = a;
    };
    n.prototype.lineTo = function(b, a) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = 10;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = a;
    };
    n.prototype.curveTo = function(b, a, u, k) {
      this.ensurePathCapacities(1, 4);
      this.commands[this.commandsPosition++] = 11;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = u;
      this.coordinates[this.coordinatesPosition++] = k;
    };
    n.prototype.cubicCurveTo = function(b, a, u, k, t, q) {
      this.ensurePathCapacities(1, 6);
      this.commands[this.commandsPosition++] = 12;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = u;
      this.coordinates[this.coordinatesPosition++] = k;
      this.coordinates[this.coordinatesPosition++] = t;
      this.coordinates[this.coordinatesPosition++] = q;
    };
    n.prototype.beginFill = function(b) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 1;
      this.styles.writeUnsignedInt(b);
      this.hasFills = !0;
    };
    n.prototype.writeMorphFill = function(b) {
      this.morphStyles.writeUnsignedInt(b);
    };
    n.prototype.endFill = function() {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 4;
    };
    n.prototype.endLine = function() {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 8;
    };
    n.prototype.lineStyle = function(b, a, u, k, t, q, m) {
      this.ensurePathCapacities(2, 0);
      this.commands[this.commandsPosition++] = 5;
      this.coordinates[this.coordinatesPosition++] = b;
      b = this.styles;
      b.writeUnsignedInt(a);
      b.writeBoolean(u);
      b.writeUnsignedByte(k);
      b.writeUnsignedByte(t);
      b.writeUnsignedByte(q);
      b.writeUnsignedByte(m);
      this.hasLines = !0;
    };
    n.prototype.writeMorphLineStyle = function(b, a) {
      this.morphCoordinates[this.coordinatesPosition - 1] = b;
      this.morphStyles.writeUnsignedInt(a);
    };
    n.prototype.beginBitmap = function(b, a, u, k, t) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = b;
      b = this.styles;
      b.writeUnsignedInt(a);
      this._writeStyleMatrix(u, !1);
      b.writeBoolean(k);
      b.writeBoolean(t);
      this.hasFills = !0;
    };
    n.prototype.writeMorphBitmap = function(b) {
      this._writeStyleMatrix(b, !0);
    };
    n.prototype.beginGradient = function(b, a, u, k, t, q, m, n) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = b;
      b = this.styles;
      b.writeUnsignedByte(k);
      b.writeShort(n);
      this._writeStyleMatrix(t, !1);
      k = a.length;
      b.writeByte(k);
      for (t = 0;t < k;t++) {
        b.writeUnsignedByte(u[t]), b.writeUnsignedInt(a[t]);
      }
      b.writeUnsignedByte(q);
      b.writeUnsignedByte(m);
      this.hasFills = !0;
    };
    n.prototype.writeMorphGradient = function(b, a, u) {
      this._writeStyleMatrix(u, !0);
      u = this.morphStyles;
      for (var k = 0;k < b.length;k++) {
        u.writeUnsignedByte(a[k]), u.writeUnsignedInt(b[k]);
      }
    };
    n.prototype.writeCommandAndCoordinates = function(b, a, u) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = u;
    };
    n.prototype.writeCoordinates = function(b, a) {
      this.ensurePathCapacities(0, 2);
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = a;
    };
    n.prototype.writeMorphCoordinates = function(b, a) {
      this.morphCoordinates = r(this.morphCoordinates, this.coordinatesPosition);
      this.morphCoordinates[this.coordinatesPosition - 2] = b;
      this.morphCoordinates[this.coordinatesPosition - 1] = a;
    };
    n.prototype.clear = function() {
      this.commandsPosition = this.coordinatesPosition = 0;
      this.commands = new Uint8Array(32);
      this.coordinates = new Int32Array(128);
      this.styles = new p(16);
      this.styles.endian = "auto";
      this.hasFills = this.hasLines = !1;
    };
    n.prototype.isEmpty = function() {
      return 0 === this.commandsPosition;
    };
    n.prototype.clone = function() {
      var b = new n(!1);
      b.commands = new Uint8Array(this.commands);
      b.commandsPosition = this.commandsPosition;
      b.coordinates = new Int32Array(this.coordinates);
      b.coordinatesPosition = this.coordinatesPosition;
      b.styles = new p(this.styles.length);
      b.styles.writeRawBytes(this.styles.bytes.subarray(0, this.styles.length));
      this.morphStyles && (b.morphStyles = new p(this.morphStyles.length), b.morphStyles.writeRawBytes(this.morphStyles.bytes.subarray(0, this.morphStyles.length)));
      b.hasFills = this.hasFills;
      b.hasLines = this.hasLines;
      return b;
    };
    n.prototype.toPlainObject = function() {
      return new a(this.commands, this.commandsPosition, this.coordinates, this.morphCoordinates, this.coordinatesPosition, this.styles.buffer, this.styles.length, this.morphStyles && this.morphStyles.buffer, this.morphStyles ? this.morphStyles.length : 0, this.hasFills, this.hasLines);
    };
    Object.defineProperty(n.prototype, "buffers", {get:function() {
      var b = [this.commands.buffer, this.coordinates.buffer, this.styles.buffer];
      this.morphCoordinates && b.push(this.morphCoordinates.buffer);
      this.morphStyles && b.push(this.morphStyles.buffer);
      return b;
    }, enumerable:!0, configurable:!0});
    n.prototype._writeStyleMatrix = function(b, a) {
      (a ? this.morphStyles : this.styles).write6Floats(b.a, b.b, b.c, b.d, b.tx, b.ty);
    };
    n.prototype.ensurePathCapacities = function(b, a) {
      this.commands = r(this.commands, this.commandsPosition + b);
      this.coordinates = r(this.coordinates, this.coordinatesPosition + a);
    };
    return n;
  }();
  h.ShapeData = x;
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(h) {
      (function(a) {
        a[a.CODE_END = 0] = "CODE_END";
        a[a.CODE_SHOW_FRAME = 1] = "CODE_SHOW_FRAME";
        a[a.CODE_DEFINE_SHAPE = 2] = "CODE_DEFINE_SHAPE";
        a[a.CODE_FREE_CHARACTER = 3] = "CODE_FREE_CHARACTER";
        a[a.CODE_PLACE_OBJECT = 4] = "CODE_PLACE_OBJECT";
        a[a.CODE_REMOVE_OBJECT = 5] = "CODE_REMOVE_OBJECT";
        a[a.CODE_DEFINE_BITS = 6] = "CODE_DEFINE_BITS";
        a[a.CODE_DEFINE_BUTTON = 7] = "CODE_DEFINE_BUTTON";
        a[a.CODE_JPEG_TABLES = 8] = "CODE_JPEG_TABLES";
        a[a.CODE_SET_BACKGROUND_COLOR = 9] = "CODE_SET_BACKGROUND_COLOR";
        a[a.CODE_DEFINE_FONT = 10] = "CODE_DEFINE_FONT";
        a[a.CODE_DEFINE_TEXT = 11] = "CODE_DEFINE_TEXT";
        a[a.CODE_DO_ACTION = 12] = "CODE_DO_ACTION";
        a[a.CODE_DEFINE_FONT_INFO = 13] = "CODE_DEFINE_FONT_INFO";
        a[a.CODE_DEFINE_SOUND = 14] = "CODE_DEFINE_SOUND";
        a[a.CODE_START_SOUND = 15] = "CODE_START_SOUND";
        a[a.CODE_STOP_SOUND = 16] = "CODE_STOP_SOUND";
        a[a.CODE_DEFINE_BUTTON_SOUND = 17] = "CODE_DEFINE_BUTTON_SOUND";
        a[a.CODE_SOUND_STREAM_HEAD = 18] = "CODE_SOUND_STREAM_HEAD";
        a[a.CODE_SOUND_STREAM_BLOCK = 19] = "CODE_SOUND_STREAM_BLOCK";
        a[a.CODE_DEFINE_BITS_LOSSLESS = 20] = "CODE_DEFINE_BITS_LOSSLESS";
        a[a.CODE_DEFINE_BITS_JPEG2 = 21] = "CODE_DEFINE_BITS_JPEG2";
        a[a.CODE_DEFINE_SHAPE2 = 22] = "CODE_DEFINE_SHAPE2";
        a[a.CODE_DEFINE_BUTTON_CXFORM = 23] = "CODE_DEFINE_BUTTON_CXFORM";
        a[a.CODE_PROTECT = 24] = "CODE_PROTECT";
        a[a.CODE_PATHS_ARE_POSTSCRIPT = 25] = "CODE_PATHS_ARE_POSTSCRIPT";
        a[a.CODE_PLACE_OBJECT2 = 26] = "CODE_PLACE_OBJECT2";
        a[a.CODE_REMOVE_OBJECT2 = 28] = "CODE_REMOVE_OBJECT2";
        a[a.CODE_SYNC_FRAME = 29] = "CODE_SYNC_FRAME";
        a[a.CODE_FREE_ALL = 31] = "CODE_FREE_ALL";
        a[a.CODE_DEFINE_SHAPE3 = 32] = "CODE_DEFINE_SHAPE3";
        a[a.CODE_DEFINE_TEXT2 = 33] = "CODE_DEFINE_TEXT2";
        a[a.CODE_DEFINE_BUTTON2 = 34] = "CODE_DEFINE_BUTTON2";
        a[a.CODE_DEFINE_BITS_JPEG3 = 35] = "CODE_DEFINE_BITS_JPEG3";
        a[a.CODE_DEFINE_BITS_LOSSLESS2 = 36] = "CODE_DEFINE_BITS_LOSSLESS2";
        a[a.CODE_DEFINE_EDIT_TEXT = 37] = "CODE_DEFINE_EDIT_TEXT";
        a[a.CODE_DEFINE_VIDEO = 38] = "CODE_DEFINE_VIDEO";
        a[a.CODE_DEFINE_SPRITE = 39] = "CODE_DEFINE_SPRITE";
        a[a.CODE_NAME_CHARACTER = 40] = "CODE_NAME_CHARACTER";
        a[a.CODE_PRODUCT_INFO = 41] = "CODE_PRODUCT_INFO";
        a[a.CODE_DEFINE_TEXT_FORMAT = 42] = "CODE_DEFINE_TEXT_FORMAT";
        a[a.CODE_FRAME_LABEL = 43] = "CODE_FRAME_LABEL";
        a[a.CODE_DEFINE_BEHAVIOUR = 44] = "CODE_DEFINE_BEHAVIOUR";
        a[a.CODE_SOUND_STREAM_HEAD2 = 45] = "CODE_SOUND_STREAM_HEAD2";
        a[a.CODE_DEFINE_MORPH_SHAPE = 46] = "CODE_DEFINE_MORPH_SHAPE";
        a[a.CODE_GENERATE_FRAME = 47] = "CODE_GENERATE_FRAME";
        a[a.CODE_DEFINE_FONT2 = 48] = "CODE_DEFINE_FONT2";
        a[a.CODE_GEN_COMMAND = 49] = "CODE_GEN_COMMAND";
        a[a.CODE_DEFINE_COMMAND_OBJECT = 50] = "CODE_DEFINE_COMMAND_OBJECT";
        a[a.CODE_CHARACTER_SET = 51] = "CODE_CHARACTER_SET";
        a[a.CODE_EXTERNAL_FONT = 52] = "CODE_EXTERNAL_FONT";
        a[a.CODE_DEFINE_FUNCTION = 53] = "CODE_DEFINE_FUNCTION";
        a[a.CODE_PLACE_FUNCTION = 54] = "CODE_PLACE_FUNCTION";
        a[a.CODE_GEN_TAG_OBJECTS = 55] = "CODE_GEN_TAG_OBJECTS";
        a[a.CODE_EXPORT_ASSETS = 56] = "CODE_EXPORT_ASSETS";
        a[a.CODE_IMPORT_ASSETS = 57] = "CODE_IMPORT_ASSETS";
        a[a.CODE_ENABLE_DEBUGGER = 58] = "CODE_ENABLE_DEBUGGER";
        a[a.CODE_DO_INIT_ACTION = 59] = "CODE_DO_INIT_ACTION";
        a[a.CODE_DEFINE_VIDEO_STREAM = 60] = "CODE_DEFINE_VIDEO_STREAM";
        a[a.CODE_VIDEO_FRAME = 61] = "CODE_VIDEO_FRAME";
        a[a.CODE_DEFINE_FONT_INFO2 = 62] = "CODE_DEFINE_FONT_INFO2";
        a[a.CODE_DEBUG_ID = 63] = "CODE_DEBUG_ID";
        a[a.CODE_ENABLE_DEBUGGER2 = 64] = "CODE_ENABLE_DEBUGGER2";
        a[a.CODE_SCRIPT_LIMITS = 65] = "CODE_SCRIPT_LIMITS";
        a[a.CODE_SET_TAB_INDEX = 66] = "CODE_SET_TAB_INDEX";
        a[a.CODE_FILE_ATTRIBUTES = 69] = "CODE_FILE_ATTRIBUTES";
        a[a.CODE_PLACE_OBJECT3 = 70] = "CODE_PLACE_OBJECT3";
        a[a.CODE_IMPORT_ASSETS2 = 71] = "CODE_IMPORT_ASSETS2";
        a[a.CODE_DO_ABC_DEFINE = 72] = "CODE_DO_ABC_DEFINE";
        a[a.CODE_DEFINE_FONT_ALIGN_ZONES = 73] = "CODE_DEFINE_FONT_ALIGN_ZONES";
        a[a.CODE_CSM_TEXT_SETTINGS = 74] = "CODE_CSM_TEXT_SETTINGS";
        a[a.CODE_DEFINE_FONT3 = 75] = "CODE_DEFINE_FONT3";
        a[a.CODE_SYMBOL_CLASS = 76] = "CODE_SYMBOL_CLASS";
        a[a.CODE_METADATA = 77] = "CODE_METADATA";
        a[a.CODE_DEFINE_SCALING_GRID = 78] = "CODE_DEFINE_SCALING_GRID";
        a[a.CODE_DO_ABC = 82] = "CODE_DO_ABC";
        a[a.CODE_DEFINE_SHAPE4 = 83] = "CODE_DEFINE_SHAPE4";
        a[a.CODE_DEFINE_MORPH_SHAPE2 = 84] = "CODE_DEFINE_MORPH_SHAPE2";
        a[a.CODE_DEFINE_SCENE_AND_FRAME_LABEL_DATA = 86] = "CODE_DEFINE_SCENE_AND_FRAME_LABEL_DATA";
        a[a.CODE_DEFINE_BINARY_DATA = 87] = "CODE_DEFINE_BINARY_DATA";
        a[a.CODE_DEFINE_FONT_NAME = 88] = "CODE_DEFINE_FONT_NAME";
        a[a.CODE_START_SOUND2 = 89] = "CODE_START_SOUND2";
        a[a.CODE_DEFINE_BITS_JPEG4 = 90] = "CODE_DEFINE_BITS_JPEG4";
        a[a.CODE_DEFINE_FONT4 = 91] = "CODE_DEFINE_FONT4";
        a[a.CODE_TELEMETRY = 93] = "CODE_TELEMETRY";
      })(h.SwfTagCode || (h.SwfTagCode = {}));
      (function(a) {
        a[a.CODE_DEFINE_SHAPE = 2] = "CODE_DEFINE_SHAPE";
        a[a.CODE_DEFINE_BITS = 6] = "CODE_DEFINE_BITS";
        a[a.CODE_DEFINE_BUTTON = 7] = "CODE_DEFINE_BUTTON";
        a[a.CODE_DEFINE_FONT = 10] = "CODE_DEFINE_FONT";
        a[a.CODE_DEFINE_TEXT = 11] = "CODE_DEFINE_TEXT";
        a[a.CODE_DEFINE_SOUND = 14] = "CODE_DEFINE_SOUND";
        a[a.CODE_DEFINE_BITS_LOSSLESS = 20] = "CODE_DEFINE_BITS_LOSSLESS";
        a[a.CODE_DEFINE_BITS_JPEG2 = 21] = "CODE_DEFINE_BITS_JPEG2";
        a[a.CODE_DEFINE_SHAPE2 = 22] = "CODE_DEFINE_SHAPE2";
        a[a.CODE_DEFINE_SHAPE3 = 32] = "CODE_DEFINE_SHAPE3";
        a[a.CODE_DEFINE_TEXT2 = 33] = "CODE_DEFINE_TEXT2";
        a[a.CODE_DEFINE_BUTTON2 = 34] = "CODE_DEFINE_BUTTON2";
        a[a.CODE_DEFINE_BITS_JPEG3 = 35] = "CODE_DEFINE_BITS_JPEG3";
        a[a.CODE_DEFINE_BITS_LOSSLESS2 = 36] = "CODE_DEFINE_BITS_LOSSLESS2";
        a[a.CODE_DEFINE_EDIT_TEXT = 37] = "CODE_DEFINE_EDIT_TEXT";
        a[a.CODE_DEFINE_SPRITE = 39] = "CODE_DEFINE_SPRITE";
        a[a.CODE_DEFINE_MORPH_SHAPE = 46] = "CODE_DEFINE_MORPH_SHAPE";
        a[a.CODE_DEFINE_FONT2 = 48] = "CODE_DEFINE_FONT2";
        a[a.CODE_DEFINE_VIDEO_STREAM = 60] = "CODE_DEFINE_VIDEO_STREAM";
        a[a.CODE_DEFINE_FONT3 = 75] = "CODE_DEFINE_FONT3";
        a[a.CODE_DEFINE_SHAPE4 = 83] = "CODE_DEFINE_SHAPE4";
        a[a.CODE_DEFINE_MORPH_SHAPE2 = 84] = "CODE_DEFINE_MORPH_SHAPE2";
        a[a.CODE_DEFINE_BINARY_DATA = 87] = "CODE_DEFINE_BINARY_DATA";
        a[a.CODE_DEFINE_BITS_JPEG4 = 90] = "CODE_DEFINE_BITS_JPEG4";
        a[a.CODE_DEFINE_FONT4 = 91] = "CODE_DEFINE_FONT4";
      })(h.DefinitionTags || (h.DefinitionTags = {}));
      (function(a) {
        a[a.CODE_DEFINE_BITS = 6] = "CODE_DEFINE_BITS";
        a[a.CODE_DEFINE_BITS_JPEG2 = 21] = "CODE_DEFINE_BITS_JPEG2";
        a[a.CODE_DEFINE_BITS_JPEG3 = 35] = "CODE_DEFINE_BITS_JPEG3";
        a[a.CODE_DEFINE_BITS_JPEG4 = 90] = "CODE_DEFINE_BITS_JPEG4";
      })(h.ImageDefinitionTags || (h.ImageDefinitionTags = {}));
      (function(a) {
        a[a.CODE_DEFINE_FONT = 10] = "CODE_DEFINE_FONT";
        a[a.CODE_DEFINE_FONT2 = 48] = "CODE_DEFINE_FONT2";
        a[a.CODE_DEFINE_FONT3 = 75] = "CODE_DEFINE_FONT3";
        a[a.CODE_DEFINE_FONT4 = 91] = "CODE_DEFINE_FONT4";
      })(h.FontDefinitionTags || (h.FontDefinitionTags = {}));
      (function(a) {
        a[a.CODE_PLACE_OBJECT = 4] = "CODE_PLACE_OBJECT";
        a[a.CODE_PLACE_OBJECT2 = 26] = "CODE_PLACE_OBJECT2";
        a[a.CODE_PLACE_OBJECT3 = 70] = "CODE_PLACE_OBJECT3";
        a[a.CODE_REMOVE_OBJECT = 5] = "CODE_REMOVE_OBJECT";
        a[a.CODE_REMOVE_OBJECT2 = 28] = "CODE_REMOVE_OBJECT2";
        a[a.CODE_START_SOUND = 15] = "CODE_START_SOUND";
        a[a.CODE_START_SOUND2 = 89] = "CODE_START_SOUND2";
        a[a.CODE_VIDEO_FRAME = 61] = "CODE_VIDEO_FRAME";
      })(h.ControlTags || (h.ControlTags = {}));
      (function(a) {
        a[a.Move = 1] = "Move";
        a[a.HasCharacter = 2] = "HasCharacter";
        a[a.HasMatrix = 4] = "HasMatrix";
        a[a.HasColorTransform = 8] = "HasColorTransform";
        a[a.HasRatio = 16] = "HasRatio";
        a[a.HasName = 32] = "HasName";
        a[a.HasClipDepth = 64] = "HasClipDepth";
        a[a.HasClipActions = 128] = "HasClipActions";
        a[a.HasFilterList = 256] = "HasFilterList";
        a[a.HasBlendMode = 512] = "HasBlendMode";
        a[a.HasCacheAsBitmap = 1024] = "HasCacheAsBitmap";
        a[a.HasClassName = 2048] = "HasClassName";
        a[a.HasImage = 4096] = "HasImage";
        a[a.HasVisible = 8192] = "HasVisible";
        a[a.OpaqueBackground = 16384] = "OpaqueBackground";
        a[a.Reserved = 32768] = "Reserved";
      })(h.PlaceObjectFlags || (h.PlaceObjectFlags = {}));
      (function(a) {
        a[a.Load = 1] = "Load";
        a[a.EnterFrame = 2] = "EnterFrame";
        a[a.Unload = 4] = "Unload";
        a[a.MouseMove = 8] = "MouseMove";
        a[a.MouseDown = 16] = "MouseDown";
        a[a.MouseUp = 32] = "MouseUp";
        a[a.KeyDown = 64] = "KeyDown";
        a[a.KeyUp = 128] = "KeyUp";
        a[a.Data = 256] = "Data";
        a[a.Initialize = 512] = "Initialize";
        a[a.Press = 1024] = "Press";
        a[a.Release = 2048] = "Release";
        a[a.ReleaseOutside = 4096] = "ReleaseOutside";
        a[a.RollOver = 8192] = "RollOver";
        a[a.RollOut = 16384] = "RollOut";
        a[a.DragOver = 32768] = "DragOver";
        a[a.DragOut = 65536] = "DragOut";
        a[a.KeyPress = 131072] = "KeyPress";
        a[a.Construct = 262144] = "Construct";
      })(h.AVM1ClipEvents || (h.AVM1ClipEvents = {}));
      (function(a) {
        a[a.StateUp = 1] = "StateUp";
        a[a.StateOver = 2] = "StateOver";
        a[a.StateDown = 4] = "StateDown";
        a[a.StateHitTest = 8] = "StateHitTest";
        a[a.HasFilterList = 16] = "HasFilterList";
        a[a.HasBlendMode = 32] = "HasBlendMode";
      })(h.ButtonCharacterFlags || (h.ButtonCharacterFlags = {}));
      (function(a) {
        a[a.Bold = 1] = "Bold";
        a[a.Italic = 2] = "Italic";
        a[a.WideOrHasFontData = 4] = "WideOrHasFontData";
        a[a.WideOffset = 8] = "WideOffset";
        a[a.Ansi = 16] = "Ansi";
        a[a.SmallText = 32] = "SmallText";
        a[a.ShiftJis = 64] = "ShiftJis";
        a[a.HasLayout = 128] = "HasLayout";
      })(h.FontFlags || (h.FontFlags = {}));
      (function(a) {
        a[a.HasMoveX = 1] = "HasMoveX";
        a[a.HasMoveY = 2] = "HasMoveY";
        a[a.HasColor = 4] = "HasColor";
        a[a.HasFont = 8] = "HasFont";
      })(h.TextRecordFlags || (h.TextRecordFlags = {}));
      (function(a) {
        a[a.HasInPoint = 1] = "HasInPoint";
        a[a.HasOutPoint = 2] = "HasOutPoint";
        a[a.HasLoops = 4] = "HasLoops";
        a[a.HasEnvelope = 8] = "HasEnvelope";
        a[a.NoMultiple = 16] = "NoMultiple";
        a[a.Stop = 32] = "Stop";
      })(h.SoundInfoFlags || (h.SoundInfoFlags = {}));
      (function(a) {
        a[a.HasFont = 1] = "HasFont";
        a[a.HasMaxLength = 2] = "HasMaxLength";
        a[a.HasColor = 4] = "HasColor";
        a[a.ReadOnly = 8] = "ReadOnly";
        a[a.Password = 16] = "Password";
        a[a.Multiline = 32] = "Multiline";
        a[a.WordWrap = 64] = "WordWrap";
        a[a.HasText = 128] = "HasText";
        a[a.UseOutlines = 256] = "UseOutlines";
        a[a.Html = 512] = "Html";
        a[a.WasStatic = 1024] = "WasStatic";
        a[a.Border = 2048] = "Border";
        a[a.NoSelect = 4096] = "NoSelect";
        a[a.HasLayout = 8192] = "HasLayout";
        a[a.AutoSize = 16384] = "AutoSize";
        a[a.HasFontClass = 32768] = "HasFontClass";
      })(h.TextFlags || (h.TextFlags = {}));
      (function(a) {
        a[a.UsesScalingStrokes = 1] = "UsesScalingStrokes";
        a[a.UsesNonScalingStrokes = 2] = "UsesNonScalingStrokes";
        a[a.UsesFillWindingRule = 4] = "UsesFillWindingRule";
        a[a.IsMorph = 8] = "IsMorph";
      })(h.ShapeFlags || (h.ShapeFlags = {}));
      (function(a) {
        a[a.Move = 1] = "Move";
        a[a.HasFillStyle0 = 2] = "HasFillStyle0";
        a[a.HasFillStyle1 = 4] = "HasFillStyle1";
        a[a.HasLineStyle = 8] = "HasLineStyle";
        a[a.HasNewStyles = 16] = "HasNewStyles";
        a[a.IsStraight = 32] = "IsStraight";
        a[a.IsGeneral = 64] = "IsGeneral";
        a[a.IsVertical = 128] = "IsVertical";
      })(h.ShapeRecordFlags || (h.ShapeRecordFlags = {}));
    })(h.Parser || (h.Parser = {}));
  })(h.SWF || (h.SWF = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  var p = h.Debug.unexpected, r = function() {
    function a(a, n, b, l) {
      this.url = a;
      this.method = n;
      this.mimeType = b;
      this.data = l;
    }
    a.prototype.readAll = function(a, n) {
      var b = this.url, l = this.xhr = new XMLHttpRequest({mozSystem:!0});
      l.open(this.method || "GET", this.url, !0);
      l.responseType = "arraybuffer";
      a && (l.onprogress = function(b) {
        a(l.response, b.loaded, b.total);
      });
      l.onreadystatechange = function(a) {
        4 === l.readyState && (200 !== l.status && 0 !== l.status || null === l.response ? (p("Path: " + b + " not found."), n(null, l.statusText)) : n(l.response));
      };
      this.mimeType && l.setRequestHeader("Content-Type", this.mimeType);
      l.send(this.data || null);
    };
    a.prototype.readChunked = function(a, n, b, l, u, k) {
      if (0 >= a) {
        this.readAsync(n, b, l, u, k);
      } else {
        var t = 0, q = new Uint8Array(a), m = 0, h;
        this.readAsync(function(b, f) {
          h = f.total;
          for (var g = b.length, c = 0;t + g >= a;) {
            var e = a - t;
            q.set(b.subarray(c, c + e), t);
            c += e;
            g -= e;
            m += a;
            n(q, {loaded:m, total:h});
            t = 0;
          }
          q.set(b.subarray(c), t);
          t += g;
        }, b, l, function() {
          0 < t && (m += t, n(q.subarray(0, t), {loaded:m, total:h}), t = 0);
          u && u();
        }, k);
      }
    };
    a.prototype.readAsync = function(a, n, b, l, u) {
      var k = this.xhr = new XMLHttpRequest({mozSystem:!0}), t = this.url, q = 0, m = 0;
      k.open(this.method || "GET", t, !0);
      k.responseType = "moz-chunked-arraybuffer";
      var h = "moz-chunked-arraybuffer" !== k.responseType;
      h && (k.responseType = "arraybuffer");
      k.onprogress = function(b) {
        h || (q = b.loaded, m = b.total, b = new Uint8Array(k.response), q = Math.max(q, b.byteLength), m = Math.max(m, b.byteLength), a(b, {loaded:q, total:m}));
      };
      k.onreadystatechange = function(b) {
        2 === k.readyState && u && u(t, k.status, k.getAllResponseHeaders());
        4 === k.readyState && (200 !== k.status && 0 !== k.status || null === k.response && (0 === m || q !== m) ? n(k.statusText) : h && (b = k.response, a(new Uint8Array(b), {loaded:b.byteLength, total:b.byteLength})));
      };
      k.onload = function() {
        l && l();
      };
      this.mimeType && k.setRequestHeader("Content-Type", this.mimeType);
      k.send(this.data || null);
      b && b();
    };
    a.prototype.abort = function() {
      this.xhr && (this.xhr.abort(), this.xhr = null);
    };
    return a;
  }();
  h.BinaryFileReader = r;
})(Shumway || (Shumway = {}));
(function(h) {
  var p = function() {
    function h() {
      this.isAS3TraceOn = !0;
      this._startTime = Date.now();
    }
    Object.defineProperty(h.prototype, "currentTimestamp", {get:function() {
      return Date.now() - this._startTime;
    }, enumerable:!0, configurable:!0});
    h.prototype._writeLine = function(a) {
    };
    h.prototype.writeAS3Trace = function(a) {
    };
    return h;
  }();
  h.FlashLog = p;
  h.flashlog = null;
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(a) {
      a[a.Objects = 0] = "Objects";
      a[a.References = 1] = "References";
    })(h.RemotingPhase || (h.RemotingPhase = {}));
    (function(a) {
      a[a.HasMatrix = 1] = "HasMatrix";
      a[a.HasBounds = 2] = "HasBounds";
      a[a.HasChildren = 4] = "HasChildren";
      a[a.HasColorTransform = 8] = "HasColorTransform";
      a[a.HasClipRect = 16] = "HasClipRect";
      a[a.HasMiscellaneousProperties = 32] = "HasMiscellaneousProperties";
      a[a.HasMask = 64] = "HasMask";
      a[a.HasClip = 128] = "HasClip";
    })(h.MessageBits || (h.MessageBits = {}));
    (function(a) {
      a[a.None = 0] = "None";
      a[a.Asset = 134217728] = "Asset";
    })(h.IDMask || (h.IDMask = {}));
    (function(a) {
      a[a.EOF = 0] = "EOF";
      a[a.UpdateFrame = 100] = "UpdateFrame";
      a[a.UpdateGraphics = 101] = "UpdateGraphics";
      a[a.UpdateBitmapData = 102] = "UpdateBitmapData";
      a[a.UpdateTextContent = 103] = "UpdateTextContent";
      a[a.UpdateStage = 104] = "UpdateStage";
      a[a.UpdateNetStream = 105] = "UpdateNetStream";
      a[a.RequestBitmapData = 106] = "RequestBitmapData";
      a[a.DrawToBitmap = 200] = "DrawToBitmap";
      a[a.MouseEvent = 300] = "MouseEvent";
      a[a.KeyboardEvent = 301] = "KeyboardEvent";
      a[a.FocusEvent = 302] = "FocusEvent";
    })(h.MessageTag || (h.MessageTag = {}));
    (function(a) {
      a[a.Blur = 0] = "Blur";
      a[a.DropShadow = 1] = "DropShadow";
      a[a.ColorMatrix = 2] = "ColorMatrix";
    })(h.FilterType || (h.FilterType = {}));
    (function(a) {
      a[a.Identity = 0] = "Identity";
      a[a.AlphaMultiplierOnly = 1] = "AlphaMultiplierOnly";
      a[a.All = 2] = "All";
    })(h.ColorTransformEncoding || (h.ColorTransformEncoding = {}));
    (function(a) {
      a[a.Initialized = 0] = "Initialized";
      a[a.Metadata = 1] = "Metadata";
      a[a.PlayStart = 2] = "PlayStart";
      a[a.PlayStop = 3] = "PlayStop";
      a[a.BufferEmpty = 4] = "BufferEmpty";
      a[a.BufferFull = 5] = "BufferFull";
      a[a.Pause = 6] = "Pause";
      a[a.Unpause = 7] = "Unpause";
      a[a.Seeking = 8] = "Seeking";
      a[a.Seeked = 9] = "Seeked";
      a[a.Progress = 10] = "Progress";
      a[a.Error = 11] = "Error";
    })(h.VideoPlaybackEvent || (h.VideoPlaybackEvent = {}));
    (function(a) {
      a[a.Init = 1] = "Init";
      a[a.Pause = 2] = "Pause";
      a[a.Seek = 3] = "Seek";
      a[a.GetTime = 4] = "GetTime";
      a[a.GetBufferLength = 5] = "GetBufferLength";
      a[a.SetSoundLevels = 6] = "SetSoundLevels";
      a[a.GetBytesLoaded = 7] = "GetBytesLoaded";
      a[a.GetBytesTotal = 8] = "GetBytesTotal";
      a[a.EnsurePlaying = 9] = "EnsurePlaying";
    })(h.VideoControlEvent || (h.VideoControlEvent = {}));
    (function(a) {
      a[a.ShowAll = 0] = "ShowAll";
      a[a.ExactFit = 1] = "ExactFit";
      a[a.NoBorder = 2] = "NoBorder";
      a[a.NoScale = 4] = "NoScale";
    })(h.StageScaleMode || (h.StageScaleMode = {}));
    (function(a) {
      a[a.None = 0] = "None";
      a[a.Top = 1] = "Top";
      a[a.Bottom = 2] = "Bottom";
      a[a.Left = 4] = "Left";
      a[a.Right = 8] = "Right";
      a[a.TopLeft = a.Top | a.Left] = "TopLeft";
      a[a.BottomLeft = a.Bottom | a.Left] = "BottomLeft";
      a[a.BottomRight = a.Bottom | a.Right] = "BottomRight";
      a[a.TopRight = a.Top | a.Right] = "TopRight";
    })(h.StageAlignFlags || (h.StageAlignFlags = {}));
    h.MouseEventNames = "click dblclick mousedown mousemove mouseup mouseover mouseout".split(" ");
    h.KeyboardEventNames = ["keydown", "keypress", "keyup"];
    (function(a) {
      a[a.CtrlKey = 1] = "CtrlKey";
      a[a.AltKey = 2] = "AltKey";
      a[a.ShiftKey = 4] = "ShiftKey";
    })(h.KeyboardEventFlags || (h.KeyboardEventFlags = {}));
    (function(a) {
      a[a.DocumentHidden = 0] = "DocumentHidden";
      a[a.DocumentVisible = 1] = "DocumentVisible";
      a[a.WindowBlur = 2] = "WindowBlur";
      a[a.WindowFocus = 3] = "WindowFocus";
    })(h.FocusEventType || (h.FocusEventType = {}));
    var r = function() {
      function a(a, n) {
        this.window = a;
        this.target = n;
      }
      Object.defineProperty(a.prototype, "onAsyncMessage", {set:function(a) {
        this.window.addEventListener("message", function(n) {
          Promise.resolve(n.data).then(function(b) {
            a(b);
          });
        });
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "onSyncMessage", {set:function(a) {
        this.window.addEventListener("syncmessage", function(n) {
          n = n.detail;
          n.result = a(n.msg);
        });
      }, enumerable:!0, configurable:!0});
      a.prototype.postAsyncMessage = function(a, n) {
        this.target.postMessage(a, "*", n);
      };
      a.prototype.sendSyncMessage = function(a, n) {
        var b = this.target.document.createEvent("CustomEvent"), l = {msg:a, result:void 0};
        b.initCustomEvent("syncmessage", !1, !1, l);
        this.target.dispatchEvent(b);
        return l.result;
      };
      return a;
    }();
    h.WindowTransportPeer = r;
    r = function() {
      function a() {
      }
      Object.defineProperty(a.prototype, "onAsyncMessage", {set:function(a) {
        ShumwayCom.setAsyncMessageCallback(a);
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "onSyncMessage", {set:function(a) {
        ShumwayCom.setSyncMessageCallback(a);
      }, enumerable:!0, configurable:!0});
      a.prototype.postAsyncMessage = function(a, n) {
        ShumwayCom.postAsyncMessage(a);
      };
      a.prototype.sendSyncMessage = function(a, n) {
        return ShumwayCom.sendSyncMessage(a);
      };
      return a;
    }();
    h.ShumwayComTransportPeer = r;
  })(h.Remoting || (h.Remoting = {}));
})(Shumway || (Shumway = {}));
var throwError, Errors;
(function(h) {
  (function(h) {
    (function(h) {
      var a = function() {
        function a() {
        }
        a.toRGBA = function(b, a, u, k) {
          void 0 === k && (k = 1);
          return "rgba(" + b + "," + a + "," + u + "," + k + ")";
        };
        return a;
      }();
      h.UI = a;
      var p = function() {
        function n() {
        }
        n.prototype.tabToolbar = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(37, 44, 51, b);
        };
        n.prototype.toolbars = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(52, 60, 69, b);
        };
        n.prototype.selectionBackground = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(29, 79, 115, b);
        };
        n.prototype.selectionText = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(245, 247, 250, b);
        };
        n.prototype.splitters = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(0, 0, 0, b);
        };
        n.prototype.bodyBackground = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(17, 19, 21, b);
        };
        n.prototype.sidebarBackground = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(24, 29, 32, b);
        };
        n.prototype.attentionBackground = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(161, 134, 80, b);
        };
        n.prototype.bodyText = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(143, 161, 178, b);
        };
        n.prototype.foregroundTextGrey = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(182, 186, 191, b);
        };
        n.prototype.contentTextHighContrast = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(169, 186, 203, b);
        };
        n.prototype.contentTextGrey = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(143, 161, 178, b);
        };
        n.prototype.contentTextDarkGrey = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(95, 115, 135, b);
        };
        n.prototype.blueHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(70, 175, 227, b);
        };
        n.prototype.purpleHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(107, 122, 187, b);
        };
        n.prototype.pinkHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(223, 128, 255, b);
        };
        n.prototype.redHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(235, 83, 104, b);
        };
        n.prototype.orangeHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(217, 102, 41, b);
        };
        n.prototype.lightOrangeHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(217, 155, 40, b);
        };
        n.prototype.greenHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(112, 191, 83, b);
        };
        n.prototype.blueGreyHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(94, 136, 176, b);
        };
        return n;
      }();
      h.UIThemeDark = p;
      p = function() {
        function n() {
        }
        n.prototype.tabToolbar = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(235, 236, 237, b);
        };
        n.prototype.toolbars = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(240, 241, 242, b);
        };
        n.prototype.selectionBackground = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(76, 158, 217, b);
        };
        n.prototype.selectionText = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(245, 247, 250, b);
        };
        n.prototype.splitters = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(170, 170, 170, b);
        };
        n.prototype.bodyBackground = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(252, 252, 252, b);
        };
        n.prototype.sidebarBackground = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(247, 247, 247, b);
        };
        n.prototype.attentionBackground = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(161, 134, 80, b);
        };
        n.prototype.bodyText = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(24, 25, 26, b);
        };
        n.prototype.foregroundTextGrey = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(88, 89, 89, b);
        };
        n.prototype.contentTextHighContrast = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(41, 46, 51, b);
        };
        n.prototype.contentTextGrey = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(143, 161, 178, b);
        };
        n.prototype.contentTextDarkGrey = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(102, 115, 128, b);
        };
        n.prototype.blueHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(0, 136, 204, b);
        };
        n.prototype.purpleHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(91, 95, 255, b);
        };
        n.prototype.pinkHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(184, 46, 229, b);
        };
        n.prototype.redHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(237, 38, 85, b);
        };
        n.prototype.orangeHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(241, 60, 0, b);
        };
        n.prototype.lightOrangeHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(217, 126, 0, b);
        };
        n.prototype.greenHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(44, 187, 15, b);
        };
        n.prototype.blueGreyHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(95, 136, 176, b);
        };
        return n;
      }();
      h.UIThemeLight = p;
    })(h.Theme || (h.Theme = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(h) {
      var a = function() {
        function a(n, b) {
          this._buffers = n || [];
          this._snapshots = [];
          this._windowStart = this._startTime = b;
          this._maxDepth = 0;
        }
        a.prototype.addBuffer = function(a) {
          this._buffers.push(a);
        };
        a.prototype.getSnapshotAt = function(a) {
          return this._snapshots[a];
        };
        Object.defineProperty(a.prototype, "hasSnapshots", {get:function() {
          return 0 < this.snapshotCount;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "snapshotCount", {get:function() {
          return this._snapshots.length;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "startTime", {get:function() {
          return this._startTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "endTime", {get:function() {
          return this._endTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "totalTime", {get:function() {
          return this.endTime - this.startTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "windowStart", {get:function() {
          return this._windowStart;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "windowEnd", {get:function() {
          return this._windowEnd;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "windowLength", {get:function() {
          return this.windowEnd - this.windowStart;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "maxDepth", {get:function() {
          return this._maxDepth;
        }, enumerable:!0, configurable:!0});
        a.prototype.forEachSnapshot = function(a) {
          for (var b = 0, l = this.snapshotCount;b < l;b++) {
            a(this._snapshots[b], b);
          }
        };
        a.prototype.createSnapshots = function() {
          var a = Number.MIN_VALUE, b = 0;
          for (this._snapshots = [];0 < this._buffers.length;) {
            var l = this._buffers.shift().createSnapshot();
            l && (a < l.endTime && (a = l.endTime), b < l.maxDepth && (b = l.maxDepth), this._snapshots.push(l));
          }
          this._windowEnd = this._endTime = a;
          this._maxDepth = b;
        };
        a.prototype.setWindow = function(a, b) {
          if (a > b) {
            var l = a;
            a = b;
            b = l;
          }
          l = Math.min(b - a, this.totalTime);
          a < this._startTime ? (a = this._startTime, b = this._startTime + l) : b > this._endTime && (a = this._endTime - l, b = this._endTime);
          this._windowStart = a;
          this._windowEnd = b;
        };
        a.prototype.moveWindowTo = function(a) {
          this.setWindow(a - this.windowLength / 2, a + this.windowLength / 2);
        };
        return a;
      }();
      h.Profile = a;
    })(h.Profiler || (h.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(h, p) {
  function r() {
    this.constructor = h;
  }
  for (var a in p) {
    p.hasOwnProperty(a) && (h[a] = p[a]);
  }
  r.prototype = p.prototype;
  h.prototype = new r;
};
(function(h) {
  (function(h) {
    (function(h) {
      var a = function() {
        return function(a) {
          this.kind = a;
          this.totalTime = this.selfTime = this.count = 0;
        };
      }();
      h.TimelineFrameStatistics = a;
      var p = function() {
        function h(b, a, u, k, t, q) {
          this.parent = b;
          this.kind = a;
          this.startData = u;
          this.endData = k;
          this.startTime = t;
          this.endTime = q;
          this.maxDepth = 0;
        }
        Object.defineProperty(h.prototype, "totalTime", {get:function() {
          return this.endTime - this.startTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(h.prototype, "selfTime", {get:function() {
          var b = this.totalTime;
          if (this.children) {
            for (var a = 0, u = this.children.length;a < u;a++) {
              var k = this.children[a], b = b - (k.endTime - k.startTime)
            }
          }
          return b;
        }, enumerable:!0, configurable:!0});
        h.prototype.getChildIndex = function(b) {
          for (var a = this.children, u = 0;u < a.length;u++) {
            if (a[u].endTime > b) {
              return u;
            }
          }
          return 0;
        };
        h.prototype.getChildRange = function(b, a) {
          if (this.children && b <= this.endTime && a >= this.startTime && a >= b) {
            var u = this._getNearestChild(b), k = this._getNearestChildReverse(a);
            if (u <= k) {
              return b = this.children[u].startTime, a = this.children[k].endTime, {startIndex:u, endIndex:k, startTime:b, endTime:a, totalTime:a - b};
            }
          }
          return null;
        };
        h.prototype._getNearestChild = function(b) {
          var a = this.children;
          if (a && a.length) {
            if (b <= a[0].endTime) {
              return 0;
            }
            for (var u, k = 0, t = a.length - 1;t > k;) {
              u = (k + t) / 2 | 0;
              var q = a[u];
              if (b >= q.startTime && b <= q.endTime) {
                return u;
              }
              b > q.endTime ? k = u + 1 : t = u;
            }
            return Math.ceil((k + t) / 2);
          }
          return 0;
        };
        h.prototype._getNearestChildReverse = function(b) {
          var a = this.children;
          if (a && a.length) {
            var u = a.length - 1;
            if (b >= a[u].startTime) {
              return u;
            }
            for (var k, t = 0;u > t;) {
              k = Math.ceil((t + u) / 2);
              var q = a[k];
              if (b >= q.startTime && b <= q.endTime) {
                return k;
              }
              b > q.endTime ? t = k : u = k - 1;
            }
            return (t + u) / 2 | 0;
          }
          return 0;
        };
        h.prototype.query = function(b) {
          if (b < this.startTime || b > this.endTime) {
            return null;
          }
          var a = this.children;
          if (a && 0 < a.length) {
            for (var u, k = 0, t = a.length - 1;t > k;) {
              var q = (k + t) / 2 | 0;
              u = a[q];
              if (b >= u.startTime && b <= u.endTime) {
                return u.query(b);
              }
              b > u.endTime ? k = q + 1 : t = q;
            }
            u = a[t];
            if (b >= u.startTime && b <= u.endTime) {
              return u.query(b);
            }
          }
          return this;
        };
        h.prototype.queryNext = function(b) {
          for (var a = this;b > a.endTime;) {
            if (a.parent) {
              a = a.parent;
            } else {
              break;
            }
          }
          return a.query(b);
        };
        h.prototype.getDepth = function() {
          for (var b = 0, a = this;a;) {
            b++, a = a.parent;
          }
          return b;
        };
        h.prototype.calculateStatistics = function() {
          function b(u) {
            if (u.kind) {
              var k = l[u.kind.id] || (l[u.kind.id] = new a(u.kind));
              k.count++;
              k.selfTime += u.selfTime;
              k.totalTime += u.totalTime;
            }
            u.children && u.children.forEach(b);
          }
          var l = this.statistics = [];
          b(this);
        };
        h.prototype.trace = function(b) {
          var a = (this.kind ? this.kind.name + ": " : "Profile: ") + (this.endTime - this.startTime).toFixed(2);
          if (this.children && this.children.length) {
            b.enter(a);
            for (a = 0;a < this.children.length;a++) {
              this.children[a].trace(b);
            }
            b.outdent();
          } else {
            b.writeLn(a);
          }
        };
        return h;
      }();
      h.TimelineFrame = p;
      p = function(a) {
        function b(b) {
          a.call(this, null, null, null, null, NaN, NaN);
          this.name = b;
        }
        __extends(b, a);
        return b;
      }(p);
      h.TimelineBufferSnapshot = p;
    })(h.Profiler || (h.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(r) {
      var a = function() {
        function a(n, b) {
          void 0 === n && (n = "");
          this.name = n || "";
          this._startTime = h.isNullOrUndefined(b) ? jsGlobal.START_TIME : b;
        }
        a.prototype.getKind = function(a) {
          return this._kinds[a];
        };
        Object.defineProperty(a.prototype, "kinds", {get:function() {
          return this._kinds.concat();
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "depth", {get:function() {
          return this._depth;
        }, enumerable:!0, configurable:!0});
        a.prototype._initialize = function() {
          this._depth = 0;
          this._stack = [];
          this._data = [];
          this._kinds = [];
          this._kindNameMap = Object.create(null);
          this._marks = new h.CircularBuffer(Int32Array, 20);
          this._times = new h.CircularBuffer(Float64Array, 20);
        };
        a.prototype._getKindId = function(h) {
          var b = a.MAX_KINDID;
          if (void 0 === this._kindNameMap[h]) {
            if (b = this._kinds.length, b < a.MAX_KINDID) {
              var l = {id:b, name:h, visible:!0};
              this._kinds.push(l);
              this._kindNameMap[h] = l;
            } else {
              b = a.MAX_KINDID;
            }
          } else {
            b = this._kindNameMap[h].id;
          }
          return b;
        };
        a.prototype._getMark = function(n, b, l) {
          var u = a.MAX_DATAID;
          h.isNullOrUndefined(l) || b === a.MAX_KINDID || (u = this._data.length, u < a.MAX_DATAID ? this._data.push(l) : u = a.MAX_DATAID);
          return n | u << 16 | b;
        };
        a.prototype.enter = function(n, b, l) {
          l = (h.isNullOrUndefined(l) ? performance.now() : l) - this._startTime;
          this._marks || this._initialize();
          this._depth++;
          n = this._getKindId(n);
          this._marks.write(this._getMark(a.ENTER, n, b));
          this._times.write(l);
          this._stack.push(n);
        };
        a.prototype.leave = function(n, b, l) {
          l = (h.isNullOrUndefined(l) ? performance.now() : l) - this._startTime;
          var u = this._stack.pop();
          n && (u = this._getKindId(n));
          this._marks.write(this._getMark(a.LEAVE, u, b));
          this._times.write(l);
          this._depth--;
        };
        a.prototype.count = function(a, b, l) {
        };
        a.prototype.createSnapshot = function(n) {
          void 0 === n && (n = Number.MAX_VALUE);
          if (!this._marks) {
            return null;
          }
          var b = this._times, l = this._kinds, u = this._data, k = new r.TimelineBufferSnapshot(this.name), t = [k], q = 0;
          this._marks || this._initialize();
          this._marks.forEachInReverse(function(k, v) {
            var d = u[k >>> 16 & a.MAX_DATAID], f = l[k & a.MAX_KINDID];
            if (h.isNullOrUndefined(f) || f.visible) {
              var g = k & 2147483648, c = b.get(v), e = t.length;
              if (g === a.LEAVE) {
                if (1 === e && (q++, q > n)) {
                  return !0;
                }
                t.push(new r.TimelineFrame(t[e - 1], f, null, d, NaN, c));
              } else {
                if (g === a.ENTER) {
                  if (f = t.pop(), g = t[t.length - 1]) {
                    for (g.children ? g.children.unshift(f) : g.children = [f], g = t.length, f.depth = g, f.startData = d, f.startTime = c;f;) {
                      if (f.maxDepth < g) {
                        f.maxDepth = g, f = f.parent;
                      } else {
                        break;
                      }
                    }
                  } else {
                    return !0;
                  }
                }
              }
            }
          });
          k.children && k.children.length && (k.startTime = k.children[0].startTime, k.endTime = k.children[k.children.length - 1].endTime);
          return k;
        };
        a.prototype.reset = function(a) {
          this._startTime = h.isNullOrUndefined(a) ? performance.now() : a;
          this._marks ? (this._depth = 0, this._data = [], this._marks.reset(), this._times.reset()) : this._initialize();
        };
        a.FromFirefoxProfile = function(h, b) {
          for (var l = h.profile.threads[0].samples, u = new a(b, l[0].time), k = [], t, q = 0;q < l.length;q++) {
            t = l[q];
            var m = t.time, v = t.frames, d = 0;
            for (t = Math.min(v.length, k.length);d < t && v[d].location === k[d].location;) {
              d++;
            }
            for (var f = k.length - d, g = 0;g < f;g++) {
              t = k.pop(), u.leave(t.location, null, m);
            }
            for (;d < v.length;) {
              t = v[d++], u.enter(t.location, null, m);
            }
            k = v;
          }
          for (;t = k.pop();) {
            u.leave(t.location, null, m);
          }
          return u;
        };
        a.FromChromeProfile = function(h, b) {
          var l = h.timestamps, u = h.samples, k = new a(b, l[0] / 1E3), t = [], q = {}, m;
          a._resolveIds(h.head, q);
          for (var v = 0;v < l.length;v++) {
            var d = l[v] / 1E3, f = [];
            for (m = q[u[v]];m;) {
              f.unshift(m), m = m.parent;
            }
            var g = 0;
            for (m = Math.min(f.length, t.length);g < m && f[g] === t[g];) {
              g++;
            }
            for (var c = t.length - g, e = 0;e < c;e++) {
              m = t.pop(), k.leave(m.functionName, null, d);
            }
            for (;g < f.length;) {
              m = f[g++], k.enter(m.functionName, null, d);
            }
            t = f;
          }
          for (;m = t.pop();) {
            k.leave(m.functionName, null, d);
          }
          return k;
        };
        a._resolveIds = function(h, b) {
          b[h.id] = h;
          if (h.children) {
            for (var l = 0;l < h.children.length;l++) {
              h.children[l].parent = h, a._resolveIds(h.children[l], b);
            }
          }
        };
        a.ENTER = 0;
        a.LEAVE = -2147483648;
        a.MAX_KINDID = 65535;
        a.MAX_DATAID = 32767;
        return a;
      }();
      r.TimelineBuffer = a;
    })(p.Profiler || (p.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(r) {
      (function(a) {
        a[a.DARK = 0] = "DARK";
        a[a.LIGHT = 1] = "LIGHT";
      })(r.UIThemeType || (r.UIThemeType = {}));
      var a = function() {
        function a(h, b) {
          void 0 === b && (b = 0);
          this._container = h;
          this._headers = [];
          this._charts = [];
          this._profiles = [];
          this._activeProfile = null;
          this.themeType = b;
          this._tooltip = this._createTooltip();
        }
        a.prototype.createProfile = function(a, b) {
          var l = new r.Profile(a, b);
          l.createSnapshots();
          this._profiles.push(l);
          this.activateProfile(l);
          return l;
        };
        a.prototype.activateProfile = function(a) {
          this.deactivateProfile();
          this._activeProfile = a;
          this._createViews();
          this._initializeViews();
        };
        a.prototype.activateProfileAt = function(a) {
          this.activateProfile(this.getProfileAt(a));
        };
        a.prototype.deactivateProfile = function() {
          this._activeProfile && (this._destroyViews(), this._activeProfile = null);
        };
        a.prototype.resize = function() {
          this._onResize();
        };
        a.prototype.getProfileAt = function(a) {
          return this._profiles[a];
        };
        Object.defineProperty(a.prototype, "activeProfile", {get:function() {
          return this._activeProfile;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "profileCount", {get:function() {
          return this._profiles.length;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "container", {get:function() {
          return this._container;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "themeType", {get:function() {
          return this._themeType;
        }, set:function(a) {
          switch(a) {
            case 0:
              this._theme = new p.Theme.UIThemeDark;
              break;
            case 1:
              this._theme = new p.Theme.UIThemeLight;
          }
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "theme", {get:function() {
          return this._theme;
        }, enumerable:!0, configurable:!0});
        a.prototype.getSnapshotAt = function(a) {
          return this._activeProfile.getSnapshotAt(a);
        };
        a.prototype._createViews = function() {
          if (this._activeProfile) {
            var a = this;
            this._overviewHeader = new r.FlameChartHeader(this, 0);
            this._overview = new r.FlameChartOverview(this, 0);
            this._activeProfile.forEachSnapshot(function(b, l) {
              a._headers.push(new r.FlameChartHeader(a, 1));
              a._charts.push(new r.FlameChart(a, b));
            });
            window.addEventListener("resize", this._onResize.bind(this));
          }
        };
        a.prototype._destroyViews = function() {
          if (this._activeProfile) {
            this._overviewHeader.destroy();
            for (this._overview.destroy();this._headers.length;) {
              this._headers.pop().destroy();
            }
            for (;this._charts.length;) {
              this._charts.pop().destroy();
            }
            window.removeEventListener("resize", this._onResize.bind(this));
          }
        };
        a.prototype._initializeViews = function() {
          if (this._activeProfile) {
            var a = this, b = this._activeProfile.startTime, l = this._activeProfile.endTime;
            this._overviewHeader.initialize(b, l);
            this._overview.initialize(b, l);
            this._activeProfile.forEachSnapshot(function(u, k) {
              a._headers[k].initialize(b, l);
              a._charts[k].initialize(b, l);
            });
          }
        };
        a.prototype._onResize = function() {
          if (this._activeProfile) {
            var a = this, b = this._container.offsetWidth;
            this._overviewHeader.setSize(b);
            this._overview.setSize(b);
            this._activeProfile.forEachSnapshot(function(l, u) {
              a._headers[u].setSize(b);
              a._charts[u].setSize(b);
            });
          }
        };
        a.prototype._updateViews = function() {
          if (this._activeProfile) {
            var a = this, b = this._activeProfile.windowStart, l = this._activeProfile.windowEnd;
            this._overviewHeader.setWindow(b, l);
            this._overview.setWindow(b, l);
            this._activeProfile.forEachSnapshot(function(u, k) {
              a._headers[k].setWindow(b, l);
              a._charts[k].setWindow(b, l);
            });
          }
        };
        a.prototype._drawViews = function() {
        };
        a.prototype._createTooltip = function() {
          var a = document.createElement("div");
          a.classList.add("profiler-tooltip");
          a.style.display = "none";
          this._container.insertBefore(a, this._container.firstChild);
          return a;
        };
        a.prototype.setWindow = function(a, b) {
          this._activeProfile.setWindow(a, b);
          this._updateViews();
        };
        a.prototype.moveWindowTo = function(a) {
          this._activeProfile.moveWindowTo(a);
          this._updateViews();
        };
        a.prototype.showTooltip = function(a, b, l, u) {
          this.removeTooltipContent();
          this._tooltip.appendChild(this.createTooltipContent(a, b));
          this._tooltip.style.display = "block";
          var k = this._tooltip.firstChild;
          b = k.clientWidth;
          k = k.clientHeight;
          l += l + b >= a.canvas.clientWidth - 50 ? -(b + 20) : 25;
          u += a.canvas.offsetTop - k / 2;
          this._tooltip.style.left = l + "px";
          this._tooltip.style.top = u + "px";
        };
        a.prototype.hideTooltip = function() {
          this._tooltip.style.display = "none";
        };
        a.prototype.createTooltipContent = function(a, b) {
          var l = Math.round(1E5 * b.totalTime) / 1E5, u = Math.round(1E5 * b.selfTime) / 1E5, k = Math.round(1E4 * b.selfTime / b.totalTime) / 100, t = document.createElement("div"), h = document.createElement("h1");
          h.textContent = b.kind.name;
          t.appendChild(h);
          h = document.createElement("p");
          h.textContent = "Total: " + l + " ms";
          t.appendChild(h);
          l = document.createElement("p");
          l.textContent = "Self: " + u + " ms (" + k + "%)";
          t.appendChild(l);
          if (u = a.getStatistics(b.kind)) {
            k = document.createElement("p"), k.textContent = "Count: " + u.count, t.appendChild(k), k = Math.round(1E5 * u.totalTime) / 1E5, l = document.createElement("p"), l.textContent = "All Total: " + k + " ms", t.appendChild(l), u = Math.round(1E5 * u.selfTime) / 1E5, k = document.createElement("p"), k.textContent = "All Self: " + u + " ms", t.appendChild(k);
          }
          this.appendDataElements(t, b.startData);
          this.appendDataElements(t, b.endData);
          return t;
        };
        a.prototype.appendDataElements = function(a, b) {
          if (!h.isNullOrUndefined(b)) {
            a.appendChild(document.createElement("hr"));
            var l;
            if (h.isObject(b)) {
              for (var u in b) {
                l = document.createElement("p"), l.textContent = u + ": " + b[u], a.appendChild(l);
              }
            } else {
              l = document.createElement("p"), l.textContent = b.toString(), a.appendChild(l);
            }
          }
        };
        a.prototype.removeTooltipContent = function() {
          for (var a = this._tooltip;a.firstChild;) {
            a.removeChild(a.firstChild);
          }
        };
        return a;
      }();
      r.Controller = a;
    })(p.Profiler || (p.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(r) {
      var a = h.NumberUtilities.clamp, p = function() {
        function a(b) {
          this.value = b;
        }
        a.prototype.toString = function() {
          return this.value;
        };
        a.AUTO = new a("auto");
        a.DEFAULT = new a("default");
        a.NONE = new a("none");
        a.HELP = new a("help");
        a.POINTER = new a("pointer");
        a.PROGRESS = new a("progress");
        a.WAIT = new a("wait");
        a.CELL = new a("cell");
        a.CROSSHAIR = new a("crosshair");
        a.TEXT = new a("text");
        a.ALIAS = new a("alias");
        a.COPY = new a("copy");
        a.MOVE = new a("move");
        a.NO_DROP = new a("no-drop");
        a.NOT_ALLOWED = new a("not-allowed");
        a.ALL_SCROLL = new a("all-scroll");
        a.COL_RESIZE = new a("col-resize");
        a.ROW_RESIZE = new a("row-resize");
        a.N_RESIZE = new a("n-resize");
        a.E_RESIZE = new a("e-resize");
        a.S_RESIZE = new a("s-resize");
        a.W_RESIZE = new a("w-resize");
        a.NE_RESIZE = new a("ne-resize");
        a.NW_RESIZE = new a("nw-resize");
        a.SE_RESIZE = new a("se-resize");
        a.SW_RESIZE = new a("sw-resize");
        a.EW_RESIZE = new a("ew-resize");
        a.NS_RESIZE = new a("ns-resize");
        a.NESW_RESIZE = new a("nesw-resize");
        a.NWSE_RESIZE = new a("nwse-resize");
        a.ZOOM_IN = new a("zoom-in");
        a.ZOOM_OUT = new a("zoom-out");
        a.GRAB = new a("grab");
        a.GRABBING = new a("grabbing");
        return a;
      }();
      r.MouseCursor = p;
      var n = function() {
        function b(a, b) {
          this._target = a;
          this._eventTarget = b;
          this._wheelDisabled = !1;
          this._boundOnMouseDown = this._onMouseDown.bind(this);
          this._boundOnMouseUp = this._onMouseUp.bind(this);
          this._boundOnMouseOver = this._onMouseOver.bind(this);
          this._boundOnMouseOut = this._onMouseOut.bind(this);
          this._boundOnMouseMove = this._onMouseMove.bind(this);
          this._boundOnMouseWheel = this._onMouseWheel.bind(this);
          this._boundOnDrag = this._onDrag.bind(this);
          b.addEventListener("mousedown", this._boundOnMouseDown, !1);
          b.addEventListener("mouseover", this._boundOnMouseOver, !1);
          b.addEventListener("mouseout", this._boundOnMouseOut, !1);
          b.addEventListener("onwheel" in document ? "wheel" : "mousewheel", this._boundOnMouseWheel, !1);
        }
        b.prototype.destroy = function() {
          var a = this._eventTarget;
          a.removeEventListener("mousedown", this._boundOnMouseDown);
          a.removeEventListener("mouseover", this._boundOnMouseOver);
          a.removeEventListener("mouseout", this._boundOnMouseOut);
          a.removeEventListener("onwheel" in document ? "wheel" : "mousewheel", this._boundOnMouseWheel);
          window.removeEventListener("mousemove", this._boundOnDrag);
          window.removeEventListener("mouseup", this._boundOnMouseUp);
          this._killHoverCheck();
          this._target = this._eventTarget = null;
        };
        b.prototype.updateCursor = function(a) {
          if (!b._cursorOwner || b._cursorOwner === this._target) {
            var u = this._eventTarget.parentElement;
            b._cursor !== a && (b._cursor = a, ["", "-moz-", "-webkit-"].forEach(function(b) {
              u.style.cursor = b + a;
            }));
            b._cursorOwner = b._cursor === p.DEFAULT ? null : this._target;
          }
        };
        b.prototype._onMouseDown = function(a) {
          this._killHoverCheck();
          if (0 === a.button) {
            var b = this._getTargetMousePos(a, a.target);
            this._dragInfo = {start:b, current:b, delta:{x:0, y:0}, hasMoved:!1, originalTarget:a.target};
            window.addEventListener("mousemove", this._boundOnDrag, !1);
            window.addEventListener("mouseup", this._boundOnMouseUp, !1);
            this._target.onMouseDown(b.x, b.y);
          }
        };
        b.prototype._onDrag = function(a) {
          var b = this._dragInfo;
          a = this._getTargetMousePos(a, b.originalTarget);
          var k = {x:a.x - b.start.x, y:a.y - b.start.y};
          b.current = a;
          b.delta = k;
          b.hasMoved = !0;
          this._target.onDrag(b.start.x, b.start.y, a.x, a.y, k.x, k.y);
        };
        b.prototype._onMouseUp = function(a) {
          window.removeEventListener("mousemove", this._boundOnDrag);
          window.removeEventListener("mouseup", this._boundOnMouseUp);
          var b = this;
          a = this._dragInfo;
          if (a.hasMoved) {
            this._target.onDragEnd(a.start.x, a.start.y, a.current.x, a.current.y, a.delta.x, a.delta.y);
          } else {
            this._target.onClick(a.current.x, a.current.y);
          }
          this._dragInfo = null;
          this._wheelDisabled = !0;
          setTimeout(function() {
            b._wheelDisabled = !1;
          }, 500);
        };
        b.prototype._onMouseOver = function(a) {
          a.target.addEventListener("mousemove", this._boundOnMouseMove, !1);
          if (!this._dragInfo) {
            var b = this._getTargetMousePos(a, a.target);
            this._target.onMouseOver(b.x, b.y);
            this._startHoverCheck(a);
          }
        };
        b.prototype._onMouseOut = function(a) {
          a.target.removeEventListener("mousemove", this._boundOnMouseMove, !1);
          if (!this._dragInfo) {
            this._target.onMouseOut();
          }
          this._killHoverCheck();
        };
        b.prototype._onMouseMove = function(a) {
          if (!this._dragInfo) {
            var b = this._getTargetMousePos(a, a.target);
            this._target.onMouseMove(b.x, b.y);
            this._killHoverCheck();
            this._startHoverCheck(a);
          }
        };
        b.prototype._onMouseWheel = function(b) {
          if (!(b.altKey || b.metaKey || b.ctrlKey || b.shiftKey || (b.preventDefault(), this._dragInfo || this._wheelDisabled))) {
            var h = this._getTargetMousePos(b, b.target);
            b = a("undefined" !== typeof b.deltaY ? b.deltaY / 16 : -b.wheelDelta / 40, -1, 1);
            b = Math.pow(1.2, b) - 1;
            this._target.onMouseWheel(h.x, h.y, b);
          }
        };
        b.prototype._startHoverCheck = function(a) {
          this._hoverInfo = {isHovering:!1, timeoutHandle:setTimeout(this._onMouseMoveIdleHandler.bind(this), b.HOVER_TIMEOUT), pos:this._getTargetMousePos(a, a.target)};
        };
        b.prototype._killHoverCheck = function() {
          if (this._hoverInfo) {
            clearTimeout(this._hoverInfo.timeoutHandle);
            if (this._hoverInfo.isHovering) {
              this._target.onHoverEnd();
            }
            this._hoverInfo = null;
          }
        };
        b.prototype._onMouseMoveIdleHandler = function() {
          var a = this._hoverInfo;
          a.isHovering = !0;
          this._target.onHoverStart(a.pos.x, a.pos.y);
        };
        b.prototype._getTargetMousePos = function(a, b) {
          var k = b.getBoundingClientRect();
          return {x:a.clientX - k.left, y:a.clientY - k.top};
        };
        b.HOVER_TIMEOUT = 500;
        b._cursor = p.DEFAULT;
        return b;
      }();
      r.MouseController = n;
    })(p.Profiler || (p.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(h) {
      (function(a) {
        a[a.NONE = 0] = "NONE";
        a[a.WINDOW = 1] = "WINDOW";
        a[a.HANDLE_LEFT = 2] = "HANDLE_LEFT";
        a[a.HANDLE_RIGHT = 3] = "HANDLE_RIGHT";
        a[a.HANDLE_BOTH = 4] = "HANDLE_BOTH";
      })(h.FlameChartDragTarget || (h.FlameChartDragTarget = {}));
      var a = function() {
        function a(n) {
          this._controller = n;
          this._initialized = !1;
          this._canvas = document.createElement("canvas");
          this._context = this._canvas.getContext("2d");
          this._mouseController = new h.MouseController(this, this._canvas);
          n = n.container;
          n.appendChild(this._canvas);
          n = n.getBoundingClientRect();
          this.setSize(n.width);
        }
        Object.defineProperty(a.prototype, "canvas", {get:function() {
          return this._canvas;
        }, enumerable:!0, configurable:!0});
        a.prototype.setSize = function(a, b) {
          void 0 === b && (b = 20);
          this._width = a;
          this._height = b;
          this._resetCanvas();
          this.draw();
        };
        a.prototype.initialize = function(a, b) {
          this._initialized = !0;
          this.setRange(a, b, !1);
          this.setWindow(a, b, !1);
          this.draw();
        };
        a.prototype.setWindow = function(a, b, l) {
          void 0 === l && (l = !0);
          this._windowStart = a;
          this._windowEnd = b;
          !l || this.draw();
        };
        a.prototype.setRange = function(a, b, l) {
          void 0 === l && (l = !0);
          this._rangeStart = a;
          this._rangeEnd = b;
          !l || this.draw();
        };
        a.prototype.destroy = function() {
          this._mouseController.destroy();
          this._mouseController = null;
          this._controller.container.removeChild(this._canvas);
          this._controller = null;
        };
        a.prototype._resetCanvas = function() {
          var a = window.devicePixelRatio, b = this._canvas;
          b.width = this._width * a;
          b.height = this._height * a;
          b.style.width = this._width + "px";
          b.style.height = this._height + "px";
        };
        a.prototype.draw = function() {
        };
        a.prototype._almostEq = function(a, b, l) {
          void 0 === l && (l = 10);
          l = Math.pow(10, l);
          return Math.abs(a - b) < 1 / l;
        };
        a.prototype._windowEqRange = function() {
          return this._almostEq(this._windowStart, this._rangeStart) && this._almostEq(this._windowEnd, this._rangeEnd);
        };
        a.prototype._decimalPlaces = function(a) {
          return (+a).toFixed(10).replace(/^-?\d*\.?|0+$/g, "").length;
        };
        a.prototype._toPixelsRelative = function(a) {
          return 0;
        };
        a.prototype._toPixels = function(a) {
          return 0;
        };
        a.prototype._toTimeRelative = function(a) {
          return 0;
        };
        a.prototype._toTime = function(a) {
          return 0;
        };
        a.prototype.onMouseWheel = function(h, b, l) {
          h = this._toTime(h);
          b = this._windowStart;
          var u = this._windowEnd, k = u - b;
          l = Math.max((a.MIN_WINDOW_LEN - k) / k, l);
          this._controller.setWindow(b + (b - h) * l, u + (u - h) * l);
          this.onHoverEnd();
        };
        a.prototype.onMouseDown = function(a, b) {
        };
        a.prototype.onMouseMove = function(a, b) {
        };
        a.prototype.onMouseOver = function(a, b) {
        };
        a.prototype.onMouseOut = function() {
        };
        a.prototype.onDrag = function(a, b, l, h, k, t) {
        };
        a.prototype.onDragEnd = function(a, b, l, h, k, t) {
        };
        a.prototype.onClick = function(a, b) {
        };
        a.prototype.onHoverStart = function(a, b) {
        };
        a.prototype.onHoverEnd = function() {
        };
        a.DRAGHANDLE_WIDTH = 4;
        a.MIN_WINDOW_LEN = .1;
        return a;
      }();
      h.FlameChartBase = a;
    })(h.Profiler || (h.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(r) {
      var a = h.StringUtilities.trimMiddle, p = function(n) {
        function b(a, b) {
          n.call(this, a);
          this._textWidth = {};
          this._minFrameWidthInPixels = 1;
          this._snapshot = b;
          this._kindStyle = Object.create(null);
        }
        __extends(b, n);
        b.prototype.setSize = function(a, b) {
          n.prototype.setSize.call(this, a, b || this._initialized ? 12.5 * this._maxDepth : 100);
        };
        b.prototype.initialize = function(a, b) {
          this._initialized = !0;
          this._maxDepth = this._snapshot.maxDepth;
          this.setRange(a, b, !1);
          this.setWindow(a, b, !1);
          this.setSize(this._width, 12.5 * this._maxDepth);
        };
        b.prototype.destroy = function() {
          n.prototype.destroy.call(this);
          this._snapshot = null;
        };
        b.prototype.draw = function() {
          var a = this._context, b = window.devicePixelRatio;
          h.ColorStyle.reset();
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.bodyBackground(1);
          a.fillRect(0, 0, this._width, this._height);
          this._initialized && this._drawChildren(this._snapshot);
          a.restore();
        };
        b.prototype._drawChildren = function(a, b) {
          void 0 === b && (b = 0);
          var k = a.getChildRange(this._windowStart, this._windowEnd);
          if (k) {
            for (var t = k.startIndex;t <= k.endIndex;t++) {
              var h = a.children[t];
              this._drawFrame(h, b) && this._drawChildren(h, b + 1);
            }
          }
        };
        b.prototype._drawFrame = function(a, b) {
          var k = this._context, t = this._toPixels(a.startTime), q = this._toPixels(a.endTime), m = q - t;
          if (m <= this._minFrameWidthInPixels) {
            return k.fillStyle = this._controller.theme.tabToolbar(1), k.fillRect(t, 12.5 * b, this._minFrameWidthInPixels, 12 + 12.5 * (a.maxDepth - a.depth)), !1;
          }
          0 > t && (q = m + t, t = 0);
          var q = q - t, v = this._kindStyle[a.kind.id];
          v || (v = h.ColorStyle.randomStyle(), v = this._kindStyle[a.kind.id] = {bgColor:v, textColor:h.ColorStyle.contrastStyle(v)});
          k.save();
          k.fillStyle = v.bgColor;
          k.fillRect(t, 12.5 * b, q, 12);
          12 < m && (m = a.kind.name) && m.length && (m = this._prepareText(k, m, q - 4), m.length && (k.fillStyle = v.textColor, k.textBaseline = "bottom", k.fillText(m, t + 2, 12.5 * (b + 1) - 1)));
          k.restore();
          return !0;
        };
        b.prototype._prepareText = function(b, h, k) {
          var t = this._measureWidth(b, h);
          if (k > t) {
            return h;
          }
          for (var t = 3, q = h.length;t < q;) {
            var m = t + q >> 1;
            this._measureWidth(b, a(h, m)) < k ? t = m + 1 : q = m;
          }
          h = a(h, q - 1);
          t = this._measureWidth(b, h);
          return t <= k ? h : "";
        };
        b.prototype._measureWidth = function(a, b) {
          var k = this._textWidth[b];
          k || (k = a.measureText(b).width, this._textWidth[b] = k);
          return k;
        };
        b.prototype._toPixelsRelative = function(a) {
          return a * this._width / (this._windowEnd - this._windowStart);
        };
        b.prototype._toPixels = function(a) {
          return this._toPixelsRelative(a - this._windowStart);
        };
        b.prototype._toTimeRelative = function(a) {
          return a * (this._windowEnd - this._windowStart) / this._width;
        };
        b.prototype._toTime = function(a) {
          return this._toTimeRelative(a) + this._windowStart;
        };
        b.prototype._getFrameAtPosition = function(a, b) {
          var k = this._toTime(a), h = 1 + b / 12.5 | 0;
          if ((k = this._snapshot.query(k)) && k.depth >= h) {
            for (;k && k.depth > h;) {
              k = k.parent;
            }
            return k;
          }
          return null;
        };
        b.prototype.onMouseDown = function(a, b) {
          this._windowEqRange() || (this._mouseController.updateCursor(r.MouseCursor.ALL_SCROLL), this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:1});
        };
        b.prototype.onMouseMove = function(a, b) {
        };
        b.prototype.onMouseOver = function(a, b) {
        };
        b.prototype.onMouseOut = function() {
        };
        b.prototype.onDrag = function(a, b, k, h, q, m) {
          if (a = this._dragInfo) {
            q = this._toTimeRelative(-q), this._controller.setWindow(a.windowStartInitial + q, a.windowEndInitial + q);
          }
        };
        b.prototype.onDragEnd = function(a, b, k, h, q, m) {
          this._dragInfo = null;
          this._mouseController.updateCursor(r.MouseCursor.DEFAULT);
        };
        b.prototype.onClick = function(a, b) {
          this._dragInfo = null;
          this._mouseController.updateCursor(r.MouseCursor.DEFAULT);
        };
        b.prototype.onHoverStart = function(a, b) {
          var k = this._getFrameAtPosition(a, b);
          k && (this._hoveredFrame = k, this._controller.showTooltip(this, k, a, b));
        };
        b.prototype.onHoverEnd = function() {
          this._hoveredFrame && (this._hoveredFrame = null, this._controller.hideTooltip());
        };
        b.prototype.getStatistics = function(a) {
          var b = this._snapshot;
          b.statistics || b.calculateStatistics();
          return b.statistics[a.id];
        };
        return b;
      }(r.FlameChartBase);
      r.FlameChart = p;
    })(p.Profiler || (p.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(r) {
      var a = h.NumberUtilities.clamp;
      (function(a) {
        a[a.OVERLAY = 0] = "OVERLAY";
        a[a.STACK = 1] = "STACK";
        a[a.UNION = 2] = "UNION";
      })(r.FlameChartOverviewMode || (r.FlameChartOverviewMode = {}));
      var p = function(h) {
        function b(a, b) {
          void 0 === b && (b = 1);
          this._mode = b;
          this._overviewCanvasDirty = !0;
          this._overviewCanvas = document.createElement("canvas");
          this._overviewContext = this._overviewCanvas.getContext("2d");
          h.call(this, a);
        }
        __extends(b, h);
        b.prototype.setSize = function(a, b) {
          h.prototype.setSize.call(this, a, b || 64);
        };
        Object.defineProperty(b.prototype, "mode", {set:function(a) {
          this._mode = a;
          this.draw();
        }, enumerable:!0, configurable:!0});
        b.prototype._resetCanvas = function() {
          h.prototype._resetCanvas.call(this);
          this._overviewCanvas.width = this._canvas.width;
          this._overviewCanvas.height = this._canvas.height;
          this._overviewCanvasDirty = !0;
        };
        b.prototype.draw = function() {
          var a = this._context, b = window.devicePixelRatio, k = this._width, h = this._height;
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.bodyBackground(1);
          a.fillRect(0, 0, k, h);
          a.restore();
          this._initialized && (this._overviewCanvasDirty && (this._drawChart(), this._overviewCanvasDirty = !1), a.drawImage(this._overviewCanvas, 0, 0), this._drawSelection());
        };
        b.prototype._drawSelection = function() {
          var a = this._context, b = this._height, k = window.devicePixelRatio, h = this._selection ? this._selection.left : this._toPixels(this._windowStart), q = this._selection ? this._selection.right : this._toPixels(this._windowEnd), m = this._controller.theme;
          a.save();
          a.scale(k, k);
          this._selection ? (a.fillStyle = m.selectionText(.15), a.fillRect(h, 1, q - h, b - 1), a.fillStyle = "rgba(133, 0, 0, 1)", a.fillRect(h + .5, 0, q - h - 1, 4), a.fillRect(h + .5, b - 4, q - h - 1, 4)) : (a.fillStyle = m.bodyBackground(.4), a.fillRect(0, 1, h, b - 1), a.fillRect(q, 1, this._width, b - 1));
          a.beginPath();
          a.moveTo(h, 0);
          a.lineTo(h, b);
          a.moveTo(q, 0);
          a.lineTo(q, b);
          a.lineWidth = .5;
          a.strokeStyle = m.foregroundTextGrey(1);
          a.stroke();
          b = this._selection ? this._toTime(this._selection.left) : this._windowStart;
          k = this._selection ? this._toTime(this._selection.right) : this._windowEnd;
          b = Math.abs(k - b);
          a.fillStyle = m.selectionText(.5);
          a.font = "8px sans-serif";
          a.textBaseline = "alphabetic";
          a.textAlign = "end";
          a.fillText(b.toFixed(2), Math.min(h, q) - 4, 10);
          a.fillText((b / 60).toFixed(2), Math.min(h, q) - 4, 20);
          a.restore();
        };
        b.prototype._drawChart = function() {
          var a = window.devicePixelRatio, b = this._height, k = this._controller.activeProfile, h = 4 * this._width, q = k.totalTime / h, m = this._overviewContext, v = this._controller.theme.blueHighlight(1);
          m.save();
          m.translate(0, a * b);
          var d = -a * b / (k.maxDepth - 1);
          m.scale(a / 4, d);
          m.clearRect(0, 0, h, k.maxDepth - 1);
          1 == this._mode && m.scale(1, 1 / k.snapshotCount);
          for (var f = 0, g = k.snapshotCount;f < g;f++) {
            var c = k.getSnapshotAt(f);
            if (c) {
              var e = null, y = 0;
              m.beginPath();
              m.moveTo(0, 0);
              for (var w = 0;w < h;w++) {
                y = k.startTime + w * q, y = (e = e ? e.queryNext(y) : c.query(y)) ? e.getDepth() - 1 : 0, m.lineTo(w, y);
              }
              m.lineTo(w, 0);
              m.fillStyle = v;
              m.fill();
              1 == this._mode && m.translate(0, -b * a / d);
            }
          }
          m.restore();
        };
        b.prototype._toPixelsRelative = function(a) {
          return a * this._width / (this._rangeEnd - this._rangeStart);
        };
        b.prototype._toPixels = function(a) {
          return this._toPixelsRelative(a - this._rangeStart);
        };
        b.prototype._toTimeRelative = function(a) {
          return a * (this._rangeEnd - this._rangeStart) / this._width;
        };
        b.prototype._toTime = function(a) {
          return this._toTimeRelative(a) + this._rangeStart;
        };
        b.prototype._getDragTargetUnderCursor = function(a, b) {
          if (0 <= b && b < this._height) {
            var k = this._toPixels(this._windowStart), h = this._toPixels(this._windowEnd), q = 2 + r.FlameChartBase.DRAGHANDLE_WIDTH / 2, m = a >= k - q && a <= k + q, v = a >= h - q && a <= h + q;
            if (m && v) {
              return 4;
            }
            if (m) {
              return 2;
            }
            if (v) {
              return 3;
            }
            if (!this._windowEqRange() && a > k + q && a < h - q) {
              return 1;
            }
          }
          return 0;
        };
        b.prototype.onMouseDown = function(a, b) {
          var k = this._getDragTargetUnderCursor(a, b);
          0 === k ? (this._selection = {left:a, right:a}, this.draw()) : (1 === k && this._mouseController.updateCursor(r.MouseCursor.GRABBING), this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:k});
        };
        b.prototype.onMouseMove = function(a, b) {
          var k = r.MouseCursor.DEFAULT, h = this._getDragTargetUnderCursor(a, b);
          0 === h || this._selection || (k = 1 === h ? r.MouseCursor.GRAB : r.MouseCursor.EW_RESIZE);
          this._mouseController.updateCursor(k);
        };
        b.prototype.onMouseOver = function(a, b) {
          this.onMouseMove(a, b);
        };
        b.prototype.onMouseOut = function() {
          this._mouseController.updateCursor(r.MouseCursor.DEFAULT);
        };
        b.prototype.onDrag = function(b, h, k, t, q, m) {
          if (this._selection) {
            this._selection = {left:b, right:a(k, 0, this._width - 1)}, this.draw();
          } else {
            b = this._dragInfo;
            if (4 === b.target) {
              if (0 !== q) {
                b.target = 0 > q ? 2 : 3;
              } else {
                return;
              }
            }
            h = this._windowStart;
            k = this._windowEnd;
            q = this._toTimeRelative(q);
            switch(b.target) {
              case 1:
                h = b.windowStartInitial + q;
                k = b.windowEndInitial + q;
                break;
              case 2:
                h = a(b.windowStartInitial + q, this._rangeStart, k - r.FlameChartBase.MIN_WINDOW_LEN);
                break;
              case 3:
                k = a(b.windowEndInitial + q, h + r.FlameChartBase.MIN_WINDOW_LEN, this._rangeEnd);
                break;
              default:
                return;
            }
            this._controller.setWindow(h, k);
          }
        };
        b.prototype.onDragEnd = function(a, b, k, h, q, m) {
          this._selection && (this._selection = null, this._controller.setWindow(this._toTime(a), this._toTime(k)));
          this._dragInfo = null;
          this.onMouseMove(k, h);
        };
        b.prototype.onClick = function(a, b) {
          this._selection = this._dragInfo = null;
          this._windowEqRange() || (0 === this._getDragTargetUnderCursor(a, b) && this._controller.moveWindowTo(this._toTime(a)), this.onMouseMove(a, b));
          this.draw();
        };
        b.prototype.onHoverStart = function(a, b) {
        };
        b.prototype.onHoverEnd = function() {
        };
        return b;
      }(r.FlameChartBase);
      r.FlameChartOverview = p;
    })(p.Profiler || (p.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(p) {
      var a = h.NumberUtilities.clamp;
      (function(a) {
        a[a.OVERVIEW = 0] = "OVERVIEW";
        a[a.CHART = 1] = "CHART";
      })(p.FlameChartHeaderType || (p.FlameChartHeaderType = {}));
      var x = function(h) {
        function b(a, b) {
          this._type = b;
          h.call(this, a);
        }
        __extends(b, h);
        b.prototype.draw = function() {
          var a = this._context, b = window.devicePixelRatio, k = this._width, h = this._height;
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.tabToolbar(1);
          a.fillRect(0, 0, k, h);
          this._initialized && (0 == this._type ? (b = this._toPixels(this._windowStart), k = this._toPixels(this._windowEnd), a.fillStyle = this._controller.theme.bodyBackground(1), a.fillRect(b, 0, k - b, h), this._drawLabels(this._rangeStart, this._rangeEnd), this._drawDragHandle(b), this._drawDragHandle(k)) : this._drawLabels(this._windowStart, this._windowEnd));
          a.restore();
        };
        b.prototype._drawLabels = function(a, h) {
          var k = this._context, t = this._calculateTickInterval(a, h), q = Math.ceil(a / t) * t, m = 500 <= t, v = m ? 1E3 : 1, d = this._decimalPlaces(t / v), m = m ? "s" : "ms", f = this._toPixels(q), g = this._height / 2, c = this._controller.theme;
          k.lineWidth = 1;
          k.strokeStyle = c.contentTextDarkGrey(.5);
          k.fillStyle = c.contentTextDarkGrey(1);
          k.textAlign = "right";
          k.textBaseline = "middle";
          k.font = "11px sans-serif";
          for (c = this._width + b.TICK_MAX_WIDTH;f < c;) {
            var e = (q / v).toFixed(d) + " " + m;
            k.fillText(e, f - 7, g + 1);
            k.beginPath();
            k.moveTo(f, 0);
            k.lineTo(f, this._height + 1);
            k.closePath();
            k.stroke();
            q += t;
            f = this._toPixels(q);
          }
        };
        b.prototype._calculateTickInterval = function(a, h) {
          var k = (h - a) / (this._width / b.TICK_MAX_WIDTH), t = Math.pow(10, Math.floor(Math.log(k) / Math.LN10)), k = k / t;
          return 5 < k ? 10 * t : 2 < k ? 5 * t : 1 < k ? 2 * t : t;
        };
        b.prototype._drawDragHandle = function(a) {
          var b = this._context;
          b.lineWidth = 2;
          b.strokeStyle = this._controller.theme.bodyBackground(1);
          b.fillStyle = this._controller.theme.foregroundTextGrey(.7);
          this._drawRoundedRect(b, a - p.FlameChartBase.DRAGHANDLE_WIDTH / 2, 1, p.FlameChartBase.DRAGHANDLE_WIDTH, this._height - 2, 2, !0);
        };
        b.prototype._drawRoundedRect = function(a, b, k, h, q, m, v, d) {
          void 0 === v && (v = !0);
          void 0 === d && (d = !0);
          a.beginPath();
          a.moveTo(b + m, k);
          a.lineTo(b + h - m, k);
          a.quadraticCurveTo(b + h, k, b + h, k + m);
          a.lineTo(b + h, k + q - m);
          a.quadraticCurveTo(b + h, k + q, b + h - m, k + q);
          a.lineTo(b + m, k + q);
          a.quadraticCurveTo(b, k + q, b, k + q - m);
          a.lineTo(b, k + m);
          a.quadraticCurveTo(b, k, b + m, k);
          a.closePath();
          v && a.stroke();
          d && a.fill();
        };
        b.prototype._toPixelsRelative = function(a) {
          return a * this._width / (0 === this._type ? this._rangeEnd - this._rangeStart : this._windowEnd - this._windowStart);
        };
        b.prototype._toPixels = function(a) {
          return this._toPixelsRelative(a - (0 === this._type ? this._rangeStart : this._windowStart));
        };
        b.prototype._toTimeRelative = function(a) {
          return a * (0 === this._type ? this._rangeEnd - this._rangeStart : this._windowEnd - this._windowStart) / this._width;
        };
        b.prototype._toTime = function(a) {
          var b = 0 === this._type ? this._rangeStart : this._windowStart;
          return this._toTimeRelative(a) + b;
        };
        b.prototype._getDragTargetUnderCursor = function(a, b) {
          if (0 <= b && b < this._height) {
            if (0 === this._type) {
              var k = this._toPixels(this._windowStart), h = this._toPixels(this._windowEnd), q = 2 + p.FlameChartBase.DRAGHANDLE_WIDTH / 2, k = a >= k - q && a <= k + q, h = a >= h - q && a <= h + q;
              if (k && h) {
                return 4;
              }
              if (k) {
                return 2;
              }
              if (h) {
                return 3;
              }
            }
            if (!this._windowEqRange()) {
              return 1;
            }
          }
          return 0;
        };
        b.prototype.onMouseDown = function(a, b) {
          var k = this._getDragTargetUnderCursor(a, b);
          1 === k && this._mouseController.updateCursor(p.MouseCursor.GRABBING);
          this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:k};
        };
        b.prototype.onMouseMove = function(a, b) {
          var k = p.MouseCursor.DEFAULT, h = this._getDragTargetUnderCursor(a, b);
          0 !== h && (1 !== h ? k = p.MouseCursor.EW_RESIZE : 1 !== h || this._windowEqRange() || (k = p.MouseCursor.GRAB));
          this._mouseController.updateCursor(k);
        };
        b.prototype.onMouseOver = function(a, b) {
          this.onMouseMove(a, b);
        };
        b.prototype.onMouseOut = function() {
          this._mouseController.updateCursor(p.MouseCursor.DEFAULT);
        };
        b.prototype.onDrag = function(b, h, k, t, q, m) {
          b = this._dragInfo;
          if (4 === b.target) {
            if (0 !== q) {
              b.target = 0 > q ? 2 : 3;
            } else {
              return;
            }
          }
          h = this._windowStart;
          k = this._windowEnd;
          q = this._toTimeRelative(q);
          switch(b.target) {
            case 1:
              k = 0 === this._type ? 1 : -1;
              h = b.windowStartInitial + k * q;
              k = b.windowEndInitial + k * q;
              break;
            case 2:
              h = a(b.windowStartInitial + q, this._rangeStart, k - p.FlameChartBase.MIN_WINDOW_LEN);
              break;
            case 3:
              k = a(b.windowEndInitial + q, h + p.FlameChartBase.MIN_WINDOW_LEN, this._rangeEnd);
              break;
            default:
              return;
          }
          this._controller.setWindow(h, k);
        };
        b.prototype.onDragEnd = function(a, b, k, h, q, m) {
          this._dragInfo = null;
          this.onMouseMove(k, h);
        };
        b.prototype.onClick = function(a, b) {
          1 === this._dragInfo.target && this._mouseController.updateCursor(p.MouseCursor.GRAB);
        };
        b.prototype.onHoverStart = function(a, b) {
        };
        b.prototype.onHoverEnd = function() {
        };
        b.TICK_MAX_WIDTH = 75;
        return b;
      }(p.FlameChartBase);
      p.FlameChartHeader = x;
    })(p.Profiler || (p.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(h) {
      (function(a) {
        var h = function() {
          function a(b, h, k, t, q) {
            this.pageLoaded = b;
            this.threadsTotal = h;
            this.threadsLoaded = k;
            this.threadFilesTotal = t;
            this.threadFilesLoaded = q;
          }
          a.prototype.toString = function() {
            return "[" + ["pageLoaded", "threadsTotal", "threadsLoaded", "threadFilesTotal", "threadFilesLoaded"].map(function(a, b, k) {
              return a + ":" + this[a];
            }, this).join(", ") + "]";
          };
          return a;
        }();
        a.TraceLoggerProgressInfo = h;
        var n = function() {
          function b(a) {
            this._baseUrl = a;
            this._threads = [];
            this._progressInfo = null;
          }
          b.prototype.loadPage = function(a, b, k) {
            this._threads = [];
            this._pageLoadCallback = b;
            this._pageLoadProgressCallback = k;
            this._progressInfo = new h(!1, 0, 0, 0, 0);
            this._loadData([a], this._onLoadPage.bind(this));
          };
          Object.defineProperty(b.prototype, "buffers", {get:function() {
            for (var a = [], b = 0, k = this._threads.length;b < k;b++) {
              a.push(this._threads[b].buffer);
            }
            return a;
          }, enumerable:!0, configurable:!0});
          b.prototype._onProgress = function() {
            this._pageLoadProgressCallback && this._pageLoadProgressCallback.call(this, this._progressInfo);
          };
          b.prototype._onLoadPage = function(b) {
            if (b && 1 == b.length) {
              var h = this, k = 0;
              b = b[0];
              var t = b.length;
              this._threads = Array(t);
              this._progressInfo.pageLoaded = !0;
              this._progressInfo.threadsTotal = t;
              for (var q = 0;q < b.length;q++) {
                var m = b[q], v = [m.dict, m.tree];
                m.corrections && v.push(m.corrections);
                this._progressInfo.threadFilesTotal += v.length;
                this._loadData(v, function(b) {
                  return function(f) {
                    f && (f = new a.Thread(f), f.buffer.name = "Thread " + b, h._threads[b] = f);
                    k++;
                    h._progressInfo.threadsLoaded++;
                    h._onProgress();
                    k === t && h._pageLoadCallback.call(h, null, h._threads);
                  };
                }(q), function(a) {
                  h._progressInfo.threadFilesLoaded++;
                  h._onProgress();
                });
              }
              this._onProgress();
            } else {
              this._pageLoadCallback.call(this, "Error loading page.", null);
            }
          };
          b.prototype._loadData = function(a, b, k) {
            var h = 0, q = 0, m = a.length, v = [];
            v.length = m;
            for (var d = 0;d < m;d++) {
              var f = this._baseUrl + a[d], g = /\.tl$/i.test(f), c = new XMLHttpRequest, g = g ? "arraybuffer" : "json";
              c.open("GET", f, !0);
              c.responseType = g;
              c.onload = function(e, c) {
                return function(g) {
                  if ("json" === c) {
                    if (g = this.response, "string" === typeof g) {
                      try {
                        g = JSON.parse(g), v[e] = g;
                      } catch (a) {
                        q++;
                      }
                    } else {
                      v[e] = g;
                    }
                  } else {
                    v[e] = this.response;
                  }
                  ++h;
                  k && k(h);
                  h === m && b(v);
                };
              }(d, g);
              c.send();
            }
          };
          b.colors = "#0044ff #8c4b00 #cc5c33 #ff80c4 #ffbfd9 #ff8800 #8c5e00 #adcc33 #b380ff #bfd9ff #ffaa00 #8c0038 #bf8f30 #f780ff #cc99c9 #aaff00 #000073 #452699 #cc8166 #cca799 #000066 #992626 #cc6666 #ccc299 #ff6600 #526600 #992663 #cc6681 #99ccc2 #ff0066 #520066 #269973 #61994d #739699 #ffcc00 #006629 #269199 #94994d #738299 #ff0000 #590000 #234d8c #8c6246 #7d7399 #ee00ff #00474d #8c2385 #8c7546 #7c8c69 #eeff00 #4d003d #662e1a #62468c #8c6969 #6600ff #4c2900 #1a6657 #8c464f #8c6981 #44ff00 #401100 #1a2466 #663355 #567365 #d90074 #403300 #101d40 #59562d #66614d #cc0000 #002b40 #234010 #4c2626 #4d5e66 #00a3cc #400011 #231040 #4c3626 #464359 #0000bf #331b00 #80e6ff #311a33 #4d3939 #a69b00 #003329 #80ffb2 #331a20 #40303d #00a658 #40ffd9 #ffc480 #ffe1bf #332b26 #8c2500 #9933cc #80fff6 #ffbfbf #303326 #005e8c #33cc47 #b2ff80 #c8bfff #263332 #00708c #cc33ad #ffe680 #f2ffbf #262a33 #388c00 #335ccc #8091ff #bfffd9".split(" ");
          return b;
        }();
        a.TraceLogger = n;
      })(h.TraceLogger || (h.TraceLogger = {}));
    })(h.Profiler || (h.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(h) {
      (function(a) {
        var p;
        (function(a) {
          a[a.START_HI = 0] = "START_HI";
          a[a.START_LO = 4] = "START_LO";
          a[a.STOP_HI = 8] = "STOP_HI";
          a[a.STOP_LO = 12] = "STOP_LO";
          a[a.TEXTID = 16] = "TEXTID";
          a[a.NEXTID = 20] = "NEXTID";
        })(p || (p = {}));
        p = function() {
          function a(b) {
            2 <= b.length && (this._text = b[0], this._data = new DataView(b[1]), this._buffer = new h.TimelineBuffer, this._walkTree(0));
          }
          Object.defineProperty(a.prototype, "buffer", {get:function() {
            return this._buffer;
          }, enumerable:!0, configurable:!0});
          a.prototype._walkTree = function(b) {
            var h = this._data, u = this._buffer;
            do {
              var k = b * a.ITEM_SIZE, t = 4294967295 * h.getUint32(k + 0) + h.getUint32(k + 4), q = 4294967295 * h.getUint32(k + 8) + h.getUint32(k + 12), m = h.getUint32(k + 16), k = h.getUint32(k + 20), v = 1 === (m & 1), m = m >>> 1, m = this._text[m];
              u.enter(m, null, t / 1E6);
              v && this._walkTree(b + 1);
              u.leave(m, null, q / 1E6);
              b = k;
            } while (0 !== b);
          };
          a.ITEM_SIZE = 24;
          return a;
        }();
        a.Thread = p;
      })(h.TraceLogger || (h.TraceLogger = {}));
    })(h.Profiler || (h.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(p) {
      var a = h.NumberUtilities.clamp, x = function() {
        function a() {
          this.length = 0;
          this.lines = [];
          this.format = [];
          this.time = [];
          this.repeat = [];
          this.length = 0;
        }
        a.prototype.append = function(a, b) {
          var k = this.lines;
          0 < k.length && k[k.length - 1] === a ? this.repeat[k.length - 1]++ : (this.lines.push(a), this.repeat.push(1), this.format.push(b ? {backgroundFillStyle:b} : void 0), this.time.push(performance.now()), this.length++);
        };
        a.prototype.get = function(a) {
          return this.lines[a];
        };
        a.prototype.getFormat = function(a) {
          return this.format[a];
        };
        a.prototype.getTime = function(a) {
          return this.time[a];
        };
        a.prototype.getRepeat = function(a) {
          return this.repeat[a];
        };
        return a;
      }();
      p.Buffer = x;
      var n = function() {
        function b(a) {
          this.lineColor = "#2A2A2A";
          this.alternateLineColor = "#262626";
          this.textColor = "#FFFFFF";
          this.selectionColor = "#96C9F3";
          this.selectionTextColor = "#000000";
          this.ratio = 1;
          this.showLineNumbers = !0;
          this.showLineCounter = this.showLineTime = !1;
          this.canvas = a;
          this.canvas.focus();
          this.context = a.getContext("2d", {original:!0});
          this.context.fillStyle = "#FFFFFF";
          this.fontSize = 10;
          this.columnIndex = this.pageIndex = this.lineIndex = 0;
          this.selection = null;
          this.lineHeight = 15;
          this.hasFocus = !1;
          window.addEventListener("resize", this._resizeHandler.bind(this), !1);
          this._resizeHandler();
          this.textMarginBottom = this.textMarginLeft = 4;
          this.refreshFrequency = 0;
          this.buffer = new x;
          a.addEventListener("keydown", function(a) {
            var l = 0;
            switch(a.keyCode) {
              case w:
                this.printHelp();
                break;
              case e:
                this.showLineNumbers = !this.showLineNumbers;
                break;
              case y:
                this.showLineTime = !this.showLineTime;
                break;
              case m:
                l = -1;
                break;
              case v:
                l = 1;
                break;
              case b:
                l = -this.pageLineCount;
                break;
              case k:
                l = this.pageLineCount;
                break;
              case h:
                l = -this.lineIndex;
                break;
              case q:
                l = this.buffer.length - this.lineIndex;
                break;
              case d:
                this.columnIndex -= a.metaKey ? 10 : 1;
                0 > this.columnIndex && (this.columnIndex = 0);
                a.preventDefault();
                break;
              case f:
                this.columnIndex += a.metaKey ? 10 : 1;
                a.preventDefault();
                break;
              case g:
                if (a.metaKey || a.ctrlKey) {
                  this.selection = {start:0, end:this.buffer.length - 1}, a.preventDefault();
                }
                break;
              case c:
              ;
              case I:
                if (a.metaKey || a.ctrlKey) {
                  var n = "";
                  if (this.selection) {
                    for (var T = this.selection.start;T <= this.selection.end;T++) {
                      n += this.buffer.get(T) + "\n";
                    }
                  } else {
                    n = this.buffer.get(this.lineIndex);
                  }
                  a.keyCode === c ? alert(n) : window.open(URL.createObjectURL(new Blob([n], {type:"text/plain"})), "_blank");
                }
              ;
            }
            a.metaKey && (l *= this.pageLineCount);
            l && (this.scroll(l), a.preventDefault());
            l && a.shiftKey ? this.selection ? this.lineIndex > this.selection.start ? this.selection.end = this.lineIndex : this.selection.start = this.lineIndex : 0 < l ? this.selection = {start:this.lineIndex - l, end:this.lineIndex} : 0 > l && (this.selection = {start:this.lineIndex, end:this.lineIndex - l}) : l && (this.selection = null);
            this.paint();
          }.bind(this), !1);
          a.addEventListener("focus", function(e) {
            this.hasFocus = !0;
          }.bind(this), !1);
          a.addEventListener("blur", function(e) {
            this.hasFocus = !1;
          }.bind(this), !1);
          var b = 33, k = 34, h = 36, q = 35, m = 38, v = 40, d = 37, f = 39, g = 65, c = 67, e = 78, y = 84, w = 72, I = 83;
        }
        b.prototype.printHelp = function() {
          var a = this;
          "h - help;n - turn on/off line numbers;t - turn on/off line time;arrow_keys - navigation;cmd/ctrl+a - select all;cmd/ctrl+c - copy/alert selection;cmd/ctrl+s - open selection in new tab;shift+arrow_keys - selection".split(";").forEach(function(b) {
            return a.buffer.append(b, "#002000");
          });
        };
        b.prototype.resize = function() {
          this._resizeHandler();
        };
        b.prototype._resizeHandler = function() {
          var a = this.canvas.parentElement, b = a.clientWidth, a = a.clientHeight && a.clientHeight - 1, k = window.devicePixelRatio || 1;
          1 !== k ? (this.ratio = k / 1, this.canvas.width = b * this.ratio, this.canvas.height = a * this.ratio, this.canvas.style.width = b + "px", this.canvas.style.height = a + "px") : (this.ratio = 1, this.canvas.width = b, this.canvas.height = a);
          this.pageLineCount = Math.floor(this.canvas.height / this.lineHeight);
        };
        b.prototype.gotoLine = function(b) {
          this.lineIndex = a(b, 0, this.buffer.length - 1);
        };
        b.prototype.scrollIntoView = function() {
          this.lineIndex < this.pageIndex ? this.pageIndex = this.lineIndex : this.lineIndex >= this.pageIndex + this.pageLineCount && (this.pageIndex = this.lineIndex - this.pageLineCount + 1);
        };
        b.prototype.scroll = function(a) {
          this.gotoLine(this.lineIndex + a);
          this.scrollIntoView();
        };
        b.prototype.paint = function() {
          var a = this.pageLineCount;
          this.pageIndex + a > this.buffer.length && (a = this.buffer.length - this.pageIndex);
          var b = this.textMarginLeft, k = b + (this.showLineNumbers ? 5 * (String(this.buffer.length).length + 2) : 0), h = k + (this.showLineTime ? 40 : 10), q = h + 25;
          this.context.font = this.fontSize + 'px Consolas, "Liberation Mono", Courier, monospace';
          this.context.setTransform(this.ratio, 0, 0, this.ratio, 0, 0);
          for (var m = this.canvas.width, v = this.lineHeight, d = 0;d < a;d++) {
            var f = d * this.lineHeight, g = this.pageIndex + d, c = this.buffer.get(g), e = this.buffer.getFormat(g), y = this.buffer.getRepeat(g), w = 1 < g ? this.buffer.getTime(g) - this.buffer.getTime(0) : 0;
            this.context.fillStyle = g % 2 ? this.lineColor : this.alternateLineColor;
            e && e.backgroundFillStyle && (this.context.fillStyle = e.backgroundFillStyle);
            this.context.fillRect(0, f, m, v);
            this.context.fillStyle = this.selectionTextColor;
            this.context.fillStyle = this.textColor;
            this.selection && g >= this.selection.start && g <= this.selection.end && (this.context.fillStyle = this.selectionColor, this.context.fillRect(0, f, m, v), this.context.fillStyle = this.selectionTextColor);
            this.hasFocus && g === this.lineIndex && (this.context.fillStyle = this.selectionColor, this.context.fillRect(0, f, m, v), this.context.fillStyle = this.selectionTextColor);
            0 < this.columnIndex && (c = c.substring(this.columnIndex));
            f = (d + 1) * this.lineHeight - this.textMarginBottom;
            this.showLineNumbers && this.context.fillText(String(g), b, f);
            this.showLineTime && this.context.fillText(w.toFixed(1).padLeft(" ", 6), k, f);
            1 < y && this.context.fillText(String(y).padLeft(" ", 3), h, f);
            this.context.fillText(c, q, f);
          }
        };
        b.prototype.refreshEvery = function(a) {
          function b() {
            k.paint();
            k.refreshFrequency && setTimeout(b, k.refreshFrequency);
          }
          var k = this;
          this.refreshFrequency = a;
          k.refreshFrequency && setTimeout(b, k.refreshFrequency);
        };
        b.prototype.isScrolledToBottom = function() {
          return this.lineIndex === this.buffer.length - 1;
        };
        return b;
      }();
      p.Terminal = n;
    })(p.Terminal || (p.Terminal = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(h) {
      var a = function() {
        function a(h) {
          this._lastWeightedTime = this._lastTime = this._index = 0;
          this._gradient = "#FF0000 #FF1100 #FF2300 #FF3400 #FF4600 #FF5700 #FF6900 #FF7B00 #FF8C00 #FF9E00 #FFAF00 #FFC100 #FFD300 #FFE400 #FFF600 #F7FF00 #E5FF00 #D4FF00 #C2FF00 #B0FF00 #9FFF00 #8DFF00 #7CFF00 #6AFF00 #58FF00 #47FF00 #35FF00 #24FF00 #12FF00 #00FF00".split(" ");
          this._container = h;
          this._canvas = document.createElement("canvas");
          this._container.appendChild(this._canvas);
          this._context = this._canvas.getContext("2d");
          this._listenForContainerSizeChanges();
        }
        a.prototype._listenForContainerSizeChanges = function() {
          var a = this._containerWidth, b = this._containerHeight;
          this._onContainerSizeChanged();
          var h = this;
          setInterval(function() {
            if (a !== h._containerWidth || b !== h._containerHeight) {
              h._onContainerSizeChanged(), a = h._containerWidth, b = h._containerHeight;
            }
          }, 10);
        };
        a.prototype._onContainerSizeChanged = function() {
          var a = this._containerWidth, b = this._containerHeight, h = window.devicePixelRatio || 1;
          1 !== h ? (this._ratio = h / 1, this._canvas.width = a * this._ratio, this._canvas.height = b * this._ratio, this._canvas.style.width = a + "px", this._canvas.style.height = b + "px") : (this._ratio = 1, this._canvas.width = a, this._canvas.height = b);
        };
        Object.defineProperty(a.prototype, "_containerWidth", {get:function() {
          return this._container.clientWidth;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "_containerHeight", {get:function() {
          return this._container.clientHeight;
        }, enumerable:!0, configurable:!0});
        a.prototype.tickAndRender = function(a, b) {
          void 0 === a && (a = !1);
          void 0 === b && (b = 0);
          if (0 === this._lastTime) {
            this._lastTime = performance.now();
          } else {
            var h = 1 * (performance.now() - this._lastTime) + 0 * this._lastWeightedTime, u = this._context, k = 2 * this._ratio, t = 30 * this._ratio, q = performance;
            q.memory && (t += 30 * this._ratio);
            var m = (this._canvas.width - t) / (k + 1) | 0, v = this._index++;
            this._index > m && (this._index = 0);
            m = this._canvas.height;
            u.globalAlpha = 1;
            u.fillStyle = "black";
            u.fillRect(t + v * (k + 1), 0, 4 * k, this._canvas.height);
            var d = Math.min(1E3 / 60 / h, 1);
            u.fillStyle = "#00FF00";
            u.globalAlpha = a ? .5 : 1;
            d = m / 2 * d | 0;
            u.fillRect(t + v * (k + 1), m - d, k, d);
            b && (d = Math.min(1E3 / 240 / b, 1), u.fillStyle = "#FF6347", d = m / 2 * d | 0, u.fillRect(t + v * (k + 1), m / 2 - d, k, d));
            0 === v % 16 && (u.globalAlpha = 1, u.fillStyle = "black", u.fillRect(0, 0, t, this._canvas.height), u.fillStyle = "white", u.font = 8 * this._ratio + "px Arial", u.textBaseline = "middle", k = (1E3 / h).toFixed(0), b && (k += " " + b.toFixed(0)), q.memory && (k += " " + (q.memory.usedJSHeapSize / 1024 / 1024).toFixed(2)), u.fillText(k, 2 * this._ratio, this._containerHeight / 2 * this._ratio));
            this._lastTime = performance.now();
            this._lastWeightedTime = h;
          }
        };
        return a;
      }();
      h.FPS = a;
    })(h.Mini || (h.Mini = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
console.timeEnd("Load Shared Dependencies");
console.time("Load GFX Dependencies");
(function(h) {
  (function(p) {
    function r(e, c, a) {
      return u && a ? "string" === typeof c ? (e = h.ColorUtilities.cssStyleToRGBA(c), h.ColorUtilities.rgbaToCSSStyle(a.transformRGBA(e))) : c instanceof CanvasGradient && c._template ? c._template.createCanvasGradient(e, a) : c : c;
    }
    var a = h.NumberUtilities.clamp;
    (function(e) {
      e[e.None = 0] = "None";
      e[e.Brief = 1] = "Brief";
      e[e.Verbose = 2] = "Verbose";
    })(p.TraceLevel || (p.TraceLevel = {}));
    var x = h.Metrics.Counter.instance;
    p.frameCounter = new h.Metrics.Counter(!0);
    p.traceLevel = 2;
    p.writer = null;
    p.frameCount = function(e) {
      x.count(e);
      p.frameCounter.count(e);
    };
    p.timelineBuffer = new h.Tools.Profiler.TimelineBuffer("GFX");
    p.enterTimeline = function(e, c) {
    };
    p.leaveTimeline = function(e, c) {
    };
    var n = null, b = null, l = null, u = !0;
    u && "undefined" !== typeof CanvasRenderingContext2D && (n = CanvasGradient.prototype.addColorStop, b = CanvasRenderingContext2D.prototype.createLinearGradient, l = CanvasRenderingContext2D.prototype.createRadialGradient, CanvasRenderingContext2D.prototype.createLinearGradient = function(e, c, a, g) {
      return (new t(e, c, a, g)).createCanvasGradient(this, null);
    }, CanvasRenderingContext2D.prototype.createRadialGradient = function(e, c, a, g, b, f) {
      return (new q(e, c, a, g, b, f)).createCanvasGradient(this, null);
    }, CanvasGradient.prototype.addColorStop = function(e, c) {
      n.call(this, e, c);
      this._template.addColorStop(e, c);
    });
    var k = function() {
      return function(e, c) {
        this.offset = e;
        this.color = c;
      };
    }(), t = function() {
      function e(c, a, g, b) {
        this.x0 = c;
        this.y0 = a;
        this.x1 = g;
        this.y1 = b;
        this.colorStops = [];
      }
      e.prototype.addColorStop = function(e, c) {
        this.colorStops.push(new k(e, c));
      };
      e.prototype.createCanvasGradient = function(e, c) {
        for (var a = b.call(e, this.x0, this.y0, this.x1, this.y1), g = this.colorStops, f = 0;f < g.length;f++) {
          var d = g[f], w = d.offset, d = d.color, d = c ? r(e, d, c) : d;
          n.call(a, w, d);
        }
        a._template = this;
        a._transform = this._transform;
        return a;
      };
      return e;
    }(), q = function() {
      function e(c, a, g, b, f, d) {
        this.x0 = c;
        this.y0 = a;
        this.r0 = g;
        this.x1 = b;
        this.y1 = f;
        this.r1 = d;
        this.colorStops = [];
      }
      e.prototype.addColorStop = function(e, c) {
        this.colorStops.push(new k(e, c));
      };
      e.prototype.createCanvasGradient = function(e, c) {
        for (var a = l.call(e, this.x0, this.y0, this.r0, this.x1, this.y1, this.r1), g = this.colorStops, b = 0;b < g.length;b++) {
          var f = g[b], d = f.offset, f = f.color, f = c ? r(e, f, c) : f;
          n.call(a, d, f);
        }
        a._template = this;
        a._transform = this._transform;
        return a;
      };
      return e;
    }(), m;
    (function(e) {
      e[e.ClosePath = 1] = "ClosePath";
      e[e.MoveTo = 2] = "MoveTo";
      e[e.LineTo = 3] = "LineTo";
      e[e.QuadraticCurveTo = 4] = "QuadraticCurveTo";
      e[e.BezierCurveTo = 5] = "BezierCurveTo";
      e[e.ArcTo = 6] = "ArcTo";
      e[e.Rect = 7] = "Rect";
      e[e.Arc = 8] = "Arc";
      e[e.Save = 9] = "Save";
      e[e.Restore = 10] = "Restore";
      e[e.Transform = 11] = "Transform";
    })(m || (m = {}));
    var v = function() {
      function e(c) {
        this._commands = new Uint8Array(e._arrayBufferPool.acquire(8), 0, 8);
        this._commandPosition = 0;
        this._data = new Float64Array(e._arrayBufferPool.acquire(8 * Float64Array.BYTES_PER_ELEMENT), 0, 8);
        this._dataPosition = 0;
        c instanceof e && this.addPath(c);
      }
      e._apply = function(e, c) {
        var a = e._commands, g = e._data, b = 0, f = 0;
        c.beginPath();
        for (var d = e._commandPosition;b < d;) {
          switch(a[b++]) {
            case 1:
              c.closePath();
              break;
            case 2:
              c.moveTo(g[f++], g[f++]);
              break;
            case 3:
              c.lineTo(g[f++], g[f++]);
              break;
            case 4:
              c.quadraticCurveTo(g[f++], g[f++], g[f++], g[f++]);
              break;
            case 5:
              c.bezierCurveTo(g[f++], g[f++], g[f++], g[f++], g[f++], g[f++]);
              break;
            case 6:
              c.arcTo(g[f++], g[f++], g[f++], g[f++], g[f++]);
              break;
            case 7:
              c.rect(g[f++], g[f++], g[f++], g[f++]);
              break;
            case 8:
              c.arc(g[f++], g[f++], g[f++], g[f++], g[f++], !!g[f++]);
              break;
            case 9:
              c.save();
              break;
            case 10:
              c.restore();
              break;
            case 11:
              c.transform(g[f++], g[f++], g[f++], g[f++], g[f++], g[f++]);
          }
        }
      };
      e.prototype._ensureCommandCapacity = function(c) {
        this._commands = e._arrayBufferPool.ensureUint8ArrayLength(this._commands, c);
      };
      e.prototype._ensureDataCapacity = function(c) {
        this._data = e._arrayBufferPool.ensureFloat64ArrayLength(this._data, c);
      };
      e.prototype._writeCommand = function(e) {
        this._commandPosition >= this._commands.length && this._ensureCommandCapacity(this._commandPosition + 1);
        this._commands[this._commandPosition++] = e;
      };
      e.prototype._writeData = function(e, c, g, a, b, f) {
        var d = arguments.length;
        this._dataPosition + d >= this._data.length && this._ensureDataCapacity(this._dataPosition + d);
        var w = this._data, k = this._dataPosition;
        w[k] = e;
        w[k + 1] = c;
        2 < d && (w[k + 2] = g, w[k + 3] = a, 4 < d && (w[k + 4] = b, 6 === d && (w[k + 5] = f)));
        this._dataPosition += d;
      };
      e.prototype.closePath = function() {
        this._writeCommand(1);
      };
      e.prototype.moveTo = function(e, c) {
        this._writeCommand(2);
        this._writeData(e, c);
      };
      e.prototype.lineTo = function(e, c) {
        this._writeCommand(3);
        this._writeData(e, c);
      };
      e.prototype.quadraticCurveTo = function(e, c, g, a) {
        this._writeCommand(4);
        this._writeData(e, c, g, a);
      };
      e.prototype.bezierCurveTo = function(e, c, g, a, b, f) {
        this._writeCommand(5);
        this._writeData(e, c, g, a, b, f);
      };
      e.prototype.arcTo = function(e, c, g, a, b) {
        this._writeCommand(6);
        this._writeData(e, c, g, a, b);
      };
      e.prototype.rect = function(e, c, g, a) {
        this._writeCommand(7);
        this._writeData(e, c, g, a);
      };
      e.prototype.arc = function(e, c, g, a, b, f) {
        this._writeCommand(8);
        this._writeData(e, c, g, a, b, +f);
      };
      e.prototype.addPath = function(e, c) {
        c && (this._writeCommand(9), this._writeCommand(11), this._writeData(c.a, c.b, c.c, c.d, c.e, c.f));
        var g = this._commandPosition + e._commandPosition;
        g >= this._commands.length && this._ensureCommandCapacity(g);
        for (var a = this._commands, b = e._commands, f = this._commandPosition, d = 0;f < g;f++) {
          a[f] = b[d++];
        }
        this._commandPosition = g;
        g = this._dataPosition + e._dataPosition;
        g >= this._data.length && this._ensureDataCapacity(g);
        a = this._data;
        b = e._data;
        f = this._dataPosition;
        for (d = 0;f < g;f++) {
          a[f] = b[d++];
        }
        this._dataPosition = g;
        c && this._writeCommand(10);
      };
      e._arrayBufferPool = new h.ArrayBufferPool;
      return e;
    }();
    p.Path = v;
    if ("undefined" !== typeof CanvasRenderingContext2D && ("undefined" === typeof Path2D || !Path2D.prototype.addPath)) {
      var d = CanvasRenderingContext2D.prototype.fill;
      CanvasRenderingContext2D.prototype.fill = function(e, c) {
        arguments.length && (e instanceof v ? v._apply(e, this) : c = e);
        c ? d.call(this, c) : d.call(this);
      };
      var f = CanvasRenderingContext2D.prototype.stroke;
      CanvasRenderingContext2D.prototype.stroke = function(e, c) {
        arguments.length && (e instanceof v ? v._apply(e, this) : c = e);
        c ? f.call(this, c) : f.call(this);
      };
      var g = CanvasRenderingContext2D.prototype.clip;
      CanvasRenderingContext2D.prototype.clip = function(e, c) {
        arguments.length && (e instanceof v ? v._apply(e, this) : c = e);
        c ? g.call(this, c) : g.call(this);
      };
      window.Path2D = v;
    }
    if ("undefined" !== typeof CanvasPattern && Path2D.prototype.addPath) {
      m = function(e) {
        this._transform = e;
        this._template && (this._template._transform = e);
      };
      CanvasPattern.prototype.setTransform || (CanvasPattern.prototype.setTransform = m);
      CanvasGradient.prototype.setTransform || (CanvasGradient.prototype.setTransform = m);
      var c = CanvasRenderingContext2D.prototype.fill, e = CanvasRenderingContext2D.prototype.stroke;
      CanvasRenderingContext2D.prototype.fill = function(e, g) {
        var a = !!this.fillStyle._transform;
        if ((this.fillStyle instanceof CanvasPattern || this.fillStyle instanceof CanvasGradient) && a && e instanceof Path2D) {
          var a = this.fillStyle._transform, b;
          try {
            b = a.inverse();
          } catch (f) {
            b = a = p.Geometry.Matrix.createIdentitySVGMatrix();
          }
          this.transform(a.a, a.b, a.c, a.d, a.e, a.f);
          a = new Path2D;
          a.addPath(e, b);
          c.call(this, a, g);
          this.transform(b.a, b.b, b.c, b.d, b.e, b.f);
        } else {
          0 === arguments.length ? c.call(this) : 1 === arguments.length ? c.call(this, e) : 2 === arguments.length && c.call(this, e, g);
        }
      };
      CanvasRenderingContext2D.prototype.stroke = function(c) {
        var g = !!this.strokeStyle._transform;
        if ((this.strokeStyle instanceof CanvasPattern || this.strokeStyle instanceof CanvasGradient) && g && c instanceof Path2D) {
          var a = this.strokeStyle._transform, g = a.inverse();
          this.transform(a.a, a.b, a.c, a.d, a.e, a.f);
          a = new Path2D;
          a.addPath(c, g);
          var b = this.lineWidth;
          this.lineWidth *= (g.a + g.d) / 2;
          e.call(this, a);
          this.transform(g.a, g.b, g.c, g.d, g.e, g.f);
          this.lineWidth = b;
        } else {
          0 === arguments.length ? e.call(this) : 1 === arguments.length && e.call(this, c);
        }
      };
    }
    "undefined" !== typeof CanvasRenderingContext2D && function() {
      function e() {
        return p.Geometry.Matrix.createSVGMatrixFromArray(this.mozCurrentTransform);
      }
      var c = "currentTransform" in CanvasRenderingContext2D.prototype;
      CanvasRenderingContext2D.prototype.flashStroke = function(e, g) {
        if (c) {
          var b = this.currentTransform, f = new Path2D;
          f.addPath(e, b);
          var d = this.lineWidth;
          this.setTransform(1, 0, 0, 1, 0, 0);
          switch(g) {
            case 1:
              var w = Math.sqrt((b.a + b.c) * (b.a + b.c) + (b.d + b.b) * (b.d + b.b)) * Math.SQRT1_2;
              this.lineWidth = a(d * w, 1, 1024);
              break;
            case 2:
              this.lineWidth = a(d * (b.d + b.b), 1, 1024);
              break;
            case 3:
              this.lineWidth = a(d * (b.a + b.c), 1, 1024);
          }
          this.stroke(f);
          this.setTransform(b.a, b.b, b.c, b.d, b.e, b.f);
          this.lineWidth = d;
        } else {
          this.stroke(e);
        }
      };
      if (!c) {
        if ("mozCurrentTransform" in CanvasRenderingContext2D.prototype) {
          Object.defineProperty(CanvasRenderingContext2D.prototype, "currentTransform", {get:e}), c = !0;
        } else {
          var g = CanvasRenderingContext2D.prototype.setTransform;
          CanvasRenderingContext2D.prototype.setTransform = function(e, c, a, b, f, d) {
            var w = this.currentTransform;
            w.a = e;
            w.b = c;
            w.c = a;
            w.d = b;
            w.e = f;
            w.f = d;
            g.call(this, e, c, a, b, f, d);
          };
          Object.defineProperty(CanvasRenderingContext2D.prototype, "currentTransform", {get:function() {
            return this._currentTransform || (this._currentTransform = p.Geometry.Matrix.createIdentitySVGMatrix());
          }});
        }
      }
    }();
    if ("undefined" !== typeof CanvasRenderingContext2D && void 0 === CanvasRenderingContext2D.prototype.globalColorMatrix) {
      var y = CanvasRenderingContext2D.prototype.fill, w = CanvasRenderingContext2D.prototype.stroke, I = CanvasRenderingContext2D.prototype.fillText, da = CanvasRenderingContext2D.prototype.strokeText;
      Object.defineProperty(CanvasRenderingContext2D.prototype, "globalColorMatrix", {get:function() {
        return this._globalColorMatrix ? this._globalColorMatrix.clone() : null;
      }, set:function(e) {
        e ? this._globalColorMatrix ? this._globalColorMatrix.set(e) : this._globalColorMatrix = e.clone() : this._globalColorMatrix = null;
      }, enumerable:!0, configurable:!0});
      CanvasRenderingContext2D.prototype.fill = function(e, c) {
        var g = null;
        this._globalColorMatrix && (g = this.fillStyle, this.fillStyle = r(this, this.fillStyle, this._globalColorMatrix));
        0 === arguments.length ? y.call(this) : 1 === arguments.length ? y.call(this, e) : 2 === arguments.length && y.call(this, e, c);
        g && (this.fillStyle = g);
      };
      CanvasRenderingContext2D.prototype.stroke = function(e, c) {
        var g = null;
        this._globalColorMatrix && (g = this.strokeStyle, this.strokeStyle = r(this, this.strokeStyle, this._globalColorMatrix));
        0 === arguments.length ? w.call(this) : 1 === arguments.length && w.call(this, e);
        g && (this.strokeStyle = g);
      };
      CanvasRenderingContext2D.prototype.fillText = function(e, c, g, a) {
        var b = null;
        this._globalColorMatrix && (b = this.fillStyle, this.fillStyle = r(this, this.fillStyle, this._globalColorMatrix));
        3 === arguments.length ? I.call(this, e, c, g) : 4 === arguments.length ? I.call(this, e, c, g, a) : h.Debug.unexpected();
        b && (this.fillStyle = b);
      };
      CanvasRenderingContext2D.prototype.strokeText = function(e, c, g, a) {
        var b = null;
        this._globalColorMatrix && (b = this.strokeStyle, this.strokeStyle = r(this, this.strokeStyle, this._globalColorMatrix));
        3 === arguments.length ? da.call(this, e, c, g) : 4 === arguments.length ? da.call(this, e, c, g, a) : h.Debug.unexpected();
        b && (this.strokeStyle = b);
      };
    }
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    var r = function() {
      return function(a, h, n, b) {
        this.dataURL = a;
        this.w = h;
        this.h = n;
        this.pixelRatio = b;
      };
    }();
    h.ScreenShot = r;
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  var p = function() {
    function h() {
      this._count = 0;
      this._head = this._tail = null;
    }
    Object.defineProperty(h.prototype, "count", {get:function() {
      return this._count;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(h.prototype, "head", {get:function() {
      return this._head;
    }, enumerable:!0, configurable:!0});
    h.prototype._unshift = function(a) {
      0 === this._count ? this._head = this._tail = a : (a.next = this._head, this._head = a.next.previous = a);
      this._count++;
    };
    h.prototype._remove = function(a) {
      a === this._head && a === this._tail ? this._head = this._tail = null : a === this._head ? (this._head = a.next, this._head.previous = null) : a == this._tail ? (this._tail = a.previous, this._tail.next = null) : (a.previous.next = a.next, a.next.previous = a.previous);
      a.previous = a.next = null;
      this._count--;
    };
    h.prototype.use = function(a) {
      this._head !== a && ((a.next || a.previous || this._tail === a) && this._remove(a), this._unshift(a));
    };
    h.prototype.pop = function() {
      if (!this._tail) {
        return null;
      }
      var a = this._tail;
      this._remove(a);
      return a;
    };
    h.prototype.visit = function(a, h) {
      void 0 === h && (h = !0);
      for (var n = h ? this._head : this._tail;n && a(n);) {
        n = h ? n.next : n.previous;
      }
    };
    return h;
  }();
  h.LRUList = p;
})(Shumway || (Shumway = {}));
var Shumway$$inline_39 = Shumway || (Shumway = {}), GFX$$inline_40 = Shumway$$inline_39.GFX || (Shumway$$inline_39.GFX = {}), Option$$inline_41 = Shumway$$inline_39.Options.Option, OptionSet$$inline_42 = Shumway$$inline_39.Options.OptionSet, shumwayOptions$$inline_43 = Shumway$$inline_39.Settings.shumwayOptions, rendererOptions$$inline_44 = shumwayOptions$$inline_43.register(new OptionSet$$inline_42("Renderer Options"));
GFX$$inline_40.imageUpdateOption = rendererOptions$$inline_44.register(new Option$$inline_41("", "imageUpdate", "boolean", !0, "Enable image updating."));
GFX$$inline_40.imageConvertOption = rendererOptions$$inline_44.register(new Option$$inline_41("", "imageConvert", "boolean", !0, "Enable image conversion."));
GFX$$inline_40.stageOptions = shumwayOptions$$inline_43.register(new OptionSet$$inline_42("Stage Renderer Options"));
GFX$$inline_40.forcePaint = GFX$$inline_40.stageOptions.register(new Option$$inline_41("", "forcePaint", "boolean", !1, "Force repainting."));
GFX$$inline_40.ignoreViewport = GFX$$inline_40.stageOptions.register(new Option$$inline_41("", "ignoreViewport", "boolean", !1, "Cull elements outside of the viewport."));
GFX$$inline_40.viewportLoupeDiameter = GFX$$inline_40.stageOptions.register(new Option$$inline_41("", "viewportLoupeDiameter", "number", 256, "Size of the viewport loupe.", {range:{min:1, max:1024, step:1}}));
GFX$$inline_40.disableClipping = GFX$$inline_40.stageOptions.register(new Option$$inline_41("", "disableClipping", "boolean", !1, "Disable clipping."));
GFX$$inline_40.debugClipping = GFX$$inline_40.stageOptions.register(new Option$$inline_41("", "debugClipping", "boolean", !1, "Disable clipping."));
GFX$$inline_40.hud = GFX$$inline_40.stageOptions.register(new Option$$inline_41("", "hud", "boolean", !1, "Enable HUD."));
var webGLOptions$$inline_45 = GFX$$inline_40.stageOptions.register(new OptionSet$$inline_42("WebGL Options"));
GFX$$inline_40.perspectiveCamera = webGLOptions$$inline_45.register(new Option$$inline_41("", "pc", "boolean", !1, "Use perspective camera."));
GFX$$inline_40.perspectiveCameraFOV = webGLOptions$$inline_45.register(new Option$$inline_41("", "pcFOV", "number", 60, "Perspective Camera FOV."));
GFX$$inline_40.perspectiveCameraDistance = webGLOptions$$inline_45.register(new Option$$inline_41("", "pcDistance", "number", 2, "Perspective Camera Distance."));
GFX$$inline_40.perspectiveCameraAngle = webGLOptions$$inline_45.register(new Option$$inline_41("", "pcAngle", "number", 0, "Perspective Camera Angle."));
GFX$$inline_40.perspectiveCameraAngleRotate = webGLOptions$$inline_45.register(new Option$$inline_41("", "pcRotate", "boolean", !1, "Rotate Use perspective camera."));
GFX$$inline_40.perspectiveCameraSpacing = webGLOptions$$inline_45.register(new Option$$inline_41("", "pcSpacing", "number", .01, "Element Spacing."));
GFX$$inline_40.perspectiveCameraSpacingInflate = webGLOptions$$inline_45.register(new Option$$inline_41("", "pcInflate", "boolean", !1, "Rotate Use perspective camera."));
GFX$$inline_40.drawTiles = webGLOptions$$inline_45.register(new Option$$inline_41("", "drawTiles", "boolean", !1, "Draw WebGL Tiles"));
GFX$$inline_40.drawSurfaces = webGLOptions$$inline_45.register(new Option$$inline_41("", "drawSurfaces", "boolean", !1, "Draw WebGL Surfaces."));
GFX$$inline_40.drawSurface = webGLOptions$$inline_45.register(new Option$$inline_41("", "drawSurface", "number", -1, "Draw WebGL Surface #"));
GFX$$inline_40.drawElements = webGLOptions$$inline_45.register(new Option$$inline_41("", "drawElements", "boolean", !0, "Actually call gl.drawElements. This is useful to test if the GPU is the bottleneck."));
GFX$$inline_40.disableSurfaceUploads = webGLOptions$$inline_45.register(new Option$$inline_41("", "disableSurfaceUploads", "boolean", !1, "Disable surface uploads."));
GFX$$inline_40.premultipliedAlpha = webGLOptions$$inline_45.register(new Option$$inline_41("", "premultipliedAlpha", "boolean", !1, "Set the premultipliedAlpha flag on getContext()."));
GFX$$inline_40.unpackPremultiplyAlpha = webGLOptions$$inline_45.register(new Option$$inline_41("", "unpackPremultiplyAlpha", "boolean", !0, "Use UNPACK_PREMULTIPLY_ALPHA_WEBGL in pixelStorei."));
var factorChoices$$inline_46 = {ZERO:0, ONE:1, SRC_COLOR:768, ONE_MINUS_SRC_COLOR:769, DST_COLOR:774, ONE_MINUS_DST_COLOR:775, SRC_ALPHA:770, ONE_MINUS_SRC_ALPHA:771, DST_ALPHA:772, ONE_MINUS_DST_ALPHA:773, SRC_ALPHA_SATURATE:776, CONSTANT_COLOR:32769, ONE_MINUS_CONSTANT_COLOR:32770, CONSTANT_ALPHA:32771, ONE_MINUS_CONSTANT_ALPHA:32772};
GFX$$inline_40.sourceBlendFactor = webGLOptions$$inline_45.register(new Option$$inline_41("", "sourceBlendFactor", "number", factorChoices$$inline_46.ONE, "", {choices:factorChoices$$inline_46}));
GFX$$inline_40.destinationBlendFactor = webGLOptions$$inline_45.register(new Option$$inline_41("", "destinationBlendFactor", "number", factorChoices$$inline_46.ONE_MINUS_SRC_ALPHA, "", {choices:factorChoices$$inline_46}));
var canvas2DOptions$$inline_47 = GFX$$inline_40.stageOptions.register(new OptionSet$$inline_42("Canvas2D Options"));
GFX$$inline_40.clipDirtyRegions = canvas2DOptions$$inline_47.register(new Option$$inline_41("", "clipDirtyRegions", "boolean", !1, "Clip dirty regions."));
GFX$$inline_40.clipCanvas = canvas2DOptions$$inline_47.register(new Option$$inline_41("", "clipCanvas", "boolean", !1, "Clip Regions."));
GFX$$inline_40.cull = canvas2DOptions$$inline_47.register(new Option$$inline_41("", "cull", "boolean", !1, "Enable culling."));
GFX$$inline_40.snapToDevicePixels = canvas2DOptions$$inline_47.register(new Option$$inline_41("", "snapToDevicePixels", "boolean", !1, ""));
GFX$$inline_40.imageSmoothing = canvas2DOptions$$inline_47.register(new Option$$inline_41("", "imageSmoothing", "boolean", !1, ""));
GFX$$inline_40.masking = canvas2DOptions$$inline_47.register(new Option$$inline_41("", "masking", "boolean", !0, "Composite Mask."));
GFX$$inline_40.blending = canvas2DOptions$$inline_47.register(new Option$$inline_41("", "blending", "boolean", !0, ""));
GFX$$inline_40.debugLayers = canvas2DOptions$$inline_47.register(new Option$$inline_41("", "debugLayers", "boolean", !1, ""));
GFX$$inline_40.filters = canvas2DOptions$$inline_47.register(new Option$$inline_41("", "filters", "boolean", !0, ""));
GFX$$inline_40.cacheShapes = canvas2DOptions$$inline_47.register(new Option$$inline_41("", "cacheShapes", "boolean", !0, ""));
GFX$$inline_40.cacheShapesMaxSize = canvas2DOptions$$inline_47.register(new Option$$inline_41("", "cacheShapesMaxSize", "number", 256, "", {range:{min:1, max:1024, step:1}}));
GFX$$inline_40.cacheShapesThreshold = canvas2DOptions$$inline_47.register(new Option$$inline_41("", "cacheShapesThreshold", "number", 256, "", {range:{min:1, max:1024, step:1}}));
(function(h) {
  (function(p) {
    (function(r) {
      function a(a, g, c, e) {
        var b = 1 - e;
        return a * b * b + 2 * g * b * e + c * e * e;
      }
      function x(a, g, c, e, b) {
        var d = b * b, k = 1 - b, h = k * k;
        return a * k * h + 3 * g * b * h + 3 * c * k * d + e * b * d;
      }
      var n = h.NumberUtilities.clamp, b = h.NumberUtilities.pow2, l = h.NumberUtilities.epsilonEquals;
      r.radianToDegrees = function(a) {
        return 180 * a / Math.PI;
      };
      r.degreesToRadian = function(a) {
        return a * Math.PI / 180;
      };
      r.quadraticBezier = a;
      r.quadraticBezierExtreme = function(b, g, c) {
        var e = (b - g) / (b - 2 * g + c);
        return 0 > e ? b : 1 < e ? c : a(b, g, c, e);
      };
      r.cubicBezier = x;
      r.cubicBezierExtremes = function(a, g, c, e) {
        var b = g - a, d;
        d = 2 * (c - g);
        var k = e - c;
        b + k === d && (k *= 1.0001);
        var h = 2 * b - d, m = d - 2 * b, m = Math.sqrt(m * m - 4 * b * (b - d + k));
        d = 2 * (b - d + k);
        b = (h + m) / d;
        h = (h - m) / d;
        m = [];
        0 <= b && 1 >= b && m.push(x(a, g, c, e, b));
        0 <= h && 1 >= h && m.push(x(a, g, c, e, h));
        return m;
      };
      var u = function() {
        function a(g, c) {
          this.x = g;
          this.y = c;
        }
        a.prototype.setElements = function(a, c) {
          this.x = a;
          this.y = c;
          return this;
        };
        a.prototype.set = function(a) {
          this.x = a.x;
          this.y = a.y;
          return this;
        };
        a.prototype.dot = function(a) {
          return this.x * a.x + this.y * a.y;
        };
        a.prototype.squaredLength = function() {
          return this.dot(this);
        };
        a.prototype.distanceTo = function(a) {
          return Math.sqrt(this.dot(a));
        };
        a.prototype.sub = function(a) {
          this.x -= a.x;
          this.y -= a.y;
          return this;
        };
        a.prototype.mul = function(a) {
          this.x *= a;
          this.y *= a;
          return this;
        };
        a.prototype.clone = function() {
          return new a(this.x, this.y);
        };
        a.prototype.toString = function(a) {
          void 0 === a && (a = 2);
          return "{x: " + this.x.toFixed(a) + ", y: " + this.y.toFixed(a) + "}";
        };
        a.prototype.inTriangle = function(a, c, e) {
          var b = a.y * e.x - a.x * e.y + (e.y - a.y) * this.x + (a.x - e.x) * this.y, f = a.x * c.y - a.y * c.x + (a.y - c.y) * this.x + (c.x - a.x) * this.y;
          if (0 > b != 0 > f) {
            return !1;
          }
          a = -c.y * e.x + a.y * (e.x - c.x) + a.x * (c.y - e.y) + c.x * e.y;
          0 > a && (b = -b, f = -f, a = -a);
          return 0 < b && 0 < f && b + f < a;
        };
        a.createEmpty = function() {
          return new a(0, 0);
        };
        a.createEmptyPoints = function(g) {
          for (var c = [], e = 0;e < g;e++) {
            c.push(new a(0, 0));
          }
          return c;
        };
        return a;
      }();
      r.Point = u;
      var k = function() {
        function a(g, c, e) {
          this.x = g;
          this.y = c;
          this.z = e;
        }
        a.prototype.setElements = function(a, c, e) {
          this.x = a;
          this.y = c;
          this.z = e;
          return this;
        };
        a.prototype.set = function(a) {
          this.x = a.x;
          this.y = a.y;
          this.z = a.z;
          return this;
        };
        a.prototype.dot = function(a) {
          return this.x * a.x + this.y * a.y + this.z * a.z;
        };
        a.prototype.cross = function(a) {
          var c = this.z * a.x - this.x * a.z, e = this.x * a.y - this.y * a.x;
          this.x = this.y * a.z - this.z * a.y;
          this.y = c;
          this.z = e;
          return this;
        };
        a.prototype.squaredLength = function() {
          return this.dot(this);
        };
        a.prototype.sub = function(a) {
          this.x -= a.x;
          this.y -= a.y;
          this.z -= a.z;
          return this;
        };
        a.prototype.mul = function(a) {
          this.x *= a;
          this.y *= a;
          this.z *= a;
          return this;
        };
        a.prototype.normalize = function() {
          var a = Math.sqrt(this.squaredLength());
          1E-5 < a ? this.mul(1 / a) : this.setElements(0, 0, 0);
          return this;
        };
        a.prototype.clone = function() {
          return new a(this.x, this.y, this.z);
        };
        a.prototype.toString = function(a) {
          void 0 === a && (a = 2);
          return "{x: " + this.x.toFixed(a) + ", y: " + this.y.toFixed(a) + ", z: " + this.z.toFixed(a) + "}";
        };
        a.createEmpty = function() {
          return new a(0, 0, 0);
        };
        a.createEmptyPoints = function(g) {
          for (var c = [], e = 0;e < g;e++) {
            c.push(new a(0, 0, 0));
          }
          return c;
        };
        return a;
      }();
      r.Point3D = k;
      var t = function() {
        function a(g, c, e, b) {
          this.setElements(g, c, e, b);
          a.allocationCount++;
        }
        a.prototype.setElements = function(a, c, e, b) {
          this.x = a;
          this.y = c;
          this.w = e;
          this.h = b;
        };
        a.prototype.set = function(a) {
          this.x = a.x;
          this.y = a.y;
          this.w = a.w;
          this.h = a.h;
        };
        a.prototype.contains = function(a) {
          var c = a.x + a.w, e = a.y + a.h, b = this.x + this.w, f = this.y + this.h;
          return a.x >= this.x && a.x < b && a.y >= this.y && a.y < f && c > this.x && c <= b && e > this.y && e <= f;
        };
        a.prototype.containsPoint = function(a) {
          return a.x >= this.x && a.x < this.x + this.w && a.y >= this.y && a.y < this.y + this.h;
        };
        a.prototype.isContained = function(a) {
          for (var c = 0;c < a.length;c++) {
            if (a[c].contains(this)) {
              return !0;
            }
          }
          return !1;
        };
        a.prototype.isSmallerThan = function(a) {
          return this.w < a.w && this.h < a.h;
        };
        a.prototype.isLargerThan = function(a) {
          return this.w > a.w && this.h > a.h;
        };
        a.prototype.union = function(a) {
          if (this.isEmpty()) {
            this.set(a);
          } else {
            if (!a.isEmpty()) {
              var c = this.x, e = this.y;
              this.x > a.x && (c = a.x);
              this.y > a.y && (e = a.y);
              var b = this.x + this.w;
              b < a.x + a.w && (b = a.x + a.w);
              var f = this.y + this.h;
              f < a.y + a.h && (f = a.y + a.h);
              this.x = c;
              this.y = e;
              this.w = b - c;
              this.h = f - e;
            }
          }
        };
        a.prototype.isEmpty = function() {
          return 0 >= this.w || 0 >= this.h;
        };
        a.prototype.setEmpty = function() {
          this.h = this.w = this.y = this.x = 0;
        };
        a.prototype.intersect = function(g) {
          var c = a.createEmpty();
          if (this.isEmpty() || g.isEmpty()) {
            return c.setEmpty(), c;
          }
          c.x = Math.max(this.x, g.x);
          c.y = Math.max(this.y, g.y);
          c.w = Math.min(this.x + this.w, g.x + g.w) - c.x;
          c.h = Math.min(this.y + this.h, g.y + g.h) - c.y;
          c.isEmpty() && c.setEmpty();
          this.set(c);
        };
        a.prototype.intersects = function(a) {
          if (this.isEmpty() || a.isEmpty()) {
            return !1;
          }
          var c = Math.max(this.x, a.x), e = Math.max(this.y, a.y), c = Math.min(this.x + this.w, a.x + a.w) - c;
          a = Math.min(this.y + this.h, a.y + a.h) - e;
          return !(0 >= c || 0 >= a);
        };
        a.prototype.intersectsTransformedAABB = function(g, c) {
          var e = a._temporary;
          e.set(g);
          c.transformRectangleAABB(e);
          return this.intersects(e);
        };
        a.prototype.intersectsTranslated = function(a, c, e) {
          if (this.isEmpty() || a.isEmpty()) {
            return !1;
          }
          var b = Math.max(this.x, a.x + c), f = Math.max(this.y, a.y + e);
          c = Math.min(this.x + this.w, a.x + c + a.w) - b;
          a = Math.min(this.y + this.h, a.y + e + a.h) - f;
          return !(0 >= c || 0 >= a);
        };
        a.prototype.area = function() {
          return this.w * this.h;
        };
        a.prototype.clone = function() {
          var g = a.allocate();
          g.set(this);
          return g;
        };
        a.allocate = function() {
          var g = a._dirtyStack;
          return g.length ? g.pop() : new a(12345, 67890, 12345, 67890);
        };
        a.prototype.free = function() {
          a._dirtyStack.push(this);
        };
        a.prototype.snap = function() {
          var a = Math.ceil(this.x + this.w), c = Math.ceil(this.y + this.h);
          this.x = Math.floor(this.x);
          this.y = Math.floor(this.y);
          this.w = a - this.x;
          this.h = c - this.y;
          return this;
        };
        a.prototype.scale = function(a, c) {
          this.x *= a;
          this.y *= c;
          this.w *= a;
          this.h *= c;
          return this;
        };
        a.prototype.offset = function(a, c) {
          this.x += a;
          this.y += c;
          return this;
        };
        a.prototype.resize = function(a, c) {
          this.w += a;
          this.h += c;
          return this;
        };
        a.prototype.expand = function(a, c) {
          this.offset(-a, -c).resize(2 * a, 2 * c);
          return this;
        };
        a.prototype.getCenter = function() {
          return new u(this.x + this.w / 2, this.y + this.h / 2);
        };
        a.prototype.getAbsoluteBounds = function() {
          return new a(0, 0, this.w, this.h);
        };
        a.prototype.toString = function(a) {
          void 0 === a && (a = 2);
          return "{" + this.x.toFixed(a) + ", " + this.y.toFixed(a) + ", " + this.w.toFixed(a) + ", " + this.h.toFixed(a) + "}";
        };
        a.createEmpty = function() {
          var g = a.allocate();
          g.setEmpty();
          return g;
        };
        a.createSquare = function(g) {
          return new a(-g / 2, -g / 2, g, g);
        };
        a.createMaxI16 = function() {
          return new a(-32768, -32768, 65535, 65535);
        };
        a.prototype.setMaxI16 = function() {
          this.setElements(-32768, -32768, 65535, 65535);
        };
        a.prototype.getCorners = function(a) {
          a[0].x = this.x;
          a[0].y = this.y;
          a[1].x = this.x + this.w;
          a[1].y = this.y;
          a[2].x = this.x + this.w;
          a[2].y = this.y + this.h;
          a[3].x = this.x;
          a[3].y = this.y + this.h;
        };
        a.allocationCount = 0;
        a._temporary = new a(0, 0, 0, 0);
        a._dirtyStack = [];
        return a;
      }();
      r.Rectangle = t;
      var q = function() {
        function a(g) {
          this.corners = g.map(function(a) {
            return a.clone();
          });
          this.axes = [g[1].clone().sub(g[0]), g[3].clone().sub(g[0])];
          this.origins = [];
          for (var c = 0;2 > c;c++) {
            this.axes[c].mul(1 / this.axes[c].squaredLength()), this.origins.push(g[0].dot(this.axes[c]));
          }
        }
        a.prototype.getBounds = function() {
          return a.getBounds(this.corners);
        };
        a.getBounds = function(a) {
          for (var c = new u(Number.MAX_VALUE, Number.MAX_VALUE), e = new u(Number.MIN_VALUE, Number.MIN_VALUE), b = 0;4 > b;b++) {
            var f = a[b].x, d = a[b].y;
            c.x = Math.min(c.x, f);
            c.y = Math.min(c.y, d);
            e.x = Math.max(e.x, f);
            e.y = Math.max(e.y, d);
          }
          return new t(c.x, c.y, e.x - c.x, e.y - c.y);
        };
        a.prototype.intersects = function(a) {
          return this.intersectsOneWay(a) && a.intersectsOneWay(this);
        };
        a.prototype.intersectsOneWay = function(a) {
          for (var c = 0;2 > c;c++) {
            for (var e = 0;4 > e;e++) {
              var b = a.corners[e].dot(this.axes[c]), f, d;
              0 === e ? d = f = b : b < f ? f = b : b > d && (d = b);
            }
            if (f > 1 + this.origins[c] || d < this.origins[c]) {
              return !1;
            }
          }
          return !0;
        };
        return a;
      }();
      r.OBB = q;
      (function(a) {
        a[a.Unknown = 0] = "Unknown";
        a[a.Identity = 1] = "Identity";
        a[a.Translation = 2] = "Translation";
      })(r.MatrixType || (r.MatrixType = {}));
      var m = function() {
        function a(g, c, e, b, d, k) {
          this._data = new Float64Array(6);
          this._type = 0;
          this.setElements(g, c, e, b, d, k);
          a.allocationCount++;
        }
        Object.defineProperty(a.prototype, "a", {get:function() {
          return this._data[0];
        }, set:function(a) {
          this._data[0] = a;
          this._type = 0;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "b", {get:function() {
          return this._data[1];
        }, set:function(a) {
          this._data[1] = a;
          this._type = 0;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "c", {get:function() {
          return this._data[2];
        }, set:function(a) {
          this._data[2] = a;
          this._type = 0;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "d", {get:function() {
          return this._data[3];
        }, set:function(a) {
          this._data[3] = a;
          this._type = 0;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "tx", {get:function() {
          return this._data[4];
        }, set:function(a) {
          this._data[4] = a;
          1 === this._type && (this._type = 2);
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "ty", {get:function() {
          return this._data[5];
        }, set:function(a) {
          this._data[5] = a;
          1 === this._type && (this._type = 2);
        }, enumerable:!0, configurable:!0});
        a._createSVGMatrix = function() {
          a._svg || (a._svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"));
          return a._svg.createSVGMatrix();
        };
        a.prototype.setElements = function(a, c, e, b, d, f) {
          var k = this._data;
          k[0] = a;
          k[1] = c;
          k[2] = e;
          k[3] = b;
          k[4] = d;
          k[5] = f;
          this._type = 0;
        };
        a.prototype.set = function(a) {
          var c = this._data, e = a._data;
          c[0] = e[0];
          c[1] = e[1];
          c[2] = e[2];
          c[3] = e[3];
          c[4] = e[4];
          c[5] = e[5];
          this._type = a._type;
        };
        a.prototype.emptyArea = function(a) {
          a = this._data;
          return 0 === a[0] || 0 === a[3] ? !0 : !1;
        };
        a.prototype.infiniteArea = function(a) {
          a = this._data;
          return Infinity === Math.abs(a[0]) || Infinity === Math.abs(a[3]) ? !0 : !1;
        };
        a.prototype.isEqual = function(a) {
          if (1 === this._type && 1 === a._type) {
            return !0;
          }
          var c = this._data;
          a = a._data;
          return c[0] === a[0] && c[1] === a[1] && c[2] === a[2] && c[3] === a[3] && c[4] === a[4] && c[5] === a[5];
        };
        a.prototype.clone = function() {
          var g = a.allocate();
          g.set(this);
          return g;
        };
        a.allocate = function() {
          var g = a._dirtyStack;
          return g.length ? g.pop() : new a(12345, 12345, 12345, 12345, 12345, 12345);
        };
        a.prototype.free = function() {
          a._dirtyStack.push(this);
        };
        a.prototype.transform = function(a, c, e, b, d, f) {
          var k = this._data, h = k[0], m = k[1], q = k[2], t = k[3], l = k[4], v = k[5];
          k[0] = h * a + q * c;
          k[1] = m * a + t * c;
          k[2] = h * e + q * b;
          k[3] = m * e + t * b;
          k[4] = h * d + q * f + l;
          k[5] = m * d + t * f + v;
          this._type = 0;
          return this;
        };
        a.prototype.transformRectangle = function(a, c) {
          var e = this._data, b = e[0], d = e[1], f = e[2], k = e[3], h = e[4], e = e[5], m = a.x, q = a.y, t = a.w, l = a.h;
          c[0].x = b * m + f * q + h;
          c[0].y = d * m + k * q + e;
          c[1].x = b * (m + t) + f * q + h;
          c[1].y = d * (m + t) + k * q + e;
          c[2].x = b * (m + t) + f * (q + l) + h;
          c[2].y = d * (m + t) + k * (q + l) + e;
          c[3].x = b * m + f * (q + l) + h;
          c[3].y = d * m + k * (q + l) + e;
        };
        a.prototype.isTranslationOnly = function() {
          if (2 === this._type) {
            return !0;
          }
          var a = this._data;
          return 1 === a[0] && 0 === a[1] && 0 === a[2] && 1 === a[3] || l(a[0], 1) && l(a[1], 0) && l(a[2], 0) && l(a[3], 1) ? (this._type = 2, !0) : !1;
        };
        a.prototype.transformRectangleAABB = function(a) {
          var c = this._data;
          if (1 !== this._type) {
            if (2 === this._type) {
              a.x += c[4], a.y += c[5];
            } else {
              var e = c[0], b = c[1], d = c[2], f = c[3], k = c[4], h = c[5], m = a.x, q = a.y, t = a.w, l = a.h, c = e * m + d * q + k, v = b * m + f * q + h, u = e * (m + t) + d * q + k, n = b * (m + t) + f * q + h, p = e * (m + t) + d * (q + l) + k, t = b * (m + t) + f * (q + l) + h, e = e * m + d * (q + l) + k, b = b * m + f * (q + l) + h, f = 0;
              c > u && (f = c, c = u, u = f);
              p > e && (f = p, p = e, e = f);
              a.x = c < p ? c : p;
              a.w = (u > e ? u : e) - a.x;
              v > n && (f = v, v = n, n = f);
              t > b && (f = t, t = b, b = f);
              a.y = v < t ? v : t;
              a.h = (n > b ? n : b) - a.y;
            }
          }
        };
        a.prototype.scale = function(a, c) {
          var e = this._data;
          e[0] *= a;
          e[1] *= c;
          e[2] *= a;
          e[3] *= c;
          e[4] *= a;
          e[5] *= c;
          this._type = 0;
          return this;
        };
        a.prototype.scaleClone = function(a, c) {
          return 1 === a && 1 === c ? this : this.clone().scale(a, c);
        };
        a.prototype.rotate = function(a) {
          var c = this._data, e = c[0], b = c[1], d = c[2], f = c[3], k = c[4], h = c[5], m = Math.cos(a);
          a = Math.sin(a);
          c[0] = m * e - a * b;
          c[1] = a * e + m * b;
          c[2] = m * d - a * f;
          c[3] = a * d + m * f;
          c[4] = m * k - a * h;
          c[5] = a * k + m * h;
          this._type = 0;
          return this;
        };
        a.prototype.concat = function(a) {
          if (1 === a._type) {
            return this;
          }
          var c = this._data;
          a = a._data;
          var e = c[0] * a[0], b = 0, d = 0, f = c[3] * a[3], k = c[4] * a[0] + a[4], h = c[5] * a[3] + a[5];
          if (0 !== c[1] || 0 !== c[2] || 0 !== a[1] || 0 !== a[2]) {
            e += c[1] * a[2], f += c[2] * a[1], b += c[0] * a[1] + c[1] * a[3], d += c[2] * a[0] + c[3] * a[2], k += c[5] * a[2], h += c[4] * a[1];
          }
          c[0] = e;
          c[1] = b;
          c[2] = d;
          c[3] = f;
          c[4] = k;
          c[5] = h;
          this._type = 0;
          return this;
        };
        a.prototype.concatClone = function(a) {
          return this.clone().concat(a);
        };
        a.prototype.preMultiply = function(a) {
          var c = this._data, e = a._data;
          if (2 === a._type && this._type & 3) {
            c[4] += e[4], c[5] += e[5], this._type = 2;
          } else {
            if (1 !== a._type) {
              a = e[0] * c[0];
              var b = 0, d = 0, f = e[3] * c[3], k = e[4] * c[0] + c[4], h = e[5] * c[3] + c[5];
              if (0 !== e[1] || 0 !== e[2] || 0 !== c[1] || 0 !== c[2]) {
                a += e[1] * c[2], f += e[2] * c[1], b += e[0] * c[1] + e[1] * c[3], d += e[2] * c[0] + e[3] * c[2], k += e[5] * c[2], h += e[4] * c[1];
              }
              c[0] = a;
              c[1] = b;
              c[2] = d;
              c[3] = f;
              c[4] = k;
              c[5] = h;
              this._type = 0;
            }
          }
        };
        a.prototype.translate = function(a, c) {
          var e = this._data;
          e[4] += a;
          e[5] += c;
          1 === this._type && (this._type = 2);
          return this;
        };
        a.prototype.setIdentity = function() {
          var a = this._data;
          a[0] = 1;
          a[1] = 0;
          a[2] = 0;
          a[3] = 1;
          a[4] = 0;
          a[5] = 0;
          this._type = 1;
        };
        a.prototype.isIdentity = function() {
          if (1 === this._type) {
            return !0;
          }
          var a = this._data;
          return 1 === a[0] && 0 === a[1] && 0 === a[2] && 1 === a[3] && 0 === a[4] && 0 === a[5];
        };
        a.prototype.transformPoint = function(a) {
          if (1 !== this._type) {
            var c = this._data, e = a.x, b = a.y;
            a.x = c[0] * e + c[2] * b + c[4];
            a.y = c[1] * e + c[3] * b + c[5];
          }
        };
        a.prototype.transformPoints = function(a) {
          if (1 !== this._type) {
            for (var c = 0;c < a.length;c++) {
              this.transformPoint(a[c]);
            }
          }
        };
        a.prototype.deltaTransformPoint = function(a) {
          if (1 !== this._type) {
            var c = this._data, e = a.x, b = a.y;
            a.x = c[0] * e + c[2] * b;
            a.y = c[1] * e + c[3] * b;
          }
        };
        a.prototype.inverse = function(a) {
          var c = this._data, e = a._data;
          if (1 === this._type) {
            a.setIdentity();
          } else {
            if (2 === this._type) {
              e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = -c[4], e[5] = -c[5], a._type = 2;
            } else {
              var b = c[1], d = c[2], f = c[4], k = c[5];
              if (0 === b && 0 === d) {
                var h = e[0] = 1 / c[0], c = e[3] = 1 / c[3];
                e[1] = 0;
                e[2] = 0;
                e[4] = -h * f;
                e[5] = -c * k;
              } else {
                var h = c[0], c = c[3], m = h * c - b * d;
                if (0 === m) {
                  a.setIdentity();
                  return;
                }
                m = 1 / m;
                e[0] = c * m;
                b = e[1] = -b * m;
                d = e[2] = -d * m;
                c = e[3] = h * m;
                e[4] = -(e[0] * f + d * k);
                e[5] = -(b * f + c * k);
              }
              a._type = 0;
            }
          }
        };
        a.prototype.getTranslateX = function() {
          return this._data[4];
        };
        a.prototype.getTranslateY = function() {
          return this._data[4];
        };
        a.prototype.getScaleX = function() {
          var a = this._data;
          if (1 === a[0] && 0 === a[1]) {
            return 1;
          }
          var c = Math.sqrt(a[0] * a[0] + a[1] * a[1]);
          return 0 < a[0] ? c : -c;
        };
        a.prototype.getScaleY = function() {
          var a = this._data;
          if (0 === a[2] && 1 === a[3]) {
            return 1;
          }
          var c = Math.sqrt(a[2] * a[2] + a[3] * a[3]);
          return 0 < a[3] ? c : -c;
        };
        a.prototype.getScale = function() {
          return (this.getScaleX() + this.getScaleY()) / 2;
        };
        a.prototype.getAbsoluteScaleX = function() {
          return Math.abs(this.getScaleX());
        };
        a.prototype.getAbsoluteScaleY = function() {
          return Math.abs(this.getScaleY());
        };
        a.prototype.getRotation = function() {
          var a = this._data;
          return 180 * Math.atan(a[1] / a[0]) / Math.PI;
        };
        a.prototype.isScaleOrRotation = function() {
          var a = this._data;
          return .01 > Math.abs(a[0] * a[2] + a[1] * a[3]);
        };
        a.prototype.toString = function(a) {
          void 0 === a && (a = 2);
          var c = this._data;
          return "{" + c[0].toFixed(a) + ", " + c[1].toFixed(a) + ", " + c[2].toFixed(a) + ", " + c[3].toFixed(a) + ", " + c[4].toFixed(a) + ", " + c[5].toFixed(a) + "}";
        };
        a.prototype.toWebGLMatrix = function() {
          var a = this._data;
          return new Float32Array([a[0], a[1], 0, a[2], a[3], 0, a[4], a[5], 1]);
        };
        a.prototype.toCSSTransform = function() {
          var a = this._data;
          return "matrix(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ")";
        };
        a.createIdentity = function() {
          var b = a.allocate();
          b.setIdentity();
          return b;
        };
        a.prototype.toSVGMatrix = function() {
          var b = this._data, c = a._createSVGMatrix();
          try {
            c.a = b[0], c.b = b[1], c.c = b[2], c.d = b[3], c.e = b[4], c.f = b[5];
          } catch (e) {
            return a._createSVGMatrix();
          }
          return c;
        };
        a.prototype.snap = function() {
          var a = this._data;
          return this.isTranslationOnly() ? (a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 1, a[4] = Math.round(a[4]), a[5] = Math.round(a[5]), this._type = 2, !0) : !1;
        };
        a.createIdentitySVGMatrix = function() {
          return a._createSVGMatrix();
        };
        a.createSVGMatrixFromArray = function(b) {
          var c = a._createSVGMatrix();
          c.a = b[0];
          c.b = b[1];
          c.c = b[2];
          c.d = b[3];
          c.e = b[4];
          c.f = b[5];
          return c;
        };
        a.allocationCount = 0;
        a._dirtyStack = [];
        a.multiply = function(a, c) {
          var e = c._data;
          a.transform(e[0], e[1], e[2], e[3], e[4], e[5]);
        };
        return a;
      }();
      r.Matrix = m;
      m = function() {
        function a(b) {
          this._m = new Float32Array(b);
        }
        a.prototype.asWebGLMatrix = function() {
          return this._m;
        };
        a.createCameraLookAt = function(b, c, e) {
          c = b.clone().sub(c).normalize();
          e = e.clone().cross(c).normalize();
          var d = c.clone().cross(e);
          return new a([e.x, e.y, e.z, 0, d.x, d.y, d.z, 0, c.x, c.y, c.z, 0, b.x, b.y, b.z, 1]);
        };
        a.createLookAt = function(b, c, e) {
          c = b.clone().sub(c).normalize();
          e = e.clone().cross(c).normalize();
          var d = c.clone().cross(e);
          return new a([e.x, d.x, c.x, 0, d.x, d.y, c.y, 0, c.x, d.z, c.z, 0, -e.dot(b), -d.dot(b), -c.dot(b), 1]);
        };
        a.prototype.mul = function(a) {
          a = [a.x, a.y, a.z, 0];
          for (var c = this._m, e = [], b = 0;4 > b;b++) {
            e[b] = 0;
            for (var d = 4 * b, f = 0;4 > f;f++) {
              e[b] += c[d + f] * a[f];
            }
          }
          return new k(e[0], e[1], e[2]);
        };
        a.create2DProjection = function(b, c, e) {
          return new a([2 / b, 0, 0, 0, 0, -2 / c, 0, 0, 0, 0, 2 / e, 0, -1, 1, 0, 1]);
        };
        a.createPerspective = function(b, c, e, d) {
          b = Math.tan(.5 * Math.PI - .5 * b);
          var k = 1 / (e - d);
          return new a([b / c, 0, 0, 0, 0, b, 0, 0, 0, 0, (e + d) * k, -1, 0, 0, e * d * k * 2, 0]);
        };
        a.createIdentity = function() {
          return a.createTranslation(0, 0, 0);
        };
        a.createTranslation = function(b, c, e) {
          return new a([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, b, c, e, 1]);
        };
        a.createXRotation = function(b) {
          var c = Math.cos(b);
          b = Math.sin(b);
          return new a([1, 0, 0, 0, 0, c, b, 0, 0, -b, c, 0, 0, 0, 0, 1]);
        };
        a.createYRotation = function(b) {
          var c = Math.cos(b);
          b = Math.sin(b);
          return new a([c, 0, -b, 0, 0, 1, 0, 0, b, 0, c, 0, 0, 0, 0, 1]);
        };
        a.createZRotation = function(b) {
          var c = Math.cos(b);
          b = Math.sin(b);
          return new a([c, b, 0, 0, -b, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        };
        a.createScale = function(b, c, e) {
          return new a([b, 0, 0, 0, 0, c, 0, 0, 0, 0, e, 0, 0, 0, 0, 1]);
        };
        a.createMultiply = function(b, c) {
          var e = b._m, d = c._m, k = e[0], h = e[1], m = e[2], q = e[3], t = e[4], l = e[5], v = e[6], u = e[7], n = e[8], p = e[9], r = e[10], x = e[11], D = e[12], z = e[13], B = e[14], e = e[15], E = d[0], A = d[1], C = d[2], F = d[3], G = d[4], J = d[5], H = d[6], L = d[7], M = d[8], N = d[9], O = d[10], P = d[11], Q = d[12], R = d[13], S = d[14], d = d[15];
          return new a([k * E + h * G + m * M + q * Q, k * A + h * J + m * N + q * R, k * C + h * H + m * O + q * S, k * F + h * L + m * P + q * d, t * E + l * G + v * M + u * Q, t * A + l * J + v * N + u * R, t * C + l * H + v * O + u * S, t * F + l * L + v * P + u * d, n * E + p * G + r * M + x * Q, n * A + p * J + r * N + x * R, n * C + p * H + r * O + x * S, n * F + p * L + r * P + x * d, D * E + z * G + B * M + e * Q, D * A + z * J + B * N + e * R, D * C + z * H + B * O + e * S, D * F + z * 
          L + B * P + e * d]);
        };
        a.createInverse = function(b) {
          var c = b._m;
          b = c[0];
          var e = c[1], d = c[2], k = c[3], h = c[4], m = c[5], q = c[6], t = c[7], l = c[8], v = c[9], u = c[10], n = c[11], p = c[12], r = c[13], x = c[14], c = c[15], D = u * c, z = x * n, B = q * c, E = x * t, A = q * n, C = u * t, F = d * c, G = x * k, J = d * n, H = u * k, L = d * t, M = q * k, N = l * r, O = p * v, P = h * r, Q = p * m, R = h * v, S = l * m, X = b * r, Y = p * e, Z = b * v, aa = l * e, ba = b * m, ca = h * e, ea = D * m + E * v + A * r - (z * m + B * v + C * r), fa = z * e + 
          F * v + H * r - (D * e + G * v + J * r), r = B * e + G * m + L * r - (E * e + F * m + M * r), e = C * e + J * m + M * v - (A * e + H * m + L * v), m = 1 / (b * ea + h * fa + l * r + p * e);
          return new a([m * ea, m * fa, m * r, m * e, m * (z * h + B * l + C * p - (D * h + E * l + A * p)), m * (D * b + G * l + J * p - (z * b + F * l + H * p)), m * (E * b + F * h + M * p - (B * b + G * h + L * p)), m * (A * b + H * h + L * l - (C * b + J * h + M * l)), m * (N * t + Q * n + R * c - (O * t + P * n + S * c)), m * (O * k + X * n + aa * c - (N * k + Y * n + Z * c)), m * (P * k + Y * t + ba * c - (Q * k + X * t + ca * c)), m * (S * k + Z * t + ca * n - (R * k + aa * t + ba * n)), m * 
          (P * u + S * x + O * q - (R * x + N * q + Q * u)), m * (Z * x + N * d + Y * u - (X * u + aa * x + O * d)), m * (X * q + ca * x + Q * d - (ba * x + P * d + Y * q)), m * (ba * u + R * d + aa * q - (Z * q + ca * u + S * d))]);
        };
        return a;
      }();
      r.Matrix3D = m;
      m = function() {
        function a(b, c, e) {
          void 0 === e && (e = 7);
          var d = this.size = 1 << e;
          this.sizeInBits = e;
          this.w = b;
          this.h = c;
          this.c = Math.ceil(b / d);
          this.r = Math.ceil(c / d);
          this.grid = [];
          for (b = 0;b < this.r;b++) {
            for (this.grid.push([]), c = 0;c < this.c;c++) {
              this.grid[b][c] = new a.Cell(new t(c * d, b * d, d, d));
            }
          }
        }
        a.prototype.clear = function() {
          for (var a = 0;a < this.r;a++) {
            for (var c = 0;c < this.c;c++) {
              this.grid[a][c].clear();
            }
          }
        };
        a.prototype.getBounds = function() {
          return new t(0, 0, this.w, this.h);
        };
        a.prototype.addDirtyRectangle = function(a) {
          var c = a.x >> this.sizeInBits, e = a.y >> this.sizeInBits;
          if (!(c >= this.c || e >= this.r)) {
            0 > c && (c = 0);
            0 > e && (e = 0);
            var b = this.grid[e][c];
            a = a.clone();
            a.snap();
            if (b.region.contains(a)) {
              b.bounds.isEmpty() ? b.bounds.set(a) : b.bounds.contains(a) || b.bounds.union(a);
            } else {
              for (var d = Math.min(this.c, Math.ceil((a.x + a.w) / this.size)) - c, f = Math.min(this.r, Math.ceil((a.y + a.h) / this.size)) - e, k = 0;k < d;k++) {
                for (var h = 0;h < f;h++) {
                  b = this.grid[e + h][c + k], b = b.region.clone(), b.intersect(a), b.isEmpty() || this.addDirtyRectangle(b);
                }
              }
            }
          }
        };
        a.prototype.gatherRegions = function(a) {
          for (var c = 0;c < this.r;c++) {
            for (var e = 0;e < this.c;e++) {
              this.grid[c][e].bounds.isEmpty() || a.push(this.grid[c][e].bounds);
            }
          }
        };
        a.prototype.gatherOptimizedRegions = function(a) {
          this.gatherRegions(a);
        };
        a.prototype.getDirtyRatio = function() {
          var a = this.w * this.h;
          if (0 === a) {
            return 0;
          }
          for (var c = 0, e = 0;e < this.r;e++) {
            for (var b = 0;b < this.c;b++) {
              c += this.grid[e][b].region.area();
            }
          }
          return c / a;
        };
        a.prototype.render = function(a, c) {
          function e(e) {
            a.rect(e.x, e.y, e.w, e.h);
          }
          if (c && c.drawGrid) {
            a.strokeStyle = "white";
            for (var b = 0;b < this.r;b++) {
              for (var d = 0;d < this.c;d++) {
                var f = this.grid[b][d];
                a.beginPath();
                e(f.region);
                a.closePath();
                a.stroke();
              }
            }
          }
          a.strokeStyle = "#E0F8D8";
          for (b = 0;b < this.r;b++) {
            for (d = 0;d < this.c;d++) {
              f = this.grid[b][d], a.beginPath(), e(f.bounds), a.closePath(), a.stroke();
            }
          }
        };
        a.tmpRectangle = t.createEmpty();
        return a;
      }();
      r.DirtyRegion = m;
      (function(a) {
        var b = function() {
          function a(e) {
            this.region = e;
            this.bounds = t.createEmpty();
          }
          a.prototype.clear = function() {
            this.bounds.setEmpty();
          };
          return a;
        }();
        a.Cell = b;
      })(m = r.DirtyRegion || (r.DirtyRegion = {}));
      var v = function() {
        function a(b, c, e, d, f, k) {
          this.index = b;
          this.x = c;
          this.y = e;
          this.scale = k;
          this.bounds = new t(c * d, e * f, d, f);
        }
        a.prototype.getOBB = function() {
          if (this._obb) {
            return this._obb;
          }
          this.bounds.getCorners(a.corners);
          return this._obb = new q(a.corners);
        };
        a.corners = u.createEmptyPoints(4);
        return a;
      }();
      r.Tile = v;
      var d = function() {
        function a(b, c, e, d, f) {
          this.tileW = e;
          this.tileH = d;
          this.scale = f;
          this.w = b;
          this.h = c;
          this.rows = Math.ceil(c / d);
          this.columns = Math.ceil(b / e);
          this.tiles = [];
          for (c = b = 0;c < this.rows;c++) {
            for (var k = 0;k < this.columns;k++) {
              this.tiles.push(new v(b++, k, c, e, d, f));
            }
          }
        }
        a.prototype.getTiles = function(a, c) {
          if (c.emptyArea(a)) {
            return [];
          }
          if (c.infiniteArea(a)) {
            return this.tiles;
          }
          var e = this.columns * this.rows;
          return 40 > e && c.isScaleOrRotation() ? this.getFewTiles(a, c, 10 < e) : this.getManyTiles(a, c);
        };
        a.prototype.getFewTiles = function(b, c, e) {
          void 0 === e && (e = !0);
          if (c.isTranslationOnly() && 1 === this.tiles.length) {
            return this.tiles[0].bounds.intersectsTranslated(b, c.tx, c.ty) ? [this.tiles[0]] : [];
          }
          c.transformRectangle(b, a._points);
          var d;
          b = new t(0, 0, this.w, this.h);
          e && (d = new q(a._points));
          b.intersect(q.getBounds(a._points));
          if (b.isEmpty()) {
            return [];
          }
          var k = b.x / this.tileW | 0;
          c = b.y / this.tileH | 0;
          var h = Math.ceil((b.x + b.w) / this.tileW) | 0, m = Math.ceil((b.y + b.h) / this.tileH) | 0, k = n(k, 0, this.columns), h = n(h, 0, this.columns);
          c = n(c, 0, this.rows);
          for (var m = n(m, 0, this.rows), l = [];k < h;k++) {
            for (var v = c;v < m;v++) {
              var u = this.tiles[v * this.columns + k];
              u.bounds.intersects(b) && (e ? u.getOBB().intersects(d) : 1) && l.push(u);
            }
          }
          return l;
        };
        a.prototype.getManyTiles = function(b, c) {
          function e(a, e, c) {
            return (a - e.x) * (c.y - e.y) / (c.x - e.x) + e.y;
          }
          function d(a, e, c, b, g) {
            if (!(0 > c || c >= e.columns)) {
              for (b = n(b, 0, e.rows), g = n(g + 1, 0, e.rows);b < g;b++) {
                a.push(e.tiles[b * e.columns + c]);
              }
            }
          }
          var k = a._points;
          c.transformRectangle(b, k);
          for (var h = k[0].x < k[1].x ? 0 : 1, m = k[2].x < k[3].x ? 2 : 3, m = k[h].x < k[m].x ? h : m, h = [], q = 0;5 > q;q++, m++) {
            h.push(k[m % 4]);
          }
          (h[1].x - h[0].x) * (h[3].y - h[0].y) < (h[1].y - h[0].y) * (h[3].x - h[0].x) && (k = h[1], h[1] = h[3], h[3] = k);
          var k = [], t, l, m = Math.floor(h[0].x / this.tileW), q = (m + 1) * this.tileW;
          if (h[2].x < q) {
            t = Math.min(h[0].y, h[1].y, h[2].y, h[3].y);
            l = Math.max(h[0].y, h[1].y, h[2].y, h[3].y);
            var v = Math.floor(t / this.tileH), u = Math.floor(l / this.tileH);
            d(k, this, m, v, u);
            return k;
          }
          var p = 0, r = 4, x = !1;
          if (h[0].x === h[1].x || h[0].x === h[3].x) {
            h[0].x === h[1].x ? (x = !0, p++) : r--, t = e(q, h[p], h[p + 1]), l = e(q, h[r], h[r - 1]), v = Math.floor(h[p].y / this.tileH), u = Math.floor(h[r].y / this.tileH), d(k, this, m, v, u), m++;
          }
          do {
            var K, D, z, B;
            h[p + 1].x < q ? (K = h[p + 1].y, z = !0) : (K = e(q, h[p], h[p + 1]), z = !1);
            h[r - 1].x < q ? (D = h[r - 1].y, B = !0) : (D = e(q, h[r], h[r - 1]), B = !1);
            v = Math.floor((h[p].y < h[p + 1].y ? t : K) / this.tileH);
            u = Math.floor((h[r].y > h[r - 1].y ? l : D) / this.tileH);
            d(k, this, m, v, u);
            if (z && x) {
              break;
            }
            z ? (x = !0, p++, t = e(q, h[p], h[p + 1])) : t = K;
            B ? (r--, l = e(q, h[r], h[r - 1])) : l = D;
            m++;
            q = (m + 1) * this.tileW;
          } while (p < r);
          return k;
        };
        a._points = u.createEmptyPoints(4);
        return a;
      }();
      r.TileCache = d;
      m = function() {
        function a(b, c, e) {
          this._cacheLevels = [];
          this._source = b;
          this._tileSize = c;
          this._minUntiledSize = e;
        }
        a.prototype._getTilesAtScale = function(a, c, e) {
          var f = Math.max(c.getAbsoluteScaleX(), c.getAbsoluteScaleY()), k = 0;
          1 !== f && (k = n(Math.round(Math.log(1 / f) / Math.LN2), -5, 3));
          f = b(k);
          if (this._source.hasFlags(256)) {
            for (;;) {
              f = b(k);
              if (e.contains(this._source.getBounds().getAbsoluteBounds().clone().scale(f, f))) {
                break;
              }
              k--;
            }
          }
          this._source.hasFlags(512) || (k = n(k, -5, 0));
          f = b(k);
          e = 5 + k;
          k = this._cacheLevels[e];
          if (!k) {
            var k = this._source.getBounds().getAbsoluteBounds().clone().scale(f, f), h, m;
            this._source.hasFlags(256) || !this._source.hasFlags(1024) || Math.max(k.w, k.h) <= this._minUntiledSize ? (h = k.w, m = k.h) : h = m = this._tileSize;
            k = this._cacheLevels[e] = new d(k.w, k.h, h, m, f);
          }
          return k.getTiles(a, c.scaleClone(f, f));
        };
        a.prototype.fetchTiles = function(a, c, e, b) {
          var d = new t(0, 0, e.canvas.width, e.canvas.height);
          a = this._getTilesAtScale(a, c, d);
          var f;
          c = this._source;
          for (var k = 0;k < a.length;k++) {
            var h = a[k];
            h.cachedSurfaceRegion && h.cachedSurfaceRegion.surface && !c.hasFlags(4352) || (f || (f = []), f.push(h));
          }
          f && this._cacheTiles(e, f, b, d);
          c.removeFlags(4096);
          return a;
        };
        a.prototype._getTileBounds = function(a) {
          for (var c = t.createEmpty(), e = 0;e < a.length;e++) {
            c.union(a[e].bounds);
          }
          return c;
        };
        a.prototype._cacheTiles = function(a, c, e, b, d) {
          void 0 === d && (d = 4);
          var f = this._getTileBounds(c);
          a.save();
          a.setTransform(1, 0, 0, 1, 0, 0);
          a.clearRect(0, 0, b.w, b.h);
          a.translate(-f.x, -f.y);
          a.scale(c[0].scale, c[0].scale);
          var k = this._source.getBounds();
          a.translate(-k.x, -k.y);
          2 <= p.traceLevel && p.writer && p.writer.writeLn("Rendering Tiles: " + f);
          this._source.render(a, 0);
          a.restore();
          for (var k = null, h = 0;h < c.length;h++) {
            var m = c[h], q = m.bounds.clone();
            q.x -= f.x;
            q.y -= f.y;
            b.contains(q) || (k || (k = []), k.push(m));
            m.cachedSurfaceRegion = e(m.cachedSurfaceRegion, a, q);
          }
          k && (2 <= k.length ? (c = k.slice(0, k.length / 2 | 0), f = k.slice(c.length), this._cacheTiles(a, c, e, b, d - 1), this._cacheTiles(a, f, e, b, d - 1)) : this._cacheTiles(a, k, e, b, d - 1));
        };
        return a;
      }();
      r.RenderableTileCache = m;
    })(p.Geometry || (p.Geometry = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(h, p) {
  function r() {
    this.constructor = h;
  }
  for (var a in p) {
    p.hasOwnProperty(a) && (h[a] = p[a]);
  }
  r.prototype = p.prototype;
  h.prototype = new r;
};
(function(h) {
  (function(p) {
    var r = h.IntegerUtilities.roundToMultipleOfPowerOfTwo, a = p.Geometry.Rectangle;
    (function(h) {
      var n = function(a) {
        function b() {
          a.apply(this, arguments);
        }
        __extends(b, a);
        return b;
      }(p.Geometry.Rectangle);
      h.Region = n;
      var b = function() {
        function a(b, d) {
          this._root = new l(0, 0, b | 0, d | 0, !1);
        }
        a.prototype.allocate = function(a, b) {
          a = Math.ceil(a);
          b = Math.ceil(b);
          var f = this._root.insert(a, b);
          f && (f.allocator = this, f.allocated = !0);
          return f;
        };
        a.prototype.free = function(a) {
          a.clear();
          a.allocated = !1;
        };
        a.RANDOM_ORIENTATION = !0;
        a.MAX_DEPTH = 256;
        return a;
      }();
      h.CompactAllocator = b;
      var l = function(a) {
        function k(b, f, g, c, e) {
          a.call(this, b, f, g, c);
          this._children = null;
          this._horizontal = e;
          this.allocated = !1;
        }
        __extends(k, a);
        k.prototype.clear = function() {
          this._children = null;
          this.allocated = !1;
        };
        k.prototype.insert = function(a, b) {
          return this._insert(a, b, 0);
        };
        k.prototype._insert = function(a, f, g) {
          if (!(g > b.MAX_DEPTH || this.allocated || this.w < a || this.h < f)) {
            if (this._children) {
              var c;
              if ((c = this._children[0]._insert(a, f, g + 1)) || (c = this._children[1]._insert(a, f, g + 1))) {
                return c;
              }
            } else {
              return c = !this._horizontal, b.RANDOM_ORIENTATION && (c = .5 <= Math.random()), this._children = this._horizontal ? [new k(this.x, this.y, this.w, f, !1), new k(this.x, this.y + f, this.w, this.h - f, c)] : [new k(this.x, this.y, a, this.h, !0), new k(this.x + a, this.y, this.w - a, this.h, c)], c = this._children[0], c.w === a && c.h === f ? (c.allocated = !0, c) : this._insert(a, f, g + 1);
            }
          }
        };
        return k;
      }(h.Region), u = function() {
        function a(b, d, f, g) {
          this._columns = b / f | 0;
          this._rows = d / g | 0;
          this._sizeW = f;
          this._sizeH = g;
          this._freeList = [];
          this._index = 0;
          this._total = this._columns * this._rows;
        }
        a.prototype.allocate = function(a, b) {
          a = Math.ceil(a);
          b = Math.ceil(b);
          var f = this._sizeW, g = this._sizeH;
          if (a > f || b > g) {
            return null;
          }
          var c = this._freeList, e = this._index;
          return 0 < c.length ? (f = c.pop(), f.w = a, f.h = b, f.allocated = !0, f) : e < this._total ? (c = e / this._columns | 0, f = new k((e - c * this._columns) * f, c * g, a, b), f.index = e, f.allocator = this, f.allocated = !0, this._index++, f) : null;
        };
        a.prototype.free = function(a) {
          a.allocated = !1;
          this._freeList.push(a);
        };
        return a;
      }();
      h.GridAllocator = u;
      var k = function(a) {
        function b(d, f, g, c) {
          a.call(this, d, f, g, c);
          this.index = -1;
        }
        __extends(b, a);
        return b;
      }(h.Region);
      h.GridCell = k;
      var t = function() {
        return function(a, b, d) {
          this.size = a;
          this.region = b;
          this.allocator = d;
        };
      }(), q = function(a) {
        function b(d, f, g, c, e) {
          a.call(this, d, f, g, c);
          this.region = e;
        }
        __extends(b, a);
        return b;
      }(h.Region);
      h.BucketCell = q;
      n = function() {
        function b(a, d) {
          this._buckets = [];
          this._w = a | 0;
          this._h = d | 0;
          this._filled = 0;
        }
        b.prototype.allocate = function(b, d) {
          b = Math.ceil(b);
          d = Math.ceil(d);
          var f = Math.max(b, d);
          if (b > this._w || d > this._h) {
            return null;
          }
          var g = null, c, e = this._buckets;
          do {
            for (var k = 0;k < e.length && !(e[k].size >= f && (c = e[k], g = c.allocator.allocate(b, d)));k++) {
            }
            if (!g) {
              var h = this._h - this._filled;
              if (h < d) {
                return null;
              }
              var k = r(f, 8), m = 2 * k;
              m > h && (m = h);
              if (m < k) {
                return null;
              }
              h = new a(0, this._filled, this._w, m);
              this._buckets.push(new t(k, h, new u(h.w, h.h, k, k)));
              this._filled += m;
            }
          } while (!g);
          return new q(c.region.x + g.x, c.region.y + g.y, g.w, g.h, g);
        };
        b.prototype.free = function(a) {
          a.region.allocator.free(a.region);
        };
        return b;
      }();
      h.BucketAllocator = n;
    })(p.RegionAllocator || (p.RegionAllocator = {}));
    (function(a) {
      var h = function() {
        function a(b) {
          this._createSurface = b;
          this._surfaces = [];
        }
        Object.defineProperty(a.prototype, "surfaces", {get:function() {
          return this._surfaces;
        }, enumerable:!0, configurable:!0});
        a.prototype._createNewSurface = function(a, b) {
          var k = this._createSurface(a, b);
          this._surfaces.push(k);
          return k;
        };
        a.prototype.addSurface = function(a) {
          this._surfaces.push(a);
        };
        a.prototype.allocate = function(a, b, k) {
          for (var h = 0;h < this._surfaces.length;h++) {
            var q = this._surfaces[h];
            if (q !== k && (q = q.allocate(a, b))) {
              return q;
            }
          }
          return this._createNewSurface(a, b).allocate(a, b);
        };
        a.prototype.free = function(a) {
        };
        return a;
      }();
      a.SimpleAllocator = h;
    })(p.SurfaceRegionAllocator || (p.SurfaceRegionAllocator = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    var r = p.Geometry.Rectangle, a = p.Geometry.Matrix, x = p.Geometry.DirtyRegion;
    (function(a) {
      a[a.Normal = 1] = "Normal";
      a[a.Layer = 2] = "Layer";
      a[a.Multiply = 3] = "Multiply";
      a[a.Screen = 4] = "Screen";
      a[a.Lighten = 5] = "Lighten";
      a[a.Darken = 6] = "Darken";
      a[a.Difference = 7] = "Difference";
      a[a.Add = 8] = "Add";
      a[a.Subtract = 9] = "Subtract";
      a[a.Invert = 10] = "Invert";
      a[a.Alpha = 11] = "Alpha";
      a[a.Erase = 12] = "Erase";
      a[a.Overlay = 13] = "Overlay";
      a[a.HardLight = 14] = "HardLight";
    })(p.BlendMode || (p.BlendMode = {}));
    var n = p.BlendMode;
    (function(a) {
      a[a.None = 0] = "None";
      a[a.Visible = 1] = "Visible";
      a[a.Transparent = 2] = "Transparent";
      a[a.IsMask = 4] = "IsMask";
      a[a.CacheAsBitmap = 16] = "CacheAsBitmap";
      a[a.PixelSnapping = 32] = "PixelSnapping";
      a[a.ImageSmoothing = 64] = "ImageSmoothing";
      a[a.Dynamic = 256] = "Dynamic";
      a[a.Scalable = 512] = "Scalable";
      a[a.Tileable = 1024] = "Tileable";
      a[a.BoundsAutoCompute = 2048] = "BoundsAutoCompute";
      a[a.Dirty = 4096] = "Dirty";
      a[a.InvalidBounds = 8192] = "InvalidBounds";
      a[a.InvalidConcatenatedMatrix = 16384] = "InvalidConcatenatedMatrix";
      a[a.InvalidInvertedConcatenatedMatrix = 32768] = "InvalidInvertedConcatenatedMatrix";
      a[a.InvalidConcatenatedColorMatrix = 65536] = "InvalidConcatenatedColorMatrix";
      a[a.UpOnAddedOrRemoved = a.InvalidBounds | a.Dirty] = "UpOnAddedOrRemoved";
      a[a.DownOnAddedOrRemoved = a.InvalidConcatenatedMatrix | a.InvalidInvertedConcatenatedMatrix | a.InvalidConcatenatedColorMatrix] = "DownOnAddedOrRemoved";
      a[a.UpOnMoved = a.InvalidBounds | a.Dirty] = "UpOnMoved";
      a[a.DownOnMoved = a.InvalidConcatenatedMatrix | a.InvalidInvertedConcatenatedMatrix] = "DownOnMoved";
      a[a.UpOnColorMatrixChanged = a.Dirty] = "UpOnColorMatrixChanged";
      a[a.DownOnColorMatrixChanged = a.InvalidConcatenatedColorMatrix] = "DownOnColorMatrixChanged";
      a[a.UpOnInvalidate = a.InvalidBounds | a.Dirty] = "UpOnInvalidate";
      a[a.Default = a.BoundsAutoCompute | a.InvalidBounds | a.InvalidConcatenatedMatrix | a.InvalidInvertedConcatenatedMatrix | a.Visible] = "Default";
    })(p.NodeFlags || (p.NodeFlags = {}));
    var b = p.NodeFlags;
    (function(a) {
      a[a.Node = 1] = "Node";
      a[a.Shape = 3] = "Shape";
      a[a.Group = 5] = "Group";
      a[a.Stage = 13] = "Stage";
      a[a.Renderable = 33] = "Renderable";
    })(p.NodeType || (p.NodeType = {}));
    var l = p.NodeType;
    (function(a) {
      a[a.None = 0] = "None";
      a[a.OnStageBoundsChanged = 1] = "OnStageBoundsChanged";
      a[a.RemovedFromStage = 2] = "RemovedFromStage";
    })(p.NodeEventType || (p.NodeEventType = {}));
    var u = function() {
      function a() {
      }
      a.prototype.visitNode = function(a, e) {
      };
      a.prototype.visitShape = function(a, e) {
        this.visitNode(a, e);
      };
      a.prototype.visitGroup = function(a, e) {
        this.visitNode(a, e);
        for (var b = a.getChildren(), d = 0;d < b.length;d++) {
          b[d].visit(this, e);
        }
      };
      a.prototype.visitStage = function(a, e) {
        this.visitGroup(a, e);
      };
      a.prototype.visitRenderable = function(a, e) {
        this.visitNode(a, e);
      };
      return a;
    }();
    p.NodeVisitor = u;
    var k = function() {
      return function() {
      };
    }();
    p.State = k;
    var t = function(b) {
      function c(e) {
        b.call(this);
        this.matrix = a.createIdentity();
        this.depth = 0;
      }
      __extends(c, b);
      c.prototype.transform = function(a) {
        var c = this.clone();
        c.matrix.preMultiply(a.getMatrix());
        return c;
      };
      c.allocate = function() {
        var a = c._dirtyStack, b = null;
        return b = a.length ? a.pop() : new c(this._doNotCallCtorDirectly);
      };
      c.prototype.clone = function() {
        var a = c.allocate();
        a.set(this);
        return a;
      };
      c.prototype.set = function(a) {
        this.matrix.set(a.matrix);
      };
      c.prototype.free = function() {
        c._dirtyStack.push(this);
      };
      c._dirtyStack = [];
      c._doNotCallCtorDirectly = Object.create(null);
      return c;
    }(k);
    p.PreRenderState = t;
    var q = function(a) {
      function c() {
        a.apply(this, arguments);
        this.isDirty = !0;
      }
      __extends(c, a);
      c.prototype.start = function(a, c) {
        this._dirtyRegion = c;
        var b = t.allocate();
        b.matrix.setIdentity();
        a.visit(this, b);
        b.free();
      };
      c.prototype.visitGroup = function(a, c) {
        var b = a.getChildren();
        this.visitNode(a, c);
        for (var d = 0;d < b.length;d++) {
          var f = b[d], g = c.transform(f.getTransform());
          f.visit(this, g);
          g.free();
        }
      };
      c.prototype.visitNode = function(a, c) {
        a.hasFlags(4096) && (this.isDirty = !0);
        a.toggleFlags(4096, !1);
        a.depth = c.depth++;
      };
      return c;
    }(u);
    p.PreRenderVisitor = q;
    k = function(a) {
      function c(e) {
        a.call(this);
        this.writer = e;
      }
      __extends(c, a);
      c.prototype.visitNode = function(a, c) {
      };
      c.prototype.visitShape = function(a, c) {
        this.writer.writeLn(a.toString());
        this.visitNode(a, c);
      };
      c.prototype.visitGroup = function(a, c) {
        this.visitNode(a, c);
        var b = a.getChildren();
        this.writer.enter(a.toString() + " " + b.length);
        for (var d = 0;d < b.length;d++) {
          b[d].visit(this, c);
        }
        this.writer.outdent();
      };
      c.prototype.visitStage = function(a, c) {
        this.visitGroup(a, c);
      };
      return c;
    }(u);
    p.TracingNodeVisitor = k;
    var m = function() {
      function a() {
        this._clip = -1;
        this._eventListeners = null;
        this._id = a._nextId++;
        this._type = 1;
        this._index = -1;
        this._parent = null;
        this.reset();
      }
      Object.defineProperty(a.prototype, "id", {get:function() {
        return this._id;
      }, enumerable:!0, configurable:!0});
      a.prototype._dispatchEvent = function(a) {
        if (this._eventListeners) {
          for (var e = this._eventListeners, b = 0;b < e.length;b++) {
            var d = e[b];
            d.type === a && d.listener(this, a);
          }
        }
      };
      a.prototype.addEventListener = function(a, e) {
        this._eventListeners || (this._eventListeners = []);
        this._eventListeners.push({type:a, listener:e});
      };
      a.prototype.removeEventListener = function(a, e) {
        for (var b = this._eventListeners, d = 0;d < b.length;d++) {
          var f = b[d];
          if (f.type === a && f.listener === e) {
            b.splice(d, 1);
            break;
          }
        }
      };
      Object.defineProperty(a.prototype, "properties", {get:function() {
        return this._properties || (this._properties = {});
      }, enumerable:!0, configurable:!0});
      a.prototype.reset = function() {
        this._flags = b.Default;
        this._properties = this._transform = this._layer = this._bounds = null;
        this.depth = -1;
      };
      Object.defineProperty(a.prototype, "clip", {get:function() {
        return this._clip;
      }, set:function(a) {
        this._clip = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "parent", {get:function() {
        return this._parent;
      }, enumerable:!0, configurable:!0});
      a.prototype.getTransformedBounds = function(a) {
        var e = this.getBounds(!0);
        if (a !== this && !e.isEmpty()) {
          var b = this.getTransform().getConcatenatedMatrix();
          a ? (a = a.getTransform().getInvertedConcatenatedMatrix(!0), a.preMultiply(b), a.transformRectangleAABB(e), a.free()) : b.transformRectangleAABB(e);
        }
        return e;
      };
      a.prototype._markCurrentBoundsAsDirtyRegion = function() {
      };
      a.prototype.getStage = function(a) {
        void 0 === a && (a = !0);
        for (var e = this._parent;e;) {
          if (e.isType(13)) {
            var b = e;
            if (a) {
              if (b.dirtyRegion) {
                return b;
              }
            } else {
              return b;
            }
          }
          e = e._parent;
        }
        return null;
      };
      a.prototype.getChildren = function(a) {
        throw void 0;
      };
      a.prototype.getBounds = function(a) {
        throw void 0;
      };
      a.prototype.setBounds = function(a) {
        (this._bounds || (this._bounds = r.createEmpty())).set(a);
        this.removeFlags(8192);
      };
      a.prototype.clone = function() {
        throw void 0;
      };
      a.prototype.setFlags = function(a) {
        this._flags |= a;
      };
      a.prototype.hasFlags = function(a) {
        return (this._flags & a) === a;
      };
      a.prototype.hasAnyFlags = function(a) {
        return !!(this._flags & a);
      };
      a.prototype.removeFlags = function(a) {
        this._flags &= ~a;
      };
      a.prototype.toggleFlags = function(a, e) {
        this._flags = e ? this._flags | a : this._flags & ~a;
      };
      a.prototype._propagateFlagsUp = function(a) {
        if (0 !== a && !this.hasFlags(a)) {
          this.hasFlags(2048) || (a &= -8193);
          this.setFlags(a);
          var e = this._parent;
          e && e._propagateFlagsUp(a);
        }
      };
      a.prototype._propagateFlagsDown = function(a) {
        throw void 0;
      };
      a.prototype.isAncestor = function(a) {
        for (;a;) {
          if (a === this) {
            return !0;
          }
          a = a._parent;
        }
        return !1;
      };
      a._getAncestors = function(c, e) {
        var b = a._path;
        for (b.length = 0;c && c !== e;) {
          b.push(c), c = c._parent;
        }
        return b;
      };
      a.prototype._findClosestAncestor = function(a, e) {
        for (var b = this;b;) {
          if (b.hasFlags(a) === e) {
            return b;
          }
          b = b._parent;
        }
        return null;
      };
      a.prototype.isType = function(a) {
        return this._type === a;
      };
      a.prototype.isTypeOf = function(a) {
        return (this._type & a) === a;
      };
      a.prototype.isLeaf = function() {
        return this.isType(33) || this.isType(3);
      };
      a.prototype.isLinear = function() {
        if (this.isLeaf()) {
          return !0;
        }
        if (this.isType(5)) {
          var a = this._children;
          if (1 === a.length && a[0].isLinear()) {
            return !0;
          }
        }
        return !1;
      };
      a.prototype.getTransformMatrix = function(a) {
        void 0 === a && (a = !1);
        return this.getTransform().getMatrix(a);
      };
      a.prototype.getTransform = function() {
        null === this._transform && (this._transform = new d(this));
        return this._transform;
      };
      a.prototype.getLayer = function() {
        null === this._layer && (this._layer = new f(this));
        return this._layer;
      };
      a.prototype.getLayerBounds = function(a) {
        var e = this.getBounds();
        a && this._layer && this._layer.expandBounds(e);
        return e;
      };
      a.prototype.visit = function(a, e) {
        switch(this._type) {
          case 1:
            a.visitNode(this, e);
            break;
          case 5:
            a.visitGroup(this, e);
            break;
          case 13:
            a.visitStage(this, e);
            break;
          case 3:
            a.visitShape(this, e);
            break;
          case 33:
            a.visitRenderable(this, e);
            break;
          default:
            h.Debug.unexpectedCase();
        }
      };
      a.prototype.invalidate = function() {
        this._propagateFlagsUp(b.UpOnInvalidate);
      };
      a.prototype.toString = function(a) {
        void 0 === a && (a = !1);
        var e = l[this._type] + " " + this._id;
        a && (e += " " + this._bounds.toString());
        return e;
      };
      a._path = [];
      a._nextId = 0;
      return a;
    }();
    p.Node = m;
    var v = function(a) {
      function c() {
        a.call(this);
        this._type = 5;
        this._children = [];
      }
      __extends(c, a);
      c.prototype.getChildren = function(a) {
        void 0 === a && (a = !1);
        return a ? this._children.slice(0) : this._children;
      };
      c.prototype.childAt = function(a) {
        return this._children[a];
      };
      Object.defineProperty(c.prototype, "child", {get:function() {
        return this._children[0];
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(c.prototype, "groupChild", {get:function() {
        return this._children[0];
      }, enumerable:!0, configurable:!0});
      c.prototype.addChild = function(a) {
        a._parent && a._parent.removeChildAt(a._index);
        a._parent = this;
        a._index = this._children.length;
        this._children.push(a);
        this._propagateFlagsUp(b.UpOnAddedOrRemoved);
        a._propagateFlagsDown(b.DownOnAddedOrRemoved);
      };
      c.prototype.removeChildAt = function(a) {
        var c = this._children[a];
        this._children.splice(a, 1);
        c._index = -1;
        c._parent = null;
        this._propagateFlagsUp(b.UpOnAddedOrRemoved);
        c._propagateFlagsDown(b.DownOnAddedOrRemoved);
      };
      c.prototype.clearChildren = function() {
        for (var a = 0;a < this._children.length;a++) {
          var c = this._children[a];
          c && (c._index = -1, c._parent = null, c._propagateFlagsDown(b.DownOnAddedOrRemoved));
        }
        this._children.length = 0;
        this._propagateFlagsUp(b.UpOnAddedOrRemoved);
      };
      c.prototype._propagateFlagsDown = function(a) {
        if (!this.hasFlags(a)) {
          this.setFlags(a);
          for (var c = this._children, b = 0;b < c.length;b++) {
            c[b]._propagateFlagsDown(a);
          }
        }
      };
      c.prototype.getBounds = function(a) {
        void 0 === a && (a = !1);
        var c = this._bounds || (this._bounds = r.createEmpty());
        if (this.hasFlags(8192)) {
          c.setEmpty();
          for (var b = this._children, d = r.allocate(), f = 0;f < b.length;f++) {
            var g = b[f];
            d.set(g.getBounds());
            g.getTransformMatrix().transformRectangleAABB(d);
            c.union(d);
          }
          d.free();
          this.removeFlags(8192);
        }
        return a ? c.clone() : c;
      };
      c.prototype.getLayerBounds = function(a) {
        if (!a) {
          return this.getBounds();
        }
        for (var c = r.createEmpty(), b = this._children, d = r.allocate(), f = 0;f < b.length;f++) {
          var g = b[f];
          d.set(g.getLayerBounds(a));
          g.getTransformMatrix().transformRectangleAABB(d);
          c.union(d);
        }
        d.free();
        a && this._layer && this._layer.expandBounds(c);
        return c;
      };
      return c;
    }(m);
    p.Group = v;
    var d = function() {
      function d(c) {
        this._node = c;
        this._matrix = a.createIdentity();
        this._colorMatrix = p.ColorMatrix.createIdentity();
        this._concatenatedMatrix = a.createIdentity();
        this._invertedConcatenatedMatrix = a.createIdentity();
        this._concatenatedColorMatrix = p.ColorMatrix.createIdentity();
      }
      d.prototype.setMatrix = function(a) {
        this._matrix.isEqual(a) || (this._matrix.set(a), this._node._propagateFlagsUp(b.UpOnMoved), this._node._propagateFlagsDown(b.DownOnMoved));
      };
      d.prototype.setColorMatrix = function(a) {
        this._colorMatrix.set(a);
        this._node._propagateFlagsUp(b.UpOnColorMatrixChanged);
        this._node._propagateFlagsDown(b.DownOnColorMatrixChanged);
      };
      d.prototype.getMatrix = function(a) {
        void 0 === a && (a = !1);
        return a ? this._matrix.clone() : this._matrix;
      };
      d.prototype.hasColorMatrix = function() {
        return null !== this._colorMatrix;
      };
      d.prototype.getColorMatrix = function(a) {
        void 0 === a && (a = !1);
        null === this._colorMatrix && (this._colorMatrix = p.ColorMatrix.createIdentity());
        return a ? this._colorMatrix.clone() : this._colorMatrix;
      };
      d.prototype.getConcatenatedMatrix = function(c) {
        void 0 === c && (c = !1);
        if (this._node.hasFlags(16384)) {
          for (var e = this._node._findClosestAncestor(16384, !1), b = m._getAncestors(this._node, e), d = e ? e.getTransform()._concatenatedMatrix.clone() : a.createIdentity(), f = b.length - 1;0 <= f;f--) {
            var e = b[f], g = e.getTransform();
            d.preMultiply(g._matrix);
            g._concatenatedMatrix.set(d);
            e.removeFlags(16384);
          }
        }
        return c ? this._concatenatedMatrix.clone() : this._concatenatedMatrix;
      };
      d.prototype.getInvertedConcatenatedMatrix = function(a) {
        void 0 === a && (a = !1);
        this._node.hasFlags(32768) && (this.getConcatenatedMatrix().inverse(this._invertedConcatenatedMatrix), this._node.removeFlags(32768));
        return a ? this._invertedConcatenatedMatrix.clone() : this._invertedConcatenatedMatrix;
      };
      d.prototype.toString = function() {
        return this._matrix.toString();
      };
      return d;
    }();
    p.Transform = d;
    var f = function() {
      function a(c) {
        this._node = c;
        this._mask = null;
        this._blendMode = 1;
      }
      Object.defineProperty(a.prototype, "filters", {get:function() {
        return this._filters;
      }, set:function(a) {
        this._filters = a;
        a.length && this._node.invalidate();
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "blendMode", {get:function() {
        return this._blendMode;
      }, set:function(a) {
        this._blendMode = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "mask", {get:function() {
        return this._mask;
      }, set:function(a) {
        this._mask !== a && (this._node.invalidate(), this._mask && this._mask.removeFlags(4));
        (this._mask = a) && this._mask.setFlags(4);
      }, enumerable:!0, configurable:!0});
      a.prototype.toString = function() {
        return n[this._blendMode];
      };
      a.prototype.expandBounds = function(a) {
        var e = this._filters;
        if (e) {
          for (var b = 0;b < e.length;b++) {
            e[b].expandBounds(a);
          }
        }
      };
      return a;
    }();
    p.Layer = f;
    k = function(a) {
      function c(e) {
        a.call(this);
        this._source = e;
        this._type = 3;
        this._ratio = 0;
      }
      __extends(c, a);
      c.prototype.getBounds = function(a) {
        void 0 === a && (a = !1);
        var c = this._bounds || (this._bounds = r.createEmpty());
        this.hasFlags(8192) && (c.set(this._source.getBounds()), this.removeFlags(8192));
        return a ? c.clone() : c;
      };
      Object.defineProperty(c.prototype, "source", {get:function() {
        return this._source;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(c.prototype, "ratio", {get:function() {
        return this._ratio;
      }, set:function(a) {
        a !== this._ratio && (this.invalidate(), this._ratio = a);
      }, enumerable:!0, configurable:!0});
      c.prototype._propagateFlagsDown = function(a) {
        this.setFlags(a);
      };
      c.prototype.getChildren = function(a) {
        return [this._source];
      };
      return c;
    }(m);
    p.Shape = k;
    k = function() {
      return function() {
        this.debug = !1;
        this.paintRenderable = !0;
        this.paintViewport = this.paintFlashing = this.paintDirtyRegion = this.paintBounds = !1;
        this.clear = !0;
      };
    }();
    p.RendererOptions = k;
    (function(a) {
      a[a.Canvas2D = 0] = "Canvas2D";
      a[a.WebGL = 1] = "WebGL";
      a[a.Both = 2] = "Both";
      a[a.DOM = 3] = "DOM";
      a[a.SVG = 4] = "SVG";
    })(p.Backend || (p.Backend = {}));
    u = function(a) {
      function c(e, c, b) {
        a.call(this);
        this._container = e;
        this._stage = c;
        this._options = b;
        this._viewport = r.createSquare(1024);
        this._devicePixelRatio = 1;
      }
      __extends(c, a);
      Object.defineProperty(c.prototype, "viewport", {set:function(a) {
        this._viewport.set(a);
      }, enumerable:!0, configurable:!0});
      c.prototype.render = function() {
        throw void 0;
      };
      c.prototype.resize = function() {
        throw void 0;
      };
      c.prototype.screenShot = function(a, c, b) {
        throw void 0;
      };
      return c;
    }(u);
    p.Renderer = u;
    u = function(b) {
      function c(a, d, f) {
        void 0 === f && (f = !1);
        b.call(this);
        this._preVisitor = new q;
        this._flags &= -2049;
        this._type = 13;
        this._scaleMode = c.DEFAULT_SCALE;
        this._align = c.DEFAULT_ALIGN;
        this._content = new v;
        this._content._flags &= -2049;
        this.addChild(this._content);
        this.setFlags(4096);
        this.setBounds(new r(0, 0, a, d));
        f ? (this._dirtyRegion = new x(a, d), this._dirtyRegion.addDirtyRectangle(new r(0, 0, a, d))) : this._dirtyRegion = null;
        this._updateContentMatrix();
      }
      __extends(c, b);
      Object.defineProperty(c.prototype, "dirtyRegion", {get:function() {
        return this._dirtyRegion;
      }, enumerable:!0, configurable:!0});
      c.prototype.setBounds = function(a) {
        b.prototype.setBounds.call(this, a);
        this._updateContentMatrix();
        this._dispatchEvent(1);
        this._dirtyRegion && (this._dirtyRegion = new x(a.w, a.h), this._dirtyRegion.addDirtyRectangle(a));
      };
      Object.defineProperty(c.prototype, "content", {get:function() {
        return this._content;
      }, enumerable:!0, configurable:!0});
      c.prototype.readyToRender = function() {
        this._preVisitor.isDirty = !1;
        this._preVisitor.start(this, this._dirtyRegion);
        return this._preVisitor.isDirty ? !0 : !1;
      };
      Object.defineProperty(c.prototype, "align", {get:function() {
        return this._align;
      }, set:function(a) {
        this._align = a;
        this._updateContentMatrix();
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(c.prototype, "scaleMode", {get:function() {
        return this._scaleMode;
      }, set:function(a) {
        this._scaleMode = a;
        this._updateContentMatrix();
      }, enumerable:!0, configurable:!0});
      c.prototype._updateContentMatrix = function() {
        if (this._scaleMode === c.DEFAULT_SCALE && this._align === c.DEFAULT_ALIGN) {
          this._content.getTransform().setMatrix(new a(1, 0, 0, 1, 0, 0));
        } else {
          var e = this.getBounds(), b = this._content.getBounds(), d = e.w / b.w, f = e.h / b.h;
          switch(this._scaleMode) {
            case 2:
              d = f = Math.max(d, f);
              break;
            case 4:
              d = f = 1;
              break;
            case 1:
              break;
            default:
              d = f = Math.min(d, f);
          }
          var g;
          g = this._align & 4 ? 0 : this._align & 8 ? e.w - b.w * d : (e.w - b.w * d) / 2;
          e = this._align & 1 ? 0 : this._align & 2 ? e.h - b.h * f : (e.h - b.h * f) / 2;
          this._content.getTransform().setMatrix(new a(d, 0, 0, f, g, e));
        }
      };
      c.DEFAULT_SCALE = 4;
      c.DEFAULT_ALIGN = 5;
      return c;
    }(v);
    p.Stage = u;
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    function r(a, c, e) {
      return a + (c - a) * e;
    }
    function a(a, c, e) {
      return r(a >> 24 & 255, c >> 24 & 255, e) << 24 | r(a >> 16 & 255, c >> 16 & 255, e) << 16 | r(a >> 8 & 255, c >> 8 & 255, e) << 8 | r(a & 255, c & 255, e);
    }
    function x(a, c, e) {
      a = a.measureText(c).width | 0;
      0 < e && (a += c.length * e);
      return a;
    }
    var n = p.Geometry.Point, b = p.Geometry.Rectangle, l = p.Geometry.Matrix, u = h.ArrayUtilities.indexOf, k = function(a) {
      function c() {
        a.call(this);
        this._parents = [];
        this._renderableParents = [];
        this._invalidateEventListeners = null;
        this._flags &= -2049;
        this._type = 33;
      }
      __extends(c, a);
      Object.defineProperty(c.prototype, "parents", {get:function() {
        return this._parents;
      }, enumerable:!0, configurable:!0});
      c.prototype.addParent = function(a) {
        u(this._parents, a);
        this._parents.push(a);
      };
      c.prototype.willRender = function() {
        for (var a = this._parents, c = 0;c < a.length;c++) {
          for (var b = a[c];b;) {
            if (b.isType(13)) {
              return !0;
            }
            if (!b.hasFlags(1)) {
              break;
            }
            b = b._parent;
          }
        }
        return !1;
      };
      c.prototype.addRenderableParent = function(a) {
        this._renderableParents.push(a);
      };
      c.prototype.wrap = function() {
        for (var a, c = this._parents, b = 0;b < c.length;b++) {
          if (a = c[b], !a._parent) {
            return a;
          }
        }
        a = new p.Shape(this);
        this.addParent(a);
        return a;
      };
      c.prototype.invalidate = function() {
        this.setFlags(4096);
        for (var a = this._parents, c = 0;c < a.length;c++) {
          a[c].invalidate();
        }
        a = this._renderableParents;
        for (c = 0;c < a.length;c++) {
          a[c].invalidate();
        }
        if (a = this._invalidateEventListeners) {
          for (c = 0;c < a.length;c++) {
            a[c](this);
          }
        }
      };
      c.prototype.addInvalidateEventListener = function(a) {
        this._invalidateEventListeners || (this._invalidateEventListeners = []);
        u(this._invalidateEventListeners, a);
        this._invalidateEventListeners.push(a);
      };
      c.prototype.getBounds = function(a) {
        void 0 === a && (a = !1);
        return a ? this._bounds.clone() : this._bounds;
      };
      c.prototype.getChildren = function(a) {
        return null;
      };
      c.prototype._propagateFlagsUp = function(a) {
        if (0 !== a && !this.hasFlags(a)) {
          for (var c = 0;c < this._parents.length;c++) {
            this._parents[c]._propagateFlagsUp(a);
          }
        }
      };
      c.prototype.render = function(a, c, b, d, f) {
      };
      return c;
    }(p.Node);
    p.Renderable = k;
    var t = function(a) {
      function c(c, b) {
        a.call(this);
        this.setBounds(c);
        this.render = b;
      }
      __extends(c, a);
      return c;
    }(k);
    p.CustomRenderable = t;
    (function(a) {
      a[a.Idle = 1] = "Idle";
      a[a.Playing = 2] = "Playing";
      a[a.Paused = 3] = "Paused";
      a[a.Ended = 4] = "Ended";
    })(p.RenderableVideoState || (p.RenderableVideoState = {}));
    t = function(a) {
      function c(e, d) {
        a.call(this);
        this._flags = 4352;
        this._lastPausedTime = this._lastTimeInvalidated = 0;
        this._pauseHappening = this._seekHappening = !1;
        this._isDOMElement = !0;
        this.setBounds(new b(0, 0, 1, 1));
        this._assetId = e;
        this._eventSerializer = d;
        var f = document.createElement("video"), k = this._handleVideoEvent.bind(this);
        f.preload = "metadata";
        f.addEventListener("play", k);
        f.addEventListener("pause", k);
        f.addEventListener("ended", k);
        f.addEventListener("loadeddata", k);
        f.addEventListener("progress", k);
        f.addEventListener("suspend", k);
        f.addEventListener("loadedmetadata", k);
        f.addEventListener("error", k);
        f.addEventListener("seeking", k);
        f.addEventListener("seeked", k);
        f.addEventListener("canplay", k);
        f.style.position = "absolute";
        this._video = f;
        this._videoEventHandler = k;
        c._renderableVideos.push(this);
        "undefined" !== typeof registerInspectorAsset && registerInspectorAsset(-1, -1, this);
        this._state = 1;
      }
      __extends(c, a);
      Object.defineProperty(c.prototype, "video", {get:function() {
        return this._video;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(c.prototype, "state", {get:function() {
        return this._state;
      }, enumerable:!0, configurable:!0});
      c.prototype.play = function() {
        this._state = 2;
        this._video.play();
      };
      c.prototype.pause = function() {
        this._state = 3;
        this._video.pause();
      };
      c.prototype._handleVideoEvent = function(a) {
        var c = null, b = this._video;
        switch(a.type) {
          case "play":
            if (!this._pauseHappening) {
              return;
            }
            a = 7;
            break;
          case "pause":
            if (2 === this._state) {
              b.play();
              return;
            }
            a = 6;
            this._pauseHappening = !0;
            break;
          case "ended":
            this._state = 4;
            this._notifyNetStream(3, c);
            a = 4;
            break;
          case "loadeddata":
            this._pauseHappening = !1;
            this._notifyNetStream(2, c);
            this.play();
            return;
          case "canplay":
            if (this._pauseHappening) {
              return;
            }
            a = 5;
            break;
          case "progress":
            a = 10;
            break;
          case "suspend":
            return;
          case "loadedmetadata":
            a = 1;
            c = {videoWidth:b.videoWidth, videoHeight:b.videoHeight, duration:b.duration};
            break;
          case "error":
            a = 11;
            c = {code:b.error.code};
            break;
          case "seeking":
            if (!this._seekHappening) {
              return;
            }
            a = 8;
            break;
          case "seeked":
            if (!this._seekHappening) {
              return;
            }
            a = 9;
            this._seekHappening = !1;
            break;
          default:
            return;
        }
        this._notifyNetStream(a, c);
      };
      c.prototype._notifyNetStream = function(a, c) {
        this._eventSerializer.sendVideoPlaybackEvent(this._assetId, a, c);
      };
      c.prototype.processControlRequest = function(a, c) {
        var b = this._video;
        switch(a) {
          case 1:
            b.src = c.url;
            this.play();
            this._notifyNetStream(0, null);
            break;
          case 9:
            b.paused && b.play();
            break;
          case 2:
            b && (c.paused && !b.paused ? (isNaN(c.time) ? this._lastPausedTime = b.currentTime : (0 !== b.seekable.length && (b.currentTime = c.time), this._lastPausedTime = c.time), this.pause()) : !c.paused && b.paused && (this.play(), isNaN(c.time) || this._lastPausedTime === c.time || 0 === b.seekable.length || (b.currentTime = c.time)));
            break;
          case 3:
            b && 0 !== b.seekable.length && (this._seekHappening = !0, b.currentTime = c.time);
            break;
          case 4:
            return b ? b.currentTime : 0;
          case 5:
            return b ? b.duration : 0;
          case 6:
            b && (b.volume = c.volume);
            break;
          case 7:
            if (!b) {
              return 0;
            }
            var d = -1;
            if (b.buffered) {
              for (var f = 0;f < b.buffered.length;f++) {
                d = Math.max(d, b.buffered.end(f));
              }
            } else {
              d = b.duration;
            }
            return Math.round(500 * d);
          case 8:
            return b ? Math.round(500 * b.duration) : 0;
        }
      };
      c.prototype.checkForUpdate = function() {
        this._lastTimeInvalidated !== this._video.currentTime && (this._isDOMElement || this.invalidate());
        this._lastTimeInvalidated = this._video.currentTime;
      };
      c.checkForVideoUpdates = function() {
        for (var a = c._renderableVideos, b = 0;b < a.length;b++) {
          var d = a[b];
          d.willRender() ? (d._video.parentElement || d.invalidate(), d._video.style.zIndex = d.parents[0].depth + "") : d._video.parentElement && d._dispatchEvent(2);
          a[b].checkForUpdate();
        }
      };
      c.prototype.render = function(a, c, b) {
        (c = this._video) && 0 < c.videoWidth && a.drawImage(c, 0, 0, c.videoWidth, c.videoHeight, 0, 0, this._bounds.w, this._bounds.h);
      };
      c._renderableVideos = [];
      return c;
    }(k);
    p.RenderableVideo = t;
    t = function(a) {
      function c(c, b) {
        a.call(this);
        this._flags = 4352;
        this.properties = {};
        this.setBounds(b);
        c instanceof HTMLCanvasElement ? this._initializeSourceCanvas(c) : this._sourceImage = c;
      }
      __extends(c, a);
      c.FromDataBuffer = function(a, b, d) {
        var f = document.createElement("canvas");
        f.width = d.w;
        f.height = d.h;
        d = new c(f, d);
        d.updateFromDataBuffer(a, b);
        return d;
      };
      c.FromNode = function(a, b, d, f, g) {
        var k = document.createElement("canvas"), h = a.getBounds();
        k.width = h.w;
        k.height = h.h;
        k = new c(k, h);
        k.drawNode(a, b, d, f, g);
        return k;
      };
      c.FromImage = function(a, d, f) {
        return new c(a, new b(0, 0, d, f));
      };
      c.prototype.updateFromDataBuffer = function(a, c) {
        if (p.imageUpdateOption.value) {
          var b = c.buffer;
          if (4 !== a && 5 !== a && 6 !== a) {
            var d = this._bounds, f = this._imageData;
            f && f.width === d.w && f.height === d.h || (f = this._imageData = this._context.createImageData(d.w, d.h));
            p.imageConvertOption.value && (b = new Int32Array(b), d = new Int32Array(f.data.buffer), h.ColorUtilities.convertImage(a, 3, b, d));
            this._ensureSourceCanvas();
            this._context.putImageData(f, 0, 0);
          }
          this.invalidate();
        }
      };
      c.prototype.readImageData = function(a) {
        a.writeRawBytes(this.imageData.data);
      };
      c.prototype.render = function(a, c, b) {
        this.renderSource ? a.drawImage(this.renderSource, 0, 0) : this._renderFallback(a);
      };
      c.prototype.drawNode = function(a, c, b, d, f) {
        b = p.Canvas2D;
        d = this.getBounds();
        (new b.Canvas2DRenderer(this._canvas, null)).renderNode(a, f || d, c);
      };
      c.prototype.mask = function(a) {
        for (var c = this.imageData, b = new Int32Array(c.data.buffer), d = h.ColorUtilities.getUnpremultiplyTable(), f = 0;f < a.length;f++) {
          var g = a[f];
          if (0 === g) {
            b[f] = 0;
          } else {
            if (255 !== g) {
              var k = b[f], m = k >> 0 & 255, q = k >> 8 & 255, k = k >> 16 & 255, t = g << 8, m = d[t + Math.min(m, g)], q = d[t + Math.min(q, g)], k = d[t + Math.min(k, g)];
              b[f] = g << 24 | k << 16 | q << 8 | m;
            }
          }
        }
        this._context.putImageData(c, 0, 0);
      };
      c.prototype._initializeSourceCanvas = function(a) {
        this._canvas = a;
        this._context = this._canvas.getContext("2d");
      };
      c.prototype._ensureSourceCanvas = function() {
        if (!this._canvas) {
          var a = document.createElement("canvas"), c = this._bounds;
          a.width = c.w;
          a.height = c.h;
          this._initializeSourceCanvas(a);
        }
      };
      Object.defineProperty(c.prototype, "imageData", {get:function() {
        this._canvas || (this._ensureSourceCanvas(), this._context.drawImage(this._sourceImage, 0, 0), this._sourceImage = null);
        return this._context.getImageData(0, 0, this._bounds.w, this._bounds.h);
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(c.prototype, "renderSource", {get:function() {
        return this._canvas || this._sourceImage;
      }, enumerable:!0, configurable:!0});
      c.prototype._renderFallback = function(a) {
      };
      return c;
    }(k);
    p.RenderableBitmap = t;
    (function(a) {
      a[a.Fill = 0] = "Fill";
      a[a.Stroke = 1] = "Stroke";
      a[a.StrokeFill = 2] = "StrokeFill";
    })(p.PathType || (p.PathType = {}));
    var q = function() {
      return function(a, c, b, d) {
        this.type = a;
        this.style = c;
        this.smoothImage = b;
        this.strokeProperties = d;
        this.path = new Path2D;
      };
    }();
    p.StyledPath = q;
    var m = function() {
      return function(a, c, b, d, f) {
        this.thickness = a;
        this.scaleMode = c;
        this.capsStyle = b;
        this.jointsStyle = d;
        this.miterLimit = f;
      };
    }();
    p.StrokeProperties = m;
    var v = function(a) {
      function c(c, b, d, f) {
        a.call(this);
        this._flags = 5632;
        this.properties = {};
        this.setBounds(f);
        this._id = c;
        this._pathData = b;
        this._textures = d;
        d.length && this.setFlags(256);
      }
      __extends(c, a);
      c.prototype.update = function(a, c, b) {
        this.setBounds(b);
        this._pathData = a;
        this._paths = null;
        this._textures = c;
        this.setFlags(256);
        this.invalidate();
      };
      c.prototype.render = function(a, c, b, d, f) {
        void 0 === d && (d = null);
        void 0 === f && (f = !1);
        a.fillStyle = a.strokeStyle = "transparent";
        c = this._deserializePaths(this._pathData, a, c);
        for (b = 0;b < c.length;b++) {
          var g = c[b];
          a.mozImageSmoothingEnabled = a.msImageSmoothingEnabled = a.imageSmoothingEnabled = g.smoothImage;
          if (0 === g.type) {
            d ? d.addPath(g.path, a.currentTransform) : (a.fillStyle = f ? "#000000" : g.style, a.fill(g.path, "evenodd"), a.fillStyle = "transparent");
          } else {
            if (!d && !f) {
              a.strokeStyle = g.style;
              var k = 1;
              g.strokeProperties && (k = g.strokeProperties.scaleMode, a.lineWidth = g.strokeProperties.thickness, a.lineCap = g.strokeProperties.capsStyle, a.lineJoin = g.strokeProperties.jointsStyle, a.miterLimit = g.strokeProperties.miterLimit);
              var h = a.lineWidth;
              (h = 1 === h || 3 === h) && a.translate(.5, .5);
              a.flashStroke(g.path, k);
              h && a.translate(-.5, -.5);
              a.strokeStyle = "transparent";
            }
          }
        }
      };
      c.prototype._deserializePaths = function(a, b, d) {
        if (this._paths) {
          return this._paths;
        }
        d = this._paths = [];
        var f = null, g = null, k = 0, q = 0, t, l, v = !1, u = 0, n = 0, p = a.commands, r = a.coordinates, x = a.styles, z = x.position = 0;
        a = a.commandsPosition;
        for (var B = 0;B < a;B++) {
          switch(p[B]) {
            case 9:
              v && f && (f.lineTo(u, n), g && g.lineTo(u, n));
              v = !0;
              k = u = r[z++] / 20;
              q = n = r[z++] / 20;
              f && f.moveTo(k, q);
              g && g.moveTo(k, q);
              break;
            case 10:
              k = r[z++] / 20;
              q = r[z++] / 20;
              f && f.lineTo(k, q);
              g && g.lineTo(k, q);
              break;
            case 11:
              t = r[z++] / 20;
              l = r[z++] / 20;
              k = r[z++] / 20;
              q = r[z++] / 20;
              f && f.quadraticCurveTo(t, l, k, q);
              g && g.quadraticCurveTo(t, l, k, q);
              break;
            case 12:
              t = r[z++] / 20;
              l = r[z++] / 20;
              var E = r[z++] / 20, A = r[z++] / 20, k = r[z++] / 20, q = r[z++] / 20;
              f && f.bezierCurveTo(t, l, E, A, k, q);
              g && g.bezierCurveTo(t, l, E, A, k, q);
              break;
            case 1:
              f = this._createPath(0, h.ColorUtilities.rgbaToCSSStyle(x.readUnsignedInt()), !1, null, k, q);
              break;
            case 3:
              t = this._readBitmap(x, b);
              f = this._createPath(0, t.style, t.smoothImage, null, k, q);
              break;
            case 2:
              f = this._createPath(0, this._readGradient(x, b), !1, null, k, q);
              break;
            case 4:
              f = null;
              break;
            case 5:
              g = h.ColorUtilities.rgbaToCSSStyle(x.readUnsignedInt());
              x.position += 1;
              t = x.readByte();
              l = c.LINE_CAPS_STYLES[x.readByte()];
              E = c.LINE_JOINTS_STYLES[x.readByte()];
              t = new m(r[z++] / 20, t, l, E, x.readByte());
              g = this._createPath(1, g, !1, t, k, q);
              break;
            case 6:
              g = this._createPath(2, this._readGradient(x, b), !1, null, k, q);
              break;
            case 7:
              t = this._readBitmap(x, b);
              g = this._createPath(2, t.style, t.smoothImage, null, k, q);
              break;
            case 8:
              g = null;
          }
        }
        v && f && (f.lineTo(u, n), g && g.lineTo(u, n));
        this._pathData = null;
        return d;
      };
      c.prototype._createPath = function(a, c, b, d, f, g) {
        a = new q(a, c, b, d);
        this._paths.push(a);
        a.path.moveTo(f, g);
        return a.path;
      };
      c.prototype._readMatrix = function(a) {
        return new l(a.readFloat(), a.readFloat(), a.readFloat(), a.readFloat(), a.readFloat(), a.readFloat());
      };
      c.prototype._readGradient = function(a, c) {
        var b = a.readUnsignedByte(), d = 2 * a.readShort() / 255, f = this._readMatrix(a), b = 16 === b ? c.createLinearGradient(-1, 0, 1, 0) : c.createRadialGradient(d, 0, 0, 0, 0, 1);
        b.setTransform && b.setTransform(f.toSVGMatrix());
        f = a.readUnsignedByte();
        for (d = 0;d < f;d++) {
          var g = a.readUnsignedByte() / 255, k = h.ColorUtilities.rgbaToCSSStyle(a.readUnsignedInt());
          b.addColorStop(g, k);
        }
        a.position += 2;
        return b;
      };
      c.prototype._readBitmap = function(a, c) {
        var b = a.readUnsignedInt(), d = this._readMatrix(a), f = a.readBoolean() ? "repeat" : "no-repeat", g = a.readBoolean();
        (b = this._textures[b]) ? (f = c.createPattern(b.renderSource, f), f.setTransform(d.toSVGMatrix())) : f = null;
        return {style:f, smoothImage:g};
      };
      c.prototype._renderFallback = function(a) {
        this.fillStyle || (this.fillStyle = h.ColorStyle.randomStyle());
        var c = this._bounds;
        a.save();
        a.beginPath();
        a.lineWidth = 2;
        a.fillStyle = this.fillStyle;
        a.fillRect(c.x, c.y, c.w, c.h);
        a.restore();
      };
      c.LINE_CAPS_STYLES = ["round", "butt", "square"];
      c.LINE_JOINTS_STYLES = ["round", "bevel", "miter"];
      return c;
    }(k);
    p.RenderableShape = v;
    t = function(b) {
      function c() {
        b.apply(this, arguments);
        this._flags = 5888;
        this._morphPaths = Object.create(null);
      }
      __extends(c, b);
      c.prototype._deserializePaths = function(c, b, d) {
        if (this._morphPaths[d]) {
          return this._morphPaths[d];
        }
        var f = this._morphPaths[d] = [], g = null, k = null, q = 0, t = 0, l, u, n = !1, p = 0, x = 0, K = c.commands, D = c.coordinates, z = c.morphCoordinates, B = c.styles, E = c.morphStyles;
        B.position = 0;
        var A = E.position = 0;
        c = c.commandsPosition;
        for (var C = 0;C < c;C++) {
          switch(K[C]) {
            case 9:
              n && g && (g.lineTo(p, x), k && k.lineTo(p, x));
              n = !0;
              q = p = r(D[A], z[A++], d) / 20;
              t = x = r(D[A], z[A++], d) / 20;
              g && g.moveTo(q, t);
              k && k.moveTo(q, t);
              break;
            case 10:
              q = r(D[A], z[A++], d) / 20;
              t = r(D[A], z[A++], d) / 20;
              g && g.lineTo(q, t);
              k && k.lineTo(q, t);
              break;
            case 11:
              l = r(D[A], z[A++], d) / 20;
              u = r(D[A], z[A++], d) / 20;
              q = r(D[A], z[A++], d) / 20;
              t = r(D[A], z[A++], d) / 20;
              g && g.quadraticCurveTo(l, u, q, t);
              k && k.quadraticCurveTo(l, u, q, t);
              break;
            case 12:
              l = r(D[A], z[A++], d) / 20;
              u = r(D[A], z[A++], d) / 20;
              var F = r(D[A], z[A++], d) / 20, G = r(D[A], z[A++], d) / 20, q = r(D[A], z[A++], d) / 20, t = r(D[A], z[A++], d) / 20;
              g && g.bezierCurveTo(l, u, F, G, q, t);
              k && k.bezierCurveTo(l, u, F, G, q, t);
              break;
            case 1:
              g = this._createMorphPath(0, d, h.ColorUtilities.rgbaToCSSStyle(a(B.readUnsignedInt(), E.readUnsignedInt(), d)), !1, null, q, t);
              break;
            case 3:
              l = this._readMorphBitmap(B, E, d, b);
              g = this._createMorphPath(0, d, l.style, l.smoothImage, null, q, t);
              break;
            case 2:
              l = this._readMorphGradient(B, E, d, b);
              g = this._createMorphPath(0, d, l, !1, null, q, t);
              break;
            case 4:
              g = null;
              break;
            case 5:
              l = r(D[A], z[A++], d) / 20;
              k = h.ColorUtilities.rgbaToCSSStyle(a(B.readUnsignedInt(), E.readUnsignedInt(), d));
              B.position += 1;
              u = B.readByte();
              F = v.LINE_CAPS_STYLES[B.readByte()];
              G = v.LINE_JOINTS_STYLES[B.readByte()];
              l = new m(l, u, F, G, B.readByte());
              k = this._createMorphPath(1, d, k, !1, l, q, t);
              break;
            case 6:
              l = this._readMorphGradient(B, E, d, b);
              k = this._createMorphPath(2, d, l, !1, null, q, t);
              break;
            case 7:
              l = this._readMorphBitmap(B, E, d, b);
              k = this._createMorphPath(2, d, l.style, l.smoothImage, null, q, t);
              break;
            case 8:
              k = null;
          }
        }
        n && g && (g.lineTo(p, x), k && k.lineTo(p, x));
        return f;
      };
      c.prototype._createMorphPath = function(a, c, b, d, f, g, k) {
        a = new q(a, b, d, f);
        this._morphPaths[c].push(a);
        a.path.moveTo(g, k);
        return a.path;
      };
      c.prototype._readMorphMatrix = function(a, c, b) {
        return new l(r(a.readFloat(), c.readFloat(), b), r(a.readFloat(), c.readFloat(), b), r(a.readFloat(), c.readFloat(), b), r(a.readFloat(), c.readFloat(), b), r(a.readFloat(), c.readFloat(), b), r(a.readFloat(), c.readFloat(), b));
      };
      c.prototype._readMorphGradient = function(c, b, d, f) {
        var g = c.readUnsignedByte(), k = 2 * c.readShort() / 255, m = this._readMorphMatrix(c, b, d);
        f = 16 === g ? f.createLinearGradient(-1, 0, 1, 0) : f.createRadialGradient(k, 0, 0, 0, 0, 1);
        f.setTransform && f.setTransform(m.toSVGMatrix());
        m = c.readUnsignedByte();
        for (g = 0;g < m;g++) {
          var k = r(c.readUnsignedByte() / 255, b.readUnsignedByte() / 255, d), q = a(c.readUnsignedInt(), b.readUnsignedInt(), d), q = h.ColorUtilities.rgbaToCSSStyle(q);
          f.addColorStop(k, q);
        }
        c.position += 2;
        return f;
      };
      c.prototype._readMorphBitmap = function(a, c, b, d) {
        var f = a.readUnsignedInt();
        c = this._readMorphMatrix(a, c, b);
        b = a.readBoolean() ? "repeat" : "no-repeat";
        a = a.readBoolean();
        d = d.createPattern(this._textures[f]._canvas, b);
        d.setTransform(c.toSVGMatrix());
        return {style:d, smoothImage:a};
      };
      return c;
    }(v);
    p.RenderableMorphShape = t;
    var d = function() {
      function a() {
        this.align = this.leading = this.descent = this.ascent = this.width = this.y = this.x = 0;
        this.runs = [];
      }
      a._getMeasureContext = function() {
        a._measureContext || (a._measureContext = document.createElement("canvas").getContext("2d"));
        return a._measureContext;
      };
      a.prototype.addRun = function(c, b, d, k, h) {
        if (d) {
          var m = a._getMeasureContext();
          m.font = c;
          m = x(m, d, k);
          this.runs.push(new f(c, b, d, m, k, h));
          this.width += m;
        }
      };
      a.prototype.wrap = function(c) {
        var b = [this], d = this.runs, k = this;
        k.width = 0;
        k.runs = [];
        for (var h = a._getMeasureContext(), m = 0;m < d.length;m++) {
          var q = d[m], t = q.text;
          q.text = "";
          q.width = 0;
          h.font = q.font;
          for (var l = c, v = t.split(/[\s.-]/), u = 0, n = 0;n < v.length;n++) {
            var p = v[n], r = t.substr(u, p.length + 1), K = q.letterSpacing, D = x(h, r, K);
            if (D > l) {
              do {
                if (q.text && (k.runs.push(q), k.width += q.width, q = new f(q.font, q.fillStyle, "", 0, q.letterSpacing, q.underline), l = new a, l.y = k.y + k.descent + k.leading + k.ascent | 0, l.ascent = k.ascent, l.descent = k.descent, l.leading = k.leading, l.align = k.align, b.push(l), k = l), l = c - D, 0 > l) {
                  for (var z = r.length, B = r;1 < z && !(z--, B = r.substr(0, z), D = x(h, B, K), D <= c);) {
                  }
                  q.text = B;
                  q.width = D;
                  r = r.substr(z);
                  D = x(h, r, K);
                }
              } while (r && 0 > l);
            } else {
              l -= D;
            }
            q.text += r;
            q.width += D;
            u += p.length + 1;
          }
          k.runs.push(q);
          k.width += q.width;
        }
        return b;
      };
      a.prototype.toString = function() {
        return "TextLine {x: " + this.x + ", y: " + this.y + ", width: " + this.width + ", height: " + (this.ascent + this.descent + this.leading) + "}";
      };
      return a;
    }();
    p.TextLine = d;
    var f = function() {
      return function(a, c, b, d, f, k) {
        void 0 === a && (a = "");
        void 0 === c && (c = "");
        void 0 === b && (b = "");
        void 0 === d && (d = 0);
        void 0 === f && (f = 0);
        void 0 === k && (k = !1);
        this.font = a;
        this.fillStyle = c;
        this.text = b;
        this.width = d;
        this.letterSpacing = f;
        this.underline = k;
      };
    }();
    p.TextRun = f;
    t = function(a) {
      function c(c) {
        a.call(this);
        this._flags = 4352;
        this.properties = {};
        this._textBounds = c.clone();
        this._textRunData = null;
        this._plainText = "";
        this._borderColor = this._backgroundColor = 0;
        this._matrix = l.createIdentity();
        this._coords = null;
        this._scrollV = 1;
        this._scrollH = 0;
        this.textRect = c.clone();
        this.lines = [];
        this.setBounds(c);
      }
      __extends(c, a);
      c.prototype.setBounds = function(c) {
        a.prototype.setBounds.call(this, c);
        this._textBounds.set(c);
        this.textRect.setElements(c.x + 2, c.y + 2, c.w - 2, c.h - 2);
      };
      c.prototype.setContent = function(a, c, b, d) {
        this._textRunData = c;
        this._plainText = a;
        this._matrix.set(b);
        this._coords = d;
        this.lines = [];
      };
      c.prototype.setStyle = function(a, c, b, d) {
        this._backgroundColor = a;
        this._borderColor = c;
        this._scrollV = b;
        this._scrollH = d;
      };
      c.prototype.reflow = function(a, c) {
        var b = this._textRunData;
        if (b) {
          for (var f = this._bounds, g = f.w - 4, k = this._plainText, m = this.lines, q = new d, t = 0, l = 0, v = 0, u = 0, n = -4294967295, p = -1;b.position < b.length;) {
            var r = b.readInt(), x = b.readInt(), B = b.readInt(), E = b.readUTF(), A = b.readInt(), C = b.readInt(), F = b.readInt();
            A > v && (v = A);
            C > u && (u = C);
            F > n && (n = F);
            A = b.readBoolean();
            C = "";
            b.readBoolean() && (C += "italic ");
            A && (C += "bold ");
            B = C + B + "px " + E + ", AdobeBlank";
            E = b.readInt();
            E = h.ColorUtilities.rgbToHex(E);
            A = b.readInt();
            -1 === p && (p = A);
            b.readBoolean();
            b.readInt();
            b.readInt();
            b.readInt();
            A = b.readInt();
            b.readInt();
            for (var C = b.readBoolean(), G = "", F = !1;!F;r++) {
              var F = r >= x - 1, J = k[r];
              if ("\r" !== J && "\n" !== J && (G += J, r < k.length - 1)) {
                continue;
              }
              q.addRun(B, E, G, A, C);
              if (q.runs.length) {
                m.length && (t += n);
                t += v;
                q.y = t | 0;
                t += u;
                q.ascent = v;
                q.descent = u;
                q.leading = n;
                q.align = p;
                if (c && q.width > g) {
                  for (q = q.wrap(g), G = 0;G < q.length;G++) {
                    var H = q[G], t = H.y + H.descent + H.leading;
                    m.push(H);
                    H.width > l && (l = H.width);
                  }
                } else {
                  m.push(q), q.width > l && (l = q.width);
                }
                q = new d;
              } else {
                t += v + u + n;
              }
              G = "";
              if (F) {
                u = v = 0;
                n = -4294967295;
                p = -1;
                break;
              }
              "\r" === J && "\n" === k[r + 1] && r++;
            }
            q.addRun(B, E, G, A, C);
          }
          b = k[k.length - 1];
          "\r" !== b && "\n" !== b || m.push(q);
          b = this.textRect;
          b.w = l;
          b.h = t;
          if (a) {
            if (!c) {
              g = l;
              l = f.w;
              switch(a) {
                case 1:
                  b.x = l - (g + 4) >> 1;
                  break;
                case 3:
                  b.x = l - (g + 4);
              }
              this._textBounds.setElements(b.x - 2, b.y - 2, b.w + 4, b.h + 4);
              f.w = g + 4;
            }
            f.x = b.x - 2;
            f.h = t + 4;
          } else {
            this._textBounds = f;
          }
          for (r = 0;r < m.length;r++) {
            if (f = m[r], f.width < g) {
              switch(f.align) {
                case 1:
                  f.x = g - f.width | 0;
                  break;
                case 2:
                  f.x = (g - f.width) / 2 | 0;
              }
            }
          }
          this.invalidate();
        }
      };
      c.roundBoundPoints = function(a) {
        for (var b = 0;b < a.length;b++) {
          var c = a[b];
          c.x = Math.floor(c.x + .1) + .5;
          c.y = Math.floor(c.y + .1) + .5;
        }
      };
      c.prototype.render = function(a) {
        a.save();
        var b = this._textBounds;
        this._backgroundColor && (a.fillStyle = h.ColorUtilities.rgbaToCSSStyle(this._backgroundColor), a.fillRect(b.x, b.y, b.w, b.h));
        if (this._borderColor) {
          a.strokeStyle = h.ColorUtilities.rgbaToCSSStyle(this._borderColor);
          a.lineCap = "square";
          a.lineWidth = 1;
          var d = c.absoluteBoundPoints, f = a.currentTransform;
          f ? (b = b.clone(), (new l(f.a, f.b, f.c, f.d, f.e, f.f)).transformRectangle(b, d), a.setTransform(1, 0, 0, 1, 0, 0)) : (d[0].x = b.x, d[0].y = b.y, d[1].x = b.x + b.w, d[1].y = b.y, d[2].x = b.x + b.w, d[2].y = b.y + b.h, d[3].x = b.x, d[3].y = b.y + b.h);
          c.roundBoundPoints(d);
          b = new Path2D;
          b.moveTo(d[0].x, d[0].y);
          b.lineTo(d[1].x, d[1].y);
          b.lineTo(d[2].x, d[2].y);
          b.lineTo(d[3].x, d[3].y);
          b.lineTo(d[0].x, d[0].y);
          a.stroke(b);
          f && a.setTransform(f.a, f.b, f.c, f.d, f.e, f.f);
        }
        this._coords ? this._renderChars(a) : this._renderLines(a);
        a.restore();
      };
      c.prototype._renderChars = function(a) {
        if (this._matrix) {
          var b = this._matrix;
          a.transform(b.a, b.b, b.c, b.d, b.tx, b.ty);
        }
        var b = this.lines, c = this._coords;
        c.position = 0;
        for (var d = "", f = "", g = 0;g < b.length;g++) {
          for (var k = b[g].runs, h = 0;h < k.length;h++) {
            var m = k[h];
            m.font !== d && (a.font = d = m.font);
            m.fillStyle !== f && (a.fillStyle = f = m.fillStyle);
            for (var m = m.text, q = 0;q < m.length;q++) {
              var t = c.readInt() / 20, l = c.readInt() / 20;
              a.fillText(m[q], t, l);
            }
          }
        }
      };
      c.prototype._renderLines = function(a) {
        var b = this._textBounds;
        a.beginPath();
        a.rect(b.x + 2, b.y + 2, b.w - 4, b.h - 4);
        a.clip();
        a.translate(b.x - this._scrollH + 2, b.y + 2);
        var c = this.lines, d = this._scrollV, f = 0, g = "", k = "";
        a.textAlign = "left";
        a.textBaseline = "alphabetic";
        for (var h = 0;h < c.length;h++) {
          var m = c[h], q = m.x, t = m.y;
          if (h + 1 < d) {
            f = t + m.descent + m.leading;
          } else {
            t -= f;
            if (h + 1 - d && t > b.h) {
              break;
            }
            for (var l = m.runs, v = 0;v < l.length;v++) {
              var u = l[v];
              u.font !== g && (a.font = g = u.font);
              u.fillStyle !== k && (a.fillStyle = k = u.fillStyle);
              u.underline && a.fillRect(q, t + m.descent / 2 | 0, u.width, 1);
              a.textAlign = "left";
              a.textBaseline = "alphabetic";
              if (0 < u.letterSpacing) {
                for (var n = u.text, p = 0;p < n.length;p++) {
                  a.fillText(n[p], q, t), q += x(a, n[p], u.letterSpacing);
                }
              } else {
                a.fillText(u.text, q, t), q += u.width;
              }
            }
          }
        }
      };
      c.absoluteBoundPoints = [new n(0, 0), new n(0, 0), new n(0, 0), new n(0, 0)];
      return c;
    }(k);
    p.RenderableText = t;
    k = function(a) {
      function c(c, d) {
        a.call(this);
        this._flags = 768;
        this.properties = {};
        this.setBounds(new b(0, 0, c, d));
      }
      __extends(c, a);
      Object.defineProperty(c.prototype, "text", {get:function() {
        return this._text;
      }, set:function(a) {
        this._text = a;
      }, enumerable:!0, configurable:!0});
      c.prototype.render = function(a, b, c) {
        a.save();
        a.textBaseline = "top";
        a.fillStyle = "white";
        a.fillText(this.text, 0, 0);
        a.restore();
      };
      return c;
    }(k);
    p.Label = k;
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    function r(a, b, k, h, q) {
      b = n[b - 1];
      q && (q = b / 4, k -= q, h -= q);
      q = Math.ceil((1 > k ? 1 : k) / (b - 1E-9));
      b = Math.ceil((1 > h ? 1 : h) / (b - 1E-9));
      a.x -= q;
      a.w += 2 * q;
      a.y -= b;
      a.h += 2 * b;
    }
    var a = h.ColorUtilities.clampByte, x = function() {
      function a() {
      }
      a.prototype.expandBounds = function(a) {
      };
      return a;
    }();
    p.Filter = x;
    var n = [2, 1 / 1.05, 1 / 1.35, 1 / 1.55, 1 / 1.75, 1 / 1.9, .5, 1 / 2.1, 1 / 2.2, 1 / 2.3, .4, 1 / 3, 1 / 3, 1 / 3.5, 1 / 3.5], b = function(a) {
      function b(k, h, q) {
        a.call(this);
        this.blurX = k;
        this.blurY = h;
        this.quality = q;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        r(a, this.quality, this.blurX, this.blurY, !0);
      };
      return b;
    }(x);
    p.BlurFilter = b;
    b = function(a) {
      function b(k, h, q, m, v, d, f, g, c, e, u) {
        a.call(this);
        this.alpha = k;
        this.angle = h;
        this.blurX = q;
        this.blurY = m;
        this.color = v;
        this.distance = d;
        this.hideObject = f;
        this.inner = g;
        this.knockout = c;
        this.quality = e;
        this.strength = u;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        r(a, this.quality, this.blurX, this.blurY, !1);
        if (this.distance) {
          var b = this.angle * Math.PI / 180, h = Math.cos(b) * this.distance, m = Math.sin(b) * this.distance, b = a.x + (0 <= h ? 0 : Math.floor(h)), h = a.x + a.w + Math.ceil(Math.abs(h)), l = a.y + (0 <= m ? 0 : Math.floor(m)), m = a.y + a.h + Math.ceil(Math.abs(m));
          a.x = b;
          a.w = h - b;
          a.y = l;
          a.h = m - l;
        }
      };
      return b;
    }(x);
    p.DropshadowFilter = b;
    b = function(a) {
      function b(k, h, q, m, v, d, f, g) {
        a.call(this);
        this.alpha = k;
        this.blurX = h;
        this.blurY = q;
        this.color = m;
        this.inner = v;
        this.knockout = d;
        this.quality = f;
        this.strength = g;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        this.inner || r(a, this.quality, this.blurX, this.blurY, !1);
      };
      return b;
    }(x);
    p.GlowFilter = b;
    (function(a) {
      a[a.Unknown = 0] = "Unknown";
      a[a.Identity = 1] = "Identity";
    })(p.ColorMatrixType || (p.ColorMatrixType = {}));
    x = function(b) {
      function h(a) {
        b.call(this);
        this._data = new Float32Array(a);
        this._type = 0;
      }
      __extends(h, b);
      h.prototype.clone = function() {
        var a = new h(this._data);
        a._type = this._type;
        return a;
      };
      h.prototype.set = function(a) {
        this._data.set(a._data);
        this._type = a._type;
      };
      h.prototype.toWebGLMatrix = function() {
        return new Float32Array(this._data);
      };
      h.prototype.asWebGLMatrix = function() {
        return this._data.subarray(0, 16);
      };
      h.prototype.asWebGLVector = function() {
        return this._data.subarray(16, 20);
      };
      h.prototype.isIdentity = function() {
        if (this._type & 1) {
          return !0;
        }
        var a = this._data;
        return 1 == a[0] && 0 == a[1] && 0 == a[2] && 0 == a[3] && 0 == a[4] && 1 == a[5] && 0 == a[6] && 0 == a[7] && 0 == a[8] && 0 == a[9] && 1 == a[10] && 0 == a[11] && 0 == a[12] && 0 == a[13] && 0 == a[14] && 1 == a[15] && 0 == a[16] && 0 == a[17] && 0 == a[18] && 0 == a[19];
      };
      h.createIdentity = function() {
        var a = new h([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0]);
        a._type = 1;
        return a;
      };
      h.prototype.setMultipliersAndOffsets = function(a, b, h, m, l, d, f, g) {
        for (var c = this._data, e = 0;e < c.length;e++) {
          c[e] = 0;
        }
        c[0] = a;
        c[5] = b;
        c[10] = h;
        c[15] = m;
        c[16] = l / 255;
        c[17] = d / 255;
        c[18] = f / 255;
        c[19] = g / 255;
        this._type = 0;
      };
      h.prototype.transformRGBA = function(b) {
        var h = b >> 24 & 255, q = b >> 16 & 255, m = b >> 8 & 255, l = b & 255, d = this._data;
        b = a(h * d[0] + q * d[1] + m * d[2] + l * d[3] + 255 * d[16]);
        var f = a(h * d[4] + q * d[5] + m * d[6] + l * d[7] + 255 * d[17]), g = a(h * d[8] + q * d[9] + m * d[10] + l * d[11] + 255 * d[18]), h = a(h * d[12] + q * d[13] + m * d[14] + l * d[15] + 255 * d[19]);
        return b << 24 | f << 16 | g << 8 | h;
      };
      h.prototype.multiply = function(a) {
        if (!(a._type & 1)) {
          var b = this._data, h = a._data;
          a = b[0];
          var m = b[1], l = b[2], d = b[3], f = b[4], g = b[5], c = b[6], e = b[7], n = b[8], w = b[9], u = b[10], p = b[11], r = b[12], x = b[13], T = b[14], V = b[15], ga = b[16], ha = b[17], ia = b[18], ja = b[19], K = h[0], D = h[1], z = h[2], B = h[3], E = h[4], A = h[5], C = h[6], F = h[7], G = h[8], J = h[9], H = h[10], L = h[11], M = h[12], N = h[13], O = h[14], P = h[15], Q = h[16], R = h[17], S = h[18], h = h[19];
          b[0] = a * K + f * D + n * z + r * B;
          b[1] = m * K + g * D + w * z + x * B;
          b[2] = l * K + c * D + u * z + T * B;
          b[3] = d * K + e * D + p * z + V * B;
          b[4] = a * E + f * A + n * C + r * F;
          b[5] = m * E + g * A + w * C + x * F;
          b[6] = l * E + c * A + u * C + T * F;
          b[7] = d * E + e * A + p * C + V * F;
          b[8] = a * G + f * J + n * H + r * L;
          b[9] = m * G + g * J + w * H + x * L;
          b[10] = l * G + c * J + u * H + T * L;
          b[11] = d * G + e * J + p * H + V * L;
          b[12] = a * M + f * N + n * O + r * P;
          b[13] = m * M + g * N + w * O + x * P;
          b[14] = l * M + c * N + u * O + T * P;
          b[15] = d * M + e * N + p * O + V * P;
          b[16] = a * Q + f * R + n * S + r * h + ga;
          b[17] = m * Q + g * R + w * S + x * h + ha;
          b[18] = l * Q + c * R + u * S + T * h + ia;
          b[19] = d * Q + e * R + p * S + V * h + ja;
          this._type = 0;
        }
      };
      Object.defineProperty(h.prototype, "alphaMultiplier", {get:function() {
        return this._data[15];
      }, enumerable:!0, configurable:!0});
      h.prototype.hasOnlyAlphaMultiplier = function() {
        var a = this._data;
        return 1 == a[0] && 0 == a[1] && 0 == a[2] && 0 == a[3] && 0 == a[4] && 1 == a[5] && 0 == a[6] && 0 == a[7] && 0 == a[8] && 0 == a[9] && 1 == a[10] && 0 == a[11] && 0 == a[12] && 0 == a[13] && 0 == a[14] && 0 == a[16] && 0 == a[17] && 0 == a[18] && 0 == a[19];
      };
      h.prototype.equals = function(a) {
        if (!a) {
          return !1;
        }
        if (this._type === a._type && 1 === this._type) {
          return !0;
        }
        var b = this._data;
        a = a._data;
        for (var h = 0;20 > h;h++) {
          if (.001 < Math.abs(b[h] - a[h])) {
            return !1;
          }
        }
        return !0;
      };
      h.prototype.toSVGFilterMatrix = function() {
        var a = this._data;
        return [a[0], a[4], a[8], a[12], a[16], a[1], a[5], a[9], a[13], a[17], a[2], a[6], a[10], a[14], a[18], a[3], a[7], a[11], a[15], a[19]].join(" ");
      };
      return h;
    }(x);
    p.ColorMatrix = x;
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(r) {
      function a(a, b) {
        return -1 !== a.indexOf(b, this.length - b.length);
      }
      var x = p.Geometry.Point3D, n = p.Geometry.Matrix3D, b = p.Geometry.degreesToRadian, l = h.Debug.unexpected, u = h.Debug.notImplemented;
      r.SHADER_ROOT = "shaders/";
      var k = function() {
        function k(a, b) {
          this._fillColor = h.Color.Red;
          this._surfaceRegionCache = new h.LRUList;
          this.modelViewProjectionMatrix = n.createIdentity();
          this._canvas = a;
          this._options = b;
          this.gl = a.getContext("experimental-webgl", {preserveDrawingBuffer:!1, antialias:!0, stencil:!0, premultipliedAlpha:!1});
          this._programCache = Object.create(null);
          this._resize();
          this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, b.unpackPremultiplyAlpha ? this.gl.ONE : this.gl.ZERO);
          this._backgroundColor = h.Color.Black;
          this._geometry = new r.WebGLGeometry(this);
          this._tmpVertices = r.Vertex.createEmptyVertices(r.Vertex, 64);
          this._maxSurfaces = b.maxSurfaces;
          this._maxSurfaceSize = b.maxSurfaceSize;
          this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
          this.gl.enable(this.gl.BLEND);
          this.modelViewProjectionMatrix = n.create2DProjection(this._w, this._h, 2E3);
          var l = this;
          this._surfaceRegionAllocator = new p.SurfaceRegionAllocator.SimpleAllocator(function() {
            var a = l._createTexture(1024, 1024);
            return new r.WebGLSurface(1024, 1024, a);
          });
        }
        Object.defineProperty(k.prototype, "surfaces", {get:function() {
          return this._surfaceRegionAllocator.surfaces;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(k.prototype, "fillStyle", {set:function(a) {
          this._fillColor.set(h.Color.parseColor(a));
        }, enumerable:!0, configurable:!0});
        k.prototype.setBlendMode = function(a) {
          var b = this.gl;
          switch(a) {
            case 8:
              b.blendFunc(b.SRC_ALPHA, b.DST_ALPHA);
              break;
            case 3:
              b.blendFunc(b.DST_COLOR, b.ONE_MINUS_SRC_ALPHA);
              break;
            case 4:
              b.blendFunc(b.SRC_ALPHA, b.ONE);
              break;
            case 2:
            ;
            case 1:
              b.blendFunc(b.ONE, b.ONE_MINUS_SRC_ALPHA);
              break;
            default:
              u("Blend Mode: " + a);
          }
        };
        k.prototype.setBlendOptions = function() {
          this.gl.blendFunc(this._options.sourceBlendFactor, this._options.destinationBlendFactor);
        };
        k.glSupportedBlendMode = function(a) {
          switch(a) {
            case 8:
            ;
            case 3:
            ;
            case 4:
            ;
            case 1:
              return !0;
            default:
              return !1;
          }
        };
        k.prototype.create2DProjectionMatrix = function() {
          return n.create2DProjection(this._w, this._h, -this._w);
        };
        k.prototype.createPerspectiveMatrix = function(a, k, h) {
          h = b(h);
          k = n.createPerspective(b(k), 1, .1, 5E3);
          var d = new x(0, 1, 0), f = new x(0, 0, 0);
          a = new x(0, 0, a);
          a = n.createCameraLookAt(a, f, d);
          a = n.createInverse(a);
          d = n.createIdentity();
          d = n.createMultiply(d, n.createTranslation(-this._w / 2, -this._h / 2, 0));
          d = n.createMultiply(d, n.createScale(1 / this._w, -1 / this._h, .01));
          d = n.createMultiply(d, n.createYRotation(h));
          d = n.createMultiply(d, a);
          return d = n.createMultiply(d, k);
        };
        k.prototype.discardCachedImages = function() {
          2 <= p.traceLevel && p.writer && p.writer.writeLn("Discard Cache");
          for (var a = this._surfaceRegionCache.count / 2 | 0, b = 0;b < a;b++) {
            var k = this._surfaceRegionCache.pop();
            2 <= p.traceLevel && p.writer && p.writer.writeLn("Discard: " + k);
            k.texture.atlas.remove(k.region);
            k.texture = null;
          }
        };
        k.prototype.cacheImage = function(a) {
          var b = this.allocateSurfaceRegion(a.width, a.height);
          2 <= p.traceLevel && p.writer && p.writer.writeLn("Uploading Image: @ " + b.region);
          this._surfaceRegionCache.use(b);
          this.updateSurfaceRegion(a, b);
          return b;
        };
        k.prototype.allocateSurfaceRegion = function(a, b, k) {
          return this._surfaceRegionAllocator.allocate(a, b, null);
        };
        k.prototype.updateSurfaceRegion = function(a, b) {
          var k = this.gl;
          k.bindTexture(k.TEXTURE_2D, b.surface.texture);
          k.texSubImage2D(k.TEXTURE_2D, 0, b.region.x, b.region.y, k.RGBA, k.UNSIGNED_BYTE, a);
        };
        k.prototype._resize = function() {
          var a = this.gl;
          this._w = this._canvas.width;
          this._h = this._canvas.height;
          a.viewport(0, 0, this._w, this._h);
          for (var b in this._programCache) {
            this._initializeProgram(this._programCache[b]);
          }
        };
        k.prototype._initializeProgram = function(a) {
          this.gl.useProgram(a);
        };
        k.prototype._createShaderFromFile = function(b) {
          var k = r.SHADER_ROOT + b, h = this.gl;
          b = new XMLHttpRequest;
          b.open("GET", k, !1);
          b.send();
          if (a(k, ".vert")) {
            k = h.VERTEX_SHADER;
          } else {
            if (a(k, ".frag")) {
              k = h.FRAGMENT_SHADER;
            } else {
              throw "Shader Type: not supported.";
            }
          }
          return this._createShader(k, b.responseText);
        };
        k.prototype.createProgramFromFiles = function(a, b) {
          var k = a + "-" + b, d = this._programCache[k];
          d || (d = this._createProgram([this._createShaderFromFile(a), this._createShaderFromFile(b)]), this._queryProgramAttributesAndUniforms(d), this._initializeProgram(d), this._programCache[k] = d);
          return d;
        };
        k.prototype._createProgram = function(a) {
          var b = this.gl, k = b.createProgram();
          a.forEach(function(a) {
            b.attachShader(k, a);
          });
          b.linkProgram(k);
          b.getProgramParameter(k, b.LINK_STATUS) || (a = b.getProgramInfoLog(k), l("Cannot link program: " + a), b.deleteProgram(k));
          return k;
        };
        k.prototype._createShader = function(a, b) {
          var k = this.gl, d = k.createShader(a);
          k.shaderSource(d, b);
          k.compileShader(d);
          if (!k.getShaderParameter(d, k.COMPILE_STATUS)) {
            var f = k.getShaderInfoLog(d);
            l("Cannot compile shader: " + f);
            k.deleteShader(d);
            return null;
          }
          return d;
        };
        k.prototype._createTexture = function(a, b) {
          var k = this.gl, d = k.createTexture();
          k.bindTexture(k.TEXTURE_2D, d);
          k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_S, k.CLAMP_TO_EDGE);
          k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_T, k.CLAMP_TO_EDGE);
          k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MIN_FILTER, k.LINEAR);
          k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MAG_FILTER, k.LINEAR);
          k.texImage2D(k.TEXTURE_2D, 0, k.RGBA, a, b, 0, k.RGBA, k.UNSIGNED_BYTE, null);
          return d;
        };
        k.prototype._createFramebuffer = function(a) {
          var b = this.gl, k = b.createFramebuffer();
          b.bindFramebuffer(b.FRAMEBUFFER, k);
          b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, a, 0);
          b.bindFramebuffer(b.FRAMEBUFFER, null);
          return k;
        };
        k.prototype._queryProgramAttributesAndUniforms = function(a) {
          a.uniforms = {};
          a.attributes = {};
          for (var b = this.gl, k = 0, d = b.getProgramParameter(a, b.ACTIVE_ATTRIBUTES);k < d;k++) {
            var f = b.getActiveAttrib(a, k);
            a.attributes[f.name] = f;
            f.location = b.getAttribLocation(a, f.name);
          }
          k = 0;
          for (d = b.getProgramParameter(a, b.ACTIVE_UNIFORMS);k < d;k++) {
            f = b.getActiveUniform(a, k), a.uniforms[f.name] = f, f.location = b.getUniformLocation(a, f.name);
          }
        };
        Object.defineProperty(k.prototype, "target", {set:function(a) {
          var b = this.gl;
          a ? (b.viewport(0, 0, a.w, a.h), b.bindFramebuffer(b.FRAMEBUFFER, a.framebuffer)) : (b.viewport(0, 0, this._w, this._h), b.bindFramebuffer(b.FRAMEBUFFER, null));
        }, enumerable:!0, configurable:!0});
        k.prototype.clear = function(a) {
          a = this.gl;
          a.clearColor(0, 0, 0, 0);
          a.clear(a.COLOR_BUFFER_BIT);
        };
        k.prototype.clearTextureRegion = function(a, b) {
          void 0 === b && (b = h.Color.None);
          var k = this.gl, d = a.region;
          this.target = a.surface;
          k.enable(k.SCISSOR_TEST);
          k.scissor(d.x, d.y, d.w, d.h);
          k.clearColor(b.r, b.g, b.b, b.a);
          k.clear(k.COLOR_BUFFER_BIT | k.DEPTH_BUFFER_BIT);
          k.disable(k.SCISSOR_TEST);
        };
        k.prototype.sizeOf = function(a) {
          var b = this.gl;
          switch(a) {
            case b.UNSIGNED_BYTE:
              return 1;
            case b.UNSIGNED_SHORT:
              return 2;
            case this.gl.INT:
            ;
            case this.gl.FLOAT:
              return 4;
            default:
              u(a);
          }
        };
        k.MAX_SURFACES = 8;
        return k;
      }();
      r.WebGLContext = k;
    })(p.WebGL || (p.WebGL = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(h, p) {
  function r() {
    this.constructor = h;
  }
  for (var a in p) {
    p.hasOwnProperty(a) && (h[a] = p[a]);
  }
  r.prototype = p.prototype;
  h.prototype = new r;
};
(function(h) {
  (function(p) {
    (function(r) {
      var a = h.Debug.assert, x = function(b) {
        function h() {
          b.apply(this, arguments);
        }
        __extends(h, b);
        h.prototype.ensureVertexCapacity = function(b) {
          a(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 8 * b);
        };
        h.prototype.writeVertex = function(b, k) {
          a(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 8);
          this.writeVertexUnsafe(b, k);
        };
        h.prototype.writeVertexUnsafe = function(a, b) {
          var h = this._offset >> 2;
          this._f32[h] = a;
          this._f32[h + 1] = b;
          this._offset += 8;
        };
        h.prototype.writeVertex3D = function(b, k, h) {
          a(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 12);
          this.writeVertex3DUnsafe(b, k, h);
        };
        h.prototype.writeVertex3DUnsafe = function(a, b, h) {
          var q = this._offset >> 2;
          this._f32[q] = a;
          this._f32[q + 1] = b;
          this._f32[q + 2] = h;
          this._offset += 12;
        };
        h.prototype.writeTriangleElements = function(b, k, h) {
          a(0 === (this._offset & 1));
          this.ensureCapacity(this._offset + 6);
          var q = this._offset >> 1;
          this._u16[q] = b;
          this._u16[q + 1] = k;
          this._u16[q + 2] = h;
          this._offset += 6;
        };
        h.prototype.ensureColorCapacity = function(b) {
          a(0 === (this._offset & 2));
          this.ensureCapacity(this._offset + 16 * b);
        };
        h.prototype.writeColorFloats = function(b, k, h, q) {
          a(0 === (this._offset & 2));
          this.ensureCapacity(this._offset + 16);
          this.writeColorFloatsUnsafe(b, k, h, q);
        };
        h.prototype.writeColorFloatsUnsafe = function(a, b, h, q) {
          var m = this._offset >> 2;
          this._f32[m] = a;
          this._f32[m + 1] = b;
          this._f32[m + 2] = h;
          this._f32[m + 3] = q;
          this._offset += 16;
        };
        h.prototype.writeColor = function(b, k, h, q) {
          a(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 4);
          this._i32[this._offset >> 2] = q << 24 | h << 16 | k << 8 | b;
          this._offset += 4;
        };
        h.prototype.writeColorUnsafe = function(a, b, h, q) {
          this._i32[this._offset >> 2] = q << 24 | h << 16 | b << 8 | a;
          this._offset += 4;
        };
        h.prototype.writeRandomColor = function() {
          this.writeColor(Math.random(), Math.random(), Math.random(), Math.random() / 2);
        };
        return h;
      }(h.ArrayUtilities.ArrayWriter);
      r.BufferWriter = x;
      var n = function() {
        return function(a, h, n, k) {
          void 0 === k && (k = !1);
          this.name = a;
          this.size = h;
          this.type = n;
          this.normalized = k;
        };
      }();
      r.WebGLAttribute = n;
      n = function() {
        function a(b) {
          this.size = 0;
          this.attributes = b;
        }
        a.prototype.initialize = function(a) {
          for (var b = 0, k = 0;k < this.attributes.length;k++) {
            this.attributes[k].offset = b, b += a.sizeOf(this.attributes[k].type) * this.attributes[k].size;
          }
          this.size = b;
        };
        return a;
      }();
      r.WebGLAttributeList = n;
      n = function() {
        function a(b) {
          this._elementOffset = this.triangleCount = 0;
          this.context = b;
          this.array = new x(8);
          this.buffer = b.gl.createBuffer();
          this.elementArray = new x(8);
          this.elementBuffer = b.gl.createBuffer();
        }
        Object.defineProperty(a.prototype, "elementOffset", {get:function() {
          return this._elementOffset;
        }, enumerable:!0, configurable:!0});
        a.prototype.addQuad = function() {
          var a = this._elementOffset;
          this.elementArray.writeTriangleElements(a, a + 1, a + 2);
          this.elementArray.writeTriangleElements(a, a + 2, a + 3);
          this.triangleCount += 2;
          this._elementOffset += 4;
        };
        a.prototype.resetElementOffset = function() {
          this._elementOffset = 0;
        };
        a.prototype.reset = function() {
          this.array.reset();
          this.elementArray.reset();
          this.resetElementOffset();
          this.triangleCount = 0;
        };
        a.prototype.uploadBuffers = function() {
          var a = this.context.gl;
          a.bindBuffer(a.ARRAY_BUFFER, this.buffer);
          a.bufferData(a.ARRAY_BUFFER, this.array.subU8View(), a.DYNAMIC_DRAW);
          a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.elementBuffer);
          a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.elementArray.subU8View(), a.DYNAMIC_DRAW);
        };
        return a;
      }();
      r.WebGLGeometry = n;
      n = function(a) {
        function h(l, k, t) {
          a.call(this, l, k, t);
        }
        __extends(h, a);
        h.createEmptyVertices = function(a, b) {
          for (var h = [], q = 0;q < b;q++) {
            h.push(new a(0, 0, 0));
          }
          return h;
        };
        return h;
      }(p.Geometry.Point3D);
      r.Vertex = n;
      (function(a) {
        a[a.ZERO = 0] = "ZERO";
        a[a.ONE = 1] = "ONE";
        a[a.SRC_COLOR = 768] = "SRC_COLOR";
        a[a.ONE_MINUS_SRC_COLOR = 769] = "ONE_MINUS_SRC_COLOR";
        a[a.DST_COLOR = 774] = "DST_COLOR";
        a[a.ONE_MINUS_DST_COLOR = 775] = "ONE_MINUS_DST_COLOR";
        a[a.SRC_ALPHA = 770] = "SRC_ALPHA";
        a[a.ONE_MINUS_SRC_ALPHA = 771] = "ONE_MINUS_SRC_ALPHA";
        a[a.DST_ALPHA = 772] = "DST_ALPHA";
        a[a.ONE_MINUS_DST_ALPHA = 773] = "ONE_MINUS_DST_ALPHA";
        a[a.SRC_ALPHA_SATURATE = 776] = "SRC_ALPHA_SATURATE";
        a[a.CONSTANT_COLOR = 32769] = "CONSTANT_COLOR";
        a[a.ONE_MINUS_CONSTANT_COLOR = 32770] = "ONE_MINUS_CONSTANT_COLOR";
        a[a.CONSTANT_ALPHA = 32771] = "CONSTANT_ALPHA";
        a[a.ONE_MINUS_CONSTANT_ALPHA = 32772] = "ONE_MINUS_CONSTANT_ALPHA";
      })(r.WebGLBlendFactor || (r.WebGLBlendFactor = {}));
    })(p.WebGL || (p.WebGL = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(r) {
      var a = function() {
        function a(b, l, n) {
          this.texture = n;
          this.w = b;
          this.h = l;
          this._regionAllocator = new h.RegionAllocator.CompactAllocator(this.w, this.h);
        }
        a.prototype.allocate = function(a, h) {
          var n = this._regionAllocator.allocate(a, h);
          return n ? new x(this, n) : null;
        };
        a.prototype.free = function(a) {
          this._regionAllocator.free(a.region);
        };
        return a;
      }();
      r.WebGLSurface = a;
      var x = function() {
        return function(a, b) {
          this.surface = a;
          this.region = b;
          this.next = this.previous = null;
        };
      }();
      r.WebGLSurfaceRegion = x;
    })(h.WebGL || (h.WebGL = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(r) {
      var a = h.Color;
      r.TILE_SIZE = 256;
      r.MIN_UNTILED_SIZE = 256;
      var x = p.Geometry.Matrix, n = p.Geometry.Rectangle, b = function(a) {
        function b() {
          a.apply(this, arguments);
          this.maxSurfaces = 8;
          this.maxSurfaceSize = 4096;
          this.animateZoom = !0;
          this.disableSurfaceUploads = !1;
          this.frameSpacing = 1E-4;
          this.drawSurfaces = this.ignoreColorMatrix = !1;
          this.drawSurface = -1;
          this.premultipliedAlpha = !1;
          this.unpackPremultiplyAlpha = !0;
          this.showTemporaryCanvases = !1;
          this.sourceBlendFactor = 1;
          this.destinationBlendFactor = 771;
        }
        __extends(b, a);
        return b;
      }(p.RendererOptions);
      r.WebGLRendererOptions = b;
      var l = function(h) {
        function k(a, k, m) {
          void 0 === m && (m = new b);
          h.call(this, a, k, m);
          this._tmpVertices = r.Vertex.createEmptyVertices(r.Vertex, 64);
          this._cachedTiles = [];
          a = this._context = new r.WebGLContext(this._canvas, m);
          this._updateSize();
          this._brush = new r.WebGLCombinedBrush(a, new r.WebGLGeometry(a));
          this._stencilBrush = new r.WebGLCombinedBrush(a, new r.WebGLGeometry(a));
          this._scratchCanvas = document.createElement("canvas");
          this._scratchCanvas.width = this._scratchCanvas.height = 2048;
          this._scratchCanvasContext = this._scratchCanvas.getContext("2d", {willReadFrequently:!0});
          this._dynamicScratchCanvas = document.createElement("canvas");
          this._dynamicScratchCanvas.width = this._dynamicScratchCanvas.height = 0;
          this._dynamicScratchCanvasContext = this._dynamicScratchCanvas.getContext("2d", {willReadFrequently:!0});
          this._uploadCanvas = document.createElement("canvas");
          this._uploadCanvas.width = this._uploadCanvas.height = 0;
          this._uploadCanvasContext = this._uploadCanvas.getContext("2d", {willReadFrequently:!0});
          m.showTemporaryCanvases && (document.getElementById("temporaryCanvasPanelContainer").appendChild(this._uploadCanvas), document.getElementById("temporaryCanvasPanelContainer").appendChild(this._scratchCanvas));
          this._clipStack = [];
        }
        __extends(k, h);
        k.prototype.resize = function() {
          this._updateSize();
          this.render();
        };
        k.prototype._updateSize = function() {
          this._viewport = new n(0, 0, this._canvas.width, this._canvas.height);
          this._context._resize();
        };
        k.prototype._cacheImageCallback = function(a, b, k) {
          var h = k.w, d = k.h, f = k.x;
          k = k.y;
          this._uploadCanvas.width = h + 2;
          this._uploadCanvas.height = d + 2;
          this._uploadCanvasContext.drawImage(b.canvas, f, k, h, d, 1, 1, h, d);
          this._uploadCanvasContext.drawImage(b.canvas, f, k, h, 1, 1, 0, h, 1);
          this._uploadCanvasContext.drawImage(b.canvas, f, k + d - 1, h, 1, 1, d + 1, h, 1);
          this._uploadCanvasContext.drawImage(b.canvas, f, k, 1, d, 0, 1, 1, d);
          this._uploadCanvasContext.drawImage(b.canvas, f + h - 1, k, 1, d, h + 1, 1, 1, d);
          return a && a.surface ? (this._options.disableSurfaceUploads || this._context.updateSurfaceRegion(this._uploadCanvas, a), a) : this._context.cacheImage(this._uploadCanvas);
        };
        k.prototype._enterClip = function(a, b, k, h) {
          k.flush();
          b = this._context.gl;
          0 === this._clipStack.length && (b.enable(b.STENCIL_TEST), b.clear(b.STENCIL_BUFFER_BIT), b.stencilFunc(b.ALWAYS, 1, 1));
          this._clipStack.push(a);
          b.colorMask(!1, !1, !1, !1);
          b.stencilOp(b.KEEP, b.KEEP, b.INCR);
          k.flush();
          b.colorMask(!0, !0, !0, !0);
          b.stencilFunc(b.NOTEQUAL, 0, this._clipStack.length);
          b.stencilOp(b.KEEP, b.KEEP, b.KEEP);
        };
        k.prototype._leaveClip = function(a, b, k, h) {
          k.flush();
          b = this._context.gl;
          if (a = this._clipStack.pop()) {
            b.colorMask(!1, !1, !1, !1), b.stencilOp(b.KEEP, b.KEEP, b.DECR), k.flush(), b.colorMask(!0, !0, !0, !0), b.stencilFunc(b.NOTEQUAL, 0, this._clipStack.length), b.stencilOp(b.KEEP, b.KEEP, b.KEEP);
          }
          0 === this._clipStack.length && b.disable(b.STENCIL_TEST);
        };
        k.prototype._renderFrame = function(a, b, k, h, d) {
        };
        k.prototype._renderSurfaces = function(b) {
          var k = this._options, h = this._context, l = this._viewport;
          if (k.drawSurfaces) {
            var d = h.surfaces, h = x.createIdentity();
            if (0 <= k.drawSurface && k.drawSurface < d.length) {
              for (var k = d[k.drawSurface | 0], d = new n(0, 0, k.w, k.h), f = d.clone();f.w > l.w;) {
                f.scale(.5, .5);
              }
              b.drawImage(new r.WebGLSurfaceRegion(k, d), f, a.White, null, h, .2);
            } else {
              f = l.w / 5;
              f > l.h / d.length && (f = l.h / d.length);
              b.fillRectangle(new n(l.w - f, 0, f, l.h), new a(0, 0, 0, .5), h, .1);
              for (var g = 0;g < d.length;g++) {
                var k = d[g], c = new n(l.w - f, g * f, f, f);
                b.drawImage(new r.WebGLSurfaceRegion(k, new n(0, 0, k.w, k.h)), c, a.White, null, h, .2);
              }
            }
            b.flush();
          }
        };
        k.prototype.render = function() {
          var b = this._options, k = this._context.gl;
          this._context.modelViewProjectionMatrix = b.perspectiveCamera ? this._context.createPerspectiveMatrix(b.perspectiveCameraDistance + (b.animateZoom ? .8 * Math.sin(Date.now() / 3E3) : 0), b.perspectiveCameraFOV, b.perspectiveCameraAngle) : this._context.create2DProjectionMatrix();
          var h = this._brush;
          k.clearColor(0, 0, 0, 0);
          k.clear(k.COLOR_BUFFER_BIT | k.DEPTH_BUFFER_BIT);
          h.reset();
          k = this._viewport;
          h.flush();
          b.paintViewport && (h.fillRectangle(k, new a(.5, 0, 0, .25), x.createIdentity(), 0), h.flush());
          this._renderSurfaces(h);
        };
        return k;
      }(p.Renderer);
      r.WebGLRenderer = l;
    })(p.WebGL || (p.WebGL = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(r) {
      var a = h.Color, x = p.Geometry.Point, n = p.Geometry.Matrix3D, b = function() {
        function a(b, h, l) {
          this._target = l;
          this._context = b;
          this._geometry = h;
        }
        a.prototype.reset = function() {
        };
        a.prototype.flush = function() {
        };
        Object.defineProperty(a.prototype, "target", {get:function() {
          return this._target;
        }, set:function(a) {
          this._target !== a && this.flush();
          this._target = a;
        }, enumerable:!0, configurable:!0});
        return a;
      }();
      r.WebGLBrush = b;
      (function(a) {
        a[a.FillColor = 0] = "FillColor";
        a[a.FillTexture = 1] = "FillTexture";
        a[a.FillTextureWithColorMatrix = 2] = "FillTextureWithColorMatrix";
      })(r.WebGLCombinedBrushKind || (r.WebGLCombinedBrushKind = {}));
      var l = function(b) {
        function k(k, h, m) {
          b.call(this, k, h, m);
          this.kind = 0;
          this.color = new a(0, 0, 0, 0);
          this.sampler = 0;
          this.coordinate = new x(0, 0);
        }
        __extends(k, b);
        k.initializeAttributeList = function(a) {
          var b = a.gl;
          k.attributeList || (k.attributeList = new r.WebGLAttributeList([new r.WebGLAttribute("aPosition", 3, b.FLOAT), new r.WebGLAttribute("aCoordinate", 2, b.FLOAT), new r.WebGLAttribute("aColor", 4, b.UNSIGNED_BYTE, !0), new r.WebGLAttribute("aKind", 1, b.FLOAT), new r.WebGLAttribute("aSampler", 1, b.FLOAT)]), k.attributeList.initialize(a));
        };
        k.prototype.writeTo = function(a) {
          a = a.array;
          a.ensureAdditionalCapacity(68);
          a.writeVertex3DUnsafe(this.x, this.y, this.z);
          a.writeVertexUnsafe(this.coordinate.x, this.coordinate.y);
          a.writeColorUnsafe(255 * this.color.r, 255 * this.color.g, 255 * this.color.b, 255 * this.color.a);
          a.writeFloatUnsafe(this.kind);
          a.writeFloatUnsafe(this.sampler);
        };
        return k;
      }(r.Vertex);
      r.WebGLCombinedBrushVertex = l;
      b = function(a) {
        function b(k, h, m) {
          void 0 === m && (m = null);
          a.call(this, k, h, m);
          this._blendMode = 1;
          this._program = k.createProgramFromFiles("combined.vert", "combined.frag");
          this._surfaces = [];
          l.initializeAttributeList(this._context);
        }
        __extends(b, a);
        b.prototype.reset = function() {
          this._surfaces = [];
          this._geometry.reset();
        };
        b.prototype.drawImage = function(a, h, m, l, d, f, g) {
          void 0 === f && (f = 0);
          void 0 === g && (g = 1);
          if (!a || !a.surface) {
            return !0;
          }
          h = h.clone();
          this._colorMatrix && (l && this._colorMatrix.equals(l) || this.flush());
          this._colorMatrix = l;
          this._blendMode !== g && (this.flush(), this._blendMode = g);
          g = this._surfaces.indexOf(a.surface);
          0 > g && (8 === this._surfaces.length && this.flush(), this._surfaces.push(a.surface), g = this._surfaces.length - 1);
          var c = b._tmpVertices, e = a.region.clone();
          e.offset(1, 1).resize(-2, -2);
          e.scale(1 / a.surface.w, 1 / a.surface.h);
          d.transformRectangle(h, c);
          for (a = 0;4 > a;a++) {
            c[a].z = f;
          }
          c[0].coordinate.x = e.x;
          c[0].coordinate.y = e.y;
          c[1].coordinate.x = e.x + e.w;
          c[1].coordinate.y = e.y;
          c[2].coordinate.x = e.x + e.w;
          c[2].coordinate.y = e.y + e.h;
          c[3].coordinate.x = e.x;
          c[3].coordinate.y = e.y + e.h;
          for (a = 0;4 > a;a++) {
            f = b._tmpVertices[a], f.kind = l ? 2 : 1, f.color.set(m), f.sampler = g, f.writeTo(this._geometry);
          }
          this._geometry.addQuad();
          return !0;
        };
        b.prototype.fillRectangle = function(a, h, m, l) {
          void 0 === l && (l = 0);
          m.transformRectangle(a, b._tmpVertices);
          for (a = 0;4 > a;a++) {
            m = b._tmpVertices[a], m.kind = 0, m.color.set(h), m.z = l, m.writeTo(this._geometry);
          }
          this._geometry.addQuad();
        };
        b.prototype.flush = function() {
          var a = this._geometry, b = this._program, k = this._context.gl, h;
          a.uploadBuffers();
          k.useProgram(b);
          this._target ? (h = n.create2DProjection(this._target.w, this._target.h, 2E3), h = n.createMultiply(h, n.createScale(1, -1, 1))) : h = this._context.modelViewProjectionMatrix;
          k.uniformMatrix4fv(b.uniforms.uTransformMatrix3D.location, !1, h.asWebGLMatrix());
          this._colorMatrix && (k.uniformMatrix4fv(b.uniforms.uColorMatrix.location, !1, this._colorMatrix.asWebGLMatrix()), k.uniform4fv(b.uniforms.uColorVector.location, this._colorMatrix.asWebGLVector()));
          for (h = 0;h < this._surfaces.length;h++) {
            k.activeTexture(k.TEXTURE0 + h), k.bindTexture(k.TEXTURE_2D, this._surfaces[h].texture);
          }
          k.uniform1iv(b.uniforms["uSampler[0]"].location, [0, 1, 2, 3, 4, 5, 6, 7]);
          k.bindBuffer(k.ARRAY_BUFFER, a.buffer);
          var d = l.attributeList.size, f = l.attributeList.attributes;
          for (h = 0;h < f.length;h++) {
            var g = f[h], c = b.attributes[g.name].location;
            k.enableVertexAttribArray(c);
            k.vertexAttribPointer(c, g.size, g.type, g.normalized, d, g.offset);
          }
          this._context.setBlendOptions();
          this._context.target = this._target;
          k.bindBuffer(k.ELEMENT_ARRAY_BUFFER, a.elementBuffer);
          k.drawElements(k.TRIANGLES, 3 * a.triangleCount, k.UNSIGNED_SHORT, 0);
          this.reset();
        };
        b._tmpVertices = r.Vertex.createEmptyVertices(l, 4);
        b._depth = 1;
        return b;
      }(b);
      r.WebGLCombinedBrush = b;
    })(p.WebGL || (p.WebGL = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(h) {
      var a = CanvasRenderingContext2D.prototype.save, p = CanvasRenderingContext2D.prototype.clip, n = CanvasRenderingContext2D.prototype.fill, b = CanvasRenderingContext2D.prototype.stroke, l = CanvasRenderingContext2D.prototype.restore, u = CanvasRenderingContext2D.prototype.beginPath;
      h.notifyReleaseChanged = function() {
        CanvasRenderingContext2D.prototype.save = a;
        CanvasRenderingContext2D.prototype.clip = p;
        CanvasRenderingContext2D.prototype.fill = n;
        CanvasRenderingContext2D.prototype.stroke = b;
        CanvasRenderingContext2D.prototype.restore = l;
        CanvasRenderingContext2D.prototype.beginPath = u;
      };
      CanvasRenderingContext2D.prototype.enterBuildingClippingRegion = function() {
        this.buildingClippingRegionDepth || (this.buildingClippingRegionDepth = 0);
        this.buildingClippingRegionDepth++;
      };
      CanvasRenderingContext2D.prototype.leaveBuildingClippingRegion = function() {
        this.buildingClippingRegionDepth--;
      };
    })(h.Canvas2D || (h.Canvas2D = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(r) {
      function a(a, b) {
        var h = a / 2;
        switch(b) {
          case 0:
            return 0;
          case 1:
            return h / 2.7;
          case 2:
            return h / 1.28;
          default:
            return h;
        }
      }
      function x(a) {
        var b = "source-over";
        switch(a) {
          case 1:
          ;
          case 2:
            break;
          case 3:
            b = "multiply";
            break;
          case 8:
          ;
          case 4:
            b = "screen";
            break;
          case 5:
            b = "lighten";
            break;
          case 6:
            b = "darken";
            break;
          case 7:
            b = "difference";
            break;
          case 13:
            b = "overlay";
            break;
          case 14:
            b = "hard-light";
            break;
          case 11:
            b = "destination-in";
            break;
          case 12:
            b = "destination-out";
            break;
          default:
            h.Debug.somewhatImplemented("Blend Mode: " + p.BlendMode[a]);
        }
        return b;
      }
      var n = h.NumberUtilities.clamp;
      navigator.userAgent.indexOf("Firefox");
      var b = function() {
        function b() {
        }
        b._prepareSVGFilters = function() {
          if (!b._svgBlurFilter) {
            var a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            a.setAttribute("style", "display:block;width:0px;height:0px");
            var h = document.createElementNS("http://www.w3.org/2000/svg", "defs"), m = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            m.setAttribute("id", "svgBlurFilter");
            var l = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
            l.setAttribute("stdDeviation", "0 0");
            m.appendChild(l);
            h.appendChild(m);
            b._svgBlurFilter = l;
            m = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            m.setAttribute("id", "svgDropShadowFilter");
            l = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
            l.setAttribute("in", "SourceAlpha");
            l.setAttribute("stdDeviation", "3");
            m.appendChild(l);
            b._svgDropshadowFilterBlur = l;
            l = document.createElementNS("http://www.w3.org/2000/svg", "feOffset");
            l.setAttribute("dx", "0");
            l.setAttribute("dy", "0");
            l.setAttribute("result", "offsetblur");
            m.appendChild(l);
            b._svgDropshadowFilterOffset = l;
            l = document.createElementNS("http://www.w3.org/2000/svg", "feFlood");
            l.setAttribute("flood-color", "rgba(0,0,0,1)");
            m.appendChild(l);
            b._svgDropshadowFilterFlood = l;
            l = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
            l.setAttribute("in2", "offsetblur");
            l.setAttribute("operator", "in");
            m.appendChild(l);
            l = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
            l.setAttribute("in2", "SourceAlpha");
            l.setAttribute("operator", "out");
            l.setAttribute("result", "outer");
            m.appendChild(l);
            var l = document.createElementNS("http://www.w3.org/2000/svg", "feMerge"), d = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
            l.appendChild(d);
            d = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
            l.appendChild(d);
            b._svgDropshadowMergeNode = d;
            m.appendChild(l);
            h.appendChild(m);
            m = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            m.setAttribute("id", "svgColorMatrixFilter");
            d = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
            d.setAttribute("color-interpolation-filters", "sRGB");
            d.setAttribute("in", "SourceGraphic");
            d.setAttribute("type", "matrix");
            m.appendChild(d);
            l = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
            l.setAttribute("in2", "SourceAlpha");
            l.setAttribute("operator", "in");
            m.appendChild(l);
            h.appendChild(m);
            b._svgColorMatrixFilter = d;
            a.appendChild(h);
            document.documentElement.appendChild(a);
          }
        };
        b._applyFilter = function(l, q, m) {
          if (b._svgFiltersAreSupported) {
            if (b._prepareSVGFilters(), b._removeFilter(q), m instanceof p.BlurFilter) {
              var n = a(l, m.quality);
              b._svgBlurFilter.setAttribute("stdDeviation", m.blurX * n + " " + m.blurY * n);
              q.filter = "url(#svgBlurFilter)";
            } else {
              m instanceof p.DropshadowFilter ? (n = a(l, m.quality), b._svgDropshadowFilterBlur.setAttribute("stdDeviation", m.blurX * n + " " + m.blurY * n), b._svgDropshadowFilterOffset.setAttribute("dx", String(Math.cos(m.angle * Math.PI / 180) * m.distance * l)), b._svgDropshadowFilterOffset.setAttribute("dy", String(Math.sin(m.angle * Math.PI / 180) * m.distance * l)), b._svgDropshadowFilterFlood.setAttribute("flood-color", h.ColorUtilities.rgbaToCSSStyle(m.color << 8 | Math.round(255 * m.alpha))), 
              b._svgDropshadowMergeNode.setAttribute("in", m.knockout ? "outer" : "SourceGraphic"), q.filter = "url(#svgDropShadowFilter)") : m instanceof p.ColorMatrix && (b._svgColorMatrixFilter.setAttribute("values", m.toSVGFilterMatrix()), q.filter = "url(#svgColorMatrixFilter)");
            }
          }
        };
        b._removeFilter = function(a) {
          a.filter = "none";
        };
        b._applyColorMatrix = function(a, h) {
          h.isIdentity() ? (a.globalAlpha = 1, a.globalColorMatrix = null) : h.hasOnlyAlphaMultiplier() ? (a.globalAlpha = n(h.alphaMultiplier, 0, 1), a.globalColorMatrix = null) : (a.globalAlpha = 1, b._svgFiltersAreSupported ? (b._applyFilter(1, a, h), a.globalColorMatrix = null) : a.globalColorMatrix = h);
        };
        b._svgFiltersAreSupported = !!Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype, "filter");
        return b;
      }();
      r.Filters = b;
      p.filters && b._svgFiltersAreSupported && ("registerScratchCanvas" in window || (window.registerScratchCanvas = function(a) {
        a.style.display = "none";
        document.body.appendChild(a);
      }));
      var l = function() {
        function a(b, h, k, l) {
          this.surface = b;
          this.region = h;
          this.w = k;
          this.h = l;
        }
        a.prototype.free = function() {
          this.surface.free(this);
        };
        a._ensureCopyCanvasSize = function(b, l) {
          var m;
          if (a._copyCanvasContext) {
            if (m = a._copyCanvasContext.canvas, m.width < b || m.height < l) {
              m.width = h.IntegerUtilities.nearestPowerOfTwo(b), m.height = h.IntegerUtilities.nearestPowerOfTwo(l);
            }
          } else {
            m = document.createElement("canvas"), "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(m), m.width = h.IntegerUtilities.nearestPowerOfTwo(b), m.height = h.IntegerUtilities.nearestPowerOfTwo(l), a._copyCanvasContext = m.getContext("2d");
          }
        };
        a.prototype.draw = function(h, l, m, n, d, f, g, c, e) {
          this.context.setTransform(1, 0, 0, 1, 0, 0);
          var p, w, u = 0, r = 0;
          h.context.canvas === this.context.canvas ? (a._ensureCopyCanvasSize(n, d), w = a._copyCanvasContext, w.clearRect(0, 0, n, d), w.drawImage(h.surface.canvas, h.region.x, h.region.y, n, d, 0, 0, n, d), p = w, r = u = 0) : (p = h.surface.context, u = h.region.x, r = h.region.y);
          a: {
            switch(g) {
              case 11:
                h = !0;
                break a;
              default:
                h = !1;
            }
          }
          h && (this.context.save(), this.context.beginPath(), this.context.rect(l, m, n, d), this.context.clip());
          this.context.globalAlpha = 1;
          this.context.globalCompositeOperation = x(g);
          if (c) {
            f && !f.isIdentity() && (c = c.concat(f));
            f = 0;
            if (1 < c.length) {
              var W, U, T;
              w ? (g = w, w = p, p = g) : (a._ensureCopyCanvasSize(n, d), w = a._copyCanvasContext, U = W = 0);
              for (;f < c.length - 1;f++) {
                w.clearRect(0, 0, n, d), b._applyFilter(e, w, c[f]), w.drawImage(p.canvas, u, r, n, d, W, U, n, d), b._removeFilter(w), g = w, U = u, T = r, w = p, p = g, r = u = W, W = U, U = T;
              }
              b._removeFilter(p);
              b._removeFilter(w);
            }
            b._applyFilter(e, this.context, c[f]);
          }
          this.context.drawImage(p.canvas, u, r, n, d, l, m, n, d);
          this.context.globalCompositeOperation = x(1);
          b._removeFilter(this.context);
          h && this.context.restore();
        };
        Object.defineProperty(a.prototype, "context", {get:function() {
          return this.surface.context;
        }, enumerable:!0, configurable:!0});
        a.prototype.resetTransform = function() {
          this.surface.context.setTransform(1, 0, 0, 1, 0, 0);
        };
        a.prototype.reset = function() {
          var a = this.surface.context;
          a.setTransform(1, 0, 0, 1, 0, 0);
          a.fillStyle = "#000000";
          a.strokeStyle = "#000000";
          a.globalAlpha = 1;
          a.globalColorMatrix = null;
          a.globalCompositeOperation = x(1);
        };
        a.prototype.fill = function(a) {
          var b = this.surface.context, h = this.region;
          b.fillStyle = a;
          b.fillRect(h.x, h.y, h.w, h.h);
        };
        a.prototype.clear = function(a) {
          var b = this.surface.context, h = this.region;
          a || (a = h);
          b.clearRect(a.x, a.y, a.w, a.h);
        };
        return a;
      }();
      r.Canvas2DSurfaceRegion = l;
      var u = function() {
        function a(b, h) {
          this.canvas = b;
          this.context = b.getContext("2d");
          this.w = b.width;
          this.h = b.height;
          this._regionAllocator = h;
        }
        a.prototype.allocate = function(a, b) {
          var h = this._regionAllocator.allocate(a, b);
          return h ? new l(this, h, a, b) : null;
        };
        a.prototype.free = function(a) {
          this._regionAllocator.free(a.region);
        };
        return a;
      }();
      r.Canvas2DSurface = u;
    })(p.Canvas2D || (p.Canvas2D = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(r) {
      var a = h.Debug.assert, x = h.GFX.Geometry.Rectangle, n = h.GFX.Geometry.Point, b = h.GFX.Geometry.Matrix, l = h.NumberUtilities.clamp, u = h.NumberUtilities.pow2, k = function() {
        return function(a, b) {
          this.surfaceRegion = a;
          this.scale = b;
        };
      }();
      r.MipMapLevel = k;
      var t = function() {
        function a(b, c, e, d) {
          this._node = c;
          this._levels = [];
          this._surfaceRegionAllocator = e;
          this._size = d;
          this._renderer = b;
        }
        a.prototype.getLevel = function(a) {
          a = Math.max(a.getAbsoluteScaleX(), a.getAbsoluteScaleY());
          var b = 0;
          1 !== a && (b = l(Math.round(Math.log(a) / Math.LN2), -5, 3));
          this._node.hasFlags(512) || (b = l(b, -5, 0));
          a = u(b);
          var e = 5 + b, b = this._levels[e];
          if (!b) {
            var d = this._node.getBounds().clone();
            d.scale(a, a);
            d.snap();
            var f = this._surfaceRegionAllocator.allocate(d.w, d.h, null), h = f.region, b = this._levels[e] = new k(f, a), e = new m(f);
            e.clip.set(h);
            e.matrix.setElements(a, 0, 0, a, h.x - d.x, h.y - d.y);
            e.flags |= 64;
            this._renderer.renderNodeWithState(this._node, e);
            e.free();
          }
          return b;
        };
        return a;
      }();
      r.MipMap = t;
      (function(a) {
        a[a.NonZero = 0] = "NonZero";
        a[a.EvenOdd = 1] = "EvenOdd";
      })(r.FillRule || (r.FillRule = {}));
      var q = function(a) {
        function b() {
          a.apply(this, arguments);
          this.blending = this.imageSmoothing = this.snapToDevicePixels = !0;
          this.debugLayers = !1;
          this.filters = this.masking = !0;
          this.cacheShapes = !1;
          this.cacheShapesMaxSize = 256;
          this.cacheShapesThreshold = 16;
          this.alpha = !1;
        }
        __extends(b, a);
        return b;
      }(p.RendererOptions);
      r.Canvas2DRendererOptions = q;
      (function(a) {
        a[a.None = 0] = "None";
        a[a.IgnoreNextLayer = 1] = "IgnoreNextLayer";
        a[a.RenderMask = 2] = "RenderMask";
        a[a.IgnoreMask = 4] = "IgnoreMask";
        a[a.PaintStencil = 8] = "PaintStencil";
        a[a.PaintClip = 16] = "PaintClip";
        a[a.IgnoreRenderable = 32] = "IgnoreRenderable";
        a[a.IgnoreNextRenderWithCache = 64] = "IgnoreNextRenderWithCache";
        a[a.CacheShapes = 256] = "CacheShapes";
        a[a.PaintFlashing = 512] = "PaintFlashing";
        a[a.PaintBounds = 1024] = "PaintBounds";
        a[a.PaintDirtyRegion = 2048] = "PaintDirtyRegion";
        a[a.ImageSmoothing = 4096] = "ImageSmoothing";
        a[a.PixelSnapping = 8192] = "PixelSnapping";
      })(r.RenderFlags || (r.RenderFlags = {}));
      x.createMaxI16();
      var m = function(a) {
        function d(c) {
          a.call(this);
          this.clip = x.createEmpty();
          this.clipList = [];
          this.clipPath = null;
          this.flags = 0;
          this.target = null;
          this.matrix = b.createIdentity();
          this.colorMatrix = p.ColorMatrix.createIdentity();
          d.allocationCount++;
          this.target = c;
        }
        __extends(d, a);
        d.prototype.set = function(a) {
          this.clip.set(a.clip);
          this.clipPath = a.clipPath;
          this.target = a.target;
          this.matrix.set(a.matrix);
          this.colorMatrix.set(a.colorMatrix);
          this.flags = a.flags;
          h.ArrayUtilities.copyFrom(this.clipList, a.clipList);
        };
        d.prototype.clone = function() {
          var a = d.allocate();
          a || (a = new d(this.target));
          a.set(this);
          return a;
        };
        d.allocate = function() {
          var a = d._dirtyStack, b = null;
          a.length && (b = a.pop());
          return b;
        };
        d.prototype.free = function() {
          this.clipPath = null;
          d._dirtyStack.push(this);
        };
        d.prototype.transform = function(a) {
          var b = this.clone();
          b.matrix.preMultiply(a.getMatrix());
          a.hasColorMatrix() && b.colorMatrix.multiply(a.getColorMatrix());
          return b;
        };
        d.prototype.hasFlags = function(a) {
          return (this.flags & a) === a;
        };
        d.prototype.removeFlags = function(a) {
          this.flags &= ~a;
        };
        d.prototype.toggleFlags = function(a, b) {
          this.flags = b ? this.flags | a : this.flags & ~a;
        };
        d.prototype.beginClipPath = function(a) {
          this.target.context.save();
          this.clipPath = new Path2D;
        };
        d.prototype.applyClipPath = function() {
          var a = this.target.context;
          a.setTransform(1, 0, 0, 1, 0, 0);
          a.clip(this.clipPath);
          var b = this.matrix;
          a.setTransform(b.a, b.b, b.c, b.d, b.tx, b.ty);
        };
        d.prototype.closeClipPath = function() {
          this.target.context.restore();
        };
        d.allocationCount = 0;
        d._dirtyStack = [];
        return d;
      }(p.State);
      r.RenderState = m;
      var v = function() {
        function a() {
          this.culledNodes = this.groups = this.shapes = this._count = 0;
        }
        a.prototype.enter = function(a) {
          this._count++;
        };
        a.prototype.leave = function() {
        };
        return a;
      }();
      r.FrameInfo = v;
      var d = function(d) {
        function g(a, b, h) {
          void 0 === h && (h = new q);
          d.call(this, a, b, h);
          this._visited = 0;
          this._frameInfo = new v;
          this._fontSize = 0;
          this._layers = [];
          if (a instanceof HTMLCanvasElement) {
            var k = a;
            this._viewport = new x(0, 0, k.width, k.height);
            this._target = this._createTarget(k);
          } else {
            this._addLayer("Background Layer");
            h = this._addLayer("Canvas Layer");
            k = document.createElement("canvas");
            h.appendChild(k);
            this._viewport = new x(0, 0, a.scrollWidth, a.scrollHeight);
            var l = this;
            b.addEventListener(1, function() {
              l._onStageBoundsChanged(k);
            });
            this._onStageBoundsChanged(k);
          }
          g._prepareSurfaceAllocators();
        }
        __extends(g, d);
        g.prototype._addLayer = function(a) {
          a = document.createElement("div");
          a.style.position = "absolute";
          a.style.overflow = "hidden";
          a.style.width = "100%";
          a.style.height = "100%";
          a.style.zIndex = this._layers.length + "";
          this._container.appendChild(a);
          this._layers.push(a);
          return a;
        };
        Object.defineProperty(g.prototype, "_backgroundVideoLayer", {get:function() {
          return this._layers[0];
        }, enumerable:!0, configurable:!0});
        g.prototype._createTarget = function(a) {
          return new r.Canvas2DSurfaceRegion(new r.Canvas2DSurface(a), new p.RegionAllocator.Region(0, 0, a.width, a.height), a.width, a.height);
        };
        g.prototype._onStageBoundsChanged = function(a) {
          var b = this._stage.getBounds(!0);
          b.snap();
          for (var d = this._devicePixelRatio = window.devicePixelRatio || 1, f = b.w / d + "px", d = b.h / d + "px", g = 0;g < this._layers.length;g++) {
            var h = this._layers[g];
            h.style.width = f;
            h.style.height = d;
          }
          a.width = b.w;
          a.height = b.h;
          a.style.position = "absolute";
          a.style.width = f;
          a.style.height = d;
          this._target = this._createTarget(a);
          this._fontSize = 10 * this._devicePixelRatio;
        };
        g._prepareSurfaceAllocators = function() {
          g._initializedCaches || (g._surfaceCache = new p.SurfaceRegionAllocator.SimpleAllocator(function(a, b) {
            var d = document.createElement("canvas");
            "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(d);
            var f = Math.max(1024, a), g = Math.max(1024, b);
            d.width = f;
            d.height = g;
            var h = null, h = 512 <= a || 512 <= b ? new p.RegionAllocator.GridAllocator(f, g, f, g) : new p.RegionAllocator.BucketAllocator(f, g);
            return new r.Canvas2DSurface(d, h);
          }), g._shapeCache = new p.SurfaceRegionAllocator.SimpleAllocator(function(a, b) {
            var d = document.createElement("canvas");
            "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(d);
            d.width = 1024;
            d.height = 1024;
            var f = f = new p.RegionAllocator.CompactAllocator(1024, 1024);
            return new r.Canvas2DSurface(d, f);
          }), g._initializedCaches = !0);
        };
        g.prototype.render = function() {
          var a = this._stage, b = this._target, d = this._options, f = this._viewport;
          b.reset();
          b.context.save();
          b.context.beginPath();
          b.context.rect(f.x, f.y, f.w, f.h);
          b.context.clip();
          this._renderStageToTarget(b, a, f);
          b.reset();
          d.paintViewport && (b.context.beginPath(), b.context.rect(f.x, f.y, f.w, f.h), b.context.strokeStyle = "#FF4981", b.context.lineWidth = 2, b.context.stroke());
          b.context.restore();
        };
        g.prototype.renderNode = function(a, b, d) {
          var f = new m(this._target);
          f.clip.set(b);
          f.flags = 256;
          f.matrix.set(d);
          a.visit(this, f);
          f.free();
        };
        g.prototype.renderNodeWithState = function(a, b) {
          a.visit(this, b);
        };
        g.prototype._renderWithCache = function(a, b) {
          var d = b.matrix, f = a.getBounds();
          if (f.isEmpty()) {
            return !1;
          }
          var h = this._options.cacheShapesMaxSize, k = Math.max(d.getAbsoluteScaleX(), d.getAbsoluteScaleY()), l = !!(b.flags & 16), m = !!(b.flags & 8);
          if (b.hasFlags(256)) {
            if (m || l || !b.colorMatrix.isIdentity() || a.hasFlags(256) || 100 < this._options.cacheShapesThreshold || f.w * k > h || f.h * k > h) {
              return !1;
            }
            (k = a.properties.mipMap) || (k = a.properties.mipMap = new t(this, a, g._shapeCache, h));
            l = k.getLevel(d);
            h = l.surfaceRegion;
            k = h.region;
            return l ? (l = b.target.context, l.imageSmoothingEnabled = l.mozImageSmoothingEnabled = !0, l.setTransform(d.a, d.b, d.c, d.d, d.tx, d.ty), l.drawImage(h.surface.canvas, k.x, k.y, k.w, k.h, f.x, f.y, f.w, f.h), !0) : !1;
          }
        };
        g.prototype._intersectsClipList = function(a, b) {
          var d = a.getBounds(!0), f = !1;
          b.matrix.transformRectangleAABB(d);
          b.clip.intersects(d) && (f = !0);
          var g = b.clipList;
          if (f && g.length) {
            for (var f = !1, h = 0;h < g.length;h++) {
              if (d.intersects(g[h])) {
                f = !0;
                break;
              }
            }
          }
          d.free();
          return f;
        };
        g.prototype.visitGroup = function(a, b) {
          this._frameInfo.groups++;
          a.getBounds();
          if ((!a.hasFlags(4) || b.flags & 4) && a.hasFlags(1)) {
            var d = b.flags & 1;
            if (!d && ((1 !== a.getLayer().blendMode || a.getLayer().mask) && this._options.blending || a.getLayer().filters && this._options.filters)) {
              b = b.clone(), b.flags |= 1, this._renderLayer(a, b), b.free();
            } else {
              if (d && b.removeFlags(1), this._intersectsClipList(a, b)) {
                for (var d = null, f = a.getChildren(), g = 0;g < f.length;g++) {
                  var h = f[g], k = h.getTransform(), l = b.transform(k);
                  l.toggleFlags(4096, h.hasFlags(64));
                  if (0 <= h.clip) {
                    d = d || new Uint8Array(f.length);
                    d[h.clip + g]++;
                    var m = l.clone();
                    m.flags |= 16;
                    m.beginClipPath(k.getMatrix());
                    h.visit(this, m);
                    m.applyClipPath();
                    m.free();
                  } else {
                    h.visit(this, l);
                  }
                  if (d && 0 < d[g]) {
                    for (;d[g]--;) {
                      b.closeClipPath();
                    }
                  }
                  l.free();
                }
              } else {
                this._frameInfo.culledNodes++;
              }
            }
            this._renderDebugInfo(a, b);
          }
        };
        g.prototype._renderDebugInfo = function(a, b) {
          if (b.flags & 1024) {
            var d = b.target.context, f = a.getBounds(!0), k = a.properties.style;
            k || (k = a.properties.style = h.Color.randomColor(.4).toCSSStyle());
            d.strokeStyle = k;
            b.matrix.transformRectangleAABB(f);
            d.setTransform(1, 0, 0, 1, 0, 0);
            f.free();
            f = a.getBounds();
            k = g._debugPoints;
            b.matrix.transformRectangle(f, k);
            d.lineWidth = 1;
            d.beginPath();
            d.moveTo(k[0].x, k[0].y);
            d.lineTo(k[1].x, k[1].y);
            d.lineTo(k[2].x, k[2].y);
            d.lineTo(k[3].x, k[3].y);
            d.lineTo(k[0].x, k[0].y);
            d.stroke();
          }
        };
        g.prototype.visitStage = function(a, b) {
          var d = b.target.context, f = a.getBounds(!0);
          b.matrix.transformRectangleAABB(f);
          f.intersect(b.clip);
          b.target.reset();
          b = b.clone();
          this._options.clear && b.target.clear(b.clip);
          a.hasFlags(2) || !a.color || b.flags & 32 || (this._container.style.backgroundColor = a.color.toCSSStyle());
          this.visitGroup(a, b);
          a.dirtyRegion && (d.restore(), b.target.reset(), d.globalAlpha = .4, b.hasFlags(2048) && a.dirtyRegion.render(b.target.context), a.dirtyRegion.clear());
          b.free();
        };
        g.prototype.visitShape = function(a, b) {
          if (this._intersectsClipList(a, b)) {
            var d = b.matrix;
            b.flags & 8192 && (d = d.clone(), d.snap());
            var f = b.target.context;
            r.Filters._applyColorMatrix(f, b.colorMatrix);
            a.source instanceof p.RenderableVideo ? this.visitRenderableVideo(a.source, b) : 0 < f.globalAlpha && this.visitRenderable(a.source, b, a.ratio);
            b.flags & 8192 && d.free();
            r.Filters._removeFilter(f);
          }
        };
        g.prototype.visitRenderableVideo = function(a, b) {
          if (a.video && a.video.videoWidth) {
            var d = this._devicePixelRatio, f = b.matrix.clone();
            f.scale(1 / d, 1 / d);
            var d = a.getBounds(), g = h.GFX.Geometry.Matrix.createIdentity();
            g.scale(d.w / a.video.videoWidth, d.h / a.video.videoHeight);
            f.preMultiply(g);
            g.free();
            d = f.toCSSTransform();
            a.video.style.transformOrigin = "0 0";
            a.video.style.transform = d;
            var k = this._backgroundVideoLayer;
            k !== a.video.parentElement && (k.appendChild(a.video), a.addEventListener(2, function U(a) {
              k.removeChild(a.video);
              a.removeEventListener(2, U);
            }));
            f.free();
          }
        };
        g.prototype.visitRenderable = function(a, b, d) {
          var f = a.getBounds();
          if (!(b.flags & 32 || f.isEmpty())) {
            if (b.hasFlags(64)) {
              b.removeFlags(64);
            } else {
              if (this._renderWithCache(a, b)) {
                return;
              }
            }
            var g = b.matrix, f = b.target.context, h = !!(b.flags & 16), k = !!(b.flags & 8);
            f.setTransform(g.a, g.b, g.c, g.d, g.tx, g.ty);
            this._frameInfo.shapes++;
            f.imageSmoothingEnabled = f.mozImageSmoothingEnabled = b.hasFlags(4096);
            g = a.properties.renderCount || 0;
            a.properties.renderCount = ++g;
            a.render(f, d, null, h ? b.clipPath : null, k);
          }
        };
        g.prototype._renderLayer = function(a, b) {
          var d = a.getLayer(), f = d.mask;
          if (f) {
            var g = !a.hasFlags(16) || !f.hasFlags(16);
            this._renderWithMask(a, f, d.blendMode, g, b);
          } else {
            f = x.allocate();
            if (g = this._renderToTemporarySurface(a, a.getLayerBounds(!!this._options.filters), b, f, b.target.surface)) {
              b.target.draw(g, f.x, f.y, f.w, f.h, b.colorMatrix, this._options.blending ? d.blendMode : 1, this._options.filters ? d.filters : null, this._devicePixelRatio), g.free();
            }
            f.free();
          }
        };
        g.prototype._renderWithMask = function(a, b, d, f, g) {
          var h = b.getTransform().getConcatenatedMatrix(!0);
          b.parent || (h = h.scale(this._devicePixelRatio, this._devicePixelRatio));
          var k = a.getBounds().clone();
          g.matrix.transformRectangleAABB(k);
          k.snap();
          if (!k.isEmpty()) {
            var l = b.getBounds().clone();
            h.transformRectangleAABB(l);
            l.snap();
            if (!l.isEmpty()) {
              var m = g.clip.clone();
              m.intersect(k);
              m.intersect(l);
              m.snap();
              m.isEmpty() || (k = g.clone(), k.clip.set(m), a = this._renderToTemporarySurface(a, a.getBounds(), k, x.createEmpty(), null), k.free(), l = g.clone(), l.clip.set(m), l.matrix = h, l.flags |= 4, f && (l.flags |= 8), b = this._renderToTemporarySurface(b, b.getBounds(), l, x.createEmpty(), a.surface), l.free(), a.draw(b, 0, 0, m.w, m.h, l.colorMatrix, 11, null, this._devicePixelRatio), g.target.draw(a, m.x, m.y, m.w, m.h, k.colorMatrix, d, null, this._devicePixelRatio), b.free(), a.free());
            }
          }
        };
        g.prototype._renderStageToTarget = function(a, d, f) {
          x.allocationCount = b.allocationCount = m.allocationCount = 0;
          a = new m(a);
          a.clip.set(f);
          this._options.paintRenderable || (a.flags |= 32);
          this._options.paintBounds && (a.flags |= 1024);
          this._options.paintDirtyRegion && (a.flags |= 2048);
          this._options.paintFlashing && (a.flags |= 512);
          this._options.cacheShapes && (a.flags |= 256);
          this._options.imageSmoothing && (a.flags |= 4096);
          this._options.snapToDevicePixels && (a.flags |= 8192);
          this._frameInfo.enter(a);
          d.visit(this, a);
          this._frameInfo.leave();
        };
        g.prototype._renderToTemporarySurface = function(a, b, d, f, g) {
          var h = d.matrix;
          b = b.clone();
          h.transformRectangleAABB(b);
          b.snap();
          f.set(b);
          f.intersect(d.clip);
          f.snap();
          if (f.isEmpty()) {
            return null;
          }
          g = this._allocateSurface(f.w, f.h, g);
          b = g.region;
          b = new x(b.x, b.y, f.w, f.h);
          g.context.setTransform(1, 0, 0, 1, 0, 0);
          g.clear();
          h = h.clone();
          h.translate(b.x - f.x, b.y - f.y);
          g.context.save();
          d = d.clone();
          d.target = g;
          d.matrix = h;
          d.clip.set(b);
          a.visit(this, d);
          d.free();
          g.context.restore();
          return g;
        };
        g.prototype._allocateSurface = function(a, b, d) {
          return g._surfaceCache.allocate(a, b, d);
        };
        g.prototype.screenShot = function(b, d, f) {
          d && (d = this._stage.content.groupChild.child, a(d instanceof p.Stage), b = d.content.getBounds(!0), d.content.getTransform().getConcatenatedMatrix().transformRectangleAABB(b), b.intersect(this._viewport));
          b || (b = new x(0, 0, this._target.w, this._target.h));
          d = b.w;
          var g = b.h, h = this._devicePixelRatio;
          f && (d /= h, g /= h, h = 1);
          f = document.createElement("canvas");
          f.width = d;
          f.height = g;
          var k = f.getContext("2d");
          k.fillStyle = this._container.style.backgroundColor;
          k.fillRect(0, 0, d, g);
          k.drawImage(this._target.context.canvas, b.x, b.y, b.w, b.h, 0, 0, d, g);
          return new p.ScreenShot(f.toDataURL("image/png"), d, g, h);
        };
        g._initializedCaches = !1;
        g._debugPoints = n.createEmptyPoints(4);
        return g;
      }(p.Renderer);
      r.Canvas2DRenderer = d;
    })(p.Canvas2D || (p.Canvas2D = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    var r = p.Geometry.Point, a = p.Geometry.Matrix, x = p.Geometry.Rectangle, n = h.Tools.Mini.FPS, b = function() {
      function a() {
      }
      a.prototype.onMouseUp = function(a, b) {
        a.state = this;
      };
      a.prototype.onMouseDown = function(a, b) {
        a.state = this;
      };
      a.prototype.onMouseMove = function(a, b) {
        a.state = this;
      };
      a.prototype.onMouseWheel = function(a, b) {
        a.state = this;
      };
      a.prototype.onMouseClick = function(a, b) {
        a.state = this;
      };
      a.prototype.onKeyUp = function(a, b) {
        a.state = this;
      };
      a.prototype.onKeyDown = function(a, b) {
        a.state = this;
      };
      a.prototype.onKeyPress = function(a, b) {
        a.state = this;
      };
      return a;
    }();
    p.UIState = b;
    var l = function(a) {
      function b() {
        a.apply(this, arguments);
        this._keyCodes = [];
      }
      __extends(b, a);
      b.prototype.onMouseDown = function(a, b) {
        b.altKey && (a.state = new k(a.worldView, a.getMousePosition(b, null), a.worldView.getTransform().getMatrix(!0)));
      };
      b.prototype.onMouseClick = function(a, b) {
      };
      b.prototype.onKeyDown = function(a, b) {
        this._keyCodes[b.keyCode] = !0;
      };
      b.prototype.onKeyUp = function(a, b) {
        this._keyCodes[b.keyCode] = !1;
      };
      return b;
    }(b), u = function(a) {
      function b() {
        a.apply(this, arguments);
        this._keyCodes = [];
        this._paused = !1;
        this._mousePosition = new r(0, 0);
      }
      __extends(b, a);
      b.prototype.onMouseMove = function(a, b) {
        this._mousePosition = a.getMousePosition(b, null);
        this._update(a);
      };
      b.prototype.onMouseDown = function(a, b) {
      };
      b.prototype.onMouseClick = function(a, b) {
      };
      b.prototype.onMouseWheel = function(a, b) {
        var d = "DOMMouseScroll" === b.type ? -b.detail : b.wheelDelta / 40;
        if (b.altKey) {
          b.preventDefault();
          var f = a.getMousePosition(b, null), g = a.worldView.getTransform().getMatrix(!0), d = 1 + d / 1E3;
          g.translate(-f.x, -f.y);
          g.scale(d, d);
          g.translate(f.x, f.y);
          a.worldView.getTransform().setMatrix(g);
        }
      };
      b.prototype.onKeyPress = function(a, b) {
        if (b.altKey) {
          var d = b.keyCode || b.which;
          console.info("onKeyPress Code: " + d);
          switch(d) {
            case 248:
              this._paused = !this._paused;
              b.preventDefault();
              break;
            case 223:
              a.toggleOption("paintRenderable");
              b.preventDefault();
              break;
            case 8730:
              a.toggleOption("paintViewport");
              b.preventDefault();
              break;
            case 8747:
              a.toggleOption("paintBounds");
              b.preventDefault();
              break;
            case 8706:
              a.toggleOption("paintDirtyRegion");
              b.preventDefault();
              break;
            case 231:
              a.toggleOption("clear");
              b.preventDefault();
              break;
            case 402:
              a.toggleOption("paintFlashing"), b.preventDefault();
          }
          this._update(a);
        }
      };
      b.prototype.onKeyDown = function(a, b) {
        this._keyCodes[b.keyCode] = !0;
        this._update(a);
      };
      b.prototype.onKeyUp = function(a, b) {
        this._keyCodes[b.keyCode] = !1;
        this._update(a);
      };
      b.prototype._update = function(a) {
        a.paused = this._paused;
        if (a.getOption("paintViewport")) {
          var b = p.viewportLoupeDiameter.value, d = p.viewportLoupeDiameter.value;
          a.viewport = new x(this._mousePosition.x - b / 2, this._mousePosition.y - d / 2, b, d);
        } else {
          a.viewport = null;
        }
      };
      return b;
    }(b);
    (function(a) {
      function b() {
        a.apply(this, arguments);
        this._startTime = Date.now();
      }
      __extends(b, a);
      b.prototype.onMouseMove = function(a, b) {
        if (!(10 > Date.now() - this._startTime)) {
          var d = a._world;
          d && (a.state = new k(d, a.getMousePosition(b, null), d.getTransform().getMatrix(!0)));
        }
      };
      b.prototype.onMouseUp = function(a, b) {
        a.state = new l;
        a.selectNodeUnderMouse(b);
      };
      return b;
    })(b);
    var k = function(a) {
      function b(h, k, d) {
        a.call(this);
        this._target = h;
        this._startPosition = k;
        this._startMatrix = d;
      }
      __extends(b, a);
      b.prototype.onMouseMove = function(a, b) {
        b.preventDefault();
        var d = a.getMousePosition(b, null);
        d.sub(this._startPosition);
        this._target.getTransform().setMatrix(this._startMatrix.clone().translate(d.x, d.y));
        a.state = this;
      };
      b.prototype.onMouseUp = function(a, b) {
        a.state = new l;
      };
      return b;
    }(b), b = function() {
      function b(a, k, r) {
        function d(a) {
          c._state.onMouseWheel(c, a);
          c._persistentState.onMouseWheel(c, a);
        }
        void 0 === k && (k = !1);
        void 0 === r && (r = void 0);
        this._state = new l;
        this._persistentState = new u;
        this.paused = !1;
        this.viewport = null;
        this._selectedNodes = [];
        this._isRendering = !1;
        this._rAF = void 0;
        this._eventListeners = Object.create(null);
        this._fullScreen = !1;
        this._container = a;
        this._stage = new p.Stage(512, 512, !0);
        this._worldView = this._stage.content;
        this._world = new p.Group;
        this._worldView.addChild(this._world);
        this._disableHiDPI = k;
        k = document.createElement("div");
        k.style.position = "absolute";
        k.style.width = "100%";
        k.style.height = "100%";
        k.style.zIndex = "0";
        a.appendChild(k);
        if (p.hud.value) {
          var f = document.createElement("div");
          f.style.position = "absolute";
          f.style.width = "100%";
          f.style.height = "100%";
          f.style.pointerEvents = "none";
          var g = document.createElement("div");
          g.style.position = "absolute";
          g.style.width = "100%";
          g.style.height = "20px";
          g.style.pointerEvents = "none";
          f.appendChild(g);
          a.appendChild(f);
          this._fps = new n(g);
        } else {
          this._fps = null;
        }
        this.transparent = f = 0 === r;
        void 0 === r || 0 === r || h.ColorUtilities.rgbaToCSSStyle(r);
        this._options = new p.Canvas2D.Canvas2DRendererOptions;
        this._options.alpha = f;
        this._renderer = new p.Canvas2D.Canvas2DRenderer(k, this._stage, this._options);
        this._listenForContainerSizeChanges();
        this._onMouseUp = this._onMouseUp.bind(this);
        this._onMouseDown = this._onMouseDown.bind(this);
        this._onMouseMove = this._onMouseMove.bind(this);
        var c = this;
        window.addEventListener("mouseup", function(a) {
          c._state.onMouseUp(c, a);
          c._render();
        }, !1);
        window.addEventListener("mousemove", function(a) {
          c._state.onMouseMove(c, a);
          c._persistentState.onMouseMove(c, a);
        }, !1);
        window.addEventListener("DOMMouseScroll", d);
        window.addEventListener("mousewheel", d);
        a.addEventListener("mousedown", function(a) {
          c._state.onMouseDown(c, a);
        });
        window.addEventListener("keydown", function(a) {
          c._state.onKeyDown(c, a);
          if (c._state !== c._persistentState) {
            c._persistentState.onKeyDown(c, a);
          }
        }, !1);
        window.addEventListener("keypress", function(a) {
          c._state.onKeyPress(c, a);
          if (c._state !== c._persistentState) {
            c._persistentState.onKeyPress(c, a);
          }
        }, !1);
        window.addEventListener("keyup", function(a) {
          c._state.onKeyUp(c, a);
          if (c._state !== c._persistentState) {
            c._persistentState.onKeyUp(c, a);
          }
        }, !1);
      }
      b.prototype._listenForContainerSizeChanges = function() {
        var a = this._containerWidth, b = this._containerHeight;
        this._onContainerSizeChanged();
        var h = this;
        setInterval(function() {
          if (a !== h._containerWidth || b !== h._containerHeight) {
            h._onContainerSizeChanged(), a = h._containerWidth, b = h._containerHeight;
          }
        }, 10);
      };
      b.prototype._onContainerSizeChanged = function() {
        var b = this.getRatio(), h = Math.ceil(this._containerWidth * b), k = Math.ceil(this._containerHeight * b);
        this._stage.setBounds(new x(0, 0, h, k));
        this._stage.content.setBounds(new x(0, 0, h, k));
        this._worldView.getTransform().setMatrix(new a(b, 0, 0, b, 0, 0));
        this._dispatchEvent("resize");
      };
      b.prototype.addEventListener = function(a, b) {
        this._eventListeners[a] || (this._eventListeners[a] = []);
        this._eventListeners[a].push(b);
      };
      b.prototype._dispatchEvent = function(a) {
        if (a = this._eventListeners[a]) {
          for (var b = 0;b < a.length;b++) {
            a[b]();
          }
        }
      };
      b.prototype.startRendering = function() {
        if (!this._isRendering) {
          this._isRendering = !0;
          var a = this;
          this._rAF = requestAnimationFrame(function v() {
            a.render();
            a._rAF = requestAnimationFrame(v);
          });
        }
      };
      b.prototype.stopRendering = function() {
        this._isRendering && (this._isRendering = !1, cancelAnimationFrame(this._rAF));
      };
      Object.defineProperty(b.prototype, "state", {set:function(a) {
        this._state = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(b.prototype, "cursor", {set:function(a) {
        this._container.style.cursor = a;
      }, enumerable:!0, configurable:!0});
      b.prototype._render = function() {
        p.RenderableVideo.checkForVideoUpdates();
        var a = (this._stage.readyToRender() || p.forcePaint.value) && !this.paused, b = 0;
        if (a) {
          var h = this._renderer;
          h.viewport = this.viewport ? this.viewport : this._stage.getBounds();
          this._dispatchEvent("render");
          b = performance.now();
          h.render();
          b = performance.now() - b;
        }
        this._fps && this._fps.tickAndRender(!a, b);
      };
      b.prototype.render = function() {
        this._render();
      };
      Object.defineProperty(b.prototype, "world", {get:function() {
        return this._world;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(b.prototype, "worldView", {get:function() {
        return this._worldView;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(b.prototype, "stage", {get:function() {
        return this._stage;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(b.prototype, "options", {get:function() {
        return this._options;
      }, enumerable:!0, configurable:!0});
      b.prototype.getDisplayParameters = function() {
        var a = this.getRatio();
        return {stageWidth:this._containerWidth, stageHeight:this._containerHeight, pixelRatio:a, screenWidth:window.screen ? window.screen.width : 640, screenHeight:window.screen ? window.screen.height : 480};
      };
      b.prototype.toggleOption = function(a) {
        var b = this._options;
        b[a] = !b[a];
      };
      b.prototype.getOption = function(a) {
        return this._options[a];
      };
      b.prototype.getRatio = function() {
        var a = window.devicePixelRatio || 1, b = 1;
        1 === a || this._disableHiDPI || (b = a / 1);
        return b;
      };
      Object.defineProperty(b.prototype, "_containerWidth", {get:function() {
        return this._container.clientWidth;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(b.prototype, "_containerHeight", {get:function() {
        return this._container.clientHeight;
      }, enumerable:!0, configurable:!0});
      b.prototype.queryNodeUnderMouse = function(a) {
        return this._world;
      };
      b.prototype.selectNodeUnderMouse = function(a) {
        (a = this._world) && this._selectedNodes.push(a);
        this._render();
      };
      b.prototype.getMousePosition = function(b, h) {
        var k = this._container, d = k.getBoundingClientRect(), f = this.getRatio(), k = new r(k.scrollWidth / d.width * (b.clientX - d.left) * f, k.scrollHeight / d.height * (b.clientY - d.top) * f);
        if (!h) {
          return k;
        }
        d = a.createIdentity();
        h.getTransform().getConcatenatedMatrix().inverse(d);
        d.transformPoint(k);
        return k;
      };
      b.prototype.getMouseWorldPosition = function(a) {
        return this.getMousePosition(a, this._world);
      };
      b.prototype._onMouseDown = function(a) {
      };
      b.prototype._onMouseUp = function(a) {
      };
      b.prototype._onMouseMove = function(a) {
      };
      b.prototype.screenShot = function(a, b, h) {
        return this._renderer.screenShot(a, b, h);
      };
      return b;
    }();
    p.Easel = b;
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    var r = h.GFX.Geometry.Matrix;
    (function(a) {
      a[a.Simple = 0] = "Simple";
    })(p.Layout || (p.Layout = {}));
    var a = function(a) {
      function b() {
        a.apply(this, arguments);
        this.layout = 0;
      }
      __extends(b, a);
      return b;
    }(p.RendererOptions);
    p.TreeRendererOptions = a;
    var x = function(h) {
      function b(b, p, k) {
        void 0 === k && (k = new a);
        h.call(this, b, p, k);
        this._canvas = document.createElement("canvas");
        this._container.appendChild(this._canvas);
        this._context = this._canvas.getContext("2d");
        this._listenForContainerSizeChanges();
      }
      __extends(b, h);
      b.prototype._listenForContainerSizeChanges = function() {
        var a = this._containerWidth, b = this._containerHeight;
        this._onContainerSizeChanged();
        var h = this;
        setInterval(function() {
          if (a !== h._containerWidth || b !== h._containerHeight) {
            h._onContainerSizeChanged(), a = h._containerWidth, b = h._containerHeight;
          }
        }, 10);
      };
      b.prototype._getRatio = function() {
        var a = window.devicePixelRatio || 1, b = 1;
        1 !== a && (b = a / 1);
        return b;
      };
      b.prototype._onContainerSizeChanged = function() {
        var a = this._getRatio(), b = Math.ceil(this._containerWidth * a), h = Math.ceil(this._containerHeight * a), n = this._canvas;
        0 < a ? (n.width = b * a, n.height = h * a, n.style.width = b + "px", n.style.height = h + "px") : (n.width = b, n.height = h);
      };
      Object.defineProperty(b.prototype, "_containerWidth", {get:function() {
        return this._container.clientWidth;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(b.prototype, "_containerHeight", {get:function() {
        return this._container.clientHeight;
      }, enumerable:!0, configurable:!0});
      b.prototype.render = function() {
        var a = this._context;
        a.save();
        a.clearRect(0, 0, this._canvas.width, this._canvas.height);
        a.scale(1, 1);
        0 === this._options.layout && this._renderNodeSimple(this._context, this._stage, r.createIdentity());
        a.restore();
      };
      b.prototype._renderNodeSimple = function(a, b, h) {
        function n(b) {
          var c = b.getChildren();
          b.hasFlags(4096) ? a.fillStyle = "red" : a.fillStyle = "white";
          var e = String(b.id);
          b instanceof p.RenderableText ? e = "T" + e : b instanceof p.RenderableShape ? e = "S" + e : b instanceof p.RenderableBitmap ? e = "B" + e : b instanceof p.RenderableVideo && (e = "V" + e);
          b instanceof p.Renderable && (e = e + " [" + b._parents.length + "]");
          b = a.measureText(e).width;
          a.fillText(e, m, r);
          if (c) {
            m += b + 4;
            f = Math.max(f, m + 20);
            for (e = 0;e < c.length;e++) {
              n(c[e]), e < c.length - 1 && (r += 18, r > q._canvas.height && (a.fillStyle = "gray", m = m - d + f + 8, d = f + 8, r = 0, a.fillStyle = "white"));
            }
            m -= b + 4;
          }
        }
        var q = this;
        a.save();
        a.font = "16px Arial";
        a.fillStyle = "white";
        var m = 0, r = 0, d = 0, f = 0;
        n(b);
        a.restore();
      };
      return b;
    }(p.Renderer);
    p.TreeRenderer = x;
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(r) {
      var a = h.GFX.BlurFilter, x = h.GFX.DropshadowFilter, n = h.GFX.Shape, b = h.GFX.Group, l = h.GFX.RenderableShape, u = h.GFX.RenderableMorphShape, k = h.GFX.RenderableBitmap, t = h.GFX.RenderableVideo, q = h.GFX.RenderableText, m = h.GFX.ColorMatrix, v = h.ShapeData, d = h.ArrayUtilities.DataBuffer, f = h.GFX.Stage, g = h.GFX.Geometry.Matrix, c = h.GFX.Geometry.Rectangle, e = function() {
        function a() {
        }
        a.prototype.writeMouseEvent = function(a, b) {
          var c = this.output;
          c.writeInt(300);
          var d = h.Remoting.MouseEventNames.indexOf(a.type);
          c.writeInt(d);
          c.writeFloat(b.x);
          c.writeFloat(b.y);
          c.writeInt(a.buttons);
          c.writeInt((a.ctrlKey ? 1 : 0) | (a.altKey ? 2 : 0) | (a.shiftKey ? 4 : 0));
        };
        a.prototype.writeKeyboardEvent = function(a) {
          var b = this.output;
          b.writeInt(301);
          var c = h.Remoting.KeyboardEventNames.indexOf(a.type);
          b.writeInt(c);
          b.writeInt(a.keyCode);
          b.writeInt(a.charCode);
          b.writeInt(a.location);
          b.writeInt((a.ctrlKey ? 1 : 0) | (a.altKey ? 2 : 0) | (a.shiftKey ? 4 : 0));
        };
        a.prototype.writeFocusEvent = function(a) {
          var b = this.output;
          b.writeInt(302);
          b.writeInt(a);
        };
        return a;
      }();
      r.GFXChannelSerializer = e;
      e = function() {
        function a(b, c, d) {
          function e(a) {
            a = a.getBounds(!0);
            var c = b.easel.getRatio();
            a.scale(1 / c, 1 / c);
            a.snap();
            g.setBounds(a);
          }
          var g = this.stage = new f(128, 512);
          "undefined" !== typeof registerInspectorStage && registerInspectorStage(g);
          e(b.stage);
          b.stage.addEventListener(1, e);
          b.content = g.content;
          d && this.stage.setFlags(2);
          c.addChild(this.stage);
          this._nodes = [];
          this._assets = [];
          this._easelHost = b;
          this._canvas = document.createElement("canvas");
          this._context = this._canvas.getContext("2d");
        }
        a.prototype._registerAsset = function(a, b, c) {
          "undefined" !== typeof registerInspectorAsset && registerInspectorAsset(a, b, c);
          this._assets[a] = c;
        };
        a.prototype._makeNode = function(a) {
          if (-1 === a) {
            return null;
          }
          var b = null;
          return b = a & 134217728 ? this._assets[a & -134217729].wrap() : this._nodes[a];
        };
        a.prototype._getAsset = function(a) {
          return this._assets[a];
        };
        a.prototype._getBitmapAsset = function(a) {
          return this._assets[a];
        };
        a.prototype._getVideoAsset = function(a) {
          return this._assets[a];
        };
        a.prototype._getTextAsset = function(a) {
          return this._assets[a];
        };
        a.prototype.registerFont = function(a, b, c) {
          h.registerCSSFont(a, b, !inFirefox);
          inFirefox ? c(null) : window.setTimeout(c, 400);
        };
        a.prototype.registerImage = function(a, b, c, d, e, f) {
          this._registerAsset(a, b, this._decodeImage(c, d, e, f));
        };
        a.prototype.registerVideo = function(a) {
          this._registerAsset(a, 0, new t(a, this));
        };
        a.prototype._decodeImage = function(a, b, d, e) {
          var f = new Image, g = k.FromImage(f, -1, -1);
          f.src = URL.createObjectURL(new Blob([b], {type:h.getMIMETypeForImageType(a)}));
          f.onload = function() {
            g.setBounds(new c(0, 0, f.width, f.height));
            d && g.mask(d);
            g.invalidate();
            e({width:f.width, height:f.height});
          };
          f.onerror = function() {
            e(null);
          };
          return g;
        };
        a.prototype.sendVideoPlaybackEvent = function(a, b, c) {
          this._easelHost.sendVideoPlaybackEvent(a, b, c);
        };
        return a;
      }();
      r.GFXChannelDeserializerContext = e;
      e = function() {
        function e() {
        }
        e.prototype.read = function() {
          for (var a = 0, b = this.input, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0, k = 0, l = 0;0 < b.bytesAvailable;) {
            switch(a = b.readInt(), a) {
              case 0:
                return;
              case 101:
                c++;
                this._readUpdateGraphics();
                break;
              case 102:
                d++;
                this._readUpdateBitmapData();
                break;
              case 103:
                e++;
                this._readUpdateTextContent();
                break;
              case 100:
                f++;
                this._readUpdateFrame();
                break;
              case 104:
                g++;
                this._readUpdateStage();
                break;
              case 105:
                h++;
                this._readUpdateNetStream();
                break;
              case 200:
                k++;
                this._readDrawToBitmap();
                break;
              case 106:
                l++, this._readRequestBitmapData();
            }
          }
        };
        e.prototype._readMatrix = function() {
          var a = this.input, b = e._temporaryReadMatrix;
          b.setElements(a.readFloat(), a.readFloat(), a.readFloat(), a.readFloat(), a.readFloat() / 20, a.readFloat() / 20);
          return b;
        };
        e.prototype._readRectangle = function() {
          var a = this.input, b = e._temporaryReadRectangle;
          b.setElements(a.readInt() / 20, a.readInt() / 20, a.readInt() / 20, a.readInt() / 20);
          return b;
        };
        e.prototype._readColorMatrix = function() {
          var a = this.input, b = e._temporaryReadColorMatrix, c = 1, d = 1, f = 1, g = 1, h = 0, k = 0, l = 0, m = 0;
          switch(a.readInt()) {
            case 0:
              return e._temporaryReadColorMatrixIdentity;
            case 1:
              g = a.readFloat();
              break;
            case 2:
              c = a.readFloat(), d = a.readFloat(), f = a.readFloat(), g = a.readFloat(), h = a.readInt(), k = a.readInt(), l = a.readInt(), m = a.readInt();
          }
          b.setMultipliersAndOffsets(c, d, f, g, h, k, l, m);
          return b;
        };
        e.prototype._readAsset = function() {
          var a = this.input.readInt(), b = this.inputAssets[a];
          this.inputAssets[a] = null;
          return b;
        };
        e.prototype._readUpdateGraphics = function() {
          for (var a = this.input, b = this.context, c = a.readInt(), d = a.readInt(), e = b._getAsset(c), f = this._readRectangle(), g = v.FromPlainObject(this._readAsset()), h = a.readInt(), k = [], m = 0;m < h;m++) {
            var n = a.readInt();
            k.push(b._getBitmapAsset(n));
          }
          if (e) {
            e.update(g, k, f);
          } else {
            a = g.morphCoordinates ? new u(c, g, k, f) : new l(c, g, k, f);
            for (m = 0;m < k.length;m++) {
              k[m] && k[m].addRenderableParent(a);
            }
            b._registerAsset(c, d, a);
          }
        };
        e.prototype._readUpdateBitmapData = function() {
          var a = this.input, b = this.context, c = a.readInt(), e = a.readInt(), f = b._getBitmapAsset(c), g = this._readRectangle(), a = a.readInt(), h = d.FromPlainObject(this._readAsset());
          f ? f.updateFromDataBuffer(a, h) : (f = k.FromDataBuffer(a, h, g), b._registerAsset(c, e, f));
        };
        e.prototype._readUpdateTextContent = function() {
          var a = this.input, b = this.context, c = a.readInt(), e = a.readInt(), f = b._getTextAsset(c), g = this._readRectangle(), h = this._readMatrix(), k = a.readInt(), l = a.readInt(), m = a.readInt(), n = a.readBoolean(), p = a.readInt(), r = a.readInt(), u = this._readAsset(), t = d.FromPlainObject(this._readAsset()), v = null, x = a.readInt();
          x && (v = new d(4 * x), a.readBytes(v, 0, 4 * x));
          f ? (f.setBounds(g), f.setContent(u, t, h, v), f.setStyle(k, l, p, r), f.reflow(m, n)) : (f = new q(g), f.setContent(u, t, h, v), f.setStyle(k, l, p, r), f.reflow(m, n), b._registerAsset(c, e, f));
          if (this.output) {
            for (a = f.textRect, this.output.writeInt(20 * a.w), this.output.writeInt(20 * a.h), this.output.writeInt(20 * a.x), f = f.lines, a = f.length, this.output.writeInt(a), b = 0;b < a;b++) {
              this._writeLineMetrics(f[b]);
            }
          }
        };
        e.prototype._writeLineMetrics = function(a) {
          this.output.writeInt(a.x);
          this.output.writeInt(a.width);
          this.output.writeInt(a.ascent);
          this.output.writeInt(a.descent);
          this.output.writeInt(a.leading);
        };
        e.prototype._readUpdateStage = function() {
          var a = this.context, b = this.input.readInt();
          a._nodes[b] || (a._nodes[b] = a.stage.content);
          var b = this.input.readInt(), c = this._readRectangle();
          a.stage.content.setBounds(c);
          a.stage.color = h.Color.FromARGB(b);
          a.stage.align = this.input.readInt();
          a.stage.scaleMode = this.input.readInt();
          b = this.input.readInt();
          this.input.readInt();
          c = this.input.readInt();
          a._easelHost.cursor = h.UI.toCSSCursor(c);
          a._easelHost.fullscreen = 0 === b || 1 === b;
        };
        e.prototype._readUpdateNetStream = function() {
          var a = this.context, b = this.input.readInt(), c = a._getVideoAsset(b), d = this._readRectangle();
          c || (a.registerVideo(b), c = a._getVideoAsset(b));
          c.setBounds(d);
        };
        e.prototype._readFilters = function(b) {
          var c = this.input, d = c.readInt(), e = [];
          if (d) {
            for (var f = 0;f < d;f++) {
              var g = c.readInt();
              switch(g) {
                case 0:
                  e.push(new a(c.readFloat(), c.readFloat(), c.readInt()));
                  break;
                case 1:
                  e.push(new x(c.readFloat(), c.readFloat(), c.readFloat(), c.readFloat(), c.readInt(), c.readFloat(), c.readBoolean(), c.readBoolean(), c.readBoolean(), c.readInt(), c.readFloat()));
                  break;
                case 2:
                  g = new Float32Array(20);
                  g[0] = c.readFloat();
                  g[4] = c.readFloat();
                  g[8] = c.readFloat();
                  g[12] = c.readFloat();
                  g[16] = c.readFloat() / 255;
                  g[1] = c.readFloat();
                  g[5] = c.readFloat();
                  g[9] = c.readFloat();
                  g[13] = c.readFloat();
                  g[17] = c.readFloat() / 255;
                  g[2] = c.readFloat();
                  g[6] = c.readFloat();
                  g[10] = c.readFloat();
                  g[14] = c.readFloat();
                  g[18] = c.readFloat() / 255;
                  g[3] = c.readFloat();
                  g[7] = c.readFloat();
                  g[11] = c.readFloat();
                  g[15] = c.readFloat();
                  g[19] = c.readFloat() / 255;
                  e.push(new m(g));
                  break;
                default:
                  h.Debug.somewhatImplemented(p.FilterType[g]);
              }
            }
            b.getLayer().filters = e;
          }
        };
        e.prototype._readUpdateFrame = function() {
          var a = this.input, c = this.context, d = a.readInt(), e = 0, f = c._nodes[d];
          f || (f = c._nodes[d] = new b);
          d = a.readInt();
          d & 1 && f.getTransform().setMatrix(this._readMatrix());
          d & 8 && f.getTransform().setColorMatrix(this._readColorMatrix());
          if (d & 64) {
            var g = a.readInt();
            f.getLayer().mask = 0 <= g ? c._makeNode(g) : null;
          }
          d & 128 && (f.clip = a.readInt());
          d & 32 && (e = a.readInt() / 65535, f.getLayer().blendMode = a.readInt(), this._readFilters(f), f.toggleFlags(1, a.readBoolean()), f.toggleFlags(16, a.readBoolean()), f.toggleFlags(32, !!a.readInt()), f.toggleFlags(64, !!a.readInt()));
          if (d & 4) {
            d = a.readInt();
            g = f;
            g.clearChildren();
            for (var h = 0;h < d;h++) {
              var k = a.readInt(), k = c._makeNode(k);
              g.addChild(k);
            }
          }
          e && (k = f.getChildren()[0], k instanceof n && (k.ratio = e));
        };
        e.prototype._readDrawToBitmap = function() {
          var a = this.input, b = this.context, c = a.readInt(), d = a.readInt(), e = a.readInt(), f, h, l;
          f = e & 1 ? this._readMatrix().clone() : g.createIdentity();
          e & 8 && (h = this._readColorMatrix());
          e & 16 && (l = this._readRectangle());
          e = a.readInt();
          a.readBoolean();
          a = b._getBitmapAsset(c);
          d = b._makeNode(d);
          a ? a.drawNode(d, f, h, e, l) : b._registerAsset(c, -1, k.FromNode(d, f, h, e, l));
        };
        e.prototype._readRequestBitmapData = function() {
          var a = this.output, b = this.context, c = this.input.readInt();
          b._getBitmapAsset(c).readImageData(a);
        };
        e._temporaryReadMatrix = g.createIdentity();
        e._temporaryReadRectangle = c.createEmpty();
        e._temporaryReadColorMatrix = m.createIdentity();
        e._temporaryReadColorMatrixIdentity = m.createIdentity();
        return e;
      }();
      r.GFXChannelDeserializer = e;
    })(p.GFX || (p.GFX = {}));
  })(h.Remoting || (h.Remoting = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    var r = h.GFX.Geometry.Point, a = h.ArrayUtilities.DataBuffer;
    p.ContextMenuButton = 2;
    var x = function() {
      function n(a) {
        this._easel = a;
        var l = a.transparent;
        this._group = a.world;
        this._content = null;
        this._fullscreen = !1;
        this._context = new h.Remoting.GFX.GFXChannelDeserializerContext(this, this._group, l);
        this._addEventListeners();
        h.registerFallbackFont();
      }
      n.prototype.onSendUpdates = function(a, h) {
        throw Error("This method is abstract");
      };
      Object.defineProperty(n.prototype, "easel", {get:function() {
        return this._easel;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(n.prototype, "stage", {get:function() {
        return this._easel.stage;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(n.prototype, "content", {set:function(a) {
        this._content = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(n.prototype, "cursor", {set:function(a) {
        this._easel.cursor = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(n.prototype, "fullscreen", {set:function(a) {
        this._fullscreen !== a && (this._fullscreen = a, "undefined" !== typeof ShumwayCom && ShumwayCom.setFullscreen && ShumwayCom.setFullscreen(a));
      }, enumerable:!0, configurable:!0});
      n.prototype._mouseEventListener = function(b) {
        if (b.button !== p.ContextMenuButton) {
          var l = this._easel.getMousePosition(b, this._content), l = new r(l.x, l.y), n = new a, k = new h.Remoting.GFX.GFXChannelSerializer;
          k.output = n;
          k.writeMouseEvent(b, l);
          this.onSendUpdates(n, []);
        }
      };
      n.prototype._keyboardEventListener = function(b) {
        var l = new a, n = new h.Remoting.GFX.GFXChannelSerializer;
        n.output = l;
        n.writeKeyboardEvent(b);
        this.onSendUpdates(l, []);
      };
      n.prototype._addEventListeners = function() {
        for (var a = this._mouseEventListener.bind(this), h = this._keyboardEventListener.bind(this), p = n._mouseEvents, k = 0;k < p.length;k++) {
          window.addEventListener(p[k], a);
        }
        a = n._keyboardEvents;
        for (k = 0;k < a.length;k++) {
          window.addEventListener(a[k], h);
        }
        this._addFocusEventListeners();
        this._easel.addEventListener("resize", this._resizeEventListener.bind(this));
      };
      n.prototype._sendFocusEvent = function(b) {
        var l = new a, n = new h.Remoting.GFX.GFXChannelSerializer;
        n.output = l;
        n.writeFocusEvent(b);
        this.onSendUpdates(l, []);
      };
      n.prototype._addFocusEventListeners = function() {
        var a = this;
        document.addEventListener("visibilitychange", function(h) {
          a._sendFocusEvent(document.hidden ? 0 : 1);
        });
        window.addEventListener("focus", function(h) {
          a._sendFocusEvent(3);
        });
        window.addEventListener("blur", function(h) {
          a._sendFocusEvent(2);
        });
      };
      n.prototype._resizeEventListener = function() {
        this.onDisplayParameters(this._easel.getDisplayParameters());
      };
      n.prototype.onDisplayParameters = function(a) {
        throw Error("This method is abstract");
      };
      n.prototype.processUpdates = function(a, l, n) {
        void 0 === n && (n = null);
        var k = new h.Remoting.GFX.GFXChannelDeserializer;
        k.input = a;
        k.inputAssets = l;
        k.output = n;
        k.context = this._context;
        k.read();
      };
      n.prototype.processVideoControl = function(a, h, n) {
        var k = this._context, p = k._getVideoAsset(a);
        if (!p) {
          if (1 !== h) {
            return;
          }
          k.registerVideo(a);
          p = k._getVideoAsset(a);
        }
        return p.processControlRequest(h, n);
      };
      n.prototype.processRegisterFont = function(a, h, n) {
        this._context.registerFont(a, h, n);
      };
      n.prototype.processRegisterImage = function(a, h, n, k, p, q) {
        this._context.registerImage(a, h, n, k, p, q);
      };
      n.prototype.processFSCommand = function(a, h) {
        "undefined" !== typeof ShumwayCom && "test" === ShumwayCom.environment && ShumwayCom.processFSCommand(a, h);
      };
      n.prototype.processFrame = function() {
        "undefined" !== typeof ShumwayCom && "test" === ShumwayCom.environment && ShumwayCom.processFrame();
      };
      n.prototype.onVideoPlaybackEvent = function(a, h, n) {
        throw Error("This method is abstract");
      };
      n.prototype.sendVideoPlaybackEvent = function(a, h, n) {
        this.onVideoPlaybackEvent(a, h, n);
      };
      n._mouseEvents = h.Remoting.MouseEventNames;
      n._keyboardEvents = h.Remoting.KeyboardEventNames;
      return n;
    }();
    p.EaselHost = x;
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(r) {
      var a = h.ArrayUtilities.DataBuffer, x = function(h) {
        function b(a, b) {
          h.call(this, a);
          this._peer = b;
          this._peer.onSyncMessage = function(a) {
            return this._onWindowMessage(a, !1);
          }.bind(this);
          this._peer.onAsyncMessage = function(a) {
            this._onWindowMessage(a, !0);
          }.bind(this);
        }
        __extends(b, h);
        b.prototype.onSendUpdates = function(a, b) {
          var h = a.getBytes();
          this._peer.postAsyncMessage({type:"gfx", updates:h, assets:b}, [h.buffer]);
        };
        b.prototype.onDisplayParameters = function(a) {
          this._peer.postAsyncMessage({type:"displayParameters", params:a});
        };
        b.prototype.onVideoPlaybackEvent = function(a, b, h) {
          this._peer.postAsyncMessage({type:"videoPlayback", id:a, eventType:b, data:h});
        };
        b.prototype._sendRegisterFontResponse = function(a, b) {
          this._peer.postAsyncMessage({type:"registerFontResponse", requestId:a, result:b});
        };
        b.prototype._sendRegisterImageResponse = function(a, b) {
          this._peer.postAsyncMessage({type:"registerImageResponse", requestId:a, result:b});
        };
        b.prototype._onWindowMessage = function(b, h) {
          var k;
          if ("object" === typeof b && null !== b) {
            if ("player" === b.type) {
              var n = a.FromArrayBuffer(b.updates.buffer);
              h ? this.processUpdates(n, b.assets) : (k = new a, this.processUpdates(n, b.assets, k), k = k.toPlainObject());
            } else {
              "frame" === b.type ? this.processFrame() : "videoControl" === b.type ? k = this.processVideoControl(b.id, b.eventType, b.data) : "registerFont" === b.type ? this.processRegisterFont(b.syncId, b.data, this._sendRegisterFontResponse.bind(this, b.requestId)) : "registerImage" === b.type ? this.processRegisterImage(b.syncId, b.symbolId, b.imageType, b.data, b.alphaData, this._sendRegisterImageResponse.bind(this, b.requestId)) : "fscommand" === b.type && this.processFSCommand(b.command, 
              b.args);
            }
          }
          return k;
        };
        return b;
      }(p.EaselHost);
      r.WindowEaselHost = x;
    })(p.Window || (p.Window = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(p) {
      function a(a, b) {
        a.writeInt(b.length);
        a.writeRawBytes(b);
      }
      function x(a, b) {
        return "byteLength" in a && "buffer" in a && (a.constructor && a.constructor.name) === b;
      }
      function n(a) {
        return "byteLength" in a && "ArrayBuffer" === (a.constructor && a.constructor.name);
      }
      function b(b) {
        function f(b) {
          switch(typeof b) {
            case "undefined":
              g.writeByte(0);
              break;
            case "boolean":
              g.writeByte(b ? 2 : 3);
              break;
            case "number":
              g.writeByte(4);
              g.writeDouble(b);
              break;
            case "string":
              g.writeByte(5);
              g.writeUTF(b);
              break;
            default:
              if (null === b) {
                g.writeByte(1);
                break;
              }
              if (Array.isArray(b)) {
                g.writeByte(6);
                g.writeInt(b.length);
                for (var d = 0;d < b.length;d++) {
                  f(b[d]);
                }
              } else {
                if (x(b, "Uint8Array")) {
                  g.writeByte(9), a(g, b);
                } else {
                  if ("length" in b && "buffer" in b && "littleEndian" in b) {
                    g.writeByte(b.littleEndian ? 10 : 11), a(g, new Uint8Array(b.buffer, 0, b.length));
                  } else {
                    if (n(b)) {
                      g.writeByte(8), a(g, new Uint8Array(b));
                    } else {
                      if (x(b, "Int32Array")) {
                        g.writeByte(12), a(g, new Uint8Array(b.buffer, b.byteOffset, b.byteLength));
                      } else {
                        if (!h.isNullOrUndefined(b.buffer) && n(b.buffer) && "number" === typeof b.byteOffset) {
                          throw Error("Some unsupported TypedArray is used");
                        }
                        g.writeByte(7);
                        for (d in b) {
                          g.writeUTF(d), f(b[d]);
                        }
                        g.writeUTF("");
                      }
                    }
                  }
                }
              }
            ;
          }
        }
        var g = new t;
        f(b);
        return g.getBytes();
      }
      function l(a) {
        var b = new t, g = a.readInt();
        a.readBytes(b, 0, g);
        return b.getBytes();
      }
      function u(a) {
        var b = new t, g = a.readInt();
        a.readBytes(b, 0, g);
        return k(b);
      }
      function k(a) {
        var b = a.readByte();
        switch(b) {
          case 1:
            return null;
          case 2:
            return !0;
          case 3:
            return !1;
          case 4:
            return a.readDouble();
          case 5:
            return a.readUTF();
          case 6:
            for (var b = [], g = a.readInt(), c = 0;c < g;c++) {
              b[c] = k(a);
            }
            return b;
          case 7:
            for (b = {};g = a.readUTF();) {
              b[g] = k(a);
            }
            return b;
          case 8:
            return l(a).buffer;
          case 9:
            return l(a);
          case 11:
          ;
          case 10:
            return a = l(a), new q(a.buffer, a.length, 10 === b);
          case 12:
            return new Int32Array(l(a).buffer);
        }
      }
      var t = h.ArrayUtilities.DataBuffer, q = h.ArrayUtilities.PlainObjectDataBuffer, m;
      (function(a) {
        a[a.Undefined = 0] = "Undefined";
        a[a.Null = 1] = "Null";
        a[a.True = 2] = "True";
        a[a.False = 3] = "False";
        a[a.Number = 4] = "Number";
        a[a.String = 5] = "String";
        a[a.Array = 6] = "Array";
        a[a.Object = 7] = "Object";
        a[a.ArrayBuffer = 8] = "ArrayBuffer";
        a[a.Uint8Array = 9] = "Uint8Array";
        a[a.PlainObjectDataBufferLE = 10] = "PlainObjectDataBufferLE";
        a[a.PlainObjectDataBufferBE = 11] = "PlainObjectDataBufferBE";
        a[a.Int32Array = 12] = "Int32Array";
      })(m || (m = {}));
      (function(a) {
        a[a.None = 0] = "None";
        a[a.PlayerCommand = 1] = "PlayerCommand";
        a[a.PlayerCommandAsync = 2] = "PlayerCommandAsync";
        a[a.Frame = 3] = "Frame";
        a[a.Font = 4] = "Font";
        a[a.Image = 5] = "Image";
        a[a.FSCommand = 6] = "FSCommand";
      })(p.MovieRecordType || (p.MovieRecordType = {}));
      m = function() {
        function d(a) {
          this._maxRecordingSize = a;
          this._recording = new t;
          this._recordingStarted = Date.now();
          this._recording.writeRawBytes(new Uint8Array([77, 83, 87, 70]));
          this._stopped = !1;
        }
        d.prototype.stop = function() {
          this._stopped = !0;
        };
        d.prototype.getRecording = function() {
          return new Blob([this._recording.getBytes()], {type:"application/octet-stream"});
        };
        d.prototype.dump = function() {
          (new v(this._recording.getBytes())).dump();
        };
        d.prototype._createRecord = function(a, b) {
          this._stopped || (this._recording.length + 8 + (b ? b.length : 0) >= this._maxRecordingSize ? (console.error("Recording limit reached"), this._stopped = !0) : (this._recording.writeInt(Date.now() - this._recordingStarted), this._recording.writeInt(a), null !== b ? (this._recording.writeInt(b.length), this._recording.writeRawBytes(b.getBytes())) : this._recording.writeInt(0)));
        };
        d.prototype.recordPlayerCommand = function(d, g, c) {
          var e = new t;
          a(e, g);
          e.writeInt(c.length);
          c.forEach(function(c) {
            c = b(c);
            a(e, c);
          });
          this._createRecord(d ? 2 : 1, e);
        };
        d.prototype.recordFrame = function() {
          this._createRecord(3, null);
        };
        d.prototype.recordFont = function(d, g) {
          var c = new t;
          c.writeInt(d);
          a(c, b(g));
          this._createRecord(4, c);
        };
        d.prototype.recordImage = function(d, g, c, e, h) {
          var k = new t;
          k.writeInt(d);
          k.writeInt(g);
          k.writeInt(c);
          a(k, b(e));
          a(k, b(h));
          this._createRecord(5, k);
        };
        d.prototype.recordFSCommand = function(a, b) {
          var c = new t;
          c.writeUTF(a);
          c.writeUTF(b || "");
          this._createRecord(6, c);
        };
        return d;
      }();
      p.MovieRecorder = m;
      var v = function() {
        function a(b) {
          this._buffer = new t;
          this._buffer.writeRawBytes(b);
          this._buffer.position = 4;
        }
        a.prototype.readNextRecord = function() {
          if (this._buffer.position >= this._buffer.length) {
            return 0;
          }
          var a = this._buffer.readInt(), b = this._buffer.readInt(), c = this._buffer.readInt(), d = null;
          0 < c && (d = new t, this._buffer.readBytes(d, 0, c));
          this.currentTimestamp = a;
          this.currentType = b;
          this.currentData = d;
          return b;
        };
        a.prototype.parsePlayerCommand = function() {
          for (var a = l(this.currentData), b = this.currentData.readInt(), c = [], d = 0;d < b;d++) {
            c.push(u(this.currentData));
          }
          return {updates:a, assets:c};
        };
        a.prototype.parseFSCommand = function() {
          var a = this.currentData.readUTF(), b = this.currentData.readUTF();
          return {command:a, args:b};
        };
        a.prototype.parseFont = function() {
          var a = this.currentData.readInt(), b = u(this.currentData);
          return {syncId:a, data:b};
        };
        a.prototype.parseImage = function() {
          var a = this.currentData.readInt(), b = this.currentData.readInt(), c = this.currentData.readInt(), d = u(this.currentData);
          return {syncId:a, symbolId:b, imageType:c, data:d};
        };
        a.prototype.dump = function() {
          for (var a;a = this.readNextRecord();) {
            switch(console.log("record " + a + " @" + this.currentTimestamp), a) {
              case 1:
              ;
              case 2:
                console.log(this.parsePlayerCommand());
                break;
              case 6:
                console.log(this.parseFSCommand());
                break;
              case 4:
                console.log(this.parseFont());
                break;
              case 5:
                console.log(this.parseImage());
            }
          }
        };
        return a;
      }();
      p.MovieRecordParser = v;
    })(p.Test || (p.Test = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(r) {
      var a = h.ArrayUtilities.DataBuffer, x = function(h) {
        function b(a) {
          h.call(this, a);
          this.alwaysRenderFrame = this.ignoreTimestamps = !1;
          this.cpuTimeRendering = this.cpuTimeUpdates = 0;
          this.onComplete = null;
        }
        __extends(b, h);
        Object.defineProperty(b.prototype, "cpuTime", {get:function() {
          return this.cpuTimeUpdates + this.cpuTimeRendering;
        }, enumerable:!0, configurable:!0});
        b.prototype.playUrl = function(a) {
          var b = new XMLHttpRequest;
          b.open("GET", a, !0);
          b.responseType = "arraybuffer";
          b.onload = function() {
            this.playBytes(new Uint8Array(b.response));
          }.bind(this);
          b.send();
        };
        b.prototype.playBytes = function(a) {
          this._parser = new r.MovieRecordParser(a);
          this._lastTimestamp = 0;
          this._parseNext();
        };
        b.prototype.onSendUpdates = function(a, b) {
        };
        b.prototype.onDisplayParameters = function(a) {
        };
        b.prototype.onVideoPlaybackEvent = function(a, b, h) {
        };
        b.prototype._parseNext = function() {
          if (0 !== this._parser.readNextRecord()) {
            var a = this._runRecord.bind(this), b = this._parser.currentTimestamp - this._lastTimestamp;
            this._lastTimestamp = this._parser.currentTimestamp;
            5 > b ? Promise.resolve(void 0).then(a) : this.ignoreTimestamps ? setTimeout(a) : setTimeout(a, b);
          } else {
            if (this.onComplete) {
              this.onComplete();
            }
          }
        };
        b.prototype._runRecord = function() {
          var b, h = performance.now();
          switch(this._parser.currentType) {
            case 1:
            ;
            case 2:
              b = this._parser.parsePlayerCommand();
              var k = 2 === this._parser.currentType, n = a.FromArrayBuffer(b.updates.buffer);
              k ? this.processUpdates(n, b.assets) : (k = new a, this.processUpdates(n, b.assets, k));
              break;
            case 3:
              this.processFrame();
              break;
            case 4:
              b = this._parser.parseFont();
              this.processRegisterFont(b.syncId, b.data, function() {
              });
              break;
            case 5:
              b = this._parser.parseImage();
              this.processRegisterImage(b.syncId, b.symbolId, b.imageType, b.data, b.alphaData, function() {
              });
              break;
            case 6:
              b = this._parser.parseFSCommand();
              this.processFSCommand(b.command, b.args);
              break;
            default:
              throw Error("Invalid movie record type");;
          }
          this.cpuTimeUpdates += performance.now() - h;
          3 === this._parser.currentType && this.alwaysRenderFrame ? requestAnimationFrame(this._renderFrameJustAfterRAF.bind(this)) : this._parseNext();
        };
        b.prototype._renderFrameJustAfterRAF = function() {
          var a = performance.now();
          this.easel.render();
          this.cpuTimeRendering += performance.now() - a;
          this._parseNext();
        };
        return b;
      }(p.EaselHost);
      r.PlaybackEaselHost = x;
    })(p.Test || (p.Test = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(p) {
      var a = function(a) {
        function h(b, l, n) {
          void 0 === n && (n = 0);
          a.call(this, b, l);
          this._recorder = null;
          this._recorder = new p.MovieRecorder(n);
        }
        __extends(h, a);
        Object.defineProperty(h.prototype, "recorder", {get:function() {
          return this._recorder;
        }, enumerable:!0, configurable:!0});
        h.prototype._onWindowMessage = function(b, h) {
          switch(b.type) {
            case "player":
              this._recorder.recordPlayerCommand(h, b.updates, b.assets);
              break;
            case "frame":
              this._recorder.recordFrame();
              break;
            case "registerFont":
              this._recorder.recordFont(b.syncId, b.data);
              break;
            case "registerImage":
              this._recorder.recordImage(b.syncId, b.symbolId, b.imageType, b.data, b.alphaData);
              break;
            case "fscommand":
              this._recorder.recordFSCommand(b.command, b.args);
          }
          return a.prototype._onWindowMessage.call(this, b, h);
        };
        return h;
      }(h.GFX.Window.WindowEaselHost);
      p.RecordingEaselHost = a;
    })(p.Test || (p.Test = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
console.timeEnd("Load GFX Dependencies");

