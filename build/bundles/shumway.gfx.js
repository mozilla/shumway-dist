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
Shumway$$inline_0.version = "0.11.261";
Shumway$$inline_0.build = "6d03d1e";
var jsGlobal = function() {
  return this || (0,eval)("this//# sourceURL=jsGlobal-getter");
}(), inBrowser = "undefined" !== typeof window && "document" in window && "plugins" in window.document, inFirefox = "undefined" !== typeof navigator && 0 <= navigator.userAgent.indexOf("Firefox");
jsGlobal.performance || (jsGlobal.performance = {});
jsGlobal.performance.now || (jsGlobal.performance.now = function() {
  return Date.now();
});
function lazyInitializer(l, n, g) {
  Object.defineProperty(l, n, {get:function() {
    var b = g();
    Object.defineProperty(l, n, {value:b, configurable:!0, enumerable:!0});
    return b;
  }, configurable:!0, enumerable:!0});
}
var START_TIME = performance.now();
(function(l) {
  function n(d) {
    return (d | 0) === d;
  }
  function g(d) {
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
    if (e > l.UINT32_CHAR_BUFFER_LENGTH) {
      return !1;
    }
    var c = 0, f = d.charCodeAt(c++) - 48;
    if (1 > f || 9 < f) {
      return !1;
    }
    for (var m = 0, x = 0;c < e;) {
      x = d.charCodeAt(c++) - 48;
      if (0 > x || 9 < x) {
        return !1;
      }
      m = f;
      f = 10 * f + x;
    }
    return m < l.UINT32_MAX_DIV_10 || m === l.UINT32_MAX_DIV_10 && x <= l.UINT32_MAX_MOD_10 ? !0 : !1;
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
  })(l.CharacterCodes || (l.CharacterCodes = {}));
  l.UINT32_CHAR_BUFFER_LENGTH = 10;
  l.UINT32_MAX = 4294967295;
  l.UINT32_MAX_DIV_10 = 429496729;
  l.UINT32_MAX_MOD_10 = 5;
  l.isString = function(d) {
    return "string" === typeof d;
  };
  l.isFunction = function(d) {
    return "function" === typeof d;
  };
  l.isNumber = function(d) {
    return "number" === typeof d;
  };
  l.isInteger = n;
  l.isArray = function(d) {
    return d instanceof Array;
  };
  l.isNumberOrString = function(d) {
    return "number" === typeof d || "string" === typeof d;
  };
  l.isObject = g;
  l.toNumber = function(d) {
    return +d;
  };
  l.isNumericString = b;
  l.isNumeric = function(d) {
    if ("number" === typeof d) {
      return !0;
    }
    if ("string" === typeof d) {
      var f = d.charCodeAt(0);
      return 65 <= f && 90 >= f || 97 <= f && 122 >= f || 36 === f || 95 === f ? !1 : w(d) || b(d);
    }
    return !1;
  };
  l.isIndex = w;
  l.isNullOrUndefined = function(d) {
    return void 0 == d;
  };
  l.argumentsToString = function(d) {
    for (var f = [], e = 0;e < d.length;e++) {
      var c = d[e];
      try {
        var m;
        m = "object" === typeof c && c ? "toString" in c ? c.toString() : Object.prototype.toString.call(c) : c + "";
        f.push(m);
      } catch (x) {
        f.push("<unprintable value>");
      }
    }
    return f.join(", ");
  };
  var t;
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
  })(t = l.Debug || (l.Debug = {}));
  l.getTicks = function() {
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
        c = new c.constructor(l.IntegerUtilities.nearestPowerOfTwo(m));
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
      c.prototype.ensureAdditionalCapacity = function() {
        this.ensureCapacity(this._offset + 68);
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
        var h = this._offset >> 2;
        this._f32[h + 0] = c;
        this._f32[h + 1] = e;
        this._f32[h + 2] = f;
        this._f32[h + 3] = d;
        this._f32[h + 4] = a;
        this._f32[h + 5] = k;
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
  })(l.ArrayUtilities || (l.ArrayUtilities = {}));
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
  l.ArrayReader = a;
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
      return void 0 == c || g(c) ? c : Object(c);
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
    d.getOwnGetter = function(c, e) {
      var f = Object.getOwnPropertyDescriptor(c, e);
      return f ? f.get : null;
    };
    d.hasOwnSetter = function(c, e) {
      var f = Object.getOwnPropertyDescriptor(c, e);
      return !(!f || !f.set);
    };
    d.createMap = function() {
      return Object.create(null);
    };
    d.createArrayMap = function() {
      return [];
    };
    d.defineReadOnlyProperty = function(c, e, f) {
      Object.defineProperty(c, e, {value:f, writable:!1, configurable:!0, enumerable:!1});
    };
    d.getOwnPropertyDescriptors = function(c) {
      for (var e = d.createMap(), f = Object.getOwnPropertyNames(c), F = 0;F < f.length;F++) {
        e[f[F]] = Object.getOwnPropertyDescriptor(c, f[F]);
      }
      return e;
    };
    d.cloneObject = function(c) {
      var m = Object.create(Object.getPrototypeOf(c));
      e(m, c);
      return m;
    };
    d.copyProperties = function(c, e) {
      for (var f in e) {
        c[f] = e[f];
      }
    };
    d.copyOwnProperties = e;
    d.copyOwnPropertyDescriptors = function(c, e, d, F, a) {
      void 0 === d && (d = null);
      void 0 === F && (F = !0);
      void 0 === a && (a = !1);
      for (var k in e) {
        if (f(e, k) && (!d || d(k))) {
          var h = Object.getOwnPropertyDescriptor(e, k);
          if (F || !f(c, k)) {
            try {
              a && !1 === h.writable && (h.writable = !0), Object.defineProperty(c, k, h);
            } catch (u) {
              t.assert("Can't define: " + k);
            }
          }
        }
      }
    };
    d.copyPropertiesByList = function(c, e, f) {
      for (var d = 0;d < f.length;d++) {
        var a = f[d];
        c[a] = e[a];
      }
    };
    d.getLatestGetterOrSetterPropertyDescriptor = function(c, e) {
      for (var f = {};c;) {
        var d = Object.getOwnPropertyDescriptor(c, e);
        d && (f.get = f.get || d.get, f.set = f.set || d.set);
        if (f.get && f.set) {
          break;
        }
        c = Object.getPrototypeOf(c);
      }
      return f;
    };
    d.defineNonEnumerableGetterOrSetter = function(c, e, f, F) {
      var a = d.getLatestGetterOrSetterPropertyDescriptor(c, e);
      a.configurable = !0;
      a.enumerable = !1;
      F ? a.get = f : a.set = f;
      Object.defineProperty(c, e, a);
    };
    d.defineNonEnumerableGetter = function(c, e, f) {
      Object.defineProperty(c, e, {get:f, configurable:!0, enumerable:!1});
    };
    d.defineNonEnumerableSetter = function(c, e, f) {
      Object.defineProperty(c, e, {set:f, configurable:!0, enumerable:!1});
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
  })(l.ObjectUtilities || (l.ObjectUtilities = {}));
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
  })(k = l.FunctionUtilities || (l.FunctionUtilities = {}));
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
      x[0] = c;
      x[1] = e;
      x[2] = m;
      x[3] = f;
      return x.join("");
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
        var x = c.charCodeAt(f);
        if (127 >= x) {
          e[m++] = x;
        } else {
          if (55296 <= x && 56319 >= x) {
            var a = c.charCodeAt(f + 1);
            56320 <= a && 57343 >= a && (x = ((x & 1023) << 10) + (a & 1023) + 65536, ++f);
          }
          0 !== (x & 4292870144) ? (e[m++] = 248 | x >>> 24 & 3, e[m++] = 128 | x >>> 18 & 63, e[m++] = 128 | x >>> 12 & 63, e[m++] = 128 | x >>> 6 & 63) : 0 !== (x & 4294901760) ? (e[m++] = 240 | x >>> 18 & 7, e[m++] = 128 | x >>> 12 & 63, e[m++] = 128 | x >>> 6 & 63) : 0 !== (x & 4294965248) ? (e[m++] = 224 | x >>> 12 & 15, e[m++] = 128 | x >>> 6 & 63) : e[m++] = 192 | x >>> 6 & 31;
          e[m++] = 128 | x & 63;
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
          var d = 192, x = 5;
          do {
            if ((f & (d >> 1 | 128)) === d) {
              break;
            }
            d = d >> 1 | 128;
            --x;
          } while (0 <= x);
          if (0 >= x) {
            m += String.fromCharCode(f);
          } else {
            for (var f = f & (1 << x) - 1, d = !1, a = 5;a >= x;--a) {
              var F = c[e++];
              if (128 != (F & 192)) {
                d = !0;
                break;
              }
              f = f << 6 | F & 63;
            }
            if (d) {
              for (x = e - (7 - a);x < e;++x) {
                m += String.fromCharCode(c[x] & 255);
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
      for (var d = m.byteLength, x = d % 3, d = d - x, a, F, k, I, h = 0;h < d;h += 3) {
        I = m[h] << 16 | m[h + 1] << 8 | m[h + 2], a = (I & 16515072) >> 18, F = (I & 258048) >> 12, k = (I & 4032) >> 6, I &= 63, f += c("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[a], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[F], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[k], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[I]);
      }
      1 == x ? (I = m[d], f += e("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(I & 252) >> 2], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(I & 3) << 4], "==")) : 2 == x && (I = m[d] << 8 | m[d + 1], f += c("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(I & 64512) >> 10], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(I & 1008) >> 4], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(I & 15) << 
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
      for (var e = 32 - Math.clz32(c), m = Math.ceil(e / 6), e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[m], m = m - 1;0 <= m;m--) {
        e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[c >> 6 * m & 63];
      }
      return e;
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
        var x = 6 * (e - f - 1), m = m | d.fromEncoding(c.charCodeAt(1 + f)) << x
      }
      return m;
    };
    d.trimMiddle = function(c, e) {
      if (c.length <= e) {
        return c;
      }
      var m = e >> 1, f = e - m - 1;
      return c.substr(0, m) + "\u2026" + c.substr(c.length - f, f);
    };
    d.multiple = function(c, e) {
      for (var m = "", f = 0;f < e;f++) {
        m += c;
      }
      return m;
    };
    d.indexOfAny = function(c, e, m) {
      for (var f = c.length, d = 0;d < e.length;d++) {
        var x = c.indexOf(e[d], m);
        0 <= x && (f = Math.min(f, x));
      }
      return f === c.length ? -1 : f;
    };
    var m = Array(3), x = Array(4), a = Array(5), k = Array(6), h = Array(7), u = Array(8), v = Array(9);
    d.concat3 = e;
    d.concat4 = c;
    d.concat5 = function(c, e, m, f, d) {
      a[0] = c;
      a[1] = e;
      a[2] = m;
      a[3] = f;
      a[4] = d;
      return a.join("");
    };
    d.concat6 = function(c, e, m, f, d, x) {
      k[0] = c;
      k[1] = e;
      k[2] = m;
      k[3] = f;
      k[4] = d;
      k[5] = x;
      return k.join("");
    };
    d.concat7 = function(c, e, m, f, d, x, a) {
      h[0] = c;
      h[1] = e;
      h[2] = m;
      h[3] = f;
      h[4] = d;
      h[5] = x;
      h[6] = a;
      return h.join("");
    };
    d.concat8 = function(c, e, m, f, d, x, a, F) {
      u[0] = c;
      u[1] = e;
      u[2] = m;
      u[3] = f;
      u[4] = d;
      u[5] = x;
      u[6] = a;
      u[7] = F;
      return u.join("");
    };
    d.concat9 = function(c, e, m, f, d, x, a, F, k) {
      v[0] = c;
      v[1] = e;
      v[2] = m;
      v[3] = f;
      v[4] = d;
      v[5] = x;
      v[6] = a;
      v[7] = F;
      v[8] = k;
      return v.join("");
    };
  })(l.StringUtilities || (l.StringUtilities = {}));
  (function(d) {
    var f = new Uint8Array([7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21]), e = new Int32Array([-680876936, -389564586, 606105819, -1044525330, -176418897, 1200080426, -1473231341, -45705983, 1770035416, -1958414417, -42063, -1990404162, 1804603682, -40341101, -1502002290, 1236535329, -165796510, -1069501632, 
    643717713, -373897302, -701558691, 38016083, -660478335, -405537848, 568446438, -1019803690, -187363961, 1163531501, -1444681467, -51403784, 1735328473, -1926607734, -378558, -2022574463, 1839030562, -35309556, -1530992060, 1272893353, -155497632, -1094730640, 681279174, -358537222, -722521979, 76029189, -640364487, -421815835, 530742520, -995338651, -198630844, 1126891415, -1416354905, -57434055, 1700485571, -1894986606, -1051523, -2054922799, 1873313359, -30611744, -1560198380, 1309151649, 
    -145523070, -1120210379, 718787259, -343485551]);
    d.hashBytesTo32BitsMD5 = function(c, m, d) {
      var a = 1732584193, k = -271733879, h = -1732584194, u = 271733878, v = d + 72 & -64, q = new Uint8Array(v), b;
      for (b = 0;b < d;++b) {
        q[b] = c[m++];
      }
      q[b++] = 128;
      for (c = v - 8;b < c;) {
        q[b++] = 0;
      }
      q[b++] = d << 3 & 255;
      q[b++] = d >> 5 & 255;
      q[b++] = d >> 13 & 255;
      q[b++] = d >> 21 & 255;
      q[b++] = d >>> 29 & 255;
      q[b++] = 0;
      q[b++] = 0;
      q[b++] = 0;
      c = new Int32Array(16);
      for (b = 0;b < v;) {
        for (d = 0;16 > d;++d, b += 4) {
          c[d] = q[b] | q[b + 1] << 8 | q[b + 2] << 16 | q[b + 3] << 24;
        }
        var r = a;
        m = k;
        var p = h, t = u, g, l;
        for (d = 0;64 > d;++d) {
          16 > d ? (g = m & p | ~m & t, l = d) : 32 > d ? (g = t & m | ~t & p, l = 5 * d + 1 & 15) : 48 > d ? (g = m ^ p ^ t, l = 3 * d + 5 & 15) : (g = p ^ (m | ~t), l = 7 * d & 15);
          var n = t, r = r + g + e[d] + c[l] | 0;
          g = f[d];
          t = p;
          p = m;
          m = m + (r << g | r >>> 32 - g) | 0;
          r = n;
        }
        a = a + r | 0;
        k = k + m | 0;
        h = h + p | 0;
        u = u + t | 0;
      }
      return a;
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
  })(l.HashUtilities || (l.HashUtilities = {}));
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
  l.Random = u;
  Math.random = function() {
    return u.next();
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
      "undefined" !== typeof ShumwayCom && ShumwayCom.getWeakMapKeys ? this._map = new WeakMap : this._list = [];
    }
    d.prototype.clear = function() {
      this._map ? this._map.clear() : this._list.length = 0;
    };
    d.prototype.push = function(f) {
      this._map ? this._map.set(f, null) : this._list.push(f);
    };
    d.prototype.remove = function(f) {
      this._map ? this._map.delete(f) : this._list[this._list.indexOf(f)] = null;
    };
    d.prototype.forEach = function(f) {
      if (this._map) {
        ShumwayCom.getWeakMapKeys(this._map).forEach(function(c) {
          0 !== c._referenceCount && f(c);
        });
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
  l.WeakList = a;
  var h;
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
  })(h = l.NumberUtilities || (l.NumberUtilities = {}));
  (function(d) {
    d[d.MaxU16 = 65535] = "MaxU16";
    d[d.MaxI16 = 32767] = "MaxI16";
    d[d.MinI16 = -32768] = "MinI16";
  })(l.Numbers || (l.Numbers = {}));
  var r;
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
  })(r = l.IntegerUtilities || (l.IntegerUtilities = {}));
  (function(d) {
    function f(e, c, m, f, d, a) {
      return (m - e) * (a - c) - (f - c) * (d - e);
    }
    d.pointInPolygon = function(e, c, m) {
      for (var f = 0, d = m.length - 2, a = 0;a < d;a += 2) {
        var k = m[a + 0], h = m[a + 1], u = m[a + 2], v = m[a + 3];
        (h <= c && v > c || h > c && v <= c) && e < k + (c - h) / (v - h) * (u - k) && f++;
      }
      return 1 === (f & 1);
    };
    d.signedArea = f;
    d.counterClockwise = function(e, c, m, d, a, k) {
      return 0 < f(e, c, m, d, a, k);
    };
    d.clockwise = function(e, c, m, d, a, k) {
      return 0 > f(e, c, m, d, a, k);
    };
    d.pointInPolygonInt32 = function(e, c, m) {
      e |= 0;
      c |= 0;
      for (var f = 0, d = m.length - 2, a = 0;a < d;a += 2) {
        var k = m[a + 0], h = m[a + 1], v = m[a + 2], u = m[a + 3];
        (h <= c && u > c || h > c && u <= c) && e < k + (c - h) / (u - h) * (v - k) && f++;
      }
      return 1 === (f & 1);
    };
  })(l.GeometricUtilities || (l.GeometricUtilities = {}));
  (function(d) {
    d[d.Error = 1] = "Error";
    d[d.Warn = 2] = "Warn";
    d[d.Debug = 4] = "Debug";
    d[d.Log = 8] = "Log";
    d[d.Info = 16] = "Info";
    d[d.All = 31] = "All";
  })(l.LogLevel || (l.LogLevel = {}));
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
        var a = "";
        e && (a = null === f[m] ? "null" : void 0 === f[m] ? "undefined" : f[m].constructor.name, a += " ");
        var k = c ? "" : ("" + m).padRight(" ", 4);
        this.writeLn(k + a + f[m]);
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
  l.IndentingWriter = a;
  var p = function() {
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
        f = new p(f, null);
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
        this._head = new p(f, null);
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
  l.SortedList = a;
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
  l.CircularBuffer = a;
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
          var x = m[f], a = x | c[f];
          m[f] = a;
          e |= x ^ a;
        }
        this.dirty = e;
      };
      c.prototype.intersect = function(c) {
        var e = this.dirty, m = this.bits;
        c = c.bits;
        for (var f = 0, d = m.length;f < d;f++) {
          var x = m[f], a = x & c[f];
          m[f] = a;
          e |= x ^ a;
        }
        this.dirty = e;
      };
      c.prototype.subtract = function(c) {
        var e = this.dirty, m = this.bits;
        c = c.bits;
        for (var f = 0, d = m.length;f < d;f++) {
          var x = m[f], a = x & ~c[f];
          m[f] = a;
          e |= x ^ a;
        }
        this.dirty = e;
      };
      c.prototype.negate = function() {
        for (var c = this.dirty, e = this.bits, m = 0, f = e.length;m < f;m++) {
          var d = e[m], x = ~d;
          e[m] = x;
          c |= d ^ x;
        }
        this.dirty = c;
      };
      c.prototype.forEach = function(c) {
        for (var e = this.bits, m = 0, f = e.length;m < f;m++) {
          var x = e[m];
          if (x) {
            for (var a = 0;a < d.BITS_PER_WORD;a++) {
              x & 1 << a && c(m * d.BITS_PER_WORD + a);
            }
          }
        }
      };
      c.prototype.toArray = function() {
        for (var c = [], e = this.bits, m = 0, f = e.length;m < f;m++) {
          var x = e[m];
          if (x) {
            for (var a = 0;a < d.BITS_PER_WORD;a++) {
              x & 1 << a && c.push(m * d.BITS_PER_WORD + a);
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
    var x = function() {
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
    d.Uint32BitSet = x;
    x.prototype.toString = c;
    x.prototype.toBitString = e;
    m.prototype.toString = c;
    m.prototype.toBitString = e;
    d.BitSetFunctor = function(c) {
      var e = 1 === f(c) >> d.ADDRESS_BITS_PER_WORD ? x : m;
      return function() {
        return new e(c);
      };
    };
  })(l.BitSets || (l.BitSets = {}));
  a = function() {
    function d() {
    }
    d.randomStyle = function() {
      d._randomStyleCache || (d._randomStyleCache = "#ff5e3a #ff9500 #ffdb4c #87fc70 #52edc7 #1ad6fd #c644fc #ef4db6 #4a4a4a #dbddde #ff3b30 #ff9500 #ffcc00 #4cd964 #34aadc #007aff #5856d6 #ff2d55 #8e8e93 #c7c7cc #5ad427 #c86edf #d1eefc #e0f8d8 #fb2b69 #f7f7f7 #1d77ef #d6cec3 #55efcb #ff4981 #ffd3e0 #f7f7f7 #ff1300 #1f1f21 #bdbec2 #ff3a2d".split(" "));
      return d._randomStyleCache[d._nextStyle++ % d._randomStyleCache.length];
    };
    d.gradientColor = function(f) {
      return d._gradient[d._gradient.length * h.clamp(f, 0, 1) | 0];
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
  l.ColorStyle = a;
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
  l.Bounds = a;
  a = function() {
    function d(f, e, c, m) {
      t.assert(n(f));
      t.assert(n(e));
      t.assert(n(c));
      t.assert(n(m));
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
      t.assert(n(f));
      this._xMin = f;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "yMin", {get:function() {
      return this._yMin;
    }, set:function(f) {
      t.assert(n(f));
      this._yMin = f | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "xMax", {get:function() {
      return this._xMax;
    }, set:function(f) {
      t.assert(n(f));
      this._xMax = f | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "width", {get:function() {
      return this._xMax - this._xMin;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "yMax", {get:function() {
      return this._yMax;
    }, set:function(f) {
      t.assert(n(f));
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
  l.DebugBounds = a;
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
      return d.FromARGB(q.RGBAToARGB(f));
    };
    d.prototype.toRGBA = function() {
      return 255 * this.r << 24 | 255 * this.g << 16 | 255 * this.b << 8 | 255 * this.a;
    };
    d.prototype.toCSSStyle = function() {
      return q.rgbaToCSSStyle(this.toRGBA());
    };
    d.prototype.set = function(f) {
      this.r = f.r;
      this.g = f.g;
      this.b = f.b;
      this.a = f.a;
    };
    d.randomColor = function() {
      var f = .4;
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
  l.Color = a;
  var q;
  (function(d) {
    function f(c) {
      var e, f, d = c >> 24 & 255;
      f = (Math.imul(c >> 16 & 255, d) + 127) / 255 | 0;
      e = (Math.imul(c >> 8 & 255, d) + 127) / 255 | 0;
      c = (Math.imul(c >> 0 & 255, d) + 127) / 255 | 0;
      return d << 24 | f << 16 | e << 8 | c;
    }
    d.RGBAToARGB = function(c) {
      return c >> 8 & 16777215 | (c & 255) << 24;
    };
    d.ARGBToRGBA = function(c) {
      return c << 8 | c >> 24 & 255;
    };
    d.rgbaToCSSStyle = function(c) {
      return l.StringUtilities.concat9("rgba(", c >> 24 & 255, ",", c >> 16 & 255, ",", c >> 8 & 255, ",", (c & 255) / 255, ")");
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
      var e, f, d = c >> 24 & 255;
      f = Math.imul(255, c >> 16 & 255) / d & 255;
      e = Math.imul(255, c >> 8 & 255) / d & 255;
      c = Math.imul(255, c >> 0 & 255) / d & 255;
      return d << 24 | f << 16 | e << 8 | c;
    };
    d.premultiplyARGB = f;
    var e;
    d.ensureUnpremultiplyTable = function() {
      if (!e) {
        e = new Uint8Array(65536);
        for (var c = 0;256 > c;c++) {
          for (var f = 0;256 > f;f++) {
            e[(f << 8) + c] = Math.imul(255, c) / f;
          }
        }
      }
    };
    d.tableLookupUnpremultiplyARGB = function(c) {
      c |= 0;
      var f = c >> 24 & 255;
      if (0 === f) {
        return 0;
      }
      if (255 === f) {
        return c;
      }
      var d, a, k = f << 8, h = e;
      a = h[k + (c >> 16 & 255)];
      d = h[k + (c >> 8 & 255)];
      c = h[k + (c >> 0 & 255)];
      return f << 24 | a << 16 | d << 8 | c;
    };
    d.blendPremultipliedBGRA = function(c, e) {
      var f, d;
      d = 256 - (e & 255);
      f = Math.imul(c & 16711935, d) >> 8;
      d = Math.imul(c >> 8 & 16711935, d) >> 8;
      return ((e >> 8 & 16711935) + d & 16711935) << 8 | (e & 16711935) + f & 16711935;
    };
    var c = r.swap32;
    d.convertImage = function(m, d, a, k) {
      var h = a.length;
      if (m === d) {
        if (a !== k) {
          for (m = 0;m < h;m++) {
            k[m] = a[m];
          }
        }
      } else {
        if (1 === m && 3 === d) {
          for (l.ColorUtilities.ensureUnpremultiplyTable(), m = 0;m < h;m++) {
            var u = a[m];
            d = u & 255;
            if (0 === d) {
              k[m] = 0;
            } else {
              if (255 === d) {
                k[m] = 4278190080 | u >> 8 & 16777215;
              } else {
                var q = u >> 24 & 255, b = u >> 16 & 255, u = u >> 8 & 255, r = d << 8, p = e, u = p[r + u], b = p[r + b], q = p[r + q];
                k[m] = d << 24 | q << 16 | b << 8 | u;
              }
            }
          }
        } else {
          if (2 === m && 3 === d) {
            for (m = 0;m < h;m++) {
              k[m] = c(a[m]);
            }
          } else {
            if (3 === m && 1 === d) {
              for (m = 0;m < h;m++) {
                d = a[m], k[m] = c(f(d & 4278255360 | d >> 16 & 255 | (d & 255) << 16));
              }
            } else {
              for (t.somewhatImplemented("Image Format Conversion: " + v[m] + " -> " + v[d]), m = 0;m < h;m++) {
                k[m] = a[m];
              }
            }
          }
        }
      }
    };
  })(q = l.ColorUtilities || (l.ColorUtilities = {}));
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
  l.ArrayBufferPool = a;
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
    d.instance;
  })(l.Telemetry || (l.Telemetry = {}));
  (function(d) {
    d.instance;
  })(l.FileLoadingService || (l.FileLoadingService = {}));
  (function(d) {
    d[d.BuiltinAbc = 0] = "BuiltinAbc";
    d[d.PlayerglobalAbcs = 1] = "PlayerglobalAbcs";
    d[d.PlayerglobalManifest = 2] = "PlayerglobalManifest";
    d[d.ShellAbc = 3] = "ShellAbc";
  })(l.SystemResourceId || (l.SystemResourceId = {}));
  (function(d) {
    d.instance;
  })(l.SystemResourcesLoadingService || (l.SystemResourcesLoadingService = {}));
  l.registerCSSFont = function(d, f, e) {
    if (inBrowser) {
      var c = document.head;
      c.insertBefore(document.createElement("style"), c.firstChild);
      c = document.styleSheets[0];
      f = "@font-face{font-family:swffont" + d + ";src:url(data:font/opentype;base64," + l.StringUtilities.base64ArrayBuffer(f.buffer) + ")}";
      c.insertRule(f, c.cssRules.length);
      e && (e = document.createElement("div"), e.style.fontFamily = "swffont" + d, e.innerHTML = "hello", document.body.appendChild(e), document.body.removeChild(e));
    } else {
      t.warning("Cannot register CSS font outside the browser");
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
  })(l.ExternalInterfaceService || (l.ExternalInterfaceService = {}));
  (function(d) {
    d.instance = {setClipboard:function(f) {
    }};
  })(l.ClipboardService || (l.ClipboardService = {}));
  a = function() {
    function d() {
      this._queues = {};
    }
    d.prototype.register = function(f, e) {
      t.assert(f);
      t.assert(e);
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
      t.assert(f);
      t.assert(e);
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
  l.Callback = a;
  (function(d) {
    d[d.None = 0] = "None";
    d[d.PremultipliedAlphaARGB = 1] = "PremultipliedAlphaARGB";
    d[d.StraightAlphaARGB = 2] = "StraightAlphaARGB";
    d[d.StraightAlphaRGBA = 3] = "StraightAlphaRGBA";
    d[d.JPEG = 4] = "JPEG";
    d[d.PNG = 5] = "PNG";
    d[d.GIF = 6] = "GIF";
  })(l.ImageType || (l.ImageType = {}));
  var v = l.ImageType;
  l.getMIMETypeForImageType = function(d) {
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
  })(l.UI || (l.UI = {}));
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
  l.PromiseWrapper = a;
})(Shumway || (Shumway = {}));
(function() {
  function l(c) {
    if ("function" !== typeof c) {
      throw new TypeError("Invalid deferred constructor");
    }
    var e = p();
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
  function n(c, e) {
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
  function g(c) {
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
      t({reaction:c[f], argument:e});
    }
  }
  function t(c) {
    0 === e.length && setTimeout(a, 0);
    e.push(c);
  }
  function a() {
    for (;0 < e.length;) {
      var c = e[0];
      try {
        a: {
          var m = c.reaction, f = m.deferred, a = m.handler, k = void 0, h = void 0;
          try {
            k = a(c.argument);
          } catch (u) {
            var v = f.reject;
            v(u);
            break a;
          }
          if (k === f.promise) {
            v = f.reject, v(new TypeError("Self resolution"));
          } else {
            try {
              if (h = n(k, f), !h) {
                var q = f.resolve;
                q(k);
              }
            } catch (b) {
              v = f.reject, v(b);
            }
          }
        }
      } catch (r) {
        if ("function" === typeof d.onerror) {
          d.onerror(r);
        }
      }
      e.shift();
    }
  }
  function k(c) {
    throw c;
  }
  function u(c) {
    return c;
  }
  function h(c) {
    return function(e) {
      b(c, e);
    };
  }
  function r(c) {
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
  function p() {
    function c(e, f) {
      c.resolve = e;
      c.reject = f;
    }
    return c;
  }
  function q(c, e, f) {
    return function(d) {
      if (d === c) {
        return f(new TypeError("Self resolution"));
      }
      var a = c.promiseConstructor;
      if (g(d) && d.promiseConstructor === a) {
        return d.then(e, f);
      }
      a = l(a);
      return n(d, a) ? a.promise.then(e, f) : e(d);
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
    var e = r(this), f = h(this);
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
      var e = 0, d = [], a, k, h = new f.Promise(function(c, e) {
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
      return h;
    }), "function" !== typeof f.Promise.resolve && (f.Promise.resolve = function(c) {
      return new f.Promise(function(e) {
        e(c);
      });
    });
  } else {
    var e = [];
    d.all = function(c) {
      var e = l(this), f = [], d = {countdown:0}, a = 0;
      c.forEach(function(c) {
        this.cast(c).then(v(a, f, e, d), e.reject);
        a++;
        d.countdown++;
      }, this);
      0 === a && e.resolve(f);
      return e.promise;
    };
    d.cast = function(c) {
      if (g(c)) {
        return c;
      }
      var e = l(this);
      e.resolve(c);
      return e.promise;
    };
    d.reject = function(c) {
      var e = l(this);
      e.reject(c);
      return e.promise;
    };
    d.resolve = function(c) {
      var e = l(this);
      e.resolve(c);
      return e.promise;
    };
    d.prototype = {"catch":function(c) {
      this.then(void 0, c);
    }, then:function(c, e) {
      if (!g(this)) {
        throw new TypeError("this is not a Promises");
      }
      var f = l(this.promiseConstructor), d = "function" === typeof e ? e : k, a = {deferred:f, handler:q(this, "function" === typeof c ? c : u, d)}, d = {deferred:f, handler:d};
      switch(this.promiseStatus) {
        case "unresolved":
          this.resolveReactions.push(a);
          this.rejectReactions.push(d);
          break;
        case "has-resolution":
          t({reaction:a, argument:this.result});
          break;
        case "has-rejection":
          t({reaction:d, argument:this.result});
      }
      return f.promise;
    }};
    f.Promise = d;
  }
})();
"undefined" !== typeof exports && (exports.Shumway = Shumway);
(function() {
  function l(l, g, b) {
    l[g] || Object.defineProperty(l, g, {value:b, writable:!0, configurable:!0, enumerable:!1});
  }
  l(String.prototype, "padRight", function(l, g) {
    var b = this, w = b.replace(/\033\[[0-9]*m/g, "").length;
    if (!l || w >= g) {
      return b;
    }
    for (var w = (g - w) / l.length, t = 0;t < w;t++) {
      b += l;
    }
    return b;
  });
  l(String.prototype, "padLeft", function(l, g) {
    var b = this, w = b.length;
    if (!l || w >= g) {
      return b;
    }
    for (var w = (g - w) / l.length, t = 0;t < w;t++) {
      b = l + b;
    }
    return b;
  });
  l(String.prototype, "trim", function() {
    return this.replace(/^\s+|\s+$/g, "");
  });
  l(String.prototype, "endsWith", function(l) {
    return -1 !== this.indexOf(l, this.length - l.length);
  });
  l(Array.prototype, "replace", function(l, g) {
    if (l === g) {
      return 0;
    }
    for (var b = 0, w = 0;w < this.length;w++) {
      this[w] === l && (this[w] = g, b++);
    }
    return b;
  });
})();
(function(l) {
  (function(n) {
    var g = l.isObject, b = function() {
      function a(k, h, b, p) {
        this.shortName = k;
        this.longName = h;
        this.type = b;
        p = p || {};
        this.positional = p.positional;
        this.parseFn = p.parse;
        this.value = p.defaultValue;
      }
      a.prototype.parse = function(a) {
        this.value = "boolean" === this.type ? a : "number" === this.type ? parseInt(a, 10) : a;
        this.parseFn && this.parseFn(this.value);
      };
      return a;
    }();
    n.Argument = b;
    var w = function() {
      function a() {
        this.args = [];
      }
      a.prototype.addArgument = function(a, k, r, p) {
        a = new b(a, k, r, p);
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
          t.isOptionSet(a) ? k.addBoundOptionSet(a) : k.addBoundOption(a);
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
        for (var p = [];a.length;) {
          var q = a.shift(), v = null, d = q;
          if ("--" == q) {
            p = p.concat(a);
            break;
          } else {
            if ("-" == q.slice(0, 1) || "--" == q.slice(0, 2)) {
              v = k[q];
              if (!v) {
                continue;
              }
              d = "boolean" !== v.type ? a.shift() : !0;
            } else {
              b.length ? v = b.shift() : p.push(d);
            }
          }
          v && v.parse(d);
        }
        return p;
      };
      return a;
    }();
    n.ArgumentParser = w;
    var t = function() {
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
          for (var h = 0;h < this.options.length;h++) {
            var b = this.options[h];
            if (k.isOptionSet(b) && b.name === a.name) {
              return b;
            }
          }
        }
        this.options.push(a);
        if (this.settings) {
          if (k.isOptionSet(a)) {
            h = this.settings[a.name], g(h) && (a.settings = h.settings, a.open = h.open);
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
        this.options.forEach(function(h) {
          k.isOptionSet(h) ? a[h.name] = {settings:h.getSettings(), open:h.open} : a[h.longName] = h.value;
        });
        return a;
      };
      k.prototype.setSettings = function(a) {
        a && this.options.forEach(function(h) {
          k.isOptionSet(h) ? h.name in a && h.setSettings(a[h.name].settings) : h.longName in a && (h.value = a[h.longName]);
        });
      };
      return k;
    }();
    n.OptionSet = t;
    var a = function() {
      function a(k, h, b, p, q, v) {
        void 0 === v && (v = null);
        this.longName = h;
        this.shortName = k;
        this.type = b;
        this.value = this.defaultValue = p;
        this.description = q;
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
    n.Option = a;
  })(l.Options || (l.Options = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(g) {
    g.ROOT = "Shumway Options";
    g.shumwayOptions = new l.Options.OptionSet(g.ROOT);
    g.setSettings = function(b) {
      g.shumwayOptions.setSettings(b);
    };
    g.getSettings = function() {
      return g.shumwayOptions.getSettings();
    };
  })(l.Settings || (l.Settings = {}));
  var n = l.Options.Option;
  l.loggingOptions = l.Settings.shumwayOptions.register(new l.Options.OptionSet("Logging Options"));
  l.omitRepeatedWarnings = l.loggingOptions.register(new n("wo", "warnOnce", "boolean", !0, "Omit Repeated Warnings"));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(n) {
    var g = function() {
      function b(b, t) {
        this._parent = b;
        this._timers = l.ObjectUtilities.createMap();
        this._name = t;
        this._count = this._total = this._last = this._begin = 0;
      }
      b.time = function(g, t) {
        b.start(g);
        t();
        b.stop();
      };
      b.start = function(g) {
        b._top = b._top._timers[g] || (b._top._timers[g] = new b(b._top, g));
        b._top.start();
        g = b._flat._timers[g] || (b._flat._timers[g] = new b(b._flat, g));
        g.start();
        b._flatStack.push(g);
      };
      b.stop = function() {
        b._top.stop();
        b._top = b._top._parent;
        b._flatStack.pop().stop();
      };
      b.stopStart = function(g) {
        b.stop();
        b.start(g);
      };
      b.prototype.start = function() {
        this._begin = l.getTicks();
      };
      b.prototype.stop = function() {
        this._last = l.getTicks() - this._begin;
        this._total += this._last;
        this._count += 1;
      };
      b.prototype.toJSON = function() {
        return {name:this._name, total:this._total, timers:this._timers};
      };
      b.prototype.trace = function(b) {
        b.enter(this._name + ": " + this._total.toFixed(2) + " ms, count: " + this._count + ", average: " + (this._total / this._count).toFixed(2) + " ms");
        for (var t in this._timers) {
          this._timers[t].trace(b);
        }
        b.outdent();
      };
      b.trace = function(g) {
        b._base.trace(g);
        b._flat.trace(g);
      };
      b._base = new b(null, "Total");
      b._top = b._base;
      b._flat = new b(null, "Flat");
      b._flatStack = [];
      return b;
    }();
    n.Timer = g;
    g = function() {
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
        this._counts = l.ObjectUtilities.createMap();
        this._times = l.ObjectUtilities.createMap();
      };
      b.prototype.toJSON = function() {
        return {counts:this._counts, times:this._times};
      };
      b.prototype.count = function(b, t, a) {
        void 0 === t && (t = 1);
        void 0 === a && (a = 0);
        if (this._enabled) {
          return void 0 === this._counts[b] && (this._counts[b] = 0, this._times[b] = 0), this._counts[b] += t, this._times[b] += a, this._counts[b];
        }
      };
      b.prototype.trace = function(b) {
        for (var t in this._counts) {
          b.writeLn(t + ": " + this._counts[t]);
        }
      };
      b.prototype._pairToString = function(b, t) {
        var a = t[0], k = t[1], u = b[a], a = a + ": " + k;
        u && (a += ", " + u.toFixed(4), 1 < k && (a += " (" + (u / k).toFixed(4) + ")"));
        return a;
      };
      b.prototype.toStringSorted = function() {
        var b = this, t = this._times, a = [], k;
        for (k in this._counts) {
          a.push([k, this._counts[k]]);
        }
        a.sort(function(a, k) {
          return k[1] - a[1];
        });
        return a.map(function(a) {
          return b._pairToString(t, a);
        }).join(", ");
      };
      b.prototype.traceSorted = function(b, t) {
        void 0 === t && (t = !1);
        var a = this, k = this._times, u = [], h;
        for (h in this._counts) {
          u.push([h, this._counts[h]]);
        }
        u.sort(function(a, k) {
          return k[1] - a[1];
        });
        t ? b.writeLn(u.map(function(h) {
          return a._pairToString(k, h);
        }).join(", ")) : u.forEach(function(h) {
          b.writeLn(a._pairToString(k, h));
        });
      };
      b.instance = new b(!0);
      return b;
    }();
    n.Counter = g;
    g = function() {
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
        for (var b = 0, t = 0;t < this._count;t++) {
          b += this._samples[t];
        }
        return b / this._count;
      };
      return b;
    }();
    n.Average = g;
  })(l.Metrics || (l.Metrics = {}));
})(Shumway || (Shumway = {}));
var __extends = this.__extends || function(l, n) {
  function g() {
    this.constructor = l;
  }
  for (var b in n) {
    n.hasOwnProperty(b) && (l[b] = n[b]);
  }
  g.prototype = n.prototype;
  l.prototype = new g;
};
(function(l) {
  (function(l) {
    function g(e) {
      for (var c = Math.max.apply(null, e), m = e.length, f = 1 << c, d = new Uint32Array(f), a = c << 16 | 65535, k = 0;k < f;k++) {
        d[k] = a;
      }
      for (var a = 0, k = 1, h = 2;k <= c;a <<= 1, ++k, h <<= 1) {
        for (var b = 0;b < m;++b) {
          if (e[b] === k) {
            for (var v = 0, q = 0;q < k;++q) {
              v = 2 * v + (a >> q & 1);
            }
            for (q = v;q < f;q += h) {
              d[q] = k << 16 | b;
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
          e && l.memCopy(d, c, a, 0, e);
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
    l.Inflate = b;
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
        if (!q) {
          t = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
          a = new Uint16Array(30);
          k = new Uint8Array(30);
          for (var f = c = 0, d = 1;30 > c;++c) {
            a[c] = d, d += 1 << (k[c] = ~~((f += 2 < c ? 1 : 0) / 2));
          }
          var b = new Uint8Array(288);
          for (c = 0;32 > c;++c) {
            b[c] = 5;
          }
          u = g(b.subarray(0, 32));
          h = new Uint16Array(29);
          r = new Uint8Array(29);
          f = c = 0;
          for (d = 3;29 > c;++c) {
            h[c] = d - (28 == c ? 1 : 0), d += 1 << (r[c] = ~~((f += 4 < c ? 1 : 0) / 4 % 6));
          }
          for (c = 0;288 > c;++c) {
            b[c] = 144 > c || 279 < c ? 8 : 256 > c ? 9 : 7;
          }
          p = g(b);
          q = !0;
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
            var h = c[a] | c[a + 1] << 8, c = c[a + 2] | c[a + 3] << 8, a = a + 4;
            if (65535 !== (h ^ c)) {
              this._error("inflate: invalid block 0 length");
              c = 6;
              break;
            }
            0 === h ? c = 0 : (this._block0Read = h, c = 1);
            break;
          case 1:
            c = 2;
            this._literalTable = p;
            this._distanceTable = u;
            break;
          case 2:
            if (26 > (e - a << 3) + d) {
              return !0;
            }
            for (;14 > d;) {
              f |= c[a++] << d, d += 8;
            }
            h = (f >> 10 & 15) + 4;
            if ((e - a << 3) + d < 14 + 3 * h) {
              return !0;
            }
            for (var e = {numLiteralCodes:(f & 31) + 257, numDistanceCodes:(f >> 5 & 31) + 1, codeLengthTable:void 0, bitLengths:void 0, codesRead:0, dupBits:0}, f = f >> 14, d = d - 14, b = new Uint8Array(19), v = 0;v < h;++v) {
              3 > d && (f |= c[a++] << d, d += 8), b[t[v]] = f & 7, f >>= 3, d -= 3;
            }
            for (;19 > v;v++) {
              b[t[v]] = 0;
            }
            e.bitLengths = new Uint8Array(e.numLiteralCodes + e.numDistanceCodes);
            e.codeLengthTable = g(b);
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
        var c = this._bufferPosition, e = this._windowPosition, f = this._block0Read, d = 65794 - e, a = this._bufferSize - c, k = a < f, h = Math.min(d, a, f);
        this._window.set(this._buffer.subarray(c, c + h), e);
        this._windowPosition = e + h;
        this._bufferPosition = c + h;
        this._block0Read = f - h;
        return f === h ? (this._state = 0, !1) : k && d < a;
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
        var c = this._block2State, e = c.numLiteralCodes + c.numDistanceCodes, f = c.bitLengths, d = c.codesRead, a = 0 < d ? f[d - 1] : 0, k = c.codeLengthTable, h;
        if (0 < c.dupBits) {
          h = this._readBits(c.dupBits);
          if (0 > h) {
            return !0;
          }
          for (;h--;) {
            f[d++] = a;
          }
          c.dupBits = 0;
        }
        for (;d < e;) {
          var b = this._readCode(k);
          if (0 > b) {
            return c.codesRead = d, !0;
          }
          if (16 > b) {
            f[d++] = a = b;
          } else {
            var v;
            switch(b) {
              case 16:
                v = 2;
                h = 3;
                b = a;
                break;
              case 17:
                h = v = 3;
                b = 0;
                break;
              case 18:
                v = 7, h = 11, b = 0;
            }
            for (;h--;) {
              f[d++] = b;
            }
            h = this._readBits(v);
            if (0 > h) {
              return c.codesRead = d, c.dupBits = v, !0;
            }
            for (;h--;) {
              f[d++] = b;
            }
            a = b;
          }
        }
        this._literalTable = g(f.subarray(0, c.numLiteralCodes));
        this._distanceTable = g(f.subarray(c.numLiteralCodes));
        this._state = 4;
        this._block2State = null;
        return !1;
      };
      c.prototype._decodeBlock = function() {
        var c = this._literalTable, e = this._distanceTable, f = this._window, d = this._windowPosition, b = this._copyState, v, q, u, p;
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
              p = b.dist + v;
              q = b.len;
              for (v = d - p;q--;) {
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
              u = r[v];
              q = h[v];
              v = 0 === u ? 0 : this._readBits(u);
              if (0 > v) {
                return b.state = 1, b.len = q, b.lenBits = u, !0;
              }
              q += v;
              v = this._readCode(e);
              if (0 > v) {
                return b.state = 2, b.len = q, !0;
              }
              u = k[v];
              p = a[v];
              v = 0 === u ? 0 : this._readBits(u);
              if (0 > v) {
                return b.state = 3, b.len = q, b.dist = p, b.distBits = u, !0;
              }
              p += v;
              for (v = d - p;q--;) {
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
    }(b), t, a, k, u, h, r, p, q = !1, v = function(e) {
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
    l.Adler32 = f;
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
    l.Deflate = d;
  })(l.ArrayUtilities || (l.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(l) {
    function g(c) {
      for (var e = new Uint16Array(c), f = 0;f < c;f++) {
        e[f] = 1024;
      }
      return e;
    }
    function b(c, e, f, d) {
      for (var a = 1, k = 0, h = 0;h < f;h++) {
        var b = d.decodeBit(c, a + e), a = (a << 1) + b, k = k | b << h
      }
      return k;
    }
    function w(c, e) {
      var f = [];
      f.length = e;
      for (var d = 0;d < e;d++) {
        f[d] = new h(c);
      }
      return f;
    }
    var t = function() {
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
        for (var f = this.pos, d = this.size, a = this.buf, k = c <= f ? f - c : d - c + f, h = e;0 < h;) {
          for (var b = Math.min(Math.min(h, d - f), d - k), v = 0;v < b;v++) {
            var q = a[k++];
            a[f++] = q;
          }
          f === d && (this.pos = f, this.flush(), f = 0, this.isFull = !0);
          k === d && (k = 0);
          h -= b;
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
    }(), u = function() {
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
        var f = this.range, d = this.code, a = c[e], k = (f >>> 11) * a;
        d >>> 0 < k ? (a = a + (2048 - a >> 5) | 0, f = k | 0, k = 0) : (a = a - (a >> 5) | 0, d = d - k | 0, f = f - k | 0, k = 1);
        c[e] = a & 65535;
        0 <= f && 16777216 > f && (f <<= 8, d = d << 8 | this.inStream.readByte());
        this.range = f;
        this.code = d;
        return k;
      };
      return c;
    }(), h = function() {
      function c(c) {
        this.numBits = c;
        this.probs = g(1 << c);
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
    }(), r = function() {
      function c() {
        this.choice = g(2);
        this.lowCoder = w(3, 16);
        this.midCoder = w(3, 16);
        this.highCoder = new h(8);
      }
      c.prototype.decode = function(c, e) {
        return 0 === c.decodeBit(this.choice, 0) ? this.lowCoder[e].decode(c) : 0 === c.decodeBit(this.choice, 1) ? 8 + this.midCoder[e].decode(c) : 16 + this.highCoder.decode(c);
      };
      return c;
    }(), p = function() {
      function c(c, e) {
        this.rangeDec = new u(c);
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
        var k = 1, a = 768 * (((f.totalPos & (1 << this.lp) - 1) << this.lc) + (a >> 8 - this.lc));
        if (7 <= c) {
          f = f.getByte(e + 1);
          do {
            var h = f >> 7 & 1, f = f << 1, b = d.decodeBit(this.litProbs, a + ((1 + h << 8) + k)), k = k << 1 | b;
            if (h !== b) {
              break;
            }
          } while (256 > k);
        }
        for (;256 > k;) {
          k = k << 1 | d.decodeBit(this.litProbs, a + k);
        }
        return k - 256 & 255;
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
        this.litProbs = g(768 << this.lc + this.lp);
        this.posSlotDecoder = w(6, 4);
        this.alignDecoder = new h(4);
        this.posDecoders = g(115);
        this.isMatch = g(192);
        this.isRep = g(12);
        this.isRepG0 = g(12);
        this.isRepG1 = g(12);
        this.isRepG2 = g(12);
        this.isRep0Long = g(192);
        this.lenDecoder = new r;
        this.repLenDecoder = new r;
      };
      c.prototype.decode = function(c) {
        for (var e = this.rangeDec, a = this.outWindow, k = this.pb, h = this.dictSize, b = this.markerIsMandatory, u = this.leftToUnpack, r = this.isMatch, p = this.isRep, t = this.isRepG0, g = this.isRepG1, l = this.isRepG2, n = this.isRep0Long, w = this.lenDecoder, z = this.repLenDecoder, A = this.reps[0], C = this.reps[1], y = this.reps[2], G = this.reps[3], B = this.state;;) {
          if (c && 48 > e.inStream.available) {
            this.outWindow.flush();
            break;
          }
          if (0 === u && !b && (this.outWindow.flush(), e.isFinishedOK())) {
            return d;
          }
          var E = a.totalPos & (1 << k) - 1;
          if (0 === e.decodeBit(r, (B << 4) + E)) {
            if (0 === u) {
              return q;
            }
            a.putByte(this.decodeLiteral(B, A));
            B = 4 > B ? 0 : 10 > B ? B - 3 : B - 6;
            u--;
          } else {
            if (0 !== e.decodeBit(p, B)) {
              if (0 === u || a.isEmpty()) {
                return q;
              }
              if (0 === e.decodeBit(t, B)) {
                if (0 === e.decodeBit(n, (B << 4) + E)) {
                  B = 7 > B ? 9 : 11;
                  a.putByte(a.getByte(A + 1));
                  u--;
                  continue;
                }
              } else {
                var H;
                0 === e.decodeBit(g, B) ? H = C : (0 === e.decodeBit(l, B) ? H = y : (H = G, G = y), y = C);
                C = A;
                A = H;
              }
              E = z.decode(e, E);
              B = 7 > B ? 8 : 11;
            } else {
              G = y;
              y = C;
              C = A;
              E = w.decode(e, E);
              B = 7 > B ? 7 : 10;
              A = this.decodeDistance(E);
              if (-1 === A) {
                return this.outWindow.flush(), e.isFinishedOK() ? v : q;
              }
              if (0 === u || A >= h || !a.checkDistance(A)) {
                return q;
              }
            }
            E += 2;
            H = !1;
            void 0 !== u && u < E && (E = u, H = !0);
            a.copyMatch(A + 1, E);
            u -= E;
            if (H) {
              return q;
            }
          }
        }
        this.state = B;
        this.reps[0] = A;
        this.reps[1] = C;
        this.reps[2] = y;
        this.reps[3] = G;
        this.leftToUnpack = u;
        return f;
      };
      c.prototype.flushOutput = function() {
        this.outWindow.flush();
      };
      return c;
    }(), q = 0, v = 1, d = 2, f = 3, e;
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
          var k = new Uint8Array(d);
          0 < e && k.set(this.buffer);
          k.set(c.subarray(0, d - e), e);
          this._inStream = new t;
          this._inStream.append(k.subarray(d - 5));
          this._outStream = new a(function(c) {
            this.onData.call(null, c);
          }.bind(this));
          this._decoder = new p(this._inStream, this._outStream);
          if (1 === this._state) {
            this._decoder.decodeProperties(k.subarray(12, 17)), this._decoder.markerIsMandatory = !1, this._decoder.unpackSize = ((k[4] | k[5] << 8 | k[6] << 16 | k[7] << 24) >>> 0) - 8;
          } else {
            this._decoder.decodeProperties(k.subarray(0, 5));
            for (var e = 0, h = !1, b = 0;8 > b;b++) {
              var v = k[5 + b];
              255 !== v && (h = !0);
              e |= v << 8 * b;
            }
            this._decoder.markerIsMandatory = !h;
            this._decoder.unpackSize = h ? e : void 0;
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
          var q = this._decoder.decode(!0);
          this._inStream.compact();
          q !== f && this._checkError(q);
        } catch (u) {
          this._decoder.flushOutput(), this._decoder = null, this._error(u);
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
        c === q ? e = "LZMA decoding error" : c === f ? e = "Decoding is not complete" : c === v ? void 0 !== this._decoder.unpackSize && this._decoder.unpackSize !== this._outStream.processed && (e = "Finished with end marker before than specified size") : e = "Internal LZMA Error";
        e && this._error(e);
      };
      return c;
    }();
    l.LzmaDecoder = e;
  })(l.ArrayUtilities || (l.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(n) {
    function g(a) {
      return "string" === typeof a ? a : void 0 == a ? null : a + "";
    }
    var b = l.Debug.notImplemented, w = l.StringUtilities.utf8decode, t = l.StringUtilities.utf8encode, a = l.NumberUtilities.clamp, k = function() {
      return function(a, k, d) {
        this.buffer = a;
        this.length = k;
        this.littleEndian = d;
      };
    }();
    n.PlainObjectDataBuffer = k;
    for (var u = new Uint32Array(33), h = 1, r = 0;32 >= h;h++) {
      u[h] = r = r << 1 | 1;
    }
    var p;
    (function(a) {
      a[a.U8 = 1] = "U8";
      a[a.I32 = 2] = "I32";
      a[a.F32 = 4] = "F32";
    })(p || (p = {}));
    h = function() {
      function h(a) {
        void 0 === a && (a = h.INITIAL_SIZE);
        this._buffer || (this._buffer = new ArrayBuffer(a), this._position = this._length = 0, this._resetViews(), this._littleEndian = h._nativeLittleEndian, this._bitLength = this._bitBuffer = 0);
      }
      h.FromArrayBuffer = function(a, d) {
        void 0 === d && (d = -1);
        var f = Object.create(h.prototype);
        f._buffer = a;
        f._length = -1 === d ? a.byteLength : d;
        f._position = 0;
        f._resetViews();
        f._littleEndian = h._nativeLittleEndian;
        f._bitBuffer = 0;
        f._bitLength = 0;
        return f;
      };
      h.FromPlainObject = function(a) {
        var d = h.FromArrayBuffer(a.buffer, a.length);
        d._littleEndian = a.littleEndian;
        return d;
      };
      h.prototype.toPlainObject = function() {
        return new k(this._buffer, this._length, this._littleEndian);
      };
      h.prototype._resetViews = function() {
        this._u8 = new Uint8Array(this._buffer);
        this._f32 = this._i32 = null;
      };
      h.prototype._requestViews = function(a) {
        0 === (this._buffer.byteLength & 3) && (null === this._i32 && a & 2 && (this._i32 = new Int32Array(this._buffer)), null === this._f32 && a & 4 && (this._f32 = new Float32Array(this._buffer)));
      };
      h.prototype.getBytes = function() {
        return new Uint8Array(this._buffer, 0, this._length);
      };
      h.prototype._ensureCapacity = function(a) {
        var d = this._buffer;
        if (d.byteLength < a) {
          for (var f = Math.max(d.byteLength, 1);f < a;) {
            f *= 2;
          }
          f = h._arrayBufferPool.acquire(f);
          a = this._u8;
          this._buffer = f;
          this._resetViews();
          this._u8.set(a);
          f = this._u8;
          for (a = a.length;a < f.length;a++) {
            f[a] = 0;
          }
          h._arrayBufferPool.release(d);
        }
      };
      h.prototype.clear = function() {
        this._position = this._length = 0;
      };
      h.prototype.readBoolean = function() {
        return 0 !== this.readUnsignedByte();
      };
      h.prototype.readByte = function() {
        return this.readUnsignedByte() << 24 >> 24;
      };
      h.prototype.readUnsignedByte = function() {
        this._position + 1 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        return this._u8[this._position++];
      };
      h.prototype.readBytes = function(a, d) {
        var f = 0;
        void 0 === f && (f = 0);
        void 0 === d && (d = 0);
        var e = this._position;
        f || (f = 0);
        d || (d = this._length - e);
        e + d > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        a.length < f + d && (a._ensureCapacity(f + d), a.length = f + d);
        a._u8.set(new Uint8Array(this._buffer, e, d), f);
        this._position += d;
      };
      h.prototype.readShort = function() {
        return this.readUnsignedShort() << 16 >> 16;
      };
      h.prototype.readUnsignedShort = function() {
        var a = this._u8, d = this._position;
        d + 2 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var f = a[d + 0], a = a[d + 1];
        this._position = d + 2;
        return this._littleEndian ? a << 8 | f : f << 8 | a;
      };
      h.prototype.readInt = function() {
        var a = this._u8, d = this._position;
        d + 4 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var f = a[d + 0], e = a[d + 1], c = a[d + 2], a = a[d + 3];
        this._position = d + 4;
        return this._littleEndian ? a << 24 | c << 16 | e << 8 | f : f << 24 | e << 16 | c << 8 | a;
      };
      h.prototype.readUnsignedInt = function() {
        return this.readInt() >>> 0;
      };
      h.prototype.readFloat = function() {
        var a = this._position;
        a + 4 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        this._position = a + 4;
        this._requestViews(4);
        if (this._littleEndian && 0 === (a & 3) && this._f32) {
          return this._f32[a >> 2];
        }
        var d = this._u8, f = l.IntegerUtilities.u8;
        this._littleEndian ? (f[0] = d[a + 0], f[1] = d[a + 1], f[2] = d[a + 2], f[3] = d[a + 3]) : (f[3] = d[a + 0], f[2] = d[a + 1], f[1] = d[a + 2], f[0] = d[a + 3]);
        return l.IntegerUtilities.f32[0];
      };
      h.prototype.readDouble = function() {
        var a = this._u8, d = this._position;
        d + 8 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var f = l.IntegerUtilities.u8;
        this._littleEndian ? (f[0] = a[d + 0], f[1] = a[d + 1], f[2] = a[d + 2], f[3] = a[d + 3], f[4] = a[d + 4], f[5] = a[d + 5], f[6] = a[d + 6], f[7] = a[d + 7]) : (f[0] = a[d + 7], f[1] = a[d + 6], f[2] = a[d + 5], f[3] = a[d + 4], f[4] = a[d + 3], f[5] = a[d + 2], f[6] = a[d + 1], f[7] = a[d + 0]);
        this._position = d + 8;
        return l.IntegerUtilities.f64[0];
      };
      h.prototype.writeBoolean = function(a) {
        this.writeByte(a ? 1 : 0);
      };
      h.prototype.writeByte = function(a) {
        var d = this._position + 1;
        this._ensureCapacity(d);
        this._u8[this._position++] = a;
        d > this._length && (this._length = d);
      };
      h.prototype.writeUnsignedByte = function(a) {
        var d = this._position + 1;
        this._ensureCapacity(d);
        this._u8[this._position++] = a;
        d > this._length && (this._length = d);
      };
      h.prototype.writeRawBytes = function(a) {
        var d = this._position + a.length;
        this._ensureCapacity(d);
        this._u8.set(a, this._position);
        this._position = d;
        d > this._length && (this._length = d);
      };
      h.prototype.writeBytes = function(k, d, f) {
        l.isNullOrUndefined(k) && this.sec.throwError("TypeError", Errors.NullPointerError, "bytes");
        d >>>= 0;
        f >>>= 0;
        2 > arguments.length && (d = 0);
        3 > arguments.length && (f = 0);
        d === a(d, 0, k.length) && d + f === a(d + f, 0, k.length) || this.sec.throwError("RangeError", Errors.ParamRangeError);
        0 === f && (f = k.length - d);
        this.writeRawBytes(new Int8Array(k._buffer, d, f));
      };
      h.prototype.writeShort = function(a) {
        this.writeUnsignedShort(a);
      };
      h.prototype.writeUnsignedShort = function(a) {
        var d = this._position;
        this._ensureCapacity(d + 2);
        var f = this._u8;
        this._littleEndian ? (f[d + 0] = a, f[d + 1] = a >> 8) : (f[d + 0] = a >> 8, f[d + 1] = a);
        this._position = d += 2;
        d > this._length && (this._length = d);
      };
      h.prototype.writeInt = function(a) {
        this.writeUnsignedInt(a);
      };
      h.prototype.write2Ints = function(a, d) {
        this.write2UnsignedInts(a, d);
      };
      h.prototype.write4Ints = function(a, d, f, e) {
        this.write4UnsignedInts(a, d, f, e);
      };
      h.prototype.writeUnsignedInt = function(a) {
        var d = this._position;
        this._ensureCapacity(d + 4);
        this._requestViews(2);
        if (this._littleEndian === h._nativeLittleEndian && 0 === (d & 3) && this._i32) {
          this._i32[d >> 2] = a;
        } else {
          var f = this._u8;
          this._littleEndian ? (f[d + 0] = a, f[d + 1] = a >> 8, f[d + 2] = a >> 16, f[d + 3] = a >> 24) : (f[d + 0] = a >> 24, f[d + 1] = a >> 16, f[d + 2] = a >> 8, f[d + 3] = a);
        }
        this._position = d += 4;
        d > this._length && (this._length = d);
      };
      h.prototype.write2UnsignedInts = function(a, d) {
        var f = this._position;
        this._ensureCapacity(f + 8);
        this._requestViews(2);
        this._littleEndian === h._nativeLittleEndian && 0 === (f & 3) && this._i32 ? (this._i32[(f >> 2) + 0] = a, this._i32[(f >> 2) + 1] = d, this._position = f += 8, f > this._length && (this._length = f)) : (this.writeUnsignedInt(a), this.writeUnsignedInt(d));
      };
      h.prototype.write4UnsignedInts = function(a, d, f, e) {
        var c = this._position;
        this._ensureCapacity(c + 16);
        this._requestViews(2);
        this._littleEndian === h._nativeLittleEndian && 0 === (c & 3) && this._i32 ? (this._i32[(c >> 2) + 0] = a, this._i32[(c >> 2) + 1] = d, this._i32[(c >> 2) + 2] = f, this._i32[(c >> 2) + 3] = e, this._position = c += 16, c > this._length && (this._length = c)) : (this.writeUnsignedInt(a), this.writeUnsignedInt(d), this.writeUnsignedInt(f), this.writeUnsignedInt(e));
      };
      h.prototype.writeFloat = function(a) {
        var d = this._position;
        this._ensureCapacity(d + 4);
        this._requestViews(4);
        if (this._littleEndian === h._nativeLittleEndian && 0 === (d & 3) && this._f32) {
          this._f32[d >> 2] = a;
        } else {
          var f = this._u8;
          l.IntegerUtilities.f32[0] = a;
          a = l.IntegerUtilities.u8;
          this._littleEndian ? (f[d + 0] = a[0], f[d + 1] = a[1], f[d + 2] = a[2], f[d + 3] = a[3]) : (f[d + 0] = a[3], f[d + 1] = a[2], f[d + 2] = a[1], f[d + 3] = a[0]);
        }
        this._position = d += 4;
        d > this._length && (this._length = d);
      };
      h.prototype.write6Floats = function(a, d, f, e, c, m) {
        var k = this._position;
        this._ensureCapacity(k + 24);
        this._requestViews(4);
        this._littleEndian === h._nativeLittleEndian && 0 === (k & 3) && this._f32 ? (this._f32[(k >> 2) + 0] = a, this._f32[(k >> 2) + 1] = d, this._f32[(k >> 2) + 2] = f, this._f32[(k >> 2) + 3] = e, this._f32[(k >> 2) + 4] = c, this._f32[(k >> 2) + 5] = m, this._position = k += 24, k > this._length && (this._length = k)) : (this.writeFloat(a), this.writeFloat(d), this.writeFloat(f), this.writeFloat(e), this.writeFloat(c), this.writeFloat(m));
      };
      h.prototype.writeDouble = function(a) {
        var d = this._position;
        this._ensureCapacity(d + 8);
        var f = this._u8;
        l.IntegerUtilities.f64[0] = a;
        a = l.IntegerUtilities.u8;
        this._littleEndian ? (f[d + 0] = a[0], f[d + 1] = a[1], f[d + 2] = a[2], f[d + 3] = a[3], f[d + 4] = a[4], f[d + 5] = a[5], f[d + 6] = a[6], f[d + 7] = a[7]) : (f[d + 0] = a[7], f[d + 1] = a[6], f[d + 2] = a[5], f[d + 3] = a[4], f[d + 4] = a[3], f[d + 5] = a[2], f[d + 6] = a[1], f[d + 7] = a[0]);
        this._position = d += 8;
        d > this._length && (this._length = d);
      };
      h.prototype.readRawBytes = function() {
        return new Int8Array(this._buffer, 0, this._length);
      };
      h.prototype.writeUTF = function(a) {
        a = g(a);
        a = w(a);
        this.writeShort(a.length);
        this.writeRawBytes(a);
      };
      h.prototype.writeUTFBytes = function(a) {
        a = g(a);
        a = w(a);
        this.writeRawBytes(a);
      };
      h.prototype.readUTF = function() {
        return this.readUTFBytes(this.readShort());
      };
      h.prototype.readUTFBytes = function(a) {
        a >>>= 0;
        var d = this._position;
        d + a > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        this._position += a;
        return t(new Int8Array(this._buffer, d, a));
      };
      Object.defineProperty(h.prototype, "length", {get:function() {
        return this._length;
      }, set:function(k) {
        k >>>= 0;
        k > this._buffer.byteLength && this._ensureCapacity(k);
        this._length = k;
        this._position = a(this._position, 0, this._length);
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(h.prototype, "bytesAvailable", {get:function() {
        return this._length - this._position;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(h.prototype, "position", {get:function() {
        return this._position;
      }, set:function(a) {
        this._position = a >>> 0;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(h.prototype, "buffer", {get:function() {
        return this._buffer;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(h.prototype, "bytes", {get:function() {
        return this._u8;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(h.prototype, "ints", {get:function() {
        this._requestViews(2);
        return this._i32;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(h.prototype, "objectEncoding", {get:function() {
        return this._objectEncoding;
      }, set:function(a) {
        this._objectEncoding = a >>> 0;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(h.prototype, "endian", {get:function() {
        return this._littleEndian ? "littleEndian" : "bigEndian";
      }, set:function(a) {
        a = g(a);
        this._littleEndian = "auto" === a ? h._nativeLittleEndian : "littleEndian" === a;
      }, enumerable:!0, configurable:!0});
      h.prototype.toString = function() {
        return t(new Int8Array(this._buffer, 0, this._length));
      };
      h.prototype.toBlob = function(a) {
        return new Blob([new Int8Array(this._buffer, this._position, this._length)], {type:a});
      };
      h.prototype.writeMultiByte = function(a, d) {
        b("packageInternal flash.utils.ObjectOutput::writeMultiByte");
      };
      h.prototype.readMultiByte = function(a, d) {
        b("packageInternal flash.utils.ObjectInput::readMultiByte");
      };
      h.prototype.getValue = function(a) {
        a |= 0;
        return a >= this._length ? void 0 : this._u8[a];
      };
      h.prototype.setValue = function(a, d) {
        a |= 0;
        var f = a + 1;
        this._ensureCapacity(f);
        this._u8[a] = d;
        f > this._length && (this._length = f);
      };
      h.prototype.readFixed = function() {
        return this.readInt() / 65536;
      };
      h.prototype.readFixed8 = function() {
        return this.readShort() / 256;
      };
      h.prototype.readFloat16 = function() {
        var a = this.readUnsignedShort(), d = a >> 15 ? -1 : 1, f = (a & 31744) >> 10, a = a & 1023;
        return f ? 31 === f ? a ? NaN : Infinity * d : d * Math.pow(2, f - 15) * (1 + a / 1024) : a / 1024 * Math.pow(2, -14) * d;
      };
      h.prototype.readEncodedU32 = function() {
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
      h.prototype.readBits = function(a) {
        return this.readUnsignedBits(a) << 32 - a >> 32 - a;
      };
      h.prototype.readUnsignedBits = function(a) {
        for (var d = this._bitBuffer, f = this._bitLength;a > f;) {
          d = d << 8 | this.readUnsignedByte(), f += 8;
        }
        f -= a;
        a = d >>> f & u[a];
        this._bitBuffer = d;
        this._bitLength = f;
        return a;
      };
      h.prototype.readFixedBits = function(a) {
        return this.readBits(a) / 65536;
      };
      h.prototype.readString = function(a) {
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
        return t(new Int8Array(this._buffer, d, a));
      };
      h.prototype.align = function() {
        this._bitLength = this._bitBuffer = 0;
      };
      h.prototype.deflate = function() {
        this.compress("deflate");
      };
      h.prototype.inflate = function() {
        this.uncompress("deflate");
      };
      h.prototype.compress = function(a) {
        a = 0 === arguments.length ? "zlib" : g(a);
        var d;
        switch(a) {
          case "zlib":
            d = new n.Deflate(!0);
            break;
          case "deflate":
            d = new n.Deflate(!1);
            break;
          default:
            return;
        }
        var f = new h;
        d.onData = f.writeRawBytes.bind(f);
        d.push(this._u8.subarray(0, this._length));
        d.close();
        this._ensureCapacity(f._u8.length);
        this._u8.set(f._u8);
        this.length = f.length;
        this._position = 0;
      };
      h.prototype.uncompress = function(a) {
        a = 0 === arguments.length ? "zlib" : g(a);
        var d;
        switch(a) {
          case "zlib":
            d = n.Inflate.create(!0);
            break;
          case "deflate":
            d = n.Inflate.create(!1);
            break;
          case "lzma":
            d = new n.LzmaDecoder(!1);
            break;
          default:
            return;
        }
        var f = new h, e;
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
      h._nativeLittleEndian = 1 === (new Int8Array((new Int32Array([1])).buffer))[0];
      h.INITIAL_SIZE = 128;
      h._arrayBufferPool = new l.ArrayBufferPool;
      return h;
    }();
    n.DataBuffer = h;
  })(l.ArrayUtilities || (l.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  var n = l.ArrayUtilities.DataBuffer, g = l.ArrayUtilities.ensureTypedArrayCapacity;
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
  })(l.PathCommand || (l.PathCommand = {}));
  (function(b) {
    b[b.Linear = 16] = "Linear";
    b[b.Radial = 18] = "Radial";
  })(l.GradientType || (l.GradientType = {}));
  (function(b) {
    b[b.Pad = 0] = "Pad";
    b[b.Reflect = 1] = "Reflect";
    b[b.Repeat = 2] = "Repeat";
  })(l.GradientSpreadMethod || (l.GradientSpreadMethod = {}));
  (function(b) {
    b[b.RGB = 0] = "RGB";
    b[b.LinearRGB = 1] = "LinearRGB";
  })(l.GradientInterpolationMethod || (l.GradientInterpolationMethod = {}));
  (function(b) {
    b[b.None = 0] = "None";
    b[b.Normal = 1] = "Normal";
    b[b.Vertical = 2] = "Vertical";
    b[b.Horizontal = 3] = "Horizontal";
  })(l.LineScaleMode || (l.LineScaleMode = {}));
  var b = function() {
    return function(b, a, k, u, h, r, p, q, g, d, f) {
      this.commands = b;
      this.commandsPosition = a;
      this.coordinates = k;
      this.morphCoordinates = u;
      this.coordinatesPosition = h;
      this.styles = r;
      this.stylesLength = p;
      this.morphStyles = q;
      this.morphStylesLength = g;
      this.hasFills = d;
      this.hasLines = f;
    };
  }();
  l.PlainObjectShapeData = b;
  var w;
  (function(b) {
    b[b.Commands = 32] = "Commands";
    b[b.Coordinates = 128] = "Coordinates";
    b[b.Styles = 16] = "Styles";
  })(w || (w = {}));
  w = function() {
    function t(a) {
      void 0 === a && (a = !0);
      a && this.clear();
    }
    t.FromPlainObject = function(a) {
      var k = new t(!1);
      k.commands = a.commands;
      k.coordinates = a.coordinates;
      k.morphCoordinates = a.morphCoordinates;
      k.commandsPosition = a.commandsPosition;
      k.coordinatesPosition = a.coordinatesPosition;
      k.styles = n.FromArrayBuffer(a.styles, a.stylesLength);
      k.styles.endian = "auto";
      a.morphStyles && (k.morphStyles = n.FromArrayBuffer(a.morphStyles, a.morphStylesLength), k.morphStyles.endian = "auto");
      k.hasFills = a.hasFills;
      k.hasLines = a.hasLines;
      return k;
    };
    t.prototype.moveTo = function(a, k) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = 9;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = k;
    };
    t.prototype.lineTo = function(a, k) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = 10;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = k;
    };
    t.prototype.curveTo = function(a, k, b, h) {
      this.ensurePathCapacities(1, 4);
      this.commands[this.commandsPosition++] = 11;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = k;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = h;
    };
    t.prototype.cubicCurveTo = function(a, k, b, h, r, p) {
      this.ensurePathCapacities(1, 6);
      this.commands[this.commandsPosition++] = 12;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = k;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = h;
      this.coordinates[this.coordinatesPosition++] = r;
      this.coordinates[this.coordinatesPosition++] = p;
    };
    t.prototype.beginFill = function(a) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 1;
      this.styles.writeUnsignedInt(a);
      this.hasFills = !0;
    };
    t.prototype.writeMorphFill = function(a) {
      this.morphStyles.writeUnsignedInt(a);
    };
    t.prototype.endFill = function() {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 4;
    };
    t.prototype.endLine = function() {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 8;
    };
    t.prototype.lineStyle = function(a, k, b, h, r, p, q) {
      this.ensurePathCapacities(2, 0);
      this.commands[this.commandsPosition++] = 5;
      this.coordinates[this.coordinatesPosition++] = a;
      a = this.styles;
      a.writeUnsignedInt(k);
      a.writeBoolean(b);
      a.writeUnsignedByte(h);
      a.writeUnsignedByte(r);
      a.writeUnsignedByte(p);
      a.writeUnsignedByte(q);
      this.hasLines = !0;
    };
    t.prototype.writeMorphLineStyle = function(a, k) {
      this.morphCoordinates[this.coordinatesPosition - 1] = a;
      this.morphStyles.writeUnsignedInt(k);
    };
    t.prototype.beginBitmap = function(a, k, b, h, r) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = a;
      a = this.styles;
      a.writeUnsignedInt(k);
      this._writeStyleMatrix(b, !1);
      a.writeBoolean(h);
      a.writeBoolean(r);
      this.hasFills = !0;
    };
    t.prototype.writeMorphBitmap = function(a) {
      this._writeStyleMatrix(a, !0);
    };
    t.prototype.beginGradient = function(a, k, b, h, r, p, q, g) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = a;
      a = this.styles;
      a.writeUnsignedByte(h);
      a.writeShort(g);
      this._writeStyleMatrix(r, !1);
      h = k.length;
      a.writeByte(h);
      for (r = 0;r < h;r++) {
        a.writeUnsignedByte(b[r]), a.writeUnsignedInt(k[r]);
      }
      a.writeUnsignedByte(p);
      a.writeUnsignedByte(q);
      this.hasFills = !0;
    };
    t.prototype.writeMorphGradient = function(a, k, b) {
      this._writeStyleMatrix(b, !0);
      b = this.morphStyles;
      for (var h = 0;h < a.length;h++) {
        b.writeUnsignedByte(k[h]), b.writeUnsignedInt(a[h]);
      }
    };
    t.prototype.writeCommandAndCoordinates = function(a, k, b) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = k;
      this.coordinates[this.coordinatesPosition++] = b;
    };
    t.prototype.writeCoordinates = function(a, k) {
      this.ensurePathCapacities(0, 2);
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = k;
    };
    t.prototype.writeMorphCoordinates = function(a, k) {
      this.morphCoordinates = g(this.morphCoordinates, this.coordinatesPosition);
      this.morphCoordinates[this.coordinatesPosition - 2] = a;
      this.morphCoordinates[this.coordinatesPosition - 1] = k;
    };
    t.prototype.clear = function() {
      this.commandsPosition = this.coordinatesPosition = 0;
      this.commands = new Uint8Array(32);
      this.coordinates = new Int32Array(128);
      this.styles = new n(16);
      this.styles.endian = "auto";
      this.hasFills = this.hasLines = !1;
    };
    t.prototype.isEmpty = function() {
      return 0 === this.commandsPosition;
    };
    t.prototype.clone = function() {
      var a = new t(!1);
      a.commands = new Uint8Array(this.commands);
      a.commandsPosition = this.commandsPosition;
      a.coordinates = new Int32Array(this.coordinates);
      a.coordinatesPosition = this.coordinatesPosition;
      a.styles = new n(this.styles.length);
      a.styles.writeRawBytes(this.styles.bytes.subarray(0, this.styles.length));
      this.morphStyles && (a.morphStyles = new n(this.morphStyles.length), a.morphStyles.writeRawBytes(this.morphStyles.bytes.subarray(0, this.morphStyles.length)));
      a.hasFills = this.hasFills;
      a.hasLines = this.hasLines;
      return a;
    };
    t.prototype.toPlainObject = function() {
      return new b(this.commands, this.commandsPosition, this.coordinates, this.morphCoordinates, this.coordinatesPosition, this.styles.buffer, this.styles.length, this.morphStyles && this.morphStyles.buffer, this.morphStyles ? this.morphStyles.length : 0, this.hasFills, this.hasLines);
    };
    Object.defineProperty(t.prototype, "buffers", {get:function() {
      var a = [this.commands.buffer, this.coordinates.buffer, this.styles.buffer];
      this.morphCoordinates && a.push(this.morphCoordinates.buffer);
      this.morphStyles && a.push(this.morphStyles.buffer);
      return a;
    }, enumerable:!0, configurable:!0});
    t.prototype._writeStyleMatrix = function(a, k) {
      (k ? this.morphStyles : this.styles).write6Floats(a.a, a.b, a.c, a.d, a.tx, a.ty);
    };
    t.prototype.ensurePathCapacities = function(a, k) {
      this.commands = g(this.commands, this.commandsPosition + a);
      this.coordinates = g(this.coordinates, this.coordinatesPosition + k);
    };
    return t;
  }();
  l.ShapeData = w;
})(Shumway || (Shumway = {}));
(function(l) {
  (function(l) {
    (function(g) {
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
      })(g.SwfTag || (g.SwfTag = {}));
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
      })(g.DefinitionTags || (g.DefinitionTags = {}));
      (function(b) {
        b[b.CODE_DEFINE_BITS = 6] = "CODE_DEFINE_BITS";
        b[b.CODE_DEFINE_BITS_JPEG2 = 21] = "CODE_DEFINE_BITS_JPEG2";
        b[b.CODE_DEFINE_BITS_JPEG3 = 35] = "CODE_DEFINE_BITS_JPEG3";
        b[b.CODE_DEFINE_BITS_JPEG4 = 90] = "CODE_DEFINE_BITS_JPEG4";
      })(g.ImageDefinitionTags || (g.ImageDefinitionTags = {}));
      (function(b) {
        b[b.CODE_DEFINE_FONT = 10] = "CODE_DEFINE_FONT";
        b[b.CODE_DEFINE_FONT2 = 48] = "CODE_DEFINE_FONT2";
        b[b.CODE_DEFINE_FONT3 = 75] = "CODE_DEFINE_FONT3";
        b[b.CODE_DEFINE_FONT4 = 91] = "CODE_DEFINE_FONT4";
      })(g.FontDefinitionTags || (g.FontDefinitionTags = {}));
      (function(b) {
        b[b.CODE_PLACE_OBJECT = 4] = "CODE_PLACE_OBJECT";
        b[b.CODE_PLACE_OBJECT2 = 26] = "CODE_PLACE_OBJECT2";
        b[b.CODE_PLACE_OBJECT3 = 70] = "CODE_PLACE_OBJECT3";
        b[b.CODE_REMOVE_OBJECT = 5] = "CODE_REMOVE_OBJECT";
        b[b.CODE_REMOVE_OBJECT2 = 28] = "CODE_REMOVE_OBJECT2";
        b[b.CODE_START_SOUND = 15] = "CODE_START_SOUND";
        b[b.CODE_START_SOUND2 = 89] = "CODE_START_SOUND2";
      })(g.ControlTags || (g.ControlTags = {}));
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
      })(g.PlaceObjectFlags || (g.PlaceObjectFlags = {}));
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
      })(g.AVM1ClipEvents || (g.AVM1ClipEvents = {}));
    })(l.Parser || (l.Parser = {}));
  })(l.SWF || (l.SWF = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  var n = l.Debug.unexpected, g = function() {
    function b(b, g, a, k) {
      this.url = b;
      this.method = g;
      this.mimeType = a;
      this.data = k;
    }
    b.prototype.readAll = function(b, g) {
      var a = this.url, k = this.xhr = new XMLHttpRequest({mozSystem:!0});
      k.open(this.method || "GET", this.url, !0);
      k.responseType = "arraybuffer";
      b && (k.onprogress = function(a) {
        b(k.response, a.loaded, a.total);
      });
      k.onreadystatechange = function(b) {
        4 === k.readyState && (200 !== k.status && 0 !== k.status || null === k.response ? (n("Path: " + a + " not found."), g(null, k.statusText)) : g(k.response));
      };
      this.mimeType && k.setRequestHeader("Content-Type", this.mimeType);
      k.send(this.data || null);
    };
    b.prototype.readChunked = function(b, g, a, k, u, h) {
      if (0 >= b) {
        this.readAsync(g, a, k, u, h);
      } else {
        var r = 0, p = new Uint8Array(b), q = 0, v;
        this.readAsync(function(a, f) {
          v = f.total;
          for (var e = a.length, c = 0;r + e >= b;) {
            var m = b - r;
            p.set(a.subarray(c, c + m), r);
            c += m;
            e -= m;
            q += b;
            g(p, {loaded:q, total:v});
            r = 0;
          }
          p.set(a.subarray(c), r);
          r += e;
        }, a, k, function() {
          0 < r && (q += r, g(p.subarray(0, r), {loaded:q, total:v}), r = 0);
          u && u();
        }, h);
      }
    };
    b.prototype.readAsync = function(b, g, a, k, u) {
      var h = this.xhr = new XMLHttpRequest({mozSystem:!0}), r = this.url, p = 0, q = 0;
      h.open(this.method || "GET", r, !0);
      h.responseType = "moz-chunked-arraybuffer";
      var v = "moz-chunked-arraybuffer" !== h.responseType;
      v && (h.responseType = "arraybuffer");
      h.onprogress = function(a) {
        v || (p = a.loaded, q = a.total, b(new Uint8Array(h.response), {loaded:p, total:q}));
      };
      h.onreadystatechange = function(a) {
        2 === h.readyState && u && u(r, h.status, h.getAllResponseHeaders());
        4 === h.readyState && (200 !== h.status && 0 !== h.status || null === h.response && (0 === q || p !== q) ? g(h.statusText) : (v && (a = h.response, b(new Uint8Array(a), {loaded:a.byteLength, total:a.byteLength})), k && k()));
      };
      this.mimeType && h.setRequestHeader("Content-Type", this.mimeType);
      h.send(this.data || null);
      a && a();
    };
    b.prototype.abort = function() {
      this.xhr && (this.xhr.abort(), this.xhr = null);
    };
    return b;
  }();
  l.BinaryFileReader = g;
})(Shumway || (Shumway = {}));
(function(l) {
  var n = function() {
    function g() {
      this.isAS3TraceOn = !0;
      this._startTime = Date.now();
    }
    Object.defineProperty(g.prototype, "currentTimestamp", {get:function() {
      return Date.now() - this._startTime;
    }, enumerable:!0, configurable:!0});
    g.prototype._writeLine = function(b) {
    };
    g.prototype.writeAS3Trace = function(b) {
    };
    return g;
  }();
  l.FlashLog = n;
  l.flashlog = null;
})(Shumway || (Shumway = {}));
(function(l) {
  (function(l) {
    (function(g) {
      g[g.Objects = 0] = "Objects";
      g[g.References = 1] = "References";
    })(l.RemotingPhase || (l.RemotingPhase = {}));
    (function(g) {
      g[g.HasMatrix = 1] = "HasMatrix";
      g[g.HasBounds = 2] = "HasBounds";
      g[g.HasChildren = 4] = "HasChildren";
      g[g.HasColorTransform = 8] = "HasColorTransform";
      g[g.HasClipRect = 16] = "HasClipRect";
      g[g.HasMiscellaneousProperties = 32] = "HasMiscellaneousProperties";
      g[g.HasMask = 64] = "HasMask";
      g[g.HasClip = 128] = "HasClip";
    })(l.MessageBits || (l.MessageBits = {}));
    (function(g) {
      g[g.None = 0] = "None";
      g[g.Asset = 134217728] = "Asset";
    })(l.IDMask || (l.IDMask = {}));
    (function(g) {
      g[g.EOF = 0] = "EOF";
      g[g.UpdateFrame = 100] = "UpdateFrame";
      g[g.UpdateGraphics = 101] = "UpdateGraphics";
      g[g.UpdateBitmapData = 102] = "UpdateBitmapData";
      g[g.UpdateTextContent = 103] = "UpdateTextContent";
      g[g.UpdateStage = 104] = "UpdateStage";
      g[g.UpdateNetStream = 105] = "UpdateNetStream";
      g[g.RequestBitmapData = 106] = "RequestBitmapData";
      g[g.DrawToBitmap = 200] = "DrawToBitmap";
      g[g.MouseEvent = 300] = "MouseEvent";
      g[g.KeyboardEvent = 301] = "KeyboardEvent";
      g[g.FocusEvent = 302] = "FocusEvent";
    })(l.MessageTag || (l.MessageTag = {}));
    (function(g) {
      g[g.Blur = 0] = "Blur";
      g[g.DropShadow = 1] = "DropShadow";
      g[g.ColorMatrix = 2] = "ColorMatrix";
    })(l.FilterType || (l.FilterType = {}));
    (function(g) {
      g[g.Identity = 0] = "Identity";
      g[g.AlphaMultiplierOnly = 1] = "AlphaMultiplierOnly";
      g[g.All = 2] = "All";
    })(l.ColorTransformEncoding || (l.ColorTransformEncoding = {}));
    (function(g) {
      g[g.Initialized = 0] = "Initialized";
      g[g.Metadata = 1] = "Metadata";
      g[g.PlayStart = 2] = "PlayStart";
      g[g.PlayStop = 3] = "PlayStop";
      g[g.BufferEmpty = 4] = "BufferEmpty";
      g[g.BufferFull = 5] = "BufferFull";
      g[g.Pause = 6] = "Pause";
      g[g.Unpause = 7] = "Unpause";
      g[g.Seeking = 8] = "Seeking";
      g[g.Seeked = 9] = "Seeked";
      g[g.Progress = 10] = "Progress";
      g[g.Error = 11] = "Error";
    })(l.VideoPlaybackEvent || (l.VideoPlaybackEvent = {}));
    (function(g) {
      g[g.Init = 1] = "Init";
      g[g.Pause = 2] = "Pause";
      g[g.Seek = 3] = "Seek";
      g[g.GetTime = 4] = "GetTime";
      g[g.GetBufferLength = 5] = "GetBufferLength";
      g[g.SetSoundLevels = 6] = "SetSoundLevels";
      g[g.GetBytesLoaded = 7] = "GetBytesLoaded";
      g[g.GetBytesTotal = 8] = "GetBytesTotal";
      g[g.EnsurePlaying = 9] = "EnsurePlaying";
    })(l.VideoControlEvent || (l.VideoControlEvent = {}));
    (function(g) {
      g[g.ShowAll = 0] = "ShowAll";
      g[g.ExactFit = 1] = "ExactFit";
      g[g.NoBorder = 2] = "NoBorder";
      g[g.NoScale = 4] = "NoScale";
    })(l.StageScaleMode || (l.StageScaleMode = {}));
    (function(g) {
      g[g.None = 0] = "None";
      g[g.Top = 1] = "Top";
      g[g.Bottom = 2] = "Bottom";
      g[g.Left = 4] = "Left";
      g[g.Right = 8] = "Right";
      g[g.TopLeft = g.Top | g.Left] = "TopLeft";
      g[g.BottomLeft = g.Bottom | g.Left] = "BottomLeft";
      g[g.BottomRight = g.Bottom | g.Right] = "BottomRight";
      g[g.TopRight = g.Top | g.Right] = "TopRight";
    })(l.StageAlignFlags || (l.StageAlignFlags = {}));
    l.MouseEventNames = "click dblclick mousedown mousemove mouseup mouseover mouseout".split(" ");
    l.KeyboardEventNames = ["keydown", "keypress", "keyup"];
    (function(g) {
      g[g.CtrlKey = 1] = "CtrlKey";
      g[g.AltKey = 2] = "AltKey";
      g[g.ShiftKey = 4] = "ShiftKey";
    })(l.KeyboardEventFlags || (l.KeyboardEventFlags = {}));
    (function(g) {
      g[g.DocumentHidden = 0] = "DocumentHidden";
      g[g.DocumentVisible = 1] = "DocumentVisible";
      g[g.WindowBlur = 2] = "WindowBlur";
      g[g.WindowFocus = 3] = "WindowFocus";
    })(l.FocusEventType || (l.FocusEventType = {}));
  })(l.Remoting || (l.Remoting = {}));
})(Shumway || (Shumway = {}));
var throwError, Errors;
(function(l) {
  (function(l) {
    (function(g) {
      var b = function() {
        function b() {
        }
        b.toRGBA = function(a, k, b, h) {
          void 0 === h && (h = 1);
          return "rgba(" + a + "," + k + "," + b + "," + h + ")";
        };
        return b;
      }();
      g.UI = b;
      var l = function() {
        function g() {
        }
        g.prototype.tabToolbar = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(37, 44, 51, a);
        };
        g.prototype.toolbars = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(52, 60, 69, a);
        };
        g.prototype.selectionBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(29, 79, 115, a);
        };
        g.prototype.selectionText = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(245, 247, 250, a);
        };
        g.prototype.splitters = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(0, 0, 0, a);
        };
        g.prototype.bodyBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(17, 19, 21, a);
        };
        g.prototype.sidebarBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(24, 29, 32, a);
        };
        g.prototype.attentionBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(161, 134, 80, a);
        };
        g.prototype.bodyText = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(143, 161, 178, a);
        };
        g.prototype.foregroundTextGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(182, 186, 191, a);
        };
        g.prototype.contentTextHighContrast = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(169, 186, 203, a);
        };
        g.prototype.contentTextGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(143, 161, 178, a);
        };
        g.prototype.contentTextDarkGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(95, 115, 135, a);
        };
        g.prototype.blueHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(70, 175, 227, a);
        };
        g.prototype.purpleHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(107, 122, 187, a);
        };
        g.prototype.pinkHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(223, 128, 255, a);
        };
        g.prototype.redHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(235, 83, 104, a);
        };
        g.prototype.orangeHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(217, 102, 41, a);
        };
        g.prototype.lightOrangeHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(217, 155, 40, a);
        };
        g.prototype.greenHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(112, 191, 83, a);
        };
        g.prototype.blueGreyHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(94, 136, 176, a);
        };
        return g;
      }();
      g.UIThemeDark = l;
      l = function() {
        function g() {
        }
        g.prototype.tabToolbar = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(235, 236, 237, a);
        };
        g.prototype.toolbars = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(240, 241, 242, a);
        };
        g.prototype.selectionBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(76, 158, 217, a);
        };
        g.prototype.selectionText = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(245, 247, 250, a);
        };
        g.prototype.splitters = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(170, 170, 170, a);
        };
        g.prototype.bodyBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(252, 252, 252, a);
        };
        g.prototype.sidebarBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(247, 247, 247, a);
        };
        g.prototype.attentionBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(161, 134, 80, a);
        };
        g.prototype.bodyText = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(24, 25, 26, a);
        };
        g.prototype.foregroundTextGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(88, 89, 89, a);
        };
        g.prototype.contentTextHighContrast = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(41, 46, 51, a);
        };
        g.prototype.contentTextGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(143, 161, 178, a);
        };
        g.prototype.contentTextDarkGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(102, 115, 128, a);
        };
        g.prototype.blueHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(0, 136, 204, a);
        };
        g.prototype.purpleHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(91, 95, 255, a);
        };
        g.prototype.pinkHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(184, 46, 229, a);
        };
        g.prototype.redHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(237, 38, 85, a);
        };
        g.prototype.orangeHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(241, 60, 0, a);
        };
        g.prototype.lightOrangeHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(217, 126, 0, a);
        };
        g.prototype.greenHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(44, 187, 15, a);
        };
        g.prototype.blueGreyHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(95, 136, 176, a);
        };
        return g;
      }();
      g.UIThemeLight = l;
    })(l.Theme || (l.Theme = {}));
  })(l.Tools || (l.Tools = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(l) {
    (function(g) {
      var b = function() {
        function b(g, a) {
          this._buffers = g || [];
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
      g.Profile = b;
    })(l.Profiler || (l.Profiler = {}));
  })(l.Tools || (l.Tools = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(l, n) {
  function g() {
    this.constructor = l;
  }
  for (var b in n) {
    n.hasOwnProperty(b) && (l[b] = n[b]);
  }
  g.prototype = n.prototype;
  l.prototype = new g;
};
(function(l) {
  (function(l) {
    (function(g) {
      var b = function() {
        return function(b) {
          this.kind = b;
          this.totalTime = this.selfTime = this.count = 0;
        };
      }();
      g.TimelineFrameStatistics = b;
      var l = function() {
        function g(a, k, b, h, r, p) {
          this.parent = a;
          this.kind = k;
          this.startData = b;
          this.endData = h;
          this.startTime = r;
          this.endTime = p;
          this.maxDepth = 0;
        }
        Object.defineProperty(g.prototype, "totalTime", {get:function() {
          return this.endTime - this.startTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(g.prototype, "selfTime", {get:function() {
          var a = this.totalTime;
          if (this.children) {
            for (var k = 0, b = this.children.length;k < b;k++) {
              var h = this.children[k], a = a - (h.endTime - h.startTime)
            }
          }
          return a;
        }, enumerable:!0, configurable:!0});
        g.prototype.getChildIndex = function(a) {
          for (var k = this.children, b = 0;b < k.length;b++) {
            if (k[b].endTime > a) {
              return b;
            }
          }
          return 0;
        };
        g.prototype.getChildRange = function(a, k) {
          if (this.children && a <= this.endTime && k >= this.startTime && k >= a) {
            var b = this._getNearestChild(a), h = this._getNearestChildReverse(k);
            if (b <= h) {
              return a = this.children[b].startTime, k = this.children[h].endTime, {startIndex:b, endIndex:h, startTime:a, endTime:k, totalTime:k - a};
            }
          }
          return null;
        };
        g.prototype._getNearestChild = function(a) {
          var k = this.children;
          if (k && k.length) {
            if (a <= k[0].endTime) {
              return 0;
            }
            for (var b, h = 0, r = k.length - 1;r > h;) {
              b = (h + r) / 2 | 0;
              var p = k[b];
              if (a >= p.startTime && a <= p.endTime) {
                return b;
              }
              a > p.endTime ? h = b + 1 : r = b;
            }
            return Math.ceil((h + r) / 2);
          }
          return 0;
        };
        g.prototype._getNearestChildReverse = function(a) {
          var k = this.children;
          if (k && k.length) {
            var b = k.length - 1;
            if (a >= k[b].startTime) {
              return b;
            }
            for (var h, r = 0;b > r;) {
              h = Math.ceil((r + b) / 2);
              var p = k[h];
              if (a >= p.startTime && a <= p.endTime) {
                return h;
              }
              a > p.endTime ? r = h : b = h - 1;
            }
            return (r + b) / 2 | 0;
          }
          return 0;
        };
        g.prototype.query = function(a) {
          if (a < this.startTime || a > this.endTime) {
            return null;
          }
          var k = this.children;
          if (k && 0 < k.length) {
            for (var b, h = 0, r = k.length - 1;r > h;) {
              var p = (h + r) / 2 | 0;
              b = k[p];
              if (a >= b.startTime && a <= b.endTime) {
                return b.query(a);
              }
              a > b.endTime ? h = p + 1 : r = p;
            }
            b = k[r];
            if (a >= b.startTime && a <= b.endTime) {
              return b.query(a);
            }
          }
          return this;
        };
        g.prototype.queryNext = function(a) {
          for (var k = this;a > k.endTime;) {
            if (k.parent) {
              k = k.parent;
            } else {
              break;
            }
          }
          return k.query(a);
        };
        g.prototype.getDepth = function() {
          for (var a = 0, k = this;k;) {
            a++, k = k.parent;
          }
          return a;
        };
        g.prototype.calculateStatistics = function() {
          function a(g) {
            if (g.kind) {
              var h = k[g.kind.id] || (k[g.kind.id] = new b(g.kind));
              h.count++;
              h.selfTime += g.selfTime;
              h.totalTime += g.totalTime;
            }
            g.children && g.children.forEach(a);
          }
          var k = this.statistics = [];
          a(this);
        };
        g.prototype.trace = function(a) {
          var k = (this.kind ? this.kind.name + ": " : "Profile: ") + (this.endTime - this.startTime).toFixed(2);
          if (this.children && this.children.length) {
            a.enter(k);
            for (k = 0;k < this.children.length;k++) {
              this.children[k].trace(a);
            }
            a.outdent();
          } else {
            a.writeLn(k);
          }
        };
        return g;
      }();
      g.TimelineFrame = l;
      l = function(b) {
        function a(a) {
          b.call(this, null, null, null, null, NaN, NaN);
          this.name = a;
        }
        __extends(a, b);
        return a;
      }(l);
      g.TimelineBufferSnapshot = l;
    })(l.Profiler || (l.Profiler = {}));
  })(l.Tools || (l.Tools = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(n) {
    (function(g) {
      var b = function() {
        function b(g, a) {
          void 0 === g && (g = "");
          this.name = g || "";
          this._startTime = l.isNullOrUndefined(a) ? jsGlobal.START_TIME : a;
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
          this._marks = new l.CircularBuffer(Int32Array, 20);
          this._times = new l.CircularBuffer(Float64Array, 20);
        };
        b.prototype._getKindId = function(g) {
          var a = b.MAX_KINDID;
          if (void 0 === this._kindNameMap[g]) {
            if (a = this._kinds.length, a < b.MAX_KINDID) {
              var k = {id:a, name:g, visible:!0};
              this._kinds.push(k);
              this._kindNameMap[g] = k;
            } else {
              a = b.MAX_KINDID;
            }
          } else {
            a = this._kindNameMap[g].id;
          }
          return a;
        };
        b.prototype._getMark = function(g, a, k) {
          var u = b.MAX_DATAID;
          l.isNullOrUndefined(k) || a === b.MAX_KINDID || (u = this._data.length, u < b.MAX_DATAID ? this._data.push(k) : u = b.MAX_DATAID);
          return g | u << 16 | a;
        };
        b.prototype.enter = function(g, a, k) {
          k = (l.isNullOrUndefined(k) ? performance.now() : k) - this._startTime;
          this._marks || this._initialize();
          this._depth++;
          g = this._getKindId(g);
          this._marks.write(this._getMark(b.ENTER, g, a));
          this._times.write(k);
          this._stack.push(g);
        };
        b.prototype.leave = function(g, a, k) {
          k = (l.isNullOrUndefined(k) ? performance.now() : k) - this._startTime;
          var u = this._stack.pop();
          g && (u = this._getKindId(g));
          this._marks.write(this._getMark(b.LEAVE, u, a));
          this._times.write(k);
          this._depth--;
        };
        b.prototype.count = function(b, a, k) {
        };
        b.prototype.createSnapshot = function() {
          var t;
          void 0 === t && (t = Number.MAX_VALUE);
          if (!this._marks) {
            return null;
          }
          var a = this._times, k = this._kinds, u = this._data, h = new g.TimelineBufferSnapshot(this.name), r = [h], p = 0;
          this._marks || this._initialize();
          this._marks.forEachInReverse(function(h, v) {
            var d = u[h >>> 16 & b.MAX_DATAID], f = k[h & b.MAX_KINDID];
            if (l.isNullOrUndefined(f) || f.visible) {
              var e = h & 2147483648, c = a.get(v), m = r.length;
              if (e === b.LEAVE) {
                if (1 === m && (p++, p > t)) {
                  return !0;
                }
                r.push(new g.TimelineFrame(r[m - 1], f, null, d, NaN, c));
              } else {
                if (e === b.ENTER) {
                  if (f = r.pop(), e = r[r.length - 1]) {
                    for (e.children ? e.children.unshift(f) : e.children = [f], e = r.length, f.depth = e, f.startData = d, f.startTime = c;f;) {
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
          h.children && h.children.length && (h.startTime = h.children[0].startTime, h.endTime = h.children[h.children.length - 1].endTime);
          return h;
        };
        b.prototype.reset = function(b) {
          this._startTime = l.isNullOrUndefined(b) ? performance.now() : b;
          this._marks ? (this._depth = 0, this._data = [], this._marks.reset(), this._times.reset()) : this._initialize();
        };
        b.FromFirefoxProfile = function(g, a) {
          for (var k = g.profile.threads[0].samples, u = new b(a, k[0].time), h = [], r, p = 0;p < k.length;p++) {
            r = k[p];
            var q = r.time, v = r.frames, d = 0;
            for (r = Math.min(v.length, h.length);d < r && v[d].location === h[d].location;) {
              d++;
            }
            for (var f = h.length - d, e = 0;e < f;e++) {
              r = h.pop(), u.leave(r.location, null, q);
            }
            for (;d < v.length;) {
              r = v[d++], u.enter(r.location, null, q);
            }
            h = v;
          }
          for (;r = h.pop();) {
            u.leave(r.location, null, q);
          }
          return u;
        };
        b.FromChromeProfile = function(g, a) {
          var k = g.timestamps, u = g.samples, h = new b(a, k[0] / 1E3), r = [], p = {}, q;
          b._resolveIds(g.head, p);
          for (var v = 0;v < k.length;v++) {
            var d = k[v] / 1E3, f = [];
            for (q = p[u[v]];q;) {
              f.unshift(q), q = q.parent;
            }
            var e = 0;
            for (q = Math.min(f.length, r.length);e < q && f[e] === r[e];) {
              e++;
            }
            for (var c = r.length - e, m = 0;m < c;m++) {
              q = r.pop(), h.leave(q.functionName, null, d);
            }
            for (;e < f.length;) {
              q = f[e++], h.enter(q.functionName, null, d);
            }
            r = f;
          }
          for (;q = r.pop();) {
            h.leave(q.functionName, null, d);
          }
          return h;
        };
        b._resolveIds = function(g, a) {
          a[g.id] = g;
          if (g.children) {
            for (var k = 0;k < g.children.length;k++) {
              g.children[k].parent = g, b._resolveIds(g.children[k], a);
            }
          }
        };
        b.ENTER = 0;
        b.LEAVE = -2147483648;
        b.MAX_KINDID = 65535;
        b.MAX_DATAID = 32767;
        return b;
      }();
      g.TimelineBuffer = b;
    })(n.Profiler || (n.Profiler = {}));
  })(l.Tools || (l.Tools = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(n) {
    (function(g) {
      (function(b) {
        b[b.DARK = 0] = "DARK";
        b[b.LIGHT = 1] = "LIGHT";
      })(g.UIThemeType || (g.UIThemeType = {}));
      var b = function() {
        function b(g, a) {
          void 0 === a && (a = 0);
          this._container = g;
          this._headers = [];
          this._charts = [];
          this._profiles = [];
          this._activeProfile = null;
          this.themeType = a;
          this._tooltip = this._createTooltip();
        }
        b.prototype.createProfile = function(b, a) {
          var k = new g.Profile(b, a);
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
              this._theme = new n.Theme.UIThemeDark;
              break;
            case 1:
              this._theme = new n.Theme.UIThemeLight;
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
            this._overviewHeader = new g.FlameChartHeader(this, 0);
            this._overview = new g.FlameChartOverview(this, 0);
            this._activeProfile.forEachSnapshot(function(a, k) {
              b._headers.push(new g.FlameChartHeader(b, 1));
              b._charts.push(new g.FlameChart(b, a));
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
            this._activeProfile.forEachSnapshot(function(g, h) {
              b._headers[h].initialize(a, k);
              b._charts[h].initialize(a, k);
            });
          }
        };
        b.prototype._onResize = function() {
          if (this._activeProfile) {
            var b = this, a = this._container.offsetWidth;
            this._overviewHeader.setSize(a);
            this._overview.setSize(a);
            this._activeProfile.forEachSnapshot(function(k, g) {
              b._headers[g].setSize(a);
              b._charts[g].setSize(a);
            });
          }
        };
        b.prototype._updateViews = function() {
          if (this._activeProfile) {
            var b = this, a = this._activeProfile.windowStart, k = this._activeProfile.windowEnd;
            this._overviewHeader.setWindow(a, k);
            this._overview.setWindow(a, k);
            this._activeProfile.forEachSnapshot(function(g, h) {
              b._headers[h].setWindow(a, k);
              b._charts[h].setWindow(a, k);
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
        b.prototype.showTooltip = function(b, a, k, g) {
          this.removeTooltipContent();
          this._tooltip.appendChild(this.createTooltipContent(b, a));
          this._tooltip.style.display = "block";
          var h = this._tooltip.firstChild;
          a = h.clientWidth;
          h = h.clientHeight;
          k += k + a >= b.canvas.clientWidth - 50 ? -(a + 20) : 25;
          g += b.canvas.offsetTop - h / 2;
          this._tooltip.style.left = k + "px";
          this._tooltip.style.top = g + "px";
        };
        b.prototype.hideTooltip = function() {
          this._tooltip.style.display = "none";
        };
        b.prototype.createTooltipContent = function(b, a) {
          var k = Math.round(1E5 * a.totalTime) / 1E5, g = Math.round(1E5 * a.selfTime) / 1E5, h = Math.round(1E4 * a.selfTime / a.totalTime) / 100, r = document.createElement("div"), p = document.createElement("h1");
          p.textContent = a.kind.name;
          r.appendChild(p);
          p = document.createElement("p");
          p.textContent = "Total: " + k + " ms";
          r.appendChild(p);
          k = document.createElement("p");
          k.textContent = "Self: " + g + " ms (" + h + "%)";
          r.appendChild(k);
          if (g = b.getStatistics(a.kind)) {
            h = document.createElement("p"), h.textContent = "Count: " + g.count, r.appendChild(h), h = document.createElement("p"), h.textContent = "All Total: " + Math.round(1E5 * g.totalTime) / 1E5 + " ms", r.appendChild(h), h = document.createElement("p"), h.textContent = "All Self: " + Math.round(1E5 * g.selfTime) / 1E5 + " ms", r.appendChild(h);
          }
          this.appendDataElements(r, a.startData);
          this.appendDataElements(r, a.endData);
          return r;
        };
        b.prototype.appendDataElements = function(b, a) {
          if (!l.isNullOrUndefined(a)) {
            b.appendChild(document.createElement("hr"));
            var k;
            if (l.isObject(a)) {
              for (var g in a) {
                k = document.createElement("p"), k.textContent = g + ": " + a[g], b.appendChild(k);
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
      g.Controller = b;
    })(n.Profiler || (n.Profiler = {}));
  })(l.Tools || (l.Tools = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(n) {
    (function(g) {
      var b = l.NumberUtilities.clamp, n = function() {
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
      g.MouseCursor = n;
      var t = function() {
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
            var g = this._eventTarget.parentElement;
            a._cursor !== b && (a._cursor = b, ["", "-moz-", "-webkit-"].forEach(function(a) {
              g.style.cursor = a + b;
            }));
            a._cursorOwner = a._cursor === n.DEFAULT ? null : this._target;
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
          var h = {x:a.x - b.start.x, y:a.y - b.start.y};
          b.current = a;
          b.delta = h;
          b.hasMoved = !0;
          this._target.onDrag(b.start.x, b.start.y, a.x, a.y, h.x, h.y);
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
            var g = this._getTargetMousePos(a, a.target);
            a = b("undefined" !== typeof a.deltaY ? a.deltaY / 16 : -a.wheelDelta / 40, -1, 1);
            this._target.onMouseWheel(g.x, g.y, Math.pow(1.2, a) - 1);
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
          var h = b.getBoundingClientRect();
          return {x:a.clientX - h.left, y:a.clientY - h.top};
        };
        a.HOVER_TIMEOUT = 500;
        a._cursor = n.DEFAULT;
        return a;
      }();
      g.MouseController = t;
    })(n.Profiler || (n.Profiler = {}));
  })(l.Tools || (l.Tools = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(l) {
    (function(g) {
      (function(b) {
        b[b.NONE = 0] = "NONE";
        b[b.WINDOW = 1] = "WINDOW";
        b[b.HANDLE_LEFT = 2] = "HANDLE_LEFT";
        b[b.HANDLE_RIGHT = 3] = "HANDLE_RIGHT";
        b[b.HANDLE_BOTH = 4] = "HANDLE_BOTH";
      })(g.FlameChartDragTarget || (g.FlameChartDragTarget = {}));
      var b = function() {
        function b(l) {
          this._controller = l;
          this._initialized = !1;
          this._canvas = document.createElement("canvas");
          this._context = this._canvas.getContext("2d");
          this._mouseController = new g.MouseController(this, this._canvas);
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
          this.setRange(b, a);
          this.setWindow(b, a, !1);
          this.draw();
        };
        b.prototype.setWindow = function(b, a, k) {
          void 0 === k && (k = !0);
          this._windowStart = b;
          this._windowEnd = a;
          !k || this.draw();
        };
        b.prototype.setRange = function(b, a) {
          var k = !1;
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
        b.prototype._almostEq = function(b, a) {
          var k;
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
        b.prototype.onMouseWheel = function(g, a, k) {
          g = this._toTime(g);
          a = this._windowStart;
          var u = this._windowEnd, h = u - a;
          k = Math.max((b.MIN_WINDOW_LEN - h) / h, k);
          this._controller.setWindow(a + (a - g) * k, u + (u - g) * k);
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
        b.prototype.onDrag = function(b, a, k, g, h, r) {
        };
        b.prototype.onDragEnd = function(b, a, k, g, h, r) {
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
      g.FlameChartBase = b;
    })(l.Profiler || (l.Profiler = {}));
  })(l.Tools || (l.Tools = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(n) {
    (function(g) {
      var b = l.StringUtilities.trimMiddle, n = function(n) {
        function a(a, b) {
          n.call(this, a);
          this._textWidth = {};
          this._minFrameWidthInPixels = 1;
          this._snapshot = b;
          this._kindStyle = Object.create(null);
        }
        __extends(a, n);
        a.prototype.setSize = function(a, b) {
          n.prototype.setSize.call(this, a, b || this._initialized ? 12.5 * this._maxDepth : 100);
        };
        a.prototype.initialize = function(a, b) {
          this._initialized = !0;
          this._maxDepth = this._snapshot.maxDepth;
          this.setRange(a, b);
          this.setWindow(a, b, !1);
          this.setSize(this._width, 12.5 * this._maxDepth);
        };
        a.prototype.destroy = function() {
          n.prototype.destroy.call(this);
          this._snapshot = null;
        };
        a.prototype.draw = function() {
          var a = this._context, b = window.devicePixelRatio;
          l.ColorStyle.reset();
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.bodyBackground(1);
          a.fillRect(0, 0, this._width, this._height);
          this._initialized && this._drawChildren(this._snapshot);
          a.restore();
        };
        a.prototype._drawChildren = function(a, b) {
          void 0 === b && (b = 0);
          var h = a.getChildRange(this._windowStart, this._windowEnd);
          if (h) {
            for (var g = h.startIndex;g <= h.endIndex;g++) {
              var p = a.children[g];
              this._drawFrame(p, b) && this._drawChildren(p, b + 1);
            }
          }
        };
        a.prototype._drawFrame = function(a, b) {
          var h = this._context, g = this._toPixels(a.startTime), p = this._toPixels(a.endTime), q = p - g;
          if (q <= this._minFrameWidthInPixels) {
            return h.fillStyle = this._controller.theme.tabToolbar(1), h.fillRect(g, 12.5 * b, this._minFrameWidthInPixels, 12 + 12.5 * (a.maxDepth - a.depth)), !1;
          }
          0 > g && (p = q + g, g = 0);
          var p = p - g, v = this._kindStyle[a.kind.id];
          v || (v = l.ColorStyle.randomStyle(), v = this._kindStyle[a.kind.id] = {bgColor:v, textColor:l.ColorStyle.contrastStyle(v)});
          h.save();
          h.fillStyle = v.bgColor;
          h.fillRect(g, 12.5 * b, p, 12);
          12 < q && (q = a.kind.name) && q.length && (q = this._prepareText(h, q, p - 4), q.length && (h.fillStyle = v.textColor, h.textBaseline = "bottom", h.fillText(q, g + 2, 12.5 * (b + 1) - 1)));
          h.restore();
          return !0;
        };
        a.prototype._prepareText = function(a, g, h) {
          var r = this._measureWidth(a, g);
          if (h > r) {
            return g;
          }
          for (var r = 3, p = g.length;r < p;) {
            var q = r + p >> 1;
            this._measureWidth(a, b(g, q)) < h ? r = q + 1 : p = q;
          }
          g = b(g, p - 1);
          r = this._measureWidth(a, g);
          return r <= h ? g : "";
        };
        a.prototype._measureWidth = function(a, b) {
          var h = this._textWidth[b];
          h || (h = a.measureText(b).width, this._textWidth[b] = h);
          return h;
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
          var h = 1 + b / 12.5 | 0, g = this._snapshot.query(this._toTime(a));
          if (g && g.depth >= h) {
            for (;g && g.depth > h;) {
              g = g.parent;
            }
            return g;
          }
          return null;
        };
        a.prototype.onMouseDown = function(a, b) {
          this._windowEqRange() || (this._mouseController.updateCursor(g.MouseCursor.ALL_SCROLL), this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:1});
        };
        a.prototype.onMouseMove = function(a, b) {
        };
        a.prototype.onMouseOver = function(a, b) {
        };
        a.prototype.onMouseOut = function() {
        };
        a.prototype.onDrag = function(a, b, h, g, p, q) {
          if (a = this._dragInfo) {
            p = this._toTimeRelative(-p), this._controller.setWindow(a.windowStartInitial + p, a.windowEndInitial + p);
          }
        };
        a.prototype.onDragEnd = function(a, b, h, r, p, q) {
          this._dragInfo = null;
          this._mouseController.updateCursor(g.MouseCursor.DEFAULT);
        };
        a.prototype.onClick = function(a, b) {
          this._dragInfo = null;
          this._mouseController.updateCursor(g.MouseCursor.DEFAULT);
        };
        a.prototype.onHoverStart = function(a, b) {
          var h = this._getFrameAtPosition(a, b);
          h && (this._hoveredFrame = h, this._controller.showTooltip(this, h, a, b));
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
      }(g.FlameChartBase);
      g.FlameChart = n;
    })(n.Profiler || (n.Profiler = {}));
  })(l.Tools || (l.Tools = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(n) {
    (function(g) {
      var b = l.NumberUtilities.clamp;
      (function(b) {
        b[b.OVERLAY = 0] = "OVERLAY";
        b[b.STACK = 1] = "STACK";
        b[b.UNION = 2] = "UNION";
      })(g.FlameChartOverviewMode || (g.FlameChartOverviewMode = {}));
      var n = function(l) {
        function a(a, b) {
          void 0 === b && (b = 1);
          this._mode = b;
          this._overviewCanvasDirty = !0;
          this._overviewCanvas = document.createElement("canvas");
          this._overviewContext = this._overviewCanvas.getContext("2d");
          l.call(this, a);
        }
        __extends(a, l);
        a.prototype.setSize = function(a, b) {
          l.prototype.setSize.call(this, a, b || 64);
        };
        Object.defineProperty(a.prototype, "mode", {set:function(a) {
          this._mode = a;
          this.draw();
        }, enumerable:!0, configurable:!0});
        a.prototype._resetCanvas = function() {
          l.prototype._resetCanvas.call(this);
          this._overviewCanvas.width = this._canvas.width;
          this._overviewCanvas.height = this._canvas.height;
          this._overviewCanvasDirty = !0;
        };
        a.prototype.draw = function() {
          var a = this._context, b = window.devicePixelRatio, h = this._width, g = this._height;
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.bodyBackground(1);
          a.fillRect(0, 0, h, g);
          a.restore();
          this._initialized && (this._overviewCanvasDirty && (this._drawChart(), this._overviewCanvasDirty = !1), a.drawImage(this._overviewCanvas, 0, 0), this._drawSelection());
        };
        a.prototype._drawSelection = function() {
          var a = this._context, b = this._height, h = window.devicePixelRatio, g = this._selection ? this._selection.left : this._toPixels(this._windowStart), p = this._selection ? this._selection.right : this._toPixels(this._windowEnd), q = this._controller.theme;
          a.save();
          a.scale(h, h);
          this._selection ? (a.fillStyle = q.selectionText(.15), a.fillRect(g, 1, p - g, b - 1), a.fillStyle = "rgba(133, 0, 0, 1)", a.fillRect(g + .5, 0, p - g - 1, 4), a.fillRect(g + .5, b - 4, p - g - 1, 4)) : (a.fillStyle = q.bodyBackground(.4), a.fillRect(0, 1, g, b - 1), a.fillRect(p, 1, this._width, b - 1));
          a.beginPath();
          a.moveTo(g, 0);
          a.lineTo(g, b);
          a.moveTo(p, 0);
          a.lineTo(p, b);
          a.lineWidth = .5;
          a.strokeStyle = q.foregroundTextGrey(1);
          a.stroke();
          b = Math.abs((this._selection ? this._toTime(this._selection.right) : this._windowEnd) - (this._selection ? this._toTime(this._selection.left) : this._windowStart));
          a.fillStyle = q.selectionText(.5);
          a.font = "8px sans-serif";
          a.textBaseline = "alphabetic";
          a.textAlign = "end";
          a.fillText(b.toFixed(2), Math.min(g, p) - 4, 10);
          a.fillText((b / 60).toFixed(2), Math.min(g, p) - 4, 20);
          a.restore();
        };
        a.prototype._drawChart = function() {
          var a = window.devicePixelRatio, b = this._height, h = this._controller.activeProfile, g = 4 * this._width, p = h.totalTime / g, q = this._overviewContext, l = this._controller.theme.blueHighlight(1);
          q.save();
          q.translate(0, a * b);
          var d = -a * b / (h.maxDepth - 1);
          q.scale(a / 4, d);
          q.clearRect(0, 0, g, h.maxDepth - 1);
          1 == this._mode && q.scale(1, 1 / h.snapshotCount);
          for (var f = 0, e = h.snapshotCount;f < e;f++) {
            var c = h.getSnapshotAt(f);
            if (c) {
              var m = null, x = 0;
              q.beginPath();
              q.moveTo(0, 0);
              for (var F = 0;F < g;F++) {
                x = h.startTime + F * p, x = (m = m ? m.queryNext(x) : c.query(x)) ? m.getDepth() - 1 : 0, q.lineTo(F, x);
              }
              q.lineTo(F, 0);
              q.fillStyle = l;
              q.fill();
              1 == this._mode && q.translate(0, -b * a / d);
            }
          }
          q.restore();
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
            var h = this._toPixels(this._windowStart), r = this._toPixels(this._windowEnd), p = 2 + g.FlameChartBase.DRAGHANDLE_WIDTH / 2, q = a >= h - p && a <= h + p, l = a >= r - p && a <= r + p;
            if (q && l) {
              return 4;
            }
            if (q) {
              return 2;
            }
            if (l) {
              return 3;
            }
            if (!this._windowEqRange() && a > h + p && a < r - p) {
              return 1;
            }
          }
          return 0;
        };
        a.prototype.onMouseDown = function(a, b) {
          var h = this._getDragTargetUnderCursor(a, b);
          0 === h ? (this._selection = {left:a, right:a}, this.draw()) : (1 === h && this._mouseController.updateCursor(g.MouseCursor.GRABBING), this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:h});
        };
        a.prototype.onMouseMove = function(a, b) {
          var h = g.MouseCursor.DEFAULT, r = this._getDragTargetUnderCursor(a, b);
          0 === r || this._selection || (h = 1 === r ? g.MouseCursor.GRAB : g.MouseCursor.EW_RESIZE);
          this._mouseController.updateCursor(h);
        };
        a.prototype.onMouseOver = function(a, b) {
          this.onMouseMove(a, b);
        };
        a.prototype.onMouseOut = function() {
          this._mouseController.updateCursor(g.MouseCursor.DEFAULT);
        };
        a.prototype.onDrag = function(a, l, h, r, p, q) {
          if (this._selection) {
            this._selection = {left:a, right:b(h, 0, this._width - 1)}, this.draw();
          } else {
            a = this._dragInfo;
            if (4 === a.target) {
              if (0 !== p) {
                a.target = 0 > p ? 2 : 3;
              } else {
                return;
              }
            }
            l = this._windowStart;
            h = this._windowEnd;
            p = this._toTimeRelative(p);
            switch(a.target) {
              case 1:
                l = a.windowStartInitial + p;
                h = a.windowEndInitial + p;
                break;
              case 2:
                l = b(a.windowStartInitial + p, this._rangeStart, h - g.FlameChartBase.MIN_WINDOW_LEN);
                break;
              case 3:
                h = b(a.windowEndInitial + p, l + g.FlameChartBase.MIN_WINDOW_LEN, this._rangeEnd);
                break;
              default:
                return;
            }
            this._controller.setWindow(l, h);
          }
        };
        a.prototype.onDragEnd = function(a, b, h, g, p, q) {
          this._selection && (this._selection = null, this._controller.setWindow(this._toTime(a), this._toTime(h)));
          this._dragInfo = null;
          this.onMouseMove(h, g);
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
      }(g.FlameChartBase);
      g.FlameChartOverview = n;
    })(n.Profiler || (n.Profiler = {}));
  })(l.Tools || (l.Tools = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(n) {
    (function(g) {
      var b = l.NumberUtilities.clamp;
      (function(b) {
        b[b.OVERVIEW = 0] = "OVERVIEW";
        b[b.CHART = 1] = "CHART";
      })(g.FlameChartHeaderType || (g.FlameChartHeaderType = {}));
      var n = function(l) {
        function a(a, b) {
          this._type = b;
          l.call(this, a);
        }
        __extends(a, l);
        a.prototype.draw = function() {
          var a = this._context, b = window.devicePixelRatio, h = this._width, g = this._height;
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.tabToolbar(1);
          a.fillRect(0, 0, h, g);
          this._initialized && (0 == this._type ? (b = this._toPixels(this._windowStart), h = this._toPixels(this._windowEnd), a.fillStyle = this._controller.theme.bodyBackground(1), a.fillRect(b, 0, h - b, g), this._drawLabels(this._rangeStart, this._rangeEnd), this._drawDragHandle(b), this._drawDragHandle(h)) : this._drawLabels(this._windowStart, this._windowEnd));
          a.restore();
        };
        a.prototype._drawLabels = function(b, g) {
          var h = this._context, r = this._calculateTickInterval(b, g), p = Math.ceil(b / r) * r, q = 500 <= r, l = q ? 1E3 : 1, d = this._decimalPlaces(r / l), q = q ? "s" : "ms", f = this._toPixels(p), e = this._height / 2, c = this._controller.theme;
          h.lineWidth = 1;
          h.strokeStyle = c.contentTextDarkGrey(.5);
          h.fillStyle = c.contentTextDarkGrey(1);
          h.textAlign = "right";
          h.textBaseline = "middle";
          h.font = "11px sans-serif";
          for (c = this._width + a.TICK_MAX_WIDTH;f < c;) {
            h.fillText((p / l).toFixed(d) + " " + q, f - 7, e + 1), h.beginPath(), h.moveTo(f, 0), h.lineTo(f, this._height + 1), h.closePath(), h.stroke(), p += r, f = this._toPixels(p);
          }
        };
        a.prototype._calculateTickInterval = function(b, g) {
          var h = (g - b) / (this._width / a.TICK_MAX_WIDTH), r = Math.pow(10, Math.floor(Math.log(h) / Math.LN10)), h = h / r;
          return 5 < h ? 10 * r : 2 < h ? 5 * r : 1 < h ? 2 * r : r;
        };
        a.prototype._drawDragHandle = function(a) {
          var b = this._context;
          b.lineWidth = 2;
          b.strokeStyle = this._controller.theme.bodyBackground(1);
          b.fillStyle = this._controller.theme.foregroundTextGrey(.7);
          this._drawRoundedRect(b, a - g.FlameChartBase.DRAGHANDLE_WIDTH / 2, g.FlameChartBase.DRAGHANDLE_WIDTH, this._height - 2);
        };
        a.prototype._drawRoundedRect = function(a, b, h, g) {
          var p, q = !0;
          void 0 === q && (q = !0);
          void 0 === p && (p = !0);
          a.beginPath();
          a.moveTo(b + 2, 1);
          a.lineTo(b + h - 2, 1);
          a.quadraticCurveTo(b + h, 1, b + h, 3);
          a.lineTo(b + h, 1 + g - 2);
          a.quadraticCurveTo(b + h, 1 + g, b + h - 2, 1 + g);
          a.lineTo(b + 2, 1 + g);
          a.quadraticCurveTo(b, 1 + g, b, 1 + g - 2);
          a.lineTo(b, 3);
          a.quadraticCurveTo(b, 1, b + 2, 1);
          a.closePath();
          q && a.stroke();
          p && a.fill();
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
              var h = this._toPixels(this._windowStart), r = this._toPixels(this._windowEnd), p = 2 + g.FlameChartBase.DRAGHANDLE_WIDTH / 2, h = a >= h - p && a <= h + p, r = a >= r - p && a <= r + p;
              if (h && r) {
                return 4;
              }
              if (h) {
                return 2;
              }
              if (r) {
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
          var h = this._getDragTargetUnderCursor(a, b);
          1 === h && this._mouseController.updateCursor(g.MouseCursor.GRABBING);
          this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:h};
        };
        a.prototype.onMouseMove = function(a, b) {
          var h = g.MouseCursor.DEFAULT, r = this._getDragTargetUnderCursor(a, b);
          0 !== r && (1 !== r ? h = g.MouseCursor.EW_RESIZE : 1 !== r || this._windowEqRange() || (h = g.MouseCursor.GRAB));
          this._mouseController.updateCursor(h);
        };
        a.prototype.onMouseOver = function(a, b) {
          this.onMouseMove(a, b);
        };
        a.prototype.onMouseOut = function() {
          this._mouseController.updateCursor(g.MouseCursor.DEFAULT);
        };
        a.prototype.onDrag = function(a, l, h, r, p, q) {
          a = this._dragInfo;
          if (4 === a.target) {
            if (0 !== p) {
              a.target = 0 > p ? 2 : 3;
            } else {
              return;
            }
          }
          l = this._windowStart;
          h = this._windowEnd;
          p = this._toTimeRelative(p);
          switch(a.target) {
            case 1:
              h = 0 === this._type ? 1 : -1;
              l = a.windowStartInitial + h * p;
              h = a.windowEndInitial + h * p;
              break;
            case 2:
              l = b(a.windowStartInitial + p, this._rangeStart, h - g.FlameChartBase.MIN_WINDOW_LEN);
              break;
            case 3:
              h = b(a.windowEndInitial + p, l + g.FlameChartBase.MIN_WINDOW_LEN, this._rangeEnd);
              break;
            default:
              return;
          }
          this._controller.setWindow(l, h);
        };
        a.prototype.onDragEnd = function(a, b, h, g, p, q) {
          this._dragInfo = null;
          this.onMouseMove(h, g);
        };
        a.prototype.onClick = function(a, b) {
          1 === this._dragInfo.target && this._mouseController.updateCursor(g.MouseCursor.GRAB);
        };
        a.prototype.onHoverStart = function(a, b) {
        };
        a.prototype.onHoverEnd = function() {
        };
        a.TICK_MAX_WIDTH = 75;
        return a;
      }(g.FlameChartBase);
      g.FlameChartHeader = n;
    })(n.Profiler || (n.Profiler = {}));
  })(l.Tools || (l.Tools = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(l) {
    (function(g) {
      (function(b) {
        var g = function() {
          function a(a, b, h, g, p) {
            this.pageLoaded = a;
            this.threadsTotal = b;
            this.threadsLoaded = h;
            this.threadFilesTotal = g;
            this.threadFilesLoaded = p;
          }
          a.prototype.toString = function() {
            return "[" + ["pageLoaded", "threadsTotal", "threadsLoaded", "threadFilesTotal", "threadFilesLoaded"].map(function(a, b, h) {
              return a + ":" + this[a];
            }, this).join(", ") + "]";
          };
          return a;
        }();
        b.TraceLoggerProgressInfo = g;
        var l = function() {
          function a(a) {
            this._baseUrl = a;
            this._threads = [];
            this._progressInfo = null;
          }
          a.prototype.loadPage = function(a, b, h) {
            this._threads = [];
            this._pageLoadCallback = b;
            this._pageLoadProgressCallback = h;
            this._progressInfo = new g(!1, 0, 0, 0, 0);
            this._loadData([a], this._onLoadPage.bind(this));
          };
          Object.defineProperty(a.prototype, "buffers", {get:function() {
            for (var a = [], b = 0, h = this._threads.length;b < h;b++) {
              a.push(this._threads[b].buffer);
            }
            return a;
          }, enumerable:!0, configurable:!0});
          a.prototype._onProgress = function() {
            this._pageLoadProgressCallback && this._pageLoadProgressCallback.call(this, this._progressInfo);
          };
          a.prototype._onLoadPage = function(a) {
            if (a && 1 == a.length) {
              var g = this, h = 0;
              a = a[0];
              var r = a.length;
              this._threads = Array(r);
              this._progressInfo.pageLoaded = !0;
              this._progressInfo.threadsTotal = r;
              for (var p = 0;p < a.length;p++) {
                var q = a[p], l = [q.dict, q.tree];
                q.corrections && l.push(q.corrections);
                this._progressInfo.threadFilesTotal += l.length;
                this._loadData(l, function(a) {
                  return function(f) {
                    f && (f = new b.Thread(f), f.buffer.name = "Thread " + a, g._threads[a] = f);
                    h++;
                    g._progressInfo.threadsLoaded++;
                    g._onProgress();
                    h === r && g._pageLoadCallback.call(g, null, g._threads);
                  };
                }(p), function(a) {
                  g._progressInfo.threadFilesLoaded++;
                  g._onProgress();
                });
              }
              this._onProgress();
            } else {
              this._pageLoadCallback.call(this, "Error loading page.", null);
            }
          };
          a.prototype._loadData = function(a, b, h) {
            var g = 0, p = 0, q = a.length, l = [];
            l.length = q;
            for (var d = 0;d < q;d++) {
              var f = this._baseUrl + a[d], e = new XMLHttpRequest, c = /\.tl$/i.test(f) ? "arraybuffer" : "json";
              e.open("GET", f, !0);
              e.responseType = c;
              e.onload = function(c, e) {
                return function(a) {
                  if ("json" === e) {
                    if (a = this.response, "string" === typeof a) {
                      try {
                        a = JSON.parse(a), l[c] = a;
                      } catch (f) {
                        p++;
                      }
                    } else {
                      l[c] = a;
                    }
                  } else {
                    l[c] = this.response;
                  }
                  ++g;
                  h && h(g);
                  g === q && b(l);
                };
              }(d, c);
              e.send();
            }
          };
          a.colors = "#0044ff #8c4b00 #cc5c33 #ff80c4 #ffbfd9 #ff8800 #8c5e00 #adcc33 #b380ff #bfd9ff #ffaa00 #8c0038 #bf8f30 #f780ff #cc99c9 #aaff00 #000073 #452699 #cc8166 #cca799 #000066 #992626 #cc6666 #ccc299 #ff6600 #526600 #992663 #cc6681 #99ccc2 #ff0066 #520066 #269973 #61994d #739699 #ffcc00 #006629 #269199 #94994d #738299 #ff0000 #590000 #234d8c #8c6246 #7d7399 #ee00ff #00474d #8c2385 #8c7546 #7c8c69 #eeff00 #4d003d #662e1a #62468c #8c6969 #6600ff #4c2900 #1a6657 #8c464f #8c6981 #44ff00 #401100 #1a2466 #663355 #567365 #d90074 #403300 #101d40 #59562d #66614d #cc0000 #002b40 #234010 #4c2626 #4d5e66 #00a3cc #400011 #231040 #4c3626 #464359 #0000bf #331b00 #80e6ff #311a33 #4d3939 #a69b00 #003329 #80ffb2 #331a20 #40303d #00a658 #40ffd9 #ffc480 #ffe1bf #332b26 #8c2500 #9933cc #80fff6 #ffbfbf #303326 #005e8c #33cc47 #b2ff80 #c8bfff #263332 #00708c #cc33ad #ffe680 #f2ffbf #262a33 #388c00 #335ccc #8091ff #bfffd9".split(" ");
          return a;
        }();
        b.TraceLogger = l;
      })(g.TraceLogger || (g.TraceLogger = {}));
    })(l.Profiler || (l.Profiler = {}));
  })(l.Tools || (l.Tools = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(l) {
    (function(g) {
      (function(b) {
        var l;
        (function(b) {
          b[b.START_HI = 0] = "START_HI";
          b[b.START_LO = 4] = "START_LO";
          b[b.STOP_HI = 8] = "STOP_HI";
          b[b.STOP_LO = 12] = "STOP_LO";
          b[b.TEXTID = 16] = "TEXTID";
          b[b.NEXTID = 20] = "NEXTID";
        })(l || (l = {}));
        l = function() {
          function b(a) {
            2 <= a.length && (this._text = a[0], this._data = new DataView(a[1]), this._buffer = new g.TimelineBuffer, this._walkTree(0));
          }
          Object.defineProperty(b.prototype, "buffer", {get:function() {
            return this._buffer;
          }, enumerable:!0, configurable:!0});
          b.prototype._walkTree = function(a) {
            var g = this._data, l = this._buffer;
            do {
              var h = a * b.ITEM_SIZE, r = 4294967295 * g.getUint32(h + 0) + g.getUint32(h + 4), p = 4294967295 * g.getUint32(h + 8) + g.getUint32(h + 12), q = g.getUint32(h + 16), h = g.getUint32(h + 20), v = 1 === (q & 1), q = q >>> 1, q = this._text[q];
              l.enter(q, null, r / 1E6);
              v && this._walkTree(a + 1);
              l.leave(q, null, p / 1E6);
              a = h;
            } while (0 !== a);
          };
          b.ITEM_SIZE = 24;
          return b;
        }();
        b.Thread = l;
      })(g.TraceLogger || (g.TraceLogger = {}));
    })(l.Profiler || (l.Profiler = {}));
  })(l.Tools || (l.Tools = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(n) {
    (function(g) {
      var b = l.NumberUtilities.clamp, n = function() {
        function a() {
          this.length = 0;
          this.lines = [];
          this.format = [];
          this.time = [];
          this.repeat = [];
          this.length = 0;
        }
        a.prototype.append = function(a, b) {
          var h = this.lines;
          0 < h.length && h[h.length - 1] === a ? this.repeat[h.length - 1]++ : (this.lines.push(a), this.repeat.push(1), this.format.push(b ? {backgroundFillStyle:b} : void 0), this.time.push(performance.now()), this.length++);
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
      g.Buffer = n;
      var t = function() {
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
          this.buffer = new n;
          a.addEventListener("keydown", function(a) {
            var k = 0;
            switch(a.keyCode) {
              case F:
                this.printHelp();
                break;
              case m:
                this.showLineNumbers = !this.showLineNumbers;
                break;
              case x:
                this.showLineTime = !this.showLineTime;
                break;
              case q:
                k = -1;
                break;
              case l:
                k = 1;
                break;
              case b:
                k = -this.pageLineCount;
                break;
              case h:
                k = this.pageLineCount;
                break;
              case g:
                k = -this.lineIndex;
                break;
              case p:
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
              case I:
                if (a.metaKey || a.ctrlKey) {
                  var J = "";
                  if (this.selection) {
                    for (var n = this.selection.start;n <= this.selection.end;n++) {
                      J += this.buffer.get(n) + "\n";
                    }
                  } else {
                    J = this.buffer.get(this.lineIndex);
                  }
                  a.keyCode === c ? alert(J) : window.open(URL.createObjectURL(new Blob([J], {type:"text/plain"})), "_blank");
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
          var b = 33, h = 34, g = 36, p = 35, q = 38, l = 40, d = 37, f = 39, e = 65, c = 67, m = 78, x = 84, F = 72, I = 83;
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
          var a = this.canvas.parentElement, b = a.clientWidth, a = a.clientHeight && a.clientHeight - 1, h = window.devicePixelRatio || 1;
          1 !== h ? (this.ratio = h / 1, this.canvas.width = b * this.ratio, this.canvas.height = a * this.ratio, this.canvas.style.width = b + "px", this.canvas.style.height = a + "px") : (this.ratio = 1, this.canvas.width = b, this.canvas.height = a);
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
          var b = this.textMarginLeft, h = b + (this.showLineNumbers ? 5 * (String(this.buffer.length).length + 2) : 0), g = h + (this.showLineTime ? 40 : 10), p = g + 25;
          this.context.font = this.fontSize + 'px Consolas, "Liberation Mono", Courier, monospace';
          this.context.setTransform(this.ratio, 0, 0, this.ratio, 0, 0);
          for (var q = this.canvas.width, l = this.lineHeight, d = 0;d < a;d++) {
            var f = d * this.lineHeight, e = this.pageIndex + d, c = this.buffer.get(e), m = this.buffer.getFormat(e), x = this.buffer.getRepeat(e), F = 1 < e ? this.buffer.getTime(e) - this.buffer.getTime(0) : 0;
            this.context.fillStyle = e % 2 ? this.lineColor : this.alternateLineColor;
            m && m.backgroundFillStyle && (this.context.fillStyle = m.backgroundFillStyle);
            this.context.fillRect(0, f, q, l);
            this.context.fillStyle = this.selectionTextColor;
            this.context.fillStyle = this.textColor;
            this.selection && e >= this.selection.start && e <= this.selection.end && (this.context.fillStyle = this.selectionColor, this.context.fillRect(0, f, q, l), this.context.fillStyle = this.selectionTextColor);
            this.hasFocus && e === this.lineIndex && (this.context.fillStyle = this.selectionColor, this.context.fillRect(0, f, q, l), this.context.fillStyle = this.selectionTextColor);
            0 < this.columnIndex && (c = c.substring(this.columnIndex));
            f = (d + 1) * this.lineHeight - this.textMarginBottom;
            this.showLineNumbers && this.context.fillText(String(e), b, f);
            this.showLineTime && this.context.fillText(F.toFixed(1).padLeft(" ", 6), h, f);
            1 < x && this.context.fillText(String(x).padLeft(" ", 3), g, f);
            this.context.fillText(c, p, f);
          }
        };
        a.prototype.refreshEvery = function(a) {
          function b() {
            h.paint();
            h.refreshFrequency && setTimeout(b, h.refreshFrequency);
          }
          var h = this;
          this.refreshFrequency = a;
          h.refreshFrequency && setTimeout(b, h.refreshFrequency);
        };
        a.prototype.isScrolledToBottom = function() {
          return this.lineIndex === this.buffer.length - 1;
        };
        return a;
      }();
      g.Terminal = t;
    })(n.Terminal || (n.Terminal = {}));
  })(l.Tools || (l.Tools = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(l) {
    (function(g) {
      var b = function() {
        function b(g) {
          this._lastWeightedTime = this._lastTime = this._index = 0;
          this._gradient = "#FF0000 #FF1100 #FF2300 #FF3400 #FF4600 #FF5700 #FF6900 #FF7B00 #FF8C00 #FF9E00 #FFAF00 #FFC100 #FFD300 #FFE400 #FFF600 #F7FF00 #E5FF00 #D4FF00 #C2FF00 #B0FF00 #9FFF00 #8DFF00 #7CFF00 #6AFF00 #58FF00 #47FF00 #35FF00 #24FF00 #12FF00 #00FF00".split(" ");
          this._container = g;
          this._canvas = document.createElement("canvas");
          this._container.appendChild(this._canvas);
          this._context = this._canvas.getContext("2d");
          this._listenForContainerSizeChanges();
        }
        b.prototype._listenForContainerSizeChanges = function() {
          var b = this._containerWidth, a = this._containerHeight;
          this._onContainerSizeChanged();
          var g = this;
          setInterval(function() {
            if (b !== g._containerWidth || a !== g._containerHeight) {
              g._onContainerSizeChanged(), b = g._containerWidth, a = g._containerHeight;
            }
          }, 10);
        };
        b.prototype._onContainerSizeChanged = function() {
          var b = this._containerWidth, a = this._containerHeight, g = window.devicePixelRatio || 1;
          1 !== g ? (this._ratio = g / 1, this._canvas.width = b * this._ratio, this._canvas.height = a * this._ratio, this._canvas.style.width = b + "px", this._canvas.style.height = a + "px") : (this._ratio = 1, this._canvas.width = b, this._canvas.height = a);
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
            var g = 1 * (performance.now() - this._lastTime) + 0 * this._lastWeightedTime, l = this._context, h = 2 * this._ratio, r = 30 * this._ratio, p = performance;
            p.memory && (r += 30 * this._ratio);
            var q = (this._canvas.width - r) / (h + 1) | 0, v = this._index++;
            this._index > q && (this._index = 0);
            q = this._canvas.height;
            l.globalAlpha = 1;
            l.fillStyle = "black";
            l.fillRect(r + v * (h + 1), 0, 4 * h, this._canvas.height);
            var d = Math.min(1E3 / 60 / g, 1);
            l.fillStyle = "#00FF00";
            l.globalAlpha = b ? .5 : 1;
            d = q / 2 * d | 0;
            l.fillRect(r + v * (h + 1), q - d, h, d);
            a && (d = Math.min(1E3 / 240 / a, 1), l.fillStyle = "#FF6347", d = q / 2 * d | 0, l.fillRect(r + v * (h + 1), q / 2 - d, h, d));
            0 === v % 16 && (l.globalAlpha = 1, l.fillStyle = "black", l.fillRect(0, 0, r, this._canvas.height), l.fillStyle = "white", l.font = 8 * this._ratio + "px Arial", l.textBaseline = "middle", h = (1E3 / g).toFixed(0), a && (h += " " + a.toFixed(0)), p.memory && (h += " " + (p.memory.usedJSHeapSize / 1024 / 1024).toFixed(2)), l.fillText(h, 2 * this._ratio, this._containerHeight / 2 * this._ratio));
            this._lastTime = performance.now();
            this._lastWeightedTime = g;
          }
        };
        return b;
      }();
      g.FPS = b;
    })(l.Mini || (l.Mini = {}));
  })(l.Tools || (l.Tools = {}));
})(Shumway || (Shumway = {}));
console.timeEnd("Load Shared Dependencies");
console.time("Load GFX Dependencies");
(function(l) {
  (function(n) {
    function g(c, e, a) {
      return u && a ? "string" === typeof e ? (c = l.ColorUtilities.cssStyleToRGBA(e), l.ColorUtilities.rgbaToCSSStyle(a.transformRGBA(c))) : e instanceof CanvasGradient && e._template ? e._template.createCanvasGradient(c, a) : e : e;
    }
    var b = l.NumberUtilities.clamp;
    (function(c) {
      c[c.None = 0] = "None";
      c[c.Brief = 1] = "Brief";
      c[c.Verbose = 2] = "Verbose";
    })(n.TraceLevel || (n.TraceLevel = {}));
    var w = l.Metrics.Counter.instance;
    n.frameCounter = new l.Metrics.Counter(!0);
    n.traceLevel = 2;
    n.writer = null;
    n.frameCount = function(c) {
      w.count(c);
      n.frameCounter.count(c);
    };
    n.timelineBuffer = new l.Tools.Profiler.TimelineBuffer("GFX");
    n.enterTimeline = function(c, e) {
    };
    n.leaveTimeline = function(c, e) {
    };
    var t = null, a = null, k = null, u = !0;
    u && "undefined" !== typeof CanvasRenderingContext2D && (t = CanvasGradient.prototype.addColorStop, a = CanvasRenderingContext2D.prototype.createLinearGradient, k = CanvasRenderingContext2D.prototype.createRadialGradient, CanvasRenderingContext2D.prototype.createLinearGradient = function(c, e, a, f) {
      return (new r(c, e, a, f)).createCanvasGradient(this, null);
    }, CanvasRenderingContext2D.prototype.createRadialGradient = function(c, e, a, f, d, b) {
      return (new p(c, e, a, f, d, b)).createCanvasGradient(this, null);
    }, CanvasGradient.prototype.addColorStop = function(c, e) {
      t.call(this, c, e);
      this._template.addColorStop(c, e);
    });
    var h = function() {
      return function(c, e) {
        this.offset = c;
        this.color = e;
      };
    }(), r = function() {
      function c(e, a, f, d) {
        this.x0 = e;
        this.y0 = a;
        this.x1 = f;
        this.y1 = d;
        this.colorStops = [];
      }
      c.prototype.addColorStop = function(c, e) {
        this.colorStops.push(new h(c, e));
      };
      c.prototype.createCanvasGradient = function(c, e) {
        for (var f = a.call(c, this.x0, this.y0, this.x1, this.y1), d = this.colorStops, b = 0;b < d.length;b++) {
          var m = d[b], h = m.offset, m = m.color, m = e ? g(c, m, e) : m;
          t.call(f, h, m);
        }
        f._template = this;
        f._transform = this._transform;
        return f;
      };
      return c;
    }(), p = function() {
      function c(e, a, f, d, b, m) {
        this.x0 = e;
        this.y0 = a;
        this.r0 = f;
        this.x1 = d;
        this.y1 = b;
        this.r1 = m;
        this.colorStops = [];
      }
      c.prototype.addColorStop = function(c, e) {
        this.colorStops.push(new h(c, e));
      };
      c.prototype.createCanvasGradient = function(c, e) {
        for (var a = k.call(c, this.x0, this.y0, this.r0, this.x1, this.y1, this.r1), f = this.colorStops, d = 0;d < f.length;d++) {
          var b = f[d], m = b.offset, b = b.color, b = e ? g(c, b, e) : b;
          t.call(a, m, b);
        }
        a._template = this;
        a._transform = this._transform;
        return a;
      };
      return c;
    }(), q;
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
    })(q || (q = {}));
    var v = function() {
      function c(e) {
        this._commands = new Uint8Array(c._arrayBufferPool.acquire(8), 0, 8);
        this._commandPosition = 0;
        this._data = new Float64Array(c._arrayBufferPool.acquire(8 * Float64Array.BYTES_PER_ELEMENT), 0, 8);
        this._dataPosition = 0;
        e instanceof c && this.addPath(e);
      }
      c._apply = function(c, e) {
        var a = c._commands, f = c._data, d = 0, b = 0;
        e.beginPath();
        for (var m = c._commandPosition;d < m;) {
          switch(a[d++]) {
            case 1:
              e.closePath();
              break;
            case 2:
              e.moveTo(f[b++], f[b++]);
              break;
            case 3:
              e.lineTo(f[b++], f[b++]);
              break;
            case 4:
              e.quadraticCurveTo(f[b++], f[b++], f[b++], f[b++]);
              break;
            case 5:
              e.bezierCurveTo(f[b++], f[b++], f[b++], f[b++], f[b++], f[b++]);
              break;
            case 6:
              e.arcTo(f[b++], f[b++], f[b++], f[b++], f[b++]);
              break;
            case 7:
              e.rect(f[b++], f[b++], f[b++], f[b++]);
              break;
            case 8:
              e.arc(f[b++], f[b++], f[b++], f[b++], f[b++], !!f[b++]);
              break;
            case 9:
              e.save();
              break;
            case 10:
              e.restore();
              break;
            case 11:
              e.transform(f[b++], f[b++], f[b++], f[b++], f[b++], f[b++]);
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
      c.prototype._writeData = function(c, e, a, f, d, b) {
        var m = arguments.length;
        this._dataPosition + m >= this._data.length && this._ensureDataCapacity(this._dataPosition + m);
        var h = this._data, x = this._dataPosition;
        h[x] = c;
        h[x + 1] = e;
        2 < m && (h[x + 2] = a, h[x + 3] = f, 4 < m && (h[x + 4] = d, 6 === m && (h[x + 5] = b)));
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
      c.prototype.quadraticCurveTo = function(c, e, a, f) {
        this._writeCommand(4);
        this._writeData(c, e, a, f);
      };
      c.prototype.bezierCurveTo = function(c, e, a, f, d, b) {
        this._writeCommand(5);
        this._writeData(c, e, a, f, d, b);
      };
      c.prototype.arcTo = function(c, e, a, f, d) {
        this._writeCommand(6);
        this._writeData(c, e, a, f, d);
      };
      c.prototype.rect = function(c, e, a, f) {
        this._writeCommand(7);
        this._writeData(c, e, a, f);
      };
      c.prototype.arc = function(c, e, a, f, d, b) {
        this._writeCommand(8);
        this._writeData(c, e, a, f, d, +b);
      };
      c.prototype.addPath = function(c, e) {
        e && (this._writeCommand(9), this._writeCommand(11), this._writeData(e.a, e.b, e.c, e.d, e.e, e.f));
        var a = this._commandPosition + c._commandPosition;
        a >= this._commands.length && this._ensureCommandCapacity(a);
        for (var f = this._commands, d = c._commands, b = this._commandPosition, m = 0;b < a;b++) {
          f[b] = d[m++];
        }
        this._commandPosition = a;
        a = this._dataPosition + c._dataPosition;
        a >= this._data.length && this._ensureDataCapacity(a);
        f = this._data;
        d = c._data;
        b = this._dataPosition;
        for (m = 0;b < a;b++) {
          f[b] = d[m++];
        }
        this._dataPosition = a;
        e && this._writeCommand(10);
      };
      c._arrayBufferPool = new l.ArrayBufferPool;
      return c;
    }();
    n.Path = v;
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
      q = function(c) {
        this._transform = c;
        this._template && (this._template._transform = c);
      };
      CanvasPattern.prototype.setTransform || (CanvasPattern.prototype.setTransform = q);
      CanvasGradient.prototype.setTransform || (CanvasGradient.prototype.setTransform = q);
      var c = CanvasRenderingContext2D.prototype.fill, m = CanvasRenderingContext2D.prototype.stroke;
      CanvasRenderingContext2D.prototype.fill = function(e, a) {
        var f = !!this.fillStyle._transform;
        if ((this.fillStyle instanceof CanvasPattern || this.fillStyle instanceof CanvasGradient) && f && e instanceof Path2D) {
          var f = this.fillStyle._transform, d;
          try {
            d = f.inverse();
          } catch (b) {
            d = f = n.Geometry.Matrix.createIdentitySVGMatrix();
          }
          this.transform(f.a, f.b, f.c, f.d, f.e, f.f);
          f = new Path2D;
          f.addPath(e, d);
          c.call(this, f, a);
          this.transform(d.a, d.b, d.c, d.d, d.e, d.f);
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
          var f = this.lineWidth;
          this.lineWidth *= (e.a + e.d) / 2;
          m.call(this, a);
          this.transform(e.a, e.b, e.c, e.d, e.e, e.f);
          this.lineWidth = f;
        } else {
          0 === arguments.length ? m.call(this) : 1 === arguments.length && m.call(this, c);
        }
      };
    }
    "undefined" !== typeof CanvasRenderingContext2D && function() {
      function c() {
        return n.Geometry.Matrix.createSVGMatrixFromArray(this.mozCurrentTransform);
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
          CanvasRenderingContext2D.prototype.setTransform = function(c, e, f, d, b, m) {
            var h = this.currentTransform;
            h.a = c;
            h.b = e;
            h.c = f;
            h.d = d;
            h.e = b;
            h.f = m;
            a.call(this, c, e, f, d, b, m);
          };
          Object.defineProperty(CanvasRenderingContext2D.prototype, "currentTransform", {get:function() {
            return this._currentTransform || (this._currentTransform = n.Geometry.Matrix.createIdentitySVGMatrix());
          }});
        }
      }
    }();
    if ("undefined" !== typeof CanvasRenderingContext2D && void 0 === CanvasRenderingContext2D.prototype.globalColorMatrix) {
      var x = CanvasRenderingContext2D.prototype.fill, F = CanvasRenderingContext2D.prototype.stroke, I = CanvasRenderingContext2D.prototype.fillText, W = CanvasRenderingContext2D.prototype.strokeText;
      Object.defineProperty(CanvasRenderingContext2D.prototype, "globalColorMatrix", {get:function() {
        return this._globalColorMatrix ? this._globalColorMatrix.clone() : null;
      }, set:function(c) {
        c ? this._globalColorMatrix ? this._globalColorMatrix.set(c) : this._globalColorMatrix = c.clone() : this._globalColorMatrix = null;
      }, enumerable:!0, configurable:!0});
      CanvasRenderingContext2D.prototype.fill = function(c, e) {
        var a = null;
        this._globalColorMatrix && (a = this.fillStyle, this.fillStyle = g(this, this.fillStyle, this._globalColorMatrix));
        0 === arguments.length ? x.call(this) : 1 === arguments.length ? x.call(this, c) : 2 === arguments.length && x.call(this, c, e);
        a && (this.fillStyle = a);
      };
      CanvasRenderingContext2D.prototype.stroke = function(c, e) {
        var a = null;
        this._globalColorMatrix && (a = this.strokeStyle, this.strokeStyle = g(this, this.strokeStyle, this._globalColorMatrix));
        0 === arguments.length ? F.call(this) : 1 === arguments.length && F.call(this, c);
        a && (this.strokeStyle = a);
      };
      CanvasRenderingContext2D.prototype.fillText = function(c, e, a, f) {
        var d = null;
        this._globalColorMatrix && (d = this.fillStyle, this.fillStyle = g(this, this.fillStyle, this._globalColorMatrix));
        3 === arguments.length ? I.call(this, c, e, a) : 4 === arguments.length ? I.call(this, c, e, a, f) : l.Debug.unexpected();
        d && (this.fillStyle = d);
      };
      CanvasRenderingContext2D.prototype.strokeText = function(c, e, a, f) {
        var d = null;
        this._globalColorMatrix && (d = this.strokeStyle, this.strokeStyle = g(this, this.strokeStyle, this._globalColorMatrix));
        3 === arguments.length ? W.call(this, c, e, a) : 4 === arguments.length ? W.call(this, c, e, a, f) : l.Debug.unexpected();
        d && (this.strokeStyle = d);
      };
    }
  })(l.GFX || (l.GFX = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(l) {
    l.ScreenShot = function() {
      return function(g, b, l, n) {
        this.dataURL = g;
        this.w = b;
        this.h = l;
        this.pixelRatio = n;
      };
    }();
  })(l.GFX || (l.GFX = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  var n = function() {
    function g() {
      this._count = 0;
      this._head = this._tail = null;
    }
    Object.defineProperty(g.prototype, "count", {get:function() {
      return this._count;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(g.prototype, "head", {get:function() {
      return this._head;
    }, enumerable:!0, configurable:!0});
    g.prototype._unshift = function(b) {
      0 === this._count ? this._head = this._tail = b : (b.next = this._head, this._head = b.next.previous = b);
      this._count++;
    };
    g.prototype._remove = function(b) {
      b === this._head && b === this._tail ? this._head = this._tail = null : b === this._head ? (this._head = b.next, this._head.previous = null) : b == this._tail ? (this._tail = b.previous, this._tail.next = null) : (b.previous.next = b.next, b.next.previous = b.previous);
      b.previous = b.next = null;
      this._count--;
    };
    g.prototype.use = function(b) {
      this._head !== b && ((b.next || b.previous || this._tail === b) && this._remove(b), this._unshift(b));
    };
    g.prototype.pop = function() {
      if (!this._tail) {
        return null;
      }
      var b = this._tail;
      this._remove(b);
      return b;
    };
    g.prototype.visit = function(b, g) {
      void 0 === g && (g = !0);
      for (var l = g ? this._head : this._tail;l && b(l);) {
        l = g ? l.next : l.previous;
      }
    };
    return g;
  }();
  l.LRUList = n;
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
(function(l) {
  (function(n) {
    (function(g) {
      function b(a, e, c, d) {
        var b = 1 - d;
        return a * b * b + 2 * e * b * d + c * d * d;
      }
      function w(a, e, c, d, b) {
        var h = b * b, g = 1 - b, k = g * g;
        return a * g * k + 3 * e * b * k + 3 * c * g * h + d * b * h;
      }
      var t = l.NumberUtilities.clamp, a = l.NumberUtilities.pow2, k = l.NumberUtilities.epsilonEquals;
      g.radianToDegrees = function(a) {
        return 180 * a / Math.PI;
      };
      g.degreesToRadian = function(a) {
        return a * Math.PI / 180;
      };
      g.quadraticBezier = b;
      g.quadraticBezierExtreme = function(a, e, c) {
        var d = (a - e) / (a - 2 * e + c);
        return 0 > d ? a : 1 < d ? c : b(a, e, c, d);
      };
      g.cubicBezier = w;
      g.cubicBezierExtremes = function(a, e, c, d) {
        var b = e - a, h;
        h = 2 * (c - e);
        var g = d - c;
        b + g === h && (g *= 1.0001);
        var k = 2 * b - h, p = h - 2 * b, p = Math.sqrt(p * p - 4 * b * (b - h + g));
        h = 2 * (b - h + g);
        b = (k + p) / h;
        k = (k - p) / h;
        p = [];
        0 <= b && 1 >= b && p.push(w(a, e, c, d, b));
        0 <= k && 1 >= k && p.push(w(a, e, c, d, k));
        return p;
      };
      var u = function() {
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
          var f = e.y * a.x - e.x * a.y + (a.y - e.y) * this.x + (e.x - a.x) * this.y, d = e.x * c.y - e.y * c.x + (e.y - c.y) * this.x + (c.x - e.x) * this.y;
          if (0 > f != 0 > d) {
            return !1;
          }
          e = -c.y * a.x + e.y * (a.x - c.x) + e.x * (c.y - a.y) + c.x * a.y;
          0 > e && (f = -f, d = -d, e = -e);
          return 0 < f && 0 < d && f + d < e;
        };
        a.createEmpty = function() {
          return new a(0, 0);
        };
        a.createEmptyPoints = function(e) {
          for (var c = [], d = 0;d < e;d++) {
            c.push(new a(0, 0));
          }
          return c;
        };
        return a;
      }();
      g.Point = u;
      var h = function() {
        function a(e, c, f) {
          this.x = e;
          this.y = c;
          this.z = f;
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
          for (var c = [], d = 0;d < e;d++) {
            c.push(new a(0, 0, 0));
          }
          return c;
        };
        return a;
      }();
      g.Point3D = h;
      var r = function() {
        function a(e, c, d, b) {
          this.setElements(e, c, d, b);
          a.allocationCount++;
        }
        a.prototype.setElements = function(e, c, a, f) {
          this.x = e;
          this.y = c;
          this.w = a;
          this.h = f;
        };
        a.prototype.set = function(e) {
          this.x = e.x;
          this.y = e.y;
          this.w = e.w;
          this.h = e.h;
        };
        a.prototype.contains = function(e) {
          var c = e.x + e.w, a = e.y + e.h, f = this.x + this.w, d = this.y + this.h;
          return e.x >= this.x && e.x < f && e.y >= this.y && e.y < d && c > this.x && c <= f && a > this.y && a <= d;
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
              var f = this.x + this.w;
              f < e.x + e.w && (f = e.x + e.w);
              var d = this.y + this.h;
              d < e.y + e.h && (d = e.y + e.h);
              this.x = c;
              this.y = a;
              this.w = f - c;
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
          var d = a._temporary;
          d.set(e);
          c.transformRectangleAABB(d);
          return this.intersects(d);
        };
        a.prototype.intersectsTranslated = function(e, c, a) {
          if (this.isEmpty() || e.isEmpty()) {
            return !1;
          }
          var f = Math.max(this.x, e.x + c), d = Math.max(this.y, e.y + a);
          c = Math.min(this.x + this.w, e.x + c + e.w) - f;
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
          return new u(this.x + this.w / 2, this.y + this.h / 2);
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
        a.createSquare = function() {
          return new a(-512, -512, 1024, 1024);
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
      g.Rectangle = r;
      var p = function() {
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
          for (var c = new u(Number.MAX_VALUE, Number.MAX_VALUE), a = new u(Number.MIN_VALUE, Number.MIN_VALUE), f = 0;4 > f;f++) {
            var d = e[f].x, b = e[f].y;
            c.x = Math.min(c.x, d);
            c.y = Math.min(c.y, b);
            a.x = Math.max(a.x, d);
            a.y = Math.max(a.y, b);
          }
          return new r(c.x, c.y, a.x - c.x, a.y - c.y);
        };
        a.prototype.intersects = function(e) {
          return this.intersectsOneWay(e) && e.intersectsOneWay(this);
        };
        a.prototype.intersectsOneWay = function(e) {
          for (var c = 0;2 > c;c++) {
            for (var a = 0;4 > a;a++) {
              var f = e.corners[a].dot(this.axes[c]), d, b;
              0 === a ? b = d = f : f < d ? d = f : f > b && (b = f);
            }
            if (d > 1 + this.origins[c] || b < this.origins[c]) {
              return !1;
            }
          }
          return !0;
        };
        return a;
      }();
      g.OBB = p;
      (function(a) {
        a[a.Unknown = 0] = "Unknown";
        a[a.Identity = 1] = "Identity";
        a[a.Translation = 2] = "Translation";
      })(g.MatrixType || (g.MatrixType = {}));
      var q = function() {
        function a(e, c, d, b, h, g) {
          this._data = new Float64Array(6);
          this._type = 0;
          this.setElements(e, c, d, b, h, g);
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
        a.prototype.setElements = function(a, c, f, d, b, h) {
          var g = this._data;
          g[0] = a;
          g[1] = c;
          g[2] = f;
          g[3] = d;
          g[4] = b;
          g[5] = h;
          this._type = 0;
        };
        a.prototype.set = function(a) {
          var c = this._data, f = a._data;
          c[0] = f[0];
          c[1] = f[1];
          c[2] = f[2];
          c[3] = f[3];
          c[4] = f[4];
          c[5] = f[5];
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
        a.prototype.transform = function(a, c, f, d, b, h) {
          var g = this._data, k = g[0], p = g[1], q = g[2], l = g[3], r = g[4], v = g[5];
          g[0] = k * a + q * c;
          g[1] = p * a + l * c;
          g[2] = k * f + q * d;
          g[3] = p * f + l * d;
          g[4] = k * b + q * h + r;
          g[5] = p * b + l * h + v;
          this._type = 0;
          return this;
        };
        a.prototype.transformRectangle = function(a, c) {
          var f = this._data, d = f[0], b = f[1], h = f[2], g = f[3], k = f[4], f = f[5], p = a.x, q = a.y, l = a.w, r = a.h;
          c[0].x = d * p + h * q + k;
          c[0].y = b * p + g * q + f;
          c[1].x = d * (p + l) + h * q + k;
          c[1].y = b * (p + l) + g * q + f;
          c[2].x = d * (p + l) + h * (q + r) + k;
          c[2].y = b * (p + l) + g * (q + r) + f;
          c[3].x = d * p + h * (q + r) + k;
          c[3].y = b * p + g * (q + r) + f;
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
              var f = c[0], d = c[1], b = c[2], h = c[3], g = c[4], k = c[5], p = a.x, q = a.y, l = a.w, r = a.h, c = f * p + b * q + g, v = d * p + h * q + k, u = f * (p + l) + b * q + g, n = d * (p + l) + h * q + k, t = f * (p + l) + b * (q + r) + g, l = d * (p + l) + h * (q + r) + k, f = f * p + b * (q + r) + g, d = d * p + h * (q + r) + k, h = 0;
              c > u && (h = c, c = u, u = h);
              t > f && (h = t, t = f, f = h);
              a.x = c < t ? c : t;
              a.w = (u > f ? u : f) - a.x;
              v > n && (h = v, v = n, n = h);
              l > d && (h = l, l = d, d = h);
              a.y = v < l ? v : l;
              a.h = (n > d ? n : d) - a.y;
            }
          }
        };
        a.prototype.scale = function(a, c) {
          var f = this._data;
          f[0] *= a;
          f[1] *= c;
          f[2] *= a;
          f[3] *= c;
          f[4] *= a;
          f[5] *= c;
          this._type = 0;
          return this;
        };
        a.prototype.scaleClone = function(a, c) {
          return 1 === a && 1 === c ? this : this.clone().scale(a, c);
        };
        a.prototype.rotate = function(a) {
          var c = this._data, f = c[0], d = c[1], b = c[2], h = c[3], g = c[4], k = c[5], p = Math.cos(a);
          a = Math.sin(a);
          c[0] = p * f - a * d;
          c[1] = a * f + p * d;
          c[2] = p * b - a * h;
          c[3] = a * b + p * h;
          c[4] = p * g - a * k;
          c[5] = a * g + p * k;
          this._type = 0;
          return this;
        };
        a.prototype.concat = function(a) {
          if (1 === a._type) {
            return this;
          }
          var c = this._data;
          a = a._data;
          var f = c[0] * a[0], d = 0, b = 0, h = c[3] * a[3], g = c[4] * a[0] + a[4], k = c[5] * a[3] + a[5];
          if (0 !== c[1] || 0 !== c[2] || 0 !== a[1] || 0 !== a[2]) {
            f += c[1] * a[2], h += c[2] * a[1], d += c[0] * a[1] + c[1] * a[3], b += c[2] * a[0] + c[3] * a[2], g += c[5] * a[2], k += c[4] * a[1];
          }
          c[0] = f;
          c[1] = d;
          c[2] = b;
          c[3] = h;
          c[4] = g;
          c[5] = k;
          this._type = 0;
          return this;
        };
        a.prototype.concatClone = function(a) {
          return this.clone().concat(a);
        };
        a.prototype.preMultiply = function(a) {
          var c = this._data, f = a._data;
          if (2 === a._type && this._type & 3) {
            c[4] += f[4], c[5] += f[5], this._type = 2;
          } else {
            if (1 !== a._type) {
              a = f[0] * c[0];
              var d = 0, b = 0, h = f[3] * c[3], g = f[4] * c[0] + c[4], k = f[5] * c[3] + c[5];
              if (0 !== f[1] || 0 !== f[2] || 0 !== c[1] || 0 !== c[2]) {
                a += f[1] * c[2], h += f[2] * c[1], d += f[0] * c[1] + f[1] * c[3], b += f[2] * c[0] + f[3] * c[2], g += f[5] * c[2], k += f[4] * c[1];
              }
              c[0] = a;
              c[1] = d;
              c[2] = b;
              c[3] = h;
              c[4] = g;
              c[5] = k;
              this._type = 0;
            }
          }
        };
        a.prototype.translate = function(a, c) {
          var f = this._data;
          f[4] += a;
          f[5] += c;
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
            var c = this._data, f = a.x, d = a.y;
            a.x = c[0] * f + c[2] * d + c[4];
            a.y = c[1] * f + c[3] * d + c[5];
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
            var c = this._data, f = a.x, d = a.y;
            a.x = c[0] * f + c[2] * d;
            a.y = c[1] * f + c[3] * d;
          }
        };
        a.prototype.inverse = function(a) {
          var c = this._data, f = a._data;
          if (1 === this._type) {
            a.setIdentity();
          } else {
            if (2 === this._type) {
              f[0] = 1, f[1] = 0, f[2] = 0, f[3] = 1, f[4] = -c[4], f[5] = -c[5], a._type = 2;
            } else {
              var d = c[1], b = c[2], h = c[4], g = c[5];
              if (0 === d && 0 === b) {
                var k = f[0] = 1 / c[0], c = f[3] = 1 / c[3];
                f[1] = 0;
                f[2] = 0;
                f[4] = -k * h;
                f[5] = -c * g;
              } else {
                var k = c[0], c = c[3], p = k * c - d * b;
                if (0 === p) {
                  a.setIdentity();
                  return;
                }
                p = 1 / p;
                f[0] = c * p;
                d = f[1] = -d * p;
                b = f[2] = -b * p;
                c = f[3] = k * p;
                f[4] = -(f[0] * h + b * g);
                f[5] = -(d * h + c * g);
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
          } catch (d) {
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
          var f = c._data;
          a.transform(f[0], f[1], f[2], f[3], f[4], f[5]);
        };
        return a;
      }();
      g.Matrix = q;
      q = function() {
        function a(e) {
          this._m = new Float32Array(e);
        }
        a.prototype.asWebGLMatrix = function() {
          return this._m;
        };
        a.createCameraLookAt = function(e, c, d) {
          c = e.clone().sub(c).normalize();
          d = d.clone().cross(c).normalize();
          var b = c.clone().cross(d);
          return new a([d.x, d.y, d.z, 0, b.x, b.y, b.z, 0, c.x, c.y, c.z, 0, e.x, e.y, e.z, 1]);
        };
        a.createLookAt = function(e, c, d) {
          c = e.clone().sub(c).normalize();
          d = d.clone().cross(c).normalize();
          var b = c.clone().cross(d);
          return new a([d.x, b.x, c.x, 0, b.x, b.y, c.y, 0, c.x, b.z, c.z, 0, -d.dot(e), -b.dot(e), -c.dot(e), 1]);
        };
        a.prototype.mul = function(a) {
          a = [a.x, a.y, a.z, 0];
          for (var c = this._m, f = [], d = 0;4 > d;d++) {
            f[d] = 0;
            for (var b = 4 * d, g = 0;4 > g;g++) {
              f[d] += c[b + g] * a[g];
            }
          }
          return new h(f[0], f[1], f[2]);
        };
        a.create2DProjection = function(e, c, d) {
          return new a([2 / e, 0, 0, 0, 0, -2 / c, 0, 0, 0, 0, 2 / d, 0, -1, 1, 0, 1]);
        };
        a.createPerspective = function(e) {
          e = Math.tan(.5 * Math.PI - .5 * e);
          var c = 1 / -4999.9;
          return new a([e / 1, 0, 0, 0, 0, e, 0, 0, 0, 0, 5000.1 * c, -1, 0, 0, 1E3 * c, 0]);
        };
        a.createIdentity = function() {
          return a.createTranslation(0, 0);
        };
        a.createTranslation = function(e, c) {
          return new a([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, c, 0, 1]);
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
        a.createScale = function(e, c, d) {
          return new a([e, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0, 0, 1]);
        };
        a.createMultiply = function(e, c) {
          var d = e._m, b = c._m, h = d[0], g = d[1], k = d[2], p = d[3], q = d[4], l = d[5], r = d[6], v = d[7], u = d[8], n = d[9], t = d[10], w = d[11], z = d[12], A = d[13], C = d[14], d = d[15], y = b[0], G = b[1], B = b[2], E = b[3], H = b[4], K = b[5], L = b[6], M = b[7], N = b[8], O = b[9], P = b[10], Q = b[11], R = b[12], S = b[13], T = b[14], b = b[15];
          return new a([h * y + g * H + k * N + p * R, h * G + g * K + k * O + p * S, h * B + g * L + k * P + p * T, h * E + g * M + k * Q + p * b, q * y + l * H + r * N + v * R, q * G + l * K + r * O + v * S, q * B + l * L + r * P + v * T, q * E + l * M + r * Q + v * b, u * y + n * H + t * N + w * R, u * G + n * K + t * O + w * S, u * B + n * L + t * P + w * T, u * E + n * M + t * Q + w * b, z * y + A * H + C * N + d * R, z * G + A * K + C * O + d * S, z * B + A * L + C * P + d * T, z * E + A * 
          M + C * Q + d * b]);
        };
        a.createInverse = function(e) {
          var c = e._m;
          e = c[0];
          var d = c[1], b = c[2], h = c[3], g = c[4], k = c[5], p = c[6], q = c[7], l = c[8], r = c[9], v = c[10], u = c[11], n = c[12], t = c[13], w = c[14], c = c[15], z = v * c, A = w * u, C = p * c, y = w * q, G = p * u, B = v * q, E = b * c, H = w * h, K = b * u, L = v * h, M = b * q, N = p * h, O = l * t, P = n * r, Q = g * t, R = n * k, S = g * r, T = l * k, Z = e * t, aa = n * d, ba = e * r, ca = l * d, da = e * k, ea = g * d, ga = z * k + y * r + G * t - (A * k + C * r + B * t), ha = A * 
          d + E * r + L * t - (z * d + H * r + K * t), t = C * d + H * k + M * t - (y * d + E * k + N * t), d = B * d + K * k + N * r - (G * d + L * k + M * r), k = 1 / (e * ga + g * ha + l * t + n * d);
          return new a([k * ga, k * ha, k * t, k * d, k * (A * g + C * l + B * n - (z * g + y * l + G * n)), k * (z * e + H * l + K * n - (A * e + E * l + L * n)), k * (y * e + E * g + N * n - (C * e + H * g + M * n)), k * (G * e + L * g + M * l - (B * e + K * g + N * l)), k * (O * q + R * u + S * c - (P * q + Q * u + T * c)), k * (P * h + Z * u + ca * c - (O * h + aa * u + ba * c)), k * (Q * h + aa * q + da * c - (R * h + Z * q + ea * c)), k * (T * h + ba * q + ea * u - (S * h + ca * q + da * u)), 
          k * (Q * v + T * w + P * p - (S * w + O * p + R * v)), k * (ba * w + O * b + aa * v - (Z * v + ca * w + P * b)), k * (Z * p + ea * w + R * b - (da * w + Q * b + aa * p)), k * (da * v + S * b + ca * p - (ba * p + ea * v + T * b))]);
        };
        return a;
      }();
      g.Matrix3D = q;
      q = function() {
        function a(e, c, d) {
          void 0 === d && (d = 7);
          var b = this.size = 1 << d;
          this.sizeInBits = d;
          this.w = e;
          this.h = c;
          this.c = Math.ceil(e / b);
          this.r = Math.ceil(c / b);
          this.grid = [];
          for (e = 0;e < this.r;e++) {
            for (this.grid.push([]), c = 0;c < this.c;c++) {
              this.grid[e][c] = new a.Cell(new r(c * b, e * b, b, b));
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
          return new r(0, 0, this.w, this.h);
        };
        a.prototype.addDirtyRectangle = function(a) {
          var c = a.x >> this.sizeInBits, f = a.y >> this.sizeInBits;
          if (!(c >= this.c || f >= this.r)) {
            0 > c && (c = 0);
            0 > f && (f = 0);
            var d = this.grid[f][c];
            a = a.clone();
            a.snap();
            if (d.region.contains(a)) {
              d.bounds.isEmpty() ? d.bounds.set(a) : d.bounds.contains(a) || d.bounds.union(a);
            } else {
              for (var b = Math.min(this.c, Math.ceil((a.x + a.w) / this.size)) - c, h = Math.min(this.r, Math.ceil((a.y + a.h) / this.size)) - f, g = 0;g < b;g++) {
                for (var k = 0;k < h;k++) {
                  d = this.grid[f + k][c + g], d = d.region.clone(), d.intersect(a), d.isEmpty() || this.addDirtyRectangle(d);
                }
              }
            }
          }
        };
        a.prototype.gatherRegions = function(a) {
          for (var c = 0;c < this.r;c++) {
            for (var f = 0;f < this.c;f++) {
              this.grid[c][f].bounds.isEmpty() || a.push(this.grid[c][f].bounds);
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
          for (var c = 0, f = 0;f < this.r;f++) {
            for (var d = 0;d < this.c;d++) {
              c += this.grid[f][d].region.area();
            }
          }
          return c / a;
        };
        a.prototype.render = function(a, c) {
          function f(c) {
            a.rect(c.x, c.y, c.w, c.h);
          }
          if (c && c.drawGrid) {
            a.strokeStyle = "white";
            for (var d = 0;d < this.r;d++) {
              for (var b = 0;b < this.c;b++) {
                var h = this.grid[d][b];
                a.beginPath();
                f(h.region);
                a.closePath();
                a.stroke();
              }
            }
          }
          a.strokeStyle = "#E0F8D8";
          for (d = 0;d < this.r;d++) {
            for (b = 0;b < this.c;b++) {
              h = this.grid[d][b], a.beginPath(), f(h.bounds), a.closePath(), a.stroke();
            }
          }
        };
        a.tmpRectangle = r.createEmpty();
        return a;
      }();
      g.DirtyRegion = q;
      (function(a) {
        var e = function() {
          function c(c) {
            this.region = c;
            this.bounds = r.createEmpty();
          }
          c.prototype.clear = function() {
            this.bounds.setEmpty();
          };
          return c;
        }();
        a.Cell = e;
      })(q = g.DirtyRegion || (g.DirtyRegion = {}));
      var v = function() {
        function a(e, c, d, f, b, h) {
          this.index = e;
          this.x = c;
          this.y = d;
          this.scale = h;
          this.bounds = new r(c * f, d * b, f, b);
        }
        a.prototype.getOBB = function() {
          if (this._obb) {
            return this._obb;
          }
          this.bounds.getCorners(a.corners);
          return this._obb = new p(a.corners);
        };
        a.corners = u.createEmptyPoints(4);
        return a;
      }();
      g.Tile = v;
      var d = function() {
        function a(e, c, d, f, b) {
          this.tileW = d;
          this.tileH = f;
          this.scale = b;
          this.w = e;
          this.h = c;
          this.rows = Math.ceil(c / f);
          this.columns = Math.ceil(e / d);
          this.tiles = [];
          for (c = e = 0;c < this.rows;c++) {
            for (var h = 0;h < this.columns;h++) {
              this.tiles.push(new v(e++, h, c, d, f, b));
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
          var d = this.columns * this.rows;
          return 40 > d && c.isScaleOrRotation() ? this.getFewTiles(a, c, 10 < d) : this.getManyTiles(a, c);
        };
        a.prototype.getFewTiles = function(e, c, d) {
          void 0 === d && (d = !0);
          if (c.isTranslationOnly() && 1 === this.tiles.length) {
            return this.tiles[0].bounds.intersectsTranslated(e, c.tx, c.ty) ? [this.tiles[0]] : [];
          }
          c.transformRectangle(e, a._points);
          var b;
          e = new r(0, 0, this.w, this.h);
          d && (b = new p(a._points));
          e.intersect(p.getBounds(a._points));
          if (e.isEmpty()) {
            return [];
          }
          var h = e.x / this.tileW | 0;
          c = e.y / this.tileH | 0;
          var g = Math.ceil((e.x + e.w) / this.tileW) | 0, k = Math.ceil((e.y + e.h) / this.tileH) | 0, h = t(h, 0, this.columns), g = t(g, 0, this.columns);
          c = t(c, 0, this.rows);
          for (var k = t(k, 0, this.rows), q = [];h < g;h++) {
            for (var l = c;l < k;l++) {
              var v = this.tiles[l * this.columns + h];
              v.bounds.intersects(e) && (d ? v.getOBB().intersects(b) : 1) && q.push(v);
            }
          }
          return q;
        };
        a.prototype.getManyTiles = function(e, c) {
          function d(c, a, e) {
            return (c - a.x) * (e.y - a.y) / (e.x - a.x) + a.y;
          }
          function b(c, a, e, d, f) {
            if (!(0 > e || e >= a.columns)) {
              for (d = t(d, 0, a.rows), f = t(f + 1, 0, a.rows);d < f;d++) {
                c.push(a.tiles[d * a.columns + e]);
              }
            }
          }
          var h = a._points;
          c.transformRectangle(e, h);
          for (var g = h[0].x < h[1].x ? 0 : 1, k = h[2].x < h[3].x ? 2 : 3, k = h[g].x < h[k].x ? g : k, g = [], p = 0;5 > p;p++, k++) {
            g.push(h[k % 4]);
          }
          (g[1].x - g[0].x) * (g[3].y - g[0].y) < (g[1].y - g[0].y) * (g[3].x - g[0].x) && (h = g[1], g[1] = g[3], g[3] = h);
          var h = [], q, l, k = Math.floor(g[0].x / this.tileW), p = (k + 1) * this.tileW;
          if (g[2].x < p) {
            q = Math.min(g[0].y, g[1].y, g[2].y, g[3].y);
            l = Math.max(g[0].y, g[1].y, g[2].y, g[3].y);
            var r = Math.floor(q / this.tileH), v = Math.floor(l / this.tileH);
            b(h, this, k, r, v);
            return h;
          }
          var u = 0, n = 4, w = !1;
          if (g[0].x === g[1].x || g[0].x === g[3].x) {
            g[0].x === g[1].x ? (w = !0, u++) : n--, q = d(p, g[u], g[u + 1]), l = d(p, g[n], g[n - 1]), r = Math.floor(g[u].y / this.tileH), v = Math.floor(g[n].y / this.tileH), b(h, this, k, r, v), k++;
          }
          do {
            var D, z, A, C;
            g[u + 1].x < p ? (D = g[u + 1].y, A = !0) : (D = d(p, g[u], g[u + 1]), A = !1);
            g[n - 1].x < p ? (z = g[n - 1].y, C = !0) : (z = d(p, g[n], g[n - 1]), C = !1);
            r = Math.floor((g[u].y < g[u + 1].y ? q : D) / this.tileH);
            v = Math.floor((g[n].y > g[n - 1].y ? l : z) / this.tileH);
            b(h, this, k, r, v);
            if (A && w) {
              break;
            }
            A ? (w = !0, u++, q = d(p, g[u], g[u + 1])) : q = D;
            C ? (n--, l = d(p, g[n], g[n - 1])) : l = z;
            k++;
            p = (k + 1) * this.tileW;
          } while (u < n);
          return h;
        };
        a._points = u.createEmptyPoints(4);
        return a;
      }();
      g.TileCache = d;
      q = function() {
        function f(a, c, d) {
          this._cacheLevels = [];
          this._source = a;
          this._tileSize = c;
          this._minUntiledSize = d;
        }
        f.prototype._getTilesAtScale = function(e, c, f) {
          var b = Math.max(c.getAbsoluteScaleX(), c.getAbsoluteScaleY()), h = 0;
          1 !== b && (h = t(Math.round(Math.log(1 / b) / Math.LN2), -5, 3));
          b = a(h);
          if (this._source.hasFlags(1048576)) {
            for (;;) {
              b = a(h);
              if (f.contains(this._source.getBounds().getAbsoluteBounds().clone().scale(b, b))) {
                break;
              }
              h--;
            }
          }
          this._source.hasFlags(2097152) || (h = t(h, -5, 0));
          b = a(h);
          f = 5 + h;
          h = this._cacheLevels[f];
          if (!h) {
            var h = this._source.getBounds().getAbsoluteBounds().clone().scale(b, b), g, k;
            this._source.hasFlags(1048576) || !this._source.hasFlags(4194304) || Math.max(h.w, h.h) <= this._minUntiledSize ? (g = h.w, k = h.h) : g = k = this._tileSize;
            h = this._cacheLevels[f] = new d(h.w, h.h, g, k, b);
          }
          return h.getTiles(e, c.scaleClone(b, b));
        };
        f.prototype.fetchTiles = function(a, c, d, f) {
          var b = new r(0, 0, d.canvas.width, d.canvas.height);
          a = this._getTilesAtScale(a, c, b);
          var h;
          c = this._source;
          for (var g = 0;g < a.length;g++) {
            var k = a[g];
            k.cachedSurfaceRegion && k.cachedSurfaceRegion.surface && !c.hasFlags(1048592) || (h || (h = []), h.push(k));
          }
          h && this._cacheTiles(d, h, f, b);
          c.removeFlags(16);
          return a;
        };
        f.prototype._getTileBounds = function(a) {
          for (var c = r.createEmpty(), d = 0;d < a.length;d++) {
            c.union(a[d].bounds);
          }
          return c;
        };
        f.prototype._cacheTiles = function(a, c, d, f, b) {
          void 0 === b && (b = 4);
          var h = this._getTileBounds(c);
          a.save();
          a.setTransform(1, 0, 0, 1, 0, 0);
          a.clearRect(0, 0, f.w, f.h);
          a.translate(-h.x, -h.y);
          a.scale(c[0].scale, c[0].scale);
          var g = this._source.getBounds();
          a.translate(-g.x, -g.y);
          2 <= n.traceLevel && n.writer && n.writer.writeLn("Rendering Tiles: " + h);
          this._source.render(a, 0);
          a.restore();
          for (var g = null, k = 0;k < c.length;k++) {
            var p = c[k], q = p.bounds.clone();
            q.x -= h.x;
            q.y -= h.y;
            f.contains(q) || (g || (g = []), g.push(p));
            p.cachedSurfaceRegion = d(p.cachedSurfaceRegion, a, q);
          }
          g && (2 <= g.length ? (c = g.slice(0, g.length / 2 | 0), h = g.slice(c.length), this._cacheTiles(a, c, d, f, b - 1), this._cacheTiles(a, h, d, f, b - 1)) : this._cacheTiles(a, g, d, f, b - 1));
        };
        return f;
      }();
      g.RenderableTileCache = q;
    })(n.Geometry || (n.Geometry = {}));
  })(l.GFX || (l.GFX = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(l, n) {
  function g() {
    this.constructor = l;
  }
  for (var b in n) {
    n.hasOwnProperty(b) && (l[b] = n[b]);
  }
  g.prototype = n.prototype;
  l.prototype = new g;
};
(function(l) {
  (function(n) {
    var g = l.IntegerUtilities.roundToMultipleOfPowerOfTwo, b = n.Geometry.Rectangle;
    (function(l) {
      var t = function(a) {
        function b() {
          a.apply(this, arguments);
        }
        __extends(b, a);
        return b;
      }(n.Geometry.Rectangle);
      l.Region = t;
      var a = function() {
        function a(b, d) {
          this._root = new k(0, 0, b | 0, d | 0, !1);
        }
        a.prototype.allocate = function(a, d) {
          a = Math.ceil(a);
          d = Math.ceil(d);
          var f = this._root.insert(a, d);
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
      l.CompactAllocator = a;
      var k = function(b) {
        function h(a, f, e, c, m) {
          b.call(this, a, f, e, c);
          this._children = null;
          this._horizontal = m;
          this.allocated = !1;
        }
        __extends(h, b);
        h.prototype.clear = function() {
          this._children = null;
          this.allocated = !1;
        };
        h.prototype.insert = function(a, f) {
          return this._insert(a, f, 0);
        };
        h.prototype._insert = function(d, f, e) {
          if (!(e > a.MAX_DEPTH || this.allocated || this.w < d || this.h < f)) {
            if (this._children) {
              var c;
              if ((c = this._children[0]._insert(d, f, e + 1)) || (c = this._children[1]._insert(d, f, e + 1))) {
                return c;
              }
            } else {
              return c = !this._horizontal, a.RANDOM_ORIENTATION && (c = .5 <= Math.random()), this._children = this._horizontal ? [new h(this.x, this.y, this.w, f, !1), new h(this.x, this.y + f, this.w, this.h - f, c)] : [new h(this.x, this.y, d, this.h, !0), new h(this.x + d, this.y, this.w - d, this.h, c)], c = this._children[0], c.w === d && c.h === f ? (c.allocated = !0, c) : this._insert(d, f, e + 1);
            }
          }
        };
        return h;
      }(l.Region), u = function() {
        function a(b, d, f, e) {
          this._columns = b / f | 0;
          this._rows = d / e | 0;
          this._sizeW = f;
          this._sizeH = e;
          this._freeList = [];
          this._index = 0;
          this._total = this._columns * this._rows;
        }
        a.prototype.allocate = function(a, d) {
          a = Math.ceil(a);
          d = Math.ceil(d);
          var f = this._sizeW, e = this._sizeH;
          if (a > f || d > e) {
            return null;
          }
          var c = this._freeList, b = this._index;
          return 0 < c.length ? (f = c.pop(), f.w = a, f.h = d, f.allocated = !0, f) : b < this._total ? (c = b / this._columns | 0, f = new h((b - c * this._columns) * f, c * e, a, d), f.index = b, f.allocator = this, f.allocated = !0, this._index++, f) : null;
        };
        a.prototype.free = function(a) {
          a.allocated = !1;
          this._freeList.push(a);
        };
        return a;
      }();
      l.GridAllocator = u;
      var h = function(a) {
        function b(d, f, e, c) {
          a.call(this, d, f, e, c);
          this.index = -1;
        }
        __extends(b, a);
        return b;
      }(l.Region);
      l.GridCell = h;
      var r = function() {
        return function(a, b, d) {
          this.size = a;
          this.region = b;
          this.allocator = d;
        };
      }(), p = function(a) {
        function b(d, f, e, c, h) {
          a.call(this, d, f, e, c);
          this.region = h;
        }
        __extends(b, a);
        return b;
      }(l.Region);
      l.BucketCell = p;
      t = function() {
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
          var e = null, c, h = this._buckets;
          do {
            for (var k = 0;k < h.length && !(h[k].size >= f && (c = h[k], e = c.allocator.allocate(a, d)));k++) {
            }
            if (!e) {
              var l = this._h - this._filled;
              if (l < d) {
                return null;
              }
              var k = g(f, 8), q = 2 * k;
              q > l && (q = l);
              if (q < k) {
                return null;
              }
              l = new b(0, this._filled, this._w, q);
              this._buckets.push(new r(k, l, new u(l.w, l.h, k, k)));
              this._filled += q;
            }
          } while (!e);
          return new p(c.region.x + e.x, c.region.y + e.y, e.w, e.h, e);
        };
        a.prototype.free = function(a) {
          a.region.allocator.free(a.region);
        };
        return a;
      }();
      l.BucketAllocator = t;
    })(n.RegionAllocator || (n.RegionAllocator = {}));
    (function(b) {
      var g = function() {
        function a(a) {
          this._createSurface = a;
          this._surfaces = [];
        }
        Object.defineProperty(a.prototype, "surfaces", {get:function() {
          return this._surfaces;
        }, enumerable:!0, configurable:!0});
        a.prototype._createNewSurface = function(a, b) {
          var h = this._createSurface(a, b);
          this._surfaces.push(h);
          return h;
        };
        a.prototype.addSurface = function(a) {
          this._surfaces.push(a);
        };
        a.prototype.allocate = function(a, b, h) {
          for (var g = 0;g < this._surfaces.length;g++) {
            var p = this._surfaces[g];
            if (p !== h && (p = p.allocate(a, b))) {
              return p;
            }
          }
          return this._createNewSurface(a, b).allocate(a, b);
        };
        a.prototype.free = function(a) {
        };
        return a;
      }();
      b.SimpleAllocator = g;
    })(n.SurfaceRegionAllocator || (n.SurfaceRegionAllocator = {}));
  })(l.GFX || (l.GFX = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(n) {
    var g = n.Geometry.Rectangle, b = n.Geometry.Matrix, w = n.Geometry.DirtyRegion;
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
    })(n.BlendMode || (n.BlendMode = {}));
    var t = n.BlendMode;
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
    })(n.NodeFlags || (n.NodeFlags = {}));
    var a = n.NodeFlags;
    (function(a) {
      a[a.Node = 1] = "Node";
      a[a.Shape = 3] = "Shape";
      a[a.Group = 5] = "Group";
      a[a.Stage = 13] = "Stage";
      a[a.Renderable = 33] = "Renderable";
    })(n.NodeType || (n.NodeType = {}));
    var k = n.NodeType;
    (function(a) {
      a[a.None = 0] = "None";
      a[a.OnStageBoundsChanged = 1] = "OnStageBoundsChanged";
      a[a.RemovedFromStage = 2] = "RemovedFromStage";
    })(n.NodeEventType || (n.NodeEventType = {}));
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
        for (var d = a.getChildren(), f = 0;f < d.length;f++) {
          d[f].visit(this, e);
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
    n.NodeVisitor = u;
    var h = function() {
      return function() {
      };
    }();
    n.State = h;
    var r = function(a) {
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
        var a = c._dirtyStack, e = null;
        a.length && (e = a.pop());
        return e;
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
    }(h);
    n.PreRenderState = r;
    var p = function(a) {
      function c() {
        a.apply(this, arguments);
        this.isDirty = !0;
      }
      __extends(c, a);
      c.prototype.start = function(a, c) {
        this._dirtyRegion = c;
        var e = new r;
        e.matrix.setIdentity();
        a.visit(this, e);
        e.free();
      };
      c.prototype.visitGroup = function(a, c) {
        var e = a.getChildren();
        this.visitNode(a, c);
        for (var d = 0;d < e.length;d++) {
          var f = e[d], b = c.transform(f.getTransform());
          f.visit(this, b);
          b.free();
        }
      };
      c.prototype.visitNode = function(a, c) {
        a.hasFlags(16) && (this.isDirty = !0);
        a.toggleFlags(16, !1);
        a.depth = c.depth++;
      };
      return c;
    }(u);
    n.PreRenderVisitor = p;
    h = function(a) {
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
        var e = a.getChildren();
        this.writer.enter(a.toString() + " " + e.length);
        for (var d = 0;d < e.length;d++) {
          e[d].visit(this, c);
        }
        this.writer.outdent();
      };
      c.prototype.visitStage = function(a, c) {
        this.visitGroup(a, c);
      };
      return c;
    }(u);
    n.TracingNodeVisitor = h;
    var q = function() {
      function e() {
        this._clip = -1;
        this._eventListeners = null;
        this._id = e._nextId++;
        this._type = 1;
        this._index = -1;
        this._parent = null;
        this.reset();
      }
      Object.defineProperty(e.prototype, "id", {get:function() {
        return this._id;
      }, enumerable:!0, configurable:!0});
      e.prototype._dispatchEvent = function(a) {
        if (this._eventListeners) {
          for (var e = this._eventListeners, d = 0;d < e.length;d++) {
            var f = e[d];
            f.type === a && f.listener(this, a);
          }
        }
      };
      e.prototype.addEventListener = function(a, e) {
        this._eventListeners || (this._eventListeners = []);
        this._eventListeners.push({type:a, listener:e});
      };
      e.prototype.removeEventListener = function(a, e) {
        for (var d = this._eventListeners, f = 0;f < d.length;f++) {
          var b = d[f];
          if (b.type === a && b.listener === e) {
            d.splice(f, 1);
            break;
          }
        }
      };
      Object.defineProperty(e.prototype, "properties", {get:function() {
        return this._properties || (this._properties = {});
      }, enumerable:!0, configurable:!0});
      e.prototype.reset = function() {
        this._flags = a.Default;
        this._properties = this._transform = this._layer = this._bounds = null;
        this.depth = -1;
      };
      Object.defineProperty(e.prototype, "clip", {get:function() {
        return this._clip;
      }, set:function(a) {
        this._clip = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(e.prototype, "parent", {get:function() {
        return this._parent;
      }, enumerable:!0, configurable:!0});
      e.prototype.getTransformedBounds = function(a) {
        var e = this.getBounds(!0);
        if (a !== this && !e.isEmpty()) {
          var d = this.getTransform().getConcatenatedMatrix();
          a ? (a = a.getTransform().getInvertedConcatenatedMatrix(), a.preMultiply(d), a.transformRectangleAABB(e), a.free()) : d.transformRectangleAABB(e);
        }
        return e;
      };
      e.prototype._markCurrentBoundsAsDirtyRegion = function() {
      };
      e.prototype.getStage = function(a) {
        void 0 === a && (a = !0);
        for (var e = this._parent;e;) {
          if (e.isType(13)) {
            var d = e;
            if (a) {
              if (d.dirtyRegion) {
                return d;
              }
            } else {
              return d;
            }
          }
          e = e._parent;
        }
        return null;
      };
      e.prototype.getChildren = function(a) {
        throw void 0;
      };
      e.prototype.getBounds = function(a) {
        throw void 0;
      };
      e.prototype.setBounds = function(a) {
        (this._bounds || (this._bounds = g.createEmpty())).set(a);
        this.removeFlags(256);
      };
      e.prototype.clone = function() {
        throw void 0;
      };
      e.prototype.setFlags = function(a) {
        this._flags |= a;
      };
      e.prototype.hasFlags = function(a) {
        return (this._flags & a) === a;
      };
      e.prototype.hasAnyFlags = function(a) {
        return !!(this._flags & a);
      };
      e.prototype.removeFlags = function(a) {
        this._flags &= ~a;
      };
      e.prototype.toggleFlags = function(a, e) {
        this._flags = e ? this._flags | a : this._flags & ~a;
      };
      e.prototype._propagateFlagsUp = function(a) {
        if (0 !== a && !this.hasFlags(a)) {
          this.hasFlags(2) || (a &= -257);
          this.setFlags(a);
          var e = this._parent;
          e && e._propagateFlagsUp(a);
        }
      };
      e.prototype._propagateFlagsDown = function(a) {
        throw void 0;
      };
      e.prototype.isAncestor = function(a) {
        for (;a;) {
          if (a === this) {
            return !0;
          }
          a = a._parent;
        }
        return !1;
      };
      e._getAncestors = function(a, d) {
        var f = e._path;
        for (f.length = 0;a && a !== d;) {
          f.push(a), a = a._parent;
        }
        return f;
      };
      e.prototype._findClosestAncestor = function() {
        for (var a = this;a;) {
          if (!1 === a.hasFlags(512)) {
            return a;
          }
          a = a._parent;
        }
        return null;
      };
      e.prototype.isType = function(a) {
        return this._type === a;
      };
      e.prototype.isTypeOf = function(a) {
        return (this._type & a) === a;
      };
      e.prototype.isLeaf = function() {
        return this.isType(33) || this.isType(3);
      };
      e.prototype.isLinear = function() {
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
      e.prototype.getTransformMatrix = function() {
        var a;
        void 0 === a && (a = !1);
        return this.getTransform().getMatrix(a);
      };
      e.prototype.getTransform = function() {
        null === this._transform && (this._transform = new d(this));
        return this._transform;
      };
      e.prototype.getLayer = function() {
        null === this._layer && (this._layer = new f(this));
        return this._layer;
      };
      e.prototype.getLayerBounds = function(a) {
        var e = this.getBounds();
        a && this._layer && this._layer.expandBounds(e);
        return e;
      };
      e.prototype.visit = function(a, e) {
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
            l.Debug.unexpectedCase();
        }
      };
      e.prototype.invalidate = function() {
        this._propagateFlagsUp(a.UpOnInvalidate);
      };
      e.prototype.toString = function(a) {
        void 0 === a && (a = !1);
        var e = k[this._type] + " " + this._id;
        a && (e += " " + this._bounds.toString());
        return e;
      };
      e._path = [];
      e._nextId = 0;
      return e;
    }();
    n.Node = q;
    var v = function(e) {
      function c() {
        e.call(this);
        this._type = 5;
        this._children = [];
      }
      __extends(c, e);
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
        var e = this._children[c];
        this._children.splice(c, 1);
        e._index = -1;
        e._parent = null;
        this._propagateFlagsUp(a.UpOnAddedOrRemoved);
        e._propagateFlagsDown(a.DownOnAddedOrRemoved);
      };
      c.prototype.clearChildren = function() {
        for (var c = 0;c < this._children.length;c++) {
          var e = this._children[c];
          e && (e._index = -1, e._parent = null, e._propagateFlagsDown(a.DownOnAddedOrRemoved));
        }
        this._children.length = 0;
        this._propagateFlagsUp(a.UpOnAddedOrRemoved);
      };
      c.prototype._propagateFlagsDown = function(a) {
        if (!this.hasFlags(a)) {
          this.setFlags(a);
          for (var c = this._children, e = 0;e < c.length;e++) {
            c[e]._propagateFlagsDown(a);
          }
        }
      };
      c.prototype.getBounds = function(a) {
        void 0 === a && (a = !1);
        var c = this._bounds || (this._bounds = g.createEmpty());
        if (this.hasFlags(256)) {
          c.setEmpty();
          for (var e = this._children, d = g.allocate(), f = 0;f < e.length;f++) {
            var b = e[f];
            d.set(b.getBounds());
            b.getTransformMatrix().transformRectangleAABB(d);
            c.union(d);
          }
          d.free();
          this.removeFlags(256);
        }
        return a ? c.clone() : c;
      };
      c.prototype.getLayerBounds = function(a) {
        if (!a) {
          return this.getBounds();
        }
        for (var c = g.createEmpty(), e = this._children, d = g.allocate(), f = 0;f < e.length;f++) {
          var b = e[f];
          d.set(b.getLayerBounds(a));
          b.getTransformMatrix().transformRectangleAABB(d);
          c.union(d);
        }
        d.free();
        a && this._layer && this._layer.expandBounds(c);
        return c;
      };
      return c;
    }(q);
    n.Group = v;
    var d = function() {
      function e(a) {
        this._node = a;
        this._matrix = b.createIdentity();
        this._colorMatrix = n.ColorMatrix.createIdentity();
        this._concatenatedMatrix = b.createIdentity();
        this._invertedConcatenatedMatrix = b.createIdentity();
        this._concatenatedColorMatrix = n.ColorMatrix.createIdentity();
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
      e.prototype.getColorMatrix = function() {
        var a;
        void 0 === a && (a = !1);
        null === this._colorMatrix && (this._colorMatrix = n.ColorMatrix.createIdentity());
        return a ? this._colorMatrix.clone() : this._colorMatrix;
      };
      e.prototype.getConcatenatedMatrix = function(a) {
        void 0 === a && (a = !1);
        if (this._node.hasFlags(512)) {
          for (var e = this._node._findClosestAncestor(), d = q._getAncestors(this._node, e), f = e ? e.getTransform()._concatenatedMatrix.clone() : b.createIdentity(), h = d.length - 1;0 <= h;h--) {
            var e = d[h], g = e.getTransform();
            f.preMultiply(g._matrix);
            g._concatenatedMatrix.set(f);
            e.removeFlags(512);
          }
        }
        return a ? this._concatenatedMatrix.clone() : this._concatenatedMatrix;
      };
      e.prototype.getInvertedConcatenatedMatrix = function() {
        var a = !0;
        void 0 === a && (a = !1);
        this._node.hasFlags(1024) && (this.getConcatenatedMatrix().inverse(this._invertedConcatenatedMatrix), this._node.removeFlags(1024));
        return a ? this._invertedConcatenatedMatrix.clone() : this._invertedConcatenatedMatrix;
      };
      e.prototype.toString = function() {
        return this._matrix.toString();
      };
      return e;
    }();
    n.Transform = d;
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
        return t[this._blendMode];
      };
      a.prototype.expandBounds = function(a) {
        var e = this._filters;
        if (e) {
          for (var d = 0;d < e.length;d++) {
            e[d].expandBounds(a);
          }
        }
      };
      return a;
    }();
    n.Layer = f;
    h = function(a) {
      function c(c) {
        a.call(this);
        this._source = c;
        this._type = 3;
        this._ratio = 0;
      }
      __extends(c, a);
      c.prototype.getBounds = function(a) {
        void 0 === a && (a = !1);
        var c = this._bounds || (this._bounds = g.createEmpty());
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
    }(q);
    n.Shape = h;
    n.RendererOptions = function() {
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
    })(n.Backend || (n.Backend = {}));
    u = function(a) {
      function c(c, d, f) {
        a.call(this);
        this._container = c;
        this._stage = d;
        this._options = f;
        this._viewport = g.createSquare();
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
      c.prototype.screenShot = function(a, c, e) {
        throw void 0;
      };
      return c;
    }(u);
    n.Renderer = u;
    u = function(a) {
      function c(d, f, b) {
        void 0 === b && (b = !1);
        a.call(this);
        this._preVisitor = new p;
        this._flags &= -3;
        this._type = 13;
        this._scaleMode = c.DEFAULT_SCALE;
        this._align = c.DEFAULT_ALIGN;
        this._content = new v;
        this._content._flags &= -3;
        this.addChild(this._content);
        this.setFlags(16);
        this.setBounds(new g(0, 0, d, f));
        b ? (this._dirtyRegion = new w(d, f), this._dirtyRegion.addDirtyRectangle(new g(0, 0, d, f))) : this._dirtyRegion = null;
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
          var a = this.getBounds(), e = this._content.getBounds(), d = a.w / e.w, f = a.h / e.h;
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
          var h;
          h = this._align & 4 ? 0 : this._align & 8 ? a.w - e.w * d : (a.w - e.w * d) / 2;
          a = this._align & 1 ? 0 : this._align & 2 ? a.h - e.h * f : (a.h - e.h * f) / 2;
          this._content.getTransform().setMatrix(new b(d, 0, 0, f, h, a));
        }
      };
      c.DEFAULT_SCALE = 4;
      c.DEFAULT_ALIGN = 5;
      return c;
    }(v);
    n.Stage = u;
  })(l.GFX || (l.GFX = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(n) {
    function g(a, e, c) {
      return a + (e - a) * c;
    }
    function b(a, e, c) {
      return g(a >> 24 & 255, e >> 24 & 255, c) << 24 | g(a >> 16 & 255, e >> 16 & 255, c) << 16 | g(a >> 8 & 255, e >> 8 & 255, c) << 8 | g(a & 255, e & 255, c);
    }
    var w = n.Geometry.Point, t = n.Geometry.Rectangle, a = n.Geometry.Matrix, k = l.ArrayUtilities.indexOf, u = function(a) {
      function e() {
        a.call(this);
        this._parents = [];
        this._renderableParents = [];
        this._invalidateEventListeners = null;
        this._flags &= -3;
        this._type = 33;
      }
      __extends(e, a);
      Object.defineProperty(e.prototype, "parents", {get:function() {
        return this._parents;
      }, enumerable:!0, configurable:!0});
      e.prototype.addParent = function(a) {
        k(this._parents, a);
        this._parents.push(a);
      };
      e.prototype.willRender = function() {
        for (var a = this._parents, e = 0;e < a.length;e++) {
          for (var d = a[e];d;) {
            if (d.isType(13)) {
              return !0;
            }
            if (!d.hasFlags(65536)) {
              break;
            }
            d = d._parent;
          }
        }
        return !1;
      };
      e.prototype.addRenderableParent = function(a) {
        this._renderableParents.push(a);
      };
      e.prototype.wrap = function() {
        for (var a, e = this._parents, d = 0;d < e.length;d++) {
          if (a = e[d], !a._parent) {
            return a;
          }
        }
        a = new n.Shape(this);
        this.addParent(a);
        return a;
      };
      e.prototype.invalidate = function() {
        this.setFlags(16);
        for (var a = this._parents, e = 0;e < a.length;e++) {
          a[e].invalidate();
        }
        a = this._renderableParents;
        for (e = 0;e < a.length;e++) {
          a[e].invalidate();
        }
        if (a = this._invalidateEventListeners) {
          for (e = 0;e < a.length;e++) {
            a[e](this);
          }
        }
      };
      e.prototype.addInvalidateEventListener = function(a) {
        this._invalidateEventListeners || (this._invalidateEventListeners = []);
        k(this._invalidateEventListeners, a);
        this._invalidateEventListeners.push(a);
      };
      e.prototype.getBounds = function(a) {
        void 0 === a && (a = !1);
        return a ? this._bounds.clone() : this._bounds;
      };
      e.prototype.getChildren = function(a) {
        return null;
      };
      e.prototype._propagateFlagsUp = function(a) {
        if (0 !== a && !this.hasFlags(a)) {
          for (var e = 0;e < this._parents.length;e++) {
            this._parents[e]._propagateFlagsUp(a);
          }
        }
      };
      e.prototype.render = function(a, e, d, f, b) {
      };
      return e;
    }(n.Node);
    n.Renderable = u;
    var h = function(a) {
      function e(c, e) {
        a.call(this);
        this.setBounds(c);
        this.render = e;
      }
      __extends(e, a);
      return e;
    }(u);
    n.CustomRenderable = h;
    (function(a) {
      a[a.Idle = 1] = "Idle";
      a[a.Playing = 2] = "Playing";
      a[a.Paused = 3] = "Paused";
      a[a.Ended = 4] = "Ended";
    })(n.RenderableVideoState || (n.RenderableVideoState = {}));
    h = function(a) {
      function e(c, d) {
        a.call(this);
        this._flags = 1048592;
        this._lastPausedTime = this._lastTimeInvalidated = 0;
        this._pauseHappening = this._seekHappening = !1;
        this._isDOMElement = !0;
        this.setBounds(new t(0, 0, 1, 1));
        this._assetId = c;
        this._eventSerializer = d;
        var b = document.createElement("video"), h = this._handleVideoEvent.bind(this);
        b.preload = "metadata";
        b.addEventListener("play", h);
        b.addEventListener("pause", h);
        b.addEventListener("ended", h);
        b.addEventListener("loadeddata", h);
        b.addEventListener("progress", h);
        b.addEventListener("suspend", h);
        b.addEventListener("loadedmetadata", h);
        b.addEventListener("error", h);
        b.addEventListener("seeking", h);
        b.addEventListener("seeked", h);
        b.addEventListener("canplay", h);
        b.style.position = "absolute";
        this._video = b;
        this._videoEventHandler = h;
        e._renderableVideos.push(this);
        "undefined" !== typeof registerInspectorAsset && registerInspectorAsset(-1, -1, this);
        this._state = 1;
      }
      __extends(e, a);
      Object.defineProperty(e.prototype, "video", {get:function() {
        return this._video;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(e.prototype, "state", {get:function() {
        return this._state;
      }, enumerable:!0, configurable:!0});
      e.prototype.play = function() {
        this._state = 2;
        this._video.play();
      };
      e.prototype.pause = function() {
        this._state = 3;
        this._video.pause();
      };
      e.prototype._handleVideoEvent = function(a) {
        var e = null, d = this._video;
        switch(a.type) {
          case "play":
            if (!this._pauseHappening) {
              return;
            }
            a = 7;
            break;
          case "pause":
            if (2 === this._state) {
              d.play();
              return;
            }
            a = 6;
            this._pauseHappening = !0;
            break;
          case "ended":
            this._state = 4;
            this._notifyNetStream(3, e);
            a = 4;
            break;
          case "loadeddata":
            this._pauseHappening = !1;
            this._notifyNetStream(2, e);
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
            e = {videoWidth:d.videoWidth, videoHeight:d.videoHeight, duration:d.duration};
            break;
          case "error":
            a = 11;
            e = {code:d.error.code};
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
        this._notifyNetStream(a, e);
      };
      e.prototype._notifyNetStream = function(a, e) {
        this._eventSerializer.sendVideoPlaybackEvent(this._assetId, a, e);
      };
      e.prototype.processControlRequest = function(a, e) {
        var d = this._video;
        switch(a) {
          case 1:
            d.src = e.url;
            this.play();
            this._notifyNetStream(0, null);
            break;
          case 9:
            d.paused && d.play();
            break;
          case 2:
            d && (e.paused && !d.paused ? (isNaN(e.time) ? this._lastPausedTime = d.currentTime : (0 !== d.seekable.length && (d.currentTime = e.time), this._lastPausedTime = e.time), this.pause()) : !e.paused && d.paused && (this.play(), isNaN(e.time) || this._lastPausedTime === e.time || 0 === d.seekable.length || (d.currentTime = e.time)));
            break;
          case 3:
            d && 0 !== d.seekable.length && (this._seekHappening = !0, d.currentTime = e.time);
            break;
          case 4:
            return d ? d.currentTime : 0;
          case 5:
            return d ? d.duration : 0;
          case 6:
            d && (d.volume = e.volume);
            break;
          case 7:
            if (!d) {
              return 0;
            }
            var f = -1;
            if (d.buffered) {
              for (var b = 0;b < d.buffered.length;b++) {
                f = Math.max(f, d.buffered.end(b));
              }
            } else {
              f = d.duration;
            }
            return Math.round(500 * f);
          case 8:
            return d ? Math.round(500 * d.duration) : 0;
        }
      };
      e.prototype.checkForUpdate = function() {
        this._lastTimeInvalidated !== this._video.currentTime && (this._isDOMElement || this.invalidate());
        this._lastTimeInvalidated = this._video.currentTime;
      };
      e.checkForVideoUpdates = function() {
        for (var a = e._renderableVideos, d = 0;d < a.length;d++) {
          var f = a[d];
          f.willRender() ? (f._video.parentElement || f.invalidate(), f._video.style.zIndex = f.parents[0].depth + "") : f._video.parentElement && f._dispatchEvent(2);
          a[d].checkForUpdate();
        }
      };
      e.prototype.render = function(a, e, d) {
        (e = this._video) && 0 < e.videoWidth && a.drawImage(e, 0, 0, e.videoWidth, e.videoHeight, 0, 0, this._bounds.w, this._bounds.h);
      };
      e._renderableVideos = [];
      return e;
    }(u);
    n.RenderableVideo = h;
    h = function(a) {
      function e(c, e) {
        a.call(this);
        this._flags = 1048592;
        this.properties = {};
        this.setBounds(e);
        c instanceof HTMLCanvasElement ? this._initializeSourceCanvas(c) : this._sourceImage = c;
      }
      __extends(e, a);
      e.FromDataBuffer = function(a, d, f) {
        var b = document.createElement("canvas");
        b.width = f.w;
        b.height = f.h;
        f = new e(b, f);
        f.updateFromDataBuffer(a, d);
        return f;
      };
      e.FromNode = function(a, d, f, b, h) {
        var g = document.createElement("canvas"), k = a.getBounds();
        g.width = k.w;
        g.height = k.h;
        g = new e(g, k);
        g.drawNode(a, d, f, b, h);
        return g;
      };
      e.FromImage = function(a) {
        return new e(a, new t(0, 0, -1, -1));
      };
      e.prototype.updateFromDataBuffer = function(a, e) {
        if (n.imageUpdateOption.value) {
          var d = e.buffer;
          if (4 !== a && 5 !== a && 6 !== a) {
            var f = this._bounds, b = this._imageData;
            b && b.width === f.w && b.height === f.h || (b = this._imageData = this._context.createImageData(f.w, f.h));
            n.imageConvertOption.value && (d = new Int32Array(d), f = new Int32Array(b.data.buffer), l.ColorUtilities.convertImage(a, 3, d, f));
            this._ensureSourceCanvas();
            this._context.putImageData(b, 0, 0);
          }
          this.invalidate();
        }
      };
      e.prototype.readImageData = function(a) {
        a.writeRawBytes(this.imageData.data);
      };
      e.prototype.render = function(a, e, d) {
        this.renderSource ? a.drawImage(this.renderSource, 0, 0) : this._renderFallback(a);
      };
      e.prototype.drawNode = function(a, e, d, f, b) {
        d = n.Canvas2D;
        f = this.getBounds();
        (new d.Canvas2DRenderer(this._canvas, null)).renderNode(a, b || f, e);
      };
      e.prototype._initializeSourceCanvas = function(a) {
        this._canvas = a;
        this._context = this._canvas.getContext("2d");
      };
      e.prototype._ensureSourceCanvas = function() {
        if (!this._canvas) {
          var a = document.createElement("canvas"), e = this._bounds;
          a.width = e.w;
          a.height = e.h;
          this._initializeSourceCanvas(a);
        }
      };
      Object.defineProperty(e.prototype, "imageData", {get:function() {
        this._canvas || (this._ensureSourceCanvas(), this._context.drawImage(this._sourceImage, 0, 0), this._sourceImage = null);
        return this._context.getImageData(0, 0, this._bounds.w, this._bounds.h);
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(e.prototype, "renderSource", {get:function() {
        return this._canvas || this._sourceImage;
      }, enumerable:!0, configurable:!0});
      e.prototype._renderFallback = function(a) {
      };
      return e;
    }(u);
    n.RenderableBitmap = h;
    (function(a) {
      a[a.Fill = 0] = "Fill";
      a[a.Stroke = 1] = "Stroke";
      a[a.StrokeFill = 2] = "StrokeFill";
    })(n.PathType || (n.PathType = {}));
    var r = function() {
      return function(a, e, c, d) {
        this.type = a;
        this.style = e;
        this.smoothImage = c;
        this.strokeProperties = d;
        this.path = new Path2D;
      };
    }();
    n.StyledPath = r;
    var p = function() {
      return function(a, e, c, d, b) {
        this.thickness = a;
        this.scaleMode = e;
        this.capsStyle = c;
        this.jointsStyle = d;
        this.miterLimit = b;
      };
    }();
    n.StrokeProperties = p;
    var q = function(d) {
      function e(a, e, b, h) {
        d.call(this);
        this._flags = 6291472;
        this.properties = {};
        this.setBounds(h);
        this._id = a;
        this._pathData = e;
        this._textures = b;
        b.length && this.setFlags(1048576);
      }
      __extends(e, d);
      e.prototype.update = function(a, e, d) {
        this.setBounds(d);
        this._pathData = a;
        this._paths = null;
        this._textures = e;
        this.setFlags(1048576);
        this.invalidate();
      };
      e.prototype.render = function(a, e, d, f, b) {
        void 0 === f && (f = null);
        void 0 === b && (b = !1);
        a.fillStyle = a.strokeStyle = "transparent";
        e = this._deserializePaths(this._pathData, a, e);
        for (d = 0;d < e.length;d++) {
          var h = e[d];
          a.mozImageSmoothingEnabled = a.msImageSmoothingEnabled = a.imageSmoothingEnabled = h.smoothImage;
          if (0 === h.type) {
            f ? f.addPath(h.path, a.currentTransform) : (a.fillStyle = b ? "#000000" : h.style, a.fill(h.path, "evenodd"), a.fillStyle = "transparent");
          } else {
            if (!f && !b) {
              a.strokeStyle = h.style;
              var g = 1;
              h.strokeProperties && (g = h.strokeProperties.scaleMode, a.lineWidth = h.strokeProperties.thickness, a.lineCap = h.strokeProperties.capsStyle, a.lineJoin = h.strokeProperties.jointsStyle, a.miterLimit = h.strokeProperties.miterLimit);
              var k = a.lineWidth;
              (k = 1 === k || 3 === k) && a.translate(.5, .5);
              a.flashStroke(h.path, g);
              k && a.translate(-.5, -.5);
              a.strokeStyle = "transparent";
            }
          }
        }
      };
      e.prototype._deserializePaths = function(a, d, f) {
        if (this._paths) {
          return this._paths;
        }
        f = this._paths = [];
        var b = null, h = null, g = 0, k = 0, q, r, v = !1, u = 0, n = 0, t = a.commands, w = a.coordinates, D = a.styles, z = D.position = 0;
        a = a.commandsPosition;
        for (var A = 0;A < a;A++) {
          switch(t[A]) {
            case 9:
              v && b && (b.lineTo(u, n), h && h.lineTo(u, n));
              v = !0;
              g = u = w[z++] / 20;
              k = n = w[z++] / 20;
              b && b.moveTo(g, k);
              h && h.moveTo(g, k);
              break;
            case 10:
              g = w[z++] / 20;
              k = w[z++] / 20;
              b && b.lineTo(g, k);
              h && h.lineTo(g, k);
              break;
            case 11:
              q = w[z++] / 20;
              r = w[z++] / 20;
              g = w[z++] / 20;
              k = w[z++] / 20;
              b && b.quadraticCurveTo(q, r, g, k);
              h && h.quadraticCurveTo(q, r, g, k);
              break;
            case 12:
              q = w[z++] / 20;
              r = w[z++] / 20;
              var C = w[z++] / 20, y = w[z++] / 20, g = w[z++] / 20, k = w[z++] / 20;
              b && b.bezierCurveTo(q, r, C, y, g, k);
              h && h.bezierCurveTo(q, r, C, y, g, k);
              break;
            case 1:
              b = this._createPath(0, l.ColorUtilities.rgbaToCSSStyle(D.readUnsignedInt()), !1, null, g, k);
              break;
            case 3:
              q = this._readBitmap(D, d);
              b = this._createPath(0, q.style, q.smoothImage, null, g, k);
              break;
            case 2:
              b = this._createPath(0, this._readGradient(D, d), !1, null, g, k);
              break;
            case 4:
              b = null;
              break;
            case 5:
              h = l.ColorUtilities.rgbaToCSSStyle(D.readUnsignedInt());
              D.position += 1;
              q = D.readByte();
              r = e.LINE_CAPS_STYLES[D.readByte()];
              C = e.LINE_JOINTS_STYLES[D.readByte()];
              q = new p(w[z++] / 20, q, r, C, D.readByte());
              h = this._createPath(1, h, !1, q, g, k);
              break;
            case 6:
              h = this._createPath(2, this._readGradient(D, d), !1, null, g, k);
              break;
            case 7:
              q = this._readBitmap(D, d);
              h = this._createPath(2, q.style, q.smoothImage, null, g, k);
              break;
            case 8:
              h = null;
          }
        }
        v && b && (b.lineTo(u, n), h && h.lineTo(u, n));
        this._pathData = null;
        return f;
      };
      e.prototype._createPath = function(a, e, d, f, b, h) {
        a = new r(a, e, d, f);
        this._paths.push(a);
        a.path.moveTo(b, h);
        return a.path;
      };
      e.prototype._readMatrix = function(c) {
        return new a(c.readFloat(), c.readFloat(), c.readFloat(), c.readFloat(), c.readFloat(), c.readFloat());
      };
      e.prototype._readGradient = function(a, e) {
        var d = a.readUnsignedByte(), f = 2 * a.readShort() / 255, b = this._readMatrix(a), d = 16 === d ? e.createLinearGradient(-1, 0, 1, 0) : e.createRadialGradient(f, 0, 0, 0, 0, 1);
        d.setTransform && d.setTransform(b.toSVGMatrix());
        b = a.readUnsignedByte();
        for (f = 0;f < b;f++) {
          var h = a.readUnsignedByte() / 255, g = l.ColorUtilities.rgbaToCSSStyle(a.readUnsignedInt());
          d.addColorStop(h, g);
        }
        a.position += 2;
        return d;
      };
      e.prototype._readBitmap = function(a, e) {
        var d = a.readUnsignedInt(), f = this._readMatrix(a), b = a.readBoolean() ? "repeat" : "no-repeat", h = a.readBoolean();
        (d = this._textures[d]) ? (b = e.createPattern(d.renderSource, b), b.setTransform(f.toSVGMatrix())) : b = null;
        return {style:b, smoothImage:h};
      };
      e.prototype._renderFallback = function(a) {
        this.fillStyle || (this.fillStyle = l.ColorStyle.randomStyle());
        var e = this._bounds;
        a.save();
        a.beginPath();
        a.lineWidth = 2;
        a.fillStyle = this.fillStyle;
        a.fillRect(e.x, e.y, e.w, e.h);
        a.restore();
      };
      e.LINE_CAPS_STYLES = ["round", "butt", "square"];
      e.LINE_JOINTS_STYLES = ["round", "bevel", "miter"];
      return e;
    }(u);
    n.RenderableShape = q;
    h = function(d) {
      function e() {
        d.apply(this, arguments);
        this._flags = 7340048;
        this._morphPaths = Object.create(null);
      }
      __extends(e, d);
      e.prototype._deserializePaths = function(a, e, d) {
        if (this._morphPaths[d]) {
          return this._morphPaths[d];
        }
        var f = this._morphPaths[d] = [], h = null, k = null, r = 0, v = 0, u, n, t = !1, w = 0, X = 0, fa = a.commands, D = a.coordinates, z = a.morphCoordinates, A = a.styles, C = a.morphStyles;
        A.position = 0;
        var y = C.position = 0;
        a = a.commandsPosition;
        for (var G = 0;G < a;G++) {
          switch(fa[G]) {
            case 9:
              t && h && (h.lineTo(w, X), k && k.lineTo(w, X));
              t = !0;
              r = w = g(D[y], z[y++], d) / 20;
              v = X = g(D[y], z[y++], d) / 20;
              h && h.moveTo(r, v);
              k && k.moveTo(r, v);
              break;
            case 10:
              r = g(D[y], z[y++], d) / 20;
              v = g(D[y], z[y++], d) / 20;
              h && h.lineTo(r, v);
              k && k.lineTo(r, v);
              break;
            case 11:
              u = g(D[y], z[y++], d) / 20;
              n = g(D[y], z[y++], d) / 20;
              r = g(D[y], z[y++], d) / 20;
              v = g(D[y], z[y++], d) / 20;
              h && h.quadraticCurveTo(u, n, r, v);
              k && k.quadraticCurveTo(u, n, r, v);
              break;
            case 12:
              u = g(D[y], z[y++], d) / 20;
              n = g(D[y], z[y++], d) / 20;
              var B = g(D[y], z[y++], d) / 20, E = g(D[y], z[y++], d) / 20, r = g(D[y], z[y++], d) / 20, v = g(D[y], z[y++], d) / 20;
              h && h.bezierCurveTo(u, n, B, E, r, v);
              k && k.bezierCurveTo(u, n, B, E, r, v);
              break;
            case 1:
              h = this._createMorphPath(0, d, l.ColorUtilities.rgbaToCSSStyle(b(A.readUnsignedInt(), C.readUnsignedInt(), d)), !1, null, r, v);
              break;
            case 3:
              u = this._readMorphBitmap(A, C, d, e);
              h = this._createMorphPath(0, d, u.style, u.smoothImage, null, r, v);
              break;
            case 2:
              u = this._readMorphGradient(A, C, d, e);
              h = this._createMorphPath(0, d, u, !1, null, r, v);
              break;
            case 4:
              h = null;
              break;
            case 5:
              u = g(D[y], z[y++], d) / 20;
              k = l.ColorUtilities.rgbaToCSSStyle(b(A.readUnsignedInt(), C.readUnsignedInt(), d));
              A.position += 1;
              n = A.readByte();
              B = q.LINE_CAPS_STYLES[A.readByte()];
              E = q.LINE_JOINTS_STYLES[A.readByte()];
              u = new p(u, n, B, E, A.readByte());
              k = this._createMorphPath(1, d, k, !1, u, r, v);
              break;
            case 6:
              u = this._readMorphGradient(A, C, d, e);
              k = this._createMorphPath(2, d, u, !1, null, r, v);
              break;
            case 7:
              u = this._readMorphBitmap(A, C, d, e);
              k = this._createMorphPath(2, d, u.style, u.smoothImage, null, r, v);
              break;
            case 8:
              k = null;
          }
        }
        t && h && (h.lineTo(w, X), k && k.lineTo(w, X));
        return f;
      };
      e.prototype._createMorphPath = function(a, d, e, f, b, h, g) {
        a = new r(a, e, f, b);
        this._morphPaths[d].push(a);
        a.path.moveTo(h, g);
        return a.path;
      };
      e.prototype._readMorphMatrix = function(c, d, e) {
        return new a(g(c.readFloat(), d.readFloat(), e), g(c.readFloat(), d.readFloat(), e), g(c.readFloat(), d.readFloat(), e), g(c.readFloat(), d.readFloat(), e), g(c.readFloat(), d.readFloat(), e), g(c.readFloat(), d.readFloat(), e));
      };
      e.prototype._readMorphGradient = function(a, d, e, f) {
        var h = a.readUnsignedByte(), k = 2 * a.readShort() / 255, p = this._readMorphMatrix(a, d, e);
        f = 16 === h ? f.createLinearGradient(-1, 0, 1, 0) : f.createRadialGradient(k, 0, 0, 0, 0, 1);
        f.setTransform && f.setTransform(p.toSVGMatrix());
        p = a.readUnsignedByte();
        for (h = 0;h < p;h++) {
          var k = g(a.readUnsignedByte() / 255, d.readUnsignedByte() / 255, e), q = b(a.readUnsignedInt(), d.readUnsignedInt(), e), q = l.ColorUtilities.rgbaToCSSStyle(q);
          f.addColorStop(k, q);
        }
        a.position += 2;
        return f;
      };
      e.prototype._readMorphBitmap = function(a, d, e, f) {
        var b = a.readUnsignedInt();
        d = this._readMorphMatrix(a, d, e);
        e = a.readBoolean() ? "repeat" : "no-repeat";
        a = a.readBoolean();
        f = f.createPattern(this._textures[b]._canvas, e);
        f.setTransform(d.toSVGMatrix());
        return {style:f, smoothImage:a};
      };
      return e;
    }(q);
    n.RenderableMorphShape = h;
    var v = function() {
      function a() {
        this.align = this.leading = this.descent = this.ascent = this.width = this.y = this.x = 0;
        this.runs = [];
      }
      a._getMeasureContext = function() {
        a._measureContext || (a._measureContext = document.createElement("canvas").getContext("2d"));
        return a._measureContext;
      };
      a.prototype.addRun = function(e, c, b, h) {
        if (b) {
          var g = a._getMeasureContext();
          g.font = e;
          g = g.measureText(b).width | 0;
          this.runs.push(new d(e, c, b, g, h));
          this.width += g;
        }
      };
      a.prototype.wrap = function(e) {
        var c = [this], b = this.runs, h = this;
        h.width = 0;
        h.runs = [];
        for (var g = a._getMeasureContext(), k = 0;k < b.length;k++) {
          var p = b[k], q = p.text;
          p.text = "";
          p.width = 0;
          g.font = p.font;
          for (var l = e, r = q.split(/[\s.-]/), v = 0, u = 0;u < r.length;u++) {
            var n = r[u], t = q.substr(v, n.length + 1), w = g.measureText(t).width | 0;
            if (w > l) {
              do {
                if (p.text && (h.runs.push(p), h.width += p.width, p = new d(p.font, p.fillStyle, "", 0, p.underline), l = new a, l.y = h.y + h.descent + h.leading + h.ascent | 0, l.ascent = h.ascent, l.descent = h.descent, l.leading = h.leading, l.align = h.align, c.push(l), h = l), l = e - w, 0 > l) {
                  for (var D = t.length, z = t;1 < D && !(D--, z = t.substr(0, D), w = g.measureText(z).width | 0, w <= e);) {
                  }
                  p.text = z;
                  p.width = w;
                  t = t.substr(D);
                  w = g.measureText(t).width | 0;
                }
              } while (t && 0 > l);
            } else {
              l -= w;
            }
            p.text += t;
            p.width += w;
            v += n.length + 1;
          }
          h.runs.push(p);
          h.width += p.width;
        }
        return c;
      };
      a.prototype.toString = function() {
        return "TextLine {x: " + this.x + ", y: " + this.y + ", width: " + this.width + ", height: " + (this.ascent + this.descent + this.leading) + "}";
      };
      return a;
    }();
    n.TextLine = v;
    var d = function() {
      return function(a, d, c, b, h) {
        void 0 === a && (a = "");
        void 0 === d && (d = "");
        void 0 === c && (c = "");
        void 0 === b && (b = 0);
        void 0 === h && (h = !1);
        this.font = a;
        this.fillStyle = d;
        this.text = c;
        this.width = b;
        this.underline = h;
      };
    }();
    n.TextRun = d;
    h = function(d) {
      function e(c) {
        d.call(this);
        this._flags = 1048592;
        this.properties = {};
        this._textBounds = c.clone();
        this._textRunData = null;
        this._plainText = "";
        this._borderColor = this._backgroundColor = 0;
        this._matrix = a.createIdentity();
        this._coords = null;
        this._scrollV = 1;
        this._scrollH = 0;
        this.textRect = c.clone();
        this.lines = [];
        this.setBounds(c);
      }
      __extends(e, d);
      e.prototype.setBounds = function(a) {
        d.prototype.setBounds.call(this, a);
        this._textBounds.set(a);
        this.textRect.setElements(a.x + 2, a.y + 2, a.w - 2, a.h - 2);
      };
      e.prototype.setContent = function(a, d, e, b) {
        this._textRunData = d;
        this._plainText = a;
        this._matrix.set(e);
        this._coords = b;
        this.lines = [];
      };
      e.prototype.setStyle = function(a, d, e, b) {
        this._backgroundColor = a;
        this._borderColor = d;
        this._scrollV = e;
        this._scrollH = b;
      };
      e.prototype.reflow = function(a, d) {
        var e = this._textRunData;
        if (e) {
          for (var b = this._bounds, f = b.w - 4, h = this._plainText, g = this.lines, k = new v, p = 0, q = 0, r = 0, u = 0, n = 0, t = -1;e.position < e.length;) {
            var w = e.readInt(), z = e.readInt(), A = e.readInt(), C = e.readUTF(), y = e.readInt(), G = e.readInt(), B = e.readInt();
            y > r && (r = y);
            G > u && (u = G);
            B > n && (n = B);
            y = e.readBoolean();
            G = "";
            e.readBoolean() && (G += "italic ");
            y && (G += "bold ");
            A = G + A + "px " + C;
            C = e.readInt();
            C = l.ColorUtilities.rgbToHex(C);
            y = e.readInt();
            -1 === t && (t = y);
            e.readBoolean();
            e.readInt();
            e.readInt();
            e.readInt();
            e.readInt();
            e.readInt();
            for (var y = e.readBoolean(), E = "", G = !1;!G;w++) {
              G = w >= z - 1;
              B = h[w];
              if ("\r" !== B && "\n" !== B && (E += B, w < h.length - 1)) {
                continue;
              }
              k.addRun(A, C, E, y);
              if (k.runs.length) {
                g.length && (p += n);
                p += r;
                k.y = p | 0;
                p += u;
                k.ascent = r;
                k.descent = u;
                k.leading = n;
                k.align = t;
                if (d && k.width > f) {
                  for (k = k.wrap(f), E = 0;E < k.length;E++) {
                    var H = k[E], p = H.y + H.descent + H.leading;
                    g.push(H);
                    H.width > q && (q = H.width);
                  }
                } else {
                  g.push(k), k.width > q && (q = k.width);
                }
                k = new v;
              } else {
                p += r + u + n;
              }
              E = "";
              if (G) {
                n = u = r = 0;
                t = -1;
                break;
              }
              "\r" === B && "\n" === h[w + 1] && w++;
            }
            k.addRun(A, C, E, y);
          }
          e = h[h.length - 1];
          "\r" !== e && "\n" !== e || g.push(k);
          e = this.textRect;
          e.w = q;
          e.h = p;
          if (a) {
            if (!d) {
              f = q;
              q = b.w;
              switch(a) {
                case 1:
                  e.x = q - (f + 4) >> 1;
                  break;
                case 3:
                  e.x = q - (f + 4);
              }
              this._textBounds.setElements(e.x - 2, e.y - 2, e.w + 4, e.h + 4);
              b.w = f + 4;
            }
            b.x = e.x - 2;
            b.h = p + 4;
          } else {
            this._textBounds = b;
          }
          for (w = 0;w < g.length;w++) {
            if (b = g[w], b.width < f) {
              switch(b.align) {
                case 1:
                  b.x = f - b.width | 0;
                  break;
                case 2:
                  b.x = (f - b.width) / 2 | 0;
              }
            }
          }
          this.invalidate();
        }
      };
      e.roundBoundPoints = function(a) {
        for (var e = 0;e < a.length;e++) {
          var d = a[e];
          d.x = Math.floor(d.x + .1) + .5;
          d.y = Math.floor(d.y + .1) + .5;
        }
      };
      e.prototype.render = function(c) {
        c.save();
        var d = this._textBounds;
        this._backgroundColor && (c.fillStyle = l.ColorUtilities.rgbaToCSSStyle(this._backgroundColor), c.fillRect(d.x, d.y, d.w, d.h));
        if (this._borderColor) {
          c.strokeStyle = l.ColorUtilities.rgbaToCSSStyle(this._borderColor);
          c.lineCap = "square";
          c.lineWidth = 1;
          var b = e.absoluteBoundPoints, f = c.currentTransform;
          f ? (d = d.clone(), (new a(f.a, f.b, f.c, f.d, f.e, f.f)).transformRectangle(d, b), c.setTransform(1, 0, 0, 1, 0, 0)) : (b[0].x = d.x, b[0].y = d.y, b[1].x = d.x + d.w, b[1].y = d.y, b[2].x = d.x + d.w, b[2].y = d.y + d.h, b[3].x = d.x, b[3].y = d.y + d.h);
          e.roundBoundPoints(b);
          d = new Path2D;
          d.moveTo(b[0].x, b[0].y);
          d.lineTo(b[1].x, b[1].y);
          d.lineTo(b[2].x, b[2].y);
          d.lineTo(b[3].x, b[3].y);
          d.lineTo(b[0].x, b[0].y);
          c.stroke(d);
          f && c.setTransform(f.a, f.b, f.c, f.d, f.e, f.f);
        }
        this._coords ? this._renderChars(c) : this._renderLines(c);
        c.restore();
      };
      e.prototype._renderChars = function(a) {
        if (this._matrix) {
          var d = this._matrix;
          a.transform(d.a, d.b, d.c, d.d, d.tx, d.ty);
        }
        for (var d = this.lines, e = this._coords, b = e.position = 0;b < d.length;b++) {
          for (var f = d[b].runs, h = 0;h < f.length;h++) {
            var g = f[h];
            a.font = g.font;
            a.fillStyle = g.fillStyle;
            for (var g = g.text, k = 0;k < g.length;k++) {
              var p = e.readInt() / 20, l = e.readInt() / 20;
              a.fillText(g[k], p, l);
            }
          }
        }
      };
      e.prototype._renderLines = function(a) {
        var d = this._textBounds;
        a.beginPath();
        a.rect(d.x + 2, d.y + 2, d.w - 4, d.h - 4);
        a.clip();
        a.translate(d.x - this._scrollH + 2, d.y + 2);
        for (var e = this.lines, b = this._scrollV, f = 0, h = 0;h < e.length;h++) {
          var g = e[h], k = g.x, p = g.y;
          if (h + 1 < b) {
            f = p + g.descent + g.leading;
          } else {
            p -= f;
            if (h + 1 - b && p > d.h) {
              break;
            }
            for (var l = g.runs, q = 0;q < l.length;q++) {
              var r = l[q];
              a.font = r.font;
              a.fillStyle = r.fillStyle;
              r.underline && a.fillRect(k, p + g.descent / 2 | 0, r.width, 1);
              a.textAlign = "left";
              a.textBaseline = "alphabetic";
              a.fillText(r.text, k, p);
              k += r.width;
            }
          }
        }
      };
      e.absoluteBoundPoints = [new w(0, 0), new w(0, 0), new w(0, 0), new w(0, 0)];
      return e;
    }(u);
    n.RenderableText = h;
    u = function(a) {
      function d(c, e) {
        a.call(this);
        this._flags = 3145728;
        this.properties = {};
        this.setBounds(new t(0, 0, c, e));
      }
      __extends(d, a);
      Object.defineProperty(d.prototype, "text", {get:function() {
        return this._text;
      }, set:function(a) {
        this._text = a;
      }, enumerable:!0, configurable:!0});
      d.prototype.render = function(a, d, e) {
        a.save();
        a.textBaseline = "top";
        a.fillStyle = "white";
        a.fillText(this.text, 0, 0);
        a.restore();
      };
      return d;
    }(u);
    n.Label = u;
  })(l.GFX || (l.GFX = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(n) {
    function g(a, b, h, g, p) {
      b = t[b - 1];
      p && (p = b / 4, h -= p, g -= p);
      p = Math.ceil((1 > h ? 1 : h) / (b - 1E-9));
      b = Math.ceil((1 > g ? 1 : g) / (b - 1E-9));
      a.x -= p;
      a.w += 2 * p;
      a.y -= b;
      a.h += 2 * b;
    }
    var b = l.ColorUtilities.clampByte, w = function() {
      function a() {
      }
      a.prototype.expandBounds = function(a) {
      };
      return a;
    }();
    n.Filter = w;
    var t = [2, 1 / 1.05, 1 / 1.35, 1 / 1.55, 1 / 1.75, 1 / 1.9, .5, 1 / 2.1, 1 / 2.2, 1 / 2.3, .4, 1 / 3, 1 / 3, 1 / 3.5, 1 / 3.5], a = function(a) {
      function b(h, g, p) {
        a.call(this);
        this.blurX = h;
        this.blurY = g;
        this.quality = p;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        g(a, this.quality, this.blurX, this.blurY, !0);
      };
      return b;
    }(w);
    n.BlurFilter = a;
    a = function(a) {
      function b(h, g, p, l, v, d, f, e, c, m, n) {
        a.call(this);
        this.alpha = h;
        this.angle = g;
        this.blurX = p;
        this.blurY = l;
        this.color = v;
        this.distance = d;
        this.hideObject = f;
        this.inner = e;
        this.knockout = c;
        this.quality = m;
        this.strength = n;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        if (!this.inner && (g(a, this.quality, this.blurX, this.blurY, !1), this.distance)) {
          var b = this.angle * Math.PI / 180, k = Math.cos(b) * this.distance, l = Math.sin(b) * this.distance, b = a.x + (0 <= k ? 0 : Math.floor(k)), k = a.x + a.w + Math.ceil(Math.abs(k)), v = a.y + (0 <= l ? 0 : Math.floor(l)), l = a.y + a.h + Math.ceil(Math.abs(l));
          a.x = b;
          a.w = k - b;
          a.y = v;
          a.h = l - v;
        }
      };
      return b;
    }(w);
    n.DropshadowFilter = a;
    a = function(a) {
      function b(h, g, p, l, v, d, f, e) {
        a.call(this);
        this.alpha = h;
        this.blurX = g;
        this.blurY = p;
        this.color = l;
        this.inner = v;
        this.knockout = d;
        this.quality = f;
        this.strength = e;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        this.inner || g(a, this.quality, this.blurX, this.blurY, !1);
      };
      return b;
    }(w);
    n.GlowFilter = a;
    (function(a) {
      a[a.Unknown = 0] = "Unknown";
      a[a.Identity = 1] = "Identity";
    })(n.ColorMatrixType || (n.ColorMatrixType = {}));
    w = function(a) {
      function g(b) {
        a.call(this);
        this._data = new Float32Array(b);
        this._type = 0;
      }
      __extends(g, a);
      g.prototype.clone = function() {
        var a = new g(this._data);
        a._type = this._type;
        return a;
      };
      g.prototype.set = function(a) {
        this._data.set(a._data);
        this._type = a._type;
      };
      g.prototype.toWebGLMatrix = function() {
        return new Float32Array(this._data);
      };
      g.prototype.asWebGLMatrix = function() {
        return this._data.subarray(0, 16);
      };
      g.prototype.asWebGLVector = function() {
        return this._data.subarray(16, 20);
      };
      g.prototype.isIdentity = function() {
        if (this._type & 1) {
          return !0;
        }
        var a = this._data;
        return 1 == a[0] && 0 == a[1] && 0 == a[2] && 0 == a[3] && 0 == a[4] && 1 == a[5] && 0 == a[6] && 0 == a[7] && 0 == a[8] && 0 == a[9] && 1 == a[10] && 0 == a[11] && 0 == a[12] && 0 == a[13] && 0 == a[14] && 1 == a[15] && 0 == a[16] && 0 == a[17] && 0 == a[18] && 0 == a[19];
      };
      g.createIdentity = function() {
        var a = new g([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0]);
        a._type = 1;
        return a;
      };
      g.prototype.setMultipliersAndOffsets = function(a, b, g, k, l, d, f, e) {
        for (var c = this._data, m = 0;m < c.length;m++) {
          c[m] = 0;
        }
        c[0] = a;
        c[5] = b;
        c[10] = g;
        c[15] = k;
        c[16] = l / 255;
        c[17] = d / 255;
        c[18] = f / 255;
        c[19] = e / 255;
        this._type = 0;
      };
      g.prototype.transformRGBA = function(a) {
        var g = a >> 24 & 255, k = a >> 16 & 255, l = a >> 8 & 255, v = a & 255, d = this._data;
        a = b(g * d[0] + k * d[1] + l * d[2] + v * d[3] + 255 * d[16]);
        var f = b(g * d[4] + k * d[5] + l * d[6] + v * d[7] + 255 * d[17]), e = b(g * d[8] + k * d[9] + l * d[10] + v * d[11] + 255 * d[18]), g = b(g * d[12] + k * d[13] + l * d[14] + v * d[15] + 255 * d[19]);
        return a << 24 | f << 16 | e << 8 | g;
      };
      g.prototype.multiply = function(a) {
        if (!(a._type & 1)) {
          var b = this._data, g = a._data;
          a = b[0];
          var k = b[1], l = b[2], d = b[3], f = b[4], e = b[5], c = b[6], m = b[7], n = b[8], u = b[9], t = b[10], w = b[11], U = b[12], J = b[13], V = b[14], Y = b[15], ia = b[16], ja = b[17], X = b[18], fa = b[19], D = g[0], z = g[1], A = g[2], C = g[3], y = g[4], G = g[5], B = g[6], E = g[7], H = g[8], K = g[9], L = g[10], M = g[11], N = g[12], O = g[13], P = g[14], Q = g[15], R = g[16], S = g[17], T = g[18], g = g[19];
          b[0] = a * D + f * z + n * A + U * C;
          b[1] = k * D + e * z + u * A + J * C;
          b[2] = l * D + c * z + t * A + V * C;
          b[3] = d * D + m * z + w * A + Y * C;
          b[4] = a * y + f * G + n * B + U * E;
          b[5] = k * y + e * G + u * B + J * E;
          b[6] = l * y + c * G + t * B + V * E;
          b[7] = d * y + m * G + w * B + Y * E;
          b[8] = a * H + f * K + n * L + U * M;
          b[9] = k * H + e * K + u * L + J * M;
          b[10] = l * H + c * K + t * L + V * M;
          b[11] = d * H + m * K + w * L + Y * M;
          b[12] = a * N + f * O + n * P + U * Q;
          b[13] = k * N + e * O + u * P + J * Q;
          b[14] = l * N + c * O + t * P + V * Q;
          b[15] = d * N + m * O + w * P + Y * Q;
          b[16] = a * R + f * S + n * T + U * g + ia;
          b[17] = k * R + e * S + u * T + J * g + ja;
          b[18] = l * R + c * S + t * T + V * g + X;
          b[19] = d * R + m * S + w * T + Y * g + fa;
          this._type = 0;
        }
      };
      Object.defineProperty(g.prototype, "alphaMultiplier", {get:function() {
        return this._data[15];
      }, enumerable:!0, configurable:!0});
      g.prototype.hasOnlyAlphaMultiplier = function() {
        var a = this._data;
        return 1 == a[0] && 0 == a[1] && 0 == a[2] && 0 == a[3] && 0 == a[4] && 1 == a[5] && 0 == a[6] && 0 == a[7] && 0 == a[8] && 0 == a[9] && 1 == a[10] && 0 == a[11] && 0 == a[12] && 0 == a[13] && 0 == a[14] && 0 == a[16] && 0 == a[17] && 0 == a[18] && 0 == a[19];
      };
      g.prototype.equals = function(a) {
        if (!a) {
          return !1;
        }
        if (this._type === a._type && 1 === this._type) {
          return !0;
        }
        var b = this._data;
        a = a._data;
        for (var g = 0;20 > g;g++) {
          if (.001 < Math.abs(b[g] - a[g])) {
            return !1;
          }
        }
        return !0;
      };
      g.prototype.toSVGFilterMatrix = function() {
        var a = this._data;
        return [a[0], a[4], a[8], a[12], a[16], a[1], a[5], a[9], a[13], a[17], a[2], a[6], a[10], a[14], a[18], a[3], a[7], a[11], a[15], a[19]].join(" ");
      };
      return g;
    }(w);
    n.ColorMatrix = w;
  })(l.GFX || (l.GFX = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(n) {
    (function(g) {
      function b(a, b) {
        return -1 !== a.indexOf(b, this.length - b.length);
      }
      var w = n.Geometry.Point3D, t = n.Geometry.Matrix3D, a = n.Geometry.degreesToRadian, k = l.Debug.unexpected, u = l.Debug.notImplemented;
      g.SHADER_ROOT = "shaders/";
      var h = function() {
        function h(a, b) {
          this._fillColor = l.Color.Red;
          this._surfaceRegionCache = new l.LRUList;
          this.modelViewProjectionMatrix = t.createIdentity();
          this._canvas = a;
          this._options = b;
          this.gl = a.getContext("experimental-webgl", {preserveDrawingBuffer:!1, antialias:!0, stencil:!0, premultipliedAlpha:!1});
          this._programCache = Object.create(null);
          this._resize();
          this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, b.unpackPremultiplyAlpha ? this.gl.ONE : this.gl.ZERO);
          this._backgroundColor = l.Color.Black;
          this._geometry = new g.WebGLGeometry(this);
          this._tmpVertices = g.Vertex.createEmptyVertices(g.Vertex, 64);
          this._maxSurfaces = b.maxSurfaces;
          this._maxSurfaceSize = b.maxSurfaceSize;
          this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
          this.gl.enable(this.gl.BLEND);
          this.modelViewProjectionMatrix = t.create2DProjection(this._w, this._h, 2E3);
          var k = this;
          this._surfaceRegionAllocator = new n.SurfaceRegionAllocator.SimpleAllocator(function() {
            var a = k._createTexture();
            return new g.WebGLSurface(1024, 1024, a);
          });
        }
        Object.defineProperty(h.prototype, "surfaces", {get:function() {
          return this._surfaceRegionAllocator.surfaces;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(h.prototype, "fillStyle", {set:function(a) {
          this._fillColor.set(l.Color.parseColor(a));
        }, enumerable:!0, configurable:!0});
        h.prototype.setBlendMode = function(a) {
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
        h.prototype.setBlendOptions = function() {
          this.gl.blendFunc(this._options.sourceBlendFactor, this._options.destinationBlendFactor);
        };
        h.glSupportedBlendMode = function(a) {
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
        h.prototype.create2DProjectionMatrix = function() {
          return t.create2DProjection(this._w, this._h, -this._w);
        };
        h.prototype.createPerspectiveMatrix = function(b, h, g) {
          g = a(g);
          h = t.createPerspective(a(h));
          var d = new w(0, 1, 0), f = new w(0, 0, 0);
          b = new w(0, 0, b);
          b = t.createCameraLookAt(b, f, d);
          b = t.createInverse(b);
          d = t.createIdentity();
          d = t.createMultiply(d, t.createTranslation(-this._w / 2, -this._h / 2));
          d = t.createMultiply(d, t.createScale(1 / this._w, -1 / this._h, .01));
          d = t.createMultiply(d, t.createYRotation(g));
          d = t.createMultiply(d, b);
          return d = t.createMultiply(d, h);
        };
        h.prototype.discardCachedImages = function() {
          2 <= n.traceLevel && n.writer && n.writer.writeLn("Discard Cache");
          for (var a = this._surfaceRegionCache.count / 2 | 0, b = 0;b < a;b++) {
            var h = this._surfaceRegionCache.pop();
            2 <= n.traceLevel && n.writer && n.writer.writeLn("Discard: " + h);
            h.texture.atlas.remove(h.region);
            h.texture = null;
          }
        };
        h.prototype.cacheImage = function(a) {
          var b = this.allocateSurfaceRegion(a.width, a.height);
          2 <= n.traceLevel && n.writer && n.writer.writeLn("Uploading Image: @ " + b.region);
          this._surfaceRegionCache.use(b);
          this.updateSurfaceRegion(a, b);
          return b;
        };
        h.prototype.allocateSurfaceRegion = function(a, b) {
          return this._surfaceRegionAllocator.allocate(a, b, null);
        };
        h.prototype.updateSurfaceRegion = function(a, b) {
          var h = this.gl;
          h.bindTexture(h.TEXTURE_2D, b.surface.texture);
          h.texSubImage2D(h.TEXTURE_2D, 0, b.region.x, b.region.y, h.RGBA, h.UNSIGNED_BYTE, a);
        };
        h.prototype._resize = function() {
          var a = this.gl;
          this._w = this._canvas.width;
          this._h = this._canvas.height;
          a.viewport(0, 0, this._w, this._h);
          for (var b in this._programCache) {
            this._initializeProgram(this._programCache[b]);
          }
        };
        h.prototype._initializeProgram = function(a) {
          this.gl.useProgram(a);
        };
        h.prototype._createShaderFromFile = function(a) {
          var h = g.SHADER_ROOT + a, k = this.gl;
          a = new XMLHttpRequest;
          a.open("GET", h, !1);
          a.send();
          if (b(h, ".vert")) {
            h = k.VERTEX_SHADER;
          } else {
            if (b(h, ".frag")) {
              h = k.FRAGMENT_SHADER;
            } else {
              throw "Shader Type: not supported.";
            }
          }
          return this._createShader(h, a.responseText);
        };
        h.prototype.createProgramFromFiles = function() {
          var a = this._programCache["combined.vert-combined.frag"];
          a || (a = this._createProgram([this._createShaderFromFile("combined.vert"), this._createShaderFromFile("combined.frag")]), this._queryProgramAttributesAndUniforms(a), this._initializeProgram(a), this._programCache["combined.vert-combined.frag"] = a);
          return a;
        };
        h.prototype._createProgram = function(a) {
          var b = this.gl, h = b.createProgram();
          a.forEach(function(a) {
            b.attachShader(h, a);
          });
          b.linkProgram(h);
          b.getProgramParameter(h, b.LINK_STATUS) || (k("Cannot link program: " + b.getProgramInfoLog(h)), b.deleteProgram(h));
          return h;
        };
        h.prototype._createShader = function(a, b) {
          var h = this.gl, d = h.createShader(a);
          h.shaderSource(d, b);
          h.compileShader(d);
          return h.getShaderParameter(d, h.COMPILE_STATUS) ? d : (k("Cannot compile shader: " + h.getShaderInfoLog(d)), h.deleteShader(d), null);
        };
        h.prototype._createTexture = function() {
          var a = this.gl, b = a.createTexture();
          a.bindTexture(a.TEXTURE_2D, b);
          a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE);
          a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE);
          a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR);
          a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR);
          a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, 1024, 1024, 0, a.RGBA, a.UNSIGNED_BYTE, null);
          return b;
        };
        h.prototype._createFramebuffer = function(a) {
          var b = this.gl, h = b.createFramebuffer();
          b.bindFramebuffer(b.FRAMEBUFFER, h);
          b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, a, 0);
          b.bindFramebuffer(b.FRAMEBUFFER, null);
          return h;
        };
        h.prototype._queryProgramAttributesAndUniforms = function(a) {
          a.uniforms = {};
          a.attributes = {};
          for (var b = this.gl, h = 0, d = b.getProgramParameter(a, b.ACTIVE_ATTRIBUTES);h < d;h++) {
            var f = b.getActiveAttrib(a, h);
            a.attributes[f.name] = f;
            f.location = b.getAttribLocation(a, f.name);
          }
          h = 0;
          for (d = b.getProgramParameter(a, b.ACTIVE_UNIFORMS);h < d;h++) {
            f = b.getActiveUniform(a, h), a.uniforms[f.name] = f, f.location = b.getUniformLocation(a, f.name);
          }
        };
        Object.defineProperty(h.prototype, "target", {set:function(a) {
          var b = this.gl;
          a ? (b.viewport(0, 0, a.w, a.h), b.bindFramebuffer(b.FRAMEBUFFER, a.framebuffer)) : (b.viewport(0, 0, this._w, this._h), b.bindFramebuffer(b.FRAMEBUFFER, null));
        }, enumerable:!0, configurable:!0});
        h.prototype.clear = function(a) {
          a = this.gl;
          a.clearColor(0, 0, 0, 0);
          a.clear(a.COLOR_BUFFER_BIT);
        };
        h.prototype.clearTextureRegion = function(a, b) {
          void 0 === b && (b = l.Color.None);
          var h = this.gl, d = a.region;
          this.target = a.surface;
          h.enable(h.SCISSOR_TEST);
          h.scissor(d.x, d.y, d.w, d.h);
          h.clearColor(b.r, b.g, b.b, b.a);
          h.clear(h.COLOR_BUFFER_BIT | h.DEPTH_BUFFER_BIT);
          h.disable(h.SCISSOR_TEST);
        };
        h.prototype.sizeOf = function(a) {
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
        h.MAX_SURFACES = 8;
        return h;
      }();
      g.WebGLContext = h;
    })(n.WebGL || (n.WebGL = {}));
  })(l.GFX || (l.GFX = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(l, n) {
  function g() {
    this.constructor = l;
  }
  for (var b in n) {
    n.hasOwnProperty(b) && (l[b] = n[b]);
  }
  g.prototype = n.prototype;
  l.prototype = new g;
};
(function(l) {
  (function(n) {
    (function(g) {
      var b = l.Debug.assert, w = function(a) {
        function g() {
          a.apply(this, arguments);
        }
        __extends(g, a);
        g.prototype.ensureVertexCapacity = function(a) {
          b(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 8 * a);
        };
        g.prototype.writeVertex = function(a, h) {
          b(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 8);
          this.writeVertexUnsafe(a, h);
        };
        g.prototype.writeVertexUnsafe = function(a, b) {
          var g = this._offset >> 2;
          this._f32[g] = a;
          this._f32[g + 1] = b;
          this._offset += 8;
        };
        g.prototype.writeVertex3D = function(a, h, g) {
          b(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 12);
          this.writeVertex3DUnsafe(a, h, g);
        };
        g.prototype.writeVertex3DUnsafe = function(a, b, g) {
          var k = this._offset >> 2;
          this._f32[k] = a;
          this._f32[k + 1] = b;
          this._f32[k + 2] = g;
          this._offset += 12;
        };
        g.prototype.writeTriangleElements = function(a, h, g) {
          b(0 === (this._offset & 1));
          this.ensureCapacity(this._offset + 6);
          var k = this._offset >> 1;
          this._u16[k] = a;
          this._u16[k + 1] = h;
          this._u16[k + 2] = g;
          this._offset += 6;
        };
        g.prototype.ensureColorCapacity = function(a) {
          b(0 === (this._offset & 2));
          this.ensureCapacity(this._offset + 16 * a);
        };
        g.prototype.writeColorFloats = function(a, h, g, k) {
          b(0 === (this._offset & 2));
          this.ensureCapacity(this._offset + 16);
          this.writeColorFloatsUnsafe(a, h, g, k);
        };
        g.prototype.writeColorFloatsUnsafe = function(a, b, g, k) {
          var l = this._offset >> 2;
          this._f32[l] = a;
          this._f32[l + 1] = b;
          this._f32[l + 2] = g;
          this._f32[l + 3] = k;
          this._offset += 16;
        };
        g.prototype.writeColor = function() {
          var a = Math.random(), h = Math.random(), g = Math.random(), k = Math.random() / 2;
          b(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 4);
          this._i32[this._offset >> 2] = k << 24 | g << 16 | h << 8 | a;
          this._offset += 4;
        };
        g.prototype.writeColorUnsafe = function(a, b, g, k) {
          this._i32[this._offset >> 2] = k << 24 | g << 16 | b << 8 | a;
          this._offset += 4;
        };
        g.prototype.writeRandomColor = function() {
          this.writeColor();
        };
        return g;
      }(l.ArrayUtilities.ArrayWriter);
      g.BufferWriter = w;
      g.WebGLAttribute = function() {
        return function(a, b, g, h) {
          void 0 === h && (h = !1);
          this.name = a;
          this.size = b;
          this.type = g;
          this.normalized = h;
        };
      }();
      var t = function() {
        function a(a) {
          this.size = 0;
          this.attributes = a;
        }
        a.prototype.initialize = function(a) {
          for (var b = 0, h = 0;h < this.attributes.length;h++) {
            this.attributes[h].offset = b, b += a.sizeOf(this.attributes[h].type) * this.attributes[h].size;
          }
          this.size = b;
        };
        return a;
      }();
      g.WebGLAttributeList = t;
      t = function() {
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
      g.WebGLGeometry = t;
      t = function(a) {
        function b(g, h, k) {
          a.call(this, g, h, k);
        }
        __extends(b, a);
        b.createEmptyVertices = function(a, b) {
          for (var g = [], k = 0;k < b;k++) {
            g.push(new a(0, 0, 0));
          }
          return g;
        };
        return b;
      }(n.Geometry.Point3D);
      g.Vertex = t;
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
      })(g.WebGLBlendFactor || (g.WebGLBlendFactor = {}));
    })(n.WebGL || (n.WebGL = {}));
  })(l.GFX || (l.GFX = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(l) {
    (function(g) {
      var b = function() {
        function b(a, g, u) {
          this.texture = u;
          this.w = a;
          this.h = g;
          this._regionAllocator = new l.RegionAllocator.CompactAllocator(this.w, this.h);
        }
        b.prototype.allocate = function(a, b) {
          var g = this._regionAllocator.allocate(a, b);
          return g ? new w(this, g) : null;
        };
        b.prototype.free = function(a) {
          this._regionAllocator.free(a.region);
        };
        return b;
      }();
      g.WebGLSurface = b;
      var w = function() {
        return function(b, a) {
          this.surface = b;
          this.region = a;
          this.next = this.previous = null;
        };
      }();
      g.WebGLSurfaceRegion = w;
    })(l.WebGL || (l.WebGL = {}));
  })(l.GFX || (l.GFX = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(n) {
    (function(g) {
      var b = l.Color;
      g.TILE_SIZE = 256;
      g.MIN_UNTILED_SIZE = 256;
      var w = n.Geometry.Matrix, t = n.Geometry.Rectangle, a = function(a) {
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
      }(n.RendererOptions);
      g.WebGLRendererOptions = a;
      var k = function(k) {
        function h(b, h, l) {
          void 0 === l && (l = new a);
          k.call(this, b, h, l);
          this._tmpVertices = g.Vertex.createEmptyVertices(g.Vertex, 64);
          this._cachedTiles = [];
          b = this._context = new g.WebGLContext(this._canvas, l);
          this._updateSize();
          this._brush = new g.WebGLCombinedBrush(b, new g.WebGLGeometry(b));
          this._stencilBrush = new g.WebGLCombinedBrush(b, new g.WebGLGeometry(b));
          this._scratchCanvas = document.createElement("canvas");
          this._scratchCanvas.width = this._scratchCanvas.height = 2048;
          this._scratchCanvasContext = this._scratchCanvas.getContext("2d", {willReadFrequently:!0});
          this._dynamicScratchCanvas = document.createElement("canvas");
          this._dynamicScratchCanvas.width = this._dynamicScratchCanvas.height = 0;
          this._dynamicScratchCanvasContext = this._dynamicScratchCanvas.getContext("2d", {willReadFrequently:!0});
          this._uploadCanvas = document.createElement("canvas");
          this._uploadCanvas.width = this._uploadCanvas.height = 0;
          this._uploadCanvasContext = this._uploadCanvas.getContext("2d", {willReadFrequently:!0});
          l.showTemporaryCanvases && (document.getElementById("temporaryCanvasPanelContainer").appendChild(this._uploadCanvas), document.getElementById("temporaryCanvasPanelContainer").appendChild(this._scratchCanvas));
          this._clipStack = [];
        }
        __extends(h, k);
        h.prototype.resize = function() {
          this._updateSize();
          this.render();
        };
        h.prototype._updateSize = function() {
          this._viewport = new t(0, 0, this._canvas.width, this._canvas.height);
          this._context._resize();
        };
        h.prototype._cacheImageCallback = function(a, b, h) {
          var g = h.w, d = h.h, f = h.x;
          h = h.y;
          this._uploadCanvas.width = g + 2;
          this._uploadCanvas.height = d + 2;
          this._uploadCanvasContext.drawImage(b.canvas, f, h, g, d, 1, 1, g, d);
          this._uploadCanvasContext.drawImage(b.canvas, f, h, g, 1, 1, 0, g, 1);
          this._uploadCanvasContext.drawImage(b.canvas, f, h + d - 1, g, 1, 1, d + 1, g, 1);
          this._uploadCanvasContext.drawImage(b.canvas, f, h, 1, d, 0, 1, 1, d);
          this._uploadCanvasContext.drawImage(b.canvas, f + g - 1, h, 1, d, g + 1, 1, 1, d);
          return a && a.surface ? (this._options.disableSurfaceUploads || this._context.updateSurfaceRegion(this._uploadCanvas, a), a) : this._context.cacheImage(this._uploadCanvas);
        };
        h.prototype._enterClip = function(a, b, h, g) {
          h.flush();
          b = this._context.gl;
          0 === this._clipStack.length && (b.enable(b.STENCIL_TEST), b.clear(b.STENCIL_BUFFER_BIT), b.stencilFunc(b.ALWAYS, 1, 1));
          this._clipStack.push(a);
          b.colorMask(!1, !1, !1, !1);
          b.stencilOp(b.KEEP, b.KEEP, b.INCR);
          h.flush();
          b.colorMask(!0, !0, !0, !0);
          b.stencilFunc(b.NOTEQUAL, 0, this._clipStack.length);
          b.stencilOp(b.KEEP, b.KEEP, b.KEEP);
        };
        h.prototype._leaveClip = function(a, b, h, g) {
          h.flush();
          b = this._context.gl;
          if (a = this._clipStack.pop()) {
            b.colorMask(!1, !1, !1, !1), b.stencilOp(b.KEEP, b.KEEP, b.DECR), h.flush(), b.colorMask(!0, !0, !0, !0), b.stencilFunc(b.NOTEQUAL, 0, this._clipStack.length), b.stencilOp(b.KEEP, b.KEEP, b.KEEP);
          }
          0 === this._clipStack.length && b.disable(b.STENCIL_TEST);
        };
        h.prototype._renderFrame = function(a, b, h, g) {
        };
        h.prototype._renderSurfaces = function(a) {
          var h = this._options, k = this._context, l = this._viewport;
          if (h.drawSurfaces) {
            var d = k.surfaces, k = w.createIdentity();
            if (0 <= h.drawSurface && h.drawSurface < d.length) {
              for (var h = d[h.drawSurface | 0], d = new t(0, 0, h.w, h.h), f = d.clone();f.w > l.w;) {
                f.scale(.5, .5);
              }
              a.drawImage(new g.WebGLSurfaceRegion(h, d), f, b.White, null, k, .2);
            } else {
              f = l.w / 5;
              f > l.h / d.length && (f = l.h / d.length);
              a.fillRectangle(new t(l.w - f, 0, f, l.h), new b(0, 0, 0, .5), k, .1);
              for (var e = 0;e < d.length;e++) {
                var h = d[e], c = new t(l.w - f, e * f, f, f);
                a.drawImage(new g.WebGLSurfaceRegion(h, new t(0, 0, h.w, h.h)), c, b.White, null, k, .2);
              }
            }
            a.flush();
          }
        };
        h.prototype.render = function() {
          var a = this._options, h = this._context.gl;
          this._context.modelViewProjectionMatrix = a.perspectiveCamera ? this._context.createPerspectiveMatrix(a.perspectiveCameraDistance + (a.animateZoom ? .8 * Math.sin(Date.now() / 3E3) : 0), a.perspectiveCameraFOV, a.perspectiveCameraAngle) : this._context.create2DProjectionMatrix();
          var g = this._brush;
          h.clearColor(0, 0, 0, 0);
          h.clear(h.COLOR_BUFFER_BIT | h.DEPTH_BUFFER_BIT);
          g.reset();
          h = this._viewport;
          g.flush();
          a.paintViewport && (g.fillRectangle(h, new b(.5, 0, 0, .25), w.createIdentity(), 0), g.flush());
          this._renderSurfaces(g);
        };
        return h;
      }(n.Renderer);
      g.WebGLRenderer = k;
    })(n.WebGL || (n.WebGL = {}));
  })(l.GFX || (l.GFX = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(n) {
    (function(g) {
      var b = l.Color, w = n.Geometry.Point, t = n.Geometry.Matrix3D, a = function() {
        function a(b, g, k) {
          this._target = k;
          this._context = b;
          this._geometry = g;
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
      g.WebGLBrush = a;
      (function(a) {
        a[a.FillColor = 0] = "FillColor";
        a[a.FillTexture = 1] = "FillTexture";
        a[a.FillTextureWithColorMatrix = 2] = "FillTextureWithColorMatrix";
      })(g.WebGLCombinedBrushKind || (g.WebGLCombinedBrushKind = {}));
      var k = function(a) {
        function h(h, g, k) {
          a.call(this, h, g, k);
          this.kind = 0;
          this.color = new b(0, 0, 0, 0);
          this.sampler = 0;
          this.coordinate = new w(0, 0);
        }
        __extends(h, a);
        h.initializeAttributeList = function(a) {
          var b = a.gl;
          h.attributeList || (h.attributeList = new g.WebGLAttributeList([new g.WebGLAttribute("aPosition", 3, b.FLOAT), new g.WebGLAttribute("aCoordinate", 2, b.FLOAT), new g.WebGLAttribute("aColor", 4, b.UNSIGNED_BYTE, !0), new g.WebGLAttribute("aKind", 1, b.FLOAT), new g.WebGLAttribute("aSampler", 1, b.FLOAT)]), h.attributeList.initialize(a));
        };
        h.prototype.writeTo = function(a) {
          a = a.array;
          a.ensureAdditionalCapacity();
          a.writeVertex3DUnsafe(this.x, this.y, this.z);
          a.writeVertexUnsafe(this.coordinate.x, this.coordinate.y);
          a.writeColorUnsafe(255 * this.color.r, 255 * this.color.g, 255 * this.color.b, 255 * this.color.a);
          a.writeFloatUnsafe(this.kind);
          a.writeFloatUnsafe(this.sampler);
        };
        return h;
      }(g.Vertex);
      g.WebGLCombinedBrushVertex = k;
      a = function(a) {
        function b(h, g, l) {
          void 0 === l && (l = null);
          a.call(this, h, g, l);
          this._blendMode = 1;
          this._program = h.createProgramFromFiles();
          this._surfaces = [];
          k.initializeAttributeList(this._context);
        }
        __extends(b, a);
        b.prototype.reset = function() {
          this._surfaces = [];
          this._geometry.reset();
        };
        b.prototype.drawImage = function(a, g, k, l, d, f, e) {
          void 0 === f && (f = 0);
          void 0 === e && (e = 1);
          if (!a || !a.surface) {
            return !0;
          }
          g = g.clone();
          this._colorMatrix && (l && this._colorMatrix.equals(l) || this.flush());
          this._colorMatrix = l;
          this._blendMode !== e && (this.flush(), this._blendMode = e);
          e = this._surfaces.indexOf(a.surface);
          0 > e && (8 === this._surfaces.length && this.flush(), this._surfaces.push(a.surface), e = this._surfaces.length - 1);
          var c = b._tmpVertices, m = a.region.clone();
          m.offset(1, 1).resize(-2, -2);
          m.scale(1 / a.surface.w, 1 / a.surface.h);
          d.transformRectangle(g, c);
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
        b.prototype.fillRectangle = function(a, g, k, l) {
          void 0 === l && (l = 0);
          k.transformRectangle(a, b._tmpVertices);
          for (a = 0;4 > a;a++) {
            k = b._tmpVertices[a], k.kind = 0, k.color.set(g), k.z = l, k.writeTo(this._geometry);
          }
          this._geometry.addQuad();
        };
        b.prototype.flush = function() {
          var a = this._geometry, b = this._program, g = this._context.gl, h;
          a.uploadBuffers();
          g.useProgram(b);
          this._target ? (h = t.create2DProjection(this._target.w, this._target.h, 2E3), h = t.createMultiply(h, t.createScale(1, -1, 1))) : h = this._context.modelViewProjectionMatrix;
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
        b._tmpVertices = g.Vertex.createEmptyVertices(k, 4);
        b._depth = 1;
        return b;
      }(a);
      g.WebGLCombinedBrush = a;
    })(n.WebGL || (n.WebGL = {}));
  })(l.GFX || (l.GFX = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(l) {
    (function(g) {
      var b = CanvasRenderingContext2D.prototype.save, l = CanvasRenderingContext2D.prototype.clip, n = CanvasRenderingContext2D.prototype.fill, a = CanvasRenderingContext2D.prototype.stroke, k = CanvasRenderingContext2D.prototype.restore, u = CanvasRenderingContext2D.prototype.beginPath;
      g.notifyReleaseChanged = function() {
        CanvasRenderingContext2D.prototype.save = b;
        CanvasRenderingContext2D.prototype.clip = l;
        CanvasRenderingContext2D.prototype.fill = n;
        CanvasRenderingContext2D.prototype.stroke = a;
        CanvasRenderingContext2D.prototype.restore = k;
        CanvasRenderingContext2D.prototype.beginPath = u;
      };
      CanvasRenderingContext2D.prototype.enterBuildingClippingRegion = function() {
        this.buildingClippingRegionDepth || (this.buildingClippingRegionDepth = 0);
        this.buildingClippingRegionDepth++;
      };
      CanvasRenderingContext2D.prototype.leaveBuildingClippingRegion = function() {
        this.buildingClippingRegionDepth--;
      };
    })(l.Canvas2D || (l.Canvas2D = {}));
  })(l.GFX || (l.GFX = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(n) {
    (function(g) {
      function b(a, b) {
        var g = a / 2;
        switch(b) {
          case 0:
            return 0;
          case 1:
            return g / 2.7;
          case 2:
            return g / 1.28;
          default:
            return g;
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
            l.Debug.somewhatImplemented("Blend Mode: " + n.BlendMode[a]);
        }
        return b;
      }
      var t = l.NumberUtilities.clamp;
      navigator.userAgent.indexOf("Firefox");
      var a = function() {
        function a() {
        }
        a._prepareSVGFilters = function() {
          if (!a._svgBlurFilter) {
            var b = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            b.setAttribute("style", "display:block;width:0px;height:0px");
            var g = document.createElementNS("http://www.w3.org/2000/svg", "defs"), k = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            k.setAttribute("id", "svgBlurFilter");
            var l = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
            l.setAttribute("stdDeviation", "0 0");
            k.appendChild(l);
            g.appendChild(k);
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
            g.appendChild(k);
            k = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            k.setAttribute("id", "svgColorMatrixFilter");
            l = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
            l.setAttribute("color-interpolation-filters", "sRGB");
            l.setAttribute("in", "SourceGraphic");
            l.setAttribute("type", "matrix");
            k.appendChild(l);
            g.appendChild(k);
            a._svgColorMatrixFilter = l;
            b.appendChild(g);
            document.documentElement.appendChild(b);
          }
        };
        a._applyFilter = function(g, k, q) {
          if (a._svgFiltersAreSupported) {
            if (a._prepareSVGFilters(), a._removeFilter(k), q instanceof n.BlurFilter) {
              var v = b(g, q.quality);
              a._svgBlurFilter.setAttribute("stdDeviation", q.blurX * v + " " + q.blurY * v);
              k.filter = "url(#svgBlurFilter)";
            } else {
              q instanceof n.DropshadowFilter ? (v = b(g, q.quality), a._svgDropshadowFilterBlur.setAttribute("stdDeviation", q.blurX * v + " " + q.blurY * v), a._svgDropshadowFilterOffset.setAttribute("dx", String(Math.cos(q.angle * Math.PI / 180) * q.distance * g)), a._svgDropshadowFilterOffset.setAttribute("dy", String(Math.sin(q.angle * Math.PI / 180) * q.distance * g)), a._svgDropshadowFilterFlood.setAttribute("flood-color", l.ColorUtilities.rgbaToCSSStyle(q.color << 8 | Math.round(255 * q.alpha))), 
              k.filter = "url(#svgDropShadowFilter)") : q instanceof n.ColorMatrix && (a._svgColorMatrixFilter.setAttribute("values", q.toSVGFilterMatrix()), k.filter = "url(#svgColorMatrixFilter)");
            }
          }
        };
        a._removeFilter = function(a) {
          a.filter = "none";
        };
        a._applyColorMatrix = function(a, b) {
          b.isIdentity() ? (a.globalAlpha = 1, a.globalColorMatrix = null) : b.hasOnlyAlphaMultiplier() ? (a.globalAlpha = t(b.alphaMultiplier, 0, 1), a.globalColorMatrix = null) : (a.globalAlpha = 1, a.globalColorMatrix = b);
        };
        a._svgFiltersAreSupported = !!Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype, "filter");
        return a;
      }();
      g.Filters = a;
      n.filters && a._svgFiltersAreSupported && ("registerScratchCanvas" in window || (window.registerScratchCanvas = function(a) {
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
        b._ensureCopyCanvasSize = function(a, g) {
          var k;
          if (b._copyCanvasContext) {
            if (k = b._copyCanvasContext.canvas, k.width < a || k.height < g) {
              k.width = l.IntegerUtilities.nearestPowerOfTwo(a), k.height = l.IntegerUtilities.nearestPowerOfTwo(g);
            }
          } else {
            k = document.createElement("canvas"), "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(k), k.width = l.IntegerUtilities.nearestPowerOfTwo(a), k.height = l.IntegerUtilities.nearestPowerOfTwo(g), b._copyCanvasContext = k.getContext("2d");
          }
        };
        b.prototype.draw = function(g, k, l, n, d, f, e, c, m) {
          this.context.setTransform(1, 0, 0, 1, 0, 0);
          var u, F = 0, t = 0;
          g.context.canvas === this.context.canvas ? (b._ensureCopyCanvasSize(n, d), u = b._copyCanvasContext, u.clearRect(0, 0, n, d), u.drawImage(g.surface.canvas, g.region.x, g.region.y, n, d, 0, 0, n, d), f = u, t = F = 0) : (f = g.surface.context, F = g.region.x, t = g.region.y);
          a: {
            switch(e) {
              case 11:
                g = !0;
                break a;
              default:
                g = !1;
            }
          }
          g && (this.context.save(), this.context.beginPath(), this.context.rect(k, l, n, d), this.context.clip());
          this.context.globalAlpha = 1;
          this.context.globalCompositeOperation = w(e);
          if (c) {
            e = 0;
            if (1 < c.length) {
              var W, U, J, V;
              u ? (J = u, u = f, f = J) : (b._ensureCopyCanvasSize(n, d), u = b._copyCanvasContext, U = W = 0);
              for (;e < c.length - 1;e++) {
                u.clearRect(0, 0, n, d), a._applyFilter(m, u, c[e]), u.drawImage(f.canvas, F, t, n, d, W, U, n, d), a._removeFilter(u), J = u, U = F, V = t, u = f, f = J, t = F = W, W = U, U = V;
              }
              a._removeFilter(f);
              a._removeFilter(u);
            }
            a._applyFilter(m, this.context, c[e]);
          }
          this.context.drawImage(f.canvas, F, t, n, d, k, l, n, d);
          this.context.globalCompositeOperation = w(1);
          a._removeFilter(this.context);
          g && this.context.restore();
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
      g.Canvas2DSurfaceRegion = k;
      var u = function() {
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
      g.Canvas2DSurface = u;
    })(n.Canvas2D || (n.Canvas2D = {}));
  })(l.GFX || (l.GFX = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(n) {
    (function(g) {
      var b = l.Debug.assert, w = l.GFX.Geometry.Rectangle, t = l.GFX.Geometry.Point, a = l.GFX.Geometry.Matrix, k = l.NumberUtilities.clamp, u = l.NumberUtilities.pow2, h = function() {
        return function(a, b) {
          this.surfaceRegion = a;
          this.scale = b;
        };
      }();
      g.MipMapLevel = h;
      var r = function() {
        function a(b, c, d, f) {
          this._node = c;
          this._levels = [];
          this._surfaceRegionAllocator = d;
          this._size = f;
          this._renderer = b;
        }
        a.prototype.getLevel = function(a) {
          a = Math.max(a.getAbsoluteScaleX(), a.getAbsoluteScaleY());
          var c = 0;
          1 !== a && (c = k(Math.round(Math.log(a) / Math.LN2), -5, 3));
          this._node.hasFlags(2097152) || (c = k(c, -5, 0));
          a = u(c);
          var b = 5 + c, c = this._levels[b];
          if (!c) {
            var d = this._node.getBounds().clone();
            d.scale(a, a);
            d.snap();
            var f = this._surfaceRegionAllocator.allocate(d.w, d.h, null), g = f.region, c = this._levels[b] = new h(f, a), b = new q(f);
            b.clip.set(g);
            b.matrix.setElements(a, 0, 0, a, g.x - d.x, g.y - d.y);
            b.flags |= 64;
            this._renderer.renderNodeWithState(this._node, b);
            b.free();
          }
          return c;
        };
        return a;
      }();
      g.MipMap = r;
      (function(a) {
        a[a.NonZero = 0] = "NonZero";
        a[a.EvenOdd = 1] = "EvenOdd";
      })(g.FillRule || (g.FillRule = {}));
      var p = function(a) {
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
      }(n.RendererOptions);
      g.Canvas2DRendererOptions = p;
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
      })(g.RenderFlags || (g.RenderFlags = {}));
      w.createMaxI16();
      var q = function(b) {
        function d(c) {
          b.call(this);
          this.clip = w.createEmpty();
          this.clipList = [];
          this.clipPath = null;
          this.flags = 0;
          this.target = null;
          this.matrix = a.createIdentity();
          this.colorMatrix = n.ColorMatrix.createIdentity();
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
          l.ArrayUtilities.copyFrom(this.clipList, a.clipList);
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
      }(n.State);
      g.RenderState = q;
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
      g.FrameInfo = v;
      var d = function(d) {
        function e(a, b, g) {
          void 0 === g && (g = new p);
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
          return new g.Canvas2DSurfaceRegion(new g.Canvas2DSurface(a), new n.RegionAllocator.Region(0, 0, a.width, a.height), a.width, a.height);
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
          e._initializedCaches || (e._surfaceCache = new n.SurfaceRegionAllocator.SimpleAllocator(function(a, b) {
            var d = document.createElement("canvas");
            "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(d);
            var e = Math.max(1024, a), f = Math.max(1024, b);
            d.width = e;
            d.height = f;
            var h = null, h = 512 <= a || 512 <= b ? new n.RegionAllocator.GridAllocator(e, f, e, f) : new n.RegionAllocator.BucketAllocator(e, f);
            return new g.Canvas2DSurface(d, h);
          }), e._shapeCache = new n.SurfaceRegionAllocator.SimpleAllocator(function(a, b) {
            var d = document.createElement("canvas");
            "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(d);
            d.width = 1024;
            d.height = 1024;
            var e = e = new n.RegionAllocator.CompactAllocator(1024, 1024);
            return new g.Canvas2DSurface(d, e);
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
          var e = new q(this._target);
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
          var g = this._options.cacheShapesMaxSize, h = Math.max(d.getAbsoluteScaleX(), d.getAbsoluteScaleY()), k = !!(b.flags & 16), l = !!(b.flags & 8);
          if (b.hasFlags(256)) {
            if (l || k || !b.colorMatrix.isIdentity() || a.hasFlags(1048576) || 100 < this._options.cacheShapesThreshold || f.w * h > g || f.h * h > g) {
              return !1;
            }
            (h = a.properties.mipMap) || (h = a.properties.mipMap = new r(this, a, e._shapeCache, g));
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
                    var l = k.clone();
                    l.flags |= 16;
                    l.beginClipPath(h.getMatrix());
                    g.visit(this, l);
                    l.applyClipPath();
                    l.free();
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
            g || (g = a.properties.style = l.Color.randomColor().toCSSStyle());
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
            g.Filters._applyColorMatrix(e, b.colorMatrix);
            a.source instanceof n.RenderableVideo ? this.visitRenderableVideo(a.source, b) : 0 < e.globalAlpha && this.visitRenderable(a.source, b, a.ratio);
            b.flags & 8192 && d.free();
            g.Filters._removeFilter(e);
          }
        };
        e.prototype.visitRenderableVideo = function(a, b) {
          if (a.video && a.video.videoWidth) {
            var d = this._devicePixelRatio, e = b.matrix.clone();
            e.scale(1 / d, 1 / d);
            var d = a.getBounds(), f = l.GFX.Geometry.Matrix.createIdentity();
            f.scale(d.w / a.video.videoWidth, d.h / a.video.videoHeight);
            e.preMultiply(f);
            f.free();
            d = e.toCSSTransform();
            a.video.style.transformOrigin = "0 0";
            a.video.style.transform = d;
            var g = this._backgroundVideoLayer;
            g !== a.video.parentElement && (g.appendChild(a.video), a.addEventListener(2, function J(a) {
              g.removeChild(a.video);
              a.removeEventListener(2, J);
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
              var l = f.clip.clone();
              l.intersect(h);
              l.intersect(k);
              l.snap();
              l.isEmpty() || (h = f.clone(), h.clip.set(l), a = this._renderToTemporarySurface(a, a.getBounds(), h, w.createEmpty(), null), h.free(), k = f.clone(), k.clip.set(l), k.matrix = g, k.flags |= 4, e && (k.flags |= 8), b = this._renderToTemporarySurface(b, b.getBounds(), k, w.createEmpty(), a.surface), k.free(), a.draw(b, 0, 0, l.w, l.h, k.colorMatrix, 11, null, this._devicePixelRatio), f.target.draw(a, l.x, l.y, l.w, l.h, h.colorMatrix, d, null, this._devicePixelRatio), b.free(), a.free());
            }
          }
        };
        e.prototype._renderStageToTarget = function(b, d, e) {
          w.allocationCount = a.allocationCount = q.allocationCount = 0;
          b = new q(b);
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
          d && (d = this._stage.content.groupChild.child, b(d instanceof n.Stage), a = d.content.getBounds(!0), d.content.getTransform().getConcatenatedMatrix().transformRectangleAABB(a), a.intersect(this._viewport));
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
          return new n.ScreenShot(e.toDataURL("image/png"), d, f, g);
        };
        e._initializedCaches = !1;
        e._debugPoints = t.createEmptyPoints(4);
        return e;
      }(n.Renderer);
      g.Canvas2DRenderer = d;
    })(n.Canvas2D || (n.Canvas2D = {}));
  })(l.GFX || (l.GFX = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(n) {
    var g = n.Geometry.Point, b = n.Geometry.Matrix, w = n.Geometry.Rectangle, t = l.Tools.Mini.FPS, a = function() {
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
    n.UIState = a;
    var k = function(a) {
      function b() {
        a.apply(this, arguments);
        this._keyCodes = [];
      }
      __extends(b, a);
      b.prototype.onMouseDown = function(a, b) {
        b.altKey && (a.state = new h(a.worldView, a.getMousePosition(b, null), a.worldView.getTransform().getMatrix(!0)));
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
    }(a), u = function(a) {
      function b() {
        a.apply(this, arguments);
        this._keyCodes = [];
        this._paused = !1;
        this._mousePosition = new g(0, 0);
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
        if (a.getOption()) {
          var b = n.viewportLoupeDiameter.value, d = n.viewportLoupeDiameter.value;
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
          d && (a.state = new h(d, a.getMousePosition(b, null), d.getTransform().getMatrix(!0)));
        }
      };
      b.prototype.onMouseUp = function(a, b) {
        a.state = new k;
        a.selectNodeUnderMouse(b);
      };
      return b;
    })(a);
    var h = function(a) {
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
      function a(b, g, h) {
        function d(a) {
          c._state.onMouseWheel(c, a);
          c._persistentState.onMouseWheel(c, a);
        }
        void 0 === g && (g = !1);
        void 0 === h && (h = void 0);
        this._state = new k;
        this._persistentState = new u;
        this.paused = !1;
        this.viewport = null;
        this._selectedNodes = [];
        this._isRendering = !1;
        this._rAF = void 0;
        this._eventListeners = Object.create(null);
        this._fullScreen = !1;
        this._container = b;
        this._stage = new n.Stage(512, 512, !0);
        this._worldView = this._stage.content;
        this._world = new n.Group;
        this._worldView.addChild(this._world);
        this._disableHiDPI = g;
        g = document.createElement("div");
        g.style.position = "absolute";
        g.style.width = "100%";
        g.style.height = "100%";
        g.style.zIndex = "0";
        b.appendChild(g);
        if (n.hud.value) {
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
          this._fps = new t(e);
        } else {
          this._fps = null;
        }
        this.transparent = f = 0 === h;
        void 0 === h || 0 === h || l.ColorUtilities.rgbaToCSSStyle(h);
        this._options = new n.Canvas2D.Canvas2DRendererOptions;
        this._options.alpha = f;
        this._renderer = new n.Canvas2D.Canvas2DRenderer(g, this._stage, this._options);
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
        n.RenderableVideo.checkForVideoUpdates();
        var a = (this._stage.readyToRender() || n.forcePaint.value) && !this.paused, b = 0;
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
      a.prototype.getOption = function() {
        return this._options.paintViewport;
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
      a.prototype.getMousePosition = function(a, h) {
        var k = this._container, d = k.getBoundingClientRect(), f = this.getRatio(), k = new g(k.scrollWidth / d.width * (a.clientX - d.left) * f, k.scrollHeight / d.height * (a.clientY - d.top) * f);
        if (!h) {
          return k;
        }
        d = b.createIdentity();
        h.getTransform().getConcatenatedMatrix().inverse(d);
        d.transformPoint(k);
        return k;
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
    n.Easel = a;
  })(l.GFX || (l.GFX = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(n) {
    var g = l.GFX.Geometry.Matrix;
    (function(b) {
      b[b.Simple = 0] = "Simple";
    })(n.Layout || (n.Layout = {}));
    var b = function(b) {
      function a() {
        b.apply(this, arguments);
        this.layout = 0;
      }
      __extends(a, b);
      return a;
    }(n.RendererOptions);
    n.TreeRendererOptions = b;
    var w = function(l) {
      function a(a, g, h) {
        void 0 === h && (h = new b);
        l.call(this, a, g, h);
        this._canvas = document.createElement("canvas");
        this._container.appendChild(this._canvas);
        this._context = this._canvas.getContext("2d");
        this._listenForContainerSizeChanges();
      }
      __extends(a, l);
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
        var a = this._getRatio(), b = Math.ceil(this._containerWidth * a), g = Math.ceil(this._containerHeight * a), l = this._canvas;
        0 < a ? (l.width = b * a, l.height = g * a, l.style.width = b + "px", l.style.height = g + "px") : (l.width = b, l.height = g);
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
        0 === this._options.layout && this._renderNodeSimple(this._context, this._stage, g.createIdentity());
        a.restore();
      };
      a.prototype._renderNodeSimple = function(a, b, g) {
        function l(b) {
          var c = b.getChildren();
          a.fillStyle = b.hasFlags(16) ? "red" : "white";
          var g = String(b.id);
          b instanceof n.RenderableText ? g = "T" + g : b instanceof n.RenderableShape ? g = "S" + g : b instanceof n.RenderableBitmap ? g = "B" + g : b instanceof n.RenderableVideo && (g = "V" + g);
          b instanceof n.Renderable && (g = g + " [" + b._parents.length + "]");
          b = a.measureText(g).width;
          a.fillText(g, q, t);
          if (c) {
            q += b + 4;
            f = Math.max(f, q + 20);
            for (g = 0;g < c.length;g++) {
              l(c[g]), g < c.length - 1 && (t += 18, t > p._canvas.height && (a.fillStyle = "gray", q = q - d + f + 8, d = f + 8, t = 0, a.fillStyle = "white"));
            }
            q -= b + 4;
          }
        }
        var p = this;
        a.save();
        a.font = "16px Arial";
        a.fillStyle = "white";
        var q = 0, t = 0, d = 0, f = 0;
        l(b);
        a.restore();
      };
      return a;
    }(n.Renderer);
    n.TreeRenderer = w;
  })(l.GFX || (l.GFX = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(n) {
    (function(g) {
      var b = l.GFX.BlurFilter, w = l.GFX.DropshadowFilter, t = l.GFX.Shape, a = l.GFX.Group, k = l.GFX.RenderableShape, u = l.GFX.RenderableMorphShape, h = l.GFX.RenderableBitmap, r = l.GFX.RenderableVideo, p = l.GFX.RenderableText, q = l.GFX.ColorMatrix, v = l.ShapeData, d = l.ArrayUtilities.DataBuffer, f = l.GFX.Stage, e = l.GFX.Geometry.Matrix, c = l.GFX.Geometry.Rectangle, m = function() {
        function a() {
        }
        a.prototype.writeMouseEvent = function(a, b) {
          var c = this.output;
          c.writeInt(300);
          var d = l.Remoting.MouseEventNames.indexOf(a.type);
          c.writeInt(d);
          c.writeFloat(b.x);
          c.writeFloat(b.y);
          c.writeInt(a.buttons);
          c.writeInt((a.ctrlKey ? 1 : 0) | (a.altKey ? 2 : 0) | (a.shiftKey ? 4 : 0));
        };
        a.prototype.writeKeyboardEvent = function(a) {
          var b = this.output;
          b.writeInt(301);
          var c = l.Remoting.KeyboardEventNames.indexOf(a.type);
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
      g.GFXChannelSerializer = m;
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
          l.registerCSSFont(a, b, !inFirefox);
          inFirefox ? c(null) : window.setTimeout(c, 400);
        };
        a.prototype.registerImage = function(a, b, c, d, e) {
          this._registerAsset(a, b, this._decodeImage(c, d, e));
        };
        a.prototype.registerVideo = function(a) {
          this._registerAsset(a, 0, new r(a, this));
        };
        a.prototype._decodeImage = function(a, b, d) {
          var e = new Image, f = h.FromImage(e);
          e.src = URL.createObjectURL(new Blob([b], {type:l.getMIMETypeForImageType(a)}));
          e.onload = function() {
            f.setBounds(new c(0, 0, e.width, e.height));
            f.invalidate();
            d({width:e.width, height:e.height});
          };
          e.onerror = function() {
            d(null);
          };
          return f;
        };
        a.prototype.sendVideoPlaybackEvent = function(a, b, c) {
          this._easelHost.sendVideoPlaybackEvent(a, b, c);
        };
        return a;
      }();
      g.GFXChannelDeserializerContext = m;
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
            var n = a.readInt();
            l.push(b._getBitmapAsset(n));
          }
          if (e) {
            e.update(g, l, f);
          } else {
            a = g.morphCoordinates ? new u(c, g, l, f) : new k(c, g, l, f);
            for (m = 0;m < l.length;m++) {
              l[m] && l[m].addRenderableParent(a);
            }
            b._registerAsset(c, d, a);
          }
        };
        f.prototype._readUpdateBitmapData = function() {
          var a = this.input, b = this.context, c = a.readInt(), e = a.readInt(), f = b._getBitmapAsset(c), g = this._readRectangle(), a = a.readInt(), k = d.FromPlainObject(this._readAsset());
          f ? f.updateFromDataBuffer(a, k) : (f = h.FromDataBuffer(a, k, g), b._registerAsset(c, e, f));
        };
        f.prototype._readUpdateTextContent = function() {
          var a = this.input, b = this.context, c = a.readInt(), e = a.readInt(), f = b._getTextAsset(c), g = this._readRectangle(), h = this._readMatrix(), k = a.readInt(), l = a.readInt(), m = a.readInt(), n = a.readBoolean(), q = a.readInt(), u = a.readInt(), r = this._readAsset(), t = d.FromPlainObject(this._readAsset()), v = null, w = a.readInt();
          w && (v = new d(4 * w), a.readBytes(v, 4 * w));
          f ? (f.setBounds(g), f.setContent(r, t, h, v), f.setStyle(k, l, q, u), f.reflow(m, n)) : (f = new p(g), f.setContent(r, t, h, v), f.setStyle(k, l, q, u), f.reflow(m, n), b._registerAsset(c, e, f));
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
          a.stage.color = l.Color.FromARGB(b);
          a.stage.align = this.input.readInt();
          a.stage.scaleMode = this.input.readInt();
          b = this.input.readInt();
          this.input.readInt();
          c = this.input.readInt();
          a._easelHost.cursor = l.UI.toCSSCursor(c);
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
                  e.push(new q(g));
                  break;
                default:
                  l.Debug.somewhatImplemented(n.FilterType[g]);
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
          e && (k = f.getChildren()[0], k instanceof t && (k.ratio = e));
        };
        f.prototype._readDrawToBitmap = function() {
          var a = this.input, b = this.context, c = a.readInt(), d = a.readInt(), f = a.readInt(), g, k, l;
          g = f & 1 ? this._readMatrix().clone() : e.createIdentity();
          f & 8 && (k = this._readColorMatrix());
          f & 16 && (l = this._readRectangle());
          f = a.readInt();
          a.readBoolean();
          a = b._getBitmapAsset(c);
          d = b._makeNode(d);
          a ? a.drawNode(d, g, k, f, l) : b._registerAsset(c, -1, h.FromNode(d, g, k, f, l));
        };
        f.prototype._readRequestBitmapData = function() {
          var a = this.output, b = this.context, c = this.input.readInt();
          b._getBitmapAsset(c).readImageData(a);
        };
        f._temporaryReadMatrix = e.createIdentity();
        f._temporaryReadRectangle = c.createEmpty();
        f._temporaryReadColorMatrix = q.createIdentity();
        f._temporaryReadColorMatrixIdentity = q.createIdentity();
        return f;
      }();
      g.GFXChannelDeserializer = m;
    })(n.GFX || (n.GFX = {}));
  })(l.Remoting || (l.Remoting = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(n) {
    var g = l.GFX.Geometry.Point, b = l.ArrayUtilities.DataBuffer;
    n.ContextMenuButton = 2;
    var w = function() {
      function t(a) {
        this._easel = a;
        var b = a.transparent;
        this._group = a.world;
        this._content = null;
        this._fullscreen = !1;
        this._context = new l.Remoting.GFX.GFXChannelDeserializerContext(this, this._group, b);
        this._addEventListeners();
      }
      t.prototype.onSendUpdates = function(a, b) {
        throw Error("This method is abstract");
      };
      Object.defineProperty(t.prototype, "easel", {get:function() {
        return this._easel;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(t.prototype, "stage", {get:function() {
        return this._easel.stage;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(t.prototype, "content", {set:function(a) {
        this._content = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(t.prototype, "cursor", {set:function(a) {
        this._easel.cursor = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(t.prototype, "fullscreen", {set:function(a) {
        this._fullscreen !== a && (this._fullscreen = a, "undefined" !== typeof ShumwayCom && ShumwayCom.setFullscreen && ShumwayCom.setFullscreen(a));
      }, enumerable:!0, configurable:!0});
      t.prototype._mouseEventListener = function(a) {
        if (a.button !== n.ContextMenuButton) {
          var k = this._easel.getMousePosition(a, this._content), k = new g(k.x, k.y), u = new b, h = new l.Remoting.GFX.GFXChannelSerializer;
          h.output = u;
          h.writeMouseEvent(a, k);
          this.onSendUpdates(u, []);
        }
      };
      t.prototype._keyboardEventListener = function(a) {
        var g = new b, n = new l.Remoting.GFX.GFXChannelSerializer;
        n.output = g;
        n.writeKeyboardEvent(a);
        this.onSendUpdates(g, []);
      };
      t.prototype._addEventListeners = function() {
        for (var a = this._mouseEventListener.bind(this), b = this._keyboardEventListener.bind(this), g = t._mouseEvents, h = 0;h < g.length;h++) {
          window.addEventListener(g[h], a);
        }
        a = t._keyboardEvents;
        for (h = 0;h < a.length;h++) {
          window.addEventListener(a[h], b);
        }
        this._addFocusEventListeners();
        this._easel.addEventListener("resize", this._resizeEventListener.bind(this));
      };
      t.prototype._sendFocusEvent = function(a) {
        var g = new b, n = new l.Remoting.GFX.GFXChannelSerializer;
        n.output = g;
        n.writeFocusEvent(a);
        this.onSendUpdates(g, []);
      };
      t.prototype._addFocusEventListeners = function() {
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
      t.prototype._resizeEventListener = function() {
        this.onDisplayParameters(this._easel.getDisplayParameters());
      };
      t.prototype.onDisplayParameters = function(a) {
        throw Error("This method is abstract");
      };
      t.prototype.processUpdates = function(a, b, g) {
        void 0 === g && (g = null);
        var h = new l.Remoting.GFX.GFXChannelDeserializer;
        h.input = a;
        h.inputAssets = b;
        h.output = g;
        h.context = this._context;
        h.read();
      };
      t.prototype.processVideoControl = function(a, b, g) {
        var h = this._context, l = h._getVideoAsset(a);
        if (!l) {
          if (1 !== b) {
            return;
          }
          h.registerVideo(a);
          l = h._getVideoAsset(a);
        }
        return l.processControlRequest(b, g);
      };
      t.prototype.processRegisterFont = function(a, b, g) {
        this._context.registerFont(a, b, g);
      };
      t.prototype.processRegisterImage = function(a, b, g, h, l) {
        this._context.registerImage(a, b, g, h, l);
      };
      t.prototype.processFSCommand = function(a, b) {
        arguments.length;
      };
      t.prototype.processFrame = function() {
        arguments.length;
      };
      t.prototype.onVideoPlaybackEvent = function(a, b, g) {
        throw Error("This method is abstract");
      };
      t.prototype.sendVideoPlaybackEvent = function(a, b, g) {
        this.onVideoPlaybackEvent(a, b, g);
      };
      t._mouseEvents = l.Remoting.MouseEventNames;
      t._keyboardEvents = l.Remoting.KeyboardEventNames;
      return t;
    }();
    n.EaselHost = w;
  })(l.GFX || (l.GFX = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(n) {
    (function(g) {
      var b = l.ArrayUtilities.DataBuffer, w = function(g) {
        function a(a, b, h) {
          g.call(this, a);
          this._playerWindow = b;
          this._window = h;
          this._window.addEventListener("message", function(a) {
            this._onWindowMessage(a.data);
          }.bind(this));
          "undefined" !== typeof ShumwayCom ? ShumwayCom.setSyncMessageCallback(function(a) {
            this._onWindowMessage(a, !1);
            return a.result;
          }.bind(this)) : this._window.addEventListener("syncmessage", function(a) {
            this._onWindowMessage(a.detail, !1);
          }.bind(this));
        }
        __extends(a, g);
        a.prototype.onSendUpdates = function(a, b) {
          var g = a.getBytes();
          this._playerWindow.postMessage({type:"gfx", updates:g, assets:b}, "*", [g.buffer]);
        };
        a.prototype.onDisplayParameters = function(a) {
          this._playerWindow.postMessage({type:"displayParameters", params:a}, "*");
        };
        a.prototype.onVideoPlaybackEvent = function(a, b, g) {
          this._playerWindow.postMessage({type:"videoPlayback", id:a, eventType:b, data:g}, "*");
        };
        a.prototype._sendRegisterFontResponse = function(a, b) {
          this._playerWindow.postMessage({type:"registerFontResponse", requestId:a, result:b}, "*");
        };
        a.prototype._sendRegisterImageResponse = function(a, b) {
          this._playerWindow.postMessage({type:"registerImageResponse", requestId:a, result:b}, "*");
        };
        a.prototype._onWindowMessage = function(a, g) {
          void 0 === g && (g = !0);
          if ("object" === typeof a && null !== a) {
            if ("player" === a.type) {
              var h = b.FromArrayBuffer(a.updates.buffer);
              if (g) {
                this.processUpdates(h, a.assets);
              } else {
                var l = new b;
                this.processUpdates(h, a.assets, l);
                a.result = l.toPlainObject();
              }
            } else {
              "frame" === a.type ? this.processFrame() : "videoControl" === a.type ? a.result = this.processVideoControl(a.id, a.eventType, a.data) : "registerFont" === a.type ? this.processRegisterFont(a.syncId, a.data, this._sendRegisterFontResponse.bind(this, a.requestId)) : "registerImage" === a.type ? this.processRegisterImage(a.syncId, a.symbolId, a.imageType, a.data, this._sendRegisterImageResponse.bind(this, a.requestId)) : "fscommand" === a.type && this.processFSCommand(a.command, a.args)
              ;
            }
          }
        };
        return a;
      }(n.EaselHost);
      g.WindowEaselHost = w;
    })(n.Window || (n.Window = {}));
  })(l.GFX || (l.GFX = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(n) {
    (function(g) {
      function b(a, b) {
        a.writeInt(b.length);
        a.writeRawBytes(b);
      }
      function n(a, b) {
        return "byteLength" in a && "buffer" in a && (a.constructor && a.constructor.name) === b;
      }
      function t(a) {
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
                if (n(a, "Uint8Array")) {
                  e.writeByte(9), b(e, a);
                } else {
                  if ("length" in a && "buffer" in a && "littleEndian" in a) {
                    e.writeByte(a.littleEndian ? 10 : 11), b(e, new Uint8Array(a.buffer, 0, a.length));
                  } else {
                    if (t(a)) {
                      e.writeByte(8), b(e, new Uint8Array(a));
                    } else {
                      if (n(a, "Int32Array")) {
                        e.writeByte(12), b(e, new Uint8Array(a.buffer, a.byteOffset, a.byteLength));
                      } else {
                        if (!l.isNullOrUndefined(a.buffer) && t(a.buffer) && "number" === typeof a.byteOffset) {
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
        var e = new r;
        f(a);
        return e.getBytes();
      }
      function k(a) {
        var b = new r, e = a.readInt();
        a.readBytes(b, e);
        return b.getBytes();
      }
      function u(a) {
        var b = new r, e = a.readInt();
        a.readBytes(b, e);
        return h(b);
      }
      function h(a) {
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
              b[c] = h(a);
            }
            return b;
          case 7:
            for (b = {};e = a.readUTF();) {
              b[e] = h(a);
            }
            return b;
          case 8:
            return k(a).buffer;
          case 9:
            return k(a);
          case 11:
          ;
          case 10:
            return a = k(a), new p(a.buffer, a.length, 10 === b);
          case 12:
            return new Int32Array(k(a).buffer);
        }
      }
      var r = l.ArrayUtilities.DataBuffer, p = l.ArrayUtilities.PlainObjectDataBuffer, q;
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
      })(q || (q = {}));
      (function(a) {
        a[a.None = 0] = "None";
        a[a.PlayerCommand = 1] = "PlayerCommand";
        a[a.PlayerCommandAsync = 2] = "PlayerCommandAsync";
        a[a.Frame = 3] = "Frame";
        a[a.Font = 4] = "Font";
        a[a.Image = 5] = "Image";
        a[a.FSCommand = 6] = "FSCommand";
      })(g.MovieRecordType || (g.MovieRecordType = {}));
      q = function() {
        function d(a) {
          this._maxRecordingSize = a;
          this._recording = new r;
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
          var g = new r;
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
          var c = new r;
          c.writeInt(d);
          b(c, a(e));
          this._createRecord(4, c);
        };
        d.prototype.recordImage = function(d, e, c, g) {
          var h = new r;
          h.writeInt(d);
          h.writeInt(e);
          h.writeInt(c);
          b(h, a(g));
          this._createRecord(5, h);
        };
        d.prototype.recordFSCommand = function(a, b) {
          var c = new r;
          c.writeUTF(a);
          c.writeUTF(b || "");
          this._createRecord(6, c);
        };
        return d;
      }();
      g.MovieRecorder = q;
      var v = function() {
        function a(b) {
          this._buffer = new r;
          this._buffer.writeRawBytes(b);
          this._buffer.position = 4;
        }
        a.prototype.readNextRecord = function() {
          if (this._buffer.position >= this._buffer.length) {
            return 0;
          }
          var a = this._buffer.readInt(), b = this._buffer.readInt(), c = this._buffer.readInt(), d = null;
          0 < c && (d = new r, this._buffer.readBytes(d, c));
          this.currentTimestamp = a;
          this.currentType = b;
          this.currentData = d;
          return b;
        };
        a.prototype.parsePlayerCommand = function() {
          for (var a = k(this.currentData), b = this.currentData.readInt(), c = [], d = 0;d < b;d++) {
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
      g.MovieRecordParser = v;
    })(n.Test || (n.Test = {}));
  })(l.GFX || (l.GFX = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(n) {
    (function(g) {
      var b = l.ArrayUtilities.DataBuffer, w = function(l) {
        function a(a) {
          l.call(this, a);
          this.alwaysRenderFrame = this.ignoreTimestamps = !1;
          this.cpuTimeRendering = this.cpuTimeUpdates = 0;
          this.onComplete = null;
        }
        __extends(a, l);
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
          this._parser = new g.MovieRecordParser(a);
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
          var a, g = performance.now();
          switch(this._parser.currentType) {
            case 1:
            ;
            case 2:
              a = this._parser.parsePlayerCommand();
              var h = 2 === this._parser.currentType, l = b.FromArrayBuffer(a.updates.buffer);
              h ? this.processUpdates(l, a.assets) : (h = new b, this.processUpdates(l, a.assets, h));
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
              this.processRegisterImage(a.syncId, a.symbolId, a.imageType, a.data, function() {
              });
              break;
            case 6:
              a = this._parser.parseFSCommand();
              this.processFSCommand(a.command, a.args);
              break;
            default:
              throw Error("Invalid movie record type");;
          }
          this.cpuTimeUpdates += performance.now() - g;
          3 === this._parser.currentType && this.alwaysRenderFrame ? requestAnimationFrame(this._renderFrameJustAfterRAF.bind(this)) : this._parseNext();
        };
        a.prototype._renderFrameJustAfterRAF = function() {
          var a = performance.now();
          this.easel.render();
          this.cpuTimeRendering += performance.now() - a;
          this._parseNext();
        };
        return a;
      }(n.EaselHost);
      g.PlaybackEaselHost = w;
    })(n.Test || (n.Test = {}));
  })(l.GFX || (l.GFX = {}));
})(Shumway || (Shumway = {}));
(function(l) {
  (function(n) {
    (function(g) {
      var b = function(b) {
        function l(a, k, n, h) {
          void 0 === h && (h = 0);
          b.call(this, a, k, n);
          this._recorder = null;
          this._recorder = new g.MovieRecorder(h);
        }
        __extends(l, b);
        Object.defineProperty(l.prototype, "recorder", {get:function() {
          return this._recorder;
        }, enumerable:!0, configurable:!0});
        l.prototype._onWindowMessage = function(a, g) {
          void 0 === g && (g = !0);
          if ("object" === typeof a && null !== a) {
            switch(a.type) {
              case "player":
                this._recorder.recordPlayerCommand(g, a.updates, a.assets);
                break;
              case "frame":
                this._recorder.recordFrame();
                break;
              case "registerFont":
                this._recorder.recordFont(a.syncId, a.data);
                break;
              case "registerImage":
                this._recorder.recordImage(a.syncId, a.symbolId, a.imageType, a.data);
                break;
              case "fscommand":
                this._recorder.recordFSCommand(a.command, a.args);
            }
            b.prototype._onWindowMessage.call(this, a, g);
          }
        };
        return l;
      }(l.GFX.Window.WindowEaselHost);
      g.RecordingEaselHost = b;
    })(n.Test || (n.Test = {}));
  })(l.GFX || (l.GFX = {}));
})(Shumway || (Shumway = {}));
console.timeEnd("Load GFX Dependencies");

