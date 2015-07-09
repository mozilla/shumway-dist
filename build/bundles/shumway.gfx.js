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
Shumway$$inline_0.version = "0.11.388";
Shumway$$inline_0.build = "6816dd1";
var jsGlobal = function() {
  return this || (0,eval)("this//# sourceURL=jsGlobal-getter");
}(), inBrowser = "undefined" !== typeof window && "document" in window && "plugins" in window.document, inFirefox = "undefined" !== typeof navigator && 0 <= navigator.userAgent.indexOf("Firefox");
jsGlobal.performance || (jsGlobal.performance = {});
jsGlobal.performance.now || (jsGlobal.performance.now = function() {
  return Date.now();
});
function lazyInitializer(h, q, r) {
  Object.defineProperty(h, q, {get:function() {
    var b = r();
    Object.defineProperty(h, q, {value:b, configurable:!0, enumerable:!0});
    return b;
  }, configurable:!0, enumerable:!0});
}
var START_TIME = performance.now();
(function(h) {
  function q(d) {
    return (d | 0) === d;
  }
  function r(d) {
    return "object" === typeof d || "function" === typeof d;
  }
  function b(d) {
    return String(Number(d)) === d;
  }
  function w(d) {
    var f = 0;
    if ("number" === typeof d) {
      return f = d | 0, d === f && 0 <= f ? !0 : d >>> 0 === d;
    }
    if ("string" !== typeof d) {
      return !1;
    }
    var e = d.length;
    if (0 === e) {
      return !1;
    }
    if ("0" === d) {
      return !0;
    }
    if (e > h.UINT32_CHAR_BUFFER_LENGTH) {
      return !1;
    }
    var c = 0, f = d.charCodeAt(c++) - 48;
    if (1 > f || 9 < f) {
      return !1;
    }
    for (var m = 0, y = 0;c < e;) {
      y = d.charCodeAt(c++) - 48;
      if (0 > y || 9 < y) {
        return !1;
      }
      m = f;
      f = 10 * f + y;
    }
    return m < h.UINT32_MAX_DIV_10 || m === h.UINT32_MAX_DIV_10 && y <= h.UINT32_MAX_MOD_10 ? !0 : !1;
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
  h.isInteger = q;
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
  h.isNumericString = b;
  h.isNumeric = function(d) {
    if ("number" === typeof d) {
      return !0;
    }
    if ("string" === typeof d) {
      var f = d.charCodeAt(0);
      return 65 <= f && 90 >= f || 97 <= f && 122 >= f || 36 === f || 95 === f ? !1 : w(d) || b(d);
    }
    return !1;
  };
  h.isIndex = w;
  h.isNullOrUndefined = function(d) {
    return void 0 == d;
  };
  h.argumentsToString = function(d) {
    for (var f = [], e = 0;e < d.length;e++) {
      var c = d[e];
      try {
        var m;
        m = "object" === typeof c && c ? "toString" in c ? c.toString() : Object.prototype.toString.call(c) : c + "";
        f.push(m);
      } catch (y) {
        f.push("<unprintable value>");
      }
    }
    return f.join(", ");
  };
  var l;
  (function(d) {
    d.error = function(c) {
      console.error(c);
      throw Error(c);
    };
    d.assert = function(c, m) {
      void 0 === m && (m = "assertion failed");
      "" === c && (c = !0);
      if (!c) {
        if ("undefined" !== typeof console && "assert" in console) {
          throw console.assert(!1, m), Error(m);
        }
        d.error(m.toString());
      }
    };
    d.assertUnreachable = function(c) {
      throw Error("Reached unreachable location " + Error().stack.split("\n")[1] + c);
    };
    d.assertNotImplemented = function(c, m) {
      c || d.error("notImplemented: " + m);
    };
    var f = Object.create(null);
    d.warning = function(c, m, e) {
    };
    d.warnCounts = function() {
      var c = [], m;
      for (m in f) {
        c.push({key:m, count:f[m]});
      }
      c.sort(function(c, m) {
        return m.count - c.count;
      });
      return c.reduce(function(c, m) {
        return c + ("\n" + m.count + "\t" + m.key);
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
    var e = {};
    d.somewhatImplemented = function(c) {
      e[c] || (e[c] = !0, d.warning("somewhatImplemented: " + c));
    };
    d.unexpected = function(c) {
      d.assert(!1, "Unexpected: " + c);
    };
    d.unexpectedCase = function(c) {
      d.assert(!1, "Unexpected Case: " + c);
    };
  })(l = h.Debug || (h.Debug = {}));
  h.getTicks = function() {
    return performance.now();
  };
  (function(d) {
    function f(c, m) {
      for (var e = 0, f = c.length;e < f;e++) {
        if (c[e] === m) {
          return e;
        }
      }
      c.push(m);
      return c.length - 1;
    }
    d.popManyInto = function(c, m, e) {
      for (var f = m - 1;0 <= f;f--) {
        e[f] = c.pop();
      }
      e.length = m;
    };
    d.popMany = function(c, m) {
      var e = c.length - m, f = c.slice(e, this.length);
      c.length = e;
      return f;
    };
    d.popManyIntoVoid = function(c, m) {
      c.length -= m;
    };
    d.pushMany = function(c, m) {
      for (var e = 0;e < m.length;e++) {
        c.push(m[e]);
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
    d.indexOf = function(c, m) {
      for (var e = 0, f = c.length;e < f;e++) {
        if (c[e] === m) {
          return e;
        }
      }
      return -1;
    };
    d.equals = function(c, m) {
      if (c.length !== m.length) {
        return !1;
      }
      for (var e = 0;e < c.length;e++) {
        if (c[e] !== m[e]) {
          return !1;
        }
      }
      return !0;
    };
    d.pushUnique = f;
    d.unique = function(c) {
      for (var m = [], e = 0;e < c.length;e++) {
        f(m, c[e]);
      }
      return m;
    };
    d.copyFrom = function(c, m) {
      c.length = 0;
      d.pushMany(c, m);
    };
    d.ensureTypedArrayCapacity = function(c, m) {
      if (c.length < m) {
        var e = c;
        c = new c.constructor(h.IntegerUtilities.nearestPowerOfTwo(m));
        c.set(e, 0);
      }
      return c;
    };
    d.memCopy = function(c, m, e, f, d) {
      void 0 === e && (e = 0);
      void 0 === f && (f = 0);
      void 0 === d && (d = 0);
      0 < f || 0 < d && d < m.length ? (0 >= d && (d = m.length - f), c.set(m.subarray(f, f + d), e)) : c.set(m, e);
    };
    var e = function() {
      function c(c) {
        void 0 === c && (c = 16);
        this._f32 = this._i32 = this._u16 = this._u8 = null;
        this._offset = 0;
        this.ensureCapacity(c);
      }
      c.prototype.reset = function() {
        this._offset = 0;
      };
      Object.defineProperty(c.prototype, "offset", {get:function() {
        return this._offset;
      }, enumerable:!0, configurable:!0});
      c.prototype.getIndex = function(c) {
        return this._offset / c;
      };
      c.prototype.ensureAdditionalCapacity = function(c) {
        this.ensureCapacity(this._offset + c);
      };
      c.prototype.ensureCapacity = function(c) {
        if (!this._u8) {
          this._u8 = new Uint8Array(c);
        } else {
          if (this._u8.length > c) {
            return;
          }
        }
        var e = 2 * this._u8.length;
        e < c && (e = c);
        c = new Uint8Array(e);
        c.set(this._u8, 0);
        this._u8 = c;
        this._u16 = new Uint16Array(c.buffer);
        this._i32 = new Int32Array(c.buffer);
        this._f32 = new Float32Array(c.buffer);
      };
      c.prototype.writeInt = function(c) {
        this.ensureCapacity(this._offset + 4);
        this.writeIntUnsafe(c);
      };
      c.prototype.writeIntAt = function(c, e) {
        this.ensureCapacity(e + 4);
        this._i32[e >> 2] = c;
      };
      c.prototype.writeIntUnsafe = function(c) {
        this._i32[this._offset >> 2] = c;
        this._offset += 4;
      };
      c.prototype.writeFloat = function(c) {
        this.ensureCapacity(this._offset + 4);
        this.writeFloatUnsafe(c);
      };
      c.prototype.writeFloatUnsafe = function(c) {
        this._f32[this._offset >> 2] = c;
        this._offset += 4;
      };
      c.prototype.write4Floats = function(c, e, f, d) {
        this.ensureCapacity(this._offset + 16);
        this.write4FloatsUnsafe(c, e, f, d);
      };
      c.prototype.write4FloatsUnsafe = function(c, e, f, d) {
        var a = this._offset >> 2;
        this._f32[a + 0] = c;
        this._f32[a + 1] = e;
        this._f32[a + 2] = f;
        this._f32[a + 3] = d;
        this._offset += 16;
      };
      c.prototype.write6Floats = function(c, e, f, d, a, k) {
        this.ensureCapacity(this._offset + 24);
        this.write6FloatsUnsafe(c, e, f, d, a, k);
      };
      c.prototype.write6FloatsUnsafe = function(c, e, f, d, a, k) {
        var b = this._offset >> 2;
        this._f32[b + 0] = c;
        this._f32[b + 1] = e;
        this._f32[b + 2] = f;
        this._f32[b + 3] = d;
        this._f32[b + 4] = a;
        this._f32[b + 5] = k;
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
      c.prototype.hashWords = function(c, e, f) {
        e = this._i32;
        for (var d = 0;d < f;d++) {
          c = (31 * c | 0) + e[d] | 0;
        }
        return c;
      };
      c.prototype.reserve = function(c) {
        c = c + 3 & -4;
        this.ensureCapacity(this._offset + c);
        this._offset += c;
      };
      return c;
    }();
    d.ArrayWriter = e;
  })(h.ArrayUtilities || (h.ArrayUtilities = {}));
  var a = function() {
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
  h.ArrayReader = a;
  (function(d) {
    function f(c, m) {
      return Object.prototype.hasOwnProperty.call(c, m);
    }
    function e(c, m) {
      for (var e in m) {
        f(m, e) && (c[e] = m[e]);
      }
    }
    d.boxValue = function(c) {
      return void 0 == c || r(c) ? c : Object(c);
    };
    d.toKeyValueArray = function(c) {
      var m = Object.prototype.hasOwnProperty, e = [], f;
      for (f in c) {
        m.call(c, f) && e.push([f, c[f]]);
      }
      return e;
    };
    d.isPrototypeWriteable = function(c) {
      return Object.getOwnPropertyDescriptor(c, "prototype").writable;
    };
    d.hasOwnProperty = f;
    d.propertyIsEnumerable = function(c, m) {
      return Object.prototype.propertyIsEnumerable.call(c, m);
    };
    d.getPropertyDescriptor = function(c, m) {
      do {
        var e = Object.getOwnPropertyDescriptor(c, m);
        if (e) {
          return e;
        }
        c = Object.getPrototypeOf(c);
      } while (c);
      return null;
    };
    d.hasOwnGetter = function(c, m) {
      var e = Object.getOwnPropertyDescriptor(c, m);
      return !(!e || !e.get);
    };
    d.getOwnGetter = function(c, m) {
      var e = Object.getOwnPropertyDescriptor(c, m);
      return e ? e.get : null;
    };
    d.hasOwnSetter = function(c, m) {
      var e = Object.getOwnPropertyDescriptor(c, m);
      return !(!e || !e.set);
    };
    d.createMap = function() {
      return Object.create(null);
    };
    d.createArrayMap = function() {
      return [];
    };
    d.defineReadOnlyProperty = function(c, m, e) {
      Object.defineProperty(c, m, {value:e, writable:!1, configurable:!0, enumerable:!1});
    };
    d.getOwnPropertyDescriptors = function(c) {
      for (var m = d.createMap(), e = Object.getOwnPropertyNames(c), f = 0;f < e.length;f++) {
        m[e[f]] = Object.getOwnPropertyDescriptor(c, e[f]);
      }
      return m;
    };
    d.cloneObject = function(c) {
      var m = Object.create(Object.getPrototypeOf(c));
      e(m, c);
      return m;
    };
    d.copyProperties = function(c, m) {
      for (var e in m) {
        c[e] = m[e];
      }
    };
    d.copyOwnProperties = e;
    d.copyOwnPropertyDescriptors = function(c, m, e, d, a) {
      void 0 === e && (e = null);
      void 0 === d && (d = !0);
      void 0 === a && (a = !1);
      for (var k in m) {
        if (f(m, k) && (!e || e(k))) {
          var b = Object.getOwnPropertyDescriptor(m, k);
          if (d || !f(c, k)) {
            try {
              a && !1 === b.writable && (b.writable = !0), Object.defineProperty(c, k, b);
            } catch (g) {
              l.assert("Can't define: " + k);
            }
          }
        }
      }
    };
    d.copyPropertiesByList = function(c, m, e) {
      for (var f = 0;f < e.length;f++) {
        var d = e[f];
        c[d] = m[d];
      }
    };
    d.getLatestGetterOrSetterPropertyDescriptor = function(c, m) {
      for (var e = {};c;) {
        var f = Object.getOwnPropertyDescriptor(c, m);
        f && (e.get = e.get || f.get, e.set = e.set || f.set);
        if (e.get && e.set) {
          break;
        }
        c = Object.getPrototypeOf(c);
      }
      return e;
    };
    d.defineNonEnumerableGetterOrSetter = function(c, m, e, f) {
      var a = d.getLatestGetterOrSetterPropertyDescriptor(c, m);
      a.configurable = !0;
      a.enumerable = !1;
      f ? a.get = e : a.set = e;
      Object.defineProperty(c, m, a);
    };
    d.defineNonEnumerableGetter = function(c, m, e) {
      Object.defineProperty(c, m, {get:e, configurable:!0, enumerable:!1});
    };
    d.defineNonEnumerableSetter = function(c, m, e) {
      Object.defineProperty(c, m, {set:e, configurable:!0, enumerable:!1});
    };
    d.defineNonEnumerableProperty = function(c, e, f) {
      Object.defineProperty(c, e, {value:f, writable:!0, configurable:!0, enumerable:!1});
    };
    d.defineNonEnumerableForwardingProperty = function(c, e, f) {
      Object.defineProperty(c, e, {get:k.makeForwardingGetter(f), set:k.makeForwardingSetter(f), writable:!0, configurable:!0, enumerable:!1});
    };
    d.defineNewNonEnumerableProperty = function(c, e, f) {
      d.defineNonEnumerableProperty(c, e, f);
    };
    d.createPublicAliases = function(c, e) {
      for (var f = {value:null, writable:!0, configurable:!0, enumerable:!1}, d = 0;d < e.length;d++) {
        var a = e[d];
        f.value = c[a];
        Object.defineProperty(c, "$Bg" + a, f);
      }
    };
  })(h.ObjectUtilities || (h.ObjectUtilities = {}));
  var k;
  (function(d) {
    d.makeForwardingGetter = function(f) {
      return new Function('return this["' + f + '"]//# sourceURL=fwd-get-' + f + ".as");
    };
    d.makeForwardingSetter = function(f) {
      return new Function("value", 'this["' + f + '"] = value;//# sourceURL=fwd-set-' + f + ".as");
    };
    d.bindSafely = function(f, e) {
      function c() {
        return f.apply(e, arguments);
      }
      c.boundTo = e;
      return c;
    };
  })(k = h.FunctionUtilities || (h.FunctionUtilities = {}));
  (function(d) {
    function f(c) {
      return "string" === typeof c ? '"' + c + '"' : "number" === typeof c || "boolean" === typeof c ? String(c) : c instanceof Array ? "[] " + c.length : typeof c;
    }
    function e(c, e, f) {
      m[0] = c;
      m[1] = e;
      m[2] = f;
      return m.join("");
    }
    function c(c, e, m, f) {
      y[0] = c;
      y[1] = e;
      y[2] = m;
      y[3] = f;
      return y.join("");
    }
    d.repeatString = function(c, e) {
      for (var m = "", f = 0;f < e;f++) {
        m += c;
      }
      return m;
    };
    d.memorySizeToString = function(c) {
      c |= 0;
      return 1024 > c ? c + " B" : 1048576 > c ? (c / 1024).toFixed(2) + "KB" : (c / 1048576).toFixed(2) + "MB";
    };
    d.toSafeString = f;
    d.toSafeArrayString = function(c) {
      for (var e = [], m = 0;m < c.length;m++) {
        e.push(f(c[m]));
      }
      return e.join(", ");
    };
    d.utf8decode = function(c) {
      for (var e = new Uint8Array(4 * c.length), m = 0, f = 0, d = c.length;f < d;f++) {
        var y = c.charCodeAt(f);
        if (127 >= y) {
          e[m++] = y;
        } else {
          if (55296 <= y && 56319 >= y) {
            var x = c.charCodeAt(f + 1);
            56320 <= x && 57343 >= x && (y = ((y & 1023) << 10) + (x & 1023) + 65536, ++f);
          }
          0 !== (y & 4292870144) ? (e[m++] = 248 | y >>> 24 & 3, e[m++] = 128 | y >>> 18 & 63, e[m++] = 128 | y >>> 12 & 63, e[m++] = 128 | y >>> 6 & 63) : 0 !== (y & 4294901760) ? (e[m++] = 240 | y >>> 18 & 7, e[m++] = 128 | y >>> 12 & 63, e[m++] = 128 | y >>> 6 & 63) : 0 !== (y & 4294965248) ? (e[m++] = 224 | y >>> 12 & 15, e[m++] = 128 | y >>> 6 & 63) : e[m++] = 192 | y >>> 6 & 31;
          e[m++] = 128 | y & 63;
        }
      }
      return e.subarray(0, m);
    };
    d.utf8encode = function(c) {
      for (var e = 0, m = "";e < c.length;) {
        var f = c[e++] & 255;
        if (127 >= f) {
          m += String.fromCharCode(f);
        } else {
          var d = 192, y = 5;
          do {
            if ((f & (d >> 1 | 128)) === d) {
              break;
            }
            d = d >> 1 | 128;
            --y;
          } while (0 <= y);
          if (0 >= y) {
            m += String.fromCharCode(f);
          } else {
            for (var f = f & (1 << y) - 1, d = !1, x = 5;x >= y;--x) {
              var a = c[e++];
              if (128 != (a & 192)) {
                d = !0;
                break;
              }
              f = f << 6 | a & 63;
            }
            if (d) {
              for (y = e - (7 - x);y < e;++y) {
                m += String.fromCharCode(c[y] & 255);
              }
            } else {
              m = 65536 <= f ? m + String.fromCharCode(f - 65536 >> 10 & 1023 | 55296, f & 1023 | 56320) : m + String.fromCharCode(f);
            }
          }
        }
      }
      return m;
    };
    d.base64ArrayBuffer = function(m) {
      var f = "";
      m = new Uint8Array(m);
      for (var d = m.byteLength, y = d % 3, d = d - y, x, a, k, H, b = 0;b < d;b += 3) {
        H = m[b] << 16 | m[b + 1] << 8 | m[b + 2], x = (H & 16515072) >> 18, a = (H & 258048) >> 12, k = (H & 4032) >> 6, H &= 63, f += c("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[x], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[a], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[k], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[H]);
      }
      1 == y ? (H = m[d], f += e("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(H & 252) >> 2], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(H & 3) << 4], "==")) : 2 == y && (H = m[d] << 8 | m[d + 1], f += c("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(H & 64512) >> 10], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(H & 1008) >> 4], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(H & 15) << 
      2], "="));
      return f;
    };
    d.escapeString = function(c) {
      void 0 !== c && (c = c.replace(/[^\w$]/gi, "$"), /^\d/.test(c) && (c = "$" + c));
      return c;
    };
    d.fromCharCodeArray = function(c) {
      for (var e = "", m = 0;m < c.length;m += 16384) {
        var f = Math.min(c.length - m, 16384), e = e + String.fromCharCode.apply(null, c.subarray(m, m + f))
      }
      return e;
    };
    d.variableLengthEncodeInt32 = function(c) {
      for (var m = 32 - Math.clz32(c), e = Math.ceil(m / 6), m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[e], e = e - 1;0 <= e;e--) {
        m += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[c >> 6 * e & 63];
      }
      return m;
    };
    d.toEncoding = function(c) {
      return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[c];
    };
    d.fromEncoding = function(c) {
      if (65 <= c && 90 >= c) {
        return c - 65;
      }
      if (97 <= c && 122 >= c) {
        return c - 71;
      }
      if (48 <= c && 57 >= c) {
        return c + 4;
      }
      if (36 === c) {
        return 62;
      }
      if (95 === c) {
        return 63;
      }
    };
    d.variableLengthDecodeInt32 = function(c) {
      for (var e = d.fromEncoding(c.charCodeAt(0)), m = 0, f = 0;f < e;f++) {
        var y = 6 * (e - f - 1), m = m | d.fromEncoding(c.charCodeAt(1 + f)) << y
      }
      return m;
    };
    d.trimMiddle = function(c, m) {
      if (c.length <= m) {
        return c;
      }
      var e = m >> 1, f = m - e - 1;
      return c.substr(0, e) + "\u2026" + c.substr(c.length - f, f);
    };
    d.multiple = function(c, m) {
      for (var e = "", f = 0;f < m;f++) {
        e += c;
      }
      return e;
    };
    d.indexOfAny = function(c, e, m) {
      for (var f = c.length, d = 0;d < e.length;d++) {
        var y = c.indexOf(e[d], m);
        0 <= y && (f = Math.min(f, y));
      }
      return f === c.length ? -1 : f;
    };
    var m = Array(3), y = Array(4), x = Array(5), a = Array(6), k = Array(7), b = Array(8), g = Array(9);
    d.concat3 = e;
    d.concat4 = c;
    d.concat5 = function(c, e, m, f, d) {
      x[0] = c;
      x[1] = e;
      x[2] = m;
      x[3] = f;
      x[4] = d;
      return x.join("");
    };
    d.concat6 = function(c, e, m, f, d, y) {
      a[0] = c;
      a[1] = e;
      a[2] = m;
      a[3] = f;
      a[4] = d;
      a[5] = y;
      return a.join("");
    };
    d.concat7 = function(c, e, m, f, d, y, x) {
      k[0] = c;
      k[1] = e;
      k[2] = m;
      k[3] = f;
      k[4] = d;
      k[5] = y;
      k[6] = x;
      return k.join("");
    };
    d.concat8 = function(c, e, m, f, d, y, x, a) {
      b[0] = c;
      b[1] = e;
      b[2] = m;
      b[3] = f;
      b[4] = d;
      b[5] = y;
      b[6] = x;
      b[7] = a;
      return b.join("");
    };
    d.concat9 = function(c, e, m, f, d, y, x, a, H) {
      g[0] = c;
      g[1] = e;
      g[2] = m;
      g[3] = f;
      g[4] = d;
      g[5] = y;
      g[6] = x;
      g[7] = a;
      g[8] = H;
      return g.join("");
    };
  })(h.StringUtilities || (h.StringUtilities = {}));
  (function(d) {
    var f = new Uint8Array([7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21]), e = new Int32Array([-680876936, -389564586, 606105819, -1044525330, -176418897, 1200080426, -1473231341, -45705983, 1770035416, -1958414417, -42063, -1990404162, 1804603682, -40341101, -1502002290, 1236535329, -165796510, -1069501632, 
    643717713, -373897302, -701558691, 38016083, -660478335, -405537848, 568446438, -1019803690, -187363961, 1163531501, -1444681467, -51403784, 1735328473, -1926607734, -378558, -2022574463, 1839030562, -35309556, -1530992060, 1272893353, -155497632, -1094730640, 681279174, -358537222, -722521979, 76029189, -640364487, -421815835, 530742520, -995338651, -198630844, 1126891415, -1416354905, -57434055, 1700485571, -1894986606, -1051523, -2054922799, 1873313359, -30611744, -1560198380, 1309151649, 
    -145523070, -1120210379, 718787259, -343485551]);
    d.hashBytesTo32BitsMD5 = function(c, m, d) {
      var x = 1732584193, a = -271733879, k = -1732584194, b = 271733878, g = d + 72 & -64, v = new Uint8Array(g), n;
      for (n = 0;n < d;++n) {
        v[n] = c[m++];
      }
      v[n++] = 128;
      for (c = g - 8;n < c;) {
        v[n++] = 0;
      }
      v[n++] = d << 3 & 255;
      v[n++] = d >> 5 & 255;
      v[n++] = d >> 13 & 255;
      v[n++] = d >> 21 & 255;
      v[n++] = d >>> 29 & 255;
      v[n++] = 0;
      v[n++] = 0;
      v[n++] = 0;
      c = new Int32Array(16);
      for (n = 0;n < g;) {
        for (d = 0;16 > d;++d, n += 4) {
          c[d] = v[n] | v[n + 1] << 8 | v[n + 2] << 16 | v[n + 3] << 24;
        }
        var t = x;
        m = a;
        var p = k, l = b, u, h;
        for (d = 0;64 > d;++d) {
          16 > d ? (u = m & p | ~m & l, h = d) : 32 > d ? (u = l & m | ~l & p, h = 5 * d + 1 & 15) : 48 > d ? (u = m ^ p ^ l, h = 3 * d + 5 & 15) : (u = p ^ (m | ~l), h = 7 * d & 15);
          var w = l, t = t + u + e[d] + c[h] | 0;
          u = f[d];
          l = p;
          p = m;
          m = m + (t << u | t >>> 32 - u) | 0;
          t = w;
        }
        x = x + t | 0;
        a = a + m | 0;
        k = k + p | 0;
        b = b + l | 0;
      }
      return x;
    };
    d.hashBytesTo32BitsAdler = function(c, e, f) {
      var d = 1, a = 0;
      for (f = e + f;e < f;++e) {
        d = (d + (c[e] & 255)) % 65521, a = (a + d) % 65521;
      }
      return a << 16 | d;
    };
    d.mixHash = function(c, e) {
      return (31 * c | 0) + e | 0;
    };
  })(h.HashUtilities || (h.HashUtilities = {}));
  var t = function() {
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
      var f = this._state, e = Math.imul(18273, f[0] & 65535) + (f[0] >>> 16) | 0;
      f[0] = e;
      var c = Math.imul(36969, f[1] & 65535) + (f[1] >>> 16) | 0;
      f[1] = c;
      f = (e << 16) + (c & 65535) | 0;
      return 2.3283064365386963E-10 * (0 > f ? f + 4294967296 : f);
    };
    d._state = new Uint32Array([57005, 48879]);
    return d;
  }();
  h.Random = t;
  Math.random = function() {
    return t.next();
  };
  (function() {
    function d() {
      this.id = "$weakmap" + f++;
    }
    if ("function" !== typeof jsGlobal.WeakMap) {
      var f = 0;
      d.prototype = {has:function(e) {
        return e.hasOwnProperty(this.id);
      }, get:function(e, c) {
        return e.hasOwnProperty(this.id) ? e[this.id] : c;
      }, set:function(e, c) {
        Object.defineProperty(e, this.id, {value:c, enumerable:!1, configurable:!0});
      }, delete:function(e) {
        delete e[this.id];
      }};
      jsGlobal.WeakMap = d;
    }
  })();
  a = function() {
    function d() {
      "undefined" !== typeof ShumwayCom && ShumwayCom.getWeakMapKeys ? (this._map = new WeakMap, this._newAdditions = []) : this._list = [];
    }
    d.prototype.clear = function() {
      this._map ? this._map.clear() : this._list.length = 0;
    };
    d.prototype.push = function(f) {
      this._map ? (this._map.set(f, null), this._newAdditions.forEach(function(e) {
        e.push(f);
      })) : this._list.push(f);
    };
    d.prototype.remove = function(f) {
      this._map ? this._map.delete(f) : this._list[this._list.indexOf(f)] = null;
    };
    d.prototype.forEach = function(f) {
      if (this._map) {
        var e = [];
        this._newAdditions.push(e);
        ShumwayCom.getWeakMapKeys(this._map).forEach(function(c) {
          0 !== c._referenceCount && f(c);
        });
        e.forEach(function(c) {
          0 !== c._referenceCount && f(c);
        });
        this._newAdditions.splice(this._newAdditions.indexOf(e), 1);
      } else {
        for (var e = this._list, c = 0, m = 0;m < e.length;m++) {
          var d = e[m];
          d && (0 === d._referenceCount ? (e[m] = null, c++) : f(d));
        }
        if (16 < c && c > e.length >> 2) {
          c = [];
          for (m = 0;m < e.length;m++) {
            (d = e[m]) && 0 < d._referenceCount && c.push(d);
          }
          this._list = c;
        }
      }
    };
    Object.defineProperty(d.prototype, "length", {get:function() {
      return this._map ? -1 : this._list.length;
    }, enumerable:!0, configurable:!0});
    return d;
  }();
  h.WeakList = a;
  var g;
  (function(d) {
    d.pow2 = function(f) {
      return f === (f | 0) ? 0 > f ? 1 / (1 << -f) : 1 << f : Math.pow(2, f);
    };
    d.clamp = function(f, e, c) {
      return Math.max(e, Math.min(c, f));
    };
    d.roundHalfEven = function(f) {
      if (.5 === Math.abs(f % 1)) {
        var e = Math.floor(f);
        return 0 === e % 2 ? e : Math.ceil(f);
      }
      return Math.round(f);
    };
    d.altTieBreakRound = function(f, e) {
      return .5 !== Math.abs(f % 1) || e ? Math.round(f) : f | 0;
    };
    d.epsilonEquals = function(f, e) {
      return 1E-7 > Math.abs(f - e);
    };
  })(g = h.NumberUtilities || (h.NumberUtilities = {}));
  (function(d) {
    d[d.MaxU16 = 65535] = "MaxU16";
    d[d.MaxI16 = 32767] = "MaxI16";
    d[d.MinI16 = -32768] = "MinI16";
  })(h.Numbers || (h.Numbers = {}));
  var p;
  (function(d) {
    function f(c) {
      return 256 * c << 16 >> 16;
    }
    var e = new ArrayBuffer(8);
    d.i8 = new Int8Array(e);
    d.u8 = new Uint8Array(e);
    d.i32 = new Int32Array(e);
    d.f32 = new Float32Array(e);
    d.f64 = new Float64Array(e);
    d.nativeLittleEndian = 1 === (new Int8Array((new Int32Array([1])).buffer))[0];
    d.floatToInt32 = function(c) {
      d.f32[0] = c;
      return d.i32[0];
    };
    d.int32ToFloat = function(c) {
      d.i32[0] = c;
      return d.f32[0];
    };
    d.swap16 = function(c) {
      return (c & 255) << 8 | c >> 8 & 255;
    };
    d.swap32 = function(c) {
      return (c & 255) << 24 | (c & 65280) << 8 | c >> 8 & 65280 | c >> 24 & 255;
    };
    d.toS8U8 = f;
    d.fromS8U8 = function(c) {
      return c / 256;
    };
    d.clampS8U8 = function(c) {
      return f(c) / 256;
    };
    d.toS16 = function(c) {
      return c << 16 >> 16;
    };
    d.bitCount = function(c) {
      c -= c >> 1 & 1431655765;
      c = (c & 858993459) + (c >> 2 & 858993459);
      return 16843009 * (c + (c >> 4) & 252645135) >> 24;
    };
    d.ones = function(c) {
      c -= c >> 1 & 1431655765;
      c = (c & 858993459) + (c >> 2 & 858993459);
      return 16843009 * (c + (c >> 4) & 252645135) >> 24;
    };
    d.trailingZeros = function(c) {
      return d.ones((c & -c) - 1);
    };
    d.getFlags = function(c, e) {
      var f = "";
      for (c = 0;c < e.length;c++) {
        c & 1 << c && (f += e[c] + " ");
      }
      return 0 === f.length ? "" : f.trim();
    };
    d.isPowerOfTwo = function(c) {
      return c && 0 === (c & c - 1);
    };
    d.roundToMultipleOfFour = function(c) {
      return c + 3 & -4;
    };
    d.nearestPowerOfTwo = function(c) {
      c--;
      c |= c >> 1;
      c |= c >> 2;
      c |= c >> 4;
      c |= c >> 8;
      c |= c >> 16;
      c++;
      return c;
    };
    d.roundToMultipleOfPowerOfTwo = function(c, e) {
      var f = (1 << e) - 1;
      return c + f & ~f;
    };
    d.toHEX = function(c) {
      return "0x" + ("00000000" + (0 > c ? 4294967295 + c + 1 : c).toString(16)).substr(-8);
    };
    Math.imul || (Math.imul = function(c, e) {
      var f = c & 65535, d = e & 65535;
      return f * d + ((c >>> 16 & 65535) * d + f * (e >>> 16 & 65535) << 16 >>> 0) | 0;
    });
    Math.clz32 || (Math.clz32 = function(c) {
      c |= c >> 1;
      c |= c >> 2;
      c |= c >> 4;
      c |= c >> 8;
      return 32 - d.ones(c | c >> 16);
    });
  })(p = h.IntegerUtilities || (h.IntegerUtilities = {}));
  (function(d) {
    function f(e, c, m, f, d, a) {
      return (m - e) * (a - c) - (f - c) * (d - e);
    }
    d.pointInPolygon = function(e, c, m) {
      for (var f = 0, d = m.length - 2, a = 0;a < d;a += 2) {
        var k = m[a + 0], b = m[a + 1], g = m[a + 2], v = m[a + 3];
        (b <= c && v > c || b > c && v <= c) && e < k + (c - b) / (v - b) * (g - k) && f++;
      }
      return 1 === (f & 1);
    };
    d.signedArea = f;
    d.counterClockwise = function(e, c, m, d, x, a) {
      return 0 < f(e, c, m, d, x, a);
    };
    d.clockwise = function(e, c, m, d, x, a) {
      return 0 > f(e, c, m, d, x, a);
    };
    d.pointInPolygonInt32 = function(e, c, m) {
      e |= 0;
      c |= 0;
      for (var f = 0, d = m.length - 2, a = 0;a < d;a += 2) {
        var k = m[a + 0], b = m[a + 1], g = m[a + 2], v = m[a + 3];
        (b <= c && v > c || b > c && v <= c) && e < k + (c - b) / (v - b) * (g - k) && f++;
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
  a = function() {
    function d(f, e) {
      void 0 === f && (f = !1);
      this._tab = "  ";
      this._padding = "";
      this._suppressOutput = f;
      this._out = e || d._consoleOut;
      this._outNoNewline = e || d._consoleOutNoNewline;
    }
    Object.defineProperty(d.prototype, "suppressOutput", {get:function() {
      return this._suppressOutput;
    }, set:function(f) {
      this._suppressOutput = f;
    }, enumerable:!0, configurable:!0});
    d.prototype.write = function(f, e) {
      void 0 === f && (f = "");
      void 0 === e && (e = !1);
      this._suppressOutput || this._outNoNewline((e ? this._padding : "") + f);
    };
    d.prototype.writeLn = function(f) {
      void 0 === f && (f = "");
      this._suppressOutput || this._out(this._padding + f);
    };
    d.prototype.writeObject = function(f, e) {
      void 0 === f && (f = "");
      this._suppressOutput || this._out(this._padding + f, e);
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
        for (var e = 0;e < f.length;e++) {
          this.writeLn(" * " + f[e]);
        }
        this.writeLn(" */");
      }
    };
    d.prototype.writeLns = function(f) {
      f = (f || "").split("\n");
      for (var e = 0;e < f.length;e++) {
        this.writeLn(f[e]);
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
    d.prototype.colorLn = function(f, e) {
      this._suppressOutput || (inBrowser ? this._out(this._padding + e) : this._out(this._padding + f + e + d.ENDC));
    };
    d.prototype.redLns = function(f) {
      this.colorLns(d.RED, f);
    };
    d.prototype.colorLns = function(f, e) {
      for (var c = (e || "").split("\n"), m = 0;m < c.length;m++) {
        this.colorLn(f, c[m]);
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
    d.prototype.writeArray = function(f, e, c) {
      void 0 === e && (e = !1);
      void 0 === c && (c = !1);
      e = e || !1;
      for (var m = 0, d = f.length;m < d;m++) {
        var x = "";
        e && (x = null === f[m] ? "null" : void 0 === f[m] ? "undefined" : f[m].constructor.name, x += " ");
        var a = c ? "" : ("" + m).padRight(" ", 4);
        this.writeLn(a + x + f[m]);
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
  h.IndentingWriter = a;
  var u = function() {
    return function(d, f) {
      this.value = d;
      this.next = f;
    };
  }(), a = function() {
    function d(f) {
      this._compare = f;
      this._head = null;
      this._length = 0;
    }
    d.prototype.push = function(f) {
      this._length++;
      if (this._head) {
        var e = this._head, c = null;
        f = new u(f, null);
        for (var m = this._compare;e;) {
          if (0 < m(e.value, f.value)) {
            c ? (f.next = e, c.next = f) : (f.next = this._head, this._head = f);
            return;
          }
          c = e;
          e = e.next;
        }
        c.next = f;
      } else {
        this._head = new u(f, null);
      }
    };
    d.prototype.forEach = function(f) {
      for (var e = this._head, c = null;e;) {
        var m = f(e.value);
        if (m === d.RETURN) {
          break;
        } else {
          m === d.DELETE ? e = c ? c.next = e.next : this._head = this._head.next : (c = e, e = e.next);
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
      for (var e = this._head;e;) {
        if (e.value === f) {
          return !0;
        }
        e = e.next;
      }
      return !1;
    };
    d.prototype.toString = function() {
      for (var f = "[", e = this._head;e;) {
        f += e.value.toString(), (e = e.next) && (f += ",");
      }
      return f + "]";
    };
    d.RETURN = 1;
    d.DELETE = 2;
    return d;
  }();
  h.SortedList = a;
  a = function() {
    function d(f, e) {
      void 0 === e && (e = 12);
      this.start = this.index = 0;
      this._size = 1 << e;
      this._mask = this._size - 1;
      this.array = new f(this._size);
    }
    d.prototype.get = function(f) {
      return this.array[f];
    };
    d.prototype.forEachInReverse = function(f) {
      if (!this.isEmpty()) {
        for (var e = 0 === this.index ? this._size - 1 : this.index - 1, c = this.start - 1 & this._mask;e !== c && !f(this.array[e], e);) {
          e = 0 === e ? this._size - 1 : e - 1;
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
  h.CircularBuffer = a;
  (function(d) {
    function f(c) {
      return c + (d.BITS_PER_WORD - 1) >> d.ADDRESS_BITS_PER_WORD << d.ADDRESS_BITS_PER_WORD;
    }
    function e(c, e) {
      c = c || "1";
      e = e || "0";
      for (var m = "", f = 0;f < length;f++) {
        m += this.get(f) ? c : e;
      }
      return m;
    }
    function c(c) {
      for (var e = [], m = 0;m < length;m++) {
        this.get(m) && e.push(c ? c[m] : m);
      }
      return e.join(", ");
    }
    d.ADDRESS_BITS_PER_WORD = 5;
    d.BITS_PER_WORD = 1 << d.ADDRESS_BITS_PER_WORD;
    d.BIT_INDEX_MASK = d.BITS_PER_WORD - 1;
    var m = function() {
      function c(e) {
        this.size = f(e);
        this.dirty = this.count = 0;
        this.length = e;
        this.bits = new Uint32Array(this.size >> d.ADDRESS_BITS_PER_WORD);
      }
      c.prototype.recount = function() {
        if (this.dirty) {
          for (var c = this.bits, e = 0, m = 0, f = c.length;m < f;m++) {
            var d = c[m], d = d - (d >> 1 & 1431655765), d = (d & 858993459) + (d >> 2 & 858993459), e = e + (16843009 * (d + (d >> 4) & 252645135) >> 24)
          }
          this.count = e;
          this.dirty = 0;
        }
      };
      c.prototype.set = function(c) {
        var e = c >> d.ADDRESS_BITS_PER_WORD, m = this.bits[e];
        c = m | 1 << (c & d.BIT_INDEX_MASK);
        this.bits[e] = c;
        this.dirty |= m ^ c;
      };
      c.prototype.setAll = function() {
        for (var c = this.bits, e = 0, m = c.length;e < m;e++) {
          c[e] = 4294967295;
        }
        this.count = this.size;
        this.dirty = 0;
      };
      c.prototype.assign = function(c) {
        this.count = c.count;
        this.dirty = c.dirty;
        this.size = c.size;
        for (var e = 0, m = this.bits.length;e < m;e++) {
          this.bits[e] = c.bits[e];
        }
      };
      c.prototype.clear = function(c) {
        var e = c >> d.ADDRESS_BITS_PER_WORD, m = this.bits[e];
        c = m & ~(1 << (c & d.BIT_INDEX_MASK));
        this.bits[e] = c;
        this.dirty |= m ^ c;
      };
      c.prototype.get = function(c) {
        return 0 !== (this.bits[c >> d.ADDRESS_BITS_PER_WORD] & 1 << (c & d.BIT_INDEX_MASK));
      };
      c.prototype.clearAll = function() {
        for (var c = this.bits, e = 0, m = c.length;e < m;e++) {
          c[e] = 0;
        }
        this.dirty = this.count = 0;
      };
      c.prototype._union = function(c) {
        var e = this.dirty, m = this.bits;
        c = c.bits;
        for (var f = 0, d = m.length;f < d;f++) {
          var y = m[f], x = y | c[f];
          m[f] = x;
          e |= y ^ x;
        }
        this.dirty = e;
      };
      c.prototype.intersect = function(c) {
        var e = this.dirty, m = this.bits;
        c = c.bits;
        for (var f = 0, d = m.length;f < d;f++) {
          var y = m[f], x = y & c[f];
          m[f] = x;
          e |= y ^ x;
        }
        this.dirty = e;
      };
      c.prototype.subtract = function(c) {
        var e = this.dirty, m = this.bits;
        c = c.bits;
        for (var f = 0, d = m.length;f < d;f++) {
          var y = m[f], x = y & ~c[f];
          m[f] = x;
          e |= y ^ x;
        }
        this.dirty = e;
      };
      c.prototype.negate = function() {
        for (var c = this.dirty, e = this.bits, m = 0, f = e.length;m < f;m++) {
          var d = e[m], y = ~d;
          e[m] = y;
          c |= d ^ y;
        }
        this.dirty = c;
      };
      c.prototype.forEach = function(c) {
        for (var e = this.bits, m = 0, f = e.length;m < f;m++) {
          var y = e[m];
          if (y) {
            for (var x = 0;x < d.BITS_PER_WORD;x++) {
              y & 1 << x && c(m * d.BITS_PER_WORD + x);
            }
          }
        }
      };
      c.prototype.toArray = function() {
        for (var c = [], e = this.bits, m = 0, f = e.length;m < f;m++) {
          var y = e[m];
          if (y) {
            for (var x = 0;x < d.BITS_PER_WORD;x++) {
              y & 1 << x && c.push(m * d.BITS_PER_WORD + x);
            }
          }
        }
        return c;
      };
      c.prototype.equals = function(c) {
        if (this.size !== c.size) {
          return !1;
        }
        var e = this.bits;
        c = c.bits;
        for (var m = 0, f = e.length;m < f;m++) {
          if (e[m] !== c[m]) {
            return !1;
          }
        }
        return !0;
      };
      c.prototype.contains = function(c) {
        if (this.size !== c.size) {
          return !1;
        }
        var e = this.bits;
        c = c.bits;
        for (var m = 0, f = e.length;m < f;m++) {
          if ((e[m] | c[m]) !== e[m]) {
            return !1;
          }
        }
        return !0;
      };
      c.prototype.isEmpty = function() {
        this.recount();
        return 0 === this.count;
      };
      c.prototype.clone = function() {
        var e = new c(this.length);
        e._union(this);
        return e;
      };
      return c;
    }();
    d.Uint32ArrayBitSet = m;
    var y = function() {
      function c(e) {
        this.dirty = this.count = 0;
        this.size = f(e);
        this.bits = 0;
        this.singleWord = !0;
        this.length = e;
      }
      c.prototype.recount = function() {
        if (this.dirty) {
          var c = this.bits, c = c - (c >> 1 & 1431655765), c = (c & 858993459) + (c >> 2 & 858993459);
          this.count = 0 + (16843009 * (c + (c >> 4) & 252645135) >> 24);
          this.dirty = 0;
        }
      };
      c.prototype.set = function(c) {
        var e = this.bits;
        this.bits = c = e | 1 << (c & d.BIT_INDEX_MASK);
        this.dirty |= e ^ c;
      };
      c.prototype.setAll = function() {
        this.bits = 4294967295;
        this.count = this.size;
        this.dirty = 0;
      };
      c.prototype.assign = function(c) {
        this.count = c.count;
        this.dirty = c.dirty;
        this.size = c.size;
        this.bits = c.bits;
      };
      c.prototype.clear = function(c) {
        var e = this.bits;
        this.bits = c = e & ~(1 << (c & d.BIT_INDEX_MASK));
        this.dirty |= e ^ c;
      };
      c.prototype.get = function(c) {
        return 0 !== (this.bits & 1 << (c & d.BIT_INDEX_MASK));
      };
      c.prototype.clearAll = function() {
        this.dirty = this.count = this.bits = 0;
      };
      c.prototype._union = function(c) {
        var e = this.bits;
        this.bits = c = e | c.bits;
        this.dirty = e ^ c;
      };
      c.prototype.intersect = function(c) {
        var e = this.bits;
        this.bits = c = e & c.bits;
        this.dirty = e ^ c;
      };
      c.prototype.subtract = function(c) {
        var e = this.bits;
        this.bits = c = e & ~c.bits;
        this.dirty = e ^ c;
      };
      c.prototype.negate = function() {
        var c = this.bits, e = ~c;
        this.bits = e;
        this.dirty = c ^ e;
      };
      c.prototype.forEach = function(c) {
        var e = this.bits;
        if (e) {
          for (var m = 0;m < d.BITS_PER_WORD;m++) {
            e & 1 << m && c(m);
          }
        }
      };
      c.prototype.toArray = function() {
        var c = [], e = this.bits;
        if (e) {
          for (var m = 0;m < d.BITS_PER_WORD;m++) {
            e & 1 << m && c.push(m);
          }
        }
        return c;
      };
      c.prototype.equals = function(c) {
        return this.bits === c.bits;
      };
      c.prototype.contains = function(c) {
        var e = this.bits;
        return (e | c.bits) === e;
      };
      c.prototype.isEmpty = function() {
        this.recount();
        return 0 === this.count;
      };
      c.prototype.clone = function() {
        var e = new c(this.length);
        e._union(this);
        return e;
      };
      return c;
    }();
    d.Uint32BitSet = y;
    y.prototype.toString = c;
    y.prototype.toBitString = e;
    m.prototype.toString = c;
    m.prototype.toBitString = e;
    d.BitSetFunctor = function(c) {
      var e = 1 === f(c) >> d.ADDRESS_BITS_PER_WORD ? y : m;
      return function() {
        return new e(c);
      };
    };
  })(h.BitSets || (h.BitSets = {}));
  a = function() {
    function d() {
    }
    d.randomStyle = function() {
      d._randomStyleCache || (d._randomStyleCache = "#ff5e3a #ff9500 #ffdb4c #87fc70 #52edc7 #1ad6fd #c644fc #ef4db6 #4a4a4a #dbddde #ff3b30 #ff9500 #ffcc00 #4cd964 #34aadc #007aff #5856d6 #ff2d55 #8e8e93 #c7c7cc #5ad427 #c86edf #d1eefc #e0f8d8 #fb2b69 #f7f7f7 #1d77ef #d6cec3 #55efcb #ff4981 #ffd3e0 #f7f7f7 #ff1300 #1f1f21 #bdbec2 #ff3a2d".split(" "));
      return d._randomStyleCache[d._nextStyle++ % d._randomStyleCache.length];
    };
    d.gradientColor = function(f) {
      return d._gradient[d._gradient.length * g.clamp(f, 0, 1) | 0];
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
  h.ColorStyle = a;
  a = function() {
    function d(f, e, c, m) {
      this.xMin = f | 0;
      this.yMin = e | 0;
      this.xMax = c | 0;
      this.yMax = m | 0;
    }
    d.FromUntyped = function(f) {
      return new d(f.xMin, f.yMin, f.xMax, f.yMax);
    };
    d.FromRectangle = function(f) {
      return new d(20 * f.x | 0, 20 * f.y | 0, 20 * (f.x + f.width) | 0, 20 * (f.y + f.height) | 0);
    };
    d.prototype.setElements = function(f, e, c, m) {
      this.xMin = f;
      this.yMin = e;
      this.xMax = c;
      this.yMax = m;
    };
    d.prototype.copyFrom = function(f) {
      this.setElements(f.xMin, f.yMin, f.xMax, f.yMax);
    };
    d.prototype.contains = function(f, e) {
      return f < this.xMin !== f < this.xMax && e < this.yMin !== e < this.yMax;
    };
    d.prototype.unionInPlace = function(f) {
      f.isEmpty() || (this.extendByPoint(f.xMin, f.yMin), this.extendByPoint(f.xMax, f.yMax));
    };
    d.prototype.extendByPoint = function(f, e) {
      this.extendByX(f);
      this.extendByY(e);
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
      return Math.abs(Math.cos(f)) * (this.xMax - this.xMin) + Math.abs(Math.sin(f)) * (this.yMax - this.yMin);
    };
    d.prototype.getBaseHeight = function(f) {
      return Math.abs(Math.sin(f)) * (this.xMax - this.xMin) + Math.abs(Math.cos(f)) * (this.yMax - this.yMin);
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
  h.Bounds = a;
  a = function() {
    function d(f, e, c, m) {
      l.assert(q(f));
      l.assert(q(e));
      l.assert(q(c));
      l.assert(q(m));
      this._xMin = f | 0;
      this._yMin = e | 0;
      this._xMax = c | 0;
      this._yMax = m | 0;
    }
    d.FromUntyped = function(f) {
      return new d(f.xMin, f.yMin, f.xMax, f.yMax);
    };
    d.FromRectangle = function(f) {
      return new d(20 * f.x | 0, 20 * f.y | 0, 20 * (f.x + f.width) | 0, 20 * (f.y + f.height) | 0);
    };
    d.prototype.setElements = function(f, e, c, m) {
      this.xMin = f;
      this.yMin = e;
      this.xMax = c;
      this.yMax = m;
    };
    d.prototype.copyFrom = function(f) {
      this.setElements(f.xMin, f.yMin, f.xMax, f.yMax);
    };
    d.prototype.contains = function(f, e) {
      return f < this.xMin !== f < this.xMax && e < this.yMin !== e < this.yMax;
    };
    d.prototype.unionInPlace = function(f) {
      f.isEmpty() || (this.extendByPoint(f.xMin, f.yMin), this.extendByPoint(f.xMax, f.yMax));
    };
    d.prototype.extendByPoint = function(f, e) {
      this.extendByX(f);
      this.extendByY(e);
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
      l.assert(q(f));
      this._xMin = f;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "yMin", {get:function() {
      return this._yMin;
    }, set:function(f) {
      l.assert(q(f));
      this._yMin = f | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "xMax", {get:function() {
      return this._xMax;
    }, set:function(f) {
      l.assert(q(f));
      this._xMax = f | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "width", {get:function() {
      return this._xMax - this._xMin;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "yMax", {get:function() {
      return this._yMax;
    }, set:function(f) {
      l.assert(q(f));
      this._yMax = f | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "height", {get:function() {
      return this._yMax - this._yMin;
    }, enumerable:!0, configurable:!0});
    d.prototype.getBaseWidth = function(f) {
      return Math.abs(Math.cos(f)) * (this._xMax - this._xMin) + Math.abs(Math.sin(f)) * (this._yMax - this._yMin);
    };
    d.prototype.getBaseHeight = function(f) {
      return Math.abs(Math.sin(f)) * (this._xMax - this._xMin) + Math.abs(Math.cos(f)) * (this._yMax - this._yMin);
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
  h.DebugBounds = a;
  a = function() {
    function d(f, e, c, m) {
      this.r = f;
      this.g = e;
      this.b = c;
      this.a = m;
    }
    d.FromARGB = function(f) {
      return new d((f >> 16 & 255) / 255, (f >> 8 & 255) / 255, (f >> 0 & 255) / 255, (f >> 24 & 255) / 255);
    };
    d.FromRGBA = function(f) {
      return d.FromARGB(n.RGBAToARGB(f));
    };
    d.prototype.toRGBA = function() {
      return 255 * this.r << 24 | 255 * this.g << 16 | 255 * this.b << 8 | 255 * this.a;
    };
    d.prototype.toCSSStyle = function() {
      return n.rgbaToCSSStyle(this.toRGBA());
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
      var e = document.createElement("span");
      document.body.appendChild(e);
      e.style.backgroundColor = f;
      var c = getComputedStyle(e).backgroundColor;
      document.body.removeChild(e);
      (e = /^rgb\((\d+), (\d+), (\d+)\)$/.exec(c)) || (e = /^rgba\((\d+), (\d+), (\d+), ([\d.]+)\)$/.exec(c));
      c = new d(0, 0, 0, 0);
      c.r = parseFloat(e[1]) / 255;
      c.g = parseFloat(e[2]) / 255;
      c.b = parseFloat(e[3]) / 255;
      c.a = e[4] ? parseFloat(e[4]) / 255 : 1;
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
  h.Color = a;
  var n;
  (function(d) {
    function f(c) {
      var e, m, f = c >> 24 & 255;
      m = (Math.imul(c >> 16 & 255, f) + 127) / 255 | 0;
      e = (Math.imul(c >> 8 & 255, f) + 127) / 255 | 0;
      c = (Math.imul(c >> 0 & 255, f) + 127) / 255 | 0;
      return f << 24 | m << 16 | e << 8 | c;
    }
    function e() {
      if (!c) {
        c = new Uint8Array(65536);
        for (var e = 0;256 > e;e++) {
          for (var m = 0;256 > m;m++) {
            c[(m << 8) + e] = Math.imul(255, e) / m;
          }
        }
      }
    }
    d.RGBAToARGB = function(c) {
      return c >> 8 & 16777215 | (c & 255) << 24;
    };
    d.ARGBToRGBA = function(c) {
      return c << 8 | c >> 24 & 255;
    };
    d.rgbaToCSSStyle = function(c) {
      return h.StringUtilities.concat9("rgba(", c >> 24 & 255, ",", c >> 16 & 255, ",", c >> 8 & 255, ",", (c & 255) / 255, ")");
    };
    d.cssStyleToRGBA = function(c) {
      if ("#" === c[0]) {
        if (7 === c.length) {
          return parseInt(c.substring(1), 16) << 8 | 255;
        }
      } else {
        if ("r" === c[0]) {
          return c = c.substring(5, c.length - 1).split(","), (parseInt(c[0]) & 255) << 24 | (parseInt(c[1]) & 255) << 16 | (parseInt(c[2]) & 255) << 8 | 255 * parseFloat(c[3]) & 255;
        }
      }
      return 4278190335;
    };
    d.hexToRGB = function(c) {
      return parseInt(c.slice(1), 16);
    };
    d.rgbToHex = function(c) {
      return "#" + ("000000" + (c >>> 0).toString(16)).slice(-6);
    };
    d.isValidHexColor = function(c) {
      return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(c);
    };
    d.clampByte = function(c) {
      return Math.max(0, Math.min(255, c));
    };
    d.unpremultiplyARGB = function(c) {
      var e, m, f = c >> 24 & 255;
      m = Math.imul(255, c >> 16 & 255) / f & 255;
      e = Math.imul(255, c >> 8 & 255) / f & 255;
      c = Math.imul(255, c >> 0 & 255) / f & 255;
      return f << 24 | m << 16 | e << 8 | c;
    };
    d.premultiplyARGB = f;
    var c;
    d.ensureUnpremultiplyTable = e;
    d.getUnpremultiplyTable = function() {
      e();
      return c;
    };
    d.tableLookupUnpremultiplyARGB = function(e) {
      e |= 0;
      var m = e >> 24 & 255;
      if (0 === m) {
        return 0;
      }
      if (255 === m) {
        return e;
      }
      var f, d, a = m << 8, k = c;
      d = k[a + (e >> 16 & 255)];
      f = k[a + (e >> 8 & 255)];
      e = k[a + (e >> 0 & 255)];
      return m << 24 | d << 16 | f << 8 | e;
    };
    d.blendPremultipliedBGRA = function(c, e) {
      var m, f;
      f = 256 - (e & 255);
      m = Math.imul(c & 16711935, f) >> 8;
      f = Math.imul(c >> 8 & 16711935, f) >> 8;
      return ((e >> 8 & 16711935) + f & 16711935) << 8 | (e & 16711935) + m & 16711935;
    };
    var m = p.swap32;
    d.convertImage = function(e, d, a, k) {
      var b = a.length;
      if (e === d) {
        if (a !== k) {
          for (e = 0;e < b;e++) {
            k[e] = a[e];
          }
        }
      } else {
        if (1 === e && 3 === d) {
          for (h.ColorUtilities.ensureUnpremultiplyTable(), e = 0;e < b;e++) {
            var g = a[e];
            d = g & 255;
            if (0 === d) {
              k[e] = 0;
            } else {
              if (255 === d) {
                k[e] = 4278190080 | g >> 8 & 16777215;
              } else {
                var n = g >> 24 & 255, t = g >> 16 & 255, g = g >> 8 & 255, p = d << 8, u = c, g = u[p + g], t = u[p + t], n = u[p + n];
                k[e] = d << 24 | n << 16 | t << 8 | g;
              }
            }
          }
        } else {
          if (2 === e && 3 === d) {
            for (e = 0;e < b;e++) {
              k[e] = m(a[e]);
            }
          } else {
            if (3 === e && 1 === d) {
              for (e = 0;e < b;e++) {
                d = a[e], k[e] = m(f(d & 4278255360 | d >> 16 & 255 | (d & 255) << 16));
              }
            } else {
              for (l.somewhatImplemented("Image Format Conversion: " + v[e] + " -> " + v[d]), e = 0;e < b;e++) {
                k[e] = a[e];
              }
            }
          }
        }
      }
    };
  })(n = h.ColorUtilities || (h.ColorUtilities = {}));
  a = function() {
    function d(f) {
      void 0 === f && (f = 32);
      this._list = [];
      this._maxSize = f;
    }
    d.prototype.acquire = function(f) {
      if (d._enabled) {
        for (var e = this._list, c = 0;c < e.length;c++) {
          var m = e[c];
          if (m.byteLength >= f) {
            return e.splice(c, 1), m;
          }
        }
      }
      return new ArrayBuffer(f);
    };
    d.prototype.release = function(f) {
      if (d._enabled) {
        var e = this._list;
        e.length === this._maxSize && e.shift();
        e.push(f);
      }
    };
    d.prototype.ensureUint8ArrayLength = function(f, e) {
      if (f.length >= e) {
        return f;
      }
      var c = Math.max(f.length + e, (3 * f.length >> 1) + 1), c = new Uint8Array(this.acquire(c), 0, c);
      c.set(f);
      this.release(f.buffer);
      return c;
    };
    d.prototype.ensureFloat64ArrayLength = function(f, e) {
      if (f.length >= e) {
        return f;
      }
      var c = Math.max(f.length + e, (3 * f.length >> 1) + 1), c = new Float64Array(this.acquire(c * Float64Array.BYTES_PER_ELEMENT), 0, c);
      c.set(f);
      this.release(f.buffer);
      return c;
    };
    d._enabled = !0;
    return d;
  }();
  h.ArrayBufferPool = a;
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
  h.registerCSSFont = function(d, f, e) {
    if (inBrowser) {
      var c = document.head;
      c.insertBefore(document.createElement("style"), c.firstChild);
      c = document.styleSheets[0];
      f = "@font-face{font-family:swffont" + d + ";src:url(data:font/opentype;base64," + h.StringUtilities.base64ArrayBuffer(f.buffer) + ")}";
      c.insertRule(f, c.cssRules.length);
      e && (e = document.createElement("div"), e.style.fontFamily = "swffont" + d, e.innerHTML = "hello", document.body.appendChild(e), document.body.removeChild(e));
    } else {
      l.warning("Cannot register CSS font outside the browser");
    }
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
  a = function() {
    function d() {
      this._queues = {};
    }
    d.prototype.register = function(f, e) {
      l.assert(f);
      l.assert(e);
      var c = this._queues[f];
      if (c) {
        if (-1 < c.indexOf(e)) {
          return;
        }
      } else {
        c = this._queues[f] = [];
      }
      c.push(e);
    };
    d.prototype.unregister = function(f, e) {
      l.assert(f);
      l.assert(e);
      var c = this._queues[f];
      if (c) {
        var m = c.indexOf(e);
        -1 !== m && c.splice(m, 1);
        0 === c.length && (this._queues[f] = null);
      }
    };
    d.prototype.notify = function(f, e) {
      var c = this._queues[f];
      if (c) {
        c = c.slice();
        e = Array.prototype.slice.call(arguments, 0);
        for (var m = 0;m < c.length;m++) {
          c[m].apply(null, e);
        }
      }
    };
    d.prototype.notify1 = function(f, e) {
      var c = this._queues[f];
      if (c) {
        for (var c = c.slice(), m = 0;m < c.length;m++) {
          (0,c[m])(f, e);
        }
      }
    };
    return d;
  }();
  h.Callback = a;
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
  a = function() {
    function d() {
      this.promise = new Promise(function(f, e) {
        this.resolve = f;
        this.reject = e;
      }.bind(this));
    }
    d.prototype.then = function(f, e) {
      return this.promise.then(f, e);
    };
    return d;
  }();
  h.PromiseWrapper = a;
})(Shumway || (Shumway = {}));
(function() {
  function h(c) {
    if ("function" !== typeof c) {
      throw new TypeError("Invalid deferred constructor");
    }
    var e = u();
    c = new c(e);
    var f = e.resolve;
    if ("function" !== typeof f) {
      throw new TypeError("Invalid resolve construction function");
    }
    e = e.reject;
    if ("function" !== typeof e) {
      throw new TypeError("Invalid reject construction function");
    }
    return {promise:c, resolve:f, reject:e};
  }
  function q(c, e) {
    if ("object" !== typeof c || null === c) {
      return !1;
    }
    try {
      var f = c.then;
      if ("function" !== typeof f) {
        return !1;
      }
      f.call(c, e.resolve, e.reject);
    } catch (d) {
      f = e.reject, f(d);
    }
    return !0;
  }
  function r(c) {
    return "object" === typeof c && null !== c && "undefined" !== typeof c.promiseStatus;
  }
  function b(c, e) {
    if ("unresolved" === c.promiseStatus) {
      var f = c.rejectReactions;
      c.result = e;
      c.resolveReactions = void 0;
      c.rejectReactions = void 0;
      c.promiseStatus = "has-rejection";
      w(f, e);
    }
  }
  function w(c, e) {
    for (var f = 0;f < c.length;f++) {
      l({reaction:c[f], argument:e});
    }
  }
  function l(c) {
    0 === e.length && setTimeout(a, 0);
    e.push(c);
  }
  function a() {
    for (;0 < e.length;) {
      var c = e[0];
      try {
        a: {
          var m = c.reaction, f = m.deferred, a = m.handler, k = void 0, b = void 0;
          try {
            k = a(c.argument);
          } catch (g) {
            var v = f.reject;
            v(g);
            break a;
          }
          if (k === f.promise) {
            v = f.reject, v(new TypeError("Self resolution"));
          } else {
            try {
              if (b = q(k, f), !b) {
                var n = f.resolve;
                n(k);
              }
            } catch (t) {
              v = f.reject, v(t);
            }
          }
        }
      } catch (p) {
        if ("function" === typeof d.onerror) {
          d.onerror(p);
        }
      }
      e.shift();
    }
  }
  function k(c) {
    throw c;
  }
  function t(c) {
    return c;
  }
  function g(c) {
    return function(e) {
      b(c, e);
    };
  }
  function p(c) {
    return function(e) {
      if ("unresolved" === c.promiseStatus) {
        var f = c.resolveReactions;
        c.result = e;
        c.resolveReactions = void 0;
        c.rejectReactions = void 0;
        c.promiseStatus = "has-resolution";
        w(f, e);
      }
    };
  }
  function u() {
    function c(e, f) {
      c.resolve = e;
      c.reject = f;
    }
    return c;
  }
  function n(c, e, f) {
    return function(d) {
      if (d === c) {
        return f(new TypeError("Self resolution"));
      }
      var a = c.promiseConstructor;
      if (r(d) && d.promiseConstructor === a) {
        return d.then(e, f);
      }
      a = h(a);
      return q(d, a) ? a.promise.then(e, f) : e(d);
    };
  }
  function v(c, e, f, d) {
    return function(a) {
      e[c] = a;
      d.countdown--;
      0 === d.countdown && f.resolve(e);
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
    var e = p(this), f = g(this);
    try {
      c(e, f);
    } catch (a) {
      b(this, a);
    }
    this.promiseConstructor = d;
    return this;
  }
  var f = Function("return this")();
  if (f.Promise) {
    "function" !== typeof f.Promise.all && (f.Promise.all = function(c) {
      var e = 0, d = [], a, k, b = new f.Promise(function(c, e) {
        a = c;
        k = e;
      });
      c.forEach(function(c, f) {
        e++;
        c.then(function(c) {
          d[f] = c;
          e--;
          0 === e && a(d);
        }, k);
      });
      0 === e && a(d);
      return b;
    }), "function" !== typeof f.Promise.resolve && (f.Promise.resolve = function(c) {
      return new f.Promise(function(e) {
        e(c);
      });
    });
  } else {
    var e = [];
    d.all = function(c) {
      var e = h(this), f = [], d = {countdown:0}, a = 0;
      c.forEach(function(c) {
        this.cast(c).then(v(a, f, e, d), e.reject);
        a++;
        d.countdown++;
      }, this);
      0 === a && e.resolve(f);
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
      var f = h(this.promiseConstructor), d = "function" === typeof e ? e : k, a = {deferred:f, handler:n(this, "function" === typeof c ? c : t, d)}, d = {deferred:f, handler:d};
      switch(this.promiseStatus) {
        case "unresolved":
          this.resolveReactions.push(a);
          this.rejectReactions.push(d);
          break;
        case "has-resolution":
          l({reaction:a, argument:this.result});
          break;
        case "has-rejection":
          l({reaction:d, argument:this.result});
      }
      return f.promise;
    }};
    f.Promise = d;
  }
})();
"undefined" !== typeof exports && (exports.Shumway = Shumway);
(function() {
  function h(h, r, b) {
    h[r] || Object.defineProperty(h, r, {value:b, writable:!0, configurable:!0, enumerable:!1});
  }
  h(String.prototype, "padRight", function(h, r) {
    var b = this, w = b.replace(/\033\[[0-9]*m/g, "").length;
    if (!h || w >= r) {
      return b;
    }
    for (var w = (r - w) / h.length, l = 0;l < w;l++) {
      b += h;
    }
    return b;
  });
  h(String.prototype, "padLeft", function(h, r) {
    var b = this, w = b.length;
    if (!h || w >= r) {
      return b;
    }
    for (var w = (r - w) / h.length, l = 0;l < w;l++) {
      b = h + b;
    }
    return b;
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
    for (var b = 0, w = 0;w < this.length;w++) {
      this[w] === h && (this[w] = r, b++);
    }
    return b;
  });
})();
(function(h) {
  (function(q) {
    var r = h.isObject, b = function() {
      function a(k, b, p, l) {
        this.shortName = k;
        this.longName = b;
        this.type = p;
        l = l || {};
        this.positional = l.positional;
        this.parseFn = l.parse;
        this.value = l.defaultValue;
      }
      a.prototype.parse = function(a) {
        this.value = "boolean" === this.type ? a : "number" === this.type ? parseInt(a, 10) : a;
        this.parseFn && this.parseFn(this.value);
      };
      return a;
    }();
    q.Argument = b;
    var w = function() {
      function a() {
        this.args = [];
      }
      a.prototype.addArgument = function(a, k, p, l) {
        a = new b(a, k, p, l);
        this.args.push(a);
        return a;
      };
      a.prototype.addBoundOption = function(a) {
        this.args.push(new b(a.shortName, a.longName, a.type, {parse:function(k) {
          a.value = k;
        }}));
      };
      a.prototype.addBoundOptionSet = function(a) {
        var k = this;
        a.options.forEach(function(a) {
          l.isOptionSet(a) ? k.addBoundOptionSet(a) : k.addBoundOption(a);
        });
      };
      a.prototype.getUsage = function() {
        var a = "";
        this.args.forEach(function(k) {
          a = k.positional ? a + k.longName : a + ("[-" + k.shortName + "|--" + k.longName + ("boolean" === k.type ? "" : " " + k.type[0].toUpperCase()) + "]");
          a += " ";
        });
        return a;
      };
      a.prototype.parse = function(a) {
        var k = {}, b = [];
        this.args.forEach(function(f) {
          f.positional ? b.push(f) : (k["-" + f.shortName] = f, k["--" + f.longName] = f);
        });
        for (var l = [];a.length;) {
          var n = a.shift(), v = null, d = n;
          if ("--" == n) {
            l = l.concat(a);
            break;
          } else {
            if ("-" == n.slice(0, 1) || "--" == n.slice(0, 2)) {
              v = k[n];
              if (!v) {
                continue;
              }
              d = "boolean" !== v.type ? a.shift() : !0;
            } else {
              b.length ? v = b.shift() : l.push(d);
            }
          }
          v && v.parse(d);
        }
        return l;
      };
      return a;
    }();
    q.ArgumentParser = w;
    var l = function() {
      function k(a, k) {
        void 0 === k && (k = null);
        this.open = !1;
        this.name = a;
        this.settings = k || {};
        this.options = [];
      }
      k.isOptionSet = function(b) {
        return b instanceof k ? !0 : "object" !== typeof b || null === b || b instanceof a ? !1 : "options" in b && "name" in b && "settings" in b;
      };
      k.prototype.register = function(a) {
        if (k.isOptionSet(a)) {
          for (var b = 0;b < this.options.length;b++) {
            var p = this.options[b];
            if (k.isOptionSet(p) && p.name === a.name) {
              return p;
            }
          }
        }
        this.options.push(a);
        if (this.settings) {
          if (k.isOptionSet(a)) {
            b = this.settings[a.name], r(b) && (a.settings = b.settings, a.open = b.open);
          } else {
            if ("undefined" !== typeof this.settings[a.longName]) {
              switch(a.type) {
                case "boolean":
                  a.value = !!this.settings[a.longName];
                  break;
                case "number":
                  a.value = +this.settings[a.longName];
                  break;
                default:
                  a.value = this.settings[a.longName];
              }
            }
          }
        }
        return a;
      };
      k.prototype.trace = function(a) {
        a.enter(this.name + " {");
        this.options.forEach(function(k) {
          k.trace(a);
        });
        a.leave("}");
      };
      k.prototype.getSettings = function() {
        var a = {};
        this.options.forEach(function(b) {
          k.isOptionSet(b) ? a[b.name] = {settings:b.getSettings(), open:b.open} : a[b.longName] = b.value;
        });
        return a;
      };
      k.prototype.setSettings = function(a) {
        a && this.options.forEach(function(b) {
          k.isOptionSet(b) ? b.name in a && b.setSettings(a[b.name].settings) : b.longName in a && (b.value = a[b.longName]);
        });
      };
      return k;
    }();
    q.OptionSet = l;
    var a = function() {
      function a(k, b, p, l, n, v) {
        void 0 === v && (v = null);
        this.longName = b;
        this.shortName = k;
        this.type = p;
        this.value = this.defaultValue = l;
        this.description = n;
        this.config = v;
      }
      a.prototype.parse = function(a) {
        this.value = a;
      };
      a.prototype.trace = function(a) {
        a.writeLn(("-" + this.shortName + "|--" + this.longName).padRight(" ", 30) + " = " + this.type + " " + this.value + " [" + this.defaultValue + "] (" + this.description + ")");
      };
      return a;
    }();
    q.Option = a;
  })(h.Options || (h.Options = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(q) {
    q.ROOT = "Shumway Options";
    q.shumwayOptions = new h.Options.OptionSet(q.ROOT);
    q.setSettings = function(b) {
      q.shumwayOptions.setSettings(b);
    };
    q.getSettings = function() {
      return q.shumwayOptions.getSettings();
    };
  })(h.Settings || (h.Settings = {}));
  var q = h.Options.Option;
  h.loggingOptions = h.Settings.shumwayOptions.register(new h.Options.OptionSet("Logging Options"));
  h.omitRepeatedWarnings = h.loggingOptions.register(new q("wo", "warnOnce", "boolean", !0, "Omit Repeated Warnings"));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(q) {
    var r = function() {
      function b(b, l) {
        this._parent = b;
        this._timers = h.ObjectUtilities.createMap();
        this._name = l;
        this._count = this._total = this._last = this._begin = 0;
      }
      b.time = function(h, l) {
        b.start(h);
        l();
        b.stop();
      };
      b.start = function(h) {
        b._top = b._top._timers[h] || (b._top._timers[h] = new b(b._top, h));
        b._top.start();
        h = b._flat._timers[h] || (b._flat._timers[h] = new b(b._flat, h));
        h.start();
        b._flatStack.push(h);
      };
      b.stop = function() {
        b._top.stop();
        b._top = b._top._parent;
        b._flatStack.pop().stop();
      };
      b.stopStart = function(h) {
        b.stop();
        b.start(h);
      };
      b.prototype.start = function() {
        this._begin = h.getTicks();
      };
      b.prototype.stop = function() {
        this._last = h.getTicks() - this._begin;
        this._total += this._last;
        this._count += 1;
      };
      b.prototype.toJSON = function() {
        return {name:this._name, total:this._total, timers:this._timers};
      };
      b.prototype.trace = function(b) {
        b.enter(this._name + ": " + this._total.toFixed(2) + " ms, count: " + this._count + ", average: " + (this._total / this._count).toFixed(2) + " ms");
        for (var l in this._timers) {
          this._timers[l].trace(b);
        }
        b.outdent();
      };
      b.trace = function(h) {
        b._base.trace(h);
        b._flat.trace(h);
      };
      b._base = new b(null, "Total");
      b._top = b._base;
      b._flat = new b(null, "Flat");
      b._flatStack = [];
      return b;
    }();
    q.Timer = r;
    r = function() {
      function b(b) {
        this._enabled = b;
        this.clear();
      }
      Object.defineProperty(b.prototype, "counts", {get:function() {
        return this._counts;
      }, enumerable:!0, configurable:!0});
      b.prototype.setEnabled = function(b) {
        this._enabled = b;
      };
      b.prototype.clear = function() {
        this._counts = h.ObjectUtilities.createMap();
        this._times = h.ObjectUtilities.createMap();
      };
      b.prototype.toJSON = function() {
        return {counts:this._counts, times:this._times};
      };
      b.prototype.count = function(b, l, a) {
        void 0 === l && (l = 1);
        void 0 === a && (a = 0);
        if (this._enabled) {
          return void 0 === this._counts[b] && (this._counts[b] = 0, this._times[b] = 0), this._counts[b] += l, this._times[b] += a, this._counts[b];
        }
      };
      b.prototype.trace = function(b) {
        for (var l in this._counts) {
          b.writeLn(l + ": " + this._counts[l]);
        }
      };
      b.prototype._pairToString = function(b, l) {
        var a = l[0], k = l[1], t = b[a], a = a + ": " + k;
        t && (a += ", " + t.toFixed(4), 1 < k && (a += " (" + (t / k).toFixed(4) + ")"));
        return a;
      };
      b.prototype.toStringSorted = function() {
        var b = this, l = this._times, a = [], k;
        for (k in this._counts) {
          a.push([k, this._counts[k]]);
        }
        a.sort(function(a, k) {
          return k[1] - a[1];
        });
        return a.map(function(a) {
          return b._pairToString(l, a);
        }).join(", ");
      };
      b.prototype.traceSorted = function(b, l) {
        void 0 === l && (l = !1);
        var a = this, k = this._times, t = [], g;
        for (g in this._counts) {
          t.push([g, this._counts[g]]);
        }
        t.sort(function(a, k) {
          return k[1] - a[1];
        });
        l ? b.writeLn(t.map(function(b) {
          return a._pairToString(k, b);
        }).join(", ")) : t.forEach(function(g) {
          b.writeLn(a._pairToString(k, g));
        });
      };
      b.instance = new b(!0);
      return b;
    }();
    q.Counter = r;
    r = function() {
      function b(b) {
        this._samples = new Float64Array(b);
        this._index = this._count = 0;
      }
      b.prototype.push = function(b) {
        this._count < this._samples.length && this._count++;
        this._index++;
        this._samples[this._index % this._samples.length] = b;
      };
      b.prototype.average = function() {
        for (var b = 0, l = 0;l < this._count;l++) {
          b += this._samples[l];
        }
        return b / this._count;
      };
      return b;
    }();
    q.Average = r;
  })(h.Metrics || (h.Metrics = {}));
})(Shumway || (Shumway = {}));
var __extends = this.__extends || function(h, q) {
  function r() {
    this.constructor = h;
  }
  for (var b in q) {
    q.hasOwnProperty(b) && (h[b] = q[b]);
  }
  r.prototype = q.prototype;
  h.prototype = new r;
};
(function(h) {
  (function(h) {
    function r(e) {
      for (var c = Math.max.apply(null, e), m = e.length, f = 1 << c, d = new Uint32Array(f), a = c << 16 | 65535, k = 0;k < f;k++) {
        d[k] = a;
      }
      for (var a = 0, k = 1, b = 2;k <= c;a <<= 1, ++k, b <<= 1) {
        for (var v = 0;v < m;++v) {
          if (e[v] === k) {
            for (var g = 0, n = 0;n < k;++n) {
              g = 2 * g + (a >> n & 1);
            }
            for (n = g;n < f;n += b) {
              d[n] = k << 16 | v;
            }
            ++a;
          }
        }
      }
      return {codes:d, maxBits:c};
    }
    var b;
    (function(e) {
      e[e.INIT = 0] = "INIT";
      e[e.BLOCK_0 = 1] = "BLOCK_0";
      e[e.BLOCK_1 = 2] = "BLOCK_1";
      e[e.BLOCK_2_PRE = 3] = "BLOCK_2_PRE";
      e[e.BLOCK_2 = 4] = "BLOCK_2";
      e[e.DONE = 5] = "DONE";
      e[e.ERROR = 6] = "ERROR";
      e[e.VERIFY_HEADER = 7] = "VERIFY_HEADER";
    })(b || (b = {}));
    b = function() {
      function e(c) {
      }
      e.prototype.push = function(c) {
      };
      e.prototype.close = function() {
      };
      e.create = function(c) {
        return "undefined" !== typeof ShumwayCom && ShumwayCom.createSpecialInflate ? new v(c, ShumwayCom.createSpecialInflate) : new w(c);
      };
      e.prototype._processZLibHeader = function(c, e, f) {
        if (e + 2 > f) {
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
      e.inflate = function(c, m, f) {
        var d = new Uint8Array(m), a = 0;
        m = e.create(f);
        m.onData = function(c) {
          var e = Math.min(c.length, d.length - a);
          e && h.memCopy(d, c, a, 0, e);
          a += e;
        };
        m.onError = function(c) {
          throw Error(c);
        };
        m.push(c);
        m.close();
        return d;
      };
      return e;
    }();
    h.Inflate = b;
    var w = function(e) {
      function c(c) {
        e.call(this, c);
        this._buffer = null;
        this._bitLength = this._bitBuffer = this._bufferPosition = this._bufferSize = 0;
        this._window = new Uint8Array(65794);
        this._windowPosition = 0;
        this._state = c ? 7 : 0;
        this._isFinalBlock = !1;
        this._distanceTable = this._literalTable = null;
        this._block0Read = 0;
        this._block2State = null;
        this._copyState = {state:0, len:0, lenBits:0, dist:0, distBits:0};
        if (!n) {
          l = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
          a = new Uint16Array(30);
          k = new Uint8Array(30);
          for (var f = c = 0, d = 1;30 > c;++c) {
            a[c] = d, d += 1 << (k[c] = ~~((f += 2 < c ? 1 : 0) / 2));
          }
          var b = new Uint8Array(288);
          for (c = 0;32 > c;++c) {
            b[c] = 5;
          }
          t = r(b.subarray(0, 32));
          g = new Uint16Array(29);
          p = new Uint8Array(29);
          f = c = 0;
          for (d = 3;29 > c;++c) {
            g[c] = d - (28 == c ? 1 : 0), d += 1 << (p[c] = ~~((f += 4 < c ? 1 : 0) / 4 % 6));
          }
          for (c = 0;288 > c;++c) {
            b[c] = 144 > c || 279 < c ? 8 : 256 > c ? 9 : 7;
          }
          u = r(b);
          n = !0;
        }
      }
      __extends(c, e);
      c.prototype.push = function(c) {
        if (!this._buffer || this._buffer.length < this._bufferSize + c.length) {
          var e = new Uint8Array(this._bufferSize + c.length);
          this._buffer && e.set(this._buffer);
          this._buffer = e;
        }
        this._buffer.set(c, this._bufferSize);
        this._bufferSize += c.length;
        this._bufferPosition = 0;
        c = !1;
        do {
          e = this._windowPosition;
          if (0 === this._state && (c = this._decodeInitState())) {
            break;
          }
          switch(this._state) {
            case 1:
              c = this._decodeBlock0();
              break;
            case 3:
              if (c = this._decodeBlock2Pre()) {
                break;
              }
            ;
            case 2:
            ;
            case 4:
              c = this._decodeBlock();
              break;
            case 6:
            ;
            case 5:
              this._bufferPosition = this._bufferSize;
              break;
            case 7:
              var f = this._processZLibHeader(this._buffer, this._bufferPosition, this._bufferSize);
              0 < f ? (this._bufferPosition += f, this._state = 0) : 0 === f ? c = !0 : this._state = 6;
          }
          if (0 < this._windowPosition - e) {
            this.onData(this._window.subarray(e, this._windowPosition));
          }
          65536 <= this._windowPosition && ("copyWithin" in this._buffer ? this._window.copyWithin(0, this._windowPosition - 32768, this._windowPosition) : this._window.set(this._window.subarray(this._windowPosition - 32768, this._windowPosition)), this._windowPosition = 32768);
        } while (!c && this._bufferPosition < this._bufferSize);
        this._bufferPosition < this._bufferSize ? ("copyWithin" in this._buffer ? this._buffer.copyWithin(0, this._bufferPosition, this._bufferSize) : this._buffer.set(this._buffer.subarray(this._bufferPosition, this._bufferSize)), this._bufferSize -= this._bufferPosition) : this._bufferSize = 0;
      };
      c.prototype._decodeInitState = function() {
        if (this._isFinalBlock) {
          return this._state = 5, !1;
        }
        var c = this._buffer, e = this._bufferSize, f = this._bitBuffer, d = this._bitLength, a = this._bufferPosition;
        if (3 > (e - a << 3) + d) {
          return !0;
        }
        3 > d && (f |= c[a++] << d, d += 8);
        var k = f & 7, f = f >> 3, d = d - 3;
        switch(k >> 1) {
          case 0:
            d = f = 0;
            if (4 > e - a) {
              return !0;
            }
            var b = c[a] | c[a + 1] << 8, c = c[a + 2] | c[a + 3] << 8, a = a + 4;
            if (65535 !== (b ^ c)) {
              this._error("inflate: invalid block 0 length");
              c = 6;
              break;
            }
            0 === b ? c = 0 : (this._block0Read = b, c = 1);
            break;
          case 1:
            c = 2;
            this._literalTable = u;
            this._distanceTable = t;
            break;
          case 2:
            if (26 > (e - a << 3) + d) {
              return !0;
            }
            for (;14 > d;) {
              f |= c[a++] << d, d += 8;
            }
            b = (f >> 10 & 15) + 4;
            if ((e - a << 3) + d < 14 + 3 * b) {
              return !0;
            }
            for (var e = {numLiteralCodes:(f & 31) + 257, numDistanceCodes:(f >> 5 & 31) + 1, codeLengthTable:void 0, bitLengths:void 0, codesRead:0, dupBits:0}, f = f >> 14, d = d - 14, v = new Uint8Array(19), g = 0;g < b;++g) {
              3 > d && (f |= c[a++] << d, d += 8), v[l[g]] = f & 7, f >>= 3, d -= 3;
            }
            for (;19 > g;g++) {
              v[l[g]] = 0;
            }
            e.bitLengths = new Uint8Array(e.numLiteralCodes + e.numDistanceCodes);
            e.codeLengthTable = r(v);
            this._block2State = e;
            c = 3;
            break;
          default:
            return this._error("inflate: unsupported block type"), !1;
        }
        this._isFinalBlock = !!(k & 1);
        this._state = c;
        this._bufferPosition = a;
        this._bitBuffer = f;
        this._bitLength = d;
        return !1;
      };
      c.prototype._error = function(c) {
        if (this.onError) {
          this.onError(c);
        }
      };
      c.prototype._decodeBlock0 = function() {
        var c = this._bufferPosition, e = this._windowPosition, f = this._block0Read, d = 65794 - e, a = this._bufferSize - c, k = a < f, b = Math.min(d, a, f);
        this._window.set(this._buffer.subarray(c, c + b), e);
        this._windowPosition = e + b;
        this._bufferPosition = c + b;
        this._block0Read = f - b;
        return f === b ? (this._state = 0, !1) : k && d < a;
      };
      c.prototype._readBits = function(c) {
        var e = this._bitBuffer, f = this._bitLength;
        if (c > f) {
          var d = this._bufferPosition, a = this._bufferSize;
          do {
            if (d >= a) {
              return this._bufferPosition = d, this._bitBuffer = e, this._bitLength = f, -1;
            }
            e |= this._buffer[d++] << f;
            f += 8;
          } while (c > f);
          this._bufferPosition = d;
        }
        this._bitBuffer = e >> c;
        this._bitLength = f - c;
        return e & (1 << c) - 1;
      };
      c.prototype._readCode = function(c) {
        var e = this._bitBuffer, f = this._bitLength, d = c.maxBits;
        if (d > f) {
          var a = this._bufferPosition, k = this._bufferSize;
          do {
            if (a >= k) {
              return this._bufferPosition = a, this._bitBuffer = e, this._bitLength = f, -1;
            }
            e |= this._buffer[a++] << f;
            f += 8;
          } while (d > f);
          this._bufferPosition = a;
        }
        c = c.codes[e & (1 << d) - 1];
        d = c >> 16;
        if (c & 32768) {
          return this._error("inflate: invalid encoding"), this._state = 6, -1;
        }
        this._bitBuffer = e >> d;
        this._bitLength = f - d;
        return c & 65535;
      };
      c.prototype._decodeBlock2Pre = function() {
        var c = this._block2State, e = c.numLiteralCodes + c.numDistanceCodes, f = c.bitLengths, d = c.codesRead, a = 0 < d ? f[d - 1] : 0, k = c.codeLengthTable, b;
        if (0 < c.dupBits) {
          b = this._readBits(c.dupBits);
          if (0 > b) {
            return !0;
          }
          for (;b--;) {
            f[d++] = a;
          }
          c.dupBits = 0;
        }
        for (;d < e;) {
          var v = this._readCode(k);
          if (0 > v) {
            return c.codesRead = d, !0;
          }
          if (16 > v) {
            f[d++] = a = v;
          } else {
            var g;
            switch(v) {
              case 16:
                g = 2;
                b = 3;
                v = a;
                break;
              case 17:
                b = g = 3;
                v = 0;
                break;
              case 18:
                g = 7, b = 11, v = 0;
            }
            for (;b--;) {
              f[d++] = v;
            }
            b = this._readBits(g);
            if (0 > b) {
              return c.codesRead = d, c.dupBits = g, !0;
            }
            for (;b--;) {
              f[d++] = v;
            }
            a = v;
          }
        }
        this._literalTable = r(f.subarray(0, c.numLiteralCodes));
        this._distanceTable = r(f.subarray(c.numLiteralCodes));
        this._state = 4;
        this._block2State = null;
        return !1;
      };
      c.prototype._decodeBlock = function() {
        var c = this._literalTable, e = this._distanceTable, f = this._window, d = this._windowPosition, b = this._copyState, v, n, l, t;
        if (0 !== b.state) {
          switch(b.state) {
            case 1:
              if (0 > (v = this._readBits(b.lenBits))) {
                return !0;
              }
              b.len += v;
              b.state = 2;
            case 2:
              if (0 > (v = this._readCode(e))) {
                return !0;
              }
              b.distBits = k[v];
              b.dist = a[v];
              b.state = 3;
            case 3:
              v = 0;
              if (0 < b.distBits && 0 > (v = this._readBits(b.distBits))) {
                return !0;
              }
              t = b.dist + v;
              n = b.len;
              for (v = d - t;n--;) {
                f[d++] = f[v++];
              }
              b.state = 0;
              if (65536 <= d) {
                return this._windowPosition = d, !1;
              }
              break;
          }
        }
        do {
          v = this._readCode(c);
          if (0 > v) {
            return this._windowPosition = d, !0;
          }
          if (256 > v) {
            f[d++] = v;
          } else {
            if (256 < v) {
              this._windowPosition = d;
              v -= 257;
              l = p[v];
              n = g[v];
              v = 0 === l ? 0 : this._readBits(l);
              if (0 > v) {
                return b.state = 1, b.len = n, b.lenBits = l, !0;
              }
              n += v;
              v = this._readCode(e);
              if (0 > v) {
                return b.state = 2, b.len = n, !0;
              }
              l = k[v];
              t = a[v];
              v = 0 === l ? 0 : this._readBits(l);
              if (0 > v) {
                return b.state = 3, b.len = n, b.dist = t, b.distBits = l, !0;
              }
              t += v;
              for (v = d - t;n--;) {
                f[d++] = f[v++];
              }
            } else {
              this._state = 0;
              break;
            }
          }
        } while (65536 > d);
        this._windowPosition = d;
        return !1;
      };
      return c;
    }(b), l, a, k, t, g, p, u, n = !1, v = function(e) {
      function c(c, f) {
        e.call(this, c);
        this._verifyHeader = c;
        this._specialInflate = f();
        this._specialInflate.setDataCallback(function(c) {
          this.onData(c);
        }.bind(this));
      }
      __extends(c, e);
      c.prototype.push = function(c) {
        if (this._verifyHeader) {
          var e;
          this._buffer ? (e = new Uint8Array(this._buffer.length + c.length), e.set(this._buffer), e.set(c, this._buffer.length), this._buffer = null) : e = new Uint8Array(c);
          var f = this._processZLibHeader(e, 0, e.length);
          if (0 === f) {
            this._buffer = e;
            return;
          }
          this._verifyHeader = !0;
          0 < f && (c = e.subarray(f));
        }
        this._specialInflate.push(c);
      };
      c.prototype.close = function() {
        this._specialInflate && (this._specialInflate.close(), this._specialInflate = null);
      };
      return c;
    }(b), d;
    (function(e) {
      e[e.WRITE = 0] = "WRITE";
      e[e.DONE = 1] = "DONE";
      e[e.ZLIB_HEADER = 2] = "ZLIB_HEADER";
    })(d || (d = {}));
    var f = function() {
      function e() {
        this.a = 1;
        this.b = 0;
      }
      e.prototype.update = function(c, e, f) {
        for (var d = this.a, a = this.b;e < f;++e) {
          d = (d + (c[e] & 255)) % 65521, a = (a + d) % 65521;
        }
        this.a = d;
        this.b = a;
      };
      e.prototype.getChecksum = function() {
        return this.b << 16 | this.a;
      };
      return e;
    }();
    h.Adler32 = f;
    d = function() {
      function e(c) {
        this._state = (this._writeZlibHeader = c) ? 2 : 0;
        this._adler32 = c ? new f : null;
      }
      e.prototype.push = function(c) {
        2 === this._state && (this.onData(new Uint8Array([120, 156])), this._state = 0);
        for (var e = c.length, f = new Uint8Array(e + 5 * Math.ceil(e / 65535)), d = 0, a = 0;65535 < e;) {
          f.set(new Uint8Array([0, 255, 255, 0, 0]), d), d += 5, f.set(c.subarray(a, a + 65535), d), a += 65535, d += 65535, e -= 65535;
        }
        f.set(new Uint8Array([0, e & 255, e >> 8 & 255, ~e & 255, ~e >> 8 & 255]), d);
        f.set(c.subarray(a, e), d + 5);
        this.onData(f);
        this._adler32 && this._adler32.update(c, 0, e);
      };
      e.prototype.close = function() {
        this._state = 1;
        this.onData(new Uint8Array([1, 0, 0, 255, 255]));
        if (this._adler32) {
          var c = this._adler32.getChecksum();
          this.onData(new Uint8Array([c & 255, c >> 8 & 255, c >> 16 & 255, c >>> 24 & 255]));
        }
      };
      return e;
    }();
    h.Deflate = d;
  })(h.ArrayUtilities || (h.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    function r(c) {
      for (var e = new Uint16Array(c), f = 0;f < c;f++) {
        e[f] = 1024;
      }
      return e;
    }
    function b(c, e, f, d) {
      for (var a = 1, b = 0, k = 0;k < f;k++) {
        var v = d.decodeBit(c, a + e), a = (a << 1) + v, b = b | v << k
      }
      return b;
    }
    function w(c, e) {
      var f = [];
      f.length = e;
      for (var d = 0;d < e;d++) {
        f[d] = new g(c);
      }
      return f;
    }
    var l = function() {
      function c() {
        this.pos = this.available = 0;
        this.buffer = new Uint8Array(2E3);
      }
      c.prototype.append = function(c) {
        var e = this.pos + this.available, f = e + c.length;
        if (f > this.buffer.length) {
          for (var d = 2 * this.buffer.length;d < f;) {
            d *= 2;
          }
          f = new Uint8Array(d);
          f.set(this.buffer);
          this.buffer = f;
        }
        this.buffer.set(c, e);
        this.available += c.length;
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
    }(), a = function() {
      function c(c) {
        this.onData = c;
        this.processed = 0;
      }
      c.prototype.writeBytes = function(c) {
        this.onData.call(null, c);
        this.processed += c.length;
      };
      return c;
    }(), k = function() {
      function c(c) {
        this.outStream = c;
        this.buf = null;
        this.size = this.pos = 0;
        this.isFull = !1;
        this.totalPos = this.writePos = 0;
      }
      c.prototype.create = function(c) {
        this.buf = new Uint8Array(c);
        this.pos = 0;
        this.size = c;
        this.isFull = !1;
        this.totalPos = this.writePos = 0;
      };
      c.prototype.putByte = function(c) {
        this.totalPos++;
        this.buf[this.pos++] = c;
        this.pos === this.size && (this.flush(), this.pos = 0, this.isFull = !0);
      };
      c.prototype.getByte = function(c) {
        return this.buf[c <= this.pos ? this.pos - c : this.size - c + this.pos];
      };
      c.prototype.flush = function() {
        this.writePos < this.pos && (this.outStream.writeBytes(this.buf.subarray(this.writePos, this.pos)), this.writePos = this.pos === this.size ? 0 : this.pos);
      };
      c.prototype.copyMatch = function(c, e) {
        for (var f = this.pos, d = this.size, a = this.buf, b = c <= f ? f - c : d - c + f, k = e;0 < k;) {
          for (var v = Math.min(Math.min(k, d - f), d - b), g = 0;g < v;g++) {
            var n = a[b++];
            a[f++] = n;
          }
          f === d && (this.pos = f, this.flush(), f = 0, this.isFull = !0);
          b === d && (b = 0);
          k -= v;
        }
        this.pos = f;
        this.totalPos += e;
      };
      c.prototype.checkDistance = function(c) {
        return c <= this.pos || this.isFull;
      };
      c.prototype.isEmpty = function() {
        return 0 === this.pos && !this.isFull;
      };
      return c;
    }(), t = function() {
      function c(c) {
        this.inStream = c;
        this.code = this.range = 0;
        this.corrupted = !1;
      }
      c.prototype.init = function() {
        0 !== this.inStream.readByte() && (this.corrupted = !0);
        this.range = -1;
        for (var c = 0, e = 0;4 > e;e++) {
          c = c << 8 | this.inStream.readByte();
        }
        c === this.range && (this.corrupted = !0);
        this.code = c;
      };
      c.prototype.isFinishedOK = function() {
        return 0 === this.code;
      };
      c.prototype.decodeDirectBits = function(c) {
        var e = 0, f = this.range, d = this.code;
        do {
          var f = f >>> 1 | 0, d = d - f | 0, a = d >> 31, d = d + (f & a) | 0;
          d === f && (this.corrupted = !0);
          0 <= f && 16777216 > f && (f <<= 8, d = d << 8 | this.inStream.readByte());
          e = (e << 1) + a + 1 | 0;
        } while (--c);
        this.range = f;
        this.code = d;
        return e;
      };
      c.prototype.decodeBit = function(c, e) {
        var f = this.range, d = this.code, a = c[e], b = (f >>> 11) * a;
        d >>> 0 < b ? (a = a + (2048 - a >> 5) | 0, f = b | 0, b = 0) : (a = a - (a >> 5) | 0, d = d - b | 0, f = f - b | 0, b = 1);
        c[e] = a & 65535;
        0 <= f && 16777216 > f && (f <<= 8, d = d << 8 | this.inStream.readByte());
        this.range = f;
        this.code = d;
        return b;
      };
      return c;
    }(), g = function() {
      function c(c) {
        this.numBits = c;
        this.probs = r(1 << c);
      }
      c.prototype.decode = function(c) {
        for (var e = 1, f = 0;f < this.numBits;f++) {
          e = (e << 1) + c.decodeBit(this.probs, e);
        }
        return e - (1 << this.numBits);
      };
      c.prototype.reverseDecode = function(c) {
        return b(this.probs, 0, this.numBits, c);
      };
      return c;
    }(), p = function() {
      function c() {
        this.choice = r(2);
        this.lowCoder = w(3, 16);
        this.midCoder = w(3, 16);
        this.highCoder = new g(8);
      }
      c.prototype.decode = function(c, e) {
        return 0 === c.decodeBit(this.choice, 0) ? this.lowCoder[e].decode(c) : 0 === c.decodeBit(this.choice, 1) ? 8 + this.midCoder[e].decode(c) : 16 + this.highCoder.decode(c);
      };
      return c;
    }(), u = function() {
      function c(c, e) {
        this.rangeDec = new t(c);
        this.outWindow = new k(e);
        this.markerIsMandatory = !1;
        this.dictSizeInProperties = this.dictSize = this.lp = this.pb = this.lc = 0;
        this.leftToUnpack = this.unpackSize = void 0;
        this.reps = new Int32Array(4);
        this.state = 0;
      }
      c.prototype.decodeProperties = function(c) {
        var e = c[0];
        if (225 <= e) {
          throw Error("Incorrect LZMA properties");
        }
        this.lc = e % 9;
        e = e / 9 | 0;
        this.pb = e / 5 | 0;
        this.lp = e % 5;
        for (e = this.dictSizeInProperties = 0;4 > e;e++) {
          this.dictSizeInProperties |= c[e + 1] << 8 * e;
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
      c.prototype.decodeLiteral = function(c, e) {
        var f = this.outWindow, d = this.rangeDec, a = 0;
        f.isEmpty() || (a = f.getByte(1));
        var b = 1, a = 768 * (((f.totalPos & (1 << this.lp) - 1) << this.lc) + (a >> 8 - this.lc));
        if (7 <= c) {
          f = f.getByte(e + 1);
          do {
            var k = f >> 7 & 1, f = f << 1, v = d.decodeBit(this.litProbs, a + ((1 + k << 8) + b)), b = b << 1 | v;
            if (k !== v) {
              break;
            }
          } while (256 > b);
        }
        for (;256 > b;) {
          b = b << 1 | d.decodeBit(this.litProbs, a + b);
        }
        return b - 256 & 255;
      };
      c.prototype.decodeDistance = function(c) {
        var e = c;
        3 < e && (e = 3);
        c = this.rangeDec;
        e = this.posSlotDecoder[e].decode(c);
        if (4 > e) {
          return e;
        }
        var f = (e >> 1) - 1, d = (2 | e & 1) << f;
        14 > e ? d = d + b(this.posDecoders, d - e, f, c) | 0 : (d = d + (c.decodeDirectBits(f - 4) << 4) | 0, d = d + this.alignDecoder.reverseDecode(c) | 0);
        return d;
      };
      c.prototype.init = function() {
        this.litProbs = r(768 << this.lc + this.lp);
        this.posSlotDecoder = w(6, 4);
        this.alignDecoder = new g(4);
        this.posDecoders = r(115);
        this.isMatch = r(192);
        this.isRep = r(12);
        this.isRepG0 = r(12);
        this.isRepG1 = r(12);
        this.isRepG2 = r(12);
        this.isRep0Long = r(192);
        this.lenDecoder = new p;
        this.repLenDecoder = new p;
      };
      c.prototype.decode = function(c) {
        for (var e = this.rangeDec, a = this.outWindow, b = this.pb, k = this.dictSize, g = this.markerIsMandatory, l = this.leftToUnpack, p = this.isMatch, t = this.isRep, u = this.isRepG0, h = this.isRepG1, q = this.isRepG2, r = this.isRep0Long, w = this.lenDecoder, D = this.repLenDecoder, z = this.reps[0], B = this.reps[1], E = this.reps[2], A = this.reps[3], C = this.state;;) {
          if (c && 48 > e.inStream.available) {
            this.outWindow.flush();
            break;
          }
          if (0 === l && !g && (this.outWindow.flush(), e.isFinishedOK())) {
            return d;
          }
          var F = a.totalPos & (1 << b) - 1;
          if (0 === e.decodeBit(p, (C << 4) + F)) {
            if (0 === l) {
              return n;
            }
            a.putByte(this.decodeLiteral(C, z));
            C = 4 > C ? 0 : 10 > C ? C - 3 : C - 6;
            l--;
          } else {
            if (0 !== e.decodeBit(t, C)) {
              if (0 === l || a.isEmpty()) {
                return n;
              }
              if (0 === e.decodeBit(u, C)) {
                if (0 === e.decodeBit(r, (C << 4) + F)) {
                  C = 7 > C ? 9 : 11;
                  a.putByte(a.getByte(z + 1));
                  l--;
                  continue;
                }
              } else {
                var G;
                0 === e.decodeBit(h, C) ? G = B : (0 === e.decodeBit(q, C) ? G = E : (G = A, A = E), E = B);
                B = z;
                z = G;
              }
              F = D.decode(e, F);
              C = 7 > C ? 8 : 11;
            } else {
              A = E;
              E = B;
              B = z;
              F = w.decode(e, F);
              C = 7 > C ? 7 : 10;
              z = this.decodeDistance(F);
              if (-1 === z) {
                return this.outWindow.flush(), e.isFinishedOK() ? v : n;
              }
              if (0 === l || z >= k || !a.checkDistance(z)) {
                return n;
              }
            }
            F += 2;
            G = !1;
            void 0 !== l && l < F && (F = l, G = !0);
            a.copyMatch(z + 1, F);
            l -= F;
            if (G) {
              return n;
            }
          }
        }
        this.state = C;
        this.reps[0] = z;
        this.reps[1] = B;
        this.reps[2] = E;
        this.reps[3] = A;
        this.leftToUnpack = l;
        return f;
      };
      c.prototype.flushOutput = function() {
        this.outWindow.flush();
      };
      return c;
    }(), n = 0, v = 1, d = 2, f = 3, e;
    (function(c) {
      c[c.WAIT_FOR_LZMA_HEADER = 0] = "WAIT_FOR_LZMA_HEADER";
      c[c.WAIT_FOR_SWF_HEADER = 1] = "WAIT_FOR_SWF_HEADER";
      c[c.PROCESS_DATA = 2] = "PROCESS_DATA";
      c[c.CLOSED = 3] = "CLOSED";
      c[c.ERROR = 4] = "ERROR";
    })(e || (e = {}));
    e = function() {
      function c(c) {
        void 0 === c && (c = !1);
        this._state = c ? 1 : 0;
        this.buffer = null;
      }
      c.prototype.push = function(c) {
        if (2 > this._state) {
          var e = this.buffer ? this.buffer.length : 0, d = (1 === this._state ? 17 : 13) + 5;
          if (e + c.length < d) {
            d = new Uint8Array(e + c.length);
            0 < e && d.set(this.buffer);
            d.set(c, e);
            this.buffer = d;
            return;
          }
          var b = new Uint8Array(d);
          0 < e && b.set(this.buffer);
          b.set(c.subarray(0, d - e), e);
          this._inStream = new l;
          this._inStream.append(b.subarray(d - 5));
          this._outStream = new a(function(c) {
            this.onData.call(null, c);
          }.bind(this));
          this._decoder = new u(this._inStream, this._outStream);
          if (1 === this._state) {
            this._decoder.decodeProperties(b.subarray(12, 17)), this._decoder.markerIsMandatory = !1, this._decoder.unpackSize = ((b[4] | b[5] << 8 | b[6] << 16 | b[7] << 24) >>> 0) - 8;
          } else {
            this._decoder.decodeProperties(b.subarray(0, 5));
            for (var e = 0, k = !1, v = 0;8 > v;v++) {
              var g = b[5 + v];
              255 !== g && (k = !0);
              e |= g << 8 * v;
            }
            this._decoder.markerIsMandatory = !k;
            this._decoder.unpackSize = k ? e : void 0;
          }
          this._decoder.create();
          c = c.subarray(d);
          this._state = 2;
        } else {
          if (2 !== this._state) {
            return;
          }
        }
        try {
          this._inStream.append(c);
          var n = this._decoder.decode(!0);
          this._inStream.compact();
          n !== f && this._checkError(n);
        } catch (p) {
          this._decoder.flushOutput(), this._decoder = null, this._error(p);
        }
      };
      c.prototype.close = function() {
        if (2 === this._state) {
          this._state = 3;
          try {
            var c = this._decoder.decode(!1);
            this._checkError(c);
          } catch (e) {
            this._decoder.flushOutput(), this._error(e);
          }
          this._decoder = null;
        }
      };
      c.prototype._error = function(c) {
        this._state = 4;
        if (this.onError) {
          this.onError(c);
        }
      };
      c.prototype._checkError = function(c) {
        var e;
        c === n ? e = "LZMA decoding error" : c === f ? e = "Decoding is not complete" : c === v ? void 0 !== this._decoder.unpackSize && this._decoder.unpackSize !== this._outStream.processed && (e = "Finished with end marker before than specified size") : e = "Internal LZMA Error";
        e && this._error(e);
      };
      return c;
    }();
    h.LzmaDecoder = e;
  })(h.ArrayUtilities || (h.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(q) {
    function r(a) {
      return "string" === typeof a ? a : void 0 == a ? null : a + "";
    }
    var b = h.Debug.notImplemented, w = h.StringUtilities.utf8decode, l = h.StringUtilities.utf8encode, a = h.NumberUtilities.clamp, k = function() {
      return function(a, b, d) {
        this.buffer = a;
        this.length = b;
        this.littleEndian = d;
      };
    }();
    q.PlainObjectDataBuffer = k;
    for (var t = new Uint32Array(33), g = 1, p = 0;32 >= g;g++) {
      t[g] = p = p << 1 | 1;
    }
    var u;
    (function(a) {
      a[a.U8 = 1] = "U8";
      a[a.I32 = 2] = "I32";
      a[a.F32 = 4] = "F32";
    })(u || (u = {}));
    g = function() {
      function g(a) {
        void 0 === a && (a = g.INITIAL_SIZE);
        this._buffer || (this._buffer = new ArrayBuffer(a), this._position = this._length = 0, this._resetViews(), this._littleEndian = g._nativeLittleEndian, this._bitLength = this._bitBuffer = 0);
      }
      g.FromArrayBuffer = function(a, d) {
        void 0 === d && (d = -1);
        var f = Object.create(g.prototype);
        f._buffer = a;
        f._length = -1 === d ? a.byteLength : d;
        f._position = 0;
        f._resetViews();
        f._littleEndian = g._nativeLittleEndian;
        f._bitBuffer = 0;
        f._bitLength = 0;
        return f;
      };
      g.FromPlainObject = function(a) {
        var d = g.FromArrayBuffer(a.buffer, a.length);
        d._littleEndian = a.littleEndian;
        return d;
      };
      g.prototype.toPlainObject = function() {
        return new k(this._buffer, this._length, this._littleEndian);
      };
      g.prototype._resetViews = function() {
        this._u8 = new Uint8Array(this._buffer);
        this._f32 = this._i32 = null;
      };
      g.prototype._requestViews = function(a) {
        0 === (this._buffer.byteLength & 3) && (null === this._i32 && a & 2 && (this._i32 = new Int32Array(this._buffer)), null === this._f32 && a & 4 && (this._f32 = new Float32Array(this._buffer)));
      };
      g.prototype.getBytes = function() {
        return new Uint8Array(this._buffer, 0, this._length);
      };
      g.prototype._ensureCapacity = function(a) {
        var d = this._buffer;
        if (!(d.byteLength >= a)) {
          for (var f = Math.max(d.byteLength, 1);f < a;) {
            f *= 2;
          }
          4294967295 < f && this.sec.throwError("RangeError", Errors.ParamRangeError);
          f = g._arrayBufferPool.acquire(f);
          a = this._u8;
          this._buffer = f;
          this._resetViews();
          this._u8.set(a);
          f = this._u8;
          for (a = a.length;a < f.length;a++) {
            f[a] = 0;
          }
          g._arrayBufferPool.release(d);
        }
      };
      g.prototype.clear = function() {
        this._position = this._length = 0;
      };
      g.prototype.readBoolean = function() {
        return 0 !== this.readUnsignedByte();
      };
      g.prototype.readByte = function() {
        return this.readUnsignedByte() << 24 >> 24;
      };
      g.prototype.readUnsignedByte = function() {
        this._position + 1 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        return this._u8[this._position++];
      };
      g.prototype.readBytes = function(a, d, f) {
        var e = this._position;
        d >>>= 0;
        f >>>= 0;
        0 === f && (f = this._length - e);
        e + f > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        a.length < d + f && (a._ensureCapacity(d + f), a.length = d + f);
        a._u8.set(new Uint8Array(this._buffer, e, f), d);
        this._position += f;
      };
      g.prototype.readShort = function() {
        return this.readUnsignedShort() << 16 >> 16;
      };
      g.prototype.readUnsignedShort = function() {
        var a = this._u8, d = this._position;
        d + 2 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var f = a[d + 0], a = a[d + 1];
        this._position = d + 2;
        return this._littleEndian ? a << 8 | f : f << 8 | a;
      };
      g.prototype.readInt = function() {
        var a = this._u8, d = this._position;
        d + 4 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var f = a[d + 0], e = a[d + 1], c = a[d + 2], a = a[d + 3];
        this._position = d + 4;
        return this._littleEndian ? a << 24 | c << 16 | e << 8 | f : f << 24 | e << 16 | c << 8 | a;
      };
      g.prototype.readUnsignedInt = function() {
        return this.readInt() >>> 0;
      };
      g.prototype.readFloat = function() {
        var a = this._position;
        a + 4 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        this._position = a + 4;
        this._requestViews(4);
        if (this._littleEndian && 0 === (a & 3) && this._f32) {
          return this._f32[a >> 2];
        }
        var d = this._u8, f = h.IntegerUtilities.u8;
        this._littleEndian ? (f[0] = d[a + 0], f[1] = d[a + 1], f[2] = d[a + 2], f[3] = d[a + 3]) : (f[3] = d[a + 0], f[2] = d[a + 1], f[1] = d[a + 2], f[0] = d[a + 3]);
        return h.IntegerUtilities.f32[0];
      };
      g.prototype.readDouble = function() {
        var a = this._u8, d = this._position;
        d + 8 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var f = h.IntegerUtilities.u8;
        this._littleEndian ? (f[0] = a[d + 0], f[1] = a[d + 1], f[2] = a[d + 2], f[3] = a[d + 3], f[4] = a[d + 4], f[5] = a[d + 5], f[6] = a[d + 6], f[7] = a[d + 7]) : (f[0] = a[d + 7], f[1] = a[d + 6], f[2] = a[d + 5], f[3] = a[d + 4], f[4] = a[d + 3], f[5] = a[d + 2], f[6] = a[d + 1], f[7] = a[d + 0]);
        this._position = d + 8;
        return h.IntegerUtilities.f64[0];
      };
      g.prototype.writeBoolean = function(a) {
        this.writeByte(a ? 1 : 0);
      };
      g.prototype.writeByte = function(a) {
        var d = this._position + 1;
        this._ensureCapacity(d);
        this._u8[this._position++] = a;
        d > this._length && (this._length = d);
      };
      g.prototype.writeUnsignedByte = function(a) {
        var d = this._position + 1;
        this._ensureCapacity(d);
        this._u8[this._position++] = a;
        d > this._length && (this._length = d);
      };
      g.prototype.writeRawBytes = function(a) {
        var d = this._position + a.length;
        this._ensureCapacity(d);
        this._u8.set(a, this._position);
        this._position = d;
        d > this._length && (this._length = d);
      };
      g.prototype.writeBytes = function(b, d, f) {
        h.isNullOrUndefined(b) && this.sec.throwError("TypeError", Errors.NullPointerError, "bytes");
        d >>>= 0;
        f >>>= 0;
        2 > arguments.length && (d = 0);
        3 > arguments.length && (f = 0);
        d === a(d, 0, b.length) && d + f === a(d + f, 0, b.length) || this.sec.throwError("RangeError", Errors.ParamRangeError);
        0 === f && (f = b.length - d);
        this.writeRawBytes(new Int8Array(b._buffer, d, f));
      };
      g.prototype.writeShort = function(a) {
        this.writeUnsignedShort(a);
      };
      g.prototype.writeUnsignedShort = function(a) {
        var d = this._position;
        this._ensureCapacity(d + 2);
        var f = this._u8;
        this._littleEndian ? (f[d + 0] = a, f[d + 1] = a >> 8) : (f[d + 0] = a >> 8, f[d + 1] = a);
        this._position = d += 2;
        d > this._length && (this._length = d);
      };
      g.prototype.writeInt = function(a) {
        this.writeUnsignedInt(a);
      };
      g.prototype.write2Ints = function(a, d) {
        this.write2UnsignedInts(a, d);
      };
      g.prototype.write4Ints = function(a, d, f, e) {
        this.write4UnsignedInts(a, d, f, e);
      };
      g.prototype.writeUnsignedInt = function(a) {
        var d = this._position;
        this._ensureCapacity(d + 4);
        this._requestViews(2);
        if (this._littleEndian === g._nativeLittleEndian && 0 === (d & 3) && this._i32) {
          this._i32[d >> 2] = a;
        } else {
          var f = this._u8;
          this._littleEndian ? (f[d + 0] = a, f[d + 1] = a >> 8, f[d + 2] = a >> 16, f[d + 3] = a >> 24) : (f[d + 0] = a >> 24, f[d + 1] = a >> 16, f[d + 2] = a >> 8, f[d + 3] = a);
        }
        this._position = d += 4;
        d > this._length && (this._length = d);
      };
      g.prototype.write2UnsignedInts = function(a, d) {
        var f = this._position;
        this._ensureCapacity(f + 8);
        this._requestViews(2);
        this._littleEndian === g._nativeLittleEndian && 0 === (f & 3) && this._i32 ? (this._i32[(f >> 2) + 0] = a, this._i32[(f >> 2) + 1] = d, this._position = f += 8, f > this._length && (this._length = f)) : (this.writeUnsignedInt(a), this.writeUnsignedInt(d));
      };
      g.prototype.write4UnsignedInts = function(a, d, f, e) {
        var c = this._position;
        this._ensureCapacity(c + 16);
        this._requestViews(2);
        this._littleEndian === g._nativeLittleEndian && 0 === (c & 3) && this._i32 ? (this._i32[(c >> 2) + 0] = a, this._i32[(c >> 2) + 1] = d, this._i32[(c >> 2) + 2] = f, this._i32[(c >> 2) + 3] = e, this._position = c += 16, c > this._length && (this._length = c)) : (this.writeUnsignedInt(a), this.writeUnsignedInt(d), this.writeUnsignedInt(f), this.writeUnsignedInt(e));
      };
      g.prototype.writeFloat = function(a) {
        var d = this._position;
        this._ensureCapacity(d + 4);
        this._requestViews(4);
        if (this._littleEndian === g._nativeLittleEndian && 0 === (d & 3) && this._f32) {
          this._f32[d >> 2] = a;
        } else {
          var f = this._u8;
          h.IntegerUtilities.f32[0] = a;
          a = h.IntegerUtilities.u8;
          this._littleEndian ? (f[d + 0] = a[0], f[d + 1] = a[1], f[d + 2] = a[2], f[d + 3] = a[3]) : (f[d + 0] = a[3], f[d + 1] = a[2], f[d + 2] = a[1], f[d + 3] = a[0]);
        }
        this._position = d += 4;
        d > this._length && (this._length = d);
      };
      g.prototype.write6Floats = function(a, d, f, e, c, m) {
        var b = this._position;
        this._ensureCapacity(b + 24);
        this._requestViews(4);
        this._littleEndian === g._nativeLittleEndian && 0 === (b & 3) && this._f32 ? (this._f32[(b >> 2) + 0] = a, this._f32[(b >> 2) + 1] = d, this._f32[(b >> 2) + 2] = f, this._f32[(b >> 2) + 3] = e, this._f32[(b >> 2) + 4] = c, this._f32[(b >> 2) + 5] = m, this._position = b += 24, b > this._length && (this._length = b)) : (this.writeFloat(a), this.writeFloat(d), this.writeFloat(f), this.writeFloat(e), this.writeFloat(c), this.writeFloat(m));
      };
      g.prototype.writeDouble = function(a) {
        var d = this._position;
        this._ensureCapacity(d + 8);
        var f = this._u8;
        h.IntegerUtilities.f64[0] = a;
        a = h.IntegerUtilities.u8;
        this._littleEndian ? (f[d + 0] = a[0], f[d + 1] = a[1], f[d + 2] = a[2], f[d + 3] = a[3], f[d + 4] = a[4], f[d + 5] = a[5], f[d + 6] = a[6], f[d + 7] = a[7]) : (f[d + 0] = a[7], f[d + 1] = a[6], f[d + 2] = a[5], f[d + 3] = a[4], f[d + 4] = a[3], f[d + 5] = a[2], f[d + 6] = a[1], f[d + 7] = a[0]);
        this._position = d += 8;
        d > this._length && (this._length = d);
      };
      g.prototype.readRawBytes = function() {
        return new Int8Array(this._buffer, 0, this._length);
      };
      g.prototype.writeUTF = function(a) {
        a = r(a);
        a = w(a);
        this.writeShort(a.length);
        this.writeRawBytes(a);
      };
      g.prototype.writeUTFBytes = function(a) {
        a = r(a);
        a = w(a);
        this.writeRawBytes(a);
      };
      g.prototype.readUTF = function() {
        return this.readUTFBytes(this.readShort());
      };
      g.prototype.readUTFBytes = function(a) {
        a >>>= 0;
        var d = this._position;
        d + a > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        this._position += a;
        return l(new Int8Array(this._buffer, d, a));
      };
      Object.defineProperty(g.prototype, "length", {get:function() {
        return this._length;
      }, set:function(b) {
        b >>>= 0;
        b > this._buffer.byteLength && this._ensureCapacity(b);
        this._length = b;
        this._position = a(this._position, 0, this._length);
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(g.prototype, "bytesAvailable", {get:function() {
        return this._length - this._position;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(g.prototype, "position", {get:function() {
        return this._position;
      }, set:function(a) {
        this._position = a >>> 0;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(g.prototype, "buffer", {get:function() {
        return this._buffer;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(g.prototype, "bytes", {get:function() {
        return this._u8;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(g.prototype, "ints", {get:function() {
        this._requestViews(2);
        return this._i32;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(g.prototype, "objectEncoding", {get:function() {
        return this._objectEncoding;
      }, set:function(a) {
        this._objectEncoding = a >>> 0;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(g.prototype, "endian", {get:function() {
        return this._littleEndian ? "littleEndian" : "bigEndian";
      }, set:function(a) {
        a = r(a);
        this._littleEndian = "auto" === a ? g._nativeLittleEndian : "littleEndian" === a;
      }, enumerable:!0, configurable:!0});
      g.prototype.toString = function() {
        return l(new Int8Array(this._buffer, 0, this._length));
      };
      g.prototype.toBlob = function(a) {
        return new Blob([new Int8Array(this._buffer, this._position, this._length)], {type:a});
      };
      g.prototype.writeMultiByte = function(a, d) {
        b("packageInternal flash.utils.ObjectOutput::writeMultiByte");
      };
      g.prototype.readMultiByte = function(a, d) {
        b("packageInternal flash.utils.ObjectInput::readMultiByte");
      };
      g.prototype.getValue = function(a) {
        a |= 0;
        return a >= this._length ? void 0 : this._u8[a];
      };
      g.prototype.setValue = function(a, d) {
        a |= 0;
        var f = a + 1;
        this._ensureCapacity(f);
        this._u8[a] = d;
        f > this._length && (this._length = f);
      };
      g.prototype.readFixed = function() {
        return this.readInt() / 65536;
      };
      g.prototype.readFixed8 = function() {
        return this.readShort() / 256;
      };
      g.prototype.readFloat16 = function() {
        var a = this.readUnsignedShort(), d = a >> 15 ? -1 : 1, f = (a & 31744) >> 10, a = a & 1023;
        return f ? 31 === f ? a ? NaN : Infinity * d : d * Math.pow(2, f - 15) * (1 + a / 1024) : a / 1024 * Math.pow(2, -14) * d;
      };
      g.prototype.readEncodedU32 = function() {
        var a = this.readUnsignedByte();
        if (!(a & 128)) {
          return a;
        }
        a = a & 127 | this.readUnsignedByte() << 7;
        if (!(a & 16384)) {
          return a;
        }
        a = a & 16383 | this.readUnsignedByte() << 14;
        if (!(a & 2097152)) {
          return a;
        }
        a = a & 2097151 | this.readUnsignedByte() << 21;
        return a & 268435456 ? a & 268435455 | this.readUnsignedByte() << 28 : a;
      };
      g.prototype.readBits = function(a) {
        return this.readUnsignedBits(a) << 32 - a >> 32 - a;
      };
      g.prototype.readUnsignedBits = function(a) {
        for (var d = this._bitBuffer, f = this._bitLength;a > f;) {
          d = d << 8 | this.readUnsignedByte(), f += 8;
        }
        f -= a;
        a = d >>> f & t[a];
        this._bitBuffer = d;
        this._bitLength = f;
        return a;
      };
      g.prototype.readFixedBits = function(a) {
        return this.readBits(a) / 65536;
      };
      g.prototype.readString = function(a) {
        var d = this._position;
        if (a) {
          d + a > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError), this._position += a;
        } else {
          a = 0;
          for (var f = d;f < this._length && this._u8[f];f++) {
            a++;
          }
          this._position += a + 1;
        }
        return l(new Int8Array(this._buffer, d, a));
      };
      g.prototype.align = function() {
        this._bitLength = this._bitBuffer = 0;
      };
      g.prototype.deflate = function() {
        this.compress("deflate");
      };
      g.prototype.inflate = function() {
        this.uncompress("deflate");
      };
      g.prototype.compress = function(a) {
        a = 0 === arguments.length ? "zlib" : r(a);
        var d;
        switch(a) {
          case "zlib":
            d = new q.Deflate(!0);
            break;
          case "deflate":
            d = new q.Deflate(!1);
            break;
          default:
            return;
        }
        var f = new g;
        d.onData = f.writeRawBytes.bind(f);
        d.push(this._u8.subarray(0, this._length));
        d.close();
        this._ensureCapacity(f._u8.length);
        this._u8.set(f._u8);
        this.length = f.length;
        this._position = 0;
      };
      g.prototype.uncompress = function(a) {
        a = 0 === arguments.length ? "zlib" : r(a);
        var d;
        switch(a) {
          case "zlib":
            d = q.Inflate.create(!0);
            break;
          case "deflate":
            d = q.Inflate.create(!1);
            break;
          case "lzma":
            d = new q.LzmaDecoder(!1);
            break;
          default:
            return;
        }
        var f = new g, e;
        d.onData = f.writeRawBytes.bind(f);
        d.onError = function(c) {
          return e = c;
        };
        d.push(this._u8.subarray(0, this._length));
        e && this.sec.throwError("IOError", Errors.CompressedDataError);
        d.close();
        this._ensureCapacity(f._u8.length);
        this._u8.set(f._u8);
        this.length = f.length;
        this._position = 0;
      };
      g._nativeLittleEndian = 1 === (new Int8Array((new Int32Array([1])).buffer))[0];
      g.INITIAL_SIZE = 128;
      g._arrayBufferPool = new h.ArrayBufferPool;
      return g;
    }();
    q.DataBuffer = g;
  })(h.ArrayUtilities || (h.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  var q = h.ArrayUtilities.DataBuffer, r = h.ArrayUtilities.ensureTypedArrayCapacity;
  (function(b) {
    b[b.BeginSolidFill = 1] = "BeginSolidFill";
    b[b.BeginGradientFill = 2] = "BeginGradientFill";
    b[b.BeginBitmapFill = 3] = "BeginBitmapFill";
    b[b.EndFill = 4] = "EndFill";
    b[b.LineStyleSolid = 5] = "LineStyleSolid";
    b[b.LineStyleGradient = 6] = "LineStyleGradient";
    b[b.LineStyleBitmap = 7] = "LineStyleBitmap";
    b[b.LineEnd = 8] = "LineEnd";
    b[b.MoveTo = 9] = "MoveTo";
    b[b.LineTo = 10] = "LineTo";
    b[b.CurveTo = 11] = "CurveTo";
    b[b.CubicCurveTo = 12] = "CubicCurveTo";
  })(h.PathCommand || (h.PathCommand = {}));
  (function(b) {
    b[b.Linear = 16] = "Linear";
    b[b.Radial = 18] = "Radial";
  })(h.GradientType || (h.GradientType = {}));
  (function(b) {
    b[b.Pad = 0] = "Pad";
    b[b.Reflect = 1] = "Reflect";
    b[b.Repeat = 2] = "Repeat";
  })(h.GradientSpreadMethod || (h.GradientSpreadMethod = {}));
  (function(b) {
    b[b.RGB = 0] = "RGB";
    b[b.LinearRGB = 1] = "LinearRGB";
  })(h.GradientInterpolationMethod || (h.GradientInterpolationMethod = {}));
  (function(b) {
    b[b.None = 0] = "None";
    b[b.Normal = 1] = "Normal";
    b[b.Vertical = 2] = "Vertical";
    b[b.Horizontal = 3] = "Horizontal";
  })(h.LineScaleMode || (h.LineScaleMode = {}));
  var b = function() {
    return function(b, a, k, t, g, p, u, n, v, d, f) {
      this.commands = b;
      this.commandsPosition = a;
      this.coordinates = k;
      this.morphCoordinates = t;
      this.coordinatesPosition = g;
      this.styles = p;
      this.stylesLength = u;
      this.morphStyles = n;
      this.morphStylesLength = v;
      this.hasFills = d;
      this.hasLines = f;
    };
  }();
  h.PlainObjectShapeData = b;
  var w;
  (function(b) {
    b[b.Commands = 32] = "Commands";
    b[b.Coordinates = 128] = "Coordinates";
    b[b.Styles = 16] = "Styles";
  })(w || (w = {}));
  w = function() {
    function l(a) {
      void 0 === a && (a = !0);
      a && this.clear();
    }
    l.FromPlainObject = function(a) {
      var b = new l(!1);
      b.commands = a.commands;
      b.coordinates = a.coordinates;
      b.morphCoordinates = a.morphCoordinates;
      b.commandsPosition = a.commandsPosition;
      b.coordinatesPosition = a.coordinatesPosition;
      b.styles = q.FromArrayBuffer(a.styles, a.stylesLength);
      b.styles.endian = "auto";
      a.morphStyles && (b.morphStyles = q.FromArrayBuffer(a.morphStyles, a.morphStylesLength), b.morphStyles.endian = "auto");
      b.hasFills = a.hasFills;
      b.hasLines = a.hasLines;
      return b;
    };
    l.prototype.moveTo = function(a, b) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = 9;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = b;
    };
    l.prototype.lineTo = function(a, b) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = 10;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = b;
    };
    l.prototype.curveTo = function(a, b, t, g) {
      this.ensurePathCapacities(1, 4);
      this.commands[this.commandsPosition++] = 11;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = t;
      this.coordinates[this.coordinatesPosition++] = g;
    };
    l.prototype.cubicCurveTo = function(a, b, t, g, p, l) {
      this.ensurePathCapacities(1, 6);
      this.commands[this.commandsPosition++] = 12;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = t;
      this.coordinates[this.coordinatesPosition++] = g;
      this.coordinates[this.coordinatesPosition++] = p;
      this.coordinates[this.coordinatesPosition++] = l;
    };
    l.prototype.beginFill = function(a) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 1;
      this.styles.writeUnsignedInt(a);
      this.hasFills = !0;
    };
    l.prototype.writeMorphFill = function(a) {
      this.morphStyles.writeUnsignedInt(a);
    };
    l.prototype.endFill = function() {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 4;
    };
    l.prototype.endLine = function() {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 8;
    };
    l.prototype.lineStyle = function(a, b, t, g, p, l, n) {
      this.ensurePathCapacities(2, 0);
      this.commands[this.commandsPosition++] = 5;
      this.coordinates[this.coordinatesPosition++] = a;
      a = this.styles;
      a.writeUnsignedInt(b);
      a.writeBoolean(t);
      a.writeUnsignedByte(g);
      a.writeUnsignedByte(p);
      a.writeUnsignedByte(l);
      a.writeUnsignedByte(n);
      this.hasLines = !0;
    };
    l.prototype.writeMorphLineStyle = function(a, b) {
      this.morphCoordinates[this.coordinatesPosition - 1] = a;
      this.morphStyles.writeUnsignedInt(b);
    };
    l.prototype.beginBitmap = function(a, b, t, g, p) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = a;
      a = this.styles;
      a.writeUnsignedInt(b);
      this._writeStyleMatrix(t, !1);
      a.writeBoolean(g);
      a.writeBoolean(p);
      this.hasFills = !0;
    };
    l.prototype.writeMorphBitmap = function(a) {
      this._writeStyleMatrix(a, !0);
    };
    l.prototype.beginGradient = function(a, b, t, g, p, l, n, v) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = a;
      a = this.styles;
      a.writeUnsignedByte(g);
      a.writeShort(v);
      this._writeStyleMatrix(p, !1);
      g = b.length;
      a.writeByte(g);
      for (p = 0;p < g;p++) {
        a.writeUnsignedByte(t[p]), a.writeUnsignedInt(b[p]);
      }
      a.writeUnsignedByte(l);
      a.writeUnsignedByte(n);
      this.hasFills = !0;
    };
    l.prototype.writeMorphGradient = function(a, b, t) {
      this._writeStyleMatrix(t, !0);
      t = this.morphStyles;
      for (var g = 0;g < a.length;g++) {
        t.writeUnsignedByte(b[g]), t.writeUnsignedInt(a[g]);
      }
    };
    l.prototype.writeCommandAndCoordinates = function(a, b, t) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = t;
    };
    l.prototype.writeCoordinates = function(a, b) {
      this.ensurePathCapacities(0, 2);
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = b;
    };
    l.prototype.writeMorphCoordinates = function(a, b) {
      this.morphCoordinates = r(this.morphCoordinates, this.coordinatesPosition);
      this.morphCoordinates[this.coordinatesPosition - 2] = a;
      this.morphCoordinates[this.coordinatesPosition - 1] = b;
    };
    l.prototype.clear = function() {
      this.commandsPosition = this.coordinatesPosition = 0;
      this.commands = new Uint8Array(32);
      this.coordinates = new Int32Array(128);
      this.styles = new q(16);
      this.styles.endian = "auto";
      this.hasFills = this.hasLines = !1;
    };
    l.prototype.isEmpty = function() {
      return 0 === this.commandsPosition;
    };
    l.prototype.clone = function() {
      var a = new l(!1);
      a.commands = new Uint8Array(this.commands);
      a.commandsPosition = this.commandsPosition;
      a.coordinates = new Int32Array(this.coordinates);
      a.coordinatesPosition = this.coordinatesPosition;
      a.styles = new q(this.styles.length);
      a.styles.writeRawBytes(this.styles.bytes.subarray(0, this.styles.length));
      this.morphStyles && (a.morphStyles = new q(this.morphStyles.length), a.morphStyles.writeRawBytes(this.morphStyles.bytes.subarray(0, this.morphStyles.length)));
      a.hasFills = this.hasFills;
      a.hasLines = this.hasLines;
      return a;
    };
    l.prototype.toPlainObject = function() {
      return new b(this.commands, this.commandsPosition, this.coordinates, this.morphCoordinates, this.coordinatesPosition, this.styles.buffer, this.styles.length, this.morphStyles && this.morphStyles.buffer, this.morphStyles ? this.morphStyles.length : 0, this.hasFills, this.hasLines);
    };
    Object.defineProperty(l.prototype, "buffers", {get:function() {
      var a = [this.commands.buffer, this.coordinates.buffer, this.styles.buffer];
      this.morphCoordinates && a.push(this.morphCoordinates.buffer);
      this.morphStyles && a.push(this.morphStyles.buffer);
      return a;
    }, enumerable:!0, configurable:!0});
    l.prototype._writeStyleMatrix = function(a, b) {
      (b ? this.morphStyles : this.styles).write6Floats(a.a, a.b, a.c, a.d, a.tx, a.ty);
    };
    l.prototype.ensurePathCapacities = function(a, b) {
      this.commands = r(this.commands, this.commandsPosition + a);
      this.coordinates = r(this.coordinates, this.coordinatesPosition + b);
    };
    return l;
  }();
  h.ShapeData = w;
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(h) {
      (function(b) {
        b[b.CODE_END = 0] = "CODE_END";
        b[b.CODE_SHOW_FRAME = 1] = "CODE_SHOW_FRAME";
        b[b.CODE_DEFINE_SHAPE = 2] = "CODE_DEFINE_SHAPE";
        b[b.CODE_FREE_CHARACTER = 3] = "CODE_FREE_CHARACTER";
        b[b.CODE_PLACE_OBJECT = 4] = "CODE_PLACE_OBJECT";
        b[b.CODE_REMOVE_OBJECT = 5] = "CODE_REMOVE_OBJECT";
        b[b.CODE_DEFINE_BITS = 6] = "CODE_DEFINE_BITS";
        b[b.CODE_DEFINE_BUTTON = 7] = "CODE_DEFINE_BUTTON";
        b[b.CODE_JPEG_TABLES = 8] = "CODE_JPEG_TABLES";
        b[b.CODE_SET_BACKGROUND_COLOR = 9] = "CODE_SET_BACKGROUND_COLOR";
        b[b.CODE_DEFINE_FONT = 10] = "CODE_DEFINE_FONT";
        b[b.CODE_DEFINE_TEXT = 11] = "CODE_DEFINE_TEXT";
        b[b.CODE_DO_ACTION = 12] = "CODE_DO_ACTION";
        b[b.CODE_DEFINE_FONT_INFO = 13] = "CODE_DEFINE_FONT_INFO";
        b[b.CODE_DEFINE_SOUND = 14] = "CODE_DEFINE_SOUND";
        b[b.CODE_START_SOUND = 15] = "CODE_START_SOUND";
        b[b.CODE_STOP_SOUND = 16] = "CODE_STOP_SOUND";
        b[b.CODE_DEFINE_BUTTON_SOUND = 17] = "CODE_DEFINE_BUTTON_SOUND";
        b[b.CODE_SOUND_STREAM_HEAD = 18] = "CODE_SOUND_STREAM_HEAD";
        b[b.CODE_SOUND_STREAM_BLOCK = 19] = "CODE_SOUND_STREAM_BLOCK";
        b[b.CODE_DEFINE_BITS_LOSSLESS = 20] = "CODE_DEFINE_BITS_LOSSLESS";
        b[b.CODE_DEFINE_BITS_JPEG2 = 21] = "CODE_DEFINE_BITS_JPEG2";
        b[b.CODE_DEFINE_SHAPE2 = 22] = "CODE_DEFINE_SHAPE2";
        b[b.CODE_DEFINE_BUTTON_CXFORM = 23] = "CODE_DEFINE_BUTTON_CXFORM";
        b[b.CODE_PROTECT = 24] = "CODE_PROTECT";
        b[b.CODE_PATHS_ARE_POSTSCRIPT = 25] = "CODE_PATHS_ARE_POSTSCRIPT";
        b[b.CODE_PLACE_OBJECT2 = 26] = "CODE_PLACE_OBJECT2";
        b[b.CODE_REMOVE_OBJECT2 = 28] = "CODE_REMOVE_OBJECT2";
        b[b.CODE_SYNC_FRAME = 29] = "CODE_SYNC_FRAME";
        b[b.CODE_FREE_ALL = 31] = "CODE_FREE_ALL";
        b[b.CODE_DEFINE_SHAPE3 = 32] = "CODE_DEFINE_SHAPE3";
        b[b.CODE_DEFINE_TEXT2 = 33] = "CODE_DEFINE_TEXT2";
        b[b.CODE_DEFINE_BUTTON2 = 34] = "CODE_DEFINE_BUTTON2";
        b[b.CODE_DEFINE_BITS_JPEG3 = 35] = "CODE_DEFINE_BITS_JPEG3";
        b[b.CODE_DEFINE_BITS_LOSSLESS2 = 36] = "CODE_DEFINE_BITS_LOSSLESS2";
        b[b.CODE_DEFINE_EDIT_TEXT = 37] = "CODE_DEFINE_EDIT_TEXT";
        b[b.CODE_DEFINE_VIDEO = 38] = "CODE_DEFINE_VIDEO";
        b[b.CODE_DEFINE_SPRITE = 39] = "CODE_DEFINE_SPRITE";
        b[b.CODE_NAME_CHARACTER = 40] = "CODE_NAME_CHARACTER";
        b[b.CODE_PRODUCT_INFO = 41] = "CODE_PRODUCT_INFO";
        b[b.CODE_DEFINE_TEXT_FORMAT = 42] = "CODE_DEFINE_TEXT_FORMAT";
        b[b.CODE_FRAME_LABEL = 43] = "CODE_FRAME_LABEL";
        b[b.CODE_DEFINE_BEHAVIOUR = 44] = "CODE_DEFINE_BEHAVIOUR";
        b[b.CODE_SOUND_STREAM_HEAD2 = 45] = "CODE_SOUND_STREAM_HEAD2";
        b[b.CODE_DEFINE_MORPH_SHAPE = 46] = "CODE_DEFINE_MORPH_SHAPE";
        b[b.CODE_GENERATE_FRAME = 47] = "CODE_GENERATE_FRAME";
        b[b.CODE_DEFINE_FONT2 = 48] = "CODE_DEFINE_FONT2";
        b[b.CODE_GEN_COMMAND = 49] = "CODE_GEN_COMMAND";
        b[b.CODE_DEFINE_COMMAND_OBJECT = 50] = "CODE_DEFINE_COMMAND_OBJECT";
        b[b.CODE_CHARACTER_SET = 51] = "CODE_CHARACTER_SET";
        b[b.CODE_EXTERNAL_FONT = 52] = "CODE_EXTERNAL_FONT";
        b[b.CODE_DEFINE_FUNCTION = 53] = "CODE_DEFINE_FUNCTION";
        b[b.CODE_PLACE_FUNCTION = 54] = "CODE_PLACE_FUNCTION";
        b[b.CODE_GEN_TAG_OBJECTS = 55] = "CODE_GEN_TAG_OBJECTS";
        b[b.CODE_EXPORT_ASSETS = 56] = "CODE_EXPORT_ASSETS";
        b[b.CODE_IMPORT_ASSETS = 57] = "CODE_IMPORT_ASSETS";
        b[b.CODE_ENABLE_DEBUGGER = 58] = "CODE_ENABLE_DEBUGGER";
        b[b.CODE_DO_INIT_ACTION = 59] = "CODE_DO_INIT_ACTION";
        b[b.CODE_DEFINE_VIDEO_STREAM = 60] = "CODE_DEFINE_VIDEO_STREAM";
        b[b.CODE_VIDEO_FRAME = 61] = "CODE_VIDEO_FRAME";
        b[b.CODE_DEFINE_FONT_INFO2 = 62] = "CODE_DEFINE_FONT_INFO2";
        b[b.CODE_DEBUG_ID = 63] = "CODE_DEBUG_ID";
        b[b.CODE_ENABLE_DEBUGGER2 = 64] = "CODE_ENABLE_DEBUGGER2";
        b[b.CODE_SCRIPT_LIMITS = 65] = "CODE_SCRIPT_LIMITS";
        b[b.CODE_SET_TAB_INDEX = 66] = "CODE_SET_TAB_INDEX";
        b[b.CODE_FILE_ATTRIBUTES = 69] = "CODE_FILE_ATTRIBUTES";
        b[b.CODE_PLACE_OBJECT3 = 70] = "CODE_PLACE_OBJECT3";
        b[b.CODE_IMPORT_ASSETS2 = 71] = "CODE_IMPORT_ASSETS2";
        b[b.CODE_DO_ABC_DEFINE = 72] = "CODE_DO_ABC_DEFINE";
        b[b.CODE_DEFINE_FONT_ALIGN_ZONES = 73] = "CODE_DEFINE_FONT_ALIGN_ZONES";
        b[b.CODE_CSM_TEXT_SETTINGS = 74] = "CODE_CSM_TEXT_SETTINGS";
        b[b.CODE_DEFINE_FONT3 = 75] = "CODE_DEFINE_FONT3";
        b[b.CODE_SYMBOL_CLASS = 76] = "CODE_SYMBOL_CLASS";
        b[b.CODE_METADATA = 77] = "CODE_METADATA";
        b[b.CODE_DEFINE_SCALING_GRID = 78] = "CODE_DEFINE_SCALING_GRID";
        b[b.CODE_DO_ABC = 82] = "CODE_DO_ABC";
        b[b.CODE_DEFINE_SHAPE4 = 83] = "CODE_DEFINE_SHAPE4";
        b[b.CODE_DEFINE_MORPH_SHAPE2 = 84] = "CODE_DEFINE_MORPH_SHAPE2";
        b[b.CODE_DEFINE_SCENE_AND_FRAME_LABEL_DATA = 86] = "CODE_DEFINE_SCENE_AND_FRAME_LABEL_DATA";
        b[b.CODE_DEFINE_BINARY_DATA = 87] = "CODE_DEFINE_BINARY_DATA";
        b[b.CODE_DEFINE_FONT_NAME = 88] = "CODE_DEFINE_FONT_NAME";
        b[b.CODE_START_SOUND2 = 89] = "CODE_START_SOUND2";
        b[b.CODE_DEFINE_BITS_JPEG4 = 90] = "CODE_DEFINE_BITS_JPEG4";
        b[b.CODE_DEFINE_FONT4 = 91] = "CODE_DEFINE_FONT4";
        b[b.CODE_TELEMETRY = 93] = "CODE_TELEMETRY";
      })(h.SwfTag || (h.SwfTag = {}));
      (function(b) {
        b[b.CODE_DEFINE_SHAPE = 2] = "CODE_DEFINE_SHAPE";
        b[b.CODE_DEFINE_BITS = 6] = "CODE_DEFINE_BITS";
        b[b.CODE_DEFINE_BUTTON = 7] = "CODE_DEFINE_BUTTON";
        b[b.CODE_DEFINE_FONT = 10] = "CODE_DEFINE_FONT";
        b[b.CODE_DEFINE_TEXT = 11] = "CODE_DEFINE_TEXT";
        b[b.CODE_DEFINE_SOUND = 14] = "CODE_DEFINE_SOUND";
        b[b.CODE_DEFINE_BITS_LOSSLESS = 20] = "CODE_DEFINE_BITS_LOSSLESS";
        b[b.CODE_DEFINE_BITS_JPEG2 = 21] = "CODE_DEFINE_BITS_JPEG2";
        b[b.CODE_DEFINE_SHAPE2 = 22] = "CODE_DEFINE_SHAPE2";
        b[b.CODE_DEFINE_SHAPE3 = 32] = "CODE_DEFINE_SHAPE3";
        b[b.CODE_DEFINE_TEXT2 = 33] = "CODE_DEFINE_TEXT2";
        b[b.CODE_DEFINE_BUTTON2 = 34] = "CODE_DEFINE_BUTTON2";
        b[b.CODE_DEFINE_BITS_JPEG3 = 35] = "CODE_DEFINE_BITS_JPEG3";
        b[b.CODE_DEFINE_BITS_LOSSLESS2 = 36] = "CODE_DEFINE_BITS_LOSSLESS2";
        b[b.CODE_DEFINE_EDIT_TEXT = 37] = "CODE_DEFINE_EDIT_TEXT";
        b[b.CODE_DEFINE_SPRITE = 39] = "CODE_DEFINE_SPRITE";
        b[b.CODE_DEFINE_MORPH_SHAPE = 46] = "CODE_DEFINE_MORPH_SHAPE";
        b[b.CODE_DEFINE_FONT2 = 48] = "CODE_DEFINE_FONT2";
        b[b.CODE_DEFINE_FONT3 = 75] = "CODE_DEFINE_FONT3";
        b[b.CODE_DEFINE_SHAPE4 = 83] = "CODE_DEFINE_SHAPE4";
        b[b.CODE_DEFINE_MORPH_SHAPE2 = 84] = "CODE_DEFINE_MORPH_SHAPE2";
        b[b.CODE_DEFINE_BINARY_DATA = 87] = "CODE_DEFINE_BINARY_DATA";
        b[b.CODE_DEFINE_BITS_JPEG4 = 90] = "CODE_DEFINE_BITS_JPEG4";
        b[b.CODE_DEFINE_FONT4 = 91] = "CODE_DEFINE_FONT4";
      })(h.DefinitionTags || (h.DefinitionTags = {}));
      (function(b) {
        b[b.CODE_DEFINE_BITS = 6] = "CODE_DEFINE_BITS";
        b[b.CODE_DEFINE_BITS_JPEG2 = 21] = "CODE_DEFINE_BITS_JPEG2";
        b[b.CODE_DEFINE_BITS_JPEG3 = 35] = "CODE_DEFINE_BITS_JPEG3";
        b[b.CODE_DEFINE_BITS_JPEG4 = 90] = "CODE_DEFINE_BITS_JPEG4";
      })(h.ImageDefinitionTags || (h.ImageDefinitionTags = {}));
      (function(b) {
        b[b.CODE_DEFINE_FONT = 10] = "CODE_DEFINE_FONT";
        b[b.CODE_DEFINE_FONT2 = 48] = "CODE_DEFINE_FONT2";
        b[b.CODE_DEFINE_FONT3 = 75] = "CODE_DEFINE_FONT3";
        b[b.CODE_DEFINE_FONT4 = 91] = "CODE_DEFINE_FONT4";
      })(h.FontDefinitionTags || (h.FontDefinitionTags = {}));
      (function(b) {
        b[b.CODE_PLACE_OBJECT = 4] = "CODE_PLACE_OBJECT";
        b[b.CODE_PLACE_OBJECT2 = 26] = "CODE_PLACE_OBJECT2";
        b[b.CODE_PLACE_OBJECT3 = 70] = "CODE_PLACE_OBJECT3";
        b[b.CODE_REMOVE_OBJECT = 5] = "CODE_REMOVE_OBJECT";
        b[b.CODE_REMOVE_OBJECT2 = 28] = "CODE_REMOVE_OBJECT2";
        b[b.CODE_START_SOUND = 15] = "CODE_START_SOUND";
        b[b.CODE_START_SOUND2 = 89] = "CODE_START_SOUND2";
      })(h.ControlTags || (h.ControlTags = {}));
      (function(b) {
        b[b.Move = 1] = "Move";
        b[b.HasCharacter = 2] = "HasCharacter";
        b[b.HasMatrix = 4] = "HasMatrix";
        b[b.HasColorTransform = 8] = "HasColorTransform";
        b[b.HasRatio = 16] = "HasRatio";
        b[b.HasName = 32] = "HasName";
        b[b.HasClipDepth = 64] = "HasClipDepth";
        b[b.HasClipActions = 128] = "HasClipActions";
        b[b.HasFilterList = 256] = "HasFilterList";
        b[b.HasBlendMode = 512] = "HasBlendMode";
        b[b.HasCacheAsBitmap = 1024] = "HasCacheAsBitmap";
        b[b.HasClassName = 2048] = "HasClassName";
        b[b.HasImage = 4096] = "HasImage";
        b[b.HasVisible = 8192] = "HasVisible";
        b[b.OpaqueBackground = 16384] = "OpaqueBackground";
        b[b.Reserved = 32768] = "Reserved";
      })(h.PlaceObjectFlags || (h.PlaceObjectFlags = {}));
      (function(b) {
        b[b.Load = 1] = "Load";
        b[b.EnterFrame = 2] = "EnterFrame";
        b[b.Unload = 4] = "Unload";
        b[b.MouseMove = 8] = "MouseMove";
        b[b.MouseDown = 16] = "MouseDown";
        b[b.MouseUp = 32] = "MouseUp";
        b[b.KeyDown = 64] = "KeyDown";
        b[b.KeyUp = 128] = "KeyUp";
        b[b.Data = 256] = "Data";
        b[b.Initialize = 512] = "Initialize";
        b[b.Press = 1024] = "Press";
        b[b.Release = 2048] = "Release";
        b[b.ReleaseOutside = 4096] = "ReleaseOutside";
        b[b.RollOver = 8192] = "RollOver";
        b[b.RollOut = 16384] = "RollOut";
        b[b.DragOver = 32768] = "DragOver";
        b[b.DragOut = 65536] = "DragOut";
        b[b.KeyPress = 131072] = "KeyPress";
        b[b.Construct = 262144] = "Construct";
      })(h.AVM1ClipEvents || (h.AVM1ClipEvents = {}));
    })(h.Parser || (h.Parser = {}));
  })(h.SWF || (h.SWF = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  var q = h.Debug.unexpected, r = function() {
    function b(b, l, a, k) {
      this.url = b;
      this.method = l;
      this.mimeType = a;
      this.data = k;
    }
    b.prototype.readAll = function(b, l) {
      var a = this.url, k = this.xhr = new XMLHttpRequest({mozSystem:!0});
      k.open(this.method || "GET", this.url, !0);
      k.responseType = "arraybuffer";
      b && (k.onprogress = function(a) {
        b(k.response, a.loaded, a.total);
      });
      k.onreadystatechange = function(b) {
        4 === k.readyState && (200 !== k.status && 0 !== k.status || null === k.response ? (q("Path: " + a + " not found."), l(null, k.statusText)) : l(k.response));
      };
      this.mimeType && k.setRequestHeader("Content-Type", this.mimeType);
      k.send(this.data || null);
    };
    b.prototype.readChunked = function(b, l, a, k, t, g) {
      if (0 >= b) {
        this.readAsync(l, a, k, t, g);
      } else {
        var p = 0, u = new Uint8Array(b), n = 0, v;
        this.readAsync(function(a, f) {
          v = f.total;
          for (var e = a.length, c = 0;p + e >= b;) {
            var m = b - p;
            u.set(a.subarray(c, c + m), p);
            c += m;
            e -= m;
            n += b;
            l(u, {loaded:n, total:v});
            p = 0;
          }
          u.set(a.subarray(c), p);
          p += e;
        }, a, k, function() {
          0 < p && (n += p, l(u.subarray(0, p), {loaded:n, total:v}), p = 0);
          t && t();
        }, g);
      }
    };
    b.prototype.readAsync = function(b, l, a, k, t) {
      var g = this.xhr = new XMLHttpRequest({mozSystem:!0}), p = this.url, u = 0, n = 0;
      g.open(this.method || "GET", p, !0);
      g.responseType = "moz-chunked-arraybuffer";
      var v = "moz-chunked-arraybuffer" !== g.responseType;
      v && (g.responseType = "arraybuffer");
      g.onprogress = function(a) {
        v || (u = a.loaded, n = a.total, a = new Uint8Array(g.response), u = Math.max(u, a.byteLength), n = Math.max(n, a.byteLength), b(a, {loaded:u, total:n}));
      };
      g.onreadystatechange = function(a) {
        2 === g.readyState && t && t(p, g.status, g.getAllResponseHeaders());
        4 === g.readyState && (200 !== g.status && 0 !== g.status || null === g.response && (0 === n || u !== n) ? l(g.statusText) : v && (a = g.response, b(new Uint8Array(a), {loaded:a.byteLength, total:a.byteLength})));
      };
      g.onload = function() {
        k && k();
      };
      this.mimeType && g.setRequestHeader("Content-Type", this.mimeType);
      g.send(this.data || null);
      a && a();
    };
    b.prototype.abort = function() {
      this.xhr && (this.xhr.abort(), this.xhr = null);
    };
    return b;
  }();
  h.BinaryFileReader = r;
})(Shumway || (Shumway = {}));
(function(h) {
  var q = function() {
    function h() {
      this.isAS3TraceOn = !0;
      this._startTime = Date.now();
    }
    Object.defineProperty(h.prototype, "currentTimestamp", {get:function() {
      return Date.now() - this._startTime;
    }, enumerable:!0, configurable:!0});
    h.prototype._writeLine = function(b) {
    };
    h.prototype.writeAS3Trace = function(b) {
    };
    return h;
  }();
  h.FlashLog = q;
  h.flashlog = null;
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(b) {
      b[b.Objects = 0] = "Objects";
      b[b.References = 1] = "References";
    })(h.RemotingPhase || (h.RemotingPhase = {}));
    (function(b) {
      b[b.HasMatrix = 1] = "HasMatrix";
      b[b.HasBounds = 2] = "HasBounds";
      b[b.HasChildren = 4] = "HasChildren";
      b[b.HasColorTransform = 8] = "HasColorTransform";
      b[b.HasClipRect = 16] = "HasClipRect";
      b[b.HasMiscellaneousProperties = 32] = "HasMiscellaneousProperties";
      b[b.HasMask = 64] = "HasMask";
      b[b.HasClip = 128] = "HasClip";
    })(h.MessageBits || (h.MessageBits = {}));
    (function(b) {
      b[b.None = 0] = "None";
      b[b.Asset = 134217728] = "Asset";
    })(h.IDMask || (h.IDMask = {}));
    (function(b) {
      b[b.EOF = 0] = "EOF";
      b[b.UpdateFrame = 100] = "UpdateFrame";
      b[b.UpdateGraphics = 101] = "UpdateGraphics";
      b[b.UpdateBitmapData = 102] = "UpdateBitmapData";
      b[b.UpdateTextContent = 103] = "UpdateTextContent";
      b[b.UpdateStage = 104] = "UpdateStage";
      b[b.UpdateNetStream = 105] = "UpdateNetStream";
      b[b.RequestBitmapData = 106] = "RequestBitmapData";
      b[b.DrawToBitmap = 200] = "DrawToBitmap";
      b[b.MouseEvent = 300] = "MouseEvent";
      b[b.KeyboardEvent = 301] = "KeyboardEvent";
      b[b.FocusEvent = 302] = "FocusEvent";
    })(h.MessageTag || (h.MessageTag = {}));
    (function(b) {
      b[b.Blur = 0] = "Blur";
      b[b.DropShadow = 1] = "DropShadow";
      b[b.ColorMatrix = 2] = "ColorMatrix";
    })(h.FilterType || (h.FilterType = {}));
    (function(b) {
      b[b.Identity = 0] = "Identity";
      b[b.AlphaMultiplierOnly = 1] = "AlphaMultiplierOnly";
      b[b.All = 2] = "All";
    })(h.ColorTransformEncoding || (h.ColorTransformEncoding = {}));
    (function(b) {
      b[b.Initialized = 0] = "Initialized";
      b[b.Metadata = 1] = "Metadata";
      b[b.PlayStart = 2] = "PlayStart";
      b[b.PlayStop = 3] = "PlayStop";
      b[b.BufferEmpty = 4] = "BufferEmpty";
      b[b.BufferFull = 5] = "BufferFull";
      b[b.Pause = 6] = "Pause";
      b[b.Unpause = 7] = "Unpause";
      b[b.Seeking = 8] = "Seeking";
      b[b.Seeked = 9] = "Seeked";
      b[b.Progress = 10] = "Progress";
      b[b.Error = 11] = "Error";
    })(h.VideoPlaybackEvent || (h.VideoPlaybackEvent = {}));
    (function(b) {
      b[b.Init = 1] = "Init";
      b[b.Pause = 2] = "Pause";
      b[b.Seek = 3] = "Seek";
      b[b.GetTime = 4] = "GetTime";
      b[b.GetBufferLength = 5] = "GetBufferLength";
      b[b.SetSoundLevels = 6] = "SetSoundLevels";
      b[b.GetBytesLoaded = 7] = "GetBytesLoaded";
      b[b.GetBytesTotal = 8] = "GetBytesTotal";
      b[b.EnsurePlaying = 9] = "EnsurePlaying";
    })(h.VideoControlEvent || (h.VideoControlEvent = {}));
    (function(b) {
      b[b.ShowAll = 0] = "ShowAll";
      b[b.ExactFit = 1] = "ExactFit";
      b[b.NoBorder = 2] = "NoBorder";
      b[b.NoScale = 4] = "NoScale";
    })(h.StageScaleMode || (h.StageScaleMode = {}));
    (function(b) {
      b[b.None = 0] = "None";
      b[b.Top = 1] = "Top";
      b[b.Bottom = 2] = "Bottom";
      b[b.Left = 4] = "Left";
      b[b.Right = 8] = "Right";
      b[b.TopLeft = b.Top | b.Left] = "TopLeft";
      b[b.BottomLeft = b.Bottom | b.Left] = "BottomLeft";
      b[b.BottomRight = b.Bottom | b.Right] = "BottomRight";
      b[b.TopRight = b.Top | b.Right] = "TopRight";
    })(h.StageAlignFlags || (h.StageAlignFlags = {}));
    h.MouseEventNames = "click dblclick mousedown mousemove mouseup mouseover mouseout".split(" ");
    h.KeyboardEventNames = ["keydown", "keypress", "keyup"];
    (function(b) {
      b[b.CtrlKey = 1] = "CtrlKey";
      b[b.AltKey = 2] = "AltKey";
      b[b.ShiftKey = 4] = "ShiftKey";
    })(h.KeyboardEventFlags || (h.KeyboardEventFlags = {}));
    (function(b) {
      b[b.DocumentHidden = 0] = "DocumentHidden";
      b[b.DocumentVisible = 1] = "DocumentVisible";
      b[b.WindowBlur = 2] = "WindowBlur";
      b[b.WindowFocus = 3] = "WindowFocus";
    })(h.FocusEventType || (h.FocusEventType = {}));
    var r = function() {
      function b(b, l) {
        this.window = b;
        this.target = l;
      }
      Object.defineProperty(b.prototype, "onAsyncMessage", {set:function(b) {
        this.window.addEventListener("message", function(l) {
          Promise.resolve(l.data).then(function(a) {
            b(a);
          });
        });
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(b.prototype, "onSyncMessage", {set:function(b) {
        this.window.addEventListener("syncmessage", function(l) {
          l = l.detail;
          l.result = b(l.msg);
        });
      }, enumerable:!0, configurable:!0});
      b.prototype.postAsyncMessage = function(b, l) {
        this.target.postMessage(b, "*", l);
      };
      b.prototype.sendSyncMessage = function(b, l) {
        var a = this.target.document.createEvent("CustomEvent"), k = {msg:b, result:void 0};
        a.initCustomEvent("syncmessage", !1, !1, k);
        this.target.dispatchEvent(a);
        return k.result;
      };
      return b;
    }();
    h.WindowTransportPeer = r;
    r = function() {
      function b() {
      }
      Object.defineProperty(b.prototype, "onAsyncMessage", {set:function(b) {
        ShumwayCom.setAsyncMessageCallback(b);
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(b.prototype, "onSyncMessage", {set:function(b) {
        ShumwayCom.setSyncMessageCallback(b);
      }, enumerable:!0, configurable:!0});
      b.prototype.postAsyncMessage = function(b, l) {
        ShumwayCom.postAsyncMessage(b);
      };
      b.prototype.sendSyncMessage = function(b, l) {
        return ShumwayCom.sendSyncMessage(b);
      };
      return b;
    }();
    h.ShumwayComTransportPeer = r;
  })(h.Remoting || (h.Remoting = {}));
})(Shumway || (Shumway = {}));
var throwError, Errors;
(function(h) {
  (function(h) {
    (function(h) {
      var b = function() {
        function b() {
        }
        b.toRGBA = function(a, b, t, g) {
          void 0 === g && (g = 1);
          return "rgba(" + a + "," + b + "," + t + "," + g + ")";
        };
        return b;
      }();
      h.UI = b;
      var q = function() {
        function l() {
        }
        l.prototype.tabToolbar = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(37, 44, 51, a);
        };
        l.prototype.toolbars = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(52, 60, 69, a);
        };
        l.prototype.selectionBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(29, 79, 115, a);
        };
        l.prototype.selectionText = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(245, 247, 250, a);
        };
        l.prototype.splitters = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(0, 0, 0, a);
        };
        l.prototype.bodyBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(17, 19, 21, a);
        };
        l.prototype.sidebarBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(24, 29, 32, a);
        };
        l.prototype.attentionBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(161, 134, 80, a);
        };
        l.prototype.bodyText = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(143, 161, 178, a);
        };
        l.prototype.foregroundTextGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(182, 186, 191, a);
        };
        l.prototype.contentTextHighContrast = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(169, 186, 203, a);
        };
        l.prototype.contentTextGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(143, 161, 178, a);
        };
        l.prototype.contentTextDarkGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(95, 115, 135, a);
        };
        l.prototype.blueHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(70, 175, 227, a);
        };
        l.prototype.purpleHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(107, 122, 187, a);
        };
        l.prototype.pinkHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(223, 128, 255, a);
        };
        l.prototype.redHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(235, 83, 104, a);
        };
        l.prototype.orangeHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(217, 102, 41, a);
        };
        l.prototype.lightOrangeHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(217, 155, 40, a);
        };
        l.prototype.greenHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(112, 191, 83, a);
        };
        l.prototype.blueGreyHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(94, 136, 176, a);
        };
        return l;
      }();
      h.UIThemeDark = q;
      q = function() {
        function l() {
        }
        l.prototype.tabToolbar = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(235, 236, 237, a);
        };
        l.prototype.toolbars = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(240, 241, 242, a);
        };
        l.prototype.selectionBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(76, 158, 217, a);
        };
        l.prototype.selectionText = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(245, 247, 250, a);
        };
        l.prototype.splitters = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(170, 170, 170, a);
        };
        l.prototype.bodyBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(252, 252, 252, a);
        };
        l.prototype.sidebarBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(247, 247, 247, a);
        };
        l.prototype.attentionBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(161, 134, 80, a);
        };
        l.prototype.bodyText = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(24, 25, 26, a);
        };
        l.prototype.foregroundTextGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(88, 89, 89, a);
        };
        l.prototype.contentTextHighContrast = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(41, 46, 51, a);
        };
        l.prototype.contentTextGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(143, 161, 178, a);
        };
        l.prototype.contentTextDarkGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(102, 115, 128, a);
        };
        l.prototype.blueHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(0, 136, 204, a);
        };
        l.prototype.purpleHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(91, 95, 255, a);
        };
        l.prototype.pinkHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(184, 46, 229, a);
        };
        l.prototype.redHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(237, 38, 85, a);
        };
        l.prototype.orangeHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(241, 60, 0, a);
        };
        l.prototype.lightOrangeHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(217, 126, 0, a);
        };
        l.prototype.greenHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(44, 187, 15, a);
        };
        l.prototype.blueGreyHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(95, 136, 176, a);
        };
        return l;
      }();
      h.UIThemeLight = q;
    })(h.Theme || (h.Theme = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(h) {
      var b = function() {
        function b(l, a) {
          this._buffers = l || [];
          this._snapshots = [];
          this._windowStart = this._startTime = a;
          this._maxDepth = 0;
        }
        b.prototype.addBuffer = function(b) {
          this._buffers.push(b);
        };
        b.prototype.getSnapshotAt = function(b) {
          return this._snapshots[b];
        };
        Object.defineProperty(b.prototype, "hasSnapshots", {get:function() {
          return 0 < this.snapshotCount;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(b.prototype, "snapshotCount", {get:function() {
          return this._snapshots.length;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(b.prototype, "startTime", {get:function() {
          return this._startTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(b.prototype, "endTime", {get:function() {
          return this._endTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(b.prototype, "totalTime", {get:function() {
          return this.endTime - this.startTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(b.prototype, "windowStart", {get:function() {
          return this._windowStart;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(b.prototype, "windowEnd", {get:function() {
          return this._windowEnd;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(b.prototype, "windowLength", {get:function() {
          return this.windowEnd - this.windowStart;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(b.prototype, "maxDepth", {get:function() {
          return this._maxDepth;
        }, enumerable:!0, configurable:!0});
        b.prototype.forEachSnapshot = function(b) {
          for (var a = 0, k = this.snapshotCount;a < k;a++) {
            b(this._snapshots[a], a);
          }
        };
        b.prototype.createSnapshots = function() {
          var b = Number.MIN_VALUE, a = 0;
          for (this._snapshots = [];0 < this._buffers.length;) {
            var k = this._buffers.shift().createSnapshot();
            k && (b < k.endTime && (b = k.endTime), a < k.maxDepth && (a = k.maxDepth), this._snapshots.push(k));
          }
          this._windowEnd = this._endTime = b;
          this._maxDepth = a;
        };
        b.prototype.setWindow = function(b, a) {
          if (b > a) {
            var k = b;
            b = a;
            a = k;
          }
          k = Math.min(a - b, this.totalTime);
          b < this._startTime ? (b = this._startTime, a = this._startTime + k) : a > this._endTime && (b = this._endTime - k, a = this._endTime);
          this._windowStart = b;
          this._windowEnd = a;
        };
        b.prototype.moveWindowTo = function(b) {
          this.setWindow(b - this.windowLength / 2, b + this.windowLength / 2);
        };
        return b;
      }();
      h.Profile = b;
    })(h.Profiler || (h.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(h, q) {
  function r() {
    this.constructor = h;
  }
  for (var b in q) {
    q.hasOwnProperty(b) && (h[b] = q[b]);
  }
  r.prototype = q.prototype;
  h.prototype = new r;
};
(function(h) {
  (function(h) {
    (function(h) {
      var b = function() {
        return function(b) {
          this.kind = b;
          this.totalTime = this.selfTime = this.count = 0;
        };
      }();
      h.TimelineFrameStatistics = b;
      var q = function() {
        function l(a, b, t, g, p, u) {
          this.parent = a;
          this.kind = b;
          this.startData = t;
          this.endData = g;
          this.startTime = p;
          this.endTime = u;
          this.maxDepth = 0;
        }
        Object.defineProperty(l.prototype, "totalTime", {get:function() {
          return this.endTime - this.startTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(l.prototype, "selfTime", {get:function() {
          var a = this.totalTime;
          if (this.children) {
            for (var b = 0, t = this.children.length;b < t;b++) {
              var g = this.children[b], a = a - (g.endTime - g.startTime)
            }
          }
          return a;
        }, enumerable:!0, configurable:!0});
        l.prototype.getChildIndex = function(a) {
          for (var b = this.children, t = 0;t < b.length;t++) {
            if (b[t].endTime > a) {
              return t;
            }
          }
          return 0;
        };
        l.prototype.getChildRange = function(a, b) {
          if (this.children && a <= this.endTime && b >= this.startTime && b >= a) {
            var t = this._getNearestChild(a), g = this._getNearestChildReverse(b);
            if (t <= g) {
              return a = this.children[t].startTime, b = this.children[g].endTime, {startIndex:t, endIndex:g, startTime:a, endTime:b, totalTime:b - a};
            }
          }
          return null;
        };
        l.prototype._getNearestChild = function(a) {
          var b = this.children;
          if (b && b.length) {
            if (a <= b[0].endTime) {
              return 0;
            }
            for (var t, g = 0, p = b.length - 1;p > g;) {
              t = (g + p) / 2 | 0;
              var u = b[t];
              if (a >= u.startTime && a <= u.endTime) {
                return t;
              }
              a > u.endTime ? g = t + 1 : p = t;
            }
            return Math.ceil((g + p) / 2);
          }
          return 0;
        };
        l.prototype._getNearestChildReverse = function(a) {
          var b = this.children;
          if (b && b.length) {
            var t = b.length - 1;
            if (a >= b[t].startTime) {
              return t;
            }
            for (var g, p = 0;t > p;) {
              g = Math.ceil((p + t) / 2);
              var u = b[g];
              if (a >= u.startTime && a <= u.endTime) {
                return g;
              }
              a > u.endTime ? p = g : t = g - 1;
            }
            return (p + t) / 2 | 0;
          }
          return 0;
        };
        l.prototype.query = function(a) {
          if (a < this.startTime || a > this.endTime) {
            return null;
          }
          var b = this.children;
          if (b && 0 < b.length) {
            for (var t, g = 0, p = b.length - 1;p > g;) {
              var u = (g + p) / 2 | 0;
              t = b[u];
              if (a >= t.startTime && a <= t.endTime) {
                return t.query(a);
              }
              a > t.endTime ? g = u + 1 : p = u;
            }
            t = b[p];
            if (a >= t.startTime && a <= t.endTime) {
              return t.query(a);
            }
          }
          return this;
        };
        l.prototype.queryNext = function(a) {
          for (var b = this;a > b.endTime;) {
            if (b.parent) {
              b = b.parent;
            } else {
              break;
            }
          }
          return b.query(a);
        };
        l.prototype.getDepth = function() {
          for (var a = 0, b = this;b;) {
            a++, b = b.parent;
          }
          return a;
        };
        l.prototype.calculateStatistics = function() {
          function a(t) {
            if (t.kind) {
              var g = k[t.kind.id] || (k[t.kind.id] = new b(t.kind));
              g.count++;
              g.selfTime += t.selfTime;
              g.totalTime += t.totalTime;
            }
            t.children && t.children.forEach(a);
          }
          var k = this.statistics = [];
          a(this);
        };
        l.prototype.trace = function(a) {
          var b = (this.kind ? this.kind.name + ": " : "Profile: ") + (this.endTime - this.startTime).toFixed(2);
          if (this.children && this.children.length) {
            a.enter(b);
            for (b = 0;b < this.children.length;b++) {
              this.children[b].trace(a);
            }
            a.outdent();
          } else {
            a.writeLn(b);
          }
        };
        return l;
      }();
      h.TimelineFrame = q;
      q = function(b) {
        function a(a) {
          b.call(this, null, null, null, null, NaN, NaN);
          this.name = a;
        }
        __extends(a, b);
        return a;
      }(q);
      h.TimelineBufferSnapshot = q;
    })(h.Profiler || (h.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(q) {
    (function(q) {
      var b = function() {
        function b(l, a) {
          void 0 === l && (l = "");
          this.name = l || "";
          this._startTime = h.isNullOrUndefined(a) ? jsGlobal.START_TIME : a;
        }
        b.prototype.getKind = function(b) {
          return this._kinds[b];
        };
        Object.defineProperty(b.prototype, "kinds", {get:function() {
          return this._kinds.concat();
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(b.prototype, "depth", {get:function() {
          return this._depth;
        }, enumerable:!0, configurable:!0});
        b.prototype._initialize = function() {
          this._depth = 0;
          this._stack = [];
          this._data = [];
          this._kinds = [];
          this._kindNameMap = Object.create(null);
          this._marks = new h.CircularBuffer(Int32Array, 20);
          this._times = new h.CircularBuffer(Float64Array, 20);
        };
        b.prototype._getKindId = function(l) {
          var a = b.MAX_KINDID;
          if (void 0 === this._kindNameMap[l]) {
            if (a = this._kinds.length, a < b.MAX_KINDID) {
              var k = {id:a, name:l, visible:!0};
              this._kinds.push(k);
              this._kindNameMap[l] = k;
            } else {
              a = b.MAX_KINDID;
            }
          } else {
            a = this._kindNameMap[l].id;
          }
          return a;
        };
        b.prototype._getMark = function(l, a, k) {
          var t = b.MAX_DATAID;
          h.isNullOrUndefined(k) || a === b.MAX_KINDID || (t = this._data.length, t < b.MAX_DATAID ? this._data.push(k) : t = b.MAX_DATAID);
          return l | t << 16 | a;
        };
        b.prototype.enter = function(l, a, k) {
          k = (h.isNullOrUndefined(k) ? performance.now() : k) - this._startTime;
          this._marks || this._initialize();
          this._depth++;
          l = this._getKindId(l);
          this._marks.write(this._getMark(b.ENTER, l, a));
          this._times.write(k);
          this._stack.push(l);
        };
        b.prototype.leave = function(l, a, k) {
          k = (h.isNullOrUndefined(k) ? performance.now() : k) - this._startTime;
          var t = this._stack.pop();
          l && (t = this._getKindId(l));
          this._marks.write(this._getMark(b.LEAVE, t, a));
          this._times.write(k);
          this._depth--;
        };
        b.prototype.count = function(b, a, k) {
        };
        b.prototype.createSnapshot = function(l) {
          void 0 === l && (l = Number.MAX_VALUE);
          if (!this._marks) {
            return null;
          }
          var a = this._times, k = this._kinds, t = this._data, g = new q.TimelineBufferSnapshot(this.name), p = [g], u = 0;
          this._marks || this._initialize();
          this._marks.forEachInReverse(function(g, v) {
            var d = t[g >>> 16 & b.MAX_DATAID], f = k[g & b.MAX_KINDID];
            if (h.isNullOrUndefined(f) || f.visible) {
              var e = g & 2147483648, c = a.get(v), m = p.length;
              if (e === b.LEAVE) {
                if (1 === m && (u++, u > l)) {
                  return !0;
                }
                p.push(new q.TimelineFrame(p[m - 1], f, null, d, NaN, c));
              } else {
                if (e === b.ENTER) {
                  if (f = p.pop(), e = p[p.length - 1]) {
                    for (e.children ? e.children.unshift(f) : e.children = [f], e = p.length, f.depth = e, f.startData = d, f.startTime = c;f;) {
                      if (f.maxDepth < e) {
                        f.maxDepth = e, f = f.parent;
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
          g.children && g.children.length && (g.startTime = g.children[0].startTime, g.endTime = g.children[g.children.length - 1].endTime);
          return g;
        };
        b.prototype.reset = function(b) {
          this._startTime = h.isNullOrUndefined(b) ? performance.now() : b;
          this._marks ? (this._depth = 0, this._data = [], this._marks.reset(), this._times.reset()) : this._initialize();
        };
        b.FromFirefoxProfile = function(l, a) {
          for (var k = l.profile.threads[0].samples, t = new b(a, k[0].time), g = [], p, u = 0;u < k.length;u++) {
            p = k[u];
            var n = p.time, v = p.frames, d = 0;
            for (p = Math.min(v.length, g.length);d < p && v[d].location === g[d].location;) {
              d++;
            }
            for (var f = g.length - d, e = 0;e < f;e++) {
              p = g.pop(), t.leave(p.location, null, n);
            }
            for (;d < v.length;) {
              p = v[d++], t.enter(p.location, null, n);
            }
            g = v;
          }
          for (;p = g.pop();) {
            t.leave(p.location, null, n);
          }
          return t;
        };
        b.FromChromeProfile = function(l, a) {
          var k = l.timestamps, t = l.samples, g = new b(a, k[0] / 1E3), p = [], u = {}, n;
          b._resolveIds(l.head, u);
          for (var v = 0;v < k.length;v++) {
            var d = k[v] / 1E3, f = [];
            for (n = u[t[v]];n;) {
              f.unshift(n), n = n.parent;
            }
            var e = 0;
            for (n = Math.min(f.length, p.length);e < n && f[e] === p[e];) {
              e++;
            }
            for (var c = p.length - e, m = 0;m < c;m++) {
              n = p.pop(), g.leave(n.functionName, null, d);
            }
            for (;e < f.length;) {
              n = f[e++], g.enter(n.functionName, null, d);
            }
            p = f;
          }
          for (;n = p.pop();) {
            g.leave(n.functionName, null, d);
          }
          return g;
        };
        b._resolveIds = function(l, a) {
          a[l.id] = l;
          if (l.children) {
            for (var k = 0;k < l.children.length;k++) {
              l.children[k].parent = l, b._resolveIds(l.children[k], a);
            }
          }
        };
        b.ENTER = 0;
        b.LEAVE = -2147483648;
        b.MAX_KINDID = 65535;
        b.MAX_DATAID = 32767;
        return b;
      }();
      q.TimelineBuffer = b;
    })(q.Profiler || (q.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(q) {
    (function(r) {
      (function(b) {
        b[b.DARK = 0] = "DARK";
        b[b.LIGHT = 1] = "LIGHT";
      })(r.UIThemeType || (r.UIThemeType = {}));
      var b = function() {
        function b(l, a) {
          void 0 === a && (a = 0);
          this._container = l;
          this._headers = [];
          this._charts = [];
          this._profiles = [];
          this._activeProfile = null;
          this.themeType = a;
          this._tooltip = this._createTooltip();
        }
        b.prototype.createProfile = function(b, a) {
          var k = new r.Profile(b, a);
          k.createSnapshots();
          this._profiles.push(k);
          this.activateProfile(k);
          return k;
        };
        b.prototype.activateProfile = function(b) {
          this.deactivateProfile();
          this._activeProfile = b;
          this._createViews();
          this._initializeViews();
        };
        b.prototype.activateProfileAt = function(b) {
          this.activateProfile(this.getProfileAt(b));
        };
        b.prototype.deactivateProfile = function() {
          this._activeProfile && (this._destroyViews(), this._activeProfile = null);
        };
        b.prototype.resize = function() {
          this._onResize();
        };
        b.prototype.getProfileAt = function(b) {
          return this._profiles[b];
        };
        Object.defineProperty(b.prototype, "activeProfile", {get:function() {
          return this._activeProfile;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(b.prototype, "profileCount", {get:function() {
          return this._profiles.length;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(b.prototype, "container", {get:function() {
          return this._container;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(b.prototype, "themeType", {get:function() {
          return this._themeType;
        }, set:function(b) {
          switch(b) {
            case 0:
              this._theme = new q.Theme.UIThemeDark;
              break;
            case 1:
              this._theme = new q.Theme.UIThemeLight;
          }
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(b.prototype, "theme", {get:function() {
          return this._theme;
        }, enumerable:!0, configurable:!0});
        b.prototype.getSnapshotAt = function(b) {
          return this._activeProfile.getSnapshotAt(b);
        };
        b.prototype._createViews = function() {
          if (this._activeProfile) {
            var b = this;
            this._overviewHeader = new r.FlameChartHeader(this, 0);
            this._overview = new r.FlameChartOverview(this, 0);
            this._activeProfile.forEachSnapshot(function(a, k) {
              b._headers.push(new r.FlameChartHeader(b, 1));
              b._charts.push(new r.FlameChart(b, a));
            });
            window.addEventListener("resize", this._onResize.bind(this));
          }
        };
        b.prototype._destroyViews = function() {
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
        b.prototype._initializeViews = function() {
          if (this._activeProfile) {
            var b = this, a = this._activeProfile.startTime, k = this._activeProfile.endTime;
            this._overviewHeader.initialize(a, k);
            this._overview.initialize(a, k);
            this._activeProfile.forEachSnapshot(function(t, g) {
              b._headers[g].initialize(a, k);
              b._charts[g].initialize(a, k);
            });
          }
        };
        b.prototype._onResize = function() {
          if (this._activeProfile) {
            var b = this, a = this._container.offsetWidth;
            this._overviewHeader.setSize(a);
            this._overview.setSize(a);
            this._activeProfile.forEachSnapshot(function(k, t) {
              b._headers[t].setSize(a);
              b._charts[t].setSize(a);
            });
          }
        };
        b.prototype._updateViews = function() {
          if (this._activeProfile) {
            var b = this, a = this._activeProfile.windowStart, k = this._activeProfile.windowEnd;
            this._overviewHeader.setWindow(a, k);
            this._overview.setWindow(a, k);
            this._activeProfile.forEachSnapshot(function(t, g) {
              b._headers[g].setWindow(a, k);
              b._charts[g].setWindow(a, k);
            });
          }
        };
        b.prototype._drawViews = function() {
        };
        b.prototype._createTooltip = function() {
          var b = document.createElement("div");
          b.classList.add("profiler-tooltip");
          b.style.display = "none";
          this._container.insertBefore(b, this._container.firstChild);
          return b;
        };
        b.prototype.setWindow = function(b, a) {
          this._activeProfile.setWindow(b, a);
          this._updateViews();
        };
        b.prototype.moveWindowTo = function(b) {
          this._activeProfile.moveWindowTo(b);
          this._updateViews();
        };
        b.prototype.showTooltip = function(b, a, k, t) {
          this.removeTooltipContent();
          this._tooltip.appendChild(this.createTooltipContent(b, a));
          this._tooltip.style.display = "block";
          var g = this._tooltip.firstChild;
          a = g.clientWidth;
          g = g.clientHeight;
          k += k + a >= b.canvas.clientWidth - 50 ? -(a + 20) : 25;
          t += b.canvas.offsetTop - g / 2;
          this._tooltip.style.left = k + "px";
          this._tooltip.style.top = t + "px";
        };
        b.prototype.hideTooltip = function() {
          this._tooltip.style.display = "none";
        };
        b.prototype.createTooltipContent = function(b, a) {
          var k = Math.round(1E5 * a.totalTime) / 1E5, t = Math.round(1E5 * a.selfTime) / 1E5, g = Math.round(1E4 * a.selfTime / a.totalTime) / 100, p = document.createElement("div"), u = document.createElement("h1");
          u.textContent = a.kind.name;
          p.appendChild(u);
          u = document.createElement("p");
          u.textContent = "Total: " + k + " ms";
          p.appendChild(u);
          k = document.createElement("p");
          k.textContent = "Self: " + t + " ms (" + g + "%)";
          p.appendChild(k);
          if (t = b.getStatistics(a.kind)) {
            g = document.createElement("p"), g.textContent = "Count: " + t.count, p.appendChild(g), g = document.createElement("p"), g.textContent = "All Total: " + Math.round(1E5 * t.totalTime) / 1E5 + " ms", p.appendChild(g), g = document.createElement("p"), g.textContent = "All Self: " + Math.round(1E5 * t.selfTime) / 1E5 + " ms", p.appendChild(g);
          }
          this.appendDataElements(p, a.startData);
          this.appendDataElements(p, a.endData);
          return p;
        };
        b.prototype.appendDataElements = function(b, a) {
          if (!h.isNullOrUndefined(a)) {
            b.appendChild(document.createElement("hr"));
            var k;
            if (h.isObject(a)) {
              for (var t in a) {
                k = document.createElement("p"), k.textContent = t + ": " + a[t], b.appendChild(k);
              }
            } else {
              k = document.createElement("p"), k.textContent = a.toString(), b.appendChild(k);
            }
          }
        };
        b.prototype.removeTooltipContent = function() {
          for (var b = this._tooltip;b.firstChild;) {
            b.removeChild(b.firstChild);
          }
        };
        return b;
      }();
      r.Controller = b;
    })(q.Profiler || (q.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(q) {
    (function(q) {
      var b = h.NumberUtilities.clamp, w = function() {
        function a(a) {
          this.value = a;
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
      q.MouseCursor = w;
      var l = function() {
        function a(a, b) {
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
        a.prototype.destroy = function() {
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
        a.prototype.updateCursor = function(b) {
          if (!a._cursorOwner || a._cursorOwner === this._target) {
            var t = this._eventTarget.parentElement;
            a._cursor !== b && (a._cursor = b, ["", "-moz-", "-webkit-"].forEach(function(a) {
              t.style.cursor = a + b;
            }));
            a._cursorOwner = a._cursor === w.DEFAULT ? null : this._target;
          }
        };
        a.prototype._onMouseDown = function(a) {
          this._killHoverCheck();
          if (0 === a.button) {
            var b = this._getTargetMousePos(a, a.target);
            this._dragInfo = {start:b, current:b, delta:{x:0, y:0}, hasMoved:!1, originalTarget:a.target};
            window.addEventListener("mousemove", this._boundOnDrag, !1);
            window.addEventListener("mouseup", this._boundOnMouseUp, !1);
            this._target.onMouseDown(b.x, b.y);
          }
        };
        a.prototype._onDrag = function(a) {
          var b = this._dragInfo;
          a = this._getTargetMousePos(a, b.originalTarget);
          var g = {x:a.x - b.start.x, y:a.y - b.start.y};
          b.current = a;
          b.delta = g;
          b.hasMoved = !0;
          this._target.onDrag(b.start.x, b.start.y, a.x, a.y, g.x, g.y);
        };
        a.prototype._onMouseUp = function(a) {
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
        a.prototype._onMouseOver = function(a) {
          a.target.addEventListener("mousemove", this._boundOnMouseMove, !1);
          if (!this._dragInfo) {
            var b = this._getTargetMousePos(a, a.target);
            this._target.onMouseOver(b.x, b.y);
            this._startHoverCheck(a);
          }
        };
        a.prototype._onMouseOut = function(a) {
          a.target.removeEventListener("mousemove", this._boundOnMouseMove, !1);
          if (!this._dragInfo) {
            this._target.onMouseOut();
          }
          this._killHoverCheck();
        };
        a.prototype._onMouseMove = function(a) {
          if (!this._dragInfo) {
            var b = this._getTargetMousePos(a, a.target);
            this._target.onMouseMove(b.x, b.y);
            this._killHoverCheck();
            this._startHoverCheck(a);
          }
        };
        a.prototype._onMouseWheel = function(a) {
          if (!(a.altKey || a.metaKey || a.ctrlKey || a.shiftKey || (a.preventDefault(), this._dragInfo || this._wheelDisabled))) {
            var t = this._getTargetMousePos(a, a.target);
            a = b("undefined" !== typeof a.deltaY ? a.deltaY / 16 : -a.wheelDelta / 40, -1, 1);
            this._target.onMouseWheel(t.x, t.y, Math.pow(1.2, a) - 1);
          }
        };
        a.prototype._startHoverCheck = function(b) {
          this._hoverInfo = {isHovering:!1, timeoutHandle:setTimeout(this._onMouseMoveIdleHandler.bind(this), a.HOVER_TIMEOUT), pos:this._getTargetMousePos(b, b.target)};
        };
        a.prototype._killHoverCheck = function() {
          if (this._hoverInfo) {
            clearTimeout(this._hoverInfo.timeoutHandle);
            if (this._hoverInfo.isHovering) {
              this._target.onHoverEnd();
            }
            this._hoverInfo = null;
          }
        };
        a.prototype._onMouseMoveIdleHandler = function() {
          var a = this._hoverInfo;
          a.isHovering = !0;
          this._target.onHoverStart(a.pos.x, a.pos.y);
        };
        a.prototype._getTargetMousePos = function(a, b) {
          var g = b.getBoundingClientRect();
          return {x:a.clientX - g.left, y:a.clientY - g.top};
        };
        a.HOVER_TIMEOUT = 500;
        a._cursor = w.DEFAULT;
        return a;
      }();
      q.MouseController = l;
    })(q.Profiler || (q.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(h) {
      (function(b) {
        b[b.NONE = 0] = "NONE";
        b[b.WINDOW = 1] = "WINDOW";
        b[b.HANDLE_LEFT = 2] = "HANDLE_LEFT";
        b[b.HANDLE_RIGHT = 3] = "HANDLE_RIGHT";
        b[b.HANDLE_BOTH = 4] = "HANDLE_BOTH";
      })(h.FlameChartDragTarget || (h.FlameChartDragTarget = {}));
      var b = function() {
        function b(l) {
          this._controller = l;
          this._initialized = !1;
          this._canvas = document.createElement("canvas");
          this._context = this._canvas.getContext("2d");
          this._mouseController = new h.MouseController(this, this._canvas);
          l = l.container;
          l.appendChild(this._canvas);
          l = l.getBoundingClientRect();
          this.setSize(l.width);
        }
        Object.defineProperty(b.prototype, "canvas", {get:function() {
          return this._canvas;
        }, enumerable:!0, configurable:!0});
        b.prototype.setSize = function(b, a) {
          void 0 === a && (a = 20);
          this._width = b;
          this._height = a;
          this._resetCanvas();
          this.draw();
        };
        b.prototype.initialize = function(b, a) {
          this._initialized = !0;
          this.setRange(b, a, !1);
          this.setWindow(b, a, !1);
          this.draw();
        };
        b.prototype.setWindow = function(b, a, k) {
          void 0 === k && (k = !0);
          this._windowStart = b;
          this._windowEnd = a;
          !k || this.draw();
        };
        b.prototype.setRange = function(b, a, k) {
          void 0 === k && (k = !0);
          this._rangeStart = b;
          this._rangeEnd = a;
          !k || this.draw();
        };
        b.prototype.destroy = function() {
          this._mouseController.destroy();
          this._mouseController = null;
          this._controller.container.removeChild(this._canvas);
          this._controller = null;
        };
        b.prototype._resetCanvas = function() {
          var b = window.devicePixelRatio, a = this._canvas;
          a.width = this._width * b;
          a.height = this._height * b;
          a.style.width = this._width + "px";
          a.style.height = this._height + "px";
        };
        b.prototype.draw = function() {
        };
        b.prototype._almostEq = function(b, a, k) {
          void 0 === k && (k = 10);
          return Math.abs(b - a) < 1 / Math.pow(10, k);
        };
        b.prototype._windowEqRange = function() {
          return this._almostEq(this._windowStart, this._rangeStart) && this._almostEq(this._windowEnd, this._rangeEnd);
        };
        b.prototype._decimalPlaces = function(b) {
          return (+b).toFixed(10).replace(/^-?\d*\.?|0+$/g, "").length;
        };
        b.prototype._toPixelsRelative = function(b) {
          return 0;
        };
        b.prototype._toPixels = function(b) {
          return 0;
        };
        b.prototype._toTimeRelative = function(b) {
          return 0;
        };
        b.prototype._toTime = function(b) {
          return 0;
        };
        b.prototype.onMouseWheel = function(h, a, k) {
          h = this._toTime(h);
          a = this._windowStart;
          var t = this._windowEnd, g = t - a;
          k = Math.max((b.MIN_WINDOW_LEN - g) / g, k);
          this._controller.setWindow(a + (a - h) * k, t + (t - h) * k);
          this.onHoverEnd();
        };
        b.prototype.onMouseDown = function(b, a) {
        };
        b.prototype.onMouseMove = function(b, a) {
        };
        b.prototype.onMouseOver = function(b, a) {
        };
        b.prototype.onMouseOut = function() {
        };
        b.prototype.onDrag = function(b, a, k, t, g, p) {
        };
        b.prototype.onDragEnd = function(b, a, k, t, g, p) {
        };
        b.prototype.onClick = function(b, a) {
        };
        b.prototype.onHoverStart = function(b, a) {
        };
        b.prototype.onHoverEnd = function() {
        };
        b.DRAGHANDLE_WIDTH = 4;
        b.MIN_WINDOW_LEN = .1;
        return b;
      }();
      h.FlameChartBase = b;
    })(h.Profiler || (h.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(q) {
    (function(q) {
      var b = h.StringUtilities.trimMiddle, w = function(l) {
        function a(a, b) {
          l.call(this, a);
          this._textWidth = {};
          this._minFrameWidthInPixels = 1;
          this._snapshot = b;
          this._kindStyle = Object.create(null);
        }
        __extends(a, l);
        a.prototype.setSize = function(a, b) {
          l.prototype.setSize.call(this, a, b || this._initialized ? 12.5 * this._maxDepth : 100);
        };
        a.prototype.initialize = function(a, b) {
          this._initialized = !0;
          this._maxDepth = this._snapshot.maxDepth;
          this.setRange(a, b, !1);
          this.setWindow(a, b, !1);
          this.setSize(this._width, 12.5 * this._maxDepth);
        };
        a.prototype.destroy = function() {
          l.prototype.destroy.call(this);
          this._snapshot = null;
        };
        a.prototype.draw = function() {
          var a = this._context, b = window.devicePixelRatio;
          h.ColorStyle.reset();
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.bodyBackground(1);
          a.fillRect(0, 0, this._width, this._height);
          this._initialized && this._drawChildren(this._snapshot);
          a.restore();
        };
        a.prototype._drawChildren = function(a, b) {
          void 0 === b && (b = 0);
          var g = a.getChildRange(this._windowStart, this._windowEnd);
          if (g) {
            for (var p = g.startIndex;p <= g.endIndex;p++) {
              var u = a.children[p];
              this._drawFrame(u, b) && this._drawChildren(u, b + 1);
            }
          }
        };
        a.prototype._drawFrame = function(a, b) {
          var g = this._context, p = this._toPixels(a.startTime), u = this._toPixels(a.endTime), n = u - p;
          if (n <= this._minFrameWidthInPixels) {
            return g.fillStyle = this._controller.theme.tabToolbar(1), g.fillRect(p, 12.5 * b, this._minFrameWidthInPixels, 12 + 12.5 * (a.maxDepth - a.depth)), !1;
          }
          0 > p && (u = n + p, p = 0);
          var u = u - p, v = this._kindStyle[a.kind.id];
          v || (v = h.ColorStyle.randomStyle(), v = this._kindStyle[a.kind.id] = {bgColor:v, textColor:h.ColorStyle.contrastStyle(v)});
          g.save();
          g.fillStyle = v.bgColor;
          g.fillRect(p, 12.5 * b, u, 12);
          12 < n && (n = a.kind.name) && n.length && (n = this._prepareText(g, n, u - 4), n.length && (g.fillStyle = v.textColor, g.textBaseline = "bottom", g.fillText(n, p + 2, 12.5 * (b + 1) - 1)));
          g.restore();
          return !0;
        };
        a.prototype._prepareText = function(a, t, g) {
          var p = this._measureWidth(a, t);
          if (g > p) {
            return t;
          }
          for (var p = 3, u = t.length;p < u;) {
            var n = p + u >> 1;
            this._measureWidth(a, b(t, n)) < g ? p = n + 1 : u = n;
          }
          t = b(t, u - 1);
          p = this._measureWidth(a, t);
          return p <= g ? t : "";
        };
        a.prototype._measureWidth = function(a, b) {
          var g = this._textWidth[b];
          g || (g = a.measureText(b).width, this._textWidth[b] = g);
          return g;
        };
        a.prototype._toPixelsRelative = function(a) {
          return a * this._width / (this._windowEnd - this._windowStart);
        };
        a.prototype._toPixels = function(a) {
          return this._toPixelsRelative(a - this._windowStart);
        };
        a.prototype._toTimeRelative = function(a) {
          return a * (this._windowEnd - this._windowStart) / this._width;
        };
        a.prototype._toTime = function(a) {
          return this._toTimeRelative(a) + this._windowStart;
        };
        a.prototype._getFrameAtPosition = function(a, b) {
          var g = 1 + b / 12.5 | 0, p = this._snapshot.query(this._toTime(a));
          if (p && p.depth >= g) {
            for (;p && p.depth > g;) {
              p = p.parent;
            }
            return p;
          }
          return null;
        };
        a.prototype.onMouseDown = function(a, b) {
          this._windowEqRange() || (this._mouseController.updateCursor(q.MouseCursor.ALL_SCROLL), this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:1});
        };
        a.prototype.onMouseMove = function(a, b) {
        };
        a.prototype.onMouseOver = function(a, b) {
        };
        a.prototype.onMouseOut = function() {
        };
        a.prototype.onDrag = function(a, b, g, p, u, n) {
          if (a = this._dragInfo) {
            u = this._toTimeRelative(-u), this._controller.setWindow(a.windowStartInitial + u, a.windowEndInitial + u);
          }
        };
        a.prototype.onDragEnd = function(a, b, g, p, u, n) {
          this._dragInfo = null;
          this._mouseController.updateCursor(q.MouseCursor.DEFAULT);
        };
        a.prototype.onClick = function(a, b) {
          this._dragInfo = null;
          this._mouseController.updateCursor(q.MouseCursor.DEFAULT);
        };
        a.prototype.onHoverStart = function(a, b) {
          var g = this._getFrameAtPosition(a, b);
          g && (this._hoveredFrame = g, this._controller.showTooltip(this, g, a, b));
        };
        a.prototype.onHoverEnd = function() {
          this._hoveredFrame && (this._hoveredFrame = null, this._controller.hideTooltip());
        };
        a.prototype.getStatistics = function(a) {
          var b = this._snapshot;
          b.statistics || b.calculateStatistics();
          return b.statistics[a.id];
        };
        return a;
      }(q.FlameChartBase);
      q.FlameChart = w;
    })(q.Profiler || (q.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(q) {
    (function(q) {
      var b = h.NumberUtilities.clamp;
      (function(b) {
        b[b.OVERLAY = 0] = "OVERLAY";
        b[b.STACK = 1] = "STACK";
        b[b.UNION = 2] = "UNION";
      })(q.FlameChartOverviewMode || (q.FlameChartOverviewMode = {}));
      var w = function(h) {
        function a(a, b) {
          void 0 === b && (b = 1);
          this._mode = b;
          this._overviewCanvasDirty = !0;
          this._overviewCanvas = document.createElement("canvas");
          this._overviewContext = this._overviewCanvas.getContext("2d");
          h.call(this, a);
        }
        __extends(a, h);
        a.prototype.setSize = function(a, b) {
          h.prototype.setSize.call(this, a, b || 64);
        };
        Object.defineProperty(a.prototype, "mode", {set:function(a) {
          this._mode = a;
          this.draw();
        }, enumerable:!0, configurable:!0});
        a.prototype._resetCanvas = function() {
          h.prototype._resetCanvas.call(this);
          this._overviewCanvas.width = this._canvas.width;
          this._overviewCanvas.height = this._canvas.height;
          this._overviewCanvasDirty = !0;
        };
        a.prototype.draw = function() {
          var a = this._context, b = window.devicePixelRatio, g = this._width, p = this._height;
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.bodyBackground(1);
          a.fillRect(0, 0, g, p);
          a.restore();
          this._initialized && (this._overviewCanvasDirty && (this._drawChart(), this._overviewCanvasDirty = !1), a.drawImage(this._overviewCanvas, 0, 0), this._drawSelection());
        };
        a.prototype._drawSelection = function() {
          var a = this._context, b = this._height, g = window.devicePixelRatio, p = this._selection ? this._selection.left : this._toPixels(this._windowStart), u = this._selection ? this._selection.right : this._toPixels(this._windowEnd), n = this._controller.theme;
          a.save();
          a.scale(g, g);
          this._selection ? (a.fillStyle = n.selectionText(.15), a.fillRect(p, 1, u - p, b - 1), a.fillStyle = "rgba(133, 0, 0, 1)", a.fillRect(p + .5, 0, u - p - 1, 4), a.fillRect(p + .5, b - 4, u - p - 1, 4)) : (a.fillStyle = n.bodyBackground(.4), a.fillRect(0, 1, p, b - 1), a.fillRect(u, 1, this._width, b - 1));
          a.beginPath();
          a.moveTo(p, 0);
          a.lineTo(p, b);
          a.moveTo(u, 0);
          a.lineTo(u, b);
          a.lineWidth = .5;
          a.strokeStyle = n.foregroundTextGrey(1);
          a.stroke();
          b = Math.abs((this._selection ? this._toTime(this._selection.right) : this._windowEnd) - (this._selection ? this._toTime(this._selection.left) : this._windowStart));
          a.fillStyle = n.selectionText(.5);
          a.font = "8px sans-serif";
          a.textBaseline = "alphabetic";
          a.textAlign = "end";
          a.fillText(b.toFixed(2), Math.min(p, u) - 4, 10);
          a.fillText((b / 60).toFixed(2), Math.min(p, u) - 4, 20);
          a.restore();
        };
        a.prototype._drawChart = function() {
          var a = window.devicePixelRatio, b = this._height, g = this._controller.activeProfile, p = 4 * this._width, u = g.totalTime / p, n = this._overviewContext, h = this._controller.theme.blueHighlight(1);
          n.save();
          n.translate(0, a * b);
          var d = -a * b / (g.maxDepth - 1);
          n.scale(a / 4, d);
          n.clearRect(0, 0, p, g.maxDepth - 1);
          1 == this._mode && n.scale(1, 1 / g.snapshotCount);
          for (var f = 0, e = g.snapshotCount;f < e;f++) {
            var c = g.getSnapshotAt(f);
            if (c) {
              var m = null, y = 0;
              n.beginPath();
              n.moveTo(0, 0);
              for (var x = 0;x < p;x++) {
                y = g.startTime + x * u, y = (m = m ? m.queryNext(y) : c.query(y)) ? m.getDepth() - 1 : 0, n.lineTo(x, y);
              }
              n.lineTo(x, 0);
              n.fillStyle = h;
              n.fill();
              1 == this._mode && n.translate(0, -b * a / d);
            }
          }
          n.restore();
        };
        a.prototype._toPixelsRelative = function(a) {
          return a * this._width / (this._rangeEnd - this._rangeStart);
        };
        a.prototype._toPixels = function(a) {
          return this._toPixelsRelative(a - this._rangeStart);
        };
        a.prototype._toTimeRelative = function(a) {
          return a * (this._rangeEnd - this._rangeStart) / this._width;
        };
        a.prototype._toTime = function(a) {
          return this._toTimeRelative(a) + this._rangeStart;
        };
        a.prototype._getDragTargetUnderCursor = function(a, b) {
          if (0 <= b && b < this._height) {
            var g = this._toPixels(this._windowStart), p = this._toPixels(this._windowEnd), u = 2 + q.FlameChartBase.DRAGHANDLE_WIDTH / 2, n = a >= g - u && a <= g + u, h = a >= p - u && a <= p + u;
            if (n && h) {
              return 4;
            }
            if (n) {
              return 2;
            }
            if (h) {
              return 3;
            }
            if (!this._windowEqRange() && a > g + u && a < p - u) {
              return 1;
            }
          }
          return 0;
        };
        a.prototype.onMouseDown = function(a, b) {
          var g = this._getDragTargetUnderCursor(a, b);
          0 === g ? (this._selection = {left:a, right:a}, this.draw()) : (1 === g && this._mouseController.updateCursor(q.MouseCursor.GRABBING), this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:g});
        };
        a.prototype.onMouseMove = function(a, b) {
          var g = q.MouseCursor.DEFAULT, p = this._getDragTargetUnderCursor(a, b);
          0 === p || this._selection || (g = 1 === p ? q.MouseCursor.GRAB : q.MouseCursor.EW_RESIZE);
          this._mouseController.updateCursor(g);
        };
        a.prototype.onMouseOver = function(a, b) {
          this.onMouseMove(a, b);
        };
        a.prototype.onMouseOut = function() {
          this._mouseController.updateCursor(q.MouseCursor.DEFAULT);
        };
        a.prototype.onDrag = function(a, h, g, p, u, n) {
          if (this._selection) {
            this._selection = {left:a, right:b(g, 0, this._width - 1)}, this.draw();
          } else {
            a = this._dragInfo;
            if (4 === a.target) {
              if (0 !== u) {
                a.target = 0 > u ? 2 : 3;
              } else {
                return;
              }
            }
            h = this._windowStart;
            g = this._windowEnd;
            u = this._toTimeRelative(u);
            switch(a.target) {
              case 1:
                h = a.windowStartInitial + u;
                g = a.windowEndInitial + u;
                break;
              case 2:
                h = b(a.windowStartInitial + u, this._rangeStart, g - q.FlameChartBase.MIN_WINDOW_LEN);
                break;
              case 3:
                g = b(a.windowEndInitial + u, h + q.FlameChartBase.MIN_WINDOW_LEN, this._rangeEnd);
                break;
              default:
                return;
            }
            this._controller.setWindow(h, g);
          }
        };
        a.prototype.onDragEnd = function(a, b, g, p, u, n) {
          this._selection && (this._selection = null, this._controller.setWindow(this._toTime(a), this._toTime(g)));
          this._dragInfo = null;
          this.onMouseMove(g, p);
        };
        a.prototype.onClick = function(a, b) {
          this._selection = this._dragInfo = null;
          this._windowEqRange() || (0 === this._getDragTargetUnderCursor(a, b) && this._controller.moveWindowTo(this._toTime(a)), this.onMouseMove(a, b));
          this.draw();
        };
        a.prototype.onHoverStart = function(a, b) {
        };
        a.prototype.onHoverEnd = function() {
        };
        return a;
      }(q.FlameChartBase);
      q.FlameChartOverview = w;
    })(q.Profiler || (q.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(q) {
    (function(q) {
      var b = h.NumberUtilities.clamp;
      (function(b) {
        b[b.OVERVIEW = 0] = "OVERVIEW";
        b[b.CHART = 1] = "CHART";
      })(q.FlameChartHeaderType || (q.FlameChartHeaderType = {}));
      var w = function(h) {
        function a(a, b) {
          this._type = b;
          h.call(this, a);
        }
        __extends(a, h);
        a.prototype.draw = function() {
          var a = this._context, b = window.devicePixelRatio, g = this._width, p = this._height;
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.tabToolbar(1);
          a.fillRect(0, 0, g, p);
          this._initialized && (0 == this._type ? (b = this._toPixels(this._windowStart), g = this._toPixels(this._windowEnd), a.fillStyle = this._controller.theme.bodyBackground(1), a.fillRect(b, 0, g - b, p), this._drawLabels(this._rangeStart, this._rangeEnd), this._drawDragHandle(b), this._drawDragHandle(g)) : this._drawLabels(this._windowStart, this._windowEnd));
          a.restore();
        };
        a.prototype._drawLabels = function(b, h) {
          var g = this._context, p = this._calculateTickInterval(b, h), u = Math.ceil(b / p) * p, n = 500 <= p, v = n ? 1E3 : 1, d = this._decimalPlaces(p / v), n = n ? "s" : "ms", f = this._toPixels(u), e = this._height / 2, c = this._controller.theme;
          g.lineWidth = 1;
          g.strokeStyle = c.contentTextDarkGrey(.5);
          g.fillStyle = c.contentTextDarkGrey(1);
          g.textAlign = "right";
          g.textBaseline = "middle";
          g.font = "11px sans-serif";
          for (c = this._width + a.TICK_MAX_WIDTH;f < c;) {
            g.fillText((u / v).toFixed(d) + " " + n, f - 7, e + 1), g.beginPath(), g.moveTo(f, 0), g.lineTo(f, this._height + 1), g.closePath(), g.stroke(), u += p, f = this._toPixels(u);
          }
        };
        a.prototype._calculateTickInterval = function(b, h) {
          var g = (h - b) / (this._width / a.TICK_MAX_WIDTH), p = Math.pow(10, Math.floor(Math.log(g) / Math.LN10)), g = g / p;
          return 5 < g ? 10 * p : 2 < g ? 5 * p : 1 < g ? 2 * p : p;
        };
        a.prototype._drawDragHandle = function(a) {
          var b = this._context;
          b.lineWidth = 2;
          b.strokeStyle = this._controller.theme.bodyBackground(1);
          b.fillStyle = this._controller.theme.foregroundTextGrey(.7);
          this._drawRoundedRect(b, a - q.FlameChartBase.DRAGHANDLE_WIDTH / 2, 1, q.FlameChartBase.DRAGHANDLE_WIDTH, this._height - 2, 2, !0);
        };
        a.prototype._drawRoundedRect = function(a, b, g, p, u, n, h, d) {
          void 0 === h && (h = !0);
          void 0 === d && (d = !0);
          a.beginPath();
          a.moveTo(b + n, g);
          a.lineTo(b + p - n, g);
          a.quadraticCurveTo(b + p, g, b + p, g + n);
          a.lineTo(b + p, g + u - n);
          a.quadraticCurveTo(b + p, g + u, b + p - n, g + u);
          a.lineTo(b + n, g + u);
          a.quadraticCurveTo(b, g + u, b, g + u - n);
          a.lineTo(b, g + n);
          a.quadraticCurveTo(b, g, b + n, g);
          a.closePath();
          h && a.stroke();
          d && a.fill();
        };
        a.prototype._toPixelsRelative = function(a) {
          return a * this._width / (0 === this._type ? this._rangeEnd - this._rangeStart : this._windowEnd - this._windowStart);
        };
        a.prototype._toPixels = function(a) {
          return this._toPixelsRelative(a - (0 === this._type ? this._rangeStart : this._windowStart));
        };
        a.prototype._toTimeRelative = function(a) {
          return a * (0 === this._type ? this._rangeEnd - this._rangeStart : this._windowEnd - this._windowStart) / this._width;
        };
        a.prototype._toTime = function(a) {
          return this._toTimeRelative(a) + (0 === this._type ? this._rangeStart : this._windowStart);
        };
        a.prototype._getDragTargetUnderCursor = function(a, b) {
          if (0 <= b && b < this._height) {
            if (0 === this._type) {
              var g = this._toPixels(this._windowStart), p = this._toPixels(this._windowEnd), h = 2 + q.FlameChartBase.DRAGHANDLE_WIDTH / 2, g = a >= g - h && a <= g + h, p = a >= p - h && a <= p + h;
              if (g && p) {
                return 4;
              }
              if (g) {
                return 2;
              }
              if (p) {
                return 3;
              }
            }
            if (!this._windowEqRange()) {
              return 1;
            }
          }
          return 0;
        };
        a.prototype.onMouseDown = function(a, b) {
          var g = this._getDragTargetUnderCursor(a, b);
          1 === g && this._mouseController.updateCursor(q.MouseCursor.GRABBING);
          this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:g};
        };
        a.prototype.onMouseMove = function(a, b) {
          var g = q.MouseCursor.DEFAULT, p = this._getDragTargetUnderCursor(a, b);
          0 !== p && (1 !== p ? g = q.MouseCursor.EW_RESIZE : 1 !== p || this._windowEqRange() || (g = q.MouseCursor.GRAB));
          this._mouseController.updateCursor(g);
        };
        a.prototype.onMouseOver = function(a, b) {
          this.onMouseMove(a, b);
        };
        a.prototype.onMouseOut = function() {
          this._mouseController.updateCursor(q.MouseCursor.DEFAULT);
        };
        a.prototype.onDrag = function(a, h, g, p, u, n) {
          a = this._dragInfo;
          if (4 === a.target) {
            if (0 !== u) {
              a.target = 0 > u ? 2 : 3;
            } else {
              return;
            }
          }
          h = this._windowStart;
          g = this._windowEnd;
          u = this._toTimeRelative(u);
          switch(a.target) {
            case 1:
              g = 0 === this._type ? 1 : -1;
              h = a.windowStartInitial + g * u;
              g = a.windowEndInitial + g * u;
              break;
            case 2:
              h = b(a.windowStartInitial + u, this._rangeStart, g - q.FlameChartBase.MIN_WINDOW_LEN);
              break;
            case 3:
              g = b(a.windowEndInitial + u, h + q.FlameChartBase.MIN_WINDOW_LEN, this._rangeEnd);
              break;
            default:
              return;
          }
          this._controller.setWindow(h, g);
        };
        a.prototype.onDragEnd = function(a, b, g, p, h, n) {
          this._dragInfo = null;
          this.onMouseMove(g, p);
        };
        a.prototype.onClick = function(a, b) {
          1 === this._dragInfo.target && this._mouseController.updateCursor(q.MouseCursor.GRAB);
        };
        a.prototype.onHoverStart = function(a, b) {
        };
        a.prototype.onHoverEnd = function() {
        };
        a.TICK_MAX_WIDTH = 75;
        return a;
      }(q.FlameChartBase);
      q.FlameChartHeader = w;
    })(q.Profiler || (q.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(h) {
      (function(b) {
        var h = function() {
          function a(a, b, g, p, h) {
            this.pageLoaded = a;
            this.threadsTotal = b;
            this.threadsLoaded = g;
            this.threadFilesTotal = p;
            this.threadFilesLoaded = h;
          }
          a.prototype.toString = function() {
            return "[" + ["pageLoaded", "threadsTotal", "threadsLoaded", "threadFilesTotal", "threadFilesLoaded"].map(function(a, b, g) {
              return a + ":" + this[a];
            }, this).join(", ") + "]";
          };
          return a;
        }();
        b.TraceLoggerProgressInfo = h;
        var l = function() {
          function a(a) {
            this._baseUrl = a;
            this._threads = [];
            this._progressInfo = null;
          }
          a.prototype.loadPage = function(a, b, g) {
            this._threads = [];
            this._pageLoadCallback = b;
            this._pageLoadProgressCallback = g;
            this._progressInfo = new h(!1, 0, 0, 0, 0);
            this._loadData([a], this._onLoadPage.bind(this));
          };
          Object.defineProperty(a.prototype, "buffers", {get:function() {
            for (var a = [], b = 0, g = this._threads.length;b < g;b++) {
              a.push(this._threads[b].buffer);
            }
            return a;
          }, enumerable:!0, configurable:!0});
          a.prototype._onProgress = function() {
            this._pageLoadProgressCallback && this._pageLoadProgressCallback.call(this, this._progressInfo);
          };
          a.prototype._onLoadPage = function(a) {
            if (a && 1 == a.length) {
              var h = this, g = 0;
              a = a[0];
              var p = a.length;
              this._threads = Array(p);
              this._progressInfo.pageLoaded = !0;
              this._progressInfo.threadsTotal = p;
              for (var u = 0;u < a.length;u++) {
                var n = a[u], v = [n.dict, n.tree];
                n.corrections && v.push(n.corrections);
                this._progressInfo.threadFilesTotal += v.length;
                this._loadData(v, function(a) {
                  return function(f) {
                    f && (f = new b.Thread(f), f.buffer.name = "Thread " + a, h._threads[a] = f);
                    g++;
                    h._progressInfo.threadsLoaded++;
                    h._onProgress();
                    g === p && h._pageLoadCallback.call(h, null, h._threads);
                  };
                }(u), function(a) {
                  h._progressInfo.threadFilesLoaded++;
                  h._onProgress();
                });
              }
              this._onProgress();
            } else {
              this._pageLoadCallback.call(this, "Error loading page.", null);
            }
          };
          a.prototype._loadData = function(a, b, g) {
            var p = 0, h = 0, n = a.length, v = [];
            v.length = n;
            for (var d = 0;d < n;d++) {
              var f = this._baseUrl + a[d], e = new XMLHttpRequest, c = /\.tl$/i.test(f) ? "arraybuffer" : "json";
              e.open("GET", f, !0);
              e.responseType = c;
              e.onload = function(c, e) {
                return function(a) {
                  if ("json" === e) {
                    if (a = this.response, "string" === typeof a) {
                      try {
                        a = JSON.parse(a), v[c] = a;
                      } catch (f) {
                        h++;
                      }
                    } else {
                      v[c] = a;
                    }
                  } else {
                    v[c] = this.response;
                  }
                  ++p;
                  g && g(p);
                  p === n && b(v);
                };
              }(d, c);
              e.send();
            }
          };
          a.colors = "#0044ff #8c4b00 #cc5c33 #ff80c4 #ffbfd9 #ff8800 #8c5e00 #adcc33 #b380ff #bfd9ff #ffaa00 #8c0038 #bf8f30 #f780ff #cc99c9 #aaff00 #000073 #452699 #cc8166 #cca799 #000066 #992626 #cc6666 #ccc299 #ff6600 #526600 #992663 #cc6681 #99ccc2 #ff0066 #520066 #269973 #61994d #739699 #ffcc00 #006629 #269199 #94994d #738299 #ff0000 #590000 #234d8c #8c6246 #7d7399 #ee00ff #00474d #8c2385 #8c7546 #7c8c69 #eeff00 #4d003d #662e1a #62468c #8c6969 #6600ff #4c2900 #1a6657 #8c464f #8c6981 #44ff00 #401100 #1a2466 #663355 #567365 #d90074 #403300 #101d40 #59562d #66614d #cc0000 #002b40 #234010 #4c2626 #4d5e66 #00a3cc #400011 #231040 #4c3626 #464359 #0000bf #331b00 #80e6ff #311a33 #4d3939 #a69b00 #003329 #80ffb2 #331a20 #40303d #00a658 #40ffd9 #ffc480 #ffe1bf #332b26 #8c2500 #9933cc #80fff6 #ffbfbf #303326 #005e8c #33cc47 #b2ff80 #c8bfff #263332 #00708c #cc33ad #ffe680 #f2ffbf #262a33 #388c00 #335ccc #8091ff #bfffd9".split(" ");
          return a;
        }();
        b.TraceLogger = l;
      })(h.TraceLogger || (h.TraceLogger = {}));
    })(h.Profiler || (h.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(h) {
      (function(b) {
        var q;
        (function(b) {
          b[b.START_HI = 0] = "START_HI";
          b[b.START_LO = 4] = "START_LO";
          b[b.STOP_HI = 8] = "STOP_HI";
          b[b.STOP_LO = 12] = "STOP_LO";
          b[b.TEXTID = 16] = "TEXTID";
          b[b.NEXTID = 20] = "NEXTID";
        })(q || (q = {}));
        q = function() {
          function b(a) {
            2 <= a.length && (this._text = a[0], this._data = new DataView(a[1]), this._buffer = new h.TimelineBuffer, this._walkTree(0));
          }
          Object.defineProperty(b.prototype, "buffer", {get:function() {
            return this._buffer;
          }, enumerable:!0, configurable:!0});
          b.prototype._walkTree = function(a) {
            var h = this._data, t = this._buffer;
            do {
              var g = a * b.ITEM_SIZE, p = 4294967295 * h.getUint32(g + 0) + h.getUint32(g + 4), u = 4294967295 * h.getUint32(g + 8) + h.getUint32(g + 12), n = h.getUint32(g + 16), g = h.getUint32(g + 20), v = 1 === (n & 1), n = n >>> 1, n = this._text[n];
              t.enter(n, null, p / 1E6);
              v && this._walkTree(a + 1);
              t.leave(n, null, u / 1E6);
              a = g;
            } while (0 !== a);
          };
          b.ITEM_SIZE = 24;
          return b;
        }();
        b.Thread = q;
      })(h.TraceLogger || (h.TraceLogger = {}));
    })(h.Profiler || (h.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(q) {
    (function(q) {
      var b = h.NumberUtilities.clamp, w = function() {
        function a() {
          this.length = 0;
          this.lines = [];
          this.format = [];
          this.time = [];
          this.repeat = [];
          this.length = 0;
        }
        a.prototype.append = function(a, b) {
          var g = this.lines;
          0 < g.length && g[g.length - 1] === a ? this.repeat[g.length - 1]++ : (this.lines.push(a), this.repeat.push(1), this.format.push(b ? {backgroundFillStyle:b} : void 0), this.time.push(performance.now()), this.length++);
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
      q.Buffer = w;
      var l = function() {
        function a(a) {
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
          this.buffer = new w;
          a.addEventListener("keydown", function(a) {
            var k = 0;
            switch(a.keyCode) {
              case x:
                this.printHelp();
                break;
              case m:
                this.showLineNumbers = !this.showLineNumbers;
                break;
              case y:
                this.showLineTime = !this.showLineTime;
                break;
              case n:
                k = -1;
                break;
              case v:
                k = 1;
                break;
              case b:
                k = -this.pageLineCount;
                break;
              case g:
                k = this.pageLineCount;
                break;
              case p:
                k = -this.lineIndex;
                break;
              case h:
                k = this.buffer.length - this.lineIndex;
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
              case e:
                if (a.metaKey || a.ctrlKey) {
                  this.selection = {start:0, end:this.buffer.length - 1}, a.preventDefault();
                }
                break;
              case c:
              ;
              case H:
                if (a.metaKey || a.ctrlKey) {
                  var l = "";
                  if (this.selection) {
                    for (var q = this.selection.start;q <= this.selection.end;q++) {
                      l += this.buffer.get(q) + "\n";
                    }
                  } else {
                    l = this.buffer.get(this.lineIndex);
                  }
                  a.keyCode === c ? alert(l) : window.open(URL.createObjectURL(new Blob([l], {type:"text/plain"})), "_blank");
                }
              ;
            }
            a.metaKey && (k *= this.pageLineCount);
            k && (this.scroll(k), a.preventDefault());
            k && a.shiftKey ? this.selection ? this.lineIndex > this.selection.start ? this.selection.end = this.lineIndex : this.selection.start = this.lineIndex : 0 < k ? this.selection = {start:this.lineIndex - k, end:this.lineIndex} : 0 > k && (this.selection = {start:this.lineIndex, end:this.lineIndex - k}) : k && (this.selection = null);
            this.paint();
          }.bind(this), !1);
          a.addEventListener("focus", function(c) {
            this.hasFocus = !0;
          }.bind(this), !1);
          a.addEventListener("blur", function(c) {
            this.hasFocus = !1;
          }.bind(this), !1);
          var b = 33, g = 34, p = 36, h = 35, n = 38, v = 40, d = 37, f = 39, e = 65, c = 67, m = 78, y = 84, x = 72, H = 83;
        }
        a.prototype.printHelp = function() {
          var a = this;
          "h - help;n - turn on/off line numbers;t - turn on/off line time;arrow_keys - navigation;cmd/ctrl+a - select all;cmd/ctrl+c - copy/alert selection;cmd/ctrl+s - open selection in new tab;shift+arrow_keys - selection".split(";").forEach(function(b) {
            return a.buffer.append(b, "#002000");
          });
        };
        a.prototype.resize = function() {
          this._resizeHandler();
        };
        a.prototype._resizeHandler = function() {
          var a = this.canvas.parentElement, b = a.clientWidth, a = a.clientHeight && a.clientHeight - 1, g = window.devicePixelRatio || 1;
          1 !== g ? (this.ratio = g / 1, this.canvas.width = b * this.ratio, this.canvas.height = a * this.ratio, this.canvas.style.width = b + "px", this.canvas.style.height = a + "px") : (this.ratio = 1, this.canvas.width = b, this.canvas.height = a);
          this.pageLineCount = Math.floor(this.canvas.height / this.lineHeight);
        };
        a.prototype.gotoLine = function(a) {
          this.lineIndex = b(a, 0, this.buffer.length - 1);
        };
        a.prototype.scrollIntoView = function() {
          this.lineIndex < this.pageIndex ? this.pageIndex = this.lineIndex : this.lineIndex >= this.pageIndex + this.pageLineCount && (this.pageIndex = this.lineIndex - this.pageLineCount + 1);
        };
        a.prototype.scroll = function(a) {
          this.gotoLine(this.lineIndex + a);
          this.scrollIntoView();
        };
        a.prototype.paint = function() {
          var a = this.pageLineCount;
          this.pageIndex + a > this.buffer.length && (a = this.buffer.length - this.pageIndex);
          var b = this.textMarginLeft, g = b + (this.showLineNumbers ? 5 * (String(this.buffer.length).length + 2) : 0), p = g + (this.showLineTime ? 40 : 10), h = p + 25;
          this.context.font = this.fontSize + 'px Consolas, "Liberation Mono", Courier, monospace';
          this.context.setTransform(this.ratio, 0, 0, this.ratio, 0, 0);
          for (var n = this.canvas.width, v = this.lineHeight, d = 0;d < a;d++) {
            var f = d * this.lineHeight, e = this.pageIndex + d, c = this.buffer.get(e), m = this.buffer.getFormat(e), y = this.buffer.getRepeat(e), x = 1 < e ? this.buffer.getTime(e) - this.buffer.getTime(0) : 0;
            this.context.fillStyle = e % 2 ? this.lineColor : this.alternateLineColor;
            m && m.backgroundFillStyle && (this.context.fillStyle = m.backgroundFillStyle);
            this.context.fillRect(0, f, n, v);
            this.context.fillStyle = this.selectionTextColor;
            this.context.fillStyle = this.textColor;
            this.selection && e >= this.selection.start && e <= this.selection.end && (this.context.fillStyle = this.selectionColor, this.context.fillRect(0, f, n, v), this.context.fillStyle = this.selectionTextColor);
            this.hasFocus && e === this.lineIndex && (this.context.fillStyle = this.selectionColor, this.context.fillRect(0, f, n, v), this.context.fillStyle = this.selectionTextColor);
            0 < this.columnIndex && (c = c.substring(this.columnIndex));
            f = (d + 1) * this.lineHeight - this.textMarginBottom;
            this.showLineNumbers && this.context.fillText(String(e), b, f);
            this.showLineTime && this.context.fillText(x.toFixed(1).padLeft(" ", 6), g, f);
            1 < y && this.context.fillText(String(y).padLeft(" ", 3), p, f);
            this.context.fillText(c, h, f);
          }
        };
        a.prototype.refreshEvery = function(a) {
          function b() {
            g.paint();
            g.refreshFrequency && setTimeout(b, g.refreshFrequency);
          }
          var g = this;
          this.refreshFrequency = a;
          g.refreshFrequency && setTimeout(b, g.refreshFrequency);
        };
        a.prototype.isScrolledToBottom = function() {
          return this.lineIndex === this.buffer.length - 1;
        };
        return a;
      }();
      q.Terminal = l;
    })(q.Terminal || (q.Terminal = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(h) {
      var b = function() {
        function b(h) {
          this._lastWeightedTime = this._lastTime = this._index = 0;
          this._gradient = "#FF0000 #FF1100 #FF2300 #FF3400 #FF4600 #FF5700 #FF6900 #FF7B00 #FF8C00 #FF9E00 #FFAF00 #FFC100 #FFD300 #FFE400 #FFF600 #F7FF00 #E5FF00 #D4FF00 #C2FF00 #B0FF00 #9FFF00 #8DFF00 #7CFF00 #6AFF00 #58FF00 #47FF00 #35FF00 #24FF00 #12FF00 #00FF00".split(" ");
          this._container = h;
          this._canvas = document.createElement("canvas");
          this._container.appendChild(this._canvas);
          this._context = this._canvas.getContext("2d");
          this._listenForContainerSizeChanges();
        }
        b.prototype._listenForContainerSizeChanges = function() {
          var b = this._containerWidth, a = this._containerHeight;
          this._onContainerSizeChanged();
          var h = this;
          setInterval(function() {
            if (b !== h._containerWidth || a !== h._containerHeight) {
              h._onContainerSizeChanged(), b = h._containerWidth, a = h._containerHeight;
            }
          }, 10);
        };
        b.prototype._onContainerSizeChanged = function() {
          var b = this._containerWidth, a = this._containerHeight, h = window.devicePixelRatio || 1;
          1 !== h ? (this._ratio = h / 1, this._canvas.width = b * this._ratio, this._canvas.height = a * this._ratio, this._canvas.style.width = b + "px", this._canvas.style.height = a + "px") : (this._ratio = 1, this._canvas.width = b, this._canvas.height = a);
        };
        Object.defineProperty(b.prototype, "_containerWidth", {get:function() {
          return this._container.clientWidth;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(b.prototype, "_containerHeight", {get:function() {
          return this._container.clientHeight;
        }, enumerable:!0, configurable:!0});
        b.prototype.tickAndRender = function(b, a) {
          void 0 === b && (b = !1);
          void 0 === a && (a = 0);
          if (0 === this._lastTime) {
            this._lastTime = performance.now();
          } else {
            var h = 1 * (performance.now() - this._lastTime) + 0 * this._lastWeightedTime, t = this._context, g = 2 * this._ratio, p = 30 * this._ratio, u = performance;
            u.memory && (p += 30 * this._ratio);
            var n = (this._canvas.width - p) / (g + 1) | 0, v = this._index++;
            this._index > n && (this._index = 0);
            n = this._canvas.height;
            t.globalAlpha = 1;
            t.fillStyle = "black";
            t.fillRect(p + v * (g + 1), 0, 4 * g, this._canvas.height);
            var d = Math.min(1E3 / 60 / h, 1);
            t.fillStyle = "#00FF00";
            t.globalAlpha = b ? .5 : 1;
            d = n / 2 * d | 0;
            t.fillRect(p + v * (g + 1), n - d, g, d);
            a && (d = Math.min(1E3 / 240 / a, 1), t.fillStyle = "#FF6347", d = n / 2 * d | 0, t.fillRect(p + v * (g + 1), n / 2 - d, g, d));
            0 === v % 16 && (t.globalAlpha = 1, t.fillStyle = "black", t.fillRect(0, 0, p, this._canvas.height), t.fillStyle = "white", t.font = 8 * this._ratio + "px Arial", t.textBaseline = "middle", g = (1E3 / h).toFixed(0), a && (g += " " + a.toFixed(0)), u.memory && (g += " " + (u.memory.usedJSHeapSize / 1024 / 1024).toFixed(2)), t.fillText(g, 2 * this._ratio, this._containerHeight / 2 * this._ratio));
            this._lastTime = performance.now();
            this._lastWeightedTime = h;
          }
        };
        return b;
      }();
      h.FPS = b;
    })(h.Mini || (h.Mini = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
console.timeEnd("Load Shared Dependencies");
console.time("Load GFX Dependencies");
(function(h) {
  (function(q) {
    function r(c, e, a) {
      return t && a ? "string" === typeof e ? (c = h.ColorUtilities.cssStyleToRGBA(e), h.ColorUtilities.rgbaToCSSStyle(a.transformRGBA(c))) : e instanceof CanvasGradient && e._template ? e._template.createCanvasGradient(c, a) : e : e;
    }
    var b = h.NumberUtilities.clamp;
    (function(c) {
      c[c.None = 0] = "None";
      c[c.Brief = 1] = "Brief";
      c[c.Verbose = 2] = "Verbose";
    })(q.TraceLevel || (q.TraceLevel = {}));
    var w = h.Metrics.Counter.instance;
    q.frameCounter = new h.Metrics.Counter(!0);
    q.traceLevel = 2;
    q.writer = null;
    q.frameCount = function(c) {
      w.count(c);
      q.frameCounter.count(c);
    };
    q.timelineBuffer = new h.Tools.Profiler.TimelineBuffer("GFX");
    q.enterTimeline = function(c, e) {
    };
    q.leaveTimeline = function(c, e) {
    };
    var l = null, a = null, k = null, t = !0;
    t && "undefined" !== typeof CanvasRenderingContext2D && (l = CanvasGradient.prototype.addColorStop, a = CanvasRenderingContext2D.prototype.createLinearGradient, k = CanvasRenderingContext2D.prototype.createRadialGradient, CanvasRenderingContext2D.prototype.createLinearGradient = function(c, e, a, b) {
      return (new p(c, e, a, b)).createCanvasGradient(this, null);
    }, CanvasRenderingContext2D.prototype.createRadialGradient = function(c, e, a, b, f, d) {
      return (new u(c, e, a, b, f, d)).createCanvasGradient(this, null);
    }, CanvasGradient.prototype.addColorStop = function(c, e) {
      l.call(this, c, e);
      this._template.addColorStop(c, e);
    });
    var g = function() {
      return function(c, e) {
        this.offset = c;
        this.color = e;
      };
    }(), p = function() {
      function c(e, a, b, f) {
        this.x0 = e;
        this.y0 = a;
        this.x1 = b;
        this.y1 = f;
        this.colorStops = [];
      }
      c.prototype.addColorStop = function(c, e) {
        this.colorStops.push(new g(c, e));
      };
      c.prototype.createCanvasGradient = function(c, e) {
        for (var b = a.call(c, this.x0, this.y0, this.x1, this.y1), f = this.colorStops, d = 0;d < f.length;d++) {
          var m = f[d], x = m.offset, m = m.color, m = e ? r(c, m, e) : m;
          l.call(b, x, m);
        }
        b._template = this;
        b._transform = this._transform;
        return b;
      };
      return c;
    }(), u = function() {
      function c(e, a, b, f, d, m) {
        this.x0 = e;
        this.y0 = a;
        this.r0 = b;
        this.x1 = f;
        this.y1 = d;
        this.r1 = m;
        this.colorStops = [];
      }
      c.prototype.addColorStop = function(c, e) {
        this.colorStops.push(new g(c, e));
      };
      c.prototype.createCanvasGradient = function(c, e) {
        for (var a = k.call(c, this.x0, this.y0, this.r0, this.x1, this.y1, this.r1), b = this.colorStops, f = 0;f < b.length;f++) {
          var d = b[f], m = d.offset, d = d.color, d = e ? r(c, d, e) : d;
          l.call(a, m, d);
        }
        a._template = this;
        a._transform = this._transform;
        return a;
      };
      return c;
    }(), n;
    (function(c) {
      c[c.ClosePath = 1] = "ClosePath";
      c[c.MoveTo = 2] = "MoveTo";
      c[c.LineTo = 3] = "LineTo";
      c[c.QuadraticCurveTo = 4] = "QuadraticCurveTo";
      c[c.BezierCurveTo = 5] = "BezierCurveTo";
      c[c.ArcTo = 6] = "ArcTo";
      c[c.Rect = 7] = "Rect";
      c[c.Arc = 8] = "Arc";
      c[c.Save = 9] = "Save";
      c[c.Restore = 10] = "Restore";
      c[c.Transform = 11] = "Transform";
    })(n || (n = {}));
    var v = function() {
      function c(e) {
        this._commands = new Uint8Array(c._arrayBufferPool.acquire(8), 0, 8);
        this._commandPosition = 0;
        this._data = new Float64Array(c._arrayBufferPool.acquire(8 * Float64Array.BYTES_PER_ELEMENT), 0, 8);
        this._dataPosition = 0;
        e instanceof c && this.addPath(e);
      }
      c._apply = function(c, e) {
        var a = c._commands, b = c._data, f = 0, d = 0;
        e.beginPath();
        for (var m = c._commandPosition;f < m;) {
          switch(a[f++]) {
            case 1:
              e.closePath();
              break;
            case 2:
              e.moveTo(b[d++], b[d++]);
              break;
            case 3:
              e.lineTo(b[d++], b[d++]);
              break;
            case 4:
              e.quadraticCurveTo(b[d++], b[d++], b[d++], b[d++]);
              break;
            case 5:
              e.bezierCurveTo(b[d++], b[d++], b[d++], b[d++], b[d++], b[d++]);
              break;
            case 6:
              e.arcTo(b[d++], b[d++], b[d++], b[d++], b[d++]);
              break;
            case 7:
              e.rect(b[d++], b[d++], b[d++], b[d++]);
              break;
            case 8:
              e.arc(b[d++], b[d++], b[d++], b[d++], b[d++], !!b[d++]);
              break;
            case 9:
              e.save();
              break;
            case 10:
              e.restore();
              break;
            case 11:
              e.transform(b[d++], b[d++], b[d++], b[d++], b[d++], b[d++]);
          }
        }
      };
      c.prototype._ensureCommandCapacity = function(e) {
        this._commands = c._arrayBufferPool.ensureUint8ArrayLength(this._commands, e);
      };
      c.prototype._ensureDataCapacity = function(e) {
        this._data = c._arrayBufferPool.ensureFloat64ArrayLength(this._data, e);
      };
      c.prototype._writeCommand = function(c) {
        this._commandPosition >= this._commands.length && this._ensureCommandCapacity(this._commandPosition + 1);
        this._commands[this._commandPosition++] = c;
      };
      c.prototype._writeData = function(c, e, a, b, f, d) {
        var m = arguments.length;
        this._dataPosition + m >= this._data.length && this._ensureDataCapacity(this._dataPosition + m);
        var x = this._data, g = this._dataPosition;
        x[g] = c;
        x[g + 1] = e;
        2 < m && (x[g + 2] = a, x[g + 3] = b, 4 < m && (x[g + 4] = f, 6 === m && (x[g + 5] = d)));
        this._dataPosition += m;
      };
      c.prototype.closePath = function() {
        this._writeCommand(1);
      };
      c.prototype.moveTo = function(c, e) {
        this._writeCommand(2);
        this._writeData(c, e);
      };
      c.prototype.lineTo = function(c, e) {
        this._writeCommand(3);
        this._writeData(c, e);
      };
      c.prototype.quadraticCurveTo = function(c, e, a, b) {
        this._writeCommand(4);
        this._writeData(c, e, a, b);
      };
      c.prototype.bezierCurveTo = function(c, e, a, b, f, d) {
        this._writeCommand(5);
        this._writeData(c, e, a, b, f, d);
      };
      c.prototype.arcTo = function(c, e, a, b, f) {
        this._writeCommand(6);
        this._writeData(c, e, a, b, f);
      };
      c.prototype.rect = function(c, e, a, b) {
        this._writeCommand(7);
        this._writeData(c, e, a, b);
      };
      c.prototype.arc = function(c, e, a, b, f, d) {
        this._writeCommand(8);
        this._writeData(c, e, a, b, f, +d);
      };
      c.prototype.addPath = function(c, e) {
        e && (this._writeCommand(9), this._writeCommand(11), this._writeData(e.a, e.b, e.c, e.d, e.e, e.f));
        var a = this._commandPosition + c._commandPosition;
        a >= this._commands.length && this._ensureCommandCapacity(a);
        for (var b = this._commands, f = c._commands, d = this._commandPosition, m = 0;d < a;d++) {
          b[d] = f[m++];
        }
        this._commandPosition = a;
        a = this._dataPosition + c._dataPosition;
        a >= this._data.length && this._ensureDataCapacity(a);
        b = this._data;
        f = c._data;
        d = this._dataPosition;
        for (m = 0;d < a;d++) {
          b[d] = f[m++];
        }
        this._dataPosition = a;
        e && this._writeCommand(10);
      };
      c._arrayBufferPool = new h.ArrayBufferPool;
      return c;
    }();
    q.Path = v;
    if ("undefined" !== typeof CanvasRenderingContext2D && ("undefined" === typeof Path2D || !Path2D.prototype.addPath)) {
      var d = CanvasRenderingContext2D.prototype.fill;
      CanvasRenderingContext2D.prototype.fill = function(c, e) {
        arguments.length && (c instanceof v ? v._apply(c, this) : e = c);
        e ? d.call(this, e) : d.call(this);
      };
      var f = CanvasRenderingContext2D.prototype.stroke;
      CanvasRenderingContext2D.prototype.stroke = function(c, e) {
        arguments.length && (c instanceof v ? v._apply(c, this) : e = c);
        e ? f.call(this, e) : f.call(this);
      };
      var e = CanvasRenderingContext2D.prototype.clip;
      CanvasRenderingContext2D.prototype.clip = function(c, a) {
        arguments.length && (c instanceof v ? v._apply(c, this) : a = c);
        a ? e.call(this, a) : e.call(this);
      };
      window.Path2D = v;
    }
    if ("undefined" !== typeof CanvasPattern && Path2D.prototype.addPath) {
      n = function(c) {
        this._transform = c;
        this._template && (this._template._transform = c);
      };
      CanvasPattern.prototype.setTransform || (CanvasPattern.prototype.setTransform = n);
      CanvasGradient.prototype.setTransform || (CanvasGradient.prototype.setTransform = n);
      var c = CanvasRenderingContext2D.prototype.fill, m = CanvasRenderingContext2D.prototype.stroke;
      CanvasRenderingContext2D.prototype.fill = function(e, a) {
        var b = !!this.fillStyle._transform;
        if ((this.fillStyle instanceof CanvasPattern || this.fillStyle instanceof CanvasGradient) && b && e instanceof Path2D) {
          var b = this.fillStyle._transform, f;
          try {
            f = b.inverse();
          } catch (d) {
            f = b = q.Geometry.Matrix.createIdentitySVGMatrix();
          }
          this.transform(b.a, b.b, b.c, b.d, b.e, b.f);
          b = new Path2D;
          b.addPath(e, f);
          c.call(this, b, a);
          this.transform(f.a, f.b, f.c, f.d, f.e, f.f);
        } else {
          0 === arguments.length ? c.call(this) : 1 === arguments.length ? c.call(this, e) : 2 === arguments.length && c.call(this, e, a);
        }
      };
      CanvasRenderingContext2D.prototype.stroke = function(c) {
        var e = !!this.strokeStyle._transform;
        if ((this.strokeStyle instanceof CanvasPattern || this.strokeStyle instanceof CanvasGradient) && e && c instanceof Path2D) {
          var a = this.strokeStyle._transform, e = a.inverse();
          this.transform(a.a, a.b, a.c, a.d, a.e, a.f);
          a = new Path2D;
          a.addPath(c, e);
          var b = this.lineWidth;
          this.lineWidth *= (e.a + e.d) / 2;
          m.call(this, a);
          this.transform(e.a, e.b, e.c, e.d, e.e, e.f);
          this.lineWidth = b;
        } else {
          0 === arguments.length ? m.call(this) : 1 === arguments.length && m.call(this, c);
        }
      };
    }
    "undefined" !== typeof CanvasRenderingContext2D && function() {
      function c() {
        return q.Geometry.Matrix.createSVGMatrixFromArray(this.mozCurrentTransform);
      }
      var e = "currentTransform" in CanvasRenderingContext2D.prototype;
      CanvasRenderingContext2D.prototype.flashStroke = function(c, a) {
        if (e) {
          var f = this.currentTransform, d = new Path2D;
          d.addPath(c, f);
          var m = this.lineWidth;
          this.setTransform(1, 0, 0, 1, 0, 0);
          switch(a) {
            case 1:
              this.lineWidth = b(m * Math.sqrt((f.a + f.c) * (f.a + f.c) + (f.d + f.b) * (f.d + f.b)) * Math.SQRT1_2, 1, 1024);
              break;
            case 2:
              this.lineWidth = b(m * (f.d + f.b), 1, 1024);
              break;
            case 3:
              this.lineWidth = b(m * (f.a + f.c), 1, 1024);
          }
          this.stroke(d);
          this.setTransform(f.a, f.b, f.c, f.d, f.e, f.f);
          this.lineWidth = m;
        } else {
          this.stroke(c);
        }
      };
      if (!e) {
        if ("mozCurrentTransform" in CanvasRenderingContext2D.prototype) {
          Object.defineProperty(CanvasRenderingContext2D.prototype, "currentTransform", {get:c}), e = !0;
        } else {
          var a = CanvasRenderingContext2D.prototype.setTransform;
          CanvasRenderingContext2D.prototype.setTransform = function(c, e, b, f, d, m) {
            var x = this.currentTransform;
            x.a = c;
            x.b = e;
            x.c = b;
            x.d = f;
            x.e = d;
            x.f = m;
            a.call(this, c, e, b, f, d, m);
          };
          Object.defineProperty(CanvasRenderingContext2D.prototype, "currentTransform", {get:function() {
            return this._currentTransform || (this._currentTransform = q.Geometry.Matrix.createIdentitySVGMatrix());
          }});
        }
      }
    }();
    if ("undefined" !== typeof CanvasRenderingContext2D && void 0 === CanvasRenderingContext2D.prototype.globalColorMatrix) {
      var y = CanvasRenderingContext2D.prototype.fill, x = CanvasRenderingContext2D.prototype.stroke, H = CanvasRenderingContext2D.prototype.fillText, da = CanvasRenderingContext2D.prototype.strokeText;
      Object.defineProperty(CanvasRenderingContext2D.prototype, "globalColorMatrix", {get:function() {
        return this._globalColorMatrix ? this._globalColorMatrix.clone() : null;
      }, set:function(c) {
        c ? this._globalColorMatrix ? this._globalColorMatrix.set(c) : this._globalColorMatrix = c.clone() : this._globalColorMatrix = null;
      }, enumerable:!0, configurable:!0});
      CanvasRenderingContext2D.prototype.fill = function(c, e) {
        var a = null;
        this._globalColorMatrix && (a = this.fillStyle, this.fillStyle = r(this, this.fillStyle, this._globalColorMatrix));
        0 === arguments.length ? y.call(this) : 1 === arguments.length ? y.call(this, c) : 2 === arguments.length && y.call(this, c, e);
        a && (this.fillStyle = a);
      };
      CanvasRenderingContext2D.prototype.stroke = function(c, e) {
        var a = null;
        this._globalColorMatrix && (a = this.strokeStyle, this.strokeStyle = r(this, this.strokeStyle, this._globalColorMatrix));
        0 === arguments.length ? x.call(this) : 1 === arguments.length && x.call(this, c);
        a && (this.strokeStyle = a);
      };
      CanvasRenderingContext2D.prototype.fillText = function(c, e, a, b) {
        var f = null;
        this._globalColorMatrix && (f = this.fillStyle, this.fillStyle = r(this, this.fillStyle, this._globalColorMatrix));
        3 === arguments.length ? H.call(this, c, e, a) : 4 === arguments.length ? H.call(this, c, e, a, b) : h.Debug.unexpected();
        f && (this.fillStyle = f);
      };
      CanvasRenderingContext2D.prototype.strokeText = function(c, e, a, b) {
        var f = null;
        this._globalColorMatrix && (f = this.strokeStyle, this.strokeStyle = r(this, this.strokeStyle, this._globalColorMatrix));
        3 === arguments.length ? da.call(this, c, e, a) : 4 === arguments.length ? da.call(this, c, e, a, b) : h.Debug.unexpected();
        f && (this.strokeStyle = f);
      };
    }
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    h.ScreenShot = function() {
      return function(h, b, q, l) {
        this.dataURL = h;
        this.w = b;
        this.h = q;
        this.pixelRatio = l;
      };
    }();
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  var q = function() {
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
    h.prototype._unshift = function(b) {
      0 === this._count ? this._head = this._tail = b : (b.next = this._head, this._head = b.next.previous = b);
      this._count++;
    };
    h.prototype._remove = function(b) {
      b === this._head && b === this._tail ? this._head = this._tail = null : b === this._head ? (this._head = b.next, this._head.previous = null) : b == this._tail ? (this._tail = b.previous, this._tail.next = null) : (b.previous.next = b.next, b.next.previous = b.previous);
      b.previous = b.next = null;
      this._count--;
    };
    h.prototype.use = function(b) {
      this._head !== b && ((b.next || b.previous || this._tail === b) && this._remove(b), this._unshift(b));
    };
    h.prototype.pop = function() {
      if (!this._tail) {
        return null;
      }
      var b = this._tail;
      this._remove(b);
      return b;
    };
    h.prototype.visit = function(b, h) {
      void 0 === h && (h = !0);
      for (var l = h ? this._head : this._tail;l && b(l);) {
        l = h ? l.next : l.previous;
      }
    };
    return h;
  }();
  h.LRUList = q;
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
  (function(q) {
    (function(r) {
      function b(a, e, c, b) {
        var d = 1 - b;
        return a * d * d + 2 * e * d * b + c * b * b;
      }
      function w(a, e, c, b, d) {
        var x = d * d, g = 1 - d, h = g * g;
        return a * g * h + 3 * e * d * h + 3 * c * g * x + b * d * x;
      }
      var l = h.NumberUtilities.clamp, a = h.NumberUtilities.pow2, k = h.NumberUtilities.epsilonEquals;
      r.radianToDegrees = function(a) {
        return 180 * a / Math.PI;
      };
      r.degreesToRadian = function(a) {
        return a * Math.PI / 180;
      };
      r.quadraticBezier = b;
      r.quadraticBezierExtreme = function(a, e, c) {
        var d = (a - e) / (a - 2 * e + c);
        return 0 > d ? a : 1 < d ? c : b(a, e, c, d);
      };
      r.cubicBezier = w;
      r.cubicBezierExtremes = function(a, e, c, b) {
        var d = e - a, x;
        x = 2 * (c - e);
        var g = b - c;
        d + g === x && (g *= 1.0001);
        var h = 2 * d - x, p = x - 2 * d, p = Math.sqrt(p * p - 4 * d * (d - x + g));
        x = 2 * (d - x + g);
        d = (h + p) / x;
        h = (h - p) / x;
        p = [];
        0 <= d && 1 >= d && p.push(w(a, e, c, b, d));
        0 <= h && 1 >= h && p.push(w(a, e, c, b, h));
        return p;
      };
      var t = function() {
        function a(e, c) {
          this.x = e;
          this.y = c;
        }
        a.prototype.setElements = function(e, c) {
          this.x = e;
          this.y = c;
          return this;
        };
        a.prototype.set = function(e) {
          this.x = e.x;
          this.y = e.y;
          return this;
        };
        a.prototype.dot = function(e) {
          return this.x * e.x + this.y * e.y;
        };
        a.prototype.squaredLength = function() {
          return this.dot(this);
        };
        a.prototype.distanceTo = function(e) {
          return Math.sqrt(this.dot(e));
        };
        a.prototype.sub = function(e) {
          this.x -= e.x;
          this.y -= e.y;
          return this;
        };
        a.prototype.mul = function(e) {
          this.x *= e;
          this.y *= e;
          return this;
        };
        a.prototype.clone = function() {
          return new a(this.x, this.y);
        };
        a.prototype.toString = function(e) {
          void 0 === e && (e = 2);
          return "{x: " + this.x.toFixed(e) + ", y: " + this.y.toFixed(e) + "}";
        };
        a.prototype.inTriangle = function(e, c, a) {
          var b = e.y * a.x - e.x * a.y + (a.y - e.y) * this.x + (e.x - a.x) * this.y, f = e.x * c.y - e.y * c.x + (e.y - c.y) * this.x + (c.x - e.x) * this.y;
          if (0 > b != 0 > f) {
            return !1;
          }
          e = -c.y * a.x + e.y * (a.x - c.x) + e.x * (c.y - a.y) + c.x * a.y;
          0 > e && (b = -b, f = -f, e = -e);
          return 0 < b && 0 < f && b + f < e;
        };
        a.createEmpty = function() {
          return new a(0, 0);
        };
        a.createEmptyPoints = function(e) {
          for (var c = [], b = 0;b < e;b++) {
            c.push(new a(0, 0));
          }
          return c;
        };
        return a;
      }();
      r.Point = t;
      var g = function() {
        function a(e, c, b) {
          this.x = e;
          this.y = c;
          this.z = b;
        }
        a.prototype.setElements = function(e, c, a) {
          this.x = e;
          this.y = c;
          this.z = a;
          return this;
        };
        a.prototype.set = function(e) {
          this.x = e.x;
          this.y = e.y;
          this.z = e.z;
          return this;
        };
        a.prototype.dot = function(e) {
          return this.x * e.x + this.y * e.y + this.z * e.z;
        };
        a.prototype.cross = function(e) {
          var c = this.z * e.x - this.x * e.z, a = this.x * e.y - this.y * e.x;
          this.x = this.y * e.z - this.z * e.y;
          this.y = c;
          this.z = a;
          return this;
        };
        a.prototype.squaredLength = function() {
          return this.dot(this);
        };
        a.prototype.sub = function(e) {
          this.x -= e.x;
          this.y -= e.y;
          this.z -= e.z;
          return this;
        };
        a.prototype.mul = function(e) {
          this.x *= e;
          this.y *= e;
          this.z *= e;
          return this;
        };
        a.prototype.normalize = function() {
          var e = Math.sqrt(this.squaredLength());
          1E-5 < e ? this.mul(1 / e) : this.setElements(0, 0, 0);
          return this;
        };
        a.prototype.clone = function() {
          return new a(this.x, this.y, this.z);
        };
        a.prototype.toString = function(e) {
          void 0 === e && (e = 2);
          return "{x: " + this.x.toFixed(e) + ", y: " + this.y.toFixed(e) + ", z: " + this.z.toFixed(e) + "}";
        };
        a.createEmpty = function() {
          return new a(0, 0, 0);
        };
        a.createEmptyPoints = function(e) {
          for (var c = [], b = 0;b < e;b++) {
            c.push(new a(0, 0, 0));
          }
          return c;
        };
        return a;
      }();
      r.Point3D = g;
      var p = function() {
        function a(e, c, b, d) {
          this.setElements(e, c, b, d);
          a.allocationCount++;
        }
        a.prototype.setElements = function(e, c, a, b) {
          this.x = e;
          this.y = c;
          this.w = a;
          this.h = b;
        };
        a.prototype.set = function(e) {
          this.x = e.x;
          this.y = e.y;
          this.w = e.w;
          this.h = e.h;
        };
        a.prototype.contains = function(e) {
          var c = e.x + e.w, a = e.y + e.h, b = this.x + this.w, d = this.y + this.h;
          return e.x >= this.x && e.x < b && e.y >= this.y && e.y < d && c > this.x && c <= b && a > this.y && a <= d;
        };
        a.prototype.containsPoint = function(e) {
          return e.x >= this.x && e.x < this.x + this.w && e.y >= this.y && e.y < this.y + this.h;
        };
        a.prototype.isContained = function(e) {
          for (var c = 0;c < e.length;c++) {
            if (e[c].contains(this)) {
              return !0;
            }
          }
          return !1;
        };
        a.prototype.isSmallerThan = function(e) {
          return this.w < e.w && this.h < e.h;
        };
        a.prototype.isLargerThan = function(e) {
          return this.w > e.w && this.h > e.h;
        };
        a.prototype.union = function(e) {
          if (this.isEmpty()) {
            this.set(e);
          } else {
            if (!e.isEmpty()) {
              var c = this.x, a = this.y;
              this.x > e.x && (c = e.x);
              this.y > e.y && (a = e.y);
              var b = this.x + this.w;
              b < e.x + e.w && (b = e.x + e.w);
              var d = this.y + this.h;
              d < e.y + e.h && (d = e.y + e.h);
              this.x = c;
              this.y = a;
              this.w = b - c;
              this.h = d - a;
            }
          }
        };
        a.prototype.isEmpty = function() {
          return 0 >= this.w || 0 >= this.h;
        };
        a.prototype.setEmpty = function() {
          this.h = this.w = this.y = this.x = 0;
        };
        a.prototype.intersect = function(e) {
          var c = a.createEmpty();
          if (this.isEmpty() || e.isEmpty()) {
            return c.setEmpty(), c;
          }
          c.x = Math.max(this.x, e.x);
          c.y = Math.max(this.y, e.y);
          c.w = Math.min(this.x + this.w, e.x + e.w) - c.x;
          c.h = Math.min(this.y + this.h, e.y + e.h) - c.y;
          c.isEmpty() && c.setEmpty();
          this.set(c);
        };
        a.prototype.intersects = function(e) {
          if (this.isEmpty() || e.isEmpty()) {
            return !1;
          }
          var c = Math.max(this.x, e.x), a = Math.max(this.y, e.y), c = Math.min(this.x + this.w, e.x + e.w) - c;
          e = Math.min(this.y + this.h, e.y + e.h) - a;
          return !(0 >= c || 0 >= e);
        };
        a.prototype.intersectsTransformedAABB = function(e, c) {
          var b = a._temporary;
          b.set(e);
          c.transformRectangleAABB(b);
          return this.intersects(b);
        };
        a.prototype.intersectsTranslated = function(e, c, a) {
          if (this.isEmpty() || e.isEmpty()) {
            return !1;
          }
          var b = Math.max(this.x, e.x + c), d = Math.max(this.y, e.y + a);
          c = Math.min(this.x + this.w, e.x + c + e.w) - b;
          e = Math.min(this.y + this.h, e.y + a + e.h) - d;
          return !(0 >= c || 0 >= e);
        };
        a.prototype.area = function() {
          return this.w * this.h;
        };
        a.prototype.clone = function() {
          var e = a.allocate();
          e.set(this);
          return e;
        };
        a.allocate = function() {
          var e = a._dirtyStack;
          return e.length ? e.pop() : new a(12345, 67890, 12345, 67890);
        };
        a.prototype.free = function() {
          a._dirtyStack.push(this);
        };
        a.prototype.snap = function() {
          var e = Math.ceil(this.x + this.w), c = Math.ceil(this.y + this.h);
          this.x = Math.floor(this.x);
          this.y = Math.floor(this.y);
          this.w = e - this.x;
          this.h = c - this.y;
          return this;
        };
        a.prototype.scale = function(e, c) {
          this.x *= e;
          this.y *= c;
          this.w *= e;
          this.h *= c;
          return this;
        };
        a.prototype.offset = function(e, c) {
          this.x += e;
          this.y += c;
          return this;
        };
        a.prototype.resize = function(e, c) {
          this.w += e;
          this.h += c;
          return this;
        };
        a.prototype.expand = function(e, c) {
          this.offset(-e, -c).resize(2 * e, 2 * c);
          return this;
        };
        a.prototype.getCenter = function() {
          return new t(this.x + this.w / 2, this.y + this.h / 2);
        };
        a.prototype.getAbsoluteBounds = function() {
          return new a(0, 0, this.w, this.h);
        };
        a.prototype.toString = function(e) {
          void 0 === e && (e = 2);
          return "{" + this.x.toFixed(e) + ", " + this.y.toFixed(e) + ", " + this.w.toFixed(e) + ", " + this.h.toFixed(e) + "}";
        };
        a.createEmpty = function() {
          var e = a.allocate();
          e.setEmpty();
          return e;
        };
        a.createSquare = function(e) {
          return new a(-e / 2, -e / 2, e, e);
        };
        a.createMaxI16 = function() {
          return new a(-32768, -32768, 65535, 65535);
        };
        a.prototype.setMaxI16 = function() {
          this.setElements(-32768, -32768, 65535, 65535);
        };
        a.prototype.getCorners = function(e) {
          e[0].x = this.x;
          e[0].y = this.y;
          e[1].x = this.x + this.w;
          e[1].y = this.y;
          e[2].x = this.x + this.w;
          e[2].y = this.y + this.h;
          e[3].x = this.x;
          e[3].y = this.y + this.h;
        };
        a.allocationCount = 0;
        a._temporary = new a(0, 0, 0, 0);
        a._dirtyStack = [];
        return a;
      }();
      r.Rectangle = p;
      var u = function() {
        function a(e) {
          this.corners = e.map(function(c) {
            return c.clone();
          });
          this.axes = [e[1].clone().sub(e[0]), e[3].clone().sub(e[0])];
          this.origins = [];
          for (var c = 0;2 > c;c++) {
            this.axes[c].mul(1 / this.axes[c].squaredLength()), this.origins.push(e[0].dot(this.axes[c]));
          }
        }
        a.prototype.getBounds = function() {
          return a.getBounds(this.corners);
        };
        a.getBounds = function(e) {
          for (var c = new t(Number.MAX_VALUE, Number.MAX_VALUE), a = new t(Number.MIN_VALUE, Number.MIN_VALUE), b = 0;4 > b;b++) {
            var d = e[b].x, f = e[b].y;
            c.x = Math.min(c.x, d);
            c.y = Math.min(c.y, f);
            a.x = Math.max(a.x, d);
            a.y = Math.max(a.y, f);
          }
          return new p(c.x, c.y, a.x - c.x, a.y - c.y);
        };
        a.prototype.intersects = function(e) {
          return this.intersectsOneWay(e) && e.intersectsOneWay(this);
        };
        a.prototype.intersectsOneWay = function(e) {
          for (var c = 0;2 > c;c++) {
            for (var a = 0;4 > a;a++) {
              var b = e.corners[a].dot(this.axes[c]), d, f;
              0 === a ? f = d = b : b < d ? d = b : b > f && (f = b);
            }
            if (d > 1 + this.origins[c] || f < this.origins[c]) {
              return !1;
            }
          }
          return !0;
        };
        return a;
      }();
      r.OBB = u;
      (function(a) {
        a[a.Unknown = 0] = "Unknown";
        a[a.Identity = 1] = "Identity";
        a[a.Translation = 2] = "Translation";
      })(r.MatrixType || (r.MatrixType = {}));
      var n = function() {
        function a(e, c, b, d, g, h) {
          this._data = new Float64Array(6);
          this._type = 0;
          this.setElements(e, c, b, d, g, h);
          a.allocationCount++;
        }
        Object.defineProperty(a.prototype, "a", {get:function() {
          return this._data[0];
        }, set:function(e) {
          this._data[0] = e;
          this._type = 0;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "b", {get:function() {
          return this._data[1];
        }, set:function(e) {
          this._data[1] = e;
          this._type = 0;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "c", {get:function() {
          return this._data[2];
        }, set:function(e) {
          this._data[2] = e;
          this._type = 0;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "d", {get:function() {
          return this._data[3];
        }, set:function(e) {
          this._data[3] = e;
          this._type = 0;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "tx", {get:function() {
          return this._data[4];
        }, set:function(e) {
          this._data[4] = e;
          1 === this._type && (this._type = 2);
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "ty", {get:function() {
          return this._data[5];
        }, set:function(e) {
          this._data[5] = e;
          1 === this._type && (this._type = 2);
        }, enumerable:!0, configurable:!0});
        a._createSVGMatrix = function() {
          a._svg || (a._svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"));
          return a._svg.createSVGMatrix();
        };
        a.prototype.setElements = function(e, c, a, b, d, f) {
          var g = this._data;
          g[0] = e;
          g[1] = c;
          g[2] = a;
          g[3] = b;
          g[4] = d;
          g[5] = f;
          this._type = 0;
        };
        a.prototype.set = function(e) {
          var c = this._data, a = e._data;
          c[0] = a[0];
          c[1] = a[1];
          c[2] = a[2];
          c[3] = a[3];
          c[4] = a[4];
          c[5] = a[5];
          this._type = e._type;
        };
        a.prototype.emptyArea = function(e) {
          e = this._data;
          return 0 === e[0] || 0 === e[3] ? !0 : !1;
        };
        a.prototype.infiniteArea = function(e) {
          e = this._data;
          return Infinity === Math.abs(e[0]) || Infinity === Math.abs(e[3]) ? !0 : !1;
        };
        a.prototype.isEqual = function(e) {
          if (1 === this._type && 1 === e._type) {
            return !0;
          }
          var c = this._data;
          e = e._data;
          return c[0] === e[0] && c[1] === e[1] && c[2] === e[2] && c[3] === e[3] && c[4] === e[4] && c[5] === e[5];
        };
        a.prototype.clone = function() {
          var e = a.allocate();
          e.set(this);
          return e;
        };
        a.allocate = function() {
          var e = a._dirtyStack;
          return e.length ? e.pop() : new a(12345, 12345, 12345, 12345, 12345, 12345);
        };
        a.prototype.free = function() {
          a._dirtyStack.push(this);
        };
        a.prototype.transform = function(e, c, a, b, d, f) {
          var g = this._data, h = g[0], p = g[1], n = g[2], k = g[3], u = g[4], v = g[5];
          g[0] = h * e + n * c;
          g[1] = p * e + k * c;
          g[2] = h * a + n * b;
          g[3] = p * a + k * b;
          g[4] = h * d + n * f + u;
          g[5] = p * d + k * f + v;
          this._type = 0;
          return this;
        };
        a.prototype.transformRectangle = function(e, c) {
          var a = this._data, b = a[0], d = a[1], f = a[2], g = a[3], h = a[4], a = a[5], p = e.x, n = e.y, k = e.w, u = e.h;
          c[0].x = b * p + f * n + h;
          c[0].y = d * p + g * n + a;
          c[1].x = b * (p + k) + f * n + h;
          c[1].y = d * (p + k) + g * n + a;
          c[2].x = b * (p + k) + f * (n + u) + h;
          c[2].y = d * (p + k) + g * (n + u) + a;
          c[3].x = b * p + f * (n + u) + h;
          c[3].y = d * p + g * (n + u) + a;
        };
        a.prototype.isTranslationOnly = function() {
          if (2 === this._type) {
            return !0;
          }
          var a = this._data;
          return 1 === a[0] && 0 === a[1] && 0 === a[2] && 1 === a[3] || k(a[0], 1) && k(a[1], 0) && k(a[2], 0) && k(a[3], 1) ? (this._type = 2, !0) : !1;
        };
        a.prototype.transformRectangleAABB = function(a) {
          var c = this._data;
          if (1 !== this._type) {
            if (2 === this._type) {
              a.x += c[4], a.y += c[5];
            } else {
              var b = c[0], d = c[1], f = c[2], g = c[3], h = c[4], p = c[5], n = a.x, k = a.y, u = a.w, v = a.h, c = b * n + f * k + h, l = d * n + g * k + p, t = b * (n + u) + f * k + h, q = d * (n + u) + g * k + p, r = b * (n + u) + f * (k + v) + h, u = d * (n + u) + g * (k + v) + p, b = b * n + f * (k + v) + h, d = d * n + g * (k + v) + p, g = 0;
              c > t && (g = c, c = t, t = g);
              r > b && (g = r, r = b, b = g);
              a.x = c < r ? c : r;
              a.w = (t > b ? t : b) - a.x;
              l > q && (g = l, l = q, q = g);
              u > d && (g = u, u = d, d = g);
              a.y = l < u ? l : u;
              a.h = (q > d ? q : d) - a.y;
            }
          }
        };
        a.prototype.scale = function(a, c) {
          var b = this._data;
          b[0] *= a;
          b[1] *= c;
          b[2] *= a;
          b[3] *= c;
          b[4] *= a;
          b[5] *= c;
          this._type = 0;
          return this;
        };
        a.prototype.scaleClone = function(a, c) {
          return 1 === a && 1 === c ? this : this.clone().scale(a, c);
        };
        a.prototype.rotate = function(a) {
          var c = this._data, b = c[0], d = c[1], f = c[2], g = c[3], h = c[4], p = c[5], n = Math.cos(a);
          a = Math.sin(a);
          c[0] = n * b - a * d;
          c[1] = a * b + n * d;
          c[2] = n * f - a * g;
          c[3] = a * f + n * g;
          c[4] = n * h - a * p;
          c[5] = a * h + n * p;
          this._type = 0;
          return this;
        };
        a.prototype.concat = function(a) {
          if (1 === a._type) {
            return this;
          }
          var c = this._data;
          a = a._data;
          var b = c[0] * a[0], d = 0, f = 0, g = c[3] * a[3], h = c[4] * a[0] + a[4], p = c[5] * a[3] + a[5];
          if (0 !== c[1] || 0 !== c[2] || 0 !== a[1] || 0 !== a[2]) {
            b += c[1] * a[2], g += c[2] * a[1], d += c[0] * a[1] + c[1] * a[3], f += c[2] * a[0] + c[3] * a[2], h += c[5] * a[2], p += c[4] * a[1];
          }
          c[0] = b;
          c[1] = d;
          c[2] = f;
          c[3] = g;
          c[4] = h;
          c[5] = p;
          this._type = 0;
          return this;
        };
        a.prototype.concatClone = function(a) {
          return this.clone().concat(a);
        };
        a.prototype.preMultiply = function(a) {
          var c = this._data, b = a._data;
          if (2 === a._type && this._type & 3) {
            c[4] += b[4], c[5] += b[5], this._type = 2;
          } else {
            if (1 !== a._type) {
              a = b[0] * c[0];
              var d = 0, f = 0, g = b[3] * c[3], h = b[4] * c[0] + c[4], p = b[5] * c[3] + c[5];
              if (0 !== b[1] || 0 !== b[2] || 0 !== c[1] || 0 !== c[2]) {
                a += b[1] * c[2], g += b[2] * c[1], d += b[0] * c[1] + b[1] * c[3], f += b[2] * c[0] + b[3] * c[2], h += b[5] * c[2], p += b[4] * c[1];
              }
              c[0] = a;
              c[1] = d;
              c[2] = f;
              c[3] = g;
              c[4] = h;
              c[5] = p;
              this._type = 0;
            }
          }
        };
        a.prototype.translate = function(a, c) {
          var b = this._data;
          b[4] += a;
          b[5] += c;
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
            var c = this._data, b = a.x, d = a.y;
            a.x = c[0] * b + c[2] * d + c[4];
            a.y = c[1] * b + c[3] * d + c[5];
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
            var c = this._data, b = a.x, d = a.y;
            a.x = c[0] * b + c[2] * d;
            a.y = c[1] * b + c[3] * d;
          }
        };
        a.prototype.inverse = function(a) {
          var c = this._data, b = a._data;
          if (1 === this._type) {
            a.setIdentity();
          } else {
            if (2 === this._type) {
              b[0] = 1, b[1] = 0, b[2] = 0, b[3] = 1, b[4] = -c[4], b[5] = -c[5], a._type = 2;
            } else {
              var d = c[1], f = c[2], g = c[4], h = c[5];
              if (0 === d && 0 === f) {
                var p = b[0] = 1 / c[0], c = b[3] = 1 / c[3];
                b[1] = 0;
                b[2] = 0;
                b[4] = -p * g;
                b[5] = -c * h;
              } else {
                var p = c[0], c = c[3], n = p * c - d * f;
                if (0 === n) {
                  a.setIdentity();
                  return;
                }
                n = 1 / n;
                b[0] = c * n;
                d = b[1] = -d * n;
                f = b[2] = -f * n;
                c = b[3] = p * n;
                b[4] = -(b[0] * g + f * h);
                b[5] = -(d * g + c * h);
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
          var e = a.allocate();
          e.setIdentity();
          return e;
        };
        a.prototype.toSVGMatrix = function() {
          var e = this._data, c = a._createSVGMatrix();
          try {
            c.a = e[0], c.b = e[1], c.c = e[2], c.d = e[3], c.e = e[4], c.f = e[5];
          } catch (b) {
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
        a.createSVGMatrixFromArray = function(e) {
          var c = a._createSVGMatrix();
          c.a = e[0];
          c.b = e[1];
          c.c = e[2];
          c.d = e[3];
          c.e = e[4];
          c.f = e[5];
          return c;
        };
        a.allocationCount = 0;
        a._dirtyStack = [];
        a.multiply = function(a, c) {
          var b = c._data;
          a.transform(b[0], b[1], b[2], b[3], b[4], b[5]);
        };
        return a;
      }();
      r.Matrix = n;
      n = function() {
        function a(e) {
          this._m = new Float32Array(e);
        }
        a.prototype.asWebGLMatrix = function() {
          return this._m;
        };
        a.createCameraLookAt = function(e, c, b) {
          c = e.clone().sub(c).normalize();
          b = b.clone().cross(c).normalize();
          var d = c.clone().cross(b);
          return new a([b.x, b.y, b.z, 0, d.x, d.y, d.z, 0, c.x, c.y, c.z, 0, e.x, e.y, e.z, 1]);
        };
        a.createLookAt = function(e, c, b) {
          c = e.clone().sub(c).normalize();
          b = b.clone().cross(c).normalize();
          var d = c.clone().cross(b);
          return new a([b.x, d.x, c.x, 0, d.x, d.y, c.y, 0, c.x, d.z, c.z, 0, -b.dot(e), -d.dot(e), -c.dot(e), 1]);
        };
        a.prototype.mul = function(a) {
          a = [a.x, a.y, a.z, 0];
          for (var c = this._m, b = [], d = 0;4 > d;d++) {
            b[d] = 0;
            for (var f = 4 * d, h = 0;4 > h;h++) {
              b[d] += c[f + h] * a[h];
            }
          }
          return new g(b[0], b[1], b[2]);
        };
        a.create2DProjection = function(e, c, b) {
          return new a([2 / e, 0, 0, 0, 0, -2 / c, 0, 0, 0, 0, 2 / b, 0, -1, 1, 0, 1]);
        };
        a.createPerspective = function(e, c, b, d) {
          e = Math.tan(.5 * Math.PI - .5 * e);
          var g = 1 / (b - d);
          return new a([e / c, 0, 0, 0, 0, e, 0, 0, 0, 0, (b + d) * g, -1, 0, 0, b * d * g * 2, 0]);
        };
        a.createIdentity = function() {
          return a.createTranslation(0, 0, 0);
        };
        a.createTranslation = function(e, c, b) {
          return new a([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, c, b, 1]);
        };
        a.createXRotation = function(e) {
          var c = Math.cos(e);
          e = Math.sin(e);
          return new a([1, 0, 0, 0, 0, c, e, 0, 0, -e, c, 0, 0, 0, 0, 1]);
        };
        a.createYRotation = function(e) {
          var c = Math.cos(e);
          e = Math.sin(e);
          return new a([c, 0, -e, 0, 0, 1, 0, 0, e, 0, c, 0, 0, 0, 0, 1]);
        };
        a.createZRotation = function(e) {
          var c = Math.cos(e);
          e = Math.sin(e);
          return new a([c, e, 0, 0, -e, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        };
        a.createScale = function(e, c, b) {
          return new a([e, 0, 0, 0, 0, c, 0, 0, 0, 0, b, 0, 0, 0, 0, 1]);
        };
        a.createMultiply = function(e, c) {
          var b = e._m, d = c._m, g = b[0], h = b[1], p = b[2], n = b[3], k = b[4], u = b[5], v = b[6], l = b[7], t = b[8], q = b[9], r = b[10], w = b[11], D = b[12], z = b[13], B = b[14], b = b[15], E = d[0], A = d[1], C = d[2], F = d[3], G = d[4], J = d[5], I = d[6], L = d[7], M = d[8], N = d[9], O = d[10], P = d[11], Q = d[12], R = d[13], S = d[14], d = d[15];
          return new a([g * E + h * G + p * M + n * Q, g * A + h * J + p * N + n * R, g * C + h * I + p * O + n * S, g * F + h * L + p * P + n * d, k * E + u * G + v * M + l * Q, k * A + u * J + v * N + l * R, k * C + u * I + v * O + l * S, k * F + u * L + v * P + l * d, t * E + q * G + r * M + w * Q, t * A + q * J + r * N + w * R, t * C + q * I + r * O + w * S, t * F + q * L + r * P + w * d, D * E + z * G + B * M + b * Q, D * A + z * J + B * N + b * R, D * C + z * I + B * O + b * S, D * F + z * 
          L + B * P + b * d]);
        };
        a.createInverse = function(b) {
          var c = b._m;
          b = c[0];
          var d = c[1], g = c[2], x = c[3], h = c[4], p = c[5], n = c[6], k = c[7], u = c[8], v = c[9], l = c[10], t = c[11], q = c[12], r = c[13], w = c[14], c = c[15], D = l * c, z = w * t, B = n * c, E = w * k, A = n * t, C = l * k, F = g * c, G = w * x, J = g * t, I = l * x, L = g * k, M = n * x, N = u * r, O = q * v, P = h * r, Q = q * p, R = h * v, S = u * p, X = b * r, Y = q * d, Z = b * v, aa = u * d, ba = b * p, ca = h * d, ea = D * p + E * v + A * r - (z * p + B * v + C * r), fa = z * d + 
          F * v + I * r - (D * d + G * v + J * r), r = B * d + G * p + L * r - (E * d + F * p + M * r), d = C * d + J * p + M * v - (A * d + I * p + L * v), p = 1 / (b * ea + h * fa + u * r + q * d);
          return new a([p * ea, p * fa, p * r, p * d, p * (z * h + B * u + C * q - (D * h + E * u + A * q)), p * (D * b + G * u + J * q - (z * b + F * u + I * q)), p * (E * b + F * h + M * q - (B * b + G * h + L * q)), p * (A * b + I * h + L * u - (C * b + J * h + M * u)), p * (N * k + Q * t + R * c - (O * k + P * t + S * c)), p * (O * x + X * t + aa * c - (N * x + Y * t + Z * c)), p * (P * x + Y * k + ba * c - (Q * x + X * k + ca * c)), p * (S * x + Z * k + ca * t - (R * x + aa * k + ba * t)), p * 
          (P * l + S * w + O * n - (R * w + N * n + Q * l)), p * (Z * w + N * g + Y * l - (X * l + aa * w + O * g)), p * (X * n + ca * w + Q * g - (ba * w + P * g + Y * n)), p * (ba * l + R * g + aa * n - (Z * n + ca * l + S * g))]);
        };
        return a;
      }();
      r.Matrix3D = n;
      n = function() {
        function a(b, c, d) {
          void 0 === d && (d = 7);
          var g = this.size = 1 << d;
          this.sizeInBits = d;
          this.w = b;
          this.h = c;
          this.c = Math.ceil(b / g);
          this.r = Math.ceil(c / g);
          this.grid = [];
          for (b = 0;b < this.r;b++) {
            for (this.grid.push([]), c = 0;c < this.c;c++) {
              this.grid[b][c] = new a.Cell(new p(c * g, b * g, g, g));
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
          return new p(0, 0, this.w, this.h);
        };
        a.prototype.addDirtyRectangle = function(a) {
          var c = a.x >> this.sizeInBits, b = a.y >> this.sizeInBits;
          if (!(c >= this.c || b >= this.r)) {
            0 > c && (c = 0);
            0 > b && (b = 0);
            var d = this.grid[b][c];
            a = a.clone();
            a.snap();
            if (d.region.contains(a)) {
              d.bounds.isEmpty() ? d.bounds.set(a) : d.bounds.contains(a) || d.bounds.union(a);
            } else {
              for (var f = Math.min(this.c, Math.ceil((a.x + a.w) / this.size)) - c, g = Math.min(this.r, Math.ceil((a.y + a.h) / this.size)) - b, h = 0;h < f;h++) {
                for (var p = 0;p < g;p++) {
                  d = this.grid[b + p][c + h], d = d.region.clone(), d.intersect(a), d.isEmpty() || this.addDirtyRectangle(d);
                }
              }
            }
          }
        };
        a.prototype.gatherRegions = function(a) {
          for (var c = 0;c < this.r;c++) {
            for (var b = 0;b < this.c;b++) {
              this.grid[c][b].bounds.isEmpty() || a.push(this.grid[c][b].bounds);
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
          for (var c = 0, b = 0;b < this.r;b++) {
            for (var d = 0;d < this.c;d++) {
              c += this.grid[b][d].region.area();
            }
          }
          return c / a;
        };
        a.prototype.render = function(a, c) {
          function b(c) {
            a.rect(c.x, c.y, c.w, c.h);
          }
          if (c && c.drawGrid) {
            a.strokeStyle = "white";
            for (var d = 0;d < this.r;d++) {
              for (var f = 0;f < this.c;f++) {
                var g = this.grid[d][f];
                a.beginPath();
                b(g.region);
                a.closePath();
                a.stroke();
              }
            }
          }
          a.strokeStyle = "#E0F8D8";
          for (d = 0;d < this.r;d++) {
            for (f = 0;f < this.c;f++) {
              g = this.grid[d][f], a.beginPath(), b(g.bounds), a.closePath(), a.stroke();
            }
          }
        };
        a.tmpRectangle = p.createEmpty();
        return a;
      }();
      r.DirtyRegion = n;
      (function(a) {
        var b = function() {
          function c(c) {
            this.region = c;
            this.bounds = p.createEmpty();
          }
          c.prototype.clear = function() {
            this.bounds.setEmpty();
          };
          return c;
        }();
        a.Cell = b;
      })(n = r.DirtyRegion || (r.DirtyRegion = {}));
      var v = function() {
        function a(b, c, d, f, g, h) {
          this.index = b;
          this.x = c;
          this.y = d;
          this.scale = h;
          this.bounds = new p(c * f, d * g, f, g);
        }
        a.prototype.getOBB = function() {
          if (this._obb) {
            return this._obb;
          }
          this.bounds.getCorners(a.corners);
          return this._obb = new u(a.corners);
        };
        a.corners = t.createEmptyPoints(4);
        return a;
      }();
      r.Tile = v;
      var d = function() {
        function a(b, c, d, f, g) {
          this.tileW = d;
          this.tileH = f;
          this.scale = g;
          this.w = b;
          this.h = c;
          this.rows = Math.ceil(c / f);
          this.columns = Math.ceil(b / d);
          this.tiles = [];
          for (c = b = 0;c < this.rows;c++) {
            for (var h = 0;h < this.columns;h++) {
              this.tiles.push(new v(b++, h, c, d, f, g));
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
          var b = this.columns * this.rows;
          return 40 > b && c.isScaleOrRotation() ? this.getFewTiles(a, c, 10 < b) : this.getManyTiles(a, c);
        };
        a.prototype.getFewTiles = function(b, c, d) {
          void 0 === d && (d = !0);
          if (c.isTranslationOnly() && 1 === this.tiles.length) {
            return this.tiles[0].bounds.intersectsTranslated(b, c.tx, c.ty) ? [this.tiles[0]] : [];
          }
          c.transformRectangle(b, a._points);
          var g;
          b = new p(0, 0, this.w, this.h);
          d && (g = new u(a._points));
          b.intersect(u.getBounds(a._points));
          if (b.isEmpty()) {
            return [];
          }
          var x = b.x / this.tileW | 0;
          c = b.y / this.tileH | 0;
          var h = Math.ceil((b.x + b.w) / this.tileW) | 0, n = Math.ceil((b.y + b.h) / this.tileH) | 0, x = l(x, 0, this.columns), h = l(h, 0, this.columns);
          c = l(c, 0, this.rows);
          for (var n = l(n, 0, this.rows), k = [];x < h;x++) {
            for (var v = c;v < n;v++) {
              var t = this.tiles[v * this.columns + x];
              t.bounds.intersects(b) && (d ? t.getOBB().intersects(g) : 1) && k.push(t);
            }
          }
          return k;
        };
        a.prototype.getManyTiles = function(b, c) {
          function d(c, a, b) {
            return (c - a.x) * (b.y - a.y) / (b.x - a.x) + a.y;
          }
          function g(c, a, b, e, d) {
            if (!(0 > b || b >= a.columns)) {
              for (e = l(e, 0, a.rows), d = l(d + 1, 0, a.rows);e < d;e++) {
                c.push(a.tiles[e * a.columns + b]);
              }
            }
          }
          var x = a._points;
          c.transformRectangle(b, x);
          for (var h = x[0].x < x[1].x ? 0 : 1, p = x[2].x < x[3].x ? 2 : 3, p = x[h].x < x[p].x ? h : p, h = [], n = 0;5 > n;n++, p++) {
            h.push(x[p % 4]);
          }
          (h[1].x - h[0].x) * (h[3].y - h[0].y) < (h[1].y - h[0].y) * (h[3].x - h[0].x) && (x = h[1], h[1] = h[3], h[3] = x);
          var x = [], k, u, p = Math.floor(h[0].x / this.tileW), n = (p + 1) * this.tileW;
          if (h[2].x < n) {
            k = Math.min(h[0].y, h[1].y, h[2].y, h[3].y);
            u = Math.max(h[0].y, h[1].y, h[2].y, h[3].y);
            var v = Math.floor(k / this.tileH), t = Math.floor(u / this.tileH);
            g(x, this, p, v, t);
            return x;
          }
          var q = 0, r = 4, w = !1;
          if (h[0].x === h[1].x || h[0].x === h[3].x) {
            h[0].x === h[1].x ? (w = !0, q++) : r--, k = d(n, h[q], h[q + 1]), u = d(n, h[r], h[r - 1]), v = Math.floor(h[q].y / this.tileH), t = Math.floor(h[r].y / this.tileH), g(x, this, p, v, t), p++;
          }
          do {
            var K, D, z, B;
            h[q + 1].x < n ? (K = h[q + 1].y, z = !0) : (K = d(n, h[q], h[q + 1]), z = !1);
            h[r - 1].x < n ? (D = h[r - 1].y, B = !0) : (D = d(n, h[r], h[r - 1]), B = !1);
            v = Math.floor((h[q].y < h[q + 1].y ? k : K) / this.tileH);
            t = Math.floor((h[r].y > h[r - 1].y ? u : D) / this.tileH);
            g(x, this, p, v, t);
            if (z && w) {
              break;
            }
            z ? (w = !0, q++, k = d(n, h[q], h[q + 1])) : k = K;
            B ? (r--, u = d(n, h[r], h[r - 1])) : u = D;
            p++;
            n = (p + 1) * this.tileW;
          } while (q < r);
          return x;
        };
        a._points = t.createEmptyPoints(4);
        return a;
      }();
      r.TileCache = d;
      n = function() {
        function b(a, c, d) {
          this._cacheLevels = [];
          this._source = a;
          this._tileSize = c;
          this._minUntiledSize = d;
        }
        b.prototype._getTilesAtScale = function(b, c, f) {
          var g = Math.max(c.getAbsoluteScaleX(), c.getAbsoluteScaleY()), h = 0;
          1 !== g && (h = l(Math.round(Math.log(1 / g) / Math.LN2), -5, 3));
          g = a(h);
          if (this._source.hasFlags(1048576)) {
            for (;;) {
              g = a(h);
              if (f.contains(this._source.getBounds().getAbsoluteBounds().clone().scale(g, g))) {
                break;
              }
              h--;
            }
          }
          this._source.hasFlags(2097152) || (h = l(h, -5, 0));
          g = a(h);
          f = 5 + h;
          h = this._cacheLevels[f];
          if (!h) {
            var h = this._source.getBounds().getAbsoluteBounds().clone().scale(g, g), p, n;
            this._source.hasFlags(1048576) || !this._source.hasFlags(4194304) || Math.max(h.w, h.h) <= this._minUntiledSize ? (p = h.w, n = h.h) : p = n = this._tileSize;
            h = this._cacheLevels[f] = new d(h.w, h.h, p, n, g);
          }
          return h.getTiles(b, c.scaleClone(g, g));
        };
        b.prototype.fetchTiles = function(a, c, b, d) {
          var f = new p(0, 0, b.canvas.width, b.canvas.height);
          a = this._getTilesAtScale(a, c, f);
          var g;
          c = this._source;
          for (var h = 0;h < a.length;h++) {
            var n = a[h];
            n.cachedSurfaceRegion && n.cachedSurfaceRegion.surface && !c.hasFlags(1048592) || (g || (g = []), g.push(n));
          }
          g && this._cacheTiles(b, g, d, f);
          c.removeFlags(16);
          return a;
        };
        b.prototype._getTileBounds = function(a) {
          for (var c = p.createEmpty(), b = 0;b < a.length;b++) {
            c.union(a[b].bounds);
          }
          return c;
        };
        b.prototype._cacheTiles = function(a, c, b, d, f) {
          void 0 === f && (f = 4);
          var g = this._getTileBounds(c);
          a.save();
          a.setTransform(1, 0, 0, 1, 0, 0);
          a.clearRect(0, 0, d.w, d.h);
          a.translate(-g.x, -g.y);
          a.scale(c[0].scale, c[0].scale);
          var h = this._source.getBounds();
          a.translate(-h.x, -h.y);
          2 <= q.traceLevel && q.writer && q.writer.writeLn("Rendering Tiles: " + g);
          this._source.render(a, 0);
          a.restore();
          for (var h = null, p = 0;p < c.length;p++) {
            var n = c[p], k = n.bounds.clone();
            k.x -= g.x;
            k.y -= g.y;
            d.contains(k) || (h || (h = []), h.push(n));
            n.cachedSurfaceRegion = b(n.cachedSurfaceRegion, a, k);
          }
          h && (2 <= h.length ? (c = h.slice(0, h.length / 2 | 0), g = h.slice(c.length), this._cacheTiles(a, c, b, d, f - 1), this._cacheTiles(a, g, b, d, f - 1)) : this._cacheTiles(a, h, b, d, f - 1));
        };
        return b;
      }();
      r.RenderableTileCache = n;
    })(q.Geometry || (q.Geometry = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(h, q) {
  function r() {
    this.constructor = h;
  }
  for (var b in q) {
    q.hasOwnProperty(b) && (h[b] = q[b]);
  }
  r.prototype = q.prototype;
  h.prototype = new r;
};
(function(h) {
  (function(q) {
    var r = h.IntegerUtilities.roundToMultipleOfPowerOfTwo, b = q.Geometry.Rectangle;
    (function(h) {
      var l = function(a) {
        function b() {
          a.apply(this, arguments);
        }
        __extends(b, a);
        return b;
      }(q.Geometry.Rectangle);
      h.Region = l;
      var a = function() {
        function a(b, d) {
          this._root = new k(0, 0, b | 0, d | 0, !1);
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
      h.CompactAllocator = a;
      var k = function(b) {
        function g(a, f, e, c, m) {
          b.call(this, a, f, e, c);
          this._children = null;
          this._horizontal = m;
          this.allocated = !1;
        }
        __extends(g, b);
        g.prototype.clear = function() {
          this._children = null;
          this.allocated = !1;
        };
        g.prototype.insert = function(a, b) {
          return this._insert(a, b, 0);
        };
        g.prototype._insert = function(b, f, e) {
          if (!(e > a.MAX_DEPTH || this.allocated || this.w < b || this.h < f)) {
            if (this._children) {
              var c;
              if ((c = this._children[0]._insert(b, f, e + 1)) || (c = this._children[1]._insert(b, f, e + 1))) {
                return c;
              }
            } else {
              return c = !this._horizontal, a.RANDOM_ORIENTATION && (c = .5 <= Math.random()), this._children = this._horizontal ? [new g(this.x, this.y, this.w, f, !1), new g(this.x, this.y + f, this.w, this.h - f, c)] : [new g(this.x, this.y, b, this.h, !0), new g(this.x + b, this.y, this.w - b, this.h, c)], c = this._children[0], c.w === b && c.h === f ? (c.allocated = !0, c) : this._insert(b, f, e + 1);
            }
          }
        };
        return g;
      }(h.Region), t = function() {
        function a(b, d, f, e) {
          this._columns = b / f | 0;
          this._rows = d / e | 0;
          this._sizeW = f;
          this._sizeH = e;
          this._freeList = [];
          this._index = 0;
          this._total = this._columns * this._rows;
        }
        a.prototype.allocate = function(a, b) {
          a = Math.ceil(a);
          b = Math.ceil(b);
          var f = this._sizeW, e = this._sizeH;
          if (a > f || b > e) {
            return null;
          }
          var c = this._freeList, m = this._index;
          return 0 < c.length ? (f = c.pop(), f.w = a, f.h = b, f.allocated = !0, f) : m < this._total ? (c = m / this._columns | 0, f = new g((m - c * this._columns) * f, c * e, a, b), f.index = m, f.allocator = this, f.allocated = !0, this._index++, f) : null;
        };
        a.prototype.free = function(a) {
          a.allocated = !1;
          this._freeList.push(a);
        };
        return a;
      }();
      h.GridAllocator = t;
      var g = function(a) {
        function b(d, f, e, c) {
          a.call(this, d, f, e, c);
          this.index = -1;
        }
        __extends(b, a);
        return b;
      }(h.Region);
      h.GridCell = g;
      var p = function() {
        return function(a, b, d) {
          this.size = a;
          this.region = b;
          this.allocator = d;
        };
      }(), u = function(a) {
        function b(d, f, e, c, m) {
          a.call(this, d, f, e, c);
          this.region = m;
        }
        __extends(b, a);
        return b;
      }(h.Region);
      h.BucketCell = u;
      l = function() {
        function a(b, d) {
          this._buckets = [];
          this._w = b | 0;
          this._h = d | 0;
          this._filled = 0;
        }
        a.prototype.allocate = function(a, d) {
          a = Math.ceil(a);
          d = Math.ceil(d);
          var f = Math.max(a, d);
          if (a > this._w || d > this._h) {
            return null;
          }
          var e = null, c, m = this._buckets;
          do {
            for (var g = 0;g < m.length && !(m[g].size >= f && (c = m[g], e = c.allocator.allocate(a, d)));g++) {
            }
            if (!e) {
              var h = this._h - this._filled;
              if (h < d) {
                return null;
              }
              var g = r(f, 8), n = 2 * g;
              n > h && (n = h);
              if (n < g) {
                return null;
              }
              h = new b(0, this._filled, this._w, n);
              this._buckets.push(new p(g, h, new t(h.w, h.h, g, g)));
              this._filled += n;
            }
          } while (!e);
          return new u(c.region.x + e.x, c.region.y + e.y, e.w, e.h, e);
        };
        a.prototype.free = function(a) {
          a.region.allocator.free(a.region);
        };
        return a;
      }();
      h.BucketAllocator = l;
    })(q.RegionAllocator || (q.RegionAllocator = {}));
    (function(b) {
      var h = function() {
        function a(a) {
          this._createSurface = a;
          this._surfaces = [];
        }
        Object.defineProperty(a.prototype, "surfaces", {get:function() {
          return this._surfaces;
        }, enumerable:!0, configurable:!0});
        a.prototype._createNewSurface = function(a, b) {
          var g = this._createSurface(a, b);
          this._surfaces.push(g);
          return g;
        };
        a.prototype.addSurface = function(a) {
          this._surfaces.push(a);
        };
        a.prototype.allocate = function(a, b, g) {
          for (var h = 0;h < this._surfaces.length;h++) {
            var u = this._surfaces[h];
            if (u !== g && (u = u.allocate(a, b))) {
              return u;
            }
          }
          return this._createNewSurface(a, b).allocate(a, b);
        };
        a.prototype.free = function(a) {
        };
        return a;
      }();
      b.SimpleAllocator = h;
    })(q.SurfaceRegionAllocator || (q.SurfaceRegionAllocator = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(q) {
    var r = q.Geometry.Rectangle, b = q.Geometry.Matrix, w = q.Geometry.DirtyRegion;
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
    })(q.BlendMode || (q.BlendMode = {}));
    var l = q.BlendMode;
    (function(a) {
      a[a.None = 0] = "None";
      a[a.BoundsAutoCompute = 2] = "BoundsAutoCompute";
      a[a.IsMask = 4] = "IsMask";
      a[a.Dirty = 16] = "Dirty";
      a[a.InvalidBounds = 256] = "InvalidBounds";
      a[a.InvalidConcatenatedMatrix = 512] = "InvalidConcatenatedMatrix";
      a[a.InvalidInvertedConcatenatedMatrix = 1024] = "InvalidInvertedConcatenatedMatrix";
      a[a.InvalidConcatenatedColorMatrix = 2048] = "InvalidConcatenatedColorMatrix";
      a[a.UpOnAddedOrRemoved = a.InvalidBounds | a.Dirty] = "UpOnAddedOrRemoved";
      a[a.UpOnMoved = a.InvalidBounds | a.Dirty] = "UpOnMoved";
      a[a.DownOnAddedOrRemoved = a.InvalidConcatenatedMatrix | a.InvalidInvertedConcatenatedMatrix | a.InvalidConcatenatedColorMatrix] = "DownOnAddedOrRemoved";
      a[a.DownOnMoved = a.InvalidConcatenatedMatrix | a.InvalidInvertedConcatenatedMatrix | a.InvalidConcatenatedColorMatrix] = "DownOnMoved";
      a[a.UpOnColorMatrixChanged = a.Dirty] = "UpOnColorMatrixChanged";
      a[a.DownOnColorMatrixChanged = a.InvalidConcatenatedColorMatrix] = "DownOnColorMatrixChanged";
      a[a.Visible = 65536] = "Visible";
      a[a.UpOnInvalidate = a.InvalidBounds | a.Dirty] = "UpOnInvalidate";
      a[a.Default = a.BoundsAutoCompute | a.InvalidBounds | a.InvalidConcatenatedMatrix | a.InvalidInvertedConcatenatedMatrix | a.Visible] = "Default";
      a[a.CacheAsBitmap = 131072] = "CacheAsBitmap";
      a[a.PixelSnapping = 262144] = "PixelSnapping";
      a[a.ImageSmoothing = 524288] = "ImageSmoothing";
      a[a.Dynamic = 1048576] = "Dynamic";
      a[a.Scalable = 2097152] = "Scalable";
      a[a.Tileable = 4194304] = "Tileable";
      a[a.Transparent = 32768] = "Transparent";
    })(q.NodeFlags || (q.NodeFlags = {}));
    var a = q.NodeFlags;
    (function(a) {
      a[a.Node = 1] = "Node";
      a[a.Shape = 3] = "Shape";
      a[a.Group = 5] = "Group";
      a[a.Stage = 13] = "Stage";
      a[a.Renderable = 33] = "Renderable";
    })(q.NodeType || (q.NodeType = {}));
    var k = q.NodeType;
    (function(a) {
      a[a.None = 0] = "None";
      a[a.OnStageBoundsChanged = 1] = "OnStageBoundsChanged";
      a[a.RemovedFromStage = 2] = "RemovedFromStage";
    })(q.NodeEventType || (q.NodeEventType = {}));
    var t = function() {
      function a() {
      }
      a.prototype.visitNode = function(a, b) {
      };
      a.prototype.visitShape = function(a, b) {
        this.visitNode(a, b);
      };
      a.prototype.visitGroup = function(a, b) {
        this.visitNode(a, b);
        for (var e = a.getChildren(), d = 0;d < e.length;d++) {
          e[d].visit(this, b);
        }
      };
      a.prototype.visitStage = function(a, b) {
        this.visitGroup(a, b);
      };
      a.prototype.visitRenderable = function(a, b) {
        this.visitNode(a, b);
      };
      return a;
    }();
    q.NodeVisitor = t;
    var g = function() {
      return function() {
      };
    }();
    q.State = g;
    var p = function(a) {
      function c() {
        a.call(this);
        this.matrix = b.createIdentity();
        this.depth = 0;
      }
      __extends(c, a);
      c.prototype.transform = function(a) {
        var c = this.clone();
        c.matrix.preMultiply(a.getMatrix());
        return c;
      };
      c.allocate = function() {
        var a = c._dirtyStack, b = null;
        a.length && (b = a.pop());
        return b;
      };
      c.prototype.clone = function() {
        var a = c.allocate();
        a || (a = new c);
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
      return c;
    }(g);
    q.PreRenderState = p;
    var u = function(a) {
      function c() {
        a.apply(this, arguments);
        this.isDirty = !0;
      }
      __extends(c, a);
      c.prototype.start = function(a, c) {
        this._dirtyRegion = c;
        var b = new p;
        b.matrix.setIdentity();
        a.visit(this, b);
        b.free();
      };
      c.prototype.visitGroup = function(a, c) {
        var b = a.getChildren();
        this.visitNode(a, c);
        for (var e = 0;e < b.length;e++) {
          var d = b[e], f = c.transform(d.getTransform());
          d.visit(this, f);
          f.free();
        }
      };
      c.prototype.visitNode = function(a, c) {
        a.hasFlags(16) && (this.isDirty = !0);
        a.toggleFlags(16, !1);
        a.depth = c.depth++;
      };
      return c;
    }(t);
    q.PreRenderVisitor = u;
    g = function(a) {
      function c(c) {
        a.call(this);
        this.writer = c;
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
        for (var e = 0;e < b.length;e++) {
          b[e].visit(this, c);
        }
        this.writer.outdent();
      };
      c.prototype.visitStage = function(a, c) {
        this.visitGroup(a, c);
      };
      return c;
    }(t);
    q.TracingNodeVisitor = g;
    var n = function() {
      function b() {
        this._clip = -1;
        this._eventListeners = null;
        this._id = b._nextId++;
        this._type = 1;
        this._index = -1;
        this._parent = null;
        this.reset();
      }
      Object.defineProperty(b.prototype, "id", {get:function() {
        return this._id;
      }, enumerable:!0, configurable:!0});
      b.prototype._dispatchEvent = function(a) {
        if (this._eventListeners) {
          for (var b = this._eventListeners, e = 0;e < b.length;e++) {
            var d = b[e];
            d.type === a && d.listener(this, a);
          }
        }
      };
      b.prototype.addEventListener = function(a, b) {
        this._eventListeners || (this._eventListeners = []);
        this._eventListeners.push({type:a, listener:b});
      };
      b.prototype.removeEventListener = function(a, b) {
        for (var e = this._eventListeners, d = 0;d < e.length;d++) {
          var f = e[d];
          if (f.type === a && f.listener === b) {
            e.splice(d, 1);
            break;
          }
        }
      };
      Object.defineProperty(b.prototype, "properties", {get:function() {
        return this._properties || (this._properties = {});
      }, enumerable:!0, configurable:!0});
      b.prototype.reset = function() {
        this._flags = a.Default;
        this._properties = this._transform = this._layer = this._bounds = null;
        this.depth = -1;
      };
      Object.defineProperty(b.prototype, "clip", {get:function() {
        return this._clip;
      }, set:function(a) {
        this._clip = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(b.prototype, "parent", {get:function() {
        return this._parent;
      }, enumerable:!0, configurable:!0});
      b.prototype.getTransformedBounds = function(a) {
        var b = this.getBounds(!0);
        if (a !== this && !b.isEmpty()) {
          var e = this.getTransform().getConcatenatedMatrix();
          a ? (a = a.getTransform().getInvertedConcatenatedMatrix(!0), a.preMultiply(e), a.transformRectangleAABB(b), a.free()) : e.transformRectangleAABB(b);
        }
        return b;
      };
      b.prototype._markCurrentBoundsAsDirtyRegion = function() {
      };
      b.prototype.getStage = function(a) {
        void 0 === a && (a = !0);
        for (var b = this._parent;b;) {
          if (b.isType(13)) {
            var e = b;
            if (a) {
              if (e.dirtyRegion) {
                return e;
              }
            } else {
              return e;
            }
          }
          b = b._parent;
        }
        return null;
      };
      b.prototype.getChildren = function(a) {
        throw void 0;
      };
      b.prototype.getBounds = function(a) {
        throw void 0;
      };
      b.prototype.setBounds = function(a) {
        (this._bounds || (this._bounds = r.createEmpty())).set(a);
        this.removeFlags(256);
      };
      b.prototype.clone = function() {
        throw void 0;
      };
      b.prototype.setFlags = function(a) {
        this._flags |= a;
      };
      b.prototype.hasFlags = function(a) {
        return (this._flags & a) === a;
      };
      b.prototype.hasAnyFlags = function(a) {
        return !!(this._flags & a);
      };
      b.prototype.removeFlags = function(a) {
        this._flags &= ~a;
      };
      b.prototype.toggleFlags = function(a, b) {
        this._flags = b ? this._flags | a : this._flags & ~a;
      };
      b.prototype._propagateFlagsUp = function(a) {
        if (0 !== a && !this.hasFlags(a)) {
          this.hasFlags(2) || (a &= -257);
          this.setFlags(a);
          var b = this._parent;
          b && b._propagateFlagsUp(a);
        }
      };
      b.prototype._propagateFlagsDown = function(a) {
        throw void 0;
      };
      b.prototype.isAncestor = function(a) {
        for (;a;) {
          if (a === this) {
            return !0;
          }
          a = a._parent;
        }
        return !1;
      };
      b._getAncestors = function(a, d) {
        var f = b._path;
        for (f.length = 0;a && a !== d;) {
          f.push(a), a = a._parent;
        }
        return f;
      };
      b.prototype._findClosestAncestor = function(a, b) {
        for (var e = this;e;) {
          if (e.hasFlags(a) === b) {
            return e;
          }
          e = e._parent;
        }
        return null;
      };
      b.prototype.isType = function(a) {
        return this._type === a;
      };
      b.prototype.isTypeOf = function(a) {
        return (this._type & a) === a;
      };
      b.prototype.isLeaf = function() {
        return this.isType(33) || this.isType(3);
      };
      b.prototype.isLinear = function() {
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
      b.prototype.getTransformMatrix = function(a) {
        void 0 === a && (a = !1);
        return this.getTransform().getMatrix(a);
      };
      b.prototype.getTransform = function() {
        null === this._transform && (this._transform = new d(this));
        return this._transform;
      };
      b.prototype.getLayer = function() {
        null === this._layer && (this._layer = new f(this));
        return this._layer;
      };
      b.prototype.getLayerBounds = function(a) {
        var b = this.getBounds();
        a && this._layer && this._layer.expandBounds(b);
        return b;
      };
      b.prototype.visit = function(a, b) {
        switch(this._type) {
          case 1:
            a.visitNode(this, b);
            break;
          case 5:
            a.visitGroup(this, b);
            break;
          case 13:
            a.visitStage(this, b);
            break;
          case 3:
            a.visitShape(this, b);
            break;
          case 33:
            a.visitRenderable(this, b);
            break;
          default:
            h.Debug.unexpectedCase();
        }
      };
      b.prototype.invalidate = function() {
        this._propagateFlagsUp(a.UpOnInvalidate);
      };
      b.prototype.toString = function(a) {
        void 0 === a && (a = !1);
        var b = k[this._type] + " " + this._id;
        a && (b += " " + this._bounds.toString());
        return b;
      };
      b._path = [];
      b._nextId = 0;
      return b;
    }();
    q.Node = n;
    var v = function(b) {
      function c() {
        b.call(this);
        this._type = 5;
        this._children = [];
      }
      __extends(c, b);
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
      c.prototype.addChild = function(c) {
        c._parent && c._parent.removeChildAt(c._index);
        c._parent = this;
        c._index = this._children.length;
        this._children.push(c);
        this._propagateFlagsUp(a.UpOnAddedOrRemoved);
        c._propagateFlagsDown(a.DownOnAddedOrRemoved);
      };
      c.prototype.removeChildAt = function(c) {
        var b = this._children[c];
        this._children.splice(c, 1);
        b._index = -1;
        b._parent = null;
        this._propagateFlagsUp(a.UpOnAddedOrRemoved);
        b._propagateFlagsDown(a.DownOnAddedOrRemoved);
      };
      c.prototype.clearChildren = function() {
        for (var c = 0;c < this._children.length;c++) {
          var b = this._children[c];
          b && (b._index = -1, b._parent = null, b._propagateFlagsDown(a.DownOnAddedOrRemoved));
        }
        this._children.length = 0;
        this._propagateFlagsUp(a.UpOnAddedOrRemoved);
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
        if (this.hasFlags(256)) {
          c.setEmpty();
          for (var b = this._children, e = r.allocate(), d = 0;d < b.length;d++) {
            var f = b[d];
            e.set(f.getBounds());
            f.getTransformMatrix().transformRectangleAABB(e);
            c.union(e);
          }
          e.free();
          this.removeFlags(256);
        }
        return a ? c.clone() : c;
      };
      c.prototype.getLayerBounds = function(a) {
        if (!a) {
          return this.getBounds();
        }
        for (var c = r.createEmpty(), b = this._children, e = r.allocate(), d = 0;d < b.length;d++) {
          var f = b[d];
          e.set(f.getLayerBounds(a));
          f.getTransformMatrix().transformRectangleAABB(e);
          c.union(e);
        }
        e.free();
        a && this._layer && this._layer.expandBounds(c);
        return c;
      };
      return c;
    }(n);
    q.Group = v;
    var d = function() {
      function e(a) {
        this._node = a;
        this._matrix = b.createIdentity();
        this._colorMatrix = q.ColorMatrix.createIdentity();
        this._concatenatedMatrix = b.createIdentity();
        this._invertedConcatenatedMatrix = b.createIdentity();
        this._concatenatedColorMatrix = q.ColorMatrix.createIdentity();
      }
      e.prototype.setMatrix = function(c) {
        this._matrix.isEqual(c) || (this._matrix.set(c), this._node._propagateFlagsUp(a.UpOnMoved), this._node._propagateFlagsDown(a.DownOnMoved));
      };
      e.prototype.setColorMatrix = function(c) {
        this._colorMatrix.set(c);
        this._node._propagateFlagsUp(a.UpOnColorMatrixChanged);
        this._node._propagateFlagsDown(a.DownOnColorMatrixChanged);
      };
      e.prototype.getMatrix = function(a) {
        void 0 === a && (a = !1);
        return a ? this._matrix.clone() : this._matrix;
      };
      e.prototype.hasColorMatrix = function() {
        return null !== this._colorMatrix;
      };
      e.prototype.getColorMatrix = function(a) {
        void 0 === a && (a = !1);
        null === this._colorMatrix && (this._colorMatrix = q.ColorMatrix.createIdentity());
        return a ? this._colorMatrix.clone() : this._colorMatrix;
      };
      e.prototype.getConcatenatedMatrix = function(a) {
        void 0 === a && (a = !1);
        if (this._node.hasFlags(512)) {
          for (var e = this._node._findClosestAncestor(512, !1), d = n._getAncestors(this._node, e), f = e ? e.getTransform()._concatenatedMatrix.clone() : b.createIdentity(), g = d.length - 1;0 <= g;g--) {
            var e = d[g], h = e.getTransform();
            f.preMultiply(h._matrix);
            h._concatenatedMatrix.set(f);
            e.removeFlags(512);
          }
        }
        return a ? this._concatenatedMatrix.clone() : this._concatenatedMatrix;
      };
      e.prototype.getInvertedConcatenatedMatrix = function(a) {
        void 0 === a && (a = !1);
        this._node.hasFlags(1024) && (this.getConcatenatedMatrix().inverse(this._invertedConcatenatedMatrix), this._node.removeFlags(1024));
        return a ? this._invertedConcatenatedMatrix.clone() : this._invertedConcatenatedMatrix;
      };
      e.prototype.toString = function() {
        return this._matrix.toString();
      };
      return e;
    }();
    q.Transform = d;
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
        return l[this._blendMode];
      };
      a.prototype.expandBounds = function(a) {
        var b = this._filters;
        if (b) {
          for (var e = 0;e < b.length;e++) {
            b[e].expandBounds(a);
          }
        }
      };
      return a;
    }();
    q.Layer = f;
    g = function(a) {
      function c(c) {
        a.call(this);
        this._source = c;
        this._type = 3;
        this._ratio = 0;
      }
      __extends(c, a);
      c.prototype.getBounds = function(a) {
        void 0 === a && (a = !1);
        var c = this._bounds || (this._bounds = r.createEmpty());
        this.hasFlags(256) && (c.set(this._source.getBounds()), this.removeFlags(256));
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
    }(n);
    q.Shape = g;
    q.RendererOptions = function() {
      return function() {
        this.debug = !1;
        this.paintRenderable = !0;
        this.paintViewport = this.paintFlashing = this.paintDirtyRegion = this.paintBounds = !1;
        this.clear = !0;
      };
    }();
    (function(a) {
      a[a.Canvas2D = 0] = "Canvas2D";
      a[a.WebGL = 1] = "WebGL";
      a[a.Both = 2] = "Both";
      a[a.DOM = 3] = "DOM";
      a[a.SVG = 4] = "SVG";
    })(q.Backend || (q.Backend = {}));
    t = function(a) {
      function c(c, b, d) {
        a.call(this);
        this._container = c;
        this._stage = b;
        this._options = d;
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
    }(t);
    q.Renderer = t;
    t = function(a) {
      function c(b, d, f) {
        void 0 === f && (f = !1);
        a.call(this);
        this._preVisitor = new u;
        this._flags &= -3;
        this._type = 13;
        this._scaleMode = c.DEFAULT_SCALE;
        this._align = c.DEFAULT_ALIGN;
        this._content = new v;
        this._content._flags &= -3;
        this.addChild(this._content);
        this.setFlags(16);
        this.setBounds(new r(0, 0, b, d));
        f ? (this._dirtyRegion = new w(b, d), this._dirtyRegion.addDirtyRectangle(new r(0, 0, b, d))) : this._dirtyRegion = null;
        this._updateContentMatrix();
      }
      __extends(c, a);
      Object.defineProperty(c.prototype, "dirtyRegion", {get:function() {
        return this._dirtyRegion;
      }, enumerable:!0, configurable:!0});
      c.prototype.setBounds = function(c) {
        a.prototype.setBounds.call(this, c);
        this._updateContentMatrix();
        this._dispatchEvent(1);
        this._dirtyRegion && (this._dirtyRegion = new w(c.w, c.h), this._dirtyRegion.addDirtyRectangle(c));
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
          this._content.getTransform().setMatrix(new b(1, 0, 0, 1, 0, 0));
        } else {
          var a = this.getBounds(), d = this._content.getBounds(), e = a.w / d.w, f = a.h / d.h;
          switch(this._scaleMode) {
            case 2:
              e = f = Math.max(e, f);
              break;
            case 4:
              e = f = 1;
              break;
            case 1:
              break;
            default:
              e = f = Math.min(e, f);
          }
          var g;
          g = this._align & 4 ? 0 : this._align & 8 ? a.w - d.w * e : (a.w - d.w * e) / 2;
          a = this._align & 1 ? 0 : this._align & 2 ? a.h - d.h * f : (a.h - d.h * f) / 2;
          this._content.getTransform().setMatrix(new b(e, 0, 0, f, g, a));
        }
      };
      c.DEFAULT_SCALE = 4;
      c.DEFAULT_ALIGN = 5;
      return c;
    }(v);
    q.Stage = t;
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(q) {
    function r(a, c, b) {
      return a + (c - a) * b;
    }
    function b(a, c, b) {
      return r(a >> 24 & 255, c >> 24 & 255, b) << 24 | r(a >> 16 & 255, c >> 16 & 255, b) << 16 | r(a >> 8 & 255, c >> 8 & 255, b) << 8 | r(a & 255, c & 255, b);
    }
    function w(a, c, b) {
      a = a.measureText(c).width | 0;
      0 < b && (a += c.length * b);
      return a;
    }
    var l = q.Geometry.Point, a = q.Geometry.Rectangle, k = q.Geometry.Matrix, t = h.ArrayUtilities.indexOf, g = function(a) {
      function c() {
        a.call(this);
        this._parents = [];
        this._renderableParents = [];
        this._invalidateEventListeners = null;
        this._flags &= -3;
        this._type = 33;
      }
      __extends(c, a);
      Object.defineProperty(c.prototype, "parents", {get:function() {
        return this._parents;
      }, enumerable:!0, configurable:!0});
      c.prototype.addParent = function(a) {
        t(this._parents, a);
        this._parents.push(a);
      };
      c.prototype.willRender = function() {
        for (var a = this._parents, c = 0;c < a.length;c++) {
          for (var b = a[c];b;) {
            if (b.isType(13)) {
              return !0;
            }
            if (!b.hasFlags(65536)) {
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
        a = new q.Shape(this);
        this.addParent(a);
        return a;
      };
      c.prototype.invalidate = function() {
        this.setFlags(16);
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
        t(this._invalidateEventListeners, a);
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
      c.prototype.render = function(a, c, b, d, e) {
      };
      return c;
    }(q.Node);
    q.Renderable = g;
    var p = function(a) {
      function c(c, b) {
        a.call(this);
        this.setBounds(c);
        this.render = b;
      }
      __extends(c, a);
      return c;
    }(g);
    q.CustomRenderable = p;
    (function(a) {
      a[a.Idle = 1] = "Idle";
      a[a.Playing = 2] = "Playing";
      a[a.Paused = 3] = "Paused";
      a[a.Ended = 4] = "Ended";
    })(q.RenderableVideoState || (q.RenderableVideoState = {}));
    p = function(b) {
      function c(d, f) {
        b.call(this);
        this._flags = 1048592;
        this._lastPausedTime = this._lastTimeInvalidated = 0;
        this._pauseHappening = this._seekHappening = !1;
        this._isDOMElement = !0;
        this.setBounds(new a(0, 0, 1, 1));
        this._assetId = d;
        this._eventSerializer = f;
        var g = document.createElement("video"), h = this._handleVideoEvent.bind(this);
        g.preload = "metadata";
        g.addEventListener("play", h);
        g.addEventListener("pause", h);
        g.addEventListener("ended", h);
        g.addEventListener("loadeddata", h);
        g.addEventListener("progress", h);
        g.addEventListener("suspend", h);
        g.addEventListener("loadedmetadata", h);
        g.addEventListener("error", h);
        g.addEventListener("seeking", h);
        g.addEventListener("seeked", h);
        g.addEventListener("canplay", h);
        g.style.position = "absolute";
        this._video = g;
        this._videoEventHandler = h;
        c._renderableVideos.push(this);
        "undefined" !== typeof registerInspectorAsset && registerInspectorAsset(-1, -1, this);
        this._state = 1;
      }
      __extends(c, b);
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
              for (var e = 0;e < b.buffered.length;e++) {
                d = Math.max(d, b.buffered.end(e));
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
    }(g);
    q.RenderableVideo = p;
    p = function(b) {
      function c(a, c) {
        b.call(this);
        this._flags = 1048592;
        this.properties = {};
        this.setBounds(c);
        a instanceof HTMLCanvasElement ? this._initializeSourceCanvas(a) : this._sourceImage = a;
      }
      __extends(c, b);
      c.FromDataBuffer = function(a, b, d) {
        var e = document.createElement("canvas");
        e.width = d.w;
        e.height = d.h;
        d = new c(e, d);
        d.updateFromDataBuffer(a, b);
        return d;
      };
      c.FromNode = function(a, b, d, e, f) {
        var g = document.createElement("canvas"), h = a.getBounds();
        g.width = h.w;
        g.height = h.h;
        g = new c(g, h);
        g.drawNode(a, b, d, e, f);
        return g;
      };
      c.FromImage = function(b, d, e) {
        return new c(b, new a(0, 0, d, e));
      };
      c.prototype.updateFromDataBuffer = function(a, c) {
        if (q.imageUpdateOption.value) {
          var b = c.buffer;
          if (4 !== a && 5 !== a && 6 !== a) {
            var d = this._bounds, e = this._imageData;
            e && e.width === d.w && e.height === d.h || (e = this._imageData = this._context.createImageData(d.w, d.h));
            q.imageConvertOption.value && (b = new Int32Array(b), d = new Int32Array(e.data.buffer), h.ColorUtilities.convertImage(a, 3, b, d));
            this._ensureSourceCanvas();
            this._context.putImageData(e, 0, 0);
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
      c.prototype.drawNode = function(a, c, b, d, e) {
        b = q.Canvas2D;
        d = this.getBounds();
        (new b.Canvas2DRenderer(this._canvas, null)).renderNode(a, e || d, c);
      };
      c.prototype.mask = function(a) {
        for (var c = this.imageData, b = new Int32Array(c.data.buffer), d = h.ColorUtilities.getUnpremultiplyTable(), e = 0;e < a.length;e++) {
          var f = a[e];
          if (0 === f) {
            b[e] = 0;
          } else {
            if (255 !== f) {
              var g = b[e], p = g >> 0 & 255, n = g >> 8 & 255, g = g >> 16 & 255, k = f << 8, p = d[k + Math.min(p, f)], n = d[k + Math.min(n, f)], g = d[k + Math.min(g, f)];
              b[e] = f << 24 | g << 16 | n << 8 | p;
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
    }(g);
    q.RenderableBitmap = p;
    (function(a) {
      a[a.Fill = 0] = "Fill";
      a[a.Stroke = 1] = "Stroke";
      a[a.StrokeFill = 2] = "StrokeFill";
    })(q.PathType || (q.PathType = {}));
    var u = function() {
      return function(a, c, b, d) {
        this.type = a;
        this.style = c;
        this.smoothImage = b;
        this.strokeProperties = d;
        this.path = new Path2D;
      };
    }();
    q.StyledPath = u;
    var n = function() {
      return function(a, c, b, d, f) {
        this.thickness = a;
        this.scaleMode = c;
        this.capsStyle = b;
        this.jointsStyle = d;
        this.miterLimit = f;
      };
    }();
    q.StrokeProperties = n;
    var v = function(a) {
      function c(c, b, d, f) {
        a.call(this);
        this._flags = 6291472;
        this.properties = {};
        this.setBounds(f);
        this._id = c;
        this._pathData = b;
        this._textures = d;
        d.length && this.setFlags(1048576);
      }
      __extends(c, a);
      c.prototype.update = function(a, c, b) {
        this.setBounds(b);
        this._pathData = a;
        this._paths = null;
        this._textures = c;
        this.setFlags(1048576);
        this.invalidate();
      };
      c.prototype.render = function(a, c, b, d, e) {
        void 0 === d && (d = null);
        void 0 === e && (e = !1);
        a.fillStyle = a.strokeStyle = "transparent";
        c = this._deserializePaths(this._pathData, a, c);
        for (b = 0;b < c.length;b++) {
          var f = c[b];
          a.mozImageSmoothingEnabled = a.msImageSmoothingEnabled = a.imageSmoothingEnabled = f.smoothImage;
          if (0 === f.type) {
            d ? d.addPath(f.path, a.currentTransform) : (a.fillStyle = e ? "#000000" : f.style, a.fill(f.path, "evenodd"), a.fillStyle = "transparent");
          } else {
            if (!d && !e) {
              a.strokeStyle = f.style;
              var g = 1;
              f.strokeProperties && (g = f.strokeProperties.scaleMode, a.lineWidth = f.strokeProperties.thickness, a.lineCap = f.strokeProperties.capsStyle, a.lineJoin = f.strokeProperties.jointsStyle, a.miterLimit = f.strokeProperties.miterLimit);
              var h = a.lineWidth;
              (h = 1 === h || 3 === h) && a.translate(.5, .5);
              a.flashStroke(f.path, g);
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
        var e = null, f = null, g = 0, p = 0, k, u, v = !1, l = 0, t = 0, q = a.commands, r = a.coordinates, w = a.styles, z = w.position = 0;
        a = a.commandsPosition;
        for (var B = 0;B < a;B++) {
          switch(q[B]) {
            case 9:
              v && e && (e.lineTo(l, t), f && f.lineTo(l, t));
              v = !0;
              g = l = r[z++] / 20;
              p = t = r[z++] / 20;
              e && e.moveTo(g, p);
              f && f.moveTo(g, p);
              break;
            case 10:
              g = r[z++] / 20;
              p = r[z++] / 20;
              e && e.lineTo(g, p);
              f && f.lineTo(g, p);
              break;
            case 11:
              k = r[z++] / 20;
              u = r[z++] / 20;
              g = r[z++] / 20;
              p = r[z++] / 20;
              e && e.quadraticCurveTo(k, u, g, p);
              f && f.quadraticCurveTo(k, u, g, p);
              break;
            case 12:
              k = r[z++] / 20;
              u = r[z++] / 20;
              var E = r[z++] / 20, A = r[z++] / 20, g = r[z++] / 20, p = r[z++] / 20;
              e && e.bezierCurveTo(k, u, E, A, g, p);
              f && f.bezierCurveTo(k, u, E, A, g, p);
              break;
            case 1:
              e = this._createPath(0, h.ColorUtilities.rgbaToCSSStyle(w.readUnsignedInt()), !1, null, g, p);
              break;
            case 3:
              k = this._readBitmap(w, b);
              e = this._createPath(0, k.style, k.smoothImage, null, g, p);
              break;
            case 2:
              e = this._createPath(0, this._readGradient(w, b), !1, null, g, p);
              break;
            case 4:
              e = null;
              break;
            case 5:
              f = h.ColorUtilities.rgbaToCSSStyle(w.readUnsignedInt());
              w.position += 1;
              k = w.readByte();
              u = c.LINE_CAPS_STYLES[w.readByte()];
              E = c.LINE_JOINTS_STYLES[w.readByte()];
              k = new n(r[z++] / 20, k, u, E, w.readByte());
              f = this._createPath(1, f, !1, k, g, p);
              break;
            case 6:
              f = this._createPath(2, this._readGradient(w, b), !1, null, g, p);
              break;
            case 7:
              k = this._readBitmap(w, b);
              f = this._createPath(2, k.style, k.smoothImage, null, g, p);
              break;
            case 8:
              f = null;
          }
        }
        v && e && (e.lineTo(l, t), f && f.lineTo(l, t));
        this._pathData = null;
        return d;
      };
      c.prototype._createPath = function(a, c, b, d, e, f) {
        a = new u(a, c, b, d);
        this._paths.push(a);
        a.path.moveTo(e, f);
        return a.path;
      };
      c.prototype._readMatrix = function(a) {
        return new k(a.readFloat(), a.readFloat(), a.readFloat(), a.readFloat(), a.readFloat(), a.readFloat());
      };
      c.prototype._readGradient = function(a, c) {
        var b = a.readUnsignedByte(), d = 2 * a.readShort() / 255, e = this._readMatrix(a), b = 16 === b ? c.createLinearGradient(-1, 0, 1, 0) : c.createRadialGradient(d, 0, 0, 0, 0, 1);
        b.setTransform && b.setTransform(e.toSVGMatrix());
        e = a.readUnsignedByte();
        for (d = 0;d < e;d++) {
          var f = a.readUnsignedByte() / 255, g = h.ColorUtilities.rgbaToCSSStyle(a.readUnsignedInt());
          b.addColorStop(f, g);
        }
        a.position += 2;
        return b;
      };
      c.prototype._readBitmap = function(a, c) {
        var b = a.readUnsignedInt(), d = this._readMatrix(a), e = a.readBoolean() ? "repeat" : "no-repeat", f = a.readBoolean();
        (b = this._textures[b]) ? (e = c.createPattern(b.renderSource, e), e.setTransform(d.toSVGMatrix())) : e = null;
        return {style:e, smoothImage:f};
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
    }(g);
    q.RenderableShape = v;
    p = function(a) {
      function c() {
        a.apply(this, arguments);
        this._flags = 7340048;
        this._morphPaths = Object.create(null);
      }
      __extends(c, a);
      c.prototype._deserializePaths = function(a, c, d) {
        if (this._morphPaths[d]) {
          return this._morphPaths[d];
        }
        var e = this._morphPaths[d] = [], f = null, g = null, p = 0, k = 0, u, l, t = !1, q = 0, w = 0, K = a.commands, D = a.coordinates, z = a.morphCoordinates, B = a.styles, E = a.morphStyles;
        B.position = 0;
        var A = E.position = 0;
        a = a.commandsPosition;
        for (var C = 0;C < a;C++) {
          switch(K[C]) {
            case 9:
              t && f && (f.lineTo(q, w), g && g.lineTo(q, w));
              t = !0;
              p = q = r(D[A], z[A++], d) / 20;
              k = w = r(D[A], z[A++], d) / 20;
              f && f.moveTo(p, k);
              g && g.moveTo(p, k);
              break;
            case 10:
              p = r(D[A], z[A++], d) / 20;
              k = r(D[A], z[A++], d) / 20;
              f && f.lineTo(p, k);
              g && g.lineTo(p, k);
              break;
            case 11:
              u = r(D[A], z[A++], d) / 20;
              l = r(D[A], z[A++], d) / 20;
              p = r(D[A], z[A++], d) / 20;
              k = r(D[A], z[A++], d) / 20;
              f && f.quadraticCurveTo(u, l, p, k);
              g && g.quadraticCurveTo(u, l, p, k);
              break;
            case 12:
              u = r(D[A], z[A++], d) / 20;
              l = r(D[A], z[A++], d) / 20;
              var F = r(D[A], z[A++], d) / 20, G = r(D[A], z[A++], d) / 20, p = r(D[A], z[A++], d) / 20, k = r(D[A], z[A++], d) / 20;
              f && f.bezierCurveTo(u, l, F, G, p, k);
              g && g.bezierCurveTo(u, l, F, G, p, k);
              break;
            case 1:
              f = this._createMorphPath(0, d, h.ColorUtilities.rgbaToCSSStyle(b(B.readUnsignedInt(), E.readUnsignedInt(), d)), !1, null, p, k);
              break;
            case 3:
              u = this._readMorphBitmap(B, E, d, c);
              f = this._createMorphPath(0, d, u.style, u.smoothImage, null, p, k);
              break;
            case 2:
              u = this._readMorphGradient(B, E, d, c);
              f = this._createMorphPath(0, d, u, !1, null, p, k);
              break;
            case 4:
              f = null;
              break;
            case 5:
              u = r(D[A], z[A++], d) / 20;
              g = h.ColorUtilities.rgbaToCSSStyle(b(B.readUnsignedInt(), E.readUnsignedInt(), d));
              B.position += 1;
              l = B.readByte();
              F = v.LINE_CAPS_STYLES[B.readByte()];
              G = v.LINE_JOINTS_STYLES[B.readByte()];
              u = new n(u, l, F, G, B.readByte());
              g = this._createMorphPath(1, d, g, !1, u, p, k);
              break;
            case 6:
              u = this._readMorphGradient(B, E, d, c);
              g = this._createMorphPath(2, d, u, !1, null, p, k);
              break;
            case 7:
              u = this._readMorphBitmap(B, E, d, c);
              g = this._createMorphPath(2, d, u.style, u.smoothImage, null, p, k);
              break;
            case 8:
              g = null;
          }
        }
        t && f && (f.lineTo(q, w), g && g.lineTo(q, w));
        return e;
      };
      c.prototype._createMorphPath = function(a, c, b, d, e, f, g) {
        a = new u(a, b, d, e);
        this._morphPaths[c].push(a);
        a.path.moveTo(f, g);
        return a.path;
      };
      c.prototype._readMorphMatrix = function(a, c, b) {
        return new k(r(a.readFloat(), c.readFloat(), b), r(a.readFloat(), c.readFloat(), b), r(a.readFloat(), c.readFloat(), b), r(a.readFloat(), c.readFloat(), b), r(a.readFloat(), c.readFloat(), b), r(a.readFloat(), c.readFloat(), b));
      };
      c.prototype._readMorphGradient = function(a, c, d, e) {
        var f = a.readUnsignedByte(), g = 2 * a.readShort() / 255, p = this._readMorphMatrix(a, c, d);
        e = 16 === f ? e.createLinearGradient(-1, 0, 1, 0) : e.createRadialGradient(g, 0, 0, 0, 0, 1);
        e.setTransform && e.setTransform(p.toSVGMatrix());
        p = a.readUnsignedByte();
        for (f = 0;f < p;f++) {
          var g = r(a.readUnsignedByte() / 255, c.readUnsignedByte() / 255, d), n = b(a.readUnsignedInt(), c.readUnsignedInt(), d), n = h.ColorUtilities.rgbaToCSSStyle(n);
          e.addColorStop(g, n);
        }
        a.position += 2;
        return e;
      };
      c.prototype._readMorphBitmap = function(a, c, b, d) {
        var e = a.readUnsignedInt();
        c = this._readMorphMatrix(a, c, b);
        b = a.readBoolean() ? "repeat" : "no-repeat";
        a = a.readBoolean();
        d = d.createPattern(this._textures[e]._canvas, b);
        d.setTransform(c.toSVGMatrix());
        return {style:d, smoothImage:a};
      };
      return c;
    }(v);
    q.RenderableMorphShape = p;
    var d = function() {
      function a() {
        this.align = this.leading = this.descent = this.ascent = this.width = this.y = this.x = 0;
        this.runs = [];
      }
      a._getMeasureContext = function() {
        a._measureContext || (a._measureContext = document.createElement("canvas").getContext("2d"));
        return a._measureContext;
      };
      a.prototype.addRun = function(c, b, d, g, h) {
        if (d) {
          var p = a._getMeasureContext();
          p.font = c;
          p = w(p, d, g);
          this.runs.push(new f(c, b, d, p, g, h));
          this.width += p;
        }
      };
      a.prototype.wrap = function(c) {
        var b = [this], d = this.runs, g = this;
        g.width = 0;
        g.runs = [];
        for (var h = a._getMeasureContext(), p = 0;p < d.length;p++) {
          var n = d[p], k = n.text;
          n.text = "";
          n.width = 0;
          h.font = n.font;
          for (var u = c, v = k.split(/[\s.-]/), l = 0, t = 0;t < v.length;t++) {
            var q = v[t], r = k.substr(l, q.length + 1), K = n.letterSpacing, D = w(h, r, K);
            if (D > u) {
              do {
                if (n.text && (g.runs.push(n), g.width += n.width, n = new f(n.font, n.fillStyle, "", 0, n.letterSpacing, n.underline), u = new a, u.y = g.y + g.descent + g.leading + g.ascent | 0, u.ascent = g.ascent, u.descent = g.descent, u.leading = g.leading, u.align = g.align, b.push(u), g = u), u = c - D, 0 > u) {
                  for (var z = r.length, B = r;1 < z && !(z--, B = r.substr(0, z), D = w(h, B, K), D <= c);) {
                  }
                  n.text = B;
                  n.width = D;
                  r = r.substr(z);
                  D = w(h, r, K);
                }
              } while (r && 0 > u);
            } else {
              u -= D;
            }
            n.text += r;
            n.width += D;
            l += q.length + 1;
          }
          g.runs.push(n);
          g.width += n.width;
        }
        return b;
      };
      a.prototype.toString = function() {
        return "TextLine {x: " + this.x + ", y: " + this.y + ", width: " + this.width + ", height: " + (this.ascent + this.descent + this.leading) + "}";
      };
      return a;
    }();
    q.TextLine = d;
    var f = function() {
      return function(a, c, b, d, f, g) {
        void 0 === a && (a = "");
        void 0 === c && (c = "");
        void 0 === b && (b = "");
        void 0 === d && (d = 0);
        void 0 === f && (f = 0);
        void 0 === g && (g = !1);
        this.font = a;
        this.fillStyle = c;
        this.text = b;
        this.width = d;
        this.letterSpacing = f;
        this.underline = g;
      };
    }();
    q.TextRun = f;
    p = function(a) {
      function c(c) {
        a.call(this);
        this._flags = 1048592;
        this.properties = {};
        this._textBounds = c.clone();
        this._textRunData = null;
        this._plainText = "";
        this._borderColor = this._backgroundColor = 0;
        this._matrix = k.createIdentity();
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
          for (var e = this._bounds, f = e.w - 4, g = this._plainText, p = this.lines, n = new d, k = 0, u = 0, v = 0, l = 0, t = -4294967295, q = -1;b.position < b.length;) {
            var r = b.readInt(), w = b.readInt(), B = b.readInt(), E = b.readUTF(), A = b.readInt(), C = b.readInt(), F = b.readInt();
            A > v && (v = A);
            C > l && (l = C);
            F > t && (t = F);
            A = b.readBoolean();
            C = "";
            b.readBoolean() && (C += "italic ");
            A && (C += "bold ");
            B = C + B + "px " + E;
            E = b.readInt();
            E = h.ColorUtilities.rgbToHex(E);
            A = b.readInt();
            -1 === q && (q = A);
            b.readBoolean();
            b.readInt();
            b.readInt();
            b.readInt();
            A = b.readInt();
            b.readInt();
            for (var C = b.readBoolean(), G = "", F = !1;!F;r++) {
              var F = r >= w - 1, J = g[r];
              if ("\r" !== J && "\n" !== J && (G += J, r < g.length - 1)) {
                continue;
              }
              n.addRun(B, E, G, A, C);
              if (n.runs.length) {
                p.length && (k += t);
                k += v;
                n.y = k | 0;
                k += l;
                n.ascent = v;
                n.descent = l;
                n.leading = t;
                n.align = q;
                if (c && n.width > f) {
                  for (n = n.wrap(f), G = 0;G < n.length;G++) {
                    var I = n[G], k = I.y + I.descent + I.leading;
                    p.push(I);
                    I.width > u && (u = I.width);
                  }
                } else {
                  p.push(n), n.width > u && (u = n.width);
                }
                n = new d;
              } else {
                k += v + l + t;
              }
              G = "";
              if (F) {
                l = v = 0;
                t = -4294967295;
                q = -1;
                break;
              }
              "\r" === J && "\n" === g[r + 1] && r++;
            }
            n.addRun(B, E, G, A, C);
          }
          b = g[g.length - 1];
          "\r" !== b && "\n" !== b || p.push(n);
          b = this.textRect;
          b.w = u;
          b.h = k;
          if (a) {
            if (!c) {
              f = u;
              u = e.w;
              switch(a) {
                case 1:
                  b.x = u - (f + 4) >> 1;
                  break;
                case 3:
                  b.x = u - (f + 4);
              }
              this._textBounds.setElements(b.x - 2, b.y - 2, b.w + 4, b.h + 4);
              e.w = f + 4;
            }
            e.x = b.x - 2;
            e.h = k + 4;
          } else {
            this._textBounds = e;
          }
          for (r = 0;r < p.length;r++) {
            if (e = p[r], e.width < f) {
              switch(e.align) {
                case 1:
                  e.x = f - e.width | 0;
                  break;
                case 2:
                  e.x = (f - e.width) / 2 | 0;
              }
            }
          }
          this.invalidate();
        }
      };
      c.roundBoundPoints = function(a) {
        for (var c = 0;c < a.length;c++) {
          var b = a[c];
          b.x = Math.floor(b.x + .1) + .5;
          b.y = Math.floor(b.y + .1) + .5;
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
          var d = c.absoluteBoundPoints, e = a.currentTransform;
          e ? (b = b.clone(), (new k(e.a, e.b, e.c, e.d, e.e, e.f)).transformRectangle(b, d), a.setTransform(1, 0, 0, 1, 0, 0)) : (d[0].x = b.x, d[0].y = b.y, d[1].x = b.x + b.w, d[1].y = b.y, d[2].x = b.x + b.w, d[2].y = b.y + b.h, d[3].x = b.x, d[3].y = b.y + b.h);
          c.roundBoundPoints(d);
          b = new Path2D;
          b.moveTo(d[0].x, d[0].y);
          b.lineTo(d[1].x, d[1].y);
          b.lineTo(d[2].x, d[2].y);
          b.lineTo(d[3].x, d[3].y);
          b.lineTo(d[0].x, d[0].y);
          a.stroke(b);
          e && a.setTransform(e.a, e.b, e.c, e.d, e.e, e.f);
        }
        this._coords ? this._renderChars(a) : this._renderLines(a);
        a.restore();
      };
      c.prototype._renderChars = function(a) {
        if (this._matrix) {
          var c = this._matrix;
          a.transform(c.a, c.b, c.c, c.d, c.tx, c.ty);
        }
        var c = this.lines, b = this._coords;
        b.position = 0;
        for (var d = "", e = "", f = 0;f < c.length;f++) {
          for (var g = c[f].runs, h = 0;h < g.length;h++) {
            var p = g[h];
            p.font !== d && (a.font = d = p.font);
            p.fillStyle !== e && (a.fillStyle = e = p.fillStyle);
            for (var p = p.text, n = 0;n < p.length;n++) {
              var k = b.readInt() / 20, u = b.readInt() / 20;
              a.fillText(p[n], k, u);
            }
          }
        }
      };
      c.prototype._renderLines = function(a) {
        var c = this._textBounds;
        a.beginPath();
        a.rect(c.x + 2, c.y + 2, c.w - 4, c.h - 4);
        a.clip();
        a.translate(c.x - this._scrollH + 2, c.y + 2);
        var b = this.lines, d = this._scrollV, e = 0, f = "", g = "";
        a.textAlign = "left";
        a.textBaseline = "alphabetic";
        for (var h = 0;h < b.length;h++) {
          var p = b[h], n = p.x, k = p.y;
          if (h + 1 < d) {
            e = k + p.descent + p.leading;
          } else {
            k -= e;
            if (h + 1 - d && k > c.h) {
              break;
            }
            for (var u = p.runs, v = 0;v < u.length;v++) {
              var l = u[v];
              l.font !== f && (a.font = f = l.font);
              l.fillStyle !== g && (a.fillStyle = g = l.fillStyle);
              l.underline && a.fillRect(n, k + p.descent / 2 | 0, l.width, 1);
              a.textAlign = "left";
              a.textBaseline = "alphabetic";
              if (0 < l.letterSpacing) {
                for (var t = l.text, q = 0;q < t.length;q++) {
                  a.fillText(t[q], n, k), n += w(a, t[q], l.letterSpacing);
                }
              } else {
                a.fillText(l.text, n, k), n += l.width;
              }
            }
          }
        }
      };
      c.absoluteBoundPoints = [new l(0, 0), new l(0, 0), new l(0, 0), new l(0, 0)];
      return c;
    }(g);
    q.RenderableText = p;
    g = function(b) {
      function c(c, d) {
        b.call(this);
        this._flags = 3145728;
        this.properties = {};
        this.setBounds(new a(0, 0, c, d));
      }
      __extends(c, b);
      Object.defineProperty(c.prototype, "text", {get:function() {
        return this._text;
      }, set:function(a) {
        this._text = a;
      }, enumerable:!0, configurable:!0});
      c.prototype.render = function(a, c, b) {
        a.save();
        a.textBaseline = "top";
        a.fillStyle = "white";
        a.fillText(this.text, 0, 0);
        a.restore();
      };
      return c;
    }(g);
    q.Label = g;
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(q) {
    function r(a, b, g, h, u) {
      b = l[b - 1];
      u && (u = b / 4, g -= u, h -= u);
      u = Math.ceil((1 > g ? 1 : g) / (b - 1E-9));
      b = Math.ceil((1 > h ? 1 : h) / (b - 1E-9));
      a.x -= u;
      a.w += 2 * u;
      a.y -= b;
      a.h += 2 * b;
    }
    var b = h.ColorUtilities.clampByte, w = function() {
      function a() {
      }
      a.prototype.expandBounds = function(a) {
      };
      return a;
    }();
    q.Filter = w;
    var l = [2, 1 / 1.05, 1 / 1.35, 1 / 1.55, 1 / 1.75, 1 / 1.9, .5, 1 / 2.1, 1 / 2.2, 1 / 2.3, .4, 1 / 3, 1 / 3, 1 / 3.5, 1 / 3.5], a = function(a) {
      function b(g, h, u) {
        a.call(this);
        this.blurX = g;
        this.blurY = h;
        this.quality = u;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        r(a, this.quality, this.blurX, this.blurY, !0);
      };
      return b;
    }(w);
    q.BlurFilter = a;
    a = function(a) {
      function b(g, h, u, n, v, d, f, e, c, m, l) {
        a.call(this);
        this.alpha = g;
        this.angle = h;
        this.blurX = u;
        this.blurY = n;
        this.color = v;
        this.distance = d;
        this.hideObject = f;
        this.inner = e;
        this.knockout = c;
        this.quality = m;
        this.strength = l;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        if (!this.inner && (r(a, this.quality, this.blurX, this.blurY, !1), this.distance)) {
          var b = this.angle * Math.PI / 180, h = Math.cos(b) * this.distance, n = Math.sin(b) * this.distance, b = a.x + (0 <= h ? 0 : Math.floor(h)), h = a.x + a.w + Math.ceil(Math.abs(h)), k = a.y + (0 <= n ? 0 : Math.floor(n)), n = a.y + a.h + Math.ceil(Math.abs(n));
          a.x = b;
          a.w = h - b;
          a.y = k;
          a.h = n - k;
        }
      };
      return b;
    }(w);
    q.DropshadowFilter = a;
    a = function(a) {
      function b(g, h, u, n, v, d, f, e) {
        a.call(this);
        this.alpha = g;
        this.blurX = h;
        this.blurY = u;
        this.color = n;
        this.inner = v;
        this.knockout = d;
        this.quality = f;
        this.strength = e;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        this.inner || r(a, this.quality, this.blurX, this.blurY, !1);
      };
      return b;
    }(w);
    q.GlowFilter = a;
    (function(a) {
      a[a.Unknown = 0] = "Unknown";
      a[a.Identity = 1] = "Identity";
    })(q.ColorMatrixType || (q.ColorMatrixType = {}));
    w = function(a) {
      function h(b) {
        a.call(this);
        this._data = new Float32Array(b);
        this._type = 0;
      }
      __extends(h, a);
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
      h.prototype.setMultipliersAndOffsets = function(a, b, h, n, k, d, f, e) {
        for (var c = this._data, m = 0;m < c.length;m++) {
          c[m] = 0;
        }
        c[0] = a;
        c[5] = b;
        c[10] = h;
        c[15] = n;
        c[16] = k / 255;
        c[17] = d / 255;
        c[18] = f / 255;
        c[19] = e / 255;
        this._type = 0;
      };
      h.prototype.transformRGBA = function(a) {
        var h = a >> 24 & 255, k = a >> 16 & 255, n = a >> 8 & 255, v = a & 255, d = this._data;
        a = b(h * d[0] + k * d[1] + n * d[2] + v * d[3] + 255 * d[16]);
        var f = b(h * d[4] + k * d[5] + n * d[6] + v * d[7] + 255 * d[17]), e = b(h * d[8] + k * d[9] + n * d[10] + v * d[11] + 255 * d[18]), h = b(h * d[12] + k * d[13] + n * d[14] + v * d[15] + 255 * d[19]);
        return a << 24 | f << 16 | e << 8 | h;
      };
      h.prototype.multiply = function(a) {
        if (!(a._type & 1)) {
          var b = this._data, h = a._data;
          a = b[0];
          var n = b[1], k = b[2], d = b[3], f = b[4], e = b[5], c = b[6], m = b[7], l = b[8], q = b[9], t = b[10], r = b[11], w = b[12], T = b[13], U = b[14], W = b[15], ga = b[16], ha = b[17], ia = b[18], ja = b[19], K = h[0], D = h[1], z = h[2], B = h[3], E = h[4], A = h[5], C = h[6], F = h[7], G = h[8], J = h[9], I = h[10], L = h[11], M = h[12], N = h[13], O = h[14], P = h[15], Q = h[16], R = h[17], S = h[18], h = h[19];
          b[0] = a * K + f * D + l * z + w * B;
          b[1] = n * K + e * D + q * z + T * B;
          b[2] = k * K + c * D + t * z + U * B;
          b[3] = d * K + m * D + r * z + W * B;
          b[4] = a * E + f * A + l * C + w * F;
          b[5] = n * E + e * A + q * C + T * F;
          b[6] = k * E + c * A + t * C + U * F;
          b[7] = d * E + m * A + r * C + W * F;
          b[8] = a * G + f * J + l * I + w * L;
          b[9] = n * G + e * J + q * I + T * L;
          b[10] = k * G + c * J + t * I + U * L;
          b[11] = d * G + m * J + r * I + W * L;
          b[12] = a * M + f * N + l * O + w * P;
          b[13] = n * M + e * N + q * O + T * P;
          b[14] = k * M + c * N + t * O + U * P;
          b[15] = d * M + m * N + r * O + W * P;
          b[16] = a * Q + f * R + l * S + w * h + ga;
          b[17] = n * Q + e * R + q * S + T * h + ha;
          b[18] = k * Q + c * R + t * S + U * h + ia;
          b[19] = d * Q + m * R + r * S + W * h + ja;
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
    }(w);
    q.ColorMatrix = w;
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(q) {
    (function(r) {
      function b(a, b) {
        return -1 !== a.indexOf(b, this.length - b.length);
      }
      var w = q.Geometry.Point3D, l = q.Geometry.Matrix3D, a = q.Geometry.degreesToRadian, k = h.Debug.unexpected, t = h.Debug.notImplemented;
      r.SHADER_ROOT = "shaders/";
      var g = function() {
        function g(a, b) {
          this._fillColor = h.Color.Red;
          this._surfaceRegionCache = new h.LRUList;
          this.modelViewProjectionMatrix = l.createIdentity();
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
          this.modelViewProjectionMatrix = l.create2DProjection(this._w, this._h, 2E3);
          var p = this;
          this._surfaceRegionAllocator = new q.SurfaceRegionAllocator.SimpleAllocator(function() {
            var a = p._createTexture(1024, 1024);
            return new r.WebGLSurface(1024, 1024, a);
          });
        }
        Object.defineProperty(g.prototype, "surfaces", {get:function() {
          return this._surfaceRegionAllocator.surfaces;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(g.prototype, "fillStyle", {set:function(a) {
          this._fillColor.set(h.Color.parseColor(a));
        }, enumerable:!0, configurable:!0});
        g.prototype.setBlendMode = function(a) {
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
              t("Blend Mode: " + a);
          }
        };
        g.prototype.setBlendOptions = function() {
          this.gl.blendFunc(this._options.sourceBlendFactor, this._options.destinationBlendFactor);
        };
        g.glSupportedBlendMode = function(a) {
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
        g.prototype.create2DProjectionMatrix = function() {
          return l.create2DProjection(this._w, this._h, -this._w);
        };
        g.prototype.createPerspectiveMatrix = function(b, g, h) {
          h = a(h);
          g = l.createPerspective(a(g), 1, .1, 5E3);
          var d = new w(0, 1, 0), f = new w(0, 0, 0);
          b = new w(0, 0, b);
          b = l.createCameraLookAt(b, f, d);
          b = l.createInverse(b);
          d = l.createIdentity();
          d = l.createMultiply(d, l.createTranslation(-this._w / 2, -this._h / 2, 0));
          d = l.createMultiply(d, l.createScale(1 / this._w, -1 / this._h, .01));
          d = l.createMultiply(d, l.createYRotation(h));
          d = l.createMultiply(d, b);
          return d = l.createMultiply(d, g);
        };
        g.prototype.discardCachedImages = function() {
          2 <= q.traceLevel && q.writer && q.writer.writeLn("Discard Cache");
          for (var a = this._surfaceRegionCache.count / 2 | 0, b = 0;b < a;b++) {
            var g = this._surfaceRegionCache.pop();
            2 <= q.traceLevel && q.writer && q.writer.writeLn("Discard: " + g);
            g.texture.atlas.remove(g.region);
            g.texture = null;
          }
        };
        g.prototype.cacheImage = function(a) {
          var b = this.allocateSurfaceRegion(a.width, a.height);
          2 <= q.traceLevel && q.writer && q.writer.writeLn("Uploading Image: @ " + b.region);
          this._surfaceRegionCache.use(b);
          this.updateSurfaceRegion(a, b);
          return b;
        };
        g.prototype.allocateSurfaceRegion = function(a, b, g) {
          return this._surfaceRegionAllocator.allocate(a, b, null);
        };
        g.prototype.updateSurfaceRegion = function(a, b) {
          var g = this.gl;
          g.bindTexture(g.TEXTURE_2D, b.surface.texture);
          g.texSubImage2D(g.TEXTURE_2D, 0, b.region.x, b.region.y, g.RGBA, g.UNSIGNED_BYTE, a);
        };
        g.prototype._resize = function() {
          var a = this.gl;
          this._w = this._canvas.width;
          this._h = this._canvas.height;
          a.viewport(0, 0, this._w, this._h);
          for (var b in this._programCache) {
            this._initializeProgram(this._programCache[b]);
          }
        };
        g.prototype._initializeProgram = function(a) {
          this.gl.useProgram(a);
        };
        g.prototype._createShaderFromFile = function(a) {
          var g = r.SHADER_ROOT + a, h = this.gl;
          a = new XMLHttpRequest;
          a.open("GET", g, !1);
          a.send();
          if (b(g, ".vert")) {
            g = h.VERTEX_SHADER;
          } else {
            if (b(g, ".frag")) {
              g = h.FRAGMENT_SHADER;
            } else {
              throw "Shader Type: not supported.";
            }
          }
          return this._createShader(g, a.responseText);
        };
        g.prototype.createProgramFromFiles = function(a, b) {
          var g = a + "-" + b, d = this._programCache[g];
          d || (d = this._createProgram([this._createShaderFromFile(a), this._createShaderFromFile(b)]), this._queryProgramAttributesAndUniforms(d), this._initializeProgram(d), this._programCache[g] = d);
          return d;
        };
        g.prototype._createProgram = function(a) {
          var b = this.gl, g = b.createProgram();
          a.forEach(function(a) {
            b.attachShader(g, a);
          });
          b.linkProgram(g);
          b.getProgramParameter(g, b.LINK_STATUS) || (k("Cannot link program: " + b.getProgramInfoLog(g)), b.deleteProgram(g));
          return g;
        };
        g.prototype._createShader = function(a, b) {
          var g = this.gl, d = g.createShader(a);
          g.shaderSource(d, b);
          g.compileShader(d);
          return g.getShaderParameter(d, g.COMPILE_STATUS) ? d : (k("Cannot compile shader: " + g.getShaderInfoLog(d)), g.deleteShader(d), null);
        };
        g.prototype._createTexture = function(a, b) {
          var g = this.gl, d = g.createTexture();
          g.bindTexture(g.TEXTURE_2D, d);
          g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE);
          g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE);
          g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.LINEAR);
          g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, g.LINEAR);
          g.texImage2D(g.TEXTURE_2D, 0, g.RGBA, a, b, 0, g.RGBA, g.UNSIGNED_BYTE, null);
          return d;
        };
        g.prototype._createFramebuffer = function(a) {
          var b = this.gl, g = b.createFramebuffer();
          b.bindFramebuffer(b.FRAMEBUFFER, g);
          b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, a, 0);
          b.bindFramebuffer(b.FRAMEBUFFER, null);
          return g;
        };
        g.prototype._queryProgramAttributesAndUniforms = function(a) {
          a.uniforms = {};
          a.attributes = {};
          for (var b = this.gl, g = 0, d = b.getProgramParameter(a, b.ACTIVE_ATTRIBUTES);g < d;g++) {
            var f = b.getActiveAttrib(a, g);
            a.attributes[f.name] = f;
            f.location = b.getAttribLocation(a, f.name);
          }
          g = 0;
          for (d = b.getProgramParameter(a, b.ACTIVE_UNIFORMS);g < d;g++) {
            f = b.getActiveUniform(a, g), a.uniforms[f.name] = f, f.location = b.getUniformLocation(a, f.name);
          }
        };
        Object.defineProperty(g.prototype, "target", {set:function(a) {
          var b = this.gl;
          a ? (b.viewport(0, 0, a.w, a.h), b.bindFramebuffer(b.FRAMEBUFFER, a.framebuffer)) : (b.viewport(0, 0, this._w, this._h), b.bindFramebuffer(b.FRAMEBUFFER, null));
        }, enumerable:!0, configurable:!0});
        g.prototype.clear = function(a) {
          a = this.gl;
          a.clearColor(0, 0, 0, 0);
          a.clear(a.COLOR_BUFFER_BIT);
        };
        g.prototype.clearTextureRegion = function(a, b) {
          void 0 === b && (b = h.Color.None);
          var g = this.gl, d = a.region;
          this.target = a.surface;
          g.enable(g.SCISSOR_TEST);
          g.scissor(d.x, d.y, d.w, d.h);
          g.clearColor(b.r, b.g, b.b, b.a);
          g.clear(g.COLOR_BUFFER_BIT | g.DEPTH_BUFFER_BIT);
          g.disable(g.SCISSOR_TEST);
        };
        g.prototype.sizeOf = function(a) {
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
              t(a);
          }
        };
        g.MAX_SURFACES = 8;
        return g;
      }();
      r.WebGLContext = g;
    })(q.WebGL || (q.WebGL = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(h, q) {
  function r() {
    this.constructor = h;
  }
  for (var b in q) {
    q.hasOwnProperty(b) && (h[b] = q[b]);
  }
  r.prototype = q.prototype;
  h.prototype = new r;
};
(function(h) {
  (function(q) {
    (function(r) {
      var b = h.Debug.assert, w = function(a) {
        function h() {
          a.apply(this, arguments);
        }
        __extends(h, a);
        h.prototype.ensureVertexCapacity = function(a) {
          b(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 8 * a);
        };
        h.prototype.writeVertex = function(a, g) {
          b(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 8);
          this.writeVertexUnsafe(a, g);
        };
        h.prototype.writeVertexUnsafe = function(a, b) {
          var h = this._offset >> 2;
          this._f32[h] = a;
          this._f32[h + 1] = b;
          this._offset += 8;
        };
        h.prototype.writeVertex3D = function(a, g, h) {
          b(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 12);
          this.writeVertex3DUnsafe(a, g, h);
        };
        h.prototype.writeVertex3DUnsafe = function(a, b, h) {
          var k = this._offset >> 2;
          this._f32[k] = a;
          this._f32[k + 1] = b;
          this._f32[k + 2] = h;
          this._offset += 12;
        };
        h.prototype.writeTriangleElements = function(a, g, h) {
          b(0 === (this._offset & 1));
          this.ensureCapacity(this._offset + 6);
          var k = this._offset >> 1;
          this._u16[k] = a;
          this._u16[k + 1] = g;
          this._u16[k + 2] = h;
          this._offset += 6;
        };
        h.prototype.ensureColorCapacity = function(a) {
          b(0 === (this._offset & 2));
          this.ensureCapacity(this._offset + 16 * a);
        };
        h.prototype.writeColorFloats = function(a, g, h, k) {
          b(0 === (this._offset & 2));
          this.ensureCapacity(this._offset + 16);
          this.writeColorFloatsUnsafe(a, g, h, k);
        };
        h.prototype.writeColorFloatsUnsafe = function(a, b, h, k) {
          var n = this._offset >> 2;
          this._f32[n] = a;
          this._f32[n + 1] = b;
          this._f32[n + 2] = h;
          this._f32[n + 3] = k;
          this._offset += 16;
        };
        h.prototype.writeColor = function(a, g, h, k) {
          b(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 4);
          this._i32[this._offset >> 2] = k << 24 | h << 16 | g << 8 | a;
          this._offset += 4;
        };
        h.prototype.writeColorUnsafe = function(a, b, h, k) {
          this._i32[this._offset >> 2] = k << 24 | h << 16 | b << 8 | a;
          this._offset += 4;
        };
        h.prototype.writeRandomColor = function() {
          this.writeColor(Math.random(), Math.random(), Math.random(), Math.random() / 2);
        };
        return h;
      }(h.ArrayUtilities.ArrayWriter);
      r.BufferWriter = w;
      r.WebGLAttribute = function() {
        return function(a, b, h, g) {
          void 0 === g && (g = !1);
          this.name = a;
          this.size = b;
          this.type = h;
          this.normalized = g;
        };
      }();
      var l = function() {
        function a(a) {
          this.size = 0;
          this.attributes = a;
        }
        a.prototype.initialize = function(a) {
          for (var b = 0, g = 0;g < this.attributes.length;g++) {
            this.attributes[g].offset = b, b += a.sizeOf(this.attributes[g].type) * this.attributes[g].size;
          }
          this.size = b;
        };
        return a;
      }();
      r.WebGLAttributeList = l;
      l = function() {
        function a(a) {
          this._elementOffset = this.triangleCount = 0;
          this.context = a;
          this.array = new w(8);
          this.buffer = a.gl.createBuffer();
          this.elementArray = new w(8);
          this.elementBuffer = a.gl.createBuffer();
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
      r.WebGLGeometry = l;
      l = function(a) {
        function b(h, g, p) {
          a.call(this, h, g, p);
        }
        __extends(b, a);
        b.createEmptyVertices = function(a, b) {
          for (var h = [], k = 0;k < b;k++) {
            h.push(new a(0, 0, 0));
          }
          return h;
        };
        return b;
      }(q.Geometry.Point3D);
      r.Vertex = l;
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
    })(q.WebGL || (q.WebGL = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(r) {
      var b = function() {
        function b(a, k, l) {
          this.texture = l;
          this.w = a;
          this.h = k;
          this._regionAllocator = new h.RegionAllocator.CompactAllocator(this.w, this.h);
        }
        b.prototype.allocate = function(a, b) {
          var h = this._regionAllocator.allocate(a, b);
          return h ? new w(this, h) : null;
        };
        b.prototype.free = function(a) {
          this._regionAllocator.free(a.region);
        };
        return b;
      }();
      r.WebGLSurface = b;
      var w = function() {
        return function(b, a) {
          this.surface = b;
          this.region = a;
          this.next = this.previous = null;
        };
      }();
      r.WebGLSurfaceRegion = w;
    })(h.WebGL || (h.WebGL = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(q) {
    (function(r) {
      var b = h.Color;
      r.TILE_SIZE = 256;
      r.MIN_UNTILED_SIZE = 256;
      var w = q.Geometry.Matrix, l = q.Geometry.Rectangle, a = function(a) {
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
      }(q.RendererOptions);
      r.WebGLRendererOptions = a;
      var k = function(h) {
        function g(b, g, n) {
          void 0 === n && (n = new a);
          h.call(this, b, g, n);
          this._tmpVertices = r.Vertex.createEmptyVertices(r.Vertex, 64);
          this._cachedTiles = [];
          b = this._context = new r.WebGLContext(this._canvas, n);
          this._updateSize();
          this._brush = new r.WebGLCombinedBrush(b, new r.WebGLGeometry(b));
          this._stencilBrush = new r.WebGLCombinedBrush(b, new r.WebGLGeometry(b));
          this._scratchCanvas = document.createElement("canvas");
          this._scratchCanvas.width = this._scratchCanvas.height = 2048;
          this._scratchCanvasContext = this._scratchCanvas.getContext("2d", {willReadFrequently:!0});
          this._dynamicScratchCanvas = document.createElement("canvas");
          this._dynamicScratchCanvas.width = this._dynamicScratchCanvas.height = 0;
          this._dynamicScratchCanvasContext = this._dynamicScratchCanvas.getContext("2d", {willReadFrequently:!0});
          this._uploadCanvas = document.createElement("canvas");
          this._uploadCanvas.width = this._uploadCanvas.height = 0;
          this._uploadCanvasContext = this._uploadCanvas.getContext("2d", {willReadFrequently:!0});
          n.showTemporaryCanvases && (document.getElementById("temporaryCanvasPanelContainer").appendChild(this._uploadCanvas), document.getElementById("temporaryCanvasPanelContainer").appendChild(this._scratchCanvas));
          this._clipStack = [];
        }
        __extends(g, h);
        g.prototype.resize = function() {
          this._updateSize();
          this.render();
        };
        g.prototype._updateSize = function() {
          this._viewport = new l(0, 0, this._canvas.width, this._canvas.height);
          this._context._resize();
        };
        g.prototype._cacheImageCallback = function(a, b, g) {
          var h = g.w, d = g.h, f = g.x;
          g = g.y;
          this._uploadCanvas.width = h + 2;
          this._uploadCanvas.height = d + 2;
          this._uploadCanvasContext.drawImage(b.canvas, f, g, h, d, 1, 1, h, d);
          this._uploadCanvasContext.drawImage(b.canvas, f, g, h, 1, 1, 0, h, 1);
          this._uploadCanvasContext.drawImage(b.canvas, f, g + d - 1, h, 1, 1, d + 1, h, 1);
          this._uploadCanvasContext.drawImage(b.canvas, f, g, 1, d, 0, 1, 1, d);
          this._uploadCanvasContext.drawImage(b.canvas, f + h - 1, g, 1, d, h + 1, 1, 1, d);
          return a && a.surface ? (this._options.disableSurfaceUploads || this._context.updateSurfaceRegion(this._uploadCanvas, a), a) : this._context.cacheImage(this._uploadCanvas);
        };
        g.prototype._enterClip = function(a, b, g, h) {
          g.flush();
          b = this._context.gl;
          0 === this._clipStack.length && (b.enable(b.STENCIL_TEST), b.clear(b.STENCIL_BUFFER_BIT), b.stencilFunc(b.ALWAYS, 1, 1));
          this._clipStack.push(a);
          b.colorMask(!1, !1, !1, !1);
          b.stencilOp(b.KEEP, b.KEEP, b.INCR);
          g.flush();
          b.colorMask(!0, !0, !0, !0);
          b.stencilFunc(b.NOTEQUAL, 0, this._clipStack.length);
          b.stencilOp(b.KEEP, b.KEEP, b.KEEP);
        };
        g.prototype._leaveClip = function(a, b, g, h) {
          g.flush();
          b = this._context.gl;
          if (a = this._clipStack.pop()) {
            b.colorMask(!1, !1, !1, !1), b.stencilOp(b.KEEP, b.KEEP, b.DECR), g.flush(), b.colorMask(!0, !0, !0, !0), b.stencilFunc(b.NOTEQUAL, 0, this._clipStack.length), b.stencilOp(b.KEEP, b.KEEP, b.KEEP);
          }
          0 === this._clipStack.length && b.disable(b.STENCIL_TEST);
        };
        g.prototype._renderFrame = function(a, b, g, h, d) {
        };
        g.prototype._renderSurfaces = function(a) {
          var g = this._options, h = this._context, k = this._viewport;
          if (g.drawSurfaces) {
            var d = h.surfaces, h = w.createIdentity();
            if (0 <= g.drawSurface && g.drawSurface < d.length) {
              for (var g = d[g.drawSurface | 0], d = new l(0, 0, g.w, g.h), f = d.clone();f.w > k.w;) {
                f.scale(.5, .5);
              }
              a.drawImage(new r.WebGLSurfaceRegion(g, d), f, b.White, null, h, .2);
            } else {
              f = k.w / 5;
              f > k.h / d.length && (f = k.h / d.length);
              a.fillRectangle(new l(k.w - f, 0, f, k.h), new b(0, 0, 0, .5), h, .1);
              for (var e = 0;e < d.length;e++) {
                var g = d[e], c = new l(k.w - f, e * f, f, f);
                a.drawImage(new r.WebGLSurfaceRegion(g, new l(0, 0, g.w, g.h)), c, b.White, null, h, .2);
              }
            }
            a.flush();
          }
        };
        g.prototype.render = function() {
          var a = this._options, g = this._context.gl;
          this._context.modelViewProjectionMatrix = a.perspectiveCamera ? this._context.createPerspectiveMatrix(a.perspectiveCameraDistance + (a.animateZoom ? .8 * Math.sin(Date.now() / 3E3) : 0), a.perspectiveCameraFOV, a.perspectiveCameraAngle) : this._context.create2DProjectionMatrix();
          var h = this._brush;
          g.clearColor(0, 0, 0, 0);
          g.clear(g.COLOR_BUFFER_BIT | g.DEPTH_BUFFER_BIT);
          h.reset();
          g = this._viewport;
          h.flush();
          a.paintViewport && (h.fillRectangle(g, new b(.5, 0, 0, .25), w.createIdentity(), 0), h.flush());
          this._renderSurfaces(h);
        };
        return g;
      }(q.Renderer);
      r.WebGLRenderer = k;
    })(q.WebGL || (q.WebGL = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(q) {
    (function(r) {
      var b = h.Color, w = q.Geometry.Point, l = q.Geometry.Matrix3D, a = function() {
        function a(b, h, k) {
          this._target = k;
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
      r.WebGLBrush = a;
      (function(a) {
        a[a.FillColor = 0] = "FillColor";
        a[a.FillTexture = 1] = "FillTexture";
        a[a.FillTextureWithColorMatrix = 2] = "FillTextureWithColorMatrix";
      })(r.WebGLCombinedBrushKind || (r.WebGLCombinedBrushKind = {}));
      var k = function(a) {
        function g(g, h, k) {
          a.call(this, g, h, k);
          this.kind = 0;
          this.color = new b(0, 0, 0, 0);
          this.sampler = 0;
          this.coordinate = new w(0, 0);
        }
        __extends(g, a);
        g.initializeAttributeList = function(a) {
          var b = a.gl;
          g.attributeList || (g.attributeList = new r.WebGLAttributeList([new r.WebGLAttribute("aPosition", 3, b.FLOAT), new r.WebGLAttribute("aCoordinate", 2, b.FLOAT), new r.WebGLAttribute("aColor", 4, b.UNSIGNED_BYTE, !0), new r.WebGLAttribute("aKind", 1, b.FLOAT), new r.WebGLAttribute("aSampler", 1, b.FLOAT)]), g.attributeList.initialize(a));
        };
        g.prototype.writeTo = function(a) {
          a = a.array;
          a.ensureAdditionalCapacity(68);
          a.writeVertex3DUnsafe(this.x, this.y, this.z);
          a.writeVertexUnsafe(this.coordinate.x, this.coordinate.y);
          a.writeColorUnsafe(255 * this.color.r, 255 * this.color.g, 255 * this.color.b, 255 * this.color.a);
          a.writeFloatUnsafe(this.kind);
          a.writeFloatUnsafe(this.sampler);
        };
        return g;
      }(r.Vertex);
      r.WebGLCombinedBrushVertex = k;
      a = function(a) {
        function b(g, h, n) {
          void 0 === n && (n = null);
          a.call(this, g, h, n);
          this._blendMode = 1;
          this._program = g.createProgramFromFiles("combined.vert", "combined.frag");
          this._surfaces = [];
          k.initializeAttributeList(this._context);
        }
        __extends(b, a);
        b.prototype.reset = function() {
          this._surfaces = [];
          this._geometry.reset();
        };
        b.prototype.drawImage = function(a, h, k, l, d, f, e) {
          void 0 === f && (f = 0);
          void 0 === e && (e = 1);
          if (!a || !a.surface) {
            return !0;
          }
          h = h.clone();
          this._colorMatrix && (l && this._colorMatrix.equals(l) || this.flush());
          this._colorMatrix = l;
          this._blendMode !== e && (this.flush(), this._blendMode = e);
          e = this._surfaces.indexOf(a.surface);
          0 > e && (8 === this._surfaces.length && this.flush(), this._surfaces.push(a.surface), e = this._surfaces.length - 1);
          var c = b._tmpVertices, m = a.region.clone();
          m.offset(1, 1).resize(-2, -2);
          m.scale(1 / a.surface.w, 1 / a.surface.h);
          d.transformRectangle(h, c);
          for (a = 0;4 > a;a++) {
            c[a].z = f;
          }
          c[0].coordinate.x = m.x;
          c[0].coordinate.y = m.y;
          c[1].coordinate.x = m.x + m.w;
          c[1].coordinate.y = m.y;
          c[2].coordinate.x = m.x + m.w;
          c[2].coordinate.y = m.y + m.h;
          c[3].coordinate.x = m.x;
          c[3].coordinate.y = m.y + m.h;
          for (a = 0;4 > a;a++) {
            f = b._tmpVertices[a], f.kind = l ? 2 : 1, f.color.set(k), f.sampler = e, f.writeTo(this._geometry);
          }
          this._geometry.addQuad();
          return !0;
        };
        b.prototype.fillRectangle = function(a, h, k, l) {
          void 0 === l && (l = 0);
          k.transformRectangle(a, b._tmpVertices);
          for (a = 0;4 > a;a++) {
            k = b._tmpVertices[a], k.kind = 0, k.color.set(h), k.z = l, k.writeTo(this._geometry);
          }
          this._geometry.addQuad();
        };
        b.prototype.flush = function() {
          var a = this._geometry, b = this._program, g = this._context.gl, h;
          a.uploadBuffers();
          g.useProgram(b);
          this._target ? (h = l.create2DProjection(this._target.w, this._target.h, 2E3), h = l.createMultiply(h, l.createScale(1, -1, 1))) : h = this._context.modelViewProjectionMatrix;
          g.uniformMatrix4fv(b.uniforms.uTransformMatrix3D.location, !1, h.asWebGLMatrix());
          this._colorMatrix && (g.uniformMatrix4fv(b.uniforms.uColorMatrix.location, !1, this._colorMatrix.asWebGLMatrix()), g.uniform4fv(b.uniforms.uColorVector.location, this._colorMatrix.asWebGLVector()));
          for (h = 0;h < this._surfaces.length;h++) {
            g.activeTexture(g.TEXTURE0 + h), g.bindTexture(g.TEXTURE_2D, this._surfaces[h].texture);
          }
          g.uniform1iv(b.uniforms["uSampler[0]"].location, [0, 1, 2, 3, 4, 5, 6, 7]);
          g.bindBuffer(g.ARRAY_BUFFER, a.buffer);
          var d = k.attributeList.size, f = k.attributeList.attributes;
          for (h = 0;h < f.length;h++) {
            var e = f[h], c = b.attributes[e.name].location;
            g.enableVertexAttribArray(c);
            g.vertexAttribPointer(c, e.size, e.type, e.normalized, d, e.offset);
          }
          this._context.setBlendOptions();
          this._context.target = this._target;
          g.bindBuffer(g.ELEMENT_ARRAY_BUFFER, a.elementBuffer);
          g.drawElements(g.TRIANGLES, 3 * a.triangleCount, g.UNSIGNED_SHORT, 0);
          this.reset();
        };
        b._tmpVertices = r.Vertex.createEmptyVertices(k, 4);
        b._depth = 1;
        return b;
      }(a);
      r.WebGLCombinedBrush = a;
    })(q.WebGL || (q.WebGL = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(h) {
      var b = CanvasRenderingContext2D.prototype.save, q = CanvasRenderingContext2D.prototype.clip, l = CanvasRenderingContext2D.prototype.fill, a = CanvasRenderingContext2D.prototype.stroke, k = CanvasRenderingContext2D.prototype.restore, t = CanvasRenderingContext2D.prototype.beginPath;
      h.notifyReleaseChanged = function() {
        CanvasRenderingContext2D.prototype.save = b;
        CanvasRenderingContext2D.prototype.clip = q;
        CanvasRenderingContext2D.prototype.fill = l;
        CanvasRenderingContext2D.prototype.stroke = a;
        CanvasRenderingContext2D.prototype.restore = k;
        CanvasRenderingContext2D.prototype.beginPath = t;
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
  (function(q) {
    (function(r) {
      function b(a, b) {
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
      function w(a) {
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
            h.Debug.somewhatImplemented("Blend Mode: " + q.BlendMode[a]);
        }
        return b;
      }
      var l = h.NumberUtilities.clamp;
      navigator.userAgent.indexOf("Firefox");
      var a = function() {
        function a() {
        }
        a._prepareSVGFilters = function() {
          if (!a._svgBlurFilter) {
            var b = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            b.setAttribute("style", "display:block;width:0px;height:0px");
            var h = document.createElementNS("http://www.w3.org/2000/svg", "defs"), k = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            k.setAttribute("id", "svgBlurFilter");
            var l = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
            l.setAttribute("stdDeviation", "0 0");
            k.appendChild(l);
            h.appendChild(k);
            a._svgBlurFilter = l;
            k = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            k.setAttribute("id", "svgDropShadowFilter");
            l = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
            l.setAttribute("in", "SourceAlpha");
            l.setAttribute("stdDeviation", "3");
            k.appendChild(l);
            a._svgDropshadowFilterBlur = l;
            l = document.createElementNS("http://www.w3.org/2000/svg", "feOffset");
            l.setAttribute("dx", "0");
            l.setAttribute("dy", "0");
            l.setAttribute("result", "offsetblur");
            k.appendChild(l);
            a._svgDropshadowFilterOffset = l;
            l = document.createElementNS("http://www.w3.org/2000/svg", "feFlood");
            l.setAttribute("flood-color", "rgba(0,0,0,1)");
            k.appendChild(l);
            a._svgDropshadowFilterFlood = l;
            l = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
            l.setAttribute("in2", "offsetblur");
            l.setAttribute("operator", "in");
            k.appendChild(l);
            var l = document.createElementNS("http://www.w3.org/2000/svg", "feMerge"), d = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
            l.appendChild(d);
            d = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
            d.setAttribute("in", "SourceGraphic");
            l.appendChild(d);
            k.appendChild(l);
            h.appendChild(k);
            k = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            k.setAttribute("id", "svgColorMatrixFilter");
            l = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
            l.setAttribute("color-interpolation-filters", "sRGB");
            l.setAttribute("in", "SourceGraphic");
            l.setAttribute("type", "matrix");
            k.appendChild(l);
            h.appendChild(k);
            a._svgColorMatrixFilter = l;
            b.appendChild(h);
            document.documentElement.appendChild(b);
          }
        };
        a._applyFilter = function(k, l, n) {
          if (a._svgFiltersAreSupported) {
            if (a._prepareSVGFilters(), a._removeFilter(l), n instanceof q.BlurFilter) {
              var v = b(k, n.quality);
              a._svgBlurFilter.setAttribute("stdDeviation", n.blurX * v + " " + n.blurY * v);
              l.filter = "url(#svgBlurFilter)";
            } else {
              n instanceof q.DropshadowFilter ? (v = b(k, n.quality), a._svgDropshadowFilterBlur.setAttribute("stdDeviation", n.blurX * v + " " + n.blurY * v), a._svgDropshadowFilterOffset.setAttribute("dx", String(Math.cos(n.angle * Math.PI / 180) * n.distance * k)), a._svgDropshadowFilterOffset.setAttribute("dy", String(Math.sin(n.angle * Math.PI / 180) * n.distance * k)), a._svgDropshadowFilterFlood.setAttribute("flood-color", h.ColorUtilities.rgbaToCSSStyle(n.color << 8 | Math.round(255 * n.alpha))), 
              l.filter = "url(#svgDropShadowFilter)") : n instanceof q.ColorMatrix && (a._svgColorMatrixFilter.setAttribute("values", n.toSVGFilterMatrix()), l.filter = "url(#svgColorMatrixFilter)");
            }
          }
        };
        a._removeFilter = function(a) {
          a.filter = "none";
        };
        a._applyColorMatrix = function(a, b) {
          b.isIdentity() ? (a.globalAlpha = 1, a.globalColorMatrix = null) : b.hasOnlyAlphaMultiplier() ? (a.globalAlpha = l(b.alphaMultiplier, 0, 1), a.globalColorMatrix = null) : (a.globalAlpha = 1, a.globalColorMatrix = b);
        };
        a._svgFiltersAreSupported = !!Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype, "filter");
        return a;
      }();
      r.Filters = a;
      q.filters && a._svgFiltersAreSupported && ("registerScratchCanvas" in window || (window.registerScratchCanvas = function(a) {
        a.style.display = "none";
        document.body.appendChild(a);
      }));
      var k = function() {
        function b(a, g, h, k) {
          this.surface = a;
          this.region = g;
          this.w = h;
          this.h = k;
        }
        b.prototype.free = function() {
          this.surface.free(this);
        };
        b._ensureCopyCanvasSize = function(a, k) {
          var n;
          if (b._copyCanvasContext) {
            if (n = b._copyCanvasContext.canvas, n.width < a || n.height < k) {
              n.width = h.IntegerUtilities.nearestPowerOfTwo(a), n.height = h.IntegerUtilities.nearestPowerOfTwo(k);
            }
          } else {
            n = document.createElement("canvas"), "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(n), n.width = h.IntegerUtilities.nearestPowerOfTwo(a), n.height = h.IntegerUtilities.nearestPowerOfTwo(k), b._copyCanvasContext = n.getContext("2d");
          }
        };
        b.prototype.draw = function(h, k, n, l, d, f, e, c, m) {
          this.context.setTransform(1, 0, 0, 1, 0, 0);
          var q, x = 0, t = 0;
          h.context.canvas === this.context.canvas ? (b._ensureCopyCanvasSize(l, d), q = b._copyCanvasContext, q.clearRect(0, 0, l, d), q.drawImage(h.surface.canvas, h.region.x, h.region.y, l, d, 0, 0, l, d), f = q, t = x = 0) : (f = h.surface.context, x = h.region.x, t = h.region.y);
          a: {
            switch(e) {
              case 11:
                h = !0;
                break a;
              default:
                h = !1;
            }
          }
          h && (this.context.save(), this.context.beginPath(), this.context.rect(k, n, l, d), this.context.clip());
          this.context.globalAlpha = 1;
          this.context.globalCompositeOperation = w(e);
          if (c) {
            e = 0;
            if (1 < c.length) {
              var r, V, T, U;
              q ? (T = q, q = f, f = T) : (b._ensureCopyCanvasSize(l, d), q = b._copyCanvasContext, V = r = 0);
              for (;e < c.length - 1;e++) {
                q.clearRect(0, 0, l, d), a._applyFilter(m, q, c[e]), q.drawImage(f.canvas, x, t, l, d, r, V, l, d), a._removeFilter(q), T = q, V = x, U = t, q = f, f = T, t = x = r, r = V, V = U;
              }
              a._removeFilter(f);
              a._removeFilter(q);
            }
            a._applyFilter(m, this.context, c[e]);
          }
          this.context.drawImage(f.canvas, x, t, l, d, k, n, l, d);
          this.context.globalCompositeOperation = w(1);
          a._removeFilter(this.context);
          h && this.context.restore();
        };
        Object.defineProperty(b.prototype, "context", {get:function() {
          return this.surface.context;
        }, enumerable:!0, configurable:!0});
        b.prototype.resetTransform = function() {
          this.surface.context.setTransform(1, 0, 0, 1, 0, 0);
        };
        b.prototype.reset = function() {
          var a = this.surface.context;
          a.setTransform(1, 0, 0, 1, 0, 0);
          a.fillStyle = "#000000";
          a.strokeStyle = "#000000";
          a.globalAlpha = 1;
          a.globalColorMatrix = null;
          a.globalCompositeOperation = w(1);
        };
        b.prototype.fill = function(a) {
          var b = this.surface.context, g = this.region;
          b.fillStyle = a;
          b.fillRect(g.x, g.y, g.w, g.h);
        };
        b.prototype.clear = function(a) {
          var b = this.surface.context, g = this.region;
          a || (a = g);
          b.clearRect(a.x, a.y, a.w, a.h);
        };
        return b;
      }();
      r.Canvas2DSurfaceRegion = k;
      var t = function() {
        function a(b, g) {
          this.canvas = b;
          this.context = b.getContext("2d");
          this.w = b.width;
          this.h = b.height;
          this._regionAllocator = g;
        }
        a.prototype.allocate = function(a, b) {
          var g = this._regionAllocator.allocate(a, b);
          return g ? new k(this, g, a, b) : null;
        };
        a.prototype.free = function(a) {
          this._regionAllocator.free(a.region);
        };
        return a;
      }();
      r.Canvas2DSurface = t;
    })(q.Canvas2D || (q.Canvas2D = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(q) {
    (function(r) {
      var b = h.Debug.assert, w = h.GFX.Geometry.Rectangle, l = h.GFX.Geometry.Point, a = h.GFX.Geometry.Matrix, k = h.NumberUtilities.clamp, t = h.NumberUtilities.pow2, g = function() {
        return function(a, b) {
          this.surfaceRegion = a;
          this.scale = b;
        };
      }();
      r.MipMapLevel = g;
      var p = function() {
        function a(b, c, d, f) {
          this._node = c;
          this._levels = [];
          this._surfaceRegionAllocator = d;
          this._size = f;
          this._renderer = b;
        }
        a.prototype.getLevel = function(a) {
          a = Math.max(a.getAbsoluteScaleX(), a.getAbsoluteScaleY());
          var b = 0;
          1 !== a && (b = k(Math.round(Math.log(a) / Math.LN2), -5, 3));
          this._node.hasFlags(2097152) || (b = k(b, -5, 0));
          a = t(b);
          var d = 5 + b, b = this._levels[d];
          if (!b) {
            var f = this._node.getBounds().clone();
            f.scale(a, a);
            f.snap();
            var h = this._surfaceRegionAllocator.allocate(f.w, f.h, null), l = h.region, b = this._levels[d] = new g(h, a), d = new n(h);
            d.clip.set(l);
            d.matrix.setElements(a, 0, 0, a, l.x - f.x, l.y - f.y);
            d.flags |= 64;
            this._renderer.renderNodeWithState(this._node, d);
            d.free();
          }
          return b;
        };
        return a;
      }();
      r.MipMap = p;
      (function(a) {
        a[a.NonZero = 0] = "NonZero";
        a[a.EvenOdd = 1] = "EvenOdd";
      })(r.FillRule || (r.FillRule = {}));
      var u = function(a) {
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
      }(q.RendererOptions);
      r.Canvas2DRendererOptions = u;
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
      w.createMaxI16();
      var n = function(b) {
        function d(c) {
          b.call(this);
          this.clip = w.createEmpty();
          this.clipList = [];
          this.clipPath = null;
          this.flags = 0;
          this.target = null;
          this.matrix = a.createIdentity();
          this.colorMatrix = q.ColorMatrix.createIdentity();
          d.allocationCount++;
          this.target = c;
        }
        __extends(d, b);
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
      }(q.State);
      r.RenderState = n;
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
        function e(a, b, g) {
          void 0 === g && (g = new u);
          d.call(this, a, b, g);
          this._visited = 0;
          this._frameInfo = new v;
          this._fontSize = 0;
          this._layers = [];
          if (a instanceof HTMLCanvasElement) {
            var h = a;
            this._viewport = new w(0, 0, h.width, h.height);
            this._target = this._createTarget(h);
          } else {
            this._addLayer("Background Layer");
            g = this._addLayer("Canvas Layer");
            h = document.createElement("canvas");
            g.appendChild(h);
            this._viewport = new w(0, 0, a.scrollWidth, a.scrollHeight);
            var k = this;
            b.addEventListener(1, function() {
              k._onStageBoundsChanged(h);
            });
            this._onStageBoundsChanged(h);
          }
          e._prepareSurfaceAllocators();
        }
        __extends(e, d);
        e.prototype._addLayer = function(a) {
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
        Object.defineProperty(e.prototype, "_backgroundVideoLayer", {get:function() {
          return this._layers[0];
        }, enumerable:!0, configurable:!0});
        e.prototype._createTarget = function(a) {
          return new r.Canvas2DSurfaceRegion(new r.Canvas2DSurface(a), new q.RegionAllocator.Region(0, 0, a.width, a.height), a.width, a.height);
        };
        e.prototype._onStageBoundsChanged = function(a) {
          var b = this._stage.getBounds(!0);
          b.snap();
          for (var d = this._devicePixelRatio = window.devicePixelRatio || 1, e = b.w / d + "px", d = b.h / d + "px", f = 0;f < this._layers.length;f++) {
            var g = this._layers[f];
            g.style.width = e;
            g.style.height = d;
          }
          a.width = b.w;
          a.height = b.h;
          a.style.position = "absolute";
          a.style.width = e;
          a.style.height = d;
          this._target = this._createTarget(a);
          this._fontSize = 10 * this._devicePixelRatio;
        };
        e._prepareSurfaceAllocators = function() {
          e._initializedCaches || (e._surfaceCache = new q.SurfaceRegionAllocator.SimpleAllocator(function(a, b) {
            var d = document.createElement("canvas");
            "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(d);
            var e = Math.max(1024, a), f = Math.max(1024, b);
            d.width = e;
            d.height = f;
            var g = null, g = 512 <= a || 512 <= b ? new q.RegionAllocator.GridAllocator(e, f, e, f) : new q.RegionAllocator.BucketAllocator(e, f);
            return new r.Canvas2DSurface(d, g);
          }), e._shapeCache = new q.SurfaceRegionAllocator.SimpleAllocator(function(a, b) {
            var d = document.createElement("canvas");
            "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(d);
            d.width = 1024;
            d.height = 1024;
            var e = e = new q.RegionAllocator.CompactAllocator(1024, 1024);
            return new r.Canvas2DSurface(d, e);
          }), e._initializedCaches = !0);
        };
        e.prototype.render = function() {
          var a = this._stage, b = this._target, d = this._options, e = this._viewport;
          b.reset();
          b.context.save();
          b.context.beginPath();
          b.context.rect(e.x, e.y, e.w, e.h);
          b.context.clip();
          this._renderStageToTarget(b, a, e);
          b.reset();
          d.paintViewport && (b.context.beginPath(), b.context.rect(e.x, e.y, e.w, e.h), b.context.strokeStyle = "#FF4981", b.context.lineWidth = 2, b.context.stroke());
          b.context.restore();
        };
        e.prototype.renderNode = function(a, b, d) {
          var e = new n(this._target);
          e.clip.set(b);
          e.flags = 256;
          e.matrix.set(d);
          a.visit(this, e);
          e.free();
        };
        e.prototype.renderNodeWithState = function(a, b) {
          a.visit(this, b);
        };
        e.prototype._renderWithCache = function(a, b) {
          var d = b.matrix, f = a.getBounds();
          if (f.isEmpty()) {
            return !1;
          }
          var g = this._options.cacheShapesMaxSize, h = Math.max(d.getAbsoluteScaleX(), d.getAbsoluteScaleY()), k = !!(b.flags & 16), n = !!(b.flags & 8);
          if (b.hasFlags(256)) {
            if (n || k || !b.colorMatrix.isIdentity() || a.hasFlags(1048576) || 100 < this._options.cacheShapesThreshold || f.w * h > g || f.h * h > g) {
              return !1;
            }
            (h = a.properties.mipMap) || (h = a.properties.mipMap = new p(this, a, e._shapeCache, g));
            k = h.getLevel(d);
            g = k.surfaceRegion;
            h = g.region;
            return k ? (k = b.target.context, k.imageSmoothingEnabled = k.mozImageSmoothingEnabled = !0, k.setTransform(d.a, d.b, d.c, d.d, d.tx, d.ty), k.drawImage(g.surface.canvas, h.x, h.y, h.w, h.h, f.x, f.y, f.w, f.h), !0) : !1;
          }
        };
        e.prototype._intersectsClipList = function(a, b) {
          var d = a.getBounds(!0), e = !1;
          b.matrix.transformRectangleAABB(d);
          b.clip.intersects(d) && (e = !0);
          var f = b.clipList;
          if (e && f.length) {
            for (var e = !1, g = 0;g < f.length;g++) {
              if (d.intersects(f[g])) {
                e = !0;
                break;
              }
            }
          }
          d.free();
          return e;
        };
        e.prototype.visitGroup = function(a, b) {
          this._frameInfo.groups++;
          a.getBounds();
          if ((!a.hasFlags(4) || b.flags & 4) && a.hasFlags(65536)) {
            var d = b.flags & 1;
            if (!d && ((1 !== a.getLayer().blendMode || a.getLayer().mask) && this._options.blending || a.getLayer().filters && this._options.filters)) {
              b = b.clone(), b.flags |= 1, this._renderLayer(a, b), b.free();
            } else {
              if (d && b.removeFlags(1), this._intersectsClipList(a, b)) {
                for (var d = null, e = a.getChildren(), f = 0;f < e.length;f++) {
                  var g = e[f], h = g.getTransform(), k = b.transform(h);
                  k.toggleFlags(4096, g.hasFlags(524288));
                  if (0 <= g.clip) {
                    d = d || new Uint8Array(e.length);
                    d[g.clip + f]++;
                    var n = k.clone();
                    n.flags |= 16;
                    n.beginClipPath(h.getMatrix());
                    g.visit(this, n);
                    n.applyClipPath();
                    n.free();
                  } else {
                    g.visit(this, k);
                  }
                  if (d && 0 < d[f]) {
                    for (;d[f]--;) {
                      b.closeClipPath();
                    }
                  }
                  k.free();
                }
              } else {
                this._frameInfo.culledNodes++;
              }
            }
            this._renderDebugInfo(a, b);
          }
        };
        e.prototype._renderDebugInfo = function(a, b) {
          if (b.flags & 1024) {
            var d = b.target.context, f = a.getBounds(!0), g = a.properties.style;
            g || (g = a.properties.style = h.Color.randomColor(.4).toCSSStyle());
            d.strokeStyle = g;
            b.matrix.transformRectangleAABB(f);
            d.setTransform(1, 0, 0, 1, 0, 0);
            f.free();
            f = a.getBounds();
            g = e._debugPoints;
            b.matrix.transformRectangle(f, g);
            d.lineWidth = 1;
            d.beginPath();
            d.moveTo(g[0].x, g[0].y);
            d.lineTo(g[1].x, g[1].y);
            d.lineTo(g[2].x, g[2].y);
            d.lineTo(g[3].x, g[3].y);
            d.lineTo(g[0].x, g[0].y);
            d.stroke();
          }
        };
        e.prototype.visitStage = function(a, b) {
          var d = b.target.context, e = a.getBounds(!0);
          b.matrix.transformRectangleAABB(e);
          e.intersect(b.clip);
          b.target.reset();
          b = b.clone();
          this._options.clear && b.target.clear(b.clip);
          a.hasFlags(32768) || !a.color || b.flags & 32 || (this._container.style.backgroundColor = a.color.toCSSStyle());
          this.visitGroup(a, b);
          a.dirtyRegion && (d.restore(), b.target.reset(), d.globalAlpha = .4, b.hasFlags(2048) && a.dirtyRegion.render(b.target.context), a.dirtyRegion.clear());
          b.free();
        };
        e.prototype.visitShape = function(a, b) {
          if (this._intersectsClipList(a, b)) {
            var d = b.matrix;
            b.flags & 8192 && (d = d.clone(), d.snap());
            var e = b.target.context;
            r.Filters._applyColorMatrix(e, b.colorMatrix);
            a.source instanceof q.RenderableVideo ? this.visitRenderableVideo(a.source, b) : 0 < e.globalAlpha && this.visitRenderable(a.source, b, a.ratio);
            b.flags & 8192 && d.free();
            r.Filters._removeFilter(e);
          }
        };
        e.prototype.visitRenderableVideo = function(a, b) {
          if (a.video && a.video.videoWidth) {
            var d = this._devicePixelRatio, e = b.matrix.clone();
            e.scale(1 / d, 1 / d);
            var d = a.getBounds(), f = h.GFX.Geometry.Matrix.createIdentity();
            f.scale(d.w / a.video.videoWidth, d.h / a.video.videoHeight);
            e.preMultiply(f);
            f.free();
            d = e.toCSSTransform();
            a.video.style.transformOrigin = "0 0";
            a.video.style.transform = d;
            var g = this._backgroundVideoLayer;
            g !== a.video.parentElement && (g.appendChild(a.video), a.addEventListener(2, function T(a) {
              g.removeChild(a.video);
              a.removeEventListener(2, T);
            }));
            e.free();
          }
        };
        e.prototype.visitRenderable = function(a, b, d) {
          var e = a.getBounds();
          if (!(b.flags & 32 || e.isEmpty())) {
            if (b.hasFlags(64)) {
              b.removeFlags(64);
            } else {
              if (this._renderWithCache(a, b)) {
                return;
              }
            }
            var f = b.matrix, e = b.target.context, g = !!(b.flags & 16), h = !!(b.flags & 8);
            e.setTransform(f.a, f.b, f.c, f.d, f.tx, f.ty);
            this._frameInfo.shapes++;
            e.imageSmoothingEnabled = e.mozImageSmoothingEnabled = b.hasFlags(4096);
            f = a.properties.renderCount || 0;
            a.properties.renderCount = ++f;
            a.render(e, d, null, g ? b.clipPath : null, h);
          }
        };
        e.prototype._renderLayer = function(a, b) {
          var d = a.getLayer(), e = d.mask;
          if (e) {
            this._renderWithMask(a, e, d.blendMode, !a.hasFlags(131072) || !e.hasFlags(131072), b);
          } else {
            var e = w.allocate(), f = this._renderToTemporarySurface(a, a.getLayerBounds(!!this._options.filters), b, e, b.target.surface);
            f && (b.target.draw(f, e.x, e.y, e.w, e.h, b.colorMatrix, this._options.blending ? d.blendMode : 1, this._options.filters ? d.filters : null, this._devicePixelRatio), f.free());
            e.free();
          }
        };
        e.prototype._renderWithMask = function(a, b, d, e, f) {
          var g = b.getTransform().getConcatenatedMatrix(!0);
          b.parent || (g = g.scale(this._devicePixelRatio, this._devicePixelRatio));
          var h = a.getBounds().clone();
          f.matrix.transformRectangleAABB(h);
          h.snap();
          if (!h.isEmpty()) {
            var k = b.getBounds().clone();
            g.transformRectangleAABB(k);
            k.snap();
            if (!k.isEmpty()) {
              var n = f.clip.clone();
              n.intersect(h);
              n.intersect(k);
              n.snap();
              n.isEmpty() || (h = f.clone(), h.clip.set(n), a = this._renderToTemporarySurface(a, a.getBounds(), h, w.createEmpty(), null), h.free(), k = f.clone(), k.clip.set(n), k.matrix = g, k.flags |= 4, e && (k.flags |= 8), b = this._renderToTemporarySurface(b, b.getBounds(), k, w.createEmpty(), a.surface), k.free(), a.draw(b, 0, 0, n.w, n.h, k.colorMatrix, 11, null, this._devicePixelRatio), f.target.draw(a, n.x, n.y, n.w, n.h, h.colorMatrix, d, null, this._devicePixelRatio), b.free(), a.free());
            }
          }
        };
        e.prototype._renderStageToTarget = function(b, d, e) {
          w.allocationCount = a.allocationCount = n.allocationCount = 0;
          b = new n(b);
          b.clip.set(e);
          this._options.paintRenderable || (b.flags |= 32);
          this._options.paintBounds && (b.flags |= 1024);
          this._options.paintDirtyRegion && (b.flags |= 2048);
          this._options.paintFlashing && (b.flags |= 512);
          this._options.cacheShapes && (b.flags |= 256);
          this._options.imageSmoothing && (b.flags |= 4096);
          this._options.snapToDevicePixels && (b.flags |= 8192);
          this._frameInfo.enter(b);
          d.visit(this, b);
          this._frameInfo.leave();
        };
        e.prototype._renderToTemporarySurface = function(a, b, d, e, f) {
          var g = d.matrix;
          b = b.clone();
          g.transformRectangleAABB(b);
          b.snap();
          e.set(b);
          e.intersect(d.clip);
          e.snap();
          if (e.isEmpty()) {
            return null;
          }
          f = this._allocateSurface(e.w, e.h, f);
          b = f.region;
          b = new w(b.x, b.y, e.w, e.h);
          f.context.setTransform(1, 0, 0, 1, 0, 0);
          f.clear();
          g = g.clone();
          g.translate(b.x - e.x, b.y - e.y);
          f.context.save();
          d = d.clone();
          d.target = f;
          d.matrix = g;
          d.clip.set(b);
          a.visit(this, d);
          d.free();
          f.context.restore();
          return f;
        };
        e.prototype._allocateSurface = function(a, b, d) {
          return e._surfaceCache.allocate(a, b, d);
        };
        e.prototype.screenShot = function(a, d, e) {
          d && (d = this._stage.content.groupChild.child, b(d instanceof q.Stage), a = d.content.getBounds(!0), d.content.getTransform().getConcatenatedMatrix().transformRectangleAABB(a), a.intersect(this._viewport));
          a || (a = new w(0, 0, this._target.w, this._target.h));
          d = a.w;
          var f = a.h, g = this._devicePixelRatio;
          e && (d /= g, f /= g, g = 1);
          e = document.createElement("canvas");
          e.width = d;
          e.height = f;
          var h = e.getContext("2d");
          h.fillStyle = this._container.style.backgroundColor;
          h.fillRect(0, 0, d, f);
          h.drawImage(this._target.context.canvas, a.x, a.y, a.w, a.h, 0, 0, d, f);
          return new q.ScreenShot(e.toDataURL("image/png"), d, f, g);
        };
        e._initializedCaches = !1;
        e._debugPoints = l.createEmptyPoints(4);
        return e;
      }(q.Renderer);
      r.Canvas2DRenderer = d;
    })(q.Canvas2D || (q.Canvas2D = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(q) {
    var r = q.Geometry.Point, b = q.Geometry.Matrix, w = q.Geometry.Rectangle, l = h.Tools.Mini.FPS, a = function() {
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
    q.UIState = a;
    var k = function(a) {
      function b() {
        a.apply(this, arguments);
        this._keyCodes = [];
      }
      __extends(b, a);
      b.prototype.onMouseDown = function(a, b) {
        b.altKey && (a.state = new g(a.worldView, a.getMousePosition(b, null), a.worldView.getTransform().getMatrix(!0)));
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
    }(a), t = function(a) {
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
          var f = a.getMousePosition(b, null), e = a.worldView.getTransform().getMatrix(!0), d = 1 + d / 1E3;
          e.translate(-f.x, -f.y);
          e.scale(d, d);
          e.translate(f.x, f.y);
          a.worldView.getTransform().setMatrix(e);
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
          var b = q.viewportLoupeDiameter.value, d = q.viewportLoupeDiameter.value;
          a.viewport = new w(this._mousePosition.x - b / 2, this._mousePosition.y - d / 2, b, d);
        } else {
          a.viewport = null;
        }
      };
      return b;
    }(a);
    (function(a) {
      function b() {
        a.apply(this, arguments);
        this._startTime = Date.now();
      }
      __extends(b, a);
      b.prototype.onMouseMove = function(a, b) {
        if (!(10 > Date.now() - this._startTime)) {
          var d = a._world;
          d && (a.state = new g(d, a.getMousePosition(b, null), d.getTransform().getMatrix(!0)));
        }
      };
      b.prototype.onMouseUp = function(a, b) {
        a.state = new k;
        a.selectNodeUnderMouse(b);
      };
      return b;
    })(a);
    var g = function(a) {
      function b(g, h, d) {
        a.call(this);
        this._target = g;
        this._startPosition = h;
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
        a.state = new k;
      };
      return b;
    }(a), a = function() {
      function a(b, g, p) {
        function d(a) {
          c._state.onMouseWheel(c, a);
          c._persistentState.onMouseWheel(c, a);
        }
        void 0 === g && (g = !1);
        void 0 === p && (p = void 0);
        this._state = new k;
        this._persistentState = new t;
        this.paused = !1;
        this.viewport = null;
        this._selectedNodes = [];
        this._isRendering = !1;
        this._rAF = void 0;
        this._eventListeners = Object.create(null);
        this._fullScreen = !1;
        this._container = b;
        this._stage = new q.Stage(512, 512, !0);
        this._worldView = this._stage.content;
        this._world = new q.Group;
        this._worldView.addChild(this._world);
        this._disableHiDPI = g;
        g = document.createElement("div");
        g.style.position = "absolute";
        g.style.width = "100%";
        g.style.height = "100%";
        g.style.zIndex = "0";
        b.appendChild(g);
        if (q.hud.value) {
          var f = document.createElement("div");
          f.style.position = "absolute";
          f.style.width = "100%";
          f.style.height = "100%";
          f.style.pointerEvents = "none";
          var e = document.createElement("div");
          e.style.position = "absolute";
          e.style.width = "100%";
          e.style.height = "20px";
          e.style.pointerEvents = "none";
          f.appendChild(e);
          b.appendChild(f);
          this._fps = new l(e);
        } else {
          this._fps = null;
        }
        this.transparent = f = 0 === p;
        void 0 === p || 0 === p || h.ColorUtilities.rgbaToCSSStyle(p);
        this._options = new q.Canvas2D.Canvas2DRendererOptions;
        this._options.alpha = f;
        this._renderer = new q.Canvas2D.Canvas2DRenderer(g, this._stage, this._options);
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
        b.addEventListener("mousedown", function(a) {
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
      a.prototype._listenForContainerSizeChanges = function() {
        var a = this._containerWidth, b = this._containerHeight;
        this._onContainerSizeChanged();
        var g = this;
        setInterval(function() {
          if (a !== g._containerWidth || b !== g._containerHeight) {
            g._onContainerSizeChanged(), a = g._containerWidth, b = g._containerHeight;
          }
        }, 10);
      };
      a.prototype._onContainerSizeChanged = function() {
        var a = this.getRatio(), g = Math.ceil(this._containerWidth * a), h = Math.ceil(this._containerHeight * a);
        this._stage.setBounds(new w(0, 0, g, h));
        this._stage.content.setBounds(new w(0, 0, g, h));
        this._worldView.getTransform().setMatrix(new b(a, 0, 0, a, 0, 0));
        this._dispatchEvent("resize");
      };
      a.prototype.addEventListener = function(a, b) {
        this._eventListeners[a] || (this._eventListeners[a] = []);
        this._eventListeners[a].push(b);
      };
      a.prototype._dispatchEvent = function(a) {
        if (a = this._eventListeners[a]) {
          for (var b = 0;b < a.length;b++) {
            a[b]();
          }
        }
      };
      a.prototype.startRendering = function() {
        if (!this._isRendering) {
          this._isRendering = !0;
          var a = this;
          this._rAF = requestAnimationFrame(function v() {
            a.render();
            a._rAF = requestAnimationFrame(v);
          });
        }
      };
      a.prototype.stopRendering = function() {
        this._isRendering && (this._isRendering = !1, cancelAnimationFrame(this._rAF));
      };
      Object.defineProperty(a.prototype, "state", {set:function(a) {
        this._state = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "cursor", {set:function(a) {
        this._container.style.cursor = a;
      }, enumerable:!0, configurable:!0});
      a.prototype._render = function() {
        q.RenderableVideo.checkForVideoUpdates();
        var a = (this._stage.readyToRender() || q.forcePaint.value) && !this.paused, b = 0;
        if (a) {
          var g = this._renderer;
          g.viewport = this.viewport ? this.viewport : this._stage.getBounds();
          this._dispatchEvent("render");
          b = performance.now();
          g.render();
          b = performance.now() - b;
        }
        this._fps && this._fps.tickAndRender(!a, b);
      };
      a.prototype.render = function() {
        this._render();
      };
      Object.defineProperty(a.prototype, "world", {get:function() {
        return this._world;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "worldView", {get:function() {
        return this._worldView;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "stage", {get:function() {
        return this._stage;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "options", {get:function() {
        return this._options;
      }, enumerable:!0, configurable:!0});
      a.prototype.getDisplayParameters = function() {
        return {stageWidth:this._containerWidth, stageHeight:this._containerHeight, pixelRatio:this.getRatio(), screenWidth:window.screen ? window.screen.width : 640, screenHeight:window.screen ? window.screen.height : 480};
      };
      a.prototype.toggleOption = function(a) {
        var b = this._options;
        b[a] = !b[a];
      };
      a.prototype.getOption = function(a) {
        return this._options[a];
      };
      a.prototype.getRatio = function() {
        var a = window.devicePixelRatio || 1, b = 1;
        1 === a || this._disableHiDPI || (b = a / 1);
        return b;
      };
      Object.defineProperty(a.prototype, "_containerWidth", {get:function() {
        return this._container.clientWidth;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "_containerHeight", {get:function() {
        return this._container.clientHeight;
      }, enumerable:!0, configurable:!0});
      a.prototype.queryNodeUnderMouse = function(a) {
        return this._world;
      };
      a.prototype.selectNodeUnderMouse = function(a) {
        (a = this._world) && this._selectedNodes.push(a);
        this._render();
      };
      a.prototype.getMousePosition = function(a, g) {
        var h = this._container, d = h.getBoundingClientRect(), f = this.getRatio(), h = new r(h.scrollWidth / d.width * (a.clientX - d.left) * f, h.scrollHeight / d.height * (a.clientY - d.top) * f);
        if (!g) {
          return h;
        }
        d = b.createIdentity();
        g.getTransform().getConcatenatedMatrix().inverse(d);
        d.transformPoint(h);
        return h;
      };
      a.prototype.getMouseWorldPosition = function(a) {
        return this.getMousePosition(a, this._world);
      };
      a.prototype._onMouseDown = function(a) {
      };
      a.prototype._onMouseUp = function(a) {
      };
      a.prototype._onMouseMove = function(a) {
      };
      a.prototype.screenShot = function(a, b, g) {
        return this._renderer.screenShot(a, b, g);
      };
      return a;
    }();
    q.Easel = a;
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(q) {
    var r = h.GFX.Geometry.Matrix;
    (function(b) {
      b[b.Simple = 0] = "Simple";
    })(q.Layout || (q.Layout = {}));
    var b = function(b) {
      function a() {
        b.apply(this, arguments);
        this.layout = 0;
      }
      __extends(a, b);
      return a;
    }(q.RendererOptions);
    q.TreeRendererOptions = b;
    var w = function(h) {
      function a(a, q, g) {
        void 0 === g && (g = new b);
        h.call(this, a, q, g);
        this._canvas = document.createElement("canvas");
        this._container.appendChild(this._canvas);
        this._context = this._canvas.getContext("2d");
        this._listenForContainerSizeChanges();
      }
      __extends(a, h);
      a.prototype._listenForContainerSizeChanges = function() {
        var a = this._containerWidth, b = this._containerHeight;
        this._onContainerSizeChanged();
        var g = this;
        setInterval(function() {
          if (a !== g._containerWidth || b !== g._containerHeight) {
            g._onContainerSizeChanged(), a = g._containerWidth, b = g._containerHeight;
          }
        }, 10);
      };
      a.prototype._getRatio = function() {
        var a = window.devicePixelRatio || 1, b = 1;
        1 !== a && (b = a / 1);
        return b;
      };
      a.prototype._onContainerSizeChanged = function() {
        var a = this._getRatio(), b = Math.ceil(this._containerWidth * a), g = Math.ceil(this._containerHeight * a), h = this._canvas;
        0 < a ? (h.width = b * a, h.height = g * a, h.style.width = b + "px", h.style.height = g + "px") : (h.width = b, h.height = g);
      };
      Object.defineProperty(a.prototype, "_containerWidth", {get:function() {
        return this._container.clientWidth;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "_containerHeight", {get:function() {
        return this._container.clientHeight;
      }, enumerable:!0, configurable:!0});
      a.prototype.render = function() {
        var a = this._context;
        a.save();
        a.clearRect(0, 0, this._canvas.width, this._canvas.height);
        a.scale(1, 1);
        0 === this._options.layout && this._renderNodeSimple(this._context, this._stage, r.createIdentity());
        a.restore();
      };
      a.prototype._renderNodeSimple = function(a, b, g) {
        function h(b) {
          var c = b.getChildren();
          a.fillStyle = b.hasFlags(16) ? "red" : "white";
          var g = String(b.id);
          b instanceof q.RenderableText ? g = "T" + g : b instanceof q.RenderableShape ? g = "S" + g : b instanceof q.RenderableBitmap ? g = "B" + g : b instanceof q.RenderableVideo && (g = "V" + g);
          b instanceof q.Renderable && (g = g + " [" + b._parents.length + "]");
          b = a.measureText(g).width;
          a.fillText(g, n, r);
          if (c) {
            n += b + 4;
            f = Math.max(f, n + 20);
            for (g = 0;g < c.length;g++) {
              h(c[g]), g < c.length - 1 && (r += 18, r > l._canvas.height && (a.fillStyle = "gray", n = n - d + f + 8, d = f + 8, r = 0, a.fillStyle = "white"));
            }
            n -= b + 4;
          }
        }
        var l = this;
        a.save();
        a.font = "16px Arial";
        a.fillStyle = "white";
        var n = 0, r = 0, d = 0, f = 0;
        h(b);
        a.restore();
      };
      return a;
    }(q.Renderer);
    q.TreeRenderer = w;
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(q) {
    (function(r) {
      var b = h.GFX.BlurFilter, w = h.GFX.DropshadowFilter, l = h.GFX.Shape, a = h.GFX.Group, k = h.GFX.RenderableShape, t = h.GFX.RenderableMorphShape, g = h.GFX.RenderableBitmap, p = h.GFX.RenderableVideo, u = h.GFX.RenderableText, n = h.GFX.ColorMatrix, v = h.ShapeData, d = h.ArrayUtilities.DataBuffer, f = h.GFX.Stage, e = h.GFX.Geometry.Matrix, c = h.GFX.Geometry.Rectangle, m = function() {
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
      r.GFXChannelSerializer = m;
      m = function() {
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
          d && this.stage.setFlags(32768);
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
          this._registerAsset(a, 0, new p(a, this));
        };
        a.prototype._decodeImage = function(a, b, d, e) {
          var f = new Image, k = g.FromImage(f, -1, -1);
          f.src = URL.createObjectURL(new Blob([b], {type:h.getMIMETypeForImageType(a)}));
          f.onload = function() {
            k.setBounds(new c(0, 0, f.width, f.height));
            d && k.mask(d);
            k.invalidate();
            e({width:f.width, height:f.height});
          };
          f.onerror = function() {
            e(null);
          };
          return k;
        };
        a.prototype.sendVideoPlaybackEvent = function(a, b, c) {
          this._easelHost.sendVideoPlaybackEvent(a, b, c);
        };
        return a;
      }();
      r.GFXChannelDeserializerContext = m;
      m = function() {
        function f() {
        }
        f.prototype.read = function() {
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
        f.prototype._readMatrix = function() {
          var a = this.input, b = f._temporaryReadMatrix;
          b.setElements(a.readFloat(), a.readFloat(), a.readFloat(), a.readFloat(), a.readFloat() / 20, a.readFloat() / 20);
          return b;
        };
        f.prototype._readRectangle = function() {
          var a = this.input, b = f._temporaryReadRectangle;
          b.setElements(a.readInt() / 20, a.readInt() / 20, a.readInt() / 20, a.readInt() / 20);
          return b;
        };
        f.prototype._readColorMatrix = function() {
          var a = this.input, b = f._temporaryReadColorMatrix, c = 1, d = 1, e = 1, g = 1, h = 0, k = 0, l = 0, m = 0;
          switch(a.readInt()) {
            case 0:
              return f._temporaryReadColorMatrixIdentity;
            case 1:
              g = a.readFloat();
              break;
            case 2:
              c = a.readFloat(), d = a.readFloat(), e = a.readFloat(), g = a.readFloat(), h = a.readInt(), k = a.readInt(), l = a.readInt(), m = a.readInt();
          }
          b.setMultipliersAndOffsets(c, d, e, g, h, k, l, m);
          return b;
        };
        f.prototype._readAsset = function() {
          var a = this.input.readInt(), b = this.inputAssets[a];
          this.inputAssets[a] = null;
          return b;
        };
        f.prototype._readUpdateGraphics = function() {
          for (var a = this.input, b = this.context, c = a.readInt(), d = a.readInt(), e = b._getAsset(c), f = this._readRectangle(), g = v.FromPlainObject(this._readAsset()), h = a.readInt(), l = [], m = 0;m < h;m++) {
            var p = a.readInt();
            l.push(b._getBitmapAsset(p));
          }
          if (e) {
            e.update(g, l, f);
          } else {
            a = g.morphCoordinates ? new t(c, g, l, f) : new k(c, g, l, f);
            for (m = 0;m < l.length;m++) {
              l[m] && l[m].addRenderableParent(a);
            }
            b._registerAsset(c, d, a);
          }
        };
        f.prototype._readUpdateBitmapData = function() {
          var a = this.input, b = this.context, c = a.readInt(), e = a.readInt(), f = b._getBitmapAsset(c), h = this._readRectangle(), a = a.readInt(), k = d.FromPlainObject(this._readAsset());
          f ? f.updateFromDataBuffer(a, k) : (f = g.FromDataBuffer(a, k, h), b._registerAsset(c, e, f));
        };
        f.prototype._readUpdateTextContent = function() {
          var a = this.input, b = this.context, c = a.readInt(), e = a.readInt(), f = b._getTextAsset(c), g = this._readRectangle(), h = this._readMatrix(), k = a.readInt(), l = a.readInt(), m = a.readInt(), p = a.readBoolean(), n = a.readInt(), q = a.readInt(), t = this._readAsset(), r = d.FromPlainObject(this._readAsset()), v = null, w = a.readInt();
          w && (v = new d(4 * w), a.readBytes(v, 0, 4 * w));
          f ? (f.setBounds(g), f.setContent(t, r, h, v), f.setStyle(k, l, n, q), f.reflow(m, p)) : (f = new u(g), f.setContent(t, r, h, v), f.setStyle(k, l, n, q), f.reflow(m, p), b._registerAsset(c, e, f));
          if (this.output) {
            for (a = f.textRect, this.output.writeInt(20 * a.w), this.output.writeInt(20 * a.h), this.output.writeInt(20 * a.x), f = f.lines, a = f.length, this.output.writeInt(a), b = 0;b < a;b++) {
              this._writeLineMetrics(f[b]);
            }
          }
        };
        f.prototype._writeLineMetrics = function(a) {
          this.output.writeInt(a.x);
          this.output.writeInt(a.width);
          this.output.writeInt(a.ascent);
          this.output.writeInt(a.descent);
          this.output.writeInt(a.leading);
        };
        f.prototype._readUpdateStage = function() {
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
        f.prototype._readUpdateNetStream = function() {
          var a = this.context, b = this.input.readInt(), c = a._getVideoAsset(b), d = this._readRectangle();
          c || (a.registerVideo(b), c = a._getVideoAsset(b));
          c.setBounds(d);
        };
        f.prototype._readFilters = function(a) {
          var c = this.input, d = c.readInt(), e = [];
          if (d) {
            for (var f = 0;f < d;f++) {
              var g = c.readInt();
              switch(g) {
                case 0:
                  e.push(new b(c.readFloat(), c.readFloat(), c.readInt()));
                  break;
                case 1:
                  e.push(new w(c.readFloat(), c.readFloat(), c.readFloat(), c.readFloat(), c.readInt(), c.readFloat(), c.readBoolean(), c.readBoolean(), c.readBoolean(), c.readInt(), c.readFloat()));
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
                  e.push(new n(g));
                  break;
                default:
                  h.Debug.somewhatImplemented(q.FilterType[g]);
              }
            }
            a.getLayer().filters = e;
          }
        };
        f.prototype._readUpdateFrame = function() {
          var b = this.input, c = this.context, d = b.readInt(), e = 0, f = c._nodes[d];
          f || (f = c._nodes[d] = new a);
          d = b.readInt();
          d & 1 && f.getTransform().setMatrix(this._readMatrix());
          d & 8 && f.getTransform().setColorMatrix(this._readColorMatrix());
          if (d & 64) {
            var g = b.readInt();
            f.getLayer().mask = 0 <= g ? c._makeNode(g) : null;
          }
          d & 128 && (f.clip = b.readInt());
          d & 32 && (e = b.readInt() / 65535, g = b.readInt(), 1 !== g && (f.getLayer().blendMode = g), this._readFilters(f), f.toggleFlags(65536, b.readBoolean()), f.toggleFlags(131072, b.readBoolean()), f.toggleFlags(262144, !!b.readInt()), f.toggleFlags(524288, !!b.readInt()));
          if (d & 4) {
            d = b.readInt();
            g = f;
            g.clearChildren();
            for (var h = 0;h < d;h++) {
              var k = b.readInt(), k = c._makeNode(k);
              g.addChild(k);
            }
          }
          e && (k = f.getChildren()[0], k instanceof l && (k.ratio = e));
        };
        f.prototype._readDrawToBitmap = function() {
          var a = this.input, b = this.context, c = a.readInt(), d = a.readInt(), f = a.readInt(), h, k, l;
          h = f & 1 ? this._readMatrix().clone() : e.createIdentity();
          f & 8 && (k = this._readColorMatrix());
          f & 16 && (l = this._readRectangle());
          f = a.readInt();
          a.readBoolean();
          a = b._getBitmapAsset(c);
          d = b._makeNode(d);
          a ? a.drawNode(d, h, k, f, l) : b._registerAsset(c, -1, g.FromNode(d, h, k, f, l));
        };
        f.prototype._readRequestBitmapData = function() {
          var a = this.output, b = this.context, c = this.input.readInt();
          b._getBitmapAsset(c).readImageData(a);
        };
        f._temporaryReadMatrix = e.createIdentity();
        f._temporaryReadRectangle = c.createEmpty();
        f._temporaryReadColorMatrix = n.createIdentity();
        f._temporaryReadColorMatrixIdentity = n.createIdentity();
        return f;
      }();
      r.GFXChannelDeserializer = m;
    })(q.GFX || (q.GFX = {}));
  })(h.Remoting || (h.Remoting = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(q) {
    var r = h.GFX.Geometry.Point, b = h.ArrayUtilities.DataBuffer;
    q.ContextMenuButton = 2;
    var w = function() {
      function l(a) {
        this._easel = a;
        var b = a.transparent;
        this._group = a.world;
        this._content = null;
        this._fullscreen = !1;
        this._context = new h.Remoting.GFX.GFXChannelDeserializerContext(this, this._group, b);
        this._addEventListeners();
      }
      l.prototype.onSendUpdates = function(a, b) {
        throw Error("This method is abstract");
      };
      Object.defineProperty(l.prototype, "easel", {get:function() {
        return this._easel;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(l.prototype, "stage", {get:function() {
        return this._easel.stage;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(l.prototype, "content", {set:function(a) {
        this._content = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(l.prototype, "cursor", {set:function(a) {
        this._easel.cursor = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(l.prototype, "fullscreen", {set:function(a) {
        this._fullscreen !== a && (this._fullscreen = a, "undefined" !== typeof ShumwayCom && ShumwayCom.setFullscreen && ShumwayCom.setFullscreen(a));
      }, enumerable:!0, configurable:!0});
      l.prototype._mouseEventListener = function(a) {
        if (a.button !== q.ContextMenuButton) {
          var k = this._easel.getMousePosition(a, this._content), k = new r(k.x, k.y), l = new b, g = new h.Remoting.GFX.GFXChannelSerializer;
          g.output = l;
          g.writeMouseEvent(a, k);
          this.onSendUpdates(l, []);
        }
      };
      l.prototype._keyboardEventListener = function(a) {
        var k = new b, l = new h.Remoting.GFX.GFXChannelSerializer;
        l.output = k;
        l.writeKeyboardEvent(a);
        this.onSendUpdates(k, []);
      };
      l.prototype._addEventListeners = function() {
        for (var a = this._mouseEventListener.bind(this), b = this._keyboardEventListener.bind(this), h = l._mouseEvents, g = 0;g < h.length;g++) {
          window.addEventListener(h[g], a);
        }
        a = l._keyboardEvents;
        for (g = 0;g < a.length;g++) {
          window.addEventListener(a[g], b);
        }
        this._addFocusEventListeners();
        this._easel.addEventListener("resize", this._resizeEventListener.bind(this));
      };
      l.prototype._sendFocusEvent = function(a) {
        var k = new b, l = new h.Remoting.GFX.GFXChannelSerializer;
        l.output = k;
        l.writeFocusEvent(a);
        this.onSendUpdates(k, []);
      };
      l.prototype._addFocusEventListeners = function() {
        var a = this;
        document.addEventListener("visibilitychange", function(b) {
          a._sendFocusEvent(document.hidden ? 0 : 1);
        });
        window.addEventListener("focus", function(b) {
          a._sendFocusEvent(3);
        });
        window.addEventListener("blur", function(b) {
          a._sendFocusEvent(2);
        });
      };
      l.prototype._resizeEventListener = function() {
        this.onDisplayParameters(this._easel.getDisplayParameters());
      };
      l.prototype.onDisplayParameters = function(a) {
        throw Error("This method is abstract");
      };
      l.prototype.processUpdates = function(a, b, l) {
        void 0 === l && (l = null);
        var g = new h.Remoting.GFX.GFXChannelDeserializer;
        g.input = a;
        g.inputAssets = b;
        g.output = l;
        g.context = this._context;
        g.read();
      };
      l.prototype.processVideoControl = function(a, b, h) {
        var g = this._context, l = g._getVideoAsset(a);
        if (!l) {
          if (1 !== b) {
            return;
          }
          g.registerVideo(a);
          l = g._getVideoAsset(a);
        }
        return l.processControlRequest(b, h);
      };
      l.prototype.processRegisterFont = function(a, b, h) {
        this._context.registerFont(a, b, h);
      };
      l.prototype.processRegisterImage = function(a, b, h, g, l, q) {
        this._context.registerImage(a, b, h, g, l, q);
      };
      l.prototype.processFSCommand = function(a, b) {
        arguments.length;
      };
      l.prototype.processFrame = function() {
        arguments.length;
      };
      l.prototype.onVideoPlaybackEvent = function(a, b, h) {
        throw Error("This method is abstract");
      };
      l.prototype.sendVideoPlaybackEvent = function(a, b, h) {
        this.onVideoPlaybackEvent(a, b, h);
      };
      l._mouseEvents = h.Remoting.MouseEventNames;
      l._keyboardEvents = h.Remoting.KeyboardEventNames;
      return l;
    }();
    q.EaselHost = w;
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(q) {
    (function(r) {
      var b = h.ArrayUtilities.DataBuffer, w = function(h) {
        function a(a, b) {
          h.call(this, a);
          this._peer = b;
          this._peer.onSyncMessage = function(a) {
            return this._onWindowMessage(a, !1);
          }.bind(this);
          this._peer.onAsyncMessage = function(a) {
            this._onWindowMessage(a, !0);
          }.bind(this);
        }
        __extends(a, h);
        a.prototype.onSendUpdates = function(a, b) {
          var g = a.getBytes();
          this._peer.postAsyncMessage({type:"gfx", updates:g, assets:b}, [g.buffer]);
        };
        a.prototype.onDisplayParameters = function(a) {
          this._peer.postAsyncMessage({type:"displayParameters", params:a});
        };
        a.prototype.onVideoPlaybackEvent = function(a, b, g) {
          this._peer.postAsyncMessage({type:"videoPlayback", id:a, eventType:b, data:g});
        };
        a.prototype._sendRegisterFontResponse = function(a, b) {
          this._peer.postAsyncMessage({type:"registerFontResponse", requestId:a, result:b});
        };
        a.prototype._sendRegisterImageResponse = function(a, b) {
          this._peer.postAsyncMessage({type:"registerImageResponse", requestId:a, result:b});
        };
        a.prototype._onWindowMessage = function(a, h) {
          var g;
          if ("object" === typeof a && null !== a) {
            if ("player" === a.type) {
              var l = b.FromArrayBuffer(a.updates.buffer);
              h ? this.processUpdates(l, a.assets) : (g = new b, this.processUpdates(l, a.assets, g), g = g.toPlainObject());
            } else {
              "frame" === a.type ? this.processFrame() : "videoControl" === a.type ? g = this.processVideoControl(a.id, a.eventType, a.data) : "registerFont" === a.type ? this.processRegisterFont(a.syncId, a.data, this._sendRegisterFontResponse.bind(this, a.requestId)) : "registerImage" === a.type ? this.processRegisterImage(a.syncId, a.symbolId, a.imageType, a.data, a.alphaData, this._sendRegisterImageResponse.bind(this, a.requestId)) : "fscommand" === a.type && this.processFSCommand(a.command, 
              a.args);
            }
          }
          return g;
        };
        return a;
      }(q.EaselHost);
      r.WindowEaselHost = w;
    })(q.Window || (q.Window = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(q) {
    (function(q) {
      function b(a, b) {
        a.writeInt(b.length);
        a.writeRawBytes(b);
      }
      function w(a, b) {
        return "byteLength" in a && "buffer" in a && (a.constructor && a.constructor.name) === b;
      }
      function l(a) {
        return "byteLength" in a && "ArrayBuffer" === (a.constructor && a.constructor.name);
      }
      function a(a) {
        function f(a) {
          switch(typeof a) {
            case "undefined":
              e.writeByte(0);
              break;
            case "boolean":
              e.writeByte(a ? 2 : 3);
              break;
            case "number":
              e.writeByte(4);
              e.writeDouble(a);
              break;
            case "string":
              e.writeByte(5);
              e.writeUTF(a);
              break;
            default:
              if (null === a) {
                e.writeByte(1);
                break;
              }
              if (Array.isArray(a)) {
                e.writeByte(6);
                e.writeInt(a.length);
                for (var d = 0;d < a.length;d++) {
                  f(a[d]);
                }
              } else {
                if (w(a, "Uint8Array")) {
                  e.writeByte(9), b(e, a);
                } else {
                  if ("length" in a && "buffer" in a && "littleEndian" in a) {
                    e.writeByte(a.littleEndian ? 10 : 11), b(e, new Uint8Array(a.buffer, 0, a.length));
                  } else {
                    if (l(a)) {
                      e.writeByte(8), b(e, new Uint8Array(a));
                    } else {
                      if (w(a, "Int32Array")) {
                        e.writeByte(12), b(e, new Uint8Array(a.buffer, a.byteOffset, a.byteLength));
                      } else {
                        if (!h.isNullOrUndefined(a.buffer) && l(a.buffer) && "number" === typeof a.byteOffset) {
                          throw Error("Some unsupported TypedArray is used");
                        }
                        e.writeByte(7);
                        for (d in a) {
                          e.writeUTF(d), f(a[d]);
                        }
                        e.writeUTF("");
                      }
                    }
                  }
                }
              }
            ;
          }
        }
        var e = new p;
        f(a);
        return e.getBytes();
      }
      function k(a) {
        var b = new p, e = a.readInt();
        a.readBytes(b, 0, e);
        return b.getBytes();
      }
      function t(a) {
        var b = new p, e = a.readInt();
        a.readBytes(b, 0, e);
        return g(b);
      }
      function g(a) {
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
            for (var b = [], e = a.readInt(), c = 0;c < e;c++) {
              b[c] = g(a);
            }
            return b;
          case 7:
            for (b = {};e = a.readUTF();) {
              b[e] = g(a);
            }
            return b;
          case 8:
            return k(a).buffer;
          case 9:
            return k(a);
          case 11:
          ;
          case 10:
            return a = k(a), new u(a.buffer, a.length, 10 === b);
          case 12:
            return new Int32Array(k(a).buffer);
        }
      }
      var p = h.ArrayUtilities.DataBuffer, u = h.ArrayUtilities.PlainObjectDataBuffer, n;
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
      })(n || (n = {}));
      (function(a) {
        a[a.None = 0] = "None";
        a[a.PlayerCommand = 1] = "PlayerCommand";
        a[a.PlayerCommandAsync = 2] = "PlayerCommandAsync";
        a[a.Frame = 3] = "Frame";
        a[a.Font = 4] = "Font";
        a[a.Image = 5] = "Image";
        a[a.FSCommand = 6] = "FSCommand";
      })(q.MovieRecordType || (q.MovieRecordType = {}));
      n = function() {
        function d(a) {
          this._maxRecordingSize = a;
          this._recording = new p;
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
        d.prototype.recordPlayerCommand = function(d, e, c) {
          var g = new p;
          b(g, e);
          g.writeInt(c.length);
          c.forEach(function(c) {
            c = a(c);
            b(g, c);
          });
          this._createRecord(d ? 2 : 1, g);
        };
        d.prototype.recordFrame = function() {
          this._createRecord(3, null);
        };
        d.prototype.recordFont = function(d, e) {
          var c = new p;
          c.writeInt(d);
          b(c, a(e));
          this._createRecord(4, c);
        };
        d.prototype.recordImage = function(d, e, c, g, h) {
          var k = new p;
          k.writeInt(d);
          k.writeInt(e);
          k.writeInt(c);
          b(k, a(g));
          b(k, a(h));
          this._createRecord(5, k);
        };
        d.prototype.recordFSCommand = function(a, b) {
          var c = new p;
          c.writeUTF(a);
          c.writeUTF(b || "");
          this._createRecord(6, c);
        };
        return d;
      }();
      q.MovieRecorder = n;
      var v = function() {
        function a(b) {
          this._buffer = new p;
          this._buffer.writeRawBytes(b);
          this._buffer.position = 4;
        }
        a.prototype.readNextRecord = function() {
          if (this._buffer.position >= this._buffer.length) {
            return 0;
          }
          var a = this._buffer.readInt(), b = this._buffer.readInt(), c = this._buffer.readInt(), d = null;
          0 < c && (d = new p, this._buffer.readBytes(d, 0, c));
          this.currentTimestamp = a;
          this.currentType = b;
          this.currentData = d;
          return b;
        };
        a.prototype.parsePlayerCommand = function() {
          for (var a = k(this.currentData), b = this.currentData.readInt(), c = [], d = 0;d < b;d++) {
            c.push(t(this.currentData));
          }
          return {updates:a, assets:c};
        };
        a.prototype.parseFSCommand = function() {
          var a = this.currentData.readUTF(), b = this.currentData.readUTF();
          return {command:a, args:b};
        };
        a.prototype.parseFont = function() {
          var a = this.currentData.readInt(), b = t(this.currentData);
          return {syncId:a, data:b};
        };
        a.prototype.parseImage = function() {
          var a = this.currentData.readInt(), b = this.currentData.readInt(), c = this.currentData.readInt(), d = t(this.currentData);
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
      q.MovieRecordParser = v;
    })(q.Test || (q.Test = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(q) {
    (function(r) {
      var b = h.ArrayUtilities.DataBuffer, w = function(h) {
        function a(a) {
          h.call(this, a);
          this.alwaysRenderFrame = this.ignoreTimestamps = !1;
          this.cpuTimeRendering = this.cpuTimeUpdates = 0;
          this.onComplete = null;
        }
        __extends(a, h);
        Object.defineProperty(a.prototype, "cpuTime", {get:function() {
          return this.cpuTimeUpdates + this.cpuTimeRendering;
        }, enumerable:!0, configurable:!0});
        a.prototype.playUrl = function(a) {
          var b = new XMLHttpRequest;
          b.open("GET", a, !0);
          b.responseType = "arraybuffer";
          b.onload = function() {
            this.playBytes(new Uint8Array(b.response));
          }.bind(this);
          b.send();
        };
        a.prototype.playBytes = function(a) {
          this._parser = new r.MovieRecordParser(a);
          this._lastTimestamp = 0;
          this._parseNext();
        };
        a.prototype.onSendUpdates = function(a, b) {
        };
        a.prototype.onDisplayParameters = function(a) {
        };
        a.prototype.onVideoPlaybackEvent = function(a, b, g) {
        };
        a.prototype._parseNext = function() {
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
        a.prototype._runRecord = function() {
          var a, h = performance.now();
          switch(this._parser.currentType) {
            case 1:
            ;
            case 2:
              a = this._parser.parsePlayerCommand();
              var g = 2 === this._parser.currentType, l = b.FromArrayBuffer(a.updates.buffer);
              g ? this.processUpdates(l, a.assets) : (g = new b, this.processUpdates(l, a.assets, g));
              break;
            case 3:
              this.processFrame();
              break;
            case 4:
              a = this._parser.parseFont();
              this.processRegisterFont(a.syncId, a.data, function() {
              });
              break;
            case 5:
              a = this._parser.parseImage();
              this.processRegisterImage(a.syncId, a.symbolId, a.imageType, a.data, a.alphaData, function() {
              });
              break;
            case 6:
              a = this._parser.parseFSCommand();
              this.processFSCommand(a.command, a.args);
              break;
            default:
              throw Error("Invalid movie record type");;
          }
          this.cpuTimeUpdates += performance.now() - h;
          3 === this._parser.currentType && this.alwaysRenderFrame ? requestAnimationFrame(this._renderFrameJustAfterRAF.bind(this)) : this._parseNext();
        };
        a.prototype._renderFrameJustAfterRAF = function() {
          var a = performance.now();
          this.easel.render();
          this.cpuTimeRendering += performance.now() - a;
          this._parseNext();
        };
        return a;
      }(q.EaselHost);
      r.PlaybackEaselHost = w;
    })(q.Test || (q.Test = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(q) {
    (function(q) {
      var b = function(b) {
        function h(a, k, l) {
          void 0 === l && (l = 0);
          b.call(this, a, k);
          this._recorder = null;
          this._recorder = new q.MovieRecorder(l);
        }
        __extends(h, b);
        Object.defineProperty(h.prototype, "recorder", {get:function() {
          return this._recorder;
        }, enumerable:!0, configurable:!0});
        h.prototype._onWindowMessage = function(a, h) {
          switch(a.type) {
            case "player":
              this._recorder.recordPlayerCommand(h, a.updates, a.assets);
              break;
            case "frame":
              this._recorder.recordFrame();
              break;
            case "registerFont":
              this._recorder.recordFont(a.syncId, a.data);
              break;
            case "registerImage":
              this._recorder.recordImage(a.syncId, a.symbolId, a.imageType, a.data, a.alphaData);
              break;
            case "fscommand":
              this._recorder.recordFSCommand(a.command, a.args);
          }
          return b.prototype._onWindowMessage.call(this, a, h);
        };
        return h;
      }(h.GFX.Window.WindowEaselHost);
      q.RecordingEaselHost = b;
    })(q.Test || (q.Test = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
console.timeEnd("Load GFX Dependencies");

