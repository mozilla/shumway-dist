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
Shumway$$inline_0.version = "0.11.147";
Shumway$$inline_0.build = "8517b7d";
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
  function r(c) {
    return (c | 0) === c;
  }
  function g(c) {
    return "object" === typeof c || "function" === typeof c;
  }
  function b(c) {
    return String(Number(c)) === c;
  }
  function v(c) {
    var e = 0;
    if ("number" === typeof c) {
      return e = c | 0, c === e && 0 <= e ? !0 : c >>> 0 === c;
    }
    if ("string" !== typeof c) {
      return !1;
    }
    var f = c.length;
    if (0 === f) {
      return !1;
    }
    if ("0" === c) {
      return !0;
    }
    if (f > k.UINT32_CHAR_BUFFER_LENGTH) {
      return !1;
    }
    var d = 0, e = c.charCodeAt(d++) - 48;
    if (1 > e || 9 < e) {
      return !1;
    }
    for (var q = 0, D = 0;d < f;) {
      D = c.charCodeAt(d++) - 48;
      if (0 > D || 9 < D) {
        return !1;
      }
      q = e;
      e = 10 * e + D;
    }
    return q < k.UINT32_MAX_DIV_10 || q === k.UINT32_MAX_DIV_10 && D <= k.UINT32_MAX_MOD_10 ? !0 : !1;
  }
  (function(c) {
    c[c._0 = 48] = "_0";
    c[c._1 = 49] = "_1";
    c[c._2 = 50] = "_2";
    c[c._3 = 51] = "_3";
    c[c._4 = 52] = "_4";
    c[c._5 = 53] = "_5";
    c[c._6 = 54] = "_6";
    c[c._7 = 55] = "_7";
    c[c._8 = 56] = "_8";
    c[c._9 = 57] = "_9";
  })(k.CharacterCodes || (k.CharacterCodes = {}));
  k.UINT32_CHAR_BUFFER_LENGTH = 10;
  k.UINT32_MAX = 4294967295;
  k.UINT32_MAX_DIV_10 = 429496729;
  k.UINT32_MAX_MOD_10 = 5;
  k.isString = function(c) {
    return "string" === typeof c;
  };
  k.isFunction = function(c) {
    return "function" === typeof c;
  };
  k.isNumber = function(c) {
    return "number" === typeof c;
  };
  k.isInteger = r;
  k.isArray = function(c) {
    return c instanceof Array;
  };
  k.isNumberOrString = function(c) {
    return "number" === typeof c || "string" === typeof c;
  };
  k.isObject = g;
  k.toNumber = function(c) {
    return +c;
  };
  k.isNumericString = b;
  k.isNumeric = function(c) {
    if ("number" === typeof c) {
      return !0;
    }
    if ("string" === typeof c) {
      var e = c.charCodeAt(0);
      return 65 <= e && 90 >= e || 97 <= e && 122 >= e || 36 === e || 95 === e ? !1 : v(c) || b(c);
    }
    return !1;
  };
  k.isIndex = v;
  k.isNullOrUndefined = function(c) {
    return void 0 == c;
  };
  k.argumentsToString = function(c) {
    for (var e = [], f = 0;f < c.length;f++) {
      var d = c[f];
      try {
        var q;
        q = "object" === typeof d && d ? "toString" in d ? d.toString() : Object.prototype.toString.call(d) : d + "";
        e.push(q);
      } catch (D) {
        e.push("<unprintable value>");
      }
    }
    return e.join(", ");
  };
  var n;
  (function(c) {
    c.error = function(d) {
      console.error(d);
      throw Error(d);
    };
    c.assert = function(d, q) {
      void 0 === q && (q = "assertion failed");
      "" === d && (d = !0);
      if (!d) {
        if ("undefined" !== typeof console && "assert" in console) {
          throw console.assert(!1, q), Error(q);
        }
        c.error(q.toString());
      }
    };
    c.assertUnreachable = function(d) {
      throw Error("Reached unreachable location " + Error().stack.split("\n")[1] + d);
    };
    c.assertNotImplemented = function(d, q) {
      d || c.error("notImplemented: " + q);
    };
    var e = Object.create(null);
    c.warning = function(d, q, f) {
    };
    c.warnCounts = function() {
      var d = [], q;
      for (q in e) {
        d.push({key:q, count:e[q]});
      }
      d.sort(function(d, q) {
        return q.count - d.count;
      });
      return d.reduce(function(d, q) {
        return d + ("\n" + q.count + "\t" + q.key);
      }, "");
    };
    c.notUsed = function(d) {
    };
    c.notImplemented = function(d) {
    };
    c.dummyConstructor = function(d) {
    };
    c.abstractMethod = function(d) {
    };
    var f = {};
    c.somewhatImplemented = function(d) {
      f[d] || (f[d] = !0, c.warning("somewhatImplemented: " + d));
    };
    c.unexpected = function(d) {
      c.assert(!1, "Unexpected: " + d);
    };
    c.unexpectedCase = function(d) {
      c.assert(!1, "Unexpected Case: " + d);
    };
  })(n = k.Debug || (k.Debug = {}));
  k.getTicks = function() {
    return performance.now();
  };
  (function(c) {
    function e(d, q) {
      for (var f = 0, e = d.length;f < e;f++) {
        if (d[f] === q) {
          return f;
        }
      }
      d.push(q);
      return d.length - 1;
    }
    c.popManyInto = function(d, q, f) {
      for (var e = q - 1;0 <= e;e--) {
        f[e] = d.pop();
      }
      f.length = q;
    };
    c.popMany = function(d, q) {
      var f = d.length - q, e = d.slice(f, this.length);
      d.length = f;
      return e;
    };
    c.popManyIntoVoid = function(d, q) {
      d.length -= q;
    };
    c.pushMany = function(d, q) {
      for (var f = 0;f < q.length;f++) {
        d.push(q[f]);
      }
    };
    c.top = function(d) {
      return d.length && d[d.length - 1];
    };
    c.last = function(d) {
      return d.length && d[d.length - 1];
    };
    c.peek = function(d) {
      return d[d.length - 1];
    };
    c.indexOf = function(d, q) {
      for (var f = 0, e = d.length;f < e;f++) {
        if (d[f] === q) {
          return f;
        }
      }
      return -1;
    };
    c.equals = function(d, q) {
      if (d.length !== q.length) {
        return !1;
      }
      for (var f = 0;f < d.length;f++) {
        if (d[f] !== q[f]) {
          return !1;
        }
      }
      return !0;
    };
    c.pushUnique = e;
    c.unique = function(d) {
      for (var q = [], f = 0;f < d.length;f++) {
        e(q, d[f]);
      }
      return q;
    };
    c.copyFrom = function(d, q) {
      d.length = 0;
      c.pushMany(d, q);
    };
    c.ensureTypedArrayCapacity = function(d, q) {
      if (d.length < q) {
        var f = d;
        d = new d.constructor(k.IntegerUtilities.nearestPowerOfTwo(q));
        d.set(f, 0);
      }
      return d;
    };
    c.memCopy = function(d, q, f, e, c) {
      void 0 === f && (f = 0);
      void 0 === e && (e = 0);
      void 0 === c && (c = 0);
      0 < e || 0 < c && c < q.length ? (0 >= c && (c = q.length - e), d.set(q.subarray(e, e + c), f)) : d.set(q, f);
    };
    var f = function() {
      function d(d) {
        void 0 === d && (d = 16);
        this._f32 = this._i32 = this._u16 = this._u8 = null;
        this._offset = 0;
        this.ensureCapacity(d);
      }
      d.prototype.reset = function() {
        this._offset = 0;
      };
      Object.defineProperty(d.prototype, "offset", {get:function() {
        return this._offset;
      }, enumerable:!0, configurable:!0});
      d.prototype.getIndex = function(d) {
        return this._offset / d;
      };
      d.prototype.ensureAdditionalCapacity = function() {
        this.ensureCapacity(this._offset + 68);
      };
      d.prototype.ensureCapacity = function(d) {
        if (!this._u8) {
          this._u8 = new Uint8Array(d);
        } else {
          if (this._u8.length > d) {
            return;
          }
        }
        var f = 2 * this._u8.length;
        f < d && (f = d);
        d = new Uint8Array(f);
        d.set(this._u8, 0);
        this._u8 = d;
        this._u16 = new Uint16Array(d.buffer);
        this._i32 = new Int32Array(d.buffer);
        this._f32 = new Float32Array(d.buffer);
      };
      d.prototype.writeInt = function(d) {
        this.ensureCapacity(this._offset + 4);
        this.writeIntUnsafe(d);
      };
      d.prototype.writeIntAt = function(d, f) {
        this.ensureCapacity(f + 4);
        this._i32[f >> 2] = d;
      };
      d.prototype.writeIntUnsafe = function(d) {
        this._i32[this._offset >> 2] = d;
        this._offset += 4;
      };
      d.prototype.writeFloat = function(d) {
        this.ensureCapacity(this._offset + 4);
        this.writeFloatUnsafe(d);
      };
      d.prototype.writeFloatUnsafe = function(d) {
        this._f32[this._offset >> 2] = d;
        this._offset += 4;
      };
      d.prototype.write4Floats = function(d, f, e, c) {
        this.ensureCapacity(this._offset + 16);
        this.write4FloatsUnsafe(d, f, e, c);
      };
      d.prototype.write4FloatsUnsafe = function(d, f, e, c) {
        var a = this._offset >> 2;
        this._f32[a + 0] = d;
        this._f32[a + 1] = f;
        this._f32[a + 2] = e;
        this._f32[a + 3] = c;
        this._offset += 16;
      };
      d.prototype.write6Floats = function(d, f, e, c, a, h) {
        this.ensureCapacity(this._offset + 24);
        this.write6FloatsUnsafe(d, f, e, c, a, h);
      };
      d.prototype.write6FloatsUnsafe = function(d, f, e, c, a, h) {
        var p = this._offset >> 2;
        this._f32[p + 0] = d;
        this._f32[p + 1] = f;
        this._f32[p + 2] = e;
        this._f32[p + 3] = c;
        this._f32[p + 4] = a;
        this._f32[p + 5] = h;
        this._offset += 24;
      };
      d.prototype.subF32View = function() {
        return this._f32.subarray(0, this._offset >> 2);
      };
      d.prototype.subI32View = function() {
        return this._i32.subarray(0, this._offset >> 2);
      };
      d.prototype.subU16View = function() {
        return this._u16.subarray(0, this._offset >> 1);
      };
      d.prototype.subU8View = function() {
        return this._u8.subarray(0, this._offset);
      };
      d.prototype.hashWords = function(d, f, e) {
        f = this._i32;
        for (var c = 0;c < e;c++) {
          d = (31 * d | 0) + f[c] | 0;
        }
        return d;
      };
      d.prototype.reserve = function(d) {
        d = d + 3 & -4;
        this.ensureCapacity(this._offset + d);
        this._offset += d;
      };
      return d;
    }();
    c.ArrayWriter = f;
  })(k.ArrayUtilities || (k.ArrayUtilities = {}));
  var a = function() {
    function c(e) {
      this._u8 = new Uint8Array(e);
      this._u16 = new Uint16Array(e);
      this._i32 = new Int32Array(e);
      this._f32 = new Float32Array(e);
      this._offset = 0;
    }
    Object.defineProperty(c.prototype, "offset", {get:function() {
      return this._offset;
    }, enumerable:!0, configurable:!0});
    c.prototype.isEmpty = function() {
      return this._offset === this._u8.length;
    };
    c.prototype.readInt = function() {
      var e = this._i32[this._offset >> 2];
      this._offset += 4;
      return e;
    };
    c.prototype.readFloat = function() {
      var e = this._f32[this._offset >> 2];
      this._offset += 4;
      return e;
    };
    return c;
  }();
  k.ArrayReader = a;
  (function(c) {
    function e(d, q) {
      return Object.prototype.hasOwnProperty.call(d, q);
    }
    function f(d, q) {
      for (var f in q) {
        e(q, f) && (d[f] = q[f]);
      }
    }
    c.boxValue = function(d) {
      return void 0 == d || g(d) ? d : Object(d);
    };
    c.toKeyValueArray = function(d) {
      var f = Object.prototype.hasOwnProperty, e = [], c;
      for (c in d) {
        f.call(d, c) && e.push([c, d[c]]);
      }
      return e;
    };
    c.isPrototypeWriteable = function(d) {
      return Object.getOwnPropertyDescriptor(d, "prototype").writable;
    };
    c.hasOwnProperty = e;
    c.propertyIsEnumerable = function(d, f) {
      return Object.prototype.propertyIsEnumerable.call(d, f);
    };
    c.getPropertyDescriptor = function(d, f) {
      do {
        var e = Object.getOwnPropertyDescriptor(d, f);
        if (e) {
          return e;
        }
        d = Object.getPrototypeOf(d);
      } while (d);
      return null;
    };
    c.hasOwnGetter = function(d, f) {
      var e = Object.getOwnPropertyDescriptor(d, f);
      return !(!e || !e.get);
    };
    c.getOwnGetter = function(d, f) {
      var e = Object.getOwnPropertyDescriptor(d, f);
      return e ? e.get : null;
    };
    c.hasOwnSetter = function(d, f) {
      var e = Object.getOwnPropertyDescriptor(d, f);
      return !(!e || !e.set);
    };
    c.createMap = function() {
      return Object.create(null);
    };
    c.createArrayMap = function() {
      return [];
    };
    c.defineReadOnlyProperty = function(d, f, e) {
      Object.defineProperty(d, f, {value:e, writable:!1, configurable:!0, enumerable:!1});
    };
    c.getOwnPropertyDescriptors = function(d) {
      for (var f = c.createMap(), e = Object.getOwnPropertyNames(d), a = 0;a < e.length;a++) {
        f[e[a]] = Object.getOwnPropertyDescriptor(d, e[a]);
      }
      return f;
    };
    c.cloneObject = function(d) {
      var q = Object.create(Object.getPrototypeOf(d));
      f(q, d);
      return q;
    };
    c.copyProperties = function(d, f) {
      for (var e in f) {
        d[e] = f[e];
      }
    };
    c.copyOwnProperties = f;
    c.copyOwnPropertyDescriptors = function(d, f, D, c, a) {
      void 0 === D && (D = null);
      void 0 === c && (c = !0);
      void 0 === a && (a = !1);
      for (var h in f) {
        if (e(f, h) && (!D || D(h))) {
          var p = Object.getOwnPropertyDescriptor(f, h);
          if (c || !e(d, h)) {
            try {
              a && !1 === p.writable && (p.writable = !0), Object.defineProperty(d, h, p);
            } catch (l) {
              n.assert("Can't define: " + h);
            }
          }
        }
      }
    };
    c.copyPropertiesByList = function(d, f, e) {
      for (var c = 0;c < e.length;c++) {
        var a = e[c];
        d[a] = f[a];
      }
    };
    c.getLatestGetterOrSetterPropertyDescriptor = function(d, f) {
      for (var e = {};d;) {
        var c = Object.getOwnPropertyDescriptor(d, f);
        c && (e.get = e.get || c.get, e.set = e.set || c.set);
        if (e.get && e.set) {
          break;
        }
        d = Object.getPrototypeOf(d);
      }
      return e;
    };
    c.defineNonEnumerableGetterOrSetter = function(d, f, e, a) {
      var h = c.getLatestGetterOrSetterPropertyDescriptor(d, f);
      h.configurable = !0;
      h.enumerable = !1;
      a ? h.get = e : h.set = e;
      Object.defineProperty(d, f, h);
    };
    c.defineNonEnumerableGetter = function(d, f, e) {
      Object.defineProperty(d, f, {get:e, configurable:!0, enumerable:!1});
    };
    c.defineNonEnumerableSetter = function(d, f, e) {
      Object.defineProperty(d, f, {set:e, configurable:!0, enumerable:!1});
    };
    c.defineNonEnumerableProperty = function(d, f, e) {
      Object.defineProperty(d, f, {value:e, writable:!0, configurable:!0, enumerable:!1});
    };
    c.defineNonEnumerableForwardingProperty = function(d, f, e) {
      Object.defineProperty(d, f, {get:h.makeForwardingGetter(e), set:h.makeForwardingSetter(e), writable:!0, configurable:!0, enumerable:!1});
    };
    c.defineNewNonEnumerableProperty = function(d, f, e) {
      c.defineNonEnumerableProperty(d, f, e);
    };
    c.createPublicAliases = function(d, f) {
      for (var e = {value:null, writable:!0, configurable:!0, enumerable:!1}, c = 0;c < f.length;c++) {
        var a = f[c];
        e.value = d[a];
        Object.defineProperty(d, "$Bg" + a, e);
      }
    };
  })(k.ObjectUtilities || (k.ObjectUtilities = {}));
  var h;
  (function(c) {
    c.makeForwardingGetter = function(e) {
      return new Function('return this["' + e + '"]//# sourceURL=fwd-get-' + e + ".as");
    };
    c.makeForwardingSetter = function(e) {
      return new Function("value", 'this["' + e + '"] = value;//# sourceURL=fwd-set-' + e + ".as");
    };
    c.bindSafely = function(e, f) {
      function d() {
        return e.apply(f, arguments);
      }
      d.boundTo = f;
      return d;
    };
  })(h = k.FunctionUtilities || (k.FunctionUtilities = {}));
  (function(c) {
    function e(d) {
      return "string" === typeof d ? '"' + d + '"' : "number" === typeof d || "boolean" === typeof d ? String(d) : d instanceof Array ? "[] " + d.length : typeof d;
    }
    function f(d, f, e) {
      q[0] = d;
      q[1] = f;
      q[2] = e;
      return q.join("");
    }
    function d(d, f, q, e) {
      a[0] = d;
      a[1] = f;
      a[2] = q;
      a[3] = e;
      return a.join("");
    }
    c.repeatString = function(d, f) {
      for (var q = "", e = 0;e < f;e++) {
        q += d;
      }
      return q;
    };
    c.memorySizeToString = function(d) {
      d |= 0;
      return 1024 > d ? d + " B" : 1048576 > d ? (d / 1024).toFixed(2) + "KB" : (d / 1048576).toFixed(2) + "MB";
    };
    c.toSafeString = e;
    c.toSafeArrayString = function(d) {
      for (var f = [], q = 0;q < d.length;q++) {
        f.push(e(d[q]));
      }
      return f.join(", ");
    };
    c.utf8decode = function(d) {
      for (var f = new Uint8Array(4 * d.length), q = 0, e = 0, c = d.length;e < c;e++) {
        var a = d.charCodeAt(e);
        if (127 >= a) {
          f[q++] = a;
        } else {
          if (55296 <= a && 56319 >= a) {
            var D = d.charCodeAt(e + 1);
            56320 <= D && 57343 >= D && (a = ((a & 1023) << 10) + (D & 1023) + 65536, ++e);
          }
          0 !== (a & 4292870144) ? (f[q++] = 248 | a >>> 24 & 3, f[q++] = 128 | a >>> 18 & 63, f[q++] = 128 | a >>> 12 & 63, f[q++] = 128 | a >>> 6 & 63) : 0 !== (a & 4294901760) ? (f[q++] = 240 | a >>> 18 & 7, f[q++] = 128 | a >>> 12 & 63, f[q++] = 128 | a >>> 6 & 63) : 0 !== (a & 4294965248) ? (f[q++] = 224 | a >>> 12 & 15, f[q++] = 128 | a >>> 6 & 63) : f[q++] = 192 | a >>> 6 & 31;
          f[q++] = 128 | a & 63;
        }
      }
      return f.subarray(0, q);
    };
    c.utf8encode = function(d) {
      for (var f = 0, q = "";f < d.length;) {
        var e = d[f++] & 255;
        if (127 >= e) {
          q += String.fromCharCode(e);
        } else {
          var c = 192, a = 5;
          do {
            if ((e & (c >> 1 | 128)) === c) {
              break;
            }
            c = c >> 1 | 128;
            --a;
          } while (0 <= a);
          if (0 >= a) {
            q += String.fromCharCode(e);
          } else {
            for (var e = e & (1 << a) - 1, c = !1, D = 5;D >= a;--D) {
              var h = d[f++];
              if (128 != (h & 192)) {
                c = !0;
                break;
              }
              e = e << 6 | h & 63;
            }
            if (c) {
              for (a = f - (7 - D);a < f;++a) {
                q += String.fromCharCode(d[a] & 255);
              }
            } else {
              q = 65536 <= e ? q + String.fromCharCode(e - 65536 >> 10 & 1023 | 55296, e & 1023 | 56320) : q + String.fromCharCode(e);
            }
          }
        }
      }
      return q;
    };
    c.base64ArrayBuffer = function(q) {
      var e = "";
      q = new Uint8Array(q);
      for (var c = q.byteLength, a = c % 3, c = c - a, D, h, J, G, p = 0;p < c;p += 3) {
        G = q[p] << 16 | q[p + 1] << 8 | q[p + 2], D = (G & 16515072) >> 18, h = (G & 258048) >> 12, J = (G & 4032) >> 6, G &= 63, e += d("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[D], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[h], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[J], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[G]);
      }
      1 == a ? (G = q[c], e += f("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(G & 252) >> 2], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(G & 3) << 4], "==")) : 2 == a && (G = q[c] << 8 | q[c + 1], e += d("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(G & 64512) >> 10], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(G & 1008) >> 4], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(G & 15) << 
      2], "="));
      return e;
    };
    c.escapeString = function(d) {
      void 0 !== d && (d = d.replace(/[^\w$]/gi, "$"), /^\d/.test(d) && (d = "$" + d));
      return d;
    };
    c.fromCharCodeArray = function(d) {
      for (var f = "", q = 0;q < d.length;q += 16384) {
        var e = Math.min(d.length - q, 16384), f = f + String.fromCharCode.apply(null, d.subarray(q, q + e))
      }
      return f;
    };
    c.variableLengthEncodeInt32 = function(d) {
      for (var f = 32 - Math.clz32(d), q = Math.ceil(f / 6), f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[q], q = q - 1;0 <= q;q--) {
        f += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[d >> 6 * q & 63];
      }
      return f;
    };
    c.toEncoding = function(d) {
      return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[d];
    };
    c.fromEncoding = function(d) {
      if (65 <= d && 90 >= d) {
        return d - 65;
      }
      if (97 <= d && 122 >= d) {
        return d - 71;
      }
      if (48 <= d && 57 >= d) {
        return d + 4;
      }
      if (36 === d) {
        return 62;
      }
      if (95 === d) {
        return 63;
      }
    };
    c.variableLengthDecodeInt32 = function(d) {
      for (var f = c.fromEncoding(d.charCodeAt(0)), q = 0, e = 0;e < f;e++) {
        var a = 6 * (f - e - 1), q = q | c.fromEncoding(d.charCodeAt(1 + e)) << a
      }
      return q;
    };
    c.trimMiddle = function(d, f) {
      if (d.length <= f) {
        return d;
      }
      var q = f >> 1, e = f - q - 1;
      return d.substr(0, q) + "\u2026" + d.substr(d.length - e, e);
    };
    c.multiple = function(d, f) {
      for (var q = "", e = 0;e < f;e++) {
        q += d;
      }
      return q;
    };
    c.indexOfAny = function(d, f, q) {
      for (var e = d.length, c = 0;c < f.length;c++) {
        var a = d.indexOf(f[c], q);
        0 <= a && (e = Math.min(e, a));
      }
      return e === d.length ? -1 : e;
    };
    var q = Array(3), a = Array(4), h = Array(5), G = Array(6), p = Array(7), l = Array(8), u = Array(9);
    c.concat3 = f;
    c.concat4 = d;
    c.concat5 = function(d, f, q, e, c) {
      h[0] = d;
      h[1] = f;
      h[2] = q;
      h[3] = e;
      h[4] = c;
      return h.join("");
    };
    c.concat6 = function(d, f, q, e, c, a) {
      G[0] = d;
      G[1] = f;
      G[2] = q;
      G[3] = e;
      G[4] = c;
      G[5] = a;
      return G.join("");
    };
    c.concat7 = function(d, f, q, e, c, a, D) {
      p[0] = d;
      p[1] = f;
      p[2] = q;
      p[3] = e;
      p[4] = c;
      p[5] = a;
      p[6] = D;
      return p.join("");
    };
    c.concat8 = function(d, f, q, e, c, a, D, h) {
      l[0] = d;
      l[1] = f;
      l[2] = q;
      l[3] = e;
      l[4] = c;
      l[5] = a;
      l[6] = D;
      l[7] = h;
      return l.join("");
    };
    c.concat9 = function(d, f, q, e, c, a, D, h, J) {
      u[0] = d;
      u[1] = f;
      u[2] = q;
      u[3] = e;
      u[4] = c;
      u[5] = a;
      u[6] = D;
      u[7] = h;
      u[8] = J;
      return u.join("");
    };
  })(k.StringUtilities || (k.StringUtilities = {}));
  (function(c) {
    var e = new Uint8Array([7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21]), f = new Int32Array([-680876936, -389564586, 606105819, -1044525330, -176418897, 1200080426, -1473231341, -45705983, 1770035416, -1958414417, -42063, -1990404162, 1804603682, -40341101, -1502002290, 1236535329, -165796510, -1069501632, 
    643717713, -373897302, -701558691, 38016083, -660478335, -405537848, 568446438, -1019803690, -187363961, 1163531501, -1444681467, -51403784, 1735328473, -1926607734, -378558, -2022574463, 1839030562, -35309556, -1530992060, 1272893353, -155497632, -1094730640, 681279174, -358537222, -722521979, 76029189, -640364487, -421815835, 530742520, -995338651, -198630844, 1126891415, -1416354905, -57434055, 1700485571, -1894986606, -1051523, -2054922799, 1873313359, -30611744, -1560198380, 1309151649, 
    -145523070, -1120210379, 718787259, -343485551]);
    c.hashBytesTo32BitsMD5 = function(d, q, c) {
      var a = 1732584193, h = -271733879, p = -1732584194, l = 271733878, u = c + 72 & -64, b = new Uint8Array(u), m;
      for (m = 0;m < c;++m) {
        b[m] = d[q++];
      }
      b[m++] = 128;
      for (d = u - 8;m < d;) {
        b[m++] = 0;
      }
      b[m++] = c << 3 & 255;
      b[m++] = c >> 5 & 255;
      b[m++] = c >> 13 & 255;
      b[m++] = c >> 21 & 255;
      b[m++] = c >>> 29 & 255;
      b[m++] = 0;
      b[m++] = 0;
      b[m++] = 0;
      d = new Int32Array(16);
      for (m = 0;m < u;) {
        for (c = 0;16 > c;++c, m += 4) {
          d[c] = b[m] | b[m + 1] << 8 | b[m + 2] << 16 | b[m + 3] << 24;
        }
        var n = a;
        q = h;
        var t = p, w = l, g, k;
        for (c = 0;64 > c;++c) {
          16 > c ? (g = q & t | ~q & w, k = c) : 32 > c ? (g = w & q | ~w & t, k = 5 * c + 1 & 15) : 48 > c ? (g = q ^ t ^ w, k = 3 * c + 5 & 15) : (g = t ^ (q | ~w), k = 7 * c & 15);
          var r = w, n = n + g + f[c] + d[k] | 0;
          g = e[c];
          w = t;
          t = q;
          q = q + (n << g | n >>> 32 - g) | 0;
          n = r;
        }
        a = a + n | 0;
        h = h + q | 0;
        p = p + t | 0;
        l = l + w | 0;
      }
      return a;
    };
    c.hashBytesTo32BitsAdler = function(d, f, e) {
      var c = 1, a = 0;
      for (e = f + e;f < e;++f) {
        c = (c + (d[f] & 255)) % 65521, a = (a + c) % 65521;
      }
      return a << 16 | c;
    };
    c.mixHash = function(d, f) {
      return (31 * d | 0) + f | 0;
    };
  })(k.HashUtilities || (k.HashUtilities = {}));
  var p = function() {
    function c() {
    }
    c.seed = function(e) {
      c._state[0] = e;
      c._state[1] = e;
    };
    c.reset = function() {
      c._state[0] = 57005;
      c._state[1] = 48879;
    };
    c.next = function() {
      var e = this._state, f = Math.imul(18273, e[0] & 65535) + (e[0] >>> 16) | 0;
      e[0] = f;
      var d = Math.imul(36969, e[1] & 65535) + (e[1] >>> 16) | 0;
      e[1] = d;
      e = (f << 16) + (d & 65535) | 0;
      return 2.3283064365386963E-10 * (0 > e ? e + 4294967296 : e);
    };
    c._state = new Uint32Array([57005, 48879]);
    return c;
  }();
  k.Random = p;
  Math.random = function() {
    return p.next();
  };
  (function() {
    function c() {
      this.id = "$weakmap" + e++;
    }
    if ("function" !== typeof jsGlobal.WeakMap) {
      var e = 0;
      c.prototype = {has:function(f) {
        return f.hasOwnProperty(this.id);
      }, get:function(f, d) {
        return f.hasOwnProperty(this.id) ? f[this.id] : d;
      }, set:function(f, d) {
        Object.defineProperty(f, this.id, {value:d, enumerable:!1, configurable:!0});
      }, delete:function(f) {
        delete f[this.id];
      }};
      jsGlobal.WeakMap = c;
    }
  })();
  a = function() {
    function c() {
      "undefined" !== typeof ShumwayCom && ShumwayCom.getWeakMapKeys ? this._map = new WeakMap : this._list = [];
    }
    c.prototype.clear = function() {
      this._map ? this._map.clear() : this._list.length = 0;
    };
    c.prototype.push = function(e) {
      this._map ? this._map.set(e, null) : this._list.push(e);
    };
    c.prototype.remove = function(e) {
      this._map ? this._map.delete(e) : this._list[this._list.indexOf(e)] = null;
    };
    c.prototype.forEach = function(e) {
      if (this._map) {
        ShumwayCom.getWeakMapKeys(this._map).forEach(function(d) {
          0 !== d._referenceCount && e(d);
        });
      } else {
        for (var f = this._list, d = 0, q = 0;q < f.length;q++) {
          var c = f[q];
          c && (0 === c._referenceCount ? (f[q] = null, d++) : e(c));
        }
        if (16 < d && d > f.length >> 2) {
          d = [];
          for (q = 0;q < f.length;q++) {
            (c = f[q]) && 0 < c._referenceCount && d.push(c);
          }
          this._list = d;
        }
      }
    };
    Object.defineProperty(c.prototype, "length", {get:function() {
      return this._map ? -1 : this._list.length;
    }, enumerable:!0, configurable:!0});
    return c;
  }();
  k.WeakList = a;
  var m;
  (function(c) {
    c.pow2 = function(e) {
      return e === (e | 0) ? 0 > e ? 1 / (1 << -e) : 1 << e : Math.pow(2, e);
    };
    c.clamp = function(e, f, d) {
      return Math.max(f, Math.min(d, e));
    };
    c.roundHalfEven = function(e) {
      if (.5 === Math.abs(e % 1)) {
        var f = Math.floor(e);
        return 0 === f % 2 ? f : Math.ceil(e);
      }
      return Math.round(e);
    };
    c.altTieBreakRound = function(e, f) {
      return .5 !== Math.abs(e % 1) || f ? Math.round(e) : e | 0;
    };
    c.epsilonEquals = function(e, f) {
      return 1E-7 > Math.abs(e - f);
    };
  })(m = k.NumberUtilities || (k.NumberUtilities = {}));
  (function(c) {
    c[c.MaxU16 = 65535] = "MaxU16";
    c[c.MaxI16 = 32767] = "MaxI16";
    c[c.MinI16 = -32768] = "MinI16";
  })(k.Numbers || (k.Numbers = {}));
  var w;
  (function(c) {
    function e(d) {
      return 256 * d << 16 >> 16;
    }
    var f = new ArrayBuffer(8);
    c.i8 = new Int8Array(f);
    c.u8 = new Uint8Array(f);
    c.i32 = new Int32Array(f);
    c.f32 = new Float32Array(f);
    c.f64 = new Float64Array(f);
    c.nativeLittleEndian = 1 === (new Int8Array((new Int32Array([1])).buffer))[0];
    c.floatToInt32 = function(d) {
      c.f32[0] = d;
      return c.i32[0];
    };
    c.int32ToFloat = function(d) {
      c.i32[0] = d;
      return c.f32[0];
    };
    c.swap16 = function(d) {
      return (d & 255) << 8 | d >> 8 & 255;
    };
    c.swap32 = function(d) {
      return (d & 255) << 24 | (d & 65280) << 8 | d >> 8 & 65280 | d >> 24 & 255;
    };
    c.toS8U8 = e;
    c.fromS8U8 = function(d) {
      return d / 256;
    };
    c.clampS8U8 = function(d) {
      return e(d) / 256;
    };
    c.toS16 = function(d) {
      return d << 16 >> 16;
    };
    c.bitCount = function(d) {
      d -= d >> 1 & 1431655765;
      d = (d & 858993459) + (d >> 2 & 858993459);
      return 16843009 * (d + (d >> 4) & 252645135) >> 24;
    };
    c.ones = function(d) {
      d -= d >> 1 & 1431655765;
      d = (d & 858993459) + (d >> 2 & 858993459);
      return 16843009 * (d + (d >> 4) & 252645135) >> 24;
    };
    c.trailingZeros = function(d) {
      return c.ones((d & -d) - 1);
    };
    c.getFlags = function(d, f) {
      var e = "";
      for (d = 0;d < f.length;d++) {
        d & 1 << d && (e += f[d] + " ");
      }
      return 0 === e.length ? "" : e.trim();
    };
    c.isPowerOfTwo = function(d) {
      return d && 0 === (d & d - 1);
    };
    c.roundToMultipleOfFour = function(d) {
      return d + 3 & -4;
    };
    c.nearestPowerOfTwo = function(d) {
      d--;
      d |= d >> 1;
      d |= d >> 2;
      d |= d >> 4;
      d |= d >> 8;
      d |= d >> 16;
      d++;
      return d;
    };
    c.roundToMultipleOfPowerOfTwo = function(d, f) {
      var e = (1 << f) - 1;
      return d + e & ~e;
    };
    c.toHEX = function(d) {
      return "0x" + ("00000000" + (0 > d ? 4294967295 + d + 1 : d).toString(16)).substr(-8);
    };
    Math.imul || (Math.imul = function(d, f) {
      var e = d & 65535, c = f & 65535;
      return e * c + ((d >>> 16 & 65535) * c + e * (f >>> 16 & 65535) << 16 >>> 0) | 0;
    });
    Math.clz32 || (Math.clz32 = function(d) {
      d |= d >> 1;
      d |= d >> 2;
      d |= d >> 4;
      d |= d >> 8;
      return 32 - c.ones(d | d >> 16);
    });
  })(w = k.IntegerUtilities || (k.IntegerUtilities = {}));
  (function(c) {
    function e(f, d, q, e, c, a) {
      return (q - f) * (a - d) - (e - d) * (c - f);
    }
    c.pointInPolygon = function(f, d, q) {
      for (var e = 0, c = q.length - 2, a = 0;a < c;a += 2) {
        var h = q[a + 0], p = q[a + 1], l = q[a + 2], u = q[a + 3];
        (p <= d && u > d || p > d && u <= d) && f < h + (d - p) / (u - p) * (l - h) && e++;
      }
      return 1 === (e & 1);
    };
    c.signedArea = e;
    c.counterClockwise = function(f, d, q, c, a, h) {
      return 0 < e(f, d, q, c, a, h);
    };
    c.clockwise = function(f, d, q, c, a, h) {
      return 0 > e(f, d, q, c, a, h);
    };
    c.pointInPolygonInt32 = function(f, d, q) {
      f |= 0;
      d |= 0;
      for (var e = 0, c = q.length - 2, a = 0;a < c;a += 2) {
        var h = q[a + 0], p = q[a + 1], l = q[a + 2], u = q[a + 3];
        (p <= d && u > d || p > d && u <= d) && f < h + (d - p) / (u - p) * (l - h) && e++;
      }
      return 1 === (e & 1);
    };
  })(k.GeometricUtilities || (k.GeometricUtilities = {}));
  (function(c) {
    c[c.Error = 1] = "Error";
    c[c.Warn = 2] = "Warn";
    c[c.Debug = 4] = "Debug";
    c[c.Log = 8] = "Log";
    c[c.Info = 16] = "Info";
    c[c.All = 31] = "All";
  })(k.LogLevel || (k.LogLevel = {}));
  a = function() {
    function c(e, f) {
      void 0 === e && (e = !1);
      this._tab = "  ";
      this._padding = "";
      this._suppressOutput = e;
      this._out = f || c._consoleOut;
      this._outNoNewline = f || c._consoleOutNoNewline;
    }
    Object.defineProperty(c.prototype, "suppressOutput", {get:function() {
      return this._suppressOutput;
    }, set:function(e) {
      this._suppressOutput = e;
    }, enumerable:!0, configurable:!0});
    c.prototype.write = function(e, f) {
      void 0 === e && (e = "");
      void 0 === f && (f = !1);
      this._suppressOutput || this._outNoNewline((f ? this._padding : "") + e);
    };
    c.prototype.writeLn = function(e) {
      void 0 === e && (e = "");
      this._suppressOutput || this._out(this._padding + e);
    };
    c.prototype.writeObject = function(e, f) {
      void 0 === e && (e = "");
      this._suppressOutput || this._out(this._padding + e, f);
    };
    c.prototype.writeTimeLn = function(e) {
      void 0 === e && (e = "");
      this._suppressOutput || this._out(this._padding + performance.now().toFixed(2) + " " + e);
    };
    c.prototype.writeComment = function(e) {
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
    c.prototype.writeLns = function(e) {
      e = (e || "").split("\n");
      for (var f = 0;f < e.length;f++) {
        this.writeLn(e[f]);
      }
    };
    c.prototype.errorLn = function(e) {
      c.logLevel & 1 && this.boldRedLn(e);
    };
    c.prototype.warnLn = function(e) {
      c.logLevel & 2 && this.yellowLn(e);
    };
    c.prototype.debugLn = function(e) {
      c.logLevel & 4 && this.purpleLn(e);
    };
    c.prototype.logLn = function(e) {
      c.logLevel & 8 && this.writeLn(e);
    };
    c.prototype.infoLn = function(e) {
      c.logLevel & 16 && this.writeLn(e);
    };
    c.prototype.yellowLn = function(e) {
      this.colorLn(c.YELLOW, e);
    };
    c.prototype.greenLn = function(e) {
      this.colorLn(c.GREEN, e);
    };
    c.prototype.boldRedLn = function(e) {
      this.colorLn(c.BOLD_RED, e);
    };
    c.prototype.redLn = function(e) {
      this.colorLn(c.RED, e);
    };
    c.prototype.purpleLn = function(e) {
      this.colorLn(c.PURPLE, e);
    };
    c.prototype.colorLn = function(e, f) {
      this._suppressOutput || (inBrowser ? this._out(this._padding + f) : this._out(this._padding + e + f + c.ENDC));
    };
    c.prototype.redLns = function(e) {
      this.colorLns(c.RED, e);
    };
    c.prototype.colorLns = function(e, f) {
      for (var d = (f || "").split("\n"), q = 0;q < d.length;q++) {
        this.colorLn(e, d[q]);
      }
    };
    c.prototype.enter = function(e) {
      this._suppressOutput || this._out(this._padding + e);
      this.indent();
    };
    c.prototype.leaveAndEnter = function(e) {
      this.leave(e);
      this.indent();
    };
    c.prototype.leave = function(e) {
      this.outdent();
      !this._suppressOutput && e && this._out(this._padding + e);
    };
    c.prototype.indent = function() {
      this._padding += this._tab;
    };
    c.prototype.outdent = function() {
      0 < this._padding.length && (this._padding = this._padding.substring(0, this._padding.length - this._tab.length));
    };
    c.prototype.writeArray = function(e, f, d) {
      void 0 === f && (f = !1);
      void 0 === d && (d = !1);
      f = f || !1;
      for (var q = 0, c = e.length;q < c;q++) {
        var a = "";
        f && (a = null === e[q] ? "null" : void 0 === e[q] ? "undefined" : e[q].constructor.name, a += " ");
        var h = d ? "" : ("" + q).padRight(" ", 4);
        this.writeLn(h + a + e[q]);
      }
    };
    c.PURPLE = "\u001b[94m";
    c.YELLOW = "\u001b[93m";
    c.GREEN = "\u001b[92m";
    c.RED = "\u001b[91m";
    c.BOLD_RED = "\u001b[1;91m";
    c.ENDC = "\u001b[0m";
    c.logLevel = 31;
    c._consoleOut = console.log.bind(console);
    c._consoleOutNoNewline = console.log.bind(console);
    return c;
  }();
  k.IndentingWriter = a;
  var t = function() {
    return function(c, e) {
      this.value = c;
      this.next = e;
    };
  }(), a = function() {
    function c(e) {
      this._compare = e;
      this._head = null;
      this._length = 0;
    }
    c.prototype.push = function(e) {
      this._length++;
      if (this._head) {
        var f = this._head, d = null;
        e = new t(e, null);
        for (var q = this._compare;f;) {
          if (0 < q(f.value, e.value)) {
            d ? (e.next = f, d.next = e) : (e.next = this._head, this._head = e);
            return;
          }
          d = f;
          f = f.next;
        }
        d.next = e;
      } else {
        this._head = new t(e, null);
      }
    };
    c.prototype.forEach = function(e) {
      for (var f = this._head, d = null;f;) {
        var q = e(f.value);
        if (q === c.RETURN) {
          break;
        } else {
          q === c.DELETE ? f = d ? d.next = f.next : this._head = this._head.next : (d = f, f = f.next);
        }
      }
    };
    c.prototype.isEmpty = function() {
      return !this._head;
    };
    c.prototype.pop = function() {
      if (this._head) {
        this._length--;
        var e = this._head;
        this._head = this._head.next;
        return e.value;
      }
    };
    c.prototype.contains = function(e) {
      for (var f = this._head;f;) {
        if (f.value === e) {
          return !0;
        }
        f = f.next;
      }
      return !1;
    };
    c.prototype.toString = function() {
      for (var e = "[", f = this._head;f;) {
        e += f.value.toString(), (f = f.next) && (e += ",");
      }
      return e + "]";
    };
    c.RETURN = 1;
    c.DELETE = 2;
    return c;
  }();
  k.SortedList = a;
  a = function() {
    function c(e, f) {
      void 0 === f && (f = 12);
      this.start = this.index = 0;
      this._size = 1 << f;
      this._mask = this._size - 1;
      this.array = new e(this._size);
    }
    c.prototype.get = function(e) {
      return this.array[e];
    };
    c.prototype.forEachInReverse = function(e) {
      if (!this.isEmpty()) {
        for (var f = 0 === this.index ? this._size - 1 : this.index - 1, d = this.start - 1 & this._mask;f !== d && !e(this.array[f], f);) {
          f = 0 === f ? this._size - 1 : f - 1;
        }
      }
    };
    c.prototype.write = function(e) {
      this.array[this.index] = e;
      this.index = this.index + 1 & this._mask;
      this.index === this.start && (this.start = this.start + 1 & this._mask);
    };
    c.prototype.isFull = function() {
      return (this.index + 1 & this._mask) === this.start;
    };
    c.prototype.isEmpty = function() {
      return this.index === this.start;
    };
    c.prototype.reset = function() {
      this.start = this.index = 0;
    };
    return c;
  }();
  k.CircularBuffer = a;
  (function(c) {
    function e(d) {
      return d + (c.BITS_PER_WORD - 1) >> c.ADDRESS_BITS_PER_WORD << c.ADDRESS_BITS_PER_WORD;
    }
    function f(d, f) {
      d = d || "1";
      f = f || "0";
      for (var q = "", e = 0;e < length;e++) {
        q += this.get(e) ? d : f;
      }
      return q;
    }
    function d(d) {
      for (var f = [], q = 0;q < length;q++) {
        this.get(q) && f.push(d ? d[q] : q);
      }
      return f.join(", ");
    }
    c.ADDRESS_BITS_PER_WORD = 5;
    c.BITS_PER_WORD = 1 << c.ADDRESS_BITS_PER_WORD;
    c.BIT_INDEX_MASK = c.BITS_PER_WORD - 1;
    var q = function() {
      function d(f) {
        this.size = e(f);
        this.dirty = this.count = 0;
        this.length = f;
        this.bits = new Uint32Array(this.size >> c.ADDRESS_BITS_PER_WORD);
      }
      d.prototype.recount = function() {
        if (this.dirty) {
          for (var d = this.bits, f = 0, q = 0, e = d.length;q < e;q++) {
            var c = d[q], c = c - (c >> 1 & 1431655765), c = (c & 858993459) + (c >> 2 & 858993459), f = f + (16843009 * (c + (c >> 4) & 252645135) >> 24)
          }
          this.count = f;
          this.dirty = 0;
        }
      };
      d.prototype.set = function(d) {
        var f = d >> c.ADDRESS_BITS_PER_WORD, q = this.bits[f];
        d = q | 1 << (d & c.BIT_INDEX_MASK);
        this.bits[f] = d;
        this.dirty |= q ^ d;
      };
      d.prototype.setAll = function() {
        for (var d = this.bits, f = 0, q = d.length;f < q;f++) {
          d[f] = 4294967295;
        }
        this.count = this.size;
        this.dirty = 0;
      };
      d.prototype.assign = function(d) {
        this.count = d.count;
        this.dirty = d.dirty;
        this.size = d.size;
        for (var f = 0, q = this.bits.length;f < q;f++) {
          this.bits[f] = d.bits[f];
        }
      };
      d.prototype.clear = function(d) {
        var f = d >> c.ADDRESS_BITS_PER_WORD, q = this.bits[f];
        d = q & ~(1 << (d & c.BIT_INDEX_MASK));
        this.bits[f] = d;
        this.dirty |= q ^ d;
      };
      d.prototype.get = function(d) {
        return 0 !== (this.bits[d >> c.ADDRESS_BITS_PER_WORD] & 1 << (d & c.BIT_INDEX_MASK));
      };
      d.prototype.clearAll = function() {
        for (var d = this.bits, f = 0, q = d.length;f < q;f++) {
          d[f] = 0;
        }
        this.dirty = this.count = 0;
      };
      d.prototype._union = function(d) {
        var f = this.dirty, q = this.bits;
        d = d.bits;
        for (var e = 0, c = q.length;e < c;e++) {
          var a = q[e], h = a | d[e];
          q[e] = h;
          f |= a ^ h;
        }
        this.dirty = f;
      };
      d.prototype.intersect = function(d) {
        var f = this.dirty, q = this.bits;
        d = d.bits;
        for (var e = 0, c = q.length;e < c;e++) {
          var a = q[e], h = a & d[e];
          q[e] = h;
          f |= a ^ h;
        }
        this.dirty = f;
      };
      d.prototype.subtract = function(d) {
        var f = this.dirty, q = this.bits;
        d = d.bits;
        for (var e = 0, c = q.length;e < c;e++) {
          var a = q[e], h = a & ~d[e];
          q[e] = h;
          f |= a ^ h;
        }
        this.dirty = f;
      };
      d.prototype.negate = function() {
        for (var d = this.dirty, f = this.bits, q = 0, e = f.length;q < e;q++) {
          var c = f[q], a = ~c;
          f[q] = a;
          d |= c ^ a;
        }
        this.dirty = d;
      };
      d.prototype.forEach = function(d) {
        for (var f = this.bits, q = 0, e = f.length;q < e;q++) {
          var a = f[q];
          if (a) {
            for (var h = 0;h < c.BITS_PER_WORD;h++) {
              a & 1 << h && d(q * c.BITS_PER_WORD + h);
            }
          }
        }
      };
      d.prototype.toArray = function() {
        for (var d = [], f = this.bits, q = 0, e = f.length;q < e;q++) {
          var a = f[q];
          if (a) {
            for (var h = 0;h < c.BITS_PER_WORD;h++) {
              a & 1 << h && d.push(q * c.BITS_PER_WORD + h);
            }
          }
        }
        return d;
      };
      d.prototype.equals = function(d) {
        if (this.size !== d.size) {
          return !1;
        }
        var f = this.bits;
        d = d.bits;
        for (var q = 0, e = f.length;q < e;q++) {
          if (f[q] !== d[q]) {
            return !1;
          }
        }
        return !0;
      };
      d.prototype.contains = function(d) {
        if (this.size !== d.size) {
          return !1;
        }
        var f = this.bits;
        d = d.bits;
        for (var q = 0, e = f.length;q < e;q++) {
          if ((f[q] | d[q]) !== f[q]) {
            return !1;
          }
        }
        return !0;
      };
      d.prototype.isEmpty = function() {
        this.recount();
        return 0 === this.count;
      };
      d.prototype.clone = function() {
        var f = new d(this.length);
        f._union(this);
        return f;
      };
      return d;
    }();
    c.Uint32ArrayBitSet = q;
    var a = function() {
      function d(f) {
        this.dirty = this.count = 0;
        this.size = e(f);
        this.bits = 0;
        this.singleWord = !0;
        this.length = f;
      }
      d.prototype.recount = function() {
        if (this.dirty) {
          var d = this.bits, d = d - (d >> 1 & 1431655765), d = (d & 858993459) + (d >> 2 & 858993459);
          this.count = 0 + (16843009 * (d + (d >> 4) & 252645135) >> 24);
          this.dirty = 0;
        }
      };
      d.prototype.set = function(d) {
        var f = this.bits;
        this.bits = d = f | 1 << (d & c.BIT_INDEX_MASK);
        this.dirty |= f ^ d;
      };
      d.prototype.setAll = function() {
        this.bits = 4294967295;
        this.count = this.size;
        this.dirty = 0;
      };
      d.prototype.assign = function(d) {
        this.count = d.count;
        this.dirty = d.dirty;
        this.size = d.size;
        this.bits = d.bits;
      };
      d.prototype.clear = function(d) {
        var f = this.bits;
        this.bits = d = f & ~(1 << (d & c.BIT_INDEX_MASK));
        this.dirty |= f ^ d;
      };
      d.prototype.get = function(d) {
        return 0 !== (this.bits & 1 << (d & c.BIT_INDEX_MASK));
      };
      d.prototype.clearAll = function() {
        this.dirty = this.count = this.bits = 0;
      };
      d.prototype._union = function(d) {
        var f = this.bits;
        this.bits = d = f | d.bits;
        this.dirty = f ^ d;
      };
      d.prototype.intersect = function(d) {
        var f = this.bits;
        this.bits = d = f & d.bits;
        this.dirty = f ^ d;
      };
      d.prototype.subtract = function(d) {
        var f = this.bits;
        this.bits = d = f & ~d.bits;
        this.dirty = f ^ d;
      };
      d.prototype.negate = function() {
        var d = this.bits, f = ~d;
        this.bits = f;
        this.dirty = d ^ f;
      };
      d.prototype.forEach = function(d) {
        var f = this.bits;
        if (f) {
          for (var q = 0;q < c.BITS_PER_WORD;q++) {
            f & 1 << q && d(q);
          }
        }
      };
      d.prototype.toArray = function() {
        var d = [], f = this.bits;
        if (f) {
          for (var q = 0;q < c.BITS_PER_WORD;q++) {
            f & 1 << q && d.push(q);
          }
        }
        return d;
      };
      d.prototype.equals = function(d) {
        return this.bits === d.bits;
      };
      d.prototype.contains = function(d) {
        var f = this.bits;
        return (f | d.bits) === f;
      };
      d.prototype.isEmpty = function() {
        this.recount();
        return 0 === this.count;
      };
      d.prototype.clone = function() {
        var f = new d(this.length);
        f._union(this);
        return f;
      };
      return d;
    }();
    c.Uint32BitSet = a;
    a.prototype.toString = d;
    a.prototype.toBitString = f;
    q.prototype.toString = d;
    q.prototype.toBitString = f;
    c.BitSetFunctor = function(d) {
      var f = 1 === e(d) >> c.ADDRESS_BITS_PER_WORD ? a : q;
      return function() {
        return new f(d);
      };
    };
  })(k.BitSets || (k.BitSets = {}));
  a = function() {
    function c() {
    }
    c.randomStyle = function() {
      c._randomStyleCache || (c._randomStyleCache = "#ff5e3a #ff9500 #ffdb4c #87fc70 #52edc7 #1ad6fd #c644fc #ef4db6 #4a4a4a #dbddde #ff3b30 #ff9500 #ffcc00 #4cd964 #34aadc #007aff #5856d6 #ff2d55 #8e8e93 #c7c7cc #5ad427 #c86edf #d1eefc #e0f8d8 #fb2b69 #f7f7f7 #1d77ef #d6cec3 #55efcb #ff4981 #ffd3e0 #f7f7f7 #ff1300 #1f1f21 #bdbec2 #ff3a2d".split(" "));
      return c._randomStyleCache[c._nextStyle++ % c._randomStyleCache.length];
    };
    c.gradientColor = function(e) {
      return c._gradient[c._gradient.length * m.clamp(e, 0, 1) | 0];
    };
    c.contrastStyle = function(e) {
      e = parseInt(e.substr(1), 16);
      return 128 <= (299 * (e >> 16) + 587 * (e >> 8 & 255) + 114 * (e & 255)) / 1E3 ? "#000000" : "#ffffff";
    };
    c.reset = function() {
      c._nextStyle = 0;
    };
    c.TabToolbar = "#252c33";
    c.Toolbars = "#343c45";
    c.HighlightBlue = "#1d4f73";
    c.LightText = "#f5f7fa";
    c.ForegroundText = "#b6babf";
    c.Black = "#000000";
    c.VeryDark = "#14171a";
    c.Dark = "#181d20";
    c.Light = "#a9bacb";
    c.Grey = "#8fa1b2";
    c.DarkGrey = "#5f7387";
    c.Blue = "#46afe3";
    c.Purple = "#6b7abb";
    c.Pink = "#df80ff";
    c.Red = "#eb5368";
    c.Orange = "#d96629";
    c.LightOrange = "#d99b28";
    c.Green = "#70bf53";
    c.BlueGrey = "#5e88b0";
    c._nextStyle = 0;
    c._gradient = "#FF0000 #FF1100 #FF2300 #FF3400 #FF4600 #FF5700 #FF6900 #FF7B00 #FF8C00 #FF9E00 #FFAF00 #FFC100 #FFD300 #FFE400 #FFF600 #F7FF00 #E5FF00 #D4FF00 #C2FF00 #B0FF00 #9FFF00 #8DFF00 #7CFF00 #6AFF00 #58FF00 #47FF00 #35FF00 #24FF00 #12FF00 #00FF00".split(" ");
    return c;
  }();
  k.ColorStyle = a;
  a = function() {
    function c(e, f, d, q) {
      this.xMin = e | 0;
      this.yMin = f | 0;
      this.xMax = d | 0;
      this.yMax = q | 0;
    }
    c.FromUntyped = function(e) {
      return new c(e.xMin, e.yMin, e.xMax, e.yMax);
    };
    c.FromRectangle = function(e) {
      return new c(20 * e.x | 0, 20 * e.y | 0, 20 * (e.x + e.width) | 0, 20 * (e.y + e.height) | 0);
    };
    c.prototype.setElements = function(e, f, d, q) {
      this.xMin = e;
      this.yMin = f;
      this.xMax = d;
      this.yMax = q;
    };
    c.prototype.copyFrom = function(e) {
      this.setElements(e.xMin, e.yMin, e.xMax, e.yMax);
    };
    c.prototype.contains = function(e, f) {
      return e < this.xMin !== e < this.xMax && f < this.yMin !== f < this.yMax;
    };
    c.prototype.unionInPlace = function(e) {
      e.isEmpty() || (this.extendByPoint(e.xMin, e.yMin), this.extendByPoint(e.xMax, e.yMax));
    };
    c.prototype.extendByPoint = function(e, f) {
      this.extendByX(e);
      this.extendByY(f);
    };
    c.prototype.extendByX = function(e) {
      134217728 === this.xMin ? this.xMin = this.xMax = e : (this.xMin = Math.min(this.xMin, e), this.xMax = Math.max(this.xMax, e));
    };
    c.prototype.extendByY = function(e) {
      134217728 === this.yMin ? this.yMin = this.yMax = e : (this.yMin = Math.min(this.yMin, e), this.yMax = Math.max(this.yMax, e));
    };
    c.prototype.intersects = function(e) {
      return this.contains(e.xMin, e.yMin) || this.contains(e.xMax, e.yMax);
    };
    c.prototype.isEmpty = function() {
      return this.xMax <= this.xMin || this.yMax <= this.yMin;
    };
    Object.defineProperty(c.prototype, "width", {get:function() {
      return this.xMax - this.xMin;
    }, set:function(e) {
      this.xMax = this.xMin + e;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(c.prototype, "height", {get:function() {
      return this.yMax - this.yMin;
    }, set:function(e) {
      this.yMax = this.yMin + e;
    }, enumerable:!0, configurable:!0});
    c.prototype.getBaseWidth = function(e) {
      return Math.abs(Math.cos(e)) * (this.xMax - this.xMin) + Math.abs(Math.sin(e)) * (this.yMax - this.yMin);
    };
    c.prototype.getBaseHeight = function(e) {
      return Math.abs(Math.sin(e)) * (this.xMax - this.xMin) + Math.abs(Math.cos(e)) * (this.yMax - this.yMin);
    };
    c.prototype.setEmpty = function() {
      this.xMin = this.yMin = this.xMax = this.yMax = 0;
    };
    c.prototype.setToSentinels = function() {
      this.xMin = this.yMin = this.xMax = this.yMax = 134217728;
    };
    c.prototype.clone = function() {
      return new c(this.xMin, this.yMin, this.xMax, this.yMax);
    };
    c.prototype.toString = function() {
      return "{ xMin: " + this.xMin + ", xMin: " + this.yMin + ", xMax: " + this.xMax + ", xMax: " + this.yMax + " }";
    };
    return c;
  }();
  k.Bounds = a;
  a = function() {
    function c(e, f, d, q) {
      n.assert(r(e));
      n.assert(r(f));
      n.assert(r(d));
      n.assert(r(q));
      this._xMin = e | 0;
      this._yMin = f | 0;
      this._xMax = d | 0;
      this._yMax = q | 0;
    }
    c.FromUntyped = function(e) {
      return new c(e.xMin, e.yMin, e.xMax, e.yMax);
    };
    c.FromRectangle = function(e) {
      return new c(20 * e.x | 0, 20 * e.y | 0, 20 * (e.x + e.width) | 0, 20 * (e.y + e.height) | 0);
    };
    c.prototype.setElements = function(e, f, d, q) {
      this.xMin = e;
      this.yMin = f;
      this.xMax = d;
      this.yMax = q;
    };
    c.prototype.copyFrom = function(e) {
      this.setElements(e.xMin, e.yMin, e.xMax, e.yMax);
    };
    c.prototype.contains = function(e, f) {
      return e < this.xMin !== e < this.xMax && f < this.yMin !== f < this.yMax;
    };
    c.prototype.unionInPlace = function(e) {
      e.isEmpty() || (this.extendByPoint(e.xMin, e.yMin), this.extendByPoint(e.xMax, e.yMax));
    };
    c.prototype.extendByPoint = function(e, f) {
      this.extendByX(e);
      this.extendByY(f);
    };
    c.prototype.extendByX = function(e) {
      134217728 === this.xMin ? this.xMin = this.xMax = e : (this.xMin = Math.min(this.xMin, e), this.xMax = Math.max(this.xMax, e));
    };
    c.prototype.extendByY = function(e) {
      134217728 === this.yMin ? this.yMin = this.yMax = e : (this.yMin = Math.min(this.yMin, e), this.yMax = Math.max(this.yMax, e));
    };
    c.prototype.intersects = function(e) {
      return this.contains(e._xMin, e._yMin) || this.contains(e._xMax, e._yMax);
    };
    c.prototype.isEmpty = function() {
      return this._xMax <= this._xMin || this._yMax <= this._yMin;
    };
    Object.defineProperty(c.prototype, "xMin", {get:function() {
      return this._xMin;
    }, set:function(e) {
      n.assert(r(e));
      this._xMin = e;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(c.prototype, "yMin", {get:function() {
      return this._yMin;
    }, set:function(e) {
      n.assert(r(e));
      this._yMin = e | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(c.prototype, "xMax", {get:function() {
      return this._xMax;
    }, set:function(e) {
      n.assert(r(e));
      this._xMax = e | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(c.prototype, "width", {get:function() {
      return this._xMax - this._xMin;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(c.prototype, "yMax", {get:function() {
      return this._yMax;
    }, set:function(e) {
      n.assert(r(e));
      this._yMax = e | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(c.prototype, "height", {get:function() {
      return this._yMax - this._yMin;
    }, enumerable:!0, configurable:!0});
    c.prototype.getBaseWidth = function(e) {
      return Math.abs(Math.cos(e)) * (this._xMax - this._xMin) + Math.abs(Math.sin(e)) * (this._yMax - this._yMin);
    };
    c.prototype.getBaseHeight = function(e) {
      return Math.abs(Math.sin(e)) * (this._xMax - this._xMin) + Math.abs(Math.cos(e)) * (this._yMax - this._yMin);
    };
    c.prototype.setEmpty = function() {
      this._xMin = this._yMin = this._xMax = this._yMax = 0;
    };
    c.prototype.clone = function() {
      return new c(this.xMin, this.yMin, this.xMax, this.yMax);
    };
    c.prototype.toString = function() {
      return "{ xMin: " + this._xMin + ", yMin: " + this._yMin + ", xMax: " + this._xMax + ", yMax: " + this._yMax + " }";
    };
    c.prototype.assertValid = function() {
    };
    return c;
  }();
  k.DebugBounds = a;
  a = function() {
    function c(e, f, d, q) {
      this.r = e;
      this.g = f;
      this.b = d;
      this.a = q;
    }
    c.FromARGB = function(e) {
      return new c((e >> 16 & 255) / 255, (e >> 8 & 255) / 255, (e >> 0 & 255) / 255, (e >> 24 & 255) / 255);
    };
    c.FromRGBA = function(e) {
      return c.FromARGB(l.RGBAToARGB(e));
    };
    c.prototype.toRGBA = function() {
      return 255 * this.r << 24 | 255 * this.g << 16 | 255 * this.b << 8 | 255 * this.a;
    };
    c.prototype.toCSSStyle = function() {
      return l.rgbaToCSSStyle(this.toRGBA());
    };
    c.prototype.set = function(e) {
      this.r = e.r;
      this.g = e.g;
      this.b = e.b;
      this.a = e.a;
    };
    c.randomColor = function() {
      var e = .4;
      void 0 === e && (e = 1);
      return new c(Math.random(), Math.random(), Math.random(), e);
    };
    c.parseColor = function(e) {
      c.colorCache || (c.colorCache = Object.create(null));
      if (c.colorCache[e]) {
        return c.colorCache[e];
      }
      var f = document.createElement("span");
      document.body.appendChild(f);
      f.style.backgroundColor = e;
      var d = getComputedStyle(f).backgroundColor;
      document.body.removeChild(f);
      (f = /^rgb\((\d+), (\d+), (\d+)\)$/.exec(d)) || (f = /^rgba\((\d+), (\d+), (\d+), ([\d.]+)\)$/.exec(d));
      d = new c(0, 0, 0, 0);
      d.r = parseFloat(f[1]) / 255;
      d.g = parseFloat(f[2]) / 255;
      d.b = parseFloat(f[3]) / 255;
      d.a = f[4] ? parseFloat(f[4]) / 255 : 1;
      return c.colorCache[e] = d;
    };
    c.Red = new c(1, 0, 0, 1);
    c.Green = new c(0, 1, 0, 1);
    c.Blue = new c(0, 0, 1, 1);
    c.None = new c(0, 0, 0, 0);
    c.White = new c(1, 1, 1, 1);
    c.Black = new c(0, 0, 0, 1);
    c.colorCache = {};
    return c;
  }();
  k.Color = a;
  var l;
  (function(c) {
    function e(d) {
      var f, e, c = d >> 24 & 255;
      e = (Math.imul(d >> 16 & 255, c) + 127) / 255 | 0;
      f = (Math.imul(d >> 8 & 255, c) + 127) / 255 | 0;
      d = (Math.imul(d >> 0 & 255, c) + 127) / 255 | 0;
      return c << 24 | e << 16 | f << 8 | d;
    }
    c.RGBAToARGB = function(d) {
      return d >> 8 & 16777215 | (d & 255) << 24;
    };
    c.ARGBToRGBA = function(d) {
      return d << 8 | d >> 24 & 255;
    };
    c.rgbaToCSSStyle = function(d) {
      return k.StringUtilities.concat9("rgba(", d >> 24 & 255, ",", d >> 16 & 255, ",", d >> 8 & 255, ",", (d & 255) / 255, ")");
    };
    c.cssStyleToRGBA = function(d) {
      if ("#" === d[0]) {
        if (7 === d.length) {
          return parseInt(d.substring(1), 16) << 8 | 255;
        }
      } else {
        if ("r" === d[0]) {
          return d = d.substring(5, d.length - 1).split(","), (parseInt(d[0]) & 255) << 24 | (parseInt(d[1]) & 255) << 16 | (parseInt(d[2]) & 255) << 8 | 255 * parseFloat(d[3]) & 255;
        }
      }
      return 4278190335;
    };
    c.hexToRGB = function(d) {
      return parseInt(d.slice(1), 16);
    };
    c.rgbToHex = function(d) {
      return "#" + ("000000" + (d >>> 0).toString(16)).slice(-6);
    };
    c.isValidHexColor = function(d) {
      return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(d);
    };
    c.clampByte = function(d) {
      return Math.max(0, Math.min(255, d));
    };
    c.unpremultiplyARGB = function(d) {
      var f, e, c = d >> 24 & 255;
      e = Math.imul(255, d >> 16 & 255) / c & 255;
      f = Math.imul(255, d >> 8 & 255) / c & 255;
      d = Math.imul(255, d >> 0 & 255) / c & 255;
      return c << 24 | e << 16 | f << 8 | d;
    };
    c.premultiplyARGB = e;
    var f;
    c.ensureUnpremultiplyTable = function() {
      if (!f) {
        f = new Uint8Array(65536);
        for (var d = 0;256 > d;d++) {
          for (var e = 0;256 > e;e++) {
            f[(e << 8) + d] = Math.imul(255, d) / e;
          }
        }
      }
    };
    c.tableLookupUnpremultiplyARGB = function(d) {
      d |= 0;
      var e = d >> 24 & 255;
      if (0 === e) {
        return 0;
      }
      if (255 === e) {
        return d;
      }
      var c, a, h = e << 8, p = f;
      a = p[h + (d >> 16 & 255)];
      c = p[h + (d >> 8 & 255)];
      d = p[h + (d >> 0 & 255)];
      return e << 24 | a << 16 | c << 8 | d;
    };
    c.blendPremultipliedBGRA = function(d, f) {
      var e, c;
      c = 256 - (f & 255);
      e = Math.imul(d & 16711935, c) >> 8;
      c = Math.imul(d >> 8 & 16711935, c) >> 8;
      return ((f >> 8 & 16711935) + c & 16711935) << 8 | (f & 16711935) + e & 16711935;
    };
    var d = w.swap32;
    c.convertImage = function(q, c, a, h) {
      var p = a.length;
      if (q === c) {
        if (a !== h) {
          for (q = 0;q < p;q++) {
            h[q] = a[q];
          }
        }
      } else {
        if (1 === q && 3 === c) {
          for (k.ColorUtilities.ensureUnpremultiplyTable(), q = 0;q < p;q++) {
            var l = a[q];
            c = l & 255;
            if (0 === c) {
              h[q] = 0;
            } else {
              if (255 === c) {
                h[q] = 4278190080 | l >> 8 & 16777215;
              } else {
                var m = l >> 24 & 255, b = l >> 16 & 255, l = l >> 8 & 255, t = c << 8, w = f, l = w[t + l], b = w[t + b], m = w[t + m];
                h[q] = c << 24 | m << 16 | b << 8 | l;
              }
            }
          }
        } else {
          if (2 === q && 3 === c) {
            for (q = 0;q < p;q++) {
              h[q] = d(a[q]);
            }
          } else {
            if (3 === q && 1 === c) {
              for (q = 0;q < p;q++) {
                c = a[q], h[q] = d(e(c & 4278255360 | c >> 16 & 255 | (c & 255) << 16));
              }
            } else {
              for (n.somewhatImplemented("Image Format Conversion: " + u[q] + " -> " + u[c]), q = 0;q < p;q++) {
                h[q] = a[q];
              }
            }
          }
        }
      }
    };
  })(l = k.ColorUtilities || (k.ColorUtilities = {}));
  a = function() {
    function c(e) {
      void 0 === e && (e = 32);
      this._list = [];
      this._maxSize = e;
    }
    c.prototype.acquire = function(e) {
      if (c._enabled) {
        for (var f = this._list, d = 0;d < f.length;d++) {
          var q = f[d];
          if (q.byteLength >= e) {
            return f.splice(d, 1), q;
          }
        }
      }
      return new ArrayBuffer(e);
    };
    c.prototype.release = function(e) {
      if (c._enabled) {
        var f = this._list;
        f.length === this._maxSize && f.shift();
        f.push(e);
      }
    };
    c.prototype.ensureUint8ArrayLength = function(e, f) {
      if (e.length >= f) {
        return e;
      }
      var d = Math.max(e.length + f, (3 * e.length >> 1) + 1), d = new Uint8Array(this.acquire(d), 0, d);
      d.set(e);
      this.release(e.buffer);
      return d;
    };
    c.prototype.ensureFloat64ArrayLength = function(e, f) {
      if (e.length >= f) {
        return e;
      }
      var d = Math.max(e.length + f, (3 * e.length >> 1) + 1), d = new Float64Array(this.acquire(d * Float64Array.BYTES_PER_ELEMENT), 0, d);
      d.set(e);
      this.release(e.buffer);
      return d;
    };
    c._enabled = !0;
    return c;
  }();
  k.ArrayBufferPool = a;
  (function(c) {
    (function(e) {
      e[e.EXTERNAL_INTERFACE_FEATURE = 1] = "EXTERNAL_INTERFACE_FEATURE";
      e[e.CLIPBOARD_FEATURE = 2] = "CLIPBOARD_FEATURE";
      e[e.SHAREDOBJECT_FEATURE = 3] = "SHAREDOBJECT_FEATURE";
      e[e.VIDEO_FEATURE = 4] = "VIDEO_FEATURE";
      e[e.SOUND_FEATURE = 5] = "SOUND_FEATURE";
      e[e.NETCONNECTION_FEATURE = 6] = "NETCONNECTION_FEATURE";
    })(c.Feature || (c.Feature = {}));
    (function(e) {
      e[e.AVM1_ERROR = 1] = "AVM1_ERROR";
      e[e.AVM2_ERROR = 2] = "AVM2_ERROR";
    })(c.ErrorTypes || (c.ErrorTypes = {}));
    c.instance;
  })(k.Telemetry || (k.Telemetry = {}));
  (function(c) {
    c.instance;
  })(k.FileLoadingService || (k.FileLoadingService = {}));
  (function(c) {
    c[c.BuiltinAbc = 0] = "BuiltinAbc";
    c[c.PlayerglobalAbcs = 1] = "PlayerglobalAbcs";
    c[c.PlayerglobalManifest = 2] = "PlayerglobalManifest";
    c[c.ShellAbc = 3] = "ShellAbc";
  })(k.SystemResourceId || (k.SystemResourceId = {}));
  (function(c) {
    c.instance;
  })(k.SystemResourcesLoadingService || (k.SystemResourcesLoadingService = {}));
  k.registerCSSFont = function(c, e, f) {
    if (inBrowser) {
      var d = document.head;
      d.insertBefore(document.createElement("style"), d.firstChild);
      d = document.styleSheets[0];
      e = "@font-face{font-family:swffont" + c + ";src:url(data:font/opentype;base64," + k.StringUtilities.base64ArrayBuffer(e.buffer) + ")}";
      d.insertRule(e, d.cssRules.length);
      f && (f = document.createElement("div"), f.style.fontFamily = "swffont" + c, f.innerHTML = "hello", document.body.appendChild(f), document.body.removeChild(f));
    } else {
      n.warning("Cannot register CSS font outside the browser");
    }
  };
  (function(c) {
    c.instance = {enabled:!1, initJS:function(e) {
    }, registerCallback:function(e) {
    }, unregisterCallback:function(e) {
    }, eval:function(e) {
    }, call:function(e) {
    }, getId:function() {
      return null;
    }};
  })(k.ExternalInterfaceService || (k.ExternalInterfaceService = {}));
  (function(c) {
    c.instance = {setClipboard:function(e) {
    }};
  })(k.ClipboardService || (k.ClipboardService = {}));
  a = function() {
    function c() {
      this._queues = {};
    }
    c.prototype.register = function(e, f) {
      n.assert(e);
      n.assert(f);
      var d = this._queues[e];
      if (d) {
        if (-1 < d.indexOf(f)) {
          return;
        }
      } else {
        d = this._queues[e] = [];
      }
      d.push(f);
    };
    c.prototype.unregister = function(e, f) {
      n.assert(e);
      n.assert(f);
      var d = this._queues[e];
      if (d) {
        var q = d.indexOf(f);
        -1 !== q && d.splice(q, 1);
        0 === d.length && (this._queues[e] = null);
      }
    };
    c.prototype.notify = function(e, f) {
      var d = this._queues[e];
      if (d) {
        d = d.slice();
        f = Array.prototype.slice.call(arguments, 0);
        for (var q = 0;q < d.length;q++) {
          d[q].apply(null, f);
        }
      }
    };
    c.prototype.notify1 = function(e, f) {
      var d = this._queues[e];
      if (d) {
        for (var d = d.slice(), q = 0;q < d.length;q++) {
          (0,d[q])(e, f);
        }
      }
    };
    return c;
  }();
  k.Callback = a;
  (function(c) {
    c[c.None = 0] = "None";
    c[c.PremultipliedAlphaARGB = 1] = "PremultipliedAlphaARGB";
    c[c.StraightAlphaARGB = 2] = "StraightAlphaARGB";
    c[c.StraightAlphaRGBA = 3] = "StraightAlphaRGBA";
    c[c.JPEG = 4] = "JPEG";
    c[c.PNG = 5] = "PNG";
    c[c.GIF = 6] = "GIF";
  })(k.ImageType || (k.ImageType = {}));
  var u = k.ImageType;
  k.getMIMETypeForImageType = function(c) {
    switch(c) {
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
  (function(c) {
    c.toCSSCursor = function(e) {
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
    function c() {
      this.promise = new Promise(function(e, f) {
        this.resolve = e;
        this.reject = f;
      }.bind(this));
    }
    c.prototype.then = function(e, f) {
      return this.promise.then(e, f);
    };
    return c;
  }();
  k.PromiseWrapper = a;
})(Shumway || (Shumway = {}));
(function() {
  function k(d) {
    if ("function" !== typeof d) {
      throw new TypeError("Invalid deferred constructor");
    }
    var f = t();
    d = new d(f);
    var e = f.resolve;
    if ("function" !== typeof e) {
      throw new TypeError("Invalid resolve construction function");
    }
    f = f.reject;
    if ("function" !== typeof f) {
      throw new TypeError("Invalid reject construction function");
    }
    return {promise:d, resolve:e, reject:f};
  }
  function r(d, f) {
    if ("object" !== typeof d || null === d) {
      return !1;
    }
    try {
      var e = d.then;
      if ("function" !== typeof e) {
        return !1;
      }
      e.call(d, f.resolve, f.reject);
    } catch (c) {
      e = f.reject, e(c);
    }
    return !0;
  }
  function g(d) {
    return "object" === typeof d && null !== d && "undefined" !== typeof d.promiseStatus;
  }
  function b(d, f) {
    if ("unresolved" === d.promiseStatus) {
      var e = d.rejectReactions;
      d.result = f;
      d.resolveReactions = void 0;
      d.rejectReactions = void 0;
      d.promiseStatus = "has-rejection";
      v(e, f);
    }
  }
  function v(d, f) {
    for (var e = 0;e < d.length;e++) {
      n({reaction:d[e], argument:f});
    }
  }
  function n(d) {
    0 === f.length && setTimeout(a, 0);
    f.push(d);
  }
  function a() {
    for (;0 < f.length;) {
      var d = f[0];
      try {
        a: {
          var q = d.reaction, e = q.deferred, a = q.handler, h = void 0, p = void 0;
          try {
            h = a(d.argument);
          } catch (l) {
            var u = e.reject;
            u(l);
            break a;
          }
          if (h === e.promise) {
            u = e.reject, u(new TypeError("Self resolution"));
          } else {
            try {
              if (p = r(h, e), !p) {
                var m = e.resolve;
                m(h);
              }
            } catch (b) {
              u = e.reject, u(b);
            }
          }
        }
      } catch (n) {
        if ("function" === typeof c.onerror) {
          c.onerror(n);
        }
      }
      f.shift();
    }
  }
  function h(d) {
    throw d;
  }
  function p(d) {
    return d;
  }
  function m(d) {
    return function(f) {
      b(d, f);
    };
  }
  function w(d) {
    return function(f) {
      if ("unresolved" === d.promiseStatus) {
        var e = d.resolveReactions;
        d.result = f;
        d.resolveReactions = void 0;
        d.rejectReactions = void 0;
        d.promiseStatus = "has-resolution";
        v(e, f);
      }
    };
  }
  function t() {
    function d(f, e) {
      d.resolve = f;
      d.reject = e;
    }
    return d;
  }
  function l(d, f, e) {
    return function(c) {
      if (c === d) {
        return e(new TypeError("Self resolution"));
      }
      var a = d.promiseConstructor;
      if (g(c) && c.promiseConstructor === a) {
        return c.then(f, e);
      }
      a = k(a);
      return r(c, a) ? a.promise.then(f, e) : f(c);
    };
  }
  function u(d, f, e, c) {
    return function(a) {
      f[d] = a;
      c.countdown--;
      0 === c.countdown && e.resolve(f);
    };
  }
  function c(d) {
    if ("function" !== typeof d) {
      throw new TypeError("resolver is not a function");
    }
    if ("object" !== typeof this) {
      throw new TypeError("Promise to initialize is not an object");
    }
    this.promiseStatus = "unresolved";
    this.resolveReactions = [];
    this.rejectReactions = [];
    this.result = void 0;
    var f = w(this), e = m(this);
    try {
      d(f, e);
    } catch (a) {
      b(this, a);
    }
    this.promiseConstructor = c;
    return this;
  }
  var e = Function("return this")();
  if (e.Promise) {
    "function" !== typeof e.Promise.all && (e.Promise.all = function(d) {
      var f = 0, c = [], a, h, p = new e.Promise(function(d, f) {
        a = d;
        h = f;
      });
      d.forEach(function(d, e) {
        f++;
        d.then(function(d) {
          c[e] = d;
          f--;
          0 === f && a(c);
        }, h);
      });
      0 === f && a(c);
      return p;
    }), "function" !== typeof e.Promise.resolve && (e.Promise.resolve = function(d) {
      return new e.Promise(function(f) {
        f(d);
      });
    });
  } else {
    var f = [];
    c.all = function(d) {
      var f = k(this), e = [], c = {countdown:0}, a = 0;
      d.forEach(function(d) {
        this.cast(d).then(u(a, e, f, c), f.reject);
        a++;
        c.countdown++;
      }, this);
      0 === a && f.resolve(e);
      return f.promise;
    };
    c.cast = function(d) {
      if (g(d)) {
        return d;
      }
      var f = k(this);
      f.resolve(d);
      return f.promise;
    };
    c.reject = function(d) {
      var f = k(this);
      f.reject(d);
      return f.promise;
    };
    c.resolve = function(d) {
      var f = k(this);
      f.resolve(d);
      return f.promise;
    };
    c.prototype = {"catch":function(d) {
      this.then(void 0, d);
    }, then:function(d, f) {
      if (!g(this)) {
        throw new TypeError("this is not a Promises");
      }
      var e = k(this.promiseConstructor), c = "function" === typeof f ? f : h, a = {deferred:e, handler:l(this, "function" === typeof d ? d : p, c)}, c = {deferred:e, handler:c};
      switch(this.promiseStatus) {
        case "unresolved":
          this.resolveReactions.push(a);
          this.rejectReactions.push(c);
          break;
        case "has-resolution":
          n({reaction:a, argument:this.result});
          break;
        case "has-rejection":
          n({reaction:c, argument:this.result});
      }
      return e.promise;
    }};
    e.Promise = c;
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
    for (var v = (g - v) / k.length, n = 0;n < v;n++) {
      b += k;
    }
    return b;
  });
  k(String.prototype, "padLeft", function(k, g) {
    var b = this, v = b.length;
    if (!k || v >= g) {
      return b;
    }
    for (var v = (g - v) / k.length, n = 0;n < v;n++) {
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
      function a(a, p, m, b) {
        this.shortName = a;
        this.longName = p;
        this.type = m;
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
      a.prototype.addArgument = function(a, p, m, n) {
        a = new b(a, p, m, n);
        this.args.push(a);
        return a;
      };
      a.prototype.addBoundOption = function(a) {
        this.args.push(new b(a.shortName, a.longName, a.type, {parse:function(p) {
          a.value = p;
        }}));
      };
      a.prototype.addBoundOptionSet = function(a) {
        var p = this;
        a.options.forEach(function(a) {
          a instanceof n ? p.addBoundOptionSet(a) : p.addBoundOption(a);
        });
      };
      a.prototype.getUsage = function() {
        var a = "";
        this.args.forEach(function(p) {
          a = p.positional ? a + p.longName : a + ("[-" + p.shortName + "|--" + p.longName + ("boolean" === p.type ? "" : " " + p.type[0].toUpperCase()) + "]");
          a += " ";
        });
        return a;
      };
      a.prototype.parse = function(a) {
        var p = {}, b = [];
        this.args.forEach(function(c) {
          c.positional ? b.push(c) : (p["-" + c.shortName] = c, p["--" + c.longName] = c);
        });
        for (var n = [];a.length;) {
          var t = a.shift(), l = null, u = t;
          if ("--" == t) {
            n = n.concat(a);
            break;
          } else {
            if ("-" == t.slice(0, 1) || "--" == t.slice(0, 2)) {
              l = p[t];
              if (!l) {
                continue;
              }
              u = "boolean" !== l.type ? a.shift() : !0;
            } else {
              b.length ? l = b.shift() : n.push(u);
            }
          }
          l && l.parse(u);
        }
        return n;
      };
      return a;
    }();
    r.ArgumentParser = v;
    var n = function() {
      function a(a, p) {
        void 0 === p && (p = null);
        this.open = !1;
        this.name = a;
        this.settings = p || {};
        this.options = [];
      }
      a.prototype.register = function(h) {
        if (h instanceof a) {
          for (var p = 0;p < this.options.length;p++) {
            var b = this.options[p];
            if (b instanceof a && b.name === h.name) {
              return b;
            }
          }
        }
        this.options.push(h);
        if (this.settings) {
          if (h instanceof a) {
            p = this.settings[h.name], g(p) && (h.settings = p.settings, h.open = p.open);
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
        this.options.forEach(function(p) {
          p.trace(a);
        });
        a.leave("}");
      };
      a.prototype.getSettings = function() {
        var h = {};
        this.options.forEach(function(p) {
          p instanceof a ? h[p.name] = {settings:p.getSettings(), open:p.open} : h[p.longName] = p.value;
        });
        return h;
      };
      a.prototype.setSettings = function(h) {
        h && this.options.forEach(function(p) {
          p instanceof a ? p.name in h && p.setSettings(h[p.name].settings) : p.longName in h && (p.value = h[p.longName]);
        });
      };
      return a;
    }();
    r.OptionSet = n;
    v = function() {
      function a(a, p, b, n, t, l) {
        void 0 === l && (l = null);
        this.longName = p;
        this.shortName = a;
        this.type = b;
        this.value = this.defaultValue = n;
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
      function b(b, n) {
        this._parent = b;
        this._timers = k.ObjectUtilities.createMap();
        this._name = n;
        this._count = this._total = this._last = this._begin = 0;
      }
      b.time = function(g, n) {
        b.start(g);
        n();
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
        for (var n in this._timers) {
          this._timers[n].trace(b);
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
      b.prototype.count = function(b, n, a) {
        void 0 === n && (n = 1);
        void 0 === a && (a = 0);
        if (this._enabled) {
          return void 0 === this._counts[b] && (this._counts[b] = 0, this._times[b] = 0), this._counts[b] += n, this._times[b] += a, this._counts[b];
        }
      };
      b.prototype.trace = function(b) {
        for (var n in this._counts) {
          b.writeLn(n + ": " + this._counts[n]);
        }
      };
      b.prototype._pairToString = function(b, n) {
        var a = n[0], h = n[1], p = b[a], a = a + ": " + h;
        p && (a += ", " + p.toFixed(4), 1 < h && (a += " (" + (p / h).toFixed(4) + ")"));
        return a;
      };
      b.prototype.toStringSorted = function() {
        var b = this, n = this._times, a = [], h;
        for (h in this._counts) {
          a.push([h, this._counts[h]]);
        }
        a.sort(function(a, h) {
          return h[1] - a[1];
        });
        return a.map(function(a) {
          return b._pairToString(n, a);
        }).join(", ");
      };
      b.prototype.traceSorted = function(b, n) {
        void 0 === n && (n = !1);
        var a = this, h = this._times, p = [], m;
        for (m in this._counts) {
          p.push([m, this._counts[m]]);
        }
        p.sort(function(a, h) {
          return h[1] - a[1];
        });
        n ? b.writeLn(p.map(function(p) {
          return a._pairToString(h, p);
        }).join(", ")) : p.forEach(function(p) {
          b.writeLn(a._pairToString(h, p));
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
        for (var b = 0, n = 0;n < this._count;n++) {
          b += this._samples[n];
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
      for (var d = Math.max.apply(null, f), q = f.length, e = 1 << d, a = new Uint32Array(e), c = d << 16 | 65535, h = 0;h < e;h++) {
        a[h] = c;
      }
      for (var c = 0, h = 1, p = 2;h <= d;c <<= 1, ++h, p <<= 1) {
        for (var l = 0;l < q;++l) {
          if (f[l] === h) {
            for (var b = 0, u = 0;u < h;++u) {
              b = 2 * b + (c >> u & 1);
            }
            for (u = b;u < e;u += p) {
              a[u] = h << 16 | l;
            }
            ++c;
          }
        }
      }
      return {codes:a, maxBits:d};
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
      function f(d) {
      }
      f.prototype.push = function(d) {
      };
      f.prototype.close = function() {
      };
      f.create = function(d) {
        return "undefined" !== typeof ShumwayCom && ShumwayCom.createSpecialInflate ? new u(d, ShumwayCom.createSpecialInflate) : new v(d);
      };
      f.prototype._processZLibHeader = function(d, f, e) {
        if (f + 2 > e) {
          return 0;
        }
        d = d[f] << 8 | d[f + 1];
        f = null;
        2048 !== (d & 3840) ? f = "inflate: unknown compression method" : 0 !== d % 31 ? f = "inflate: bad FCHECK" : 0 !== (d & 32) && (f = "inflate: FDICT bit set");
        if (f) {
          if (this.onError) {
            this.onError(f);
          }
          return -1;
        }
        return 2;
      };
      f.inflate = function(d, q, e) {
        var a = new Uint8Array(q), c = 0;
        q = f.create(e);
        q.onData = function(d) {
          var f = Math.min(d.length, a.length - c);
          f && k.memCopy(a, d, c, 0, f);
          c += f;
        };
        q.onError = function(d) {
          throw Error(d);
        };
        q.push(d);
        q.close();
        return a;
      };
      return f;
    }();
    k.Inflate = b;
    var v = function(f) {
      function d(d) {
        f.call(this, d);
        this._buffer = null;
        this._bitLength = this._bitBuffer = this._bufferPosition = this._bufferSize = 0;
        this._window = new Uint8Array(65794);
        this._windowPosition = 0;
        this._state = d ? 7 : 0;
        this._isFinalBlock = !1;
        this._distanceTable = this._literalTable = null;
        this._block0Read = 0;
        this._block2State = null;
        this._copyState = {state:0, len:0, lenBits:0, dist:0, distBits:0};
        if (!l) {
          n = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
          a = new Uint16Array(30);
          h = new Uint8Array(30);
          for (var e = d = 0, c = 1;30 > d;++d) {
            a[d] = c, c += 1 << (h[d] = ~~((e += 2 < d ? 1 : 0) / 2));
          }
          var b = new Uint8Array(288);
          for (d = 0;32 > d;++d) {
            b[d] = 5;
          }
          p = g(b.subarray(0, 32));
          m = new Uint16Array(29);
          w = new Uint8Array(29);
          e = d = 0;
          for (c = 3;29 > d;++d) {
            m[d] = c - (28 == d ? 1 : 0), c += 1 << (w[d] = ~~((e += 4 < d ? 1 : 0) / 4 % 6));
          }
          for (d = 0;288 > d;++d) {
            b[d] = 144 > d || 279 < d ? 8 : 256 > d ? 9 : 7;
          }
          t = g(b);
          l = !0;
        }
      }
      __extends(d, f);
      d.prototype.push = function(d) {
        if (!this._buffer || this._buffer.length < this._bufferSize + d.length) {
          var f = new Uint8Array(this._bufferSize + d.length);
          this._buffer && f.set(this._buffer);
          this._buffer = f;
        }
        this._buffer.set(d, this._bufferSize);
        this._bufferSize += d.length;
        this._bufferPosition = 0;
        d = !1;
        do {
          f = this._windowPosition;
          if (0 === this._state && (d = this._decodeInitState())) {
            break;
          }
          switch(this._state) {
            case 1:
              d = this._decodeBlock0();
              break;
            case 3:
              if (d = this._decodeBlock2Pre()) {
                break;
              }
            ;
            case 2:
            ;
            case 4:
              d = this._decodeBlock();
              break;
            case 6:
            ;
            case 5:
              this._bufferPosition = this._bufferSize;
              break;
            case 7:
              var e = this._processZLibHeader(this._buffer, this._bufferPosition, this._bufferSize);
              0 < e ? (this._bufferPosition += e, this._state = 0) : 0 === e ? d = !0 : this._state = 6;
          }
          if (0 < this._windowPosition - f) {
            this.onData(this._window.subarray(f, this._windowPosition));
          }
          65536 <= this._windowPosition && ("copyWithin" in this._buffer ? this._window.copyWithin(0, this._windowPosition - 32768, this._windowPosition) : this._window.set(this._window.subarray(this._windowPosition - 32768, this._windowPosition)), this._windowPosition = 32768);
        } while (!d && this._bufferPosition < this._bufferSize);
        this._bufferPosition < this._bufferSize ? ("copyWithin" in this._buffer ? this._buffer.copyWithin(0, this._bufferPosition, this._bufferSize) : this._buffer.set(this._buffer.subarray(this._bufferPosition, this._bufferSize)), this._bufferSize -= this._bufferPosition) : this._bufferSize = 0;
      };
      d.prototype._decodeInitState = function() {
        if (this._isFinalBlock) {
          return this._state = 5, !1;
        }
        var d = this._buffer, f = this._bufferSize, e = this._bitBuffer, c = this._bitLength, a = this._bufferPosition;
        if (3 > (f - a << 3) + c) {
          return !0;
        }
        3 > c && (e |= d[a++] << c, c += 8);
        var h = e & 7, e = e >> 3, c = c - 3;
        switch(h >> 1) {
          case 0:
            c = e = 0;
            if (4 > f - a) {
              return !0;
            }
            var l = d[a] | d[a + 1] << 8, d = d[a + 2] | d[a + 3] << 8, a = a + 4;
            if (65535 !== (l ^ d)) {
              this._error("inflate: invalid block 0 length");
              d = 6;
              break;
            }
            0 === l ? d = 0 : (this._block0Read = l, d = 1);
            break;
          case 1:
            d = 2;
            this._literalTable = t;
            this._distanceTable = p;
            break;
          case 2:
            if (26 > (f - a << 3) + c) {
              return !0;
            }
            for (;14 > c;) {
              e |= d[a++] << c, c += 8;
            }
            l = (e >> 10 & 15) + 4;
            if ((f - a << 3) + c < 14 + 3 * l) {
              return !0;
            }
            for (var f = {numLiteralCodes:(e & 31) + 257, numDistanceCodes:(e >> 5 & 31) + 1, codeLengthTable:void 0, bitLengths:void 0, codesRead:0, dupBits:0}, e = e >> 14, c = c - 14, b = new Uint8Array(19), u = 0;u < l;++u) {
              3 > c && (e |= d[a++] << c, c += 8), b[n[u]] = e & 7, e >>= 3, c -= 3;
            }
            for (;19 > u;u++) {
              b[n[u]] = 0;
            }
            f.bitLengths = new Uint8Array(f.numLiteralCodes + f.numDistanceCodes);
            f.codeLengthTable = g(b);
            this._block2State = f;
            d = 3;
            break;
          default:
            return this._error("inflate: unsupported block type"), !1;
        }
        this._isFinalBlock = !!(h & 1);
        this._state = d;
        this._bufferPosition = a;
        this._bitBuffer = e;
        this._bitLength = c;
        return !1;
      };
      d.prototype._error = function(d) {
        if (this.onError) {
          this.onError(d);
        }
      };
      d.prototype._decodeBlock0 = function() {
        var d = this._bufferPosition, f = this._windowPosition, e = this._block0Read, c = 65794 - f, a = this._bufferSize - d, h = a < e, p = Math.min(c, a, e);
        this._window.set(this._buffer.subarray(d, d + p), f);
        this._windowPosition = f + p;
        this._bufferPosition = d + p;
        this._block0Read = e - p;
        return e === p ? (this._state = 0, !1) : h && c < a;
      };
      d.prototype._readBits = function(d) {
        var f = this._bitBuffer, e = this._bitLength;
        if (d > e) {
          var c = this._bufferPosition, a = this._bufferSize;
          do {
            if (c >= a) {
              return this._bufferPosition = c, this._bitBuffer = f, this._bitLength = e, -1;
            }
            f |= this._buffer[c++] << e;
            e += 8;
          } while (d > e);
          this._bufferPosition = c;
        }
        this._bitBuffer = f >> d;
        this._bitLength = e - d;
        return f & (1 << d) - 1;
      };
      d.prototype._readCode = function(d) {
        var f = this._bitBuffer, e = this._bitLength, c = d.maxBits;
        if (c > e) {
          var a = this._bufferPosition, h = this._bufferSize;
          do {
            if (a >= h) {
              return this._bufferPosition = a, this._bitBuffer = f, this._bitLength = e, -1;
            }
            f |= this._buffer[a++] << e;
            e += 8;
          } while (c > e);
          this._bufferPosition = a;
        }
        d = d.codes[f & (1 << c) - 1];
        c = d >> 16;
        if (d & 32768) {
          return this._error("inflate: invalid encoding"), this._state = 6, -1;
        }
        this._bitBuffer = f >> c;
        this._bitLength = e - c;
        return d & 65535;
      };
      d.prototype._decodeBlock2Pre = function() {
        var d = this._block2State, f = d.numLiteralCodes + d.numDistanceCodes, e = d.bitLengths, c = d.codesRead, a = 0 < c ? e[c - 1] : 0, h = d.codeLengthTable, p;
        if (0 < d.dupBits) {
          p = this._readBits(d.dupBits);
          if (0 > p) {
            return !0;
          }
          for (;p--;) {
            e[c++] = a;
          }
          d.dupBits = 0;
        }
        for (;c < f;) {
          var l = this._readCode(h);
          if (0 > l) {
            return d.codesRead = c, !0;
          }
          if (16 > l) {
            e[c++] = a = l;
          } else {
            var b;
            switch(l) {
              case 16:
                b = 2;
                p = 3;
                l = a;
                break;
              case 17:
                p = b = 3;
                l = 0;
                break;
              case 18:
                b = 7, p = 11, l = 0;
            }
            for (;p--;) {
              e[c++] = l;
            }
            p = this._readBits(b);
            if (0 > p) {
              return d.codesRead = c, d.dupBits = b, !0;
            }
            for (;p--;) {
              e[c++] = l;
            }
            a = l;
          }
        }
        this._literalTable = g(e.subarray(0, d.numLiteralCodes));
        this._distanceTable = g(e.subarray(d.numLiteralCodes));
        this._state = 4;
        this._block2State = null;
        return !1;
      };
      d.prototype._decodeBlock = function() {
        var d = this._literalTable, f = this._distanceTable, e = this._window, c = this._windowPosition, p = this._copyState, l, b, u, n;
        if (0 !== p.state) {
          switch(p.state) {
            case 1:
              if (0 > (l = this._readBits(p.lenBits))) {
                return !0;
              }
              p.len += l;
              p.state = 2;
            case 2:
              if (0 > (l = this._readCode(f))) {
                return !0;
              }
              p.distBits = h[l];
              p.dist = a[l];
              p.state = 3;
            case 3:
              l = 0;
              if (0 < p.distBits && 0 > (l = this._readBits(p.distBits))) {
                return !0;
              }
              n = p.dist + l;
              b = p.len;
              for (l = c - n;b--;) {
                e[c++] = e[l++];
              }
              p.state = 0;
              if (65536 <= c) {
                return this._windowPosition = c, !1;
              }
              break;
          }
        }
        do {
          l = this._readCode(d);
          if (0 > l) {
            return this._windowPosition = c, !0;
          }
          if (256 > l) {
            e[c++] = l;
          } else {
            if (256 < l) {
              this._windowPosition = c;
              l -= 257;
              u = w[l];
              b = m[l];
              l = 0 === u ? 0 : this._readBits(u);
              if (0 > l) {
                return p.state = 1, p.len = b, p.lenBits = u, !0;
              }
              b += l;
              l = this._readCode(f);
              if (0 > l) {
                return p.state = 2, p.len = b, !0;
              }
              u = h[l];
              n = a[l];
              l = 0 === u ? 0 : this._readBits(u);
              if (0 > l) {
                return p.state = 3, p.len = b, p.dist = n, p.distBits = u, !0;
              }
              n += l;
              for (l = c - n;b--;) {
                e[c++] = e[l++];
              }
            } else {
              this._state = 0;
              break;
            }
          }
        } while (65536 > c);
        this._windowPosition = c;
        return !1;
      };
      return d;
    }(b), n, a, h, p, m, w, t, l = !1, u = function(f) {
      function d(d, e) {
        f.call(this, d);
        this._verifyHeader = d;
        this._specialInflate = e();
        this._specialInflate.setDataCallback(function(d) {
          this.onData(d);
        }.bind(this));
      }
      __extends(d, f);
      d.prototype.push = function(d) {
        if (this._verifyHeader) {
          var f;
          this._buffer ? (f = new Uint8Array(this._buffer.length + d.length), f.set(this._buffer), f.set(d, this._buffer.length), this._buffer = null) : f = new Uint8Array(d);
          var e = this._processZLibHeader(f, 0, f.length);
          if (0 === e) {
            this._buffer = f;
            return;
          }
          this._verifyHeader = !0;
          0 < e && (d = f.subarray(e));
        }
        this._specialInflate.push(d);
      };
      d.prototype.close = function() {
        this._specialInflate && (this._specialInflate.close(), this._specialInflate = null);
      };
      return d;
    }(b), c;
    (function(f) {
      f[f.WRITE = 0] = "WRITE";
      f[f.DONE = 1] = "DONE";
      f[f.ZLIB_HEADER = 2] = "ZLIB_HEADER";
    })(c || (c = {}));
    var e = function() {
      function f() {
        this.a = 1;
        this.b = 0;
      }
      f.prototype.update = function(d, f, e) {
        for (var c = this.a, a = this.b;f < e;++f) {
          c = (c + (d[f] & 255)) % 65521, a = (a + c) % 65521;
        }
        this.a = c;
        this.b = a;
      };
      f.prototype.getChecksum = function() {
        return this.b << 16 | this.a;
      };
      return f;
    }();
    k.Adler32 = e;
    c = function() {
      function f(d) {
        this._state = (this._writeZlibHeader = d) ? 2 : 0;
        this._adler32 = d ? new e : null;
      }
      f.prototype.push = function(d) {
        2 === this._state && (this.onData(new Uint8Array([120, 156])), this._state = 0);
        for (var f = d.length, e = new Uint8Array(f + 5 * Math.ceil(f / 65535)), c = 0, a = 0;65535 < f;) {
          e.set(new Uint8Array([0, 255, 255, 0, 0]), c), c += 5, e.set(d.subarray(a, a + 65535), c), a += 65535, c += 65535, f -= 65535;
        }
        e.set(new Uint8Array([0, f & 255, f >> 8 & 255, ~f & 255, ~f >> 8 & 255]), c);
        e.set(d.subarray(a, f), c + 5);
        this.onData(e);
        this._adler32 && this._adler32.update(d, 0, f);
      };
      f.prototype.close = function() {
        this._state = 1;
        this.onData(new Uint8Array([1, 0, 0, 255, 255]));
        if (this._adler32) {
          var d = this._adler32.getChecksum();
          this.onData(new Uint8Array([d & 255, d >> 8 & 255, d >> 16 & 255, d >>> 24 & 255]));
        }
      };
      return f;
    }();
    k.Deflate = c;
  })(k.ArrayUtilities || (k.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    function g(d) {
      for (var f = new Uint16Array(d), e = 0;e < d;e++) {
        f[e] = 1024;
      }
      return f;
    }
    function b(d, f, e, c) {
      for (var a = 1, h = 0, p = 0;p < e;p++) {
        var l = c.decodeBit(d, a + f), a = (a << 1) + l, h = h | l << p
      }
      return h;
    }
    function v(d, f) {
      var e = [];
      e.length = f;
      for (var c = 0;c < f;c++) {
        e[c] = new m(d);
      }
      return e;
    }
    var n = function() {
      function d() {
        this.pos = this.available = 0;
        this.buffer = new Uint8Array(2E3);
      }
      d.prototype.append = function(d) {
        var f = this.pos + this.available, e = f + d.length;
        if (e > this.buffer.length) {
          for (var c = 2 * this.buffer.length;c < e;) {
            c *= 2;
          }
          e = new Uint8Array(c);
          e.set(this.buffer);
          this.buffer = e;
        }
        this.buffer.set(d, f);
        this.available += d.length;
      };
      d.prototype.compact = function() {
        0 !== this.available && (this.buffer.set(this.buffer.subarray(this.pos, this.pos + this.available), 0), this.pos = 0);
      };
      d.prototype.readByte = function() {
        if (0 >= this.available) {
          throw Error("Unexpected end of file");
        }
        this.available--;
        return this.buffer[this.pos++];
      };
      return d;
    }(), a = function() {
      function d(d) {
        this.onData = d;
        this.processed = 0;
      }
      d.prototype.writeBytes = function(d) {
        this.onData.call(null, d);
        this.processed += d.length;
      };
      return d;
    }(), h = function() {
      function d(d) {
        this.outStream = d;
        this.buf = null;
        this.size = this.pos = 0;
        this.isFull = !1;
        this.totalPos = this.writePos = 0;
      }
      d.prototype.create = function(d) {
        this.buf = new Uint8Array(d);
        this.pos = 0;
        this.size = d;
        this.isFull = !1;
        this.totalPos = this.writePos = 0;
      };
      d.prototype.putByte = function(d) {
        this.totalPos++;
        this.buf[this.pos++] = d;
        this.pos === this.size && (this.flush(), this.pos = 0, this.isFull = !0);
      };
      d.prototype.getByte = function(d) {
        return this.buf[d <= this.pos ? this.pos - d : this.size - d + this.pos];
      };
      d.prototype.flush = function() {
        this.writePos < this.pos && (this.outStream.writeBytes(this.buf.subarray(this.writePos, this.pos)), this.writePos = this.pos === this.size ? 0 : this.pos);
      };
      d.prototype.copyMatch = function(d, f) {
        for (var e = this.pos, c = this.size, a = this.buf, h = d <= e ? e - d : c - d + e, p = f;0 < p;) {
          for (var l = Math.min(Math.min(p, c - e), c - h), b = 0;b < l;b++) {
            var u = a[h++];
            a[e++] = u;
          }
          e === c && (this.pos = e, this.flush(), e = 0, this.isFull = !0);
          h === c && (h = 0);
          p -= l;
        }
        this.pos = e;
        this.totalPos += f;
      };
      d.prototype.checkDistance = function(d) {
        return d <= this.pos || this.isFull;
      };
      d.prototype.isEmpty = function() {
        return 0 === this.pos && !this.isFull;
      };
      return d;
    }(), p = function() {
      function d(d) {
        this.inStream = d;
        this.code = this.range = 0;
        this.corrupted = !1;
      }
      d.prototype.init = function() {
        0 !== this.inStream.readByte() && (this.corrupted = !0);
        this.range = -1;
        for (var d = 0, f = 0;4 > f;f++) {
          d = d << 8 | this.inStream.readByte();
        }
        d === this.range && (this.corrupted = !0);
        this.code = d;
      };
      d.prototype.isFinishedOK = function() {
        return 0 === this.code;
      };
      d.prototype.decodeDirectBits = function(d) {
        var f = 0, e = this.range, c = this.code;
        do {
          var e = e >>> 1 | 0, c = c - e | 0, a = c >> 31, c = c + (e & a) | 0;
          c === e && (this.corrupted = !0);
          0 <= e && 16777216 > e && (e <<= 8, c = c << 8 | this.inStream.readByte());
          f = (f << 1) + a + 1 | 0;
        } while (--d);
        this.range = e;
        this.code = c;
        return f;
      };
      d.prototype.decodeBit = function(d, f) {
        var e = this.range, c = this.code, a = d[f], h = (e >>> 11) * a;
        c >>> 0 < h ? (a = a + (2048 - a >> 5) | 0, e = h | 0, h = 0) : (a = a - (a >> 5) | 0, c = c - h | 0, e = e - h | 0, h = 1);
        d[f] = a & 65535;
        0 <= e && 16777216 > e && (e <<= 8, c = c << 8 | this.inStream.readByte());
        this.range = e;
        this.code = c;
        return h;
      };
      return d;
    }(), m = function() {
      function d(d) {
        this.numBits = d;
        this.probs = g(1 << d);
      }
      d.prototype.decode = function(d) {
        for (var f = 1, e = 0;e < this.numBits;e++) {
          f = (f << 1) + d.decodeBit(this.probs, f);
        }
        return f - (1 << this.numBits);
      };
      d.prototype.reverseDecode = function(d) {
        return b(this.probs, 0, this.numBits, d);
      };
      return d;
    }(), w = function() {
      function d() {
        this.choice = g(2);
        this.lowCoder = v(3, 16);
        this.midCoder = v(3, 16);
        this.highCoder = new m(8);
      }
      d.prototype.decode = function(d, f) {
        return 0 === d.decodeBit(this.choice, 0) ? this.lowCoder[f].decode(d) : 0 === d.decodeBit(this.choice, 1) ? 8 + this.midCoder[f].decode(d) : 16 + this.highCoder.decode(d);
      };
      return d;
    }(), t = function() {
      function d(d, f) {
        this.rangeDec = new p(d);
        this.outWindow = new h(f);
        this.markerIsMandatory = !1;
        this.dictSizeInProperties = this.dictSize = this.lp = this.pb = this.lc = 0;
        this.leftToUnpack = this.unpackSize = void 0;
        this.reps = new Int32Array(4);
        this.state = 0;
      }
      d.prototype.decodeProperties = function(d) {
        var f = d[0];
        if (225 <= f) {
          throw Error("Incorrect LZMA properties");
        }
        this.lc = f % 9;
        f = f / 9 | 0;
        this.pb = f / 5 | 0;
        this.lp = f % 5;
        for (f = this.dictSizeInProperties = 0;4 > f;f++) {
          this.dictSizeInProperties |= d[f + 1] << 8 * f;
        }
        this.dictSize = this.dictSizeInProperties;
        4096 > this.dictSize && (this.dictSize = 4096);
      };
      d.prototype.create = function() {
        this.outWindow.create(this.dictSize);
        this.init();
        this.rangeDec.init();
        this.reps[0] = 0;
        this.reps[1] = 0;
        this.reps[2] = 0;
        this.state = this.reps[3] = 0;
        this.leftToUnpack = this.unpackSize;
      };
      d.prototype.decodeLiteral = function(d, f) {
        var e = this.outWindow, c = this.rangeDec, a = 0;
        e.isEmpty() || (a = e.getByte(1));
        var h = 1, a = 768 * (((e.totalPos & (1 << this.lp) - 1) << this.lc) + (a >> 8 - this.lc));
        if (7 <= d) {
          e = e.getByte(f + 1);
          do {
            var p = e >> 7 & 1, e = e << 1, l = c.decodeBit(this.litProbs, a + ((1 + p << 8) + h)), h = h << 1 | l;
            if (p !== l) {
              break;
            }
          } while (256 > h);
        }
        for (;256 > h;) {
          h = h << 1 | c.decodeBit(this.litProbs, a + h);
        }
        return h - 256 & 255;
      };
      d.prototype.decodeDistance = function(d) {
        var f = d;
        3 < f && (f = 3);
        d = this.rangeDec;
        f = this.posSlotDecoder[f].decode(d);
        if (4 > f) {
          return f;
        }
        var e = (f >> 1) - 1, c = (2 | f & 1) << e;
        14 > f ? c = c + b(this.posDecoders, c - f, e, d) | 0 : (c = c + (d.decodeDirectBits(e - 4) << 4) | 0, c = c + this.alignDecoder.reverseDecode(d) | 0);
        return c;
      };
      d.prototype.init = function() {
        this.litProbs = g(768 << this.lc + this.lp);
        this.posSlotDecoder = v(6, 4);
        this.alignDecoder = new m(4);
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
      d.prototype.decode = function(d) {
        for (var f = this.rangeDec, a = this.outWindow, h = this.pb, p = this.dictSize, b = this.markerIsMandatory, m = this.leftToUnpack, n = this.isMatch, t = this.isRep, w = this.isRepG0, g = this.isRepG1, k = this.isRepG2, r = this.isRep0Long, v = this.lenDecoder, y = this.repLenDecoder, z = this.reps[0], B = this.reps[1], x = this.reps[2], F = this.reps[3], A = this.state;;) {
          if (d && 48 > f.inStream.available) {
            this.outWindow.flush();
            break;
          }
          if (0 === m && !b && (this.outWindow.flush(), f.isFinishedOK())) {
            return c;
          }
          var E = a.totalPos & (1 << h) - 1;
          if (0 === f.decodeBit(n, (A << 4) + E)) {
            if (0 === m) {
              return l;
            }
            a.putByte(this.decodeLiteral(A, z));
            A = 4 > A ? 0 : 10 > A ? A - 3 : A - 6;
            m--;
          } else {
            if (0 !== f.decodeBit(t, A)) {
              if (0 === m || a.isEmpty()) {
                return l;
              }
              if (0 === f.decodeBit(w, A)) {
                if (0 === f.decodeBit(r, (A << 4) + E)) {
                  A = 7 > A ? 9 : 11;
                  a.putByte(a.getByte(z + 1));
                  m--;
                  continue;
                }
              } else {
                var I;
                0 === f.decodeBit(g, A) ? I = B : (0 === f.decodeBit(k, A) ? I = x : (I = F, F = x), x = B);
                B = z;
                z = I;
              }
              E = y.decode(f, E);
              A = 7 > A ? 8 : 11;
            } else {
              F = x;
              x = B;
              B = z;
              E = v.decode(f, E);
              A = 7 > A ? 7 : 10;
              z = this.decodeDistance(E);
              if (-1 === z) {
                return this.outWindow.flush(), f.isFinishedOK() ? u : l;
              }
              if (0 === m || z >= p || !a.checkDistance(z)) {
                return l;
              }
            }
            E += 2;
            I = !1;
            void 0 !== m && m < E && (E = m, I = !0);
            a.copyMatch(z + 1, E);
            m -= E;
            if (I) {
              return l;
            }
          }
        }
        this.state = A;
        this.reps[0] = z;
        this.reps[1] = B;
        this.reps[2] = x;
        this.reps[3] = F;
        this.leftToUnpack = m;
        return e;
      };
      d.prototype.flushOutput = function() {
        this.outWindow.flush();
      };
      return d;
    }(), l = 0, u = 1, c = 2, e = 3, f;
    (function(d) {
      d[d.WAIT_FOR_LZMA_HEADER = 0] = "WAIT_FOR_LZMA_HEADER";
      d[d.WAIT_FOR_SWF_HEADER = 1] = "WAIT_FOR_SWF_HEADER";
      d[d.PROCESS_DATA = 2] = "PROCESS_DATA";
      d[d.CLOSED = 3] = "CLOSED";
      d[d.ERROR = 4] = "ERROR";
    })(f || (f = {}));
    f = function() {
      function d(d) {
        void 0 === d && (d = !1);
        this._state = d ? 1 : 0;
        this.buffer = null;
      }
      d.prototype.push = function(d) {
        if (2 > this._state) {
          var f = this.buffer ? this.buffer.length : 0, c = (1 === this._state ? 17 : 13) + 5;
          if (f + d.length < c) {
            c = new Uint8Array(f + d.length);
            0 < f && c.set(this.buffer);
            c.set(d, f);
            this.buffer = c;
            return;
          }
          var h = new Uint8Array(c);
          0 < f && h.set(this.buffer);
          h.set(d.subarray(0, c - f), f);
          this._inStream = new n;
          this._inStream.append(h.subarray(c - 5));
          this._outStream = new a(function(d) {
            this.onData.call(null, d);
          }.bind(this));
          this._decoder = new t(this._inStream, this._outStream);
          if (1 === this._state) {
            this._decoder.decodeProperties(h.subarray(12, 17)), this._decoder.markerIsMandatory = !1, this._decoder.unpackSize = ((h[4] | h[5] << 8 | h[6] << 16 | h[7] << 24) >>> 0) - 8;
          } else {
            this._decoder.decodeProperties(h.subarray(0, 5));
            for (var f = 0, p = !1, l = 0;8 > l;l++) {
              var b = h[5 + l];
              255 !== b && (p = !0);
              f |= b << 8 * l;
            }
            this._decoder.markerIsMandatory = !p;
            this._decoder.unpackSize = p ? f : void 0;
          }
          this._decoder.create();
          d = d.subarray(c);
          this._state = 2;
        } else {
          if (2 !== this._state) {
            return;
          }
        }
        try {
          this._inStream.append(d);
          var u = this._decoder.decode(!0);
          this._inStream.compact();
          u !== e && this._checkError(u);
        } catch (m) {
          this._decoder.flushOutput(), this._decoder = null, this._error(m);
        }
      };
      d.prototype.close = function() {
        if (2 === this._state) {
          this._state = 3;
          try {
            var d = this._decoder.decode(!1);
            this._checkError(d);
          } catch (f) {
            this._decoder.flushOutput(), this._error(f);
          }
          this._decoder = null;
        }
      };
      d.prototype._error = function(d) {
        this._state = 4;
        if (this.onError) {
          this.onError(d);
        }
      };
      d.prototype._checkError = function(d) {
        var f;
        d === l ? f = "LZMA decoding error" : d === e ? f = "Decoding is not complete" : d === u ? void 0 !== this._decoder.unpackSize && this._decoder.unpackSize !== this._outStream.processed && (f = "Finished with end marker before than specified size") : f = "Internal LZMA Error";
        f && this._error(f);
      };
      return d;
    }();
    k.LzmaDecoder = f;
  })(k.ArrayUtilities || (k.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    function g(a) {
      return "string" === typeof a ? a : void 0 == a ? null : a + "";
    }
    var b = k.Debug.notImplemented, v = k.StringUtilities.utf8decode, n = k.StringUtilities.utf8encode, a = k.NumberUtilities.clamp, h = function() {
      return function(a, h, c) {
        this.buffer = a;
        this.length = h;
        this.littleEndian = c;
      };
    }();
    r.PlainObjectDataBuffer = h;
    for (var p = new Uint32Array(33), m = 1, w = 0;32 >= m;m++) {
      p[m] = w = w << 1 | 1;
    }
    var t;
    (function(a) {
      a[a.U8 = 1] = "U8";
      a[a.I32 = 2] = "I32";
      a[a.F32 = 4] = "F32";
    })(t || (t = {}));
    m = function() {
      function l(a) {
        void 0 === a && (a = l.INITIAL_SIZE);
        this._buffer || (this._buffer = new ArrayBuffer(a), this._position = this._length = 0, this._resetViews(), this._littleEndian = l._nativeLittleEndian, this._bitLength = this._bitBuffer = 0);
      }
      l.FromArrayBuffer = function(a, c) {
        void 0 === c && (c = -1);
        var e = Object.create(l.prototype);
        e._buffer = a;
        e._length = -1 === c ? a.byteLength : c;
        e._position = 0;
        e._resetViews();
        e._littleEndian = l._nativeLittleEndian;
        e._bitBuffer = 0;
        e._bitLength = 0;
        return e;
      };
      l.FromPlainObject = function(a) {
        var c = l.FromArrayBuffer(a.buffer, a.length);
        c._littleEndian = a.littleEndian;
        return c;
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
        var c = this._buffer;
        if (c.byteLength < a) {
          for (var e = Math.max(c.byteLength, 1);e < a;) {
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
          l._arrayBufferPool.release(c);
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
      l.prototype.readBytes = function(a, c) {
        var e = 0;
        void 0 === e && (e = 0);
        void 0 === c && (c = 0);
        var f = this._position;
        e || (e = 0);
        c || (c = this._length - f);
        f + c > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        a.length < e + c && (a._ensureCapacity(e + c), a.length = e + c);
        a._u8.set(new Uint8Array(this._buffer, f, c), e);
        this._position += c;
      };
      l.prototype.readShort = function() {
        return this.readUnsignedShort() << 16 >> 16;
      };
      l.prototype.readUnsignedShort = function() {
        var a = this._u8, c = this._position;
        c + 2 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var e = a[c + 0], a = a[c + 1];
        this._position = c + 2;
        return this._littleEndian ? a << 8 | e : e << 8 | a;
      };
      l.prototype.readInt = function() {
        var a = this._u8, c = this._position;
        c + 4 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var e = a[c + 0], f = a[c + 1], d = a[c + 2], a = a[c + 3];
        this._position = c + 4;
        return this._littleEndian ? a << 24 | d << 16 | f << 8 | e : e << 24 | f << 16 | d << 8 | a;
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
        var c = this._u8, e = k.IntegerUtilities.u8;
        this._littleEndian ? (e[0] = c[a + 0], e[1] = c[a + 1], e[2] = c[a + 2], e[3] = c[a + 3]) : (e[3] = c[a + 0], e[2] = c[a + 1], e[1] = c[a + 2], e[0] = c[a + 3]);
        return k.IntegerUtilities.f32[0];
      };
      l.prototype.readDouble = function() {
        var a = this._u8, c = this._position;
        c + 8 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var e = k.IntegerUtilities.u8;
        this._littleEndian ? (e[0] = a[c + 0], e[1] = a[c + 1], e[2] = a[c + 2], e[3] = a[c + 3], e[4] = a[c + 4], e[5] = a[c + 5], e[6] = a[c + 6], e[7] = a[c + 7]) : (e[0] = a[c + 7], e[1] = a[c + 6], e[2] = a[c + 5], e[3] = a[c + 4], e[4] = a[c + 3], e[5] = a[c + 2], e[6] = a[c + 1], e[7] = a[c + 0]);
        this._position = c + 8;
        return k.IntegerUtilities.f64[0];
      };
      l.prototype.writeBoolean = function(a) {
        this.writeByte(a ? 1 : 0);
      };
      l.prototype.writeByte = function(a) {
        var c = this._position + 1;
        this._ensureCapacity(c);
        this._u8[this._position++] = a;
        c > this._length && (this._length = c);
      };
      l.prototype.writeUnsignedByte = function(a) {
        var c = this._position + 1;
        this._ensureCapacity(c);
        this._u8[this._position++] = a;
        c > this._length && (this._length = c);
      };
      l.prototype.writeRawBytes = function(a) {
        var c = this._position + a.length;
        this._ensureCapacity(c);
        this._u8.set(a, this._position);
        this._position = c;
        c > this._length && (this._length = c);
      };
      l.prototype.writeBytes = function(h, c, e) {
        k.isNullOrUndefined(h) && this.sec.throwError("TypeError", Errors.NullPointerError, "bytes");
        c >>>= 0;
        e >>>= 0;
        2 > arguments.length && (c = 0);
        3 > arguments.length && (e = 0);
        c === a(c, 0, h.length) && c + e === a(c + e, 0, h.length) || this.sec.throwError("RangeError", Errors.ParamRangeError);
        0 === e && (e = h.length - c);
        this.writeRawBytes(new Int8Array(h._buffer, c, e));
      };
      l.prototype.writeShort = function(a) {
        this.writeUnsignedShort(a);
      };
      l.prototype.writeUnsignedShort = function(a) {
        var c = this._position;
        this._ensureCapacity(c + 2);
        var e = this._u8;
        this._littleEndian ? (e[c + 0] = a, e[c + 1] = a >> 8) : (e[c + 0] = a >> 8, e[c + 1] = a);
        this._position = c += 2;
        c > this._length && (this._length = c);
      };
      l.prototype.writeInt = function(a) {
        this.writeUnsignedInt(a);
      };
      l.prototype.write2Ints = function(a, c) {
        this.write2UnsignedInts(a, c);
      };
      l.prototype.write4Ints = function(a, c, e, f) {
        this.write4UnsignedInts(a, c, e, f);
      };
      l.prototype.writeUnsignedInt = function(a) {
        var c = this._position;
        this._ensureCapacity(c + 4);
        this._requestViews(2);
        if (this._littleEndian === l._nativeLittleEndian && 0 === (c & 3) && this._i32) {
          this._i32[c >> 2] = a;
        } else {
          var e = this._u8;
          this._littleEndian ? (e[c + 0] = a, e[c + 1] = a >> 8, e[c + 2] = a >> 16, e[c + 3] = a >> 24) : (e[c + 0] = a >> 24, e[c + 1] = a >> 16, e[c + 2] = a >> 8, e[c + 3] = a);
        }
        this._position = c += 4;
        c > this._length && (this._length = c);
      };
      l.prototype.write2UnsignedInts = function(a, c) {
        var e = this._position;
        this._ensureCapacity(e + 8);
        this._requestViews(2);
        this._littleEndian === l._nativeLittleEndian && 0 === (e & 3) && this._i32 ? (this._i32[(e >> 2) + 0] = a, this._i32[(e >> 2) + 1] = c, this._position = e += 8, e > this._length && (this._length = e)) : (this.writeUnsignedInt(a), this.writeUnsignedInt(c));
      };
      l.prototype.write4UnsignedInts = function(a, c, e, f) {
        var d = this._position;
        this._ensureCapacity(d + 16);
        this._requestViews(2);
        this._littleEndian === l._nativeLittleEndian && 0 === (d & 3) && this._i32 ? (this._i32[(d >> 2) + 0] = a, this._i32[(d >> 2) + 1] = c, this._i32[(d >> 2) + 2] = e, this._i32[(d >> 2) + 3] = f, this._position = d += 16, d > this._length && (this._length = d)) : (this.writeUnsignedInt(a), this.writeUnsignedInt(c), this.writeUnsignedInt(e), this.writeUnsignedInt(f));
      };
      l.prototype.writeFloat = function(a) {
        var c = this._position;
        this._ensureCapacity(c + 4);
        this._requestViews(4);
        if (this._littleEndian === l._nativeLittleEndian && 0 === (c & 3) && this._f32) {
          this._f32[c >> 2] = a;
        } else {
          var e = this._u8;
          k.IntegerUtilities.f32[0] = a;
          a = k.IntegerUtilities.u8;
          this._littleEndian ? (e[c + 0] = a[0], e[c + 1] = a[1], e[c + 2] = a[2], e[c + 3] = a[3]) : (e[c + 0] = a[3], e[c + 1] = a[2], e[c + 2] = a[1], e[c + 3] = a[0]);
        }
        this._position = c += 4;
        c > this._length && (this._length = c);
      };
      l.prototype.write6Floats = function(a, c, e, f, d, q) {
        var h = this._position;
        this._ensureCapacity(h + 24);
        this._requestViews(4);
        this._littleEndian === l._nativeLittleEndian && 0 === (h & 3) && this._f32 ? (this._f32[(h >> 2) + 0] = a, this._f32[(h >> 2) + 1] = c, this._f32[(h >> 2) + 2] = e, this._f32[(h >> 2) + 3] = f, this._f32[(h >> 2) + 4] = d, this._f32[(h >> 2) + 5] = q, this._position = h += 24, h > this._length && (this._length = h)) : (this.writeFloat(a), this.writeFloat(c), this.writeFloat(e), this.writeFloat(f), this.writeFloat(d), this.writeFloat(q));
      };
      l.prototype.writeDouble = function(a) {
        var c = this._position;
        this._ensureCapacity(c + 8);
        var e = this._u8;
        k.IntegerUtilities.f64[0] = a;
        a = k.IntegerUtilities.u8;
        this._littleEndian ? (e[c + 0] = a[0], e[c + 1] = a[1], e[c + 2] = a[2], e[c + 3] = a[3], e[c + 4] = a[4], e[c + 5] = a[5], e[c + 6] = a[6], e[c + 7] = a[7]) : (e[c + 0] = a[7], e[c + 1] = a[6], e[c + 2] = a[5], e[c + 3] = a[4], e[c + 4] = a[3], e[c + 5] = a[2], e[c + 6] = a[1], e[c + 7] = a[0]);
        this._position = c += 8;
        c > this._length && (this._length = c);
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
        var c = this._position;
        c + a > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        this._position += a;
        return n(new Int8Array(this._buffer, c, a));
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
        return n(new Int8Array(this._buffer, 0, this._length));
      };
      l.prototype.toBlob = function(a) {
        return new Blob([new Int8Array(this._buffer, this._position, this._length)], {type:a});
      };
      l.prototype.writeMultiByte = function(a, c) {
        b("packageInternal flash.utils.ObjectOutput::writeMultiByte");
      };
      l.prototype.readMultiByte = function(a, c) {
        b("packageInternal flash.utils.ObjectInput::readMultiByte");
      };
      l.prototype.getValue = function(a) {
        a |= 0;
        return a >= this._length ? void 0 : this._u8[a];
      };
      l.prototype.setValue = function(a, c) {
        a |= 0;
        var e = a + 1;
        this._ensureCapacity(e);
        this._u8[a] = c;
        e > this._length && (this._length = e);
      };
      l.prototype.readFixed = function() {
        return this.readInt() / 65536;
      };
      l.prototype.readFixed8 = function() {
        return this.readShort() / 256;
      };
      l.prototype.readFloat16 = function() {
        var a = this.readUnsignedShort(), c = a >> 15 ? -1 : 1, e = (a & 31744) >> 10, a = a & 1023;
        return e ? 31 === e ? a ? NaN : Infinity * c : c * Math.pow(2, e - 15) * (1 + a / 1024) : a / 1024 * Math.pow(2, -14) * c;
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
        for (var c = this._bitBuffer, e = this._bitLength;a > e;) {
          c = c << 8 | this.readUnsignedByte(), e += 8;
        }
        e -= a;
        a = c >>> e & p[a];
        this._bitBuffer = c;
        this._bitLength = e;
        return a;
      };
      l.prototype.readFixedBits = function(a) {
        return this.readBits(a) / 65536;
      };
      l.prototype.readString = function(a) {
        var c = this._position;
        if (a) {
          c + a > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError), this._position += a;
        } else {
          a = 0;
          for (var e = c;e < this._length && this._u8[e];e++) {
            a++;
          }
          this._position += a + 1;
        }
        return n(new Int8Array(this._buffer, c, a));
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
        var c;
        switch(a) {
          case "zlib":
            c = new r.Deflate(!0);
            break;
          case "deflate":
            c = new r.Deflate(!1);
            break;
          default:
            return;
        }
        var e = new l;
        c.onData = e.writeRawBytes.bind(e);
        c.push(this._u8.subarray(0, this._length));
        c.close();
        this._ensureCapacity(e._u8.length);
        this._u8.set(e._u8);
        this.length = e.length;
        this._position = 0;
      };
      l.prototype.uncompress = function(a) {
        a = 0 === arguments.length ? "zlib" : g(a);
        var c;
        switch(a) {
          case "zlib":
            c = r.Inflate.create(!0);
            break;
          case "deflate":
            c = r.Inflate.create(!1);
            break;
          case "lzma":
            c = new r.LzmaDecoder(!1);
            break;
          default:
            return;
        }
        var e = new l, f;
        c.onData = e.writeRawBytes.bind(e);
        c.onError = function(d) {
          return f = d;
        };
        c.push(this._u8.subarray(0, this._length));
        f && this.sec.throwError("IOError", Errors.CompressedDataError);
        c.close();
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
    r.DataBuffer = m;
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
    return function(b, a, h, p, m, w, t, l, g, c, e) {
      this.commands = b;
      this.commandsPosition = a;
      this.coordinates = h;
      this.morphCoordinates = p;
      this.coordinatesPosition = m;
      this.styles = w;
      this.stylesLength = t;
      this.morphStyles = l;
      this.morphStylesLength = g;
      this.hasFills = c;
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
    function n(a) {
      void 0 === a && (a = !0);
      a && this.clear();
    }
    n.FromPlainObject = function(a) {
      var h = new n(!1);
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
    n.prototype.moveTo = function(a, h) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = 9;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = h;
    };
    n.prototype.lineTo = function(a, h) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = 10;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = h;
    };
    n.prototype.curveTo = function(a, h, p, b) {
      this.ensurePathCapacities(1, 4);
      this.commands[this.commandsPosition++] = 11;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = h;
      this.coordinates[this.coordinatesPosition++] = p;
      this.coordinates[this.coordinatesPosition++] = b;
    };
    n.prototype.cubicCurveTo = function(a, h, p, b, n, t) {
      this.ensurePathCapacities(1, 6);
      this.commands[this.commandsPosition++] = 12;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = h;
      this.coordinates[this.coordinatesPosition++] = p;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = n;
      this.coordinates[this.coordinatesPosition++] = t;
    };
    n.prototype.beginFill = function(a) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 1;
      this.styles.writeUnsignedInt(a);
      this.hasFills = !0;
    };
    n.prototype.writeMorphFill = function(a) {
      this.morphStyles.writeUnsignedInt(a);
    };
    n.prototype.endFill = function() {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 4;
    };
    n.prototype.endLine = function() {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 8;
    };
    n.prototype.lineStyle = function(a, h, p, b, n, t, l) {
      this.ensurePathCapacities(2, 0);
      this.commands[this.commandsPosition++] = 5;
      this.coordinates[this.coordinatesPosition++] = a;
      a = this.styles;
      a.writeUnsignedInt(h);
      a.writeBoolean(p);
      a.writeUnsignedByte(b);
      a.writeUnsignedByte(n);
      a.writeUnsignedByte(t);
      a.writeUnsignedByte(l);
      this.hasLines = !0;
    };
    n.prototype.writeMorphLineStyle = function(a, h) {
      this.morphCoordinates[this.coordinatesPosition - 1] = a;
      this.morphStyles.writeUnsignedInt(h);
    };
    n.prototype.beginBitmap = function(a, h, p, b, n) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = a;
      a = this.styles;
      a.writeUnsignedInt(h);
      this._writeStyleMatrix(p, !1);
      a.writeBoolean(b);
      a.writeBoolean(n);
      this.hasFills = !0;
    };
    n.prototype.writeMorphBitmap = function(a) {
      this._writeStyleMatrix(a, !0);
    };
    n.prototype.beginGradient = function(a, h, p, b, n, t, l, g) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = a;
      a = this.styles;
      a.writeUnsignedByte(b);
      a.writeShort(g);
      this._writeStyleMatrix(n, !1);
      b = h.length;
      a.writeByte(b);
      for (n = 0;n < b;n++) {
        a.writeUnsignedByte(p[n]), a.writeUnsignedInt(h[n]);
      }
      a.writeUnsignedByte(t);
      a.writeUnsignedByte(l);
      this.hasFills = !0;
    };
    n.prototype.writeMorphGradient = function(a, h, p) {
      this._writeStyleMatrix(p, !0);
      p = this.morphStyles;
      for (var b = 0;b < a.length;b++) {
        p.writeUnsignedByte(h[b]), p.writeUnsignedInt(a[b]);
      }
    };
    n.prototype.writeCommandAndCoordinates = function(a, h, p) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = h;
      this.coordinates[this.coordinatesPosition++] = p;
    };
    n.prototype.writeCoordinates = function(a, h) {
      this.ensurePathCapacities(0, 2);
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = h;
    };
    n.prototype.writeMorphCoordinates = function(a, h) {
      this.morphCoordinates = g(this.morphCoordinates, this.coordinatesPosition);
      this.morphCoordinates[this.coordinatesPosition - 2] = a;
      this.morphCoordinates[this.coordinatesPosition - 1] = h;
    };
    n.prototype.clear = function() {
      this.commandsPosition = this.coordinatesPosition = 0;
      this.commands = new Uint8Array(32);
      this.coordinates = new Int32Array(128);
      this.styles = new r(16);
      this.styles.endian = "auto";
      this.hasFills = this.hasLines = !1;
    };
    n.prototype.isEmpty = function() {
      return 0 === this.commandsPosition;
    };
    n.prototype.clone = function() {
      var a = new n(!1);
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
    n.prototype.toPlainObject = function() {
      return new b(this.commands, this.commandsPosition, this.coordinates, this.morphCoordinates, this.coordinatesPosition, this.styles.buffer, this.styles.length, this.morphStyles && this.morphStyles.buffer, this.morphStyles ? this.morphStyles.length : 0, this.hasFills, this.hasLines);
    };
    Object.defineProperty(n.prototype, "buffers", {get:function() {
      var a = [this.commands.buffer, this.coordinates.buffer, this.styles.buffer];
      this.morphCoordinates && a.push(this.morphCoordinates.buffer);
      this.morphStyles && a.push(this.morphStyles.buffer);
      return a;
    }, enumerable:!0, configurable:!0});
    n.prototype._writeStyleMatrix = function(a, h) {
      (h ? this.morphStyles : this.styles).write6Floats(a.a, a.b, a.c, a.d, a.tx, a.ty);
    };
    n.prototype.ensurePathCapacities = function(a, h) {
      this.commands = g(this.commands, this.commandsPosition + a);
      this.coordinates = g(this.coordinates, this.coordinatesPosition + h);
    };
    return n;
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
    function b(b, n, a, h) {
      this.url = b;
      this.method = n;
      this.mimeType = a;
      this.data = h;
    }
    b.prototype.readAll = function(b, n) {
      var a = this.url, h = this.xhr = new XMLHttpRequest({mozSystem:!0});
      h.open(this.method || "GET", this.url, !0);
      h.responseType = "arraybuffer";
      b && (h.onprogress = function(a) {
        b(h.response, a.loaded, a.total);
      });
      h.onreadystatechange = function(p) {
        4 === h.readyState && (200 !== h.status && 0 !== h.status || null === h.response ? (r("Path: " + a + " not found."), n(null, h.statusText)) : n(h.response));
      };
      this.mimeType && h.setRequestHeader("Content-Type", this.mimeType);
      h.send(this.data || null);
    };
    b.prototype.readChunked = function(b, n, a, h, p, m) {
      if (0 >= b) {
        this.readAsync(n, a, h, p, m);
      } else {
        var g = 0, t = new Uint8Array(b), l = 0, u;
        this.readAsync(function(a, e) {
          u = e.total;
          for (var f = a.length, d = 0;g + f >= b;) {
            var q = b - g;
            t.set(a.subarray(d, d + q), g);
            d += q;
            f -= q;
            l += b;
            n(t, {loaded:l, total:u});
            g = 0;
          }
          t.set(a.subarray(d), g);
          g += f;
        }, a, h, function() {
          0 < g && (l += g, n(t.subarray(0, g), {loaded:l, total:u}), g = 0);
          p && p();
        }, m);
      }
    };
    b.prototype.readAsync = function(b, n, a, h, p) {
      var m = this.xhr = new XMLHttpRequest({mozSystem:!0}), g = this.url, t = 0, l = 0;
      m.open(this.method || "GET", g, !0);
      m.responseType = "moz-chunked-arraybuffer";
      var u = "moz-chunked-arraybuffer" !== m.responseType;
      u && (m.responseType = "arraybuffer");
      m.onprogress = function(a) {
        u || (t = a.loaded, l = a.total, b(new Uint8Array(m.response), {loaded:t, total:l}));
      };
      m.onreadystatechange = function(a) {
        2 === m.readyState && p && p(g, m.status, m.getAllResponseHeaders());
        4 === m.readyState && (200 !== m.status && 0 !== m.status || null === m.response && (0 === l || t !== l) ? n(m.statusText) : (u && (a = m.response, b(new Uint8Array(a), {loaded:0, total:a.byteLength})), h && h()));
      };
      this.mimeType && m.setRequestHeader("Content-Type", this.mimeType);
      m.send(this.data || null);
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
        b.toRGBA = function(a, h, p, b) {
          void 0 === b && (b = 1);
          return "rgba(" + a + "," + h + "," + p + "," + b + ")";
        };
        return b;
      }();
      g.UI = b;
      var k = function() {
        function n() {
        }
        n.prototype.tabToolbar = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(37, 44, 51, a);
        };
        n.prototype.toolbars = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(52, 60, 69, a);
        };
        n.prototype.selectionBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(29, 79, 115, a);
        };
        n.prototype.selectionText = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(245, 247, 250, a);
        };
        n.prototype.splitters = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(0, 0, 0, a);
        };
        n.prototype.bodyBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(17, 19, 21, a);
        };
        n.prototype.sidebarBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(24, 29, 32, a);
        };
        n.prototype.attentionBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(161, 134, 80, a);
        };
        n.prototype.bodyText = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(143, 161, 178, a);
        };
        n.prototype.foregroundTextGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(182, 186, 191, a);
        };
        n.prototype.contentTextHighContrast = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(169, 186, 203, a);
        };
        n.prototype.contentTextGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(143, 161, 178, a);
        };
        n.prototype.contentTextDarkGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(95, 115, 135, a);
        };
        n.prototype.blueHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(70, 175, 227, a);
        };
        n.prototype.purpleHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(107, 122, 187, a);
        };
        n.prototype.pinkHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(223, 128, 255, a);
        };
        n.prototype.redHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(235, 83, 104, a);
        };
        n.prototype.orangeHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(217, 102, 41, a);
        };
        n.prototype.lightOrangeHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(217, 155, 40, a);
        };
        n.prototype.greenHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(112, 191, 83, a);
        };
        n.prototype.blueGreyHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(94, 136, 176, a);
        };
        return n;
      }();
      g.UIThemeDark = k;
      k = function() {
        function n() {
        }
        n.prototype.tabToolbar = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(235, 236, 237, a);
        };
        n.prototype.toolbars = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(240, 241, 242, a);
        };
        n.prototype.selectionBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(76, 158, 217, a);
        };
        n.prototype.selectionText = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(245, 247, 250, a);
        };
        n.prototype.splitters = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(170, 170, 170, a);
        };
        n.prototype.bodyBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(252, 252, 252, a);
        };
        n.prototype.sidebarBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(247, 247, 247, a);
        };
        n.prototype.attentionBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(161, 134, 80, a);
        };
        n.prototype.bodyText = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(24, 25, 26, a);
        };
        n.prototype.foregroundTextGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(88, 89, 89, a);
        };
        n.prototype.contentTextHighContrast = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(41, 46, 51, a);
        };
        n.prototype.contentTextGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(143, 161, 178, a);
        };
        n.prototype.contentTextDarkGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(102, 115, 128, a);
        };
        n.prototype.blueHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(0, 136, 204, a);
        };
        n.prototype.purpleHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(91, 95, 255, a);
        };
        n.prototype.pinkHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(184, 46, 229, a);
        };
        n.prototype.redHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(237, 38, 85, a);
        };
        n.prototype.orangeHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(241, 60, 0, a);
        };
        n.prototype.lightOrangeHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(217, 126, 0, a);
        };
        n.prototype.greenHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(44, 187, 15, a);
        };
        n.prototype.blueGreyHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(95, 136, 176, a);
        };
        return n;
      }();
      g.UIThemeLight = k;
    })(k.Theme || (k.Theme = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    (function(g) {
      var b = function() {
        function b(n, a) {
          this._buffers = n || [];
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
        function n(a, h, b, m, n, t) {
          this.parent = a;
          this.kind = h;
          this.startData = b;
          this.endData = m;
          this.startTime = n;
          this.endTime = t;
          this.maxDepth = 0;
        }
        Object.defineProperty(n.prototype, "totalTime", {get:function() {
          return this.endTime - this.startTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(n.prototype, "selfTime", {get:function() {
          var a = this.totalTime;
          if (this.children) {
            for (var h = 0, b = this.children.length;h < b;h++) {
              var m = this.children[h], a = a - (m.endTime - m.startTime)
            }
          }
          return a;
        }, enumerable:!0, configurable:!0});
        n.prototype.getChildIndex = function(a) {
          for (var h = this.children, b = 0;b < h.length;b++) {
            if (h[b].endTime > a) {
              return b;
            }
          }
          return 0;
        };
        n.prototype.getChildRange = function(a, h) {
          if (this.children && a <= this.endTime && h >= this.startTime && h >= a) {
            var b = this._getNearestChild(a), m = this._getNearestChildReverse(h);
            if (b <= m) {
              return a = this.children[b].startTime, h = this.children[m].endTime, {startIndex:b, endIndex:m, startTime:a, endTime:h, totalTime:h - a};
            }
          }
          return null;
        };
        n.prototype._getNearestChild = function(a) {
          var h = this.children;
          if (h && h.length) {
            if (a <= h[0].endTime) {
              return 0;
            }
            for (var b, m = 0, n = h.length - 1;n > m;) {
              b = (m + n) / 2 | 0;
              var t = h[b];
              if (a >= t.startTime && a <= t.endTime) {
                return b;
              }
              a > t.endTime ? m = b + 1 : n = b;
            }
            return Math.ceil((m + n) / 2);
          }
          return 0;
        };
        n.prototype._getNearestChildReverse = function(a) {
          var h = this.children;
          if (h && h.length) {
            var b = h.length - 1;
            if (a >= h[b].startTime) {
              return b;
            }
            for (var m, n = 0;b > n;) {
              m = Math.ceil((n + b) / 2);
              var t = h[m];
              if (a >= t.startTime && a <= t.endTime) {
                return m;
              }
              a > t.endTime ? n = m : b = m - 1;
            }
            return (n + b) / 2 | 0;
          }
          return 0;
        };
        n.prototype.query = function(a) {
          if (a < this.startTime || a > this.endTime) {
            return null;
          }
          var h = this.children;
          if (h && 0 < h.length) {
            for (var b, m = 0, n = h.length - 1;n > m;) {
              var t = (m + n) / 2 | 0;
              b = h[t];
              if (a >= b.startTime && a <= b.endTime) {
                return b.query(a);
              }
              a > b.endTime ? m = t + 1 : n = t;
            }
            b = h[n];
            if (a >= b.startTime && a <= b.endTime) {
              return b.query(a);
            }
          }
          return this;
        };
        n.prototype.queryNext = function(a) {
          for (var h = this;a > h.endTime;) {
            if (h.parent) {
              h = h.parent;
            } else {
              break;
            }
          }
          return h.query(a);
        };
        n.prototype.getDepth = function() {
          for (var a = 0, h = this;h;) {
            a++, h = h.parent;
          }
          return a;
        };
        n.prototype.calculateStatistics = function() {
          function a(p) {
            if (p.kind) {
              var m = h[p.kind.id] || (h[p.kind.id] = new b(p.kind));
              m.count++;
              m.selfTime += p.selfTime;
              m.totalTime += p.totalTime;
            }
            p.children && p.children.forEach(a);
          }
          var h = this.statistics = [];
          a(this);
        };
        n.prototype.trace = function(a) {
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
        return n;
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
        function b(n, a) {
          void 0 === n && (n = "");
          this.name = n || "";
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
        b.prototype._getKindId = function(n) {
          var a = b.MAX_KINDID;
          if (void 0 === this._kindNameMap[n]) {
            if (a = this._kinds.length, a < b.MAX_KINDID) {
              var h = {id:a, name:n, visible:!0};
              this._kinds.push(h);
              this._kindNameMap[n] = h;
            } else {
              a = b.MAX_KINDID;
            }
          } else {
            a = this._kindNameMap[n].id;
          }
          return a;
        };
        b.prototype._getMark = function(n, a, h) {
          var p = b.MAX_DATAID;
          k.isNullOrUndefined(h) || a === b.MAX_KINDID || (p = this._data.length, p < b.MAX_DATAID ? this._data.push(h) : p = b.MAX_DATAID);
          return n | p << 16 | a;
        };
        b.prototype.enter = function(n, a, h) {
          h = (k.isNullOrUndefined(h) ? performance.now() : h) - this._startTime;
          this._marks || this._initialize();
          this._depth++;
          n = this._getKindId(n);
          this._marks.write(this._getMark(b.ENTER, n, a));
          this._times.write(h);
          this._stack.push(n);
        };
        b.prototype.leave = function(n, a, h) {
          h = (k.isNullOrUndefined(h) ? performance.now() : h) - this._startTime;
          var p = this._stack.pop();
          n && (p = this._getKindId(n));
          this._marks.write(this._getMark(b.LEAVE, p, a));
          this._times.write(h);
          this._depth--;
        };
        b.prototype.count = function(b, a, h) {
        };
        b.prototype.createSnapshot = function() {
          var n;
          void 0 === n && (n = Number.MAX_VALUE);
          if (!this._marks) {
            return null;
          }
          var a = this._times, h = this._kinds, p = this._data, m = new g.TimelineBufferSnapshot(this.name), w = [m], t = 0;
          this._marks || this._initialize();
          this._marks.forEachInReverse(function(l, m) {
            var c = p[l >>> 16 & b.MAX_DATAID], e = h[l & b.MAX_KINDID];
            if (k.isNullOrUndefined(e) || e.visible) {
              var f = l & 2147483648, d = a.get(m), q = w.length;
              if (f === b.LEAVE) {
                if (1 === q && (t++, t > n)) {
                  return !0;
                }
                w.push(new g.TimelineFrame(w[q - 1], e, null, c, NaN, d));
              } else {
                if (f === b.ENTER) {
                  if (e = w.pop(), f = w[w.length - 1]) {
                    for (f.children ? f.children.unshift(e) : f.children = [e], f = w.length, e.depth = f, e.startData = c, e.startTime = d;e;) {
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
          m.children && m.children.length && (m.startTime = m.children[0].startTime, m.endTime = m.children[m.children.length - 1].endTime);
          return m;
        };
        b.prototype.reset = function(b) {
          this._startTime = k.isNullOrUndefined(b) ? performance.now() : b;
          this._marks ? (this._depth = 0, this._data = [], this._marks.reset(), this._times.reset()) : this._initialize();
        };
        b.FromFirefoxProfile = function(n, a) {
          for (var h = n.profile.threads[0].samples, p = new b(a, h[0].time), m = [], g, t = 0;t < h.length;t++) {
            g = h[t];
            var l = g.time, k = g.frames, c = 0;
            for (g = Math.min(k.length, m.length);c < g && k[c].location === m[c].location;) {
              c++;
            }
            for (var e = m.length - c, f = 0;f < e;f++) {
              g = m.pop(), p.leave(g.location, null, l);
            }
            for (;c < k.length;) {
              g = k[c++], p.enter(g.location, null, l);
            }
            m = k;
          }
          for (;g = m.pop();) {
            p.leave(g.location, null, l);
          }
          return p;
        };
        b.FromChromeProfile = function(n, a) {
          var h = n.timestamps, p = n.samples, m = new b(a, h[0] / 1E3), g = [], t = {}, l;
          b._resolveIds(n.head, t);
          for (var k = 0;k < h.length;k++) {
            var c = h[k] / 1E3, e = [];
            for (l = t[p[k]];l;) {
              e.unshift(l), l = l.parent;
            }
            var f = 0;
            for (l = Math.min(e.length, g.length);f < l && e[f] === g[f];) {
              f++;
            }
            for (var d = g.length - f, q = 0;q < d;q++) {
              l = g.pop(), m.leave(l.functionName, null, c);
            }
            for (;f < e.length;) {
              l = e[f++], m.enter(l.functionName, null, c);
            }
            g = e;
          }
          for (;l = g.pop();) {
            m.leave(l.functionName, null, c);
          }
          return m;
        };
        b._resolveIds = function(n, a) {
          a[n.id] = n;
          if (n.children) {
            for (var h = 0;h < n.children.length;h++) {
              n.children[h].parent = n, b._resolveIds(n.children[h], a);
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
        function b(n, a) {
          void 0 === a && (a = 0);
          this._container = n;
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
            this._activeProfile.forEachSnapshot(function(p, m) {
              b._headers[m].initialize(a, h);
              b._charts[m].initialize(a, h);
            });
          }
        };
        b.prototype._onResize = function() {
          if (this._activeProfile) {
            var b = this, a = this._container.offsetWidth;
            this._overviewHeader.setSize(a);
            this._overview.setSize(a);
            this._activeProfile.forEachSnapshot(function(h, p) {
              b._headers[p].setSize(a);
              b._charts[p].setSize(a);
            });
          }
        };
        b.prototype._updateViews = function() {
          if (this._activeProfile) {
            var b = this, a = this._activeProfile.windowStart, h = this._activeProfile.windowEnd;
            this._overviewHeader.setWindow(a, h);
            this._overview.setWindow(a, h);
            this._activeProfile.forEachSnapshot(function(p, m) {
              b._headers[m].setWindow(a, h);
              b._charts[m].setWindow(a, h);
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
        b.prototype.showTooltip = function(b, a, h, p) {
          this.removeTooltipContent();
          this._tooltip.appendChild(this.createTooltipContent(b, a));
          this._tooltip.style.display = "block";
          var m = this._tooltip.firstChild;
          a = m.clientWidth;
          m = m.clientHeight;
          h += h + a >= b.canvas.clientWidth - 50 ? -(a + 20) : 25;
          p += b.canvas.offsetTop - m / 2;
          this._tooltip.style.left = h + "px";
          this._tooltip.style.top = p + "px";
        };
        b.prototype.hideTooltip = function() {
          this._tooltip.style.display = "none";
        };
        b.prototype.createTooltipContent = function(b, a) {
          var h = Math.round(1E5 * a.totalTime) / 1E5, p = Math.round(1E5 * a.selfTime) / 1E5, m = Math.round(1E4 * a.selfTime / a.totalTime) / 100, g = document.createElement("div"), t = document.createElement("h1");
          t.textContent = a.kind.name;
          g.appendChild(t);
          t = document.createElement("p");
          t.textContent = "Total: " + h + " ms";
          g.appendChild(t);
          h = document.createElement("p");
          h.textContent = "Self: " + p + " ms (" + m + "%)";
          g.appendChild(h);
          if (p = b.getStatistics(a.kind)) {
            m = document.createElement("p"), m.textContent = "Count: " + p.count, g.appendChild(m), m = document.createElement("p"), m.textContent = "All Total: " + Math.round(1E5 * p.totalTime) / 1E5 + " ms", g.appendChild(m), m = document.createElement("p"), m.textContent = "All Self: " + Math.round(1E5 * p.selfTime) / 1E5 + " ms", g.appendChild(m);
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
              for (var p in a) {
                h = document.createElement("p"), h.textContent = p + ": " + a[p], b.appendChild(h);
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
      var n = function() {
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
          var m = {x:a.x - b.start.x, y:a.y - b.start.y};
          b.current = a;
          b.delta = m;
          b.hasMoved = !0;
          this._target.onDrag(b.start.x, b.start.y, a.x, a.y, m.x, m.y);
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
            var p = this._getTargetMousePos(a, a.target);
            a = b("undefined" !== typeof a.deltaY ? a.deltaY / 16 : -a.wheelDelta / 40, -1, 1);
            this._target.onMouseWheel(p.x, p.y, Math.pow(1.2, a) - 1);
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
          var m = b.getBoundingClientRect();
          return {x:a.clientX - m.left, y:a.clientY - m.top};
        };
        a.HOVER_TIMEOUT = 500;
        a._cursor = r.DEFAULT;
        return a;
      }();
      g.MouseController = n;
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
        function b(n) {
          this._controller = n;
          this._initialized = !1;
          this._canvas = document.createElement("canvas");
          this._context = this._canvas.getContext("2d");
          this._mouseController = new g.MouseController(this, this._canvas);
          n = n.container;
          n.appendChild(this._canvas);
          n = n.getBoundingClientRect();
          this.setSize(n.width);
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
          var p = this._windowEnd, m = p - a;
          h = Math.max((b.MIN_WINDOW_LEN - m) / m, h);
          this._controller.setWindow(a + (a - g) * h, p + (p - g) * h);
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
        b.prototype.onDrag = function(b, a, h, p, m, g) {
        };
        b.prototype.onDragEnd = function(b, a, h, p, m, g) {
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
      var b = k.StringUtilities.trimMiddle, r = function(n) {
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
          var m = a.getChildRange(this._windowStart, this._windowEnd);
          if (m) {
            for (var g = m.startIndex;g <= m.endIndex;g++) {
              var t = a.children[g];
              this._drawFrame(t, b) && this._drawChildren(t, b + 1);
            }
          }
        };
        a.prototype._drawFrame = function(a, b) {
          var m = this._context, g = this._toPixels(a.startTime), t = this._toPixels(a.endTime), l = t - g;
          if (l <= this._minFrameWidthInPixels) {
            return m.fillStyle = this._controller.theme.tabToolbar(1), m.fillRect(g, 12.5 * b, this._minFrameWidthInPixels, 12 + 12.5 * (a.maxDepth - a.depth)), !1;
          }
          0 > g && (t = l + g, g = 0);
          var t = t - g, n = this._kindStyle[a.kind.id];
          n || (n = k.ColorStyle.randomStyle(), n = this._kindStyle[a.kind.id] = {bgColor:n, textColor:k.ColorStyle.contrastStyle(n)});
          m.save();
          m.fillStyle = n.bgColor;
          m.fillRect(g, 12.5 * b, t, 12);
          12 < l && (l = a.kind.name) && l.length && (l = this._prepareText(m, l, t - 4), l.length && (m.fillStyle = n.textColor, m.textBaseline = "bottom", m.fillText(l, g + 2, 12.5 * (b + 1) - 1)));
          m.restore();
          return !0;
        };
        a.prototype._prepareText = function(a, p, m) {
          var g = this._measureWidth(a, p);
          if (m > g) {
            return p;
          }
          for (var g = 3, t = p.length;g < t;) {
            var l = g + t >> 1;
            this._measureWidth(a, b(p, l)) < m ? g = l + 1 : t = l;
          }
          p = b(p, t - 1);
          g = this._measureWidth(a, p);
          return g <= m ? p : "";
        };
        a.prototype._measureWidth = function(a, b) {
          var m = this._textWidth[b];
          m || (m = a.measureText(b).width, this._textWidth[b] = m);
          return m;
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
          var m = 1 + b / 12.5 | 0, g = this._snapshot.query(this._toTime(a));
          if (g && g.depth >= m) {
            for (;g && g.depth > m;) {
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
        a.prototype.onDrag = function(a, b, m, g, t, l) {
          if (a = this._dragInfo) {
            t = this._toTimeRelative(-t), this._controller.setWindow(a.windowStartInitial + t, a.windowEndInitial + t);
          }
        };
        a.prototype.onDragEnd = function(a, b, m, k, t, l) {
          this._dragInfo = null;
          this._mouseController.updateCursor(g.MouseCursor.DEFAULT);
        };
        a.prototype.onClick = function(a, b) {
          this._dragInfo = null;
          this._mouseController.updateCursor(g.MouseCursor.DEFAULT);
        };
        a.prototype.onHoverStart = function(a, b) {
          var m = this._getFrameAtPosition(a, b);
          m && (this._hoveredFrame = m, this._controller.showTooltip(this, m, a, b));
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
          var a = this._context, b = window.devicePixelRatio, m = this._width, g = this._height;
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.bodyBackground(1);
          a.fillRect(0, 0, m, g);
          a.restore();
          this._initialized && (this._overviewCanvasDirty && (this._drawChart(), this._overviewCanvasDirty = !1), a.drawImage(this._overviewCanvas, 0, 0), this._drawSelection());
        };
        a.prototype._drawSelection = function() {
          var a = this._context, b = this._height, m = window.devicePixelRatio, g = this._selection ? this._selection.left : this._toPixels(this._windowStart), t = this._selection ? this._selection.right : this._toPixels(this._windowEnd), l = this._controller.theme;
          a.save();
          a.scale(m, m);
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
          var a = window.devicePixelRatio, b = this._height, m = this._controller.activeProfile, g = 4 * this._width, t = m.totalTime / g, l = this._overviewContext, k = this._controller.theme.blueHighlight(1);
          l.save();
          l.translate(0, a * b);
          var c = -a * b / (m.maxDepth - 1);
          l.scale(a / 4, c);
          l.clearRect(0, 0, g, m.maxDepth - 1);
          1 == this._mode && l.scale(1, 1 / m.snapshotCount);
          for (var e = 0, f = m.snapshotCount;e < f;e++) {
            var d = m.getSnapshotAt(e);
            if (d) {
              var q = null, D = 0;
              l.beginPath();
              l.moveTo(0, 0);
              for (var J = 0;J < g;J++) {
                D = m.startTime + J * t, D = (q = q ? q.queryNext(D) : d.query(D)) ? q.getDepth() - 1 : 0, l.lineTo(J, D);
              }
              l.lineTo(J, 0);
              l.fillStyle = k;
              l.fill();
              1 == this._mode && l.translate(0, -b * a / c);
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
            var m = this._toPixels(this._windowStart), k = this._toPixels(this._windowEnd), t = 2 + g.FlameChartBase.DRAGHANDLE_WIDTH / 2, l = a >= m - t && a <= m + t, n = a >= k - t && a <= k + t;
            if (l && n) {
              return 4;
            }
            if (l) {
              return 2;
            }
            if (n) {
              return 3;
            }
            if (!this._windowEqRange() && a > m + t && a < k - t) {
              return 1;
            }
          }
          return 0;
        };
        a.prototype.onMouseDown = function(a, b) {
          var m = this._getDragTargetUnderCursor(a, b);
          0 === m ? (this._selection = {left:a, right:a}, this.draw()) : (1 === m && this._mouseController.updateCursor(g.MouseCursor.GRABBING), this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:m});
        };
        a.prototype.onMouseMove = function(a, b) {
          var m = g.MouseCursor.DEFAULT, k = this._getDragTargetUnderCursor(a, b);
          0 === k || this._selection || (m = 1 === k ? g.MouseCursor.GRAB : g.MouseCursor.EW_RESIZE);
          this._mouseController.updateCursor(m);
        };
        a.prototype.onMouseOver = function(a, b) {
          this.onMouseMove(a, b);
        };
        a.prototype.onMouseOut = function() {
          this._mouseController.updateCursor(g.MouseCursor.DEFAULT);
        };
        a.prototype.onDrag = function(a, p, m, k, t, l) {
          if (this._selection) {
            this._selection = {left:a, right:b(m, 0, this._width - 1)}, this.draw();
          } else {
            a = this._dragInfo;
            if (4 === a.target) {
              if (0 !== t) {
                a.target = 0 > t ? 2 : 3;
              } else {
                return;
              }
            }
            p = this._windowStart;
            m = this._windowEnd;
            t = this._toTimeRelative(t);
            switch(a.target) {
              case 1:
                p = a.windowStartInitial + t;
                m = a.windowEndInitial + t;
                break;
              case 2:
                p = b(a.windowStartInitial + t, this._rangeStart, m - g.FlameChartBase.MIN_WINDOW_LEN);
                break;
              case 3:
                m = b(a.windowEndInitial + t, p + g.FlameChartBase.MIN_WINDOW_LEN, this._rangeEnd);
                break;
              default:
                return;
            }
            this._controller.setWindow(p, m);
          }
        };
        a.prototype.onDragEnd = function(a, b, m, g, t, l) {
          this._selection && (this._selection = null, this._controller.setWindow(this._toTime(a), this._toTime(m)));
          this._dragInfo = null;
          this.onMouseMove(m, g);
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
          var a = this._context, b = window.devicePixelRatio, m = this._width, g = this._height;
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.tabToolbar(1);
          a.fillRect(0, 0, m, g);
          this._initialized && (0 == this._type ? (b = this._toPixels(this._windowStart), m = this._toPixels(this._windowEnd), a.fillStyle = this._controller.theme.bodyBackground(1), a.fillRect(b, 0, m - b, g), this._drawLabels(this._rangeStart, this._rangeEnd), this._drawDragHandle(b), this._drawDragHandle(m)) : this._drawLabels(this._windowStart, this._windowEnd));
          a.restore();
        };
        a.prototype._drawLabels = function(b, p) {
          var m = this._context, g = this._calculateTickInterval(b, p), t = Math.ceil(b / g) * g, l = 500 <= g, k = l ? 1E3 : 1, c = this._decimalPlaces(g / k), l = l ? "s" : "ms", e = this._toPixels(t), f = this._height / 2, d = this._controller.theme;
          m.lineWidth = 1;
          m.strokeStyle = d.contentTextDarkGrey(.5);
          m.fillStyle = d.contentTextDarkGrey(1);
          m.textAlign = "right";
          m.textBaseline = "middle";
          m.font = "11px sans-serif";
          for (d = this._width + a.TICK_MAX_WIDTH;e < d;) {
            m.fillText((t / k).toFixed(c) + " " + l, e - 7, f + 1), m.beginPath(), m.moveTo(e, 0), m.lineTo(e, this._height + 1), m.closePath(), m.stroke(), t += g, e = this._toPixels(t);
          }
        };
        a.prototype._calculateTickInterval = function(b, p) {
          var g = (p - b) / (this._width / a.TICK_MAX_WIDTH), k = Math.pow(10, Math.floor(Math.log(g) / Math.LN10)), g = g / k;
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
              var m = this._toPixels(this._windowStart), k = this._toPixels(this._windowEnd), t = 2 + g.FlameChartBase.DRAGHANDLE_WIDTH / 2, m = a >= m - t && a <= m + t, k = a >= k - t && a <= k + t;
              if (m && k) {
                return 4;
              }
              if (m) {
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
          var m = this._getDragTargetUnderCursor(a, b);
          1 === m && this._mouseController.updateCursor(g.MouseCursor.GRABBING);
          this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:m};
        };
        a.prototype.onMouseMove = function(a, b) {
          var m = g.MouseCursor.DEFAULT, k = this._getDragTargetUnderCursor(a, b);
          0 !== k && (1 !== k ? m = g.MouseCursor.EW_RESIZE : 1 !== k || this._windowEqRange() || (m = g.MouseCursor.GRAB));
          this._mouseController.updateCursor(m);
        };
        a.prototype.onMouseOver = function(a, b) {
          this.onMouseMove(a, b);
        };
        a.prototype.onMouseOut = function() {
          this._mouseController.updateCursor(g.MouseCursor.DEFAULT);
        };
        a.prototype.onDrag = function(a, p, m, k, t, l) {
          a = this._dragInfo;
          if (4 === a.target) {
            if (0 !== t) {
              a.target = 0 > t ? 2 : 3;
            } else {
              return;
            }
          }
          p = this._windowStart;
          m = this._windowEnd;
          t = this._toTimeRelative(t);
          switch(a.target) {
            case 1:
              m = 0 === this._type ? 1 : -1;
              p = a.windowStartInitial + m * t;
              m = a.windowEndInitial + m * t;
              break;
            case 2:
              p = b(a.windowStartInitial + t, this._rangeStart, m - g.FlameChartBase.MIN_WINDOW_LEN);
              break;
            case 3:
              m = b(a.windowEndInitial + t, p + g.FlameChartBase.MIN_WINDOW_LEN, this._rangeEnd);
              break;
            default:
              return;
          }
          this._controller.setWindow(p, m);
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
          a.prototype.loadPage = function(a, b, m) {
            this._threads = [];
            this._pageLoadCallback = b;
            this._pageLoadProgressCallback = m;
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
              var g = this, m = 0;
              a = a[0];
              var k = a.length;
              this._threads = Array(k);
              this._progressInfo.pageLoaded = !0;
              this._progressInfo.threadsTotal = k;
              for (var t = 0;t < a.length;t++) {
                var l = a[t], n = [l.dict, l.tree];
                l.corrections && n.push(l.corrections);
                this._progressInfo.threadFilesTotal += n.length;
                this._loadData(n, function(a) {
                  return function(e) {
                    e && (e = new b.Thread(e), e.buffer.name = "Thread " + a, g._threads[a] = e);
                    m++;
                    g._progressInfo.threadsLoaded++;
                    g._onProgress();
                    m === k && g._pageLoadCallback.call(g, null, g._threads);
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
            var k = 0, t = 0, l = a.length, n = [];
            n.length = l;
            for (var c = 0;c < l;c++) {
              var e = this._baseUrl + a[c], f = new XMLHttpRequest, d = /\.tl$/i.test(e) ? "arraybuffer" : "json";
              f.open("GET", e, !0);
              f.responseType = d;
              f.onload = function(d, f) {
                return function(a) {
                  if ("json" === f) {
                    if (a = this.response, "string" === typeof a) {
                      try {
                        a = JSON.parse(a), n[d] = a;
                      } catch (e) {
                        t++;
                      }
                    } else {
                      n[d] = a;
                    }
                  } else {
                    n[d] = this.response;
                  }
                  ++k;
                  g && g(k);
                  k === l && b(n);
                };
              }(c, d);
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
              var m = a * b.ITEM_SIZE, k = 4294967295 * h.getUint32(m + 0) + h.getUint32(m + 4), t = 4294967295 * h.getUint32(m + 8) + h.getUint32(m + 12), l = h.getUint32(m + 16), m = h.getUint32(m + 20), u = 1 === (l & 1), l = l >>> 1, l = this._text[l];
              g.enter(l, null, k / 1E6);
              u && this._walkTree(a + 1);
              g.leave(l, null, t / 1E6);
              a = m;
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
      var n = function() {
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
              case D:
                this.showLineTime = !this.showLineTime;
                break;
              case l:
                h = -1;
                break;
              case n:
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
              case c:
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
              case d:
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
          a.addEventListener("focus", function(d) {
            this.hasFocus = !0;
          }.bind(this), !1);
          a.addEventListener("blur", function(d) {
            this.hasFocus = !1;
          }.bind(this), !1);
          var b = 33, g = 34, k = 36, t = 35, l = 38, n = 40, c = 37, e = 39, f = 65, d = 67, q = 78, D = 84;
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
          for (var l = this.canvas.width, n = this.lineHeight, c = 0;c < a;c++) {
            var e = c * this.lineHeight, f = this.pageIndex + c, d = this.buffer.get(f), q = this.buffer.getFormat(f), D = this.buffer.getRepeat(f), J = 1 < f ? this.buffer.getTime(f) - this.buffer.getTime(0) : 0;
            this.context.fillStyle = f % 2 ? this.lineColor : this.alternateLineColor;
            q && q.backgroundFillStyle && (this.context.fillStyle = q.backgroundFillStyle);
            this.context.fillRect(0, e, l, n);
            this.context.fillStyle = this.selectionTextColor;
            this.context.fillStyle = this.textColor;
            this.selection && f >= this.selection.start && f <= this.selection.end && (this.context.fillStyle = this.selectionColor, this.context.fillRect(0, e, l, n), this.context.fillStyle = this.selectionTextColor);
            this.hasFocus && f === this.lineIndex && (this.context.fillStyle = this.selectionColor, this.context.fillRect(0, e, l, n), this.context.fillStyle = this.selectionTextColor);
            0 < this.columnIndex && (d = d.substring(this.columnIndex));
            e = (c + 1) * this.lineHeight - this.textMarginBottom;
            this.showLineNumbers && this.context.fillText(String(f), b, e);
            this.showLineTime && this.context.fillText(J.toFixed(1).padLeft(" ", 6), g, e);
            1 < D && this.context.fillText(String(D).padLeft(" ", 3), k, e);
            this.context.fillText(d, t, e);
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
      g.Terminal = n;
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
            var h = 1 * (performance.now() - this._lastTime) + 0 * this._lastWeightedTime, g = this._context, m = 2 * this._ratio, k = 30 * this._ratio, t = performance;
            t.memory && (k += 30 * this._ratio);
            var l = (this._canvas.width - k) / (m + 1) | 0, u = this._index++;
            this._index > l && (this._index = 0);
            l = this._canvas.height;
            g.globalAlpha = 1;
            g.fillStyle = "black";
            g.fillRect(k + u * (m + 1), 0, 4 * m, this._canvas.height);
            var c = Math.min(1E3 / 60 / h, 1);
            g.fillStyle = "#00FF00";
            g.globalAlpha = b ? .5 : 1;
            c = l / 2 * c | 0;
            g.fillRect(k + u * (m + 1), l - c, m, c);
            a && (c = Math.min(1E3 / 240 / a, 1), g.fillStyle = "#FF6347", c = l / 2 * c | 0, g.fillRect(k + u * (m + 1), l / 2 - c, m, c));
            0 === u % 16 && (g.globalAlpha = 1, g.fillStyle = "black", g.fillRect(0, 0, k, this._canvas.height), g.fillStyle = "white", g.font = 8 * this._ratio + "px Arial", g.textBaseline = "middle", m = (1E3 / h).toFixed(0), a && (m += " " + a.toFixed(0)), t.memory && (m += " " + (t.memory.usedJSHeapSize / 1024 / 1024).toFixed(2)), g.fillText(m, 2 * this._ratio, this._containerHeight / 2 * this._ratio));
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
    function g(d, f, a) {
      return p && a ? "string" === typeof f ? (d = k.ColorUtilities.cssStyleToRGBA(f), k.ColorUtilities.rgbaToCSSStyle(a.transformRGBA(d))) : f instanceof CanvasGradient && f._template ? f._template.createCanvasGradient(d, a) : f : f;
    }
    var b = k.NumberUtilities.clamp;
    (function(d) {
      d[d.None = 0] = "None";
      d[d.Brief = 1] = "Brief";
      d[d.Verbose = 2] = "Verbose";
    })(r.TraceLevel || (r.TraceLevel = {}));
    var v = k.Metrics.Counter.instance;
    r.frameCounter = new k.Metrics.Counter(!0);
    r.traceLevel = 2;
    r.writer = null;
    r.frameCount = function(d) {
      v.count(d);
      r.frameCounter.count(d);
    };
    r.timelineBuffer = new k.Tools.Profiler.TimelineBuffer("GFX");
    r.enterTimeline = function(d, f) {
    };
    r.leaveTimeline = function(d, f) {
    };
    var n = null, a = null, h = null, p = !0;
    p && "undefined" !== typeof CanvasRenderingContext2D && (n = CanvasGradient.prototype.addColorStop, a = CanvasRenderingContext2D.prototype.createLinearGradient, h = CanvasRenderingContext2D.prototype.createRadialGradient, CanvasRenderingContext2D.prototype.createLinearGradient = function(d, f, a, e) {
      return (new w(d, f, a, e)).createCanvasGradient(this, null);
    }, CanvasRenderingContext2D.prototype.createRadialGradient = function(d, f, a, e, c, b) {
      return (new t(d, f, a, e, c, b)).createCanvasGradient(this, null);
    }, CanvasGradient.prototype.addColorStop = function(d, f) {
      n.call(this, d, f);
      this._template.addColorStop(d, f);
    });
    var m = function() {
      return function(d, f) {
        this.offset = d;
        this.color = f;
      };
    }(), w = function() {
      function d(f, a, e, c) {
        this.x0 = f;
        this.y0 = a;
        this.x1 = e;
        this.y1 = c;
        this.colorStops = [];
      }
      d.prototype.addColorStop = function(d, f) {
        this.colorStops.push(new m(d, f));
      };
      d.prototype.createCanvasGradient = function(d, f) {
        for (var e = a.call(d, this.x0, this.y0, this.x1, this.y1), c = this.colorStops, b = 0;b < c.length;b++) {
          var q = c[b], h = q.offset, q = q.color, q = f ? g(d, q, f) : q;
          n.call(e, h, q);
        }
        e._template = this;
        e._transform = this._transform;
        return e;
      };
      return d;
    }(), t = function() {
      function d(f, a, e, c, b, q) {
        this.x0 = f;
        this.y0 = a;
        this.r0 = e;
        this.x1 = c;
        this.y1 = b;
        this.r1 = q;
        this.colorStops = [];
      }
      d.prototype.addColorStop = function(d, f) {
        this.colorStops.push(new m(d, f));
      };
      d.prototype.createCanvasGradient = function(d, f) {
        for (var a = h.call(d, this.x0, this.y0, this.r0, this.x1, this.y1, this.r1), e = this.colorStops, c = 0;c < e.length;c++) {
          var b = e[c], q = b.offset, b = b.color, b = f ? g(d, b, f) : b;
          n.call(a, q, b);
        }
        a._template = this;
        a._transform = this._transform;
        return a;
      };
      return d;
    }(), l;
    (function(d) {
      d[d.ClosePath = 1] = "ClosePath";
      d[d.MoveTo = 2] = "MoveTo";
      d[d.LineTo = 3] = "LineTo";
      d[d.QuadraticCurveTo = 4] = "QuadraticCurveTo";
      d[d.BezierCurveTo = 5] = "BezierCurveTo";
      d[d.ArcTo = 6] = "ArcTo";
      d[d.Rect = 7] = "Rect";
      d[d.Arc = 8] = "Arc";
      d[d.Save = 9] = "Save";
      d[d.Restore = 10] = "Restore";
      d[d.Transform = 11] = "Transform";
    })(l || (l = {}));
    var u = function() {
      function d(f) {
        this._commands = new Uint8Array(d._arrayBufferPool.acquire(8), 0, 8);
        this._commandPosition = 0;
        this._data = new Float64Array(d._arrayBufferPool.acquire(8 * Float64Array.BYTES_PER_ELEMENT), 0, 8);
        this._dataPosition = 0;
        f instanceof d && this.addPath(f);
      }
      d._apply = function(d, f) {
        var a = d._commands, e = d._data, c = 0, b = 0;
        f.beginPath();
        for (var q = d._commandPosition;c < q;) {
          switch(a[c++]) {
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
      d.prototype._ensureCommandCapacity = function(f) {
        this._commands = d._arrayBufferPool.ensureUint8ArrayLength(this._commands, f);
      };
      d.prototype._ensureDataCapacity = function(f) {
        this._data = d._arrayBufferPool.ensureFloat64ArrayLength(this._data, f);
      };
      d.prototype._writeCommand = function(d) {
        this._commandPosition >= this._commands.length && this._ensureCommandCapacity(this._commandPosition + 1);
        this._commands[this._commandPosition++] = d;
      };
      d.prototype._writeData = function(d, f, a, e, c, b) {
        var q = arguments.length;
        this._dataPosition + q >= this._data.length && this._ensureDataCapacity(this._dataPosition + q);
        var h = this._data, l = this._dataPosition;
        h[l] = d;
        h[l + 1] = f;
        2 < q && (h[l + 2] = a, h[l + 3] = e, 4 < q && (h[l + 4] = c, 6 === q && (h[l + 5] = b)));
        this._dataPosition += q;
      };
      d.prototype.closePath = function() {
        this._writeCommand(1);
      };
      d.prototype.moveTo = function(d, f) {
        this._writeCommand(2);
        this._writeData(d, f);
      };
      d.prototype.lineTo = function(d, f) {
        this._writeCommand(3);
        this._writeData(d, f);
      };
      d.prototype.quadraticCurveTo = function(d, f, a, e) {
        this._writeCommand(4);
        this._writeData(d, f, a, e);
      };
      d.prototype.bezierCurveTo = function(d, f, a, e, c, b) {
        this._writeCommand(5);
        this._writeData(d, f, a, e, c, b);
      };
      d.prototype.arcTo = function(d, f, a, e, c) {
        this._writeCommand(6);
        this._writeData(d, f, a, e, c);
      };
      d.prototype.rect = function(d, f, a, e) {
        this._writeCommand(7);
        this._writeData(d, f, a, e);
      };
      d.prototype.arc = function(d, f, a, e, c, b) {
        this._writeCommand(8);
        this._writeData(d, f, a, e, c, +b);
      };
      d.prototype.addPath = function(d, f) {
        f && (this._writeCommand(9), this._writeCommand(11), this._writeData(f.a, f.b, f.c, f.d, f.e, f.f));
        var a = this._commandPosition + d._commandPosition;
        a >= this._commands.length && this._ensureCommandCapacity(a);
        for (var e = this._commands, c = d._commands, b = this._commandPosition, q = 0;b < a;b++) {
          e[b] = c[q++];
        }
        this._commandPosition = a;
        a = this._dataPosition + d._dataPosition;
        a >= this._data.length && this._ensureDataCapacity(a);
        e = this._data;
        c = d._data;
        b = this._dataPosition;
        for (q = 0;b < a;b++) {
          e[b] = c[q++];
        }
        this._dataPosition = a;
        f && this._writeCommand(10);
      };
      d._arrayBufferPool = new k.ArrayBufferPool;
      return d;
    }();
    r.Path = u;
    if ("undefined" !== typeof CanvasRenderingContext2D && ("undefined" === typeof Path2D || !Path2D.prototype.addPath)) {
      var c = CanvasRenderingContext2D.prototype.fill;
      CanvasRenderingContext2D.prototype.fill = function(d, f) {
        arguments.length && (d instanceof u ? u._apply(d, this) : f = d);
        f ? c.call(this, f) : c.call(this);
      };
      var e = CanvasRenderingContext2D.prototype.stroke;
      CanvasRenderingContext2D.prototype.stroke = function(d, f) {
        arguments.length && (d instanceof u ? u._apply(d, this) : f = d);
        f ? e.call(this, f) : e.call(this);
      };
      var f = CanvasRenderingContext2D.prototype.clip;
      CanvasRenderingContext2D.prototype.clip = function(d, a) {
        arguments.length && (d instanceof u ? u._apply(d, this) : a = d);
        a ? f.call(this, a) : f.call(this);
      };
      window.Path2D = u;
    }
    if ("undefined" !== typeof CanvasPattern && Path2D.prototype.addPath) {
      l = function(d) {
        this._transform = d;
        this._template && (this._template._transform = d);
      };
      CanvasPattern.prototype.setTransform || (CanvasPattern.prototype.setTransform = l);
      CanvasGradient.prototype.setTransform || (CanvasGradient.prototype.setTransform = l);
      var d = CanvasRenderingContext2D.prototype.fill, q = CanvasRenderingContext2D.prototype.stroke;
      CanvasRenderingContext2D.prototype.fill = function(f, a) {
        var e = !!this.fillStyle._transform;
        if ((this.fillStyle instanceof CanvasPattern || this.fillStyle instanceof CanvasGradient) && e && f instanceof Path2D) {
          var e = this.fillStyle._transform, c;
          try {
            c = e.inverse();
          } catch (b) {
            c = e = r.Geometry.Matrix.createIdentitySVGMatrix();
          }
          this.transform(e.a, e.b, e.c, e.d, e.e, e.f);
          e = new Path2D;
          e.addPath(f, c);
          d.call(this, e, a);
          this.transform(c.a, c.b, c.c, c.d, c.e, c.f);
        } else {
          0 === arguments.length ? d.call(this) : 1 === arguments.length ? d.call(this, f) : 2 === arguments.length && d.call(this, f, a);
        }
      };
      CanvasRenderingContext2D.prototype.stroke = function(d) {
        var f = !!this.strokeStyle._transform;
        if ((this.strokeStyle instanceof CanvasPattern || this.strokeStyle instanceof CanvasGradient) && f && d instanceof Path2D) {
          var a = this.strokeStyle._transform, f = a.inverse();
          this.transform(a.a, a.b, a.c, a.d, a.e, a.f);
          a = new Path2D;
          a.addPath(d, f);
          var e = this.lineWidth;
          this.lineWidth *= (f.a + f.d) / 2;
          q.call(this, a);
          this.transform(f.a, f.b, f.c, f.d, f.e, f.f);
          this.lineWidth = e;
        } else {
          0 === arguments.length ? q.call(this) : 1 === arguments.length && q.call(this, d);
        }
      };
    }
    "undefined" !== typeof CanvasRenderingContext2D && function() {
      function d() {
        return r.Geometry.Matrix.createSVGMatrixFromArray(this.mozCurrentTransform);
      }
      var f = "currentTransform" in CanvasRenderingContext2D.prototype;
      CanvasRenderingContext2D.prototype.flashStroke = function(d, a) {
        if (f) {
          var e = this.currentTransform, c = new Path2D;
          c.addPath(d, e);
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
          this.stroke(c);
          this.setTransform(e.a, e.b, e.c, e.d, e.e, e.f);
          this.lineWidth = q;
        } else {
          this.stroke(d);
        }
      };
      if (!f) {
        if ("mozCurrentTransform" in CanvasRenderingContext2D.prototype) {
          Object.defineProperty(CanvasRenderingContext2D.prototype, "currentTransform", {get:d}), f = !0;
        } else {
          var a = CanvasRenderingContext2D.prototype.setTransform;
          CanvasRenderingContext2D.prototype.setTransform = function(d, f, e, c, b, q) {
            var h = this.currentTransform;
            h.a = d;
            h.b = f;
            h.c = e;
            h.d = c;
            h.e = b;
            h.f = q;
            a.call(this, d, f, e, c, b, q);
          };
          Object.defineProperty(CanvasRenderingContext2D.prototype, "currentTransform", {get:function() {
            return this._currentTransform || (this._currentTransform = r.Geometry.Matrix.createIdentitySVGMatrix());
          }});
        }
      }
    }();
    if ("undefined" !== typeof CanvasRenderingContext2D && void 0 === CanvasRenderingContext2D.prototype.globalColorMatrix) {
      var D = CanvasRenderingContext2D.prototype.fill, J = CanvasRenderingContext2D.prototype.stroke, G = CanvasRenderingContext2D.prototype.fillText, W = CanvasRenderingContext2D.prototype.strokeText;
      Object.defineProperty(CanvasRenderingContext2D.prototype, "globalColorMatrix", {get:function() {
        return this._globalColorMatrix ? this._globalColorMatrix.clone() : null;
      }, set:function(d) {
        d ? this._globalColorMatrix ? this._globalColorMatrix.set(d) : this._globalColorMatrix = d.clone() : this._globalColorMatrix = null;
      }, enumerable:!0, configurable:!0});
      CanvasRenderingContext2D.prototype.fill = function(d, f) {
        var a = null;
        this._globalColorMatrix && (a = this.fillStyle, this.fillStyle = g(this, this.fillStyle, this._globalColorMatrix));
        0 === arguments.length ? D.call(this) : 1 === arguments.length ? D.call(this, d) : 2 === arguments.length && D.call(this, d, f);
        a && (this.fillStyle = a);
      };
      CanvasRenderingContext2D.prototype.stroke = function(d, f) {
        var a = null;
        this._globalColorMatrix && (a = this.strokeStyle, this.strokeStyle = g(this, this.strokeStyle, this._globalColorMatrix));
        0 === arguments.length ? J.call(this) : 1 === arguments.length && J.call(this, d);
        a && (this.strokeStyle = a);
      };
      CanvasRenderingContext2D.prototype.fillText = function(d, f, a, e) {
        var c = null;
        this._globalColorMatrix && (c = this.fillStyle, this.fillStyle = g(this, this.fillStyle, this._globalColorMatrix));
        3 === arguments.length ? G.call(this, d, f, a) : 4 === arguments.length ? G.call(this, d, f, a, e) : k.Debug.unexpected();
        c && (this.fillStyle = c);
      };
      CanvasRenderingContext2D.prototype.strokeText = function(d, f, a, e) {
        var c = null;
        this._globalColorMatrix && (c = this.strokeStyle, this.strokeStyle = g(this, this.strokeStyle, this._globalColorMatrix));
        3 === arguments.length ? W.call(this, d, f, a) : 4 === arguments.length ? W.call(this, d, f, a, e) : k.Debug.unexpected();
        c && (this.strokeStyle = c);
      };
    }
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    k.ScreenShot = function() {
      return function(g, b, k, n) {
        this.dataURL = g;
        this.w = b;
        this.h = k;
        this.pixelRatio = n;
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
      function b(a, f, d, c) {
        var b = 1 - c;
        return a * b * b + 2 * f * b * c + d * c * c;
      }
      function v(a, f, d, c, b) {
        var h = b * b, l = 1 - b, g = l * l;
        return a * l * g + 3 * f * b * g + 3 * d * l * h + c * b * h;
      }
      var n = k.NumberUtilities.clamp, a = k.NumberUtilities.pow2, h = k.NumberUtilities.epsilonEquals;
      g.radianToDegrees = function(a) {
        return 180 * a / Math.PI;
      };
      g.degreesToRadian = function(a) {
        return a * Math.PI / 180;
      };
      g.quadraticBezier = b;
      g.quadraticBezierExtreme = function(a, f, d) {
        var c = (a - f) / (a - 2 * f + d);
        return 0 > c ? a : 1 < c ? d : b(a, f, d, c);
      };
      g.cubicBezier = v;
      g.cubicBezierExtremes = function(a, f, d, c) {
        var b = f - a, h;
        h = 2 * (d - f);
        var l = c - d;
        b + l === h && (l *= 1.0001);
        var g = 2 * b - h, p = h - 2 * b, p = Math.sqrt(p * p - 4 * b * (b - h + l));
        h = 2 * (b - h + l);
        b = (g + p) / h;
        g = (g - p) / h;
        p = [];
        0 <= b && 1 >= b && p.push(v(a, f, d, c, b));
        0 <= g && 1 >= g && p.push(v(a, f, d, c, g));
        return p;
      };
      var p = function() {
        function a(f, d) {
          this.x = f;
          this.y = d;
        }
        a.prototype.setElements = function(f, d) {
          this.x = f;
          this.y = d;
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
        a.prototype.inTriangle = function(f, d, a) {
          var e = f.y * a.x - f.x * a.y + (a.y - f.y) * this.x + (f.x - a.x) * this.y, c = f.x * d.y - f.y * d.x + (f.y - d.y) * this.x + (d.x - f.x) * this.y;
          if (0 > e != 0 > c) {
            return !1;
          }
          f = -d.y * a.x + f.y * (a.x - d.x) + f.x * (d.y - a.y) + d.x * a.y;
          0 > f && (e = -e, c = -c, f = -f);
          return 0 < e && 0 < c && e + c < f;
        };
        a.createEmpty = function() {
          return new a(0, 0);
        };
        a.createEmptyPoints = function(f) {
          for (var d = [], c = 0;c < f;c++) {
            d.push(new a(0, 0));
          }
          return d;
        };
        return a;
      }();
      g.Point = p;
      var m = function() {
        function a(f, d, e) {
          this.x = f;
          this.y = d;
          this.z = e;
        }
        a.prototype.setElements = function(a, d, e) {
          this.x = a;
          this.y = d;
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
          var d = this.z * a.x - this.x * a.z, e = this.x * a.y - this.y * a.x;
          this.x = this.y * a.z - this.z * a.y;
          this.y = d;
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
          for (var d = [], c = 0;c < f;c++) {
            d.push(new a(0, 0, 0));
          }
          return d;
        };
        return a;
      }();
      g.Point3D = m;
      var w = function() {
        function a(f, d, c, b) {
          this.setElements(f, d, c, b);
          a.allocationCount++;
        }
        a.prototype.setElements = function(a, d, e, c) {
          this.x = a;
          this.y = d;
          this.w = e;
          this.h = c;
        };
        a.prototype.set = function(a) {
          this.x = a.x;
          this.y = a.y;
          this.w = a.w;
          this.h = a.h;
        };
        a.prototype.contains = function(a) {
          var d = a.x + a.w, e = a.y + a.h, c = this.x + this.w, b = this.y + this.h;
          return a.x >= this.x && a.x < c && a.y >= this.y && a.y < b && d > this.x && d <= c && e > this.y && e <= b;
        };
        a.prototype.containsPoint = function(a) {
          return a.x >= this.x && a.x < this.x + this.w && a.y >= this.y && a.y < this.y + this.h;
        };
        a.prototype.isContained = function(a) {
          for (var d = 0;d < a.length;d++) {
            if (a[d].contains(this)) {
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
              var d = this.x, e = this.y;
              this.x > a.x && (d = a.x);
              this.y > a.y && (e = a.y);
              var c = this.x + this.w;
              c < a.x + a.w && (c = a.x + a.w);
              var b = this.y + this.h;
              b < a.y + a.h && (b = a.y + a.h);
              this.x = d;
              this.y = e;
              this.w = c - d;
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
          var d = a.createEmpty();
          if (this.isEmpty() || f.isEmpty()) {
            return d.setEmpty(), d;
          }
          d.x = Math.max(this.x, f.x);
          d.y = Math.max(this.y, f.y);
          d.w = Math.min(this.x + this.w, f.x + f.w) - d.x;
          d.h = Math.min(this.y + this.h, f.y + f.h) - d.y;
          d.isEmpty() && d.setEmpty();
          this.set(d);
        };
        a.prototype.intersects = function(a) {
          if (this.isEmpty() || a.isEmpty()) {
            return !1;
          }
          var d = Math.max(this.x, a.x), e = Math.max(this.y, a.y), d = Math.min(this.x + this.w, a.x + a.w) - d;
          a = Math.min(this.y + this.h, a.y + a.h) - e;
          return !(0 >= d || 0 >= a);
        };
        a.prototype.intersectsTransformedAABB = function(f, d) {
          var c = a._temporary;
          c.set(f);
          d.transformRectangleAABB(c);
          return this.intersects(c);
        };
        a.prototype.intersectsTranslated = function(a, d, e) {
          if (this.isEmpty() || a.isEmpty()) {
            return !1;
          }
          var c = Math.max(this.x, a.x + d), b = Math.max(this.y, a.y + e);
          d = Math.min(this.x + this.w, a.x + d + a.w) - c;
          a = Math.min(this.y + this.h, a.y + e + a.h) - b;
          return !(0 >= d || 0 >= a);
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
          var a = Math.ceil(this.x + this.w), d = Math.ceil(this.y + this.h);
          this.x = Math.floor(this.x);
          this.y = Math.floor(this.y);
          this.w = a - this.x;
          this.h = d - this.y;
          return this;
        };
        a.prototype.scale = function(a, d) {
          this.x *= a;
          this.y *= d;
          this.w *= a;
          this.h *= d;
          return this;
        };
        a.prototype.offset = function(a, d) {
          this.x += a;
          this.y += d;
          return this;
        };
        a.prototype.resize = function(a, d) {
          this.w += a;
          this.h += d;
          return this;
        };
        a.prototype.expand = function(a, d) {
          this.offset(-a, -d).resize(2 * a, 2 * d);
          return this;
        };
        a.prototype.getCenter = function() {
          return new p(this.x + this.w / 2, this.y + this.h / 2);
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
          this.corners = f.map(function(d) {
            return d.clone();
          });
          this.axes = [f[1].clone().sub(f[0]), f[3].clone().sub(f[0])];
          this.origins = [];
          for (var d = 0;2 > d;d++) {
            this.axes[d].mul(1 / this.axes[d].squaredLength()), this.origins.push(f[0].dot(this.axes[d]));
          }
        }
        a.prototype.getBounds = function() {
          return a.getBounds(this.corners);
        };
        a.getBounds = function(a) {
          for (var d = new p(Number.MAX_VALUE, Number.MAX_VALUE), e = new p(Number.MIN_VALUE, Number.MIN_VALUE), c = 0;4 > c;c++) {
            var b = a[c].x, h = a[c].y;
            d.x = Math.min(d.x, b);
            d.y = Math.min(d.y, h);
            e.x = Math.max(e.x, b);
            e.y = Math.max(e.y, h);
          }
          return new w(d.x, d.y, e.x - d.x, e.y - d.y);
        };
        a.prototype.intersects = function(a) {
          return this.intersectsOneWay(a) && a.intersectsOneWay(this);
        };
        a.prototype.intersectsOneWay = function(a) {
          for (var d = 0;2 > d;d++) {
            for (var e = 0;4 > e;e++) {
              var c = a.corners[e].dot(this.axes[d]), b, h;
              0 === e ? h = b = c : c < b ? b = c : c > h && (h = c);
            }
            if (b > 1 + this.origins[d] || h < this.origins[d]) {
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
        function a(f, d, c, b, h, l) {
          this._data = new Float64Array(6);
          this._type = 0;
          this.setElements(f, d, c, b, h, l);
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
        a.prototype.setElements = function(a, d, e, c, b, h) {
          var l = this._data;
          l[0] = a;
          l[1] = d;
          l[2] = e;
          l[3] = c;
          l[4] = b;
          l[5] = h;
          this._type = 0;
        };
        a.prototype.set = function(a) {
          var d = this._data, e = a._data;
          d[0] = e[0];
          d[1] = e[1];
          d[2] = e[2];
          d[3] = e[3];
          d[4] = e[4];
          d[5] = e[5];
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
          var d = this._data;
          a = a._data;
          return d[0] === a[0] && d[1] === a[1] && d[2] === a[2] && d[3] === a[3] && d[4] === a[4] && d[5] === a[5];
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
        a.prototype.transform = function(a, d, e, c, b, h) {
          var l = this._data, g = l[0], p = l[1], k = l[2], m = l[3], t = l[4], n = l[5];
          l[0] = g * a + k * d;
          l[1] = p * a + m * d;
          l[2] = g * e + k * c;
          l[3] = p * e + m * c;
          l[4] = g * b + k * h + t;
          l[5] = p * b + m * h + n;
          this._type = 0;
          return this;
        };
        a.prototype.transformRectangle = function(a, d) {
          var e = this._data, c = e[0], b = e[1], h = e[2], l = e[3], g = e[4], e = e[5], p = a.x, k = a.y, m = a.w, t = a.h;
          d[0].x = c * p + h * k + g;
          d[0].y = b * p + l * k + e;
          d[1].x = c * (p + m) + h * k + g;
          d[1].y = b * (p + m) + l * k + e;
          d[2].x = c * (p + m) + h * (k + t) + g;
          d[2].y = b * (p + m) + l * (k + t) + e;
          d[3].x = c * p + h * (k + t) + g;
          d[3].y = b * p + l * (k + t) + e;
        };
        a.prototype.isTranslationOnly = function() {
          if (2 === this._type) {
            return !0;
          }
          var a = this._data;
          return 1 === a[0] && 0 === a[1] && 0 === a[2] && 1 === a[3] || h(a[0], 1) && h(a[1], 0) && h(a[2], 0) && h(a[3], 1) ? (this._type = 2, !0) : !1;
        };
        a.prototype.transformRectangleAABB = function(a) {
          var d = this._data;
          if (1 !== this._type) {
            if (2 === this._type) {
              a.x += d[4], a.y += d[5];
            } else {
              var e = d[0], c = d[1], b = d[2], h = d[3], l = d[4], g = d[5], p = a.x, k = a.y, m = a.w, t = a.h, d = e * p + b * k + l, n = c * p + h * k + g, u = e * (p + m) + b * k + l, w = c * (p + m) + h * k + g, r = e * (p + m) + b * (k + t) + l, m = c * (p + m) + h * (k + t) + g, e = e * p + b * (k + t) + l, c = c * p + h * (k + t) + g, h = 0;
              d > u && (h = d, d = u, u = h);
              r > e && (h = r, r = e, e = h);
              a.x = d < r ? d : r;
              a.w = (u > e ? u : e) - a.x;
              n > w && (h = n, n = w, w = h);
              m > c && (h = m, m = c, c = h);
              a.y = n < m ? n : m;
              a.h = (w > c ? w : c) - a.y;
            }
          }
        };
        a.prototype.scale = function(a, d) {
          var e = this._data;
          e[0] *= a;
          e[1] *= d;
          e[2] *= a;
          e[3] *= d;
          e[4] *= a;
          e[5] *= d;
          this._type = 0;
          return this;
        };
        a.prototype.scaleClone = function(a, d) {
          return 1 === a && 1 === d ? this : this.clone().scale(a, d);
        };
        a.prototype.rotate = function(a) {
          var d = this._data, e = d[0], c = d[1], b = d[2], h = d[3], l = d[4], g = d[5], p = Math.cos(a);
          a = Math.sin(a);
          d[0] = p * e - a * c;
          d[1] = a * e + p * c;
          d[2] = p * b - a * h;
          d[3] = a * b + p * h;
          d[4] = p * l - a * g;
          d[5] = a * l + p * g;
          this._type = 0;
          return this;
        };
        a.prototype.concat = function(a) {
          if (1 === a._type) {
            return this;
          }
          var d = this._data;
          a = a._data;
          var e = d[0] * a[0], c = 0, b = 0, h = d[3] * a[3], l = d[4] * a[0] + a[4], g = d[5] * a[3] + a[5];
          if (0 !== d[1] || 0 !== d[2] || 0 !== a[1] || 0 !== a[2]) {
            e += d[1] * a[2], h += d[2] * a[1], c += d[0] * a[1] + d[1] * a[3], b += d[2] * a[0] + d[3] * a[2], l += d[5] * a[2], g += d[4] * a[1];
          }
          d[0] = e;
          d[1] = c;
          d[2] = b;
          d[3] = h;
          d[4] = l;
          d[5] = g;
          this._type = 0;
          return this;
        };
        a.prototype.concatClone = function(a) {
          return this.clone().concat(a);
        };
        a.prototype.preMultiply = function(a) {
          var d = this._data, e = a._data;
          if (2 === a._type && this._type & 3) {
            d[4] += e[4], d[5] += e[5], this._type = 2;
          } else {
            if (1 !== a._type) {
              a = e[0] * d[0];
              var c = 0, b = 0, h = e[3] * d[3], l = e[4] * d[0] + d[4], g = e[5] * d[3] + d[5];
              if (0 !== e[1] || 0 !== e[2] || 0 !== d[1] || 0 !== d[2]) {
                a += e[1] * d[2], h += e[2] * d[1], c += e[0] * d[1] + e[1] * d[3], b += e[2] * d[0] + e[3] * d[2], l += e[5] * d[2], g += e[4] * d[1];
              }
              d[0] = a;
              d[1] = c;
              d[2] = b;
              d[3] = h;
              d[4] = l;
              d[5] = g;
              this._type = 0;
            }
          }
        };
        a.prototype.translate = function(a, d) {
          var e = this._data;
          e[4] += a;
          e[5] += d;
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
            var d = this._data, e = a.x, c = a.y;
            a.x = d[0] * e + d[2] * c + d[4];
            a.y = d[1] * e + d[3] * c + d[5];
          }
        };
        a.prototype.transformPoints = function(a) {
          if (1 !== this._type) {
            for (var d = 0;d < a.length;d++) {
              this.transformPoint(a[d]);
            }
          }
        };
        a.prototype.deltaTransformPoint = function(a) {
          if (1 !== this._type) {
            var d = this._data, e = a.x, c = a.y;
            a.x = d[0] * e + d[2] * c;
            a.y = d[1] * e + d[3] * c;
          }
        };
        a.prototype.inverse = function(a) {
          var d = this._data, e = a._data;
          if (1 === this._type) {
            a.setIdentity();
          } else {
            if (2 === this._type) {
              e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = -d[4], e[5] = -d[5], a._type = 2;
            } else {
              var c = d[1], b = d[2], h = d[4], l = d[5];
              if (0 === c && 0 === b) {
                var g = e[0] = 1 / d[0], d = e[3] = 1 / d[3];
                e[1] = 0;
                e[2] = 0;
                e[4] = -g * h;
                e[5] = -d * l;
              } else {
                var g = d[0], d = d[3], p = g * d - c * b;
                if (0 === p) {
                  a.setIdentity();
                  return;
                }
                p = 1 / p;
                e[0] = d * p;
                c = e[1] = -c * p;
                b = e[2] = -b * p;
                d = e[3] = g * p;
                e[4] = -(e[0] * h + b * l);
                e[5] = -(c * h + d * l);
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
          var d = Math.sqrt(a[0] * a[0] + a[1] * a[1]);
          return 0 < a[0] ? d : -d;
        };
        a.prototype.getScaleY = function() {
          var a = this._data;
          if (0 === a[2] && 1 === a[3]) {
            return 1;
          }
          var d = Math.sqrt(a[2] * a[2] + a[3] * a[3]);
          return 0 < a[3] ? d : -d;
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
          var d = this._data;
          return "{" + d[0].toFixed(a) + ", " + d[1].toFixed(a) + ", " + d[2].toFixed(a) + ", " + d[3].toFixed(a) + ", " + d[4].toFixed(a) + ", " + d[5].toFixed(a) + "}";
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
          var f = this._data, d = a._createSVGMatrix();
          try {
            d.a = f[0], d.b = f[1], d.c = f[2], d.d = f[3], d.e = f[4], d.f = f[5];
          } catch (c) {
            return a._createSVGMatrix();
          }
          return d;
        };
        a.prototype.snap = function() {
          var a = this._data;
          return this.isTranslationOnly() ? (a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 1, a[4] = Math.round(a[4]), a[5] = Math.round(a[5]), this._type = 2, !0) : !1;
        };
        a.createIdentitySVGMatrix = function() {
          return a._createSVGMatrix();
        };
        a.createSVGMatrixFromArray = function(f) {
          var d = a._createSVGMatrix();
          d.a = f[0];
          d.b = f[1];
          d.c = f[2];
          d.d = f[3];
          d.e = f[4];
          d.f = f[5];
          return d;
        };
        a.allocationCount = 0;
        a._dirtyStack = [];
        a.multiply = function(a, d) {
          var e = d._data;
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
        a.createCameraLookAt = function(f, d, c) {
          d = f.clone().sub(d).normalize();
          c = c.clone().cross(d).normalize();
          var b = d.clone().cross(c);
          return new a([c.x, c.y, c.z, 0, b.x, b.y, b.z, 0, d.x, d.y, d.z, 0, f.x, f.y, f.z, 1]);
        };
        a.createLookAt = function(f, d, c) {
          d = f.clone().sub(d).normalize();
          c = c.clone().cross(d).normalize();
          var b = d.clone().cross(c);
          return new a([c.x, b.x, d.x, 0, b.x, b.y, d.y, 0, d.x, b.z, d.z, 0, -c.dot(f), -b.dot(f), -d.dot(f), 1]);
        };
        a.prototype.mul = function(a) {
          a = [a.x, a.y, a.z, 0];
          for (var d = this._m, e = [], c = 0;4 > c;c++) {
            e[c] = 0;
            for (var b = 4 * c, h = 0;4 > h;h++) {
              e[c] += d[b + h] * a[h];
            }
          }
          return new m(e[0], e[1], e[2]);
        };
        a.create2DProjection = function(f, d, c) {
          return new a([2 / f, 0, 0, 0, 0, -2 / d, 0, 0, 0, 0, 2 / c, 0, -1, 1, 0, 1]);
        };
        a.createPerspective = function(f) {
          f = Math.tan(.5 * Math.PI - .5 * f);
          var d = 1 / -4999.9;
          return new a([f / 1, 0, 0, 0, 0, f, 0, 0, 0, 0, 5000.1 * d, -1, 0, 0, 1E3 * d, 0]);
        };
        a.createIdentity = function() {
          return a.createTranslation(0, 0);
        };
        a.createTranslation = function(f, d) {
          return new a([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, f, d, 0, 1]);
        };
        a.createXRotation = function(f) {
          var d = Math.cos(f);
          f = Math.sin(f);
          return new a([1, 0, 0, 0, 0, d, f, 0, 0, -f, d, 0, 0, 0, 0, 1]);
        };
        a.createYRotation = function(f) {
          var d = Math.cos(f);
          f = Math.sin(f);
          return new a([d, 0, -f, 0, 0, 1, 0, 0, f, 0, d, 0, 0, 0, 0, 1]);
        };
        a.createZRotation = function(f) {
          var d = Math.cos(f);
          f = Math.sin(f);
          return new a([d, f, 0, 0, -f, d, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        };
        a.createScale = function(f, d, c) {
          return new a([f, 0, 0, 0, 0, d, 0, 0, 0, 0, c, 0, 0, 0, 0, 1]);
        };
        a.createMultiply = function(f, d) {
          var c = f._m, b = d._m, h = c[0], l = c[1], g = c[2], p = c[3], k = c[4], m = c[5], t = c[6], n = c[7], u = c[8], w = c[9], r = c[10], v = c[11], y = c[12], z = c[13], B = c[14], c = c[15], x = b[0], F = b[1], A = b[2], E = b[3], I = b[4], K = b[5], L = b[6], M = b[7], N = b[8], O = b[9], P = b[10], Q = b[11], T = b[12], U = b[13], V = b[14], b = b[15];
          return new a([h * x + l * I + g * N + p * T, h * F + l * K + g * O + p * U, h * A + l * L + g * P + p * V, h * E + l * M + g * Q + p * b, k * x + m * I + t * N + n * T, k * F + m * K + t * O + n * U, k * A + m * L + t * P + n * V, k * E + m * M + t * Q + n * b, u * x + w * I + r * N + v * T, u * F + w * K + r * O + v * U, u * A + w * L + r * P + v * V, u * E + w * M + r * Q + v * b, y * x + z * I + B * N + c * T, y * F + z * K + B * O + c * U, y * A + z * L + B * P + c * V, y * E + z * 
          M + B * Q + c * b]);
        };
        a.createInverse = function(f) {
          var d = f._m;
          f = d[0];
          var c = d[1], b = d[2], h = d[3], l = d[4], g = d[5], p = d[6], k = d[7], m = d[8], t = d[9], n = d[10], u = d[11], w = d[12], r = d[13], v = d[14], d = d[15], y = n * d, z = v * u, B = p * d, x = v * k, F = p * u, A = n * k, E = b * d, I = v * h, K = b * u, L = n * h, M = b * k, N = p * h, O = m * r, P = w * t, Q = l * r, T = w * g, U = l * t, V = m * g, Y = f * r, Z = w * c, aa = f * t, ba = m * c, ca = f * g, da = l * c, fa = y * g + x * t + F * r - (z * g + B * t + A * r), ga = z * 
          c + E * t + L * r - (y * c + I * t + K * r), r = B * c + I * g + M * r - (x * c + E * g + N * r), c = A * c + K * g + N * t - (F * c + L * g + M * t), g = 1 / (f * fa + l * ga + m * r + w * c);
          return new a([g * fa, g * ga, g * r, g * c, g * (z * l + B * m + A * w - (y * l + x * m + F * w)), g * (y * f + I * m + K * w - (z * f + E * m + L * w)), g * (x * f + E * l + N * w - (B * f + I * l + M * w)), g * (F * f + L * l + M * m - (A * f + K * l + N * m)), g * (O * k + T * u + U * d - (P * k + Q * u + V * d)), g * (P * h + Y * u + ba * d - (O * h + Z * u + aa * d)), g * (Q * h + Z * k + ca * d - (T * h + Y * k + da * d)), g * (V * h + aa * k + da * u - (U * h + ba * k + ca * u)), 
          g * (Q * n + V * v + P * p - (U * v + O * p + T * n)), g * (aa * v + O * b + Z * n - (Y * n + ba * v + P * b)), g * (Y * p + da * v + T * b - (ca * v + Q * b + Z * p)), g * (ca * n + U * b + ba * p - (aa * p + da * n + V * b))]);
        };
        return a;
      }();
      g.Matrix3D = l;
      l = function() {
        function a(f, d, c) {
          void 0 === c && (c = 7);
          var b = this.size = 1 << c;
          this.sizeInBits = c;
          this.w = f;
          this.h = d;
          this.c = Math.ceil(f / b);
          this.r = Math.ceil(d / b);
          this.grid = [];
          for (f = 0;f < this.r;f++) {
            for (this.grid.push([]), d = 0;d < this.c;d++) {
              this.grid[f][d] = new a.Cell(new w(d * b, f * b, b, b));
            }
          }
        }
        a.prototype.clear = function() {
          for (var a = 0;a < this.r;a++) {
            for (var d = 0;d < this.c;d++) {
              this.grid[a][d].clear();
            }
          }
        };
        a.prototype.getBounds = function() {
          return new w(0, 0, this.w, this.h);
        };
        a.prototype.addDirtyRectangle = function(a) {
          var d = a.x >> this.sizeInBits, e = a.y >> this.sizeInBits;
          if (!(d >= this.c || e >= this.r)) {
            0 > d && (d = 0);
            0 > e && (e = 0);
            var c = this.grid[e][d];
            a = a.clone();
            a.snap();
            if (c.region.contains(a)) {
              c.bounds.isEmpty() ? c.bounds.set(a) : c.bounds.contains(a) || c.bounds.union(a);
            } else {
              for (var b = Math.min(this.c, Math.ceil((a.x + a.w) / this.size)) - d, h = Math.min(this.r, Math.ceil((a.y + a.h) / this.size)) - e, l = 0;l < b;l++) {
                for (var g = 0;g < h;g++) {
                  c = this.grid[e + g][d + l], c = c.region.clone(), c.intersect(a), c.isEmpty() || this.addDirtyRectangle(c);
                }
              }
            }
          }
        };
        a.prototype.gatherRegions = function(a) {
          for (var d = 0;d < this.r;d++) {
            for (var e = 0;e < this.c;e++) {
              this.grid[d][e].bounds.isEmpty() || a.push(this.grid[d][e].bounds);
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
          for (var d = 0, e = 0;e < this.r;e++) {
            for (var c = 0;c < this.c;c++) {
              d += this.grid[e][c].region.area();
            }
          }
          return d / a;
        };
        a.prototype.render = function(a, d) {
          function e(d) {
            a.rect(d.x, d.y, d.w, d.h);
          }
          if (d && d.drawGrid) {
            a.strokeStyle = "white";
            for (var c = 0;c < this.r;c++) {
              for (var b = 0;b < this.c;b++) {
                var h = this.grid[c][b];
                a.beginPath();
                e(h.region);
                a.closePath();
                a.stroke();
              }
            }
          }
          a.strokeStyle = "#E0F8D8";
          for (c = 0;c < this.r;c++) {
            for (b = 0;b < this.c;b++) {
              h = this.grid[c][b], a.beginPath(), e(h.bounds), a.closePath(), a.stroke();
            }
          }
        };
        a.tmpRectangle = w.createEmpty();
        return a;
      }();
      g.DirtyRegion = l;
      (function(a) {
        var f = function() {
          function a(d) {
            this.region = d;
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
        function a(f, d, e, c, b, h) {
          this.index = f;
          this.x = d;
          this.y = e;
          this.scale = h;
          this.bounds = new w(d * c, e * b, c, b);
        }
        a.prototype.getOBB = function() {
          if (this._obb) {
            return this._obb;
          }
          this.bounds.getCorners(a.corners);
          return this._obb = new t(a.corners);
        };
        a.corners = p.createEmptyPoints(4);
        return a;
      }();
      g.Tile = u;
      var c = function() {
        function a(f, d, e, c, b) {
          this.tileW = e;
          this.tileH = c;
          this.scale = b;
          this.w = f;
          this.h = d;
          this.rows = Math.ceil(d / c);
          this.columns = Math.ceil(f / e);
          this.tiles = [];
          for (d = f = 0;d < this.rows;d++) {
            for (var h = 0;h < this.columns;h++) {
              this.tiles.push(new u(f++, h, d, e, c, b));
            }
          }
        }
        a.prototype.getTiles = function(a, d) {
          if (d.emptyArea(a)) {
            return [];
          }
          if (d.infiniteArea(a)) {
            return this.tiles;
          }
          var e = this.columns * this.rows;
          return 40 > e && d.isScaleOrRotation() ? this.getFewTiles(a, d, 10 < e) : this.getManyTiles(a, d);
        };
        a.prototype.getFewTiles = function(f, d, c) {
          void 0 === c && (c = !0);
          if (d.isTranslationOnly() && 1 === this.tiles.length) {
            return this.tiles[0].bounds.intersectsTranslated(f, d.tx, d.ty) ? [this.tiles[0]] : [];
          }
          d.transformRectangle(f, a._points);
          var b;
          f = new w(0, 0, this.w, this.h);
          c && (b = new t(a._points));
          f.intersect(t.getBounds(a._points));
          if (f.isEmpty()) {
            return [];
          }
          var h = f.x / this.tileW | 0;
          d = f.y / this.tileH | 0;
          var l = Math.ceil((f.x + f.w) / this.tileW) | 0, g = Math.ceil((f.y + f.h) / this.tileH) | 0, h = n(h, 0, this.columns), l = n(l, 0, this.columns);
          d = n(d, 0, this.rows);
          for (var g = n(g, 0, this.rows), p = [];h < l;h++) {
            for (var k = d;k < g;k++) {
              var m = this.tiles[k * this.columns + h];
              m.bounds.intersects(f) && (c ? m.getOBB().intersects(b) : 1) && p.push(m);
            }
          }
          return p;
        };
        a.prototype.getManyTiles = function(f, d) {
          function c(a, d, f) {
            return (a - d.x) * (f.y - d.y) / (f.x - d.x) + d.y;
          }
          function b(a, d, f, c, e) {
            if (!(0 > f || f >= d.columns)) {
              for (c = n(c, 0, d.rows), e = n(e + 1, 0, d.rows);c < e;c++) {
                a.push(d.tiles[c * d.columns + f]);
              }
            }
          }
          var h = a._points;
          d.transformRectangle(f, h);
          for (var l = h[0].x < h[1].x ? 0 : 1, g = h[2].x < h[3].x ? 2 : 3, g = h[l].x < h[g].x ? l : g, l = [], p = 0;5 > p;p++, g++) {
            l.push(h[g % 4]);
          }
          (l[1].x - l[0].x) * (l[3].y - l[0].y) < (l[1].y - l[0].y) * (l[3].x - l[0].x) && (h = l[1], l[1] = l[3], l[3] = h);
          var h = [], k, m, g = Math.floor(l[0].x / this.tileW), p = (g + 1) * this.tileW;
          if (l[2].x < p) {
            k = Math.min(l[0].y, l[1].y, l[2].y, l[3].y);
            m = Math.max(l[0].y, l[1].y, l[2].y, l[3].y);
            var t = Math.floor(k / this.tileH), u = Math.floor(m / this.tileH);
            b(h, this, g, t, u);
            return h;
          }
          var w = 0, r = 4, v = !1;
          if (l[0].x === l[1].x || l[0].x === l[3].x) {
            l[0].x === l[1].x ? (v = !0, w++) : r--, k = c(p, l[w], l[w + 1]), m = c(p, l[r], l[r - 1]), t = Math.floor(l[w].y / this.tileH), u = Math.floor(l[r].y / this.tileH), b(h, this, g, t, u), g++;
          }
          do {
            var C, y, z, B;
            l[w + 1].x < p ? (C = l[w + 1].y, z = !0) : (C = c(p, l[w], l[w + 1]), z = !1);
            l[r - 1].x < p ? (y = l[r - 1].y, B = !0) : (y = c(p, l[r], l[r - 1]), B = !1);
            t = Math.floor((l[w].y < l[w + 1].y ? k : C) / this.tileH);
            u = Math.floor((l[r].y > l[r - 1].y ? m : y) / this.tileH);
            b(h, this, g, t, u);
            if (z && v) {
              break;
            }
            z ? (v = !0, w++, k = c(p, l[w], l[w + 1])) : k = C;
            B ? (r--, m = c(p, l[r], l[r - 1])) : m = y;
            g++;
            p = (g + 1) * this.tileW;
          } while (w < r);
          return h;
        };
        a._points = p.createEmptyPoints(4);
        return a;
      }();
      g.TileCache = c;
      l = function() {
        function e(a, d, c) {
          this._cacheLevels = [];
          this._source = a;
          this._tileSize = d;
          this._minUntiledSize = c;
        }
        e.prototype._getTilesAtScale = function(f, d, e) {
          var b = Math.max(d.getAbsoluteScaleX(), d.getAbsoluteScaleY()), h = 0;
          1 !== b && (h = n(Math.round(Math.log(1 / b) / Math.LN2), -5, 3));
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
          this._source.hasFlags(2097152) || (h = n(h, -5, 0));
          b = a(h);
          e = 5 + h;
          h = this._cacheLevels[e];
          if (!h) {
            var h = this._source.getBounds().getAbsoluteBounds().clone().scale(b, b), l, g;
            this._source.hasFlags(1048576) || !this._source.hasFlags(4194304) || Math.max(h.w, h.h) <= this._minUntiledSize ? (l = h.w, g = h.h) : l = g = this._tileSize;
            h = this._cacheLevels[e] = new c(h.w, h.h, l, g, b);
          }
          return h.getTiles(f, d.scaleClone(b, b));
        };
        e.prototype.fetchTiles = function(a, d, c, e) {
          var b = new w(0, 0, c.canvas.width, c.canvas.height);
          a = this._getTilesAtScale(a, d, b);
          var h;
          d = this._source;
          for (var l = 0;l < a.length;l++) {
            var g = a[l];
            g.cachedSurfaceRegion && g.cachedSurfaceRegion.surface && !d.hasFlags(1048592) || (h || (h = []), h.push(g));
          }
          h && this._cacheTiles(c, h, e, b);
          d.removeFlags(16);
          return a;
        };
        e.prototype._getTileBounds = function(a) {
          for (var d = w.createEmpty(), c = 0;c < a.length;c++) {
            d.union(a[c].bounds);
          }
          return d;
        };
        e.prototype._cacheTiles = function(a, d, c, e, b) {
          void 0 === b && (b = 4);
          var h = this._getTileBounds(d);
          a.save();
          a.setTransform(1, 0, 0, 1, 0, 0);
          a.clearRect(0, 0, e.w, e.h);
          a.translate(-h.x, -h.y);
          a.scale(d[0].scale, d[0].scale);
          var l = this._source.getBounds();
          a.translate(-l.x, -l.y);
          2 <= r.traceLevel && r.writer && r.writer.writeLn("Rendering Tiles: " + h);
          this._source.render(a, 0);
          a.restore();
          for (var l = null, g = 0;g < d.length;g++) {
            var p = d[g], k = p.bounds.clone();
            k.x -= h.x;
            k.y -= h.y;
            e.contains(k) || (l || (l = []), l.push(p));
            p.cachedSurfaceRegion = c(p.cachedSurfaceRegion, a, k);
          }
          l && (2 <= l.length ? (d = l.slice(0, l.length / 2 | 0), h = l.slice(d.length), this._cacheTiles(a, d, c, e, b - 1), this._cacheTiles(a, h, c, e, b - 1)) : this._cacheTiles(a, l, c, e, b - 1));
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
      var n = function(a) {
        function b() {
          a.apply(this, arguments);
        }
        __extends(b, a);
        return b;
      }(r.Geometry.Rectangle);
      k.Region = n;
      var a = function() {
        function a(b, c) {
          this._root = new h(0, 0, b | 0, c | 0, !1);
        }
        a.prototype.allocate = function(a, c) {
          a = Math.ceil(a);
          c = Math.ceil(c);
          var e = this._root.insert(a, c);
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
        function h(a, e, f, d, q) {
          b.call(this, a, e, f, d);
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
        h.prototype._insert = function(c, e, f) {
          if (!(f > a.MAX_DEPTH || this.allocated || this.w < c || this.h < e)) {
            if (this._children) {
              var d;
              if ((d = this._children[0]._insert(c, e, f + 1)) || (d = this._children[1]._insert(c, e, f + 1))) {
                return d;
              }
            } else {
              return d = !this._horizontal, a.RANDOM_ORIENTATION && (d = .5 <= Math.random()), this._children = this._horizontal ? [new h(this.x, this.y, this.w, e, !1), new h(this.x, this.y + e, this.w, this.h - e, d)] : [new h(this.x, this.y, c, this.h, !0), new h(this.x + c, this.y, this.w - c, this.h, d)], d = this._children[0], d.w === c && d.h === e ? (d.allocated = !0, d) : this._insert(c, e, f + 1);
            }
          }
        };
        return h;
      }(k.Region), p = function() {
        function a(b, c, e, f) {
          this._columns = b / e | 0;
          this._rows = c / f | 0;
          this._sizeW = e;
          this._sizeH = f;
          this._freeList = [];
          this._index = 0;
          this._total = this._columns * this._rows;
        }
        a.prototype.allocate = function(a, c) {
          a = Math.ceil(a);
          c = Math.ceil(c);
          var e = this._sizeW, f = this._sizeH;
          if (a > e || c > f) {
            return null;
          }
          var d = this._freeList, b = this._index;
          return 0 < d.length ? (e = d.pop(), e.w = a, e.h = c, e.allocated = !0, e) : b < this._total ? (d = b / this._columns | 0, e = new m((b - d * this._columns) * e, d * f, a, c), e.index = b, e.allocator = this, e.allocated = !0, this._index++, e) : null;
        };
        a.prototype.free = function(a) {
          a.allocated = !1;
          this._freeList.push(a);
        };
        return a;
      }();
      k.GridAllocator = p;
      var m = function(a) {
        function b(c, e, f, d) {
          a.call(this, c, e, f, d);
          this.index = -1;
        }
        __extends(b, a);
        return b;
      }(k.Region);
      k.GridCell = m;
      var w = function() {
        return function(a, b, c) {
          this.size = a;
          this.region = b;
          this.allocator = c;
        };
      }(), t = function(a) {
        function b(c, e, f, d, h) {
          a.call(this, c, e, f, d);
          this.region = h;
        }
        __extends(b, a);
        return b;
      }(k.Region);
      k.BucketCell = t;
      n = function() {
        function a(b, c) {
          this._buckets = [];
          this._w = b | 0;
          this._h = c | 0;
          this._filled = 0;
        }
        a.prototype.allocate = function(a, c) {
          a = Math.ceil(a);
          c = Math.ceil(c);
          var e = Math.max(a, c);
          if (a > this._w || c > this._h) {
            return null;
          }
          var f = null, d, h = this._buckets;
          do {
            for (var l = 0;l < h.length && !(h[l].size >= e && (d = h[l], f = d.allocator.allocate(a, c)));l++) {
            }
            if (!f) {
              var k = this._h - this._filled;
              if (k < c) {
                return null;
              }
              var l = g(e, 8), m = 2 * l;
              m > k && (m = k);
              if (m < l) {
                return null;
              }
              k = new b(0, this._filled, this._w, m);
              this._buckets.push(new w(l, k, new p(k.w, k.h, l, l)));
              this._filled += m;
            }
          } while (!f);
          return new t(d.region.x + f.x, d.region.y + f.y, f.w, f.h, f);
        };
        a.prototype.free = function(a) {
          a.region.allocator.free(a.region);
        };
        return a;
      }();
      k.BucketAllocator = n;
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
    var n = r.BlendMode;
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
    var p = function() {
      function a() {
      }
      a.prototype.visitNode = function(a, c) {
      };
      a.prototype.visitShape = function(a, c) {
        this.visitNode(a, c);
      };
      a.prototype.visitGroup = function(a, c) {
        this.visitNode(a, c);
        for (var e = a.getChildren(), b = 0;b < e.length;b++) {
          e[b].visit(this, c);
        }
      };
      a.prototype.visitStage = function(a, c) {
        this.visitGroup(a, c);
      };
      a.prototype.visitRenderable = function(a, c) {
        this.visitNode(a, c);
      };
      return a;
    }();
    r.NodeVisitor = p;
    var m = function() {
      return function() {
      };
    }();
    r.State = m;
    var w = function(a) {
      function d() {
        a.call(this);
        this.matrix = b.createIdentity();
        this.depth = 0;
      }
      __extends(d, a);
      d.prototype.transform = function(a) {
        var d = this.clone();
        d.matrix.preMultiply(a.getMatrix());
        return d;
      };
      d.allocate = function() {
        var a = d._dirtyStack, c = null;
        a.length && (c = a.pop());
        return c;
      };
      d.prototype.clone = function() {
        var a = d.allocate();
        a || (a = new d);
        a.set(this);
        return a;
      };
      d.prototype.set = function(a) {
        this.matrix.set(a.matrix);
      };
      d.prototype.free = function() {
        d._dirtyStack.push(this);
      };
      d._dirtyStack = [];
      return d;
    }(m);
    r.PreRenderState = w;
    var t = function(a) {
      function d() {
        a.apply(this, arguments);
        this.isDirty = !0;
      }
      __extends(d, a);
      d.prototype.start = function(a, d) {
        this._dirtyRegion = d;
        var c = new w;
        c.matrix.setIdentity();
        a.visit(this, c);
        c.free();
      };
      d.prototype.visitGroup = function(a, d) {
        var c = a.getChildren();
        this.visitNode(a, d);
        for (var e = 0;e < c.length;e++) {
          var b = c[e], f = d.transform(b.getTransform());
          b.visit(this, f);
          f.free();
        }
      };
      d.prototype.visitNode = function(a, d) {
        a.hasFlags(16) && (this.isDirty = !0);
        a.toggleFlags(16, !1);
        a.depth = d.depth++;
      };
      return d;
    }(p);
    r.PreRenderVisitor = t;
    m = function(a) {
      function d(d) {
        a.call(this);
        this.writer = d;
      }
      __extends(d, a);
      d.prototype.visitNode = function(a, d) {
      };
      d.prototype.visitShape = function(a, d) {
        this.writer.writeLn(a.toString());
        this.visitNode(a, d);
      };
      d.prototype.visitGroup = function(a, d) {
        this.visitNode(a, d);
        var c = a.getChildren();
        this.writer.enter(a.toString() + " " + c.length);
        for (var e = 0;e < c.length;e++) {
          c[e].visit(this, d);
        }
        this.writer.outdent();
      };
      d.prototype.visitStage = function(a, d) {
        this.visitGroup(a, d);
      };
      return d;
    }(p);
    r.TracingNodeVisitor = m;
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
          for (var c = this._eventListeners, e = 0;e < c.length;e++) {
            var b = c[e];
            b.type === a && b.listener(this, a);
          }
        }
      };
      b.prototype.addEventListener = function(a, c) {
        this._eventListeners || (this._eventListeners = []);
        this._eventListeners.push({type:a, listener:c});
      };
      b.prototype.removeEventListener = function(a, c) {
        for (var e = this._eventListeners, b = 0;b < e.length;b++) {
          var f = e[b];
          if (f.type === a && f.listener === c) {
            e.splice(b, 1);
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
        var c = this.getBounds(!0);
        if (a !== this && !c.isEmpty()) {
          var e = this.getTransform().getConcatenatedMatrix();
          a ? (a = a.getTransform().getInvertedConcatenatedMatrix(), a.preMultiply(e), a.transformRectangleAABB(c), a.free()) : e.transformRectangleAABB(c);
        }
        return c;
      };
      b.prototype._markCurrentBoundsAsDirtyRegion = function() {
      };
      b.prototype.getStage = function(a) {
        void 0 === a && (a = !0);
        for (var c = this._parent;c;) {
          if (c.isType(13)) {
            var e = c;
            if (a) {
              if (e.dirtyRegion) {
                return e;
              }
            } else {
              return e;
            }
          }
          c = c._parent;
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
      b.prototype.toggleFlags = function(a, c) {
        this._flags = c ? this._flags | a : this._flags & ~a;
      };
      b.prototype._propagateFlagsUp = function(a) {
        if (0 !== a && !this.hasFlags(a)) {
          this.hasFlags(2) || (a &= -257);
          this.setFlags(a);
          var c = this._parent;
          c && c._propagateFlagsUp(a);
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
      b._getAncestors = function(a, c) {
        var e = b._path;
        for (e.length = 0;a && a !== c;) {
          e.push(a), a = a._parent;
        }
        return e;
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
        null === this._transform && (this._transform = new c(this));
        return this._transform;
      };
      b.prototype.getLayer = function() {
        null === this._layer && (this._layer = new e(this));
        return this._layer;
      };
      b.prototype.visit = function(a, c) {
        switch(this._type) {
          case 1:
            a.visitNode(this, c);
            break;
          case 5:
            a.visitGroup(this, c);
            break;
          case 13:
            a.visitStage(this, c);
            break;
          case 3:
            a.visitShape(this, c);
            break;
          case 33:
            a.visitRenderable(this, c);
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
        var c = h[this._type] + " " + this._id;
        a && (c += " " + this._bounds.toString());
        return c;
      };
      b._path = [];
      b._nextId = 0;
      return b;
    }();
    r.Node = l;
    var u = function(c) {
      function d() {
        c.call(this);
        this._type = 5;
        this._children = [];
      }
      __extends(d, c);
      d.prototype.getChildren = function(a) {
        void 0 === a && (a = !1);
        return a ? this._children.slice(0) : this._children;
      };
      d.prototype.childAt = function(a) {
        return this._children[a];
      };
      Object.defineProperty(d.prototype, "child", {get:function() {
        return this._children[0];
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(d.prototype, "groupChild", {get:function() {
        return this._children[0];
      }, enumerable:!0, configurable:!0});
      d.prototype.addChild = function(d) {
        d._parent && d._parent.removeChildAt(d._index);
        d._parent = this;
        d._index = this._children.length;
        this._children.push(d);
        this._propagateFlagsUp(a.UpOnAddedOrRemoved);
        d._propagateFlagsDown(a.DownOnAddedOrRemoved);
      };
      d.prototype.removeChildAt = function(d) {
        var c = this._children[d];
        this._children.splice(d, 1);
        c._index = -1;
        c._parent = null;
        this._propagateFlagsUp(a.UpOnAddedOrRemoved);
        c._propagateFlagsDown(a.DownOnAddedOrRemoved);
      };
      d.prototype.clearChildren = function() {
        for (var d = 0;d < this._children.length;d++) {
          var c = this._children[d];
          c && (c._index = -1, c._parent = null, c._propagateFlagsDown(a.DownOnAddedOrRemoved));
        }
        this._children.length = 0;
        this._propagateFlagsUp(a.UpOnAddedOrRemoved);
      };
      d.prototype._propagateFlagsDown = function(a) {
        if (!this.hasFlags(a)) {
          this.setFlags(a);
          for (var d = this._children, c = 0;c < d.length;c++) {
            d[c]._propagateFlagsDown(a);
          }
        }
      };
      d.prototype.getBounds = function(a) {
        void 0 === a && (a = !1);
        var d = this._bounds || (this._bounds = g.createEmpty());
        if (this.hasFlags(256)) {
          d.setEmpty();
          for (var c = this._children, e = g.allocate(), b = 0;b < c.length;b++) {
            var f = c[b];
            e.set(f.getBounds());
            f.getTransformMatrix().transformRectangleAABB(e);
            d.union(e);
          }
          e.free();
          this.removeFlags(256);
        }
        return a ? d.clone() : d;
      };
      return d;
    }(l);
    r.Group = u;
    var c = function() {
      function c(a) {
        this._node = a;
        this._matrix = b.createIdentity();
        this._colorMatrix = r.ColorMatrix.createIdentity();
        this._concatenatedMatrix = b.createIdentity();
        this._invertedConcatenatedMatrix = b.createIdentity();
        this._concatenatedColorMatrix = r.ColorMatrix.createIdentity();
      }
      c.prototype.setMatrix = function(d) {
        this._matrix.isEqual(d) || (this._matrix.set(d), this._node._propagateFlagsUp(a.UpOnMoved), this._node._propagateFlagsDown(a.DownOnMoved));
      };
      c.prototype.setColorMatrix = function(d) {
        this._colorMatrix.set(d);
        this._node._propagateFlagsUp(a.UpOnColorMatrixChanged);
        this._node._propagateFlagsDown(a.DownOnColorMatrixChanged);
      };
      c.prototype.getMatrix = function(a) {
        void 0 === a && (a = !1);
        return a ? this._matrix.clone() : this._matrix;
      };
      c.prototype.hasColorMatrix = function() {
        return null !== this._colorMatrix;
      };
      c.prototype.getColorMatrix = function() {
        var a;
        void 0 === a && (a = !1);
        null === this._colorMatrix && (this._colorMatrix = r.ColorMatrix.createIdentity());
        return a ? this._colorMatrix.clone() : this._colorMatrix;
      };
      c.prototype.getConcatenatedMatrix = function(a) {
        void 0 === a && (a = !1);
        if (this._node.hasFlags(512)) {
          for (var c = this._node._findClosestAncestor(), e = l._getAncestors(this._node, c), f = c ? c.getTransform()._concatenatedMatrix.clone() : b.createIdentity(), h = e.length - 1;0 <= h;h--) {
            var c = e[h], g = c.getTransform();
            f.preMultiply(g._matrix);
            g._concatenatedMatrix.set(f);
            c.removeFlags(512);
          }
        }
        return a ? this._concatenatedMatrix.clone() : this._concatenatedMatrix;
      };
      c.prototype.getInvertedConcatenatedMatrix = function() {
        var a = !0;
        void 0 === a && (a = !1);
        this._node.hasFlags(1024) && (this.getConcatenatedMatrix().inverse(this._invertedConcatenatedMatrix), this._node.removeFlags(1024));
        return a ? this._invertedConcatenatedMatrix.clone() : this._invertedConcatenatedMatrix;
      };
      c.prototype.toString = function() {
        return this._matrix.toString();
      };
      return c;
    }();
    r.Transform = c;
    var e = function() {
      function a(d) {
        this._node = d;
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
      return a;
    }();
    r.Layer = e;
    m = function(a) {
      function d(d) {
        a.call(this);
        this._source = d;
        this._type = 3;
        this._ratio = 0;
      }
      __extends(d, a);
      d.prototype.getBounds = function(a) {
        void 0 === a && (a = !1);
        var d = this._bounds || (this._bounds = g.createEmpty());
        this.hasFlags(256) && (d.set(this._source.getBounds()), this.removeFlags(256));
        return a ? d.clone() : d;
      };
      Object.defineProperty(d.prototype, "source", {get:function() {
        return this._source;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(d.prototype, "ratio", {get:function() {
        return this._ratio;
      }, set:function(a) {
        a !== this._ratio && (this.invalidate(), this._ratio = a);
      }, enumerable:!0, configurable:!0});
      d.prototype._propagateFlagsDown = function(a) {
        this.setFlags(a);
      };
      d.prototype.getChildren = function(a) {
        return [this._source];
      };
      return d;
    }(l);
    r.Shape = m;
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
    p = function(a) {
      function d(d, c, e) {
        a.call(this);
        this._container = d;
        this._stage = c;
        this._options = e;
        this._viewport = g.createSquare();
        this._devicePixelRatio = 1;
      }
      __extends(d, a);
      Object.defineProperty(d.prototype, "viewport", {set:function(a) {
        this._viewport.set(a);
      }, enumerable:!0, configurable:!0});
      d.prototype.render = function() {
        throw void 0;
      };
      d.prototype.resize = function() {
        throw void 0;
      };
      d.prototype.screenShot = function(a, d, c) {
        throw void 0;
      };
      return d;
    }(p);
    r.Renderer = p;
    p = function(a) {
      function d(c, e, b) {
        void 0 === b && (b = !1);
        a.call(this);
        this._preVisitor = new t;
        this._flags &= -3;
        this._type = 13;
        this._scaleMode = d.DEFAULT_SCALE;
        this._align = d.DEFAULT_ALIGN;
        this._content = new u;
        this._content._flags &= -3;
        this.addChild(this._content);
        this.setFlags(16);
        this.setBounds(new g(0, 0, c, e));
        b ? (this._dirtyRegion = new v(c, e), this._dirtyRegion.addDirtyRectangle(new g(0, 0, c, e))) : this._dirtyRegion = null;
        this._updateContentMatrix();
      }
      __extends(d, a);
      Object.defineProperty(d.prototype, "dirtyRegion", {get:function() {
        return this._dirtyRegion;
      }, enumerable:!0, configurable:!0});
      d.prototype.setBounds = function(d) {
        a.prototype.setBounds.call(this, d);
        this._updateContentMatrix();
        this._dispatchEvent(1);
        this._dirtyRegion && (this._dirtyRegion = new v(d.w, d.h), this._dirtyRegion.addDirtyRectangle(d));
      };
      Object.defineProperty(d.prototype, "content", {get:function() {
        return this._content;
      }, enumerable:!0, configurable:!0});
      d.prototype.readyToRender = function() {
        this._preVisitor.isDirty = !1;
        this._preVisitor.start(this, this._dirtyRegion);
        return this._preVisitor.isDirty ? !0 : !1;
      };
      Object.defineProperty(d.prototype, "align", {get:function() {
        return this._align;
      }, set:function(a) {
        this._align = a;
        this._updateContentMatrix();
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(d.prototype, "scaleMode", {get:function() {
        return this._scaleMode;
      }, set:function(a) {
        this._scaleMode = a;
        this._updateContentMatrix();
      }, enumerable:!0, configurable:!0});
      d.prototype._updateContentMatrix = function() {
        if (this._scaleMode === d.DEFAULT_SCALE && this._align === d.DEFAULT_ALIGN) {
          this._content.getTransform().setMatrix(new b(1, 0, 0, 1, 0, 0));
        } else {
          var a = this.getBounds(), c = this._content.getBounds(), e = a.w / c.w, f = a.h / c.h;
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
          var h;
          h = this._align & 4 ? 0 : this._align & 8 ? a.w - c.w * e : (a.w - c.w * e) / 2;
          a = this._align & 1 ? 0 : this._align & 2 ? a.h - c.h * f : (a.h - c.h * f) / 2;
          this._content.getTransform().setMatrix(new b(e, 0, 0, f, h, a));
        }
      };
      d.DEFAULT_SCALE = 4;
      d.DEFAULT_ALIGN = 5;
      return d;
    }(u);
    r.Stage = p;
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    function g(a, c, d) {
      return a + (c - a) * d;
    }
    function b(a, c, d) {
      return g(a >> 24 & 255, c >> 24 & 255, d) << 24 | g(a >> 16 & 255, c >> 16 & 255, d) << 16 | g(a >> 8 & 255, c >> 8 & 255, d) << 8 | g(a & 255, c & 255, d);
    }
    var v = r.Geometry.Point, n = r.Geometry.Rectangle, a = r.Geometry.Matrix, h = k.ArrayUtilities.indexOf, p = function(a) {
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
        h(this._parents, a);
        this._parents.push(a);
      };
      c.prototype.willRender = function() {
        for (var a = this._parents, c = 0;c < a.length;c++) {
          for (var e = a[c];e;) {
            if (e.isType(13)) {
              return !0;
            }
            if (!e.hasFlags(65536)) {
              break;
            }
            e = e._parent;
          }
        }
        return !1;
      };
      c.prototype.addRenderableParent = function(a) {
        this._renderableParents.push(a);
      };
      c.prototype.wrap = function() {
        for (var a, c = this._parents, e = 0;e < c.length;e++) {
          if (a = c[e], !a._parent) {
            return a;
          }
        }
        a = new r.Shape(this);
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
        h(this._invalidateEventListeners, a);
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
      c.prototype.render = function(a, c, e, b, f) {
      };
      return c;
    }(r.Node);
    r.Renderable = p;
    var m = function(a) {
      function c(d, b) {
        a.call(this);
        this.setBounds(d);
        this.render = b;
      }
      __extends(c, a);
      return c;
    }(p);
    r.CustomRenderable = m;
    (function(a) {
      a[a.Idle = 1] = "Idle";
      a[a.Playing = 2] = "Playing";
      a[a.Paused = 3] = "Paused";
      a[a.Ended = 4] = "Ended";
    })(r.RenderableVideoState || (r.RenderableVideoState = {}));
    m = function(a) {
      function c(d, b) {
        a.call(this);
        this._flags = 1048592;
        this._lastPausedTime = this._lastTimeInvalidated = 0;
        this._pauseHappening = this._seekHappening = !1;
        this._isDOMElement = !0;
        this.setBounds(new n(0, 0, 1, 1));
        this._assetId = d;
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
        var c = null, e = this._video;
        switch(a.type) {
          case "play":
            if (!this._pauseHappening) {
              return;
            }
            a = 7;
            break;
          case "pause":
            if (2 === this._state) {
              e.play();
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
            c = {videoWidth:e.videoWidth, videoHeight:e.videoHeight, duration:e.duration};
            break;
          case "error":
            a = 11;
            c = {code:e.error.code};
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
        var e = this._video;
        switch(a) {
          case 1:
            e.src = c.url;
            this.play();
            this._notifyNetStream(0, null);
            break;
          case 9:
            e.paused && e.play();
            break;
          case 2:
            e && (c.paused && !e.paused ? (isNaN(c.time) ? this._lastPausedTime = e.currentTime : (0 !== e.seekable.length && (e.currentTime = c.time), this._lastPausedTime = c.time), this.pause()) : !c.paused && e.paused && (this.play(), isNaN(c.time) || this._lastPausedTime === c.time || 0 === e.seekable.length || (e.currentTime = c.time)));
            break;
          case 3:
            e && 0 !== e.seekable.length && (this._seekHappening = !0, e.currentTime = c.time);
            break;
          case 4:
            return e ? e.currentTime : 0;
          case 5:
            return e ? e.duration : 0;
          case 6:
            e && (e.volume = c.volume);
            break;
          case 7:
            if (!e) {
              return 0;
            }
            var b = -1;
            if (e.buffered) {
              for (var f = 0;f < e.buffered.length;f++) {
                b = Math.max(b, e.buffered.end(f));
              }
            } else {
              b = e.duration;
            }
            return Math.round(500 * b);
          case 8:
            return e ? Math.round(500 * e.duration) : 0;
        }
      };
      c.prototype.checkForUpdate = function() {
        this._lastTimeInvalidated !== this._video.currentTime && (this._isDOMElement || this.invalidate());
        this._lastTimeInvalidated = this._video.currentTime;
      };
      c.checkForVideoUpdates = function() {
        for (var a = c._renderableVideos, e = 0;e < a.length;e++) {
          var b = a[e];
          b.willRender() ? (b._video.parentElement || b.invalidate(), b._video.style.zIndex = b.parents[0].depth + "") : b._video.parentElement && b._dispatchEvent(2);
          a[e].checkForUpdate();
        }
      };
      c.prototype.render = function(a, c, e) {
        (c = this._video) && 0 < c.videoWidth && a.drawImage(c, 0, 0, c.videoWidth, c.videoHeight, 0, 0, this._bounds.w, this._bounds.h);
      };
      c._renderableVideos = [];
      return c;
    }(p);
    r.RenderableVideo = m;
    m = function(a) {
      function c(d, b) {
        a.call(this);
        this._flags = 1048592;
        this.properties = {};
        this.setBounds(b);
        d instanceof HTMLCanvasElement ? this._initializeSourceCanvas(d) : this._sourceImage = d;
      }
      __extends(c, a);
      c.FromDataBuffer = function(a, e, b) {
        var h = document.createElement("canvas");
        h.width = b.w;
        h.height = b.h;
        b = new c(h, b);
        b.updateFromDataBuffer(a, e);
        return b;
      };
      c.FromNode = function(a, e, b, h, l) {
        var g = document.createElement("canvas"), p = a.getBounds();
        g.width = p.w;
        g.height = p.h;
        g = new c(g, p);
        g.drawNode(a, e, b, h, l);
        return g;
      };
      c.FromImage = function(a) {
        return new c(a, new n(0, 0, -1, -1));
      };
      c.prototype.updateFromDataBuffer = function(a, c) {
        if (r.imageUpdateOption.value) {
          var e = c.buffer;
          if (4 !== a && 5 !== a && 6 !== a) {
            var b = this._bounds, f = this._imageData;
            f && f.width === b.w && f.height === b.h || (f = this._imageData = this._context.createImageData(b.w, b.h));
            r.imageConvertOption.value && (e = new Int32Array(e), b = new Int32Array(f.data.buffer), k.ColorUtilities.convertImage(a, 3, e, b));
            this._ensureSourceCanvas();
            this._context.putImageData(f, 0, 0);
          }
          this.invalidate();
        }
      };
      c.prototype.readImageData = function(a) {
        a.writeRawBytes(this.imageData.data);
      };
      c.prototype.render = function(a, c, e) {
        this.renderSource ? a.drawImage(this.renderSource, 0, 0) : this._renderFallback(a);
      };
      c.prototype.drawNode = function(a, c, e, b, f) {
        e = r.Canvas2D;
        b = this.getBounds();
        (new e.Canvas2DRenderer(this._canvas, null)).renderNode(a, f || b, c);
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
    }(p);
    r.RenderableBitmap = m;
    (function(a) {
      a[a.Fill = 0] = "Fill";
      a[a.Stroke = 1] = "Stroke";
      a[a.StrokeFill = 2] = "StrokeFill";
    })(r.PathType || (r.PathType = {}));
    var w = function() {
      return function(a, c, d, b) {
        this.type = a;
        this.style = c;
        this.smoothImage = d;
        this.strokeProperties = b;
        this.path = new Path2D;
      };
    }();
    r.StyledPath = w;
    var t = function() {
      return function(a, c, d, b, h) {
        this.thickness = a;
        this.scaleMode = c;
        this.capsStyle = d;
        this.jointsStyle = b;
        this.miterLimit = h;
      };
    }();
    r.StrokeProperties = t;
    var l = function(c) {
      function b(a, f, h, l) {
        c.call(this);
        this._flags = 6291472;
        this.properties = {};
        this.setBounds(l);
        this._id = a;
        this._pathData = f;
        this._textures = h;
        h.length && this.setFlags(1048576);
      }
      __extends(b, c);
      b.prototype.update = function(a, c, e) {
        this.setBounds(e);
        this._pathData = a;
        this._paths = null;
        this._textures = c;
        this.setFlags(1048576);
        this.invalidate();
      };
      b.prototype.render = function(a, c, e, b, f) {
        void 0 === b && (b = null);
        void 0 === f && (f = !1);
        a.fillStyle = a.strokeStyle = "transparent";
        c = this._deserializePaths(this._pathData, a, c);
        for (e = 0;e < c.length;e++) {
          var h = c[e];
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
      b.prototype._deserializePaths = function(a, c, e) {
        if (this._paths) {
          return this._paths;
        }
        e = this._paths = [];
        var h = null, l = null, g = 0, p = 0, m, n, u = !1, w = 0, r = 0, v = a.commands, H = a.coordinates, C = a.styles, y = C.position = 0;
        a = a.commandsPosition;
        for (var z = 0;z < a;z++) {
          switch(v[z]) {
            case 9:
              u && h && (h.lineTo(w, r), l && l.lineTo(w, r));
              u = !0;
              g = w = H[y++] / 20;
              p = r = H[y++] / 20;
              h && h.moveTo(g, p);
              l && l.moveTo(g, p);
              break;
            case 10:
              g = H[y++] / 20;
              p = H[y++] / 20;
              h && h.lineTo(g, p);
              l && l.lineTo(g, p);
              break;
            case 11:
              m = H[y++] / 20;
              n = H[y++] / 20;
              g = H[y++] / 20;
              p = H[y++] / 20;
              h && h.quadraticCurveTo(m, n, g, p);
              l && l.quadraticCurveTo(m, n, g, p);
              break;
            case 12:
              m = H[y++] / 20;
              n = H[y++] / 20;
              var B = H[y++] / 20, x = H[y++] / 20, g = H[y++] / 20, p = H[y++] / 20;
              h && h.bezierCurveTo(m, n, B, x, g, p);
              l && l.bezierCurveTo(m, n, B, x, g, p);
              break;
            case 1:
              h = this._createPath(0, k.ColorUtilities.rgbaToCSSStyle(C.readUnsignedInt()), !1, null, g, p);
              break;
            case 3:
              m = this._readBitmap(C, c);
              h = this._createPath(0, m.style, m.smoothImage, null, g, p);
              break;
            case 2:
              h = this._createPath(0, this._readGradient(C, c), !1, null, g, p);
              break;
            case 4:
              h = null;
              break;
            case 5:
              l = k.ColorUtilities.rgbaToCSSStyle(C.readUnsignedInt());
              C.position += 1;
              m = C.readByte();
              n = b.LINE_CAPS_STYLES[C.readByte()];
              B = b.LINE_JOINTS_STYLES[C.readByte()];
              m = new t(H[y++] / 20, m, n, B, C.readByte());
              l = this._createPath(1, l, !1, m, g, p);
              break;
            case 6:
              l = this._createPath(2, this._readGradient(C, c), !1, null, g, p);
              break;
            case 7:
              m = this._readBitmap(C, c);
              l = this._createPath(2, m.style, m.smoothImage, null, g, p);
              break;
            case 8:
              l = null;
          }
        }
        u && h && (h.lineTo(w, r), l && l.lineTo(w, r));
        this._pathData = null;
        return e;
      };
      b.prototype._createPath = function(a, c, e, b, f, h) {
        a = new w(a, c, e, b);
        this._paths.push(a);
        a.path.moveTo(f, h);
        return a.path;
      };
      b.prototype._readMatrix = function(d) {
        return new a(d.readFloat(), d.readFloat(), d.readFloat(), d.readFloat(), d.readFloat(), d.readFloat());
      };
      b.prototype._readGradient = function(a, c) {
        var e = a.readUnsignedByte(), b = 2 * a.readShort() / 255, f = this._readMatrix(a), e = 16 === e ? c.createLinearGradient(-1, 0, 1, 0) : c.createRadialGradient(b, 0, 0, 0, 0, 1);
        e.setTransform && e.setTransform(f.toSVGMatrix());
        f = a.readUnsignedByte();
        for (b = 0;b < f;b++) {
          var h = a.readUnsignedByte() / 255, l = k.ColorUtilities.rgbaToCSSStyle(a.readUnsignedInt());
          e.addColorStop(h, l);
        }
        a.position += 2;
        return e;
      };
      b.prototype._readBitmap = function(a, c) {
        var e = a.readUnsignedInt(), b = this._readMatrix(a), f = a.readBoolean() ? "repeat" : "no-repeat", h = a.readBoolean();
        (e = this._textures[e]) ? (f = c.createPattern(e.renderSource, f), f.setTransform(b.toSVGMatrix())) : f = null;
        return {style:f, smoothImage:h};
      };
      b.prototype._renderFallback = function(a) {
        this.fillStyle || (this.fillStyle = k.ColorStyle.randomStyle());
        var c = this._bounds;
        a.save();
        a.beginPath();
        a.lineWidth = 2;
        a.fillStyle = this.fillStyle;
        a.fillRect(c.x, c.y, c.w, c.h);
        a.restore();
      };
      b.LINE_CAPS_STYLES = ["round", "butt", "square"];
      b.LINE_JOINTS_STYLES = ["round", "bevel", "miter"];
      return b;
    }(p);
    r.RenderableShape = l;
    m = function(c) {
      function f() {
        c.apply(this, arguments);
        this._flags = 7340048;
        this._morphPaths = Object.create(null);
      }
      __extends(f, c);
      f.prototype._deserializePaths = function(a, c, e) {
        if (this._morphPaths[e]) {
          return this._morphPaths[e];
        }
        var f = this._morphPaths[e] = [], h = null, p = null, m = 0, n = 0, u, w, r = !1, v = 0, R = 0, H = a.commands, C = a.coordinates, y = a.morphCoordinates, z = a.styles, B = a.morphStyles;
        z.position = 0;
        var x = B.position = 0;
        a = a.commandsPosition;
        for (var F = 0;F < a;F++) {
          switch(H[F]) {
            case 9:
              r && h && (h.lineTo(v, R), p && p.lineTo(v, R));
              r = !0;
              m = v = g(C[x], y[x++], e) / 20;
              n = R = g(C[x], y[x++], e) / 20;
              h && h.moveTo(m, n);
              p && p.moveTo(m, n);
              break;
            case 10:
              m = g(C[x], y[x++], e) / 20;
              n = g(C[x], y[x++], e) / 20;
              h && h.lineTo(m, n);
              p && p.lineTo(m, n);
              break;
            case 11:
              u = g(C[x], y[x++], e) / 20;
              w = g(C[x], y[x++], e) / 20;
              m = g(C[x], y[x++], e) / 20;
              n = g(C[x], y[x++], e) / 20;
              h && h.quadraticCurveTo(u, w, m, n);
              p && p.quadraticCurveTo(u, w, m, n);
              break;
            case 12:
              u = g(C[x], y[x++], e) / 20;
              w = g(C[x], y[x++], e) / 20;
              var A = g(C[x], y[x++], e) / 20, E = g(C[x], y[x++], e) / 20, m = g(C[x], y[x++], e) / 20, n = g(C[x], y[x++], e) / 20;
              h && h.bezierCurveTo(u, w, A, E, m, n);
              p && p.bezierCurveTo(u, w, A, E, m, n);
              break;
            case 1:
              h = this._createMorphPath(0, e, k.ColorUtilities.rgbaToCSSStyle(b(z.readUnsignedInt(), B.readUnsignedInt(), e)), !1, null, m, n);
              break;
            case 3:
              u = this._readMorphBitmap(z, B, e, c);
              h = this._createMorphPath(0, e, u.style, u.smoothImage, null, m, n);
              break;
            case 2:
              u = this._readMorphGradient(z, B, e, c);
              h = this._createMorphPath(0, e, u, !1, null, m, n);
              break;
            case 4:
              h = null;
              break;
            case 5:
              u = g(C[x], y[x++], e) / 20;
              p = k.ColorUtilities.rgbaToCSSStyle(b(z.readUnsignedInt(), B.readUnsignedInt(), e));
              z.position += 1;
              w = z.readByte();
              A = l.LINE_CAPS_STYLES[z.readByte()];
              E = l.LINE_JOINTS_STYLES[z.readByte()];
              u = new t(u, w, A, E, z.readByte());
              p = this._createMorphPath(1, e, p, !1, u, m, n);
              break;
            case 6:
              u = this._readMorphGradient(z, B, e, c);
              p = this._createMorphPath(2, e, u, !1, null, m, n);
              break;
            case 7:
              u = this._readMorphBitmap(z, B, e, c);
              p = this._createMorphPath(2, e, u.style, u.smoothImage, null, m, n);
              break;
            case 8:
              p = null;
          }
        }
        r && h && (h.lineTo(v, R), p && p.lineTo(v, R));
        return f;
      };
      f.prototype._createMorphPath = function(a, c, e, b, f, h, l) {
        a = new w(a, e, b, f);
        this._morphPaths[c].push(a);
        a.path.moveTo(h, l);
        return a.path;
      };
      f.prototype._readMorphMatrix = function(d, c, e) {
        return new a(g(d.readFloat(), c.readFloat(), e), g(d.readFloat(), c.readFloat(), e), g(d.readFloat(), c.readFloat(), e), g(d.readFloat(), c.readFloat(), e), g(d.readFloat(), c.readFloat(), e), g(d.readFloat(), c.readFloat(), e));
      };
      f.prototype._readMorphGradient = function(a, c, e, f) {
        var h = a.readUnsignedByte(), l = 2 * a.readShort() / 255, p = this._readMorphMatrix(a, c, e);
        f = 16 === h ? f.createLinearGradient(-1, 0, 1, 0) : f.createRadialGradient(l, 0, 0, 0, 0, 1);
        f.setTransform && f.setTransform(p.toSVGMatrix());
        p = a.readUnsignedByte();
        for (h = 0;h < p;h++) {
          var l = g(a.readUnsignedByte() / 255, c.readUnsignedByte() / 255, e), m = b(a.readUnsignedInt(), c.readUnsignedInt(), e), m = k.ColorUtilities.rgbaToCSSStyle(m);
          f.addColorStop(l, m);
        }
        a.position += 2;
        return f;
      };
      f.prototype._readMorphBitmap = function(a, c, e, b) {
        var f = a.readUnsignedInt();
        c = this._readMorphMatrix(a, c, e);
        e = a.readBoolean() ? "repeat" : "no-repeat";
        a = a.readBoolean();
        b = b.createPattern(this._textures[f]._canvas, e);
        b.setTransform(c.toSVGMatrix());
        return {style:b, smoothImage:a};
      };
      return f;
    }(l);
    r.RenderableMorphShape = m;
    var u = function() {
      function a() {
        this.align = this.leading = this.descent = this.ascent = this.width = this.y = this.x = 0;
        this.runs = [];
      }
      a._getMeasureContext = function() {
        a._measureContext || (a._measureContext = document.createElement("canvas").getContext("2d"));
        return a._measureContext;
      };
      a.prototype.addRun = function(b, d, h, l) {
        if (h) {
          var g = a._getMeasureContext();
          g.font = b;
          g = g.measureText(h).width | 0;
          this.runs.push(new c(b, d, h, g, l));
          this.width += g;
        }
      };
      a.prototype.wrap = function(b) {
        var d = [this], h = this.runs, l = this;
        l.width = 0;
        l.runs = [];
        for (var g = a._getMeasureContext(), p = 0;p < h.length;p++) {
          var m = h[p], k = m.text;
          m.text = "";
          m.width = 0;
          g.font = m.font;
          for (var t = b, n = k.split(/[\s.-]/), u = 0, w = 0;w < n.length;w++) {
            var r = n[w], v = k.substr(u, r.length + 1), H = g.measureText(v).width | 0;
            if (H > t) {
              do {
                if (m.text && (l.runs.push(m), l.width += m.width, m = new c(m.font, m.fillStyle, "", 0, m.underline), t = new a, t.y = l.y + l.descent + l.leading + l.ascent | 0, t.ascent = l.ascent, t.descent = l.descent, t.leading = l.leading, t.align = l.align, d.push(t), l = t), t = b - H, 0 > t) {
                  for (var C = v.length, y = v;1 < C && !(C--, y = v.substr(0, C), H = g.measureText(y).width | 0, H <= b);) {
                  }
                  m.text = y;
                  m.width = H;
                  v = v.substr(C);
                  H = g.measureText(v).width | 0;
                }
              } while (v && 0 > t);
            } else {
              t -= H;
            }
            m.text += v;
            m.width += H;
            u += r.length + 1;
          }
          l.runs.push(m);
          l.width += m.width;
        }
        return d;
      };
      a.prototype.toString = function() {
        return "TextLine {x: " + this.x + ", y: " + this.y + ", width: " + this.width + ", height: " + (this.ascent + this.descent + this.leading) + "}";
      };
      return a;
    }();
    r.TextLine = u;
    var c = function() {
      return function(a, c, d, b, h) {
        void 0 === a && (a = "");
        void 0 === c && (c = "");
        void 0 === d && (d = "");
        void 0 === b && (b = 0);
        void 0 === h && (h = !1);
        this.font = a;
        this.fillStyle = c;
        this.text = d;
        this.width = b;
        this.underline = h;
      };
    }();
    r.TextRun = c;
    m = function(c) {
      function b(d) {
        c.call(this);
        this._flags = 1048592;
        this.properties = {};
        this._textBounds = d.clone();
        this._textRunData = null;
        this._plainText = "";
        this._borderColor = this._backgroundColor = 0;
        this._matrix = a.createIdentity();
        this._coords = null;
        this._scrollV = 1;
        this._scrollH = 0;
        this.textRect = d.clone();
        this.lines = [];
        this.setBounds(d);
      }
      __extends(b, c);
      b.prototype.setBounds = function(a) {
        c.prototype.setBounds.call(this, a);
        this._textBounds.set(a);
        this.textRect.setElements(a.x + 2, a.y + 2, a.w - 2, a.h - 2);
      };
      b.prototype.setContent = function(a, c, e, b) {
        this._textRunData = c;
        this._plainText = a;
        this._matrix.set(e);
        this._coords = b;
        this.lines = [];
      };
      b.prototype.setStyle = function(a, c, e, b) {
        this._backgroundColor = a;
        this._borderColor = c;
        this._scrollV = e;
        this._scrollH = b;
      };
      b.prototype.reflow = function(a, c) {
        var e = this._textRunData;
        if (e) {
          for (var b = this._bounds, f = b.w - 4, h = this._plainText, l = this.lines, g = new u, p = 0, m = 0, t = 0, n = 0, w = 0, r = -1;e.position < e.length;) {
            var v = e.readInt(), y = e.readInt(), z = e.readInt(), B = e.readUTF(), x = e.readInt(), F = e.readInt(), A = e.readInt();
            x > t && (t = x);
            F > n && (n = F);
            A > w && (w = A);
            x = e.readBoolean();
            F = "";
            e.readBoolean() && (F += "italic ");
            x && (F += "bold ");
            z = F + z + "px " + B;
            B = e.readInt();
            B = k.ColorUtilities.rgbToHex(B);
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
              A = h[v];
              if ("\r" !== A && "\n" !== A && (E += A, v < h.length - 1)) {
                continue;
              }
              g.addRun(z, B, E, x);
              if (g.runs.length) {
                l.length && (p += w);
                p += t;
                g.y = p | 0;
                p += n;
                g.ascent = t;
                g.descent = n;
                g.leading = w;
                g.align = r;
                if (c && g.width > f) {
                  for (g = g.wrap(f), E = 0;E < g.length;E++) {
                    var I = g[E], p = I.y + I.descent + I.leading;
                    l.push(I);
                    I.width > m && (m = I.width);
                  }
                } else {
                  l.push(g), g.width > m && (m = g.width);
                }
                g = new u;
              } else {
                p += t + n + w;
              }
              E = "";
              if (F) {
                w = n = t = 0;
                r = -1;
                break;
              }
              "\r" === A && "\n" === h[v + 1] && v++;
            }
            g.addRun(z, B, E, x);
          }
          e = h[h.length - 1];
          "\r" !== e && "\n" !== e || l.push(g);
          e = this.textRect;
          e.w = m;
          e.h = p;
          if (a) {
            if (!c) {
              f = m;
              m = b.w;
              switch(a) {
                case 1:
                  e.x = m - (f + 4) >> 1;
                  break;
                case 3:
                  e.x = m - (f + 4);
              }
              this._textBounds.setElements(e.x - 2, e.y - 2, e.w + 4, e.h + 4);
              b.w = f + 4;
            }
            b.x = e.x - 2;
            b.h = p + 4;
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
        for (var c = 0;c < a.length;c++) {
          var e = a[c];
          e.x = Math.floor(e.x + .1) + .5;
          e.y = Math.floor(e.y + .1) + .5;
        }
      };
      b.prototype.render = function(d) {
        d.save();
        var c = this._textBounds;
        this._backgroundColor && (d.fillStyle = k.ColorUtilities.rgbaToCSSStyle(this._backgroundColor), d.fillRect(c.x, c.y, c.w, c.h));
        if (this._borderColor) {
          d.strokeStyle = k.ColorUtilities.rgbaToCSSStyle(this._borderColor);
          d.lineCap = "square";
          d.lineWidth = 1;
          var e = b.absoluteBoundPoints, h = d.currentTransform;
          h ? (c = c.clone(), (new a(h.a, h.b, h.c, h.d, h.e, h.f)).transformRectangle(c, e), d.setTransform(1, 0, 0, 1, 0, 0)) : (e[0].x = c.x, e[0].y = c.y, e[1].x = c.x + c.w, e[1].y = c.y, e[2].x = c.x + c.w, e[2].y = c.y + c.h, e[3].x = c.x, e[3].y = c.y + c.h);
          b.roundBoundPoints(e);
          c = new Path2D;
          c.moveTo(e[0].x, e[0].y);
          c.lineTo(e[1].x, e[1].y);
          c.lineTo(e[2].x, e[2].y);
          c.lineTo(e[3].x, e[3].y);
          c.lineTo(e[0].x, e[0].y);
          d.stroke(c);
          h && d.setTransform(h.a, h.b, h.c, h.d, h.e, h.f);
        }
        this._coords ? this._renderChars(d) : this._renderLines(d);
        d.restore();
      };
      b.prototype._renderChars = function(a) {
        if (this._matrix) {
          var c = this._matrix;
          a.transform(c.a, c.b, c.c, c.d, c.tx, c.ty);
        }
        for (var c = this.lines, e = this._coords, b = e.position = 0;b < c.length;b++) {
          for (var f = c[b].runs, h = 0;h < f.length;h++) {
            var l = f[h];
            a.font = l.font;
            a.fillStyle = l.fillStyle;
            for (var l = l.text, g = 0;g < l.length;g++) {
              var p = e.readInt() / 20, m = e.readInt() / 20;
              a.fillText(l[g], p, m);
            }
          }
        }
      };
      b.prototype._renderLines = function(a) {
        var c = this._textBounds;
        a.beginPath();
        a.rect(c.x + 2, c.y + 2, c.w - 4, c.h - 4);
        a.clip();
        a.translate(c.x - this._scrollH + 2, c.y + 2);
        for (var e = this.lines, b = this._scrollV, f = 0, h = 0;h < e.length;h++) {
          var l = e[h], g = l.x, p = l.y;
          if (h + 1 < b) {
            f = p + l.descent + l.leading;
          } else {
            p -= f;
            if (h + 1 - b && p > c.h) {
              break;
            }
            for (var m = l.runs, k = 0;k < m.length;k++) {
              var t = m[k];
              a.font = t.font;
              a.fillStyle = t.fillStyle;
              t.underline && a.fillRect(g, p + l.descent / 2 | 0, t.width, 1);
              a.textAlign = "left";
              a.textBaseline = "alphabetic";
              a.fillText(t.text, g, p);
              g += t.width;
            }
          }
        }
      };
      b.absoluteBoundPoints = [new v(0, 0), new v(0, 0), new v(0, 0), new v(0, 0)];
      return b;
    }(p);
    r.RenderableText = m;
    p = function(a) {
      function c(d, b) {
        a.call(this);
        this._flags = 3145728;
        this.properties = {};
        this.setBounds(new n(0, 0, d, b));
      }
      __extends(c, a);
      Object.defineProperty(c.prototype, "text", {get:function() {
        return this._text;
      }, set:function(a) {
        this._text = a;
      }, enumerable:!0, configurable:!0});
      c.prototype.render = function(a, c, e) {
        a.save();
        a.textBaseline = "top";
        a.fillStyle = "white";
        a.fillText(this.text, 0, 0);
        a.restore();
      };
      return c;
    }(p);
    r.Label = p;
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
      function a(a, g, m) {
        b.call(this);
        this.blurX = a;
        this.blurY = g;
        this.quality = m;
      }
      __extends(a, b);
      return a;
    }(b);
    r.BlurFilter = v;
    v = function(b) {
      function a(a, g, m, k, t, l, u, c, e, f, d) {
        b.call(this);
        this.alpha = a;
        this.angle = g;
        this.blurX = m;
        this.blurY = k;
        this.color = t;
        this.distance = l;
        this.hideObject = u;
        this.inner = c;
        this.knockout = e;
        this.quality = f;
        this.strength = d;
      }
      __extends(a, b);
      return a;
    }(b);
    r.DropshadowFilter = v;
    b = function(b) {
      function a(a, g, m, k, t, l, u, c) {
        b.call(this);
        this.alpha = a;
        this.blurX = g;
        this.blurY = m;
        this.color = k;
        this.inner = t;
        this.knockout = l;
        this.quality = u;
        this.strength = c;
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
      b.prototype.setMultipliersAndOffsets = function(a, b, g, m, k, t, l, n) {
        for (var c = this._data, e = 0;e < c.length;e++) {
          c[e] = 0;
        }
        c[0] = a;
        c[5] = b;
        c[10] = g;
        c[15] = m;
        c[16] = k / 255;
        c[17] = t / 255;
        c[18] = l / 255;
        c[19] = n / 255;
        this._type = 0;
      };
      b.prototype.transformRGBA = function(a) {
        var b = a >> 24 & 255, p = a >> 16 & 255, m = a >> 8 & 255, k = a & 255, t = this._data;
        a = g(b * t[0] + p * t[1] + m * t[2] + k * t[3] + 255 * t[16]);
        var l = g(b * t[4] + p * t[5] + m * t[6] + k * t[7] + 255 * t[17]), n = g(b * t[8] + p * t[9] + m * t[10] + k * t[11] + 255 * t[18]), b = g(b * t[12] + p * t[13] + m * t[14] + k * t[15] + 255 * t[19]);
        return a << 24 | l << 16 | n << 8 | b;
      };
      b.prototype.multiply = function(a) {
        if (!(a._type & 1)) {
          var b = this._data, g = a._data;
          a = b[0];
          var m = b[1], k = b[2], t = b[3], l = b[4], n = b[5], c = b[6], e = b[7], f = b[8], d = b[9], q = b[10], r = b[11], J = b[12], G = b[13], v = b[14], S = b[15], ea = b[16], ha = b[17], ia = b[18], ja = b[19], X = g[0], R = g[1], H = g[2], C = g[3], y = g[4], z = g[5], B = g[6], x = g[7], F = g[8], A = g[9], E = g[10], I = g[11], K = g[12], L = g[13], M = g[14], N = g[15], O = g[16], P = g[17], Q = g[18], g = g[19];
          b[0] = a * X + l * R + f * H + J * C;
          b[1] = m * X + n * R + d * H + G * C;
          b[2] = k * X + c * R + q * H + v * C;
          b[3] = t * X + e * R + r * H + S * C;
          b[4] = a * y + l * z + f * B + J * x;
          b[5] = m * y + n * z + d * B + G * x;
          b[6] = k * y + c * z + q * B + v * x;
          b[7] = t * y + e * z + r * B + S * x;
          b[8] = a * F + l * A + f * E + J * I;
          b[9] = m * F + n * A + d * E + G * I;
          b[10] = k * F + c * A + q * E + v * I;
          b[11] = t * F + e * A + r * E + S * I;
          b[12] = a * K + l * L + f * M + J * N;
          b[13] = m * K + n * L + d * M + G * N;
          b[14] = k * K + c * L + q * M + v * N;
          b[15] = t * K + e * L + r * M + S * N;
          b[16] = a * O + l * P + f * Q + J * g + ea;
          b[17] = m * O + n * P + d * Q + G * g + ha;
          b[18] = k * O + c * P + q * Q + v * g + ia;
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
      var v = r.Geometry.Point3D, n = r.Geometry.Matrix3D, a = r.Geometry.degreesToRadian, h = k.Debug.unexpected, p = k.Debug.notImplemented;
      g.SHADER_ROOT = "shaders/";
      var m = function() {
        function m(a, b) {
          this._fillColor = k.Color.Red;
          this._surfaceRegionCache = new k.LRUList;
          this.modelViewProjectionMatrix = n.createIdentity();
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
          this.modelViewProjectionMatrix = n.create2DProjection(this._w, this._h, 2E3);
          var h = this;
          this._surfaceRegionAllocator = new r.SurfaceRegionAllocator.SimpleAllocator(function() {
            var a = h._createTexture();
            return new g.WebGLSurface(1024, 1024, a);
          });
        }
        Object.defineProperty(m.prototype, "surfaces", {get:function() {
          return this._surfaceRegionAllocator.surfaces;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(m.prototype, "fillStyle", {set:function(a) {
          this._fillColor.set(k.Color.parseColor(a));
        }, enumerable:!0, configurable:!0});
        m.prototype.setBlendMode = function(a) {
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
              p("Blend Mode: " + a);
          }
        };
        m.prototype.setBlendOptions = function() {
          this.gl.blendFunc(this._options.sourceBlendFactor, this._options.destinationBlendFactor);
        };
        m.glSupportedBlendMode = function(a) {
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
        m.prototype.create2DProjectionMatrix = function() {
          return n.create2DProjection(this._w, this._h, -this._w);
        };
        m.prototype.createPerspectiveMatrix = function(b, h, g) {
          g = a(g);
          h = n.createPerspective(a(h));
          var c = new v(0, 1, 0), e = new v(0, 0, 0);
          b = new v(0, 0, b);
          b = n.createCameraLookAt(b, e, c);
          b = n.createInverse(b);
          c = n.createIdentity();
          c = n.createMultiply(c, n.createTranslation(-this._w / 2, -this._h / 2));
          c = n.createMultiply(c, n.createScale(1 / this._w, -1 / this._h, .01));
          c = n.createMultiply(c, n.createYRotation(g));
          c = n.createMultiply(c, b);
          return c = n.createMultiply(c, h);
        };
        m.prototype.discardCachedImages = function() {
          2 <= r.traceLevel && r.writer && r.writer.writeLn("Discard Cache");
          for (var a = this._surfaceRegionCache.count / 2 | 0, b = 0;b < a;b++) {
            var h = this._surfaceRegionCache.pop();
            2 <= r.traceLevel && r.writer && r.writer.writeLn("Discard: " + h);
            h.texture.atlas.remove(h.region);
            h.texture = null;
          }
        };
        m.prototype.cacheImage = function(a) {
          var b = this.allocateSurfaceRegion(a.width, a.height);
          2 <= r.traceLevel && r.writer && r.writer.writeLn("Uploading Image: @ " + b.region);
          this._surfaceRegionCache.use(b);
          this.updateSurfaceRegion(a, b);
          return b;
        };
        m.prototype.allocateSurfaceRegion = function(a, b) {
          return this._surfaceRegionAllocator.allocate(a, b, null);
        };
        m.prototype.updateSurfaceRegion = function(a, b) {
          var h = this.gl;
          h.bindTexture(h.TEXTURE_2D, b.surface.texture);
          h.texSubImage2D(h.TEXTURE_2D, 0, b.region.x, b.region.y, h.RGBA, h.UNSIGNED_BYTE, a);
        };
        m.prototype._resize = function() {
          var a = this.gl;
          this._w = this._canvas.width;
          this._h = this._canvas.height;
          a.viewport(0, 0, this._w, this._h);
          for (var b in this._programCache) {
            this._initializeProgram(this._programCache[b]);
          }
        };
        m.prototype._initializeProgram = function(a) {
          this.gl.useProgram(a);
        };
        m.prototype._createShaderFromFile = function(a) {
          var h = g.SHADER_ROOT + a, m = this.gl;
          a = new XMLHttpRequest;
          a.open("GET", h, !1);
          a.send();
          if (b(h, ".vert")) {
            h = m.VERTEX_SHADER;
          } else {
            if (b(h, ".frag")) {
              h = m.FRAGMENT_SHADER;
            } else {
              throw "Shader Type: not supported.";
            }
          }
          return this._createShader(h, a.responseText);
        };
        m.prototype.createProgramFromFiles = function() {
          var a = this._programCache["combined.vert-combined.frag"];
          a || (a = this._createProgram([this._createShaderFromFile("combined.vert"), this._createShaderFromFile("combined.frag")]), this._queryProgramAttributesAndUniforms(a), this._initializeProgram(a), this._programCache["combined.vert-combined.frag"] = a);
          return a;
        };
        m.prototype._createProgram = function(a) {
          var b = this.gl, g = b.createProgram();
          a.forEach(function(a) {
            b.attachShader(g, a);
          });
          b.linkProgram(g);
          b.getProgramParameter(g, b.LINK_STATUS) || (h("Cannot link program: " + b.getProgramInfoLog(g)), b.deleteProgram(g));
          return g;
        };
        m.prototype._createShader = function(a, b) {
          var g = this.gl, c = g.createShader(a);
          g.shaderSource(c, b);
          g.compileShader(c);
          return g.getShaderParameter(c, g.COMPILE_STATUS) ? c : (h("Cannot compile shader: " + g.getShaderInfoLog(c)), g.deleteShader(c), null);
        };
        m.prototype._createTexture = function() {
          var a = this.gl, b = a.createTexture();
          a.bindTexture(a.TEXTURE_2D, b);
          a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE);
          a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE);
          a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR);
          a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR);
          a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, 1024, 1024, 0, a.RGBA, a.UNSIGNED_BYTE, null);
          return b;
        };
        m.prototype._createFramebuffer = function(a) {
          var b = this.gl, h = b.createFramebuffer();
          b.bindFramebuffer(b.FRAMEBUFFER, h);
          b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, a, 0);
          b.bindFramebuffer(b.FRAMEBUFFER, null);
          return h;
        };
        m.prototype._queryProgramAttributesAndUniforms = function(a) {
          a.uniforms = {};
          a.attributes = {};
          for (var b = this.gl, h = 0, c = b.getProgramParameter(a, b.ACTIVE_ATTRIBUTES);h < c;h++) {
            var e = b.getActiveAttrib(a, h);
            a.attributes[e.name] = e;
            e.location = b.getAttribLocation(a, e.name);
          }
          h = 0;
          for (c = b.getProgramParameter(a, b.ACTIVE_UNIFORMS);h < c;h++) {
            e = b.getActiveUniform(a, h), a.uniforms[e.name] = e, e.location = b.getUniformLocation(a, e.name);
          }
        };
        Object.defineProperty(m.prototype, "target", {set:function(a) {
          var b = this.gl;
          a ? (b.viewport(0, 0, a.w, a.h), b.bindFramebuffer(b.FRAMEBUFFER, a.framebuffer)) : (b.viewport(0, 0, this._w, this._h), b.bindFramebuffer(b.FRAMEBUFFER, null));
        }, enumerable:!0, configurable:!0});
        m.prototype.clear = function(a) {
          a = this.gl;
          a.clearColor(0, 0, 0, 0);
          a.clear(a.COLOR_BUFFER_BIT);
        };
        m.prototype.clearTextureRegion = function(a, b) {
          void 0 === b && (b = k.Color.None);
          var h = this.gl, c = a.region;
          this.target = a.surface;
          h.enable(h.SCISSOR_TEST);
          h.scissor(c.x, c.y, c.w, c.h);
          h.clearColor(b.r, b.g, b.b, b.a);
          h.clear(h.COLOR_BUFFER_BIT | h.DEPTH_BUFFER_BIT);
          h.disable(h.SCISSOR_TEST);
        };
        m.prototype.sizeOf = function(a) {
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
              p(a);
          }
        };
        m.MAX_SURFACES = 8;
        return m;
      }();
      g.WebGLContext = m;
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
        return function(a, b, g, m) {
          void 0 === m && (m = !1);
          this.name = a;
          this.size = b;
          this.type = g;
          this.normalized = m;
        };
      }();
      var n = function() {
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
      g.WebGLAttributeList = n;
      n = function() {
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
      g.WebGLGeometry = n;
      n = function(a) {
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
      g.Vertex = n;
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
      var v = r.Geometry.Matrix, n = r.Geometry.Rectangle, a = function(a) {
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
        function k(b, m, l) {
          void 0 === l && (l = new a);
          h.call(this, b, m, l);
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
          this._viewport = new n(0, 0, this._canvas.width, this._canvas.height);
          this._context._resize();
        };
        k.prototype._cacheImageCallback = function(a, b, h) {
          var g = h.w, c = h.h, e = h.x;
          h = h.y;
          this._uploadCanvas.width = g + 2;
          this._uploadCanvas.height = c + 2;
          this._uploadCanvasContext.drawImage(b.canvas, e, h, g, c, 1, 1, g, c);
          this._uploadCanvasContext.drawImage(b.canvas, e, h, g, 1, 1, 0, g, 1);
          this._uploadCanvasContext.drawImage(b.canvas, e, h + c - 1, g, 1, 1, c + 1, g, 1);
          this._uploadCanvasContext.drawImage(b.canvas, e, h, 1, c, 0, 1, 1, c);
          this._uploadCanvasContext.drawImage(b.canvas, e + g - 1, h, 1, c, g + 1, 1, 1, c);
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
            var c = l.surfaces, l = v.createIdentity();
            if (0 <= h.drawSurface && h.drawSurface < c.length) {
              for (var h = c[h.drawSurface | 0], c = new n(0, 0, h.w, h.h), e = c.clone();e.w > k.w;) {
                e.scale(.5, .5);
              }
              a.drawImage(new g.WebGLSurfaceRegion(h, c), e, b.White, null, l, .2);
            } else {
              e = k.w / 5;
              e > k.h / c.length && (e = k.h / c.length);
              a.fillRectangle(new n(k.w - e, 0, e, k.h), new b(0, 0, 0, .5), l, .1);
              for (var f = 0;f < c.length;f++) {
                var h = c[f], d = new n(k.w - e, f * e, e, e);
                a.drawImage(new g.WebGLSurfaceRegion(h, new n(0, 0, h.w, h.h)), d, b.White, null, l, .2);
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
      var b = k.Color, v = r.Geometry.Point, n = r.Geometry.Matrix3D, a = function() {
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
        b.prototype.drawImage = function(a, h, g, k, c, e, f) {
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
          var d = b._tmpVertices, p = a.region.clone();
          p.offset(1, 1).resize(-2, -2);
          p.scale(1 / a.surface.w, 1 / a.surface.h);
          c.transformRectangle(h, d);
          for (a = 0;4 > a;a++) {
            d[a].z = e;
          }
          d[0].coordinate.x = p.x;
          d[0].coordinate.y = p.y;
          d[1].coordinate.x = p.x + p.w;
          d[1].coordinate.y = p.y;
          d[2].coordinate.x = p.x + p.w;
          d[2].coordinate.y = p.y + p.h;
          d[3].coordinate.x = p.x;
          d[3].coordinate.y = p.y + p.h;
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
          this._target ? (k = n.create2DProjection(this._target.w, this._target.h, 2E3), k = n.createMultiply(k, n.createScale(1, -1, 1))) : k = this._context.modelViewProjectionMatrix;
          g.uniformMatrix4fv(b.uniforms.uTransformMatrix3D.location, !1, k.asWebGLMatrix());
          this._colorMatrix && (g.uniformMatrix4fv(b.uniforms.uColorMatrix.location, !1, this._colorMatrix.asWebGLMatrix()), g.uniform4fv(b.uniforms.uColorVector.location, this._colorMatrix.asWebGLVector()));
          for (k = 0;k < this._surfaces.length;k++) {
            g.activeTexture(g.TEXTURE0 + k), g.bindTexture(g.TEXTURE_2D, this._surfaces[k].texture);
          }
          g.uniform1iv(b.uniforms["uSampler[0]"].location, [0, 1, 2, 3, 4, 5, 6, 7]);
          g.bindBuffer(g.ARRAY_BUFFER, a.buffer);
          var c = h.attributeList.size, e = h.attributeList.attributes;
          for (k = 0;k < e.length;k++) {
            var f = e[k], d = b.attributes[f.name].location;
            g.enableVertexAttribArray(d);
            g.vertexAttribPointer(d, f.size, f.type, f.normalized, c, f.offset);
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
      var b = CanvasRenderingContext2D.prototype.save, k = CanvasRenderingContext2D.prototype.clip, n = CanvasRenderingContext2D.prototype.fill, a = CanvasRenderingContext2D.prototype.stroke, h = CanvasRenderingContext2D.prototype.restore, p = CanvasRenderingContext2D.prototype.beginPath;
      g.notifyReleaseChanged = function() {
        CanvasRenderingContext2D.prototype.save = b;
        CanvasRenderingContext2D.prototype.clip = k;
        CanvasRenderingContext2D.prototype.fill = n;
        CanvasRenderingContext2D.prototype.stroke = a;
        CanvasRenderingContext2D.prototype.restore = h;
        CanvasRenderingContext2D.prototype.beginPath = p;
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
      var n = function() {
        function a() {
        }
        a._prepareSVGFilters = function() {
          if (!a._svgBlurFilter) {
            var b = document.createElementNS("http://www.w3.org/2000/svg", "svg"), g = document.createElementNS("http://www.w3.org/2000/svg", "defs"), k = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            k.setAttribute("id", "svgBlurFilter");
            var n = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
            n.setAttribute("stdDeviation", "0 0");
            k.appendChild(n);
            g.appendChild(k);
            a._svgBlurFilter = n;
            k = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            k.setAttribute("id", "svgDropShadowFilter");
            n = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
            n.setAttribute("in", "SourceAlpha");
            n.setAttribute("stdDeviation", "3");
            k.appendChild(n);
            a._svgDropshadowFilterBlur = n;
            n = document.createElementNS("http://www.w3.org/2000/svg", "feOffset");
            n.setAttribute("dx", "0");
            n.setAttribute("dy", "0");
            n.setAttribute("result", "offsetblur");
            k.appendChild(n);
            a._svgDropshadowFilterOffset = n;
            n = document.createElementNS("http://www.w3.org/2000/svg", "feFlood");
            n.setAttribute("flood-color", "rgba(0,0,0,1)");
            k.appendChild(n);
            a._svgDropshadowFilterFlood = n;
            n = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
            n.setAttribute("in2", "offsetblur");
            n.setAttribute("operator", "in");
            k.appendChild(n);
            var n = document.createElementNS("http://www.w3.org/2000/svg", "feMerge"), l = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
            n.appendChild(l);
            l = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
            l.setAttribute("in", "SourceGraphic");
            n.appendChild(l);
            k.appendChild(n);
            g.appendChild(k);
            k = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            k.setAttribute("id", "svgColorMatrixFilter");
            n = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
            n.setAttribute("color-interpolation-filters", "sRGB");
            n.setAttribute("in", "SourceGraphic");
            n.setAttribute("type", "matrix");
            k.appendChild(n);
            g.appendChild(k);
            a._svgColorMatrixFilter = n;
            b.appendChild(g);
            document.documentElement.appendChild(b);
          }
        };
        a._applyColorMatrixFilter = function(b, g) {
          a._prepareSVGFilters();
          a._svgColorMatrixFilter.setAttribute("values", g.toSVGFilterMatrix());
          b.filter = "url(#svgColorMatrixFilter)";
        };
        a._applyFilters = function(b, g, n) {
          function t(a) {
            var c = b / 2;
            switch(a) {
              case 0:
                return 0;
              case 1:
                return c / 2.7;
              case 2:
                return c / 1.28;
              default:
                return c;
            }
          }
          a._prepareSVGFilters();
          a._removeFilters(g);
          for (var l = 0;l < n.length;l++) {
            var u = n[l];
            if (u instanceof r.BlurFilter) {
              var c = u, u = t(c.quality);
              a._svgBlurFilter.setAttribute("stdDeviation", c.blurX * u + " " + c.blurY * u);
              g.filter = "url(#svgBlurFilter)";
            } else {
              u instanceof r.DropshadowFilter && (c = u, u = t(c.quality), a._svgDropshadowFilterBlur.setAttribute("stdDeviation", c.blurX * u + " " + c.blurY * u), a._svgDropshadowFilterOffset.setAttribute("dx", String(Math.cos(c.angle * Math.PI / 180) * c.distance * b)), a._svgDropshadowFilterOffset.setAttribute("dy", String(Math.sin(c.angle * Math.PI / 180) * c.distance * b)), a._svgDropshadowFilterFlood.setAttribute("flood-color", k.ColorUtilities.rgbaToCSSStyle(c.color << 8 | Math.round(255 * 
              c.alpha))), g.filter = "url(#svgDropShadowFilter)");
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
      g.Filters = n;
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
          var n;
          if (a._copyCanvasContext) {
            if (n = a._copyCanvasContext.canvas, n.width < b || n.height < g) {
              n.width = k.IntegerUtilities.nearestPowerOfTwo(b), n.height = k.IntegerUtilities.nearestPowerOfTwo(g);
            }
          } else {
            n = document.createElement("canvas"), "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(n), n.width = 512, n.height = 512, a._copyCanvasContext = n.getContext("2d");
          }
        };
        a.prototype.draw = function(g, k, n, t, l, r) {
          this.context.setTransform(1, 0, 0, 1, 0, 0);
          var c, e = 0, f = 0;
          g.context.canvas === this.context.canvas ? (a._ensureCopyCanvasSize(t, l), c = a._copyCanvasContext, c.clearRect(0, 0, t, l), c.drawImage(g.surface.canvas, g.region.x, g.region.y, t, l, 0, 0, t, l), c = c.canvas, f = e = 0) : (c = g.surface.canvas, e = g.region.x, f = g.region.y);
          a: {
            switch(r) {
              case 11:
                g = !0;
                break a;
              default:
                g = !1;
            }
          }
          g && (this.context.save(), this.context.beginPath(), this.context.rect(k, n, t, l), this.context.clip());
          this.context.globalCompositeOperation = b(r);
          this.context.drawImage(c, e, f, t, l, k, n, t, l);
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
      n = function() {
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
      g.Canvas2DSurface = n;
    })(r.Canvas2D || (r.Canvas2D = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(g) {
      var b = k.Debug.assert, v = k.GFX.Geometry.Rectangle, n = k.GFX.Geometry.Point, a = k.GFX.Geometry.Matrix, h = k.NumberUtilities.clamp, p = k.NumberUtilities.pow2, m = function() {
        return function(a, b) {
          this.surfaceRegion = a;
          this.scale = b;
        };
      }();
      g.MipMapLevel = m;
      var w = function() {
        function a(b, d, c, e) {
          this._node = d;
          this._levels = [];
          this._surfaceRegionAllocator = c;
          this._size = e;
          this._renderer = b;
        }
        a.prototype.getLevel = function(a) {
          a = Math.max(a.getAbsoluteScaleX(), a.getAbsoluteScaleY());
          var d = 0;
          1 !== a && (d = h(Math.round(Math.log(a) / Math.LN2), -5, 3));
          this._node.hasFlags(2097152) || (d = h(d, -5, 0));
          a = p(d);
          var b = 5 + d, d = this._levels[b];
          if (!d) {
            var c = this._node.getBounds().clone();
            c.scale(a, a);
            c.snap();
            var e = this._surfaceRegionAllocator.allocate(c.w, c.h, null), g = e.region, d = this._levels[b] = new m(e, a), b = new l(e);
            b.clip.set(g);
            b.matrix.setElements(a, 0, 0, a, g.x - c.x, g.y - c.y);
            b.flags |= 64;
            this._renderer.renderNodeWithState(this._node, b);
            b.free();
          }
          return d;
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
        function c(d) {
          b.call(this);
          this.clip = v.createEmpty();
          this.clipList = [];
          this.clipPath = null;
          this.flags = 0;
          this.target = null;
          this.matrix = a.createIdentity();
          this.colorMatrix = r.ColorMatrix.createIdentity();
          this.filters = [];
          c.allocationCount++;
          this.target = d;
        }
        __extends(c, b);
        c.prototype.set = function(a) {
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
        c.prototype.clone = function() {
          var a = c.allocate();
          a || (a = new c(this.target));
          a.set(this);
          return a;
        };
        c.allocate = function() {
          var a = c._dirtyStack, b = null;
          a.length && (b = a.pop());
          return b;
        };
        c.prototype.free = function() {
          this.clipPath = null;
          c._dirtyStack.push(this);
        };
        c.prototype.transform = function(a) {
          var b = this.clone();
          b.matrix.preMultiply(a.getMatrix());
          a.hasColorMatrix() && b.colorMatrix.multiply(a.getColorMatrix());
          return b;
        };
        c.prototype.hasFlags = function(a) {
          return (this.flags & a) === a;
        };
        c.prototype.removeFlags = function(a) {
          this.flags &= ~a;
        };
        c.prototype.toggleFlags = function(a, b) {
          this.flags = b ? this.flags | a : this.flags & ~a;
        };
        c.prototype.beginClipPath = function(a) {
          this.target.context.save();
          this.clipPath = new Path2D;
        };
        c.prototype.applyClipPath = function() {
          var a = this.target.context;
          a.setTransform(1, 0, 0, 1, 0, 0);
          a.clip(this.clipPath);
          var b = this.matrix;
          a.setTransform(b.a, b.b, b.c, b.d, b.tx, b.ty);
        };
        c.prototype.closeClipPath = function() {
          this.target.context.restore();
        };
        c.allocationCount = 0;
        c._dirtyStack = [];
        return c;
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
      var c = function(c) {
        function f(a, b, h) {
          void 0 === h && (h = new t);
          c.call(this, a, b, h);
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
        __extends(f, c);
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
          for (var c = this._devicePixelRatio = window.devicePixelRatio || 1, e = b.w / c + "px", c = b.h / c + "px", f = 0;f < this._layers.length;f++) {
            var h = this._layers[f];
            h.style.width = e;
            h.style.height = c;
          }
          a.width = b.w;
          a.height = b.h;
          a.style.position = "absolute";
          a.style.width = e;
          a.style.height = c;
          this._target = this._createTarget(a);
          this._fontSize = 10 * this._devicePixelRatio;
        };
        f._prepareSurfaceAllocators = function() {
          f._initializedCaches || (f._surfaceCache = new r.SurfaceRegionAllocator.SimpleAllocator(function(a, b) {
            var c = document.createElement("canvas");
            "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(c);
            var e = Math.max(1024, a), f = Math.max(1024, b);
            c.width = e;
            c.height = f;
            var h = null, h = 512 <= a || 512 <= b ? new r.RegionAllocator.GridAllocator(e, f, e, f) : new r.RegionAllocator.BucketAllocator(e, f);
            return new g.Canvas2DSurface(c, h);
          }), f._shapeCache = new r.SurfaceRegionAllocator.SimpleAllocator(function(a, b) {
            var c = document.createElement("canvas");
            "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(c);
            c.width = 1024;
            c.height = 1024;
            var e = e = new r.RegionAllocator.CompactAllocator(1024, 1024);
            return new g.Canvas2DSurface(c, e);
          }), f._initializedCaches = !0);
        };
        f.prototype.render = function() {
          var a = this._stage, b = this._target, c = this._options, e = this._viewport;
          b.reset();
          b.context.save();
          b.context.beginPath();
          b.context.rect(e.x, e.y, e.w, e.h);
          b.context.clip();
          this._renderStageToTarget(b, a, e);
          b.reset();
          c.paintViewport && (b.context.beginPath(), b.context.rect(e.x, e.y, e.w, e.h), b.context.strokeStyle = "#FF4981", b.context.lineWidth = 2, b.context.stroke());
          b.context.restore();
        };
        f.prototype.renderNode = function(a, b, c) {
          var e = new l(this._target);
          e.clip.set(b);
          e.flags = 256;
          e.matrix.set(c);
          a.visit(this, e);
          e.free();
        };
        f.prototype.renderNodeWithState = function(a, b) {
          a.visit(this, b);
        };
        f.prototype._renderWithCache = function(a, b) {
          var c = b.matrix, e = a.getBounds();
          if (e.isEmpty()) {
            return !1;
          }
          var h = this._options.cacheShapesMaxSize, g = Math.max(c.getAbsoluteScaleX(), c.getAbsoluteScaleY()), l = !!(b.flags & 16), k = !!(b.flags & 8);
          if (b.hasFlags(256)) {
            if (k || l || !b.colorMatrix.isIdentity() || a.hasFlags(1048576) || 100 < this._options.cacheShapesThreshold || e.w * g > h || e.h * g > h) {
              return !1;
            }
            (g = a.properties.mipMap) || (g = a.properties.mipMap = new w(this, a, f._shapeCache, h));
            l = g.getLevel(c);
            h = l.surfaceRegion;
            g = h.region;
            return l ? (l = b.target.context, l.imageSmoothingEnabled = l.mozImageSmoothingEnabled = !0, l.setTransform(c.a, c.b, c.c, c.d, c.tx, c.ty), l.drawImage(h.surface.canvas, g.x, g.y, g.w, g.h, e.x, e.y, e.w, e.h), !0) : !1;
          }
        };
        f.prototype._intersectsClipList = function(a, b) {
          var c = a.getBounds(!0), e = !1;
          b.matrix.transformRectangleAABB(c);
          b.clip.intersects(c) && (e = !0);
          var f = b.clipList;
          if (e && f.length) {
            for (var e = !1, h = 0;h < f.length;h++) {
              if (c.intersects(f[h])) {
                e = !0;
                break;
              }
            }
          }
          c.free();
          return e;
        };
        f.prototype.visitGroup = function(a, b) {
          this._frameInfo.groups++;
          a.getBounds();
          if ((!a.hasFlags(4) || b.flags & 4) && a.hasFlags(65536)) {
            var c = a.getLayer().filters;
            c && b.filters.push.apply(b.filters, c);
            if (b.flags & 1 || 1 === a.getLayer().blendMode && !a.getLayer().mask || !this._options.blending) {
              if (this._intersectsClipList(a, b)) {
                for (var c = null, e = a.getChildren(), f = 0;f < e.length;f++) {
                  var h = e[f], g = h.getTransform(), l = b.transform(g);
                  l.toggleFlags(4096, h.hasFlags(524288));
                  if (0 <= h.clip) {
                    c = c || new Uint8Array(e.length);
                    c[h.clip + f]++;
                    var k = l.clone();
                    k.flags |= 16;
                    k.beginClipPath(g.getMatrix());
                    h.visit(this, k);
                    k.applyClipPath();
                    k.free();
                  } else {
                    h.visit(this, l);
                  }
                  if (c && 0 < c[f]) {
                    for (;c[f]--;) {
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
            var c = b.target.context, e = a.getBounds(!0), h = a.properties.style;
            h || (h = a.properties.style = k.Color.randomColor().toCSSStyle());
            c.strokeStyle = h;
            b.matrix.transformRectangleAABB(e);
            c.setTransform(1, 0, 0, 1, 0, 0);
            e.free();
            e = a.getBounds();
            h = f._debugPoints;
            b.matrix.transformRectangle(e, h);
            c.lineWidth = 1;
            c.beginPath();
            c.moveTo(h[0].x, h[0].y);
            c.lineTo(h[1].x, h[1].y);
            c.lineTo(h[2].x, h[2].y);
            c.lineTo(h[3].x, h[3].y);
            c.lineTo(h[0].x, h[0].y);
            c.stroke();
          }
        };
        f.prototype.visitStage = function(a, b) {
          var c = b.target.context, e = a.getBounds(!0);
          b.matrix.transformRectangleAABB(e);
          e.intersect(b.clip);
          b.target.reset();
          b = b.clone();
          this._options.clear && b.target.clear(b.clip);
          a.hasFlags(32768) || !a.color || b.flags & 32 || (this._container.style.backgroundColor = a.color.toCSSStyle());
          this.visitGroup(a, b);
          a.dirtyRegion && (c.restore(), b.target.reset(), c.globalAlpha = .4, b.hasFlags(2048) && a.dirtyRegion.render(b.target.context), a.dirtyRegion.clear());
          b.free();
        };
        f.prototype.visitShape = function(a, b) {
          if (this._intersectsClipList(a, b)) {
            var c = b.matrix;
            b.flags & 8192 && (c = c.clone(), c.snap());
            var e = b.target.context;
            g.Filters._applyColorMatrix(e, b.colorMatrix);
            g.Filters._svgFiltersAreSupported && r.filters.value && g.Filters._applyFilters(this._devicePixelRatio, e, b.filters);
            a.source instanceof r.RenderableVideo ? this.visitRenderableVideo(a.source, b) : 0 < e.globalAlpha && this.visitRenderable(a.source, b, a.ratio);
            b.flags & 8192 && c.free();
          }
        };
        f.prototype.visitRenderableVideo = function(a, b) {
          if (a.video && a.video.videoWidth) {
            var c = this._devicePixelRatio, e = b.matrix.clone();
            e.scale(1 / c, 1 / c);
            var c = a.getBounds(), f = k.GFX.Geometry.Matrix.createIdentity();
            f.scale(c.w / a.video.videoWidth, c.h / a.video.videoHeight);
            e.preMultiply(f);
            f.free();
            c = e.toCSSTransform();
            a.video.style.transformOrigin = "0 0";
            a.video.style.transform = c;
            var h = this._backgroundVideoLayer;
            h !== a.video.parentElement && (h.appendChild(a.video), a.addEventListener(2, function ea(a) {
              h.removeChild(a.video);
              a.removeEventListener(2, ea);
            }));
            e.free();
          }
        };
        f.prototype.visitRenderable = function(a, b, c) {
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
            a.render(e, c, null, h ? b.clipPath : null, g);
          }
        };
        f.prototype._renderLayer = function(a, b) {
          var c = a.getLayer(), e = c.mask;
          if (e) {
            this._renderWithMask(a, e, c.blendMode, !a.hasFlags(131072) || !e.hasFlags(131072), b);
          } else {
            var e = v.allocate(), f = this._renderToTemporarySurface(a, b, e, null);
            f && (b.target.draw(f, e.x, e.y, e.w, e.h, c.blendMode), f.free());
            e.free();
          }
        };
        f.prototype._renderWithMask = function(a, b, c, e, f) {
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
              k.isEmpty() || (g = f.clone(), g.clip.set(k), a = this._renderToTemporarySurface(a, g, v.createEmpty(), null), g.free(), g = f.clone(), g.clip.set(k), g.matrix = h, g.flags |= 4, e && (g.flags |= 8), b = this._renderToTemporarySurface(b, g, v.createEmpty(), a.surface), g.free(), a.draw(b, 0, 0, k.w, k.h, 11), f.target.draw(a, k.x, k.y, k.w, k.h, c), b.free(), a.free());
            }
          }
        };
        f.prototype._renderStageToTarget = function(b, c, e) {
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
          c.visit(this, b);
          this._frameInfo.leave();
        };
        f.prototype._renderToTemporarySurface = function(a, b, c, e) {
          var f = b.matrix, h = a.getBounds().clone();
          f.transformRectangleAABB(h);
          h.snap();
          c.set(h);
          c.intersect(b.clip);
          c.snap();
          if (c.isEmpty()) {
            return null;
          }
          e = this._allocateSurface(c.w, c.h, e);
          h = e.region;
          h = new v(h.x, h.y, c.w, c.h);
          e.context.setTransform(1, 0, 0, 1, 0, 0);
          e.clear();
          f = f.clone();
          f.translate(h.x - c.x, h.y - c.y);
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
        f.prototype._allocateSurface = function(a, b, c) {
          return f._surfaceCache.allocate(a, b, c);
        };
        f.prototype.screenShot = function(a, c, e) {
          c && (c = this._stage.content.groupChild.child, b(c instanceof r.Stage), a = c.content.getBounds(!0), c.content.getTransform().getConcatenatedMatrix().transformRectangleAABB(a), a.intersect(this._viewport));
          a || (a = new v(0, 0, this._target.w, this._target.h));
          c = a.w;
          var f = a.h, h = this._devicePixelRatio;
          e && (c /= h, f /= h, h = 1);
          e = document.createElement("canvas");
          e.width = c;
          e.height = f;
          var g = e.getContext("2d");
          g.fillStyle = this._container.style.backgroundColor;
          g.fillRect(0, 0, c, f);
          g.drawImage(this._target.context.canvas, a.x, a.y, a.w, a.h, 0, 0, c, f);
          return new r.ScreenShot(e.toDataURL("image/png"), c, f, h);
        };
        f._initializedCaches = !1;
        f._debugPoints = n.createEmptyPoints(4);
        return f;
      }(r.Renderer);
      g.Canvas2DRenderer = c;
    })(r.Canvas2D || (r.Canvas2D = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    var g = r.Geometry.Point, b = r.Geometry.Matrix, v = r.Geometry.Rectangle, n = k.Tools.Mini.FPS, a = function() {
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
        b.altKey && (a.state = new m(a.worldView, a.getMousePosition(b, null), a.worldView.getTransform().getMatrix(!0)));
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
    }(a), p = function(a) {
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
        var c = "DOMMouseScroll" === b.type ? -b.detail : b.wheelDelta / 40;
        if (b.altKey) {
          b.preventDefault();
          var e = a.getMousePosition(b, null), f = a.worldView.getTransform().getMatrix(!0), c = 1 + c / 1E3;
          f.translate(-e.x, -e.y);
          f.scale(c, c);
          f.translate(e.x, e.y);
          a.worldView.getTransform().setMatrix(f);
        }
      };
      b.prototype.onKeyPress = function(a, b) {
        if (b.altKey) {
          var c = b.keyCode || b.which;
          console.info("onKeyPress Code: " + c);
          switch(c) {
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
          var b = r.viewportLoupeDiameter.value, c = r.viewportLoupeDiameter.value;
          a.viewport = new v(this._mousePosition.x - b / 2, this._mousePosition.y - c / 2, b, c);
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
          var c = a._world;
          c && (a.state = new m(c, a.getMousePosition(b, null), c.getTransform().getMatrix(!0)));
        }
      };
      b.prototype.onMouseUp = function(a, b) {
        a.state = new h;
        a.selectNodeUnderMouse(b);
      };
      return b;
    })(a);
    var m = function(a) {
      function b(h, g, c) {
        a.call(this);
        this._target = h;
        this._startPosition = g;
        this._startMatrix = c;
      }
      __extends(b, a);
      b.prototype.onMouseMove = function(a, b) {
        b.preventDefault();
        var c = a.getMousePosition(b, null);
        c.sub(this._startPosition);
        this._target.getTransform().setMatrix(this._startMatrix.clone().translate(c.x, c.y));
        a.state = this;
      };
      b.prototype.onMouseUp = function(a, b) {
        a.state = new h;
      };
      return b;
    }(a), a = function() {
      function a(b, g, m) {
        function c(a) {
          d._state.onMouseWheel(d, a);
          d._persistentState.onMouseWheel(d, a);
        }
        void 0 === g && (g = !1);
        void 0 === m && (m = void 0);
        this._state = new h;
        this._persistentState = new p;
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
          this._fps = new n(f);
        } else {
          this._fps = null;
        }
        this.transparent = e = 0 === m;
        void 0 === m || 0 === m || k.ColorUtilities.rgbaToCSSStyle(m);
        this._options = new r.Canvas2D.Canvas2DRendererOptions;
        this._options.alpha = e;
        this._renderer = new r.Canvas2D.Canvas2DRenderer(g, this._stage, this._options);
        this._listenForContainerSizeChanges();
        this._onMouseUp = this._onMouseUp.bind(this);
        this._onMouseDown = this._onMouseDown.bind(this);
        this._onMouseMove = this._onMouseMove.bind(this);
        var d = this;
        window.addEventListener("mouseup", function(a) {
          d._state.onMouseUp(d, a);
          d._render();
        }, !1);
        window.addEventListener("mousemove", function(a) {
          d._state.onMouseMove(d, a);
          d._persistentState.onMouseMove(d, a);
        }, !1);
        window.addEventListener("DOMMouseScroll", c);
        window.addEventListener("mousewheel", c);
        b.addEventListener("mousedown", function(a) {
          d._state.onMouseDown(d, a);
        });
        window.addEventListener("keydown", function(a) {
          d._state.onKeyDown(d, a);
          if (d._state !== d._persistentState) {
            d._persistentState.onKeyDown(d, a);
          }
        }, !1);
        window.addEventListener("keypress", function(a) {
          d._state.onKeyPress(d, a);
          if (d._state !== d._persistentState) {
            d._persistentState.onKeyPress(d, a);
          }
        }, !1);
        window.addEventListener("keyup", function(a) {
          d._state.onKeyUp(d, a);
          if (d._state !== d._persistentState) {
            d._persistentState.onKeyUp(d, a);
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
        var k = this._container, c = k.getBoundingClientRect(), e = this.getRatio(), k = new g(k.scrollWidth / c.width * (a.clientX - c.left) * e, k.scrollHeight / c.height * (a.clientY - c.top) * e);
        if (!h) {
          return k;
        }
        c = b.createIdentity();
        h.getTransform().getConcatenatedMatrix().inverse(c);
        c.transformPoint(k);
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
      a.prototype.screenShot = function(a, b, h) {
        return this._renderer.screenShot(a, b, h);
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
      function a(a, g, m) {
        void 0 === m && (m = new b);
        k.call(this, a, g, m);
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
          var d = b.getChildren();
          a.fillStyle = b.hasFlags(16) ? "red" : "white";
          var g = String(b.id);
          b instanceof r.RenderableText ? g = "T" + g : b instanceof r.RenderableShape ? g = "S" + g : b instanceof r.RenderableBitmap ? g = "B" + g : b instanceof r.RenderableVideo && (g = "V" + g);
          b instanceof r.Renderable && (g = g + " [" + b._parents.length + "]");
          b = a.measureText(g).width;
          a.fillText(g, l, u);
          if (d) {
            l += b + 4;
            e = Math.max(e, l + 20);
            for (g = 0;g < d.length;g++) {
              k(d[g]), g < d.length - 1 && (u += 18, u > n._canvas.height && (a.fillStyle = "gray", l = l - c + e + 8, c = e + 8, u = 0, a.fillStyle = "white"));
            }
            l -= b + 4;
          }
        }
        var n = this;
        a.save();
        a.font = "16px Arial";
        a.fillStyle = "white";
        var l = 0, u = 0, c = 0, e = 0;
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
      var b = k.GFX.BlurFilter, v = k.GFX.DropshadowFilter, n = k.GFX.Shape, a = k.GFX.Group, h = k.GFX.RenderableShape, p = k.GFX.RenderableMorphShape, m = k.GFX.RenderableBitmap, w = k.GFX.RenderableVideo, t = k.GFX.RenderableText, l = k.GFX.ColorMatrix, u = k.ShapeData, c = k.ArrayUtilities.DataBuffer, e = k.GFX.Stage, f = k.GFX.Geometry.Matrix, d = k.GFX.Geometry.Rectangle, q = function() {
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
        a.prototype._decodeImage = function(a, b, c) {
          var e = new Image, f = m.FromImage(e);
          e.src = URL.createObjectURL(new Blob([b], {type:k.getMIMETypeForImageType(a)}));
          e.onload = function() {
            f.setBounds(new d(0, 0, e.width, e.height));
            f.invalidate();
            c({width:e.width, height:e.height});
          };
          e.onerror = function() {
            c(null);
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
          for (var a = this.input, b = this.context, c = a.readInt(), d = a.readInt(), e = b._getAsset(c), f = this._readRectangle(), g = u.FromPlainObject(this._readAsset()), k = a.readInt(), l = [], m = 0;m < k;m++) {
            var n = a.readInt();
            l.push(b._getBitmapAsset(n));
          }
          if (e) {
            e.update(g, l, f);
          } else {
            a = g.morphCoordinates ? new p(c, g, l, f) : new h(c, g, l, f);
            for (m = 0;m < l.length;m++) {
              l[m] && l[m].addRenderableParent(a);
            }
            b._registerAsset(c, d, a);
          }
        };
        e.prototype._readUpdateBitmapData = function() {
          var a = this.input, b = this.context, d = a.readInt(), e = a.readInt(), f = b._getBitmapAsset(d), g = this._readRectangle(), a = a.readInt(), h = c.FromPlainObject(this._readAsset());
          f ? f.updateFromDataBuffer(a, h) : (f = m.FromDataBuffer(a, h, g), b._registerAsset(d, e, f));
        };
        e.prototype._readUpdateTextContent = function() {
          var a = this.input, b = this.context, d = a.readInt(), e = a.readInt(), f = b._getTextAsset(d), g = this._readRectangle(), h = this._readMatrix(), k = a.readInt(), l = a.readInt(), m = a.readInt(), p = a.readBoolean(), n = a.readInt(), q = a.readInt(), r = this._readAsset(), u = c.FromPlainObject(this._readAsset()), v = null, w = a.readInt();
          w && (v = new c(4 * w), a.readBytes(v, 4 * w));
          f ? (f.setBounds(g), f.setContent(r, u, h, v), f.setStyle(k, l, n, q), f.reflow(m, p)) : (f = new t(g), f.setContent(r, u, h, v), f.setStyle(k, l, n, q), f.reflow(m, p), b._registerAsset(d, e, f));
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
          e && (k = f.getChildren()[0], k instanceof n && (k.ratio = e));
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
          a ? a.drawNode(d, g, h, e, k) : b._registerAsset(c, -1, m.FromNode(d, g, h, e, k));
        };
        e.prototype._readRequestBitmapData = function() {
          var a = this.output, b = this.context, c = this.input.readInt();
          b._getBitmapAsset(c).readImageData(a);
        };
        e._temporaryReadMatrix = f.createIdentity();
        e._temporaryReadRectangle = d.createEmpty();
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
      function n(a) {
        this._easel = a;
        var b = a.transparent;
        this._group = a.world;
        this._content = null;
        this._fullscreen = !1;
        this._context = new k.Remoting.GFX.GFXChannelDeserializerContext(this, this._group, b);
        this._addEventListeners();
      }
      n.prototype.onSendUpdates = function(a, b) {
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
      n.prototype._mouseEventListener = function(a) {
        var h = this._easel.getMousePosition(a, this._content), h = new g(h.x, h.y), p = new b, m = new k.Remoting.GFX.GFXChannelSerializer;
        m.output = p;
        m.writeMouseEvent(a, h);
        this.onSendUpdates(p, []);
      };
      n.prototype._keyboardEventListener = function(a) {
        var g = new b, p = new k.Remoting.GFX.GFXChannelSerializer;
        p.output = g;
        p.writeKeyboardEvent(a);
        this.onSendUpdates(g, []);
      };
      n.prototype._addEventListeners = function() {
        for (var a = this._mouseEventListener.bind(this), b = this._keyboardEventListener.bind(this), g = n._mouseEvents, k = 0;k < g.length;k++) {
          window.addEventListener(g[k], a);
        }
        a = n._keyboardEvents;
        for (k = 0;k < a.length;k++) {
          window.addEventListener(a[k], b);
        }
        this._addFocusEventListeners();
        this._easel.addEventListener("resize", this._resizeEventListener.bind(this));
      };
      n.prototype._sendFocusEvent = function(a) {
        var g = new b, p = new k.Remoting.GFX.GFXChannelSerializer;
        p.output = g;
        p.writeFocusEvent(a);
        this.onSendUpdates(g, []);
      };
      n.prototype._addFocusEventListeners = function() {
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
      n.prototype._resizeEventListener = function() {
        this.onDisplayParameters(this._easel.getDisplayParameters());
      };
      n.prototype.onDisplayParameters = function(a) {
        throw Error("This method is abstract");
      };
      n.prototype.processUpdates = function(a, b, g) {
        void 0 === g && (g = null);
        var m = new k.Remoting.GFX.GFXChannelDeserializer;
        m.input = a;
        m.inputAssets = b;
        m.output = g;
        m.context = this._context;
        m.read();
      };
      n.prototype.processVideoControl = function(a, b, g) {
        var k = this._context, n = k._getVideoAsset(a);
        if (!n) {
          if (1 !== b) {
            return;
          }
          k.registerVideo(a);
          n = k._getVideoAsset(a);
        }
        return n.processControlRequest(b, g);
      };
      n.prototype.processRegisterFont = function(a, b, g) {
        this._context.registerFont(a, b, g);
      };
      n.prototype.processRegisterImage = function(a, b, g, k, n) {
        this._context.registerImage(a, b, g, k, n);
      };
      n.prototype.processFSCommand = function(a, b) {
        arguments.length;
      };
      n.prototype.processFrame = function() {
        arguments.length;
      };
      n.prototype.onVideoPlaybackEvent = function(a, b, g) {
        throw Error("This method is abstract");
      };
      n.prototype.sendVideoPlaybackEvent = function(a, b, g) {
        this.onVideoPlaybackEvent(a, b, g);
      };
      n._mouseEvents = k.Remoting.MouseEventNames;
      n._keyboardEvents = k.Remoting.KeyboardEventNames;
      return n;
    }();
    r.EaselHost = v;
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(g) {
      var b = k.ArrayUtilities.DataBuffer, v = k.CircularBuffer, n = k.Tools.Profiler.TimelineBuffer, a = function(a) {
        function g(b, k, p) {
          a.call(this, b);
          this._timelineRequests = Object.create(null);
          this._playerWindow = k;
          this._window = p;
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
              "timelineResponse" === a.type && a.timeline && (a.timeline.__proto__ = n.prototype, a.timeline._marks.__proto__ = v.prototype, a.timeline._times.__proto__ = v.prototype, this._timelineRequests[a.request](a.timeline));
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
                var n = b.FromArrayBuffer(k.updates.buffer);
                if (g) {
                  this.processUpdates(n, k.assets);
                } else {
                  var r = new b;
                  this.processUpdates(n, k.assets, r);
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
              c.writeByte(0);
              break;
            case "boolean":
              c.writeByte(a ? 2 : 3);
              break;
            case "number":
              c.writeByte(4);
              c.writeDouble(a);
              break;
            case "string":
              c.writeByte(5);
              c.writeUTF(a);
              break;
            default:
              if (null === a) {
                c.writeByte(1);
                break;
              }
              if (Array.isArray(a) && a instanceof Int32Array) {
                c.writeByte(6);
                c.writeInt(a.length);
                for (var f = 0;f < a.length;f++) {
                  g(a[f]);
                }
              } else {
                if (a instanceof Uint8Array) {
                  c.writeByte(9), b(c, a);
                } else {
                  if ("length" in a && "buffer" in a && "littleEndian" in a) {
                    c.writeByte(a.littleEndian ? 10 : 11), b(c, new Uint8Array(a.buffer, 0, a.length));
                  } else {
                    if (a instanceof ArrayBuffer) {
                      c.writeByte(8), b(c, new Uint8Array(a));
                    } else {
                      if (a instanceof Int32Array) {
                        c.writeByte(12), b(c, new Uint8Array(a.buffer, a.byteOffset, a.byteLength));
                      } else {
                        if (a.buffer instanceof ArrayBuffer && "number" === typeof a.byteOffset) {
                          throw Error("Some unsupported TypedArray is used");
                        }
                        c.writeByte(7);
                        for (f in a) {
                          c.writeUTF(f), g(a[f]);
                        }
                        c.writeUTF("");
                      }
                    }
                  }
                }
              }
            ;
          }
        }
        var c = new p;
        g(a);
        return c.getBytes();
      }
      function n(a) {
        var b = new p, c = a.readInt();
        a.readBytes(b, c);
        return b.getBytes();
      }
      function a(a) {
        var b = new p, c = a.readInt();
        a.readBytes(b, c);
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
            for (var b = [], c = a.readInt(), e = 0;e < c;e++) {
              b[e] = h(a);
            }
            return b;
          case 7:
            for (b = {};c = a.readUTF();) {
              b[c] = h(a);
            }
            return b;
          case 8:
            return n(a).buffer;
          case 9:
            return n(a);
          case 11:
          ;
          case 10:
            return a = n(a), new m(a.buffer, a.length, 10 === b);
          case 12:
            return new Int32Array(n(a).buffer);
        }
      }
      var p = k.ArrayUtilities.DataBuffer, m = k.ArrayUtilities.PlainObjectDataBuffer, w;
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
          this._recording = new p;
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
        a.prototype.recordPlayerCommand = function(a, c, e) {
          var f = new p;
          b(f, c);
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
        a.prototype.recordFont = function(a, c) {
          var e = new p;
          e.writeInt(a);
          b(e, c);
          this._createRecord(4, e);
        };
        a.prototype.recordImage = function(a, c, e, f) {
          var d = new p;
          d.writeInt(a);
          d.writeInt(c);
          d.writeInt(e);
          b(d, f);
          this._createRecord(5, d);
        };
        a.prototype.recordFSCommand = function(a, b) {
          var e = new p;
          e.writeUTF(a);
          e.writeUTF(b || "");
          this._createRecord(6, e);
        };
        return a;
      }();
      g.MovieRecorder = w;
      var t = function() {
        function b(a) {
          this._buffer = new p;
          this._buffer.writeRawBytes(a);
          this._buffer.position = 4;
        }
        b.prototype.readNextRecord = function() {
          if (this._buffer.position >= this._buffer.length) {
            return 0;
          }
          var a = this._buffer.readInt(), b = this._buffer.readInt(), e = this._buffer.readInt(), f = null;
          0 < e && (f = new p, this._buffer.readBytes(f, e));
          this.currentTimestamp = a;
          this.currentType = b;
          this.currentData = f;
          return b;
        };
        b.prototype.parsePlayerCommand = function() {
          for (var b = n(this.currentData), c = this.currentData.readInt(), e = [], f = 0;f < c;f++) {
            e.push(a(this.currentData));
          }
          return {updates:b, assets:e};
        };
        b.prototype.parseFSCommand = function() {
          var a = this.currentData.readUTF(), b = this.currentData.readUTF();
          return {command:a, args:b};
        };
        b.prototype.parseFont = function() {
          var b = this.currentData.readInt(), c = a(this.currentData);
          return {syncId:b, data:c};
        };
        b.prototype.parseImage = function() {
          var b = this.currentData.readInt(), c = this.currentData.readInt(), e = this.currentData.readInt(), f = a(this.currentData);
          return {syncId:b, symbolId:c, imageType:e, data:f};
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
              var k = 2 === this._parser.currentType, n = b.FromArrayBuffer(a.updates.buffer);
              k ? this.processUpdates(n, a.assets) : (k = new b, this.processUpdates(n, a.assets, k));
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

