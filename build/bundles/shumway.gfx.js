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
Shumway$$inline_0.version = "0.11.238";
Shumway$$inline_0.build = "f92be57";
var jsGlobal = function() {
  return this || (0,eval)("this//# sourceURL=jsGlobal-getter");
}(), inBrowser = "undefined" !== typeof window && "document" in window && "plugins" in window.document, inFirefox = "undefined" !== typeof navigator && 0 <= navigator.userAgent.indexOf("Firefox");
jsGlobal.performance || (jsGlobal.performance = {});
jsGlobal.performance.now || (jsGlobal.performance.now = function() {
  return Date.now();
});
function lazyInitializer(m, p, g) {
  Object.defineProperty(m, p, {get:function() {
    var b = g();
    Object.defineProperty(m, p, {value:b, configurable:!0, enumerable:!0});
    return b;
  }, configurable:!0, enumerable:!0});
}
var START_TIME = performance.now();
(function(m) {
  function p(f) {
    return (f | 0) === f;
  }
  function g(f) {
    return "object" === typeof f || "function" === typeof f;
  }
  function b(f) {
    return String(Number(f)) === f;
  }
  function w(f) {
    var d = 0;
    if ("number" === typeof f) {
      return d = f | 0, f === d && 0 <= d ? !0 : f >>> 0 === f;
    }
    if ("string" !== typeof f) {
      return !1;
    }
    var e = f.length;
    if (0 === e) {
      return !1;
    }
    if ("0" === f) {
      return !0;
    }
    if (e > m.UINT32_CHAR_BUFFER_LENGTH) {
      return !1;
    }
    var c = 0, d = f.charCodeAt(c++) - 48;
    if (1 > d || 9 < d) {
      return !1;
    }
    for (var n = 0, x = 0;c < e;) {
      x = f.charCodeAt(c++) - 48;
      if (0 > x || 9 < x) {
        return !1;
      }
      n = d;
      d = 10 * d + x;
    }
    return n < m.UINT32_MAX_DIV_10 || n === m.UINT32_MAX_DIV_10 && x <= m.UINT32_MAX_MOD_10 ? !0 : !1;
  }
  (function(f) {
    f[f._0 = 48] = "_0";
    f[f._1 = 49] = "_1";
    f[f._2 = 50] = "_2";
    f[f._3 = 51] = "_3";
    f[f._4 = 52] = "_4";
    f[f._5 = 53] = "_5";
    f[f._6 = 54] = "_6";
    f[f._7 = 55] = "_7";
    f[f._8 = 56] = "_8";
    f[f._9 = 57] = "_9";
  })(m.CharacterCodes || (m.CharacterCodes = {}));
  m.UINT32_CHAR_BUFFER_LENGTH = 10;
  m.UINT32_MAX = 4294967295;
  m.UINT32_MAX_DIV_10 = 429496729;
  m.UINT32_MAX_MOD_10 = 5;
  m.isString = function(f) {
    return "string" === typeof f;
  };
  m.isFunction = function(f) {
    return "function" === typeof f;
  };
  m.isNumber = function(f) {
    return "number" === typeof f;
  };
  m.isInteger = p;
  m.isArray = function(f) {
    return f instanceof Array;
  };
  m.isNumberOrString = function(f) {
    return "number" === typeof f || "string" === typeof f;
  };
  m.isObject = g;
  m.toNumber = function(f) {
    return +f;
  };
  m.isNumericString = b;
  m.isNumeric = function(f) {
    if ("number" === typeof f) {
      return !0;
    }
    if ("string" === typeof f) {
      var d = f.charCodeAt(0);
      return 65 <= d && 90 >= d || 97 <= d && 122 >= d || 36 === d || 95 === d ? !1 : w(f) || b(f);
    }
    return !1;
  };
  m.isIndex = w;
  m.isNullOrUndefined = function(f) {
    return void 0 == f;
  };
  m.argumentsToString = function(f) {
    for (var d = [], e = 0;e < f.length;e++) {
      var c = f[e];
      try {
        var n;
        n = "object" === typeof c && c ? "toString" in c ? c.toString() : Object.prototype.toString.call(c) : c + "";
        d.push(n);
      } catch (x) {
        d.push("<unprintable value>");
      }
    }
    return d.join(", ");
  };
  var v;
  (function(f) {
    f.error = function(c) {
      console.error(c);
      throw Error(c);
    };
    f.assert = function(c, n) {
      void 0 === n && (n = "assertion failed");
      "" === c && (c = !0);
      if (!c) {
        if ("undefined" !== typeof console && "assert" in console) {
          throw console.assert(!1, n), Error(n);
        }
        f.error(n.toString());
      }
    };
    f.assertUnreachable = function(c) {
      throw Error("Reached unreachable location " + Error().stack.split("\n")[1] + c);
    };
    f.assertNotImplemented = function(c, n) {
      c || f.error("notImplemented: " + n);
    };
    var d = Object.create(null);
    f.warning = function(c, n, e) {
    };
    f.warnCounts = function() {
      var c = [], n;
      for (n in d) {
        c.push({key:n, count:d[n]});
      }
      c.sort(function(c, n) {
        return n.count - c.count;
      });
      return c.reduce(function(c, n) {
        return c + ("\n" + n.count + "\t" + n.key);
      }, "");
    };
    f.notUsed = function(c) {
    };
    f.notImplemented = function(c) {
    };
    f.dummyConstructor = function(c) {
    };
    f.abstractMethod = function(c) {
    };
    var e = {};
    f.somewhatImplemented = function(c) {
      e[c] || (e[c] = !0, f.warning("somewhatImplemented: " + c));
    };
    f.unexpected = function(c) {
      f.assert(!1, "Unexpected: " + c);
    };
    f.unexpectedCase = function(c) {
      f.assert(!1, "Unexpected Case: " + c);
    };
  })(v = m.Debug || (m.Debug = {}));
  m.getTicks = function() {
    return performance.now();
  };
  (function(f) {
    function d(c, n) {
      for (var e = 0, d = c.length;e < d;e++) {
        if (c[e] === n) {
          return e;
        }
      }
      c.push(n);
      return c.length - 1;
    }
    f.popManyInto = function(c, n, e) {
      for (var d = n - 1;0 <= d;d--) {
        e[d] = c.pop();
      }
      e.length = n;
    };
    f.popMany = function(c, n) {
      var e = c.length - n, d = c.slice(e, this.length);
      c.length = e;
      return d;
    };
    f.popManyIntoVoid = function(c, n) {
      c.length -= n;
    };
    f.pushMany = function(c, n) {
      for (var e = 0;e < n.length;e++) {
        c.push(n[e]);
      }
    };
    f.top = function(c) {
      return c.length && c[c.length - 1];
    };
    f.last = function(c) {
      return c.length && c[c.length - 1];
    };
    f.peek = function(c) {
      return c[c.length - 1];
    };
    f.indexOf = function(c, n) {
      for (var e = 0, d = c.length;e < d;e++) {
        if (c[e] === n) {
          return e;
        }
      }
      return -1;
    };
    f.equals = function(c, n) {
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
    f.pushUnique = d;
    f.unique = function(c) {
      for (var n = [], e = 0;e < c.length;e++) {
        d(n, c[e]);
      }
      return n;
    };
    f.copyFrom = function(c, n) {
      c.length = 0;
      f.pushMany(c, n);
    };
    f.ensureTypedArrayCapacity = function(c, n) {
      if (c.length < n) {
        var e = c;
        c = new c.constructor(m.IntegerUtilities.nearestPowerOfTwo(n));
        c.set(e, 0);
      }
      return c;
    };
    f.memCopy = function(c, n, e, d, f) {
      void 0 === e && (e = 0);
      void 0 === d && (d = 0);
      void 0 === f && (f = 0);
      0 < d || 0 < f && f < n.length ? (0 >= f && (f = n.length - d), c.set(n.subarray(d, d + f), e)) : c.set(n, e);
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
      c.prototype.write4Floats = function(c, e, d, f) {
        this.ensureCapacity(this._offset + 16);
        this.write4FloatsUnsafe(c, e, d, f);
      };
      c.prototype.write4FloatsUnsafe = function(c, e, d, f) {
        var a = this._offset >> 2;
        this._f32[a + 0] = c;
        this._f32[a + 1] = e;
        this._f32[a + 2] = d;
        this._f32[a + 3] = f;
        this._offset += 16;
      };
      c.prototype.write6Floats = function(c, e, d, f, a, h) {
        this.ensureCapacity(this._offset + 24);
        this.write6FloatsUnsafe(c, e, d, f, a, h);
      };
      c.prototype.write6FloatsUnsafe = function(c, e, d, f, a, h) {
        var l = this._offset >> 2;
        this._f32[l + 0] = c;
        this._f32[l + 1] = e;
        this._f32[l + 2] = d;
        this._f32[l + 3] = f;
        this._f32[l + 4] = a;
        this._f32[l + 5] = h;
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
      c.prototype.hashWords = function(c, e, d) {
        e = this._i32;
        for (var f = 0;f < d;f++) {
          c = (31 * c | 0) + e[f] | 0;
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
    f.ArrayWriter = e;
  })(m.ArrayUtilities || (m.ArrayUtilities = {}));
  var a = function() {
    function f(d) {
      this._u8 = new Uint8Array(d);
      this._u16 = new Uint16Array(d);
      this._i32 = new Int32Array(d);
      this._f32 = new Float32Array(d);
      this._offset = 0;
    }
    Object.defineProperty(f.prototype, "offset", {get:function() {
      return this._offset;
    }, enumerable:!0, configurable:!0});
    f.prototype.isEmpty = function() {
      return this._offset === this._u8.length;
    };
    f.prototype.readInt = function() {
      var d = this._i32[this._offset >> 2];
      this._offset += 4;
      return d;
    };
    f.prototype.readFloat = function() {
      var d = this._f32[this._offset >> 2];
      this._offset += 4;
      return d;
    };
    return f;
  }();
  m.ArrayReader = a;
  (function(f) {
    function d(c, n) {
      return Object.prototype.hasOwnProperty.call(c, n);
    }
    function e(c, n) {
      for (var e in n) {
        d(n, e) && (c[e] = n[e]);
      }
    }
    f.boxValue = function(c) {
      return void 0 == c || g(c) ? c : Object(c);
    };
    f.toKeyValueArray = function(c) {
      var n = Object.prototype.hasOwnProperty, e = [], d;
      for (d in c) {
        n.call(c, d) && e.push([d, c[d]]);
      }
      return e;
    };
    f.isPrototypeWriteable = function(c) {
      return Object.getOwnPropertyDescriptor(c, "prototype").writable;
    };
    f.hasOwnProperty = d;
    f.propertyIsEnumerable = function(c, n) {
      return Object.prototype.propertyIsEnumerable.call(c, n);
    };
    f.getPropertyDescriptor = function(c, n) {
      do {
        var e = Object.getOwnPropertyDescriptor(c, n);
        if (e) {
          return e;
        }
        c = Object.getPrototypeOf(c);
      } while (c);
      return null;
    };
    f.hasOwnGetter = function(c, n) {
      var e = Object.getOwnPropertyDescriptor(c, n);
      return !(!e || !e.get);
    };
    f.getOwnGetter = function(c, n) {
      var e = Object.getOwnPropertyDescriptor(c, n);
      return e ? e.get : null;
    };
    f.hasOwnSetter = function(c, n) {
      var e = Object.getOwnPropertyDescriptor(c, n);
      return !(!e || !e.set);
    };
    f.createMap = function() {
      return Object.create(null);
    };
    f.createArrayMap = function() {
      return [];
    };
    f.defineReadOnlyProperty = function(c, n, e) {
      Object.defineProperty(c, n, {value:e, writable:!1, configurable:!0, enumerable:!1});
    };
    f.getOwnPropertyDescriptors = function(c) {
      for (var e = f.createMap(), d = Object.getOwnPropertyNames(c), G = 0;G < d.length;G++) {
        e[d[G]] = Object.getOwnPropertyDescriptor(c, d[G]);
      }
      return e;
    };
    f.cloneObject = function(c) {
      var n = Object.create(Object.getPrototypeOf(c));
      e(n, c);
      return n;
    };
    f.copyProperties = function(c, e) {
      for (var d in e) {
        c[d] = e[d];
      }
    };
    f.copyOwnProperties = e;
    f.copyOwnPropertyDescriptors = function(c, e, x, f, a) {
      void 0 === x && (x = null);
      void 0 === f && (f = !0);
      void 0 === a && (a = !1);
      for (var h in e) {
        if (d(e, h) && (!x || x(h))) {
          var l = Object.getOwnPropertyDescriptor(e, h);
          if (f || !d(c, h)) {
            try {
              a && !1 === l.writable && (l.writable = !0), Object.defineProperty(c, h, l);
            } catch (k) {
              v.assert("Can't define: " + h);
            }
          }
        }
      }
    };
    f.copyPropertiesByList = function(c, e, d) {
      for (var f = 0;f < d.length;f++) {
        var a = d[f];
        c[a] = e[a];
      }
    };
    f.getLatestGetterOrSetterPropertyDescriptor = function(c, e) {
      for (var d = {};c;) {
        var f = Object.getOwnPropertyDescriptor(c, e);
        f && (d.get = d.get || f.get, d.set = d.set || f.set);
        if (d.get && d.set) {
          break;
        }
        c = Object.getPrototypeOf(c);
      }
      return d;
    };
    f.defineNonEnumerableGetterOrSetter = function(c, e, d, G) {
      var a = f.getLatestGetterOrSetterPropertyDescriptor(c, e);
      a.configurable = !0;
      a.enumerable = !1;
      G ? a.get = d : a.set = d;
      Object.defineProperty(c, e, a);
    };
    f.defineNonEnumerableGetter = function(c, e, d) {
      Object.defineProperty(c, e, {get:d, configurable:!0, enumerable:!1});
    };
    f.defineNonEnumerableSetter = function(c, e, d) {
      Object.defineProperty(c, e, {set:d, configurable:!0, enumerable:!1});
    };
    f.defineNonEnumerableProperty = function(c, e, d) {
      Object.defineProperty(c, e, {value:d, writable:!0, configurable:!0, enumerable:!1});
    };
    f.defineNonEnumerableForwardingProperty = function(c, e, d) {
      Object.defineProperty(c, e, {get:h.makeForwardingGetter(d), set:h.makeForwardingSetter(d), writable:!0, configurable:!0, enumerable:!1});
    };
    f.defineNewNonEnumerableProperty = function(c, e, d) {
      f.defineNonEnumerableProperty(c, e, d);
    };
    f.createPublicAliases = function(c, e) {
      for (var d = {value:null, writable:!0, configurable:!0, enumerable:!1}, f = 0;f < e.length;f++) {
        var a = e[f];
        d.value = c[a];
        Object.defineProperty(c, "$Bg" + a, d);
      }
    };
  })(m.ObjectUtilities || (m.ObjectUtilities = {}));
  var h;
  (function(f) {
    f.makeForwardingGetter = function(d) {
      return new Function('return this["' + d + '"]//# sourceURL=fwd-get-' + d + ".as");
    };
    f.makeForwardingSetter = function(d) {
      return new Function("value", 'this["' + d + '"] = value;//# sourceURL=fwd-set-' + d + ".as");
    };
    f.bindSafely = function(d, e) {
      function c() {
        return d.apply(e, arguments);
      }
      c.boundTo = e;
      return c;
    };
  })(h = m.FunctionUtilities || (m.FunctionUtilities = {}));
  (function(f) {
    function d(c) {
      return "string" === typeof c ? '"' + c + '"' : "number" === typeof c || "boolean" === typeof c ? String(c) : c instanceof Array ? "[] " + c.length : typeof c;
    }
    function e(c, e, d) {
      n[0] = c;
      n[1] = e;
      n[2] = d;
      return n.join("");
    }
    function c(c, e, n, d) {
      x[0] = c;
      x[1] = e;
      x[2] = n;
      x[3] = d;
      return x.join("");
    }
    f.repeatString = function(c, e) {
      for (var n = "", d = 0;d < e;d++) {
        n += c;
      }
      return n;
    };
    f.memorySizeToString = function(c) {
      c |= 0;
      return 1024 > c ? c + " B" : 1048576 > c ? (c / 1024).toFixed(2) + "KB" : (c / 1048576).toFixed(2) + "MB";
    };
    f.toSafeString = d;
    f.toSafeArrayString = function(c) {
      for (var e = [], n = 0;n < c.length;n++) {
        e.push(d(c[n]));
      }
      return e.join(", ");
    };
    f.utf8decode = function(c) {
      for (var e = new Uint8Array(4 * c.length), n = 0, d = 0, f = c.length;d < f;d++) {
        var x = c.charCodeAt(d);
        if (127 >= x) {
          e[n++] = x;
        } else {
          if (55296 <= x && 56319 >= x) {
            var a = c.charCodeAt(d + 1);
            56320 <= a && 57343 >= a && (x = ((x & 1023) << 10) + (a & 1023) + 65536, ++d);
          }
          0 !== (x & 4292870144) ? (e[n++] = 248 | x >>> 24 & 3, e[n++] = 128 | x >>> 18 & 63, e[n++] = 128 | x >>> 12 & 63, e[n++] = 128 | x >>> 6 & 63) : 0 !== (x & 4294901760) ? (e[n++] = 240 | x >>> 18 & 7, e[n++] = 128 | x >>> 12 & 63, e[n++] = 128 | x >>> 6 & 63) : 0 !== (x & 4294965248) ? (e[n++] = 224 | x >>> 12 & 15, e[n++] = 128 | x >>> 6 & 63) : e[n++] = 192 | x >>> 6 & 31;
          e[n++] = 128 | x & 63;
        }
      }
      return e.subarray(0, n);
    };
    f.utf8encode = function(c) {
      for (var e = 0, n = "";e < c.length;) {
        var d = c[e++] & 255;
        if (127 >= d) {
          n += String.fromCharCode(d);
        } else {
          var x = 192, f = 5;
          do {
            if ((d & (x >> 1 | 128)) === x) {
              break;
            }
            x = x >> 1 | 128;
            --f;
          } while (0 <= f);
          if (0 >= f) {
            n += String.fromCharCode(d);
          } else {
            for (var d = d & (1 << f) - 1, x = !1, a = 5;a >= f;--a) {
              var G = c[e++];
              if (128 != (G & 192)) {
                x = !0;
                break;
              }
              d = d << 6 | G & 63;
            }
            if (x) {
              for (f = e - (7 - a);f < e;++f) {
                n += String.fromCharCode(c[f] & 255);
              }
            } else {
              n = 65536 <= d ? n + String.fromCharCode(d - 65536 >> 10 & 1023 | 55296, d & 1023 | 56320) : n + String.fromCharCode(d);
            }
          }
        }
      }
      return n;
    };
    f.base64ArrayBuffer = function(n) {
      var d = "";
      n = new Uint8Array(n);
      for (var x = n.byteLength, f = x % 3, x = x - f, a, G, h, I, l = 0;l < x;l += 3) {
        I = n[l] << 16 | n[l + 1] << 8 | n[l + 2], a = (I & 16515072) >> 18, G = (I & 258048) >> 12, h = (I & 4032) >> 6, I &= 63, d += c("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[a], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[G], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[h], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[I]);
      }
      1 == f ? (I = n[x], d += e("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(I & 252) >> 2], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(I & 3) << 4], "==")) : 2 == f && (I = n[x] << 8 | n[x + 1], d += c("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(I & 64512) >> 10], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(I & 1008) >> 4], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(I & 15) << 
      2], "="));
      return d;
    };
    f.escapeString = function(c) {
      void 0 !== c && (c = c.replace(/[^\w$]/gi, "$"), /^\d/.test(c) && (c = "$" + c));
      return c;
    };
    f.fromCharCodeArray = function(c) {
      for (var e = "", n = 0;n < c.length;n += 16384) {
        var d = Math.min(c.length - n, 16384), e = e + String.fromCharCode.apply(null, c.subarray(n, n + d))
      }
      return e;
    };
    f.variableLengthEncodeInt32 = function(c) {
      for (var e = 32 - Math.clz32(c), n = Math.ceil(e / 6), e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[n], n = n - 1;0 <= n;n--) {
        e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[c >> 6 * n & 63];
      }
      return e;
    };
    f.toEncoding = function(c) {
      return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[c];
    };
    f.fromEncoding = function(c) {
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
    f.variableLengthDecodeInt32 = function(c) {
      for (var e = f.fromEncoding(c.charCodeAt(0)), n = 0, d = 0;d < e;d++) {
        var x = 6 * (e - d - 1), n = n | f.fromEncoding(c.charCodeAt(1 + d)) << x
      }
      return n;
    };
    f.trimMiddle = function(c, e) {
      if (c.length <= e) {
        return c;
      }
      var n = e >> 1, d = e - n - 1;
      return c.substr(0, n) + "\u2026" + c.substr(c.length - d, d);
    };
    f.multiple = function(c, e) {
      for (var n = "", d = 0;d < e;d++) {
        n += c;
      }
      return n;
    };
    f.indexOfAny = function(c, e, n) {
      for (var d = c.length, x = 0;x < e.length;x++) {
        var f = c.indexOf(e[x], n);
        0 <= f && (d = Math.min(d, f));
      }
      return d === c.length ? -1 : d;
    };
    var n = Array(3), x = Array(4), a = Array(5), h = Array(6), l = Array(7), k = Array(8), q = Array(9);
    f.concat3 = e;
    f.concat4 = c;
    f.concat5 = function(c, e, n, d, x) {
      a[0] = c;
      a[1] = e;
      a[2] = n;
      a[3] = d;
      a[4] = x;
      return a.join("");
    };
    f.concat6 = function(c, e, n, d, x, f) {
      h[0] = c;
      h[1] = e;
      h[2] = n;
      h[3] = d;
      h[4] = x;
      h[5] = f;
      return h.join("");
    };
    f.concat7 = function(c, e, n, d, x, f, a) {
      l[0] = c;
      l[1] = e;
      l[2] = n;
      l[3] = d;
      l[4] = x;
      l[5] = f;
      l[6] = a;
      return l.join("");
    };
    f.concat8 = function(c, e, n, d, x, f, a, G) {
      k[0] = c;
      k[1] = e;
      k[2] = n;
      k[3] = d;
      k[4] = x;
      k[5] = f;
      k[6] = a;
      k[7] = G;
      return k.join("");
    };
    f.concat9 = function(c, e, n, d, x, f, a, G, h) {
      q[0] = c;
      q[1] = e;
      q[2] = n;
      q[3] = d;
      q[4] = x;
      q[5] = f;
      q[6] = a;
      q[7] = G;
      q[8] = h;
      return q.join("");
    };
  })(m.StringUtilities || (m.StringUtilities = {}));
  (function(f) {
    var d = new Uint8Array([7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21]), e = new Int32Array([-680876936, -389564586, 606105819, -1044525330, -176418897, 1200080426, -1473231341, -45705983, 1770035416, -1958414417, -42063, -1990404162, 1804603682, -40341101, -1502002290, 1236535329, -165796510, -1069501632, 
    643717713, -373897302, -701558691, 38016083, -660478335, -405537848, 568446438, -1019803690, -187363961, 1163531501, -1444681467, -51403784, 1735328473, -1926607734, -378558, -2022574463, 1839030562, -35309556, -1530992060, 1272893353, -155497632, -1094730640, 681279174, -358537222, -722521979, 76029189, -640364487, -421815835, 530742520, -995338651, -198630844, 1126891415, -1416354905, -57434055, 1700485571, -1894986606, -1051523, -2054922799, 1873313359, -30611744, -1560198380, 1309151649, 
    -145523070, -1120210379, 718787259, -343485551]);
    f.hashBytesTo32BitsMD5 = function(c, n, x) {
      var f = 1732584193, a = -271733879, h = -1732584194, l = 271733878, k = x + 72 & -64, q = new Uint8Array(k), u;
      for (u = 0;u < x;++u) {
        q[u] = c[n++];
      }
      q[u++] = 128;
      for (c = k - 8;u < c;) {
        q[u++] = 0;
      }
      q[u++] = x << 3 & 255;
      q[u++] = x >> 5 & 255;
      q[u++] = x >> 13 & 255;
      q[u++] = x >> 21 & 255;
      q[u++] = x >>> 29 & 255;
      q[u++] = 0;
      q[u++] = 0;
      q[u++] = 0;
      c = new Int32Array(16);
      for (u = 0;u < k;) {
        for (x = 0;16 > x;++x, u += 4) {
          c[x] = q[u] | q[u + 1] << 8 | q[u + 2] << 16 | q[u + 3] << 24;
        }
        var b = f;
        n = a;
        var t = h, r = l, v, g;
        for (x = 0;64 > x;++x) {
          16 > x ? (v = n & t | ~n & r, g = x) : 32 > x ? (v = r & n | ~r & t, g = 5 * x + 1 & 15) : 48 > x ? (v = n ^ t ^ r, g = 3 * x + 5 & 15) : (v = t ^ (n | ~r), g = 7 * x & 15);
          var m = r, b = b + v + e[x] + c[g] | 0;
          v = d[x];
          r = t;
          t = n;
          n = n + (b << v | b >>> 32 - v) | 0;
          b = m;
        }
        f = f + b | 0;
        a = a + n | 0;
        h = h + t | 0;
        l = l + r | 0;
      }
      return f;
    };
    f.hashBytesTo32BitsAdler = function(c, e, d) {
      var f = 1, a = 0;
      for (d = e + d;e < d;++e) {
        f = (f + (c[e] & 255)) % 65521, a = (a + f) % 65521;
      }
      return a << 16 | f;
    };
    f.mixHash = function(c, e) {
      return (31 * c | 0) + e | 0;
    };
  })(m.HashUtilities || (m.HashUtilities = {}));
  var u = function() {
    function f() {
    }
    f.seed = function(d) {
      f._state[0] = d;
      f._state[1] = d;
    };
    f.reset = function() {
      f._state[0] = 57005;
      f._state[1] = 48879;
    };
    f.next = function() {
      var d = this._state, e = Math.imul(18273, d[0] & 65535) + (d[0] >>> 16) | 0;
      d[0] = e;
      var c = Math.imul(36969, d[1] & 65535) + (d[1] >>> 16) | 0;
      d[1] = c;
      d = (e << 16) + (c & 65535) | 0;
      return 2.3283064365386963E-10 * (0 > d ? d + 4294967296 : d);
    };
    f._state = new Uint32Array([57005, 48879]);
    return f;
  }();
  m.Random = u;
  Math.random = function() {
    return u.next();
  };
  (function() {
    function f() {
      this.id = "$weakmap" + d++;
    }
    if ("function" !== typeof jsGlobal.WeakMap) {
      var d = 0;
      f.prototype = {has:function(e) {
        return e.hasOwnProperty(this.id);
      }, get:function(e, c) {
        return e.hasOwnProperty(this.id) ? e[this.id] : c;
      }, set:function(e, c) {
        Object.defineProperty(e, this.id, {value:c, enumerable:!1, configurable:!0});
      }, delete:function(e) {
        delete e[this.id];
      }};
      jsGlobal.WeakMap = f;
    }
  })();
  a = function() {
    function f() {
      "undefined" !== typeof ShumwayCom && ShumwayCom.getWeakMapKeys ? this._map = new WeakMap : this._list = [];
    }
    f.prototype.clear = function() {
      this._map ? this._map.clear() : this._list.length = 0;
    };
    f.prototype.push = function(d) {
      this._map ? this._map.set(d, null) : this._list.push(d);
    };
    f.prototype.remove = function(d) {
      this._map ? this._map.delete(d) : this._list[this._list.indexOf(d)] = null;
    };
    f.prototype.forEach = function(d) {
      if (this._map) {
        ShumwayCom.getWeakMapKeys(this._map).forEach(function(c) {
          0 !== c._referenceCount && d(c);
        });
      } else {
        for (var e = this._list, c = 0, n = 0;n < e.length;n++) {
          var f = e[n];
          f && (0 === f._referenceCount ? (e[n] = null, c++) : d(f));
        }
        if (16 < c && c > e.length >> 2) {
          c = [];
          for (n = 0;n < e.length;n++) {
            (f = e[n]) && 0 < f._referenceCount && c.push(f);
          }
          this._list = c;
        }
      }
    };
    Object.defineProperty(f.prototype, "length", {get:function() {
      return this._map ? -1 : this._list.length;
    }, enumerable:!0, configurable:!0});
    return f;
  }();
  m.WeakList = a;
  var k;
  (function(f) {
    f.pow2 = function(d) {
      return d === (d | 0) ? 0 > d ? 1 / (1 << -d) : 1 << d : Math.pow(2, d);
    };
    f.clamp = function(d, e, c) {
      return Math.max(e, Math.min(c, d));
    };
    f.roundHalfEven = function(d) {
      if (.5 === Math.abs(d % 1)) {
        var e = Math.floor(d);
        return 0 === e % 2 ? e : Math.ceil(d);
      }
      return Math.round(d);
    };
    f.altTieBreakRound = function(d, e) {
      return .5 !== Math.abs(d % 1) || e ? Math.round(d) : d | 0;
    };
    f.epsilonEquals = function(d, e) {
      return 1E-7 > Math.abs(d - e);
    };
  })(k = m.NumberUtilities || (m.NumberUtilities = {}));
  (function(f) {
    f[f.MaxU16 = 65535] = "MaxU16";
    f[f.MaxI16 = 32767] = "MaxI16";
    f[f.MinI16 = -32768] = "MinI16";
  })(m.Numbers || (m.Numbers = {}));
  var t;
  (function(f) {
    function d(c) {
      return 256 * c << 16 >> 16;
    }
    var e = new ArrayBuffer(8);
    f.i8 = new Int8Array(e);
    f.u8 = new Uint8Array(e);
    f.i32 = new Int32Array(e);
    f.f32 = new Float32Array(e);
    f.f64 = new Float64Array(e);
    f.nativeLittleEndian = 1 === (new Int8Array((new Int32Array([1])).buffer))[0];
    f.floatToInt32 = function(c) {
      f.f32[0] = c;
      return f.i32[0];
    };
    f.int32ToFloat = function(c) {
      f.i32[0] = c;
      return f.f32[0];
    };
    f.swap16 = function(c) {
      return (c & 255) << 8 | c >> 8 & 255;
    };
    f.swap32 = function(c) {
      return (c & 255) << 24 | (c & 65280) << 8 | c >> 8 & 65280 | c >> 24 & 255;
    };
    f.toS8U8 = d;
    f.fromS8U8 = function(c) {
      return c / 256;
    };
    f.clampS8U8 = function(c) {
      return d(c) / 256;
    };
    f.toS16 = function(c) {
      return c << 16 >> 16;
    };
    f.bitCount = function(c) {
      c -= c >> 1 & 1431655765;
      c = (c & 858993459) + (c >> 2 & 858993459);
      return 16843009 * (c + (c >> 4) & 252645135) >> 24;
    };
    f.ones = function(c) {
      c -= c >> 1 & 1431655765;
      c = (c & 858993459) + (c >> 2 & 858993459);
      return 16843009 * (c + (c >> 4) & 252645135) >> 24;
    };
    f.trailingZeros = function(c) {
      return f.ones((c & -c) - 1);
    };
    f.getFlags = function(c, e) {
      var d = "";
      for (c = 0;c < e.length;c++) {
        c & 1 << c && (d += e[c] + " ");
      }
      return 0 === d.length ? "" : d.trim();
    };
    f.isPowerOfTwo = function(c) {
      return c && 0 === (c & c - 1);
    };
    f.roundToMultipleOfFour = function(c) {
      return c + 3 & -4;
    };
    f.nearestPowerOfTwo = function(c) {
      c--;
      c |= c >> 1;
      c |= c >> 2;
      c |= c >> 4;
      c |= c >> 8;
      c |= c >> 16;
      c++;
      return c;
    };
    f.roundToMultipleOfPowerOfTwo = function(c, e) {
      var d = (1 << e) - 1;
      return c + d & ~d;
    };
    f.toHEX = function(c) {
      return "0x" + ("00000000" + (0 > c ? 4294967295 + c + 1 : c).toString(16)).substr(-8);
    };
    Math.imul || (Math.imul = function(c, e) {
      var d = c & 65535, f = e & 65535;
      return d * f + ((c >>> 16 & 65535) * f + d * (e >>> 16 & 65535) << 16 >>> 0) | 0;
    });
    Math.clz32 || (Math.clz32 = function(c) {
      c |= c >> 1;
      c |= c >> 2;
      c |= c >> 4;
      c |= c >> 8;
      return 32 - f.ones(c | c >> 16);
    });
  })(t = m.IntegerUtilities || (m.IntegerUtilities = {}));
  (function(f) {
    function d(e, c, n, d, f, a) {
      return (n - e) * (a - c) - (d - c) * (f - e);
    }
    f.pointInPolygon = function(e, c, n) {
      for (var d = 0, f = n.length - 2, a = 0;a < f;a += 2) {
        var h = n[a + 0], l = n[a + 1], k = n[a + 2], q = n[a + 3];
        (l <= c && q > c || l > c && q <= c) && e < h + (c - l) / (q - l) * (k - h) && d++;
      }
      return 1 === (d & 1);
    };
    f.signedArea = d;
    f.counterClockwise = function(e, c, n, f, a, h) {
      return 0 < d(e, c, n, f, a, h);
    };
    f.clockwise = function(e, c, n, f, a, h) {
      return 0 > d(e, c, n, f, a, h);
    };
    f.pointInPolygonInt32 = function(e, c, n) {
      e |= 0;
      c |= 0;
      for (var d = 0, f = n.length - 2, a = 0;a < f;a += 2) {
        var h = n[a + 0], l = n[a + 1], q = n[a + 2], k = n[a + 3];
        (l <= c && k > c || l > c && k <= c) && e < h + (c - l) / (k - l) * (q - h) && d++;
      }
      return 1 === (d & 1);
    };
  })(m.GeometricUtilities || (m.GeometricUtilities = {}));
  (function(f) {
    f[f.Error = 1] = "Error";
    f[f.Warn = 2] = "Warn";
    f[f.Debug = 4] = "Debug";
    f[f.Log = 8] = "Log";
    f[f.Info = 16] = "Info";
    f[f.All = 31] = "All";
  })(m.LogLevel || (m.LogLevel = {}));
  a = function() {
    function f(d, e) {
      void 0 === d && (d = !1);
      this._tab = "  ";
      this._padding = "";
      this._suppressOutput = d;
      this._out = e || f._consoleOut;
      this._outNoNewline = e || f._consoleOutNoNewline;
    }
    Object.defineProperty(f.prototype, "suppressOutput", {get:function() {
      return this._suppressOutput;
    }, set:function(d) {
      this._suppressOutput = d;
    }, enumerable:!0, configurable:!0});
    f.prototype.write = function(d, e) {
      void 0 === d && (d = "");
      void 0 === e && (e = !1);
      this._suppressOutput || this._outNoNewline((e ? this._padding : "") + d);
    };
    f.prototype.writeLn = function(d) {
      void 0 === d && (d = "");
      this._suppressOutput || this._out(this._padding + d);
    };
    f.prototype.writeObject = function(d, e) {
      void 0 === d && (d = "");
      this._suppressOutput || this._out(this._padding + d, e);
    };
    f.prototype.writeTimeLn = function(d) {
      void 0 === d && (d = "");
      this._suppressOutput || this._out(this._padding + performance.now().toFixed(2) + " " + d);
    };
    f.prototype.writeComment = function(d) {
      d = (d || "").split("\n");
      if (1 === d.length) {
        this.writeLn("// " + d[0]);
      } else {
        this.writeLn("/**");
        for (var e = 0;e < d.length;e++) {
          this.writeLn(" * " + d[e]);
        }
        this.writeLn(" */");
      }
    };
    f.prototype.writeLns = function(d) {
      d = (d || "").split("\n");
      for (var e = 0;e < d.length;e++) {
        this.writeLn(d[e]);
      }
    };
    f.prototype.errorLn = function(d) {
      f.logLevel & 1 && this.boldRedLn(d);
    };
    f.prototype.warnLn = function(d) {
      f.logLevel & 2 && this.yellowLn(d);
    };
    f.prototype.debugLn = function(d) {
      f.logLevel & 4 && this.purpleLn(d);
    };
    f.prototype.logLn = function(d) {
      f.logLevel & 8 && this.writeLn(d);
    };
    f.prototype.infoLn = function(d) {
      f.logLevel & 16 && this.writeLn(d);
    };
    f.prototype.yellowLn = function(d) {
      this.colorLn(f.YELLOW, d);
    };
    f.prototype.greenLn = function(d) {
      this.colorLn(f.GREEN, d);
    };
    f.prototype.boldRedLn = function(d) {
      this.colorLn(f.BOLD_RED, d);
    };
    f.prototype.redLn = function(d) {
      this.colorLn(f.RED, d);
    };
    f.prototype.purpleLn = function(d) {
      this.colorLn(f.PURPLE, d);
    };
    f.prototype.colorLn = function(d, e) {
      this._suppressOutput || (inBrowser ? this._out(this._padding + e) : this._out(this._padding + d + e + f.ENDC));
    };
    f.prototype.redLns = function(d) {
      this.colorLns(f.RED, d);
    };
    f.prototype.colorLns = function(d, e) {
      for (var c = (e || "").split("\n"), n = 0;n < c.length;n++) {
        this.colorLn(d, c[n]);
      }
    };
    f.prototype.enter = function(d) {
      this._suppressOutput || this._out(this._padding + d);
      this.indent();
    };
    f.prototype.leaveAndEnter = function(d) {
      this.leave(d);
      this.indent();
    };
    f.prototype.leave = function(d) {
      this.outdent();
      !this._suppressOutput && d && this._out(this._padding + d);
    };
    f.prototype.indent = function() {
      this._padding += this._tab;
    };
    f.prototype.outdent = function() {
      0 < this._padding.length && (this._padding = this._padding.substring(0, this._padding.length - this._tab.length));
    };
    f.prototype.writeArray = function(d, e, c) {
      void 0 === e && (e = !1);
      void 0 === c && (c = !1);
      e = e || !1;
      for (var n = 0, f = d.length;n < f;n++) {
        var a = "";
        e && (a = null === d[n] ? "null" : void 0 === d[n] ? "undefined" : d[n].constructor.name, a += " ");
        var h = c ? "" : ("" + n).padRight(" ", 4);
        this.writeLn(h + a + d[n]);
      }
    };
    f.PURPLE = "\u001b[94m";
    f.YELLOW = "\u001b[93m";
    f.GREEN = "\u001b[92m";
    f.RED = "\u001b[91m";
    f.BOLD_RED = "\u001b[1;91m";
    f.ENDC = "\u001b[0m";
    f.logLevel = 31;
    f._consoleOut = console.log.bind(console);
    f._consoleOutNoNewline = console.log.bind(console);
    return f;
  }();
  m.IndentingWriter = a;
  var r = function() {
    return function(f, d) {
      this.value = f;
      this.next = d;
    };
  }(), a = function() {
    function f(d) {
      this._compare = d;
      this._head = null;
      this._length = 0;
    }
    f.prototype.push = function(d) {
      this._length++;
      if (this._head) {
        var e = this._head, c = null;
        d = new r(d, null);
        for (var n = this._compare;e;) {
          if (0 < n(e.value, d.value)) {
            c ? (d.next = e, c.next = d) : (d.next = this._head, this._head = d);
            return;
          }
          c = e;
          e = e.next;
        }
        c.next = d;
      } else {
        this._head = new r(d, null);
      }
    };
    f.prototype.forEach = function(d) {
      for (var e = this._head, c = null;e;) {
        var n = d(e.value);
        if (n === f.RETURN) {
          break;
        } else {
          n === f.DELETE ? e = c ? c.next = e.next : this._head = this._head.next : (c = e, e = e.next);
        }
      }
    };
    f.prototype.isEmpty = function() {
      return !this._head;
    };
    f.prototype.pop = function() {
      if (this._head) {
        this._length--;
        var d = this._head;
        this._head = this._head.next;
        return d.value;
      }
    };
    f.prototype.contains = function(d) {
      for (var e = this._head;e;) {
        if (e.value === d) {
          return !0;
        }
        e = e.next;
      }
      return !1;
    };
    f.prototype.toString = function() {
      for (var d = "[", e = this._head;e;) {
        d += e.value.toString(), (e = e.next) && (d += ",");
      }
      return d + "]";
    };
    f.RETURN = 1;
    f.DELETE = 2;
    return f;
  }();
  m.SortedList = a;
  a = function() {
    function f(d, e) {
      void 0 === e && (e = 12);
      this.start = this.index = 0;
      this._size = 1 << e;
      this._mask = this._size - 1;
      this.array = new d(this._size);
    }
    f.prototype.get = function(d) {
      return this.array[d];
    };
    f.prototype.forEachInReverse = function(d) {
      if (!this.isEmpty()) {
        for (var e = 0 === this.index ? this._size - 1 : this.index - 1, c = this.start - 1 & this._mask;e !== c && !d(this.array[e], e);) {
          e = 0 === e ? this._size - 1 : e - 1;
        }
      }
    };
    f.prototype.write = function(d) {
      this.array[this.index] = d;
      this.index = this.index + 1 & this._mask;
      this.index === this.start && (this.start = this.start + 1 & this._mask);
    };
    f.prototype.isFull = function() {
      return (this.index + 1 & this._mask) === this.start;
    };
    f.prototype.isEmpty = function() {
      return this.index === this.start;
    };
    f.prototype.reset = function() {
      this.start = this.index = 0;
    };
    return f;
  }();
  m.CircularBuffer = a;
  (function(f) {
    function d(c) {
      return c + (f.BITS_PER_WORD - 1) >> f.ADDRESS_BITS_PER_WORD << f.ADDRESS_BITS_PER_WORD;
    }
    function e(c, e) {
      c = c || "1";
      e = e || "0";
      for (var n = "", d = 0;d < length;d++) {
        n += this.get(d) ? c : e;
      }
      return n;
    }
    function c(c) {
      for (var e = [], n = 0;n < length;n++) {
        this.get(n) && e.push(c ? c[n] : n);
      }
      return e.join(", ");
    }
    f.ADDRESS_BITS_PER_WORD = 5;
    f.BITS_PER_WORD = 1 << f.ADDRESS_BITS_PER_WORD;
    f.BIT_INDEX_MASK = f.BITS_PER_WORD - 1;
    var n = function() {
      function c(e) {
        this.size = d(e);
        this.dirty = this.count = 0;
        this.length = e;
        this.bits = new Uint32Array(this.size >> f.ADDRESS_BITS_PER_WORD);
      }
      c.prototype.recount = function() {
        if (this.dirty) {
          for (var c = this.bits, e = 0, n = 0, d = c.length;n < d;n++) {
            var f = c[n], f = f - (f >> 1 & 1431655765), f = (f & 858993459) + (f >> 2 & 858993459), e = e + (16843009 * (f + (f >> 4) & 252645135) >> 24)
          }
          this.count = e;
          this.dirty = 0;
        }
      };
      c.prototype.set = function(c) {
        var e = c >> f.ADDRESS_BITS_PER_WORD, n = this.bits[e];
        c = n | 1 << (c & f.BIT_INDEX_MASK);
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
        var e = c >> f.ADDRESS_BITS_PER_WORD, n = this.bits[e];
        c = n & ~(1 << (c & f.BIT_INDEX_MASK));
        this.bits[e] = c;
        this.dirty |= n ^ c;
      };
      c.prototype.get = function(c) {
        return 0 !== (this.bits[c >> f.ADDRESS_BITS_PER_WORD] & 1 << (c & f.BIT_INDEX_MASK));
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
        for (var d = 0, f = n.length;d < f;d++) {
          var x = n[d], a = x | c[d];
          n[d] = a;
          e |= x ^ a;
        }
        this.dirty = e;
      };
      c.prototype.intersect = function(c) {
        var e = this.dirty, n = this.bits;
        c = c.bits;
        for (var d = 0, f = n.length;d < f;d++) {
          var x = n[d], a = x & c[d];
          n[d] = a;
          e |= x ^ a;
        }
        this.dirty = e;
      };
      c.prototype.subtract = function(c) {
        var e = this.dirty, n = this.bits;
        c = c.bits;
        for (var d = 0, f = n.length;d < f;d++) {
          var x = n[d], a = x & ~c[d];
          n[d] = a;
          e |= x ^ a;
        }
        this.dirty = e;
      };
      c.prototype.negate = function() {
        for (var c = this.dirty, e = this.bits, n = 0, d = e.length;n < d;n++) {
          var f = e[n], x = ~f;
          e[n] = x;
          c |= f ^ x;
        }
        this.dirty = c;
      };
      c.prototype.forEach = function(c) {
        for (var e = this.bits, n = 0, d = e.length;n < d;n++) {
          var x = e[n];
          if (x) {
            for (var a = 0;a < f.BITS_PER_WORD;a++) {
              x & 1 << a && c(n * f.BITS_PER_WORD + a);
            }
          }
        }
      };
      c.prototype.toArray = function() {
        for (var c = [], e = this.bits, n = 0, d = e.length;n < d;n++) {
          var x = e[n];
          if (x) {
            for (var a = 0;a < f.BITS_PER_WORD;a++) {
              x & 1 << a && c.push(n * f.BITS_PER_WORD + a);
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
        for (var n = 0, d = e.length;n < d;n++) {
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
        for (var n = 0, d = e.length;n < d;n++) {
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
    f.Uint32ArrayBitSet = n;
    var x = function() {
      function c(e) {
        this.dirty = this.count = 0;
        this.size = d(e);
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
        this.bits = c = e | 1 << (c & f.BIT_INDEX_MASK);
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
        this.bits = c = e & ~(1 << (c & f.BIT_INDEX_MASK));
        this.dirty |= e ^ c;
      };
      c.prototype.get = function(c) {
        return 0 !== (this.bits & 1 << (c & f.BIT_INDEX_MASK));
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
          for (var n = 0;n < f.BITS_PER_WORD;n++) {
            e & 1 << n && c(n);
          }
        }
      };
      c.prototype.toArray = function() {
        var c = [], e = this.bits;
        if (e) {
          for (var n = 0;n < f.BITS_PER_WORD;n++) {
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
    f.Uint32BitSet = x;
    x.prototype.toString = c;
    x.prototype.toBitString = e;
    n.prototype.toString = c;
    n.prototype.toBitString = e;
    f.BitSetFunctor = function(c) {
      var e = 1 === d(c) >> f.ADDRESS_BITS_PER_WORD ? x : n;
      return function() {
        return new e(c);
      };
    };
  })(m.BitSets || (m.BitSets = {}));
  a = function() {
    function f() {
    }
    f.randomStyle = function() {
      f._randomStyleCache || (f._randomStyleCache = "#ff5e3a #ff9500 #ffdb4c #87fc70 #52edc7 #1ad6fd #c644fc #ef4db6 #4a4a4a #dbddde #ff3b30 #ff9500 #ffcc00 #4cd964 #34aadc #007aff #5856d6 #ff2d55 #8e8e93 #c7c7cc #5ad427 #c86edf #d1eefc #e0f8d8 #fb2b69 #f7f7f7 #1d77ef #d6cec3 #55efcb #ff4981 #ffd3e0 #f7f7f7 #ff1300 #1f1f21 #bdbec2 #ff3a2d".split(" "));
      return f._randomStyleCache[f._nextStyle++ % f._randomStyleCache.length];
    };
    f.gradientColor = function(d) {
      return f._gradient[f._gradient.length * k.clamp(d, 0, 1) | 0];
    };
    f.contrastStyle = function(d) {
      d = parseInt(d.substr(1), 16);
      return 128 <= (299 * (d >> 16) + 587 * (d >> 8 & 255) + 114 * (d & 255)) / 1E3 ? "#000000" : "#ffffff";
    };
    f.reset = function() {
      f._nextStyle = 0;
    };
    f.TabToolbar = "#252c33";
    f.Toolbars = "#343c45";
    f.HighlightBlue = "#1d4f73";
    f.LightText = "#f5f7fa";
    f.ForegroundText = "#b6babf";
    f.Black = "#000000";
    f.VeryDark = "#14171a";
    f.Dark = "#181d20";
    f.Light = "#a9bacb";
    f.Grey = "#8fa1b2";
    f.DarkGrey = "#5f7387";
    f.Blue = "#46afe3";
    f.Purple = "#6b7abb";
    f.Pink = "#df80ff";
    f.Red = "#eb5368";
    f.Orange = "#d96629";
    f.LightOrange = "#d99b28";
    f.Green = "#70bf53";
    f.BlueGrey = "#5e88b0";
    f._nextStyle = 0;
    f._gradient = "#FF0000 #FF1100 #FF2300 #FF3400 #FF4600 #FF5700 #FF6900 #FF7B00 #FF8C00 #FF9E00 #FFAF00 #FFC100 #FFD300 #FFE400 #FFF600 #F7FF00 #E5FF00 #D4FF00 #C2FF00 #B0FF00 #9FFF00 #8DFF00 #7CFF00 #6AFF00 #58FF00 #47FF00 #35FF00 #24FF00 #12FF00 #00FF00".split(" ");
    return f;
  }();
  m.ColorStyle = a;
  a = function() {
    function f(d, e, c, n) {
      this.xMin = d | 0;
      this.yMin = e | 0;
      this.xMax = c | 0;
      this.yMax = n | 0;
    }
    f.FromUntyped = function(d) {
      return new f(d.xMin, d.yMin, d.xMax, d.yMax);
    };
    f.FromRectangle = function(d) {
      return new f(20 * d.x | 0, 20 * d.y | 0, 20 * (d.x + d.width) | 0, 20 * (d.y + d.height) | 0);
    };
    f.prototype.setElements = function(d, e, c, n) {
      this.xMin = d;
      this.yMin = e;
      this.xMax = c;
      this.yMax = n;
    };
    f.prototype.copyFrom = function(d) {
      this.setElements(d.xMin, d.yMin, d.xMax, d.yMax);
    };
    f.prototype.contains = function(d, e) {
      return d < this.xMin !== d < this.xMax && e < this.yMin !== e < this.yMax;
    };
    f.prototype.unionInPlace = function(d) {
      d.isEmpty() || (this.extendByPoint(d.xMin, d.yMin), this.extendByPoint(d.xMax, d.yMax));
    };
    f.prototype.extendByPoint = function(d, e) {
      this.extendByX(d);
      this.extendByY(e);
    };
    f.prototype.extendByX = function(d) {
      134217728 === this.xMin ? this.xMin = this.xMax = d : (this.xMin = Math.min(this.xMin, d), this.xMax = Math.max(this.xMax, d));
    };
    f.prototype.extendByY = function(d) {
      134217728 === this.yMin ? this.yMin = this.yMax = d : (this.yMin = Math.min(this.yMin, d), this.yMax = Math.max(this.yMax, d));
    };
    f.prototype.intersects = function(d) {
      return this.contains(d.xMin, d.yMin) || this.contains(d.xMax, d.yMax);
    };
    f.prototype.isEmpty = function() {
      return this.xMax <= this.xMin || this.yMax <= this.yMin;
    };
    Object.defineProperty(f.prototype, "width", {get:function() {
      return this.xMax - this.xMin;
    }, set:function(d) {
      this.xMax = this.xMin + d;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(f.prototype, "height", {get:function() {
      return this.yMax - this.yMin;
    }, set:function(d) {
      this.yMax = this.yMin + d;
    }, enumerable:!0, configurable:!0});
    f.prototype.getBaseWidth = function(d) {
      return Math.abs(Math.cos(d)) * (this.xMax - this.xMin) + Math.abs(Math.sin(d)) * (this.yMax - this.yMin);
    };
    f.prototype.getBaseHeight = function(d) {
      return Math.abs(Math.sin(d)) * (this.xMax - this.xMin) + Math.abs(Math.cos(d)) * (this.yMax - this.yMin);
    };
    f.prototype.setEmpty = function() {
      this.xMin = this.yMin = this.xMax = this.yMax = 0;
    };
    f.prototype.setToSentinels = function() {
      this.xMin = this.yMin = this.xMax = this.yMax = 134217728;
    };
    f.prototype.clone = function() {
      return new f(this.xMin, this.yMin, this.xMax, this.yMax);
    };
    f.prototype.toString = function() {
      return "{ xMin: " + this.xMin + ", xMin: " + this.yMin + ", xMax: " + this.xMax + ", xMax: " + this.yMax + " }";
    };
    return f;
  }();
  m.Bounds = a;
  a = function() {
    function f(d, e, c, n) {
      v.assert(p(d));
      v.assert(p(e));
      v.assert(p(c));
      v.assert(p(n));
      this._xMin = d | 0;
      this._yMin = e | 0;
      this._xMax = c | 0;
      this._yMax = n | 0;
    }
    f.FromUntyped = function(d) {
      return new f(d.xMin, d.yMin, d.xMax, d.yMax);
    };
    f.FromRectangle = function(d) {
      return new f(20 * d.x | 0, 20 * d.y | 0, 20 * (d.x + d.width) | 0, 20 * (d.y + d.height) | 0);
    };
    f.prototype.setElements = function(d, e, c, n) {
      this.xMin = d;
      this.yMin = e;
      this.xMax = c;
      this.yMax = n;
    };
    f.prototype.copyFrom = function(d) {
      this.setElements(d.xMin, d.yMin, d.xMax, d.yMax);
    };
    f.prototype.contains = function(d, e) {
      return d < this.xMin !== d < this.xMax && e < this.yMin !== e < this.yMax;
    };
    f.prototype.unionInPlace = function(d) {
      d.isEmpty() || (this.extendByPoint(d.xMin, d.yMin), this.extendByPoint(d.xMax, d.yMax));
    };
    f.prototype.extendByPoint = function(d, e) {
      this.extendByX(d);
      this.extendByY(e);
    };
    f.prototype.extendByX = function(d) {
      134217728 === this.xMin ? this.xMin = this.xMax = d : (this.xMin = Math.min(this.xMin, d), this.xMax = Math.max(this.xMax, d));
    };
    f.prototype.extendByY = function(d) {
      134217728 === this.yMin ? this.yMin = this.yMax = d : (this.yMin = Math.min(this.yMin, d), this.yMax = Math.max(this.yMax, d));
    };
    f.prototype.intersects = function(d) {
      return this.contains(d._xMin, d._yMin) || this.contains(d._xMax, d._yMax);
    };
    f.prototype.isEmpty = function() {
      return this._xMax <= this._xMin || this._yMax <= this._yMin;
    };
    Object.defineProperty(f.prototype, "xMin", {get:function() {
      return this._xMin;
    }, set:function(d) {
      v.assert(p(d));
      this._xMin = d;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(f.prototype, "yMin", {get:function() {
      return this._yMin;
    }, set:function(d) {
      v.assert(p(d));
      this._yMin = d | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(f.prototype, "xMax", {get:function() {
      return this._xMax;
    }, set:function(d) {
      v.assert(p(d));
      this._xMax = d | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(f.prototype, "width", {get:function() {
      return this._xMax - this._xMin;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(f.prototype, "yMax", {get:function() {
      return this._yMax;
    }, set:function(d) {
      v.assert(p(d));
      this._yMax = d | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(f.prototype, "height", {get:function() {
      return this._yMax - this._yMin;
    }, enumerable:!0, configurable:!0});
    f.prototype.getBaseWidth = function(d) {
      return Math.abs(Math.cos(d)) * (this._xMax - this._xMin) + Math.abs(Math.sin(d)) * (this._yMax - this._yMin);
    };
    f.prototype.getBaseHeight = function(d) {
      return Math.abs(Math.sin(d)) * (this._xMax - this._xMin) + Math.abs(Math.cos(d)) * (this._yMax - this._yMin);
    };
    f.prototype.setEmpty = function() {
      this._xMin = this._yMin = this._xMax = this._yMax = 0;
    };
    f.prototype.clone = function() {
      return new f(this.xMin, this.yMin, this.xMax, this.yMax);
    };
    f.prototype.toString = function() {
      return "{ xMin: " + this._xMin + ", yMin: " + this._yMin + ", xMax: " + this._xMax + ", yMax: " + this._yMax + " }";
    };
    f.prototype.assertValid = function() {
    };
    return f;
  }();
  m.DebugBounds = a;
  a = function() {
    function f(d, e, c, n) {
      this.r = d;
      this.g = e;
      this.b = c;
      this.a = n;
    }
    f.FromARGB = function(d) {
      return new f((d >> 16 & 255) / 255, (d >> 8 & 255) / 255, (d >> 0 & 255) / 255, (d >> 24 & 255) / 255);
    };
    f.FromRGBA = function(d) {
      return f.FromARGB(l.RGBAToARGB(d));
    };
    f.prototype.toRGBA = function() {
      return 255 * this.r << 24 | 255 * this.g << 16 | 255 * this.b << 8 | 255 * this.a;
    };
    f.prototype.toCSSStyle = function() {
      return l.rgbaToCSSStyle(this.toRGBA());
    };
    f.prototype.set = function(d) {
      this.r = d.r;
      this.g = d.g;
      this.b = d.b;
      this.a = d.a;
    };
    f.randomColor = function() {
      var d = .4;
      void 0 === d && (d = 1);
      return new f(Math.random(), Math.random(), Math.random(), d);
    };
    f.parseColor = function(d) {
      f.colorCache || (f.colorCache = Object.create(null));
      if (f.colorCache[d]) {
        return f.colorCache[d];
      }
      var e = document.createElement("span");
      document.body.appendChild(e);
      e.style.backgroundColor = d;
      var c = getComputedStyle(e).backgroundColor;
      document.body.removeChild(e);
      (e = /^rgb\((\d+), (\d+), (\d+)\)$/.exec(c)) || (e = /^rgba\((\d+), (\d+), (\d+), ([\d.]+)\)$/.exec(c));
      c = new f(0, 0, 0, 0);
      c.r = parseFloat(e[1]) / 255;
      c.g = parseFloat(e[2]) / 255;
      c.b = parseFloat(e[3]) / 255;
      c.a = e[4] ? parseFloat(e[4]) / 255 : 1;
      return f.colorCache[d] = c;
    };
    f.Red = new f(1, 0, 0, 1);
    f.Green = new f(0, 1, 0, 1);
    f.Blue = new f(0, 0, 1, 1);
    f.None = new f(0, 0, 0, 0);
    f.White = new f(1, 1, 1, 1);
    f.Black = new f(0, 0, 0, 1);
    f.colorCache = {};
    return f;
  }();
  m.Color = a;
  var l;
  (function(f) {
    function d(c) {
      var e, d, f = c >> 24 & 255;
      d = (Math.imul(c >> 16 & 255, f) + 127) / 255 | 0;
      e = (Math.imul(c >> 8 & 255, f) + 127) / 255 | 0;
      c = (Math.imul(c >> 0 & 255, f) + 127) / 255 | 0;
      return f << 24 | d << 16 | e << 8 | c;
    }
    f.RGBAToARGB = function(c) {
      return c >> 8 & 16777215 | (c & 255) << 24;
    };
    f.ARGBToRGBA = function(c) {
      return c << 8 | c >> 24 & 255;
    };
    f.rgbaToCSSStyle = function(c) {
      return m.StringUtilities.concat9("rgba(", c >> 24 & 255, ",", c >> 16 & 255, ",", c >> 8 & 255, ",", (c & 255) / 255, ")");
    };
    f.cssStyleToRGBA = function(c) {
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
    f.hexToRGB = function(c) {
      return parseInt(c.slice(1), 16);
    };
    f.rgbToHex = function(c) {
      return "#" + ("000000" + (c >>> 0).toString(16)).slice(-6);
    };
    f.isValidHexColor = function(c) {
      return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(c);
    };
    f.clampByte = function(c) {
      return Math.max(0, Math.min(255, c));
    };
    f.unpremultiplyARGB = function(c) {
      var e, d, f = c >> 24 & 255;
      d = Math.imul(255, c >> 16 & 255) / f & 255;
      e = Math.imul(255, c >> 8 & 255) / f & 255;
      c = Math.imul(255, c >> 0 & 255) / f & 255;
      return f << 24 | d << 16 | e << 8 | c;
    };
    f.premultiplyARGB = d;
    var e;
    f.ensureUnpremultiplyTable = function() {
      if (!e) {
        e = new Uint8Array(65536);
        for (var c = 0;256 > c;c++) {
          for (var d = 0;256 > d;d++) {
            e[(d << 8) + c] = Math.imul(255, c) / d;
          }
        }
      }
    };
    f.tableLookupUnpremultiplyARGB = function(c) {
      c |= 0;
      var d = c >> 24 & 255;
      if (0 === d) {
        return 0;
      }
      if (255 === d) {
        return c;
      }
      var f, a, h = d << 8, l = e;
      a = l[h + (c >> 16 & 255)];
      f = l[h + (c >> 8 & 255)];
      c = l[h + (c >> 0 & 255)];
      return d << 24 | a << 16 | f << 8 | c;
    };
    f.blendPremultipliedBGRA = function(c, e) {
      var d, f;
      f = 256 - (e & 255);
      d = Math.imul(c & 16711935, f) >> 8;
      f = Math.imul(c >> 8 & 16711935, f) >> 8;
      return ((e >> 8 & 16711935) + f & 16711935) << 8 | (e & 16711935) + d & 16711935;
    };
    var c = t.swap32;
    f.convertImage = function(n, f, a, h) {
      var l = a.length;
      if (n === f) {
        if (a !== h) {
          for (n = 0;n < l;n++) {
            h[n] = a[n];
          }
        }
      } else {
        if (1 === n && 3 === f) {
          for (m.ColorUtilities.ensureUnpremultiplyTable(), n = 0;n < l;n++) {
            var k = a[n];
            f = k & 255;
            if (0 === f) {
              h[n] = 0;
            } else {
              if (255 === f) {
                h[n] = 4278190080 | k >> 8 & 16777215;
              } else {
                var u = k >> 24 & 255, b = k >> 16 & 255, k = k >> 8 & 255, t = f << 8, r = e, k = r[t + k], b = r[t + b], u = r[t + u];
                h[n] = f << 24 | u << 16 | b << 8 | k;
              }
            }
          }
        } else {
          if (2 === n && 3 === f) {
            for (n = 0;n < l;n++) {
              h[n] = c(a[n]);
            }
          } else {
            if (3 === n && 1 === f) {
              for (n = 0;n < l;n++) {
                f = a[n], h[n] = c(d(f & 4278255360 | f >> 16 & 255 | (f & 255) << 16));
              }
            } else {
              for (v.somewhatImplemented("Image Format Conversion: " + q[n] + " -> " + q[f]), n = 0;n < l;n++) {
                h[n] = a[n];
              }
            }
          }
        }
      }
    };
  })(l = m.ColorUtilities || (m.ColorUtilities = {}));
  a = function() {
    function f(d) {
      void 0 === d && (d = 32);
      this._list = [];
      this._maxSize = d;
    }
    f.prototype.acquire = function(d) {
      if (f._enabled) {
        for (var e = this._list, c = 0;c < e.length;c++) {
          var n = e[c];
          if (n.byteLength >= d) {
            return e.splice(c, 1), n;
          }
        }
      }
      return new ArrayBuffer(d);
    };
    f.prototype.release = function(d) {
      if (f._enabled) {
        var e = this._list;
        e.length === this._maxSize && e.shift();
        e.push(d);
      }
    };
    f.prototype.ensureUint8ArrayLength = function(d, e) {
      if (d.length >= e) {
        return d;
      }
      var c = Math.max(d.length + e, (3 * d.length >> 1) + 1), c = new Uint8Array(this.acquire(c), 0, c);
      c.set(d);
      this.release(d.buffer);
      return c;
    };
    f.prototype.ensureFloat64ArrayLength = function(d, e) {
      if (d.length >= e) {
        return d;
      }
      var c = Math.max(d.length + e, (3 * d.length >> 1) + 1), c = new Float64Array(this.acquire(c * Float64Array.BYTES_PER_ELEMENT), 0, c);
      c.set(d);
      this.release(d.buffer);
      return c;
    };
    f._enabled = !0;
    return f;
  }();
  m.ArrayBufferPool = a;
  (function(f) {
    (function(d) {
      d[d.EXTERNAL_INTERFACE_FEATURE = 1] = "EXTERNAL_INTERFACE_FEATURE";
      d[d.CLIPBOARD_FEATURE = 2] = "CLIPBOARD_FEATURE";
      d[d.SHAREDOBJECT_FEATURE = 3] = "SHAREDOBJECT_FEATURE";
      d[d.VIDEO_FEATURE = 4] = "VIDEO_FEATURE";
      d[d.SOUND_FEATURE = 5] = "SOUND_FEATURE";
      d[d.NETCONNECTION_FEATURE = 6] = "NETCONNECTION_FEATURE";
    })(f.Feature || (f.Feature = {}));
    (function(d) {
      d[d.AVM1_ERROR = 1] = "AVM1_ERROR";
      d[d.AVM2_ERROR = 2] = "AVM2_ERROR";
    })(f.ErrorTypes || (f.ErrorTypes = {}));
    f.instance;
  })(m.Telemetry || (m.Telemetry = {}));
  (function(f) {
    f.instance;
  })(m.FileLoadingService || (m.FileLoadingService = {}));
  (function(f) {
    f[f.BuiltinAbc = 0] = "BuiltinAbc";
    f[f.PlayerglobalAbcs = 1] = "PlayerglobalAbcs";
    f[f.PlayerglobalManifest = 2] = "PlayerglobalManifest";
    f[f.ShellAbc = 3] = "ShellAbc";
  })(m.SystemResourceId || (m.SystemResourceId = {}));
  (function(f) {
    f.instance;
  })(m.SystemResourcesLoadingService || (m.SystemResourcesLoadingService = {}));
  m.registerCSSFont = function(f, d, e) {
    if (inBrowser) {
      var c = document.head;
      c.insertBefore(document.createElement("style"), c.firstChild);
      c = document.styleSheets[0];
      d = "@font-face{font-family:swffont" + f + ";src:url(data:font/opentype;base64," + m.StringUtilities.base64ArrayBuffer(d.buffer) + ")}";
      c.insertRule(d, c.cssRules.length);
      e && (e = document.createElement("div"), e.style.fontFamily = "swffont" + f, e.innerHTML = "hello", document.body.appendChild(e), document.body.removeChild(e));
    } else {
      v.warning("Cannot register CSS font outside the browser");
    }
  };
  (function(f) {
    f.instance = {enabled:!1, initJS:function(d) {
    }, registerCallback:function(d) {
    }, unregisterCallback:function(d) {
    }, eval:function(d) {
    }, call:function(d) {
    }, getId:function() {
      return null;
    }};
  })(m.ExternalInterfaceService || (m.ExternalInterfaceService = {}));
  (function(f) {
    f.instance = {setClipboard:function(d) {
    }};
  })(m.ClipboardService || (m.ClipboardService = {}));
  a = function() {
    function f() {
      this._queues = {};
    }
    f.prototype.register = function(d, e) {
      v.assert(d);
      v.assert(e);
      var c = this._queues[d];
      if (c) {
        if (-1 < c.indexOf(e)) {
          return;
        }
      } else {
        c = this._queues[d] = [];
      }
      c.push(e);
    };
    f.prototype.unregister = function(d, e) {
      v.assert(d);
      v.assert(e);
      var c = this._queues[d];
      if (c) {
        var n = c.indexOf(e);
        -1 !== n && c.splice(n, 1);
        0 === c.length && (this._queues[d] = null);
      }
    };
    f.prototype.notify = function(d, e) {
      var c = this._queues[d];
      if (c) {
        c = c.slice();
        e = Array.prototype.slice.call(arguments, 0);
        for (var n = 0;n < c.length;n++) {
          c[n].apply(null, e);
        }
      }
    };
    f.prototype.notify1 = function(d, e) {
      var c = this._queues[d];
      if (c) {
        for (var c = c.slice(), n = 0;n < c.length;n++) {
          (0,c[n])(d, e);
        }
      }
    };
    return f;
  }();
  m.Callback = a;
  (function(f) {
    f[f.None = 0] = "None";
    f[f.PremultipliedAlphaARGB = 1] = "PremultipliedAlphaARGB";
    f[f.StraightAlphaARGB = 2] = "StraightAlphaARGB";
    f[f.StraightAlphaRGBA = 3] = "StraightAlphaRGBA";
    f[f.JPEG = 4] = "JPEG";
    f[f.PNG = 5] = "PNG";
    f[f.GIF = 6] = "GIF";
  })(m.ImageType || (m.ImageType = {}));
  var q = m.ImageType;
  m.getMIMETypeForImageType = function(f) {
    switch(f) {
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
  (function(f) {
    f.toCSSCursor = function(d) {
      switch(d) {
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
  })(m.UI || (m.UI = {}));
  a = function() {
    function f() {
      this.promise = new Promise(function(d, e) {
        this.resolve = d;
        this.reject = e;
      }.bind(this));
    }
    f.prototype.then = function(d, e) {
      return this.promise.then(d, e);
    };
    return f;
  }();
  m.PromiseWrapper = a;
})(Shumway || (Shumway = {}));
(function() {
  function m(c) {
    if ("function" !== typeof c) {
      throw new TypeError("Invalid deferred constructor");
    }
    var e = r();
    c = new c(e);
    var d = e.resolve;
    if ("function" !== typeof d) {
      throw new TypeError("Invalid resolve construction function");
    }
    e = e.reject;
    if ("function" !== typeof e) {
      throw new TypeError("Invalid reject construction function");
    }
    return {promise:c, resolve:d, reject:e};
  }
  function p(c, e) {
    if ("object" !== typeof c || null === c) {
      return !1;
    }
    try {
      var d = c.then;
      if ("function" !== typeof d) {
        return !1;
      }
      d.call(c, e.resolve, e.reject);
    } catch (f) {
      d = e.reject, d(f);
    }
    return !0;
  }
  function g(c) {
    return "object" === typeof c && null !== c && "undefined" !== typeof c.promiseStatus;
  }
  function b(c, e) {
    if ("unresolved" === c.promiseStatus) {
      var d = c.rejectReactions;
      c.result = e;
      c.resolveReactions = void 0;
      c.rejectReactions = void 0;
      c.promiseStatus = "has-rejection";
      w(d, e);
    }
  }
  function w(c, e) {
    for (var d = 0;d < c.length;d++) {
      v({reaction:c[d], argument:e});
    }
  }
  function v(c) {
    0 === e.length && setTimeout(a, 0);
    e.push(c);
  }
  function a() {
    for (;0 < e.length;) {
      var c = e[0];
      try {
        a: {
          var n = c.reaction, d = n.deferred, a = n.handler, h = void 0, l = void 0;
          try {
            h = a(c.argument);
          } catch (k) {
            var q = d.reject;
            q(k);
            break a;
          }
          if (h === d.promise) {
            q = d.reject, q(new TypeError("Self resolution"));
          } else {
            try {
              if (l = p(h, d), !l) {
                var u = d.resolve;
                u(h);
              }
            } catch (b) {
              q = d.reject, q(b);
            }
          }
        }
      } catch (t) {
        if ("function" === typeof f.onerror) {
          f.onerror(t);
        }
      }
      e.shift();
    }
  }
  function h(c) {
    throw c;
  }
  function u(c) {
    return c;
  }
  function k(c) {
    return function(e) {
      b(c, e);
    };
  }
  function t(c) {
    return function(e) {
      if ("unresolved" === c.promiseStatus) {
        var d = c.resolveReactions;
        c.result = e;
        c.resolveReactions = void 0;
        c.rejectReactions = void 0;
        c.promiseStatus = "has-resolution";
        w(d, e);
      }
    };
  }
  function r() {
    function c(e, d) {
      c.resolve = e;
      c.reject = d;
    }
    return c;
  }
  function l(c, e, d) {
    return function(f) {
      if (f === c) {
        return d(new TypeError("Self resolution"));
      }
      var a = c.promiseConstructor;
      if (g(f) && f.promiseConstructor === a) {
        return f.then(e, d);
      }
      a = m(a);
      return p(f, a) ? a.promise.then(e, d) : e(f);
    };
  }
  function q(c, e, d, f) {
    return function(a) {
      e[c] = a;
      f.countdown--;
      0 === f.countdown && d.resolve(e);
    };
  }
  function f(c) {
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
    var e = t(this), d = k(this);
    try {
      c(e, d);
    } catch (a) {
      b(this, a);
    }
    this.promiseConstructor = f;
    return this;
  }
  var d = Function("return this")();
  if (d.Promise) {
    "function" !== typeof d.Promise.all && (d.Promise.all = function(c) {
      var e = 0, f = [], a, h, l = new d.Promise(function(c, e) {
        a = c;
        h = e;
      });
      c.forEach(function(c, d) {
        e++;
        c.then(function(c) {
          f[d] = c;
          e--;
          0 === e && a(f);
        }, h);
      });
      0 === e && a(f);
      return l;
    }), "function" !== typeof d.Promise.resolve && (d.Promise.resolve = function(c) {
      return new d.Promise(function(e) {
        e(c);
      });
    });
  } else {
    var e = [];
    f.all = function(c) {
      var e = m(this), d = [], f = {countdown:0}, a = 0;
      c.forEach(function(c) {
        this.cast(c).then(q(a, d, e, f), e.reject);
        a++;
        f.countdown++;
      }, this);
      0 === a && e.resolve(d);
      return e.promise;
    };
    f.cast = function(c) {
      if (g(c)) {
        return c;
      }
      var e = m(this);
      e.resolve(c);
      return e.promise;
    };
    f.reject = function(c) {
      var e = m(this);
      e.reject(c);
      return e.promise;
    };
    f.resolve = function(c) {
      var e = m(this);
      e.resolve(c);
      return e.promise;
    };
    f.prototype = {"catch":function(c) {
      this.then(void 0, c);
    }, then:function(c, e) {
      if (!g(this)) {
        throw new TypeError("this is not a Promises");
      }
      var d = m(this.promiseConstructor), f = "function" === typeof e ? e : h, a = {deferred:d, handler:l(this, "function" === typeof c ? c : u, f)}, f = {deferred:d, handler:f};
      switch(this.promiseStatus) {
        case "unresolved":
          this.resolveReactions.push(a);
          this.rejectReactions.push(f);
          break;
        case "has-resolution":
          v({reaction:a, argument:this.result});
          break;
        case "has-rejection":
          v({reaction:f, argument:this.result});
      }
      return d.promise;
    }};
    d.Promise = f;
  }
})();
"undefined" !== typeof exports && (exports.Shumway = Shumway);
(function() {
  function m(m, g, b) {
    m[g] || Object.defineProperty(m, g, {value:b, writable:!0, configurable:!0, enumerable:!1});
  }
  m(String.prototype, "padRight", function(m, g) {
    var b = this, w = b.replace(/\033\[[0-9]*m/g, "").length;
    if (!m || w >= g) {
      return b;
    }
    for (var w = (g - w) / m.length, v = 0;v < w;v++) {
      b += m;
    }
    return b;
  });
  m(String.prototype, "padLeft", function(m, g) {
    var b = this, w = b.length;
    if (!m || w >= g) {
      return b;
    }
    for (var w = (g - w) / m.length, v = 0;v < w;v++) {
      b = m + b;
    }
    return b;
  });
  m(String.prototype, "trim", function() {
    return this.replace(/^\s+|\s+$/g, "");
  });
  m(String.prototype, "endsWith", function(m) {
    return -1 !== this.indexOf(m, this.length - m.length);
  });
  m(Array.prototype, "replace", function(m, g) {
    if (m === g) {
      return 0;
    }
    for (var b = 0, w = 0;w < this.length;w++) {
      this[w] === m && (this[w] = g, b++);
    }
    return b;
  });
})();
(function(m) {
  (function(p) {
    var g = m.isObject, b = function() {
      function a(h, k, b, r) {
        this.shortName = h;
        this.longName = k;
        this.type = b;
        r = r || {};
        this.positional = r.positional;
        this.parseFn = r.parse;
        this.value = r.defaultValue;
      }
      a.prototype.parse = function(a) {
        this.value = "boolean" === this.type ? a : "number" === this.type ? parseInt(a, 10) : a;
        this.parseFn && this.parseFn(this.value);
      };
      return a;
    }();
    p.Argument = b;
    var w = function() {
      function a() {
        this.args = [];
      }
      a.prototype.addArgument = function(a, h, t, r) {
        a = new b(a, h, t, r);
        this.args.push(a);
        return a;
      };
      a.prototype.addBoundOption = function(a) {
        this.args.push(new b(a.shortName, a.longName, a.type, {parse:function(h) {
          a.value = h;
        }}));
      };
      a.prototype.addBoundOptionSet = function(a) {
        var h = this;
        a.options.forEach(function(a) {
          v.isOptionSet(a) ? h.addBoundOptionSet(a) : h.addBoundOption(a);
        });
      };
      a.prototype.getUsage = function() {
        var a = "";
        this.args.forEach(function(h) {
          a = h.positional ? a + h.longName : a + ("[-" + h.shortName + "|--" + h.longName + ("boolean" === h.type ? "" : " " + h.type[0].toUpperCase()) + "]");
          a += " ";
        });
        return a;
      };
      a.prototype.parse = function(a) {
        var h = {}, b = [];
        this.args.forEach(function(d) {
          d.positional ? b.push(d) : (h["-" + d.shortName] = d, h["--" + d.longName] = d);
        });
        for (var r = [];a.length;) {
          var l = a.shift(), q = null, f = l;
          if ("--" == l) {
            r = r.concat(a);
            break;
          } else {
            if ("-" == l.slice(0, 1) || "--" == l.slice(0, 2)) {
              q = h[l];
              if (!q) {
                continue;
              }
              f = "boolean" !== q.type ? a.shift() : !0;
            } else {
              b.length ? q = b.shift() : r.push(f);
            }
          }
          q && q.parse(f);
        }
        return r;
      };
      return a;
    }();
    p.ArgumentParser = w;
    var v = function() {
      function h(a, h) {
        void 0 === h && (h = null);
        this.open = !1;
        this.name = a;
        this.settings = h || {};
        this.options = [];
      }
      h.isOptionSet = function(u) {
        return u instanceof h ? !0 : "object" !== typeof u || null === u || u instanceof a ? !1 : "options" in u && "name" in u && "settings" in u;
      };
      h.prototype.register = function(a) {
        if (h.isOptionSet(a)) {
          for (var k = 0;k < this.options.length;k++) {
            var b = this.options[k];
            if (h.isOptionSet(b) && b.name === a.name) {
              return b;
            }
          }
        }
        this.options.push(a);
        if (this.settings) {
          if (h.isOptionSet(a)) {
            k = this.settings[a.name], g(k) && (a.settings = k.settings, a.open = k.open);
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
      h.prototype.trace = function(a) {
        a.enter(this.name + " {");
        this.options.forEach(function(h) {
          h.trace(a);
        });
        a.leave("}");
      };
      h.prototype.getSettings = function() {
        var a = {};
        this.options.forEach(function(k) {
          h.isOptionSet(k) ? a[k.name] = {settings:k.getSettings(), open:k.open} : a[k.longName] = k.value;
        });
        return a;
      };
      h.prototype.setSettings = function(a) {
        a && this.options.forEach(function(k) {
          h.isOptionSet(k) ? k.name in a && k.setSettings(a[k.name].settings) : k.longName in a && (k.value = a[k.longName]);
        });
      };
      return h;
    }();
    p.OptionSet = v;
    var a = function() {
      function a(h, k, b, r, l, q) {
        void 0 === q && (q = null);
        this.longName = k;
        this.shortName = h;
        this.type = b;
        this.value = this.defaultValue = r;
        this.description = l;
        this.config = q;
      }
      a.prototype.parse = function(a) {
        this.value = a;
      };
      a.prototype.trace = function(a) {
        a.writeLn(("-" + this.shortName + "|--" + this.longName).padRight(" ", 30) + " = " + this.type + " " + this.value + " [" + this.defaultValue + "] (" + this.description + ")");
      };
      return a;
    }();
    p.Option = a;
  })(m.Options || (m.Options = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(g) {
    g.ROOT = "Shumway Options";
    g.shumwayOptions = new m.Options.OptionSet(g.ROOT);
    g.setSettings = function(b) {
      g.shumwayOptions.setSettings(b);
    };
    g.getSettings = function() {
      return g.shumwayOptions.getSettings();
    };
  })(m.Settings || (m.Settings = {}));
  var p = m.Options.Option;
  m.loggingOptions = m.Settings.shumwayOptions.register(new m.Options.OptionSet("Logging Options"));
  m.omitRepeatedWarnings = m.loggingOptions.register(new p("wo", "warnOnce", "boolean", !0, "Omit Repeated Warnings"));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(p) {
    var g = function() {
      function b(b, v) {
        this._parent = b;
        this._timers = m.ObjectUtilities.createMap();
        this._name = v;
        this._count = this._total = this._last = this._begin = 0;
      }
      b.time = function(g, v) {
        b.start(g);
        v();
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
        this._begin = m.getTicks();
      };
      b.prototype.stop = function() {
        this._last = m.getTicks() - this._begin;
        this._total += this._last;
        this._count += 1;
      };
      b.prototype.toJSON = function() {
        return {name:this._name, total:this._total, timers:this._timers};
      };
      b.prototype.trace = function(b) {
        b.enter(this._name + ": " + this._total.toFixed(2) + " ms, count: " + this._count + ", average: " + (this._total / this._count).toFixed(2) + " ms");
        for (var v in this._timers) {
          this._timers[v].trace(b);
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
    p.Timer = g;
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
        this._counts = m.ObjectUtilities.createMap();
        this._times = m.ObjectUtilities.createMap();
      };
      b.prototype.toJSON = function() {
        return {counts:this._counts, times:this._times};
      };
      b.prototype.count = function(b, v, a) {
        void 0 === v && (v = 1);
        void 0 === a && (a = 0);
        if (this._enabled) {
          return void 0 === this._counts[b] && (this._counts[b] = 0, this._times[b] = 0), this._counts[b] += v, this._times[b] += a, this._counts[b];
        }
      };
      b.prototype.trace = function(b) {
        for (var v in this._counts) {
          b.writeLn(v + ": " + this._counts[v]);
        }
      };
      b.prototype._pairToString = function(b, v) {
        var a = v[0], h = v[1], u = b[a], a = a + ": " + h;
        u && (a += ", " + u.toFixed(4), 1 < h && (a += " (" + (u / h).toFixed(4) + ")"));
        return a;
      };
      b.prototype.toStringSorted = function() {
        var b = this, v = this._times, a = [], h;
        for (h in this._counts) {
          a.push([h, this._counts[h]]);
        }
        a.sort(function(a, h) {
          return h[1] - a[1];
        });
        return a.map(function(a) {
          return b._pairToString(v, a);
        }).join(", ");
      };
      b.prototype.traceSorted = function(b, v) {
        void 0 === v && (v = !1);
        var a = this, h = this._times, u = [], k;
        for (k in this._counts) {
          u.push([k, this._counts[k]]);
        }
        u.sort(function(a, h) {
          return h[1] - a[1];
        });
        v ? b.writeLn(u.map(function(k) {
          return a._pairToString(h, k);
        }).join(", ")) : u.forEach(function(k) {
          b.writeLn(a._pairToString(h, k));
        });
      };
      b.instance = new b(!0);
      return b;
    }();
    p.Counter = g;
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
        for (var b = 0, v = 0;v < this._count;v++) {
          b += this._samples[v];
        }
        return b / this._count;
      };
      return b;
    }();
    p.Average = g;
  })(m.Metrics || (m.Metrics = {}));
})(Shumway || (Shumway = {}));
var __extends = this.__extends || function(m, p) {
  function g() {
    this.constructor = m;
  }
  for (var b in p) {
    p.hasOwnProperty(b) && (m[b] = p[b]);
  }
  g.prototype = p.prototype;
  m.prototype = new g;
};
(function(m) {
  (function(m) {
    function g(e) {
      for (var c = Math.max.apply(null, e), n = e.length, d = 1 << c, f = new Uint32Array(d), a = c << 16 | 65535, h = 0;h < d;h++) {
        f[h] = a;
      }
      for (var a = 0, h = 1, l = 2;h <= c;a <<= 1, ++h, l <<= 1) {
        for (var q = 0;q < n;++q) {
          if (e[q] === h) {
            for (var k = 0, b = 0;b < h;++b) {
              k = 2 * k + (a >> b & 1);
            }
            for (b = k;b < d;b += l) {
              f[b] = h << 16 | q;
            }
            ++a;
          }
        }
      }
      return {codes:f, maxBits:c};
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
        return "undefined" !== typeof ShumwayCom && ShumwayCom.createSpecialInflate ? new q(c, ShumwayCom.createSpecialInflate) : new w(c);
      };
      e.prototype._processZLibHeader = function(c, e, d) {
        if (e + 2 > d) {
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
      e.inflate = function(c, n, d) {
        var f = new Uint8Array(n), a = 0;
        n = e.create(d);
        n.onData = function(c) {
          var e = Math.min(c.length, f.length - a);
          e && m.memCopy(f, c, a, 0, e);
          a += e;
        };
        n.onError = function(c) {
          throw Error(c);
        };
        n.push(c);
        n.close();
        return f;
      };
      return e;
    }();
    m.Inflate = b;
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
        if (!l) {
          v = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
          a = new Uint16Array(30);
          h = new Uint8Array(30);
          for (var d = c = 0, f = 1;30 > c;++c) {
            a[c] = f, f += 1 << (h[c] = ~~((d += 2 < c ? 1 : 0) / 2));
          }
          var q = new Uint8Array(288);
          for (c = 0;32 > c;++c) {
            q[c] = 5;
          }
          u = g(q.subarray(0, 32));
          k = new Uint16Array(29);
          t = new Uint8Array(29);
          d = c = 0;
          for (f = 3;29 > c;++c) {
            k[c] = f - (28 == c ? 1 : 0), f += 1 << (t[c] = ~~((d += 4 < c ? 1 : 0) / 4 % 6));
          }
          for (c = 0;288 > c;++c) {
            q[c] = 144 > c || 279 < c ? 8 : 256 > c ? 9 : 7;
          }
          r = g(q);
          l = !0;
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
              var d = this._processZLibHeader(this._buffer, this._bufferPosition, this._bufferSize);
              0 < d ? (this._bufferPosition += d, this._state = 0) : 0 === d ? c = !0 : this._state = 6;
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
        var c = this._buffer, e = this._bufferSize, d = this._bitBuffer, f = this._bitLength, a = this._bufferPosition;
        if (3 > (e - a << 3) + f) {
          return !0;
        }
        3 > f && (d |= c[a++] << f, f += 8);
        var h = d & 7, d = d >> 3, f = f - 3;
        switch(h >> 1) {
          case 0:
            f = d = 0;
            if (4 > e - a) {
              return !0;
            }
            var l = c[a] | c[a + 1] << 8, c = c[a + 2] | c[a + 3] << 8, a = a + 4;
            if (65535 !== (l ^ c)) {
              this._error("inflate: invalid block 0 length");
              c = 6;
              break;
            }
            0 === l ? c = 0 : (this._block0Read = l, c = 1);
            break;
          case 1:
            c = 2;
            this._literalTable = r;
            this._distanceTable = u;
            break;
          case 2:
            if (26 > (e - a << 3) + f) {
              return !0;
            }
            for (;14 > f;) {
              d |= c[a++] << f, f += 8;
            }
            l = (d >> 10 & 15) + 4;
            if ((e - a << 3) + f < 14 + 3 * l) {
              return !0;
            }
            for (var e = {numLiteralCodes:(d & 31) + 257, numDistanceCodes:(d >> 5 & 31) + 1, codeLengthTable:void 0, bitLengths:void 0, codesRead:0, dupBits:0}, d = d >> 14, f = f - 14, q = new Uint8Array(19), k = 0;k < l;++k) {
              3 > f && (d |= c[a++] << f, f += 8), q[v[k]] = d & 7, d >>= 3, f -= 3;
            }
            for (;19 > k;k++) {
              q[v[k]] = 0;
            }
            e.bitLengths = new Uint8Array(e.numLiteralCodes + e.numDistanceCodes);
            e.codeLengthTable = g(q);
            this._block2State = e;
            c = 3;
            break;
          default:
            return this._error("inflate: unsupported block type"), !1;
        }
        this._isFinalBlock = !!(h & 1);
        this._state = c;
        this._bufferPosition = a;
        this._bitBuffer = d;
        this._bitLength = f;
        return !1;
      };
      c.prototype._error = function(c) {
        if (this.onError) {
          this.onError(c);
        }
      };
      c.prototype._decodeBlock0 = function() {
        var c = this._bufferPosition, e = this._windowPosition, d = this._block0Read, f = 65794 - e, a = this._bufferSize - c, h = a < d, l = Math.min(f, a, d);
        this._window.set(this._buffer.subarray(c, c + l), e);
        this._windowPosition = e + l;
        this._bufferPosition = c + l;
        this._block0Read = d - l;
        return d === l ? (this._state = 0, !1) : h && f < a;
      };
      c.prototype._readBits = function(c) {
        var e = this._bitBuffer, d = this._bitLength;
        if (c > d) {
          var f = this._bufferPosition, a = this._bufferSize;
          do {
            if (f >= a) {
              return this._bufferPosition = f, this._bitBuffer = e, this._bitLength = d, -1;
            }
            e |= this._buffer[f++] << d;
            d += 8;
          } while (c > d);
          this._bufferPosition = f;
        }
        this._bitBuffer = e >> c;
        this._bitLength = d - c;
        return e & (1 << c) - 1;
      };
      c.prototype._readCode = function(c) {
        var e = this._bitBuffer, d = this._bitLength, f = c.maxBits;
        if (f > d) {
          var a = this._bufferPosition, h = this._bufferSize;
          do {
            if (a >= h) {
              return this._bufferPosition = a, this._bitBuffer = e, this._bitLength = d, -1;
            }
            e |= this._buffer[a++] << d;
            d += 8;
          } while (f > d);
          this._bufferPosition = a;
        }
        c = c.codes[e & (1 << f) - 1];
        f = c >> 16;
        if (c & 32768) {
          return this._error("inflate: invalid encoding"), this._state = 6, -1;
        }
        this._bitBuffer = e >> f;
        this._bitLength = d - f;
        return c & 65535;
      };
      c.prototype._decodeBlock2Pre = function() {
        var c = this._block2State, e = c.numLiteralCodes + c.numDistanceCodes, d = c.bitLengths, f = c.codesRead, a = 0 < f ? d[f - 1] : 0, h = c.codeLengthTable, l;
        if (0 < c.dupBits) {
          l = this._readBits(c.dupBits);
          if (0 > l) {
            return !0;
          }
          for (;l--;) {
            d[f++] = a;
          }
          c.dupBits = 0;
        }
        for (;f < e;) {
          var q = this._readCode(h);
          if (0 > q) {
            return c.codesRead = f, !0;
          }
          if (16 > q) {
            d[f++] = a = q;
          } else {
            var k;
            switch(q) {
              case 16:
                k = 2;
                l = 3;
                q = a;
                break;
              case 17:
                l = k = 3;
                q = 0;
                break;
              case 18:
                k = 7, l = 11, q = 0;
            }
            for (;l--;) {
              d[f++] = q;
            }
            l = this._readBits(k);
            if (0 > l) {
              return c.codesRead = f, c.dupBits = k, !0;
            }
            for (;l--;) {
              d[f++] = q;
            }
            a = q;
          }
        }
        this._literalTable = g(d.subarray(0, c.numLiteralCodes));
        this._distanceTable = g(d.subarray(c.numLiteralCodes));
        this._state = 4;
        this._block2State = null;
        return !1;
      };
      c.prototype._decodeBlock = function() {
        var c = this._literalTable, e = this._distanceTable, d = this._window, f = this._windowPosition, l = this._copyState, q, b, u, r;
        if (0 !== l.state) {
          switch(l.state) {
            case 1:
              if (0 > (q = this._readBits(l.lenBits))) {
                return !0;
              }
              l.len += q;
              l.state = 2;
            case 2:
              if (0 > (q = this._readCode(e))) {
                return !0;
              }
              l.distBits = h[q];
              l.dist = a[q];
              l.state = 3;
            case 3:
              q = 0;
              if (0 < l.distBits && 0 > (q = this._readBits(l.distBits))) {
                return !0;
              }
              r = l.dist + q;
              b = l.len;
              for (q = f - r;b--;) {
                d[f++] = d[q++];
              }
              l.state = 0;
              if (65536 <= f) {
                return this._windowPosition = f, !1;
              }
              break;
          }
        }
        do {
          q = this._readCode(c);
          if (0 > q) {
            return this._windowPosition = f, !0;
          }
          if (256 > q) {
            d[f++] = q;
          } else {
            if (256 < q) {
              this._windowPosition = f;
              q -= 257;
              u = t[q];
              b = k[q];
              q = 0 === u ? 0 : this._readBits(u);
              if (0 > q) {
                return l.state = 1, l.len = b, l.lenBits = u, !0;
              }
              b += q;
              q = this._readCode(e);
              if (0 > q) {
                return l.state = 2, l.len = b, !0;
              }
              u = h[q];
              r = a[q];
              q = 0 === u ? 0 : this._readBits(u);
              if (0 > q) {
                return l.state = 3, l.len = b, l.dist = r, l.distBits = u, !0;
              }
              r += q;
              for (q = f - r;b--;) {
                d[f++] = d[q++];
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
    }(b), v, a, h, u, k, t, r, l = !1, q = function(e) {
      function c(c, d) {
        e.call(this, c);
        this._verifyHeader = c;
        this._specialInflate = d();
        this._specialInflate.setDataCallback(function(c) {
          this.onData(c);
        }.bind(this));
      }
      __extends(c, e);
      c.prototype.push = function(c) {
        if (this._verifyHeader) {
          var e;
          this._buffer ? (e = new Uint8Array(this._buffer.length + c.length), e.set(this._buffer), e.set(c, this._buffer.length), this._buffer = null) : e = new Uint8Array(c);
          var d = this._processZLibHeader(e, 0, e.length);
          if (0 === d) {
            this._buffer = e;
            return;
          }
          this._verifyHeader = !0;
          0 < d && (c = e.subarray(d));
        }
        this._specialInflate.push(c);
      };
      c.prototype.close = function() {
        this._specialInflate && (this._specialInflate.close(), this._specialInflate = null);
      };
      return c;
    }(b), f;
    (function(e) {
      e[e.WRITE = 0] = "WRITE";
      e[e.DONE = 1] = "DONE";
      e[e.ZLIB_HEADER = 2] = "ZLIB_HEADER";
    })(f || (f = {}));
    var d = function() {
      function e() {
        this.a = 1;
        this.b = 0;
      }
      e.prototype.update = function(c, e, d) {
        for (var f = this.a, a = this.b;e < d;++e) {
          f = (f + (c[e] & 255)) % 65521, a = (a + f) % 65521;
        }
        this.a = f;
        this.b = a;
      };
      e.prototype.getChecksum = function() {
        return this.b << 16 | this.a;
      };
      return e;
    }();
    m.Adler32 = d;
    f = function() {
      function e(c) {
        this._state = (this._writeZlibHeader = c) ? 2 : 0;
        this._adler32 = c ? new d : null;
      }
      e.prototype.push = function(c) {
        2 === this._state && (this.onData(new Uint8Array([120, 156])), this._state = 0);
        for (var e = c.length, d = new Uint8Array(e + 5 * Math.ceil(e / 65535)), f = 0, a = 0;65535 < e;) {
          d.set(new Uint8Array([0, 255, 255, 0, 0]), f), f += 5, d.set(c.subarray(a, a + 65535), f), a += 65535, f += 65535, e -= 65535;
        }
        d.set(new Uint8Array([0, e & 255, e >> 8 & 255, ~e & 255, ~e >> 8 & 255]), f);
        d.set(c.subarray(a, e), f + 5);
        this.onData(d);
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
    m.Deflate = f;
  })(m.ArrayUtilities || (m.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(m) {
    function g(c) {
      for (var e = new Uint16Array(c), d = 0;d < c;d++) {
        e[d] = 1024;
      }
      return e;
    }
    function b(c, e, d, f) {
      for (var a = 1, h = 0, l = 0;l < d;l++) {
        var q = f.decodeBit(c, a + e), a = (a << 1) + q, h = h | q << l
      }
      return h;
    }
    function w(c, e) {
      var d = [];
      d.length = e;
      for (var f = 0;f < e;f++) {
        d[f] = new k(c);
      }
      return d;
    }
    var v = function() {
      function c() {
        this.pos = this.available = 0;
        this.buffer = new Uint8Array(2E3);
      }
      c.prototype.append = function(c) {
        var e = this.pos + this.available, d = e + c.length;
        if (d > this.buffer.length) {
          for (var f = 2 * this.buffer.length;f < d;) {
            f *= 2;
          }
          d = new Uint8Array(f);
          d.set(this.buffer);
          this.buffer = d;
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
    }(), h = function() {
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
        for (var d = this.pos, f = this.size, a = this.buf, h = c <= d ? d - c : f - c + d, l = e;0 < l;) {
          for (var q = Math.min(Math.min(l, f - d), f - h), k = 0;k < q;k++) {
            var b = a[h++];
            a[d++] = b;
          }
          d === f && (this.pos = d, this.flush(), d = 0, this.isFull = !0);
          h === f && (h = 0);
          l -= q;
        }
        this.pos = d;
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
        var e = 0, d = this.range, f = this.code;
        do {
          var d = d >>> 1 | 0, f = f - d | 0, a = f >> 31, f = f + (d & a) | 0;
          f === d && (this.corrupted = !0);
          0 <= d && 16777216 > d && (d <<= 8, f = f << 8 | this.inStream.readByte());
          e = (e << 1) + a + 1 | 0;
        } while (--c);
        this.range = d;
        this.code = f;
        return e;
      };
      c.prototype.decodeBit = function(c, e) {
        var d = this.range, f = this.code, a = c[e], h = (d >>> 11) * a;
        f >>> 0 < h ? (a = a + (2048 - a >> 5) | 0, d = h | 0, h = 0) : (a = a - (a >> 5) | 0, f = f - h | 0, d = d - h | 0, h = 1);
        c[e] = a & 65535;
        0 <= d && 16777216 > d && (d <<= 8, f = f << 8 | this.inStream.readByte());
        this.range = d;
        this.code = f;
        return h;
      };
      return c;
    }(), k = function() {
      function c(c) {
        this.numBits = c;
        this.probs = g(1 << c);
      }
      c.prototype.decode = function(c) {
        for (var e = 1, d = 0;d < this.numBits;d++) {
          e = (e << 1) + c.decodeBit(this.probs, e);
        }
        return e - (1 << this.numBits);
      };
      c.prototype.reverseDecode = function(c) {
        return b(this.probs, 0, this.numBits, c);
      };
      return c;
    }(), t = function() {
      function c() {
        this.choice = g(2);
        this.lowCoder = w(3, 16);
        this.midCoder = w(3, 16);
        this.highCoder = new k(8);
      }
      c.prototype.decode = function(c, e) {
        return 0 === c.decodeBit(this.choice, 0) ? this.lowCoder[e].decode(c) : 0 === c.decodeBit(this.choice, 1) ? 8 + this.midCoder[e].decode(c) : 16 + this.highCoder.decode(c);
      };
      return c;
    }(), r = function() {
      function c(c, e) {
        this.rangeDec = new u(c);
        this.outWindow = new h(e);
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
        var d = this.outWindow, f = this.rangeDec, a = 0;
        d.isEmpty() || (a = d.getByte(1));
        var h = 1, a = 768 * (((d.totalPos & (1 << this.lp) - 1) << this.lc) + (a >> 8 - this.lc));
        if (7 <= c) {
          d = d.getByte(e + 1);
          do {
            var l = d >> 7 & 1, d = d << 1, q = f.decodeBit(this.litProbs, a + ((1 + l << 8) + h)), h = h << 1 | q;
            if (l !== q) {
              break;
            }
          } while (256 > h);
        }
        for (;256 > h;) {
          h = h << 1 | f.decodeBit(this.litProbs, a + h);
        }
        return h - 256 & 255;
      };
      c.prototype.decodeDistance = function(c) {
        var e = c;
        3 < e && (e = 3);
        c = this.rangeDec;
        e = this.posSlotDecoder[e].decode(c);
        if (4 > e) {
          return e;
        }
        var d = (e >> 1) - 1, f = (2 | e & 1) << d;
        14 > e ? f = f + b(this.posDecoders, f - e, d, c) | 0 : (f = f + (c.decodeDirectBits(d - 4) << 4) | 0, f = f + this.alignDecoder.reverseDecode(c) | 0);
        return f;
      };
      c.prototype.init = function() {
        this.litProbs = g(768 << this.lc + this.lp);
        this.posSlotDecoder = w(6, 4);
        this.alignDecoder = new k(4);
        this.posDecoders = g(115);
        this.isMatch = g(192);
        this.isRep = g(12);
        this.isRepG0 = g(12);
        this.isRepG1 = g(12);
        this.isRepG2 = g(12);
        this.isRep0Long = g(192);
        this.lenDecoder = new t;
        this.repLenDecoder = new t;
      };
      c.prototype.decode = function(c) {
        for (var e = this.rangeDec, a = this.outWindow, h = this.pb, k = this.dictSize, b = this.markerIsMandatory, u = this.leftToUnpack, r = this.isMatch, t = this.isRep, v = this.isRepG0, g = this.isRepG1, m = this.isRepG2, p = this.isRep0Long, w = this.lenDecoder, z = this.repLenDecoder, A = this.reps[0], C = this.reps[1], y = this.reps[2], F = this.reps[3], B = this.state;;) {
          if (c && 48 > e.inStream.available) {
            this.outWindow.flush();
            break;
          }
          if (0 === u && !b && (this.outWindow.flush(), e.isFinishedOK())) {
            return f;
          }
          var E = a.totalPos & (1 << h) - 1;
          if (0 === e.decodeBit(r, (B << 4) + E)) {
            if (0 === u) {
              return l;
            }
            a.putByte(this.decodeLiteral(B, A));
            B = 4 > B ? 0 : 10 > B ? B - 3 : B - 6;
            u--;
          } else {
            if (0 !== e.decodeBit(t, B)) {
              if (0 === u || a.isEmpty()) {
                return l;
              }
              if (0 === e.decodeBit(v, B)) {
                if (0 === e.decodeBit(p, (B << 4) + E)) {
                  B = 7 > B ? 9 : 11;
                  a.putByte(a.getByte(A + 1));
                  u--;
                  continue;
                }
              } else {
                var H;
                0 === e.decodeBit(g, B) ? H = C : (0 === e.decodeBit(m, B) ? H = y : (H = F, F = y), y = C);
                C = A;
                A = H;
              }
              E = z.decode(e, E);
              B = 7 > B ? 8 : 11;
            } else {
              F = y;
              y = C;
              C = A;
              E = w.decode(e, E);
              B = 7 > B ? 7 : 10;
              A = this.decodeDistance(E);
              if (-1 === A) {
                return this.outWindow.flush(), e.isFinishedOK() ? q : l;
              }
              if (0 === u || A >= k || !a.checkDistance(A)) {
                return l;
              }
            }
            E += 2;
            H = !1;
            void 0 !== u && u < E && (E = u, H = !0);
            a.copyMatch(A + 1, E);
            u -= E;
            if (H) {
              return l;
            }
          }
        }
        this.state = B;
        this.reps[0] = A;
        this.reps[1] = C;
        this.reps[2] = y;
        this.reps[3] = F;
        this.leftToUnpack = u;
        return d;
      };
      c.prototype.flushOutput = function() {
        this.outWindow.flush();
      };
      return c;
    }(), l = 0, q = 1, f = 2, d = 3, e;
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
          var e = this.buffer ? this.buffer.length : 0, f = (1 === this._state ? 17 : 13) + 5;
          if (e + c.length < f) {
            f = new Uint8Array(e + c.length);
            0 < e && f.set(this.buffer);
            f.set(c, e);
            this.buffer = f;
            return;
          }
          var h = new Uint8Array(f);
          0 < e && h.set(this.buffer);
          h.set(c.subarray(0, f - e), e);
          this._inStream = new v;
          this._inStream.append(h.subarray(f - 5));
          this._outStream = new a(function(c) {
            this.onData.call(null, c);
          }.bind(this));
          this._decoder = new r(this._inStream, this._outStream);
          if (1 === this._state) {
            this._decoder.decodeProperties(h.subarray(12, 17)), this._decoder.markerIsMandatory = !1, this._decoder.unpackSize = ((h[4] | h[5] << 8 | h[6] << 16 | h[7] << 24) >>> 0) - 8;
          } else {
            this._decoder.decodeProperties(h.subarray(0, 5));
            for (var e = 0, l = !1, q = 0;8 > q;q++) {
              var k = h[5 + q];
              255 !== k && (l = !0);
              e |= k << 8 * q;
            }
            this._decoder.markerIsMandatory = !l;
            this._decoder.unpackSize = l ? e : void 0;
          }
          this._decoder.create();
          c = c.subarray(f);
          this._state = 2;
        } else {
          if (2 !== this._state) {
            return;
          }
        }
        try {
          this._inStream.append(c);
          var b = this._decoder.decode(!0);
          this._inStream.compact();
          b !== d && this._checkError(b);
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
        c === l ? e = "LZMA decoding error" : c === d ? e = "Decoding is not complete" : c === q ? void 0 !== this._decoder.unpackSize && this._decoder.unpackSize !== this._outStream.processed && (e = "Finished with end marker before than specified size") : e = "Internal LZMA Error";
        e && this._error(e);
      };
      return c;
    }();
    m.LzmaDecoder = e;
  })(m.ArrayUtilities || (m.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(p) {
    function g(a) {
      return "string" === typeof a ? a : void 0 == a ? null : a + "";
    }
    var b = m.Debug.notImplemented, w = m.StringUtilities.utf8decode, v = m.StringUtilities.utf8encode, a = m.NumberUtilities.clamp, h = function() {
      return function(a, h, f) {
        this.buffer = a;
        this.length = h;
        this.littleEndian = f;
      };
    }();
    p.PlainObjectDataBuffer = h;
    for (var u = new Uint32Array(33), k = 1, t = 0;32 >= k;k++) {
      u[k] = t = t << 1 | 1;
    }
    var r;
    (function(a) {
      a[a.U8 = 1] = "U8";
      a[a.I32 = 2] = "I32";
      a[a.F32 = 4] = "F32";
    })(r || (r = {}));
    k = function() {
      function l(a) {
        void 0 === a && (a = l.INITIAL_SIZE);
        this._buffer || (this._buffer = new ArrayBuffer(a), this._position = this._length = 0, this._resetViews(), this._littleEndian = l._nativeLittleEndian, this._bitLength = this._bitBuffer = 0);
      }
      l.FromArrayBuffer = function(a, f) {
        void 0 === f && (f = -1);
        var d = Object.create(l.prototype);
        d._buffer = a;
        d._length = -1 === f ? a.byteLength : f;
        d._position = 0;
        d._resetViews();
        d._littleEndian = l._nativeLittleEndian;
        d._bitBuffer = 0;
        d._bitLength = 0;
        return d;
      };
      l.FromPlainObject = function(a) {
        var f = l.FromArrayBuffer(a.buffer, a.length);
        f._littleEndian = a.littleEndian;
        return f;
      };
      l.prototype.toPlainObject = function() {
        return new h(this._buffer, this._length, this._littleEndian);
      };
      l.prototype._resetViews = function() {
        this._u8 = new Uint8Array(this._buffer);
        this._f32 = this._i32 = null;
      };
      l.prototype._requestViews = function(a) {
        0 === (this._buffer.byteLength & 3) && (null === this._i32 && a & 2 && (this._i32 = new Int32Array(this._buffer)), null === this._f32 && a & 4 && (this._f32 = new Float32Array(this._buffer)));
      };
      l.prototype.getBytes = function() {
        return new Uint8Array(this._buffer, 0, this._length);
      };
      l.prototype._ensureCapacity = function(a) {
        var f = this._buffer;
        if (f.byteLength < a) {
          for (var d = Math.max(f.byteLength, 1);d < a;) {
            d *= 2;
          }
          d = l._arrayBufferPool.acquire(d);
          a = this._u8;
          this._buffer = d;
          this._resetViews();
          this._u8.set(a);
          d = this._u8;
          for (a = a.length;a < d.length;a++) {
            d[a] = 0;
          }
          l._arrayBufferPool.release(f);
        }
      };
      l.prototype.clear = function() {
        this._position = this._length = 0;
      };
      l.prototype.readBoolean = function() {
        return 0 !== this.readUnsignedByte();
      };
      l.prototype.readByte = function() {
        return this.readUnsignedByte() << 24 >> 24;
      };
      l.prototype.readUnsignedByte = function() {
        this._position + 1 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        return this._u8[this._position++];
      };
      l.prototype.readBytes = function(a, f) {
        var d = 0;
        void 0 === d && (d = 0);
        void 0 === f && (f = 0);
        var e = this._position;
        d || (d = 0);
        f || (f = this._length - e);
        e + f > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        a.length < d + f && (a._ensureCapacity(d + f), a.length = d + f);
        a._u8.set(new Uint8Array(this._buffer, e, f), d);
        this._position += f;
      };
      l.prototype.readShort = function() {
        return this.readUnsignedShort() << 16 >> 16;
      };
      l.prototype.readUnsignedShort = function() {
        var a = this._u8, f = this._position;
        f + 2 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var d = a[f + 0], a = a[f + 1];
        this._position = f + 2;
        return this._littleEndian ? a << 8 | d : d << 8 | a;
      };
      l.prototype.readInt = function() {
        var a = this._u8, f = this._position;
        f + 4 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var d = a[f + 0], e = a[f + 1], c = a[f + 2], a = a[f + 3];
        this._position = f + 4;
        return this._littleEndian ? a << 24 | c << 16 | e << 8 | d : d << 24 | e << 16 | c << 8 | a;
      };
      l.prototype.readUnsignedInt = function() {
        return this.readInt() >>> 0;
      };
      l.prototype.readFloat = function() {
        var a = this._position;
        a + 4 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        this._position = a + 4;
        this._requestViews(4);
        if (this._littleEndian && 0 === (a & 3) && this._f32) {
          return this._f32[a >> 2];
        }
        var f = this._u8, d = m.IntegerUtilities.u8;
        this._littleEndian ? (d[0] = f[a + 0], d[1] = f[a + 1], d[2] = f[a + 2], d[3] = f[a + 3]) : (d[3] = f[a + 0], d[2] = f[a + 1], d[1] = f[a + 2], d[0] = f[a + 3]);
        return m.IntegerUtilities.f32[0];
      };
      l.prototype.readDouble = function() {
        var a = this._u8, f = this._position;
        f + 8 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var d = m.IntegerUtilities.u8;
        this._littleEndian ? (d[0] = a[f + 0], d[1] = a[f + 1], d[2] = a[f + 2], d[3] = a[f + 3], d[4] = a[f + 4], d[5] = a[f + 5], d[6] = a[f + 6], d[7] = a[f + 7]) : (d[0] = a[f + 7], d[1] = a[f + 6], d[2] = a[f + 5], d[3] = a[f + 4], d[4] = a[f + 3], d[5] = a[f + 2], d[6] = a[f + 1], d[7] = a[f + 0]);
        this._position = f + 8;
        return m.IntegerUtilities.f64[0];
      };
      l.prototype.writeBoolean = function(a) {
        this.writeByte(a ? 1 : 0);
      };
      l.prototype.writeByte = function(a) {
        var f = this._position + 1;
        this._ensureCapacity(f);
        this._u8[this._position++] = a;
        f > this._length && (this._length = f);
      };
      l.prototype.writeUnsignedByte = function(a) {
        var f = this._position + 1;
        this._ensureCapacity(f);
        this._u8[this._position++] = a;
        f > this._length && (this._length = f);
      };
      l.prototype.writeRawBytes = function(a) {
        var f = this._position + a.length;
        this._ensureCapacity(f);
        this._u8.set(a, this._position);
        this._position = f;
        f > this._length && (this._length = f);
      };
      l.prototype.writeBytes = function(h, f, d) {
        m.isNullOrUndefined(h) && this.sec.throwError("TypeError", Errors.NullPointerError, "bytes");
        f >>>= 0;
        d >>>= 0;
        2 > arguments.length && (f = 0);
        3 > arguments.length && (d = 0);
        f === a(f, 0, h.length) && f + d === a(f + d, 0, h.length) || this.sec.throwError("RangeError", Errors.ParamRangeError);
        0 === d && (d = h.length - f);
        this.writeRawBytes(new Int8Array(h._buffer, f, d));
      };
      l.prototype.writeShort = function(a) {
        this.writeUnsignedShort(a);
      };
      l.prototype.writeUnsignedShort = function(a) {
        var f = this._position;
        this._ensureCapacity(f + 2);
        var d = this._u8;
        this._littleEndian ? (d[f + 0] = a, d[f + 1] = a >> 8) : (d[f + 0] = a >> 8, d[f + 1] = a);
        this._position = f += 2;
        f > this._length && (this._length = f);
      };
      l.prototype.writeInt = function(a) {
        this.writeUnsignedInt(a);
      };
      l.prototype.write2Ints = function(a, f) {
        this.write2UnsignedInts(a, f);
      };
      l.prototype.write4Ints = function(a, f, d, e) {
        this.write4UnsignedInts(a, f, d, e);
      };
      l.prototype.writeUnsignedInt = function(a) {
        var f = this._position;
        this._ensureCapacity(f + 4);
        this._requestViews(2);
        if (this._littleEndian === l._nativeLittleEndian && 0 === (f & 3) && this._i32) {
          this._i32[f >> 2] = a;
        } else {
          var d = this._u8;
          this._littleEndian ? (d[f + 0] = a, d[f + 1] = a >> 8, d[f + 2] = a >> 16, d[f + 3] = a >> 24) : (d[f + 0] = a >> 24, d[f + 1] = a >> 16, d[f + 2] = a >> 8, d[f + 3] = a);
        }
        this._position = f += 4;
        f > this._length && (this._length = f);
      };
      l.prototype.write2UnsignedInts = function(a, f) {
        var d = this._position;
        this._ensureCapacity(d + 8);
        this._requestViews(2);
        this._littleEndian === l._nativeLittleEndian && 0 === (d & 3) && this._i32 ? (this._i32[(d >> 2) + 0] = a, this._i32[(d >> 2) + 1] = f, this._position = d += 8, d > this._length && (this._length = d)) : (this.writeUnsignedInt(a), this.writeUnsignedInt(f));
      };
      l.prototype.write4UnsignedInts = function(a, f, d, e) {
        var c = this._position;
        this._ensureCapacity(c + 16);
        this._requestViews(2);
        this._littleEndian === l._nativeLittleEndian && 0 === (c & 3) && this._i32 ? (this._i32[(c >> 2) + 0] = a, this._i32[(c >> 2) + 1] = f, this._i32[(c >> 2) + 2] = d, this._i32[(c >> 2) + 3] = e, this._position = c += 16, c > this._length && (this._length = c)) : (this.writeUnsignedInt(a), this.writeUnsignedInt(f), this.writeUnsignedInt(d), this.writeUnsignedInt(e));
      };
      l.prototype.writeFloat = function(a) {
        var f = this._position;
        this._ensureCapacity(f + 4);
        this._requestViews(4);
        if (this._littleEndian === l._nativeLittleEndian && 0 === (f & 3) && this._f32) {
          this._f32[f >> 2] = a;
        } else {
          var d = this._u8;
          m.IntegerUtilities.f32[0] = a;
          a = m.IntegerUtilities.u8;
          this._littleEndian ? (d[f + 0] = a[0], d[f + 1] = a[1], d[f + 2] = a[2], d[f + 3] = a[3]) : (d[f + 0] = a[3], d[f + 1] = a[2], d[f + 2] = a[1], d[f + 3] = a[0]);
        }
        this._position = f += 4;
        f > this._length && (this._length = f);
      };
      l.prototype.write6Floats = function(a, f, d, e, c, n) {
        var h = this._position;
        this._ensureCapacity(h + 24);
        this._requestViews(4);
        this._littleEndian === l._nativeLittleEndian && 0 === (h & 3) && this._f32 ? (this._f32[(h >> 2) + 0] = a, this._f32[(h >> 2) + 1] = f, this._f32[(h >> 2) + 2] = d, this._f32[(h >> 2) + 3] = e, this._f32[(h >> 2) + 4] = c, this._f32[(h >> 2) + 5] = n, this._position = h += 24, h > this._length && (this._length = h)) : (this.writeFloat(a), this.writeFloat(f), this.writeFloat(d), this.writeFloat(e), this.writeFloat(c), this.writeFloat(n));
      };
      l.prototype.writeDouble = function(a) {
        var f = this._position;
        this._ensureCapacity(f + 8);
        var d = this._u8;
        m.IntegerUtilities.f64[0] = a;
        a = m.IntegerUtilities.u8;
        this._littleEndian ? (d[f + 0] = a[0], d[f + 1] = a[1], d[f + 2] = a[2], d[f + 3] = a[3], d[f + 4] = a[4], d[f + 5] = a[5], d[f + 6] = a[6], d[f + 7] = a[7]) : (d[f + 0] = a[7], d[f + 1] = a[6], d[f + 2] = a[5], d[f + 3] = a[4], d[f + 4] = a[3], d[f + 5] = a[2], d[f + 6] = a[1], d[f + 7] = a[0]);
        this._position = f += 8;
        f > this._length && (this._length = f);
      };
      l.prototype.readRawBytes = function() {
        return new Int8Array(this._buffer, 0, this._length);
      };
      l.prototype.writeUTF = function(a) {
        a = g(a);
        a = w(a);
        this.writeShort(a.length);
        this.writeRawBytes(a);
      };
      l.prototype.writeUTFBytes = function(a) {
        a = g(a);
        a = w(a);
        this.writeRawBytes(a);
      };
      l.prototype.readUTF = function() {
        return this.readUTFBytes(this.readShort());
      };
      l.prototype.readUTFBytes = function(a) {
        a >>>= 0;
        var f = this._position;
        f + a > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        this._position += a;
        return v(new Int8Array(this._buffer, f, a));
      };
      Object.defineProperty(l.prototype, "length", {get:function() {
        return this._length;
      }, set:function(h) {
        h >>>= 0;
        h > this._buffer.byteLength && this._ensureCapacity(h);
        this._length = h;
        this._position = a(this._position, 0, this._length);
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(l.prototype, "bytesAvailable", {get:function() {
        return this._length - this._position;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(l.prototype, "position", {get:function() {
        return this._position;
      }, set:function(a) {
        this._position = a >>> 0;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(l.prototype, "buffer", {get:function() {
        return this._buffer;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(l.prototype, "bytes", {get:function() {
        return this._u8;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(l.prototype, "ints", {get:function() {
        this._requestViews(2);
        return this._i32;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(l.prototype, "objectEncoding", {get:function() {
        return this._objectEncoding;
      }, set:function(a) {
        this._objectEncoding = a >>> 0;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(l.prototype, "endian", {get:function() {
        return this._littleEndian ? "littleEndian" : "bigEndian";
      }, set:function(a) {
        a = g(a);
        this._littleEndian = "auto" === a ? l._nativeLittleEndian : "littleEndian" === a;
      }, enumerable:!0, configurable:!0});
      l.prototype.toString = function() {
        return v(new Int8Array(this._buffer, 0, this._length));
      };
      l.prototype.toBlob = function(a) {
        return new Blob([new Int8Array(this._buffer, this._position, this._length)], {type:a});
      };
      l.prototype.writeMultiByte = function(a, f) {
        b("packageInternal flash.utils.ObjectOutput::writeMultiByte");
      };
      l.prototype.readMultiByte = function(a, f) {
        b("packageInternal flash.utils.ObjectInput::readMultiByte");
      };
      l.prototype.getValue = function(a) {
        a |= 0;
        return a >= this._length ? void 0 : this._u8[a];
      };
      l.prototype.setValue = function(a, f) {
        a |= 0;
        var d = a + 1;
        this._ensureCapacity(d);
        this._u8[a] = f;
        d > this._length && (this._length = d);
      };
      l.prototype.readFixed = function() {
        return this.readInt() / 65536;
      };
      l.prototype.readFixed8 = function() {
        return this.readShort() / 256;
      };
      l.prototype.readFloat16 = function() {
        var a = this.readUnsignedShort(), f = a >> 15 ? -1 : 1, d = (a & 31744) >> 10, a = a & 1023;
        return d ? 31 === d ? a ? NaN : Infinity * f : f * Math.pow(2, d - 15) * (1 + a / 1024) : a / 1024 * Math.pow(2, -14) * f;
      };
      l.prototype.readEncodedU32 = function() {
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
      l.prototype.readBits = function(a) {
        return this.readUnsignedBits(a) << 32 - a >> 32 - a;
      };
      l.prototype.readUnsignedBits = function(a) {
        for (var f = this._bitBuffer, d = this._bitLength;a > d;) {
          f = f << 8 | this.readUnsignedByte(), d += 8;
        }
        d -= a;
        a = f >>> d & u[a];
        this._bitBuffer = f;
        this._bitLength = d;
        return a;
      };
      l.prototype.readFixedBits = function(a) {
        return this.readBits(a) / 65536;
      };
      l.prototype.readString = function(a) {
        var f = this._position;
        if (a) {
          f + a > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError), this._position += a;
        } else {
          a = 0;
          for (var d = f;d < this._length && this._u8[d];d++) {
            a++;
          }
          this._position += a + 1;
        }
        return v(new Int8Array(this._buffer, f, a));
      };
      l.prototype.align = function() {
        this._bitLength = this._bitBuffer = 0;
      };
      l.prototype.deflate = function() {
        this.compress("deflate");
      };
      l.prototype.inflate = function() {
        this.uncompress("deflate");
      };
      l.prototype.compress = function(a) {
        a = 0 === arguments.length ? "zlib" : g(a);
        var f;
        switch(a) {
          case "zlib":
            f = new p.Deflate(!0);
            break;
          case "deflate":
            f = new p.Deflate(!1);
            break;
          default:
            return;
        }
        var d = new l;
        f.onData = d.writeRawBytes.bind(d);
        f.push(this._u8.subarray(0, this._length));
        f.close();
        this._ensureCapacity(d._u8.length);
        this._u8.set(d._u8);
        this.length = d.length;
        this._position = 0;
      };
      l.prototype.uncompress = function(a) {
        a = 0 === arguments.length ? "zlib" : g(a);
        var f;
        switch(a) {
          case "zlib":
            f = p.Inflate.create(!0);
            break;
          case "deflate":
            f = p.Inflate.create(!1);
            break;
          case "lzma":
            f = new p.LzmaDecoder(!1);
            break;
          default:
            return;
        }
        var d = new l, e;
        f.onData = d.writeRawBytes.bind(d);
        f.onError = function(c) {
          return e = c;
        };
        f.push(this._u8.subarray(0, this._length));
        e && this.sec.throwError("IOError", Errors.CompressedDataError);
        f.close();
        this._ensureCapacity(d._u8.length);
        this._u8.set(d._u8);
        this.length = d.length;
        this._position = 0;
      };
      l._nativeLittleEndian = 1 === (new Int8Array((new Int32Array([1])).buffer))[0];
      l.INITIAL_SIZE = 128;
      l._arrayBufferPool = new m.ArrayBufferPool;
      return l;
    }();
    p.DataBuffer = k;
  })(m.ArrayUtilities || (m.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  var p = m.ArrayUtilities.DataBuffer, g = m.ArrayUtilities.ensureTypedArrayCapacity;
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
  })(m.PathCommand || (m.PathCommand = {}));
  (function(b) {
    b[b.Linear = 16] = "Linear";
    b[b.Radial = 18] = "Radial";
  })(m.GradientType || (m.GradientType = {}));
  (function(b) {
    b[b.Pad = 0] = "Pad";
    b[b.Reflect = 1] = "Reflect";
    b[b.Repeat = 2] = "Repeat";
  })(m.GradientSpreadMethod || (m.GradientSpreadMethod = {}));
  (function(b) {
    b[b.RGB = 0] = "RGB";
    b[b.LinearRGB = 1] = "LinearRGB";
  })(m.GradientInterpolationMethod || (m.GradientInterpolationMethod = {}));
  (function(b) {
    b[b.None = 0] = "None";
    b[b.Normal = 1] = "Normal";
    b[b.Vertical = 2] = "Vertical";
    b[b.Horizontal = 3] = "Horizontal";
  })(m.LineScaleMode || (m.LineScaleMode = {}));
  var b = function() {
    return function(b, a, h, u, k, t, r, l, q, f, d) {
      this.commands = b;
      this.commandsPosition = a;
      this.coordinates = h;
      this.morphCoordinates = u;
      this.coordinatesPosition = k;
      this.styles = t;
      this.stylesLength = r;
      this.morphStyles = l;
      this.morphStylesLength = q;
      this.hasFills = f;
      this.hasLines = d;
    };
  }();
  m.PlainObjectShapeData = b;
  var w;
  (function(b) {
    b[b.Commands = 32] = "Commands";
    b[b.Coordinates = 128] = "Coordinates";
    b[b.Styles = 16] = "Styles";
  })(w || (w = {}));
  w = function() {
    function v(a) {
      void 0 === a && (a = !0);
      a && this.clear();
    }
    v.FromPlainObject = function(a) {
      var h = new v(!1);
      h.commands = a.commands;
      h.coordinates = a.coordinates;
      h.morphCoordinates = a.morphCoordinates;
      h.commandsPosition = a.commandsPosition;
      h.coordinatesPosition = a.coordinatesPosition;
      h.styles = p.FromArrayBuffer(a.styles, a.stylesLength);
      h.styles.endian = "auto";
      a.morphStyles && (h.morphStyles = p.FromArrayBuffer(a.morphStyles, a.morphStylesLength), h.morphStyles.endian = "auto");
      h.hasFills = a.hasFills;
      h.hasLines = a.hasLines;
      return h;
    };
    v.prototype.moveTo = function(a, h) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = 9;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = h;
    };
    v.prototype.lineTo = function(a, h) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = 10;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = h;
    };
    v.prototype.curveTo = function(a, h, b, k) {
      this.ensurePathCapacities(1, 4);
      this.commands[this.commandsPosition++] = 11;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = h;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = k;
    };
    v.prototype.cubicCurveTo = function(a, h, b, k, t, r) {
      this.ensurePathCapacities(1, 6);
      this.commands[this.commandsPosition++] = 12;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = h;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = k;
      this.coordinates[this.coordinatesPosition++] = t;
      this.coordinates[this.coordinatesPosition++] = r;
    };
    v.prototype.beginFill = function(a) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 1;
      this.styles.writeUnsignedInt(a);
      this.hasFills = !0;
    };
    v.prototype.writeMorphFill = function(a) {
      this.morphStyles.writeUnsignedInt(a);
    };
    v.prototype.endFill = function() {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 4;
    };
    v.prototype.endLine = function() {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 8;
    };
    v.prototype.lineStyle = function(a, h, b, k, t, r, l) {
      this.ensurePathCapacities(2, 0);
      this.commands[this.commandsPosition++] = 5;
      this.coordinates[this.coordinatesPosition++] = a;
      a = this.styles;
      a.writeUnsignedInt(h);
      a.writeBoolean(b);
      a.writeUnsignedByte(k);
      a.writeUnsignedByte(t);
      a.writeUnsignedByte(r);
      a.writeUnsignedByte(l);
      this.hasLines = !0;
    };
    v.prototype.writeMorphLineStyle = function(a, h) {
      this.morphCoordinates[this.coordinatesPosition - 1] = a;
      this.morphStyles.writeUnsignedInt(h);
    };
    v.prototype.beginBitmap = function(a, h, b, k, t) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = a;
      a = this.styles;
      a.writeUnsignedInt(h);
      this._writeStyleMatrix(b, !1);
      a.writeBoolean(k);
      a.writeBoolean(t);
      this.hasFills = !0;
    };
    v.prototype.writeMorphBitmap = function(a) {
      this._writeStyleMatrix(a, !0);
    };
    v.prototype.beginGradient = function(a, h, b, k, t, r, l, q) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = a;
      a = this.styles;
      a.writeUnsignedByte(k);
      a.writeShort(q);
      this._writeStyleMatrix(t, !1);
      k = h.length;
      a.writeByte(k);
      for (t = 0;t < k;t++) {
        a.writeUnsignedByte(b[t]), a.writeUnsignedInt(h[t]);
      }
      a.writeUnsignedByte(r);
      a.writeUnsignedByte(l);
      this.hasFills = !0;
    };
    v.prototype.writeMorphGradient = function(a, h, b) {
      this._writeStyleMatrix(b, !0);
      b = this.morphStyles;
      for (var k = 0;k < a.length;k++) {
        b.writeUnsignedByte(h[k]), b.writeUnsignedInt(a[k]);
      }
    };
    v.prototype.writeCommandAndCoordinates = function(a, h, b) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = h;
      this.coordinates[this.coordinatesPosition++] = b;
    };
    v.prototype.writeCoordinates = function(a, h) {
      this.ensurePathCapacities(0, 2);
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = h;
    };
    v.prototype.writeMorphCoordinates = function(a, h) {
      this.morphCoordinates = g(this.morphCoordinates, this.coordinatesPosition);
      this.morphCoordinates[this.coordinatesPosition - 2] = a;
      this.morphCoordinates[this.coordinatesPosition - 1] = h;
    };
    v.prototype.clear = function() {
      this.commandsPosition = this.coordinatesPosition = 0;
      this.commands = new Uint8Array(32);
      this.coordinates = new Int32Array(128);
      this.styles = new p(16);
      this.styles.endian = "auto";
      this.hasFills = this.hasLines = !1;
    };
    v.prototype.isEmpty = function() {
      return 0 === this.commandsPosition;
    };
    v.prototype.clone = function() {
      var a = new v(!1);
      a.commands = new Uint8Array(this.commands);
      a.commandsPosition = this.commandsPosition;
      a.coordinates = new Int32Array(this.coordinates);
      a.coordinatesPosition = this.coordinatesPosition;
      a.styles = new p(this.styles.length);
      a.styles.writeRawBytes(this.styles.bytes.subarray(0, this.styles.length));
      this.morphStyles && (a.morphStyles = new p(this.morphStyles.length), a.morphStyles.writeRawBytes(this.morphStyles.bytes.subarray(0, this.morphStyles.length)));
      a.hasFills = this.hasFills;
      a.hasLines = this.hasLines;
      return a;
    };
    v.prototype.toPlainObject = function() {
      return new b(this.commands, this.commandsPosition, this.coordinates, this.morphCoordinates, this.coordinatesPosition, this.styles.buffer, this.styles.length, this.morphStyles && this.morphStyles.buffer, this.morphStyles ? this.morphStyles.length : 0, this.hasFills, this.hasLines);
    };
    Object.defineProperty(v.prototype, "buffers", {get:function() {
      var a = [this.commands.buffer, this.coordinates.buffer, this.styles.buffer];
      this.morphCoordinates && a.push(this.morphCoordinates.buffer);
      this.morphStyles && a.push(this.morphStyles.buffer);
      return a;
    }, enumerable:!0, configurable:!0});
    v.prototype._writeStyleMatrix = function(a, h) {
      (h ? this.morphStyles : this.styles).write6Floats(a.a, a.b, a.c, a.d, a.tx, a.ty);
    };
    v.prototype.ensurePathCapacities = function(a, h) {
      this.commands = g(this.commands, this.commandsPosition + a);
      this.coordinates = g(this.coordinates, this.coordinatesPosition + h);
    };
    return v;
  }();
  m.ShapeData = w;
})(Shumway || (Shumway = {}));
(function(m) {
  (function(m) {
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
    })(m.Parser || (m.Parser = {}));
  })(m.SWF || (m.SWF = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  var p = m.Debug.unexpected, g = function() {
    function b(b, g, a, h) {
      this.url = b;
      this.method = g;
      this.mimeType = a;
      this.data = h;
    }
    b.prototype.readAll = function(b, g) {
      var a = this.url, h = this.xhr = new XMLHttpRequest({mozSystem:!0});
      h.open(this.method || "GET", this.url, !0);
      h.responseType = "arraybuffer";
      b && (h.onprogress = function(a) {
        b(h.response, a.loaded, a.total);
      });
      h.onreadystatechange = function(b) {
        4 === h.readyState && (200 !== h.status && 0 !== h.status || null === h.response ? (p("Path: " + a + " not found."), g(null, h.statusText)) : g(h.response));
      };
      this.mimeType && h.setRequestHeader("Content-Type", this.mimeType);
      h.send(this.data || null);
    };
    b.prototype.readChunked = function(b, g, a, h, u, k) {
      if (0 >= b) {
        this.readAsync(g, a, h, u, k);
      } else {
        var t = 0, r = new Uint8Array(b), l = 0, q;
        this.readAsync(function(a, d) {
          q = d.total;
          for (var e = a.length, c = 0;t + e >= b;) {
            var n = b - t;
            r.set(a.subarray(c, c + n), t);
            c += n;
            e -= n;
            l += b;
            g(r, {loaded:l, total:q});
            t = 0;
          }
          r.set(a.subarray(c), t);
          t += e;
        }, a, h, function() {
          0 < t && (l += t, g(r.subarray(0, t), {loaded:l, total:q}), t = 0);
          u && u();
        }, k);
      }
    };
    b.prototype.readAsync = function(b, g, a, h, u) {
      var k = this.xhr = new XMLHttpRequest({mozSystem:!0}), t = this.url, r = 0, l = 0;
      k.open(this.method || "GET", t, !0);
      k.responseType = "moz-chunked-arraybuffer";
      var q = "moz-chunked-arraybuffer" !== k.responseType;
      q && (k.responseType = "arraybuffer");
      k.onprogress = function(a) {
        q || (r = a.loaded, l = a.total, b(new Uint8Array(k.response), {loaded:r, total:l}));
      };
      k.onreadystatechange = function(a) {
        2 === k.readyState && u && u(t, k.status, k.getAllResponseHeaders());
        4 === k.readyState && (200 !== k.status && 0 !== k.status || null === k.response && (0 === l || r !== l) ? g(k.statusText) : (q && (a = k.response, b(new Uint8Array(a), {loaded:a.byteLength, total:a.byteLength})), h && h()));
      };
      this.mimeType && k.setRequestHeader("Content-Type", this.mimeType);
      k.send(this.data || null);
      a && a();
    };
    b.prototype.abort = function() {
      this.xhr && (this.xhr.abort(), this.xhr = null);
    };
    return b;
  }();
  m.BinaryFileReader = g;
})(Shumway || (Shumway = {}));
(function(m) {
  var p = function() {
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
  m.FlashLog = p;
  m.flashlog = null;
})(Shumway || (Shumway = {}));
(function(m) {
  (function(m) {
    (function(g) {
      g[g.Objects = 0] = "Objects";
      g[g.References = 1] = "References";
    })(m.RemotingPhase || (m.RemotingPhase = {}));
    (function(g) {
      g[g.HasMatrix = 1] = "HasMatrix";
      g[g.HasBounds = 2] = "HasBounds";
      g[g.HasChildren = 4] = "HasChildren";
      g[g.HasColorTransform = 8] = "HasColorTransform";
      g[g.HasClipRect = 16] = "HasClipRect";
      g[g.HasMiscellaneousProperties = 32] = "HasMiscellaneousProperties";
      g[g.HasMask = 64] = "HasMask";
      g[g.HasClip = 128] = "HasClip";
    })(m.MessageBits || (m.MessageBits = {}));
    (function(g) {
      g[g.None = 0] = "None";
      g[g.Asset = 134217728] = "Asset";
    })(m.IDMask || (m.IDMask = {}));
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
    })(m.MessageTag || (m.MessageTag = {}));
    (function(g) {
      g[g.Blur = 0] = "Blur";
      g[g.DropShadow = 1] = "DropShadow";
      g[g.ColorMatrix = 2] = "ColorMatrix";
    })(m.FilterType || (m.FilterType = {}));
    (function(g) {
      g[g.Identity = 0] = "Identity";
      g[g.AlphaMultiplierOnly = 1] = "AlphaMultiplierOnly";
      g[g.All = 2] = "All";
    })(m.ColorTransformEncoding || (m.ColorTransformEncoding = {}));
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
    })(m.VideoPlaybackEvent || (m.VideoPlaybackEvent = {}));
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
    })(m.VideoControlEvent || (m.VideoControlEvent = {}));
    (function(g) {
      g[g.ShowAll = 0] = "ShowAll";
      g[g.ExactFit = 1] = "ExactFit";
      g[g.NoBorder = 2] = "NoBorder";
      g[g.NoScale = 4] = "NoScale";
    })(m.StageScaleMode || (m.StageScaleMode = {}));
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
    })(m.StageAlignFlags || (m.StageAlignFlags = {}));
    m.MouseEventNames = "click dblclick mousedown mousemove mouseup mouseover mouseout".split(" ");
    m.KeyboardEventNames = ["keydown", "keypress", "keyup"];
    (function(g) {
      g[g.CtrlKey = 1] = "CtrlKey";
      g[g.AltKey = 2] = "AltKey";
      g[g.ShiftKey = 4] = "ShiftKey";
    })(m.KeyboardEventFlags || (m.KeyboardEventFlags = {}));
    (function(g) {
      g[g.DocumentHidden = 0] = "DocumentHidden";
      g[g.DocumentVisible = 1] = "DocumentVisible";
      g[g.WindowBlur = 2] = "WindowBlur";
      g[g.WindowFocus = 3] = "WindowFocus";
    })(m.FocusEventType || (m.FocusEventType = {}));
  })(m.Remoting || (m.Remoting = {}));
})(Shumway || (Shumway = {}));
var throwError, Errors;
(function(m) {
  (function(m) {
    (function(g) {
      var b = function() {
        function b() {
        }
        b.toRGBA = function(a, h, b, k) {
          void 0 === k && (k = 1);
          return "rgba(" + a + "," + h + "," + b + "," + k + ")";
        };
        return b;
      }();
      g.UI = b;
      var m = function() {
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
      g.UIThemeDark = m;
      m = function() {
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
      g.UIThemeLight = m;
    })(m.Theme || (m.Theme = {}));
  })(m.Tools || (m.Tools = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(m) {
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
          for (var a = 0, h = this.snapshotCount;a < h;a++) {
            b(this._snapshots[a], a);
          }
        };
        b.prototype.createSnapshots = function() {
          var b = Number.MIN_VALUE, a = 0;
          for (this._snapshots = [];0 < this._buffers.length;) {
            var h = this._buffers.shift().createSnapshot();
            h && (b < h.endTime && (b = h.endTime), a < h.maxDepth && (a = h.maxDepth), this._snapshots.push(h));
          }
          this._windowEnd = this._endTime = b;
          this._maxDepth = a;
        };
        b.prototype.setWindow = function(b, a) {
          if (b > a) {
            var h = b;
            b = a;
            a = h;
          }
          h = Math.min(a - b, this.totalTime);
          b < this._startTime ? (b = this._startTime, a = this._startTime + h) : a > this._endTime && (b = this._endTime - h, a = this._endTime);
          this._windowStart = b;
          this._windowEnd = a;
        };
        b.prototype.moveWindowTo = function(b) {
          this.setWindow(b - this.windowLength / 2, b + this.windowLength / 2);
        };
        return b;
      }();
      g.Profile = b;
    })(m.Profiler || (m.Profiler = {}));
  })(m.Tools || (m.Tools = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(m, p) {
  function g() {
    this.constructor = m;
  }
  for (var b in p) {
    p.hasOwnProperty(b) && (m[b] = p[b]);
  }
  g.prototype = p.prototype;
  m.prototype = new g;
};
(function(m) {
  (function(m) {
    (function(g) {
      var b = function() {
        return function(b) {
          this.kind = b;
          this.totalTime = this.selfTime = this.count = 0;
        };
      }();
      g.TimelineFrameStatistics = b;
      var m = function() {
        function g(a, h, b, k, t, r) {
          this.parent = a;
          this.kind = h;
          this.startData = b;
          this.endData = k;
          this.startTime = t;
          this.endTime = r;
          this.maxDepth = 0;
        }
        Object.defineProperty(g.prototype, "totalTime", {get:function() {
          return this.endTime - this.startTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(g.prototype, "selfTime", {get:function() {
          var a = this.totalTime;
          if (this.children) {
            for (var h = 0, b = this.children.length;h < b;h++) {
              var k = this.children[h], a = a - (k.endTime - k.startTime)
            }
          }
          return a;
        }, enumerable:!0, configurable:!0});
        g.prototype.getChildIndex = function(a) {
          for (var h = this.children, b = 0;b < h.length;b++) {
            if (h[b].endTime > a) {
              return b;
            }
          }
          return 0;
        };
        g.prototype.getChildRange = function(a, h) {
          if (this.children && a <= this.endTime && h >= this.startTime && h >= a) {
            var b = this._getNearestChild(a), k = this._getNearestChildReverse(h);
            if (b <= k) {
              return a = this.children[b].startTime, h = this.children[k].endTime, {startIndex:b, endIndex:k, startTime:a, endTime:h, totalTime:h - a};
            }
          }
          return null;
        };
        g.prototype._getNearestChild = function(a) {
          var h = this.children;
          if (h && h.length) {
            if (a <= h[0].endTime) {
              return 0;
            }
            for (var b, k = 0, t = h.length - 1;t > k;) {
              b = (k + t) / 2 | 0;
              var r = h[b];
              if (a >= r.startTime && a <= r.endTime) {
                return b;
              }
              a > r.endTime ? k = b + 1 : t = b;
            }
            return Math.ceil((k + t) / 2);
          }
          return 0;
        };
        g.prototype._getNearestChildReverse = function(a) {
          var h = this.children;
          if (h && h.length) {
            var b = h.length - 1;
            if (a >= h[b].startTime) {
              return b;
            }
            for (var k, t = 0;b > t;) {
              k = Math.ceil((t + b) / 2);
              var r = h[k];
              if (a >= r.startTime && a <= r.endTime) {
                return k;
              }
              a > r.endTime ? t = k : b = k - 1;
            }
            return (t + b) / 2 | 0;
          }
          return 0;
        };
        g.prototype.query = function(a) {
          if (a < this.startTime || a > this.endTime) {
            return null;
          }
          var h = this.children;
          if (h && 0 < h.length) {
            for (var b, k = 0, t = h.length - 1;t > k;) {
              var r = (k + t) / 2 | 0;
              b = h[r];
              if (a >= b.startTime && a <= b.endTime) {
                return b.query(a);
              }
              a > b.endTime ? k = r + 1 : t = r;
            }
            b = h[t];
            if (a >= b.startTime && a <= b.endTime) {
              return b.query(a);
            }
          }
          return this;
        };
        g.prototype.queryNext = function(a) {
          for (var h = this;a > h.endTime;) {
            if (h.parent) {
              h = h.parent;
            } else {
              break;
            }
          }
          return h.query(a);
        };
        g.prototype.getDepth = function() {
          for (var a = 0, h = this;h;) {
            a++, h = h.parent;
          }
          return a;
        };
        g.prototype.calculateStatistics = function() {
          function a(g) {
            if (g.kind) {
              var k = h[g.kind.id] || (h[g.kind.id] = new b(g.kind));
              k.count++;
              k.selfTime += g.selfTime;
              k.totalTime += g.totalTime;
            }
            g.children && g.children.forEach(a);
          }
          var h = this.statistics = [];
          a(this);
        };
        g.prototype.trace = function(a) {
          var h = (this.kind ? this.kind.name + ": " : "Profile: ") + (this.endTime - this.startTime).toFixed(2);
          if (this.children && this.children.length) {
            a.enter(h);
            for (h = 0;h < this.children.length;h++) {
              this.children[h].trace(a);
            }
            a.outdent();
          } else {
            a.writeLn(h);
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
    })(m.Profiler || (m.Profiler = {}));
  })(m.Tools || (m.Tools = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(p) {
    (function(g) {
      var b = function() {
        function b(g, a) {
          void 0 === g && (g = "");
          this.name = g || "";
          this._startTime = m.isNullOrUndefined(a) ? jsGlobal.START_TIME : a;
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
          this._marks = new m.CircularBuffer(Int32Array, 20);
          this._times = new m.CircularBuffer(Float64Array, 20);
        };
        b.prototype._getKindId = function(g) {
          var a = b.MAX_KINDID;
          if (void 0 === this._kindNameMap[g]) {
            if (a = this._kinds.length, a < b.MAX_KINDID) {
              var h = {id:a, name:g, visible:!0};
              this._kinds.push(h);
              this._kindNameMap[g] = h;
            } else {
              a = b.MAX_KINDID;
            }
          } else {
            a = this._kindNameMap[g].id;
          }
          return a;
        };
        b.prototype._getMark = function(g, a, h) {
          var u = b.MAX_DATAID;
          m.isNullOrUndefined(h) || a === b.MAX_KINDID || (u = this._data.length, u < b.MAX_DATAID ? this._data.push(h) : u = b.MAX_DATAID);
          return g | u << 16 | a;
        };
        b.prototype.enter = function(g, a, h) {
          h = (m.isNullOrUndefined(h) ? performance.now() : h) - this._startTime;
          this._marks || this._initialize();
          this._depth++;
          g = this._getKindId(g);
          this._marks.write(this._getMark(b.ENTER, g, a));
          this._times.write(h);
          this._stack.push(g);
        };
        b.prototype.leave = function(g, a, h) {
          h = (m.isNullOrUndefined(h) ? performance.now() : h) - this._startTime;
          var u = this._stack.pop();
          g && (u = this._getKindId(g));
          this._marks.write(this._getMark(b.LEAVE, u, a));
          this._times.write(h);
          this._depth--;
        };
        b.prototype.count = function(b, a, h) {
        };
        b.prototype.createSnapshot = function() {
          var v;
          void 0 === v && (v = Number.MAX_VALUE);
          if (!this._marks) {
            return null;
          }
          var a = this._times, h = this._kinds, u = this._data, k = new g.TimelineBufferSnapshot(this.name), t = [k], r = 0;
          this._marks || this._initialize();
          this._marks.forEachInReverse(function(l, k) {
            var f = u[l >>> 16 & b.MAX_DATAID], d = h[l & b.MAX_KINDID];
            if (m.isNullOrUndefined(d) || d.visible) {
              var e = l & 2147483648, c = a.get(k), n = t.length;
              if (e === b.LEAVE) {
                if (1 === n && (r++, r > v)) {
                  return !0;
                }
                t.push(new g.TimelineFrame(t[n - 1], d, null, f, NaN, c));
              } else {
                if (e === b.ENTER) {
                  if (d = t.pop(), e = t[t.length - 1]) {
                    for (e.children ? e.children.unshift(d) : e.children = [d], e = t.length, d.depth = e, d.startData = f, d.startTime = c;d;) {
                      if (d.maxDepth < e) {
                        d.maxDepth = e, d = d.parent;
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
        b.prototype.reset = function(b) {
          this._startTime = m.isNullOrUndefined(b) ? performance.now() : b;
          this._marks ? (this._depth = 0, this._data = [], this._marks.reset(), this._times.reset()) : this._initialize();
        };
        b.FromFirefoxProfile = function(g, a) {
          for (var h = g.profile.threads[0].samples, u = new b(a, h[0].time), k = [], t, r = 0;r < h.length;r++) {
            t = h[r];
            var l = t.time, q = t.frames, f = 0;
            for (t = Math.min(q.length, k.length);f < t && q[f].location === k[f].location;) {
              f++;
            }
            for (var d = k.length - f, e = 0;e < d;e++) {
              t = k.pop(), u.leave(t.location, null, l);
            }
            for (;f < q.length;) {
              t = q[f++], u.enter(t.location, null, l);
            }
            k = q;
          }
          for (;t = k.pop();) {
            u.leave(t.location, null, l);
          }
          return u;
        };
        b.FromChromeProfile = function(g, a) {
          var h = g.timestamps, u = g.samples, k = new b(a, h[0] / 1E3), t = [], r = {}, l;
          b._resolveIds(g.head, r);
          for (var q = 0;q < h.length;q++) {
            var f = h[q] / 1E3, d = [];
            for (l = r[u[q]];l;) {
              d.unshift(l), l = l.parent;
            }
            var e = 0;
            for (l = Math.min(d.length, t.length);e < l && d[e] === t[e];) {
              e++;
            }
            for (var c = t.length - e, n = 0;n < c;n++) {
              l = t.pop(), k.leave(l.functionName, null, f);
            }
            for (;e < d.length;) {
              l = d[e++], k.enter(l.functionName, null, f);
            }
            t = d;
          }
          for (;l = t.pop();) {
            k.leave(l.functionName, null, f);
          }
          return k;
        };
        b._resolveIds = function(g, a) {
          a[g.id] = g;
          if (g.children) {
            for (var h = 0;h < g.children.length;h++) {
              g.children[h].parent = g, b._resolveIds(g.children[h], a);
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
    })(p.Profiler || (p.Profiler = {}));
  })(m.Tools || (m.Tools = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(p) {
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
          var h = new g.Profile(b, a);
          h.createSnapshots();
          this._profiles.push(h);
          this.activateProfile(h);
          return h;
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
              this._theme = new p.Theme.UIThemeDark;
              break;
            case 1:
              this._theme = new p.Theme.UIThemeLight;
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
            this._activeProfile.forEachSnapshot(function(a, h) {
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
            var b = this, a = this._activeProfile.startTime, h = this._activeProfile.endTime;
            this._overviewHeader.initialize(a, h);
            this._overview.initialize(a, h);
            this._activeProfile.forEachSnapshot(function(g, k) {
              b._headers[k].initialize(a, h);
              b._charts[k].initialize(a, h);
            });
          }
        };
        b.prototype._onResize = function() {
          if (this._activeProfile) {
            var b = this, a = this._container.offsetWidth;
            this._overviewHeader.setSize(a);
            this._overview.setSize(a);
            this._activeProfile.forEachSnapshot(function(h, g) {
              b._headers[g].setSize(a);
              b._charts[g].setSize(a);
            });
          }
        };
        b.prototype._updateViews = function() {
          if (this._activeProfile) {
            var b = this, a = this._activeProfile.windowStart, h = this._activeProfile.windowEnd;
            this._overviewHeader.setWindow(a, h);
            this._overview.setWindow(a, h);
            this._activeProfile.forEachSnapshot(function(g, k) {
              b._headers[k].setWindow(a, h);
              b._charts[k].setWindow(a, h);
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
        b.prototype.showTooltip = function(b, a, h, g) {
          this.removeTooltipContent();
          this._tooltip.appendChild(this.createTooltipContent(b, a));
          this._tooltip.style.display = "block";
          var k = this._tooltip.firstChild;
          a = k.clientWidth;
          k = k.clientHeight;
          h += h + a >= b.canvas.clientWidth - 50 ? -(a + 20) : 25;
          g += b.canvas.offsetTop - k / 2;
          this._tooltip.style.left = h + "px";
          this._tooltip.style.top = g + "px";
        };
        b.prototype.hideTooltip = function() {
          this._tooltip.style.display = "none";
        };
        b.prototype.createTooltipContent = function(b, a) {
          var h = Math.round(1E5 * a.totalTime) / 1E5, g = Math.round(1E5 * a.selfTime) / 1E5, k = Math.round(1E4 * a.selfTime / a.totalTime) / 100, t = document.createElement("div"), r = document.createElement("h1");
          r.textContent = a.kind.name;
          t.appendChild(r);
          r = document.createElement("p");
          r.textContent = "Total: " + h + " ms";
          t.appendChild(r);
          h = document.createElement("p");
          h.textContent = "Self: " + g + " ms (" + k + "%)";
          t.appendChild(h);
          if (g = b.getStatistics(a.kind)) {
            k = document.createElement("p"), k.textContent = "Count: " + g.count, t.appendChild(k), k = document.createElement("p"), k.textContent = "All Total: " + Math.round(1E5 * g.totalTime) / 1E5 + " ms", t.appendChild(k), k = document.createElement("p"), k.textContent = "All Self: " + Math.round(1E5 * g.selfTime) / 1E5 + " ms", t.appendChild(k);
          }
          this.appendDataElements(t, a.startData);
          this.appendDataElements(t, a.endData);
          return t;
        };
        b.prototype.appendDataElements = function(b, a) {
          if (!m.isNullOrUndefined(a)) {
            b.appendChild(document.createElement("hr"));
            var h;
            if (m.isObject(a)) {
              for (var g in a) {
                h = document.createElement("p"), h.textContent = g + ": " + a[g], b.appendChild(h);
              }
            } else {
              h = document.createElement("p"), h.textContent = a.toString(), b.appendChild(h);
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
    })(p.Profiler || (p.Profiler = {}));
  })(m.Tools || (m.Tools = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(p) {
    (function(g) {
      var b = m.NumberUtilities.clamp, p = function() {
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
      g.MouseCursor = p;
      var v = function() {
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
        a.prototype.updateCursor = function(h) {
          if (!a._cursorOwner || a._cursorOwner === this._target) {
            var b = this._eventTarget.parentElement;
            a._cursor !== h && (a._cursor = h, ["", "-moz-", "-webkit-"].forEach(function(a) {
              b.style.cursor = a + h;
            }));
            a._cursorOwner = a._cursor === p.DEFAULT ? null : this._target;
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
          var k = {x:a.x - b.start.x, y:a.y - b.start.y};
          b.current = a;
          b.delta = k;
          b.hasMoved = !0;
          this._target.onDrag(b.start.x, b.start.y, a.x, a.y, k.x, k.y);
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
          var k = b.getBoundingClientRect();
          return {x:a.clientX - k.left, y:a.clientY - k.top};
        };
        a.HOVER_TIMEOUT = 500;
        a._cursor = p.DEFAULT;
        return a;
      }();
      g.MouseController = v;
    })(p.Profiler || (p.Profiler = {}));
  })(m.Tools || (m.Tools = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(m) {
    (function(g) {
      (function(b) {
        b[b.NONE = 0] = "NONE";
        b[b.WINDOW = 1] = "WINDOW";
        b[b.HANDLE_LEFT = 2] = "HANDLE_LEFT";
        b[b.HANDLE_RIGHT = 3] = "HANDLE_RIGHT";
        b[b.HANDLE_BOTH = 4] = "HANDLE_BOTH";
      })(g.FlameChartDragTarget || (g.FlameChartDragTarget = {}));
      var b = function() {
        function b(m) {
          this._controller = m;
          this._initialized = !1;
          this._canvas = document.createElement("canvas");
          this._context = this._canvas.getContext("2d");
          this._mouseController = new g.MouseController(this, this._canvas);
          m = m.container;
          m.appendChild(this._canvas);
          m = m.getBoundingClientRect();
          this.setSize(m.width);
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
        b.prototype.setWindow = function(b, a, h) {
          void 0 === h && (h = !0);
          this._windowStart = b;
          this._windowEnd = a;
          !h || this.draw();
        };
        b.prototype.setRange = function(b, a) {
          var h = !1;
          void 0 === h && (h = !0);
          this._rangeStart = b;
          this._rangeEnd = a;
          !h || this.draw();
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
          var h;
          void 0 === h && (h = 10);
          return Math.abs(b - a) < 1 / Math.pow(10, h);
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
        b.prototype.onMouseWheel = function(g, a, h) {
          g = this._toTime(g);
          a = this._windowStart;
          var u = this._windowEnd, k = u - a;
          h = Math.max((b.MIN_WINDOW_LEN - k) / k, h);
          this._controller.setWindow(a + (a - g) * h, u + (u - g) * h);
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
        b.prototype.onDrag = function(b, a, h, g, k, t) {
        };
        b.prototype.onDragEnd = function(b, a, h, g, k, t) {
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
    })(m.Profiler || (m.Profiler = {}));
  })(m.Tools || (m.Tools = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(p) {
    (function(g) {
      var b = m.StringUtilities.trimMiddle, p = function(p) {
        function a(a, b) {
          p.call(this, a);
          this._textWidth = {};
          this._minFrameWidthInPixels = 1;
          this._snapshot = b;
          this._kindStyle = Object.create(null);
        }
        __extends(a, p);
        a.prototype.setSize = function(a, b) {
          p.prototype.setSize.call(this, a, b || this._initialized ? 12.5 * this._maxDepth : 100);
        };
        a.prototype.initialize = function(a, b) {
          this._initialized = !0;
          this._maxDepth = this._snapshot.maxDepth;
          this.setRange(a, b);
          this.setWindow(a, b, !1);
          this.setSize(this._width, 12.5 * this._maxDepth);
        };
        a.prototype.destroy = function() {
          p.prototype.destroy.call(this);
          this._snapshot = null;
        };
        a.prototype.draw = function() {
          var a = this._context, b = window.devicePixelRatio;
          m.ColorStyle.reset();
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.bodyBackground(1);
          a.fillRect(0, 0, this._width, this._height);
          this._initialized && this._drawChildren(this._snapshot);
          a.restore();
        };
        a.prototype._drawChildren = function(a, b) {
          void 0 === b && (b = 0);
          var k = a.getChildRange(this._windowStart, this._windowEnd);
          if (k) {
            for (var g = k.startIndex;g <= k.endIndex;g++) {
              var r = a.children[g];
              this._drawFrame(r, b) && this._drawChildren(r, b + 1);
            }
          }
        };
        a.prototype._drawFrame = function(a, b) {
          var k = this._context, g = this._toPixels(a.startTime), r = this._toPixels(a.endTime), l = r - g;
          if (l <= this._minFrameWidthInPixels) {
            return k.fillStyle = this._controller.theme.tabToolbar(1), k.fillRect(g, 12.5 * b, this._minFrameWidthInPixels, 12 + 12.5 * (a.maxDepth - a.depth)), !1;
          }
          0 > g && (r = l + g, g = 0);
          var r = r - g, q = this._kindStyle[a.kind.id];
          q || (q = m.ColorStyle.randomStyle(), q = this._kindStyle[a.kind.id] = {bgColor:q, textColor:m.ColorStyle.contrastStyle(q)});
          k.save();
          k.fillStyle = q.bgColor;
          k.fillRect(g, 12.5 * b, r, 12);
          12 < l && (l = a.kind.name) && l.length && (l = this._prepareText(k, l, r - 4), l.length && (k.fillStyle = q.textColor, k.textBaseline = "bottom", k.fillText(l, g + 2, 12.5 * (b + 1) - 1)));
          k.restore();
          return !0;
        };
        a.prototype._prepareText = function(a, g, k) {
          var t = this._measureWidth(a, g);
          if (k > t) {
            return g;
          }
          for (var t = 3, r = g.length;t < r;) {
            var l = t + r >> 1;
            this._measureWidth(a, b(g, l)) < k ? t = l + 1 : r = l;
          }
          g = b(g, r - 1);
          t = this._measureWidth(a, g);
          return t <= k ? g : "";
        };
        a.prototype._measureWidth = function(a, b) {
          var k = this._textWidth[b];
          k || (k = a.measureText(b).width, this._textWidth[b] = k);
          return k;
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
          var k = 1 + b / 12.5 | 0, g = this._snapshot.query(this._toTime(a));
          if (g && g.depth >= k) {
            for (;g && g.depth > k;) {
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
        a.prototype.onDrag = function(a, b, k, g, r, l) {
          if (a = this._dragInfo) {
            r = this._toTimeRelative(-r), this._controller.setWindow(a.windowStartInitial + r, a.windowEndInitial + r);
          }
        };
        a.prototype.onDragEnd = function(a, b, k, t, r, l) {
          this._dragInfo = null;
          this._mouseController.updateCursor(g.MouseCursor.DEFAULT);
        };
        a.prototype.onClick = function(a, b) {
          this._dragInfo = null;
          this._mouseController.updateCursor(g.MouseCursor.DEFAULT);
        };
        a.prototype.onHoverStart = function(a, b) {
          var k = this._getFrameAtPosition(a, b);
          k && (this._hoveredFrame = k, this._controller.showTooltip(this, k, a, b));
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
      g.FlameChart = p;
    })(p.Profiler || (p.Profiler = {}));
  })(m.Tools || (m.Tools = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(p) {
    (function(g) {
      var b = m.NumberUtilities.clamp;
      (function(b) {
        b[b.OVERLAY = 0] = "OVERLAY";
        b[b.STACK = 1] = "STACK";
        b[b.UNION = 2] = "UNION";
      })(g.FlameChartOverviewMode || (g.FlameChartOverviewMode = {}));
      var p = function(m) {
        function a(a, b) {
          void 0 === b && (b = 1);
          this._mode = b;
          this._overviewCanvasDirty = !0;
          this._overviewCanvas = document.createElement("canvas");
          this._overviewContext = this._overviewCanvas.getContext("2d");
          m.call(this, a);
        }
        __extends(a, m);
        a.prototype.setSize = function(a, b) {
          m.prototype.setSize.call(this, a, b || 64);
        };
        Object.defineProperty(a.prototype, "mode", {set:function(a) {
          this._mode = a;
          this.draw();
        }, enumerable:!0, configurable:!0});
        a.prototype._resetCanvas = function() {
          m.prototype._resetCanvas.call(this);
          this._overviewCanvas.width = this._canvas.width;
          this._overviewCanvas.height = this._canvas.height;
          this._overviewCanvasDirty = !0;
        };
        a.prototype.draw = function() {
          var a = this._context, b = window.devicePixelRatio, k = this._width, g = this._height;
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.bodyBackground(1);
          a.fillRect(0, 0, k, g);
          a.restore();
          this._initialized && (this._overviewCanvasDirty && (this._drawChart(), this._overviewCanvasDirty = !1), a.drawImage(this._overviewCanvas, 0, 0), this._drawSelection());
        };
        a.prototype._drawSelection = function() {
          var a = this._context, b = this._height, k = window.devicePixelRatio, g = this._selection ? this._selection.left : this._toPixels(this._windowStart), r = this._selection ? this._selection.right : this._toPixels(this._windowEnd), l = this._controller.theme;
          a.save();
          a.scale(k, k);
          this._selection ? (a.fillStyle = l.selectionText(.15), a.fillRect(g, 1, r - g, b - 1), a.fillStyle = "rgba(133, 0, 0, 1)", a.fillRect(g + .5, 0, r - g - 1, 4), a.fillRect(g + .5, b - 4, r - g - 1, 4)) : (a.fillStyle = l.bodyBackground(.4), a.fillRect(0, 1, g, b - 1), a.fillRect(r, 1, this._width, b - 1));
          a.beginPath();
          a.moveTo(g, 0);
          a.lineTo(g, b);
          a.moveTo(r, 0);
          a.lineTo(r, b);
          a.lineWidth = .5;
          a.strokeStyle = l.foregroundTextGrey(1);
          a.stroke();
          b = Math.abs((this._selection ? this._toTime(this._selection.right) : this._windowEnd) - (this._selection ? this._toTime(this._selection.left) : this._windowStart));
          a.fillStyle = l.selectionText(.5);
          a.font = "8px sans-serif";
          a.textBaseline = "alphabetic";
          a.textAlign = "end";
          a.fillText(b.toFixed(2), Math.min(g, r) - 4, 10);
          a.fillText((b / 60).toFixed(2), Math.min(g, r) - 4, 20);
          a.restore();
        };
        a.prototype._drawChart = function() {
          var a = window.devicePixelRatio, b = this._height, k = this._controller.activeProfile, g = 4 * this._width, r = k.totalTime / g, l = this._overviewContext, q = this._controller.theme.blueHighlight(1);
          l.save();
          l.translate(0, a * b);
          var f = -a * b / (k.maxDepth - 1);
          l.scale(a / 4, f);
          l.clearRect(0, 0, g, k.maxDepth - 1);
          1 == this._mode && l.scale(1, 1 / k.snapshotCount);
          for (var d = 0, e = k.snapshotCount;d < e;d++) {
            var c = k.getSnapshotAt(d);
            if (c) {
              var n = null, x = 0;
              l.beginPath();
              l.moveTo(0, 0);
              for (var G = 0;G < g;G++) {
                x = k.startTime + G * r, x = (n = n ? n.queryNext(x) : c.query(x)) ? n.getDepth() - 1 : 0, l.lineTo(G, x);
              }
              l.lineTo(G, 0);
              l.fillStyle = q;
              l.fill();
              1 == this._mode && l.translate(0, -b * a / f);
            }
          }
          l.restore();
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
            var k = this._toPixels(this._windowStart), t = this._toPixels(this._windowEnd), r = 2 + g.FlameChartBase.DRAGHANDLE_WIDTH / 2, l = a >= k - r && a <= k + r, q = a >= t - r && a <= t + r;
            if (l && q) {
              return 4;
            }
            if (l) {
              return 2;
            }
            if (q) {
              return 3;
            }
            if (!this._windowEqRange() && a > k + r && a < t - r) {
              return 1;
            }
          }
          return 0;
        };
        a.prototype.onMouseDown = function(a, b) {
          var k = this._getDragTargetUnderCursor(a, b);
          0 === k ? (this._selection = {left:a, right:a}, this.draw()) : (1 === k && this._mouseController.updateCursor(g.MouseCursor.GRABBING), this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:k});
        };
        a.prototype.onMouseMove = function(a, b) {
          var k = g.MouseCursor.DEFAULT, t = this._getDragTargetUnderCursor(a, b);
          0 === t || this._selection || (k = 1 === t ? g.MouseCursor.GRAB : g.MouseCursor.EW_RESIZE);
          this._mouseController.updateCursor(k);
        };
        a.prototype.onMouseOver = function(a, b) {
          this.onMouseMove(a, b);
        };
        a.prototype.onMouseOut = function() {
          this._mouseController.updateCursor(g.MouseCursor.DEFAULT);
        };
        a.prototype.onDrag = function(a, m, k, t, r, l) {
          if (this._selection) {
            this._selection = {left:a, right:b(k, 0, this._width - 1)}, this.draw();
          } else {
            a = this._dragInfo;
            if (4 === a.target) {
              if (0 !== r) {
                a.target = 0 > r ? 2 : 3;
              } else {
                return;
              }
            }
            m = this._windowStart;
            k = this._windowEnd;
            r = this._toTimeRelative(r);
            switch(a.target) {
              case 1:
                m = a.windowStartInitial + r;
                k = a.windowEndInitial + r;
                break;
              case 2:
                m = b(a.windowStartInitial + r, this._rangeStart, k - g.FlameChartBase.MIN_WINDOW_LEN);
                break;
              case 3:
                k = b(a.windowEndInitial + r, m + g.FlameChartBase.MIN_WINDOW_LEN, this._rangeEnd);
                break;
              default:
                return;
            }
            this._controller.setWindow(m, k);
          }
        };
        a.prototype.onDragEnd = function(a, b, k, g, r, l) {
          this._selection && (this._selection = null, this._controller.setWindow(this._toTime(a), this._toTime(k)));
          this._dragInfo = null;
          this.onMouseMove(k, g);
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
      g.FlameChartOverview = p;
    })(p.Profiler || (p.Profiler = {}));
  })(m.Tools || (m.Tools = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(p) {
    (function(g) {
      var b = m.NumberUtilities.clamp;
      (function(b) {
        b[b.OVERVIEW = 0] = "OVERVIEW";
        b[b.CHART = 1] = "CHART";
      })(g.FlameChartHeaderType || (g.FlameChartHeaderType = {}));
      var p = function(m) {
        function a(a, b) {
          this._type = b;
          m.call(this, a);
        }
        __extends(a, m);
        a.prototype.draw = function() {
          var a = this._context, b = window.devicePixelRatio, k = this._width, g = this._height;
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.tabToolbar(1);
          a.fillRect(0, 0, k, g);
          this._initialized && (0 == this._type ? (b = this._toPixels(this._windowStart), k = this._toPixels(this._windowEnd), a.fillStyle = this._controller.theme.bodyBackground(1), a.fillRect(b, 0, k - b, g), this._drawLabels(this._rangeStart, this._rangeEnd), this._drawDragHandle(b), this._drawDragHandle(k)) : this._drawLabels(this._windowStart, this._windowEnd));
          a.restore();
        };
        a.prototype._drawLabels = function(b, g) {
          var k = this._context, t = this._calculateTickInterval(b, g), r = Math.ceil(b / t) * t, l = 500 <= t, q = l ? 1E3 : 1, f = this._decimalPlaces(t / q), l = l ? "s" : "ms", d = this._toPixels(r), e = this._height / 2, c = this._controller.theme;
          k.lineWidth = 1;
          k.strokeStyle = c.contentTextDarkGrey(.5);
          k.fillStyle = c.contentTextDarkGrey(1);
          k.textAlign = "right";
          k.textBaseline = "middle";
          k.font = "11px sans-serif";
          for (c = this._width + a.TICK_MAX_WIDTH;d < c;) {
            k.fillText((r / q).toFixed(f) + " " + l, d - 7, e + 1), k.beginPath(), k.moveTo(d, 0), k.lineTo(d, this._height + 1), k.closePath(), k.stroke(), r += t, d = this._toPixels(r);
          }
        };
        a.prototype._calculateTickInterval = function(b, g) {
          var k = (g - b) / (this._width / a.TICK_MAX_WIDTH), t = Math.pow(10, Math.floor(Math.log(k) / Math.LN10)), k = k / t;
          return 5 < k ? 10 * t : 2 < k ? 5 * t : 1 < k ? 2 * t : t;
        };
        a.prototype._drawDragHandle = function(a) {
          var b = this._context;
          b.lineWidth = 2;
          b.strokeStyle = this._controller.theme.bodyBackground(1);
          b.fillStyle = this._controller.theme.foregroundTextGrey(.7);
          this._drawRoundedRect(b, a - g.FlameChartBase.DRAGHANDLE_WIDTH / 2, g.FlameChartBase.DRAGHANDLE_WIDTH, this._height - 2);
        };
        a.prototype._drawRoundedRect = function(a, b, k, g) {
          var r, l = !0;
          void 0 === l && (l = !0);
          void 0 === r && (r = !0);
          a.beginPath();
          a.moveTo(b + 2, 1);
          a.lineTo(b + k - 2, 1);
          a.quadraticCurveTo(b + k, 1, b + k, 3);
          a.lineTo(b + k, 1 + g - 2);
          a.quadraticCurveTo(b + k, 1 + g, b + k - 2, 1 + g);
          a.lineTo(b + 2, 1 + g);
          a.quadraticCurveTo(b, 1 + g, b, 1 + g - 2);
          a.lineTo(b, 3);
          a.quadraticCurveTo(b, 1, b + 2, 1);
          a.closePath();
          l && a.stroke();
          r && a.fill();
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
              var k = this._toPixels(this._windowStart), t = this._toPixels(this._windowEnd), r = 2 + g.FlameChartBase.DRAGHANDLE_WIDTH / 2, k = a >= k - r && a <= k + r, t = a >= t - r && a <= t + r;
              if (k && t) {
                return 4;
              }
              if (k) {
                return 2;
              }
              if (t) {
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
          var k = this._getDragTargetUnderCursor(a, b);
          1 === k && this._mouseController.updateCursor(g.MouseCursor.GRABBING);
          this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:k};
        };
        a.prototype.onMouseMove = function(a, b) {
          var k = g.MouseCursor.DEFAULT, t = this._getDragTargetUnderCursor(a, b);
          0 !== t && (1 !== t ? k = g.MouseCursor.EW_RESIZE : 1 !== t || this._windowEqRange() || (k = g.MouseCursor.GRAB));
          this._mouseController.updateCursor(k);
        };
        a.prototype.onMouseOver = function(a, b) {
          this.onMouseMove(a, b);
        };
        a.prototype.onMouseOut = function() {
          this._mouseController.updateCursor(g.MouseCursor.DEFAULT);
        };
        a.prototype.onDrag = function(a, m, k, t, r, l) {
          a = this._dragInfo;
          if (4 === a.target) {
            if (0 !== r) {
              a.target = 0 > r ? 2 : 3;
            } else {
              return;
            }
          }
          m = this._windowStart;
          k = this._windowEnd;
          r = this._toTimeRelative(r);
          switch(a.target) {
            case 1:
              k = 0 === this._type ? 1 : -1;
              m = a.windowStartInitial + k * r;
              k = a.windowEndInitial + k * r;
              break;
            case 2:
              m = b(a.windowStartInitial + r, this._rangeStart, k - g.FlameChartBase.MIN_WINDOW_LEN);
              break;
            case 3:
              k = b(a.windowEndInitial + r, m + g.FlameChartBase.MIN_WINDOW_LEN, this._rangeEnd);
              break;
            default:
              return;
          }
          this._controller.setWindow(m, k);
        };
        a.prototype.onDragEnd = function(a, b, k, g, r, l) {
          this._dragInfo = null;
          this.onMouseMove(k, g);
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
      g.FlameChartHeader = p;
    })(p.Profiler || (p.Profiler = {}));
  })(m.Tools || (m.Tools = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(m) {
    (function(g) {
      (function(b) {
        var g = function() {
          function a(a, b, k, g, r) {
            this.pageLoaded = a;
            this.threadsTotal = b;
            this.threadsLoaded = k;
            this.threadFilesTotal = g;
            this.threadFilesLoaded = r;
          }
          a.prototype.toString = function() {
            return "[" + ["pageLoaded", "threadsTotal", "threadsLoaded", "threadFilesTotal", "threadFilesLoaded"].map(function(a, b, k) {
              return a + ":" + this[a];
            }, this).join(", ") + "]";
          };
          return a;
        }();
        b.TraceLoggerProgressInfo = g;
        var m = function() {
          function a(a) {
            this._baseUrl = a;
            this._threads = [];
            this._progressInfo = null;
          }
          a.prototype.loadPage = function(a, b, k) {
            this._threads = [];
            this._pageLoadCallback = b;
            this._pageLoadProgressCallback = k;
            this._progressInfo = new g(!1, 0, 0, 0, 0);
            this._loadData([a], this._onLoadPage.bind(this));
          };
          Object.defineProperty(a.prototype, "buffers", {get:function() {
            for (var a = [], b = 0, k = this._threads.length;b < k;b++) {
              a.push(this._threads[b].buffer);
            }
            return a;
          }, enumerable:!0, configurable:!0});
          a.prototype._onProgress = function() {
            this._pageLoadProgressCallback && this._pageLoadProgressCallback.call(this, this._progressInfo);
          };
          a.prototype._onLoadPage = function(a) {
            if (a && 1 == a.length) {
              var g = this, k = 0;
              a = a[0];
              var t = a.length;
              this._threads = Array(t);
              this._progressInfo.pageLoaded = !0;
              this._progressInfo.threadsTotal = t;
              for (var r = 0;r < a.length;r++) {
                var l = a[r], q = [l.dict, l.tree];
                l.corrections && q.push(l.corrections);
                this._progressInfo.threadFilesTotal += q.length;
                this._loadData(q, function(a) {
                  return function(d) {
                    d && (d = new b.Thread(d), d.buffer.name = "Thread " + a, g._threads[a] = d);
                    k++;
                    g._progressInfo.threadsLoaded++;
                    g._onProgress();
                    k === t && g._pageLoadCallback.call(g, null, g._threads);
                  };
                }(r), function(a) {
                  g._progressInfo.threadFilesLoaded++;
                  g._onProgress();
                });
              }
              this._onProgress();
            } else {
              this._pageLoadCallback.call(this, "Error loading page.", null);
            }
          };
          a.prototype._loadData = function(a, b, k) {
            var g = 0, r = 0, l = a.length, q = [];
            q.length = l;
            for (var f = 0;f < l;f++) {
              var d = this._baseUrl + a[f], e = new XMLHttpRequest, c = /\.tl$/i.test(d) ? "arraybuffer" : "json";
              e.open("GET", d, !0);
              e.responseType = c;
              e.onload = function(c, e) {
                return function(a) {
                  if ("json" === e) {
                    if (a = this.response, "string" === typeof a) {
                      try {
                        a = JSON.parse(a), q[c] = a;
                      } catch (d) {
                        r++;
                      }
                    } else {
                      q[c] = a;
                    }
                  } else {
                    q[c] = this.response;
                  }
                  ++g;
                  k && k(g);
                  g === l && b(q);
                };
              }(f, c);
              e.send();
            }
          };
          a.colors = "#0044ff #8c4b00 #cc5c33 #ff80c4 #ffbfd9 #ff8800 #8c5e00 #adcc33 #b380ff #bfd9ff #ffaa00 #8c0038 #bf8f30 #f780ff #cc99c9 #aaff00 #000073 #452699 #cc8166 #cca799 #000066 #992626 #cc6666 #ccc299 #ff6600 #526600 #992663 #cc6681 #99ccc2 #ff0066 #520066 #269973 #61994d #739699 #ffcc00 #006629 #269199 #94994d #738299 #ff0000 #590000 #234d8c #8c6246 #7d7399 #ee00ff #00474d #8c2385 #8c7546 #7c8c69 #eeff00 #4d003d #662e1a #62468c #8c6969 #6600ff #4c2900 #1a6657 #8c464f #8c6981 #44ff00 #401100 #1a2466 #663355 #567365 #d90074 #403300 #101d40 #59562d #66614d #cc0000 #002b40 #234010 #4c2626 #4d5e66 #00a3cc #400011 #231040 #4c3626 #464359 #0000bf #331b00 #80e6ff #311a33 #4d3939 #a69b00 #003329 #80ffb2 #331a20 #40303d #00a658 #40ffd9 #ffc480 #ffe1bf #332b26 #8c2500 #9933cc #80fff6 #ffbfbf #303326 #005e8c #33cc47 #b2ff80 #c8bfff #263332 #00708c #cc33ad #ffe680 #f2ffbf #262a33 #388c00 #335ccc #8091ff #bfffd9".split(" ");
          return a;
        }();
        b.TraceLogger = m;
      })(g.TraceLogger || (g.TraceLogger = {}));
    })(m.Profiler || (m.Profiler = {}));
  })(m.Tools || (m.Tools = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(m) {
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
            var h = this._data, g = this._buffer;
            do {
              var k = a * b.ITEM_SIZE, t = 4294967295 * h.getUint32(k + 0) + h.getUint32(k + 4), r = 4294967295 * h.getUint32(k + 8) + h.getUint32(k + 12), l = h.getUint32(k + 16), k = h.getUint32(k + 20), q = 1 === (l & 1), l = l >>> 1, l = this._text[l];
              g.enter(l, null, t / 1E6);
              q && this._walkTree(a + 1);
              g.leave(l, null, r / 1E6);
              a = k;
            } while (0 !== a);
          };
          b.ITEM_SIZE = 24;
          return b;
        }();
        b.Thread = m;
      })(g.TraceLogger || (g.TraceLogger = {}));
    })(m.Profiler || (m.Profiler = {}));
  })(m.Tools || (m.Tools = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(p) {
    (function(g) {
      var b = m.NumberUtilities.clamp, p = function() {
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
      g.Buffer = p;
      var v = function() {
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
          this.buffer = new p;
          a.addEventListener("keydown", function(a) {
            var h = 0;
            switch(a.keyCode) {
              case G:
                this.printHelp();
                break;
              case n:
                this.showLineNumbers = !this.showLineNumbers;
                break;
              case x:
                this.showLineTime = !this.showLineTime;
                break;
              case l:
                h = -1;
                break;
              case q:
                h = 1;
                break;
              case b:
                h = -this.pageLineCount;
                break;
              case g:
                h = this.pageLineCount;
                break;
              case t:
                h = -this.lineIndex;
                break;
              case r:
                h = this.buffer.length - this.lineIndex;
                break;
              case f:
                this.columnIndex -= a.metaKey ? 10 : 1;
                0 > this.columnIndex && (this.columnIndex = 0);
                a.preventDefault();
                break;
              case d:
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
                  var m = "";
                  if (this.selection) {
                    for (var p = this.selection.start;p <= this.selection.end;p++) {
                      m += this.buffer.get(p) + "\n";
                    }
                  } else {
                    m = this.buffer.get(this.lineIndex);
                  }
                  a.keyCode === c ? alert(m) : window.open(URL.createObjectURL(new Blob([m], {type:"text/plain"})), "_blank");
                }
              ;
            }
            a.metaKey && (h *= this.pageLineCount);
            h && (this.scroll(h), a.preventDefault());
            h && a.shiftKey ? this.selection ? this.lineIndex > this.selection.start ? this.selection.end = this.lineIndex : this.selection.start = this.lineIndex : 0 < h ? this.selection = {start:this.lineIndex - h, end:this.lineIndex} : 0 > h && (this.selection = {start:this.lineIndex, end:this.lineIndex - h}) : h && (this.selection = null);
            this.paint();
          }.bind(this), !1);
          a.addEventListener("focus", function(c) {
            this.hasFocus = !0;
          }.bind(this), !1);
          a.addEventListener("blur", function(c) {
            this.hasFocus = !1;
          }.bind(this), !1);
          var b = 33, g = 34, t = 36, r = 35, l = 38, q = 40, f = 37, d = 39, e = 65, c = 67, n = 78, x = 84, G = 72, I = 83;
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
          var a = this.canvas.parentElement, b = a.clientWidth, a = a.clientHeight - 1, g = window.devicePixelRatio || 1;
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
          var b = this.textMarginLeft, g = b + (this.showLineNumbers ? 5 * (String(this.buffer.length).length + 2) : 0), t = g + (this.showLineTime ? 40 : 10), r = t + 25;
          this.context.font = this.fontSize + 'px Consolas, "Liberation Mono", Courier, monospace';
          this.context.setTransform(this.ratio, 0, 0, this.ratio, 0, 0);
          for (var l = this.canvas.width, q = this.lineHeight, f = 0;f < a;f++) {
            var d = f * this.lineHeight, e = this.pageIndex + f, c = this.buffer.get(e), n = this.buffer.getFormat(e), x = this.buffer.getRepeat(e), G = 1 < e ? this.buffer.getTime(e) - this.buffer.getTime(0) : 0;
            this.context.fillStyle = e % 2 ? this.lineColor : this.alternateLineColor;
            n && n.backgroundFillStyle && (this.context.fillStyle = n.backgroundFillStyle);
            this.context.fillRect(0, d, l, q);
            this.context.fillStyle = this.selectionTextColor;
            this.context.fillStyle = this.textColor;
            this.selection && e >= this.selection.start && e <= this.selection.end && (this.context.fillStyle = this.selectionColor, this.context.fillRect(0, d, l, q), this.context.fillStyle = this.selectionTextColor);
            this.hasFocus && e === this.lineIndex && (this.context.fillStyle = this.selectionColor, this.context.fillRect(0, d, l, q), this.context.fillStyle = this.selectionTextColor);
            0 < this.columnIndex && (c = c.substring(this.columnIndex));
            d = (f + 1) * this.lineHeight - this.textMarginBottom;
            this.showLineNumbers && this.context.fillText(String(e), b, d);
            this.showLineTime && this.context.fillText(G.toFixed(1).padLeft(" ", 6), g, d);
            1 < x && this.context.fillText(String(x).padLeft(" ", 3), t, d);
            this.context.fillText(c, r, d);
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
      g.Terminal = v;
    })(p.Terminal || (p.Terminal = {}));
  })(m.Tools || (m.Tools = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(m) {
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
            var g = 1 * (performance.now() - this._lastTime) + 0 * this._lastWeightedTime, m = this._context, k = 2 * this._ratio, t = 30 * this._ratio, r = performance;
            r.memory && (t += 30 * this._ratio);
            var l = (this._canvas.width - t) / (k + 1) | 0, q = this._index++;
            this._index > l && (this._index = 0);
            l = this._canvas.height;
            m.globalAlpha = 1;
            m.fillStyle = "black";
            m.fillRect(t + q * (k + 1), 0, 4 * k, this._canvas.height);
            var f = Math.min(1E3 / 60 / g, 1);
            m.fillStyle = "#00FF00";
            m.globalAlpha = b ? .5 : 1;
            f = l / 2 * f | 0;
            m.fillRect(t + q * (k + 1), l - f, k, f);
            a && (f = Math.min(1E3 / 240 / a, 1), m.fillStyle = "#FF6347", f = l / 2 * f | 0, m.fillRect(t + q * (k + 1), l / 2 - f, k, f));
            0 === q % 16 && (m.globalAlpha = 1, m.fillStyle = "black", m.fillRect(0, 0, t, this._canvas.height), m.fillStyle = "white", m.font = 8 * this._ratio + "px Arial", m.textBaseline = "middle", k = (1E3 / g).toFixed(0), a && (k += " " + a.toFixed(0)), r.memory && (k += " " + (r.memory.usedJSHeapSize / 1024 / 1024).toFixed(2)), m.fillText(k, 2 * this._ratio, this._containerHeight / 2 * this._ratio));
            this._lastTime = performance.now();
            this._lastWeightedTime = g;
          }
        };
        return b;
      }();
      g.FPS = b;
    })(m.Mini || (m.Mini = {}));
  })(m.Tools || (m.Tools = {}));
})(Shumway || (Shumway = {}));
console.timeEnd("Load Shared Dependencies");
console.time("Load GFX Dependencies");
(function(m) {
  (function(p) {
    function g(c, e, a) {
      return u && a ? "string" === typeof e ? (c = m.ColorUtilities.cssStyleToRGBA(e), m.ColorUtilities.rgbaToCSSStyle(a.transformRGBA(c))) : e instanceof CanvasGradient && e._template ? e._template.createCanvasGradient(c, a) : e : e;
    }
    var b = m.NumberUtilities.clamp;
    (function(c) {
      c[c.None = 0] = "None";
      c[c.Brief = 1] = "Brief";
      c[c.Verbose = 2] = "Verbose";
    })(p.TraceLevel || (p.TraceLevel = {}));
    var w = m.Metrics.Counter.instance;
    p.frameCounter = new m.Metrics.Counter(!0);
    p.traceLevel = 2;
    p.writer = null;
    p.frameCount = function(c) {
      w.count(c);
      p.frameCounter.count(c);
    };
    p.timelineBuffer = new m.Tools.Profiler.TimelineBuffer("GFX");
    p.enterTimeline = function(c, e) {
    };
    p.leaveTimeline = function(c, e) {
    };
    var v = null, a = null, h = null, u = !0;
    u && "undefined" !== typeof CanvasRenderingContext2D && (v = CanvasGradient.prototype.addColorStop, a = CanvasRenderingContext2D.prototype.createLinearGradient, h = CanvasRenderingContext2D.prototype.createRadialGradient, CanvasRenderingContext2D.prototype.createLinearGradient = function(c, e, a, d) {
      return (new t(c, e, a, d)).createCanvasGradient(this, null);
    }, CanvasRenderingContext2D.prototype.createRadialGradient = function(c, e, a, d, f, b) {
      return (new r(c, e, a, d, f, b)).createCanvasGradient(this, null);
    }, CanvasGradient.prototype.addColorStop = function(c, e) {
      v.call(this, c, e);
      this._template.addColorStop(c, e);
    });
    var k = function() {
      return function(c, e) {
        this.offset = c;
        this.color = e;
      };
    }(), t = function() {
      function c(e, a, d, f) {
        this.x0 = e;
        this.y0 = a;
        this.x1 = d;
        this.y1 = f;
        this.colorStops = [];
      }
      c.prototype.addColorStop = function(c, e) {
        this.colorStops.push(new k(c, e));
      };
      c.prototype.createCanvasGradient = function(c, e) {
        for (var d = a.call(c, this.x0, this.y0, this.x1, this.y1), f = this.colorStops, b = 0;b < f.length;b++) {
          var n = f[b], x = n.offset, n = n.color, n = e ? g(c, n, e) : n;
          v.call(d, x, n);
        }
        d._template = this;
        d._transform = this._transform;
        return d;
      };
      return c;
    }(), r = function() {
      function c(e, a, d, f, b, n) {
        this.x0 = e;
        this.y0 = a;
        this.r0 = d;
        this.x1 = f;
        this.y1 = b;
        this.r1 = n;
        this.colorStops = [];
      }
      c.prototype.addColorStop = function(c, e) {
        this.colorStops.push(new k(c, e));
      };
      c.prototype.createCanvasGradient = function(c, e) {
        for (var a = h.call(c, this.x0, this.y0, this.r0, this.x1, this.y1, this.r1), d = this.colorStops, f = 0;f < d.length;f++) {
          var b = d[f], n = b.offset, b = b.color, b = e ? g(c, b, e) : b;
          v.call(a, n, b);
        }
        a._template = this;
        a._transform = this._transform;
        return a;
      };
      return c;
    }(), l;
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
    })(l || (l = {}));
    var q = function() {
      function c(e) {
        this._commands = new Uint8Array(c._arrayBufferPool.acquire(8), 0, 8);
        this._commandPosition = 0;
        this._data = new Float64Array(c._arrayBufferPool.acquire(8 * Float64Array.BYTES_PER_ELEMENT), 0, 8);
        this._dataPosition = 0;
        e instanceof c && this.addPath(e);
      }
      c._apply = function(c, e) {
        var a = c._commands, d = c._data, f = 0, b = 0;
        e.beginPath();
        for (var n = c._commandPosition;f < n;) {
          switch(a[f++]) {
            case 1:
              e.closePath();
              break;
            case 2:
              e.moveTo(d[b++], d[b++]);
              break;
            case 3:
              e.lineTo(d[b++], d[b++]);
              break;
            case 4:
              e.quadraticCurveTo(d[b++], d[b++], d[b++], d[b++]);
              break;
            case 5:
              e.bezierCurveTo(d[b++], d[b++], d[b++], d[b++], d[b++], d[b++]);
              break;
            case 6:
              e.arcTo(d[b++], d[b++], d[b++], d[b++], d[b++]);
              break;
            case 7:
              e.rect(d[b++], d[b++], d[b++], d[b++]);
              break;
            case 8:
              e.arc(d[b++], d[b++], d[b++], d[b++], d[b++], !!d[b++]);
              break;
            case 9:
              e.save();
              break;
            case 10:
              e.restore();
              break;
            case 11:
              e.transform(d[b++], d[b++], d[b++], d[b++], d[b++], d[b++]);
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
      c.prototype._writeData = function(c, e, a, d, f, b) {
        var n = arguments.length;
        this._dataPosition + n >= this._data.length && this._ensureDataCapacity(this._dataPosition + n);
        var x = this._data, l = this._dataPosition;
        x[l] = c;
        x[l + 1] = e;
        2 < n && (x[l + 2] = a, x[l + 3] = d, 4 < n && (x[l + 4] = f, 6 === n && (x[l + 5] = b)));
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
      c.prototype.quadraticCurveTo = function(c, e, a, d) {
        this._writeCommand(4);
        this._writeData(c, e, a, d);
      };
      c.prototype.bezierCurveTo = function(c, e, a, d, f, b) {
        this._writeCommand(5);
        this._writeData(c, e, a, d, f, b);
      };
      c.prototype.arcTo = function(c, e, a, d, f) {
        this._writeCommand(6);
        this._writeData(c, e, a, d, f);
      };
      c.prototype.rect = function(c, e, a, d) {
        this._writeCommand(7);
        this._writeData(c, e, a, d);
      };
      c.prototype.arc = function(c, e, a, d, f, b) {
        this._writeCommand(8);
        this._writeData(c, e, a, d, f, +b);
      };
      c.prototype.addPath = function(c, e) {
        e && (this._writeCommand(9), this._writeCommand(11), this._writeData(e.a, e.b, e.c, e.d, e.e, e.f));
        var a = this._commandPosition + c._commandPosition;
        a >= this._commands.length && this._ensureCommandCapacity(a);
        for (var d = this._commands, f = c._commands, b = this._commandPosition, n = 0;b < a;b++) {
          d[b] = f[n++];
        }
        this._commandPosition = a;
        a = this._dataPosition + c._dataPosition;
        a >= this._data.length && this._ensureDataCapacity(a);
        d = this._data;
        f = c._data;
        b = this._dataPosition;
        for (n = 0;b < a;b++) {
          d[b] = f[n++];
        }
        this._dataPosition = a;
        e && this._writeCommand(10);
      };
      c._arrayBufferPool = new m.ArrayBufferPool;
      return c;
    }();
    p.Path = q;
    if ("undefined" !== typeof CanvasRenderingContext2D && ("undefined" === typeof Path2D || !Path2D.prototype.addPath)) {
      var f = CanvasRenderingContext2D.prototype.fill;
      CanvasRenderingContext2D.prototype.fill = function(c, e) {
        arguments.length && (c instanceof q ? q._apply(c, this) : e = c);
        e ? f.call(this, e) : f.call(this);
      };
      var d = CanvasRenderingContext2D.prototype.stroke;
      CanvasRenderingContext2D.prototype.stroke = function(c, e) {
        arguments.length && (c instanceof q ? q._apply(c, this) : e = c);
        e ? d.call(this, e) : d.call(this);
      };
      var e = CanvasRenderingContext2D.prototype.clip;
      CanvasRenderingContext2D.prototype.clip = function(c, a) {
        arguments.length && (c instanceof q ? q._apply(c, this) : a = c);
        a ? e.call(this, a) : e.call(this);
      };
      window.Path2D = q;
    }
    if ("undefined" !== typeof CanvasPattern && Path2D.prototype.addPath) {
      l = function(c) {
        this._transform = c;
        this._template && (this._template._transform = c);
      };
      CanvasPattern.prototype.setTransform || (CanvasPattern.prototype.setTransform = l);
      CanvasGradient.prototype.setTransform || (CanvasGradient.prototype.setTransform = l);
      var c = CanvasRenderingContext2D.prototype.fill, n = CanvasRenderingContext2D.prototype.stroke;
      CanvasRenderingContext2D.prototype.fill = function(e, a) {
        var d = !!this.fillStyle._transform;
        if ((this.fillStyle instanceof CanvasPattern || this.fillStyle instanceof CanvasGradient) && d && e instanceof Path2D) {
          var d = this.fillStyle._transform, f;
          try {
            f = d.inverse();
          } catch (b) {
            f = d = p.Geometry.Matrix.createIdentitySVGMatrix();
          }
          this.transform(d.a, d.b, d.c, d.d, d.e, d.f);
          d = new Path2D;
          d.addPath(e, f);
          c.call(this, d, a);
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
          var d = this.lineWidth;
          this.lineWidth *= (e.a + e.d) / 2;
          n.call(this, a);
          this.transform(e.a, e.b, e.c, e.d, e.e, e.f);
          this.lineWidth = d;
        } else {
          0 === arguments.length ? n.call(this) : 1 === arguments.length && n.call(this, c);
        }
      };
    }
    "undefined" !== typeof CanvasRenderingContext2D && function() {
      function c() {
        return p.Geometry.Matrix.createSVGMatrixFromArray(this.mozCurrentTransform);
      }
      var e = "currentTransform" in CanvasRenderingContext2D.prototype;
      CanvasRenderingContext2D.prototype.flashStroke = function(c, a) {
        if (e) {
          var d = this.currentTransform, f = new Path2D;
          f.addPath(c, d);
          var n = this.lineWidth;
          this.setTransform(1, 0, 0, 1, 0, 0);
          switch(a) {
            case 1:
              this.lineWidth = b(n * (m.getScaleX(d) + m.getScaleY(d)) / 2, 1, 1024);
              break;
            case 2:
              this.lineWidth = b(n * m.getScaleY(d), 1, 1024);
              break;
            case 3:
              this.lineWidth = b(n * m.getScaleX(d), 1, 1024);
          }
          this.stroke(f);
          this.setTransform(d.a, d.b, d.c, d.d, d.e, d.f);
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
          CanvasRenderingContext2D.prototype.setTransform = function(c, e, d, f, b, n) {
            var x = this.currentTransform;
            x.a = c;
            x.b = e;
            x.c = d;
            x.d = f;
            x.e = b;
            x.f = n;
            a.call(this, c, e, d, f, b, n);
          };
          Object.defineProperty(CanvasRenderingContext2D.prototype, "currentTransform", {get:function() {
            return this._currentTransform || (this._currentTransform = p.Geometry.Matrix.createIdentitySVGMatrix());
          }});
        }
      }
    }();
    if ("undefined" !== typeof CanvasRenderingContext2D && void 0 === CanvasRenderingContext2D.prototype.globalColorMatrix) {
      var x = CanvasRenderingContext2D.prototype.fill, G = CanvasRenderingContext2D.prototype.stroke, I = CanvasRenderingContext2D.prototype.fillText, V = CanvasRenderingContext2D.prototype.strokeText;
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
        0 === arguments.length ? G.call(this) : 1 === arguments.length && G.call(this, c);
        a && (this.strokeStyle = a);
      };
      CanvasRenderingContext2D.prototype.fillText = function(c, e, a, d) {
        var f = null;
        this._globalColorMatrix && (f = this.fillStyle, this.fillStyle = g(this, this.fillStyle, this._globalColorMatrix));
        3 === arguments.length ? I.call(this, c, e, a) : 4 === arguments.length ? I.call(this, c, e, a, d) : m.Debug.unexpected();
        f && (this.fillStyle = f);
      };
      CanvasRenderingContext2D.prototype.strokeText = function(c, e, a, d) {
        var f = null;
        this._globalColorMatrix && (f = this.strokeStyle, this.strokeStyle = g(this, this.strokeStyle, this._globalColorMatrix));
        3 === arguments.length ? V.call(this, c, e, a) : 4 === arguments.length ? V.call(this, c, e, a, d) : m.Debug.unexpected();
        f && (this.strokeStyle = f);
      };
    }
  })(m.GFX || (m.GFX = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(m) {
    m.ScreenShot = function() {
      return function(g, b, m, p) {
        this.dataURL = g;
        this.w = b;
        this.h = m;
        this.pixelRatio = p;
      };
    }();
  })(m.GFX || (m.GFX = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  var p = function() {
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
  m.LRUList = p;
  m.getScaleX = function(g) {
    return g.a;
  };
  m.getScaleY = function(g) {
    return g.d;
  };
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
(function(m) {
  (function(p) {
    (function(g) {
      function b(a, e, c, f) {
        var b = 1 - f;
        return a * b * b + 2 * e * b * f + c * f * f;
      }
      function w(a, e, c, f, b) {
        var l = b * b, g = 1 - b, k = g * g;
        return a * g * k + 3 * e * b * k + 3 * c * g * l + f * b * l;
      }
      var v = m.NumberUtilities.clamp, a = m.NumberUtilities.pow2, h = m.NumberUtilities.epsilonEquals;
      g.radianToDegrees = function(a) {
        return 180 * a / Math.PI;
      };
      g.degreesToRadian = function(a) {
        return a * Math.PI / 180;
      };
      g.quadraticBezier = b;
      g.quadraticBezierExtreme = function(a, e, c) {
        var f = (a - e) / (a - 2 * e + c);
        return 0 > f ? a : 1 < f ? c : b(a, e, c, f);
      };
      g.cubicBezier = w;
      g.cubicBezierExtremes = function(a, e, c, f) {
        var b = e - a, l;
        l = 2 * (c - e);
        var g = f - c;
        b + g === l && (g *= 1.0001);
        var k = 2 * b - l, h = l - 2 * b, h = Math.sqrt(h * h - 4 * b * (b - l + g));
        l = 2 * (b - l + g);
        b = (k + h) / l;
        k = (k - h) / l;
        h = [];
        0 <= b && 1 >= b && h.push(w(a, e, c, f, b));
        0 <= k && 1 >= k && h.push(w(a, e, c, f, k));
        return h;
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
          var d = e.y * a.x - e.x * a.y + (a.y - e.y) * this.x + (e.x - a.x) * this.y, f = e.x * c.y - e.y * c.x + (e.y - c.y) * this.x + (c.x - e.x) * this.y;
          if (0 > d != 0 > f) {
            return !1;
          }
          e = -c.y * a.x + e.y * (a.x - c.x) + e.x * (c.y - a.y) + c.x * a.y;
          0 > e && (d = -d, f = -f, e = -e);
          return 0 < d && 0 < f && d + f < e;
        };
        a.createEmpty = function() {
          return new a(0, 0);
        };
        a.createEmptyPoints = function(e) {
          for (var c = [], f = 0;f < e;f++) {
            c.push(new a(0, 0));
          }
          return c;
        };
        return a;
      }();
      g.Point = u;
      var k = function() {
        function a(e, c, d) {
          this.x = e;
          this.y = c;
          this.z = d;
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
          for (var c = [], f = 0;f < e;f++) {
            c.push(new a(0, 0, 0));
          }
          return c;
        };
        return a;
      }();
      g.Point3D = k;
      var t = function() {
        function a(e, c, f, b) {
          this.setElements(e, c, f, b);
          a.allocationCount++;
        }
        a.prototype.setElements = function(e, c, a, d) {
          this.x = e;
          this.y = c;
          this.w = a;
          this.h = d;
        };
        a.prototype.set = function(e) {
          this.x = e.x;
          this.y = e.y;
          this.w = e.w;
          this.h = e.h;
        };
        a.prototype.contains = function(e) {
          var c = e.x + e.w, a = e.y + e.h, d = this.x + this.w, f = this.y + this.h;
          return e.x >= this.x && e.x < d && e.y >= this.y && e.y < f && c > this.x && c <= d && a > this.y && a <= f;
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
              var d = this.x + this.w;
              d < e.x + e.w && (d = e.x + e.w);
              var f = this.y + this.h;
              f < e.y + e.h && (f = e.y + e.h);
              this.x = c;
              this.y = a;
              this.w = d - c;
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
          var f = a._temporary;
          f.set(e);
          c.transformRectangleAABB(f);
          return this.intersects(f);
        };
        a.prototype.intersectsTranslated = function(e, c, a) {
          if (this.isEmpty() || e.isEmpty()) {
            return !1;
          }
          var d = Math.max(this.x, e.x + c), f = Math.max(this.y, e.y + a);
          c = Math.min(this.x + this.w, e.x + c + e.w) - d;
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
      g.Rectangle = t;
      var r = function() {
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
          for (var c = new u(Number.MAX_VALUE, Number.MAX_VALUE), a = new u(Number.MIN_VALUE, Number.MIN_VALUE), d = 0;4 > d;d++) {
            var f = e[d].x, b = e[d].y;
            c.x = Math.min(c.x, f);
            c.y = Math.min(c.y, b);
            a.x = Math.max(a.x, f);
            a.y = Math.max(a.y, b);
          }
          return new t(c.x, c.y, a.x - c.x, a.y - c.y);
        };
        a.prototype.intersects = function(e) {
          return this.intersectsOneWay(e) && e.intersectsOneWay(this);
        };
        a.prototype.intersectsOneWay = function(e) {
          for (var c = 0;2 > c;c++) {
            for (var a = 0;4 > a;a++) {
              var d = e.corners[a].dot(this.axes[c]), f, b;
              0 === a ? b = f = d : d < f ? f = d : d > b && (b = d);
            }
            if (f > 1 + this.origins[c] || b < this.origins[c]) {
              return !1;
            }
          }
          return !0;
        };
        return a;
      }();
      g.OBB = r;
      (function(a) {
        a[a.Unknown = 0] = "Unknown";
        a[a.Identity = 1] = "Identity";
        a[a.Translation = 2] = "Translation";
      })(g.MatrixType || (g.MatrixType = {}));
      var l = function() {
        function a(e, c, f, b, l, g) {
          this._data = new Float64Array(6);
          this._type = 0;
          this.setElements(e, c, f, b, l, g);
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
        a.prototype.setElements = function(a, c, d, f, b, l) {
          var g = this._data;
          g[0] = a;
          g[1] = c;
          g[2] = d;
          g[3] = f;
          g[4] = b;
          g[5] = l;
          this._type = 0;
        };
        a.prototype.set = function(a) {
          var c = this._data, d = a._data;
          c[0] = d[0];
          c[1] = d[1];
          c[2] = d[2];
          c[3] = d[3];
          c[4] = d[4];
          c[5] = d[5];
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
        a.prototype.transform = function(a, c, d, f, b, l) {
          var g = this._data, k = g[0], h = g[1], r = g[2], q = g[3], m = g[4], t = g[5];
          g[0] = k * a + r * c;
          g[1] = h * a + q * c;
          g[2] = k * d + r * f;
          g[3] = h * d + q * f;
          g[4] = k * b + r * l + m;
          g[5] = h * b + q * l + t;
          this._type = 0;
          return this;
        };
        a.prototype.transformRectangle = function(a, c) {
          var d = this._data, f = d[0], b = d[1], l = d[2], g = d[3], k = d[4], d = d[5], h = a.x, r = a.y, q = a.w, m = a.h;
          c[0].x = f * h + l * r + k;
          c[0].y = b * h + g * r + d;
          c[1].x = f * (h + q) + l * r + k;
          c[1].y = b * (h + q) + g * r + d;
          c[2].x = f * (h + q) + l * (r + m) + k;
          c[2].y = b * (h + q) + g * (r + m) + d;
          c[3].x = f * h + l * (r + m) + k;
          c[3].y = b * h + g * (r + m) + d;
        };
        a.prototype.isTranslationOnly = function() {
          if (2 === this._type) {
            return !0;
          }
          var a = this._data;
          return 1 === a[0] && 0 === a[1] && 0 === a[2] && 1 === a[3] || h(a[0], 1) && h(a[1], 0) && h(a[2], 0) && h(a[3], 1) ? (this._type = 2, !0) : !1;
        };
        a.prototype.transformRectangleAABB = function(a) {
          var c = this._data;
          if (1 !== this._type) {
            if (2 === this._type) {
              a.x += c[4], a.y += c[5];
            } else {
              var d = c[0], f = c[1], b = c[2], l = c[3], g = c[4], k = c[5], h = a.x, r = a.y, q = a.w, m = a.h, c = d * h + b * r + g, t = f * h + l * r + k, u = d * (h + q) + b * r + g, p = f * (h + q) + l * r + k, v = d * (h + q) + b * (r + m) + g, q = f * (h + q) + l * (r + m) + k, d = d * h + b * (r + m) + g, f = f * h + l * (r + m) + k, l = 0;
              c > u && (l = c, c = u, u = l);
              v > d && (l = v, v = d, d = l);
              a.x = c < v ? c : v;
              a.w = (u > d ? u : d) - a.x;
              t > p && (l = t, t = p, p = l);
              q > f && (l = q, q = f, f = l);
              a.y = t < q ? t : q;
              a.h = (p > f ? p : f) - a.y;
            }
          }
        };
        a.prototype.scale = function(a, c) {
          var d = this._data;
          d[0] *= a;
          d[1] *= c;
          d[2] *= a;
          d[3] *= c;
          d[4] *= a;
          d[5] *= c;
          this._type = 0;
          return this;
        };
        a.prototype.scaleClone = function(a, c) {
          return 1 === a && 1 === c ? this : this.clone().scale(a, c);
        };
        a.prototype.rotate = function(a) {
          var c = this._data, d = c[0], f = c[1], b = c[2], l = c[3], g = c[4], k = c[5], h = Math.cos(a);
          a = Math.sin(a);
          c[0] = h * d - a * f;
          c[1] = a * d + h * f;
          c[2] = h * b - a * l;
          c[3] = a * b + h * l;
          c[4] = h * g - a * k;
          c[5] = a * g + h * k;
          this._type = 0;
          return this;
        };
        a.prototype.concat = function(a) {
          if (1 === a._type) {
            return this;
          }
          var c = this._data;
          a = a._data;
          var d = c[0] * a[0], f = 0, b = 0, l = c[3] * a[3], g = c[4] * a[0] + a[4], k = c[5] * a[3] + a[5];
          if (0 !== c[1] || 0 !== c[2] || 0 !== a[1] || 0 !== a[2]) {
            d += c[1] * a[2], l += c[2] * a[1], f += c[0] * a[1] + c[1] * a[3], b += c[2] * a[0] + c[3] * a[2], g += c[5] * a[2], k += c[4] * a[1];
          }
          c[0] = d;
          c[1] = f;
          c[2] = b;
          c[3] = l;
          c[4] = g;
          c[5] = k;
          this._type = 0;
          return this;
        };
        a.prototype.concatClone = function(a) {
          return this.clone().concat(a);
        };
        a.prototype.preMultiply = function(a) {
          var c = this._data, d = a._data;
          if (2 === a._type && this._type & 3) {
            c[4] += d[4], c[5] += d[5], this._type = 2;
          } else {
            if (1 !== a._type) {
              a = d[0] * c[0];
              var f = 0, b = 0, l = d[3] * c[3], g = d[4] * c[0] + c[4], k = d[5] * c[3] + c[5];
              if (0 !== d[1] || 0 !== d[2] || 0 !== c[1] || 0 !== c[2]) {
                a += d[1] * c[2], l += d[2] * c[1], f += d[0] * c[1] + d[1] * c[3], b += d[2] * c[0] + d[3] * c[2], g += d[5] * c[2], k += d[4] * c[1];
              }
              c[0] = a;
              c[1] = f;
              c[2] = b;
              c[3] = l;
              c[4] = g;
              c[5] = k;
              this._type = 0;
            }
          }
        };
        a.prototype.translate = function(a, c) {
          var d = this._data;
          d[4] += a;
          d[5] += c;
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
            var c = this._data, d = a.x, f = a.y;
            a.x = c[0] * d + c[2] * f + c[4];
            a.y = c[1] * d + c[3] * f + c[5];
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
            var c = this._data, d = a.x, f = a.y;
            a.x = c[0] * d + c[2] * f;
            a.y = c[1] * d + c[3] * f;
          }
        };
        a.prototype.inverse = function(a) {
          var c = this._data, d = a._data;
          if (1 === this._type) {
            a.setIdentity();
          } else {
            if (2 === this._type) {
              d[0] = 1, d[1] = 0, d[2] = 0, d[3] = 1, d[4] = -c[4], d[5] = -c[5], a._type = 2;
            } else {
              var f = c[1], b = c[2], l = c[4], g = c[5];
              if (0 === f && 0 === b) {
                var k = d[0] = 1 / c[0], c = d[3] = 1 / c[3];
                d[1] = 0;
                d[2] = 0;
                d[4] = -k * l;
                d[5] = -c * g;
              } else {
                var k = c[0], c = c[3], h = k * c - f * b;
                if (0 === h) {
                  a.setIdentity();
                  return;
                }
                h = 1 / h;
                d[0] = c * h;
                f = d[1] = -f * h;
                b = d[2] = -b * h;
                c = d[3] = k * h;
                d[4] = -(d[0] * l + b * g);
                d[5] = -(f * l + c * g);
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
          } catch (f) {
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
          var d = c._data;
          a.transform(d[0], d[1], d[2], d[3], d[4], d[5]);
        };
        return a;
      }();
      g.Matrix = l;
      l = function() {
        function a(e) {
          this._m = new Float32Array(e);
        }
        a.prototype.asWebGLMatrix = function() {
          return this._m;
        };
        a.createCameraLookAt = function(e, c, f) {
          c = e.clone().sub(c).normalize();
          f = f.clone().cross(c).normalize();
          var b = c.clone().cross(f);
          return new a([f.x, f.y, f.z, 0, b.x, b.y, b.z, 0, c.x, c.y, c.z, 0, e.x, e.y, e.z, 1]);
        };
        a.createLookAt = function(e, c, f) {
          c = e.clone().sub(c).normalize();
          f = f.clone().cross(c).normalize();
          var b = c.clone().cross(f);
          return new a([f.x, b.x, c.x, 0, b.x, b.y, c.y, 0, c.x, b.z, c.z, 0, -f.dot(e), -b.dot(e), -c.dot(e), 1]);
        };
        a.prototype.mul = function(a) {
          a = [a.x, a.y, a.z, 0];
          for (var c = this._m, d = [], f = 0;4 > f;f++) {
            d[f] = 0;
            for (var b = 4 * f, l = 0;4 > l;l++) {
              d[f] += c[b + l] * a[l];
            }
          }
          return new k(d[0], d[1], d[2]);
        };
        a.create2DProjection = function(e, c, f) {
          return new a([2 / e, 0, 0, 0, 0, -2 / c, 0, 0, 0, 0, 2 / f, 0, -1, 1, 0, 1]);
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
        a.createScale = function(e, c, f) {
          return new a([e, 0, 0, 0, 0, c, 0, 0, 0, 0, f, 0, 0, 0, 0, 1]);
        };
        a.createMultiply = function(e, c) {
          var f = e._m, b = c._m, l = f[0], g = f[1], k = f[2], h = f[3], r = f[4], q = f[5], m = f[6], t = f[7], u = f[8], p = f[9], v = f[10], w = f[11], z = f[12], A = f[13], C = f[14], f = f[15], y = b[0], F = b[1], B = b[2], E = b[3], H = b[4], J = b[5], K = b[6], L = b[7], M = b[8], N = b[9], O = b[10], P = b[11], Q = b[12], R = b[13], S = b[14], b = b[15];
          return new a([l * y + g * H + k * M + h * Q, l * F + g * J + k * N + h * R, l * B + g * K + k * O + h * S, l * E + g * L + k * P + h * b, r * y + q * H + m * M + t * Q, r * F + q * J + m * N + t * R, r * B + q * K + m * O + t * S, r * E + q * L + m * P + t * b, u * y + p * H + v * M + w * Q, u * F + p * J + v * N + w * R, u * B + p * K + v * O + w * S, u * E + p * L + v * P + w * b, z * y + A * H + C * M + f * Q, z * F + A * J + C * N + f * R, z * B + A * K + C * O + f * S, z * E + A * 
          L + C * P + f * b]);
        };
        a.createInverse = function(e) {
          var c = e._m;
          e = c[0];
          var f = c[1], b = c[2], l = c[3], g = c[4], k = c[5], h = c[6], r = c[7], q = c[8], m = c[9], t = c[10], u = c[11], p = c[12], v = c[13], w = c[14], c = c[15], z = t * c, A = w * u, C = h * c, y = w * r, F = h * u, B = t * r, E = b * c, H = w * l, J = b * u, K = t * l, L = b * r, M = h * l, N = q * v, O = p * m, P = g * v, Q = p * k, R = g * m, S = q * k, Z = e * v, aa = p * f, ba = e * m, ca = q * f, da = e * k, ea = g * f, ga = z * k + y * m + F * v - (A * k + C * m + B * v), ha = A * 
          f + E * m + K * v - (z * f + H * m + J * v), v = C * f + H * k + L * v - (y * f + E * k + M * v), f = B * f + J * k + M * m - (F * f + K * k + L * m), k = 1 / (e * ga + g * ha + q * v + p * f);
          return new a([k * ga, k * ha, k * v, k * f, k * (A * g + C * q + B * p - (z * g + y * q + F * p)), k * (z * e + H * q + J * p - (A * e + E * q + K * p)), k * (y * e + E * g + M * p - (C * e + H * g + L * p)), k * (F * e + K * g + L * q - (B * e + J * g + M * q)), k * (N * r + Q * u + R * c - (O * r + P * u + S * c)), k * (O * l + Z * u + ca * c - (N * l + aa * u + ba * c)), k * (P * l + aa * r + da * c - (Q * l + Z * r + ea * c)), k * (S * l + ba * r + ea * u - (R * l + ca * r + da * u)), 
          k * (P * t + S * w + O * h - (R * w + N * h + Q * t)), k * (ba * w + N * b + aa * t - (Z * t + ca * w + O * b)), k * (Z * h + ea * w + Q * b - (da * w + P * b + aa * h)), k * (da * t + R * b + ca * h - (ba * h + ea * t + S * b))]);
        };
        return a;
      }();
      g.Matrix3D = l;
      l = function() {
        function a(e, c, f) {
          void 0 === f && (f = 7);
          var b = this.size = 1 << f;
          this.sizeInBits = f;
          this.w = e;
          this.h = c;
          this.c = Math.ceil(e / b);
          this.r = Math.ceil(c / b);
          this.grid = [];
          for (e = 0;e < this.r;e++) {
            for (this.grid.push([]), c = 0;c < this.c;c++) {
              this.grid[e][c] = new a.Cell(new t(c * b, e * b, b, b));
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
          var c = a.x >> this.sizeInBits, d = a.y >> this.sizeInBits;
          if (!(c >= this.c || d >= this.r)) {
            0 > c && (c = 0);
            0 > d && (d = 0);
            var f = this.grid[d][c];
            a = a.clone();
            a.snap();
            if (f.region.contains(a)) {
              f.bounds.isEmpty() ? f.bounds.set(a) : f.bounds.contains(a) || f.bounds.union(a);
            } else {
              for (var b = Math.min(this.c, Math.ceil((a.x + a.w) / this.size)) - c, l = Math.min(this.r, Math.ceil((a.y + a.h) / this.size)) - d, g = 0;g < b;g++) {
                for (var k = 0;k < l;k++) {
                  f = this.grid[d + k][c + g], f = f.region.clone(), f.intersect(a), f.isEmpty() || this.addDirtyRectangle(f);
                }
              }
            }
          }
        };
        a.prototype.gatherRegions = function(a) {
          for (var c = 0;c < this.r;c++) {
            for (var d = 0;d < this.c;d++) {
              this.grid[c][d].bounds.isEmpty() || a.push(this.grid[c][d].bounds);
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
          for (var c = 0, d = 0;d < this.r;d++) {
            for (var f = 0;f < this.c;f++) {
              c += this.grid[d][f].region.area();
            }
          }
          return c / a;
        };
        a.prototype.render = function(a, c) {
          function d(c) {
            a.rect(c.x, c.y, c.w, c.h);
          }
          if (c && c.drawGrid) {
            a.strokeStyle = "white";
            for (var f = 0;f < this.r;f++) {
              for (var b = 0;b < this.c;b++) {
                var l = this.grid[f][b];
                a.beginPath();
                d(l.region);
                a.closePath();
                a.stroke();
              }
            }
          }
          a.strokeStyle = "#E0F8D8";
          for (f = 0;f < this.r;f++) {
            for (b = 0;b < this.c;b++) {
              l = this.grid[f][b], a.beginPath(), d(l.bounds), a.closePath(), a.stroke();
            }
          }
        };
        a.tmpRectangle = t.createEmpty();
        return a;
      }();
      g.DirtyRegion = l;
      (function(a) {
        var e = function() {
          function c(c) {
            this.region = c;
            this.bounds = t.createEmpty();
          }
          c.prototype.clear = function() {
            this.bounds.setEmpty();
          };
          return c;
        }();
        a.Cell = e;
      })(l = g.DirtyRegion || (g.DirtyRegion = {}));
      var q = function() {
        function a(e, c, d, f, b, l) {
          this.index = e;
          this.x = c;
          this.y = d;
          this.scale = l;
          this.bounds = new t(c * f, d * b, f, b);
        }
        a.prototype.getOBB = function() {
          if (this._obb) {
            return this._obb;
          }
          this.bounds.getCorners(a.corners);
          return this._obb = new r(a.corners);
        };
        a.corners = u.createEmptyPoints(4);
        return a;
      }();
      g.Tile = q;
      var f = function() {
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
            for (var l = 0;l < this.columns;l++) {
              this.tiles.push(new q(e++, l, c, d, f, b));
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
        a.prototype.getFewTiles = function(e, c, f) {
          void 0 === f && (f = !0);
          if (c.isTranslationOnly() && 1 === this.tiles.length) {
            return this.tiles[0].bounds.intersectsTranslated(e, c.tx, c.ty) ? [this.tiles[0]] : [];
          }
          c.transformRectangle(e, a._points);
          var b;
          e = new t(0, 0, this.w, this.h);
          f && (b = new r(a._points));
          e.intersect(r.getBounds(a._points));
          if (e.isEmpty()) {
            return [];
          }
          var l = e.x / this.tileW | 0;
          c = e.y / this.tileH | 0;
          var g = Math.ceil((e.x + e.w) / this.tileW) | 0, k = Math.ceil((e.y + e.h) / this.tileH) | 0, l = v(l, 0, this.columns), g = v(g, 0, this.columns);
          c = v(c, 0, this.rows);
          for (var k = v(k, 0, this.rows), h = [];l < g;l++) {
            for (var q = c;q < k;q++) {
              var m = this.tiles[q * this.columns + l];
              m.bounds.intersects(e) && (f ? m.getOBB().intersects(b) : 1) && h.push(m);
            }
          }
          return h;
        };
        a.prototype.getManyTiles = function(e, c) {
          function f(c, a, e) {
            return (c - a.x) * (e.y - a.y) / (e.x - a.x) + a.y;
          }
          function b(c, a, e, d, f) {
            if (!(0 > e || e >= a.columns)) {
              for (d = v(d, 0, a.rows), f = v(f + 1, 0, a.rows);d < f;d++) {
                c.push(a.tiles[d * a.columns + e]);
              }
            }
          }
          var l = a._points;
          c.transformRectangle(e, l);
          for (var g = l[0].x < l[1].x ? 0 : 1, k = l[2].x < l[3].x ? 2 : 3, k = l[g].x < l[k].x ? g : k, g = [], h = 0;5 > h;h++, k++) {
            g.push(l[k % 4]);
          }
          (g[1].x - g[0].x) * (g[3].y - g[0].y) < (g[1].y - g[0].y) * (g[3].x - g[0].x) && (l = g[1], g[1] = g[3], g[3] = l);
          var l = [], r, q, k = Math.floor(g[0].x / this.tileW), h = (k + 1) * this.tileW;
          if (g[2].x < h) {
            r = Math.min(g[0].y, g[1].y, g[2].y, g[3].y);
            q = Math.max(g[0].y, g[1].y, g[2].y, g[3].y);
            var m = Math.floor(r / this.tileH), t = Math.floor(q / this.tileH);
            b(l, this, k, m, t);
            return l;
          }
          var u = 0, p = 4, w = !1;
          if (g[0].x === g[1].x || g[0].x === g[3].x) {
            g[0].x === g[1].x ? (w = !0, u++) : p--, r = f(h, g[u], g[u + 1]), q = f(h, g[p], g[p - 1]), m = Math.floor(g[u].y / this.tileH), t = Math.floor(g[p].y / this.tileH), b(l, this, k, m, t), k++;
          }
          do {
            var D, z, A, C;
            g[u + 1].x < h ? (D = g[u + 1].y, A = !0) : (D = f(h, g[u], g[u + 1]), A = !1);
            g[p - 1].x < h ? (z = g[p - 1].y, C = !0) : (z = f(h, g[p], g[p - 1]), C = !1);
            m = Math.floor((g[u].y < g[u + 1].y ? r : D) / this.tileH);
            t = Math.floor((g[p].y > g[p - 1].y ? q : z) / this.tileH);
            b(l, this, k, m, t);
            if (A && w) {
              break;
            }
            A ? (w = !0, u++, r = f(h, g[u], g[u + 1])) : r = D;
            C ? (p--, q = f(h, g[p], g[p - 1])) : q = z;
            k++;
            h = (k + 1) * this.tileW;
          } while (u < p);
          return l;
        };
        a._points = u.createEmptyPoints(4);
        return a;
      }();
      g.TileCache = f;
      l = function() {
        function d(a, c, d) {
          this._cacheLevels = [];
          this._source = a;
          this._tileSize = c;
          this._minUntiledSize = d;
        }
        d.prototype._getTilesAtScale = function(e, c, d) {
          var b = Math.max(c.getAbsoluteScaleX(), c.getAbsoluteScaleY()), l = 0;
          1 !== b && (l = v(Math.round(Math.log(1 / b) / Math.LN2), -5, 3));
          b = a(l);
          if (this._source.hasFlags(1048576)) {
            for (;;) {
              b = a(l);
              if (d.contains(this._source.getBounds().getAbsoluteBounds().clone().scale(b, b))) {
                break;
              }
              l--;
            }
          }
          this._source.hasFlags(2097152) || (l = v(l, -5, 0));
          b = a(l);
          d = 5 + l;
          l = this._cacheLevels[d];
          if (!l) {
            var l = this._source.getBounds().getAbsoluteBounds().clone().scale(b, b), g, k;
            this._source.hasFlags(1048576) || !this._source.hasFlags(4194304) || Math.max(l.w, l.h) <= this._minUntiledSize ? (g = l.w, k = l.h) : g = k = this._tileSize;
            l = this._cacheLevels[d] = new f(l.w, l.h, g, k, b);
          }
          return l.getTiles(e, c.scaleClone(b, b));
        };
        d.prototype.fetchTiles = function(a, c, d, f) {
          var b = new t(0, 0, d.canvas.width, d.canvas.height);
          a = this._getTilesAtScale(a, c, b);
          var l;
          c = this._source;
          for (var g = 0;g < a.length;g++) {
            var k = a[g];
            k.cachedSurfaceRegion && k.cachedSurfaceRegion.surface && !c.hasFlags(1048592) || (l || (l = []), l.push(k));
          }
          l && this._cacheTiles(d, l, f, b);
          c.removeFlags(16);
          return a;
        };
        d.prototype._getTileBounds = function(a) {
          for (var c = t.createEmpty(), d = 0;d < a.length;d++) {
            c.union(a[d].bounds);
          }
          return c;
        };
        d.prototype._cacheTiles = function(a, c, d, f, b) {
          void 0 === b && (b = 4);
          var l = this._getTileBounds(c);
          a.save();
          a.setTransform(1, 0, 0, 1, 0, 0);
          a.clearRect(0, 0, f.w, f.h);
          a.translate(-l.x, -l.y);
          a.scale(c[0].scale, c[0].scale);
          var g = this._source.getBounds();
          a.translate(-g.x, -g.y);
          2 <= p.traceLevel && p.writer && p.writer.writeLn("Rendering Tiles: " + l);
          this._source.render(a, 0);
          a.restore();
          for (var g = null, k = 0;k < c.length;k++) {
            var h = c[k], r = h.bounds.clone();
            r.x -= l.x;
            r.y -= l.y;
            f.contains(r) || (g || (g = []), g.push(h));
            h.cachedSurfaceRegion = d(h.cachedSurfaceRegion, a, r);
          }
          g && (2 <= g.length ? (c = g.slice(0, g.length / 2 | 0), l = g.slice(c.length), this._cacheTiles(a, c, d, f, b - 1), this._cacheTiles(a, l, d, f, b - 1)) : this._cacheTiles(a, g, d, f, b - 1));
        };
        return d;
      }();
      g.RenderableTileCache = l;
    })(p.Geometry || (p.Geometry = {}));
  })(m.GFX || (m.GFX = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(m, p) {
  function g() {
    this.constructor = m;
  }
  for (var b in p) {
    p.hasOwnProperty(b) && (m[b] = p[b]);
  }
  g.prototype = p.prototype;
  m.prototype = new g;
};
(function(m) {
  (function(p) {
    var g = m.IntegerUtilities.roundToMultipleOfPowerOfTwo, b = p.Geometry.Rectangle;
    (function(m) {
      var v = function(a) {
        function b() {
          a.apply(this, arguments);
        }
        __extends(b, a);
        return b;
      }(p.Geometry.Rectangle);
      m.Region = v;
      var a = function() {
        function a(b, f) {
          this._root = new h(0, 0, b | 0, f | 0, !1);
        }
        a.prototype.allocate = function(a, f) {
          a = Math.ceil(a);
          f = Math.ceil(f);
          var d = this._root.insert(a, f);
          d && (d.allocator = this, d.allocated = !0);
          return d;
        };
        a.prototype.free = function(a) {
          a.clear();
          a.allocated = !1;
        };
        a.RANDOM_ORIENTATION = !0;
        a.MAX_DEPTH = 256;
        return a;
      }();
      m.CompactAllocator = a;
      var h = function(b) {
        function g(a, d, e, c, n) {
          b.call(this, a, d, e, c);
          this._children = null;
          this._horizontal = n;
          this.allocated = !1;
        }
        __extends(g, b);
        g.prototype.clear = function() {
          this._children = null;
          this.allocated = !1;
        };
        g.prototype.insert = function(a, d) {
          return this._insert(a, d, 0);
        };
        g.prototype._insert = function(f, d, e) {
          if (!(e > a.MAX_DEPTH || this.allocated || this.w < f || this.h < d)) {
            if (this._children) {
              var c;
              if ((c = this._children[0]._insert(f, d, e + 1)) || (c = this._children[1]._insert(f, d, e + 1))) {
                return c;
              }
            } else {
              return c = !this._horizontal, a.RANDOM_ORIENTATION && (c = .5 <= Math.random()), this._children = this._horizontal ? [new g(this.x, this.y, this.w, d, !1), new g(this.x, this.y + d, this.w, this.h - d, c)] : [new g(this.x, this.y, f, this.h, !0), new g(this.x + f, this.y, this.w - f, this.h, c)], c = this._children[0], c.w === f && c.h === d ? (c.allocated = !0, c) : this._insert(f, d, e + 1);
            }
          }
        };
        return g;
      }(m.Region), u = function() {
        function a(b, f, d, e) {
          this._columns = b / d | 0;
          this._rows = f / e | 0;
          this._sizeW = d;
          this._sizeH = e;
          this._freeList = [];
          this._index = 0;
          this._total = this._columns * this._rows;
        }
        a.prototype.allocate = function(a, f) {
          a = Math.ceil(a);
          f = Math.ceil(f);
          var d = this._sizeW, e = this._sizeH;
          if (a > d || f > e) {
            return null;
          }
          var c = this._freeList, b = this._index;
          return 0 < c.length ? (d = c.pop(), d.w = a, d.h = f, d.allocated = !0, d) : b < this._total ? (c = b / this._columns | 0, d = new k((b - c * this._columns) * d, c * e, a, f), d.index = b, d.allocator = this, d.allocated = !0, this._index++, d) : null;
        };
        a.prototype.free = function(a) {
          a.allocated = !1;
          this._freeList.push(a);
        };
        return a;
      }();
      m.GridAllocator = u;
      var k = function(a) {
        function b(f, d, e, c) {
          a.call(this, f, d, e, c);
          this.index = -1;
        }
        __extends(b, a);
        return b;
      }(m.Region);
      m.GridCell = k;
      var t = function() {
        return function(a, b, f) {
          this.size = a;
          this.region = b;
          this.allocator = f;
        };
      }(), r = function(a) {
        function b(f, d, e, c, n) {
          a.call(this, f, d, e, c);
          this.region = n;
        }
        __extends(b, a);
        return b;
      }(m.Region);
      m.BucketCell = r;
      v = function() {
        function a(b, f) {
          this._buckets = [];
          this._w = b | 0;
          this._h = f | 0;
          this._filled = 0;
        }
        a.prototype.allocate = function(a, f) {
          a = Math.ceil(a);
          f = Math.ceil(f);
          var d = Math.max(a, f);
          if (a > this._w || f > this._h) {
            return null;
          }
          var e = null, c, n = this._buckets;
          do {
            for (var l = 0;l < n.length && !(n[l].size >= d && (c = n[l], e = c.allocator.allocate(a, f)));l++) {
            }
            if (!e) {
              var k = this._h - this._filled;
              if (k < f) {
                return null;
              }
              var l = g(d, 8), h = 2 * l;
              h > k && (h = k);
              if (h < l) {
                return null;
              }
              k = new b(0, this._filled, this._w, h);
              this._buckets.push(new t(l, k, new u(k.w, k.h, l, l)));
              this._filled += h;
            }
          } while (!e);
          return new r(c.region.x + e.x, c.region.y + e.y, e.w, e.h, e);
        };
        a.prototype.free = function(a) {
          a.region.allocator.free(a.region);
        };
        return a;
      }();
      m.BucketAllocator = v;
    })(p.RegionAllocator || (p.RegionAllocator = {}));
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
          for (var m = 0;m < this._surfaces.length;m++) {
            var r = this._surfaces[m];
            if (r !== g && (r = r.allocate(a, b))) {
              return r;
            }
          }
          return this._createNewSurface(a, b).allocate(a, b);
        };
        a.prototype.free = function(a) {
        };
        return a;
      }();
      b.SimpleAllocator = g;
    })(p.SurfaceRegionAllocator || (p.SurfaceRegionAllocator = {}));
  })(m.GFX || (m.GFX = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(p) {
    var g = p.Geometry.Rectangle, b = p.Geometry.Matrix, w = p.Geometry.DirtyRegion;
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
    var v = p.BlendMode;
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
    })(p.NodeFlags || (p.NodeFlags = {}));
    var a = p.NodeFlags;
    (function(a) {
      a[a.Node = 1] = "Node";
      a[a.Shape = 3] = "Shape";
      a[a.Group = 5] = "Group";
      a[a.Stage = 13] = "Stage";
      a[a.Renderable = 33] = "Renderable";
    })(p.NodeType || (p.NodeType = {}));
    var h = p.NodeType;
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
    p.NodeVisitor = u;
    var k = function() {
      return function() {
      };
    }();
    p.State = k;
    var t = function(a) {
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
    }(k);
    p.PreRenderState = t;
    var r = function(a) {
      function c() {
        a.apply(this, arguments);
        this.isDirty = !0;
      }
      __extends(c, a);
      c.prototype.start = function(a, c) {
        this._dirtyRegion = c;
        var e = new t;
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
    p.PreRenderVisitor = r;
    k = function(a) {
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
    p.TracingNodeVisitor = k;
    var l = function() {
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
        null === this._transform && (this._transform = new f(this));
        return this._transform;
      };
      e.prototype.getLayer = function() {
        null === this._layer && (this._layer = new d(this));
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
            m.Debug.unexpectedCase();
        }
      };
      e.prototype.invalidate = function() {
        this._propagateFlagsUp(a.UpOnInvalidate);
      };
      e.prototype.toString = function(a) {
        void 0 === a && (a = !1);
        var e = h[this._type] + " " + this._id;
        a && (e += " " + this._bounds.toString());
        return e;
      };
      e._path = [];
      e._nextId = 0;
      return e;
    }();
    p.Node = l;
    var q = function(e) {
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
    }(l);
    p.Group = q;
    var f = function() {
      function e(a) {
        this._node = a;
        this._matrix = b.createIdentity();
        this._colorMatrix = p.ColorMatrix.createIdentity();
        this._concatenatedMatrix = b.createIdentity();
        this._invertedConcatenatedMatrix = b.createIdentity();
        this._concatenatedColorMatrix = p.ColorMatrix.createIdentity();
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
        null === this._colorMatrix && (this._colorMatrix = p.ColorMatrix.createIdentity());
        return a ? this._colorMatrix.clone() : this._colorMatrix;
      };
      e.prototype.getConcatenatedMatrix = function(a) {
        void 0 === a && (a = !1);
        if (this._node.hasFlags(512)) {
          for (var e = this._node._findClosestAncestor(), d = l._getAncestors(this._node, e), f = e ? e.getTransform()._concatenatedMatrix.clone() : b.createIdentity(), g = d.length - 1;0 <= g;g--) {
            var e = d[g], k = e.getTransform();
            f.preMultiply(k._matrix);
            k._concatenatedMatrix.set(f);
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
    p.Transform = f;
    var d = function() {
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
        return v[this._blendMode];
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
    p.Layer = d;
    k = function(a) {
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
    }(l);
    p.Shape = k;
    p.RendererOptions = function() {
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
    })(p.Backend || (p.Backend = {}));
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
    p.Renderer = u;
    u = function(a) {
      function c(d, f, b) {
        void 0 === b && (b = !1);
        a.call(this);
        this._preVisitor = new r;
        this._flags &= -3;
        this._type = 13;
        this._scaleMode = c.DEFAULT_SCALE;
        this._align = c.DEFAULT_ALIGN;
        this._content = new q;
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
          var g;
          g = this._align & 4 ? 0 : this._align & 8 ? a.w - e.w * d : (a.w - e.w * d) / 2;
          a = this._align & 1 ? 0 : this._align & 2 ? a.h - e.h * f : (a.h - e.h * f) / 2;
          this._content.getTransform().setMatrix(new b(d, 0, 0, f, g, a));
        }
      };
      c.DEFAULT_SCALE = 4;
      c.DEFAULT_ALIGN = 5;
      return c;
    }(q);
    p.Stage = u;
  })(m.GFX || (m.GFX = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(p) {
    function g(a, e, c) {
      return a + (e - a) * c;
    }
    function b(a, e, c) {
      return g(a >> 24 & 255, e >> 24 & 255, c) << 24 | g(a >> 16 & 255, e >> 16 & 255, c) << 16 | g(a >> 8 & 255, e >> 8 & 255, c) << 8 | g(a & 255, e & 255, c);
    }
    var w = p.Geometry.Point, v = p.Geometry.Rectangle, a = p.Geometry.Matrix, h = m.ArrayUtilities.indexOf, u = function(a) {
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
        h(this._parents, a);
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
        a = new p.Shape(this);
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
        h(this._invalidateEventListeners, a);
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
    }(p.Node);
    p.Renderable = u;
    var k = function(a) {
      function e(c, e) {
        a.call(this);
        this.setBounds(c);
        this.render = e;
      }
      __extends(e, a);
      return e;
    }(u);
    p.CustomRenderable = k;
    (function(a) {
      a[a.Idle = 1] = "Idle";
      a[a.Playing = 2] = "Playing";
      a[a.Paused = 3] = "Paused";
      a[a.Ended = 4] = "Ended";
    })(p.RenderableVideoState || (p.RenderableVideoState = {}));
    k = function(a) {
      function e(c, f) {
        a.call(this);
        this._flags = 1048592;
        this._lastPausedTime = this._lastTimeInvalidated = 0;
        this._pauseHappening = this._seekHappening = !1;
        this._isDOMElement = !0;
        this.setBounds(new v(0, 0, 1, 1));
        this._assetId = c;
        this._eventSerializer = f;
        var b = document.createElement("video"), g = this._handleVideoEvent.bind(this);
        b.preload = "metadata";
        b.addEventListener("play", g);
        b.addEventListener("pause", g);
        b.addEventListener("ended", g);
        b.addEventListener("loadeddata", g);
        b.addEventListener("progress", g);
        b.addEventListener("suspend", g);
        b.addEventListener("loadedmetadata", g);
        b.addEventListener("error", g);
        b.addEventListener("seeking", g);
        b.addEventListener("seeked", g);
        b.addEventListener("canplay", g);
        b.style.position = "absolute";
        this._video = b;
        this._videoEventHandler = g;
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
    p.RenderableVideo = k;
    k = function(a) {
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
      e.FromNode = function(a, d, f, b, g) {
        var l = document.createElement("canvas"), k = a.getBounds();
        l.width = k.w;
        l.height = k.h;
        l = new e(l, k);
        l.drawNode(a, d, f, b, g);
        return l;
      };
      e.FromImage = function(a) {
        return new e(a, new v(0, 0, -1, -1));
      };
      e.prototype.updateFromDataBuffer = function(a, e) {
        if (p.imageUpdateOption.value) {
          var d = e.buffer;
          if (4 !== a && 5 !== a && 6 !== a) {
            var f = this._bounds, b = this._imageData;
            b && b.width === f.w && b.height === f.h || (b = this._imageData = this._context.createImageData(f.w, f.h));
            p.imageConvertOption.value && (d = new Int32Array(d), f = new Int32Array(b.data.buffer), m.ColorUtilities.convertImage(a, 3, d, f));
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
        d = p.Canvas2D;
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
    p.RenderableBitmap = k;
    (function(a) {
      a[a.Fill = 0] = "Fill";
      a[a.Stroke = 1] = "Stroke";
      a[a.StrokeFill = 2] = "StrokeFill";
    })(p.PathType || (p.PathType = {}));
    var t = function() {
      return function(a, e, c, f) {
        this.type = a;
        this.style = e;
        this.smoothImage = c;
        this.strokeProperties = f;
        this.path = new Path2D;
      };
    }();
    p.StyledPath = t;
    var r = function() {
      return function(a, e, c, f, b) {
        this.thickness = a;
        this.scaleMode = e;
        this.capsStyle = c;
        this.jointsStyle = f;
        this.miterLimit = b;
      };
    }();
    p.StrokeProperties = r;
    var l = function(d) {
      function e(a, e, f, b) {
        d.call(this);
        this._flags = 6291472;
        this.properties = {};
        this.setBounds(b);
        this._id = a;
        this._pathData = e;
        this._textures = f;
        f.length && this.setFlags(1048576);
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
          var g = e[d];
          a.mozImageSmoothingEnabled = a.msImageSmoothingEnabled = a.imageSmoothingEnabled = g.smoothImage;
          if (0 === g.type) {
            f ? f.addPath(g.path, a.currentTransform) : (a.fillStyle = b ? "#000000" : g.style, a.fill(g.path, "evenodd"), a.fillStyle = "transparent");
          } else {
            if (!f && !b) {
              a.strokeStyle = g.style;
              var l = 1;
              g.strokeProperties && (l = g.strokeProperties.scaleMode, a.lineWidth = g.strokeProperties.thickness, a.lineCap = g.strokeProperties.capsStyle, a.lineJoin = g.strokeProperties.jointsStyle, a.miterLimit = g.strokeProperties.miterLimit);
              var k = a.lineWidth;
              (k = 1 === k || 3 === k) && a.translate(.5, .5);
              a.flashStroke(g.path, l);
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
        var b = null, g = null, l = 0, k = 0, h, t, q = !1, u = 0, p = 0, v = a.commands, w = a.coordinates, D = a.styles, z = D.position = 0;
        a = a.commandsPosition;
        for (var A = 0;A < a;A++) {
          switch(v[A]) {
            case 9:
              q && b && (b.lineTo(u, p), g && g.lineTo(u, p));
              q = !0;
              l = u = w[z++] / 20;
              k = p = w[z++] / 20;
              b && b.moveTo(l, k);
              g && g.moveTo(l, k);
              break;
            case 10:
              l = w[z++] / 20;
              k = w[z++] / 20;
              b && b.lineTo(l, k);
              g && g.lineTo(l, k);
              break;
            case 11:
              h = w[z++] / 20;
              t = w[z++] / 20;
              l = w[z++] / 20;
              k = w[z++] / 20;
              b && b.quadraticCurveTo(h, t, l, k);
              g && g.quadraticCurveTo(h, t, l, k);
              break;
            case 12:
              h = w[z++] / 20;
              t = w[z++] / 20;
              var C = w[z++] / 20, y = w[z++] / 20, l = w[z++] / 20, k = w[z++] / 20;
              b && b.bezierCurveTo(h, t, C, y, l, k);
              g && g.bezierCurveTo(h, t, C, y, l, k);
              break;
            case 1:
              b = this._createPath(0, m.ColorUtilities.rgbaToCSSStyle(D.readUnsignedInt()), !1, null, l, k);
              break;
            case 3:
              h = this._readBitmap(D, d);
              b = this._createPath(0, h.style, h.smoothImage, null, l, k);
              break;
            case 2:
              b = this._createPath(0, this._readGradient(D, d), !1, null, l, k);
              break;
            case 4:
              b = null;
              break;
            case 5:
              g = m.ColorUtilities.rgbaToCSSStyle(D.readUnsignedInt());
              D.position += 1;
              h = D.readByte();
              t = e.LINE_CAPS_STYLES[D.readByte()];
              C = e.LINE_JOINTS_STYLES[D.readByte()];
              h = new r(w[z++] / 20, h, t, C, D.readByte());
              g = this._createPath(1, g, !1, h, l, k);
              break;
            case 6:
              g = this._createPath(2, this._readGradient(D, d), !1, null, l, k);
              break;
            case 7:
              h = this._readBitmap(D, d);
              g = this._createPath(2, h.style, h.smoothImage, null, l, k);
              break;
            case 8:
              g = null;
          }
        }
        q && b && (b.lineTo(u, p), g && g.lineTo(u, p));
        this._pathData = null;
        return f;
      };
      e.prototype._createPath = function(a, e, d, f, b, g) {
        a = new t(a, e, d, f);
        this._paths.push(a);
        a.path.moveTo(b, g);
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
          var g = a.readUnsignedByte() / 255, l = m.ColorUtilities.rgbaToCSSStyle(a.readUnsignedInt());
          d.addColorStop(g, l);
        }
        a.position += 2;
        return d;
      };
      e.prototype._readBitmap = function(a, e) {
        var d = a.readUnsignedInt(), f = this._readMatrix(a), b = a.readBoolean() ? "repeat" : "no-repeat", g = a.readBoolean();
        (d = this._textures[d]) ? (b = e.createPattern(d.renderSource, b), b.setTransform(f.toSVGMatrix())) : b = null;
        return {style:b, smoothImage:g};
      };
      e.prototype._renderFallback = function(a) {
        this.fillStyle || (this.fillStyle = m.ColorStyle.randomStyle());
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
    p.RenderableShape = l;
    k = function(d) {
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
        var f = this._morphPaths[d] = [], k = null, h = null, t = 0, q = 0, u, p, v = !1, w = 0, W = 0, fa = a.commands, D = a.coordinates, z = a.morphCoordinates, A = a.styles, C = a.morphStyles;
        A.position = 0;
        var y = C.position = 0;
        a = a.commandsPosition;
        for (var F = 0;F < a;F++) {
          switch(fa[F]) {
            case 9:
              v && k && (k.lineTo(w, W), h && h.lineTo(w, W));
              v = !0;
              t = w = g(D[y], z[y++], d) / 20;
              q = W = g(D[y], z[y++], d) / 20;
              k && k.moveTo(t, q);
              h && h.moveTo(t, q);
              break;
            case 10:
              t = g(D[y], z[y++], d) / 20;
              q = g(D[y], z[y++], d) / 20;
              k && k.lineTo(t, q);
              h && h.lineTo(t, q);
              break;
            case 11:
              u = g(D[y], z[y++], d) / 20;
              p = g(D[y], z[y++], d) / 20;
              t = g(D[y], z[y++], d) / 20;
              q = g(D[y], z[y++], d) / 20;
              k && k.quadraticCurveTo(u, p, t, q);
              h && h.quadraticCurveTo(u, p, t, q);
              break;
            case 12:
              u = g(D[y], z[y++], d) / 20;
              p = g(D[y], z[y++], d) / 20;
              var B = g(D[y], z[y++], d) / 20, E = g(D[y], z[y++], d) / 20, t = g(D[y], z[y++], d) / 20, q = g(D[y], z[y++], d) / 20;
              k && k.bezierCurveTo(u, p, B, E, t, q);
              h && h.bezierCurveTo(u, p, B, E, t, q);
              break;
            case 1:
              k = this._createMorphPath(0, d, m.ColorUtilities.rgbaToCSSStyle(b(A.readUnsignedInt(), C.readUnsignedInt(), d)), !1, null, t, q);
              break;
            case 3:
              u = this._readMorphBitmap(A, C, d, e);
              k = this._createMorphPath(0, d, u.style, u.smoothImage, null, t, q);
              break;
            case 2:
              u = this._readMorphGradient(A, C, d, e);
              k = this._createMorphPath(0, d, u, !1, null, t, q);
              break;
            case 4:
              k = null;
              break;
            case 5:
              u = g(D[y], z[y++], d) / 20;
              h = m.ColorUtilities.rgbaToCSSStyle(b(A.readUnsignedInt(), C.readUnsignedInt(), d));
              A.position += 1;
              p = A.readByte();
              B = l.LINE_CAPS_STYLES[A.readByte()];
              E = l.LINE_JOINTS_STYLES[A.readByte()];
              u = new r(u, p, B, E, A.readByte());
              h = this._createMorphPath(1, d, h, !1, u, t, q);
              break;
            case 6:
              u = this._readMorphGradient(A, C, d, e);
              h = this._createMorphPath(2, d, u, !1, null, t, q);
              break;
            case 7:
              u = this._readMorphBitmap(A, C, d, e);
              h = this._createMorphPath(2, d, u.style, u.smoothImage, null, t, q);
              break;
            case 8:
              h = null;
          }
        }
        v && k && (k.lineTo(w, W), h && h.lineTo(w, W));
        return f;
      };
      e.prototype._createMorphPath = function(a, e, d, f, b, g, l) {
        a = new t(a, d, f, b);
        this._morphPaths[e].push(a);
        a.path.moveTo(g, l);
        return a.path;
      };
      e.prototype._readMorphMatrix = function(c, e, d) {
        return new a(g(c.readFloat(), e.readFloat(), d), g(c.readFloat(), e.readFloat(), d), g(c.readFloat(), e.readFloat(), d), g(c.readFloat(), e.readFloat(), d), g(c.readFloat(), e.readFloat(), d), g(c.readFloat(), e.readFloat(), d));
      };
      e.prototype._readMorphGradient = function(a, e, d, f) {
        var l = a.readUnsignedByte(), k = 2 * a.readShort() / 255, h = this._readMorphMatrix(a, e, d);
        f = 16 === l ? f.createLinearGradient(-1, 0, 1, 0) : f.createRadialGradient(k, 0, 0, 0, 0, 1);
        f.setTransform && f.setTransform(h.toSVGMatrix());
        h = a.readUnsignedByte();
        for (l = 0;l < h;l++) {
          var k = g(a.readUnsignedByte() / 255, e.readUnsignedByte() / 255, d), r = b(a.readUnsignedInt(), e.readUnsignedInt(), d), r = m.ColorUtilities.rgbaToCSSStyle(r);
          f.addColorStop(k, r);
        }
        a.position += 2;
        return f;
      };
      e.prototype._readMorphBitmap = function(a, e, d, f) {
        var b = a.readUnsignedInt();
        e = this._readMorphMatrix(a, e, d);
        d = a.readBoolean() ? "repeat" : "no-repeat";
        a = a.readBoolean();
        f = f.createPattern(this._textures[b]._canvas, d);
        f.setTransform(e.toSVGMatrix());
        return {style:f, smoothImage:a};
      };
      return e;
    }(l);
    p.RenderableMorphShape = k;
    var q = function() {
      function a() {
        this.align = this.leading = this.descent = this.ascent = this.width = this.y = this.x = 0;
        this.runs = [];
      }
      a._getMeasureContext = function() {
        a._measureContext || (a._measureContext = document.createElement("canvas").getContext("2d"));
        return a._measureContext;
      };
      a.prototype.addRun = function(e, c, b, g) {
        if (b) {
          var l = a._getMeasureContext();
          l.font = e;
          l = l.measureText(b).width | 0;
          this.runs.push(new f(e, c, b, l, g));
          this.width += l;
        }
      };
      a.prototype.wrap = function(e) {
        var c = [this], b = this.runs, g = this;
        g.width = 0;
        g.runs = [];
        for (var l = a._getMeasureContext(), k = 0;k < b.length;k++) {
          var h = b[k], r = h.text;
          h.text = "";
          h.width = 0;
          l.font = h.font;
          for (var m = e, t = r.split(/[\s.-]/), q = 0, u = 0;u < t.length;u++) {
            var p = t[u], v = r.substr(q, p.length + 1), w = l.measureText(v).width | 0;
            if (w > m) {
              do {
                if (h.text && (g.runs.push(h), g.width += h.width, h = new f(h.font, h.fillStyle, "", 0, h.underline), m = new a, m.y = g.y + g.descent + g.leading + g.ascent | 0, m.ascent = g.ascent, m.descent = g.descent, m.leading = g.leading, m.align = g.align, c.push(m), g = m), m = e - w, 0 > m) {
                  for (var D = v.length, z = v;1 < D && !(D--, z = v.substr(0, D), w = l.measureText(z).width | 0, w <= e);) {
                  }
                  h.text = z;
                  h.width = w;
                  v = v.substr(D);
                  w = l.measureText(v).width | 0;
                }
              } while (v && 0 > m);
            } else {
              m -= w;
            }
            h.text += v;
            h.width += w;
            q += p.length + 1;
          }
          g.runs.push(h);
          g.width += h.width;
        }
        return c;
      };
      a.prototype.toString = function() {
        return "TextLine {x: " + this.x + ", y: " + this.y + ", width: " + this.width + ", height: " + (this.ascent + this.descent + this.leading) + "}";
      };
      return a;
    }();
    p.TextLine = q;
    var f = function() {
      return function(a, e, c, f, b) {
        void 0 === a && (a = "");
        void 0 === e && (e = "");
        void 0 === c && (c = "");
        void 0 === f && (f = 0);
        void 0 === b && (b = !1);
        this.font = a;
        this.fillStyle = e;
        this.text = c;
        this.width = f;
        this.underline = b;
      };
    }();
    p.TextRun = f;
    k = function(d) {
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
      e.prototype.setContent = function(a, e, d, f) {
        this._textRunData = e;
        this._plainText = a;
        this._matrix.set(d);
        this._coords = f;
        this.lines = [];
      };
      e.prototype.setStyle = function(a, e, d, f) {
        this._backgroundColor = a;
        this._borderColor = e;
        this._scrollV = d;
        this._scrollH = f;
      };
      e.prototype.reflow = function(a, e) {
        var d = this._textRunData;
        if (d) {
          for (var f = this._bounds, b = f.w - 4, g = this._plainText, l = this.lines, k = new q, h = 0, r = 0, t = 0, u = 0, p = 0, v = -1;d.position < d.length;) {
            var w = d.readInt(), z = d.readInt(), A = d.readInt(), C = d.readUTF(), y = d.readInt(), F = d.readInt(), B = d.readInt();
            y > t && (t = y);
            F > u && (u = F);
            B > p && (p = B);
            y = d.readBoolean();
            F = "";
            d.readBoolean() && (F += "italic ");
            y && (F += "bold ");
            A = F + A + "px " + C;
            C = d.readInt();
            C = m.ColorUtilities.rgbToHex(C);
            y = d.readInt();
            -1 === v && (v = y);
            d.readBoolean();
            d.readInt();
            d.readInt();
            d.readInt();
            d.readInt();
            d.readInt();
            for (var y = d.readBoolean(), E = "", F = !1;!F;w++) {
              F = w >= z - 1;
              B = g[w];
              if ("\r" !== B && "\n" !== B && (E += B, w < g.length - 1)) {
                continue;
              }
              k.addRun(A, C, E, y);
              if (k.runs.length) {
                l.length && (h += p);
                h += t;
                k.y = h | 0;
                h += u;
                k.ascent = t;
                k.descent = u;
                k.leading = p;
                k.align = v;
                if (e && k.width > b) {
                  for (k = k.wrap(b), E = 0;E < k.length;E++) {
                    var H = k[E], h = H.y + H.descent + H.leading;
                    l.push(H);
                    H.width > r && (r = H.width);
                  }
                } else {
                  l.push(k), k.width > r && (r = k.width);
                }
                k = new q;
              } else {
                h += t + u + p;
              }
              E = "";
              if (F) {
                p = u = t = 0;
                v = -1;
                break;
              }
              "\r" === B && "\n" === g[w + 1] && w++;
            }
            k.addRun(A, C, E, y);
          }
          d = g[g.length - 1];
          "\r" !== d && "\n" !== d || l.push(k);
          d = this.textRect;
          d.w = r;
          d.h = h;
          if (a) {
            if (!e) {
              b = r;
              r = f.w;
              switch(a) {
                case 1:
                  d.x = r - (b + 4) >> 1;
                  break;
                case 3:
                  d.x = r - (b + 4);
              }
              this._textBounds.setElements(d.x - 2, d.y - 2, d.w + 4, d.h + 4);
              f.w = b + 4;
            }
            f.x = d.x - 2;
            f.h = h + 4;
          } else {
            this._textBounds = f;
          }
          for (w = 0;w < l.length;w++) {
            if (f = l[w], f.width < b) {
              switch(f.align) {
                case 1:
                  f.x = b - f.width | 0;
                  break;
                case 2:
                  f.x = (b - f.width) / 2 | 0;
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
        this._backgroundColor && (c.fillStyle = m.ColorUtilities.rgbaToCSSStyle(this._backgroundColor), c.fillRect(d.x, d.y, d.w, d.h));
        if (this._borderColor) {
          c.strokeStyle = m.ColorUtilities.rgbaToCSSStyle(this._borderColor);
          c.lineCap = "square";
          c.lineWidth = 1;
          var f = e.absoluteBoundPoints, b = c.currentTransform;
          b ? (d = d.clone(), (new a(b.a, b.b, b.c, b.d, b.e, b.f)).transformRectangle(d, f), c.setTransform(1, 0, 0, 1, 0, 0)) : (f[0].x = d.x, f[0].y = d.y, f[1].x = d.x + d.w, f[1].y = d.y, f[2].x = d.x + d.w, f[2].y = d.y + d.h, f[3].x = d.x, f[3].y = d.y + d.h);
          e.roundBoundPoints(f);
          d = new Path2D;
          d.moveTo(f[0].x, f[0].y);
          d.lineTo(f[1].x, f[1].y);
          d.lineTo(f[2].x, f[2].y);
          d.lineTo(f[3].x, f[3].y);
          d.lineTo(f[0].x, f[0].y);
          c.stroke(d);
          b && c.setTransform(b.a, b.b, b.c, b.d, b.e, b.f);
        }
        this._coords ? this._renderChars(c) : this._renderLines(c);
        c.restore();
      };
      e.prototype._renderChars = function(a) {
        if (this._matrix) {
          var d = this._matrix;
          a.transform(d.a, d.b, d.c, d.d, d.tx, d.ty);
        }
        for (var d = this.lines, e = this._coords, f = e.position = 0;f < d.length;f++) {
          for (var b = d[f].runs, g = 0;g < b.length;g++) {
            var l = b[g];
            a.font = l.font;
            a.fillStyle = l.fillStyle;
            for (var l = l.text, k = 0;k < l.length;k++) {
              var h = e.readInt() / 20, r = e.readInt() / 20;
              a.fillText(l[k], h, r);
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
        for (var e = this.lines, f = this._scrollV, b = 0, g = 0;g < e.length;g++) {
          var l = e[g], k = l.x, h = l.y;
          if (g + 1 < f) {
            b = h + l.descent + l.leading;
          } else {
            h -= b;
            if (g + 1 - f && h > d.h) {
              break;
            }
            for (var r = l.runs, m = 0;m < r.length;m++) {
              var t = r[m];
              a.font = t.font;
              a.fillStyle = t.fillStyle;
              t.underline && a.fillRect(k, h + l.descent / 2 | 0, t.width, 1);
              a.textAlign = "left";
              a.textBaseline = "alphabetic";
              a.fillText(t.text, k, h);
              k += t.width;
            }
          }
        }
      };
      e.absoluteBoundPoints = [new w(0, 0), new w(0, 0), new w(0, 0), new w(0, 0)];
      return e;
    }(u);
    p.RenderableText = k;
    u = function(a) {
      function e(c, e) {
        a.call(this);
        this._flags = 3145728;
        this.properties = {};
        this.setBounds(new v(0, 0, c, e));
      }
      __extends(e, a);
      Object.defineProperty(e.prototype, "text", {get:function() {
        return this._text;
      }, set:function(a) {
        this._text = a;
      }, enumerable:!0, configurable:!0});
      e.prototype.render = function(a, d, e) {
        a.save();
        a.textBaseline = "top";
        a.fillStyle = "white";
        a.fillText(this.text, 0, 0);
        a.restore();
      };
      return e;
    }(u);
    p.Label = u;
  })(m.GFX || (m.GFX = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(p) {
    function g(a, b, g, m, r) {
      b = v[b - 1];
      r && (r = b / 4, g -= r, m -= r);
      r = Math.ceil((1 > g ? 1 : g) / (b - 1E-9));
      b = Math.ceil((1 > m ? 1 : m) / (b - 1E-9));
      a.x -= r;
      a.w += 2 * r;
      a.y -= b;
      a.h += 2 * b;
    }
    var b = m.ColorUtilities.clampByte, w = function() {
      function a() {
      }
      a.prototype.expandBounds = function(a) {
      };
      return a;
    }();
    p.Filter = w;
    var v = [2, 1 / 1.05, 1 / 1.35, 1 / 1.55, 1 / 1.75, 1 / 1.9, .5, 1 / 2.1, 1 / 2.2, 1 / 2.3, .4, 1 / 3, 1 / 3, 1 / 3.5, 1 / 3.5], a = function(a) {
      function b(g, m, r) {
        a.call(this);
        this.blurX = g;
        this.blurY = m;
        this.quality = r;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        g(a, this.quality, this.blurX, this.blurY, !0);
      };
      return b;
    }(w);
    p.BlurFilter = a;
    a = function(a) {
      function b(g, m, r, l, q, f, d, e, c, n, u) {
        a.call(this);
        this.alpha = g;
        this.angle = m;
        this.blurX = r;
        this.blurY = l;
        this.color = q;
        this.distance = f;
        this.hideObject = d;
        this.inner = e;
        this.knockout = c;
        this.quality = n;
        this.strength = u;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        if (!this.inner && (g(a, this.quality, this.blurX, this.blurY, !1), this.distance)) {
          var b = this.angle * Math.PI / 180, h = Math.cos(b) * this.distance, l = Math.sin(b) * this.distance, b = a.x + (0 <= h ? 0 : Math.floor(h)), h = a.x + a.w + Math.ceil(Math.abs(h)), m = a.y + (0 <= l ? 0 : Math.floor(l)), l = a.y + a.h + Math.ceil(Math.abs(l));
          a.x = b;
          a.w = h - b;
          a.y = m;
          a.h = l - m;
        }
      };
      return b;
    }(w);
    p.DropshadowFilter = a;
    a = function(a) {
      function b(g, m, r, l, q, f, d, e) {
        a.call(this);
        this.alpha = g;
        this.blurX = m;
        this.blurY = r;
        this.color = l;
        this.inner = q;
        this.knockout = f;
        this.quality = d;
        this.strength = e;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        this.inner || g(a, this.quality, this.blurX, this.blurY, !1);
      };
      return b;
    }(w);
    p.GlowFilter = a;
    (function(a) {
      a[a.Unknown = 0] = "Unknown";
      a[a.Identity = 1] = "Identity";
    })(p.ColorMatrixType || (p.ColorMatrixType = {}));
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
      g.prototype.setMultipliersAndOffsets = function(a, b, g, l, h, f, d, e) {
        for (var c = this._data, n = 0;n < c.length;n++) {
          c[n] = 0;
        }
        c[0] = a;
        c[5] = b;
        c[10] = g;
        c[15] = l;
        c[16] = h / 255;
        c[17] = f / 255;
        c[18] = d / 255;
        c[19] = e / 255;
        this._type = 0;
      };
      g.prototype.transformRGBA = function(a) {
        var g = a >> 24 & 255, h = a >> 16 & 255, l = a >> 8 & 255, m = a & 255, f = this._data;
        a = b(g * f[0] + h * f[1] + l * f[2] + m * f[3] + 255 * f[16]);
        var d = b(g * f[4] + h * f[5] + l * f[6] + m * f[7] + 255 * f[17]), e = b(g * f[8] + h * f[9] + l * f[10] + m * f[11] + 255 * f[18]), g = b(g * f[12] + h * f[13] + l * f[14] + m * f[15] + 255 * f[19]);
        return a << 24 | d << 16 | e << 8 | g;
      };
      g.prototype.multiply = function(a) {
        if (!(a._type & 1)) {
          var b = this._data, g = a._data;
          a = b[0];
          var l = b[1], h = b[2], f = b[3], d = b[4], e = b[5], c = b[6], n = b[7], m = b[8], p = b[9], u = b[10], v = b[11], w = b[12], T = b[13], U = b[14], Y = b[15], ia = b[16], ja = b[17], W = b[18], fa = b[19], D = g[0], z = g[1], A = g[2], C = g[3], y = g[4], F = g[5], B = g[6], E = g[7], H = g[8], J = g[9], K = g[10], L = g[11], M = g[12], N = g[13], O = g[14], P = g[15], Q = g[16], R = g[17], S = g[18], g = g[19];
          b[0] = a * D + d * z + m * A + w * C;
          b[1] = l * D + e * z + p * A + T * C;
          b[2] = h * D + c * z + u * A + U * C;
          b[3] = f * D + n * z + v * A + Y * C;
          b[4] = a * y + d * F + m * B + w * E;
          b[5] = l * y + e * F + p * B + T * E;
          b[6] = h * y + c * F + u * B + U * E;
          b[7] = f * y + n * F + v * B + Y * E;
          b[8] = a * H + d * J + m * K + w * L;
          b[9] = l * H + e * J + p * K + T * L;
          b[10] = h * H + c * J + u * K + U * L;
          b[11] = f * H + n * J + v * K + Y * L;
          b[12] = a * M + d * N + m * O + w * P;
          b[13] = l * M + e * N + p * O + T * P;
          b[14] = h * M + c * N + u * O + U * P;
          b[15] = f * M + n * N + v * O + Y * P;
          b[16] = a * Q + d * R + m * S + w * g + ia;
          b[17] = l * Q + e * R + p * S + T * g + ja;
          b[18] = h * Q + c * R + u * S + U * g + W;
          b[19] = f * Q + n * R + v * S + Y * g + fa;
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
    p.ColorMatrix = w;
  })(m.GFX || (m.GFX = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(p) {
    (function(g) {
      function b(a, b) {
        return -1 !== a.indexOf(b, this.length - b.length);
      }
      var w = p.Geometry.Point3D, v = p.Geometry.Matrix3D, a = p.Geometry.degreesToRadian, h = m.Debug.unexpected, u = m.Debug.notImplemented;
      g.SHADER_ROOT = "shaders/";
      var k = function() {
        function k(a, b) {
          this._fillColor = m.Color.Red;
          this._surfaceRegionCache = new m.LRUList;
          this.modelViewProjectionMatrix = v.createIdentity();
          this._canvas = a;
          this._options = b;
          this.gl = a.getContext("experimental-webgl", {preserveDrawingBuffer:!1, antialias:!0, stencil:!0, premultipliedAlpha:!1});
          this._programCache = Object.create(null);
          this._resize();
          this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, b.unpackPremultiplyAlpha ? this.gl.ONE : this.gl.ZERO);
          this._backgroundColor = m.Color.Black;
          this._geometry = new g.WebGLGeometry(this);
          this._tmpVertices = g.Vertex.createEmptyVertices(g.Vertex, 64);
          this._maxSurfaces = b.maxSurfaces;
          this._maxSurfaceSize = b.maxSurfaceSize;
          this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
          this.gl.enable(this.gl.BLEND);
          this.modelViewProjectionMatrix = v.create2DProjection(this._w, this._h, 2E3);
          var h = this;
          this._surfaceRegionAllocator = new p.SurfaceRegionAllocator.SimpleAllocator(function() {
            var a = h._createTexture();
            return new g.WebGLSurface(1024, 1024, a);
          });
        }
        Object.defineProperty(k.prototype, "surfaces", {get:function() {
          return this._surfaceRegionAllocator.surfaces;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(k.prototype, "fillStyle", {set:function(a) {
          this._fillColor.set(m.Color.parseColor(a));
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
          return v.create2DProjection(this._w, this._h, -this._w);
        };
        k.prototype.createPerspectiveMatrix = function(b, g, h) {
          h = a(h);
          g = v.createPerspective(a(g));
          var f = new w(0, 1, 0), d = new w(0, 0, 0);
          b = new w(0, 0, b);
          b = v.createCameraLookAt(b, d, f);
          b = v.createInverse(b);
          f = v.createIdentity();
          f = v.createMultiply(f, v.createTranslation(-this._w / 2, -this._h / 2));
          f = v.createMultiply(f, v.createScale(1 / this._w, -1 / this._h, .01));
          f = v.createMultiply(f, v.createYRotation(h));
          f = v.createMultiply(f, b);
          return f = v.createMultiply(f, g);
        };
        k.prototype.discardCachedImages = function() {
          2 <= p.traceLevel && p.writer && p.writer.writeLn("Discard Cache");
          for (var a = this._surfaceRegionCache.count / 2 | 0, b = 0;b < a;b++) {
            var g = this._surfaceRegionCache.pop();
            2 <= p.traceLevel && p.writer && p.writer.writeLn("Discard: " + g);
            g.texture.atlas.remove(g.region);
            g.texture = null;
          }
        };
        k.prototype.cacheImage = function(a) {
          var b = this.allocateSurfaceRegion(a.width, a.height);
          2 <= p.traceLevel && p.writer && p.writer.writeLn("Uploading Image: @ " + b.region);
          this._surfaceRegionCache.use(b);
          this.updateSurfaceRegion(a, b);
          return b;
        };
        k.prototype.allocateSurfaceRegion = function(a, b) {
          return this._surfaceRegionAllocator.allocate(a, b, null);
        };
        k.prototype.updateSurfaceRegion = function(a, b) {
          var g = this.gl;
          g.bindTexture(g.TEXTURE_2D, b.surface.texture);
          g.texSubImage2D(g.TEXTURE_2D, 0, b.region.x, b.region.y, g.RGBA, g.UNSIGNED_BYTE, a);
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
        k.prototype._createShaderFromFile = function(a) {
          var l = g.SHADER_ROOT + a, h = this.gl;
          a = new XMLHttpRequest;
          a.open("GET", l, !1);
          a.send();
          if (b(l, ".vert")) {
            l = h.VERTEX_SHADER;
          } else {
            if (b(l, ".frag")) {
              l = h.FRAGMENT_SHADER;
            } else {
              throw "Shader Type: not supported.";
            }
          }
          return this._createShader(l, a.responseText);
        };
        k.prototype.createProgramFromFiles = function() {
          var a = this._programCache["combined.vert-combined.frag"];
          a || (a = this._createProgram([this._createShaderFromFile("combined.vert"), this._createShaderFromFile("combined.frag")]), this._queryProgramAttributesAndUniforms(a), this._initializeProgram(a), this._programCache["combined.vert-combined.frag"] = a);
          return a;
        };
        k.prototype._createProgram = function(a) {
          var b = this.gl, g = b.createProgram();
          a.forEach(function(a) {
            b.attachShader(g, a);
          });
          b.linkProgram(g);
          b.getProgramParameter(g, b.LINK_STATUS) || (h("Cannot link program: " + b.getProgramInfoLog(g)), b.deleteProgram(g));
          return g;
        };
        k.prototype._createShader = function(a, b) {
          var g = this.gl, f = g.createShader(a);
          g.shaderSource(f, b);
          g.compileShader(f);
          return g.getShaderParameter(f, g.COMPILE_STATUS) ? f : (h("Cannot compile shader: " + g.getShaderInfoLog(f)), g.deleteShader(f), null);
        };
        k.prototype._createTexture = function() {
          var a = this.gl, b = a.createTexture();
          a.bindTexture(a.TEXTURE_2D, b);
          a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE);
          a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE);
          a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR);
          a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR);
          a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, 1024, 1024, 0, a.RGBA, a.UNSIGNED_BYTE, null);
          return b;
        };
        k.prototype._createFramebuffer = function(a) {
          var b = this.gl, g = b.createFramebuffer();
          b.bindFramebuffer(b.FRAMEBUFFER, g);
          b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, a, 0);
          b.bindFramebuffer(b.FRAMEBUFFER, null);
          return g;
        };
        k.prototype._queryProgramAttributesAndUniforms = function(a) {
          a.uniforms = {};
          a.attributes = {};
          for (var b = this.gl, g = 0, f = b.getProgramParameter(a, b.ACTIVE_ATTRIBUTES);g < f;g++) {
            var d = b.getActiveAttrib(a, g);
            a.attributes[d.name] = d;
            d.location = b.getAttribLocation(a, d.name);
          }
          g = 0;
          for (f = b.getProgramParameter(a, b.ACTIVE_UNIFORMS);g < f;g++) {
            d = b.getActiveUniform(a, g), a.uniforms[d.name] = d, d.location = b.getUniformLocation(a, d.name);
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
          void 0 === b && (b = m.Color.None);
          var g = this.gl, f = a.region;
          this.target = a.surface;
          g.enable(g.SCISSOR_TEST);
          g.scissor(f.x, f.y, f.w, f.h);
          g.clearColor(b.r, b.g, b.b, b.a);
          g.clear(g.COLOR_BUFFER_BIT | g.DEPTH_BUFFER_BIT);
          g.disable(g.SCISSOR_TEST);
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
      g.WebGLContext = k;
    })(p.WebGL || (p.WebGL = {}));
  })(m.GFX || (m.GFX = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(m, p) {
  function g() {
    this.constructor = m;
  }
  for (var b in p) {
    p.hasOwnProperty(b) && (m[b] = p[b]);
  }
  g.prototype = p.prototype;
  m.prototype = new g;
};
(function(m) {
  (function(p) {
    (function(g) {
      var b = m.Debug.assert, w = function(a) {
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
        g.prototype.writeVertex3D = function(a, g, h) {
          b(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 12);
          this.writeVertex3DUnsafe(a, g, h);
        };
        g.prototype.writeVertex3DUnsafe = function(a, b, g) {
          var h = this._offset >> 2;
          this._f32[h] = a;
          this._f32[h + 1] = b;
          this._f32[h + 2] = g;
          this._offset += 12;
        };
        g.prototype.writeTriangleElements = function(a, g, h) {
          b(0 === (this._offset & 1));
          this.ensureCapacity(this._offset + 6);
          var m = this._offset >> 1;
          this._u16[m] = a;
          this._u16[m + 1] = g;
          this._u16[m + 2] = h;
          this._offset += 6;
        };
        g.prototype.ensureColorCapacity = function(a) {
          b(0 === (this._offset & 2));
          this.ensureCapacity(this._offset + 16 * a);
        };
        g.prototype.writeColorFloats = function(a, g, h, m) {
          b(0 === (this._offset & 2));
          this.ensureCapacity(this._offset + 16);
          this.writeColorFloatsUnsafe(a, g, h, m);
        };
        g.prototype.writeColorFloatsUnsafe = function(a, b, g, h) {
          var l = this._offset >> 2;
          this._f32[l] = a;
          this._f32[l + 1] = b;
          this._f32[l + 2] = g;
          this._f32[l + 3] = h;
          this._offset += 16;
        };
        g.prototype.writeColor = function() {
          var a = Math.random(), g = Math.random(), h = Math.random(), m = Math.random() / 2;
          b(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 4);
          this._i32[this._offset >> 2] = m << 24 | h << 16 | g << 8 | a;
          this._offset += 4;
        };
        g.prototype.writeColorUnsafe = function(a, b, g, h) {
          this._i32[this._offset >> 2] = h << 24 | g << 16 | b << 8 | a;
          this._offset += 4;
        };
        g.prototype.writeRandomColor = function() {
          this.writeColor();
        };
        return g;
      }(m.ArrayUtilities.ArrayWriter);
      g.BufferWriter = w;
      g.WebGLAttribute = function() {
        return function(a, b, g, k) {
          void 0 === k && (k = !1);
          this.name = a;
          this.size = b;
          this.type = g;
          this.normalized = k;
        };
      }();
      var v = function() {
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
      g.WebGLAttributeList = v;
      v = function() {
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
      g.WebGLGeometry = v;
      v = function(a) {
        function b(g, h, m) {
          a.call(this, g, h, m);
        }
        __extends(b, a);
        b.createEmptyVertices = function(a, b) {
          for (var g = [], h = 0;h < b;h++) {
            g.push(new a(0, 0, 0));
          }
          return g;
        };
        return b;
      }(p.Geometry.Point3D);
      g.Vertex = v;
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
    })(p.WebGL || (p.WebGL = {}));
  })(m.GFX || (m.GFX = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(m) {
    (function(g) {
      var b = function() {
        function b(a, g, u) {
          this.texture = u;
          this.w = a;
          this.h = g;
          this._regionAllocator = new m.RegionAllocator.CompactAllocator(this.w, this.h);
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
    })(m.WebGL || (m.WebGL = {}));
  })(m.GFX || (m.GFX = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(p) {
    (function(g) {
      var b = m.Color;
      g.TILE_SIZE = 256;
      g.MIN_UNTILED_SIZE = 256;
      var w = p.Geometry.Matrix, v = p.Geometry.Rectangle, a = function(a) {
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
      g.WebGLRendererOptions = a;
      var h = function(h) {
        function k(b, k, l) {
          void 0 === l && (l = new a);
          h.call(this, b, k, l);
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
        __extends(k, h);
        k.prototype.resize = function() {
          this._updateSize();
          this.render();
        };
        k.prototype._updateSize = function() {
          this._viewport = new v(0, 0, this._canvas.width, this._canvas.height);
          this._context._resize();
        };
        k.prototype._cacheImageCallback = function(a, b, g) {
          var h = g.w, f = g.h, d = g.x;
          g = g.y;
          this._uploadCanvas.width = h + 2;
          this._uploadCanvas.height = f + 2;
          this._uploadCanvasContext.drawImage(b.canvas, d, g, h, f, 1, 1, h, f);
          this._uploadCanvasContext.drawImage(b.canvas, d, g, h, 1, 1, 0, h, 1);
          this._uploadCanvasContext.drawImage(b.canvas, d, g + f - 1, h, 1, 1, f + 1, h, 1);
          this._uploadCanvasContext.drawImage(b.canvas, d, g, 1, f, 0, 1, 1, f);
          this._uploadCanvasContext.drawImage(b.canvas, d + h - 1, g, 1, f, h + 1, 1, 1, f);
          return a && a.surface ? (this._options.disableSurfaceUploads || this._context.updateSurfaceRegion(this._uploadCanvas, a), a) : this._context.cacheImage(this._uploadCanvas);
        };
        k.prototype._enterClip = function(a, b, g, h) {
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
        k.prototype._leaveClip = function(a, b, g, h) {
          g.flush();
          b = this._context.gl;
          if (a = this._clipStack.pop()) {
            b.colorMask(!1, !1, !1, !1), b.stencilOp(b.KEEP, b.KEEP, b.DECR), g.flush(), b.colorMask(!0, !0, !0, !0), b.stencilFunc(b.NOTEQUAL, 0, this._clipStack.length), b.stencilOp(b.KEEP, b.KEEP, b.KEEP);
          }
          0 === this._clipStack.length && b.disable(b.STENCIL_TEST);
        };
        k.prototype._renderFrame = function(a, b, g, h) {
        };
        k.prototype._renderSurfaces = function(a) {
          var h = this._options, l = this._context, k = this._viewport;
          if (h.drawSurfaces) {
            var f = l.surfaces, l = w.createIdentity();
            if (0 <= h.drawSurface && h.drawSurface < f.length) {
              for (var h = f[h.drawSurface | 0], f = new v(0, 0, h.w, h.h), d = f.clone();d.w > k.w;) {
                d.scale(.5, .5);
              }
              a.drawImage(new g.WebGLSurfaceRegion(h, f), d, b.White, null, l, .2);
            } else {
              d = k.w / 5;
              d > k.h / f.length && (d = k.h / f.length);
              a.fillRectangle(new v(k.w - d, 0, d, k.h), new b(0, 0, 0, .5), l, .1);
              for (var e = 0;e < f.length;e++) {
                var h = f[e], c = new v(k.w - d, e * d, d, d);
                a.drawImage(new g.WebGLSurfaceRegion(h, new v(0, 0, h.w, h.h)), c, b.White, null, l, .2);
              }
            }
            a.flush();
          }
        };
        k.prototype.render = function() {
          var a = this._options, g = this._context.gl;
          this._context.modelViewProjectionMatrix = a.perspectiveCamera ? this._context.createPerspectiveMatrix(a.perspectiveCameraDistance + (a.animateZoom ? .8 * Math.sin(Date.now() / 3E3) : 0), a.perspectiveCameraFOV, a.perspectiveCameraAngle) : this._context.create2DProjectionMatrix();
          var l = this._brush;
          g.clearColor(0, 0, 0, 0);
          g.clear(g.COLOR_BUFFER_BIT | g.DEPTH_BUFFER_BIT);
          l.reset();
          g = this._viewport;
          l.flush();
          a.paintViewport && (l.fillRectangle(g, new b(.5, 0, 0, .25), w.createIdentity(), 0), l.flush());
          this._renderSurfaces(l);
        };
        return k;
      }(p.Renderer);
      g.WebGLRenderer = h;
    })(p.WebGL || (p.WebGL = {}));
  })(m.GFX || (m.GFX = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(p) {
    (function(g) {
      var b = m.Color, w = p.Geometry.Point, v = p.Geometry.Matrix3D, a = function() {
        function a(b, g, h) {
          this._target = h;
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
      var h = function(a) {
        function h(g, k, l) {
          a.call(this, g, k, l);
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
      g.WebGLCombinedBrushVertex = h;
      a = function(a) {
        function b(g, k, l) {
          void 0 === l && (l = null);
          a.call(this, g, k, l);
          this._blendMode = 1;
          this._program = g.createProgramFromFiles();
          this._surfaces = [];
          h.initializeAttributeList(this._context);
        }
        __extends(b, a);
        b.prototype.reset = function() {
          this._surfaces = [];
          this._geometry.reset();
        };
        b.prototype.drawImage = function(a, g, l, h, f, d, e) {
          void 0 === d && (d = 0);
          void 0 === e && (e = 1);
          if (!a || !a.surface) {
            return !0;
          }
          g = g.clone();
          this._colorMatrix && (h && this._colorMatrix.equals(h) || this.flush());
          this._colorMatrix = h;
          this._blendMode !== e && (this.flush(), this._blendMode = e);
          e = this._surfaces.indexOf(a.surface);
          0 > e && (8 === this._surfaces.length && this.flush(), this._surfaces.push(a.surface), e = this._surfaces.length - 1);
          var c = b._tmpVertices, m = a.region.clone();
          m.offset(1, 1).resize(-2, -2);
          m.scale(1 / a.surface.w, 1 / a.surface.h);
          f.transformRectangle(g, c);
          for (a = 0;4 > a;a++) {
            c[a].z = d;
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
            d = b._tmpVertices[a], d.kind = h ? 2 : 1, d.color.set(l), d.sampler = e, d.writeTo(this._geometry);
          }
          this._geometry.addQuad();
          return !0;
        };
        b.prototype.fillRectangle = function(a, g, l, h) {
          void 0 === h && (h = 0);
          l.transformRectangle(a, b._tmpVertices);
          for (a = 0;4 > a;a++) {
            l = b._tmpVertices[a], l.kind = 0, l.color.set(g), l.z = h, l.writeTo(this._geometry);
          }
          this._geometry.addQuad();
        };
        b.prototype.flush = function() {
          var a = this._geometry, b = this._program, g = this._context.gl, k;
          a.uploadBuffers();
          g.useProgram(b);
          this._target ? (k = v.create2DProjection(this._target.w, this._target.h, 2E3), k = v.createMultiply(k, v.createScale(1, -1, 1))) : k = this._context.modelViewProjectionMatrix;
          g.uniformMatrix4fv(b.uniforms.uTransformMatrix3D.location, !1, k.asWebGLMatrix());
          this._colorMatrix && (g.uniformMatrix4fv(b.uniforms.uColorMatrix.location, !1, this._colorMatrix.asWebGLMatrix()), g.uniform4fv(b.uniforms.uColorVector.location, this._colorMatrix.asWebGLVector()));
          for (k = 0;k < this._surfaces.length;k++) {
            g.activeTexture(g.TEXTURE0 + k), g.bindTexture(g.TEXTURE_2D, this._surfaces[k].texture);
          }
          g.uniform1iv(b.uniforms["uSampler[0]"].location, [0, 1, 2, 3, 4, 5, 6, 7]);
          g.bindBuffer(g.ARRAY_BUFFER, a.buffer);
          var f = h.attributeList.size, d = h.attributeList.attributes;
          for (k = 0;k < d.length;k++) {
            var e = d[k], c = b.attributes[e.name].location;
            g.enableVertexAttribArray(c);
            g.vertexAttribPointer(c, e.size, e.type, e.normalized, f, e.offset);
          }
          this._context.setBlendOptions();
          this._context.target = this._target;
          g.bindBuffer(g.ELEMENT_ARRAY_BUFFER, a.elementBuffer);
          g.drawElements(g.TRIANGLES, 3 * a.triangleCount, g.UNSIGNED_SHORT, 0);
          this.reset();
        };
        b._tmpVertices = g.Vertex.createEmptyVertices(h, 4);
        b._depth = 1;
        return b;
      }(a);
      g.WebGLCombinedBrush = a;
    })(p.WebGL || (p.WebGL = {}));
  })(m.GFX || (m.GFX = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(m) {
    (function(g) {
      var b = CanvasRenderingContext2D.prototype.save, m = CanvasRenderingContext2D.prototype.clip, p = CanvasRenderingContext2D.prototype.fill, a = CanvasRenderingContext2D.prototype.stroke, h = CanvasRenderingContext2D.prototype.restore, u = CanvasRenderingContext2D.prototype.beginPath;
      g.notifyReleaseChanged = function() {
        CanvasRenderingContext2D.prototype.save = b;
        CanvasRenderingContext2D.prototype.clip = m;
        CanvasRenderingContext2D.prototype.fill = p;
        CanvasRenderingContext2D.prototype.stroke = a;
        CanvasRenderingContext2D.prototype.restore = h;
        CanvasRenderingContext2D.prototype.beginPath = u;
      };
      CanvasRenderingContext2D.prototype.enterBuildingClippingRegion = function() {
        this.buildingClippingRegionDepth || (this.buildingClippingRegionDepth = 0);
        this.buildingClippingRegionDepth++;
      };
      CanvasRenderingContext2D.prototype.leaveBuildingClippingRegion = function() {
        this.buildingClippingRegionDepth--;
      };
    })(m.Canvas2D || (m.Canvas2D = {}));
  })(m.GFX || (m.GFX = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(p) {
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
            m.Debug.somewhatImplemented("Blend Mode: " + p.BlendMode[a]);
        }
        return b;
      }
      var v = m.NumberUtilities.clamp;
      navigator.userAgent.indexOf("Firefox");
      var a = function() {
        function a() {
        }
        a._prepareSVGFilters = function() {
          if (!a._svgBlurFilter) {
            var b = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            b.setAttribute("style", "display:block;width:0px;height:0px");
            var g = document.createElementNS("http://www.w3.org/2000/svg", "defs"), l = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            l.setAttribute("id", "svgBlurFilter");
            var h = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
            h.setAttribute("stdDeviation", "0 0");
            l.appendChild(h);
            g.appendChild(l);
            a._svgBlurFilter = h;
            l = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            l.setAttribute("id", "svgDropShadowFilter");
            h = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
            h.setAttribute("in", "SourceAlpha");
            h.setAttribute("stdDeviation", "3");
            l.appendChild(h);
            a._svgDropshadowFilterBlur = h;
            h = document.createElementNS("http://www.w3.org/2000/svg", "feOffset");
            h.setAttribute("dx", "0");
            h.setAttribute("dy", "0");
            h.setAttribute("result", "offsetblur");
            l.appendChild(h);
            a._svgDropshadowFilterOffset = h;
            h = document.createElementNS("http://www.w3.org/2000/svg", "feFlood");
            h.setAttribute("flood-color", "rgba(0,0,0,1)");
            l.appendChild(h);
            a._svgDropshadowFilterFlood = h;
            h = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
            h.setAttribute("in2", "offsetblur");
            h.setAttribute("operator", "in");
            l.appendChild(h);
            var h = document.createElementNS("http://www.w3.org/2000/svg", "feMerge"), f = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
            h.appendChild(f);
            f = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
            f.setAttribute("in", "SourceGraphic");
            h.appendChild(f);
            l.appendChild(h);
            g.appendChild(l);
            l = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            l.setAttribute("id", "svgColorMatrixFilter");
            h = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
            h.setAttribute("color-interpolation-filters", "sRGB");
            h.setAttribute("in", "SourceGraphic");
            h.setAttribute("type", "matrix");
            l.appendChild(h);
            g.appendChild(l);
            a._svgColorMatrixFilter = h;
            b.appendChild(g);
            document.documentElement.appendChild(b);
          }
        };
        a._applyFilter = function(g, h, l) {
          if (a._svgFiltersAreSupported) {
            if (a._prepareSVGFilters(), a._removeFilter(h), l instanceof p.BlurFilter) {
              var q = b(g, l.quality);
              a._svgBlurFilter.setAttribute("stdDeviation", l.blurX * q + " " + l.blurY * q);
              h.filter = "url(#svgBlurFilter)";
            } else {
              l instanceof p.DropshadowFilter ? (q = b(g, l.quality), a._svgDropshadowFilterBlur.setAttribute("stdDeviation", l.blurX * q + " " + l.blurY * q), a._svgDropshadowFilterOffset.setAttribute("dx", String(Math.cos(l.angle * Math.PI / 180) * l.distance * g)), a._svgDropshadowFilterOffset.setAttribute("dy", String(Math.sin(l.angle * Math.PI / 180) * l.distance * g)), a._svgDropshadowFilterFlood.setAttribute("flood-color", m.ColorUtilities.rgbaToCSSStyle(l.color << 8 | Math.round(255 * l.alpha))), 
              h.filter = "url(#svgDropShadowFilter)") : l instanceof p.ColorMatrix && (a._svgColorMatrixFilter.setAttribute("values", l.toSVGFilterMatrix()), h.filter = "url(#svgColorMatrixFilter)");
            }
          }
        };
        a._removeFilter = function(a) {
          a.filter = "none";
        };
        a._applyColorMatrix = function(a, b) {
          b.isIdentity() ? (a.globalAlpha = 1, a.globalColorMatrix = null) : b.hasOnlyAlphaMultiplier() ? (a.globalAlpha = v(b.alphaMultiplier, 0, 1), a.globalColorMatrix = null) : (a.globalAlpha = 1, a.globalColorMatrix = b);
        };
        a._svgFiltersAreSupported = !!Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype, "filter");
        return a;
      }();
      g.Filters = a;
      p.filters && a._svgFiltersAreSupported && ("registerScratchCanvas" in window || (window.registerScratchCanvas = function(a) {
        a.style.display = "none";
        document.body.appendChild(a);
      }));
      var h = function() {
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
          var h;
          if (b._copyCanvasContext) {
            if (h = b._copyCanvasContext.canvas, h.width < a || h.height < g) {
              h.width = m.IntegerUtilities.nearestPowerOfTwo(a), h.height = m.IntegerUtilities.nearestPowerOfTwo(g);
            }
          } else {
            h = document.createElement("canvas"), "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(h), h.width = m.IntegerUtilities.nearestPowerOfTwo(a), h.height = m.IntegerUtilities.nearestPowerOfTwo(g), b._copyCanvasContext = h.getContext("2d");
          }
        };
        b.prototype.draw = function(g, h, l, m, f, d, e, c, n) {
          this.context.setTransform(1, 0, 0, 1, 0, 0);
          var p, u = 0, v = 0;
          g.context.canvas === this.context.canvas ? (b._ensureCopyCanvasSize(m, f), p = b._copyCanvasContext, p.clearRect(0, 0, m, f), p.drawImage(g.surface.canvas, g.region.x, g.region.y, m, f, 0, 0, m, f), d = p, v = u = 0) : (d = g.surface.context, u = g.region.x, v = g.region.y);
          a: {
            switch(e) {
              case 11:
                g = !0;
                break a;
              default:
                g = !1;
            }
          }
          g && (this.context.save(), this.context.beginPath(), this.context.rect(h, l, m, f), this.context.clip());
          this.context.globalAlpha = 1;
          this.context.globalCompositeOperation = w(e);
          if (c) {
            e = 0;
            if (1 < c.length) {
              var V, X, T, U;
              p ? (T = p, p = d, d = T) : (b._ensureCopyCanvasSize(m, f), p = b._copyCanvasContext, X = V = 0);
              for (;e < c.length - 1;e++) {
                p.clearRect(0, 0, m, f), a._applyFilter(n, p, c[e]), p.drawImage(d.canvas, u, v, m, f, V, X, m, f), a._removeFilter(p), T = p, X = u, U = v, p = d, d = T, v = u = V, V = X, X = U;
              }
            }
            a._applyFilter(n, this.context, c[e]);
          }
          this.context.drawImage(d.canvas, u, v, m, f, h, l, m, f);
          this.context.globalCompositeOperation = w(1);
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
          a.fillStyle = null;
          a.strokeStyle = null;
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
      g.Canvas2DSurfaceRegion = h;
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
          return g ? new h(this, g, a, b) : null;
        };
        a.prototype.free = function(a) {
          this._regionAllocator.free(a.region);
        };
        return a;
      }();
      g.Canvas2DSurface = u;
    })(p.Canvas2D || (p.Canvas2D = {}));
  })(m.GFX || (m.GFX = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(p) {
    (function(g) {
      var b = m.Debug.assert, w = m.GFX.Geometry.Rectangle, v = m.GFX.Geometry.Point, a = m.GFX.Geometry.Matrix, h = m.NumberUtilities.clamp, u = m.NumberUtilities.pow2, k = function() {
        return function(a, b) {
          this.surfaceRegion = a;
          this.scale = b;
        };
      }();
      g.MipMapLevel = k;
      var t = function() {
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
          1 !== a && (c = h(Math.round(Math.log(a) / Math.LN2), -5, 3));
          this._node.hasFlags(2097152) || (c = h(c, -5, 0));
          a = u(c);
          var b = 5 + c, c = this._levels[b];
          if (!c) {
            var d = this._node.getBounds().clone();
            d.scale(a, a);
            d.snap();
            var f = this._surfaceRegionAllocator.allocate(d.w, d.h, null), g = f.region, c = this._levels[b] = new k(f, a), b = new l(f);
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
      g.MipMap = t;
      (function(a) {
        a[a.NonZero = 0] = "NonZero";
        a[a.EvenOdd = 1] = "EvenOdd";
      })(g.FillRule || (g.FillRule = {}));
      var r = function(a) {
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
      g.Canvas2DRendererOptions = r;
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
      var l = function(b) {
        function e(c) {
          b.call(this);
          this.clip = w.createEmpty();
          this.clipList = [];
          this.clipPath = null;
          this.flags = 0;
          this.target = null;
          this.matrix = a.createIdentity();
          this.colorMatrix = p.ColorMatrix.createIdentity();
          e.allocationCount++;
          this.target = c;
        }
        __extends(e, b);
        e.prototype.set = function(a) {
          this.clip.set(a.clip);
          this.clipPath = a.clipPath;
          this.target = a.target;
          this.matrix.set(a.matrix);
          this.colorMatrix.set(a.colorMatrix);
          this.flags = a.flags;
          m.ArrayUtilities.copyFrom(this.clipList, a.clipList);
        };
        e.prototype.clone = function() {
          var a = e.allocate();
          a || (a = new e(this.target));
          a.set(this);
          return a;
        };
        e.allocate = function() {
          var a = e._dirtyStack, b = null;
          a.length && (b = a.pop());
          return b;
        };
        e.prototype.free = function() {
          this.clipPath = null;
          e._dirtyStack.push(this);
        };
        e.prototype.transform = function(a) {
          var b = this.clone();
          b.matrix.preMultiply(a.getMatrix());
          a.hasColorMatrix() && b.colorMatrix.multiply(a.getColorMatrix());
          return b;
        };
        e.prototype.hasFlags = function(a) {
          return (this.flags & a) === a;
        };
        e.prototype.removeFlags = function(a) {
          this.flags &= ~a;
        };
        e.prototype.toggleFlags = function(a, b) {
          this.flags = b ? this.flags | a : this.flags & ~a;
        };
        e.prototype.beginClipPath = function(a) {
          this.target.context.save();
          this.clipPath = new Path2D;
        };
        e.prototype.applyClipPath = function() {
          var a = this.target.context;
          a.setTransform(1, 0, 0, 1, 0, 0);
          a.clip(this.clipPath);
          var b = this.matrix;
          a.setTransform(b.a, b.b, b.c, b.d, b.tx, b.ty);
        };
        e.prototype.closeClipPath = function() {
          this.target.context.restore();
        };
        e.allocationCount = 0;
        e._dirtyStack = [];
        return e;
      }(p.State);
      g.RenderState = l;
      var q = function() {
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
      g.FrameInfo = q;
      var f = function(d) {
        function e(a, b, f) {
          void 0 === f && (f = new r);
          d.call(this, a, b, f);
          this._visited = 0;
          this._frameInfo = new q;
          this._fontSize = 0;
          this._layers = [];
          if (a instanceof HTMLCanvasElement) {
            var g = a;
            this._viewport = new w(0, 0, g.width, g.height);
            this._target = this._createTarget(g);
          } else {
            this._addLayer("Background Layer");
            f = this._addLayer("Canvas Layer");
            g = document.createElement("canvas");
            f.appendChild(g);
            this._viewport = new w(0, 0, a.scrollWidth, a.scrollHeight);
            var h = this;
            b.addEventListener(1, function() {
              h._onStageBoundsChanged(g);
            });
            this._onStageBoundsChanged(g);
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
          return new g.Canvas2DSurfaceRegion(new g.Canvas2DSurface(a), new p.RegionAllocator.Region(0, 0, a.width, a.height), a.width, a.height);
        };
        e.prototype._onStageBoundsChanged = function(a) {
          var b = this._stage.getBounds(!0);
          b.snap();
          for (var e = this._devicePixelRatio = window.devicePixelRatio || 1, d = b.w / e + "px", e = b.h / e + "px", f = 0;f < this._layers.length;f++) {
            var g = this._layers[f];
            g.style.width = d;
            g.style.height = e;
          }
          a.width = b.w;
          a.height = b.h;
          a.style.position = "absolute";
          a.style.width = d;
          a.style.height = e;
          this._target = this._createTarget(a);
          this._fontSize = 10 * this._devicePixelRatio;
        };
        e._prepareSurfaceAllocators = function() {
          e._initializedCaches || (e._surfaceCache = new p.SurfaceRegionAllocator.SimpleAllocator(function(a, b) {
            var e = document.createElement("canvas");
            "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(e);
            var d = Math.max(1024, a), f = Math.max(1024, b);
            e.width = d;
            e.height = f;
            var h = null, h = 512 <= a || 512 <= b ? new p.RegionAllocator.GridAllocator(d, f, d, f) : new p.RegionAllocator.BucketAllocator(d, f);
            return new g.Canvas2DSurface(e, h);
          }), e._shapeCache = new p.SurfaceRegionAllocator.SimpleAllocator(function(a, b) {
            var e = document.createElement("canvas");
            "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(e);
            e.width = 1024;
            e.height = 1024;
            var d = d = new p.RegionAllocator.CompactAllocator(1024, 1024);
            return new g.Canvas2DSurface(e, d);
          }), e._initializedCaches = !0);
        };
        e.prototype.render = function() {
          var a = this._stage, b = this._target, e = this._options, d = this._viewport;
          b.reset();
          b.context.save();
          b.context.beginPath();
          b.context.rect(d.x, d.y, d.w, d.h);
          b.context.clip();
          this._renderStageToTarget(b, a, d);
          b.reset();
          e.paintViewport && (b.context.beginPath(), b.context.rect(d.x, d.y, d.w, d.h), b.context.strokeStyle = "#FF4981", b.context.lineWidth = 2, b.context.stroke());
          b.context.restore();
        };
        e.prototype.renderNode = function(a, b, e) {
          var d = new l(this._target);
          d.clip.set(b);
          d.flags = 256;
          d.matrix.set(e);
          a.visit(this, d);
          d.free();
        };
        e.prototype.renderNodeWithState = function(a, b) {
          a.visit(this, b);
        };
        e.prototype._renderWithCache = function(a, b) {
          var d = b.matrix, f = a.getBounds();
          if (f.isEmpty()) {
            return !1;
          }
          var g = this._options.cacheShapesMaxSize, h = Math.max(d.getAbsoluteScaleX(), d.getAbsoluteScaleY()), l = !!(b.flags & 16), k = !!(b.flags & 8);
          if (b.hasFlags(256)) {
            if (k || l || !b.colorMatrix.isIdentity() || a.hasFlags(1048576) || 100 < this._options.cacheShapesThreshold || f.w * h > g || f.h * h > g) {
              return !1;
            }
            (h = a.properties.mipMap) || (h = a.properties.mipMap = new t(this, a, e._shapeCache, g));
            l = h.getLevel(d);
            g = l.surfaceRegion;
            h = g.region;
            return l ? (l = b.target.context, l.imageSmoothingEnabled = l.mozImageSmoothingEnabled = !0, l.setTransform(d.a, d.b, d.c, d.d, d.tx, d.ty), l.drawImage(g.surface.canvas, h.x, h.y, h.w, h.h, f.x, f.y, f.w, f.h), !0) : !1;
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
                  var g = e[f], h = g.getTransform(), l = b.transform(h);
                  l.toggleFlags(4096, g.hasFlags(524288));
                  if (0 <= g.clip) {
                    d = d || new Uint8Array(e.length);
                    d[g.clip + f]++;
                    var k = l.clone();
                    k.flags |= 16;
                    k.beginClipPath(h.getMatrix());
                    g.visit(this, k);
                    k.applyClipPath();
                    k.free();
                  } else {
                    g.visit(this, l);
                  }
                  if (d && 0 < d[f]) {
                    for (;d[f]--;) {
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
        e.prototype._renderDebugInfo = function(a, b) {
          if (b.flags & 1024) {
            var d = b.target.context, f = a.getBounds(!0), g = a.properties.style;
            g || (g = a.properties.style = m.Color.randomColor().toCSSStyle());
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
            a.source instanceof p.RenderableVideo ? this.visitRenderableVideo(a.source, b) : 0 < e.globalAlpha && this.visitRenderable(a.source, b, a.ratio);
            b.flags & 8192 && d.free();
            g.Filters._removeFilter(e);
          }
        };
        e.prototype.visitRenderableVideo = function(a, b) {
          if (a.video && a.video.videoWidth) {
            var d = this._devicePixelRatio, e = b.matrix.clone();
            e.scale(1 / d, 1 / d);
            var d = a.getBounds(), f = m.GFX.Geometry.Matrix.createIdentity();
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
            var l = b.getBounds().clone();
            g.transformRectangleAABB(l);
            l.snap();
            if (!l.isEmpty()) {
              var k = f.clip.clone();
              k.intersect(h);
              k.intersect(l);
              k.snap();
              k.isEmpty() || (h = f.clone(), h.clip.set(k), a = this._renderToTemporarySurface(a, a.getBounds(), h, w.createEmpty(), null), h.free(), l = f.clone(), l.clip.set(k), l.matrix = g, l.flags |= 4, e && (l.flags |= 8), b = this._renderToTemporarySurface(b, b.getBounds(), l, w.createEmpty(), a.surface), l.free(), a.draw(b, 0, 0, k.w, k.h, l.colorMatrix, 11, null, this._devicePixelRatio), f.target.draw(a, k.x, k.y, k.w, k.h, h.colorMatrix, d, null, this._devicePixelRatio), b.free(), a.free());
            }
          }
        };
        e.prototype._renderStageToTarget = function(b, d, e) {
          w.allocationCount = a.allocationCount = l.allocationCount = 0;
          b = new l(b);
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
          d && (d = this._stage.content.groupChild.child, b(d instanceof p.Stage), a = d.content.getBounds(!0), d.content.getTransform().getConcatenatedMatrix().transformRectangleAABB(a), a.intersect(this._viewport));
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
          return new p.ScreenShot(e.toDataURL("image/png"), d, f, g);
        };
        e._initializedCaches = !1;
        e._debugPoints = v.createEmptyPoints(4);
        return e;
      }(p.Renderer);
      g.Canvas2DRenderer = f;
    })(p.Canvas2D || (p.Canvas2D = {}));
  })(m.GFX || (m.GFX = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(p) {
    var g = p.Geometry.Point, b = p.Geometry.Matrix, w = p.Geometry.Rectangle, v = m.Tools.Mini.FPS, a = function() {
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
    p.UIState = a;
    var h = function(a) {
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
        var f = "DOMMouseScroll" === b.type ? -b.detail : b.wheelDelta / 40;
        if (b.altKey) {
          b.preventDefault();
          var d = a.getMousePosition(b, null), e = a.worldView.getTransform().getMatrix(!0), f = 1 + f / 1E3;
          e.translate(-d.x, -d.y);
          e.scale(f, f);
          e.translate(d.x, d.y);
          a.worldView.getTransform().setMatrix(e);
        }
      };
      b.prototype.onKeyPress = function(a, b) {
        if (b.altKey) {
          var f = b.keyCode || b.which;
          console.info("onKeyPress Code: " + f);
          switch(f) {
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
          var b = p.viewportLoupeDiameter.value, f = p.viewportLoupeDiameter.value;
          a.viewport = new w(this._mousePosition.x - b / 2, this._mousePosition.y - f / 2, b, f);
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
          var f = a._world;
          f && (a.state = new k(f, a.getMousePosition(b, null), f.getTransform().getMatrix(!0)));
        }
      };
      b.prototype.onMouseUp = function(a, b) {
        a.state = new h;
        a.selectNodeUnderMouse(b);
      };
      return b;
    })(a);
    var k = function(a) {
      function b(g, h, f) {
        a.call(this);
        this._target = g;
        this._startPosition = h;
        this._startMatrix = f;
      }
      __extends(b, a);
      b.prototype.onMouseMove = function(a, b) {
        b.preventDefault();
        var f = a.getMousePosition(b, null);
        f.sub(this._startPosition);
        this._target.getTransform().setMatrix(this._startMatrix.clone().translate(f.x, f.y));
        a.state = this;
      };
      b.prototype.onMouseUp = function(a, b) {
        a.state = new h;
      };
      return b;
    }(a), a = function() {
      function a(b, g, k) {
        function f(a) {
          c._state.onMouseWheel(c, a);
          c._persistentState.onMouseWheel(c, a);
        }
        void 0 === g && (g = !1);
        void 0 === k && (k = void 0);
        this._state = new h;
        this._persistentState = new u;
        this.paused = !1;
        this.viewport = null;
        this._selectedNodes = [];
        this._isRendering = !1;
        this._rAF = void 0;
        this._eventListeners = Object.create(null);
        this._fullScreen = !1;
        this._container = b;
        this._stage = new p.Stage(512, 512, !0);
        this._worldView = this._stage.content;
        this._world = new p.Group;
        this._worldView.addChild(this._world);
        this._disableHiDPI = g;
        g = document.createElement("div");
        g.style.position = "absolute";
        g.style.width = "100%";
        g.style.height = "100%";
        g.style.zIndex = "0";
        b.appendChild(g);
        if (p.hud.value) {
          var d = document.createElement("div");
          d.style.position = "absolute";
          d.style.width = "100%";
          d.style.height = "100%";
          d.style.pointerEvents = "none";
          var e = document.createElement("div");
          e.style.position = "absolute";
          e.style.width = "100%";
          e.style.height = "20px";
          e.style.pointerEvents = "none";
          d.appendChild(e);
          b.appendChild(d);
          this._fps = new v(e);
        } else {
          this._fps = null;
        }
        this.transparent = d = 0 === k;
        void 0 === k || 0 === k || m.ColorUtilities.rgbaToCSSStyle(k);
        this._options = new p.Canvas2D.Canvas2DRendererOptions;
        this._options.alpha = d;
        this._renderer = new p.Canvas2D.Canvas2DRenderer(g, this._stage, this._options);
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
        window.addEventListener("DOMMouseScroll", f);
        window.addEventListener("mousewheel", f);
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
          this._rAF = requestAnimationFrame(function q() {
            a.render();
            a._rAF = requestAnimationFrame(q);
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
        p.RenderableVideo.checkForVideoUpdates();
        var a = (this._stage.readyToRender() || p.forcePaint.value) && !this.paused, b = 0;
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
        var k = this._container, f = k.getBoundingClientRect(), d = this.getRatio(), k = new g(k.scrollWidth / f.width * (a.clientX - f.left) * d, k.scrollHeight / f.height * (a.clientY - f.top) * d);
        if (!h) {
          return k;
        }
        f = b.createIdentity();
        h.getTransform().getConcatenatedMatrix().inverse(f);
        f.transformPoint(k);
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
    p.Easel = a;
  })(m.GFX || (m.GFX = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(p) {
    var g = m.GFX.Geometry.Matrix;
    (function(b) {
      b[b.Simple = 0] = "Simple";
    })(p.Layout || (p.Layout = {}));
    var b = function(b) {
      function a() {
        b.apply(this, arguments);
        this.layout = 0;
      }
      __extends(a, b);
      return a;
    }(p.RendererOptions);
    p.TreeRendererOptions = b;
    var w = function(m) {
      function a(a, g, k) {
        void 0 === k && (k = new b);
        m.call(this, a, g, k);
        this._canvas = document.createElement("canvas");
        this._container.appendChild(this._canvas);
        this._context = this._canvas.getContext("2d");
        this._listenForContainerSizeChanges();
      }
      __extends(a, m);
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
        0 === this._options.layout && this._renderNodeSimple(this._context, this._stage, g.createIdentity());
        a.restore();
      };
      a.prototype._renderNodeSimple = function(a, b, g) {
        function m(b) {
          var c = b.getChildren();
          a.fillStyle = b.hasFlags(16) ? "red" : "white";
          var g = String(b.id);
          b instanceof p.RenderableText ? g = "T" + g : b instanceof p.RenderableShape ? g = "S" + g : b instanceof p.RenderableBitmap ? g = "B" + g : b instanceof p.RenderableVideo && (g = "V" + g);
          b instanceof p.Renderable && (g = g + " [" + b._parents.length + "]");
          b = a.measureText(g).width;
          a.fillText(g, l, q);
          if (c) {
            l += b + 4;
            d = Math.max(d, l + 20);
            for (g = 0;g < c.length;g++) {
              m(c[g]), g < c.length - 1 && (q += 18, q > r._canvas.height && (a.fillStyle = "gray", l = l - f + d + 8, f = d + 8, q = 0, a.fillStyle = "white"));
            }
            l -= b + 4;
          }
        }
        var r = this;
        a.save();
        a.font = "16px Arial";
        a.fillStyle = "white";
        var l = 0, q = 0, f = 0, d = 0;
        m(b);
        a.restore();
      };
      return a;
    }(p.Renderer);
    p.TreeRenderer = w;
  })(m.GFX || (m.GFX = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(p) {
    (function(g) {
      var b = m.GFX.BlurFilter, w = m.GFX.DropshadowFilter, v = m.GFX.Shape, a = m.GFX.Group, h = m.GFX.RenderableShape, u = m.GFX.RenderableMorphShape, k = m.GFX.RenderableBitmap, t = m.GFX.RenderableVideo, r = m.GFX.RenderableText, l = m.GFX.ColorMatrix, q = m.ShapeData, f = m.ArrayUtilities.DataBuffer, d = m.GFX.Stage, e = m.GFX.Geometry.Matrix, c = m.GFX.Geometry.Rectangle, n = function() {
        function a() {
        }
        a.prototype.writeMouseEvent = function(a, b) {
          var c = this.output;
          c.writeInt(300);
          var d = m.Remoting.MouseEventNames.indexOf(a.type);
          c.writeInt(d);
          c.writeFloat(b.x);
          c.writeFloat(b.y);
          c.writeInt(a.buttons);
          c.writeInt((a.ctrlKey ? 1 : 0) | (a.altKey ? 2 : 0) | (a.shiftKey ? 4 : 0));
        };
        a.prototype.writeKeyboardEvent = function(a) {
          var b = this.output;
          b.writeInt(301);
          var c = m.Remoting.KeyboardEventNames.indexOf(a.type);
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
      g.GFXChannelSerializer = n;
      n = function() {
        function a(b, c, e) {
          function f(a) {
            a = a.getBounds(!0);
            var c = b.easel.getRatio();
            a.scale(1 / c, 1 / c);
            a.snap();
            g.setBounds(a);
          }
          var g = this.stage = new d(128, 512);
          "undefined" !== typeof registerInspectorStage && registerInspectorStage(g);
          f(b.stage);
          b.stage.addEventListener(1, f);
          b.content = g.content;
          e && this.stage.setFlags(32768);
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
          m.registerCSSFont(a, b, !inFirefox);
          inFirefox ? c(null) : window.setTimeout(c, 400);
        };
        a.prototype.registerImage = function(a, b, c, d, e) {
          this._registerAsset(a, b, this._decodeImage(c, d, e));
        };
        a.prototype.registerVideo = function(a) {
          this._registerAsset(a, 0, new t(a, this));
        };
        a.prototype._decodeImage = function(a, b, d) {
          var e = new Image, f = k.FromImage(e);
          e.src = URL.createObjectURL(new Blob([b], {type:m.getMIMETypeForImageType(a)}));
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
      g.GFXChannelDeserializerContext = n;
      n = function() {
        function d() {
        }
        d.prototype.read = function() {
          for (var a = 0, b = this.input, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0, l = 0, k = 0;0 < b.bytesAvailable;) {
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
                l++;
                this._readDrawToBitmap();
                break;
              case 106:
                k++, this._readRequestBitmapData();
            }
          }
        };
        d.prototype._readMatrix = function() {
          var a = this.input, b = d._temporaryReadMatrix;
          b.setElements(a.readFloat(), a.readFloat(), a.readFloat(), a.readFloat(), a.readFloat() / 20, a.readFloat() / 20);
          return b;
        };
        d.prototype._readRectangle = function() {
          var a = this.input, b = d._temporaryReadRectangle;
          b.setElements(a.readInt() / 20, a.readInt() / 20, a.readInt() / 20, a.readInt() / 20);
          return b;
        };
        d.prototype._readColorMatrix = function() {
          var a = this.input, b = d._temporaryReadColorMatrix, c = 1, e = 1, f = 1, g = 1, h = 0, l = 0, k = 0, m = 0;
          switch(a.readInt()) {
            case 0:
              return d._temporaryReadColorMatrixIdentity;
            case 1:
              g = a.readFloat();
              break;
            case 2:
              c = a.readFloat(), e = a.readFloat(), f = a.readFloat(), g = a.readFloat(), h = a.readInt(), l = a.readInt(), k = a.readInt(), m = a.readInt();
          }
          b.setMultipliersAndOffsets(c, e, f, g, h, l, k, m);
          return b;
        };
        d.prototype._readAsset = function() {
          var a = this.input.readInt(), b = this.inputAssets[a];
          this.inputAssets[a] = null;
          return b;
        };
        d.prototype._readUpdateGraphics = function() {
          for (var a = this.input, b = this.context, c = a.readInt(), d = a.readInt(), e = b._getAsset(c), f = this._readRectangle(), g = q.FromPlainObject(this._readAsset()), l = a.readInt(), k = [], m = 0;m < l;m++) {
            var n = a.readInt();
            k.push(b._getBitmapAsset(n));
          }
          if (e) {
            e.update(g, k, f);
          } else {
            a = g.morphCoordinates ? new u(c, g, k, f) : new h(c, g, k, f);
            for (m = 0;m < k.length;m++) {
              k[m] && k[m].addRenderableParent(a);
            }
            b._registerAsset(c, d, a);
          }
        };
        d.prototype._readUpdateBitmapData = function() {
          var a = this.input, b = this.context, c = a.readInt(), d = a.readInt(), e = b._getBitmapAsset(c), g = this._readRectangle(), a = a.readInt(), h = f.FromPlainObject(this._readAsset());
          e ? e.updateFromDataBuffer(a, h) : (e = k.FromDataBuffer(a, h, g), b._registerAsset(c, d, e));
        };
        d.prototype._readUpdateTextContent = function() {
          var a = this.input, b = this.context, c = a.readInt(), d = a.readInt(), e = b._getTextAsset(c), g = this._readRectangle(), h = this._readMatrix(), l = a.readInt(), k = a.readInt(), m = a.readInt(), n = a.readBoolean(), p = a.readInt(), q = a.readInt(), u = this._readAsset(), t = f.FromPlainObject(this._readAsset()), v = null, w = a.readInt();
          w && (v = new f(4 * w), a.readBytes(v, 4 * w));
          e ? (e.setBounds(g), e.setContent(u, t, h, v), e.setStyle(l, k, p, q), e.reflow(m, n)) : (e = new r(g), e.setContent(u, t, h, v), e.setStyle(l, k, p, q), e.reflow(m, n), b._registerAsset(c, d, e));
          if (this.output) {
            for (a = e.textRect, this.output.writeInt(20 * a.w), this.output.writeInt(20 * a.h), this.output.writeInt(20 * a.x), e = e.lines, a = e.length, this.output.writeInt(a), b = 0;b < a;b++) {
              this._writeLineMetrics(e[b]);
            }
          }
        };
        d.prototype._writeLineMetrics = function(a) {
          this.output.writeInt(a.x);
          this.output.writeInt(a.width);
          this.output.writeInt(a.ascent);
          this.output.writeInt(a.descent);
          this.output.writeInt(a.leading);
        };
        d.prototype._readUpdateStage = function() {
          var a = this.context, b = this.input.readInt();
          a._nodes[b] || (a._nodes[b] = a.stage.content);
          var b = this.input.readInt(), c = this._readRectangle();
          a.stage.content.setBounds(c);
          a.stage.color = m.Color.FromARGB(b);
          a.stage.align = this.input.readInt();
          a.stage.scaleMode = this.input.readInt();
          b = this.input.readInt();
          this.input.readInt();
          c = this.input.readInt();
          a._easelHost.cursor = m.UI.toCSSCursor(c);
          a._easelHost.fullscreen = 0 === b || 1 === b;
        };
        d.prototype._readUpdateNetStream = function() {
          var a = this.context, b = this.input.readInt(), c = a._getVideoAsset(b), d = this._readRectangle();
          c || (a.registerVideo(b), c = a._getVideoAsset(b));
          c.setBounds(d);
        };
        d.prototype._readFilters = function(a) {
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
                  e.push(new l(g));
                  break;
                default:
                  m.Debug.somewhatImplemented(p.FilterType[g]);
              }
            }
            a.getLayer().filters = e;
          }
        };
        d.prototype._readUpdateFrame = function() {
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
              var l = b.readInt(), l = c._makeNode(l);
              g.addChild(l);
            }
          }
          e && (l = f.getChildren()[0], l instanceof v && (l.ratio = e));
        };
        d.prototype._readDrawToBitmap = function() {
          var a = this.input, b = this.context, c = a.readInt(), d = a.readInt(), f = a.readInt(), g, h, l;
          g = f & 1 ? this._readMatrix().clone() : e.createIdentity();
          f & 8 && (h = this._readColorMatrix());
          f & 16 && (l = this._readRectangle());
          f = a.readInt();
          a.readBoolean();
          a = b._getBitmapAsset(c);
          d = b._makeNode(d);
          a ? a.drawNode(d, g, h, f, l) : b._registerAsset(c, -1, k.FromNode(d, g, h, f, l));
        };
        d.prototype._readRequestBitmapData = function() {
          var a = this.output, b = this.context, c = this.input.readInt();
          b._getBitmapAsset(c).readImageData(a);
        };
        d._temporaryReadMatrix = e.createIdentity();
        d._temporaryReadRectangle = c.createEmpty();
        d._temporaryReadColorMatrix = l.createIdentity();
        d._temporaryReadColorMatrixIdentity = l.createIdentity();
        return d;
      }();
      g.GFXChannelDeserializer = n;
    })(p.GFX || (p.GFX = {}));
  })(m.Remoting || (m.Remoting = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(p) {
    var g = m.GFX.Geometry.Point, b = m.ArrayUtilities.DataBuffer, w = function() {
      function p(a) {
        this._easel = a;
        var b = a.transparent;
        this._group = a.world;
        this._content = null;
        this._fullscreen = !1;
        this._context = new m.Remoting.GFX.GFXChannelDeserializerContext(this, this._group, b);
        this._addEventListeners();
      }
      p.prototype.onSendUpdates = function(a, b) {
        throw Error("This method is abstract");
      };
      Object.defineProperty(p.prototype, "easel", {get:function() {
        return this._easel;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(p.prototype, "stage", {get:function() {
        return this._easel.stage;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(p.prototype, "content", {set:function(a) {
        this._content = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(p.prototype, "cursor", {set:function(a) {
        this._easel.cursor = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(p.prototype, "fullscreen", {set:function(a) {
        this._fullscreen !== a && (this._fullscreen = a, "undefined" !== typeof ShumwayCom && ShumwayCom.setFullscreen && ShumwayCom.setFullscreen(a));
      }, enumerable:!0, configurable:!0});
      p.prototype._mouseEventListener = function(a) {
        var h = this._easel.getMousePosition(a, this._content), h = new g(h.x, h.y), p = new b, k = new m.Remoting.GFX.GFXChannelSerializer;
        k.output = p;
        k.writeMouseEvent(a, h);
        this.onSendUpdates(p, []);
      };
      p.prototype._keyboardEventListener = function(a) {
        var g = new b, p = new m.Remoting.GFX.GFXChannelSerializer;
        p.output = g;
        p.writeKeyboardEvent(a);
        this.onSendUpdates(g, []);
      };
      p.prototype._addEventListeners = function() {
        for (var a = this._mouseEventListener.bind(this), b = this._keyboardEventListener.bind(this), g = p._mouseEvents, k = 0;k < g.length;k++) {
          window.addEventListener(g[k], a);
        }
        a = p._keyboardEvents;
        for (k = 0;k < a.length;k++) {
          window.addEventListener(a[k], b);
        }
        this._addFocusEventListeners();
        this._easel.addEventListener("resize", this._resizeEventListener.bind(this));
      };
      p.prototype._sendFocusEvent = function(a) {
        var g = new b, p = new m.Remoting.GFX.GFXChannelSerializer;
        p.output = g;
        p.writeFocusEvent(a);
        this.onSendUpdates(g, []);
      };
      p.prototype._addFocusEventListeners = function() {
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
      p.prototype._resizeEventListener = function() {
        this.onDisplayParameters(this._easel.getDisplayParameters());
      };
      p.prototype.onDisplayParameters = function(a) {
        throw Error("This method is abstract");
      };
      p.prototype.processUpdates = function(a, b, g) {
        void 0 === g && (g = null);
        var k = new m.Remoting.GFX.GFXChannelDeserializer;
        k.input = a;
        k.inputAssets = b;
        k.output = g;
        k.context = this._context;
        k.read();
      };
      p.prototype.processVideoControl = function(a, b, g) {
        var k = this._context, m = k._getVideoAsset(a);
        if (!m) {
          if (1 !== b) {
            return;
          }
          k.registerVideo(a);
          m = k._getVideoAsset(a);
        }
        return m.processControlRequest(b, g);
      };
      p.prototype.processRegisterFont = function(a, b, g) {
        this._context.registerFont(a, b, g);
      };
      p.prototype.processRegisterImage = function(a, b, g, k, m) {
        this._context.registerImage(a, b, g, k, m);
      };
      p.prototype.processFSCommand = function(a, b) {
        arguments.length;
      };
      p.prototype.processFrame = function() {
        arguments.length;
      };
      p.prototype.onVideoPlaybackEvent = function(a, b, g) {
        throw Error("This method is abstract");
      };
      p.prototype.sendVideoPlaybackEvent = function(a, b, g) {
        this.onVideoPlaybackEvent(a, b, g);
      };
      p._mouseEvents = m.Remoting.MouseEventNames;
      p._keyboardEvents = m.Remoting.KeyboardEventNames;
      return p;
    }();
    p.EaselHost = w;
  })(m.GFX || (m.GFX = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(p) {
    (function(g) {
      var b = m.ArrayUtilities.DataBuffer, w = function(g) {
        function a(a, b, k) {
          g.call(this, a);
          this._playerWindow = b;
          this._window = k;
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
              var k = b.FromArrayBuffer(a.updates.buffer);
              if (g) {
                this.processUpdates(k, a.assets);
              } else {
                var m = new b;
                this.processUpdates(k, a.assets, m);
                a.result = m.toPlainObject();
              }
            } else {
              "frame" === a.type ? this.processFrame() : "videoControl" === a.type ? a.result = this.processVideoControl(a.id, a.eventType, a.data) : "registerFont" === a.type ? this.processRegisterFont(a.syncId, a.data, this._sendRegisterFontResponse.bind(this, a.requestId)) : "registerImage" === a.type ? this.processRegisterImage(a.syncId, a.symbolId, a.imageType, a.data, this._sendRegisterImageResponse.bind(this, a.requestId)) : "fscommand" === a.type && this.processFSCommand(a.command, a.args)
              ;
            }
          }
        };
        return a;
      }(p.EaselHost);
      g.WindowEaselHost = w;
    })(p.Window || (p.Window = {}));
  })(m.GFX || (m.GFX = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(p) {
    (function(g) {
      function b(a, b) {
        a.writeInt(b.length);
        a.writeRawBytes(b);
      }
      function p(a) {
        function g(a) {
          switch(typeof a) {
            case "undefined":
              f.writeByte(0);
              break;
            case "boolean":
              f.writeByte(a ? 2 : 3);
              break;
            case "number":
              f.writeByte(4);
              f.writeDouble(a);
              break;
            case "string":
              f.writeByte(5);
              f.writeUTF(a);
              break;
            default:
              if (null === a) {
                f.writeByte(1);
                break;
              }
              if (Array.isArray(a) && a instanceof Int32Array) {
                f.writeByte(6);
                f.writeInt(a.length);
                for (var e = 0;e < a.length;e++) {
                  g(a[e]);
                }
              } else {
                if (a instanceof Uint8Array) {
                  f.writeByte(9), b(f, a);
                } else {
                  if ("length" in a && "buffer" in a && "littleEndian" in a) {
                    f.writeByte(a.littleEndian ? 10 : 11), b(f, new Uint8Array(a.buffer, 0, a.length));
                  } else {
                    if (a instanceof ArrayBuffer) {
                      f.writeByte(8), b(f, new Uint8Array(a));
                    } else {
                      if (a instanceof Int32Array) {
                        f.writeByte(12), b(f, new Uint8Array(a.buffer, a.byteOffset, a.byteLength));
                      } else {
                        if (a.buffer instanceof ArrayBuffer && "number" === typeof a.byteOffset) {
                          throw Error("Some unsupported TypedArray is used");
                        }
                        f.writeByte(7);
                        for (e in a) {
                          f.writeUTF(e), g(a[e]);
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
        var f = new u;
        g(a);
        return f.getBytes();
      }
      function v(a) {
        var b = new u, f = a.readInt();
        a.readBytes(b, f);
        return b.getBytes();
      }
      function a(a) {
        var b = new u, f = a.readInt();
        a.readBytes(b, f);
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
            for (var b = [], f = a.readInt(), d = 0;d < f;d++) {
              b[d] = h(a);
            }
            return b;
          case 7:
            for (b = {};f = a.readUTF();) {
              b[f] = h(a);
            }
            return b;
          case 8:
            return v(a).buffer;
          case 9:
            return v(a);
          case 11:
          ;
          case 10:
            return a = v(a), new k(a.buffer, a.length, 10 === b);
          case 12:
            return new Int32Array(v(a).buffer);
        }
      }
      var u = m.ArrayUtilities.DataBuffer, k = m.ArrayUtilities.PlainObjectDataBuffer, t;
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
      })(t || (t = {}));
      (function(a) {
        a[a.None = 0] = "None";
        a[a.PlayerCommand = 1] = "PlayerCommand";
        a[a.PlayerCommandAsync = 2] = "PlayerCommandAsync";
        a[a.Frame = 3] = "Frame";
        a[a.Font = 4] = "Font";
        a[a.Image = 5] = "Image";
        a[a.FSCommand = 6] = "FSCommand";
      })(g.MovieRecordType || (g.MovieRecordType = {}));
      t = function() {
        function a(b) {
          this._maxRecordingSize = b;
          this._recording = new u;
          this._recordingStarted = Date.now();
          this._recording.writeRawBytes(new Uint8Array([77, 83, 87, 70]));
          this._stopped = !1;
        }
        a.prototype.stop = function() {
          this._stopped = !0;
        };
        a.prototype.getRecording = function() {
          return new Blob([this._recording.getBytes()], {type:"application/octet-stream"});
        };
        a.prototype.dump = function() {
          (new r(this._recording.getBytes())).dump();
        };
        a.prototype._createRecord = function(a, b) {
          this._stopped || (this._recording.length + 8 + (b ? b.length : 0) >= this._maxRecordingSize ? (console.error("Recording limit reached"), this._stopped = !0) : (this._recording.writeInt(Date.now() - this._recordingStarted), this._recording.writeInt(a), null !== b ? (this._recording.writeInt(b.length), this._recording.writeRawBytes(b.getBytes())) : this._recording.writeInt(0)));
        };
        a.prototype.recordPlayerCommand = function(a, f, d) {
          var e = new u;
          b(e, f);
          e.writeInt(d.length);
          d.forEach(function(a) {
            a = p(a);
            b(e, a);
          });
          this._createRecord(a ? 2 : 1, e);
        };
        a.prototype.recordFrame = function() {
          this._createRecord(3, null);
        };
        a.prototype.recordFont = function(a, f) {
          var d = new u;
          d.writeInt(a);
          b(d, p(f));
          this._createRecord(4, d);
        };
        a.prototype.recordImage = function(a, f, d, e) {
          var c = new u;
          c.writeInt(a);
          c.writeInt(f);
          c.writeInt(d);
          b(c, p(e));
          this._createRecord(5, c);
        };
        a.prototype.recordFSCommand = function(a, b) {
          var d = new u;
          d.writeUTF(a);
          d.writeUTF(b || "");
          this._createRecord(6, d);
        };
        return a;
      }();
      g.MovieRecorder = t;
      var r = function() {
        function b(a) {
          this._buffer = new u;
          this._buffer.writeRawBytes(a);
          this._buffer.position = 4;
        }
        b.prototype.readNextRecord = function() {
          if (this._buffer.position >= this._buffer.length) {
            return 0;
          }
          var a = this._buffer.readInt(), b = this._buffer.readInt(), d = this._buffer.readInt(), e = null;
          0 < d && (e = new u, this._buffer.readBytes(e, d));
          this.currentTimestamp = a;
          this.currentType = b;
          this.currentData = e;
          return b;
        };
        b.prototype.parsePlayerCommand = function() {
          for (var b = v(this.currentData), f = this.currentData.readInt(), d = [], e = 0;e < f;e++) {
            d.push(a(this.currentData));
          }
          return {updates:b, assets:d};
        };
        b.prototype.parseFSCommand = function() {
          var a = this.currentData.readUTF(), b = this.currentData.readUTF();
          return {command:a, args:b};
        };
        b.prototype.parseFont = function() {
          var b = this.currentData.readInt(), f = a(this.currentData);
          return {syncId:b, data:f};
        };
        b.prototype.parseImage = function() {
          var b = this.currentData.readInt(), f = this.currentData.readInt(), d = this.currentData.readInt(), e = a(this.currentData);
          return {syncId:b, symbolId:f, imageType:d, data:e};
        };
        b.prototype.dump = function() {
          for (var a;a = this.readNextRecord();) {
            console.log("record " + a + " @" + this.currentTimestamp);
            debugger;
            switch(a) {
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
        return b;
      }();
      g.MovieRecordParser = r;
    })(p.Test || (p.Test = {}));
  })(m.GFX || (m.GFX = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(p) {
    (function(g) {
      var b = m.ArrayUtilities.DataBuffer, w = function(m) {
        function a(a) {
          m.call(this, a);
          this.alwaysRenderFrame = this.ignoreTimestamps = !1;
          this.cpuTimeRendering = this.cpuTimeUpdates = 0;
          this.onComplete = null;
        }
        __extends(a, m);
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
              var k = 2 === this._parser.currentType, m = b.FromArrayBuffer(a.updates.buffer);
              k ? this.processUpdates(m, a.assets) : (k = new b, this.processUpdates(m, a.assets, k));
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
      }(p.EaselHost);
      g.PlaybackEaselHost = w;
    })(p.Test || (p.Test = {}));
  })(m.GFX || (m.GFX = {}));
})(Shumway || (Shumway = {}));
(function(m) {
  (function(p) {
    (function(g) {
      var b = function(b) {
        function m(a, h, p, k) {
          void 0 === k && (k = 0);
          b.call(this, a, h, p);
          this._recorder = null;
          this._recorder = new g.MovieRecorder(k);
        }
        __extends(m, b);
        Object.defineProperty(m.prototype, "recorder", {get:function() {
          return this._recorder;
        }, enumerable:!0, configurable:!0});
        m.prototype._onWindowMessage = function(a, g) {
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
        return m;
      }(m.GFX.Window.WindowEaselHost);
      g.RecordingEaselHost = b;
    })(p.Test || (p.Test = {}));
  })(m.GFX || (m.GFX = {}));
})(Shumway || (Shumway = {}));
console.timeEnd("Load GFX Dependencies");

