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
Shumway$$inline_0.version = "0.11.137";
Shumway$$inline_0.build = "69304b7";
var jsGlobal = function() {
  return this || (0,eval)("this//# sourceURL=jsGlobal-getter");
}(), inBrowser = "undefined" !== typeof window && "document" in window && "plugins" in window.document, inFirefox = "undefined" !== typeof navigator && 0 <= navigator.userAgent.indexOf("Firefox");
jsGlobal.performance || (jsGlobal.performance = {});
jsGlobal.performance.now || (jsGlobal.performance.now = function() {
  return Date.now();
});
function lazyInitializer(k, r, g) {
  Object.defineProperty(k, r, {get:function() {
    var b = g();
    Object.defineProperty(k, r, {value:b, configurable:!0, enumerable:!0});
    return b;
  }, configurable:!0, enumerable:!0});
}
var START_TIME = performance.now();
(function(k) {
  function r(d) {
    return (d | 0) === d;
  }
  function g(d) {
    return "object" === typeof d || "function" === typeof d;
  }
  function b(d) {
    return String(Number(d)) === d;
  }
  function v(d) {
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
    if (f > k.UINT32_CHAR_BUFFER_LENGTH) {
      return !1;
    }
    var c = 0, e = d.charCodeAt(c++) - 48;
    if (1 > e || 9 < e) {
      return !1;
    }
    for (var q = 0, A = 0;c < f;) {
      A = d.charCodeAt(c++) - 48;
      if (0 > A || 9 < A) {
        return !1;
      }
      q = e;
      e = 10 * e + A;
    }
    return q < k.UINT32_MAX_DIV_10 || q === k.UINT32_MAX_DIV_10 && A <= k.UINT32_MAX_MOD_10 ? !0 : !1;
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
  })(k.CharacterCodes || (k.CharacterCodes = {}));
  k.UINT32_CHAR_BUFFER_LENGTH = 10;
  k.UINT32_MAX = 4294967295;
  k.UINT32_MAX_DIV_10 = 429496729;
  k.UINT32_MAX_MOD_10 = 5;
  k.isString = function(d) {
    return "string" === typeof d;
  };
  k.isFunction = function(d) {
    return "function" === typeof d;
  };
  k.isNumber = function(d) {
    return "number" === typeof d;
  };
  k.isInteger = r;
  k.isArray = function(d) {
    return d instanceof Array;
  };
  k.isNumberOrString = function(d) {
    return "number" === typeof d || "string" === typeof d;
  };
  k.isObject = g;
  k.toNumber = function(d) {
    return +d;
  };
  k.isNumericString = b;
  k.isNumeric = function(d) {
    if ("number" === typeof d) {
      return !0;
    }
    if ("string" === typeof d) {
      var e = d.charCodeAt(0);
      return 65 <= e && 90 >= e || 97 <= e && 122 >= e || 36 === e || 95 === e ? !1 : v(d) || b(d);
    }
    return !1;
  };
  k.isIndex = v;
  k.isNullOrUndefined = function(d) {
    return void 0 == d;
  };
  k.argumentsToString = function(d) {
    for (var e = [], f = 0;f < d.length;f++) {
      var c = d[f];
      try {
        var q;
        q = "object" === typeof c && c ? "toString" in c ? c.toString() : Object.prototype.toString.call(c) : c + "";
        e.push(q);
      } catch (A) {
        e.push("<unprintable value>");
      }
    }
    return e.join(", ");
  };
  var m;
  (function(d) {
    d.error = function(c) {
      console.error(c);
      throw Error(c);
    };
    d.assert = function(c, q) {
      void 0 === q && (q = "assertion failed");
      "" === c && (c = !0);
      if (!c) {
        if ("undefined" !== typeof console && "assert" in console) {
          throw console.assert(!1, q), Error(q);
        }
        d.error(q.toString());
      }
    };
    d.assertUnreachable = function(c) {
      throw Error("Reached unreachable location " + Error().stack.split("\n")[1] + c);
    };
    d.assertNotImplemented = function(c, q) {
      c || d.error("notImplemented: " + q);
    };
    var e = Object.create(null);
    d.warning = function(c, q, f) {
    };
    d.warnCounts = function() {
      var c = [], q;
      for (q in e) {
        c.push({key:q, count:e[q]});
      }
      c.sort(function(c, q) {
        return q.count - c.count;
      });
      return c.reduce(function(c, q) {
        return c + ("\n" + q.count + "\t" + q.key);
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
  })(m = k.Debug || (k.Debug = {}));
  k.getTicks = function() {
    return performance.now();
  };
  (function(d) {
    function e(c, q) {
      for (var f = 0, e = c.length;f < e;f++) {
        if (c[f] === q) {
          return f;
        }
      }
      c.push(q);
      return c.length - 1;
    }
    d.popManyInto = function(c, q, f) {
      for (var e = q - 1;0 <= e;e--) {
        f[e] = c.pop();
      }
      f.length = q;
    };
    d.popMany = function(c, q) {
      var f = c.length - q, e = c.slice(f, this.length);
      c.length = f;
      return e;
    };
    d.popManyIntoVoid = function(c, q) {
      c.length -= q;
    };
    d.pushMany = function(c, q) {
      for (var f = 0;f < q.length;f++) {
        c.push(q[f]);
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
    d.indexOf = function(c, q) {
      for (var f = 0, e = c.length;f < e;f++) {
        if (c[f] === q) {
          return f;
        }
      }
      return -1;
    };
    d.equals = function(c, q) {
      if (c.length !== q.length) {
        return !1;
      }
      for (var f = 0;f < c.length;f++) {
        if (c[f] !== q[f]) {
          return !1;
        }
      }
      return !0;
    };
    d.pushUnique = e;
    d.unique = function(c) {
      for (var q = [], f = 0;f < c.length;f++) {
        e(q, c[f]);
      }
      return q;
    };
    d.copyFrom = function(c, q) {
      c.length = 0;
      d.pushMany(c, q);
    };
    d.ensureTypedArrayCapacity = function(c, q) {
      if (c.length < q) {
        var f = c;
        c = new c.constructor(k.IntegerUtilities.nearestPowerOfTwo(q));
        c.set(f, 0);
      }
      return c;
    };
    d.memCopy = function(c, q, f, e, d) {
      void 0 === f && (f = 0);
      void 0 === e && (e = 0);
      void 0 === d && (d = 0);
      0 < e || 0 < d && d < q.length ? (0 >= d && (d = q.length - e), c.set(q.subarray(e, e + d), f)) : c.set(q, f);
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
        var a = this._offset >> 2;
        this._f32[a + 0] = c;
        this._f32[a + 1] = f;
        this._f32[a + 2] = e;
        this._f32[a + 3] = d;
        this._offset += 16;
      };
      c.prototype.write6Floats = function(c, f, e, d, a, h) {
        this.ensureCapacity(this._offset + 24);
        this.write6FloatsUnsafe(c, f, e, d, a, h);
      };
      c.prototype.write6FloatsUnsafe = function(c, f, e, d, a, h) {
        var n = this._offset >> 2;
        this._f32[n + 0] = c;
        this._f32[n + 1] = f;
        this._f32[n + 2] = e;
        this._f32[n + 3] = d;
        this._f32[n + 4] = a;
        this._f32[n + 5] = h;
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
  })(k.ArrayUtilities || (k.ArrayUtilities = {}));
  var a = function() {
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
  k.ArrayReader = a;
  (function(d) {
    function e(c, f) {
      return Object.prototype.hasOwnProperty.call(c, f);
    }
    function f(c, f) {
      for (var A in f) {
        e(f, A) && (c[A] = f[A]);
      }
    }
    d.boxValue = function(c) {
      return void 0 == c || g(c) ? c : Object(c);
    };
    d.toKeyValueArray = function(c) {
      var f = Object.prototype.hasOwnProperty, e = [], d;
      for (d in c) {
        f.call(c, d) && e.push([d, c[d]]);
      }
      return e;
    };
    d.isPrototypeWriteable = function(c) {
      return Object.getOwnPropertyDescriptor(c, "prototype").writable;
    };
    d.hasOwnProperty = e;
    d.propertyIsEnumerable = function(c, f) {
      return Object.prototype.propertyIsEnumerable.call(c, f);
    };
    d.getPropertyDescriptor = function(c, f) {
      do {
        var e = Object.getOwnPropertyDescriptor(c, f);
        if (e) {
          return e;
        }
        c = Object.getPrototypeOf(c);
      } while (c);
      return null;
    };
    d.hasOwnGetter = function(c, f) {
      var e = Object.getOwnPropertyDescriptor(c, f);
      return !(!e || !e.get);
    };
    d.getOwnGetter = function(c, f) {
      var e = Object.getOwnPropertyDescriptor(c, f);
      return e ? e.get : null;
    };
    d.hasOwnSetter = function(c, f) {
      var e = Object.getOwnPropertyDescriptor(c, f);
      return !(!e || !e.set);
    };
    d.createMap = function() {
      return Object.create(null);
    };
    d.createArrayMap = function() {
      return [];
    };
    d.defineReadOnlyProperty = function(c, f, e) {
      Object.defineProperty(c, f, {value:e, writable:!1, configurable:!0, enumerable:!1});
    };
    d.getOwnPropertyDescriptors = function(c) {
      for (var f = d.createMap(), e = Object.getOwnPropertyNames(c), a = 0;a < e.length;a++) {
        f[e[a]] = Object.getOwnPropertyDescriptor(c, e[a]);
      }
      return f;
    };
    d.cloneObject = function(c) {
      var q = Object.create(Object.getPrototypeOf(c));
      f(q, c);
      return q;
    };
    d.copyProperties = function(c, f) {
      for (var e in f) {
        c[e] = f[e];
      }
    };
    d.copyOwnProperties = f;
    d.copyOwnPropertyDescriptors = function(c, f, A, d, a) {
      void 0 === A && (A = null);
      void 0 === d && (d = !0);
      void 0 === a && (a = !1);
      for (var h in f) {
        if (e(f, h) && (!A || A(h))) {
          var n = Object.getOwnPropertyDescriptor(f, h);
          if (d || !e(c, h)) {
            try {
              a && !1 === n.writable && (n.writable = !0), Object.defineProperty(c, h, n);
            } catch (l) {
              m.assert("Can't define: " + h);
            }
          }
        }
      }
    };
    d.copyPropertiesByList = function(c, f, e) {
      for (var d = 0;d < e.length;d++) {
        var a = e[d];
        c[a] = f[a];
      }
    };
    d.getLatestGetterOrSetterPropertyDescriptor = function(c, f) {
      for (var e = {};c;) {
        var d = Object.getOwnPropertyDescriptor(c, f);
        d && (e.get = e.get || d.get, e.set = e.set || d.set);
        if (e.get && e.set) {
          break;
        }
        c = Object.getPrototypeOf(c);
      }
      return e;
    };
    d.defineNonEnumerableGetterOrSetter = function(c, f, e, a) {
      var h = d.getLatestGetterOrSetterPropertyDescriptor(c, f);
      h.configurable = !0;
      h.enumerable = !1;
      a ? h.get = e : h.set = e;
      Object.defineProperty(c, f, h);
    };
    d.defineNonEnumerableGetter = function(c, f, e) {
      Object.defineProperty(c, f, {get:e, configurable:!0, enumerable:!1});
    };
    d.defineNonEnumerableSetter = function(c, f, e) {
      Object.defineProperty(c, f, {set:e, configurable:!0, enumerable:!1});
    };
    d.defineNonEnumerableProperty = function(c, f, e) {
      Object.defineProperty(c, f, {value:e, writable:!0, configurable:!0, enumerable:!1});
    };
    d.defineNonEnumerableForwardingProperty = function(c, f, e) {
      Object.defineProperty(c, f, {get:h.makeForwardingGetter(e), set:h.makeForwardingSetter(e), writable:!0, configurable:!0, enumerable:!1});
    };
    d.defineNewNonEnumerableProperty = function(c, f, e) {
      d.defineNonEnumerableProperty(c, f, e);
    };
    d.createPublicAliases = function(c, f) {
      for (var e = {value:null, writable:!0, configurable:!0, enumerable:!1}, d = 0;d < f.length;d++) {
        var a = f[d];
        e.value = c[a];
        Object.defineProperty(c, "$Bg" + a, e);
      }
    };
  })(k.ObjectUtilities || (k.ObjectUtilities = {}));
  var h;
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
  })(h = k.FunctionUtilities || (k.FunctionUtilities = {}));
  (function(d) {
    function e(c) {
      return "string" === typeof c ? '"' + c + '"' : "number" === typeof c || "boolean" === typeof c ? String(c) : c instanceof Array ? "[] " + c.length : typeof c;
    }
    function f(c, f, e) {
      q[0] = c;
      q[1] = f;
      q[2] = e;
      return q.join("");
    }
    function c(c, f, q, e) {
      a[0] = c;
      a[1] = f;
      a[2] = q;
      a[3] = e;
      return a.join("");
    }
    d.repeatString = function(c, f) {
      for (var q = "", e = 0;e < f;e++) {
        q += c;
      }
      return q;
    };
    d.memorySizeToString = function(c) {
      c |= 0;
      return 1024 > c ? c + " B" : 1048576 > c ? (c / 1024).toFixed(2) + "KB" : (c / 1048576).toFixed(2) + "MB";
    };
    d.toSafeString = e;
    d.toSafeArrayString = function(c) {
      for (var f = [], q = 0;q < c.length;q++) {
        f.push(e(c[q]));
      }
      return f.join(", ");
    };
    d.utf8decode = function(c) {
      for (var f = new Uint8Array(4 * c.length), q = 0, e = 0, d = c.length;e < d;e++) {
        var a = c.charCodeAt(e);
        if (127 >= a) {
          f[q++] = a;
        } else {
          if (55296 <= a && 56319 >= a) {
            var A = c.charCodeAt(e + 1);
            56320 <= A && 57343 >= A && (a = ((a & 1023) << 10) + (A & 1023) + 65536, ++e);
          }
          0 !== (a & 4292870144) ? (f[q++] = 248 | a >>> 24 & 3, f[q++] = 128 | a >>> 18 & 63, f[q++] = 128 | a >>> 12 & 63, f[q++] = 128 | a >>> 6 & 63) : 0 !== (a & 4294901760) ? (f[q++] = 240 | a >>> 18 & 7, f[q++] = 128 | a >>> 12 & 63, f[q++] = 128 | a >>> 6 & 63) : 0 !== (a & 4294965248) ? (f[q++] = 224 | a >>> 12 & 15, f[q++] = 128 | a >>> 6 & 63) : f[q++] = 192 | a >>> 6 & 31;
          f[q++] = 128 | a & 63;
        }
      }
      return f.subarray(0, q);
    };
    d.utf8encode = function(c) {
      for (var f = 0, q = "";f < c.length;) {
        var e = c[f++] & 255;
        if (127 >= e) {
          q += String.fromCharCode(e);
        } else {
          var d = 192, a = 5;
          do {
            if ((e & (d >> 1 | 128)) === d) {
              break;
            }
            d = d >> 1 | 128;
            --a;
          } while (0 <= a);
          if (0 >= a) {
            q += String.fromCharCode(e);
          } else {
            for (var e = e & (1 << a) - 1, d = !1, A = 5;A >= a;--A) {
              var h = c[f++];
              if (128 != (h & 192)) {
                d = !0;
                break;
              }
              e = e << 6 | h & 63;
            }
            if (d) {
              for (a = f - (7 - A);a < f;++a) {
                q += String.fromCharCode(c[a] & 255);
              }
            } else {
              q = 65536 <= e ? q + String.fromCharCode(e - 65536 >> 10 & 1023 | 55296, e & 1023 | 56320) : q + String.fromCharCode(e);
            }
          }
        }
      }
      return q;
    };
    d.base64ArrayBuffer = function(q) {
      var e = "";
      q = new Uint8Array(q);
      for (var d = q.byteLength, a = d % 3, d = d - a, A, h, J, G, n = 0;n < d;n += 3) {
        G = q[n] << 16 | q[n + 1] << 8 | q[n + 2], A = (G & 16515072) >> 18, h = (G & 258048) >> 12, J = (G & 4032) >> 6, G &= 63, e += c("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[A], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[h], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[J], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[G]);
      }
      1 == a ? (G = q[d], e += f("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(G & 252) >> 2], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(G & 3) << 4], "==")) : 2 == a && (G = q[d] << 8 | q[d + 1], e += c("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(G & 64512) >> 10], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(G & 1008) >> 4], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(G & 15) << 
      2], "="));
      return e;
    };
    d.escapeString = function(c) {
      void 0 !== c && (c = c.replace(/[^\w$]/gi, "$"), /^\d/.test(c) && (c = "$" + c));
      return c;
    };
    d.fromCharCodeArray = function(c) {
      for (var f = "", q = 0;q < c.length;q += 16384) {
        var e = Math.min(c.length - q, 16384), f = f + String.fromCharCode.apply(null, c.subarray(q, q + e))
      }
      return f;
    };
    d.variableLengthEncodeInt32 = function(c) {
      for (var f = 32 - Math.clz32(c), q = Math.ceil(f / 6), f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[q], q = q - 1;0 <= q;q--) {
        f += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[c >> 6 * q & 63];
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
      for (var f = d.fromEncoding(c.charCodeAt(0)), q = 0, e = 0;e < f;e++) {
        var a = 6 * (f - e - 1), q = q | d.fromEncoding(c.charCodeAt(1 + e)) << a
      }
      return q;
    };
    d.trimMiddle = function(c, f) {
      if (c.length <= f) {
        return c;
      }
      var q = f >> 1, e = f - q - 1;
      return c.substr(0, q) + "\u2026" + c.substr(c.length - e, e);
    };
    d.multiple = function(c, f) {
      for (var q = "", e = 0;e < f;e++) {
        q += c;
      }
      return q;
    };
    d.indexOfAny = function(c, f, q) {
      for (var e = c.length, d = 0;d < f.length;d++) {
        var a = c.indexOf(f[d], q);
        0 <= a && (e = Math.min(e, a));
      }
      return e === c.length ? -1 : e;
    };
    var q = Array(3), a = Array(4), h = Array(5), G = Array(6), n = Array(7), l = Array(8), u = Array(9);
    d.concat3 = f;
    d.concat4 = c;
    d.concat5 = function(c, f, q, e, d) {
      h[0] = c;
      h[1] = f;
      h[2] = q;
      h[3] = e;
      h[4] = d;
      return h.join("");
    };
    d.concat6 = function(c, f, q, e, d, a) {
      G[0] = c;
      G[1] = f;
      G[2] = q;
      G[3] = e;
      G[4] = d;
      G[5] = a;
      return G.join("");
    };
    d.concat7 = function(c, f, q, e, d, a, A) {
      n[0] = c;
      n[1] = f;
      n[2] = q;
      n[3] = e;
      n[4] = d;
      n[5] = a;
      n[6] = A;
      return n.join("");
    };
    d.concat8 = function(c, f, q, e, d, a, A, h) {
      l[0] = c;
      l[1] = f;
      l[2] = q;
      l[3] = e;
      l[4] = d;
      l[5] = a;
      l[6] = A;
      l[7] = h;
      return l.join("");
    };
    d.concat9 = function(c, f, q, e, d, a, A, h, J) {
      u[0] = c;
      u[1] = f;
      u[2] = q;
      u[3] = e;
      u[4] = d;
      u[5] = a;
      u[6] = A;
      u[7] = h;
      u[8] = J;
      return u.join("");
    };
  })(k.StringUtilities || (k.StringUtilities = {}));
  (function(d) {
    var e = new Uint8Array([7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21]), f = new Int32Array([-680876936, -389564586, 606105819, -1044525330, -176418897, 1200080426, -1473231341, -45705983, 1770035416, -1958414417, -42063, -1990404162, 1804603682, -40341101, -1502002290, 1236535329, -165796510, -1069501632, 
    643717713, -373897302, -701558691, 38016083, -660478335, -405537848, 568446438, -1019803690, -187363961, 1163531501, -1444681467, -51403784, 1735328473, -1926607734, -378558, -2022574463, 1839030562, -35309556, -1530992060, 1272893353, -155497632, -1094730640, 681279174, -358537222, -722521979, 76029189, -640364487, -421815835, 530742520, -995338651, -198630844, 1126891415, -1416354905, -57434055, 1700485571, -1894986606, -1051523, -2054922799, 1873313359, -30611744, -1560198380, 1309151649, 
    -145523070, -1120210379, 718787259, -343485551]);
    d.hashBytesTo32BitsMD5 = function(c, q, d) {
      var a = 1732584193, h = -271733879, n = -1732584194, l = 271733878, u = d + 72 & -64, b = new Uint8Array(u), p;
      for (p = 0;p < d;++p) {
        b[p] = c[q++];
      }
      b[p++] = 128;
      for (c = u - 8;p < c;) {
        b[p++] = 0;
      }
      b[p++] = d << 3 & 255;
      b[p++] = d >> 5 & 255;
      b[p++] = d >> 13 & 255;
      b[p++] = d >> 21 & 255;
      b[p++] = d >>> 29 & 255;
      b[p++] = 0;
      b[p++] = 0;
      b[p++] = 0;
      c = new Int32Array(16);
      for (p = 0;p < u;) {
        for (d = 0;16 > d;++d, p += 4) {
          c[d] = b[p] | b[p + 1] << 8 | b[p + 2] << 16 | b[p + 3] << 24;
        }
        var m = a;
        q = h;
        var t = n, w = l, g, k;
        for (d = 0;64 > d;++d) {
          16 > d ? (g = q & t | ~q & w, k = d) : 32 > d ? (g = w & q | ~w & t, k = 5 * d + 1 & 15) : 48 > d ? (g = q ^ t ^ w, k = 3 * d + 5 & 15) : (g = t ^ (q | ~w), k = 7 * d & 15);
          var r = w, m = m + g + f[d] + c[k] | 0;
          g = e[d];
          w = t;
          t = q;
          q = q + (m << g | m >>> 32 - g) | 0;
          m = r;
        }
        a = a + m | 0;
        h = h + q | 0;
        n = n + t | 0;
        l = l + w | 0;
      }
      return a;
    };
    d.hashBytesTo32BitsAdler = function(c, f, e) {
      var d = 1, a = 0;
      for (e = f + e;f < e;++f) {
        d = (d + (c[f] & 255)) % 65521, a = (a + d) % 65521;
      }
      return a << 16 | d;
    };
    d.mixHash = function(c, f) {
      return (31 * c | 0) + f | 0;
    };
  })(k.HashUtilities || (k.HashUtilities = {}));
  var n = function() {
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
  k.Random = n;
  Math.random = function() {
    return n.next();
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
  a = function() {
    function d() {
      "undefined" !== typeof ShumwayCom && ShumwayCom.getWeakMapKeys ? this._map = new WeakMap : this._list = [];
    }
    d.prototype.clear = function() {
      this._map ? this._map.clear() : this._list.length = 0;
    };
    d.prototype.push = function(e) {
      this._map ? this._map.set(e, null) : this._list.push(e);
    };
    d.prototype.remove = function(e) {
      this._map ? this._map.delete(e) : this._list[this._list.indexOf(e)] = null;
    };
    d.prototype.forEach = function(e) {
      if (this._map) {
        ShumwayCom.getWeakMapKeys(this._map).forEach(function(c) {
          0 !== c._referenceCount && e(c);
        });
      } else {
        for (var f = this._list, c = 0, q = 0;q < f.length;q++) {
          var d = f[q];
          d && (0 === d._referenceCount ? (f[q] = null, c++) : e(d));
        }
        if (16 < c && c > f.length >> 2) {
          c = [];
          for (q = 0;q < f.length;q++) {
            (d = f[q]) && 0 < d._referenceCount && c.push(d);
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
  k.WeakList = a;
  var p;
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
  })(p = k.NumberUtilities || (k.NumberUtilities = {}));
  (function(d) {
    d[d.MaxU16 = 65535] = "MaxU16";
    d[d.MaxI16 = 32767] = "MaxI16";
    d[d.MinI16 = -32768] = "MinI16";
  })(k.Numbers || (k.Numbers = {}));
  var w;
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
  })(w = k.IntegerUtilities || (k.IntegerUtilities = {}));
  (function(d) {
    function e(f, c, q, e, d, a) {
      return (q - f) * (a - c) - (e - c) * (d - f);
    }
    d.pointInPolygon = function(f, c, q) {
      for (var e = 0, d = q.length - 2, a = 0;a < d;a += 2) {
        var h = q[a + 0], n = q[a + 1], l = q[a + 2], u = q[a + 3];
        (n <= c && u > c || n > c && u <= c) && f < h + (c - n) / (u - n) * (l - h) && e++;
      }
      return 1 === (e & 1);
    };
    d.signedArea = e;
    d.counterClockwise = function(f, c, q, d, a, h) {
      return 0 < e(f, c, q, d, a, h);
    };
    d.clockwise = function(f, c, q, d, a, h) {
      return 0 > e(f, c, q, d, a, h);
    };
    d.pointInPolygonInt32 = function(f, c, q) {
      f |= 0;
      c |= 0;
      for (var e = 0, d = q.length - 2, a = 0;a < d;a += 2) {
        var h = q[a + 0], n = q[a + 1], l = q[a + 2], u = q[a + 3];
        (n <= c && u > c || n > c && u <= c) && f < h + (c - n) / (u - n) * (l - h) && e++;
      }
      return 1 === (e & 1);
    };
  })(k.GeometricUtilities || (k.GeometricUtilities = {}));
  (function(d) {
    d[d.Error = 1] = "Error";
    d[d.Warn = 2] = "Warn";
    d[d.Debug = 4] = "Debug";
    d[d.Log = 8] = "Log";
    d[d.Info = 16] = "Info";
    d[d.All = 31] = "All";
  })(k.LogLevel || (k.LogLevel = {}));
  a = function() {
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
      for (var c = (f || "").split("\n"), q = 0;q < c.length;q++) {
        this.colorLn(e, c[q]);
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
      for (var q = 0, d = e.length;q < d;q++) {
        var a = "";
        f && (a = null === e[q] ? "null" : void 0 === e[q] ? "undefined" : e[q].constructor.name, a += " ");
        var h = c ? "" : ("" + q).padRight(" ", 4);
        this.writeLn(h + a + e[q]);
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
  k.IndentingWriter = a;
  var t = function() {
    return function(d, e) {
      this.value = d;
      this.next = e;
    };
  }(), a = function() {
    function d(e) {
      this._compare = e;
      this._head = null;
      this._length = 0;
    }
    d.prototype.push = function(e) {
      this._length++;
      if (this._head) {
        var f = this._head, c = null;
        e = new t(e, null);
        for (var q = this._compare;f;) {
          if (0 < q(f.value, e.value)) {
            c ? (e.next = f, c.next = e) : (e.next = this._head, this._head = e);
            return;
          }
          c = f;
          f = f.next;
        }
        c.next = e;
      } else {
        this._head = new t(e, null);
      }
    };
    d.prototype.forEach = function(e) {
      for (var f = this._head, c = null;f;) {
        var q = e(f.value);
        if (q === d.RETURN) {
          break;
        } else {
          q === d.DELETE ? f = c ? c.next = f.next : this._head = this._head.next : (c = f, f = f.next);
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
  k.SortedList = a;
  a = function() {
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
  k.CircularBuffer = a;
  (function(d) {
    function e(c) {
      return c + (d.BITS_PER_WORD - 1) >> d.ADDRESS_BITS_PER_WORD << d.ADDRESS_BITS_PER_WORD;
    }
    function f(c, f) {
      c = c || "1";
      f = f || "0";
      for (var q = "", e = 0;e < length;e++) {
        q += this.get(e) ? c : f;
      }
      return q;
    }
    function c(c) {
      for (var f = [], q = 0;q < length;q++) {
        this.get(q) && f.push(c ? c[q] : q);
      }
      return f.join(", ");
    }
    d.ADDRESS_BITS_PER_WORD = 5;
    d.BITS_PER_WORD = 1 << d.ADDRESS_BITS_PER_WORD;
    d.BIT_INDEX_MASK = d.BITS_PER_WORD - 1;
    var q = function() {
      function c(f) {
        this.size = e(f);
        this.dirty = this.count = 0;
        this.length = f;
        this.bits = new Uint32Array(this.size >> d.ADDRESS_BITS_PER_WORD);
      }
      c.prototype.recount = function() {
        if (this.dirty) {
          for (var c = this.bits, f = 0, q = 0, e = c.length;q < e;q++) {
            var d = c[q], d = d - (d >> 1 & 1431655765), d = (d & 858993459) + (d >> 2 & 858993459), f = f + (16843009 * (d + (d >> 4) & 252645135) >> 24)
          }
          this.count = f;
          this.dirty = 0;
        }
      };
      c.prototype.set = function(c) {
        var f = c >> d.ADDRESS_BITS_PER_WORD, q = this.bits[f];
        c = q | 1 << (c & d.BIT_INDEX_MASK);
        this.bits[f] = c;
        this.dirty |= q ^ c;
      };
      c.prototype.setAll = function() {
        for (var c = this.bits, f = 0, q = c.length;f < q;f++) {
          c[f] = 4294967295;
        }
        this.count = this.size;
        this.dirty = 0;
      };
      c.prototype.assign = function(c) {
        this.count = c.count;
        this.dirty = c.dirty;
        this.size = c.size;
        for (var f = 0, q = this.bits.length;f < q;f++) {
          this.bits[f] = c.bits[f];
        }
      };
      c.prototype.clear = function(c) {
        var f = c >> d.ADDRESS_BITS_PER_WORD, q = this.bits[f];
        c = q & ~(1 << (c & d.BIT_INDEX_MASK));
        this.bits[f] = c;
        this.dirty |= q ^ c;
      };
      c.prototype.get = function(c) {
        return 0 !== (this.bits[c >> d.ADDRESS_BITS_PER_WORD] & 1 << (c & d.BIT_INDEX_MASK));
      };
      c.prototype.clearAll = function() {
        for (var c = this.bits, f = 0, q = c.length;f < q;f++) {
          c[f] = 0;
        }
        this.dirty = this.count = 0;
      };
      c.prototype._union = function(c) {
        var f = this.dirty, q = this.bits;
        c = c.bits;
        for (var e = 0, d = q.length;e < d;e++) {
          var a = q[e], h = a | c[e];
          q[e] = h;
          f |= a ^ h;
        }
        this.dirty = f;
      };
      c.prototype.intersect = function(c) {
        var f = this.dirty, q = this.bits;
        c = c.bits;
        for (var e = 0, d = q.length;e < d;e++) {
          var a = q[e], h = a & c[e];
          q[e] = h;
          f |= a ^ h;
        }
        this.dirty = f;
      };
      c.prototype.subtract = function(c) {
        var f = this.dirty, q = this.bits;
        c = c.bits;
        for (var e = 0, d = q.length;e < d;e++) {
          var a = q[e], h = a & ~c[e];
          q[e] = h;
          f |= a ^ h;
        }
        this.dirty = f;
      };
      c.prototype.negate = function() {
        for (var c = this.dirty, f = this.bits, q = 0, e = f.length;q < e;q++) {
          var d = f[q], a = ~d;
          f[q] = a;
          c |= d ^ a;
        }
        this.dirty = c;
      };
      c.prototype.forEach = function(c) {
        for (var f = this.bits, q = 0, e = f.length;q < e;q++) {
          var a = f[q];
          if (a) {
            for (var h = 0;h < d.BITS_PER_WORD;h++) {
              a & 1 << h && c(q * d.BITS_PER_WORD + h);
            }
          }
        }
      };
      c.prototype.toArray = function() {
        for (var c = [], f = this.bits, q = 0, e = f.length;q < e;q++) {
          var a = f[q];
          if (a) {
            for (var h = 0;h < d.BITS_PER_WORD;h++) {
              a & 1 << h && c.push(q * d.BITS_PER_WORD + h);
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
        for (var q = 0, e = f.length;q < e;q++) {
          if (f[q] !== c[q]) {
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
        for (var q = 0, e = f.length;q < e;q++) {
          if ((f[q] | c[q]) !== f[q]) {
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
    d.Uint32ArrayBitSet = q;
    var a = function() {
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
          for (var q = 0;q < d.BITS_PER_WORD;q++) {
            f & 1 << q && c(q);
          }
        }
      };
      c.prototype.toArray = function() {
        var c = [], f = this.bits;
        if (f) {
          for (var q = 0;q < d.BITS_PER_WORD;q++) {
            f & 1 << q && c.push(q);
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
    d.Uint32BitSet = a;
    a.prototype.toString = c;
    a.prototype.toBitString = f;
    q.prototype.toString = c;
    q.prototype.toBitString = f;
    d.BitSetFunctor = function(c) {
      var f = 1 === e(c) >> d.ADDRESS_BITS_PER_WORD ? a : q;
      return function() {
        return new f(c);
      };
    };
  })(k.BitSets || (k.BitSets = {}));
  a = function() {
    function d() {
    }
    d.randomStyle = function() {
      d._randomStyleCache || (d._randomStyleCache = "#ff5e3a #ff9500 #ffdb4c #87fc70 #52edc7 #1ad6fd #c644fc #ef4db6 #4a4a4a #dbddde #ff3b30 #ff9500 #ffcc00 #4cd964 #34aadc #007aff #5856d6 #ff2d55 #8e8e93 #c7c7cc #5ad427 #c86edf #d1eefc #e0f8d8 #fb2b69 #f7f7f7 #1d77ef #d6cec3 #55efcb #ff4981 #ffd3e0 #f7f7f7 #ff1300 #1f1f21 #bdbec2 #ff3a2d".split(" "));
      return d._randomStyleCache[d._nextStyle++ % d._randomStyleCache.length];
    };
    d.gradientColor = function(e) {
      return d._gradient[d._gradient.length * p.clamp(e, 0, 1) | 0];
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
  k.ColorStyle = a;
  a = function() {
    function d(e, f, c, q) {
      this.xMin = e | 0;
      this.yMin = f | 0;
      this.xMax = c | 0;
      this.yMax = q | 0;
    }
    d.FromUntyped = function(e) {
      return new d(e.xMin, e.yMin, e.xMax, e.yMax);
    };
    d.FromRectangle = function(e) {
      return new d(20 * e.x | 0, 20 * e.y | 0, 20 * (e.x + e.width) | 0, 20 * (e.y + e.height) | 0);
    };
    d.prototype.setElements = function(e, f, c, q) {
      this.xMin = e;
      this.yMin = f;
      this.xMax = c;
      this.yMax = q;
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
  k.Bounds = a;
  a = function() {
    function d(e, f, c, q) {
      m.assert(r(e));
      m.assert(r(f));
      m.assert(r(c));
      m.assert(r(q));
      this._xMin = e | 0;
      this._yMin = f | 0;
      this._xMax = c | 0;
      this._yMax = q | 0;
    }
    d.FromUntyped = function(e) {
      return new d(e.xMin, e.yMin, e.xMax, e.yMax);
    };
    d.FromRectangle = function(e) {
      return new d(20 * e.x | 0, 20 * e.y | 0, 20 * (e.x + e.width) | 0, 20 * (e.y + e.height) | 0);
    };
    d.prototype.setElements = function(e, f, c, q) {
      this.xMin = e;
      this.yMin = f;
      this.xMax = c;
      this.yMax = q;
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
      m.assert(r(e));
      this._xMin = e;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "yMin", {get:function() {
      return this._yMin;
    }, set:function(e) {
      m.assert(r(e));
      this._yMin = e | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "xMax", {get:function() {
      return this._xMax;
    }, set:function(e) {
      m.assert(r(e));
      this._xMax = e | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "width", {get:function() {
      return this._xMax - this._xMin;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "yMax", {get:function() {
      return this._yMax;
    }, set:function(e) {
      m.assert(r(e));
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
  k.DebugBounds = a;
  a = function() {
    function d(e, f, c, q) {
      this.r = e;
      this.g = f;
      this.b = c;
      this.a = q;
    }
    d.FromARGB = function(e) {
      return new d((e >> 16 & 255) / 255, (e >> 8 & 255) / 255, (e >> 0 & 255) / 255, (e >> 24 & 255) / 255);
    };
    d.FromRGBA = function(e) {
      return d.FromARGB(l.RGBAToARGB(e));
    };
    d.prototype.toRGBA = function() {
      return 255 * this.r << 24 | 255 * this.g << 16 | 255 * this.b << 8 | 255 * this.a;
    };
    d.prototype.toCSSStyle = function() {
      return l.rgbaToCSSStyle(this.toRGBA());
    };
    d.prototype.set = function(e) {
      this.r = e.r;
      this.g = e.g;
      this.b = e.b;
      this.a = e.a;
    };
    d.randomColor = function() {
      var e = .4;
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
  k.Color = a;
  var l;
  (function(d) {
    function e(c) {
      var f, e, d = c >> 24 & 255;
      e = (Math.imul(c >> 16 & 255, d) + 127) / 255 | 0;
      f = (Math.imul(c >> 8 & 255, d) + 127) / 255 | 0;
      c = (Math.imul(c >> 0 & 255, d) + 127) / 255 | 0;
      return d << 24 | e << 16 | f << 8 | c;
    }
    d.RGBAToARGB = function(c) {
      return c >> 8 & 16777215 | (c & 255) << 24;
    };
    d.ARGBToRGBA = function(c) {
      return c << 8 | c >> 24 & 255;
    };
    d.rgbaToCSSStyle = function(c) {
      return k.StringUtilities.concat9("rgba(", c >> 24 & 255, ",", c >> 16 & 255, ",", c >> 8 & 255, ",", (c & 255) / 255, ")");
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
      var f, e, d = c >> 24 & 255;
      e = Math.imul(255, c >> 16 & 255) / d & 255;
      f = Math.imul(255, c >> 8 & 255) / d & 255;
      c = Math.imul(255, c >> 0 & 255) / d & 255;
      return d << 24 | e << 16 | f << 8 | c;
    };
    d.premultiplyARGB = e;
    var f;
    d.ensureUnpremultiplyTable = function() {
      if (!f) {
        f = new Uint8Array(65536);
        for (var c = 0;256 > c;c++) {
          for (var e = 0;256 > e;e++) {
            f[(e << 8) + c] = Math.imul(255, c) / e;
          }
        }
      }
    };
    d.tableLookupUnpremultiplyARGB = function(c) {
      c |= 0;
      var e = c >> 24 & 255;
      if (0 === e) {
        return 0;
      }
      if (255 === e) {
        return c;
      }
      var d, a, h = e << 8, n = f;
      a = n[h + (c >> 16 & 255)];
      d = n[h + (c >> 8 & 255)];
      c = n[h + (c >> 0 & 255)];
      return e << 24 | a << 16 | d << 8 | c;
    };
    d.blendPremultipliedBGRA = function(c, f) {
      var e, d;
      d = 256 - (f & 255);
      e = Math.imul(c & 16711935, d) >> 8;
      d = Math.imul(c >> 8 & 16711935, d) >> 8;
      return ((f >> 8 & 16711935) + d & 16711935) << 8 | (f & 16711935) + e & 16711935;
    };
    var c = w.swap32;
    d.convertImage = function(q, d, a, h) {
      var n = a.length;
      if (q === d) {
        if (a !== h) {
          for (q = 0;q < n;q++) {
            h[q] = a[q];
          }
        }
      } else {
        if (1 === q && 3 === d) {
          for (k.ColorUtilities.ensureUnpremultiplyTable(), q = 0;q < n;q++) {
            var l = a[q];
            d = l & 255;
            if (0 === d) {
              h[q] = 0;
            } else {
              if (255 === d) {
                h[q] = 4278190080 | l >> 8 & 16777215;
              } else {
                var p = l >> 24 & 255, b = l >> 16 & 255, l = l >> 8 & 255, t = d << 8, w = f, l = w[t + l], b = w[t + b], p = w[t + p];
                h[q] = d << 24 | p << 16 | b << 8 | l;
              }
            }
          }
        } else {
          if (2 === q && 3 === d) {
            for (q = 0;q < n;q++) {
              h[q] = c(a[q]);
            }
          } else {
            if (3 === q && 1 === d) {
              for (q = 0;q < n;q++) {
                d = a[q], h[q] = c(e(d & 4278255360 | d >> 16 & 255 | (d & 255) << 16));
              }
            } else {
              for (m.somewhatImplemented("Image Format Conversion: " + u[q] + " -> " + u[d]), q = 0;q < n;q++) {
                h[q] = a[q];
              }
            }
          }
        }
      }
    };
  })(l = k.ColorUtilities || (k.ColorUtilities = {}));
  a = function() {
    function d(e) {
      void 0 === e && (e = 32);
      this._list = [];
      this._maxSize = e;
    }
    d.prototype.acquire = function(e) {
      if (d._enabled) {
        for (var f = this._list, c = 0;c < f.length;c++) {
          var q = f[c];
          if (q.byteLength >= e) {
            return f.splice(c, 1), q;
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
  k.ArrayBufferPool = a;
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
    d.instance;
  })(k.Telemetry || (k.Telemetry = {}));
  (function(d) {
    d.instance;
  })(k.FileLoadingService || (k.FileLoadingService = {}));
  (function(d) {
    d[d.BuiltinAbc = 0] = "BuiltinAbc";
    d[d.PlayerglobalAbcs = 1] = "PlayerglobalAbcs";
    d[d.PlayerglobalManifest = 2] = "PlayerglobalManifest";
    d[d.ShellAbc = 3] = "ShellAbc";
  })(k.SystemResourceId || (k.SystemResourceId = {}));
  (function(d) {
    d.instance;
  })(k.SystemResourcesLoadingService || (k.SystemResourcesLoadingService = {}));
  k.registerCSSFont = function(d, e, f) {
    if (inBrowser) {
      var c = document.head;
      c.insertBefore(document.createElement("style"), c.firstChild);
      c = document.styleSheets[0];
      e = "@font-face{font-family:swffont" + d + ";src:url(data:font/opentype;base64," + k.StringUtilities.base64ArrayBuffer(e.buffer) + ")}";
      c.insertRule(e, c.cssRules.length);
      f && (f = document.createElement("div"), f.style.fontFamily = "swffont" + d, f.innerHTML = "hello", document.body.appendChild(f), document.body.removeChild(f));
    } else {
      m.warning("Cannot register CSS font outside the browser");
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
  })(k.ExternalInterfaceService || (k.ExternalInterfaceService = {}));
  (function(d) {
    d.instance = {setClipboard:function(e) {
    }};
  })(k.ClipboardService || (k.ClipboardService = {}));
  a = function() {
    function d() {
      this._queues = {};
    }
    d.prototype.register = function(e, f) {
      m.assert(e);
      m.assert(f);
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
      m.assert(e);
      m.assert(f);
      var c = this._queues[e];
      if (c) {
        var q = c.indexOf(f);
        -1 !== q && c.splice(q, 1);
        0 === c.length && (this._queues[e] = null);
      }
    };
    d.prototype.notify = function(e, f) {
      var c = this._queues[e];
      if (c) {
        c = c.slice();
        f = Array.prototype.slice.call(arguments, 0);
        for (var q = 0;q < c.length;q++) {
          c[q].apply(null, f);
        }
      }
    };
    d.prototype.notify1 = function(e, f) {
      var c = this._queues[e];
      if (c) {
        for (var c = c.slice(), q = 0;q < c.length;q++) {
          (0,c[q])(e, f);
        }
      }
    };
    return d;
  }();
  k.Callback = a;
  (function(d) {
    d[d.None = 0] = "None";
    d[d.PremultipliedAlphaARGB = 1] = "PremultipliedAlphaARGB";
    d[d.StraightAlphaARGB = 2] = "StraightAlphaARGB";
    d[d.StraightAlphaRGBA = 3] = "StraightAlphaRGBA";
    d[d.JPEG = 4] = "JPEG";
    d[d.PNG = 5] = "PNG";
    d[d.GIF = 6] = "GIF";
  })(k.ImageType || (k.ImageType = {}));
  var u = k.ImageType;
  k.getMIMETypeForImageType = function(d) {
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
  })(k.UI || (k.UI = {}));
  a = function() {
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
  k.PromiseWrapper = a;
})(Shumway || (Shumway = {}));
(function() {
  function k(c) {
    if ("function" !== typeof c) {
      throw new TypeError("Invalid deferred constructor");
    }
    var f = t();
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
  function r(c, f) {
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
  function g(c) {
    return "object" === typeof c && null !== c && "undefined" !== typeof c.promiseStatus;
  }
  function b(c, f) {
    if ("unresolved" === c.promiseStatus) {
      var e = c.rejectReactions;
      c.result = f;
      c.resolveReactions = void 0;
      c.rejectReactions = void 0;
      c.promiseStatus = "has-rejection";
      v(e, f);
    }
  }
  function v(c, f) {
    for (var e = 0;e < c.length;e++) {
      m({reaction:c[e], argument:f});
    }
  }
  function m(c) {
    0 === f.length && setTimeout(a, 0);
    f.push(c);
  }
  function a() {
    for (;0 < f.length;) {
      var c = f[0];
      try {
        a: {
          var q = c.reaction, e = q.deferred, a = q.handler, h = void 0, n = void 0;
          try {
            h = a(c.argument);
          } catch (l) {
            var u = e.reject;
            u(l);
            break a;
          }
          if (h === e.promise) {
            u = e.reject, u(new TypeError("Self resolution"));
          } else {
            try {
              if (n = r(h, e), !n) {
                var p = e.resolve;
                p(h);
              }
            } catch (b) {
              u = e.reject, u(b);
            }
          }
        }
      } catch (m) {
        if ("function" === typeof d.onerror) {
          d.onerror(m);
        }
      }
      f.shift();
    }
  }
  function h(c) {
    throw c;
  }
  function n(c) {
    return c;
  }
  function p(c) {
    return function(f) {
      b(c, f);
    };
  }
  function w(c) {
    return function(f) {
      if ("unresolved" === c.promiseStatus) {
        var e = c.resolveReactions;
        c.result = f;
        c.resolveReactions = void 0;
        c.rejectReactions = void 0;
        c.promiseStatus = "has-resolution";
        v(e, f);
      }
    };
  }
  function t() {
    function c(f, e) {
      c.resolve = f;
      c.reject = e;
    }
    return c;
  }
  function l(c, f, e) {
    return function(d) {
      if (d === c) {
        return e(new TypeError("Self resolution"));
      }
      var a = c.promiseConstructor;
      if (g(d) && d.promiseConstructor === a) {
        return d.then(f, e);
      }
      a = k(a);
      return r(d, a) ? a.promise.then(f, e) : f(d);
    };
  }
  function u(c, f, e, d) {
    return function(a) {
      f[c] = a;
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
    var f = w(this), e = p(this);
    try {
      c(f, e);
    } catch (a) {
      b(this, a);
    }
    this.promiseConstructor = d;
    return this;
  }
  var e = Function("return this")();
  if (e.Promise) {
    "function" !== typeof e.Promise.all && (e.Promise.all = function(c) {
      var f = 0, d = [], a, h, n = new e.Promise(function(c, f) {
        a = c;
        h = f;
      });
      c.forEach(function(c, e) {
        f++;
        c.then(function(c) {
          d[e] = c;
          f--;
          0 === f && a(d);
        }, h);
      });
      0 === f && a(d);
      return n;
    }), "function" !== typeof e.Promise.resolve && (e.Promise.resolve = function(c) {
      return new e.Promise(function(f) {
        f(c);
      });
    });
  } else {
    var f = [];
    d.all = function(c) {
      var f = k(this), e = [], d = {countdown:0}, a = 0;
      c.forEach(function(c) {
        this.cast(c).then(u(a, e, f, d), f.reject);
        a++;
        d.countdown++;
      }, this);
      0 === a && f.resolve(e);
      return f.promise;
    };
    d.cast = function(c) {
      if (g(c)) {
        return c;
      }
      var f = k(this);
      f.resolve(c);
      return f.promise;
    };
    d.reject = function(c) {
      var f = k(this);
      f.reject(c);
      return f.promise;
    };
    d.resolve = function(c) {
      var f = k(this);
      f.resolve(c);
      return f.promise;
    };
    d.prototype = {"catch":function(c) {
      this.then(void 0, c);
    }, then:function(c, f) {
      if (!g(this)) {
        throw new TypeError("this is not a Promises");
      }
      var e = k(this.promiseConstructor), d = "function" === typeof f ? f : h, a = {deferred:e, handler:l(this, "function" === typeof c ? c : n, d)}, d = {deferred:e, handler:d};
      switch(this.promiseStatus) {
        case "unresolved":
          this.resolveReactions.push(a);
          this.rejectReactions.push(d);
          break;
        case "has-resolution":
          m({reaction:a, argument:this.result});
          break;
        case "has-rejection":
          m({reaction:d, argument:this.result});
      }
      return e.promise;
    }};
    e.Promise = d;
  }
})();
"undefined" !== typeof exports && (exports.Shumway = Shumway);
(function() {
  function k(k, g, b) {
    k[g] || Object.defineProperty(k, g, {value:b, writable:!0, configurable:!0, enumerable:!1});
  }
  k(String.prototype, "padRight", function(k, g) {
    var b = this, v = b.replace(/\033\[[0-9]*m/g, "").length;
    if (!k || v >= g) {
      return b;
    }
    for (var v = (g - v) / k.length, m = 0;m < v;m++) {
      b += k;
    }
    return b;
  });
  k(String.prototype, "padLeft", function(k, g) {
    var b = this, v = b.length;
    if (!k || v >= g) {
      return b;
    }
    for (var v = (g - v) / k.length, m = 0;m < v;m++) {
      b = k + b;
    }
    return b;
  });
  k(String.prototype, "trim", function() {
    return this.replace(/^\s+|\s+$/g, "");
  });
  k(String.prototype, "endsWith", function(k) {
    return -1 !== this.indexOf(k, this.length - k.length);
  });
  k(Array.prototype, "replace", function(k, g) {
    if (k === g) {
      return 0;
    }
    for (var b = 0, v = 0;v < this.length;v++) {
      this[v] === k && (this[v] = g, b++);
    }
    return b;
  });
})();
(function(k) {
  (function(r) {
    var g = k.isObject, b = function() {
      function a(a, n, p, b) {
        this.shortName = a;
        this.longName = n;
        this.type = p;
        b = b || {};
        this.positional = b.positional;
        this.parseFn = b.parse;
        this.value = b.defaultValue;
      }
      a.prototype.parse = function(a) {
        this.value = "boolean" === this.type ? a : "number" === this.type ? parseInt(a, 10) : a;
        this.parseFn && this.parseFn(this.value);
      };
      return a;
    }();
    r.Argument = b;
    var v = function() {
      function a() {
        this.args = [];
      }
      a.prototype.addArgument = function(a, n, p, m) {
        a = new b(a, n, p, m);
        this.args.push(a);
        return a;
      };
      a.prototype.addBoundOption = function(a) {
        this.args.push(new b(a.shortName, a.longName, a.type, {parse:function(n) {
          a.value = n;
        }}));
      };
      a.prototype.addBoundOptionSet = function(a) {
        var n = this;
        a.options.forEach(function(a) {
          a instanceof m ? n.addBoundOptionSet(a) : n.addBoundOption(a);
        });
      };
      a.prototype.getUsage = function() {
        var a = "";
        this.args.forEach(function(n) {
          a = n.positional ? a + n.longName : a + ("[-" + n.shortName + "|--" + n.longName + ("boolean" === n.type ? "" : " " + n.type[0].toUpperCase()) + "]");
          a += " ";
        });
        return a;
      };
      a.prototype.parse = function(a) {
        var n = {}, b = [];
        this.args.forEach(function(d) {
          d.positional ? b.push(d) : (n["-" + d.shortName] = d, n["--" + d.longName] = d);
        });
        for (var m = [];a.length;) {
          var t = a.shift(), l = null, u = t;
          if ("--" == t) {
            m = m.concat(a);
            break;
          } else {
            if ("-" == t.slice(0, 1) || "--" == t.slice(0, 2)) {
              l = n[t];
              if (!l) {
                continue;
              }
              u = "boolean" !== l.type ? a.shift() : !0;
            } else {
              b.length ? l = b.shift() : m.push(u);
            }
          }
          l && l.parse(u);
        }
        return m;
      };
      return a;
    }();
    r.ArgumentParser = v;
    var m = function() {
      function a(a, n) {
        void 0 === n && (n = null);
        this.open = !1;
        this.name = a;
        this.settings = n || {};
        this.options = [];
      }
      a.prototype.register = function(h) {
        if (h instanceof a) {
          for (var n = 0;n < this.options.length;n++) {
            var b = this.options[n];
            if (b instanceof a && b.name === h.name) {
              return b;
            }
          }
        }
        this.options.push(h);
        if (this.settings) {
          if (h instanceof a) {
            n = this.settings[h.name], g(n) && (h.settings = n.settings, h.open = n.open);
          } else {
            if ("undefined" !== typeof this.settings[h.longName]) {
              switch(h.type) {
                case "boolean":
                  h.value = !!this.settings[h.longName];
                  break;
                case "number":
                  h.value = +this.settings[h.longName];
                  break;
                default:
                  h.value = this.settings[h.longName];
              }
            }
          }
        }
        return h;
      };
      a.prototype.trace = function(a) {
        a.enter(this.name + " {");
        this.options.forEach(function(n) {
          n.trace(a);
        });
        a.leave("}");
      };
      a.prototype.getSettings = function() {
        var h = {};
        this.options.forEach(function(n) {
          n instanceof a ? h[n.name] = {settings:n.getSettings(), open:n.open} : h[n.longName] = n.value;
        });
        return h;
      };
      a.prototype.setSettings = function(h) {
        h && this.options.forEach(function(n) {
          n instanceof a ? n.name in h && n.setSettings(h[n.name].settings) : n.longName in h && (n.value = h[n.longName]);
        });
      };
      return a;
    }();
    r.OptionSet = m;
    v = function() {
      function a(a, n, b, m, t, l) {
        void 0 === l && (l = null);
        this.longName = n;
        this.shortName = a;
        this.type = b;
        this.value = this.defaultValue = m;
        this.description = t;
        this.config = l;
      }
      a.prototype.parse = function(a) {
        this.value = a;
      };
      a.prototype.trace = function(a) {
        a.writeLn(("-" + this.shortName + "|--" + this.longName).padRight(" ", 30) + " = " + this.type + " " + this.value + " [" + this.defaultValue + "] (" + this.description + ")");
      };
      return a;
    }();
    r.Option = v;
  })(k.Options || (k.Options = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(g) {
    g.ROOT = "Shumway Options";
    g.shumwayOptions = new k.Options.OptionSet(g.ROOT);
    g.setSettings = function(b) {
      g.shumwayOptions.setSettings(b);
    };
    g.getSettings = function() {
      return g.shumwayOptions.getSettings();
    };
  })(k.Settings || (k.Settings = {}));
  var r = k.Options.Option;
  k.loggingOptions = k.Settings.shumwayOptions.register(new k.Options.OptionSet("Logging Options"));
  k.omitRepeatedWarnings = k.loggingOptions.register(new r("wo", "warnOnce", "boolean", !0, "Omit Repeated Warnings"));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    var g = function() {
      function b(b, m) {
        this._parent = b;
        this._timers = k.ObjectUtilities.createMap();
        this._name = m;
        this._count = this._total = this._last = this._begin = 0;
      }
      b.time = function(g, m) {
        b.start(g);
        m();
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
        this._begin = k.getTicks();
      };
      b.prototype.stop = function() {
        this._last = k.getTicks() - this._begin;
        this._total += this._last;
        this._count += 1;
      };
      b.prototype.toJSON = function() {
        return {name:this._name, total:this._total, timers:this._timers};
      };
      b.prototype.trace = function(b) {
        b.enter(this._name + ": " + this._total.toFixed(2) + " ms, count: " + this._count + ", average: " + (this._total / this._count).toFixed(2) + " ms");
        for (var m in this._timers) {
          this._timers[m].trace(b);
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
    r.Timer = g;
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
        this._counts = k.ObjectUtilities.createMap();
        this._times = k.ObjectUtilities.createMap();
      };
      b.prototype.toJSON = function() {
        return {counts:this._counts, times:this._times};
      };
      b.prototype.count = function(b, m, a) {
        void 0 === m && (m = 1);
        void 0 === a && (a = 0);
        if (this._enabled) {
          return void 0 === this._counts[b] && (this._counts[b] = 0, this._times[b] = 0), this._counts[b] += m, this._times[b] += a, this._counts[b];
        }
      };
      b.prototype.trace = function(b) {
        for (var m in this._counts) {
          b.writeLn(m + ": " + this._counts[m]);
        }
      };
      b.prototype._pairToString = function(b, m) {
        var a = m[0], h = m[1], n = b[a], a = a + ": " + h;
        n && (a += ", " + n.toFixed(4), 1 < h && (a += " (" + (n / h).toFixed(4) + ")"));
        return a;
      };
      b.prototype.toStringSorted = function() {
        var b = this, m = this._times, a = [], h;
        for (h in this._counts) {
          a.push([h, this._counts[h]]);
        }
        a.sort(function(a, h) {
          return h[1] - a[1];
        });
        return a.map(function(a) {
          return b._pairToString(m, a);
        }).join(", ");
      };
      b.prototype.traceSorted = function(b, m) {
        void 0 === m && (m = !1);
        var a = this, h = this._times, n = [], p;
        for (p in this._counts) {
          n.push([p, this._counts[p]]);
        }
        n.sort(function(a, h) {
          return h[1] - a[1];
        });
        m ? b.writeLn(n.map(function(n) {
          return a._pairToString(h, n);
        }).join(", ")) : n.forEach(function(n) {
          b.writeLn(a._pairToString(h, n));
        });
      };
      b.instance = new b(!0);
      return b;
    }();
    r.Counter = g;
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
        for (var b = 0, m = 0;m < this._count;m++) {
          b += this._samples[m];
        }
        return b / this._count;
      };
      return b;
    }();
    r.Average = g;
  })(k.Metrics || (k.Metrics = {}));
})(Shumway || (Shumway = {}));
var __extends = this.__extends || function(k, r) {
  function g() {
    this.constructor = k;
  }
  for (var b in r) {
    r.hasOwnProperty(b) && (k[b] = r[b]);
  }
  g.prototype = r.prototype;
  k.prototype = new g;
};
(function(k) {
  (function(k) {
    function g(f) {
      for (var c = Math.max.apply(null, f), q = f.length, e = 1 << c, a = new Uint32Array(e), d = c << 16 | 65535, h = 0;h < e;h++) {
        a[h] = d;
      }
      for (var d = 0, h = 1, n = 2;h <= c;d <<= 1, ++h, n <<= 1) {
        for (var l = 0;l < q;++l) {
          if (f[l] === h) {
            for (var b = 0, u = 0;u < h;++u) {
              b = 2 * b + (d >> u & 1);
            }
            for (u = b;u < e;u += n) {
              a[u] = h << 16 | l;
            }
            ++d;
          }
        }
      }
      return {codes:a, maxBits:c};
    }
    var b;
    (function(f) {
      f[f.INIT = 0] = "INIT";
      f[f.BLOCK_0 = 1] = "BLOCK_0";
      f[f.BLOCK_1 = 2] = "BLOCK_1";
      f[f.BLOCK_2_PRE = 3] = "BLOCK_2_PRE";
      f[f.BLOCK_2 = 4] = "BLOCK_2";
      f[f.DONE = 5] = "DONE";
      f[f.ERROR = 6] = "ERROR";
      f[f.VERIFY_HEADER = 7] = "VERIFY_HEADER";
    })(b || (b = {}));
    b = function() {
      function f(c) {
      }
      f.prototype.push = function(c) {
      };
      f.prototype.close = function() {
      };
      f.create = function(c) {
        return "undefined" !== typeof ShumwayCom && ShumwayCom.createSpecialInflate ? new u(c, ShumwayCom.createSpecialInflate) : new v(c);
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
      f.inflate = function(c, e, a) {
        var d = new Uint8Array(e), h = 0;
        e = f.create(a);
        e.onData = function(c) {
          var f = Math.min(c.length, d.length - h);
          f && k.memCopy(d, c, h, 0, f);
          h += f;
        };
        e.onError = function(c) {
          throw Error(c);
        };
        e.push(c);
        e.close();
        return d;
      };
      return f;
    }();
    k.Inflate = b;
    var v = function(f) {
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
        if (!l) {
          m = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
          a = new Uint16Array(30);
          h = new Uint8Array(30);
          for (var e = c = 0, d = 1;30 > c;++c) {
            a[c] = d, d += 1 << (h[c] = ~~((e += 2 < c ? 1 : 0) / 2));
          }
          var b = new Uint8Array(288);
          for (c = 0;32 > c;++c) {
            b[c] = 5;
          }
          n = g(b.subarray(0, 32));
          p = new Uint16Array(29);
          w = new Uint8Array(29);
          e = c = 0;
          for (d = 3;29 > c;++c) {
            p[c] = d - (28 == c ? 1 : 0), d += 1 << (w[c] = ~~((e += 4 < c ? 1 : 0) / 4 % 6));
          }
          for (c = 0;288 > c;++c) {
            b[c] = 144 > c || 279 < c ? 8 : 256 > c ? 9 : 7;
          }
          t = g(b);
          l = !0;
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
        var c = this._buffer, f = this._bufferSize, e = this._bitBuffer, d = this._bitLength, a = this._bufferPosition;
        if (3 > (f - a << 3) + d) {
          return !0;
        }
        3 > d && (e |= c[a++] << d, d += 8);
        var h = e & 7, e = e >> 3, d = d - 3;
        switch(h >> 1) {
          case 0:
            d = e = 0;
            if (4 > f - a) {
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
            this._literalTable = t;
            this._distanceTable = n;
            break;
          case 2:
            if (26 > (f - a << 3) + d) {
              return !0;
            }
            for (;14 > d;) {
              e |= c[a++] << d, d += 8;
            }
            l = (e >> 10 & 15) + 4;
            if ((f - a << 3) + d < 14 + 3 * l) {
              return !0;
            }
            for (var f = {numLiteralCodes:(e & 31) + 257, numDistanceCodes:(e >> 5 & 31) + 1, codeLengthTable:void 0, bitLengths:void 0, codesRead:0, dupBits:0}, e = e >> 14, d = d - 14, b = new Uint8Array(19), u = 0;u < l;++u) {
              3 > d && (e |= c[a++] << d, d += 8), b[m[u]] = e & 7, e >>= 3, d -= 3;
            }
            for (;19 > u;u++) {
              b[m[u]] = 0;
            }
            f.bitLengths = new Uint8Array(f.numLiteralCodes + f.numDistanceCodes);
            f.codeLengthTable = g(b);
            this._block2State = f;
            c = 3;
            break;
          default:
            return this._error("inflate: unsupported block type"), !1;
        }
        this._isFinalBlock = !!(h & 1);
        this._state = c;
        this._bufferPosition = a;
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
        var c = this._bufferPosition, f = this._windowPosition, e = this._block0Read, d = 65794 - f, a = this._bufferSize - c, h = a < e, n = Math.min(d, a, e);
        this._window.set(this._buffer.subarray(c, c + n), f);
        this._windowPosition = f + n;
        this._bufferPosition = c + n;
        this._block0Read = e - n;
        return e === n ? (this._state = 0, !1) : h && d < a;
      };
      c.prototype._readBits = function(c) {
        var f = this._bitBuffer, e = this._bitLength;
        if (c > e) {
          var d = this._bufferPosition, a = this._bufferSize;
          do {
            if (d >= a) {
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
          var a = this._bufferPosition, h = this._bufferSize;
          do {
            if (a >= h) {
              return this._bufferPosition = a, this._bitBuffer = f, this._bitLength = e, -1;
            }
            f |= this._buffer[a++] << e;
            e += 8;
          } while (d > e);
          this._bufferPosition = a;
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
        var c = this._block2State, f = c.numLiteralCodes + c.numDistanceCodes, e = c.bitLengths, d = c.codesRead, a = 0 < d ? e[d - 1] : 0, h = c.codeLengthTable, n;
        if (0 < c.dupBits) {
          n = this._readBits(c.dupBits);
          if (0 > n) {
            return !0;
          }
          for (;n--;) {
            e[d++] = a;
          }
          c.dupBits = 0;
        }
        for (;d < f;) {
          var l = this._readCode(h);
          if (0 > l) {
            return c.codesRead = d, !0;
          }
          if (16 > l) {
            e[d++] = a = l;
          } else {
            var b;
            switch(l) {
              case 16:
                b = 2;
                n = 3;
                l = a;
                break;
              case 17:
                n = b = 3;
                l = 0;
                break;
              case 18:
                b = 7, n = 11, l = 0;
            }
            for (;n--;) {
              e[d++] = l;
            }
            n = this._readBits(b);
            if (0 > n) {
              return c.codesRead = d, c.dupBits = b, !0;
            }
            for (;n--;) {
              e[d++] = l;
            }
            a = l;
          }
        }
        this._literalTable = g(e.subarray(0, c.numLiteralCodes));
        this._distanceTable = g(e.subarray(c.numLiteralCodes));
        this._state = 4;
        this._block2State = null;
        return !1;
      };
      c.prototype._decodeBlock = function() {
        var c = this._literalTable, f = this._distanceTable, e = this._window, d = this._windowPosition, n = this._copyState, l, b, u, m;
        if (0 !== n.state) {
          switch(n.state) {
            case 1:
              if (0 > (l = this._readBits(n.lenBits))) {
                return !0;
              }
              n.len += l;
              n.state = 2;
            case 2:
              if (0 > (l = this._readCode(f))) {
                return !0;
              }
              n.distBits = h[l];
              n.dist = a[l];
              n.state = 3;
            case 3:
              l = 0;
              if (0 < n.distBits && 0 > (l = this._readBits(n.distBits))) {
                return !0;
              }
              m = n.dist + l;
              b = n.len;
              for (l = d - m;b--;) {
                e[d++] = e[l++];
              }
              n.state = 0;
              if (65536 <= d) {
                return this._windowPosition = d, !1;
              }
              break;
          }
        }
        do {
          l = this._readCode(c);
          if (0 > l) {
            return this._windowPosition = d, !0;
          }
          if (256 > l) {
            e[d++] = l;
          } else {
            if (256 < l) {
              this._windowPosition = d;
              l -= 257;
              u = w[l];
              b = p[l];
              l = 0 === u ? 0 : this._readBits(u);
              if (0 > l) {
                return n.state = 1, n.len = b, n.lenBits = u, !0;
              }
              b += l;
              l = this._readCode(f);
              if (0 > l) {
                return n.state = 2, n.len = b, !0;
              }
              u = h[l];
              m = a[l];
              l = 0 === u ? 0 : this._readBits(u);
              if (0 > l) {
                return n.state = 3, n.len = b, n.dist = m, n.distBits = u, !0;
              }
              m += l;
              for (l = d - m;b--;) {
                e[d++] = e[l++];
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
    }(b), m, a, h, n, p, w, t, l = !1, u = function(f) {
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
    }(b), d;
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
        for (var d = this.a, a = this.b;f < e;++f) {
          d = (d + (c[f] & 255)) % 65521, a = (a + d) % 65521;
        }
        this.a = d;
        this.b = a;
      };
      f.prototype.getChecksum = function() {
        return this.b << 16 | this.a;
      };
      return f;
    }();
    k.Adler32 = e;
    d = function() {
      function f(c) {
        this._state = (this._writeZlibHeader = c) ? 2 : 0;
        this._adler32 = c ? new e : null;
      }
      f.prototype.push = function(c) {
        2 === this._state && (this.onData(new Uint8Array([120, 156])), this._state = 0);
        for (var f = c.length, e = new Uint8Array(f + 5 * Math.ceil(f / 65535)), d = 0, a = 0;65535 < f;) {
          e.set(new Uint8Array([0, 255, 255, 0, 0]), d), d += 5, e.set(c.subarray(a, a + 65535), d), a += 65535, d += 65535, f -= 65535;
        }
        e.set(new Uint8Array([0, f & 255, f >> 8 & 255, ~f & 255, ~f >> 8 & 255]), d);
        e.set(c.subarray(a, f), d + 5);
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
    k.Deflate = d;
  })(k.ArrayUtilities || (k.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    function g(c) {
      for (var f = new Uint16Array(c), e = 0;e < c;e++) {
        f[e] = 1024;
      }
      return f;
    }
    function b(c, f, e, d) {
      for (var a = 1, h = 0, n = 0;n < e;n++) {
        var l = d.decodeBit(c, a + f), a = (a << 1) + l, h = h | l << n
      }
      return h;
    }
    function v(c, f) {
      var e = [];
      e.length = f;
      for (var d = 0;d < f;d++) {
        e[d] = new p(c);
      }
      return e;
    }
    var m = function() {
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
      c.prototype.copyMatch = function(c, f) {
        for (var e = this.pos, d = this.size, a = this.buf, h = c <= e ? e - c : d - c + e, n = f;0 < n;) {
          for (var l = Math.min(Math.min(n, d - e), d - h), b = 0;b < l;b++) {
            var u = a[h++];
            a[e++] = u;
          }
          e === d && (this.pos = e, this.flush(), e = 0, this.isFull = !0);
          h === d && (h = 0);
          n -= l;
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
    }(), n = function() {
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
          var e = e >>> 1 | 0, d = d - e | 0, a = d >> 31, d = d + (e & a) | 0;
          d === e && (this.corrupted = !0);
          0 <= e && 16777216 > e && (e <<= 8, d = d << 8 | this.inStream.readByte());
          f = (f << 1) + a + 1 | 0;
        } while (--c);
        this.range = e;
        this.code = d;
        return f;
      };
      c.prototype.decodeBit = function(c, f) {
        var e = this.range, d = this.code, a = c[f], h = (e >>> 11) * a;
        d >>> 0 < h ? (a = a + (2048 - a >> 5) | 0, e = h | 0, h = 0) : (a = a - (a >> 5) | 0, d = d - h | 0, e = e - h | 0, h = 1);
        c[f] = a & 65535;
        0 <= e && 16777216 > e && (e <<= 8, d = d << 8 | this.inStream.readByte());
        this.range = e;
        this.code = d;
        return h;
      };
      return c;
    }(), p = function() {
      function c(c) {
        this.numBits = c;
        this.probs = g(1 << c);
      }
      c.prototype.decode = function(c) {
        for (var f = 1, e = 0;e < this.numBits;e++) {
          f = (f << 1) + c.decodeBit(this.probs, f);
        }
        return f - (1 << this.numBits);
      };
      c.prototype.reverseDecode = function(c) {
        return b(this.probs, 0, this.numBits, c);
      };
      return c;
    }(), w = function() {
      function c() {
        this.choice = g(2);
        this.lowCoder = v(3, 16);
        this.midCoder = v(3, 16);
        this.highCoder = new p(8);
      }
      c.prototype.decode = function(c, f) {
        return 0 === c.decodeBit(this.choice, 0) ? this.lowCoder[f].decode(c) : 0 === c.decodeBit(this.choice, 1) ? 8 + this.midCoder[f].decode(c) : 16 + this.highCoder.decode(c);
      };
      return c;
    }(), t = function() {
      function c(c, f) {
        this.rangeDec = new n(c);
        this.outWindow = new h(f);
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
        var e = this.outWindow, d = this.rangeDec, a = 0;
        e.isEmpty() || (a = e.getByte(1));
        var h = 1, a = 768 * (((e.totalPos & (1 << this.lp) - 1) << this.lc) + (a >> 8 - this.lc));
        if (7 <= c) {
          e = e.getByte(f + 1);
          do {
            var n = e >> 7 & 1, e = e << 1, l = d.decodeBit(this.litProbs, a + ((1 + n << 8) + h)), h = h << 1 | l;
            if (n !== l) {
              break;
            }
          } while (256 > h);
        }
        for (;256 > h;) {
          h = h << 1 | d.decodeBit(this.litProbs, a + h);
        }
        return h - 256 & 255;
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
        14 > f ? d = d + b(this.posDecoders, d - f, e, c) | 0 : (d = d + (c.decodeDirectBits(e - 4) << 4) | 0, d = d + this.alignDecoder.reverseDecode(c) | 0);
        return d;
      };
      c.prototype.init = function() {
        this.litProbs = g(768 << this.lc + this.lp);
        this.posSlotDecoder = v(6, 4);
        this.alignDecoder = new p(4);
        this.posDecoders = g(115);
        this.isMatch = g(192);
        this.isRep = g(12);
        this.isRepG0 = g(12);
        this.isRepG1 = g(12);
        this.isRepG2 = g(12);
        this.isRep0Long = g(192);
        this.lenDecoder = new w;
        this.repLenDecoder = new w;
      };
      c.prototype.decode = function(c) {
        for (var f = this.rangeDec, a = this.outWindow, h = this.pb, n = this.dictSize, b = this.markerIsMandatory, p = this.leftToUnpack, m = this.isMatch, t = this.isRep, w = this.isRepG0, g = this.isRepG1, k = this.isRepG2, r = this.isRep0Long, v = this.lenDecoder, y = this.repLenDecoder, z = this.reps[0], C = this.reps[1], x = this.reps[2], F = this.reps[3], B = this.state;;) {
          if (c && 48 > f.inStream.available) {
            this.outWindow.flush();
            break;
          }
          if (0 === p && !b && (this.outWindow.flush(), f.isFinishedOK())) {
            return d;
          }
          var E = a.totalPos & (1 << h) - 1;
          if (0 === f.decodeBit(m, (B << 4) + E)) {
            if (0 === p) {
              return l;
            }
            a.putByte(this.decodeLiteral(B, z));
            B = 4 > B ? 0 : 10 > B ? B - 3 : B - 6;
            p--;
          } else {
            if (0 !== f.decodeBit(t, B)) {
              if (0 === p || a.isEmpty()) {
                return l;
              }
              if (0 === f.decodeBit(w, B)) {
                if (0 === f.decodeBit(r, (B << 4) + E)) {
                  B = 7 > B ? 9 : 11;
                  a.putByte(a.getByte(z + 1));
                  p--;
                  continue;
                }
              } else {
                var I;
                0 === f.decodeBit(g, B) ? I = C : (0 === f.decodeBit(k, B) ? I = x : (I = F, F = x), x = C);
                C = z;
                z = I;
              }
              E = y.decode(f, E);
              B = 7 > B ? 8 : 11;
            } else {
              F = x;
              x = C;
              C = z;
              E = v.decode(f, E);
              B = 7 > B ? 7 : 10;
              z = this.decodeDistance(E);
              if (-1 === z) {
                return this.outWindow.flush(), f.isFinishedOK() ? u : l;
              }
              if (0 === p || z >= n || !a.checkDistance(z)) {
                return l;
              }
            }
            E += 2;
            I = !1;
            void 0 !== p && p < E && (E = p, I = !0);
            a.copyMatch(z + 1, E);
            p -= E;
            if (I) {
              return l;
            }
          }
        }
        this.state = B;
        this.reps[0] = z;
        this.reps[1] = C;
        this.reps[2] = x;
        this.reps[3] = F;
        this.leftToUnpack = p;
        return e;
      };
      c.prototype.flushOutput = function() {
        this.outWindow.flush();
      };
      return c;
    }(), l = 0, u = 1, d = 2, e = 3, f;
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
          var h = new Uint8Array(d);
          0 < f && h.set(this.buffer);
          h.set(c.subarray(0, d - f), f);
          this._inStream = new m;
          this._inStream.append(h.subarray(d - 5));
          this._outStream = new a(function(c) {
            this.onData.call(null, c);
          }.bind(this));
          this._decoder = new t(this._inStream, this._outStream);
          if (1 === this._state) {
            this._decoder.decodeProperties(h.subarray(12, 17)), this._decoder.markerIsMandatory = !1, this._decoder.unpackSize = ((h[4] | h[5] << 8 | h[6] << 16 | h[7] << 24) >>> 0) - 8;
          } else {
            this._decoder.decodeProperties(h.subarray(0, 5));
            for (var f = 0, n = !1, l = 0;8 > l;l++) {
              var b = h[5 + l];
              255 !== b && (n = !0);
              f |= b << 8 * l;
            }
            this._decoder.markerIsMandatory = !n;
            this._decoder.unpackSize = n ? f : void 0;
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
          var u = this._decoder.decode(!0);
          this._inStream.compact();
          u !== e && this._checkError(u);
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
        c === l ? f = "LZMA decoding error" : c === e ? f = "Decoding is not complete" : c === u ? void 0 !== this._decoder.unpackSize && this._decoder.unpackSize !== this._outStream.processed && (f = "Finished with end marker before than specified size") : f = "Internal LZMA Error";
        f && this._error(f);
      };
      return c;
    }();
    k.LzmaDecoder = f;
  })(k.ArrayUtilities || (k.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    function g(a) {
      return "string" === typeof a ? a : void 0 == a ? null : a + "";
    }
    var b = k.Debug.notImplemented, v = k.StringUtilities.utf8decode, m = k.StringUtilities.utf8encode, a = k.NumberUtilities.clamp, h = function() {
      return function(a, h, d) {
        this.buffer = a;
        this.length = h;
        this.littleEndian = d;
      };
    }();
    r.PlainObjectDataBuffer = h;
    for (var n = new Uint32Array(33), p = 1, w = 0;32 >= p;p++) {
      n[p] = w = w << 1 | 1;
    }
    var t;
    (function(a) {
      a[a.U8 = 1] = "U8";
      a[a.I32 = 2] = "I32";
      a[a.F32 = 4] = "F32";
    })(t || (t = {}));
    p = function() {
      function l(a) {
        void 0 === a && (a = l.INITIAL_SIZE);
        this._buffer || (this._buffer = new ArrayBuffer(a), this._position = this._length = 0, this._resetViews(), this._littleEndian = l._nativeLittleEndian, this._bitLength = this._bitBuffer = 0);
      }
      l.FromArrayBuffer = function(a, d) {
        void 0 === d && (d = -1);
        var e = Object.create(l.prototype);
        e._buffer = a;
        e._length = -1 === d ? a.byteLength : d;
        e._position = 0;
        e._resetViews();
        e._littleEndian = l._nativeLittleEndian;
        e._bitBuffer = 0;
        e._bitLength = 0;
        return e;
      };
      l.FromPlainObject = function(a) {
        var d = l.FromArrayBuffer(a.buffer, a.length);
        d._littleEndian = a.littleEndian;
        return d;
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
        var d = this._buffer;
        if (d.byteLength < a) {
          for (var e = Math.max(d.byteLength, 1);e < a;) {
            e *= 2;
          }
          e = l._arrayBufferPool.acquire(e);
          a = this._u8;
          this._buffer = e;
          this._resetViews();
          this._u8.set(a);
          e = this._u8;
          for (a = a.length;a < e.length;a++) {
            e[a] = 0;
          }
          l._arrayBufferPool.release(d);
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
      l.prototype.readBytes = function(a, d) {
        var e = 0;
        void 0 === e && (e = 0);
        void 0 === d && (d = 0);
        var f = this._position;
        e || (e = 0);
        d || (d = this._length - f);
        f + d > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        a.length < e + d && (a._ensureCapacity(e + d), a.length = e + d);
        a._u8.set(new Uint8Array(this._buffer, f, d), e);
        this._position += d;
      };
      l.prototype.readShort = function() {
        return this.readUnsignedShort() << 16 >> 16;
      };
      l.prototype.readUnsignedShort = function() {
        var a = this._u8, d = this._position;
        d + 2 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var e = a[d + 0], a = a[d + 1];
        this._position = d + 2;
        return this._littleEndian ? a << 8 | e : e << 8 | a;
      };
      l.prototype.readInt = function() {
        var a = this._u8, d = this._position;
        d + 4 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var e = a[d + 0], f = a[d + 1], c = a[d + 2], a = a[d + 3];
        this._position = d + 4;
        return this._littleEndian ? a << 24 | c << 16 | f << 8 | e : e << 24 | f << 16 | c << 8 | a;
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
        var d = this._u8, e = k.IntegerUtilities.u8;
        this._littleEndian ? (e[0] = d[a + 0], e[1] = d[a + 1], e[2] = d[a + 2], e[3] = d[a + 3]) : (e[3] = d[a + 0], e[2] = d[a + 1], e[1] = d[a + 2], e[0] = d[a + 3]);
        return k.IntegerUtilities.f32[0];
      };
      l.prototype.readDouble = function() {
        var a = this._u8, d = this._position;
        d + 8 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var e = k.IntegerUtilities.u8;
        this._littleEndian ? (e[0] = a[d + 0], e[1] = a[d + 1], e[2] = a[d + 2], e[3] = a[d + 3], e[4] = a[d + 4], e[5] = a[d + 5], e[6] = a[d + 6], e[7] = a[d + 7]) : (e[0] = a[d + 7], e[1] = a[d + 6], e[2] = a[d + 5], e[3] = a[d + 4], e[4] = a[d + 3], e[5] = a[d + 2], e[6] = a[d + 1], e[7] = a[d + 0]);
        this._position = d + 8;
        return k.IntegerUtilities.f64[0];
      };
      l.prototype.writeBoolean = function(a) {
        this.writeByte(a ? 1 : 0);
      };
      l.prototype.writeByte = function(a) {
        var d = this._position + 1;
        this._ensureCapacity(d);
        this._u8[this._position++] = a;
        d > this._length && (this._length = d);
      };
      l.prototype.writeUnsignedByte = function(a) {
        var d = this._position + 1;
        this._ensureCapacity(d);
        this._u8[this._position++] = a;
        d > this._length && (this._length = d);
      };
      l.prototype.writeRawBytes = function(a) {
        var d = this._position + a.length;
        this._ensureCapacity(d);
        this._u8.set(a, this._position);
        this._position = d;
        d > this._length && (this._length = d);
      };
      l.prototype.writeBytes = function(h, d, e) {
        k.isNullOrUndefined(h) && this.sec.throwError("TypeError", Errors.NullPointerError, "bytes");
        d >>>= 0;
        e >>>= 0;
        2 > arguments.length && (d = 0);
        3 > arguments.length && (e = 0);
        d === a(d, 0, h.length) && d + e === a(d + e, 0, h.length) || this.sec.throwError("RangeError", Errors.ParamRangeError);
        0 === e && (e = h.length - d);
        this.writeRawBytes(new Int8Array(h._buffer, d, e));
      };
      l.prototype.writeShort = function(a) {
        this.writeUnsignedShort(a);
      };
      l.prototype.writeUnsignedShort = function(a) {
        var d = this._position;
        this._ensureCapacity(d + 2);
        var e = this._u8;
        this._littleEndian ? (e[d + 0] = a, e[d + 1] = a >> 8) : (e[d + 0] = a >> 8, e[d + 1] = a);
        this._position = d += 2;
        d > this._length && (this._length = d);
      };
      l.prototype.writeInt = function(a) {
        this.writeUnsignedInt(a);
      };
      l.prototype.write2Ints = function(a, d) {
        this.write2UnsignedInts(a, d);
      };
      l.prototype.write4Ints = function(a, d, e, f) {
        this.write4UnsignedInts(a, d, e, f);
      };
      l.prototype.writeUnsignedInt = function(a) {
        var d = this._position;
        this._ensureCapacity(d + 4);
        this._requestViews(2);
        if (this._littleEndian === l._nativeLittleEndian && 0 === (d & 3) && this._i32) {
          this._i32[d >> 2] = a;
        } else {
          var e = this._u8;
          this._littleEndian ? (e[d + 0] = a, e[d + 1] = a >> 8, e[d + 2] = a >> 16, e[d + 3] = a >> 24) : (e[d + 0] = a >> 24, e[d + 1] = a >> 16, e[d + 2] = a >> 8, e[d + 3] = a);
        }
        this._position = d += 4;
        d > this._length && (this._length = d);
      };
      l.prototype.write2UnsignedInts = function(a, d) {
        var e = this._position;
        this._ensureCapacity(e + 8);
        this._requestViews(2);
        this._littleEndian === l._nativeLittleEndian && 0 === (e & 3) && this._i32 ? (this._i32[(e >> 2) + 0] = a, this._i32[(e >> 2) + 1] = d, this._position = e += 8, e > this._length && (this._length = e)) : (this.writeUnsignedInt(a), this.writeUnsignedInt(d));
      };
      l.prototype.write4UnsignedInts = function(a, d, e, f) {
        var c = this._position;
        this._ensureCapacity(c + 16);
        this._requestViews(2);
        this._littleEndian === l._nativeLittleEndian && 0 === (c & 3) && this._i32 ? (this._i32[(c >> 2) + 0] = a, this._i32[(c >> 2) + 1] = d, this._i32[(c >> 2) + 2] = e, this._i32[(c >> 2) + 3] = f, this._position = c += 16, c > this._length && (this._length = c)) : (this.writeUnsignedInt(a), this.writeUnsignedInt(d), this.writeUnsignedInt(e), this.writeUnsignedInt(f));
      };
      l.prototype.writeFloat = function(a) {
        var d = this._position;
        this._ensureCapacity(d + 4);
        this._requestViews(4);
        if (this._littleEndian === l._nativeLittleEndian && 0 === (d & 3) && this._f32) {
          this._f32[d >> 2] = a;
        } else {
          var e = this._u8;
          k.IntegerUtilities.f32[0] = a;
          a = k.IntegerUtilities.u8;
          this._littleEndian ? (e[d + 0] = a[0], e[d + 1] = a[1], e[d + 2] = a[2], e[d + 3] = a[3]) : (e[d + 0] = a[3], e[d + 1] = a[2], e[d + 2] = a[1], e[d + 3] = a[0]);
        }
        this._position = d += 4;
        d > this._length && (this._length = d);
      };
      l.prototype.write6Floats = function(a, d, e, f, c, q) {
        var h = this._position;
        this._ensureCapacity(h + 24);
        this._requestViews(4);
        this._littleEndian === l._nativeLittleEndian && 0 === (h & 3) && this._f32 ? (this._f32[(h >> 2) + 0] = a, this._f32[(h >> 2) + 1] = d, this._f32[(h >> 2) + 2] = e, this._f32[(h >> 2) + 3] = f, this._f32[(h >> 2) + 4] = c, this._f32[(h >> 2) + 5] = q, this._position = h += 24, h > this._length && (this._length = h)) : (this.writeFloat(a), this.writeFloat(d), this.writeFloat(e), this.writeFloat(f), this.writeFloat(c), this.writeFloat(q));
      };
      l.prototype.writeDouble = function(a) {
        var d = this._position;
        this._ensureCapacity(d + 8);
        var e = this._u8;
        k.IntegerUtilities.f64[0] = a;
        a = k.IntegerUtilities.u8;
        this._littleEndian ? (e[d + 0] = a[0], e[d + 1] = a[1], e[d + 2] = a[2], e[d + 3] = a[3], e[d + 4] = a[4], e[d + 5] = a[5], e[d + 6] = a[6], e[d + 7] = a[7]) : (e[d + 0] = a[7], e[d + 1] = a[6], e[d + 2] = a[5], e[d + 3] = a[4], e[d + 4] = a[3], e[d + 5] = a[2], e[d + 6] = a[1], e[d + 7] = a[0]);
        this._position = d += 8;
        d > this._length && (this._length = d);
      };
      l.prototype.readRawBytes = function() {
        return new Int8Array(this._buffer, 0, this._length);
      };
      l.prototype.writeUTF = function(a) {
        a = g(a);
        a = v(a);
        this.writeShort(a.length);
        this.writeRawBytes(a);
      };
      l.prototype.writeUTFBytes = function(a) {
        a = g(a);
        a = v(a);
        this.writeRawBytes(a);
      };
      l.prototype.readUTF = function() {
        return this.readUTFBytes(this.readShort());
      };
      l.prototype.readUTFBytes = function(a) {
        a >>>= 0;
        var d = this._position;
        d + a > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        this._position += a;
        return m(new Int8Array(this._buffer, d, a));
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
        return m(new Int8Array(this._buffer, 0, this._length));
      };
      l.prototype.toBlob = function(a) {
        return new Blob([new Int8Array(this._buffer, this._position, this._length)], {type:a});
      };
      l.prototype.writeMultiByte = function(a, d) {
        b("packageInternal flash.utils.ObjectOutput::writeMultiByte");
      };
      l.prototype.readMultiByte = function(a, d) {
        b("packageInternal flash.utils.ObjectInput::readMultiByte");
      };
      l.prototype.getValue = function(a) {
        a |= 0;
        return a >= this._length ? void 0 : this._u8[a];
      };
      l.prototype.setValue = function(a, d) {
        a |= 0;
        var e = a + 1;
        this._ensureCapacity(e);
        this._u8[a] = d;
        e > this._length && (this._length = e);
      };
      l.prototype.readFixed = function() {
        return this.readInt() / 65536;
      };
      l.prototype.readFixed8 = function() {
        return this.readShort() / 256;
      };
      l.prototype.readFloat16 = function() {
        var a = this.readUnsignedShort(), d = a >> 15 ? -1 : 1, e = (a & 31744) >> 10, a = a & 1023;
        return e ? 31 === e ? a ? NaN : Infinity * d : d * Math.pow(2, e - 15) * (1 + a / 1024) : a / 1024 * Math.pow(2, -14) * d;
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
        for (var d = this._bitBuffer, e = this._bitLength;a > e;) {
          d = d << 8 | this.readUnsignedByte(), e += 8;
        }
        e -= a;
        a = d >>> e & n[a];
        this._bitBuffer = d;
        this._bitLength = e;
        return a;
      };
      l.prototype.readFixedBits = function(a) {
        return this.readBits(a) / 65536;
      };
      l.prototype.readString = function(a) {
        var d = this._position;
        if (a) {
          d + a > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError), this._position += a;
        } else {
          a = 0;
          for (var e = d;e < this._length && this._u8[e];e++) {
            a++;
          }
          this._position += a + 1;
        }
        return m(new Int8Array(this._buffer, d, a));
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
        var d;
        switch(a) {
          case "zlib":
            d = new r.Deflate(!0);
            break;
          case "deflate":
            d = new r.Deflate(!1);
            break;
          default:
            return;
        }
        var e = new l;
        d.onData = e.writeRawBytes.bind(e);
        d.push(this._u8.subarray(0, this._length));
        d.close();
        this._ensureCapacity(e._u8.length);
        this._u8.set(e._u8);
        this.length = e.length;
        this._position = 0;
      };
      l.prototype.uncompress = function(a) {
        a = 0 === arguments.length ? "zlib" : g(a);
        var d;
        switch(a) {
          case "zlib":
            d = r.Inflate.create(!0);
            break;
          case "deflate":
            d = r.Inflate.create(!1);
            break;
          case "lzma":
            d = new r.LzmaDecoder(!1);
            break;
          default:
            return;
        }
        var e = new l, f;
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
      l._nativeLittleEndian = 1 === (new Int8Array((new Int32Array([1])).buffer))[0];
      l.INITIAL_SIZE = 128;
      l._arrayBufferPool = new k.ArrayBufferPool;
      return l;
    }();
    r.DataBuffer = p;
  })(k.ArrayUtilities || (k.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  var r = k.ArrayUtilities.DataBuffer, g = k.ArrayUtilities.ensureTypedArrayCapacity;
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
  })(k.PathCommand || (k.PathCommand = {}));
  (function(b) {
    b[b.Linear = 16] = "Linear";
    b[b.Radial = 18] = "Radial";
  })(k.GradientType || (k.GradientType = {}));
  (function(b) {
    b[b.Pad = 0] = "Pad";
    b[b.Reflect = 1] = "Reflect";
    b[b.Repeat = 2] = "Repeat";
  })(k.GradientSpreadMethod || (k.GradientSpreadMethod = {}));
  (function(b) {
    b[b.RGB = 0] = "RGB";
    b[b.LinearRGB = 1] = "LinearRGB";
  })(k.GradientInterpolationMethod || (k.GradientInterpolationMethod = {}));
  (function(b) {
    b[b.None = 0] = "None";
    b[b.Normal = 1] = "Normal";
    b[b.Vertical = 2] = "Vertical";
    b[b.Horizontal = 3] = "Horizontal";
  })(k.LineScaleMode || (k.LineScaleMode = {}));
  var b = function() {
    return function(b, a, h, n, p, w, t, l, g, d, e) {
      this.commands = b;
      this.commandsPosition = a;
      this.coordinates = h;
      this.morphCoordinates = n;
      this.coordinatesPosition = p;
      this.styles = w;
      this.stylesLength = t;
      this.morphStyles = l;
      this.morphStylesLength = g;
      this.hasFills = d;
      this.hasLines = e;
    };
  }();
  k.PlainObjectShapeData = b;
  var v;
  (function(b) {
    b[b.Commands = 32] = "Commands";
    b[b.Coordinates = 128] = "Coordinates";
    b[b.Styles = 16] = "Styles";
  })(v || (v = {}));
  v = function() {
    function m(a) {
      void 0 === a && (a = !0);
      a && this.clear();
    }
    m.FromPlainObject = function(a) {
      var h = new m(!1);
      h.commands = a.commands;
      h.coordinates = a.coordinates;
      h.morphCoordinates = a.morphCoordinates;
      h.commandsPosition = a.commandsPosition;
      h.coordinatesPosition = a.coordinatesPosition;
      h.styles = r.FromArrayBuffer(a.styles, a.stylesLength);
      h.styles.endian = "auto";
      a.morphStyles && (h.morphStyles = r.FromArrayBuffer(a.morphStyles, a.morphStylesLength), h.morphStyles.endian = "auto");
      h.hasFills = a.hasFills;
      h.hasLines = a.hasLines;
      return h;
    };
    m.prototype.moveTo = function(a, h) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = 9;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = h;
    };
    m.prototype.lineTo = function(a, h) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = 10;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = h;
    };
    m.prototype.curveTo = function(a, h, n, b) {
      this.ensurePathCapacities(1, 4);
      this.commands[this.commandsPosition++] = 11;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = h;
      this.coordinates[this.coordinatesPosition++] = n;
      this.coordinates[this.coordinatesPosition++] = b;
    };
    m.prototype.cubicCurveTo = function(a, h, n, b, m, t) {
      this.ensurePathCapacities(1, 6);
      this.commands[this.commandsPosition++] = 12;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = h;
      this.coordinates[this.coordinatesPosition++] = n;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = m;
      this.coordinates[this.coordinatesPosition++] = t;
    };
    m.prototype.beginFill = function(a) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 1;
      this.styles.writeUnsignedInt(a);
      this.hasFills = !0;
    };
    m.prototype.writeMorphFill = function(a) {
      this.morphStyles.writeUnsignedInt(a);
    };
    m.prototype.endFill = function() {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 4;
    };
    m.prototype.endLine = function() {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 8;
    };
    m.prototype.lineStyle = function(a, h, n, b, m, t, l) {
      this.ensurePathCapacities(2, 0);
      this.commands[this.commandsPosition++] = 5;
      this.coordinates[this.coordinatesPosition++] = a;
      a = this.styles;
      a.writeUnsignedInt(h);
      a.writeBoolean(n);
      a.writeUnsignedByte(b);
      a.writeUnsignedByte(m);
      a.writeUnsignedByte(t);
      a.writeUnsignedByte(l);
      this.hasLines = !0;
    };
    m.prototype.writeMorphLineStyle = function(a, h) {
      this.morphCoordinates[this.coordinatesPosition - 1] = a;
      this.morphStyles.writeUnsignedInt(h);
    };
    m.prototype.beginBitmap = function(a, h, n, b, m) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = a;
      a = this.styles;
      a.writeUnsignedInt(h);
      this._writeStyleMatrix(n, !1);
      a.writeBoolean(b);
      a.writeBoolean(m);
      this.hasFills = !0;
    };
    m.prototype.writeMorphBitmap = function(a) {
      this._writeStyleMatrix(a, !0);
    };
    m.prototype.beginGradient = function(a, h, n, b, m, t, l, g) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = a;
      a = this.styles;
      a.writeUnsignedByte(b);
      a.writeShort(g);
      this._writeStyleMatrix(m, !1);
      b = h.length;
      a.writeByte(b);
      for (m = 0;m < b;m++) {
        a.writeUnsignedByte(n[m]), a.writeUnsignedInt(h[m]);
      }
      a.writeUnsignedByte(t);
      a.writeUnsignedByte(l);
      this.hasFills = !0;
    };
    m.prototype.writeMorphGradient = function(a, h, n) {
      this._writeStyleMatrix(n, !0);
      n = this.morphStyles;
      for (var b = 0;b < a.length;b++) {
        n.writeUnsignedByte(h[b]), n.writeUnsignedInt(a[b]);
      }
    };
    m.prototype.writeCommandAndCoordinates = function(a, h, n) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = h;
      this.coordinates[this.coordinatesPosition++] = n;
    };
    m.prototype.writeCoordinates = function(a, h) {
      this.ensurePathCapacities(0, 2);
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = h;
    };
    m.prototype.writeMorphCoordinates = function(a, h) {
      this.morphCoordinates = g(this.morphCoordinates, this.coordinatesPosition);
      this.morphCoordinates[this.coordinatesPosition - 2] = a;
      this.morphCoordinates[this.coordinatesPosition - 1] = h;
    };
    m.prototype.clear = function() {
      this.commandsPosition = this.coordinatesPosition = 0;
      this.commands = new Uint8Array(32);
      this.coordinates = new Int32Array(128);
      this.styles = new r(16);
      this.styles.endian = "auto";
      this.hasFills = this.hasLines = !1;
    };
    m.prototype.isEmpty = function() {
      return 0 === this.commandsPosition;
    };
    m.prototype.clone = function() {
      var a = new m(!1);
      a.commands = new Uint8Array(this.commands);
      a.commandsPosition = this.commandsPosition;
      a.coordinates = new Int32Array(this.coordinates);
      a.coordinatesPosition = this.coordinatesPosition;
      a.styles = new r(this.styles.length);
      a.styles.writeRawBytes(this.styles.bytes.subarray(0, this.styles.length));
      this.morphStyles && (a.morphStyles = new r(this.morphStyles.length), a.morphStyles.writeRawBytes(this.morphStyles.bytes.subarray(0, this.morphStyles.length)));
      a.hasFills = this.hasFills;
      a.hasLines = this.hasLines;
      return a;
    };
    m.prototype.toPlainObject = function() {
      return new b(this.commands, this.commandsPosition, this.coordinates, this.morphCoordinates, this.coordinatesPosition, this.styles.buffer, this.styles.length, this.morphStyles && this.morphStyles.buffer, this.morphStyles ? this.morphStyles.length : 0, this.hasFills, this.hasLines);
    };
    Object.defineProperty(m.prototype, "buffers", {get:function() {
      var a = [this.commands.buffer, this.coordinates.buffer, this.styles.buffer];
      this.morphCoordinates && a.push(this.morphCoordinates.buffer);
      this.morphStyles && a.push(this.morphStyles.buffer);
      return a;
    }, enumerable:!0, configurable:!0});
    m.prototype._writeStyleMatrix = function(a, h) {
      (h ? this.morphStyles : this.styles).write6Floats(a.a, a.b, a.c, a.d, a.tx, a.ty);
    };
    m.prototype.ensurePathCapacities = function(a, h) {
      this.commands = g(this.commands, this.commandsPosition + a);
      this.coordinates = g(this.coordinates, this.coordinatesPosition + h);
    };
    return m;
  }();
  k.ShapeData = v;
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
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
    })(k.Parser || (k.Parser = {}));
  })(k.SWF || (k.SWF = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  var r = k.Debug.unexpected, g = function() {
    function b(b, m, a, h) {
      this.url = b;
      this.method = m;
      this.mimeType = a;
      this.data = h;
    }
    b.prototype.readAll = function(b, m) {
      var a = this.url, h = this.xhr = new XMLHttpRequest({mozSystem:!0});
      h.open(this.method || "GET", this.url, !0);
      h.responseType = "arraybuffer";
      b && (h.onprogress = function(a) {
        b(h.response, a.loaded, a.total);
      });
      h.onreadystatechange = function(n) {
        4 === h.readyState && (200 !== h.status && 0 !== h.status || null === h.response ? (r("Path: " + a + " not found."), m(null, h.statusText)) : m(h.response));
      };
      this.mimeType && h.setRequestHeader("Content-Type", this.mimeType);
      h.send(this.data || null);
    };
    b.prototype.readChunked = function(b, m, a, h, n, p) {
      if (0 >= b) {
        this.readAsync(m, a, h, n, p);
      } else {
        var g = 0, t = new Uint8Array(b), l = 0, u;
        this.readAsync(function(a, e) {
          u = e.total;
          for (var f = a.length, c = 0;g + f >= b;) {
            var q = b - g;
            t.set(a.subarray(c, c + q), g);
            c += q;
            f -= q;
            l += b;
            m(t, {loaded:l, total:u});
            g = 0;
          }
          t.set(a.subarray(c), g);
          g += f;
        }, a, h, function() {
          0 < g && (l += g, m(t.subarray(0, g), {loaded:l, total:u}), g = 0);
          n && n();
        }, p);
      }
    };
    b.prototype.readAsync = function(b, m, a, h, n) {
      var p = this.xhr = new XMLHttpRequest({mozSystem:!0}), g = this.url, t = 0, l = 0;
      p.open(this.method || "GET", g, !0);
      p.responseType = "moz-chunked-arraybuffer";
      var u = "moz-chunked-arraybuffer" !== p.responseType;
      u && (p.responseType = "arraybuffer");
      p.onprogress = function(a) {
        u || (t = a.loaded, l = a.total, b(new Uint8Array(p.response), {loaded:t, total:l}));
      };
      p.onreadystatechange = function(a) {
        2 === p.readyState && n && n(g, p.status, p.getAllResponseHeaders());
        4 === p.readyState && (200 !== p.status && 0 !== p.status || null === p.response && (0 === l || t !== l) ? m(p.statusText) : (u && (a = p.response, b(new Uint8Array(a), {loaded:0, total:a.byteLength})), h && h()));
      };
      this.mimeType && p.setRequestHeader("Content-Type", this.mimeType);
      p.send(this.data || null);
      a && a();
    };
    b.prototype.abort = function() {
      this.xhr && (this.xhr.abort(), this.xhr = null);
    };
    return b;
  }();
  k.BinaryFileReader = g;
})(Shumway || (Shumway = {}));
(function(k) {
  var r = function() {
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
  k.FlashLog = r;
  k.flashlog = null;
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    (function(g) {
      g[g.Objects = 0] = "Objects";
      g[g.References = 1] = "References";
    })(k.RemotingPhase || (k.RemotingPhase = {}));
    (function(g) {
      g[g.HasMatrix = 1] = "HasMatrix";
      g[g.HasBounds = 2] = "HasBounds";
      g[g.HasChildren = 4] = "HasChildren";
      g[g.HasColorTransform = 8] = "HasColorTransform";
      g[g.HasClipRect = 16] = "HasClipRect";
      g[g.HasMiscellaneousProperties = 32] = "HasMiscellaneousProperties";
      g[g.HasMask = 64] = "HasMask";
      g[g.HasClip = 128] = "HasClip";
    })(k.MessageBits || (k.MessageBits = {}));
    (function(g) {
      g[g.None = 0] = "None";
      g[g.Asset = 134217728] = "Asset";
    })(k.IDMask || (k.IDMask = {}));
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
    })(k.MessageTag || (k.MessageTag = {}));
    (function(g) {
      g[g.Blur = 0] = "Blur";
      g[g.DropShadow = 1] = "DropShadow";
    })(k.FilterType || (k.FilterType = {}));
    (function(g) {
      g[g.Identity = 0] = "Identity";
      g[g.AlphaMultiplierOnly = 1] = "AlphaMultiplierOnly";
      g[g.All = 2] = "All";
    })(k.ColorTransformEncoding || (k.ColorTransformEncoding = {}));
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
    })(k.VideoPlaybackEvent || (k.VideoPlaybackEvent = {}));
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
    })(k.VideoControlEvent || (k.VideoControlEvent = {}));
    (function(g) {
      g[g.ShowAll = 0] = "ShowAll";
      g[g.ExactFit = 1] = "ExactFit";
      g[g.NoBorder = 2] = "NoBorder";
      g[g.NoScale = 4] = "NoScale";
    })(k.StageScaleMode || (k.StageScaleMode = {}));
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
    })(k.StageAlignFlags || (k.StageAlignFlags = {}));
    k.MouseEventNames = "click dblclick mousedown mousemove mouseup mouseover mouseout".split(" ");
    k.KeyboardEventNames = ["keydown", "keypress", "keyup"];
    (function(g) {
      g[g.CtrlKey = 1] = "CtrlKey";
      g[g.AltKey = 2] = "AltKey";
      g[g.ShiftKey = 4] = "ShiftKey";
    })(k.KeyboardEventFlags || (k.KeyboardEventFlags = {}));
    (function(g) {
      g[g.DocumentHidden = 0] = "DocumentHidden";
      g[g.DocumentVisible = 1] = "DocumentVisible";
      g[g.WindowBlur = 2] = "WindowBlur";
      g[g.WindowFocus = 3] = "WindowFocus";
    })(k.FocusEventType || (k.FocusEventType = {}));
  })(k.Remoting || (k.Remoting = {}));
})(Shumway || (Shumway = {}));
var throwError, Errors;
(function(k) {
  (function(k) {
    (function(g) {
      var b = function() {
        function b() {
        }
        b.toRGBA = function(a, h, n, b) {
          void 0 === b && (b = 1);
          return "rgba(" + a + "," + h + "," + n + "," + b + ")";
        };
        return b;
      }();
      g.UI = b;
      var k = function() {
        function m() {
        }
        m.prototype.tabToolbar = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(37, 44, 51, a);
        };
        m.prototype.toolbars = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(52, 60, 69, a);
        };
        m.prototype.selectionBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(29, 79, 115, a);
        };
        m.prototype.selectionText = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(245, 247, 250, a);
        };
        m.prototype.splitters = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(0, 0, 0, a);
        };
        m.prototype.bodyBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(17, 19, 21, a);
        };
        m.prototype.sidebarBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(24, 29, 32, a);
        };
        m.prototype.attentionBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(161, 134, 80, a);
        };
        m.prototype.bodyText = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(143, 161, 178, a);
        };
        m.prototype.foregroundTextGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(182, 186, 191, a);
        };
        m.prototype.contentTextHighContrast = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(169, 186, 203, a);
        };
        m.prototype.contentTextGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(143, 161, 178, a);
        };
        m.prototype.contentTextDarkGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(95, 115, 135, a);
        };
        m.prototype.blueHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(70, 175, 227, a);
        };
        m.prototype.purpleHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(107, 122, 187, a);
        };
        m.prototype.pinkHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(223, 128, 255, a);
        };
        m.prototype.redHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(235, 83, 104, a);
        };
        m.prototype.orangeHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(217, 102, 41, a);
        };
        m.prototype.lightOrangeHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(217, 155, 40, a);
        };
        m.prototype.greenHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(112, 191, 83, a);
        };
        m.prototype.blueGreyHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(94, 136, 176, a);
        };
        return m;
      }();
      g.UIThemeDark = k;
      k = function() {
        function m() {
        }
        m.prototype.tabToolbar = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(235, 236, 237, a);
        };
        m.prototype.toolbars = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(240, 241, 242, a);
        };
        m.prototype.selectionBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(76, 158, 217, a);
        };
        m.prototype.selectionText = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(245, 247, 250, a);
        };
        m.prototype.splitters = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(170, 170, 170, a);
        };
        m.prototype.bodyBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(252, 252, 252, a);
        };
        m.prototype.sidebarBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(247, 247, 247, a);
        };
        m.prototype.attentionBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(161, 134, 80, a);
        };
        m.prototype.bodyText = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(24, 25, 26, a);
        };
        m.prototype.foregroundTextGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(88, 89, 89, a);
        };
        m.prototype.contentTextHighContrast = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(41, 46, 51, a);
        };
        m.prototype.contentTextGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(143, 161, 178, a);
        };
        m.prototype.contentTextDarkGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(102, 115, 128, a);
        };
        m.prototype.blueHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(0, 136, 204, a);
        };
        m.prototype.purpleHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(91, 95, 255, a);
        };
        m.prototype.pinkHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(184, 46, 229, a);
        };
        m.prototype.redHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(237, 38, 85, a);
        };
        m.prototype.orangeHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(241, 60, 0, a);
        };
        m.prototype.lightOrangeHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(217, 126, 0, a);
        };
        m.prototype.greenHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(44, 187, 15, a);
        };
        m.prototype.blueGreyHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(95, 136, 176, a);
        };
        return m;
      }();
      g.UIThemeLight = k;
    })(k.Theme || (k.Theme = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    (function(g) {
      var b = function() {
        function b(m, a) {
          this._buffers = m || [];
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
    })(k.Profiler || (k.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(k, r) {
  function g() {
    this.constructor = k;
  }
  for (var b in r) {
    r.hasOwnProperty(b) && (k[b] = r[b]);
  }
  g.prototype = r.prototype;
  k.prototype = new g;
};
(function(k) {
  (function(k) {
    (function(g) {
      var b = function() {
        return function(b) {
          this.kind = b;
          this.totalTime = this.selfTime = this.count = 0;
        };
      }();
      g.TimelineFrameStatistics = b;
      var k = function() {
        function m(a, h, b, p, m, t) {
          this.parent = a;
          this.kind = h;
          this.startData = b;
          this.endData = p;
          this.startTime = m;
          this.endTime = t;
          this.maxDepth = 0;
        }
        Object.defineProperty(m.prototype, "totalTime", {get:function() {
          return this.endTime - this.startTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(m.prototype, "selfTime", {get:function() {
          var a = this.totalTime;
          if (this.children) {
            for (var h = 0, b = this.children.length;h < b;h++) {
              var p = this.children[h], a = a - (p.endTime - p.startTime)
            }
          }
          return a;
        }, enumerable:!0, configurable:!0});
        m.prototype.getChildIndex = function(a) {
          for (var h = this.children, b = 0;b < h.length;b++) {
            if (h[b].endTime > a) {
              return b;
            }
          }
          return 0;
        };
        m.prototype.getChildRange = function(a, h) {
          if (this.children && a <= this.endTime && h >= this.startTime && h >= a) {
            var b = this._getNearestChild(a), p = this._getNearestChildReverse(h);
            if (b <= p) {
              return a = this.children[b].startTime, h = this.children[p].endTime, {startIndex:b, endIndex:p, startTime:a, endTime:h, totalTime:h - a};
            }
          }
          return null;
        };
        m.prototype._getNearestChild = function(a) {
          var h = this.children;
          if (h && h.length) {
            if (a <= h[0].endTime) {
              return 0;
            }
            for (var b, p = 0, m = h.length - 1;m > p;) {
              b = (p + m) / 2 | 0;
              var t = h[b];
              if (a >= t.startTime && a <= t.endTime) {
                return b;
              }
              a > t.endTime ? p = b + 1 : m = b;
            }
            return Math.ceil((p + m) / 2);
          }
          return 0;
        };
        m.prototype._getNearestChildReverse = function(a) {
          var h = this.children;
          if (h && h.length) {
            var b = h.length - 1;
            if (a >= h[b].startTime) {
              return b;
            }
            for (var p, m = 0;b > m;) {
              p = Math.ceil((m + b) / 2);
              var t = h[p];
              if (a >= t.startTime && a <= t.endTime) {
                return p;
              }
              a > t.endTime ? m = p : b = p - 1;
            }
            return (m + b) / 2 | 0;
          }
          return 0;
        };
        m.prototype.query = function(a) {
          if (a < this.startTime || a > this.endTime) {
            return null;
          }
          var h = this.children;
          if (h && 0 < h.length) {
            for (var b, p = 0, m = h.length - 1;m > p;) {
              var t = (p + m) / 2 | 0;
              b = h[t];
              if (a >= b.startTime && a <= b.endTime) {
                return b.query(a);
              }
              a > b.endTime ? p = t + 1 : m = t;
            }
            b = h[m];
            if (a >= b.startTime && a <= b.endTime) {
              return b.query(a);
            }
          }
          return this;
        };
        m.prototype.queryNext = function(a) {
          for (var h = this;a > h.endTime;) {
            if (h.parent) {
              h = h.parent;
            } else {
              break;
            }
          }
          return h.query(a);
        };
        m.prototype.getDepth = function() {
          for (var a = 0, h = this;h;) {
            a++, h = h.parent;
          }
          return a;
        };
        m.prototype.calculateStatistics = function() {
          function a(n) {
            if (n.kind) {
              var p = h[n.kind.id] || (h[n.kind.id] = new b(n.kind));
              p.count++;
              p.selfTime += n.selfTime;
              p.totalTime += n.totalTime;
            }
            n.children && n.children.forEach(a);
          }
          var h = this.statistics = [];
          a(this);
        };
        m.prototype.trace = function(a) {
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
        return m;
      }();
      g.TimelineFrame = k;
      k = function(b) {
        function a(a) {
          b.call(this, null, null, null, null, NaN, NaN);
          this.name = a;
        }
        __extends(a, b);
        return a;
      }(k);
      g.TimelineBufferSnapshot = k;
    })(k.Profiler || (k.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(g) {
      var b = function() {
        function b(m, a) {
          void 0 === m && (m = "");
          this.name = m || "";
          this._startTime = k.isNullOrUndefined(a) ? jsGlobal.START_TIME : a;
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
          this._marks = new k.CircularBuffer(Int32Array, 20);
          this._times = new k.CircularBuffer(Float64Array, 20);
        };
        b.prototype._getKindId = function(m) {
          var a = b.MAX_KINDID;
          if (void 0 === this._kindNameMap[m]) {
            if (a = this._kinds.length, a < b.MAX_KINDID) {
              var h = {id:a, name:m, visible:!0};
              this._kinds.push(h);
              this._kindNameMap[m] = h;
            } else {
              a = b.MAX_KINDID;
            }
          } else {
            a = this._kindNameMap[m].id;
          }
          return a;
        };
        b.prototype._getMark = function(m, a, h) {
          var n = b.MAX_DATAID;
          k.isNullOrUndefined(h) || a === b.MAX_KINDID || (n = this._data.length, n < b.MAX_DATAID ? this._data.push(h) : n = b.MAX_DATAID);
          return m | n << 16 | a;
        };
        b.prototype.enter = function(m, a, h) {
          h = (k.isNullOrUndefined(h) ? performance.now() : h) - this._startTime;
          this._marks || this._initialize();
          this._depth++;
          m = this._getKindId(m);
          this._marks.write(this._getMark(b.ENTER, m, a));
          this._times.write(h);
          this._stack.push(m);
        };
        b.prototype.leave = function(m, a, h) {
          h = (k.isNullOrUndefined(h) ? performance.now() : h) - this._startTime;
          var n = this._stack.pop();
          m && (n = this._getKindId(m));
          this._marks.write(this._getMark(b.LEAVE, n, a));
          this._times.write(h);
          this._depth--;
        };
        b.prototype.count = function(b, a, h) {
        };
        b.prototype.createSnapshot = function() {
          var m;
          void 0 === m && (m = Number.MAX_VALUE);
          if (!this._marks) {
            return null;
          }
          var a = this._times, h = this._kinds, n = this._data, p = new g.TimelineBufferSnapshot(this.name), w = [p], t = 0;
          this._marks || this._initialize();
          this._marks.forEachInReverse(function(l, p) {
            var d = n[l >>> 16 & b.MAX_DATAID], e = h[l & b.MAX_KINDID];
            if (k.isNullOrUndefined(e) || e.visible) {
              var f = l & 2147483648, c = a.get(p), q = w.length;
              if (f === b.LEAVE) {
                if (1 === q && (t++, t > m)) {
                  return !0;
                }
                w.push(new g.TimelineFrame(w[q - 1], e, null, d, NaN, c));
              } else {
                if (f === b.ENTER) {
                  if (e = w.pop(), f = w[w.length - 1]) {
                    for (f.children ? f.children.unshift(e) : f.children = [e], f = w.length, e.depth = f, e.startData = d, e.startTime = c;e;) {
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
          p.children && p.children.length && (p.startTime = p.children[0].startTime, p.endTime = p.children[p.children.length - 1].endTime);
          return p;
        };
        b.prototype.reset = function(b) {
          this._startTime = k.isNullOrUndefined(b) ? performance.now() : b;
          this._marks ? (this._depth = 0, this._data = [], this._marks.reset(), this._times.reset()) : this._initialize();
        };
        b.FromFirefoxProfile = function(m, a) {
          for (var h = m.profile.threads[0].samples, n = new b(a, h[0].time), p = [], g, t = 0;t < h.length;t++) {
            g = h[t];
            var l = g.time, k = g.frames, d = 0;
            for (g = Math.min(k.length, p.length);d < g && k[d].location === p[d].location;) {
              d++;
            }
            for (var e = p.length - d, f = 0;f < e;f++) {
              g = p.pop(), n.leave(g.location, null, l);
            }
            for (;d < k.length;) {
              g = k[d++], n.enter(g.location, null, l);
            }
            p = k;
          }
          for (;g = p.pop();) {
            n.leave(g.location, null, l);
          }
          return n;
        };
        b.FromChromeProfile = function(m, a) {
          var h = m.timestamps, n = m.samples, p = new b(a, h[0] / 1E3), g = [], t = {}, l;
          b._resolveIds(m.head, t);
          for (var k = 0;k < h.length;k++) {
            var d = h[k] / 1E3, e = [];
            for (l = t[n[k]];l;) {
              e.unshift(l), l = l.parent;
            }
            var f = 0;
            for (l = Math.min(e.length, g.length);f < l && e[f] === g[f];) {
              f++;
            }
            for (var c = g.length - f, q = 0;q < c;q++) {
              l = g.pop(), p.leave(l.functionName, null, d);
            }
            for (;f < e.length;) {
              l = e[f++], p.enter(l.functionName, null, d);
            }
            g = e;
          }
          for (;l = g.pop();) {
            p.leave(l.functionName, null, d);
          }
          return p;
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
    })(r.Profiler || (r.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
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
              this._theme = new r.Theme.UIThemeDark;
              break;
            case 1:
              this._theme = new r.Theme.UIThemeLight;
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
            this._activeProfile.forEachSnapshot(function(n, p) {
              b._headers[p].initialize(a, h);
              b._charts[p].initialize(a, h);
            });
          }
        };
        b.prototype._onResize = function() {
          if (this._activeProfile) {
            var b = this, a = this._container.offsetWidth;
            this._overviewHeader.setSize(a);
            this._overview.setSize(a);
            this._activeProfile.forEachSnapshot(function(h, n) {
              b._headers[n].setSize(a);
              b._charts[n].setSize(a);
            });
          }
        };
        b.prototype._updateViews = function() {
          if (this._activeProfile) {
            var b = this, a = this._activeProfile.windowStart, h = this._activeProfile.windowEnd;
            this._overviewHeader.setWindow(a, h);
            this._overview.setWindow(a, h);
            this._activeProfile.forEachSnapshot(function(n, p) {
              b._headers[p].setWindow(a, h);
              b._charts[p].setWindow(a, h);
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
        b.prototype.showTooltip = function(b, a, h, n) {
          this.removeTooltipContent();
          this._tooltip.appendChild(this.createTooltipContent(b, a));
          this._tooltip.style.display = "block";
          var p = this._tooltip.firstChild;
          a = p.clientWidth;
          p = p.clientHeight;
          h += h + a >= b.canvas.clientWidth - 50 ? -(a + 20) : 25;
          n += b.canvas.offsetTop - p / 2;
          this._tooltip.style.left = h + "px";
          this._tooltip.style.top = n + "px";
        };
        b.prototype.hideTooltip = function() {
          this._tooltip.style.display = "none";
        };
        b.prototype.createTooltipContent = function(b, a) {
          var h = Math.round(1E5 * a.totalTime) / 1E5, n = Math.round(1E5 * a.selfTime) / 1E5, p = Math.round(1E4 * a.selfTime / a.totalTime) / 100, g = document.createElement("div"), t = document.createElement("h1");
          t.textContent = a.kind.name;
          g.appendChild(t);
          t = document.createElement("p");
          t.textContent = "Total: " + h + " ms";
          g.appendChild(t);
          h = document.createElement("p");
          h.textContent = "Self: " + n + " ms (" + p + "%)";
          g.appendChild(h);
          if (n = b.getStatistics(a.kind)) {
            p = document.createElement("p"), p.textContent = "Count: " + n.count, g.appendChild(p), p = document.createElement("p"), p.textContent = "All Total: " + Math.round(1E5 * n.totalTime) / 1E5 + " ms", g.appendChild(p), p = document.createElement("p"), p.textContent = "All Self: " + Math.round(1E5 * n.selfTime) / 1E5 + " ms", g.appendChild(p);
          }
          this.appendDataElements(g, a.startData);
          this.appendDataElements(g, a.endData);
          return g;
        };
        b.prototype.appendDataElements = function(b, a) {
          if (!k.isNullOrUndefined(a)) {
            b.appendChild(document.createElement("hr"));
            var h;
            if (k.isObject(a)) {
              for (var n in a) {
                h = document.createElement("p"), h.textContent = n + ": " + a[n], b.appendChild(h);
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
    })(r.Profiler || (r.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(g) {
      var b = k.NumberUtilities.clamp, r = function() {
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
      g.MouseCursor = r;
      var m = function() {
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
            a._cursorOwner = a._cursor === r.DEFAULT ? null : this._target;
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
          var p = {x:a.x - b.start.x, y:a.y - b.start.y};
          b.current = a;
          b.delta = p;
          b.hasMoved = !0;
          this._target.onDrag(b.start.x, b.start.y, a.x, a.y, p.x, p.y);
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
            var n = this._getTargetMousePos(a, a.target);
            a = b("undefined" !== typeof a.deltaY ? a.deltaY / 16 : -a.wheelDelta / 40, -1, 1);
            this._target.onMouseWheel(n.x, n.y, Math.pow(1.2, a) - 1);
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
          var p = b.getBoundingClientRect();
          return {x:a.clientX - p.left, y:a.clientY - p.top};
        };
        a.HOVER_TIMEOUT = 500;
        a._cursor = r.DEFAULT;
        return a;
      }();
      g.MouseController = m;
    })(r.Profiler || (r.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
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
          var n = this._windowEnd, p = n - a;
          h = Math.max((b.MIN_WINDOW_LEN - p) / p, h);
          this._controller.setWindow(a + (a - g) * h, n + (n - g) * h);
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
        b.prototype.onDrag = function(b, a, h, n, p, g) {
        };
        b.prototype.onDragEnd = function(b, a, h, n, p, g) {
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
    })(k.Profiler || (k.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(g) {
      var b = k.StringUtilities.trimMiddle, r = function(m) {
        function a(a, b) {
          m.call(this, a);
          this._textWidth = {};
          this._minFrameWidthInPixels = 1;
          this._snapshot = b;
          this._kindStyle = Object.create(null);
        }
        __extends(a, m);
        a.prototype.setSize = function(a, b) {
          m.prototype.setSize.call(this, a, b || this._initialized ? 12.5 * this._maxDepth : 100);
        };
        a.prototype.initialize = function(a, b) {
          this._initialized = !0;
          this._maxDepth = this._snapshot.maxDepth;
          this.setRange(a, b);
          this.setWindow(a, b, !1);
          this.setSize(this._width, 12.5 * this._maxDepth);
        };
        a.prototype.destroy = function() {
          m.prototype.destroy.call(this);
          this._snapshot = null;
        };
        a.prototype.draw = function() {
          var a = this._context, b = window.devicePixelRatio;
          k.ColorStyle.reset();
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.bodyBackground(1);
          a.fillRect(0, 0, this._width, this._height);
          this._initialized && this._drawChildren(this._snapshot);
          a.restore();
        };
        a.prototype._drawChildren = function(a, b) {
          void 0 === b && (b = 0);
          var p = a.getChildRange(this._windowStart, this._windowEnd);
          if (p) {
            for (var g = p.startIndex;g <= p.endIndex;g++) {
              var t = a.children[g];
              this._drawFrame(t, b) && this._drawChildren(t, b + 1);
            }
          }
        };
        a.prototype._drawFrame = function(a, b) {
          var p = this._context, g = this._toPixels(a.startTime), t = this._toPixels(a.endTime), l = t - g;
          if (l <= this._minFrameWidthInPixels) {
            return p.fillStyle = this._controller.theme.tabToolbar(1), p.fillRect(g, 12.5 * b, this._minFrameWidthInPixels, 12 + 12.5 * (a.maxDepth - a.depth)), !1;
          }
          0 > g && (t = l + g, g = 0);
          var t = t - g, m = this._kindStyle[a.kind.id];
          m || (m = k.ColorStyle.randomStyle(), m = this._kindStyle[a.kind.id] = {bgColor:m, textColor:k.ColorStyle.contrastStyle(m)});
          p.save();
          p.fillStyle = m.bgColor;
          p.fillRect(g, 12.5 * b, t, 12);
          12 < l && (l = a.kind.name) && l.length && (l = this._prepareText(p, l, t - 4), l.length && (p.fillStyle = m.textColor, p.textBaseline = "bottom", p.fillText(l, g + 2, 12.5 * (b + 1) - 1)));
          p.restore();
          return !0;
        };
        a.prototype._prepareText = function(a, n, p) {
          var g = this._measureWidth(a, n);
          if (p > g) {
            return n;
          }
          for (var g = 3, t = n.length;g < t;) {
            var l = g + t >> 1;
            this._measureWidth(a, b(n, l)) < p ? g = l + 1 : t = l;
          }
          n = b(n, t - 1);
          g = this._measureWidth(a, n);
          return g <= p ? n : "";
        };
        a.prototype._measureWidth = function(a, b) {
          var p = this._textWidth[b];
          p || (p = a.measureText(b).width, this._textWidth[b] = p);
          return p;
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
          var p = 1 + b / 12.5 | 0, g = this._snapshot.query(this._toTime(a));
          if (g && g.depth >= p) {
            for (;g && g.depth > p;) {
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
        a.prototype.onDrag = function(a, b, p, g, t, l) {
          if (a = this._dragInfo) {
            t = this._toTimeRelative(-t), this._controller.setWindow(a.windowStartInitial + t, a.windowEndInitial + t);
          }
        };
        a.prototype.onDragEnd = function(a, b, p, k, t, l) {
          this._dragInfo = null;
          this._mouseController.updateCursor(g.MouseCursor.DEFAULT);
        };
        a.prototype.onClick = function(a, b) {
          this._dragInfo = null;
          this._mouseController.updateCursor(g.MouseCursor.DEFAULT);
        };
        a.prototype.onHoverStart = function(a, b) {
          var p = this._getFrameAtPosition(a, b);
          p && (this._hoveredFrame = p, this._controller.showTooltip(this, p, a, b));
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
      g.FlameChart = r;
    })(r.Profiler || (r.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(g) {
      var b = k.NumberUtilities.clamp;
      (function(b) {
        b[b.OVERLAY = 0] = "OVERLAY";
        b[b.STACK = 1] = "STACK";
        b[b.UNION = 2] = "UNION";
      })(g.FlameChartOverviewMode || (g.FlameChartOverviewMode = {}));
      var r = function(k) {
        function a(a, b) {
          void 0 === b && (b = 1);
          this._mode = b;
          this._overviewCanvasDirty = !0;
          this._overviewCanvas = document.createElement("canvas");
          this._overviewContext = this._overviewCanvas.getContext("2d");
          k.call(this, a);
        }
        __extends(a, k);
        a.prototype.setSize = function(a, b) {
          k.prototype.setSize.call(this, a, b || 64);
        };
        Object.defineProperty(a.prototype, "mode", {set:function(a) {
          this._mode = a;
          this.draw();
        }, enumerable:!0, configurable:!0});
        a.prototype._resetCanvas = function() {
          k.prototype._resetCanvas.call(this);
          this._overviewCanvas.width = this._canvas.width;
          this._overviewCanvas.height = this._canvas.height;
          this._overviewCanvasDirty = !0;
        };
        a.prototype.draw = function() {
          var a = this._context, b = window.devicePixelRatio, p = this._width, g = this._height;
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.bodyBackground(1);
          a.fillRect(0, 0, p, g);
          a.restore();
          this._initialized && (this._overviewCanvasDirty && (this._drawChart(), this._overviewCanvasDirty = !1), a.drawImage(this._overviewCanvas, 0, 0), this._drawSelection());
        };
        a.prototype._drawSelection = function() {
          var a = this._context, b = this._height, p = window.devicePixelRatio, g = this._selection ? this._selection.left : this._toPixels(this._windowStart), t = this._selection ? this._selection.right : this._toPixels(this._windowEnd), l = this._controller.theme;
          a.save();
          a.scale(p, p);
          this._selection ? (a.fillStyle = l.selectionText(.15), a.fillRect(g, 1, t - g, b - 1), a.fillStyle = "rgba(133, 0, 0, 1)", a.fillRect(g + .5, 0, t - g - 1, 4), a.fillRect(g + .5, b - 4, t - g - 1, 4)) : (a.fillStyle = l.bodyBackground(.4), a.fillRect(0, 1, g, b - 1), a.fillRect(t, 1, this._width, b - 1));
          a.beginPath();
          a.moveTo(g, 0);
          a.lineTo(g, b);
          a.moveTo(t, 0);
          a.lineTo(t, b);
          a.lineWidth = .5;
          a.strokeStyle = l.foregroundTextGrey(1);
          a.stroke();
          b = Math.abs((this._selection ? this._toTime(this._selection.right) : this._windowEnd) - (this._selection ? this._toTime(this._selection.left) : this._windowStart));
          a.fillStyle = l.selectionText(.5);
          a.font = "8px sans-serif";
          a.textBaseline = "alphabetic";
          a.textAlign = "end";
          a.fillText(b.toFixed(2), Math.min(g, t) - 4, 10);
          a.fillText((b / 60).toFixed(2), Math.min(g, t) - 4, 20);
          a.restore();
        };
        a.prototype._drawChart = function() {
          var a = window.devicePixelRatio, b = this._height, p = this._controller.activeProfile, g = 4 * this._width, t = p.totalTime / g, l = this._overviewContext, k = this._controller.theme.blueHighlight(1);
          l.save();
          l.translate(0, a * b);
          var d = -a * b / (p.maxDepth - 1);
          l.scale(a / 4, d);
          l.clearRect(0, 0, g, p.maxDepth - 1);
          1 == this._mode && l.scale(1, 1 / p.snapshotCount);
          for (var e = 0, f = p.snapshotCount;e < f;e++) {
            var c = p.getSnapshotAt(e);
            if (c) {
              var q = null, A = 0;
              l.beginPath();
              l.moveTo(0, 0);
              for (var J = 0;J < g;J++) {
                A = p.startTime + J * t, A = (q = q ? q.queryNext(A) : c.query(A)) ? q.getDepth() - 1 : 0, l.lineTo(J, A);
              }
              l.lineTo(J, 0);
              l.fillStyle = k;
              l.fill();
              1 == this._mode && l.translate(0, -b * a / d);
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
            var p = this._toPixels(this._windowStart), k = this._toPixels(this._windowEnd), t = 2 + g.FlameChartBase.DRAGHANDLE_WIDTH / 2, l = a >= p - t && a <= p + t, m = a >= k - t && a <= k + t;
            if (l && m) {
              return 4;
            }
            if (l) {
              return 2;
            }
            if (m) {
              return 3;
            }
            if (!this._windowEqRange() && a > p + t && a < k - t) {
              return 1;
            }
          }
          return 0;
        };
        a.prototype.onMouseDown = function(a, b) {
          var p = this._getDragTargetUnderCursor(a, b);
          0 === p ? (this._selection = {left:a, right:a}, this.draw()) : (1 === p && this._mouseController.updateCursor(g.MouseCursor.GRABBING), this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:p});
        };
        a.prototype.onMouseMove = function(a, b) {
          var p = g.MouseCursor.DEFAULT, k = this._getDragTargetUnderCursor(a, b);
          0 === k || this._selection || (p = 1 === k ? g.MouseCursor.GRAB : g.MouseCursor.EW_RESIZE);
          this._mouseController.updateCursor(p);
        };
        a.prototype.onMouseOver = function(a, b) {
          this.onMouseMove(a, b);
        };
        a.prototype.onMouseOut = function() {
          this._mouseController.updateCursor(g.MouseCursor.DEFAULT);
        };
        a.prototype.onDrag = function(a, n, p, k, t, l) {
          if (this._selection) {
            this._selection = {left:a, right:b(p, 0, this._width - 1)}, this.draw();
          } else {
            a = this._dragInfo;
            if (4 === a.target) {
              if (0 !== t) {
                a.target = 0 > t ? 2 : 3;
              } else {
                return;
              }
            }
            n = this._windowStart;
            p = this._windowEnd;
            t = this._toTimeRelative(t);
            switch(a.target) {
              case 1:
                n = a.windowStartInitial + t;
                p = a.windowEndInitial + t;
                break;
              case 2:
                n = b(a.windowStartInitial + t, this._rangeStart, p - g.FlameChartBase.MIN_WINDOW_LEN);
                break;
              case 3:
                p = b(a.windowEndInitial + t, n + g.FlameChartBase.MIN_WINDOW_LEN, this._rangeEnd);
                break;
              default:
                return;
            }
            this._controller.setWindow(n, p);
          }
        };
        a.prototype.onDragEnd = function(a, b, g, k, t, l) {
          this._selection && (this._selection = null, this._controller.setWindow(this._toTime(a), this._toTime(g)));
          this._dragInfo = null;
          this.onMouseMove(g, k);
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
      g.FlameChartOverview = r;
    })(r.Profiler || (r.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(g) {
      var b = k.NumberUtilities.clamp;
      (function(b) {
        b[b.OVERVIEW = 0] = "OVERVIEW";
        b[b.CHART = 1] = "CHART";
      })(g.FlameChartHeaderType || (g.FlameChartHeaderType = {}));
      var r = function(k) {
        function a(a, b) {
          this._type = b;
          k.call(this, a);
        }
        __extends(a, k);
        a.prototype.draw = function() {
          var a = this._context, b = window.devicePixelRatio, g = this._width, k = this._height;
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.tabToolbar(1);
          a.fillRect(0, 0, g, k);
          this._initialized && (0 == this._type ? (b = this._toPixels(this._windowStart), g = this._toPixels(this._windowEnd), a.fillStyle = this._controller.theme.bodyBackground(1), a.fillRect(b, 0, g - b, k), this._drawLabels(this._rangeStart, this._rangeEnd), this._drawDragHandle(b), this._drawDragHandle(g)) : this._drawLabels(this._windowStart, this._windowEnd));
          a.restore();
        };
        a.prototype._drawLabels = function(b, n) {
          var g = this._context, k = this._calculateTickInterval(b, n), t = Math.ceil(b / k) * k, l = 500 <= k, m = l ? 1E3 : 1, d = this._decimalPlaces(k / m), l = l ? "s" : "ms", e = this._toPixels(t), f = this._height / 2, c = this._controller.theme;
          g.lineWidth = 1;
          g.strokeStyle = c.contentTextDarkGrey(.5);
          g.fillStyle = c.contentTextDarkGrey(1);
          g.textAlign = "right";
          g.textBaseline = "middle";
          g.font = "11px sans-serif";
          for (c = this._width + a.TICK_MAX_WIDTH;e < c;) {
            g.fillText((t / m).toFixed(d) + " " + l, e - 7, f + 1), g.beginPath(), g.moveTo(e, 0), g.lineTo(e, this._height + 1), g.closePath(), g.stroke(), t += k, e = this._toPixels(t);
          }
        };
        a.prototype._calculateTickInterval = function(b, n) {
          var g = (n - b) / (this._width / a.TICK_MAX_WIDTH), k = Math.pow(10, Math.floor(Math.log(g) / Math.LN10)), g = g / k;
          return 5 < g ? 10 * k : 2 < g ? 5 * k : 1 < g ? 2 * k : k;
        };
        a.prototype._drawDragHandle = function(a) {
          var b = this._context;
          b.lineWidth = 2;
          b.strokeStyle = this._controller.theme.bodyBackground(1);
          b.fillStyle = this._controller.theme.foregroundTextGrey(.7);
          this._drawRoundedRect(b, a - g.FlameChartBase.DRAGHANDLE_WIDTH / 2, g.FlameChartBase.DRAGHANDLE_WIDTH, this._height - 2);
        };
        a.prototype._drawRoundedRect = function(a, b, g, k) {
          var t, l = !0;
          void 0 === l && (l = !0);
          void 0 === t && (t = !0);
          a.beginPath();
          a.moveTo(b + 2, 1);
          a.lineTo(b + g - 2, 1);
          a.quadraticCurveTo(b + g, 1, b + g, 3);
          a.lineTo(b + g, 1 + k - 2);
          a.quadraticCurveTo(b + g, 1 + k, b + g - 2, 1 + k);
          a.lineTo(b + 2, 1 + k);
          a.quadraticCurveTo(b, 1 + k, b, 1 + k - 2);
          a.lineTo(b, 3);
          a.quadraticCurveTo(b, 1, b + 2, 1);
          a.closePath();
          l && a.stroke();
          t && a.fill();
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
              var p = this._toPixels(this._windowStart), k = this._toPixels(this._windowEnd), t = 2 + g.FlameChartBase.DRAGHANDLE_WIDTH / 2, p = a >= p - t && a <= p + t, k = a >= k - t && a <= k + t;
              if (p && k) {
                return 4;
              }
              if (p) {
                return 2;
              }
              if (k) {
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
          var p = this._getDragTargetUnderCursor(a, b);
          1 === p && this._mouseController.updateCursor(g.MouseCursor.GRABBING);
          this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:p};
        };
        a.prototype.onMouseMove = function(a, b) {
          var p = g.MouseCursor.DEFAULT, k = this._getDragTargetUnderCursor(a, b);
          0 !== k && (1 !== k ? p = g.MouseCursor.EW_RESIZE : 1 !== k || this._windowEqRange() || (p = g.MouseCursor.GRAB));
          this._mouseController.updateCursor(p);
        };
        a.prototype.onMouseOver = function(a, b) {
          this.onMouseMove(a, b);
        };
        a.prototype.onMouseOut = function() {
          this._mouseController.updateCursor(g.MouseCursor.DEFAULT);
        };
        a.prototype.onDrag = function(a, n, p, k, t, l) {
          a = this._dragInfo;
          if (4 === a.target) {
            if (0 !== t) {
              a.target = 0 > t ? 2 : 3;
            } else {
              return;
            }
          }
          n = this._windowStart;
          p = this._windowEnd;
          t = this._toTimeRelative(t);
          switch(a.target) {
            case 1:
              p = 0 === this._type ? 1 : -1;
              n = a.windowStartInitial + p * t;
              p = a.windowEndInitial + p * t;
              break;
            case 2:
              n = b(a.windowStartInitial + t, this._rangeStart, p - g.FlameChartBase.MIN_WINDOW_LEN);
              break;
            case 3:
              p = b(a.windowEndInitial + t, n + g.FlameChartBase.MIN_WINDOW_LEN, this._rangeEnd);
              break;
            default:
              return;
          }
          this._controller.setWindow(n, p);
        };
        a.prototype.onDragEnd = function(a, b, g, k, t, l) {
          this._dragInfo = null;
          this.onMouseMove(g, k);
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
      g.FlameChartHeader = r;
    })(r.Profiler || (r.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    (function(g) {
      (function(b) {
        var g = function() {
          function a(a, b, g, k, t) {
            this.pageLoaded = a;
            this.threadsTotal = b;
            this.threadsLoaded = g;
            this.threadFilesTotal = k;
            this.threadFilesLoaded = t;
          }
          a.prototype.toString = function() {
            return "[" + ["pageLoaded", "threadsTotal", "threadsLoaded", "threadFilesTotal", "threadFilesLoaded"].map(function(a, b, g) {
              return a + ":" + this[a];
            }, this).join(", ") + "]";
          };
          return a;
        }();
        b.TraceLoggerProgressInfo = g;
        var k = function() {
          function a(a) {
            this._baseUrl = a;
            this._threads = [];
            this._progressInfo = null;
          }
          a.prototype.loadPage = function(a, b, p) {
            this._threads = [];
            this._pageLoadCallback = b;
            this._pageLoadProgressCallback = p;
            this._progressInfo = new g(!1, 0, 0, 0, 0);
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
              var g = this, p = 0;
              a = a[0];
              var k = a.length;
              this._threads = Array(k);
              this._progressInfo.pageLoaded = !0;
              this._progressInfo.threadsTotal = k;
              for (var t = 0;t < a.length;t++) {
                var l = a[t], m = [l.dict, l.tree];
                l.corrections && m.push(l.corrections);
                this._progressInfo.threadFilesTotal += m.length;
                this._loadData(m, function(a) {
                  return function(e) {
                    e && (e = new b.Thread(e), e.buffer.name = "Thread " + a, g._threads[a] = e);
                    p++;
                    g._progressInfo.threadsLoaded++;
                    g._onProgress();
                    p === k && g._pageLoadCallback.call(g, null, g._threads);
                  };
                }(t), function(a) {
                  g._progressInfo.threadFilesLoaded++;
                  g._onProgress();
                });
              }
              this._onProgress();
            } else {
              this._pageLoadCallback.call(this, "Error loading page.", null);
            }
          };
          a.prototype._loadData = function(a, b, g) {
            var k = 0, t = 0, l = a.length, m = [];
            m.length = l;
            for (var d = 0;d < l;d++) {
              var e = this._baseUrl + a[d], f = new XMLHttpRequest, c = /\.tl$/i.test(e) ? "arraybuffer" : "json";
              f.open("GET", e, !0);
              f.responseType = c;
              f.onload = function(c, f) {
                return function(a) {
                  if ("json" === f) {
                    if (a = this.response, "string" === typeof a) {
                      try {
                        a = JSON.parse(a), m[c] = a;
                      } catch (e) {
                        t++;
                      }
                    } else {
                      m[c] = a;
                    }
                  } else {
                    m[c] = this.response;
                  }
                  ++k;
                  g && g(k);
                  k === l && b(m);
                };
              }(d, c);
              f.send();
            }
          };
          a.colors = "#0044ff #8c4b00 #cc5c33 #ff80c4 #ffbfd9 #ff8800 #8c5e00 #adcc33 #b380ff #bfd9ff #ffaa00 #8c0038 #bf8f30 #f780ff #cc99c9 #aaff00 #000073 #452699 #cc8166 #cca799 #000066 #992626 #cc6666 #ccc299 #ff6600 #526600 #992663 #cc6681 #99ccc2 #ff0066 #520066 #269973 #61994d #739699 #ffcc00 #006629 #269199 #94994d #738299 #ff0000 #590000 #234d8c #8c6246 #7d7399 #ee00ff #00474d #8c2385 #8c7546 #7c8c69 #eeff00 #4d003d #662e1a #62468c #8c6969 #6600ff #4c2900 #1a6657 #8c464f #8c6981 #44ff00 #401100 #1a2466 #663355 #567365 #d90074 #403300 #101d40 #59562d #66614d #cc0000 #002b40 #234010 #4c2626 #4d5e66 #00a3cc #400011 #231040 #4c3626 #464359 #0000bf #331b00 #80e6ff #311a33 #4d3939 #a69b00 #003329 #80ffb2 #331a20 #40303d #00a658 #40ffd9 #ffc480 #ffe1bf #332b26 #8c2500 #9933cc #80fff6 #ffbfbf #303326 #005e8c #33cc47 #b2ff80 #c8bfff #263332 #00708c #cc33ad #ffe680 #f2ffbf #262a33 #388c00 #335ccc #8091ff #bfffd9".split(" ");
          return a;
        }();
        b.TraceLogger = k;
      })(g.TraceLogger || (g.TraceLogger = {}));
    })(k.Profiler || (k.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    (function(g) {
      (function(b) {
        var k;
        (function(b) {
          b[b.START_HI = 0] = "START_HI";
          b[b.START_LO = 4] = "START_LO";
          b[b.STOP_HI = 8] = "STOP_HI";
          b[b.STOP_LO = 12] = "STOP_LO";
          b[b.TEXTID = 16] = "TEXTID";
          b[b.NEXTID = 20] = "NEXTID";
        })(k || (k = {}));
        k = function() {
          function b(a) {
            2 <= a.length && (this._text = a[0], this._data = new DataView(a[1]), this._buffer = new g.TimelineBuffer, this._walkTree(0));
          }
          Object.defineProperty(b.prototype, "buffer", {get:function() {
            return this._buffer;
          }, enumerable:!0, configurable:!0});
          b.prototype._walkTree = function(a) {
            var h = this._data, g = this._buffer;
            do {
              var p = a * b.ITEM_SIZE, k = 4294967295 * h.getUint32(p + 0) + h.getUint32(p + 4), t = 4294967295 * h.getUint32(p + 8) + h.getUint32(p + 12), l = h.getUint32(p + 16), p = h.getUint32(p + 20), u = 1 === (l & 1), l = l >>> 1, l = this._text[l];
              g.enter(l, null, k / 1E6);
              u && this._walkTree(a + 1);
              g.leave(l, null, t / 1E6);
              a = p;
            } while (0 !== a);
          };
          b.ITEM_SIZE = 24;
          return b;
        }();
        b.Thread = k;
      })(g.TraceLogger || (g.TraceLogger = {}));
    })(k.Profiler || (k.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(g) {
      var b = k.NumberUtilities.clamp, r = function() {
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
      g.Buffer = r;
      var m = function() {
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
          this.buffer = new r;
          a.addEventListener("keydown", function(a) {
            var h = 0;
            switch(a.keyCode) {
              case q:
                this.showLineNumbers = !this.showLineNumbers;
                break;
              case A:
                this.showLineTime = !this.showLineTime;
                break;
              case l:
                h = -1;
                break;
              case m:
                h = 1;
                break;
              case b:
                h = -this.pageLineCount;
                break;
              case g:
                h = this.pageLineCount;
                break;
              case k:
                h = -this.lineIndex;
                break;
              case t:
                h = this.buffer.length - this.lineIndex;
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
                a.metaKey && (this.selection = {start:0, end:this.buffer.length}, a.preventDefault());
                break;
              case c:
                if (a.metaKey) {
                  var W = "";
                  if (this.selection) {
                    for (var S = this.selection.start;S <= this.selection.end;S++) {
                      W += this.buffer.get(S) + "\n";
                    }
                  } else {
                    W = this.buffer.get(this.lineIndex);
                  }
                  alert(W);
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
          var b = 33, g = 34, k = 36, t = 35, l = 38, m = 40, d = 37, e = 39, f = 65, c = 67, q = 78, A = 84;
        }
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
          var b = this.textMarginLeft, g = b + (this.showLineNumbers ? 5 * (String(this.buffer.length).length + 2) : 0), k = g + (this.showLineTime ? 40 : 10), t = k + 25;
          this.context.font = this.fontSize + 'px Consolas, "Liberation Mono", Courier, monospace';
          this.context.setTransform(this.ratio, 0, 0, this.ratio, 0, 0);
          for (var l = this.canvas.width, m = this.lineHeight, d = 0;d < a;d++) {
            var e = d * this.lineHeight, f = this.pageIndex + d, c = this.buffer.get(f), q = this.buffer.getFormat(f), A = this.buffer.getRepeat(f), J = 1 < f ? this.buffer.getTime(f) - this.buffer.getTime(0) : 0;
            this.context.fillStyle = f % 2 ? this.lineColor : this.alternateLineColor;
            q && q.backgroundFillStyle && (this.context.fillStyle = q.backgroundFillStyle);
            this.context.fillRect(0, e, l, m);
            this.context.fillStyle = this.selectionTextColor;
            this.context.fillStyle = this.textColor;
            this.selection && f >= this.selection.start && f <= this.selection.end && (this.context.fillStyle = this.selectionColor, this.context.fillRect(0, e, l, m), this.context.fillStyle = this.selectionTextColor);
            this.hasFocus && f === this.lineIndex && (this.context.fillStyle = this.selectionColor, this.context.fillRect(0, e, l, m), this.context.fillStyle = this.selectionTextColor);
            0 < this.columnIndex && (c = c.substring(this.columnIndex));
            e = (d + 1) * this.lineHeight - this.textMarginBottom;
            this.showLineNumbers && this.context.fillText(String(f), b, e);
            this.showLineTime && this.context.fillText(J.toFixed(1).padLeft(" ", 6), g, e);
            1 < A && this.context.fillText(String(A).padLeft(" ", 3), k, e);
            this.context.fillText(c, t, e);
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
      g.Terminal = m;
    })(r.Terminal || (r.Terminal = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
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
            var h = 1 * (performance.now() - this._lastTime) + 0 * this._lastWeightedTime, g = this._context, k = 2 * this._ratio, w = 30 * this._ratio, t = performance;
            t.memory && (w += 30 * this._ratio);
            var l = (this._canvas.width - w) / (k + 1) | 0, u = this._index++;
            this._index > l && (this._index = 0);
            l = this._canvas.height;
            g.globalAlpha = 1;
            g.fillStyle = "black";
            g.fillRect(w + u * (k + 1), 0, 4 * k, this._canvas.height);
            var d = Math.min(1E3 / 60 / h, 1);
            g.fillStyle = "#00FF00";
            g.globalAlpha = b ? .5 : 1;
            d = l / 2 * d | 0;
            g.fillRect(w + u * (k + 1), l - d, k, d);
            a && (d = Math.min(1E3 / 240 / a, 1), g.fillStyle = "#FF6347", d = l / 2 * d | 0, g.fillRect(w + u * (k + 1), l / 2 - d, k, d));
            0 === u % 16 && (g.globalAlpha = 1, g.fillStyle = "black", g.fillRect(0, 0, w, this._canvas.height), g.fillStyle = "white", g.font = 8 * this._ratio + "px Arial", g.textBaseline = "middle", k = (1E3 / h).toFixed(0), a && (k += " " + a.toFixed(0)), t.memory && (k += " " + (t.memory.usedJSHeapSize / 1024 / 1024).toFixed(2)), g.fillText(k, 2 * this._ratio, this._containerHeight / 2 * this._ratio));
            this._lastTime = performance.now();
            this._lastWeightedTime = h;
          }
        };
        return b;
      }();
      g.FPS = b;
    })(k.Mini || (k.Mini = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
console.timeEnd("Load Shared Dependencies");
console.time("Load GFX Dependencies");
(function(k) {
  (function(r) {
    function g(c, f, a) {
      return n && a ? "string" === typeof f ? (c = k.ColorUtilities.cssStyleToRGBA(f), k.ColorUtilities.rgbaToCSSStyle(a.transformRGBA(c))) : f instanceof CanvasGradient && f._template ? f._template.createCanvasGradient(c, a) : f : f;
    }
    var b = k.NumberUtilities.clamp;
    (function(c) {
      c[c.None = 0] = "None";
      c[c.Brief = 1] = "Brief";
      c[c.Verbose = 2] = "Verbose";
    })(r.TraceLevel || (r.TraceLevel = {}));
    var v = k.Metrics.Counter.instance;
    r.frameCounter = new k.Metrics.Counter(!0);
    r.traceLevel = 2;
    r.writer = null;
    r.frameCount = function(c) {
      v.count(c);
      r.frameCounter.count(c);
    };
    r.timelineBuffer = new k.Tools.Profiler.TimelineBuffer("GFX");
    r.enterTimeline = function(c, f) {
    };
    r.leaveTimeline = function(c, f) {
    };
    var m = null, a = null, h = null, n = !0;
    n && "undefined" !== typeof CanvasRenderingContext2D && (m = CanvasGradient.prototype.addColorStop, a = CanvasRenderingContext2D.prototype.createLinearGradient, h = CanvasRenderingContext2D.prototype.createRadialGradient, CanvasRenderingContext2D.prototype.createLinearGradient = function(c, f, a, e) {
      return (new w(c, f, a, e)).createCanvasGradient(this, null);
    }, CanvasRenderingContext2D.prototype.createRadialGradient = function(c, f, a, e, d, b) {
      return (new t(c, f, a, e, d, b)).createCanvasGradient(this, null);
    }, CanvasGradient.prototype.addColorStop = function(c, f) {
      m.call(this, c, f);
      this._template.addColorStop(c, f);
    });
    var p = function() {
      return function(c, f) {
        this.offset = c;
        this.color = f;
      };
    }(), w = function() {
      function c(f, a, e, d) {
        this.x0 = f;
        this.y0 = a;
        this.x1 = e;
        this.y1 = d;
        this.colorStops = [];
      }
      c.prototype.addColorStop = function(c, f) {
        this.colorStops.push(new p(c, f));
      };
      c.prototype.createCanvasGradient = function(c, f) {
        for (var e = a.call(c, this.x0, this.y0, this.x1, this.y1), d = this.colorStops, b = 0;b < d.length;b++) {
          var q = d[b], h = q.offset, q = q.color, q = f ? g(c, q, f) : q;
          m.call(e, h, q);
        }
        e._template = this;
        e._transform = this._transform;
        return e;
      };
      return c;
    }(), t = function() {
      function c(f, a, e, d, b, q) {
        this.x0 = f;
        this.y0 = a;
        this.r0 = e;
        this.x1 = d;
        this.y1 = b;
        this.r1 = q;
        this.colorStops = [];
      }
      c.prototype.addColorStop = function(c, f) {
        this.colorStops.push(new p(c, f));
      };
      c.prototype.createCanvasGradient = function(c, f) {
        for (var a = h.call(c, this.x0, this.y0, this.r0, this.x1, this.y1, this.r1), e = this.colorStops, d = 0;d < e.length;d++) {
          var b = e[d], q = b.offset, b = b.color, b = f ? g(c, b, f) : b;
          m.call(a, q, b);
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
    var u = function() {
      function c(f) {
        this._commands = new Uint8Array(c._arrayBufferPool.acquire(8), 0, 8);
        this._commandPosition = 0;
        this._data = new Float64Array(c._arrayBufferPool.acquire(8 * Float64Array.BYTES_PER_ELEMENT), 0, 8);
        this._dataPosition = 0;
        f instanceof c && this.addPath(f);
      }
      c._apply = function(c, f) {
        var a = c._commands, e = c._data, d = 0, b = 0;
        f.beginPath();
        for (var q = c._commandPosition;d < q;) {
          switch(a[d++]) {
            case 1:
              f.closePath();
              break;
            case 2:
              f.moveTo(e[b++], e[b++]);
              break;
            case 3:
              f.lineTo(e[b++], e[b++]);
              break;
            case 4:
              f.quadraticCurveTo(e[b++], e[b++], e[b++], e[b++]);
              break;
            case 5:
              f.bezierCurveTo(e[b++], e[b++], e[b++], e[b++], e[b++], e[b++]);
              break;
            case 6:
              f.arcTo(e[b++], e[b++], e[b++], e[b++], e[b++]);
              break;
            case 7:
              f.rect(e[b++], e[b++], e[b++], e[b++]);
              break;
            case 8:
              f.arc(e[b++], e[b++], e[b++], e[b++], e[b++], !!e[b++]);
              break;
            case 9:
              f.save();
              break;
            case 10:
              f.restore();
              break;
            case 11:
              f.transform(e[b++], e[b++], e[b++], e[b++], e[b++], e[b++]);
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
      c.prototype._writeData = function(c, f, a, e, d, b) {
        var q = arguments.length;
        this._dataPosition + q >= this._data.length && this._ensureDataCapacity(this._dataPosition + q);
        var h = this._data, l = this._dataPosition;
        h[l] = c;
        h[l + 1] = f;
        2 < q && (h[l + 2] = a, h[l + 3] = e, 4 < q && (h[l + 4] = d, 6 === q && (h[l + 5] = b)));
        this._dataPosition += q;
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
      c.prototype.quadraticCurveTo = function(c, f, a, e) {
        this._writeCommand(4);
        this._writeData(c, f, a, e);
      };
      c.prototype.bezierCurveTo = function(c, f, a, e, d, b) {
        this._writeCommand(5);
        this._writeData(c, f, a, e, d, b);
      };
      c.prototype.arcTo = function(c, f, a, e, d) {
        this._writeCommand(6);
        this._writeData(c, f, a, e, d);
      };
      c.prototype.rect = function(c, f, a, e) {
        this._writeCommand(7);
        this._writeData(c, f, a, e);
      };
      c.prototype.arc = function(c, f, a, e, d, b) {
        this._writeCommand(8);
        this._writeData(c, f, a, e, d, +b);
      };
      c.prototype.addPath = function(c, f) {
        f && (this._writeCommand(9), this._writeCommand(11), this._writeData(f.a, f.b, f.c, f.d, f.e, f.f));
        var a = this._commandPosition + c._commandPosition;
        a >= this._commands.length && this._ensureCommandCapacity(a);
        for (var e = this._commands, d = c._commands, b = this._commandPosition, q = 0;b < a;b++) {
          e[b] = d[q++];
        }
        this._commandPosition = a;
        a = this._dataPosition + c._dataPosition;
        a >= this._data.length && this._ensureDataCapacity(a);
        e = this._data;
        d = c._data;
        b = this._dataPosition;
        for (q = 0;b < a;b++) {
          e[b] = d[q++];
        }
        this._dataPosition = a;
        f && this._writeCommand(10);
      };
      c._arrayBufferPool = new k.ArrayBufferPool;
      return c;
    }();
    r.Path = u;
    if ("undefined" !== typeof CanvasRenderingContext2D && ("undefined" === typeof Path2D || !Path2D.prototype.addPath)) {
      var d = CanvasRenderingContext2D.prototype.fill;
      CanvasRenderingContext2D.prototype.fill = function(c, f) {
        arguments.length && (c instanceof u ? u._apply(c, this) : f = c);
        f ? d.call(this, f) : d.call(this);
      };
      var e = CanvasRenderingContext2D.prototype.stroke;
      CanvasRenderingContext2D.prototype.stroke = function(c, f) {
        arguments.length && (c instanceof u ? u._apply(c, this) : f = c);
        f ? e.call(this, f) : e.call(this);
      };
      var f = CanvasRenderingContext2D.prototype.clip;
      CanvasRenderingContext2D.prototype.clip = function(c, a) {
        arguments.length && (c instanceof u ? u._apply(c, this) : a = c);
        a ? f.call(this, a) : f.call(this);
      };
      window.Path2D = u;
    }
    if ("undefined" !== typeof CanvasPattern && Path2D.prototype.addPath) {
      l = function(c) {
        this._transform = c;
        this._template && (this._template._transform = c);
      };
      CanvasPattern.prototype.setTransform || (CanvasPattern.prototype.setTransform = l);
      CanvasGradient.prototype.setTransform || (CanvasGradient.prototype.setTransform = l);
      var c = CanvasRenderingContext2D.prototype.fill, q = CanvasRenderingContext2D.prototype.stroke;
      CanvasRenderingContext2D.prototype.fill = function(f, a) {
        var e = !!this.fillStyle._transform;
        if ((this.fillStyle instanceof CanvasPattern || this.fillStyle instanceof CanvasGradient) && e && f instanceof Path2D) {
          var e = this.fillStyle._transform, d;
          try {
            d = e.inverse();
          } catch (b) {
            d = e = r.Geometry.Matrix.createIdentitySVGMatrix();
          }
          this.transform(e.a, e.b, e.c, e.d, e.e, e.f);
          e = new Path2D;
          e.addPath(f, d);
          c.call(this, e, a);
          this.transform(d.a, d.b, d.c, d.d, d.e, d.f);
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
          var e = this.lineWidth;
          this.lineWidth *= (f.a + f.d) / 2;
          q.call(this, a);
          this.transform(f.a, f.b, f.c, f.d, f.e, f.f);
          this.lineWidth = e;
        } else {
          0 === arguments.length ? q.call(this) : 1 === arguments.length && q.call(this, c);
        }
      };
    }
    "undefined" !== typeof CanvasRenderingContext2D && function() {
      function c() {
        return r.Geometry.Matrix.createSVGMatrixFromArray(this.mozCurrentTransform);
      }
      var f = "currentTransform" in CanvasRenderingContext2D.prototype;
      CanvasRenderingContext2D.prototype.flashStroke = function(c, a) {
        if (f) {
          var e = this.currentTransform, d = new Path2D;
          d.addPath(c, e);
          var q = this.lineWidth;
          this.setTransform(1, 0, 0, 1, 0, 0);
          switch(a) {
            case 1:
              this.lineWidth = b(q * (k.getScaleX(e) + k.getScaleY(e)) / 2, 1, 1024);
              break;
            case 2:
              this.lineWidth = b(q * k.getScaleY(e), 1, 1024);
              break;
            case 3:
              this.lineWidth = b(q * k.getScaleX(e), 1, 1024);
          }
          this.stroke(d);
          this.setTransform(e.a, e.b, e.c, e.d, e.e, e.f);
          this.lineWidth = q;
        } else {
          this.stroke(c);
        }
      };
      if (!f) {
        if ("mozCurrentTransform" in CanvasRenderingContext2D.prototype) {
          Object.defineProperty(CanvasRenderingContext2D.prototype, "currentTransform", {get:c}), f = !0;
        } else {
          var a = CanvasRenderingContext2D.prototype.setTransform;
          CanvasRenderingContext2D.prototype.setTransform = function(c, f, e, d, b, q) {
            var h = this.currentTransform;
            h.a = c;
            h.b = f;
            h.c = e;
            h.d = d;
            h.e = b;
            h.f = q;
            a.call(this, c, f, e, d, b, q);
          };
          Object.defineProperty(CanvasRenderingContext2D.prototype, "currentTransform", {get:function() {
            return this._currentTransform || (this._currentTransform = r.Geometry.Matrix.createIdentitySVGMatrix());
          }});
        }
      }
    }();
    if ("undefined" !== typeof CanvasRenderingContext2D && void 0 === CanvasRenderingContext2D.prototype.globalColorMatrix) {
      var A = CanvasRenderingContext2D.prototype.fill, J = CanvasRenderingContext2D.prototype.stroke, G = CanvasRenderingContext2D.prototype.fillText, W = CanvasRenderingContext2D.prototype.strokeText;
      Object.defineProperty(CanvasRenderingContext2D.prototype, "globalColorMatrix", {get:function() {
        return this._globalColorMatrix ? this._globalColorMatrix.clone() : null;
      }, set:function(c) {
        c ? this._globalColorMatrix ? this._globalColorMatrix.set(c) : this._globalColorMatrix = c.clone() : this._globalColorMatrix = null;
      }, enumerable:!0, configurable:!0});
      CanvasRenderingContext2D.prototype.fill = function(c, f) {
        var a = null;
        this._globalColorMatrix && (a = this.fillStyle, this.fillStyle = g(this, this.fillStyle, this._globalColorMatrix));
        0 === arguments.length ? A.call(this) : 1 === arguments.length ? A.call(this, c) : 2 === arguments.length && A.call(this, c, f);
        a && (this.fillStyle = a);
      };
      CanvasRenderingContext2D.prototype.stroke = function(c, f) {
        var a = null;
        this._globalColorMatrix && (a = this.strokeStyle, this.strokeStyle = g(this, this.strokeStyle, this._globalColorMatrix));
        0 === arguments.length ? J.call(this) : 1 === arguments.length && J.call(this, c);
        a && (this.strokeStyle = a);
      };
      CanvasRenderingContext2D.prototype.fillText = function(c, f, a, e) {
        var d = null;
        this._globalColorMatrix && (d = this.fillStyle, this.fillStyle = g(this, this.fillStyle, this._globalColorMatrix));
        3 === arguments.length ? G.call(this, c, f, a) : 4 === arguments.length ? G.call(this, c, f, a, e) : k.Debug.unexpected();
        d && (this.fillStyle = d);
      };
      CanvasRenderingContext2D.prototype.strokeText = function(c, f, a, e) {
        var d = null;
        this._globalColorMatrix && (d = this.strokeStyle, this.strokeStyle = g(this, this.strokeStyle, this._globalColorMatrix));
        3 === arguments.length ? W.call(this, c, f, a) : 4 === arguments.length ? W.call(this, c, f, a, e) : k.Debug.unexpected();
        d && (this.strokeStyle = d);
      };
    }
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    k.ScreenShot = function() {
      return function(g, b, k) {
        this.dataURL = g;
        this.w = b;
        this.h = k;
      };
    }();
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  var r = function() {
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
      for (var k = g ? this._head : this._tail;k && b(k);) {
        k = g ? k.next : k.previous;
      }
    };
    return g;
  }();
  k.LRUList = r;
  k.getScaleX = function(g) {
    return g.a;
  };
  k.getScaleY = function(g) {
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
GFX$$inline_40.filters = canvas2DOptions$$inline_47.register(new Option$$inline_41("", "filters", "boolean", !1, ""));
GFX$$inline_40.cacheShapes = canvas2DOptions$$inline_47.register(new Option$$inline_41("", "cacheShapes", "boolean", !0, ""));
GFX$$inline_40.cacheShapesMaxSize = canvas2DOptions$$inline_47.register(new Option$$inline_41("", "cacheShapesMaxSize", "number", 256, "", {range:{min:1, max:1024, step:1}}));
GFX$$inline_40.cacheShapesThreshold = canvas2DOptions$$inline_47.register(new Option$$inline_41("", "cacheShapesThreshold", "number", 256, "", {range:{min:1, max:1024, step:1}}));
(function(k) {
  (function(r) {
    (function(g) {
      function b(a, f, c, d) {
        var b = 1 - d;
        return a * b * b + 2 * f * b * d + c * d * d;
      }
      function v(a, f, c, d, b) {
        var h = b * b, l = 1 - b, g = l * l;
        return a * l * g + 3 * f * b * g + 3 * c * l * h + d * b * h;
      }
      var m = k.NumberUtilities.clamp, a = k.NumberUtilities.pow2, h = k.NumberUtilities.epsilonEquals;
      g.radianToDegrees = function(a) {
        return 180 * a / Math.PI;
      };
      g.degreesToRadian = function(a) {
        return a * Math.PI / 180;
      };
      g.quadraticBezier = b;
      g.quadraticBezierExtreme = function(a, f, c) {
        var d = (a - f) / (a - 2 * f + c);
        return 0 > d ? a : 1 < d ? c : b(a, f, c, d);
      };
      g.cubicBezier = v;
      g.cubicBezierExtremes = function(a, f, c, d) {
        var b = f - a, h;
        h = 2 * (c - f);
        var l = d - c;
        b + l === h && (l *= 1.0001);
        var g = 2 * b - h, k = h - 2 * b, k = Math.sqrt(k * k - 4 * b * (b - h + l));
        h = 2 * (b - h + l);
        b = (g + k) / h;
        g = (g - k) / h;
        k = [];
        0 <= b && 1 >= b && k.push(v(a, f, c, d, b));
        0 <= g && 1 >= g && k.push(v(a, f, c, d, g));
        return k;
      };
      var n = function() {
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
          var e = f.y * a.x - f.x * a.y + (a.y - f.y) * this.x + (f.x - a.x) * this.y, d = f.x * c.y - f.y * c.x + (f.y - c.y) * this.x + (c.x - f.x) * this.y;
          if (0 > e != 0 > d) {
            return !1;
          }
          f = -c.y * a.x + f.y * (a.x - c.x) + f.x * (c.y - a.y) + c.x * a.y;
          0 > f && (e = -e, d = -d, f = -f);
          return 0 < e && 0 < d && e + d < f;
        };
        a.createEmpty = function() {
          return new a(0, 0);
        };
        a.createEmptyPoints = function(f) {
          for (var c = [], d = 0;d < f;d++) {
            c.push(new a(0, 0));
          }
          return c;
        };
        return a;
      }();
      g.Point = n;
      var p = function() {
        function a(f, c, e) {
          this.x = f;
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
        a.createEmptyPoints = function(f) {
          for (var c = [], d = 0;d < f;d++) {
            c.push(new a(0, 0, 0));
          }
          return c;
        };
        return a;
      }();
      g.Point3D = p;
      var w = function() {
        function a(f, c, d, b) {
          this.setElements(f, c, d, b);
          a.allocationCount++;
        }
        a.prototype.setElements = function(a, c, e, d) {
          this.x = a;
          this.y = c;
          this.w = e;
          this.h = d;
        };
        a.prototype.set = function(a) {
          this.x = a.x;
          this.y = a.y;
          this.w = a.w;
          this.h = a.h;
        };
        a.prototype.contains = function(a) {
          var c = a.x + a.w, e = a.y + a.h, d = this.x + this.w, b = this.y + this.h;
          return a.x >= this.x && a.x < d && a.y >= this.y && a.y < b && c > this.x && c <= d && e > this.y && e <= b;
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
              var d = this.x + this.w;
              d < a.x + a.w && (d = a.x + a.w);
              var b = this.y + this.h;
              b < a.y + a.h && (b = a.y + a.h);
              this.x = c;
              this.y = e;
              this.w = d - c;
              this.h = b - e;
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
          var c = Math.max(this.x, a.x), e = Math.max(this.y, a.y), c = Math.min(this.x + this.w, a.x + a.w) - c;
          a = Math.min(this.y + this.h, a.y + a.h) - e;
          return !(0 >= c || 0 >= a);
        };
        a.prototype.intersectsTransformedAABB = function(f, c) {
          var d = a._temporary;
          d.set(f);
          c.transformRectangleAABB(d);
          return this.intersects(d);
        };
        a.prototype.intersectsTranslated = function(a, c, e) {
          if (this.isEmpty() || a.isEmpty()) {
            return !1;
          }
          var d = Math.max(this.x, a.x + c), b = Math.max(this.y, a.y + e);
          c = Math.min(this.x + this.w, a.x + c + a.w) - d;
          a = Math.min(this.y + this.h, a.y + e + a.h) - b;
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
          return new n(this.x + this.w / 2, this.y + this.h / 2);
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
        a.createSquare = function() {
          return new a(-512, -512, 1024, 1024);
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
      g.Rectangle = w;
      var t = function() {
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
          for (var c = new n(Number.MAX_VALUE, Number.MAX_VALUE), e = new n(Number.MIN_VALUE, Number.MIN_VALUE), d = 0;4 > d;d++) {
            var b = a[d].x, h = a[d].y;
            c.x = Math.min(c.x, b);
            c.y = Math.min(c.y, h);
            e.x = Math.max(e.x, b);
            e.y = Math.max(e.y, h);
          }
          return new w(c.x, c.y, e.x - c.x, e.y - c.y);
        };
        a.prototype.intersects = function(a) {
          return this.intersectsOneWay(a) && a.intersectsOneWay(this);
        };
        a.prototype.intersectsOneWay = function(a) {
          for (var c = 0;2 > c;c++) {
            for (var e = 0;4 > e;e++) {
              var d = a.corners[e].dot(this.axes[c]), b, h;
              0 === e ? h = b = d : d < b ? b = d : d > h && (h = d);
            }
            if (b > 1 + this.origins[c] || h < this.origins[c]) {
              return !1;
            }
          }
          return !0;
        };
        return a;
      }();
      g.OBB = t;
      (function(a) {
        a[a.Unknown = 0] = "Unknown";
        a[a.Identity = 1] = "Identity";
        a[a.Translation = 2] = "Translation";
      })(g.MatrixType || (g.MatrixType = {}));
      var l = function() {
        function a(f, c, d, b, h, l) {
          this._data = new Float64Array(6);
          this._type = 0;
          this.setElements(f, c, d, b, h, l);
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
        a.prototype.setElements = function(a, c, e, d, b, h) {
          var l = this._data;
          l[0] = a;
          l[1] = c;
          l[2] = e;
          l[3] = d;
          l[4] = b;
          l[5] = h;
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
        a.prototype.transform = function(a, c, e, d, b, h) {
          var l = this._data, g = l[0], k = l[1], n = l[2], t = l[3], p = l[4], m = l[5];
          l[0] = g * a + n * c;
          l[1] = k * a + t * c;
          l[2] = g * e + n * d;
          l[3] = k * e + t * d;
          l[4] = g * b + n * h + p;
          l[5] = k * b + t * h + m;
          this._type = 0;
          return this;
        };
        a.prototype.transformRectangle = function(a, c) {
          var e = this._data, d = e[0], b = e[1], h = e[2], l = e[3], g = e[4], e = e[5], k = a.x, n = a.y, t = a.w, p = a.h;
          c[0].x = d * k + h * n + g;
          c[0].y = b * k + l * n + e;
          c[1].x = d * (k + t) + h * n + g;
          c[1].y = b * (k + t) + l * n + e;
          c[2].x = d * (k + t) + h * (n + p) + g;
          c[2].y = b * (k + t) + l * (n + p) + e;
          c[3].x = d * k + h * (n + p) + g;
          c[3].y = b * k + l * (n + p) + e;
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
              var e = c[0], d = c[1], b = c[2], h = c[3], l = c[4], g = c[5], k = a.x, n = a.y, t = a.w, p = a.h, c = e * k + b * n + l, m = d * k + h * n + g, u = e * (k + t) + b * n + l, w = d * (k + t) + h * n + g, r = e * (k + t) + b * (n + p) + l, t = d * (k + t) + h * (n + p) + g, e = e * k + b * (n + p) + l, d = d * k + h * (n + p) + g, h = 0;
              c > u && (h = c, c = u, u = h);
              r > e && (h = r, r = e, e = h);
              a.x = c < r ? c : r;
              a.w = (u > e ? u : e) - a.x;
              m > w && (h = m, m = w, w = h);
              t > d && (h = t, t = d, d = h);
              a.y = m < t ? m : t;
              a.h = (w > d ? w : d) - a.y;
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
          var c = this._data, e = c[0], d = c[1], b = c[2], h = c[3], l = c[4], g = c[5], k = Math.cos(a);
          a = Math.sin(a);
          c[0] = k * e - a * d;
          c[1] = a * e + k * d;
          c[2] = k * b - a * h;
          c[3] = a * b + k * h;
          c[4] = k * l - a * g;
          c[5] = a * l + k * g;
          this._type = 0;
          return this;
        };
        a.prototype.concat = function(a) {
          if (1 === a._type) {
            return this;
          }
          var c = this._data;
          a = a._data;
          var e = c[0] * a[0], d = 0, b = 0, h = c[3] * a[3], l = c[4] * a[0] + a[4], g = c[5] * a[3] + a[5];
          if (0 !== c[1] || 0 !== c[2] || 0 !== a[1] || 0 !== a[2]) {
            e += c[1] * a[2], h += c[2] * a[1], d += c[0] * a[1] + c[1] * a[3], b += c[2] * a[0] + c[3] * a[2], l += c[5] * a[2], g += c[4] * a[1];
          }
          c[0] = e;
          c[1] = d;
          c[2] = b;
          c[3] = h;
          c[4] = l;
          c[5] = g;
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
              var d = 0, b = 0, h = e[3] * c[3], l = e[4] * c[0] + c[4], g = e[5] * c[3] + c[5];
              if (0 !== e[1] || 0 !== e[2] || 0 !== c[1] || 0 !== c[2]) {
                a += e[1] * c[2], h += e[2] * c[1], d += e[0] * c[1] + e[1] * c[3], b += e[2] * c[0] + e[3] * c[2], l += e[5] * c[2], g += e[4] * c[1];
              }
              c[0] = a;
              c[1] = d;
              c[2] = b;
              c[3] = h;
              c[4] = l;
              c[5] = g;
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
            var c = this._data, e = a.x, d = a.y;
            a.x = c[0] * e + c[2] * d + c[4];
            a.y = c[1] * e + c[3] * d + c[5];
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
            var c = this._data, e = a.x, d = a.y;
            a.x = c[0] * e + c[2] * d;
            a.y = c[1] * e + c[3] * d;
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
              var d = c[1], b = c[2], h = c[4], l = c[5];
              if (0 === d && 0 === b) {
                var g = e[0] = 1 / c[0], c = e[3] = 1 / c[3];
                e[1] = 0;
                e[2] = 0;
                e[4] = -g * h;
                e[5] = -c * l;
              } else {
                var g = c[0], c = c[3], k = g * c - d * b;
                if (0 === k) {
                  a.setIdentity();
                  return;
                }
                k = 1 / k;
                e[0] = c * k;
                d = e[1] = -d * k;
                b = e[2] = -b * k;
                c = e[3] = g * k;
                e[4] = -(e[0] * h + b * l);
                e[5] = -(d * h + c * l);
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
          var f = a.allocate();
          f.setIdentity();
          return f;
        };
        a.prototype.toSVGMatrix = function() {
          var f = this._data, c = a._createSVGMatrix();
          try {
            c.a = f[0], c.b = f[1], c.c = f[2], c.d = f[3], c.e = f[4], c.f = f[5];
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
        a.createSVGMatrixFromArray = function(f) {
          var c = a._createSVGMatrix();
          c.a = f[0];
          c.b = f[1];
          c.c = f[2];
          c.d = f[3];
          c.e = f[4];
          c.f = f[5];
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
      g.Matrix = l;
      l = function() {
        function a(f) {
          this._m = new Float32Array(f);
        }
        a.prototype.asWebGLMatrix = function() {
          return this._m;
        };
        a.createCameraLookAt = function(f, c, d) {
          c = f.clone().sub(c).normalize();
          d = d.clone().cross(c).normalize();
          var b = c.clone().cross(d);
          return new a([d.x, d.y, d.z, 0, b.x, b.y, b.z, 0, c.x, c.y, c.z, 0, f.x, f.y, f.z, 1]);
        };
        a.createLookAt = function(f, c, d) {
          c = f.clone().sub(c).normalize();
          d = d.clone().cross(c).normalize();
          var b = c.clone().cross(d);
          return new a([d.x, b.x, c.x, 0, b.x, b.y, c.y, 0, c.x, b.z, c.z, 0, -d.dot(f), -b.dot(f), -c.dot(f), 1]);
        };
        a.prototype.mul = function(a) {
          a = [a.x, a.y, a.z, 0];
          for (var c = this._m, e = [], d = 0;4 > d;d++) {
            e[d] = 0;
            for (var b = 4 * d, h = 0;4 > h;h++) {
              e[d] += c[b + h] * a[h];
            }
          }
          return new p(e[0], e[1], e[2]);
        };
        a.create2DProjection = function(f, c, d) {
          return new a([2 / f, 0, 0, 0, 0, -2 / c, 0, 0, 0, 0, 2 / d, 0, -1, 1, 0, 1]);
        };
        a.createPerspective = function(f) {
          f = Math.tan(.5 * Math.PI - .5 * f);
          var c = 1 / -4999.9;
          return new a([f / 1, 0, 0, 0, 0, f, 0, 0, 0, 0, 5000.1 * c, -1, 0, 0, 1E3 * c, 0]);
        };
        a.createIdentity = function() {
          return a.createTranslation(0, 0);
        };
        a.createTranslation = function(f, c) {
          return new a([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, f, c, 0, 1]);
        };
        a.createXRotation = function(f) {
          var c = Math.cos(f);
          f = Math.sin(f);
          return new a([1, 0, 0, 0, 0, c, f, 0, 0, -f, c, 0, 0, 0, 0, 1]);
        };
        a.createYRotation = function(f) {
          var c = Math.cos(f);
          f = Math.sin(f);
          return new a([c, 0, -f, 0, 0, 1, 0, 0, f, 0, c, 0, 0, 0, 0, 1]);
        };
        a.createZRotation = function(f) {
          var c = Math.cos(f);
          f = Math.sin(f);
          return new a([c, f, 0, 0, -f, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        };
        a.createScale = function(f, c, d) {
          return new a([f, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0, 0, 1]);
        };
        a.createMultiply = function(f, c) {
          var d = f._m, b = c._m, h = d[0], l = d[1], g = d[2], k = d[3], n = d[4], t = d[5], p = d[6], m = d[7], u = d[8], w = d[9], r = d[10], v = d[11], y = d[12], z = d[13], C = d[14], d = d[15], x = b[0], F = b[1], B = b[2], E = b[3], I = b[4], K = b[5], L = b[6], M = b[7], N = b[8], O = b[9], P = b[10], Q = b[11], T = b[12], U = b[13], V = b[14], b = b[15];
          return new a([h * x + l * I + g * N + k * T, h * F + l * K + g * O + k * U, h * B + l * L + g * P + k * V, h * E + l * M + g * Q + k * b, n * x + t * I + p * N + m * T, n * F + t * K + p * O + m * U, n * B + t * L + p * P + m * V, n * E + t * M + p * Q + m * b, u * x + w * I + r * N + v * T, u * F + w * K + r * O + v * U, u * B + w * L + r * P + v * V, u * E + w * M + r * Q + v * b, y * x + z * I + C * N + d * T, y * F + z * K + C * O + d * U, y * B + z * L + C * P + d * V, y * E + z * 
          M + C * Q + d * b]);
        };
        a.createInverse = function(f) {
          var c = f._m;
          f = c[0];
          var d = c[1], b = c[2], h = c[3], l = c[4], g = c[5], k = c[6], n = c[7], t = c[8], p = c[9], m = c[10], u = c[11], w = c[12], r = c[13], v = c[14], c = c[15], y = m * c, z = v * u, C = k * c, x = v * n, F = k * u, B = m * n, E = b * c, I = v * h, K = b * u, L = m * h, M = b * n, N = k * h, O = t * r, P = w * p, Q = l * r, T = w * g, U = l * p, V = t * g, Y = f * r, Z = w * d, aa = f * p, ba = t * d, ca = f * g, da = l * d, fa = y * g + x * p + F * r - (z * g + C * p + B * r), ga = z * 
          d + E * p + L * r - (y * d + I * p + K * r), r = C * d + I * g + M * r - (x * d + E * g + N * r), d = B * d + K * g + N * p - (F * d + L * g + M * p), g = 1 / (f * fa + l * ga + t * r + w * d);
          return new a([g * fa, g * ga, g * r, g * d, g * (z * l + C * t + B * w - (y * l + x * t + F * w)), g * (y * f + I * t + K * w - (z * f + E * t + L * w)), g * (x * f + E * l + N * w - (C * f + I * l + M * w)), g * (F * f + L * l + M * t - (B * f + K * l + N * t)), g * (O * n + T * u + U * c - (P * n + Q * u + V * c)), g * (P * h + Y * u + ba * c - (O * h + Z * u + aa * c)), g * (Q * h + Z * n + ca * c - (T * h + Y * n + da * c)), g * (V * h + aa * n + da * u - (U * h + ba * n + ca * u)), 
          g * (Q * m + V * v + P * k - (U * v + O * k + T * m)), g * (aa * v + O * b + Z * m - (Y * m + ba * v + P * b)), g * (Y * k + da * v + T * b - (ca * v + Q * b + Z * k)), g * (ca * m + U * b + ba * k - (aa * k + da * m + V * b))]);
        };
        return a;
      }();
      g.Matrix3D = l;
      l = function() {
        function a(f, c, d) {
          void 0 === d && (d = 7);
          var b = this.size = 1 << d;
          this.sizeInBits = d;
          this.w = f;
          this.h = c;
          this.c = Math.ceil(f / b);
          this.r = Math.ceil(c / b);
          this.grid = [];
          for (f = 0;f < this.r;f++) {
            for (this.grid.push([]), c = 0;c < this.c;c++) {
              this.grid[f][c] = new a.Cell(new w(c * b, f * b, b, b));
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
          return new w(0, 0, this.w, this.h);
        };
        a.prototype.addDirtyRectangle = function(a) {
          var c = a.x >> this.sizeInBits, e = a.y >> this.sizeInBits;
          if (!(c >= this.c || e >= this.r)) {
            0 > c && (c = 0);
            0 > e && (e = 0);
            var d = this.grid[e][c];
            a = a.clone();
            a.snap();
            if (d.region.contains(a)) {
              d.bounds.isEmpty() ? d.bounds.set(a) : d.bounds.contains(a) || d.bounds.union(a);
            } else {
              for (var b = Math.min(this.c, Math.ceil((a.x + a.w) / this.size)) - c, h = Math.min(this.r, Math.ceil((a.y + a.h) / this.size)) - e, l = 0;l < b;l++) {
                for (var g = 0;g < h;g++) {
                  d = this.grid[e + g][c + l], d = d.region.clone(), d.intersect(a), d.isEmpty() || this.addDirtyRectangle(d);
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
            for (var d = 0;d < this.c;d++) {
              c += this.grid[e][d].region.area();
            }
          }
          return c / a;
        };
        a.prototype.render = function(a, c) {
          function e(c) {
            a.rect(c.x, c.y, c.w, c.h);
          }
          if (c && c.drawGrid) {
            a.strokeStyle = "white";
            for (var d = 0;d < this.r;d++) {
              for (var b = 0;b < this.c;b++) {
                var h = this.grid[d][b];
                a.beginPath();
                e(h.region);
                a.closePath();
                a.stroke();
              }
            }
          }
          a.strokeStyle = "#E0F8D8";
          for (d = 0;d < this.r;d++) {
            for (b = 0;b < this.c;b++) {
              h = this.grid[d][b], a.beginPath(), e(h.bounds), a.closePath(), a.stroke();
            }
          }
        };
        a.tmpRectangle = w.createEmpty();
        return a;
      }();
      g.DirtyRegion = l;
      (function(a) {
        var f = function() {
          function a(c) {
            this.region = c;
            this.bounds = w.createEmpty();
          }
          a.prototype.clear = function() {
            this.bounds.setEmpty();
          };
          return a;
        }();
        a.Cell = f;
      })(l = g.DirtyRegion || (g.DirtyRegion = {}));
      var u = function() {
        function a(f, c, e, d, b, h) {
          this.index = f;
          this.x = c;
          this.y = e;
          this.scale = h;
          this.bounds = new w(c * d, e * b, d, b);
        }
        a.prototype.getOBB = function() {
          if (this._obb) {
            return this._obb;
          }
          this.bounds.getCorners(a.corners);
          return this._obb = new t(a.corners);
        };
        a.corners = n.createEmptyPoints(4);
        return a;
      }();
      g.Tile = u;
      var d = function() {
        function a(f, c, e, d, b) {
          this.tileW = e;
          this.tileH = d;
          this.scale = b;
          this.w = f;
          this.h = c;
          this.rows = Math.ceil(c / d);
          this.columns = Math.ceil(f / e);
          this.tiles = [];
          for (c = f = 0;c < this.rows;c++) {
            for (var h = 0;h < this.columns;h++) {
              this.tiles.push(new u(f++, h, c, e, d, b));
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
        a.prototype.getFewTiles = function(f, c, d) {
          void 0 === d && (d = !0);
          if (c.isTranslationOnly() && 1 === this.tiles.length) {
            return this.tiles[0].bounds.intersectsTranslated(f, c.tx, c.ty) ? [this.tiles[0]] : [];
          }
          c.transformRectangle(f, a._points);
          var b;
          f = new w(0, 0, this.w, this.h);
          d && (b = new t(a._points));
          f.intersect(t.getBounds(a._points));
          if (f.isEmpty()) {
            return [];
          }
          var h = f.x / this.tileW | 0;
          c = f.y / this.tileH | 0;
          var l = Math.ceil((f.x + f.w) / this.tileW) | 0, g = Math.ceil((f.y + f.h) / this.tileH) | 0, h = m(h, 0, this.columns), l = m(l, 0, this.columns);
          c = m(c, 0, this.rows);
          for (var g = m(g, 0, this.rows), k = [];h < l;h++) {
            for (var n = c;n < g;n++) {
              var p = this.tiles[n * this.columns + h];
              p.bounds.intersects(f) && (d ? p.getOBB().intersects(b) : 1) && k.push(p);
            }
          }
          return k;
        };
        a.prototype.getManyTiles = function(f, c) {
          function d(a, c, f) {
            return (a - c.x) * (f.y - c.y) / (f.x - c.x) + c.y;
          }
          function b(a, c, f, e, d) {
            if (!(0 > f || f >= c.columns)) {
              for (e = m(e, 0, c.rows), d = m(d + 1, 0, c.rows);e < d;e++) {
                a.push(c.tiles[e * c.columns + f]);
              }
            }
          }
          var h = a._points;
          c.transformRectangle(f, h);
          for (var l = h[0].x < h[1].x ? 0 : 1, g = h[2].x < h[3].x ? 2 : 3, g = h[l].x < h[g].x ? l : g, l = [], k = 0;5 > k;k++, g++) {
            l.push(h[g % 4]);
          }
          (l[1].x - l[0].x) * (l[3].y - l[0].y) < (l[1].y - l[0].y) * (l[3].x - l[0].x) && (h = l[1], l[1] = l[3], l[3] = h);
          var h = [], n, t, g = Math.floor(l[0].x / this.tileW), k = (g + 1) * this.tileW;
          if (l[2].x < k) {
            n = Math.min(l[0].y, l[1].y, l[2].y, l[3].y);
            t = Math.max(l[0].y, l[1].y, l[2].y, l[3].y);
            var p = Math.floor(n / this.tileH), u = Math.floor(t / this.tileH);
            b(h, this, g, p, u);
            return h;
          }
          var w = 0, r = 4, v = !1;
          if (l[0].x === l[1].x || l[0].x === l[3].x) {
            l[0].x === l[1].x ? (v = !0, w++) : r--, n = d(k, l[w], l[w + 1]), t = d(k, l[r], l[r - 1]), p = Math.floor(l[w].y / this.tileH), u = Math.floor(l[r].y / this.tileH), b(h, this, g, p, u), g++;
          }
          do {
            var D, y, z, C;
            l[w + 1].x < k ? (D = l[w + 1].y, z = !0) : (D = d(k, l[w], l[w + 1]), z = !1);
            l[r - 1].x < k ? (y = l[r - 1].y, C = !0) : (y = d(k, l[r], l[r - 1]), C = !1);
            p = Math.floor((l[w].y < l[w + 1].y ? n : D) / this.tileH);
            u = Math.floor((l[r].y > l[r - 1].y ? t : y) / this.tileH);
            b(h, this, g, p, u);
            if (z && v) {
              break;
            }
            z ? (v = !0, w++, n = d(k, l[w], l[w + 1])) : n = D;
            C ? (r--, t = d(k, l[r], l[r - 1])) : t = y;
            g++;
            k = (g + 1) * this.tileW;
          } while (w < r);
          return h;
        };
        a._points = n.createEmptyPoints(4);
        return a;
      }();
      g.TileCache = d;
      l = function() {
        function e(a, c, e) {
          this._cacheLevels = [];
          this._source = a;
          this._tileSize = c;
          this._minUntiledSize = e;
        }
        e.prototype._getTilesAtScale = function(f, c, e) {
          var b = Math.max(c.getAbsoluteScaleX(), c.getAbsoluteScaleY()), h = 0;
          1 !== b && (h = m(Math.round(Math.log(1 / b) / Math.LN2), -5, 3));
          b = a(h);
          if (this._source.hasFlags(1048576)) {
            for (;;) {
              b = a(h);
              if (e.contains(this._source.getBounds().getAbsoluteBounds().clone().scale(b, b))) {
                break;
              }
              h--;
            }
          }
          this._source.hasFlags(2097152) || (h = m(h, -5, 0));
          b = a(h);
          e = 5 + h;
          h = this._cacheLevels[e];
          if (!h) {
            var h = this._source.getBounds().getAbsoluteBounds().clone().scale(b, b), l, g;
            this._source.hasFlags(1048576) || !this._source.hasFlags(4194304) || Math.max(h.w, h.h) <= this._minUntiledSize ? (l = h.w, g = h.h) : l = g = this._tileSize;
            h = this._cacheLevels[e] = new d(h.w, h.h, l, g, b);
          }
          return h.getTiles(f, c.scaleClone(b, b));
        };
        e.prototype.fetchTiles = function(a, c, e, d) {
          var b = new w(0, 0, e.canvas.width, e.canvas.height);
          a = this._getTilesAtScale(a, c, b);
          var h;
          c = this._source;
          for (var l = 0;l < a.length;l++) {
            var g = a[l];
            g.cachedSurfaceRegion && g.cachedSurfaceRegion.surface && !c.hasFlags(1048592) || (h || (h = []), h.push(g));
          }
          h && this._cacheTiles(e, h, d, b);
          c.removeFlags(16);
          return a;
        };
        e.prototype._getTileBounds = function(a) {
          for (var c = w.createEmpty(), e = 0;e < a.length;e++) {
            c.union(a[e].bounds);
          }
          return c;
        };
        e.prototype._cacheTiles = function(a, c, e, d, b) {
          void 0 === b && (b = 4);
          var h = this._getTileBounds(c);
          a.save();
          a.setTransform(1, 0, 0, 1, 0, 0);
          a.clearRect(0, 0, d.w, d.h);
          a.translate(-h.x, -h.y);
          a.scale(c[0].scale, c[0].scale);
          var l = this._source.getBounds();
          a.translate(-l.x, -l.y);
          2 <= r.traceLevel && r.writer && r.writer.writeLn("Rendering Tiles: " + h);
          this._source.render(a, 0);
          a.restore();
          for (var l = null, g = 0;g < c.length;g++) {
            var k = c[g], n = k.bounds.clone();
            n.x -= h.x;
            n.y -= h.y;
            d.contains(n) || (l || (l = []), l.push(k));
            k.cachedSurfaceRegion = e(k.cachedSurfaceRegion, a, n);
          }
          l && (2 <= l.length ? (c = l.slice(0, l.length / 2 | 0), h = l.slice(c.length), this._cacheTiles(a, c, e, d, b - 1), this._cacheTiles(a, h, e, d, b - 1)) : this._cacheTiles(a, l, e, d, b - 1));
        };
        return e;
      }();
      g.RenderableTileCache = l;
    })(r.Geometry || (r.Geometry = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(k, r) {
  function g() {
    this.constructor = k;
  }
  for (var b in r) {
    r.hasOwnProperty(b) && (k[b] = r[b]);
  }
  g.prototype = r.prototype;
  k.prototype = new g;
};
(function(k) {
  (function(r) {
    var g = k.IntegerUtilities.roundToMultipleOfPowerOfTwo, b = r.Geometry.Rectangle;
    (function(k) {
      var m = function(a) {
        function b() {
          a.apply(this, arguments);
        }
        __extends(b, a);
        return b;
      }(r.Geometry.Rectangle);
      k.Region = m;
      var a = function() {
        function a(b, d) {
          this._root = new h(0, 0, b | 0, d | 0, !1);
        }
        a.prototype.allocate = function(a, d) {
          a = Math.ceil(a);
          d = Math.ceil(d);
          var e = this._root.insert(a, d);
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
      k.CompactAllocator = a;
      var h = function(b) {
        function h(a, e, f, c, q) {
          b.call(this, a, e, f, c);
          this._children = null;
          this._horizontal = q;
          this.allocated = !1;
        }
        __extends(h, b);
        h.prototype.clear = function() {
          this._children = null;
          this.allocated = !1;
        };
        h.prototype.insert = function(a, e) {
          return this._insert(a, e, 0);
        };
        h.prototype._insert = function(d, e, f) {
          if (!(f > a.MAX_DEPTH || this.allocated || this.w < d || this.h < e)) {
            if (this._children) {
              var c;
              if ((c = this._children[0]._insert(d, e, f + 1)) || (c = this._children[1]._insert(d, e, f + 1))) {
                return c;
              }
            } else {
              return c = !this._horizontal, a.RANDOM_ORIENTATION && (c = .5 <= Math.random()), this._children = this._horizontal ? [new h(this.x, this.y, this.w, e, !1), new h(this.x, this.y + e, this.w, this.h - e, c)] : [new h(this.x, this.y, d, this.h, !0), new h(this.x + d, this.y, this.w - d, this.h, c)], c = this._children[0], c.w === d && c.h === e ? (c.allocated = !0, c) : this._insert(d, e, f + 1);
            }
          }
        };
        return h;
      }(k.Region), n = function() {
        function a(b, d, e, f) {
          this._columns = b / e | 0;
          this._rows = d / f | 0;
          this._sizeW = e;
          this._sizeH = f;
          this._freeList = [];
          this._index = 0;
          this._total = this._columns * this._rows;
        }
        a.prototype.allocate = function(a, d) {
          a = Math.ceil(a);
          d = Math.ceil(d);
          var e = this._sizeW, f = this._sizeH;
          if (a > e || d > f) {
            return null;
          }
          var c = this._freeList, b = this._index;
          return 0 < c.length ? (e = c.pop(), e.w = a, e.h = d, e.allocated = !0, e) : b < this._total ? (c = b / this._columns | 0, e = new p((b - c * this._columns) * e, c * f, a, d), e.index = b, e.allocator = this, e.allocated = !0, this._index++, e) : null;
        };
        a.prototype.free = function(a) {
          a.allocated = !1;
          this._freeList.push(a);
        };
        return a;
      }();
      k.GridAllocator = n;
      var p = function(a) {
        function b(d, e, f, c) {
          a.call(this, d, e, f, c);
          this.index = -1;
        }
        __extends(b, a);
        return b;
      }(k.Region);
      k.GridCell = p;
      var w = function() {
        return function(a, b, d) {
          this.size = a;
          this.region = b;
          this.allocator = d;
        };
      }(), t = function(a) {
        function b(d, e, f, c, h) {
          a.call(this, d, e, f, c);
          this.region = h;
        }
        __extends(b, a);
        return b;
      }(k.Region);
      k.BucketCell = t;
      m = function() {
        function a(b, d) {
          this._buckets = [];
          this._w = b | 0;
          this._h = d | 0;
          this._filled = 0;
        }
        a.prototype.allocate = function(a, d) {
          a = Math.ceil(a);
          d = Math.ceil(d);
          var e = Math.max(a, d);
          if (a > this._w || d > this._h) {
            return null;
          }
          var f = null, c, h = this._buckets;
          do {
            for (var l = 0;l < h.length && !(h[l].size >= e && (c = h[l], f = c.allocator.allocate(a, d)));l++) {
            }
            if (!f) {
              var k = this._h - this._filled;
              if (k < d) {
                return null;
              }
              var l = g(e, 8), p = 2 * l;
              p > k && (p = k);
              if (p < l) {
                return null;
              }
              k = new b(0, this._filled, this._w, p);
              this._buckets.push(new w(l, k, new n(k.w, k.h, l, l)));
              this._filled += p;
            }
          } while (!f);
          return new t(c.region.x + f.x, c.region.y + f.y, f.w, f.h, f);
        };
        a.prototype.free = function(a) {
          a.region.allocator.free(a.region);
        };
        return a;
      }();
      k.BucketAllocator = m;
    })(r.RegionAllocator || (r.RegionAllocator = {}));
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
          for (var k = 0;k < this._surfaces.length;k++) {
            var t = this._surfaces[k];
            if (t !== g && (t = t.allocate(a, b))) {
              return t;
            }
          }
          return this._createNewSurface(a, b).allocate(a, b);
        };
        a.prototype.free = function(a) {
        };
        return a;
      }();
      b.SimpleAllocator = g;
    })(r.SurfaceRegionAllocator || (r.SurfaceRegionAllocator = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    var g = r.Geometry.Rectangle, b = r.Geometry.Matrix, v = r.Geometry.DirtyRegion;
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
    })(r.BlendMode || (r.BlendMode = {}));
    var m = r.BlendMode;
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
    })(r.NodeFlags || (r.NodeFlags = {}));
    var a = r.NodeFlags;
    (function(a) {
      a[a.Node = 1] = "Node";
      a[a.Shape = 3] = "Shape";
      a[a.Group = 5] = "Group";
      a[a.Stage = 13] = "Stage";
      a[a.Renderable = 33] = "Renderable";
    })(r.NodeType || (r.NodeType = {}));
    var h = r.NodeType;
    (function(a) {
      a[a.None = 0] = "None";
      a[a.OnStageBoundsChanged = 1] = "OnStageBoundsChanged";
      a[a.RemovedFromStage = 2] = "RemovedFromStage";
    })(r.NodeEventType || (r.NodeEventType = {}));
    var n = function() {
      function a() {
      }
      a.prototype.visitNode = function(a, e) {
      };
      a.prototype.visitShape = function(a, e) {
        this.visitNode(a, e);
      };
      a.prototype.visitGroup = function(a, e) {
        this.visitNode(a, e);
        for (var d = a.getChildren(), b = 0;b < d.length;b++) {
          d[b].visit(this, e);
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
    r.NodeVisitor = n;
    var p = function() {
      return function() {
      };
    }();
    r.State = p;
    var w = function(a) {
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
    }(p);
    r.PreRenderState = w;
    var t = function(a) {
      function c() {
        a.apply(this, arguments);
        this.isDirty = !0;
      }
      __extends(c, a);
      c.prototype.start = function(a, c) {
        this._dirtyRegion = c;
        var e = new w;
        e.matrix.setIdentity();
        a.visit(this, e);
        e.free();
      };
      c.prototype.visitGroup = function(a, c) {
        var e = a.getChildren();
        this.visitNode(a, c);
        for (var d = 0;d < e.length;d++) {
          var b = e[d], f = c.transform(b.getTransform());
          b.visit(this, f);
          f.free();
        }
      };
      c.prototype.visitNode = function(a, c) {
        a.hasFlags(16) && (this.isDirty = !0);
        a.toggleFlags(16, !1);
        a.depth = c.depth++;
      };
      return c;
    }(n);
    r.PreRenderVisitor = t;
    p = function(a) {
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
    }(n);
    r.TracingNodeVisitor = p;
    var l = function() {
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
          for (var e = this._eventListeners, d = 0;d < e.length;d++) {
            var b = e[d];
            b.type === a && b.listener(this, a);
          }
        }
      };
      b.prototype.addEventListener = function(a, e) {
        this._eventListeners || (this._eventListeners = []);
        this._eventListeners.push({type:a, listener:e});
      };
      b.prototype.removeEventListener = function(a, e) {
        for (var d = this._eventListeners, b = 0;b < d.length;b++) {
          var f = d[b];
          if (f.type === a && f.listener === e) {
            d.splice(b, 1);
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
        var e = this.getBounds(!0);
        if (a !== this && !e.isEmpty()) {
          var d = this.getTransform().getConcatenatedMatrix();
          a ? (a = a.getTransform().getInvertedConcatenatedMatrix(), a.preMultiply(d), a.transformRectangleAABB(e), a.free()) : d.transformRectangleAABB(e);
        }
        return e;
      };
      b.prototype._markCurrentBoundsAsDirtyRegion = function() {
      };
      b.prototype.getStage = function(a) {
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
      b.prototype.getChildren = function(a) {
        throw void 0;
      };
      b.prototype.getBounds = function(a) {
        throw void 0;
      };
      b.prototype.setBounds = function(a) {
        (this._bounds || (this._bounds = g.createEmpty())).set(a);
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
      b.prototype.toggleFlags = function(a, e) {
        this._flags = e ? this._flags | a : this._flags & ~a;
      };
      b.prototype._propagateFlagsUp = function(a) {
        if (0 !== a && !this.hasFlags(a)) {
          this.hasFlags(2) || (a &= -257);
          this.setFlags(a);
          var e = this._parent;
          e && e._propagateFlagsUp(a);
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
      b._getAncestors = function(a, e) {
        var d = b._path;
        for (d.length = 0;a && a !== e;) {
          d.push(a), a = a._parent;
        }
        return d;
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
        null === this._layer && (this._layer = new e(this));
        return this._layer;
      };
      b.prototype.visit = function(a, e) {
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
            k.Debug.unexpectedCase();
        }
      };
      b.prototype.invalidate = function() {
        this._propagateFlagsUp(a.UpOnInvalidate);
      };
      b.prototype.toString = function(a) {
        void 0 === a && (a = !1);
        var e = h[this._type] + " " + this._id;
        a && (e += " " + this._bounds.toString());
        return e;
      };
      b._path = [];
      b._nextId = 0;
      return b;
    }();
    r.Node = l;
    var u = function(e) {
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
          for (var e = this._children, d = g.allocate(), b = 0;b < e.length;b++) {
            var f = e[b];
            d.set(f.getBounds());
            f.getTransformMatrix().transformRectangleAABB(d);
            c.union(d);
          }
          d.free();
          this.removeFlags(256);
        }
        return a ? c.clone() : c;
      };
      return c;
    }(l);
    r.Group = u;
    var d = function() {
      function e(a) {
        this._node = a;
        this._matrix = b.createIdentity();
        this._colorMatrix = r.ColorMatrix.createIdentity();
        this._concatenatedMatrix = b.createIdentity();
        this._invertedConcatenatedMatrix = b.createIdentity();
        this._concatenatedColorMatrix = r.ColorMatrix.createIdentity();
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
        null === this._colorMatrix && (this._colorMatrix = r.ColorMatrix.createIdentity());
        return a ? this._colorMatrix.clone() : this._colorMatrix;
      };
      e.prototype.getConcatenatedMatrix = function(a) {
        void 0 === a && (a = !1);
        if (this._node.hasFlags(512)) {
          for (var e = this._node._findClosestAncestor(), d = l._getAncestors(this._node, e), f = e ? e.getTransform()._concatenatedMatrix.clone() : b.createIdentity(), h = d.length - 1;0 <= h;h--) {
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
    r.Transform = d;
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
        return m[this._blendMode];
      };
      return a;
    }();
    r.Layer = e;
    p = function(a) {
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
    r.Shape = p;
    r.RendererOptions = function() {
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
    })(r.Backend || (r.Backend = {}));
    n = function(a) {
      function c(c, e, d) {
        a.call(this);
        this._container = c;
        this._stage = e;
        this._options = d;
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
      c.prototype.screenShot = function(a, c) {
        throw void 0;
      };
      return c;
    }(n);
    r.Renderer = n;
    n = function(a) {
      function c(e, d, b) {
        void 0 === b && (b = !1);
        a.call(this);
        this._preVisitor = new t;
        this._flags &= -3;
        this._type = 13;
        this._scaleMode = c.DEFAULT_SCALE;
        this._align = c.DEFAULT_ALIGN;
        this._content = new u;
        this._content._flags &= -3;
        this.addChild(this._content);
        this.setFlags(16);
        this.setBounds(new g(0, 0, e, d));
        b ? (this._dirtyRegion = new v(e, d), this._dirtyRegion.addDirtyRectangle(new g(0, 0, e, d))) : this._dirtyRegion = null;
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
        this._dirtyRegion && (this._dirtyRegion = new v(c.w, c.h), this._dirtyRegion.addDirtyRectangle(c));
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
    }(u);
    r.Stage = n;
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    function g(a, d, c) {
      return a + (d - a) * c;
    }
    function b(a, d, c) {
      return g(a >> 24 & 255, d >> 24 & 255, c) << 24 | g(a >> 16 & 255, d >> 16 & 255, c) << 16 | g(a >> 8 & 255, d >> 8 & 255, c) << 8 | g(a & 255, d & 255, c);
    }
    var v = r.Geometry.Point, m = r.Geometry.Rectangle, a = r.Geometry.Matrix, h = k.ArrayUtilities.indexOf, n = function(a) {
      function d() {
        a.call(this);
        this._parents = [];
        this._renderableParents = [];
        this._invalidateEventListeners = null;
        this._flags &= -3;
        this._type = 33;
      }
      __extends(d, a);
      Object.defineProperty(d.prototype, "parents", {get:function() {
        return this._parents;
      }, enumerable:!0, configurable:!0});
      d.prototype.addParent = function(a) {
        h(this._parents, a);
        this._parents.push(a);
      };
      d.prototype.willRender = function() {
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
      d.prototype.addRenderableParent = function(a) {
        this._renderableParents.push(a);
      };
      d.prototype.wrap = function() {
        for (var a, e = this._parents, d = 0;d < e.length;d++) {
          if (a = e[d], !a._parent) {
            return a;
          }
        }
        a = new r.Shape(this);
        this.addParent(a);
        return a;
      };
      d.prototype.invalidate = function() {
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
      d.prototype.addInvalidateEventListener = function(a) {
        this._invalidateEventListeners || (this._invalidateEventListeners = []);
        h(this._invalidateEventListeners, a);
        this._invalidateEventListeners.push(a);
      };
      d.prototype.getBounds = function(a) {
        void 0 === a && (a = !1);
        return a ? this._bounds.clone() : this._bounds;
      };
      d.prototype.getChildren = function(a) {
        return null;
      };
      d.prototype._propagateFlagsUp = function(a) {
        if (0 !== a && !this.hasFlags(a)) {
          for (var e = 0;e < this._parents.length;e++) {
            this._parents[e]._propagateFlagsUp(a);
          }
        }
      };
      d.prototype.render = function(a, e, d, b, f) {
      };
      return d;
    }(r.Node);
    r.Renderable = n;
    var p = function(a) {
      function d(c, b) {
        a.call(this);
        this.setBounds(c);
        this.render = b;
      }
      __extends(d, a);
      return d;
    }(n);
    r.CustomRenderable = p;
    (function(a) {
      a[a.Idle = 1] = "Idle";
      a[a.Playing = 2] = "Playing";
      a[a.Paused = 3] = "Paused";
      a[a.Ended = 4] = "Ended";
    })(r.RenderableVideoState || (r.RenderableVideoState = {}));
    p = function(a) {
      function d(c, b) {
        a.call(this);
        this._flags = 1048592;
        this._lastPausedTime = this._lastTimeInvalidated = 0;
        this._pauseHappening = this._seekHappening = !1;
        this._isDOMElement = !0;
        this.setBounds(new m(0, 0, 1, 1));
        this._assetId = c;
        this._eventSerializer = b;
        var h = document.createElement("video"), l = this._handleVideoEvent.bind(this);
        h.preload = "metadata";
        h.addEventListener("play", l);
        h.addEventListener("pause", l);
        h.addEventListener("ended", l);
        h.addEventListener("loadeddata", l);
        h.addEventListener("progress", l);
        h.addEventListener("suspend", l);
        h.addEventListener("loadedmetadata", l);
        h.addEventListener("error", l);
        h.addEventListener("seeking", l);
        h.addEventListener("seeked", l);
        h.addEventListener("canplay", l);
        h.style.position = "absolute";
        this._video = h;
        this._videoEventHandler = l;
        d._renderableVideos.push(this);
        "undefined" !== typeof registerInspectorAsset && registerInspectorAsset(-1, -1, this);
        this._state = 1;
      }
      __extends(d, a);
      Object.defineProperty(d.prototype, "video", {get:function() {
        return this._video;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(d.prototype, "state", {get:function() {
        return this._state;
      }, enumerable:!0, configurable:!0});
      d.prototype.play = function() {
        this._state = 2;
        this._video.play();
      };
      d.prototype.pause = function() {
        this._state = 3;
        this._video.pause();
      };
      d.prototype._handleVideoEvent = function(a) {
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
      d.prototype._notifyNetStream = function(a, e) {
        this._eventSerializer.sendVideoPlaybackEvent(this._assetId, a, e);
      };
      d.prototype.processControlRequest = function(a, e) {
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
            var b = -1;
            if (d.buffered) {
              for (var f = 0;f < d.buffered.length;f++) {
                b = Math.max(b, d.buffered.end(f));
              }
            } else {
              b = d.duration;
            }
            return Math.round(500 * b);
          case 8:
            return d ? Math.round(500 * d.duration) : 0;
        }
      };
      d.prototype.checkForUpdate = function() {
        this._lastTimeInvalidated !== this._video.currentTime && (this._isDOMElement || this.invalidate());
        this._lastTimeInvalidated = this._video.currentTime;
      };
      d.checkForVideoUpdates = function() {
        for (var a = d._renderableVideos, e = 0;e < a.length;e++) {
          var b = a[e];
          b.willRender() ? (b._video.parentElement || b.invalidate(), b._video.style.zIndex = b.parents[0].depth + "") : b._video.parentElement && b._dispatchEvent(2);
          a[e].checkForUpdate();
        }
      };
      d.prototype.render = function(a, e, d) {
        (e = this._video) && 0 < e.videoWidth && a.drawImage(e, 0, 0, e.videoWidth, e.videoHeight, 0, 0, this._bounds.w, this._bounds.h);
      };
      d._renderableVideos = [];
      return d;
    }(n);
    r.RenderableVideo = p;
    p = function(a) {
      function d(c, b) {
        a.call(this);
        this._flags = 1048592;
        this.properties = {};
        this.setBounds(b);
        c instanceof HTMLCanvasElement ? this._initializeSourceCanvas(c) : this._sourceImage = c;
      }
      __extends(d, a);
      d.FromDataBuffer = function(a, e, b) {
        var h = document.createElement("canvas");
        h.width = b.w;
        h.height = b.h;
        b = new d(h, b);
        b.updateFromDataBuffer(a, e);
        return b;
      };
      d.FromNode = function(a, e, b, h, l) {
        var g = document.createElement("canvas"), k = a.getBounds();
        g.width = k.w;
        g.height = k.h;
        g = new d(g, k);
        g.drawNode(a, e, b, h, l);
        return g;
      };
      d.FromImage = function(a) {
        return new d(a, new m(0, 0, -1, -1));
      };
      d.prototype.updateFromDataBuffer = function(a, e) {
        if (r.imageUpdateOption.value) {
          var d = e.buffer;
          if (4 !== a && 5 !== a && 6 !== a) {
            var b = this._bounds, f = this._imageData;
            f && f.width === b.w && f.height === b.h || (f = this._imageData = this._context.createImageData(b.w, b.h));
            r.imageConvertOption.value && (d = new Int32Array(d), b = new Int32Array(f.data.buffer), k.ColorUtilities.convertImage(a, 3, d, b));
            this._ensureSourceCanvas();
            this._context.putImageData(f, 0, 0);
          }
          this.invalidate();
        }
      };
      d.prototype.readImageData = function(a) {
        a.writeRawBytes(this.imageData.data);
      };
      d.prototype.render = function(a, e, d) {
        this.renderSource ? a.drawImage(this.renderSource, 0, 0) : this._renderFallback(a);
      };
      d.prototype.drawNode = function(a, e, d, b, f) {
        d = r.Canvas2D;
        b = this.getBounds();
        (new d.Canvas2DRenderer(this._canvas, null)).renderNode(a, f || b, e);
      };
      d.prototype._initializeSourceCanvas = function(a) {
        this._canvas = a;
        this._context = this._canvas.getContext("2d");
      };
      d.prototype._ensureSourceCanvas = function() {
        if (!this._canvas) {
          var a = document.createElement("canvas"), d = this._bounds;
          a.width = d.w;
          a.height = d.h;
          this._initializeSourceCanvas(a);
        }
      };
      Object.defineProperty(d.prototype, "imageData", {get:function() {
        this._canvas || (this._ensureSourceCanvas(), this._context.drawImage(this._sourceImage, 0, 0), this._sourceImage = null);
        return this._context.getImageData(0, 0, this._bounds.w, this._bounds.h);
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(d.prototype, "renderSource", {get:function() {
        return this._canvas || this._sourceImage;
      }, enumerable:!0, configurable:!0});
      d.prototype._renderFallback = function(a) {
      };
      return d;
    }(n);
    r.RenderableBitmap = p;
    (function(a) {
      a[a.Fill = 0] = "Fill";
      a[a.Stroke = 1] = "Stroke";
      a[a.StrokeFill = 2] = "StrokeFill";
    })(r.PathType || (r.PathType = {}));
    var w = function() {
      return function(a, d, c, b) {
        this.type = a;
        this.style = d;
        this.smoothImage = c;
        this.strokeProperties = b;
        this.path = new Path2D;
      };
    }();
    r.StyledPath = w;
    var t = function() {
      return function(a, d, c, b, h) {
        this.thickness = a;
        this.scaleMode = d;
        this.capsStyle = c;
        this.jointsStyle = b;
        this.miterLimit = h;
      };
    }();
    r.StrokeProperties = t;
    var l = function(d) {
      function b(a, f, h, l) {
        d.call(this);
        this._flags = 6291472;
        this.properties = {};
        this.setBounds(l);
        this._id = a;
        this._pathData = f;
        this._textures = h;
        h.length && this.setFlags(1048576);
      }
      __extends(b, d);
      b.prototype.update = function(a, d, e) {
        this.setBounds(e);
        this._pathData = a;
        this._paths = null;
        this._textures = d;
        this.setFlags(1048576);
        this.invalidate();
      };
      b.prototype.render = function(a, d, e, b, f) {
        void 0 === b && (b = null);
        void 0 === f && (f = !1);
        a.fillStyle = a.strokeStyle = "transparent";
        d = this._deserializePaths(this._pathData, a, d);
        for (e = 0;e < d.length;e++) {
          var h = d[e];
          a.mozImageSmoothingEnabled = a.msImageSmoothingEnabled = a.imageSmoothingEnabled = h.smoothImage;
          if (0 === h.type) {
            b ? b.addPath(h.path, a.currentTransform) : (a.fillStyle = f ? "#000000" : h.style, a.fill(h.path, "evenodd"), a.fillStyle = "transparent");
          } else {
            if (!b && !f) {
              a.strokeStyle = h.style;
              var l = 1;
              h.strokeProperties && (l = h.strokeProperties.scaleMode, a.lineWidth = h.strokeProperties.thickness, a.lineCap = h.strokeProperties.capsStyle, a.lineJoin = h.strokeProperties.jointsStyle, a.miterLimit = h.strokeProperties.miterLimit);
              var g = a.lineWidth;
              (g = 1 === g || 3 === g) && a.translate(.5, .5);
              a.flashStroke(h.path, l);
              g && a.translate(-.5, -.5);
              a.strokeStyle = "transparent";
            }
          }
        }
      };
      b.prototype._deserializePaths = function(a, d, e) {
        if (this._paths) {
          return this._paths;
        }
        e = this._paths = [];
        var h = null, l = null, g = 0, n = 0, p, m, u = !1, w = 0, r = 0, v = a.commands, H = a.coordinates, D = a.styles, y = D.position = 0;
        a = a.commandsPosition;
        for (var z = 0;z < a;z++) {
          switch(v[z]) {
            case 9:
              u && h && (h.lineTo(w, r), l && l.lineTo(w, r));
              u = !0;
              g = w = H[y++] / 20;
              n = r = H[y++] / 20;
              h && h.moveTo(g, n);
              l && l.moveTo(g, n);
              break;
            case 10:
              g = H[y++] / 20;
              n = H[y++] / 20;
              h && h.lineTo(g, n);
              l && l.lineTo(g, n);
              break;
            case 11:
              p = H[y++] / 20;
              m = H[y++] / 20;
              g = H[y++] / 20;
              n = H[y++] / 20;
              h && h.quadraticCurveTo(p, m, g, n);
              l && l.quadraticCurveTo(p, m, g, n);
              break;
            case 12:
              p = H[y++] / 20;
              m = H[y++] / 20;
              var C = H[y++] / 20, x = H[y++] / 20, g = H[y++] / 20, n = H[y++] / 20;
              h && h.bezierCurveTo(p, m, C, x, g, n);
              l && l.bezierCurveTo(p, m, C, x, g, n);
              break;
            case 1:
              h = this._createPath(0, k.ColorUtilities.rgbaToCSSStyle(D.readUnsignedInt()), !1, null, g, n);
              break;
            case 3:
              p = this._readBitmap(D, d);
              h = this._createPath(0, p.style, p.smoothImage, null, g, n);
              break;
            case 2:
              h = this._createPath(0, this._readGradient(D, d), !1, null, g, n);
              break;
            case 4:
              h = null;
              break;
            case 5:
              l = k.ColorUtilities.rgbaToCSSStyle(D.readUnsignedInt());
              D.position += 1;
              p = D.readByte();
              m = b.LINE_CAPS_STYLES[D.readByte()];
              C = b.LINE_JOINTS_STYLES[D.readByte()];
              p = new t(H[y++] / 20, p, m, C, D.readByte());
              l = this._createPath(1, l, !1, p, g, n);
              break;
            case 6:
              l = this._createPath(2, this._readGradient(D, d), !1, null, g, n);
              break;
            case 7:
              p = this._readBitmap(D, d);
              l = this._createPath(2, p.style, p.smoothImage, null, g, n);
              break;
            case 8:
              l = null;
          }
        }
        u && h && (h.lineTo(w, r), l && l.lineTo(w, r));
        this._pathData = null;
        return e;
      };
      b.prototype._createPath = function(a, d, e, b, f, h) {
        a = new w(a, d, e, b);
        this._paths.push(a);
        a.path.moveTo(f, h);
        return a.path;
      };
      b.prototype._readMatrix = function(c) {
        return new a(c.readFloat(), c.readFloat(), c.readFloat(), c.readFloat(), c.readFloat(), c.readFloat());
      };
      b.prototype._readGradient = function(a, d) {
        var e = a.readUnsignedByte(), b = 2 * a.readShort() / 255, f = this._readMatrix(a), e = 16 === e ? d.createLinearGradient(-1, 0, 1, 0) : d.createRadialGradient(b, 0, 0, 0, 0, 1);
        e.setTransform && e.setTransform(f.toSVGMatrix());
        f = a.readUnsignedByte();
        for (b = 0;b < f;b++) {
          var h = a.readUnsignedByte() / 255, l = k.ColorUtilities.rgbaToCSSStyle(a.readUnsignedInt());
          e.addColorStop(h, l);
        }
        a.position += 2;
        return e;
      };
      b.prototype._readBitmap = function(a, d) {
        var e = a.readUnsignedInt(), b = this._readMatrix(a), f = a.readBoolean() ? "repeat" : "no-repeat", h = a.readBoolean();
        (e = this._textures[e]) ? (f = d.createPattern(e.renderSource, f), f.setTransform(b.toSVGMatrix())) : f = null;
        return {style:f, smoothImage:h};
      };
      b.prototype._renderFallback = function(a) {
        this.fillStyle || (this.fillStyle = k.ColorStyle.randomStyle());
        var d = this._bounds;
        a.save();
        a.beginPath();
        a.lineWidth = 2;
        a.fillStyle = this.fillStyle;
        a.fillRect(d.x, d.y, d.w, d.h);
        a.restore();
      };
      b.LINE_CAPS_STYLES = ["round", "butt", "square"];
      b.LINE_JOINTS_STYLES = ["round", "bevel", "miter"];
      return b;
    }(n);
    r.RenderableShape = l;
    p = function(d) {
      function f() {
        d.apply(this, arguments);
        this._flags = 7340048;
        this._morphPaths = Object.create(null);
      }
      __extends(f, d);
      f.prototype._deserializePaths = function(a, d, e) {
        if (this._morphPaths[e]) {
          return this._morphPaths[e];
        }
        var f = this._morphPaths[e] = [], h = null, n = null, p = 0, m = 0, u, w, r = !1, v = 0, R = 0, H = a.commands, D = a.coordinates, y = a.morphCoordinates, z = a.styles, C = a.morphStyles;
        z.position = 0;
        var x = C.position = 0;
        a = a.commandsPosition;
        for (var F = 0;F < a;F++) {
          switch(H[F]) {
            case 9:
              r && h && (h.lineTo(v, R), n && n.lineTo(v, R));
              r = !0;
              p = v = g(D[x], y[x++], e) / 20;
              m = R = g(D[x], y[x++], e) / 20;
              h && h.moveTo(p, m);
              n && n.moveTo(p, m);
              break;
            case 10:
              p = g(D[x], y[x++], e) / 20;
              m = g(D[x], y[x++], e) / 20;
              h && h.lineTo(p, m);
              n && n.lineTo(p, m);
              break;
            case 11:
              u = g(D[x], y[x++], e) / 20;
              w = g(D[x], y[x++], e) / 20;
              p = g(D[x], y[x++], e) / 20;
              m = g(D[x], y[x++], e) / 20;
              h && h.quadraticCurveTo(u, w, p, m);
              n && n.quadraticCurveTo(u, w, p, m);
              break;
            case 12:
              u = g(D[x], y[x++], e) / 20;
              w = g(D[x], y[x++], e) / 20;
              var B = g(D[x], y[x++], e) / 20, E = g(D[x], y[x++], e) / 20, p = g(D[x], y[x++], e) / 20, m = g(D[x], y[x++], e) / 20;
              h && h.bezierCurveTo(u, w, B, E, p, m);
              n && n.bezierCurveTo(u, w, B, E, p, m);
              break;
            case 1:
              h = this._createMorphPath(0, e, k.ColorUtilities.rgbaToCSSStyle(b(z.readUnsignedInt(), C.readUnsignedInt(), e)), !1, null, p, m);
              break;
            case 3:
              u = this._readMorphBitmap(z, C, e, d);
              h = this._createMorphPath(0, e, u.style, u.smoothImage, null, p, m);
              break;
            case 2:
              u = this._readMorphGradient(z, C, e, d);
              h = this._createMorphPath(0, e, u, !1, null, p, m);
              break;
            case 4:
              h = null;
              break;
            case 5:
              u = g(D[x], y[x++], e) / 20;
              n = k.ColorUtilities.rgbaToCSSStyle(b(z.readUnsignedInt(), C.readUnsignedInt(), e));
              z.position += 1;
              w = z.readByte();
              B = l.LINE_CAPS_STYLES[z.readByte()];
              E = l.LINE_JOINTS_STYLES[z.readByte()];
              u = new t(u, w, B, E, z.readByte());
              n = this._createMorphPath(1, e, n, !1, u, p, m);
              break;
            case 6:
              u = this._readMorphGradient(z, C, e, d);
              n = this._createMorphPath(2, e, u, !1, null, p, m);
              break;
            case 7:
              u = this._readMorphBitmap(z, C, e, d);
              n = this._createMorphPath(2, e, u.style, u.smoothImage, null, p, m);
              break;
            case 8:
              n = null;
          }
        }
        r && h && (h.lineTo(v, R), n && n.lineTo(v, R));
        return f;
      };
      f.prototype._createMorphPath = function(a, d, e, b, f, h, l) {
        a = new w(a, e, b, f);
        this._morphPaths[d].push(a);
        a.path.moveTo(h, l);
        return a.path;
      };
      f.prototype._readMorphMatrix = function(c, d, e) {
        return new a(g(c.readFloat(), d.readFloat(), e), g(c.readFloat(), d.readFloat(), e), g(c.readFloat(), d.readFloat(), e), g(c.readFloat(), d.readFloat(), e), g(c.readFloat(), d.readFloat(), e), g(c.readFloat(), d.readFloat(), e));
      };
      f.prototype._readMorphGradient = function(a, d, e, f) {
        var h = a.readUnsignedByte(), l = 2 * a.readShort() / 255, n = this._readMorphMatrix(a, d, e);
        f = 16 === h ? f.createLinearGradient(-1, 0, 1, 0) : f.createRadialGradient(l, 0, 0, 0, 0, 1);
        f.setTransform && f.setTransform(n.toSVGMatrix());
        n = a.readUnsignedByte();
        for (h = 0;h < n;h++) {
          var l = g(a.readUnsignedByte() / 255, d.readUnsignedByte() / 255, e), t = b(a.readUnsignedInt(), d.readUnsignedInt(), e), t = k.ColorUtilities.rgbaToCSSStyle(t);
          f.addColorStop(l, t);
        }
        a.position += 2;
        return f;
      };
      f.prototype._readMorphBitmap = function(a, d, e, b) {
        var f = a.readUnsignedInt();
        d = this._readMorphMatrix(a, d, e);
        e = a.readBoolean() ? "repeat" : "no-repeat";
        a = a.readBoolean();
        b = b.createPattern(this._textures[f]._canvas, e);
        b.setTransform(d.toSVGMatrix());
        return {style:b, smoothImage:a};
      };
      return f;
    }(l);
    r.RenderableMorphShape = p;
    var u = function() {
      function a() {
        this.align = this.leading = this.descent = this.ascent = this.width = this.y = this.x = 0;
        this.runs = [];
      }
      a._getMeasureContext = function() {
        a._measureContext || (a._measureContext = document.createElement("canvas").getContext("2d"));
        return a._measureContext;
      };
      a.prototype.addRun = function(b, c, h, l) {
        if (h) {
          var g = a._getMeasureContext();
          g.font = b;
          g = g.measureText(h).width | 0;
          this.runs.push(new d(b, c, h, g, l));
          this.width += g;
        }
      };
      a.prototype.wrap = function(b) {
        var c = [this], h = this.runs, l = this;
        l.width = 0;
        l.runs = [];
        for (var g = a._getMeasureContext(), k = 0;k < h.length;k++) {
          var n = h[k], t = n.text;
          n.text = "";
          n.width = 0;
          g.font = n.font;
          for (var p = b, m = t.split(/[\s.-]/), u = 0, w = 0;w < m.length;w++) {
            var r = m[w], v = t.substr(u, r.length + 1), H = g.measureText(v).width | 0;
            if (H > p) {
              do {
                if (n.text && (l.runs.push(n), l.width += n.width, n = new d(n.font, n.fillStyle, "", 0, n.underline), p = new a, p.y = l.y + l.descent + l.leading + l.ascent | 0, p.ascent = l.ascent, p.descent = l.descent, p.leading = l.leading, p.align = l.align, c.push(p), l = p), p = b - H, 0 > p) {
                  for (var D = v.length, y = v;1 < D && !(D--, y = v.substr(0, D), H = g.measureText(y).width | 0, H <= b);) {
                  }
                  n.text = y;
                  n.width = H;
                  v = v.substr(D);
                  H = g.measureText(v).width | 0;
                }
              } while (v && 0 > p);
            } else {
              p -= H;
            }
            n.text += v;
            n.width += H;
            u += r.length + 1;
          }
          l.runs.push(n);
          l.width += n.width;
        }
        return c;
      };
      a.prototype.toString = function() {
        return "TextLine {x: " + this.x + ", y: " + this.y + ", width: " + this.width + ", height: " + (this.ascent + this.descent + this.leading) + "}";
      };
      return a;
    }();
    r.TextLine = u;
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
    r.TextRun = d;
    p = function(d) {
      function b(c) {
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
      __extends(b, d);
      b.prototype.setBounds = function(a) {
        d.prototype.setBounds.call(this, a);
        this._textBounds.set(a);
        this.textRect.setElements(a.x + 2, a.y + 2, a.w - 2, a.h - 2);
      };
      b.prototype.setContent = function(a, d, e, b) {
        this._textRunData = d;
        this._plainText = a;
        this._matrix.set(e);
        this._coords = b;
        this.lines = [];
      };
      b.prototype.setStyle = function(a, d, e, b) {
        this._backgroundColor = a;
        this._borderColor = d;
        this._scrollV = e;
        this._scrollH = b;
      };
      b.prototype.reflow = function(a, d) {
        var e = this._textRunData;
        if (e) {
          for (var b = this._bounds, f = b.w - 4, h = this._plainText, l = this.lines, g = new u, n = 0, p = 0, t = 0, m = 0, w = 0, r = -1;e.position < e.length;) {
            var v = e.readInt(), y = e.readInt(), z = e.readInt(), C = e.readUTF(), x = e.readInt(), F = e.readInt(), B = e.readInt();
            x > t && (t = x);
            F > m && (m = F);
            B > w && (w = B);
            x = e.readBoolean();
            F = "";
            e.readBoolean() && (F += "italic ");
            x && (F += "bold ");
            z = F + z + "px " + C;
            C = e.readInt();
            C = k.ColorUtilities.rgbToHex(C);
            x = e.readInt();
            -1 === r && (r = x);
            e.readBoolean();
            e.readInt();
            e.readInt();
            e.readInt();
            e.readInt();
            e.readInt();
            for (var x = e.readBoolean(), E = "", F = !1;!F;v++) {
              F = v >= y - 1;
              B = h[v];
              if ("\r" !== B && "\n" !== B && (E += B, v < h.length - 1)) {
                continue;
              }
              g.addRun(z, C, E, x);
              if (g.runs.length) {
                l.length && (n += w);
                n += t;
                g.y = n | 0;
                n += m;
                g.ascent = t;
                g.descent = m;
                g.leading = w;
                g.align = r;
                if (d && g.width > f) {
                  for (g = g.wrap(f), E = 0;E < g.length;E++) {
                    var I = g[E], n = I.y + I.descent + I.leading;
                    l.push(I);
                    I.width > p && (p = I.width);
                  }
                } else {
                  l.push(g), g.width > p && (p = g.width);
                }
                g = new u;
              } else {
                n += t + m + w;
              }
              E = "";
              if (F) {
                w = m = t = 0;
                r = -1;
                break;
              }
              "\r" === B && "\n" === h[v + 1] && v++;
            }
            g.addRun(z, C, E, x);
          }
          e = h[h.length - 1];
          "\r" !== e && "\n" !== e || l.push(g);
          e = this.textRect;
          e.w = p;
          e.h = n;
          if (a) {
            if (!d) {
              f = p;
              p = b.w;
              switch(a) {
                case 1:
                  e.x = p - (f + 4) >> 1;
                  break;
                case 3:
                  e.x = p - (f + 4);
              }
              this._textBounds.setElements(e.x - 2, e.y - 2, e.w + 4, e.h + 4);
              b.w = f + 4;
            }
            b.x = e.x - 2;
            b.h = n + 4;
          } else {
            this._textBounds = b;
          }
          for (v = 0;v < l.length;v++) {
            if (b = l[v], b.width < f) {
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
      b.roundBoundPoints = function(a) {
        for (var d = 0;d < a.length;d++) {
          var e = a[d];
          e.x = Math.floor(e.x + .1) + .5;
          e.y = Math.floor(e.y + .1) + .5;
        }
      };
      b.prototype.render = function(c) {
        c.save();
        var d = this._textBounds;
        this._backgroundColor && (c.fillStyle = k.ColorUtilities.rgbaToCSSStyle(this._backgroundColor), c.fillRect(d.x, d.y, d.w, d.h));
        if (this._borderColor) {
          c.strokeStyle = k.ColorUtilities.rgbaToCSSStyle(this._borderColor);
          c.lineCap = "square";
          c.lineWidth = 1;
          var e = b.absoluteBoundPoints, h = c.currentTransform;
          h ? (d = d.clone(), (new a(h.a, h.b, h.c, h.d, h.e, h.f)).transformRectangle(d, e), c.setTransform(1, 0, 0, 1, 0, 0)) : (e[0].x = d.x, e[0].y = d.y, e[1].x = d.x + d.w, e[1].y = d.y, e[2].x = d.x + d.w, e[2].y = d.y + d.h, e[3].x = d.x, e[3].y = d.y + d.h);
          b.roundBoundPoints(e);
          d = new Path2D;
          d.moveTo(e[0].x, e[0].y);
          d.lineTo(e[1].x, e[1].y);
          d.lineTo(e[2].x, e[2].y);
          d.lineTo(e[3].x, e[3].y);
          d.lineTo(e[0].x, e[0].y);
          c.stroke(d);
          h && c.setTransform(h.a, h.b, h.c, h.d, h.e, h.f);
        }
        this._coords ? this._renderChars(c) : this._renderLines(c);
        c.restore();
      };
      b.prototype._renderChars = function(a) {
        if (this._matrix) {
          var d = this._matrix;
          a.transform(d.a, d.b, d.c, d.d, d.tx, d.ty);
        }
        for (var d = this.lines, e = this._coords, b = e.position = 0;b < d.length;b++) {
          for (var f = d[b].runs, h = 0;h < f.length;h++) {
            var l = f[h];
            a.font = l.font;
            a.fillStyle = l.fillStyle;
            for (var l = l.text, g = 0;g < l.length;g++) {
              var n = e.readInt() / 20, k = e.readInt() / 20;
              a.fillText(l[g], n, k);
            }
          }
        }
      };
      b.prototype._renderLines = function(a) {
        var d = this._textBounds;
        a.beginPath();
        a.rect(d.x + 2, d.y + 2, d.w - 4, d.h - 4);
        a.clip();
        a.translate(d.x - this._scrollH + 2, d.y + 2);
        for (var e = this.lines, b = this._scrollV, f = 0, h = 0;h < e.length;h++) {
          var l = e[h], g = l.x, n = l.y;
          if (h + 1 < b) {
            f = n + l.descent + l.leading;
          } else {
            n -= f;
            if (h + 1 - b && n > d.h) {
              break;
            }
            for (var k = l.runs, p = 0;p < k.length;p++) {
              var t = k[p];
              a.font = t.font;
              a.fillStyle = t.fillStyle;
              t.underline && a.fillRect(g, n + l.descent / 2 | 0, t.width, 1);
              a.textAlign = "left";
              a.textBaseline = "alphabetic";
              a.fillText(t.text, g, n);
              g += t.width;
            }
          }
        }
      };
      b.absoluteBoundPoints = [new v(0, 0), new v(0, 0), new v(0, 0), new v(0, 0)];
      return b;
    }(n);
    r.RenderableText = p;
    n = function(a) {
      function d(c, b) {
        a.call(this);
        this._flags = 3145728;
        this.properties = {};
        this.setBounds(new m(0, 0, c, b));
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
    }(n);
    r.Label = n;
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    var g = k.ColorUtilities.clampByte, b = function() {
      return function() {
      };
    }();
    r.Filter = b;
    var v = function(b) {
      function a(a, g, k) {
        b.call(this);
        this.blurX = a;
        this.blurY = g;
        this.quality = k;
      }
      __extends(a, b);
      return a;
    }(b);
    r.BlurFilter = v;
    v = function(b) {
      function a(a, g, k, w, t, l, u, d, e, f, c) {
        b.call(this);
        this.alpha = a;
        this.angle = g;
        this.blurX = k;
        this.blurY = w;
        this.color = t;
        this.distance = l;
        this.hideObject = u;
        this.inner = d;
        this.knockout = e;
        this.quality = f;
        this.strength = c;
      }
      __extends(a, b);
      return a;
    }(b);
    r.DropshadowFilter = v;
    b = function(b) {
      function a(a, g, k, w, t, l, u, d) {
        b.call(this);
        this.alpha = a;
        this.blurX = g;
        this.blurY = k;
        this.color = w;
        this.inner = t;
        this.knockout = l;
        this.quality = u;
        this.strength = d;
      }
      __extends(a, b);
      return a;
    }(b);
    r.GlowFilter = b;
    (function(b) {
      b[b.Unknown = 0] = "Unknown";
      b[b.Identity = 1] = "Identity";
    })(r.ColorMatrixType || (r.ColorMatrixType = {}));
    b = function() {
      function b(a) {
        this._data = new Float32Array(a);
        this._type = 0;
      }
      b.prototype.clone = function() {
        var a = new b(this._data);
        a._type = this._type;
        return a;
      };
      b.prototype.set = function(a) {
        this._data.set(a._data);
        this._type = a._type;
      };
      b.prototype.toWebGLMatrix = function() {
        return new Float32Array(this._data);
      };
      b.prototype.asWebGLMatrix = function() {
        return this._data.subarray(0, 16);
      };
      b.prototype.asWebGLVector = function() {
        return this._data.subarray(16, 20);
      };
      b.prototype.isIdentity = function() {
        if (this._type & 1) {
          return !0;
        }
        var a = this._data;
        return 1 == a[0] && 0 == a[1] && 0 == a[2] && 0 == a[3] && 0 == a[4] && 1 == a[5] && 0 == a[6] && 0 == a[7] && 0 == a[8] && 0 == a[9] && 1 == a[10] && 0 == a[11] && 0 == a[12] && 0 == a[13] && 0 == a[14] && 1 == a[15] && 0 == a[16] && 0 == a[17] && 0 == a[18] && 0 == a[19];
      };
      b.createIdentity = function() {
        var a = new b([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0]);
        a._type = 1;
        return a;
      };
      b.prototype.setMultipliersAndOffsets = function(a, b, g, k, m, t, l, u) {
        for (var d = this._data, e = 0;e < d.length;e++) {
          d[e] = 0;
        }
        d[0] = a;
        d[5] = b;
        d[10] = g;
        d[15] = k;
        d[16] = m / 255;
        d[17] = t / 255;
        d[18] = l / 255;
        d[19] = u / 255;
        this._type = 0;
      };
      b.prototype.transformRGBA = function(a) {
        var b = a >> 24 & 255, k = a >> 16 & 255, p = a >> 8 & 255, m = a & 255, t = this._data;
        a = g(b * t[0] + k * t[1] + p * t[2] + m * t[3] + 255 * t[16]);
        var l = g(b * t[4] + k * t[5] + p * t[6] + m * t[7] + 255 * t[17]), u = g(b * t[8] + k * t[9] + p * t[10] + m * t[11] + 255 * t[18]), b = g(b * t[12] + k * t[13] + p * t[14] + m * t[15] + 255 * t[19]);
        return a << 24 | l << 16 | u << 8 | b;
      };
      b.prototype.multiply = function(a) {
        if (!(a._type & 1)) {
          var b = this._data, g = a._data;
          a = b[0];
          var k = b[1], m = b[2], t = b[3], l = b[4], u = b[5], d = b[6], e = b[7], f = b[8], c = b[9], q = b[10], r = b[11], J = b[12], G = b[13], v = b[14], S = b[15], ea = b[16], ha = b[17], ia = b[18], ja = b[19], X = g[0], R = g[1], H = g[2], D = g[3], y = g[4], z = g[5], C = g[6], x = g[7], F = g[8], B = g[9], E = g[10], I = g[11], K = g[12], L = g[13], M = g[14], N = g[15], O = g[16], P = g[17], Q = g[18], g = g[19];
          b[0] = a * X + l * R + f * H + J * D;
          b[1] = k * X + u * R + c * H + G * D;
          b[2] = m * X + d * R + q * H + v * D;
          b[3] = t * X + e * R + r * H + S * D;
          b[4] = a * y + l * z + f * C + J * x;
          b[5] = k * y + u * z + c * C + G * x;
          b[6] = m * y + d * z + q * C + v * x;
          b[7] = t * y + e * z + r * C + S * x;
          b[8] = a * F + l * B + f * E + J * I;
          b[9] = k * F + u * B + c * E + G * I;
          b[10] = m * F + d * B + q * E + v * I;
          b[11] = t * F + e * B + r * E + S * I;
          b[12] = a * K + l * L + f * M + J * N;
          b[13] = k * K + u * L + c * M + G * N;
          b[14] = m * K + d * L + q * M + v * N;
          b[15] = t * K + e * L + r * M + S * N;
          b[16] = a * O + l * P + f * Q + J * g + ea;
          b[17] = k * O + u * P + c * Q + G * g + ha;
          b[18] = m * O + d * P + q * Q + v * g + ia;
          b[19] = t * O + e * P + r * Q + S * g + ja;
          this._type = 0;
        }
      };
      Object.defineProperty(b.prototype, "alphaMultiplier", {get:function() {
        return this._data[15];
      }, enumerable:!0, configurable:!0});
      b.prototype.hasOnlyAlphaMultiplier = function() {
        var a = this._data;
        return 1 == a[0] && 0 == a[1] && 0 == a[2] && 0 == a[3] && 0 == a[4] && 1 == a[5] && 0 == a[6] && 0 == a[7] && 0 == a[8] && 0 == a[9] && 1 == a[10] && 0 == a[11] && 0 == a[12] && 0 == a[13] && 0 == a[14] && 0 == a[16] && 0 == a[17] && 0 == a[18] && 0 == a[19];
      };
      b.prototype.equals = function(a) {
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
      b.prototype.toSVGFilterMatrix = function() {
        var a = this._data;
        return [a[0], a[4], a[8], a[12], a[16], a[1], a[5], a[9], a[13], a[17], a[2], a[6], a[10], a[14], a[18], a[3], a[7], a[11], a[15], a[19]].join(" ");
      };
      return b;
    }();
    r.ColorMatrix = b;
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(g) {
      function b(a, b) {
        return -1 !== a.indexOf(b, this.length - b.length);
      }
      var v = r.Geometry.Point3D, m = r.Geometry.Matrix3D, a = r.Geometry.degreesToRadian, h = k.Debug.unexpected, n = k.Debug.notImplemented;
      g.SHADER_ROOT = "shaders/";
      var p = function() {
        function p(a, b) {
          this._fillColor = k.Color.Red;
          this._surfaceRegionCache = new k.LRUList;
          this.modelViewProjectionMatrix = m.createIdentity();
          this._canvas = a;
          this._options = b;
          this.gl = a.getContext("experimental-webgl", {preserveDrawingBuffer:!1, antialias:!0, stencil:!0, premultipliedAlpha:!1});
          this._programCache = Object.create(null);
          this._resize();
          this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, b.unpackPremultiplyAlpha ? this.gl.ONE : this.gl.ZERO);
          this._backgroundColor = k.Color.Black;
          this._geometry = new g.WebGLGeometry(this);
          this._tmpVertices = g.Vertex.createEmptyVertices(g.Vertex, 64);
          this._maxSurfaces = b.maxSurfaces;
          this._maxSurfaceSize = b.maxSurfaceSize;
          this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
          this.gl.enable(this.gl.BLEND);
          this.modelViewProjectionMatrix = m.create2DProjection(this._w, this._h, 2E3);
          var h = this;
          this._surfaceRegionAllocator = new r.SurfaceRegionAllocator.SimpleAllocator(function() {
            var a = h._createTexture();
            return new g.WebGLSurface(1024, 1024, a);
          });
        }
        Object.defineProperty(p.prototype, "surfaces", {get:function() {
          return this._surfaceRegionAllocator.surfaces;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(p.prototype, "fillStyle", {set:function(a) {
          this._fillColor.set(k.Color.parseColor(a));
        }, enumerable:!0, configurable:!0});
        p.prototype.setBlendMode = function(a) {
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
              n("Blend Mode: " + a);
          }
        };
        p.prototype.setBlendOptions = function() {
          this.gl.blendFunc(this._options.sourceBlendFactor, this._options.destinationBlendFactor);
        };
        p.glSupportedBlendMode = function(a) {
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
        p.prototype.create2DProjectionMatrix = function() {
          return m.create2DProjection(this._w, this._h, -this._w);
        };
        p.prototype.createPerspectiveMatrix = function(b, h, g) {
          g = a(g);
          h = m.createPerspective(a(h));
          var d = new v(0, 1, 0), e = new v(0, 0, 0);
          b = new v(0, 0, b);
          b = m.createCameraLookAt(b, e, d);
          b = m.createInverse(b);
          d = m.createIdentity();
          d = m.createMultiply(d, m.createTranslation(-this._w / 2, -this._h / 2));
          d = m.createMultiply(d, m.createScale(1 / this._w, -1 / this._h, .01));
          d = m.createMultiply(d, m.createYRotation(g));
          d = m.createMultiply(d, b);
          return d = m.createMultiply(d, h);
        };
        p.prototype.discardCachedImages = function() {
          2 <= r.traceLevel && r.writer && r.writer.writeLn("Discard Cache");
          for (var a = this._surfaceRegionCache.count / 2 | 0, b = 0;b < a;b++) {
            var h = this._surfaceRegionCache.pop();
            2 <= r.traceLevel && r.writer && r.writer.writeLn("Discard: " + h);
            h.texture.atlas.remove(h.region);
            h.texture = null;
          }
        };
        p.prototype.cacheImage = function(a) {
          var b = this.allocateSurfaceRegion(a.width, a.height);
          2 <= r.traceLevel && r.writer && r.writer.writeLn("Uploading Image: @ " + b.region);
          this._surfaceRegionCache.use(b);
          this.updateSurfaceRegion(a, b);
          return b;
        };
        p.prototype.allocateSurfaceRegion = function(a, b) {
          return this._surfaceRegionAllocator.allocate(a, b, null);
        };
        p.prototype.updateSurfaceRegion = function(a, b) {
          var h = this.gl;
          h.bindTexture(h.TEXTURE_2D, b.surface.texture);
          h.texSubImage2D(h.TEXTURE_2D, 0, b.region.x, b.region.y, h.RGBA, h.UNSIGNED_BYTE, a);
        };
        p.prototype._resize = function() {
          var a = this.gl;
          this._w = this._canvas.width;
          this._h = this._canvas.height;
          a.viewport(0, 0, this._w, this._h);
          for (var b in this._programCache) {
            this._initializeProgram(this._programCache[b]);
          }
        };
        p.prototype._initializeProgram = function(a) {
          this.gl.useProgram(a);
        };
        p.prototype._createShaderFromFile = function(a) {
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
        p.prototype.createProgramFromFiles = function() {
          var a = this._programCache["combined.vert-combined.frag"];
          a || (a = this._createProgram([this._createShaderFromFile("combined.vert"), this._createShaderFromFile("combined.frag")]), this._queryProgramAttributesAndUniforms(a), this._initializeProgram(a), this._programCache["combined.vert-combined.frag"] = a);
          return a;
        };
        p.prototype._createProgram = function(a) {
          var b = this.gl, g = b.createProgram();
          a.forEach(function(a) {
            b.attachShader(g, a);
          });
          b.linkProgram(g);
          b.getProgramParameter(g, b.LINK_STATUS) || (h("Cannot link program: " + b.getProgramInfoLog(g)), b.deleteProgram(g));
          return g;
        };
        p.prototype._createShader = function(a, b) {
          var g = this.gl, d = g.createShader(a);
          g.shaderSource(d, b);
          g.compileShader(d);
          return g.getShaderParameter(d, g.COMPILE_STATUS) ? d : (h("Cannot compile shader: " + g.getShaderInfoLog(d)), g.deleteShader(d), null);
        };
        p.prototype._createTexture = function() {
          var a = this.gl, b = a.createTexture();
          a.bindTexture(a.TEXTURE_2D, b);
          a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE);
          a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE);
          a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR);
          a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR);
          a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, 1024, 1024, 0, a.RGBA, a.UNSIGNED_BYTE, null);
          return b;
        };
        p.prototype._createFramebuffer = function(a) {
          var b = this.gl, h = b.createFramebuffer();
          b.bindFramebuffer(b.FRAMEBUFFER, h);
          b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, a, 0);
          b.bindFramebuffer(b.FRAMEBUFFER, null);
          return h;
        };
        p.prototype._queryProgramAttributesAndUniforms = function(a) {
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
        Object.defineProperty(p.prototype, "target", {set:function(a) {
          var b = this.gl;
          a ? (b.viewport(0, 0, a.w, a.h), b.bindFramebuffer(b.FRAMEBUFFER, a.framebuffer)) : (b.viewport(0, 0, this._w, this._h), b.bindFramebuffer(b.FRAMEBUFFER, null));
        }, enumerable:!0, configurable:!0});
        p.prototype.clear = function(a) {
          a = this.gl;
          a.clearColor(0, 0, 0, 0);
          a.clear(a.COLOR_BUFFER_BIT);
        };
        p.prototype.clearTextureRegion = function(a, b) {
          void 0 === b && (b = k.Color.None);
          var h = this.gl, d = a.region;
          this.target = a.surface;
          h.enable(h.SCISSOR_TEST);
          h.scissor(d.x, d.y, d.w, d.h);
          h.clearColor(b.r, b.g, b.b, b.a);
          h.clear(h.COLOR_BUFFER_BIT | h.DEPTH_BUFFER_BIT);
          h.disable(h.SCISSOR_TEST);
        };
        p.prototype.sizeOf = function(a) {
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
              n(a);
          }
        };
        p.MAX_SURFACES = 8;
        return p;
      }();
      g.WebGLContext = p;
    })(r.WebGL || (r.WebGL = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(k, r) {
  function g() {
    this.constructor = k;
  }
  for (var b in r) {
    r.hasOwnProperty(b) && (k[b] = r[b]);
  }
  g.prototype = r.prototype;
  k.prototype = new g;
};
(function(k) {
  (function(r) {
    (function(g) {
      var b = k.Debug.assert, v = function(a) {
        function h() {
          a.apply(this, arguments);
        }
        __extends(h, a);
        h.prototype.ensureVertexCapacity = function(a) {
          b(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 8 * a);
        };
        h.prototype.writeVertex = function(a, h) {
          b(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 8);
          this.writeVertexUnsafe(a, h);
        };
        h.prototype.writeVertexUnsafe = function(a, b) {
          var h = this._offset >> 2;
          this._f32[h] = a;
          this._f32[h + 1] = b;
          this._offset += 8;
        };
        h.prototype.writeVertex3D = function(a, h, g) {
          b(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 12);
          this.writeVertex3DUnsafe(a, h, g);
        };
        h.prototype.writeVertex3DUnsafe = function(a, b, h) {
          var g = this._offset >> 2;
          this._f32[g] = a;
          this._f32[g + 1] = b;
          this._f32[g + 2] = h;
          this._offset += 12;
        };
        h.prototype.writeTriangleElements = function(a, h, g) {
          b(0 === (this._offset & 1));
          this.ensureCapacity(this._offset + 6);
          var k = this._offset >> 1;
          this._u16[k] = a;
          this._u16[k + 1] = h;
          this._u16[k + 2] = g;
          this._offset += 6;
        };
        h.prototype.ensureColorCapacity = function(a) {
          b(0 === (this._offset & 2));
          this.ensureCapacity(this._offset + 16 * a);
        };
        h.prototype.writeColorFloats = function(a, h, g, k) {
          b(0 === (this._offset & 2));
          this.ensureCapacity(this._offset + 16);
          this.writeColorFloatsUnsafe(a, h, g, k);
        };
        h.prototype.writeColorFloatsUnsafe = function(a, b, h, g) {
          var l = this._offset >> 2;
          this._f32[l] = a;
          this._f32[l + 1] = b;
          this._f32[l + 2] = h;
          this._f32[l + 3] = g;
          this._offset += 16;
        };
        h.prototype.writeColor = function() {
          var a = Math.random(), h = Math.random(), g = Math.random(), k = Math.random() / 2;
          b(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 4);
          this._i32[this._offset >> 2] = k << 24 | g << 16 | h << 8 | a;
          this._offset += 4;
        };
        h.prototype.writeColorUnsafe = function(a, b, h, g) {
          this._i32[this._offset >> 2] = g << 24 | h << 16 | b << 8 | a;
          this._offset += 4;
        };
        h.prototype.writeRandomColor = function() {
          this.writeColor();
        };
        return h;
      }(k.ArrayUtilities.ArrayWriter);
      g.BufferWriter = v;
      g.WebGLAttribute = function() {
        return function(a, b, g, k) {
          void 0 === k && (k = !1);
          this.name = a;
          this.size = b;
          this.type = g;
          this.normalized = k;
        };
      }();
      var m = function() {
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
      g.WebGLAttributeList = m;
      m = function() {
        function a(a) {
          this._elementOffset = this.triangleCount = 0;
          this.context = a;
          this.array = new v(8);
          this.buffer = a.gl.createBuffer();
          this.elementArray = new v(8);
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
      g.WebGLGeometry = m;
      m = function(a) {
        function b(h, g, k) {
          a.call(this, h, g, k);
        }
        __extends(b, a);
        b.createEmptyVertices = function(a, b) {
          for (var h = [], g = 0;g < b;g++) {
            h.push(new a(0, 0, 0));
          }
          return h;
        };
        return b;
      }(r.Geometry.Point3D);
      g.Vertex = m;
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
    })(r.WebGL || (r.WebGL = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    (function(g) {
      var b = function() {
        function b(a, h, g) {
          this.texture = g;
          this.w = a;
          this.h = h;
          this._regionAllocator = new k.RegionAllocator.CompactAllocator(this.w, this.h);
        }
        b.prototype.allocate = function(a, b) {
          var g = this._regionAllocator.allocate(a, b);
          return g ? new v(this, g) : null;
        };
        b.prototype.free = function(a) {
          this._regionAllocator.free(a.region);
        };
        return b;
      }();
      g.WebGLSurface = b;
      var v = function() {
        return function(b, a) {
          this.surface = b;
          this.region = a;
          this.next = this.previous = null;
        };
      }();
      g.WebGLSurfaceRegion = v;
    })(k.WebGL || (k.WebGL = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(g) {
      var b = k.Color;
      g.TILE_SIZE = 256;
      g.MIN_UNTILED_SIZE = 256;
      var v = r.Geometry.Matrix, m = r.Geometry.Rectangle, a = function(a) {
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
      }(r.RendererOptions);
      g.WebGLRendererOptions = a;
      var h = function(h) {
        function k(b, p, l) {
          void 0 === l && (l = new a);
          h.call(this, b, p, l);
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
          this._viewport = new m(0, 0, this._canvas.width, this._canvas.height);
          this._context._resize();
        };
        k.prototype._cacheImageCallback = function(a, b, h) {
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
        k.prototype._enterClip = function(a, b, h, g) {
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
        k.prototype._leaveClip = function(a, b, h, g) {
          h.flush();
          b = this._context.gl;
          if (a = this._clipStack.pop()) {
            b.colorMask(!1, !1, !1, !1), b.stencilOp(b.KEEP, b.KEEP, b.DECR), h.flush(), b.colorMask(!0, !0, !0, !0), b.stencilFunc(b.NOTEQUAL, 0, this._clipStack.length), b.stencilOp(b.KEEP, b.KEEP, b.KEEP);
          }
          0 === this._clipStack.length && b.disable(b.STENCIL_TEST);
        };
        k.prototype._renderFrame = function(a, b, h, g) {
        };
        k.prototype._renderSurfaces = function(a) {
          var h = this._options, l = this._context, k = this._viewport;
          if (h.drawSurfaces) {
            var d = l.surfaces, l = v.createIdentity();
            if (0 <= h.drawSurface && h.drawSurface < d.length) {
              for (var h = d[h.drawSurface | 0], d = new m(0, 0, h.w, h.h), e = d.clone();e.w > k.w;) {
                e.scale(.5, .5);
              }
              a.drawImage(new g.WebGLSurfaceRegion(h, d), e, b.White, null, l, .2);
            } else {
              e = k.w / 5;
              e > k.h / d.length && (e = k.h / d.length);
              a.fillRectangle(new m(k.w - e, 0, e, k.h), new b(0, 0, 0, .5), l, .1);
              for (var f = 0;f < d.length;f++) {
                var h = d[f], c = new m(k.w - e, f * e, e, e);
                a.drawImage(new g.WebGLSurfaceRegion(h, new m(0, 0, h.w, h.h)), c, b.White, null, l, .2);
              }
            }
            a.flush();
          }
        };
        k.prototype.render = function() {
          var a = this._options, h = this._context.gl;
          this._context.modelViewProjectionMatrix = a.perspectiveCamera ? this._context.createPerspectiveMatrix(a.perspectiveCameraDistance + (a.animateZoom ? .8 * Math.sin(Date.now() / 3E3) : 0), a.perspectiveCameraFOV, a.perspectiveCameraAngle) : this._context.create2DProjectionMatrix();
          var g = this._brush;
          h.clearColor(0, 0, 0, 0);
          h.clear(h.COLOR_BUFFER_BIT | h.DEPTH_BUFFER_BIT);
          g.reset();
          h = this._viewport;
          g.flush();
          a.paintViewport && (g.fillRectangle(h, new b(.5, 0, 0, .25), v.createIdentity(), 0), g.flush());
          this._renderSurfaces(g);
        };
        return k;
      }(r.Renderer);
      g.WebGLRenderer = h;
    })(r.WebGL || (r.WebGL = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(g) {
      var b = k.Color, v = r.Geometry.Point, m = r.Geometry.Matrix3D, a = function() {
        function a(b, h, g) {
          this._target = g;
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
          this.coordinate = new v(0, 0);
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
        b.prototype.drawImage = function(a, h, g, k, d, e, f) {
          void 0 === e && (e = 0);
          void 0 === f && (f = 1);
          if (!a || !a.surface) {
            return !0;
          }
          h = h.clone();
          this._colorMatrix && (k && this._colorMatrix.equals(k) || this.flush());
          this._colorMatrix = k;
          this._blendMode !== f && (this.flush(), this._blendMode = f);
          f = this._surfaces.indexOf(a.surface);
          0 > f && (8 === this._surfaces.length && this.flush(), this._surfaces.push(a.surface), f = this._surfaces.length - 1);
          var c = b._tmpVertices, n = a.region.clone();
          n.offset(1, 1).resize(-2, -2);
          n.scale(1 / a.surface.w, 1 / a.surface.h);
          d.transformRectangle(h, c);
          for (a = 0;4 > a;a++) {
            c[a].z = e;
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
            e = b._tmpVertices[a], e.kind = k ? 2 : 1, e.color.set(g), e.sampler = f, e.writeTo(this._geometry);
          }
          this._geometry.addQuad();
          return !0;
        };
        b.prototype.fillRectangle = function(a, h, g, k) {
          void 0 === k && (k = 0);
          g.transformRectangle(a, b._tmpVertices);
          for (a = 0;4 > a;a++) {
            g = b._tmpVertices[a], g.kind = 0, g.color.set(h), g.z = k, g.writeTo(this._geometry);
          }
          this._geometry.addQuad();
        };
        b.prototype.flush = function() {
          var a = this._geometry, b = this._program, g = this._context.gl, k;
          a.uploadBuffers();
          g.useProgram(b);
          this._target ? (k = m.create2DProjection(this._target.w, this._target.h, 2E3), k = m.createMultiply(k, m.createScale(1, -1, 1))) : k = this._context.modelViewProjectionMatrix;
          g.uniformMatrix4fv(b.uniforms.uTransformMatrix3D.location, !1, k.asWebGLMatrix());
          this._colorMatrix && (g.uniformMatrix4fv(b.uniforms.uColorMatrix.location, !1, this._colorMatrix.asWebGLMatrix()), g.uniform4fv(b.uniforms.uColorVector.location, this._colorMatrix.asWebGLVector()));
          for (k = 0;k < this._surfaces.length;k++) {
            g.activeTexture(g.TEXTURE0 + k), g.bindTexture(g.TEXTURE_2D, this._surfaces[k].texture);
          }
          g.uniform1iv(b.uniforms["uSampler[0]"].location, [0, 1, 2, 3, 4, 5, 6, 7]);
          g.bindBuffer(g.ARRAY_BUFFER, a.buffer);
          var d = h.attributeList.size, e = h.attributeList.attributes;
          for (k = 0;k < e.length;k++) {
            var f = e[k], c = b.attributes[f.name].location;
            g.enableVertexAttribArray(c);
            g.vertexAttribPointer(c, f.size, f.type, f.normalized, d, f.offset);
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
    })(r.WebGL || (r.WebGL = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    (function(g) {
      var b = CanvasRenderingContext2D.prototype.save, k = CanvasRenderingContext2D.prototype.clip, m = CanvasRenderingContext2D.prototype.fill, a = CanvasRenderingContext2D.prototype.stroke, h = CanvasRenderingContext2D.prototype.restore, n = CanvasRenderingContext2D.prototype.beginPath;
      g.notifyReleaseChanged = function() {
        CanvasRenderingContext2D.prototype.save = b;
        CanvasRenderingContext2D.prototype.clip = k;
        CanvasRenderingContext2D.prototype.fill = m;
        CanvasRenderingContext2D.prototype.stroke = a;
        CanvasRenderingContext2D.prototype.restore = h;
        CanvasRenderingContext2D.prototype.beginPath = n;
      };
      CanvasRenderingContext2D.prototype.enterBuildingClippingRegion = function() {
        this.buildingClippingRegionDepth || (this.buildingClippingRegionDepth = 0);
        this.buildingClippingRegionDepth++;
      };
      CanvasRenderingContext2D.prototype.leaveBuildingClippingRegion = function() {
        this.buildingClippingRegionDepth--;
      };
    })(k.Canvas2D || (k.Canvas2D = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(g) {
      function b(a) {
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
            k.Debug.somewhatImplemented("Blend Mode: " + r.BlendMode[a]);
        }
        return b;
      }
      var v = k.NumberUtilities.clamp;
      navigator.userAgent.indexOf("Firefox");
      var m = function() {
        function a() {
        }
        a._prepareSVGFilters = function() {
          if (!a._svgBlurFilter) {
            var b = document.createElementNS("http://www.w3.org/2000/svg", "svg"), g = document.createElementNS("http://www.w3.org/2000/svg", "defs"), k = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            k.setAttribute("id", "svgBlurFilter");
            var m = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
            m.setAttribute("stdDeviation", "0 0");
            k.appendChild(m);
            g.appendChild(k);
            a._svgBlurFilter = m;
            k = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            k.setAttribute("id", "svgDropShadowFilter");
            m = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
            m.setAttribute("in", "SourceAlpha");
            m.setAttribute("stdDeviation", "3");
            k.appendChild(m);
            a._svgDropshadowFilterBlur = m;
            m = document.createElementNS("http://www.w3.org/2000/svg", "feOffset");
            m.setAttribute("dx", "0");
            m.setAttribute("dy", "0");
            m.setAttribute("result", "offsetblur");
            k.appendChild(m);
            a._svgDropshadowFilterOffset = m;
            m = document.createElementNS("http://www.w3.org/2000/svg", "feFlood");
            m.setAttribute("flood-color", "rgba(0,0,0,1)");
            k.appendChild(m);
            a._svgDropshadowFilterFlood = m;
            m = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
            m.setAttribute("in2", "offsetblur");
            m.setAttribute("operator", "in");
            k.appendChild(m);
            var m = document.createElementNS("http://www.w3.org/2000/svg", "feMerge"), l = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
            m.appendChild(l);
            l = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
            l.setAttribute("in", "SourceGraphic");
            m.appendChild(l);
            k.appendChild(m);
            g.appendChild(k);
            k = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            k.setAttribute("id", "svgColorMatrixFilter");
            m = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
            m.setAttribute("color-interpolation-filters", "sRGB");
            m.setAttribute("in", "SourceGraphic");
            m.setAttribute("type", "matrix");
            k.appendChild(m);
            g.appendChild(k);
            a._svgColorMatrixFilter = m;
            b.appendChild(g);
            document.documentElement.appendChild(b);
          }
        };
        a._applyColorMatrixFilter = function(b, g) {
          a._prepareSVGFilters();
          a._svgColorMatrixFilter.setAttribute("values", g.toSVGFilterMatrix());
          b.filter = "url(#svgColorMatrixFilter)";
        };
        a._applyFilters = function(b, g, m) {
          function t(a) {
            var d = b / 2;
            switch(a) {
              case 0:
                return 0;
              case 1:
                return d / 2.7;
              case 2:
                return d / 1.28;
              default:
                return d;
            }
          }
          a._prepareSVGFilters();
          a._removeFilters(g);
          for (var l = 0;l < m.length;l++) {
            var u = m[l];
            if (u instanceof r.BlurFilter) {
              var d = u, u = t(d.quality);
              a._svgBlurFilter.setAttribute("stdDeviation", d.blurX * u + " " + d.blurY * u);
              g.filter = "url(#svgBlurFilter)";
            } else {
              u instanceof r.DropshadowFilter && (d = u, u = t(d.quality), a._svgDropshadowFilterBlur.setAttribute("stdDeviation", d.blurX * u + " " + d.blurY * u), a._svgDropshadowFilterOffset.setAttribute("dx", String(Math.cos(d.angle * Math.PI / 180) * d.distance * b)), a._svgDropshadowFilterOffset.setAttribute("dy", String(Math.sin(d.angle * Math.PI / 180) * d.distance * b)), a._svgDropshadowFilterFlood.setAttribute("flood-color", k.ColorUtilities.rgbaToCSSStyle(d.color << 8 | Math.round(255 * 
              d.alpha))), g.filter = "url(#svgDropShadowFilter)");
            }
          }
        };
        a._removeFilters = function(a) {
          a.filter = "none";
        };
        a._applyColorMatrix = function(b, g) {
          a._removeFilters(b);
          g.isIdentity() ? (b.globalAlpha = 1, b.globalColorMatrix = null) : g.hasOnlyAlphaMultiplier() ? (b.globalAlpha = v(g.alphaMultiplier, 0, 1), b.globalColorMatrix = null) : (b.globalAlpha = 1, a._svgFiltersAreSupported ? (a._applyColorMatrixFilter(b, g), b.globalColorMatrix = null) : b.globalColorMatrix = g);
        };
        a._svgFiltersAreSupported = !!Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype, "filter");
        return a;
      }();
      g.Filters = m;
      var a = function() {
        function a(b, h, g, k) {
          this.surface = b;
          this.region = h;
          this.w = g;
          this.h = k;
        }
        a.prototype.free = function() {
          this.surface.free(this);
        };
        a._ensureCopyCanvasSize = function(b, g) {
          var m;
          if (a._copyCanvasContext) {
            if (m = a._copyCanvasContext.canvas, m.width < b || m.height < g) {
              m.width = k.IntegerUtilities.nearestPowerOfTwo(b), m.height = k.IntegerUtilities.nearestPowerOfTwo(g);
            }
          } else {
            m = document.createElement("canvas"), "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(m), m.width = 512, m.height = 512, a._copyCanvasContext = m.getContext("2d");
          }
        };
        a.prototype.draw = function(g, k, m, t, l, r) {
          this.context.setTransform(1, 0, 0, 1, 0, 0);
          var d, e = 0, f = 0;
          g.context.canvas === this.context.canvas ? (a._ensureCopyCanvasSize(t, l), d = a._copyCanvasContext, d.clearRect(0, 0, t, l), d.drawImage(g.surface.canvas, g.region.x, g.region.y, t, l, 0, 0, t, l), d = d.canvas, f = e = 0) : (d = g.surface.canvas, e = g.region.x, f = g.region.y);
          a: {
            switch(r) {
              case 11:
                g = !0;
                break a;
              default:
                g = !1;
            }
          }
          g && (this.context.save(), this.context.beginPath(), this.context.rect(k, m, t, l), this.context.clip());
          this.context.globalCompositeOperation = b(r);
          this.context.drawImage(d, e, f, t, l, k, m, t, l);
          this.context.globalCompositeOperation = b(1);
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
          a.fillStyle = null;
          a.strokeStyle = null;
          a.globalAlpha = 1;
          a.globalColorMatrix = null;
          a.globalCompositeOperation = b(1);
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
      g.Canvas2DSurfaceRegion = a;
      m = function() {
        function b(a, h) {
          this.canvas = a;
          this.context = a.getContext("2d");
          this.w = a.width;
          this.h = a.height;
          this._regionAllocator = h;
        }
        b.prototype.allocate = function(b, h) {
          var g = this._regionAllocator.allocate(b, h);
          return g ? new a(this, g, b, h) : null;
        };
        b.prototype.free = function(a) {
          this._regionAllocator.free(a.region);
        };
        return b;
      }();
      g.Canvas2DSurface = m;
    })(r.Canvas2D || (r.Canvas2D = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(g) {
      var b = k.Debug.assert, v = k.GFX.Geometry.Rectangle, m = k.GFX.Geometry.Point, a = k.GFX.Geometry.Matrix, h = k.NumberUtilities.clamp, n = k.NumberUtilities.pow2, p = function() {
        return function(a, b) {
          this.surfaceRegion = a;
          this.scale = b;
        };
      }();
      g.MipMapLevel = p;
      var w = function() {
        function a(b, c, d, e) {
          this._node = c;
          this._levels = [];
          this._surfaceRegionAllocator = d;
          this._size = e;
          this._renderer = b;
        }
        a.prototype.getLevel = function(a) {
          a = Math.max(a.getAbsoluteScaleX(), a.getAbsoluteScaleY());
          var c = 0;
          1 !== a && (c = h(Math.round(Math.log(a) / Math.LN2), -5, 3));
          this._node.hasFlags(2097152) || (c = h(c, -5, 0));
          a = n(c);
          var b = 5 + c, c = this._levels[b];
          if (!c) {
            var d = this._node.getBounds().clone();
            d.scale(a, a);
            d.snap();
            var e = this._surfaceRegionAllocator.allocate(d.w, d.h, null), g = e.region, c = this._levels[b] = new p(e, a), b = new l(e);
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
      g.MipMap = w;
      (function(a) {
        a[a.NonZero = 0] = "NonZero";
        a[a.EvenOdd = 1] = "EvenOdd";
      })(g.FillRule || (g.FillRule = {}));
      var t = function(a) {
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
      }(r.RendererOptions);
      g.Canvas2DRendererOptions = t;
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
      v.createMaxI16();
      var l = function(b) {
        function d(c) {
          b.call(this);
          this.clip = v.createEmpty();
          this.clipList = [];
          this.clipPath = null;
          this.flags = 0;
          this.target = null;
          this.matrix = a.createIdentity();
          this.colorMatrix = r.ColorMatrix.createIdentity();
          this.filters = [];
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
          this.filters.length = 0;
          this.filters.push.apply(this.filters, a.filters);
          k.ArrayUtilities.copyFrom(this.clipList, a.clipList);
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
      }(r.State);
      g.RenderState = l;
      var u = function() {
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
      g.FrameInfo = u;
      var d = function(d) {
        function f(a, b, h) {
          void 0 === h && (h = new t);
          d.call(this, a, b, h);
          this._visited = 0;
          this._frameInfo = new u;
          this._fontSize = 0;
          this._layers = [];
          if (a instanceof HTMLCanvasElement) {
            var g = a;
            this._viewport = new v(0, 0, g.width, g.height);
            this._target = this._createTarget(g);
          } else {
            this._addLayer("Background Layer");
            h = this._addLayer("Canvas Layer");
            g = document.createElement("canvas");
            h.appendChild(g);
            this._viewport = new v(0, 0, a.scrollWidth, a.scrollHeight);
            var l = this;
            b.addEventListener(1, function() {
              l._onStageBoundsChanged(g);
            });
            this._onStageBoundsChanged(g);
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
          return new g.Canvas2DSurfaceRegion(new g.Canvas2DSurface(a), new r.RegionAllocator.Region(0, 0, a.width, a.height), a.width, a.height);
        };
        f.prototype._onStageBoundsChanged = function(a) {
          var b = this._stage.getBounds(!0);
          b.snap();
          for (var d = this._devicePixelRatio = window.devicePixelRatio || 1, e = b.w / d + "px", d = b.h / d + "px", f = 0;f < this._layers.length;f++) {
            var h = this._layers[f];
            h.style.width = e;
            h.style.height = d;
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
          f._initializedCaches || (f._surfaceCache = new r.SurfaceRegionAllocator.SimpleAllocator(function(a, b) {
            var d = document.createElement("canvas");
            "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(d);
            var e = Math.max(1024, a), f = Math.max(1024, b);
            d.width = e;
            d.height = f;
            var h = null, h = 512 <= a || 512 <= b ? new r.RegionAllocator.GridAllocator(e, f, e, f) : new r.RegionAllocator.BucketAllocator(e, f);
            return new g.Canvas2DSurface(d, h);
          }), f._shapeCache = new r.SurfaceRegionAllocator.SimpleAllocator(function(a, b) {
            var d = document.createElement("canvas");
            "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(d);
            d.width = 1024;
            d.height = 1024;
            var e = e = new r.RegionAllocator.CompactAllocator(1024, 1024);
            return new g.Canvas2DSurface(d, e);
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
          var e = new l(this._target);
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
          var h = this._options.cacheShapesMaxSize, g = Math.max(d.getAbsoluteScaleX(), d.getAbsoluteScaleY()), l = !!(b.flags & 16), k = !!(b.flags & 8);
          if (b.hasFlags(256)) {
            if (k || l || !b.colorMatrix.isIdentity() || a.hasFlags(1048576) || 100 < this._options.cacheShapesThreshold || e.w * g > h || e.h * g > h) {
              return !1;
            }
            (g = a.properties.mipMap) || (g = a.properties.mipMap = new w(this, a, f._shapeCache, h));
            l = g.getLevel(d);
            h = l.surfaceRegion;
            g = h.region;
            return l ? (l = b.target.context, l.imageSmoothingEnabled = l.mozImageSmoothingEnabled = !0, l.setTransform(d.a, d.b, d.c, d.d, d.tx, d.ty), l.drawImage(h.surface.canvas, g.x, g.y, g.w, g.h, e.x, e.y, e.w, e.h), !0) : !1;
          }
        };
        f.prototype._intersectsClipList = function(a, b) {
          var d = a.getBounds(!0), e = !1;
          b.matrix.transformRectangleAABB(d);
          b.clip.intersects(d) && (e = !0);
          var f = b.clipList;
          if (e && f.length) {
            for (var e = !1, h = 0;h < f.length;h++) {
              if (d.intersects(f[h])) {
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
            var d = a.getLayer().filters;
            d && b.filters.push.apply(b.filters, d);
            if (b.flags & 1 || 1 === a.getLayer().blendMode && !a.getLayer().mask || !this._options.blending) {
              if (this._intersectsClipList(a, b)) {
                for (var d = null, e = a.getChildren(), f = 0;f < e.length;f++) {
                  var h = e[f], g = h.getTransform(), l = b.transform(g);
                  l.toggleFlags(4096, h.hasFlags(524288));
                  if (0 <= h.clip) {
                    d = d || new Uint8Array(e.length);
                    d[h.clip + f]++;
                    var k = l.clone();
                    k.flags |= 16;
                    k.beginClipPath(g.getMatrix());
                    h.visit(this, k);
                    k.applyClipPath();
                    k.free();
                  } else {
                    h.visit(this, l);
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
            } else {
              b = b.clone(), b.flags |= 1, this._renderLayer(a, b), b.free();
            }
            this._renderDebugInfo(a, b);
          }
        };
        f.prototype._renderDebugInfo = function(a, b) {
          if (b.flags & 1024) {
            var d = b.target.context, e = a.getBounds(!0), h = a.properties.style;
            h || (h = a.properties.style = k.Color.randomColor().toCSSStyle());
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
            g.Filters._applyColorMatrix(e, b.colorMatrix);
            g.Filters._svgFiltersAreSupported && r.filters.value && g.Filters._applyFilters(this._devicePixelRatio, e, b.filters);
            a.source instanceof r.RenderableVideo ? this.visitRenderableVideo(a.source, b) : 0 < e.globalAlpha && this.visitRenderable(a.source, b, a.ratio);
            b.flags & 8192 && d.free();
          }
        };
        f.prototype.visitRenderableVideo = function(a, b) {
          if (a.video && a.video.videoWidth) {
            var d = this._devicePixelRatio, e = b.matrix.clone();
            e.scale(1 / d, 1 / d);
            var d = a.getBounds(), f = k.GFX.Geometry.Matrix.createIdentity();
            f.scale(d.w / a.video.videoWidth, d.h / a.video.videoHeight);
            e.preMultiply(f);
            f.free();
            d = e.toCSSTransform();
            a.video.style.transformOrigin = "0 0";
            a.video.style.transform = d;
            var h = this._backgroundVideoLayer;
            h !== a.video.parentElement && (h.appendChild(a.video), a.addEventListener(2, function ea(a) {
              h.removeChild(a.video);
              a.removeEventListener(2, ea);
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
            var f = b.matrix, e = b.target.context, h = !!(b.flags & 16), g = !!(b.flags & 8);
            e.setTransform(f.a, f.b, f.c, f.d, f.tx, f.ty);
            this._frameInfo.shapes++;
            e.imageSmoothingEnabled = e.mozImageSmoothingEnabled = b.hasFlags(4096);
            f = a.properties.renderCount || 0;
            a.properties.renderCount = ++f;
            a.render(e, d, null, h ? b.clipPath : null, g);
          }
        };
        f.prototype._renderLayer = function(a, b) {
          var d = a.getLayer(), e = d.mask;
          if (e) {
            this._renderWithMask(a, e, d.blendMode, !a.hasFlags(131072) || !e.hasFlags(131072), b);
          } else {
            var e = v.allocate(), f = this._renderToTemporarySurface(a, b, e, null);
            f && (b.target.draw(f, e.x, e.y, e.w, e.h, d.blendMode), f.free());
            e.free();
          }
        };
        f.prototype._renderWithMask = function(a, b, d, e, f) {
          var h = b.getTransform().getConcatenatedMatrix(!0);
          b.parent || (h = h.scale(this._devicePixelRatio, this._devicePixelRatio));
          var g = a.getBounds().clone();
          f.matrix.transformRectangleAABB(g);
          g.snap();
          if (!g.isEmpty()) {
            var l = b.getBounds().clone();
            h.transformRectangleAABB(l);
            l.snap();
            if (!l.isEmpty()) {
              var k = f.clip.clone();
              k.intersect(g);
              k.intersect(l);
              k.snap();
              k.isEmpty() || (g = f.clone(), g.clip.set(k), a = this._renderToTemporarySurface(a, g, v.createEmpty(), null), g.free(), g = f.clone(), g.clip.set(k), g.matrix = h, g.flags |= 4, e && (g.flags |= 8), b = this._renderToTemporarySurface(b, g, v.createEmpty(), a.surface), g.free(), a.draw(b, 0, 0, k.w, k.h, 11), f.target.draw(a, k.x, k.y, k.w, k.h, d), b.free(), a.free());
            }
          }
        };
        f.prototype._renderStageToTarget = function(b, d, e) {
          v.allocationCount = a.allocationCount = l.allocationCount = 0;
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
        f.prototype._renderToTemporarySurface = function(a, b, d, e) {
          var f = b.matrix, h = a.getBounds().clone();
          f.transformRectangleAABB(h);
          h.snap();
          d.set(h);
          d.intersect(b.clip);
          d.snap();
          if (d.isEmpty()) {
            return null;
          }
          e = this._allocateSurface(d.w, d.h, e);
          h = e.region;
          h = new v(h.x, h.y, d.w, d.h);
          e.context.setTransform(1, 0, 0, 1, 0, 0);
          e.clear();
          f = f.clone();
          f.translate(h.x - d.x, h.y - d.y);
          e.context.save();
          b = b.clone();
          b.target = e;
          b.matrix = f;
          b.clip.set(h);
          a.visit(this, b);
          b.free();
          e.context.restore();
          return e;
        };
        f.prototype._allocateSurface = function(a, b, d) {
          return f._surfaceCache.allocate(a, b, d);
        };
        f.prototype.screenShot = function(a, d) {
          if (d) {
            var e = this._stage.content.groupChild.child;
            b(e instanceof r.Stage);
            a = e.content.getBounds(!0);
            e.content.getTransform().getConcatenatedMatrix().transformRectangleAABB(a);
            a.intersect(this._viewport);
          }
          a || (a = new v(0, 0, this._target.w, this._target.h));
          e = document.createElement("canvas");
          e.width = a.w;
          e.height = a.h;
          var f = e.getContext("2d");
          f.fillStyle = this._container.style.backgroundColor;
          f.fillRect(0, 0, a.w, a.h);
          f.drawImage(this._target.context.canvas, a.x, a.y, a.w, a.h, 0, 0, a.w, a.h);
          return new r.ScreenShot(e.toDataURL("image/png"), a.w, a.h);
        };
        f._initializedCaches = !1;
        f._debugPoints = m.createEmptyPoints(4);
        return f;
      }(r.Renderer);
      g.Canvas2DRenderer = d;
    })(r.Canvas2D || (r.Canvas2D = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    var g = r.Geometry.Point, b = r.Geometry.Matrix, v = r.Geometry.Rectangle, m = k.Tools.Mini.FPS, a = function() {
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
    r.UIState = a;
    var h = function(a) {
      function b() {
        a.apply(this, arguments);
        this._keyCodes = [];
      }
      __extends(b, a);
      b.prototype.onMouseDown = function(a, b) {
        b.altKey && (a.state = new p(a.worldView, a.getMousePosition(b, null), a.worldView.getTransform().getMatrix(!0)));
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
    }(a), n = function(a) {
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
        if (a.getOption()) {
          var b = r.viewportLoupeDiameter.value, d = r.viewportLoupeDiameter.value;
          a.viewport = new v(this._mousePosition.x - b / 2, this._mousePosition.y - d / 2, b, d);
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
          d && (a.state = new p(d, a.getMousePosition(b, null), d.getTransform().getMatrix(!0)));
        }
      };
      b.prototype.onMouseUp = function(a, b) {
        a.state = new h;
        a.selectNodeUnderMouse(b);
      };
      return b;
    })(a);
    var p = function(a) {
      function b(h, g, d) {
        a.call(this);
        this._target = h;
        this._startPosition = g;
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
        a.state = new h;
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
        this._state = new h;
        this._persistentState = new n;
        this.paused = !1;
        this.viewport = null;
        this._selectedNodes = [];
        this._isRendering = !1;
        this._rAF = void 0;
        this._eventListeners = Object.create(null);
        this._fullScreen = !1;
        this._container = b;
        this._stage = new r.Stage(512, 512, !0);
        this._worldView = this._stage.content;
        this._world = new r.Group;
        this._worldView.addChild(this._world);
        this._disableHiDPI = g;
        g = document.createElement("div");
        g.style.position = "absolute";
        g.style.width = "100%";
        g.style.height = "100%";
        g.style.zIndex = "0";
        b.appendChild(g);
        if (r.hud.value) {
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
          b.appendChild(e);
          this._fps = new m(f);
        } else {
          this._fps = null;
        }
        this.transparent = e = 0 === p;
        void 0 === p || 0 === p || k.ColorUtilities.rgbaToCSSStyle(p);
        this._options = new r.Canvas2D.Canvas2DRendererOptions;
        this._options.alpha = e;
        this._renderer = new r.Canvas2D.Canvas2DRenderer(g, this._stage, this._options);
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
        var h = this;
        setInterval(function() {
          if (a !== h._containerWidth || b !== h._containerHeight) {
            h._onContainerSizeChanged(), a = h._containerWidth, b = h._containerHeight;
          }
        }, 10);
      };
      a.prototype._onContainerSizeChanged = function() {
        var a = this.getRatio(), h = Math.ceil(this._containerWidth * a), g = Math.ceil(this._containerHeight * a);
        this._stage.setBounds(new v(0, 0, h, g));
        this._stage.content.setBounds(new v(0, 0, h, g));
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
          this._rAF = requestAnimationFrame(function u() {
            a.render();
            a._rAF = requestAnimationFrame(u);
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
        r.RenderableVideo.checkForVideoUpdates();
        var a = (this._stage.readyToRender() || r.forcePaint.value) && !this.paused, b = 0;
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
        var k = this._container, d = k.getBoundingClientRect(), e = this.getRatio(), k = new g(k.scrollWidth / d.width * (a.clientX - d.left) * e, k.scrollHeight / d.height * (a.clientY - d.top) * e);
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
      a.prototype.screenShot = function(a, b) {
        return this._renderer.screenShot(a, b);
      };
      return a;
    }();
    r.Easel = a;
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    var g = k.GFX.Geometry.Matrix;
    (function(b) {
      b[b.Simple = 0] = "Simple";
    })(r.Layout || (r.Layout = {}));
    var b = function(b) {
      function a() {
        b.apply(this, arguments);
        this.layout = 0;
      }
      __extends(a, b);
      return a;
    }(r.RendererOptions);
    r.TreeRendererOptions = b;
    var v = function(k) {
      function a(a, g, p) {
        void 0 === p && (p = new b);
        k.call(this, a, g, p);
        this._canvas = document.createElement("canvas");
        this._container.appendChild(this._canvas);
        this._context = this._canvas.getContext("2d");
        this._listenForContainerSizeChanges();
      }
      __extends(a, k);
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
        var a = this._getRatio(), b = Math.ceil(this._containerWidth * a), g = Math.ceil(this._containerHeight * a), k = this._canvas;
        0 < a ? (k.width = b * a, k.height = g * a, k.style.width = b + "px", k.style.height = g + "px") : (k.width = b, k.height = g);
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
        function k(b) {
          var c = b.getChildren();
          a.fillStyle = b.hasFlags(16) ? "red" : "white";
          var g = String(b.id);
          b instanceof r.RenderableText ? g = "T" + g : b instanceof r.RenderableShape ? g = "S" + g : b instanceof r.RenderableBitmap ? g = "B" + g : b instanceof r.RenderableVideo && (g = "V" + g);
          b instanceof r.Renderable && (g = g + " [" + b._parents.length + "]");
          b = a.measureText(g).width;
          a.fillText(g, l, u);
          if (c) {
            l += b + 4;
            e = Math.max(e, l + 20);
            for (g = 0;g < c.length;g++) {
              k(c[g]), g < c.length - 1 && (u += 18, u > m._canvas.height && (a.fillStyle = "gray", l = l - d + e + 8, d = e + 8, u = 0, a.fillStyle = "white"));
            }
            l -= b + 4;
          }
        }
        var m = this;
        a.save();
        a.font = "16px Arial";
        a.fillStyle = "white";
        var l = 0, u = 0, d = 0, e = 0;
        k(b);
        a.restore();
      };
      return a;
    }(r.Renderer);
    r.TreeRenderer = v;
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(g) {
      var b = k.GFX.BlurFilter, v = k.GFX.DropshadowFilter, m = k.GFX.Shape, a = k.GFX.Group, h = k.GFX.RenderableShape, n = k.GFX.RenderableMorphShape, p = k.GFX.RenderableBitmap, w = k.GFX.RenderableVideo, t = k.GFX.RenderableText, l = k.GFX.ColorMatrix, u = k.ShapeData, d = k.ArrayUtilities.DataBuffer, e = k.GFX.Stage, f = k.GFX.Geometry.Matrix, c = k.GFX.Geometry.Rectangle, q = function() {
        function a() {
        }
        a.prototype.writeMouseEvent = function(a, b) {
          var c = this.output;
          c.writeInt(300);
          var d = k.Remoting.MouseEventNames.indexOf(a.type);
          c.writeInt(d);
          c.writeFloat(b.x);
          c.writeFloat(b.y);
          c.writeInt(a.buttons);
          c.writeInt((a.ctrlKey ? 1 : 0) | (a.altKey ? 2 : 0) | (a.shiftKey ? 4 : 0));
        };
        a.prototype.writeKeyboardEvent = function(a) {
          var b = this.output;
          b.writeInt(301);
          var c = k.Remoting.KeyboardEventNames.indexOf(a.type);
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
      g.GFXChannelSerializer = q;
      q = function() {
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
          k.registerCSSFont(a, b, !inFirefox);
          inFirefox ? c(null) : window.setTimeout(c, 400);
        };
        a.prototype.registerImage = function(a, b, c, d, e) {
          this._registerAsset(a, b, this._decodeImage(c, d, e));
        };
        a.prototype.registerVideo = function(a) {
          this._registerAsset(a, 0, new w(a, this));
        };
        a.prototype._decodeImage = function(a, b, d) {
          var e = new Image, f = p.FromImage(e);
          e.src = URL.createObjectURL(new Blob([b], {type:k.getMIMETypeForImageType(a)}));
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
      g.GFXChannelDeserializerContext = q;
      q = function() {
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
          var a = this.input, b = e._temporaryReadColorMatrix, c = 1, d = 1, f = 1, g = 1, h = 0, k = 0, l = 0, n = 0;
          switch(a.readInt()) {
            case 0:
              return e._temporaryReadColorMatrixIdentity;
            case 1:
              g = a.readFloat();
              break;
            case 2:
              c = a.readFloat(), d = a.readFloat(), f = a.readFloat(), g = a.readFloat(), h = a.readInt(), k = a.readInt(), l = a.readInt(), n = a.readInt();
          }
          b.setMultipliersAndOffsets(c, d, f, g, h, k, l, n);
          return b;
        };
        e.prototype._readAsset = function() {
          var a = this.input.readInt(), b = this.inputAssets[a];
          this.inputAssets[a] = null;
          return b;
        };
        e.prototype._readUpdateGraphics = function() {
          for (var a = this.input, b = this.context, c = a.readInt(), d = a.readInt(), e = b._getAsset(c), f = this._readRectangle(), g = u.FromPlainObject(this._readAsset()), k = a.readInt(), l = [], p = 0;p < k;p++) {
            var m = a.readInt();
            l.push(b._getBitmapAsset(m));
          }
          if (e) {
            e.update(g, l, f);
          } else {
            a = g.morphCoordinates ? new n(c, g, l, f) : new h(c, g, l, f);
            for (p = 0;p < l.length;p++) {
              l[p] && l[p].addRenderableParent(a);
            }
            b._registerAsset(c, d, a);
          }
        };
        e.prototype._readUpdateBitmapData = function() {
          var a = this.input, b = this.context, c = a.readInt(), e = a.readInt(), f = b._getBitmapAsset(c), g = this._readRectangle(), a = a.readInt(), h = d.FromPlainObject(this._readAsset());
          f ? f.updateFromDataBuffer(a, h) : (f = p.FromDataBuffer(a, h, g), b._registerAsset(c, e, f));
        };
        e.prototype._readUpdateTextContent = function() {
          var a = this.input, b = this.context, c = a.readInt(), e = a.readInt(), f = b._getTextAsset(c), g = this._readRectangle(), h = this._readMatrix(), k = a.readInt(), l = a.readInt(), p = a.readInt(), n = a.readBoolean(), m = a.readInt(), q = a.readInt(), r = this._readAsset(), u = d.FromPlainObject(this._readAsset()), w = null, v = a.readInt();
          v && (w = new d(4 * v), a.readBytes(w, 4 * v));
          f ? (f.setBounds(g), f.setContent(r, u, h, w), f.setStyle(k, l, m, q), f.reflow(p, n)) : (f = new t(g), f.setContent(r, u, h, w), f.setStyle(k, l, m, q), f.reflow(p, n), b._registerAsset(c, e, f));
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
          a.stage.color = k.Color.FromARGB(b);
          a.stage.align = this.input.readInt();
          a.stage.scaleMode = this.input.readInt();
          b = this.input.readInt();
          this.input.readInt();
          c = this.input.readInt();
          a._easelHost.cursor = k.UI.toCSSCursor(c);
          a._easelHost.fullscreen = 0 === b || 1 === b;
        };
        e.prototype._readUpdateNetStream = function() {
          var a = this.context, b = this.input.readInt(), c = a._getVideoAsset(b), d = this._readRectangle();
          c || (a.registerVideo(b), c = a._getVideoAsset(b));
          c.setBounds(d);
        };
        e.prototype._readFilters = function(a) {
          var c = this.input, d = c.readInt(), e = [];
          if (d) {
            for (var f = 0;f < d;f++) {
              var g = c.readInt();
              switch(g) {
                case 0:
                  e.push(new b(c.readFloat(), c.readFloat(), c.readInt()));
                  break;
                case 1:
                  e.push(new v(c.readFloat(), c.readFloat(), c.readFloat(), c.readFloat(), c.readInt(), c.readFloat(), c.readBoolean(), c.readBoolean(), c.readBoolean(), c.readInt(), c.readFloat()));
                  break;
                default:
                  k.Debug.somewhatImplemented(r.FilterType[g]);
              }
            }
            a.getLayer().filters = e;
          }
        };
        e.prototype._readUpdateFrame = function() {
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
          e && (k = f.getChildren()[0], k instanceof m && (k.ratio = e));
        };
        e.prototype._readDrawToBitmap = function() {
          var a = this.input, b = this.context, c = a.readInt(), d = a.readInt(), e = a.readInt(), g, h, k;
          g = e & 1 ? this._readMatrix().clone() : f.createIdentity();
          e & 8 && (h = this._readColorMatrix());
          e & 16 && (k = this._readRectangle());
          e = a.readInt();
          a.readBoolean();
          a = b._getBitmapAsset(c);
          d = b._makeNode(d);
          a ? a.drawNode(d, g, h, e, k) : b._registerAsset(c, -1, p.FromNode(d, g, h, e, k));
        };
        e.prototype._readRequestBitmapData = function() {
          var a = this.output, b = this.context, c = this.input.readInt();
          b._getBitmapAsset(c).readImageData(a);
        };
        e._temporaryReadMatrix = f.createIdentity();
        e._temporaryReadRectangle = c.createEmpty();
        e._temporaryReadColorMatrix = l.createIdentity();
        e._temporaryReadColorMatrixIdentity = l.createIdentity();
        return e;
      }();
      g.GFXChannelDeserializer = q;
    })(r.GFX || (r.GFX = {}));
  })(k.Remoting || (k.Remoting = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    var g = k.GFX.Geometry.Point, b = k.ArrayUtilities.DataBuffer, v = function() {
      function m(a) {
        this._easel = a;
        var b = a.transparent;
        this._group = a.world;
        this._content = null;
        this._fullscreen = !1;
        this._context = new k.Remoting.GFX.GFXChannelDeserializerContext(this, this._group, b);
        this._addEventListeners();
      }
      m.prototype.onSendUpdates = function(a, b) {
        throw Error("This method is abstract");
      };
      Object.defineProperty(m.prototype, "easel", {get:function() {
        return this._easel;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(m.prototype, "stage", {get:function() {
        return this._easel.stage;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(m.prototype, "content", {set:function(a) {
        this._content = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(m.prototype, "cursor", {set:function(a) {
        this._easel.cursor = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(m.prototype, "fullscreen", {set:function(a) {
        this._fullscreen !== a && (this._fullscreen = a, "undefined" !== typeof ShumwayCom && ShumwayCom.setFullscreen && ShumwayCom.setFullscreen(a));
      }, enumerable:!0, configurable:!0});
      m.prototype._mouseEventListener = function(a) {
        var h = this._easel.getMousePosition(a, this._content), h = new g(h.x, h.y), n = new b, p = new k.Remoting.GFX.GFXChannelSerializer;
        p.output = n;
        p.writeMouseEvent(a, h);
        this.onSendUpdates(n, []);
      };
      m.prototype._keyboardEventListener = function(a) {
        var g = new b, n = new k.Remoting.GFX.GFXChannelSerializer;
        n.output = g;
        n.writeKeyboardEvent(a);
        this.onSendUpdates(g, []);
      };
      m.prototype._addEventListeners = function() {
        for (var a = this._mouseEventListener.bind(this), b = this._keyboardEventListener.bind(this), g = m._mouseEvents, k = 0;k < g.length;k++) {
          window.addEventListener(g[k], a);
        }
        a = m._keyboardEvents;
        for (k = 0;k < a.length;k++) {
          window.addEventListener(a[k], b);
        }
        this._addFocusEventListeners();
        this._easel.addEventListener("resize", this._resizeEventListener.bind(this));
      };
      m.prototype._sendFocusEvent = function(a) {
        var g = new b, n = new k.Remoting.GFX.GFXChannelSerializer;
        n.output = g;
        n.writeFocusEvent(a);
        this.onSendUpdates(g, []);
      };
      m.prototype._addFocusEventListeners = function() {
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
      m.prototype._resizeEventListener = function() {
        this.onDisplayParameters(this._easel.getDisplayParameters());
      };
      m.prototype.onDisplayParameters = function(a) {
        throw Error("This method is abstract");
      };
      m.prototype.processUpdates = function(a, b, g) {
        void 0 === g && (g = null);
        var p = new k.Remoting.GFX.GFXChannelDeserializer;
        p.input = a;
        p.inputAssets = b;
        p.output = g;
        p.context = this._context;
        p.read();
      };
      m.prototype.processVideoControl = function(a, b, g) {
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
      m.prototype.processRegisterFont = function(a, b, g) {
        this._context.registerFont(a, b, g);
      };
      m.prototype.processRegisterImage = function(a, b, g, k, m) {
        this._context.registerImage(a, b, g, k, m);
      };
      m.prototype.processFSCommand = function(a, b) {
        arguments.length;
      };
      m.prototype.processFrame = function() {
        arguments.length;
      };
      m.prototype.onVideoPlaybackEvent = function(a, b, g) {
        throw Error("This method is abstract");
      };
      m.prototype.sendVideoPlaybackEvent = function(a, b, g) {
        this.onVideoPlaybackEvent(a, b, g);
      };
      m._mouseEvents = k.Remoting.MouseEventNames;
      m._keyboardEvents = k.Remoting.KeyboardEventNames;
      return m;
    }();
    r.EaselHost = v;
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(g) {
      var b = k.ArrayUtilities.DataBuffer, v = k.CircularBuffer, m = k.Tools.Profiler.TimelineBuffer, a = function(a) {
        function g(b, k, n) {
          a.call(this, b);
          this._timelineRequests = Object.create(null);
          this._playerWindow = k;
          this._window = n;
          this._window.addEventListener("message", function(a) {
            this.onWindowMessage(a.data);
          }.bind(this));
          "undefined" !== typeof ShumwayCom ? ShumwayCom.setSyncMessageCallback(function(a) {
            this.onWindowMessage(a, !1);
            return a.result;
          }.bind(this)) : this._window.addEventListener("syncmessage", function(a) {
            this.onWindowMessage(a.detail, !1);
          }.bind(this));
        }
        __extends(g, a);
        g.prototype.onSendUpdates = function(a, b) {
          var g = a.getBytes();
          this._playerWindow.postMessage({type:"gfx", updates:g, assets:b}, "*", [g.buffer]);
        };
        g.prototype.onDisplayParameters = function(a) {
          this._playerWindow.postMessage({type:"displayParameters", params:a}, "*");
        };
        g.prototype.onVideoPlaybackEvent = function(a, b, g) {
          this._playerWindow.postMessage({type:"videoPlayback", id:a, eventType:b, data:g}, "*");
        };
        g.prototype.requestTimeline = function(a, b) {
          return new Promise(function(g) {
            this._timelineRequests[a] = g;
            this._playerWindow.postMessage({type:"timeline", cmd:b, request:a}, "*");
          }.bind(this));
        };
        g.prototype._sendRegisterFontResponse = function(a, b) {
          this._playerWindow.postMessage({type:"registerFontResponse", requestId:a, result:b}, "*");
        };
        g.prototype._sendRegisterImageResponse = function(a, b) {
          this._playerWindow.postMessage({type:"registerImageResponse", requestId:a, result:b}, "*");
        };
        g.prototype.onWindowMessage = function(a, g) {
          void 0 === g && (g = !0);
          if ("object" === typeof a && null !== a) {
            if ("player" === a.type) {
              var h = b.FromArrayBuffer(a.updates.buffer);
              if (g) {
                this.processUpdates(h, a.assets);
              } else {
                var k = new b;
                this.processUpdates(h, a.assets, k);
                a.result = k.toPlainObject();
              }
            } else {
              "frame" === a.type ? this.processFrame() : "videoControl" === a.type ? a.result = this.processVideoControl(a.id, a.eventType, a.data) : "registerFont" === a.type ? this.processRegisterFont(a.syncId, a.data, this._sendRegisterFontResponse.bind(this, a.requestId)) : "registerImage" === a.type ? this.processRegisterImage(a.syncId, a.symbolId, a.imageType, a.data, this._sendRegisterImageResponse.bind(this, a.requestId)) : "fscommand" === a.type ? this.processFSCommand(a.command, a.args) : 
              "timelineResponse" === a.type && a.timeline && (a.timeline.__proto__ = m.prototype, a.timeline._marks.__proto__ = v.prototype, a.timeline._times.__proto__ = v.prototype, this._timelineRequests[a.request](a.timeline));
            }
          }
        };
        return g;
      }(r.EaselHost);
      g.WindowEaselHost = a;
    })(r.Window || (r.Window = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(g) {
      var b = k.ArrayUtilities.DataBuffer, v = function(g) {
        function a(a) {
          g.call(this, a);
          this._worker = k.Player.Test.FakeSyncWorker.instance;
          this._worker.addEventListener("message", this._onWorkerMessage.bind(this));
          this._worker.addEventListener("syncmessage", this._onSyncWorkerMessage.bind(this));
        }
        __extends(a, g);
        a.prototype.onSendUpdates = function(a, b) {
          var g = a.getBytes();
          this._worker.postMessage({type:"gfx", updates:g, assets:b}, [g.buffer]);
        };
        a.prototype.onDisplayParameters = function(a) {
          this._worker.postMessage({type:"displayParameters", params:a});
        };
        a.prototype.onVideoPlaybackEvent = function(a, b, g) {
          this._worker.postMessage({type:"videoPlayback", id:a, eventType:b, data:g});
        };
        a.prototype.requestTimeline = function(a, b) {
          var g;
          switch(a) {
            case "AVM2":
              g = k.AVM2.timelineBuffer;
              break;
            case "Player":
              g = k.Player.timelineBuffer;
              break;
            case "SWF":
              g = k.SWF.timelineBuffer;
          }
          "clear" === b && g && g.reset();
          return Promise.resolve(g);
        };
        a.prototype._sendRegisterFontResponse = function(a, b) {
          this._worker.postMessage({type:"registerFontResponse", requestId:a, result:b});
        };
        a.prototype._sendRegisterImageResponse = function(a, b) {
          this._worker.postMessage({type:"registerImageResponse", requestId:a, result:b});
        };
        a.prototype._onWorkerMessage = function(a, g) {
          void 0 === g && (g = !0);
          var k = a.data;
          if ("object" === typeof k && null !== k) {
            switch(k.type) {
              case "player":
                var m = b.FromArrayBuffer(k.updates.buffer);
                if (g) {
                  this.processUpdates(m, k.assets);
                } else {
                  var r = new b;
                  this.processUpdates(m, k.assets, r);
                  a.result = r.toPlainObject();
                  a.handled = !0;
                }
                break;
              case "frame":
                this.processFrame();
                break;
              case "videoControl":
                a.result = this.processVideoControl(k.id, k.eventType, k.data);
                a.handled = !0;
                break;
              case "registerFont":
                this.processRegisterFont(k.syncId, k.data, this._sendRegisterFontResponse.bind(this, k.requestId));
                a.handled = !0;
                break;
              case "registerImage":
                this.processRegisterImage(k.syncId, k.symbolId, k.imageType, k.data, this._sendRegisterImageResponse.bind(this, k.requestId));
                a.handled = !0;
                break;
              case "fscommand":
                this.processFSCommand(k.command, k.args);
            }
          }
        };
        a.prototype._onSyncWorkerMessage = function(a) {
          return this._onWorkerMessage(a, !1);
        };
        return a;
      }(r.EaselHost);
      g.TestEaselHost = v;
    })(r.Test || (r.Test = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(g) {
      function b(a, b) {
        a.writeInt(b.length);
        a.writeRawBytes(b);
      }
      function r(a) {
        function g(a) {
          switch(typeof a) {
            case "undefined":
              d.writeByte(0);
              break;
            case "boolean":
              d.writeByte(a ? 2 : 3);
              break;
            case "number":
              d.writeByte(4);
              d.writeDouble(a);
              break;
            case "string":
              d.writeByte(5);
              d.writeUTF(a);
              break;
            default:
              if (null === a) {
                d.writeByte(1);
                break;
              }
              if (Array.isArray(a) && a instanceof Int32Array) {
                d.writeByte(6);
                d.writeInt(a.length);
                for (var f = 0;f < a.length;f++) {
                  g(a[f]);
                }
              } else {
                if (a instanceof Uint8Array) {
                  d.writeByte(9), b(d, a);
                } else {
                  if ("length" in a && "buffer" in a && "littleEndian" in a) {
                    d.writeByte(a.littleEndian ? 10 : 11), b(d, new Uint8Array(a.buffer, 0, a.length));
                  } else {
                    if (a instanceof ArrayBuffer) {
                      d.writeByte(8), b(d, new Uint8Array(a));
                    } else {
                      if (a instanceof Int32Array) {
                        d.writeByte(12), b(d, new Uint8Array(a.buffer, a.byteOffset, a.byteLength));
                      } else {
                        if (a.buffer instanceof ArrayBuffer && "number" === typeof a.byteOffset) {
                          throw Error("Some unsupported TypedArray is used");
                        }
                        d.writeByte(7);
                        for (f in a) {
                          d.writeUTF(f), g(a[f]);
                        }
                        d.writeUTF("");
                      }
                    }
                  }
                }
              }
            ;
          }
        }
        var d = new n;
        g(a);
        return d.getBytes();
      }
      function m(a) {
        var b = new n, d = a.readInt();
        a.readBytes(b, d);
        return b.getBytes();
      }
      function a(a) {
        var b = new n, d = a.readInt();
        a.readBytes(b, d);
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
            for (var b = [], d = a.readInt(), e = 0;e < d;e++) {
              b[e] = h(a);
            }
            return b;
          case 7:
            for (b = {};d = a.readUTF();) {
              b[d] = h(a);
            }
            return b;
          case 8:
            return m(a).buffer;
          case 9:
            return m(a);
          case 11:
          ;
          case 10:
            return a = m(a), new p(a.buffer, a.length, 10 === b);
          case 12:
            return new Int32Array(m(a).buffer);
        }
      }
      var n = k.ArrayUtilities.DataBuffer, p = k.ArrayUtilities.PlainObjectDataBuffer, w;
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
      })(w || (w = {}));
      (function(a) {
        a[a.None = 0] = "None";
        a[a.PlayerCommand = 1] = "PlayerCommand";
        a[a.PlayerCommandAsync = 2] = "PlayerCommandAsync";
        a[a.Frame = 3] = "Frame";
        a[a.Font = 4] = "Font";
        a[a.Image = 5] = "Image";
        a[a.FSCommand = 6] = "FSCommand";
      })(g.MovieRecordType || (g.MovieRecordType = {}));
      w = function() {
        function a(b) {
          this._maxRecordingSize = b;
          this._recording = new n;
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
          (new t(this._recording.getBytes())).dump();
        };
        a.prototype._createRecord = function(a, b) {
          this._stopped || (this._recording.length + 8 + (b ? b.length : 0) >= this._maxRecordingSize ? (console.error("Recording limit reached"), this._stopped = !0) : (this._recording.writeInt(Date.now() - this._recordingStarted), this._recording.writeInt(a), null !== b ? (this._recording.writeInt(b.length), this._recording.writeRawBytes(b.getBytes())) : this._recording.writeInt(0)));
        };
        a.prototype.recordPlayerCommand = function(a, d, e) {
          var f = new n;
          b(f, d);
          f.writeInt(e.length);
          e.forEach(function(a) {
            a = r(a);
            b(f, a);
          });
          this._createRecord(a ? 2 : 1, f);
        };
        a.prototype.recordFrame = function() {
          this._createRecord(3, null);
        };
        a.prototype.recordFont = function(a, d) {
          var e = new n;
          e.writeInt(a);
          b(e, d);
          this._createRecord(4, e);
        };
        a.prototype.recordImage = function(a, d, e, f) {
          var c = new n;
          c.writeInt(a);
          c.writeInt(d);
          c.writeInt(e);
          b(c, f);
          this._createRecord(5, c);
        };
        a.prototype.recordFSCommand = function(a, b) {
          var e = new n;
          e.writeUTF(a);
          e.writeUTF(b || "");
          this._createRecord(6, e);
        };
        return a;
      }();
      g.MovieRecorder = w;
      var t = function() {
        function b(a) {
          this._buffer = new n;
          this._buffer.writeRawBytes(a);
          this._buffer.position = 4;
        }
        b.prototype.readNextRecord = function() {
          if (this._buffer.position >= this._buffer.length) {
            return 0;
          }
          var a = this._buffer.readInt(), b = this._buffer.readInt(), e = this._buffer.readInt(), f = null;
          0 < e && (f = new n, this._buffer.readBytes(f, e));
          this.currentTimestamp = a;
          this.currentType = b;
          this.currentData = f;
          return b;
        };
        b.prototype.parsePlayerCommand = function() {
          for (var b = m(this.currentData), d = this.currentData.readInt(), e = [], f = 0;f < d;f++) {
            e.push(a(this.currentData));
          }
          return {updates:b, assets:e};
        };
        b.prototype.parseFSCommand = function() {
          var a = this.currentData.readUTF(), b = this.currentData.readUTF();
          return {command:a, args:b};
        };
        b.prototype.parseFont = function() {
          var b = this.currentData.readInt(), d = a(this.currentData);
          return {syncId:b, data:d};
        };
        b.prototype.parseImage = function() {
          var b = this.currentData.readInt(), d = this.currentData.readInt(), e = this.currentData.readInt(), f = a(this.currentData);
          return {syncId:b, symbolId:d, imageType:e, data:f};
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
      g.MovieRecordParser = t;
    })(r.Test || (r.Test = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(g) {
      var b = k.ArrayUtilities.DataBuffer, v = function(k) {
        function a(a) {
          k.call(this, a);
          this.alwaysRenderFrame = this.ignoreTimestamps = !1;
          this.cpuTimeRendering = this.cpuTimeUpdates = 0;
          this.onComplete = null;
        }
        __extends(a, k);
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
        a.prototype.requestTimeline = function(a, b) {
          return Promise.resolve(void 0);
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
      }(r.EaselHost);
      g.PlaybackEaselHost = v;
    })(r.Test || (r.Test = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    (function(g) {
      var b = function(b) {
        function k(a, h) {
          void 0 === h && (h = 0);
          b.call(this, a);
          this._recorder = null;
          this._recorder = new g.MovieRecorder(h);
        }
        __extends(k, b);
        Object.defineProperty(k.prototype, "recorder", {get:function() {
          return this._recorder;
        }, enumerable:!0, configurable:!0});
        k.prototype._onWorkerMessage = function(a, g) {
          void 0 === g && (g = !0);
          var k = a.data;
          if ("object" === typeof k && null !== k) {
            switch(k.type) {
              case "player":
                this._recorder.recordPlayerCommand(g, k.updates, k.assets);
                break;
              case "frame":
                this._recorder.recordFrame();
                break;
              case "registerFont":
                this._recorder.recordFont(k.syncId, k.data);
                break;
              case "registerImage":
                this._recorder.recordImage(k.syncId, k.symbolId, k.imageType, k.data);
                break;
              case "fscommand":
                this._recorder.recordFSCommand(k.command, k.args);
            }
            b.prototype._onWorkerMessage.call(this, a, g);
          }
        };
        return k;
      }(g.TestEaselHost);
      g.RecordingEaselHost = b;
    })(k.Test || (k.Test = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
console.timeEnd("Load GFX Dependencies");

