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
Shumway$$inline_0.version = "0.11.301";
Shumway$$inline_0.build = "fa99f02";
var jsGlobal = function() {
  return this || (0,eval)("this//# sourceURL=jsGlobal-getter");
}(), inBrowser = "undefined" !== typeof window && "document" in window && "plugins" in window.document, inFirefox = "undefined" !== typeof navigator && 0 <= navigator.userAgent.indexOf("Firefox");
jsGlobal.performance || (jsGlobal.performance = {});
jsGlobal.performance.now || (jsGlobal.performance.now = function() {
  return Date.now();
});
function lazyInitializer(g, m, u) {
  Object.defineProperty(g, m, {get:function() {
    var b = u();
    Object.defineProperty(g, m, {value:b, configurable:!0, enumerable:!0});
    return b;
  }, configurable:!0, enumerable:!0});
}
var START_TIME = performance.now();
(function(g) {
  function m(d) {
    return (d | 0) === d;
  }
  function u(d) {
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
    if (e > g.UINT32_CHAR_BUFFER_LENGTH) {
      return !1;
    }
    var c = 0, f = d.charCodeAt(c++) - 48;
    if (1 > f || 9 < f) {
      return !1;
    }
    for (var n = 0, x = 0;c < e;) {
      x = d.charCodeAt(c++) - 48;
      if (0 > x || 9 < x) {
        return !1;
      }
      n = f;
      f = 10 * f + x;
    }
    return n < g.UINT32_MAX_DIV_10 || n === g.UINT32_MAX_DIV_10 && x <= g.UINT32_MAX_MOD_10 ? !0 : !1;
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
  g.isInteger = m;
  g.isArray = function(d) {
    return d instanceof Array;
  };
  g.isNumberOrString = function(d) {
    return "number" === typeof d || "string" === typeof d;
  };
  g.isObject = u;
  g.toNumber = function(d) {
    return +d;
  };
  g.isNumericString = b;
  g.isNumeric = function(d) {
    if ("number" === typeof d) {
      return !0;
    }
    if ("string" === typeof d) {
      var f = d.charCodeAt(0);
      return 65 <= f && 90 >= f || 97 <= f && 122 >= f || 36 === f || 95 === f ? !1 : w(d) || b(d);
    }
    return !1;
  };
  g.isIndex = w;
  g.isNullOrUndefined = function(d) {
    return void 0 == d;
  };
  g.argumentsToString = function(d) {
    for (var f = [], e = 0;e < d.length;e++) {
      var c = d[e];
      try {
        var n;
        n = "object" === typeof c && c ? "toString" in c ? c.toString() : Object.prototype.toString.call(c) : c + "";
        f.push(n);
      } catch (x) {
        f.push("<unprintable value>");
      }
    }
    return f.join(", ");
  };
  var r;
  (function(d) {
    d.error = function(c) {
      console.error(c);
      throw Error(c);
    };
    d.assert = function(c, n) {
      void 0 === n && (n = "assertion failed");
      "" === c && (c = !0);
      if (!c) {
        if ("undefined" !== typeof console && "assert" in console) {
          throw console.assert(!1, n), Error(n);
        }
        d.error(n.toString());
      }
    };
    d.assertUnreachable = function(c) {
      throw Error("Reached unreachable location " + Error().stack.split("\n")[1] + c);
    };
    d.assertNotImplemented = function(c, n) {
      c || d.error("notImplemented: " + n);
    };
    var f = Object.create(null);
    d.warning = function(c, n, e) {
    };
    d.warnCounts = function() {
      var c = [], n;
      for (n in f) {
        c.push({key:n, count:f[n]});
      }
      c.sort(function(c, n) {
        return n.count - c.count;
      });
      return c.reduce(function(c, n) {
        return c + ("\n" + n.count + "\t" + n.key);
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
  })(r = g.Debug || (g.Debug = {}));
  g.getTicks = function() {
    return performance.now();
  };
  (function(d) {
    function f(c, n) {
      for (var e = 0, f = c.length;e < f;e++) {
        if (c[e] === n) {
          return e;
        }
      }
      c.push(n);
      return c.length - 1;
    }
    d.popManyInto = function(c, n, e) {
      for (var f = n - 1;0 <= f;f--) {
        e[f] = c.pop();
      }
      e.length = n;
    };
    d.popMany = function(c, n) {
      var e = c.length - n, f = c.slice(e, this.length);
      c.length = e;
      return f;
    };
    d.popManyIntoVoid = function(c, n) {
      c.length -= n;
    };
    d.pushMany = function(c, n) {
      for (var e = 0;e < n.length;e++) {
        c.push(n[e]);
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
    d.indexOf = function(c, n) {
      for (var e = 0, f = c.length;e < f;e++) {
        if (c[e] === n) {
          return e;
        }
      }
      return -1;
    };
    d.equals = function(c, n) {
      if (c.length !== n.length) {
        return !1;
      }
      for (var e = 0;e < c.length;e++) {
        if (c[e] !== n[e]) {
          return !1;
        }
      }
      return !0;
    };
    d.pushUnique = f;
    d.unique = function(c) {
      for (var e = [], x = 0;x < c.length;x++) {
        f(e, c[x]);
      }
      return e;
    };
    d.copyFrom = function(c, e) {
      c.length = 0;
      d.pushMany(c, e);
    };
    d.ensureTypedArrayCapacity = function(c, e) {
      if (c.length < e) {
        var x = c;
        c = new c.constructor(g.IntegerUtilities.nearestPowerOfTwo(e));
        c.set(x, 0);
      }
      return c;
    };
    d.memCopy = function(c, e, x, f, d) {
      void 0 === x && (x = 0);
      void 0 === f && (f = 0);
      void 0 === d && (d = 0);
      0 < f || 0 < d && d < e.length ? (0 >= d && (d = e.length - f), c.set(e.subarray(f, f + d), x)) : c.set(e, x);
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
      c.prototype.write6Floats = function(c, e, f, d, a, l) {
        this.ensureCapacity(this._offset + 24);
        this.write6FloatsUnsafe(c, e, f, d, a, l);
      };
      c.prototype.write6FloatsUnsafe = function(c, e, f, d, a, l) {
        var b = this._offset >> 2;
        this._f32[b + 0] = c;
        this._f32[b + 1] = e;
        this._f32[b + 2] = f;
        this._f32[b + 3] = d;
        this._f32[b + 4] = a;
        this._f32[b + 5] = l;
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
  })(g.ArrayUtilities || (g.ArrayUtilities = {}));
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
  g.ArrayReader = a;
  (function(d) {
    function f(c, e) {
      return Object.prototype.hasOwnProperty.call(c, e);
    }
    function e(c, e) {
      for (var x in e) {
        f(e, x) && (c[x] = e[x]);
      }
    }
    d.boxValue = function(c) {
      return void 0 == c || u(c) ? c : Object(c);
    };
    d.toKeyValueArray = function(c) {
      var e = Object.prototype.hasOwnProperty, f = [], d;
      for (d in c) {
        e.call(c, d) && f.push([d, c[d]]);
      }
      return f;
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
        var f = Object.getOwnPropertyDescriptor(c, e);
        if (f) {
          return f;
        }
        c = Object.getPrototypeOf(c);
      } while (c);
      return null;
    };
    d.hasOwnGetter = function(c, e) {
      var f = Object.getOwnPropertyDescriptor(c, e);
      return !(!f || !f.get);
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
      var n = Object.create(Object.getPrototypeOf(c));
      e(n, c);
      return n;
    };
    d.copyProperties = function(c, e) {
      for (var f in e) {
        c[f] = e[f];
      }
    };
    d.copyOwnProperties = e;
    d.copyOwnPropertyDescriptors = function(c, e, x, d, a) {
      void 0 === x && (x = null);
      void 0 === d && (d = !0);
      void 0 === a && (a = !1);
      for (var l in e) {
        if (f(e, l) && (!x || x(l))) {
          var b = Object.getOwnPropertyDescriptor(e, l);
          if (d || !f(c, l)) {
            try {
              a && !1 === b.writable && (b.writable = !0), Object.defineProperty(c, l, b);
            } catch (h) {
              r.assert("Can't define: " + l);
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
      Object.defineProperty(c, e, {get:l.makeForwardingGetter(f), set:l.makeForwardingSetter(f), writable:!0, configurable:!0, enumerable:!1});
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
  })(g.ObjectUtilities || (g.ObjectUtilities = {}));
  var l;
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
  })(l = g.FunctionUtilities || (g.FunctionUtilities = {}));
  (function(d) {
    function f(c) {
      return "string" === typeof c ? '"' + c + '"' : "number" === typeof c || "boolean" === typeof c ? String(c) : c instanceof Array ? "[] " + c.length : typeof c;
    }
    function e(c, e, f) {
      n[0] = c;
      n[1] = e;
      n[2] = f;
      return n.join("");
    }
    function c(c, e, n, f) {
      x[0] = c;
      x[1] = e;
      x[2] = n;
      x[3] = f;
      return x.join("");
    }
    d.repeatString = function(c, e) {
      for (var n = "", f = 0;f < e;f++) {
        n += c;
      }
      return n;
    };
    d.memorySizeToString = function(c) {
      c |= 0;
      return 1024 > c ? c + " B" : 1048576 > c ? (c / 1024).toFixed(2) + "KB" : (c / 1048576).toFixed(2) + "MB";
    };
    d.toSafeString = f;
    d.toSafeArrayString = function(c) {
      for (var e = [], n = 0;n < c.length;n++) {
        e.push(f(c[n]));
      }
      return e.join(", ");
    };
    d.utf8decode = function(c) {
      for (var e = new Uint8Array(4 * c.length), n = 0, f = 0, x = c.length;f < x;f++) {
        var d = c.charCodeAt(f);
        if (127 >= d) {
          e[n++] = d;
        } else {
          if (55296 <= d && 56319 >= d) {
            var a = c.charCodeAt(f + 1);
            56320 <= a && 57343 >= a && (d = ((d & 1023) << 10) + (a & 1023) + 65536, ++f);
          }
          0 !== (d & 4292870144) ? (e[n++] = 248 | d >>> 24 & 3, e[n++] = 128 | d >>> 18 & 63, e[n++] = 128 | d >>> 12 & 63, e[n++] = 128 | d >>> 6 & 63) : 0 !== (d & 4294901760) ? (e[n++] = 240 | d >>> 18 & 7, e[n++] = 128 | d >>> 12 & 63, e[n++] = 128 | d >>> 6 & 63) : 0 !== (d & 4294965248) ? (e[n++] = 224 | d >>> 12 & 15, e[n++] = 128 | d >>> 6 & 63) : e[n++] = 192 | d >>> 6 & 31;
          e[n++] = 128 | d & 63;
        }
      }
      return e.subarray(0, n);
    };
    d.utf8encode = function(c) {
      for (var e = 0, n = "";e < c.length;) {
        var f = c[e++] & 255;
        if (127 >= f) {
          n += String.fromCharCode(f);
        } else {
          var x = 192, d = 5;
          do {
            if ((f & (x >> 1 | 128)) === x) {
              break;
            }
            x = x >> 1 | 128;
            --d;
          } while (0 <= d);
          if (0 >= d) {
            n += String.fromCharCode(f);
          } else {
            for (var f = f & (1 << d) - 1, x = !1, a = 5;a >= d;--a) {
              var F = c[e++];
              if (128 != (F & 192)) {
                x = !0;
                break;
              }
              f = f << 6 | F & 63;
            }
            if (x) {
              for (d = e - (7 - a);d < e;++d) {
                n += String.fromCharCode(c[d] & 255);
              }
            } else {
              n = 65536 <= f ? n + String.fromCharCode(f - 65536 >> 10 & 1023 | 55296, f & 1023 | 56320) : n + String.fromCharCode(f);
            }
          }
        }
      }
      return n;
    };
    d.base64ArrayBuffer = function(n) {
      var f = "";
      n = new Uint8Array(n);
      for (var d = n.byteLength, x = d % 3, d = d - x, a, F, l, J, b = 0;b < d;b += 3) {
        J = n[b] << 16 | n[b + 1] << 8 | n[b + 2], a = (J & 16515072) >> 18, F = (J & 258048) >> 12, l = (J & 4032) >> 6, J &= 63, f += c("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[a], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[F], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[l], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[J]);
      }
      1 == x ? (J = n[d], f += e("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(J & 252) >> 2], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(J & 3) << 4], "==")) : 2 == x && (J = n[d] << 8 | n[d + 1], f += c("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(J & 64512) >> 10], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(J & 1008) >> 4], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(J & 15) << 
      2], "="));
      return f;
    };
    d.escapeString = function(c) {
      void 0 !== c && (c = c.replace(/[^\w$]/gi, "$"), /^\d/.test(c) && (c = "$" + c));
      return c;
    };
    d.fromCharCodeArray = function(c) {
      for (var e = "", n = 0;n < c.length;n += 16384) {
        var f = Math.min(c.length - n, 16384), e = e + String.fromCharCode.apply(null, c.subarray(n, n + f))
      }
      return e;
    };
    d.variableLengthEncodeInt32 = function(c) {
      for (var e = 32 - Math.clz32(c), n = Math.ceil(e / 6), e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[n], n = n - 1;0 <= n;n--) {
        e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[c >> 6 * n & 63];
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
      for (var e = d.fromEncoding(c.charCodeAt(0)), n = 0, f = 0;f < e;f++) {
        var x = 6 * (e - f - 1), n = n | d.fromEncoding(c.charCodeAt(1 + f)) << x
      }
      return n;
    };
    d.trimMiddle = function(c, e) {
      if (c.length <= e) {
        return c;
      }
      var n = e >> 1, f = e - n - 1;
      return c.substr(0, n) + "\u2026" + c.substr(c.length - f, f);
    };
    d.multiple = function(c, e) {
      for (var n = "", f = 0;f < e;f++) {
        n += c;
      }
      return n;
    };
    d.indexOfAny = function(c, e, n) {
      for (var f = c.length, d = 0;d < e.length;d++) {
        var x = c.indexOf(e[d], n);
        0 <= x && (f = Math.min(f, x));
      }
      return f === c.length ? -1 : f;
    };
    var n = Array(3), x = Array(4), F = Array(5), a = Array(6), l = Array(7), b = Array(8), h = Array(9);
    d.concat3 = e;
    d.concat4 = c;
    d.concat5 = function(c, e, n, f, d) {
      F[0] = c;
      F[1] = e;
      F[2] = n;
      F[3] = f;
      F[4] = d;
      return F.join("");
    };
    d.concat6 = function(c, e, n, f, d, x) {
      a[0] = c;
      a[1] = e;
      a[2] = n;
      a[3] = f;
      a[4] = d;
      a[5] = x;
      return a.join("");
    };
    d.concat7 = function(c, e, n, f, d, x, a) {
      l[0] = c;
      l[1] = e;
      l[2] = n;
      l[3] = f;
      l[4] = d;
      l[5] = x;
      l[6] = a;
      return l.join("");
    };
    d.concat8 = function(c, e, n, f, d, x, a, F) {
      b[0] = c;
      b[1] = e;
      b[2] = n;
      b[3] = f;
      b[4] = d;
      b[5] = x;
      b[6] = a;
      b[7] = F;
      return b.join("");
    };
    d.concat9 = function(c, e, n, f, d, x, a, F, l) {
      h[0] = c;
      h[1] = e;
      h[2] = n;
      h[3] = f;
      h[4] = d;
      h[5] = x;
      h[6] = a;
      h[7] = F;
      h[8] = l;
      return h.join("");
    };
  })(g.StringUtilities || (g.StringUtilities = {}));
  (function(d) {
    var f = new Uint8Array([7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21]), e = new Int32Array([-680876936, -389564586, 606105819, -1044525330, -176418897, 1200080426, -1473231341, -45705983, 1770035416, -1958414417, -42063, -1990404162, 1804603682, -40341101, -1502002290, 1236535329, -165796510, -1069501632, 
    643717713, -373897302, -701558691, 38016083, -660478335, -405537848, 568446438, -1019803690, -187363961, 1163531501, -1444681467, -51403784, 1735328473, -1926607734, -378558, -2022574463, 1839030562, -35309556, -1530992060, 1272893353, -155497632, -1094730640, 681279174, -358537222, -722521979, 76029189, -640364487, -421815835, 530742520, -995338651, -198630844, 1126891415, -1416354905, -57434055, 1700485571, -1894986606, -1051523, -2054922799, 1873313359, -30611744, -1560198380, 1309151649, 
    -145523070, -1120210379, 718787259, -343485551]);
    d.hashBytesTo32BitsMD5 = function(c, n, d) {
      var a = 1732584193, l = -271733879, b = -1732584194, h = 271733878, t = d + 72 & -64, v = new Uint8Array(t), k;
      for (k = 0;k < d;++k) {
        v[k] = c[n++];
      }
      v[k++] = 128;
      for (c = t - 8;k < c;) {
        v[k++] = 0;
      }
      v[k++] = d << 3 & 255;
      v[k++] = d >> 5 & 255;
      v[k++] = d >> 13 & 255;
      v[k++] = d >> 21 & 255;
      v[k++] = d >>> 29 & 255;
      v[k++] = 0;
      v[k++] = 0;
      v[k++] = 0;
      c = new Int32Array(16);
      for (k = 0;k < t;) {
        for (d = 0;16 > d;++d, k += 4) {
          c[d] = v[k] | v[k + 1] << 8 | v[k + 2] << 16 | v[k + 3] << 24;
        }
        var q = a;
        n = l;
        var p = b, r = h, g, w;
        for (d = 0;64 > d;++d) {
          16 > d ? (g = n & p | ~n & r, w = d) : 32 > d ? (g = r & n | ~r & p, w = 5 * d + 1 & 15) : 48 > d ? (g = n ^ p ^ r, w = 3 * d + 5 & 15) : (g = p ^ (n | ~r), w = 7 * d & 15);
          var m = r, q = q + g + e[d] + c[w] | 0;
          g = f[d];
          r = p;
          p = n;
          n = n + (q << g | q >>> 32 - g) | 0;
          q = m;
        }
        a = a + q | 0;
        l = l + n | 0;
        b = b + p | 0;
        h = h + r | 0;
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
  })(g.HashUtilities || (g.HashUtilities = {}));
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
  g.Random = t;
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
        for (var e = this._list, c = 0, n = 0;n < e.length;n++) {
          var d = e[n];
          d && (0 === d._referenceCount ? (e[n] = null, c++) : f(d));
        }
        if (16 < c && c > e.length >> 2) {
          c = [];
          for (n = 0;n < e.length;n++) {
            (d = e[n]) && 0 < d._referenceCount && c.push(d);
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
  g.WeakList = a;
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
  })(h = g.NumberUtilities || (g.NumberUtilities = {}));
  (function(d) {
    d[d.MaxU16 = 65535] = "MaxU16";
    d[d.MaxI16 = 32767] = "MaxI16";
    d[d.MinI16 = -32768] = "MinI16";
  })(g.Numbers || (g.Numbers = {}));
  var q;
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
  })(q = g.IntegerUtilities || (g.IntegerUtilities = {}));
  (function(d) {
    function f(e, c, n, f, d, a) {
      return (n - e) * (a - c) - (f - c) * (d - e);
    }
    d.pointInPolygon = function(e, c, n) {
      for (var f = 0, d = n.length - 2, a = 0;a < d;a += 2) {
        var l = n[a + 0], b = n[a + 1], h = n[a + 2], k = n[a + 3];
        (b <= c && k > c || b > c && k <= c) && e < l + (c - b) / (k - b) * (h - l) && f++;
      }
      return 1 === (f & 1);
    };
    d.signedArea = f;
    d.counterClockwise = function(e, c, n, d, a, l) {
      return 0 < f(e, c, n, d, a, l);
    };
    d.clockwise = function(e, c, n, d, a, l) {
      return 0 > f(e, c, n, d, a, l);
    };
    d.pointInPolygonInt32 = function(e, c, n) {
      e |= 0;
      c |= 0;
      for (var f = 0, d = n.length - 2, a = 0;a < d;a += 2) {
        var l = n[a + 0], b = n[a + 1], h = n[a + 2], k = n[a + 3];
        (b <= c && k > c || b > c && k <= c) && e < l + (c - b) / (k - b) * (h - l) && f++;
      }
      return 1 === (f & 1);
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
      for (var c = (e || "").split("\n"), n = 0;n < c.length;n++) {
        this.colorLn(f, c[n]);
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
      for (var n = 0, d = f.length;n < d;n++) {
        var a = "";
        e && (a = null === f[n] ? "null" : void 0 === f[n] ? "undefined" : f[n].constructor.name, a += " ");
        var l = c ? "" : ("" + n).padRight(" ", 4);
        this.writeLn(l + a + f[n]);
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
  g.IndentingWriter = a;
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
        for (var n = this._compare;e;) {
          if (0 < n(e.value, f.value)) {
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
        var n = f(e.value);
        if (n === d.RETURN) {
          break;
        } else {
          n === d.DELETE ? e = c ? c.next = e.next : this._head = this._head.next : (c = e, e = e.next);
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
  g.SortedList = a;
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
  g.CircularBuffer = a;
  (function(d) {
    function f(c) {
      return c + (d.BITS_PER_WORD - 1) >> d.ADDRESS_BITS_PER_WORD << d.ADDRESS_BITS_PER_WORD;
    }
    function e(c, e) {
      c = c || "1";
      e = e || "0";
      for (var n = "", f = 0;f < length;f++) {
        n += this.get(f) ? c : e;
      }
      return n;
    }
    function c(c) {
      for (var e = [], n = 0;n < length;n++) {
        this.get(n) && e.push(c ? c[n] : n);
      }
      return e.join(", ");
    }
    d.ADDRESS_BITS_PER_WORD = 5;
    d.BITS_PER_WORD = 1 << d.ADDRESS_BITS_PER_WORD;
    d.BIT_INDEX_MASK = d.BITS_PER_WORD - 1;
    var n = function() {
      function c(e) {
        this.size = f(e);
        this.dirty = this.count = 0;
        this.length = e;
        this.bits = new Uint32Array(this.size >> d.ADDRESS_BITS_PER_WORD);
      }
      c.prototype.recount = function() {
        if (this.dirty) {
          for (var c = this.bits, e = 0, n = 0, f = c.length;n < f;n++) {
            var d = c[n], d = d - (d >> 1 & 1431655765), d = (d & 858993459) + (d >> 2 & 858993459), e = e + (16843009 * (d + (d >> 4) & 252645135) >> 24)
          }
          this.count = e;
          this.dirty = 0;
        }
      };
      c.prototype.set = function(c) {
        var e = c >> d.ADDRESS_BITS_PER_WORD, n = this.bits[e];
        c = n | 1 << (c & d.BIT_INDEX_MASK);
        this.bits[e] = c;
        this.dirty |= n ^ c;
      };
      c.prototype.setAll = function() {
        for (var c = this.bits, e = 0, n = c.length;e < n;e++) {
          c[e] = 4294967295;
        }
        this.count = this.size;
        this.dirty = 0;
      };
      c.prototype.assign = function(c) {
        this.count = c.count;
        this.dirty = c.dirty;
        this.size = c.size;
        for (var e = 0, n = this.bits.length;e < n;e++) {
          this.bits[e] = c.bits[e];
        }
      };
      c.prototype.clear = function(c) {
        var e = c >> d.ADDRESS_BITS_PER_WORD, n = this.bits[e];
        c = n & ~(1 << (c & d.BIT_INDEX_MASK));
        this.bits[e] = c;
        this.dirty |= n ^ c;
      };
      c.prototype.get = function(c) {
        return 0 !== (this.bits[c >> d.ADDRESS_BITS_PER_WORD] & 1 << (c & d.BIT_INDEX_MASK));
      };
      c.prototype.clearAll = function() {
        for (var c = this.bits, e = 0, n = c.length;e < n;e++) {
          c[e] = 0;
        }
        this.dirty = this.count = 0;
      };
      c.prototype._union = function(c) {
        var e = this.dirty, n = this.bits;
        c = c.bits;
        for (var f = 0, d = n.length;f < d;f++) {
          var x = n[f], a = x | c[f];
          n[f] = a;
          e |= x ^ a;
        }
        this.dirty = e;
      };
      c.prototype.intersect = function(c) {
        var e = this.dirty, n = this.bits;
        c = c.bits;
        for (var f = 0, d = n.length;f < d;f++) {
          var x = n[f], a = x & c[f];
          n[f] = a;
          e |= x ^ a;
        }
        this.dirty = e;
      };
      c.prototype.subtract = function(c) {
        var e = this.dirty, n = this.bits;
        c = c.bits;
        for (var f = 0, d = n.length;f < d;f++) {
          var x = n[f], a = x & ~c[f];
          n[f] = a;
          e |= x ^ a;
        }
        this.dirty = e;
      };
      c.prototype.negate = function() {
        for (var c = this.dirty, e = this.bits, n = 0, f = e.length;n < f;n++) {
          var d = e[n], x = ~d;
          e[n] = x;
          c |= d ^ x;
        }
        this.dirty = c;
      };
      c.prototype.forEach = function(c) {
        for (var e = this.bits, n = 0, f = e.length;n < f;n++) {
          var x = e[n];
          if (x) {
            for (var a = 0;a < d.BITS_PER_WORD;a++) {
              x & 1 << a && c(n * d.BITS_PER_WORD + a);
            }
          }
        }
      };
      c.prototype.toArray = function() {
        for (var c = [], e = this.bits, n = 0, f = e.length;n < f;n++) {
          var x = e[n];
          if (x) {
            for (var a = 0;a < d.BITS_PER_WORD;a++) {
              x & 1 << a && c.push(n * d.BITS_PER_WORD + a);
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
        for (var n = 0, f = e.length;n < f;n++) {
          if (e[n] !== c[n]) {
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
        for (var n = 0, f = e.length;n < f;n++) {
          if ((e[n] | c[n]) !== e[n]) {
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
    d.Uint32ArrayBitSet = n;
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
          for (var n = 0;n < d.BITS_PER_WORD;n++) {
            e & 1 << n && c(n);
          }
        }
      };
      c.prototype.toArray = function() {
        var c = [], e = this.bits;
        if (e) {
          for (var n = 0;n < d.BITS_PER_WORD;n++) {
            e & 1 << n && c.push(n);
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
    n.prototype.toString = c;
    n.prototype.toBitString = e;
    d.BitSetFunctor = function(c) {
      var e = 1 === f(c) >> d.ADDRESS_BITS_PER_WORD ? x : n;
      return function() {
        return new e(c);
      };
    };
  })(g.BitSets || (g.BitSets = {}));
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
  g.ColorStyle = a;
  a = function() {
    function d(f, e, c, n) {
      this.xMin = f | 0;
      this.yMin = e | 0;
      this.xMax = c | 0;
      this.yMax = n | 0;
    }
    d.FromUntyped = function(f) {
      return new d(f.xMin, f.yMin, f.xMax, f.yMax);
    };
    d.FromRectangle = function(f) {
      return new d(20 * f.x | 0, 20 * f.y | 0, 20 * (f.x + f.width) | 0, 20 * (f.y + f.height) | 0);
    };
    d.prototype.setElements = function(f, e, c, n) {
      this.xMin = f;
      this.yMin = e;
      this.xMax = c;
      this.yMax = n;
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
  g.Bounds = a;
  a = function() {
    function d(f, e, c, n) {
      r.assert(m(f));
      r.assert(m(e));
      r.assert(m(c));
      r.assert(m(n));
      this._xMin = f | 0;
      this._yMin = e | 0;
      this._xMax = c | 0;
      this._yMax = n | 0;
    }
    d.FromUntyped = function(f) {
      return new d(f.xMin, f.yMin, f.xMax, f.yMax);
    };
    d.FromRectangle = function(f) {
      return new d(20 * f.x | 0, 20 * f.y | 0, 20 * (f.x + f.width) | 0, 20 * (f.y + f.height) | 0);
    };
    d.prototype.setElements = function(f, e, c, n) {
      this.xMin = f;
      this.yMin = e;
      this.xMax = c;
      this.yMax = n;
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
      r.assert(m(f));
      this._xMin = f;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "yMin", {get:function() {
      return this._yMin;
    }, set:function(f) {
      r.assert(m(f));
      this._yMin = f | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "xMax", {get:function() {
      return this._xMax;
    }, set:function(f) {
      r.assert(m(f));
      this._xMax = f | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "width", {get:function() {
      return this._xMax - this._xMin;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "yMax", {get:function() {
      return this._yMax;
    }, set:function(f) {
      r.assert(m(f));
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
  g.DebugBounds = a;
  a = function() {
    function d(f, e, c, n) {
      this.r = f;
      this.g = e;
      this.b = c;
      this.a = n;
    }
    d.FromARGB = function(f) {
      return new d((f >> 16 & 255) / 255, (f >> 8 & 255) / 255, (f >> 0 & 255) / 255, (f >> 24 & 255) / 255);
    };
    d.FromRGBA = function(f) {
      return d.FromARGB(k.RGBAToARGB(f));
    };
    d.prototype.toRGBA = function() {
      return 255 * this.r << 24 | 255 * this.g << 16 | 255 * this.b << 8 | 255 * this.a;
    };
    d.prototype.toCSSStyle = function() {
      return k.rgbaToCSSStyle(this.toRGBA());
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
  g.Color = a;
  var k;
  (function(d) {
    function f(c) {
      var e, n, f = c >> 24 & 255;
      n = (Math.imul(c >> 16 & 255, f) + 127) / 255 | 0;
      e = (Math.imul(c >> 8 & 255, f) + 127) / 255 | 0;
      c = (Math.imul(c >> 0 & 255, f) + 127) / 255 | 0;
      return f << 24 | n << 16 | e << 8 | c;
    }
    function e() {
      if (!c) {
        c = new Uint8Array(65536);
        for (var e = 0;256 > e;e++) {
          for (var n = 0;256 > n;n++) {
            c[(n << 8) + e] = Math.imul(255, e) / n;
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
      var e, n, f = c >> 24 & 255;
      n = Math.imul(255, c >> 16 & 255) / f & 255;
      e = Math.imul(255, c >> 8 & 255) / f & 255;
      c = Math.imul(255, c >> 0 & 255) / f & 255;
      return f << 24 | n << 16 | e << 8 | c;
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
      var n = e >> 24 & 255;
      if (0 === n) {
        return 0;
      }
      if (255 === n) {
        return e;
      }
      var f, d, a = n << 8, l = c;
      d = l[a + (e >> 16 & 255)];
      f = l[a + (e >> 8 & 255)];
      e = l[a + (e >> 0 & 255)];
      return n << 24 | d << 16 | f << 8 | e;
    };
    d.blendPremultipliedBGRA = function(c, e) {
      var n, f;
      f = 256 - (e & 255);
      n = Math.imul(c & 16711935, f) >> 8;
      f = Math.imul(c >> 8 & 16711935, f) >> 8;
      return ((e >> 8 & 16711935) + f & 16711935) << 8 | (e & 16711935) + n & 16711935;
    };
    var n = q.swap32;
    d.convertImage = function(e, d, a, l) {
      var b = a.length;
      if (e === d) {
        if (a !== l) {
          for (e = 0;e < b;e++) {
            l[e] = a[e];
          }
        }
      } else {
        if (1 === e && 3 === d) {
          for (g.ColorUtilities.ensureUnpremultiplyTable(), e = 0;e < b;e++) {
            var h = a[e];
            d = h & 255;
            if (0 === d) {
              l[e] = 0;
            } else {
              if (255 === d) {
                l[e] = 4278190080 | h >> 8 & 16777215;
              } else {
                var k = h >> 24 & 255, t = h >> 16 & 255, h = h >> 8 & 255, q = d << 8, p = c, h = p[q + h], t = p[q + t], k = p[q + k];
                l[e] = d << 24 | k << 16 | t << 8 | h;
              }
            }
          }
        } else {
          if (2 === e && 3 === d) {
            for (e = 0;e < b;e++) {
              l[e] = n(a[e]);
            }
          } else {
            if (3 === e && 1 === d) {
              for (e = 0;e < b;e++) {
                d = a[e], l[e] = n(f(d & 4278255360 | d >> 16 & 255 | (d & 255) << 16));
              }
            } else {
              for (r.somewhatImplemented("Image Format Conversion: " + v[e] + " -> " + v[d]), e = 0;e < b;e++) {
                l[e] = a[e];
              }
            }
          }
        }
      }
    };
  })(k = g.ColorUtilities || (g.ColorUtilities = {}));
  a = function() {
    function d(f) {
      void 0 === f && (f = 32);
      this._list = [];
      this._maxSize = f;
    }
    d.prototype.acquire = function(f) {
      if (d._enabled) {
        for (var e = this._list, c = 0;c < e.length;c++) {
          var n = e[c];
          if (n.byteLength >= f) {
            return e.splice(c, 1), n;
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
  g.ArrayBufferPool = a;
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
  g.registerCSSFont = function(d, f, e) {
    if (inBrowser) {
      var c = document.head;
      c.insertBefore(document.createElement("style"), c.firstChild);
      c = document.styleSheets[0];
      f = "@font-face{font-family:swffont" + d + ";src:url(data:font/opentype;base64," + g.StringUtilities.base64ArrayBuffer(f.buffer) + ")}";
      c.insertRule(f, c.cssRules.length);
      e && (e = document.createElement("div"), e.style.fontFamily = "swffont" + d, e.innerHTML = "hello", document.body.appendChild(e), document.body.removeChild(e));
    } else {
      r.warning("Cannot register CSS font outside the browser");
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
  })(g.ExternalInterfaceService || (g.ExternalInterfaceService = {}));
  (function(d) {
    d.instance = {setClipboard:function(f) {
    }};
  })(g.ClipboardService || (g.ClipboardService = {}));
  a = function() {
    function d() {
      this._queues = {};
    }
    d.prototype.register = function(f, e) {
      r.assert(f);
      r.assert(e);
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
      r.assert(f);
      r.assert(e);
      var c = this._queues[f];
      if (c) {
        var n = c.indexOf(e);
        -1 !== n && c.splice(n, 1);
        0 === c.length && (this._queues[f] = null);
      }
    };
    d.prototype.notify = function(f, e) {
      var c = this._queues[f];
      if (c) {
        c = c.slice();
        e = Array.prototype.slice.call(arguments, 0);
        for (var n = 0;n < c.length;n++) {
          c[n].apply(null, e);
        }
      }
    };
    d.prototype.notify1 = function(f, e) {
      var c = this._queues[f];
      if (c) {
        for (var c = c.slice(), n = 0;n < c.length;n++) {
          (0,c[n])(f, e);
        }
      }
    };
    return d;
  }();
  g.Callback = a;
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
  })(g.UI || (g.UI = {}));
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
  g.PromiseWrapper = a;
})(Shumway || (Shumway = {}));
(function() {
  function g(c) {
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
  function m(c, e) {
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
  function u(c) {
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
      r({reaction:c[f], argument:e});
    }
  }
  function r(c) {
    0 === e.length && setTimeout(a, 0);
    e.push(c);
  }
  function a() {
    for (;0 < e.length;) {
      var c = e[0];
      try {
        a: {
          var n = c.reaction, f = n.deferred, a = n.handler, l = void 0, b = void 0;
          try {
            l = a(c.argument);
          } catch (h) {
            var k = f.reject;
            k(h);
            break a;
          }
          if (l === f.promise) {
            k = f.reject, k(new TypeError("Self resolution"));
          } else {
            try {
              if (b = m(l, f), !b) {
                var v = f.resolve;
                v(l);
              }
            } catch (t) {
              k = f.reject, k(t);
            }
          }
        }
      } catch (q) {
        if ("function" === typeof d.onerror) {
          d.onerror(q);
        }
      }
      e.shift();
    }
  }
  function l(c) {
    throw c;
  }
  function t(c) {
    return c;
  }
  function h(c) {
    return function(e) {
      b(c, e);
    };
  }
  function q(c) {
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
  function k(c, e, f) {
    return function(d) {
      if (d === c) {
        return f(new TypeError("Self resolution"));
      }
      var a = c.promiseConstructor;
      if (u(d) && d.promiseConstructor === a) {
        return d.then(e, f);
      }
      a = g(a);
      return m(d, a) ? a.promise.then(e, f) : e(d);
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
    var e = q(this), f = h(this);
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
      var e = 0, d = [], a, l, b = new f.Promise(function(c, e) {
        a = c;
        l = e;
      });
      c.forEach(function(c, f) {
        e++;
        c.then(function(c) {
          d[f] = c;
          e--;
          0 === e && a(d);
        }, l);
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
      var e = g(this), f = [], d = {countdown:0}, a = 0;
      c.forEach(function(c) {
        this.cast(c).then(v(a, f, e, d), e.reject);
        a++;
        d.countdown++;
      }, this);
      0 === a && e.resolve(f);
      return e.promise;
    };
    d.cast = function(c) {
      if (u(c)) {
        return c;
      }
      var e = g(this);
      e.resolve(c);
      return e.promise;
    };
    d.reject = function(c) {
      var e = g(this);
      e.reject(c);
      return e.promise;
    };
    d.resolve = function(c) {
      var e = g(this);
      e.resolve(c);
      return e.promise;
    };
    d.prototype = {"catch":function(c) {
      this.then(void 0, c);
    }, then:function(c, e) {
      if (!u(this)) {
        throw new TypeError("this is not a Promises");
      }
      var f = g(this.promiseConstructor), d = "function" === typeof e ? e : l, a = {deferred:f, handler:k(this, "function" === typeof c ? c : t, d)}, d = {deferred:f, handler:d};
      switch(this.promiseStatus) {
        case "unresolved":
          this.resolveReactions.push(a);
          this.rejectReactions.push(d);
          break;
        case "has-resolution":
          r({reaction:a, argument:this.result});
          break;
        case "has-rejection":
          r({reaction:d, argument:this.result});
      }
      return f.promise;
    }};
    f.Promise = d;
  }
})();
"undefined" !== typeof exports && (exports.Shumway = Shumway);
(function() {
  function g(g, u, b) {
    g[u] || Object.defineProperty(g, u, {value:b, writable:!0, configurable:!0, enumerable:!1});
  }
  g(String.prototype, "padRight", function(g, u) {
    var b = this, w = b.replace(/\033\[[0-9]*m/g, "").length;
    if (!g || w >= u) {
      return b;
    }
    for (var w = (u - w) / g.length, r = 0;r < w;r++) {
      b += g;
    }
    return b;
  });
  g(String.prototype, "padLeft", function(g, u) {
    var b = this, w = b.length;
    if (!g || w >= u) {
      return b;
    }
    for (var w = (u - w) / g.length, r = 0;r < w;r++) {
      b = g + b;
    }
    return b;
  });
  g(String.prototype, "trim", function() {
    return this.replace(/^\s+|\s+$/g, "");
  });
  g(String.prototype, "endsWith", function(g) {
    return -1 !== this.indexOf(g, this.length - g.length);
  });
  g(Array.prototype, "replace", function(g, u) {
    if (g === u) {
      return 0;
    }
    for (var b = 0, w = 0;w < this.length;w++) {
      this[w] === g && (this[w] = u, b++);
    }
    return b;
  });
})();
(function(g) {
  (function(m) {
    var u = g.isObject, b = function() {
      function a(l, b, q, p) {
        this.shortName = l;
        this.longName = b;
        this.type = q;
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
    m.Argument = b;
    var w = function() {
      function a() {
        this.args = [];
      }
      a.prototype.addArgument = function(a, l, q, p) {
        a = new b(a, l, q, p);
        this.args.push(a);
        return a;
      };
      a.prototype.addBoundOption = function(a) {
        this.args.push(new b(a.shortName, a.longName, a.type, {parse:function(l) {
          a.value = l;
        }}));
      };
      a.prototype.addBoundOptionSet = function(a) {
        var l = this;
        a.options.forEach(function(a) {
          r.isOptionSet(a) ? l.addBoundOptionSet(a) : l.addBoundOption(a);
        });
      };
      a.prototype.getUsage = function() {
        var a = "";
        this.args.forEach(function(l) {
          a = l.positional ? a + l.longName : a + ("[-" + l.shortName + "|--" + l.longName + ("boolean" === l.type ? "" : " " + l.type[0].toUpperCase()) + "]");
          a += " ";
        });
        return a;
      };
      a.prototype.parse = function(a) {
        var l = {}, b = [];
        this.args.forEach(function(f) {
          f.positional ? b.push(f) : (l["-" + f.shortName] = f, l["--" + f.longName] = f);
        });
        for (var p = [];a.length;) {
          var k = a.shift(), v = null, d = k;
          if ("--" == k) {
            p = p.concat(a);
            break;
          } else {
            if ("-" == k.slice(0, 1) || "--" == k.slice(0, 2)) {
              v = l[k];
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
    m.ArgumentParser = w;
    var r = function() {
      function l(a, l) {
        void 0 === l && (l = null);
        this.open = !1;
        this.name = a;
        this.settings = l || {};
        this.options = [];
      }
      l.isOptionSet = function(b) {
        return b instanceof l ? !0 : "object" !== typeof b || null === b || b instanceof a ? !1 : "options" in b && "name" in b && "settings" in b;
      };
      l.prototype.register = function(a) {
        if (l.isOptionSet(a)) {
          for (var b = 0;b < this.options.length;b++) {
            var q = this.options[b];
            if (l.isOptionSet(q) && q.name === a.name) {
              return q;
            }
          }
        }
        this.options.push(a);
        if (this.settings) {
          if (l.isOptionSet(a)) {
            b = this.settings[a.name], u(b) && (a.settings = b.settings, a.open = b.open);
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
      l.prototype.trace = function(a) {
        a.enter(this.name + " {");
        this.options.forEach(function(l) {
          l.trace(a);
        });
        a.leave("}");
      };
      l.prototype.getSettings = function() {
        var a = {};
        this.options.forEach(function(b) {
          l.isOptionSet(b) ? a[b.name] = {settings:b.getSettings(), open:b.open} : a[b.longName] = b.value;
        });
        return a;
      };
      l.prototype.setSettings = function(a) {
        a && this.options.forEach(function(b) {
          l.isOptionSet(b) ? b.name in a && b.setSettings(a[b.name].settings) : b.longName in a && (b.value = a[b.longName]);
        });
      };
      return l;
    }();
    m.OptionSet = r;
    var a = function() {
      function a(l, b, q, p, k, v) {
        void 0 === v && (v = null);
        this.longName = b;
        this.shortName = l;
        this.type = q;
        this.value = this.defaultValue = p;
        this.description = k;
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
    m.Option = a;
  })(g.Options || (g.Options = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(m) {
    m.ROOT = "Shumway Options";
    m.shumwayOptions = new g.Options.OptionSet(m.ROOT);
    m.setSettings = function(b) {
      m.shumwayOptions.setSettings(b);
    };
    m.getSettings = function() {
      return m.shumwayOptions.getSettings();
    };
  })(g.Settings || (g.Settings = {}));
  var m = g.Options.Option;
  g.loggingOptions = g.Settings.shumwayOptions.register(new g.Options.OptionSet("Logging Options"));
  g.omitRepeatedWarnings = g.loggingOptions.register(new m("wo", "warnOnce", "boolean", !0, "Omit Repeated Warnings"));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(m) {
    var u = function() {
      function b(b, r) {
        this._parent = b;
        this._timers = g.ObjectUtilities.createMap();
        this._name = r;
        this._count = this._total = this._last = this._begin = 0;
      }
      b.time = function(g, r) {
        b.start(g);
        r();
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
        this._begin = g.getTicks();
      };
      b.prototype.stop = function() {
        this._last = g.getTicks() - this._begin;
        this._total += this._last;
        this._count += 1;
      };
      b.prototype.toJSON = function() {
        return {name:this._name, total:this._total, timers:this._timers};
      };
      b.prototype.trace = function(b) {
        b.enter(this._name + ": " + this._total.toFixed(2) + " ms, count: " + this._count + ", average: " + (this._total / this._count).toFixed(2) + " ms");
        for (var r in this._timers) {
          this._timers[r].trace(b);
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
    m.Timer = u;
    u = function() {
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
        this._counts = g.ObjectUtilities.createMap();
        this._times = g.ObjectUtilities.createMap();
      };
      b.prototype.toJSON = function() {
        return {counts:this._counts, times:this._times};
      };
      b.prototype.count = function(b, r, a) {
        void 0 === r && (r = 1);
        void 0 === a && (a = 0);
        if (this._enabled) {
          return void 0 === this._counts[b] && (this._counts[b] = 0, this._times[b] = 0), this._counts[b] += r, this._times[b] += a, this._counts[b];
        }
      };
      b.prototype.trace = function(b) {
        for (var r in this._counts) {
          b.writeLn(r + ": " + this._counts[r]);
        }
      };
      b.prototype._pairToString = function(b, r) {
        var a = r[0], l = r[1], t = b[a], a = a + ": " + l;
        t && (a += ", " + t.toFixed(4), 1 < l && (a += " (" + (t / l).toFixed(4) + ")"));
        return a;
      };
      b.prototype.toStringSorted = function() {
        var b = this, r = this._times, a = [], l;
        for (l in this._counts) {
          a.push([l, this._counts[l]]);
        }
        a.sort(function(a, l) {
          return l[1] - a[1];
        });
        return a.map(function(a) {
          return b._pairToString(r, a);
        }).join(", ");
      };
      b.prototype.traceSorted = function(b, r) {
        void 0 === r && (r = !1);
        var a = this, l = this._times, t = [], h;
        for (h in this._counts) {
          t.push([h, this._counts[h]]);
        }
        t.sort(function(a, l) {
          return l[1] - a[1];
        });
        r ? b.writeLn(t.map(function(b) {
          return a._pairToString(l, b);
        }).join(", ")) : t.forEach(function(h) {
          b.writeLn(a._pairToString(l, h));
        });
      };
      b.instance = new b(!0);
      return b;
    }();
    m.Counter = u;
    u = function() {
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
        for (var b = 0, r = 0;r < this._count;r++) {
          b += this._samples[r];
        }
        return b / this._count;
      };
      return b;
    }();
    m.Average = u;
  })(g.Metrics || (g.Metrics = {}));
})(Shumway || (Shumway = {}));
var __extends = this.__extends || function(g, m) {
  function u() {
    this.constructor = g;
  }
  for (var b in m) {
    m.hasOwnProperty(b) && (g[b] = m[b]);
  }
  u.prototype = m.prototype;
  g.prototype = new u;
};
(function(g) {
  (function(g) {
    function u(e) {
      for (var c = Math.max.apply(null, e), n = e.length, f = 1 << c, d = new Uint32Array(f), a = c << 16 | 65535, l = 0;l < f;l++) {
        d[l] = a;
      }
      for (var a = 0, l = 1, b = 2;l <= c;a <<= 1, ++l, b <<= 1) {
        for (var h = 0;h < n;++h) {
          if (e[h] === l) {
            for (var k = 0, v = 0;v < l;++v) {
              k = 2 * k + (a >> v & 1);
            }
            for (v = k;v < f;v += b) {
              d[v] = l << 16 | h;
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
      e.inflate = function(c, n, f) {
        var d = new Uint8Array(n), a = 0;
        n = e.create(f);
        n.onData = function(c) {
          var e = Math.min(c.length, d.length - a);
          e && g.memCopy(d, c, a, 0, e);
          a += e;
        };
        n.onError = function(c) {
          throw Error(c);
        };
        n.push(c);
        n.close();
        return d;
      };
      return e;
    }();
    g.Inflate = b;
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
        if (!k) {
          r = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
          a = new Uint16Array(30);
          l = new Uint8Array(30);
          for (var f = c = 0, d = 1;30 > c;++c) {
            a[c] = d, d += 1 << (l[c] = ~~((f += 2 < c ? 1 : 0) / 2));
          }
          var b = new Uint8Array(288);
          for (c = 0;32 > c;++c) {
            b[c] = 5;
          }
          t = u(b.subarray(0, 32));
          h = new Uint16Array(29);
          q = new Uint8Array(29);
          f = c = 0;
          for (d = 3;29 > c;++c) {
            h[c] = d - (28 == c ? 1 : 0), d += 1 << (q[c] = ~~((f += 4 < c ? 1 : 0) / 4 % 6));
          }
          for (c = 0;288 > c;++c) {
            b[c] = 144 > c || 279 < c ? 8 : 256 > c ? 9 : 7;
          }
          p = u(b);
          k = !0;
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
        var l = f & 7, f = f >> 3, d = d - 3;
        switch(l >> 1) {
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
            this._literalTable = p;
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
            for (var e = {numLiteralCodes:(f & 31) + 257, numDistanceCodes:(f >> 5 & 31) + 1, codeLengthTable:void 0, bitLengths:void 0, codesRead:0, dupBits:0}, f = f >> 14, d = d - 14, h = new Uint8Array(19), k = 0;k < b;++k) {
              3 > d && (f |= c[a++] << d, d += 8), h[r[k]] = f & 7, f >>= 3, d -= 3;
            }
            for (;19 > k;k++) {
              h[r[k]] = 0;
            }
            e.bitLengths = new Uint8Array(e.numLiteralCodes + e.numDistanceCodes);
            e.codeLengthTable = u(h);
            this._block2State = e;
            c = 3;
            break;
          default:
            return this._error("inflate: unsupported block type"), !1;
        }
        this._isFinalBlock = !!(l & 1);
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
        var c = this._bufferPosition, e = this._windowPosition, f = this._block0Read, d = 65794 - e, a = this._bufferSize - c, l = a < f, b = Math.min(d, a, f);
        this._window.set(this._buffer.subarray(c, c + b), e);
        this._windowPosition = e + b;
        this._bufferPosition = c + b;
        this._block0Read = f - b;
        return f === b ? (this._state = 0, !1) : l && d < a;
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
          var a = this._bufferPosition, l = this._bufferSize;
          do {
            if (a >= l) {
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
        var c = this._block2State, e = c.numLiteralCodes + c.numDistanceCodes, f = c.bitLengths, d = c.codesRead, a = 0 < d ? f[d - 1] : 0, l = c.codeLengthTable, b;
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
          var h = this._readCode(l);
          if (0 > h) {
            return c.codesRead = d, !0;
          }
          if (16 > h) {
            f[d++] = a = h;
          } else {
            var k;
            switch(h) {
              case 16:
                k = 2;
                b = 3;
                h = a;
                break;
              case 17:
                b = k = 3;
                h = 0;
                break;
              case 18:
                k = 7, b = 11, h = 0;
            }
            for (;b--;) {
              f[d++] = h;
            }
            b = this._readBits(k);
            if (0 > b) {
              return c.codesRead = d, c.dupBits = k, !0;
            }
            for (;b--;) {
              f[d++] = h;
            }
            a = h;
          }
        }
        this._literalTable = u(f.subarray(0, c.numLiteralCodes));
        this._distanceTable = u(f.subarray(c.numLiteralCodes));
        this._state = 4;
        this._block2State = null;
        return !1;
      };
      c.prototype._decodeBlock = function() {
        var c = this._literalTable, e = this._distanceTable, f = this._window, d = this._windowPosition, b = this._copyState, k, v, p, r;
        if (0 !== b.state) {
          switch(b.state) {
            case 1:
              if (0 > (k = this._readBits(b.lenBits))) {
                return !0;
              }
              b.len += k;
              b.state = 2;
            case 2:
              if (0 > (k = this._readCode(e))) {
                return !0;
              }
              b.distBits = l[k];
              b.dist = a[k];
              b.state = 3;
            case 3:
              k = 0;
              if (0 < b.distBits && 0 > (k = this._readBits(b.distBits))) {
                return !0;
              }
              r = b.dist + k;
              v = b.len;
              for (k = d - r;v--;) {
                f[d++] = f[k++];
              }
              b.state = 0;
              if (65536 <= d) {
                return this._windowPosition = d, !1;
              }
              break;
          }
        }
        do {
          k = this._readCode(c);
          if (0 > k) {
            return this._windowPosition = d, !0;
          }
          if (256 > k) {
            f[d++] = k;
          } else {
            if (256 < k) {
              this._windowPosition = d;
              k -= 257;
              p = q[k];
              v = h[k];
              k = 0 === p ? 0 : this._readBits(p);
              if (0 > k) {
                return b.state = 1, b.len = v, b.lenBits = p, !0;
              }
              v += k;
              k = this._readCode(e);
              if (0 > k) {
                return b.state = 2, b.len = v, !0;
              }
              p = l[k];
              r = a[k];
              k = 0 === p ? 0 : this._readBits(p);
              if (0 > k) {
                return b.state = 3, b.len = v, b.dist = r, b.distBits = p, !0;
              }
              r += k;
              for (k = d - r;v--;) {
                f[d++] = f[k++];
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
    }(b), r, a, l, t, h, q, p, k = !1, v = function(e) {
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
    g.Adler32 = f;
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
    g.Deflate = d;
  })(g.ArrayUtilities || (g.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(g) {
    function u(c) {
      for (var e = new Uint16Array(c), f = 0;f < c;f++) {
        e[f] = 1024;
      }
      return e;
    }
    function b(c, e, f, d) {
      for (var a = 1, b = 0, l = 0;l < f;l++) {
        var k = d.decodeBit(c, a + e), a = (a << 1) + k, b = b | k << l
      }
      return b;
    }
    function w(c, e) {
      var f = [];
      f.length = e;
      for (var d = 0;d < e;d++) {
        f[d] = new h(c);
      }
      return f;
    }
    var r = function() {
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
    }(), l = function() {
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
        for (var f = this.pos, d = this.size, a = this.buf, b = c <= f ? f - c : d - c + f, l = e;0 < l;) {
          for (var k = Math.min(Math.min(l, d - f), d - b), h = 0;h < k;h++) {
            var v = a[b++];
            a[f++] = v;
          }
          f === d && (this.pos = f, this.flush(), f = 0, this.isFull = !0);
          b === d && (b = 0);
          l -= k;
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
    }(), h = function() {
      function c(c) {
        this.numBits = c;
        this.probs = u(1 << c);
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
    }(), q = function() {
      function c() {
        this.choice = u(2);
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
        this.rangeDec = new t(c);
        this.outWindow = new l(e);
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
            var l = f >> 7 & 1, f = f << 1, k = d.decodeBit(this.litProbs, a + ((1 + l << 8) + b)), b = b << 1 | k;
            if (l !== k) {
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
        this.litProbs = u(768 << this.lc + this.lp);
        this.posSlotDecoder = w(6, 4);
        this.alignDecoder = new h(4);
        this.posDecoders = u(115);
        this.isMatch = u(192);
        this.isRep = u(12);
        this.isRepG0 = u(12);
        this.isRepG1 = u(12);
        this.isRepG2 = u(12);
        this.isRep0Long = u(192);
        this.lenDecoder = new q;
        this.repLenDecoder = new q;
      };
      c.prototype.decode = function(c) {
        for (var e = this.rangeDec, a = this.outWindow, b = this.pb, l = this.dictSize, h = this.markerIsMandatory, p = this.leftToUnpack, q = this.isMatch, r = this.isRep, t = this.isRepG0, g = this.isRepG1, m = this.isRepG2, u = this.isRep0Long, w = this.lenDecoder, A = this.repLenDecoder, B = this.reps[0], D = this.reps[1], y = this.reps[2], G = this.reps[3], C = this.state;;) {
          if (c && 48 > e.inStream.available) {
            this.outWindow.flush();
            break;
          }
          if (0 === p && !h && (this.outWindow.flush(), e.isFinishedOK())) {
            return d;
          }
          var E = a.totalPos & (1 << b) - 1;
          if (0 === e.decodeBit(q, (C << 4) + E)) {
            if (0 === p) {
              return k;
            }
            a.putByte(this.decodeLiteral(C, B));
            C = 4 > C ? 0 : 10 > C ? C - 3 : C - 6;
            p--;
          } else {
            if (0 !== e.decodeBit(r, C)) {
              if (0 === p || a.isEmpty()) {
                return k;
              }
              if (0 === e.decodeBit(t, C)) {
                if (0 === e.decodeBit(u, (C << 4) + E)) {
                  C = 7 > C ? 9 : 11;
                  a.putByte(a.getByte(B + 1));
                  p--;
                  continue;
                }
              } else {
                var I;
                0 === e.decodeBit(g, C) ? I = D : (0 === e.decodeBit(m, C) ? I = y : (I = G, G = y), y = D);
                D = B;
                B = I;
              }
              E = A.decode(e, E);
              C = 7 > C ? 8 : 11;
            } else {
              G = y;
              y = D;
              D = B;
              E = w.decode(e, E);
              C = 7 > C ? 7 : 10;
              B = this.decodeDistance(E);
              if (-1 === B) {
                return this.outWindow.flush(), e.isFinishedOK() ? v : k;
              }
              if (0 === p || B >= l || !a.checkDistance(B)) {
                return k;
              }
            }
            E += 2;
            I = !1;
            void 0 !== p && p < E && (E = p, I = !0);
            a.copyMatch(B + 1, E);
            p -= E;
            if (I) {
              return k;
            }
          }
        }
        this.state = C;
        this.reps[0] = B;
        this.reps[1] = D;
        this.reps[2] = y;
        this.reps[3] = G;
        this.leftToUnpack = p;
        return f;
      };
      c.prototype.flushOutput = function() {
        this.outWindow.flush();
      };
      return c;
    }(), k = 0, v = 1, d = 2, f = 3, e;
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
          this._inStream = new r;
          this._inStream.append(b.subarray(d - 5));
          this._outStream = new a(function(c) {
            this.onData.call(null, c);
          }.bind(this));
          this._decoder = new p(this._inStream, this._outStream);
          if (1 === this._state) {
            this._decoder.decodeProperties(b.subarray(12, 17)), this._decoder.markerIsMandatory = !1, this._decoder.unpackSize = ((b[4] | b[5] << 8 | b[6] << 16 | b[7] << 24) >>> 0) - 8;
          } else {
            this._decoder.decodeProperties(b.subarray(0, 5));
            for (var e = 0, l = !1, k = 0;8 > k;k++) {
              var h = b[5 + k];
              255 !== h && (l = !0);
              e |= h << 8 * k;
            }
            this._decoder.markerIsMandatory = !l;
            this._decoder.unpackSize = l ? e : void 0;
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
          var v = this._decoder.decode(!0);
          this._inStream.compact();
          v !== f && this._checkError(v);
        } catch (q) {
          this._decoder.flushOutput(), this._decoder = null, this._error(q);
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
        c === k ? e = "LZMA decoding error" : c === f ? e = "Decoding is not complete" : c === v ? void 0 !== this._decoder.unpackSize && this._decoder.unpackSize !== this._outStream.processed && (e = "Finished with end marker before than specified size") : e = "Internal LZMA Error";
        e && this._error(e);
      };
      return c;
    }();
    g.LzmaDecoder = e;
  })(g.ArrayUtilities || (g.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(m) {
    function u(a) {
      return "string" === typeof a ? a : void 0 == a ? null : a + "";
    }
    var b = g.Debug.notImplemented, w = g.StringUtilities.utf8decode, r = g.StringUtilities.utf8encode, a = g.NumberUtilities.clamp, l = function() {
      return function(a, b, d) {
        this.buffer = a;
        this.length = b;
        this.littleEndian = d;
      };
    }();
    m.PlainObjectDataBuffer = l;
    for (var t = new Uint32Array(33), h = 1, q = 0;32 >= h;h++) {
      t[h] = q = q << 1 | 1;
    }
    var p;
    (function(a) {
      a[a.U8 = 1] = "U8";
      a[a.I32 = 2] = "I32";
      a[a.F32 = 4] = "F32";
    })(p || (p = {}));
    h = function() {
      function k(a) {
        void 0 === a && (a = k.INITIAL_SIZE);
        this._buffer || (this._buffer = new ArrayBuffer(a), this._position = this._length = 0, this._resetViews(), this._littleEndian = k._nativeLittleEndian, this._bitLength = this._bitBuffer = 0);
      }
      k.FromArrayBuffer = function(a, d) {
        void 0 === d && (d = -1);
        var f = Object.create(k.prototype);
        f._buffer = a;
        f._length = -1 === d ? a.byteLength : d;
        f._position = 0;
        f._resetViews();
        f._littleEndian = k._nativeLittleEndian;
        f._bitBuffer = 0;
        f._bitLength = 0;
        return f;
      };
      k.FromPlainObject = function(a) {
        var d = k.FromArrayBuffer(a.buffer, a.length);
        d._littleEndian = a.littleEndian;
        return d;
      };
      k.prototype.toPlainObject = function() {
        return new l(this._buffer, this._length, this._littleEndian);
      };
      k.prototype._resetViews = function() {
        this._u8 = new Uint8Array(this._buffer);
        this._f32 = this._i32 = null;
      };
      k.prototype._requestViews = function(a) {
        0 === (this._buffer.byteLength & 3) && (null === this._i32 && a & 2 && (this._i32 = new Int32Array(this._buffer)), null === this._f32 && a & 4 && (this._f32 = new Float32Array(this._buffer)));
      };
      k.prototype.getBytes = function() {
        return new Uint8Array(this._buffer, 0, this._length);
      };
      k.prototype._ensureCapacity = function(a) {
        var d = this._buffer;
        if (!(d.byteLength >= a)) {
          for (var f = Math.max(d.byteLength, 1);f < a;) {
            f *= 2;
          }
          4294967295 < f && this.sec.throwError("RangeError", Errors.ParamRangeError);
          f = k._arrayBufferPool.acquire(f);
          a = this._u8;
          this._buffer = f;
          this._resetViews();
          this._u8.set(a);
          f = this._u8;
          for (a = a.length;a < f.length;a++) {
            f[a] = 0;
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
      k.prototype.readBytes = function(a, d) {
        var f, e = this._position;
        f = 0;
        d >>>= 0;
        0 === d && (d = this._length - e);
        e + d > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        a.length < f + d && (a._ensureCapacity(f + d), a.length = f + d);
        a._u8.set(new Uint8Array(this._buffer, e, d), f);
        this._position += d;
      };
      k.prototype.readShort = function() {
        return this.readUnsignedShort() << 16 >> 16;
      };
      k.prototype.readUnsignedShort = function() {
        var a = this._u8, d = this._position;
        d + 2 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var f = a[d + 0], a = a[d + 1];
        this._position = d + 2;
        return this._littleEndian ? a << 8 | f : f << 8 | a;
      };
      k.prototype.readInt = function() {
        var a = this._u8, d = this._position;
        d + 4 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var f = a[d + 0], e = a[d + 1], c = a[d + 2], a = a[d + 3];
        this._position = d + 4;
        return this._littleEndian ? a << 24 | c << 16 | e << 8 | f : f << 24 | e << 16 | c << 8 | a;
      };
      k.prototype.readUnsignedInt = function() {
        return this.readInt() >>> 0;
      };
      k.prototype.readFloat = function() {
        var a = this._position;
        a + 4 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        this._position = a + 4;
        this._requestViews(4);
        if (this._littleEndian && 0 === (a & 3) && this._f32) {
          return this._f32[a >> 2];
        }
        var d = this._u8, f = g.IntegerUtilities.u8;
        this._littleEndian ? (f[0] = d[a + 0], f[1] = d[a + 1], f[2] = d[a + 2], f[3] = d[a + 3]) : (f[3] = d[a + 0], f[2] = d[a + 1], f[1] = d[a + 2], f[0] = d[a + 3]);
        return g.IntegerUtilities.f32[0];
      };
      k.prototype.readDouble = function() {
        var a = this._u8, d = this._position;
        d + 8 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var f = g.IntegerUtilities.u8;
        this._littleEndian ? (f[0] = a[d + 0], f[1] = a[d + 1], f[2] = a[d + 2], f[3] = a[d + 3], f[4] = a[d + 4], f[5] = a[d + 5], f[6] = a[d + 6], f[7] = a[d + 7]) : (f[0] = a[d + 7], f[1] = a[d + 6], f[2] = a[d + 5], f[3] = a[d + 4], f[4] = a[d + 3], f[5] = a[d + 2], f[6] = a[d + 1], f[7] = a[d + 0]);
        this._position = d + 8;
        return g.IntegerUtilities.f64[0];
      };
      k.prototype.writeBoolean = function(a) {
        this.writeByte(a ? 1 : 0);
      };
      k.prototype.writeByte = function(a) {
        var d = this._position + 1;
        this._ensureCapacity(d);
        this._u8[this._position++] = a;
        d > this._length && (this._length = d);
      };
      k.prototype.writeUnsignedByte = function(a) {
        var d = this._position + 1;
        this._ensureCapacity(d);
        this._u8[this._position++] = a;
        d > this._length && (this._length = d);
      };
      k.prototype.writeRawBytes = function(a) {
        var d = this._position + a.length;
        this._ensureCapacity(d);
        this._u8.set(a, this._position);
        this._position = d;
        d > this._length && (this._length = d);
      };
      k.prototype.writeBytes = function(b, d, f) {
        g.isNullOrUndefined(b) && this.sec.throwError("TypeError", Errors.NullPointerError, "bytes");
        d >>>= 0;
        f >>>= 0;
        2 > arguments.length && (d = 0);
        3 > arguments.length && (f = 0);
        d === a(d, 0, b.length) && d + f === a(d + f, 0, b.length) || this.sec.throwError("RangeError", Errors.ParamRangeError);
        0 === f && (f = b.length - d);
        this.writeRawBytes(new Int8Array(b._buffer, d, f));
      };
      k.prototype.writeShort = function(a) {
        this.writeUnsignedShort(a);
      };
      k.prototype.writeUnsignedShort = function(a) {
        var d = this._position;
        this._ensureCapacity(d + 2);
        var f = this._u8;
        this._littleEndian ? (f[d + 0] = a, f[d + 1] = a >> 8) : (f[d + 0] = a >> 8, f[d + 1] = a);
        this._position = d += 2;
        d > this._length && (this._length = d);
      };
      k.prototype.writeInt = function(a) {
        this.writeUnsignedInt(a);
      };
      k.prototype.write2Ints = function(a, d) {
        this.write2UnsignedInts(a, d);
      };
      k.prototype.write4Ints = function(a, d, f, e) {
        this.write4UnsignedInts(a, d, f, e);
      };
      k.prototype.writeUnsignedInt = function(a) {
        var d = this._position;
        this._ensureCapacity(d + 4);
        this._requestViews(2);
        if (this._littleEndian === k._nativeLittleEndian && 0 === (d & 3) && this._i32) {
          this._i32[d >> 2] = a;
        } else {
          var f = this._u8;
          this._littleEndian ? (f[d + 0] = a, f[d + 1] = a >> 8, f[d + 2] = a >> 16, f[d + 3] = a >> 24) : (f[d + 0] = a >> 24, f[d + 1] = a >> 16, f[d + 2] = a >> 8, f[d + 3] = a);
        }
        this._position = d += 4;
        d > this._length && (this._length = d);
      };
      k.prototype.write2UnsignedInts = function(a, d) {
        var f = this._position;
        this._ensureCapacity(f + 8);
        this._requestViews(2);
        this._littleEndian === k._nativeLittleEndian && 0 === (f & 3) && this._i32 ? (this._i32[(f >> 2) + 0] = a, this._i32[(f >> 2) + 1] = d, this._position = f += 8, f > this._length && (this._length = f)) : (this.writeUnsignedInt(a), this.writeUnsignedInt(d));
      };
      k.prototype.write4UnsignedInts = function(a, d, f, e) {
        var c = this._position;
        this._ensureCapacity(c + 16);
        this._requestViews(2);
        this._littleEndian === k._nativeLittleEndian && 0 === (c & 3) && this._i32 ? (this._i32[(c >> 2) + 0] = a, this._i32[(c >> 2) + 1] = d, this._i32[(c >> 2) + 2] = f, this._i32[(c >> 2) + 3] = e, this._position = c += 16, c > this._length && (this._length = c)) : (this.writeUnsignedInt(a), this.writeUnsignedInt(d), this.writeUnsignedInt(f), this.writeUnsignedInt(e));
      };
      k.prototype.writeFloat = function(a) {
        var d = this._position;
        this._ensureCapacity(d + 4);
        this._requestViews(4);
        if (this._littleEndian === k._nativeLittleEndian && 0 === (d & 3) && this._f32) {
          this._f32[d >> 2] = a;
        } else {
          var f = this._u8;
          g.IntegerUtilities.f32[0] = a;
          a = g.IntegerUtilities.u8;
          this._littleEndian ? (f[d + 0] = a[0], f[d + 1] = a[1], f[d + 2] = a[2], f[d + 3] = a[3]) : (f[d + 0] = a[3], f[d + 1] = a[2], f[d + 2] = a[1], f[d + 3] = a[0]);
        }
        this._position = d += 4;
        d > this._length && (this._length = d);
      };
      k.prototype.write6Floats = function(a, d, f, e, c, n) {
        var b = this._position;
        this._ensureCapacity(b + 24);
        this._requestViews(4);
        this._littleEndian === k._nativeLittleEndian && 0 === (b & 3) && this._f32 ? (this._f32[(b >> 2) + 0] = a, this._f32[(b >> 2) + 1] = d, this._f32[(b >> 2) + 2] = f, this._f32[(b >> 2) + 3] = e, this._f32[(b >> 2) + 4] = c, this._f32[(b >> 2) + 5] = n, this._position = b += 24, b > this._length && (this._length = b)) : (this.writeFloat(a), this.writeFloat(d), this.writeFloat(f), this.writeFloat(e), this.writeFloat(c), this.writeFloat(n));
      };
      k.prototype.writeDouble = function(a) {
        var d = this._position;
        this._ensureCapacity(d + 8);
        var f = this._u8;
        g.IntegerUtilities.f64[0] = a;
        a = g.IntegerUtilities.u8;
        this._littleEndian ? (f[d + 0] = a[0], f[d + 1] = a[1], f[d + 2] = a[2], f[d + 3] = a[3], f[d + 4] = a[4], f[d + 5] = a[5], f[d + 6] = a[6], f[d + 7] = a[7]) : (f[d + 0] = a[7], f[d + 1] = a[6], f[d + 2] = a[5], f[d + 3] = a[4], f[d + 4] = a[3], f[d + 5] = a[2], f[d + 6] = a[1], f[d + 7] = a[0]);
        this._position = d += 8;
        d > this._length && (this._length = d);
      };
      k.prototype.readRawBytes = function() {
        return new Int8Array(this._buffer, 0, this._length);
      };
      k.prototype.writeUTF = function(a) {
        a = u(a);
        a = w(a);
        this.writeShort(a.length);
        this.writeRawBytes(a);
      };
      k.prototype.writeUTFBytes = function(a) {
        a = u(a);
        a = w(a);
        this.writeRawBytes(a);
      };
      k.prototype.readUTF = function() {
        return this.readUTFBytes(this.readShort());
      };
      k.prototype.readUTFBytes = function(a) {
        a >>>= 0;
        var d = this._position;
        d + a > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        this._position += a;
        return r(new Int8Array(this._buffer, d, a));
      };
      Object.defineProperty(k.prototype, "length", {get:function() {
        return this._length;
      }, set:function(b) {
        b >>>= 0;
        b > this._buffer.byteLength && this._ensureCapacity(b);
        this._length = b;
        this._position = a(this._position, 0, this._length);
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(k.prototype, "bytesAvailable", {get:function() {
        return this._length - this._position;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(k.prototype, "position", {get:function() {
        return this._position;
      }, set:function(a) {
        this._position = a >>> 0;
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
      }, set:function(a) {
        this._objectEncoding = a >>> 0;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(k.prototype, "endian", {get:function() {
        return this._littleEndian ? "littleEndian" : "bigEndian";
      }, set:function(a) {
        a = u(a);
        this._littleEndian = "auto" === a ? k._nativeLittleEndian : "littleEndian" === a;
      }, enumerable:!0, configurable:!0});
      k.prototype.toString = function() {
        return r(new Int8Array(this._buffer, 0, this._length));
      };
      k.prototype.toBlob = function(a) {
        return new Blob([new Int8Array(this._buffer, this._position, this._length)], {type:a});
      };
      k.prototype.writeMultiByte = function(a, d) {
        b("packageInternal flash.utils.ObjectOutput::writeMultiByte");
      };
      k.prototype.readMultiByte = function(a, d) {
        b("packageInternal flash.utils.ObjectInput::readMultiByte");
      };
      k.prototype.getValue = function(a) {
        a |= 0;
        return a >= this._length ? void 0 : this._u8[a];
      };
      k.prototype.setValue = function(a, d) {
        a |= 0;
        var f = a + 1;
        this._ensureCapacity(f);
        this._u8[a] = d;
        f > this._length && (this._length = f);
      };
      k.prototype.readFixed = function() {
        return this.readInt() / 65536;
      };
      k.prototype.readFixed8 = function() {
        return this.readShort() / 256;
      };
      k.prototype.readFloat16 = function() {
        var a = this.readUnsignedShort(), d = a >> 15 ? -1 : 1, f = (a & 31744) >> 10, a = a & 1023;
        return f ? 31 === f ? a ? NaN : Infinity * d : d * Math.pow(2, f - 15) * (1 + a / 1024) : a / 1024 * Math.pow(2, -14) * d;
      };
      k.prototype.readEncodedU32 = function() {
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
      k.prototype.readBits = function(a) {
        return this.readUnsignedBits(a) << 32 - a >> 32 - a;
      };
      k.prototype.readUnsignedBits = function(a) {
        for (var d = this._bitBuffer, f = this._bitLength;a > f;) {
          d = d << 8 | this.readUnsignedByte(), f += 8;
        }
        f -= a;
        a = d >>> f & t[a];
        this._bitBuffer = d;
        this._bitLength = f;
        return a;
      };
      k.prototype.readFixedBits = function(a) {
        return this.readBits(a) / 65536;
      };
      k.prototype.readString = function(a) {
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
        return r(new Int8Array(this._buffer, d, a));
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
      k.prototype.compress = function(a) {
        a = 0 === arguments.length ? "zlib" : u(a);
        var d;
        switch(a) {
          case "zlib":
            d = new m.Deflate(!0);
            break;
          case "deflate":
            d = new m.Deflate(!1);
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
      k.prototype.uncompress = function(a) {
        a = 0 === arguments.length ? "zlib" : u(a);
        var d;
        switch(a) {
          case "zlib":
            d = m.Inflate.create(!0);
            break;
          case "deflate":
            d = m.Inflate.create(!1);
            break;
          case "lzma":
            d = new m.LzmaDecoder(!1);
            break;
          default:
            return;
        }
        var f = new k, e;
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
      k._nativeLittleEndian = 1 === (new Int8Array((new Int32Array([1])).buffer))[0];
      k.INITIAL_SIZE = 128;
      k._arrayBufferPool = new g.ArrayBufferPool;
      return k;
    }();
    m.DataBuffer = h;
  })(g.ArrayUtilities || (g.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  var m = g.ArrayUtilities.DataBuffer, u = g.ArrayUtilities.ensureTypedArrayCapacity;
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
  })(g.PathCommand || (g.PathCommand = {}));
  (function(b) {
    b[b.Linear = 16] = "Linear";
    b[b.Radial = 18] = "Radial";
  })(g.GradientType || (g.GradientType = {}));
  (function(b) {
    b[b.Pad = 0] = "Pad";
    b[b.Reflect = 1] = "Reflect";
    b[b.Repeat = 2] = "Repeat";
  })(g.GradientSpreadMethod || (g.GradientSpreadMethod = {}));
  (function(b) {
    b[b.RGB = 0] = "RGB";
    b[b.LinearRGB = 1] = "LinearRGB";
  })(g.GradientInterpolationMethod || (g.GradientInterpolationMethod = {}));
  (function(b) {
    b[b.None = 0] = "None";
    b[b.Normal = 1] = "Normal";
    b[b.Vertical = 2] = "Vertical";
    b[b.Horizontal = 3] = "Horizontal";
  })(g.LineScaleMode || (g.LineScaleMode = {}));
  var b = function() {
    return function(b, a, l, t, h, q, p, k, g, d, f) {
      this.commands = b;
      this.commandsPosition = a;
      this.coordinates = l;
      this.morphCoordinates = t;
      this.coordinatesPosition = h;
      this.styles = q;
      this.stylesLength = p;
      this.morphStyles = k;
      this.morphStylesLength = g;
      this.hasFills = d;
      this.hasLines = f;
    };
  }();
  g.PlainObjectShapeData = b;
  var w;
  (function(b) {
    b[b.Commands = 32] = "Commands";
    b[b.Coordinates = 128] = "Coordinates";
    b[b.Styles = 16] = "Styles";
  })(w || (w = {}));
  w = function() {
    function r(a) {
      void 0 === a && (a = !0);
      a && this.clear();
    }
    r.FromPlainObject = function(a) {
      var b = new r(!1);
      b.commands = a.commands;
      b.coordinates = a.coordinates;
      b.morphCoordinates = a.morphCoordinates;
      b.commandsPosition = a.commandsPosition;
      b.coordinatesPosition = a.coordinatesPosition;
      b.styles = m.FromArrayBuffer(a.styles, a.stylesLength);
      b.styles.endian = "auto";
      a.morphStyles && (b.morphStyles = m.FromArrayBuffer(a.morphStyles, a.morphStylesLength), b.morphStyles.endian = "auto");
      b.hasFills = a.hasFills;
      b.hasLines = a.hasLines;
      return b;
    };
    r.prototype.moveTo = function(a, b) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = 9;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = b;
    };
    r.prototype.lineTo = function(a, b) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = 10;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = b;
    };
    r.prototype.curveTo = function(a, b, t, h) {
      this.ensurePathCapacities(1, 4);
      this.commands[this.commandsPosition++] = 11;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = t;
      this.coordinates[this.coordinatesPosition++] = h;
    };
    r.prototype.cubicCurveTo = function(a, b, t, h, q, p) {
      this.ensurePathCapacities(1, 6);
      this.commands[this.commandsPosition++] = 12;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = t;
      this.coordinates[this.coordinatesPosition++] = h;
      this.coordinates[this.coordinatesPosition++] = q;
      this.coordinates[this.coordinatesPosition++] = p;
    };
    r.prototype.beginFill = function(a) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 1;
      this.styles.writeUnsignedInt(a);
      this.hasFills = !0;
    };
    r.prototype.writeMorphFill = function(a) {
      this.morphStyles.writeUnsignedInt(a);
    };
    r.prototype.endFill = function() {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 4;
    };
    r.prototype.endLine = function() {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 8;
    };
    r.prototype.lineStyle = function(a, b, t, h, q, p, k) {
      this.ensurePathCapacities(2, 0);
      this.commands[this.commandsPosition++] = 5;
      this.coordinates[this.coordinatesPosition++] = a;
      a = this.styles;
      a.writeUnsignedInt(b);
      a.writeBoolean(t);
      a.writeUnsignedByte(h);
      a.writeUnsignedByte(q);
      a.writeUnsignedByte(p);
      a.writeUnsignedByte(k);
      this.hasLines = !0;
    };
    r.prototype.writeMorphLineStyle = function(a, b) {
      this.morphCoordinates[this.coordinatesPosition - 1] = a;
      this.morphStyles.writeUnsignedInt(b);
    };
    r.prototype.beginBitmap = function(a, b, t, h, q) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = a;
      a = this.styles;
      a.writeUnsignedInt(b);
      this._writeStyleMatrix(t, !1);
      a.writeBoolean(h);
      a.writeBoolean(q);
      this.hasFills = !0;
    };
    r.prototype.writeMorphBitmap = function(a) {
      this._writeStyleMatrix(a, !0);
    };
    r.prototype.beginGradient = function(a, b, t, h, q, p, k, r) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = a;
      a = this.styles;
      a.writeUnsignedByte(h);
      a.writeShort(r);
      this._writeStyleMatrix(q, !1);
      h = b.length;
      a.writeByte(h);
      for (q = 0;q < h;q++) {
        a.writeUnsignedByte(t[q]), a.writeUnsignedInt(b[q]);
      }
      a.writeUnsignedByte(p);
      a.writeUnsignedByte(k);
      this.hasFills = !0;
    };
    r.prototype.writeMorphGradient = function(a, b, t) {
      this._writeStyleMatrix(t, !0);
      t = this.morphStyles;
      for (var h = 0;h < a.length;h++) {
        t.writeUnsignedByte(b[h]), t.writeUnsignedInt(a[h]);
      }
    };
    r.prototype.writeCommandAndCoordinates = function(a, b, t) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = t;
    };
    r.prototype.writeCoordinates = function(a, b) {
      this.ensurePathCapacities(0, 2);
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = b;
    };
    r.prototype.writeMorphCoordinates = function(a, b) {
      this.morphCoordinates = u(this.morphCoordinates, this.coordinatesPosition);
      this.morphCoordinates[this.coordinatesPosition - 2] = a;
      this.morphCoordinates[this.coordinatesPosition - 1] = b;
    };
    r.prototype.clear = function() {
      this.commandsPosition = this.coordinatesPosition = 0;
      this.commands = new Uint8Array(32);
      this.coordinates = new Int32Array(128);
      this.styles = new m(16);
      this.styles.endian = "auto";
      this.hasFills = this.hasLines = !1;
    };
    r.prototype.isEmpty = function() {
      return 0 === this.commandsPosition;
    };
    r.prototype.clone = function() {
      var a = new r(!1);
      a.commands = new Uint8Array(this.commands);
      a.commandsPosition = this.commandsPosition;
      a.coordinates = new Int32Array(this.coordinates);
      a.coordinatesPosition = this.coordinatesPosition;
      a.styles = new m(this.styles.length);
      a.styles.writeRawBytes(this.styles.bytes.subarray(0, this.styles.length));
      this.morphStyles && (a.morphStyles = new m(this.morphStyles.length), a.morphStyles.writeRawBytes(this.morphStyles.bytes.subarray(0, this.morphStyles.length)));
      a.hasFills = this.hasFills;
      a.hasLines = this.hasLines;
      return a;
    };
    r.prototype.toPlainObject = function() {
      return new b(this.commands, this.commandsPosition, this.coordinates, this.morphCoordinates, this.coordinatesPosition, this.styles.buffer, this.styles.length, this.morphStyles && this.morphStyles.buffer, this.morphStyles ? this.morphStyles.length : 0, this.hasFills, this.hasLines);
    };
    Object.defineProperty(r.prototype, "buffers", {get:function() {
      var a = [this.commands.buffer, this.coordinates.buffer, this.styles.buffer];
      this.morphCoordinates && a.push(this.morphCoordinates.buffer);
      this.morphStyles && a.push(this.morphStyles.buffer);
      return a;
    }, enumerable:!0, configurable:!0});
    r.prototype._writeStyleMatrix = function(a, b) {
      (b ? this.morphStyles : this.styles).write6Floats(a.a, a.b, a.c, a.d, a.tx, a.ty);
    };
    r.prototype.ensurePathCapacities = function(a, b) {
      this.commands = u(this.commands, this.commandsPosition + a);
      this.coordinates = u(this.coordinates, this.coordinatesPosition + b);
    };
    return r;
  }();
  g.ShapeData = w;
})(Shumway || (Shumway = {}));
(function(g) {
  (function(g) {
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
    })(g.Parser || (g.Parser = {}));
  })(g.SWF || (g.SWF = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  var m = g.Debug.unexpected, u = function() {
    function b(b, r, a, l) {
      this.url = b;
      this.method = r;
      this.mimeType = a;
      this.data = l;
    }
    b.prototype.readAll = function(b, r) {
      var a = this.url, l = this.xhr = new XMLHttpRequest({mozSystem:!0});
      l.open(this.method || "GET", this.url, !0);
      l.responseType = "arraybuffer";
      b && (l.onprogress = function(a) {
        b(l.response, a.loaded, a.total);
      });
      l.onreadystatechange = function(b) {
        4 === l.readyState && (200 !== l.status && 0 !== l.status || null === l.response ? (m("Path: " + a + " not found."), r(null, l.statusText)) : r(l.response));
      };
      this.mimeType && l.setRequestHeader("Content-Type", this.mimeType);
      l.send(this.data || null);
    };
    b.prototype.readChunked = function(b, r, a, l, t, h) {
      if (0 >= b) {
        this.readAsync(r, a, l, t, h);
      } else {
        var q = 0, p = new Uint8Array(b), k = 0, g;
        this.readAsync(function(a, f) {
          g = f.total;
          for (var e = a.length, c = 0;q + e >= b;) {
            var n = b - q;
            p.set(a.subarray(c, c + n), q);
            c += n;
            e -= n;
            k += b;
            r(p, {loaded:k, total:g});
            q = 0;
          }
          p.set(a.subarray(c), q);
          q += e;
        }, a, l, function() {
          0 < q && (k += q, r(p.subarray(0, q), {loaded:k, total:g}), q = 0);
          t && t();
        }, h);
      }
    };
    b.prototype.readAsync = function(b, r, a, l, t) {
      var h = this.xhr = new XMLHttpRequest({mozSystem:!0}), q = this.url, p = 0, k = 0;
      h.open(this.method || "GET", q, !0);
      h.responseType = "moz-chunked-arraybuffer";
      var g = "moz-chunked-arraybuffer" !== h.responseType;
      g && (h.responseType = "arraybuffer");
      h.onprogress = function(a) {
        g || (p = a.loaded, k = a.total, a = new Uint8Array(h.response), p = Math.max(p, a.byteLength), k = Math.max(k, a.byteLength), b(a, {loaded:p, total:k}));
      };
      h.onreadystatechange = function(a) {
        2 === h.readyState && t && t(q, h.status, h.getAllResponseHeaders());
        4 === h.readyState && (200 !== h.status && 0 !== h.status || null === h.response && (0 === k || p !== k) ? r(h.statusText) : g && (a = h.response, b(new Uint8Array(a), {loaded:a.byteLength, total:a.byteLength})));
      };
      h.onload = function() {
        l && l();
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
  g.BinaryFileReader = u;
})(Shumway || (Shumway = {}));
(function(g) {
  var m = function() {
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
  g.FlashLog = m;
  g.flashlog = null;
})(Shumway || (Shumway = {}));
(function(g) {
  (function(g) {
    (function(b) {
      b[b.Objects = 0] = "Objects";
      b[b.References = 1] = "References";
    })(g.RemotingPhase || (g.RemotingPhase = {}));
    (function(b) {
      b[b.HasMatrix = 1] = "HasMatrix";
      b[b.HasBounds = 2] = "HasBounds";
      b[b.HasChildren = 4] = "HasChildren";
      b[b.HasColorTransform = 8] = "HasColorTransform";
      b[b.HasClipRect = 16] = "HasClipRect";
      b[b.HasMiscellaneousProperties = 32] = "HasMiscellaneousProperties";
      b[b.HasMask = 64] = "HasMask";
      b[b.HasClip = 128] = "HasClip";
    })(g.MessageBits || (g.MessageBits = {}));
    (function(b) {
      b[b.None = 0] = "None";
      b[b.Asset = 134217728] = "Asset";
    })(g.IDMask || (g.IDMask = {}));
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
    })(g.MessageTag || (g.MessageTag = {}));
    (function(b) {
      b[b.Blur = 0] = "Blur";
      b[b.DropShadow = 1] = "DropShadow";
      b[b.ColorMatrix = 2] = "ColorMatrix";
    })(g.FilterType || (g.FilterType = {}));
    (function(b) {
      b[b.Identity = 0] = "Identity";
      b[b.AlphaMultiplierOnly = 1] = "AlphaMultiplierOnly";
      b[b.All = 2] = "All";
    })(g.ColorTransformEncoding || (g.ColorTransformEncoding = {}));
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
    })(g.VideoPlaybackEvent || (g.VideoPlaybackEvent = {}));
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
    })(g.VideoControlEvent || (g.VideoControlEvent = {}));
    (function(b) {
      b[b.ShowAll = 0] = "ShowAll";
      b[b.ExactFit = 1] = "ExactFit";
      b[b.NoBorder = 2] = "NoBorder";
      b[b.NoScale = 4] = "NoScale";
    })(g.StageScaleMode || (g.StageScaleMode = {}));
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
    })(g.StageAlignFlags || (g.StageAlignFlags = {}));
    g.MouseEventNames = "click dblclick mousedown mousemove mouseup mouseover mouseout".split(" ");
    g.KeyboardEventNames = ["keydown", "keypress", "keyup"];
    (function(b) {
      b[b.CtrlKey = 1] = "CtrlKey";
      b[b.AltKey = 2] = "AltKey";
      b[b.ShiftKey = 4] = "ShiftKey";
    })(g.KeyboardEventFlags || (g.KeyboardEventFlags = {}));
    (function(b) {
      b[b.DocumentHidden = 0] = "DocumentHidden";
      b[b.DocumentVisible = 1] = "DocumentVisible";
      b[b.WindowBlur = 2] = "WindowBlur";
      b[b.WindowFocus = 3] = "WindowFocus";
    })(g.FocusEventType || (g.FocusEventType = {}));
    var u = function() {
      function b(b, r) {
        this.window = b;
        this.target = r;
      }
      Object.defineProperty(b.prototype, "onAsyncMessage", {set:function(b) {
        this.window.addEventListener("message", function(r) {
          Promise.resolve(r.data).then(function(a) {
            b(a);
          });
        });
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(b.prototype, "onSyncMessage", {set:function(b) {
        this.window.addEventListener("syncmessage", function(r) {
          r = r.detail;
          r.result = b(r.msg);
        });
      }, enumerable:!0, configurable:!0});
      b.prototype.postAsyncMessage = function(b, r) {
        this.target.postMessage(b, "*", r);
      };
      b.prototype.sendSyncMessage = function(b, r) {
        var a = this.target.document.createEvent("CustomEvent"), l = {msg:b, result:void 0};
        a.initCustomEvent("syncmessage", !1, !1, l);
        this.target.dispatchEvent(a);
        return l.result;
      };
      return b;
    }();
    g.WindowTransportPeer = u;
    u = function() {
      function b() {
      }
      Object.defineProperty(b.prototype, "onAsyncMessage", {set:function(b) {
        ShumwayCom.setAsyncMessageCallback(b);
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(b.prototype, "onSyncMessage", {set:function(b) {
        ShumwayCom.setSyncMessageCallback(b);
      }, enumerable:!0, configurable:!0});
      b.prototype.postAsyncMessage = function(b, r) {
        ShumwayCom.postAsyncMessage(b);
      };
      b.prototype.sendSyncMessage = function(b, r) {
        return ShumwayCom.sendSyncMessage(b);
      };
      return b;
    }();
    g.ShumwayComTransportPeer = u;
  })(g.Remoting || (g.Remoting = {}));
})(Shumway || (Shumway = {}));
var throwError, Errors;
(function(g) {
  (function(g) {
    (function(g) {
      var b = function() {
        function b() {
        }
        b.toRGBA = function(a, b, t, h) {
          void 0 === h && (h = 1);
          return "rgba(" + a + "," + b + "," + t + "," + h + ")";
        };
        return b;
      }();
      g.UI = b;
      var m = function() {
        function r() {
        }
        r.prototype.tabToolbar = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(37, 44, 51, a);
        };
        r.prototype.toolbars = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(52, 60, 69, a);
        };
        r.prototype.selectionBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(29, 79, 115, a);
        };
        r.prototype.selectionText = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(245, 247, 250, a);
        };
        r.prototype.splitters = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(0, 0, 0, a);
        };
        r.prototype.bodyBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(17, 19, 21, a);
        };
        r.prototype.sidebarBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(24, 29, 32, a);
        };
        r.prototype.attentionBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(161, 134, 80, a);
        };
        r.prototype.bodyText = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(143, 161, 178, a);
        };
        r.prototype.foregroundTextGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(182, 186, 191, a);
        };
        r.prototype.contentTextHighContrast = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(169, 186, 203, a);
        };
        r.prototype.contentTextGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(143, 161, 178, a);
        };
        r.prototype.contentTextDarkGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(95, 115, 135, a);
        };
        r.prototype.blueHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(70, 175, 227, a);
        };
        r.prototype.purpleHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(107, 122, 187, a);
        };
        r.prototype.pinkHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(223, 128, 255, a);
        };
        r.prototype.redHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(235, 83, 104, a);
        };
        r.prototype.orangeHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(217, 102, 41, a);
        };
        r.prototype.lightOrangeHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(217, 155, 40, a);
        };
        r.prototype.greenHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(112, 191, 83, a);
        };
        r.prototype.blueGreyHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(94, 136, 176, a);
        };
        return r;
      }();
      g.UIThemeDark = m;
      m = function() {
        function r() {
        }
        r.prototype.tabToolbar = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(235, 236, 237, a);
        };
        r.prototype.toolbars = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(240, 241, 242, a);
        };
        r.prototype.selectionBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(76, 158, 217, a);
        };
        r.prototype.selectionText = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(245, 247, 250, a);
        };
        r.prototype.splitters = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(170, 170, 170, a);
        };
        r.prototype.bodyBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(252, 252, 252, a);
        };
        r.prototype.sidebarBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(247, 247, 247, a);
        };
        r.prototype.attentionBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(161, 134, 80, a);
        };
        r.prototype.bodyText = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(24, 25, 26, a);
        };
        r.prototype.foregroundTextGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(88, 89, 89, a);
        };
        r.prototype.contentTextHighContrast = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(41, 46, 51, a);
        };
        r.prototype.contentTextGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(143, 161, 178, a);
        };
        r.prototype.contentTextDarkGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(102, 115, 128, a);
        };
        r.prototype.blueHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(0, 136, 204, a);
        };
        r.prototype.purpleHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(91, 95, 255, a);
        };
        r.prototype.pinkHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(184, 46, 229, a);
        };
        r.prototype.redHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(237, 38, 85, a);
        };
        r.prototype.orangeHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(241, 60, 0, a);
        };
        r.prototype.lightOrangeHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(217, 126, 0, a);
        };
        r.prototype.greenHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(44, 187, 15, a);
        };
        r.prototype.blueGreyHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(95, 136, 176, a);
        };
        return r;
      }();
      g.UIThemeLight = m;
    })(g.Theme || (g.Theme = {}));
  })(g.Tools || (g.Tools = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(g) {
    (function(g) {
      var b = function() {
        function b(r, a) {
          this._buffers = r || [];
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
          for (var a = 0, l = this.snapshotCount;a < l;a++) {
            b(this._snapshots[a], a);
          }
        };
        b.prototype.createSnapshots = function() {
          var b = Number.MIN_VALUE, a = 0;
          for (this._snapshots = [];0 < this._buffers.length;) {
            var l = this._buffers.shift().createSnapshot();
            l && (b < l.endTime && (b = l.endTime), a < l.maxDepth && (a = l.maxDepth), this._snapshots.push(l));
          }
          this._windowEnd = this._endTime = b;
          this._maxDepth = a;
        };
        b.prototype.setWindow = function(b, a) {
          if (b > a) {
            var l = b;
            b = a;
            a = l;
          }
          l = Math.min(a - b, this.totalTime);
          b < this._startTime ? (b = this._startTime, a = this._startTime + l) : a > this._endTime && (b = this._endTime - l, a = this._endTime);
          this._windowStart = b;
          this._windowEnd = a;
        };
        b.prototype.moveWindowTo = function(b) {
          this.setWindow(b - this.windowLength / 2, b + this.windowLength / 2);
        };
        return b;
      }();
      g.Profile = b;
    })(g.Profiler || (g.Profiler = {}));
  })(g.Tools || (g.Tools = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(g, m) {
  function u() {
    this.constructor = g;
  }
  for (var b in m) {
    m.hasOwnProperty(b) && (g[b] = m[b]);
  }
  u.prototype = m.prototype;
  g.prototype = new u;
};
(function(g) {
  (function(g) {
    (function(g) {
      var b = function() {
        return function(b) {
          this.kind = b;
          this.totalTime = this.selfTime = this.count = 0;
        };
      }();
      g.TimelineFrameStatistics = b;
      var m = function() {
        function g(a, b, t, h, q, p) {
          this.parent = a;
          this.kind = b;
          this.startData = t;
          this.endData = h;
          this.startTime = q;
          this.endTime = p;
          this.maxDepth = 0;
        }
        Object.defineProperty(g.prototype, "totalTime", {get:function() {
          return this.endTime - this.startTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(g.prototype, "selfTime", {get:function() {
          var a = this.totalTime;
          if (this.children) {
            for (var b = 0, t = this.children.length;b < t;b++) {
              var h = this.children[b], a = a - (h.endTime - h.startTime)
            }
          }
          return a;
        }, enumerable:!0, configurable:!0});
        g.prototype.getChildIndex = function(a) {
          for (var b = this.children, t = 0;t < b.length;t++) {
            if (b[t].endTime > a) {
              return t;
            }
          }
          return 0;
        };
        g.prototype.getChildRange = function(a, b) {
          if (this.children && a <= this.endTime && b >= this.startTime && b >= a) {
            var t = this._getNearestChild(a), h = this._getNearestChildReverse(b);
            if (t <= h) {
              return a = this.children[t].startTime, b = this.children[h].endTime, {startIndex:t, endIndex:h, startTime:a, endTime:b, totalTime:b - a};
            }
          }
          return null;
        };
        g.prototype._getNearestChild = function(a) {
          var b = this.children;
          if (b && b.length) {
            if (a <= b[0].endTime) {
              return 0;
            }
            for (var t, h = 0, q = b.length - 1;q > h;) {
              t = (h + q) / 2 | 0;
              var p = b[t];
              if (a >= p.startTime && a <= p.endTime) {
                return t;
              }
              a > p.endTime ? h = t + 1 : q = t;
            }
            return Math.ceil((h + q) / 2);
          }
          return 0;
        };
        g.prototype._getNearestChildReverse = function(a) {
          var b = this.children;
          if (b && b.length) {
            var t = b.length - 1;
            if (a >= b[t].startTime) {
              return t;
            }
            for (var h, q = 0;t > q;) {
              h = Math.ceil((q + t) / 2);
              var p = b[h];
              if (a >= p.startTime && a <= p.endTime) {
                return h;
              }
              a > p.endTime ? q = h : t = h - 1;
            }
            return (q + t) / 2 | 0;
          }
          return 0;
        };
        g.prototype.query = function(a) {
          if (a < this.startTime || a > this.endTime) {
            return null;
          }
          var b = this.children;
          if (b && 0 < b.length) {
            for (var t, h = 0, q = b.length - 1;q > h;) {
              var p = (h + q) / 2 | 0;
              t = b[p];
              if (a >= t.startTime && a <= t.endTime) {
                return t.query(a);
              }
              a > t.endTime ? h = p + 1 : q = p;
            }
            t = b[q];
            if (a >= t.startTime && a <= t.endTime) {
              return t.query(a);
            }
          }
          return this;
        };
        g.prototype.queryNext = function(a) {
          for (var b = this;a > b.endTime;) {
            if (b.parent) {
              b = b.parent;
            } else {
              break;
            }
          }
          return b.query(a);
        };
        g.prototype.getDepth = function() {
          for (var a = 0, b = this;b;) {
            a++, b = b.parent;
          }
          return a;
        };
        g.prototype.calculateStatistics = function() {
          function a(t) {
            if (t.kind) {
              var h = l[t.kind.id] || (l[t.kind.id] = new b(t.kind));
              h.count++;
              h.selfTime += t.selfTime;
              h.totalTime += t.totalTime;
            }
            t.children && t.children.forEach(a);
          }
          var l = this.statistics = [];
          a(this);
        };
        g.prototype.trace = function(a) {
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
        return g;
      }();
      g.TimelineFrame = m;
      m = function(b) {
        function a(a) {
          b.call(this, null, null, null, null, NaN, NaN);
          this.name = a;
        }
        __extends(a, b);
        return a;
      }(m);
      g.TimelineBufferSnapshot = m;
    })(g.Profiler || (g.Profiler = {}));
  })(g.Tools || (g.Tools = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(m) {
    (function(m) {
      var b = function() {
        function b(r, a) {
          void 0 === r && (r = "");
          this.name = r || "";
          this._startTime = g.isNullOrUndefined(a) ? jsGlobal.START_TIME : a;
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
          this._marks = new g.CircularBuffer(Int32Array, 20);
          this._times = new g.CircularBuffer(Float64Array, 20);
        };
        b.prototype._getKindId = function(g) {
          var a = b.MAX_KINDID;
          if (void 0 === this._kindNameMap[g]) {
            if (a = this._kinds.length, a < b.MAX_KINDID) {
              var l = {id:a, name:g, visible:!0};
              this._kinds.push(l);
              this._kindNameMap[g] = l;
            } else {
              a = b.MAX_KINDID;
            }
          } else {
            a = this._kindNameMap[g].id;
          }
          return a;
        };
        b.prototype._getMark = function(r, a, l) {
          var t = b.MAX_DATAID;
          g.isNullOrUndefined(l) || a === b.MAX_KINDID || (t = this._data.length, t < b.MAX_DATAID ? this._data.push(l) : t = b.MAX_DATAID);
          return r | t << 16 | a;
        };
        b.prototype.enter = function(r, a, l) {
          l = (g.isNullOrUndefined(l) ? performance.now() : l) - this._startTime;
          this._marks || this._initialize();
          this._depth++;
          r = this._getKindId(r);
          this._marks.write(this._getMark(b.ENTER, r, a));
          this._times.write(l);
          this._stack.push(r);
        };
        b.prototype.leave = function(r, a, l) {
          l = (g.isNullOrUndefined(l) ? performance.now() : l) - this._startTime;
          var t = this._stack.pop();
          r && (t = this._getKindId(r));
          this._marks.write(this._getMark(b.LEAVE, t, a));
          this._times.write(l);
          this._depth--;
        };
        b.prototype.count = function(b, a, l) {
        };
        b.prototype.createSnapshot = function() {
          var r;
          void 0 === r && (r = Number.MAX_VALUE);
          if (!this._marks) {
            return null;
          }
          var a = this._times, l = this._kinds, t = this._data, h = new m.TimelineBufferSnapshot(this.name), q = [h], p = 0;
          this._marks || this._initialize();
          this._marks.forEachInReverse(function(k, h) {
            var d = t[k >>> 16 & b.MAX_DATAID], f = l[k & b.MAX_KINDID];
            if (g.isNullOrUndefined(f) || f.visible) {
              var e = k & 2147483648, c = a.get(h), n = q.length;
              if (e === b.LEAVE) {
                if (1 === n && (p++, p > r)) {
                  return !0;
                }
                q.push(new m.TimelineFrame(q[n - 1], f, null, d, NaN, c));
              } else {
                if (e === b.ENTER) {
                  if (f = q.pop(), e = q[q.length - 1]) {
                    for (e.children ? e.children.unshift(f) : e.children = [f], e = q.length, f.depth = e, f.startData = d, f.startTime = c;f;) {
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
          this._startTime = g.isNullOrUndefined(b) ? performance.now() : b;
          this._marks ? (this._depth = 0, this._data = [], this._marks.reset(), this._times.reset()) : this._initialize();
        };
        b.FromFirefoxProfile = function(g, a) {
          for (var l = g.profile.threads[0].samples, t = new b(a, l[0].time), h = [], q, p = 0;p < l.length;p++) {
            q = l[p];
            var k = q.time, v = q.frames, d = 0;
            for (q = Math.min(v.length, h.length);d < q && v[d].location === h[d].location;) {
              d++;
            }
            for (var f = h.length - d, e = 0;e < f;e++) {
              q = h.pop(), t.leave(q.location, null, k);
            }
            for (;d < v.length;) {
              q = v[d++], t.enter(q.location, null, k);
            }
            h = v;
          }
          for (;q = h.pop();) {
            t.leave(q.location, null, k);
          }
          return t;
        };
        b.FromChromeProfile = function(g, a) {
          var l = g.timestamps, t = g.samples, h = new b(a, l[0] / 1E3), q = [], p = {}, k;
          b._resolveIds(g.head, p);
          for (var v = 0;v < l.length;v++) {
            var d = l[v] / 1E3, f = [];
            for (k = p[t[v]];k;) {
              f.unshift(k), k = k.parent;
            }
            var e = 0;
            for (k = Math.min(f.length, q.length);e < k && f[e] === q[e];) {
              e++;
            }
            for (var c = q.length - e, n = 0;n < c;n++) {
              k = q.pop(), h.leave(k.functionName, null, d);
            }
            for (;e < f.length;) {
              k = f[e++], h.enter(k.functionName, null, d);
            }
            q = f;
          }
          for (;k = q.pop();) {
            h.leave(k.functionName, null, d);
          }
          return h;
        };
        b._resolveIds = function(g, a) {
          a[g.id] = g;
          if (g.children) {
            for (var l = 0;l < g.children.length;l++) {
              g.children[l].parent = g, b._resolveIds(g.children[l], a);
            }
          }
        };
        b.ENTER = 0;
        b.LEAVE = -2147483648;
        b.MAX_KINDID = 65535;
        b.MAX_DATAID = 32767;
        return b;
      }();
      m.TimelineBuffer = b;
    })(m.Profiler || (m.Profiler = {}));
  })(g.Tools || (g.Tools = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(m) {
    (function(u) {
      (function(b) {
        b[b.DARK = 0] = "DARK";
        b[b.LIGHT = 1] = "LIGHT";
      })(u.UIThemeType || (u.UIThemeType = {}));
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
          var l = new u.Profile(b, a);
          l.createSnapshots();
          this._profiles.push(l);
          this.activateProfile(l);
          return l;
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
              this._theme = new m.Theme.UIThemeDark;
              break;
            case 1:
              this._theme = new m.Theme.UIThemeLight;
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
            this._overviewHeader = new u.FlameChartHeader(this, 0);
            this._overview = new u.FlameChartOverview(this, 0);
            this._activeProfile.forEachSnapshot(function(a, l) {
              b._headers.push(new u.FlameChartHeader(b, 1));
              b._charts.push(new u.FlameChart(b, a));
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
            var b = this, a = this._activeProfile.startTime, l = this._activeProfile.endTime;
            this._overviewHeader.initialize(a, l);
            this._overview.initialize(a, l);
            this._activeProfile.forEachSnapshot(function(t, h) {
              b._headers[h].initialize(a, l);
              b._charts[h].initialize(a, l);
            });
          }
        };
        b.prototype._onResize = function() {
          if (this._activeProfile) {
            var b = this, a = this._container.offsetWidth;
            this._overviewHeader.setSize(a);
            this._overview.setSize(a);
            this._activeProfile.forEachSnapshot(function(l, t) {
              b._headers[t].setSize(a);
              b._charts[t].setSize(a);
            });
          }
        };
        b.prototype._updateViews = function() {
          if (this._activeProfile) {
            var b = this, a = this._activeProfile.windowStart, l = this._activeProfile.windowEnd;
            this._overviewHeader.setWindow(a, l);
            this._overview.setWindow(a, l);
            this._activeProfile.forEachSnapshot(function(t, h) {
              b._headers[h].setWindow(a, l);
              b._charts[h].setWindow(a, l);
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
        b.prototype.showTooltip = function(b, a, l, t) {
          this.removeTooltipContent();
          this._tooltip.appendChild(this.createTooltipContent(b, a));
          this._tooltip.style.display = "block";
          var h = this._tooltip.firstChild;
          a = h.clientWidth;
          h = h.clientHeight;
          l += l + a >= b.canvas.clientWidth - 50 ? -(a + 20) : 25;
          t += b.canvas.offsetTop - h / 2;
          this._tooltip.style.left = l + "px";
          this._tooltip.style.top = t + "px";
        };
        b.prototype.hideTooltip = function() {
          this._tooltip.style.display = "none";
        };
        b.prototype.createTooltipContent = function(b, a) {
          var l = Math.round(1E5 * a.totalTime) / 1E5, t = Math.round(1E5 * a.selfTime) / 1E5, h = Math.round(1E4 * a.selfTime / a.totalTime) / 100, q = document.createElement("div"), p = document.createElement("h1");
          p.textContent = a.kind.name;
          q.appendChild(p);
          p = document.createElement("p");
          p.textContent = "Total: " + l + " ms";
          q.appendChild(p);
          l = document.createElement("p");
          l.textContent = "Self: " + t + " ms (" + h + "%)";
          q.appendChild(l);
          if (t = b.getStatistics(a.kind)) {
            h = document.createElement("p"), h.textContent = "Count: " + t.count, q.appendChild(h), h = document.createElement("p"), h.textContent = "All Total: " + Math.round(1E5 * t.totalTime) / 1E5 + " ms", q.appendChild(h), h = document.createElement("p"), h.textContent = "All Self: " + Math.round(1E5 * t.selfTime) / 1E5 + " ms", q.appendChild(h);
          }
          this.appendDataElements(q, a.startData);
          this.appendDataElements(q, a.endData);
          return q;
        };
        b.prototype.appendDataElements = function(b, a) {
          if (!g.isNullOrUndefined(a)) {
            b.appendChild(document.createElement("hr"));
            var l;
            if (g.isObject(a)) {
              for (var t in a) {
                l = document.createElement("p"), l.textContent = t + ": " + a[t], b.appendChild(l);
              }
            } else {
              l = document.createElement("p"), l.textContent = a.toString(), b.appendChild(l);
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
      u.Controller = b;
    })(m.Profiler || (m.Profiler = {}));
  })(g.Tools || (g.Tools = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(m) {
    (function(m) {
      var b = g.NumberUtilities.clamp, w = function() {
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
      m.MouseCursor = w;
      var r = function() {
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
        a._cursor = w.DEFAULT;
        return a;
      }();
      m.MouseController = r;
    })(m.Profiler || (m.Profiler = {}));
  })(g.Tools || (g.Tools = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(g) {
    (function(g) {
      (function(b) {
        b[b.NONE = 0] = "NONE";
        b[b.WINDOW = 1] = "WINDOW";
        b[b.HANDLE_LEFT = 2] = "HANDLE_LEFT";
        b[b.HANDLE_RIGHT = 3] = "HANDLE_RIGHT";
        b[b.HANDLE_BOTH = 4] = "HANDLE_BOTH";
      })(g.FlameChartDragTarget || (g.FlameChartDragTarget = {}));
      var b = function() {
        function b(r) {
          this._controller = r;
          this._initialized = !1;
          this._canvas = document.createElement("canvas");
          this._context = this._canvas.getContext("2d");
          this._mouseController = new g.MouseController(this, this._canvas);
          r = r.container;
          r.appendChild(this._canvas);
          r = r.getBoundingClientRect();
          this.setSize(r.width);
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
        b.prototype.setWindow = function(b, a, l) {
          void 0 === l && (l = !0);
          this._windowStart = b;
          this._windowEnd = a;
          !l || this.draw();
        };
        b.prototype.setRange = function(b, a) {
          var l = !1;
          void 0 === l && (l = !0);
          this._rangeStart = b;
          this._rangeEnd = a;
          !l || this.draw();
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
          var l;
          void 0 === l && (l = 10);
          return Math.abs(b - a) < 1 / Math.pow(10, l);
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
        b.prototype.onMouseWheel = function(g, a, l) {
          g = this._toTime(g);
          a = this._windowStart;
          var t = this._windowEnd, h = t - a;
          l = Math.max((b.MIN_WINDOW_LEN - h) / h, l);
          this._controller.setWindow(a + (a - g) * l, t + (t - g) * l);
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
        b.prototype.onDrag = function(b, a, l, g, h, q) {
        };
        b.prototype.onDragEnd = function(b, a, l, g, h, q) {
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
    })(g.Profiler || (g.Profiler = {}));
  })(g.Tools || (g.Tools = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(m) {
    (function(m) {
      var b = g.StringUtilities.trimMiddle, w = function(r) {
        function a(a, b) {
          r.call(this, a);
          this._textWidth = {};
          this._minFrameWidthInPixels = 1;
          this._snapshot = b;
          this._kindStyle = Object.create(null);
        }
        __extends(a, r);
        a.prototype.setSize = function(a, b) {
          r.prototype.setSize.call(this, a, b || this._initialized ? 12.5 * this._maxDepth : 100);
        };
        a.prototype.initialize = function(a, b) {
          this._initialized = !0;
          this._maxDepth = this._snapshot.maxDepth;
          this.setRange(a, b);
          this.setWindow(a, b, !1);
          this.setSize(this._width, 12.5 * this._maxDepth);
        };
        a.prototype.destroy = function() {
          r.prototype.destroy.call(this);
          this._snapshot = null;
        };
        a.prototype.draw = function() {
          var a = this._context, b = window.devicePixelRatio;
          g.ColorStyle.reset();
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
            for (var q = h.startIndex;q <= h.endIndex;q++) {
              var p = a.children[q];
              this._drawFrame(p, b) && this._drawChildren(p, b + 1);
            }
          }
        };
        a.prototype._drawFrame = function(a, b) {
          var h = this._context, q = this._toPixels(a.startTime), p = this._toPixels(a.endTime), k = p - q;
          if (k <= this._minFrameWidthInPixels) {
            return h.fillStyle = this._controller.theme.tabToolbar(1), h.fillRect(q, 12.5 * b, this._minFrameWidthInPixels, 12 + 12.5 * (a.maxDepth - a.depth)), !1;
          }
          0 > q && (p = k + q, q = 0);
          var p = p - q, v = this._kindStyle[a.kind.id];
          v || (v = g.ColorStyle.randomStyle(), v = this._kindStyle[a.kind.id] = {bgColor:v, textColor:g.ColorStyle.contrastStyle(v)});
          h.save();
          h.fillStyle = v.bgColor;
          h.fillRect(q, 12.5 * b, p, 12);
          12 < k && (k = a.kind.name) && k.length && (k = this._prepareText(h, k, p - 4), k.length && (h.fillStyle = v.textColor, h.textBaseline = "bottom", h.fillText(k, q + 2, 12.5 * (b + 1) - 1)));
          h.restore();
          return !0;
        };
        a.prototype._prepareText = function(a, g, h) {
          var q = this._measureWidth(a, g);
          if (h > q) {
            return g;
          }
          for (var q = 3, p = g.length;q < p;) {
            var k = q + p >> 1;
            this._measureWidth(a, b(g, k)) < h ? q = k + 1 : p = k;
          }
          g = b(g, p - 1);
          q = this._measureWidth(a, g);
          return q <= h ? g : "";
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
          var h = 1 + b / 12.5 | 0, q = this._snapshot.query(this._toTime(a));
          if (q && q.depth >= h) {
            for (;q && q.depth > h;) {
              q = q.parent;
            }
            return q;
          }
          return null;
        };
        a.prototype.onMouseDown = function(a, b) {
          this._windowEqRange() || (this._mouseController.updateCursor(m.MouseCursor.ALL_SCROLL), this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:1});
        };
        a.prototype.onMouseMove = function(a, b) {
        };
        a.prototype.onMouseOver = function(a, b) {
        };
        a.prototype.onMouseOut = function() {
        };
        a.prototype.onDrag = function(a, b, h, q, p, k) {
          if (a = this._dragInfo) {
            p = this._toTimeRelative(-p), this._controller.setWindow(a.windowStartInitial + p, a.windowEndInitial + p);
          }
        };
        a.prototype.onDragEnd = function(a, b, h, q, p, k) {
          this._dragInfo = null;
          this._mouseController.updateCursor(m.MouseCursor.DEFAULT);
        };
        a.prototype.onClick = function(a, b) {
          this._dragInfo = null;
          this._mouseController.updateCursor(m.MouseCursor.DEFAULT);
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
      }(m.FlameChartBase);
      m.FlameChart = w;
    })(m.Profiler || (m.Profiler = {}));
  })(g.Tools || (g.Tools = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(m) {
    (function(m) {
      var b = g.NumberUtilities.clamp;
      (function(b) {
        b[b.OVERLAY = 0] = "OVERLAY";
        b[b.STACK = 1] = "STACK";
        b[b.UNION = 2] = "UNION";
      })(m.FlameChartOverviewMode || (m.FlameChartOverviewMode = {}));
      var w = function(g) {
        function a(a, b) {
          void 0 === b && (b = 1);
          this._mode = b;
          this._overviewCanvasDirty = !0;
          this._overviewCanvas = document.createElement("canvas");
          this._overviewContext = this._overviewCanvas.getContext("2d");
          g.call(this, a);
        }
        __extends(a, g);
        a.prototype.setSize = function(a, b) {
          g.prototype.setSize.call(this, a, b || 64);
        };
        Object.defineProperty(a.prototype, "mode", {set:function(a) {
          this._mode = a;
          this.draw();
        }, enumerable:!0, configurable:!0});
        a.prototype._resetCanvas = function() {
          g.prototype._resetCanvas.call(this);
          this._overviewCanvas.width = this._canvas.width;
          this._overviewCanvas.height = this._canvas.height;
          this._overviewCanvasDirty = !0;
        };
        a.prototype.draw = function() {
          var a = this._context, b = window.devicePixelRatio, h = this._width, q = this._height;
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.bodyBackground(1);
          a.fillRect(0, 0, h, q);
          a.restore();
          this._initialized && (this._overviewCanvasDirty && (this._drawChart(), this._overviewCanvasDirty = !1), a.drawImage(this._overviewCanvas, 0, 0), this._drawSelection());
        };
        a.prototype._drawSelection = function() {
          var a = this._context, b = this._height, h = window.devicePixelRatio, q = this._selection ? this._selection.left : this._toPixels(this._windowStart), p = this._selection ? this._selection.right : this._toPixels(this._windowEnd), k = this._controller.theme;
          a.save();
          a.scale(h, h);
          this._selection ? (a.fillStyle = k.selectionText(.15), a.fillRect(q, 1, p - q, b - 1), a.fillStyle = "rgba(133, 0, 0, 1)", a.fillRect(q + .5, 0, p - q - 1, 4), a.fillRect(q + .5, b - 4, p - q - 1, 4)) : (a.fillStyle = k.bodyBackground(.4), a.fillRect(0, 1, q, b - 1), a.fillRect(p, 1, this._width, b - 1));
          a.beginPath();
          a.moveTo(q, 0);
          a.lineTo(q, b);
          a.moveTo(p, 0);
          a.lineTo(p, b);
          a.lineWidth = .5;
          a.strokeStyle = k.foregroundTextGrey(1);
          a.stroke();
          b = Math.abs((this._selection ? this._toTime(this._selection.right) : this._windowEnd) - (this._selection ? this._toTime(this._selection.left) : this._windowStart));
          a.fillStyle = k.selectionText(.5);
          a.font = "8px sans-serif";
          a.textBaseline = "alphabetic";
          a.textAlign = "end";
          a.fillText(b.toFixed(2), Math.min(q, p) - 4, 10);
          a.fillText((b / 60).toFixed(2), Math.min(q, p) - 4, 20);
          a.restore();
        };
        a.prototype._drawChart = function() {
          var a = window.devicePixelRatio, b = this._height, h = this._controller.activeProfile, q = 4 * this._width, p = h.totalTime / q, k = this._overviewContext, g = this._controller.theme.blueHighlight(1);
          k.save();
          k.translate(0, a * b);
          var d = -a * b / (h.maxDepth - 1);
          k.scale(a / 4, d);
          k.clearRect(0, 0, q, h.maxDepth - 1);
          1 == this._mode && k.scale(1, 1 / h.snapshotCount);
          for (var f = 0, e = h.snapshotCount;f < e;f++) {
            var c = h.getSnapshotAt(f);
            if (c) {
              var n = null, x = 0;
              k.beginPath();
              k.moveTo(0, 0);
              for (var F = 0;F < q;F++) {
                x = h.startTime + F * p, x = (n = n ? n.queryNext(x) : c.query(x)) ? n.getDepth() - 1 : 0, k.lineTo(F, x);
              }
              k.lineTo(F, 0);
              k.fillStyle = g;
              k.fill();
              1 == this._mode && k.translate(0, -b * a / d);
            }
          }
          k.restore();
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
            var h = this._toPixels(this._windowStart), q = this._toPixels(this._windowEnd), p = 2 + m.FlameChartBase.DRAGHANDLE_WIDTH / 2, k = a >= h - p && a <= h + p, g = a >= q - p && a <= q + p;
            if (k && g) {
              return 4;
            }
            if (k) {
              return 2;
            }
            if (g) {
              return 3;
            }
            if (!this._windowEqRange() && a > h + p && a < q - p) {
              return 1;
            }
          }
          return 0;
        };
        a.prototype.onMouseDown = function(a, b) {
          var h = this._getDragTargetUnderCursor(a, b);
          0 === h ? (this._selection = {left:a, right:a}, this.draw()) : (1 === h && this._mouseController.updateCursor(m.MouseCursor.GRABBING), this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:h});
        };
        a.prototype.onMouseMove = function(a, b) {
          var h = m.MouseCursor.DEFAULT, q = this._getDragTargetUnderCursor(a, b);
          0 === q || this._selection || (h = 1 === q ? m.MouseCursor.GRAB : m.MouseCursor.EW_RESIZE);
          this._mouseController.updateCursor(h);
        };
        a.prototype.onMouseOver = function(a, b) {
          this.onMouseMove(a, b);
        };
        a.prototype.onMouseOut = function() {
          this._mouseController.updateCursor(m.MouseCursor.DEFAULT);
        };
        a.prototype.onDrag = function(a, g, h, q, p, k) {
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
            g = this._windowStart;
            h = this._windowEnd;
            p = this._toTimeRelative(p);
            switch(a.target) {
              case 1:
                g = a.windowStartInitial + p;
                h = a.windowEndInitial + p;
                break;
              case 2:
                g = b(a.windowStartInitial + p, this._rangeStart, h - m.FlameChartBase.MIN_WINDOW_LEN);
                break;
              case 3:
                h = b(a.windowEndInitial + p, g + m.FlameChartBase.MIN_WINDOW_LEN, this._rangeEnd);
                break;
              default:
                return;
            }
            this._controller.setWindow(g, h);
          }
        };
        a.prototype.onDragEnd = function(a, b, h, q, p, k) {
          this._selection && (this._selection = null, this._controller.setWindow(this._toTime(a), this._toTime(h)));
          this._dragInfo = null;
          this.onMouseMove(h, q);
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
      }(m.FlameChartBase);
      m.FlameChartOverview = w;
    })(m.Profiler || (m.Profiler = {}));
  })(g.Tools || (g.Tools = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(m) {
    (function(m) {
      var b = g.NumberUtilities.clamp;
      (function(b) {
        b[b.OVERVIEW = 0] = "OVERVIEW";
        b[b.CHART = 1] = "CHART";
      })(m.FlameChartHeaderType || (m.FlameChartHeaderType = {}));
      var w = function(g) {
        function a(a, b) {
          this._type = b;
          g.call(this, a);
        }
        __extends(a, g);
        a.prototype.draw = function() {
          var a = this._context, b = window.devicePixelRatio, h = this._width, q = this._height;
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.tabToolbar(1);
          a.fillRect(0, 0, h, q);
          this._initialized && (0 == this._type ? (b = this._toPixels(this._windowStart), h = this._toPixels(this._windowEnd), a.fillStyle = this._controller.theme.bodyBackground(1), a.fillRect(b, 0, h - b, q), this._drawLabels(this._rangeStart, this._rangeEnd), this._drawDragHandle(b), this._drawDragHandle(h)) : this._drawLabels(this._windowStart, this._windowEnd));
          a.restore();
        };
        a.prototype._drawLabels = function(b, g) {
          var h = this._context, q = this._calculateTickInterval(b, g), p = Math.ceil(b / q) * q, k = 500 <= q, v = k ? 1E3 : 1, d = this._decimalPlaces(q / v), k = k ? "s" : "ms", f = this._toPixels(p), e = this._height / 2, c = this._controller.theme;
          h.lineWidth = 1;
          h.strokeStyle = c.contentTextDarkGrey(.5);
          h.fillStyle = c.contentTextDarkGrey(1);
          h.textAlign = "right";
          h.textBaseline = "middle";
          h.font = "11px sans-serif";
          for (c = this._width + a.TICK_MAX_WIDTH;f < c;) {
            h.fillText((p / v).toFixed(d) + " " + k, f - 7, e + 1), h.beginPath(), h.moveTo(f, 0), h.lineTo(f, this._height + 1), h.closePath(), h.stroke(), p += q, f = this._toPixels(p);
          }
        };
        a.prototype._calculateTickInterval = function(b, g) {
          var h = (g - b) / (this._width / a.TICK_MAX_WIDTH), q = Math.pow(10, Math.floor(Math.log(h) / Math.LN10)), h = h / q;
          return 5 < h ? 10 * q : 2 < h ? 5 * q : 1 < h ? 2 * q : q;
        };
        a.prototype._drawDragHandle = function(a) {
          var b = this._context;
          b.lineWidth = 2;
          b.strokeStyle = this._controller.theme.bodyBackground(1);
          b.fillStyle = this._controller.theme.foregroundTextGrey(.7);
          this._drawRoundedRect(b, a - m.FlameChartBase.DRAGHANDLE_WIDTH / 2, m.FlameChartBase.DRAGHANDLE_WIDTH, this._height - 2);
        };
        a.prototype._drawRoundedRect = function(a, b, h, g) {
          var p, k = !0;
          void 0 === k && (k = !0);
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
          k && a.stroke();
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
              var h = this._toPixels(this._windowStart), g = this._toPixels(this._windowEnd), p = 2 + m.FlameChartBase.DRAGHANDLE_WIDTH / 2, h = a >= h - p && a <= h + p, g = a >= g - p && a <= g + p;
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
        a.prototype.onMouseDown = function(a, b) {
          var h = this._getDragTargetUnderCursor(a, b);
          1 === h && this._mouseController.updateCursor(m.MouseCursor.GRABBING);
          this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:h};
        };
        a.prototype.onMouseMove = function(a, b) {
          var h = m.MouseCursor.DEFAULT, g = this._getDragTargetUnderCursor(a, b);
          0 !== g && (1 !== g ? h = m.MouseCursor.EW_RESIZE : 1 !== g || this._windowEqRange() || (h = m.MouseCursor.GRAB));
          this._mouseController.updateCursor(h);
        };
        a.prototype.onMouseOver = function(a, b) {
          this.onMouseMove(a, b);
        };
        a.prototype.onMouseOut = function() {
          this._mouseController.updateCursor(m.MouseCursor.DEFAULT);
        };
        a.prototype.onDrag = function(a, g, h, q, p, k) {
          a = this._dragInfo;
          if (4 === a.target) {
            if (0 !== p) {
              a.target = 0 > p ? 2 : 3;
            } else {
              return;
            }
          }
          g = this._windowStart;
          h = this._windowEnd;
          p = this._toTimeRelative(p);
          switch(a.target) {
            case 1:
              h = 0 === this._type ? 1 : -1;
              g = a.windowStartInitial + h * p;
              h = a.windowEndInitial + h * p;
              break;
            case 2:
              g = b(a.windowStartInitial + p, this._rangeStart, h - m.FlameChartBase.MIN_WINDOW_LEN);
              break;
            case 3:
              h = b(a.windowEndInitial + p, g + m.FlameChartBase.MIN_WINDOW_LEN, this._rangeEnd);
              break;
            default:
              return;
          }
          this._controller.setWindow(g, h);
        };
        a.prototype.onDragEnd = function(a, b, h, g, p, k) {
          this._dragInfo = null;
          this.onMouseMove(h, g);
        };
        a.prototype.onClick = function(a, b) {
          1 === this._dragInfo.target && this._mouseController.updateCursor(m.MouseCursor.GRAB);
        };
        a.prototype.onHoverStart = function(a, b) {
        };
        a.prototype.onHoverEnd = function() {
        };
        a.TICK_MAX_WIDTH = 75;
        return a;
      }(m.FlameChartBase);
      m.FlameChartHeader = w;
    })(m.Profiler || (m.Profiler = {}));
  })(g.Tools || (g.Tools = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(g) {
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
        var r = function() {
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
              var q = a.length;
              this._threads = Array(q);
              this._progressInfo.pageLoaded = !0;
              this._progressInfo.threadsTotal = q;
              for (var p = 0;p < a.length;p++) {
                var k = a[p], v = [k.dict, k.tree];
                k.corrections && v.push(k.corrections);
                this._progressInfo.threadFilesTotal += v.length;
                this._loadData(v, function(a) {
                  return function(f) {
                    f && (f = new b.Thread(f), f.buffer.name = "Thread " + a, g._threads[a] = f);
                    h++;
                    g._progressInfo.threadsLoaded++;
                    g._onProgress();
                    h === q && g._pageLoadCallback.call(g, null, g._threads);
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
            var g = 0, p = 0, k = a.length, v = [];
            v.length = k;
            for (var d = 0;d < k;d++) {
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
                        p++;
                      }
                    } else {
                      v[c] = a;
                    }
                  } else {
                    v[c] = this.response;
                  }
                  ++g;
                  h && h(g);
                  g === k && b(v);
                };
              }(d, c);
              e.send();
            }
          };
          a.colors = "#0044ff #8c4b00 #cc5c33 #ff80c4 #ffbfd9 #ff8800 #8c5e00 #adcc33 #b380ff #bfd9ff #ffaa00 #8c0038 #bf8f30 #f780ff #cc99c9 #aaff00 #000073 #452699 #cc8166 #cca799 #000066 #992626 #cc6666 #ccc299 #ff6600 #526600 #992663 #cc6681 #99ccc2 #ff0066 #520066 #269973 #61994d #739699 #ffcc00 #006629 #269199 #94994d #738299 #ff0000 #590000 #234d8c #8c6246 #7d7399 #ee00ff #00474d #8c2385 #8c7546 #7c8c69 #eeff00 #4d003d #662e1a #62468c #8c6969 #6600ff #4c2900 #1a6657 #8c464f #8c6981 #44ff00 #401100 #1a2466 #663355 #567365 #d90074 #403300 #101d40 #59562d #66614d #cc0000 #002b40 #234010 #4c2626 #4d5e66 #00a3cc #400011 #231040 #4c3626 #464359 #0000bf #331b00 #80e6ff #311a33 #4d3939 #a69b00 #003329 #80ffb2 #331a20 #40303d #00a658 #40ffd9 #ffc480 #ffe1bf #332b26 #8c2500 #9933cc #80fff6 #ffbfbf #303326 #005e8c #33cc47 #b2ff80 #c8bfff #263332 #00708c #cc33ad #ffe680 #f2ffbf #262a33 #388c00 #335ccc #8091ff #bfffd9".split(" ");
          return a;
        }();
        b.TraceLogger = r;
      })(g.TraceLogger || (g.TraceLogger = {}));
    })(g.Profiler || (g.Profiler = {}));
  })(g.Tools || (g.Tools = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(g) {
    (function(g) {
      (function(b) {
        var m;
        (function(b) {
          b[b.START_HI = 0] = "START_HI";
          b[b.START_LO = 4] = "START_LO";
          b[b.STOP_HI = 8] = "STOP_HI";
          b[b.STOP_LO = 12] = "STOP_LO";
          b[b.TEXTID = 16] = "TEXTID";
          b[b.NEXTID = 20] = "NEXTID";
        })(m || (m = {}));
        m = function() {
          function b(a) {
            2 <= a.length && (this._text = a[0], this._data = new DataView(a[1]), this._buffer = new g.TimelineBuffer, this._walkTree(0));
          }
          Object.defineProperty(b.prototype, "buffer", {get:function() {
            return this._buffer;
          }, enumerable:!0, configurable:!0});
          b.prototype._walkTree = function(a) {
            var g = this._data, t = this._buffer;
            do {
              var h = a * b.ITEM_SIZE, q = 4294967295 * g.getUint32(h + 0) + g.getUint32(h + 4), p = 4294967295 * g.getUint32(h + 8) + g.getUint32(h + 12), k = g.getUint32(h + 16), h = g.getUint32(h + 20), v = 1 === (k & 1), k = k >>> 1, k = this._text[k];
              t.enter(k, null, q / 1E6);
              v && this._walkTree(a + 1);
              t.leave(k, null, p / 1E6);
              a = h;
            } while (0 !== a);
          };
          b.ITEM_SIZE = 24;
          return b;
        }();
        b.Thread = m;
      })(g.TraceLogger || (g.TraceLogger = {}));
    })(g.Profiler || (g.Profiler = {}));
  })(g.Tools || (g.Tools = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(m) {
    (function(m) {
      var b = g.NumberUtilities.clamp, w = function() {
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
      m.Buffer = w;
      var r = function() {
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
            var l = 0;
            switch(a.keyCode) {
              case F:
                this.printHelp();
                break;
              case n:
                this.showLineNumbers = !this.showLineNumbers;
                break;
              case x:
                this.showLineTime = !this.showLineTime;
                break;
              case k:
                l = -1;
                break;
              case v:
                l = 1;
                break;
              case b:
                l = -this.pageLineCount;
                break;
              case h:
                l = this.pageLineCount;
                break;
              case g:
                l = -this.lineIndex;
                break;
              case p:
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
              case e:
                if (a.metaKey || a.ctrlKey) {
                  this.selection = {start:0, end:this.buffer.length - 1}, a.preventDefault();
                }
                break;
              case c:
              ;
              case J:
                if (a.metaKey || a.ctrlKey) {
                  var K = "";
                  if (this.selection) {
                    for (var r = this.selection.start;r <= this.selection.end;r++) {
                      K += this.buffer.get(r) + "\n";
                    }
                  } else {
                    K = this.buffer.get(this.lineIndex);
                  }
                  a.keyCode === c ? alert(K) : window.open(URL.createObjectURL(new Blob([K], {type:"text/plain"})), "_blank");
                }
              ;
            }
            a.metaKey && (l *= this.pageLineCount);
            l && (this.scroll(l), a.preventDefault());
            l && a.shiftKey ? this.selection ? this.lineIndex > this.selection.start ? this.selection.end = this.lineIndex : this.selection.start = this.lineIndex : 0 < l ? this.selection = {start:this.lineIndex - l, end:this.lineIndex} : 0 > l && (this.selection = {start:this.lineIndex, end:this.lineIndex - l}) : l && (this.selection = null);
            this.paint();
          }.bind(this), !1);
          a.addEventListener("focus", function(c) {
            this.hasFocus = !0;
          }.bind(this), !1);
          a.addEventListener("blur", function(c) {
            this.hasFocus = !1;
          }.bind(this), !1);
          var b = 33, h = 34, g = 36, p = 35, k = 38, v = 40, d = 37, f = 39, e = 65, c = 67, n = 78, x = 84, F = 72, J = 83;
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
          for (var k = this.canvas.width, v = this.lineHeight, d = 0;d < a;d++) {
            var f = d * this.lineHeight, e = this.pageIndex + d, c = this.buffer.get(e), n = this.buffer.getFormat(e), x = this.buffer.getRepeat(e), F = 1 < e ? this.buffer.getTime(e) - this.buffer.getTime(0) : 0;
            this.context.fillStyle = e % 2 ? this.lineColor : this.alternateLineColor;
            n && n.backgroundFillStyle && (this.context.fillStyle = n.backgroundFillStyle);
            this.context.fillRect(0, f, k, v);
            this.context.fillStyle = this.selectionTextColor;
            this.context.fillStyle = this.textColor;
            this.selection && e >= this.selection.start && e <= this.selection.end && (this.context.fillStyle = this.selectionColor, this.context.fillRect(0, f, k, v), this.context.fillStyle = this.selectionTextColor);
            this.hasFocus && e === this.lineIndex && (this.context.fillStyle = this.selectionColor, this.context.fillRect(0, f, k, v), this.context.fillStyle = this.selectionTextColor);
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
      m.Terminal = r;
    })(m.Terminal || (m.Terminal = {}));
  })(g.Tools || (g.Tools = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(g) {
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
            var g = 1 * (performance.now() - this._lastTime) + 0 * this._lastWeightedTime, t = this._context, h = 2 * this._ratio, q = 30 * this._ratio, p = performance;
            p.memory && (q += 30 * this._ratio);
            var k = (this._canvas.width - q) / (h + 1) | 0, v = this._index++;
            this._index > k && (this._index = 0);
            k = this._canvas.height;
            t.globalAlpha = 1;
            t.fillStyle = "black";
            t.fillRect(q + v * (h + 1), 0, 4 * h, this._canvas.height);
            var d = Math.min(1E3 / 60 / g, 1);
            t.fillStyle = "#00FF00";
            t.globalAlpha = b ? .5 : 1;
            d = k / 2 * d | 0;
            t.fillRect(q + v * (h + 1), k - d, h, d);
            a && (d = Math.min(1E3 / 240 / a, 1), t.fillStyle = "#FF6347", d = k / 2 * d | 0, t.fillRect(q + v * (h + 1), k / 2 - d, h, d));
            0 === v % 16 && (t.globalAlpha = 1, t.fillStyle = "black", t.fillRect(0, 0, q, this._canvas.height), t.fillStyle = "white", t.font = 8 * this._ratio + "px Arial", t.textBaseline = "middle", h = (1E3 / g).toFixed(0), a && (h += " " + a.toFixed(0)), p.memory && (h += " " + (p.memory.usedJSHeapSize / 1024 / 1024).toFixed(2)), t.fillText(h, 2 * this._ratio, this._containerHeight / 2 * this._ratio));
            this._lastTime = performance.now();
            this._lastWeightedTime = g;
          }
        };
        return b;
      }();
      g.FPS = b;
    })(g.Mini || (g.Mini = {}));
  })(g.Tools || (g.Tools = {}));
})(Shumway || (Shumway = {}));
console.timeEnd("Load Shared Dependencies");
console.time("Load GFX Dependencies");
(function(g) {
  (function(m) {
    function u(c, e, a) {
      return t && a ? "string" === typeof e ? (c = g.ColorUtilities.cssStyleToRGBA(e), g.ColorUtilities.rgbaToCSSStyle(a.transformRGBA(c))) : e instanceof CanvasGradient && e._template ? e._template.createCanvasGradient(c, a) : e : e;
    }
    var b = g.NumberUtilities.clamp;
    (function(c) {
      c[c.None = 0] = "None";
      c[c.Brief = 1] = "Brief";
      c[c.Verbose = 2] = "Verbose";
    })(m.TraceLevel || (m.TraceLevel = {}));
    var w = g.Metrics.Counter.instance;
    m.frameCounter = new g.Metrics.Counter(!0);
    m.traceLevel = 2;
    m.writer = null;
    m.frameCount = function(c) {
      w.count(c);
      m.frameCounter.count(c);
    };
    m.timelineBuffer = new g.Tools.Profiler.TimelineBuffer("GFX");
    m.enterTimeline = function(c, e) {
    };
    m.leaveTimeline = function(c, e) {
    };
    var r = null, a = null, l = null, t = !0;
    t && "undefined" !== typeof CanvasRenderingContext2D && (r = CanvasGradient.prototype.addColorStop, a = CanvasRenderingContext2D.prototype.createLinearGradient, l = CanvasRenderingContext2D.prototype.createRadialGradient, CanvasRenderingContext2D.prototype.createLinearGradient = function(c, e, a, b) {
      return (new q(c, e, a, b)).createCanvasGradient(this, null);
    }, CanvasRenderingContext2D.prototype.createRadialGradient = function(c, e, a, b, f, d) {
      return (new p(c, e, a, b, f, d)).createCanvasGradient(this, null);
    }, CanvasGradient.prototype.addColorStop = function(c, e) {
      r.call(this, c, e);
      this._template.addColorStop(c, e);
    });
    var h = function() {
      return function(c, e) {
        this.offset = c;
        this.color = e;
      };
    }(), q = function() {
      function c(e, a, b, f) {
        this.x0 = e;
        this.y0 = a;
        this.x1 = b;
        this.y1 = f;
        this.colorStops = [];
      }
      c.prototype.addColorStop = function(c, e) {
        this.colorStops.push(new h(c, e));
      };
      c.prototype.createCanvasGradient = function(c, e) {
        for (var b = a.call(c, this.x0, this.y0, this.x1, this.y1), f = this.colorStops, d = 0;d < f.length;d++) {
          var n = f[d], x = n.offset, n = n.color, n = e ? u(c, n, e) : n;
          r.call(b, x, n);
        }
        b._template = this;
        b._transform = this._transform;
        return b;
      };
      return c;
    }(), p = function() {
      function c(e, a, b, f, d, n) {
        this.x0 = e;
        this.y0 = a;
        this.r0 = b;
        this.x1 = f;
        this.y1 = d;
        this.r1 = n;
        this.colorStops = [];
      }
      c.prototype.addColorStop = function(c, e) {
        this.colorStops.push(new h(c, e));
      };
      c.prototype.createCanvasGradient = function(c, e) {
        for (var a = l.call(c, this.x0, this.y0, this.r0, this.x1, this.y1, this.r1), b = this.colorStops, f = 0;f < b.length;f++) {
          var d = b[f], n = d.offset, d = d.color, d = e ? u(c, d, e) : d;
          r.call(a, n, d);
        }
        a._template = this;
        a._transform = this._transform;
        return a;
      };
      return c;
    }(), k;
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
    })(k || (k = {}));
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
        for (var n = c._commandPosition;f < n;) {
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
        var n = arguments.length;
        this._dataPosition + n >= this._data.length && this._ensureDataCapacity(this._dataPosition + n);
        var x = this._data, k = this._dataPosition;
        x[k] = c;
        x[k + 1] = e;
        2 < n && (x[k + 2] = a, x[k + 3] = b, 4 < n && (x[k + 4] = f, 6 === n && (x[k + 5] = d)));
        this._dataPosition += n;
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
        for (var b = this._commands, f = c._commands, d = this._commandPosition, n = 0;d < a;d++) {
          b[d] = f[n++];
        }
        this._commandPosition = a;
        a = this._dataPosition + c._dataPosition;
        a >= this._data.length && this._ensureDataCapacity(a);
        b = this._data;
        f = c._data;
        d = this._dataPosition;
        for (n = 0;d < a;d++) {
          b[d] = f[n++];
        }
        this._dataPosition = a;
        e && this._writeCommand(10);
      };
      c._arrayBufferPool = new g.ArrayBufferPool;
      return c;
    }();
    m.Path = v;
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
      k = function(c) {
        this._transform = c;
        this._template && (this._template._transform = c);
      };
      CanvasPattern.prototype.setTransform || (CanvasPattern.prototype.setTransform = k);
      CanvasGradient.prototype.setTransform || (CanvasGradient.prototype.setTransform = k);
      var c = CanvasRenderingContext2D.prototype.fill, n = CanvasRenderingContext2D.prototype.stroke;
      CanvasRenderingContext2D.prototype.fill = function(e, a) {
        var b = !!this.fillStyle._transform;
        if ((this.fillStyle instanceof CanvasPattern || this.fillStyle instanceof CanvasGradient) && b && e instanceof Path2D) {
          var b = this.fillStyle._transform, f;
          try {
            f = b.inverse();
          } catch (d) {
            f = b = m.Geometry.Matrix.createIdentitySVGMatrix();
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
          n.call(this, a);
          this.transform(e.a, e.b, e.c, e.d, e.e, e.f);
          this.lineWidth = b;
        } else {
          0 === arguments.length ? n.call(this) : 1 === arguments.length && n.call(this, c);
        }
      };
    }
    "undefined" !== typeof CanvasRenderingContext2D && function() {
      function c() {
        return m.Geometry.Matrix.createSVGMatrixFromArray(this.mozCurrentTransform);
      }
      var e = "currentTransform" in CanvasRenderingContext2D.prototype;
      CanvasRenderingContext2D.prototype.flashStroke = function(c, a) {
        if (e) {
          var f = this.currentTransform, d = new Path2D;
          d.addPath(c, f);
          var n = this.lineWidth;
          this.setTransform(1, 0, 0, 1, 0, 0);
          switch(a) {
            case 1:
              this.lineWidth = b(n * Math.sqrt((f.a + f.c) * (f.a + f.c) + (f.d + f.b) * (f.d + f.b)) * Math.SQRT1_2, 1, 1024);
              break;
            case 2:
              this.lineWidth = b(n * (f.d + f.b), 1, 1024);
              break;
            case 3:
              this.lineWidth = b(n * (f.a + f.c), 1, 1024);
          }
          this.stroke(d);
          this.setTransform(f.a, f.b, f.c, f.d, f.e, f.f);
          this.lineWidth = n;
        } else {
          this.stroke(c);
        }
      };
      if (!e) {
        if ("mozCurrentTransform" in CanvasRenderingContext2D.prototype) {
          Object.defineProperty(CanvasRenderingContext2D.prototype, "currentTransform", {get:c}), e = !0;
        } else {
          var a = CanvasRenderingContext2D.prototype.setTransform;
          CanvasRenderingContext2D.prototype.setTransform = function(c, e, b, f, d, n) {
            var x = this.currentTransform;
            x.a = c;
            x.b = e;
            x.c = b;
            x.d = f;
            x.e = d;
            x.f = n;
            a.call(this, c, e, b, f, d, n);
          };
          Object.defineProperty(CanvasRenderingContext2D.prototype, "currentTransform", {get:function() {
            return this._currentTransform || (this._currentTransform = m.Geometry.Matrix.createIdentitySVGMatrix());
          }});
        }
      }
    }();
    if ("undefined" !== typeof CanvasRenderingContext2D && void 0 === CanvasRenderingContext2D.prototype.globalColorMatrix) {
      var x = CanvasRenderingContext2D.prototype.fill, F = CanvasRenderingContext2D.prototype.stroke, J = CanvasRenderingContext2D.prototype.fillText, W = CanvasRenderingContext2D.prototype.strokeText;
      Object.defineProperty(CanvasRenderingContext2D.prototype, "globalColorMatrix", {get:function() {
        return this._globalColorMatrix ? this._globalColorMatrix.clone() : null;
      }, set:function(c) {
        c ? this._globalColorMatrix ? this._globalColorMatrix.set(c) : this._globalColorMatrix = c.clone() : this._globalColorMatrix = null;
      }, enumerable:!0, configurable:!0});
      CanvasRenderingContext2D.prototype.fill = function(c, e) {
        var a = null;
        this._globalColorMatrix && (a = this.fillStyle, this.fillStyle = u(this, this.fillStyle, this._globalColorMatrix));
        0 === arguments.length ? x.call(this) : 1 === arguments.length ? x.call(this, c) : 2 === arguments.length && x.call(this, c, e);
        a && (this.fillStyle = a);
      };
      CanvasRenderingContext2D.prototype.stroke = function(c, e) {
        var a = null;
        this._globalColorMatrix && (a = this.strokeStyle, this.strokeStyle = u(this, this.strokeStyle, this._globalColorMatrix));
        0 === arguments.length ? F.call(this) : 1 === arguments.length && F.call(this, c);
        a && (this.strokeStyle = a);
      };
      CanvasRenderingContext2D.prototype.fillText = function(c, e, a, b) {
        var f = null;
        this._globalColorMatrix && (f = this.fillStyle, this.fillStyle = u(this, this.fillStyle, this._globalColorMatrix));
        3 === arguments.length ? J.call(this, c, e, a) : 4 === arguments.length ? J.call(this, c, e, a, b) : g.Debug.unexpected();
        f && (this.fillStyle = f);
      };
      CanvasRenderingContext2D.prototype.strokeText = function(c, e, a, b) {
        var f = null;
        this._globalColorMatrix && (f = this.strokeStyle, this.strokeStyle = u(this, this.strokeStyle, this._globalColorMatrix));
        3 === arguments.length ? W.call(this, c, e, a) : 4 === arguments.length ? W.call(this, c, e, a, b) : g.Debug.unexpected();
        f && (this.strokeStyle = f);
      };
    }
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(g) {
    g.ScreenShot = function() {
      return function(g, b, m, r) {
        this.dataURL = g;
        this.w = b;
        this.h = m;
        this.pixelRatio = r;
      };
    }();
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  var m = function() {
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
      for (var m = g ? this._head : this._tail;m && b(m);) {
        m = g ? m.next : m.previous;
      }
    };
    return g;
  }();
  g.LRUList = m;
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
  (function(m) {
    (function(u) {
      function b(a, e, c, b) {
        var d = 1 - b;
        return a * d * d + 2 * e * d * b + c * b * b;
      }
      function w(a, e, c, b, d) {
        var k = d * d, h = 1 - d, g = h * h;
        return a * h * g + 3 * e * d * g + 3 * c * h * k + b * d * k;
      }
      var r = g.NumberUtilities.clamp, a = g.NumberUtilities.pow2, l = g.NumberUtilities.epsilonEquals;
      u.radianToDegrees = function(a) {
        return 180 * a / Math.PI;
      };
      u.degreesToRadian = function(a) {
        return a * Math.PI / 180;
      };
      u.quadraticBezier = b;
      u.quadraticBezierExtreme = function(a, e, c) {
        var d = (a - e) / (a - 2 * e + c);
        return 0 > d ? a : 1 < d ? c : b(a, e, c, d);
      };
      u.cubicBezier = w;
      u.cubicBezierExtremes = function(a, e, c, b) {
        var d = e - a, k;
        k = 2 * (c - e);
        var h = b - c;
        d + h === k && (h *= 1.0001);
        var g = 2 * d - k, p = k - 2 * d, p = Math.sqrt(p * p - 4 * d * (d - k + h));
        k = 2 * (d - k + h);
        d = (g + p) / k;
        g = (g - p) / k;
        p = [];
        0 <= d && 1 >= d && p.push(w(a, e, c, b, d));
        0 <= g && 1 >= g && p.push(w(a, e, c, b, g));
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
      u.Point = t;
      var h = function() {
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
      u.Point3D = h;
      var q = function() {
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
          var c = e.x + e.w, a = e.y + e.h, b = this.x + this.w, f = this.y + this.h;
          return e.x >= this.x && e.x < b && e.y >= this.y && e.y < f && c > this.x && c <= b && a > this.y && a <= f;
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
              var f = this.y + this.h;
              f < e.y + e.h && (f = e.y + e.h);
              this.x = c;
              this.y = a;
              this.w = b - c;
              this.h = f - a;
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
          var b = Math.max(this.x, e.x + c), f = Math.max(this.y, e.y + a);
          c = Math.min(this.x + this.w, e.x + c + e.w) - b;
          e = Math.min(this.y + this.h, e.y + a + e.h) - f;
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
      u.Rectangle = q;
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
          for (var c = new t(Number.MAX_VALUE, Number.MAX_VALUE), a = new t(Number.MIN_VALUE, Number.MIN_VALUE), b = 0;4 > b;b++) {
            var f = e[b].x, d = e[b].y;
            c.x = Math.min(c.x, f);
            c.y = Math.min(c.y, d);
            a.x = Math.max(a.x, f);
            a.y = Math.max(a.y, d);
          }
          return new q(c.x, c.y, a.x - c.x, a.y - c.y);
        };
        a.prototype.intersects = function(e) {
          return this.intersectsOneWay(e) && e.intersectsOneWay(this);
        };
        a.prototype.intersectsOneWay = function(e) {
          for (var c = 0;2 > c;c++) {
            for (var a = 0;4 > a;a++) {
              var b = e.corners[a].dot(this.axes[c]), f, d;
              0 === a ? d = f = b : b < f ? f = b : b > d && (d = b);
            }
            if (f > 1 + this.origins[c] || d < this.origins[c]) {
              return !1;
            }
          }
          return !0;
        };
        return a;
      }();
      u.OBB = p;
      (function(a) {
        a[a.Unknown = 0] = "Unknown";
        a[a.Identity = 1] = "Identity";
        a[a.Translation = 2] = "Translation";
      })(u.MatrixType || (u.MatrixType = {}));
      var k = function() {
        function a(e, c, b, d, k, h) {
          this._data = new Float64Array(6);
          this._type = 0;
          this.setElements(e, c, b, d, k, h);
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
          var k = this._data;
          k[0] = e;
          k[1] = c;
          k[2] = a;
          k[3] = b;
          k[4] = d;
          k[5] = f;
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
        a.prototype.transform = function(a, c, b, d, f, k) {
          var h = this._data, g = h[0], p = h[1], q = h[2], l = h[3], v = h[4], t = h[5];
          h[0] = g * a + q * c;
          h[1] = p * a + l * c;
          h[2] = g * b + q * d;
          h[3] = p * b + l * d;
          h[4] = g * f + q * k + v;
          h[5] = p * f + l * k + t;
          this._type = 0;
          return this;
        };
        a.prototype.transformRectangle = function(a, c) {
          var b = this._data, d = b[0], f = b[1], k = b[2], h = b[3], g = b[4], b = b[5], p = a.x, q = a.y, l = a.w, v = a.h;
          c[0].x = d * p + k * q + g;
          c[0].y = f * p + h * q + b;
          c[1].x = d * (p + l) + k * q + g;
          c[1].y = f * (p + l) + h * q + b;
          c[2].x = d * (p + l) + k * (q + v) + g;
          c[2].y = f * (p + l) + h * (q + v) + b;
          c[3].x = d * p + k * (q + v) + g;
          c[3].y = f * p + h * (q + v) + b;
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
              var b = c[0], d = c[1], f = c[2], k = c[3], h = c[4], g = c[5], p = a.x, q = a.y, l = a.w, v = a.h, c = b * p + f * q + h, t = d * p + k * q + g, m = b * (p + l) + f * q + h, r = d * (p + l) + k * q + g, u = b * (p + l) + f * (q + v) + h, l = d * (p + l) + k * (q + v) + g, b = b * p + f * (q + v) + h, d = d * p + k * (q + v) + g, k = 0;
              c > m && (k = c, c = m, m = k);
              u > b && (k = u, u = b, b = k);
              a.x = c < u ? c : u;
              a.w = (m > b ? m : b) - a.x;
              t > r && (k = t, t = r, r = k);
              l > d && (k = l, l = d, d = k);
              a.y = t < l ? t : l;
              a.h = (r > d ? r : d) - a.y;
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
          var c = this._data, b = c[0], d = c[1], f = c[2], k = c[3], h = c[4], g = c[5], p = Math.cos(a);
          a = Math.sin(a);
          c[0] = p * b - a * d;
          c[1] = a * b + p * d;
          c[2] = p * f - a * k;
          c[3] = a * f + p * k;
          c[4] = p * h - a * g;
          c[5] = a * h + p * g;
          this._type = 0;
          return this;
        };
        a.prototype.concat = function(a) {
          if (1 === a._type) {
            return this;
          }
          var c = this._data;
          a = a._data;
          var b = c[0] * a[0], d = 0, f = 0, k = c[3] * a[3], h = c[4] * a[0] + a[4], g = c[5] * a[3] + a[5];
          if (0 !== c[1] || 0 !== c[2] || 0 !== a[1] || 0 !== a[2]) {
            b += c[1] * a[2], k += c[2] * a[1], d += c[0] * a[1] + c[1] * a[3], f += c[2] * a[0] + c[3] * a[2], h += c[5] * a[2], g += c[4] * a[1];
          }
          c[0] = b;
          c[1] = d;
          c[2] = f;
          c[3] = k;
          c[4] = h;
          c[5] = g;
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
              var d = 0, f = 0, k = b[3] * c[3], h = b[4] * c[0] + c[4], g = b[5] * c[3] + c[5];
              if (0 !== b[1] || 0 !== b[2] || 0 !== c[1] || 0 !== c[2]) {
                a += b[1] * c[2], k += b[2] * c[1], d += b[0] * c[1] + b[1] * c[3], f += b[2] * c[0] + b[3] * c[2], h += b[5] * c[2], g += b[4] * c[1];
              }
              c[0] = a;
              c[1] = d;
              c[2] = f;
              c[3] = k;
              c[4] = h;
              c[5] = g;
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
              var d = c[1], f = c[2], k = c[4], h = c[5];
              if (0 === d && 0 === f) {
                var g = b[0] = 1 / c[0], c = b[3] = 1 / c[3];
                b[1] = 0;
                b[2] = 0;
                b[4] = -g * k;
                b[5] = -c * h;
              } else {
                var g = c[0], c = c[3], p = g * c - d * f;
                if (0 === p) {
                  a.setIdentity();
                  return;
                }
                p = 1 / p;
                b[0] = c * p;
                d = b[1] = -d * p;
                f = b[2] = -f * p;
                c = b[3] = g * p;
                b[4] = -(b[0] * k + f * h);
                b[5] = -(d * k + c * h);
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
      u.Matrix = k;
      k = function() {
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
            for (var f = 4 * d, k = 0;4 > k;k++) {
              b[d] += c[f + k] * a[k];
            }
          }
          return new h(b[0], b[1], b[2]);
        };
        a.create2DProjection = function(b, c, d) {
          return new a([2 / b, 0, 0, 0, 0, -2 / c, 0, 0, 0, 0, 2 / d, 0, -1, 1, 0, 1]);
        };
        a.createPerspective = function(b) {
          b = Math.tan(.5 * Math.PI - .5 * b);
          var c = 1 / -4999.9;
          return new a([b / 1, 0, 0, 0, 0, b, 0, 0, 0, 0, 5000.1 * c, -1, 0, 0, 1E3 * c, 0]);
        };
        a.createIdentity = function() {
          return a.createTranslation(0, 0);
        };
        a.createTranslation = function(b, c) {
          return new a([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, b, c, 0, 1]);
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
          var d = b._m, k = c._m, h = d[0], g = d[1], p = d[2], q = d[3], l = d[4], v = d[5], t = d[6], m = d[7], r = d[8], u = d[9], w = d[10], z = d[11], A = d[12], B = d[13], D = d[14], d = d[15], y = k[0], G = k[1], C = k[2], E = k[3], I = k[4], L = k[5], M = k[6], N = k[7], O = k[8], P = k[9], Q = k[10], R = k[11], S = k[12], T = k[13], U = k[14], k = k[15];
          return new a([h * y + g * I + p * O + q * S, h * G + g * L + p * P + q * T, h * C + g * M + p * Q + q * U, h * E + g * N + p * R + q * k, l * y + v * I + t * O + m * S, l * G + v * L + t * P + m * T, l * C + v * M + t * Q + m * U, l * E + v * N + t * R + m * k, r * y + u * I + w * O + z * S, r * G + u * L + w * P + z * T, r * C + u * M + w * Q + z * U, r * E + u * N + w * R + z * k, A * y + B * I + D * O + d * S, A * G + B * L + D * P + d * T, A * C + B * M + D * Q + d * U, A * E + B * 
          N + D * R + d * k]);
        };
        a.createInverse = function(b) {
          var c = b._m;
          b = c[0];
          var d = c[1], k = c[2], h = c[3], g = c[4], p = c[5], q = c[6], l = c[7], v = c[8], t = c[9], m = c[10], r = c[11], u = c[12], w = c[13], z = c[14], c = c[15], A = m * c, B = z * r, D = q * c, y = z * l, G = q * r, C = m * l, E = k * c, I = z * h, L = k * r, M = m * h, N = k * l, O = q * h, P = v * w, Q = u * t, R = g * w, S = u * p, T = g * t, U = v * p, aa = b * w, ba = u * d, ca = b * t, da = v * d, ea = b * p, fa = g * d, ga = A * p + y * t + G * w - (B * p + D * t + C * w), ha = B * 
          d + E * t + M * w - (A * d + I * t + L * w), w = D * d + I * p + N * w - (y * d + E * p + O * w), d = C * d + L * p + O * t - (G * d + M * p + N * t), p = 1 / (b * ga + g * ha + v * w + u * d);
          return new a([p * ga, p * ha, p * w, p * d, p * (B * g + D * v + C * u - (A * g + y * v + G * u)), p * (A * b + I * v + L * u - (B * b + E * v + M * u)), p * (y * b + E * g + O * u - (D * b + I * g + N * u)), p * (G * b + M * g + N * v - (C * b + L * g + O * v)), p * (P * l + S * r + T * c - (Q * l + R * r + U * c)), p * (Q * h + aa * r + da * c - (P * h + ba * r + ca * c)), p * (R * h + ba * l + ea * c - (S * h + aa * l + fa * c)), p * (U * h + ca * l + fa * r - (T * h + da * l + ea * 
          r)), p * (R * m + U * z + Q * q - (T * z + P * q + S * m)), p * (ca * z + P * k + ba * m - (aa * m + da * z + Q * k)), p * (aa * q + fa * z + S * k - (ea * z + R * k + ba * q)), p * (ea * m + T * k + da * q - (ca * q + fa * m + U * k))]);
        };
        return a;
      }();
      u.Matrix3D = k;
      k = function() {
        function a(b, c, d) {
          void 0 === d && (d = 7);
          var k = this.size = 1 << d;
          this.sizeInBits = d;
          this.w = b;
          this.h = c;
          this.c = Math.ceil(b / k);
          this.r = Math.ceil(c / k);
          this.grid = [];
          for (b = 0;b < this.r;b++) {
            for (this.grid.push([]), c = 0;c < this.c;c++) {
              this.grid[b][c] = new a.Cell(new q(c * k, b * k, k, k));
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
          return new q(0, 0, this.w, this.h);
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
              for (var f = Math.min(this.c, Math.ceil((a.x + a.w) / this.size)) - c, k = Math.min(this.r, Math.ceil((a.y + a.h) / this.size)) - b, h = 0;h < f;h++) {
                for (var g = 0;g < k;g++) {
                  d = this.grid[b + g][c + h], d = d.region.clone(), d.intersect(a), d.isEmpty() || this.addDirtyRectangle(d);
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
                var k = this.grid[d][f];
                a.beginPath();
                b(k.region);
                a.closePath();
                a.stroke();
              }
            }
          }
          a.strokeStyle = "#E0F8D8";
          for (d = 0;d < this.r;d++) {
            for (f = 0;f < this.c;f++) {
              k = this.grid[d][f], a.beginPath(), b(k.bounds), a.closePath(), a.stroke();
            }
          }
        };
        a.tmpRectangle = q.createEmpty();
        return a;
      }();
      u.DirtyRegion = k;
      (function(a) {
        var b = function() {
          function c(c) {
            this.region = c;
            this.bounds = q.createEmpty();
          }
          c.prototype.clear = function() {
            this.bounds.setEmpty();
          };
          return c;
        }();
        a.Cell = b;
      })(k = u.DirtyRegion || (u.DirtyRegion = {}));
      var v = function() {
        function a(b, c, d, f, k, h) {
          this.index = b;
          this.x = c;
          this.y = d;
          this.scale = h;
          this.bounds = new q(c * f, d * k, f, k);
        }
        a.prototype.getOBB = function() {
          if (this._obb) {
            return this._obb;
          }
          this.bounds.getCorners(a.corners);
          return this._obb = new p(a.corners);
        };
        a.corners = t.createEmptyPoints(4);
        return a;
      }();
      u.Tile = v;
      var d = function() {
        function a(b, c, d, f, k) {
          this.tileW = d;
          this.tileH = f;
          this.scale = k;
          this.w = b;
          this.h = c;
          this.rows = Math.ceil(c / f);
          this.columns = Math.ceil(b / d);
          this.tiles = [];
          for (c = b = 0;c < this.rows;c++) {
            for (var h = 0;h < this.columns;h++) {
              this.tiles.push(new v(b++, h, c, d, f, k));
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
          var k;
          b = new q(0, 0, this.w, this.h);
          d && (k = new p(a._points));
          b.intersect(p.getBounds(a._points));
          if (b.isEmpty()) {
            return [];
          }
          var h = b.x / this.tileW | 0;
          c = b.y / this.tileH | 0;
          var g = Math.ceil((b.x + b.w) / this.tileW) | 0, l = Math.ceil((b.y + b.h) / this.tileH) | 0, h = r(h, 0, this.columns), g = r(g, 0, this.columns);
          c = r(c, 0, this.rows);
          for (var l = r(l, 0, this.rows), v = [];h < g;h++) {
            for (var t = c;t < l;t++) {
              var m = this.tiles[t * this.columns + h];
              m.bounds.intersects(b) && (d ? m.getOBB().intersects(k) : 1) && v.push(m);
            }
          }
          return v;
        };
        a.prototype.getManyTiles = function(b, c) {
          function d(c, a, b) {
            return (c - a.x) * (b.y - a.y) / (b.x - a.x) + a.y;
          }
          function k(c, a, b, e, d) {
            if (!(0 > b || b >= a.columns)) {
              for (e = r(e, 0, a.rows), d = r(d + 1, 0, a.rows);e < d;e++) {
                c.push(a.tiles[e * a.columns + b]);
              }
            }
          }
          var h = a._points;
          c.transformRectangle(b, h);
          for (var g = h[0].x < h[1].x ? 0 : 1, p = h[2].x < h[3].x ? 2 : 3, p = h[g].x < h[p].x ? g : p, g = [], q = 0;5 > q;q++, p++) {
            g.push(h[p % 4]);
          }
          (g[1].x - g[0].x) * (g[3].y - g[0].y) < (g[1].y - g[0].y) * (g[3].x - g[0].x) && (h = g[1], g[1] = g[3], g[3] = h);
          var h = [], l, v, p = Math.floor(g[0].x / this.tileW), q = (p + 1) * this.tileW;
          if (g[2].x < q) {
            l = Math.min(g[0].y, g[1].y, g[2].y, g[3].y);
            v = Math.max(g[0].y, g[1].y, g[2].y, g[3].y);
            var t = Math.floor(l / this.tileH), m = Math.floor(v / this.tileH);
            k(h, this, p, t, m);
            return h;
          }
          var u = 0, w = 4, H = !1;
          if (g[0].x === g[1].x || g[0].x === g[3].x) {
            g[0].x === g[1].x ? (H = !0, u++) : w--, l = d(q, g[u], g[u + 1]), v = d(q, g[w], g[w - 1]), t = Math.floor(g[u].y / this.tileH), m = Math.floor(g[w].y / this.tileH), k(h, this, p, t, m), p++;
          }
          do {
            var z, A, B, D;
            g[u + 1].x < q ? (z = g[u + 1].y, B = !0) : (z = d(q, g[u], g[u + 1]), B = !1);
            g[w - 1].x < q ? (A = g[w - 1].y, D = !0) : (A = d(q, g[w], g[w - 1]), D = !1);
            t = Math.floor((g[u].y < g[u + 1].y ? l : z) / this.tileH);
            m = Math.floor((g[w].y > g[w - 1].y ? v : A) / this.tileH);
            k(h, this, p, t, m);
            if (B && H) {
              break;
            }
            B ? (H = !0, u++, l = d(q, g[u], g[u + 1])) : l = z;
            D ? (w--, v = d(q, g[w], g[w - 1])) : v = A;
            p++;
            q = (p + 1) * this.tileW;
          } while (u < w);
          return h;
        };
        a._points = t.createEmptyPoints(4);
        return a;
      }();
      u.TileCache = d;
      k = function() {
        function b(a, c, d) {
          this._cacheLevels = [];
          this._source = a;
          this._tileSize = c;
          this._minUntiledSize = d;
        }
        b.prototype._getTilesAtScale = function(b, c, f) {
          var k = Math.max(c.getAbsoluteScaleX(), c.getAbsoluteScaleY()), g = 0;
          1 !== k && (g = r(Math.round(Math.log(1 / k) / Math.LN2), -5, 3));
          k = a(g);
          if (this._source.hasFlags(1048576)) {
            for (;;) {
              k = a(g);
              if (f.contains(this._source.getBounds().getAbsoluteBounds().clone().scale(k, k))) {
                break;
              }
              g--;
            }
          }
          this._source.hasFlags(2097152) || (g = r(g, -5, 0));
          k = a(g);
          f = 5 + g;
          g = this._cacheLevels[f];
          if (!g) {
            var g = this._source.getBounds().getAbsoluteBounds().clone().scale(k, k), h, p;
            this._source.hasFlags(1048576) || !this._source.hasFlags(4194304) || Math.max(g.w, g.h) <= this._minUntiledSize ? (h = g.w, p = g.h) : h = p = this._tileSize;
            g = this._cacheLevels[f] = new d(g.w, g.h, h, p, k);
          }
          return g.getTiles(b, c.scaleClone(k, k));
        };
        b.prototype.fetchTiles = function(a, c, b, d) {
          var f = new q(0, 0, b.canvas.width, b.canvas.height);
          a = this._getTilesAtScale(a, c, f);
          var k;
          c = this._source;
          for (var g = 0;g < a.length;g++) {
            var h = a[g];
            h.cachedSurfaceRegion && h.cachedSurfaceRegion.surface && !c.hasFlags(1048592) || (k || (k = []), k.push(h));
          }
          k && this._cacheTiles(b, k, d, f);
          c.removeFlags(16);
          return a;
        };
        b.prototype._getTileBounds = function(a) {
          for (var c = q.createEmpty(), b = 0;b < a.length;b++) {
            c.union(a[b].bounds);
          }
          return c;
        };
        b.prototype._cacheTiles = function(a, c, b, d, f) {
          void 0 === f && (f = 4);
          var k = this._getTileBounds(c);
          a.save();
          a.setTransform(1, 0, 0, 1, 0, 0);
          a.clearRect(0, 0, d.w, d.h);
          a.translate(-k.x, -k.y);
          a.scale(c[0].scale, c[0].scale);
          var g = this._source.getBounds();
          a.translate(-g.x, -g.y);
          2 <= m.traceLevel && m.writer && m.writer.writeLn("Rendering Tiles: " + k);
          this._source.render(a, 0);
          a.restore();
          for (var g = null, h = 0;h < c.length;h++) {
            var p = c[h], q = p.bounds.clone();
            q.x -= k.x;
            q.y -= k.y;
            d.contains(q) || (g || (g = []), g.push(p));
            p.cachedSurfaceRegion = b(p.cachedSurfaceRegion, a, q);
          }
          g && (2 <= g.length ? (c = g.slice(0, g.length / 2 | 0), k = g.slice(c.length), this._cacheTiles(a, c, b, d, f - 1), this._cacheTiles(a, k, b, d, f - 1)) : this._cacheTiles(a, g, b, d, f - 1));
        };
        return b;
      }();
      u.RenderableTileCache = k;
    })(m.Geometry || (m.Geometry = {}));
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(g, m) {
  function u() {
    this.constructor = g;
  }
  for (var b in m) {
    m.hasOwnProperty(b) && (g[b] = m[b]);
  }
  u.prototype = m.prototype;
  g.prototype = new u;
};
(function(g) {
  (function(m) {
    var u = g.IntegerUtilities.roundToMultipleOfPowerOfTwo, b = m.Geometry.Rectangle;
    (function(g) {
      var r = function(a) {
        function b() {
          a.apply(this, arguments);
        }
        __extends(b, a);
        return b;
      }(m.Geometry.Rectangle);
      g.Region = r;
      var a = function() {
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
      g.CompactAllocator = a;
      var l = function(b) {
        function g(a, f, e, c, n) {
          b.call(this, a, f, e, c);
          this._children = null;
          this._horizontal = n;
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
      }(g.Region), t = function() {
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
          var c = this._freeList, n = this._index;
          return 0 < c.length ? (f = c.pop(), f.w = a, f.h = b, f.allocated = !0, f) : n < this._total ? (c = n / this._columns | 0, f = new h((n - c * this._columns) * f, c * e, a, b), f.index = n, f.allocator = this, f.allocated = !0, this._index++, f) : null;
        };
        a.prototype.free = function(a) {
          a.allocated = !1;
          this._freeList.push(a);
        };
        return a;
      }();
      g.GridAllocator = t;
      var h = function(a) {
        function b(d, f, e, c) {
          a.call(this, d, f, e, c);
          this.index = -1;
        }
        __extends(b, a);
        return b;
      }(g.Region);
      g.GridCell = h;
      var q = function() {
        return function(a, b, d) {
          this.size = a;
          this.region = b;
          this.allocator = d;
        };
      }(), p = function(a) {
        function b(d, f, e, c, n) {
          a.call(this, d, f, e, c);
          this.region = n;
        }
        __extends(b, a);
        return b;
      }(g.Region);
      g.BucketCell = p;
      r = function() {
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
          var e = null, c, n = this._buckets;
          do {
            for (var g = 0;g < n.length && !(n[g].size >= f && (c = n[g], e = c.allocator.allocate(a, d)));g++) {
            }
            if (!e) {
              var k = this._h - this._filled;
              if (k < d) {
                return null;
              }
              var g = u(f, 8), h = 2 * g;
              h > k && (h = k);
              if (h < g) {
                return null;
              }
              k = new b(0, this._filled, this._w, h);
              this._buckets.push(new q(g, k, new t(k.w, k.h, g, g)));
              this._filled += h;
            }
          } while (!e);
          return new p(c.region.x + e.x, c.region.y + e.y, e.w, e.h, e);
        };
        a.prototype.free = function(a) {
          a.region.allocator.free(a.region);
        };
        return a;
      }();
      g.BucketAllocator = r;
    })(m.RegionAllocator || (m.RegionAllocator = {}));
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
          var g = this._createSurface(a, b);
          this._surfaces.push(g);
          return g;
        };
        a.prototype.addSurface = function(a) {
          this._surfaces.push(a);
        };
        a.prototype.allocate = function(a, b, g) {
          for (var q = 0;q < this._surfaces.length;q++) {
            var p = this._surfaces[q];
            if (p !== g && (p = p.allocate(a, b))) {
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
    })(m.SurfaceRegionAllocator || (m.SurfaceRegionAllocator = {}));
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(m) {
    var u = m.Geometry.Rectangle, b = m.Geometry.Matrix, w = m.Geometry.DirtyRegion;
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
    })(m.BlendMode || (m.BlendMode = {}));
    var r = m.BlendMode;
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
    })(m.NodeFlags || (m.NodeFlags = {}));
    var a = m.NodeFlags;
    (function(a) {
      a[a.Node = 1] = "Node";
      a[a.Shape = 3] = "Shape";
      a[a.Group = 5] = "Group";
      a[a.Stage = 13] = "Stage";
      a[a.Renderable = 33] = "Renderable";
    })(m.NodeType || (m.NodeType = {}));
    var l = m.NodeType;
    (function(a) {
      a[a.None = 0] = "None";
      a[a.OnStageBoundsChanged = 1] = "OnStageBoundsChanged";
      a[a.RemovedFromStage = 2] = "RemovedFromStage";
    })(m.NodeEventType || (m.NodeEventType = {}));
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
    m.NodeVisitor = t;
    var h = function() {
      return function() {
      };
    }();
    m.State = h;
    var q = function(a) {
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
    }(h);
    m.PreRenderState = q;
    var p = function(a) {
      function c() {
        a.apply(this, arguments);
        this.isDirty = !0;
      }
      __extends(c, a);
      c.prototype.start = function(a, c) {
        this._dirtyRegion = c;
        var b = new q;
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
    m.PreRenderVisitor = p;
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
    m.TracingNodeVisitor = h;
    var k = function() {
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
          for (var b = this._eventListeners, d = 0;d < b.length;d++) {
            var e = b[d];
            e.type === a && e.listener(this, a);
          }
        }
      };
      b.prototype.addEventListener = function(a, b) {
        this._eventListeners || (this._eventListeners = []);
        this._eventListeners.push({type:a, listener:b});
      };
      b.prototype.removeEventListener = function(a, b) {
        for (var d = this._eventListeners, e = 0;e < d.length;e++) {
          var f = d[e];
          if (f.type === a && f.listener === b) {
            d.splice(e, 1);
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
          var d = this.getTransform().getConcatenatedMatrix();
          a ? (a = a.getTransform().getInvertedConcatenatedMatrix(), a.preMultiply(d), a.transformRectangleAABB(b), a.free()) : d.transformRectangleAABB(b);
        }
        return b;
      };
      b.prototype._markCurrentBoundsAsDirtyRegion = function() {
      };
      b.prototype.getStage = function(a) {
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
      b.prototype.getChildren = function(a) {
        throw void 0;
      };
      b.prototype.getBounds = function(a) {
        throw void 0;
      };
      b.prototype.setBounds = function(a) {
        (this._bounds || (this._bounds = u.createEmpty())).set(a);
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
      b.prototype._findClosestAncestor = function() {
        for (var a = this;a;) {
          if (!1 === a.hasFlags(512)) {
            return a;
          }
          a = a._parent;
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
      b.prototype.getTransformMatrix = function() {
        var a;
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
            g.Debug.unexpectedCase();
        }
      };
      b.prototype.invalidate = function() {
        this._propagateFlagsUp(a.UpOnInvalidate);
      };
      b.prototype.toString = function(a) {
        void 0 === a && (a = !1);
        var b = l[this._type] + " " + this._id;
        a && (b += " " + this._bounds.toString());
        return b;
      };
      b._path = [];
      b._nextId = 0;
      return b;
    }();
    m.Node = k;
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
        var c = this._bounds || (this._bounds = u.createEmpty());
        if (this.hasFlags(256)) {
          c.setEmpty();
          for (var b = this._children, d = u.allocate(), e = 0;e < b.length;e++) {
            var f = b[e];
            d.set(f.getBounds());
            f.getTransformMatrix().transformRectangleAABB(d);
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
        for (var c = u.createEmpty(), b = this._children, d = u.allocate(), e = 0;e < b.length;e++) {
          var f = b[e];
          d.set(f.getLayerBounds(a));
          f.getTransformMatrix().transformRectangleAABB(d);
          c.union(d);
        }
        d.free();
        a && this._layer && this._layer.expandBounds(c);
        return c;
      };
      return c;
    }(k);
    m.Group = v;
    var d = function() {
      function d(a) {
        this._node = a;
        this._matrix = b.createIdentity();
        this._colorMatrix = m.ColorMatrix.createIdentity();
        this._concatenatedMatrix = b.createIdentity();
        this._invertedConcatenatedMatrix = b.createIdentity();
        this._concatenatedColorMatrix = m.ColorMatrix.createIdentity();
      }
      d.prototype.setMatrix = function(c) {
        this._matrix.isEqual(c) || (this._matrix.set(c), this._node._propagateFlagsUp(a.UpOnMoved), this._node._propagateFlagsDown(a.DownOnMoved));
      };
      d.prototype.setColorMatrix = function(c) {
        this._colorMatrix.set(c);
        this._node._propagateFlagsUp(a.UpOnColorMatrixChanged);
        this._node._propagateFlagsDown(a.DownOnColorMatrixChanged);
      };
      d.prototype.getMatrix = function(a) {
        void 0 === a && (a = !1);
        return a ? this._matrix.clone() : this._matrix;
      };
      d.prototype.hasColorMatrix = function() {
        return null !== this._colorMatrix;
      };
      d.prototype.getColorMatrix = function() {
        var a;
        void 0 === a && (a = !1);
        null === this._colorMatrix && (this._colorMatrix = m.ColorMatrix.createIdentity());
        return a ? this._colorMatrix.clone() : this._colorMatrix;
      };
      d.prototype.getConcatenatedMatrix = function(a) {
        void 0 === a && (a = !1);
        if (this._node.hasFlags(512)) {
          for (var d = this._node._findClosestAncestor(), e = k._getAncestors(this._node, d), f = d ? d.getTransform()._concatenatedMatrix.clone() : b.createIdentity(), g = e.length - 1;0 <= g;g--) {
            var d = e[g], h = d.getTransform();
            f.preMultiply(h._matrix);
            h._concatenatedMatrix.set(f);
            d.removeFlags(512);
          }
        }
        return a ? this._concatenatedMatrix.clone() : this._concatenatedMatrix;
      };
      d.prototype.getInvertedConcatenatedMatrix = function() {
        var a = !0;
        void 0 === a && (a = !1);
        this._node.hasFlags(1024) && (this.getConcatenatedMatrix().inverse(this._invertedConcatenatedMatrix), this._node.removeFlags(1024));
        return a ? this._invertedConcatenatedMatrix.clone() : this._invertedConcatenatedMatrix;
      };
      d.prototype.toString = function() {
        return this._matrix.toString();
      };
      return d;
    }();
    m.Transform = d;
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
        return r[this._blendMode];
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
    m.Layer = f;
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
        var c = this._bounds || (this._bounds = u.createEmpty());
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
    }(k);
    m.Shape = h;
    m.RendererOptions = function() {
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
    })(m.Backend || (m.Backend = {}));
    t = function(a) {
      function c(c, b, d) {
        a.call(this);
        this._container = c;
        this._stage = b;
        this._options = d;
        this._viewport = u.createSquare();
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
    m.Renderer = t;
    t = function(a) {
      function c(b, d, f) {
        void 0 === f && (f = !1);
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
        this.setBounds(new u(0, 0, b, d));
        f ? (this._dirtyRegion = new w(b, d), this._dirtyRegion.addDirtyRectangle(new u(0, 0, b, d))) : this._dirtyRegion = null;
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
    m.Stage = t;
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(m) {
    function u(a, b, c) {
      return a + (b - a) * c;
    }
    function b(a, b, c) {
      return u(a >> 24 & 255, b >> 24 & 255, c) << 24 | u(a >> 16 & 255, b >> 16 & 255, c) << 16 | u(a >> 8 & 255, b >> 8 & 255, c) << 8 | u(a & 255, b & 255, c);
    }
    var w = m.Geometry.Point, r = m.Geometry.Rectangle, a = m.Geometry.Matrix, l = g.ArrayUtilities.indexOf, t = function(a) {
      function b() {
        a.call(this);
        this._parents = [];
        this._renderableParents = [];
        this._invalidateEventListeners = null;
        this._flags &= -3;
        this._type = 33;
      }
      __extends(b, a);
      Object.defineProperty(b.prototype, "parents", {get:function() {
        return this._parents;
      }, enumerable:!0, configurable:!0});
      b.prototype.addParent = function(a) {
        l(this._parents, a);
        this._parents.push(a);
      };
      b.prototype.willRender = function() {
        for (var a = this._parents, b = 0;b < a.length;b++) {
          for (var d = a[b];d;) {
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
      b.prototype.addRenderableParent = function(a) {
        this._renderableParents.push(a);
      };
      b.prototype.wrap = function() {
        for (var a, b = this._parents, d = 0;d < b.length;d++) {
          if (a = b[d], !a._parent) {
            return a;
          }
        }
        a = new m.Shape(this);
        this.addParent(a);
        return a;
      };
      b.prototype.invalidate = function() {
        this.setFlags(16);
        for (var a = this._parents, b = 0;b < a.length;b++) {
          a[b].invalidate();
        }
        a = this._renderableParents;
        for (b = 0;b < a.length;b++) {
          a[b].invalidate();
        }
        if (a = this._invalidateEventListeners) {
          for (b = 0;b < a.length;b++) {
            a[b](this);
          }
        }
      };
      b.prototype.addInvalidateEventListener = function(a) {
        this._invalidateEventListeners || (this._invalidateEventListeners = []);
        l(this._invalidateEventListeners, a);
        this._invalidateEventListeners.push(a);
      };
      b.prototype.getBounds = function(a) {
        void 0 === a && (a = !1);
        return a ? this._bounds.clone() : this._bounds;
      };
      b.prototype.getChildren = function(a) {
        return null;
      };
      b.prototype._propagateFlagsUp = function(a) {
        if (0 !== a && !this.hasFlags(a)) {
          for (var b = 0;b < this._parents.length;b++) {
            this._parents[b]._propagateFlagsUp(a);
          }
        }
      };
      b.prototype.render = function(a, b, d, e, f) {
      };
      return b;
    }(m.Node);
    m.Renderable = t;
    var h = function(a) {
      function b(c, d) {
        a.call(this);
        this.setBounds(c);
        this.render = d;
      }
      __extends(b, a);
      return b;
    }(t);
    m.CustomRenderable = h;
    (function(a) {
      a[a.Idle = 1] = "Idle";
      a[a.Playing = 2] = "Playing";
      a[a.Paused = 3] = "Paused";
      a[a.Ended = 4] = "Ended";
    })(m.RenderableVideoState || (m.RenderableVideoState = {}));
    h = function(a) {
      function b(c, d) {
        a.call(this);
        this._flags = 1048592;
        this._lastPausedTime = this._lastTimeInvalidated = 0;
        this._pauseHappening = this._seekHappening = !1;
        this._isDOMElement = !0;
        this.setBounds(new r(0, 0, 1, 1));
        this._assetId = c;
        this._eventSerializer = d;
        var g = document.createElement("video"), k = this._handleVideoEvent.bind(this);
        g.preload = "metadata";
        g.addEventListener("play", k);
        g.addEventListener("pause", k);
        g.addEventListener("ended", k);
        g.addEventListener("loadeddata", k);
        g.addEventListener("progress", k);
        g.addEventListener("suspend", k);
        g.addEventListener("loadedmetadata", k);
        g.addEventListener("error", k);
        g.addEventListener("seeking", k);
        g.addEventListener("seeked", k);
        g.addEventListener("canplay", k);
        g.style.position = "absolute";
        this._video = g;
        this._videoEventHandler = k;
        b._renderableVideos.push(this);
        "undefined" !== typeof registerInspectorAsset && registerInspectorAsset(-1, -1, this);
        this._state = 1;
      }
      __extends(b, a);
      Object.defineProperty(b.prototype, "video", {get:function() {
        return this._video;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(b.prototype, "state", {get:function() {
        return this._state;
      }, enumerable:!0, configurable:!0});
      b.prototype.play = function() {
        this._state = 2;
        this._video.play();
      };
      b.prototype.pause = function() {
        this._state = 3;
        this._video.pause();
      };
      b.prototype._handleVideoEvent = function(a) {
        var b = null, d = this._video;
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
            this._notifyNetStream(3, b);
            a = 4;
            break;
          case "loadeddata":
            this._pauseHappening = !1;
            this._notifyNetStream(2, b);
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
            b = {videoWidth:d.videoWidth, videoHeight:d.videoHeight, duration:d.duration};
            break;
          case "error":
            a = 11;
            b = {code:d.error.code};
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
        this._notifyNetStream(a, b);
      };
      b.prototype._notifyNetStream = function(a, b) {
        this._eventSerializer.sendVideoPlaybackEvent(this._assetId, a, b);
      };
      b.prototype.processControlRequest = function(a, b) {
        var d = this._video;
        switch(a) {
          case 1:
            d.src = b.url;
            this.play();
            this._notifyNetStream(0, null);
            break;
          case 9:
            d.paused && d.play();
            break;
          case 2:
            d && (b.paused && !d.paused ? (isNaN(b.time) ? this._lastPausedTime = d.currentTime : (0 !== d.seekable.length && (d.currentTime = b.time), this._lastPausedTime = b.time), this.pause()) : !b.paused && d.paused && (this.play(), isNaN(b.time) || this._lastPausedTime === b.time || 0 === d.seekable.length || (d.currentTime = b.time)));
            break;
          case 3:
            d && 0 !== d.seekable.length && (this._seekHappening = !0, d.currentTime = b.time);
            break;
          case 4:
            return d ? d.currentTime : 0;
          case 5:
            return d ? d.duration : 0;
          case 6:
            d && (d.volume = b.volume);
            break;
          case 7:
            if (!d) {
              return 0;
            }
            var e = -1;
            if (d.buffered) {
              for (var f = 0;f < d.buffered.length;f++) {
                e = Math.max(e, d.buffered.end(f));
              }
            } else {
              e = d.duration;
            }
            return Math.round(500 * e);
          case 8:
            return d ? Math.round(500 * d.duration) : 0;
        }
      };
      b.prototype.checkForUpdate = function() {
        this._lastTimeInvalidated !== this._video.currentTime && (this._isDOMElement || this.invalidate());
        this._lastTimeInvalidated = this._video.currentTime;
      };
      b.checkForVideoUpdates = function() {
        for (var a = b._renderableVideos, d = 0;d < a.length;d++) {
          var f = a[d];
          f.willRender() ? (f._video.parentElement || f.invalidate(), f._video.style.zIndex = f.parents[0].depth + "") : f._video.parentElement && f._dispatchEvent(2);
          a[d].checkForUpdate();
        }
      };
      b.prototype.render = function(a, b, d) {
        (b = this._video) && 0 < b.videoWidth && a.drawImage(b, 0, 0, b.videoWidth, b.videoHeight, 0, 0, this._bounds.w, this._bounds.h);
      };
      b._renderableVideos = [];
      return b;
    }(t);
    m.RenderableVideo = h;
    h = function(a) {
      function b(c, d) {
        a.call(this);
        this._flags = 1048592;
        this.properties = {};
        this.setBounds(d);
        c instanceof HTMLCanvasElement ? this._initializeSourceCanvas(c) : this._sourceImage = c;
      }
      __extends(b, a);
      b.FromDataBuffer = function(a, d, f) {
        var g = document.createElement("canvas");
        g.width = f.w;
        g.height = f.h;
        f = new b(g, f);
        f.updateFromDataBuffer(a, d);
        return f;
      };
      b.FromNode = function(a, d, f, g, k) {
        var h = document.createElement("canvas"), p = a.getBounds();
        h.width = p.w;
        h.height = p.h;
        h = new b(h, p);
        h.drawNode(a, d, f, g, k);
        return h;
      };
      b.FromImage = function(a) {
        return new b(a, new r(0, 0, -1, -1));
      };
      b.prototype.updateFromDataBuffer = function(a, b) {
        if (m.imageUpdateOption.value) {
          var d = b.buffer;
          if (4 !== a && 5 !== a && 6 !== a) {
            var e = this._bounds, f = this._imageData;
            f && f.width === e.w && f.height === e.h || (f = this._imageData = this._context.createImageData(e.w, e.h));
            m.imageConvertOption.value && (d = new Int32Array(d), e = new Int32Array(f.data.buffer), g.ColorUtilities.convertImage(a, 3, d, e));
            this._ensureSourceCanvas();
            this._context.putImageData(f, 0, 0);
          }
          this.invalidate();
        }
      };
      b.prototype.readImageData = function(a) {
        a.writeRawBytes(this.imageData.data);
      };
      b.prototype.render = function(a, b, d) {
        this.renderSource ? a.drawImage(this.renderSource, 0, 0) : this._renderFallback(a);
      };
      b.prototype.drawNode = function(a, b, d, e, f) {
        d = m.Canvas2D;
        e = this.getBounds();
        (new d.Canvas2DRenderer(this._canvas, null)).renderNode(a, f || e, b);
      };
      b.prototype.mask = function(a) {
        for (var b = this.imageData, d = new Int32Array(b.data.buffer), e = g.ColorUtilities.getUnpremultiplyTable(), f = 0;f < a.length;f++) {
          var k = a[f];
          if (0 === k) {
            d[f] = 0;
          } else {
            if (255 !== k) {
              var h = d[f], p = h >> 0 & 255, q = h >> 8 & 255, h = h >> 16 & 255, l = k << 8, p = e[l + Math.min(p, k)], q = e[l + Math.min(q, k)], h = e[l + Math.min(h, k)];
              d[f] = k << 24 | h << 16 | q << 8 | p;
            }
          }
        }
        this._context.putImageData(b, 0, 0);
      };
      b.prototype._initializeSourceCanvas = function(a) {
        this._canvas = a;
        this._context = this._canvas.getContext("2d");
      };
      b.prototype._ensureSourceCanvas = function() {
        if (!this._canvas) {
          var a = document.createElement("canvas"), b = this._bounds;
          a.width = b.w;
          a.height = b.h;
          this._initializeSourceCanvas(a);
        }
      };
      Object.defineProperty(b.prototype, "imageData", {get:function() {
        this._canvas || (this._ensureSourceCanvas(), this._context.drawImage(this._sourceImage, 0, 0), this._sourceImage = null);
        return this._context.getImageData(0, 0, this._bounds.w, this._bounds.h);
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(b.prototype, "renderSource", {get:function() {
        return this._canvas || this._sourceImage;
      }, enumerable:!0, configurable:!0});
      b.prototype._renderFallback = function(a) {
      };
      return b;
    }(t);
    m.RenderableBitmap = h;
    (function(a) {
      a[a.Fill = 0] = "Fill";
      a[a.Stroke = 1] = "Stroke";
      a[a.StrokeFill = 2] = "StrokeFill";
    })(m.PathType || (m.PathType = {}));
    var q = function() {
      return function(a, b, c, d) {
        this.type = a;
        this.style = b;
        this.smoothImage = c;
        this.strokeProperties = d;
        this.path = new Path2D;
      };
    }();
    m.StyledPath = q;
    var p = function() {
      return function(a, b, c, d, g) {
        this.thickness = a;
        this.scaleMode = b;
        this.capsStyle = c;
        this.jointsStyle = d;
        this.miterLimit = g;
      };
    }();
    m.StrokeProperties = p;
    var k = function(b) {
      function d(a, e, g, k) {
        b.call(this);
        this._flags = 6291472;
        this.properties = {};
        this.setBounds(k);
        this._id = a;
        this._pathData = e;
        this._textures = g;
        g.length && this.setFlags(1048576);
      }
      __extends(d, b);
      d.prototype.update = function(a, b, d) {
        this.setBounds(d);
        this._pathData = a;
        this._paths = null;
        this._textures = b;
        this.setFlags(1048576);
        this.invalidate();
      };
      d.prototype.render = function(a, b, d, e, f) {
        void 0 === e && (e = null);
        void 0 === f && (f = !1);
        a.fillStyle = a.strokeStyle = "transparent";
        b = this._deserializePaths(this._pathData, a, b);
        for (d = 0;d < b.length;d++) {
          var g = b[d];
          a.mozImageSmoothingEnabled = a.msImageSmoothingEnabled = a.imageSmoothingEnabled = g.smoothImage;
          if (0 === g.type) {
            e ? e.addPath(g.path, a.currentTransform) : (a.fillStyle = f ? "#000000" : g.style, a.fill(g.path, "evenodd"), a.fillStyle = "transparent");
          } else {
            if (!e && !f) {
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
      d.prototype._deserializePaths = function(a, b, f) {
        if (this._paths) {
          return this._paths;
        }
        f = this._paths = [];
        var k = null, h = null, q = 0, l = 0, v, t, m = !1, r = 0, u = 0, w = a.commands, H = a.coordinates, z = a.styles, A = z.position = 0;
        a = a.commandsPosition;
        for (var B = 0;B < a;B++) {
          switch(w[B]) {
            case 9:
              m && k && (k.lineTo(r, u), h && h.lineTo(r, u));
              m = !0;
              q = r = H[A++] / 20;
              l = u = H[A++] / 20;
              k && k.moveTo(q, l);
              h && h.moveTo(q, l);
              break;
            case 10:
              q = H[A++] / 20;
              l = H[A++] / 20;
              k && k.lineTo(q, l);
              h && h.lineTo(q, l);
              break;
            case 11:
              v = H[A++] / 20;
              t = H[A++] / 20;
              q = H[A++] / 20;
              l = H[A++] / 20;
              k && k.quadraticCurveTo(v, t, q, l);
              h && h.quadraticCurveTo(v, t, q, l);
              break;
            case 12:
              v = H[A++] / 20;
              t = H[A++] / 20;
              var D = H[A++] / 20, y = H[A++] / 20, q = H[A++] / 20, l = H[A++] / 20;
              k && k.bezierCurveTo(v, t, D, y, q, l);
              h && h.bezierCurveTo(v, t, D, y, q, l);
              break;
            case 1:
              k = this._createPath(0, g.ColorUtilities.rgbaToCSSStyle(z.readUnsignedInt()), !1, null, q, l);
              break;
            case 3:
              v = this._readBitmap(z, b);
              k = this._createPath(0, v.style, v.smoothImage, null, q, l);
              break;
            case 2:
              k = this._createPath(0, this._readGradient(z, b), !1, null, q, l);
              break;
            case 4:
              k = null;
              break;
            case 5:
              h = g.ColorUtilities.rgbaToCSSStyle(z.readUnsignedInt());
              z.position += 1;
              v = z.readByte();
              t = d.LINE_CAPS_STYLES[z.readByte()];
              D = d.LINE_JOINTS_STYLES[z.readByte()];
              v = new p(H[A++] / 20, v, t, D, z.readByte());
              h = this._createPath(1, h, !1, v, q, l);
              break;
            case 6:
              h = this._createPath(2, this._readGradient(z, b), !1, null, q, l);
              break;
            case 7:
              v = this._readBitmap(z, b);
              h = this._createPath(2, v.style, v.smoothImage, null, q, l);
              break;
            case 8:
              h = null;
          }
        }
        m && k && (k.lineTo(r, u), h && h.lineTo(r, u));
        this._pathData = null;
        return f;
      };
      d.prototype._createPath = function(a, b, d, e, f, g) {
        a = new q(a, b, d, e);
        this._paths.push(a);
        a.path.moveTo(f, g);
        return a.path;
      };
      d.prototype._readMatrix = function(c) {
        return new a(c.readFloat(), c.readFloat(), c.readFloat(), c.readFloat(), c.readFloat(), c.readFloat());
      };
      d.prototype._readGradient = function(a, b) {
        var d = a.readUnsignedByte(), e = 2 * a.readShort() / 255, f = this._readMatrix(a), d = 16 === d ? b.createLinearGradient(-1, 0, 1, 0) : b.createRadialGradient(e, 0, 0, 0, 0, 1);
        d.setTransform && d.setTransform(f.toSVGMatrix());
        f = a.readUnsignedByte();
        for (e = 0;e < f;e++) {
          var k = a.readUnsignedByte() / 255, h = g.ColorUtilities.rgbaToCSSStyle(a.readUnsignedInt());
          d.addColorStop(k, h);
        }
        a.position += 2;
        return d;
      };
      d.prototype._readBitmap = function(a, b) {
        var d = a.readUnsignedInt(), e = this._readMatrix(a), f = a.readBoolean() ? "repeat" : "no-repeat", g = a.readBoolean();
        (d = this._textures[d]) ? (f = b.createPattern(d.renderSource, f), f.setTransform(e.toSVGMatrix())) : f = null;
        return {style:f, smoothImage:g};
      };
      d.prototype._renderFallback = function(a) {
        this.fillStyle || (this.fillStyle = g.ColorStyle.randomStyle());
        var b = this._bounds;
        a.save();
        a.beginPath();
        a.lineWidth = 2;
        a.fillStyle = this.fillStyle;
        a.fillRect(b.x, b.y, b.w, b.h);
        a.restore();
      };
      d.LINE_CAPS_STYLES = ["round", "butt", "square"];
      d.LINE_JOINTS_STYLES = ["round", "bevel", "miter"];
      return d;
    }(t);
    m.RenderableShape = k;
    h = function(d) {
      function e() {
        d.apply(this, arguments);
        this._flags = 7340048;
        this._morphPaths = Object.create(null);
      }
      __extends(e, d);
      e.prototype._deserializePaths = function(a, d, e) {
        if (this._morphPaths[e]) {
          return this._morphPaths[e];
        }
        var f = this._morphPaths[e] = [], h = null, q = null, l = 0, v = 0, t, m, r = !1, w = 0, X = 0, H = a.commands, z = a.coordinates, A = a.morphCoordinates, B = a.styles, D = a.morphStyles;
        B.position = 0;
        var y = D.position = 0;
        a = a.commandsPosition;
        for (var G = 0;G < a;G++) {
          switch(H[G]) {
            case 9:
              r && h && (h.lineTo(w, X), q && q.lineTo(w, X));
              r = !0;
              l = w = u(z[y], A[y++], e) / 20;
              v = X = u(z[y], A[y++], e) / 20;
              h && h.moveTo(l, v);
              q && q.moveTo(l, v);
              break;
            case 10:
              l = u(z[y], A[y++], e) / 20;
              v = u(z[y], A[y++], e) / 20;
              h && h.lineTo(l, v);
              q && q.lineTo(l, v);
              break;
            case 11:
              t = u(z[y], A[y++], e) / 20;
              m = u(z[y], A[y++], e) / 20;
              l = u(z[y], A[y++], e) / 20;
              v = u(z[y], A[y++], e) / 20;
              h && h.quadraticCurveTo(t, m, l, v);
              q && q.quadraticCurveTo(t, m, l, v);
              break;
            case 12:
              t = u(z[y], A[y++], e) / 20;
              m = u(z[y], A[y++], e) / 20;
              var C = u(z[y], A[y++], e) / 20, E = u(z[y], A[y++], e) / 20, l = u(z[y], A[y++], e) / 20, v = u(z[y], A[y++], e) / 20;
              h && h.bezierCurveTo(t, m, C, E, l, v);
              q && q.bezierCurveTo(t, m, C, E, l, v);
              break;
            case 1:
              h = this._createMorphPath(0, e, g.ColorUtilities.rgbaToCSSStyle(b(B.readUnsignedInt(), D.readUnsignedInt(), e)), !1, null, l, v);
              break;
            case 3:
              t = this._readMorphBitmap(B, D, e, d);
              h = this._createMorphPath(0, e, t.style, t.smoothImage, null, l, v);
              break;
            case 2:
              t = this._readMorphGradient(B, D, e, d);
              h = this._createMorphPath(0, e, t, !1, null, l, v);
              break;
            case 4:
              h = null;
              break;
            case 5:
              t = u(z[y], A[y++], e) / 20;
              q = g.ColorUtilities.rgbaToCSSStyle(b(B.readUnsignedInt(), D.readUnsignedInt(), e));
              B.position += 1;
              m = B.readByte();
              C = k.LINE_CAPS_STYLES[B.readByte()];
              E = k.LINE_JOINTS_STYLES[B.readByte()];
              t = new p(t, m, C, E, B.readByte());
              q = this._createMorphPath(1, e, q, !1, t, l, v);
              break;
            case 6:
              t = this._readMorphGradient(B, D, e, d);
              q = this._createMorphPath(2, e, t, !1, null, l, v);
              break;
            case 7:
              t = this._readMorphBitmap(B, D, e, d);
              q = this._createMorphPath(2, e, t.style, t.smoothImage, null, l, v);
              break;
            case 8:
              q = null;
          }
        }
        r && h && (h.lineTo(w, X), q && q.lineTo(w, X));
        return f;
      };
      e.prototype._createMorphPath = function(a, b, d, e, f, g, k) {
        a = new q(a, d, e, f);
        this._morphPaths[b].push(a);
        a.path.moveTo(g, k);
        return a.path;
      };
      e.prototype._readMorphMatrix = function(b, d, e) {
        return new a(u(b.readFloat(), d.readFloat(), e), u(b.readFloat(), d.readFloat(), e), u(b.readFloat(), d.readFloat(), e), u(b.readFloat(), d.readFloat(), e), u(b.readFloat(), d.readFloat(), e), u(b.readFloat(), d.readFloat(), e));
      };
      e.prototype._readMorphGradient = function(a, d, e, f) {
        var k = a.readUnsignedByte(), h = 2 * a.readShort() / 255, p = this._readMorphMatrix(a, d, e);
        f = 16 === k ? f.createLinearGradient(-1, 0, 1, 0) : f.createRadialGradient(h, 0, 0, 0, 0, 1);
        f.setTransform && f.setTransform(p.toSVGMatrix());
        p = a.readUnsignedByte();
        for (k = 0;k < p;k++) {
          var h = u(a.readUnsignedByte() / 255, d.readUnsignedByte() / 255, e), q = b(a.readUnsignedInt(), d.readUnsignedInt(), e), q = g.ColorUtilities.rgbaToCSSStyle(q);
          f.addColorStop(h, q);
        }
        a.position += 2;
        return f;
      };
      e.prototype._readMorphBitmap = function(a, b, d, e) {
        var f = a.readUnsignedInt();
        b = this._readMorphMatrix(a, b, d);
        d = a.readBoolean() ? "repeat" : "no-repeat";
        a = a.readBoolean();
        e = e.createPattern(this._textures[f]._canvas, d);
        e.setTransform(b.toSVGMatrix());
        return {style:e, smoothImage:a};
      };
      return e;
    }(k);
    m.RenderableMorphShape = h;
    var v = function() {
      function a() {
        this.align = this.leading = this.descent = this.ascent = this.width = this.y = this.x = 0;
        this.runs = [];
      }
      a._getMeasureContext = function() {
        a._measureContext || (a._measureContext = document.createElement("canvas").getContext("2d"));
        return a._measureContext;
      };
      a.prototype.addRun = function(b, c, g, k) {
        if (g) {
          var h = a._getMeasureContext();
          h.font = b;
          h = h.measureText(g).width | 0;
          this.runs.push(new d(b, c, g, h, k));
          this.width += h;
        }
      };
      a.prototype.wrap = function(b) {
        var c = [this], g = this.runs, k = this;
        k.width = 0;
        k.runs = [];
        for (var h = a._getMeasureContext(), p = 0;p < g.length;p++) {
          var q = g[p], l = q.text;
          q.text = "";
          q.width = 0;
          h.font = q.font;
          for (var v = b, t = l.split(/[\s.-]/), m = 0, r = 0;r < t.length;r++) {
            var u = t[r], w = l.substr(m, u.length + 1), H = h.measureText(w).width | 0;
            if (H > v) {
              do {
                if (q.text && (k.runs.push(q), k.width += q.width, q = new d(q.font, q.fillStyle, "", 0, q.underline), v = new a, v.y = k.y + k.descent + k.leading + k.ascent | 0, v.ascent = k.ascent, v.descent = k.descent, v.leading = k.leading, v.align = k.align, c.push(v), k = v), v = b - H, 0 > v) {
                  for (var z = w.length, A = w;1 < z && !(z--, A = w.substr(0, z), H = h.measureText(A).width | 0, H <= b);) {
                  }
                  q.text = A;
                  q.width = H;
                  w = w.substr(z);
                  H = h.measureText(w).width | 0;
                }
              } while (w && 0 > v);
            } else {
              v -= H;
            }
            q.text += w;
            q.width += H;
            m += u.length + 1;
          }
          k.runs.push(q);
          k.width += q.width;
        }
        return c;
      };
      a.prototype.toString = function() {
        return "TextLine {x: " + this.x + ", y: " + this.y + ", width: " + this.width + ", height: " + (this.ascent + this.descent + this.leading) + "}";
      };
      return a;
    }();
    m.TextLine = v;
    var d = function() {
      return function(a, b, c, d, g) {
        void 0 === a && (a = "");
        void 0 === b && (b = "");
        void 0 === c && (c = "");
        void 0 === d && (d = 0);
        void 0 === g && (g = !1);
        this.font = a;
        this.fillStyle = b;
        this.text = c;
        this.width = d;
        this.underline = g;
      };
    }();
    m.TextRun = d;
    h = function(b) {
      function d(c) {
        b.call(this);
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
      __extends(d, b);
      d.prototype.setBounds = function(a) {
        b.prototype.setBounds.call(this, a);
        this._textBounds.set(a);
        this.textRect.setElements(a.x + 2, a.y + 2, a.w - 2, a.h - 2);
      };
      d.prototype.setContent = function(a, b, d, e) {
        this._textRunData = b;
        this._plainText = a;
        this._matrix.set(d);
        this._coords = e;
        this.lines = [];
      };
      d.prototype.setStyle = function(a, b, d, e) {
        this._backgroundColor = a;
        this._borderColor = b;
        this._scrollV = d;
        this._scrollH = e;
      };
      d.prototype.reflow = function(a, b) {
        var d = this._textRunData;
        if (d) {
          for (var e = this._bounds, f = e.w - 4, k = this._plainText, h = this.lines, p = new v, q = 0, l = 0, t = 0, m = 0, r = 0, u = -1;d.position < d.length;) {
            var w = d.readInt(), A = d.readInt(), B = d.readInt(), D = d.readUTF(), y = d.readInt(), G = d.readInt(), C = d.readInt();
            y > t && (t = y);
            G > m && (m = G);
            C > r && (r = C);
            y = d.readBoolean();
            G = "";
            d.readBoolean() && (G += "italic ");
            y && (G += "bold ");
            B = G + B + "px " + D;
            D = d.readInt();
            D = g.ColorUtilities.rgbToHex(D);
            y = d.readInt();
            -1 === u && (u = y);
            d.readBoolean();
            d.readInt();
            d.readInt();
            d.readInt();
            d.readInt();
            d.readInt();
            for (var y = d.readBoolean(), E = "", G = !1;!G;w++) {
              G = w >= A - 1;
              C = k[w];
              if ("\r" !== C && "\n" !== C && (E += C, w < k.length - 1)) {
                continue;
              }
              p.addRun(B, D, E, y);
              if (p.runs.length) {
                h.length && (q += r);
                q += t;
                p.y = q | 0;
                q += m;
                p.ascent = t;
                p.descent = m;
                p.leading = r;
                p.align = u;
                if (b && p.width > f) {
                  for (p = p.wrap(f), E = 0;E < p.length;E++) {
                    var I = p[E], q = I.y + I.descent + I.leading;
                    h.push(I);
                    I.width > l && (l = I.width);
                  }
                } else {
                  h.push(p), p.width > l && (l = p.width);
                }
                p = new v;
              } else {
                q += t + m + r;
              }
              E = "";
              if (G) {
                r = m = t = 0;
                u = -1;
                break;
              }
              "\r" === C && "\n" === k[w + 1] && w++;
            }
            p.addRun(B, D, E, y);
          }
          d = k[k.length - 1];
          "\r" !== d && "\n" !== d || h.push(p);
          d = this.textRect;
          d.w = l;
          d.h = q;
          if (a) {
            if (!b) {
              f = l;
              l = e.w;
              switch(a) {
                case 1:
                  d.x = l - (f + 4) >> 1;
                  break;
                case 3:
                  d.x = l - (f + 4);
              }
              this._textBounds.setElements(d.x - 2, d.y - 2, d.w + 4, d.h + 4);
              e.w = f + 4;
            }
            e.x = d.x - 2;
            e.h = q + 4;
          } else {
            this._textBounds = e;
          }
          for (w = 0;w < h.length;w++) {
            if (e = h[w], e.width < f) {
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
      d.roundBoundPoints = function(a) {
        for (var b = 0;b < a.length;b++) {
          var d = a[b];
          d.x = Math.floor(d.x + .1) + .5;
          d.y = Math.floor(d.y + .1) + .5;
        }
      };
      d.prototype.render = function(b) {
        b.save();
        var f = this._textBounds;
        this._backgroundColor && (b.fillStyle = g.ColorUtilities.rgbaToCSSStyle(this._backgroundColor), b.fillRect(f.x, f.y, f.w, f.h));
        if (this._borderColor) {
          b.strokeStyle = g.ColorUtilities.rgbaToCSSStyle(this._borderColor);
          b.lineCap = "square";
          b.lineWidth = 1;
          var k = d.absoluteBoundPoints, h = b.currentTransform;
          h ? (f = f.clone(), (new a(h.a, h.b, h.c, h.d, h.e, h.f)).transformRectangle(f, k), b.setTransform(1, 0, 0, 1, 0, 0)) : (k[0].x = f.x, k[0].y = f.y, k[1].x = f.x + f.w, k[1].y = f.y, k[2].x = f.x + f.w, k[2].y = f.y + f.h, k[3].x = f.x, k[3].y = f.y + f.h);
          d.roundBoundPoints(k);
          f = new Path2D;
          f.moveTo(k[0].x, k[0].y);
          f.lineTo(k[1].x, k[1].y);
          f.lineTo(k[2].x, k[2].y);
          f.lineTo(k[3].x, k[3].y);
          f.lineTo(k[0].x, k[0].y);
          b.stroke(f);
          h && b.setTransform(h.a, h.b, h.c, h.d, h.e, h.f);
        }
        this._coords ? this._renderChars(b) : this._renderLines(b);
        b.restore();
      };
      d.prototype._renderChars = function(a) {
        if (this._matrix) {
          var b = this._matrix;
          a.transform(b.a, b.b, b.c, b.d, b.tx, b.ty);
        }
        var b = this.lines, d = this._coords;
        d.position = 0;
        for (var e = "", f = "", g = 0;g < b.length;g++) {
          for (var k = b[g].runs, h = 0;h < k.length;h++) {
            var p = k[h];
            p.font !== e && (a.font = e = p.font);
            p.fillStyle !== f && (a.fillStyle = f = p.fillStyle);
            for (var p = p.text, q = 0;q < p.length;q++) {
              var l = d.readInt() / 20, v = d.readInt() / 20;
              a.fillText(p[q], l, v);
            }
          }
        }
      };
      d.prototype._renderLines = function(a) {
        var b = this._textBounds;
        a.beginPath();
        a.rect(b.x + 2, b.y + 2, b.w - 4, b.h - 4);
        a.clip();
        a.translate(b.x - this._scrollH + 2, b.y + 2);
        var d = this.lines, e = this._scrollV, f = 0, g = "", k = "";
        a.textAlign = "left";
        a.textBaseline = "alphabetic";
        for (var h = 0;h < d.length;h++) {
          var p = d[h], q = p.x, l = p.y;
          if (h + 1 < e) {
            f = l + p.descent + p.leading;
          } else {
            l -= f;
            if (h + 1 - e && l > b.h) {
              break;
            }
            for (var v = p.runs, t = 0;t < v.length;t++) {
              var m = v[t];
              m.font !== g && (a.font = g = m.font);
              m.fillStyle !== k && (a.fillStyle = k = m.fillStyle);
              m.underline && a.fillRect(q, l + p.descent / 2 | 0, m.width, 1);
              a.fillText(m.text, q, l);
              q += m.width;
            }
          }
        }
      };
      d.absoluteBoundPoints = [new w(0, 0), new w(0, 0), new w(0, 0), new w(0, 0)];
      return d;
    }(t);
    m.RenderableText = h;
    t = function(a) {
      function b(c, d) {
        a.call(this);
        this._flags = 3145728;
        this.properties = {};
        this.setBounds(new r(0, 0, c, d));
      }
      __extends(b, a);
      Object.defineProperty(b.prototype, "text", {get:function() {
        return this._text;
      }, set:function(a) {
        this._text = a;
      }, enumerable:!0, configurable:!0});
      b.prototype.render = function(a, b, d) {
        a.save();
        a.textBaseline = "top";
        a.fillStyle = "white";
        a.fillText(this.text, 0, 0);
        a.restore();
      };
      return b;
    }(t);
    m.Label = t;
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(m) {
    function u(a, b, g, q, p) {
      b = r[b - 1];
      p && (p = b / 4, g -= p, q -= p);
      p = Math.ceil((1 > g ? 1 : g) / (b - 1E-9));
      b = Math.ceil((1 > q ? 1 : q) / (b - 1E-9));
      a.x -= p;
      a.w += 2 * p;
      a.y -= b;
      a.h += 2 * b;
    }
    var b = g.ColorUtilities.clampByte, w = function() {
      function a() {
      }
      a.prototype.expandBounds = function(a) {
      };
      return a;
    }();
    m.Filter = w;
    var r = [2, 1 / 1.05, 1 / 1.35, 1 / 1.55, 1 / 1.75, 1 / 1.9, .5, 1 / 2.1, 1 / 2.2, 1 / 2.3, .4, 1 / 3, 1 / 3, 1 / 3.5, 1 / 3.5], a = function(a) {
      function b(g, q, p) {
        a.call(this);
        this.blurX = g;
        this.blurY = q;
        this.quality = p;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        u(a, this.quality, this.blurX, this.blurY, !0);
      };
      return b;
    }(w);
    m.BlurFilter = a;
    a = function(a) {
      function b(g, q, p, k, v, d, f, e, c, n, t) {
        a.call(this);
        this.alpha = g;
        this.angle = q;
        this.blurX = p;
        this.blurY = k;
        this.color = v;
        this.distance = d;
        this.hideObject = f;
        this.inner = e;
        this.knockout = c;
        this.quality = n;
        this.strength = t;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        if (!this.inner && (u(a, this.quality, this.blurX, this.blurY, !1), this.distance)) {
          var b = this.angle * Math.PI / 180, g = Math.cos(b) * this.distance, k = Math.sin(b) * this.distance, b = a.x + (0 <= g ? 0 : Math.floor(g)), g = a.x + a.w + Math.ceil(Math.abs(g)), l = a.y + (0 <= k ? 0 : Math.floor(k)), k = a.y + a.h + Math.ceil(Math.abs(k));
          a.x = b;
          a.w = g - b;
          a.y = l;
          a.h = k - l;
        }
      };
      return b;
    }(w);
    m.DropshadowFilter = a;
    a = function(a) {
      function b(g, q, p, k, v, d, f, e) {
        a.call(this);
        this.alpha = g;
        this.blurX = q;
        this.blurY = p;
        this.color = k;
        this.inner = v;
        this.knockout = d;
        this.quality = f;
        this.strength = e;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        this.inner || u(a, this.quality, this.blurX, this.blurY, !1);
      };
      return b;
    }(w);
    m.GlowFilter = a;
    (function(a) {
      a[a.Unknown = 0] = "Unknown";
      a[a.Identity = 1] = "Identity";
    })(m.ColorMatrixType || (m.ColorMatrixType = {}));
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
        for (var c = this._data, n = 0;n < c.length;n++) {
          c[n] = 0;
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
        var g = a >> 24 & 255, p = a >> 16 & 255, k = a >> 8 & 255, l = a & 255, d = this._data;
        a = b(g * d[0] + p * d[1] + k * d[2] + l * d[3] + 255 * d[16]);
        var f = b(g * d[4] + p * d[5] + k * d[6] + l * d[7] + 255 * d[17]), e = b(g * d[8] + p * d[9] + k * d[10] + l * d[11] + 255 * d[18]), g = b(g * d[12] + p * d[13] + k * d[14] + l * d[15] + 255 * d[19]);
        return a << 24 | f << 16 | e << 8 | g;
      };
      g.prototype.multiply = function(a) {
        if (!(a._type & 1)) {
          var b = this._data, g = a._data;
          a = b[0];
          var k = b[1], l = b[2], d = b[3], f = b[4], e = b[5], c = b[6], n = b[7], m = b[8], t = b[9], r = b[10], u = b[11], w = b[12], K = b[13], V = b[14], Z = b[15], ia = b[16], ja = b[17], X = b[18], H = b[19], z = g[0], A = g[1], B = g[2], D = g[3], y = g[4], G = g[5], C = g[6], E = g[7], I = g[8], L = g[9], M = g[10], N = g[11], O = g[12], P = g[13], Q = g[14], R = g[15], S = g[16], T = g[17], U = g[18], g = g[19];
          b[0] = a * z + f * A + m * B + w * D;
          b[1] = k * z + e * A + t * B + K * D;
          b[2] = l * z + c * A + r * B + V * D;
          b[3] = d * z + n * A + u * B + Z * D;
          b[4] = a * y + f * G + m * C + w * E;
          b[5] = k * y + e * G + t * C + K * E;
          b[6] = l * y + c * G + r * C + V * E;
          b[7] = d * y + n * G + u * C + Z * E;
          b[8] = a * I + f * L + m * M + w * N;
          b[9] = k * I + e * L + t * M + K * N;
          b[10] = l * I + c * L + r * M + V * N;
          b[11] = d * I + n * L + u * M + Z * N;
          b[12] = a * O + f * P + m * Q + w * R;
          b[13] = k * O + e * P + t * Q + K * R;
          b[14] = l * O + c * P + r * Q + V * R;
          b[15] = d * O + n * P + u * Q + Z * R;
          b[16] = a * S + f * T + m * U + w * g + ia;
          b[17] = k * S + e * T + t * U + K * g + ja;
          b[18] = l * S + c * T + r * U + V * g + X;
          b[19] = d * S + n * T + u * U + Z * g + H;
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
    m.ColorMatrix = w;
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(m) {
    (function(u) {
      function b(a, b) {
        return -1 !== a.indexOf(b, this.length - b.length);
      }
      var w = m.Geometry.Point3D, r = m.Geometry.Matrix3D, a = m.Geometry.degreesToRadian, l = g.Debug.unexpected, t = g.Debug.notImplemented;
      u.SHADER_ROOT = "shaders/";
      var h = function() {
        function h(a, b) {
          this._fillColor = g.Color.Red;
          this._surfaceRegionCache = new g.LRUList;
          this.modelViewProjectionMatrix = r.createIdentity();
          this._canvas = a;
          this._options = b;
          this.gl = a.getContext("experimental-webgl", {preserveDrawingBuffer:!1, antialias:!0, stencil:!0, premultipliedAlpha:!1});
          this._programCache = Object.create(null);
          this._resize();
          this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, b.unpackPremultiplyAlpha ? this.gl.ONE : this.gl.ZERO);
          this._backgroundColor = g.Color.Black;
          this._geometry = new u.WebGLGeometry(this);
          this._tmpVertices = u.Vertex.createEmptyVertices(u.Vertex, 64);
          this._maxSurfaces = b.maxSurfaces;
          this._maxSurfaceSize = b.maxSurfaceSize;
          this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
          this.gl.enable(this.gl.BLEND);
          this.modelViewProjectionMatrix = r.create2DProjection(this._w, this._h, 2E3);
          var l = this;
          this._surfaceRegionAllocator = new m.SurfaceRegionAllocator.SimpleAllocator(function() {
            var a = l._createTexture();
            return new u.WebGLSurface(1024, 1024, a);
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
          return r.create2DProjection(this._w, this._h, -this._w);
        };
        h.prototype.createPerspectiveMatrix = function(b, g, h) {
          h = a(h);
          g = r.createPerspective(a(g));
          var d = new w(0, 1, 0), f = new w(0, 0, 0);
          b = new w(0, 0, b);
          b = r.createCameraLookAt(b, f, d);
          b = r.createInverse(b);
          d = r.createIdentity();
          d = r.createMultiply(d, r.createTranslation(-this._w / 2, -this._h / 2));
          d = r.createMultiply(d, r.createScale(1 / this._w, -1 / this._h, .01));
          d = r.createMultiply(d, r.createYRotation(h));
          d = r.createMultiply(d, b);
          return d = r.createMultiply(d, g);
        };
        h.prototype.discardCachedImages = function() {
          2 <= m.traceLevel && m.writer && m.writer.writeLn("Discard Cache");
          for (var a = this._surfaceRegionCache.count / 2 | 0, b = 0;b < a;b++) {
            var g = this._surfaceRegionCache.pop();
            2 <= m.traceLevel && m.writer && m.writer.writeLn("Discard: " + g);
            g.texture.atlas.remove(g.region);
            g.texture = null;
          }
        };
        h.prototype.cacheImage = function(a) {
          var b = this.allocateSurfaceRegion(a.width, a.height);
          2 <= m.traceLevel && m.writer && m.writer.writeLn("Uploading Image: @ " + b.region);
          this._surfaceRegionCache.use(b);
          this.updateSurfaceRegion(a, b);
          return b;
        };
        h.prototype.allocateSurfaceRegion = function(a, b) {
          return this._surfaceRegionAllocator.allocate(a, b, null);
        };
        h.prototype.updateSurfaceRegion = function(a, b) {
          var g = this.gl;
          g.bindTexture(g.TEXTURE_2D, b.surface.texture);
          g.texSubImage2D(g.TEXTURE_2D, 0, b.region.x, b.region.y, g.RGBA, g.UNSIGNED_BYTE, a);
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
          var g = u.SHADER_ROOT + a, h = this.gl;
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
        h.prototype.createProgramFromFiles = function() {
          var a = this._programCache["combined.vert-combined.frag"];
          a || (a = this._createProgram([this._createShaderFromFile("combined.vert"), this._createShaderFromFile("combined.frag")]), this._queryProgramAttributesAndUniforms(a), this._initializeProgram(a), this._programCache["combined.vert-combined.frag"] = a);
          return a;
        };
        h.prototype._createProgram = function(a) {
          var b = this.gl, g = b.createProgram();
          a.forEach(function(a) {
            b.attachShader(g, a);
          });
          b.linkProgram(g);
          b.getProgramParameter(g, b.LINK_STATUS) || (l("Cannot link program: " + b.getProgramInfoLog(g)), b.deleteProgram(g));
          return g;
        };
        h.prototype._createShader = function(a, b) {
          var g = this.gl, d = g.createShader(a);
          g.shaderSource(d, b);
          g.compileShader(d);
          return g.getShaderParameter(d, g.COMPILE_STATUS) ? d : (l("Cannot compile shader: " + g.getShaderInfoLog(d)), g.deleteShader(d), null);
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
          var b = this.gl, g = b.createFramebuffer();
          b.bindFramebuffer(b.FRAMEBUFFER, g);
          b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, a, 0);
          b.bindFramebuffer(b.FRAMEBUFFER, null);
          return g;
        };
        h.prototype._queryProgramAttributesAndUniforms = function(a) {
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
      u.WebGLContext = h;
    })(m.WebGL || (m.WebGL = {}));
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(g, m) {
  function u() {
    this.constructor = g;
  }
  for (var b in m) {
    m.hasOwnProperty(b) && (g[b] = m[b]);
  }
  u.prototype = m.prototype;
  g.prototype = new u;
};
(function(g) {
  (function(m) {
    (function(u) {
      var b = g.Debug.assert, w = function(a) {
        function g() {
          a.apply(this, arguments);
        }
        __extends(g, a);
        g.prototype.ensureVertexCapacity = function(a) {
          b(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 8 * a);
        };
        g.prototype.writeVertex = function(a, g) {
          b(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 8);
          this.writeVertexUnsafe(a, g);
        };
        g.prototype.writeVertexUnsafe = function(a, b) {
          var g = this._offset >> 2;
          this._f32[g] = a;
          this._f32[g + 1] = b;
          this._offset += 8;
        };
        g.prototype.writeVertex3D = function(a, g, l) {
          b(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 12);
          this.writeVertex3DUnsafe(a, g, l);
        };
        g.prototype.writeVertex3DUnsafe = function(a, b, g) {
          var l = this._offset >> 2;
          this._f32[l] = a;
          this._f32[l + 1] = b;
          this._f32[l + 2] = g;
          this._offset += 12;
        };
        g.prototype.writeTriangleElements = function(a, g, l) {
          b(0 === (this._offset & 1));
          this.ensureCapacity(this._offset + 6);
          var p = this._offset >> 1;
          this._u16[p] = a;
          this._u16[p + 1] = g;
          this._u16[p + 2] = l;
          this._offset += 6;
        };
        g.prototype.ensureColorCapacity = function(a) {
          b(0 === (this._offset & 2));
          this.ensureCapacity(this._offset + 16 * a);
        };
        g.prototype.writeColorFloats = function(a, g, l, p) {
          b(0 === (this._offset & 2));
          this.ensureCapacity(this._offset + 16);
          this.writeColorFloatsUnsafe(a, g, l, p);
        };
        g.prototype.writeColorFloatsUnsafe = function(a, b, g, l) {
          var k = this._offset >> 2;
          this._f32[k] = a;
          this._f32[k + 1] = b;
          this._f32[k + 2] = g;
          this._f32[k + 3] = l;
          this._offset += 16;
        };
        g.prototype.writeColor = function() {
          var a = Math.random(), g = Math.random(), l = Math.random(), p = Math.random() / 2;
          b(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 4);
          this._i32[this._offset >> 2] = p << 24 | l << 16 | g << 8 | a;
          this._offset += 4;
        };
        g.prototype.writeColorUnsafe = function(a, b, g, l) {
          this._i32[this._offset >> 2] = l << 24 | g << 16 | b << 8 | a;
          this._offset += 4;
        };
        g.prototype.writeRandomColor = function() {
          this.writeColor();
        };
        return g;
      }(g.ArrayUtilities.ArrayWriter);
      u.BufferWriter = w;
      u.WebGLAttribute = function() {
        return function(a, b, g, h) {
          void 0 === h && (h = !1);
          this.name = a;
          this.size = b;
          this.type = g;
          this.normalized = h;
        };
      }();
      var r = function() {
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
      u.WebGLAttributeList = r;
      r = function() {
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
      u.WebGLGeometry = r;
      r = function(a) {
        function b(g, h, l) {
          a.call(this, g, h, l);
        }
        __extends(b, a);
        b.createEmptyVertices = function(a, b) {
          for (var g = [], l = 0;l < b;l++) {
            g.push(new a(0, 0, 0));
          }
          return g;
        };
        return b;
      }(m.Geometry.Point3D);
      u.Vertex = r;
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
      })(u.WebGLBlendFactor || (u.WebGLBlendFactor = {}));
    })(m.WebGL || (m.WebGL = {}));
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(g) {
    (function(u) {
      var b = function() {
        function b(a, l, r) {
          this.texture = r;
          this.w = a;
          this.h = l;
          this._regionAllocator = new g.RegionAllocator.CompactAllocator(this.w, this.h);
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
      u.WebGLSurface = b;
      var w = function() {
        return function(b, a) {
          this.surface = b;
          this.region = a;
          this.next = this.previous = null;
        };
      }();
      u.WebGLSurfaceRegion = w;
    })(g.WebGL || (g.WebGL = {}));
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(m) {
    (function(u) {
      var b = g.Color;
      u.TILE_SIZE = 256;
      u.MIN_UNTILED_SIZE = 256;
      var w = m.Geometry.Matrix, r = m.Geometry.Rectangle, a = function(a) {
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
      }(m.RendererOptions);
      u.WebGLRendererOptions = a;
      var l = function(g) {
        function h(b, h, k) {
          void 0 === k && (k = new a);
          g.call(this, b, h, k);
          this._tmpVertices = u.Vertex.createEmptyVertices(u.Vertex, 64);
          this._cachedTiles = [];
          b = this._context = new u.WebGLContext(this._canvas, k);
          this._updateSize();
          this._brush = new u.WebGLCombinedBrush(b, new u.WebGLGeometry(b));
          this._stencilBrush = new u.WebGLCombinedBrush(b, new u.WebGLGeometry(b));
          this._scratchCanvas = document.createElement("canvas");
          this._scratchCanvas.width = this._scratchCanvas.height = 2048;
          this._scratchCanvasContext = this._scratchCanvas.getContext("2d", {willReadFrequently:!0});
          this._dynamicScratchCanvas = document.createElement("canvas");
          this._dynamicScratchCanvas.width = this._dynamicScratchCanvas.height = 0;
          this._dynamicScratchCanvasContext = this._dynamicScratchCanvas.getContext("2d", {willReadFrequently:!0});
          this._uploadCanvas = document.createElement("canvas");
          this._uploadCanvas.width = this._uploadCanvas.height = 0;
          this._uploadCanvasContext = this._uploadCanvas.getContext("2d", {willReadFrequently:!0});
          k.showTemporaryCanvases && (document.getElementById("temporaryCanvasPanelContainer").appendChild(this._uploadCanvas), document.getElementById("temporaryCanvasPanelContainer").appendChild(this._scratchCanvas));
          this._clipStack = [];
        }
        __extends(h, g);
        h.prototype.resize = function() {
          this._updateSize();
          this.render();
        };
        h.prototype._updateSize = function() {
          this._viewport = new r(0, 0, this._canvas.width, this._canvas.height);
          this._context._resize();
        };
        h.prototype._cacheImageCallback = function(a, b, g) {
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
        h.prototype._enterClip = function(a, b, g, h) {
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
        h.prototype._leaveClip = function(a, b, g, h) {
          g.flush();
          b = this._context.gl;
          if (a = this._clipStack.pop()) {
            b.colorMask(!1, !1, !1, !1), b.stencilOp(b.KEEP, b.KEEP, b.DECR), g.flush(), b.colorMask(!0, !0, !0, !0), b.stencilFunc(b.NOTEQUAL, 0, this._clipStack.length), b.stencilOp(b.KEEP, b.KEEP, b.KEEP);
          }
          0 === this._clipStack.length && b.disable(b.STENCIL_TEST);
        };
        h.prototype._renderFrame = function(a, b, g, h) {
        };
        h.prototype._renderSurfaces = function(a) {
          var g = this._options, k = this._context, h = this._viewport;
          if (g.drawSurfaces) {
            var d = k.surfaces, k = w.createIdentity();
            if (0 <= g.drawSurface && g.drawSurface < d.length) {
              for (var g = d[g.drawSurface | 0], d = new r(0, 0, g.w, g.h), f = d.clone();f.w > h.w;) {
                f.scale(.5, .5);
              }
              a.drawImage(new u.WebGLSurfaceRegion(g, d), f, b.White, null, k, .2);
            } else {
              f = h.w / 5;
              f > h.h / d.length && (f = h.h / d.length);
              a.fillRectangle(new r(h.w - f, 0, f, h.h), new b(0, 0, 0, .5), k, .1);
              for (var e = 0;e < d.length;e++) {
                var g = d[e], c = new r(h.w - f, e * f, f, f);
                a.drawImage(new u.WebGLSurfaceRegion(g, new r(0, 0, g.w, g.h)), c, b.White, null, k, .2);
              }
            }
            a.flush();
          }
        };
        h.prototype.render = function() {
          var a = this._options, g = this._context.gl;
          this._context.modelViewProjectionMatrix = a.perspectiveCamera ? this._context.createPerspectiveMatrix(a.perspectiveCameraDistance + (a.animateZoom ? .8 * Math.sin(Date.now() / 3E3) : 0), a.perspectiveCameraFOV, a.perspectiveCameraAngle) : this._context.create2DProjectionMatrix();
          var k = this._brush;
          g.clearColor(0, 0, 0, 0);
          g.clear(g.COLOR_BUFFER_BIT | g.DEPTH_BUFFER_BIT);
          k.reset();
          g = this._viewport;
          k.flush();
          a.paintViewport && (k.fillRectangle(g, new b(.5, 0, 0, .25), w.createIdentity(), 0), k.flush());
          this._renderSurfaces(k);
        };
        return h;
      }(m.Renderer);
      u.WebGLRenderer = l;
    })(m.WebGL || (m.WebGL = {}));
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(m) {
    (function(u) {
      var b = g.Color, w = m.Geometry.Point, r = m.Geometry.Matrix3D, a = function() {
        function a(b, g, l) {
          this._target = l;
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
      u.WebGLBrush = a;
      (function(a) {
        a[a.FillColor = 0] = "FillColor";
        a[a.FillTexture = 1] = "FillTexture";
        a[a.FillTextureWithColorMatrix = 2] = "FillTextureWithColorMatrix";
      })(u.WebGLCombinedBrushKind || (u.WebGLCombinedBrushKind = {}));
      var l = function(a) {
        function g(h, l, k) {
          a.call(this, h, l, k);
          this.kind = 0;
          this.color = new b(0, 0, 0, 0);
          this.sampler = 0;
          this.coordinate = new w(0, 0);
        }
        __extends(g, a);
        g.initializeAttributeList = function(a) {
          var b = a.gl;
          g.attributeList || (g.attributeList = new u.WebGLAttributeList([new u.WebGLAttribute("aPosition", 3, b.FLOAT), new u.WebGLAttribute("aCoordinate", 2, b.FLOAT), new u.WebGLAttribute("aColor", 4, b.UNSIGNED_BYTE, !0), new u.WebGLAttribute("aKind", 1, b.FLOAT), new u.WebGLAttribute("aSampler", 1, b.FLOAT)]), g.attributeList.initialize(a));
        };
        g.prototype.writeTo = function(a) {
          a = a.array;
          a.ensureAdditionalCapacity();
          a.writeVertex3DUnsafe(this.x, this.y, this.z);
          a.writeVertexUnsafe(this.coordinate.x, this.coordinate.y);
          a.writeColorUnsafe(255 * this.color.r, 255 * this.color.g, 255 * this.color.b, 255 * this.color.a);
          a.writeFloatUnsafe(this.kind);
          a.writeFloatUnsafe(this.sampler);
        };
        return g;
      }(u.Vertex);
      u.WebGLCombinedBrushVertex = l;
      a = function(a) {
        function b(g, h, k) {
          void 0 === k && (k = null);
          a.call(this, g, h, k);
          this._blendMode = 1;
          this._program = g.createProgramFromFiles();
          this._surfaces = [];
          l.initializeAttributeList(this._context);
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
          var c = b._tmpVertices, n = a.region.clone();
          n.offset(1, 1).resize(-2, -2);
          n.scale(1 / a.surface.w, 1 / a.surface.h);
          d.transformRectangle(g, c);
          for (a = 0;4 > a;a++) {
            c[a].z = f;
          }
          c[0].coordinate.x = n.x;
          c[0].coordinate.y = n.y;
          c[1].coordinate.x = n.x + n.w;
          c[1].coordinate.y = n.y;
          c[2].coordinate.x = n.x + n.w;
          c[2].coordinate.y = n.y + n.h;
          c[3].coordinate.x = n.x;
          c[3].coordinate.y = n.y + n.h;
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
          this._target ? (h = r.create2DProjection(this._target.w, this._target.h, 2E3), h = r.createMultiply(h, r.createScale(1, -1, 1))) : h = this._context.modelViewProjectionMatrix;
          g.uniformMatrix4fv(b.uniforms.uTransformMatrix3D.location, !1, h.asWebGLMatrix());
          this._colorMatrix && (g.uniformMatrix4fv(b.uniforms.uColorMatrix.location, !1, this._colorMatrix.asWebGLMatrix()), g.uniform4fv(b.uniforms.uColorVector.location, this._colorMatrix.asWebGLVector()));
          for (h = 0;h < this._surfaces.length;h++) {
            g.activeTexture(g.TEXTURE0 + h), g.bindTexture(g.TEXTURE_2D, this._surfaces[h].texture);
          }
          g.uniform1iv(b.uniforms["uSampler[0]"].location, [0, 1, 2, 3, 4, 5, 6, 7]);
          g.bindBuffer(g.ARRAY_BUFFER, a.buffer);
          var d = l.attributeList.size, f = l.attributeList.attributes;
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
        b._tmpVertices = u.Vertex.createEmptyVertices(l, 4);
        b._depth = 1;
        return b;
      }(a);
      u.WebGLCombinedBrush = a;
    })(m.WebGL || (m.WebGL = {}));
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(g) {
    (function(g) {
      var b = CanvasRenderingContext2D.prototype.save, m = CanvasRenderingContext2D.prototype.clip, r = CanvasRenderingContext2D.prototype.fill, a = CanvasRenderingContext2D.prototype.stroke, l = CanvasRenderingContext2D.prototype.restore, t = CanvasRenderingContext2D.prototype.beginPath;
      g.notifyReleaseChanged = function() {
        CanvasRenderingContext2D.prototype.save = b;
        CanvasRenderingContext2D.prototype.clip = m;
        CanvasRenderingContext2D.prototype.fill = r;
        CanvasRenderingContext2D.prototype.stroke = a;
        CanvasRenderingContext2D.prototype.restore = l;
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
  (function(m) {
    (function(u) {
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
            g.Debug.somewhatImplemented("Blend Mode: " + m.BlendMode[a]);
        }
        return b;
      }
      var r = g.NumberUtilities.clamp;
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
        a._applyFilter = function(l, p, k) {
          if (a._svgFiltersAreSupported) {
            if (a._prepareSVGFilters(), a._removeFilter(p), k instanceof m.BlurFilter) {
              var r = b(l, k.quality);
              a._svgBlurFilter.setAttribute("stdDeviation", k.blurX * r + " " + k.blurY * r);
              p.filter = "url(#svgBlurFilter)";
            } else {
              k instanceof m.DropshadowFilter ? (r = b(l, k.quality), a._svgDropshadowFilterBlur.setAttribute("stdDeviation", k.blurX * r + " " + k.blurY * r), a._svgDropshadowFilterOffset.setAttribute("dx", String(Math.cos(k.angle * Math.PI / 180) * k.distance * l)), a._svgDropshadowFilterOffset.setAttribute("dy", String(Math.sin(k.angle * Math.PI / 180) * k.distance * l)), a._svgDropshadowFilterFlood.setAttribute("flood-color", g.ColorUtilities.rgbaToCSSStyle(k.color << 8 | Math.round(255 * k.alpha))), 
              p.filter = "url(#svgDropShadowFilter)") : k instanceof m.ColorMatrix && (a._svgColorMatrixFilter.setAttribute("values", k.toSVGFilterMatrix()), p.filter = "url(#svgColorMatrixFilter)");
            }
          }
        };
        a._removeFilter = function(a) {
          a.filter = "none";
        };
        a._applyColorMatrix = function(a, b) {
          b.isIdentity() ? (a.globalAlpha = 1, a.globalColorMatrix = null) : b.hasOnlyAlphaMultiplier() ? (a.globalAlpha = r(b.alphaMultiplier, 0, 1), a.globalColorMatrix = null) : (a.globalAlpha = 1, a.globalColorMatrix = b);
        };
        a._svgFiltersAreSupported = !!Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype, "filter");
        return a;
      }();
      u.Filters = a;
      m.filters && a._svgFiltersAreSupported && ("registerScratchCanvas" in window || (window.registerScratchCanvas = function(a) {
        a.style.display = "none";
        document.body.appendChild(a);
      }));
      var l = function() {
        function b(a, g, k, h) {
          this.surface = a;
          this.region = g;
          this.w = k;
          this.h = h;
        }
        b.prototype.free = function() {
          this.surface.free(this);
        };
        b._ensureCopyCanvasSize = function(a, l) {
          var k;
          if (b._copyCanvasContext) {
            if (k = b._copyCanvasContext.canvas, k.width < a || k.height < l) {
              k.width = g.IntegerUtilities.nearestPowerOfTwo(a), k.height = g.IntegerUtilities.nearestPowerOfTwo(l);
            }
          } else {
            k = document.createElement("canvas"), "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(k), k.width = g.IntegerUtilities.nearestPowerOfTwo(a), k.height = g.IntegerUtilities.nearestPowerOfTwo(l), b._copyCanvasContext = k.getContext("2d");
          }
        };
        b.prototype.draw = function(g, l, k, m, d, f, e, c, n) {
          this.context.setTransform(1, 0, 0, 1, 0, 0);
          var r, t = 0, u = 0;
          g.context.canvas === this.context.canvas ? (b._ensureCopyCanvasSize(m, d), r = b._copyCanvasContext, r.clearRect(0, 0, m, d), r.drawImage(g.surface.canvas, g.region.x, g.region.y, m, d, 0, 0, m, d), f = r, u = t = 0) : (f = g.surface.context, t = g.region.x, u = g.region.y);
          a: {
            switch(e) {
              case 11:
                g = !0;
                break a;
              default:
                g = !1;
            }
          }
          g && (this.context.save(), this.context.beginPath(), this.context.rect(l, k, m, d), this.context.clip());
          this.context.globalAlpha = 1;
          this.context.globalCompositeOperation = w(e);
          if (c) {
            e = 0;
            if (1 < c.length) {
              var W, Y, K, V;
              r ? (K = r, r = f, f = K) : (b._ensureCopyCanvasSize(m, d), r = b._copyCanvasContext, Y = W = 0);
              for (;e < c.length - 1;e++) {
                r.clearRect(0, 0, m, d), a._applyFilter(n, r, c[e]), r.drawImage(f.canvas, t, u, m, d, W, Y, m, d), a._removeFilter(r), K = r, Y = t, V = u, r = f, f = K, u = t = W, W = Y, Y = V;
              }
              a._removeFilter(f);
              a._removeFilter(r);
            }
            a._applyFilter(n, this.context, c[e]);
          }
          this.context.drawImage(f.canvas, t, u, m, d, l, k, m, d);
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
      u.Canvas2DSurfaceRegion = l;
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
          return g ? new l(this, g, a, b) : null;
        };
        a.prototype.free = function(a) {
          this._regionAllocator.free(a.region);
        };
        return a;
      }();
      u.Canvas2DSurface = t;
    })(m.Canvas2D || (m.Canvas2D = {}));
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(m) {
    (function(u) {
      var b = g.Debug.assert, w = g.GFX.Geometry.Rectangle, r = g.GFX.Geometry.Point, a = g.GFX.Geometry.Matrix, l = g.NumberUtilities.clamp, t = g.NumberUtilities.pow2, h = function() {
        return function(a, b) {
          this.surfaceRegion = a;
          this.scale = b;
        };
      }();
      u.MipMapLevel = h;
      var q = function() {
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
          1 !== a && (b = l(Math.round(Math.log(a) / Math.LN2), -5, 3));
          this._node.hasFlags(2097152) || (b = l(b, -5, 0));
          a = t(b);
          var d = 5 + b, b = this._levels[d];
          if (!b) {
            var f = this._node.getBounds().clone();
            f.scale(a, a);
            f.snap();
            var g = this._surfaceRegionAllocator.allocate(f.w, f.h, null), p = g.region, b = this._levels[d] = new h(g, a), d = new k(g);
            d.clip.set(p);
            d.matrix.setElements(a, 0, 0, a, p.x - f.x, p.y - f.y);
            d.flags |= 64;
            this._renderer.renderNodeWithState(this._node, d);
            d.free();
          }
          return b;
        };
        return a;
      }();
      u.MipMap = q;
      (function(a) {
        a[a.NonZero = 0] = "NonZero";
        a[a.EvenOdd = 1] = "EvenOdd";
      })(u.FillRule || (u.FillRule = {}));
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
      }(m.RendererOptions);
      u.Canvas2DRendererOptions = p;
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
      })(u.RenderFlags || (u.RenderFlags = {}));
      w.createMaxI16();
      var k = function(b) {
        function d(c) {
          b.call(this);
          this.clip = w.createEmpty();
          this.clipList = [];
          this.clipPath = null;
          this.flags = 0;
          this.target = null;
          this.matrix = a.createIdentity();
          this.colorMatrix = m.ColorMatrix.createIdentity();
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
      }(m.State);
      u.RenderState = k;
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
      u.FrameInfo = v;
      var d = function(d) {
        function e(a, b, g) {
          void 0 === g && (g = new p);
          d.call(this, a, b, g);
          this._visited = 0;
          this._frameInfo = new v;
          this._fontSize = 0;
          this._layers = [];
          if (a instanceof HTMLCanvasElement) {
            var k = a;
            this._viewport = new w(0, 0, k.width, k.height);
            this._target = this._createTarget(k);
          } else {
            this._addLayer("Background Layer");
            g = this._addLayer("Canvas Layer");
            k = document.createElement("canvas");
            g.appendChild(k);
            this._viewport = new w(0, 0, a.scrollWidth, a.scrollHeight);
            var h = this;
            b.addEventListener(1, function() {
              h._onStageBoundsChanged(k);
            });
            this._onStageBoundsChanged(k);
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
          return new u.Canvas2DSurfaceRegion(new u.Canvas2DSurface(a), new m.RegionAllocator.Region(0, 0, a.width, a.height), a.width, a.height);
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
          e._initializedCaches || (e._surfaceCache = new m.SurfaceRegionAllocator.SimpleAllocator(function(a, b) {
            var d = document.createElement("canvas");
            "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(d);
            var e = Math.max(1024, a), f = Math.max(1024, b);
            d.width = e;
            d.height = f;
            var g = null, g = 512 <= a || 512 <= b ? new m.RegionAllocator.GridAllocator(e, f, e, f) : new m.RegionAllocator.BucketAllocator(e, f);
            return new u.Canvas2DSurface(d, g);
          }), e._shapeCache = new m.SurfaceRegionAllocator.SimpleAllocator(function(a, b) {
            var d = document.createElement("canvas");
            "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(d);
            d.width = 1024;
            d.height = 1024;
            var e = e = new m.RegionAllocator.CompactAllocator(1024, 1024);
            return new u.Canvas2DSurface(d, e);
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
          var e = new k(this._target);
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
          var g = this._options.cacheShapesMaxSize, k = Math.max(d.getAbsoluteScaleX(), d.getAbsoluteScaleY()), h = !!(b.flags & 16), l = !!(b.flags & 8);
          if (b.hasFlags(256)) {
            if (l || h || !b.colorMatrix.isIdentity() || a.hasFlags(1048576) || 100 < this._options.cacheShapesThreshold || f.w * k > g || f.h * k > g) {
              return !1;
            }
            (k = a.properties.mipMap) || (k = a.properties.mipMap = new q(this, a, e._shapeCache, g));
            h = k.getLevel(d);
            g = h.surfaceRegion;
            k = g.region;
            return h ? (h = b.target.context, h.imageSmoothingEnabled = h.mozImageSmoothingEnabled = !0, h.setTransform(d.a, d.b, d.c, d.d, d.tx, d.ty), h.drawImage(g.surface.canvas, k.x, k.y, k.w, k.h, f.x, f.y, f.w, f.h), !0) : !1;
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
                  var g = e[f], k = g.getTransform(), h = b.transform(k);
                  h.toggleFlags(4096, g.hasFlags(524288));
                  if (0 <= g.clip) {
                    d = d || new Uint8Array(e.length);
                    d[g.clip + f]++;
                    var l = h.clone();
                    l.flags |= 16;
                    l.beginClipPath(k.getMatrix());
                    g.visit(this, l);
                    l.applyClipPath();
                    l.free();
                  } else {
                    g.visit(this, h);
                  }
                  if (d && 0 < d[f]) {
                    for (;d[f]--;) {
                      b.closeClipPath();
                    }
                  }
                  h.free();
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
            var d = b.target.context, f = a.getBounds(!0), k = a.properties.style;
            k || (k = a.properties.style = g.Color.randomColor().toCSSStyle());
            d.strokeStyle = k;
            b.matrix.transformRectangleAABB(f);
            d.setTransform(1, 0, 0, 1, 0, 0);
            f.free();
            f = a.getBounds();
            k = e._debugPoints;
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
            u.Filters._applyColorMatrix(e, b.colorMatrix);
            a.source instanceof m.RenderableVideo ? this.visitRenderableVideo(a.source, b) : 0 < e.globalAlpha && this.visitRenderable(a.source, b, a.ratio);
            b.flags & 8192 && d.free();
            u.Filters._removeFilter(e);
          }
        };
        e.prototype.visitRenderableVideo = function(a, b) {
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
            var k = this._backgroundVideoLayer;
            k !== a.video.parentElement && (k.appendChild(a.video), a.addEventListener(2, function K(a) {
              k.removeChild(a.video);
              a.removeEventListener(2, K);
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
            var f = b.matrix, e = b.target.context, g = !!(b.flags & 16), k = !!(b.flags & 8);
            e.setTransform(f.a, f.b, f.c, f.d, f.tx, f.ty);
            this._frameInfo.shapes++;
            e.imageSmoothingEnabled = e.mozImageSmoothingEnabled = b.hasFlags(4096);
            f = a.properties.renderCount || 0;
            a.properties.renderCount = ++f;
            a.render(e, d, null, g ? b.clipPath : null, k);
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
          var k = a.getBounds().clone();
          f.matrix.transformRectangleAABB(k);
          k.snap();
          if (!k.isEmpty()) {
            var h = b.getBounds().clone();
            g.transformRectangleAABB(h);
            h.snap();
            if (!h.isEmpty()) {
              var l = f.clip.clone();
              l.intersect(k);
              l.intersect(h);
              l.snap();
              l.isEmpty() || (k = f.clone(), k.clip.set(l), a = this._renderToTemporarySurface(a, a.getBounds(), k, w.createEmpty(), null), k.free(), h = f.clone(), h.clip.set(l), h.matrix = g, h.flags |= 4, e && (h.flags |= 8), b = this._renderToTemporarySurface(b, b.getBounds(), h, w.createEmpty(), a.surface), h.free(), a.draw(b, 0, 0, l.w, l.h, h.colorMatrix, 11, null, this._devicePixelRatio), f.target.draw(a, l.x, l.y, l.w, l.h, k.colorMatrix, d, null, this._devicePixelRatio), b.free(), a.free());
            }
          }
        };
        e.prototype._renderStageToTarget = function(b, d, e) {
          w.allocationCount = a.allocationCount = k.allocationCount = 0;
          b = new k(b);
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
          d && (d = this._stage.content.groupChild.child, b(d instanceof m.Stage), a = d.content.getBounds(!0), d.content.getTransform().getConcatenatedMatrix().transformRectangleAABB(a), a.intersect(this._viewport));
          a || (a = new w(0, 0, this._target.w, this._target.h));
          d = a.w;
          var f = a.h, g = this._devicePixelRatio;
          e && (d /= g, f /= g, g = 1);
          e = document.createElement("canvas");
          e.width = d;
          e.height = f;
          var k = e.getContext("2d");
          k.fillStyle = this._container.style.backgroundColor;
          k.fillRect(0, 0, d, f);
          k.drawImage(this._target.context.canvas, a.x, a.y, a.w, a.h, 0, 0, d, f);
          return new m.ScreenShot(e.toDataURL("image/png"), d, f, g);
        };
        e._initializedCaches = !1;
        e._debugPoints = r.createEmptyPoints(4);
        return e;
      }(m.Renderer);
      u.Canvas2DRenderer = d;
    })(m.Canvas2D || (m.Canvas2D = {}));
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(m) {
    var u = m.Geometry.Point, b = m.Geometry.Matrix, w = m.Geometry.Rectangle, r = g.Tools.Mini.FPS, a = function() {
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
    m.UIState = a;
    var l = function(a) {
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
    }(a), t = function(a) {
      function b() {
        a.apply(this, arguments);
        this._keyCodes = [];
        this._paused = !1;
        this._mousePosition = new u(0, 0);
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
          var b = m.viewportLoupeDiameter.value, d = m.viewportLoupeDiameter.value;
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
        a.state = new l;
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
        a.state = new l;
      };
      return b;
    }(a), a = function() {
      function a(b, k, h) {
        function d(a) {
          c._state.onMouseWheel(c, a);
          c._persistentState.onMouseWheel(c, a);
        }
        void 0 === k && (k = !1);
        void 0 === h && (h = void 0);
        this._state = new l;
        this._persistentState = new t;
        this.paused = !1;
        this.viewport = null;
        this._selectedNodes = [];
        this._isRendering = !1;
        this._rAF = void 0;
        this._eventListeners = Object.create(null);
        this._fullScreen = !1;
        this._container = b;
        this._stage = new m.Stage(512, 512, !0);
        this._worldView = this._stage.content;
        this._world = new m.Group;
        this._worldView.addChild(this._world);
        this._disableHiDPI = k;
        k = document.createElement("div");
        k.style.position = "absolute";
        k.style.width = "100%";
        k.style.height = "100%";
        k.style.zIndex = "0";
        b.appendChild(k);
        if (m.hud.value) {
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
          this._fps = new r(e);
        } else {
          this._fps = null;
        }
        this.transparent = f = 0 === h;
        void 0 === h || 0 === h || g.ColorUtilities.rgbaToCSSStyle(h);
        this._options = new m.Canvas2D.Canvas2DRendererOptions;
        this._options.alpha = f;
        this._renderer = new m.Canvas2D.Canvas2DRenderer(k, this._stage, this._options);
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
        m.RenderableVideo.checkForVideoUpdates();
        var a = (this._stage.readyToRender() || m.forcePaint.value) && !this.paused, b = 0;
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
      a.prototype.getMousePosition = function(a, g) {
        var h = this._container, d = h.getBoundingClientRect(), f = this.getRatio(), h = new u(h.scrollWidth / d.width * (a.clientX - d.left) * f, h.scrollHeight / d.height * (a.clientY - d.top) * f);
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
    m.Easel = a;
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(m) {
    var u = g.GFX.Geometry.Matrix;
    (function(b) {
      b[b.Simple = 0] = "Simple";
    })(m.Layout || (m.Layout = {}));
    var b = function(b) {
      function a() {
        b.apply(this, arguments);
        this.layout = 0;
      }
      __extends(a, b);
      return a;
    }(m.RendererOptions);
    m.TreeRendererOptions = b;
    var w = function(g) {
      function a(a, m, h) {
        void 0 === h && (h = new b);
        g.call(this, a, m, h);
        this._canvas = document.createElement("canvas");
        this._container.appendChild(this._canvas);
        this._context = this._canvas.getContext("2d");
        this._listenForContainerSizeChanges();
      }
      __extends(a, g);
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
        var a = this._getRatio(), b = Math.ceil(this._containerWidth * a), g = Math.ceil(this._containerHeight * a), m = this._canvas;
        0 < a ? (m.width = b * a, m.height = g * a, m.style.width = b + "px", m.style.height = g + "px") : (m.width = b, m.height = g);
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
        0 === this._options.layout && this._renderNodeSimple(this._context, this._stage, u.createIdentity());
        a.restore();
      };
      a.prototype._renderNodeSimple = function(a, b, g) {
        function q(b) {
          var c = b.getChildren();
          a.fillStyle = b.hasFlags(16) ? "red" : "white";
          var g = String(b.id);
          b instanceof m.RenderableText ? g = "T" + g : b instanceof m.RenderableShape ? g = "S" + g : b instanceof m.RenderableBitmap ? g = "B" + g : b instanceof m.RenderableVideo && (g = "V" + g);
          b instanceof m.Renderable && (g = g + " [" + b._parents.length + "]");
          b = a.measureText(g).width;
          a.fillText(g, k, r);
          if (c) {
            k += b + 4;
            f = Math.max(f, k + 20);
            for (g = 0;g < c.length;g++) {
              q(c[g]), g < c.length - 1 && (r += 18, r > p._canvas.height && (a.fillStyle = "gray", k = k - d + f + 8, d = f + 8, r = 0, a.fillStyle = "white"));
            }
            k -= b + 4;
          }
        }
        var p = this;
        a.save();
        a.font = "16px Arial";
        a.fillStyle = "white";
        var k = 0, r = 0, d = 0, f = 0;
        q(b);
        a.restore();
      };
      return a;
    }(m.Renderer);
    m.TreeRenderer = w;
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(m) {
    (function(u) {
      var b = g.GFX.BlurFilter, w = g.GFX.DropshadowFilter, r = g.GFX.Shape, a = g.GFX.Group, l = g.GFX.RenderableShape, t = g.GFX.RenderableMorphShape, h = g.GFX.RenderableBitmap, q = g.GFX.RenderableVideo, p = g.GFX.RenderableText, k = g.GFX.ColorMatrix, v = g.ShapeData, d = g.ArrayUtilities.DataBuffer, f = g.GFX.Stage, e = g.GFX.Geometry.Matrix, c = g.GFX.Geometry.Rectangle, n = function() {
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
      u.GFXChannelSerializer = n;
      n = function() {
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
          g.registerCSSFont(a, b, !inFirefox);
          inFirefox ? c(null) : window.setTimeout(c, 400);
        };
        a.prototype.registerImage = function(a, b, c, d, e, f) {
          this._registerAsset(a, b, this._decodeImage(c, d, e, f));
        };
        a.prototype.registerVideo = function(a) {
          this._registerAsset(a, 0, new q(a, this));
        };
        a.prototype._decodeImage = function(a, b, d, e) {
          var f = new Image, k = h.FromImage(f);
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
      u.GFXChannelDeserializerContext = n;
      n = function() {
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
          for (var a = this.input, b = this.context, c = a.readInt(), d = a.readInt(), e = b._getAsset(c), f = this._readRectangle(), g = v.FromPlainObject(this._readAsset()), h = a.readInt(), k = [], m = 0;m < h;m++) {
            var n = a.readInt();
            k.push(b._getBitmapAsset(n));
          }
          if (e) {
            e.update(g, k, f);
          } else {
            a = g.morphCoordinates ? new t(c, g, k, f) : new l(c, g, k, f);
            for (m = 0;m < k.length;m++) {
              k[m] && k[m].addRenderableParent(a);
            }
            b._registerAsset(c, d, a);
          }
        };
        f.prototype._readUpdateBitmapData = function() {
          var a = this.input, b = this.context, c = a.readInt(), e = a.readInt(), f = b._getBitmapAsset(c), g = this._readRectangle(), a = a.readInt(), k = d.FromPlainObject(this._readAsset());
          f ? f.updateFromDataBuffer(a, k) : (f = h.FromDataBuffer(a, k, g), b._registerAsset(c, e, f));
        };
        f.prototype._readUpdateTextContent = function() {
          var a = this.input, b = this.context, c = a.readInt(), e = a.readInt(), f = b._getTextAsset(c), g = this._readRectangle(), h = this._readMatrix(), k = a.readInt(), l = a.readInt(), m = a.readInt(), n = a.readBoolean(), q = a.readInt(), r = a.readInt(), t = this._readAsset(), u = d.FromPlainObject(this._readAsset()), v = null, w = a.readInt();
          w && (v = new d(4 * w), a.readBytes(v, 4 * w));
          f ? (f.setBounds(g), f.setContent(t, u, h, v), f.setStyle(k, l, q, r), f.reflow(m, n)) : (f = new p(g), f.setContent(t, u, h, v), f.setStyle(k, l, q, r), f.reflow(m, n), b._registerAsset(c, e, f));
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
          a.stage.color = g.Color.FromARGB(b);
          a.stage.align = this.input.readInt();
          a.stage.scaleMode = this.input.readInt();
          b = this.input.readInt();
          this.input.readInt();
          c = this.input.readInt();
          a._easelHost.cursor = g.UI.toCSSCursor(c);
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
              var h = c.readInt();
              switch(h) {
                case 0:
                  e.push(new b(c.readFloat(), c.readFloat(), c.readInt()));
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
                  e.push(new k(h));
                  break;
                default:
                  g.Debug.somewhatImplemented(m.FilterType[h]);
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
          e && (k = f.getChildren()[0], k instanceof r && (k.ratio = e));
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
        f._temporaryReadColorMatrix = k.createIdentity();
        f._temporaryReadColorMatrixIdentity = k.createIdentity();
        return f;
      }();
      u.GFXChannelDeserializer = n;
    })(m.GFX || (m.GFX = {}));
  })(g.Remoting || (g.Remoting = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(m) {
    var u = g.GFX.Geometry.Point, b = g.ArrayUtilities.DataBuffer;
    m.ContextMenuButton = 2;
    var w = function() {
      function r(a) {
        this._easel = a;
        var b = a.transparent;
        this._group = a.world;
        this._content = null;
        this._fullscreen = !1;
        this._context = new g.Remoting.GFX.GFXChannelDeserializerContext(this, this._group, b);
        this._addEventListeners();
      }
      r.prototype.onSendUpdates = function(a, b) {
        throw Error("This method is abstract");
      };
      Object.defineProperty(r.prototype, "easel", {get:function() {
        return this._easel;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(r.prototype, "stage", {get:function() {
        return this._easel.stage;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(r.prototype, "content", {set:function(a) {
        this._content = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(r.prototype, "cursor", {set:function(a) {
        this._easel.cursor = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(r.prototype, "fullscreen", {set:function(a) {
        this._fullscreen !== a && (this._fullscreen = a, "undefined" !== typeof ShumwayCom && ShumwayCom.setFullscreen && ShumwayCom.setFullscreen(a));
      }, enumerable:!0, configurable:!0});
      r.prototype._mouseEventListener = function(a) {
        if (a.button !== m.ContextMenuButton) {
          var l = this._easel.getMousePosition(a, this._content), l = new u(l.x, l.y), r = new b, h = new g.Remoting.GFX.GFXChannelSerializer;
          h.output = r;
          h.writeMouseEvent(a, l);
          this.onSendUpdates(r, []);
        }
      };
      r.prototype._keyboardEventListener = function(a) {
        var l = new b, m = new g.Remoting.GFX.GFXChannelSerializer;
        m.output = l;
        m.writeKeyboardEvent(a);
        this.onSendUpdates(l, []);
      };
      r.prototype._addEventListeners = function() {
        for (var a = this._mouseEventListener.bind(this), b = this._keyboardEventListener.bind(this), g = r._mouseEvents, h = 0;h < g.length;h++) {
          window.addEventListener(g[h], a);
        }
        a = r._keyboardEvents;
        for (h = 0;h < a.length;h++) {
          window.addEventListener(a[h], b);
        }
        this._addFocusEventListeners();
        this._easel.addEventListener("resize", this._resizeEventListener.bind(this));
      };
      r.prototype._sendFocusEvent = function(a) {
        var l = new b, m = new g.Remoting.GFX.GFXChannelSerializer;
        m.output = l;
        m.writeFocusEvent(a);
        this.onSendUpdates(l, []);
      };
      r.prototype._addFocusEventListeners = function() {
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
      r.prototype._resizeEventListener = function() {
        this.onDisplayParameters(this._easel.getDisplayParameters());
      };
      r.prototype.onDisplayParameters = function(a) {
        throw Error("This method is abstract");
      };
      r.prototype.processUpdates = function(a, b, m) {
        void 0 === m && (m = null);
        var h = new g.Remoting.GFX.GFXChannelDeserializer;
        h.input = a;
        h.inputAssets = b;
        h.output = m;
        h.context = this._context;
        h.read();
      };
      r.prototype.processVideoControl = function(a, b, g) {
        var h = this._context, m = h._getVideoAsset(a);
        if (!m) {
          if (1 !== b) {
            return;
          }
          h.registerVideo(a);
          m = h._getVideoAsset(a);
        }
        return m.processControlRequest(b, g);
      };
      r.prototype.processRegisterFont = function(a, b, g) {
        this._context.registerFont(a, b, g);
      };
      r.prototype.processRegisterImage = function(a, b, g, h, m, p) {
        this._context.registerImage(a, b, g, h, m, p);
      };
      r.prototype.processFSCommand = function(a, b) {
        arguments.length;
      };
      r.prototype.processFrame = function() {
        arguments.length;
      };
      r.prototype.onVideoPlaybackEvent = function(a, b, g) {
        throw Error("This method is abstract");
      };
      r.prototype.sendVideoPlaybackEvent = function(a, b, g) {
        this.onVideoPlaybackEvent(a, b, g);
      };
      r._mouseEvents = g.Remoting.MouseEventNames;
      r._keyboardEvents = g.Remoting.KeyboardEventNames;
      return r;
    }();
    m.EaselHost = w;
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(m) {
    (function(u) {
      var b = g.ArrayUtilities.DataBuffer, w = function(g) {
        function a(a, b) {
          g.call(this, a);
          this._peer = b;
          this._peer.onSyncMessage = function(a) {
            return this._onWindowMessage(a, !1);
          }.bind(this);
          this._peer.onAsyncMessage = function(a) {
            this._onWindowMessage(a, !0);
          }.bind(this);
        }
        __extends(a, g);
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
        a.prototype._onWindowMessage = function(a, g) {
          var h;
          if ("object" === typeof a && null !== a) {
            if ("player" === a.type) {
              var m = b.FromArrayBuffer(a.updates.buffer);
              g ? this.processUpdates(m, a.assets) : (h = new b, this.processUpdates(m, a.assets, h), h = h.toPlainObject());
            } else {
              "frame" === a.type ? this.processFrame() : "videoControl" === a.type ? h = this.processVideoControl(a.id, a.eventType, a.data) : "registerFont" === a.type ? this.processRegisterFont(a.syncId, a.data, this._sendRegisterFontResponse.bind(this, a.requestId)) : "registerImage" === a.type ? this.processRegisterImage(a.syncId, a.symbolId, a.imageType, a.data, a.alphaData, this._sendRegisterImageResponse.bind(this, a.requestId)) : "fscommand" === a.type && this.processFSCommand(a.command, 
              a.args);
            }
          }
          return h;
        };
        return a;
      }(m.EaselHost);
      u.WindowEaselHost = w;
    })(m.Window || (m.Window = {}));
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(m) {
    (function(m) {
      function b(a, b) {
        a.writeInt(b.length);
        a.writeRawBytes(b);
      }
      function w(a, b) {
        return "byteLength" in a && "buffer" in a && (a.constructor && a.constructor.name) === b;
      }
      function r(a) {
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
                    if (r(a)) {
                      e.writeByte(8), b(e, new Uint8Array(a));
                    } else {
                      if (w(a, "Int32Array")) {
                        e.writeByte(12), b(e, new Uint8Array(a.buffer, a.byteOffset, a.byteLength));
                      } else {
                        if (!g.isNullOrUndefined(a.buffer) && r(a.buffer) && "number" === typeof a.byteOffset) {
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
        var e = new q;
        f(a);
        return e.getBytes();
      }
      function l(a) {
        var b = new q, e = a.readInt();
        a.readBytes(b, e);
        return b.getBytes();
      }
      function t(a) {
        var b = new q, e = a.readInt();
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
            return l(a).buffer;
          case 9:
            return l(a);
          case 11:
          ;
          case 10:
            return a = l(a), new p(a.buffer, a.length, 10 === b);
          case 12:
            return new Int32Array(l(a).buffer);
        }
      }
      var q = g.ArrayUtilities.DataBuffer, p = g.ArrayUtilities.PlainObjectDataBuffer, k;
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
      })(k || (k = {}));
      (function(a) {
        a[a.None = 0] = "None";
        a[a.PlayerCommand = 1] = "PlayerCommand";
        a[a.PlayerCommandAsync = 2] = "PlayerCommandAsync";
        a[a.Frame = 3] = "Frame";
        a[a.Font = 4] = "Font";
        a[a.Image = 5] = "Image";
        a[a.FSCommand = 6] = "FSCommand";
      })(m.MovieRecordType || (m.MovieRecordType = {}));
      k = function() {
        function d(a) {
          this._maxRecordingSize = a;
          this._recording = new q;
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
          var g = new q;
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
          var c = new q;
          c.writeInt(d);
          b(c, a(e));
          this._createRecord(4, c);
        };
        d.prototype.recordImage = function(d, e, c, g, h) {
          var k = new q;
          k.writeInt(d);
          k.writeInt(e);
          k.writeInt(c);
          b(k, a(g));
          b(k, a(h));
          this._createRecord(5, k);
        };
        d.prototype.recordFSCommand = function(a, b) {
          var c = new q;
          c.writeUTF(a);
          c.writeUTF(b || "");
          this._createRecord(6, c);
        };
        return d;
      }();
      m.MovieRecorder = k;
      var v = function() {
        function a(b) {
          this._buffer = new q;
          this._buffer.writeRawBytes(b);
          this._buffer.position = 4;
        }
        a.prototype.readNextRecord = function() {
          if (this._buffer.position >= this._buffer.length) {
            return 0;
          }
          var a = this._buffer.readInt(), b = this._buffer.readInt(), c = this._buffer.readInt(), d = null;
          0 < c && (d = new q, this._buffer.readBytes(d, c));
          this.currentTimestamp = a;
          this.currentType = b;
          this.currentData = d;
          return b;
        };
        a.prototype.parsePlayerCommand = function() {
          for (var a = l(this.currentData), b = this.currentData.readInt(), c = [], d = 0;d < b;d++) {
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
      m.MovieRecordParser = v;
    })(m.Test || (m.Test = {}));
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(m) {
    (function(u) {
      var b = g.ArrayUtilities.DataBuffer, w = function(g) {
        function a(a) {
          g.call(this, a);
          this.alwaysRenderFrame = this.ignoreTimestamps = !1;
          this.cpuTimeRendering = this.cpuTimeUpdates = 0;
          this.onComplete = null;
        }
        __extends(a, g);
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
          this._parser = new u.MovieRecordParser(a);
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
              var h = 2 === this._parser.currentType, m = b.FromArrayBuffer(a.updates.buffer);
              h ? this.processUpdates(m, a.assets) : (h = new b, this.processUpdates(m, a.assets, h));
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
      }(m.EaselHost);
      u.PlaybackEaselHost = w;
    })(m.Test || (m.Test = {}));
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
(function(g) {
  (function(m) {
    (function(m) {
      var b = function(b) {
        function g(a, l, r) {
          void 0 === r && (r = 0);
          b.call(this, a, l);
          this._recorder = null;
          this._recorder = new m.MovieRecorder(r);
        }
        __extends(g, b);
        Object.defineProperty(g.prototype, "recorder", {get:function() {
          return this._recorder;
        }, enumerable:!0, configurable:!0});
        g.prototype._onWindowMessage = function(a, g) {
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
              this._recorder.recordImage(a.syncId, a.symbolId, a.imageType, a.data, a.alphaData);
              break;
            case "fscommand":
              this._recorder.recordFSCommand(a.command, a.args);
          }
          return b.prototype._onWindowMessage.call(this, a, g);
        };
        return g;
      }(g.GFX.Window.WindowEaselHost);
      m.RecordingEaselHost = b;
    })(m.Test || (m.Test = {}));
  })(g.GFX || (g.GFX = {}));
})(Shumway || (Shumway = {}));
console.timeEnd("Load GFX Dependencies");

