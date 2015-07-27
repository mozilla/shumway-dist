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
Shumway$$inline_0.version = "0.11.398";
Shumway$$inline_0.build = "f03481b";
var jsGlobal = function() {
  return this || (0,eval)("this//# sourceURL=jsGlobal-getter");
}(), inBrowser = "undefined" !== typeof window && "document" in window && "plugins" in window.document, inFirefox = "undefined" !== typeof navigator && 0 <= navigator.userAgent.indexOf("Firefox");
jsGlobal.performance || (jsGlobal.performance = {});
jsGlobal.performance.now || (jsGlobal.performance.now = function() {
  return Date.now();
});
function lazyInitializer(g, q, r) {
  Object.defineProperty(g, q, {get:function() {
    var a = r();
    Object.defineProperty(g, q, {value:a, configurable:!0, enumerable:!0});
    return a;
  }, configurable:!0, enumerable:!0});
}
var START_TIME = performance.now();
(function(g) {
  function q(d) {
    return (d | 0) === d;
  }
  function r(d) {
    return "object" === typeof d || "function" === typeof d;
  }
  function a(d) {
    return String(Number(d)) === d;
  }
  function w(d) {
    var e = 0;
    if ("number" === typeof d) {
      return e = d | 0, d === e && 0 <= e ? !0 : d >>> 0 === d;
    }
    if ("string" !== typeof d) {
      return !1;
    }
    var f = d.length;
    if (0 === f) {
      return !1;
    }
    if ("0" === d) {
      return !0;
    }
    if (f > g.UINT32_CHAR_BUFFER_LENGTH) {
      return !1;
    }
    var c = 0, e = d.charCodeAt(c++) - 48;
    if (1 > e || 9 < e) {
      return !1;
    }
    for (var m = 0, x = 0;c < f;) {
      x = d.charCodeAt(c++) - 48;
      if (0 > x || 9 < x) {
        return !1;
      }
      m = e;
      e = 10 * e + x;
    }
    return m < g.UINT32_MAX_DIV_10 || m === g.UINT32_MAX_DIV_10 && x <= g.UINT32_MAX_MOD_10 ? !0 : !1;
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
  })(g.CharacterCodes || (g.CharacterCodes = {}));
  g.UINT32_CHAR_BUFFER_LENGTH = 10;
  g.UINT32_MAX = 4294967295;
  g.UINT32_MAX_DIV_10 = 429496729;
  g.UINT32_MAX_MOD_10 = 5;
  g.isString = function(d) {
    return "string" === typeof d;
  };
  g.isFunction = function(d) {
    return "function" === typeof d;
  };
  g.isNumber = function(d) {
    return "number" === typeof d;
  };
  g.isInteger = q;
  g.isArray = function(d) {
    return d instanceof Array;
  };
  g.isNumberOrString = function(d) {
    return "number" === typeof d || "string" === typeof d;
  };
  g.isObject = r;
  g.toNumber = function(d) {
    return +d;
  };
  g.isNumericString = a;
  g.isNumeric = function(d) {
    if ("number" === typeof d) {
      return !0;
    }
    if ("string" === typeof d) {
      var e = d.charCodeAt(0);
      return 65 <= e && 90 >= e || 97 <= e && 122 >= e || 36 === e || 95 === e ? !1 : w(d) || a(d);
    }
    return !1;
  };
  g.isIndex = w;
  g.isNullOrUndefined = function(d) {
    return void 0 == d;
  };
  g.argumentsToString = function(d) {
    for (var e = [], f = 0;f < d.length;f++) {
      var c = d[f];
      try {
        var m;
        m = "object" === typeof c && c ? "toString" in c ? c.toString() : Object.prototype.toString.call(c) : c + "";
        e.push(m);
      } catch (x) {
        e.push("<unprintable value>");
      }
    }
    return e.join(", ");
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
    var e = Object.create(null);
    d.warning = function(c, m, f) {
    };
    d.warnCounts = function() {
      var c = [], m;
      for (m in e) {
        c.push({key:m, count:e[m]});
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
    var f = {};
    d.somewhatImplemented = function(c) {
      f[c] || (f[c] = !0, d.warning("somewhatImplemented: " + c));
    };
    d.unexpected = function(c) {
      d.assert(!1, "Unexpected: " + c);
    };
    d.unexpectedCase = function(c) {
      d.assert(!1, "Unexpected Case: " + c);
    };
  })(l = g.Debug || (g.Debug = {}));
  g.getTicks = function() {
    return performance.now();
  };
  (function(d) {
    function e(c, m) {
      for (var f = 0, e = c.length;f < e;f++) {
        if (c[f] === m) {
          return f;
        }
      }
      c.push(m);
      return c.length - 1;
    }
    d.popManyInto = function(c, m, f) {
      for (var e = m - 1;0 <= e;e--) {
        f[e] = c.pop();
      }
      f.length = m;
    };
    d.popMany = function(c, m) {
      var f = c.length - m, e = c.slice(f, this.length);
      c.length = f;
      return e;
    };
    d.popManyIntoVoid = function(c, m) {
      c.length -= m;
    };
    d.pushMany = function(c, m) {
      for (var f = 0;f < m.length;f++) {
        c.push(m[f]);
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
      for (var f = 0, e = c.length;f < e;f++) {
        if (c[f] === m) {
          return f;
        }
      }
      return -1;
    };
    d.equals = function(c, m) {
      if (c.length !== m.length) {
        return !1;
      }
      for (var f = 0;f < c.length;f++) {
        if (c[f] !== m[f]) {
          return !1;
        }
      }
      return !0;
    };
    d.pushUnique = e;
    d.unique = function(c) {
      for (var m = [], f = 0;f < c.length;f++) {
        e(m, c[f]);
      }
      return m;
    };
    d.copyFrom = function(c, m) {
      c.length = 0;
      d.pushMany(c, m);
    };
    d.ensureTypedArrayCapacity = function(c, m) {
      if (c.length < m) {
        var f = c;
        c = new c.constructor(g.IntegerUtilities.nearestPowerOfTwo(m));
        c.set(f, 0);
      }
      return c;
    };
    d.memCopy = function(c, m, f, e, d) {
      void 0 === f && (f = 0);
      void 0 === e && (e = 0);
      void 0 === d && (d = 0);
      0 < e || 0 < d && d < m.length ? (0 >= d && (d = m.length - e), c.set(m.subarray(e, e + d), f)) : c.set(m, f);
    };
    var f = function() {
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
        var f = 2 * this._u8.length;
        f < c && (f = c);
        c = new Uint8Array(f);
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
      c.prototype.writeIntAt = function(c, f) {
        this.ensureCapacity(f + 4);
        this._i32[f >> 2] = c;
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
      c.prototype.write4Floats = function(c, f, e, d) {
        this.ensureCapacity(this._offset + 16);
        this.write4FloatsUnsafe(c, f, e, d);
      };
      c.prototype.write4FloatsUnsafe = function(c, f, e, d) {
        var b = this._offset >> 2;
        this._f32[b + 0] = c;
        this._f32[b + 1] = f;
        this._f32[b + 2] = e;
        this._f32[b + 3] = d;
        this._offset += 16;
      };
      c.prototype.write6Floats = function(c, f, e, d, b, a) {
        this.ensureCapacity(this._offset + 24);
        this.write6FloatsUnsafe(c, f, e, d, b, a);
      };
      c.prototype.write6FloatsUnsafe = function(c, f, e, d, b, a) {
        var k = this._offset >> 2;
        this._f32[k + 0] = c;
        this._f32[k + 1] = f;
        this._f32[k + 2] = e;
        this._f32[k + 3] = d;
        this._f32[k + 4] = b;
        this._f32[k + 5] = a;
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
      c.prototype.hashWords = function(c, f, e) {
        f = this._i32;
        for (var d = 0;d < e;d++) {
          c = (31 * c | 0) + f[d] | 0;
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
    d.ArrayWriter = f;
  })(g.ArrayUtilities || (g.ArrayUtilities = {}));
  var b = function() {
    function d(e) {
      this._u8 = new Uint8Array(e);
      this._u16 = new Uint16Array(e);
      this._i32 = new Int32Array(e);
      this._f32 = new Float32Array(e);
      this._offset = 0;
    }
    Object.defineProperty(d.prototype, "offset", {get:function() {
      return this._offset;
    }, enumerable:!0, configurable:!0});
    d.prototype.isEmpty = function() {
      return this._offset === this._u8.length;
    };
    d.prototype.readInt = function() {
      var e = this._i32[this._offset >> 2];
      this._offset += 4;
      return e;
    };
    d.prototype.readFloat = function() {
      var e = this._f32[this._offset >> 2];
      this._offset += 4;
      return e;
    };
    return d;
  }();
  g.ArrayReader = b;
  (function(d) {
    function e(c, m) {
      return Object.prototype.hasOwnProperty.call(c, m);
    }
    function f(c, m) {
      for (var f in m) {
        e(m, f) && (c[f] = m[f]);
      }
    }
    d.boxValue = function(c) {
      return void 0 == c || r(c) ? c : Object(c);
    };
    d.toKeyValueArray = function(c) {
      var m = Object.prototype.hasOwnProperty, f = [], e;
      for (e in c) {
        m.call(c, e) && f.push([e, c[e]]);
      }
      return f;
    };
    d.isPrototypeWriteable = function(c) {
      return Object.getOwnPropertyDescriptor(c, "prototype").writable;
    };
    d.hasOwnProperty = e;
    d.propertyIsEnumerable = function(c, m) {
      return Object.prototype.propertyIsEnumerable.call(c, m);
    };
    d.getPropertyDescriptor = function(c, m) {
      do {
        var f = Object.getOwnPropertyDescriptor(c, m);
        if (f) {
          return f;
        }
        c = Object.getPrototypeOf(c);
      } while (c);
      return null;
    };
    d.hasOwnGetter = function(c, m) {
      var f = Object.getOwnPropertyDescriptor(c, m);
      return !(!f || !f.get);
    };
    d.getOwnGetter = function(c, m) {
      var f = Object.getOwnPropertyDescriptor(c, m);
      return f ? f.get : null;
    };
    d.hasOwnSetter = function(c, m) {
      var f = Object.getOwnPropertyDescriptor(c, m);
      return !(!f || !f.set);
    };
    d.createMap = function() {
      return Object.create(null);
    };
    d.createArrayMap = function() {
      return [];
    };
    d.defineReadOnlyProperty = function(c, m, f) {
      Object.defineProperty(c, m, {value:f, writable:!1, configurable:!0, enumerable:!1});
    };
    d.getOwnPropertyDescriptors = function(c) {
      for (var m = d.createMap(), f = Object.getOwnPropertyNames(c), e = 0;e < f.length;e++) {
        m[f[e]] = Object.getOwnPropertyDescriptor(c, f[e]);
      }
      return m;
    };
    d.cloneObject = function(c) {
      var m = Object.create(Object.getPrototypeOf(c));
      f(m, c);
      return m;
    };
    d.copyProperties = function(c, m) {
      for (var f in m) {
        c[f] = m[f];
      }
    };
    d.copyOwnProperties = f;
    d.copyOwnPropertyDescriptors = function(c, m, f, d, b) {
      void 0 === f && (f = null);
      void 0 === d && (d = !0);
      void 0 === b && (b = !1);
      for (var a in m) {
        if (e(m, a) && (!f || f(a))) {
          var k = Object.getOwnPropertyDescriptor(m, a);
          if (d || !e(c, a)) {
            try {
              b && !1 === k.writable && (k.writable = !0), Object.defineProperty(c, a, k);
            } catch (h) {
              l.assert("Can't define: " + a);
            }
          }
        }
      }
    };
    d.copyPropertiesByList = function(c, m, f) {
      for (var e = 0;e < f.length;e++) {
        var d = f[e];
        c[d] = m[d];
      }
    };
    d.getLatestGetterOrSetterPropertyDescriptor = function(c, m) {
      for (var f = {};c;) {
        var e = Object.getOwnPropertyDescriptor(c, m);
        e && (f.get = f.get || e.get, f.set = f.set || e.set);
        if (f.get && f.set) {
          break;
        }
        c = Object.getPrototypeOf(c);
      }
      return f;
    };
    d.defineNonEnumerableGetterOrSetter = function(c, m, f, e) {
      var b = d.getLatestGetterOrSetterPropertyDescriptor(c, m);
      b.configurable = !0;
      b.enumerable = !1;
      e ? b.get = f : b.set = f;
      Object.defineProperty(c, m, b);
    };
    d.defineNonEnumerableGetter = function(c, m, f) {
      Object.defineProperty(c, m, {get:f, configurable:!0, enumerable:!1});
    };
    d.defineNonEnumerableSetter = function(c, m, f) {
      Object.defineProperty(c, m, {set:f, configurable:!0, enumerable:!1});
    };
    d.defineNonEnumerableProperty = function(c, m, f) {
      Object.defineProperty(c, m, {value:f, writable:!0, configurable:!0, enumerable:!1});
    };
    d.defineNonEnumerableForwardingProperty = function(c, f, e) {
      Object.defineProperty(c, f, {get:k.makeForwardingGetter(e), set:k.makeForwardingSetter(e), writable:!0, configurable:!0, enumerable:!1});
    };
    d.defineNewNonEnumerableProperty = function(c, f, e) {
      d.defineNonEnumerableProperty(c, f, e);
    };
    d.createPublicAliases = function(c, f) {
      for (var e = {value:null, writable:!0, configurable:!0, enumerable:!1}, d = 0;d < f.length;d++) {
        var b = f[d];
        e.value = c[b];
        Object.defineProperty(c, "$Bg" + b, e);
      }
    };
  })(g.ObjectUtilities || (g.ObjectUtilities = {}));
  var k;
  (function(d) {
    d.makeForwardingGetter = function(e) {
      return new Function('return this["' + e + '"]//# sourceURL=fwd-get-' + e + ".as");
    };
    d.makeForwardingSetter = function(e) {
      return new Function("value", 'this["' + e + '"] = value;//# sourceURL=fwd-set-' + e + ".as");
    };
    d.bindSafely = function(e, f) {
      function c() {
        return e.apply(f, arguments);
      }
      c.boundTo = f;
      return c;
    };
  })(k = g.FunctionUtilities || (g.FunctionUtilities = {}));
  (function(d) {
    function e(c) {
      return "string" === typeof c ? '"' + c + '"' : "number" === typeof c || "boolean" === typeof c ? String(c) : c instanceof Array ? "[] " + c.length : typeof c;
    }
    function f(c, f, e) {
      m[0] = c;
      m[1] = f;
      m[2] = e;
      return m.join("");
    }
    function c(c, f, m, e) {
      x[0] = c;
      x[1] = f;
      x[2] = m;
      x[3] = e;
      return x.join("");
    }
    d.repeatString = function(c, f) {
      for (var m = "", e = 0;e < f;e++) {
        m += c;
      }
      return m;
    };
    d.memorySizeToString = function(c) {
      c |= 0;
      return 1024 > c ? c + " B" : 1048576 > c ? (c / 1024).toFixed(2) + "KB" : (c / 1048576).toFixed(2) + "MB";
    };
    d.toSafeString = e;
    d.toSafeArrayString = function(c) {
      for (var f = [], m = 0;m < c.length;m++) {
        f.push(e(c[m]));
      }
      return f.join(", ");
    };
    d.utf8decode = function(c) {
      for (var f = new Uint8Array(4 * c.length), m = 0, e = 0, d = c.length;e < d;e++) {
        var x = c.charCodeAt(e);
        if (127 >= x) {
          f[m++] = x;
        } else {
          if (55296 <= x && 56319 >= x) {
            var y = c.charCodeAt(e + 1);
            56320 <= y && 57343 >= y && (x = ((x & 1023) << 10) + (y & 1023) + 65536, ++e);
          }
          0 !== (x & 4292870144) ? (f[m++] = 248 | x >>> 24 & 3, f[m++] = 128 | x >>> 18 & 63, f[m++] = 128 | x >>> 12 & 63, f[m++] = 128 | x >>> 6 & 63) : 0 !== (x & 4294901760) ? (f[m++] = 240 | x >>> 18 & 7, f[m++] = 128 | x >>> 12 & 63, f[m++] = 128 | x >>> 6 & 63) : 0 !== (x & 4294965248) ? (f[m++] = 224 | x >>> 12 & 15, f[m++] = 128 | x >>> 6 & 63) : f[m++] = 192 | x >>> 6 & 31;
          f[m++] = 128 | x & 63;
        }
      }
      return f.subarray(0, m);
    };
    d.utf8encode = function(c) {
      for (var f = 0, m = "";f < c.length;) {
        var e = c[f++] & 255;
        if (127 >= e) {
          m += String.fromCharCode(e);
        } else {
          var d = 192, x = 5;
          do {
            if ((e & (d >> 1 | 128)) === d) {
              break;
            }
            d = d >> 1 | 128;
            --x;
          } while (0 <= x);
          if (0 >= x) {
            m += String.fromCharCode(e);
          } else {
            for (var e = e & (1 << x) - 1, d = !1, y = 5;y >= x;--y) {
              var b = c[f++];
              if (128 != (b & 192)) {
                d = !0;
                break;
              }
              e = e << 6 | b & 63;
            }
            if (d) {
              for (x = f - (7 - y);x < f;++x) {
                m += String.fromCharCode(c[x] & 255);
              }
            } else {
              m = 65536 <= e ? m + String.fromCharCode(e - 65536 >> 10 & 1023 | 55296, e & 1023 | 56320) : m + String.fromCharCode(e);
            }
          }
        }
      }
      return m;
    };
    d.base64ArrayBuffer = function(m) {
      var e = "";
      m = new Uint8Array(m);
      for (var d = m.byteLength, x = d % 3, d = d - x, y, b, a, J, k = 0;k < d;k += 3) {
        J = m[k] << 16 | m[k + 1] << 8 | m[k + 2], y = (J & 16515072) >> 18, b = (J & 258048) >> 12, a = (J & 4032) >> 6, J &= 63, e += c("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[y], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[b], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[a], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[J]);
      }
      1 == x ? (J = m[d], e += f("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(J & 252) >> 2], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(J & 3) << 4], "==")) : 2 == x && (J = m[d] << 8 | m[d + 1], e += c("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(J & 64512) >> 10], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(J & 1008) >> 4], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(J & 15) << 
      2], "="));
      return e;
    };
    d.escapeString = function(c) {
      void 0 !== c && (c = c.replace(/[^\w$]/gi, "$"), /^\d/.test(c) && (c = "$" + c));
      return c;
    };
    d.fromCharCodeArray = function(c) {
      for (var m = "", f = 0;f < c.length;f += 16384) {
        var e = Math.min(c.length - f, 16384), m = m + String.fromCharCode.apply(null, c.subarray(f, f + e))
      }
      return m;
    };
    d.variableLengthEncodeInt32 = function(c) {
      for (var f = 32 - Math.clz32(c), m = Math.ceil(f / 6), f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[m], m = m - 1;0 <= m;m--) {
        f += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[c >> 6 * m & 63];
      }
      return f;
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
      for (var f = d.fromEncoding(c.charCodeAt(0)), m = 0, e = 0;e < f;e++) {
        var x = 6 * (f - e - 1), m = m | d.fromEncoding(c.charCodeAt(1 + e)) << x
      }
      return m;
    };
    d.trimMiddle = function(c, f) {
      if (c.length <= f) {
        return c;
      }
      var m = f >> 1, e = f - m - 1;
      return c.substr(0, m) + "\u2026" + c.substr(c.length - e, e);
    };
    d.multiple = function(c, f) {
      for (var m = "", e = 0;e < f;e++) {
        m += c;
      }
      return m;
    };
    d.indexOfAny = function(c, m, f) {
      for (var e = c.length, d = 0;d < m.length;d++) {
        var x = c.indexOf(m[d], f);
        0 <= x && (e = Math.min(e, x));
      }
      return e === c.length ? -1 : e;
    };
    var m = Array(3), x = Array(4), y = Array(5), b = Array(6), a = Array(7), k = Array(8), h = Array(9);
    d.concat3 = f;
    d.concat4 = c;
    d.concat5 = function(c, m, f, e, d) {
      y[0] = c;
      y[1] = m;
      y[2] = f;
      y[3] = e;
      y[4] = d;
      return y.join("");
    };
    d.concat6 = function(c, m, f, e, d, x) {
      b[0] = c;
      b[1] = m;
      b[2] = f;
      b[3] = e;
      b[4] = d;
      b[5] = x;
      return b.join("");
    };
    d.concat7 = function(c, m, f, e, d, x, y) {
      a[0] = c;
      a[1] = m;
      a[2] = f;
      a[3] = e;
      a[4] = d;
      a[5] = x;
      a[6] = y;
      return a.join("");
    };
    d.concat8 = function(c, m, f, e, d, x, y, b) {
      k[0] = c;
      k[1] = m;
      k[2] = f;
      k[3] = e;
      k[4] = d;
      k[5] = x;
      k[6] = y;
      k[7] = b;
      return k.join("");
    };
    d.concat9 = function(c, m, f, e, d, x, y, b, a) {
      h[0] = c;
      h[1] = m;
      h[2] = f;
      h[3] = e;
      h[4] = d;
      h[5] = x;
      h[6] = y;
      h[7] = b;
      h[8] = a;
      return h.join("");
    };
  })(g.StringUtilities || (g.StringUtilities = {}));
  (function(d) {
    var e = new Uint8Array([7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21]), f = new Int32Array([-680876936, -389564586, 606105819, -1044525330, -176418897, 1200080426, -1473231341, -45705983, 1770035416, -1958414417, -42063, -1990404162, 1804603682, -40341101, -1502002290, 1236535329, -165796510, -1069501632, 
    643717713, -373897302, -701558691, 38016083, -660478335, -405537848, 568446438, -1019803690, -187363961, 1163531501, -1444681467, -51403784, 1735328473, -1926607734, -378558, -2022574463, 1839030562, -35309556, -1530992060, 1272893353, -155497632, -1094730640, 681279174, -358537222, -722521979, 76029189, -640364487, -421815835, 530742520, -995338651, -198630844, 1126891415, -1416354905, -57434055, 1700485571, -1894986606, -1051523, -2054922799, 1873313359, -30611744, -1560198380, 1309151649, 
    -145523070, -1120210379, 718787259, -343485551]);
    d.hashBytesTo32BitsMD5 = function(c, m, d) {
      var y = 1732584193, b = -271733879, a = -1732584194, k = 271733878, h = d + 72 & -64, v = new Uint8Array(h), p;
      for (p = 0;p < d;++p) {
        v[p] = c[m++];
      }
      v[p++] = 128;
      for (c = h - 8;p < c;) {
        v[p++] = 0;
      }
      v[p++] = d << 3 & 255;
      v[p++] = d >> 5 & 255;
      v[p++] = d >> 13 & 255;
      v[p++] = d >> 21 & 255;
      v[p++] = d >>> 29 & 255;
      v[p++] = 0;
      v[p++] = 0;
      v[p++] = 0;
      c = new Int32Array(16);
      for (p = 0;p < h;) {
        for (d = 0;16 > d;++d, p += 4) {
          c[d] = v[p] | v[p + 1] << 8 | v[p + 2] << 16 | v[p + 3] << 24;
        }
        var t = y;
        m = b;
        var n = a, l = k, u, g;
        for (d = 0;64 > d;++d) {
          16 > d ? (u = m & n | ~m & l, g = d) : 32 > d ? (u = l & m | ~l & n, g = 5 * d + 1 & 15) : 48 > d ? (u = m ^ n ^ l, g = 3 * d + 5 & 15) : (u = n ^ (m | ~l), g = 7 * d & 15);
          var w = l, t = t + u + f[d] + c[g] | 0;
          u = e[d];
          l = n;
          n = m;
          m = m + (t << u | t >>> 32 - u) | 0;
          t = w;
        }
        y = y + t | 0;
        b = b + m | 0;
        a = a + n | 0;
        k = k + l | 0;
      }
      return y;
    };
    d.hashBytesTo32BitsAdler = function(c, m, f) {
      var e = 1, d = 0;
      for (f = m + f;m < f;++m) {
        e = (e + (c[m] & 255)) % 65521, d = (d + e) % 65521;
      }
      return d << 16 | e;
    };
    d.mixHash = function(c, f) {
      return (31 * c | 0) + f | 0;
    };
  })(g.HashUtilities || (g.HashUtilities = {}));
  var t = function() {
    function d() {
    }
    d.seed = function(e) {
      d._state[0] = e;
      d._state[1] = e;
    };
    d.reset = function() {
      d._state[0] = 57005;
      d._state[1] = 48879;
    };
    d.next = function() {
      var e = this._state, f = Math.imul(18273, e[0] & 65535) + (e[0] >>> 16) | 0;
      e[0] = f;
      var c = Math.imul(36969, e[1] & 65535) + (e[1] >>> 16) | 0;
      e[1] = c;
      e = (f << 16) + (c & 65535) | 0;
      return 2.3283064365386963E-10 * (0 > e ? e + 4294967296 : e);
    };
    d._state = new Uint32Array([57005, 48879]);
    return d;
  }();
  g.Random = t;
  Math.random = function() {
    return t.next();
  };
  g.installTimeWarper = function() {
    var d = Date, e = 1428107694580;
    jsGlobal.Date = function(f, c, m, x, y, b, a) {
      switch(arguments.length) {
        case 0:
          return new d(e);
        case 1:
          return new d(f);
        case 2:
          return new d(f, c);
        case 3:
          return new d(f, c, m);
        case 4:
          return new d(f, c, m, x);
        case 5:
          return new d(f, c, m, x, y);
        case 6:
          return new d(f, c, m, x, y, b);
        default:
          return new d(f, c, m, x, y, b, a);
      }
    };
    jsGlobal.Date.now = function() {
      return e += 10;
    };
    jsGlobal.Date.UTC = function() {
      return d.UTC.apply(d, arguments);
    };
  };
  (function() {
    function d() {
      this.id = "$weakmap" + e++;
    }
    if ("function" !== typeof jsGlobal.WeakMap) {
      var e = 0;
      d.prototype = {has:function(f) {
        return f.hasOwnProperty(this.id);
      }, get:function(f, c) {
        return f.hasOwnProperty(this.id) ? f[this.id] : c;
      }, set:function(f, c) {
        Object.defineProperty(f, this.id, {value:c, enumerable:!1, configurable:!0});
      }, delete:function(f) {
        delete f[this.id];
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
    d.prototype.push = function(e) {
      this._map ? (this._map.set(e, this._id++), this._newAdditions.forEach(function(f) {
        f.push(e);
      })) : this._list.push(e);
    };
    d.prototype.remove = function(e) {
      this._map ? this._map.delete(e) : this._list[this._list.indexOf(e)] = null;
    };
    d.prototype.forEach = function(e) {
      if (this._map) {
        var f = [];
        this._newAdditions.push(f);
        var c = this._map, m = ShumwayCom.getWeakMapKeys(c);
        m.sort(function(f, m) {
          return c.get(f) - c.get(m);
        });
        m.forEach(function(c) {
          0 !== c._referenceCount && e(c);
        });
        f.forEach(function(c) {
          0 !== c._referenceCount && e(c);
        });
        this._newAdditions.splice(this._newAdditions.indexOf(f), 1);
      } else {
        for (var f = this._list, d = 0, m = 0;m < f.length;m++) {
          var y = f[m];
          y && (0 === y._referenceCount ? (f[m] = null, d++) : e(y));
        }
        if (16 < d && d > f.length >> 2) {
          d = [];
          for (m = 0;m < f.length;m++) {
            (y = f[m]) && 0 < y._referenceCount && d.push(y);
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
  g.WeakList = b;
  var h;
  (function(d) {
    d.pow2 = function(e) {
      return e === (e | 0) ? 0 > e ? 1 / (1 << -e) : 1 << e : Math.pow(2, e);
    };
    d.clamp = function(e, f, c) {
      return Math.max(f, Math.min(c, e));
    };
    d.roundHalfEven = function(e) {
      if (.5 === Math.abs(e % 1)) {
        var f = Math.floor(e);
        return 0 === f % 2 ? f : Math.ceil(e);
      }
      return Math.round(e);
    };
    d.altTieBreakRound = function(e, f) {
      return .5 !== Math.abs(e % 1) || f ? Math.round(e) : e | 0;
    };
    d.epsilonEquals = function(e, f) {
      return 1E-7 > Math.abs(e - f);
    };
  })(h = g.NumberUtilities || (g.NumberUtilities = {}));
  (function(d) {
    d[d.MaxU16 = 65535] = "MaxU16";
    d[d.MaxI16 = 32767] = "MaxI16";
    d[d.MinI16 = -32768] = "MinI16";
  })(g.Numbers || (g.Numbers = {}));
  var n;
  (function(d) {
    function e(c) {
      return 256 * c << 16 >> 16;
    }
    var f = new ArrayBuffer(8);
    d.i8 = new Int8Array(f);
    d.u8 = new Uint8Array(f);
    d.i32 = new Int32Array(f);
    d.f32 = new Float32Array(f);
    d.f64 = new Float64Array(f);
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
    d.toS8U8 = e;
    d.fromS8U8 = function(c) {
      return c / 256;
    };
    d.clampS8U8 = function(c) {
      return e(c) / 256;
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
    d.getFlags = function(c, f) {
      var e = "";
      for (c = 0;c < f.length;c++) {
        c & 1 << c && (e += f[c] + " ");
      }
      return 0 === e.length ? "" : e.trim();
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
    d.roundToMultipleOfPowerOfTwo = function(c, f) {
      var e = (1 << f) - 1;
      return c + e & ~e;
    };
    d.toHEX = function(c) {
      return "0x" + ("00000000" + (0 > c ? 4294967295 + c + 1 : c).toString(16)).substr(-8);
    };
    Math.imul || (Math.imul = function(c, f) {
      var e = c & 65535, d = f & 65535;
      return e * d + ((c >>> 16 & 65535) * d + e * (f >>> 16 & 65535) << 16 >>> 0) | 0;
    });
    Math.clz32 || (Math.clz32 = function(c) {
      c |= c >> 1;
      c |= c >> 2;
      c |= c >> 4;
      c |= c >> 8;
      return 32 - d.ones(c | c >> 16);
    });
  })(n = g.IntegerUtilities || (g.IntegerUtilities = {}));
  (function(d) {
    function e(f, c, m, e, d, b) {
      return (m - f) * (b - c) - (e - c) * (d - f);
    }
    d.pointInPolygon = function(f, c, m) {
      for (var e = 0, d = m.length - 2, b = 0;b < d;b += 2) {
        var a = m[b + 0], k = m[b + 1], h = m[b + 2], v = m[b + 3];
        (k <= c && v > c || k > c && v <= c) && f < a + (c - k) / (v - k) * (h - a) && e++;
      }
      return 1 === (e & 1);
    };
    d.signedArea = e;
    d.counterClockwise = function(f, c, m, d, y, b) {
      return 0 < e(f, c, m, d, y, b);
    };
    d.clockwise = function(f, c, m, d, y, b) {
      return 0 > e(f, c, m, d, y, b);
    };
    d.pointInPolygonInt32 = function(f, c, m) {
      f |= 0;
      c |= 0;
      for (var e = 0, d = m.length - 2, b = 0;b < d;b += 2) {
        var a = m[b + 0], k = m[b + 1], h = m[b + 2], v = m[b + 3];
        (k <= c && v > c || k > c && v <= c) && f < a + (c - k) / (v - k) * (h - a) && e++;
      }
      return 1 === (e & 1);
    };
  })(g.GeometricUtilities || (g.GeometricUtilities = {}));
  (function(d) {
    d[d.Error = 1] = "Error";
    d[d.Warn = 2] = "Warn";
    d[d.Debug = 4] = "Debug";
    d[d.Log = 8] = "Log";
    d[d.Info = 16] = "Info";
    d[d.All = 31] = "All";
  })(g.LogLevel || (g.LogLevel = {}));
  b = function() {
    function d(e, f) {
      void 0 === e && (e = !1);
      this._tab = "  ";
      this._padding = "";
      this._suppressOutput = e;
      this._out = f || d._consoleOut;
      this._outNoNewline = f || d._consoleOutNoNewline;
    }
    Object.defineProperty(d.prototype, "suppressOutput", {get:function() {
      return this._suppressOutput;
    }, set:function(e) {
      this._suppressOutput = e;
    }, enumerable:!0, configurable:!0});
    d.prototype.write = function(e, f) {
      void 0 === e && (e = "");
      void 0 === f && (f = !1);
      this._suppressOutput || this._outNoNewline((f ? this._padding : "") + e);
    };
    d.prototype.writeLn = function(e) {
      void 0 === e && (e = "");
      this._suppressOutput || this._out(this._padding + e);
    };
    d.prototype.writeObject = function(e, f) {
      void 0 === e && (e = "");
      this._suppressOutput || this._out(this._padding + e, f);
    };
    d.prototype.writeTimeLn = function(e) {
      void 0 === e && (e = "");
      this._suppressOutput || this._out(this._padding + performance.now().toFixed(2) + " " + e);
    };
    d.prototype.writeComment = function(e) {
      e = (e || "").split("\n");
      if (1 === e.length) {
        this.writeLn("// " + e[0]);
      } else {
        this.writeLn("/**");
        for (var f = 0;f < e.length;f++) {
          this.writeLn(" * " + e[f]);
        }
        this.writeLn(" */");
      }
    };
    d.prototype.writeLns = function(e) {
      e = (e || "").split("\n");
      for (var f = 0;f < e.length;f++) {
        this.writeLn(e[f]);
      }
    };
    d.prototype.errorLn = function(e) {
      d.logLevel & 1 && this.boldRedLn(e);
    };
    d.prototype.warnLn = function(e) {
      d.logLevel & 2 && this.yellowLn(e);
    };
    d.prototype.debugLn = function(e) {
      d.logLevel & 4 && this.purpleLn(e);
    };
    d.prototype.logLn = function(e) {
      d.logLevel & 8 && this.writeLn(e);
    };
    d.prototype.infoLn = function(e) {
      d.logLevel & 16 && this.writeLn(e);
    };
    d.prototype.yellowLn = function(e) {
      this.colorLn(d.YELLOW, e);
    };
    d.prototype.greenLn = function(e) {
      this.colorLn(d.GREEN, e);
    };
    d.prototype.boldRedLn = function(e) {
      this.colorLn(d.BOLD_RED, e);
    };
    d.prototype.redLn = function(e) {
      this.colorLn(d.RED, e);
    };
    d.prototype.purpleLn = function(e) {
      this.colorLn(d.PURPLE, e);
    };
    d.prototype.colorLn = function(e, f) {
      this._suppressOutput || (inBrowser ? this._out(this._padding + f) : this._out(this._padding + e + f + d.ENDC));
    };
    d.prototype.redLns = function(e) {
      this.colorLns(d.RED, e);
    };
    d.prototype.colorLns = function(e, f) {
      for (var c = (f || "").split("\n"), m = 0;m < c.length;m++) {
        this.colorLn(e, c[m]);
      }
    };
    d.prototype.enter = function(e) {
      this._suppressOutput || this._out(this._padding + e);
      this.indent();
    };
    d.prototype.leaveAndEnter = function(e) {
      this.leave(e);
      this.indent();
    };
    d.prototype.leave = function(e) {
      this.outdent();
      !this._suppressOutput && e && this._out(this._padding + e);
    };
    d.prototype.indent = function() {
      this._padding += this._tab;
    };
    d.prototype.outdent = function() {
      0 < this._padding.length && (this._padding = this._padding.substring(0, this._padding.length - this._tab.length));
    };
    d.prototype.writeArray = function(e, f, c) {
      void 0 === f && (f = !1);
      void 0 === c && (c = !1);
      f = f || !1;
      for (var m = 0, d = e.length;m < d;m++) {
        var y = "";
        f && (y = null === e[m] ? "null" : void 0 === e[m] ? "undefined" : e[m].constructor.name, y += " ");
        var b = c ? "" : ("" + m).padRight(" ", 4);
        this.writeLn(b + y + e[m]);
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
  g.IndentingWriter = b;
  var u = function() {
    return function(d, e) {
      this.value = d;
      this.next = e;
    };
  }(), b = function() {
    function d(e) {
      this._compare = e;
      this._head = null;
      this._length = 0;
    }
    d.prototype.push = function(e) {
      this._length++;
      if (this._head) {
        var f = this._head, c = null;
        e = new u(e, null);
        for (var m = this._compare;f;) {
          if (0 < m(f.value, e.value)) {
            c ? (e.next = f, c.next = e) : (e.next = this._head, this._head = e);
            return;
          }
          c = f;
          f = f.next;
        }
        c.next = e;
      } else {
        this._head = new u(e, null);
      }
    };
    d.prototype.forEach = function(e) {
      for (var f = this._head, c = null;f;) {
        var m = e(f.value);
        if (m === d.RETURN) {
          break;
        } else {
          m === d.DELETE ? f = c ? c.next = f.next : this._head = this._head.next : (c = f, f = f.next);
        }
      }
    };
    d.prototype.isEmpty = function() {
      return !this._head;
    };
    d.prototype.pop = function() {
      if (this._head) {
        this._length--;
        var e = this._head;
        this._head = this._head.next;
        return e.value;
      }
    };
    d.prototype.contains = function(e) {
      for (var f = this._head;f;) {
        if (f.value === e) {
          return !0;
        }
        f = f.next;
      }
      return !1;
    };
    d.prototype.toString = function() {
      for (var e = "[", f = this._head;f;) {
        e += f.value.toString(), (f = f.next) && (e += ",");
      }
      return e + "]";
    };
    d.RETURN = 1;
    d.DELETE = 2;
    return d;
  }();
  g.SortedList = b;
  b = function() {
    function d(e, f) {
      void 0 === f && (f = 12);
      this.start = this.index = 0;
      this._size = 1 << f;
      this._mask = this._size - 1;
      this.array = new e(this._size);
    }
    d.prototype.get = function(e) {
      return this.array[e];
    };
    d.prototype.forEachInReverse = function(e) {
      if (!this.isEmpty()) {
        for (var f = 0 === this.index ? this._size - 1 : this.index - 1, c = this.start - 1 & this._mask;f !== c && !e(this.array[f], f);) {
          f = 0 === f ? this._size - 1 : f - 1;
        }
      }
    };
    d.prototype.write = function(e) {
      this.array[this.index] = e;
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
  g.CircularBuffer = b;
  (function(d) {
    function e(c) {
      return c + (d.BITS_PER_WORD - 1) >> d.ADDRESS_BITS_PER_WORD << d.ADDRESS_BITS_PER_WORD;
    }
    function f(c, f) {
      c = c || "1";
      f = f || "0";
      for (var m = "", e = 0;e < length;e++) {
        m += this.get(e) ? c : f;
      }
      return m;
    }
    function c(c) {
      for (var f = [], m = 0;m < length;m++) {
        this.get(m) && f.push(c ? c[m] : m);
      }
      return f.join(", ");
    }
    d.ADDRESS_BITS_PER_WORD = 5;
    d.BITS_PER_WORD = 1 << d.ADDRESS_BITS_PER_WORD;
    d.BIT_INDEX_MASK = d.BITS_PER_WORD - 1;
    var m = function() {
      function c(f) {
        this.size = e(f);
        this.dirty = this.count = 0;
        this.length = f;
        this.bits = new Uint32Array(this.size >> d.ADDRESS_BITS_PER_WORD);
      }
      c.prototype.recount = function() {
        if (this.dirty) {
          for (var c = this.bits, f = 0, m = 0, e = c.length;m < e;m++) {
            var d = c[m], d = d - (d >> 1 & 1431655765), d = (d & 858993459) + (d >> 2 & 858993459), f = f + (16843009 * (d + (d >> 4) & 252645135) >> 24)
          }
          this.count = f;
          this.dirty = 0;
        }
      };
      c.prototype.set = function(c) {
        var f = c >> d.ADDRESS_BITS_PER_WORD, m = this.bits[f];
        c = m | 1 << (c & d.BIT_INDEX_MASK);
        this.bits[f] = c;
        this.dirty |= m ^ c;
      };
      c.prototype.setAll = function() {
        for (var c = this.bits, f = 0, m = c.length;f < m;f++) {
          c[f] = 4294967295;
        }
        this.count = this.size;
        this.dirty = 0;
      };
      c.prototype.assign = function(c) {
        this.count = c.count;
        this.dirty = c.dirty;
        this.size = c.size;
        for (var f = 0, m = this.bits.length;f < m;f++) {
          this.bits[f] = c.bits[f];
        }
      };
      c.prototype.clear = function(c) {
        var f = c >> d.ADDRESS_BITS_PER_WORD, m = this.bits[f];
        c = m & ~(1 << (c & d.BIT_INDEX_MASK));
        this.bits[f] = c;
        this.dirty |= m ^ c;
      };
      c.prototype.get = function(c) {
        return 0 !== (this.bits[c >> d.ADDRESS_BITS_PER_WORD] & 1 << (c & d.BIT_INDEX_MASK));
      };
      c.prototype.clearAll = function() {
        for (var c = this.bits, f = 0, m = c.length;f < m;f++) {
          c[f] = 0;
        }
        this.dirty = this.count = 0;
      };
      c.prototype._union = function(c) {
        var f = this.dirty, m = this.bits;
        c = c.bits;
        for (var e = 0, d = m.length;e < d;e++) {
          var x = m[e], y = x | c[e];
          m[e] = y;
          f |= x ^ y;
        }
        this.dirty = f;
      };
      c.prototype.intersect = function(c) {
        var f = this.dirty, m = this.bits;
        c = c.bits;
        for (var e = 0, d = m.length;e < d;e++) {
          var x = m[e], y = x & c[e];
          m[e] = y;
          f |= x ^ y;
        }
        this.dirty = f;
      };
      c.prototype.subtract = function(c) {
        var f = this.dirty, m = this.bits;
        c = c.bits;
        for (var e = 0, d = m.length;e < d;e++) {
          var x = m[e], y = x & ~c[e];
          m[e] = y;
          f |= x ^ y;
        }
        this.dirty = f;
      };
      c.prototype.negate = function() {
        for (var c = this.dirty, f = this.bits, m = 0, e = f.length;m < e;m++) {
          var d = f[m], x = ~d;
          f[m] = x;
          c |= d ^ x;
        }
        this.dirty = c;
      };
      c.prototype.forEach = function(c) {
        for (var f = this.bits, m = 0, e = f.length;m < e;m++) {
          var x = f[m];
          if (x) {
            for (var y = 0;y < d.BITS_PER_WORD;y++) {
              x & 1 << y && c(m * d.BITS_PER_WORD + y);
            }
          }
        }
      };
      c.prototype.toArray = function() {
        for (var c = [], f = this.bits, m = 0, e = f.length;m < e;m++) {
          var x = f[m];
          if (x) {
            for (var y = 0;y < d.BITS_PER_WORD;y++) {
              x & 1 << y && c.push(m * d.BITS_PER_WORD + y);
            }
          }
        }
        return c;
      };
      c.prototype.equals = function(c) {
        if (this.size !== c.size) {
          return !1;
        }
        var f = this.bits;
        c = c.bits;
        for (var m = 0, e = f.length;m < e;m++) {
          if (f[m] !== c[m]) {
            return !1;
          }
        }
        return !0;
      };
      c.prototype.contains = function(c) {
        if (this.size !== c.size) {
          return !1;
        }
        var f = this.bits;
        c = c.bits;
        for (var m = 0, e = f.length;m < e;m++) {
          if ((f[m] | c[m]) !== f[m]) {
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
        var f = new c(this.length);
        f._union(this);
        return f;
      };
      return c;
    }();
    d.Uint32ArrayBitSet = m;
    var x = function() {
      function c(f) {
        this.dirty = this.count = 0;
        this.size = e(f);
        this.bits = 0;
        this.singleWord = !0;
        this.length = f;
      }
      c.prototype.recount = function() {
        if (this.dirty) {
          var c = this.bits, c = c - (c >> 1 & 1431655765), c = (c & 858993459) + (c >> 2 & 858993459);
          this.count = 0 + (16843009 * (c + (c >> 4) & 252645135) >> 24);
          this.dirty = 0;
        }
      };
      c.prototype.set = function(c) {
        var f = this.bits;
        this.bits = c = f | 1 << (c & d.BIT_INDEX_MASK);
        this.dirty |= f ^ c;
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
        var f = this.bits;
        this.bits = c = f & ~(1 << (c & d.BIT_INDEX_MASK));
        this.dirty |= f ^ c;
      };
      c.prototype.get = function(c) {
        return 0 !== (this.bits & 1 << (c & d.BIT_INDEX_MASK));
      };
      c.prototype.clearAll = function() {
        this.dirty = this.count = this.bits = 0;
      };
      c.prototype._union = function(c) {
        var f = this.bits;
        this.bits = c = f | c.bits;
        this.dirty = f ^ c;
      };
      c.prototype.intersect = function(c) {
        var f = this.bits;
        this.bits = c = f & c.bits;
        this.dirty = f ^ c;
      };
      c.prototype.subtract = function(c) {
        var f = this.bits;
        this.bits = c = f & ~c.bits;
        this.dirty = f ^ c;
      };
      c.prototype.negate = function() {
        var c = this.bits, f = ~c;
        this.bits = f;
        this.dirty = c ^ f;
      };
      c.prototype.forEach = function(c) {
        var f = this.bits;
        if (f) {
          for (var m = 0;m < d.BITS_PER_WORD;m++) {
            f & 1 << m && c(m);
          }
        }
      };
      c.prototype.toArray = function() {
        var c = [], f = this.bits;
        if (f) {
          for (var m = 0;m < d.BITS_PER_WORD;m++) {
            f & 1 << m && c.push(m);
          }
        }
        return c;
      };
      c.prototype.equals = function(c) {
        return this.bits === c.bits;
      };
      c.prototype.contains = function(c) {
        var f = this.bits;
        return (f | c.bits) === f;
      };
      c.prototype.isEmpty = function() {
        this.recount();
        return 0 === this.count;
      };
      c.prototype.clone = function() {
        var f = new c(this.length);
        f._union(this);
        return f;
      };
      return c;
    }();
    d.Uint32BitSet = x;
    x.prototype.toString = c;
    x.prototype.toBitString = f;
    m.prototype.toString = c;
    m.prototype.toBitString = f;
    d.BitSetFunctor = function(c) {
      var f = 1 === e(c) >> d.ADDRESS_BITS_PER_WORD ? x : m;
      return function() {
        return new f(c);
      };
    };
  })(g.BitSets || (g.BitSets = {}));
  b = function() {
    function d() {
    }
    d.randomStyle = function() {
      d._randomStyleCache || (d._randomStyleCache = "#ff5e3a #ff9500 #ffdb4c #87fc70 #52edc7 #1ad6fd #c644fc #ef4db6 #4a4a4a #dbddde #ff3b30 #ff9500 #ffcc00 #4cd964 #34aadc #007aff #5856d6 #ff2d55 #8e8e93 #c7c7cc #5ad427 #c86edf #d1eefc #e0f8d8 #fb2b69 #f7f7f7 #1d77ef #d6cec3 #55efcb #ff4981 #ffd3e0 #f7f7f7 #ff1300 #1f1f21 #bdbec2 #ff3a2d".split(" "));
      return d._randomStyleCache[d._nextStyle++ % d._randomStyleCache.length];
    };
    d.gradientColor = function(e) {
      return d._gradient[d._gradient.length * h.clamp(e, 0, 1) | 0];
    };
    d.contrastStyle = function(e) {
      e = parseInt(e.substr(1), 16);
      return 128 <= (299 * (e >> 16) + 587 * (e >> 8 & 255) + 114 * (e & 255)) / 1E3 ? "#000000" : "#ffffff";
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
  g.ColorStyle = b;
  b = function() {
    function d(e, f, c, m) {
      this.xMin = e | 0;
      this.yMin = f | 0;
      this.xMax = c | 0;
      this.yMax = m | 0;
    }
    d.FromUntyped = function(e) {
      return new d(e.xMin, e.yMin, e.xMax, e.yMax);
    };
    d.FromRectangle = function(e) {
      return new d(20 * e.x | 0, 20 * e.y | 0, 20 * (e.x + e.width) | 0, 20 * (e.y + e.height) | 0);
    };
    d.prototype.setElements = function(e, f, c, m) {
      this.xMin = e;
      this.yMin = f;
      this.xMax = c;
      this.yMax = m;
    };
    d.prototype.copyFrom = function(e) {
      this.setElements(e.xMin, e.yMin, e.xMax, e.yMax);
    };
    d.prototype.contains = function(e, f) {
      return e < this.xMin !== e < this.xMax && f < this.yMin !== f < this.yMax;
    };
    d.prototype.unionInPlace = function(e) {
      e.isEmpty() || (this.extendByPoint(e.xMin, e.yMin), this.extendByPoint(e.xMax, e.yMax));
    };
    d.prototype.extendByPoint = function(e, f) {
      this.extendByX(e);
      this.extendByY(f);
    };
    d.prototype.extendByX = function(e) {
      134217728 === this.xMin ? this.xMin = this.xMax = e : (this.xMin = Math.min(this.xMin, e), this.xMax = Math.max(this.xMax, e));
    };
    d.prototype.extendByY = function(e) {
      134217728 === this.yMin ? this.yMin = this.yMax = e : (this.yMin = Math.min(this.yMin, e), this.yMax = Math.max(this.yMax, e));
    };
    d.prototype.intersects = function(e) {
      return this.contains(e.xMin, e.yMin) || this.contains(e.xMax, e.yMax);
    };
    d.prototype.isEmpty = function() {
      return this.xMax <= this.xMin || this.yMax <= this.yMin;
    };
    Object.defineProperty(d.prototype, "width", {get:function() {
      return this.xMax - this.xMin;
    }, set:function(e) {
      this.xMax = this.xMin + e;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "height", {get:function() {
      return this.yMax - this.yMin;
    }, set:function(e) {
      this.yMax = this.yMin + e;
    }, enumerable:!0, configurable:!0});
    d.prototype.getBaseWidth = function(e) {
      return Math.abs(Math.cos(e)) * (this.xMax - this.xMin) + Math.abs(Math.sin(e)) * (this.yMax - this.yMin);
    };
    d.prototype.getBaseHeight = function(e) {
      return Math.abs(Math.sin(e)) * (this.xMax - this.xMin) + Math.abs(Math.cos(e)) * (this.yMax - this.yMin);
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
  g.Bounds = b;
  b = function() {
    function d(e, f, c, m) {
      l.assert(q(e));
      l.assert(q(f));
      l.assert(q(c));
      l.assert(q(m));
      this._xMin = e | 0;
      this._yMin = f | 0;
      this._xMax = c | 0;
      this._yMax = m | 0;
    }
    d.FromUntyped = function(e) {
      return new d(e.xMin, e.yMin, e.xMax, e.yMax);
    };
    d.FromRectangle = function(e) {
      return new d(20 * e.x | 0, 20 * e.y | 0, 20 * (e.x + e.width) | 0, 20 * (e.y + e.height) | 0);
    };
    d.prototype.setElements = function(e, f, c, m) {
      this.xMin = e;
      this.yMin = f;
      this.xMax = c;
      this.yMax = m;
    };
    d.prototype.copyFrom = function(e) {
      this.setElements(e.xMin, e.yMin, e.xMax, e.yMax);
    };
    d.prototype.contains = function(e, f) {
      return e < this.xMin !== e < this.xMax && f < this.yMin !== f < this.yMax;
    };
    d.prototype.unionInPlace = function(e) {
      e.isEmpty() || (this.extendByPoint(e.xMin, e.yMin), this.extendByPoint(e.xMax, e.yMax));
    };
    d.prototype.extendByPoint = function(e, f) {
      this.extendByX(e);
      this.extendByY(f);
    };
    d.prototype.extendByX = function(e) {
      134217728 === this.xMin ? this.xMin = this.xMax = e : (this.xMin = Math.min(this.xMin, e), this.xMax = Math.max(this.xMax, e));
    };
    d.prototype.extendByY = function(e) {
      134217728 === this.yMin ? this.yMin = this.yMax = e : (this.yMin = Math.min(this.yMin, e), this.yMax = Math.max(this.yMax, e));
    };
    d.prototype.intersects = function(e) {
      return this.contains(e._xMin, e._yMin) || this.contains(e._xMax, e._yMax);
    };
    d.prototype.isEmpty = function() {
      return this._xMax <= this._xMin || this._yMax <= this._yMin;
    };
    Object.defineProperty(d.prototype, "xMin", {get:function() {
      return this._xMin;
    }, set:function(e) {
      l.assert(q(e));
      this._xMin = e;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "yMin", {get:function() {
      return this._yMin;
    }, set:function(e) {
      l.assert(q(e));
      this._yMin = e | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "xMax", {get:function() {
      return this._xMax;
    }, set:function(e) {
      l.assert(q(e));
      this._xMax = e | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "width", {get:function() {
      return this._xMax - this._xMin;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "yMax", {get:function() {
      return this._yMax;
    }, set:function(e) {
      l.assert(q(e));
      this._yMax = e | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "height", {get:function() {
      return this._yMax - this._yMin;
    }, enumerable:!0, configurable:!0});
    d.prototype.getBaseWidth = function(e) {
      return Math.abs(Math.cos(e)) * (this._xMax - this._xMin) + Math.abs(Math.sin(e)) * (this._yMax - this._yMin);
    };
    d.prototype.getBaseHeight = function(e) {
      return Math.abs(Math.sin(e)) * (this._xMax - this._xMin) + Math.abs(Math.cos(e)) * (this._yMax - this._yMin);
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
  g.DebugBounds = b;
  b = function() {
    function d(e, f, c, m) {
      this.r = e;
      this.g = f;
      this.b = c;
      this.a = m;
    }
    d.FromARGB = function(e) {
      return new d((e >> 16 & 255) / 255, (e >> 8 & 255) / 255, (e >> 0 & 255) / 255, (e >> 24 & 255) / 255);
    };
    d.FromRGBA = function(e) {
      return d.FromARGB(p.RGBAToARGB(e));
    };
    d.prototype.toRGBA = function() {
      return 255 * this.r << 24 | 255 * this.g << 16 | 255 * this.b << 8 | 255 * this.a;
    };
    d.prototype.toCSSStyle = function() {
      return p.rgbaToCSSStyle(this.toRGBA());
    };
    d.prototype.set = function(e) {
      this.r = e.r;
      this.g = e.g;
      this.b = e.b;
      this.a = e.a;
    };
    d.randomColor = function(e) {
      void 0 === e && (e = 1);
      return new d(Math.random(), Math.random(), Math.random(), e);
    };
    d.parseColor = function(e) {
      d.colorCache || (d.colorCache = Object.create(null));
      if (d.colorCache[e]) {
        return d.colorCache[e];
      }
      var f = document.createElement("span");
      document.body.appendChild(f);
      f.style.backgroundColor = e;
      var c = getComputedStyle(f).backgroundColor;
      document.body.removeChild(f);
      (f = /^rgb\((\d+), (\d+), (\d+)\)$/.exec(c)) || (f = /^rgba\((\d+), (\d+), (\d+), ([\d.]+)\)$/.exec(c));
      c = new d(0, 0, 0, 0);
      c.r = parseFloat(f[1]) / 255;
      c.g = parseFloat(f[2]) / 255;
      c.b = parseFloat(f[3]) / 255;
      c.a = f[4] ? parseFloat(f[4]) / 255 : 1;
      return d.colorCache[e] = c;
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
  g.Color = b;
  var p;
  (function(d) {
    function e(c) {
      var f, m, e = c >> 24 & 255;
      m = (Math.imul(c >> 16 & 255, e) + 127) / 255 | 0;
      f = (Math.imul(c >> 8 & 255, e) + 127) / 255 | 0;
      c = (Math.imul(c >> 0 & 255, e) + 127) / 255 | 0;
      return e << 24 | m << 16 | f << 8 | c;
    }
    function f() {
      if (!c) {
        c = new Uint8Array(65536);
        for (var f = 0;256 > f;f++) {
          for (var m = 0;256 > m;m++) {
            c[(m << 8) + f] = Math.imul(255, f) / m;
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
      return g.StringUtilities.concat9("rgba(", c >> 24 & 255, ",", c >> 16 & 255, ",", c >> 8 & 255, ",", (c & 255) / 255, ")");
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
      var f, m, e = c >> 24 & 255;
      m = Math.imul(255, c >> 16 & 255) / e & 255;
      f = Math.imul(255, c >> 8 & 255) / e & 255;
      c = Math.imul(255, c >> 0 & 255) / e & 255;
      return e << 24 | m << 16 | f << 8 | c;
    };
    d.premultiplyARGB = e;
    var c;
    d.ensureUnpremultiplyTable = f;
    d.getUnpremultiplyTable = function() {
      f();
      return c;
    };
    d.tableLookupUnpremultiplyARGB = function(f) {
      f |= 0;
      var m = f >> 24 & 255;
      if (0 === m) {
        return 0;
      }
      if (255 === m) {
        return f;
      }
      var e, d, b = m << 8, a = c;
      d = a[b + (f >> 16 & 255)];
      e = a[b + (f >> 8 & 255)];
      f = a[b + (f >> 0 & 255)];
      return m << 24 | d << 16 | e << 8 | f;
    };
    d.blendPremultipliedBGRA = function(c, f) {
      var m, e;
      e = 256 - (f & 255);
      m = Math.imul(c & 16711935, e) >> 8;
      e = Math.imul(c >> 8 & 16711935, e) >> 8;
      return ((f >> 8 & 16711935) + e & 16711935) << 8 | (f & 16711935) + m & 16711935;
    };
    var m = n.swap32;
    d.convertImage = function(f, d, b, a) {
      var k = b.length;
      if (f === d) {
        if (b !== a) {
          for (f = 0;f < k;f++) {
            a[f] = b[f];
          }
        }
      } else {
        if (1 === f && 3 === d) {
          for (g.ColorUtilities.ensureUnpremultiplyTable(), f = 0;f < k;f++) {
            var h = b[f];
            d = h & 255;
            if (0 === d) {
              a[f] = 0;
            } else {
              if (255 === d) {
                a[f] = 4278190080 | h >> 8 & 16777215;
              } else {
                var p = h >> 24 & 255, t = h >> 16 & 255, h = h >> 8 & 255, n = d << 8, u = c, h = u[n + h], t = u[n + t], p = u[n + p];
                a[f] = d << 24 | p << 16 | t << 8 | h;
              }
            }
          }
        } else {
          if (2 === f && 3 === d) {
            for (f = 0;f < k;f++) {
              a[f] = m(b[f]);
            }
          } else {
            if (3 === f && 1 === d) {
              for (f = 0;f < k;f++) {
                d = b[f], a[f] = m(e(d & 4278255360 | d >> 16 & 255 | (d & 255) << 16));
              }
            } else {
              for (l.somewhatImplemented("Image Format Conversion: " + v[f] + " -> " + v[d]), f = 0;f < k;f++) {
                a[f] = b[f];
              }
            }
          }
        }
      }
    };
  })(p = g.ColorUtilities || (g.ColorUtilities = {}));
  b = function() {
    function d(e) {
      void 0 === e && (e = 32);
      this._list = [];
      this._maxSize = e;
    }
    d.prototype.acquire = function(e) {
      if (d._enabled) {
        for (var f = this._list, c = 0;c < f.length;c++) {
          var m = f[c];
          if (m.byteLength >= e) {
            return f.splice(c, 1), m;
          }
        }
      }
      return new ArrayBuffer(e);
    };
    d.prototype.release = function(e) {
      if (d._enabled) {
        var f = this._list;
        f.length === this._maxSize && f.shift();
        f.push(e);
      }
    };
    d.prototype.ensureUint8ArrayLength = function(e, f) {
      if (e.length >= f) {
        return e;
      }
      var c = Math.max(e.length + f, (3 * e.length >> 1) + 1), c = new Uint8Array(this.acquire(c), 0, c);
      c.set(e);
      this.release(e.buffer);
      return c;
    };
    d.prototype.ensureFloat64ArrayLength = function(e, f) {
      if (e.length >= f) {
        return e;
      }
      var c = Math.max(e.length + f, (3 * e.length >> 1) + 1), c = new Float64Array(this.acquire(c * Float64Array.BYTES_PER_ELEMENT), 0, c);
      c.set(e);
      this.release(e.buffer);
      return c;
    };
    d._enabled = !0;
    return d;
  }();
  g.ArrayBufferPool = b;
  (function(d) {
    (function(e) {
      e[e.EXTERNAL_INTERFACE_FEATURE = 1] = "EXTERNAL_INTERFACE_FEATURE";
      e[e.CLIPBOARD_FEATURE = 2] = "CLIPBOARD_FEATURE";
      e[e.SHAREDOBJECT_FEATURE = 3] = "SHAREDOBJECT_FEATURE";
      e[e.VIDEO_FEATURE = 4] = "VIDEO_FEATURE";
      e[e.SOUND_FEATURE = 5] = "SOUND_FEATURE";
      e[e.NETCONNECTION_FEATURE = 6] = "NETCONNECTION_FEATURE";
    })(d.Feature || (d.Feature = {}));
    (function(e) {
      e[e.AVM1_ERROR = 1] = "AVM1_ERROR";
      e[e.AVM2_ERROR = 2] = "AVM2_ERROR";
    })(d.ErrorTypes || (d.ErrorTypes = {}));
    (function(e) {
      e[e.LoadSource = 0] = "LoadSource";
      e[e.LoadWhitelistAllowed = 1] = "LoadWhitelistAllowed";
      e[e.LoadWhitelistDenied = 2] = "LoadWhitelistDenied";
      e[e.StreamAllowed = 3] = "StreamAllowed";
      e[e.StreamDenied = 4] = "StreamDenied";
      e[e.StreamCrossdomain = 5] = "StreamCrossdomain";
    })(d.LoadResource || (d.LoadResource = {}));
    d.instance;
  })(g.Telemetry || (g.Telemetry = {}));
  (function(d) {
    d.instance;
  })(g.FileLoadingService || (g.FileLoadingService = {}));
  (function(d) {
    d[d.BuiltinAbc = 0] = "BuiltinAbc";
    d[d.PlayerglobalAbcs = 1] = "PlayerglobalAbcs";
    d[d.PlayerglobalManifest = 2] = "PlayerglobalManifest";
    d[d.ShellAbc = 3] = "ShellAbc";
  })(g.SystemResourceId || (g.SystemResourceId = {}));
  (function(d) {
    d.instance;
  })(g.SystemResourcesLoadingService || (g.SystemResourcesLoadingService = {}));
  g.registerCSSFont = function(d, e, f) {
    if (inBrowser) {
      var c = document.head;
      c.insertBefore(document.createElement("style"), c.firstChild);
      c = document.styleSheets[0];
      e = "@font-face{font-family:swffont" + d + ";src:url(data:font/opentype;base64," + g.StringUtilities.base64ArrayBuffer(e.buffer) + ")}";
      c.insertRule(e, c.cssRules.length);
      f && (f = document.createElement("div"), f.style.fontFamily = "swffont" + d, f.innerHTML = "hello", document.body.appendChild(f), document.body.removeChild(f));
    } else {
      l.warning("Cannot register CSS font outside the browser");
    }
  };
  (function(d) {
    d.instance = {enabled:!1, initJS:function(e) {
    }, registerCallback:function(e) {
    }, unregisterCallback:function(e) {
    }, eval:function(e) {
    }, call:function(e) {
    }, getId:function() {
      return null;
    }};
  })(g.ExternalInterfaceService || (g.ExternalInterfaceService = {}));
  (function(d) {
    d[d.InvalidCallback = -3] = "InvalidCallback";
    d[d.AlreadyTaken = -2] = "AlreadyTaken";
    d[d.InvalidName = -1] = "InvalidName";
    d[d.Success = 0] = "Success";
  })(g.LocalConnectionConnectResult || (g.LocalConnectionConnectResult = {}));
  (function(d) {
    d[d.NotConnected = -1] = "NotConnected";
    d[d.Success = 0] = "Success";
  })(g.LocalConnectionCloseResult || (g.LocalConnectionCloseResult = {}));
  (function(d) {
    d.instance;
  })(g.LocalConnectionService || (g.LocalConnectionService = {}));
  (function(d) {
    d.instance = {setClipboard:function(e) {
    }};
  })(g.ClipboardService || (g.ClipboardService = {}));
  b = function() {
    function d() {
      this._queues = {};
    }
    d.prototype.register = function(e, f) {
      l.assert(e);
      l.assert(f);
      var c = this._queues[e];
      if (c) {
        if (-1 < c.indexOf(f)) {
          return;
        }
      } else {
        c = this._queues[e] = [];
      }
      c.push(f);
    };
    d.prototype.unregister = function(e, f) {
      l.assert(e);
      l.assert(f);
      var c = this._queues[e];
      if (c) {
        var m = c.indexOf(f);
        -1 !== m && c.splice(m, 1);
        0 === c.length && (this._queues[e] = null);
      }
    };
    d.prototype.notify = function(e, f) {
      var c = this._queues[e];
      if (c) {
        c = c.slice();
        f = Array.prototype.slice.call(arguments, 0);
        for (var m = 0;m < c.length;m++) {
          c[m].apply(null, f);
        }
      }
    };
    d.prototype.notify1 = function(e, f) {
      var c = this._queues[e];
      if (c) {
        for (var c = c.slice(), m = 0;m < c.length;m++) {
          (0,c[m])(e, f);
        }
      }
    };
    return d;
  }();
  g.Callback = b;
  (function(d) {
    d[d.None = 0] = "None";
    d[d.PremultipliedAlphaARGB = 1] = "PremultipliedAlphaARGB";
    d[d.StraightAlphaARGB = 2] = "StraightAlphaARGB";
    d[d.StraightAlphaRGBA = 3] = "StraightAlphaRGBA";
    d[d.JPEG = 4] = "JPEG";
    d[d.PNG = 5] = "PNG";
    d[d.GIF = 6] = "GIF";
  })(g.ImageType || (g.ImageType = {}));
  var v = g.ImageType;
  g.getMIMETypeForImageType = function(d) {
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
    d.toCSSCursor = function(e) {
      switch(e) {
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
  })(g.UI || (g.UI = {}));
  b = function() {
    function d() {
      this.promise = new Promise(function(e, f) {
        this.resolve = e;
        this.reject = f;
      }.bind(this));
    }
    d.prototype.then = function(e, f) {
      return this.promise.then(e, f);
    };
    return d;
  }();
  g.PromiseWrapper = b;
})(Shumway || (Shumway = {}));
(function() {
  function g(c) {
    if ("function" !== typeof c) {
      throw new TypeError("Invalid deferred constructor");
    }
    var f = u();
    c = new c(f);
    var e = f.resolve;
    if ("function" !== typeof e) {
      throw new TypeError("Invalid resolve construction function");
    }
    f = f.reject;
    if ("function" !== typeof f) {
      throw new TypeError("Invalid reject construction function");
    }
    return {promise:c, resolve:e, reject:f};
  }
  function q(c, f) {
    if ("object" !== typeof c || null === c) {
      return !1;
    }
    try {
      var e = c.then;
      if ("function" !== typeof e) {
        return !1;
      }
      e.call(c, f.resolve, f.reject);
    } catch (d) {
      e = f.reject, e(d);
    }
    return !0;
  }
  function r(c) {
    return "object" === typeof c && null !== c && "undefined" !== typeof c.promiseStatus;
  }
  function a(c, f) {
    if ("unresolved" === c.promiseStatus) {
      var e = c.rejectReactions;
      c.result = f;
      c.resolveReactions = void 0;
      c.rejectReactions = void 0;
      c.promiseStatus = "has-rejection";
      w(e, f);
    }
  }
  function w(c, f) {
    for (var e = 0;e < c.length;e++) {
      l({reaction:c[e], argument:f});
    }
  }
  function l(c) {
    0 === f.length && setTimeout(b, 0);
    f.push(c);
  }
  function b() {
    for (;0 < f.length;) {
      var c = f[0];
      try {
        a: {
          var m = c.reaction, e = m.deferred, y = m.handler, b = void 0, a = void 0;
          try {
            b = y(c.argument);
          } catch (k) {
            var h = e.reject;
            h(k);
            break a;
          }
          if (b === e.promise) {
            h = e.reject, h(new TypeError("Self resolution"));
          } else {
            try {
              if (a = q(b, e), !a) {
                var v = e.resolve;
                v(b);
              }
            } catch (p) {
              h = e.reject, h(p);
            }
          }
        }
      } catch (t) {
        if ("function" === typeof d.onerror) {
          d.onerror(t);
        }
      }
      f.shift();
    }
  }
  function k(c) {
    throw c;
  }
  function t(c) {
    return c;
  }
  function h(c) {
    return function(f) {
      a(c, f);
    };
  }
  function n(c) {
    return function(f) {
      if ("unresolved" === c.promiseStatus) {
        var e = c.resolveReactions;
        c.result = f;
        c.resolveReactions = void 0;
        c.rejectReactions = void 0;
        c.promiseStatus = "has-resolution";
        w(e, f);
      }
    };
  }
  function u() {
    function c(f, e) {
      c.resolve = f;
      c.reject = e;
    }
    return c;
  }
  function p(c, f, e) {
    return function(d) {
      if (d === c) {
        return e(new TypeError("Self resolution"));
      }
      var b = c.promiseConstructor;
      if (r(d) && d.promiseConstructor === b) {
        return d.then(f, e);
      }
      b = g(b);
      return q(d, b) ? b.promise.then(f, e) : f(d);
    };
  }
  function v(c, f, e, d) {
    return function(b) {
      f[c] = b;
      d.countdown--;
      0 === d.countdown && e.resolve(f);
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
    var f = n(this), e = h(this);
    try {
      c(f, e);
    } catch (b) {
      a(this, b);
    }
    this.promiseConstructor = d;
    return this;
  }
  var e = Function("return this")();
  if (e.Promise) {
    "function" !== typeof e.Promise.all && (e.Promise.all = function(c) {
      var f = 0, d = [], b, a, k = new e.Promise(function(c, f) {
        b = c;
        a = f;
      });
      c.forEach(function(c, e) {
        f++;
        c.then(function(c) {
          d[e] = c;
          f--;
          0 === f && b(d);
        }, a);
      });
      0 === f && b(d);
      return k;
    }), "function" !== typeof e.Promise.resolve && (e.Promise.resolve = function(c) {
      return new e.Promise(function(f) {
        f(c);
      });
    });
  } else {
    var f = [];
    d.all = function(c) {
      var f = g(this), e = [], d = {countdown:0}, b = 0;
      c.forEach(function(c) {
        this.cast(c).then(v(b, e, f, d), f.reject);
        b++;
        d.countdown++;
      }, this);
      0 === b && f.resolve(e);
      return f.promise;
    };
    d.cast = function(c) {
      if (r(c)) {
        return c;
      }
      var f = g(this);
      f.resolve(c);
      return f.promise;
    };
    d.reject = function(c) {
      var f = g(this);
      f.reject(c);
      return f.promise;
    };
    d.resolve = function(c) {
      var f = g(this);
      f.resolve(c);
      return f.promise;
    };
    d.prototype = {"catch":function(c) {
      this.then(void 0, c);
    }, then:function(c, f) {
      if (!r(this)) {
        throw new TypeError("this is not a Promises");
      }
      var e = g(this.promiseConstructor), d = "function" === typeof f ? f : k, b = {deferred:e, handler:p(this, "function" === typeof c ? c : t, d)}, d = {deferred:e, handler:d};
      switch(this.promiseStatus) {
        case "unresolved":
          this.resolveReactions.push(b);
          this.rejectReactions.push(d);
          break;
        case "has-resolution":
          l({reaction:b, argument:this.result});
          break;
        case "has-rejection":
          l({reaction:d, argument:this.result});
      }
      return e.promise;
    }};
    e.Promise = d;
  }
})();
"undefined" !== typeof exports && (exports.Shumway = Shumway);
(function() {
  function g(g, r, a) {
    g[r] || Object.defineProperty(g, r, {value:a, writable:!0, configurable:!0, enumerable:!1});
  }
  g(String.prototype, "padRight", function(g, r) {
    var a = this, w = a.replace(/\033\[[0-9]*m/g, "").length;
    if (!g || w >= r) {
      return a;
    }
    for (var w = (r - w) / g.length, l = 0;l < w;l++) {
      a += g;
    }
    return a;
  });
  g(String.prototype, "padLeft", function(g, r) {
    var a = this, w = a.length;
    if (!g || w >= r) {
      return a;
    }
    for (var w = (r - w) / g.length, l = 0;l < w;l++) {
      a = g + a;
    }
    return a;
  });
  g(String.prototype, "trim", function() {
    return this.replace(/^\s+|\s+$/g, "");
  });
  g(String.prototype, "endsWith", function(g) {
    return -1 !== this.indexOf(g, this.length - g.length);
  });
  g(Array.prototype, "replace", function(g, r) {
    if (g === r) {
      return 0;
    }
    for (var a = 0, w = 0;w < this.length;w++) {
      this[w] === g && (this[w] = r, a++);
    }
    return a;
  });
})();
(function(g) {
  (function(q) {
    var r = g.isObject, a = function() {
      function b(a, k, n, l) {
        this.shortName = a;
        this.longName = k;
        this.type = n;
        l = l || {};
        this.positional = l.positional;
        this.parseFn = l.parse;
        this.value = l.defaultValue;
      }
      b.prototype.parse = function(b) {
        this.value = "boolean" === this.type ? b : "number" === this.type ? parseInt(b, 10) : b;
        this.parseFn && this.parseFn(this.value);
      };
      return b;
    }();
    q.Argument = a;
    var w = function() {
      function b() {
        this.args = [];
      }
      b.prototype.addArgument = function(b, k, n, l) {
        b = new a(b, k, n, l);
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
          l.isOptionSet(b) ? a.addBoundOptionSet(b) : a.addBoundOption(b);
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
        var a = {}, k = [];
        this.args.forEach(function(e) {
          e.positional ? k.push(e) : (a["-" + e.shortName] = e, a["--" + e.longName] = e);
        });
        for (var l = [];b.length;) {
          var p = b.shift(), v = null, d = p;
          if ("--" == p) {
            l = l.concat(b);
            break;
          } else {
            if ("-" == p.slice(0, 1) || "--" == p.slice(0, 2)) {
              v = a[p];
              if (!v) {
                continue;
              }
              d = "boolean" !== v.type ? b.shift() : !0;
            } else {
              k.length ? v = k.shift() : l.push(d);
            }
          }
          v && v.parse(d);
        }
        return l;
      };
      return b;
    }();
    q.ArgumentParser = w;
    var l = function() {
      function a(b, k) {
        void 0 === k && (k = null);
        this.open = !1;
        this.name = b;
        this.settings = k || {};
        this.options = [];
      }
      a.isOptionSet = function(t) {
        return t instanceof a ? !0 : "object" !== typeof t || null === t || t instanceof b ? !1 : "options" in t && "name" in t && "settings" in t;
      };
      a.prototype.register = function(b) {
        if (a.isOptionSet(b)) {
          for (var h = 0;h < this.options.length;h++) {
            var n = this.options[h];
            if (a.isOptionSet(n) && n.name === b.name) {
              return n;
            }
          }
        }
        this.options.push(b);
        if (this.settings) {
          if (a.isOptionSet(b)) {
            h = this.settings[b.name], r(h) && (b.settings = h.settings, b.open = h.open);
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
        this.options.forEach(function(h) {
          a.isOptionSet(h) ? b[h.name] = {settings:h.getSettings(), open:h.open} : b[h.longName] = h.value;
        });
        return b;
      };
      a.prototype.setSettings = function(b) {
        b && this.options.forEach(function(h) {
          a.isOptionSet(h) ? h.name in b && h.setSettings(b[h.name].settings) : h.longName in b && (h.value = b[h.longName]);
        });
      };
      return a;
    }();
    q.OptionSet = l;
    var b = function() {
      function b(a, k, n, l, p, v) {
        void 0 === v && (v = null);
        this.longName = k;
        this.shortName = a;
        this.type = n;
        this.value = this.defaultValue = l;
        this.description = p;
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
    q.Option = b;
  })(g.Options || (g.Options = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(r) {
    r.ROOT = "Shumway Options";
    r.shumwayOptions = new g.Options.OptionSet(r.ROOT);
    r.setSettings = function(a) {
      r.shumwayOptions.setSettings(a);
    };
    r.getSettings = function() {
      return r.shumwayOptions.getSettings();
    };
  })(g.Settings || (g.Settings = {}));
  var q = g.Options.Option;
  g.loggingOptions = g.Settings.shumwayOptions.register(new g.Options.OptionSet("Logging Options"));
  g.omitRepeatedWarnings = g.loggingOptions.register(new q("wo", "warnOnce", "boolean", !0, "Omit Repeated Warnings"));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(q) {
    var r = function() {
      function a(a, l) {
        this._parent = a;
        this._timers = g.ObjectUtilities.createMap();
        this._name = l;
        this._count = this._total = this._last = this._begin = 0;
      }
      a.time = function(g, l) {
        a.start(g);
        l();
        a.stop();
      };
      a.start = function(g) {
        a._top = a._top._timers[g] || (a._top._timers[g] = new a(a._top, g));
        a._top.start();
        g = a._flat._timers[g] || (a._flat._timers[g] = new a(a._flat, g));
        g.start();
        a._flatStack.push(g);
      };
      a.stop = function() {
        a._top.stop();
        a._top = a._top._parent;
        a._flatStack.pop().stop();
      };
      a.stopStart = function(g) {
        a.stop();
        a.start(g);
      };
      a.prototype.start = function() {
        this._begin = g.getTicks();
      };
      a.prototype.stop = function() {
        this._last = g.getTicks() - this._begin;
        this._total += this._last;
        this._count += 1;
      };
      a.prototype.toJSON = function() {
        return {name:this._name, total:this._total, timers:this._timers};
      };
      a.prototype.trace = function(a) {
        a.enter(this._name + ": " + this._total.toFixed(2) + " ms, count: " + this._count + ", average: " + (this._total / this._count).toFixed(2) + " ms");
        for (var l in this._timers) {
          this._timers[l].trace(a);
        }
        a.outdent();
      };
      a.trace = function(g) {
        a._base.trace(g);
        a._flat.trace(g);
      };
      a._base = new a(null, "Total");
      a._top = a._base;
      a._flat = new a(null, "Flat");
      a._flatStack = [];
      return a;
    }();
    q.Timer = r;
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
        this._counts = g.ObjectUtilities.createMap();
        this._times = g.ObjectUtilities.createMap();
      };
      a.prototype.toJSON = function() {
        return {counts:this._counts, times:this._times};
      };
      a.prototype.count = function(a, l, b) {
        void 0 === l && (l = 1);
        void 0 === b && (b = 0);
        if (this._enabled) {
          return void 0 === this._counts[a] && (this._counts[a] = 0, this._times[a] = 0), this._counts[a] += l, this._times[a] += b, this._counts[a];
        }
      };
      a.prototype.trace = function(a) {
        for (var l in this._counts) {
          a.writeLn(l + ": " + this._counts[l]);
        }
      };
      a.prototype._pairToString = function(a, l) {
        var b = l[0], k = l[1], t = a[b], b = b + ": " + k;
        t && (b += ", " + t.toFixed(4), 1 < k && (b += " (" + (t / k).toFixed(4) + ")"));
        return b;
      };
      a.prototype.toStringSorted = function() {
        var a = this, l = this._times, b = [], k;
        for (k in this._counts) {
          b.push([k, this._counts[k]]);
        }
        b.sort(function(b, a) {
          return a[1] - b[1];
        });
        return b.map(function(b) {
          return a._pairToString(l, b);
        }).join(", ");
      };
      a.prototype.traceSorted = function(a, l) {
        void 0 === l && (l = !1);
        var b = this, k = this._times, t = [], h;
        for (h in this._counts) {
          t.push([h, this._counts[h]]);
        }
        t.sort(function(b, a) {
          return a[1] - b[1];
        });
        l ? a.writeLn(t.map(function(a) {
          return b._pairToString(k, a);
        }).join(", ")) : t.forEach(function(h) {
          a.writeLn(b._pairToString(k, h));
        });
      };
      a.instance = new a(!0);
      return a;
    }();
    q.Counter = r;
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
        for (var a = 0, l = 0;l < this._count;l++) {
          a += this._samples[l];
        }
        return a / this._count;
      };
      return a;
    }();
    q.Average = r;
  })(g.Metrics || (g.Metrics = {}));
})(Shumway || (Shumway = {}));
var __extends = this.__extends || function(g, q) {
  function r() {
    this.constructor = g;
  }
  for (var a in q) {
    q.hasOwnProperty(a) && (g[a] = q[a]);
  }
  r.prototype = q.prototype;
  g.prototype = new r;
};
(function(g) {
  (function(g) {
    function r(f) {
      for (var c = Math.max.apply(null, f), m = f.length, e = 1 << c, d = new Uint32Array(e), b = c << 16 | 65535, a = 0;a < e;a++) {
        d[a] = b;
      }
      for (var b = 0, a = 1, k = 2;a <= c;b <<= 1, ++a, k <<= 1) {
        for (var h = 0;h < m;++h) {
          if (f[h] === a) {
            for (var v = 0, p = 0;p < a;++p) {
              v = 2 * v + (b >> p & 1);
            }
            for (p = v;p < e;p += k) {
              d[p] = a << 16 | h;
            }
            ++b;
          }
        }
      }
      return {codes:d, maxBits:c};
    }
    var a;
    (function(f) {
      f[f.INIT = 0] = "INIT";
      f[f.BLOCK_0 = 1] = "BLOCK_0";
      f[f.BLOCK_1 = 2] = "BLOCK_1";
      f[f.BLOCK_2_PRE = 3] = "BLOCK_2_PRE";
      f[f.BLOCK_2 = 4] = "BLOCK_2";
      f[f.DONE = 5] = "DONE";
      f[f.ERROR = 6] = "ERROR";
      f[f.VERIFY_HEADER = 7] = "VERIFY_HEADER";
    })(a || (a = {}));
    a = function() {
      function f(c) {
      }
      f.prototype.push = function(c) {
      };
      f.prototype.close = function() {
      };
      f.create = function(c) {
        return "undefined" !== typeof ShumwayCom && ShumwayCom.createSpecialInflate ? new v(c, ShumwayCom.createSpecialInflate) : new w(c);
      };
      f.prototype._processZLibHeader = function(c, f, e) {
        if (f + 2 > e) {
          return 0;
        }
        c = c[f] << 8 | c[f + 1];
        f = null;
        2048 !== (c & 3840) ? f = "inflate: unknown compression method" : 0 !== c % 31 ? f = "inflate: bad FCHECK" : 0 !== (c & 32) && (f = "inflate: FDICT bit set");
        if (f) {
          if (this.onError) {
            this.onError(f);
          }
          return -1;
        }
        return 2;
      };
      f.inflate = function(c, m, e) {
        var d = new Uint8Array(m), b = 0;
        m = f.create(e);
        m.onData = function(c) {
          var f = Math.min(c.length, d.length - b);
          f && g.memCopy(d, c, b, 0, f);
          b += f;
        };
        m.onError = function(c) {
          throw Error(c);
        };
        m.push(c);
        m.close();
        return d;
      };
      return f;
    }();
    g.Inflate = a;
    var w = function(f) {
      function c(c) {
        f.call(this, c);
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
        if (!p) {
          l = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
          b = new Uint16Array(30);
          k = new Uint8Array(30);
          for (var e = c = 0, d = 1;30 > c;++c) {
            b[c] = d, d += 1 << (k[c] = ~~((e += 2 < c ? 1 : 0) / 2));
          }
          var a = new Uint8Array(288);
          for (c = 0;32 > c;++c) {
            a[c] = 5;
          }
          t = r(a.subarray(0, 32));
          h = new Uint16Array(29);
          n = new Uint8Array(29);
          e = c = 0;
          for (d = 3;29 > c;++c) {
            h[c] = d - (28 == c ? 1 : 0), d += 1 << (n[c] = ~~((e += 4 < c ? 1 : 0) / 4 % 6));
          }
          for (c = 0;288 > c;++c) {
            a[c] = 144 > c || 279 < c ? 8 : 256 > c ? 9 : 7;
          }
          u = r(a);
          p = !0;
        }
      }
      __extends(c, f);
      c.prototype.push = function(c) {
        if (!this._buffer || this._buffer.length < this._bufferSize + c.length) {
          var f = new Uint8Array(this._bufferSize + c.length);
          this._buffer && f.set(this._buffer);
          this._buffer = f;
        }
        this._buffer.set(c, this._bufferSize);
        this._bufferSize += c.length;
        this._bufferPosition = 0;
        c = !1;
        do {
          f = this._windowPosition;
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
              var e = this._processZLibHeader(this._buffer, this._bufferPosition, this._bufferSize);
              0 < e ? (this._bufferPosition += e, this._state = 0) : 0 === e ? c = !0 : this._state = 6;
          }
          if (0 < this._windowPosition - f) {
            this.onData(this._window.subarray(f, this._windowPosition));
          }
          65536 <= this._windowPosition && ("copyWithin" in this._buffer ? this._window.copyWithin(0, this._windowPosition - 32768, this._windowPosition) : this._window.set(this._window.subarray(this._windowPosition - 32768, this._windowPosition)), this._windowPosition = 32768);
        } while (!c && this._bufferPosition < this._bufferSize);
        this._bufferPosition < this._bufferSize ? ("copyWithin" in this._buffer ? this._buffer.copyWithin(0, this._bufferPosition, this._bufferSize) : this._buffer.set(this._buffer.subarray(this._bufferPosition, this._bufferSize)), this._bufferSize -= this._bufferPosition) : this._bufferSize = 0;
      };
      c.prototype._decodeInitState = function() {
        if (this._isFinalBlock) {
          return this._state = 5, !1;
        }
        var c = this._buffer, f = this._bufferSize, e = this._bitBuffer, d = this._bitLength, b = this._bufferPosition;
        if (3 > (f - b << 3) + d) {
          return !0;
        }
        3 > d && (e |= c[b++] << d, d += 8);
        var a = e & 7, e = e >> 3, d = d - 3;
        switch(a >> 1) {
          case 0:
            d = e = 0;
            if (4 > f - b) {
              return !0;
            }
            var k = c[b] | c[b + 1] << 8, c = c[b + 2] | c[b + 3] << 8, b = b + 4;
            if (65535 !== (k ^ c)) {
              this._error("inflate: invalid block 0 length");
              c = 6;
              break;
            }
            0 === k ? c = 0 : (this._block0Read = k, c = 1);
            break;
          case 1:
            c = 2;
            this._literalTable = u;
            this._distanceTable = t;
            break;
          case 2:
            if (26 > (f - b << 3) + d) {
              return !0;
            }
            for (;14 > d;) {
              e |= c[b++] << d, d += 8;
            }
            k = (e >> 10 & 15) + 4;
            if ((f - b << 3) + d < 14 + 3 * k) {
              return !0;
            }
            for (var f = {numLiteralCodes:(e & 31) + 257, numDistanceCodes:(e >> 5 & 31) + 1, codeLengthTable:void 0, bitLengths:void 0, codesRead:0, dupBits:0}, e = e >> 14, d = d - 14, h = new Uint8Array(19), v = 0;v < k;++v) {
              3 > d && (e |= c[b++] << d, d += 8), h[l[v]] = e & 7, e >>= 3, d -= 3;
            }
            for (;19 > v;v++) {
              h[l[v]] = 0;
            }
            f.bitLengths = new Uint8Array(f.numLiteralCodes + f.numDistanceCodes);
            f.codeLengthTable = r(h);
            this._block2State = f;
            c = 3;
            break;
          default:
            return this._error("inflate: unsupported block type"), !1;
        }
        this._isFinalBlock = !!(a & 1);
        this._state = c;
        this._bufferPosition = b;
        this._bitBuffer = e;
        this._bitLength = d;
        return !1;
      };
      c.prototype._error = function(c) {
        if (this.onError) {
          this.onError(c);
        }
      };
      c.prototype._decodeBlock0 = function() {
        var c = this._bufferPosition, f = this._windowPosition, e = this._block0Read, d = 65794 - f, b = this._bufferSize - c, a = b < e, k = Math.min(d, b, e);
        this._window.set(this._buffer.subarray(c, c + k), f);
        this._windowPosition = f + k;
        this._bufferPosition = c + k;
        this._block0Read = e - k;
        return e === k ? (this._state = 0, !1) : a && d < b;
      };
      c.prototype._readBits = function(c) {
        var f = this._bitBuffer, e = this._bitLength;
        if (c > e) {
          var d = this._bufferPosition, b = this._bufferSize;
          do {
            if (d >= b) {
              return this._bufferPosition = d, this._bitBuffer = f, this._bitLength = e, -1;
            }
            f |= this._buffer[d++] << e;
            e += 8;
          } while (c > e);
          this._bufferPosition = d;
        }
        this._bitBuffer = f >> c;
        this._bitLength = e - c;
        return f & (1 << c) - 1;
      };
      c.prototype._readCode = function(c) {
        var f = this._bitBuffer, e = this._bitLength, d = c.maxBits;
        if (d > e) {
          var b = this._bufferPosition, a = this._bufferSize;
          do {
            if (b >= a) {
              return this._bufferPosition = b, this._bitBuffer = f, this._bitLength = e, -1;
            }
            f |= this._buffer[b++] << e;
            e += 8;
          } while (d > e);
          this._bufferPosition = b;
        }
        c = c.codes[f & (1 << d) - 1];
        d = c >> 16;
        if (c & 32768) {
          return this._error("inflate: invalid encoding"), this._state = 6, -1;
        }
        this._bitBuffer = f >> d;
        this._bitLength = e - d;
        return c & 65535;
      };
      c.prototype._decodeBlock2Pre = function() {
        var c = this._block2State, f = c.numLiteralCodes + c.numDistanceCodes, e = c.bitLengths, d = c.codesRead, b = 0 < d ? e[d - 1] : 0, a = c.codeLengthTable, k;
        if (0 < c.dupBits) {
          k = this._readBits(c.dupBits);
          if (0 > k) {
            return !0;
          }
          for (;k--;) {
            e[d++] = b;
          }
          c.dupBits = 0;
        }
        for (;d < f;) {
          var h = this._readCode(a);
          if (0 > h) {
            return c.codesRead = d, !0;
          }
          if (16 > h) {
            e[d++] = b = h;
          } else {
            var v;
            switch(h) {
              case 16:
                v = 2;
                k = 3;
                h = b;
                break;
              case 17:
                k = v = 3;
                h = 0;
                break;
              case 18:
                v = 7, k = 11, h = 0;
            }
            for (;k--;) {
              e[d++] = h;
            }
            k = this._readBits(v);
            if (0 > k) {
              return c.codesRead = d, c.dupBits = v, !0;
            }
            for (;k--;) {
              e[d++] = h;
            }
            b = h;
          }
        }
        this._literalTable = r(e.subarray(0, c.numLiteralCodes));
        this._distanceTable = r(e.subarray(c.numLiteralCodes));
        this._state = 4;
        this._block2State = null;
        return !1;
      };
      c.prototype._decodeBlock = function() {
        var c = this._literalTable, f = this._distanceTable, e = this._window, d = this._windowPosition, a = this._copyState, v, p, l, t;
        if (0 !== a.state) {
          switch(a.state) {
            case 1:
              if (0 > (v = this._readBits(a.lenBits))) {
                return !0;
              }
              a.len += v;
              a.state = 2;
            case 2:
              if (0 > (v = this._readCode(f))) {
                return !0;
              }
              a.distBits = k[v];
              a.dist = b[v];
              a.state = 3;
            case 3:
              v = 0;
              if (0 < a.distBits && 0 > (v = this._readBits(a.distBits))) {
                return !0;
              }
              t = a.dist + v;
              p = a.len;
              for (v = d - t;p--;) {
                e[d++] = e[v++];
              }
              a.state = 0;
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
            e[d++] = v;
          } else {
            if (256 < v) {
              this._windowPosition = d;
              v -= 257;
              l = n[v];
              p = h[v];
              v = 0 === l ? 0 : this._readBits(l);
              if (0 > v) {
                return a.state = 1, a.len = p, a.lenBits = l, !0;
              }
              p += v;
              v = this._readCode(f);
              if (0 > v) {
                return a.state = 2, a.len = p, !0;
              }
              l = k[v];
              t = b[v];
              v = 0 === l ? 0 : this._readBits(l);
              if (0 > v) {
                return a.state = 3, a.len = p, a.dist = t, a.distBits = l, !0;
              }
              t += v;
              for (v = d - t;p--;) {
                e[d++] = e[v++];
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
    }(a), l, b, k, t, h, n, u, p = !1, v = function(f) {
      function c(c, e) {
        f.call(this, c);
        this._verifyHeader = c;
        this._specialInflate = e();
        this._specialInflate.setDataCallback(function(c) {
          this.onData(c);
        }.bind(this));
      }
      __extends(c, f);
      c.prototype.push = function(c) {
        if (this._verifyHeader) {
          var f;
          this._buffer ? (f = new Uint8Array(this._buffer.length + c.length), f.set(this._buffer), f.set(c, this._buffer.length), this._buffer = null) : f = new Uint8Array(c);
          var e = this._processZLibHeader(f, 0, f.length);
          if (0 === e) {
            this._buffer = f;
            return;
          }
          this._verifyHeader = !0;
          0 < e && (c = f.subarray(e));
        }
        this._specialInflate.push(c);
      };
      c.prototype.close = function() {
        this._specialInflate && (this._specialInflate.close(), this._specialInflate = null);
      };
      return c;
    }(a), d;
    (function(f) {
      f[f.WRITE = 0] = "WRITE";
      f[f.DONE = 1] = "DONE";
      f[f.ZLIB_HEADER = 2] = "ZLIB_HEADER";
    })(d || (d = {}));
    var e = function() {
      function f() {
        this.a = 1;
        this.b = 0;
      }
      f.prototype.update = function(c, f, e) {
        for (var d = this.a, b = this.b;f < e;++f) {
          d = (d + (c[f] & 255)) % 65521, b = (b + d) % 65521;
        }
        this.a = d;
        this.b = b;
      };
      f.prototype.getChecksum = function() {
        return this.b << 16 | this.a;
      };
      return f;
    }();
    g.Adler32 = e;
    d = function() {
      function f(c) {
        this._state = (this._writeZlibHeader = c) ? 2 : 0;
        this._adler32 = c ? new e : null;
      }
      f.prototype.push = function(c) {
        2 === this._state && (this.onData(new Uint8Array([120, 156])), this._state = 0);
        for (var f = c.length, e = new Uint8Array(f + 5 * Math.ceil(f / 65535)), d = 0, b = 0;65535 < f;) {
          e.set(new Uint8Array([0, 255, 255, 0, 0]), d), d += 5, e.set(c.subarray(b, b + 65535), d), b += 65535, d += 65535, f -= 65535;
        }
        e.set(new Uint8Array([0, f & 255, f >> 8 & 255, ~f & 255, ~f >> 8 & 255]), d);
        e.set(c.subarray(b, f), d + 5);
        this.onData(e);
        this._adler32 && this._adler32.update(c, 0, f);
      };
      f.prototype.close = function() {
        this._state = 1;
        this.onData(new Uint8Array([1, 0, 0, 255, 255]));
        if (this._adler32) {
          var c = this._adler32.getChecksum();
          this.onData(new Uint8Array([c & 255, c >> 8 & 255, c >> 16 & 255, c >>> 24 & 255]));
        }
      };
      return f;
    }();
    g.Deflate = d;
  })(g.ArrayUtilities || (g.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(g) {
    function r(c) {
      for (var f = new Uint16Array(c), e = 0;e < c;e++) {
        f[e] = 1024;
      }
      return f;
    }
    function a(c, f, e, d) {
      for (var b = 1, a = 0, k = 0;k < e;k++) {
        var v = d.decodeBit(c, b + f), b = (b << 1) + v, a = a | v << k
      }
      return a;
    }
    function w(c, f) {
      var e = [];
      e.length = f;
      for (var d = 0;d < f;d++) {
        e[d] = new h(c);
      }
      return e;
    }
    var l = function() {
      function c() {
        this.pos = this.available = 0;
        this.buffer = new Uint8Array(2E3);
      }
      c.prototype.append = function(c) {
        var f = this.pos + this.available, e = f + c.length;
        if (e > this.buffer.length) {
          for (var d = 2 * this.buffer.length;d < e;) {
            d *= 2;
          }
          e = new Uint8Array(d);
          e.set(this.buffer);
          this.buffer = e;
        }
        this.buffer.set(c, f);
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
    }(), b = function() {
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
      c.prototype.copyMatch = function(c, f) {
        for (var e = this.pos, d = this.size, b = this.buf, a = c <= e ? e - c : d - c + e, k = f;0 < k;) {
          for (var v = Math.min(Math.min(k, d - e), d - a), h = 0;h < v;h++) {
            var p = b[a++];
            b[e++] = p;
          }
          e === d && (this.pos = e, this.flush(), e = 0, this.isFull = !0);
          a === d && (a = 0);
          k -= v;
        }
        this.pos = e;
        this.totalPos += f;
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
        for (var c = 0, f = 0;4 > f;f++) {
          c = c << 8 | this.inStream.readByte();
        }
        c === this.range && (this.corrupted = !0);
        this.code = c;
      };
      c.prototype.isFinishedOK = function() {
        return 0 === this.code;
      };
      c.prototype.decodeDirectBits = function(c) {
        var f = 0, e = this.range, d = this.code;
        do {
          var e = e >>> 1 | 0, d = d - e | 0, b = d >> 31, d = d + (e & b) | 0;
          d === e && (this.corrupted = !0);
          0 <= e && 16777216 > e && (e <<= 8, d = d << 8 | this.inStream.readByte());
          f = (f << 1) + b + 1 | 0;
        } while (--c);
        this.range = e;
        this.code = d;
        return f;
      };
      c.prototype.decodeBit = function(c, f) {
        var e = this.range, d = this.code, b = c[f], a = (e >>> 11) * b;
        d >>> 0 < a ? (b = b + (2048 - b >> 5) | 0, e = a | 0, a = 0) : (b = b - (b >> 5) | 0, d = d - a | 0, e = e - a | 0, a = 1);
        c[f] = b & 65535;
        0 <= e && 16777216 > e && (e <<= 8, d = d << 8 | this.inStream.readByte());
        this.range = e;
        this.code = d;
        return a;
      };
      return c;
    }(), h = function() {
      function c(c) {
        this.numBits = c;
        this.probs = r(1 << c);
      }
      c.prototype.decode = function(c) {
        for (var f = 1, e = 0;e < this.numBits;e++) {
          f = (f << 1) + c.decodeBit(this.probs, f);
        }
        return f - (1 << this.numBits);
      };
      c.prototype.reverseDecode = function(c) {
        return a(this.probs, 0, this.numBits, c);
      };
      return c;
    }(), n = function() {
      function c() {
        this.choice = r(2);
        this.lowCoder = w(3, 16);
        this.midCoder = w(3, 16);
        this.highCoder = new h(8);
      }
      c.prototype.decode = function(c, f) {
        return 0 === c.decodeBit(this.choice, 0) ? this.lowCoder[f].decode(c) : 0 === c.decodeBit(this.choice, 1) ? 8 + this.midCoder[f].decode(c) : 16 + this.highCoder.decode(c);
      };
      return c;
    }(), u = function() {
      function c(c, f) {
        this.rangeDec = new t(c);
        this.outWindow = new k(f);
        this.markerIsMandatory = !1;
        this.dictSizeInProperties = this.dictSize = this.lp = this.pb = this.lc = 0;
        this.leftToUnpack = this.unpackSize = void 0;
        this.reps = new Int32Array(4);
        this.state = 0;
      }
      c.prototype.decodeProperties = function(c) {
        var f = c[0];
        if (225 <= f) {
          throw Error("Incorrect LZMA properties");
        }
        this.lc = f % 9;
        f = f / 9 | 0;
        this.pb = f / 5 | 0;
        this.lp = f % 5;
        for (f = this.dictSizeInProperties = 0;4 > f;f++) {
          this.dictSizeInProperties |= c[f + 1] << 8 * f;
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
      c.prototype.decodeLiteral = function(c, f) {
        var e = this.outWindow, d = this.rangeDec, b = 0;
        e.isEmpty() || (b = e.getByte(1));
        var a = 1, b = 768 * (((e.totalPos & (1 << this.lp) - 1) << this.lc) + (b >> 8 - this.lc));
        if (7 <= c) {
          e = e.getByte(f + 1);
          do {
            var k = e >> 7 & 1, e = e << 1, v = d.decodeBit(this.litProbs, b + ((1 + k << 8) + a)), a = a << 1 | v;
            if (k !== v) {
              break;
            }
          } while (256 > a);
        }
        for (;256 > a;) {
          a = a << 1 | d.decodeBit(this.litProbs, b + a);
        }
        return a - 256 & 255;
      };
      c.prototype.decodeDistance = function(c) {
        var f = c;
        3 < f && (f = 3);
        c = this.rangeDec;
        f = this.posSlotDecoder[f].decode(c);
        if (4 > f) {
          return f;
        }
        var e = (f >> 1) - 1, d = (2 | f & 1) << e;
        14 > f ? d = d + a(this.posDecoders, d - f, e, c) | 0 : (d = d + (c.decodeDirectBits(e - 4) << 4) | 0, d = d + this.alignDecoder.reverseDecode(c) | 0);
        return d;
      };
      c.prototype.init = function() {
        this.litProbs = r(768 << this.lc + this.lp);
        this.posSlotDecoder = w(6, 4);
        this.alignDecoder = new h(4);
        this.posDecoders = r(115);
        this.isMatch = r(192);
        this.isRep = r(12);
        this.isRepG0 = r(12);
        this.isRepG1 = r(12);
        this.isRepG2 = r(12);
        this.isRep0Long = r(192);
        this.lenDecoder = new n;
        this.repLenDecoder = new n;
      };
      c.prototype.decode = function(c) {
        for (var f = this.rangeDec, b = this.outWindow, a = this.pb, k = this.dictSize, h = this.markerIsMandatory, l = this.leftToUnpack, n = this.isMatch, t = this.isRep, u = this.isRepG0, g = this.isRepG1, r = this.isRepG2, q = this.isRep0Long, w = this.lenDecoder, D = this.repLenDecoder, z = this.reps[0], B = this.reps[1], E = this.reps[2], A = this.reps[3], C = this.state;;) {
          if (c && 48 > f.inStream.available) {
            this.outWindow.flush();
            break;
          }
          if (0 === l && !h && (this.outWindow.flush(), f.isFinishedOK())) {
            return d;
          }
          var F = b.totalPos & (1 << a) - 1;
          if (0 === f.decodeBit(n, (C << 4) + F)) {
            if (0 === l) {
              return p;
            }
            b.putByte(this.decodeLiteral(C, z));
            C = 4 > C ? 0 : 10 > C ? C - 3 : C - 6;
            l--;
          } else {
            if (0 !== f.decodeBit(t, C)) {
              if (0 === l || b.isEmpty()) {
                return p;
              }
              if (0 === f.decodeBit(u, C)) {
                if (0 === f.decodeBit(q, (C << 4) + F)) {
                  C = 7 > C ? 9 : 11;
                  b.putByte(b.getByte(z + 1));
                  l--;
                  continue;
                }
              } else {
                var G;
                0 === f.decodeBit(g, C) ? G = B : (0 === f.decodeBit(r, C) ? G = E : (G = A, A = E), E = B);
                B = z;
                z = G;
              }
              F = D.decode(f, F);
              C = 7 > C ? 8 : 11;
            } else {
              A = E;
              E = B;
              B = z;
              F = w.decode(f, F);
              C = 7 > C ? 7 : 10;
              z = this.decodeDistance(F);
              if (-1 === z) {
                return this.outWindow.flush(), f.isFinishedOK() ? v : p;
              }
              if (0 === l || z >= k || !b.checkDistance(z)) {
                return p;
              }
            }
            F += 2;
            G = !1;
            void 0 !== l && l < F && (F = l, G = !0);
            b.copyMatch(z + 1, F);
            l -= F;
            if (G) {
              return p;
            }
          }
        }
        this.state = C;
        this.reps[0] = z;
        this.reps[1] = B;
        this.reps[2] = E;
        this.reps[3] = A;
        this.leftToUnpack = l;
        return e;
      };
      c.prototype.flushOutput = function() {
        this.outWindow.flush();
      };
      return c;
    }(), p = 0, v = 1, d = 2, e = 3, f;
    (function(c) {
      c[c.WAIT_FOR_LZMA_HEADER = 0] = "WAIT_FOR_LZMA_HEADER";
      c[c.WAIT_FOR_SWF_HEADER = 1] = "WAIT_FOR_SWF_HEADER";
      c[c.PROCESS_DATA = 2] = "PROCESS_DATA";
      c[c.CLOSED = 3] = "CLOSED";
      c[c.ERROR = 4] = "ERROR";
    })(f || (f = {}));
    f = function() {
      function c(c) {
        void 0 === c && (c = !1);
        this._state = c ? 1 : 0;
        this.buffer = null;
      }
      c.prototype.push = function(c) {
        if (2 > this._state) {
          var f = this.buffer ? this.buffer.length : 0, d = (1 === this._state ? 17 : 13) + 5;
          if (f + c.length < d) {
            d = new Uint8Array(f + c.length);
            0 < f && d.set(this.buffer);
            d.set(c, f);
            this.buffer = d;
            return;
          }
          var a = new Uint8Array(d);
          0 < f && a.set(this.buffer);
          a.set(c.subarray(0, d - f), f);
          this._inStream = new l;
          this._inStream.append(a.subarray(d - 5));
          this._outStream = new b(function(c) {
            this.onData.call(null, c);
          }.bind(this));
          this._decoder = new u(this._inStream, this._outStream);
          if (1 === this._state) {
            this._decoder.decodeProperties(a.subarray(12, 17)), this._decoder.markerIsMandatory = !1, this._decoder.unpackSize = ((a[4] | a[5] << 8 | a[6] << 16 | a[7] << 24) >>> 0) - 8;
          } else {
            this._decoder.decodeProperties(a.subarray(0, 5));
            for (var f = 0, k = !1, v = 0;8 > v;v++) {
              var h = a[5 + v];
              255 !== h && (k = !0);
              f |= h << 8 * v;
            }
            this._decoder.markerIsMandatory = !k;
            this._decoder.unpackSize = k ? f : void 0;
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
          var p = this._decoder.decode(!0);
          this._inStream.compact();
          p !== e && this._checkError(p);
        } catch (n) {
          this._decoder.flushOutput(), this._decoder = null, this._error(n);
        }
      };
      c.prototype.close = function() {
        if (2 === this._state) {
          this._state = 3;
          try {
            var c = this._decoder.decode(!1);
            this._checkError(c);
          } catch (f) {
            this._decoder.flushOutput(), this._error(f);
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
        var f;
        c === p ? f = "LZMA decoding error" : c === e ? f = "Decoding is not complete" : c === v ? void 0 !== this._decoder.unpackSize && this._decoder.unpackSize !== this._outStream.processed && (f = "Finished with end marker before than specified size") : f = "Internal LZMA Error";
        f && this._error(f);
      };
      return c;
    }();
    g.LzmaDecoder = f;
  })(g.ArrayUtilities || (g.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(q) {
    function r(b) {
      return "string" === typeof b ? b : void 0 == b ? null : b + "";
    }
    var a = g.Debug.notImplemented, w = g.StringUtilities.utf8decode, l = g.StringUtilities.utf8encode, b = g.NumberUtilities.clamp, k = function() {
      return function(b, a, d) {
        this.buffer = b;
        this.length = a;
        this.littleEndian = d;
      };
    }();
    q.PlainObjectDataBuffer = k;
    for (var t = new Uint32Array(33), h = 1, n = 0;32 >= h;h++) {
      t[h] = n = n << 1 | 1;
    }
    var u;
    (function(b) {
      b[b.U8 = 1] = "U8";
      b[b.I32 = 2] = "I32";
      b[b.F32 = 4] = "F32";
    })(u || (u = {}));
    h = function() {
      function h(b) {
        void 0 === b && (b = h.INITIAL_SIZE);
        this._buffer || (this._buffer = new ArrayBuffer(b), this._position = this._length = 0, this._resetViews(), this._littleEndian = h._nativeLittleEndian, this._bitLength = this._bitBuffer = 0);
      }
      h.FromArrayBuffer = function(b, d) {
        void 0 === d && (d = -1);
        var e = Object.create(h.prototype);
        e._buffer = b;
        e._length = -1 === d ? b.byteLength : d;
        e._position = 0;
        e._resetViews();
        e._littleEndian = h._nativeLittleEndian;
        e._bitBuffer = 0;
        e._bitLength = 0;
        return e;
      };
      h.FromPlainObject = function(b) {
        var d = h.FromArrayBuffer(b.buffer, b.length);
        d._littleEndian = b.littleEndian;
        return d;
      };
      h.prototype.toPlainObject = function() {
        return new k(this._buffer, this._length, this._littleEndian);
      };
      h.prototype._resetViews = function() {
        this._u8 = new Uint8Array(this._buffer);
        this._f32 = this._i32 = null;
      };
      h.prototype._requestViews = function(b) {
        0 === (this._buffer.byteLength & 3) && (null === this._i32 && b & 2 && (this._i32 = new Int32Array(this._buffer)), null === this._f32 && b & 4 && (this._f32 = new Float32Array(this._buffer)));
      };
      h.prototype.getBytes = function() {
        return new Uint8Array(this._buffer, 0, this._length);
      };
      h.prototype._ensureCapacity = function(b) {
        var d = this._buffer;
        if (!(d.byteLength >= b)) {
          for (var e = Math.max(d.byteLength, 1);e < b;) {
            e *= 2;
          }
          4294967295 < e && this.sec.throwError("RangeError", Errors.ParamRangeError);
          e = h._arrayBufferPool.acquire(e);
          b = this._u8;
          this._buffer = e;
          this._resetViews();
          this._u8.set(b);
          e = this._u8;
          for (b = b.length;b < e.length;b++) {
            e[b] = 0;
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
      h.prototype.readBytes = function(b, d, e) {
        var f = this._position;
        d >>>= 0;
        e >>>= 0;
        0 === e && (e = this._length - f);
        f + e > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        b.length < d + e && (b._ensureCapacity(d + e), b.length = d + e);
        b._u8.set(new Uint8Array(this._buffer, f, e), d);
        this._position += e;
      };
      h.prototype.readShort = function() {
        return this.readUnsignedShort() << 16 >> 16;
      };
      h.prototype.readUnsignedShort = function() {
        var b = this._u8, d = this._position;
        d + 2 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var e = b[d + 0], b = b[d + 1];
        this._position = d + 2;
        return this._littleEndian ? b << 8 | e : e << 8 | b;
      };
      h.prototype.readInt = function() {
        var b = this._u8, d = this._position;
        d + 4 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var e = b[d + 0], f = b[d + 1], c = b[d + 2], b = b[d + 3];
        this._position = d + 4;
        return this._littleEndian ? b << 24 | c << 16 | f << 8 | e : e << 24 | f << 16 | c << 8 | b;
      };
      h.prototype.readUnsignedInt = function() {
        return this.readInt() >>> 0;
      };
      h.prototype.readFloat = function() {
        var b = this._position;
        b + 4 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        this._position = b + 4;
        this._requestViews(4);
        if (this._littleEndian && 0 === (b & 3) && this._f32) {
          return this._f32[b >> 2];
        }
        var d = this._u8, e = g.IntegerUtilities.u8;
        this._littleEndian ? (e[0] = d[b + 0], e[1] = d[b + 1], e[2] = d[b + 2], e[3] = d[b + 3]) : (e[3] = d[b + 0], e[2] = d[b + 1], e[1] = d[b + 2], e[0] = d[b + 3]);
        return g.IntegerUtilities.f32[0];
      };
      h.prototype.readDouble = function() {
        var b = this._u8, d = this._position;
        d + 8 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var e = g.IntegerUtilities.u8;
        this._littleEndian ? (e[0] = b[d + 0], e[1] = b[d + 1], e[2] = b[d + 2], e[3] = b[d + 3], e[4] = b[d + 4], e[5] = b[d + 5], e[6] = b[d + 6], e[7] = b[d + 7]) : (e[0] = b[d + 7], e[1] = b[d + 6], e[2] = b[d + 5], e[3] = b[d + 4], e[4] = b[d + 3], e[5] = b[d + 2], e[6] = b[d + 1], e[7] = b[d + 0]);
        this._position = d + 8;
        return g.IntegerUtilities.f64[0];
      };
      h.prototype.writeBoolean = function(b) {
        this.writeByte(b ? 1 : 0);
      };
      h.prototype.writeByte = function(b) {
        var d = this._position + 1;
        this._ensureCapacity(d);
        this._u8[this._position++] = b;
        d > this._length && (this._length = d);
      };
      h.prototype.writeUnsignedByte = function(b) {
        var d = this._position + 1;
        this._ensureCapacity(d);
        this._u8[this._position++] = b;
        d > this._length && (this._length = d);
      };
      h.prototype.writeRawBytes = function(b) {
        var d = this._position + b.length;
        this._ensureCapacity(d);
        this._u8.set(b, this._position);
        this._position = d;
        d > this._length && (this._length = d);
      };
      h.prototype.writeBytes = function(a, d, e) {
        g.isNullOrUndefined(a) && this.sec.throwError("TypeError", Errors.NullPointerError, "bytes");
        d >>>= 0;
        e >>>= 0;
        2 > arguments.length && (d = 0);
        3 > arguments.length && (e = 0);
        d === b(d, 0, a.length) && d + e === b(d + e, 0, a.length) || this.sec.throwError("RangeError", Errors.ParamRangeError);
        0 === e && (e = a.length - d);
        this.writeRawBytes(new Int8Array(a._buffer, d, e));
      };
      h.prototype.writeShort = function(b) {
        this.writeUnsignedShort(b);
      };
      h.prototype.writeUnsignedShort = function(b) {
        var d = this._position;
        this._ensureCapacity(d + 2);
        var e = this._u8;
        this._littleEndian ? (e[d + 0] = b, e[d + 1] = b >> 8) : (e[d + 0] = b >> 8, e[d + 1] = b);
        this._position = d += 2;
        d > this._length && (this._length = d);
      };
      h.prototype.writeInt = function(b) {
        this.writeUnsignedInt(b);
      };
      h.prototype.write2Ints = function(b, d) {
        this.write2UnsignedInts(b, d);
      };
      h.prototype.write4Ints = function(b, d, e, f) {
        this.write4UnsignedInts(b, d, e, f);
      };
      h.prototype.writeUnsignedInt = function(b) {
        var d = this._position;
        this._ensureCapacity(d + 4);
        this._requestViews(2);
        if (this._littleEndian === h._nativeLittleEndian && 0 === (d & 3) && this._i32) {
          this._i32[d >> 2] = b;
        } else {
          var e = this._u8;
          this._littleEndian ? (e[d + 0] = b, e[d + 1] = b >> 8, e[d + 2] = b >> 16, e[d + 3] = b >> 24) : (e[d + 0] = b >> 24, e[d + 1] = b >> 16, e[d + 2] = b >> 8, e[d + 3] = b);
        }
        this._position = d += 4;
        d > this._length && (this._length = d);
      };
      h.prototype.write2UnsignedInts = function(b, d) {
        var e = this._position;
        this._ensureCapacity(e + 8);
        this._requestViews(2);
        this._littleEndian === h._nativeLittleEndian && 0 === (e & 3) && this._i32 ? (this._i32[(e >> 2) + 0] = b, this._i32[(e >> 2) + 1] = d, this._position = e += 8, e > this._length && (this._length = e)) : (this.writeUnsignedInt(b), this.writeUnsignedInt(d));
      };
      h.prototype.write4UnsignedInts = function(b, d, e, f) {
        var c = this._position;
        this._ensureCapacity(c + 16);
        this._requestViews(2);
        this._littleEndian === h._nativeLittleEndian && 0 === (c & 3) && this._i32 ? (this._i32[(c >> 2) + 0] = b, this._i32[(c >> 2) + 1] = d, this._i32[(c >> 2) + 2] = e, this._i32[(c >> 2) + 3] = f, this._position = c += 16, c > this._length && (this._length = c)) : (this.writeUnsignedInt(b), this.writeUnsignedInt(d), this.writeUnsignedInt(e), this.writeUnsignedInt(f));
      };
      h.prototype.writeFloat = function(b) {
        var d = this._position;
        this._ensureCapacity(d + 4);
        this._requestViews(4);
        if (this._littleEndian === h._nativeLittleEndian && 0 === (d & 3) && this._f32) {
          this._f32[d >> 2] = b;
        } else {
          var e = this._u8;
          g.IntegerUtilities.f32[0] = b;
          b = g.IntegerUtilities.u8;
          this._littleEndian ? (e[d + 0] = b[0], e[d + 1] = b[1], e[d + 2] = b[2], e[d + 3] = b[3]) : (e[d + 0] = b[3], e[d + 1] = b[2], e[d + 2] = b[1], e[d + 3] = b[0]);
        }
        this._position = d += 4;
        d > this._length && (this._length = d);
      };
      h.prototype.write6Floats = function(b, d, e, f, c, m) {
        var a = this._position;
        this._ensureCapacity(a + 24);
        this._requestViews(4);
        this._littleEndian === h._nativeLittleEndian && 0 === (a & 3) && this._f32 ? (this._f32[(a >> 2) + 0] = b, this._f32[(a >> 2) + 1] = d, this._f32[(a >> 2) + 2] = e, this._f32[(a >> 2) + 3] = f, this._f32[(a >> 2) + 4] = c, this._f32[(a >> 2) + 5] = m, this._position = a += 24, a > this._length && (this._length = a)) : (this.writeFloat(b), this.writeFloat(d), this.writeFloat(e), this.writeFloat(f), this.writeFloat(c), this.writeFloat(m));
      };
      h.prototype.writeDouble = function(b) {
        var d = this._position;
        this._ensureCapacity(d + 8);
        var e = this._u8;
        g.IntegerUtilities.f64[0] = b;
        b = g.IntegerUtilities.u8;
        this._littleEndian ? (e[d + 0] = b[0], e[d + 1] = b[1], e[d + 2] = b[2], e[d + 3] = b[3], e[d + 4] = b[4], e[d + 5] = b[5], e[d + 6] = b[6], e[d + 7] = b[7]) : (e[d + 0] = b[7], e[d + 1] = b[6], e[d + 2] = b[5], e[d + 3] = b[4], e[d + 4] = b[3], e[d + 5] = b[2], e[d + 6] = b[1], e[d + 7] = b[0]);
        this._position = d += 8;
        d > this._length && (this._length = d);
      };
      h.prototype.readRawBytes = function() {
        return new Int8Array(this._buffer, 0, this._length);
      };
      h.prototype.writeUTF = function(b) {
        b = r(b);
        b = w(b);
        this.writeShort(b.length);
        this.writeRawBytes(b);
      };
      h.prototype.writeUTFBytes = function(b) {
        b = r(b);
        b = w(b);
        this.writeRawBytes(b);
      };
      h.prototype.readUTF = function() {
        return this.readUTFBytes(this.readShort());
      };
      h.prototype.readUTFBytes = function(b) {
        b >>>= 0;
        var d = this._position;
        d + b > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        this._position += b;
        return l(new Int8Array(this._buffer, d, b));
      };
      Object.defineProperty(h.prototype, "length", {get:function() {
        return this._length;
      }, set:function(a) {
        a >>>= 0;
        a > this._buffer.byteLength && this._ensureCapacity(a);
        this._length = a;
        this._position = b(this._position, 0, this._length);
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(h.prototype, "bytesAvailable", {get:function() {
        return this._length - this._position;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(h.prototype, "position", {get:function() {
        return this._position;
      }, set:function(b) {
        this._position = b >>> 0;
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
      }, set:function(b) {
        this._objectEncoding = b >>> 0;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(h.prototype, "endian", {get:function() {
        return this._littleEndian ? "littleEndian" : "bigEndian";
      }, set:function(b) {
        b = r(b);
        this._littleEndian = "auto" === b ? h._nativeLittleEndian : "littleEndian" === b;
      }, enumerable:!0, configurable:!0});
      h.prototype.toString = function() {
        return l(new Int8Array(this._buffer, 0, this._length));
      };
      h.prototype.toBlob = function(b) {
        return new Blob([new Int8Array(this._buffer, this._position, this._length)], {type:b});
      };
      h.prototype.writeMultiByte = function(b, d) {
        a("packageInternal flash.utils.ObjectOutput::writeMultiByte");
      };
      h.prototype.readMultiByte = function(b, d) {
        a("packageInternal flash.utils.ObjectInput::readMultiByte");
      };
      h.prototype.getValue = function(b) {
        b |= 0;
        return b >= this._length ? void 0 : this._u8[b];
      };
      h.prototype.setValue = function(b, d) {
        b |= 0;
        var e = b + 1;
        this._ensureCapacity(e);
        this._u8[b] = d;
        e > this._length && (this._length = e);
      };
      h.prototype.readFixed = function() {
        return this.readInt() / 65536;
      };
      h.prototype.readFixed8 = function() {
        return this.readShort() / 256;
      };
      h.prototype.readFloat16 = function() {
        var b = this.readUnsignedShort(), d = b >> 15 ? -1 : 1, e = (b & 31744) >> 10, b = b & 1023;
        return e ? 31 === e ? b ? NaN : Infinity * d : d * Math.pow(2, e - 15) * (1 + b / 1024) : b / 1024 * Math.pow(2, -14) * d;
      };
      h.prototype.readEncodedU32 = function() {
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
      h.prototype.readBits = function(b) {
        return this.readUnsignedBits(b) << 32 - b >> 32 - b;
      };
      h.prototype.readUnsignedBits = function(b) {
        for (var d = this._bitBuffer, e = this._bitLength;b > e;) {
          d = d << 8 | this.readUnsignedByte(), e += 8;
        }
        e -= b;
        b = d >>> e & t[b];
        this._bitBuffer = d;
        this._bitLength = e;
        return b;
      };
      h.prototype.readFixedBits = function(b) {
        return this.readBits(b) / 65536;
      };
      h.prototype.readString = function(b) {
        var d = this._position;
        if (b) {
          d + b > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError), this._position += b;
        } else {
          b = 0;
          for (var e = d;e < this._length && this._u8[e];e++) {
            b++;
          }
          this._position += b + 1;
        }
        return l(new Int8Array(this._buffer, d, b));
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
      h.prototype.compress = function(b) {
        b = 0 === arguments.length ? "zlib" : r(b);
        var d;
        switch(b) {
          case "zlib":
            d = new q.Deflate(!0);
            break;
          case "deflate":
            d = new q.Deflate(!1);
            break;
          default:
            return;
        }
        var e = new h;
        d.onData = e.writeRawBytes.bind(e);
        d.push(this._u8.subarray(0, this._length));
        d.close();
        this._ensureCapacity(e._u8.length);
        this._u8.set(e._u8);
        this.length = e.length;
        this._position = 0;
      };
      h.prototype.uncompress = function(b) {
        b = 0 === arguments.length ? "zlib" : r(b);
        var d;
        switch(b) {
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
        var e = new h, f;
        d.onData = e.writeRawBytes.bind(e);
        d.onError = function(c) {
          return f = c;
        };
        d.push(this._u8.subarray(0, this._length));
        f && this.sec.throwError("IOError", Errors.CompressedDataError);
        d.close();
        this._ensureCapacity(e._u8.length);
        this._u8.set(e._u8);
        this.length = e.length;
        this._position = 0;
      };
      h._nativeLittleEndian = 1 === (new Int8Array((new Int32Array([1])).buffer))[0];
      h.INITIAL_SIZE = 128;
      h._arrayBufferPool = new g.ArrayBufferPool;
      return h;
    }();
    q.DataBuffer = h;
  })(g.ArrayUtilities || (g.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  var q = g.ArrayUtilities.DataBuffer, r = g.ArrayUtilities.ensureTypedArrayCapacity;
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
  })(g.PathCommand || (g.PathCommand = {}));
  (function(a) {
    a[a.Linear = 16] = "Linear";
    a[a.Radial = 18] = "Radial";
  })(g.GradientType || (g.GradientType = {}));
  (function(a) {
    a[a.Pad = 0] = "Pad";
    a[a.Reflect = 1] = "Reflect";
    a[a.Repeat = 2] = "Repeat";
  })(g.GradientSpreadMethod || (g.GradientSpreadMethod = {}));
  (function(a) {
    a[a.RGB = 0] = "RGB";
    a[a.LinearRGB = 1] = "LinearRGB";
  })(g.GradientInterpolationMethod || (g.GradientInterpolationMethod = {}));
  (function(a) {
    a[a.None = 0] = "None";
    a[a.Normal = 1] = "Normal";
    a[a.Vertical = 2] = "Vertical";
    a[a.Horizontal = 3] = "Horizontal";
  })(g.LineScaleMode || (g.LineScaleMode = {}));
  var a = function() {
    return function(a, b, k, t, h, n, u, p, v, d, e) {
      this.commands = a;
      this.commandsPosition = b;
      this.coordinates = k;
      this.morphCoordinates = t;
      this.coordinatesPosition = h;
      this.styles = n;
      this.stylesLength = u;
      this.morphStyles = p;
      this.morphStylesLength = v;
      this.hasFills = d;
      this.hasLines = e;
    };
  }();
  g.PlainObjectShapeData = a;
  var w;
  (function(a) {
    a[a.Commands = 32] = "Commands";
    a[a.Coordinates = 128] = "Coordinates";
    a[a.Styles = 16] = "Styles";
  })(w || (w = {}));
  w = function() {
    function l(b) {
      void 0 === b && (b = !0);
      b && this.clear();
    }
    l.FromPlainObject = function(b) {
      var a = new l(!1);
      a.commands = b.commands;
      a.coordinates = b.coordinates;
      a.morphCoordinates = b.morphCoordinates;
      a.commandsPosition = b.commandsPosition;
      a.coordinatesPosition = b.coordinatesPosition;
      a.styles = q.FromArrayBuffer(b.styles, b.stylesLength);
      a.styles.endian = "auto";
      b.morphStyles && (a.morphStyles = q.FromArrayBuffer(b.morphStyles, b.morphStylesLength), a.morphStyles.endian = "auto");
      a.hasFills = b.hasFills;
      a.hasLines = b.hasLines;
      return a;
    };
    l.prototype.moveTo = function(b, a) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = 9;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = a;
    };
    l.prototype.lineTo = function(b, a) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = 10;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = a;
    };
    l.prototype.curveTo = function(b, a, t, h) {
      this.ensurePathCapacities(1, 4);
      this.commands[this.commandsPosition++] = 11;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = t;
      this.coordinates[this.coordinatesPosition++] = h;
    };
    l.prototype.cubicCurveTo = function(b, a, t, h, n, l) {
      this.ensurePathCapacities(1, 6);
      this.commands[this.commandsPosition++] = 12;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = t;
      this.coordinates[this.coordinatesPosition++] = h;
      this.coordinates[this.coordinatesPosition++] = n;
      this.coordinates[this.coordinatesPosition++] = l;
    };
    l.prototype.beginFill = function(b) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 1;
      this.styles.writeUnsignedInt(b);
      this.hasFills = !0;
    };
    l.prototype.writeMorphFill = function(b) {
      this.morphStyles.writeUnsignedInt(b);
    };
    l.prototype.endFill = function() {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 4;
    };
    l.prototype.endLine = function() {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 8;
    };
    l.prototype.lineStyle = function(b, a, t, h, n, l, p) {
      this.ensurePathCapacities(2, 0);
      this.commands[this.commandsPosition++] = 5;
      this.coordinates[this.coordinatesPosition++] = b;
      b = this.styles;
      b.writeUnsignedInt(a);
      b.writeBoolean(t);
      b.writeUnsignedByte(h);
      b.writeUnsignedByte(n);
      b.writeUnsignedByte(l);
      b.writeUnsignedByte(p);
      this.hasLines = !0;
    };
    l.prototype.writeMorphLineStyle = function(b, a) {
      this.morphCoordinates[this.coordinatesPosition - 1] = b;
      this.morphStyles.writeUnsignedInt(a);
    };
    l.prototype.beginBitmap = function(b, a, t, h, n) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = b;
      b = this.styles;
      b.writeUnsignedInt(a);
      this._writeStyleMatrix(t, !1);
      b.writeBoolean(h);
      b.writeBoolean(n);
      this.hasFills = !0;
    };
    l.prototype.writeMorphBitmap = function(b) {
      this._writeStyleMatrix(b, !0);
    };
    l.prototype.beginGradient = function(b, a, t, h, n, l, p, v) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = b;
      b = this.styles;
      b.writeUnsignedByte(h);
      b.writeShort(v);
      this._writeStyleMatrix(n, !1);
      h = a.length;
      b.writeByte(h);
      for (n = 0;n < h;n++) {
        b.writeUnsignedByte(t[n]), b.writeUnsignedInt(a[n]);
      }
      b.writeUnsignedByte(l);
      b.writeUnsignedByte(p);
      this.hasFills = !0;
    };
    l.prototype.writeMorphGradient = function(b, a, t) {
      this._writeStyleMatrix(t, !0);
      t = this.morphStyles;
      for (var h = 0;h < b.length;h++) {
        t.writeUnsignedByte(a[h]), t.writeUnsignedInt(b[h]);
      }
    };
    l.prototype.writeCommandAndCoordinates = function(b, a, t) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = t;
    };
    l.prototype.writeCoordinates = function(b, a) {
      this.ensurePathCapacities(0, 2);
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = a;
    };
    l.prototype.writeMorphCoordinates = function(b, a) {
      this.morphCoordinates = r(this.morphCoordinates, this.coordinatesPosition);
      this.morphCoordinates[this.coordinatesPosition - 2] = b;
      this.morphCoordinates[this.coordinatesPosition - 1] = a;
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
      var b = new l(!1);
      b.commands = new Uint8Array(this.commands);
      b.commandsPosition = this.commandsPosition;
      b.coordinates = new Int32Array(this.coordinates);
      b.coordinatesPosition = this.coordinatesPosition;
      b.styles = new q(this.styles.length);
      b.styles.writeRawBytes(this.styles.bytes.subarray(0, this.styles.length));
      this.morphStyles && (b.morphStyles = new q(this.morphStyles.length), b.morphStyles.writeRawBytes(this.morphStyles.bytes.subarray(0, this.morphStyles.length)));
      b.hasFills = this.hasFills;
      b.hasLines = this.hasLines;
      return b;
    };
    l.prototype.toPlainObject = function() {
      return new a(this.commands, this.commandsPosition, this.coordinates, this.morphCoordinates, this.coordinatesPosition, this.styles.buffer, this.styles.length, this.morphStyles && this.morphStyles.buffer, this.morphStyles ? this.morphStyles.length : 0, this.hasFills, this.hasLines);
    };
    Object.defineProperty(l.prototype, "buffers", {get:function() {
      var b = [this.commands.buffer, this.coordinates.buffer, this.styles.buffer];
      this.morphCoordinates && b.push(this.morphCoordinates.buffer);
      this.morphStyles && b.push(this.morphStyles.buffer);
      return b;
    }, enumerable:!0, configurable:!0});
    l.prototype._writeStyleMatrix = function(b, a) {
      (a ? this.morphStyles : this.styles).write6Floats(b.a, b.b, b.c, b.d, b.tx, b.ty);
    };
    l.prototype.ensurePathCapacities = function(b, a) {
      this.commands = r(this.commands, this.commandsPosition + b);
      this.coordinates = r(this.coordinates, this.coordinatesPosition + a);
    };
    return l;
  }();
  g.ShapeData = w;
})(Shumway || (Shumway = {}));
(function(g) {
  (function(g) {
    (function(g) {
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
      })(g.SwfTagCode || (g.SwfTagCode = {}));
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
        a[a.CODE_DEFINE_FONT3 = 75] = "CODE_DEFINE_FONT3";
        a[a.CODE_DEFINE_SHAPE4 = 83] = "CODE_DEFINE_SHAPE4";
        a[a.CODE_DEFINE_MORPH_SHAPE2 = 84] = "CODE_DEFINE_MORPH_SHAPE2";
        a[a.CODE_DEFINE_BINARY_DATA = 87] = "CODE_DEFINE_BINARY_DATA";
        a[a.CODE_DEFINE_BITS_JPEG4 = 90] = "CODE_DEFINE_BITS_JPEG4";
        a[a.CODE_DEFINE_FONT4 = 91] = "CODE_DEFINE_FONT4";
      })(g.DefinitionTags || (g.DefinitionTags = {}));
      (function(a) {
        a[a.CODE_DEFINE_BITS = 6] = "CODE_DEFINE_BITS";
        a[a.CODE_DEFINE_BITS_JPEG2 = 21] = "CODE_DEFINE_BITS_JPEG2";
        a[a.CODE_DEFINE_BITS_JPEG3 = 35] = "CODE_DEFINE_BITS_JPEG3";
        a[a.CODE_DEFINE_BITS_JPEG4 = 90] = "CODE_DEFINE_BITS_JPEG4";
      })(g.ImageDefinitionTags || (g.ImageDefinitionTags = {}));
      (function(a) {
        a[a.CODE_DEFINE_FONT = 10] = "CODE_DEFINE_FONT";
        a[a.CODE_DEFINE_FONT2 = 48] = "CODE_DEFINE_FONT2";
        a[a.CODE_DEFINE_FONT3 = 75] = "CODE_DEFINE_FONT3";
        a[a.CODE_DEFINE_FONT4 = 91] = "CODE_DEFINE_FONT4";
      })(g.FontDefinitionTags || (g.FontDefinitionTags = {}));
      (function(a) {
        a[a.CODE_PLACE_OBJECT = 4] = "CODE_PLACE_OBJECT";
        a[a.CODE_PLACE_OBJECT2 = 26] = "CODE_PLACE_OBJECT2";
        a[a.CODE_PLACE_OBJECT3 = 70] = "CODE_PLACE_OBJECT3";
        a[a.CODE_REMOVE_OBJECT = 5] = "CODE_REMOVE_OBJECT";
        a[a.CODE_REMOVE_OBJECT2 = 28] = "CODE_REMOVE_OBJECT2";
        a[a.CODE_START_SOUND = 15] = "CODE_START_SOUND";
        a[a.CODE_START_SOUND2 = 89] = "CODE_START_SOUND2";
      })(g.ControlTags || (g.ControlTags = {}));
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
      })(g.PlaceObjectFlags || (g.PlaceObjectFlags = {}));
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
      })(g.AVM1ClipEvents || (g.AVM1ClipEvents = {}));
      (function(a) {
        a[a.StateUp = 1] = "StateUp";
        a[a.StateOver = 2] = "StateOver";
        a[a.StateDown = 4] = "StateDown";
        a[a.StateHitTest = 8] = "StateHitTest";
        a[a.HasFilterList = 16] = "HasFilterList";
        a[a.HasBlendMode = 32] = "HasBlendMode";
      })(g.ButtonCharacterFlags || (g.ButtonCharacterFlags = {}));
      (function(a) {
        a[a.Bold = 1] = "Bold";
        a[a.Italic = 2] = "Italic";
        a[a.WideOrHasFontData = 4] = "WideOrHasFontData";
        a[a.WideOffset = 8] = "WideOffset";
        a[a.Ansi = 16] = "Ansi";
        a[a.SmallText = 32] = "SmallText";
        a[a.ShiftJis = 64] = "ShiftJis";
        a[a.HasLayout = 128] = "HasLayout";
      })(g.FontFlags || (g.FontFlags = {}));
      (function(a) {
        a[a.HasMoveX = 1] = "HasMoveX";
        a[a.HasMoveY = 2] = "HasMoveY";
        a[a.HasColor = 4] = "HasColor";
        a[a.HasFont = 8] = "HasFont";
      })(g.TextRecordFlags || (g.TextRecordFlags = {}));
      (function(a) {
        a[a.HasInPoint = 1] = "HasInPoint";
        a[a.HasOutPoint = 2] = "HasOutPoint";
        a[a.HasLoops = 4] = "HasLoops";
        a[a.HasEnvelope = 8] = "HasEnvelope";
        a[a.NoMultiple = 16] = "NoMultiple";
        a[a.Stop = 32] = "Stop";
      })(g.SoundInfoFlags || (g.SoundInfoFlags = {}));
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
      })(g.TextFlags || (g.TextFlags = {}));
      (function(a) {
        a[a.UsesScalingStrokes = 1] = "UsesScalingStrokes";
        a[a.UsesNonScalingStrokes = 2] = "UsesNonScalingStrokes";
        a[a.UsesFillWindingRule = 4] = "UsesFillWindingRule";
        a[a.IsMorph = 8] = "IsMorph";
      })(g.ShapeFlags || (g.ShapeFlags = {}));
      (function(a) {
        a[a.Move = 1] = "Move";
        a[a.HasFillStyle0 = 2] = "HasFillStyle0";
        a[a.HasFillStyle1 = 4] = "HasFillStyle1";
        a[a.HasLineStyle = 8] = "HasLineStyle";
        a[a.HasNewStyles = 16] = "HasNewStyles";
        a[a.IsStraight = 32] = "IsStraight";
        a[a.IsGeneral = 64] = "IsGeneral";
        a[a.IsVertical = 128] = "IsVertical";
      })(g.ShapeRecordFlags || (g.ShapeRecordFlags = {}));
    })(g.Parser || (g.Parser = {}));
  })(g.SWF || (g.SWF = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  var q = g.Debug.unexpected, r = function() {
    function a(a, l, b, k) {
      this.url = a;
      this.method = l;
      this.mimeType = b;
      this.data = k;
    }
    a.prototype.readAll = function(a, l) {
      var b = this.url, k = this.xhr = new XMLHttpRequest({mozSystem:!0});
      k.open(this.method || "GET", this.url, !0);
      k.responseType = "arraybuffer";
      a && (k.onprogress = function(b) {
        a(k.response, b.loaded, b.total);
      });
      k.onreadystatechange = function(a) {
        4 === k.readyState && (200 !== k.status && 0 !== k.status || null === k.response ? (q("Path: " + b + " not found."), l(null, k.statusText)) : l(k.response));
      };
      this.mimeType && k.setRequestHeader("Content-Type", this.mimeType);
      k.send(this.data || null);
    };
    a.prototype.readChunked = function(a, l, b, k, t, h) {
      if (0 >= a) {
        this.readAsync(l, b, k, t, h);
      } else {
        var n = 0, u = new Uint8Array(a), p = 0, v;
        this.readAsync(function(b, e) {
          v = e.total;
          for (var f = b.length, c = 0;n + f >= a;) {
            var m = a - n;
            u.set(b.subarray(c, c + m), n);
            c += m;
            f -= m;
            p += a;
            l(u, {loaded:p, total:v});
            n = 0;
          }
          u.set(b.subarray(c), n);
          n += f;
        }, b, k, function() {
          0 < n && (p += n, l(u.subarray(0, n), {loaded:p, total:v}), n = 0);
          t && t();
        }, h);
      }
    };
    a.prototype.readAsync = function(a, l, b, k, t) {
      var h = this.xhr = new XMLHttpRequest({mozSystem:!0}), n = this.url, u = 0, p = 0;
      h.open(this.method || "GET", n, !0);
      h.responseType = "moz-chunked-arraybuffer";
      var v = "moz-chunked-arraybuffer" !== h.responseType;
      v && (h.responseType = "arraybuffer");
      h.onprogress = function(b) {
        v || (u = b.loaded, p = b.total, b = new Uint8Array(h.response), u = Math.max(u, b.byteLength), p = Math.max(p, b.byteLength), a(b, {loaded:u, total:p}));
      };
      h.onreadystatechange = function(b) {
        2 === h.readyState && t && t(n, h.status, h.getAllResponseHeaders());
        4 === h.readyState && (200 !== h.status && 0 !== h.status || null === h.response && (0 === p || u !== p) ? l(h.statusText) : v && (b = h.response, a(new Uint8Array(b), {loaded:b.byteLength, total:b.byteLength})));
      };
      h.onload = function() {
        k && k();
      };
      this.mimeType && h.setRequestHeader("Content-Type", this.mimeType);
      h.send(this.data || null);
      b && b();
    };
    a.prototype.abort = function() {
      this.xhr && (this.xhr.abort(), this.xhr = null);
    };
    return a;
  }();
  g.BinaryFileReader = r;
})(Shumway || (Shumway = {}));
(function(g) {
  var q = function() {
    function g() {
      this.isAS3TraceOn = !0;
      this._startTime = Date.now();
    }
    Object.defineProperty(g.prototype, "currentTimestamp", {get:function() {
      return Date.now() - this._startTime;
    }, enumerable:!0, configurable:!0});
    g.prototype._writeLine = function(a) {
    };
    g.prototype.writeAS3Trace = function(a) {
    };
    return g;
  }();
  g.FlashLog = q;
  g.flashlog = null;
})(Shumway || (Shumway = {}));
(function(g) {
  (function(g) {
    (function(a) {
      a[a.Objects = 0] = "Objects";
      a[a.References = 1] = "References";
    })(g.RemotingPhase || (g.RemotingPhase = {}));
    (function(a) {
      a[a.HasMatrix = 1] = "HasMatrix";
      a[a.HasBounds = 2] = "HasBounds";
      a[a.HasChildren = 4] = "HasChildren";
      a[a.HasColorTransform = 8] = "HasColorTransform";
      a[a.HasClipRect = 16] = "HasClipRect";
      a[a.HasMiscellaneousProperties = 32] = "HasMiscellaneousProperties";
      a[a.HasMask = 64] = "HasMask";
      a[a.HasClip = 128] = "HasClip";
    })(g.MessageBits || (g.MessageBits = {}));
    (function(a) {
      a[a.None = 0] = "None";
      a[a.Asset = 134217728] = "Asset";
    })(g.IDMask || (g.IDMask = {}));
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
    })(g.MessageTag || (g.MessageTag = {}));
    (function(a) {
      a[a.Blur = 0] = "Blur";
      a[a.DropShadow = 1] = "DropShadow";
      a[a.ColorMatrix = 2] = "ColorMatrix";
    })(g.FilterType || (g.FilterType = {}));
    (function(a) {
      a[a.Identity = 0] = "Identity";
      a[a.AlphaMultiplierOnly = 1] = "AlphaMultiplierOnly";
      a[a.All = 2] = "All";
    })(g.ColorTransformEncoding || (g.ColorTransformEncoding = {}));
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
    })(g.VideoPlaybackEvent || (g.VideoPlaybackEvent = {}));
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
    })(g.VideoControlEvent || (g.VideoControlEvent = {}));
    (function(a) {
      a[a.ShowAll = 0] = "ShowAll";
      a[a.ExactFit = 1] = "ExactFit";
      a[a.NoBorder = 2] = "NoBorder";
      a[a.NoScale = 4] = "NoScale";
    })(g.StageScaleMode || (g.StageScaleMode = {}));
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
    })(g.StageAlignFlags || (g.StageAlignFlags = {}));
    g.MouseEventNames = "click dblclick mousedown mousemove mouseup mouseover mouseout".split(" ");
    g.KeyboardEventNames = ["keydown", "keypress", "keyup"];
    (function(a) {
      a[a.CtrlKey = 1] = "CtrlKey";
      a[a.AltKey = 2] = "AltKey";
      a[a.ShiftKey = 4] = "ShiftKey";
    })(g.KeyboardEventFlags || (g.KeyboardEventFlags = {}));
    (function(a) {
      a[a.DocumentHidden = 0] = "DocumentHidden";
      a[a.DocumentVisible = 1] = "DocumentVisible";
      a[a.WindowBlur = 2] = "WindowBlur";
      a[a.WindowFocus = 3] = "WindowFocus";
    })(g.FocusEventType || (g.FocusEventType = {}));
    var r = function() {
      function a(a, l) {
        this.window = a;
        this.target = l;
      }
      Object.defineProperty(a.prototype, "onAsyncMessage", {set:function(a) {
        this.window.addEventListener("message", function(l) {
          Promise.resolve(l.data).then(function(b) {
            a(b);
          });
        });
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "onSyncMessage", {set:function(a) {
        this.window.addEventListener("syncmessage", function(l) {
          l = l.detail;
          l.result = a(l.msg);
        });
      }, enumerable:!0, configurable:!0});
      a.prototype.postAsyncMessage = function(a, l) {
        this.target.postMessage(a, "*", l);
      };
      a.prototype.sendSyncMessage = function(a, l) {
        var b = this.target.document.createEvent("CustomEvent"), k = {msg:a, result:void 0};
        b.initCustomEvent("syncmessage", !1, !1, k);
        this.target.dispatchEvent(b);
        return k.result;
      };
      return a;
    }();
    g.WindowTransportPeer = r;
    r = function() {
      function a() {
      }
      Object.defineProperty(a.prototype, "onAsyncMessage", {set:function(a) {
        ShumwayCom.setAsyncMessageCallback(a);
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "onSyncMessage", {set:function(a) {
        ShumwayCom.setSyncMessageCallback(a);
      }, enumerable:!0, configurable:!0});
      a.prototype.postAsyncMessage = function(a, l) {
        ShumwayCom.postAsyncMessage(a);
      };
      a.prototype.sendSyncMessage = function(a, l) {
        return ShumwayCom.sendSyncMessage(a);
      };
      return a;
    }();
    g.ShumwayComTransportPeer = r;
  })(g.Remoting || (g.Remoting = {}));
})(Shumway || (Shumway = {}));
var throwError, Errors;
(function(g) {
  (function(g) {
    (function(g) {
      var a = function() {
        function a() {
        }
        a.toRGBA = function(b, a, t, h) {
          void 0 === h && (h = 1);
          return "rgba(" + b + "," + a + "," + t + "," + h + ")";
        };
        return a;
      }();
      g.UI = a;
      var q = function() {
        function l() {
        }
        l.prototype.tabToolbar = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(37, 44, 51, b);
        };
        l.prototype.toolbars = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(52, 60, 69, b);
        };
        l.prototype.selectionBackground = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(29, 79, 115, b);
        };
        l.prototype.selectionText = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(245, 247, 250, b);
        };
        l.prototype.splitters = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(0, 0, 0, b);
        };
        l.prototype.bodyBackground = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(17, 19, 21, b);
        };
        l.prototype.sidebarBackground = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(24, 29, 32, b);
        };
        l.prototype.attentionBackground = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(161, 134, 80, b);
        };
        l.prototype.bodyText = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(143, 161, 178, b);
        };
        l.prototype.foregroundTextGrey = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(182, 186, 191, b);
        };
        l.prototype.contentTextHighContrast = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(169, 186, 203, b);
        };
        l.prototype.contentTextGrey = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(143, 161, 178, b);
        };
        l.prototype.contentTextDarkGrey = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(95, 115, 135, b);
        };
        l.prototype.blueHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(70, 175, 227, b);
        };
        l.prototype.purpleHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(107, 122, 187, b);
        };
        l.prototype.pinkHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(223, 128, 255, b);
        };
        l.prototype.redHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(235, 83, 104, b);
        };
        l.prototype.orangeHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(217, 102, 41, b);
        };
        l.prototype.lightOrangeHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(217, 155, 40, b);
        };
        l.prototype.greenHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(112, 191, 83, b);
        };
        l.prototype.blueGreyHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(94, 136, 176, b);
        };
        return l;
      }();
      g.UIThemeDark = q;
      q = function() {
        function l() {
        }
        l.prototype.tabToolbar = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(235, 236, 237, b);
        };
        l.prototype.toolbars = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(240, 241, 242, b);
        };
        l.prototype.selectionBackground = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(76, 158, 217, b);
        };
        l.prototype.selectionText = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(245, 247, 250, b);
        };
        l.prototype.splitters = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(170, 170, 170, b);
        };
        l.prototype.bodyBackground = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(252, 252, 252, b);
        };
        l.prototype.sidebarBackground = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(247, 247, 247, b);
        };
        l.prototype.attentionBackground = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(161, 134, 80, b);
        };
        l.prototype.bodyText = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(24, 25, 26, b);
        };
        l.prototype.foregroundTextGrey = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(88, 89, 89, b);
        };
        l.prototype.contentTextHighContrast = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(41, 46, 51, b);
        };
        l.prototype.contentTextGrey = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(143, 161, 178, b);
        };
        l.prototype.contentTextDarkGrey = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(102, 115, 128, b);
        };
        l.prototype.blueHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(0, 136, 204, b);
        };
        l.prototype.purpleHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(91, 95, 255, b);
        };
        l.prototype.pinkHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(184, 46, 229, b);
        };
        l.prototype.redHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(237, 38, 85, b);
        };
        l.prototype.orangeHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(241, 60, 0, b);
        };
        l.prototype.lightOrangeHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(217, 126, 0, b);
        };
        l.prototype.greenHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(44, 187, 15, b);
        };
        l.prototype.blueGreyHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(95, 136, 176, b);
        };
        return l;
      }();
      g.UIThemeLight = q;
    })(g.Theme || (g.Theme = {}));
  })(g.Tools || (g.Tools = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(g) {
    (function(g) {
      var a = function() {
        function a(l, b) {
          this._buffers = l || [];
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
          for (var b = 0, k = this.snapshotCount;b < k;b++) {
            a(this._snapshots[b], b);
          }
        };
        a.prototype.createSnapshots = function() {
          var a = Number.MIN_VALUE, b = 0;
          for (this._snapshots = [];0 < this._buffers.length;) {
            var k = this._buffers.shift().createSnapshot();
            k && (a < k.endTime && (a = k.endTime), b < k.maxDepth && (b = k.maxDepth), this._snapshots.push(k));
          }
          this._windowEnd = this._endTime = a;
          this._maxDepth = b;
        };
        a.prototype.setWindow = function(a, b) {
          if (a > b) {
            var k = a;
            a = b;
            b = k;
          }
          k = Math.min(b - a, this.totalTime);
          a < this._startTime ? (a = this._startTime, b = this._startTime + k) : b > this._endTime && (a = this._endTime - k, b = this._endTime);
          this._windowStart = a;
          this._windowEnd = b;
        };
        a.prototype.moveWindowTo = function(a) {
          this.setWindow(a - this.windowLength / 2, a + this.windowLength / 2);
        };
        return a;
      }();
      g.Profile = a;
    })(g.Profiler || (g.Profiler = {}));
  })(g.Tools || (g.Tools = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(g, q) {
  function r() {
    this.constructor = g;
  }
  for (var a in q) {
    q.hasOwnProperty(a) && (g[a] = q[a]);
  }
  r.prototype = q.prototype;
  g.prototype = new r;
};
(function(g) {
  (function(g) {
    (function(g) {
      var a = function() {
        return function(a) {
          this.kind = a;
          this.totalTime = this.selfTime = this.count = 0;
        };
      }();
      g.TimelineFrameStatistics = a;
      var q = function() {
        function l(b, a, t, h, n, u) {
          this.parent = b;
          this.kind = a;
          this.startData = t;
          this.endData = h;
          this.startTime = n;
          this.endTime = u;
          this.maxDepth = 0;
        }
        Object.defineProperty(l.prototype, "totalTime", {get:function() {
          return this.endTime - this.startTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(l.prototype, "selfTime", {get:function() {
          var b = this.totalTime;
          if (this.children) {
            for (var a = 0, t = this.children.length;a < t;a++) {
              var h = this.children[a], b = b - (h.endTime - h.startTime)
            }
          }
          return b;
        }, enumerable:!0, configurable:!0});
        l.prototype.getChildIndex = function(b) {
          for (var a = this.children, t = 0;t < a.length;t++) {
            if (a[t].endTime > b) {
              return t;
            }
          }
          return 0;
        };
        l.prototype.getChildRange = function(b, a) {
          if (this.children && b <= this.endTime && a >= this.startTime && a >= b) {
            var t = this._getNearestChild(b), h = this._getNearestChildReverse(a);
            if (t <= h) {
              return b = this.children[t].startTime, a = this.children[h].endTime, {startIndex:t, endIndex:h, startTime:b, endTime:a, totalTime:a - b};
            }
          }
          return null;
        };
        l.prototype._getNearestChild = function(b) {
          var a = this.children;
          if (a && a.length) {
            if (b <= a[0].endTime) {
              return 0;
            }
            for (var t, h = 0, n = a.length - 1;n > h;) {
              t = (h + n) / 2 | 0;
              var u = a[t];
              if (b >= u.startTime && b <= u.endTime) {
                return t;
              }
              b > u.endTime ? h = t + 1 : n = t;
            }
            return Math.ceil((h + n) / 2);
          }
          return 0;
        };
        l.prototype._getNearestChildReverse = function(b) {
          var a = this.children;
          if (a && a.length) {
            var t = a.length - 1;
            if (b >= a[t].startTime) {
              return t;
            }
            for (var h, n = 0;t > n;) {
              h = Math.ceil((n + t) / 2);
              var u = a[h];
              if (b >= u.startTime && b <= u.endTime) {
                return h;
              }
              b > u.endTime ? n = h : t = h - 1;
            }
            return (n + t) / 2 | 0;
          }
          return 0;
        };
        l.prototype.query = function(b) {
          if (b < this.startTime || b > this.endTime) {
            return null;
          }
          var a = this.children;
          if (a && 0 < a.length) {
            for (var t, h = 0, n = a.length - 1;n > h;) {
              var u = (h + n) / 2 | 0;
              t = a[u];
              if (b >= t.startTime && b <= t.endTime) {
                return t.query(b);
              }
              b > t.endTime ? h = u + 1 : n = u;
            }
            t = a[n];
            if (b >= t.startTime && b <= t.endTime) {
              return t.query(b);
            }
          }
          return this;
        };
        l.prototype.queryNext = function(b) {
          for (var a = this;b > a.endTime;) {
            if (a.parent) {
              a = a.parent;
            } else {
              break;
            }
          }
          return a.query(b);
        };
        l.prototype.getDepth = function() {
          for (var b = 0, a = this;a;) {
            b++, a = a.parent;
          }
          return b;
        };
        l.prototype.calculateStatistics = function() {
          function b(t) {
            if (t.kind) {
              var h = k[t.kind.id] || (k[t.kind.id] = new a(t.kind));
              h.count++;
              h.selfTime += t.selfTime;
              h.totalTime += t.totalTime;
            }
            t.children && t.children.forEach(b);
          }
          var k = this.statistics = [];
          b(this);
        };
        l.prototype.trace = function(b) {
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
        return l;
      }();
      g.TimelineFrame = q;
      q = function(a) {
        function b(b) {
          a.call(this, null, null, null, null, NaN, NaN);
          this.name = b;
        }
        __extends(b, a);
        return b;
      }(q);
      g.TimelineBufferSnapshot = q;
    })(g.Profiler || (g.Profiler = {}));
  })(g.Tools || (g.Tools = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(q) {
    (function(r) {
      var a = function() {
        function a(l, b) {
          void 0 === l && (l = "");
          this.name = l || "";
          this._startTime = g.isNullOrUndefined(b) ? jsGlobal.START_TIME : b;
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
          this._marks = new g.CircularBuffer(Int32Array, 20);
          this._times = new g.CircularBuffer(Float64Array, 20);
        };
        a.prototype._getKindId = function(l) {
          var b = a.MAX_KINDID;
          if (void 0 === this._kindNameMap[l]) {
            if (b = this._kinds.length, b < a.MAX_KINDID) {
              var k = {id:b, name:l, visible:!0};
              this._kinds.push(k);
              this._kindNameMap[l] = k;
            } else {
              b = a.MAX_KINDID;
            }
          } else {
            b = this._kindNameMap[l].id;
          }
          return b;
        };
        a.prototype._getMark = function(l, b, k) {
          var t = a.MAX_DATAID;
          g.isNullOrUndefined(k) || b === a.MAX_KINDID || (t = this._data.length, t < a.MAX_DATAID ? this._data.push(k) : t = a.MAX_DATAID);
          return l | t << 16 | b;
        };
        a.prototype.enter = function(l, b, k) {
          k = (g.isNullOrUndefined(k) ? performance.now() : k) - this._startTime;
          this._marks || this._initialize();
          this._depth++;
          l = this._getKindId(l);
          this._marks.write(this._getMark(a.ENTER, l, b));
          this._times.write(k);
          this._stack.push(l);
        };
        a.prototype.leave = function(l, b, k) {
          k = (g.isNullOrUndefined(k) ? performance.now() : k) - this._startTime;
          var t = this._stack.pop();
          l && (t = this._getKindId(l));
          this._marks.write(this._getMark(a.LEAVE, t, b));
          this._times.write(k);
          this._depth--;
        };
        a.prototype.count = function(a, b, k) {
        };
        a.prototype.createSnapshot = function(l) {
          void 0 === l && (l = Number.MAX_VALUE);
          if (!this._marks) {
            return null;
          }
          var b = this._times, k = this._kinds, t = this._data, h = new r.TimelineBufferSnapshot(this.name), n = [h], u = 0;
          this._marks || this._initialize();
          this._marks.forEachInReverse(function(h, v) {
            var d = t[h >>> 16 & a.MAX_DATAID], e = k[h & a.MAX_KINDID];
            if (g.isNullOrUndefined(e) || e.visible) {
              var f = h & 2147483648, c = b.get(v), m = n.length;
              if (f === a.LEAVE) {
                if (1 === m && (u++, u > l)) {
                  return !0;
                }
                n.push(new r.TimelineFrame(n[m - 1], e, null, d, NaN, c));
              } else {
                if (f === a.ENTER) {
                  if (e = n.pop(), f = n[n.length - 1]) {
                    for (f.children ? f.children.unshift(e) : f.children = [e], f = n.length, e.depth = f, e.startData = d, e.startTime = c;e;) {
                      if (e.maxDepth < f) {
                        e.maxDepth = f, e = e.parent;
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
        a.prototype.reset = function(a) {
          this._startTime = g.isNullOrUndefined(a) ? performance.now() : a;
          this._marks ? (this._depth = 0, this._data = [], this._marks.reset(), this._times.reset()) : this._initialize();
        };
        a.FromFirefoxProfile = function(l, b) {
          for (var k = l.profile.threads[0].samples, t = new a(b, k[0].time), h = [], n, u = 0;u < k.length;u++) {
            n = k[u];
            var p = n.time, g = n.frames, d = 0;
            for (n = Math.min(g.length, h.length);d < n && g[d].location === h[d].location;) {
              d++;
            }
            for (var e = h.length - d, f = 0;f < e;f++) {
              n = h.pop(), t.leave(n.location, null, p);
            }
            for (;d < g.length;) {
              n = g[d++], t.enter(n.location, null, p);
            }
            h = g;
          }
          for (;n = h.pop();) {
            t.leave(n.location, null, p);
          }
          return t;
        };
        a.FromChromeProfile = function(g, b) {
          var k = g.timestamps, t = g.samples, h = new a(b, k[0] / 1E3), n = [], u = {}, p;
          a._resolveIds(g.head, u);
          for (var v = 0;v < k.length;v++) {
            var d = k[v] / 1E3, e = [];
            for (p = u[t[v]];p;) {
              e.unshift(p), p = p.parent;
            }
            var f = 0;
            for (p = Math.min(e.length, n.length);f < p && e[f] === n[f];) {
              f++;
            }
            for (var c = n.length - f, m = 0;m < c;m++) {
              p = n.pop(), h.leave(p.functionName, null, d);
            }
            for (;f < e.length;) {
              p = e[f++], h.enter(p.functionName, null, d);
            }
            n = e;
          }
          for (;p = n.pop();) {
            h.leave(p.functionName, null, d);
          }
          return h;
        };
        a._resolveIds = function(g, b) {
          b[g.id] = g;
          if (g.children) {
            for (var k = 0;k < g.children.length;k++) {
              g.children[k].parent = g, a._resolveIds(g.children[k], b);
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
    })(q.Profiler || (q.Profiler = {}));
  })(g.Tools || (g.Tools = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(q) {
    (function(r) {
      (function(a) {
        a[a.DARK = 0] = "DARK";
        a[a.LIGHT = 1] = "LIGHT";
      })(r.UIThemeType || (r.UIThemeType = {}));
      var a = function() {
        function a(g, b) {
          void 0 === b && (b = 0);
          this._container = g;
          this._headers = [];
          this._charts = [];
          this._profiles = [];
          this._activeProfile = null;
          this.themeType = b;
          this._tooltip = this._createTooltip();
        }
        a.prototype.createProfile = function(a, b) {
          var k = new r.Profile(a, b);
          k.createSnapshots();
          this._profiles.push(k);
          this.activateProfile(k);
          return k;
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
              this._theme = new q.Theme.UIThemeDark;
              break;
            case 1:
              this._theme = new q.Theme.UIThemeLight;
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
            this._activeProfile.forEachSnapshot(function(b, k) {
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
            var a = this, b = this._activeProfile.startTime, k = this._activeProfile.endTime;
            this._overviewHeader.initialize(b, k);
            this._overview.initialize(b, k);
            this._activeProfile.forEachSnapshot(function(t, h) {
              a._headers[h].initialize(b, k);
              a._charts[h].initialize(b, k);
            });
          }
        };
        a.prototype._onResize = function() {
          if (this._activeProfile) {
            var a = this, b = this._container.offsetWidth;
            this._overviewHeader.setSize(b);
            this._overview.setSize(b);
            this._activeProfile.forEachSnapshot(function(k, t) {
              a._headers[t].setSize(b);
              a._charts[t].setSize(b);
            });
          }
        };
        a.prototype._updateViews = function() {
          if (this._activeProfile) {
            var a = this, b = this._activeProfile.windowStart, k = this._activeProfile.windowEnd;
            this._overviewHeader.setWindow(b, k);
            this._overview.setWindow(b, k);
            this._activeProfile.forEachSnapshot(function(t, h) {
              a._headers[h].setWindow(b, k);
              a._charts[h].setWindow(b, k);
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
        a.prototype.showTooltip = function(a, b, k, t) {
          this.removeTooltipContent();
          this._tooltip.appendChild(this.createTooltipContent(a, b));
          this._tooltip.style.display = "block";
          var h = this._tooltip.firstChild;
          b = h.clientWidth;
          h = h.clientHeight;
          k += k + b >= a.canvas.clientWidth - 50 ? -(b + 20) : 25;
          t += a.canvas.offsetTop - h / 2;
          this._tooltip.style.left = k + "px";
          this._tooltip.style.top = t + "px";
        };
        a.prototype.hideTooltip = function() {
          this._tooltip.style.display = "none";
        };
        a.prototype.createTooltipContent = function(a, b) {
          var k = Math.round(1E5 * b.totalTime) / 1E5, t = Math.round(1E5 * b.selfTime) / 1E5, h = Math.round(1E4 * b.selfTime / b.totalTime) / 100, n = document.createElement("div"), u = document.createElement("h1");
          u.textContent = b.kind.name;
          n.appendChild(u);
          u = document.createElement("p");
          u.textContent = "Total: " + k + " ms";
          n.appendChild(u);
          k = document.createElement("p");
          k.textContent = "Self: " + t + " ms (" + h + "%)";
          n.appendChild(k);
          if (t = a.getStatistics(b.kind)) {
            h = document.createElement("p"), h.textContent = "Count: " + t.count, n.appendChild(h), h = document.createElement("p"), h.textContent = "All Total: " + Math.round(1E5 * t.totalTime) / 1E5 + " ms", n.appendChild(h), h = document.createElement("p"), h.textContent = "All Self: " + Math.round(1E5 * t.selfTime) / 1E5 + " ms", n.appendChild(h);
          }
          this.appendDataElements(n, b.startData);
          this.appendDataElements(n, b.endData);
          return n;
        };
        a.prototype.appendDataElements = function(a, b) {
          if (!g.isNullOrUndefined(b)) {
            a.appendChild(document.createElement("hr"));
            var k;
            if (g.isObject(b)) {
              for (var t in b) {
                k = document.createElement("p"), k.textContent = t + ": " + b[t], a.appendChild(k);
              }
            } else {
              k = document.createElement("p"), k.textContent = b.toString(), a.appendChild(k);
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
    })(q.Profiler || (q.Profiler = {}));
  })(g.Tools || (g.Tools = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(q) {
    (function(r) {
      var a = g.NumberUtilities.clamp, q = function() {
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
      r.MouseCursor = q;
      var l = function() {
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
            var t = this._eventTarget.parentElement;
            b._cursor !== a && (b._cursor = a, ["", "-moz-", "-webkit-"].forEach(function(b) {
              t.style.cursor = b + a;
            }));
            b._cursorOwner = b._cursor === q.DEFAULT ? null : this._target;
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
          var h = {x:a.x - b.start.x, y:a.y - b.start.y};
          b.current = a;
          b.delta = h;
          b.hasMoved = !0;
          this._target.onDrag(b.start.x, b.start.y, a.x, a.y, h.x, h.y);
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
            var t = this._getTargetMousePos(b, b.target);
            b = a("undefined" !== typeof b.deltaY ? b.deltaY / 16 : -b.wheelDelta / 40, -1, 1);
            this._target.onMouseWheel(t.x, t.y, Math.pow(1.2, b) - 1);
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
          var h = b.getBoundingClientRect();
          return {x:a.clientX - h.left, y:a.clientY - h.top};
        };
        b.HOVER_TIMEOUT = 500;
        b._cursor = q.DEFAULT;
        return b;
      }();
      r.MouseController = l;
    })(q.Profiler || (q.Profiler = {}));
  })(g.Tools || (g.Tools = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(g) {
    (function(g) {
      (function(a) {
        a[a.NONE = 0] = "NONE";
        a[a.WINDOW = 1] = "WINDOW";
        a[a.HANDLE_LEFT = 2] = "HANDLE_LEFT";
        a[a.HANDLE_RIGHT = 3] = "HANDLE_RIGHT";
        a[a.HANDLE_BOTH = 4] = "HANDLE_BOTH";
      })(g.FlameChartDragTarget || (g.FlameChartDragTarget = {}));
      var a = function() {
        function a(l) {
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
        a.prototype.setWindow = function(a, b, k) {
          void 0 === k && (k = !0);
          this._windowStart = a;
          this._windowEnd = b;
          !k || this.draw();
        };
        a.prototype.setRange = function(a, b, k) {
          void 0 === k && (k = !0);
          this._rangeStart = a;
          this._rangeEnd = b;
          !k || this.draw();
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
        a.prototype._almostEq = function(a, b, k) {
          void 0 === k && (k = 10);
          return Math.abs(a - b) < 1 / Math.pow(10, k);
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
        a.prototype.onMouseWheel = function(g, b, k) {
          g = this._toTime(g);
          b = this._windowStart;
          var t = this._windowEnd, h = t - b;
          k = Math.max((a.MIN_WINDOW_LEN - h) / h, k);
          this._controller.setWindow(b + (b - g) * k, t + (t - g) * k);
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
        a.prototype.onDrag = function(a, b, k, g, h, n) {
        };
        a.prototype.onDragEnd = function(a, b, k, g, h, n) {
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
      g.FlameChartBase = a;
    })(g.Profiler || (g.Profiler = {}));
  })(g.Tools || (g.Tools = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(q) {
    (function(r) {
      var a = g.StringUtilities.trimMiddle, q = function(l) {
        function b(a, b) {
          l.call(this, a);
          this._textWidth = {};
          this._minFrameWidthInPixels = 1;
          this._snapshot = b;
          this._kindStyle = Object.create(null);
        }
        __extends(b, l);
        b.prototype.setSize = function(a, b) {
          l.prototype.setSize.call(this, a, b || this._initialized ? 12.5 * this._maxDepth : 100);
        };
        b.prototype.initialize = function(a, b) {
          this._initialized = !0;
          this._maxDepth = this._snapshot.maxDepth;
          this.setRange(a, b, !1);
          this.setWindow(a, b, !1);
          this.setSize(this._width, 12.5 * this._maxDepth);
        };
        b.prototype.destroy = function() {
          l.prototype.destroy.call(this);
          this._snapshot = null;
        };
        b.prototype.draw = function() {
          var a = this._context, b = window.devicePixelRatio;
          g.ColorStyle.reset();
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.bodyBackground(1);
          a.fillRect(0, 0, this._width, this._height);
          this._initialized && this._drawChildren(this._snapshot);
          a.restore();
        };
        b.prototype._drawChildren = function(a, b) {
          void 0 === b && (b = 0);
          var h = a.getChildRange(this._windowStart, this._windowEnd);
          if (h) {
            for (var n = h.startIndex;n <= h.endIndex;n++) {
              var g = a.children[n];
              this._drawFrame(g, b) && this._drawChildren(g, b + 1);
            }
          }
        };
        b.prototype._drawFrame = function(a, b) {
          var h = this._context, n = this._toPixels(a.startTime), u = this._toPixels(a.endTime), p = u - n;
          if (p <= this._minFrameWidthInPixels) {
            return h.fillStyle = this._controller.theme.tabToolbar(1), h.fillRect(n, 12.5 * b, this._minFrameWidthInPixels, 12 + 12.5 * (a.maxDepth - a.depth)), !1;
          }
          0 > n && (u = p + n, n = 0);
          var u = u - n, v = this._kindStyle[a.kind.id];
          v || (v = g.ColorStyle.randomStyle(), v = this._kindStyle[a.kind.id] = {bgColor:v, textColor:g.ColorStyle.contrastStyle(v)});
          h.save();
          h.fillStyle = v.bgColor;
          h.fillRect(n, 12.5 * b, u, 12);
          12 < p && (p = a.kind.name) && p.length && (p = this._prepareText(h, p, u - 4), p.length && (h.fillStyle = v.textColor, h.textBaseline = "bottom", h.fillText(p, n + 2, 12.5 * (b + 1) - 1)));
          h.restore();
          return !0;
        };
        b.prototype._prepareText = function(b, g, h) {
          var n = this._measureWidth(b, g);
          if (h > n) {
            return g;
          }
          for (var n = 3, u = g.length;n < u;) {
            var p = n + u >> 1;
            this._measureWidth(b, a(g, p)) < h ? n = p + 1 : u = p;
          }
          g = a(g, u - 1);
          n = this._measureWidth(b, g);
          return n <= h ? g : "";
        };
        b.prototype._measureWidth = function(a, b) {
          var h = this._textWidth[b];
          h || (h = a.measureText(b).width, this._textWidth[b] = h);
          return h;
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
          var h = 1 + b / 12.5 | 0, n = this._snapshot.query(this._toTime(a));
          if (n && n.depth >= h) {
            for (;n && n.depth > h;) {
              n = n.parent;
            }
            return n;
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
        b.prototype.onDrag = function(a, b, h, n, g, p) {
          if (a = this._dragInfo) {
            g = this._toTimeRelative(-g), this._controller.setWindow(a.windowStartInitial + g, a.windowEndInitial + g);
          }
        };
        b.prototype.onDragEnd = function(a, b, h, n, g, p) {
          this._dragInfo = null;
          this._mouseController.updateCursor(r.MouseCursor.DEFAULT);
        };
        b.prototype.onClick = function(a, b) {
          this._dragInfo = null;
          this._mouseController.updateCursor(r.MouseCursor.DEFAULT);
        };
        b.prototype.onHoverStart = function(a, b) {
          var h = this._getFrameAtPosition(a, b);
          h && (this._hoveredFrame = h, this._controller.showTooltip(this, h, a, b));
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
      r.FlameChart = q;
    })(q.Profiler || (q.Profiler = {}));
  })(g.Tools || (g.Tools = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(q) {
    (function(q) {
      var a = g.NumberUtilities.clamp;
      (function(a) {
        a[a.OVERLAY = 0] = "OVERLAY";
        a[a.STACK = 1] = "STACK";
        a[a.UNION = 2] = "UNION";
      })(q.FlameChartOverviewMode || (q.FlameChartOverviewMode = {}));
      var w = function(g) {
        function b(a, b) {
          void 0 === b && (b = 1);
          this._mode = b;
          this._overviewCanvasDirty = !0;
          this._overviewCanvas = document.createElement("canvas");
          this._overviewContext = this._overviewCanvas.getContext("2d");
          g.call(this, a);
        }
        __extends(b, g);
        b.prototype.setSize = function(a, b) {
          g.prototype.setSize.call(this, a, b || 64);
        };
        Object.defineProperty(b.prototype, "mode", {set:function(a) {
          this._mode = a;
          this.draw();
        }, enumerable:!0, configurable:!0});
        b.prototype._resetCanvas = function() {
          g.prototype._resetCanvas.call(this);
          this._overviewCanvas.width = this._canvas.width;
          this._overviewCanvas.height = this._canvas.height;
          this._overviewCanvasDirty = !0;
        };
        b.prototype.draw = function() {
          var a = this._context, b = window.devicePixelRatio, h = this._width, n = this._height;
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.bodyBackground(1);
          a.fillRect(0, 0, h, n);
          a.restore();
          this._initialized && (this._overviewCanvasDirty && (this._drawChart(), this._overviewCanvasDirty = !1), a.drawImage(this._overviewCanvas, 0, 0), this._drawSelection());
        };
        b.prototype._drawSelection = function() {
          var a = this._context, b = this._height, h = window.devicePixelRatio, n = this._selection ? this._selection.left : this._toPixels(this._windowStart), g = this._selection ? this._selection.right : this._toPixels(this._windowEnd), p = this._controller.theme;
          a.save();
          a.scale(h, h);
          this._selection ? (a.fillStyle = p.selectionText(.15), a.fillRect(n, 1, g - n, b - 1), a.fillStyle = "rgba(133, 0, 0, 1)", a.fillRect(n + .5, 0, g - n - 1, 4), a.fillRect(n + .5, b - 4, g - n - 1, 4)) : (a.fillStyle = p.bodyBackground(.4), a.fillRect(0, 1, n, b - 1), a.fillRect(g, 1, this._width, b - 1));
          a.beginPath();
          a.moveTo(n, 0);
          a.lineTo(n, b);
          a.moveTo(g, 0);
          a.lineTo(g, b);
          a.lineWidth = .5;
          a.strokeStyle = p.foregroundTextGrey(1);
          a.stroke();
          b = Math.abs((this._selection ? this._toTime(this._selection.right) : this._windowEnd) - (this._selection ? this._toTime(this._selection.left) : this._windowStart));
          a.fillStyle = p.selectionText(.5);
          a.font = "8px sans-serif";
          a.textBaseline = "alphabetic";
          a.textAlign = "end";
          a.fillText(b.toFixed(2), Math.min(n, g) - 4, 10);
          a.fillText((b / 60).toFixed(2), Math.min(n, g) - 4, 20);
          a.restore();
        };
        b.prototype._drawChart = function() {
          var a = window.devicePixelRatio, b = this._height, h = this._controller.activeProfile, n = 4 * this._width, g = h.totalTime / n, p = this._overviewContext, v = this._controller.theme.blueHighlight(1);
          p.save();
          p.translate(0, a * b);
          var d = -a * b / (h.maxDepth - 1);
          p.scale(a / 4, d);
          p.clearRect(0, 0, n, h.maxDepth - 1);
          1 == this._mode && p.scale(1, 1 / h.snapshotCount);
          for (var e = 0, f = h.snapshotCount;e < f;e++) {
            var c = h.getSnapshotAt(e);
            if (c) {
              var m = null, x = 0;
              p.beginPath();
              p.moveTo(0, 0);
              for (var y = 0;y < n;y++) {
                x = h.startTime + y * g, x = (m = m ? m.queryNext(x) : c.query(x)) ? m.getDepth() - 1 : 0, p.lineTo(y, x);
              }
              p.lineTo(y, 0);
              p.fillStyle = v;
              p.fill();
              1 == this._mode && p.translate(0, -b * a / d);
            }
          }
          p.restore();
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
            var h = this._toPixels(this._windowStart), n = this._toPixels(this._windowEnd), g = 2 + q.FlameChartBase.DRAGHANDLE_WIDTH / 2, p = a >= h - g && a <= h + g, v = a >= n - g && a <= n + g;
            if (p && v) {
              return 4;
            }
            if (p) {
              return 2;
            }
            if (v) {
              return 3;
            }
            if (!this._windowEqRange() && a > h + g && a < n - g) {
              return 1;
            }
          }
          return 0;
        };
        b.prototype.onMouseDown = function(a, b) {
          var h = this._getDragTargetUnderCursor(a, b);
          0 === h ? (this._selection = {left:a, right:a}, this.draw()) : (1 === h && this._mouseController.updateCursor(q.MouseCursor.GRABBING), this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:h});
        };
        b.prototype.onMouseMove = function(a, b) {
          var h = q.MouseCursor.DEFAULT, n = this._getDragTargetUnderCursor(a, b);
          0 === n || this._selection || (h = 1 === n ? q.MouseCursor.GRAB : q.MouseCursor.EW_RESIZE);
          this._mouseController.updateCursor(h);
        };
        b.prototype.onMouseOver = function(a, b) {
          this.onMouseMove(a, b);
        };
        b.prototype.onMouseOut = function() {
          this._mouseController.updateCursor(q.MouseCursor.DEFAULT);
        };
        b.prototype.onDrag = function(b, g, h, n, u, p) {
          if (this._selection) {
            this._selection = {left:b, right:a(h, 0, this._width - 1)}, this.draw();
          } else {
            b = this._dragInfo;
            if (4 === b.target) {
              if (0 !== u) {
                b.target = 0 > u ? 2 : 3;
              } else {
                return;
              }
            }
            g = this._windowStart;
            h = this._windowEnd;
            u = this._toTimeRelative(u);
            switch(b.target) {
              case 1:
                g = b.windowStartInitial + u;
                h = b.windowEndInitial + u;
                break;
              case 2:
                g = a(b.windowStartInitial + u, this._rangeStart, h - q.FlameChartBase.MIN_WINDOW_LEN);
                break;
              case 3:
                h = a(b.windowEndInitial + u, g + q.FlameChartBase.MIN_WINDOW_LEN, this._rangeEnd);
                break;
              default:
                return;
            }
            this._controller.setWindow(g, h);
          }
        };
        b.prototype.onDragEnd = function(a, b, h, g, u, p) {
          this._selection && (this._selection = null, this._controller.setWindow(this._toTime(a), this._toTime(h)));
          this._dragInfo = null;
          this.onMouseMove(h, g);
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
      }(q.FlameChartBase);
      q.FlameChartOverview = w;
    })(q.Profiler || (q.Profiler = {}));
  })(g.Tools || (g.Tools = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(q) {
    (function(q) {
      var a = g.NumberUtilities.clamp;
      (function(a) {
        a[a.OVERVIEW = 0] = "OVERVIEW";
        a[a.CHART = 1] = "CHART";
      })(q.FlameChartHeaderType || (q.FlameChartHeaderType = {}));
      var w = function(g) {
        function b(a, b) {
          this._type = b;
          g.call(this, a);
        }
        __extends(b, g);
        b.prototype.draw = function() {
          var a = this._context, b = window.devicePixelRatio, h = this._width, g = this._height;
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.tabToolbar(1);
          a.fillRect(0, 0, h, g);
          this._initialized && (0 == this._type ? (b = this._toPixels(this._windowStart), h = this._toPixels(this._windowEnd), a.fillStyle = this._controller.theme.bodyBackground(1), a.fillRect(b, 0, h - b, g), this._drawLabels(this._rangeStart, this._rangeEnd), this._drawDragHandle(b), this._drawDragHandle(h)) : this._drawLabels(this._windowStart, this._windowEnd));
          a.restore();
        };
        b.prototype._drawLabels = function(a, g) {
          var h = this._context, n = this._calculateTickInterval(a, g), u = Math.ceil(a / n) * n, p = 500 <= n, v = p ? 1E3 : 1, d = this._decimalPlaces(n / v), p = p ? "s" : "ms", e = this._toPixels(u), f = this._height / 2, c = this._controller.theme;
          h.lineWidth = 1;
          h.strokeStyle = c.contentTextDarkGrey(.5);
          h.fillStyle = c.contentTextDarkGrey(1);
          h.textAlign = "right";
          h.textBaseline = "middle";
          h.font = "11px sans-serif";
          for (c = this._width + b.TICK_MAX_WIDTH;e < c;) {
            h.fillText((u / v).toFixed(d) + " " + p, e - 7, f + 1), h.beginPath(), h.moveTo(e, 0), h.lineTo(e, this._height + 1), h.closePath(), h.stroke(), u += n, e = this._toPixels(u);
          }
        };
        b.prototype._calculateTickInterval = function(a, g) {
          var h = (g - a) / (this._width / b.TICK_MAX_WIDTH), n = Math.pow(10, Math.floor(Math.log(h) / Math.LN10)), h = h / n;
          return 5 < h ? 10 * n : 2 < h ? 5 * n : 1 < h ? 2 * n : n;
        };
        b.prototype._drawDragHandle = function(a) {
          var b = this._context;
          b.lineWidth = 2;
          b.strokeStyle = this._controller.theme.bodyBackground(1);
          b.fillStyle = this._controller.theme.foregroundTextGrey(.7);
          this._drawRoundedRect(b, a - q.FlameChartBase.DRAGHANDLE_WIDTH / 2, 1, q.FlameChartBase.DRAGHANDLE_WIDTH, this._height - 2, 2, !0);
        };
        b.prototype._drawRoundedRect = function(a, b, h, g, u, p, v, d) {
          void 0 === v && (v = !0);
          void 0 === d && (d = !0);
          a.beginPath();
          a.moveTo(b + p, h);
          a.lineTo(b + g - p, h);
          a.quadraticCurveTo(b + g, h, b + g, h + p);
          a.lineTo(b + g, h + u - p);
          a.quadraticCurveTo(b + g, h + u, b + g - p, h + u);
          a.lineTo(b + p, h + u);
          a.quadraticCurveTo(b, h + u, b, h + u - p);
          a.lineTo(b, h + p);
          a.quadraticCurveTo(b, h, b + p, h);
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
          return this._toTimeRelative(a) + (0 === this._type ? this._rangeStart : this._windowStart);
        };
        b.prototype._getDragTargetUnderCursor = function(a, b) {
          if (0 <= b && b < this._height) {
            if (0 === this._type) {
              var h = this._toPixels(this._windowStart), g = this._toPixels(this._windowEnd), u = 2 + q.FlameChartBase.DRAGHANDLE_WIDTH / 2, h = a >= h - u && a <= h + u, g = a >= g - u && a <= g + u;
              if (h && g) {
                return 4;
              }
              if (h) {
                return 2;
              }
              if (g) {
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
          var h = this._getDragTargetUnderCursor(a, b);
          1 === h && this._mouseController.updateCursor(q.MouseCursor.GRABBING);
          this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:h};
        };
        b.prototype.onMouseMove = function(a, b) {
          var h = q.MouseCursor.DEFAULT, g = this._getDragTargetUnderCursor(a, b);
          0 !== g && (1 !== g ? h = q.MouseCursor.EW_RESIZE : 1 !== g || this._windowEqRange() || (h = q.MouseCursor.GRAB));
          this._mouseController.updateCursor(h);
        };
        b.prototype.onMouseOver = function(a, b) {
          this.onMouseMove(a, b);
        };
        b.prototype.onMouseOut = function() {
          this._mouseController.updateCursor(q.MouseCursor.DEFAULT);
        };
        b.prototype.onDrag = function(b, g, h, n, u, p) {
          b = this._dragInfo;
          if (4 === b.target) {
            if (0 !== u) {
              b.target = 0 > u ? 2 : 3;
            } else {
              return;
            }
          }
          g = this._windowStart;
          h = this._windowEnd;
          u = this._toTimeRelative(u);
          switch(b.target) {
            case 1:
              h = 0 === this._type ? 1 : -1;
              g = b.windowStartInitial + h * u;
              h = b.windowEndInitial + h * u;
              break;
            case 2:
              g = a(b.windowStartInitial + u, this._rangeStart, h - q.FlameChartBase.MIN_WINDOW_LEN);
              break;
            case 3:
              h = a(b.windowEndInitial + u, g + q.FlameChartBase.MIN_WINDOW_LEN, this._rangeEnd);
              break;
            default:
              return;
          }
          this._controller.setWindow(g, h);
        };
        b.prototype.onDragEnd = function(a, b, h, g, u, p) {
          this._dragInfo = null;
          this.onMouseMove(h, g);
        };
        b.prototype.onClick = function(a, b) {
          1 === this._dragInfo.target && this._mouseController.updateCursor(q.MouseCursor.GRAB);
        };
        b.prototype.onHoverStart = function(a, b) {
        };
        b.prototype.onHoverEnd = function() {
        };
        b.TICK_MAX_WIDTH = 75;
        return b;
      }(q.FlameChartBase);
      q.FlameChartHeader = w;
    })(q.Profiler || (q.Profiler = {}));
  })(g.Tools || (g.Tools = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(g) {
    (function(g) {
      (function(a) {
        var g = function() {
          function a(b, g, h, n, u) {
            this.pageLoaded = b;
            this.threadsTotal = g;
            this.threadsLoaded = h;
            this.threadFilesTotal = n;
            this.threadFilesLoaded = u;
          }
          a.prototype.toString = function() {
            return "[" + ["pageLoaded", "threadsTotal", "threadsLoaded", "threadFilesTotal", "threadFilesLoaded"].map(function(a, b, h) {
              return a + ":" + this[a];
            }, this).join(", ") + "]";
          };
          return a;
        }();
        a.TraceLoggerProgressInfo = g;
        var l = function() {
          function b(a) {
            this._baseUrl = a;
            this._threads = [];
            this._progressInfo = null;
          }
          b.prototype.loadPage = function(a, b, h) {
            this._threads = [];
            this._pageLoadCallback = b;
            this._pageLoadProgressCallback = h;
            this._progressInfo = new g(!1, 0, 0, 0, 0);
            this._loadData([a], this._onLoadPage.bind(this));
          };
          Object.defineProperty(b.prototype, "buffers", {get:function() {
            for (var a = [], b = 0, h = this._threads.length;b < h;b++) {
              a.push(this._threads[b].buffer);
            }
            return a;
          }, enumerable:!0, configurable:!0});
          b.prototype._onProgress = function() {
            this._pageLoadProgressCallback && this._pageLoadProgressCallback.call(this, this._progressInfo);
          };
          b.prototype._onLoadPage = function(b) {
            if (b && 1 == b.length) {
              var g = this, h = 0;
              b = b[0];
              var n = b.length;
              this._threads = Array(n);
              this._progressInfo.pageLoaded = !0;
              this._progressInfo.threadsTotal = n;
              for (var u = 0;u < b.length;u++) {
                var p = b[u], v = [p.dict, p.tree];
                p.corrections && v.push(p.corrections);
                this._progressInfo.threadFilesTotal += v.length;
                this._loadData(v, function(b) {
                  return function(e) {
                    e && (e = new a.Thread(e), e.buffer.name = "Thread " + b, g._threads[b] = e);
                    h++;
                    g._progressInfo.threadsLoaded++;
                    g._onProgress();
                    h === n && g._pageLoadCallback.call(g, null, g._threads);
                  };
                }(u), function(a) {
                  g._progressInfo.threadFilesLoaded++;
                  g._onProgress();
                });
              }
              this._onProgress();
            } else {
              this._pageLoadCallback.call(this, "Error loading page.", null);
            }
          };
          b.prototype._loadData = function(a, b, h) {
            var g = 0, u = 0, p = a.length, v = [];
            v.length = p;
            for (var d = 0;d < p;d++) {
              var e = this._baseUrl + a[d], f = new XMLHttpRequest, c = /\.tl$/i.test(e) ? "arraybuffer" : "json";
              f.open("GET", e, !0);
              f.responseType = c;
              f.onload = function(c, f) {
                return function(a) {
                  if ("json" === f) {
                    if (a = this.response, "string" === typeof a) {
                      try {
                        a = JSON.parse(a), v[c] = a;
                      } catch (e) {
                        u++;
                      }
                    } else {
                      v[c] = a;
                    }
                  } else {
                    v[c] = this.response;
                  }
                  ++g;
                  h && h(g);
                  g === p && b(v);
                };
              }(d, c);
              f.send();
            }
          };
          b.colors = "#0044ff #8c4b00 #cc5c33 #ff80c4 #ffbfd9 #ff8800 #8c5e00 #adcc33 #b380ff #bfd9ff #ffaa00 #8c0038 #bf8f30 #f780ff #cc99c9 #aaff00 #000073 #452699 #cc8166 #cca799 #000066 #992626 #cc6666 #ccc299 #ff6600 #526600 #992663 #cc6681 #99ccc2 #ff0066 #520066 #269973 #61994d #739699 #ffcc00 #006629 #269199 #94994d #738299 #ff0000 #590000 #234d8c #8c6246 #7d7399 #ee00ff #00474d #8c2385 #8c7546 #7c8c69 #eeff00 #4d003d #662e1a #62468c #8c6969 #6600ff #4c2900 #1a6657 #8c464f #8c6981 #44ff00 #401100 #1a2466 #663355 #567365 #d90074 #403300 #101d40 #59562d #66614d #cc0000 #002b40 #234010 #4c2626 #4d5e66 #00a3cc #400011 #231040 #4c3626 #464359 #0000bf #331b00 #80e6ff #311a33 #4d3939 #a69b00 #003329 #80ffb2 #331a20 #40303d #00a658 #40ffd9 #ffc480 #ffe1bf #332b26 #8c2500 #9933cc #80fff6 #ffbfbf #303326 #005e8c #33cc47 #b2ff80 #c8bfff #263332 #00708c #cc33ad #ffe680 #f2ffbf #262a33 #388c00 #335ccc #8091ff #bfffd9".split(" ");
          return b;
        }();
        a.TraceLogger = l;
      })(g.TraceLogger || (g.TraceLogger = {}));
    })(g.Profiler || (g.Profiler = {}));
  })(g.Tools || (g.Tools = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(g) {
    (function(g) {
      (function(a) {
        var q;
        (function(a) {
          a[a.START_HI = 0] = "START_HI";
          a[a.START_LO = 4] = "START_LO";
          a[a.STOP_HI = 8] = "STOP_HI";
          a[a.STOP_LO = 12] = "STOP_LO";
          a[a.TEXTID = 16] = "TEXTID";
          a[a.NEXTID = 20] = "NEXTID";
        })(q || (q = {}));
        q = function() {
          function a(b) {
            2 <= b.length && (this._text = b[0], this._data = new DataView(b[1]), this._buffer = new g.TimelineBuffer, this._walkTree(0));
          }
          Object.defineProperty(a.prototype, "buffer", {get:function() {
            return this._buffer;
          }, enumerable:!0, configurable:!0});
          a.prototype._walkTree = function(b) {
            var g = this._data, t = this._buffer;
            do {
              var h = b * a.ITEM_SIZE, n = 4294967295 * g.getUint32(h + 0) + g.getUint32(h + 4), u = 4294967295 * g.getUint32(h + 8) + g.getUint32(h + 12), p = g.getUint32(h + 16), h = g.getUint32(h + 20), v = 1 === (p & 1), p = p >>> 1, p = this._text[p];
              t.enter(p, null, n / 1E6);
              v && this._walkTree(b + 1);
              t.leave(p, null, u / 1E6);
              b = h;
            } while (0 !== b);
          };
          a.ITEM_SIZE = 24;
          return a;
        }();
        a.Thread = q;
      })(g.TraceLogger || (g.TraceLogger = {}));
    })(g.Profiler || (g.Profiler = {}));
  })(g.Tools || (g.Tools = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(q) {
    (function(q) {
      var a = g.NumberUtilities.clamp, w = function() {
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
      q.Buffer = w;
      var l = function() {
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
          this.buffer = new w;
          a.addEventListener("keydown", function(a) {
            var k = 0;
            switch(a.keyCode) {
              case y:
                this.printHelp();
                break;
              case m:
                this.showLineNumbers = !this.showLineNumbers;
                break;
              case x:
                this.showLineTime = !this.showLineTime;
                break;
              case p:
                k = -1;
                break;
              case v:
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
              case u:
                k = this.buffer.length - this.lineIndex;
                break;
              case d:
                this.columnIndex -= a.metaKey ? 10 : 1;
                0 > this.columnIndex && (this.columnIndex = 0);
                a.preventDefault();
                break;
              case e:
                this.columnIndex += a.metaKey ? 10 : 1;
                a.preventDefault();
                break;
              case f:
                if (a.metaKey || a.ctrlKey) {
                  this.selection = {start:0, end:this.buffer.length - 1}, a.preventDefault();
                }
                break;
              case c:
              ;
              case J:
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
          var b = 33, h = 34, g = 36, u = 35, p = 38, v = 40, d = 37, e = 39, f = 65, c = 67, m = 78, x = 84, y = 72, J = 83;
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
          var a = this.canvas.parentElement, b = a.clientWidth, a = a.clientHeight && a.clientHeight - 1, h = window.devicePixelRatio || 1;
          1 !== h ? (this.ratio = h / 1, this.canvas.width = b * this.ratio, this.canvas.height = a * this.ratio, this.canvas.style.width = b + "px", this.canvas.style.height = a + "px") : (this.ratio = 1, this.canvas.width = b, this.canvas.height = a);
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
          var b = this.textMarginLeft, h = b + (this.showLineNumbers ? 5 * (String(this.buffer.length).length + 2) : 0), g = h + (this.showLineTime ? 40 : 10), u = g + 25;
          this.context.font = this.fontSize + 'px Consolas, "Liberation Mono", Courier, monospace';
          this.context.setTransform(this.ratio, 0, 0, this.ratio, 0, 0);
          for (var p = this.canvas.width, v = this.lineHeight, d = 0;d < a;d++) {
            var e = d * this.lineHeight, f = this.pageIndex + d, c = this.buffer.get(f), m = this.buffer.getFormat(f), x = this.buffer.getRepeat(f), y = 1 < f ? this.buffer.getTime(f) - this.buffer.getTime(0) : 0;
            this.context.fillStyle = f % 2 ? this.lineColor : this.alternateLineColor;
            m && m.backgroundFillStyle && (this.context.fillStyle = m.backgroundFillStyle);
            this.context.fillRect(0, e, p, v);
            this.context.fillStyle = this.selectionTextColor;
            this.context.fillStyle = this.textColor;
            this.selection && f >= this.selection.start && f <= this.selection.end && (this.context.fillStyle = this.selectionColor, this.context.fillRect(0, e, p, v), this.context.fillStyle = this.selectionTextColor);
            this.hasFocus && f === this.lineIndex && (this.context.fillStyle = this.selectionColor, this.context.fillRect(0, e, p, v), this.context.fillStyle = this.selectionTextColor);
            0 < this.columnIndex && (c = c.substring(this.columnIndex));
            e = (d + 1) * this.lineHeight - this.textMarginBottom;
            this.showLineNumbers && this.context.fillText(String(f), b, e);
            this.showLineTime && this.context.fillText(y.toFixed(1).padLeft(" ", 6), h, e);
            1 < x && this.context.fillText(String(x).padLeft(" ", 3), g, e);
            this.context.fillText(c, u, e);
          }
        };
        b.prototype.refreshEvery = function(a) {
          function b() {
            h.paint();
            h.refreshFrequency && setTimeout(b, h.refreshFrequency);
          }
          var h = this;
          this.refreshFrequency = a;
          h.refreshFrequency && setTimeout(b, h.refreshFrequency);
        };
        b.prototype.isScrolledToBottom = function() {
          return this.lineIndex === this.buffer.length - 1;
        };
        return b;
      }();
      q.Terminal = l;
    })(q.Terminal || (q.Terminal = {}));
  })(g.Tools || (g.Tools = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(g) {
    (function(g) {
      var a = function() {
        function a(g) {
          this._lastWeightedTime = this._lastTime = this._index = 0;
          this._gradient = "#FF0000 #FF1100 #FF2300 #FF3400 #FF4600 #FF5700 #FF6900 #FF7B00 #FF8C00 #FF9E00 #FFAF00 #FFC100 #FFD300 #FFE400 #FFF600 #F7FF00 #E5FF00 #D4FF00 #C2FF00 #B0FF00 #9FFF00 #8DFF00 #7CFF00 #6AFF00 #58FF00 #47FF00 #35FF00 #24FF00 #12FF00 #00FF00".split(" ");
          this._container = g;
          this._canvas = document.createElement("canvas");
          this._container.appendChild(this._canvas);
          this._context = this._canvas.getContext("2d");
          this._listenForContainerSizeChanges();
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
          var a = this._containerWidth, b = this._containerHeight, g = window.devicePixelRatio || 1;
          1 !== g ? (this._ratio = g / 1, this._canvas.width = a * this._ratio, this._canvas.height = b * this._ratio, this._canvas.style.width = a + "px", this._canvas.style.height = b + "px") : (this._ratio = 1, this._canvas.width = a, this._canvas.height = b);
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
            var g = 1 * (performance.now() - this._lastTime) + 0 * this._lastWeightedTime, t = this._context, h = 2 * this._ratio, n = 30 * this._ratio, u = performance;
            u.memory && (n += 30 * this._ratio);
            var p = (this._canvas.width - n) / (h + 1) | 0, v = this._index++;
            this._index > p && (this._index = 0);
            p = this._canvas.height;
            t.globalAlpha = 1;
            t.fillStyle = "black";
            t.fillRect(n + v * (h + 1), 0, 4 * h, this._canvas.height);
            var d = Math.min(1E3 / 60 / g, 1);
            t.fillStyle = "#00FF00";
            t.globalAlpha = a ? .5 : 1;
            d = p / 2 * d | 0;
            t.fillRect(n + v * (h + 1), p - d, h, d);
            b && (d = Math.min(1E3 / 240 / b, 1), t.fillStyle = "#FF6347", d = p / 2 * d | 0, t.fillRect(n + v * (h + 1), p / 2 - d, h, d));
            0 === v % 16 && (t.globalAlpha = 1, t.fillStyle = "black", t.fillRect(0, 0, n, this._canvas.height), t.fillStyle = "white", t.font = 8 * this._ratio + "px Arial", t.textBaseline = "middle", h = (1E3 / g).toFixed(0), b && (h += " " + b.toFixed(0)), u.memory && (h += " " + (u.memory.usedJSHeapSize / 1024 / 1024).toFixed(2)), t.fillText(h, 2 * this._ratio, this._containerHeight / 2 * this._ratio));
            this._lastTime = performance.now();
            this._lastWeightedTime = g;
          }
        };
        return a;
      }();
      g.FPS = a;
    })(g.Mini || (g.Mini = {}));
  })(g.Tools || (g.Tools = {}));
})(Shumway || (Shumway = {}));
console.timeEnd("Load Shared Dependencies");
console.time("Load GFX Dependencies");
(function(g) {
  (function(q) {
    function r(c, f, a) {
      return t && a ? "string" === typeof f ? (c = g.ColorUtilities.cssStyleToRGBA(f), g.ColorUtilities.rgbaToCSSStyle(a.transformRGBA(c))) : f instanceof CanvasGradient && f._template ? f._template.createCanvasGradient(c, a) : f : f;
    }
    var a = g.NumberUtilities.clamp;
    (function(c) {
      c[c.None = 0] = "None";
      c[c.Brief = 1] = "Brief";
      c[c.Verbose = 2] = "Verbose";
    })(q.TraceLevel || (q.TraceLevel = {}));
    var w = g.Metrics.Counter.instance;
    q.frameCounter = new g.Metrics.Counter(!0);
    q.traceLevel = 2;
    q.writer = null;
    q.frameCount = function(c) {
      w.count(c);
      q.frameCounter.count(c);
    };
    q.timelineBuffer = new g.Tools.Profiler.TimelineBuffer("GFX");
    q.enterTimeline = function(c, f) {
    };
    q.leaveTimeline = function(c, f) {
    };
    var l = null, b = null, k = null, t = !0;
    t && "undefined" !== typeof CanvasRenderingContext2D && (l = CanvasGradient.prototype.addColorStop, b = CanvasRenderingContext2D.prototype.createLinearGradient, k = CanvasRenderingContext2D.prototype.createRadialGradient, CanvasRenderingContext2D.prototype.createLinearGradient = function(c, f, a, b) {
      return (new n(c, f, a, b)).createCanvasGradient(this, null);
    }, CanvasRenderingContext2D.prototype.createRadialGradient = function(c, f, a, b, e, d) {
      return (new u(c, f, a, b, e, d)).createCanvasGradient(this, null);
    }, CanvasGradient.prototype.addColorStop = function(c, f) {
      l.call(this, c, f);
      this._template.addColorStop(c, f);
    });
    var h = function() {
      return function(c, f) {
        this.offset = c;
        this.color = f;
      };
    }(), n = function() {
      function c(f, a, b, e) {
        this.x0 = f;
        this.y0 = a;
        this.x1 = b;
        this.y1 = e;
        this.colorStops = [];
      }
      c.prototype.addColorStop = function(c, f) {
        this.colorStops.push(new h(c, f));
      };
      c.prototype.createCanvasGradient = function(c, f) {
        for (var a = b.call(c, this.x0, this.y0, this.x1, this.y1), e = this.colorStops, d = 0;d < e.length;d++) {
          var m = e[d], h = m.offset, m = m.color, m = f ? r(c, m, f) : m;
          l.call(a, h, m);
        }
        a._template = this;
        a._transform = this._transform;
        return a;
      };
      return c;
    }(), u = function() {
      function c(f, a, b, e, d, m) {
        this.x0 = f;
        this.y0 = a;
        this.r0 = b;
        this.x1 = e;
        this.y1 = d;
        this.r1 = m;
        this.colorStops = [];
      }
      c.prototype.addColorStop = function(c, f) {
        this.colorStops.push(new h(c, f));
      };
      c.prototype.createCanvasGradient = function(c, f) {
        for (var a = k.call(c, this.x0, this.y0, this.r0, this.x1, this.y1, this.r1), b = this.colorStops, e = 0;e < b.length;e++) {
          var d = b[e], m = d.offset, d = d.color, d = f ? r(c, d, f) : d;
          l.call(a, m, d);
        }
        a._template = this;
        a._transform = this._transform;
        return a;
      };
      return c;
    }(), p;
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
    })(p || (p = {}));
    var v = function() {
      function c(f) {
        this._commands = new Uint8Array(c._arrayBufferPool.acquire(8), 0, 8);
        this._commandPosition = 0;
        this._data = new Float64Array(c._arrayBufferPool.acquire(8 * Float64Array.BYTES_PER_ELEMENT), 0, 8);
        this._dataPosition = 0;
        f instanceof c && this.addPath(f);
      }
      c._apply = function(c, f) {
        var a = c._commands, b = c._data, e = 0, d = 0;
        f.beginPath();
        for (var m = c._commandPosition;e < m;) {
          switch(a[e++]) {
            case 1:
              f.closePath();
              break;
            case 2:
              f.moveTo(b[d++], b[d++]);
              break;
            case 3:
              f.lineTo(b[d++], b[d++]);
              break;
            case 4:
              f.quadraticCurveTo(b[d++], b[d++], b[d++], b[d++]);
              break;
            case 5:
              f.bezierCurveTo(b[d++], b[d++], b[d++], b[d++], b[d++], b[d++]);
              break;
            case 6:
              f.arcTo(b[d++], b[d++], b[d++], b[d++], b[d++]);
              break;
            case 7:
              f.rect(b[d++], b[d++], b[d++], b[d++]);
              break;
            case 8:
              f.arc(b[d++], b[d++], b[d++], b[d++], b[d++], !!b[d++]);
              break;
            case 9:
              f.save();
              break;
            case 10:
              f.restore();
              break;
            case 11:
              f.transform(b[d++], b[d++], b[d++], b[d++], b[d++], b[d++]);
          }
        }
      };
      c.prototype._ensureCommandCapacity = function(f) {
        this._commands = c._arrayBufferPool.ensureUint8ArrayLength(this._commands, f);
      };
      c.prototype._ensureDataCapacity = function(f) {
        this._data = c._arrayBufferPool.ensureFloat64ArrayLength(this._data, f);
      };
      c.prototype._writeCommand = function(c) {
        this._commandPosition >= this._commands.length && this._ensureCommandCapacity(this._commandPosition + 1);
        this._commands[this._commandPosition++] = c;
      };
      c.prototype._writeData = function(c, f, a, b, e, d) {
        var m = arguments.length;
        this._dataPosition + m >= this._data.length && this._ensureDataCapacity(this._dataPosition + m);
        var h = this._data, y = this._dataPosition;
        h[y] = c;
        h[y + 1] = f;
        2 < m && (h[y + 2] = a, h[y + 3] = b, 4 < m && (h[y + 4] = e, 6 === m && (h[y + 5] = d)));
        this._dataPosition += m;
      };
      c.prototype.closePath = function() {
        this._writeCommand(1);
      };
      c.prototype.moveTo = function(c, f) {
        this._writeCommand(2);
        this._writeData(c, f);
      };
      c.prototype.lineTo = function(c, f) {
        this._writeCommand(3);
        this._writeData(c, f);
      };
      c.prototype.quadraticCurveTo = function(c, f, a, b) {
        this._writeCommand(4);
        this._writeData(c, f, a, b);
      };
      c.prototype.bezierCurveTo = function(c, f, a, b, e, d) {
        this._writeCommand(5);
        this._writeData(c, f, a, b, e, d);
      };
      c.prototype.arcTo = function(c, f, a, b, e) {
        this._writeCommand(6);
        this._writeData(c, f, a, b, e);
      };
      c.prototype.rect = function(c, f, a, b) {
        this._writeCommand(7);
        this._writeData(c, f, a, b);
      };
      c.prototype.arc = function(c, f, a, b, e, d) {
        this._writeCommand(8);
        this._writeData(c, f, a, b, e, +d);
      };
      c.prototype.addPath = function(c, f) {
        f && (this._writeCommand(9), this._writeCommand(11), this._writeData(f.a, f.b, f.c, f.d, f.e, f.f));
        var a = this._commandPosition + c._commandPosition;
        a >= this._commands.length && this._ensureCommandCapacity(a);
        for (var b = this._commands, e = c._commands, d = this._commandPosition, m = 0;d < a;d++) {
          b[d] = e[m++];
        }
        this._commandPosition = a;
        a = this._dataPosition + c._dataPosition;
        a >= this._data.length && this._ensureDataCapacity(a);
        b = this._data;
        e = c._data;
        d = this._dataPosition;
        for (m = 0;d < a;d++) {
          b[d] = e[m++];
        }
        this._dataPosition = a;
        f && this._writeCommand(10);
      };
      c._arrayBufferPool = new g.ArrayBufferPool;
      return c;
    }();
    q.Path = v;
    if ("undefined" !== typeof CanvasRenderingContext2D && ("undefined" === typeof Path2D || !Path2D.prototype.addPath)) {
      var d = CanvasRenderingContext2D.prototype.fill;
      CanvasRenderingContext2D.prototype.fill = function(c, f) {
        arguments.length && (c instanceof v ? v._apply(c, this) : f = c);
        f ? d.call(this, f) : d.call(this);
      };
      var e = CanvasRenderingContext2D.prototype.stroke;
      CanvasRenderingContext2D.prototype.stroke = function(c, f) {
        arguments.length && (c instanceof v ? v._apply(c, this) : f = c);
        f ? e.call(this, f) : e.call(this);
      };
      var f = CanvasRenderingContext2D.prototype.clip;
      CanvasRenderingContext2D.prototype.clip = function(c, a) {
        arguments.length && (c instanceof v ? v._apply(c, this) : a = c);
        a ? f.call(this, a) : f.call(this);
      };
      window.Path2D = v;
    }
    if ("undefined" !== typeof CanvasPattern && Path2D.prototype.addPath) {
      p = function(c) {
        this._transform = c;
        this._template && (this._template._transform = c);
      };
      CanvasPattern.prototype.setTransform || (CanvasPattern.prototype.setTransform = p);
      CanvasGradient.prototype.setTransform || (CanvasGradient.prototype.setTransform = p);
      var c = CanvasRenderingContext2D.prototype.fill, m = CanvasRenderingContext2D.prototype.stroke;
      CanvasRenderingContext2D.prototype.fill = function(f, a) {
        var b = !!this.fillStyle._transform;
        if ((this.fillStyle instanceof CanvasPattern || this.fillStyle instanceof CanvasGradient) && b && f instanceof Path2D) {
          var b = this.fillStyle._transform, e;
          try {
            e = b.inverse();
          } catch (d) {
            e = b = q.Geometry.Matrix.createIdentitySVGMatrix();
          }
          this.transform(b.a, b.b, b.c, b.d, b.e, b.f);
          b = new Path2D;
          b.addPath(f, e);
          c.call(this, b, a);
          this.transform(e.a, e.b, e.c, e.d, e.e, e.f);
        } else {
          0 === arguments.length ? c.call(this) : 1 === arguments.length ? c.call(this, f) : 2 === arguments.length && c.call(this, f, a);
        }
      };
      CanvasRenderingContext2D.prototype.stroke = function(c) {
        var f = !!this.strokeStyle._transform;
        if ((this.strokeStyle instanceof CanvasPattern || this.strokeStyle instanceof CanvasGradient) && f && c instanceof Path2D) {
          var a = this.strokeStyle._transform, f = a.inverse();
          this.transform(a.a, a.b, a.c, a.d, a.e, a.f);
          a = new Path2D;
          a.addPath(c, f);
          var b = this.lineWidth;
          this.lineWidth *= (f.a + f.d) / 2;
          m.call(this, a);
          this.transform(f.a, f.b, f.c, f.d, f.e, f.f);
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
      var f = "currentTransform" in CanvasRenderingContext2D.prototype;
      CanvasRenderingContext2D.prototype.flashStroke = function(c, b) {
        if (f) {
          var e = this.currentTransform, d = new Path2D;
          d.addPath(c, e);
          var m = this.lineWidth;
          this.setTransform(1, 0, 0, 1, 0, 0);
          switch(b) {
            case 1:
              this.lineWidth = a(m * Math.sqrt((e.a + e.c) * (e.a + e.c) + (e.d + e.b) * (e.d + e.b)) * Math.SQRT1_2, 1, 1024);
              break;
            case 2:
              this.lineWidth = a(m * (e.d + e.b), 1, 1024);
              break;
            case 3:
              this.lineWidth = a(m * (e.a + e.c), 1, 1024);
          }
          this.stroke(d);
          this.setTransform(e.a, e.b, e.c, e.d, e.e, e.f);
          this.lineWidth = m;
        } else {
          this.stroke(c);
        }
      };
      if (!f) {
        if ("mozCurrentTransform" in CanvasRenderingContext2D.prototype) {
          Object.defineProperty(CanvasRenderingContext2D.prototype, "currentTransform", {get:c}), f = !0;
        } else {
          var b = CanvasRenderingContext2D.prototype.setTransform;
          CanvasRenderingContext2D.prototype.setTransform = function(c, f, a, e, d, m) {
            var h = this.currentTransform;
            h.a = c;
            h.b = f;
            h.c = a;
            h.d = e;
            h.e = d;
            h.f = m;
            b.call(this, c, f, a, e, d, m);
          };
          Object.defineProperty(CanvasRenderingContext2D.prototype, "currentTransform", {get:function() {
            return this._currentTransform || (this._currentTransform = q.Geometry.Matrix.createIdentitySVGMatrix());
          }});
        }
      }
    }();
    if ("undefined" !== typeof CanvasRenderingContext2D && void 0 === CanvasRenderingContext2D.prototype.globalColorMatrix) {
      var x = CanvasRenderingContext2D.prototype.fill, y = CanvasRenderingContext2D.prototype.stroke, J = CanvasRenderingContext2D.prototype.fillText, ea = CanvasRenderingContext2D.prototype.strokeText;
      Object.defineProperty(CanvasRenderingContext2D.prototype, "globalColorMatrix", {get:function() {
        return this._globalColorMatrix ? this._globalColorMatrix.clone() : null;
      }, set:function(c) {
        c ? this._globalColorMatrix ? this._globalColorMatrix.set(c) : this._globalColorMatrix = c.clone() : this._globalColorMatrix = null;
      }, enumerable:!0, configurable:!0});
      CanvasRenderingContext2D.prototype.fill = function(c, f) {
        var a = null;
        this._globalColorMatrix && (a = this.fillStyle, this.fillStyle = r(this, this.fillStyle, this._globalColorMatrix));
        0 === arguments.length ? x.call(this) : 1 === arguments.length ? x.call(this, c) : 2 === arguments.length && x.call(this, c, f);
        a && (this.fillStyle = a);
      };
      CanvasRenderingContext2D.prototype.stroke = function(c, f) {
        var a = null;
        this._globalColorMatrix && (a = this.strokeStyle, this.strokeStyle = r(this, this.strokeStyle, this._globalColorMatrix));
        0 === arguments.length ? y.call(this) : 1 === arguments.length && y.call(this, c);
        a && (this.strokeStyle = a);
      };
      CanvasRenderingContext2D.prototype.fillText = function(c, f, a, b) {
        var e = null;
        this._globalColorMatrix && (e = this.fillStyle, this.fillStyle = r(this, this.fillStyle, this._globalColorMatrix));
        3 === arguments.length ? J.call(this, c, f, a) : 4 === arguments.length ? J.call(this, c, f, a, b) : g.Debug.unexpected();
        e && (this.fillStyle = e);
      };
      CanvasRenderingContext2D.prototype.strokeText = function(c, f, a, b) {
        var e = null;
        this._globalColorMatrix && (e = this.strokeStyle, this.strokeStyle = r(this, this.strokeStyle, this._globalColorMatrix));
        3 === arguments.length ? ea.call(this, c, f, a) : 4 === arguments.length ? ea.call(this, c, f, a, b) : g.Debug.unexpected();
        e && (this.strokeStyle = e);
      };
    }
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(g) {
    g.ScreenShot = function() {
      return function(g, a, q, l) {
        this.dataURL = g;
        this.w = a;
        this.h = q;
        this.pixelRatio = l;
      };
    }();
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  var q = function() {
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
    g.prototype._unshift = function(a) {
      0 === this._count ? this._head = this._tail = a : (a.next = this._head, this._head = a.next.previous = a);
      this._count++;
    };
    g.prototype._remove = function(a) {
      a === this._head && a === this._tail ? this._head = this._tail = null : a === this._head ? (this._head = a.next, this._head.previous = null) : a == this._tail ? (this._tail = a.previous, this._tail.next = null) : (a.previous.next = a.next, a.next.previous = a.previous);
      a.previous = a.next = null;
      this._count--;
    };
    g.prototype.use = function(a) {
      this._head !== a && ((a.next || a.previous || this._tail === a) && this._remove(a), this._unshift(a));
    };
    g.prototype.pop = function() {
      if (!this._tail) {
        return null;
      }
      var a = this._tail;
      this._remove(a);
      return a;
    };
    g.prototype.visit = function(a, g) {
      void 0 === g && (g = !0);
      for (var l = g ? this._head : this._tail;l && a(l);) {
        l = g ? l.next : l.previous;
      }
    };
    return g;
  }();
  g.LRUList = q;
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
(function(g) {
  (function(q) {
    (function(r) {
      function a(a, f, c, b) {
        var d = 1 - b;
        return a * d * d + 2 * f * d * b + c * b * b;
      }
      function w(a, f, c, b, d) {
        var h = d * d, g = 1 - d, p = g * g;
        return a * g * p + 3 * f * d * p + 3 * c * g * h + b * d * h;
      }
      var l = g.NumberUtilities.clamp, b = g.NumberUtilities.pow2, k = g.NumberUtilities.epsilonEquals;
      r.radianToDegrees = function(a) {
        return 180 * a / Math.PI;
      };
      r.degreesToRadian = function(a) {
        return a * Math.PI / 180;
      };
      r.quadraticBezier = a;
      r.quadraticBezierExtreme = function(b, f, c) {
        var d = (b - f) / (b - 2 * f + c);
        return 0 > d ? b : 1 < d ? c : a(b, f, c, d);
      };
      r.cubicBezier = w;
      r.cubicBezierExtremes = function(a, f, c, b) {
        var d = f - a, h;
        h = 2 * (c - f);
        var g = b - c;
        d + g === h && (g *= 1.0001);
        var p = 2 * d - h, n = h - 2 * d, n = Math.sqrt(n * n - 4 * d * (d - h + g));
        h = 2 * (d - h + g);
        d = (p + n) / h;
        p = (p - n) / h;
        n = [];
        0 <= d && 1 >= d && n.push(w(a, f, c, b, d));
        0 <= p && 1 >= p && n.push(w(a, f, c, b, p));
        return n;
      };
      var t = function() {
        function a(f, c) {
          this.x = f;
          this.y = c;
        }
        a.prototype.setElements = function(f, c) {
          this.x = f;
          this.y = c;
          return this;
        };
        a.prototype.set = function(f) {
          this.x = f.x;
          this.y = f.y;
          return this;
        };
        a.prototype.dot = function(f) {
          return this.x * f.x + this.y * f.y;
        };
        a.prototype.squaredLength = function() {
          return this.dot(this);
        };
        a.prototype.distanceTo = function(f) {
          return Math.sqrt(this.dot(f));
        };
        a.prototype.sub = function(f) {
          this.x -= f.x;
          this.y -= f.y;
          return this;
        };
        a.prototype.mul = function(f) {
          this.x *= f;
          this.y *= f;
          return this;
        };
        a.prototype.clone = function() {
          return new a(this.x, this.y);
        };
        a.prototype.toString = function(f) {
          void 0 === f && (f = 2);
          return "{x: " + this.x.toFixed(f) + ", y: " + this.y.toFixed(f) + "}";
        };
        a.prototype.inTriangle = function(f, c, a) {
          var b = f.y * a.x - f.x * a.y + (a.y - f.y) * this.x + (f.x - a.x) * this.y, e = f.x * c.y - f.y * c.x + (f.y - c.y) * this.x + (c.x - f.x) * this.y;
          if (0 > b != 0 > e) {
            return !1;
          }
          f = -c.y * a.x + f.y * (a.x - c.x) + f.x * (c.y - a.y) + c.x * a.y;
          0 > f && (b = -b, e = -e, f = -f);
          return 0 < b && 0 < e && b + e < f;
        };
        a.createEmpty = function() {
          return new a(0, 0);
        };
        a.createEmptyPoints = function(f) {
          for (var c = [], b = 0;b < f;b++) {
            c.push(new a(0, 0));
          }
          return c;
        };
        return a;
      }();
      r.Point = t;
      var h = function() {
        function a(f, c, b) {
          this.x = f;
          this.y = c;
          this.z = b;
        }
        a.prototype.setElements = function(f, c, a) {
          this.x = f;
          this.y = c;
          this.z = a;
          return this;
        };
        a.prototype.set = function(f) {
          this.x = f.x;
          this.y = f.y;
          this.z = f.z;
          return this;
        };
        a.prototype.dot = function(f) {
          return this.x * f.x + this.y * f.y + this.z * f.z;
        };
        a.prototype.cross = function(f) {
          var c = this.z * f.x - this.x * f.z, a = this.x * f.y - this.y * f.x;
          this.x = this.y * f.z - this.z * f.y;
          this.y = c;
          this.z = a;
          return this;
        };
        a.prototype.squaredLength = function() {
          return this.dot(this);
        };
        a.prototype.sub = function(f) {
          this.x -= f.x;
          this.y -= f.y;
          this.z -= f.z;
          return this;
        };
        a.prototype.mul = function(f) {
          this.x *= f;
          this.y *= f;
          this.z *= f;
          return this;
        };
        a.prototype.normalize = function() {
          var f = Math.sqrt(this.squaredLength());
          1E-5 < f ? this.mul(1 / f) : this.setElements(0, 0, 0);
          return this;
        };
        a.prototype.clone = function() {
          return new a(this.x, this.y, this.z);
        };
        a.prototype.toString = function(f) {
          void 0 === f && (f = 2);
          return "{x: " + this.x.toFixed(f) + ", y: " + this.y.toFixed(f) + ", z: " + this.z.toFixed(f) + "}";
        };
        a.createEmpty = function() {
          return new a(0, 0, 0);
        };
        a.createEmptyPoints = function(f) {
          for (var c = [], b = 0;b < f;b++) {
            c.push(new a(0, 0, 0));
          }
          return c;
        };
        return a;
      }();
      r.Point3D = h;
      var n = function() {
        function a(f, c, b, d) {
          this.setElements(f, c, b, d);
          a.allocationCount++;
        }
        a.prototype.setElements = function(a, c, b, d) {
          this.x = a;
          this.y = c;
          this.w = b;
          this.h = d;
        };
        a.prototype.set = function(a) {
          this.x = a.x;
          this.y = a.y;
          this.w = a.w;
          this.h = a.h;
        };
        a.prototype.contains = function(a) {
          var c = a.x + a.w, b = a.y + a.h, d = this.x + this.w, e = this.y + this.h;
          return a.x >= this.x && a.x < d && a.y >= this.y && a.y < e && c > this.x && c <= d && b > this.y && b <= e;
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
              var c = this.x, b = this.y;
              this.x > a.x && (c = a.x);
              this.y > a.y && (b = a.y);
              var d = this.x + this.w;
              d < a.x + a.w && (d = a.x + a.w);
              var e = this.y + this.h;
              e < a.y + a.h && (e = a.y + a.h);
              this.x = c;
              this.y = b;
              this.w = d - c;
              this.h = e - b;
            }
          }
        };
        a.prototype.isEmpty = function() {
          return 0 >= this.w || 0 >= this.h;
        };
        a.prototype.setEmpty = function() {
          this.h = this.w = this.y = this.x = 0;
        };
        a.prototype.intersect = function(f) {
          var c = a.createEmpty();
          if (this.isEmpty() || f.isEmpty()) {
            return c.setEmpty(), c;
          }
          c.x = Math.max(this.x, f.x);
          c.y = Math.max(this.y, f.y);
          c.w = Math.min(this.x + this.w, f.x + f.w) - c.x;
          c.h = Math.min(this.y + this.h, f.y + f.h) - c.y;
          c.isEmpty() && c.setEmpty();
          this.set(c);
        };
        a.prototype.intersects = function(a) {
          if (this.isEmpty() || a.isEmpty()) {
            return !1;
          }
          var c = Math.max(this.x, a.x), b = Math.max(this.y, a.y), c = Math.min(this.x + this.w, a.x + a.w) - c;
          a = Math.min(this.y + this.h, a.y + a.h) - b;
          return !(0 >= c || 0 >= a);
        };
        a.prototype.intersectsTransformedAABB = function(f, c) {
          var b = a._temporary;
          b.set(f);
          c.transformRectangleAABB(b);
          return this.intersects(b);
        };
        a.prototype.intersectsTranslated = function(a, c, b) {
          if (this.isEmpty() || a.isEmpty()) {
            return !1;
          }
          var d = Math.max(this.x, a.x + c), e = Math.max(this.y, a.y + b);
          c = Math.min(this.x + this.w, a.x + c + a.w) - d;
          a = Math.min(this.y + this.h, a.y + b + a.h) - e;
          return !(0 >= c || 0 >= a);
        };
        a.prototype.area = function() {
          return this.w * this.h;
        };
        a.prototype.clone = function() {
          var f = a.allocate();
          f.set(this);
          return f;
        };
        a.allocate = function() {
          var f = a._dirtyStack;
          return f.length ? f.pop() : new a(12345, 67890, 12345, 67890);
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
          return new t(this.x + this.w / 2, this.y + this.h / 2);
        };
        a.prototype.getAbsoluteBounds = function() {
          return new a(0, 0, this.w, this.h);
        };
        a.prototype.toString = function(a) {
          void 0 === a && (a = 2);
          return "{" + this.x.toFixed(a) + ", " + this.y.toFixed(a) + ", " + this.w.toFixed(a) + ", " + this.h.toFixed(a) + "}";
        };
        a.createEmpty = function() {
          var f = a.allocate();
          f.setEmpty();
          return f;
        };
        a.createSquare = function(f) {
          return new a(-f / 2, -f / 2, f, f);
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
      r.Rectangle = n;
      var u = function() {
        function a(f) {
          this.corners = f.map(function(c) {
            return c.clone();
          });
          this.axes = [f[1].clone().sub(f[0]), f[3].clone().sub(f[0])];
          this.origins = [];
          for (var c = 0;2 > c;c++) {
            this.axes[c].mul(1 / this.axes[c].squaredLength()), this.origins.push(f[0].dot(this.axes[c]));
          }
        }
        a.prototype.getBounds = function() {
          return a.getBounds(this.corners);
        };
        a.getBounds = function(a) {
          for (var c = new t(Number.MAX_VALUE, Number.MAX_VALUE), b = new t(Number.MIN_VALUE, Number.MIN_VALUE), d = 0;4 > d;d++) {
            var e = a[d].x, h = a[d].y;
            c.x = Math.min(c.x, e);
            c.y = Math.min(c.y, h);
            b.x = Math.max(b.x, e);
            b.y = Math.max(b.y, h);
          }
          return new n(c.x, c.y, b.x - c.x, b.y - c.y);
        };
        a.prototype.intersects = function(a) {
          return this.intersectsOneWay(a) && a.intersectsOneWay(this);
        };
        a.prototype.intersectsOneWay = function(a) {
          for (var c = 0;2 > c;c++) {
            for (var b = 0;4 > b;b++) {
              var d = a.corners[b].dot(this.axes[c]), e, h;
              0 === b ? h = e = d : d < e ? e = d : d > h && (h = d);
            }
            if (e > 1 + this.origins[c] || h < this.origins[c]) {
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
      var p = function() {
        function a(f, c, b, d, h, g) {
          this._data = new Float64Array(6);
          this._type = 0;
          this.setElements(f, c, b, d, h, g);
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
        a.prototype.setElements = function(a, c, b, d, e, h) {
          var g = this._data;
          g[0] = a;
          g[1] = c;
          g[2] = b;
          g[3] = d;
          g[4] = e;
          g[5] = h;
          this._type = 0;
        };
        a.prototype.set = function(a) {
          var c = this._data, b = a._data;
          c[0] = b[0];
          c[1] = b[1];
          c[2] = b[2];
          c[3] = b[3];
          c[4] = b[4];
          c[5] = b[5];
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
          var f = a.allocate();
          f.set(this);
          return f;
        };
        a.allocate = function() {
          var f = a._dirtyStack;
          return f.length ? f.pop() : new a(12345, 12345, 12345, 12345, 12345, 12345);
        };
        a.prototype.free = function() {
          a._dirtyStack.push(this);
        };
        a.prototype.transform = function(a, c, b, d, e, h) {
          var g = this._data, p = g[0], n = g[1], k = g[2], u = g[3], v = g[4], l = g[5];
          g[0] = p * a + k * c;
          g[1] = n * a + u * c;
          g[2] = p * b + k * d;
          g[3] = n * b + u * d;
          g[4] = p * e + k * h + v;
          g[5] = n * e + u * h + l;
          this._type = 0;
          return this;
        };
        a.prototype.transformRectangle = function(a, c) {
          var b = this._data, d = b[0], e = b[1], h = b[2], g = b[3], p = b[4], b = b[5], n = a.x, k = a.y, u = a.w, v = a.h;
          c[0].x = d * n + h * k + p;
          c[0].y = e * n + g * k + b;
          c[1].x = d * (n + u) + h * k + p;
          c[1].y = e * (n + u) + g * k + b;
          c[2].x = d * (n + u) + h * (k + v) + p;
          c[2].y = e * (n + u) + g * (k + v) + b;
          c[3].x = d * n + h * (k + v) + p;
          c[3].y = e * n + g * (k + v) + b;
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
              var b = c[0], d = c[1], e = c[2], h = c[3], g = c[4], p = c[5], n = a.x, k = a.y, u = a.w, v = a.h, c = b * n + e * k + g, l = d * n + h * k + p, t = b * (n + u) + e * k + g, q = d * (n + u) + h * k + p, r = b * (n + u) + e * (k + v) + g, u = d * (n + u) + h * (k + v) + p, b = b * n + e * (k + v) + g, d = d * n + h * (k + v) + p, h = 0;
              c > t && (h = c, c = t, t = h);
              r > b && (h = r, r = b, b = h);
              a.x = c < r ? c : r;
              a.w = (t > b ? t : b) - a.x;
              l > q && (h = l, l = q, q = h);
              u > d && (h = u, u = d, d = h);
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
          var c = this._data, b = c[0], d = c[1], e = c[2], h = c[3], g = c[4], p = c[5], n = Math.cos(a);
          a = Math.sin(a);
          c[0] = n * b - a * d;
          c[1] = a * b + n * d;
          c[2] = n * e - a * h;
          c[3] = a * e + n * h;
          c[4] = n * g - a * p;
          c[5] = a * g + n * p;
          this._type = 0;
          return this;
        };
        a.prototype.concat = function(a) {
          if (1 === a._type) {
            return this;
          }
          var c = this._data;
          a = a._data;
          var b = c[0] * a[0], d = 0, e = 0, h = c[3] * a[3], g = c[4] * a[0] + a[4], p = c[5] * a[3] + a[5];
          if (0 !== c[1] || 0 !== c[2] || 0 !== a[1] || 0 !== a[2]) {
            b += c[1] * a[2], h += c[2] * a[1], d += c[0] * a[1] + c[1] * a[3], e += c[2] * a[0] + c[3] * a[2], g += c[5] * a[2], p += c[4] * a[1];
          }
          c[0] = b;
          c[1] = d;
          c[2] = e;
          c[3] = h;
          c[4] = g;
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
              var d = 0, e = 0, h = b[3] * c[3], g = b[4] * c[0] + c[4], p = b[5] * c[3] + c[5];
              if (0 !== b[1] || 0 !== b[2] || 0 !== c[1] || 0 !== c[2]) {
                a += b[1] * c[2], h += b[2] * c[1], d += b[0] * c[1] + b[1] * c[3], e += b[2] * c[0] + b[3] * c[2], g += b[5] * c[2], p += b[4] * c[1];
              }
              c[0] = a;
              c[1] = d;
              c[2] = e;
              c[3] = h;
              c[4] = g;
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
              var d = c[1], e = c[2], h = c[4], g = c[5];
              if (0 === d && 0 === e) {
                var p = b[0] = 1 / c[0], c = b[3] = 1 / c[3];
                b[1] = 0;
                b[2] = 0;
                b[4] = -p * h;
                b[5] = -c * g;
              } else {
                var p = c[0], c = c[3], n = p * c - d * e;
                if (0 === n) {
                  a.setIdentity();
                  return;
                }
                n = 1 / n;
                b[0] = c * n;
                d = b[1] = -d * n;
                e = b[2] = -e * n;
                c = b[3] = p * n;
                b[4] = -(b[0] * h + e * g);
                b[5] = -(d * h + c * g);
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
          var b = c._data;
          a.transform(b[0], b[1], b[2], b[3], b[4], b[5]);
        };
        return a;
      }();
      r.Matrix = p;
      p = function() {
        function a(b) {
          this._m = new Float32Array(b);
        }
        a.prototype.asWebGLMatrix = function() {
          return this._m;
        };
        a.createCameraLookAt = function(b, c, d) {
          c = b.clone().sub(c).normalize();
          d = d.clone().cross(c).normalize();
          var h = c.clone().cross(d);
          return new a([d.x, d.y, d.z, 0, h.x, h.y, h.z, 0, c.x, c.y, c.z, 0, b.x, b.y, b.z, 1]);
        };
        a.createLookAt = function(b, c, d) {
          c = b.clone().sub(c).normalize();
          d = d.clone().cross(c).normalize();
          var h = c.clone().cross(d);
          return new a([d.x, h.x, c.x, 0, h.x, h.y, c.y, 0, c.x, h.z, c.z, 0, -d.dot(b), -h.dot(b), -c.dot(b), 1]);
        };
        a.prototype.mul = function(a) {
          a = [a.x, a.y, a.z, 0];
          for (var c = this._m, b = [], d = 0;4 > d;d++) {
            b[d] = 0;
            for (var e = 4 * d, g = 0;4 > g;g++) {
              b[d] += c[e + g] * a[g];
            }
          }
          return new h(b[0], b[1], b[2]);
        };
        a.create2DProjection = function(b, c, d) {
          return new a([2 / b, 0, 0, 0, 0, -2 / c, 0, 0, 0, 0, 2 / d, 0, -1, 1, 0, 1]);
        };
        a.createPerspective = function(b, c, d, h) {
          b = Math.tan(.5 * Math.PI - .5 * b);
          var g = 1 / (d - h);
          return new a([b / c, 0, 0, 0, 0, b, 0, 0, 0, 0, (d + h) * g, -1, 0, 0, d * h * g * 2, 0]);
        };
        a.createIdentity = function() {
          return a.createTranslation(0, 0, 0);
        };
        a.createTranslation = function(b, c, d) {
          return new a([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, b, c, d, 1]);
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
        a.createScale = function(b, c, d) {
          return new a([b, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0, 0, 1]);
        };
        a.createMultiply = function(b, c) {
          var d = b._m, h = c._m, g = d[0], p = d[1], n = d[2], k = d[3], u = d[4], v = d[5], l = d[6], t = d[7], q = d[8], r = d[9], w = d[10], H = d[11], D = d[12], z = d[13], B = d[14], d = d[15], E = h[0], A = h[1], C = h[2], F = h[3], G = h[4], K = h[5], I = h[6], L = h[7], M = h[8], N = h[9], O = h[10], P = h[11], Q = h[12], R = h[13], S = h[14], h = h[15];
          return new a([g * E + p * G + n * M + k * Q, g * A + p * K + n * N + k * R, g * C + p * I + n * O + k * S, g * F + p * L + n * P + k * h, u * E + v * G + l * M + t * Q, u * A + v * K + l * N + t * R, u * C + v * I + l * O + t * S, u * F + v * L + l * P + t * h, q * E + r * G + w * M + H * Q, q * A + r * K + w * N + H * R, q * C + r * I + w * O + H * S, q * F + r * L + w * P + H * h, D * E + z * G + B * M + d * Q, D * A + z * K + B * N + d * R, D * C + z * I + B * O + d * S, D * F + z * 
          L + B * P + d * h]);
        };
        a.createInverse = function(b) {
          var c = b._m;
          b = c[0];
          var d = c[1], h = c[2], g = c[3], p = c[4], n = c[5], k = c[6], u = c[7], v = c[8], l = c[9], t = c[10], q = c[11], r = c[12], w = c[13], H = c[14], c = c[15], D = t * c, z = H * q, B = k * c, E = H * u, A = k * q, C = t * u, F = h * c, G = H * g, K = h * q, I = t * g, L = h * u, M = k * g, N = v * w, O = r * l, P = p * w, Q = r * n, R = p * l, S = v * n, Y = b * w, Z = r * d, aa = b * l, ba = v * d, ca = b * n, da = p * d, fa = D * n + E * l + A * w - (z * n + B * l + C * w), ga = z * 
          d + F * l + I * w - (D * d + G * l + K * w), w = B * d + G * n + L * w - (E * d + F * n + M * w), d = C * d + K * n + M * l - (A * d + I * n + L * l), n = 1 / (b * fa + p * ga + v * w + r * d);
          return new a([n * fa, n * ga, n * w, n * d, n * (z * p + B * v + C * r - (D * p + E * v + A * r)), n * (D * b + G * v + K * r - (z * b + F * v + I * r)), n * (E * b + F * p + M * r - (B * b + G * p + L * r)), n * (A * b + I * p + L * v - (C * b + K * p + M * v)), n * (N * u + Q * q + R * c - (O * u + P * q + S * c)), n * (O * g + Y * q + ba * c - (N * g + Z * q + aa * c)), n * (P * g + Z * u + ca * c - (Q * g + Y * u + da * c)), n * (S * g + aa * u + da * q - (R * g + ba * u + ca * q)), 
          n * (P * t + S * H + O * k - (R * H + N * k + Q * t)), n * (aa * H + N * h + Z * t - (Y * t + ba * H + O * h)), n * (Y * k + da * H + Q * h - (ca * H + P * h + Z * k)), n * (ca * t + R * h + ba * k - (aa * k + da * t + S * h))]);
        };
        return a;
      }();
      r.Matrix3D = p;
      p = function() {
        function a(b, c, d) {
          void 0 === d && (d = 7);
          var h = this.size = 1 << d;
          this.sizeInBits = d;
          this.w = b;
          this.h = c;
          this.c = Math.ceil(b / h);
          this.r = Math.ceil(c / h);
          this.grid = [];
          for (b = 0;b < this.r;b++) {
            for (this.grid.push([]), c = 0;c < this.c;c++) {
              this.grid[b][c] = new a.Cell(new n(c * h, b * h, h, h));
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
          return new n(0, 0, this.w, this.h);
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
              for (var e = Math.min(this.c, Math.ceil((a.x + a.w) / this.size)) - c, h = Math.min(this.r, Math.ceil((a.y + a.h) / this.size)) - b, g = 0;g < e;g++) {
                for (var n = 0;n < h;n++) {
                  d = this.grid[b + n][c + g], d = d.region.clone(), d.intersect(a), d.isEmpty() || this.addDirtyRectangle(d);
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
              for (var e = 0;e < this.c;e++) {
                var h = this.grid[d][e];
                a.beginPath();
                b(h.region);
                a.closePath();
                a.stroke();
              }
            }
          }
          a.strokeStyle = "#E0F8D8";
          for (d = 0;d < this.r;d++) {
            for (e = 0;e < this.c;e++) {
              h = this.grid[d][e], a.beginPath(), b(h.bounds), a.closePath(), a.stroke();
            }
          }
        };
        a.tmpRectangle = n.createEmpty();
        return a;
      }();
      r.DirtyRegion = p;
      (function(a) {
        var b = function() {
          function a(c) {
            this.region = c;
            this.bounds = n.createEmpty();
          }
          a.prototype.clear = function() {
            this.bounds.setEmpty();
          };
          return a;
        }();
        a.Cell = b;
      })(p = r.DirtyRegion || (r.DirtyRegion = {}));
      var v = function() {
        function a(b, c, d, e, h, g) {
          this.index = b;
          this.x = c;
          this.y = d;
          this.scale = g;
          this.bounds = new n(c * e, d * h, e, h);
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
        function a(b, c, d, e, h) {
          this.tileW = d;
          this.tileH = e;
          this.scale = h;
          this.w = b;
          this.h = c;
          this.rows = Math.ceil(c / e);
          this.columns = Math.ceil(b / d);
          this.tiles = [];
          for (c = b = 0;c < this.rows;c++) {
            for (var g = 0;g < this.columns;g++) {
              this.tiles.push(new v(b++, g, c, d, e, h));
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
          var h;
          b = new n(0, 0, this.w, this.h);
          d && (h = new u(a._points));
          b.intersect(u.getBounds(a._points));
          if (b.isEmpty()) {
            return [];
          }
          var g = b.x / this.tileW | 0;
          c = b.y / this.tileH | 0;
          var p = Math.ceil((b.x + b.w) / this.tileW) | 0, k = Math.ceil((b.y + b.h) / this.tileH) | 0, g = l(g, 0, this.columns), p = l(p, 0, this.columns);
          c = l(c, 0, this.rows);
          for (var k = l(k, 0, this.rows), v = [];g < p;g++) {
            for (var t = c;t < k;t++) {
              var q = this.tiles[t * this.columns + g];
              q.bounds.intersects(b) && (d ? q.getOBB().intersects(h) : 1) && v.push(q);
            }
          }
          return v;
        };
        a.prototype.getManyTiles = function(b, c) {
          function d(a, c, b) {
            return (a - c.x) * (b.y - c.y) / (b.x - c.x) + c.y;
          }
          function h(a, c, b, d, f) {
            if (!(0 > b || b >= c.columns)) {
              for (d = l(d, 0, c.rows), f = l(f + 1, 0, c.rows);d < f;d++) {
                a.push(c.tiles[d * c.columns + b]);
              }
            }
          }
          var g = a._points;
          c.transformRectangle(b, g);
          for (var n = g[0].x < g[1].x ? 0 : 1, p = g[2].x < g[3].x ? 2 : 3, p = g[n].x < g[p].x ? n : p, n = [], k = 0;5 > k;k++, p++) {
            n.push(g[p % 4]);
          }
          (n[1].x - n[0].x) * (n[3].y - n[0].y) < (n[1].y - n[0].y) * (n[3].x - n[0].x) && (g = n[1], n[1] = n[3], n[3] = g);
          var g = [], u, v, p = Math.floor(n[0].x / this.tileW), k = (p + 1) * this.tileW;
          if (n[2].x < k) {
            u = Math.min(n[0].y, n[1].y, n[2].y, n[3].y);
            v = Math.max(n[0].y, n[1].y, n[2].y, n[3].y);
            var t = Math.floor(u / this.tileH), q = Math.floor(v / this.tileH);
            h(g, this, p, t, q);
            return g;
          }
          var r = 0, w = 4, X = !1;
          if (n[0].x === n[1].x || n[0].x === n[3].x) {
            n[0].x === n[1].x ? (X = !0, r++) : w--, u = d(k, n[r], n[r + 1]), v = d(k, n[w], n[w - 1]), t = Math.floor(n[r].y / this.tileH), q = Math.floor(n[w].y / this.tileH), h(g, this, p, t, q), p++;
          }
          do {
            var H, D, z, B;
            n[r + 1].x < k ? (H = n[r + 1].y, z = !0) : (H = d(k, n[r], n[r + 1]), z = !1);
            n[w - 1].x < k ? (D = n[w - 1].y, B = !0) : (D = d(k, n[w], n[w - 1]), B = !1);
            t = Math.floor((n[r].y < n[r + 1].y ? u : H) / this.tileH);
            q = Math.floor((n[w].y > n[w - 1].y ? v : D) / this.tileH);
            h(g, this, p, t, q);
            if (z && X) {
              break;
            }
            z ? (X = !0, r++, u = d(k, n[r], n[r + 1])) : u = H;
            B ? (w--, v = d(k, n[w], n[w - 1])) : v = D;
            p++;
            k = (p + 1) * this.tileW;
          } while (r < w);
          return g;
        };
        a._points = t.createEmptyPoints(4);
        return a;
      }();
      r.TileCache = d;
      p = function() {
        function a(b, c, d) {
          this._cacheLevels = [];
          this._source = b;
          this._tileSize = c;
          this._minUntiledSize = d;
        }
        a.prototype._getTilesAtScale = function(a, c, e) {
          var h = Math.max(c.getAbsoluteScaleX(), c.getAbsoluteScaleY()), g = 0;
          1 !== h && (g = l(Math.round(Math.log(1 / h) / Math.LN2), -5, 3));
          h = b(g);
          if (this._source.hasFlags(1048576)) {
            for (;;) {
              h = b(g);
              if (e.contains(this._source.getBounds().getAbsoluteBounds().clone().scale(h, h))) {
                break;
              }
              g--;
            }
          }
          this._source.hasFlags(2097152) || (g = l(g, -5, 0));
          h = b(g);
          e = 5 + g;
          g = this._cacheLevels[e];
          if (!g) {
            var g = this._source.getBounds().getAbsoluteBounds().clone().scale(h, h), n, p;
            this._source.hasFlags(1048576) || !this._source.hasFlags(4194304) || Math.max(g.w, g.h) <= this._minUntiledSize ? (n = g.w, p = g.h) : n = p = this._tileSize;
            g = this._cacheLevels[e] = new d(g.w, g.h, n, p, h);
          }
          return g.getTiles(a, c.scaleClone(h, h));
        };
        a.prototype.fetchTiles = function(a, c, b, d) {
          var e = new n(0, 0, b.canvas.width, b.canvas.height);
          a = this._getTilesAtScale(a, c, e);
          var h;
          c = this._source;
          for (var g = 0;g < a.length;g++) {
            var p = a[g];
            p.cachedSurfaceRegion && p.cachedSurfaceRegion.surface && !c.hasFlags(1048592) || (h || (h = []), h.push(p));
          }
          h && this._cacheTiles(b, h, d, e);
          c.removeFlags(16);
          return a;
        };
        a.prototype._getTileBounds = function(a) {
          for (var c = n.createEmpty(), b = 0;b < a.length;b++) {
            c.union(a[b].bounds);
          }
          return c;
        };
        a.prototype._cacheTiles = function(a, c, b, d, e) {
          void 0 === e && (e = 4);
          var h = this._getTileBounds(c);
          a.save();
          a.setTransform(1, 0, 0, 1, 0, 0);
          a.clearRect(0, 0, d.w, d.h);
          a.translate(-h.x, -h.y);
          a.scale(c[0].scale, c[0].scale);
          var g = this._source.getBounds();
          a.translate(-g.x, -g.y);
          2 <= q.traceLevel && q.writer && q.writer.writeLn("Rendering Tiles: " + h);
          this._source.render(a, 0);
          a.restore();
          for (var g = null, n = 0;n < c.length;n++) {
            var p = c[n], k = p.bounds.clone();
            k.x -= h.x;
            k.y -= h.y;
            d.contains(k) || (g || (g = []), g.push(p));
            p.cachedSurfaceRegion = b(p.cachedSurfaceRegion, a, k);
          }
          g && (2 <= g.length ? (c = g.slice(0, g.length / 2 | 0), h = g.slice(c.length), this._cacheTiles(a, c, b, d, e - 1), this._cacheTiles(a, h, b, d, e - 1)) : this._cacheTiles(a, g, b, d, e - 1));
        };
        return a;
      }();
      r.RenderableTileCache = p;
    })(q.Geometry || (q.Geometry = {}));
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(g, q) {
  function r() {
    this.constructor = g;
  }
  for (var a in q) {
    q.hasOwnProperty(a) && (g[a] = q[a]);
  }
  r.prototype = q.prototype;
  g.prototype = new r;
};
(function(g) {
  (function(q) {
    var r = g.IntegerUtilities.roundToMultipleOfPowerOfTwo, a = q.Geometry.Rectangle;
    (function(g) {
      var l = function(a) {
        function b() {
          a.apply(this, arguments);
        }
        __extends(b, a);
        return b;
      }(q.Geometry.Rectangle);
      g.Region = l;
      var b = function() {
        function a(b, d) {
          this._root = new k(0, 0, b | 0, d | 0, !1);
        }
        a.prototype.allocate = function(a, b) {
          a = Math.ceil(a);
          b = Math.ceil(b);
          var e = this._root.insert(a, b);
          e && (e.allocator = this, e.allocated = !0);
          return e;
        };
        a.prototype.free = function(a) {
          a.clear();
          a.allocated = !1;
        };
        a.RANDOM_ORIENTATION = !0;
        a.MAX_DEPTH = 256;
        return a;
      }();
      g.CompactAllocator = b;
      var k = function(a) {
        function h(b, e, f, c, m) {
          a.call(this, b, e, f, c);
          this._children = null;
          this._horizontal = m;
          this.allocated = !1;
        }
        __extends(h, a);
        h.prototype.clear = function() {
          this._children = null;
          this.allocated = !1;
        };
        h.prototype.insert = function(a, b) {
          return this._insert(a, b, 0);
        };
        h.prototype._insert = function(a, e, f) {
          if (!(f > b.MAX_DEPTH || this.allocated || this.w < a || this.h < e)) {
            if (this._children) {
              var c;
              if ((c = this._children[0]._insert(a, e, f + 1)) || (c = this._children[1]._insert(a, e, f + 1))) {
                return c;
              }
            } else {
              return c = !this._horizontal, b.RANDOM_ORIENTATION && (c = .5 <= Math.random()), this._children = this._horizontal ? [new h(this.x, this.y, this.w, e, !1), new h(this.x, this.y + e, this.w, this.h - e, c)] : [new h(this.x, this.y, a, this.h, !0), new h(this.x + a, this.y, this.w - a, this.h, c)], c = this._children[0], c.w === a && c.h === e ? (c.allocated = !0, c) : this._insert(a, e, f + 1);
            }
          }
        };
        return h;
      }(g.Region), t = function() {
        function a(b, d, e, f) {
          this._columns = b / e | 0;
          this._rows = d / f | 0;
          this._sizeW = e;
          this._sizeH = f;
          this._freeList = [];
          this._index = 0;
          this._total = this._columns * this._rows;
        }
        a.prototype.allocate = function(a, b) {
          a = Math.ceil(a);
          b = Math.ceil(b);
          var e = this._sizeW, f = this._sizeH;
          if (a > e || b > f) {
            return null;
          }
          var c = this._freeList, m = this._index;
          return 0 < c.length ? (e = c.pop(), e.w = a, e.h = b, e.allocated = !0, e) : m < this._total ? (c = m / this._columns | 0, e = new h((m - c * this._columns) * e, c * f, a, b), e.index = m, e.allocator = this, e.allocated = !0, this._index++, e) : null;
        };
        a.prototype.free = function(a) {
          a.allocated = !1;
          this._freeList.push(a);
        };
        return a;
      }();
      g.GridAllocator = t;
      var h = function(a) {
        function b(d, e, f, c) {
          a.call(this, d, e, f, c);
          this.index = -1;
        }
        __extends(b, a);
        return b;
      }(g.Region);
      g.GridCell = h;
      var n = function() {
        return function(a, b, d) {
          this.size = a;
          this.region = b;
          this.allocator = d;
        };
      }(), u = function(a) {
        function b(d, e, f, c, m) {
          a.call(this, d, e, f, c);
          this.region = m;
        }
        __extends(b, a);
        return b;
      }(g.Region);
      g.BucketCell = u;
      l = function() {
        function b(a, d) {
          this._buckets = [];
          this._w = a | 0;
          this._h = d | 0;
          this._filled = 0;
        }
        b.prototype.allocate = function(b, d) {
          b = Math.ceil(b);
          d = Math.ceil(d);
          var e = Math.max(b, d);
          if (b > this._w || d > this._h) {
            return null;
          }
          var f = null, c, m = this._buckets;
          do {
            for (var h = 0;h < m.length && !(m[h].size >= e && (c = m[h], f = c.allocator.allocate(b, d)));h++) {
            }
            if (!f) {
              var g = this._h - this._filled;
              if (g < d) {
                return null;
              }
              var h = r(e, 8), p = 2 * h;
              p > g && (p = g);
              if (p < h) {
                return null;
              }
              g = new a(0, this._filled, this._w, p);
              this._buckets.push(new n(h, g, new t(g.w, g.h, h, h)));
              this._filled += p;
            }
          } while (!f);
          return new u(c.region.x + f.x, c.region.y + f.y, f.w, f.h, f);
        };
        b.prototype.free = function(a) {
          a.region.allocator.free(a.region);
        };
        return b;
      }();
      g.BucketAllocator = l;
    })(q.RegionAllocator || (q.RegionAllocator = {}));
    (function(a) {
      var g = function() {
        function a(b) {
          this._createSurface = b;
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
            var u = this._surfaces[g];
            if (u !== h && (u = u.allocate(a, b))) {
              return u;
            }
          }
          return this._createNewSurface(a, b).allocate(a, b);
        };
        a.prototype.free = function(a) {
        };
        return a;
      }();
      a.SimpleAllocator = g;
    })(q.SurfaceRegionAllocator || (q.SurfaceRegionAllocator = {}));
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(q) {
    var r = q.Geometry.Rectangle, a = q.Geometry.Matrix, w = q.Geometry.DirtyRegion;
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
    var b = q.NodeFlags;
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
        for (var d = a.getChildren(), f = 0;f < d.length;f++) {
          d[f].visit(this, b);
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
    var h = function() {
      return function() {
      };
    }();
    q.State = h;
    var n = function(b) {
      function c() {
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
    }(h);
    q.PreRenderState = n;
    var u = function(a) {
      function c() {
        a.apply(this, arguments);
        this.isDirty = !0;
      }
      __extends(c, a);
      c.prototype.start = function(a, c) {
        this._dirtyRegion = c;
        var b = new n;
        b.matrix.setIdentity();
        a.visit(this, b);
        b.free();
      };
      c.prototype.visitGroup = function(a, c) {
        var b = a.getChildren();
        this.visitNode(a, c);
        for (var d = 0;d < b.length;d++) {
          var f = b[d], e = c.transform(f.getTransform());
          f.visit(this, e);
          e.free();
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
    }(t);
    q.TracingNodeVisitor = h;
    var p = function() {
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
          for (var b = this._eventListeners, d = 0;d < b.length;d++) {
            var f = b[d];
            f.type === a && f.listener(this, a);
          }
        }
      };
      a.prototype.addEventListener = function(a, b) {
        this._eventListeners || (this._eventListeners = []);
        this._eventListeners.push({type:a, listener:b});
      };
      a.prototype.removeEventListener = function(a, b) {
        for (var d = this._eventListeners, f = 0;f < d.length;f++) {
          var e = d[f];
          if (e.type === a && e.listener === b) {
            d.splice(f, 1);
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
        var b = this.getBounds(!0);
        if (a !== this && !b.isEmpty()) {
          var d = this.getTransform().getConcatenatedMatrix();
          a ? (a = a.getTransform().getInvertedConcatenatedMatrix(!0), a.preMultiply(d), a.transformRectangleAABB(b), a.free()) : d.transformRectangleAABB(b);
        }
        return b;
      };
      a.prototype._markCurrentBoundsAsDirtyRegion = function() {
      };
      a.prototype.getStage = function(a) {
        void 0 === a && (a = !0);
        for (var b = this._parent;b;) {
          if (b.isType(13)) {
            var d = b;
            if (a) {
              if (d.dirtyRegion) {
                return d;
              }
            } else {
              return d;
            }
          }
          b = b._parent;
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
        this.removeFlags(256);
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
      a.prototype.toggleFlags = function(a, b) {
        this._flags = b ? this._flags | a : this._flags & ~a;
      };
      a.prototype._propagateFlagsUp = function(a) {
        if (0 !== a && !this.hasFlags(a)) {
          this.hasFlags(2) || (a &= -257);
          this.setFlags(a);
          var b = this._parent;
          b && b._propagateFlagsUp(a);
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
      a._getAncestors = function(c, b) {
        var d = a._path;
        for (d.length = 0;c && c !== b;) {
          d.push(c), c = c._parent;
        }
        return d;
      };
      a.prototype._findClosestAncestor = function(a, b) {
        for (var d = this;d;) {
          if (d.hasFlags(a) === b) {
            return d;
          }
          d = d._parent;
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
        null === this._layer && (this._layer = new e(this));
        return this._layer;
      };
      a.prototype.getLayerBounds = function(a) {
        var b = this.getBounds();
        a && this._layer && this._layer.expandBounds(b);
        return b;
      };
      a.prototype.visit = function(a, b) {
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
            g.Debug.unexpectedCase();
        }
      };
      a.prototype.invalidate = function() {
        this._propagateFlagsUp(b.UpOnInvalidate);
      };
      a.prototype.toString = function(a) {
        void 0 === a && (a = !1);
        var b = k[this._type] + " " + this._id;
        a && (b += " " + this._bounds.toString());
        return b;
      };
      a._path = [];
      a._nextId = 0;
      return a;
    }();
    q.Node = p;
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
        if (this.hasFlags(256)) {
          c.setEmpty();
          for (var b = this._children, d = r.allocate(), f = 0;f < b.length;f++) {
            var e = b[f];
            d.set(e.getBounds());
            e.getTransformMatrix().transformRectangleAABB(d);
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
        for (var c = r.createEmpty(), b = this._children, d = r.allocate(), f = 0;f < b.length;f++) {
          var e = b[f];
          d.set(e.getLayerBounds(a));
          e.getTransformMatrix().transformRectangleAABB(d);
          c.union(d);
        }
        d.free();
        a && this._layer && this._layer.expandBounds(c);
        return c;
      };
      return c;
    }(p);
    q.Group = v;
    var d = function() {
      function d(c) {
        this._node = c;
        this._matrix = a.createIdentity();
        this._colorMatrix = q.ColorMatrix.createIdentity();
        this._concatenatedMatrix = a.createIdentity();
        this._invertedConcatenatedMatrix = a.createIdentity();
        this._concatenatedColorMatrix = q.ColorMatrix.createIdentity();
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
        null === this._colorMatrix && (this._colorMatrix = q.ColorMatrix.createIdentity());
        return a ? this._colorMatrix.clone() : this._colorMatrix;
      };
      d.prototype.getConcatenatedMatrix = function(c) {
        void 0 === c && (c = !1);
        if (this._node.hasFlags(512)) {
          for (var b = this._node._findClosestAncestor(512, !1), d = p._getAncestors(this._node, b), f = b ? b.getTransform()._concatenatedMatrix.clone() : a.createIdentity(), e = d.length - 1;0 <= e;e--) {
            var b = d[e], h = b.getTransform();
            f.preMultiply(h._matrix);
            h._concatenatedMatrix.set(f);
            b.removeFlags(512);
          }
        }
        return c ? this._concatenatedMatrix.clone() : this._concatenatedMatrix;
      };
      d.prototype.getInvertedConcatenatedMatrix = function(a) {
        void 0 === a && (a = !1);
        this._node.hasFlags(1024) && (this.getConcatenatedMatrix().inverse(this._invertedConcatenatedMatrix), this._node.removeFlags(1024));
        return a ? this._invertedConcatenatedMatrix.clone() : this._invertedConcatenatedMatrix;
      };
      d.prototype.toString = function() {
        return this._matrix.toString();
      };
      return d;
    }();
    q.Transform = d;
    var e = function() {
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
          for (var d = 0;d < b.length;d++) {
            b[d].expandBounds(a);
          }
        }
      };
      return a;
    }();
    q.Layer = e;
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
    }(p);
    q.Shape = h;
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
    t = function(b) {
      function c(a, d, e) {
        void 0 === e && (e = !1);
        b.call(this);
        this._preVisitor = new u;
        this._flags &= -3;
        this._type = 13;
        this._scaleMode = c.DEFAULT_SCALE;
        this._align = c.DEFAULT_ALIGN;
        this._content = new v;
        this._content._flags &= -3;
        this.addChild(this._content);
        this.setFlags(16);
        this.setBounds(new r(0, 0, a, d));
        e ? (this._dirtyRegion = new w(a, d), this._dirtyRegion.addDirtyRectangle(new r(0, 0, a, d))) : this._dirtyRegion = null;
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
        this._dirtyRegion && (this._dirtyRegion = new w(a.w, a.h), this._dirtyRegion.addDirtyRectangle(a));
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
          var b = this.getBounds(), d = this._content.getBounds(), f = b.w / d.w, e = b.h / d.h;
          switch(this._scaleMode) {
            case 2:
              f = e = Math.max(f, e);
              break;
            case 4:
              f = e = 1;
              break;
            case 1:
              break;
            default:
              f = e = Math.min(f, e);
          }
          var h;
          h = this._align & 4 ? 0 : this._align & 8 ? b.w - d.w * f : (b.w - d.w * f) / 2;
          b = this._align & 1 ? 0 : this._align & 2 ? b.h - d.h * e : (b.h - d.h * e) / 2;
          this._content.getTransform().setMatrix(new a(f, 0, 0, e, h, b));
        }
      };
      c.DEFAULT_SCALE = 4;
      c.DEFAULT_ALIGN = 5;
      return c;
    }(v);
    q.Stage = t;
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(q) {
    function r(a, c, b) {
      return a + (c - a) * b;
    }
    function a(a, c, b) {
      return r(a >> 24 & 255, c >> 24 & 255, b) << 24 | r(a >> 16 & 255, c >> 16 & 255, b) << 16 | r(a >> 8 & 255, c >> 8 & 255, b) << 8 | r(a & 255, c & 255, b);
    }
    function w(a, c, b) {
      a = a.measureText(c).width | 0;
      0 < b && (a += c.length * b);
      return a;
    }
    var l = q.Geometry.Point, b = q.Geometry.Rectangle, k = q.Geometry.Matrix, t = g.ArrayUtilities.indexOf, h = function(a) {
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
    q.Renderable = h;
    var n = function(a) {
      function c(c, b) {
        a.call(this);
        this.setBounds(c);
        this.render = b;
      }
      __extends(c, a);
      return c;
    }(h);
    q.CustomRenderable = n;
    (function(a) {
      a[a.Idle = 1] = "Idle";
      a[a.Playing = 2] = "Playing";
      a[a.Paused = 3] = "Paused";
      a[a.Ended = 4] = "Ended";
    })(q.RenderableVideoState || (q.RenderableVideoState = {}));
    n = function(a) {
      function c(d, e) {
        a.call(this);
        this._flags = 1048592;
        this._lastPausedTime = this._lastTimeInvalidated = 0;
        this._pauseHappening = this._seekHappening = !1;
        this._isDOMElement = !0;
        this.setBounds(new b(0, 0, 1, 1));
        this._assetId = d;
        this._eventSerializer = e;
        var h = document.createElement("video"), g = this._handleVideoEvent.bind(this);
        h.preload = "metadata";
        h.addEventListener("play", g);
        h.addEventListener("pause", g);
        h.addEventListener("ended", g);
        h.addEventListener("loadeddata", g);
        h.addEventListener("progress", g);
        h.addEventListener("suspend", g);
        h.addEventListener("loadedmetadata", g);
        h.addEventListener("error", g);
        h.addEventListener("seeking", g);
        h.addEventListener("seeked", g);
        h.addEventListener("canplay", g);
        h.style.position = "absolute";
        this._video = h;
        this._videoEventHandler = g;
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
    }(h);
    q.RenderableVideo = n;
    n = function(a) {
      function c(c, b) {
        a.call(this);
        this._flags = 1048592;
        this.properties = {};
        this.setBounds(b);
        c instanceof HTMLCanvasElement ? this._initializeSourceCanvas(c) : this._sourceImage = c;
      }
      __extends(c, a);
      c.FromDataBuffer = function(a, b, d) {
        var e = document.createElement("canvas");
        e.width = d.w;
        e.height = d.h;
        d = new c(e, d);
        d.updateFromDataBuffer(a, b);
        return d;
      };
      c.FromNode = function(a, b, d, e, f) {
        var h = document.createElement("canvas"), g = a.getBounds();
        h.width = g.w;
        h.height = g.h;
        h = new c(h, g);
        h.drawNode(a, b, d, e, f);
        return h;
      };
      c.FromImage = function(a, d, e) {
        return new c(a, new b(0, 0, d, e));
      };
      c.prototype.updateFromDataBuffer = function(a, c) {
        if (q.imageUpdateOption.value) {
          var b = c.buffer;
          if (4 !== a && 5 !== a && 6 !== a) {
            var d = this._bounds, e = this._imageData;
            e && e.width === d.w && e.height === d.h || (e = this._imageData = this._context.createImageData(d.w, d.h));
            q.imageConvertOption.value && (b = new Int32Array(b), d = new Int32Array(e.data.buffer), g.ColorUtilities.convertImage(a, 3, b, d));
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
        for (var c = this.imageData, b = new Int32Array(c.data.buffer), d = g.ColorUtilities.getUnpremultiplyTable(), e = 0;e < a.length;e++) {
          var f = a[e];
          if (0 === f) {
            b[e] = 0;
          } else {
            if (255 !== f) {
              var h = b[e], n = h >> 0 & 255, p = h >> 8 & 255, h = h >> 16 & 255, k = f << 8, n = d[k + Math.min(n, f)], p = d[k + Math.min(p, f)], h = d[k + Math.min(h, f)];
              b[e] = f << 24 | h << 16 | p << 8 | n;
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
    }(h);
    q.RenderableBitmap = n;
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
    var p = function() {
      return function(a, c, b, d, e) {
        this.thickness = a;
        this.scaleMode = c;
        this.capsStyle = b;
        this.jointsStyle = d;
        this.miterLimit = e;
      };
    }();
    q.StrokeProperties = p;
    var v = function(a) {
      function c(c, b, d, e) {
        a.call(this);
        this._flags = 6291472;
        this.properties = {};
        this.setBounds(e);
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
              var h = 1;
              f.strokeProperties && (h = f.strokeProperties.scaleMode, a.lineWidth = f.strokeProperties.thickness, a.lineCap = f.strokeProperties.capsStyle, a.lineJoin = f.strokeProperties.jointsStyle, a.miterLimit = f.strokeProperties.miterLimit);
              var g = a.lineWidth;
              (g = 1 === g || 3 === g) && a.translate(.5, .5);
              a.flashStroke(f.path, h);
              g && a.translate(-.5, -.5);
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
        var e = null, f = null, h = 0, n = 0, k, u, v = !1, l = 0, t = 0, q = a.commands, r = a.coordinates, w = a.styles, z = w.position = 0;
        a = a.commandsPosition;
        for (var B = 0;B < a;B++) {
          switch(q[B]) {
            case 9:
              v && e && (e.lineTo(l, t), f && f.lineTo(l, t));
              v = !0;
              h = l = r[z++] / 20;
              n = t = r[z++] / 20;
              e && e.moveTo(h, n);
              f && f.moveTo(h, n);
              break;
            case 10:
              h = r[z++] / 20;
              n = r[z++] / 20;
              e && e.lineTo(h, n);
              f && f.lineTo(h, n);
              break;
            case 11:
              k = r[z++] / 20;
              u = r[z++] / 20;
              h = r[z++] / 20;
              n = r[z++] / 20;
              e && e.quadraticCurveTo(k, u, h, n);
              f && f.quadraticCurveTo(k, u, h, n);
              break;
            case 12:
              k = r[z++] / 20;
              u = r[z++] / 20;
              var E = r[z++] / 20, A = r[z++] / 20, h = r[z++] / 20, n = r[z++] / 20;
              e && e.bezierCurveTo(k, u, E, A, h, n);
              f && f.bezierCurveTo(k, u, E, A, h, n);
              break;
            case 1:
              e = this._createPath(0, g.ColorUtilities.rgbaToCSSStyle(w.readUnsignedInt()), !1, null, h, n);
              break;
            case 3:
              k = this._readBitmap(w, b);
              e = this._createPath(0, k.style, k.smoothImage, null, h, n);
              break;
            case 2:
              e = this._createPath(0, this._readGradient(w, b), !1, null, h, n);
              break;
            case 4:
              e = null;
              break;
            case 5:
              f = g.ColorUtilities.rgbaToCSSStyle(w.readUnsignedInt());
              w.position += 1;
              k = w.readByte();
              u = c.LINE_CAPS_STYLES[w.readByte()];
              E = c.LINE_JOINTS_STYLES[w.readByte()];
              k = new p(r[z++] / 20, k, u, E, w.readByte());
              f = this._createPath(1, f, !1, k, h, n);
              break;
            case 6:
              f = this._createPath(2, this._readGradient(w, b), !1, null, h, n);
              break;
            case 7:
              k = this._readBitmap(w, b);
              f = this._createPath(2, k.style, k.smoothImage, null, h, n);
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
          var f = a.readUnsignedByte() / 255, h = g.ColorUtilities.rgbaToCSSStyle(a.readUnsignedInt());
          b.addColorStop(f, h);
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
        this.fillStyle || (this.fillStyle = g.ColorStyle.randomStyle());
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
    }(h);
    q.RenderableShape = v;
    n = function(b) {
      function c() {
        b.apply(this, arguments);
        this._flags = 7340048;
        this._morphPaths = Object.create(null);
      }
      __extends(c, b);
      c.prototype._deserializePaths = function(c, b, d) {
        if (this._morphPaths[d]) {
          return this._morphPaths[d];
        }
        var e = this._morphPaths[d] = [], f = null, h = null, n = 0, k = 0, u, l, t = !1, q = 0, w = 0, H = c.commands, D = c.coordinates, z = c.morphCoordinates, B = c.styles, E = c.morphStyles;
        B.position = 0;
        var A = E.position = 0;
        c = c.commandsPosition;
        for (var C = 0;C < c;C++) {
          switch(H[C]) {
            case 9:
              t && f && (f.lineTo(q, w), h && h.lineTo(q, w));
              t = !0;
              n = q = r(D[A], z[A++], d) / 20;
              k = w = r(D[A], z[A++], d) / 20;
              f && f.moveTo(n, k);
              h && h.moveTo(n, k);
              break;
            case 10:
              n = r(D[A], z[A++], d) / 20;
              k = r(D[A], z[A++], d) / 20;
              f && f.lineTo(n, k);
              h && h.lineTo(n, k);
              break;
            case 11:
              u = r(D[A], z[A++], d) / 20;
              l = r(D[A], z[A++], d) / 20;
              n = r(D[A], z[A++], d) / 20;
              k = r(D[A], z[A++], d) / 20;
              f && f.quadraticCurveTo(u, l, n, k);
              h && h.quadraticCurveTo(u, l, n, k);
              break;
            case 12:
              u = r(D[A], z[A++], d) / 20;
              l = r(D[A], z[A++], d) / 20;
              var F = r(D[A], z[A++], d) / 20, G = r(D[A], z[A++], d) / 20, n = r(D[A], z[A++], d) / 20, k = r(D[A], z[A++], d) / 20;
              f && f.bezierCurveTo(u, l, F, G, n, k);
              h && h.bezierCurveTo(u, l, F, G, n, k);
              break;
            case 1:
              f = this._createMorphPath(0, d, g.ColorUtilities.rgbaToCSSStyle(a(B.readUnsignedInt(), E.readUnsignedInt(), d)), !1, null, n, k);
              break;
            case 3:
              u = this._readMorphBitmap(B, E, d, b);
              f = this._createMorphPath(0, d, u.style, u.smoothImage, null, n, k);
              break;
            case 2:
              u = this._readMorphGradient(B, E, d, b);
              f = this._createMorphPath(0, d, u, !1, null, n, k);
              break;
            case 4:
              f = null;
              break;
            case 5:
              u = r(D[A], z[A++], d) / 20;
              h = g.ColorUtilities.rgbaToCSSStyle(a(B.readUnsignedInt(), E.readUnsignedInt(), d));
              B.position += 1;
              l = B.readByte();
              F = v.LINE_CAPS_STYLES[B.readByte()];
              G = v.LINE_JOINTS_STYLES[B.readByte()];
              u = new p(u, l, F, G, B.readByte());
              h = this._createMorphPath(1, d, h, !1, u, n, k);
              break;
            case 6:
              u = this._readMorphGradient(B, E, d, b);
              h = this._createMorphPath(2, d, u, !1, null, n, k);
              break;
            case 7:
              u = this._readMorphBitmap(B, E, d, b);
              h = this._createMorphPath(2, d, u.style, u.smoothImage, null, n, k);
              break;
            case 8:
              h = null;
          }
        }
        t && f && (f.lineTo(q, w), h && h.lineTo(q, w));
        return e;
      };
      c.prototype._createMorphPath = function(a, c, b, d, e, f, h) {
        a = new u(a, b, d, e);
        this._morphPaths[c].push(a);
        a.path.moveTo(f, h);
        return a.path;
      };
      c.prototype._readMorphMatrix = function(a, c, b) {
        return new k(r(a.readFloat(), c.readFloat(), b), r(a.readFloat(), c.readFloat(), b), r(a.readFloat(), c.readFloat(), b), r(a.readFloat(), c.readFloat(), b), r(a.readFloat(), c.readFloat(), b), r(a.readFloat(), c.readFloat(), b));
      };
      c.prototype._readMorphGradient = function(c, b, d, e) {
        var f = c.readUnsignedByte(), h = 2 * c.readShort() / 255, n = this._readMorphMatrix(c, b, d);
        e = 16 === f ? e.createLinearGradient(-1, 0, 1, 0) : e.createRadialGradient(h, 0, 0, 0, 0, 1);
        e.setTransform && e.setTransform(n.toSVGMatrix());
        n = c.readUnsignedByte();
        for (f = 0;f < n;f++) {
          var h = r(c.readUnsignedByte() / 255, b.readUnsignedByte() / 255, d), p = a(c.readUnsignedInt(), b.readUnsignedInt(), d), p = g.ColorUtilities.rgbaToCSSStyle(p);
          e.addColorStop(h, p);
        }
        c.position += 2;
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
    q.RenderableMorphShape = n;
    var d = function() {
      function a() {
        this.align = this.leading = this.descent = this.ascent = this.width = this.y = this.x = 0;
        this.runs = [];
      }
      a._getMeasureContext = function() {
        a._measureContext || (a._measureContext = document.createElement("canvas").getContext("2d"));
        return a._measureContext;
      };
      a.prototype.addRun = function(c, b, d, h, g) {
        if (d) {
          var n = a._getMeasureContext();
          n.font = c;
          n = w(n, d, h);
          this.runs.push(new e(c, b, d, n, h, g));
          this.width += n;
        }
      };
      a.prototype.wrap = function(c) {
        var b = [this], d = this.runs, h = this;
        h.width = 0;
        h.runs = [];
        for (var g = a._getMeasureContext(), n = 0;n < d.length;n++) {
          var p = d[n], k = p.text;
          p.text = "";
          p.width = 0;
          g.font = p.font;
          for (var u = c, v = k.split(/[\s.-]/), l = 0, t = 0;t < v.length;t++) {
            var q = v[t], r = k.substr(l, q.length + 1), H = p.letterSpacing, D = w(g, r, H);
            if (D > u) {
              do {
                if (p.text && (h.runs.push(p), h.width += p.width, p = new e(p.font, p.fillStyle, "", 0, p.letterSpacing, p.underline), u = new a, u.y = h.y + h.descent + h.leading + h.ascent | 0, u.ascent = h.ascent, u.descent = h.descent, u.leading = h.leading, u.align = h.align, b.push(u), h = u), u = c - D, 0 > u) {
                  for (var z = r.length, B = r;1 < z && !(z--, B = r.substr(0, z), D = w(g, B, H), D <= c);) {
                  }
                  p.text = B;
                  p.width = D;
                  r = r.substr(z);
                  D = w(g, r, H);
                }
              } while (r && 0 > u);
            } else {
              u -= D;
            }
            p.text += r;
            p.width += D;
            l += q.length + 1;
          }
          h.runs.push(p);
          h.width += p.width;
        }
        return b;
      };
      a.prototype.toString = function() {
        return "TextLine {x: " + this.x + ", y: " + this.y + ", width: " + this.width + ", height: " + (this.ascent + this.descent + this.leading) + "}";
      };
      return a;
    }();
    q.TextLine = d;
    var e = function() {
      return function(a, c, b, d, e, h) {
        void 0 === a && (a = "");
        void 0 === c && (c = "");
        void 0 === b && (b = "");
        void 0 === d && (d = 0);
        void 0 === e && (e = 0);
        void 0 === h && (h = !1);
        this.font = a;
        this.fillStyle = c;
        this.text = b;
        this.width = d;
        this.letterSpacing = e;
        this.underline = h;
      };
    }();
    q.TextRun = e;
    n = function(a) {
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
          for (var e = this._bounds, f = e.w - 4, h = this._plainText, n = this.lines, p = new d, k = 0, u = 0, v = 0, l = 0, t = -4294967295, q = -1;b.position < b.length;) {
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
            E = g.ColorUtilities.rgbToHex(E);
            A = b.readInt();
            -1 === q && (q = A);
            b.readBoolean();
            b.readInt();
            b.readInt();
            b.readInt();
            A = b.readInt();
            b.readInt();
            for (var C = b.readBoolean(), G = "", F = !1;!F;r++) {
              var F = r >= w - 1, K = h[r];
              if ("\r" !== K && "\n" !== K && (G += K, r < h.length - 1)) {
                continue;
              }
              p.addRun(B, E, G, A, C);
              if (p.runs.length) {
                n.length && (k += t);
                k += v;
                p.y = k | 0;
                k += l;
                p.ascent = v;
                p.descent = l;
                p.leading = t;
                p.align = q;
                if (c && p.width > f) {
                  for (p = p.wrap(f), G = 0;G < p.length;G++) {
                    var I = p[G], k = I.y + I.descent + I.leading;
                    n.push(I);
                    I.width > u && (u = I.width);
                  }
                } else {
                  n.push(p), p.width > u && (u = p.width);
                }
                p = new d;
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
              "\r" === K && "\n" === h[r + 1] && r++;
            }
            p.addRun(B, E, G, A, C);
          }
          b = h[h.length - 1];
          "\r" !== b && "\n" !== b || n.push(p);
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
          for (r = 0;r < n.length;r++) {
            if (e = n[r], e.width < f) {
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
        this._backgroundColor && (a.fillStyle = g.ColorUtilities.rgbaToCSSStyle(this._backgroundColor), a.fillRect(b.x, b.y, b.w, b.h));
        if (this._borderColor) {
          a.strokeStyle = g.ColorUtilities.rgbaToCSSStyle(this._borderColor);
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
          for (var h = c[f].runs, g = 0;g < h.length;g++) {
            var n = h[g];
            n.font !== d && (a.font = d = n.font);
            n.fillStyle !== e && (a.fillStyle = e = n.fillStyle);
            for (var n = n.text, p = 0;p < n.length;p++) {
              var k = b.readInt() / 20, u = b.readInt() / 20;
              a.fillText(n[p], k, u);
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
        var b = this.lines, d = this._scrollV, e = 0, f = "", h = "";
        a.textAlign = "left";
        a.textBaseline = "alphabetic";
        for (var g = 0;g < b.length;g++) {
          var n = b[g], p = n.x, k = n.y;
          if (g + 1 < d) {
            e = k + n.descent + n.leading;
          } else {
            k -= e;
            if (g + 1 - d && k > c.h) {
              break;
            }
            for (var u = n.runs, v = 0;v < u.length;v++) {
              var l = u[v];
              l.font !== f && (a.font = f = l.font);
              l.fillStyle !== h && (a.fillStyle = h = l.fillStyle);
              l.underline && a.fillRect(p, k + n.descent / 2 | 0, l.width, 1);
              a.textAlign = "left";
              a.textBaseline = "alphabetic";
              if (0 < l.letterSpacing) {
                for (var t = l.text, q = 0;q < t.length;q++) {
                  a.fillText(t[q], p, k), p += w(a, t[q], l.letterSpacing);
                }
              } else {
                a.fillText(l.text, p, k), p += l.width;
              }
            }
          }
        }
      };
      c.absoluteBoundPoints = [new l(0, 0), new l(0, 0), new l(0, 0), new l(0, 0)];
      return c;
    }(h);
    q.RenderableText = n;
    h = function(a) {
      function c(c, d) {
        a.call(this);
        this._flags = 3145728;
        this.properties = {};
        this.setBounds(new b(0, 0, c, d));
      }
      __extends(c, a);
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
    }(h);
    q.Label = h;
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(q) {
    function r(a, b, h, g, u) {
      b = l[b - 1];
      u && (u = b / 4, h -= u, g -= u);
      u = Math.ceil((1 > h ? 1 : h) / (b - 1E-9));
      b = Math.ceil((1 > g ? 1 : g) / (b - 1E-9));
      a.x -= u;
      a.w += 2 * u;
      a.y -= b;
      a.h += 2 * b;
    }
    var a = g.ColorUtilities.clampByte, w = function() {
      function a() {
      }
      a.prototype.expandBounds = function(a) {
      };
      return a;
    }();
    q.Filter = w;
    var l = [2, 1 / 1.05, 1 / 1.35, 1 / 1.55, 1 / 1.75, 1 / 1.9, .5, 1 / 2.1, 1 / 2.2, 1 / 2.3, .4, 1 / 3, 1 / 3, 1 / 3.5, 1 / 3.5], b = function(a) {
      function b(h, g, u) {
        a.call(this);
        this.blurX = h;
        this.blurY = g;
        this.quality = u;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        r(a, this.quality, this.blurX, this.blurY, !0);
      };
      return b;
    }(w);
    q.BlurFilter = b;
    b = function(a) {
      function b(h, g, u, p, v, d, e, f, c, m, l) {
        a.call(this);
        this.alpha = h;
        this.angle = g;
        this.blurX = u;
        this.blurY = p;
        this.color = v;
        this.distance = d;
        this.hideObject = e;
        this.inner = f;
        this.knockout = c;
        this.quality = m;
        this.strength = l;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        if (!this.inner && (r(a, this.quality, this.blurX, this.blurY, !1), this.distance)) {
          var b = this.angle * Math.PI / 180, g = Math.cos(b) * this.distance, p = Math.sin(b) * this.distance, b = a.x + (0 <= g ? 0 : Math.floor(g)), g = a.x + a.w + Math.ceil(Math.abs(g)), k = a.y + (0 <= p ? 0 : Math.floor(p)), p = a.y + a.h + Math.ceil(Math.abs(p));
          a.x = b;
          a.w = g - b;
          a.y = k;
          a.h = p - k;
        }
      };
      return b;
    }(w);
    q.DropshadowFilter = b;
    b = function(a) {
      function b(h, g, u, p, v, d, e, f) {
        a.call(this);
        this.alpha = h;
        this.blurX = g;
        this.blurY = u;
        this.color = p;
        this.inner = v;
        this.knockout = d;
        this.quality = e;
        this.strength = f;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        this.inner || r(a, this.quality, this.blurX, this.blurY, !1);
      };
      return b;
    }(w);
    q.GlowFilter = b;
    (function(a) {
      a[a.Unknown = 0] = "Unknown";
      a[a.Identity = 1] = "Identity";
    })(q.ColorMatrixType || (q.ColorMatrixType = {}));
    w = function(b) {
      function g(a) {
        b.call(this);
        this._data = new Float32Array(a);
        this._type = 0;
      }
      __extends(g, b);
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
      g.prototype.setMultipliersAndOffsets = function(a, b, g, p, k, d, e, f) {
        for (var c = this._data, m = 0;m < c.length;m++) {
          c[m] = 0;
        }
        c[0] = a;
        c[5] = b;
        c[10] = g;
        c[15] = p;
        c[16] = k / 255;
        c[17] = d / 255;
        c[18] = e / 255;
        c[19] = f / 255;
        this._type = 0;
      };
      g.prototype.transformRGBA = function(b) {
        var g = b >> 24 & 255, k = b >> 16 & 255, p = b >> 8 & 255, v = b & 255, d = this._data;
        b = a(g * d[0] + k * d[1] + p * d[2] + v * d[3] + 255 * d[16]);
        var e = a(g * d[4] + k * d[5] + p * d[6] + v * d[7] + 255 * d[17]), f = a(g * d[8] + k * d[9] + p * d[10] + v * d[11] + 255 * d[18]), g = a(g * d[12] + k * d[13] + p * d[14] + v * d[15] + 255 * d[19]);
        return b << 24 | e << 16 | f << 8 | g;
      };
      g.prototype.multiply = function(a) {
        if (!(a._type & 1)) {
          var b = this._data, g = a._data;
          a = b[0];
          var p = b[1], k = b[2], d = b[3], e = b[4], f = b[5], c = b[6], m = b[7], l = b[8], t = b[9], q = b[10], r = b[11], w = b[12], T = b[13], U = b[14], W = b[15], ha = b[16], ia = b[17], ja = b[18], X = b[19], H = g[0], D = g[1], z = g[2], B = g[3], E = g[4], A = g[5], C = g[6], F = g[7], G = g[8], K = g[9], I = g[10], L = g[11], M = g[12], N = g[13], O = g[14], P = g[15], Q = g[16], R = g[17], S = g[18], g = g[19];
          b[0] = a * H + e * D + l * z + w * B;
          b[1] = p * H + f * D + t * z + T * B;
          b[2] = k * H + c * D + q * z + U * B;
          b[3] = d * H + m * D + r * z + W * B;
          b[4] = a * E + e * A + l * C + w * F;
          b[5] = p * E + f * A + t * C + T * F;
          b[6] = k * E + c * A + q * C + U * F;
          b[7] = d * E + m * A + r * C + W * F;
          b[8] = a * G + e * K + l * I + w * L;
          b[9] = p * G + f * K + t * I + T * L;
          b[10] = k * G + c * K + q * I + U * L;
          b[11] = d * G + m * K + r * I + W * L;
          b[12] = a * M + e * N + l * O + w * P;
          b[13] = p * M + f * N + t * O + T * P;
          b[14] = k * M + c * N + q * O + U * P;
          b[15] = d * M + m * N + r * O + W * P;
          b[16] = a * Q + e * R + l * S + w * g + ha;
          b[17] = p * Q + f * R + t * S + T * g + ia;
          b[18] = k * Q + c * R + q * S + U * g + ja;
          b[19] = d * Q + m * R + r * S + W * g + X;
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
    q.ColorMatrix = w;
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(q) {
    (function(r) {
      function a(a, b) {
        return -1 !== a.indexOf(b, this.length - b.length);
      }
      var w = q.Geometry.Point3D, l = q.Geometry.Matrix3D, b = q.Geometry.degreesToRadian, k = g.Debug.unexpected, t = g.Debug.notImplemented;
      r.SHADER_ROOT = "shaders/";
      var h = function() {
        function h(a, b) {
          this._fillColor = g.Color.Red;
          this._surfaceRegionCache = new g.LRUList;
          this.modelViewProjectionMatrix = l.createIdentity();
          this._canvas = a;
          this._options = b;
          this.gl = a.getContext("experimental-webgl", {preserveDrawingBuffer:!1, antialias:!0, stencil:!0, premultipliedAlpha:!1});
          this._programCache = Object.create(null);
          this._resize();
          this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, b.unpackPremultiplyAlpha ? this.gl.ONE : this.gl.ZERO);
          this._backgroundColor = g.Color.Black;
          this._geometry = new r.WebGLGeometry(this);
          this._tmpVertices = r.Vertex.createEmptyVertices(r.Vertex, 64);
          this._maxSurfaces = b.maxSurfaces;
          this._maxSurfaceSize = b.maxSurfaceSize;
          this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
          this.gl.enable(this.gl.BLEND);
          this.modelViewProjectionMatrix = l.create2DProjection(this._w, this._h, 2E3);
          var n = this;
          this._surfaceRegionAllocator = new q.SurfaceRegionAllocator.SimpleAllocator(function() {
            var a = n._createTexture(1024, 1024);
            return new r.WebGLSurface(1024, 1024, a);
          });
        }
        Object.defineProperty(h.prototype, "surfaces", {get:function() {
          return this._surfaceRegionAllocator.surfaces;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(h.prototype, "fillStyle", {set:function(a) {
          this._fillColor.set(g.Color.parseColor(a));
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
              t("Blend Mode: " + a);
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
          return l.create2DProjection(this._w, this._h, -this._w);
        };
        h.prototype.createPerspectiveMatrix = function(a, h, g) {
          g = b(g);
          h = l.createPerspective(b(h), 1, .1, 5E3);
          var d = new w(0, 1, 0), e = new w(0, 0, 0);
          a = new w(0, 0, a);
          a = l.createCameraLookAt(a, e, d);
          a = l.createInverse(a);
          d = l.createIdentity();
          d = l.createMultiply(d, l.createTranslation(-this._w / 2, -this._h / 2, 0));
          d = l.createMultiply(d, l.createScale(1 / this._w, -1 / this._h, .01));
          d = l.createMultiply(d, l.createYRotation(g));
          d = l.createMultiply(d, a);
          return d = l.createMultiply(d, h);
        };
        h.prototype.discardCachedImages = function() {
          2 <= q.traceLevel && q.writer && q.writer.writeLn("Discard Cache");
          for (var a = this._surfaceRegionCache.count / 2 | 0, b = 0;b < a;b++) {
            var h = this._surfaceRegionCache.pop();
            2 <= q.traceLevel && q.writer && q.writer.writeLn("Discard: " + h);
            h.texture.atlas.remove(h.region);
            h.texture = null;
          }
        };
        h.prototype.cacheImage = function(a) {
          var b = this.allocateSurfaceRegion(a.width, a.height);
          2 <= q.traceLevel && q.writer && q.writer.writeLn("Uploading Image: @ " + b.region);
          this._surfaceRegionCache.use(b);
          this.updateSurfaceRegion(a, b);
          return b;
        };
        h.prototype.allocateSurfaceRegion = function(a, b, h) {
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
        h.prototype._createShaderFromFile = function(b) {
          var h = r.SHADER_ROOT + b, g = this.gl;
          b = new XMLHttpRequest;
          b.open("GET", h, !1);
          b.send();
          if (a(h, ".vert")) {
            h = g.VERTEX_SHADER;
          } else {
            if (a(h, ".frag")) {
              h = g.FRAGMENT_SHADER;
            } else {
              throw "Shader Type: not supported.";
            }
          }
          return this._createShader(h, b.responseText);
        };
        h.prototype.createProgramFromFiles = function(a, b) {
          var h = a + "-" + b, d = this._programCache[h];
          d || (d = this._createProgram([this._createShaderFromFile(a), this._createShaderFromFile(b)]), this._queryProgramAttributesAndUniforms(d), this._initializeProgram(d), this._programCache[h] = d);
          return d;
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
        h.prototype._createTexture = function(a, b) {
          var h = this.gl, d = h.createTexture();
          h.bindTexture(h.TEXTURE_2D, d);
          h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE);
          h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE);
          h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.LINEAR);
          h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, h.LINEAR);
          h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, a, b, 0, h.RGBA, h.UNSIGNED_BYTE, null);
          return d;
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
            var e = b.getActiveAttrib(a, h);
            a.attributes[e.name] = e;
            e.location = b.getAttribLocation(a, e.name);
          }
          h = 0;
          for (d = b.getProgramParameter(a, b.ACTIVE_UNIFORMS);h < d;h++) {
            e = b.getActiveUniform(a, h), a.uniforms[e.name] = e, e.location = b.getUniformLocation(a, e.name);
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
          void 0 === b && (b = g.Color.None);
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
              t(a);
          }
        };
        h.MAX_SURFACES = 8;
        return h;
      }();
      r.WebGLContext = h;
    })(q.WebGL || (q.WebGL = {}));
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(g, q) {
  function r() {
    this.constructor = g;
  }
  for (var a in q) {
    q.hasOwnProperty(a) && (g[a] = q[a]);
  }
  r.prototype = q.prototype;
  g.prototype = new r;
};
(function(g) {
  (function(q) {
    (function(r) {
      var a = g.Debug.assert, w = function(b) {
        function g() {
          b.apply(this, arguments);
        }
        __extends(g, b);
        g.prototype.ensureVertexCapacity = function(b) {
          a(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 8 * b);
        };
        g.prototype.writeVertex = function(b, h) {
          a(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 8);
          this.writeVertexUnsafe(b, h);
        };
        g.prototype.writeVertexUnsafe = function(a, b) {
          var g = this._offset >> 2;
          this._f32[g] = a;
          this._f32[g + 1] = b;
          this._offset += 8;
        };
        g.prototype.writeVertex3D = function(b, h, g) {
          a(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 12);
          this.writeVertex3DUnsafe(b, h, g);
        };
        g.prototype.writeVertex3DUnsafe = function(a, b, g) {
          var k = this._offset >> 2;
          this._f32[k] = a;
          this._f32[k + 1] = b;
          this._f32[k + 2] = g;
          this._offset += 12;
        };
        g.prototype.writeTriangleElements = function(b, h, g) {
          a(0 === (this._offset & 1));
          this.ensureCapacity(this._offset + 6);
          var k = this._offset >> 1;
          this._u16[k] = b;
          this._u16[k + 1] = h;
          this._u16[k + 2] = g;
          this._offset += 6;
        };
        g.prototype.ensureColorCapacity = function(b) {
          a(0 === (this._offset & 2));
          this.ensureCapacity(this._offset + 16 * b);
        };
        g.prototype.writeColorFloats = function(b, h, g, k) {
          a(0 === (this._offset & 2));
          this.ensureCapacity(this._offset + 16);
          this.writeColorFloatsUnsafe(b, h, g, k);
        };
        g.prototype.writeColorFloatsUnsafe = function(a, b, g, k) {
          var p = this._offset >> 2;
          this._f32[p] = a;
          this._f32[p + 1] = b;
          this._f32[p + 2] = g;
          this._f32[p + 3] = k;
          this._offset += 16;
        };
        g.prototype.writeColor = function(b, h, g, k) {
          a(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 4);
          this._i32[this._offset >> 2] = k << 24 | g << 16 | h << 8 | b;
          this._offset += 4;
        };
        g.prototype.writeColorUnsafe = function(a, b, g, k) {
          this._i32[this._offset >> 2] = k << 24 | g << 16 | b << 8 | a;
          this._offset += 4;
        };
        g.prototype.writeRandomColor = function() {
          this.writeColor(Math.random(), Math.random(), Math.random(), Math.random() / 2);
        };
        return g;
      }(g.ArrayUtilities.ArrayWriter);
      r.BufferWriter = w;
      r.WebGLAttribute = function() {
        return function(a, g, l, h) {
          void 0 === h && (h = !1);
          this.name = a;
          this.size = g;
          this.type = l;
          this.normalized = h;
        };
      }();
      var l = function() {
        function a(b) {
          this.size = 0;
          this.attributes = b;
        }
        a.prototype.initialize = function(a) {
          for (var b = 0, h = 0;h < this.attributes.length;h++) {
            this.attributes[h].offset = b, b += a.sizeOf(this.attributes[h].type) * this.attributes[h].size;
          }
          this.size = b;
        };
        return a;
      }();
      r.WebGLAttributeList = l;
      l = function() {
        function a(b) {
          this._elementOffset = this.triangleCount = 0;
          this.context = b;
          this.array = new w(8);
          this.buffer = b.gl.createBuffer();
          this.elementArray = new w(8);
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
      r.WebGLGeometry = l;
      l = function(a) {
        function g(k, h, n) {
          a.call(this, k, h, n);
        }
        __extends(g, a);
        g.createEmptyVertices = function(a, b) {
          for (var g = [], k = 0;k < b;k++) {
            g.push(new a(0, 0, 0));
          }
          return g;
        };
        return g;
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
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(g) {
    (function(r) {
      var a = function() {
        function a(b, k, l) {
          this.texture = l;
          this.w = b;
          this.h = k;
          this._regionAllocator = new g.RegionAllocator.CompactAllocator(this.w, this.h);
        }
        a.prototype.allocate = function(a, g) {
          var l = this._regionAllocator.allocate(a, g);
          return l ? new w(this, l) : null;
        };
        a.prototype.free = function(a) {
          this._regionAllocator.free(a.region);
        };
        return a;
      }();
      r.WebGLSurface = a;
      var w = function() {
        return function(a, b) {
          this.surface = a;
          this.region = b;
          this.next = this.previous = null;
        };
      }();
      r.WebGLSurfaceRegion = w;
    })(g.WebGL || (g.WebGL = {}));
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(q) {
    (function(r) {
      var a = g.Color;
      r.TILE_SIZE = 256;
      r.MIN_UNTILED_SIZE = 256;
      var w = q.Geometry.Matrix, l = q.Geometry.Rectangle, b = function(a) {
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
      r.WebGLRendererOptions = b;
      var k = function(g) {
        function h(a, h, p) {
          void 0 === p && (p = new b);
          g.call(this, a, h, p);
          this._tmpVertices = r.Vertex.createEmptyVertices(r.Vertex, 64);
          this._cachedTiles = [];
          a = this._context = new r.WebGLContext(this._canvas, p);
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
          p.showTemporaryCanvases && (document.getElementById("temporaryCanvasPanelContainer").appendChild(this._uploadCanvas), document.getElementById("temporaryCanvasPanelContainer").appendChild(this._scratchCanvas));
          this._clipStack = [];
        }
        __extends(h, g);
        h.prototype.resize = function() {
          this._updateSize();
          this.render();
        };
        h.prototype._updateSize = function() {
          this._viewport = new l(0, 0, this._canvas.width, this._canvas.height);
          this._context._resize();
        };
        h.prototype._cacheImageCallback = function(a, b, h) {
          var g = h.w, d = h.h, e = h.x;
          h = h.y;
          this._uploadCanvas.width = g + 2;
          this._uploadCanvas.height = d + 2;
          this._uploadCanvasContext.drawImage(b.canvas, e, h, g, d, 1, 1, g, d);
          this._uploadCanvasContext.drawImage(b.canvas, e, h, g, 1, 1, 0, g, 1);
          this._uploadCanvasContext.drawImage(b.canvas, e, h + d - 1, g, 1, 1, d + 1, g, 1);
          this._uploadCanvasContext.drawImage(b.canvas, e, h, 1, d, 0, 1, 1, d);
          this._uploadCanvasContext.drawImage(b.canvas, e + g - 1, h, 1, d, g + 1, 1, 1, d);
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
        h.prototype._renderFrame = function(a, b, h, g, d) {
        };
        h.prototype._renderSurfaces = function(b) {
          var h = this._options, g = this._context, k = this._viewport;
          if (h.drawSurfaces) {
            var d = g.surfaces, g = w.createIdentity();
            if (0 <= h.drawSurface && h.drawSurface < d.length) {
              for (var h = d[h.drawSurface | 0], d = new l(0, 0, h.w, h.h), e = d.clone();e.w > k.w;) {
                e.scale(.5, .5);
              }
              b.drawImage(new r.WebGLSurfaceRegion(h, d), e, a.White, null, g, .2);
            } else {
              e = k.w / 5;
              e > k.h / d.length && (e = k.h / d.length);
              b.fillRectangle(new l(k.w - e, 0, e, k.h), new a(0, 0, 0, .5), g, .1);
              for (var f = 0;f < d.length;f++) {
                var h = d[f], c = new l(k.w - e, f * e, e, e);
                b.drawImage(new r.WebGLSurfaceRegion(h, new l(0, 0, h.w, h.h)), c, a.White, null, g, .2);
              }
            }
            b.flush();
          }
        };
        h.prototype.render = function() {
          var b = this._options, h = this._context.gl;
          this._context.modelViewProjectionMatrix = b.perspectiveCamera ? this._context.createPerspectiveMatrix(b.perspectiveCameraDistance + (b.animateZoom ? .8 * Math.sin(Date.now() / 3E3) : 0), b.perspectiveCameraFOV, b.perspectiveCameraAngle) : this._context.create2DProjectionMatrix();
          var g = this._brush;
          h.clearColor(0, 0, 0, 0);
          h.clear(h.COLOR_BUFFER_BIT | h.DEPTH_BUFFER_BIT);
          g.reset();
          h = this._viewport;
          g.flush();
          b.paintViewport && (g.fillRectangle(h, new a(.5, 0, 0, .25), w.createIdentity(), 0), g.flush());
          this._renderSurfaces(g);
        };
        return h;
      }(q.Renderer);
      r.WebGLRenderer = k;
    })(q.WebGL || (q.WebGL = {}));
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(q) {
    (function(r) {
      var a = g.Color, w = q.Geometry.Point, l = q.Geometry.Matrix3D, b = function() {
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
      r.WebGLBrush = b;
      (function(a) {
        a[a.FillColor = 0] = "FillColor";
        a[a.FillTexture = 1] = "FillTexture";
        a[a.FillTextureWithColorMatrix = 2] = "FillTextureWithColorMatrix";
      })(r.WebGLCombinedBrushKind || (r.WebGLCombinedBrushKind = {}));
      var k = function(b) {
        function h(h, g, k) {
          b.call(this, h, g, k);
          this.kind = 0;
          this.color = new a(0, 0, 0, 0);
          this.sampler = 0;
          this.coordinate = new w(0, 0);
        }
        __extends(h, b);
        h.initializeAttributeList = function(a) {
          var b = a.gl;
          h.attributeList || (h.attributeList = new r.WebGLAttributeList([new r.WebGLAttribute("aPosition", 3, b.FLOAT), new r.WebGLAttribute("aCoordinate", 2, b.FLOAT), new r.WebGLAttribute("aColor", 4, b.UNSIGNED_BYTE, !0), new r.WebGLAttribute("aKind", 1, b.FLOAT), new r.WebGLAttribute("aSampler", 1, b.FLOAT)]), h.attributeList.initialize(a));
        };
        h.prototype.writeTo = function(a) {
          a = a.array;
          a.ensureAdditionalCapacity(68);
          a.writeVertex3DUnsafe(this.x, this.y, this.z);
          a.writeVertexUnsafe(this.coordinate.x, this.coordinate.y);
          a.writeColorUnsafe(255 * this.color.r, 255 * this.color.g, 255 * this.color.b, 255 * this.color.a);
          a.writeFloatUnsafe(this.kind);
          a.writeFloatUnsafe(this.sampler);
        };
        return h;
      }(r.Vertex);
      r.WebGLCombinedBrushVertex = k;
      b = function(a) {
        function b(h, g, p) {
          void 0 === p && (p = null);
          a.call(this, h, g, p);
          this._blendMode = 1;
          this._program = h.createProgramFromFiles("combined.vert", "combined.frag");
          this._surfaces = [];
          k.initializeAttributeList(this._context);
        }
        __extends(b, a);
        b.prototype.reset = function() {
          this._surfaces = [];
          this._geometry.reset();
        };
        b.prototype.drawImage = function(a, g, k, l, d, e, f) {
          void 0 === e && (e = 0);
          void 0 === f && (f = 1);
          if (!a || !a.surface) {
            return !0;
          }
          g = g.clone();
          this._colorMatrix && (l && this._colorMatrix.equals(l) || this.flush());
          this._colorMatrix = l;
          this._blendMode !== f && (this.flush(), this._blendMode = f);
          f = this._surfaces.indexOf(a.surface);
          0 > f && (8 === this._surfaces.length && this.flush(), this._surfaces.push(a.surface), f = this._surfaces.length - 1);
          var c = b._tmpVertices, m = a.region.clone();
          m.offset(1, 1).resize(-2, -2);
          m.scale(1 / a.surface.w, 1 / a.surface.h);
          d.transformRectangle(g, c);
          for (a = 0;4 > a;a++) {
            c[a].z = e;
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
            e = b._tmpVertices[a], e.kind = l ? 2 : 1, e.color.set(k), e.sampler = f, e.writeTo(this._geometry);
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
          var a = this._geometry, b = this._program, h = this._context.gl, g;
          a.uploadBuffers();
          h.useProgram(b);
          this._target ? (g = l.create2DProjection(this._target.w, this._target.h, 2E3), g = l.createMultiply(g, l.createScale(1, -1, 1))) : g = this._context.modelViewProjectionMatrix;
          h.uniformMatrix4fv(b.uniforms.uTransformMatrix3D.location, !1, g.asWebGLMatrix());
          this._colorMatrix && (h.uniformMatrix4fv(b.uniforms.uColorMatrix.location, !1, this._colorMatrix.asWebGLMatrix()), h.uniform4fv(b.uniforms.uColorVector.location, this._colorMatrix.asWebGLVector()));
          for (g = 0;g < this._surfaces.length;g++) {
            h.activeTexture(h.TEXTURE0 + g), h.bindTexture(h.TEXTURE_2D, this._surfaces[g].texture);
          }
          h.uniform1iv(b.uniforms["uSampler[0]"].location, [0, 1, 2, 3, 4, 5, 6, 7]);
          h.bindBuffer(h.ARRAY_BUFFER, a.buffer);
          var d = k.attributeList.size, e = k.attributeList.attributes;
          for (g = 0;g < e.length;g++) {
            var f = e[g], c = b.attributes[f.name].location;
            h.enableVertexAttribArray(c);
            h.vertexAttribPointer(c, f.size, f.type, f.normalized, d, f.offset);
          }
          this._context.setBlendOptions();
          this._context.target = this._target;
          h.bindBuffer(h.ELEMENT_ARRAY_BUFFER, a.elementBuffer);
          h.drawElements(h.TRIANGLES, 3 * a.triangleCount, h.UNSIGNED_SHORT, 0);
          this.reset();
        };
        b._tmpVertices = r.Vertex.createEmptyVertices(k, 4);
        b._depth = 1;
        return b;
      }(b);
      r.WebGLCombinedBrush = b;
    })(q.WebGL || (q.WebGL = {}));
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(g) {
    (function(g) {
      var a = CanvasRenderingContext2D.prototype.save, q = CanvasRenderingContext2D.prototype.clip, l = CanvasRenderingContext2D.prototype.fill, b = CanvasRenderingContext2D.prototype.stroke, k = CanvasRenderingContext2D.prototype.restore, t = CanvasRenderingContext2D.prototype.beginPath;
      g.notifyReleaseChanged = function() {
        CanvasRenderingContext2D.prototype.save = a;
        CanvasRenderingContext2D.prototype.clip = q;
        CanvasRenderingContext2D.prototype.fill = l;
        CanvasRenderingContext2D.prototype.stroke = b;
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
    })(g.Canvas2D || (g.Canvas2D = {}));
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(q) {
    (function(r) {
      function a(a, b) {
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
            g.Debug.somewhatImplemented("Blend Mode: " + q.BlendMode[a]);
        }
        return b;
      }
      var l = g.NumberUtilities.clamp;
      navigator.userAgent.indexOf("Firefox");
      var b = function() {
        function b() {
        }
        b._prepareSVGFilters = function() {
          if (!b._svgBlurFilter) {
            var a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            a.setAttribute("style", "display:block;width:0px;height:0px");
            var g = document.createElementNS("http://www.w3.org/2000/svg", "defs"), k = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            k.setAttribute("id", "svgBlurFilter");
            var l = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
            l.setAttribute("stdDeviation", "0 0");
            k.appendChild(l);
            g.appendChild(k);
            b._svgBlurFilter = l;
            k = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            k.setAttribute("id", "svgDropShadowFilter");
            l = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
            l.setAttribute("in", "SourceAlpha");
            l.setAttribute("stdDeviation", "3");
            k.appendChild(l);
            b._svgDropshadowFilterBlur = l;
            l = document.createElementNS("http://www.w3.org/2000/svg", "feOffset");
            l.setAttribute("dx", "0");
            l.setAttribute("dy", "0");
            l.setAttribute("result", "offsetblur");
            k.appendChild(l);
            b._svgDropshadowFilterOffset = l;
            l = document.createElementNS("http://www.w3.org/2000/svg", "feFlood");
            l.setAttribute("flood-color", "rgba(0,0,0,1)");
            k.appendChild(l);
            b._svgDropshadowFilterFlood = l;
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
            b._svgColorMatrixFilter = l;
            a.appendChild(g);
            document.documentElement.appendChild(a);
          }
        };
        b._applyFilter = function(k, l, p) {
          if (b._svgFiltersAreSupported) {
            if (b._prepareSVGFilters(), b._removeFilter(l), p instanceof q.BlurFilter) {
              var v = a(k, p.quality);
              b._svgBlurFilter.setAttribute("stdDeviation", p.blurX * v + " " + p.blurY * v);
              l.filter = "url(#svgBlurFilter)";
            } else {
              p instanceof q.DropshadowFilter ? (v = a(k, p.quality), b._svgDropshadowFilterBlur.setAttribute("stdDeviation", p.blurX * v + " " + p.blurY * v), b._svgDropshadowFilterOffset.setAttribute("dx", String(Math.cos(p.angle * Math.PI / 180) * p.distance * k)), b._svgDropshadowFilterOffset.setAttribute("dy", String(Math.sin(p.angle * Math.PI / 180) * p.distance * k)), b._svgDropshadowFilterFlood.setAttribute("flood-color", g.ColorUtilities.rgbaToCSSStyle(p.color << 8 | Math.round(255 * p.alpha))), 
              l.filter = "url(#svgDropShadowFilter)") : p instanceof q.ColorMatrix && (b._svgColorMatrixFilter.setAttribute("values", p.toSVGFilterMatrix()), l.filter = "url(#svgColorMatrixFilter)");
            }
          }
        };
        b._removeFilter = function(a) {
          a.filter = "none";
        };
        b._applyColorMatrix = function(a, b) {
          b.isIdentity() ? (a.globalAlpha = 1, a.globalColorMatrix = null) : b.hasOnlyAlphaMultiplier() ? (a.globalAlpha = l(b.alphaMultiplier, 0, 1), a.globalColorMatrix = null) : (a.globalAlpha = 1, a.globalColorMatrix = b);
        };
        b._svgFiltersAreSupported = !!Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype, "filter");
        return b;
      }();
      r.Filters = b;
      q.filters && b._svgFiltersAreSupported && ("registerScratchCanvas" in window || (window.registerScratchCanvas = function(a) {
        a.style.display = "none";
        document.body.appendChild(a);
      }));
      var k = function() {
        function a(b, h, g, k) {
          this.surface = b;
          this.region = h;
          this.w = g;
          this.h = k;
        }
        a.prototype.free = function() {
          this.surface.free(this);
        };
        a._ensureCopyCanvasSize = function(b, k) {
          var p;
          if (a._copyCanvasContext) {
            if (p = a._copyCanvasContext.canvas, p.width < b || p.height < k) {
              p.width = g.IntegerUtilities.nearestPowerOfTwo(b), p.height = g.IntegerUtilities.nearestPowerOfTwo(k);
            }
          } else {
            p = document.createElement("canvas"), "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(p), p.width = g.IntegerUtilities.nearestPowerOfTwo(b), p.height = g.IntegerUtilities.nearestPowerOfTwo(k), a._copyCanvasContext = p.getContext("2d");
          }
        };
        a.prototype.draw = function(g, k, p, l, d, e, f, c, m) {
          this.context.setTransform(1, 0, 0, 1, 0, 0);
          var q, y = 0, t = 0;
          g.context.canvas === this.context.canvas ? (a._ensureCopyCanvasSize(l, d), q = a._copyCanvasContext, q.clearRect(0, 0, l, d), q.drawImage(g.surface.canvas, g.region.x, g.region.y, l, d, 0, 0, l, d), e = q, t = y = 0) : (e = g.surface.context, y = g.region.x, t = g.region.y);
          a: {
            switch(f) {
              case 11:
                g = !0;
                break a;
              default:
                g = !1;
            }
          }
          g && (this.context.save(), this.context.beginPath(), this.context.rect(k, p, l, d), this.context.clip());
          this.context.globalAlpha = 1;
          this.context.globalCompositeOperation = w(f);
          if (c) {
            f = 0;
            if (1 < c.length) {
              var r, V, T, U;
              q ? (T = q, q = e, e = T) : (a._ensureCopyCanvasSize(l, d), q = a._copyCanvasContext, V = r = 0);
              for (;f < c.length - 1;f++) {
                q.clearRect(0, 0, l, d), b._applyFilter(m, q, c[f]), q.drawImage(e.canvas, y, t, l, d, r, V, l, d), b._removeFilter(q), T = q, V = y, U = t, q = e, e = T, t = y = r, r = V, V = U;
              }
              b._removeFilter(e);
              b._removeFilter(q);
            }
            b._applyFilter(m, this.context, c[f]);
          }
          this.context.drawImage(e.canvas, y, t, l, d, k, p, l, d);
          this.context.globalCompositeOperation = w(1);
          b._removeFilter(this.context);
          g && this.context.restore();
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
          a.globalCompositeOperation = w(1);
        };
        a.prototype.fill = function(a) {
          var b = this.surface.context, g = this.region;
          b.fillStyle = a;
          b.fillRect(g.x, g.y, g.w, g.h);
        };
        a.prototype.clear = function(a) {
          var b = this.surface.context, g = this.region;
          a || (a = g);
          b.clearRect(a.x, a.y, a.w, a.h);
        };
        return a;
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
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(q) {
    (function(r) {
      var a = g.Debug.assert, w = g.GFX.Geometry.Rectangle, l = g.GFX.Geometry.Point, b = g.GFX.Geometry.Matrix, k = g.NumberUtilities.clamp, t = g.NumberUtilities.pow2, h = function() {
        return function(a, b) {
          this.surfaceRegion = a;
          this.scale = b;
        };
      }();
      r.MipMapLevel = h;
      var n = function() {
        function a(b, c, d, e) {
          this._node = c;
          this._levels = [];
          this._surfaceRegionAllocator = d;
          this._size = e;
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
            var e = this._node.getBounds().clone();
            e.scale(a, a);
            e.snap();
            var g = this._surfaceRegionAllocator.allocate(e.w, e.h, null), n = g.region, b = this._levels[d] = new h(g, a), d = new p(g);
            d.clip.set(n);
            d.matrix.setElements(a, 0, 0, a, n.x - e.x, n.y - e.y);
            d.flags |= 64;
            this._renderer.renderNodeWithState(this._node, d);
            d.free();
          }
          return b;
        };
        return a;
      }();
      r.MipMap = n;
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
      var p = function(a) {
        function d(c) {
          a.call(this);
          this.clip = w.createEmpty();
          this.clipList = [];
          this.clipPath = null;
          this.flags = 0;
          this.target = null;
          this.matrix = b.createIdentity();
          this.colorMatrix = q.ColorMatrix.createIdentity();
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
          g.ArrayUtilities.copyFrom(this.clipList, a.clipList);
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
      r.RenderState = p;
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
        function f(a, b, g) {
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
          f._prepareSurfaceAllocators();
        }
        __extends(f, d);
        f.prototype._addLayer = function(a) {
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
        Object.defineProperty(f.prototype, "_backgroundVideoLayer", {get:function() {
          return this._layers[0];
        }, enumerable:!0, configurable:!0});
        f.prototype._createTarget = function(a) {
          return new r.Canvas2DSurfaceRegion(new r.Canvas2DSurface(a), new q.RegionAllocator.Region(0, 0, a.width, a.height), a.width, a.height);
        };
        f.prototype._onStageBoundsChanged = function(a) {
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
        f._prepareSurfaceAllocators = function() {
          f._initializedCaches || (f._surfaceCache = new q.SurfaceRegionAllocator.SimpleAllocator(function(a, b) {
            var d = document.createElement("canvas");
            "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(d);
            var e = Math.max(1024, a), f = Math.max(1024, b);
            d.width = e;
            d.height = f;
            var g = null, g = 512 <= a || 512 <= b ? new q.RegionAllocator.GridAllocator(e, f, e, f) : new q.RegionAllocator.BucketAllocator(e, f);
            return new r.Canvas2DSurface(d, g);
          }), f._shapeCache = new q.SurfaceRegionAllocator.SimpleAllocator(function(a, b) {
            var d = document.createElement("canvas");
            "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(d);
            d.width = 1024;
            d.height = 1024;
            var e = e = new q.RegionAllocator.CompactAllocator(1024, 1024);
            return new r.Canvas2DSurface(d, e);
          }), f._initializedCaches = !0);
        };
        f.prototype.render = function() {
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
        f.prototype.renderNode = function(a, b, d) {
          var e = new p(this._target);
          e.clip.set(b);
          e.flags = 256;
          e.matrix.set(d);
          a.visit(this, e);
          e.free();
        };
        f.prototype.renderNodeWithState = function(a, b) {
          a.visit(this, b);
        };
        f.prototype._renderWithCache = function(a, b) {
          var d = b.matrix, e = a.getBounds();
          if (e.isEmpty()) {
            return !1;
          }
          var g = this._options.cacheShapesMaxSize, h = Math.max(d.getAbsoluteScaleX(), d.getAbsoluteScaleY()), k = !!(b.flags & 16), p = !!(b.flags & 8);
          if (b.hasFlags(256)) {
            if (p || k || !b.colorMatrix.isIdentity() || a.hasFlags(1048576) || 100 < this._options.cacheShapesThreshold || e.w * h > g || e.h * h > g) {
              return !1;
            }
            (h = a.properties.mipMap) || (h = a.properties.mipMap = new n(this, a, f._shapeCache, g));
            k = h.getLevel(d);
            g = k.surfaceRegion;
            h = g.region;
            return k ? (k = b.target.context, k.imageSmoothingEnabled = k.mozImageSmoothingEnabled = !0, k.setTransform(d.a, d.b, d.c, d.d, d.tx, d.ty), k.drawImage(g.surface.canvas, h.x, h.y, h.w, h.h, e.x, e.y, e.w, e.h), !0) : !1;
          }
        };
        f.prototype._intersectsClipList = function(a, b) {
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
        f.prototype.visitGroup = function(a, b) {
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
                    var p = k.clone();
                    p.flags |= 16;
                    p.beginClipPath(h.getMatrix());
                    g.visit(this, p);
                    p.applyClipPath();
                    p.free();
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
        f.prototype._renderDebugInfo = function(a, b) {
          if (b.flags & 1024) {
            var d = b.target.context, e = a.getBounds(!0), h = a.properties.style;
            h || (h = a.properties.style = g.Color.randomColor(.4).toCSSStyle());
            d.strokeStyle = h;
            b.matrix.transformRectangleAABB(e);
            d.setTransform(1, 0, 0, 1, 0, 0);
            e.free();
            e = a.getBounds();
            h = f._debugPoints;
            b.matrix.transformRectangle(e, h);
            d.lineWidth = 1;
            d.beginPath();
            d.moveTo(h[0].x, h[0].y);
            d.lineTo(h[1].x, h[1].y);
            d.lineTo(h[2].x, h[2].y);
            d.lineTo(h[3].x, h[3].y);
            d.lineTo(h[0].x, h[0].y);
            d.stroke();
          }
        };
        f.prototype.visitStage = function(a, b) {
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
        f.prototype.visitShape = function(a, b) {
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
        f.prototype.visitRenderableVideo = function(a, b) {
          if (a.video && a.video.videoWidth) {
            var d = this._devicePixelRatio, e = b.matrix.clone();
            e.scale(1 / d, 1 / d);
            var d = a.getBounds(), f = g.GFX.Geometry.Matrix.createIdentity();
            f.scale(d.w / a.video.videoWidth, d.h / a.video.videoHeight);
            e.preMultiply(f);
            f.free();
            d = e.toCSSTransform();
            a.video.style.transformOrigin = "0 0";
            a.video.style.transform = d;
            var h = this._backgroundVideoLayer;
            h !== a.video.parentElement && (h.appendChild(a.video), a.addEventListener(2, function T(a) {
              h.removeChild(a.video);
              a.removeEventListener(2, T);
            }));
            e.free();
          }
        };
        f.prototype.visitRenderable = function(a, b, d) {
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
        f.prototype._renderLayer = function(a, b) {
          var d = a.getLayer(), e = d.mask;
          if (e) {
            this._renderWithMask(a, e, d.blendMode, !a.hasFlags(131072) || !e.hasFlags(131072), b);
          } else {
            var e = w.allocate(), f = this._renderToTemporarySurface(a, a.getLayerBounds(!!this._options.filters), b, e, b.target.surface);
            f && (b.target.draw(f, e.x, e.y, e.w, e.h, b.colorMatrix, this._options.blending ? d.blendMode : 1, this._options.filters ? d.filters : null, this._devicePixelRatio), f.free());
            e.free();
          }
        };
        f.prototype._renderWithMask = function(a, b, d, e, f) {
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
              var p = f.clip.clone();
              p.intersect(h);
              p.intersect(k);
              p.snap();
              p.isEmpty() || (h = f.clone(), h.clip.set(p), a = this._renderToTemporarySurface(a, a.getBounds(), h, w.createEmpty(), null), h.free(), k = f.clone(), k.clip.set(p), k.matrix = g, k.flags |= 4, e && (k.flags |= 8), b = this._renderToTemporarySurface(b, b.getBounds(), k, w.createEmpty(), a.surface), k.free(), a.draw(b, 0, 0, p.w, p.h, k.colorMatrix, 11, null, this._devicePixelRatio), f.target.draw(a, p.x, p.y, p.w, p.h, h.colorMatrix, d, null, this._devicePixelRatio), b.free(), a.free());
            }
          }
        };
        f.prototype._renderStageToTarget = function(a, d, e) {
          w.allocationCount = b.allocationCount = p.allocationCount = 0;
          a = new p(a);
          a.clip.set(e);
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
        f.prototype._renderToTemporarySurface = function(a, b, d, e, f) {
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
        f.prototype._allocateSurface = function(a, b, d) {
          return f._surfaceCache.allocate(a, b, d);
        };
        f.prototype.screenShot = function(b, d, e) {
          d && (d = this._stage.content.groupChild.child, a(d instanceof q.Stage), b = d.content.getBounds(!0), d.content.getTransform().getConcatenatedMatrix().transformRectangleAABB(b), b.intersect(this._viewport));
          b || (b = new w(0, 0, this._target.w, this._target.h));
          d = b.w;
          var f = b.h, g = this._devicePixelRatio;
          e && (d /= g, f /= g, g = 1);
          e = document.createElement("canvas");
          e.width = d;
          e.height = f;
          var h = e.getContext("2d");
          h.fillStyle = this._container.style.backgroundColor;
          h.fillRect(0, 0, d, f);
          h.drawImage(this._target.context.canvas, b.x, b.y, b.w, b.h, 0, 0, d, f);
          return new q.ScreenShot(e.toDataURL("image/png"), d, f, g);
        };
        f._initializedCaches = !1;
        f._debugPoints = l.createEmptyPoints(4);
        return f;
      }(q.Renderer);
      r.Canvas2DRenderer = d;
    })(q.Canvas2D || (q.Canvas2D = {}));
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(q) {
    var r = q.Geometry.Point, a = q.Geometry.Matrix, w = q.Geometry.Rectangle, l = g.Tools.Mini.FPS, b = function() {
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
    q.UIState = b;
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
    }(b), t = function(a) {
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
          var e = a.getMousePosition(b, null), f = a.worldView.getTransform().getMatrix(!0), d = 1 + d / 1E3;
          f.translate(-e.x, -e.y);
          f.scale(d, d);
          f.translate(e.x, e.y);
          a.worldView.getTransform().setMatrix(f);
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
          d && (a.state = new h(d, a.getMousePosition(b, null), d.getTransform().getMatrix(!0)));
        }
      };
      b.prototype.onMouseUp = function(a, b) {
        a.state = new k;
        a.selectNodeUnderMouse(b);
      };
      return b;
    })(b);
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
    }(b), b = function() {
      function b(a, h, n) {
        function d(a) {
          c._state.onMouseWheel(c, a);
          c._persistentState.onMouseWheel(c, a);
        }
        void 0 === h && (h = !1);
        void 0 === n && (n = void 0);
        this._state = new k;
        this._persistentState = new t;
        this.paused = !1;
        this.viewport = null;
        this._selectedNodes = [];
        this._isRendering = !1;
        this._rAF = void 0;
        this._eventListeners = Object.create(null);
        this._fullScreen = !1;
        this._container = a;
        this._stage = new q.Stage(512, 512, !0);
        this._worldView = this._stage.content;
        this._world = new q.Group;
        this._worldView.addChild(this._world);
        this._disableHiDPI = h;
        h = document.createElement("div");
        h.style.position = "absolute";
        h.style.width = "100%";
        h.style.height = "100%";
        h.style.zIndex = "0";
        a.appendChild(h);
        if (q.hud.value) {
          var e = document.createElement("div");
          e.style.position = "absolute";
          e.style.width = "100%";
          e.style.height = "100%";
          e.style.pointerEvents = "none";
          var f = document.createElement("div");
          f.style.position = "absolute";
          f.style.width = "100%";
          f.style.height = "20px";
          f.style.pointerEvents = "none";
          e.appendChild(f);
          a.appendChild(e);
          this._fps = new l(f);
        } else {
          this._fps = null;
        }
        this.transparent = e = 0 === n;
        void 0 === n || 0 === n || g.ColorUtilities.rgbaToCSSStyle(n);
        this._options = new q.Canvas2D.Canvas2DRendererOptions;
        this._options.alpha = e;
        this._renderer = new q.Canvas2D.Canvas2DRenderer(h, this._stage, this._options);
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
        var g = this;
        setInterval(function() {
          if (a !== g._containerWidth || b !== g._containerHeight) {
            g._onContainerSizeChanged(), a = g._containerWidth, b = g._containerHeight;
          }
        }, 10);
      };
      b.prototype._onContainerSizeChanged = function() {
        var b = this.getRatio(), g = Math.ceil(this._containerWidth * b), h = Math.ceil(this._containerHeight * b);
        this._stage.setBounds(new w(0, 0, g, h));
        this._stage.content.setBounds(new w(0, 0, g, h));
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
        return {stageWidth:this._containerWidth, stageHeight:this._containerHeight, pixelRatio:this.getRatio(), screenWidth:window.screen ? window.screen.width : 640, screenHeight:window.screen ? window.screen.height : 480};
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
      b.prototype.getMousePosition = function(b, g) {
        var h = this._container, d = h.getBoundingClientRect(), e = this.getRatio(), h = new r(h.scrollWidth / d.width * (b.clientX - d.left) * e, h.scrollHeight / d.height * (b.clientY - d.top) * e);
        if (!g) {
          return h;
        }
        d = a.createIdentity();
        g.getTransform().getConcatenatedMatrix().inverse(d);
        d.transformPoint(h);
        return h;
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
      b.prototype.screenShot = function(a, b, g) {
        return this._renderer.screenShot(a, b, g);
      };
      return b;
    }();
    q.Easel = b;
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(q) {
    var r = g.GFX.Geometry.Matrix;
    (function(a) {
      a[a.Simple = 0] = "Simple";
    })(q.Layout || (q.Layout = {}));
    var a = function(a) {
      function b() {
        a.apply(this, arguments);
        this.layout = 0;
      }
      __extends(b, a);
      return b;
    }(q.RendererOptions);
    q.TreeRendererOptions = a;
    var w = function(g) {
      function b(b, q, h) {
        void 0 === h && (h = new a);
        g.call(this, b, q, h);
        this._canvas = document.createElement("canvas");
        this._container.appendChild(this._canvas);
        this._context = this._canvas.getContext("2d");
        this._listenForContainerSizeChanges();
      }
      __extends(b, g);
      b.prototype._listenForContainerSizeChanges = function() {
        var a = this._containerWidth, b = this._containerHeight;
        this._onContainerSizeChanged();
        var g = this;
        setInterval(function() {
          if (a !== g._containerWidth || b !== g._containerHeight) {
            g._onContainerSizeChanged(), a = g._containerWidth, b = g._containerHeight;
          }
        }, 10);
      };
      b.prototype._getRatio = function() {
        var a = window.devicePixelRatio || 1, b = 1;
        1 !== a && (b = a / 1);
        return b;
      };
      b.prototype._onContainerSizeChanged = function() {
        var a = this._getRatio(), b = Math.ceil(this._containerWidth * a), g = Math.ceil(this._containerHeight * a), l = this._canvas;
        0 < a ? (l.width = b * a, l.height = g * a, l.style.width = b + "px", l.style.height = g + "px") : (l.width = b, l.height = g);
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
      b.prototype._renderNodeSimple = function(a, b, g) {
        function l(b) {
          var c = b.getChildren();
          a.fillStyle = b.hasFlags(16) ? "red" : "white";
          var g = String(b.id);
          b instanceof q.RenderableText ? g = "T" + g : b instanceof q.RenderableShape ? g = "S" + g : b instanceof q.RenderableBitmap ? g = "B" + g : b instanceof q.RenderableVideo && (g = "V" + g);
          b instanceof q.Renderable && (g = g + " [" + b._parents.length + "]");
          b = a.measureText(g).width;
          a.fillText(g, p, v);
          if (c) {
            p += b + 4;
            e = Math.max(e, p + 20);
            for (g = 0;g < c.length;g++) {
              l(c[g]), g < c.length - 1 && (v += 18, v > r._canvas.height && (a.fillStyle = "gray", p = p - d + e + 8, d = e + 8, v = 0, a.fillStyle = "white"));
            }
            p -= b + 4;
          }
        }
        var r = this;
        a.save();
        a.font = "16px Arial";
        a.fillStyle = "white";
        var p = 0, v = 0, d = 0, e = 0;
        l(b);
        a.restore();
      };
      return b;
    }(q.Renderer);
    q.TreeRenderer = w;
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(q) {
    (function(r) {
      var a = g.GFX.BlurFilter, w = g.GFX.DropshadowFilter, l = g.GFX.Shape, b = g.GFX.Group, k = g.GFX.RenderableShape, t = g.GFX.RenderableMorphShape, h = g.GFX.RenderableBitmap, n = g.GFX.RenderableVideo, u = g.GFX.RenderableText, p = g.GFX.ColorMatrix, v = g.ShapeData, d = g.ArrayUtilities.DataBuffer, e = g.GFX.Stage, f = g.GFX.Geometry.Matrix, c = g.GFX.Geometry.Rectangle, m = function() {
        function a() {
        }
        a.prototype.writeMouseEvent = function(a, b) {
          var c = this.output;
          c.writeInt(300);
          var d = g.Remoting.MouseEventNames.indexOf(a.type);
          c.writeInt(d);
          c.writeFloat(b.x);
          c.writeFloat(b.y);
          c.writeInt(a.buttons);
          c.writeInt((a.ctrlKey ? 1 : 0) | (a.altKey ? 2 : 0) | (a.shiftKey ? 4 : 0));
        };
        a.prototype.writeKeyboardEvent = function(a) {
          var b = this.output;
          b.writeInt(301);
          var c = g.Remoting.KeyboardEventNames.indexOf(a.type);
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
          function f(a) {
            a = a.getBounds(!0);
            var c = b.easel.getRatio();
            a.scale(1 / c, 1 / c);
            a.snap();
            g.setBounds(a);
          }
          var g = this.stage = new e(128, 512);
          "undefined" !== typeof registerInspectorStage && registerInspectorStage(g);
          f(b.stage);
          b.stage.addEventListener(1, f);
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
          g.registerCSSFont(a, b, !inFirefox);
          inFirefox ? c(null) : window.setTimeout(c, 400);
        };
        a.prototype.registerImage = function(a, b, c, d, e, f) {
          this._registerAsset(a, b, this._decodeImage(c, d, e, f));
        };
        a.prototype.registerVideo = function(a) {
          this._registerAsset(a, 0, new n(a, this));
        };
        a.prototype._decodeImage = function(a, b, d, e) {
          var f = new Image, k = h.FromImage(f, -1, -1);
          f.src = URL.createObjectURL(new Blob([b], {type:g.getMIMETypeForImageType(a)}));
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
          for (var a = this.input, b = this.context, c = a.readInt(), d = a.readInt(), e = b._getAsset(c), f = this._readRectangle(), g = v.FromPlainObject(this._readAsset()), h = a.readInt(), l = [], m = 0;m < h;m++) {
            var n = a.readInt();
            l.push(b._getBitmapAsset(n));
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
        e.prototype._readUpdateBitmapData = function() {
          var a = this.input, b = this.context, c = a.readInt(), e = a.readInt(), f = b._getBitmapAsset(c), g = this._readRectangle(), a = a.readInt(), k = d.FromPlainObject(this._readAsset());
          f ? f.updateFromDataBuffer(a, k) : (f = h.FromDataBuffer(a, k, g), b._registerAsset(c, e, f));
        };
        e.prototype._readUpdateTextContent = function() {
          var a = this.input, b = this.context, c = a.readInt(), e = a.readInt(), f = b._getTextAsset(c), g = this._readRectangle(), h = this._readMatrix(), k = a.readInt(), l = a.readInt(), m = a.readInt(), n = a.readBoolean(), p = a.readInt(), q = a.readInt(), r = this._readAsset(), t = d.FromPlainObject(this._readAsset()), v = null, w = a.readInt();
          w && (v = new d(4 * w), a.readBytes(v, 0, 4 * w));
          f ? (f.setBounds(g), f.setContent(r, t, h, v), f.setStyle(k, l, p, q), f.reflow(m, n)) : (f = new u(g), f.setContent(r, t, h, v), f.setStyle(k, l, p, q), f.reflow(m, n), b._registerAsset(c, e, f));
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
          a.stage.color = g.Color.FromARGB(b);
          a.stage.align = this.input.readInt();
          a.stage.scaleMode = this.input.readInt();
          b = this.input.readInt();
          this.input.readInt();
          c = this.input.readInt();
          a._easelHost.cursor = g.UI.toCSSCursor(c);
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
              var h = c.readInt();
              switch(h) {
                case 0:
                  e.push(new a(c.readFloat(), c.readFloat(), c.readInt()));
                  break;
                case 1:
                  e.push(new w(c.readFloat(), c.readFloat(), c.readFloat(), c.readFloat(), c.readInt(), c.readFloat(), c.readBoolean(), c.readBoolean(), c.readBoolean(), c.readInt(), c.readFloat()));
                  break;
                case 2:
                  h = new Float32Array(20);
                  h[0] = c.readFloat();
                  h[4] = c.readFloat();
                  h[8] = c.readFloat();
                  h[12] = c.readFloat();
                  h[16] = c.readFloat() / 255;
                  h[1] = c.readFloat();
                  h[5] = c.readFloat();
                  h[9] = c.readFloat();
                  h[13] = c.readFloat();
                  h[17] = c.readFloat() / 255;
                  h[2] = c.readFloat();
                  h[6] = c.readFloat();
                  h[10] = c.readFloat();
                  h[14] = c.readFloat();
                  h[18] = c.readFloat() / 255;
                  h[3] = c.readFloat();
                  h[7] = c.readFloat();
                  h[11] = c.readFloat();
                  h[15] = c.readFloat();
                  h[19] = c.readFloat() / 255;
                  e.push(new p(h));
                  break;
                default:
                  g.Debug.somewhatImplemented(q.FilterType[h]);
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
          d & 32 && (e = a.readInt() / 65535, g = a.readInt(), 1 !== g && (f.getLayer().blendMode = g), this._readFilters(f), f.toggleFlags(65536, a.readBoolean()), f.toggleFlags(131072, a.readBoolean()), f.toggleFlags(262144, !!a.readInt()), f.toggleFlags(524288, !!a.readInt()));
          if (d & 4) {
            d = a.readInt();
            g = f;
            g.clearChildren();
            for (var h = 0;h < d;h++) {
              var k = a.readInt(), k = c._makeNode(k);
              g.addChild(k);
            }
          }
          e && (k = f.getChildren()[0], k instanceof l && (k.ratio = e));
        };
        e.prototype._readDrawToBitmap = function() {
          var a = this.input, b = this.context, c = a.readInt(), d = a.readInt(), e = a.readInt(), g, k, l;
          g = e & 1 ? this._readMatrix().clone() : f.createIdentity();
          e & 8 && (k = this._readColorMatrix());
          e & 16 && (l = this._readRectangle());
          e = a.readInt();
          a.readBoolean();
          a = b._getBitmapAsset(c);
          d = b._makeNode(d);
          a ? a.drawNode(d, g, k, e, l) : b._registerAsset(c, -1, h.FromNode(d, g, k, e, l));
        };
        e.prototype._readRequestBitmapData = function() {
          var a = this.output, b = this.context, c = this.input.readInt();
          b._getBitmapAsset(c).readImageData(a);
        };
        e._temporaryReadMatrix = f.createIdentity();
        e._temporaryReadRectangle = c.createEmpty();
        e._temporaryReadColorMatrix = p.createIdentity();
        e._temporaryReadColorMatrixIdentity = p.createIdentity();
        return e;
      }();
      r.GFXChannelDeserializer = m;
    })(q.GFX || (q.GFX = {}));
  })(g.Remoting || (g.Remoting = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(q) {
    var r = g.GFX.Geometry.Point, a = g.ArrayUtilities.DataBuffer;
    q.ContextMenuButton = 2;
    var w = function() {
      function l(a) {
        this._easel = a;
        var k = a.transparent;
        this._group = a.world;
        this._content = null;
        this._fullscreen = !1;
        this._context = new g.Remoting.GFX.GFXChannelDeserializerContext(this, this._group, k);
        this._addEventListeners();
      }
      l.prototype.onSendUpdates = function(a, g) {
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
      l.prototype._mouseEventListener = function(b) {
        if (b.button !== q.ContextMenuButton) {
          var k = this._easel.getMousePosition(b, this._content), k = new r(k.x, k.y), l = new a, h = new g.Remoting.GFX.GFXChannelSerializer;
          h.output = l;
          h.writeMouseEvent(b, k);
          this.onSendUpdates(l, []);
        }
      };
      l.prototype._keyboardEventListener = function(b) {
        var k = new a, l = new g.Remoting.GFX.GFXChannelSerializer;
        l.output = k;
        l.writeKeyboardEvent(b);
        this.onSendUpdates(k, []);
      };
      l.prototype._addEventListeners = function() {
        for (var a = this._mouseEventListener.bind(this), g = this._keyboardEventListener.bind(this), q = l._mouseEvents, h = 0;h < q.length;h++) {
          window.addEventListener(q[h], a);
        }
        a = l._keyboardEvents;
        for (h = 0;h < a.length;h++) {
          window.addEventListener(a[h], g);
        }
        this._addFocusEventListeners();
        this._easel.addEventListener("resize", this._resizeEventListener.bind(this));
      };
      l.prototype._sendFocusEvent = function(b) {
        var k = new a, l = new g.Remoting.GFX.GFXChannelSerializer;
        l.output = k;
        l.writeFocusEvent(b);
        this.onSendUpdates(k, []);
      };
      l.prototype._addFocusEventListeners = function() {
        var a = this;
        document.addEventListener("visibilitychange", function(g) {
          a._sendFocusEvent(document.hidden ? 0 : 1);
        });
        window.addEventListener("focus", function(g) {
          a._sendFocusEvent(3);
        });
        window.addEventListener("blur", function(g) {
          a._sendFocusEvent(2);
        });
      };
      l.prototype._resizeEventListener = function() {
        this.onDisplayParameters(this._easel.getDisplayParameters());
      };
      l.prototype.onDisplayParameters = function(a) {
        throw Error("This method is abstract");
      };
      l.prototype.processUpdates = function(a, k, l) {
        void 0 === l && (l = null);
        var h = new g.Remoting.GFX.GFXChannelDeserializer;
        h.input = a;
        h.inputAssets = k;
        h.output = l;
        h.context = this._context;
        h.read();
      };
      l.prototype.processVideoControl = function(a, g, l) {
        var h = this._context, n = h._getVideoAsset(a);
        if (!n) {
          if (1 !== g) {
            return;
          }
          h.registerVideo(a);
          n = h._getVideoAsset(a);
        }
        return n.processControlRequest(g, l);
      };
      l.prototype.processRegisterFont = function(a, g, l) {
        this._context.registerFont(a, g, l);
      };
      l.prototype.processRegisterImage = function(a, g, l, h, n, q) {
        this._context.registerImage(a, g, l, h, n, q);
      };
      l.prototype.processFSCommand = function(a, g) {
        arguments.length;
        "undefined" !== typeof ShumwayCom && "test" === ShumwayCom.environment && ShumwayCom.processFSCommand(a, g);
      };
      l.prototype.processFrame = function() {
        arguments.length;
        "undefined" !== typeof ShumwayCom && "test" === ShumwayCom.environment && ShumwayCom.processFrame();
      };
      l.prototype.onVideoPlaybackEvent = function(a, g, l) {
        throw Error("This method is abstract");
      };
      l.prototype.sendVideoPlaybackEvent = function(a, g, l) {
        this.onVideoPlaybackEvent(a, g, l);
      };
      l._mouseEvents = g.Remoting.MouseEventNames;
      l._keyboardEvents = g.Remoting.KeyboardEventNames;
      return l;
    }();
    q.EaselHost = w;
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(q) {
    (function(r) {
      var a = g.ArrayUtilities.DataBuffer, w = function(g) {
        function b(a, b) {
          g.call(this, a);
          this._peer = b;
          this._peer.onSyncMessage = function(a) {
            return this._onWindowMessage(a, !1);
          }.bind(this);
          this._peer.onAsyncMessage = function(a) {
            this._onWindowMessage(a, !0);
          }.bind(this);
        }
        __extends(b, g);
        b.prototype.onSendUpdates = function(a, b) {
          var g = a.getBytes();
          this._peer.postAsyncMessage({type:"gfx", updates:g, assets:b}, [g.buffer]);
        };
        b.prototype.onDisplayParameters = function(a) {
          this._peer.postAsyncMessage({type:"displayParameters", params:a});
        };
        b.prototype.onVideoPlaybackEvent = function(a, b, g) {
          this._peer.postAsyncMessage({type:"videoPlayback", id:a, eventType:b, data:g});
        };
        b.prototype._sendRegisterFontResponse = function(a, b) {
          this._peer.postAsyncMessage({type:"registerFontResponse", requestId:a, result:b});
        };
        b.prototype._sendRegisterImageResponse = function(a, b) {
          this._peer.postAsyncMessage({type:"registerImageResponse", requestId:a, result:b});
        };
        b.prototype._onWindowMessage = function(b, g) {
          var h;
          if ("object" === typeof b && null !== b) {
            if ("player" === b.type) {
              var l = a.FromArrayBuffer(b.updates.buffer);
              g ? this.processUpdates(l, b.assets) : (h = new a, this.processUpdates(l, b.assets, h), h = h.toPlainObject());
            } else {
              "frame" === b.type ? this.processFrame() : "videoControl" === b.type ? h = this.processVideoControl(b.id, b.eventType, b.data) : "registerFont" === b.type ? this.processRegisterFont(b.syncId, b.data, this._sendRegisterFontResponse.bind(this, b.requestId)) : "registerImage" === b.type ? this.processRegisterImage(b.syncId, b.symbolId, b.imageType, b.data, b.alphaData, this._sendRegisterImageResponse.bind(this, b.requestId)) : "fscommand" === b.type && this.processFSCommand(b.command, 
              b.args);
            }
          }
          return h;
        };
        return b;
      }(q.EaselHost);
      r.WindowEaselHost = w;
    })(q.Window || (q.Window = {}));
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(q) {
    (function(q) {
      function a(a, b) {
        a.writeInt(b.length);
        a.writeRawBytes(b);
      }
      function w(a, b) {
        return "byteLength" in a && "buffer" in a && (a.constructor && a.constructor.name) === b;
      }
      function l(a) {
        return "byteLength" in a && "ArrayBuffer" === (a.constructor && a.constructor.name);
      }
      function b(b) {
        function e(b) {
          switch(typeof b) {
            case "undefined":
              f.writeByte(0);
              break;
            case "boolean":
              f.writeByte(b ? 2 : 3);
              break;
            case "number":
              f.writeByte(4);
              f.writeDouble(b);
              break;
            case "string":
              f.writeByte(5);
              f.writeUTF(b);
              break;
            default:
              if (null === b) {
                f.writeByte(1);
                break;
              }
              if (Array.isArray(b)) {
                f.writeByte(6);
                f.writeInt(b.length);
                for (var d = 0;d < b.length;d++) {
                  e(b[d]);
                }
              } else {
                if (w(b, "Uint8Array")) {
                  f.writeByte(9), a(f, b);
                } else {
                  if ("length" in b && "buffer" in b && "littleEndian" in b) {
                    f.writeByte(b.littleEndian ? 10 : 11), a(f, new Uint8Array(b.buffer, 0, b.length));
                  } else {
                    if (l(b)) {
                      f.writeByte(8), a(f, new Uint8Array(b));
                    } else {
                      if (w(b, "Int32Array")) {
                        f.writeByte(12), a(f, new Uint8Array(b.buffer, b.byteOffset, b.byteLength));
                      } else {
                        if (!g.isNullOrUndefined(b.buffer) && l(b.buffer) && "number" === typeof b.byteOffset) {
                          throw Error("Some unsupported TypedArray is used");
                        }
                        f.writeByte(7);
                        for (d in b) {
                          f.writeUTF(d), e(b[d]);
                        }
                        f.writeUTF("");
                      }
                    }
                  }
                }
              }
            ;
          }
        }
        var f = new n;
        e(b);
        return f.getBytes();
      }
      function k(a) {
        var b = new n, f = a.readInt();
        a.readBytes(b, 0, f);
        return b.getBytes();
      }
      function t(a) {
        var b = new n, f = a.readInt();
        a.readBytes(b, 0, f);
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
            for (var b = [], f = a.readInt(), c = 0;c < f;c++) {
              b[c] = h(a);
            }
            return b;
          case 7:
            for (b = {};f = a.readUTF();) {
              b[f] = h(a);
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
      var n = g.ArrayUtilities.DataBuffer, u = g.ArrayUtilities.PlainObjectDataBuffer, p;
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
      })(p || (p = {}));
      (function(a) {
        a[a.None = 0] = "None";
        a[a.PlayerCommand = 1] = "PlayerCommand";
        a[a.PlayerCommandAsync = 2] = "PlayerCommandAsync";
        a[a.Frame = 3] = "Frame";
        a[a.Font = 4] = "Font";
        a[a.Image = 5] = "Image";
        a[a.FSCommand = 6] = "FSCommand";
      })(q.MovieRecordType || (q.MovieRecordType = {}));
      p = function() {
        function d(a) {
          this._maxRecordingSize = a;
          this._recording = new n;
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
        d.prototype.recordPlayerCommand = function(d, f, c) {
          var g = new n;
          a(g, f);
          g.writeInt(c.length);
          c.forEach(function(c) {
            c = b(c);
            a(g, c);
          });
          this._createRecord(d ? 2 : 1, g);
        };
        d.prototype.recordFrame = function() {
          this._createRecord(3, null);
        };
        d.prototype.recordFont = function(d, f) {
          var c = new n;
          c.writeInt(d);
          a(c, b(f));
          this._createRecord(4, c);
        };
        d.prototype.recordImage = function(d, f, c, g, h) {
          var k = new n;
          k.writeInt(d);
          k.writeInt(f);
          k.writeInt(c);
          a(k, b(g));
          a(k, b(h));
          this._createRecord(5, k);
        };
        d.prototype.recordFSCommand = function(a, b) {
          var c = new n;
          c.writeUTF(a);
          c.writeUTF(b || "");
          this._createRecord(6, c);
        };
        return d;
      }();
      q.MovieRecorder = p;
      var v = function() {
        function a(b) {
          this._buffer = new n;
          this._buffer.writeRawBytes(b);
          this._buffer.position = 4;
        }
        a.prototype.readNextRecord = function() {
          if (this._buffer.position >= this._buffer.length) {
            return 0;
          }
          var a = this._buffer.readInt(), b = this._buffer.readInt(), c = this._buffer.readInt(), d = null;
          0 < c && (d = new n, this._buffer.readBytes(d, 0, c));
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
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(q) {
    (function(r) {
      var a = g.ArrayUtilities.DataBuffer, w = function(g) {
        function b(a) {
          g.call(this, a);
          this.alwaysRenderFrame = this.ignoreTimestamps = !1;
          this.cpuTimeRendering = this.cpuTimeUpdates = 0;
          this.onComplete = null;
        }
        __extends(b, g);
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
        b.prototype.onVideoPlaybackEvent = function(a, b, g) {
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
          var b, g = performance.now();
          switch(this._parser.currentType) {
            case 1:
            ;
            case 2:
              b = this._parser.parsePlayerCommand();
              var h = 2 === this._parser.currentType, l = a.FromArrayBuffer(b.updates.buffer);
              h ? this.processUpdates(l, b.assets) : (h = new a, this.processUpdates(l, b.assets, h));
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
          this.cpuTimeUpdates += performance.now() - g;
          3 === this._parser.currentType && this.alwaysRenderFrame ? requestAnimationFrame(this._renderFrameJustAfterRAF.bind(this)) : this._parseNext();
        };
        b.prototype._renderFrameJustAfterRAF = function() {
          var a = performance.now();
          this.easel.render();
          this.cpuTimeRendering += performance.now() - a;
          this._parseNext();
        };
        return b;
      }(q.EaselHost);
      r.PlaybackEaselHost = w;
    })(q.Test || (q.Test = {}));
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(q) {
    (function(q) {
      var a = function(a) {
        function g(b, k, l) {
          void 0 === l && (l = 0);
          a.call(this, b, k);
          this._recorder = null;
          this._recorder = new q.MovieRecorder(l);
        }
        __extends(g, a);
        Object.defineProperty(g.prototype, "recorder", {get:function() {
          return this._recorder;
        }, enumerable:!0, configurable:!0});
        g.prototype._onWindowMessage = function(b, g) {
          switch(b.type) {
            case "player":
              this._recorder.recordPlayerCommand(g, b.updates, b.assets);
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
          return a.prototype._onWindowMessage.call(this, b, g);
        };
        return g;
      }(g.GFX.Window.WindowEaselHost);
      q.RecordingEaselHost = a;
    })(q.Test || (q.Test = {}));
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
console.timeEnd("Load GFX Dependencies");

