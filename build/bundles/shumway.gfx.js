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
Shumway$$inline_0.version = "0.11.27";
Shumway$$inline_0.build = "e6116fb";
var jsGlobal = function() {
  return this || (0,eval)("this//# sourceURL=jsGlobal-getter");
}(), inBrowser = "undefined" !== typeof window && "document" in window && "plugins" in window.document, inFirefox = "undefined" !== typeof navigator && 0 <= navigator.userAgent.indexOf("Firefox");
jsGlobal.performance || (jsGlobal.performance = {});
jsGlobal.performance.now || (jsGlobal.performance.now = function() {
  return Date.now();
});
function lazyInitializer(h, r, f) {
  Object.defineProperty(h, r, {get:function() {
    var b = f();
    Object.defineProperty(h, r, {value:b, configurable:!0, enumerable:!0});
    return b;
  }, configurable:!0, enumerable:!0});
}
var START_TIME = performance.now();
(function(h) {
  function r(k) {
    return (k | 0) === k;
  }
  function f(k) {
    return "object" === typeof k || "function" === typeof k;
  }
  function b(k) {
    return String(Number(k)) === k;
  }
  function v(k) {
    var d = 0;
    if ("number" === typeof k) {
      return d = k | 0, k === d && 0 <= d ? !0 : k >>> 0 === k;
    }
    if ("string" !== typeof k) {
      return !1;
    }
    var g = k.length;
    if (0 === g) {
      return !1;
    }
    if ("0" === k) {
      return !0;
    }
    if (g > h.UINT32_CHAR_BUFFER_LENGTH) {
      return !1;
    }
    var c = 0, d = k.charCodeAt(c++) - 48;
    if (1 > d || 9 < d) {
      return !1;
    }
    for (var q = 0, x = 0;c < g;) {
      x = k.charCodeAt(c++) - 48;
      if (0 > x || 9 < x) {
        return !1;
      }
      q = d;
      d = 10 * d + x;
    }
    return q < h.UINT32_MAX_DIV_10 || q === h.UINT32_MAX_DIV_10 && x <= h.UINT32_MAX_MOD_10 ? !0 : !1;
  }
  (function(k) {
    k[k._0 = 48] = "_0";
    k[k._1 = 49] = "_1";
    k[k._2 = 50] = "_2";
    k[k._3 = 51] = "_3";
    k[k._4 = 52] = "_4";
    k[k._5 = 53] = "_5";
    k[k._6 = 54] = "_6";
    k[k._7 = 55] = "_7";
    k[k._8 = 56] = "_8";
    k[k._9 = 57] = "_9";
  })(h.CharacterCodes || (h.CharacterCodes = {}));
  h.UINT32_CHAR_BUFFER_LENGTH = 10;
  h.UINT32_MAX = 4294967295;
  h.UINT32_MAX_DIV_10 = 429496729;
  h.UINT32_MAX_MOD_10 = 5;
  h.isString = function(k) {
    return "string" === typeof k;
  };
  h.isFunction = function(k) {
    return "function" === typeof k;
  };
  h.isNumber = function(k) {
    return "number" === typeof k;
  };
  h.isInteger = r;
  h.isArray = function(k) {
    return k instanceof Array;
  };
  h.isNumberOrString = function(k) {
    return "number" === typeof k || "string" === typeof k;
  };
  h.isObject = f;
  h.toNumber = function(k) {
    return +k;
  };
  h.isNumericString = b;
  h.isNumeric = function(k) {
    if ("number" === typeof k) {
      return !0;
    }
    if ("string" === typeof k) {
      var d = k.charCodeAt(0);
      return 65 <= d && 90 >= d || 97 <= d && 122 >= d || 36 === d || 95 === d ? !1 : v(k) || b(k);
    }
    return !1;
  };
  h.isIndex = v;
  h.isNullOrUndefined = function(k) {
    return void 0 == k;
  };
  var p;
  (function(k) {
    k.error = function(g) {
      console.error(g);
      throw Error(g);
    };
    k.assert = function(g, c) {
      void 0 === c && (c = "assertion failed");
      "" === g && (g = !0);
      if (!g) {
        if ("undefined" !== typeof console && "assert" in console) {
          throw console.assert(!1, c), Error(c);
        }
        k.error(c.toString());
      }
    };
    k.assertUnreachable = function(g) {
      throw Error("Reached unreachable location " + Error().stack.split("\n")[1] + g);
    };
    k.assertNotImplemented = function(g, c) {
      g || k.error("notImplemented: " + c);
    };
    k.warning = function(g, c, q) {
    };
    k.notUsed = function(g) {
    };
    k.notImplemented = function(g) {
    };
    k.dummyConstructor = function(g) {
    };
    k.abstractMethod = function(g) {
    };
    var d = {};
    k.somewhatImplemented = function(g) {
      d[g] || (d[g] = !0);
    };
    k.unexpected = function(g) {
      k.assert(!1, "Unexpected: " + g);
    };
    k.unexpectedCase = function(g) {
      k.assert(!1, "Unexpected Case: " + g);
    };
  })(p = h.Debug || (h.Debug = {}));
  h.getTicks = function() {
    return performance.now();
  };
  (function(k) {
    function d(c, q) {
      for (var g = 0, d = c.length;g < d;g++) {
        if (c[g] === q) {
          return g;
        }
      }
      c.push(q);
      return c.length - 1;
    }
    k.popManyInto = function(c, q, g) {
      for (var d = q - 1;0 <= d;d--) {
        g[d] = c.pop();
      }
      g.length = q;
    };
    k.popMany = function(c, q) {
      var g = c.length - q, d = c.slice(g, this.length);
      c.length = g;
      return d;
    };
    k.popManyIntoVoid = function(c, q) {
      c.length -= q;
    };
    k.pushMany = function(c, q) {
      for (var g = 0;g < q.length;g++) {
        c.push(q[g]);
      }
    };
    k.top = function(c) {
      return c.length && c[c.length - 1];
    };
    k.last = function(c) {
      return c.length && c[c.length - 1];
    };
    k.peek = function(c) {
      return c[c.length - 1];
    };
    k.indexOf = function(c, q) {
      for (var g = 0, d = c.length;g < d;g++) {
        if (c[g] === q) {
          return g;
        }
      }
      return -1;
    };
    k.equals = function(c, q) {
      if (c.length !== q.length) {
        return !1;
      }
      for (var g = 0;g < c.length;g++) {
        if (c[g] !== q[g]) {
          return !1;
        }
      }
      return !0;
    };
    k.pushUnique = d;
    k.unique = function(c) {
      for (var q = [], g = 0;g < c.length;g++) {
        d(q, c[g]);
      }
      return q;
    };
    k.copyFrom = function(c, q) {
      c.length = 0;
      k.pushMany(c, q);
    };
    k.ensureTypedArrayCapacity = function(c, q) {
      if (c.length < q) {
        var g = c;
        c = new c.constructor(h.IntegerUtilities.nearestPowerOfTwo(q));
        c.set(g, 0);
      }
      return c;
    };
    k.memCopy = function(c, q, g, d, k) {
      void 0 === g && (g = 0);
      void 0 === d && (d = 0);
      void 0 === k && (k = 0);
      0 < d || 0 < k && k < q.length ? (0 >= k && (k = q.length - d), c.set(q.subarray(d, d + k), g)) : c.set(q, g);
    };
    var g = function() {
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
        var g = 2 * this._u8.length;
        g < c && (g = c);
        c = new Uint8Array(g);
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
      c.prototype.writeIntAt = function(c, g) {
        this.ensureCapacity(g + 4);
        this._i32[g >> 2] = c;
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
      c.prototype.write4Floats = function(c, g, d, k) {
        this.ensureCapacity(this._offset + 16);
        this.write4FloatsUnsafe(c, g, d, k);
      };
      c.prototype.write4FloatsUnsafe = function(c, g, d, k) {
        var a = this._offset >> 2;
        this._f32[a + 0] = c;
        this._f32[a + 1] = g;
        this._f32[a + 2] = d;
        this._f32[a + 3] = k;
        this._offset += 16;
      };
      c.prototype.write6Floats = function(c, g, d, k, a, e) {
        this.ensureCapacity(this._offset + 24);
        this.write6FloatsUnsafe(c, g, d, k, a, e);
      };
      c.prototype.write6FloatsUnsafe = function(c, g, d, k, a, e) {
        var n = this._offset >> 2;
        this._f32[n + 0] = c;
        this._f32[n + 1] = g;
        this._f32[n + 2] = d;
        this._f32[n + 3] = k;
        this._f32[n + 4] = a;
        this._f32[n + 5] = e;
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
      c.prototype.hashWords = function(c, g, d) {
        g = this._i32;
        for (var k = 0;k < d;k++) {
          c = (31 * c | 0) + g[k] | 0;
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
    k.ArrayWriter = g;
  })(h.ArrayUtilities || (h.ArrayUtilities = {}));
  var a = function() {
    function k(d) {
      this._u8 = new Uint8Array(d);
      this._u16 = new Uint16Array(d);
      this._i32 = new Int32Array(d);
      this._f32 = new Float32Array(d);
      this._offset = 0;
    }
    Object.defineProperty(k.prototype, "offset", {get:function() {
      return this._offset;
    }, enumerable:!0, configurable:!0});
    k.prototype.isEmpty = function() {
      return this._offset === this._u8.length;
    };
    k.prototype.readInt = function() {
      var d = this._i32[this._offset >> 2];
      this._offset += 4;
      return d;
    };
    k.prototype.readFloat = function() {
      var d = this._f32[this._offset >> 2];
      this._offset += 4;
      return d;
    };
    return k;
  }();
  h.ArrayReader = a;
  (function(k) {
    function d(c, g) {
      return Object.prototype.hasOwnProperty.call(c, g);
    }
    function g(c, g) {
      for (var x in g) {
        d(g, x) && (c[x] = g[x]);
      }
    }
    k.boxValue = function(c) {
      return void 0 == c || f(c) ? c : Object(c);
    };
    k.toKeyValueArray = function(c) {
      var g = Object.prototype.hasOwnProperty, d = [], k;
      for (k in c) {
        g.call(c, k) && d.push([k, c[k]]);
      }
      return d;
    };
    k.isPrototypeWriteable = function(c) {
      return Object.getOwnPropertyDescriptor(c, "prototype").writable;
    };
    k.hasOwnProperty = d;
    k.propertyIsEnumerable = function(c, g) {
      return Object.prototype.propertyIsEnumerable.call(c, g);
    };
    k.getOwnPropertyDescriptor = function(c, g) {
      return Object.getOwnPropertyDescriptor(c, g);
    };
    k.hasOwnGetter = function(c, g) {
      var d = Object.getOwnPropertyDescriptor(c, g);
      return !(!d || !d.get);
    };
    k.getOwnGetter = function(c, g) {
      var d = Object.getOwnPropertyDescriptor(c, g);
      return d ? d.get : null;
    };
    k.hasOwnSetter = function(c, g) {
      var d = Object.getOwnPropertyDescriptor(c, g);
      return !(!d || !d.set);
    };
    k.createMap = function() {
      return Object.create(null);
    };
    k.createArrayMap = function() {
      return [];
    };
    k.defineReadOnlyProperty = function(c, g, d) {
      Object.defineProperty(c, g, {value:d, writable:!1, configurable:!0, enumerable:!1});
    };
    k.getOwnPropertyDescriptors = function(c) {
      for (var g = k.createMap(), d = Object.getOwnPropertyNames(c), a = 0;a < d.length;a++) {
        g[d[a]] = Object.getOwnPropertyDescriptor(c, d[a]);
      }
      return g;
    };
    k.cloneObject = function(c) {
      var q = Object.create(Object.getPrototypeOf(c));
      g(q, c);
      return q;
    };
    k.copyProperties = function(c, g) {
      for (var d in g) {
        c[d] = g[d];
      }
    };
    k.copyOwnProperties = g;
    k.copyOwnPropertyDescriptors = function(c, g, x, k, a) {
      void 0 === x && (x = null);
      void 0 === k && (k = !0);
      void 0 === a && (a = !1);
      for (var e in g) {
        if (d(g, e) && (!x || x(e))) {
          var n = Object.getOwnPropertyDescriptor(g, e);
          if (k || !d(c, e)) {
            try {
              a && !1 === n.writable && (n.writable = !0), Object.defineProperty(c, e, n);
            } catch (l) {
              p.assert("Can't define: " + e);
            }
          }
        }
      }
    };
    k.copyPropertiesByList = function(c, g, d) {
      for (var k = 0;k < d.length;k++) {
        var a = d[k];
        c[a] = g[a];
      }
    };
    k.getLatestGetterOrSetterPropertyDescriptor = function(c, g) {
      for (var d = {};c;) {
        var k = Object.getOwnPropertyDescriptor(c, g);
        k && (d.get = d.get || k.get, d.set = d.set || k.set);
        if (d.get && d.set) {
          break;
        }
        c = Object.getPrototypeOf(c);
      }
      return d;
    };
    k.defineNonEnumerableGetterOrSetter = function(c, g, d, a) {
      var e = k.getLatestGetterOrSetterPropertyDescriptor(c, g);
      e.configurable = !0;
      e.enumerable = !1;
      a ? e.get = d : e.set = d;
      Object.defineProperty(c, g, e);
    };
    k.defineNonEnumerableGetter = function(c, g, d) {
      Object.defineProperty(c, g, {get:d, configurable:!0, enumerable:!1});
    };
    k.defineNonEnumerableSetter = function(c, g, d) {
      Object.defineProperty(c, g, {set:d, configurable:!0, enumerable:!1});
    };
    k.defineNonEnumerableProperty = function(c, g, d) {
      Object.defineProperty(c, g, {value:d, writable:!0, configurable:!0, enumerable:!1});
    };
    k.defineNonEnumerableForwardingProperty = function(c, g, d) {
      Object.defineProperty(c, g, {get:e.makeForwardingGetter(d), set:e.makeForwardingSetter(d), writable:!0, configurable:!0, enumerable:!1});
    };
    k.defineNewNonEnumerableProperty = function(c, g, d) {
      k.defineNonEnumerableProperty(c, g, d);
    };
    k.createPublicAliases = function(c, g) {
      for (var d = {value:null, writable:!0, configurable:!0, enumerable:!1}, k = 0;k < g.length;k++) {
        var a = g[k];
        d.value = c[a];
        Object.defineProperty(c, "$Bg" + a, d);
      }
    };
  })(h.ObjectUtilities || (h.ObjectUtilities = {}));
  var e;
  (function(k) {
    k.makeForwardingGetter = function(d) {
      return new Function('return this["' + d + '"]//# sourceURL=fwd-get-' + d + ".as");
    };
    k.makeForwardingSetter = function(d) {
      return new Function("value", 'this["' + d + '"] = value;//# sourceURL=fwd-set-' + d + ".as");
    };
    k.bindSafely = function(d, g) {
      function c() {
        return d.apply(g, arguments);
      }
      c.boundTo = g;
      return c;
    };
  })(e = h.FunctionUtilities || (h.FunctionUtilities = {}));
  (function(k) {
    function d(c) {
      return "string" === typeof c ? '"' + c + '"' : "number" === typeof c || "boolean" === typeof c ? String(c) : c instanceof Array ? "[] " + c.length : typeof c;
    }
    function g(c, g, d) {
      q[0] = c;
      q[1] = g;
      q[2] = d;
      return q.join("");
    }
    function c(c, g, q, d) {
      a[0] = c;
      a[1] = g;
      a[2] = q;
      a[3] = d;
      return a.join("");
    }
    k.repeatString = function(c, g) {
      for (var q = "", d = 0;d < g;d++) {
        q += c;
      }
      return q;
    };
    k.memorySizeToString = function(c) {
      c |= 0;
      return 1024 > c ? c + " B" : 1048576 > c ? (c / 1024).toFixed(2) + "KB" : (c / 1048576).toFixed(2) + "MB";
    };
    k.toSafeString = d;
    k.toSafeArrayString = function(c) {
      for (var g = [], q = 0;q < c.length;q++) {
        g.push(d(c[q]));
      }
      return g.join(", ");
    };
    k.utf8decode = function(c) {
      for (var g = new Uint8Array(4 * c.length), q = 0, d = 0, k = c.length;d < k;d++) {
        var a = c.charCodeAt(d);
        if (127 >= a) {
          g[q++] = a;
        } else {
          if (55296 <= a && 56319 >= a) {
            var x = c.charCodeAt(d + 1);
            56320 <= x && 57343 >= x && (a = ((a & 1023) << 10) + (x & 1023) + 65536, ++d);
          }
          0 !== (a & 4292870144) ? (g[q++] = 248 | a >>> 24 & 3, g[q++] = 128 | a >>> 18 & 63, g[q++] = 128 | a >>> 12 & 63, g[q++] = 128 | a >>> 6 & 63) : 0 !== (a & 4294901760) ? (g[q++] = 240 | a >>> 18 & 7, g[q++] = 128 | a >>> 12 & 63, g[q++] = 128 | a >>> 6 & 63) : 0 !== (a & 4294965248) ? (g[q++] = 224 | a >>> 12 & 15, g[q++] = 128 | a >>> 6 & 63) : g[q++] = 192 | a >>> 6 & 31;
          g[q++] = 128 | a & 63;
        }
      }
      return g.subarray(0, q);
    };
    k.utf8encode = function(c) {
      for (var g = 0, q = "";g < c.length;) {
        var d = c[g++] & 255;
        if (127 >= d) {
          q += String.fromCharCode(d);
        } else {
          var k = 192, a = 5;
          do {
            if ((d & (k >> 1 | 128)) === k) {
              break;
            }
            k = k >> 1 | 128;
            --a;
          } while (0 <= a);
          if (0 >= a) {
            q += String.fromCharCode(d);
          } else {
            for (var d = d & (1 << a) - 1, k = !1, x = 5;x >= a;--x) {
              var e = c[g++];
              if (128 != (e & 192)) {
                k = !0;
                break;
              }
              d = d << 6 | e & 63;
            }
            if (k) {
              for (a = g - (7 - x);a < g;++a) {
                q += String.fromCharCode(c[a] & 255);
              }
            } else {
              q = 65536 <= d ? q + String.fromCharCode(d - 65536 >> 10 & 1023 | 55296, d & 1023 | 56320) : q + String.fromCharCode(d);
            }
          }
        }
      }
      return q;
    };
    k.base64ArrayBuffer = function(q) {
      var d = "";
      q = new Uint8Array(q);
      for (var a = q.byteLength, k = a % 3, a = a - k, x, e, F, I, n = 0;n < a;n += 3) {
        I = q[n] << 16 | q[n + 1] << 8 | q[n + 2], x = (I & 16515072) >> 18, e = (I & 258048) >> 12, F = (I & 4032) >> 6, I &= 63, d += c("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[x], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[F], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[I]);
      }
      1 == k ? (I = q[a], d += g("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(I & 252) >> 2], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(I & 3) << 4], "==")) : 2 == k && (I = q[a] << 8 | q[a + 1], d += c("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(I & 64512) >> 10], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(I & 1008) >> 4], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(I & 15) << 
      2], "="));
      return d;
    };
    k.escapeString = function(c) {
      void 0 !== c && (c = c.replace(/[^\w$]/gi, "$"), /^\d/.test(c) && (c = "$" + c));
      return c;
    };
    k.fromCharCodeArray = function(c) {
      for (var g = "", q = 0;q < c.length;q += 16384) {
        var d = Math.min(c.length - q, 16384), g = g + String.fromCharCode.apply(null, c.subarray(q, q + d))
      }
      return g;
    };
    k.variableLengthEncodeInt32 = function(c) {
      for (var g = 32 - Math.clz32(c), q = Math.ceil(g / 6), g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[q], q = q - 1;0 <= q;q--) {
        g += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[c >> 6 * q & 63];
      }
      return g;
    };
    k.toEncoding = function(c) {
      return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[c];
    };
    k.fromEncoding = function(c) {
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
    k.variableLengthDecodeInt32 = function(c) {
      for (var g = k.fromEncoding(c.charCodeAt(0)), q = 0, d = 0;d < g;d++) {
        var a = 6 * (g - d - 1), q = q | k.fromEncoding(c.charCodeAt(1 + d)) << a
      }
      return q;
    };
    k.trimMiddle = function(c, g) {
      if (c.length <= g) {
        return c;
      }
      var q = g >> 1, d = g - q - 1;
      return c.substr(0, q) + "\u2026" + c.substr(c.length - d, d);
    };
    k.multiple = function(c, g) {
      for (var q = "", d = 0;d < g;d++) {
        q += c;
      }
      return q;
    };
    k.indexOfAny = function(c, g, q) {
      for (var d = c.length, a = 0;a < g.length;a++) {
        var k = c.indexOf(g[a], q);
        0 <= k && (d = Math.min(d, k));
      }
      return d === c.length ? -1 : d;
    };
    var q = Array(3), a = Array(4), e = Array(5), I = Array(6), n = Array(7), l = Array(8), u = Array(9);
    k.concat3 = g;
    k.concat4 = c;
    k.concat5 = function(c, g, q, d, a) {
      e[0] = c;
      e[1] = g;
      e[2] = q;
      e[3] = d;
      e[4] = a;
      return e.join("");
    };
    k.concat6 = function(c, g, q, d, a, k) {
      I[0] = c;
      I[1] = g;
      I[2] = q;
      I[3] = d;
      I[4] = a;
      I[5] = k;
      return I.join("");
    };
    k.concat7 = function(c, g, q, d, a, k, x) {
      n[0] = c;
      n[1] = g;
      n[2] = q;
      n[3] = d;
      n[4] = a;
      n[5] = k;
      n[6] = x;
      return n.join("");
    };
    k.concat8 = function(c, g, q, d, a, k, x, e) {
      l[0] = c;
      l[1] = g;
      l[2] = q;
      l[3] = d;
      l[4] = a;
      l[5] = k;
      l[6] = x;
      l[7] = e;
      return l.join("");
    };
    k.concat9 = function(c, g, q, d, a, k, x, e, F) {
      u[0] = c;
      u[1] = g;
      u[2] = q;
      u[3] = d;
      u[4] = a;
      u[5] = k;
      u[6] = x;
      u[7] = e;
      u[8] = F;
      return u.join("");
    };
  })(h.StringUtilities || (h.StringUtilities = {}));
  (function(a) {
    var d = new Uint8Array([7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21]), g = new Int32Array([-680876936, -389564586, 606105819, -1044525330, -176418897, 1200080426, -1473231341, -45705983, 1770035416, -1958414417, -42063, -1990404162, 1804603682, -40341101, -1502002290, 1236535329, -165796510, -1069501632, 
    643717713, -373897302, -701558691, 38016083, -660478335, -405537848, 568446438, -1019803690, -187363961, 1163531501, -1444681467, -51403784, 1735328473, -1926607734, -378558, -2022574463, 1839030562, -35309556, -1530992060, 1272893353, -155497632, -1094730640, 681279174, -358537222, -722521979, 76029189, -640364487, -421815835, 530742520, -995338651, -198630844, 1126891415, -1416354905, -57434055, 1700485571, -1894986606, -1051523, -2054922799, 1873313359, -30611744, -1560198380, 1309151649, 
    -145523070, -1120210379, 718787259, -343485551]);
    a.hashBytesTo32BitsMD5 = function(c, q, a) {
      var k = 1732584193, e = -271733879, n = -1732584194, l = 271733878, u = a + 72 & -64, b = new Uint8Array(u), m;
      for (m = 0;m < a;++m) {
        b[m] = c[q++];
      }
      b[m++] = 128;
      for (c = u - 8;m < c;) {
        b[m++] = 0;
      }
      b[m++] = a << 3 & 255;
      b[m++] = a >> 5 & 255;
      b[m++] = a >> 13 & 255;
      b[m++] = a >> 21 & 255;
      b[m++] = a >>> 29 & 255;
      b[m++] = 0;
      b[m++] = 0;
      b[m++] = 0;
      c = new Int32Array(16);
      for (m = 0;m < u;) {
        for (a = 0;16 > a;++a, m += 4) {
          c[a] = b[m] | b[m + 1] << 8 | b[m + 2] << 16 | b[m + 3] << 24;
        }
        var p = k;
        q = e;
        var t = n, w = l, f, h;
        for (a = 0;64 > a;++a) {
          16 > a ? (f = q & t | ~q & w, h = a) : 32 > a ? (f = w & q | ~w & t, h = 5 * a + 1 & 15) : 48 > a ? (f = q ^ t ^ w, h = 3 * a + 5 & 15) : (f = t ^ (q | ~w), h = 7 * a & 15);
          var r = w, p = p + f + g[a] + c[h] | 0;
          f = d[a];
          w = t;
          t = q;
          q = q + (p << f | p >>> 32 - f) | 0;
          p = r;
        }
        k = k + p | 0;
        e = e + q | 0;
        n = n + t | 0;
        l = l + w | 0;
      }
      return k;
    };
    a.hashBytesTo32BitsAdler = function(c, g, d) {
      var a = 1, k = 0;
      for (d = g + d;g < d;++g) {
        a = (a + (c[g] & 255)) % 65521, k = (k + a) % 65521;
      }
      return k << 16 | a;
    };
    a.mixHash = function(c, g) {
      return (31 * c | 0) + g | 0;
    };
  })(h.HashUtilities || (h.HashUtilities = {}));
  var n = function() {
    function a() {
    }
    a.seed = function(d) {
      a._state[0] = d;
      a._state[1] = d;
    };
    a.reset = function() {
      a._state[0] = 57005;
      a._state[1] = 48879;
    };
    a.next = function() {
      var d = this._state, g = Math.imul(18273, d[0] & 65535) + (d[0] >>> 16) | 0;
      d[0] = g;
      var c = Math.imul(36969, d[1] & 65535) + (d[1] >>> 16) | 0;
      d[1] = c;
      d = (g << 16) + (c & 65535) | 0;
      return 2.3283064365386963E-10 * (0 > d ? d + 4294967296 : d);
    };
    a._state = new Uint32Array([57005, 48879]);
    return a;
  }();
  h.Random = n;
  Math.random = function() {
    return n.next();
  };
  (function() {
    function a() {
      this.id = "$weakmap" + d++;
    }
    if ("function" !== typeof jsGlobal.WeakMap) {
      var d = 0;
      a.prototype = {has:function(g) {
        return g.hasOwnProperty(this.id);
      }, get:function(g, c) {
        return g.hasOwnProperty(this.id) ? g[this.id] : c;
      }, set:function(g, c) {
        Object.defineProperty(g, this.id, {value:c, enumerable:!1, configurable:!0});
      }, delete:function(g) {
        delete g[this.id];
      }};
      jsGlobal.WeakMap = a;
    }
  })();
  a = function() {
    function a() {
      "undefined" !== typeof ShumwayCom && ShumwayCom.getWeakMapKeys ? this._map = new WeakMap : this._list = [];
    }
    a.prototype.clear = function() {
      this._map ? this._map.clear() : this._list.length = 0;
    };
    a.prototype.push = function(d) {
      this._map ? this._map.set(d, null) : this._list.push(d);
    };
    a.prototype.remove = function(d) {
      this._map ? this._map.delete(d) : this._list[this._list.indexOf(d)] = null;
    };
    a.prototype.forEach = function(d) {
      if (this._map) {
        ShumwayCom.getWeakMapKeys(this._map).forEach(function(c) {
          0 !== c._referenceCount && d(c);
        });
      } else {
        for (var g = this._list, c = 0, q = 0;q < g.length;q++) {
          var a = g[q];
          a && (0 === a._referenceCount ? (g[q] = null, c++) : d(a));
        }
        if (16 < c && c > g.length >> 2) {
          c = [];
          for (q = 0;q < g.length;q++) {
            (a = g[q]) && 0 < a._referenceCount && c.push(a);
          }
          this._list = c;
        }
      }
    };
    Object.defineProperty(a.prototype, "length", {get:function() {
      return this._map ? -1 : this._list.length;
    }, enumerable:!0, configurable:!0});
    return a;
  }();
  h.WeakList = a;
  var m;
  (function(a) {
    a.pow2 = function(d) {
      return d === (d | 0) ? 0 > d ? 1 / (1 << -d) : 1 << d : Math.pow(2, d);
    };
    a.clamp = function(d, g, c) {
      return Math.max(g, Math.min(c, d));
    };
    a.roundHalfEven = function(d) {
      if (.5 === Math.abs(d % 1)) {
        var g = Math.floor(d);
        return 0 === g % 2 ? g : Math.ceil(d);
      }
      return Math.round(d);
    };
    a.altTieBreakRound = function(d, g) {
      return .5 !== Math.abs(d % 1) || g ? Math.round(d) : d | 0;
    };
    a.epsilonEquals = function(d, g) {
      return 1E-7 > Math.abs(d - g);
    };
  })(m = h.NumberUtilities || (h.NumberUtilities = {}));
  (function(a) {
    a[a.MaxU16 = 65535] = "MaxU16";
    a[a.MaxI16 = 32767] = "MaxI16";
    a[a.MinI16 = -32768] = "MinI16";
  })(h.Numbers || (h.Numbers = {}));
  var w;
  (function(a) {
    function d(c) {
      return 256 * c << 16 >> 16;
    }
    var g = new ArrayBuffer(8);
    a.i8 = new Int8Array(g);
    a.u8 = new Uint8Array(g);
    a.i32 = new Int32Array(g);
    a.f32 = new Float32Array(g);
    a.f64 = new Float64Array(g);
    a.nativeLittleEndian = 1 === (new Int8Array((new Int32Array([1])).buffer))[0];
    a.floatToInt32 = function(c) {
      a.f32[0] = c;
      return a.i32[0];
    };
    a.int32ToFloat = function(c) {
      a.i32[0] = c;
      return a.f32[0];
    };
    a.swap16 = function(c) {
      return (c & 255) << 8 | c >> 8 & 255;
    };
    a.swap32 = function(c) {
      return (c & 255) << 24 | (c & 65280) << 8 | c >> 8 & 65280 | c >> 24 & 255;
    };
    a.toS8U8 = d;
    a.fromS8U8 = function(c) {
      return c / 256;
    };
    a.clampS8U8 = function(c) {
      return d(c) / 256;
    };
    a.toS16 = function(c) {
      return c << 16 >> 16;
    };
    a.bitCount = function(c) {
      c -= c >> 1 & 1431655765;
      c = (c & 858993459) + (c >> 2 & 858993459);
      return 16843009 * (c + (c >> 4) & 252645135) >> 24;
    };
    a.ones = function(c) {
      c -= c >> 1 & 1431655765;
      c = (c & 858993459) + (c >> 2 & 858993459);
      return 16843009 * (c + (c >> 4) & 252645135) >> 24;
    };
    a.trailingZeros = function(c) {
      return a.ones((c & -c) - 1);
    };
    a.getFlags = function(c, g) {
      var d = "";
      for (c = 0;c < g.length;c++) {
        c & 1 << c && (d += g[c] + " ");
      }
      return 0 === d.length ? "" : d.trim();
    };
    a.isPowerOfTwo = function(c) {
      return c && 0 === (c & c - 1);
    };
    a.roundToMultipleOfFour = function(c) {
      return c + 3 & -4;
    };
    a.nearestPowerOfTwo = function(c) {
      c--;
      c |= c >> 1;
      c |= c >> 2;
      c |= c >> 4;
      c |= c >> 8;
      c |= c >> 16;
      c++;
      return c;
    };
    a.roundToMultipleOfPowerOfTwo = function(c, g) {
      var d = (1 << g) - 1;
      return c + d & ~d;
    };
    a.toHEX = function(c) {
      return "0x" + ("00000000" + (0 > c ? 4294967295 + c + 1 : c).toString(16)).substr(-8);
    };
    Math.imul || (Math.imul = function(c, g) {
      var d = c & 65535, a = g & 65535;
      return d * a + ((c >>> 16 & 65535) * a + d * (g >>> 16 & 65535) << 16 >>> 0) | 0;
    });
    Math.clz32 || (Math.clz32 = function(c) {
      c |= c >> 1;
      c |= c >> 2;
      c |= c >> 4;
      c |= c >> 8;
      return 32 - a.ones(c | c >> 16);
    });
  })(w = h.IntegerUtilities || (h.IntegerUtilities = {}));
  (function(a) {
    function d(g, c, q, d, a, k) {
      return (q - g) * (k - c) - (d - c) * (a - g);
    }
    a.pointInPolygon = function(g, c, q) {
      for (var d = 0, a = q.length - 2, k = 0;k < a;k += 2) {
        var e = q[k + 0], n = q[k + 1], l = q[k + 2], u = q[k + 3];
        (n <= c && u > c || n > c && u <= c) && g < e + (c - n) / (u - n) * (l - e) && d++;
      }
      return 1 === (d & 1);
    };
    a.signedArea = d;
    a.counterClockwise = function(g, c, q, a, k, e) {
      return 0 < d(g, c, q, a, k, e);
    };
    a.clockwise = function(g, c, q, a, k, e) {
      return 0 > d(g, c, q, a, k, e);
    };
    a.pointInPolygonInt32 = function(g, c, q) {
      g |= 0;
      c |= 0;
      for (var d = 0, a = q.length - 2, k = 0;k < a;k += 2) {
        var e = q[k + 0], n = q[k + 1], l = q[k + 2], u = q[k + 3];
        (n <= c && u > c || n > c && u <= c) && g < e + (c - n) / (u - n) * (l - e) && d++;
      }
      return 1 === (d & 1);
    };
  })(h.GeometricUtilities || (h.GeometricUtilities = {}));
  (function(a) {
    a[a.Error = 1] = "Error";
    a[a.Warn = 2] = "Warn";
    a[a.Debug = 4] = "Debug";
    a[a.Log = 8] = "Log";
    a[a.Info = 16] = "Info";
    a[a.All = 31] = "All";
  })(h.LogLevel || (h.LogLevel = {}));
  a = function() {
    function a(d, g) {
      void 0 === d && (d = !1);
      this._tab = "  ";
      this._padding = "";
      this._suppressOutput = d;
      this._out = g || a._consoleOut;
      this._outNoNewline = g || a._consoleOutNoNewline;
    }
    Object.defineProperty(a.prototype, "suppressOutput", {get:function() {
      return this._suppressOutput;
    }, set:function(d) {
      this._suppressOutput = d;
    }, enumerable:!0, configurable:!0});
    a.prototype.write = function(d, g) {
      void 0 === d && (d = "");
      void 0 === g && (g = !1);
      this._suppressOutput || this._outNoNewline((g ? this._padding : "") + d);
    };
    a.prototype.writeLn = function(d) {
      void 0 === d && (d = "");
      this._suppressOutput || this._out(this._padding + d);
    };
    a.prototype.writeObject = function(d, g) {
      void 0 === d && (d = "");
      this._suppressOutput || this._out(this._padding + d, g);
    };
    a.prototype.writeTimeLn = function(d) {
      void 0 === d && (d = "");
      this._suppressOutput || this._out(this._padding + performance.now().toFixed(2) + " " + d);
    };
    a.prototype.writeComment = function(d) {
      d = (d || "").split("\n");
      if (1 === d.length) {
        this.writeLn("// " + d[0]);
      } else {
        this.writeLn("/**");
        for (var g = 0;g < d.length;g++) {
          this.writeLn(" * " + d[g]);
        }
        this.writeLn(" */");
      }
    };
    a.prototype.writeLns = function(d) {
      d = (d || "").split("\n");
      for (var g = 0;g < d.length;g++) {
        this.writeLn(d[g]);
      }
    };
    a.prototype.errorLn = function(d) {
      a.logLevel & 1 && this.boldRedLn(d);
    };
    a.prototype.warnLn = function(d) {
      a.logLevel & 2 && this.yellowLn(d);
    };
    a.prototype.debugLn = function(d) {
      a.logLevel & 4 && this.purpleLn(d);
    };
    a.prototype.logLn = function(d) {
      a.logLevel & 8 && this.writeLn(d);
    };
    a.prototype.infoLn = function(d) {
      a.logLevel & 16 && this.writeLn(d);
    };
    a.prototype.yellowLn = function(d) {
      this.colorLn(a.YELLOW, d);
    };
    a.prototype.greenLn = function(d) {
      this.colorLn(a.GREEN, d);
    };
    a.prototype.boldRedLn = function(d) {
      this.colorLn(a.BOLD_RED, d);
    };
    a.prototype.redLn = function(d) {
      this.colorLn(a.RED, d);
    };
    a.prototype.purpleLn = function(d) {
      this.colorLn(a.PURPLE, d);
    };
    a.prototype.colorLn = function(d, g) {
      this._suppressOutput || (inBrowser ? this._out(this._padding + g) : this._out(this._padding + d + g + a.ENDC));
    };
    a.prototype.redLns = function(d) {
      this.colorLns(a.RED, d);
    };
    a.prototype.colorLns = function(d, g) {
      for (var c = (g || "").split("\n"), q = 0;q < c.length;q++) {
        this.colorLn(d, c[q]);
      }
    };
    a.prototype.enter = function(d) {
      this._suppressOutput || this._out(this._padding + d);
      this.indent();
    };
    a.prototype.leaveAndEnter = function(d) {
      this.leave(d);
      this.indent();
    };
    a.prototype.leave = function(d) {
      this.outdent();
      !this._suppressOutput && d && this._out(this._padding + d);
    };
    a.prototype.indent = function() {
      this._padding += this._tab;
    };
    a.prototype.outdent = function() {
      0 < this._padding.length && (this._padding = this._padding.substring(0, this._padding.length - this._tab.length));
    };
    a.prototype.writeArray = function(d, g, c) {
      void 0 === g && (g = !1);
      void 0 === c && (c = !1);
      g = g || !1;
      for (var q = 0, a = d.length;q < a;q++) {
        var e = "";
        g && (e = null === d[q] ? "null" : void 0 === d[q] ? "undefined" : d[q].constructor.name, e += " ");
        var k = c ? "" : ("" + q).padRight(" ", 4);
        this.writeLn(k + e + d[q]);
      }
    };
    a.PURPLE = "\u001b[94m";
    a.YELLOW = "\u001b[93m";
    a.GREEN = "\u001b[92m";
    a.RED = "\u001b[91m";
    a.BOLD_RED = "\u001b[1;91m";
    a.ENDC = "\u001b[0m";
    a.logLevel = 31;
    a._consoleOut = console.info.bind(console);
    a._consoleOutNoNewline = console.info.bind(console);
    return a;
  }();
  h.IndentingWriter = a;
  var t = function() {
    return function(a, d) {
      this.value = a;
      this.next = d;
    };
  }(), a = function() {
    function a(d) {
      this._compare = d;
      this._head = null;
      this._length = 0;
    }
    a.prototype.push = function(d) {
      this._length++;
      if (this._head) {
        var g = this._head, c = null;
        d = new t(d, null);
        for (var q = this._compare;g;) {
          if (0 < q(g.value, d.value)) {
            c ? (d.next = g, c.next = d) : (d.next = this._head, this._head = d);
            return;
          }
          c = g;
          g = g.next;
        }
        c.next = d;
      } else {
        this._head = new t(d, null);
      }
    };
    a.prototype.forEach = function(d) {
      for (var g = this._head, c = null;g;) {
        var q = d(g.value);
        if (q === a.RETURN) {
          break;
        } else {
          q === a.DELETE ? g = c ? c.next = g.next : this._head = this._head.next : (c = g, g = g.next);
        }
      }
    };
    a.prototype.isEmpty = function() {
      return !this._head;
    };
    a.prototype.pop = function() {
      if (this._head) {
        this._length--;
        var d = this._head;
        this._head = this._head.next;
        return d.value;
      }
    };
    a.prototype.contains = function(d) {
      for (var g = this._head;g;) {
        if (g.value === d) {
          return !0;
        }
        g = g.next;
      }
      return !1;
    };
    a.prototype.toString = function() {
      for (var d = "[", g = this._head;g;) {
        d += g.value.toString(), (g = g.next) && (d += ",");
      }
      return d + "]";
    };
    a.RETURN = 1;
    a.DELETE = 2;
    return a;
  }();
  h.SortedList = a;
  a = function() {
    function a(d, g) {
      void 0 === g && (g = 12);
      this.start = this.index = 0;
      this._size = 1 << g;
      this._mask = this._size - 1;
      this.array = new d(this._size);
    }
    a.prototype.get = function(d) {
      return this.array[d];
    };
    a.prototype.forEachInReverse = function(d) {
      if (!this.isEmpty()) {
        for (var g = 0 === this.index ? this._size - 1 : this.index - 1, c = this.start - 1 & this._mask;g !== c && !d(this.array[g], g);) {
          g = 0 === g ? this._size - 1 : g - 1;
        }
      }
    };
    a.prototype.write = function(d) {
      this.array[this.index] = d;
      this.index = this.index + 1 & this._mask;
      this.index === this.start && (this.start = this.start + 1 & this._mask);
    };
    a.prototype.isFull = function() {
      return (this.index + 1 & this._mask) === this.start;
    };
    a.prototype.isEmpty = function() {
      return this.index === this.start;
    };
    a.prototype.reset = function() {
      this.start = this.index = 0;
    };
    return a;
  }();
  h.CircularBuffer = a;
  (function(a) {
    function d(c) {
      return c + (a.BITS_PER_WORD - 1) >> a.ADDRESS_BITS_PER_WORD << a.ADDRESS_BITS_PER_WORD;
    }
    function g(c, g) {
      c = c || "1";
      g = g || "0";
      for (var q = "", a = 0;a < length;a++) {
        q += this.get(a) ? c : g;
      }
      return q;
    }
    function c(c) {
      for (var g = [], q = 0;q < length;q++) {
        this.get(q) && g.push(c ? c[q] : q);
      }
      return g.join(", ");
    }
    a.ADDRESS_BITS_PER_WORD = 5;
    a.BITS_PER_WORD = 1 << a.ADDRESS_BITS_PER_WORD;
    a.BIT_INDEX_MASK = a.BITS_PER_WORD - 1;
    var q = function() {
      function c(g) {
        this.size = d(g);
        this.dirty = this.count = 0;
        this.length = g;
        this.bits = new Uint32Array(this.size >> a.ADDRESS_BITS_PER_WORD);
      }
      c.prototype.recount = function() {
        if (this.dirty) {
          for (var c = this.bits, g = 0, q = 0, a = c.length;q < a;q++) {
            var d = c[q], d = d - (d >> 1 & 1431655765), d = (d & 858993459) + (d >> 2 & 858993459), g = g + (16843009 * (d + (d >> 4) & 252645135) >> 24)
          }
          this.count = g;
          this.dirty = 0;
        }
      };
      c.prototype.set = function(c) {
        var g = c >> a.ADDRESS_BITS_PER_WORD, q = this.bits[g];
        c = q | 1 << (c & a.BIT_INDEX_MASK);
        this.bits[g] = c;
        this.dirty |= q ^ c;
      };
      c.prototype.setAll = function() {
        for (var c = this.bits, g = 0, q = c.length;g < q;g++) {
          c[g] = 4294967295;
        }
        this.count = this.size;
        this.dirty = 0;
      };
      c.prototype.assign = function(c) {
        this.count = c.count;
        this.dirty = c.dirty;
        this.size = c.size;
        for (var g = 0, q = this.bits.length;g < q;g++) {
          this.bits[g] = c.bits[g];
        }
      };
      c.prototype.clear = function(c) {
        var g = c >> a.ADDRESS_BITS_PER_WORD, q = this.bits[g];
        c = q & ~(1 << (c & a.BIT_INDEX_MASK));
        this.bits[g] = c;
        this.dirty |= q ^ c;
      };
      c.prototype.get = function(c) {
        return 0 !== (this.bits[c >> a.ADDRESS_BITS_PER_WORD] & 1 << (c & a.BIT_INDEX_MASK));
      };
      c.prototype.clearAll = function() {
        for (var c = this.bits, g = 0, q = c.length;g < q;g++) {
          c[g] = 0;
        }
        this.dirty = this.count = 0;
      };
      c.prototype._union = function(c) {
        var g = this.dirty, q = this.bits;
        c = c.bits;
        for (var a = 0, d = q.length;a < d;a++) {
          var e = q[a], x = e | c[a];
          q[a] = x;
          g |= e ^ x;
        }
        this.dirty = g;
      };
      c.prototype.intersect = function(c) {
        var g = this.dirty, q = this.bits;
        c = c.bits;
        for (var a = 0, d = q.length;a < d;a++) {
          var e = q[a], x = e & c[a];
          q[a] = x;
          g |= e ^ x;
        }
        this.dirty = g;
      };
      c.prototype.subtract = function(c) {
        var g = this.dirty, q = this.bits;
        c = c.bits;
        for (var a = 0, d = q.length;a < d;a++) {
          var e = q[a], x = e & ~c[a];
          q[a] = x;
          g |= e ^ x;
        }
        this.dirty = g;
      };
      c.prototype.negate = function() {
        for (var c = this.dirty, g = this.bits, q = 0, a = g.length;q < a;q++) {
          var d = g[q], e = ~d;
          g[q] = e;
          c |= d ^ e;
        }
        this.dirty = c;
      };
      c.prototype.forEach = function(c) {
        for (var g = this.bits, q = 0, d = g.length;q < d;q++) {
          var e = g[q];
          if (e) {
            for (var x = 0;x < a.BITS_PER_WORD;x++) {
              e & 1 << x && c(q * a.BITS_PER_WORD + x);
            }
          }
        }
      };
      c.prototype.toArray = function() {
        for (var c = [], g = this.bits, q = 0, d = g.length;q < d;q++) {
          var e = g[q];
          if (e) {
            for (var x = 0;x < a.BITS_PER_WORD;x++) {
              e & 1 << x && c.push(q * a.BITS_PER_WORD + x);
            }
          }
        }
        return c;
      };
      c.prototype.equals = function(c) {
        if (this.size !== c.size) {
          return !1;
        }
        var g = this.bits;
        c = c.bits;
        for (var q = 0, a = g.length;q < a;q++) {
          if (g[q] !== c[q]) {
            return !1;
          }
        }
        return !0;
      };
      c.prototype.contains = function(c) {
        if (this.size !== c.size) {
          return !1;
        }
        var g = this.bits;
        c = c.bits;
        for (var q = 0, a = g.length;q < a;q++) {
          if ((g[q] | c[q]) !== g[q]) {
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
        var g = new c(this.length);
        g._union(this);
        return g;
      };
      return c;
    }();
    a.Uint32ArrayBitSet = q;
    var e = function() {
      function c(g) {
        this.dirty = this.count = 0;
        this.size = d(g);
        this.bits = 0;
        this.singleWord = !0;
        this.length = g;
      }
      c.prototype.recount = function() {
        if (this.dirty) {
          var c = this.bits, c = c - (c >> 1 & 1431655765), c = (c & 858993459) + (c >> 2 & 858993459);
          this.count = 0 + (16843009 * (c + (c >> 4) & 252645135) >> 24);
          this.dirty = 0;
        }
      };
      c.prototype.set = function(c) {
        var g = this.bits;
        this.bits = c = g | 1 << (c & a.BIT_INDEX_MASK);
        this.dirty |= g ^ c;
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
        var g = this.bits;
        this.bits = c = g & ~(1 << (c & a.BIT_INDEX_MASK));
        this.dirty |= g ^ c;
      };
      c.prototype.get = function(c) {
        return 0 !== (this.bits & 1 << (c & a.BIT_INDEX_MASK));
      };
      c.prototype.clearAll = function() {
        this.dirty = this.count = this.bits = 0;
      };
      c.prototype._union = function(c) {
        var g = this.bits;
        this.bits = c = g | c.bits;
        this.dirty = g ^ c;
      };
      c.prototype.intersect = function(c) {
        var g = this.bits;
        this.bits = c = g & c.bits;
        this.dirty = g ^ c;
      };
      c.prototype.subtract = function(c) {
        var g = this.bits;
        this.bits = c = g & ~c.bits;
        this.dirty = g ^ c;
      };
      c.prototype.negate = function() {
        var c = this.bits, g = ~c;
        this.bits = g;
        this.dirty = c ^ g;
      };
      c.prototype.forEach = function(c) {
        var g = this.bits;
        if (g) {
          for (var q = 0;q < a.BITS_PER_WORD;q++) {
            g & 1 << q && c(q);
          }
        }
      };
      c.prototype.toArray = function() {
        var c = [], g = this.bits;
        if (g) {
          for (var q = 0;q < a.BITS_PER_WORD;q++) {
            g & 1 << q && c.push(q);
          }
        }
        return c;
      };
      c.prototype.equals = function(c) {
        return this.bits === c.bits;
      };
      c.prototype.contains = function(c) {
        var g = this.bits;
        return (g | c.bits) === g;
      };
      c.prototype.isEmpty = function() {
        this.recount();
        return 0 === this.count;
      };
      c.prototype.clone = function() {
        var g = new c(this.length);
        g._union(this);
        return g;
      };
      return c;
    }();
    a.Uint32BitSet = e;
    e.prototype.toString = c;
    e.prototype.toBitString = g;
    q.prototype.toString = c;
    q.prototype.toBitString = g;
    a.BitSetFunctor = function(c) {
      var g = 1 === d(c) >> a.ADDRESS_BITS_PER_WORD ? e : q;
      return function() {
        return new g(c);
      };
    };
  })(h.BitSets || (h.BitSets = {}));
  a = function() {
    function a() {
    }
    a.randomStyle = function() {
      a._randomStyleCache || (a._randomStyleCache = "#ff5e3a #ff9500 #ffdb4c #87fc70 #52edc7 #1ad6fd #c644fc #ef4db6 #4a4a4a #dbddde #ff3b30 #ff9500 #ffcc00 #4cd964 #34aadc #007aff #5856d6 #ff2d55 #8e8e93 #c7c7cc #5ad427 #c86edf #d1eefc #e0f8d8 #fb2b69 #f7f7f7 #1d77ef #d6cec3 #55efcb #ff4981 #ffd3e0 #f7f7f7 #ff1300 #1f1f21 #bdbec2 #ff3a2d".split(" "));
      return a._randomStyleCache[a._nextStyle++ % a._randomStyleCache.length];
    };
    a.gradientColor = function(d) {
      return a._gradient[a._gradient.length * m.clamp(d, 0, 1) | 0];
    };
    a.contrastStyle = function(a) {
      a = parseInt(a.substr(1), 16);
      return 128 <= (299 * (a >> 16) + 587 * (a >> 8 & 255) + 114 * (a & 255)) / 1E3 ? "#000000" : "#ffffff";
    };
    a.reset = function() {
      a._nextStyle = 0;
    };
    a.TabToolbar = "#252c33";
    a.Toolbars = "#343c45";
    a.HighlightBlue = "#1d4f73";
    a.LightText = "#f5f7fa";
    a.ForegroundText = "#b6babf";
    a.Black = "#000000";
    a.VeryDark = "#14171a";
    a.Dark = "#181d20";
    a.Light = "#a9bacb";
    a.Grey = "#8fa1b2";
    a.DarkGrey = "#5f7387";
    a.Blue = "#46afe3";
    a.Purple = "#6b7abb";
    a.Pink = "#df80ff";
    a.Red = "#eb5368";
    a.Orange = "#d96629";
    a.LightOrange = "#d99b28";
    a.Green = "#70bf53";
    a.BlueGrey = "#5e88b0";
    a._nextStyle = 0;
    a._gradient = "#FF0000 #FF1100 #FF2300 #FF3400 #FF4600 #FF5700 #FF6900 #FF7B00 #FF8C00 #FF9E00 #FFAF00 #FFC100 #FFD300 #FFE400 #FFF600 #F7FF00 #E5FF00 #D4FF00 #C2FF00 #B0FF00 #9FFF00 #8DFF00 #7CFF00 #6AFF00 #58FF00 #47FF00 #35FF00 #24FF00 #12FF00 #00FF00".split(" ");
    return a;
  }();
  h.ColorStyle = a;
  a = function() {
    function a(d, g, c, q) {
      this.xMin = d | 0;
      this.yMin = g | 0;
      this.xMax = c | 0;
      this.yMax = q | 0;
    }
    a.FromUntyped = function(d) {
      return new a(d.xMin, d.yMin, d.xMax, d.yMax);
    };
    a.FromRectangle = function(d) {
      return new a(20 * d.x | 0, 20 * d.y | 0, 20 * (d.x + d.width) | 0, 20 * (d.y + d.height) | 0);
    };
    a.prototype.setElements = function(a, g, c, q) {
      this.xMin = a;
      this.yMin = g;
      this.xMax = c;
      this.yMax = q;
    };
    a.prototype.copyFrom = function(a) {
      this.setElements(a.xMin, a.yMin, a.xMax, a.yMax);
    };
    a.prototype.contains = function(a, g) {
      return a < this.xMin !== a < this.xMax && g < this.yMin !== g < this.yMax;
    };
    a.prototype.unionInPlace = function(a) {
      a.isEmpty() || (this.extendByPoint(a.xMin, a.yMin), this.extendByPoint(a.xMax, a.yMax));
    };
    a.prototype.extendByPoint = function(a, g) {
      this.extendByX(a);
      this.extendByY(g);
    };
    a.prototype.extendByX = function(a) {
      134217728 === this.xMin ? this.xMin = this.xMax = a : (this.xMin = Math.min(this.xMin, a), this.xMax = Math.max(this.xMax, a));
    };
    a.prototype.extendByY = function(a) {
      134217728 === this.yMin ? this.yMin = this.yMax = a : (this.yMin = Math.min(this.yMin, a), this.yMax = Math.max(this.yMax, a));
    };
    a.prototype.intersects = function(a) {
      return this.contains(a.xMin, a.yMin) || this.contains(a.xMax, a.yMax);
    };
    a.prototype.isEmpty = function() {
      return this.xMax <= this.xMin || this.yMax <= this.yMin;
    };
    Object.defineProperty(a.prototype, "width", {get:function() {
      return this.xMax - this.xMin;
    }, set:function(a) {
      this.xMax = this.xMin + a;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(a.prototype, "height", {get:function() {
      return this.yMax - this.yMin;
    }, set:function(a) {
      this.yMax = this.yMin + a;
    }, enumerable:!0, configurable:!0});
    a.prototype.getBaseWidth = function(a) {
      return Math.abs(Math.cos(a)) * (this.xMax - this.xMin) + Math.abs(Math.sin(a)) * (this.yMax - this.yMin);
    };
    a.prototype.getBaseHeight = function(a) {
      return Math.abs(Math.sin(a)) * (this.xMax - this.xMin) + Math.abs(Math.cos(a)) * (this.yMax - this.yMin);
    };
    a.prototype.setEmpty = function() {
      this.xMin = this.yMin = this.xMax = this.yMax = 0;
    };
    a.prototype.setToSentinels = function() {
      this.xMin = this.yMin = this.xMax = this.yMax = 134217728;
    };
    a.prototype.clone = function() {
      return new a(this.xMin, this.yMin, this.xMax, this.yMax);
    };
    a.prototype.toString = function() {
      return "{ xMin: " + this.xMin + ", xMin: " + this.yMin + ", xMax: " + this.xMax + ", xMax: " + this.yMax + " }";
    };
    return a;
  }();
  h.Bounds = a;
  a = function() {
    function a(d, g, c, q) {
      p.assert(r(d));
      p.assert(r(g));
      p.assert(r(c));
      p.assert(r(q));
      this._xMin = d | 0;
      this._yMin = g | 0;
      this._xMax = c | 0;
      this._yMax = q | 0;
    }
    a.FromUntyped = function(d) {
      return new a(d.xMin, d.yMin, d.xMax, d.yMax);
    };
    a.FromRectangle = function(d) {
      return new a(20 * d.x | 0, 20 * d.y | 0, 20 * (d.x + d.width) | 0, 20 * (d.y + d.height) | 0);
    };
    a.prototype.setElements = function(a, g, c, q) {
      this.xMin = a;
      this.yMin = g;
      this.xMax = c;
      this.yMax = q;
    };
    a.prototype.copyFrom = function(a) {
      this.setElements(a.xMin, a.yMin, a.xMax, a.yMax);
    };
    a.prototype.contains = function(a, g) {
      return a < this.xMin !== a < this.xMax && g < this.yMin !== g < this.yMax;
    };
    a.prototype.unionInPlace = function(a) {
      a.isEmpty() || (this.extendByPoint(a.xMin, a.yMin), this.extendByPoint(a.xMax, a.yMax));
    };
    a.prototype.extendByPoint = function(a, g) {
      this.extendByX(a);
      this.extendByY(g);
    };
    a.prototype.extendByX = function(a) {
      134217728 === this.xMin ? this.xMin = this.xMax = a : (this.xMin = Math.min(this.xMin, a), this.xMax = Math.max(this.xMax, a));
    };
    a.prototype.extendByY = function(a) {
      134217728 === this.yMin ? this.yMin = this.yMax = a : (this.yMin = Math.min(this.yMin, a), this.yMax = Math.max(this.yMax, a));
    };
    a.prototype.intersects = function(a) {
      return this.contains(a._xMin, a._yMin) || this.contains(a._xMax, a._yMax);
    };
    a.prototype.isEmpty = function() {
      return this._xMax <= this._xMin || this._yMax <= this._yMin;
    };
    Object.defineProperty(a.prototype, "xMin", {get:function() {
      return this._xMin;
    }, set:function(a) {
      p.assert(r(a));
      this._xMin = a;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(a.prototype, "yMin", {get:function() {
      return this._yMin;
    }, set:function(a) {
      p.assert(r(a));
      this._yMin = a | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(a.prototype, "xMax", {get:function() {
      return this._xMax;
    }, set:function(a) {
      p.assert(r(a));
      this._xMax = a | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(a.prototype, "width", {get:function() {
      return this._xMax - this._xMin;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(a.prototype, "yMax", {get:function() {
      return this._yMax;
    }, set:function(a) {
      p.assert(r(a));
      this._yMax = a | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(a.prototype, "height", {get:function() {
      return this._yMax - this._yMin;
    }, enumerable:!0, configurable:!0});
    a.prototype.getBaseWidth = function(a) {
      return Math.abs(Math.cos(a)) * (this._xMax - this._xMin) + Math.abs(Math.sin(a)) * (this._yMax - this._yMin);
    };
    a.prototype.getBaseHeight = function(a) {
      return Math.abs(Math.sin(a)) * (this._xMax - this._xMin) + Math.abs(Math.cos(a)) * (this._yMax - this._yMin);
    };
    a.prototype.setEmpty = function() {
      this._xMin = this._yMin = this._xMax = this._yMax = 0;
    };
    a.prototype.clone = function() {
      return new a(this.xMin, this.yMin, this.xMax, this.yMax);
    };
    a.prototype.toString = function() {
      return "{ xMin: " + this._xMin + ", yMin: " + this._yMin + ", xMax: " + this._xMax + ", yMax: " + this._yMax + " }";
    };
    a.prototype.assertValid = function() {
    };
    return a;
  }();
  h.DebugBounds = a;
  a = function() {
    function a(d, g, c, q) {
      this.r = d;
      this.g = g;
      this.b = c;
      this.a = q;
    }
    a.FromARGB = function(d) {
      return new a((d >> 16 & 255) / 255, (d >> 8 & 255) / 255, (d >> 0 & 255) / 255, (d >> 24 & 255) / 255);
    };
    a.FromRGBA = function(d) {
      return a.FromARGB(l.RGBAToARGB(d));
    };
    a.prototype.toRGBA = function() {
      return 255 * this.r << 24 | 255 * this.g << 16 | 255 * this.b << 8 | 255 * this.a;
    };
    a.prototype.toCSSStyle = function() {
      return l.rgbaToCSSStyle(this.toRGBA());
    };
    a.prototype.set = function(a) {
      this.r = a.r;
      this.g = a.g;
      this.b = a.b;
      this.a = a.a;
    };
    a.randomColor = function() {
      var d = .4;
      void 0 === d && (d = 1);
      return new a(Math.random(), Math.random(), Math.random(), d);
    };
    a.parseColor = function(d) {
      a.colorCache || (a.colorCache = Object.create(null));
      if (a.colorCache[d]) {
        return a.colorCache[d];
      }
      var g = document.createElement("span");
      document.body.appendChild(g);
      g.style.backgroundColor = d;
      var c = getComputedStyle(g).backgroundColor;
      document.body.removeChild(g);
      (g = /^rgb\((\d+), (\d+), (\d+)\)$/.exec(c)) || (g = /^rgba\((\d+), (\d+), (\d+), ([\d.]+)\)$/.exec(c));
      c = new a(0, 0, 0, 0);
      c.r = parseFloat(g[1]) / 255;
      c.g = parseFloat(g[2]) / 255;
      c.b = parseFloat(g[3]) / 255;
      c.a = g[4] ? parseFloat(g[4]) / 255 : 1;
      return a.colorCache[d] = c;
    };
    a.Red = new a(1, 0, 0, 1);
    a.Green = new a(0, 1, 0, 1);
    a.Blue = new a(0, 0, 1, 1);
    a.None = new a(0, 0, 0, 0);
    a.White = new a(1, 1, 1, 1);
    a.Black = new a(0, 0, 0, 1);
    a.colorCache = {};
    return a;
  }();
  h.Color = a;
  var l;
  (function(a) {
    function d(c) {
      var g, a, d = c >> 24 & 255;
      a = (Math.imul(c >> 16 & 255, d) + 127) / 255 | 0;
      g = (Math.imul(c >> 8 & 255, d) + 127) / 255 | 0;
      c = (Math.imul(c >> 0 & 255, d) + 127) / 255 | 0;
      return d << 24 | a << 16 | g << 8 | c;
    }
    a.RGBAToARGB = function(c) {
      return c >> 8 & 16777215 | (c & 255) << 24;
    };
    a.ARGBToRGBA = function(c) {
      return c << 8 | c >> 24 & 255;
    };
    a.rgbaToCSSStyle = function(c) {
      return h.StringUtilities.concat9("rgba(", c >> 24 & 255, ",", c >> 16 & 255, ",", c >> 8 & 255, ",", (c & 255) / 255, ")");
    };
    a.cssStyleToRGBA = function(c) {
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
    a.hexToRGB = function(c) {
      return parseInt(c.slice(1), 16);
    };
    a.rgbToHex = function(c) {
      return "#" + ("000000" + (c >>> 0).toString(16)).slice(-6);
    };
    a.isValidHexColor = function(c) {
      return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(c);
    };
    a.clampByte = function(c) {
      return Math.max(0, Math.min(255, c));
    };
    a.unpremultiplyARGB = function(c) {
      var g, a, d = c >> 24 & 255;
      a = Math.imul(255, c >> 16 & 255) / d & 255;
      g = Math.imul(255, c >> 8 & 255) / d & 255;
      c = Math.imul(255, c >> 0 & 255) / d & 255;
      return d << 24 | a << 16 | g << 8 | c;
    };
    a.premultiplyARGB = d;
    var g;
    a.ensureUnpremultiplyTable = function() {
      if (!g) {
        g = new Uint8Array(65536);
        for (var c = 0;256 > c;c++) {
          for (var a = 0;256 > a;a++) {
            g[(a << 8) + c] = Math.imul(255, c) / a;
          }
        }
      }
    };
    a.tableLookupUnpremultiplyARGB = function(c) {
      c |= 0;
      var a = c >> 24 & 255;
      if (0 === a) {
        return 0;
      }
      if (255 === a) {
        return c;
      }
      var d, e, k = a << 8, n = g;
      e = n[k + (c >> 16 & 255)];
      d = n[k + (c >> 8 & 255)];
      c = n[k + (c >> 0 & 255)];
      return a << 24 | e << 16 | d << 8 | c;
    };
    a.blendPremultipliedBGRA = function(c, g) {
      var a, d;
      d = 256 - (g & 255);
      a = Math.imul(c & 16711935, d) >> 8;
      d = Math.imul(c >> 8 & 16711935, d) >> 8;
      return ((g >> 8 & 16711935) + d & 16711935) << 8 | (g & 16711935) + a & 16711935;
    };
    var c = w.swap32;
    a.convertImage = function(a, e, F, k) {
      var n = F.length;
      if (a === e) {
        if (F !== k) {
          for (a = 0;a < n;a++) {
            k[a] = F[a];
          }
        }
      } else {
        if (1 === a && 3 === e) {
          for (h.ColorUtilities.ensureUnpremultiplyTable(), a = 0;a < n;a++) {
            var l = F[a];
            e = l & 255;
            if (0 === e) {
              k[a] = 0;
            } else {
              if (255 === e) {
                k[a] = 4278190080 | l >> 8 & 16777215;
              } else {
                var m = l >> 24 & 255, b = l >> 16 & 255, l = l >> 8 & 255, t = e << 8, w = g, l = w[t + l], b = w[t + b], m = w[t + m];
                k[a] = e << 24 | m << 16 | b << 8 | l;
              }
            }
          }
        } else {
          if (2 === a && 3 === e) {
            for (a = 0;a < n;a++) {
              k[a] = c(F[a]);
            }
          } else {
            if (3 === a && 1 === e) {
              for (a = 0;a < n;a++) {
                e = F[a], k[a] = c(d(e & 4278255360 | e >> 16 & 255 | (e & 255) << 16));
              }
            } else {
              for (p.somewhatImplemented("Image Format Conversion: " + u[a] + " -> " + u[e]), a = 0;a < n;a++) {
                k[a] = F[a];
              }
            }
          }
        }
      }
    };
  })(l = h.ColorUtilities || (h.ColorUtilities = {}));
  a = function() {
    function a(d) {
      void 0 === d && (d = 32);
      this._list = [];
      this._maxSize = d;
    }
    a.prototype.acquire = function(d) {
      if (a._enabled) {
        for (var g = this._list, c = 0;c < g.length;c++) {
          var q = g[c];
          if (q.byteLength >= d) {
            return g.splice(c, 1), q;
          }
        }
      }
      return new ArrayBuffer(d);
    };
    a.prototype.release = function(d) {
      if (a._enabled) {
        var g = this._list;
        g.length === this._maxSize && g.shift();
        g.push(d);
      }
    };
    a.prototype.ensureUint8ArrayLength = function(a, g) {
      if (a.length >= g) {
        return a;
      }
      var c = Math.max(a.length + g, (3 * a.length >> 1) + 1), c = new Uint8Array(this.acquire(c), 0, c);
      c.set(a);
      this.release(a.buffer);
      return c;
    };
    a.prototype.ensureFloat64ArrayLength = function(a, g) {
      if (a.length >= g) {
        return a;
      }
      var c = Math.max(a.length + g, (3 * a.length >> 1) + 1), c = new Float64Array(this.acquire(c * Float64Array.BYTES_PER_ELEMENT), 0, c);
      c.set(a);
      this.release(a.buffer);
      return c;
    };
    a._enabled = !0;
    return a;
  }();
  h.ArrayBufferPool = a;
  (function(a) {
    (function(a) {
      a[a.EXTERNAL_INTERFACE_FEATURE = 1] = "EXTERNAL_INTERFACE_FEATURE";
      a[a.CLIPBOARD_FEATURE = 2] = "CLIPBOARD_FEATURE";
      a[a.SHAREDOBJECT_FEATURE = 3] = "SHAREDOBJECT_FEATURE";
      a[a.VIDEO_FEATURE = 4] = "VIDEO_FEATURE";
      a[a.SOUND_FEATURE = 5] = "SOUND_FEATURE";
      a[a.NETCONNECTION_FEATURE = 6] = "NETCONNECTION_FEATURE";
    })(a.Feature || (a.Feature = {}));
    (function(a) {
      a[a.AVM1_ERROR = 1] = "AVM1_ERROR";
      a[a.AVM2_ERROR = 2] = "AVM2_ERROR";
    })(a.ErrorTypes || (a.ErrorTypes = {}));
    a.instance;
  })(h.Telemetry || (h.Telemetry = {}));
  (function(a) {
    a.instance;
  })(h.FileLoadingService || (h.FileLoadingService = {}));
  (function(a) {
    a[a.BuiltinAbc = 0] = "BuiltinAbc";
    a[a.PlayerglobalAbcs = 1] = "PlayerglobalAbcs";
    a[a.PlayerglobalManifest = 2] = "PlayerglobalManifest";
    a[a.ShellAbc = 3] = "ShellAbc";
  })(h.SystemResourceId || (h.SystemResourceId = {}));
  (function(a) {
    a.instance;
  })(h.SystemResourcesLoadingService || (h.SystemResourcesLoadingService = {}));
  h.registerCSSFont = function(a, d, g) {
    if (inBrowser) {
      var c = document.head;
      c.insertBefore(document.createElement("style"), c.firstChild);
      c = document.styleSheets[0];
      d = "@font-face{font-family:swffont" + a + ";src:url(data:font/opentype;base64," + h.StringUtilities.base64ArrayBuffer(d.buffer) + ")}";
      c.insertRule(d, c.cssRules.length);
      g && (g = document.createElement("div"), g.style.fontFamily = "swffont" + a, g.innerHTML = "hello", document.body.appendChild(g), document.body.removeChild(g));
    }
  };
  (function(a) {
    a.instance = {enabled:!1, initJS:function(a) {
    }, registerCallback:function(a) {
    }, unregisterCallback:function(a) {
    }, eval:function(a) {
    }, call:function(a) {
    }, getId:function() {
      return null;
    }};
  })(h.ExternalInterfaceService || (h.ExternalInterfaceService = {}));
  (function(a) {
    a.instance = {setClipboard:function(a) {
    }};
  })(h.ClipboardService || (h.ClipboardService = {}));
  a = function() {
    function a() {
      this._queues = {};
    }
    a.prototype.register = function(a, g) {
      p.assert(a);
      p.assert(g);
      var c = this._queues[a];
      if (c) {
        if (-1 < c.indexOf(g)) {
          return;
        }
      } else {
        c = this._queues[a] = [];
      }
      c.push(g);
    };
    a.prototype.unregister = function(a, g) {
      p.assert(a);
      p.assert(g);
      var c = this._queues[a];
      if (c) {
        var q = c.indexOf(g);
        -1 !== q && c.splice(q, 1);
        0 === c.length && (this._queues[a] = null);
      }
    };
    a.prototype.notify = function(a, g) {
      var c = this._queues[a];
      if (c) {
        c = c.slice();
        g = Array.prototype.slice.call(arguments, 0);
        for (var q = 0;q < c.length;q++) {
          c[q].apply(null, g);
        }
      }
    };
    a.prototype.notify1 = function(a, g) {
      var c = this._queues[a];
      if (c) {
        for (var c = c.slice(), q = 0;q < c.length;q++) {
          (0,c[q])(a, g);
        }
      }
    };
    return a;
  }();
  h.Callback = a;
  (function(a) {
    a[a.None = 0] = "None";
    a[a.PremultipliedAlphaARGB = 1] = "PremultipliedAlphaARGB";
    a[a.StraightAlphaARGB = 2] = "StraightAlphaARGB";
    a[a.StraightAlphaRGBA = 3] = "StraightAlphaRGBA";
    a[a.JPEG = 4] = "JPEG";
    a[a.PNG = 5] = "PNG";
    a[a.GIF = 6] = "GIF";
  })(h.ImageType || (h.ImageType = {}));
  var u = h.ImageType;
  h.getMIMETypeForImageType = function(a) {
    switch(a) {
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
  (function(a) {
    a.toCSSCursor = function(a) {
      switch(a) {
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
    function a() {
      this.promise = new Promise(function(a, g) {
        this.resolve = a;
        this.reject = g;
      }.bind(this));
    }
    a.prototype.then = function(a, g) {
      return this.promise.then(a, g);
    };
    return a;
  }();
  h.PromiseWrapper = a;
})(Shumway || (Shumway = {}));
(function() {
  function h(c) {
    if ("function" !== typeof c) {
      throw new TypeError("Invalid deferred constructor");
    }
    var a = t();
    c = new c(a);
    var g = a.resolve;
    if ("function" !== typeof g) {
      throw new TypeError("Invalid resolve construction function");
    }
    a = a.reject;
    if ("function" !== typeof a) {
      throw new TypeError("Invalid reject construction function");
    }
    return {promise:c, resolve:g, reject:a};
  }
  function r(c, a) {
    if ("object" !== typeof c || null === c) {
      return !1;
    }
    try {
      var g = c.then;
      if ("function" !== typeof g) {
        return !1;
      }
      g.call(c, a.resolve, a.reject);
    } catch (d) {
      g = a.reject, g(d);
    }
    return !0;
  }
  function f(c) {
    return "object" === typeof c && null !== c && "undefined" !== typeof c.promiseStatus;
  }
  function b(c, a) {
    if ("unresolved" === c.promiseStatus) {
      var g = c.rejectReactions;
      c.result = a;
      c.resolveReactions = void 0;
      c.rejectReactions = void 0;
      c.promiseStatus = "has-rejection";
      v(g, a);
    }
  }
  function v(c, a) {
    for (var g = 0;g < c.length;g++) {
      p({reaction:c[g], argument:a});
    }
  }
  function p(c) {
    0 === g.length && setTimeout(a, 0);
    g.push(c);
  }
  function a() {
    for (;0 < g.length;) {
      var c = g[0];
      try {
        a: {
          var a = c.reaction, d = a.deferred, e = a.handler, n = void 0, l = void 0;
          try {
            n = e(c.argument);
          } catch (u) {
            var m = d.reject;
            m(u);
            break a;
          }
          if (n === d.promise) {
            m = d.reject, m(new TypeError("Self resolution"));
          } else {
            try {
              if (l = r(n, d), !l) {
                var b = d.resolve;
                b(n);
              }
            } catch (p) {
              m = d.reject, m(p);
            }
          }
        }
      } catch (t) {
        if ("function" === typeof k.onerror) {
          k.onerror(t);
        }
      }
      g.shift();
    }
  }
  function e(c) {
    throw c;
  }
  function n(c) {
    return c;
  }
  function m(c) {
    return function(a) {
      b(c, a);
    };
  }
  function w(c) {
    return function(a) {
      if ("unresolved" === c.promiseStatus) {
        var g = c.resolveReactions;
        c.result = a;
        c.resolveReactions = void 0;
        c.rejectReactions = void 0;
        c.promiseStatus = "has-resolution";
        v(g, a);
      }
    };
  }
  function t() {
    function c(a, g) {
      c.resolve = a;
      c.reject = g;
    }
    return c;
  }
  function l(c, a, g) {
    return function(d) {
      if (d === c) {
        return g(new TypeError("Self resolution"));
      }
      var e = c.promiseConstructor;
      if (f(d) && d.promiseConstructor === e) {
        return d.then(a, g);
      }
      e = h(e);
      return r(d, e) ? e.promise.then(a, g) : a(d);
    };
  }
  function u(c, a, g, d) {
    return function(e) {
      a[c] = e;
      d.countdown--;
      0 === d.countdown && g.resolve(a);
    };
  }
  function k(c) {
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
    var a = w(this), g = m(this);
    try {
      c(a, g);
    } catch (d) {
      b(this, d);
    }
    this.promiseConstructor = k;
    return this;
  }
  var d = Function("return this")();
  if (d.Promise) {
    "function" !== typeof d.Promise.all && (d.Promise.all = function(c) {
      var a = 0, g = [], e, n, k = new d.Promise(function(c, a) {
        e = c;
        n = a;
      });
      c.forEach(function(c, d) {
        a++;
        c.then(function(c) {
          g[d] = c;
          a--;
          0 === a && e(g);
        }, n);
      });
      0 === a && e(g);
      return k;
    }), "function" !== typeof d.Promise.resolve && (d.Promise.resolve = function(c) {
      return new d.Promise(function(a) {
        a(c);
      });
    });
  } else {
    var g = [];
    k.all = function(c) {
      var a = h(this), g = [], d = {countdown:0}, e = 0;
      c.forEach(function(c) {
        this.cast(c).then(u(e, g, a, d), a.reject);
        e++;
        d.countdown++;
      }, this);
      0 === e && a.resolve(g);
      return a.promise;
    };
    k.cast = function(c) {
      if (f(c)) {
        return c;
      }
      var a = h(this);
      a.resolve(c);
      return a.promise;
    };
    k.reject = function(c) {
      var a = h(this);
      a.reject(c);
      return a.promise;
    };
    k.resolve = function(c) {
      var a = h(this);
      a.resolve(c);
      return a.promise;
    };
    k.prototype = {"catch":function(c) {
      this.then(void 0, c);
    }, then:function(c, a) {
      if (!f(this)) {
        throw new TypeError("this is not a Promises");
      }
      var g = h(this.promiseConstructor), d = "function" === typeof a ? a : e, k = {deferred:g, handler:l(this, "function" === typeof c ? c : n, d)}, d = {deferred:g, handler:d};
      switch(this.promiseStatus) {
        case "unresolved":
          this.resolveReactions.push(k);
          this.rejectReactions.push(d);
          break;
        case "has-resolution":
          p({reaction:k, argument:this.result});
          break;
        case "has-rejection":
          p({reaction:d, argument:this.result});
      }
      return g.promise;
    }};
    d.Promise = k;
  }
})();
"undefined" !== typeof exports && (exports.Shumway = Shumway);
(function() {
  function h(h, f, b) {
    h[f] || Object.defineProperty(h, f, {value:b, writable:!0, configurable:!0, enumerable:!1});
  }
  h(String.prototype, "padRight", function(h, f) {
    var b = this, v = b.replace(/\033\[[0-9]*m/g, "").length;
    if (!h || v >= f) {
      return b;
    }
    for (var v = (f - v) / h.length, p = 0;p < v;p++) {
      b += h;
    }
    return b;
  });
  h(String.prototype, "padLeft", function(h, f) {
    var b = this, v = b.length;
    if (!h || v >= f) {
      return b;
    }
    for (var v = (f - v) / h.length, p = 0;p < v;p++) {
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
  h(Array.prototype, "replace", function(h, f) {
    if (h === f) {
      return 0;
    }
    for (var b = 0, v = 0;v < this.length;v++) {
      this[v] === h && (this[v] = f, b++);
    }
    return b;
  });
})();
(function(h) {
  (function(r) {
    var f = h.isObject, b = function() {
      function a(a, n, m, b) {
        this.shortName = a;
        this.longName = n;
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
      a.prototype.addArgument = function(a, n, m, p) {
        a = new b(a, n, m, p);
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
          a instanceof p ? n.addBoundOptionSet(a) : n.addBoundOption(a);
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
        var n = {}, m = [];
        this.args.forEach(function(a) {
          a.positional ? m.push(a) : (n["-" + a.shortName] = a, n["--" + a.longName] = a);
        });
        for (var b = [];a.length;) {
          var p = a.shift(), l = null, u = p;
          if ("--" == p) {
            b = b.concat(a);
            break;
          } else {
            if ("-" == p.slice(0, 1) || "--" == p.slice(0, 2)) {
              l = n[p];
              if (!l) {
                continue;
              }
              u = "boolean" !== l.type ? a.shift() : !0;
            } else {
              m.length ? l = m.shift() : b.push(u);
            }
          }
          l && l.parse(u);
        }
        return b;
      };
      return a;
    }();
    r.ArgumentParser = v;
    var p = function() {
      function a(a, n) {
        void 0 === n && (n = null);
        this.open = !1;
        this.name = a;
        this.settings = n || {};
        this.options = [];
      }
      a.prototype.register = function(e) {
        if (e instanceof a) {
          for (var n = 0;n < this.options.length;n++) {
            var b = this.options[n];
            if (b instanceof a && b.name === e.name) {
              return b;
            }
          }
        }
        this.options.push(e);
        if (this.settings) {
          if (e instanceof a) {
            n = this.settings[e.name], f(n) && (e.settings = n.settings, e.open = n.open);
          } else {
            if ("undefined" !== typeof this.settings[e.longName]) {
              switch(e.type) {
                case "boolean":
                  e.value = !!this.settings[e.longName];
                  break;
                case "number":
                  e.value = +this.settings[e.longName];
                  break;
                default:
                  e.value = this.settings[e.longName];
              }
            }
          }
        }
        return e;
      };
      a.prototype.trace = function(a) {
        a.enter(this.name + " {");
        this.options.forEach(function(n) {
          n.trace(a);
        });
        a.leave("}");
      };
      a.prototype.getSettings = function() {
        var e = {};
        this.options.forEach(function(n) {
          n instanceof a ? e[n.name] = {settings:n.getSettings(), open:n.open} : e[n.longName] = n.value;
        });
        return e;
      };
      a.prototype.setSettings = function(e) {
        e && this.options.forEach(function(n) {
          n instanceof a ? n.name in e && n.setSettings(e[n.name].settings) : n.longName in e && (n.value = e[n.longName]);
        });
      };
      return a;
    }();
    r.OptionSet = p;
    v = function() {
      function a(a, n, b, p, t, l) {
        void 0 === l && (l = null);
        this.longName = n;
        this.shortName = a;
        this.type = b;
        this.value = this.defaultValue = p;
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
  })(h.Options || (h.Options = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(r) {
    r.ROOT = "Shumway Options";
    r.shumwayOptions = new h.Options.OptionSet(r.ROOT);
    r.setSettings = function(f) {
      r.shumwayOptions.setSettings(f);
    };
    r.getSettings = function() {
      return r.shumwayOptions.getSettings();
    };
  })(h.Settings || (h.Settings = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(r) {
    var f = function() {
      function b(b, p) {
        this._parent = b;
        this._timers = h.ObjectUtilities.createMap();
        this._name = p;
        this._count = this._total = this._last = this._begin = 0;
      }
      b.time = function(f, p) {
        b.start(f);
        p();
        b.stop();
      };
      b.start = function(f) {
        b._top = b._top._timers[f] || (b._top._timers[f] = new b(b._top, f));
        b._top.start();
        f = b._flat._timers[f] || (b._flat._timers[f] = new b(b._flat, f));
        f.start();
        b._flatStack.push(f);
      };
      b.stop = function() {
        b._top.stop();
        b._top = b._top._parent;
        b._flatStack.pop().stop();
      };
      b.stopStart = function(f) {
        b.stop();
        b.start(f);
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
        for (var p in this._timers) {
          this._timers[p].trace(b);
        }
        b.outdent();
      };
      b.trace = function(f) {
        b._base.trace(f);
        b._flat.trace(f);
      };
      b._base = new b(null, "Total");
      b._top = b._base;
      b._flat = new b(null, "Flat");
      b._flatStack = [];
      return b;
    }();
    r.Timer = f;
    f = function() {
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
      b.prototype.count = function(b, p, a) {
        void 0 === p && (p = 1);
        void 0 === a && (a = 0);
        if (this._enabled) {
          return void 0 === this._counts[b] && (this._counts[b] = 0, this._times[b] = 0), this._counts[b] += p, this._times[b] += a, this._counts[b];
        }
      };
      b.prototype.trace = function(b) {
        for (var p in this._counts) {
          b.writeLn(p + ": " + this._counts[p]);
        }
      };
      b.prototype._pairToString = function(b, p) {
        var a = p[0], e = p[1], n = b[a], a = a + ": " + e;
        n && (a += ", " + n.toFixed(4), 1 < e && (a += " (" + (n / e).toFixed(4) + ")"));
        return a;
      };
      b.prototype.toStringSorted = function() {
        var b = this, p = this._times, a = [], e;
        for (e in this._counts) {
          a.push([e, this._counts[e]]);
        }
        a.sort(function(a, e) {
          return e[1] - a[1];
        });
        return a.map(function(a) {
          return b._pairToString(p, a);
        }).join(", ");
      };
      b.prototype.traceSorted = function(b, p) {
        void 0 === p && (p = !1);
        var a = this, e = this._times, n = [], m;
        for (m in this._counts) {
          n.push([m, this._counts[m]]);
        }
        n.sort(function(a, e) {
          return e[1] - a[1];
        });
        p ? b.writeLn(n.map(function(n) {
          return a._pairToString(e, n);
        }).join(", ")) : n.forEach(function(n) {
          b.writeLn(a._pairToString(e, n));
        });
      };
      b.instance = new b(!0);
      return b;
    }();
    r.Counter = f;
    f = function() {
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
        for (var b = 0, p = 0;p < this._count;p++) {
          b += this._samples[p];
        }
        return b / this._count;
      };
      return b;
    }();
    r.Average = f;
  })(h.Metrics || (h.Metrics = {}));
})(Shumway || (Shumway = {}));
var __extends = this.__extends || function(h, r) {
  function f() {
    this.constructor = h;
  }
  for (var b in r) {
    r.hasOwnProperty(b) && (h[b] = r[b]);
  }
  f.prototype = r.prototype;
  h.prototype = new f;
};
(function(h) {
  (function(h) {
    function f(a) {
      for (var c = Math.max.apply(null, a), q = a.length, d = 1 << c, e = new Uint32Array(d), n = c << 16 | 65535, k = 0;k < d;k++) {
        e[k] = n;
      }
      for (var n = 0, k = 1, l = 2;k <= c;n <<= 1, ++k, l <<= 1) {
        for (var b = 0;b < q;++b) {
          if (a[b] === k) {
            for (var u = 0, m = 0;m < k;++m) {
              u = 2 * u + (n >> m & 1);
            }
            for (m = u;m < d;m += l) {
              e[m] = k << 16 | b;
            }
            ++n;
          }
        }
      }
      return {codes:e, maxBits:c};
    }
    var b;
    (function(a) {
      a[a.INIT = 0] = "INIT";
      a[a.BLOCK_0 = 1] = "BLOCK_0";
      a[a.BLOCK_1 = 2] = "BLOCK_1";
      a[a.BLOCK_2_PRE = 3] = "BLOCK_2_PRE";
      a[a.BLOCK_2 = 4] = "BLOCK_2";
      a[a.DONE = 5] = "DONE";
      a[a.ERROR = 6] = "ERROR";
      a[a.VERIFY_HEADER = 7] = "VERIFY_HEADER";
    })(b || (b = {}));
    b = function() {
      function a(c) {
      }
      a.prototype.push = function(c) {
      };
      a.prototype.close = function() {
      };
      a.create = function(c) {
        return "undefined" !== typeof ShumwayCom && ShumwayCom.createSpecialInflate ? new u(c, ShumwayCom.createSpecialInflate) : new v(c);
      };
      a.prototype._processZLibHeader = function(c, a, g) {
        if (a + 2 > g) {
          return 0;
        }
        c = c[a] << 8 | c[a + 1];
        a = null;
        2048 !== (c & 3840) ? a = "inflate: unknown compression method" : 0 !== c % 31 ? a = "inflate: bad FCHECK" : 0 !== (c & 32) && (a = "inflate: FDICT bit set");
        if (a) {
          if (this.onError) {
            this.onError(a);
          }
          return -1;
        }
        return 2;
      };
      a.inflate = function(c, q, d) {
        var e = new Uint8Array(q), n = 0;
        q = a.create(d);
        q.onData = function(c) {
          var a = Math.min(c.length, e.length - n);
          a && h.memCopy(e, c, n, 0, a);
          n += a;
        };
        q.onError = function(c) {
          throw Error(c);
        };
        q.push(c);
        q.close();
        return e;
      };
      return a;
    }();
    h.Inflate = b;
    var v = function(g) {
      function c(c) {
        g.call(this, c);
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
          p = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
          a = new Uint16Array(30);
          e = new Uint8Array(30);
          for (var d = c = 0, F = 1;30 > c;++c) {
            a[c] = F, F += 1 << (e[c] = ~~((d += 2 < c ? 1 : 0) / 2));
          }
          var k = new Uint8Array(288);
          for (c = 0;32 > c;++c) {
            k[c] = 5;
          }
          n = f(k.subarray(0, 32));
          m = new Uint16Array(29);
          w = new Uint8Array(29);
          d = c = 0;
          for (F = 3;29 > c;++c) {
            m[c] = F - (28 == c ? 1 : 0), F += 1 << (w[c] = ~~((d += 4 < c ? 1 : 0) / 4 % 6));
          }
          for (c = 0;288 > c;++c) {
            k[c] = 144 > c || 279 < c ? 8 : 256 > c ? 9 : 7;
          }
          t = f(k);
          l = !0;
        }
      }
      __extends(c, g);
      c.prototype.push = function(c) {
        if (!this._buffer || this._buffer.length < this._bufferSize + c.length) {
          var a = new Uint8Array(this._bufferSize + c.length);
          this._buffer && a.set(this._buffer);
          this._buffer = a;
        }
        this._buffer.set(c, this._bufferSize);
        this._bufferSize += c.length;
        this._bufferPosition = 0;
        c = !1;
        do {
          a = this._windowPosition;
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
              var g = this._processZLibHeader(this._buffer, this._bufferPosition, this._bufferSize);
              0 < g ? (this._bufferPosition += g, this._state = 0) : 0 === g ? c = !0 : this._state = 6;
          }
          if (0 < this._windowPosition - a) {
            this.onData(this._window.subarray(a, this._windowPosition));
          }
          65536 <= this._windowPosition && ("copyWithin" in this._buffer ? this._window.copyWithin(0, this._windowPosition - 32768, this._windowPosition) : this._window.set(this._window.subarray(this._windowPosition - 32768, this._windowPosition)), this._windowPosition = 32768);
        } while (!c && this._bufferPosition < this._bufferSize);
        this._bufferPosition < this._bufferSize ? ("copyWithin" in this._buffer ? this._buffer.copyWithin(0, this._bufferPosition, this._bufferSize) : this._buffer.set(this._buffer.subarray(this._bufferPosition, this._bufferSize)), this._bufferSize -= this._bufferPosition) : this._bufferSize = 0;
      };
      c.prototype._decodeInitState = function() {
        if (this._isFinalBlock) {
          return this._state = 5, !1;
        }
        var c = this._buffer, a = this._bufferSize, g = this._bitBuffer, d = this._bitLength, e = this._bufferPosition;
        if (3 > (a - e << 3) + d) {
          return !0;
        }
        3 > d && (g |= c[e++] << d, d += 8);
        var k = g & 7, g = g >> 3, d = d - 3;
        switch(k >> 1) {
          case 0:
            d = g = 0;
            if (4 > a - e) {
              return !0;
            }
            var l = c[e] | c[e + 1] << 8, c = c[e + 2] | c[e + 3] << 8, e = e + 4;
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
            if (26 > (a - e << 3) + d) {
              return !0;
            }
            for (;14 > d;) {
              g |= c[e++] << d, d += 8;
            }
            l = (g >> 10 & 15) + 4;
            if ((a - e << 3) + d < 14 + 3 * l) {
              return !0;
            }
            for (var a = {numLiteralCodes:(g & 31) + 257, numDistanceCodes:(g >> 5 & 31) + 1, codeLengthTable:void 0, bitLengths:void 0, codesRead:0, dupBits:0}, g = g >> 14, d = d - 14, b = new Uint8Array(19), u = 0;u < l;++u) {
              3 > d && (g |= c[e++] << d, d += 8), b[p[u]] = g & 7, g >>= 3, d -= 3;
            }
            for (;19 > u;u++) {
              b[p[u]] = 0;
            }
            a.bitLengths = new Uint8Array(a.numLiteralCodes + a.numDistanceCodes);
            a.codeLengthTable = f(b);
            this._block2State = a;
            c = 3;
            break;
          default:
            return this._error("inflate: unsupported block type"), !1;
        }
        this._isFinalBlock = !!(k & 1);
        this._state = c;
        this._bufferPosition = e;
        this._bitBuffer = g;
        this._bitLength = d;
        return !1;
      };
      c.prototype._error = function(c) {
        if (this.onError) {
          this.onError(c);
        }
      };
      c.prototype._decodeBlock0 = function() {
        var c = this._bufferPosition, a = this._windowPosition, g = this._block0Read, d = 65794 - a, e = this._bufferSize - c, n = e < g, k = Math.min(d, e, g);
        this._window.set(this._buffer.subarray(c, c + k), a);
        this._windowPosition = a + k;
        this._bufferPosition = c + k;
        this._block0Read = g - k;
        return g === k ? (this._state = 0, !1) : n && d < e;
      };
      c.prototype._readBits = function(c) {
        var a = this._bitBuffer, g = this._bitLength;
        if (c > g) {
          var d = this._bufferPosition, e = this._bufferSize;
          do {
            if (d >= e) {
              return this._bufferPosition = d, this._bitBuffer = a, this._bitLength = g, -1;
            }
            a |= this._buffer[d++] << g;
            g += 8;
          } while (c > g);
          this._bufferPosition = d;
        }
        this._bitBuffer = a >> c;
        this._bitLength = g - c;
        return a & (1 << c) - 1;
      };
      c.prototype._readCode = function(c) {
        var a = this._bitBuffer, g = this._bitLength, d = c.maxBits;
        if (d > g) {
          var e = this._bufferPosition, k = this._bufferSize;
          do {
            if (e >= k) {
              return this._bufferPosition = e, this._bitBuffer = a, this._bitLength = g, -1;
            }
            a |= this._buffer[e++] << g;
            g += 8;
          } while (d > g);
          this._bufferPosition = e;
        }
        c = c.codes[a & (1 << d) - 1];
        d = c >> 16;
        if (c & 32768) {
          return this._error("inflate: invalid encoding"), this._state = 6, -1;
        }
        this._bitBuffer = a >> d;
        this._bitLength = g - d;
        return c & 65535;
      };
      c.prototype._decodeBlock2Pre = function() {
        var c = this._block2State, a = c.numLiteralCodes + c.numDistanceCodes, g = c.bitLengths, d = c.codesRead, e = 0 < d ? g[d - 1] : 0, k = c.codeLengthTable, n;
        if (0 < c.dupBits) {
          n = this._readBits(c.dupBits);
          if (0 > n) {
            return !0;
          }
          for (;n--;) {
            g[d++] = e;
          }
          c.dupBits = 0;
        }
        for (;d < a;) {
          var l = this._readCode(k);
          if (0 > l) {
            return c.codesRead = d, !0;
          }
          if (16 > l) {
            g[d++] = e = l;
          } else {
            var b;
            switch(l) {
              case 16:
                b = 2;
                n = 3;
                l = e;
                break;
              case 17:
                n = b = 3;
                l = 0;
                break;
              case 18:
                b = 7, n = 11, l = 0;
            }
            for (;n--;) {
              g[d++] = l;
            }
            n = this._readBits(b);
            if (0 > n) {
              return c.codesRead = d, c.dupBits = b, !0;
            }
            for (;n--;) {
              g[d++] = l;
            }
            e = l;
          }
        }
        this._literalTable = f(g.subarray(0, c.numLiteralCodes));
        this._distanceTable = f(g.subarray(c.numLiteralCodes));
        this._state = 4;
        this._block2State = null;
        return !1;
      };
      c.prototype._decodeBlock = function() {
        var c = this._literalTable, g = this._distanceTable, d = this._window, n = this._windowPosition, k = this._copyState, l, b, u, p;
        if (0 !== k.state) {
          switch(k.state) {
            case 1:
              if (0 > (l = this._readBits(k.lenBits))) {
                return !0;
              }
              k.len += l;
              k.state = 2;
            case 2:
              if (0 > (l = this._readCode(g))) {
                return !0;
              }
              k.distBits = e[l];
              k.dist = a[l];
              k.state = 3;
            case 3:
              l = 0;
              if (0 < k.distBits && 0 > (l = this._readBits(k.distBits))) {
                return !0;
              }
              p = k.dist + l;
              b = k.len;
              for (l = n - p;b--;) {
                d[n++] = d[l++];
              }
              k.state = 0;
              if (65536 <= n) {
                return this._windowPosition = n, !1;
              }
              break;
          }
        }
        do {
          l = this._readCode(c);
          if (0 > l) {
            return this._windowPosition = n, !0;
          }
          if (256 > l) {
            d[n++] = l;
          } else {
            if (256 < l) {
              this._windowPosition = n;
              l -= 257;
              u = w[l];
              b = m[l];
              l = 0 === u ? 0 : this._readBits(u);
              if (0 > l) {
                return k.state = 1, k.len = b, k.lenBits = u, !0;
              }
              b += l;
              l = this._readCode(g);
              if (0 > l) {
                return k.state = 2, k.len = b, !0;
              }
              u = e[l];
              p = a[l];
              l = 0 === u ? 0 : this._readBits(u);
              if (0 > l) {
                return k.state = 3, k.len = b, k.dist = p, k.distBits = u, !0;
              }
              p += l;
              for (l = n - p;b--;) {
                d[n++] = d[l++];
              }
            } else {
              this._state = 0;
              break;
            }
          }
        } while (65536 > n);
        this._windowPosition = n;
        return !1;
      };
      return c;
    }(b), p, a, e, n, m, w, t, l = !1, u = function(a) {
      function c(c, d) {
        a.call(this, c);
        this._verifyHeader = c;
        this._specialInflate = d();
        this._specialInflate.setDataCallback(function(c) {
          this.onData(c);
        }.bind(this));
      }
      __extends(c, a);
      c.prototype.push = function(c) {
        if (this._verifyHeader) {
          var a;
          this._buffer ? (a = new Uint8Array(this._buffer.length + c.length), a.set(this._buffer), a.set(c, this._buffer.length), this._buffer = null) : a = new Uint8Array(c);
          var g = this._processZLibHeader(a, 0, a.length);
          if (0 === g) {
            this._buffer = a;
            return;
          }
          this._verifyHeader = !0;
          0 < g && (c = a.subarray(g));
        }
        this._specialInflate.push(c);
      };
      c.prototype.close = function() {
        this._specialInflate && (this._specialInflate.close(), this._specialInflate = null);
      };
      return c;
    }(b), k;
    (function(a) {
      a[a.WRITE = 0] = "WRITE";
      a[a.DONE = 1] = "DONE";
      a[a.ZLIB_HEADER = 2] = "ZLIB_HEADER";
    })(k || (k = {}));
    var d = function() {
      function a() {
        this.a = 1;
        this.b = 0;
      }
      a.prototype.update = function(c, a, g) {
        for (var d = this.a, e = this.b;a < g;++a) {
          d = (d + (c[a] & 255)) % 65521, e = (e + d) % 65521;
        }
        this.a = d;
        this.b = e;
      };
      a.prototype.getChecksum = function() {
        return this.b << 16 | this.a;
      };
      return a;
    }();
    h.Adler32 = d;
    k = function() {
      function a(c) {
        this._state = (this._writeZlibHeader = c) ? 2 : 0;
        this._adler32 = c ? new d : null;
      }
      a.prototype.push = function(c) {
        2 === this._state && (this.onData(new Uint8Array([120, 156])), this._state = 0);
        for (var a = c.length, g = new Uint8Array(a + 5 * Math.ceil(a / 65535)), d = 0, e = 0;65535 < a;) {
          g.set(new Uint8Array([0, 255, 255, 0, 0]), d), d += 5, g.set(c.subarray(e, e + 65535), d), e += 65535, d += 65535, a -= 65535;
        }
        g.set(new Uint8Array([0, a & 255, a >> 8 & 255, ~a & 255, ~a >> 8 & 255]), d);
        g.set(c.subarray(e, a), d + 5);
        this.onData(g);
        this._adler32 && this._adler32.update(c, 0, a);
      };
      a.prototype.close = function() {
        this._state = 1;
        this.onData(new Uint8Array([1, 0, 0, 255, 255]));
        if (this._adler32) {
          var c = this._adler32.getChecksum();
          this.onData(new Uint8Array([c & 255, c >> 8 & 255, c >> 16 & 255, c >>> 24 & 255]));
        }
      };
      return a;
    }();
    h.Deflate = k;
  })(h.ArrayUtilities || (h.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    function f(c) {
      for (var a = new Uint16Array(c), g = 0;g < c;g++) {
        a[g] = 1024;
      }
      return a;
    }
    function b(c, a, g, d) {
      for (var e = 1, k = 0, n = 0;n < g;n++) {
        var l = d.decodeBit(c, e + a), e = (e << 1) + l, k = k | l << n
      }
      return k;
    }
    function v(c, a) {
      var g = [];
      g.length = a;
      for (var d = 0;d < a;d++) {
        g[d] = new m(c);
      }
      return g;
    }
    var p = function() {
      function c() {
        this.pos = this.available = 0;
        this.buffer = new Uint8Array(2E3);
      }
      c.prototype.append = function(c) {
        var a = this.pos + this.available, g = a + c.length;
        if (g > this.buffer.length) {
          for (var d = 2 * this.buffer.length;d < g;) {
            d *= 2;
          }
          g = new Uint8Array(d);
          g.set(this.buffer);
          this.buffer = g;
        }
        this.buffer.set(c, a);
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
    }(), e = function() {
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
      c.prototype.copyMatch = function(c, a) {
        for (var g = this.pos, d = this.size, e = this.buf, k = c <= g ? g - c : d - c + g, n = a;0 < n;) {
          for (var l = Math.min(Math.min(n, d - g), d - k), b = 0;b < l;b++) {
            var u = e[k++];
            e[g++] = u;
          }
          g === d && (this.pos = g, this.flush(), g = 0, this.isFull = !0);
          k === d && (k = 0);
          n -= l;
        }
        this.pos = g;
        this.totalPos += a;
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
        for (var c = 0, a = 0;4 > a;a++) {
          c = c << 8 | this.inStream.readByte();
        }
        c === this.range && (this.corrupted = !0);
        this.code = c;
      };
      c.prototype.isFinishedOK = function() {
        return 0 === this.code;
      };
      c.prototype.decodeDirectBits = function(c) {
        var a = 0, g = this.range, d = this.code;
        do {
          var g = g >>> 1 | 0, d = d - g | 0, e = d >> 31, d = d + (g & e) | 0;
          d === g && (this.corrupted = !0);
          0 <= g && 16777216 > g && (g <<= 8, d = d << 8 | this.inStream.readByte());
          a = (a << 1) + e + 1 | 0;
        } while (--c);
        this.range = g;
        this.code = d;
        return a;
      };
      c.prototype.decodeBit = function(c, a) {
        var g = this.range, d = this.code, e = c[a], k = (g >>> 11) * e;
        d >>> 0 < k ? (e = e + (2048 - e >> 5) | 0, g = k | 0, k = 0) : (e = e - (e >> 5) | 0, d = d - k | 0, g = g - k | 0, k = 1);
        c[a] = e & 65535;
        0 <= g && 16777216 > g && (g <<= 8, d = d << 8 | this.inStream.readByte());
        this.range = g;
        this.code = d;
        return k;
      };
      return c;
    }(), m = function() {
      function c(c) {
        this.numBits = c;
        this.probs = f(1 << c);
      }
      c.prototype.decode = function(c) {
        for (var a = 1, g = 0;g < this.numBits;g++) {
          a = (a << 1) + c.decodeBit(this.probs, a);
        }
        return a - (1 << this.numBits);
      };
      c.prototype.reverseDecode = function(c) {
        return b(this.probs, 0, this.numBits, c);
      };
      return c;
    }(), w = function() {
      function c() {
        this.choice = f(2);
        this.lowCoder = v(3, 16);
        this.midCoder = v(3, 16);
        this.highCoder = new m(8);
      }
      c.prototype.decode = function(c, a) {
        return 0 === c.decodeBit(this.choice, 0) ? this.lowCoder[a].decode(c) : 0 === c.decodeBit(this.choice, 1) ? 8 + this.midCoder[a].decode(c) : 16 + this.highCoder.decode(c);
      };
      return c;
    }(), t = function() {
      function c(c, a) {
        this.rangeDec = new n(c);
        this.outWindow = new e(a);
        this.markerIsMandatory = !1;
        this.dictSizeInProperties = this.dictSize = this.lp = this.pb = this.lc = 0;
        this.leftToUnpack = this.unpackSize = void 0;
        this.reps = new Int32Array(4);
        this.state = 0;
      }
      c.prototype.decodeProperties = function(c) {
        var a = c[0];
        if (225 <= a) {
          throw Error("Incorrect LZMA properties");
        }
        this.lc = a % 9;
        a = a / 9 | 0;
        this.pb = a / 5 | 0;
        this.lp = a % 5;
        for (a = this.dictSizeInProperties = 0;4 > a;a++) {
          this.dictSizeInProperties |= c[a + 1] << 8 * a;
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
      c.prototype.decodeLiteral = function(c, a) {
        var g = this.outWindow, d = this.rangeDec, e = 0;
        g.isEmpty() || (e = g.getByte(1));
        var k = 1, e = 768 * (((g.totalPos & (1 << this.lp) - 1) << this.lc) + (e >> 8 - this.lc));
        if (7 <= c) {
          g = g.getByte(a + 1);
          do {
            var n = g >> 7 & 1, g = g << 1, l = d.decodeBit(this.litProbs, e + ((1 + n << 8) + k)), k = k << 1 | l;
            if (n !== l) {
              break;
            }
          } while (256 > k);
        }
        for (;256 > k;) {
          k = k << 1 | d.decodeBit(this.litProbs, e + k);
        }
        return k - 256 & 255;
      };
      c.prototype.decodeDistance = function(c) {
        var a = c;
        3 < a && (a = 3);
        c = this.rangeDec;
        a = this.posSlotDecoder[a].decode(c);
        if (4 > a) {
          return a;
        }
        var g = (a >> 1) - 1, d = (2 | a & 1) << g;
        14 > a ? d = d + b(this.posDecoders, d - a, g, c) | 0 : (d = d + (c.decodeDirectBits(g - 4) << 4) | 0, d = d + this.alignDecoder.reverseDecode(c) | 0);
        return d;
      };
      c.prototype.init = function() {
        this.litProbs = f(768 << this.lc + this.lp);
        this.posSlotDecoder = v(6, 4);
        this.alignDecoder = new m(4);
        this.posDecoders = f(115);
        this.isMatch = f(192);
        this.isRep = f(12);
        this.isRepG0 = f(12);
        this.isRepG1 = f(12);
        this.isRepG2 = f(12);
        this.isRep0Long = f(192);
        this.lenDecoder = new w;
        this.repLenDecoder = new w;
      };
      c.prototype.decode = function(c) {
        for (var a = this.rangeDec, g = this.outWindow, e = this.pb, n = this.dictSize, b = this.markerIsMandatory, m = this.leftToUnpack, p = this.isMatch, t = this.isRep, w = this.isRepG0, f = this.isRepG1, h = this.isRepG2, r = this.isRep0Long, v = this.lenDecoder, z = this.repLenDecoder, A = this.reps[0], C = this.reps[1], y = this.reps[2], G = this.reps[3], B = this.state;;) {
          if (c && 48 > a.inStream.available) {
            this.outWindow.flush();
            break;
          }
          if (0 === m && !b && (this.outWindow.flush(), a.isFinishedOK())) {
            return k;
          }
          var E = g.totalPos & (1 << e) - 1;
          if (0 === a.decodeBit(p, (B << 4) + E)) {
            if (0 === m) {
              return l;
            }
            g.putByte(this.decodeLiteral(B, A));
            B = 4 > B ? 0 : 10 > B ? B - 3 : B - 6;
            m--;
          } else {
            if (0 !== a.decodeBit(t, B)) {
              if (0 === m || g.isEmpty()) {
                return l;
              }
              if (0 === a.decodeBit(w, B)) {
                if (0 === a.decodeBit(r, (B << 4) + E)) {
                  B = 7 > B ? 9 : 11;
                  g.putByte(g.getByte(A + 1));
                  m--;
                  continue;
                }
              } else {
                var J;
                0 === a.decodeBit(f, B) ? J = C : (0 === a.decodeBit(h, B) ? J = y : (J = G, G = y), y = C);
                C = A;
                A = J;
              }
              E = z.decode(a, E);
              B = 7 > B ? 8 : 11;
            } else {
              G = y;
              y = C;
              C = A;
              E = v.decode(a, E);
              B = 7 > B ? 7 : 10;
              A = this.decodeDistance(E);
              if (-1 === A) {
                return this.outWindow.flush(), a.isFinishedOK() ? u : l;
              }
              if (0 === m || A >= n || !g.checkDistance(A)) {
                return l;
              }
            }
            E += 2;
            J = !1;
            void 0 !== m && m < E && (E = m, J = !0);
            g.copyMatch(A + 1, E);
            m -= E;
            if (J) {
              return l;
            }
          }
        }
        this.state = B;
        this.reps[0] = A;
        this.reps[1] = C;
        this.reps[2] = y;
        this.reps[3] = G;
        this.leftToUnpack = m;
        return d;
      };
      c.prototype.flushOutput = function() {
        this.outWindow.flush();
      };
      return c;
    }(), l = 0, u = 1, k = 2, d = 3, g;
    (function(c) {
      c[c.WAIT_FOR_LZMA_HEADER = 0] = "WAIT_FOR_LZMA_HEADER";
      c[c.WAIT_FOR_SWF_HEADER = 1] = "WAIT_FOR_SWF_HEADER";
      c[c.PROCESS_DATA = 2] = "PROCESS_DATA";
      c[c.CLOSED = 3] = "CLOSED";
      c[c.ERROR = 4] = "ERROR";
    })(g || (g = {}));
    g = function() {
      function c(c) {
        void 0 === c && (c = !1);
        this._state = c ? 1 : 0;
        this.buffer = null;
      }
      c.prototype.push = function(c) {
        if (2 > this._state) {
          var g = this.buffer ? this.buffer.length : 0, e = (1 === this._state ? 17 : 13) + 5;
          if (g + c.length < e) {
            e = new Uint8Array(g + c.length);
            0 < g && e.set(this.buffer);
            e.set(c, g);
            this.buffer = e;
            return;
          }
          var k = new Uint8Array(e);
          0 < g && k.set(this.buffer);
          k.set(c.subarray(0, e - g), g);
          this._inStream = new p;
          this._inStream.append(k.subarray(e - 5));
          this._outStream = new a(function(c) {
            this.onData.call(null, c);
          }.bind(this));
          this._decoder = new t(this._inStream, this._outStream);
          if (1 === this._state) {
            this._decoder.decodeProperties(k.subarray(12, 17)), this._decoder.markerIsMandatory = !1, this._decoder.unpackSize = ((k[4] | k[5] << 8 | k[6] << 16 | k[7] << 24) >>> 0) - 8;
          } else {
            this._decoder.decodeProperties(k.subarray(0, 5));
            for (var g = 0, n = !1, l = 0;8 > l;l++) {
              var b = k[5 + l];
              255 !== b && (n = !0);
              g |= b << 8 * l;
            }
            this._decoder.markerIsMandatory = !n;
            this._decoder.unpackSize = n ? g : void 0;
          }
          this._decoder.create();
          c = c.subarray(e);
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
          u !== d && this._checkError(u);
        } catch (m) {
          this._decoder.flushOutput(), this._decoder = null, this._error(m);
        }
      };
      c.prototype.close = function() {
        if (2 === this._state) {
          this._state = 3;
          try {
            var c = this._decoder.decode(!1);
            this._checkError(c);
          } catch (a) {
            this._decoder.flushOutput(), this._error(a);
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
        var a;
        c === l ? a = "LZMA decoding error" : c === d ? a = "Decoding is not complete" : c === u ? void 0 !== this._decoder.unpackSize && this._decoder.unpackSize !== this._outStream.processed && (a = "Finished with end marker before than specified size") : a = "Internal LZMA Error";
        a && this._error(a);
      };
      return c;
    }();
    h.LzmaDecoder = g;
  })(h.ArrayUtilities || (h.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(r) {
    function f(a) {
      return "string" === typeof a ? a : void 0 == a ? null : a + "";
    }
    var b = h.Debug.notImplemented, v = h.StringUtilities.utf8decode, p = h.StringUtilities.utf8encode, a = h.NumberUtilities.clamp, e = function() {
      return function(a, e, k) {
        this.buffer = a;
        this.length = e;
        this.littleEndian = k;
      };
    }();
    r.PlainObjectDataBuffer = e;
    for (var n = new Uint32Array(33), m = 1, w = 0;32 >= m;m++) {
      n[m] = w = w << 1 | 1;
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
      l.FromArrayBuffer = function(a, e) {
        void 0 === e && (e = -1);
        var d = Object.create(l.prototype);
        d._buffer = a;
        d._length = -1 === e ? a.byteLength : e;
        d._position = 0;
        d._resetViews();
        d._littleEndian = l._nativeLittleEndian;
        d._bitBuffer = 0;
        d._bitLength = 0;
        return d;
      };
      l.FromPlainObject = function(a) {
        var e = l.FromArrayBuffer(a.buffer, a.length);
        e._littleEndian = a.littleEndian;
        return e;
      };
      l.prototype.toPlainObject = function() {
        return new e(this._buffer, this._length, this._littleEndian);
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
        var e = this._buffer;
        if (e.byteLength < a) {
          for (var d = Math.max(e.byteLength, 1);d < a;) {
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
          l._arrayBufferPool.release(e);
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
      l.prototype.readBytes = function(a, e) {
        var d = 0;
        void 0 === d && (d = 0);
        void 0 === e && (e = 0);
        var g = this._position;
        d || (d = 0);
        e || (e = this._length - g);
        g + e > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        a.length < d + e && (a._ensureCapacity(d + e), a.length = d + e);
        a._u8.set(new Uint8Array(this._buffer, g, e), d);
        this._position += e;
      };
      l.prototype.readShort = function() {
        return this.readUnsignedShort() << 16 >> 16;
      };
      l.prototype.readUnsignedShort = function() {
        var a = this._u8, e = this._position;
        e + 2 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var d = a[e + 0], a = a[e + 1];
        this._position = e + 2;
        return this._littleEndian ? a << 8 | d : d << 8 | a;
      };
      l.prototype.readInt = function() {
        var a = this._u8, e = this._position;
        e + 4 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var d = a[e + 0], g = a[e + 1], c = a[e + 2], a = a[e + 3];
        this._position = e + 4;
        return this._littleEndian ? a << 24 | c << 16 | g << 8 | d : d << 24 | g << 16 | c << 8 | a;
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
        var e = this._u8, d = h.IntegerUtilities.u8;
        this._littleEndian ? (d[0] = e[a + 0], d[1] = e[a + 1], d[2] = e[a + 2], d[3] = e[a + 3]) : (d[3] = e[a + 0], d[2] = e[a + 1], d[1] = e[a + 2], d[0] = e[a + 3]);
        return h.IntegerUtilities.f32[0];
      };
      l.prototype.readDouble = function() {
        var a = this._u8, e = this._position;
        e + 8 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var d = h.IntegerUtilities.u8;
        this._littleEndian ? (d[0] = a[e + 0], d[1] = a[e + 1], d[2] = a[e + 2], d[3] = a[e + 3], d[4] = a[e + 4], d[5] = a[e + 5], d[6] = a[e + 6], d[7] = a[e + 7]) : (d[0] = a[e + 7], d[1] = a[e + 6], d[2] = a[e + 5], d[3] = a[e + 4], d[4] = a[e + 3], d[5] = a[e + 2], d[6] = a[e + 1], d[7] = a[e + 0]);
        this._position = e + 8;
        return h.IntegerUtilities.f64[0];
      };
      l.prototype.writeBoolean = function(a) {
        this.writeByte(a ? 1 : 0);
      };
      l.prototype.writeByte = function(a) {
        var e = this._position + 1;
        this._ensureCapacity(e);
        this._u8[this._position++] = a;
        e > this._length && (this._length = e);
      };
      l.prototype.writeUnsignedByte = function(a) {
        var e = this._position + 1;
        this._ensureCapacity(e);
        this._u8[this._position++] = a;
        e > this._length && (this._length = e);
      };
      l.prototype.writeRawBytes = function(a) {
        var e = this._position + a.length;
        this._ensureCapacity(e);
        this._u8.set(a, this._position);
        this._position = e;
        e > this._length && (this._length = e);
      };
      l.prototype.writeBytes = function(e, n, d) {
        h.isNullOrUndefined(e) && this.sec.throwError("TypeError", Errors.NullPointerError, "bytes");
        n >>>= 0;
        d >>>= 0;
        2 > arguments.length && (n = 0);
        3 > arguments.length && (d = 0);
        n === a(n, 0, e.length) && n + d === a(n + d, 0, e.length) || this.sec.throwError("RangeError", Errors.ParamRangeError);
        0 === d && (d = e.length - n);
        this.writeRawBytes(new Int8Array(e._buffer, n, d));
      };
      l.prototype.writeShort = function(a) {
        this.writeUnsignedShort(a);
      };
      l.prototype.writeUnsignedShort = function(a) {
        var e = this._position;
        this._ensureCapacity(e + 2);
        var d = this._u8;
        this._littleEndian ? (d[e + 0] = a, d[e + 1] = a >> 8) : (d[e + 0] = a >> 8, d[e + 1] = a);
        this._position = e += 2;
        e > this._length && (this._length = e);
      };
      l.prototype.writeInt = function(a) {
        this.writeUnsignedInt(a);
      };
      l.prototype.write2Ints = function(a, e) {
        this.write2UnsignedInts(a, e);
      };
      l.prototype.write4Ints = function(a, e, d, g) {
        this.write4UnsignedInts(a, e, d, g);
      };
      l.prototype.writeUnsignedInt = function(a) {
        var e = this._position;
        this._ensureCapacity(e + 4);
        this._requestViews(2);
        if (this._littleEndian === l._nativeLittleEndian && 0 === (e & 3) && this._i32) {
          this._i32[e >> 2] = a;
        } else {
          var d = this._u8;
          this._littleEndian ? (d[e + 0] = a, d[e + 1] = a >> 8, d[e + 2] = a >> 16, d[e + 3] = a >> 24) : (d[e + 0] = a >> 24, d[e + 1] = a >> 16, d[e + 2] = a >> 8, d[e + 3] = a);
        }
        this._position = e += 4;
        e > this._length && (this._length = e);
      };
      l.prototype.write2UnsignedInts = function(a, e) {
        var d = this._position;
        this._ensureCapacity(d + 8);
        this._requestViews(2);
        this._littleEndian === l._nativeLittleEndian && 0 === (d & 3) && this._i32 ? (this._i32[(d >> 2) + 0] = a, this._i32[(d >> 2) + 1] = e, this._position = d += 8, d > this._length && (this._length = d)) : (this.writeUnsignedInt(a), this.writeUnsignedInt(e));
      };
      l.prototype.write4UnsignedInts = function(a, e, d, g) {
        var c = this._position;
        this._ensureCapacity(c + 16);
        this._requestViews(2);
        this._littleEndian === l._nativeLittleEndian && 0 === (c & 3) && this._i32 ? (this._i32[(c >> 2) + 0] = a, this._i32[(c >> 2) + 1] = e, this._i32[(c >> 2) + 2] = d, this._i32[(c >> 2) + 3] = g, this._position = c += 16, c > this._length && (this._length = c)) : (this.writeUnsignedInt(a), this.writeUnsignedInt(e), this.writeUnsignedInt(d), this.writeUnsignedInt(g));
      };
      l.prototype.writeFloat = function(a) {
        var e = this._position;
        this._ensureCapacity(e + 4);
        this._requestViews(4);
        if (this._littleEndian === l._nativeLittleEndian && 0 === (e & 3) && this._f32) {
          this._f32[e >> 2] = a;
        } else {
          var d = this._u8;
          h.IntegerUtilities.f32[0] = a;
          a = h.IntegerUtilities.u8;
          this._littleEndian ? (d[e + 0] = a[0], d[e + 1] = a[1], d[e + 2] = a[2], d[e + 3] = a[3]) : (d[e + 0] = a[3], d[e + 1] = a[2], d[e + 2] = a[1], d[e + 3] = a[0]);
        }
        this._position = e += 4;
        e > this._length && (this._length = e);
      };
      l.prototype.write6Floats = function(a, e, d, g, c, q) {
        var n = this._position;
        this._ensureCapacity(n + 24);
        this._requestViews(4);
        this._littleEndian === l._nativeLittleEndian && 0 === (n & 3) && this._f32 ? (this._f32[(n >> 2) + 0] = a, this._f32[(n >> 2) + 1] = e, this._f32[(n >> 2) + 2] = d, this._f32[(n >> 2) + 3] = g, this._f32[(n >> 2) + 4] = c, this._f32[(n >> 2) + 5] = q, this._position = n += 24, n > this._length && (this._length = n)) : (this.writeFloat(a), this.writeFloat(e), this.writeFloat(d), this.writeFloat(g), this.writeFloat(c), this.writeFloat(q));
      };
      l.prototype.writeDouble = function(a) {
        var e = this._position;
        this._ensureCapacity(e + 8);
        var d = this._u8;
        h.IntegerUtilities.f64[0] = a;
        a = h.IntegerUtilities.u8;
        this._littleEndian ? (d[e + 0] = a[0], d[e + 1] = a[1], d[e + 2] = a[2], d[e + 3] = a[3], d[e + 4] = a[4], d[e + 5] = a[5], d[e + 6] = a[6], d[e + 7] = a[7]) : (d[e + 0] = a[7], d[e + 1] = a[6], d[e + 2] = a[5], d[e + 3] = a[4], d[e + 4] = a[3], d[e + 5] = a[2], d[e + 6] = a[1], d[e + 7] = a[0]);
        this._position = e += 8;
        e > this._length && (this._length = e);
      };
      l.prototype.readRawBytes = function() {
        return new Int8Array(this._buffer, 0, this._length);
      };
      l.prototype.writeUTF = function(a) {
        a = f(a);
        a = v(a);
        this.writeShort(a.length);
        this.writeRawBytes(a);
      };
      l.prototype.writeUTFBytes = function(a) {
        a = f(a);
        a = v(a);
        this.writeRawBytes(a);
      };
      l.prototype.readUTF = function() {
        return this.readUTFBytes(this.readShort());
      };
      l.prototype.readUTFBytes = function(a) {
        a >>>= 0;
        var e = this._position;
        e + a > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        this._position += a;
        return p(new Int8Array(this._buffer, e, a));
      };
      Object.defineProperty(l.prototype, "length", {get:function() {
        return this._length;
      }, set:function(e) {
        e >>>= 0;
        e > this._buffer.byteLength && this._ensureCapacity(e);
        this._length = e;
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
        a = f(a);
        this._littleEndian = "auto" === a ? l._nativeLittleEndian : "littleEndian" === a;
      }, enumerable:!0, configurable:!0});
      l.prototype.toString = function() {
        return p(new Int8Array(this._buffer, 0, this._length));
      };
      l.prototype.toBlob = function(a) {
        return new Blob([new Int8Array(this._buffer, this._position, this._length)], {type:a});
      };
      l.prototype.writeMultiByte = function(a, e) {
        b("packageInternal flash.utils.ObjectOutput::writeMultiByte");
      };
      l.prototype.readMultiByte = function(a, e) {
        b("packageInternal flash.utils.ObjectInput::readMultiByte");
      };
      l.prototype.getValue = function(a) {
        a |= 0;
        return a >= this._length ? void 0 : this._u8[a];
      };
      l.prototype.setValue = function(a, e) {
        a |= 0;
        var d = a + 1;
        this._ensureCapacity(d);
        this._u8[a] = e;
        d > this._length && (this._length = d);
      };
      l.prototype.readFixed = function() {
        return this.readInt() / 65536;
      };
      l.prototype.readFixed8 = function() {
        return this.readShort() / 256;
      };
      l.prototype.readFloat16 = function() {
        var a = this.readUnsignedShort(), e = a >> 15 ? -1 : 1, d = (a & 31744) >> 10, a = a & 1023;
        return d ? 31 === d ? a ? NaN : Infinity * e : e * Math.pow(2, d - 15) * (1 + a / 1024) : a / 1024 * Math.pow(2, -14) * e;
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
        for (var e = this._bitBuffer, d = this._bitLength;a > d;) {
          e = e << 8 | this.readUnsignedByte(), d += 8;
        }
        d -= a;
        a = e >>> d & n[a];
        this._bitBuffer = e;
        this._bitLength = d;
        return a;
      };
      l.prototype.readFixedBits = function(a) {
        return this.readBits(a) / 65536;
      };
      l.prototype.readString = function(a) {
        var e = this._position;
        if (a) {
          e + a > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError), this._position += a;
        } else {
          a = 0;
          for (var d = e;d < this._length && this._u8[d];d++) {
            a++;
          }
          this._position += a + 1;
        }
        return p(new Int8Array(this._buffer, e, a));
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
        a = 0 === arguments.length ? "zlib" : f(a);
        var e;
        switch(a) {
          case "zlib":
            e = new r.Deflate(!0);
            break;
          case "deflate":
            e = new r.Deflate(!1);
            break;
          default:
            return;
        }
        var d = new l;
        e.onData = d.writeRawBytes.bind(d);
        e.push(this._u8.subarray(0, this._length));
        e.close();
        this._ensureCapacity(d._u8.length);
        this._u8.set(d._u8);
        this.length = d.length;
        this._position = 0;
      };
      l.prototype.uncompress = function(a) {
        a = 0 === arguments.length ? "zlib" : f(a);
        var e;
        switch(a) {
          case "zlib":
            e = r.Inflate.create(!0);
            break;
          case "deflate":
            e = r.Inflate.create(!1);
            break;
          case "lzma":
            e = new r.LzmaDecoder(!1);
            break;
          default:
            return;
        }
        var d = new l, g;
        e.onData = d.writeRawBytes.bind(d);
        e.onError = function(a) {
          return g = a;
        };
        e.push(this._u8.subarray(0, this._length));
        g && this.sec.throwError("IOError", Errors.CompressedDataError);
        e.close();
        this._ensureCapacity(d._u8.length);
        this._u8.set(d._u8);
        this.length = d.length;
        this._position = 0;
      };
      l._nativeLittleEndian = 1 === (new Int8Array((new Int32Array([1])).buffer))[0];
      l.INITIAL_SIZE = 128;
      l._arrayBufferPool = new h.ArrayBufferPool;
      return l;
    }();
    r.DataBuffer = m;
  })(h.ArrayUtilities || (h.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  var r = h.ArrayUtilities.DataBuffer, f = h.ArrayUtilities.ensureTypedArrayCapacity;
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
    return function(b, a, e, n, m, w, t, l, f, k, d) {
      this.commands = b;
      this.commandsPosition = a;
      this.coordinates = e;
      this.morphCoordinates = n;
      this.coordinatesPosition = m;
      this.styles = w;
      this.stylesLength = t;
      this.morphStyles = l;
      this.morphStylesLength = f;
      this.hasFills = k;
      this.hasLines = d;
    };
  }();
  h.PlainObjectShapeData = b;
  var v;
  (function(b) {
    b[b.Commands = 32] = "Commands";
    b[b.Coordinates = 128] = "Coordinates";
    b[b.Styles = 16] = "Styles";
  })(v || (v = {}));
  v = function() {
    function p(a) {
      void 0 === a && (a = !0);
      a && this.clear();
    }
    p.FromPlainObject = function(a) {
      var e = new p(!1);
      e.commands = a.commands;
      e.coordinates = a.coordinates;
      e.morphCoordinates = a.morphCoordinates;
      e.commandsPosition = a.commandsPosition;
      e.coordinatesPosition = a.coordinatesPosition;
      e.styles = r.FromArrayBuffer(a.styles, a.stylesLength);
      e.styles.endian = "auto";
      a.morphStyles && (e.morphStyles = r.FromArrayBuffer(a.morphStyles, a.morphStylesLength), e.morphStyles.endian = "auto");
      e.hasFills = a.hasFills;
      e.hasLines = a.hasLines;
      return e;
    };
    p.prototype.moveTo = function(a, e) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = 9;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = e;
    };
    p.prototype.lineTo = function(a, e) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = 10;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = e;
    };
    p.prototype.curveTo = function(a, e, n, b) {
      this.ensurePathCapacities(1, 4);
      this.commands[this.commandsPosition++] = 11;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = e;
      this.coordinates[this.coordinatesPosition++] = n;
      this.coordinates[this.coordinatesPosition++] = b;
    };
    p.prototype.cubicCurveTo = function(a, e, n, b, p, t) {
      this.ensurePathCapacities(1, 6);
      this.commands[this.commandsPosition++] = 12;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = e;
      this.coordinates[this.coordinatesPosition++] = n;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = p;
      this.coordinates[this.coordinatesPosition++] = t;
    };
    p.prototype.beginFill = function(a) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 1;
      this.styles.writeUnsignedInt(a);
      this.hasFills = !0;
    };
    p.prototype.writeMorphFill = function(a) {
      this.morphStyles.writeUnsignedInt(a);
    };
    p.prototype.endFill = function() {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 4;
    };
    p.prototype.endLine = function() {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 8;
    };
    p.prototype.lineStyle = function(a, e, n, b, p, t, l) {
      this.ensurePathCapacities(2, 0);
      this.commands[this.commandsPosition++] = 5;
      this.coordinates[this.coordinatesPosition++] = a;
      a = this.styles;
      a.writeUnsignedInt(e);
      a.writeBoolean(n);
      a.writeUnsignedByte(b);
      a.writeUnsignedByte(p);
      a.writeUnsignedByte(t);
      a.writeUnsignedByte(l);
      this.hasLines = !0;
    };
    p.prototype.writeMorphLineStyle = function(a, e) {
      this.morphCoordinates[this.coordinatesPosition - 1] = a;
      this.morphStyles.writeUnsignedInt(e);
    };
    p.prototype.beginBitmap = function(a, e, n, b, p) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = a;
      a = this.styles;
      a.writeUnsignedInt(e);
      this._writeStyleMatrix(n, !1);
      a.writeBoolean(b);
      a.writeBoolean(p);
      this.hasFills = !0;
    };
    p.prototype.writeMorphBitmap = function(a) {
      this._writeStyleMatrix(a, !0);
    };
    p.prototype.beginGradient = function(a, e, n, b, p, t, l, f) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = a;
      a = this.styles;
      a.writeUnsignedByte(b);
      a.writeShort(f);
      this._writeStyleMatrix(p, !1);
      b = e.length;
      a.writeByte(b);
      for (p = 0;p < b;p++) {
        a.writeUnsignedByte(n[p]), a.writeUnsignedInt(e[p]);
      }
      a.writeUnsignedByte(t);
      a.writeUnsignedByte(l);
      this.hasFills = !0;
    };
    p.prototype.writeMorphGradient = function(a, e, n) {
      this._writeStyleMatrix(n, !0);
      n = this.morphStyles;
      for (var b = 0;b < a.length;b++) {
        n.writeUnsignedByte(e[b]), n.writeUnsignedInt(a[b]);
      }
    };
    p.prototype.writeCommandAndCoordinates = function(a, e, n) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = e;
      this.coordinates[this.coordinatesPosition++] = n;
    };
    p.prototype.writeCoordinates = function(a, e) {
      this.ensurePathCapacities(0, 2);
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = e;
    };
    p.prototype.writeMorphCoordinates = function(a, e) {
      this.morphCoordinates = f(this.morphCoordinates, this.coordinatesPosition);
      this.morphCoordinates[this.coordinatesPosition - 2] = a;
      this.morphCoordinates[this.coordinatesPosition - 1] = e;
    };
    p.prototype.clear = function() {
      this.commandsPosition = this.coordinatesPosition = 0;
      this.commands = new Uint8Array(32);
      this.coordinates = new Int32Array(128);
      this.styles = new r(16);
      this.styles.endian = "auto";
      this.hasFills = this.hasLines = !1;
    };
    p.prototype.isEmpty = function() {
      return 0 === this.commandsPosition;
    };
    p.prototype.clone = function() {
      var a = new p(!1);
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
    p.prototype.toPlainObject = function() {
      return new b(this.commands, this.commandsPosition, this.coordinates, this.morphCoordinates, this.coordinatesPosition, this.styles.buffer, this.styles.length, this.morphStyles && this.morphStyles.buffer, this.morphStyles ? this.morphStyles.length : 0, this.hasFills, this.hasLines);
    };
    Object.defineProperty(p.prototype, "buffers", {get:function() {
      var a = [this.commands.buffer, this.coordinates.buffer, this.styles.buffer];
      this.morphCoordinates && a.push(this.morphCoordinates.buffer);
      this.morphStyles && a.push(this.morphStyles.buffer);
      return a;
    }, enumerable:!0, configurable:!0});
    p.prototype._writeStyleMatrix = function(a, e) {
      (e ? this.morphStyles : this.styles).write6Floats(a.a, a.b, a.c, a.d, a.tx, a.ty);
    };
    p.prototype.ensurePathCapacities = function(a, e) {
      this.commands = f(this.commands, this.commandsPosition + a);
      this.coordinates = f(this.coordinates, this.coordinatesPosition + e);
    };
    return p;
  }();
  h.ShapeData = v;
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(f) {
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
      })(f.SwfTag || (f.SwfTag = {}));
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
      })(f.DefinitionTags || (f.DefinitionTags = {}));
      (function(b) {
        b[b.CODE_DEFINE_BITS = 6] = "CODE_DEFINE_BITS";
        b[b.CODE_DEFINE_BITS_JPEG2 = 21] = "CODE_DEFINE_BITS_JPEG2";
        b[b.CODE_DEFINE_BITS_JPEG3 = 35] = "CODE_DEFINE_BITS_JPEG3";
        b[b.CODE_DEFINE_BITS_JPEG4 = 90] = "CODE_DEFINE_BITS_JPEG4";
      })(f.ImageDefinitionTags || (f.ImageDefinitionTags = {}));
      (function(b) {
        b[b.CODE_DEFINE_FONT = 10] = "CODE_DEFINE_FONT";
        b[b.CODE_DEFINE_FONT2 = 48] = "CODE_DEFINE_FONT2";
        b[b.CODE_DEFINE_FONT3 = 75] = "CODE_DEFINE_FONT3";
        b[b.CODE_DEFINE_FONT4 = 91] = "CODE_DEFINE_FONT4";
      })(f.FontDefinitionTags || (f.FontDefinitionTags = {}));
      (function(b) {
        b[b.CODE_PLACE_OBJECT = 4] = "CODE_PLACE_OBJECT";
        b[b.CODE_PLACE_OBJECT2 = 26] = "CODE_PLACE_OBJECT2";
        b[b.CODE_PLACE_OBJECT3 = 70] = "CODE_PLACE_OBJECT3";
        b[b.CODE_REMOVE_OBJECT = 5] = "CODE_REMOVE_OBJECT";
        b[b.CODE_REMOVE_OBJECT2 = 28] = "CODE_REMOVE_OBJECT2";
        b[b.CODE_START_SOUND = 15] = "CODE_START_SOUND";
        b[b.CODE_START_SOUND2 = 89] = "CODE_START_SOUND2";
      })(f.ControlTags || (f.ControlTags = {}));
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
      })(f.PlaceObjectFlags || (f.PlaceObjectFlags = {}));
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
      })(f.AVM1ClipEvents || (f.AVM1ClipEvents = {}));
    })(h.Parser || (h.Parser = {}));
  })(h.SWF || (h.SWF = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  var r = h.Debug.unexpected, f = function() {
    function b(b, p, a, e) {
      this.url = b;
      this.method = p;
      this.mimeType = a;
      this.data = e;
    }
    b.prototype.readAll = function(b, p) {
      var a = this.url, e = new XMLHttpRequest({mozSystem:!0});
      e.open(this.method || "GET", this.url, !0);
      e.responseType = "arraybuffer";
      b && (e.onprogress = function(a) {
        b(e.response, a.loaded, a.total);
      });
      e.onreadystatechange = function(n) {
        4 === e.readyState && (200 !== e.status && 0 !== e.status || null === e.response ? (r("Path: " + a + " not found."), p(null, e.statusText)) : p(e.response));
      };
      this.mimeType && e.setRequestHeader("Content-Type", this.mimeType);
      e.send(this.data || null);
    };
    b.prototype.readChunked = function(b, p, a, e, n, m) {
      if (0 >= b) {
        this.readAsync(p, a, e, n, m);
      } else {
        var f = 0, t = new Uint8Array(b), l = 0, u;
        this.readAsync(function(a, d) {
          u = d.total;
          for (var g = a.length, c = 0;f + g >= b;) {
            var e = b - f;
            t.set(a.subarray(c, c + e), f);
            c += e;
            g -= e;
            l += b;
            p(t, {loaded:l, total:u});
            f = 0;
          }
          t.set(a.subarray(c), f);
          f += g;
        }, a, e, function() {
          0 < f && (l += f, p(t.subarray(0, f), {loaded:l, total:u}), f = 0);
          n && n();
        }, m);
      }
    };
    b.prototype.readAsync = function(b, p, a, e, n) {
      var m = new XMLHttpRequest({mozSystem:!0}), f = this.url, t = 0, l = 0;
      m.open(this.method || "GET", f, !0);
      m.responseType = "moz-chunked-arraybuffer";
      var u = "moz-chunked-arraybuffer" !== m.responseType;
      u && (m.responseType = "arraybuffer");
      m.onprogress = function(a) {
        u || (t = a.loaded, l = a.total, b(new Uint8Array(m.response), {loaded:t, total:l}));
      };
      m.onreadystatechange = function(a) {
        2 === m.readyState && n && n(f, m.status, m.getAllResponseHeaders());
        4 === m.readyState && (200 !== m.status && 0 !== m.status || null === m.response && (0 === l || t !== l) ? p(m.statusText) : (u && (a = m.response, b(new Uint8Array(a), {loaded:0, total:a.byteLength})), e && e()));
      };
      this.mimeType && m.setRequestHeader("Content-Type", this.mimeType);
      m.send(this.data || null);
      a && a();
    };
    return b;
  }();
  h.BinaryFileReader = f;
})(Shumway || (Shumway = {}));
(function(h) {
  var r = function() {
    function f() {
      this.isAS3TraceOn = !0;
      this._startTime = Date.now();
    }
    Object.defineProperty(f.prototype, "currentTimestamp", {get:function() {
      return Date.now() - this._startTime;
    }, enumerable:!0, configurable:!0});
    f.prototype._writeLine = function(b) {
    };
    f.prototype.writeAS3Trace = function(b) {
    };
    return f;
  }();
  h.FlashLog = r;
  h.flashlog = null;
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(f) {
      f[f.Objects = 0] = "Objects";
      f[f.References = 1] = "References";
    })(h.RemotingPhase || (h.RemotingPhase = {}));
    (function(f) {
      f[f.HasMatrix = 1] = "HasMatrix";
      f[f.HasBounds = 2] = "HasBounds";
      f[f.HasChildren = 4] = "HasChildren";
      f[f.HasColorTransform = 8] = "HasColorTransform";
      f[f.HasClipRect = 16] = "HasClipRect";
      f[f.HasMiscellaneousProperties = 32] = "HasMiscellaneousProperties";
      f[f.HasMask = 64] = "HasMask";
      f[f.HasClip = 128] = "HasClip";
    })(h.MessageBits || (h.MessageBits = {}));
    (function(f) {
      f[f.None = 0] = "None";
      f[f.Asset = 134217728] = "Asset";
    })(h.IDMask || (h.IDMask = {}));
    (function(f) {
      f[f.EOF = 0] = "EOF";
      f[f.UpdateFrame = 100] = "UpdateFrame";
      f[f.UpdateGraphics = 101] = "UpdateGraphics";
      f[f.UpdateBitmapData = 102] = "UpdateBitmapData";
      f[f.UpdateTextContent = 103] = "UpdateTextContent";
      f[f.UpdateStage = 104] = "UpdateStage";
      f[f.UpdateNetStream = 105] = "UpdateNetStream";
      f[f.RequestBitmapData = 106] = "RequestBitmapData";
      f[f.DrawToBitmap = 200] = "DrawToBitmap";
      f[f.MouseEvent = 300] = "MouseEvent";
      f[f.KeyboardEvent = 301] = "KeyboardEvent";
      f[f.FocusEvent = 302] = "FocusEvent";
    })(h.MessageTag || (h.MessageTag = {}));
    (function(f) {
      f[f.Blur = 0] = "Blur";
      f[f.DropShadow = 1] = "DropShadow";
    })(h.FilterType || (h.FilterType = {}));
    (function(f) {
      f[f.Identity = 0] = "Identity";
      f[f.AlphaMultiplierOnly = 1] = "AlphaMultiplierOnly";
      f[f.All = 2] = "All";
    })(h.ColorTransformEncoding || (h.ColorTransformEncoding = {}));
    (function(f) {
      f[f.Initialized = 0] = "Initialized";
      f[f.Metadata = 1] = "Metadata";
      f[f.PlayStart = 2] = "PlayStart";
      f[f.PlayStop = 3] = "PlayStop";
      f[f.BufferEmpty = 4] = "BufferEmpty";
      f[f.BufferFull = 5] = "BufferFull";
      f[f.Pause = 6] = "Pause";
      f[f.Unpause = 7] = "Unpause";
      f[f.Seeking = 8] = "Seeking";
      f[f.Seeked = 9] = "Seeked";
      f[f.Progress = 10] = "Progress";
      f[f.Error = 11] = "Error";
    })(h.VideoPlaybackEvent || (h.VideoPlaybackEvent = {}));
    (function(f) {
      f[f.Init = 1] = "Init";
      f[f.Pause = 2] = "Pause";
      f[f.Seek = 3] = "Seek";
      f[f.GetTime = 4] = "GetTime";
      f[f.GetBufferLength = 5] = "GetBufferLength";
      f[f.SetSoundLevels = 6] = "SetSoundLevels";
      f[f.GetBytesLoaded = 7] = "GetBytesLoaded";
      f[f.GetBytesTotal = 8] = "GetBytesTotal";
      f[f.EnsurePlaying = 9] = "EnsurePlaying";
    })(h.VideoControlEvent || (h.VideoControlEvent = {}));
    (function(f) {
      f[f.ShowAll = 0] = "ShowAll";
      f[f.ExactFit = 1] = "ExactFit";
      f[f.NoBorder = 2] = "NoBorder";
      f[f.NoScale = 4] = "NoScale";
    })(h.StageScaleMode || (h.StageScaleMode = {}));
    (function(f) {
      f[f.None = 0] = "None";
      f[f.Top = 1] = "Top";
      f[f.Bottom = 2] = "Bottom";
      f[f.Left = 4] = "Left";
      f[f.Right = 8] = "Right";
      f[f.TopLeft = f.Top | f.Left] = "TopLeft";
      f[f.BottomLeft = f.Bottom | f.Left] = "BottomLeft";
      f[f.BottomRight = f.Bottom | f.Right] = "BottomRight";
      f[f.TopRight = f.Top | f.Right] = "TopRight";
    })(h.StageAlignFlags || (h.StageAlignFlags = {}));
    h.MouseEventNames = "click dblclick mousedown mousemove mouseup mouseover mouseout".split(" ");
    h.KeyboardEventNames = ["keydown", "keypress", "keyup"];
    (function(f) {
      f[f.CtrlKey = 1] = "CtrlKey";
      f[f.AltKey = 2] = "AltKey";
      f[f.ShiftKey = 4] = "ShiftKey";
    })(h.KeyboardEventFlags || (h.KeyboardEventFlags = {}));
    (function(f) {
      f[f.DocumentHidden = 0] = "DocumentHidden";
      f[f.DocumentVisible = 1] = "DocumentVisible";
      f[f.WindowBlur = 2] = "WindowBlur";
      f[f.WindowFocus = 3] = "WindowFocus";
    })(h.FocusEventType || (h.FocusEventType = {}));
  })(h.Remoting || (h.Remoting = {}));
})(Shumway || (Shumway = {}));
var throwError, Errors;
(function(h) {
  (function(h) {
    (function(f) {
      var b = function() {
        function b() {
        }
        b.toRGBA = function(a, e, n, b) {
          void 0 === b && (b = 1);
          return "rgba(" + a + "," + e + "," + n + "," + b + ")";
        };
        return b;
      }();
      f.UI = b;
      var h = function() {
        function p() {
        }
        p.prototype.tabToolbar = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(37, 44, 51, a);
        };
        p.prototype.toolbars = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(52, 60, 69, a);
        };
        p.prototype.selectionBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(29, 79, 115, a);
        };
        p.prototype.selectionText = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(245, 247, 250, a);
        };
        p.prototype.splitters = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(0, 0, 0, a);
        };
        p.prototype.bodyBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(17, 19, 21, a);
        };
        p.prototype.sidebarBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(24, 29, 32, a);
        };
        p.prototype.attentionBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(161, 134, 80, a);
        };
        p.prototype.bodyText = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(143, 161, 178, a);
        };
        p.prototype.foregroundTextGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(182, 186, 191, a);
        };
        p.prototype.contentTextHighContrast = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(169, 186, 203, a);
        };
        p.prototype.contentTextGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(143, 161, 178, a);
        };
        p.prototype.contentTextDarkGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(95, 115, 135, a);
        };
        p.prototype.blueHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(70, 175, 227, a);
        };
        p.prototype.purpleHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(107, 122, 187, a);
        };
        p.prototype.pinkHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(223, 128, 255, a);
        };
        p.prototype.redHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(235, 83, 104, a);
        };
        p.prototype.orangeHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(217, 102, 41, a);
        };
        p.prototype.lightOrangeHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(217, 155, 40, a);
        };
        p.prototype.greenHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(112, 191, 83, a);
        };
        p.prototype.blueGreyHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(94, 136, 176, a);
        };
        return p;
      }();
      f.UIThemeDark = h;
      h = function() {
        function p() {
        }
        p.prototype.tabToolbar = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(235, 236, 237, a);
        };
        p.prototype.toolbars = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(240, 241, 242, a);
        };
        p.prototype.selectionBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(76, 158, 217, a);
        };
        p.prototype.selectionText = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(245, 247, 250, a);
        };
        p.prototype.splitters = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(170, 170, 170, a);
        };
        p.prototype.bodyBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(252, 252, 252, a);
        };
        p.prototype.sidebarBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(247, 247, 247, a);
        };
        p.prototype.attentionBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(161, 134, 80, a);
        };
        p.prototype.bodyText = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(24, 25, 26, a);
        };
        p.prototype.foregroundTextGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(88, 89, 89, a);
        };
        p.prototype.contentTextHighContrast = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(41, 46, 51, a);
        };
        p.prototype.contentTextGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(143, 161, 178, a);
        };
        p.prototype.contentTextDarkGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(102, 115, 128, a);
        };
        p.prototype.blueHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(0, 136, 204, a);
        };
        p.prototype.purpleHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(91, 95, 255, a);
        };
        p.prototype.pinkHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(184, 46, 229, a);
        };
        p.prototype.redHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(237, 38, 85, a);
        };
        p.prototype.orangeHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(241, 60, 0, a);
        };
        p.prototype.lightOrangeHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(217, 126, 0, a);
        };
        p.prototype.greenHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(44, 187, 15, a);
        };
        p.prototype.blueGreyHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(95, 136, 176, a);
        };
        return p;
      }();
      f.UIThemeLight = h;
    })(h.Theme || (h.Theme = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(f) {
      var b = function() {
        function b(p, a) {
          this._buffers = p || [];
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
          for (var a = 0, e = this.snapshotCount;a < e;a++) {
            b(this._snapshots[a], a);
          }
        };
        b.prototype.createSnapshots = function() {
          var b = Number.MIN_VALUE, a = 0;
          for (this._snapshots = [];0 < this._buffers.length;) {
            var e = this._buffers.shift().createSnapshot();
            e && (b < e.endTime && (b = e.endTime), a < e.maxDepth && (a = e.maxDepth), this._snapshots.push(e));
          }
          this._windowEnd = this._endTime = b;
          this._maxDepth = a;
        };
        b.prototype.setWindow = function(b, a) {
          if (b > a) {
            var e = b;
            b = a;
            a = e;
          }
          e = Math.min(a - b, this.totalTime);
          b < this._startTime ? (b = this._startTime, a = this._startTime + e) : a > this._endTime && (b = this._endTime - e, a = this._endTime);
          this._windowStart = b;
          this._windowEnd = a;
        };
        b.prototype.moveWindowTo = function(b) {
          this.setWindow(b - this.windowLength / 2, b + this.windowLength / 2);
        };
        return b;
      }();
      f.Profile = b;
    })(h.Profiler || (h.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(h, r) {
  function f() {
    this.constructor = h;
  }
  for (var b in r) {
    r.hasOwnProperty(b) && (h[b] = r[b]);
  }
  f.prototype = r.prototype;
  h.prototype = new f;
};
(function(h) {
  (function(h) {
    (function(f) {
      var b = function() {
        return function(b) {
          this.kind = b;
          this.totalTime = this.selfTime = this.count = 0;
        };
      }();
      f.TimelineFrameStatistics = b;
      var h = function() {
        function p(a, e, b, m, p, t) {
          this.parent = a;
          this.kind = e;
          this.startData = b;
          this.endData = m;
          this.startTime = p;
          this.endTime = t;
          this.maxDepth = 0;
        }
        Object.defineProperty(p.prototype, "totalTime", {get:function() {
          return this.endTime - this.startTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(p.prototype, "selfTime", {get:function() {
          var a = this.totalTime;
          if (this.children) {
            for (var e = 0, b = this.children.length;e < b;e++) {
              var m = this.children[e], a = a - (m.endTime - m.startTime)
            }
          }
          return a;
        }, enumerable:!0, configurable:!0});
        p.prototype.getChildIndex = function(a) {
          for (var e = this.children, b = 0;b < e.length;b++) {
            if (e[b].endTime > a) {
              return b;
            }
          }
          return 0;
        };
        p.prototype.getChildRange = function(a, e) {
          if (this.children && a <= this.endTime && e >= this.startTime && e >= a) {
            var b = this._getNearestChild(a), m = this._getNearestChildReverse(e);
            if (b <= m) {
              return a = this.children[b].startTime, e = this.children[m].endTime, {startIndex:b, endIndex:m, startTime:a, endTime:e, totalTime:e - a};
            }
          }
          return null;
        };
        p.prototype._getNearestChild = function(a) {
          var e = this.children;
          if (e && e.length) {
            if (a <= e[0].endTime) {
              return 0;
            }
            for (var b, m = 0, p = e.length - 1;p > m;) {
              b = (m + p) / 2 | 0;
              var t = e[b];
              if (a >= t.startTime && a <= t.endTime) {
                return b;
              }
              a > t.endTime ? m = b + 1 : p = b;
            }
            return Math.ceil((m + p) / 2);
          }
          return 0;
        };
        p.prototype._getNearestChildReverse = function(a) {
          var e = this.children;
          if (e && e.length) {
            var b = e.length - 1;
            if (a >= e[b].startTime) {
              return b;
            }
            for (var m, p = 0;b > p;) {
              m = Math.ceil((p + b) / 2);
              var t = e[m];
              if (a >= t.startTime && a <= t.endTime) {
                return m;
              }
              a > t.endTime ? p = m : b = m - 1;
            }
            return (p + b) / 2 | 0;
          }
          return 0;
        };
        p.prototype.query = function(a) {
          if (a < this.startTime || a > this.endTime) {
            return null;
          }
          var e = this.children;
          if (e && 0 < e.length) {
            for (var b, m = 0, p = e.length - 1;p > m;) {
              var t = (m + p) / 2 | 0;
              b = e[t];
              if (a >= b.startTime && a <= b.endTime) {
                return b.query(a);
              }
              a > b.endTime ? m = t + 1 : p = t;
            }
            b = e[p];
            if (a >= b.startTime && a <= b.endTime) {
              return b.query(a);
            }
          }
          return this;
        };
        p.prototype.queryNext = function(a) {
          for (var e = this;a > e.endTime;) {
            if (e.parent) {
              e = e.parent;
            } else {
              break;
            }
          }
          return e.query(a);
        };
        p.prototype.getDepth = function() {
          for (var a = 0, e = this;e;) {
            a++, e = e.parent;
          }
          return a;
        };
        p.prototype.calculateStatistics = function() {
          function a(n) {
            if (n.kind) {
              var m = e[n.kind.id] || (e[n.kind.id] = new b(n.kind));
              m.count++;
              m.selfTime += n.selfTime;
              m.totalTime += n.totalTime;
            }
            n.children && n.children.forEach(a);
          }
          var e = this.statistics = [];
          a(this);
        };
        p.prototype.trace = function(a) {
          var e = (this.kind ? this.kind.name + ": " : "Profile: ") + (this.endTime - this.startTime).toFixed(2);
          if (this.children && this.children.length) {
            a.enter(e);
            for (e = 0;e < this.children.length;e++) {
              this.children[e].trace(a);
            }
            a.outdent();
          } else {
            a.writeLn(e);
          }
        };
        return p;
      }();
      f.TimelineFrame = h;
      h = function(b) {
        function a(a) {
          b.call(this, null, null, null, null, NaN, NaN);
          this.name = a;
        }
        __extends(a, b);
        return a;
      }(h);
      f.TimelineBufferSnapshot = h;
    })(h.Profiler || (h.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(r) {
    (function(f) {
      var b = function() {
        function b(p, a) {
          void 0 === p && (p = "");
          this.name = p || "";
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
        b.prototype._getKindId = function(p) {
          var a = b.MAX_KINDID;
          if (void 0 === this._kindNameMap[p]) {
            if (a = this._kinds.length, a < b.MAX_KINDID) {
              var e = {id:a, name:p, visible:!0};
              this._kinds.push(e);
              this._kindNameMap[p] = e;
            } else {
              a = b.MAX_KINDID;
            }
          } else {
            a = this._kindNameMap[p].id;
          }
          return a;
        };
        b.prototype._getMark = function(p, a, e) {
          var n = b.MAX_DATAID;
          h.isNullOrUndefined(e) || a === b.MAX_KINDID || (n = this._data.length, n < b.MAX_DATAID ? this._data.push(e) : n = b.MAX_DATAID);
          return p | n << 16 | a;
        };
        b.prototype.enter = function(p, a, e) {
          e = (h.isNullOrUndefined(e) ? performance.now() : e) - this._startTime;
          this._marks || this._initialize();
          this._depth++;
          p = this._getKindId(p);
          this._marks.write(this._getMark(b.ENTER, p, a));
          this._times.write(e);
          this._stack.push(p);
        };
        b.prototype.leave = function(p, a, e) {
          e = (h.isNullOrUndefined(e) ? performance.now() : e) - this._startTime;
          var n = this._stack.pop();
          p && (n = this._getKindId(p));
          this._marks.write(this._getMark(b.LEAVE, n, a));
          this._times.write(e);
          this._depth--;
        };
        b.prototype.count = function(b, a, e) {
        };
        b.prototype.createSnapshot = function() {
          var p;
          void 0 === p && (p = Number.MAX_VALUE);
          if (!this._marks) {
            return null;
          }
          var a = this._times, e = this._kinds, n = this._data, m = new f.TimelineBufferSnapshot(this.name), w = [m], t = 0;
          this._marks || this._initialize();
          this._marks.forEachInReverse(function(l, m) {
            var k = n[l >>> 16 & b.MAX_DATAID], d = e[l & b.MAX_KINDID];
            if (h.isNullOrUndefined(d) || d.visible) {
              var g = l & 2147483648, c = a.get(m), q = w.length;
              if (g === b.LEAVE) {
                if (1 === q && (t++, t > p)) {
                  return !0;
                }
                w.push(new f.TimelineFrame(w[q - 1], d, null, k, NaN, c));
              } else {
                if (g === b.ENTER) {
                  if (d = w.pop(), g = w[w.length - 1]) {
                    for (g.children ? g.children.unshift(d) : g.children = [d], g = w.length, d.depth = g, d.startData = k, d.startTime = c;d;) {
                      if (d.maxDepth < g) {
                        d.maxDepth = g, d = d.parent;
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
          this._startTime = h.isNullOrUndefined(b) ? performance.now() : b;
          this._marks ? (this._depth = 0, this._data = [], this._marks.reset(), this._times.reset()) : this._initialize();
        };
        b.FromFirefoxProfile = function(p, a) {
          for (var e = p.profile.threads[0].samples, n = new b(a, e[0].time), m = [], f, t = 0;t < e.length;t++) {
            f = e[t];
            var l = f.time, h = f.frames, k = 0;
            for (f = Math.min(h.length, m.length);k < f && h[k].location === m[k].location;) {
              k++;
            }
            for (var d = m.length - k, g = 0;g < d;g++) {
              f = m.pop(), n.leave(f.location, null, l);
            }
            for (;k < h.length;) {
              f = h[k++], n.enter(f.location, null, l);
            }
            m = h;
          }
          for (;f = m.pop();) {
            n.leave(f.location, null, l);
          }
          return n;
        };
        b.FromChromeProfile = function(p, a) {
          var e = p.timestamps, n = p.samples, m = new b(a, e[0] / 1E3), f = [], t = {}, l;
          b._resolveIds(p.head, t);
          for (var h = 0;h < e.length;h++) {
            var k = e[h] / 1E3, d = [];
            for (l = t[n[h]];l;) {
              d.unshift(l), l = l.parent;
            }
            var g = 0;
            for (l = Math.min(d.length, f.length);g < l && d[g] === f[g];) {
              g++;
            }
            for (var c = f.length - g, q = 0;q < c;q++) {
              l = f.pop(), m.leave(l.functionName, null, k);
            }
            for (;g < d.length;) {
              l = d[g++], m.enter(l.functionName, null, k);
            }
            f = d;
          }
          for (;l = f.pop();) {
            m.leave(l.functionName, null, k);
          }
          return m;
        };
        b._resolveIds = function(p, a) {
          a[p.id] = p;
          if (p.children) {
            for (var e = 0;e < p.children.length;e++) {
              p.children[e].parent = p, b._resolveIds(p.children[e], a);
            }
          }
        };
        b.ENTER = 0;
        b.LEAVE = -2147483648;
        b.MAX_KINDID = 65535;
        b.MAX_DATAID = 32767;
        return b;
      }();
      f.TimelineBuffer = b;
    })(r.Profiler || (r.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(r) {
    (function(f) {
      (function(b) {
        b[b.DARK = 0] = "DARK";
        b[b.LIGHT = 1] = "LIGHT";
      })(f.UIThemeType || (f.UIThemeType = {}));
      var b = function() {
        function b(p, a) {
          void 0 === a && (a = 0);
          this._container = p;
          this._headers = [];
          this._charts = [];
          this._profiles = [];
          this._activeProfile = null;
          this.themeType = a;
          this._tooltip = this._createTooltip();
        }
        b.prototype.createProfile = function(b, a) {
          var e = new f.Profile(b, a);
          e.createSnapshots();
          this._profiles.push(e);
          this.activateProfile(e);
          return e;
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
            this._overviewHeader = new f.FlameChartHeader(this, 0);
            this._overview = new f.FlameChartOverview(this, 0);
            this._activeProfile.forEachSnapshot(function(a, e) {
              b._headers.push(new f.FlameChartHeader(b, 1));
              b._charts.push(new f.FlameChart(b, a));
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
            var b = this, a = this._activeProfile.startTime, e = this._activeProfile.endTime;
            this._overviewHeader.initialize(a, e);
            this._overview.initialize(a, e);
            this._activeProfile.forEachSnapshot(function(n, m) {
              b._headers[m].initialize(a, e);
              b._charts[m].initialize(a, e);
            });
          }
        };
        b.prototype._onResize = function() {
          if (this._activeProfile) {
            var b = this, a = this._container.offsetWidth;
            this._overviewHeader.setSize(a);
            this._overview.setSize(a);
            this._activeProfile.forEachSnapshot(function(e, n) {
              b._headers[n].setSize(a);
              b._charts[n].setSize(a);
            });
          }
        };
        b.prototype._updateViews = function() {
          if (this._activeProfile) {
            var b = this, a = this._activeProfile.windowStart, e = this._activeProfile.windowEnd;
            this._overviewHeader.setWindow(a, e);
            this._overview.setWindow(a, e);
            this._activeProfile.forEachSnapshot(function(n, m) {
              b._headers[m].setWindow(a, e);
              b._charts[m].setWindow(a, e);
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
        b.prototype.showTooltip = function(b, a, e, n) {
          this.removeTooltipContent();
          this._tooltip.appendChild(this.createTooltipContent(b, a));
          this._tooltip.style.display = "block";
          var m = this._tooltip.firstChild;
          a = m.clientWidth;
          m = m.clientHeight;
          e += e + a >= b.canvas.clientWidth - 50 ? -(a + 20) : 25;
          n += b.canvas.offsetTop - m / 2;
          this._tooltip.style.left = e + "px";
          this._tooltip.style.top = n + "px";
        };
        b.prototype.hideTooltip = function() {
          this._tooltip.style.display = "none";
        };
        b.prototype.createTooltipContent = function(b, a) {
          var e = Math.round(1E5 * a.totalTime) / 1E5, n = Math.round(1E5 * a.selfTime) / 1E5, m = Math.round(1E4 * a.selfTime / a.totalTime) / 100, f = document.createElement("div"), t = document.createElement("h1");
          t.textContent = a.kind.name;
          f.appendChild(t);
          t = document.createElement("p");
          t.textContent = "Total: " + e + " ms";
          f.appendChild(t);
          e = document.createElement("p");
          e.textContent = "Self: " + n + " ms (" + m + "%)";
          f.appendChild(e);
          if (n = b.getStatistics(a.kind)) {
            m = document.createElement("p"), m.textContent = "Count: " + n.count, f.appendChild(m), m = document.createElement("p"), m.textContent = "All Total: " + Math.round(1E5 * n.totalTime) / 1E5 + " ms", f.appendChild(m), m = document.createElement("p"), m.textContent = "All Self: " + Math.round(1E5 * n.selfTime) / 1E5 + " ms", f.appendChild(m);
          }
          this.appendDataElements(f, a.startData);
          this.appendDataElements(f, a.endData);
          return f;
        };
        b.prototype.appendDataElements = function(b, a) {
          if (!h.isNullOrUndefined(a)) {
            b.appendChild(document.createElement("hr"));
            var e;
            if (h.isObject(a)) {
              for (var n in a) {
                e = document.createElement("p"), e.textContent = n + ": " + a[n], b.appendChild(e);
              }
            } else {
              e = document.createElement("p"), e.textContent = a.toString(), b.appendChild(e);
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
      f.Controller = b;
    })(r.Profiler || (r.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(r) {
    (function(f) {
      var b = h.NumberUtilities.clamp, r = function() {
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
      f.MouseCursor = r;
      var p = function() {
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
        a.prototype.updateCursor = function(e) {
          if (!a._cursorOwner || a._cursorOwner === this._target) {
            var b = this._eventTarget.parentElement;
            a._cursor !== e && (a._cursor = e, ["", "-moz-", "-webkit-"].forEach(function(a) {
              b.style.cursor = a + e;
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
            var n = this._getTargetMousePos(a, a.target);
            a = b("undefined" !== typeof a.deltaY ? a.deltaY / 16 : -a.wheelDelta / 40, -1, 1);
            this._target.onMouseWheel(n.x, n.y, Math.pow(1.2, a) - 1);
          }
        };
        a.prototype._startHoverCheck = function(e) {
          this._hoverInfo = {isHovering:!1, timeoutHandle:setTimeout(this._onMouseMoveIdleHandler.bind(this), a.HOVER_TIMEOUT), pos:this._getTargetMousePos(e, e.target)};
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
      f.MouseController = p;
    })(r.Profiler || (r.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(f) {
      (function(b) {
        b[b.NONE = 0] = "NONE";
        b[b.WINDOW = 1] = "WINDOW";
        b[b.HANDLE_LEFT = 2] = "HANDLE_LEFT";
        b[b.HANDLE_RIGHT = 3] = "HANDLE_RIGHT";
        b[b.HANDLE_BOTH = 4] = "HANDLE_BOTH";
      })(f.FlameChartDragTarget || (f.FlameChartDragTarget = {}));
      var b = function() {
        function b(p) {
          this._controller = p;
          this._initialized = !1;
          this._canvas = document.createElement("canvas");
          this._context = this._canvas.getContext("2d");
          this._mouseController = new f.MouseController(this, this._canvas);
          p = p.container;
          p.appendChild(this._canvas);
          p = p.getBoundingClientRect();
          this.setSize(p.width);
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
        b.prototype.setWindow = function(b, a, e) {
          void 0 === e && (e = !0);
          this._windowStart = b;
          this._windowEnd = a;
          !e || this.draw();
        };
        b.prototype.setRange = function(b, a) {
          var e = !1;
          void 0 === e && (e = !0);
          this._rangeStart = b;
          this._rangeEnd = a;
          !e || this.draw();
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
          var e;
          void 0 === e && (e = 10);
          return Math.abs(b - a) < 1 / Math.pow(10, e);
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
        b.prototype.onMouseWheel = function(f, a, e) {
          f = this._toTime(f);
          a = this._windowStart;
          var n = this._windowEnd, m = n - a;
          e = Math.max((b.MIN_WINDOW_LEN - m) / m, e);
          this._controller.setWindow(a + (a - f) * e, n + (n - f) * e);
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
        b.prototype.onDrag = function(b, a, e, n, m, f) {
        };
        b.prototype.onDragEnd = function(b, a, e, n, m, f) {
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
      f.FlameChartBase = b;
    })(h.Profiler || (h.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(r) {
    (function(f) {
      var b = h.StringUtilities.trimMiddle, r = function(p) {
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
          var m = a.getChildRange(this._windowStart, this._windowEnd);
          if (m) {
            for (var f = m.startIndex;f <= m.endIndex;f++) {
              var t = a.children[f];
              this._drawFrame(t, b) && this._drawChildren(t, b + 1);
            }
          }
        };
        a.prototype._drawFrame = function(a, b) {
          var m = this._context, f = this._toPixels(a.startTime), t = this._toPixels(a.endTime), l = t - f;
          if (l <= this._minFrameWidthInPixels) {
            return m.fillStyle = this._controller.theme.tabToolbar(1), m.fillRect(f, 12.5 * b, this._minFrameWidthInPixels, 12 + 12.5 * (a.maxDepth - a.depth)), !1;
          }
          0 > f && (t = l + f, f = 0);
          var t = t - f, p = this._kindStyle[a.kind.id];
          p || (p = h.ColorStyle.randomStyle(), p = this._kindStyle[a.kind.id] = {bgColor:p, textColor:h.ColorStyle.contrastStyle(p)});
          m.save();
          m.fillStyle = p.bgColor;
          m.fillRect(f, 12.5 * b, t, 12);
          12 < l && (l = a.kind.name) && l.length && (l = this._prepareText(m, l, t - 4), l.length && (m.fillStyle = p.textColor, m.textBaseline = "bottom", m.fillText(l, f + 2, 12.5 * (b + 1) - 1)));
          m.restore();
          return !0;
        };
        a.prototype._prepareText = function(a, n, m) {
          var f = this._measureWidth(a, n);
          if (m > f) {
            return n;
          }
          for (var f = 3, t = n.length;f < t;) {
            var l = f + t >> 1;
            this._measureWidth(a, b(n, l)) < m ? f = l + 1 : t = l;
          }
          n = b(n, t - 1);
          f = this._measureWidth(a, n);
          return f <= m ? n : "";
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
          var m = 1 + b / 12.5 | 0, f = this._snapshot.query(this._toTime(a));
          if (f && f.depth >= m) {
            for (;f && f.depth > m;) {
              f = f.parent;
            }
            return f;
          }
          return null;
        };
        a.prototype.onMouseDown = function(a, b) {
          this._windowEqRange() || (this._mouseController.updateCursor(f.MouseCursor.ALL_SCROLL), this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:1});
        };
        a.prototype.onMouseMove = function(a, b) {
        };
        a.prototype.onMouseOver = function(a, b) {
        };
        a.prototype.onMouseOut = function() {
        };
        a.prototype.onDrag = function(a, b, m, f, t, l) {
          if (a = this._dragInfo) {
            t = this._toTimeRelative(-t), this._controller.setWindow(a.windowStartInitial + t, a.windowEndInitial + t);
          }
        };
        a.prototype.onDragEnd = function(a, b, m, h, t, l) {
          this._dragInfo = null;
          this._mouseController.updateCursor(f.MouseCursor.DEFAULT);
        };
        a.prototype.onClick = function(a, b) {
          this._dragInfo = null;
          this._mouseController.updateCursor(f.MouseCursor.DEFAULT);
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
      }(f.FlameChartBase);
      f.FlameChart = r;
    })(r.Profiler || (r.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(r) {
    (function(f) {
      var b = h.NumberUtilities.clamp;
      (function(b) {
        b[b.OVERLAY = 0] = "OVERLAY";
        b[b.STACK = 1] = "STACK";
        b[b.UNION = 2] = "UNION";
      })(f.FlameChartOverviewMode || (f.FlameChartOverviewMode = {}));
      var r = function(h) {
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
          var a = this._context, b = window.devicePixelRatio, m = this._width, f = this._height;
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.bodyBackground(1);
          a.fillRect(0, 0, m, f);
          a.restore();
          this._initialized && (this._overviewCanvasDirty && (this._drawChart(), this._overviewCanvasDirty = !1), a.drawImage(this._overviewCanvas, 0, 0), this._drawSelection());
        };
        a.prototype._drawSelection = function() {
          var a = this._context, b = this._height, m = window.devicePixelRatio, f = this._selection ? this._selection.left : this._toPixels(this._windowStart), t = this._selection ? this._selection.right : this._toPixels(this._windowEnd), l = this._controller.theme;
          a.save();
          a.scale(m, m);
          this._selection ? (a.fillStyle = l.selectionText(.15), a.fillRect(f, 1, t - f, b - 1), a.fillStyle = "rgba(133, 0, 0, 1)", a.fillRect(f + .5, 0, t - f - 1, 4), a.fillRect(f + .5, b - 4, t - f - 1, 4)) : (a.fillStyle = l.bodyBackground(.4), a.fillRect(0, 1, f, b - 1), a.fillRect(t, 1, this._width, b - 1));
          a.beginPath();
          a.moveTo(f, 0);
          a.lineTo(f, b);
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
          a.fillText(b.toFixed(2), Math.min(f, t) - 4, 10);
          a.fillText((b / 60).toFixed(2), Math.min(f, t) - 4, 20);
          a.restore();
        };
        a.prototype._drawChart = function() {
          var a = window.devicePixelRatio, b = this._height, m = this._controller.activeProfile, f = 4 * this._width, t = m.totalTime / f, l = this._overviewContext, h = this._controller.theme.blueHighlight(1);
          l.save();
          l.translate(0, a * b);
          var k = -a * b / (m.maxDepth - 1);
          l.scale(a / 4, k);
          l.clearRect(0, 0, f, m.maxDepth - 1);
          1 == this._mode && l.scale(1, 1 / m.snapshotCount);
          for (var d = 0, g = m.snapshotCount;d < g;d++) {
            var c = m.getSnapshotAt(d);
            if (c) {
              var q = null, x = 0;
              l.beginPath();
              l.moveTo(0, 0);
              for (var F = 0;F < f;F++) {
                x = m.startTime + F * t, x = (q = q ? q.queryNext(x) : c.query(x)) ? q.getDepth() - 1 : 0, l.lineTo(F, x);
              }
              l.lineTo(F, 0);
              l.fillStyle = h;
              l.fill();
              1 == this._mode && l.translate(0, -b * a / k);
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
            var m = this._toPixels(this._windowStart), h = this._toPixels(this._windowEnd), t = 2 + f.FlameChartBase.DRAGHANDLE_WIDTH / 2, l = a >= m - t && a <= m + t, p = a >= h - t && a <= h + t;
            if (l && p) {
              return 4;
            }
            if (l) {
              return 2;
            }
            if (p) {
              return 3;
            }
            if (!this._windowEqRange() && a > m + t && a < h - t) {
              return 1;
            }
          }
          return 0;
        };
        a.prototype.onMouseDown = function(a, b) {
          var m = this._getDragTargetUnderCursor(a, b);
          0 === m ? (this._selection = {left:a, right:a}, this.draw()) : (1 === m && this._mouseController.updateCursor(f.MouseCursor.GRABBING), this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:m});
        };
        a.prototype.onMouseMove = function(a, b) {
          var m = f.MouseCursor.DEFAULT, h = this._getDragTargetUnderCursor(a, b);
          0 === h || this._selection || (m = 1 === h ? f.MouseCursor.GRAB : f.MouseCursor.EW_RESIZE);
          this._mouseController.updateCursor(m);
        };
        a.prototype.onMouseOver = function(a, b) {
          this.onMouseMove(a, b);
        };
        a.prototype.onMouseOut = function() {
          this._mouseController.updateCursor(f.MouseCursor.DEFAULT);
        };
        a.prototype.onDrag = function(a, n, m, h, t, l) {
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
            n = this._windowStart;
            m = this._windowEnd;
            t = this._toTimeRelative(t);
            switch(a.target) {
              case 1:
                n = a.windowStartInitial + t;
                m = a.windowEndInitial + t;
                break;
              case 2:
                n = b(a.windowStartInitial + t, this._rangeStart, m - f.FlameChartBase.MIN_WINDOW_LEN);
                break;
              case 3:
                m = b(a.windowEndInitial + t, n + f.FlameChartBase.MIN_WINDOW_LEN, this._rangeEnd);
                break;
              default:
                return;
            }
            this._controller.setWindow(n, m);
          }
        };
        a.prototype.onDragEnd = function(a, b, m, f, t, l) {
          this._selection && (this._selection = null, this._controller.setWindow(this._toTime(a), this._toTime(m)));
          this._dragInfo = null;
          this.onMouseMove(m, f);
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
      }(f.FlameChartBase);
      f.FlameChartOverview = r;
    })(r.Profiler || (r.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(r) {
    (function(f) {
      var b = h.NumberUtilities.clamp;
      (function(b) {
        b[b.OVERVIEW = 0] = "OVERVIEW";
        b[b.CHART = 1] = "CHART";
      })(f.FlameChartHeaderType || (f.FlameChartHeaderType = {}));
      var r = function(h) {
        function a(a, b) {
          this._type = b;
          h.call(this, a);
        }
        __extends(a, h);
        a.prototype.draw = function() {
          var a = this._context, b = window.devicePixelRatio, m = this._width, f = this._height;
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.tabToolbar(1);
          a.fillRect(0, 0, m, f);
          this._initialized && (0 == this._type ? (b = this._toPixels(this._windowStart), m = this._toPixels(this._windowEnd), a.fillStyle = this._controller.theme.bodyBackground(1), a.fillRect(b, 0, m - b, f), this._drawLabels(this._rangeStart, this._rangeEnd), this._drawDragHandle(b), this._drawDragHandle(m)) : this._drawLabels(this._windowStart, this._windowEnd));
          a.restore();
        };
        a.prototype._drawLabels = function(b, n) {
          var m = this._context, f = this._calculateTickInterval(b, n), t = Math.ceil(b / f) * f, l = 500 <= f, h = l ? 1E3 : 1, k = this._decimalPlaces(f / h), l = l ? "s" : "ms", d = this._toPixels(t), g = this._height / 2, c = this._controller.theme;
          m.lineWidth = 1;
          m.strokeStyle = c.contentTextDarkGrey(.5);
          m.fillStyle = c.contentTextDarkGrey(1);
          m.textAlign = "right";
          m.textBaseline = "middle";
          m.font = "11px sans-serif";
          for (c = this._width + a.TICK_MAX_WIDTH;d < c;) {
            m.fillText((t / h).toFixed(k) + " " + l, d - 7, g + 1), m.beginPath(), m.moveTo(d, 0), m.lineTo(d, this._height + 1), m.closePath(), m.stroke(), t += f, d = this._toPixels(t);
          }
        };
        a.prototype._calculateTickInterval = function(b, n) {
          var m = (n - b) / (this._width / a.TICK_MAX_WIDTH), f = Math.pow(10, Math.floor(Math.log(m) / Math.LN10)), m = m / f;
          return 5 < m ? 10 * f : 2 < m ? 5 * f : 1 < m ? 2 * f : f;
        };
        a.prototype._drawDragHandle = function(a) {
          var b = this._context;
          b.lineWidth = 2;
          b.strokeStyle = this._controller.theme.bodyBackground(1);
          b.fillStyle = this._controller.theme.foregroundTextGrey(.7);
          this._drawRoundedRect(b, a - f.FlameChartBase.DRAGHANDLE_WIDTH / 2, f.FlameChartBase.DRAGHANDLE_WIDTH, this._height - 2);
        };
        a.prototype._drawRoundedRect = function(a, b, m, f) {
          var t, l = !0;
          void 0 === l && (l = !0);
          void 0 === t && (t = !0);
          a.beginPath();
          a.moveTo(b + 2, 1);
          a.lineTo(b + m - 2, 1);
          a.quadraticCurveTo(b + m, 1, b + m, 3);
          a.lineTo(b + m, 1 + f - 2);
          a.quadraticCurveTo(b + m, 1 + f, b + m - 2, 1 + f);
          a.lineTo(b + 2, 1 + f);
          a.quadraticCurveTo(b, 1 + f, b, 1 + f - 2);
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
              var m = this._toPixels(this._windowStart), h = this._toPixels(this._windowEnd), t = 2 + f.FlameChartBase.DRAGHANDLE_WIDTH / 2, m = a >= m - t && a <= m + t, h = a >= h - t && a <= h + t;
              if (m && h) {
                return 4;
              }
              if (m) {
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
        a.prototype.onMouseDown = function(a, b) {
          var m = this._getDragTargetUnderCursor(a, b);
          1 === m && this._mouseController.updateCursor(f.MouseCursor.GRABBING);
          this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:m};
        };
        a.prototype.onMouseMove = function(a, b) {
          var m = f.MouseCursor.DEFAULT, h = this._getDragTargetUnderCursor(a, b);
          0 !== h && (1 !== h ? m = f.MouseCursor.EW_RESIZE : 1 !== h || this._windowEqRange() || (m = f.MouseCursor.GRAB));
          this._mouseController.updateCursor(m);
        };
        a.prototype.onMouseOver = function(a, b) {
          this.onMouseMove(a, b);
        };
        a.prototype.onMouseOut = function() {
          this._mouseController.updateCursor(f.MouseCursor.DEFAULT);
        };
        a.prototype.onDrag = function(a, n, m, h, t, l) {
          a = this._dragInfo;
          if (4 === a.target) {
            if (0 !== t) {
              a.target = 0 > t ? 2 : 3;
            } else {
              return;
            }
          }
          n = this._windowStart;
          m = this._windowEnd;
          t = this._toTimeRelative(t);
          switch(a.target) {
            case 1:
              m = 0 === this._type ? 1 : -1;
              n = a.windowStartInitial + m * t;
              m = a.windowEndInitial + m * t;
              break;
            case 2:
              n = b(a.windowStartInitial + t, this._rangeStart, m - f.FlameChartBase.MIN_WINDOW_LEN);
              break;
            case 3:
              m = b(a.windowEndInitial + t, n + f.FlameChartBase.MIN_WINDOW_LEN, this._rangeEnd);
              break;
            default:
              return;
          }
          this._controller.setWindow(n, m);
        };
        a.prototype.onDragEnd = function(a, b, m, f, t, l) {
          this._dragInfo = null;
          this.onMouseMove(m, f);
        };
        a.prototype.onClick = function(a, b) {
          1 === this._dragInfo.target && this._mouseController.updateCursor(f.MouseCursor.GRAB);
        };
        a.prototype.onHoverStart = function(a, b) {
        };
        a.prototype.onHoverEnd = function() {
        };
        a.TICK_MAX_WIDTH = 75;
        return a;
      }(f.FlameChartBase);
      f.FlameChartHeader = r;
    })(r.Profiler || (r.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(f) {
      (function(b) {
        var f = function() {
          function a(a, b, f, h, t) {
            this.pageLoaded = a;
            this.threadsTotal = b;
            this.threadsLoaded = f;
            this.threadFilesTotal = h;
            this.threadFilesLoaded = t;
          }
          a.prototype.toString = function() {
            return "[" + ["pageLoaded", "threadsTotal", "threadsLoaded", "threadFilesTotal", "threadFilesLoaded"].map(function(a, b, f) {
              return a + ":" + this[a];
            }, this).join(", ") + "]";
          };
          return a;
        }();
        b.TraceLoggerProgressInfo = f;
        var h = function() {
          function a(a) {
            this._baseUrl = a;
            this._threads = [];
            this._progressInfo = null;
          }
          a.prototype.loadPage = function(a, b, m) {
            this._threads = [];
            this._pageLoadCallback = b;
            this._pageLoadProgressCallback = m;
            this._progressInfo = new f(!1, 0, 0, 0, 0);
            this._loadData([a], this._onLoadPage.bind(this));
          };
          Object.defineProperty(a.prototype, "buffers", {get:function() {
            for (var a = [], b = 0, f = this._threads.length;b < f;b++) {
              a.push(this._threads[b].buffer);
            }
            return a;
          }, enumerable:!0, configurable:!0});
          a.prototype._onProgress = function() {
            this._pageLoadProgressCallback && this._pageLoadProgressCallback.call(this, this._progressInfo);
          };
          a.prototype._onLoadPage = function(a) {
            if (a && 1 == a.length) {
              var n = this, f = 0;
              a = a[0];
              var h = a.length;
              this._threads = Array(h);
              this._progressInfo.pageLoaded = !0;
              this._progressInfo.threadsTotal = h;
              for (var t = 0;t < a.length;t++) {
                var l = a[t], p = [l.dict, l.tree];
                l.corrections && p.push(l.corrections);
                this._progressInfo.threadFilesTotal += p.length;
                this._loadData(p, function(a) {
                  return function(d) {
                    d && (d = new b.Thread(d), d.buffer.name = "Thread " + a, n._threads[a] = d);
                    f++;
                    n._progressInfo.threadsLoaded++;
                    n._onProgress();
                    f === h && n._pageLoadCallback.call(n, null, n._threads);
                  };
                }(t), function(a) {
                  n._progressInfo.threadFilesLoaded++;
                  n._onProgress();
                });
              }
              this._onProgress();
            } else {
              this._pageLoadCallback.call(this, "Error loading page.", null);
            }
          };
          a.prototype._loadData = function(a, b, f) {
            var h = 0, t = 0, l = a.length, p = [];
            p.length = l;
            for (var k = 0;k < l;k++) {
              var d = this._baseUrl + a[k], g = new XMLHttpRequest, c = /\.tl$/i.test(d) ? "arraybuffer" : "json";
              g.open("GET", d, !0);
              g.responseType = c;
              g.onload = function(a, c) {
                return function(g) {
                  if ("json" === c) {
                    if (g = this.response, "string" === typeof g) {
                      try {
                        g = JSON.parse(g), p[a] = g;
                      } catch (d) {
                        t++;
                      }
                    } else {
                      p[a] = g;
                    }
                  } else {
                    p[a] = this.response;
                  }
                  ++h;
                  f && f(h);
                  h === l && b(p);
                };
              }(k, c);
              g.send();
            }
          };
          a.colors = "#0044ff #8c4b00 #cc5c33 #ff80c4 #ffbfd9 #ff8800 #8c5e00 #adcc33 #b380ff #bfd9ff #ffaa00 #8c0038 #bf8f30 #f780ff #cc99c9 #aaff00 #000073 #452699 #cc8166 #cca799 #000066 #992626 #cc6666 #ccc299 #ff6600 #526600 #992663 #cc6681 #99ccc2 #ff0066 #520066 #269973 #61994d #739699 #ffcc00 #006629 #269199 #94994d #738299 #ff0000 #590000 #234d8c #8c6246 #7d7399 #ee00ff #00474d #8c2385 #8c7546 #7c8c69 #eeff00 #4d003d #662e1a #62468c #8c6969 #6600ff #4c2900 #1a6657 #8c464f #8c6981 #44ff00 #401100 #1a2466 #663355 #567365 #d90074 #403300 #101d40 #59562d #66614d #cc0000 #002b40 #234010 #4c2626 #4d5e66 #00a3cc #400011 #231040 #4c3626 #464359 #0000bf #331b00 #80e6ff #311a33 #4d3939 #a69b00 #003329 #80ffb2 #331a20 #40303d #00a658 #40ffd9 #ffc480 #ffe1bf #332b26 #8c2500 #9933cc #80fff6 #ffbfbf #303326 #005e8c #33cc47 #b2ff80 #c8bfff #263332 #00708c #cc33ad #ffe680 #f2ffbf #262a33 #388c00 #335ccc #8091ff #bfffd9".split(" ");
          return a;
        }();
        b.TraceLogger = h;
      })(f.TraceLogger || (f.TraceLogger = {}));
    })(h.Profiler || (h.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(f) {
      (function(b) {
        var h;
        (function(b) {
          b[b.START_HI = 0] = "START_HI";
          b[b.START_LO = 4] = "START_LO";
          b[b.STOP_HI = 8] = "STOP_HI";
          b[b.STOP_LO = 12] = "STOP_LO";
          b[b.TEXTID = 16] = "TEXTID";
          b[b.NEXTID = 20] = "NEXTID";
        })(h || (h = {}));
        h = function() {
          function b(a) {
            2 <= a.length && (this._text = a[0], this._data = new DataView(a[1]), this._buffer = new f.TimelineBuffer, this._walkTree(0));
          }
          Object.defineProperty(b.prototype, "buffer", {get:function() {
            return this._buffer;
          }, enumerable:!0, configurable:!0});
          b.prototype._walkTree = function(a) {
            var e = this._data, n = this._buffer;
            do {
              var f = a * b.ITEM_SIZE, h = 4294967295 * e.getUint32(f + 0) + e.getUint32(f + 4), t = 4294967295 * e.getUint32(f + 8) + e.getUint32(f + 12), l = e.getUint32(f + 16), f = e.getUint32(f + 20), u = 1 === (l & 1), l = l >>> 1, l = this._text[l];
              n.enter(l, null, h / 1E6);
              u && this._walkTree(a + 1);
              n.leave(l, null, t / 1E6);
              a = f;
            } while (0 !== a);
          };
          b.ITEM_SIZE = 24;
          return b;
        }();
        b.Thread = h;
      })(f.TraceLogger || (f.TraceLogger = {}));
    })(h.Profiler || (h.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(r) {
    (function(f) {
      var b = h.NumberUtilities.clamp, r = function() {
        function a() {
          this.length = 0;
          this.lines = [];
          this.format = [];
          this.time = [];
          this.repeat = [];
          this.length = 0;
        }
        a.prototype.append = function(a, b) {
          var f = this.lines;
          0 < f.length && f[f.length - 1] === a ? this.repeat[f.length - 1]++ : (this.lines.push(a), this.repeat.push(1), this.format.push(b ? {backgroundFillStyle:b} : void 0), this.time.push(performance.now()), this.length++);
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
      f.Buffer = r;
      var p = function() {
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
            var e = 0;
            switch(a.keyCode) {
              case q:
                this.showLineNumbers = !this.showLineNumbers;
                break;
              case x:
                this.showLineTime = !this.showLineTime;
                break;
              case l:
                e = -1;
                break;
              case p:
                e = 1;
                break;
              case b:
                e = -this.pageLineCount;
                break;
              case f:
                e = this.pageLineCount;
                break;
              case h:
                e = -this.lineIndex;
                break;
              case t:
                e = this.buffer.length - this.lineIndex;
                break;
              case k:
                this.columnIndex -= a.metaKey ? 10 : 1;
                0 > this.columnIndex && (this.columnIndex = 0);
                a.preventDefault();
                break;
              case d:
                this.columnIndex += a.metaKey ? 10 : 1;
                a.preventDefault();
                break;
              case g:
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
            a.metaKey && (e *= this.pageLineCount);
            e && (this.scroll(e), a.preventDefault());
            e && a.shiftKey ? this.selection ? this.lineIndex > this.selection.start ? this.selection.end = this.lineIndex : this.selection.start = this.lineIndex : 0 < e ? this.selection = {start:this.lineIndex - e, end:this.lineIndex} : 0 > e && (this.selection = {start:this.lineIndex, end:this.lineIndex - e}) : e && (this.selection = null);
            this.paint();
          }.bind(this), !1);
          a.addEventListener("focus", function(a) {
            this.hasFocus = !0;
          }.bind(this), !1);
          a.addEventListener("blur", function(a) {
            this.hasFocus = !1;
          }.bind(this), !1);
          var b = 33, f = 34, h = 36, t = 35, l = 38, p = 40, k = 37, d = 39, g = 65, c = 67, q = 78, x = 84;
        }
        a.prototype.resize = function() {
          this._resizeHandler();
        };
        a.prototype._resizeHandler = function() {
          var a = this.canvas.parentElement, b = a.clientWidth, a = a.clientHeight - 1, f = window.devicePixelRatio || 1;
          1 !== f ? (this.ratio = f / 1, this.canvas.width = b * this.ratio, this.canvas.height = a * this.ratio, this.canvas.style.width = b + "px", this.canvas.style.height = a + "px") : (this.ratio = 1, this.canvas.width = b, this.canvas.height = a);
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
          var b = this.textMarginLeft, f = b + (this.showLineNumbers ? 5 * (String(this.buffer.length).length + 2) : 0), h = f + (this.showLineTime ? 40 : 10), t = h + 25;
          this.context.font = this.fontSize + 'px Consolas, "Liberation Mono", Courier, monospace';
          this.context.setTransform(this.ratio, 0, 0, this.ratio, 0, 0);
          for (var l = this.canvas.width, p = this.lineHeight, k = 0;k < a;k++) {
            var d = k * this.lineHeight, g = this.pageIndex + k, c = this.buffer.get(g), q = this.buffer.getFormat(g), x = this.buffer.getRepeat(g), F = 1 < g ? this.buffer.getTime(g) - this.buffer.getTime(0) : 0;
            this.context.fillStyle = g % 2 ? this.lineColor : this.alternateLineColor;
            q && q.backgroundFillStyle && (this.context.fillStyle = q.backgroundFillStyle);
            this.context.fillRect(0, d, l, p);
            this.context.fillStyle = this.selectionTextColor;
            this.context.fillStyle = this.textColor;
            this.selection && g >= this.selection.start && g <= this.selection.end && (this.context.fillStyle = this.selectionColor, this.context.fillRect(0, d, l, p), this.context.fillStyle = this.selectionTextColor);
            this.hasFocus && g === this.lineIndex && (this.context.fillStyle = this.selectionColor, this.context.fillRect(0, d, l, p), this.context.fillStyle = this.selectionTextColor);
            0 < this.columnIndex && (c = c.substring(this.columnIndex));
            d = (k + 1) * this.lineHeight - this.textMarginBottom;
            this.showLineNumbers && this.context.fillText(String(g), b, d);
            this.showLineTime && this.context.fillText(F.toFixed(1).padLeft(" ", 6), f, d);
            1 < x && this.context.fillText(String(x).padLeft(" ", 3), h, d);
            this.context.fillText(c, t, d);
          }
        };
        a.prototype.refreshEvery = function(a) {
          function b() {
            f.paint();
            f.refreshFrequency && setTimeout(b, f.refreshFrequency);
          }
          var f = this;
          this.refreshFrequency = a;
          f.refreshFrequency && setTimeout(b, f.refreshFrequency);
        };
        a.prototype.isScrolledToBottom = function() {
          return this.lineIndex === this.buffer.length - 1;
        };
        return a;
      }();
      f.Terminal = p;
    })(r.Terminal || (r.Terminal = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(f) {
      var b = function() {
        function b(f) {
          this._lastWeightedTime = this._lastTime = this._index = 0;
          this._gradient = "#FF0000 #FF1100 #FF2300 #FF3400 #FF4600 #FF5700 #FF6900 #FF7B00 #FF8C00 #FF9E00 #FFAF00 #FFC100 #FFD300 #FFE400 #FFF600 #F7FF00 #E5FF00 #D4FF00 #C2FF00 #B0FF00 #9FFF00 #8DFF00 #7CFF00 #6AFF00 #58FF00 #47FF00 #35FF00 #24FF00 #12FF00 #00FF00".split(" ");
          this._container = f;
          this._canvas = document.createElement("canvas");
          this._container.appendChild(this._canvas);
          this._context = this._canvas.getContext("2d");
          this._listenForContainerSizeChanges();
        }
        b.prototype._listenForContainerSizeChanges = function() {
          var b = this._containerWidth, a = this._containerHeight;
          this._onContainerSizeChanged();
          var e = this;
          setInterval(function() {
            if (b !== e._containerWidth || a !== e._containerHeight) {
              e._onContainerSizeChanged(), b = e._containerWidth, a = e._containerHeight;
            }
          }, 10);
        };
        b.prototype._onContainerSizeChanged = function() {
          var b = this._containerWidth, a = this._containerHeight, e = window.devicePixelRatio || 1;
          1 !== e ? (this._ratio = e / 1, this._canvas.width = b * this._ratio, this._canvas.height = a * this._ratio, this._canvas.style.width = b + "px", this._canvas.style.height = a + "px") : (this._ratio = 1, this._canvas.width = b, this._canvas.height = a);
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
            var e = 1 * (performance.now() - this._lastTime) + 0 * this._lastWeightedTime, f = this._context, m = 2 * this._ratio, h = 30 * this._ratio, t = performance;
            t.memory && (h += 30 * this._ratio);
            var l = (this._canvas.width - h) / (m + 1) | 0, u = this._index++;
            this._index > l && (this._index = 0);
            l = this._canvas.height;
            f.globalAlpha = 1;
            f.fillStyle = "black";
            f.fillRect(h + u * (m + 1), 0, 4 * m, this._canvas.height);
            var k = Math.min(1E3 / 60 / e, 1);
            f.fillStyle = "#00FF00";
            f.globalAlpha = b ? .5 : 1;
            k = l / 2 * k | 0;
            f.fillRect(h + u * (m + 1), l - k, m, k);
            a && (k = Math.min(1E3 / 240 / a, 1), f.fillStyle = "#FF6347", k = l / 2 * k | 0, f.fillRect(h + u * (m + 1), l / 2 - k, m, k));
            0 === u % 16 && (f.globalAlpha = 1, f.fillStyle = "black", f.fillRect(0, 0, h, this._canvas.height), f.fillStyle = "white", f.font = 8 * this._ratio + "px Arial", f.textBaseline = "middle", m = (1E3 / e).toFixed(0), a && (m += " " + a.toFixed(0)), t.memory && (m += " " + (t.memory.usedJSHeapSize / 1024 / 1024).toFixed(2)), f.fillText(m, 2 * this._ratio, this._containerHeight / 2 * this._ratio));
            this._lastTime = performance.now();
            this._lastWeightedTime = e;
          }
        };
        return b;
      }();
      f.FPS = b;
    })(h.Mini || (h.Mini = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
console.timeEnd("Load Shared Dependencies");
console.time("Load GFX Dependencies");
(function(h) {
  (function(r) {
    function f(a, c, g) {
      return n && g ? "string" === typeof c ? (a = h.ColorUtilities.cssStyleToRGBA(c), h.ColorUtilities.rgbaToCSSStyle(g.transformRGBA(a))) : c instanceof CanvasGradient && c._template ? c._template.createCanvasGradient(a, g) : c : c;
    }
    var b = h.NumberUtilities.clamp;
    (function(a) {
      a[a.None = 0] = "None";
      a[a.Brief = 1] = "Brief";
      a[a.Verbose = 2] = "Verbose";
    })(r.TraceLevel || (r.TraceLevel = {}));
    var v = h.Metrics.Counter.instance;
    r.frameCounter = new h.Metrics.Counter(!0);
    r.traceLevel = 2;
    r.writer = null;
    r.frameCount = function(a) {
      v.count(a);
      r.frameCounter.count(a);
    };
    r.timelineBuffer = new h.Tools.Profiler.TimelineBuffer("GFX");
    r.enterTimeline = function(a, c) {
    };
    r.leaveTimeline = function(a, c) {
    };
    var p = null, a = null, e = null, n = !0;
    n && "undefined" !== typeof CanvasRenderingContext2D && (p = CanvasGradient.prototype.addColorStop, a = CanvasRenderingContext2D.prototype.createLinearGradient, e = CanvasRenderingContext2D.prototype.createRadialGradient, CanvasRenderingContext2D.prototype.createLinearGradient = function(a, c, g, d) {
      return (new w(a, c, g, d)).createCanvasGradient(this, null);
    }, CanvasRenderingContext2D.prototype.createRadialGradient = function(a, c, g, d, b, q) {
      return (new t(a, c, g, d, b, q)).createCanvasGradient(this, null);
    }, CanvasGradient.prototype.addColorStop = function(a, c) {
      p.call(this, a, c);
      this._template.addColorStop(a, c);
    });
    var m = function() {
      return function(a, c) {
        this.offset = a;
        this.color = c;
      };
    }(), w = function() {
      function c(a, g, d, b) {
        this.x0 = a;
        this.y0 = g;
        this.x1 = d;
        this.y1 = b;
        this.colorStops = [];
      }
      c.prototype.addColorStop = function(a, c) {
        this.colorStops.push(new m(a, c));
      };
      c.prototype.createCanvasGradient = function(c, g) {
        for (var d = a.call(c, this.x0, this.y0, this.x1, this.y1), b = this.colorStops, q = 0;q < b.length;q++) {
          var e = b[q], x = e.offset, e = e.color, e = g ? f(c, e, g) : e;
          p.call(d, x, e);
        }
        d._template = this;
        d._transform = this._transform;
        return d;
      };
      return c;
    }(), t = function() {
      function a(c, g, d, b, q, e) {
        this.x0 = c;
        this.y0 = g;
        this.r0 = d;
        this.x1 = b;
        this.y1 = q;
        this.r1 = e;
        this.colorStops = [];
      }
      a.prototype.addColorStop = function(a, c) {
        this.colorStops.push(new m(a, c));
      };
      a.prototype.createCanvasGradient = function(a, c) {
        for (var g = e.call(a, this.x0, this.y0, this.r0, this.x1, this.y1, this.r1), d = this.colorStops, b = 0;b < d.length;b++) {
          var q = d[b], x = q.offset, q = q.color, q = c ? f(a, q, c) : q;
          p.call(g, x, q);
        }
        g._template = this;
        g._transform = this._transform;
        return g;
      };
      return a;
    }(), l;
    (function(a) {
      a[a.ClosePath = 1] = "ClosePath";
      a[a.MoveTo = 2] = "MoveTo";
      a[a.LineTo = 3] = "LineTo";
      a[a.QuadraticCurveTo = 4] = "QuadraticCurveTo";
      a[a.BezierCurveTo = 5] = "BezierCurveTo";
      a[a.ArcTo = 6] = "ArcTo";
      a[a.Rect = 7] = "Rect";
      a[a.Arc = 8] = "Arc";
      a[a.Save = 9] = "Save";
      a[a.Restore = 10] = "Restore";
      a[a.Transform = 11] = "Transform";
    })(l || (l = {}));
    var u = function() {
      function a(c) {
        this._commands = new Uint8Array(a._arrayBufferPool.acquire(8), 0, 8);
        this._commandPosition = 0;
        this._data = new Float64Array(a._arrayBufferPool.acquire(8 * Float64Array.BYTES_PER_ELEMENT), 0, 8);
        this._dataPosition = 0;
        c instanceof a && this.addPath(c);
      }
      a._apply = function(a, c) {
        var g = a._commands, d = a._data, b = 0, q = 0;
        c.beginPath();
        for (var e = a._commandPosition;b < e;) {
          switch(g[b++]) {
            case 1:
              c.closePath();
              break;
            case 2:
              c.moveTo(d[q++], d[q++]);
              break;
            case 3:
              c.lineTo(d[q++], d[q++]);
              break;
            case 4:
              c.quadraticCurveTo(d[q++], d[q++], d[q++], d[q++]);
              break;
            case 5:
              c.bezierCurveTo(d[q++], d[q++], d[q++], d[q++], d[q++], d[q++]);
              break;
            case 6:
              c.arcTo(d[q++], d[q++], d[q++], d[q++], d[q++]);
              break;
            case 7:
              c.rect(d[q++], d[q++], d[q++], d[q++]);
              break;
            case 8:
              c.arc(d[q++], d[q++], d[q++], d[q++], d[q++], !!d[q++]);
              break;
            case 9:
              c.save();
              break;
            case 10:
              c.restore();
              break;
            case 11:
              c.transform(d[q++], d[q++], d[q++], d[q++], d[q++], d[q++]);
          }
        }
      };
      a.prototype._ensureCommandCapacity = function(c) {
        this._commands = a._arrayBufferPool.ensureUint8ArrayLength(this._commands, c);
      };
      a.prototype._ensureDataCapacity = function(c) {
        this._data = a._arrayBufferPool.ensureFloat64ArrayLength(this._data, c);
      };
      a.prototype._writeCommand = function(a) {
        this._commandPosition >= this._commands.length && this._ensureCommandCapacity(this._commandPosition + 1);
        this._commands[this._commandPosition++] = a;
      };
      a.prototype._writeData = function(a, c, g, d, b, q) {
        var e = arguments.length;
        this._dataPosition + e >= this._data.length && this._ensureDataCapacity(this._dataPosition + e);
        var x = this._data, l = this._dataPosition;
        x[l] = a;
        x[l + 1] = c;
        2 < e && (x[l + 2] = g, x[l + 3] = d, 4 < e && (x[l + 4] = b, 6 === e && (x[l + 5] = q)));
        this._dataPosition += e;
      };
      a.prototype.closePath = function() {
        this._writeCommand(1);
      };
      a.prototype.moveTo = function(a, c) {
        this._writeCommand(2);
        this._writeData(a, c);
      };
      a.prototype.lineTo = function(a, c) {
        this._writeCommand(3);
        this._writeData(a, c);
      };
      a.prototype.quadraticCurveTo = function(a, c, g, d) {
        this._writeCommand(4);
        this._writeData(a, c, g, d);
      };
      a.prototype.bezierCurveTo = function(a, c, g, d, b, q) {
        this._writeCommand(5);
        this._writeData(a, c, g, d, b, q);
      };
      a.prototype.arcTo = function(a, c, g, d, b) {
        this._writeCommand(6);
        this._writeData(a, c, g, d, b);
      };
      a.prototype.rect = function(a, c, g, d) {
        this._writeCommand(7);
        this._writeData(a, c, g, d);
      };
      a.prototype.arc = function(a, c, g, d, b, q) {
        this._writeCommand(8);
        this._writeData(a, c, g, d, b, +q);
      };
      a.prototype.addPath = function(a, c) {
        c && (this._writeCommand(9), this._writeCommand(11), this._writeData(c.a, c.b, c.c, c.d, c.e, c.f));
        var g = this._commandPosition + a._commandPosition;
        g >= this._commands.length && this._ensureCommandCapacity(g);
        for (var d = this._commands, b = a._commands, q = this._commandPosition, e = 0;q < g;q++) {
          d[q] = b[e++];
        }
        this._commandPosition = g;
        g = this._dataPosition + a._dataPosition;
        g >= this._data.length && this._ensureDataCapacity(g);
        d = this._data;
        b = a._data;
        q = this._dataPosition;
        for (e = 0;q < g;q++) {
          d[q] = b[e++];
        }
        this._dataPosition = g;
        c && this._writeCommand(10);
      };
      a._arrayBufferPool = new h.ArrayBufferPool;
      return a;
    }();
    r.Path = u;
    if ("undefined" !== typeof CanvasRenderingContext2D && ("undefined" === typeof Path2D || !Path2D.prototype.addPath)) {
      var k = CanvasRenderingContext2D.prototype.fill;
      CanvasRenderingContext2D.prototype.fill = function(a, c) {
        arguments.length && (a instanceof u ? u._apply(a, this) : c = a);
        c ? k.call(this, c) : k.call(this);
      };
      var d = CanvasRenderingContext2D.prototype.stroke;
      CanvasRenderingContext2D.prototype.stroke = function(a, c) {
        arguments.length && (a instanceof u ? u._apply(a, this) : c = a);
        c ? d.call(this, c) : d.call(this);
      };
      var g = CanvasRenderingContext2D.prototype.clip;
      CanvasRenderingContext2D.prototype.clip = function(a, c) {
        arguments.length && (a instanceof u ? u._apply(a, this) : c = a);
        c ? g.call(this, c) : g.call(this);
      };
      window.Path2D = u;
    }
    if ("undefined" !== typeof CanvasPattern && Path2D.prototype.addPath) {
      l = function(a) {
        this._transform = a;
        this._template && (this._template._transform = a);
      };
      CanvasPattern.prototype.setTransform || (CanvasPattern.prototype.setTransform = l);
      CanvasGradient.prototype.setTransform || (CanvasGradient.prototype.setTransform = l);
      var c = CanvasRenderingContext2D.prototype.fill, q = CanvasRenderingContext2D.prototype.stroke;
      CanvasRenderingContext2D.prototype.fill = function(a, g) {
        var d = !!this.fillStyle._transform;
        if ((this.fillStyle instanceof CanvasPattern || this.fillStyle instanceof CanvasGradient) && d && a instanceof Path2D) {
          var d = this.fillStyle._transform, b;
          try {
            b = d.inverse();
          } catch (q) {
            b = d = r.Geometry.Matrix.createIdentitySVGMatrix();
          }
          this.transform(d.a, d.b, d.c, d.d, d.e, d.f);
          d = new Path2D;
          d.addPath(a, b);
          c.call(this, d, g);
          this.transform(b.a, b.b, b.c, b.d, b.e, b.f);
        } else {
          0 === arguments.length ? c.call(this) : 1 === arguments.length ? c.call(this, a) : 2 === arguments.length && c.call(this, a, g);
        }
      };
      CanvasRenderingContext2D.prototype.stroke = function(a) {
        var c = !!this.strokeStyle._transform;
        if ((this.strokeStyle instanceof CanvasPattern || this.strokeStyle instanceof CanvasGradient) && c && a instanceof Path2D) {
          var g = this.strokeStyle._transform, c = g.inverse();
          this.transform(g.a, g.b, g.c, g.d, g.e, g.f);
          g = new Path2D;
          g.addPath(a, c);
          var d = this.lineWidth;
          this.lineWidth *= (c.a + c.d) / 2;
          q.call(this, g);
          this.transform(c.a, c.b, c.c, c.d, c.e, c.f);
          this.lineWidth = d;
        } else {
          0 === arguments.length ? q.call(this) : 1 === arguments.length && q.call(this, a);
        }
      };
    }
    "undefined" !== typeof CanvasRenderingContext2D && function() {
      function a() {
        return r.Geometry.Matrix.createSVGMatrixFromArray(this.mozCurrentTransform);
      }
      var c = "currentTransform" in CanvasRenderingContext2D.prototype;
      CanvasRenderingContext2D.prototype.flashStroke = function(a, g) {
        if (c) {
          var d = this.currentTransform, q = new Path2D;
          q.addPath(a, d);
          var e = this.lineWidth;
          this.setTransform(1, 0, 0, 1, 0, 0);
          switch(g) {
            case 1:
              this.lineWidth = b(e * (h.getScaleX(d) + h.getScaleY(d)) / 2, 1, 1024);
              break;
            case 2:
              this.lineWidth = b(e * h.getScaleY(d), 1, 1024);
              break;
            case 3:
              this.lineWidth = b(e * h.getScaleX(d), 1, 1024);
          }
          this.stroke(q);
          this.setTransform(d.a, d.b, d.c, d.d, d.e, d.f);
          this.lineWidth = e;
        } else {
          this.stroke(a);
        }
      };
      if (!c) {
        if ("mozCurrentTransform" in CanvasRenderingContext2D.prototype) {
          Object.defineProperty(CanvasRenderingContext2D.prototype, "currentTransform", {get:a}), c = !0;
        } else {
          var g = CanvasRenderingContext2D.prototype.setTransform;
          CanvasRenderingContext2D.prototype.setTransform = function(a, c, d, b, q, e) {
            var x = this.currentTransform;
            x.a = a;
            x.b = c;
            x.c = d;
            x.d = b;
            x.e = q;
            x.f = e;
            g.call(this, a, c, d, b, q, e);
          };
          Object.defineProperty(CanvasRenderingContext2D.prototype, "currentTransform", {get:function() {
            return this._currentTransform || (this._currentTransform = r.Geometry.Matrix.createIdentitySVGMatrix());
          }});
        }
      }
    }();
    if ("undefined" !== typeof CanvasRenderingContext2D && void 0 === CanvasRenderingContext2D.prototype.globalColorMatrix) {
      var x = CanvasRenderingContext2D.prototype.fill, F = CanvasRenderingContext2D.prototype.stroke, I = CanvasRenderingContext2D.prototype.fillText, W = CanvasRenderingContext2D.prototype.strokeText;
      Object.defineProperty(CanvasRenderingContext2D.prototype, "globalColorMatrix", {get:function() {
        return this._globalColorMatrix ? this._globalColorMatrix.clone() : null;
      }, set:function(a) {
        a ? this._globalColorMatrix ? this._globalColorMatrix.set(a) : this._globalColorMatrix = a.clone() : this._globalColorMatrix = null;
      }, enumerable:!0, configurable:!0});
      CanvasRenderingContext2D.prototype.fill = function(a, c) {
        var g = null;
        this._globalColorMatrix && (g = this.fillStyle, this.fillStyle = f(this, this.fillStyle, this._globalColorMatrix));
        0 === arguments.length ? x.call(this) : 1 === arguments.length ? x.call(this, a) : 2 === arguments.length && x.call(this, a, c);
        g && (this.fillStyle = g);
      };
      CanvasRenderingContext2D.prototype.stroke = function(a, c) {
        var g = null;
        this._globalColorMatrix && (g = this.strokeStyle, this.strokeStyle = f(this, this.strokeStyle, this._globalColorMatrix));
        0 === arguments.length ? F.call(this) : 1 === arguments.length && F.call(this, a);
        g && (this.strokeStyle = g);
      };
      CanvasRenderingContext2D.prototype.fillText = function(a, c, g, d) {
        var b = null;
        this._globalColorMatrix && (b = this.fillStyle, this.fillStyle = f(this, this.fillStyle, this._globalColorMatrix));
        3 === arguments.length ? I.call(this, a, c, g) : 4 === arguments.length ? I.call(this, a, c, g, d) : h.Debug.unexpected();
        b && (this.fillStyle = b);
      };
      CanvasRenderingContext2D.prototype.strokeText = function(a, c, g, d) {
        var b = null;
        this._globalColorMatrix && (b = this.strokeStyle, this.strokeStyle = f(this, this.strokeStyle, this._globalColorMatrix));
        3 === arguments.length ? W.call(this, a, c, g) : 4 === arguments.length ? W.call(this, a, c, g, d) : h.Debug.unexpected();
        b && (this.strokeStyle = b);
      };
    }
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    h.ScreenShot = function() {
      return function(f, b, h) {
        this.dataURL = f;
        this.w = b;
        this.h = h;
      };
    }();
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  var r = function() {
    function f() {
      this._count = 0;
      this._head = this._tail = null;
    }
    Object.defineProperty(f.prototype, "count", {get:function() {
      return this._count;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(f.prototype, "head", {get:function() {
      return this._head;
    }, enumerable:!0, configurable:!0});
    f.prototype._unshift = function(b) {
      0 === this._count ? this._head = this._tail = b : (b.next = this._head, this._head = b.next.previous = b);
      this._count++;
    };
    f.prototype._remove = function(b) {
      b === this._head && b === this._tail ? this._head = this._tail = null : b === this._head ? (this._head = b.next, this._head.previous = null) : b == this._tail ? (this._tail = b.previous, this._tail.next = null) : (b.previous.next = b.next, b.next.previous = b.previous);
      b.previous = b.next = null;
      this._count--;
    };
    f.prototype.use = function(b) {
      this._head !== b && ((b.next || b.previous || this._tail === b) && this._remove(b), this._unshift(b));
    };
    f.prototype.pop = function() {
      if (!this._tail) {
        return null;
      }
      var b = this._tail;
      this._remove(b);
      return b;
    };
    f.prototype.visit = function(b, f) {
      void 0 === f && (f = !0);
      for (var h = f ? this._head : this._tail;h && b(h);) {
        h = f ? h.next : h.previous;
      }
    };
    return f;
  }();
  h.LRUList = r;
  h.getScaleX = function(f) {
    return f.a;
  };
  h.getScaleY = function(f) {
    return f.d;
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
(function(h) {
  (function(r) {
    (function(f) {
      function b(a, g, c, b) {
        var e = 1 - b;
        return a * e * e + 2 * g * e * b + c * b * b;
      }
      function v(a, g, c, b, e) {
        var l = e * e, f = 1 - e, k = f * f;
        return a * f * k + 3 * g * e * k + 3 * c * f * l + b * e * l;
      }
      var p = h.NumberUtilities.clamp, a = h.NumberUtilities.pow2, e = h.NumberUtilities.epsilonEquals;
      f.radianToDegrees = function(a) {
        return 180 * a / Math.PI;
      };
      f.degreesToRadian = function(a) {
        return a * Math.PI / 180;
      };
      f.quadraticBezier = b;
      f.quadraticBezierExtreme = function(a, g, c) {
        var q = (a - g) / (a - 2 * g + c);
        return 0 > q ? a : 1 < q ? c : b(a, g, c, q);
      };
      f.cubicBezier = v;
      f.cubicBezierExtremes = function(a, g, c, b) {
        var e = g - a, l;
        l = 2 * (c - g);
        var f = b - c;
        e + f === l && (f *= 1.0001);
        var k = 2 * e - l, n = l - 2 * e, n = Math.sqrt(n * n - 4 * e * (e - l + f));
        l = 2 * (e - l + f);
        e = (k + n) / l;
        k = (k - n) / l;
        n = [];
        0 <= e && 1 >= e && n.push(v(a, g, c, b, e));
        0 <= k && 1 >= k && n.push(v(a, g, c, b, k));
        return n;
      };
      var n = function() {
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
        a.prototype.inTriangle = function(a, c, d) {
          var b = a.y * d.x - a.x * d.y + (d.y - a.y) * this.x + (a.x - d.x) * this.y, e = a.x * c.y - a.y * c.x + (a.y - c.y) * this.x + (c.x - a.x) * this.y;
          if (0 > b != 0 > e) {
            return !1;
          }
          a = -c.y * d.x + a.y * (d.x - c.x) + a.x * (c.y - d.y) + c.x * d.y;
          0 > a && (b = -b, e = -e, a = -a);
          return 0 < b && 0 < e && b + e < a;
        };
        a.createEmpty = function() {
          return new a(0, 0);
        };
        a.createEmptyPoints = function(g) {
          for (var c = [], b = 0;b < g;b++) {
            c.push(new a(0, 0));
          }
          return c;
        };
        return a;
      }();
      f.Point = n;
      var m = function() {
        function a(g, c, d) {
          this.x = g;
          this.y = c;
          this.z = d;
        }
        a.prototype.setElements = function(a, c, d) {
          this.x = a;
          this.y = c;
          this.z = d;
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
          var c = this.z * a.x - this.x * a.z, d = this.x * a.y - this.y * a.x;
          this.x = this.y * a.z - this.z * a.y;
          this.y = c;
          this.z = d;
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
          for (var c = [], b = 0;b < g;b++) {
            c.push(new a(0, 0, 0));
          }
          return c;
        };
        return a;
      }();
      f.Point3D = m;
      var w = function() {
        function a(g, c, b, e) {
          this.setElements(g, c, b, e);
          a.allocationCount++;
        }
        a.prototype.setElements = function(a, c, d, b) {
          this.x = a;
          this.y = c;
          this.w = d;
          this.h = b;
        };
        a.prototype.set = function(a) {
          this.x = a.x;
          this.y = a.y;
          this.w = a.w;
          this.h = a.h;
        };
        a.prototype.contains = function(a) {
          var c = a.x + a.w, d = a.y + a.h, b = this.x + this.w, e = this.y + this.h;
          return a.x >= this.x && a.x < b && a.y >= this.y && a.y < e && c > this.x && c <= b && d > this.y && d <= e;
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
              var c = this.x, d = this.y;
              this.x > a.x && (c = a.x);
              this.y > a.y && (d = a.y);
              var b = this.x + this.w;
              b < a.x + a.w && (b = a.x + a.w);
              var e = this.y + this.h;
              e < a.y + a.h && (e = a.y + a.h);
              this.x = c;
              this.y = d;
              this.w = b - c;
              this.h = e - d;
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
          var c = Math.max(this.x, a.x), d = Math.max(this.y, a.y), c = Math.min(this.x + this.w, a.x + a.w) - c;
          a = Math.min(this.y + this.h, a.y + a.h) - d;
          return !(0 >= c || 0 >= a);
        };
        a.prototype.intersectsTransformedAABB = function(g, c) {
          var b = a._temporary;
          b.set(g);
          c.transformRectangleAABB(b);
          return this.intersects(b);
        };
        a.prototype.intersectsTranslated = function(a, c, d) {
          if (this.isEmpty() || a.isEmpty()) {
            return !1;
          }
          var b = Math.max(this.x, a.x + c), e = Math.max(this.y, a.y + d);
          c = Math.min(this.x + this.w, a.x + c + a.w) - b;
          a = Math.min(this.y + this.h, a.y + d + a.h) - e;
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
          var g = a.allocate();
          g.setEmpty();
          return g;
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
      f.Rectangle = w;
      var t = function() {
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
          for (var c = new n(Number.MAX_VALUE, Number.MAX_VALUE), d = new n(Number.MIN_VALUE, Number.MIN_VALUE), b = 0;4 > b;b++) {
            var e = a[b].x, l = a[b].y;
            c.x = Math.min(c.x, e);
            c.y = Math.min(c.y, l);
            d.x = Math.max(d.x, e);
            d.y = Math.max(d.y, l);
          }
          return new w(c.x, c.y, d.x - c.x, d.y - c.y);
        };
        a.prototype.intersects = function(a) {
          return this.intersectsOneWay(a) && a.intersectsOneWay(this);
        };
        a.prototype.intersectsOneWay = function(a) {
          for (var c = 0;2 > c;c++) {
            for (var d = 0;4 > d;d++) {
              var b = a.corners[d].dot(this.axes[c]), e, l;
              0 === d ? l = e = b : b < e ? e = b : b > l && (l = b);
            }
            if (e > 1 + this.origins[c] || l < this.origins[c]) {
              return !1;
            }
          }
          return !0;
        };
        return a;
      }();
      f.OBB = t;
      (function(a) {
        a[a.Unknown = 0] = "Unknown";
        a[a.Identity = 1] = "Identity";
        a[a.Translation = 2] = "Translation";
      })(f.MatrixType || (f.MatrixType = {}));
      var l = function() {
        function a(g, c, b, e, l, f) {
          this._data = new Float64Array(6);
          this._type = 0;
          this.setElements(g, c, b, e, l, f);
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
        a.prototype.setElements = function(a, c, b, d, e, l) {
          var f = this._data;
          f[0] = a;
          f[1] = c;
          f[2] = b;
          f[3] = d;
          f[4] = e;
          f[5] = l;
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
        a.prototype.transform = function(a, c, b, d, e, l) {
          var f = this._data, k = f[0], n = f[1], m = f[2], t = f[3], h = f[4], p = f[5];
          f[0] = k * a + m * c;
          f[1] = n * a + t * c;
          f[2] = k * b + m * d;
          f[3] = n * b + t * d;
          f[4] = k * e + m * l + h;
          f[5] = n * e + t * l + p;
          this._type = 0;
          return this;
        };
        a.prototype.transformRectangle = function(a, c) {
          var b = this._data, d = b[0], e = b[1], l = b[2], f = b[3], k = b[4], b = b[5], n = a.x, m = a.y, t = a.w, h = a.h;
          c[0].x = d * n + l * m + k;
          c[0].y = e * n + f * m + b;
          c[1].x = d * (n + t) + l * m + k;
          c[1].y = e * (n + t) + f * m + b;
          c[2].x = d * (n + t) + l * (m + h) + k;
          c[2].y = e * (n + t) + f * (m + h) + b;
          c[3].x = d * n + l * (m + h) + k;
          c[3].y = e * n + f * (m + h) + b;
        };
        a.prototype.isTranslationOnly = function() {
          if (2 === this._type) {
            return !0;
          }
          var a = this._data;
          return 1 === a[0] && 0 === a[1] && 0 === a[2] && 1 === a[3] || e(a[0], 1) && e(a[1], 0) && e(a[2], 0) && e(a[3], 1) ? (this._type = 2, !0) : !1;
        };
        a.prototype.transformRectangleAABB = function(a) {
          var c = this._data;
          if (1 !== this._type) {
            if (2 === this._type) {
              a.x += c[4], a.y += c[5];
            } else {
              var b = c[0], d = c[1], e = c[2], l = c[3], f = c[4], k = c[5], n = a.x, m = a.y, t = a.w, h = a.h, c = b * n + e * m + f, p = d * n + l * m + k, u = b * (n + t) + e * m + f, w = d * (n + t) + l * m + k, r = b * (n + t) + e * (m + h) + f, t = d * (n + t) + l * (m + h) + k, b = b * n + e * (m + h) + f, d = d * n + l * (m + h) + k, l = 0;
              c > u && (l = c, c = u, u = l);
              r > b && (l = r, r = b, b = l);
              a.x = c < r ? c : r;
              a.w = (u > b ? u : b) - a.x;
              p > w && (l = p, p = w, w = l);
              t > d && (l = t, t = d, d = l);
              a.y = p < t ? p : t;
              a.h = (w > d ? w : d) - a.y;
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
          var c = this._data, b = c[0], d = c[1], e = c[2], l = c[3], f = c[4], k = c[5], n = Math.cos(a);
          a = Math.sin(a);
          c[0] = n * b - a * d;
          c[1] = a * b + n * d;
          c[2] = n * e - a * l;
          c[3] = a * e + n * l;
          c[4] = n * f - a * k;
          c[5] = a * f + n * k;
          this._type = 0;
          return this;
        };
        a.prototype.concat = function(a) {
          if (1 === a._type) {
            return this;
          }
          var c = this._data;
          a = a._data;
          var b = c[0] * a[0], d = 0, e = 0, l = c[3] * a[3], f = c[4] * a[0] + a[4], k = c[5] * a[3] + a[5];
          if (0 !== c[1] || 0 !== c[2] || 0 !== a[1] || 0 !== a[2]) {
            b += c[1] * a[2], l += c[2] * a[1], d += c[0] * a[1] + c[1] * a[3], e += c[2] * a[0] + c[3] * a[2], f += c[5] * a[2], k += c[4] * a[1];
          }
          c[0] = b;
          c[1] = d;
          c[2] = e;
          c[3] = l;
          c[4] = f;
          c[5] = k;
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
              var d = 0, e = 0, l = b[3] * c[3], f = b[4] * c[0] + c[4], k = b[5] * c[3] + c[5];
              if (0 !== b[1] || 0 !== b[2] || 0 !== c[1] || 0 !== c[2]) {
                a += b[1] * c[2], l += b[2] * c[1], d += b[0] * c[1] + b[1] * c[3], e += b[2] * c[0] + b[3] * c[2], f += b[5] * c[2], k += b[4] * c[1];
              }
              c[0] = a;
              c[1] = d;
              c[2] = e;
              c[3] = l;
              c[4] = f;
              c[5] = k;
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
              var d = c[1], e = c[2], l = c[4], f = c[5];
              if (0 === d && 0 === e) {
                var k = b[0] = 1 / c[0], c = b[3] = 1 / c[3];
                b[1] = 0;
                b[2] = 0;
                b[4] = -k * l;
                b[5] = -c * f;
              } else {
                var k = c[0], c = c[3], n = k * c - d * e;
                if (0 === n) {
                  a.setIdentity();
                  return;
                }
                n = 1 / n;
                b[0] = c * n;
                d = b[1] = -d * n;
                e = b[2] = -e * n;
                c = b[3] = k * n;
                b[4] = -(b[0] * l + e * f);
                b[5] = -(d * l + c * f);
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
          var g = a.allocate();
          g.setIdentity();
          return g;
        };
        a.prototype.toSVGMatrix = function() {
          var g = this._data, c = a._createSVGMatrix();
          try {
            c.a = g[0], c.b = g[1], c.c = g[2], c.d = g[3], c.e = g[4], c.f = g[5];
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
        a.createSVGMatrixFromArray = function(g) {
          var c = a._createSVGMatrix();
          c.a = g[0];
          c.b = g[1];
          c.c = g[2];
          c.d = g[3];
          c.e = g[4];
          c.f = g[5];
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
      f.Matrix = l;
      l = function() {
        function a(g) {
          this._m = new Float32Array(g);
        }
        a.prototype.asWebGLMatrix = function() {
          return this._m;
        };
        a.createCameraLookAt = function(g, c, b) {
          c = g.clone().sub(c).normalize();
          b = b.clone().cross(c).normalize();
          var e = c.clone().cross(b);
          return new a([b.x, b.y, b.z, 0, e.x, e.y, e.z, 0, c.x, c.y, c.z, 0, g.x, g.y, g.z, 1]);
        };
        a.createLookAt = function(g, c, b) {
          c = g.clone().sub(c).normalize();
          b = b.clone().cross(c).normalize();
          var e = c.clone().cross(b);
          return new a([b.x, e.x, c.x, 0, e.x, e.y, c.y, 0, c.x, e.z, c.z, 0, -b.dot(g), -e.dot(g), -c.dot(g), 1]);
        };
        a.prototype.mul = function(a) {
          a = [a.x, a.y, a.z, 0];
          for (var c = this._m, b = [], d = 0;4 > d;d++) {
            b[d] = 0;
            for (var e = 4 * d, l = 0;4 > l;l++) {
              b[d] += c[e + l] * a[l];
            }
          }
          return new m(b[0], b[1], b[2]);
        };
        a.create2DProjection = function(g, c, b) {
          return new a([2 / g, 0, 0, 0, 0, -2 / c, 0, 0, 0, 0, 2 / b, 0, -1, 1, 0, 1]);
        };
        a.createPerspective = function(g) {
          g = Math.tan(.5 * Math.PI - .5 * g);
          var c = 1 / -4999.9;
          return new a([g / 1, 0, 0, 0, 0, g, 0, 0, 0, 0, 5000.1 * c, -1, 0, 0, 1E3 * c, 0]);
        };
        a.createIdentity = function() {
          return a.createTranslation(0, 0);
        };
        a.createTranslation = function(g, c) {
          return new a([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, g, c, 0, 1]);
        };
        a.createXRotation = function(g) {
          var c = Math.cos(g);
          g = Math.sin(g);
          return new a([1, 0, 0, 0, 0, c, g, 0, 0, -g, c, 0, 0, 0, 0, 1]);
        };
        a.createYRotation = function(g) {
          var c = Math.cos(g);
          g = Math.sin(g);
          return new a([c, 0, -g, 0, 0, 1, 0, 0, g, 0, c, 0, 0, 0, 0, 1]);
        };
        a.createZRotation = function(g) {
          var c = Math.cos(g);
          g = Math.sin(g);
          return new a([c, g, 0, 0, -g, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        };
        a.createScale = function(g, c, b) {
          return new a([g, 0, 0, 0, 0, c, 0, 0, 0, 0, b, 0, 0, 0, 0, 1]);
        };
        a.createMultiply = function(g, c) {
          var b = g._m, e = c._m, l = b[0], f = b[1], k = b[2], n = b[3], m = b[4], t = b[5], h = b[6], p = b[7], u = b[8], w = b[9], r = b[10], v = b[11], z = b[12], A = b[13], C = b[14], b = b[15], y = e[0], G = e[1], B = e[2], E = e[3], J = e[4], K = e[5], L = e[6], M = e[7], N = e[8], O = e[9], P = e[10], Q = e[11], T = e[12], U = e[13], V = e[14], e = e[15];
          return new a([l * y + f * J + k * N + n * T, l * G + f * K + k * O + n * U, l * B + f * L + k * P + n * V, l * E + f * M + k * Q + n * e, m * y + t * J + h * N + p * T, m * G + t * K + h * O + p * U, m * B + t * L + h * P + p * V, m * E + t * M + h * Q + p * e, u * y + w * J + r * N + v * T, u * G + w * K + r * O + v * U, u * B + w * L + r * P + v * V, u * E + w * M + r * Q + v * e, z * y + A * J + C * N + b * T, z * G + A * K + C * O + b * U, z * B + A * L + C * P + b * V, z * E + A * 
          M + C * Q + b * e]);
        };
        a.createInverse = function(g) {
          var c = g._m;
          g = c[0];
          var b = c[1], e = c[2], l = c[3], f = c[4], k = c[5], n = c[6], m = c[7], t = c[8], h = c[9], p = c[10], u = c[11], w = c[12], r = c[13], v = c[14], c = c[15], z = p * c, A = v * u, C = n * c, y = v * m, G = n * u, B = p * m, E = e * c, J = v * l, K = e * u, L = p * l, M = e * m, N = n * l, O = t * r, P = w * h, Q = f * r, T = w * k, U = f * h, V = t * k, Y = g * r, Z = w * b, aa = g * h, ba = t * b, ca = g * k, da = f * b, fa = z * k + y * h + G * r - (A * k + C * h + B * r), ga = A * 
          b + E * h + L * r - (z * b + J * h + K * r), r = C * b + J * k + M * r - (y * b + E * k + N * r), b = B * b + K * k + N * h - (G * b + L * k + M * h), k = 1 / (g * fa + f * ga + t * r + w * b);
          return new a([k * fa, k * ga, k * r, k * b, k * (A * f + C * t + B * w - (z * f + y * t + G * w)), k * (z * g + J * t + K * w - (A * g + E * t + L * w)), k * (y * g + E * f + N * w - (C * g + J * f + M * w)), k * (G * g + L * f + M * t - (B * g + K * f + N * t)), k * (O * m + T * u + U * c - (P * m + Q * u + V * c)), k * (P * l + Y * u + ba * c - (O * l + Z * u + aa * c)), k * (Q * l + Z * m + ca * c - (T * l + Y * m + da * c)), k * (V * l + aa * m + da * u - (U * l + ba * m + ca * u)), 
          k * (Q * p + V * v + P * n - (U * v + O * n + T * p)), k * (aa * v + O * e + Z * p - (Y * p + ba * v + P * e)), k * (Y * n + da * v + T * e - (ca * v + Q * e + Z * n)), k * (ca * p + U * e + ba * n - (aa * n + da * p + V * e))]);
        };
        return a;
      }();
      f.Matrix3D = l;
      l = function() {
        function a(b, c, e) {
          void 0 === e && (e = 7);
          var l = this.size = 1 << e;
          this.sizeInBits = e;
          this.w = b;
          this.h = c;
          this.c = Math.ceil(b / l);
          this.r = Math.ceil(c / l);
          this.grid = [];
          for (b = 0;b < this.r;b++) {
            for (this.grid.push([]), c = 0;c < this.c;c++) {
              this.grid[b][c] = new a.Cell(new w(c * l, b * l, l, l));
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
              for (var e = Math.min(this.c, Math.ceil((a.x + a.w) / this.size)) - c, l = Math.min(this.r, Math.ceil((a.y + a.h) / this.size)) - b, f = 0;f < e;f++) {
                for (var k = 0;k < l;k++) {
                  d = this.grid[b + k][c + f], d = d.region.clone(), d.intersect(a), d.isEmpty() || this.addDirtyRectangle(d);
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
                var l = this.grid[d][e];
                a.beginPath();
                b(l.region);
                a.closePath();
                a.stroke();
              }
            }
          }
          a.strokeStyle = "#E0F8D8";
          for (d = 0;d < this.r;d++) {
            for (e = 0;e < this.c;e++) {
              l = this.grid[d][e], a.beginPath(), b(l.bounds), a.closePath(), a.stroke();
            }
          }
        };
        a.tmpRectangle = w.createEmpty();
        return a;
      }();
      f.DirtyRegion = l;
      (function(a) {
        var b = function() {
          function a(c) {
            this.region = c;
            this.bounds = w.createEmpty();
          }
          a.prototype.clear = function() {
            this.bounds.setEmpty();
          };
          return a;
        }();
        a.Cell = b;
      })(l = f.DirtyRegion || (f.DirtyRegion = {}));
      var u = function() {
        function a(b, c, d, e, l, f) {
          this.index = b;
          this.x = c;
          this.y = d;
          this.scale = f;
          this.bounds = new w(c * e, d * l, e, l);
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
      f.Tile = u;
      var k = function() {
        function a(b, c, d, e, l) {
          this.tileW = d;
          this.tileH = e;
          this.scale = l;
          this.w = b;
          this.h = c;
          this.rows = Math.ceil(c / e);
          this.columns = Math.ceil(b / d);
          this.tiles = [];
          for (c = b = 0;c < this.rows;c++) {
            for (var f = 0;f < this.columns;f++) {
              this.tiles.push(new u(b++, f, c, d, e, l));
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
        a.prototype.getFewTiles = function(b, c, e) {
          void 0 === e && (e = !0);
          if (c.isTranslationOnly() && 1 === this.tiles.length) {
            return this.tiles[0].bounds.intersectsTranslated(b, c.tx, c.ty) ? [this.tiles[0]] : [];
          }
          c.transformRectangle(b, a._points);
          var l;
          b = new w(0, 0, this.w, this.h);
          e && (l = new t(a._points));
          b.intersect(t.getBounds(a._points));
          if (b.isEmpty()) {
            return [];
          }
          var f = b.x / this.tileW | 0;
          c = b.y / this.tileH | 0;
          var k = Math.ceil((b.x + b.w) / this.tileW) | 0, n = Math.ceil((b.y + b.h) / this.tileH) | 0, f = p(f, 0, this.columns), k = p(k, 0, this.columns);
          c = p(c, 0, this.rows);
          for (var n = p(n, 0, this.rows), m = [];f < k;f++) {
            for (var h = c;h < n;h++) {
              var u = this.tiles[h * this.columns + f];
              u.bounds.intersects(b) && (e ? u.getOBB().intersects(l) : 1) && m.push(u);
            }
          }
          return m;
        };
        a.prototype.getManyTiles = function(b, c) {
          function e(a, c, b) {
            return (a - c.x) * (b.y - c.y) / (b.x - c.x) + c.y;
          }
          function l(a, c, b, g, d) {
            if (!(0 > b || b >= c.columns)) {
              for (g = p(g, 0, c.rows), d = p(d + 1, 0, c.rows);g < d;g++) {
                a.push(c.tiles[g * c.columns + b]);
              }
            }
          }
          var f = a._points;
          c.transformRectangle(b, f);
          for (var k = f[0].x < f[1].x ? 0 : 1, n = f[2].x < f[3].x ? 2 : 3, n = f[k].x < f[n].x ? k : n, k = [], m = 0;5 > m;m++, n++) {
            k.push(f[n % 4]);
          }
          (k[1].x - k[0].x) * (k[3].y - k[0].y) < (k[1].y - k[0].y) * (k[3].x - k[0].x) && (f = k[1], k[1] = k[3], k[3] = f);
          var f = [], t, h, n = Math.floor(k[0].x / this.tileW), m = (n + 1) * this.tileW;
          if (k[2].x < m) {
            t = Math.min(k[0].y, k[1].y, k[2].y, k[3].y);
            h = Math.max(k[0].y, k[1].y, k[2].y, k[3].y);
            var u = Math.floor(t / this.tileH), w = Math.floor(h / this.tileH);
            l(f, this, n, u, w);
            return f;
          }
          var r = 0, v = 4, H = !1;
          if (k[0].x === k[1].x || k[0].x === k[3].x) {
            k[0].x === k[1].x ? (H = !0, r++) : v--, t = e(m, k[r], k[r + 1]), h = e(m, k[v], k[v - 1]), u = Math.floor(k[r].y / this.tileH), w = Math.floor(k[v].y / this.tileH), l(f, this, n, u, w), n++;
          }
          do {
            var D, z, A, C;
            k[r + 1].x < m ? (D = k[r + 1].y, A = !0) : (D = e(m, k[r], k[r + 1]), A = !1);
            k[v - 1].x < m ? (z = k[v - 1].y, C = !0) : (z = e(m, k[v], k[v - 1]), C = !1);
            u = Math.floor((k[r].y < k[r + 1].y ? t : D) / this.tileH);
            w = Math.floor((k[v].y > k[v - 1].y ? h : z) / this.tileH);
            l(f, this, n, u, w);
            if (A && H) {
              break;
            }
            A ? (H = !0, r++, t = e(m, k[r], k[r + 1])) : t = D;
            C ? (v--, h = e(m, k[v], k[v - 1])) : h = z;
            n++;
            m = (n + 1) * this.tileW;
          } while (r < v);
          return f;
        };
        a._points = n.createEmptyPoints(4);
        return a;
      }();
      f.TileCache = k;
      l = function() {
        function b(a, c, d) {
          this._cacheLevels = [];
          this._source = a;
          this._tileSize = c;
          this._minUntiledSize = d;
        }
        b.prototype._getTilesAtScale = function(b, c, d) {
          var e = Math.max(c.getAbsoluteScaleX(), c.getAbsoluteScaleY()), l = 0;
          1 !== e && (l = p(Math.round(Math.log(1 / e) / Math.LN2), -5, 3));
          e = a(l);
          if (this._source.hasFlags(1048576)) {
            for (;;) {
              e = a(l);
              if (d.contains(this._source.getBounds().getAbsoluteBounds().clone().scale(e, e))) {
                break;
              }
              l--;
            }
          }
          this._source.hasFlags(2097152) || (l = p(l, -5, 0));
          e = a(l);
          d = 5 + l;
          l = this._cacheLevels[d];
          if (!l) {
            var l = this._source.getBounds().getAbsoluteBounds().clone().scale(e, e), f, n;
            this._source.hasFlags(1048576) || !this._source.hasFlags(4194304) || Math.max(l.w, l.h) <= this._minUntiledSize ? (f = l.w, n = l.h) : f = n = this._tileSize;
            l = this._cacheLevels[d] = new k(l.w, l.h, f, n, e);
          }
          return l.getTiles(b, c.scaleClone(e, e));
        };
        b.prototype.fetchTiles = function(a, c, b, d) {
          var e = new w(0, 0, b.canvas.width, b.canvas.height);
          a = this._getTilesAtScale(a, c, e);
          var l;
          c = this._source;
          for (var f = 0;f < a.length;f++) {
            var k = a[f];
            k.cachedSurfaceRegion && k.cachedSurfaceRegion.surface && !c.hasFlags(1048592) || (l || (l = []), l.push(k));
          }
          l && this._cacheTiles(b, l, d, e);
          c.removeFlags(16);
          return a;
        };
        b.prototype._getTileBounds = function(a) {
          for (var c = w.createEmpty(), b = 0;b < a.length;b++) {
            c.union(a[b].bounds);
          }
          return c;
        };
        b.prototype._cacheTiles = function(a, c, b, d, e) {
          void 0 === e && (e = 4);
          var l = this._getTileBounds(c);
          a.save();
          a.setTransform(1, 0, 0, 1, 0, 0);
          a.clearRect(0, 0, d.w, d.h);
          a.translate(-l.x, -l.y);
          a.scale(c[0].scale, c[0].scale);
          var f = this._source.getBounds();
          a.translate(-f.x, -f.y);
          2 <= r.traceLevel && r.writer && r.writer.writeLn("Rendering Tiles: " + l);
          this._source.render(a, 0);
          a.restore();
          for (var f = null, k = 0;k < c.length;k++) {
            var n = c[k], m = n.bounds.clone();
            m.x -= l.x;
            m.y -= l.y;
            d.contains(m) || (f || (f = []), f.push(n));
            n.cachedSurfaceRegion = b(n.cachedSurfaceRegion, a, m);
          }
          f && (2 <= f.length ? (c = f.slice(0, f.length / 2 | 0), l = f.slice(c.length), this._cacheTiles(a, c, b, d, e - 1), this._cacheTiles(a, l, b, d, e - 1)) : this._cacheTiles(a, f, b, d, e - 1));
        };
        return b;
      }();
      f.RenderableTileCache = l;
    })(r.Geometry || (r.Geometry = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(h, r) {
  function f() {
    this.constructor = h;
  }
  for (var b in r) {
    r.hasOwnProperty(b) && (h[b] = r[b]);
  }
  f.prototype = r.prototype;
  h.prototype = new f;
};
(function(h) {
  (function(r) {
    var f = h.IntegerUtilities.roundToMultipleOfPowerOfTwo, b = r.Geometry.Rectangle;
    (function(h) {
      var p = function(a) {
        function b() {
          a.apply(this, arguments);
        }
        __extends(b, a);
        return b;
      }(r.Geometry.Rectangle);
      h.Region = p;
      var a = function() {
        function a(b, l) {
          this._root = new e(0, 0, b | 0, l | 0, !1);
        }
        a.prototype.allocate = function(a, b) {
          a = Math.ceil(a);
          b = Math.ceil(b);
          var d = this._root.insert(a, b);
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
      h.CompactAllocator = a;
      var e = function(b) {
        function e(a, d, g, c, q) {
          b.call(this, a, d, g, c);
          this._children = null;
          this._horizontal = q;
          this.allocated = !1;
        }
        __extends(e, b);
        e.prototype.clear = function() {
          this._children = null;
          this.allocated = !1;
        };
        e.prototype.insert = function(a, b) {
          return this._insert(a, b, 0);
        };
        e.prototype._insert = function(b, d, g) {
          if (!(g > a.MAX_DEPTH || this.allocated || this.w < b || this.h < d)) {
            if (this._children) {
              var c;
              if ((c = this._children[0]._insert(b, d, g + 1)) || (c = this._children[1]._insert(b, d, g + 1))) {
                return c;
              }
            } else {
              return c = !this._horizontal, a.RANDOM_ORIENTATION && (c = .5 <= Math.random()), this._children = this._horizontal ? [new e(this.x, this.y, this.w, d, !1), new e(this.x, this.y + d, this.w, this.h - d, c)] : [new e(this.x, this.y, b, this.h, !0), new e(this.x + b, this.y, this.w - b, this.h, c)], c = this._children[0], c.w === b && c.h === d ? (c.allocated = !0, c) : this._insert(b, d, g + 1);
            }
          }
        };
        return e;
      }(h.Region), n = function() {
        function a(b, e, d, g) {
          this._columns = b / d | 0;
          this._rows = e / g | 0;
          this._sizeW = d;
          this._sizeH = g;
          this._freeList = [];
          this._index = 0;
          this._total = this._columns * this._rows;
        }
        a.prototype.allocate = function(a, b) {
          a = Math.ceil(a);
          b = Math.ceil(b);
          var d = this._sizeW, g = this._sizeH;
          if (a > d || b > g) {
            return null;
          }
          var c = this._freeList, e = this._index;
          return 0 < c.length ? (d = c.pop(), d.w = a, d.h = b, d.allocated = !0, d) : e < this._total ? (c = e / this._columns | 0, d = new m((e - c * this._columns) * d, c * g, a, b), d.index = e, d.allocator = this, d.allocated = !0, this._index++, d) : null;
        };
        a.prototype.free = function(a) {
          a.allocated = !1;
          this._freeList.push(a);
        };
        return a;
      }();
      h.GridAllocator = n;
      var m = function(a) {
        function b(e, d, g, c) {
          a.call(this, e, d, g, c);
          this.index = -1;
        }
        __extends(b, a);
        return b;
      }(h.Region);
      h.GridCell = m;
      var w = function() {
        return function(a, b, e) {
          this.size = a;
          this.region = b;
          this.allocator = e;
        };
      }(), t = function(a) {
        function b(e, d, g, c, q) {
          a.call(this, e, d, g, c);
          this.region = q;
        }
        __extends(b, a);
        return b;
      }(h.Region);
      h.BucketCell = t;
      p = function() {
        function a(b, e) {
          this._buckets = [];
          this._w = b | 0;
          this._h = e | 0;
          this._filled = 0;
        }
        a.prototype.allocate = function(a, e) {
          a = Math.ceil(a);
          e = Math.ceil(e);
          var d = Math.max(a, e);
          if (a > this._w || e > this._h) {
            return null;
          }
          var g = null, c, q = this._buckets;
          do {
            for (var l = 0;l < q.length && !(q[l].size >= d && (c = q[l], g = c.allocator.allocate(a, e)));l++) {
            }
            if (!g) {
              var m = this._h - this._filled;
              if (m < e) {
                return null;
              }
              var l = f(d, 8), h = 2 * l;
              h > m && (h = m);
              if (h < l) {
                return null;
              }
              m = new b(0, this._filled, this._w, h);
              this._buckets.push(new w(l, m, new n(m.w, m.h, l, l)));
              this._filled += h;
            }
          } while (!g);
          return new t(c.region.x + g.x, c.region.y + g.y, g.w, g.h, g);
        };
        a.prototype.free = function(a) {
          a.region.allocator.free(a.region);
        };
        return a;
      }();
      h.BucketAllocator = p;
    })(r.RegionAllocator || (r.RegionAllocator = {}));
    (function(b) {
      var f = function() {
        function a(a) {
          this._createSurface = a;
          this._surfaces = [];
        }
        Object.defineProperty(a.prototype, "surfaces", {get:function() {
          return this._surfaces;
        }, enumerable:!0, configurable:!0});
        a.prototype._createNewSurface = function(a, b) {
          var f = this._createSurface(a, b);
          this._surfaces.push(f);
          return f;
        };
        a.prototype.addSurface = function(a) {
          this._surfaces.push(a);
        };
        a.prototype.allocate = function(a, b, f) {
          for (var h = 0;h < this._surfaces.length;h++) {
            var t = this._surfaces[h];
            if (t !== f && (t = t.allocate(a, b))) {
              return t;
            }
          }
          return this._createNewSurface(a, b).allocate(a, b);
        };
        a.prototype.free = function(a) {
        };
        return a;
      }();
      b.SimpleAllocator = f;
    })(r.SurfaceRegionAllocator || (r.SurfaceRegionAllocator = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(r) {
    var f = r.Geometry.Rectangle, b = r.Geometry.Matrix, v = r.Geometry.DirtyRegion;
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
    var p = r.BlendMode;
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
    var e = r.NodeType;
    (function(a) {
      a[a.None = 0] = "None";
      a[a.OnStageBoundsChanged = 1] = "OnStageBoundsChanged";
      a[a.RemovedFromStage = 2] = "RemovedFromStage";
    })(r.NodeEventType || (r.NodeEventType = {}));
    var n = function() {
      function a() {
      }
      a.prototype.visitNode = function(a, b) {
      };
      a.prototype.visitShape = function(a, b) {
        this.visitNode(a, b);
      };
      a.prototype.visitGroup = function(a, b) {
        this.visitNode(a, b);
        for (var d = a.getChildren(), g = 0;g < d.length;g++) {
          d[g].visit(this, b);
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
    r.NodeVisitor = n;
    var m = function() {
      return function() {
      };
    }();
    r.State = m;
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
    }(m);
    r.PreRenderState = w;
    var t = function(a) {
      function c() {
        a.apply(this, arguments);
        this.isDirty = !0;
      }
      __extends(c, a);
      c.prototype.start = function(a, c) {
        this._dirtyRegion = c;
        var b = new w;
        b.matrix.setIdentity();
        a.visit(this, b);
        b.free();
      };
      c.prototype.visitGroup = function(a, c) {
        var b = a.getChildren();
        this.visitNode(a, c);
        for (var d = 0;d < b.length;d++) {
          var g = b[d], e = c.transform(g.getTransform());
          g.visit(this, e);
          e.free();
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
    m = function(a) {
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
    }(n);
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
          for (var b = this._eventListeners, d = 0;d < b.length;d++) {
            var g = b[d];
            g.type === a && g.listener(this, a);
          }
        }
      };
      b.prototype.addEventListener = function(a, b) {
        this._eventListeners || (this._eventListeners = []);
        this._eventListeners.push({type:a, listener:b});
      };
      b.prototype.removeEventListener = function(a, b) {
        for (var d = this._eventListeners, g = 0;g < d.length;g++) {
          var e = d[g];
          if (e.type === a && e.listener === b) {
            d.splice(g, 1);
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
        (this._bounds || (this._bounds = f.createEmpty())).set(a);
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
        var e = b._path;
        for (e.length = 0;a && a !== d;) {
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
        null === this._transform && (this._transform = new k(this));
        return this._transform;
      };
      b.prototype.getLayer = function() {
        null === this._layer && (this._layer = new d(this));
        return this._layer;
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
        var b = e[this._type] + " " + this._id;
        a && (b += " " + this._bounds.toString());
        return b;
      };
      b._path = [];
      b._nextId = 0;
      return b;
    }();
    r.Node = l;
    var u = function(b) {
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
        var c = this._bounds || (this._bounds = f.createEmpty());
        if (this.hasFlags(256)) {
          c.setEmpty();
          for (var b = this._children, d = f.allocate(), g = 0;g < b.length;g++) {
            var e = b[g];
            d.set(e.getBounds());
            e.getTransformMatrix().transformRectangleAABB(d);
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
    var k = function() {
      function d(a) {
        this._node = a;
        this._matrix = b.createIdentity();
        this._colorMatrix = r.ColorMatrix.createIdentity();
        this._concatenatedMatrix = b.createIdentity();
        this._invertedConcatenatedMatrix = b.createIdentity();
        this._concatenatedColorMatrix = r.ColorMatrix.createIdentity();
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
        null === this._colorMatrix && (this._colorMatrix = r.ColorMatrix.createIdentity());
        return a ? this._colorMatrix.clone() : this._colorMatrix;
      };
      d.prototype.getConcatenatedMatrix = function(a) {
        void 0 === a && (a = !1);
        if (this._node.hasFlags(512)) {
          for (var d = this._node._findClosestAncestor(), g = l._getAncestors(this._node, d), e = d ? d.getTransform()._concatenatedMatrix.clone() : b.createIdentity(), f = g.length - 1;0 <= f;f--) {
            var d = g[f], k = d.getTransform();
            e.preMultiply(k._matrix);
            k._concatenatedMatrix.set(e);
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
    r.Transform = k;
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
        this._mask && this._mask !== a && this._mask.removeFlags(4);
        (this._mask = a) && this._mask.setFlags(4);
      }, enumerable:!0, configurable:!0});
      a.prototype.toString = function() {
        return p[this._blendMode];
      };
      return a;
    }();
    r.Layer = d;
    m = function(a) {
      function c(c) {
        a.call(this);
        this._source = c;
        this._type = 3;
        this.ratio = 0;
      }
      __extends(c, a);
      c.prototype.getBounds = function(a) {
        void 0 === a && (a = !1);
        var c = this._bounds || (this._bounds = f.createEmpty());
        this.hasFlags(256) && (c.set(this._source.getBounds()), this.removeFlags(256));
        return a ? c.clone() : c;
      };
      Object.defineProperty(c.prototype, "source", {get:function() {
        return this._source;
      }, enumerable:!0, configurable:!0});
      c.prototype._propagateFlagsDown = function(a) {
        this.setFlags(a);
      };
      c.prototype.getChildren = function(a) {
        return [this._source];
      };
      return c;
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
    n = function(a) {
      function c(c, b, d) {
        a.call(this);
        this._container = c;
        this._stage = b;
        this._options = d;
        this._viewport = f.createSquare();
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
      function c(b, d, e) {
        void 0 === e && (e = !1);
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
        this.setBounds(new f(0, 0, b, d));
        e ? (this._dirtyRegion = new v(b, d), this._dirtyRegion.addDirtyRectangle(new f(0, 0, b, d))) : this._dirtyRegion = null;
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
          var a = this.getBounds(), d = this._content.getBounds(), g = a.w / d.w, e = a.h / d.h;
          switch(this._scaleMode) {
            case 2:
              g = e = Math.max(g, e);
              break;
            case 4:
              g = e = 1;
              break;
            case 1:
              break;
            default:
              g = e = Math.min(g, e);
          }
          var l;
          l = this._align & 4 ? 0 : this._align & 8 ? a.w - d.w * g : (a.w - d.w * g) / 2;
          a = this._align & 1 ? 0 : this._align & 2 ? a.h - d.h * e : (a.h - d.h * e) / 2;
          this._content.getTransform().setMatrix(new b(g, 0, 0, e, l, a));
        }
      };
      c.DEFAULT_SCALE = 4;
      c.DEFAULT_ALIGN = 5;
      return c;
    }(u);
    r.Stage = n;
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(r) {
    function f(a, b, c) {
      return a + (b - a) * c;
    }
    function b(a, b, c) {
      return f(a >> 24 & 255, b >> 24 & 255, c) << 24 | f(a >> 16 & 255, b >> 16 & 255, c) << 16 | f(a >> 8 & 255, b >> 8 & 255, c) << 8 | f(a & 255, b & 255, c);
    }
    var v = r.Geometry.Point, p = r.Geometry.Rectangle, a = r.Geometry.Matrix, e = h.ArrayUtilities.indexOf, n = function(a) {
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
        e(this._parents, a);
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
        a = new r.Shape(this);
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
        e(this._invalidateEventListeners, a);
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
      b.prototype.render = function(a, b, d, g, e) {
      };
      return b;
    }(r.Node);
    r.Renderable = n;
    var m = function(a) {
      function b(c, g) {
        a.call(this);
        this.setBounds(c);
        this.render = g;
      }
      __extends(b, a);
      return b;
    }(n);
    r.CustomRenderable = m;
    (function(a) {
      a[a.Idle = 1] = "Idle";
      a[a.Playing = 2] = "Playing";
      a[a.Paused = 3] = "Paused";
      a[a.Ended = 4] = "Ended";
    })(r.RenderableVideoState || (r.RenderableVideoState = {}));
    m = function(a) {
      function b(c, e) {
        a.call(this);
        this._flags = 1048592;
        this._lastPausedTime = this._lastTimeInvalidated = 0;
        this._pauseHappening = this._seekHappening = !1;
        this._isDOMElement = !0;
        this.setBounds(new p(0, 0, 1, 1));
        this._assetId = c;
        this._eventSerializer = e;
        var l = document.createElement("video"), f = this._handleVideoEvent.bind(this);
        l.preload = "metadata";
        l.addEventListener("play", f);
        l.addEventListener("pause", f);
        l.addEventListener("ended", f);
        l.addEventListener("loadeddata", f);
        l.addEventListener("progress", f);
        l.addEventListener("suspend", f);
        l.addEventListener("loadedmetadata", f);
        l.addEventListener("error", f);
        l.addEventListener("seeking", f);
        l.addEventListener("seeked", f);
        l.addEventListener("canplay", f);
        l.style.position = "absolute";
        this._video = l;
        this._videoEventHandler = f;
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
              for (var g = 0;g < d.buffered.length;g++) {
                e = Math.max(e, d.buffered.end(g));
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
          var e = a[d];
          e.willRender() ? (e._video.parentElement || e.invalidate(), e._video.style.zIndex = e.parents[0].depth + "") : e._video.parentElement && e._dispatchEvent(2);
          a[d].checkForUpdate();
        }
      };
      b.prototype.render = function(a, b, d) {
        (b = this._video) && 0 < b.videoWidth && a.drawImage(b, 0, 0, b.videoWidth, b.videoHeight, 0, 0, this._bounds.w, this._bounds.h);
      };
      b._renderableVideos = [];
      return b;
    }(n);
    r.RenderableVideo = m;
    m = function(a) {
      function b(c, e) {
        a.call(this);
        this._flags = 1048592;
        this.properties = {};
        this.setBounds(e);
        c instanceof HTMLCanvasElement ? this._initializeSourceCanvas(c) : this._sourceImage = c;
      }
      __extends(b, a);
      b.FromDataBuffer = function(a, d, e) {
        var l = document.createElement("canvas");
        l.width = e.w;
        l.height = e.h;
        e = new b(l, e);
        e.updateFromDataBuffer(a, d);
        return e;
      };
      b.FromNode = function(a, d, e, l, f) {
        var k = document.createElement("canvas"), n = a.getBounds();
        k.width = n.w;
        k.height = n.h;
        k = new b(k, n);
        k.drawNode(a, d, e, l, f);
        return k;
      };
      b.FromImage = function(a) {
        return new b(a, new p(0, 0, -1, -1));
      };
      b.prototype.updateFromDataBuffer = function(a, b) {
        if (r.imageUpdateOption.value) {
          var d = b.buffer;
          if (4 !== a && 5 !== a && 6 !== a) {
            var e = this._bounds, g = this._imageData;
            g && g.width === e.w && g.height === e.h || (g = this._imageData = this._context.createImageData(e.w, e.h));
            r.imageConvertOption.value && (d = new Int32Array(d), e = new Int32Array(g.data.buffer), h.ColorUtilities.convertImage(a, 3, d, e));
            this._ensureSourceCanvas();
            this._context.putImageData(g, 0, 0);
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
      b.prototype.drawNode = function(a, b, d, e, g) {
        d = r.Canvas2D;
        e = this.getBounds();
        (new d.Canvas2DRenderer(this._canvas, null)).renderNode(a, g || e, b);
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
    }(n);
    r.RenderableBitmap = m;
    (function(a) {
      a[a.Fill = 0] = "Fill";
      a[a.Stroke = 1] = "Stroke";
      a[a.StrokeFill = 2] = "StrokeFill";
    })(r.PathType || (r.PathType = {}));
    var w = function() {
      return function(a, b, c, e) {
        this.type = a;
        this.style = b;
        this.smoothImage = c;
        this.strokeProperties = e;
        this.path = new Path2D;
      };
    }();
    r.StyledPath = w;
    var t = function() {
      return function(a, b, c, e, l) {
        this.thickness = a;
        this.scaleMode = b;
        this.capsStyle = c;
        this.jointsStyle = e;
        this.miterLimit = l;
      };
    }();
    r.StrokeProperties = t;
    var l = function(b) {
      function e(a, g, l, f) {
        b.call(this);
        this._flags = 6291472;
        this.properties = {};
        this.setBounds(f);
        this._id = a;
        this._pathData = g;
        this._textures = l;
        l.length && this.setFlags(1048576);
      }
      __extends(e, b);
      e.prototype.update = function(a, b, d) {
        this.setBounds(d);
        this._pathData = a;
        this._paths = null;
        this._textures = b;
        this.setFlags(1048576);
        this.invalidate();
      };
      e.prototype.render = function(a, b, d, e, g) {
        void 0 === e && (e = null);
        void 0 === g && (g = !1);
        a.fillStyle = a.strokeStyle = "transparent";
        b = this._deserializePaths(this._pathData, a, b);
        for (d = 0;d < b.length;d++) {
          var l = b[d];
          a.mozImageSmoothingEnabled = a.msImageSmoothingEnabled = a.imageSmoothingEnabled = l.smoothImage;
          if (0 === l.type) {
            e ? e.addPath(l.path, a.currentTransform) : (a.fillStyle = g ? "#000000" : l.style, a.fill(l.path, "evenodd"), a.fillStyle = "transparent");
          } else {
            if (!e && !g) {
              a.strokeStyle = l.style;
              var f = 1;
              l.strokeProperties && (f = l.strokeProperties.scaleMode, a.lineWidth = l.strokeProperties.thickness, a.lineCap = l.strokeProperties.capsStyle, a.lineJoin = l.strokeProperties.jointsStyle, a.miterLimit = l.strokeProperties.miterLimit);
              var k = a.lineWidth;
              (k = 1 === k || 3 === k) && a.translate(.5, .5);
              a.flashStroke(l.path, f);
              k && a.translate(-.5, -.5);
              a.strokeStyle = "transparent";
            }
          }
        }
      };
      e.prototype._deserializePaths = function(a, b, d) {
        if (this._paths) {
          return this._paths;
        }
        d = this._paths = [];
        var l = null, f = null, k = 0, n = 0, m, p, u = !1, w = 0, r = 0, v = a.commands, H = a.coordinates, D = a.styles, z = D.position = 0;
        a = a.commandsPosition;
        for (var A = 0;A < a;A++) {
          switch(v[A]) {
            case 9:
              u && l && (l.lineTo(w, r), f && f.lineTo(w, r));
              u = !0;
              k = w = H[z++] / 20;
              n = r = H[z++] / 20;
              l && l.moveTo(k, n);
              f && f.moveTo(k, n);
              break;
            case 10:
              k = H[z++] / 20;
              n = H[z++] / 20;
              l && l.lineTo(k, n);
              f && f.lineTo(k, n);
              break;
            case 11:
              m = H[z++] / 20;
              p = H[z++] / 20;
              k = H[z++] / 20;
              n = H[z++] / 20;
              l && l.quadraticCurveTo(m, p, k, n);
              f && f.quadraticCurveTo(m, p, k, n);
              break;
            case 12:
              m = H[z++] / 20;
              p = H[z++] / 20;
              var C = H[z++] / 20, y = H[z++] / 20, k = H[z++] / 20, n = H[z++] / 20;
              l && l.bezierCurveTo(m, p, C, y, k, n);
              f && f.bezierCurveTo(m, p, C, y, k, n);
              break;
            case 1:
              l = this._createPath(0, h.ColorUtilities.rgbaToCSSStyle(D.readUnsignedInt()), !1, null, k, n);
              break;
            case 3:
              m = this._readBitmap(D, b);
              l = this._createPath(0, m.style, m.smoothImage, null, k, n);
              break;
            case 2:
              l = this._createPath(0, this._readGradient(D, b), !1, null, k, n);
              break;
            case 4:
              l = null;
              break;
            case 5:
              f = h.ColorUtilities.rgbaToCSSStyle(D.readUnsignedInt());
              D.position += 1;
              m = D.readByte();
              p = e.LINE_CAPS_STYLES[D.readByte()];
              C = e.LINE_JOINTS_STYLES[D.readByte()];
              m = new t(H[z++] / 20, m, p, C, D.readByte());
              f = this._createPath(1, f, !1, m, k, n);
              break;
            case 6:
              f = this._createPath(2, this._readGradient(D, b), !1, null, k, n);
              break;
            case 7:
              m = this._readBitmap(D, b);
              f = this._createPath(2, m.style, m.smoothImage, null, k, n);
              break;
            case 8:
              f = null;
          }
        }
        u && l && (l.lineTo(w, r), f && f.lineTo(w, r));
        this._pathData = null;
        return d;
      };
      e.prototype._createPath = function(a, b, d, e, g, l) {
        a = new w(a, b, d, e);
        this._paths.push(a);
        a.path.moveTo(g, l);
        return a.path;
      };
      e.prototype._readMatrix = function(c) {
        return new a(c.readFloat(), c.readFloat(), c.readFloat(), c.readFloat(), c.readFloat(), c.readFloat());
      };
      e.prototype._readGradient = function(a, b) {
        var d = a.readUnsignedByte(), e = 2 * a.readShort() / 255, g = this._readMatrix(a), d = 16 === d ? b.createLinearGradient(-1, 0, 1, 0) : b.createRadialGradient(e, 0, 0, 0, 0, 1);
        d.setTransform && d.setTransform(g.toSVGMatrix());
        g = a.readUnsignedByte();
        for (e = 0;e < g;e++) {
          var l = a.readUnsignedByte() / 255, f = h.ColorUtilities.rgbaToCSSStyle(a.readUnsignedInt());
          d.addColorStop(l, f);
        }
        a.position += 2;
        return d;
      };
      e.prototype._readBitmap = function(a, b) {
        var d = a.readUnsignedInt(), e = this._readMatrix(a), g = a.readBoolean() ? "repeat" : "no-repeat", l = a.readBoolean();
        (d = this._textures[d]) ? (g = b.createPattern(d.renderSource, g), g.setTransform(e.toSVGMatrix())) : g = null;
        return {style:g, smoothImage:l};
      };
      e.prototype._renderFallback = function(a) {
        this.fillStyle || (this.fillStyle = h.ColorStyle.randomStyle());
        var b = this._bounds;
        a.save();
        a.beginPath();
        a.lineWidth = 2;
        a.fillStyle = this.fillStyle;
        a.fillRect(b.x, b.y, b.w, b.h);
        a.restore();
      };
      e.LINE_CAPS_STYLES = ["round", "butt", "square"];
      e.LINE_JOINTS_STYLES = ["round", "bevel", "miter"];
      return e;
    }(n);
    r.RenderableShape = l;
    m = function(d) {
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
        var g = this._morphPaths[e] = [], k = null, n = null, m = 0, p = 0, u, w, r = !1, v = 0, R = 0, H = a.commands, D = a.coordinates, z = a.morphCoordinates, A = a.styles, C = a.morphStyles;
        A.position = 0;
        var y = C.position = 0;
        a = a.commandsPosition;
        for (var G = 0;G < a;G++) {
          switch(H[G]) {
            case 9:
              r && k && (k.lineTo(v, R), n && n.lineTo(v, R));
              r = !0;
              m = v = f(D[y], z[y++], e) / 20;
              p = R = f(D[y], z[y++], e) / 20;
              k && k.moveTo(m, p);
              n && n.moveTo(m, p);
              break;
            case 10:
              m = f(D[y], z[y++], e) / 20;
              p = f(D[y], z[y++], e) / 20;
              k && k.lineTo(m, p);
              n && n.lineTo(m, p);
              break;
            case 11:
              u = f(D[y], z[y++], e) / 20;
              w = f(D[y], z[y++], e) / 20;
              m = f(D[y], z[y++], e) / 20;
              p = f(D[y], z[y++], e) / 20;
              k && k.quadraticCurveTo(u, w, m, p);
              n && n.quadraticCurveTo(u, w, m, p);
              break;
            case 12:
              u = f(D[y], z[y++], e) / 20;
              w = f(D[y], z[y++], e) / 20;
              var B = f(D[y], z[y++], e) / 20, E = f(D[y], z[y++], e) / 20, m = f(D[y], z[y++], e) / 20, p = f(D[y], z[y++], e) / 20;
              k && k.bezierCurveTo(u, w, B, E, m, p);
              n && n.bezierCurveTo(u, w, B, E, m, p);
              break;
            case 1:
              k = this._createMorphPath(0, e, h.ColorUtilities.rgbaToCSSStyle(b(A.readUnsignedInt(), C.readUnsignedInt(), e)), !1, null, m, p);
              break;
            case 3:
              u = this._readMorphBitmap(A, C, e, d);
              k = this._createMorphPath(0, e, u.style, u.smoothImage, null, m, p);
              break;
            case 2:
              u = this._readMorphGradient(A, C, e, d);
              k = this._createMorphPath(0, e, u, !1, null, m, p);
              break;
            case 4:
              k = null;
              break;
            case 5:
              u = f(D[y], z[y++], e) / 20;
              n = h.ColorUtilities.rgbaToCSSStyle(b(A.readUnsignedInt(), C.readUnsignedInt(), e));
              A.position += 1;
              w = A.readByte();
              B = l.LINE_CAPS_STYLES[A.readByte()];
              E = l.LINE_JOINTS_STYLES[A.readByte()];
              u = new t(u, w, B, E, A.readByte());
              n = this._createMorphPath(1, e, n, !1, u, m, p);
              break;
            case 6:
              u = this._readMorphGradient(A, C, e, d);
              n = this._createMorphPath(2, e, u, !1, null, m, p);
              break;
            case 7:
              u = this._readMorphBitmap(A, C, e, d);
              n = this._createMorphPath(2, e, u.style, u.smoothImage, null, m, p);
              break;
            case 8:
              n = null;
          }
        }
        r && k && (k.lineTo(v, R), n && n.lineTo(v, R));
        return g;
      };
      e.prototype._createMorphPath = function(a, b, d, e, g, l, f) {
        a = new w(a, d, e, g);
        this._morphPaths[b].push(a);
        a.path.moveTo(l, f);
        return a.path;
      };
      e.prototype._readMorphMatrix = function(c, b, d) {
        return new a(f(c.readFloat(), b.readFloat(), d), f(c.readFloat(), b.readFloat(), d), f(c.readFloat(), b.readFloat(), d), f(c.readFloat(), b.readFloat(), d), f(c.readFloat(), b.readFloat(), d), f(c.readFloat(), b.readFloat(), d));
      };
      e.prototype._readMorphGradient = function(a, d, e, g) {
        var l = a.readUnsignedByte(), k = 2 * a.readShort() / 255, n = this._readMorphMatrix(a, d, e);
        g = 16 === l ? g.createLinearGradient(-1, 0, 1, 0) : g.createRadialGradient(k, 0, 0, 0, 0, 1);
        g.setTransform && g.setTransform(n.toSVGMatrix());
        n = a.readUnsignedByte();
        for (l = 0;l < n;l++) {
          var k = f(a.readUnsignedByte() / 255, d.readUnsignedByte() / 255, e), m = b(a.readUnsignedInt(), d.readUnsignedInt(), e), m = h.ColorUtilities.rgbaToCSSStyle(m);
          g.addColorStop(k, m);
        }
        a.position += 2;
        return g;
      };
      e.prototype._readMorphBitmap = function(a, b, d, e) {
        var g = a.readUnsignedInt();
        b = this._readMorphMatrix(a, b, d);
        d = a.readBoolean() ? "repeat" : "no-repeat";
        a = a.readBoolean();
        e = e.createPattern(this._textures[g]._canvas, d);
        e.setTransform(b.toSVGMatrix());
        return {style:e, smoothImage:a};
      };
      return e;
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
      a.prototype.addRun = function(b, c, e, l) {
        if (e) {
          var f = a._getMeasureContext();
          f.font = b;
          f = f.measureText(e).width | 0;
          this.runs.push(new k(b, c, e, f, l));
          this.width += f;
        }
      };
      a.prototype.wrap = function(b) {
        var c = [this], e = this.runs, l = this;
        l.width = 0;
        l.runs = [];
        for (var f = a._getMeasureContext(), n = 0;n < e.length;n++) {
          var m = e[n], h = m.text;
          m.text = "";
          m.width = 0;
          f.font = m.font;
          for (var t = b, p = h.split(/[\s.-]/), u = 0, w = 0;w < p.length;w++) {
            var r = p[w], v = h.substr(u, r.length + 1), H = f.measureText(v).width | 0;
            if (H > t) {
              do {
                if (m.text && (l.runs.push(m), l.width += m.width, m = new k(m.font, m.fillStyle, "", 0, m.underline), t = new a, t.y = l.y + l.descent + l.leading + l.ascent | 0, t.ascent = l.ascent, t.descent = l.descent, t.leading = l.leading, t.align = l.align, c.push(t), l = t), t = b - H, 0 > t) {
                  for (var D = v.length, z = v;1 < D && !(D--, z = v.substr(0, D), H = f.measureText(z).width | 0, H <= b);) {
                  }
                  m.text = z;
                  m.width = H;
                  v = v.substr(D);
                  H = f.measureText(v).width | 0;
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
        return c;
      };
      a.prototype.toString = function() {
        return "TextLine {x: " + this.x + ", y: " + this.y + ", width: " + this.width + ", height: " + (this.ascent + this.descent + this.leading) + "}";
      };
      return a;
    }();
    r.TextLine = u;
    var k = function() {
      return function(a, b, c, e, l) {
        void 0 === a && (a = "");
        void 0 === b && (b = "");
        void 0 === c && (c = "");
        void 0 === e && (e = 0);
        void 0 === l && (l = !1);
        this.font = a;
        this.fillStyle = b;
        this.text = c;
        this.width = e;
        this.underline = l;
      };
    }();
    r.TextRun = k;
    m = function(b) {
      function e(c) {
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
      __extends(e, b);
      e.prototype.setBounds = function(a) {
        b.prototype.setBounds.call(this, a);
        this._textBounds.set(a);
        this.textRect.setElements(a.x + 2, a.y + 2, a.w - 2, a.h - 2);
      };
      e.prototype.setContent = function(a, b, d, e) {
        this._textRunData = b;
        this._plainText = a;
        this._matrix.set(d);
        this._coords = e;
        this.lines = [];
      };
      e.prototype.setStyle = function(a, b, d, e) {
        this._backgroundColor = a;
        this._borderColor = b;
        this._scrollV = d;
        this._scrollH = e;
      };
      e.prototype.reflow = function(a, b) {
        var d = this._textRunData;
        if (d) {
          for (var e = this._bounds, g = e.w - 4, l = this._plainText, f = this.lines, k = new u, n = 0, m = 0, t = 0, p = 0, w = 0, r = -1;d.position < d.length;) {
            var v = d.readInt(), z = d.readInt(), A = d.readInt(), C = d.readUTF(), y = d.readInt(), G = d.readInt(), B = d.readInt();
            y > t && (t = y);
            G > p && (p = G);
            B > w && (w = B);
            y = d.readBoolean();
            G = "";
            d.readBoolean() && (G += "italic ");
            y && (G += "bold ");
            A = G + A + "px " + C;
            C = d.readInt();
            C = h.ColorUtilities.rgbToHex(C);
            y = d.readInt();
            -1 === r && (r = y);
            d.readBoolean();
            d.readInt();
            d.readInt();
            d.readInt();
            d.readInt();
            d.readInt();
            for (var y = d.readBoolean(), E = "", G = !1;!G;v++) {
              G = v >= z - 1;
              B = l[v];
              if ("\r" !== B && "\n" !== B && (E += B, v < l.length - 1)) {
                continue;
              }
              k.addRun(A, C, E, y);
              if (k.runs.length) {
                f.length && (n += w);
                n += t;
                k.y = n | 0;
                n += p;
                k.ascent = t;
                k.descent = p;
                k.leading = w;
                k.align = r;
                if (b && k.width > g) {
                  for (k = k.wrap(g), E = 0;E < k.length;E++) {
                    var J = k[E], n = J.y + J.descent + J.leading;
                    f.push(J);
                    J.width > m && (m = J.width);
                  }
                } else {
                  f.push(k), k.width > m && (m = k.width);
                }
                k = new u;
              } else {
                n += t + p + w;
              }
              E = "";
              if (G) {
                w = p = t = 0;
                r = -1;
                break;
              }
              "\r" === B && "\n" === l[v + 1] && v++;
            }
            k.addRun(A, C, E, y);
          }
          d = l[l.length - 1];
          "\r" !== d && "\n" !== d || f.push(k);
          d = this.textRect;
          d.w = m;
          d.h = n;
          if (a) {
            if (!b) {
              g = m;
              m = e.w;
              switch(a) {
                case 1:
                  d.x = m - (g + 4) >> 1;
                  break;
                case 3:
                  d.x = m - (g + 4);
              }
              this._textBounds.setElements(d.x - 2, d.y - 2, d.w + 4, d.h + 4);
              e.w = g + 4;
            }
            e.x = d.x - 2;
            e.h = n + 4;
          } else {
            this._textBounds = e;
          }
          for (v = 0;v < f.length;v++) {
            if (e = f[v], e.width < g) {
              switch(e.align) {
                case 1:
                  e.x = g - e.width | 0;
                  break;
                case 2:
                  e.x = (g - e.width) / 2 | 0;
              }
            }
          }
          this.invalidate();
        }
      };
      e.roundBoundPoints = function(a) {
        for (var b = 0;b < a.length;b++) {
          var d = a[b];
          d.x = Math.floor(d.x + .1) + .5;
          d.y = Math.floor(d.y + .1) + .5;
        }
      };
      e.prototype.render = function(c) {
        c.save();
        var b = this._textBounds;
        this._backgroundColor && (c.fillStyle = h.ColorUtilities.rgbaToCSSStyle(this._backgroundColor), c.fillRect(b.x, b.y, b.w, b.h));
        if (this._borderColor) {
          c.strokeStyle = h.ColorUtilities.rgbaToCSSStyle(this._borderColor);
          c.lineCap = "square";
          c.lineWidth = 1;
          var d = e.absoluteBoundPoints, l = c.currentTransform;
          l ? (b = b.clone(), (new a(l.a, l.b, l.c, l.d, l.e, l.f)).transformRectangle(b, d), c.setTransform(1, 0, 0, 1, 0, 0)) : (d[0].x = b.x, d[0].y = b.y, d[1].x = b.x + b.w, d[1].y = b.y, d[2].x = b.x + b.w, d[2].y = b.y + b.h, d[3].x = b.x, d[3].y = b.y + b.h);
          e.roundBoundPoints(d);
          b = new Path2D;
          b.moveTo(d[0].x, d[0].y);
          b.lineTo(d[1].x, d[1].y);
          b.lineTo(d[2].x, d[2].y);
          b.lineTo(d[3].x, d[3].y);
          b.lineTo(d[0].x, d[0].y);
          c.stroke(b);
          l && c.setTransform(l.a, l.b, l.c, l.d, l.e, l.f);
        }
        this._coords ? this._renderChars(c) : this._renderLines(c);
        c.restore();
      };
      e.prototype._renderChars = function(a) {
        if (this._matrix) {
          var b = this._matrix;
          a.transform(b.a, b.b, b.c, b.d, b.tx, b.ty);
        }
        for (var b = this.lines, d = this._coords, e = d.position = 0;e < b.length;e++) {
          for (var g = b[e].runs, l = 0;l < g.length;l++) {
            var f = g[l];
            a.font = f.font;
            a.fillStyle = f.fillStyle;
            for (var f = f.text, k = 0;k < f.length;k++) {
              var n = d.readInt() / 20, m = d.readInt() / 20;
              a.fillText(f[k], n, m);
            }
          }
        }
      };
      e.prototype._renderLines = function(a) {
        var b = this._textBounds;
        a.beginPath();
        a.rect(b.x + 2, b.y + 2, b.w - 4, b.h - 4);
        a.clip();
        a.translate(b.x - this._scrollH + 2, b.y + 2);
        for (var d = this.lines, e = this._scrollV, g = 0, l = 0;l < d.length;l++) {
          var f = d[l], k = f.x, n = f.y;
          if (l + 1 < e) {
            g = n + f.descent + f.leading;
          } else {
            n -= g;
            if (l + 1 - e && n > b.h) {
              break;
            }
            for (var m = f.runs, t = 0;t < m.length;t++) {
              var h = m[t];
              a.font = h.font;
              a.fillStyle = h.fillStyle;
              h.underline && a.fillRect(k, n + f.descent / 2 | 0, h.width, 1);
              a.textAlign = "left";
              a.textBaseline = "alphabetic";
              a.fillText(h.text, k, n);
              k += h.width;
            }
          }
        }
      };
      e.absoluteBoundPoints = [new v(0, 0), new v(0, 0), new v(0, 0), new v(0, 0)];
      return e;
    }(n);
    r.RenderableText = m;
    n = function(a) {
      function b(c, e) {
        a.call(this);
        this._flags = 3145728;
        this.properties = {};
        this.setBounds(new p(0, 0, c, e));
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
    }(n);
    r.Label = n;
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(r) {
    var f = h.ColorUtilities.clampByte, b = function() {
      return function() {
      };
    }();
    r.Filter = b;
    var v = function(b) {
      function a(a, f, m) {
        b.call(this);
        this.blurX = a;
        this.blurY = f;
        this.quality = m;
      }
      __extends(a, b);
      return a;
    }(b);
    r.BlurFilter = v;
    v = function(b) {
      function a(a, f, m, h, t, l, u, k, d, g, c) {
        b.call(this);
        this.alpha = a;
        this.angle = f;
        this.blurX = m;
        this.blurY = h;
        this.color = t;
        this.distance = l;
        this.hideObject = u;
        this.inner = k;
        this.knockout = d;
        this.quality = g;
        this.strength = c;
      }
      __extends(a, b);
      return a;
    }(b);
    r.DropshadowFilter = v;
    b = function(b) {
      function a(a, f, m, h, t, l, u, k) {
        b.call(this);
        this.alpha = a;
        this.blurX = f;
        this.blurY = m;
        this.color = h;
        this.inner = t;
        this.knockout = l;
        this.quality = u;
        this.strength = k;
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
      b.prototype.setMultipliersAndOffsets = function(a, b, f, m, h, t, l, p) {
        for (var k = this._data, d = 0;d < k.length;d++) {
          k[d] = 0;
        }
        k[0] = a;
        k[5] = b;
        k[10] = f;
        k[15] = m;
        k[16] = h / 255;
        k[17] = t / 255;
        k[18] = l / 255;
        k[19] = p / 255;
        this._type = 0;
      };
      b.prototype.transformRGBA = function(a) {
        var b = a >> 24 & 255, n = a >> 16 & 255, m = a >> 8 & 255, h = a & 255, t = this._data;
        a = f(b * t[0] + n * t[1] + m * t[2] + h * t[3] + 255 * t[16]);
        var l = f(b * t[4] + n * t[5] + m * t[6] + h * t[7] + 255 * t[17]), p = f(b * t[8] + n * t[9] + m * t[10] + h * t[11] + 255 * t[18]), b = f(b * t[12] + n * t[13] + m * t[14] + h * t[15] + 255 * t[19]);
        return a << 24 | l << 16 | p << 8 | b;
      };
      b.prototype.multiply = function(a) {
        if (!(a._type & 1)) {
          var b = this._data, f = a._data;
          a = b[0];
          var m = b[1], h = b[2], t = b[3], l = b[4], p = b[5], k = b[6], d = b[7], g = b[8], c = b[9], q = b[10], r = b[11], F = b[12], I = b[13], v = b[14], S = b[15], ea = b[16], ha = b[17], ia = b[18], ja = b[19], X = f[0], R = f[1], H = f[2], D = f[3], z = f[4], A = f[5], C = f[6], y = f[7], G = f[8], B = f[9], E = f[10], J = f[11], K = f[12], L = f[13], M = f[14], N = f[15], O = f[16], P = f[17], Q = f[18], f = f[19];
          b[0] = a * X + l * R + g * H + F * D;
          b[1] = m * X + p * R + c * H + I * D;
          b[2] = h * X + k * R + q * H + v * D;
          b[3] = t * X + d * R + r * H + S * D;
          b[4] = a * z + l * A + g * C + F * y;
          b[5] = m * z + p * A + c * C + I * y;
          b[6] = h * z + k * A + q * C + v * y;
          b[7] = t * z + d * A + r * C + S * y;
          b[8] = a * G + l * B + g * E + F * J;
          b[9] = m * G + p * B + c * E + I * J;
          b[10] = h * G + k * B + q * E + v * J;
          b[11] = t * G + d * B + r * E + S * J;
          b[12] = a * K + l * L + g * M + F * N;
          b[13] = m * K + p * L + c * M + I * N;
          b[14] = h * K + k * L + q * M + v * N;
          b[15] = t * K + d * L + r * M + S * N;
          b[16] = a * O + l * P + g * Q + F * f + ea;
          b[17] = m * O + p * P + c * Q + I * f + ha;
          b[18] = h * O + k * P + q * Q + v * f + ia;
          b[19] = t * O + d * P + r * Q + S * f + ja;
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
        for (var f = 0;20 > f;f++) {
          if (.001 < Math.abs(b[f] - a[f])) {
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
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(r) {
    (function(f) {
      function b(a, b) {
        return -1 !== a.indexOf(b, this.length - b.length);
      }
      var v = r.Geometry.Point3D, p = r.Geometry.Matrix3D, a = r.Geometry.degreesToRadian, e = h.Debug.unexpected, n = h.Debug.notImplemented;
      f.SHADER_ROOT = "shaders/";
      var m = function() {
        function m(a, b) {
          this._fillColor = h.Color.Red;
          this._surfaceRegionCache = new h.LRUList;
          this.modelViewProjectionMatrix = p.createIdentity();
          this._canvas = a;
          this._options = b;
          this.gl = a.getContext("experimental-webgl", {preserveDrawingBuffer:!1, antialias:!0, stencil:!0, premultipliedAlpha:!1});
          this._programCache = Object.create(null);
          this._resize();
          this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, b.unpackPremultiplyAlpha ? this.gl.ONE : this.gl.ZERO);
          this._backgroundColor = h.Color.Black;
          this._geometry = new f.WebGLGeometry(this);
          this._tmpVertices = f.Vertex.createEmptyVertices(f.Vertex, 64);
          this._maxSurfaces = b.maxSurfaces;
          this._maxSurfaceSize = b.maxSurfaceSize;
          this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
          this.gl.enable(this.gl.BLEND);
          this.modelViewProjectionMatrix = p.create2DProjection(this._w, this._h, 2E3);
          var e = this;
          this._surfaceRegionAllocator = new r.SurfaceRegionAllocator.SimpleAllocator(function() {
            var a = e._createTexture();
            return new f.WebGLSurface(1024, 1024, a);
          });
        }
        Object.defineProperty(m.prototype, "surfaces", {get:function() {
          return this._surfaceRegionAllocator.surfaces;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(m.prototype, "fillStyle", {set:function(a) {
          this._fillColor.set(h.Color.parseColor(a));
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
              n("Blend Mode: " + a);
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
          return p.create2DProjection(this._w, this._h, -this._w);
        };
        m.prototype.createPerspectiveMatrix = function(b, e, f) {
          f = a(f);
          e = p.createPerspective(a(e));
          var k = new v(0, 1, 0), d = new v(0, 0, 0);
          b = new v(0, 0, b);
          b = p.createCameraLookAt(b, d, k);
          b = p.createInverse(b);
          k = p.createIdentity();
          k = p.createMultiply(k, p.createTranslation(-this._w / 2, -this._h / 2));
          k = p.createMultiply(k, p.createScale(1 / this._w, -1 / this._h, .01));
          k = p.createMultiply(k, p.createYRotation(f));
          k = p.createMultiply(k, b);
          return k = p.createMultiply(k, e);
        };
        m.prototype.discardCachedImages = function() {
          2 <= r.traceLevel && r.writer && r.writer.writeLn("Discard Cache");
          for (var a = this._surfaceRegionCache.count / 2 | 0, b = 0;b < a;b++) {
            var e = this._surfaceRegionCache.pop();
            2 <= r.traceLevel && r.writer && r.writer.writeLn("Discard: " + e);
            e.texture.atlas.remove(e.region);
            e.texture = null;
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
          var e = this.gl;
          e.bindTexture(e.TEXTURE_2D, b.surface.texture);
          e.texSubImage2D(e.TEXTURE_2D, 0, b.region.x, b.region.y, e.RGBA, e.UNSIGNED_BYTE, a);
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
          var e = f.SHADER_ROOT + a, m = this.gl;
          a = new XMLHttpRequest;
          a.open("GET", e, !1);
          a.send();
          if (b(e, ".vert")) {
            e = m.VERTEX_SHADER;
          } else {
            if (b(e, ".frag")) {
              e = m.FRAGMENT_SHADER;
            } else {
              throw "Shader Type: not supported.";
            }
          }
          return this._createShader(e, a.responseText);
        };
        m.prototype.createProgramFromFiles = function() {
          var a = this._programCache["combined.vert-combined.frag"];
          a || (a = this._createProgram([this._createShaderFromFile("combined.vert"), this._createShaderFromFile("combined.frag")]), this._queryProgramAttributesAndUniforms(a), this._initializeProgram(a), this._programCache["combined.vert-combined.frag"] = a);
          return a;
        };
        m.prototype._createProgram = function(a) {
          var b = this.gl, f = b.createProgram();
          a.forEach(function(a) {
            b.attachShader(f, a);
          });
          b.linkProgram(f);
          b.getProgramParameter(f, b.LINK_STATUS) || (e("Cannot link program: " + b.getProgramInfoLog(f)), b.deleteProgram(f));
          return f;
        };
        m.prototype._createShader = function(a, b) {
          var f = this.gl, k = f.createShader(a);
          f.shaderSource(k, b);
          f.compileShader(k);
          return f.getShaderParameter(k, f.COMPILE_STATUS) ? k : (e("Cannot compile shader: " + f.getShaderInfoLog(k)), f.deleteShader(k), null);
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
          var b = this.gl, e = b.createFramebuffer();
          b.bindFramebuffer(b.FRAMEBUFFER, e);
          b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, a, 0);
          b.bindFramebuffer(b.FRAMEBUFFER, null);
          return e;
        };
        m.prototype._queryProgramAttributesAndUniforms = function(a) {
          a.uniforms = {};
          a.attributes = {};
          for (var b = this.gl, e = 0, f = b.getProgramParameter(a, b.ACTIVE_ATTRIBUTES);e < f;e++) {
            var d = b.getActiveAttrib(a, e);
            a.attributes[d.name] = d;
            d.location = b.getAttribLocation(a, d.name);
          }
          e = 0;
          for (f = b.getProgramParameter(a, b.ACTIVE_UNIFORMS);e < f;e++) {
            d = b.getActiveUniform(a, e), a.uniforms[d.name] = d, d.location = b.getUniformLocation(a, d.name);
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
          void 0 === b && (b = h.Color.None);
          var e = this.gl, f = a.region;
          this.target = a.surface;
          e.enable(e.SCISSOR_TEST);
          e.scissor(f.x, f.y, f.w, f.h);
          e.clearColor(b.r, b.g, b.b, b.a);
          e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT);
          e.disable(e.SCISSOR_TEST);
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
              n(a);
          }
        };
        m.MAX_SURFACES = 8;
        return m;
      }();
      f.WebGLContext = m;
    })(r.WebGL || (r.WebGL = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(h, r) {
  function f() {
    this.constructor = h;
  }
  for (var b in r) {
    r.hasOwnProperty(b) && (h[b] = r[b]);
  }
  f.prototype = r.prototype;
  h.prototype = new f;
};
(function(h) {
  (function(r) {
    (function(f) {
      var b = h.Debug.assert, v = function(a) {
        function e() {
          a.apply(this, arguments);
        }
        __extends(e, a);
        e.prototype.ensureVertexCapacity = function(a) {
          b(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 8 * a);
        };
        e.prototype.writeVertex = function(a, e) {
          b(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 8);
          this.writeVertexUnsafe(a, e);
        };
        e.prototype.writeVertexUnsafe = function(a, b) {
          var e = this._offset >> 2;
          this._f32[e] = a;
          this._f32[e + 1] = b;
          this._offset += 8;
        };
        e.prototype.writeVertex3D = function(a, e, f) {
          b(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 12);
          this.writeVertex3DUnsafe(a, e, f);
        };
        e.prototype.writeVertex3DUnsafe = function(a, b, e) {
          var f = this._offset >> 2;
          this._f32[f] = a;
          this._f32[f + 1] = b;
          this._f32[f + 2] = e;
          this._offset += 12;
        };
        e.prototype.writeTriangleElements = function(a, e, f) {
          b(0 === (this._offset & 1));
          this.ensureCapacity(this._offset + 6);
          var h = this._offset >> 1;
          this._u16[h] = a;
          this._u16[h + 1] = e;
          this._u16[h + 2] = f;
          this._offset += 6;
        };
        e.prototype.ensureColorCapacity = function(a) {
          b(0 === (this._offset & 2));
          this.ensureCapacity(this._offset + 16 * a);
        };
        e.prototype.writeColorFloats = function(a, e, f, h) {
          b(0 === (this._offset & 2));
          this.ensureCapacity(this._offset + 16);
          this.writeColorFloatsUnsafe(a, e, f, h);
        };
        e.prototype.writeColorFloatsUnsafe = function(a, b, e, f) {
          var l = this._offset >> 2;
          this._f32[l] = a;
          this._f32[l + 1] = b;
          this._f32[l + 2] = e;
          this._f32[l + 3] = f;
          this._offset += 16;
        };
        e.prototype.writeColor = function() {
          var a = Math.random(), e = Math.random(), f = Math.random(), h = Math.random() / 2;
          b(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 4);
          this._i32[this._offset >> 2] = h << 24 | f << 16 | e << 8 | a;
          this._offset += 4;
        };
        e.prototype.writeColorUnsafe = function(a, b, e, f) {
          this._i32[this._offset >> 2] = f << 24 | e << 16 | b << 8 | a;
          this._offset += 4;
        };
        e.prototype.writeRandomColor = function() {
          this.writeColor();
        };
        return e;
      }(h.ArrayUtilities.ArrayWriter);
      f.BufferWriter = v;
      f.WebGLAttribute = function() {
        return function(a, b, f, m) {
          void 0 === m && (m = !1);
          this.name = a;
          this.size = b;
          this.type = f;
          this.normalized = m;
        };
      }();
      var p = function() {
        function a(a) {
          this.size = 0;
          this.attributes = a;
        }
        a.prototype.initialize = function(a) {
          for (var b = 0, f = 0;f < this.attributes.length;f++) {
            this.attributes[f].offset = b, b += a.sizeOf(this.attributes[f].type) * this.attributes[f].size;
          }
          this.size = b;
        };
        return a;
      }();
      f.WebGLAttributeList = p;
      p = function() {
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
      f.WebGLGeometry = p;
      p = function(a) {
        function b(e, f, h) {
          a.call(this, e, f, h);
        }
        __extends(b, a);
        b.createEmptyVertices = function(a, b) {
          for (var e = [], f = 0;f < b;f++) {
            e.push(new a(0, 0, 0));
          }
          return e;
        };
        return b;
      }(r.Geometry.Point3D);
      f.Vertex = p;
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
      })(f.WebGLBlendFactor || (f.WebGLBlendFactor = {}));
    })(r.WebGL || (r.WebGL = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(f) {
      var b = function() {
        function b(a, e, f) {
          this.texture = f;
          this.w = a;
          this.h = e;
          this._regionAllocator = new h.RegionAllocator.CompactAllocator(this.w, this.h);
        }
        b.prototype.allocate = function(a, b) {
          var f = this._regionAllocator.allocate(a, b);
          return f ? new v(this, f) : null;
        };
        b.prototype.free = function(a) {
          this._regionAllocator.free(a.region);
        };
        return b;
      }();
      f.WebGLSurface = b;
      var v = function() {
        return function(b, a) {
          this.surface = b;
          this.region = a;
          this.next = this.previous = null;
        };
      }();
      f.WebGLSurfaceRegion = v;
    })(h.WebGL || (h.WebGL = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(r) {
    (function(f) {
      var b = h.Color;
      f.TILE_SIZE = 256;
      f.MIN_UNTILED_SIZE = 256;
      var v = r.Geometry.Matrix, p = r.Geometry.Rectangle, a = function(a) {
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
      f.WebGLRendererOptions = a;
      var e = function(e) {
        function m(b, m, l) {
          void 0 === l && (l = new a);
          e.call(this, b, m, l);
          this._tmpVertices = f.Vertex.createEmptyVertices(f.Vertex, 64);
          this._cachedTiles = [];
          b = this._context = new f.WebGLContext(this._canvas, l);
          this._updateSize();
          this._brush = new f.WebGLCombinedBrush(b, new f.WebGLGeometry(b));
          this._stencilBrush = new f.WebGLCombinedBrush(b, new f.WebGLGeometry(b));
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
        __extends(m, e);
        m.prototype.resize = function() {
          this._updateSize();
          this.render();
        };
        m.prototype._updateSize = function() {
          this._viewport = new p(0, 0, this._canvas.width, this._canvas.height);
          this._context._resize();
        };
        m.prototype._cacheImageCallback = function(a, b, e) {
          var f = e.w, k = e.h, d = e.x;
          e = e.y;
          this._uploadCanvas.width = f + 2;
          this._uploadCanvas.height = k + 2;
          this._uploadCanvasContext.drawImage(b.canvas, d, e, f, k, 1, 1, f, k);
          this._uploadCanvasContext.drawImage(b.canvas, d, e, f, 1, 1, 0, f, 1);
          this._uploadCanvasContext.drawImage(b.canvas, d, e + k - 1, f, 1, 1, k + 1, f, 1);
          this._uploadCanvasContext.drawImage(b.canvas, d, e, 1, k, 0, 1, 1, k);
          this._uploadCanvasContext.drawImage(b.canvas, d + f - 1, e, 1, k, f + 1, 1, 1, k);
          return a && a.surface ? (this._options.disableSurfaceUploads || this._context.updateSurfaceRegion(this._uploadCanvas, a), a) : this._context.cacheImage(this._uploadCanvas);
        };
        m.prototype._enterClip = function(a, b, e, f) {
          e.flush();
          b = this._context.gl;
          0 === this._clipStack.length && (b.enable(b.STENCIL_TEST), b.clear(b.STENCIL_BUFFER_BIT), b.stencilFunc(b.ALWAYS, 1, 1));
          this._clipStack.push(a);
          b.colorMask(!1, !1, !1, !1);
          b.stencilOp(b.KEEP, b.KEEP, b.INCR);
          e.flush();
          b.colorMask(!0, !0, !0, !0);
          b.stencilFunc(b.NOTEQUAL, 0, this._clipStack.length);
          b.stencilOp(b.KEEP, b.KEEP, b.KEEP);
        };
        m.prototype._leaveClip = function(a, b, e, f) {
          e.flush();
          b = this._context.gl;
          if (a = this._clipStack.pop()) {
            b.colorMask(!1, !1, !1, !1), b.stencilOp(b.KEEP, b.KEEP, b.DECR), e.flush(), b.colorMask(!0, !0, !0, !0), b.stencilFunc(b.NOTEQUAL, 0, this._clipStack.length), b.stencilOp(b.KEEP, b.KEEP, b.KEEP);
          }
          0 === this._clipStack.length && b.disable(b.STENCIL_TEST);
        };
        m.prototype._renderFrame = function(a, b, e, f) {
        };
        m.prototype._renderSurfaces = function(a) {
          var e = this._options, l = this._context, m = this._viewport;
          if (e.drawSurfaces) {
            var k = l.surfaces, l = v.createIdentity();
            if (0 <= e.drawSurface && e.drawSurface < k.length) {
              for (var e = k[e.drawSurface | 0], k = new p(0, 0, e.w, e.h), d = k.clone();d.w > m.w;) {
                d.scale(.5, .5);
              }
              a.drawImage(new f.WebGLSurfaceRegion(e, k), d, b.White, null, l, .2);
            } else {
              d = m.w / 5;
              d > m.h / k.length && (d = m.h / k.length);
              a.fillRectangle(new p(m.w - d, 0, d, m.h), new b(0, 0, 0, .5), l, .1);
              for (var g = 0;g < k.length;g++) {
                var e = k[g], c = new p(m.w - d, g * d, d, d);
                a.drawImage(new f.WebGLSurfaceRegion(e, new p(0, 0, e.w, e.h)), c, b.White, null, l, .2);
              }
            }
            a.flush();
          }
        };
        m.prototype.render = function() {
          var a = this._options, e = this._context.gl;
          this._context.modelViewProjectionMatrix = a.perspectiveCamera ? this._context.createPerspectiveMatrix(a.perspectiveCameraDistance + (a.animateZoom ? .8 * Math.sin(Date.now() / 3E3) : 0), a.perspectiveCameraFOV, a.perspectiveCameraAngle) : this._context.create2DProjectionMatrix();
          var f = this._brush;
          e.clearColor(0, 0, 0, 0);
          e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT);
          f.reset();
          e = this._viewport;
          f.flush();
          a.paintViewport && (f.fillRectangle(e, new b(.5, 0, 0, .25), v.createIdentity(), 0), f.flush());
          this._renderSurfaces(f);
        };
        return m;
      }(r.Renderer);
      f.WebGLRenderer = e;
    })(r.WebGL || (r.WebGL = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(r) {
    (function(f) {
      var b = h.Color, v = r.Geometry.Point, p = r.Geometry.Matrix3D, a = function() {
        function a(b, e, f) {
          this._target = f;
          this._context = b;
          this._geometry = e;
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
      f.WebGLBrush = a;
      (function(a) {
        a[a.FillColor = 0] = "FillColor";
        a[a.FillTexture = 1] = "FillTexture";
        a[a.FillTextureWithColorMatrix = 2] = "FillTextureWithColorMatrix";
      })(f.WebGLCombinedBrushKind || (f.WebGLCombinedBrushKind = {}));
      var e = function(a) {
        function e(f, m, l) {
          a.call(this, f, m, l);
          this.kind = 0;
          this.color = new b(0, 0, 0, 0);
          this.sampler = 0;
          this.coordinate = new v(0, 0);
        }
        __extends(e, a);
        e.initializeAttributeList = function(a) {
          var b = a.gl;
          e.attributeList || (e.attributeList = new f.WebGLAttributeList([new f.WebGLAttribute("aPosition", 3, b.FLOAT), new f.WebGLAttribute("aCoordinate", 2, b.FLOAT), new f.WebGLAttribute("aColor", 4, b.UNSIGNED_BYTE, !0), new f.WebGLAttribute("aKind", 1, b.FLOAT), new f.WebGLAttribute("aSampler", 1, b.FLOAT)]), e.attributeList.initialize(a));
        };
        e.prototype.writeTo = function(a) {
          a = a.array;
          a.ensureAdditionalCapacity();
          a.writeVertex3DUnsafe(this.x, this.y, this.z);
          a.writeVertexUnsafe(this.coordinate.x, this.coordinate.y);
          a.writeColorUnsafe(255 * this.color.r, 255 * this.color.g, 255 * this.color.b, 255 * this.color.a);
          a.writeFloatUnsafe(this.kind);
          a.writeFloatUnsafe(this.sampler);
        };
        return e;
      }(f.Vertex);
      f.WebGLCombinedBrushVertex = e;
      a = function(a) {
        function b(f, m, l) {
          void 0 === l && (l = null);
          a.call(this, f, m, l);
          this._blendMode = 1;
          this._program = f.createProgramFromFiles();
          this._surfaces = [];
          e.initializeAttributeList(this._context);
        }
        __extends(b, a);
        b.prototype.reset = function() {
          this._surfaces = [];
          this._geometry.reset();
        };
        b.prototype.drawImage = function(a, e, f, n, k, d, g) {
          void 0 === d && (d = 0);
          void 0 === g && (g = 1);
          if (!a || !a.surface) {
            return !0;
          }
          e = e.clone();
          this._colorMatrix && (n && this._colorMatrix.equals(n) || this.flush());
          this._colorMatrix = n;
          this._blendMode !== g && (this.flush(), this._blendMode = g);
          g = this._surfaces.indexOf(a.surface);
          0 > g && (8 === this._surfaces.length && this.flush(), this._surfaces.push(a.surface), g = this._surfaces.length - 1);
          var c = b._tmpVertices, h = a.region.clone();
          h.offset(1, 1).resize(-2, -2);
          h.scale(1 / a.surface.w, 1 / a.surface.h);
          k.transformRectangle(e, c);
          for (a = 0;4 > a;a++) {
            c[a].z = d;
          }
          c[0].coordinate.x = h.x;
          c[0].coordinate.y = h.y;
          c[1].coordinate.x = h.x + h.w;
          c[1].coordinate.y = h.y;
          c[2].coordinate.x = h.x + h.w;
          c[2].coordinate.y = h.y + h.h;
          c[3].coordinate.x = h.x;
          c[3].coordinate.y = h.y + h.h;
          for (a = 0;4 > a;a++) {
            d = b._tmpVertices[a], d.kind = n ? 2 : 1, d.color.set(f), d.sampler = g, d.writeTo(this._geometry);
          }
          this._geometry.addQuad();
          return !0;
        };
        b.prototype.fillRectangle = function(a, e, f, n) {
          void 0 === n && (n = 0);
          f.transformRectangle(a, b._tmpVertices);
          for (a = 0;4 > a;a++) {
            f = b._tmpVertices[a], f.kind = 0, f.color.set(e), f.z = n, f.writeTo(this._geometry);
          }
          this._geometry.addQuad();
        };
        b.prototype.flush = function() {
          var a = this._geometry, b = this._program, f = this._context.gl, m;
          a.uploadBuffers();
          f.useProgram(b);
          this._target ? (m = p.create2DProjection(this._target.w, this._target.h, 2E3), m = p.createMultiply(m, p.createScale(1, -1, 1))) : m = this._context.modelViewProjectionMatrix;
          f.uniformMatrix4fv(b.uniforms.uTransformMatrix3D.location, !1, m.asWebGLMatrix());
          this._colorMatrix && (f.uniformMatrix4fv(b.uniforms.uColorMatrix.location, !1, this._colorMatrix.asWebGLMatrix()), f.uniform4fv(b.uniforms.uColorVector.location, this._colorMatrix.asWebGLVector()));
          for (m = 0;m < this._surfaces.length;m++) {
            f.activeTexture(f.TEXTURE0 + m), f.bindTexture(f.TEXTURE_2D, this._surfaces[m].texture);
          }
          f.uniform1iv(b.uniforms["uSampler[0]"].location, [0, 1, 2, 3, 4, 5, 6, 7]);
          f.bindBuffer(f.ARRAY_BUFFER, a.buffer);
          var k = e.attributeList.size, d = e.attributeList.attributes;
          for (m = 0;m < d.length;m++) {
            var g = d[m], c = b.attributes[g.name].location;
            f.enableVertexAttribArray(c);
            f.vertexAttribPointer(c, g.size, g.type, g.normalized, k, g.offset);
          }
          this._context.setBlendOptions();
          this._context.target = this._target;
          f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, a.elementBuffer);
          f.drawElements(f.TRIANGLES, 3 * a.triangleCount, f.UNSIGNED_SHORT, 0);
          this.reset();
        };
        b._tmpVertices = f.Vertex.createEmptyVertices(e, 4);
        b._depth = 1;
        return b;
      }(a);
      f.WebGLCombinedBrush = a;
    })(r.WebGL || (r.WebGL = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(f) {
      var b = CanvasRenderingContext2D.prototype.save, h = CanvasRenderingContext2D.prototype.clip, p = CanvasRenderingContext2D.prototype.fill, a = CanvasRenderingContext2D.prototype.stroke, e = CanvasRenderingContext2D.prototype.restore, n = CanvasRenderingContext2D.prototype.beginPath;
      f.notifyReleaseChanged = function() {
        CanvasRenderingContext2D.prototype.save = b;
        CanvasRenderingContext2D.prototype.clip = h;
        CanvasRenderingContext2D.prototype.fill = p;
        CanvasRenderingContext2D.prototype.stroke = a;
        CanvasRenderingContext2D.prototype.restore = e;
        CanvasRenderingContext2D.prototype.beginPath = n;
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
  (function(r) {
    (function(f) {
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
            h.Debug.somewhatImplemented("Blend Mode: " + r.BlendMode[a]);
        }
        return b;
      }
      var v = h.NumberUtilities.clamp;
      navigator.userAgent.indexOf("Firefox");
      var p = function() {
        function a() {
        }
        a._prepareSVGFilters = function() {
          if (!a._svgBlurFilter) {
            var b = document.createElementNS("http://www.w3.org/2000/svg", "svg"), f = document.createElementNS("http://www.w3.org/2000/svg", "defs"), h = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            h.setAttribute("id", "svgBlurFilter");
            var p = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
            p.setAttribute("stdDeviation", "0 0");
            h.appendChild(p);
            f.appendChild(h);
            a._svgBlurFilter = p;
            h = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            h.setAttribute("id", "svgDropShadowFilter");
            p = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
            p.setAttribute("in", "SourceAlpha");
            p.setAttribute("stdDeviation", "3");
            h.appendChild(p);
            a._svgDropshadowFilterBlur = p;
            p = document.createElementNS("http://www.w3.org/2000/svg", "feOffset");
            p.setAttribute("dx", "0");
            p.setAttribute("dy", "0");
            p.setAttribute("result", "offsetblur");
            h.appendChild(p);
            a._svgDropshadowFilterOffset = p;
            p = document.createElementNS("http://www.w3.org/2000/svg", "feFlood");
            p.setAttribute("flood-color", "rgba(0,0,0,1)");
            h.appendChild(p);
            a._svgDropshadowFilterFlood = p;
            p = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
            p.setAttribute("in2", "offsetblur");
            p.setAttribute("operator", "in");
            h.appendChild(p);
            var p = document.createElementNS("http://www.w3.org/2000/svg", "feMerge"), l = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
            p.appendChild(l);
            l = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
            l.setAttribute("in", "SourceGraphic");
            p.appendChild(l);
            h.appendChild(p);
            f.appendChild(h);
            h = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            h.setAttribute("id", "svgColorMatrixFilter");
            p = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
            p.setAttribute("color-interpolation-filters", "sRGB");
            p.setAttribute("in", "SourceGraphic");
            p.setAttribute("type", "matrix");
            h.appendChild(p);
            f.appendChild(h);
            a._svgColorMatrixFilter = p;
            b.appendChild(f);
            document.documentElement.appendChild(b);
          }
        };
        a._applyColorMatrixFilter = function(b, f) {
          a._prepareSVGFilters();
          a._svgColorMatrixFilter.setAttribute("values", f.toSVGFilterMatrix());
          b.filter = "url(#svgColorMatrixFilter)";
        };
        a._applyFilters = function(b, f, p) {
          function t(a) {
            var e = b / 2;
            switch(a) {
              case 0:
                return 0;
              case 1:
                return e / 2.7;
              case 2:
                return e / 1.28;
              default:
                return e;
            }
          }
          a._prepareSVGFilters();
          a._removeFilters(f);
          for (var l = 0;l < p.length;l++) {
            var u = p[l];
            if (u instanceof r.BlurFilter) {
              var k = u, u = t(k.quality);
              a._svgBlurFilter.setAttribute("stdDeviation", k.blurX * u + " " + k.blurY * u);
              f.filter = "url(#svgBlurFilter)";
            } else {
              u instanceof r.DropshadowFilter && (k = u, u = t(k.quality), a._svgDropshadowFilterBlur.setAttribute("stdDeviation", k.blurX * u + " " + k.blurY * u), a._svgDropshadowFilterOffset.setAttribute("dx", String(Math.cos(k.angle * Math.PI / 180) * k.distance * b)), a._svgDropshadowFilterOffset.setAttribute("dy", String(Math.sin(k.angle * Math.PI / 180) * k.distance * b)), a._svgDropshadowFilterFlood.setAttribute("flood-color", h.ColorUtilities.rgbaToCSSStyle(k.color << 8 | Math.round(255 * 
              k.alpha))), f.filter = "url(#svgDropShadowFilter)");
            }
          }
        };
        a._removeFilters = function(a) {
          a.filter = "none";
        };
        a._applyColorMatrix = function(b, f) {
          a._removeFilters(b);
          f.isIdentity() ? (b.globalAlpha = 1, b.globalColorMatrix = null) : f.hasOnlyAlphaMultiplier() ? (b.globalAlpha = v(f.alphaMultiplier, 0, 1), b.globalColorMatrix = null) : (b.globalAlpha = 1, a._svgFiltersAreSupported ? (a._applyColorMatrixFilter(b, f), b.globalColorMatrix = null) : b.globalColorMatrix = f);
        };
        a._svgFiltersAreSupported = !!Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype, "filter");
        return a;
      }();
      f.Filters = p;
      var a = function() {
        function a(b, e, f, h) {
          this.surface = b;
          this.region = e;
          this.w = f;
          this.h = h;
        }
        a.prototype.free = function() {
          this.surface.free(this);
        };
        a._ensureCopyCanvasSize = function(b, f) {
          var p;
          if (a._copyCanvasContext) {
            if (p = a._copyCanvasContext.canvas, p.width < b || p.height < f) {
              p.width = h.IntegerUtilities.nearestPowerOfTwo(b), p.height = h.IntegerUtilities.nearestPowerOfTwo(f);
            }
          } else {
            p = document.createElement("canvas"), "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(p), p.width = 512, p.height = 512, a._copyCanvasContext = p.getContext("2d");
          }
        };
        a.prototype.draw = function(f, m, h, p, l, r) {
          this.context.setTransform(1, 0, 0, 1, 0, 0);
          var k, d = 0, g = 0;
          f.context.canvas === this.context.canvas ? (a._ensureCopyCanvasSize(p, l), k = a._copyCanvasContext, k.clearRect(0, 0, p, l), k.drawImage(f.surface.canvas, f.region.x, f.region.y, p, l, 0, 0, p, l), k = k.canvas, g = d = 0) : (k = f.surface.canvas, d = f.region.x, g = f.region.y);
          a: {
            switch(r) {
              case 11:
                f = !0;
                break a;
              default:
                f = !1;
            }
          }
          f && (this.context.save(), this.context.beginPath(), this.context.rect(m, h, p, l), this.context.clip());
          this.context.globalCompositeOperation = b(r);
          this.context.drawImage(k, d, g, p, l, m, h, p, l);
          this.context.globalCompositeOperation = b(1);
          f && this.context.restore();
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
          var b = this.surface.context, e = this.region;
          b.fillStyle = a;
          b.fillRect(e.x, e.y, e.w, e.h);
        };
        a.prototype.clear = function(a) {
          var b = this.surface.context, e = this.region;
          a || (a = e);
          b.clearRect(a.x, a.y, a.w, a.h);
        };
        return a;
      }();
      f.Canvas2DSurfaceRegion = a;
      p = function() {
        function b(a, e) {
          this.canvas = a;
          this.context = a.getContext("2d");
          this.w = a.width;
          this.h = a.height;
          this._regionAllocator = e;
        }
        b.prototype.allocate = function(b, e) {
          var f = this._regionAllocator.allocate(b, e);
          return f ? new a(this, f, b, e) : null;
        };
        b.prototype.free = function(a) {
          this._regionAllocator.free(a.region);
        };
        return b;
      }();
      f.Canvas2DSurface = p;
    })(r.Canvas2D || (r.Canvas2D = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(r) {
    (function(f) {
      var b = h.Debug.assert, v = h.GFX.Geometry.Rectangle, p = h.GFX.Geometry.Point, a = h.GFX.Geometry.Matrix, e = h.NumberUtilities.clamp, n = h.NumberUtilities.pow2, m = function() {
        return function(a, b) {
          this.surfaceRegion = a;
          this.scale = b;
        };
      }();
      f.MipMapLevel = m;
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
          var b = 0;
          1 !== a && (b = e(Math.round(Math.log(a) / Math.LN2), -5, 3));
          this._node.hasFlags(2097152) || (b = e(b, -5, 0));
          a = n(b);
          var d = 5 + b, b = this._levels[d];
          if (!b) {
            var f = this._node.getBounds().clone();
            f.scale(a, a);
            f.snap();
            var k = this._surfaceRegionAllocator.allocate(f.w, f.h, null), h = k.region, b = this._levels[d] = new m(k, a), d = new l(k);
            d.clip.set(h);
            d.matrix.setElements(a, 0, 0, a, h.x - f.x, h.y - f.y);
            d.flags |= 64;
            this._renderer.renderNodeWithState(this._node, d);
            d.free();
          }
          return b;
        };
        return a;
      }();
      f.MipMap = w;
      (function(a) {
        a[a.NonZero = 0] = "NonZero";
        a[a.EvenOdd = 1] = "EvenOdd";
      })(f.FillRule || (f.FillRule = {}));
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
      f.Canvas2DRendererOptions = t;
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
      })(f.RenderFlags || (f.RenderFlags = {}));
      v.createMaxI16();
      var l = function(b) {
        function e(c) {
          b.call(this);
          this.clip = v.createEmpty();
          this.clipList = [];
          this.clipPath = null;
          this.flags = 0;
          this.target = null;
          this.matrix = a.createIdentity();
          this.colorMatrix = r.ColorMatrix.createIdentity();
          this.filters = [];
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
          this.filters.length = 0;
          this.filters.push.apply(this.filters, a.filters);
          h.ArrayUtilities.copyFrom(this.clipList, a.clipList);
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
      }(r.State);
      f.RenderState = l;
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
      f.FrameInfo = u;
      var k = function(d) {
        function e(a, b, f) {
          void 0 === f && (f = new t);
          d.call(this, a, b, f);
          this._visited = 0;
          this._frameInfo = new u;
          this._fontSize = 0;
          this._layers = [];
          if (a instanceof HTMLCanvasElement) {
            var l = a;
            this._viewport = new v(0, 0, l.width, l.height);
            this._target = this._createTarget(l);
          } else {
            this._addLayer("Background Layer");
            f = this._addLayer("Canvas Layer");
            l = document.createElement("canvas");
            f.appendChild(l);
            this._viewport = new v(0, 0, a.scrollWidth, a.scrollHeight);
            var k = this;
            b.addEventListener(1, function() {
              k._onStageBoundsChanged(l);
            });
            this._onStageBoundsChanged(l);
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
          return new f.Canvas2DSurfaceRegion(new f.Canvas2DSurface(a), new r.RegionAllocator.Region(0, 0, a.width, a.height), a.width, a.height);
        };
        e.prototype._onStageBoundsChanged = function(a) {
          var b = this._stage.getBounds(!0);
          b.snap();
          for (var d = this._devicePixelRatio = window.devicePixelRatio || 1, e = b.w / d + "px", d = b.h / d + "px", g = 0;g < this._layers.length;g++) {
            var f = this._layers[g];
            f.style.width = e;
            f.style.height = d;
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
          e._initializedCaches || (e._surfaceCache = new r.SurfaceRegionAllocator.SimpleAllocator(function(a, b) {
            var d = document.createElement("canvas");
            "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(d);
            var e = Math.max(1024, a), g = Math.max(1024, b);
            d.width = e;
            d.height = g;
            var l = null, l = 512 <= a || 512 <= b ? new r.RegionAllocator.GridAllocator(e, g, e, g) : new r.RegionAllocator.BucketAllocator(e, g);
            return new f.Canvas2DSurface(d, l);
          }), e._shapeCache = new r.SurfaceRegionAllocator.SimpleAllocator(function(a, b) {
            var d = document.createElement("canvas");
            "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(d);
            d.width = 1024;
            d.height = 1024;
            var e = e = new r.RegionAllocator.CompactAllocator(1024, 1024);
            return new f.Canvas2DSurface(d, e);
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
          var e = new l(this._target);
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
          var l = this._options.cacheShapesMaxSize, k = Math.max(d.getAbsoluteScaleX(), d.getAbsoluteScaleY()), h = !!(b.flags & 16), m = !!(b.flags & 8);
          if (b.hasFlags(256)) {
            if (m || h || !b.colorMatrix.isIdentity() || a.hasFlags(1048576) || 100 < this._options.cacheShapesThreshold || f.w * k > l || f.h * k > l) {
              return !1;
            }
            (k = a.properties.mipMap) || (k = a.properties.mipMap = new w(this, a, e._shapeCache, l));
            h = k.getLevel(d);
            l = h.surfaceRegion;
            k = l.region;
            return h ? (h = b.target.context, h.imageSmoothingEnabled = h.mozImageSmoothingEnabled = !0, h.setTransform(d.a, d.b, d.c, d.d, d.tx, d.ty), h.drawImage(l.surface.canvas, k.x, k.y, k.w, k.h, f.x, f.y, f.w, f.h), !0) : !1;
          }
        };
        e.prototype._intersectsClipList = function(a, b) {
          var d = a.getBounds(!0), e = !1;
          b.matrix.transformRectangleAABB(d);
          b.clip.intersects(d) && (e = !0);
          var g = b.clipList;
          if (e && g.length) {
            for (var e = !1, f = 0;f < g.length;f++) {
              if (d.intersects(g[f])) {
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
            var d = a.getLayer().filters;
            d && b.filters.push.apply(b.filters, d);
            if (b.flags & 1 || 1 === a.getLayer().blendMode && !a.getLayer().mask || !this._options.blending) {
              if (this._intersectsClipList(a, b)) {
                for (var d = null, e = a.getChildren(), g = 0;g < e.length;g++) {
                  var f = e[g], l = f.getTransform(), k = b.transform(l);
                  k.toggleFlags(4096, f.hasFlags(524288));
                  if (0 <= f.clip) {
                    d = d || new Uint8Array(e.length);
                    d[f.clip + g]++;
                    var h = k.clone();
                    h.flags |= 16;
                    h.beginClipPath(l.getMatrix());
                    f.visit(this, h);
                    h.applyClipPath();
                    h.free();
                  } else {
                    f.visit(this, k);
                  }
                  if (d && 0 < d[g]) {
                    for (;d[g]--;) {
                      b.closeClipPath();
                    }
                  }
                  k.free();
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
        e.prototype._renderDebugInfo = function(a, b) {
          if (b.flags & 1024) {
            var d = b.target.context, f = a.getBounds(!0), l = a.properties.style;
            l || (l = a.properties.style = h.Color.randomColor().toCSSStyle());
            d.strokeStyle = l;
            b.matrix.transformRectangleAABB(f);
            d.setTransform(1, 0, 0, 1, 0, 0);
            f.free();
            f = a.getBounds();
            l = e._debugPoints;
            b.matrix.transformRectangle(f, l);
            d.lineWidth = 1;
            d.beginPath();
            d.moveTo(l[0].x, l[0].y);
            d.lineTo(l[1].x, l[1].y);
            d.lineTo(l[2].x, l[2].y);
            d.lineTo(l[3].x, l[3].y);
            d.lineTo(l[0].x, l[0].y);
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
            f.Filters._applyColorMatrix(e, b.colorMatrix);
            f.Filters._svgFiltersAreSupported && r.filters.value && f.Filters._applyFilters(this._devicePixelRatio, e, b.filters);
            a.source instanceof r.RenderableVideo ? this.visitRenderableVideo(a.source, b) : 0 < e.globalAlpha && this.visitRenderable(a.source, b, a.ratio);
            b.flags & 8192 && d.free();
          }
        };
        e.prototype.visitRenderableVideo = function(a, b) {
          if (a.video && a.video.videoWidth) {
            var d = this._devicePixelRatio, e = b.matrix.clone();
            e.scale(1 / d, 1 / d);
            var d = a.getBounds(), g = h.GFX.Geometry.Matrix.createIdentity();
            g.scale(d.w / a.video.videoWidth, d.h / a.video.videoHeight);
            e.preMultiply(g);
            g.free();
            d = e.toCSSTransform();
            a.video.style.transformOrigin = "0 0";
            a.video.style.transform = d;
            var f = this._backgroundVideoLayer;
            f !== a.video.parentElement && (f.appendChild(a.video), a.addEventListener(2, function ea(a) {
              f.removeChild(a.video);
              a.removeEventListener(2, ea);
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
            var g = b.matrix, e = b.target.context, f = !!(b.flags & 16), l = !!(b.flags & 8);
            e.setTransform(g.a, g.b, g.c, g.d, g.tx, g.ty);
            this._frameInfo.shapes++;
            e.imageSmoothingEnabled = e.mozImageSmoothingEnabled = b.hasFlags(4096);
            g = a.properties.renderCount || 0;
            a.properties.renderCount = ++g;
            a.render(e, d, null, f ? b.clipPath : null, l);
          }
        };
        e.prototype._renderLayer = function(a, b) {
          var d = a.getLayer(), e = d.mask;
          if (e) {
            this._renderWithMask(a, e, d.blendMode, !a.hasFlags(131072) || !e.hasFlags(131072), b);
          } else {
            var e = v.allocate(), g = this._renderToTemporarySurface(a, b, e, null);
            g && (b.target.draw(g, e.x, e.y, e.w, e.h, d.blendMode), g.free());
            e.free();
          }
        };
        e.prototype._renderWithMask = function(a, b, d, e, g) {
          var f = b.getTransform().getConcatenatedMatrix(!0);
          b.parent || (f = f.scale(this._devicePixelRatio, this._devicePixelRatio));
          var l = a.getBounds().clone();
          g.matrix.transformRectangleAABB(l);
          l.snap();
          if (!l.isEmpty()) {
            var k = b.getBounds().clone();
            f.transformRectangleAABB(k);
            k.snap();
            if (!k.isEmpty()) {
              var h = g.clip.clone();
              h.intersect(l);
              h.intersect(k);
              h.snap();
              h.isEmpty() || (l = g.clone(), l.clip.set(h), a = this._renderToTemporarySurface(a, l, v.createEmpty(), null), l.free(), l = g.clone(), l.clip.set(h), l.matrix = f, l.flags |= 4, e && (l.flags |= 8), b = this._renderToTemporarySurface(b, l, v.createEmpty(), a.surface), l.free(), a.draw(b, 0, 0, h.w, h.h, 11), g.target.draw(a, h.x, h.y, h.w, h.h, d), b.free(), a.free());
            }
          }
        };
        e.prototype._renderStageToTarget = function(b, d, e) {
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
        e.prototype._renderToTemporarySurface = function(a, b, d, e) {
          var g = b.matrix, f = a.getBounds().clone();
          g.transformRectangleAABB(f);
          f.snap();
          d.set(f);
          d.intersect(b.clip);
          d.snap();
          if (d.isEmpty()) {
            return null;
          }
          e = this._allocateSurface(d.w, d.h, e);
          f = e.region;
          f = new v(f.x, f.y, d.w, d.h);
          e.context.setTransform(1, 0, 0, 1, 0, 0);
          e.clear();
          g = g.clone();
          g.translate(f.x - d.x, f.y - d.y);
          e.context.save();
          b = b.clone();
          b.target = e;
          b.matrix = g;
          b.clip.set(f);
          a.visit(this, b);
          b.free();
          e.context.restore();
          return e;
        };
        e.prototype._allocateSurface = function(a, b, d) {
          return e._surfaceCache.allocate(a, b, d);
        };
        e.prototype.screenShot = function(a, d) {
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
          var g = e.getContext("2d");
          g.fillStyle = this._container.style.backgroundColor;
          g.fillRect(0, 0, a.w, a.h);
          g.drawImage(this._target.context.canvas, a.x, a.y, a.w, a.h, 0, 0, a.w, a.h);
          return new r.ScreenShot(e.toDataURL("image/png"), a.w, a.h);
        };
        e._initializedCaches = !1;
        e._debugPoints = p.createEmptyPoints(4);
        return e;
      }(r.Renderer);
      f.Canvas2DRenderer = k;
    })(r.Canvas2D || (r.Canvas2D = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(r) {
    var f = r.Geometry.Point, b = r.Geometry.Matrix, v = r.Geometry.Rectangle, p = h.Tools.Mini.FPS, a = function() {
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
    var e = function(a) {
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
    }(a), n = function(a) {
      function b() {
        a.apply(this, arguments);
        this._keyCodes = [];
        this._paused = !1;
        this._mousePosition = new f(0, 0);
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
        var e = "DOMMouseScroll" === b.type ? -b.detail : b.wheelDelta / 40;
        if (b.altKey) {
          b.preventDefault();
          var d = a.getMousePosition(b, null), g = a.worldView.getTransform().getMatrix(!0), e = 1 + e / 1E3;
          g.translate(-d.x, -d.y);
          g.scale(e, e);
          g.translate(d.x, d.y);
          a.worldView.getTransform().setMatrix(g);
        }
      };
      b.prototype.onKeyPress = function(a, b) {
        if (b.altKey) {
          var e = b.keyCode || b.which;
          console.info("onKeyPress Code: " + e);
          switch(e) {
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
          var b = r.viewportLoupeDiameter.value, e = r.viewportLoupeDiameter.value;
          a.viewport = new v(this._mousePosition.x - b / 2, this._mousePosition.y - e / 2, b, e);
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
          var e = a._world;
          e && (a.state = new m(e, a.getMousePosition(b, null), e.getTransform().getMatrix(!0)));
        }
      };
      b.prototype.onMouseUp = function(a, b) {
        a.state = new e;
        a.selectNodeUnderMouse(b);
      };
      return b;
    })(a);
    var m = function(a) {
      function b(e, f, k) {
        a.call(this);
        this._target = e;
        this._startPosition = f;
        this._startMatrix = k;
      }
      __extends(b, a);
      b.prototype.onMouseMove = function(a, b) {
        b.preventDefault();
        var e = a.getMousePosition(b, null);
        e.sub(this._startPosition);
        this._target.getTransform().setMatrix(this._startMatrix.clone().translate(e.x, e.y));
        a.state = this;
      };
      b.prototype.onMouseUp = function(a, b) {
        a.state = new e;
      };
      return b;
    }(a), a = function() {
      function a(b, f, m) {
        function k(a) {
          c._state.onMouseWheel(c, a);
          c._persistentState.onMouseWheel(c, a);
        }
        void 0 === f && (f = !1);
        void 0 === m && (m = void 0);
        this._state = new e;
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
        this._disableHiDPI = f;
        f = document.createElement("div");
        f.style.position = "absolute";
        f.style.width = "100%";
        f.style.height = "100%";
        f.style.zIndex = "0";
        b.appendChild(f);
        if (r.hud.value) {
          var d = document.createElement("div");
          d.style.position = "absolute";
          d.style.width = "100%";
          d.style.height = "100%";
          d.style.pointerEvents = "none";
          var g = document.createElement("div");
          g.style.position = "absolute";
          g.style.width = "100%";
          g.style.height = "20px";
          g.style.pointerEvents = "none";
          d.appendChild(g);
          b.appendChild(d);
          this._fps = new p(g);
        } else {
          this._fps = null;
        }
        this.transparent = d = 0 === m;
        void 0 === m || 0 === m || h.ColorUtilities.rgbaToCSSStyle(m);
        this._options = new r.Canvas2D.Canvas2DRendererOptions;
        this._options.alpha = d;
        this._renderer = new r.Canvas2D.Canvas2DRenderer(f, this._stage, this._options);
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
        window.addEventListener("DOMMouseScroll", k);
        window.addEventListener("mousewheel", k);
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
        var e = this;
        setInterval(function() {
          if (a !== e._containerWidth || b !== e._containerHeight) {
            e._onContainerSizeChanged(), a = e._containerWidth, b = e._containerHeight;
          }
        }, 10);
      };
      a.prototype._onContainerSizeChanged = function() {
        var a = this.getRatio(), e = Math.ceil(this._containerWidth * a), f = Math.ceil(this._containerHeight * a);
        this._stage.setBounds(new v(0, 0, e, f));
        this._stage.content.setBounds(new v(0, 0, e, f));
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
          var e = this._renderer;
          e.viewport = this.viewport ? this.viewport : this._stage.getBounds();
          this._dispatchEvent("render");
          b = performance.now();
          e.render();
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
      a.prototype.getMousePosition = function(a, e) {
        var h = this._container, k = h.getBoundingClientRect(), d = this.getRatio(), h = new f(h.scrollWidth / k.width * (a.clientX - k.left) * d, h.scrollHeight / k.height * (a.clientY - k.top) * d);
        if (!e) {
          return h;
        }
        k = b.createIdentity();
        e.getTransform().getConcatenatedMatrix().inverse(k);
        k.transformPoint(h);
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
      a.prototype.screenShot = function(a, b) {
        return this._renderer.screenShot(a, b);
      };
      return a;
    }();
    r.Easel = a;
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(r) {
    var f = h.GFX.Geometry.Matrix;
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
    var v = function(h) {
      function a(a, f, m) {
        void 0 === m && (m = new b);
        h.call(this, a, f, m);
        this._canvas = document.createElement("canvas");
        this._container.appendChild(this._canvas);
        this._context = this._canvas.getContext("2d");
        this._listenForContainerSizeChanges();
      }
      __extends(a, h);
      a.prototype._listenForContainerSizeChanges = function() {
        var a = this._containerWidth, b = this._containerHeight;
        this._onContainerSizeChanged();
        var f = this;
        setInterval(function() {
          if (a !== f._containerWidth || b !== f._containerHeight) {
            f._onContainerSizeChanged(), a = f._containerWidth, b = f._containerHeight;
          }
        }, 10);
      };
      a.prototype._getRatio = function() {
        var a = window.devicePixelRatio || 1, b = 1;
        1 !== a && (b = a / 1);
        return b;
      };
      a.prototype._onContainerSizeChanged = function() {
        var a = this._getRatio(), b = Math.ceil(this._containerWidth * a), f = Math.ceil(this._containerHeight * a), h = this._canvas;
        0 < a ? (h.width = b * a, h.height = f * a, h.style.width = b + "px", h.style.height = f + "px") : (h.width = b, h.height = f);
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
        0 === this._options.layout && this._renderNodeSimple(this._context, this._stage, f.createIdentity());
        a.restore();
      };
      a.prototype._renderNodeSimple = function(a, b, f) {
        function h(b) {
          var c = b.getChildren();
          a.fillStyle = b.hasFlags(16) ? "red" : "white";
          var f = String(b.id);
          b instanceof r.RenderableText ? f = "T" + f : b instanceof r.RenderableShape ? f = "S" + f : b instanceof r.RenderableBitmap ? f = "B" + f : b instanceof r.RenderableVideo && (f = "V" + f);
          b instanceof r.Renderable && (f = f + " [" + b._parents.length + "]");
          b = a.measureText(f).width;
          a.fillText(f, l, u);
          if (c) {
            l += b + 4;
            d = Math.max(d, l + 20);
            for (f = 0;f < c.length;f++) {
              h(c[f]), f < c.length - 1 && (u += 18, u > p._canvas.height && (a.fillStyle = "gray", l = l - k + d + 8, k = d + 8, u = 0, a.fillStyle = "white"));
            }
            l -= b + 4;
          }
        }
        var p = this;
        a.save();
        a.font = "16px Arial";
        a.fillStyle = "white";
        var l = 0, u = 0, k = 0, d = 0;
        h(b);
        a.restore();
      };
      return a;
    }(r.Renderer);
    r.TreeRenderer = v;
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(r) {
    (function(f) {
      var b = h.GFX.BlurFilter, v = h.GFX.DropshadowFilter, p = h.GFX.Shape, a = h.GFX.Group, e = h.GFX.RenderableShape, n = h.GFX.RenderableMorphShape, m = h.GFX.RenderableBitmap, w = h.GFX.RenderableVideo, t = h.GFX.RenderableText, l = h.GFX.ColorMatrix, u = h.ShapeData, k = h.ArrayUtilities.DataBuffer, d = h.GFX.Stage, g = h.GFX.Geometry.Matrix, c = h.GFX.Geometry.Rectangle, q = function() {
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
      f.GFXChannelSerializer = q;
      q = function() {
        function a(b, c, e) {
          function g(a) {
            a = a.getBounds(!0);
            var c = b.easel.getRatio();
            a.scale(1 / c, 1 / c);
            a.snap();
            f.setBounds(a);
          }
          var f = this.stage = new d(128, 512);
          "undefined" !== typeof registerInspectorStage && registerInspectorStage(f);
          g(b.stage);
          b.stage.addEventListener(1, g);
          b.content = f.content;
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
          h.registerCSSFont(a, b, !inFirefox);
          inFirefox ? c(null) : window.setTimeout(c, 400);
        };
        a.prototype.registerImage = function(a, b, c, d, e) {
          this._registerAsset(a, b, this._decodeImage(c, d, e));
        };
        a.prototype.registerVideo = function(a) {
          this._registerAsset(a, 0, new w(a, this));
        };
        a.prototype._decodeImage = function(a, b, d) {
          var e = new Image, g = m.FromImage(e);
          e.src = URL.createObjectURL(new Blob([b], {type:h.getMIMETypeForImageType(a)}));
          e.onload = function() {
            g.setBounds(new c(0, 0, e.width, e.height));
            g.invalidate();
            d({width:e.width, height:e.height});
          };
          e.onerror = function() {
            d(null);
          };
          return g;
        };
        a.prototype.sendVideoPlaybackEvent = function(a, b, c) {
          this._easelHost.sendVideoPlaybackEvent(a, b, c);
        };
        return a;
      }();
      f.GFXChannelDeserializerContext = q;
      q = function() {
        function d() {
        }
        d.prototype.read = function() {
          for (var a = 0, b = this.input, c = 0, d = 0, e = 0, g = 0, f = 0, l = 0, k = 0, h = 0;0 < b.bytesAvailable;) {
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
                g++;
                this._readUpdateFrame();
                break;
              case 104:
                f++;
                this._readUpdateStage();
                break;
              case 105:
                l++;
                this._readUpdateNetStream();
                break;
              case 200:
                k++;
                this._readDrawToBitmap();
                break;
              case 106:
                h++, this._readRequestBitmapData();
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
          var a = this.input, b = d._temporaryReadColorMatrix, c = 1, e = 1, g = 1, f = 1, l = 0, k = 0, h = 0, m = 0;
          switch(a.readInt()) {
            case 0:
              return d._temporaryReadColorMatrixIdentity;
            case 1:
              f = a.readFloat();
              break;
            case 2:
              c = a.readFloat(), e = a.readFloat(), g = a.readFloat(), f = a.readFloat(), l = a.readInt(), k = a.readInt(), h = a.readInt(), m = a.readInt();
          }
          b.setMultipliersAndOffsets(c, e, g, f, l, k, h, m);
          return b;
        };
        d.prototype._readAsset = function() {
          var a = this.input.readInt(), b = this.inputAssets[a];
          this.inputAssets[a] = null;
          return b;
        };
        d.prototype._readUpdateGraphics = function() {
          for (var a = this.input, b = this.context, c = a.readInt(), d = a.readInt(), g = b._getAsset(c), f = this._readRectangle(), l = u.FromPlainObject(this._readAsset()), k = a.readInt(), h = [], m = 0;m < k;m++) {
            var p = a.readInt();
            h.push(b._getBitmapAsset(p));
          }
          if (g) {
            g.update(l, h, f);
          } else {
            a = l.morphCoordinates ? new n(c, l, h, f) : new e(c, l, h, f);
            for (m = 0;m < h.length;m++) {
              h[m] && h[m].addRenderableParent(a);
            }
            b._registerAsset(c, d, a);
          }
        };
        d.prototype._readUpdateBitmapData = function() {
          var a = this.input, b = this.context, c = a.readInt(), d = a.readInt(), e = b._getBitmapAsset(c), g = this._readRectangle(), a = a.readInt(), f = k.FromPlainObject(this._readAsset());
          e ? e.updateFromDataBuffer(a, f) : (e = m.FromDataBuffer(a, f, g), b._registerAsset(c, d, e));
        };
        d.prototype._readUpdateTextContent = function() {
          var a = this.input, b = this.context, c = a.readInt(), d = a.readInt(), e = b._getTextAsset(c), g = this._readRectangle(), f = this._readMatrix(), l = a.readInt(), h = a.readInt(), m = a.readInt(), n = a.readBoolean(), p = a.readInt(), q = a.readInt(), r = this._readAsset(), u = k.FromPlainObject(this._readAsset()), v = null, w = a.readInt();
          w && (v = new k(4 * w), a.readBytes(v, 4 * w));
          e ? (e.setBounds(g), e.setContent(r, u, f, v), e.setStyle(l, h, p, q), e.reflow(m, n)) : (e = new t(g), e.setContent(r, u, f, v), e.setStyle(l, h, p, q), e.reflow(m, n), b._registerAsset(c, d, e));
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
          a.stage.color = h.Color.FromARGB(b);
          a.stage.align = this.input.readInt();
          a.stage.scaleMode = this.input.readInt();
          b = this.input.readInt();
          this.input.readInt();
          c = this.input.readInt();
          a._easelHost.cursor = h.UI.toCSSCursor(c);
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
            for (var g = 0;g < d;g++) {
              var f = c.readInt();
              switch(f) {
                case 0:
                  e.push(new b(c.readFloat(), c.readFloat(), c.readInt()));
                  break;
                case 1:
                  e.push(new v(c.readFloat(), c.readFloat(), c.readFloat(), c.readFloat(), c.readInt(), c.readFloat(), c.readBoolean(), c.readBoolean(), c.readBoolean(), c.readInt(), c.readFloat()));
                  break;
                default:
                  h.Debug.somewhatImplemented(r.FilterType[f]);
              }
            }
            a.getLayer().filters = e;
          }
        };
        d.prototype._readUpdateFrame = function() {
          var b = this.input, c = this.context, d = b.readInt(), e = 0, g = c._nodes[d];
          g || (g = c._nodes[d] = new a);
          d = b.readInt();
          d & 1 && g.getTransform().setMatrix(this._readMatrix());
          d & 8 && g.getTransform().setColorMatrix(this._readColorMatrix());
          if (d & 64) {
            var f = b.readInt();
            0 <= f && (g.getLayer().mask = c._makeNode(f));
          }
          d & 128 && (g.clip = b.readInt());
          d & 32 && (e = b.readInt() / 65535, f = b.readInt(), 1 !== f && (g.getLayer().blendMode = f), this._readFilters(g), g.toggleFlags(65536, b.readBoolean()), g.toggleFlags(131072, b.readBoolean()), g.toggleFlags(262144, !!b.readInt()), g.toggleFlags(524288, !!b.readInt()));
          if (d & 4) {
            d = b.readInt();
            f = g;
            f.clearChildren();
            for (var l = 0;l < d;l++) {
              var k = b.readInt(), k = c._makeNode(k);
              f.addChild(k);
            }
          }
          e && (k = g.getChildren()[0], k instanceof p && (k.ratio = e));
        };
        d.prototype._readDrawToBitmap = function() {
          var a = this.input, b = this.context, c = a.readInt(), d = a.readInt(), e = a.readInt(), f, l, k;
          f = e & 1 ? this._readMatrix().clone() : g.createIdentity();
          e & 8 && (l = this._readColorMatrix());
          e & 16 && (k = this._readRectangle());
          e = a.readInt();
          a.readBoolean();
          a = b._getBitmapAsset(c);
          d = b._makeNode(d);
          a ? a.drawNode(d, f, l, e, k) : b._registerAsset(c, -1, m.FromNode(d, f, l, e, k));
        };
        d.prototype._readRequestBitmapData = function() {
          var a = this.output, b = this.context, c = this.input.readInt();
          b._getBitmapAsset(c).readImageData(a);
        };
        d._temporaryReadMatrix = g.createIdentity();
        d._temporaryReadRectangle = c.createEmpty();
        d._temporaryReadColorMatrix = l.createIdentity();
        d._temporaryReadColorMatrixIdentity = l.createIdentity();
        return d;
      }();
      f.GFXChannelDeserializer = q;
    })(r.GFX || (r.GFX = {}));
  })(h.Remoting || (h.Remoting = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(r) {
    var f = h.GFX.Geometry.Point, b = h.ArrayUtilities.DataBuffer, v = function() {
      function p(a) {
        this._easel = a;
        var b = a.transparent;
        this._group = a.world;
        this._content = null;
        this._fullscreen = !1;
        this._context = new h.Remoting.GFX.GFXChannelDeserializerContext(this, this._group, b);
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
        var e = this._easel.getMousePosition(a, this._content), e = new f(e.x, e.y), n = new b, m = new h.Remoting.GFX.GFXChannelSerializer;
        m.output = n;
        m.writeMouseEvent(a, e);
        this.onSendUpdates(n, []);
      };
      p.prototype._keyboardEventListener = function(a) {
        var e = new b, f = new h.Remoting.GFX.GFXChannelSerializer;
        f.output = e;
        f.writeKeyboardEvent(a);
        this.onSendUpdates(e, []);
      };
      p.prototype._addEventListeners = function() {
        for (var a = this._mouseEventListener.bind(this), b = this._keyboardEventListener.bind(this), f = p._mouseEvents, h = 0;h < f.length;h++) {
          window.addEventListener(f[h], a);
        }
        a = p._keyboardEvents;
        for (h = 0;h < a.length;h++) {
          window.addEventListener(a[h], b);
        }
        this._addFocusEventListeners();
        this._easel.addEventListener("resize", this._resizeEventListener.bind(this));
      };
      p.prototype._sendFocusEvent = function(a) {
        var e = new b, f = new h.Remoting.GFX.GFXChannelSerializer;
        f.output = e;
        f.writeFocusEvent(a);
        this.onSendUpdates(e, []);
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
      p.prototype.processUpdates = function(a, b, f) {
        void 0 === f && (f = null);
        var m = new h.Remoting.GFX.GFXChannelDeserializer;
        m.input = a;
        m.inputAssets = b;
        m.output = f;
        m.context = this._context;
        m.read();
      };
      p.prototype.processVideoControl = function(a, b, f) {
        var h = this._context, p = h._getVideoAsset(a);
        if (!p) {
          if (1 !== b) {
            return;
          }
          h.registerVideo(a);
          p = h._getVideoAsset(a);
        }
        return p.processControlRequest(b, f);
      };
      p.prototype.processRegisterFont = function(a, b, f) {
        this._context.registerFont(a, b, f);
      };
      p.prototype.processRegisterImage = function(a, b, f, h, p) {
        this._context.registerImage(a, b, f, h, p);
      };
      p.prototype.processFSCommand = function(a, b) {
      };
      p.prototype.processFrame = function() {
      };
      p.prototype.onVideoPlaybackEvent = function(a, b, f) {
        throw Error("This method is abstract");
      };
      p.prototype.sendVideoPlaybackEvent = function(a, b, f) {
        this.onVideoPlaybackEvent(a, b, f);
      };
      p._mouseEvents = h.Remoting.MouseEventNames;
      p._keyboardEvents = h.Remoting.KeyboardEventNames;
      return p;
    }();
    r.EaselHost = v;
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(r) {
    (function(f) {
      var b = h.ArrayUtilities.DataBuffer, v = h.CircularBuffer, p = h.Tools.Profiler.TimelineBuffer, a = function(a) {
        function f(b, h, n) {
          a.call(this, b);
          this._timelineRequests = Object.create(null);
          this._playerWindow = h;
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
        __extends(f, a);
        f.prototype.onSendUpdates = function(a, b) {
          var e = a.getBytes();
          this._playerWindow.postMessage({type:"gfx", updates:e, assets:b}, "*", [e.buffer]);
        };
        f.prototype.onDisplayParameters = function(a) {
          this._playerWindow.postMessage({type:"displayParameters", params:a}, "*");
        };
        f.prototype.onVideoPlaybackEvent = function(a, b, e) {
          this._playerWindow.postMessage({type:"videoPlayback", id:a, eventType:b, data:e}, "*");
        };
        f.prototype.requestTimeline = function(a, b) {
          return new Promise(function(e) {
            this._timelineRequests[a] = e;
            this._playerWindow.postMessage({type:"timeline", cmd:b, request:a}, "*");
          }.bind(this));
        };
        f.prototype._sendRegisterFontResponse = function(a, b) {
          this._playerWindow.postMessage({type:"registerFontResponse", requestId:a, result:b}, "*");
        };
        f.prototype._sendRegisterImageResponse = function(a, b) {
          this._playerWindow.postMessage({type:"registerImageResponse", requestId:a, result:b}, "*");
        };
        f.prototype.onWindowMessage = function(a, e) {
          void 0 === e && (e = !0);
          if ("object" === typeof a && null !== a) {
            if ("player" === a.type) {
              var f = b.FromArrayBuffer(a.updates.buffer);
              if (e) {
                this.processUpdates(f, a.assets);
              } else {
                var l = new b;
                this.processUpdates(f, a.assets, l);
                a.result = l.toPlainObject();
              }
            } else {
              "frame" !== a.type && ("videoControl" === a.type ? a.result = this.processVideoControl(a.id, a.eventType, a.data) : "registerFont" === a.type ? this.processRegisterFont(a.syncId, a.data, this._sendRegisterFontResponse.bind(this, a.requestId)) : "registerImage" === a.type ? this.processRegisterImage(a.syncId, a.symbolId, a.imageType, a.data, this._sendRegisterImageResponse.bind(this, a.requestId)) : "fscommand" !== a.type && "timelineResponse" === a.type && a.timeline && (a.timeline.__proto__ = 
              p.prototype, a.timeline._marks.__proto__ = v.prototype, a.timeline._times.__proto__ = v.prototype, this._timelineRequests[a.request](a.timeline)));
            }
          }
        };
        return f;
      }(r.EaselHost);
      f.WindowEaselHost = a;
    })(r.Window || (r.Window = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(r) {
    (function(f) {
      var b = h.ArrayUtilities.DataBuffer, v = function(f) {
        function a(a) {
          f.call(this, a);
          this._worker = h.Player.Test.FakeSyncWorker.instance;
          this._worker.addEventListener("message", this._onWorkerMessage.bind(this));
          this._worker.addEventListener("syncmessage", this._onSyncWorkerMessage.bind(this));
        }
        __extends(a, f);
        a.prototype.onSendUpdates = function(a, b) {
          var f = a.getBytes();
          this._worker.postMessage({type:"gfx", updates:f, assets:b}, [f.buffer]);
        };
        a.prototype.onDisplayParameters = function(a) {
          this._worker.postMessage({type:"displayParameters", params:a});
        };
        a.prototype.onVideoPlaybackEvent = function(a, b, f) {
          this._worker.postMessage({type:"videoPlayback", id:a, eventType:b, data:f});
        };
        a.prototype.requestTimeline = function(a, b) {
          var f;
          switch(a) {
            case "AVM2":
              f = h.AVM2.timelineBuffer;
              break;
            case "Player":
              f = h.Player.timelineBuffer;
              break;
            case "SWF":
              f = h.SWF.timelineBuffer;
          }
          "clear" === b && f && f.reset();
          return Promise.resolve(f);
        };
        a.prototype._sendRegisterFontResponse = function(a, b) {
          this._worker.postMessage({type:"registerFontResponse", requestId:a, result:b});
        };
        a.prototype._sendRegisterImageResponse = function(a, b) {
          this._worker.postMessage({type:"registerImageResponse", requestId:a, result:b});
        };
        a.prototype._onWorkerMessage = function(a, f) {
          void 0 === f && (f = !0);
          var h = a.data;
          if ("object" === typeof h && null !== h) {
            switch(h.type) {
              case "player":
                var p = b.FromArrayBuffer(h.updates.buffer);
                if (f) {
                  this.processUpdates(p, h.assets);
                } else {
                  var r = new b;
                  this.processUpdates(p, h.assets, r);
                  a.result = r.toPlainObject();
                  a.handled = !0;
                }
                break;
              case "videoControl":
                a.result = this.processVideoControl(h.id, h.eventType, h.data);
                a.handled = !0;
                break;
              case "registerFont":
                this.processRegisterFont(h.syncId, h.data, this._sendRegisterFontResponse.bind(this, h.requestId));
                a.handled = !0;
                break;
              case "registerImage":
                this.processRegisterImage(h.syncId, h.symbolId, h.imageType, h.data, this._sendRegisterImageResponse.bind(this, h.requestId)), a.handled = !0;
            }
          }
        };
        a.prototype._onSyncWorkerMessage = function(a) {
          return this._onWorkerMessage(a, !1);
        };
        return a;
      }(r.EaselHost);
      f.TestEaselHost = v;
    })(r.Test || (r.Test = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(r) {
    (function(f) {
      function b(a, b) {
        a.writeInt(b.length);
        a.writeRawBytes(b);
      }
      function r(a) {
        function e(a) {
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
                for (var g = 0;g < a.length;g++) {
                  e(a[g]);
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
                        for (g in a) {
                          f.writeUTF(g), e(a[g]);
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
        e(a);
        return f.getBytes();
      }
      function p(a) {
        var b = new n, e = a.readInt();
        a.readBytes(b, e);
        return b.getBytes();
      }
      function a(a) {
        var b = new n, f = a.readInt();
        a.readBytes(b, f);
        return e(b);
      }
      function e(a) {
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
              b[d] = e(a);
            }
            return b;
          case 7:
            for (b = {};f = a.readUTF();) {
              b[f] = e(a);
            }
            return b;
          case 8:
            return p(a).buffer;
          case 9:
            return p(a);
          case 11:
          ;
          case 10:
            return a = p(a), new m(a.buffer, a.length, 10 === b);
          case 12:
            return new Int32Array(p(a).buffer);
        }
      }
      var n = h.ArrayUtilities.DataBuffer, m = h.ArrayUtilities.PlainObjectDataBuffer, w;
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
      })(f.MovieRecordType || (f.MovieRecordType = {}));
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
        a.prototype.recordPlayerCommand = function(a, e, d) {
          var f = new n;
          b(f, e);
          f.writeInt(d.length);
          d.forEach(function(a) {
            a = r(a);
            b(f, a);
          });
          this._createRecord(a ? 2 : 1, f);
        };
        a.prototype.recordFrame = function() {
          this._createRecord(3, null);
        };
        a.prototype.recordFont = function(a, e) {
          var d = new n;
          d.writeInt(a);
          b(d, e);
          this._createRecord(4, d);
        };
        a.prototype.recordImage = function(a, e, d, f) {
          var c = new n;
          c.writeInt(a);
          c.writeInt(e);
          c.writeInt(d);
          b(c, f);
          this._createRecord(5, c);
        };
        a.prototype.recordFSCommand = function(a, b) {
          var d = new n;
          d.writeUTF(a);
          d.writeUTF(b || "");
          this._createRecord(6, d);
        };
        return a;
      }();
      f.MovieRecorder = w;
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
          var a = this._buffer.readInt(), b = this._buffer.readInt(), d = this._buffer.readInt(), e = null;
          0 < d && (e = new n, this._buffer.readBytes(e, d));
          this.currentTimestamp = a;
          this.currentType = b;
          this.currentData = e;
          return b;
        };
        b.prototype.parsePlayerCommand = function() {
          for (var b = p(this.currentData), e = this.currentData.readInt(), d = [], f = 0;f < e;f++) {
            d.push(a(this.currentData));
          }
          return {updates:b, assets:d};
        };
        b.prototype.parseFSCommand = function() {
          var a = this.currentData.readUTF(), b = this.currentData.readUTF();
          return {command:a, args:b};
        };
        b.prototype.parseFont = function() {
          var b = this.currentData.readInt(), e = a(this.currentData);
          return {syncId:b, data:e};
        };
        b.prototype.parseImage = function() {
          var b = this.currentData.readInt(), e = this.currentData.readInt(), d = this.currentData.readInt(), f = a(this.currentData);
          return {syncId:b, symbolId:e, imageType:d, data:f};
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
      f.MovieRecordParser = t;
    })(r.Test || (r.Test = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(r) {
    (function(f) {
      var b = h.ArrayUtilities.DataBuffer, v = function(h) {
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
          this._parser = new f.MovieRecordParser(a);
          this._lastTimestamp = 0;
          this._parseNext();
        };
        a.prototype.onSendUpdates = function(a, b) {
        };
        a.prototype.onDisplayParameters = function(a) {
        };
        a.prototype.onVideoPlaybackEvent = function(a, b, f) {
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
          var a, f = performance.now();
          switch(this._parser.currentType) {
            case 1:
            ;
            case 2:
              a = this._parser.parsePlayerCommand();
              var h = 2 === this._parser.currentType, p = b.FromArrayBuffer(a.updates.buffer);
              h ? this.processUpdates(p, a.assets) : (h = new b, this.processUpdates(p, a.assets, h));
              break;
            case 3:
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
              break;
            default:
              throw Error("Invalid movie record type");;
          }
          this.cpuTimeUpdates += performance.now() - f;
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
      f.PlaybackEaselHost = v;
    })(r.Test || (r.Test = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(f) {
      var b = function(b) {
        function h(a, e) {
          void 0 === e && (e = 0);
          b.call(this, a);
          this._recorder = null;
          this._recorder = new f.MovieRecorder(e);
        }
        __extends(h, b);
        Object.defineProperty(h.prototype, "recorder", {get:function() {
          return this._recorder;
        }, enumerable:!0, configurable:!0});
        h.prototype._onWorkerMessage = function(a, e) {
          void 0 === e && (e = !0);
          var f = a.data;
          if ("object" === typeof f && null !== f) {
            switch(f.type) {
              case "player":
                this._recorder.recordPlayerCommand(e, f.updates, f.assets);
                break;
              case "frame":
                this._recorder.recordFrame();
                break;
              case "registerFont":
                this._recorder.recordFont(f.syncId, f.data);
                break;
              case "registerImage":
                this._recorder.recordImage(f.syncId, f.symbolId, f.imageType, f.data);
                break;
              case "fscommand":
                this._recorder.recordFSCommand(f.command, f.args);
            }
            b.prototype._onWorkerMessage.call(this, a, e);
          }
        };
        return h;
      }(f.TestEaselHost);
      f.RecordingEaselHost = b;
    })(h.Test || (h.Test = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
console.timeEnd("Load GFX Dependencies");

