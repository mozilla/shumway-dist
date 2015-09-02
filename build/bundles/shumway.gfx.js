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
Shumway$$inline_0.version = "0.11.498";
Shumway$$inline_0.build = "3cdaf18";
var jsGlobal = function() {
  return this || (0,eval)("this//# sourceURL=jsGlobal-getter");
}(), inBrowser = "undefined" !== typeof window && "document" in window && "plugins" in window.document, inFirefox = "undefined" !== typeof navigator && 0 <= navigator.userAgent.indexOf("Firefox");
jsGlobal.performance || (jsGlobal.performance = {});
jsGlobal.performance.now || (jsGlobal.performance.now = function() {
  return Date.now();
});
function lazyInitializer(f, q, t) {
  Object.defineProperty(f, q, {get:function() {
    var a = t();
    Object.defineProperty(f, q, {value:a, configurable:!0, enumerable:!0});
    return a;
  }, configurable:!0, enumerable:!0});
}
var START_TIME = performance.now();
(function(f) {
  function q(d) {
    return (d | 0) === d;
  }
  function t(d) {
    return "object" === typeof d || "function" === typeof d;
  }
  function a(d) {
    return String(Number(d)) === d;
  }
  function w(d) {
    var c = 0;
    if ("number" === typeof d) {
      return c = d | 0, d === c && 0 <= c ? !0 : d >>> 0 === d;
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
    if (g > f.UINT32_CHAR_BUFFER_LENGTH) {
      return !1;
    }
    var k = 0, c = d.charCodeAt(k++) - 48;
    if (1 > c || 9 < c) {
      return !1;
    }
    for (var y = 0, p = 0;k < g;) {
      p = d.charCodeAt(k++) - 48;
      if (0 > p || 9 < p) {
        return !1;
      }
      y = c;
      c = 10 * c + p;
    }
    return y < f.UINT32_MAX_DIV_10 || y === f.UINT32_MAX_DIV_10 && p <= f.UINT32_MAX_MOD_10 ? !0 : !1;
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
  })(f.CharacterCodes || (f.CharacterCodes = {}));
  f.UINT32_CHAR_BUFFER_LENGTH = 10;
  f.UINT32_MAX = 4294967295;
  f.UINT32_MAX_DIV_10 = 429496729;
  f.UINT32_MAX_MOD_10 = 5;
  f.isString = function(d) {
    return "string" === typeof d;
  };
  f.isFunction = function(d) {
    return "function" === typeof d;
  };
  f.isNumber = function(d) {
    return "number" === typeof d;
  };
  f.isInteger = q;
  f.isArray = function(d) {
    return d instanceof Array;
  };
  f.isNumberOrString = function(d) {
    return "number" === typeof d || "string" === typeof d;
  };
  f.isObject = t;
  f.toNumber = function(d) {
    return +d;
  };
  f.isNumericString = a;
  f.isNumeric = function(d) {
    if ("number" === typeof d) {
      return !0;
    }
    if ("string" === typeof d) {
      var c = d.charCodeAt(0);
      return 65 <= c && 90 >= c || 97 <= c && 122 >= c || 36 === c || 95 === c ? !1 : w(d) || a(d);
    }
    return !1;
  };
  f.isIndex = w;
  f.isNullOrUndefined = function(d) {
    return void 0 == d;
  };
  f.argumentsToString = function(d) {
    for (var c = [], g = 0;g < d.length;g++) {
      var k = d[g];
      try {
        var y;
        y = "object" === typeof k && k ? "toString" in k ? k.toString() : Object.prototype.toString.call(k) : k + "";
        c.push(y);
      } catch (p) {
        c.push("<unprintable value>");
      }
    }
    return c.join(", ");
  };
  var n;
  (function(d) {
    d.error = function(c) {
      console.error(c);
      throw Error(c);
    };
    d.assert = function(c, g) {
      void 0 === g && (g = "assertion failed");
      "" === c && (c = !0);
      if (!c) {
        if ("undefined" !== typeof console && "assert" in console) {
          throw console.assert(!1, g), Error(g);
        }
        d.error(g.toString());
      }
    };
    d.assertUnreachable = function(c) {
      var g = Error().stack.split("\n")[1];
      throw Error("Reached unreachable location " + g + c);
    };
    d.assertNotImplemented = function(c, g) {
      c || d.error("notImplemented: " + g);
    };
    var c = Object.create(null);
    d.warning = function(c, g, d) {
    };
    d.warnCounts = function() {
      var k = [], g;
      for (g in c) {
        k.push({key:g, count:c[g]});
      }
      k.sort(function(c, k) {
        return k.count - c.count;
      });
      return k.reduce(function(c, k) {
        return c + ("\n" + k.count + "\t" + k.key);
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
  })(n = f.Debug || (f.Debug = {}));
  f.getTicks = function() {
    return performance.now();
  };
  (function(d) {
    function c(c, g) {
      for (var d = 0, b = c.length;d < b;d++) {
        if (c[d] === g) {
          return d;
        }
      }
      c.push(g);
      return c.length - 1;
    }
    d.popManyInto = function(c, g, d) {
      for (var b = g - 1;0 <= b;b--) {
        d[b] = c.pop();
      }
      d.length = g;
    };
    d.popMany = function(c, g) {
      var d = c.length - g, b = c.slice(d, this.length);
      c.length = d;
      return b;
    };
    d.popManyIntoVoid = function(c, g) {
      c.length -= g;
    };
    d.pushMany = function(c, g) {
      for (var d = 0;d < g.length;d++) {
        c.push(g[d]);
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
    d.indexOf = function(c, g) {
      for (var d = 0, b = c.length;d < b;d++) {
        if (c[d] === g) {
          return d;
        }
      }
      return -1;
    };
    d.equals = function(c, g) {
      if (c.length !== g.length) {
        return !1;
      }
      for (var d = 0;d < c.length;d++) {
        if (c[d] !== g[d]) {
          return !1;
        }
      }
      return !0;
    };
    d.pushUnique = c;
    d.unique = function(k) {
      for (var g = [], d = 0;d < k.length;d++) {
        c(g, k[d]);
      }
      return g;
    };
    d.copyFrom = function(c, g) {
      c.length = 0;
      d.pushMany(c, g);
    };
    d.ensureTypedArrayCapacity = function(c, g) {
      if (c.length < g) {
        var d = c;
        c = new c.constructor(f.IntegerUtilities.nearestPowerOfTwo(g));
        c.set(d, 0);
      }
      return c;
    };
    d.memCopy = function(c, g, d, b, a) {
      void 0 === d && (d = 0);
      void 0 === b && (b = 0);
      void 0 === a && (a = 0);
      0 < b || 0 < a && a < g.length ? (0 >= a && (a = g.length - b), c.set(g.subarray(b, b + a), d)) : c.set(g, d);
    };
    var g = function() {
      function c(g) {
        void 0 === g && (g = 16);
        this._f32 = this._i32 = this._u16 = this._u8 = null;
        this._offset = 0;
        this.ensureCapacity(g);
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
      c.prototype.write4Floats = function(c, g, k, d) {
        this.ensureCapacity(this._offset + 16);
        this.write4FloatsUnsafe(c, g, k, d);
      };
      c.prototype.write4FloatsUnsafe = function(c, g, k, d) {
        var b = this._offset >> 2;
        this._f32[b + 0] = c;
        this._f32[b + 1] = g;
        this._f32[b + 2] = k;
        this._f32[b + 3] = d;
        this._offset += 16;
      };
      c.prototype.write6Floats = function(c, g, k, d, b, a) {
        this.ensureCapacity(this._offset + 24);
        this.write6FloatsUnsafe(c, g, k, d, b, a);
      };
      c.prototype.write6FloatsUnsafe = function(c, g, k, d, b, a) {
        var h = this._offset >> 2;
        this._f32[h + 0] = c;
        this._f32[h + 1] = g;
        this._f32[h + 2] = k;
        this._f32[h + 3] = d;
        this._f32[h + 4] = b;
        this._f32[h + 5] = a;
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
      c.prototype.hashWords = function(c, g, k) {
        g = this._i32;
        for (var d = 0;d < k;d++) {
          c = (31 * c | 0) + g[d] | 0;
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
    d.ArrayWriter = g;
  })(f.ArrayUtilities || (f.ArrayUtilities = {}));
  var b = function() {
    function d(c) {
      this._u8 = new Uint8Array(c);
      this._u16 = new Uint16Array(c);
      this._i32 = new Int32Array(c);
      this._f32 = new Float32Array(c);
      this._offset = 0;
    }
    Object.defineProperty(d.prototype, "offset", {get:function() {
      return this._offset;
    }, enumerable:!0, configurable:!0});
    d.prototype.isEmpty = function() {
      return this._offset === this._u8.length;
    };
    d.prototype.readInt = function() {
      var c = this._i32[this._offset >> 2];
      this._offset += 4;
      return c;
    };
    d.prototype.readFloat = function() {
      var c = this._f32[this._offset >> 2];
      this._offset += 4;
      return c;
    };
    return d;
  }();
  f.ArrayReader = b;
  (function(d) {
    function c(c, g) {
      return Object.prototype.hasOwnProperty.call(c, g);
    }
    function g(g, d) {
      for (var p in d) {
        c(d, p) && (g[p] = d[p]);
      }
    }
    d.boxValue = function(c) {
      return void 0 == c || t(c) ? c : Object(c);
    };
    d.toKeyValueArray = function(c) {
      var g = Object.prototype.hasOwnProperty, d = [], b;
      for (b in c) {
        g.call(c, b) && d.push([b, c[b]]);
      }
      return d;
    };
    d.isPrototypeWriteable = function(c) {
      return Object.getOwnPropertyDescriptor(c, "prototype").writable;
    };
    d.hasOwnProperty = c;
    d.propertyIsEnumerable = function(c, g) {
      return Object.prototype.propertyIsEnumerable.call(c, g);
    };
    d.getPropertyDescriptor = function(c, g) {
      do {
        var d = Object.getOwnPropertyDescriptor(c, g);
        if (d) {
          return d;
        }
        c = Object.getPrototypeOf(c);
      } while (c);
      return null;
    };
    d.hasOwnGetter = function(c, g) {
      var d = Object.getOwnPropertyDescriptor(c, g);
      return !(!d || !d.get);
    };
    d.getOwnGetter = function(c, g) {
      var d = Object.getOwnPropertyDescriptor(c, g);
      return d ? d.get : null;
    };
    d.hasOwnSetter = function(c, g) {
      var d = Object.getOwnPropertyDescriptor(c, g);
      return !(!d || !d.set);
    };
    d.createMap = function() {
      return Object.create(null);
    };
    d.createArrayMap = function() {
      return [];
    };
    d.defineReadOnlyProperty = function(c, g, d) {
      Object.defineProperty(c, g, {value:d, writable:!1, configurable:!0, enumerable:!1});
    };
    d.getOwnPropertyDescriptors = function(c) {
      for (var g = d.createMap(), p = Object.getOwnPropertyNames(c), b = 0;b < p.length;b++) {
        g[p[b]] = Object.getOwnPropertyDescriptor(c, p[b]);
      }
      return g;
    };
    d.cloneObject = function(c) {
      var d = Object.create(Object.getPrototypeOf(c));
      g(d, c);
      return d;
    };
    d.copyProperties = function(c, g) {
      for (var d in g) {
        c[d] = g[d];
      }
    };
    d.copyOwnProperties = g;
    d.copyOwnPropertyDescriptors = function(g, d, p, b, a) {
      void 0 === p && (p = null);
      void 0 === b && (b = !0);
      void 0 === a && (a = !1);
      for (var h in d) {
        if (c(d, h) && (!p || p(h))) {
          var e = Object.getOwnPropertyDescriptor(d, h);
          if (b || !c(g, h)) {
            try {
              a && !1 === e.writable && (e.writable = !0), Object.defineProperty(g, h, e);
            } catch (v) {
              n.assert("Can't define: " + h);
            }
          }
        }
      }
    };
    d.copyPropertiesByList = function(c, g, d) {
      for (var b = 0;b < d.length;b++) {
        var a = d[b];
        c[a] = g[a];
      }
    };
    d.getLatestGetterOrSetterPropertyDescriptor = function(c, g) {
      for (var d = {};c;) {
        var b = Object.getOwnPropertyDescriptor(c, g);
        b && (d.get = d.get || b.get, d.set = d.set || b.set);
        if (d.get && d.set) {
          break;
        }
        c = Object.getPrototypeOf(c);
      }
      return d;
    };
    d.defineNonEnumerableGetterOrSetter = function(c, g, p, b) {
      var a = d.getLatestGetterOrSetterPropertyDescriptor(c, g);
      a.configurable = !0;
      a.enumerable = !1;
      b ? a.get = p : a.set = p;
      Object.defineProperty(c, g, a);
    };
    d.defineNonEnumerableGetter = function(c, g, d) {
      Object.defineProperty(c, g, {get:d, configurable:!0, enumerable:!1});
    };
    d.defineNonEnumerableSetter = function(c, g, d) {
      Object.defineProperty(c, g, {set:d, configurable:!0, enumerable:!1});
    };
    d.defineNonEnumerableProperty = function(c, g, d) {
      Object.defineProperty(c, g, {value:d, writable:!0, configurable:!0, enumerable:!1});
    };
    d.defineNonEnumerableForwardingProperty = function(c, g, d) {
      Object.defineProperty(c, g, {get:h.makeForwardingGetter(d), set:h.makeForwardingSetter(d), writable:!0, configurable:!0, enumerable:!1});
    };
    d.defineNewNonEnumerableProperty = function(c, g, p) {
      d.defineNonEnumerableProperty(c, g, p);
    };
    d.createPublicAliases = function(c, g) {
      for (var d = {value:null, writable:!0, configurable:!0, enumerable:!1}, b = 0;b < g.length;b++) {
        var a = g[b];
        d.value = c[a];
        Object.defineProperty(c, "$Bg" + a, d);
      }
    };
  })(f.ObjectUtilities || (f.ObjectUtilities = {}));
  var h;
  (function(d) {
    d.makeForwardingGetter = function(c) {
      return new Function('return this["' + c + '"]//# sourceURL=fwd-get-' + c + ".as");
    };
    d.makeForwardingSetter = function(c) {
      return new Function("value", 'this["' + c + '"] = value;//# sourceURL=fwd-set-' + c + ".as");
    };
    d.bindSafely = function(c, g) {
      function k() {
        return c.apply(g, arguments);
      }
      k.boundTo = g;
      return k;
    };
  })(h = f.FunctionUtilities || (f.FunctionUtilities = {}));
  (function(d) {
    function c(c) {
      return "string" === typeof c ? '"' + c + '"' : "number" === typeof c || "boolean" === typeof c ? String(c) : c instanceof Array ? "[] " + c.length : typeof c;
    }
    function g(c, g, k) {
      y[0] = c;
      y[1] = g;
      y[2] = k;
      return y.join("");
    }
    function k(c, g, k, d) {
      p[0] = c;
      p[1] = g;
      p[2] = k;
      p[3] = d;
      return p.join("");
    }
    d.repeatString = function(c, g) {
      for (var k = "", d = 0;d < g;d++) {
        k += c;
      }
      return k;
    };
    d.memorySizeToString = function(c) {
      c |= 0;
      return 1024 > c ? c + " B" : 1048576 > c ? (c / 1024).toFixed(2) + "KB" : (c / 1048576).toFixed(2) + "MB";
    };
    d.toSafeString = c;
    d.toSafeArrayString = function(g) {
      for (var k = [], d = 0;d < g.length;d++) {
        k.push(c(g[d]));
      }
      return k.join(", ");
    };
    d.utf8decode = function(c) {
      for (var g = new Uint8Array(4 * c.length), k = 0, d = 0, y = c.length;d < y;d++) {
        var p = c.charCodeAt(d);
        if (127 >= p) {
          g[k++] = p;
        } else {
          if (55296 <= p && 56319 >= p) {
            var b = c.charCodeAt(d + 1);
            56320 <= b && 57343 >= b && (p = ((p & 1023) << 10) + (b & 1023) + 65536, ++d);
          }
          0 !== (p & 4292870144) ? (g[k++] = 248 | p >>> 24 & 3, g[k++] = 128 | p >>> 18 & 63, g[k++] = 128 | p >>> 12 & 63, g[k++] = 128 | p >>> 6 & 63) : 0 !== (p & 4294901760) ? (g[k++] = 240 | p >>> 18 & 7, g[k++] = 128 | p >>> 12 & 63, g[k++] = 128 | p >>> 6 & 63) : 0 !== (p & 4294965248) ? (g[k++] = 224 | p >>> 12 & 15, g[k++] = 128 | p >>> 6 & 63) : g[k++] = 192 | p >>> 6 & 31;
          g[k++] = 128 | p & 63;
        }
      }
      return g.subarray(0, k);
    };
    d.utf8encode = function(c) {
      for (var g = 0, k = "";g < c.length;) {
        var d = c[g++] & 255;
        if (127 >= d) {
          k += String.fromCharCode(d);
        } else {
          var y = 192, p = 5;
          do {
            if ((d & (y >> 1 | 128)) === y) {
              break;
            }
            y = y >> 1 | 128;
            --p;
          } while (0 <= p);
          if (0 >= p) {
            k += String.fromCharCode(d);
          } else {
            for (var d = d & (1 << p) - 1, y = !1, b = 5;b >= p;--b) {
              var a = c[g++];
              if (128 != (a & 192)) {
                y = !0;
                break;
              }
              d = d << 6 | a & 63;
            }
            if (y) {
              for (p = g - (7 - b);p < g;++p) {
                k += String.fromCharCode(c[p] & 255);
              }
            } else {
              k = 65536 <= d ? k + String.fromCharCode(d - 65536 >> 10 & 1023 | 55296, d & 1023 | 56320) : k + String.fromCharCode(d);
            }
          }
        }
      }
      return k;
    };
    d.base64ArrayBuffer = function(c) {
      var d = "";
      c = new Uint8Array(c);
      for (var y = c.byteLength, p = y % 3, y = y - p, b, a, h, I, L = 0;L < y;L += 3) {
        I = c[L] << 16 | c[L + 1] << 8 | c[L + 2], b = (I & 16515072) >> 18, a = (I & 258048) >> 12, h = (I & 4032) >> 6, I &= 63, d += k("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[b], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[a], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[h], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[I]);
      }
      1 == p ? (I = c[y], d += g("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(I & 252) >> 2], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(I & 3) << 4], "==")) : 2 == p && (I = c[y] << 8 | c[y + 1], d += k("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(I & 64512) >> 10], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(I & 1008) >> 4], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(I & 15) << 
      2], "="));
      return d;
    };
    d.escapeString = function(c) {
      void 0 !== c && (c = c.replace(/[^\w$]/gi, "$"), /^\d/.test(c) && (c = "$" + c));
      return c;
    };
    d.fromCharCodeArray = function(c) {
      for (var g = "", k = 0;k < c.length;k += 16384) {
        var d = Math.min(c.length - k, 16384), g = g + String.fromCharCode.apply(null, c.subarray(k, k + d))
      }
      return g;
    };
    d.variableLengthEncodeInt32 = function(c) {
      for (var g = 32 - Math.clz32(c), k = Math.ceil(g / 6), g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[k], k = k - 1;0 <= k;k--) {
        g += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[c >> 6 * k & 63];
      }
      return g;
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
      for (var g = d.fromEncoding(c.charCodeAt(0)), k = 0, y = 0;y < g;y++) {
        var p = 6 * (g - y - 1), k = k | d.fromEncoding(c.charCodeAt(1 + y)) << p
      }
      return k;
    };
    d.trimMiddle = function(c, g) {
      if (c.length <= g) {
        return c;
      }
      var k = g >> 1, d = g - k - 1;
      return c.substr(0, k) + "\u2026" + c.substr(c.length - d, d);
    };
    d.multiple = function(c, g) {
      for (var k = "", d = 0;d < g;d++) {
        k += c;
      }
      return k;
    };
    d.indexOfAny = function(c, g, k) {
      for (var d = c.length, y = 0;y < g.length;y++) {
        var p = c.indexOf(g[y], k);
        0 <= p && (d = Math.min(d, p));
      }
      return d === c.length ? -1 : d;
    };
    var y = Array(3), p = Array(4), b = Array(5), a = Array(6), h = Array(7), e = Array(8), v = Array(9);
    d.concat3 = g;
    d.concat4 = k;
    d.concat5 = function(c, g, k, d, y) {
      b[0] = c;
      b[1] = g;
      b[2] = k;
      b[3] = d;
      b[4] = y;
      return b.join("");
    };
    d.concat6 = function(c, g, k, d, y, p) {
      a[0] = c;
      a[1] = g;
      a[2] = k;
      a[3] = d;
      a[4] = y;
      a[5] = p;
      return a.join("");
    };
    d.concat7 = function(c, g, k, d, y, p, b) {
      h[0] = c;
      h[1] = g;
      h[2] = k;
      h[3] = d;
      h[4] = y;
      h[5] = p;
      h[6] = b;
      return h.join("");
    };
    d.concat8 = function(c, g, k, d, y, p, b, a) {
      e[0] = c;
      e[1] = g;
      e[2] = k;
      e[3] = d;
      e[4] = y;
      e[5] = p;
      e[6] = b;
      e[7] = a;
      return e.join("");
    };
    d.concat9 = function(c, g, k, d, y, p, b, a, h) {
      v[0] = c;
      v[1] = g;
      v[2] = k;
      v[3] = d;
      v[4] = y;
      v[5] = p;
      v[6] = b;
      v[7] = a;
      v[8] = h;
      return v.join("");
    };
  })(f.StringUtilities || (f.StringUtilities = {}));
  (function(d) {
    var c = new Uint8Array([7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21]), g = new Int32Array([-680876936, -389564586, 606105819, -1044525330, -176418897, 1200080426, -1473231341, -45705983, 1770035416, -1958414417, -42063, -1990404162, 1804603682, -40341101, -1502002290, 1236535329, -165796510, -1069501632, 
    643717713, -373897302, -701558691, 38016083, -660478335, -405537848, 568446438, -1019803690, -187363961, 1163531501, -1444681467, -51403784, 1735328473, -1926607734, -378558, -2022574463, 1839030562, -35309556, -1530992060, 1272893353, -155497632, -1094730640, 681279174, -358537222, -722521979, 76029189, -640364487, -421815835, 530742520, -995338651, -198630844, 1126891415, -1416354905, -57434055, 1700485571, -1894986606, -1051523, -2054922799, 1873313359, -30611744, -1560198380, 1309151649, 
    -145523070, -1120210379, 718787259, -343485551]);
    d.hashBytesTo32BitsMD5 = function(k, d, p) {
      var b = 1732584193, a = -271733879, h = -1732584194, e = 271733878, v = p + 72 & -64, m = new Uint8Array(v), l;
      for (l = 0;l < p;++l) {
        m[l] = k[d++];
      }
      m[l++] = 128;
      for (k = v - 8;l < k;) {
        m[l++] = 0;
      }
      m[l++] = p << 3 & 255;
      m[l++] = p >> 5 & 255;
      m[l++] = p >> 13 & 255;
      m[l++] = p >> 21 & 255;
      m[l++] = p >>> 29 & 255;
      m[l++] = 0;
      m[l++] = 0;
      m[l++] = 0;
      k = new Int32Array(16);
      for (l = 0;l < v;) {
        for (p = 0;16 > p;++p, l += 4) {
          k[p] = m[l] | m[l + 1] << 8 | m[l + 2] << 16 | m[l + 3] << 24;
        }
        var r = b;
        d = a;
        var n = h, x = e, u, f;
        for (p = 0;64 > p;++p) {
          16 > p ? (u = d & n | ~d & x, f = p) : 32 > p ? (u = x & d | ~x & n, f = 5 * p + 1 & 15) : 48 > p ? (u = d ^ n ^ x, f = 3 * p + 5 & 15) : (u = n ^ (d | ~x), f = 7 * p & 15);
          var w = x, r = r + u + g[p] + k[f] | 0;
          u = c[p];
          x = n;
          n = d;
          d = d + (r << u | r >>> 32 - u) | 0;
          r = w;
        }
        b = b + r | 0;
        a = a + d | 0;
        h = h + n | 0;
        e = e + x | 0;
      }
      return b;
    };
    d.hashBytesTo32BitsAdler = function(c, g, d) {
      var b = 1, a = 0;
      for (d = g + d;g < d;++g) {
        b = (b + (c[g] & 255)) % 65521, a = (a + b) % 65521;
      }
      return a << 16 | b;
    };
    d.mixHash = function(c, g) {
      return (31 * c | 0) + g | 0;
    };
  })(f.HashUtilities || (f.HashUtilities = {}));
  var l = function() {
    function d(c) {
      this._data = Object.create(null);
      this._size = 0;
      this._maxSize = c;
    }
    d.prototype.get = function(c) {
      return this._data[c];
    };
    d.prototype.set = function(c, g) {
      if (this._size >= this._maxSize) {
        return !1;
      }
      this._data[c] = g;
      this._size++;
      return !0;
    };
    return d;
  }();
  f.Cache = l;
  var e = function() {
    function d() {
    }
    d.seed = function(c) {
      d._state[0] = c;
      d._state[1] = c;
    };
    d.reset = function() {
      d._state[0] = 57005;
      d._state[1] = 48879;
    };
    d.next = function() {
      var c = this._state, g = Math.imul(18273, c[0] & 65535) + (c[0] >>> 16) | 0;
      c[0] = g;
      var k = Math.imul(36969, c[1] & 65535) + (c[1] >>> 16) | 0;
      c[1] = k;
      c = (g << 16) + (k & 65535) | 0;
      return 2.3283064365386963E-10 * (0 > c ? c + 4294967296 : c);
    };
    d._state = new Uint32Array([57005, 48879]);
    return d;
  }();
  f.Random = e;
  Math.random = function() {
    return e.next();
  };
  f.installTimeWarper = function() {
    var d = Date, c = 1428107694580;
    jsGlobal.Date = function(g, k, y, p, b, a, h) {
      switch(arguments.length) {
        case 0:
          return new d(c);
        case 1:
          return new d(g);
        case 2:
          return new d(g, k);
        case 3:
          return new d(g, k, y);
        case 4:
          return new d(g, k, y, p);
        case 5:
          return new d(g, k, y, p, b);
        case 6:
          return new d(g, k, y, p, b, a);
        default:
          return new d(g, k, y, p, b, a, h);
      }
    };
    jsGlobal.Date.now = function() {
      return c += 10;
    };
    jsGlobal.Date.UTC = function() {
      return d.UTC.apply(d, arguments);
    };
  };
  (function() {
    function d() {
      this.id = "$weakmap" + c++;
    }
    if ("function" !== typeof jsGlobal.WeakMap) {
      var c = 0;
      d.prototype = {has:function(c) {
        return c.hasOwnProperty(this.id);
      }, get:function(c, k) {
        return c.hasOwnProperty(this.id) ? c[this.id] : k;
      }, set:function(c, k) {
        Object.defineProperty(c, this.id, {value:k, enumerable:!1, configurable:!0});
      }, delete:function(c) {
        delete c[this.id];
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
    d.prototype.push = function(c) {
      this._map ? (this._map.set(c, this._id++), this._newAdditions.forEach(function(g) {
        g.push(c);
      })) : this._list.push(c);
    };
    d.prototype.remove = function(c) {
      this._map ? this._map.delete(c) : this._list[this._list.indexOf(c)] = null;
    };
    d.prototype.forEach = function(c) {
      if (this._map) {
        var g = [];
        this._newAdditions.push(g);
        var k = this._map, d = ShumwayCom.getWeakMapKeys(k);
        d.sort(function(c, g) {
          return k.get(c) - k.get(g);
        });
        d.forEach(function(g) {
          0 !== g._referenceCount && c(g);
        });
        g.forEach(function(g) {
          0 !== g._referenceCount && c(g);
        });
        this._newAdditions.splice(this._newAdditions.indexOf(g), 1);
      } else {
        for (var g = this._list, p = 0, d = 0;d < g.length;d++) {
          var b = g[d];
          b && (0 === b._referenceCount ? (g[d] = null, p++) : c(b));
        }
        if (16 < p && p > g.length >> 2) {
          p = [];
          for (d = 0;d < g.length;d++) {
            (b = g[d]) && 0 < b._referenceCount && p.push(b);
          }
          this._list = p;
        }
      }
    };
    Object.defineProperty(d.prototype, "length", {get:function() {
      return this._map ? -1 : this._list.length;
    }, enumerable:!0, configurable:!0});
    return d;
  }();
  f.WeakList = b;
  var r;
  (function(d) {
    d.pow2 = function(c) {
      return c === (c | 0) ? 0 > c ? 1 / (1 << -c) : 1 << c : Math.pow(2, c);
    };
    d.clamp = function(c, g, k) {
      return Math.max(g, Math.min(k, c));
    };
    d.roundHalfEven = function(c) {
      if (.5 === Math.abs(c % 1)) {
        var g = Math.floor(c);
        return 0 === g % 2 ? g : Math.ceil(c);
      }
      return Math.round(c);
    };
    d.altTieBreakRound = function(c, g) {
      return .5 !== Math.abs(c % 1) || g ? Math.round(c) : c | 0;
    };
    d.epsilonEquals = function(c, g) {
      return 1E-7 > Math.abs(c - g);
    };
  })(r = f.NumberUtilities || (f.NumberUtilities = {}));
  (function(d) {
    d[d.MaxU16 = 65535] = "MaxU16";
    d[d.MaxI16 = 32767] = "MaxI16";
    d[d.MinI16 = -32768] = "MinI16";
  })(f.Numbers || (f.Numbers = {}));
  var u;
  (function(d) {
    function c(c) {
      return 256 * c << 16 >> 16;
    }
    function g(c) {
      return c / 256;
    }
    var k = new ArrayBuffer(8);
    d.i8 = new Int8Array(k);
    d.u8 = new Uint8Array(k);
    d.i32 = new Int32Array(k);
    d.f32 = new Float32Array(k);
    d.f64 = new Float64Array(k);
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
    d.toS8U8 = c;
    d.fromS8U8 = g;
    d.clampS8U8 = function(k) {
      return g(c(k));
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
    d.getFlags = function(c, g) {
      var k = "";
      for (c = 0;c < g.length;c++) {
        c & 1 << c && (k += g[c] + " ");
      }
      return 0 === k.length ? "" : k.trim();
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
    d.roundToMultipleOfPowerOfTwo = function(c, g) {
      var k = (1 << g) - 1;
      return c + k & ~k;
    };
    d.toHEX = function(c) {
      return "0x" + ("00000000" + (0 > c ? 4294967295 + c + 1 : c).toString(16)).substr(-8);
    };
    Math.imul || (Math.imul = function(c, g) {
      var k = c & 65535, d = g & 65535;
      return k * d + ((c >>> 16 & 65535) * d + k * (g >>> 16 & 65535) << 16 >>> 0) | 0;
    });
    Math.clz32 || (Math.clz32 = function(c) {
      c |= c >> 1;
      c |= c >> 2;
      c |= c >> 4;
      c |= c >> 8;
      return 32 - d.ones(c | c >> 16);
    });
  })(u = f.IntegerUtilities || (f.IntegerUtilities = {}));
  (function(d) {
    function c(c, k, d, p, b, a) {
      return (d - c) * (a - k) - (p - k) * (b - c);
    }
    d.pointInPolygon = function(c, k, d) {
      for (var p = 0, b = d.length - 2, a = 0;a < b;a += 2) {
        var h = d[a + 0], e = d[a + 1], v = d[a + 2], l = d[a + 3];
        (e <= k && l > k || e > k && l <= k) && c < h + (k - e) / (l - e) * (v - h) && p++;
      }
      return 1 === (p & 1);
    };
    d.signedArea = c;
    d.counterClockwise = function(g, k, d, p, b, a) {
      return 0 < c(g, k, d, p, b, a);
    };
    d.clockwise = function(g, k, d, p, b, a) {
      return 0 > c(g, k, d, p, b, a);
    };
    d.pointInPolygonInt32 = function(c, k, d) {
      c |= 0;
      k |= 0;
      for (var p = 0, b = d.length - 2, a = 0;a < b;a += 2) {
        var h = d[a + 0], e = d[a + 1], v = d[a + 2], l = d[a + 3];
        (e <= k && l > k || e > k && l <= k) && c < h + (k - e) / (l - e) * (v - h) && p++;
      }
      return 1 === (p & 1);
    };
  })(f.GeometricUtilities || (f.GeometricUtilities = {}));
  (function(d) {
    d[d.Error = 1] = "Error";
    d[d.Warn = 2] = "Warn";
    d[d.Debug = 4] = "Debug";
    d[d.Log = 8] = "Log";
    d[d.Info = 16] = "Info";
    d[d.All = 31] = "All";
  })(f.LogLevel || (f.LogLevel = {}));
  b = function() {
    function d(c, g) {
      void 0 === c && (c = !1);
      this._tab = "  ";
      this._padding = "";
      this._suppressOutput = c;
      this._out = g || d._consoleOut;
      this._outNoNewline = g || d._consoleOutNoNewline;
    }
    Object.defineProperty(d.prototype, "suppressOutput", {get:function() {
      return this._suppressOutput;
    }, set:function(c) {
      this._suppressOutput = c;
    }, enumerable:!0, configurable:!0});
    d.prototype.write = function(c, g) {
      void 0 === c && (c = "");
      void 0 === g && (g = !1);
      this._suppressOutput || this._outNoNewline((g ? this._padding : "") + c);
    };
    d.prototype.writeLn = function(c) {
      void 0 === c && (c = "");
      this._suppressOutput || this._out(this._padding + c);
    };
    d.prototype.writeObject = function(c, g) {
      void 0 === c && (c = "");
      this._suppressOutput || this._out(this._padding + c, g);
    };
    d.prototype.writeTimeLn = function(c) {
      void 0 === c && (c = "");
      this._suppressOutput || this._out(this._padding + performance.now().toFixed(2) + " " + c);
    };
    d.prototype.writeComment = function(c) {
      c = (c || "").split("\n");
      if (1 === c.length) {
        this.writeLn("// " + c[0]);
      } else {
        this.writeLn("/**");
        for (var g = 0;g < c.length;g++) {
          this.writeLn(" * " + c[g]);
        }
        this.writeLn(" */");
      }
    };
    d.prototype.writeLns = function(c) {
      c = (c || "").split("\n");
      for (var g = 0;g < c.length;g++) {
        this.writeLn(c[g]);
      }
    };
    d.prototype.errorLn = function(c) {
      d.logLevel & 1 && this.boldRedLn(c);
    };
    d.prototype.warnLn = function(c) {
      d.logLevel & 2 && this.yellowLn(c);
    };
    d.prototype.debugLn = function(c) {
      d.logLevel & 4 && this.purpleLn(c);
    };
    d.prototype.logLn = function(c) {
      d.logLevel & 8 && this.writeLn(c);
    };
    d.prototype.infoLn = function(c) {
      d.logLevel & 16 && this.writeLn(c);
    };
    d.prototype.yellowLn = function(c) {
      this.colorLn(d.YELLOW, c);
    };
    d.prototype.greenLn = function(c) {
      this.colorLn(d.GREEN, c);
    };
    d.prototype.boldRedLn = function(c) {
      this.colorLn(d.BOLD_RED, c);
    };
    d.prototype.redLn = function(c) {
      this.colorLn(d.RED, c);
    };
    d.prototype.purpleLn = function(c) {
      this.colorLn(d.PURPLE, c);
    };
    d.prototype.colorLn = function(c, g) {
      this._suppressOutput || (inBrowser ? this._out(this._padding + g) : this._out(this._padding + c + g + d.ENDC));
    };
    d.prototype.redLns = function(c) {
      this.colorLns(d.RED, c);
    };
    d.prototype.colorLns = function(c, g) {
      for (var k = (g || "").split("\n"), d = 0;d < k.length;d++) {
        this.colorLn(c, k[d]);
      }
    };
    d.prototype.enter = function(c) {
      this._suppressOutput || this._out(this._padding + c);
      this.indent();
    };
    d.prototype.leaveAndEnter = function(c) {
      this.leave(c);
      this.indent();
    };
    d.prototype.leave = function(c) {
      this.outdent();
      !this._suppressOutput && c && this._out(this._padding + c);
    };
    d.prototype.indent = function() {
      this._padding += this._tab;
    };
    d.prototype.outdent = function() {
      0 < this._padding.length && (this._padding = this._padding.substring(0, this._padding.length - this._tab.length));
    };
    d.prototype.writeArray = function(c, g, k) {
      void 0 === g && (g = !1);
      void 0 === k && (k = !1);
      g = g || !1;
      for (var d = 0, p = c.length;d < p;d++) {
        var b = "";
        g && (b = null === c[d] ? "null" : void 0 === c[d] ? "undefined" : c[d].constructor.name, b += " ");
        var a = k ? "" : ("" + d).padRight(" ", 4);
        this.writeLn(a + b + c[d]);
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
  f.IndentingWriter = b;
  var m = function() {
    return function(d, c) {
      this.value = d;
      this.next = c;
    };
  }(), b = function() {
    function d(c) {
      this._compare = c;
      this._head = null;
      this._length = 0;
    }
    d.prototype.push = function(c) {
      this._length++;
      if (this._head) {
        var g = this._head, k = null;
        c = new m(c, null);
        for (var d = this._compare;g;) {
          if (0 < d(g.value, c.value)) {
            k ? (c.next = g, k.next = c) : (c.next = this._head, this._head = c);
            return;
          }
          k = g;
          g = g.next;
        }
        k.next = c;
      } else {
        this._head = new m(c, null);
      }
    };
    d.prototype.forEach = function(c) {
      for (var g = this._head, k = null;g;) {
        var b = c(g.value);
        if (b === d.RETURN) {
          break;
        } else {
          b === d.DELETE ? g = k ? k.next = g.next : this._head = this._head.next : (k = g, g = g.next);
        }
      }
    };
    d.prototype.isEmpty = function() {
      return !this._head;
    };
    d.prototype.pop = function() {
      if (this._head) {
        this._length--;
        var c = this._head;
        this._head = this._head.next;
        return c.value;
      }
    };
    d.prototype.contains = function(c) {
      for (var g = this._head;g;) {
        if (g.value === c) {
          return !0;
        }
        g = g.next;
      }
      return !1;
    };
    d.prototype.toString = function() {
      for (var c = "[", g = this._head;g;) {
        c += g.value.toString(), (g = g.next) && (c += ",");
      }
      return c + "]";
    };
    d.RETURN = 1;
    d.DELETE = 2;
    return d;
  }();
  f.SortedList = b;
  b = function() {
    function d(c, g) {
      void 0 === g && (g = 12);
      this.start = this.index = 0;
      this._size = 1 << g;
      this._mask = this._size - 1;
      this.array = new c(this._size);
    }
    d.prototype.get = function(c) {
      return this.array[c];
    };
    d.prototype.forEachInReverse = function(c) {
      if (!this.isEmpty()) {
        for (var g = 0 === this.index ? this._size - 1 : this.index - 1, k = this.start - 1 & this._mask;g !== k && !c(this.array[g], g);) {
          g = 0 === g ? this._size - 1 : g - 1;
        }
      }
    };
    d.prototype.write = function(c) {
      this.array[this.index] = c;
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
  f.CircularBuffer = b;
  (function(d) {
    function c(c) {
      return c + (d.BITS_PER_WORD - 1) >> d.ADDRESS_BITS_PER_WORD << d.ADDRESS_BITS_PER_WORD;
    }
    function g(c, g) {
      c = c || "1";
      g = g || "0";
      for (var k = "", d = 0;d < length;d++) {
        k += this.get(d) ? c : g;
      }
      return k;
    }
    function k(c) {
      for (var g = [], k = 0;k < length;k++) {
        this.get(k) && g.push(c ? c[k] : k);
      }
      return g.join(", ");
    }
    d.ADDRESS_BITS_PER_WORD = 5;
    d.BITS_PER_WORD = 1 << d.ADDRESS_BITS_PER_WORD;
    d.BIT_INDEX_MASK = d.BITS_PER_WORD - 1;
    var b = function() {
      function g(k) {
        this.size = c(k);
        this.dirty = this.count = 0;
        this.length = k;
        this.bits = new Uint32Array(this.size >> d.ADDRESS_BITS_PER_WORD);
      }
      g.prototype.recount = function() {
        if (this.dirty) {
          for (var c = this.bits, g = 0, k = 0, d = c.length;k < d;k++) {
            var p = c[k], p = p - (p >> 1 & 1431655765), p = (p & 858993459) + (p >> 2 & 858993459), g = g + (16843009 * (p + (p >> 4) & 252645135) >> 24)
          }
          this.count = g;
          this.dirty = 0;
        }
      };
      g.prototype.set = function(c) {
        var g = c >> d.ADDRESS_BITS_PER_WORD, k = this.bits[g];
        c = k | 1 << (c & d.BIT_INDEX_MASK);
        this.bits[g] = c;
        this.dirty |= k ^ c;
      };
      g.prototype.setAll = function() {
        for (var c = this.bits, g = 0, k = c.length;g < k;g++) {
          c[g] = 4294967295;
        }
        this.count = this.size;
        this.dirty = 0;
      };
      g.prototype.assign = function(c) {
        this.count = c.count;
        this.dirty = c.dirty;
        this.size = c.size;
        for (var g = 0, k = this.bits.length;g < k;g++) {
          this.bits[g] = c.bits[g];
        }
      };
      g.prototype.clear = function(c) {
        var g = c >> d.ADDRESS_BITS_PER_WORD, k = this.bits[g];
        c = k & ~(1 << (c & d.BIT_INDEX_MASK));
        this.bits[g] = c;
        this.dirty |= k ^ c;
      };
      g.prototype.get = function(c) {
        return 0 !== (this.bits[c >> d.ADDRESS_BITS_PER_WORD] & 1 << (c & d.BIT_INDEX_MASK));
      };
      g.prototype.clearAll = function() {
        for (var c = this.bits, g = 0, k = c.length;g < k;g++) {
          c[g] = 0;
        }
        this.dirty = this.count = 0;
      };
      g.prototype._union = function(c) {
        var g = this.dirty, k = this.bits;
        c = c.bits;
        for (var d = 0, p = k.length;d < p;d++) {
          var b = k[d], a = b | c[d];
          k[d] = a;
          g |= b ^ a;
        }
        this.dirty = g;
      };
      g.prototype.intersect = function(c) {
        var g = this.dirty, k = this.bits;
        c = c.bits;
        for (var d = 0, p = k.length;d < p;d++) {
          var b = k[d], a = b & c[d];
          k[d] = a;
          g |= b ^ a;
        }
        this.dirty = g;
      };
      g.prototype.subtract = function(c) {
        var g = this.dirty, k = this.bits;
        c = c.bits;
        for (var d = 0, p = k.length;d < p;d++) {
          var b = k[d], a = b & ~c[d];
          k[d] = a;
          g |= b ^ a;
        }
        this.dirty = g;
      };
      g.prototype.negate = function() {
        for (var c = this.dirty, g = this.bits, k = 0, d = g.length;k < d;k++) {
          var p = g[k], b = ~p;
          g[k] = b;
          c |= p ^ b;
        }
        this.dirty = c;
      };
      g.prototype.forEach = function(c) {
        for (var g = this.bits, k = 0, p = g.length;k < p;k++) {
          var b = g[k];
          if (b) {
            for (var a = 0;a < d.BITS_PER_WORD;a++) {
              b & 1 << a && c(k * d.BITS_PER_WORD + a);
            }
          }
        }
      };
      g.prototype.toArray = function() {
        for (var c = [], g = this.bits, k = 0, p = g.length;k < p;k++) {
          var b = g[k];
          if (b) {
            for (var a = 0;a < d.BITS_PER_WORD;a++) {
              b & 1 << a && c.push(k * d.BITS_PER_WORD + a);
            }
          }
        }
        return c;
      };
      g.prototype.equals = function(c) {
        if (this.size !== c.size) {
          return !1;
        }
        var g = this.bits;
        c = c.bits;
        for (var k = 0, d = g.length;k < d;k++) {
          if (g[k] !== c[k]) {
            return !1;
          }
        }
        return !0;
      };
      g.prototype.contains = function(c) {
        if (this.size !== c.size) {
          return !1;
        }
        var g = this.bits;
        c = c.bits;
        for (var k = 0, d = g.length;k < d;k++) {
          if ((g[k] | c[k]) !== g[k]) {
            return !1;
          }
        }
        return !0;
      };
      g.prototype.isEmpty = function() {
        this.recount();
        return 0 === this.count;
      };
      g.prototype.clone = function() {
        var c = new g(this.length);
        c._union(this);
        return c;
      };
      return g;
    }();
    d.Uint32ArrayBitSet = b;
    var p = function() {
      function g(k) {
        this.dirty = this.count = 0;
        this.size = c(k);
        this.bits = 0;
        this.singleWord = !0;
        this.length = k;
      }
      g.prototype.recount = function() {
        if (this.dirty) {
          var c = this.bits, c = c - (c >> 1 & 1431655765), c = (c & 858993459) + (c >> 2 & 858993459);
          this.count = 0 + (16843009 * (c + (c >> 4) & 252645135) >> 24);
          this.dirty = 0;
        }
      };
      g.prototype.set = function(c) {
        var g = this.bits;
        this.bits = c = g | 1 << (c & d.BIT_INDEX_MASK);
        this.dirty |= g ^ c;
      };
      g.prototype.setAll = function() {
        this.bits = 4294967295;
        this.count = this.size;
        this.dirty = 0;
      };
      g.prototype.assign = function(c) {
        this.count = c.count;
        this.dirty = c.dirty;
        this.size = c.size;
        this.bits = c.bits;
      };
      g.prototype.clear = function(c) {
        var g = this.bits;
        this.bits = c = g & ~(1 << (c & d.BIT_INDEX_MASK));
        this.dirty |= g ^ c;
      };
      g.prototype.get = function(c) {
        return 0 !== (this.bits & 1 << (c & d.BIT_INDEX_MASK));
      };
      g.prototype.clearAll = function() {
        this.dirty = this.count = this.bits = 0;
      };
      g.prototype._union = function(c) {
        var g = this.bits;
        this.bits = c = g | c.bits;
        this.dirty = g ^ c;
      };
      g.prototype.intersect = function(c) {
        var g = this.bits;
        this.bits = c = g & c.bits;
        this.dirty = g ^ c;
      };
      g.prototype.subtract = function(c) {
        var g = this.bits;
        this.bits = c = g & ~c.bits;
        this.dirty = g ^ c;
      };
      g.prototype.negate = function() {
        var c = this.bits, g = ~c;
        this.bits = g;
        this.dirty = c ^ g;
      };
      g.prototype.forEach = function(c) {
        var g = this.bits;
        if (g) {
          for (var k = 0;k < d.BITS_PER_WORD;k++) {
            g & 1 << k && c(k);
          }
        }
      };
      g.prototype.toArray = function() {
        var c = [], g = this.bits;
        if (g) {
          for (var k = 0;k < d.BITS_PER_WORD;k++) {
            g & 1 << k && c.push(k);
          }
        }
        return c;
      };
      g.prototype.equals = function(c) {
        return this.bits === c.bits;
      };
      g.prototype.contains = function(c) {
        var g = this.bits;
        return (g | c.bits) === g;
      };
      g.prototype.isEmpty = function() {
        this.recount();
        return 0 === this.count;
      };
      g.prototype.clone = function() {
        var c = new g(this.length);
        c._union(this);
        return c;
      };
      return g;
    }();
    d.Uint32BitSet = p;
    p.prototype.toString = k;
    p.prototype.toBitString = g;
    b.prototype.toString = k;
    b.prototype.toBitString = g;
    d.BitSetFunctor = function(g) {
      var k = 1 === c(g) >> d.ADDRESS_BITS_PER_WORD ? p : b;
      return function() {
        return new k(g);
      };
    };
  })(f.BitSets || (f.BitSets = {}));
  b = function() {
    function d() {
    }
    d.randomStyle = function() {
      d._randomStyleCache || (d._randomStyleCache = "#ff5e3a #ff9500 #ffdb4c #87fc70 #52edc7 #1ad6fd #c644fc #ef4db6 #4a4a4a #dbddde #ff3b30 #ff9500 #ffcc00 #4cd964 #34aadc #007aff #5856d6 #ff2d55 #8e8e93 #c7c7cc #5ad427 #c86edf #d1eefc #e0f8d8 #fb2b69 #f7f7f7 #1d77ef #d6cec3 #55efcb #ff4981 #ffd3e0 #f7f7f7 #ff1300 #1f1f21 #bdbec2 #ff3a2d".split(" "));
      return d._randomStyleCache[d._nextStyle++ % d._randomStyleCache.length];
    };
    d.gradientColor = function(c) {
      return d._gradient[d._gradient.length * r.clamp(c, 0, 1) | 0];
    };
    d.contrastStyle = function(c) {
      c = parseInt(c.substr(1), 16);
      return 128 <= (299 * (c >> 16) + 587 * (c >> 8 & 255) + 114 * (c & 255)) / 1E3 ? "#000000" : "#ffffff";
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
  f.ColorStyle = b;
  b = function() {
    function d(c, g, k, d) {
      this.xMin = c | 0;
      this.yMin = g | 0;
      this.xMax = k | 0;
      this.yMax = d | 0;
    }
    d.FromUntyped = function(c) {
      return new d(c.xMin, c.yMin, c.xMax, c.yMax);
    };
    d.FromRectangle = function(c) {
      return new d(20 * c.x | 0, 20 * c.y | 0, 20 * (c.x + c.width) | 0, 20 * (c.y + c.height) | 0);
    };
    d.prototype.setElements = function(c, g, k, d) {
      this.xMin = c;
      this.yMin = g;
      this.xMax = k;
      this.yMax = d;
    };
    d.prototype.copyFrom = function(c) {
      this.setElements(c.xMin, c.yMin, c.xMax, c.yMax);
    };
    d.prototype.contains = function(c, g) {
      return c < this.xMin !== c < this.xMax && g < this.yMin !== g < this.yMax;
    };
    d.prototype.unionInPlace = function(c) {
      c.isEmpty() || (this.extendByPoint(c.xMin, c.yMin), this.extendByPoint(c.xMax, c.yMax));
    };
    d.prototype.extendByPoint = function(c, g) {
      this.extendByX(c);
      this.extendByY(g);
    };
    d.prototype.extendByX = function(c) {
      134217728 === this.xMin ? this.xMin = this.xMax = c : (this.xMin = Math.min(this.xMin, c), this.xMax = Math.max(this.xMax, c));
    };
    d.prototype.extendByY = function(c) {
      134217728 === this.yMin ? this.yMin = this.yMax = c : (this.yMin = Math.min(this.yMin, c), this.yMax = Math.max(this.yMax, c));
    };
    d.prototype.intersects = function(c) {
      return this.contains(c.xMin, c.yMin) || this.contains(c.xMax, c.yMax);
    };
    d.prototype.isEmpty = function() {
      return this.xMax <= this.xMin || this.yMax <= this.yMin;
    };
    Object.defineProperty(d.prototype, "width", {get:function() {
      return this.xMax - this.xMin;
    }, set:function(c) {
      this.xMax = this.xMin + c;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "height", {get:function() {
      return this.yMax - this.yMin;
    }, set:function(c) {
      this.yMax = this.yMin + c;
    }, enumerable:!0, configurable:!0});
    d.prototype.getBaseWidth = function(c) {
      var g = Math.abs(Math.cos(c));
      c = Math.abs(Math.sin(c));
      return g * (this.xMax - this.xMin) + c * (this.yMax - this.yMin);
    };
    d.prototype.getBaseHeight = function(c) {
      var g = Math.abs(Math.cos(c));
      return Math.abs(Math.sin(c)) * (this.xMax - this.xMin) + g * (this.yMax - this.yMin);
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
  f.Bounds = b;
  b = function() {
    function d(c, g, k, d) {
      n.assert(q(c));
      n.assert(q(g));
      n.assert(q(k));
      n.assert(q(d));
      this._xMin = c | 0;
      this._yMin = g | 0;
      this._xMax = k | 0;
      this._yMax = d | 0;
    }
    d.FromUntyped = function(c) {
      return new d(c.xMin, c.yMin, c.xMax, c.yMax);
    };
    d.FromRectangle = function(c) {
      return new d(20 * c.x | 0, 20 * c.y | 0, 20 * (c.x + c.width) | 0, 20 * (c.y + c.height) | 0);
    };
    d.prototype.setElements = function(c, g, k, d) {
      this.xMin = c;
      this.yMin = g;
      this.xMax = k;
      this.yMax = d;
    };
    d.prototype.copyFrom = function(c) {
      this.setElements(c.xMin, c.yMin, c.xMax, c.yMax);
    };
    d.prototype.contains = function(c, g) {
      return c < this.xMin !== c < this.xMax && g < this.yMin !== g < this.yMax;
    };
    d.prototype.unionInPlace = function(c) {
      c.isEmpty() || (this.extendByPoint(c.xMin, c.yMin), this.extendByPoint(c.xMax, c.yMax));
    };
    d.prototype.extendByPoint = function(c, g) {
      this.extendByX(c);
      this.extendByY(g);
    };
    d.prototype.extendByX = function(c) {
      134217728 === this.xMin ? this.xMin = this.xMax = c : (this.xMin = Math.min(this.xMin, c), this.xMax = Math.max(this.xMax, c));
    };
    d.prototype.extendByY = function(c) {
      134217728 === this.yMin ? this.yMin = this.yMax = c : (this.yMin = Math.min(this.yMin, c), this.yMax = Math.max(this.yMax, c));
    };
    d.prototype.intersects = function(c) {
      return this.contains(c._xMin, c._yMin) || this.contains(c._xMax, c._yMax);
    };
    d.prototype.isEmpty = function() {
      return this._xMax <= this._xMin || this._yMax <= this._yMin;
    };
    Object.defineProperty(d.prototype, "xMin", {get:function() {
      return this._xMin;
    }, set:function(c) {
      n.assert(q(c));
      this._xMin = c;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "yMin", {get:function() {
      return this._yMin;
    }, set:function(c) {
      n.assert(q(c));
      this._yMin = c | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "xMax", {get:function() {
      return this._xMax;
    }, set:function(c) {
      n.assert(q(c));
      this._xMax = c | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "width", {get:function() {
      return this._xMax - this._xMin;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "yMax", {get:function() {
      return this._yMax;
    }, set:function(c) {
      n.assert(q(c));
      this._yMax = c | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "height", {get:function() {
      return this._yMax - this._yMin;
    }, enumerable:!0, configurable:!0});
    d.prototype.getBaseWidth = function(c) {
      var g = Math.abs(Math.cos(c));
      c = Math.abs(Math.sin(c));
      return g * (this._xMax - this._xMin) + c * (this._yMax - this._yMin);
    };
    d.prototype.getBaseHeight = function(c) {
      var g = Math.abs(Math.cos(c));
      return Math.abs(Math.sin(c)) * (this._xMax - this._xMin) + g * (this._yMax - this._yMin);
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
  f.DebugBounds = b;
  b = function() {
    function d(c, g, k, d) {
      this.r = c;
      this.g = g;
      this.b = k;
      this.a = d;
    }
    d.FromARGB = function(c) {
      return new d((c >> 16 & 255) / 255, (c >> 8 & 255) / 255, (c >> 0 & 255) / 255, (c >> 24 & 255) / 255);
    };
    d.FromRGBA = function(c) {
      return d.FromARGB(v.RGBAToARGB(c));
    };
    d.prototype.toRGBA = function() {
      return 255 * this.r << 24 | 255 * this.g << 16 | 255 * this.b << 8 | 255 * this.a;
    };
    d.prototype.toCSSStyle = function() {
      return v.rgbaToCSSStyle(this.toRGBA());
    };
    d.prototype.set = function(c) {
      this.r = c.r;
      this.g = c.g;
      this.b = c.b;
      this.a = c.a;
    };
    d.randomColor = function(c) {
      void 0 === c && (c = 1);
      return new d(Math.random(), Math.random(), Math.random(), c);
    };
    d.parseColor = function(c) {
      d.colorCache || (d.colorCache = Object.create(null));
      if (d.colorCache[c]) {
        return d.colorCache[c];
      }
      var g = document.createElement("span");
      document.body.appendChild(g);
      g.style.backgroundColor = c;
      var k = getComputedStyle(g).backgroundColor;
      document.body.removeChild(g);
      (g = /^rgb\((\d+), (\d+), (\d+)\)$/.exec(k)) || (g = /^rgba\((\d+), (\d+), (\d+), ([\d.]+)\)$/.exec(k));
      k = new d(0, 0, 0, 0);
      k.r = parseFloat(g[1]) / 255;
      k.g = parseFloat(g[2]) / 255;
      k.b = parseFloat(g[3]) / 255;
      k.a = g[4] ? parseFloat(g[4]) / 255 : 1;
      return d.colorCache[c] = k;
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
  f.Color = b;
  var v;
  (function(d) {
    function c(c) {
      var g = c >> 0 & 255, k = c >> 8 & 255, d = c >> 24 & 255;
      c = (Math.imul(c >> 16 & 255, d) + 127) / 255 | 0;
      k = (Math.imul(k, d) + 127) / 255 | 0;
      g = (Math.imul(g, d) + 127) / 255 | 0;
      return d << 24 | c << 16 | k << 8 | g;
    }
    function g() {
      if (!p) {
        p = new Uint8Array(65536);
        for (var c = 0;256 > c;c++) {
          for (var g = 0;256 > g;g++) {
            p[(g << 8) + c] = Math.imul(255, c) / g;
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
    var k = new l(1024);
    d.rgbaToCSSStyle = function(c) {
      var g = k.get(c);
      if ("string" === typeof g) {
        return g;
      }
      g = f.StringUtilities.concat9("rgba(", c >> 24 & 255, ",", c >> 16 & 255, ",", c >> 8 & 255, ",", (c & 255) / 255, ")");
      k.set(c, g);
      return g;
    };
    var b = new l(1024);
    d.cssStyleToRGBA = function(c) {
      var g = b.get(c);
      if ("number" === typeof g) {
        return g;
      }
      g = 4278190335;
      if ("#" === c[0]) {
        7 === c.length && (g = parseInt(c.substring(1), 16) << 8 | 255);
      } else {
        if ("r" === c[0]) {
          var k = c.substring(5, c.length - 1).split(","), g = parseInt(k[0]), d = parseInt(k[1]), p = parseInt(k[2]), k = parseFloat(k[3]), g = (g & 255) << 24 | (d & 255) << 16 | (p & 255) << 8 | 255 * k & 255
        }
      }
      b.set(c, g);
      return g;
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
      var g = c >> 0 & 255, k = c >> 8 & 255, d = c >> 24 & 255;
      c = Math.imul(255, c >> 16 & 255) / d & 255;
      k = Math.imul(255, k) / d & 255;
      g = Math.imul(255, g) / d & 255;
      return d << 24 | c << 16 | k << 8 | g;
    };
    d.premultiplyARGB = c;
    var p;
    d.ensureUnpremultiplyTable = g;
    d.getUnpremultiplyTable = function() {
      g();
      return p;
    };
    d.tableLookupUnpremultiplyARGB = function(c) {
      c |= 0;
      var g = c >> 24 & 255;
      if (0 === g) {
        return 0;
      }
      if (255 === g) {
        return c;
      }
      var k, d, b = g << 8, a = p;
      d = a[b + (c >> 16 & 255)];
      k = a[b + (c >> 8 & 255)];
      c = a[b + (c >> 0 & 255)];
      return g << 24 | d << 16 | k << 8 | c;
    };
    d.blendPremultipliedBGRA = function(c, g) {
      var k = g & 16711935, d = g >> 8 & 16711935, p, b = c >> 8 & 16711935, a = 256 - (g & 255);
      p = Math.imul(c & 16711935, a) >> 8;
      b = Math.imul(b, a) >> 8;
      return (d + b & 16711935) << 8 | k + p & 16711935;
    };
    var a = u.swap32;
    d.convertImage = function(g, k, d, b) {
      var y = d.length;
      if (g === k) {
        if (d !== b) {
          for (g = 0;g < y;g++) {
            b[g] = d[g];
          }
        }
      } else {
        if (1 === g && 3 === k) {
          for (f.ColorUtilities.ensureUnpremultiplyTable(), g = 0;g < y;g++) {
            var h = d[g];
            k = h & 255;
            if (0 === k) {
              b[g] = 0;
            } else {
              if (255 === k) {
                b[g] = 4278190080 | h >> 8 & 16777215;
              } else {
                var e = h >> 24 & 255, v = h >> 16 & 255, h = h >> 8 & 255, l = k << 8, m = p, h = m[l + h], v = m[l + v], e = m[l + e];
                b[g] = k << 24 | e << 16 | v << 8 | h;
              }
            }
          }
        } else {
          if (2 === g && 3 === k) {
            for (g = 0;g < y;g++) {
              b[g] = a(d[g]);
            }
          } else {
            if (3 === g && 1 === k) {
              for (g = 0;g < y;g++) {
                k = d[g], b[g] = a(c(k & 4278255360 | k >> 16 & 255 | (k & 255) << 16));
              }
            } else {
              for (n.somewhatImplemented("Image Format Conversion: " + x[g] + " -> " + x[k]), g = 0;g < y;g++) {
                b[g] = d[g];
              }
            }
          }
        }
      }
    };
  })(v = f.ColorUtilities || (f.ColorUtilities = {}));
  b = function() {
    function d(c) {
      void 0 === c && (c = 32);
      this._list = [];
      this._maxSize = c;
    }
    d.prototype.acquire = function(c) {
      if (d._enabled) {
        for (var g = this._list, k = 0;k < g.length;k++) {
          var b = g[k];
          if (b.byteLength >= c) {
            return g.splice(k, 1), b;
          }
        }
      }
      return new ArrayBuffer(c);
    };
    d.prototype.release = function(c) {
      if (d._enabled) {
        var g = this._list;
        g.length === this._maxSize && g.shift();
        g.push(c);
      }
    };
    d.prototype.ensureUint8ArrayLength = function(c, g) {
      if (c.length >= g) {
        return c;
      }
      var k = Math.max(c.length + g, (3 * c.length >> 1) + 1), k = new Uint8Array(this.acquire(k), 0, k);
      k.set(c);
      this.release(c.buffer);
      return k;
    };
    d.prototype.ensureFloat64ArrayLength = function(c, g) {
      if (c.length >= g) {
        return c;
      }
      var k = Math.max(c.length + g, (3 * c.length >> 1) + 1), k = new Float64Array(this.acquire(k * Float64Array.BYTES_PER_ELEMENT), 0, k);
      k.set(c);
      this.release(c.buffer);
      return k;
    };
    d._enabled = !0;
    return d;
  }();
  f.ArrayBufferPool = b;
  (function(d) {
    (function(c) {
      c[c.EXTERNAL_INTERFACE_FEATURE = 1] = "EXTERNAL_INTERFACE_FEATURE";
      c[c.CLIPBOARD_FEATURE = 2] = "CLIPBOARD_FEATURE";
      c[c.SHAREDOBJECT_FEATURE = 3] = "SHAREDOBJECT_FEATURE";
      c[c.VIDEO_FEATURE = 4] = "VIDEO_FEATURE";
      c[c.SOUND_FEATURE = 5] = "SOUND_FEATURE";
      c[c.NETCONNECTION_FEATURE = 6] = "NETCONNECTION_FEATURE";
    })(d.Feature || (d.Feature = {}));
    (function(c) {
      c[c.AVM1_ERROR = 1] = "AVM1_ERROR";
      c[c.AVM2_ERROR = 2] = "AVM2_ERROR";
    })(d.ErrorTypes || (d.ErrorTypes = {}));
    (function(c) {
      c[c.LoadSource = 0] = "LoadSource";
      c[c.LoadWhitelistAllowed = 1] = "LoadWhitelistAllowed";
      c[c.LoadWhitelistDenied = 2] = "LoadWhitelistDenied";
      c[c.StreamAllowed = 3] = "StreamAllowed";
      c[c.StreamDenied = 4] = "StreamDenied";
      c[c.StreamCrossdomain = 5] = "StreamCrossdomain";
    })(d.LoadResource || (d.LoadResource = {}));
    d.instance;
  })(f.Telemetry || (f.Telemetry = {}));
  (function(d) {
    d.instance;
  })(f.FileLoadingService || (f.FileLoadingService = {}));
  (function(d) {
    d[d.BuiltinAbc = 0] = "BuiltinAbc";
    d[d.PlayerglobalAbcs = 1] = "PlayerglobalAbcs";
    d[d.PlayerglobalManifest = 2] = "PlayerglobalManifest";
    d[d.ShellAbc = 3] = "ShellAbc";
  })(f.SystemResourceId || (f.SystemResourceId = {}));
  (function(d) {
    d.instance;
  })(f.SystemResourcesLoadingService || (f.SystemResourcesLoadingService = {}));
  f.registerCSSFont = function(d, c, g) {
    if (inBrowser) {
      var k = document.head;
      k.insertBefore(document.createElement("style"), k.firstChild);
      k = document.styleSheets[0];
      c = "@font-face{font-family:swffont" + d + ";src:url(data:font/opentype;base64," + f.StringUtilities.base64ArrayBuffer(c.buffer) + ")}";
      k.insertRule(c, k.cssRules.length);
      g && (g = document.createElement("div"), g.style.fontFamily = "swffont" + d, g.innerHTML = "hello", document.body.appendChild(g), document.body.removeChild(g));
    } else {
      n.warning("Cannot register CSS font outside the browser");
    }
  };
  f.registerFallbackFont = function() {
    var d = document.styleSheets[0];
    d.insertRule('@font-face{font-family:AdobeBlank;src:url("data:font/opentype;base64,T1RUTwAKAIAAAwAgQ0ZGIDTeCDQAACFkAAAZPERTSUcAAAABAABKqAAAAAhPUy8yAF+xmwAAARAAAABgY21hcCRDbtEAAAdcAAAZ6GhlYWQFl9tDAAAArAAAADZoaGVhB1oD7wAAAOQAAAAkaG10eAPoAHwAADqgAAAQBm1heHAIAVAAAAABCAAAAAZuYW1lIE0HkgAAAXAAAAXrcG9zdP+4ADIAACFEAAAAIAABAAAAAQuFfcPHtV8PPPUAAwPoAAAAANFMRfMAAAAA0UxF8wB8/4gDbANwAAAAAwACAAAAAAAAAAEAAANw/4gAAAPoAHwAfANsAAEAAAAAAAAAAAAAAAAAAAACAABQAAgBAAAAAwPoAZAABQAAAooCWAAAAEsCigJYAAABXgAyANwAAAAAAAAAAAAAAAD3/67/+9///w/gAD8AAAAAQURCTwBAAAD//wNw/4gAAANwAHhgLwH/AAAAAAAAAAAAAAAgAAAAAAARANIAAQAAAAAAAQALAAAAAQAAAAAAAgAHAAsAAQAAAAAAAwAbABIAAQAAAAAABAALAAAAAQAAAAAABQA6AC0AAQAAAAAABgAKAGcAAwABBAkAAACUAHEAAwABBAkAAQAWAQUAAwABBAkAAgAOARsAAwABBAkAAwA2ASkAAwABBAkABAAWAQUAAwABBAkABQB0AV8AAwABBAkABgAUAdMAAwABBAkACAA0AecAAwABBAkACwA0AhsAAwABBAkADQKWAk8AAwABBAkADgA0BOVBZG9iZSBCbGFua1JlZ3VsYXIxLjA0NTtBREJPO0Fkb2JlQmxhbms7QURPQkVWZXJzaW9uIDEuMDQ1O1BTIDEuMDQ1O2hvdGNvbnYgMS4wLjgyO21ha2VvdGYubGliMi41LjYzNDA2QWRvYmVCbGFuawBDAG8AcAB5AHIAaQBnAGgAdAAgAKkAIAAyADAAMQAzACwAIAAyADAAMQA1ACAAQQBkAG8AYgBlACAAUwB5AHMAdABlAG0AcwAgAEkAbgBjAG8AcgBwAG8AcgBhAHQAZQBkACAAKABoAHQAdABwADoALwAvAHcAdwB3AC4AYQBkAG8AYgBlAC4AYwBvAG0ALwApAC4AQQBkAG8AYgBlACAAQgBsAGEAbgBrAFIAZQBnAHUAbABhAHIAMQAuADAANAA1ADsAQQBEAEIATwA7AEEAZABvAGIAZQBCAGwAYQBuAGsAOwBBAEQATwBCAEUAVgBlAHIAcwBpAG8AbgAgADEALgAwADQANQA7AFAAUwAgADEALgAwADQANQA7AGgAbwB0AGMAbwBuAHYAIAAxAC4AMAAuADgAMgA7AG0AYQBrAGUAbwB0AGYALgBsAGkAYgAyAC4ANQAuADYAMwA0ADAANgBBAGQAbwBiAGUAQgBsAGEAbgBrAEEAZABvAGIAZQAgAFMAeQBzAHQAZQBtAHMAIABJAG4AYwBvAHIAcABvAHIAYQB0AGUAZABoAHQAdABwADoALwAvAHcAdwB3AC4AYQBkAG8AYgBlAC4AYwBvAG0ALwB0AHkAcABlAC8AVABoAGkAcwAgAEYAbwBuAHQAIABTAG8AZgB0AHcAYQByAGUAIABpAHMAIABsAGkAYwBlAG4AcwBlAGQAIAB1AG4AZABlAHIAIAB0AGgAZQAgAFMASQBMACAATwBwAGUAbgAgAEYAbwBuAHQAIABMAGkAYwBlAG4AcwBlACwAIABWAGUAcgBzAGkAbwBuACAAMQAuADEALgAgAFQAaABpAHMAIABGAG8AbgB0ACAAUwBvAGYAdAB3AGEAcgBlACAAaQBzACAAZABpAHMAdAByAGkAYgB1AHQAZQBkACAAbwBuACAAYQBuACAAIgBBAFMAIABJAFMAIgAgAEIAQQBTAEkAUwAsACAAVwBJAFQASABPAFUAVAAgAFcAQQBSAFIAQQBOAFQASQBFAFMAIABPAFIAIABDAE8ATgBEAEkAVABJAE8ATgBTACAATwBGACAAQQBOAFkAIABLAEkATgBEACwAIABlAGkAdABoAGUAcgAgAGUAeABwAHIAZQBzAHMAIABvAHIAIABpAG0AcABsAGkAZQBkAC4AIABTAGUAZQAgAHQAaABlACAAUwBJAEwAIABPAHAAZQBuACAARgBvAG4AdAAgAEwAaQBjAGUAbgBzAGUAIABmAG8AcgAgAHQAaABlACAAcwBwAGUAYwBpAGYAaQBjACAAbABhAG4AZwB1AGEAZwBlACwAIABwAGUAcgBtAGkAcwBzAGkAbwBuAHMAIABhAG4AZAAgAGwAaQBtAGkAdABhAHQAaQBvAG4AcwAgAGcAbwB2AGUAcgBuAGkAbgBnACAAeQBvAHUAcgAgAHUAcwBlACAAbwBmACAAdABoAGkAcwAgAEYAbwBuAHQAIABTAG8AZgB0AHcAYQByAGUALgBoAHQAdABwADoALwAvAHMAYwByAGkAcAB0AHMALgBzAGkAbAAuAG8AcgBnAC8ATwBGAEwAAAAABQAAAAMAAAA4AAAABAAAAFgAAQAAAAAALAADAAEAAAA4AAMACgAAAFgABgAMAAAAAAABAAAABAAgAAAABAAEAAEAAAf///8AAAAA//8AAQABAAAAAAAMAAAAABmQAAAAAAAAAiAAAAAAAAAH/wAAAAEAAAgAAAAP/wAAAAEAABAAAAAX/wAAAAEAABgAAAAf/wAAAAEAACAAAAAn/wAAAAEAACgAAAAv/wAAAAEAADAAAAA3/wAAAAEAADgAAAA//wAAAAEAAEAAAABH/wAAAAEAAEgAAABP/wAAAAEAAFAAAABX/wAAAAEAAFgAAABf/wAAAAEAAGAAAABn/wAAAAEAAGgAAABv/wAAAAEAAHAAAAB3/wAAAAEAAHgAAAB//wAAAAEAAIAAAACH/wAAAAEAAIgAAACP/wAAAAEAAJAAAACX/wAAAAEAAJgAAACf/wAAAAEAAKAAAACn/wAAAAEAAKgAAACv/wAAAAEAALAAAAC3/wAAAAEAALgAAAC//wAAAAEAAMAAAADH/wAAAAEAAMgAAADP/wAAAAEAANAAAADX/wAAAAEAAOAAAADn/wAAAAEAAOgAAADv/wAAAAEAAPAAAAD3/wAAAAEAAPgAAAD9zwAAAAEAAP3wAAD//QAABfEAAQAAAAEH/wAAAAEAAQgAAAEP/wAAAAEAARAAAAEX/wAAAAEAARgAAAEf/wAAAAEAASAAAAEn/wAAAAEAASgAAAEv/wAAAAEAATAAAAE3/wAAAAEAATgAAAE//wAAAAEAAUAAAAFH/wAAAAEAAUgAAAFP/wAAAAEAAVAAAAFX/wAAAAEAAVgAAAFf/wAAAAEAAWAAAAFn/wAAAAEAAWgAAAFv/wAAAAEAAXAAAAF3/wAAAAEAAXgAAAF//wAAAAEAAYAAAAGH/wAAAAEAAYgAAAGP/wAAAAEAAZAAAAGX/wAAAAEAAZgAAAGf/wAAAAEAAaAAAAGn/wAAAAEAAagAAAGv/wAAAAEAAbAAAAG3/wAAAAEAAbgAAAG//wAAAAEAAcAAAAHH/wAAAAEAAcgAAAHP/wAAAAEAAdAAAAHX/wAAAAEAAdgAAAHf/wAAAAEAAeAAAAHn/wAAAAEAAegAAAHv/wAAAAEAAfAAAAH3/wAAAAEAAfgAAAH//QAAAAEAAgAAAAIH/wAAAAEAAggAAAIP/wAAAAEAAhAAAAIX/wAAAAEAAhgAAAIf/wAAAAEAAiAAAAIn/wAAAAEAAigAAAIv/wAAAAEAAjAAAAI3/wAAAAEAAjgAAAI//wAAAAEAAkAAAAJH/wAAAAEAAkgAAAJP/wAAAAEAAlAAAAJX/wAAAAEAAlgAAAJf/wAAAAEAAmAAAAJn/wAAAAEAAmgAAAJv/wAAAAEAAnAAAAJ3/wAAAAEAAngAAAJ//wAAAAEAAoAAAAKH/wAAAAEAAogAAAKP/wAAAAEAApAAAAKX/wAAAAEAApgAAAKf/wAAAAEAAqAAAAKn/wAAAAEAAqgAAAKv/wAAAAEAArAAAAK3/wAAAAEAArgAAAK//wAAAAEAAsAAAALH/wAAAAEAAsgAAALP/wAAAAEAAtAAAALX/wAAAAEAAtgAAALf/wAAAAEAAuAAAALn/wAAAAEAAugAAALv/wAAAAEAAvAAAAL3/wAAAAEAAvgAAAL//QAAAAEAAwAAAAMH/wAAAAEAAwgAAAMP/wAAAAEAAxAAAAMX/wAAAAEAAxgAAAMf/wAAAAEAAyAAAAMn/wAAAAEAAygAAAMv/wAAAAEAAzAAAAM3/wAAAAEAAzgAAAM//wAAAAEAA0AAAANH/wAAAAEAA0gAAANP/wAAAAEAA1AAAANX/wAAAAEAA1gAAANf/wAAAAEAA2AAAANn/wAAAAEAA2gAAANv/wAAAAEAA3AAAAN3/wAAAAEAA3gAAAN//wAAAAEAA4AAAAOH/wAAAAEAA4gAAAOP/wAAAAEAA5AAAAOX/wAAAAEAA5gAAAOf/wAAAAEAA6AAAAOn/wAAAAEAA6gAAAOv/wAAAAEAA7AAAAO3/wAAAAEAA7gAAAO//wAAAAEAA8AAAAPH/wAAAAEAA8gAAAPP/wAAAAEAA9AAAAPX/wAAAAEAA9gAAAPf/wAAAAEAA+AAAAPn/wAAAAEAA+gAAAPv/wAAAAEAA/AAAAP3/wAAAAEAA/gAAAP//QAAAAEABAAAAAQH/wAAAAEABAgAAAQP/wAAAAEABBAAAAQX/wAAAAEABBgAAAQf/wAAAAEABCAAAAQn/wAAAAEABCgAAAQv/wAAAAEABDAAAAQ3/wAAAAEABDgAAAQ//wAAAAEABEAAAARH/wAAAAEABEgAAARP/wAAAAEABFAAAARX/wAAAAEABFgAAARf/wAAAAEABGAAAARn/wAAAAEABGgAAARv/wAAAAEABHAAAAR3/wAAAAEABHgAAAR//wAAAAEABIAAAASH/wAAAAEABIgAAASP/wAAAAEABJAAAASX/wAAAAEABJgAAASf/wAAAAEABKAAAASn/wAAAAEABKgAAASv/wAAAAEABLAAAAS3/wAAAAEABLgAAAS//wAAAAEABMAAAATH/wAAAAEABMgAAATP/wAAAAEABNAAAATX/wAAAAEABNgAAATf/wAAAAEABOAAAATn/wAAAAEABOgAAATv/wAAAAEABPAAAAT3/wAAAAEABPgAAAT//QAAAAEABQAAAAUH/wAAAAEABQgAAAUP/wAAAAEABRAAAAUX/wAAAAEABRgAAAUf/wAAAAEABSAAAAUn/wAAAAEABSgAAAUv/wAAAAEABTAAAAU3/wAAAAEABTgAAAU//wAAAAEABUAAAAVH/wAAAAEABUgAAAVP/wAAAAEABVAAAAVX/wAAAAEABVgAAAVf/wAAAAEABWAAAAVn/wAAAAEABWgAAAVv/wAAAAEABXAAAAV3/wAAAAEABXgAAAV//wAAAAEABYAAAAWH/wAAAAEABYgAAAWP/wAAAAEABZAAAAWX/wAAAAEABZgAAAWf/wAAAAEABaAAAAWn/wAAAAEABagAAAWv/wAAAAEABbAAAAW3/wAAAAEABbgAAAW//wAAAAEABcAAAAXH/wAAAAEABcgAAAXP/wAAAAEABdAAAAXX/wAAAAEABdgAAAXf/wAAAAEABeAAAAXn/wAAAAEABegAAAXv/wAAAAEABfAAAAX3/wAAAAEABfgAAAX//QAAAAEABgAAAAYH/wAAAAEABggAAAYP/wAAAAEABhAAAAYX/wAAAAEABhgAAAYf/wAAAAEABiAAAAYn/wAAAAEABigAAAYv/wAAAAEABjAAAAY3/wAAAAEABjgAAAY//wAAAAEABkAAAAZH/wAAAAEABkgAAAZP/wAAAAEABlAAAAZX/wAAAAEABlgAAAZf/wAAAAEABmAAAAZn/wAAAAEABmgAAAZv/wAAAAEABnAAAAZ3/wAAAAEABngAAAZ//wAAAAEABoAAAAaH/wAAAAEABogAAAaP/wAAAAEABpAAAAaX/wAAAAEABpgAAAaf/wAAAAEABqAAAAan/wAAAAEABqgAAAav/wAAAAEABrAAAAa3/wAAAAEABrgAAAa//wAAAAEABsAAAAbH/wAAAAEABsgAAAbP/wAAAAEABtAAAAbX/wAAAAEABtgAAAbf/wAAAAEABuAAAAbn/wAAAAEABugAAAbv/wAAAAEABvAAAAb3/wAAAAEABvgAAAb//QAAAAEABwAAAAcH/wAAAAEABwgAAAcP/wAAAAEABxAAAAcX/wAAAAEABxgAAAcf/wAAAAEAByAAAAcn/wAAAAEABygAAAcv/wAAAAEABzAAAAc3/wAAAAEABzgAAAc//wAAAAEAB0AAAAdH/wAAAAEAB0gAAAdP/wAAAAEAB1AAAAdX/wAAAAEAB1gAAAdf/wAAAAEAB2AAAAdn/wAAAAEAB2gAAAdv/wAAAAEAB3AAAAd3/wAAAAEAB3gAAAd//wAAAAEAB4AAAAeH/wAAAAEAB4gAAAeP/wAAAAEAB5AAAAeX/wAAAAEAB5gAAAef/wAAAAEAB6AAAAen/wAAAAEAB6gAAAev/wAAAAEAB7AAAAe3/wAAAAEAB7gAAAe//wAAAAEAB8AAAAfH/wAAAAEAB8gAAAfP/wAAAAEAB9AAAAfX/wAAAAEAB9gAAAff/wAAAAEAB+AAAAfn/wAAAAEAB+gAAAfv/wAAAAEAB/AAAAf3/wAAAAEAB/gAAAf//QAAAAEACAAAAAgH/wAAAAEACAgAAAgP/wAAAAEACBAAAAgX/wAAAAEACBgAAAgf/wAAAAEACCAAAAgn/wAAAAEACCgAAAgv/wAAAAEACDAAAAg3/wAAAAEACDgAAAg//wAAAAEACEAAAAhH/wAAAAEACEgAAAhP/wAAAAEACFAAAAhX/wAAAAEACFgAAAhf/wAAAAEACGAAAAhn/wAAAAEACGgAAAhv/wAAAAEACHAAAAh3/wAAAAEACHgAAAh//wAAAAEACIAAAAiH/wAAAAEACIgAAAiP/wAAAAEACJAAAAiX/wAAAAEACJgAAAif/wAAAAEACKAAAAin/wAAAAEACKgAAAiv/wAAAAEACLAAAAi3/wAAAAEACLgAAAi//wAAAAEACMAAAAjH/wAAAAEACMgAAAjP/wAAAAEACNAAAAjX/wAAAAEACNgAAAjf/wAAAAEACOAAAAjn/wAAAAEACOgAAAjv/wAAAAEACPAAAAj3/wAAAAEACPgAAAj//QAAAAEACQAAAAkH/wAAAAEACQgAAAkP/wAAAAEACRAAAAkX/wAAAAEACRgAAAkf/wAAAAEACSAAAAkn/wAAAAEACSgAAAkv/wAAAAEACTAAAAk3/wAAAAEACTgAAAk//wAAAAEACUAAAAlH/wAAAAEACUgAAAlP/wAAAAEACVAAAAlX/wAAAAEACVgAAAlf/wAAAAEACWAAAAln/wAAAAEACWgAAAlv/wAAAAEACXAAAAl3/wAAAAEACXgAAAl//wAAAAEACYAAAAmH/wAAAAEACYgAAAmP/wAAAAEACZAAAAmX/wAAAAEACZgAAAmf/wAAAAEACaAAAAmn/wAAAAEACagAAAmv/wAAAAEACbAAAAm3/wAAAAEACbgAAAm//wAAAAEACcAAAAnH/wAAAAEACcgAAAnP/wAAAAEACdAAAAnX/wAAAAEACdgAAAnf/wAAAAEACeAAAAnn/wAAAAEACegAAAnv/wAAAAEACfAAAAn3/wAAAAEACfgAAAn//QAAAAEACgAAAAoH/wAAAAEACggAAAoP/wAAAAEAChAAAAoX/wAAAAEAChgAAAof/wAAAAEACiAAAAon/wAAAAEACigAAAov/wAAAAEACjAAAAo3/wAAAAEACjgAAAo//wAAAAEACkAAAApH/wAAAAEACkgAAApP/wAAAAEAClAAAApX/wAAAAEAClgAAApf/wAAAAEACmAAAApn/wAAAAEACmgAAApv/wAAAAEACnAAAAp3/wAAAAEACngAAAp//wAAAAEACoAAAAqH/wAAAAEACogAAAqP/wAAAAEACpAAAAqX/wAAAAEACpgAAAqf/wAAAAEACqAAAAqn/wAAAAEACqgAAAqv/wAAAAEACrAAAAq3/wAAAAEACrgAAAq//wAAAAEACsAAAArH/wAAAAEACsgAAArP/wAAAAEACtAAAArX/wAAAAEACtgAAArf/wAAAAEACuAAAArn/wAAAAEACugAAArv/wAAAAEACvAAAAr3/wAAAAEACvgAAAr//QAAAAEACwAAAAsH/wAAAAEACwgAAAsP/wAAAAEACxAAAAsX/wAAAAEACxgAAAsf/wAAAAEACyAAAAsn/wAAAAEACygAAAsv/wAAAAEACzAAAAs3/wAAAAEACzgAAAs//wAAAAEAC0AAAAtH/wAAAAEAC0gAAAtP/wAAAAEAC1AAAAtX/wAAAAEAC1gAAAtf/wAAAAEAC2AAAAtn/wAAAAEAC2gAAAtv/wAAAAEAC3AAAAt3/wAAAAEAC3gAAAt//wAAAAEAC4AAAAuH/wAAAAEAC4gAAAuP/wAAAAEAC5AAAAuX/wAAAAEAC5gAAAuf/wAAAAEAC6AAAAun/wAAAAEAC6gAAAuv/wAAAAEAC7AAAAu3/wAAAAEAC7gAAAu//wAAAAEAC8AAAAvH/wAAAAEAC8gAAAvP/wAAAAEAC9AAAAvX/wAAAAEAC9gAAAvf/wAAAAEAC+AAAAvn/wAAAAEAC+gAAAvv/wAAAAEAC/AAAAv3/wAAAAEAC/gAAAv//QAAAAEADAAAAAwH/wAAAAEADAgAAAwP/wAAAAEADBAAAAwX/wAAAAEADBgAAAwf/wAAAAEADCAAAAwn/wAAAAEADCgAAAwv/wAAAAEADDAAAAw3/wAAAAEADDgAAAw//wAAAAEADEAAAAxH/wAAAAEADEgAAAxP/wAAAAEADFAAAAxX/wAAAAEADFgAAAxf/wAAAAEADGAAAAxn/wAAAAEADGgAAAxv/wAAAAEADHAAAAx3/wAAAAEADHgAAAx//wAAAAEADIAAAAyH/wAAAAEADIgAAAyP/wAAAAEADJAAAAyX/wAAAAEADJgAAAyf/wAAAAEADKAAAAyn/wAAAAEADKgAAAyv/wAAAAEADLAAAAy3/wAAAAEADLgAAAy//wAAAAEADMAAAAzH/wAAAAEADMgAAAzP/wAAAAEADNAAAAzX/wAAAAEADNgAAAzf/wAAAAEADOAAAAzn/wAAAAEADOgAAAzv/wAAAAEADPAAAAz3/wAAAAEADPgAAAz//QAAAAEADQAAAA0H/wAAAAEADQgAAA0P/wAAAAEADRAAAA0X/wAAAAEADRgAAA0f/wAAAAEADSAAAA0n/wAAAAEADSgAAA0v/wAAAAEADTAAAA03/wAAAAEADTgAAA0//wAAAAEADUAAAA1H/wAAAAEADUgAAA1P/wAAAAEADVAAAA1X/wAAAAEADVgAAA1f/wAAAAEADWAAAA1n/wAAAAEADWgAAA1v/wAAAAEADXAAAA13/wAAAAEADXgAAA1//wAAAAEADYAAAA2H/wAAAAEADYgAAA2P/wAAAAEADZAAAA2X/wAAAAEADZgAAA2f/wAAAAEADaAAAA2n/wAAAAEADagAAA2v/wAAAAEADbAAAA23/wAAAAEADbgAAA2//wAAAAEADcAAAA3H/wAAAAEADcgAAA3P/wAAAAEADdAAAA3X/wAAAAEADdgAAA3f/wAAAAEADeAAAA3n/wAAAAEADegAAA3v/wAAAAEADfAAAA33/wAAAAEADfgAAA3//QAAAAEADgAAAA4H/wAAAAEADggAAA4P/wAAAAEADhAAAA4X/wAAAAEADhgAAA4f/wAAAAEADiAAAA4n/wAAAAEADigAAA4v/wAAAAEADjAAAA43/wAAAAEADjgAAA4//wAAAAEADkAAAA5H/wAAAAEADkgAAA5P/wAAAAEADlAAAA5X/wAAAAEADlgAAA5f/wAAAAEADmAAAA5n/wAAAAEADmgAAA5v/wAAAAEADnAAAA53/wAAAAEADngAAA5//wAAAAEADoAAAA6H/wAAAAEADogAAA6P/wAAAAEADpAAAA6X/wAAAAEADpgAAA6f/wAAAAEADqAAAA6n/wAAAAEADqgAAA6v/wAAAAEADrAAAA63/wAAAAEADrgAAA6//wAAAAEADsAAAA7H/wAAAAEADsgAAA7P/wAAAAEADtAAAA7X/wAAAAEADtgAAA7f/wAAAAEADuAAAA7n/wAAAAEADugAAA7v/wAAAAEADvAAAA73/wAAAAEADvgAAA7//QAAAAEADwAAAA8H/wAAAAEADwgAAA8P/wAAAAEADxAAAA8X/wAAAAEADxgAAA8f/wAAAAEADyAAAA8n/wAAAAEADygAAA8v/wAAAAEADzAAAA83/wAAAAEADzgAAA8//wAAAAEAD0AAAA9H/wAAAAEAD0gAAA9P/wAAAAEAD1AAAA9X/wAAAAEAD1gAAA9f/wAAAAEAD2AAAA9n/wAAAAEAD2gAAA9v/wAAAAEAD3AAAA93/wAAAAEAD3gAAA9//wAAAAEAD4AAAA+H/wAAAAEAD4gAAA+P/wAAAAEAD5AAAA+X/wAAAAEAD5gAAA+f/wAAAAEAD6AAAA+n/wAAAAEAD6gAAA+v/wAAAAEAD7AAAA+3/wAAAAEAD7gAAA+//wAAAAEAD8AAAA/H/wAAAAEAD8gAAA/P/wAAAAEAD9AAAA/X/wAAAAEAD9gAAA/f/wAAAAEAD+AAAA/n/wAAAAEAD+gAAA/v/wAAAAEAD/AAAA/3/wAAAAEAD/gAAA///QAAAAEAEAAAABAH/wAAAAEAEAgAABAP/wAAAAEAEBAAABAX/wAAAAEAEBgAABAf/wAAAAEAECAAABAn/wAAAAEAECgAABAv/wAAAAEAEDAAABA3/wAAAAEAEDgAABA//wAAAAEAEEAAABBH/wAAAAEAEEgAABBP/wAAAAEAEFAAABBX/wAAAAEAEFgAABBf/wAAAAEAEGAAABBn/wAAAAEAEGgAABBv/wAAAAEAEHAAABB3/wAAAAEAEHgAABB//wAAAAEAEIAAABCH/wAAAAEAEIgAABCP/wAAAAEAEJAAABCX/wAAAAEAEJgAABCf/wAAAAEAEKAAABCn/wAAAAEAEKgAABCv/wAAAAEAELAAABC3/wAAAAEAELgAABC//wAAAAEAEMAAABDH/wAAAAEAEMgAABDP/wAAAAEAENAAABDX/wAAAAEAENgAABDf/wAAAAEAEOAAABDn/wAAAAEAEOgAABDv/wAAAAEAEPAAABD3/wAAAAEAEPgAABD//QAAAAEAAwAAAAAAAP+1ADIAAAAAAAAAAAAAAAAAAAAAAAAAAAEABAIAAQEBC0Fkb2JlQmxhbmsAAQEBMPgb+ByLDB74HQH4HgKL+wz6APoEBR4aBF8MHxwIAQwi91UP92IR91oMJRwZHwwkAAUBAQYOVmFwQWRvYmVJZGVudGl0eUNvcHlyaWdodCAyMDEzLCAyMDE1IEFkb2JlIFN5c3RlbXMgSW5jb3Jwb3JhdGVkIChodHRwOi8vd3d3LmFkb2JlLmNvbS8pLkFkb2JlIEJsYW5rQWRvYmVCbGFuay0yMDQ5AAACAAEH/wMAAQAAAAgBCAECAAEASwBMAE0ATgBPAFAAUQBSAFMAVABVAFYAVwBYAFkAWgBbAFwAXQBeAF8AYABhAGIAYwBkAGUAZgBnAGgAaQBqAGsAbABtAG4AbwBwAHEAcgBzAHQAdQB2AHcAeAB5AHoAewB8AH0AfgB/AIAAgQCCAIMAhACFAIYAhwCIAIkAigCLAIwAjQCOAI8AkACRAJIAkwCUAJUAlgCXAJgAmQCaAJsAnACdAJ4AnwCgAKEAogCjAKQApQCmAKcAqACpAKoAqwCsAK0ArgCvALAAsQCyALMAtAC1ALYAtwC4ALkAugC7ALwAvQC+AL8AwADBAMIAwwDEAMUAxgDHAMgAyQDKAMsAzADNAM4AzwDQANEA0gDTANQA1QDWANcA2ADZANoA2wDcAN0A3gDfAOAA4QDiAOMA5ADlAOYA5wDoAOkA6gDrAOwA7QDuAO8A8ADxAPIA8wD0APUA9gD3APgA+QD6APsA/AD9AP4A/wEAAQEBAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMBFAEVARYBFwEYARkBGgEbARwBHQEeAR8BIAEhASIBIwEkASUBJgEnASgBKQEqASsBLAEtAS4BLwEwATEBMgEzATQBNQE2ATcBOAE5AToBOwE8AT0BPgE/AUABQQFCAUMBRAFFAUYBRwFIAUkBSgFLAUwBTQFOAU8BUAFRAVIBUwFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEBYgFjAWQBZQFmAWcBaAFpAWoBawFsAW0BbgFvAXABcQFyAXMBdAF1AXYBdwF4AXkBegF7AXwBfQF+AX8BgAGBAYIBgwGEAYUBhgGHAYgBiQGKAYsBjAGNAY4BjwGQAZEBkgGTAZQBlQGWAZcBmAGZAZoBmwGcAZ0BngGfAaABoQGiAaMBpAGlAaYBpwGoAakBqgGrAawBrQGuAa8BsAGxAbIBswG0AbUBtgG3AbgBuQG6AbsBvAG9Ab4BvwHAAcEBwgHDAcQBxQHGAccByAHJAcoBywHMAc0BzgHPAdAB0QHSAdMB1AHVAdYB1wHYAdkB2gHbAdwB3QHeAd8B4AHhAeIB4wHkAeUB5gHnAegB6QHqAesB7AHtAe4B7wHwAfEB8gHzAfQB9QH2AfcB+AH5AfoB+wH8Af0B/gH/AgACAQICAgMCBAIFAgYCBwIIAgkCCgILAgwCDQIOAg8CEAIRAhICEwIUAhUCFgIXAhgCGQIaAhsCHAIdAh4CHwIgAiECIgIjAiQCJQImAicCKAIpAioCKwIsAi0CLgIvAjACMQIyAjMCNAI1AjYCNwI4AjkCOgI7AjwCPQI+Aj8CQAJBAkICQwJEAkUCRgJHAkgCSQJKAksCTAJNAk4CTwJQAlECUgJTAlQCVQJWAlcCWAJZAloCWwJcAl0CXgJfAmACYQJiAmMCZAJlAmYCZwJoAmkCagJrAmwCbQJuAm8CcAJxAnICcwJ0AnUCdgJ3AngCeQJ6AnsCfAJ9An4CfwKAAoECggKDAoQChQKGAocCiAKJAooCiwKMAo0CjgKPApACkQKSApMClAKVApYClwKYApkCmgKbApwCnQKeAp8CoAKhAqICowKkAqUCpgKnAqgCqQKqAqsCrAKtAq4CrwKwArECsgKzArQCtQK2ArcCuAK5AroCuwK8Ar0CvgK/AsACwQLCAsMCxALFAsYCxwLIAskCygLLAswCzQLOAs8C0ALRAtIC0wLUAtUC1gLXAtgC2QLaAtsC3ALdAt4C3wLgAuEC4gLjAuQC5QLmAucC6ALpAuoC6wLsAu0C7gLvAvAC8QLyAvMC9AL1AvYC9wL4AvkC+gL7AvwC/QL+Av8DAAMBAwIDAwMEAwUDBgMHAwgDCQMKAwsDDAMNAw4DDwMQAxEDEgMTAxQDFQMWAxcDGAMZAxoDGwMcAx0DHgMfAyADIQMiAyMDJAMlAyYDJwMoAykDKgMrAywDLQMuAy8DMAMxAzIDMwM0AzUDNgM3AzgDOQM6AzsDPAM9Az4DPwNAA0EDQgNDA0QDRQNGA0cDSANJA0oDSwNMA00DTgNPA1ADUQNSA1MDVANVA1YDVwNYA1kDWgNbA1wDXQNeA18DYANhA2IDYwNkA2UDZgNnA2gDaQNqA2sDbANtA24DbwNwA3EDcgNzA3QDdQN2A3cDeAN5A3oDewN8A30DfgN/A4ADgQOCA4MDhAOFA4YDhwOIA4kDigOLA4wDjQOOA48DkAORA5IDkwOUA5UDlgOXA5gDmQOaA5sDnAOdA54DnwOgA6EDogOjA6QDpQOmA6cDqAOpA6oDqwOsA60DrgOvA7ADsQOyA7MDtAO1A7YDtwO4A7kDugO7A7wDvQO+A78DwAPBA8IDwwPEA8UDxgPHA8gDyQPKA8sDzAPNA84DzwPQA9ED0gPTA9QD1QPWA9cD2APZA9oD2wPcA90D3gPfA+AD4QPiA+MD5APlA+YD5wPoA+kD6gPrA+wD7QPuA+8D8APxA/ID8wP0A/UD9gP3A/gD+QP6A/sD/AP9A/4D/wQABAEEAgQDBAQEBQQGBAcECAQJBAoECwQMBA0EDgQPBBAEEQQSBBMEFAQVBBYEFwQYBBkEGgQbBBwEHQQeBB8EIAQhBCIEIwQkBCUEJgQnBCgEKQQqBCsELAQtBC4ELwQwBDEEMgQzBDQENQQ2BDcEOAQ5BDoEOwQ8BD0EPgQ/BEAEQQRCBEMERARFBEYERwRIBEkESgRLBEwETQROBE8EUARRBFIEUwRUBFUEVgRXBFgEWQRaBFsEXARdBF4EXwRgBGEEYgRjBGQEZQRmBGcEaARpBGoEawRsBG0EbgRvBHAEcQRyBHMEdAR1BHYEdwR4BHkEegR7BHwEfQR+BH8EgASBBIIEgwSEBIUEhgSHBIgEiQSKBIsEjASNBI4EjwSQBJEEkgSTBJQElQSWBJcEmASZBJoEmwScBJ0EngSfBKAEoQSiBKMEpASlBKYEpwSoBKkEqgSrBKwErQSuBK8EsASxBLIEswS0BLUEtgS3BLgEuQS6BLsEvAS9BL4EvwTABMEEwgTDBMQExQTGBMcEyATJBMoEywTMBM0EzgTPBNAE0QTSBNME1ATVBNYE1wTYBNkE2gTbBNwE3QTeBN8E4AThBOIE4wTkBOUE5gTnBOgE6QTqBOsE7ATtBO4E7wTwBPEE8gTzBPQE9QT2BPcE+AT5BPoE+wT8BP0E/gT/BQAFAQUCBQMFBAUFBQYFBwUIBQkFCgULBQwFDQUOBQ8FEAURBRIFEwUUBRUFFgUXBRgFGQUaBRsFHAUdBR4FHwUgBSEFIgUjBSQFJQUmBScFKAUpBSoFKwUsBS0FLgUvBTAFMQUyBTMFNAU1BTYFNwU4BTkFOgU7BTwFPQU+BT8FQAVBBUIFQwVEBUUFRgVHBUgFSQVKBUsFTAVNBU4FTwVQBVEFUgVTBVQFVQVWBVcFWAVZBVoFWwVcBV0FXgVfBWAFYQViBWMFZAVlBWYFZwVoBWkFagVrBWwFbQVuBW8FcAVxBXIFcwV0BXUFdgV3BXgFeQV6BXsFfAV9BX4FfwWABYEFggWDBYQFhQWGBYcFiAWJBYoFiwWMBY0FjgWPBZAFkQWSBZMFlAWVBZYFlwWYBZkFmgWbBZwFnQWeBZ8FoAWhBaIFowWkBaUFpgWnBagFqQWqBasFrAWtBa4FrwWwBbEFsgWzBbQFtQW2BbcFuAW5BboFuwW8Bb0FvgW/BcAFwQXCBcMFxAXFBcYFxwXIBckFygXLBcwFzQXOBc8F0AXRBdIF0wXUBdUF1gXXBdgF2QXaBdsF3AXdBd4F3wXgBeEF4gXjBeQF5QXmBecF6AXpBeoF6wXsBe0F7gXvBfAF8QXyBfMF9AX1BfYF9wX4BfkF+gX7BfwF/QX+Bf8GAAYBBgIGAwYEBgUGBgYHBggGCQYKBgsGDAYNBg4GDwYQBhEGEgYTBhQGFQYWBhcGGAYZBhoGGwYcBh0GHgYfBiAGIQYiBiMGJAYlBiYGJwYoBikGKgYrBiwGLQYuBi8GMAYxBjIGMwY0BjUGNgY3BjgGOQY6BjsGPAY9Bj4GPwZABkEGQgZDBkQGRQZGBkcGSAZJBkoGSwZMBk0GTgZPBlAGUQZSBlMGVAZVBlYGVwZYBlkGWgZbBlwGXQZeBl8GYAZhBmIGYwZkBmUGZgZnBmgGaQZqBmsGbAZtBm4GbwZwBnEGcgZzBnQGdQZ2BncGeAZ5BnoGewZ8Bn0GfgZ/BoAGgQaCBoMGhAaFBoYGhwaIBokGigaLBowGjQaOBo8GkAaRBpIGkwaUBpUGlgaXBpgGmQaaBpsGnAadBp4GnwagBqEGogajBqQGpQamBqcGqAapBqoGqwasBq0GrgavBrAGsQayBrMGtAa1BrYGtwa4BrkGuga7BrwGvQa+Br8GwAbBBsIGwwbEBsUGxgbHBsgGyQbKBssGzAbNBs4GzwbQBtEG0gbTBtQG1QbWBtcG2AbZBtoG2wbcBt0G3gbfBuAG4QbiBuMG5AblBuYG5wboBukG6gbrBuwG7QbuBu8G8AbxBvIG8wb0BvUG9gb3BvgG+Qb6BvsG/Ab9Bv4G/wcABwEHAgcDBwQHBQcGBwcHCAcJBwoHCwcMBw0HDgcPBxAHEQcSBxMHFAcVBxYHFwcYBxkHGgcbBxwHHQceBx8HIAchByIHIwckByUHJgcnBygHKQcqBysHLActBy4HLwcwBzEHMgczBzQHNQc2BzcHOAc5BzoHOwc8Bz0HPgc/B0AHQQdCB0MHRAdFB0YHRwdIB0kHSgdLB0wHTQdOB08HUAdRB1IHUwdUB1UHVgdXB1gHWQdaB1sHXAddB14HXwdgB2EHYgdjB2QHZQdmB2cHaAdpB2oHawdsB20HbgdvB3AHcQdyB3MHdAd1B3YHdwd4B3kHegd7B3wHfQd+B38HgAeBB4IHgweEB4UHhgeHB4gHiQeKB4sHjAeNB44HjweQB5EHkgeTB5QHlQeWB5cHmAeZB5oHmwecB50HngefB6AHoQeiB6MHpAelB6YHpweoB6kHqgerB6wHrQeuB68HsAexB7IHswe0B7UHtge3B7gHuQe6B7sHvAe9B74HvwfAB8EHwgfDB8QHxQfGB8cHyAfJB8oHywfMB80HzgfPB9AH0QfSB9MH1AfVB9YH1wfYB9kH2gfbB9wH3QfeB98H4AfhB+IH4wfkB+UH5gfnB+gH6QfqB+sH7AftB+4H7wfwB/EH8gfzB/QH9Qf2B/cH+Af5B/oH+wf8B/0H/gf/CAAIAQgCCAMIBAgFCAYIBwgICAkICggLCAwIDQgOCA8IEAgRCBIIEwgUCBUIFggXCBgIGQgaCBsIHAgdCB4IHwggCCEIIggjCCQIJQgmCCcIKAgpCCoIKwgsCC0ILggvCDAIMQgyCDMINAg1CDYINwg4CDkIOgg7CDwIPQg+CD8IQAhBCEIIQwhECEUIRghHCEgISQhKCEsg+wy3+iS3AfcQt/kstwP3EPoEFf58+YT6fAf9WP4nFfnSB/fF/DMFprAV+8X4NwX49gamYhX90gf7xfgzBXBmFffF/DcF/PYGDg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4OAAEBAQr4HwwmmhwZLRL7joscBUaLBr0KvQv65xUD6AB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAA==");}', 
    d.cssRules.length);
  };
  (function(d) {
    d.instance = {enabled:!1, initJS:function(c) {
    }, registerCallback:function(c) {
    }, unregisterCallback:function(c) {
    }, eval:function(c) {
    }, call:function(c) {
    }, getId:function() {
      return null;
    }};
  })(f.ExternalInterfaceService || (f.ExternalInterfaceService = {}));
  (function(d) {
    d[d.InvalidCallback = -3] = "InvalidCallback";
    d[d.AlreadyTaken = -2] = "AlreadyTaken";
    d[d.InvalidName = -1] = "InvalidName";
    d[d.Success = 0] = "Success";
  })(f.LocalConnectionConnectResult || (f.LocalConnectionConnectResult = {}));
  (function(d) {
    d[d.NotConnected = -1] = "NotConnected";
    d[d.Success = 0] = "Success";
  })(f.LocalConnectionCloseResult || (f.LocalConnectionCloseResult = {}));
  (function(d) {
    d.instance;
  })(f.LocalConnectionService || (f.LocalConnectionService = {}));
  (function(d) {
    d.instance = {setClipboard:function(c) {
    }};
  })(f.ClipboardService || (f.ClipboardService = {}));
  b = function() {
    function d() {
      this._queues = {};
    }
    d.prototype.register = function(c, g) {
      n.assert(c);
      n.assert(g);
      var k = this._queues[c];
      if (k) {
        if (-1 < k.indexOf(g)) {
          return;
        }
      } else {
        k = this._queues[c] = [];
      }
      k.push(g);
    };
    d.prototype.unregister = function(c, g) {
      n.assert(c);
      n.assert(g);
      var k = this._queues[c];
      if (k) {
        var d = k.indexOf(g);
        -1 !== d && k.splice(d, 1);
        0 === k.length && (this._queues[c] = null);
      }
    };
    d.prototype.notify = function(c, g) {
      var k = this._queues[c];
      if (k) {
        k = k.slice();
        g = Array.prototype.slice.call(arguments, 0);
        for (var d = 0;d < k.length;d++) {
          k[d].apply(null, g);
        }
      }
    };
    d.prototype.notify1 = function(c, g) {
      var k = this._queues[c];
      if (k) {
        for (var k = k.slice(), d = 0;d < k.length;d++) {
          (0,k[d])(c, g);
        }
      }
    };
    return d;
  }();
  f.Callback = b;
  (function(d) {
    d[d.None = 0] = "None";
    d[d.PremultipliedAlphaARGB = 1] = "PremultipliedAlphaARGB";
    d[d.StraightAlphaARGB = 2] = "StraightAlphaARGB";
    d[d.StraightAlphaRGBA = 3] = "StraightAlphaRGBA";
    d[d.JPEG = 4] = "JPEG";
    d[d.PNG = 5] = "PNG";
    d[d.GIF = 6] = "GIF";
  })(f.ImageType || (f.ImageType = {}));
  var x = f.ImageType;
  f.getMIMETypeForImageType = function(d) {
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
    d.toCSSCursor = function(c) {
      switch(c) {
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
  })(f.UI || (f.UI = {}));
  b = function() {
    function d() {
      this.promise = new Promise(function(c, g) {
        this.resolve = c;
        this.reject = g;
      }.bind(this));
    }
    d.prototype.then = function(c, g) {
      return this.promise.then(c, g);
    };
    return d;
  }();
  f.PromiseWrapper = b;
})(Shumway || (Shumway = {}));
"undefined" !== typeof exports && (exports.Shumway = Shumway);
(function() {
  function f(f, t, a) {
    f[t] || Object.defineProperty(f, t, {value:a, writable:!0, configurable:!0, enumerable:!1});
  }
  f(String.prototype, "padRight", function(f, t) {
    var a = this, w = a.replace(/\033\[[0-9]*m/g, "").length;
    if (!f || w >= t) {
      return a;
    }
    for (var w = (t - w) / f.length, n = 0;n < w;n++) {
      a += f;
    }
    return a;
  });
  f(String.prototype, "padLeft", function(f, t) {
    var a = this, w = a.length;
    if (!f || w >= t) {
      return a;
    }
    for (var w = (t - w) / f.length, n = 0;n < w;n++) {
      a = f + a;
    }
    return a;
  });
  f(String.prototype, "trim", function() {
    return this.replace(/^\s+|\s+$/g, "");
  });
  f(String.prototype, "endsWith", function(f) {
    return -1 !== this.indexOf(f, this.length - f.length);
  });
  f(Array.prototype, "replace", function(f, t) {
    if (f === t) {
      return 0;
    }
    for (var a = 0, w = 0;w < this.length;w++) {
      this[w] === f && (this[w] = t, a++);
    }
    return a;
  });
})();
(function(f) {
  (function(q) {
    var t = f.isObject, a = function() {
      function b(a, h, r, n) {
        this.shortName = a;
        this.longName = h;
        this.type = r;
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
    q.Argument = a;
    var w = function() {
      function b() {
        this.args = [];
      }
      b.prototype.addArgument = function(b, h, r, n) {
        b = new a(b, h, r, n);
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
        var a = {}, h = [];
        this.args.forEach(function(d) {
          d.positional ? h.push(d) : (a["-" + d.shortName] = d, a["--" + d.longName] = d);
        });
        for (var n = [];b.length;) {
          var m = b.shift(), v = null, x = m;
          if ("--" == m) {
            n = n.concat(b);
            break;
          } else {
            if ("-" == m.slice(0, 1) || "--" == m.slice(0, 2)) {
              v = a[m];
              if (!v) {
                continue;
              }
              x = "boolean" !== v.type ? b.shift() : !0;
            } else {
              h.length ? v = h.shift() : n.push(x);
            }
          }
          v && v.parse(x);
        }
        return n;
      };
      return b;
    }();
    q.ArgumentParser = w;
    var n = function() {
      function a(b, h) {
        void 0 === h && (h = null);
        this.open = !1;
        this.name = b;
        this.settings = h || {};
        this.options = [];
      }
      a.isOptionSet = function(l) {
        return l instanceof a ? !0 : "object" !== typeof l || null === l || l instanceof b ? !1 : "options" in l && "name" in l && "settings" in l;
      };
      a.prototype.register = function(b) {
        if (a.isOptionSet(b)) {
          for (var e = 0;e < this.options.length;e++) {
            var r = this.options[e];
            if (a.isOptionSet(r) && r.name === b.name) {
              return r;
            }
          }
        }
        this.options.push(b);
        if (this.settings) {
          if (a.isOptionSet(b)) {
            e = this.settings[b.name], t(e) && (b.settings = e.settings, b.open = e.open);
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
        this.options.forEach(function(e) {
          a.isOptionSet(e) ? b[e.name] = {settings:e.getSettings(), open:e.open} : b[e.longName] = e.value;
        });
        return b;
      };
      a.prototype.setSettings = function(b) {
        b && this.options.forEach(function(e) {
          a.isOptionSet(e) ? e.name in b && e.setSettings(b[e.name].settings) : e.longName in b && (e.value = b[e.longName]);
        });
      };
      return a;
    }();
    q.OptionSet = n;
    var b = function() {
      function b(a, h, r, n, m, v) {
        void 0 === v && (v = null);
        this.longName = h;
        this.shortName = a;
        this.type = r;
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
    q.Option = b;
  })(f.Options || (f.Options = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(t) {
    t.ROOT = "Shumway Options";
    t.shumwayOptions = new f.Options.OptionSet(t.ROOT);
    t.setSettings = function(a) {
      t.shumwayOptions.setSettings(a);
    };
    t.getSettings = function() {
      return t.shumwayOptions.getSettings();
    };
  })(f.Settings || (f.Settings = {}));
  var q = f.Options.Option;
  f.loggingOptions = f.Settings.shumwayOptions.register(new f.Options.OptionSet("Logging Options"));
  f.omitRepeatedWarnings = f.loggingOptions.register(new q("wo", "warnOnce", "boolean", !0, "Omit Repeated Warnings"));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(q) {
    var t = function() {
      function a(a, n) {
        this._parent = a;
        this._timers = f.ObjectUtilities.createMap();
        this._name = n;
        this._count = this._total = this._last = this._begin = 0;
      }
      a.time = function(f, n) {
        a.start(f);
        n();
        a.stop();
      };
      a.start = function(f) {
        a._top = a._top._timers[f] || (a._top._timers[f] = new a(a._top, f));
        a._top.start();
        f = a._flat._timers[f] || (a._flat._timers[f] = new a(a._flat, f));
        f.start();
        a._flatStack.push(f);
      };
      a.stop = function() {
        a._top.stop();
        a._top = a._top._parent;
        a._flatStack.pop().stop();
      };
      a.stopStart = function(f) {
        a.stop();
        a.start(f);
      };
      a.prototype.start = function() {
        this._begin = f.getTicks();
      };
      a.prototype.stop = function() {
        this._last = f.getTicks() - this._begin;
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
      a.trace = function(f) {
        a._base.trace(f);
        a._flat.trace(f);
      };
      a._base = new a(null, "Total");
      a._top = a._base;
      a._flat = new a(null, "Flat");
      a._flatStack = [];
      return a;
    }();
    q.Timer = t;
    t = function() {
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
        this._counts = f.ObjectUtilities.createMap();
        this._times = f.ObjectUtilities.createMap();
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
        var b = n[0], h = n[1], l = a[b], b = b + ": " + h;
        l && (b += ", " + l.toFixed(4), 1 < h && (b += " (" + (l / h).toFixed(4) + ")"));
        return b;
      };
      a.prototype.toStringSorted = function() {
        var a = this, n = this._times, b = [], h;
        for (h in this._counts) {
          b.push([h, this._counts[h]]);
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
        var b = this, h = this._times, l = [], e;
        for (e in this._counts) {
          l.push([e, this._counts[e]]);
        }
        l.sort(function(b, a) {
          return a[1] - b[1];
        });
        n ? a.writeLn(l.map(function(a) {
          return b._pairToString(h, a);
        }).join(", ")) : l.forEach(function(e) {
          a.writeLn(b._pairToString(h, e));
        });
      };
      a.instance = new a(!0);
      return a;
    }();
    q.Counter = t;
    t = function() {
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
    q.Average = t;
  })(f.Metrics || (f.Metrics = {}));
})(Shumway || (Shumway = {}));
var __extends = this.__extends || function(f, q) {
  function t() {
    this.constructor = f;
  }
  for (var a in q) {
    q.hasOwnProperty(a) && (f[a] = q[a]);
  }
  t.prototype = q.prototype;
  f.prototype = new t;
};
(function(f) {
  (function(f) {
    function t(c) {
      for (var g = Math.max.apply(null, c), k = c.length, d = 1 << g, b = new Uint32Array(d), a = g << 16 | 65535, h = 0;h < d;h++) {
        b[h] = a;
      }
      for (var a = 0, h = 1, e = 2;h <= g;a <<= 1, ++h, e <<= 1) {
        for (var v = 0;v < k;++v) {
          if (c[v] === h) {
            for (var m = 0, l = 0;l < h;++l) {
              m = 2 * m + (a >> l & 1);
            }
            for (l = m;l < d;l += e) {
              b[l] = h << 16 | v;
            }
            ++a;
          }
        }
      }
      return {codes:b, maxBits:g};
    }
    var a;
    (function(c) {
      c[c.INIT = 0] = "INIT";
      c[c.BLOCK_0 = 1] = "BLOCK_0";
      c[c.BLOCK_1 = 2] = "BLOCK_1";
      c[c.BLOCK_2_PRE = 3] = "BLOCK_2_PRE";
      c[c.BLOCK_2 = 4] = "BLOCK_2";
      c[c.DONE = 5] = "DONE";
      c[c.ERROR = 6] = "ERROR";
      c[c.VERIFY_HEADER = 7] = "VERIFY_HEADER";
    })(a || (a = {}));
    a = function() {
      function c(c) {
      }
      c.prototype.push = function(c) {
      };
      c.prototype.close = function() {
      };
      c.create = function(c) {
        return "undefined" !== typeof ShumwayCom && ShumwayCom.createSpecialInflate ? new v(c, ShumwayCom.createSpecialInflate) : new w(c);
      };
      c.prototype._processZLibHeader = function(c, k, d) {
        if (k + 2 > d) {
          return 0;
        }
        c = c[k] << 8 | c[k + 1];
        k = null;
        2048 !== (c & 3840) ? k = "inflate: unknown compression method" : 0 !== c % 31 ? k = "inflate: bad FCHECK" : 0 !== (c & 32) && (k = "inflate: FDICT bit set");
        if (k) {
          if (this.onError) {
            this.onError(k);
          }
          return -1;
        }
        return 2;
      };
      c.inflate = function(g, k, d) {
        var b = new Uint8Array(k), a = 0;
        k = c.create(d);
        k.onData = function(c) {
          var g = Math.min(c.length, b.length - a);
          g && f.memCopy(b, c, a, 0, g);
          a += g;
        };
        k.onError = function(c) {
          throw Error(c);
        };
        k.push(g);
        k.close();
        return b;
      };
      return c;
    }();
    f.Inflate = a;
    var w = function(c) {
      function g(g) {
        c.call(this, g);
        this._buffer = null;
        this._bitLength = this._bitBuffer = this._bufferPosition = this._bufferSize = 0;
        this._window = new Uint8Array(65794);
        this._windowPosition = 0;
        this._state = g ? 7 : 0;
        this._isFinalBlock = !1;
        this._distanceTable = this._literalTable = null;
        this._block0Read = 0;
        this._block2State = null;
        this._copyState = {state:0, len:0, lenBits:0, dist:0, distBits:0};
        if (!m) {
          n = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
          b = new Uint16Array(30);
          h = new Uint8Array(30);
          for (var d = g = 0, p = 1;30 > g;++g) {
            b[g] = p, p += 1 << (h[g] = ~~((d += 2 < g ? 1 : 0) / 2));
          }
          var a = new Uint8Array(288);
          for (g = 0;32 > g;++g) {
            a[g] = 5;
          }
          l = t(a.subarray(0, 32));
          e = new Uint16Array(29);
          r = new Uint8Array(29);
          d = g = 0;
          for (p = 3;29 > g;++g) {
            e[g] = p - (28 == g ? 1 : 0), p += 1 << (r[g] = ~~((d += 4 < g ? 1 : 0) / 4 % 6));
          }
          for (g = 0;288 > g;++g) {
            a[g] = 144 > g || 279 < g ? 8 : 256 > g ? 9 : 7;
          }
          u = t(a);
          m = !0;
        }
      }
      __extends(g, c);
      g.prototype.push = function(c) {
        if (!this._buffer || this._buffer.length < this._bufferSize + c.length) {
          var g = new Uint8Array(this._bufferSize + c.length);
          this._buffer && g.set(this._buffer);
          this._buffer = g;
        }
        this._buffer.set(c, this._bufferSize);
        this._bufferSize += c.length;
        this._bufferPosition = 0;
        c = !1;
        do {
          g = this._windowPosition;
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
          if (0 < this._windowPosition - g) {
            this.onData(this._window.subarray(g, this._windowPosition));
          }
          65536 <= this._windowPosition && ("copyWithin" in this._buffer ? this._window.copyWithin(0, this._windowPosition - 32768, this._windowPosition) : this._window.set(this._window.subarray(this._windowPosition - 32768, this._windowPosition)), this._windowPosition = 32768);
        } while (!c && this._bufferPosition < this._bufferSize);
        this._bufferPosition < this._bufferSize ? ("copyWithin" in this._buffer ? this._buffer.copyWithin(0, this._bufferPosition, this._bufferSize) : this._buffer.set(this._buffer.subarray(this._bufferPosition, this._bufferSize)), this._bufferSize -= this._bufferPosition) : this._bufferSize = 0;
      };
      g.prototype._decodeInitState = function() {
        if (this._isFinalBlock) {
          return this._state = 5, !1;
        }
        var c = this._buffer, g = this._bufferSize, d = this._bitBuffer, b = this._bitLength, a = this._bufferPosition;
        if (3 > (g - a << 3) + b) {
          return !0;
        }
        3 > b && (d |= c[a++] << b, b += 8);
        var h = d & 7, d = d >> 3, b = b - 3;
        switch(h >> 1) {
          case 0:
            b = d = 0;
            if (4 > g - a) {
              return !0;
            }
            var e = c[a] | c[a + 1] << 8, c = c[a + 2] | c[a + 3] << 8, a = a + 4;
            if (65535 !== (e ^ c)) {
              this._error("inflate: invalid block 0 length");
              c = 6;
              break;
            }
            0 === e ? c = 0 : (this._block0Read = e, c = 1);
            break;
          case 1:
            c = 2;
            this._literalTable = u;
            this._distanceTable = l;
            break;
          case 2:
            if (26 > (g - a << 3) + b) {
              return !0;
            }
            for (;14 > b;) {
              d |= c[a++] << b, b += 8;
            }
            e = (d >> 10 & 15) + 4;
            if ((g - a << 3) + b < 14 + 3 * e) {
              return !0;
            }
            for (var g = {numLiteralCodes:(d & 31) + 257, numDistanceCodes:(d >> 5 & 31) + 1, codeLengthTable:void 0, bitLengths:void 0, codesRead:0, dupBits:0}, d = d >> 14, b = b - 14, v = new Uint8Array(19), m = 0;m < e;++m) {
              3 > b && (d |= c[a++] << b, b += 8), v[n[m]] = d & 7, d >>= 3, b -= 3;
            }
            for (;19 > m;m++) {
              v[n[m]] = 0;
            }
            g.bitLengths = new Uint8Array(g.numLiteralCodes + g.numDistanceCodes);
            g.codeLengthTable = t(v);
            this._block2State = g;
            c = 3;
            break;
          default:
            return this._error("inflate: unsupported block type"), !1;
        }
        this._isFinalBlock = !!(h & 1);
        this._state = c;
        this._bufferPosition = a;
        this._bitBuffer = d;
        this._bitLength = b;
        return !1;
      };
      g.prototype._error = function(c) {
        if (this.onError) {
          this.onError(c);
        }
      };
      g.prototype._decodeBlock0 = function() {
        var c = this._bufferPosition, g = this._windowPosition, d = this._block0Read, b = 65794 - g, a = this._bufferSize - c, h = a < d, e = Math.min(b, a, d);
        this._window.set(this._buffer.subarray(c, c + e), g);
        this._windowPosition = g + e;
        this._bufferPosition = c + e;
        this._block0Read = d - e;
        return d === e ? (this._state = 0, !1) : h && b < a;
      };
      g.prototype._readBits = function(c) {
        var g = this._bitBuffer, d = this._bitLength;
        if (c > d) {
          var b = this._bufferPosition, a = this._bufferSize;
          do {
            if (b >= a) {
              return this._bufferPosition = b, this._bitBuffer = g, this._bitLength = d, -1;
            }
            g |= this._buffer[b++] << d;
            d += 8;
          } while (c > d);
          this._bufferPosition = b;
        }
        this._bitBuffer = g >> c;
        this._bitLength = d - c;
        return g & (1 << c) - 1;
      };
      g.prototype._readCode = function(c) {
        var g = this._bitBuffer, d = this._bitLength, b = c.maxBits;
        if (b > d) {
          var a = this._bufferPosition, h = this._bufferSize;
          do {
            if (a >= h) {
              return this._bufferPosition = a, this._bitBuffer = g, this._bitLength = d, -1;
            }
            g |= this._buffer[a++] << d;
            d += 8;
          } while (b > d);
          this._bufferPosition = a;
        }
        c = c.codes[g & (1 << b) - 1];
        b = c >> 16;
        if (c & 32768) {
          return this._error("inflate: invalid encoding"), this._state = 6, -1;
        }
        this._bitBuffer = g >> b;
        this._bitLength = d - b;
        return c & 65535;
      };
      g.prototype._decodeBlock2Pre = function() {
        var c = this._block2State, g = c.numLiteralCodes + c.numDistanceCodes, d = c.bitLengths, b = c.codesRead, a = 0 < b ? d[b - 1] : 0, h = c.codeLengthTable, e;
        if (0 < c.dupBits) {
          e = this._readBits(c.dupBits);
          if (0 > e) {
            return !0;
          }
          for (;e--;) {
            d[b++] = a;
          }
          c.dupBits = 0;
        }
        for (;b < g;) {
          var v = this._readCode(h);
          if (0 > v) {
            return c.codesRead = b, !0;
          }
          if (16 > v) {
            d[b++] = a = v;
          } else {
            var m;
            switch(v) {
              case 16:
                m = 2;
                e = 3;
                v = a;
                break;
              case 17:
                e = m = 3;
                v = 0;
                break;
              case 18:
                m = 7, e = 11, v = 0;
            }
            for (;e--;) {
              d[b++] = v;
            }
            e = this._readBits(m);
            if (0 > e) {
              return c.codesRead = b, c.dupBits = m, !0;
            }
            for (;e--;) {
              d[b++] = v;
            }
            a = v;
          }
        }
        this._literalTable = t(d.subarray(0, c.numLiteralCodes));
        this._distanceTable = t(d.subarray(c.numLiteralCodes));
        this._state = 4;
        this._block2State = null;
        return !1;
      };
      g.prototype._decodeBlock = function() {
        var c = this._literalTable, g = this._distanceTable, d = this._window, a = this._windowPosition, v = this._copyState, m, l, n, x;
        if (0 !== v.state) {
          switch(v.state) {
            case 1:
              if (0 > (m = this._readBits(v.lenBits))) {
                return !0;
              }
              v.len += m;
              v.state = 2;
            case 2:
              if (0 > (m = this._readCode(g))) {
                return !0;
              }
              v.distBits = h[m];
              v.dist = b[m];
              v.state = 3;
            case 3:
              m = 0;
              if (0 < v.distBits && 0 > (m = this._readBits(v.distBits))) {
                return !0;
              }
              x = v.dist + m;
              l = v.len;
              for (m = a - x;l--;) {
                d[a++] = d[m++];
              }
              v.state = 0;
              if (65536 <= a) {
                return this._windowPosition = a, !1;
              }
              break;
          }
        }
        do {
          m = this._readCode(c);
          if (0 > m) {
            return this._windowPosition = a, !0;
          }
          if (256 > m) {
            d[a++] = m;
          } else {
            if (256 < m) {
              this._windowPosition = a;
              m -= 257;
              n = r[m];
              l = e[m];
              m = 0 === n ? 0 : this._readBits(n);
              if (0 > m) {
                return v.state = 1, v.len = l, v.lenBits = n, !0;
              }
              l += m;
              m = this._readCode(g);
              if (0 > m) {
                return v.state = 2, v.len = l, !0;
              }
              n = h[m];
              x = b[m];
              m = 0 === n ? 0 : this._readBits(n);
              if (0 > m) {
                return v.state = 3, v.len = l, v.dist = x, v.distBits = n, !0;
              }
              x += m;
              for (m = a - x;l--;) {
                d[a++] = d[m++];
              }
            } else {
              this._state = 0;
              break;
            }
          }
        } while (65536 > a);
        this._windowPosition = a;
        return !1;
      };
      return g;
    }(a), n, b, h, l, e, r, u, m = !1, v = function(c) {
      function g(g, d) {
        c.call(this, g);
        this._verifyHeader = g;
        this._specialInflate = d();
        this._specialInflate.setDataCallback(function(c) {
          this.onData(c);
        }.bind(this));
      }
      __extends(g, c);
      g.prototype.push = function(c) {
        if (this._verifyHeader) {
          var g;
          this._buffer ? (g = new Uint8Array(this._buffer.length + c.length), g.set(this._buffer), g.set(c, this._buffer.length), this._buffer = null) : g = new Uint8Array(c);
          var d = this._processZLibHeader(g, 0, g.length);
          if (0 === d) {
            this._buffer = g;
            return;
          }
          this._verifyHeader = !0;
          0 < d && (c = g.subarray(d));
        }
        this._specialInflate.push(c);
      };
      g.prototype.close = function() {
        this._specialInflate && (this._specialInflate.close(), this._specialInflate = null);
      };
      return g;
    }(a), x;
    (function(c) {
      c[c.WRITE = 0] = "WRITE";
      c[c.DONE = 1] = "DONE";
      c[c.ZLIB_HEADER = 2] = "ZLIB_HEADER";
    })(x || (x = {}));
    var d = function() {
      function c() {
        this.a = 1;
        this.b = 0;
      }
      c.prototype.update = function(c, d, b) {
        for (var a = this.a, h = this.b;d < b;++d) {
          a = (a + (c[d] & 255)) % 65521, h = (h + a) % 65521;
        }
        this.a = a;
        this.b = h;
      };
      c.prototype.getChecksum = function() {
        return this.b << 16 | this.a;
      };
      return c;
    }();
    f.Adler32 = d;
    x = function() {
      function c(c) {
        this._state = (this._writeZlibHeader = c) ? 2 : 0;
        this._adler32 = c ? new d : null;
      }
      c.prototype.push = function(c) {
        2 === this._state && (this.onData(new Uint8Array([120, 156])), this._state = 0);
        for (var d = c.length, b = d + 5 * Math.ceil(d / 65535), b = new Uint8Array(b), a = 0, h = 0;65535 < d;) {
          b.set(new Uint8Array([0, 255, 255, 0, 0]), a), a += 5, b.set(c.subarray(h, h + 65535), a), h += 65535, a += 65535, d -= 65535;
        }
        b.set(new Uint8Array([0, d & 255, d >> 8 & 255, ~d & 255, ~d >> 8 & 255]), a);
        a += 5;
        b.set(c.subarray(h, d), a);
        this.onData(b);
        this._adler32 && this._adler32.update(c, 0, d);
      };
      c.prototype.close = function() {
        this._state = 1;
        this.onData(new Uint8Array([1, 0, 0, 255, 255]));
        if (this._adler32) {
          var c = this._adler32.getChecksum();
          this.onData(new Uint8Array([c & 255, c >> 8 & 255, c >> 16 & 255, c >>> 24 & 255]));
        }
      };
      return c;
    }();
    f.Deflate = x;
  })(f.ArrayUtilities || (f.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(f) {
    function t(c) {
      for (var d = new Uint16Array(c), b = 0;b < c;b++) {
        d[b] = 1024;
      }
      return d;
    }
    function a(c, d, b, a) {
      for (var h = 1, e = 0, v = 0;v < b;v++) {
        var m = a.decodeBit(c, h + d), h = (h << 1) + m, e = e | m << v
      }
      return e;
    }
    function w(c, d) {
      var b = [];
      b.length = d;
      for (var a = 0;a < d;a++) {
        b[a] = new e(c);
      }
      return b;
    }
    var n = function() {
      function c() {
        this.pos = this.available = 0;
        this.buffer = new Uint8Array(2E3);
      }
      c.prototype.append = function(c) {
        var g = this.pos + this.available, d = g + c.length;
        if (d > this.buffer.length) {
          for (var b = 2 * this.buffer.length;b < d;) {
            b *= 2;
          }
          d = new Uint8Array(b);
          d.set(this.buffer);
          this.buffer = d;
        }
        this.buffer.set(c, g);
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
      function c(g) {
        this.onData = g;
        this.processed = 0;
      }
      c.prototype.writeBytes = function(c) {
        this.onData.call(null, c);
        this.processed += c.length;
      };
      return c;
    }(), h = function() {
      function c(g) {
        this.outStream = g;
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
      c.prototype.copyMatch = function(c, g) {
        for (var d = this.pos, b = this.size, a = this.buf, h = c <= d ? d - c : b - c + d, e = g;0 < e;) {
          for (var v = Math.min(Math.min(e, b - d), b - h), m = 0;m < v;m++) {
            var l = a[h++];
            a[d++] = l;
          }
          d === b && (this.pos = d, this.flush(), d = 0, this.isFull = !0);
          h === b && (h = 0);
          e -= v;
        }
        this.pos = d;
        this.totalPos += g;
      };
      c.prototype.checkDistance = function(c) {
        return c <= this.pos || this.isFull;
      };
      c.prototype.isEmpty = function() {
        return 0 === this.pos && !this.isFull;
      };
      return c;
    }(), l = function() {
      function c(g) {
        this.inStream = g;
        this.code = this.range = 0;
        this.corrupted = !1;
      }
      c.prototype.init = function() {
        0 !== this.inStream.readByte() && (this.corrupted = !0);
        this.range = -1;
        for (var c = 0, g = 0;4 > g;g++) {
          c = c << 8 | this.inStream.readByte();
        }
        c === this.range && (this.corrupted = !0);
        this.code = c;
      };
      c.prototype.isFinishedOK = function() {
        return 0 === this.code;
      };
      c.prototype.decodeDirectBits = function(c) {
        var g = 0, d = this.range, b = this.code;
        do {
          var d = d >>> 1 | 0, b = b - d | 0, a = b >> 31, b = b + (d & a) | 0;
          b === d && (this.corrupted = !0);
          0 <= d && 16777216 > d && (d <<= 8, b = b << 8 | this.inStream.readByte());
          g = (g << 1) + a + 1 | 0;
        } while (--c);
        this.range = d;
        this.code = b;
        return g;
      };
      c.prototype.decodeBit = function(c, g) {
        var d = this.range, b = this.code, a = c[g], h = (d >>> 11) * a;
        b >>> 0 < h ? (a = a + (2048 - a >> 5) | 0, d = h | 0, h = 0) : (a = a - (a >> 5) | 0, b = b - h | 0, d = d - h | 0, h = 1);
        c[g] = a & 65535;
        0 <= d && 16777216 > d && (d <<= 8, b = b << 8 | this.inStream.readByte());
        this.range = d;
        this.code = b;
        return h;
      };
      return c;
    }(), e = function() {
      function c(g) {
        this.numBits = g;
        this.probs = t(1 << g);
      }
      c.prototype.decode = function(c) {
        for (var g = 1, d = 0;d < this.numBits;d++) {
          g = (g << 1) + c.decodeBit(this.probs, g);
        }
        return g - (1 << this.numBits);
      };
      c.prototype.reverseDecode = function(c) {
        return a(this.probs, 0, this.numBits, c);
      };
      return c;
    }(), r = function() {
      function c() {
        this.choice = t(2);
        this.lowCoder = w(3, 16);
        this.midCoder = w(3, 16);
        this.highCoder = new e(8);
      }
      c.prototype.decode = function(c, g) {
        return 0 === c.decodeBit(this.choice, 0) ? this.lowCoder[g].decode(c) : 0 === c.decodeBit(this.choice, 1) ? 8 + this.midCoder[g].decode(c) : 16 + this.highCoder.decode(c);
      };
      return c;
    }(), u = function() {
      function c(g, d) {
        this.rangeDec = new l(g);
        this.outWindow = new h(d);
        this.markerIsMandatory = !1;
        this.dictSizeInProperties = this.dictSize = this.lp = this.pb = this.lc = 0;
        this.leftToUnpack = this.unpackSize = void 0;
        this.reps = new Int32Array(4);
        this.state = 0;
      }
      c.prototype.decodeProperties = function(c) {
        var g = c[0];
        if (225 <= g) {
          throw Error("Incorrect LZMA properties");
        }
        this.lc = g % 9;
        g = g / 9 | 0;
        this.pb = g / 5 | 0;
        this.lp = g % 5;
        for (g = this.dictSizeInProperties = 0;4 > g;g++) {
          this.dictSizeInProperties |= c[g + 1] << 8 * g;
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
      c.prototype.decodeLiteral = function(c, g) {
        var d = this.outWindow, b = this.rangeDec, a = 0;
        d.isEmpty() || (a = d.getByte(1));
        var h = 1, a = 768 * (((d.totalPos & (1 << this.lp) - 1) << this.lc) + (a >> 8 - this.lc));
        if (7 <= c) {
          d = d.getByte(g + 1);
          do {
            var e = d >> 7 & 1, d = d << 1, v = b.decodeBit(this.litProbs, a + ((1 + e << 8) + h)), h = h << 1 | v;
            if (e !== v) {
              break;
            }
          } while (256 > h);
        }
        for (;256 > h;) {
          h = h << 1 | b.decodeBit(this.litProbs, a + h);
        }
        return h - 256 & 255;
      };
      c.prototype.decodeDistance = function(c) {
        var g = c;
        3 < g && (g = 3);
        c = this.rangeDec;
        g = this.posSlotDecoder[g].decode(c);
        if (4 > g) {
          return g;
        }
        var d = (g >> 1) - 1, b = (2 | g & 1) << d;
        14 > g ? b = b + a(this.posDecoders, b - g, d, c) | 0 : (b = b + (c.decodeDirectBits(d - 4) << 4) | 0, b = b + this.alignDecoder.reverseDecode(c) | 0);
        return b;
      };
      c.prototype.init = function() {
        this.litProbs = t(768 << this.lc + this.lp);
        this.posSlotDecoder = w(6, 4);
        this.alignDecoder = new e(4);
        this.posDecoders = t(115);
        this.isMatch = t(192);
        this.isRep = t(12);
        this.isRepG0 = t(12);
        this.isRepG1 = t(12);
        this.isRepG2 = t(12);
        this.isRep0Long = t(192);
        this.lenDecoder = new r;
        this.repLenDecoder = new r;
      };
      c.prototype.decode = function(c) {
        for (var g = this.rangeDec, b = this.outWindow, a = this.pb, h = this.dictSize, e = this.markerIsMandatory, l = this.leftToUnpack, n = this.isMatch, r = this.isRep, u = this.isRepG0, f = this.isRepG1, t = this.isRepG2, q = this.isRep0Long, w = this.lenDecoder, C = this.repLenDecoder, z = this.reps[0], B = this.reps[1], E = this.reps[2], A = this.reps[3], D = this.state;;) {
          if (c && 48 > g.inStream.available) {
            this.outWindow.flush();
            break;
          }
          if (0 === l && !e && (this.outWindow.flush(), g.isFinishedOK())) {
            return x;
          }
          var F = b.totalPos & (1 << a) - 1;
          if (0 === g.decodeBit(n, (D << 4) + F)) {
            if (0 === l) {
              return m;
            }
            b.putByte(this.decodeLiteral(D, z));
            D = 4 > D ? 0 : 10 > D ? D - 3 : D - 6;
            l--;
          } else {
            if (0 !== g.decodeBit(r, D)) {
              if (0 === l || b.isEmpty()) {
                return m;
              }
              if (0 === g.decodeBit(u, D)) {
                if (0 === g.decodeBit(q, (D << 4) + F)) {
                  D = 7 > D ? 9 : 11;
                  b.putByte(b.getByte(z + 1));
                  l--;
                  continue;
                }
              } else {
                var G;
                0 === g.decodeBit(f, D) ? G = B : (0 === g.decodeBit(t, D) ? G = E : (G = A, A = E), E = B);
                B = z;
                z = G;
              }
              F = C.decode(g, F);
              D = 7 > D ? 8 : 11;
            } else {
              A = E;
              E = B;
              B = z;
              F = w.decode(g, F);
              D = 7 > D ? 7 : 10;
              z = this.decodeDistance(F);
              if (-1 === z) {
                return this.outWindow.flush(), g.isFinishedOK() ? v : m;
              }
              if (0 === l || z >= h || !b.checkDistance(z)) {
                return m;
              }
            }
            F += 2;
            G = !1;
            void 0 !== l && l < F && (F = l, G = !0);
            b.copyMatch(z + 1, F);
            l -= F;
            if (G) {
              return m;
            }
          }
        }
        this.state = D;
        this.reps[0] = z;
        this.reps[1] = B;
        this.reps[2] = E;
        this.reps[3] = A;
        this.leftToUnpack = l;
        return d;
      };
      c.prototype.flushOutput = function() {
        this.outWindow.flush();
      };
      return c;
    }(), m = 0, v = 1, x = 2, d = 3, c;
    (function(c) {
      c[c.WAIT_FOR_LZMA_HEADER = 0] = "WAIT_FOR_LZMA_HEADER";
      c[c.WAIT_FOR_SWF_HEADER = 1] = "WAIT_FOR_SWF_HEADER";
      c[c.PROCESS_DATA = 2] = "PROCESS_DATA";
      c[c.CLOSED = 3] = "CLOSED";
      c[c.ERROR = 4] = "ERROR";
    })(c || (c = {}));
    c = function() {
      function c(g) {
        void 0 === g && (g = !1);
        this._state = g ? 1 : 0;
        this.buffer = null;
      }
      c.prototype.push = function(c) {
        if (2 > this._state) {
          var g = this.buffer ? this.buffer.length : 0, a = (1 === this._state ? 17 : 13) + 5;
          if (g + c.length < a) {
            a = new Uint8Array(g + c.length);
            0 < g && a.set(this.buffer);
            a.set(c, g);
            this.buffer = a;
            return;
          }
          var h = new Uint8Array(a);
          0 < g && h.set(this.buffer);
          h.set(c.subarray(0, a - g), g);
          this._inStream = new n;
          this._inStream.append(h.subarray(a - 5));
          this._outStream = new b(function(c) {
            this.onData.call(null, c);
          }.bind(this));
          this._decoder = new u(this._inStream, this._outStream);
          if (1 === this._state) {
            this._decoder.decodeProperties(h.subarray(12, 17)), this._decoder.markerIsMandatory = !1, this._decoder.unpackSize = ((h[4] | h[5] << 8 | h[6] << 16 | h[7] << 24) >>> 0) - 8;
          } else {
            this._decoder.decodeProperties(h.subarray(0, 5));
            for (var g = 0, e = !1, v = 0;8 > v;v++) {
              var m = h[5 + v];
              255 !== m && (e = !0);
              g |= m << 8 * v;
            }
            this._decoder.markerIsMandatory = !e;
            this._decoder.unpackSize = e ? g : void 0;
          }
          this._decoder.create();
          c = c.subarray(a);
          this._state = 2;
        } else {
          if (2 !== this._state) {
            return;
          }
        }
        try {
          this._inStream.append(c);
          var l = this._decoder.decode(!0);
          this._inStream.compact();
          l !== d && this._checkError(l);
        } catch (r) {
          this._decoder.flushOutput(), this._decoder = null, this._error(r);
        }
      };
      c.prototype.close = function() {
        if (2 === this._state) {
          this._state = 3;
          try {
            var c = this._decoder.decode(!1);
            this._checkError(c);
          } catch (g) {
            this._decoder.flushOutput(), this._error(g);
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
        var g;
        c === m ? g = "LZMA decoding error" : c === d ? g = "Decoding is not complete" : c === v ? void 0 !== this._decoder.unpackSize && this._decoder.unpackSize !== this._outStream.processed && (g = "Finished with end marker before than specified size") : g = "Internal LZMA Error";
        g && this._error(g);
      };
      return c;
    }();
    f.LzmaDecoder = c;
  })(f.ArrayUtilities || (f.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(q) {
    function t(b) {
      return "string" === typeof b ? b : void 0 == b ? null : b + "";
    }
    var a = f.Debug.notImplemented, w = f.StringUtilities.utf8decode, n = f.StringUtilities.utf8encode, b = f.NumberUtilities.clamp, h = function() {
      return function(b, a, h) {
        this.buffer = b;
        this.length = a;
        this.littleEndian = h;
      };
    }();
    q.PlainObjectDataBuffer = h;
    for (var l = new Uint32Array(33), e = 1, r = 0;32 >= e;e++) {
      l[e] = r = r << 1 | 1;
    }
    var u;
    (function(b) {
      b[b.U8 = 1] = "U8";
      b[b.I32 = 2] = "I32";
      b[b.F32 = 4] = "F32";
    })(u || (u = {}));
    e = function() {
      function e(b) {
        void 0 === b && (b = e.INITIAL_SIZE);
        this._buffer || (this._buffer = new ArrayBuffer(b), this._position = this._length = 0, this._resetViews(), this._littleEndian = e._nativeLittleEndian, this._bitLength = this._bitBuffer = 0);
      }
      e.FromArrayBuffer = function(b, a) {
        void 0 === a && (a = -1);
        var d = Object.create(e.prototype);
        d._buffer = b;
        d._length = -1 === a ? b.byteLength : a;
        d._position = 0;
        d._resetViews();
        d._littleEndian = e._nativeLittleEndian;
        d._bitBuffer = 0;
        d._bitLength = 0;
        return d;
      };
      e.FromPlainObject = function(b) {
        var a = e.FromArrayBuffer(b.buffer, b.length);
        a._littleEndian = b.littleEndian;
        return a;
      };
      e.prototype.toPlainObject = function() {
        return new h(this._buffer, this._length, this._littleEndian);
      };
      e.prototype.clone = function() {
        var b = e.FromArrayBuffer((new Uint8Array(this._u8)).buffer, this._length);
        b._position = this._position;
        b._littleEndian = this._littleEndian;
        b._bitBuffer = this._bitBuffer;
        b._bitLength = this._bitLength;
        return b;
      };
      e.prototype._resetViews = function() {
        this._u8 = new Uint8Array(this._buffer);
        this._f32 = this._i32 = null;
      };
      e.prototype._requestViews = function(b) {
        0 === (this._buffer.byteLength & 3) && (null === this._i32 && b & 2 && (this._i32 = new Int32Array(this._buffer)), null === this._f32 && b & 4 && (this._f32 = new Float32Array(this._buffer)));
      };
      e.prototype.getBytes = function() {
        return new Uint8Array(this._buffer, 0, this._length);
      };
      e.prototype._ensureCapacity = function(b) {
        var a = this._buffer;
        if (!(a.byteLength >= b)) {
          for (var d = Math.max(a.byteLength, 1);d < b;) {
            d *= 2;
          }
          4294967295 < d && this.sec.throwError("RangeError", Errors.ParamRangeError);
          d = e._arrayBufferPool.acquire(d);
          b = this._u8;
          this._buffer = d;
          this._resetViews();
          this._u8.set(b);
          d = this._u8;
          for (b = b.length;b < d.length;b++) {
            d[b] = 0;
          }
          e._arrayBufferPool.release(a);
        }
      };
      e.prototype.clear = function() {
        this._position = this._length = 0;
      };
      e.prototype.readBoolean = function() {
        return 0 !== this.readUnsignedByte();
      };
      e.prototype.readByte = function() {
        return this.readUnsignedByte() << 24 >> 24;
      };
      e.prototype.readUnsignedByte = function() {
        this._position + 1 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        return this._u8[this._position++];
      };
      e.prototype.readBytes = function(b, a, d) {
        var c = this._position;
        a >>>= 0;
        d >>>= 0;
        0 === d && (d = this._length - c);
        c + d > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        b.length < a + d && (b._ensureCapacity(a + d), b.length = a + d);
        b._u8.set(new Uint8Array(this._buffer, c, d), a);
        this._position += d;
      };
      e.prototype.readShort = function() {
        return this.readUnsignedShort() << 16 >> 16;
      };
      e.prototype.readUnsignedShort = function() {
        var b = this._u8, a = this._position;
        a + 2 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var d = b[a + 0], b = b[a + 1];
        this._position = a + 2;
        return this._littleEndian ? b << 8 | d : d << 8 | b;
      };
      e.prototype.readInt = function() {
        var b = this._u8, a = this._position;
        a + 4 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var d = b[a + 0], c = b[a + 1], g = b[a + 2], b = b[a + 3];
        this._position = a + 4;
        return this._littleEndian ? b << 24 | g << 16 | c << 8 | d : d << 24 | c << 16 | g << 8 | b;
      };
      e.prototype.readUnsignedInt = function() {
        return this.readInt() >>> 0;
      };
      e.prototype.readFloat = function() {
        var b = this._position;
        b + 4 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        this._position = b + 4;
        this._requestViews(4);
        if (this._littleEndian && 0 === (b & 3) && this._f32) {
          return this._f32[b >> 2];
        }
        var a = this._u8, d = f.IntegerUtilities.u8;
        this._littleEndian ? (d[0] = a[b + 0], d[1] = a[b + 1], d[2] = a[b + 2], d[3] = a[b + 3]) : (d[3] = a[b + 0], d[2] = a[b + 1], d[1] = a[b + 2], d[0] = a[b + 3]);
        return f.IntegerUtilities.f32[0];
      };
      e.prototype.readDouble = function() {
        var b = this._u8, a = this._position;
        a + 8 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var d = f.IntegerUtilities.u8;
        this._littleEndian ? (d[0] = b[a + 0], d[1] = b[a + 1], d[2] = b[a + 2], d[3] = b[a + 3], d[4] = b[a + 4], d[5] = b[a + 5], d[6] = b[a + 6], d[7] = b[a + 7]) : (d[0] = b[a + 7], d[1] = b[a + 6], d[2] = b[a + 5], d[3] = b[a + 4], d[4] = b[a + 3], d[5] = b[a + 2], d[6] = b[a + 1], d[7] = b[a + 0]);
        this._position = a + 8;
        return f.IntegerUtilities.f64[0];
      };
      e.prototype.writeBoolean = function(b) {
        this.writeByte(b ? 1 : 0);
      };
      e.prototype.writeByte = function(b) {
        var a = this._position + 1;
        this._ensureCapacity(a);
        this._u8[this._position++] = b;
        a > this._length && (this._length = a);
      };
      e.prototype.writeUnsignedByte = function(b) {
        var a = this._position + 1;
        this._ensureCapacity(a);
        this._u8[this._position++] = b;
        a > this._length && (this._length = a);
      };
      e.prototype.writeRawBytes = function(b) {
        var a = this._position + b.length;
        this._ensureCapacity(a);
        this._u8.set(b, this._position);
        this._position = a;
        a > this._length && (this._length = a);
      };
      e.prototype.writeBytes = function(a, h, d) {
        f.isNullOrUndefined(a) && this.sec.throwError("TypeError", Errors.NullPointerError, "bytes");
        h >>>= 0;
        d >>>= 0;
        2 > arguments.length && (h = 0);
        3 > arguments.length && (d = 0);
        h === b(h, 0, a.length) && h + d === b(h + d, 0, a.length) || this.sec.throwError("RangeError", Errors.ParamRangeError);
        0 === d && (d = a.length - h);
        this.writeRawBytes(new Int8Array(a._buffer, h, d));
      };
      e.prototype.writeShort = function(b) {
        this.writeUnsignedShort(b);
      };
      e.prototype.writeUnsignedShort = function(b) {
        var a = this._position;
        this._ensureCapacity(a + 2);
        var d = this._u8;
        this._littleEndian ? (d[a + 0] = b, d[a + 1] = b >> 8) : (d[a + 0] = b >> 8, d[a + 1] = b);
        this._position = a += 2;
        a > this._length && (this._length = a);
      };
      e.prototype.writeInt = function(b) {
        this.writeUnsignedInt(b);
      };
      e.prototype.write2Ints = function(b, a) {
        this.write2UnsignedInts(b, a);
      };
      e.prototype.write4Ints = function(b, a, d, c) {
        this.write4UnsignedInts(b, a, d, c);
      };
      e.prototype.writeUnsignedInt = function(b) {
        var a = this._position;
        this._ensureCapacity(a + 4);
        this._requestViews(2);
        if (this._littleEndian === e._nativeLittleEndian && 0 === (a & 3) && this._i32) {
          this._i32[a >> 2] = b;
        } else {
          var d = this._u8;
          this._littleEndian ? (d[a + 0] = b, d[a + 1] = b >> 8, d[a + 2] = b >> 16, d[a + 3] = b >> 24) : (d[a + 0] = b >> 24, d[a + 1] = b >> 16, d[a + 2] = b >> 8, d[a + 3] = b);
        }
        this._position = a += 4;
        a > this._length && (this._length = a);
      };
      e.prototype.write2UnsignedInts = function(b, a) {
        var d = this._position;
        this._ensureCapacity(d + 8);
        this._requestViews(2);
        this._littleEndian === e._nativeLittleEndian && 0 === (d & 3) && this._i32 ? (this._i32[(d >> 2) + 0] = b, this._i32[(d >> 2) + 1] = a, this._position = d += 8, d > this._length && (this._length = d)) : (this.writeUnsignedInt(b), this.writeUnsignedInt(a));
      };
      e.prototype.write4UnsignedInts = function(b, a, d, c) {
        var g = this._position;
        this._ensureCapacity(g + 16);
        this._requestViews(2);
        this._littleEndian === e._nativeLittleEndian && 0 === (g & 3) && this._i32 ? (this._i32[(g >> 2) + 0] = b, this._i32[(g >> 2) + 1] = a, this._i32[(g >> 2) + 2] = d, this._i32[(g >> 2) + 3] = c, this._position = g += 16, g > this._length && (this._length = g)) : (this.writeUnsignedInt(b), this.writeUnsignedInt(a), this.writeUnsignedInt(d), this.writeUnsignedInt(c));
      };
      e.prototype.writeFloat = function(b) {
        var a = this._position;
        this._ensureCapacity(a + 4);
        this._requestViews(4);
        if (this._littleEndian === e._nativeLittleEndian && 0 === (a & 3) && this._f32) {
          this._f32[a >> 2] = b;
        } else {
          var d = this._u8;
          f.IntegerUtilities.f32[0] = b;
          b = f.IntegerUtilities.u8;
          this._littleEndian ? (d[a + 0] = b[0], d[a + 1] = b[1], d[a + 2] = b[2], d[a + 3] = b[3]) : (d[a + 0] = b[3], d[a + 1] = b[2], d[a + 2] = b[1], d[a + 3] = b[0]);
        }
        this._position = a += 4;
        a > this._length && (this._length = a);
      };
      e.prototype.write2Floats = function(b, a) {
        var d = this._position;
        this._ensureCapacity(d + 8);
        this._requestViews(4);
        this._littleEndian === e._nativeLittleEndian && 0 === (d & 3) && this._f32 ? (this._f32[(d >> 2) + 0] = b, this._f32[(d >> 2) + 1] = a, this._position = d += 8, d > this._length && (this._length = d)) : (this.writeFloat(b), this.writeFloat(a));
      };
      e.prototype.write6Floats = function(b, a, d, c, g, k) {
        var h = this._position;
        this._ensureCapacity(h + 24);
        this._requestViews(4);
        this._littleEndian === e._nativeLittleEndian && 0 === (h & 3) && this._f32 ? (this._f32[(h >> 2) + 0] = b, this._f32[(h >> 2) + 1] = a, this._f32[(h >> 2) + 2] = d, this._f32[(h >> 2) + 3] = c, this._f32[(h >> 2) + 4] = g, this._f32[(h >> 2) + 5] = k, this._position = h += 24, h > this._length && (this._length = h)) : (this.writeFloat(b), this.writeFloat(a), this.writeFloat(d), this.writeFloat(c), this.writeFloat(g), this.writeFloat(k));
      };
      e.prototype.writeDouble = function(b) {
        var a = this._position;
        this._ensureCapacity(a + 8);
        var d = this._u8;
        f.IntegerUtilities.f64[0] = b;
        b = f.IntegerUtilities.u8;
        this._littleEndian ? (d[a + 0] = b[0], d[a + 1] = b[1], d[a + 2] = b[2], d[a + 3] = b[3], d[a + 4] = b[4], d[a + 5] = b[5], d[a + 6] = b[6], d[a + 7] = b[7]) : (d[a + 0] = b[7], d[a + 1] = b[6], d[a + 2] = b[5], d[a + 3] = b[4], d[a + 4] = b[3], d[a + 5] = b[2], d[a + 6] = b[1], d[a + 7] = b[0]);
        this._position = a += 8;
        a > this._length && (this._length = a);
      };
      e.prototype.readRawBytes = function() {
        return new Int8Array(this._buffer, 0, this._length);
      };
      e.prototype.writeUTF = function(b) {
        b = t(b);
        b = w(b);
        this.writeShort(b.length);
        this.writeRawBytes(b);
      };
      e.prototype.writeUTFBytes = function(b) {
        b = t(b);
        b = w(b);
        this.writeRawBytes(b);
      };
      e.prototype.readUTF = function() {
        return this.readUTFBytes(this.readShort());
      };
      e.prototype.readUTFBytes = function(b) {
        b >>>= 0;
        var a = this._position;
        a + b > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        this._position += b;
        return n(new Int8Array(this._buffer, a, b));
      };
      Object.defineProperty(e.prototype, "length", {get:function() {
        return this._length;
      }, set:function(a) {
        a >>>= 0;
        a > this._buffer.byteLength && this._ensureCapacity(a);
        this._length = a;
        this._position = b(this._position, 0, this._length);
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(e.prototype, "bytesAvailable", {get:function() {
        return this._length - this._position;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(e.prototype, "position", {get:function() {
        return this._position;
      }, set:function(b) {
        this._position = b >>> 0;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(e.prototype, "buffer", {get:function() {
        return this._buffer;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(e.prototype, "bytes", {get:function() {
        return this._u8;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(e.prototype, "ints", {get:function() {
        this._requestViews(2);
        return this._i32;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(e.prototype, "objectEncoding", {get:function() {
        return this._objectEncoding;
      }, set:function(b) {
        this._objectEncoding = b >>> 0;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(e.prototype, "endian", {get:function() {
        return this._littleEndian ? "littleEndian" : "bigEndian";
      }, set:function(b) {
        b = t(b);
        this._littleEndian = "auto" === b ? e._nativeLittleEndian : "littleEndian" === b;
      }, enumerable:!0, configurable:!0});
      e.prototype.toString = function() {
        return n(new Int8Array(this._buffer, 0, this._length));
      };
      e.prototype.toBlob = function(b) {
        return new Blob([new Int8Array(this._buffer, this._position, this._length)], {type:b});
      };
      e.prototype.writeMultiByte = function(b, h) {
        t(b);
        t(h);
        a("packageInternal flash.utils.ObjectOutput::writeMultiByte");
      };
      e.prototype.readMultiByte = function(b, h) {
        t(h);
        a("packageInternal flash.utils.ObjectInput::readMultiByte");
      };
      e.prototype.getValue = function(b) {
        b |= 0;
        return b >= this._length ? void 0 : this._u8[b];
      };
      e.prototype.setValue = function(b, a) {
        b |= 0;
        var d = b + 1;
        this._ensureCapacity(d);
        this._u8[b] = a;
        d > this._length && (this._length = d);
      };
      e.prototype.readFixed = function() {
        return this.readInt() / 65536;
      };
      e.prototype.readFixed8 = function() {
        return this.readShort() / 256;
      };
      e.prototype.readFloat16 = function() {
        var b = this.readUnsignedShort(), a = b >> 15 ? -1 : 1, d = (b & 31744) >> 10, b = b & 1023;
        return d ? 31 === d ? b ? NaN : Infinity * a : a * Math.pow(2, d - 15) * (1 + b / 1024) : a * Math.pow(2, -14) * (b / 1024);
      };
      e.prototype.readEncodedU32 = function() {
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
      e.prototype.readBits = function(b) {
        return this.readUnsignedBits(b) << 32 - b >> 32 - b;
      };
      e.prototype.readUnsignedBits = function(b) {
        for (var a = this._bitBuffer, d = this._bitLength;b > d;) {
          a = a << 8 | this.readUnsignedByte(), d += 8;
        }
        d -= b;
        b = a >>> d & l[b];
        this._bitBuffer = a;
        this._bitLength = d;
        return b;
      };
      e.prototype.readFixedBits = function(b) {
        return this.readBits(b) / 65536;
      };
      e.prototype.readString = function(b) {
        var a = this._position;
        if (b) {
          a + b > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError), this._position += b;
        } else {
          b = 0;
          for (var d = a;d < this._length && this._u8[d];d++) {
            b++;
          }
          this._position += b + 1;
        }
        return n(new Int8Array(this._buffer, a, b));
      };
      e.prototype.align = function() {
        this._bitLength = this._bitBuffer = 0;
      };
      e.prototype.deflate = function() {
        this.compress("deflate");
      };
      e.prototype.inflate = function() {
        this.uncompress("deflate");
      };
      e.prototype.compress = function(b) {
        b = 0 === arguments.length ? "zlib" : t(b);
        var a;
        switch(b) {
          case "zlib":
            a = new q.Deflate(!0);
            break;
          case "deflate":
            a = new q.Deflate(!1);
            break;
          default:
            return;
        }
        var d = new e;
        a.onData = d.writeRawBytes.bind(d);
        a.push(this._u8.subarray(0, this._length));
        a.close();
        this._ensureCapacity(d._u8.length);
        this._u8.set(d._u8);
        this.length = d.length;
        this._position = 0;
      };
      e.prototype.uncompress = function(b) {
        b = 0 === arguments.length ? "zlib" : t(b);
        var a;
        switch(b) {
          case "zlib":
            a = q.Inflate.create(!0);
            break;
          case "deflate":
            a = q.Inflate.create(!1);
            break;
          case "lzma":
            a = new q.LzmaDecoder(!1);
            break;
          default:
            return;
        }
        var d = new e, c;
        a.onData = d.writeRawBytes.bind(d);
        a.onError = function(g) {
          return c = g;
        };
        a.push(this._u8.subarray(0, this._length));
        c && this.sec.throwError("IOError", Errors.CompressedDataError);
        a.close();
        this._ensureCapacity(d._u8.length);
        this._u8.set(d._u8);
        this.length = d.length;
        this._position = 0;
      };
      e._nativeLittleEndian = 1 === (new Int8Array((new Int32Array([1])).buffer))[0];
      e.INITIAL_SIZE = 128;
      e._arrayBufferPool = new f.ArrayBufferPool;
      return e;
    }();
    q.DataBuffer = e;
  })(f.ArrayUtilities || (f.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  var q = f.ArrayUtilities.DataBuffer, t = f.ArrayUtilities.ensureTypedArrayCapacity;
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
  })(f.PathCommand || (f.PathCommand = {}));
  (function(a) {
    a[a.Linear = 16] = "Linear";
    a[a.Radial = 18] = "Radial";
  })(f.GradientType || (f.GradientType = {}));
  (function(a) {
    a[a.Pad = 0] = "Pad";
    a[a.Reflect = 1] = "Reflect";
    a[a.Repeat = 2] = "Repeat";
  })(f.GradientSpreadMethod || (f.GradientSpreadMethod = {}));
  (function(a) {
    a[a.RGB = 0] = "RGB";
    a[a.LinearRGB = 1] = "LinearRGB";
  })(f.GradientInterpolationMethod || (f.GradientInterpolationMethod = {}));
  (function(a) {
    a[a.None = 0] = "None";
    a[a.Normal = 1] = "Normal";
    a[a.Vertical = 2] = "Vertical";
    a[a.Horizontal = 3] = "Horizontal";
  })(f.LineScaleMode || (f.LineScaleMode = {}));
  var a = function() {
    return function(a, b, h, l, e, r, u, m, v, f, d) {
      this.commands = a;
      this.commandsPosition = b;
      this.coordinates = h;
      this.morphCoordinates = l;
      this.coordinatesPosition = e;
      this.styles = r;
      this.stylesLength = u;
      this.morphStyles = m;
      this.morphStylesLength = v;
      this.hasFills = f;
      this.hasLines = d;
    };
  }();
  f.PlainObjectShapeData = a;
  var w;
  (function(a) {
    a[a.Commands = 32] = "Commands";
    a[a.Coordinates = 128] = "Coordinates";
    a[a.Styles = 16] = "Styles";
  })(w || (w = {}));
  w = function() {
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
      a.styles = q.FromArrayBuffer(b.styles, b.stylesLength);
      a.styles.endian = "auto";
      b.morphStyles && (a.morphStyles = q.FromArrayBuffer(b.morphStyles, b.morphStylesLength), a.morphStyles.endian = "auto");
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
    n.prototype.curveTo = function(b, a, l, e) {
      this.ensurePathCapacities(1, 4);
      this.commands[this.commandsPosition++] = 11;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = l;
      this.coordinates[this.coordinatesPosition++] = e;
    };
    n.prototype.cubicCurveTo = function(b, a, l, e, r, u) {
      this.ensurePathCapacities(1, 6);
      this.commands[this.commandsPosition++] = 12;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = l;
      this.coordinates[this.coordinatesPosition++] = e;
      this.coordinates[this.coordinatesPosition++] = r;
      this.coordinates[this.coordinatesPosition++] = u;
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
    n.prototype.lineStyle = function(b, a, l, e, r, u, m) {
      this.ensurePathCapacities(2, 0);
      this.commands[this.commandsPosition++] = 5;
      this.coordinates[this.coordinatesPosition++] = b;
      b = this.styles;
      b.writeUnsignedInt(a);
      b.writeBoolean(l);
      b.writeUnsignedByte(e);
      b.writeUnsignedByte(r);
      b.writeUnsignedByte(u);
      b.writeUnsignedByte(m);
      this.hasLines = !0;
    };
    n.prototype.writeMorphLineStyle = function(b, a) {
      this.morphCoordinates[this.coordinatesPosition - 1] = b;
      this.morphStyles.writeUnsignedInt(a);
    };
    n.prototype.beginBitmap = function(b, a, l, e, r) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = b;
      b = this.styles;
      b.writeUnsignedInt(a);
      this._writeStyleMatrix(l, !1);
      b.writeBoolean(e);
      b.writeBoolean(r);
      this.hasFills = !0;
    };
    n.prototype.writeMorphBitmap = function(b) {
      this._writeStyleMatrix(b, !0);
    };
    n.prototype.beginGradient = function(b, a, l, e, r, u, m, n) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = b;
      b = this.styles;
      b.writeUnsignedByte(e);
      b.writeShort(n);
      this._writeStyleMatrix(r, !1);
      e = a.length;
      b.writeByte(e);
      for (r = 0;r < e;r++) {
        b.writeUnsignedByte(l[r]), b.writeUnsignedInt(a[r]);
      }
      b.writeUnsignedByte(u);
      b.writeUnsignedByte(m);
      this.hasFills = !0;
    };
    n.prototype.writeMorphGradient = function(b, a, l) {
      this._writeStyleMatrix(l, !0);
      l = this.morphStyles;
      for (var e = 0;e < b.length;e++) {
        l.writeUnsignedByte(a[e]), l.writeUnsignedInt(b[e]);
      }
    };
    n.prototype.writeCommandAndCoordinates = function(b, a, l) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = l;
    };
    n.prototype.writeCoordinates = function(b, a) {
      this.ensurePathCapacities(0, 2);
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = a;
    };
    n.prototype.writeMorphCoordinates = function(b, a) {
      this.morphCoordinates = t(this.morphCoordinates, this.coordinatesPosition);
      this.morphCoordinates[this.coordinatesPosition - 2] = b;
      this.morphCoordinates[this.coordinatesPosition - 1] = a;
    };
    n.prototype.clear = function() {
      this.commandsPosition = this.coordinatesPosition = 0;
      this.commands = new Uint8Array(32);
      this.coordinates = new Int32Array(128);
      this.styles = new q(16);
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
      b.styles = new q(this.styles.length);
      b.styles.writeRawBytes(this.styles.bytes.subarray(0, this.styles.length));
      this.morphStyles && (b.morphStyles = new q(this.morphStyles.length), b.morphStyles.writeRawBytes(this.morphStyles.bytes.subarray(0, this.morphStyles.length)));
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
      this.commands = t(this.commands, this.commandsPosition + b);
      this.coordinates = t(this.coordinates, this.coordinatesPosition + a);
    };
    return n;
  }();
  f.ShapeData = w;
})(Shumway || (Shumway = {}));
(function(f) {
  (function(f) {
    (function(f) {
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
      })(f.SwfTagCode || (f.SwfTagCode = {}));
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
      })(f.DefinitionTags || (f.DefinitionTags = {}));
      (function(a) {
        a[a.CODE_DEFINE_BITS = 6] = "CODE_DEFINE_BITS";
        a[a.CODE_DEFINE_BITS_JPEG2 = 21] = "CODE_DEFINE_BITS_JPEG2";
        a[a.CODE_DEFINE_BITS_JPEG3 = 35] = "CODE_DEFINE_BITS_JPEG3";
        a[a.CODE_DEFINE_BITS_JPEG4 = 90] = "CODE_DEFINE_BITS_JPEG4";
      })(f.ImageDefinitionTags || (f.ImageDefinitionTags = {}));
      (function(a) {
        a[a.CODE_DEFINE_FONT = 10] = "CODE_DEFINE_FONT";
        a[a.CODE_DEFINE_FONT2 = 48] = "CODE_DEFINE_FONT2";
        a[a.CODE_DEFINE_FONT3 = 75] = "CODE_DEFINE_FONT3";
        a[a.CODE_DEFINE_FONT4 = 91] = "CODE_DEFINE_FONT4";
      })(f.FontDefinitionTags || (f.FontDefinitionTags = {}));
      (function(a) {
        a[a.CODE_PLACE_OBJECT = 4] = "CODE_PLACE_OBJECT";
        a[a.CODE_PLACE_OBJECT2 = 26] = "CODE_PLACE_OBJECT2";
        a[a.CODE_PLACE_OBJECT3 = 70] = "CODE_PLACE_OBJECT3";
        a[a.CODE_REMOVE_OBJECT = 5] = "CODE_REMOVE_OBJECT";
        a[a.CODE_REMOVE_OBJECT2 = 28] = "CODE_REMOVE_OBJECT2";
        a[a.CODE_START_SOUND = 15] = "CODE_START_SOUND";
        a[a.CODE_START_SOUND2 = 89] = "CODE_START_SOUND2";
        a[a.CODE_VIDEO_FRAME = 61] = "CODE_VIDEO_FRAME";
      })(f.ControlTags || (f.ControlTags = {}));
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
      })(f.PlaceObjectFlags || (f.PlaceObjectFlags = {}));
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
      })(f.AVM1ClipEvents || (f.AVM1ClipEvents = {}));
      (function(a) {
        a[a.StateUp = 1] = "StateUp";
        a[a.StateOver = 2] = "StateOver";
        a[a.StateDown = 4] = "StateDown";
        a[a.StateHitTest = 8] = "StateHitTest";
        a[a.HasFilterList = 16] = "HasFilterList";
        a[a.HasBlendMode = 32] = "HasBlendMode";
      })(f.ButtonCharacterFlags || (f.ButtonCharacterFlags = {}));
      (function(a) {
        a[a.Bold = 1] = "Bold";
        a[a.Italic = 2] = "Italic";
        a[a.WideOrHasFontData = 4] = "WideOrHasFontData";
        a[a.WideOffset = 8] = "WideOffset";
        a[a.Ansi = 16] = "Ansi";
        a[a.SmallText = 32] = "SmallText";
        a[a.ShiftJis = 64] = "ShiftJis";
        a[a.HasLayout = 128] = "HasLayout";
      })(f.FontFlags || (f.FontFlags = {}));
      (function(a) {
        a[a.HasMoveX = 1] = "HasMoveX";
        a[a.HasMoveY = 2] = "HasMoveY";
        a[a.HasColor = 4] = "HasColor";
        a[a.HasFont = 8] = "HasFont";
      })(f.TextRecordFlags || (f.TextRecordFlags = {}));
      (function(a) {
        a[a.HasInPoint = 1] = "HasInPoint";
        a[a.HasOutPoint = 2] = "HasOutPoint";
        a[a.HasLoops = 4] = "HasLoops";
        a[a.HasEnvelope = 8] = "HasEnvelope";
        a[a.NoMultiple = 16] = "NoMultiple";
        a[a.Stop = 32] = "Stop";
      })(f.SoundInfoFlags || (f.SoundInfoFlags = {}));
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
      })(f.TextFlags || (f.TextFlags = {}));
      (function(a) {
        a[a.UsesScalingStrokes = 1] = "UsesScalingStrokes";
        a[a.UsesNonScalingStrokes = 2] = "UsesNonScalingStrokes";
        a[a.UsesFillWindingRule = 4] = "UsesFillWindingRule";
        a[a.IsMorph = 8] = "IsMorph";
      })(f.ShapeFlags || (f.ShapeFlags = {}));
      (function(a) {
        a[a.Move = 1] = "Move";
        a[a.HasFillStyle0 = 2] = "HasFillStyle0";
        a[a.HasFillStyle1 = 4] = "HasFillStyle1";
        a[a.HasLineStyle = 8] = "HasLineStyle";
        a[a.HasNewStyles = 16] = "HasNewStyles";
        a[a.IsStraight = 32] = "IsStraight";
        a[a.IsGeneral = 64] = "IsGeneral";
        a[a.IsVertical = 128] = "IsVertical";
      })(f.ShapeRecordFlags || (f.ShapeRecordFlags = {}));
    })(f.Parser || (f.Parser = {}));
  })(f.SWF || (f.SWF = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  var q = f.Debug.unexpected, t = function() {
    function a(a, n, b, h) {
      this.url = a;
      this.method = n;
      this.mimeType = b;
      this.data = h;
    }
    a.prototype.readAll = function(a, n) {
      var b = this.url, h = this.xhr = new XMLHttpRequest({mozSystem:!0});
      h.open(this.method || "GET", this.url, !0);
      h.responseType = "arraybuffer";
      a && (h.onprogress = function(b) {
        a(h.response, b.loaded, b.total);
      });
      h.onreadystatechange = function(a) {
        4 === h.readyState && (200 !== h.status && 0 !== h.status || null === h.response ? (q("Path: " + b + " not found."), n(null, h.statusText)) : n(h.response));
      };
      this.mimeType && h.setRequestHeader("Content-Type", this.mimeType);
      h.send(this.data || null);
    };
    a.prototype.readChunked = function(a, n, b, h, l, e) {
      if (0 >= a) {
        this.readAsync(n, b, h, l, e);
      } else {
        var r = 0, u = new Uint8Array(a), m = 0, v;
        this.readAsync(function(b, d) {
          v = d.total;
          for (var c = b.length, g = 0;r + c >= a;) {
            var k = a - r;
            u.set(b.subarray(g, g + k), r);
            g += k;
            c -= k;
            m += a;
            n(u, {loaded:m, total:v});
            r = 0;
          }
          u.set(b.subarray(g), r);
          r += c;
        }, b, h, function() {
          0 < r && (m += r, n(u.subarray(0, r), {loaded:m, total:v}), r = 0);
          l && l();
        }, e);
      }
    };
    a.prototype.readAsync = function(a, n, b, h, l) {
      var e = this.xhr = new XMLHttpRequest({mozSystem:!0}), r = this.url, u = 0, m = 0;
      e.open(this.method || "GET", r, !0);
      e.responseType = "moz-chunked-arraybuffer";
      var v = "moz-chunked-arraybuffer" !== e.responseType;
      v && (e.responseType = "arraybuffer");
      e.onprogress = function(b) {
        v || (u = b.loaded, m = b.total, b = new Uint8Array(e.response), u = Math.max(u, b.byteLength), m = Math.max(m, b.byteLength), a(b, {loaded:u, total:m}));
      };
      e.onreadystatechange = function(b) {
        2 === e.readyState && l && l(r, e.status, e.getAllResponseHeaders());
        4 === e.readyState && (200 !== e.status && 0 !== e.status || null === e.response && (0 === m || u !== m) ? n(e.statusText) : v && (b = e.response, a(new Uint8Array(b), {loaded:b.byteLength, total:b.byteLength})));
      };
      e.onload = function() {
        h && h();
      };
      this.mimeType && e.setRequestHeader("Content-Type", this.mimeType);
      e.send(this.data || null);
      b && b();
    };
    a.prototype.abort = function() {
      this.xhr && (this.xhr.abort(), this.xhr = null);
    };
    return a;
  }();
  f.BinaryFileReader = t;
})(Shumway || (Shumway = {}));
(function(f) {
  var q = function() {
    function f() {
      this.isAS3TraceOn = !0;
      this._startTime = Date.now();
    }
    Object.defineProperty(f.prototype, "currentTimestamp", {get:function() {
      return Date.now() - this._startTime;
    }, enumerable:!0, configurable:!0});
    f.prototype._writeLine = function(a) {
    };
    f.prototype.writeAS3Trace = function(a) {
    };
    return f;
  }();
  f.FlashLog = q;
  f.flashlog = null;
})(Shumway || (Shumway = {}));
(function(f) {
  (function(f) {
    (function(a) {
      a[a.Objects = 0] = "Objects";
      a[a.References = 1] = "References";
    })(f.RemotingPhase || (f.RemotingPhase = {}));
    (function(a) {
      a[a.HasMatrix = 1] = "HasMatrix";
      a[a.HasBounds = 2] = "HasBounds";
      a[a.HasChildren = 4] = "HasChildren";
      a[a.HasColorTransform = 8] = "HasColorTransform";
      a[a.HasClipRect = 16] = "HasClipRect";
      a[a.HasMiscellaneousProperties = 32] = "HasMiscellaneousProperties";
      a[a.HasMask = 64] = "HasMask";
      a[a.HasClip = 128] = "HasClip";
    })(f.MessageBits || (f.MessageBits = {}));
    (function(a) {
      a[a.None = 0] = "None";
      a[a.Asset = 134217728] = "Asset";
    })(f.IDMask || (f.IDMask = {}));
    (function(a) {
      a[a.EOF = 0] = "EOF";
      a[a.UpdateFrame = 100] = "UpdateFrame";
      a[a.UpdateGraphics = 101] = "UpdateGraphics";
      a[a.UpdateBitmapData = 102] = "UpdateBitmapData";
      a[a.UpdateTextContent = 103] = "UpdateTextContent";
      a[a.UpdateStage = 104] = "UpdateStage";
      a[a.UpdateNetStream = 105] = "UpdateNetStream";
      a[a.RequestBitmapData = 106] = "RequestBitmapData";
      a[a.UpdateCurrentMouseTarget = 107] = "UpdateCurrentMouseTarget";
      a[a.DrawToBitmap = 200] = "DrawToBitmap";
      a[a.MouseEvent = 300] = "MouseEvent";
      a[a.KeyboardEvent = 301] = "KeyboardEvent";
      a[a.FocusEvent = 302] = "FocusEvent";
    })(f.MessageTag || (f.MessageTag = {}));
    (function(a) {
      a[a.Blur = 0] = "Blur";
      a[a.DropShadow = 1] = "DropShadow";
      a[a.ColorMatrix = 2] = "ColorMatrix";
    })(f.FilterType || (f.FilterType = {}));
    (function(a) {
      a[a.Identity = 0] = "Identity";
      a[a.AlphaMultiplierOnly = 1] = "AlphaMultiplierOnly";
      a[a.AlphaMultiplierWithOffsets = 2] = "AlphaMultiplierWithOffsets";
      a[a.All = 3] = "All";
    })(f.ColorTransformEncoding || (f.ColorTransformEncoding = {}));
    (function(a) {
      a[a.TranslationOnly = 0] = "TranslationOnly";
      a[a.ScaleAndTranslationOnly = 1] = "ScaleAndTranslationOnly";
      a[a.UniformScaleAndTranslationOnly = 2] = "UniformScaleAndTranslationOnly";
      a[a.All = 3] = "All";
    })(f.MatrixEncoding || (f.MatrixEncoding = {}));
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
    })(f.VideoPlaybackEvent || (f.VideoPlaybackEvent = {}));
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
    })(f.VideoControlEvent || (f.VideoControlEvent = {}));
    (function(a) {
      a[a.ShowAll = 0] = "ShowAll";
      a[a.ExactFit = 1] = "ExactFit";
      a[a.NoBorder = 2] = "NoBorder";
      a[a.NoScale = 4] = "NoScale";
    })(f.StageScaleMode || (f.StageScaleMode = {}));
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
    })(f.StageAlignFlags || (f.StageAlignFlags = {}));
    f.MouseEventNames = "click dblclick mousedown mousemove mouseup mouseover mouseout".split(" ");
    f.KeyboardEventNames = ["keydown", "keypress", "keyup"];
    (function(a) {
      a[a.CtrlKey = 1] = "CtrlKey";
      a[a.AltKey = 2] = "AltKey";
      a[a.ShiftKey = 4] = "ShiftKey";
    })(f.KeyboardEventFlags || (f.KeyboardEventFlags = {}));
    (function(a) {
      a[a.DocumentHidden = 0] = "DocumentHidden";
      a[a.DocumentVisible = 1] = "DocumentVisible";
      a[a.WindowBlur = 2] = "WindowBlur";
      a[a.WindowFocus = 3] = "WindowFocus";
    })(f.FocusEventType || (f.FocusEventType = {}));
    var t = function() {
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
        var b = this.target.document.createEvent("CustomEvent"), h = {msg:a, result:void 0};
        b.initCustomEvent("syncmessage", !1, !1, h);
        this.target.dispatchEvent(b);
        return h.result;
      };
      return a;
    }();
    f.WindowTransportPeer = t;
    t = function() {
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
    f.ShumwayComTransportPeer = t;
  })(f.Remoting || (f.Remoting = {}));
})(Shumway || (Shumway = {}));
var throwError, Errors;
(function(f) {
  (function(f) {
    (function(f) {
      var a = function() {
        function a() {
        }
        a.toRGBA = function(b, a, l, e) {
          void 0 === e && (e = 1);
          return "rgba(" + b + "," + a + "," + l + "," + e + ")";
        };
        return a;
      }();
      f.UI = a;
      var q = function() {
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
      f.UIThemeDark = q;
      q = function() {
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
      f.UIThemeLight = q;
    })(f.Theme || (f.Theme = {}));
  })(f.Tools || (f.Tools = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(f) {
    (function(f) {
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
          for (var b = 0, h = this.snapshotCount;b < h;b++) {
            a(this._snapshots[b], b);
          }
        };
        a.prototype.createSnapshots = function() {
          var a = Number.MIN_VALUE, b = 0;
          for (this._snapshots = [];0 < this._buffers.length;) {
            var h = this._buffers.shift().createSnapshot();
            h && (a < h.endTime && (a = h.endTime), b < h.maxDepth && (b = h.maxDepth), this._snapshots.push(h));
          }
          this._windowEnd = this._endTime = a;
          this._maxDepth = b;
        };
        a.prototype.setWindow = function(a, b) {
          if (a > b) {
            var h = a;
            a = b;
            b = h;
          }
          h = Math.min(b - a, this.totalTime);
          a < this._startTime ? (a = this._startTime, b = this._startTime + h) : b > this._endTime && (a = this._endTime - h, b = this._endTime);
          this._windowStart = a;
          this._windowEnd = b;
        };
        a.prototype.moveWindowTo = function(a) {
          this.setWindow(a - this.windowLength / 2, a + this.windowLength / 2);
        };
        return a;
      }();
      f.Profile = a;
    })(f.Profiler || (f.Profiler = {}));
  })(f.Tools || (f.Tools = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(f, q) {
  function t() {
    this.constructor = f;
  }
  for (var a in q) {
    q.hasOwnProperty(a) && (f[a] = q[a]);
  }
  t.prototype = q.prototype;
  f.prototype = new t;
};
(function(f) {
  (function(f) {
    (function(f) {
      var a = function() {
        return function(a) {
          this.kind = a;
          this.totalTime = this.selfTime = this.count = 0;
        };
      }();
      f.TimelineFrameStatistics = a;
      var q = function() {
        function f(b, a, l, e, r, u) {
          this.parent = b;
          this.kind = a;
          this.startData = l;
          this.endData = e;
          this.startTime = r;
          this.endTime = u;
          this.maxDepth = 0;
        }
        Object.defineProperty(f.prototype, "totalTime", {get:function() {
          return this.endTime - this.startTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(f.prototype, "selfTime", {get:function() {
          var a = this.totalTime;
          if (this.children) {
            for (var h = 0, l = this.children.length;h < l;h++) {
              var e = this.children[h], a = a - (e.endTime - e.startTime)
            }
          }
          return a;
        }, enumerable:!0, configurable:!0});
        f.prototype.getChildIndex = function(a) {
          for (var h = this.children, l = 0;l < h.length;l++) {
            if (h[l].endTime > a) {
              return l;
            }
          }
          return 0;
        };
        f.prototype.getChildRange = function(a, h) {
          if (this.children && a <= this.endTime && h >= this.startTime && h >= a) {
            var l = this._getNearestChild(a), e = this._getNearestChildReverse(h);
            if (l <= e) {
              return a = this.children[l].startTime, h = this.children[e].endTime, {startIndex:l, endIndex:e, startTime:a, endTime:h, totalTime:h - a};
            }
          }
          return null;
        };
        f.prototype._getNearestChild = function(a) {
          var h = this.children;
          if (h && h.length) {
            if (a <= h[0].endTime) {
              return 0;
            }
            for (var l, e = 0, r = h.length - 1;r > e;) {
              l = (e + r) / 2 | 0;
              var u = h[l];
              if (a >= u.startTime && a <= u.endTime) {
                return l;
              }
              a > u.endTime ? e = l + 1 : r = l;
            }
            return Math.ceil((e + r) / 2);
          }
          return 0;
        };
        f.prototype._getNearestChildReverse = function(a) {
          var h = this.children;
          if (h && h.length) {
            var l = h.length - 1;
            if (a >= h[l].startTime) {
              return l;
            }
            for (var e, r = 0;l > r;) {
              e = Math.ceil((r + l) / 2);
              var u = h[e];
              if (a >= u.startTime && a <= u.endTime) {
                return e;
              }
              a > u.endTime ? r = e : l = e - 1;
            }
            return (r + l) / 2 | 0;
          }
          return 0;
        };
        f.prototype.query = function(a) {
          if (a < this.startTime || a > this.endTime) {
            return null;
          }
          var h = this.children;
          if (h && 0 < h.length) {
            for (var l, e = 0, r = h.length - 1;r > e;) {
              var u = (e + r) / 2 | 0;
              l = h[u];
              if (a >= l.startTime && a <= l.endTime) {
                return l.query(a);
              }
              a > l.endTime ? e = u + 1 : r = u;
            }
            l = h[r];
            if (a >= l.startTime && a <= l.endTime) {
              return l.query(a);
            }
          }
          return this;
        };
        f.prototype.queryNext = function(a) {
          for (var h = this;a > h.endTime;) {
            if (h.parent) {
              h = h.parent;
            } else {
              break;
            }
          }
          return h.query(a);
        };
        f.prototype.getDepth = function() {
          for (var a = 0, h = this;h;) {
            a++, h = h.parent;
          }
          return a;
        };
        f.prototype.calculateStatistics = function() {
          function b(l) {
            if (l.kind) {
              var e = h[l.kind.id] || (h[l.kind.id] = new a(l.kind));
              e.count++;
              e.selfTime += l.selfTime;
              e.totalTime += l.totalTime;
            }
            l.children && l.children.forEach(b);
          }
          var h = this.statistics = [];
          b(this);
        };
        f.prototype.trace = function(a) {
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
        return f;
      }();
      f.TimelineFrame = q;
      q = function(a) {
        function b(b) {
          a.call(this, null, null, null, null, NaN, NaN);
          this.name = b;
        }
        __extends(b, a);
        return b;
      }(q);
      f.TimelineBufferSnapshot = q;
    })(f.Profiler || (f.Profiler = {}));
  })(f.Tools || (f.Tools = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(q) {
    (function(t) {
      var a = function() {
        function a(n, b) {
          void 0 === n && (n = "");
          this.name = n || "";
          this._startTime = f.isNullOrUndefined(b) ? jsGlobal.START_TIME : b;
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
          this._marks = new f.CircularBuffer(Int32Array, 20);
          this._times = new f.CircularBuffer(Float64Array, 20);
        };
        a.prototype._getKindId = function(f) {
          var b = a.MAX_KINDID;
          if (void 0 === this._kindNameMap[f]) {
            if (b = this._kinds.length, b < a.MAX_KINDID) {
              var h = {id:b, name:f, visible:!0};
              this._kinds.push(h);
              this._kindNameMap[f] = h;
            } else {
              b = a.MAX_KINDID;
            }
          } else {
            b = this._kindNameMap[f].id;
          }
          return b;
        };
        a.prototype._getMark = function(n, b, h) {
          var l = a.MAX_DATAID;
          f.isNullOrUndefined(h) || b === a.MAX_KINDID || (l = this._data.length, l < a.MAX_DATAID ? this._data.push(h) : l = a.MAX_DATAID);
          return n | l << 16 | b;
        };
        a.prototype.enter = function(n, b, h) {
          h = (f.isNullOrUndefined(h) ? performance.now() : h) - this._startTime;
          this._marks || this._initialize();
          this._depth++;
          n = this._getKindId(n);
          this._marks.write(this._getMark(a.ENTER, n, b));
          this._times.write(h);
          this._stack.push(n);
        };
        a.prototype.leave = function(n, b, h) {
          h = (f.isNullOrUndefined(h) ? performance.now() : h) - this._startTime;
          var l = this._stack.pop();
          n && (l = this._getKindId(n));
          this._marks.write(this._getMark(a.LEAVE, l, b));
          this._times.write(h);
          this._depth--;
        };
        a.prototype.count = function(a, b, h) {
        };
        a.prototype.createSnapshot = function(n) {
          void 0 === n && (n = Number.MAX_VALUE);
          if (!this._marks) {
            return null;
          }
          var b = this._times, h = this._kinds, l = this._data, e = new t.TimelineBufferSnapshot(this.name), r = [e], u = 0;
          this._marks || this._initialize();
          this._marks.forEachInReverse(function(e, v) {
            var x = l[e >>> 16 & a.MAX_DATAID], d = h[e & a.MAX_KINDID];
            if (f.isNullOrUndefined(d) || d.visible) {
              var c = e & 2147483648, g = b.get(v), k = r.length;
              if (c === a.LEAVE) {
                if (1 === k && (u++, u > n)) {
                  return !0;
                }
                r.push(new t.TimelineFrame(r[k - 1], d, null, x, NaN, g));
              } else {
                if (c === a.ENTER) {
                  if (d = r.pop(), c = r[r.length - 1]) {
                    for (c.children ? c.children.unshift(d) : c.children = [d], c = r.length, d.depth = c, d.startData = x, d.startTime = g;d;) {
                      if (d.maxDepth < c) {
                        d.maxDepth = c, d = d.parent;
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
          e.children && e.children.length && (e.startTime = e.children[0].startTime, e.endTime = e.children[e.children.length - 1].endTime);
          return e;
        };
        a.prototype.reset = function(a) {
          this._startTime = f.isNullOrUndefined(a) ? performance.now() : a;
          this._marks ? (this._depth = 0, this._data = [], this._marks.reset(), this._times.reset()) : this._initialize();
        };
        a.FromFirefoxProfile = function(f, b) {
          for (var h = f.profile.threads[0].samples, l = new a(b, h[0].time), e = [], r, u = 0;u < h.length;u++) {
            r = h[u];
            var m = r.time, v = r.frames, x = 0;
            for (r = Math.min(v.length, e.length);x < r && v[x].location === e[x].location;) {
              x++;
            }
            for (var d = e.length - x, c = 0;c < d;c++) {
              r = e.pop(), l.leave(r.location, null, m);
            }
            for (;x < v.length;) {
              r = v[x++], l.enter(r.location, null, m);
            }
            e = v;
          }
          for (;r = e.pop();) {
            l.leave(r.location, null, m);
          }
          return l;
        };
        a.FromChromeProfile = function(f, b) {
          var h = f.timestamps, l = f.samples, e = new a(b, h[0] / 1E3), r = [], u = {}, m;
          a._resolveIds(f.head, u);
          for (var v = 0;v < h.length;v++) {
            var x = h[v] / 1E3, d = [];
            for (m = u[l[v]];m;) {
              d.unshift(m), m = m.parent;
            }
            var c = 0;
            for (m = Math.min(d.length, r.length);c < m && d[c] === r[c];) {
              c++;
            }
            for (var g = r.length - c, k = 0;k < g;k++) {
              m = r.pop(), e.leave(m.functionName, null, x);
            }
            for (;c < d.length;) {
              m = d[c++], e.enter(m.functionName, null, x);
            }
            r = d;
          }
          for (;m = r.pop();) {
            e.leave(m.functionName, null, x);
          }
          return e;
        };
        a._resolveIds = function(f, b) {
          b[f.id] = f;
          if (f.children) {
            for (var h = 0;h < f.children.length;h++) {
              f.children[h].parent = f, a._resolveIds(f.children[h], b);
            }
          }
        };
        a.ENTER = 0;
        a.LEAVE = -2147483648;
        a.MAX_KINDID = 65535;
        a.MAX_DATAID = 32767;
        return a;
      }();
      t.TimelineBuffer = a;
    })(q.Profiler || (q.Profiler = {}));
  })(f.Tools || (f.Tools = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(q) {
    (function(t) {
      (function(a) {
        a[a.DARK = 0] = "DARK";
        a[a.LIGHT = 1] = "LIGHT";
      })(t.UIThemeType || (t.UIThemeType = {}));
      var a = function() {
        function a(f, b) {
          void 0 === b && (b = 0);
          this._container = f;
          this._headers = [];
          this._charts = [];
          this._profiles = [];
          this._activeProfile = null;
          this.themeType = b;
          this._tooltip = this._createTooltip();
        }
        a.prototype.createProfile = function(a, b) {
          var h = new t.Profile(a, b);
          h.createSnapshots();
          this._profiles.push(h);
          this.activateProfile(h);
          return h;
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
            this._overviewHeader = new t.FlameChartHeader(this, 0);
            this._overview = new t.FlameChartOverview(this, 0);
            this._activeProfile.forEachSnapshot(function(b, h) {
              a._headers.push(new t.FlameChartHeader(a, 1));
              a._charts.push(new t.FlameChart(a, b));
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
            var a = this, b = this._activeProfile.startTime, h = this._activeProfile.endTime;
            this._overviewHeader.initialize(b, h);
            this._overview.initialize(b, h);
            this._activeProfile.forEachSnapshot(function(l, e) {
              a._headers[e].initialize(b, h);
              a._charts[e].initialize(b, h);
            });
          }
        };
        a.prototype._onResize = function() {
          if (this._activeProfile) {
            var a = this, b = this._container.offsetWidth;
            this._overviewHeader.setSize(b);
            this._overview.setSize(b);
            this._activeProfile.forEachSnapshot(function(h, l) {
              a._headers[l].setSize(b);
              a._charts[l].setSize(b);
            });
          }
        };
        a.prototype._updateViews = function() {
          if (this._activeProfile) {
            var a = this, b = this._activeProfile.windowStart, h = this._activeProfile.windowEnd;
            this._overviewHeader.setWindow(b, h);
            this._overview.setWindow(b, h);
            this._activeProfile.forEachSnapshot(function(l, e) {
              a._headers[e].setWindow(b, h);
              a._charts[e].setWindow(b, h);
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
        a.prototype.showTooltip = function(a, b, h, l) {
          this.removeTooltipContent();
          this._tooltip.appendChild(this.createTooltipContent(a, b));
          this._tooltip.style.display = "block";
          var e = this._tooltip.firstChild;
          b = e.clientWidth;
          e = e.clientHeight;
          h += h + b >= a.canvas.clientWidth - 50 ? -(b + 20) : 25;
          l += a.canvas.offsetTop - e / 2;
          this._tooltip.style.left = h + "px";
          this._tooltip.style.top = l + "px";
        };
        a.prototype.hideTooltip = function() {
          this._tooltip.style.display = "none";
        };
        a.prototype.createTooltipContent = function(a, b) {
          var h = Math.round(1E5 * b.totalTime) / 1E5, l = Math.round(1E5 * b.selfTime) / 1E5, e = Math.round(1E4 * b.selfTime / b.totalTime) / 100, r = document.createElement("div"), f = document.createElement("h1");
          f.textContent = b.kind.name;
          r.appendChild(f);
          f = document.createElement("p");
          f.textContent = "Total: " + h + " ms";
          r.appendChild(f);
          h = document.createElement("p");
          h.textContent = "Self: " + l + " ms (" + e + "%)";
          r.appendChild(h);
          if (l = a.getStatistics(b.kind)) {
            e = document.createElement("p"), e.textContent = "Count: " + l.count, r.appendChild(e), e = Math.round(1E5 * l.totalTime) / 1E5, h = document.createElement("p"), h.textContent = "All Total: " + e + " ms", r.appendChild(h), l = Math.round(1E5 * l.selfTime) / 1E5, e = document.createElement("p"), e.textContent = "All Self: " + l + " ms", r.appendChild(e);
          }
          this.appendDataElements(r, b.startData);
          this.appendDataElements(r, b.endData);
          return r;
        };
        a.prototype.appendDataElements = function(a, b) {
          if (!f.isNullOrUndefined(b)) {
            a.appendChild(document.createElement("hr"));
            var h;
            if (f.isObject(b)) {
              for (var l in b) {
                h = document.createElement("p"), h.textContent = l + ": " + b[l], a.appendChild(h);
              }
            } else {
              h = document.createElement("p"), h.textContent = b.toString(), a.appendChild(h);
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
      t.Controller = a;
    })(q.Profiler || (q.Profiler = {}));
  })(f.Tools || (f.Tools = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(q) {
    (function(t) {
      var a = f.NumberUtilities.clamp, q = function() {
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
      t.MouseCursor = q;
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
            var l = this._eventTarget.parentElement;
            b._cursor !== a && (b._cursor = a, ["", "-moz-", "-webkit-"].forEach(function(b) {
              l.style.cursor = b + a;
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
          var e = {x:a.x - b.start.x, y:a.y - b.start.y};
          b.current = a;
          b.delta = e;
          b.hasMoved = !0;
          this._target.onDrag(b.start.x, b.start.y, a.x, a.y, e.x, e.y);
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
            var l = this._getTargetMousePos(b, b.target);
            b = a("undefined" !== typeof b.deltaY ? b.deltaY / 16 : -b.wheelDelta / 40, -1, 1);
            b = Math.pow(1.2, b) - 1;
            this._target.onMouseWheel(l.x, l.y, b);
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
          var e = b.getBoundingClientRect();
          return {x:a.clientX - e.left, y:a.clientY - e.top};
        };
        b.HOVER_TIMEOUT = 500;
        b._cursor = q.DEFAULT;
        return b;
      }();
      t.MouseController = n;
    })(q.Profiler || (q.Profiler = {}));
  })(f.Tools || (f.Tools = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(f) {
    (function(f) {
      (function(a) {
        a[a.NONE = 0] = "NONE";
        a[a.WINDOW = 1] = "WINDOW";
        a[a.HANDLE_LEFT = 2] = "HANDLE_LEFT";
        a[a.HANDLE_RIGHT = 3] = "HANDLE_RIGHT";
        a[a.HANDLE_BOTH = 4] = "HANDLE_BOTH";
      })(f.FlameChartDragTarget || (f.FlameChartDragTarget = {}));
      var a = function() {
        function a(n) {
          this._controller = n;
          this._initialized = !1;
          this._canvas = document.createElement("canvas");
          this._context = this._canvas.getContext("2d");
          this._mouseController = new f.MouseController(this, this._canvas);
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
        a.prototype.setWindow = function(a, b, h) {
          void 0 === h && (h = !0);
          this._windowStart = a;
          this._windowEnd = b;
          !h || this.draw();
        };
        a.prototype.setRange = function(a, b, h) {
          void 0 === h && (h = !0);
          this._rangeStart = a;
          this._rangeEnd = b;
          !h || this.draw();
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
        a.prototype._almostEq = function(a, b, h) {
          void 0 === h && (h = 10);
          h = Math.pow(10, h);
          return Math.abs(a - b) < 1 / h;
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
        a.prototype.onMouseWheel = function(f, b, h) {
          f = this._toTime(f);
          b = this._windowStart;
          var l = this._windowEnd, e = l - b;
          h = Math.max((a.MIN_WINDOW_LEN - e) / e, h);
          this._controller.setWindow(b + (b - f) * h, l + (l - f) * h);
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
        a.prototype.onDrag = function(a, b, h, l, e, r) {
        };
        a.prototype.onDragEnd = function(a, b, h, l, e, r) {
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
      f.FlameChartBase = a;
    })(f.Profiler || (f.Profiler = {}));
  })(f.Tools || (f.Tools = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(q) {
    (function(t) {
      var a = f.StringUtilities.trimMiddle, q = function(n) {
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
          f.ColorStyle.reset();
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.bodyBackground(1);
          a.fillRect(0, 0, this._width, this._height);
          this._initialized && this._drawChildren(this._snapshot);
          a.restore();
        };
        b.prototype._drawChildren = function(a, b) {
          void 0 === b && (b = 0);
          var e = a.getChildRange(this._windowStart, this._windowEnd);
          if (e) {
            for (var r = e.startIndex;r <= e.endIndex;r++) {
              var f = a.children[r];
              this._drawFrame(f, b) && this._drawChildren(f, b + 1);
            }
          }
        };
        b.prototype._drawFrame = function(a, b) {
          var e = this._context, r = this._toPixels(a.startTime), u = this._toPixels(a.endTime), m = u - r;
          if (m <= this._minFrameWidthInPixels) {
            return e.fillStyle = this._controller.theme.tabToolbar(1), e.fillRect(r, 12.5 * b, this._minFrameWidthInPixels, 12 + 12.5 * (a.maxDepth - a.depth)), !1;
          }
          0 > r && (u = m + r, r = 0);
          var u = u - r, v = this._kindStyle[a.kind.id];
          v || (v = f.ColorStyle.randomStyle(), v = this._kindStyle[a.kind.id] = {bgColor:v, textColor:f.ColorStyle.contrastStyle(v)});
          e.save();
          e.fillStyle = v.bgColor;
          e.fillRect(r, 12.5 * b, u, 12);
          12 < m && (m = a.kind.name) && m.length && (m = this._prepareText(e, m, u - 4), m.length && (e.fillStyle = v.textColor, e.textBaseline = "bottom", e.fillText(m, r + 2, 12.5 * (b + 1) - 1)));
          e.restore();
          return !0;
        };
        b.prototype._prepareText = function(b, l, e) {
          var r = this._measureWidth(b, l);
          if (e > r) {
            return l;
          }
          for (var r = 3, f = l.length;r < f;) {
            var m = r + f >> 1;
            this._measureWidth(b, a(l, m)) < e ? r = m + 1 : f = m;
          }
          l = a(l, f - 1);
          r = this._measureWidth(b, l);
          return r <= e ? l : "";
        };
        b.prototype._measureWidth = function(a, b) {
          var e = this._textWidth[b];
          e || (e = a.measureText(b).width, this._textWidth[b] = e);
          return e;
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
          var e = this._toTime(a), r = 1 + b / 12.5 | 0;
          if ((e = this._snapshot.query(e)) && e.depth >= r) {
            for (;e && e.depth > r;) {
              e = e.parent;
            }
            return e;
          }
          return null;
        };
        b.prototype.onMouseDown = function(a, b) {
          this._windowEqRange() || (this._mouseController.updateCursor(t.MouseCursor.ALL_SCROLL), this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:1});
        };
        b.prototype.onMouseMove = function(a, b) {
        };
        b.prototype.onMouseOver = function(a, b) {
        };
        b.prototype.onMouseOut = function() {
        };
        b.prototype.onDrag = function(a, b, e, r, f, m) {
          if (a = this._dragInfo) {
            f = this._toTimeRelative(-f), this._controller.setWindow(a.windowStartInitial + f, a.windowEndInitial + f);
          }
        };
        b.prototype.onDragEnd = function(a, b, e, r, f, m) {
          this._dragInfo = null;
          this._mouseController.updateCursor(t.MouseCursor.DEFAULT);
        };
        b.prototype.onClick = function(a, b) {
          this._dragInfo = null;
          this._mouseController.updateCursor(t.MouseCursor.DEFAULT);
        };
        b.prototype.onHoverStart = function(a, b) {
          var e = this._getFrameAtPosition(a, b);
          e && (this._hoveredFrame = e, this._controller.showTooltip(this, e, a, b));
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
      }(t.FlameChartBase);
      t.FlameChart = q;
    })(q.Profiler || (q.Profiler = {}));
  })(f.Tools || (f.Tools = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(q) {
    (function(t) {
      var a = f.NumberUtilities.clamp;
      (function(a) {
        a[a.OVERLAY = 0] = "OVERLAY";
        a[a.STACK = 1] = "STACK";
        a[a.UNION = 2] = "UNION";
      })(t.FlameChartOverviewMode || (t.FlameChartOverviewMode = {}));
      var q = function(f) {
        function b(a, b) {
          void 0 === b && (b = 1);
          this._mode = b;
          this._overviewCanvasDirty = !0;
          this._overviewCanvas = document.createElement("canvas");
          this._overviewContext = this._overviewCanvas.getContext("2d");
          f.call(this, a);
        }
        __extends(b, f);
        b.prototype.setSize = function(a, b) {
          f.prototype.setSize.call(this, a, b || 64);
        };
        Object.defineProperty(b.prototype, "mode", {set:function(a) {
          this._mode = a;
          this.draw();
        }, enumerable:!0, configurable:!0});
        b.prototype._resetCanvas = function() {
          f.prototype._resetCanvas.call(this);
          this._overviewCanvas.width = this._canvas.width;
          this._overviewCanvas.height = this._canvas.height;
          this._overviewCanvasDirty = !0;
        };
        b.prototype.draw = function() {
          var a = this._context, b = window.devicePixelRatio, e = this._width, f = this._height;
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.bodyBackground(1);
          a.fillRect(0, 0, e, f);
          a.restore();
          this._initialized && (this._overviewCanvasDirty && (this._drawChart(), this._overviewCanvasDirty = !1), a.drawImage(this._overviewCanvas, 0, 0), this._drawSelection());
        };
        b.prototype._drawSelection = function() {
          var a = this._context, b = this._height, e = window.devicePixelRatio, f = this._selection ? this._selection.left : this._toPixels(this._windowStart), u = this._selection ? this._selection.right : this._toPixels(this._windowEnd), m = this._controller.theme;
          a.save();
          a.scale(e, e);
          this._selection ? (a.fillStyle = m.selectionText(.15), a.fillRect(f, 1, u - f, b - 1), a.fillStyle = "rgba(133, 0, 0, 1)", a.fillRect(f + .5, 0, u - f - 1, 4), a.fillRect(f + .5, b - 4, u - f - 1, 4)) : (a.fillStyle = m.bodyBackground(.4), a.fillRect(0, 1, f, b - 1), a.fillRect(u, 1, this._width, b - 1));
          a.beginPath();
          a.moveTo(f, 0);
          a.lineTo(f, b);
          a.moveTo(u, 0);
          a.lineTo(u, b);
          a.lineWidth = .5;
          a.strokeStyle = m.foregroundTextGrey(1);
          a.stroke();
          b = this._selection ? this._toTime(this._selection.left) : this._windowStart;
          e = this._selection ? this._toTime(this._selection.right) : this._windowEnd;
          b = Math.abs(e - b);
          a.fillStyle = m.selectionText(.5);
          a.font = "8px sans-serif";
          a.textBaseline = "alphabetic";
          a.textAlign = "end";
          a.fillText(b.toFixed(2), Math.min(f, u) - 4, 10);
          a.fillText((b / 60).toFixed(2), Math.min(f, u) - 4, 20);
          a.restore();
        };
        b.prototype._drawChart = function() {
          var a = window.devicePixelRatio, b = this._height, e = this._controller.activeProfile, f = 4 * this._width, u = e.totalTime / f, m = this._overviewContext, v = this._controller.theme.blueHighlight(1);
          m.save();
          m.translate(0, a * b);
          var n = -a * b / (e.maxDepth - 1);
          m.scale(a / 4, n);
          m.clearRect(0, 0, f, e.maxDepth - 1);
          1 == this._mode && m.scale(1, 1 / e.snapshotCount);
          for (var d = 0, c = e.snapshotCount;d < c;d++) {
            var g = e.getSnapshotAt(d);
            if (g) {
              var k = null, y = 0;
              m.beginPath();
              m.moveTo(0, 0);
              for (var p = 0;p < f;p++) {
                y = e.startTime + p * u, y = (k = k ? k.queryNext(y) : g.query(y)) ? k.getDepth() - 1 : 0, m.lineTo(p, y);
              }
              m.lineTo(p, 0);
              m.fillStyle = v;
              m.fill();
              1 == this._mode && m.translate(0, -b * a / n);
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
            var e = this._toPixels(this._windowStart), f = this._toPixels(this._windowEnd), u = 2 + t.FlameChartBase.DRAGHANDLE_WIDTH / 2, m = a >= e - u && a <= e + u, v = a >= f - u && a <= f + u;
            if (m && v) {
              return 4;
            }
            if (m) {
              return 2;
            }
            if (v) {
              return 3;
            }
            if (!this._windowEqRange() && a > e + u && a < f - u) {
              return 1;
            }
          }
          return 0;
        };
        b.prototype.onMouseDown = function(a, b) {
          var e = this._getDragTargetUnderCursor(a, b);
          0 === e ? (this._selection = {left:a, right:a}, this.draw()) : (1 === e && this._mouseController.updateCursor(t.MouseCursor.GRABBING), this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:e});
        };
        b.prototype.onMouseMove = function(a, b) {
          var e = t.MouseCursor.DEFAULT, f = this._getDragTargetUnderCursor(a, b);
          0 === f || this._selection || (e = 1 === f ? t.MouseCursor.GRAB : t.MouseCursor.EW_RESIZE);
          this._mouseController.updateCursor(e);
        };
        b.prototype.onMouseOver = function(a, b) {
          this.onMouseMove(a, b);
        };
        b.prototype.onMouseOut = function() {
          this._mouseController.updateCursor(t.MouseCursor.DEFAULT);
        };
        b.prototype.onDrag = function(b, f, e, r, u, m) {
          if (this._selection) {
            this._selection = {left:b, right:a(e, 0, this._width - 1)}, this.draw();
          } else {
            b = this._dragInfo;
            if (4 === b.target) {
              if (0 !== u) {
                b.target = 0 > u ? 2 : 3;
              } else {
                return;
              }
            }
            f = this._windowStart;
            e = this._windowEnd;
            u = this._toTimeRelative(u);
            switch(b.target) {
              case 1:
                f = b.windowStartInitial + u;
                e = b.windowEndInitial + u;
                break;
              case 2:
                f = a(b.windowStartInitial + u, this._rangeStart, e - t.FlameChartBase.MIN_WINDOW_LEN);
                break;
              case 3:
                e = a(b.windowEndInitial + u, f + t.FlameChartBase.MIN_WINDOW_LEN, this._rangeEnd);
                break;
              default:
                return;
            }
            this._controller.setWindow(f, e);
          }
        };
        b.prototype.onDragEnd = function(a, b, e, f, u, m) {
          this._selection && (this._selection = null, this._controller.setWindow(this._toTime(a), this._toTime(e)));
          this._dragInfo = null;
          this.onMouseMove(e, f);
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
      }(t.FlameChartBase);
      t.FlameChartOverview = q;
    })(q.Profiler || (q.Profiler = {}));
  })(f.Tools || (f.Tools = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(q) {
    (function(q) {
      var a = f.NumberUtilities.clamp;
      (function(a) {
        a[a.OVERVIEW = 0] = "OVERVIEW";
        a[a.CHART = 1] = "CHART";
      })(q.FlameChartHeaderType || (q.FlameChartHeaderType = {}));
      var w = function(f) {
        function b(a, b) {
          this._type = b;
          f.call(this, a);
        }
        __extends(b, f);
        b.prototype.draw = function() {
          var a = this._context, b = window.devicePixelRatio, e = this._width, f = this._height;
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.tabToolbar(1);
          a.fillRect(0, 0, e, f);
          this._initialized && (0 == this._type ? (b = this._toPixels(this._windowStart), e = this._toPixels(this._windowEnd), a.fillStyle = this._controller.theme.bodyBackground(1), a.fillRect(b, 0, e - b, f), this._drawLabels(this._rangeStart, this._rangeEnd), this._drawDragHandle(b), this._drawDragHandle(e)) : this._drawLabels(this._windowStart, this._windowEnd));
          a.restore();
        };
        b.prototype._drawLabels = function(a, f) {
          var e = this._context, r = this._calculateTickInterval(a, f), u = Math.ceil(a / r) * r, m = 500 <= r, v = m ? 1E3 : 1, n = this._decimalPlaces(r / v), m = m ? "s" : "ms", d = this._toPixels(u), c = this._height / 2, g = this._controller.theme;
          e.lineWidth = 1;
          e.strokeStyle = g.contentTextDarkGrey(.5);
          e.fillStyle = g.contentTextDarkGrey(1);
          e.textAlign = "right";
          e.textBaseline = "middle";
          e.font = "11px sans-serif";
          for (g = this._width + b.TICK_MAX_WIDTH;d < g;) {
            var k = (u / v).toFixed(n) + " " + m;
            e.fillText(k, d - 7, c + 1);
            e.beginPath();
            e.moveTo(d, 0);
            e.lineTo(d, this._height + 1);
            e.closePath();
            e.stroke();
            u += r;
            d = this._toPixels(u);
          }
        };
        b.prototype._calculateTickInterval = function(a, f) {
          var e = (f - a) / (this._width / b.TICK_MAX_WIDTH), r = Math.pow(10, Math.floor(Math.log(e) / Math.LN10)), e = e / r;
          return 5 < e ? 10 * r : 2 < e ? 5 * r : 1 < e ? 2 * r : r;
        };
        b.prototype._drawDragHandle = function(a) {
          var b = this._context;
          b.lineWidth = 2;
          b.strokeStyle = this._controller.theme.bodyBackground(1);
          b.fillStyle = this._controller.theme.foregroundTextGrey(.7);
          this._drawRoundedRect(b, a - q.FlameChartBase.DRAGHANDLE_WIDTH / 2, 1, q.FlameChartBase.DRAGHANDLE_WIDTH, this._height - 2, 2, !0);
        };
        b.prototype._drawRoundedRect = function(a, b, e, f, u, m, v, n) {
          void 0 === v && (v = !0);
          void 0 === n && (n = !0);
          a.beginPath();
          a.moveTo(b + m, e);
          a.lineTo(b + f - m, e);
          a.quadraticCurveTo(b + f, e, b + f, e + m);
          a.lineTo(b + f, e + u - m);
          a.quadraticCurveTo(b + f, e + u, b + f - m, e + u);
          a.lineTo(b + m, e + u);
          a.quadraticCurveTo(b, e + u, b, e + u - m);
          a.lineTo(b, e + m);
          a.quadraticCurveTo(b, e, b + m, e);
          a.closePath();
          v && a.stroke();
          n && a.fill();
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
              var e = this._toPixels(this._windowStart), f = this._toPixels(this._windowEnd), u = 2 + q.FlameChartBase.DRAGHANDLE_WIDTH / 2, e = a >= e - u && a <= e + u, f = a >= f - u && a <= f + u;
              if (e && f) {
                return 4;
              }
              if (e) {
                return 2;
              }
              if (f) {
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
          var e = this._getDragTargetUnderCursor(a, b);
          1 === e && this._mouseController.updateCursor(q.MouseCursor.GRABBING);
          this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:e};
        };
        b.prototype.onMouseMove = function(a, b) {
          var e = q.MouseCursor.DEFAULT, f = this._getDragTargetUnderCursor(a, b);
          0 !== f && (1 !== f ? e = q.MouseCursor.EW_RESIZE : 1 !== f || this._windowEqRange() || (e = q.MouseCursor.GRAB));
          this._mouseController.updateCursor(e);
        };
        b.prototype.onMouseOver = function(a, b) {
          this.onMouseMove(a, b);
        };
        b.prototype.onMouseOut = function() {
          this._mouseController.updateCursor(q.MouseCursor.DEFAULT);
        };
        b.prototype.onDrag = function(b, f, e, r, u, m) {
          b = this._dragInfo;
          if (4 === b.target) {
            if (0 !== u) {
              b.target = 0 > u ? 2 : 3;
            } else {
              return;
            }
          }
          f = this._windowStart;
          e = this._windowEnd;
          u = this._toTimeRelative(u);
          switch(b.target) {
            case 1:
              e = 0 === this._type ? 1 : -1;
              f = b.windowStartInitial + e * u;
              e = b.windowEndInitial + e * u;
              break;
            case 2:
              f = a(b.windowStartInitial + u, this._rangeStart, e - q.FlameChartBase.MIN_WINDOW_LEN);
              break;
            case 3:
              e = a(b.windowEndInitial + u, f + q.FlameChartBase.MIN_WINDOW_LEN, this._rangeEnd);
              break;
            default:
              return;
          }
          this._controller.setWindow(f, e);
        };
        b.prototype.onDragEnd = function(a, b, e, f, u, m) {
          this._dragInfo = null;
          this.onMouseMove(e, f);
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
  })(f.Tools || (f.Tools = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(f) {
    (function(f) {
      (function(a) {
        var f = function() {
          function a(b, f, e, r, u) {
            this.pageLoaded = b;
            this.threadsTotal = f;
            this.threadsLoaded = e;
            this.threadFilesTotal = r;
            this.threadFilesLoaded = u;
          }
          a.prototype.toString = function() {
            return "[" + ["pageLoaded", "threadsTotal", "threadsLoaded", "threadFilesTotal", "threadFilesLoaded"].map(function(a, b, e) {
              return a + ":" + this[a];
            }, this).join(", ") + "]";
          };
          return a;
        }();
        a.TraceLoggerProgressInfo = f;
        var n = function() {
          function b(a) {
            this._baseUrl = a;
            this._threads = [];
            this._progressInfo = null;
          }
          b.prototype.loadPage = function(a, b, e) {
            this._threads = [];
            this._pageLoadCallback = b;
            this._pageLoadProgressCallback = e;
            this._progressInfo = new f(!1, 0, 0, 0, 0);
            this._loadData([a], this._onLoadPage.bind(this));
          };
          Object.defineProperty(b.prototype, "buffers", {get:function() {
            for (var a = [], b = 0, e = this._threads.length;b < e;b++) {
              a.push(this._threads[b].buffer);
            }
            return a;
          }, enumerable:!0, configurable:!0});
          b.prototype._onProgress = function() {
            this._pageLoadProgressCallback && this._pageLoadProgressCallback.call(this, this._progressInfo);
          };
          b.prototype._onLoadPage = function(b) {
            if (b && 1 == b.length) {
              var f = this, e = 0;
              b = b[0];
              var r = b.length;
              this._threads = Array(r);
              this._progressInfo.pageLoaded = !0;
              this._progressInfo.threadsTotal = r;
              for (var u = 0;u < b.length;u++) {
                var m = b[u], v = [m.dict, m.tree];
                m.corrections && v.push(m.corrections);
                this._progressInfo.threadFilesTotal += v.length;
                this._loadData(v, function(b) {
                  return function(d) {
                    d && (d = new a.Thread(d), d.buffer.name = "Thread " + b, f._threads[b] = d);
                    e++;
                    f._progressInfo.threadsLoaded++;
                    f._onProgress();
                    e === r && f._pageLoadCallback.call(f, null, f._threads);
                  };
                }(u), function(a) {
                  f._progressInfo.threadFilesLoaded++;
                  f._onProgress();
                });
              }
              this._onProgress();
            } else {
              this._pageLoadCallback.call(this, "Error loading page.", null);
            }
          };
          b.prototype._loadData = function(a, b, e) {
            var f = 0, u = 0, m = a.length, v = [];
            v.length = m;
            for (var n = 0;n < m;n++) {
              var d = this._baseUrl + a[n], c = /\.tl$/i.test(d), g = new XMLHttpRequest, c = c ? "arraybuffer" : "json";
              g.open("GET", d, !0);
              g.responseType = c;
              g.onload = function(c, a) {
                return function(g) {
                  if ("json" === a) {
                    if (g = this.response, "string" === typeof g) {
                      try {
                        g = JSON.parse(g), v[c] = g;
                      } catch (d) {
                        u++;
                      }
                    } else {
                      v[c] = g;
                    }
                  } else {
                    v[c] = this.response;
                  }
                  ++f;
                  e && e(f);
                  f === m && b(v);
                };
              }(n, c);
              g.send();
            }
          };
          b.colors = "#0044ff #8c4b00 #cc5c33 #ff80c4 #ffbfd9 #ff8800 #8c5e00 #adcc33 #b380ff #bfd9ff #ffaa00 #8c0038 #bf8f30 #f780ff #cc99c9 #aaff00 #000073 #452699 #cc8166 #cca799 #000066 #992626 #cc6666 #ccc299 #ff6600 #526600 #992663 #cc6681 #99ccc2 #ff0066 #520066 #269973 #61994d #739699 #ffcc00 #006629 #269199 #94994d #738299 #ff0000 #590000 #234d8c #8c6246 #7d7399 #ee00ff #00474d #8c2385 #8c7546 #7c8c69 #eeff00 #4d003d #662e1a #62468c #8c6969 #6600ff #4c2900 #1a6657 #8c464f #8c6981 #44ff00 #401100 #1a2466 #663355 #567365 #d90074 #403300 #101d40 #59562d #66614d #cc0000 #002b40 #234010 #4c2626 #4d5e66 #00a3cc #400011 #231040 #4c3626 #464359 #0000bf #331b00 #80e6ff #311a33 #4d3939 #a69b00 #003329 #80ffb2 #331a20 #40303d #00a658 #40ffd9 #ffc480 #ffe1bf #332b26 #8c2500 #9933cc #80fff6 #ffbfbf #303326 #005e8c #33cc47 #b2ff80 #c8bfff #263332 #00708c #cc33ad #ffe680 #f2ffbf #262a33 #388c00 #335ccc #8091ff #bfffd9".split(" ");
          return b;
        }();
        a.TraceLogger = n;
      })(f.TraceLogger || (f.TraceLogger = {}));
    })(f.Profiler || (f.Profiler = {}));
  })(f.Tools || (f.Tools = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(f) {
    (function(f) {
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
            2 <= b.length && (this._text = b[0], this._data = new DataView(b[1]), this._buffer = new f.TimelineBuffer, this._walkTree(0));
          }
          Object.defineProperty(a.prototype, "buffer", {get:function() {
            return this._buffer;
          }, enumerable:!0, configurable:!0});
          a.prototype._walkTree = function(b) {
            var f = this._data, l = this._buffer;
            do {
              var e = b * a.ITEM_SIZE, r = 4294967295 * f.getUint32(e + 0) + f.getUint32(e + 4), u = 4294967295 * f.getUint32(e + 8) + f.getUint32(e + 12), m = f.getUint32(e + 16), e = f.getUint32(e + 20), v = 1 === (m & 1), m = m >>> 1, m = this._text[m];
              l.enter(m, null, r / 1E6);
              v && this._walkTree(b + 1);
              l.leave(m, null, u / 1E6);
              b = e;
            } while (0 !== b);
          };
          a.ITEM_SIZE = 24;
          return a;
        }();
        a.Thread = q;
      })(f.TraceLogger || (f.TraceLogger = {}));
    })(f.Profiler || (f.Profiler = {}));
  })(f.Tools || (f.Tools = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(q) {
    (function(q) {
      var a = f.NumberUtilities.clamp, w = function() {
        function a() {
          this.length = 0;
          this.lines = [];
          this.format = [];
          this.time = [];
          this.repeat = [];
          this.length = 0;
        }
        a.prototype.append = function(a, b) {
          var e = this.lines;
          0 < e.length && e[e.length - 1] === a ? this.repeat[e.length - 1]++ : (this.lines.push(a), this.repeat.push(1), this.format.push(b ? {backgroundFillStyle:b} : void 0), this.time.push(performance.now()), this.length++);
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
          this.buffer = new w;
          a.addEventListener("keydown", function(a) {
            var h = 0;
            switch(a.keyCode) {
              case p:
                this.printHelp();
                break;
              case k:
                this.showLineNumbers = !this.showLineNumbers;
                break;
              case y:
                this.showLineTime = !this.showLineTime;
                break;
              case m:
                h = -1;
                break;
              case v:
                h = 1;
                break;
              case b:
                h = -this.pageLineCount;
                break;
              case e:
                h = this.pageLineCount;
                break;
              case f:
                h = -this.lineIndex;
                break;
              case u:
                h = this.buffer.length - this.lineIndex;
                break;
              case n:
                this.columnIndex -= a.metaKey ? 10 : 1;
                0 > this.columnIndex && (this.columnIndex = 0);
                a.preventDefault();
                break;
              case d:
                this.columnIndex += a.metaKey ? 10 : 1;
                a.preventDefault();
                break;
              case c:
                if (a.metaKey || a.ctrlKey) {
                  this.selection = {start:0, end:this.buffer.length - 1}, a.preventDefault();
                }
                break;
              case g:
              ;
              case I:
                if (a.metaKey || a.ctrlKey) {
                  var J = "";
                  if (this.selection) {
                    for (var U = this.selection.start;U <= this.selection.end;U++) {
                      J += this.buffer.get(U) + "\n";
                    }
                  } else {
                    J = this.buffer.get(this.lineIndex);
                  }
                  a.keyCode === g ? alert(J) : window.open(URL.createObjectURL(new Blob([J], {type:"text/plain"})), "_blank");
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
          var b = 33, e = 34, f = 36, u = 35, m = 38, v = 40, n = 37, d = 39, c = 65, g = 67, k = 78, y = 84, p = 72, I = 83;
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
          var a = this.canvas.parentElement, b = a.clientWidth, a = a.clientHeight && a.clientHeight - 1, e = window.devicePixelRatio || 1;
          1 !== e ? (this.ratio = e / 1, this.canvas.width = b * this.ratio, this.canvas.height = a * this.ratio, this.canvas.style.width = b + "px", this.canvas.style.height = a + "px") : (this.ratio = 1, this.canvas.width = b, this.canvas.height = a);
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
          var b = this.textMarginLeft, e = b + (this.showLineNumbers ? 5 * (String(this.buffer.length).length + 2) : 0), f = e + (this.showLineTime ? 40 : 10), u = f + 25;
          this.context.font = this.fontSize + 'px Consolas, "Liberation Mono", Courier, monospace';
          this.context.setTransform(this.ratio, 0, 0, this.ratio, 0, 0);
          for (var m = this.canvas.width, v = this.lineHeight, n = 0;n < a;n++) {
            var d = n * this.lineHeight, c = this.pageIndex + n, g = this.buffer.get(c), k = this.buffer.getFormat(c), y = this.buffer.getRepeat(c), p = 1 < c ? this.buffer.getTime(c) - this.buffer.getTime(0) : 0;
            this.context.fillStyle = c % 2 ? this.lineColor : this.alternateLineColor;
            k && k.backgroundFillStyle && (this.context.fillStyle = k.backgroundFillStyle);
            this.context.fillRect(0, d, m, v);
            this.context.fillStyle = this.selectionTextColor;
            this.context.fillStyle = this.textColor;
            this.selection && c >= this.selection.start && c <= this.selection.end && (this.context.fillStyle = this.selectionColor, this.context.fillRect(0, d, m, v), this.context.fillStyle = this.selectionTextColor);
            this.hasFocus && c === this.lineIndex && (this.context.fillStyle = this.selectionColor, this.context.fillRect(0, d, m, v), this.context.fillStyle = this.selectionTextColor);
            0 < this.columnIndex && (g = g.substring(this.columnIndex));
            d = (n + 1) * this.lineHeight - this.textMarginBottom;
            this.showLineNumbers && this.context.fillText(String(c), b, d);
            this.showLineTime && this.context.fillText(p.toFixed(1).padLeft(" ", 6), e, d);
            1 < y && this.context.fillText(String(y).padLeft(" ", 3), f, d);
            this.context.fillText(g, u, d);
          }
        };
        b.prototype.refreshEvery = function(a) {
          function b() {
            e.paint();
            e.refreshFrequency && setTimeout(b, e.refreshFrequency);
          }
          var e = this;
          this.refreshFrequency = a;
          e.refreshFrequency && setTimeout(b, e.refreshFrequency);
        };
        b.prototype.isScrolledToBottom = function() {
          return this.lineIndex === this.buffer.length - 1;
        };
        return b;
      }();
      q.Terminal = n;
    })(q.Terminal || (q.Terminal = {}));
  })(f.Tools || (f.Tools = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(f) {
    (function(f) {
      var a = function() {
        function a(f) {
          this._lastWeightedTime = this._lastTime = this._index = 0;
          this._gradient = "#FF0000 #FF1100 #FF2300 #FF3400 #FF4600 #FF5700 #FF6900 #FF7B00 #FF8C00 #FF9E00 #FFAF00 #FFC100 #FFD300 #FFE400 #FFF600 #F7FF00 #E5FF00 #D4FF00 #C2FF00 #B0FF00 #9FFF00 #8DFF00 #7CFF00 #6AFF00 #58FF00 #47FF00 #35FF00 #24FF00 #12FF00 #00FF00".split(" ");
          this._container = f;
          this._canvas = document.createElement("canvas");
          this._container.appendChild(this._canvas);
          this._context = this._canvas.getContext("2d");
          this._listenForContainerSizeChanges();
        }
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
        a.prototype._onContainerSizeChanged = function() {
          var a = this._containerWidth, b = this._containerHeight, f = window.devicePixelRatio || 1;
          1 !== f ? (this._ratio = f / 1, this._canvas.width = a * this._ratio, this._canvas.height = b * this._ratio, this._canvas.style.width = a + "px", this._canvas.style.height = b + "px") : (this._ratio = 1, this._canvas.width = a, this._canvas.height = b);
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
            var f = 1 * (performance.now() - this._lastTime) + 0 * this._lastWeightedTime, l = this._context, e = 2 * this._ratio, r = 30 * this._ratio, u = performance;
            u.memory && (r += 30 * this._ratio);
            var m = (this._canvas.width - r) / (e + 1) | 0, v = this._index++;
            this._index > m && (this._index = 0);
            m = this._canvas.height;
            l.globalAlpha = 1;
            l.fillStyle = "black";
            l.fillRect(r + v * (e + 1), 0, 4 * e, this._canvas.height);
            var x = Math.min(1E3 / 60 / f, 1);
            l.fillStyle = "#00FF00";
            l.globalAlpha = a ? .5 : 1;
            x = m / 2 * x | 0;
            l.fillRect(r + v * (e + 1), m - x, e, x);
            b && (x = Math.min(1E3 / 240 / b, 1), l.fillStyle = "#FF6347", x = m / 2 * x | 0, l.fillRect(r + v * (e + 1), m / 2 - x, e, x));
            0 === v % 16 && (l.globalAlpha = 1, l.fillStyle = "black", l.fillRect(0, 0, r, this._canvas.height), l.fillStyle = "white", l.font = 8 * this._ratio + "px Arial", l.textBaseline = "middle", e = (1E3 / f).toFixed(0), b && (e += " " + b.toFixed(0)), u.memory && (e += " " + (u.memory.usedJSHeapSize / 1024 / 1024).toFixed(2)), l.fillText(e, 2 * this._ratio, this._containerHeight / 2 * this._ratio));
            this._lastTime = performance.now();
            this._lastWeightedTime = f;
          }
        };
        return a;
      }();
      f.FPS = a;
    })(f.Mini || (f.Mini = {}));
  })(f.Tools || (f.Tools = {}));
})(Shumway || (Shumway = {}));
console.timeEnd("Load Shared Dependencies");
console.time("Load GFX Dependencies");
(function(f) {
  (function(q) {
    function t(c, a, g) {
      return l && g ? "string" === typeof a ? (c = f.ColorUtilities.cssStyleToRGBA(a), f.ColorUtilities.rgbaToCSSStyle(g.transformRGBA(c))) : a instanceof CanvasGradient && a._template ? a._template.createCanvasGradient(c, g) : a : a;
    }
    var a = f.NumberUtilities.clamp;
    (function(c) {
      c[c.None = 0] = "None";
      c[c.Brief = 1] = "Brief";
      c[c.Verbose = 2] = "Verbose";
    })(q.TraceLevel || (q.TraceLevel = {}));
    var w = f.Metrics.Counter.instance;
    q.frameCounter = new f.Metrics.Counter(!0);
    q.traceLevel = 2;
    q.writer = null;
    q.frameCount = function(c) {
      w.count(c);
      q.frameCounter.count(c);
    };
    q.timelineBuffer = new f.Tools.Profiler.TimelineBuffer("GFX");
    q.enterTimeline = function(c, a) {
    };
    q.leaveTimeline = function(c, a) {
    };
    var n = null, b = null, h = null, l = !0;
    l && "undefined" !== typeof CanvasRenderingContext2D && (n = CanvasGradient.prototype.addColorStop, b = CanvasRenderingContext2D.prototype.createLinearGradient, h = CanvasRenderingContext2D.prototype.createRadialGradient, CanvasRenderingContext2D.prototype.createLinearGradient = function(c, a, g, d) {
      return (new r(c, a, g, d)).createCanvasGradient(this, null);
    }, CanvasRenderingContext2D.prototype.createRadialGradient = function(c, a, g, d, b, k) {
      return (new u(c, a, g, d, b, k)).createCanvasGradient(this, null);
    }, CanvasGradient.prototype.addColorStop = function(c, a) {
      n.call(this, c, a);
      this._template.addColorStop(c, a);
    });
    var e = function() {
      return function(c, a) {
        this.offset = c;
        this.color = a;
      };
    }(), r = function() {
      function c(a, g, d, b) {
        this.x0 = a;
        this.y0 = g;
        this.x1 = d;
        this.y1 = b;
        this.colorStops = [];
      }
      c.prototype.addColorStop = function(c, a) {
        this.colorStops.push(new e(c, a));
      };
      c.prototype.createCanvasGradient = function(c, a) {
        for (var g = b.call(c, this.x0, this.y0, this.x1, this.y1), d = this.colorStops, k = 0;k < d.length;k++) {
          var p = d[k], e = p.offset, p = p.color, p = a ? t(c, p, a) : p;
          n.call(g, e, p);
        }
        g._template = this;
        g._transform = this._transform;
        return g;
      };
      return c;
    }(), u = function() {
      function c(a, g, d, b, k, p) {
        this.x0 = a;
        this.y0 = g;
        this.r0 = d;
        this.x1 = b;
        this.y1 = k;
        this.r1 = p;
        this.colorStops = [];
      }
      c.prototype.addColorStop = function(c, a) {
        this.colorStops.push(new e(c, a));
      };
      c.prototype.createCanvasGradient = function(c, a) {
        for (var g = h.call(c, this.x0, this.y0, this.r0, this.x1, this.y1, this.r1), d = this.colorStops, b = 0;b < d.length;b++) {
          var k = d[b], p = k.offset, k = k.color, k = a ? t(c, k, a) : k;
          n.call(g, p, k);
        }
        g._template = this;
        g._transform = this._transform;
        return g;
      };
      return c;
    }(), m;
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
    })(m || (m = {}));
    var v = function() {
      function c(a) {
        this._commands = new Uint8Array(c._arrayBufferPool.acquire(8), 0, 8);
        this._commandPosition = 0;
        this._data = new Float64Array(c._arrayBufferPool.acquire(8 * Float64Array.BYTES_PER_ELEMENT), 0, 8);
        this._dataPosition = 0;
        a instanceof c && this.addPath(a);
      }
      c._apply = function(c, a) {
        var g = c._commands, d = c._data, b = 0, k = 0;
        a.beginPath();
        for (var p = c._commandPosition;b < p;) {
          switch(g[b++]) {
            case 1:
              a.closePath();
              break;
            case 2:
              a.moveTo(d[k++], d[k++]);
              break;
            case 3:
              a.lineTo(d[k++], d[k++]);
              break;
            case 4:
              a.quadraticCurveTo(d[k++], d[k++], d[k++], d[k++]);
              break;
            case 5:
              a.bezierCurveTo(d[k++], d[k++], d[k++], d[k++], d[k++], d[k++]);
              break;
            case 6:
              a.arcTo(d[k++], d[k++], d[k++], d[k++], d[k++]);
              break;
            case 7:
              a.rect(d[k++], d[k++], d[k++], d[k++]);
              break;
            case 8:
              a.arc(d[k++], d[k++], d[k++], d[k++], d[k++], !!d[k++]);
              break;
            case 9:
              a.save();
              break;
            case 10:
              a.restore();
              break;
            case 11:
              a.transform(d[k++], d[k++], d[k++], d[k++], d[k++], d[k++]);
          }
        }
      };
      c.prototype._ensureCommandCapacity = function(a) {
        this._commands = c._arrayBufferPool.ensureUint8ArrayLength(this._commands, a);
      };
      c.prototype._ensureDataCapacity = function(a) {
        this._data = c._arrayBufferPool.ensureFloat64ArrayLength(this._data, a);
      };
      c.prototype._writeCommand = function(c) {
        this._commandPosition >= this._commands.length && this._ensureCommandCapacity(this._commandPosition + 1);
        this._commands[this._commandPosition++] = c;
      };
      c.prototype._writeData = function(c, a, g, d, b, k) {
        var p = arguments.length;
        this._dataPosition + p >= this._data.length && this._ensureDataCapacity(this._dataPosition + p);
        var e = this._data, y = this._dataPosition;
        e[y] = c;
        e[y + 1] = a;
        2 < p && (e[y + 2] = g, e[y + 3] = d, 4 < p && (e[y + 4] = b, 6 === p && (e[y + 5] = k)));
        this._dataPosition += p;
      };
      c.prototype.closePath = function() {
        this._writeCommand(1);
      };
      c.prototype.moveTo = function(c, a) {
        this._writeCommand(2);
        this._writeData(c, a);
      };
      c.prototype.lineTo = function(c, a) {
        this._writeCommand(3);
        this._writeData(c, a);
      };
      c.prototype.quadraticCurveTo = function(c, a, g, d) {
        this._writeCommand(4);
        this._writeData(c, a, g, d);
      };
      c.prototype.bezierCurveTo = function(c, a, g, d, b, k) {
        this._writeCommand(5);
        this._writeData(c, a, g, d, b, k);
      };
      c.prototype.arcTo = function(c, a, g, d, b) {
        this._writeCommand(6);
        this._writeData(c, a, g, d, b);
      };
      c.prototype.rect = function(c, a, g, d) {
        this._writeCommand(7);
        this._writeData(c, a, g, d);
      };
      c.prototype.arc = function(c, a, g, d, b, k) {
        this._writeCommand(8);
        this._writeData(c, a, g, d, b, +k);
      };
      c.prototype.addPath = function(c, a) {
        a && (this._writeCommand(9), this._writeCommand(11), this._writeData(a.a, a.b, a.c, a.d, a.e, a.f));
        var g = this._commandPosition + c._commandPosition;
        g >= this._commands.length && this._ensureCommandCapacity(g);
        for (var d = this._commands, b = c._commands, k = this._commandPosition, p = 0;k < g;k++) {
          d[k] = b[p++];
        }
        this._commandPosition = g;
        g = this._dataPosition + c._dataPosition;
        g >= this._data.length && this._ensureDataCapacity(g);
        d = this._data;
        b = c._data;
        k = this._dataPosition;
        for (p = 0;k < g;k++) {
          d[k] = b[p++];
        }
        this._dataPosition = g;
        a && this._writeCommand(10);
      };
      c._arrayBufferPool = new f.ArrayBufferPool;
      return c;
    }();
    q.Path = v;
    if ("undefined" !== typeof CanvasRenderingContext2D && ("undefined" === typeof Path2D || !Path2D.prototype.addPath)) {
      var x = CanvasRenderingContext2D.prototype.fill;
      CanvasRenderingContext2D.prototype.fill = function(c, a) {
        arguments.length && (c instanceof v ? v._apply(c, this) : a = c);
        a ? x.call(this, a) : x.call(this);
      };
      var d = CanvasRenderingContext2D.prototype.stroke;
      CanvasRenderingContext2D.prototype.stroke = function(c, a) {
        arguments.length && (c instanceof v ? v._apply(c, this) : a = c);
        a ? d.call(this, a) : d.call(this);
      };
      var c = CanvasRenderingContext2D.prototype.clip;
      CanvasRenderingContext2D.prototype.clip = function(a, g) {
        arguments.length && (a instanceof v ? v._apply(a, this) : g = a);
        g ? c.call(this, g) : c.call(this);
      };
      window.Path2D = v;
    }
    if ("undefined" !== typeof CanvasPattern && Path2D.prototype.addPath) {
      m = function(c) {
        this._transform = c;
        this._template && (this._template._transform = c);
      };
      CanvasPattern.prototype.setTransform || (CanvasPattern.prototype.setTransform = m);
      CanvasGradient.prototype.setTransform || (CanvasGradient.prototype.setTransform = m);
      var g = CanvasRenderingContext2D.prototype.fill, k = CanvasRenderingContext2D.prototype.stroke;
      CanvasRenderingContext2D.prototype.fill = function(c, a) {
        var d = !!this.fillStyle._transform;
        if ((this.fillStyle instanceof CanvasPattern || this.fillStyle instanceof CanvasGradient) && d && c instanceof Path2D) {
          var d = this.fillStyle._transform, b;
          try {
            b = d.inverse();
          } catch (k) {
            b = d = q.Geometry.Matrix.createIdentitySVGMatrix();
          }
          this.transform(d.a, d.b, d.c, d.d, d.e, d.f);
          d = new Path2D;
          d.addPath(c, b);
          g.call(this, d, a);
          this.transform(b.a, b.b, b.c, b.d, b.e, b.f);
        } else {
          0 === arguments.length ? g.call(this) : 1 === arguments.length ? g.call(this, c) : 2 === arguments.length && g.call(this, c, a);
        }
      };
      CanvasRenderingContext2D.prototype.stroke = function(c) {
        var a = !!this.strokeStyle._transform;
        if ((this.strokeStyle instanceof CanvasPattern || this.strokeStyle instanceof CanvasGradient) && a && c instanceof Path2D) {
          var g = this.strokeStyle._transform, a = g.inverse();
          this.transform(g.a, g.b, g.c, g.d, g.e, g.f);
          g = new Path2D;
          g.addPath(c, a);
          var d = this.lineWidth;
          this.lineWidth *= (a.a + a.d) / 2;
          k.call(this, g);
          this.transform(a.a, a.b, a.c, a.d, a.e, a.f);
          this.lineWidth = d;
        } else {
          0 === arguments.length ? k.call(this) : 1 === arguments.length && k.call(this, c);
        }
      };
    }
    "undefined" !== typeof CanvasRenderingContext2D && function() {
      function c() {
        return q.Geometry.Matrix.createSVGMatrixFromArray(this.mozCurrentTransform);
      }
      var g = "currentTransform" in CanvasRenderingContext2D.prototype;
      CanvasRenderingContext2D.prototype.flashStroke = function(c, d) {
        if (g) {
          var b = this.currentTransform, k = new Path2D;
          k.addPath(c, b);
          var p = this.lineWidth;
          this.setTransform(1, 0, 0, 1, 0, 0);
          switch(d) {
            case 1:
              var e = Math.sqrt((b.a + b.c) * (b.a + b.c) + (b.d + b.b) * (b.d + b.b)) * Math.SQRT1_2;
              this.lineWidth = a(p * e, 1, 1024);
              break;
            case 2:
              this.lineWidth = a(p * (b.d + b.b), 1, 1024);
              break;
            case 3:
              this.lineWidth = a(p * (b.a + b.c), 1, 1024);
          }
          this.stroke(k);
          this.setTransform(b.a, b.b, b.c, b.d, b.e, b.f);
          this.lineWidth = p;
        } else {
          this.stroke(c);
        }
      };
      if (!g) {
        if ("mozCurrentTransform" in CanvasRenderingContext2D.prototype) {
          Object.defineProperty(CanvasRenderingContext2D.prototype, "currentTransform", {get:c}), g = !0;
        } else {
          var d = CanvasRenderingContext2D.prototype.setTransform;
          CanvasRenderingContext2D.prototype.setTransform = function(c, a, g, b, k, p) {
            var e = this.currentTransform;
            e.a = c;
            e.b = a;
            e.c = g;
            e.d = b;
            e.e = k;
            e.f = p;
            d.call(this, c, a, g, b, k, p);
          };
          Object.defineProperty(CanvasRenderingContext2D.prototype, "currentTransform", {get:function() {
            return this._currentTransform || (this._currentTransform = q.Geometry.Matrix.createIdentitySVGMatrix());
          }});
        }
      }
    }();
    if ("undefined" !== typeof CanvasRenderingContext2D && void 0 === CanvasRenderingContext2D.prototype.globalColorMatrix) {
      var y = CanvasRenderingContext2D.prototype.fill, p = CanvasRenderingContext2D.prototype.stroke, I = CanvasRenderingContext2D.prototype.fillText, L = CanvasRenderingContext2D.prototype.strokeText;
      Object.defineProperty(CanvasRenderingContext2D.prototype, "globalColorMatrix", {get:function() {
        return this._globalColorMatrix ? this._globalColorMatrix.clone() : null;
      }, set:function(c) {
        c ? this._globalColorMatrix ? this._globalColorMatrix.set(c) : this._globalColorMatrix = c.clone() : this._globalColorMatrix = null;
      }, enumerable:!0, configurable:!0});
      CanvasRenderingContext2D.prototype.fill = function(c, a) {
        var g = null;
        this._globalColorMatrix && (g = this.fillStyle, this.fillStyle = t(this, this.fillStyle, this._globalColorMatrix));
        0 === arguments.length ? y.call(this) : 1 === arguments.length ? y.call(this, c) : 2 === arguments.length && y.call(this, c, a);
        g && (this.fillStyle = g);
      };
      CanvasRenderingContext2D.prototype.stroke = function(c, a) {
        var g = null;
        this._globalColorMatrix && (g = this.strokeStyle, this.strokeStyle = t(this, this.strokeStyle, this._globalColorMatrix));
        0 === arguments.length ? p.call(this) : 1 === arguments.length && p.call(this, c);
        g && (this.strokeStyle = g);
      };
      CanvasRenderingContext2D.prototype.fillText = function(c, a, g, d) {
        var b = null;
        this._globalColorMatrix && (b = this.fillStyle, this.fillStyle = t(this, this.fillStyle, this._globalColorMatrix));
        3 === arguments.length ? I.call(this, c, a, g) : 4 === arguments.length ? I.call(this, c, a, g, d) : f.Debug.unexpected();
        b && (this.fillStyle = b);
      };
      CanvasRenderingContext2D.prototype.strokeText = function(c, a, g, d) {
        var b = null;
        this._globalColorMatrix && (b = this.strokeStyle, this.strokeStyle = t(this, this.strokeStyle, this._globalColorMatrix));
        3 === arguments.length ? L.call(this, c, a, g) : 4 === arguments.length ? L.call(this, c, a, g, d) : f.Debug.unexpected();
        b && (this.strokeStyle = b);
      };
    }
  })(f.GFX || (f.GFX = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(f) {
    var t = function() {
      return function(a, f, n, b) {
        this.dataURL = a;
        this.w = f;
        this.h = n;
        this.pixelRatio = b;
      };
    }();
    f.ScreenShot = t;
  })(f.GFX || (f.GFX = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  var q = function() {
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
    f.prototype._unshift = function(a) {
      0 === this._count ? this._head = this._tail = a : (a.next = this._head, this._head = a.next.previous = a);
      this._count++;
    };
    f.prototype._remove = function(a) {
      a === this._head && a === this._tail ? this._head = this._tail = null : a === this._head ? (this._head = a.next, this._head.previous = null) : a == this._tail ? (this._tail = a.previous, this._tail.next = null) : (a.previous.next = a.next, a.next.previous = a.previous);
      a.previous = a.next = null;
      this._count--;
    };
    f.prototype.use = function(a) {
      this._head !== a && ((a.next || a.previous || this._tail === a) && this._remove(a), this._unshift(a));
    };
    f.prototype.pop = function() {
      if (!this._tail) {
        return null;
      }
      var a = this._tail;
      this._remove(a);
      return a;
    };
    f.prototype.visit = function(a, f) {
      void 0 === f && (f = !0);
      for (var n = f ? this._head : this._tail;n && a(n);) {
        n = f ? n.next : n.previous;
      }
    };
    return f;
  }();
  f.LRUList = q;
})(Shumway || (Shumway = {}));
var Shumway$$inline_24 = Shumway || (Shumway = {}), GFX$$inline_25 = Shumway$$inline_24.GFX || (Shumway$$inline_24.GFX = {}), Option$$inline_26 = Shumway$$inline_24.Options.Option, OptionSet$$inline_27 = Shumway$$inline_24.Options.OptionSet, shumwayOptions$$inline_28 = Shumway$$inline_24.Settings.shumwayOptions, rendererOptions$$inline_29 = shumwayOptions$$inline_28.register(new OptionSet$$inline_27("Renderer Options"));
GFX$$inline_25.imageUpdateOption = rendererOptions$$inline_29.register(new Option$$inline_26("", "imageUpdate", "boolean", !0, "Enable image updating."));
GFX$$inline_25.imageConvertOption = rendererOptions$$inline_29.register(new Option$$inline_26("", "imageConvert", "boolean", !0, "Enable image conversion."));
GFX$$inline_25.stageOptions = shumwayOptions$$inline_28.register(new OptionSet$$inline_27("Stage Renderer Options"));
GFX$$inline_25.forcePaint = GFX$$inline_25.stageOptions.register(new Option$$inline_26("", "forcePaint", "boolean", !1, "Force repainting."));
GFX$$inline_25.ignoreViewport = GFX$$inline_25.stageOptions.register(new Option$$inline_26("", "ignoreViewport", "boolean", !1, "Cull elements outside of the viewport."));
GFX$$inline_25.viewportLoupeDiameter = GFX$$inline_25.stageOptions.register(new Option$$inline_26("", "viewportLoupeDiameter", "number", 256, "Size of the viewport loupe.", {range:{min:1, max:1024, step:1}}));
GFX$$inline_25.disableClipping = GFX$$inline_25.stageOptions.register(new Option$$inline_26("", "disableClipping", "boolean", !1, "Disable clipping."));
GFX$$inline_25.debugClipping = GFX$$inline_25.stageOptions.register(new Option$$inline_26("", "debugClipping", "boolean", !1, "Disable clipping."));
GFX$$inline_25.hud = GFX$$inline_25.stageOptions.register(new Option$$inline_26("", "hud", "boolean", !1, "Enable HUD."));
var webGLOptions$$inline_30 = GFX$$inline_25.stageOptions.register(new OptionSet$$inline_27("WebGL Options"));
GFX$$inline_25.perspectiveCamera = webGLOptions$$inline_30.register(new Option$$inline_26("", "pc", "boolean", !1, "Use perspective camera."));
GFX$$inline_25.perspectiveCameraFOV = webGLOptions$$inline_30.register(new Option$$inline_26("", "pcFOV", "number", 60, "Perspective Camera FOV."));
GFX$$inline_25.perspectiveCameraDistance = webGLOptions$$inline_30.register(new Option$$inline_26("", "pcDistance", "number", 2, "Perspective Camera Distance."));
GFX$$inline_25.perspectiveCameraAngle = webGLOptions$$inline_30.register(new Option$$inline_26("", "pcAngle", "number", 0, "Perspective Camera Angle."));
GFX$$inline_25.perspectiveCameraAngleRotate = webGLOptions$$inline_30.register(new Option$$inline_26("", "pcRotate", "boolean", !1, "Rotate Use perspective camera."));
GFX$$inline_25.perspectiveCameraSpacing = webGLOptions$$inline_30.register(new Option$$inline_26("", "pcSpacing", "number", .01, "Element Spacing."));
GFX$$inline_25.perspectiveCameraSpacingInflate = webGLOptions$$inline_30.register(new Option$$inline_26("", "pcInflate", "boolean", !1, "Rotate Use perspective camera."));
GFX$$inline_25.drawTiles = webGLOptions$$inline_30.register(new Option$$inline_26("", "drawTiles", "boolean", !1, "Draw WebGL Tiles"));
GFX$$inline_25.drawSurfaces = webGLOptions$$inline_30.register(new Option$$inline_26("", "drawSurfaces", "boolean", !1, "Draw WebGL Surfaces."));
GFX$$inline_25.drawSurface = webGLOptions$$inline_30.register(new Option$$inline_26("", "drawSurface", "number", -1, "Draw WebGL Surface #"));
GFX$$inline_25.drawElements = webGLOptions$$inline_30.register(new Option$$inline_26("", "drawElements", "boolean", !0, "Actually call gl.drawElements. This is useful to test if the GPU is the bottleneck."));
GFX$$inline_25.disableSurfaceUploads = webGLOptions$$inline_30.register(new Option$$inline_26("", "disableSurfaceUploads", "boolean", !1, "Disable surface uploads."));
GFX$$inline_25.premultipliedAlpha = webGLOptions$$inline_30.register(new Option$$inline_26("", "premultipliedAlpha", "boolean", !1, "Set the premultipliedAlpha flag on getContext()."));
GFX$$inline_25.unpackPremultiplyAlpha = webGLOptions$$inline_30.register(new Option$$inline_26("", "unpackPremultiplyAlpha", "boolean", !0, "Use UNPACK_PREMULTIPLY_ALPHA_WEBGL in pixelStorei."));
var factorChoices$$inline_31 = {ZERO:0, ONE:1, SRC_COLOR:768, ONE_MINUS_SRC_COLOR:769, DST_COLOR:774, ONE_MINUS_DST_COLOR:775, SRC_ALPHA:770, ONE_MINUS_SRC_ALPHA:771, DST_ALPHA:772, ONE_MINUS_DST_ALPHA:773, SRC_ALPHA_SATURATE:776, CONSTANT_COLOR:32769, ONE_MINUS_CONSTANT_COLOR:32770, CONSTANT_ALPHA:32771, ONE_MINUS_CONSTANT_ALPHA:32772};
GFX$$inline_25.sourceBlendFactor = webGLOptions$$inline_30.register(new Option$$inline_26("", "sourceBlendFactor", "number", factorChoices$$inline_31.ONE, "", {choices:factorChoices$$inline_31}));
GFX$$inline_25.destinationBlendFactor = webGLOptions$$inline_30.register(new Option$$inline_26("", "destinationBlendFactor", "number", factorChoices$$inline_31.ONE_MINUS_SRC_ALPHA, "", {choices:factorChoices$$inline_31}));
var canvas2DOptions$$inline_32 = GFX$$inline_25.stageOptions.register(new OptionSet$$inline_27("Canvas2D Options"));
GFX$$inline_25.clipDirtyRegions = canvas2DOptions$$inline_32.register(new Option$$inline_26("", "clipDirtyRegions", "boolean", !1, "Clip dirty regions."));
GFX$$inline_25.clipCanvas = canvas2DOptions$$inline_32.register(new Option$$inline_26("", "clipCanvas", "boolean", !1, "Clip Regions."));
GFX$$inline_25.cull = canvas2DOptions$$inline_32.register(new Option$$inline_26("", "cull", "boolean", !1, "Enable culling."));
GFX$$inline_25.snapToDevicePixels = canvas2DOptions$$inline_32.register(new Option$$inline_26("", "snapToDevicePixels", "boolean", !1, ""));
GFX$$inline_25.imageSmoothing = canvas2DOptions$$inline_32.register(new Option$$inline_26("", "imageSmoothing", "boolean", !1, ""));
GFX$$inline_25.masking = canvas2DOptions$$inline_32.register(new Option$$inline_26("", "masking", "boolean", !0, "Composite Mask."));
GFX$$inline_25.blending = canvas2DOptions$$inline_32.register(new Option$$inline_26("", "blending", "boolean", !0, ""));
GFX$$inline_25.debugLayers = canvas2DOptions$$inline_32.register(new Option$$inline_26("", "debugLayers", "boolean", !1, ""));
GFX$$inline_25.filters = canvas2DOptions$$inline_32.register(new Option$$inline_26("", "filters", "boolean", !0, ""));
GFX$$inline_25.cacheShapes = canvas2DOptions$$inline_32.register(new Option$$inline_26("", "cacheShapes", "boolean", !0, ""));
GFX$$inline_25.cacheShapesMaxSize = canvas2DOptions$$inline_32.register(new Option$$inline_26("", "cacheShapesMaxSize", "number", 256, "", {range:{min:1, max:1024, step:1}}));
GFX$$inline_25.cacheShapesThreshold = canvas2DOptions$$inline_32.register(new Option$$inline_26("", "cacheShapesThreshold", "number", 256, "", {range:{min:1, max:1024, step:1}}));
(function(f) {
  (function(q) {
    (function(t) {
      function a(a, c, g, b) {
        var e = 1 - b;
        return a * e * e + 2 * c * e * b + g * b * b;
      }
      function w(a, c, g, b, e) {
        var p = e * e, f = 1 - e, h = f * f;
        return a * f * h + 3 * c * e * h + 3 * g * f * p + b * e * p;
      }
      var n = f.NumberUtilities.clamp, b = f.NumberUtilities.pow2, h = f.NumberUtilities.epsilonEquals;
      t.radianToDegrees = function(a) {
        return 180 * a / Math.PI;
      };
      t.degreesToRadian = function(a) {
        return a * Math.PI / 180;
      };
      t.quadraticBezier = a;
      t.quadraticBezierExtreme = function(d, c, g) {
        var b = (d - c) / (d - 2 * c + g);
        return 0 > b ? d : 1 < b ? g : a(d, c, g, b);
      };
      t.cubicBezier = w;
      t.cubicBezierExtremes = function(a, c, g, b) {
        var e = c - a, p;
        p = 2 * (g - c);
        var f = b - g;
        e + f === p && (f *= 1.0001);
        var h = 2 * e - p, m = p - 2 * e, m = Math.sqrt(m * m - 4 * e * (e - p + f));
        p = 2 * (e - p + f);
        e = (h + m) / p;
        h = (h - m) / p;
        m = [];
        0 <= e && 1 >= e && m.push(w(a, c, g, b, e));
        0 <= h && 1 >= h && m.push(w(a, c, g, b, h));
        return m;
      };
      var l = function() {
        function a(c, g) {
          this.x = c;
          this.y = g;
        }
        a.prototype.setElements = function(c, a) {
          this.x = c;
          this.y = a;
          return this;
        };
        a.prototype.set = function(c) {
          this.x = c.x;
          this.y = c.y;
          return this;
        };
        a.prototype.dot = function(c) {
          return this.x * c.x + this.y * c.y;
        };
        a.prototype.squaredLength = function() {
          return this.dot(this);
        };
        a.prototype.distanceTo = function(c) {
          return Math.sqrt(this.dot(c));
        };
        a.prototype.sub = function(c) {
          this.x -= c.x;
          this.y -= c.y;
          return this;
        };
        a.prototype.mul = function(c) {
          this.x *= c;
          this.y *= c;
          return this;
        };
        a.prototype.clone = function() {
          return new a(this.x, this.y);
        };
        a.prototype.toString = function(c) {
          void 0 === c && (c = 2);
          return "{x: " + this.x.toFixed(c) + ", y: " + this.y.toFixed(c) + "}";
        };
        a.prototype.inTriangle = function(c, a, d) {
          var b = c.y * d.x - c.x * d.y + (d.y - c.y) * this.x + (c.x - d.x) * this.y, p = c.x * a.y - c.y * a.x + (c.y - a.y) * this.x + (a.x - c.x) * this.y;
          if (0 > b != 0 > p) {
            return !1;
          }
          c = -a.y * d.x + c.y * (d.x - a.x) + c.x * (a.y - d.y) + a.x * d.y;
          0 > c && (b = -b, p = -p, c = -c);
          return 0 < b && 0 < p && b + p < c;
        };
        a.createEmpty = function() {
          return new a(0, 0);
        };
        a.createEmptyPoints = function(c) {
          for (var g = [], b = 0;b < c;b++) {
            g.push(new a(0, 0));
          }
          return g;
        };
        return a;
      }();
      t.Point = l;
      var e = function() {
        function a(c, g, d) {
          this.x = c;
          this.y = g;
          this.z = d;
        }
        a.prototype.setElements = function(c, a, d) {
          this.x = c;
          this.y = a;
          this.z = d;
          return this;
        };
        a.prototype.set = function(c) {
          this.x = c.x;
          this.y = c.y;
          this.z = c.z;
          return this;
        };
        a.prototype.dot = function(c) {
          return this.x * c.x + this.y * c.y + this.z * c.z;
        };
        a.prototype.cross = function(c) {
          var a = this.z * c.x - this.x * c.z, d = this.x * c.y - this.y * c.x;
          this.x = this.y * c.z - this.z * c.y;
          this.y = a;
          this.z = d;
          return this;
        };
        a.prototype.squaredLength = function() {
          return this.dot(this);
        };
        a.prototype.sub = function(c) {
          this.x -= c.x;
          this.y -= c.y;
          this.z -= c.z;
          return this;
        };
        a.prototype.mul = function(c) {
          this.x *= c;
          this.y *= c;
          this.z *= c;
          return this;
        };
        a.prototype.normalize = function() {
          var c = Math.sqrt(this.squaredLength());
          1E-5 < c ? this.mul(1 / c) : this.setElements(0, 0, 0);
          return this;
        };
        a.prototype.clone = function() {
          return new a(this.x, this.y, this.z);
        };
        a.prototype.toString = function(c) {
          void 0 === c && (c = 2);
          return "{x: " + this.x.toFixed(c) + ", y: " + this.y.toFixed(c) + ", z: " + this.z.toFixed(c) + "}";
        };
        a.createEmpty = function() {
          return new a(0, 0, 0);
        };
        a.createEmptyPoints = function(c) {
          for (var g = [], b = 0;b < c;b++) {
            g.push(new a(0, 0, 0));
          }
          return g;
        };
        return a;
      }();
      t.Point3D = e;
      var r = function() {
        function a(c, g, b, e) {
          this.setElements(c, g, b, e);
          a.allocationCount++;
        }
        a.prototype.setElements = function(c, a, b, d) {
          this.x = c;
          this.y = a;
          this.w = b;
          this.h = d;
        };
        a.prototype.set = function(c) {
          this.x = c.x;
          this.y = c.y;
          this.w = c.w;
          this.h = c.h;
        };
        a.prototype.contains = function(c) {
          var a = c.x + c.w, b = c.y + c.h, d = this.x + this.w, p = this.y + this.h;
          return c.x >= this.x && c.x < d && c.y >= this.y && c.y < p && a > this.x && a <= d && b > this.y && b <= p;
        };
        a.prototype.containsPoint = function(c) {
          return c.x >= this.x && c.x < this.x + this.w && c.y >= this.y && c.y < this.y + this.h;
        };
        a.prototype.isContained = function(c) {
          for (var a = 0;a < c.length;a++) {
            if (c[a].contains(this)) {
              return !0;
            }
          }
          return !1;
        };
        a.prototype.isSmallerThan = function(c) {
          return this.w < c.w && this.h < c.h;
        };
        a.prototype.isLargerThan = function(c) {
          return this.w > c.w && this.h > c.h;
        };
        a.prototype.union = function(c) {
          if (this.isEmpty()) {
            this.set(c);
          } else {
            if (!c.isEmpty()) {
              var a = this.x, b = this.y;
              this.x > c.x && (a = c.x);
              this.y > c.y && (b = c.y);
              var d = this.x + this.w;
              d < c.x + c.w && (d = c.x + c.w);
              var p = this.y + this.h;
              p < c.y + c.h && (p = c.y + c.h);
              this.x = a;
              this.y = b;
              this.w = d - a;
              this.h = p - b;
            }
          }
        };
        a.prototype.isEmpty = function() {
          return 0 >= this.w || 0 >= this.h;
        };
        a.prototype.setEmpty = function() {
          this.h = this.w = this.y = this.x = 0;
        };
        a.prototype.intersect = function(c) {
          var g = a.createEmpty();
          if (this.isEmpty() || c.isEmpty()) {
            return g.setEmpty(), g;
          }
          g.x = Math.max(this.x, c.x);
          g.y = Math.max(this.y, c.y);
          g.w = Math.min(this.x + this.w, c.x + c.w) - g.x;
          g.h = Math.min(this.y + this.h, c.y + c.h) - g.y;
          g.isEmpty() && g.setEmpty();
          this.set(g);
        };
        a.prototype.intersects = function(c) {
          if (this.isEmpty() || c.isEmpty()) {
            return !1;
          }
          var a = Math.max(this.x, c.x), b = Math.max(this.y, c.y), a = Math.min(this.x + this.w, c.x + c.w) - a;
          c = Math.min(this.y + this.h, c.y + c.h) - b;
          return !(0 >= a || 0 >= c);
        };
        a.prototype.intersectsTransformedAABB = function(c, g) {
          var b = a._temporary;
          b.set(c);
          g.transformRectangleAABB(b);
          return this.intersects(b);
        };
        a.prototype.intersectsTranslated = function(c, a, b) {
          if (this.isEmpty() || c.isEmpty()) {
            return !1;
          }
          var d = Math.max(this.x, c.x + a), p = Math.max(this.y, c.y + b);
          a = Math.min(this.x + this.w, c.x + a + c.w) - d;
          c = Math.min(this.y + this.h, c.y + b + c.h) - p;
          return !(0 >= a || 0 >= c);
        };
        a.prototype.area = function() {
          return this.w * this.h;
        };
        a.prototype.clone = function() {
          var c = a.allocate();
          c.set(this);
          return c;
        };
        a.allocate = function() {
          var c = a._dirtyStack;
          return c.length ? c.pop() : new a(12345, 67890, 12345, 67890);
        };
        a.prototype.free = function() {
          a._dirtyStack.push(this);
        };
        a.prototype.snap = function() {
          var c = Math.ceil(this.x + this.w), a = Math.ceil(this.y + this.h);
          this.x = Math.floor(this.x);
          this.y = Math.floor(this.y);
          this.w = c - this.x;
          this.h = a - this.y;
          return this;
        };
        a.prototype.scale = function(c, a) {
          this.x *= c;
          this.y *= a;
          this.w *= c;
          this.h *= a;
          return this;
        };
        a.prototype.offset = function(c, a) {
          this.x += c;
          this.y += a;
          return this;
        };
        a.prototype.resize = function(c, a) {
          this.w += c;
          this.h += a;
          return this;
        };
        a.prototype.expand = function(c, a) {
          this.offset(-c, -a).resize(2 * c, 2 * a);
          return this;
        };
        a.prototype.getCenter = function() {
          return new l(this.x + this.w / 2, this.y + this.h / 2);
        };
        a.prototype.getAbsoluteBounds = function() {
          return new a(0, 0, this.w, this.h);
        };
        a.prototype.toString = function(c) {
          void 0 === c && (c = 2);
          return "{" + this.x.toFixed(c) + ", " + this.y.toFixed(c) + ", " + this.w.toFixed(c) + ", " + this.h.toFixed(c) + "}";
        };
        a.createEmpty = function() {
          var c = a.allocate();
          c.setEmpty();
          return c;
        };
        a.createSquare = function(c) {
          return new a(-c / 2, -c / 2, c, c);
        };
        a.createMaxI16 = function() {
          return new a(-32768, -32768, 65535, 65535);
        };
        a.prototype.setMaxI16 = function() {
          this.setElements(-32768, -32768, 65535, 65535);
        };
        a.prototype.getCorners = function(c) {
          c[0].x = this.x;
          c[0].y = this.y;
          c[1].x = this.x + this.w;
          c[1].y = this.y;
          c[2].x = this.x + this.w;
          c[2].y = this.y + this.h;
          c[3].x = this.x;
          c[3].y = this.y + this.h;
        };
        a.allocationCount = 0;
        a._temporary = new a(0, 0, 0, 0);
        a._dirtyStack = [];
        return a;
      }();
      t.Rectangle = r;
      var u = function() {
        function a(c) {
          this.corners = c.map(function(c) {
            return c.clone();
          });
          this.axes = [c[1].clone().sub(c[0]), c[3].clone().sub(c[0])];
          this.origins = [];
          for (var g = 0;2 > g;g++) {
            this.axes[g].mul(1 / this.axes[g].squaredLength()), this.origins.push(c[0].dot(this.axes[g]));
          }
        }
        a.prototype.getBounds = function() {
          return a.getBounds(this.corners);
        };
        a.getBounds = function(c) {
          for (var a = new l(Number.MAX_VALUE, Number.MAX_VALUE), b = new l(Number.MIN_VALUE, Number.MIN_VALUE), d = 0;4 > d;d++) {
            var p = c[d].x, e = c[d].y;
            a.x = Math.min(a.x, p);
            a.y = Math.min(a.y, e);
            b.x = Math.max(b.x, p);
            b.y = Math.max(b.y, e);
          }
          return new r(a.x, a.y, b.x - a.x, b.y - a.y);
        };
        a.prototype.intersects = function(c) {
          return this.intersectsOneWay(c) && c.intersectsOneWay(this);
        };
        a.prototype.intersectsOneWay = function(c) {
          for (var a = 0;2 > a;a++) {
            for (var b = 0;4 > b;b++) {
              var d = c.corners[b].dot(this.axes[a]), p, e;
              0 === b ? e = p = d : d < p ? p = d : d > e && (e = d);
            }
            if (p > 1 + this.origins[a] || e < this.origins[a]) {
              return !1;
            }
          }
          return !0;
        };
        return a;
      }();
      t.OBB = u;
      (function(a) {
        a[a.Unknown = 0] = "Unknown";
        a[a.Identity = 1] = "Identity";
        a[a.Translation = 2] = "Translation";
      })(t.MatrixType || (t.MatrixType = {}));
      var m = function() {
        function a(c, g, b, e, p, f) {
          this._data = new Float64Array(6);
          this._type = 0;
          this.setElements(c, g, b, e, p, f);
          a.allocationCount++;
        }
        Object.defineProperty(a.prototype, "a", {get:function() {
          return this._data[0];
        }, set:function(c) {
          this._data[0] = c;
          this._type = 0;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "b", {get:function() {
          return this._data[1];
        }, set:function(c) {
          this._data[1] = c;
          this._type = 0;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "c", {get:function() {
          return this._data[2];
        }, set:function(c) {
          this._data[2] = c;
          this._type = 0;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "d", {get:function() {
          return this._data[3];
        }, set:function(c) {
          this._data[3] = c;
          this._type = 0;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "tx", {get:function() {
          return this._data[4];
        }, set:function(c) {
          this._data[4] = c;
          1 === this._type && (this._type = 2);
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "ty", {get:function() {
          return this._data[5];
        }, set:function(c) {
          this._data[5] = c;
          1 === this._type && (this._type = 2);
        }, enumerable:!0, configurable:!0});
        a._createSVGMatrix = function() {
          a._svg || (a._svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"));
          return a._svg.createSVGMatrix();
        };
        a.prototype.setElements = function(c, a, b, d, p, e) {
          var f = this._data;
          f[0] = c;
          f[1] = a;
          f[2] = b;
          f[3] = d;
          f[4] = p;
          f[5] = e;
          this._type = 0;
        };
        a.prototype.set = function(c) {
          var a = this._data, b = c._data;
          a[0] = b[0];
          a[1] = b[1];
          a[2] = b[2];
          a[3] = b[3];
          a[4] = b[4];
          a[5] = b[5];
          this._type = c._type;
        };
        a.prototype.emptyArea = function(c) {
          c = this._data;
          return 0 === c[0] || 0 === c[3] ? !0 : !1;
        };
        a.prototype.infiniteArea = function(c) {
          c = this._data;
          return Infinity === Math.abs(c[0]) || Infinity === Math.abs(c[3]) ? !0 : !1;
        };
        a.prototype.isEqual = function(c) {
          if (1 === this._type && 1 === c._type) {
            return !0;
          }
          var a = this._data;
          c = c._data;
          return a[0] === c[0] && a[1] === c[1] && a[2] === c[2] && a[3] === c[3] && a[4] === c[4] && a[5] === c[5];
        };
        a.prototype.clone = function() {
          var c = a.allocate();
          c.set(this);
          return c;
        };
        a.allocate = function() {
          var c = a._dirtyStack;
          return c.length ? c.pop() : new a(12345, 12345, 12345, 12345, 12345, 12345);
        };
        a.prototype.free = function() {
          a._dirtyStack.push(this);
        };
        a.prototype.transform = function(c, a, b, d, p, e) {
          var f = this._data, h = f[0], m = f[1], r = f[2], u = f[3], v = f[4], l = f[5];
          f[0] = h * c + r * a;
          f[1] = m * c + u * a;
          f[2] = h * b + r * d;
          f[3] = m * b + u * d;
          f[4] = h * p + r * e + v;
          f[5] = m * p + u * e + l;
          this._type = 0;
          return this;
        };
        a.prototype.transformRectangle = function(c, a) {
          var b = this._data, d = b[0], p = b[1], e = b[2], f = b[3], h = b[4], b = b[5], m = c.x, r = c.y, u = c.w, v = c.h;
          a[0].x = d * m + e * r + h;
          a[0].y = p * m + f * r + b;
          a[1].x = d * (m + u) + e * r + h;
          a[1].y = p * (m + u) + f * r + b;
          a[2].x = d * (m + u) + e * (r + v) + h;
          a[2].y = p * (m + u) + f * (r + v) + b;
          a[3].x = d * m + e * (r + v) + h;
          a[3].y = p * m + f * (r + v) + b;
        };
        a.prototype.isTranslationOnly = function() {
          if (2 === this._type) {
            return !0;
          }
          var c = this._data;
          return 1 === c[0] && 0 === c[1] && 0 === c[2] && 1 === c[3] || h(c[0], 1) && h(c[1], 0) && h(c[2], 0) && h(c[3], 1) ? (this._type = 2, !0) : !1;
        };
        a.prototype.transformRectangleAABB = function(c) {
          var a = this._data;
          if (1 !== this._type) {
            if (2 === this._type) {
              c.x += a[4], c.y += a[5];
            } else {
              var b = a[0], d = a[1], p = a[2], e = a[3], f = a[4], h = a[5], m = c.x, r = c.y, u = c.w, v = c.h, a = b * m + p * r + f, l = d * m + e * r + h, n = b * (m + u) + p * r + f, x = d * (m + u) + e * r + h, q = b * (m + u) + p * (r + v) + f, u = d * (m + u) + e * (r + v) + h, b = b * m + p * (r + v) + f, d = d * m + e * (r + v) + h, e = 0;
              a > n && (e = a, a = n, n = e);
              q > b && (e = q, q = b, b = e);
              c.x = a < q ? a : q;
              c.w = (n > b ? n : b) - c.x;
              l > x && (e = l, l = x, x = e);
              u > d && (e = u, u = d, d = e);
              c.y = l < u ? l : u;
              c.h = (x > d ? x : d) - c.y;
            }
          }
        };
        a.prototype.scale = function(c, a) {
          var b = this._data;
          b[0] *= c;
          b[1] *= a;
          b[2] *= c;
          b[3] *= a;
          b[4] *= c;
          b[5] *= a;
          this._type = 0;
          return this;
        };
        a.prototype.scaleClone = function(c, a) {
          return 1 === c && 1 === a ? this : this.clone().scale(c, a);
        };
        a.prototype.rotate = function(c) {
          var a = this._data, b = a[0], d = a[1], p = a[2], e = a[3], f = a[4], h = a[5], m = Math.cos(c);
          c = Math.sin(c);
          a[0] = m * b - c * d;
          a[1] = c * b + m * d;
          a[2] = m * p - c * e;
          a[3] = c * p + m * e;
          a[4] = m * f - c * h;
          a[5] = c * f + m * h;
          this._type = 0;
          return this;
        };
        a.prototype.concat = function(c) {
          if (1 === c._type) {
            return this;
          }
          var a = this._data;
          c = c._data;
          var b = a[0] * c[0], d = 0, p = 0, e = a[3] * c[3], f = a[4] * c[0] + c[4], h = a[5] * c[3] + c[5];
          if (0 !== a[1] || 0 !== a[2] || 0 !== c[1] || 0 !== c[2]) {
            b += a[1] * c[2], e += a[2] * c[1], d += a[0] * c[1] + a[1] * c[3], p += a[2] * c[0] + a[3] * c[2], f += a[5] * c[2], h += a[4] * c[1];
          }
          a[0] = b;
          a[1] = d;
          a[2] = p;
          a[3] = e;
          a[4] = f;
          a[5] = h;
          this._type = 0;
          return this;
        };
        a.prototype.concatClone = function(a) {
          return this.clone().concat(a);
        };
        a.prototype.preMultiply = function(a) {
          var g = this._data, b = a._data;
          if (2 === a._type && this._type & 3) {
            g[4] += b[4], g[5] += b[5], this._type = 2;
          } else {
            if (1 !== a._type) {
              a = b[0] * g[0];
              var d = 0, p = 0, e = b[3] * g[3], f = b[4] * g[0] + g[4], h = b[5] * g[3] + g[5];
              if (0 !== b[1] || 0 !== b[2] || 0 !== g[1] || 0 !== g[2]) {
                a += b[1] * g[2], e += b[2] * g[1], d += b[0] * g[1] + b[1] * g[3], p += b[2] * g[0] + b[3] * g[2], f += b[5] * g[2], h += b[4] * g[1];
              }
              g[0] = a;
              g[1] = d;
              g[2] = p;
              g[3] = e;
              g[4] = f;
              g[5] = h;
              this._type = 0;
            }
          }
        };
        a.prototype.translate = function(a, b) {
          var d = this._data;
          d[4] += a;
          d[5] += b;
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
            var b = this._data, d = a.x, e = a.y;
            a.x = b[0] * d + b[2] * e + b[4];
            a.y = b[1] * d + b[3] * e + b[5];
          }
        };
        a.prototype.transformPoints = function(a) {
          if (1 !== this._type) {
            for (var b = 0;b < a.length;b++) {
              this.transformPoint(a[b]);
            }
          }
        };
        a.prototype.deltaTransformPoint = function(a) {
          if (1 !== this._type) {
            var b = this._data, d = a.x, e = a.y;
            a.x = b[0] * d + b[2] * e;
            a.y = b[1] * d + b[3] * e;
          }
        };
        a.prototype.inverse = function(a) {
          var b = this._data, d = a._data;
          if (1 === this._type) {
            a.setIdentity();
          } else {
            if (2 === this._type) {
              d[0] = 1, d[1] = 0, d[2] = 0, d[3] = 1, d[4] = -b[4], d[5] = -b[5], a._type = 2;
            } else {
              var e = b[1], p = b[2], f = b[4], h = b[5];
              if (0 === e && 0 === p) {
                var m = d[0] = 1 / b[0], b = d[3] = 1 / b[3];
                d[1] = 0;
                d[2] = 0;
                d[4] = -m * f;
                d[5] = -b * h;
              } else {
                var m = b[0], b = b[3], r = m * b - e * p;
                if (0 === r) {
                  a.setIdentity();
                  return;
                }
                r = 1 / r;
                d[0] = b * r;
                e = d[1] = -e * r;
                p = d[2] = -p * r;
                b = d[3] = m * r;
                d[4] = -(d[0] * f + p * h);
                d[5] = -(e * f + b * h);
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
          var b = Math.sqrt(a[0] * a[0] + a[1] * a[1]);
          return 0 < a[0] ? b : -b;
        };
        a.prototype.getScaleY = function() {
          var a = this._data;
          if (0 === a[2] && 1 === a[3]) {
            return 1;
          }
          var b = Math.sqrt(a[2] * a[2] + a[3] * a[3]);
          return 0 < a[3] ? b : -b;
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
          var b = this._data;
          return "{" + b[0].toFixed(a) + ", " + b[1].toFixed(a) + ", " + b[2].toFixed(a) + ", " + b[3].toFixed(a) + ", " + b[4].toFixed(a) + ", " + b[5].toFixed(a) + "}";
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
          var c = a.allocate();
          c.setIdentity();
          return c;
        };
        a.prototype.toSVGMatrix = function() {
          var c = this._data, b = a._createSVGMatrix();
          try {
            b.a = c[0], b.b = c[1], b.c = c[2], b.d = c[3], b.e = c[4], b.f = c[5];
          } catch (k) {
            return a._createSVGMatrix();
          }
          return b;
        };
        a.prototype.snap = function() {
          var a = this._data;
          return this.isTranslationOnly() ? (a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 1, a[4] = Math.round(a[4]), a[5] = Math.round(a[5]), this._type = 2, !0) : !1;
        };
        a.createIdentitySVGMatrix = function() {
          return a._createSVGMatrix();
        };
        a.createSVGMatrixFromArray = function(c) {
          var b = a._createSVGMatrix();
          b.a = c[0];
          b.b = c[1];
          b.c = c[2];
          b.d = c[3];
          b.e = c[4];
          b.f = c[5];
          return b;
        };
        a.allocationCount = 0;
        a._dirtyStack = [];
        a.multiply = function(a, b) {
          var d = b._data;
          a.transform(d[0], d[1], d[2], d[3], d[4], d[5]);
        };
        return a;
      }();
      t.Matrix = m;
      m = function() {
        function a(c) {
          this._m = new Float32Array(c);
        }
        a.prototype.asWebGLMatrix = function() {
          return this._m;
        };
        a.createCameraLookAt = function(c, b, k) {
          b = c.clone().sub(b).normalize();
          k = k.clone().cross(b).normalize();
          var e = b.clone().cross(k);
          return new a([k.x, k.y, k.z, 0, e.x, e.y, e.z, 0, b.x, b.y, b.z, 0, c.x, c.y, c.z, 1]);
        };
        a.createLookAt = function(c, b, k) {
          b = c.clone().sub(b).normalize();
          k = k.clone().cross(b).normalize();
          var e = b.clone().cross(k);
          return new a([k.x, e.x, b.x, 0, e.x, e.y, b.y, 0, b.x, e.z, b.z, 0, -k.dot(c), -e.dot(c), -b.dot(c), 1]);
        };
        a.prototype.mul = function(a) {
          a = [a.x, a.y, a.z, 0];
          for (var b = this._m, d = [], f = 0;4 > f;f++) {
            d[f] = 0;
            for (var p = 4 * f, h = 0;4 > h;h++) {
              d[f] += b[p + h] * a[h];
            }
          }
          return new e(d[0], d[1], d[2]);
        };
        a.create2DProjection = function(c, b, k) {
          return new a([2 / c, 0, 0, 0, 0, -2 / b, 0, 0, 0, 0, 2 / k, 0, -1, 1, 0, 1]);
        };
        a.createPerspective = function(c, b, k, e) {
          c = Math.tan(.5 * Math.PI - .5 * c);
          var p = 1 / (k - e);
          return new a([c / b, 0, 0, 0, 0, c, 0, 0, 0, 0, (k + e) * p, -1, 0, 0, k * e * p * 2, 0]);
        };
        a.createIdentity = function() {
          return a.createTranslation(0, 0, 0);
        };
        a.createTranslation = function(c, b, k) {
          return new a([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, c, b, k, 1]);
        };
        a.createXRotation = function(c) {
          var b = Math.cos(c);
          c = Math.sin(c);
          return new a([1, 0, 0, 0, 0, b, c, 0, 0, -c, b, 0, 0, 0, 0, 1]);
        };
        a.createYRotation = function(c) {
          var b = Math.cos(c);
          c = Math.sin(c);
          return new a([b, 0, -c, 0, 0, 1, 0, 0, c, 0, b, 0, 0, 0, 0, 1]);
        };
        a.createZRotation = function(c) {
          var b = Math.cos(c);
          c = Math.sin(c);
          return new a([b, c, 0, 0, -c, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        };
        a.createScale = function(c, b, k) {
          return new a([c, 0, 0, 0, 0, b, 0, 0, 0, 0, k, 0, 0, 0, 0, 1]);
        };
        a.createMultiply = function(c, b) {
          var k = c._m, e = b._m, p = k[0], f = k[1], h = k[2], m = k[3], r = k[4], u = k[5], v = k[6], l = k[7], n = k[8], x = k[9], q = k[10], t = k[11], w = k[12], z = k[13], B = k[14], k = k[15], E = e[0], A = e[1], D = e[2], F = e[3], G = e[4], K = e[5], H = e[6], M = e[7], N = e[8], O = e[9], P = e[10], Q = e[11], R = e[12], S = e[13], T = e[14], e = e[15];
          return new a([p * E + f * G + h * N + m * R, p * A + f * K + h * O + m * S, p * D + f * H + h * P + m * T, p * F + f * M + h * Q + m * e, r * E + u * G + v * N + l * R, r * A + u * K + v * O + l * S, r * D + u * H + v * P + l * T, r * F + u * M + v * Q + l * e, n * E + x * G + q * N + t * R, n * A + x * K + q * O + t * S, n * D + x * H + q * P + t * T, n * F + x * M + q * Q + t * e, w * E + z * G + B * N + k * R, w * A + z * K + B * O + k * S, w * D + z * H + B * P + k * T, w * F + z * 
          M + B * Q + k * e]);
        };
        a.createInverse = function(c) {
          var b = c._m;
          c = b[0];
          var k = b[1], e = b[2], p = b[3], f = b[4], h = b[5], m = b[6], r = b[7], u = b[8], v = b[9], l = b[10], n = b[11], x = b[12], q = b[13], t = b[14], b = b[15], w = l * b, z = t * n, B = m * b, E = t * r, A = m * n, D = l * r, F = e * b, G = t * p, K = e * n, H = l * p, M = e * r, N = m * p, O = u * q, P = x * v, Q = f * q, R = x * h, S = f * v, T = u * h, Z = c * q, aa = x * k, ba = c * v, ca = u * k, da = c * h, ea = f * k, fa = w * h + E * v + A * q - (z * h + B * v + D * q), ga = z * 
          k + F * v + H * q - (w * k + G * v + K * q), q = B * k + G * h + M * q - (E * k + F * h + N * q), k = D * k + K * h + N * v - (A * k + H * h + M * v), h = 1 / (c * fa + f * ga + u * q + x * k);
          return new a([h * fa, h * ga, h * q, h * k, h * (z * f + B * u + D * x - (w * f + E * u + A * x)), h * (w * c + G * u + K * x - (z * c + F * u + H * x)), h * (E * c + F * f + N * x - (B * c + G * f + M * x)), h * (A * c + H * f + M * u - (D * c + K * f + N * u)), h * (O * r + R * n + S * b - (P * r + Q * n + T * b)), h * (P * p + Z * n + ca * b - (O * p + aa * n + ba * b)), h * (Q * p + aa * r + da * b - (R * p + Z * r + ea * b)), h * (T * p + ba * r + ea * n - (S * p + ca * r + da * n)), 
          h * (Q * l + T * t + P * m - (S * t + O * m + R * l)), h * (ba * t + O * e + aa * l - (Z * l + ca * t + P * e)), h * (Z * m + ea * t + R * e - (da * t + Q * e + aa * m)), h * (da * l + S * e + ca * m - (ba * m + ea * l + T * e))]);
        };
        return a;
      }();
      t.Matrix3D = m;
      m = function() {
        function a(c, b, k) {
          void 0 === k && (k = 7);
          var e = this.size = 1 << k;
          this.sizeInBits = k;
          this.w = c;
          this.h = b;
          this.c = Math.ceil(c / e);
          this.r = Math.ceil(b / e);
          this.grid = [];
          for (c = 0;c < this.r;c++) {
            for (this.grid.push([]), b = 0;b < this.c;b++) {
              this.grid[c][b] = new a.Cell(new r(b * e, c * e, e, e));
            }
          }
        }
        a.prototype.clear = function() {
          for (var a = 0;a < this.r;a++) {
            for (var b = 0;b < this.c;b++) {
              this.grid[a][b].clear();
            }
          }
        };
        a.prototype.getBounds = function() {
          return new r(0, 0, this.w, this.h);
        };
        a.prototype.addDirtyRectangle = function(a) {
          var b = a.x >> this.sizeInBits, d = a.y >> this.sizeInBits;
          if (!(b >= this.c || d >= this.r)) {
            0 > b && (b = 0);
            0 > d && (d = 0);
            var e = this.grid[d][b];
            a = a.clone();
            a.snap();
            if (e.region.contains(a)) {
              e.bounds.isEmpty() ? e.bounds.set(a) : e.bounds.contains(a) || e.bounds.union(a);
            } else {
              for (var p = Math.min(this.c, Math.ceil((a.x + a.w) / this.size)) - b, f = Math.min(this.r, Math.ceil((a.y + a.h) / this.size)) - d, h = 0;h < p;h++) {
                for (var m = 0;m < f;m++) {
                  e = this.grid[d + m][b + h], e = e.region.clone(), e.intersect(a), e.isEmpty() || this.addDirtyRectangle(e);
                }
              }
            }
          }
        };
        a.prototype.gatherRegions = function(a) {
          for (var b = 0;b < this.r;b++) {
            for (var d = 0;d < this.c;d++) {
              this.grid[b][d].bounds.isEmpty() || a.push(this.grid[b][d].bounds);
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
          for (var b = 0, d = 0;d < this.r;d++) {
            for (var e = 0;e < this.c;e++) {
              b += this.grid[d][e].region.area();
            }
          }
          return b / a;
        };
        a.prototype.render = function(a, b) {
          function d(b) {
            a.rect(b.x, b.y, b.w, b.h);
          }
          if (b && b.drawGrid) {
            a.strokeStyle = "white";
            for (var e = 0;e < this.r;e++) {
              for (var p = 0;p < this.c;p++) {
                var f = this.grid[e][p];
                a.beginPath();
                d(f.region);
                a.closePath();
                a.stroke();
              }
            }
          }
          a.strokeStyle = "#E0F8D8";
          for (e = 0;e < this.r;e++) {
            for (p = 0;p < this.c;p++) {
              f = this.grid[e][p], a.beginPath(), d(f.bounds), a.closePath(), a.stroke();
            }
          }
        };
        a.tmpRectangle = r.createEmpty();
        return a;
      }();
      t.DirtyRegion = m;
      (function(a) {
        var c = function() {
          function a(c) {
            this.region = c;
            this.bounds = r.createEmpty();
          }
          a.prototype.clear = function() {
            this.bounds.setEmpty();
          };
          return a;
        }();
        a.Cell = c;
      })(m = t.DirtyRegion || (t.DirtyRegion = {}));
      var v = function() {
        function a(c, b, d, e, p, f) {
          this.index = c;
          this.x = b;
          this.y = d;
          this.scale = f;
          this.bounds = new r(b * e, d * p, e, p);
        }
        a.prototype.getOBB = function() {
          if (this._obb) {
            return this._obb;
          }
          this.bounds.getCorners(a.corners);
          return this._obb = new u(a.corners);
        };
        a.corners = l.createEmptyPoints(4);
        return a;
      }();
      t.Tile = v;
      var x = function() {
        function a(c, b, d, e, p) {
          this.tileW = d;
          this.tileH = e;
          this.scale = p;
          this.w = c;
          this.h = b;
          this.rows = Math.ceil(b / e);
          this.columns = Math.ceil(c / d);
          this.tiles = [];
          for (b = c = 0;b < this.rows;b++) {
            for (var f = 0;f < this.columns;f++) {
              this.tiles.push(new v(c++, f, b, d, e, p));
            }
          }
        }
        a.prototype.getTiles = function(a, b) {
          if (b.emptyArea(a)) {
            return [];
          }
          if (b.infiniteArea(a)) {
            return this.tiles;
          }
          var d = this.columns * this.rows;
          return 40 > d && b.isScaleOrRotation() ? this.getFewTiles(a, b, 10 < d) : this.getManyTiles(a, b);
        };
        a.prototype.getFewTiles = function(c, b, k) {
          void 0 === k && (k = !0);
          if (b.isTranslationOnly() && 1 === this.tiles.length) {
            return this.tiles[0].bounds.intersectsTranslated(c, b.tx, b.ty) ? [this.tiles[0]] : [];
          }
          b.transformRectangle(c, a._points);
          var e;
          c = new r(0, 0, this.w, this.h);
          k && (e = new u(a._points));
          c.intersect(u.getBounds(a._points));
          if (c.isEmpty()) {
            return [];
          }
          var p = c.x / this.tileW | 0;
          b = c.y / this.tileH | 0;
          var f = Math.ceil((c.x + c.w) / this.tileW) | 0, h = Math.ceil((c.y + c.h) / this.tileH) | 0, p = n(p, 0, this.columns), f = n(f, 0, this.columns);
          b = n(b, 0, this.rows);
          for (var h = n(h, 0, this.rows), m = [];p < f;p++) {
            for (var v = b;v < h;v++) {
              var l = this.tiles[v * this.columns + p];
              l.bounds.intersects(c) && (k ? l.getOBB().intersects(e) : 1) && m.push(l);
            }
          }
          return m;
        };
        a.prototype.getManyTiles = function(c, b) {
          function k(a, c, b) {
            return (a - c.x) * (b.y - c.y) / (b.x - c.x) + c.y;
          }
          function e(a, c, b, d, g) {
            if (!(0 > b || b >= c.columns)) {
              for (d = n(d, 0, c.rows), g = n(g + 1, 0, c.rows);d < g;d++) {
                a.push(c.tiles[d * c.columns + b]);
              }
            }
          }
          var p = a._points;
          b.transformRectangle(c, p);
          for (var f = p[0].x < p[1].x ? 0 : 1, h = p[2].x < p[3].x ? 2 : 3, h = p[f].x < p[h].x ? f : h, f = [], m = 0;5 > m;m++, h++) {
            f.push(p[h % 4]);
          }
          (f[1].x - f[0].x) * (f[3].y - f[0].y) < (f[1].y - f[0].y) * (f[3].x - f[0].x) && (p = f[1], f[1] = f[3], f[3] = p);
          var p = [], r, u, h = Math.floor(f[0].x / this.tileW), m = (h + 1) * this.tileW;
          if (f[2].x < m) {
            r = Math.min(f[0].y, f[1].y, f[2].y, f[3].y);
            u = Math.max(f[0].y, f[1].y, f[2].y, f[3].y);
            var v = Math.floor(r / this.tileH), l = Math.floor(u / this.tileH);
            e(p, this, h, v, l);
            return p;
          }
          var x = 0, q = 4, t = !1;
          if (f[0].x === f[1].x || f[0].x === f[3].x) {
            f[0].x === f[1].x ? (t = !0, x++) : q--, r = k(m, f[x], f[x + 1]), u = k(m, f[q], f[q - 1]), v = Math.floor(f[x].y / this.tileH), l = Math.floor(f[q].y / this.tileH), e(p, this, h, v, l), h++;
          }
          do {
            var w, C, z, B;
            f[x + 1].x < m ? (w = f[x + 1].y, z = !0) : (w = k(m, f[x], f[x + 1]), z = !1);
            f[q - 1].x < m ? (C = f[q - 1].y, B = !0) : (C = k(m, f[q], f[q - 1]), B = !1);
            v = Math.floor((f[x].y < f[x + 1].y ? r : w) / this.tileH);
            l = Math.floor((f[q].y > f[q - 1].y ? u : C) / this.tileH);
            e(p, this, h, v, l);
            if (z && t) {
              break;
            }
            z ? (t = !0, x++, r = k(m, f[x], f[x + 1])) : r = w;
            B ? (q--, u = k(m, f[q], f[q - 1])) : u = C;
            h++;
            m = (h + 1) * this.tileW;
          } while (x < q);
          return p;
        };
        a._points = l.createEmptyPoints(4);
        return a;
      }();
      t.TileCache = x;
      m = function() {
        function a(c, b, d) {
          this._cacheLevels = [];
          this._source = c;
          this._tileSize = b;
          this._minUntiledSize = d;
        }
        a.prototype._getTilesAtScale = function(a, d, k) {
          var e = Math.max(d.getAbsoluteScaleX(), d.getAbsoluteScaleY()), p = 0;
          1 !== e && (p = n(Math.round(Math.log(1 / e) / Math.LN2), -5, 3));
          e = b(p);
          if (this._source.hasFlags(256)) {
            for (;;) {
              e = b(p);
              if (k.contains(this._source.getBounds().getAbsoluteBounds().clone().scale(e, e))) {
                break;
              }
              p--;
            }
          }
          this._source.hasFlags(512) || (p = n(p, -5, 0));
          e = b(p);
          k = 5 + p;
          p = this._cacheLevels[k];
          if (!p) {
            var p = this._source.getBounds().getAbsoluteBounds().clone().scale(e, e), f, h;
            this._source.hasFlags(256) || !this._source.hasFlags(1024) || Math.max(p.w, p.h) <= this._minUntiledSize ? (f = p.w, h = p.h) : f = h = this._tileSize;
            p = this._cacheLevels[k] = new x(p.w, p.h, f, h, e);
          }
          return p.getTiles(a, d.scaleClone(e, e));
        };
        a.prototype.fetchTiles = function(a, b, d, e) {
          var p = new r(0, 0, d.canvas.width, d.canvas.height);
          a = this._getTilesAtScale(a, b, p);
          var f;
          b = this._source;
          for (var h = 0;h < a.length;h++) {
            var m = a[h];
            m.cachedSurfaceRegion && m.cachedSurfaceRegion.surface && !b.hasFlags(4352) || (f || (f = []), f.push(m));
          }
          f && this._cacheTiles(d, f, e, p);
          b.removeFlags(4096);
          return a;
        };
        a.prototype._getTileBounds = function(a) {
          for (var b = r.createEmpty(), d = 0;d < a.length;d++) {
            b.union(a[d].bounds);
          }
          return b;
        };
        a.prototype._cacheTiles = function(a, b, d, e, p) {
          void 0 === p && (p = 4);
          var f = this._getTileBounds(b);
          a.save();
          a.setTransform(1, 0, 0, 1, 0, 0);
          a.clearRect(0, 0, e.w, e.h);
          a.translate(-f.x, -f.y);
          a.scale(b[0].scale, b[0].scale);
          var h = this._source.getBounds();
          a.translate(-h.x, -h.y);
          2 <= q.traceLevel && q.writer && q.writer.writeLn("Rendering Tiles: " + f);
          this._source.render(a, 0);
          a.restore();
          for (var h = null, m = 0;m < b.length;m++) {
            var r = b[m], u = r.bounds.clone();
            u.x -= f.x;
            u.y -= f.y;
            e.contains(u) || (h || (h = []), h.push(r));
            r.cachedSurfaceRegion = d(r.cachedSurfaceRegion, a, u);
          }
          h && (2 <= h.length ? (b = h.slice(0, h.length / 2 | 0), f = h.slice(b.length), this._cacheTiles(a, b, d, e, p - 1), this._cacheTiles(a, f, d, e, p - 1)) : this._cacheTiles(a, h, d, e, p - 1));
        };
        return a;
      }();
      t.RenderableTileCache = m;
    })(q.Geometry || (q.Geometry = {}));
  })(f.GFX || (f.GFX = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(f, q) {
  function t() {
    this.constructor = f;
  }
  for (var a in q) {
    q.hasOwnProperty(a) && (f[a] = q[a]);
  }
  t.prototype = q.prototype;
  f.prototype = new t;
};
(function(f) {
  (function(q) {
    var t = f.IntegerUtilities.roundToMultipleOfPowerOfTwo, a = q.Geometry.Rectangle;
    (function(f) {
      var n = function(a) {
        function b() {
          a.apply(this, arguments);
        }
        __extends(b, a);
        return b;
      }(q.Geometry.Rectangle);
      f.Region = n;
      var b = function() {
        function a(b, e) {
          this._root = new h(0, 0, b | 0, e | 0, !1);
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
      f.CompactAllocator = b;
      var h = function(a) {
        function e(b, d, c, g, k) {
          a.call(this, b, d, c, g);
          this._children = null;
          this._horizontal = k;
          this.allocated = !1;
        }
        __extends(e, a);
        e.prototype.clear = function() {
          this._children = null;
          this.allocated = !1;
        };
        e.prototype.insert = function(a, b) {
          return this._insert(a, b, 0);
        };
        e.prototype._insert = function(a, d, c) {
          if (!(c > b.MAX_DEPTH || this.allocated || this.w < a || this.h < d)) {
            if (this._children) {
              var g;
              if ((g = this._children[0]._insert(a, d, c + 1)) || (g = this._children[1]._insert(a, d, c + 1))) {
                return g;
              }
            } else {
              return g = !this._horizontal, b.RANDOM_ORIENTATION && (g = .5 <= Math.random()), this._children = this._horizontal ? [new e(this.x, this.y, this.w, d, !1), new e(this.x, this.y + d, this.w, this.h - d, g)] : [new e(this.x, this.y, a, this.h, !0), new e(this.x + a, this.y, this.w - a, this.h, g)], g = this._children[0], g.w === a && g.h === d ? (g.allocated = !0, g) : this._insert(a, d, c + 1);
            }
          }
        };
        return e;
      }(f.Region), l = function() {
        function a(b, e, d, c) {
          this._columns = b / d | 0;
          this._rows = e / c | 0;
          this._sizeW = d;
          this._sizeH = c;
          this._freeList = [];
          this._index = 0;
          this._total = this._columns * this._rows;
        }
        a.prototype.allocate = function(a, b) {
          a = Math.ceil(a);
          b = Math.ceil(b);
          var d = this._sizeW, c = this._sizeH;
          if (a > d || b > c) {
            return null;
          }
          var g = this._freeList, k = this._index;
          return 0 < g.length ? (d = g.pop(), d.w = a, d.h = b, d.allocated = !0, d) : k < this._total ? (g = k / this._columns | 0, d = new e((k - g * this._columns) * d, g * c, a, b), d.index = k, d.allocator = this, d.allocated = !0, this._index++, d) : null;
        };
        a.prototype.free = function(a) {
          a.allocated = !1;
          this._freeList.push(a);
        };
        return a;
      }();
      f.GridAllocator = l;
      var e = function(a) {
        function b(e, d, c, g) {
          a.call(this, e, d, c, g);
          this.index = -1;
        }
        __extends(b, a);
        return b;
      }(f.Region);
      f.GridCell = e;
      var r = function() {
        return function(a, b, e) {
          this.size = a;
          this.region = b;
          this.allocator = e;
        };
      }(), u = function(a) {
        function b(e, d, c, g, k) {
          a.call(this, e, d, c, g);
          this.region = k;
        }
        __extends(b, a);
        return b;
      }(f.Region);
      f.BucketCell = u;
      n = function() {
        function b(a, e) {
          this._buckets = [];
          this._w = a | 0;
          this._h = e | 0;
          this._filled = 0;
        }
        b.prototype.allocate = function(b, e) {
          b = Math.ceil(b);
          e = Math.ceil(e);
          var d = Math.max(b, e);
          if (b > this._w || e > this._h) {
            return null;
          }
          var c = null, g, k = this._buckets;
          do {
            for (var f = 0;f < k.length && !(k[f].size >= d && (g = k[f], c = g.allocator.allocate(b, e)));f++) {
            }
            if (!c) {
              var p = this._h - this._filled;
              if (p < e) {
                return null;
              }
              var f = t(d, 8), h = 2 * f;
              h > p && (h = p);
              if (h < f) {
                return null;
              }
              p = new a(0, this._filled, this._w, h);
              this._buckets.push(new r(f, p, new l(p.w, p.h, f, f)));
              this._filled += h;
            }
          } while (!c);
          return new u(g.region.x + c.x, g.region.y + c.y, c.w, c.h, c);
        };
        b.prototype.free = function(a) {
          a.region.allocator.free(a.region);
        };
        return b;
      }();
      f.BucketAllocator = n;
    })(q.RegionAllocator || (q.RegionAllocator = {}));
    (function(a) {
      var f = function() {
        function a(b) {
          this._createSurface = b;
          this._surfaces = [];
        }
        Object.defineProperty(a.prototype, "surfaces", {get:function() {
          return this._surfaces;
        }, enumerable:!0, configurable:!0});
        a.prototype._createNewSurface = function(a, b) {
          var e = this._createSurface(a, b);
          this._surfaces.push(e);
          return e;
        };
        a.prototype.addSurface = function(a) {
          this._surfaces.push(a);
        };
        a.prototype.allocate = function(a, b, e) {
          for (var f = 0;f < this._surfaces.length;f++) {
            var u = this._surfaces[f];
            if (u !== e && (u = u.allocate(a, b))) {
              return u;
            }
          }
          return this._createNewSurface(a, b).allocate(a, b);
        };
        a.prototype.free = function(a) {
        };
        return a;
      }();
      a.SimpleAllocator = f;
    })(q.SurfaceRegionAllocator || (q.SurfaceRegionAllocator = {}));
  })(f.GFX || (f.GFX = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(q) {
    var t = q.Geometry.Rectangle, a = q.Geometry.Matrix, w = q.Geometry.DirtyRegion;
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
    var n = q.BlendMode;
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
    })(q.NodeFlags || (q.NodeFlags = {}));
    var b = q.NodeFlags;
    (function(a) {
      a[a.Node = 1] = "Node";
      a[a.Shape = 3] = "Shape";
      a[a.Group = 5] = "Group";
      a[a.Stage = 13] = "Stage";
      a[a.Renderable = 33] = "Renderable";
    })(q.NodeType || (q.NodeType = {}));
    var h = q.NodeType;
    (function(a) {
      a[a.None = 0] = "None";
      a[a.OnStageBoundsChanged = 1] = "OnStageBoundsChanged";
      a[a.RemovedFromStage = 2] = "RemovedFromStage";
    })(q.NodeEventType || (q.NodeEventType = {}));
    var l = function() {
      function a() {
      }
      a.prototype.visitNode = function(a, c) {
      };
      a.prototype.visitShape = function(a, c) {
        this.visitNode(a, c);
      };
      a.prototype.visitGroup = function(a, c) {
        this.visitNode(a, c);
        for (var b = a.getChildren(), d = 0;d < b.length;d++) {
          b[d].visit(this, c);
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
    q.NodeVisitor = l;
    var e = function() {
      return function() {
      };
    }();
    q.State = e;
    var r = function(c) {
      function b(d) {
        c.call(this);
        this.matrix = a.createIdentity();
        this.depth = 0;
      }
      __extends(b, c);
      b.prototype.transform = function(a) {
        var c = this.clone();
        c.matrix.preMultiply(a.getMatrix());
        return c;
      };
      b.allocate = function() {
        var a = b._dirtyStack, c = null;
        return c = a.length ? a.pop() : new b(this._doNotCallCtorDirectly);
      };
      b.prototype.clone = function() {
        var a = b.allocate();
        a.set(this);
        return a;
      };
      b.prototype.set = function(a) {
        this.matrix.set(a.matrix);
      };
      b.prototype.free = function() {
        b._dirtyStack.push(this);
      };
      b._dirtyStack = [];
      b._doNotCallCtorDirectly = Object.create(null);
      return b;
    }(e);
    q.PreRenderState = r;
    var u = function(a) {
      function b() {
        a.apply(this, arguments);
        this.isDirty = !0;
      }
      __extends(b, a);
      b.prototype.start = function(a, c) {
        this._dirtyRegion = c;
        var b = r.allocate();
        b.matrix.setIdentity();
        a.visit(this, b);
        b.free();
      };
      b.prototype.visitGroup = function(a, c) {
        var b = a.getChildren();
        this.visitNode(a, c);
        for (var d = 0;d < b.length;d++) {
          var g = b[d], e = c.transform(g.getTransform());
          g.visit(this, e);
          e.free();
        }
      };
      b.prototype.visitNode = function(a, c) {
        a.hasFlags(4096) && (this.isDirty = !0);
        a.toggleFlags(4096, !1);
        a.depth = c.depth++;
      };
      return b;
    }(l);
    q.PreRenderVisitor = u;
    e = function(a) {
      function b(d) {
        a.call(this);
        this.writer = d;
      }
      __extends(b, a);
      b.prototype.visitNode = function(a, c) {
      };
      b.prototype.visitShape = function(a, c) {
        this.writer.writeLn(a.toString());
        this.visitNode(a, c);
      };
      b.prototype.visitGroup = function(a, c) {
        this.visitNode(a, c);
        var b = a.getChildren();
        this.writer.enter(a.toString() + " " + b.length);
        for (var d = 0;d < b.length;d++) {
          b[d].visit(this, c);
        }
        this.writer.outdent();
      };
      b.prototype.visitStage = function(a, c) {
        this.visitGroup(a, c);
      };
      return b;
    }(l);
    q.TracingNodeVisitor = e;
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
          for (var c = this._eventListeners, b = 0;b < c.length;b++) {
            var d = c[b];
            d.type === a && d.listener(this, a);
          }
        }
      };
      a.prototype.addEventListener = function(a, c) {
        this._eventListeners || (this._eventListeners = []);
        this._eventListeners.push({type:a, listener:c});
      };
      a.prototype.removeEventListener = function(a, c) {
        for (var b = this._eventListeners, d = 0;d < b.length;d++) {
          var e = b[d];
          if (e.type === a && e.listener === c) {
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
        var c = this.getBounds(!0);
        if (a !== this && !c.isEmpty()) {
          var b = this.getTransform().getConcatenatedMatrix();
          a ? (a = a.getTransform().getInvertedConcatenatedMatrix(!0), a.preMultiply(b), a.transformRectangleAABB(c), a.free()) : b.transformRectangleAABB(c);
        }
        return c;
      };
      a.prototype._markCurrentBoundsAsDirtyRegion = function() {
      };
      a.prototype.getStage = function(a) {
        void 0 === a && (a = !0);
        for (var c = this._parent;c;) {
          if (c.isType(13)) {
            var b = c;
            if (a) {
              if (b.dirtyRegion) {
                return b;
              }
            } else {
              return b;
            }
          }
          c = c._parent;
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
        (this._bounds || (this._bounds = t.createEmpty())).set(a);
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
      a.prototype.toggleFlags = function(a, c) {
        this._flags = c ? this._flags | a : this._flags & ~a;
      };
      a.prototype._propagateFlagsUp = function(a) {
        if (0 !== a && !this.hasFlags(a)) {
          this.hasFlags(2048) || (a &= -8193);
          this.setFlags(a);
          var c = this._parent;
          c && c._propagateFlagsUp(a);
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
      a._getAncestors = function(b, d) {
        var e = a._path;
        for (e.length = 0;b && b !== d;) {
          e.push(b), b = b._parent;
        }
        return e;
      };
      a.prototype._findClosestAncestor = function(a, c) {
        for (var b = this;b;) {
          if (b.hasFlags(a) === c) {
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
        null === this._transform && (this._transform = new x(this));
        return this._transform;
      };
      a.prototype.getLayer = function() {
        null === this._layer && (this._layer = new d(this));
        return this._layer;
      };
      a.prototype.getLayerBounds = function(a) {
        var c = this.getBounds();
        a && this._layer && this._layer.expandBounds(c);
        return c;
      };
      a.prototype.visit = function(a, c) {
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
            f.Debug.unexpectedCase();
        }
      };
      a.prototype.invalidate = function() {
        this._propagateFlagsUp(b.UpOnInvalidate);
      };
      a.prototype.toString = function(a) {
        void 0 === a && (a = !1);
        var c = h[this._type] + " " + this._id;
        a && (c += " " + this._bounds.toString());
        return c;
      };
      a._path = [];
      a._nextId = 0;
      return a;
    }();
    q.Node = m;
    var v = function(a) {
      function d() {
        a.call(this);
        this._type = 5;
        this._children = [];
      }
      __extends(d, a);
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
      d.prototype.addChild = function(a) {
        a._parent && a._parent.removeChildAt(a._index);
        a._parent = this;
        a._index = this._children.length;
        this._children.push(a);
        this._propagateFlagsUp(b.UpOnAddedOrRemoved);
        a._propagateFlagsDown(b.DownOnAddedOrRemoved);
      };
      d.prototype.removeChildAt = function(a) {
        var c = this._children[a];
        this._children.splice(a, 1);
        c._index = -1;
        c._parent = null;
        this._propagateFlagsUp(b.UpOnAddedOrRemoved);
        c._propagateFlagsDown(b.DownOnAddedOrRemoved);
      };
      d.prototype.clearChildren = function() {
        for (var a = 0;a < this._children.length;a++) {
          var c = this._children[a];
          c && (c._index = -1, c._parent = null, c._propagateFlagsDown(b.DownOnAddedOrRemoved));
        }
        this._children.length = 0;
        this._propagateFlagsUp(b.UpOnAddedOrRemoved);
      };
      d.prototype._propagateFlagsDown = function(a) {
        if (!this.hasFlags(a)) {
          this.setFlags(a);
          for (var c = this._children, b = 0;b < c.length;b++) {
            c[b]._propagateFlagsDown(a);
          }
        }
      };
      d.prototype.getBounds = function(a) {
        void 0 === a && (a = !1);
        var c = this._bounds || (this._bounds = t.createEmpty());
        if (this.hasFlags(8192)) {
          c.setEmpty();
          for (var b = this._children, d = t.allocate(), g = 0;g < b.length;g++) {
            var e = b[g];
            d.set(e.getBounds());
            e.getTransformMatrix().transformRectangleAABB(d);
            c.union(d);
          }
          d.free();
          this.removeFlags(8192);
        }
        return a ? c.clone() : c;
      };
      d.prototype.getLayerBounds = function(a) {
        if (!a) {
          return this.getBounds();
        }
        for (var c = t.createEmpty(), b = this._children, d = t.allocate(), g = 0;g < b.length;g++) {
          var e = b[g];
          d.set(e.getLayerBounds(a));
          e.getTransformMatrix().transformRectangleAABB(d);
          c.union(d);
        }
        d.free();
        a && this._layer && this._layer.expandBounds(c);
        return c;
      };
      return d;
    }(m);
    q.Group = v;
    var x = function() {
      function c(c) {
        this._node = c;
        this._matrix = a.createIdentity();
        this._colorMatrix = q.ColorMatrix.createIdentity();
        this._concatenatedMatrix = a.createIdentity();
        this._invertedConcatenatedMatrix = a.createIdentity();
        this._concatenatedColorMatrix = q.ColorMatrix.createIdentity();
      }
      c.prototype.setMatrix = function(a) {
        this._matrix.isEqual(a) || (this._matrix.set(a), this._node._propagateFlagsUp(b.UpOnMoved), this._node._propagateFlagsDown(b.DownOnMoved));
      };
      c.prototype.setColorMatrix = function(a) {
        this._colorMatrix.set(a);
        this._node._propagateFlagsUp(b.UpOnColorMatrixChanged);
        this._node._propagateFlagsDown(b.DownOnColorMatrixChanged);
      };
      c.prototype.getMatrix = function(a) {
        void 0 === a && (a = !1);
        return a ? this._matrix.clone() : this._matrix;
      };
      c.prototype.hasColorMatrix = function() {
        return null !== this._colorMatrix;
      };
      c.prototype.getColorMatrix = function(a) {
        void 0 === a && (a = !1);
        null === this._colorMatrix && (this._colorMatrix = q.ColorMatrix.createIdentity());
        return a ? this._colorMatrix.clone() : this._colorMatrix;
      };
      c.prototype.getConcatenatedMatrix = function(c) {
        void 0 === c && (c = !1);
        if (this._node.hasFlags(16384)) {
          for (var b = this._node._findClosestAncestor(16384, !1), d = m._getAncestors(this._node, b), e = b ? b.getTransform()._concatenatedMatrix.clone() : a.createIdentity(), f = d.length - 1;0 <= f;f--) {
            var b = d[f], h = b.getTransform();
            e.preMultiply(h._matrix);
            h._concatenatedMatrix.set(e);
            b.removeFlags(16384);
          }
        }
        return c ? this._concatenatedMatrix.clone() : this._concatenatedMatrix;
      };
      c.prototype.getInvertedConcatenatedMatrix = function(a) {
        void 0 === a && (a = !1);
        this._node.hasFlags(32768) && (this.getConcatenatedMatrix().inverse(this._invertedConcatenatedMatrix), this._node.removeFlags(32768));
        return a ? this._invertedConcatenatedMatrix.clone() : this._invertedConcatenatedMatrix;
      };
      c.prototype.toString = function() {
        return this._matrix.toString();
      };
      return c;
    }();
    q.Transform = x;
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
        return n[this._blendMode];
      };
      a.prototype.expandBounds = function(a) {
        var c = this._filters;
        if (c) {
          for (var b = 0;b < c.length;b++) {
            c[b].expandBounds(a);
          }
        }
      };
      return a;
    }();
    q.Layer = d;
    e = function(a) {
      function b(d) {
        a.call(this);
        this._source = d;
        this._type = 3;
        this._ratio = 0;
      }
      __extends(b, a);
      b.prototype.getBounds = function(a) {
        void 0 === a && (a = !1);
        var c = this._bounds || (this._bounds = t.createEmpty());
        this.hasFlags(8192) && (c.set(this._source.getBounds()), this.removeFlags(8192));
        return a ? c.clone() : c;
      };
      Object.defineProperty(b.prototype, "source", {get:function() {
        return this._source;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(b.prototype, "ratio", {get:function() {
        return this._ratio;
      }, set:function(a) {
        a !== this._ratio && (this.invalidate(), this._ratio = a);
      }, enumerable:!0, configurable:!0});
      b.prototype._propagateFlagsDown = function(a) {
        this.setFlags(a);
      };
      b.prototype.getChildren = function(a) {
        return [this._source];
      };
      return b;
    }(m);
    q.Shape = e;
    e = function() {
      return function() {
        this.debug = !1;
        this.paintRenderable = !0;
        this.paintViewport = this.paintFlashing = this.paintDirtyRegion = this.paintBounds = !1;
        this.clear = !0;
      };
    }();
    q.RendererOptions = e;
    (function(a) {
      a[a.Canvas2D = 0] = "Canvas2D";
      a[a.WebGL = 1] = "WebGL";
      a[a.Both = 2] = "Both";
      a[a.DOM = 3] = "DOM";
      a[a.SVG = 4] = "SVG";
    })(q.Backend || (q.Backend = {}));
    l = function(a) {
      function b(d, g, e) {
        a.call(this);
        this._container = d;
        this._stage = g;
        this._options = e;
        this._viewport = t.createSquare(1024);
        this._devicePixelRatio = 1;
      }
      __extends(b, a);
      Object.defineProperty(b.prototype, "viewport", {set:function(a) {
        this._viewport.set(a);
      }, enumerable:!0, configurable:!0});
      b.prototype.render = function() {
        throw void 0;
      };
      b.prototype.resize = function() {
        throw void 0;
      };
      b.prototype.screenShot = function(a, c, b) {
        throw void 0;
      };
      return b;
    }(l);
    q.Renderer = l;
    l = function(c) {
      function b(a, d, e) {
        void 0 === e && (e = !1);
        c.call(this);
        this._preVisitor = new u;
        this._flags &= -2049;
        this._type = 13;
        this._scaleMode = b.DEFAULT_SCALE;
        this._align = b.DEFAULT_ALIGN;
        this._content = new v;
        this._content._flags &= -2049;
        this.addChild(this._content);
        this.setFlags(4096);
        this.setBounds(new t(0, 0, a, d));
        e ? (this._dirtyRegion = new w(a, d), this._dirtyRegion.addDirtyRectangle(new t(0, 0, a, d))) : this._dirtyRegion = null;
        this._updateContentMatrix();
      }
      __extends(b, c);
      Object.defineProperty(b.prototype, "dirtyRegion", {get:function() {
        return this._dirtyRegion;
      }, enumerable:!0, configurable:!0});
      b.prototype.setBounds = function(a) {
        c.prototype.setBounds.call(this, a);
        this._updateContentMatrix();
        this._dispatchEvent(1);
        this._dirtyRegion && (this._dirtyRegion = new w(a.w, a.h), this._dirtyRegion.addDirtyRectangle(a));
      };
      Object.defineProperty(b.prototype, "content", {get:function() {
        return this._content;
      }, enumerable:!0, configurable:!0});
      b.prototype.readyToRender = function() {
        this._preVisitor.isDirty = !1;
        this._preVisitor.start(this, this._dirtyRegion);
        return this._preVisitor.isDirty ? !0 : !1;
      };
      Object.defineProperty(b.prototype, "align", {get:function() {
        return this._align;
      }, set:function(a) {
        this._align = a;
        this._updateContentMatrix();
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(b.prototype, "scaleMode", {get:function() {
        return this._scaleMode;
      }, set:function(a) {
        this._scaleMode = a;
        this._updateContentMatrix();
      }, enumerable:!0, configurable:!0});
      b.prototype._updateContentMatrix = function() {
        if (this._scaleMode === b.DEFAULT_SCALE && this._align === b.DEFAULT_ALIGN) {
          this._content.getTransform().setMatrix(new a(1, 0, 0, 1, 0, 0));
        } else {
          var c = this.getBounds(), d = this._content.getBounds(), e = c.w / d.w, f = c.h / d.h;
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
          h = this._align & 4 ? 0 : this._align & 8 ? c.w - d.w * e : (c.w - d.w * e) / 2;
          c = this._align & 1 ? 0 : this._align & 2 ? c.h - d.h * f : (c.h - d.h * f) / 2;
          this._content.getTransform().setMatrix(new a(e, 0, 0, f, h, c));
        }
      };
      b.DEFAULT_SCALE = 4;
      b.DEFAULT_ALIGN = 5;
      return b;
    }(v);
    q.Stage = l;
  })(f.GFX || (f.GFX = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(q) {
    function t(a, b, d) {
      return a + (b - a) * d;
    }
    function a(a, b, d) {
      return t(a >> 24 & 255, b >> 24 & 255, d) << 24 | t(a >> 16 & 255, b >> 16 & 255, d) << 16 | t(a >> 8 & 255, b >> 8 & 255, d) << 8 | t(a & 255, b & 255, d);
    }
    function w(a, b, d) {
      a = a.measureText(b).width | 0;
      0 < d && (a += b.length * d);
      return a;
    }
    var n = q.Geometry.Point, b = q.Geometry.Rectangle, h = q.Geometry.Matrix, l = f.ArrayUtilities.indexOf, e = function(a) {
      function b() {
        a.call(this);
        this._parents = [];
        this._renderableParents = [];
        this._invalidateEventListeners = null;
        this._flags &= -2049;
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
      b.prototype.addRenderableParent = function(a) {
        this._renderableParents.push(a);
      };
      b.prototype.wrap = function() {
        for (var a, c = this._parents, b = 0;b < c.length;b++) {
          if (a = c[b], !a._parent) {
            return a;
          }
        }
        a = new q.Shape(this);
        this.addParent(a);
        return a;
      };
      b.prototype.invalidate = function() {
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
          for (var c = 0;c < this._parents.length;c++) {
            this._parents[c]._propagateFlagsUp(a);
          }
        }
      };
      b.prototype.render = function(a, c, b, d, g) {
      };
      return b;
    }(q.Node);
    q.Renderable = e;
    var r = function(a) {
      function b(d, g) {
        a.call(this);
        this.setBounds(d);
        this.render = g;
      }
      __extends(b, a);
      return b;
    }(e);
    q.CustomRenderable = r;
    (function(a) {
      a[a.Idle = 1] = "Idle";
      a[a.Playing = 2] = "Playing";
      a[a.Paused = 3] = "Paused";
      a[a.Ended = 4] = "Ended";
    })(q.RenderableVideoState || (q.RenderableVideoState = {}));
    r = function(a) {
      function d(e, f) {
        a.call(this);
        this._flags = 4352;
        this._lastPausedTime = this._lastTimeInvalidated = 0;
        this._pauseHappening = this._seekHappening = !1;
        this._isDOMElement = !0;
        this.setBounds(new b(0, 0, 1, 1));
        this._assetId = e;
        this._eventSerializer = f;
        var p = document.createElement("video"), h = this._handleVideoEvent.bind(this);
        p.preload = "metadata";
        p.addEventListener("play", h);
        p.addEventListener("pause", h);
        p.addEventListener("ended", h);
        p.addEventListener("loadeddata", h);
        p.addEventListener("progress", h);
        p.addEventListener("suspend", h);
        p.addEventListener("loadedmetadata", h);
        p.addEventListener("error", h);
        p.addEventListener("seeking", h);
        p.addEventListener("seeked", h);
        p.addEventListener("canplay", h);
        p.style.position = "absolute";
        this._video = p;
        this._videoEventHandler = h;
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
      d.prototype._notifyNetStream = function(a, c) {
        this._eventSerializer.sendVideoPlaybackEvent(this._assetId, a, c);
      };
      d.prototype.processControlRequest = function(a, c) {
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
              for (var g = 0;g < b.buffered.length;g++) {
                d = Math.max(d, b.buffered.end(g));
              }
            } else {
              d = b.duration;
            }
            return Math.round(500 * d);
          case 8:
            return b ? Math.round(500 * b.duration) : 0;
        }
      };
      d.prototype.checkForUpdate = function() {
        this._lastTimeInvalidated !== this._video.currentTime && (this._isDOMElement || this.invalidate());
        this._lastTimeInvalidated = this._video.currentTime;
      };
      d.checkForVideoUpdates = function() {
        for (var a = d._renderableVideos, c = 0;c < a.length;c++) {
          var b = a[c];
          b.willRender() ? (b._video.parentElement || b.invalidate(), b._video.style.zIndex = b.parents[0].depth + "") : b._video.parentElement && b._dispatchEvent(2);
          a[c].checkForUpdate();
        }
      };
      d.prototype.render = function(a, c, b) {
        (c = this._video) && 0 < c.videoWidth && a.drawImage(c, 0, 0, c.videoWidth, c.videoHeight, 0, 0, this._bounds.w, this._bounds.h);
      };
      d._renderableVideos = [];
      return d;
    }(e);
    q.RenderableVideo = r;
    r = function(a) {
      function d(b, g) {
        a.call(this);
        this._flags = 4352;
        this.properties = {};
        this.setBounds(g);
        b instanceof HTMLCanvasElement ? this._initializeSourceCanvas(b) : this._sourceImage = b;
      }
      __extends(d, a);
      d.FromDataBuffer = function(a, c, b) {
        var e = document.createElement("canvas");
        e.width = b.w;
        e.height = b.h;
        b = new d(e, b);
        b.updateFromDataBuffer(a, c);
        return b;
      };
      d.FromNode = function(a, c, b, e, f) {
        var h = document.createElement("canvas"), m = a.getBounds();
        h.width = m.w;
        h.height = m.h;
        h = new d(h, m);
        h.drawNode(a, c, b, e, f);
        return h;
      };
      d.FromImage = function(a, c, e) {
        return new d(a, new b(0, 0, c, e));
      };
      d.prototype.updateFromDataBuffer = function(a, c) {
        if (q.imageUpdateOption.value) {
          var b = c.buffer;
          if (4 !== a && 5 !== a && 6 !== a) {
            var d = this._bounds, g = this._imageData;
            g && g.width === d.w && g.height === d.h || (g = this._imageData = this._context.createImageData(d.w, d.h));
            q.imageConvertOption.value && (b = new Int32Array(b), d = new Int32Array(g.data.buffer), f.ColorUtilities.convertImage(a, 3, b, d));
            this._ensureSourceCanvas();
            this._context.putImageData(g, 0, 0);
          }
          this.invalidate();
        }
      };
      d.prototype.readImageData = function(a) {
        a.writeRawBytes(this.imageData.data);
      };
      d.prototype.render = function(a, c, b) {
        this.renderSource ? a.drawImage(this.renderSource, 0, 0) : this._renderFallback(a);
      };
      d.prototype.drawNode = function(a, c, b, d, g) {
        b = q.Canvas2D;
        d = this.getBounds();
        (new b.Canvas2DRenderer(this._canvas, null)).renderNode(a, g || d, c);
      };
      d.prototype.mask = function(a) {
        for (var c = this.imageData, b = new Int32Array(c.data.buffer), d = f.ColorUtilities.getUnpremultiplyTable(), g = 0;g < a.length;g++) {
          var e = a[g];
          if (0 === e) {
            b[g] = 0;
          } else {
            if (255 !== e) {
              var h = b[g], m = h >> 0 & 255, r = h >> 8 & 255, h = h >> 16 & 255, u = e << 8, m = d[u + Math.min(m, e)], r = d[u + Math.min(r, e)], h = d[u + Math.min(h, e)];
              b[g] = e << 24 | h << 16 | r << 8 | m;
            }
          }
        }
        this._context.putImageData(c, 0, 0);
      };
      d.prototype._initializeSourceCanvas = function(a) {
        this._canvas = a;
        this._context = this._canvas.getContext("2d");
      };
      d.prototype._ensureSourceCanvas = function() {
        if (!this._canvas) {
          var a = document.createElement("canvas"), c = this._bounds;
          a.width = c.w;
          a.height = c.h;
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
    }(e);
    q.RenderableBitmap = r;
    (function(a) {
      a[a.Fill = 0] = "Fill";
      a[a.Stroke = 1] = "Stroke";
      a[a.StrokeFill = 2] = "StrokeFill";
    })(q.PathType || (q.PathType = {}));
    var u = function() {
      return function(a, b, d, e) {
        this.type = a;
        this.style = b;
        this.smoothImage = d;
        this.strokeProperties = e;
        this.path = new Path2D;
      };
    }();
    q.StyledPath = u;
    var m = function() {
      return function(a, b, d, e, f) {
        this.thickness = a;
        this.scaleMode = b;
        this.capsStyle = d;
        this.jointsStyle = e;
        this.miterLimit = f;
      };
    }();
    q.StrokeProperties = m;
    var v = function(a) {
      function b(d, g, e, f) {
        a.call(this);
        this._flags = 5632;
        this.properties = {};
        this.setBounds(f);
        this._id = d;
        this._pathData = g;
        this._textures = e;
        e.length && this.setFlags(256);
      }
      __extends(b, a);
      b.prototype.update = function(a, c, b) {
        this.setBounds(b);
        this._pathData = a;
        this._paths = null;
        this._textures = c;
        this.setFlags(256);
        this.invalidate();
      };
      b.prototype.render = function(a, c, b, d, g) {
        void 0 === d && (d = null);
        void 0 === g && (g = !1);
        a.fillStyle = a.strokeStyle = "transparent";
        c = this._deserializePaths(this._pathData, a, c);
        for (b = 0;b < c.length;b++) {
          var e = c[b];
          a.mozImageSmoothingEnabled = a.msImageSmoothingEnabled = a.imageSmoothingEnabled = e.smoothImage;
          if (0 === e.type) {
            d ? d.addPath(e.path, a.currentTransform) : (a.fillStyle = g ? "#000000" : e.style, a.fill(e.path, "evenodd"), a.fillStyle = "transparent");
          } else {
            if (!d && !g) {
              a.strokeStyle = e.style;
              var f = 1;
              e.strokeProperties && (f = e.strokeProperties.scaleMode, a.lineWidth = e.strokeProperties.thickness, a.lineCap = e.strokeProperties.capsStyle, a.lineJoin = e.strokeProperties.jointsStyle, a.miterLimit = e.strokeProperties.miterLimit);
              var h = a.lineWidth;
              (h = 1 === h || 3 === h) && a.translate(.5, .5);
              a.flashStroke(e.path, f);
              h && a.translate(-.5, -.5);
              a.strokeStyle = "transparent";
            }
          }
        }
      };
      b.prototype._deserializePaths = function(a, c, d) {
        if (this._paths) {
          return this._paths;
        }
        d = this._paths = [];
        var e = null, h = null, r = 0, u = 0, v, l, n = !1, q = 0, x = 0, t = a.commands, w = a.coordinates, C = a.styles, z = C.position = 0;
        a = a.commandsPosition;
        for (var B = 0;B < a;B++) {
          switch(t[B]) {
            case 9:
              n && e && (e.lineTo(q, x), h && h.lineTo(q, x));
              n = !0;
              r = q = w[z++] / 20;
              u = x = w[z++] / 20;
              e && e.moveTo(r, u);
              h && h.moveTo(r, u);
              break;
            case 10:
              r = w[z++] / 20;
              u = w[z++] / 20;
              e && e.lineTo(r, u);
              h && h.lineTo(r, u);
              break;
            case 11:
              v = w[z++] / 20;
              l = w[z++] / 20;
              r = w[z++] / 20;
              u = w[z++] / 20;
              e && e.quadraticCurveTo(v, l, r, u);
              h && h.quadraticCurveTo(v, l, r, u);
              break;
            case 12:
              v = w[z++] / 20;
              l = w[z++] / 20;
              var E = w[z++] / 20, A = w[z++] / 20, r = w[z++] / 20, u = w[z++] / 20;
              e && e.bezierCurveTo(v, l, E, A, r, u);
              h && h.bezierCurveTo(v, l, E, A, r, u);
              break;
            case 1:
              e = this._createPath(0, f.ColorUtilities.rgbaToCSSStyle(C.readUnsignedInt()), !1, null, r, u);
              break;
            case 3:
              v = this._readBitmap(C, c);
              e = this._createPath(0, v.style, v.smoothImage, null, r, u);
              break;
            case 2:
              e = this._createPath(0, this._readGradient(C, c), !1, null, r, u);
              break;
            case 4:
              e = null;
              break;
            case 5:
              h = f.ColorUtilities.rgbaToCSSStyle(C.readUnsignedInt());
              C.position += 1;
              v = C.readByte();
              l = b.LINE_CAPS_STYLES[C.readByte()];
              E = b.LINE_JOINTS_STYLES[C.readByte()];
              v = new m(w[z++] / 20, v, l, E, C.readByte());
              h = this._createPath(1, h, !1, v, r, u);
              break;
            case 6:
              h = this._createPath(2, this._readGradient(C, c), !1, null, r, u);
              break;
            case 7:
              v = this._readBitmap(C, c);
              h = this._createPath(2, v.style, v.smoothImage, null, r, u);
              break;
            case 8:
              h = null;
          }
        }
        n && e && (e.lineTo(q, x), h && h.lineTo(q, x));
        this._pathData = null;
        return d;
      };
      b.prototype._createPath = function(a, c, b, d, g, e) {
        a = new u(a, c, b, d);
        this._paths.push(a);
        a.path.moveTo(g, e);
        return a.path;
      };
      b.prototype._readMatrix = function(a) {
        return new h(a.readFloat(), a.readFloat(), a.readFloat(), a.readFloat(), a.readFloat(), a.readFloat());
      };
      b.prototype._readGradient = function(a, c) {
        var b = a.readUnsignedByte(), d = 2 * a.readShort() / 255, g = this._readMatrix(a), b = 16 === b ? c.createLinearGradient(-1, 0, 1, 0) : c.createRadialGradient(d, 0, 0, 0, 0, 1);
        b.setTransform && b.setTransform(g.toSVGMatrix());
        g = a.readUnsignedByte();
        for (d = 0;d < g;d++) {
          var e = a.readUnsignedByte() / 255, h = f.ColorUtilities.rgbaToCSSStyle(a.readUnsignedInt());
          b.addColorStop(e, h);
        }
        a.position += 2;
        return b;
      };
      b.prototype._readBitmap = function(a, c) {
        var b = a.readUnsignedInt(), d = this._readMatrix(a), g = a.readBoolean() ? "repeat" : "no-repeat", e = a.readBoolean();
        (b = this._textures[b]) ? (g = c.createPattern(b.renderSource, g), g.setTransform(d.toSVGMatrix())) : g = null;
        return {style:g, smoothImage:e};
      };
      b.prototype._renderFallback = function(a) {
        this.fillStyle || (this.fillStyle = f.ColorStyle.randomStyle());
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
    }(e);
    q.RenderableShape = v;
    r = function(c) {
      function b() {
        c.apply(this, arguments);
        this._flags = 5888;
        this._morphPaths = Object.create(null);
      }
      __extends(b, c);
      b.prototype._deserializePaths = function(c, b, d) {
        if (this._morphPaths[d]) {
          return this._morphPaths[d];
        }
        var g = this._morphPaths[d] = [], e = null, h = null, r = 0, u = 0, l, n, q = !1, x = 0, w = 0, W = c.commands, C = c.coordinates, z = c.morphCoordinates, B = c.styles, E = c.morphStyles;
        B.position = 0;
        var A = E.position = 0;
        c = c.commandsPosition;
        for (var D = 0;D < c;D++) {
          switch(W[D]) {
            case 9:
              q && e && (e.lineTo(x, w), h && h.lineTo(x, w));
              q = !0;
              r = x = t(C[A], z[A++], d) / 20;
              u = w = t(C[A], z[A++], d) / 20;
              e && e.moveTo(r, u);
              h && h.moveTo(r, u);
              break;
            case 10:
              r = t(C[A], z[A++], d) / 20;
              u = t(C[A], z[A++], d) / 20;
              e && e.lineTo(r, u);
              h && h.lineTo(r, u);
              break;
            case 11:
              l = t(C[A], z[A++], d) / 20;
              n = t(C[A], z[A++], d) / 20;
              r = t(C[A], z[A++], d) / 20;
              u = t(C[A], z[A++], d) / 20;
              e && e.quadraticCurveTo(l, n, r, u);
              h && h.quadraticCurveTo(l, n, r, u);
              break;
            case 12:
              l = t(C[A], z[A++], d) / 20;
              n = t(C[A], z[A++], d) / 20;
              var F = t(C[A], z[A++], d) / 20, G = t(C[A], z[A++], d) / 20, r = t(C[A], z[A++], d) / 20, u = t(C[A], z[A++], d) / 20;
              e && e.bezierCurveTo(l, n, F, G, r, u);
              h && h.bezierCurveTo(l, n, F, G, r, u);
              break;
            case 1:
              e = this._createMorphPath(0, d, f.ColorUtilities.rgbaToCSSStyle(a(B.readUnsignedInt(), E.readUnsignedInt(), d)), !1, null, r, u);
              break;
            case 3:
              l = this._readMorphBitmap(B, E, d, b);
              e = this._createMorphPath(0, d, l.style, l.smoothImage, null, r, u);
              break;
            case 2:
              l = this._readMorphGradient(B, E, d, b);
              e = this._createMorphPath(0, d, l, !1, null, r, u);
              break;
            case 4:
              e = null;
              break;
            case 5:
              l = t(C[A], z[A++], d) / 20;
              h = f.ColorUtilities.rgbaToCSSStyle(a(B.readUnsignedInt(), E.readUnsignedInt(), d));
              B.position += 1;
              n = B.readByte();
              F = v.LINE_CAPS_STYLES[B.readByte()];
              G = v.LINE_JOINTS_STYLES[B.readByte()];
              l = new m(l, n, F, G, B.readByte());
              h = this._createMorphPath(1, d, h, !1, l, r, u);
              break;
            case 6:
              l = this._readMorphGradient(B, E, d, b);
              h = this._createMorphPath(2, d, l, !1, null, r, u);
              break;
            case 7:
              l = this._readMorphBitmap(B, E, d, b);
              h = this._createMorphPath(2, d, l.style, l.smoothImage, null, r, u);
              break;
            case 8:
              h = null;
          }
        }
        q && e && (e.lineTo(x, w), h && h.lineTo(x, w));
        return g;
      };
      b.prototype._createMorphPath = function(a, c, b, d, g, e, f) {
        a = new u(a, b, d, g);
        this._morphPaths[c].push(a);
        a.path.moveTo(e, f);
        return a.path;
      };
      b.prototype._readMorphMatrix = function(a, c, b) {
        return new h(t(a.readFloat(), c.readFloat(), b), t(a.readFloat(), c.readFloat(), b), t(a.readFloat(), c.readFloat(), b), t(a.readFloat(), c.readFloat(), b), t(a.readFloat(), c.readFloat(), b), t(a.readFloat(), c.readFloat(), b));
      };
      b.prototype._readMorphGradient = function(c, b, d, g) {
        var e = c.readUnsignedByte(), h = 2 * c.readShort() / 255, m = this._readMorphMatrix(c, b, d);
        g = 16 === e ? g.createLinearGradient(-1, 0, 1, 0) : g.createRadialGradient(h, 0, 0, 0, 0, 1);
        g.setTransform && g.setTransform(m.toSVGMatrix());
        m = c.readUnsignedByte();
        for (e = 0;e < m;e++) {
          var h = t(c.readUnsignedByte() / 255, b.readUnsignedByte() / 255, d), r = a(c.readUnsignedInt(), b.readUnsignedInt(), d), r = f.ColorUtilities.rgbaToCSSStyle(r);
          g.addColorStop(h, r);
        }
        c.position += 2;
        return g;
      };
      b.prototype._readMorphBitmap = function(a, c, b, d) {
        var g = a.readUnsignedInt();
        c = this._readMorphMatrix(a, c, b);
        b = a.readBoolean() ? "repeat" : "no-repeat";
        a = a.readBoolean();
        d = d.createPattern(this._textures[g]._canvas, b);
        d.setTransform(c.toSVGMatrix());
        return {style:d, smoothImage:a};
      };
      return b;
    }(v);
    q.RenderableMorphShape = r;
    var x = function() {
      function a() {
        this.align = this.leading = this.descent = this.ascent = this.width = this.y = this.x = 0;
        this.runs = [];
      }
      a._getMeasureContext = function() {
        a._measureContext || (a._measureContext = document.createElement("canvas").getContext("2d"));
        return a._measureContext;
      };
      a.prototype.addRun = function(b, e, f, h, m) {
        if (f) {
          var r = a._getMeasureContext();
          r.font = b;
          r = w(r, f, h);
          this.runs.push(new d(b, e, f, r, h, m));
          this.width += r;
        }
      };
      a.prototype.wrap = function(b) {
        var e = [this], f = this.runs, h = this;
        h.width = 0;
        h.runs = [];
        for (var m = a._getMeasureContext(), r = 0;r < f.length;r++) {
          var u = f[r], v = u.text;
          u.text = "";
          u.width = 0;
          m.font = u.font;
          for (var l = b, n = v.split(/[\s.-]/), q = 0, x = 0;x < n.length;x++) {
            var t = n[x], V = v.substr(q, t.length + 1), W = u.letterSpacing, C = w(m, V, W);
            if (C > l) {
              do {
                if (u.text && (h.runs.push(u), h.width += u.width, u = new d(u.font, u.fillStyle, "", 0, u.letterSpacing, u.underline), l = new a, l.y = h.y + h.descent + h.leading + h.ascent | 0, l.ascent = h.ascent, l.descent = h.descent, l.leading = h.leading, l.align = h.align, e.push(l), h = l), l = b - C, 0 > l) {
                  for (var z = V.length, B = V;1 < z && !(z--, B = V.substr(0, z), C = w(m, B, W), C <= b);) {
                  }
                  u.text = B;
                  u.width = C;
                  V = V.substr(z);
                  C = w(m, V, W);
                }
              } while (V && 0 > l);
            } else {
              l -= C;
            }
            u.text += V;
            u.width += C;
            q += t.length + 1;
          }
          h.runs.push(u);
          h.width += u.width;
        }
        return e;
      };
      a.prototype.toString = function() {
        return "TextLine {x: " + this.x + ", y: " + this.y + ", width: " + this.width + ", height: " + (this.ascent + this.descent + this.leading) + "}";
      };
      return a;
    }();
    q.TextLine = x;
    var d = function() {
      return function(a, b, d, e, f, h) {
        void 0 === a && (a = "");
        void 0 === b && (b = "");
        void 0 === d && (d = "");
        void 0 === e && (e = 0);
        void 0 === f && (f = 0);
        void 0 === h && (h = !1);
        this.font = a;
        this.fillStyle = b;
        this.text = d;
        this.width = e;
        this.letterSpacing = f;
        this.underline = h;
      };
    }();
    q.TextRun = d;
    r = function(a) {
      function b(d) {
        a.call(this);
        this._flags = 4352;
        this.properties = {};
        this._textBounds = d.clone();
        this._textRunData = null;
        this._plainText = "";
        this._borderColor = this._backgroundColor = 0;
        this._matrix = h.createIdentity();
        this._coords = null;
        this._scrollV = 1;
        this._scrollH = 0;
        this.textRect = d.clone();
        this.lines = [];
        this.setBounds(d);
      }
      __extends(b, a);
      b.prototype.setBounds = function(b) {
        a.prototype.setBounds.call(this, b);
        this._textBounds.set(b);
        this.textRect.setElements(b.x + 2, b.y + 2, b.w - 2, b.h - 2);
      };
      b.prototype.setContent = function(a, c, b, d) {
        this._textRunData = c;
        this._plainText = a;
        this._matrix.set(b);
        this._coords = d;
        this.lines = [];
      };
      b.prototype.setStyle = function(a, c, b, d) {
        this._backgroundColor = a;
        this._borderColor = c;
        this._scrollV = b;
        this._scrollH = d;
      };
      b.prototype.reflow = function(a, c) {
        var b = this._textRunData;
        if (b) {
          for (var d = this._bounds, g = d.w - 4, e = this._plainText, h = this.lines, m = new x, u = 0, r = 0, v = 0, l = 0, n = -4294967295, q = -1;b.position < b.length;) {
            var t = b.readInt(), w = b.readInt(), B = b.readInt(), E = b.readUTF(), A = b.readInt(), D = b.readInt(), F = b.readInt();
            A > v && (v = A);
            D > l && (l = D);
            F > n && (n = F);
            A = b.readBoolean();
            D = "";
            b.readBoolean() && (D += "italic ");
            A && (D += "bold ");
            B = D + B + "px " + E + ", AdobeBlank";
            E = b.readInt();
            E = f.ColorUtilities.rgbToHex(E);
            A = b.readInt();
            -1 === q && (q = A);
            b.readBoolean();
            b.readInt();
            b.readInt();
            b.readInt();
            A = b.readInt();
            b.readInt();
            for (var D = b.readBoolean(), G = "", F = !1;!F;t++) {
              var F = t >= w - 1, K = e[t];
              if ("\r" !== K && "\n" !== K && (G += K, t < e.length - 1)) {
                continue;
              }
              m.addRun(B, E, G, A, D);
              if (m.runs.length) {
                h.length && (u += n);
                u += v;
                m.y = u | 0;
                u += l;
                m.ascent = v;
                m.descent = l;
                m.leading = n;
                m.align = q;
                if (c && m.width > g) {
                  for (m = m.wrap(g), G = 0;G < m.length;G++) {
                    var H = m[G], u = H.y + H.descent + H.leading;
                    h.push(H);
                    H.width > r && (r = H.width);
                  }
                } else {
                  h.push(m), m.width > r && (r = m.width);
                }
                m = new x;
              } else {
                u += v + l + n;
              }
              G = "";
              if (F) {
                l = v = 0;
                n = -4294967295;
                q = -1;
                break;
              }
              "\r" === K && "\n" === e[t + 1] && t++;
            }
            m.addRun(B, E, G, A, D);
          }
          b = e[e.length - 1];
          "\r" !== b && "\n" !== b || h.push(m);
          b = this.textRect;
          b.w = r;
          b.h = u;
          if (a) {
            if (!c) {
              g = r;
              r = d.w;
              switch(a) {
                case 1:
                  b.x = r - (g + 4) >> 1;
                  break;
                case 3:
                  b.x = r - (g + 4);
              }
              this._textBounds.setElements(b.x - 2, b.y - 2, b.w + 4, b.h + 4);
              d.w = g + 4;
            }
            d.x = b.x - 2;
            d.h = u + 4;
          } else {
            this._textBounds = d;
          }
          for (t = 0;t < h.length;t++) {
            if (d = h[t], d.width < g) {
              switch(d.align) {
                case 1:
                  d.x = g - d.width | 0;
                  break;
                case 2:
                  d.x = (g - d.width) / 2 | 0;
              }
            }
          }
          this.invalidate();
        }
      };
      b.roundBoundPoints = function(a) {
        for (var b = 0;b < a.length;b++) {
          var c = a[b];
          c.x = Math.floor(c.x + .1) + .5;
          c.y = Math.floor(c.y + .1) + .5;
        }
      };
      b.prototype.render = function(a) {
        a.save();
        var c = this._textBounds;
        this._backgroundColor && (a.fillStyle = f.ColorUtilities.rgbaToCSSStyle(this._backgroundColor), a.fillRect(c.x, c.y, c.w, c.h));
        if (this._borderColor) {
          a.strokeStyle = f.ColorUtilities.rgbaToCSSStyle(this._borderColor);
          a.lineCap = "square";
          a.lineWidth = 1;
          var d = b.absoluteBoundPoints, e = a.currentTransform;
          e ? (c = c.clone(), (new h(e.a, e.b, e.c, e.d, e.e, e.f)).transformRectangle(c, d), a.setTransform(1, 0, 0, 1, 0, 0)) : (d[0].x = c.x, d[0].y = c.y, d[1].x = c.x + c.w, d[1].y = c.y, d[2].x = c.x + c.w, d[2].y = c.y + c.h, d[3].x = c.x, d[3].y = c.y + c.h);
          b.roundBoundPoints(d);
          c = new Path2D;
          c.moveTo(d[0].x, d[0].y);
          c.lineTo(d[1].x, d[1].y);
          c.lineTo(d[2].x, d[2].y);
          c.lineTo(d[3].x, d[3].y);
          c.lineTo(d[0].x, d[0].y);
          a.stroke(c);
          e && a.setTransform(e.a, e.b, e.c, e.d, e.e, e.f);
        }
        this._coords ? this._renderChars(a) : this._renderLines(a);
        a.restore();
      };
      b.prototype._renderChars = function(a) {
        if (this._matrix) {
          var c = this._matrix;
          a.transform(c.a, c.b, c.c, c.d, c.tx, c.ty);
        }
        var c = this.lines, b = this._coords;
        b.position = 0;
        for (var d = "", g = "", e = 0;e < c.length;e++) {
          for (var f = c[e].runs, h = 0;h < f.length;h++) {
            var m = f[h];
            m.font !== d && (a.font = d = m.font);
            m.fillStyle !== g && (a.fillStyle = g = m.fillStyle);
            for (var m = m.text, u = 0;u < m.length;u++) {
              var r = b.readInt() / 20, v = b.readInt() / 20;
              a.fillText(m[u], r, v);
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
        var b = this.lines, d = this._scrollV, g = 0, e = "", f = "";
        a.textAlign = "left";
        a.textBaseline = "alphabetic";
        for (var h = 0;h < b.length;h++) {
          var m = b[h], u = m.x, r = m.y;
          if (h + 1 < d) {
            g = r + m.descent + m.leading;
          } else {
            r -= g;
            if (h + 1 - d && r > c.h) {
              break;
            }
            for (var v = m.runs, l = 0;l < v.length;l++) {
              var n = v[l];
              n.font !== e && (a.font = e = n.font);
              n.fillStyle !== f && (a.fillStyle = f = n.fillStyle);
              n.underline && a.fillRect(u, r + m.descent / 2 | 0, n.width, 1);
              a.textAlign = "left";
              a.textBaseline = "alphabetic";
              if (0 < n.letterSpacing) {
                for (var q = n.text, x = 0;x < q.length;x++) {
                  a.fillText(q[x], u, r), u += w(a, q[x], n.letterSpacing);
                }
              } else {
                a.fillText(n.text, u, r), u += n.width;
              }
            }
          }
        }
      };
      b.absoluteBoundPoints = [new n(0, 0), new n(0, 0), new n(0, 0), new n(0, 0)];
      return b;
    }(e);
    q.RenderableText = r;
    e = function(a) {
      function d(g, e) {
        a.call(this);
        this._flags = 768;
        this.properties = {};
        this.setBounds(new b(0, 0, g, e));
      }
      __extends(d, a);
      Object.defineProperty(d.prototype, "text", {get:function() {
        return this._text;
      }, set:function(a) {
        this._text = a;
      }, enumerable:!0, configurable:!0});
      d.prototype.render = function(a, c, b) {
        a.save();
        a.textBaseline = "top";
        a.fillStyle = "white";
        a.fillText(this.text, 0, 0);
        a.restore();
      };
      return d;
    }(e);
    q.Label = e;
  })(f.GFX || (f.GFX = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(q) {
    function t(a, b, e, f, u) {
      b = n[b - 1];
      u && (u = b / 4, e -= u, f -= u);
      u = Math.ceil((1 > e ? 1 : e) / (b - 1E-9));
      b = Math.ceil((1 > f ? 1 : f) / (b - 1E-9));
      a.x -= u;
      a.w += 2 * u;
      a.y -= b;
      a.h += 2 * b;
    }
    var a = f.ColorUtilities.clampByte, w = function() {
      function a() {
      }
      a.prototype.expandBounds = function(a) {
      };
      return a;
    }();
    q.Filter = w;
    var n = [2, 1 / 1.05, 1 / 1.35, 1 / 1.55, 1 / 1.75, 1 / 1.9, .5, 1 / 2.1, 1 / 2.2, 1 / 2.3, .4, 1 / 3, 1 / 3, 1 / 3.5, 1 / 3.5], b = function(a) {
      function b(e, f, u) {
        a.call(this);
        this.blurX = e;
        this.blurY = f;
        this.quality = u;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        t(a, this.quality, this.blurX, this.blurY, !0);
      };
      return b;
    }(w);
    q.BlurFilter = b;
    b = function(a) {
      function b(e, f, u, m, v, l, d, c, g, k, n) {
        a.call(this);
        this.alpha = e;
        this.angle = f;
        this.blurX = u;
        this.blurY = m;
        this.color = v;
        this.distance = l;
        this.hideObject = d;
        this.inner = c;
        this.knockout = g;
        this.quality = k;
        this.strength = n;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        t(a, this.quality, this.blurX, this.blurY, !1);
        if (this.distance) {
          var b = this.angle * Math.PI / 180, f = Math.cos(b) * this.distance, h = Math.sin(b) * this.distance, b = a.x + (0 <= f ? 0 : Math.floor(f)), f = a.x + a.w + Math.ceil(Math.abs(f)), v = a.y + (0 <= h ? 0 : Math.floor(h)), h = a.y + a.h + Math.ceil(Math.abs(h));
          a.x = b;
          a.w = f - b;
          a.y = v;
          a.h = h - v;
        }
      };
      return b;
    }(w);
    q.DropshadowFilter = b;
    b = function(a) {
      function b(e, f, u, m, v, l, d, c) {
        a.call(this);
        this.alpha = e;
        this.blurX = f;
        this.blurY = u;
        this.color = m;
        this.inner = v;
        this.knockout = l;
        this.quality = d;
        this.strength = c;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        this.inner || t(a, this.quality, this.blurX, this.blurY, !1);
      };
      return b;
    }(w);
    q.GlowFilter = b;
    (function(a) {
      a[a.Unknown = 0] = "Unknown";
      a[a.Identity = 1] = "Identity";
    })(q.ColorMatrixType || (q.ColorMatrixType = {}));
    w = function(b) {
      function f(a) {
        b.call(this);
        this._data = new Float32Array(a);
        this._type = 0;
      }
      __extends(f, b);
      f.prototype.clone = function() {
        var a = new f(this._data);
        a._type = this._type;
        return a;
      };
      f.prototype.set = function(a) {
        this._data.set(a._data);
        this._type = a._type;
      };
      f.prototype.toWebGLMatrix = function() {
        return new Float32Array(this._data);
      };
      f.prototype.asWebGLMatrix = function() {
        return this._data.subarray(0, 16);
      };
      f.prototype.asWebGLVector = function() {
        return this._data.subarray(16, 20);
      };
      f.prototype.isIdentity = function() {
        if (this._type & 1) {
          return !0;
        }
        var a = this._data;
        return 1 == a[0] && 0 == a[1] && 0 == a[2] && 0 == a[3] && 0 == a[4] && 1 == a[5] && 0 == a[6] && 0 == a[7] && 0 == a[8] && 0 == a[9] && 1 == a[10] && 0 == a[11] && 0 == a[12] && 0 == a[13] && 0 == a[14] && 1 == a[15] && 0 == a[16] && 0 == a[17] && 0 == a[18] && 0 == a[19];
      };
      f.createIdentity = function() {
        var a = new f([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0]);
        a._type = 1;
        return a;
      };
      f.prototype.setMultipliersAndOffsets = function(a, b, f, h, v, l, d, c) {
        for (var g = this._data, k = 0;k < g.length;k++) {
          g[k] = 0;
        }
        g[0] = a;
        g[5] = b;
        g[10] = f;
        g[15] = h;
        g[16] = v / 255;
        g[17] = l / 255;
        g[18] = d / 255;
        g[19] = c / 255;
        this._type = 0;
      };
      f.prototype.transformRGBA = function(b) {
        var f = b >> 24 & 255, h = b >> 16 & 255, m = b >> 8 & 255, v = b & 255, l = this._data;
        b = a(f * l[0] + h * l[1] + m * l[2] + v * l[3] + 255 * l[16]);
        var d = a(f * l[4] + h * l[5] + m * l[6] + v * l[7] + 255 * l[17]), c = a(f * l[8] + h * l[9] + m * l[10] + v * l[11] + 255 * l[18]), f = a(f * l[12] + h * l[13] + m * l[14] + v * l[15] + 255 * l[19]);
        return b << 24 | d << 16 | c << 8 | f;
      };
      f.prototype.multiply = function(a) {
        if (!(a._type & 1)) {
          var b = this._data, f = a._data;
          a = b[0];
          var h = b[1], v = b[2], l = b[3], d = b[4], c = b[5], g = b[6], k = b[7], n = b[8], p = b[9], q = b[10], t = b[11], w = b[12], J = b[13], U = b[14], X = b[15], ha = b[16], ia = b[17], ja = b[18], V = b[19], W = f[0], C = f[1], z = f[2], B = f[3], E = f[4], A = f[5], D = f[6], F = f[7], G = f[8], K = f[9], H = f[10], M = f[11], N = f[12], O = f[13], P = f[14], Q = f[15], R = f[16], S = f[17], T = f[18], f = f[19];
          b[0] = a * W + d * C + n * z + w * B;
          b[1] = h * W + c * C + p * z + J * B;
          b[2] = v * W + g * C + q * z + U * B;
          b[3] = l * W + k * C + t * z + X * B;
          b[4] = a * E + d * A + n * D + w * F;
          b[5] = h * E + c * A + p * D + J * F;
          b[6] = v * E + g * A + q * D + U * F;
          b[7] = l * E + k * A + t * D + X * F;
          b[8] = a * G + d * K + n * H + w * M;
          b[9] = h * G + c * K + p * H + J * M;
          b[10] = v * G + g * K + q * H + U * M;
          b[11] = l * G + k * K + t * H + X * M;
          b[12] = a * N + d * O + n * P + w * Q;
          b[13] = h * N + c * O + p * P + J * Q;
          b[14] = v * N + g * O + q * P + U * Q;
          b[15] = l * N + k * O + t * P + X * Q;
          b[16] = a * R + d * S + n * T + w * f + ha;
          b[17] = h * R + c * S + p * T + J * f + ia;
          b[18] = v * R + g * S + q * T + U * f + ja;
          b[19] = l * R + k * S + t * T + X * f + V;
          this._type = 0;
        }
      };
      Object.defineProperty(f.prototype, "alphaMultiplier", {get:function() {
        return this._data[15];
      }, enumerable:!0, configurable:!0});
      f.prototype.hasOnlyAlphaMultiplier = function() {
        var a = this._data;
        return 1 == a[0] && 0 == a[1] && 0 == a[2] && 0 == a[3] && 0 == a[4] && 1 == a[5] && 0 == a[6] && 0 == a[7] && 0 == a[8] && 0 == a[9] && 1 == a[10] && 0 == a[11] && 0 == a[12] && 0 == a[13] && 0 == a[14] && 0 == a[16] && 0 == a[17] && 0 == a[18] && 0 == a[19];
      };
      f.prototype.equals = function(a) {
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
      f.prototype.toSVGFilterMatrix = function() {
        var a = this._data;
        return [a[0], a[4], a[8], a[12], a[16], a[1], a[5], a[9], a[13], a[17], a[2], a[6], a[10], a[14], a[18], a[3], a[7], a[11], a[15], a[19]].join(" ");
      };
      return f;
    }(w);
    q.ColorMatrix = w;
  })(f.GFX || (f.GFX = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(q) {
    (function(t) {
      function a(a, b) {
        return -1 !== a.indexOf(b, this.length - b.length);
      }
      var w = q.Geometry.Point3D, n = q.Geometry.Matrix3D, b = q.Geometry.degreesToRadian, h = f.Debug.unexpected, l = f.Debug.notImplemented;
      t.SHADER_ROOT = "shaders/";
      var e = function() {
        function e(a, b) {
          this._fillColor = f.Color.Red;
          this._surfaceRegionCache = new f.LRUList;
          this.modelViewProjectionMatrix = n.createIdentity();
          this._canvas = a;
          this._options = b;
          this.gl = a.getContext("experimental-webgl", {preserveDrawingBuffer:!1, antialias:!0, stencil:!0, premultipliedAlpha:!1});
          this._programCache = Object.create(null);
          this._resize();
          this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, b.unpackPremultiplyAlpha ? this.gl.ONE : this.gl.ZERO);
          this._backgroundColor = f.Color.Black;
          this._geometry = new t.WebGLGeometry(this);
          this._tmpVertices = t.Vertex.createEmptyVertices(t.Vertex, 64);
          this._maxSurfaces = b.maxSurfaces;
          this._maxSurfaceSize = b.maxSurfaceSize;
          this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
          this.gl.enable(this.gl.BLEND);
          this.modelViewProjectionMatrix = n.create2DProjection(this._w, this._h, 2E3);
          var h = this;
          this._surfaceRegionAllocator = new q.SurfaceRegionAllocator.SimpleAllocator(function() {
            var a = h._createTexture(1024, 1024);
            return new t.WebGLSurface(1024, 1024, a);
          });
        }
        Object.defineProperty(e.prototype, "surfaces", {get:function() {
          return this._surfaceRegionAllocator.surfaces;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(e.prototype, "fillStyle", {set:function(a) {
          this._fillColor.set(f.Color.parseColor(a));
        }, enumerable:!0, configurable:!0});
        e.prototype.setBlendMode = function(a) {
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
              l("Blend Mode: " + a);
          }
        };
        e.prototype.setBlendOptions = function() {
          this.gl.blendFunc(this._options.sourceBlendFactor, this._options.destinationBlendFactor);
        };
        e.glSupportedBlendMode = function(a) {
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
        e.prototype.create2DProjectionMatrix = function() {
          return n.create2DProjection(this._w, this._h, -this._w);
        };
        e.prototype.createPerspectiveMatrix = function(a, e, f) {
          f = b(f);
          e = n.createPerspective(b(e), 1, .1, 5E3);
          var h = new w(0, 1, 0), d = new w(0, 0, 0);
          a = new w(0, 0, a);
          a = n.createCameraLookAt(a, d, h);
          a = n.createInverse(a);
          h = n.createIdentity();
          h = n.createMultiply(h, n.createTranslation(-this._w / 2, -this._h / 2, 0));
          h = n.createMultiply(h, n.createScale(1 / this._w, -1 / this._h, .01));
          h = n.createMultiply(h, n.createYRotation(f));
          h = n.createMultiply(h, a);
          return h = n.createMultiply(h, e);
        };
        e.prototype.discardCachedImages = function() {
          2 <= q.traceLevel && q.writer && q.writer.writeLn("Discard Cache");
          for (var a = this._surfaceRegionCache.count / 2 | 0, b = 0;b < a;b++) {
            var e = this._surfaceRegionCache.pop();
            2 <= q.traceLevel && q.writer && q.writer.writeLn("Discard: " + e);
            e.texture.atlas.remove(e.region);
            e.texture = null;
          }
        };
        e.prototype.cacheImage = function(a) {
          var b = this.allocateSurfaceRegion(a.width, a.height);
          2 <= q.traceLevel && q.writer && q.writer.writeLn("Uploading Image: @ " + b.region);
          this._surfaceRegionCache.use(b);
          this.updateSurfaceRegion(a, b);
          return b;
        };
        e.prototype.allocateSurfaceRegion = function(a, b, e) {
          return this._surfaceRegionAllocator.allocate(a, b, null);
        };
        e.prototype.updateSurfaceRegion = function(a, b) {
          var e = this.gl;
          e.bindTexture(e.TEXTURE_2D, b.surface.texture);
          e.texSubImage2D(e.TEXTURE_2D, 0, b.region.x, b.region.y, e.RGBA, e.UNSIGNED_BYTE, a);
        };
        e.prototype._resize = function() {
          var a = this.gl;
          this._w = this._canvas.width;
          this._h = this._canvas.height;
          a.viewport(0, 0, this._w, this._h);
          for (var b in this._programCache) {
            this._initializeProgram(this._programCache[b]);
          }
        };
        e.prototype._initializeProgram = function(a) {
          this.gl.useProgram(a);
        };
        e.prototype._createShaderFromFile = function(b) {
          var e = t.SHADER_ROOT + b, f = this.gl;
          b = new XMLHttpRequest;
          b.open("GET", e, !1);
          b.send();
          if (a(e, ".vert")) {
            e = f.VERTEX_SHADER;
          } else {
            if (a(e, ".frag")) {
              e = f.FRAGMENT_SHADER;
            } else {
              throw "Shader Type: not supported.";
            }
          }
          return this._createShader(e, b.responseText);
        };
        e.prototype.createProgramFromFiles = function(a, b) {
          var e = a + "-" + b, f = this._programCache[e];
          f || (f = this._createProgram([this._createShaderFromFile(a), this._createShaderFromFile(b)]), this._queryProgramAttributesAndUniforms(f), this._initializeProgram(f), this._programCache[e] = f);
          return f;
        };
        e.prototype._createProgram = function(a) {
          var b = this.gl, e = b.createProgram();
          a.forEach(function(a) {
            b.attachShader(e, a);
          });
          b.linkProgram(e);
          b.getProgramParameter(e, b.LINK_STATUS) || (a = b.getProgramInfoLog(e), h("Cannot link program: " + a), b.deleteProgram(e));
          return e;
        };
        e.prototype._createShader = function(a, b) {
          var e = this.gl, f = e.createShader(a);
          e.shaderSource(f, b);
          e.compileShader(f);
          if (!e.getShaderParameter(f, e.COMPILE_STATUS)) {
            var d = e.getShaderInfoLog(f);
            h("Cannot compile shader: " + d);
            e.deleteShader(f);
            return null;
          }
          return f;
        };
        e.prototype._createTexture = function(a, b) {
          var e = this.gl, f = e.createTexture();
          e.bindTexture(e.TEXTURE_2D, f);
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE);
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR);
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR);
          e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, a, b, 0, e.RGBA, e.UNSIGNED_BYTE, null);
          return f;
        };
        e.prototype._createFramebuffer = function(a) {
          var b = this.gl, e = b.createFramebuffer();
          b.bindFramebuffer(b.FRAMEBUFFER, e);
          b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, a, 0);
          b.bindFramebuffer(b.FRAMEBUFFER, null);
          return e;
        };
        e.prototype._queryProgramAttributesAndUniforms = function(a) {
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
        Object.defineProperty(e.prototype, "target", {set:function(a) {
          var b = this.gl;
          a ? (b.viewport(0, 0, a.w, a.h), b.bindFramebuffer(b.FRAMEBUFFER, a.framebuffer)) : (b.viewport(0, 0, this._w, this._h), b.bindFramebuffer(b.FRAMEBUFFER, null));
        }, enumerable:!0, configurable:!0});
        e.prototype.clear = function(a) {
          a = this.gl;
          a.clearColor(0, 0, 0, 0);
          a.clear(a.COLOR_BUFFER_BIT);
        };
        e.prototype.clearTextureRegion = function(a, b) {
          void 0 === b && (b = f.Color.None);
          var e = this.gl, h = a.region;
          this.target = a.surface;
          e.enable(e.SCISSOR_TEST);
          e.scissor(h.x, h.y, h.w, h.h);
          e.clearColor(b.r, b.g, b.b, b.a);
          e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT);
          e.disable(e.SCISSOR_TEST);
        };
        e.prototype.sizeOf = function(a) {
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
              l(a);
          }
        };
        e.MAX_SURFACES = 8;
        return e;
      }();
      t.WebGLContext = e;
    })(q.WebGL || (q.WebGL = {}));
  })(f.GFX || (f.GFX = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(f, q) {
  function t() {
    this.constructor = f;
  }
  for (var a in q) {
    q.hasOwnProperty(a) && (f[a] = q[a]);
  }
  t.prototype = q.prototype;
  f.prototype = new t;
};
(function(f) {
  (function(q) {
    (function(t) {
      var a = f.Debug.assert, w = function(b) {
        function f() {
          b.apply(this, arguments);
        }
        __extends(f, b);
        f.prototype.ensureVertexCapacity = function(b) {
          a(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 8 * b);
        };
        f.prototype.writeVertex = function(b, e) {
          a(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 8);
          this.writeVertexUnsafe(b, e);
        };
        f.prototype.writeVertexUnsafe = function(a, b) {
          var f = this._offset >> 2;
          this._f32[f] = a;
          this._f32[f + 1] = b;
          this._offset += 8;
        };
        f.prototype.writeVertex3D = function(b, e, f) {
          a(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 12);
          this.writeVertex3DUnsafe(b, e, f);
        };
        f.prototype.writeVertex3DUnsafe = function(a, b, f) {
          var h = this._offset >> 2;
          this._f32[h] = a;
          this._f32[h + 1] = b;
          this._f32[h + 2] = f;
          this._offset += 12;
        };
        f.prototype.writeTriangleElements = function(b, e, f) {
          a(0 === (this._offset & 1));
          this.ensureCapacity(this._offset + 6);
          var h = this._offset >> 1;
          this._u16[h] = b;
          this._u16[h + 1] = e;
          this._u16[h + 2] = f;
          this._offset += 6;
        };
        f.prototype.ensureColorCapacity = function(b) {
          a(0 === (this._offset & 2));
          this.ensureCapacity(this._offset + 16 * b);
        };
        f.prototype.writeColorFloats = function(b, e, f, h) {
          a(0 === (this._offset & 2));
          this.ensureCapacity(this._offset + 16);
          this.writeColorFloatsUnsafe(b, e, f, h);
        };
        f.prototype.writeColorFloatsUnsafe = function(a, b, f, h) {
          var m = this._offset >> 2;
          this._f32[m] = a;
          this._f32[m + 1] = b;
          this._f32[m + 2] = f;
          this._f32[m + 3] = h;
          this._offset += 16;
        };
        f.prototype.writeColor = function(b, e, f, h) {
          a(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 4);
          this._i32[this._offset >> 2] = h << 24 | f << 16 | e << 8 | b;
          this._offset += 4;
        };
        f.prototype.writeColorUnsafe = function(a, b, f, h) {
          this._i32[this._offset >> 2] = h << 24 | f << 16 | b << 8 | a;
          this._offset += 4;
        };
        f.prototype.writeRandomColor = function() {
          this.writeColor(Math.random(), Math.random(), Math.random(), Math.random() / 2);
        };
        return f;
      }(f.ArrayUtilities.ArrayWriter);
      t.BufferWriter = w;
      var n = function() {
        return function(a, f, l, e) {
          void 0 === e && (e = !1);
          this.name = a;
          this.size = f;
          this.type = l;
          this.normalized = e;
        };
      }();
      t.WebGLAttribute = n;
      n = function() {
        function a(b) {
          this.size = 0;
          this.attributes = b;
        }
        a.prototype.initialize = function(a) {
          for (var b = 0, e = 0;e < this.attributes.length;e++) {
            this.attributes[e].offset = b, b += a.sizeOf(this.attributes[e].type) * this.attributes[e].size;
          }
          this.size = b;
        };
        return a;
      }();
      t.WebGLAttributeList = n;
      n = function() {
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
      t.WebGLGeometry = n;
      n = function(a) {
        function f(h, e, r) {
          a.call(this, h, e, r);
        }
        __extends(f, a);
        f.createEmptyVertices = function(a, b) {
          for (var f = [], h = 0;h < b;h++) {
            f.push(new a(0, 0, 0));
          }
          return f;
        };
        return f;
      }(q.Geometry.Point3D);
      t.Vertex = n;
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
      })(t.WebGLBlendFactor || (t.WebGLBlendFactor = {}));
    })(q.WebGL || (q.WebGL = {}));
  })(f.GFX || (f.GFX = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(f) {
    (function(t) {
      var a = function() {
        function a(b, h, l) {
          this.texture = l;
          this.w = b;
          this.h = h;
          this._regionAllocator = new f.RegionAllocator.CompactAllocator(this.w, this.h);
        }
        a.prototype.allocate = function(a, f) {
          var l = this._regionAllocator.allocate(a, f);
          return l ? new w(this, l) : null;
        };
        a.prototype.free = function(a) {
          this._regionAllocator.free(a.region);
        };
        return a;
      }();
      t.WebGLSurface = a;
      var w = function() {
        return function(a, b) {
          this.surface = a;
          this.region = b;
          this.next = this.previous = null;
        };
      }();
      t.WebGLSurfaceRegion = w;
    })(f.WebGL || (f.WebGL = {}));
  })(f.GFX || (f.GFX = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(q) {
    (function(t) {
      var a = f.Color;
      t.TILE_SIZE = 256;
      t.MIN_UNTILED_SIZE = 256;
      var w = q.Geometry.Matrix, n = q.Geometry.Rectangle, b = function(a) {
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
      t.WebGLRendererOptions = b;
      var h = function(f) {
        function e(a, e, h) {
          void 0 === h && (h = new b);
          f.call(this, a, e, h);
          this._tmpVertices = t.Vertex.createEmptyVertices(t.Vertex, 64);
          this._cachedTiles = [];
          a = this._context = new t.WebGLContext(this._canvas, h);
          this._updateSize();
          this._brush = new t.WebGLCombinedBrush(a, new t.WebGLGeometry(a));
          this._stencilBrush = new t.WebGLCombinedBrush(a, new t.WebGLGeometry(a));
          this._scratchCanvas = document.createElement("canvas");
          this._scratchCanvas.width = this._scratchCanvas.height = 2048;
          this._scratchCanvasContext = this._scratchCanvas.getContext("2d", {willReadFrequently:!0});
          this._dynamicScratchCanvas = document.createElement("canvas");
          this._dynamicScratchCanvas.width = this._dynamicScratchCanvas.height = 0;
          this._dynamicScratchCanvasContext = this._dynamicScratchCanvas.getContext("2d", {willReadFrequently:!0});
          this._uploadCanvas = document.createElement("canvas");
          this._uploadCanvas.width = this._uploadCanvas.height = 0;
          this._uploadCanvasContext = this._uploadCanvas.getContext("2d", {willReadFrequently:!0});
          h.showTemporaryCanvases && (document.getElementById("temporaryCanvasPanelContainer").appendChild(this._uploadCanvas), document.getElementById("temporaryCanvasPanelContainer").appendChild(this._scratchCanvas));
          this._clipStack = [];
        }
        __extends(e, f);
        e.prototype.resize = function() {
          this._updateSize();
          this.render();
        };
        e.prototype._updateSize = function() {
          this._viewport = new n(0, 0, this._canvas.width, this._canvas.height);
          this._context._resize();
        };
        e.prototype._cacheImageCallback = function(a, b, e) {
          var f = e.w, h = e.h, d = e.x;
          e = e.y;
          this._uploadCanvas.width = f + 2;
          this._uploadCanvas.height = h + 2;
          this._uploadCanvasContext.drawImage(b.canvas, d, e, f, h, 1, 1, f, h);
          this._uploadCanvasContext.drawImage(b.canvas, d, e, f, 1, 1, 0, f, 1);
          this._uploadCanvasContext.drawImage(b.canvas, d, e + h - 1, f, 1, 1, h + 1, f, 1);
          this._uploadCanvasContext.drawImage(b.canvas, d, e, 1, h, 0, 1, 1, h);
          this._uploadCanvasContext.drawImage(b.canvas, d + f - 1, e, 1, h, f + 1, 1, 1, h);
          return a && a.surface ? (this._options.disableSurfaceUploads || this._context.updateSurfaceRegion(this._uploadCanvas, a), a) : this._context.cacheImage(this._uploadCanvas);
        };
        e.prototype._enterClip = function(a, b, e, f) {
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
        e.prototype._leaveClip = function(a, b, e, f) {
          e.flush();
          b = this._context.gl;
          if (a = this._clipStack.pop()) {
            b.colorMask(!1, !1, !1, !1), b.stencilOp(b.KEEP, b.KEEP, b.DECR), e.flush(), b.colorMask(!0, !0, !0, !0), b.stencilFunc(b.NOTEQUAL, 0, this._clipStack.length), b.stencilOp(b.KEEP, b.KEEP, b.KEEP);
          }
          0 === this._clipStack.length && b.disable(b.STENCIL_TEST);
        };
        e.prototype._renderFrame = function(a, b, e, f, h) {
        };
        e.prototype._renderSurfaces = function(b) {
          var e = this._options, f = this._context, h = this._viewport;
          if (e.drawSurfaces) {
            var l = f.surfaces, f = w.createIdentity();
            if (0 <= e.drawSurface && e.drawSurface < l.length) {
              for (var e = l[e.drawSurface | 0], l = new n(0, 0, e.w, e.h), d = l.clone();d.w > h.w;) {
                d.scale(.5, .5);
              }
              b.drawImage(new t.WebGLSurfaceRegion(e, l), d, a.White, null, f, .2);
            } else {
              d = h.w / 5;
              d > h.h / l.length && (d = h.h / l.length);
              b.fillRectangle(new n(h.w - d, 0, d, h.h), new a(0, 0, 0, .5), f, .1);
              for (var c = 0;c < l.length;c++) {
                var e = l[c], g = new n(h.w - d, c * d, d, d);
                b.drawImage(new t.WebGLSurfaceRegion(e, new n(0, 0, e.w, e.h)), g, a.White, null, f, .2);
              }
            }
            b.flush();
          }
        };
        e.prototype.render = function() {
          var b = this._options, e = this._context.gl;
          this._context.modelViewProjectionMatrix = b.perspectiveCamera ? this._context.createPerspectiveMatrix(b.perspectiveCameraDistance + (b.animateZoom ? .8 * Math.sin(Date.now() / 3E3) : 0), b.perspectiveCameraFOV, b.perspectiveCameraAngle) : this._context.create2DProjectionMatrix();
          var f = this._brush;
          e.clearColor(0, 0, 0, 0);
          e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT);
          f.reset();
          e = this._viewport;
          f.flush();
          b.paintViewport && (f.fillRectangle(e, new a(.5, 0, 0, .25), w.createIdentity(), 0), f.flush());
          this._renderSurfaces(f);
        };
        return e;
      }(q.Renderer);
      t.WebGLRenderer = h;
    })(q.WebGL || (q.WebGL = {}));
  })(f.GFX || (f.GFX = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(q) {
    (function(t) {
      var a = f.Color, w = q.Geometry.Point, n = q.Geometry.Matrix3D, b = function() {
        function a(b, f, h) {
          this._target = h;
          this._context = b;
          this._geometry = f;
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
      t.WebGLBrush = b;
      (function(a) {
        a[a.FillColor = 0] = "FillColor";
        a[a.FillTexture = 1] = "FillTexture";
        a[a.FillTextureWithColorMatrix = 2] = "FillTextureWithColorMatrix";
      })(t.WebGLCombinedBrushKind || (t.WebGLCombinedBrushKind = {}));
      var h = function(b) {
        function e(e, f, h) {
          b.call(this, e, f, h);
          this.kind = 0;
          this.color = new a(0, 0, 0, 0);
          this.sampler = 0;
          this.coordinate = new w(0, 0);
        }
        __extends(e, b);
        e.initializeAttributeList = function(a) {
          var b = a.gl;
          e.attributeList || (e.attributeList = new t.WebGLAttributeList([new t.WebGLAttribute("aPosition", 3, b.FLOAT), new t.WebGLAttribute("aCoordinate", 2, b.FLOAT), new t.WebGLAttribute("aColor", 4, b.UNSIGNED_BYTE, !0), new t.WebGLAttribute("aKind", 1, b.FLOAT), new t.WebGLAttribute("aSampler", 1, b.FLOAT)]), e.attributeList.initialize(a));
        };
        e.prototype.writeTo = function(a) {
          a = a.array;
          a.ensureAdditionalCapacity(68);
          a.writeVertex3DUnsafe(this.x, this.y, this.z);
          a.writeVertexUnsafe(this.coordinate.x, this.coordinate.y);
          a.writeColorUnsafe(255 * this.color.r, 255 * this.color.g, 255 * this.color.b, 255 * this.color.a);
          a.writeFloatUnsafe(this.kind);
          a.writeFloatUnsafe(this.sampler);
        };
        return e;
      }(t.Vertex);
      t.WebGLCombinedBrushVertex = h;
      b = function(a) {
        function b(e, f, m) {
          void 0 === m && (m = null);
          a.call(this, e, f, m);
          this._blendMode = 1;
          this._program = e.createProgramFromFiles("combined.vert", "combined.frag");
          this._surfaces = [];
          h.initializeAttributeList(this._context);
        }
        __extends(b, a);
        b.prototype.reset = function() {
          this._surfaces = [];
          this._geometry.reset();
        };
        b.prototype.drawImage = function(a, f, h, l, n, d, c) {
          void 0 === d && (d = 0);
          void 0 === c && (c = 1);
          if (!a || !a.surface) {
            return !0;
          }
          f = f.clone();
          this._colorMatrix && (l && this._colorMatrix.equals(l) || this.flush());
          this._colorMatrix = l;
          this._blendMode !== c && (this.flush(), this._blendMode = c);
          c = this._surfaces.indexOf(a.surface);
          0 > c && (8 === this._surfaces.length && this.flush(), this._surfaces.push(a.surface), c = this._surfaces.length - 1);
          var g = b._tmpVertices, k = a.region.clone();
          k.offset(1, 1).resize(-2, -2);
          k.scale(1 / a.surface.w, 1 / a.surface.h);
          n.transformRectangle(f, g);
          for (a = 0;4 > a;a++) {
            g[a].z = d;
          }
          g[0].coordinate.x = k.x;
          g[0].coordinate.y = k.y;
          g[1].coordinate.x = k.x + k.w;
          g[1].coordinate.y = k.y;
          g[2].coordinate.x = k.x + k.w;
          g[2].coordinate.y = k.y + k.h;
          g[3].coordinate.x = k.x;
          g[3].coordinate.y = k.y + k.h;
          for (a = 0;4 > a;a++) {
            d = b._tmpVertices[a], d.kind = l ? 2 : 1, d.color.set(h), d.sampler = c, d.writeTo(this._geometry);
          }
          this._geometry.addQuad();
          return !0;
        };
        b.prototype.fillRectangle = function(a, f, h, l) {
          void 0 === l && (l = 0);
          h.transformRectangle(a, b._tmpVertices);
          for (a = 0;4 > a;a++) {
            h = b._tmpVertices[a], h.kind = 0, h.color.set(f), h.z = l, h.writeTo(this._geometry);
          }
          this._geometry.addQuad();
        };
        b.prototype.flush = function() {
          var a = this._geometry, b = this._program, e = this._context.gl, f;
          a.uploadBuffers();
          e.useProgram(b);
          this._target ? (f = n.create2DProjection(this._target.w, this._target.h, 2E3), f = n.createMultiply(f, n.createScale(1, -1, 1))) : f = this._context.modelViewProjectionMatrix;
          e.uniformMatrix4fv(b.uniforms.uTransformMatrix3D.location, !1, f.asWebGLMatrix());
          this._colorMatrix && (e.uniformMatrix4fv(b.uniforms.uColorMatrix.location, !1, this._colorMatrix.asWebGLMatrix()), e.uniform4fv(b.uniforms.uColorVector.location, this._colorMatrix.asWebGLVector()));
          for (f = 0;f < this._surfaces.length;f++) {
            e.activeTexture(e.TEXTURE0 + f), e.bindTexture(e.TEXTURE_2D, this._surfaces[f].texture);
          }
          e.uniform1iv(b.uniforms["uSampler[0]"].location, [0, 1, 2, 3, 4, 5, 6, 7]);
          e.bindBuffer(e.ARRAY_BUFFER, a.buffer);
          var l = h.attributeList.size, d = h.attributeList.attributes;
          for (f = 0;f < d.length;f++) {
            var c = d[f], g = b.attributes[c.name].location;
            e.enableVertexAttribArray(g);
            e.vertexAttribPointer(g, c.size, c.type, c.normalized, l, c.offset);
          }
          this._context.setBlendOptions();
          this._context.target = this._target;
          e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, a.elementBuffer);
          e.drawElements(e.TRIANGLES, 3 * a.triangleCount, e.UNSIGNED_SHORT, 0);
          this.reset();
        };
        b._tmpVertices = t.Vertex.createEmptyVertices(h, 4);
        b._depth = 1;
        return b;
      }(b);
      t.WebGLCombinedBrush = b;
    })(q.WebGL || (q.WebGL = {}));
  })(f.GFX || (f.GFX = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(f) {
    (function(f) {
      var a = CanvasRenderingContext2D.prototype.save, q = CanvasRenderingContext2D.prototype.clip, n = CanvasRenderingContext2D.prototype.fill, b = CanvasRenderingContext2D.prototype.stroke, h = CanvasRenderingContext2D.prototype.restore, l = CanvasRenderingContext2D.prototype.beginPath;
      f.notifyReleaseChanged = function() {
        CanvasRenderingContext2D.prototype.save = a;
        CanvasRenderingContext2D.prototype.clip = q;
        CanvasRenderingContext2D.prototype.fill = n;
        CanvasRenderingContext2D.prototype.stroke = b;
        CanvasRenderingContext2D.prototype.restore = h;
        CanvasRenderingContext2D.prototype.beginPath = l;
      };
      CanvasRenderingContext2D.prototype.enterBuildingClippingRegion = function() {
        this.buildingClippingRegionDepth || (this.buildingClippingRegionDepth = 0);
        this.buildingClippingRegionDepth++;
      };
      CanvasRenderingContext2D.prototype.leaveBuildingClippingRegion = function() {
        this.buildingClippingRegionDepth--;
      };
    })(f.Canvas2D || (f.Canvas2D = {}));
  })(f.GFX || (f.GFX = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(q) {
    (function(t) {
      function a(a, b) {
        var f = a / 2;
        switch(b) {
          case 0:
            return 0;
          case 1:
            return f / 2.7;
          case 2:
            return f / 1.28;
          default:
            return f;
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
            f.Debug.somewhatImplemented("Blend Mode: " + q.BlendMode[a]);
        }
        return b;
      }
      var n = f.NumberUtilities.clamp;
      navigator.userAgent.indexOf("Firefox");
      var b = function() {
        function b() {
        }
        b._prepareSVGFilters = function() {
          if (!b._svgBlurFilter) {
            var a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            a.setAttribute("style", "display:block;width:0px;height:0px");
            var f = document.createElementNS("http://www.w3.org/2000/svg", "defs"), h = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            h.setAttribute("id", "svgBlurFilter");
            var l = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
            l.setAttribute("stdDeviation", "0 0");
            h.appendChild(l);
            f.appendChild(h);
            b._svgBlurFilter = l;
            h = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            h.setAttribute("id", "svgDropShadowFilter");
            l = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
            l.setAttribute("in", "SourceAlpha");
            l.setAttribute("stdDeviation", "3");
            h.appendChild(l);
            b._svgDropshadowFilterBlur = l;
            l = document.createElementNS("http://www.w3.org/2000/svg", "feOffset");
            l.setAttribute("dx", "0");
            l.setAttribute("dy", "0");
            l.setAttribute("result", "offsetblur");
            h.appendChild(l);
            b._svgDropshadowFilterOffset = l;
            l = document.createElementNS("http://www.w3.org/2000/svg", "feFlood");
            l.setAttribute("flood-color", "rgba(0,0,0,1)");
            h.appendChild(l);
            b._svgDropshadowFilterFlood = l;
            l = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
            l.setAttribute("in2", "offsetblur");
            l.setAttribute("operator", "in");
            h.appendChild(l);
            l = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
            l.setAttribute("in2", "SourceAlpha");
            l.setAttribute("operator", "out");
            l.setAttribute("result", "outer");
            h.appendChild(l);
            var l = document.createElementNS("http://www.w3.org/2000/svg", "feMerge"), n = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
            l.appendChild(n);
            n = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
            l.appendChild(n);
            b._svgDropshadowMergeNode = n;
            h.appendChild(l);
            f.appendChild(h);
            h = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            h.setAttribute("id", "svgColorMatrixFilter");
            n = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
            n.setAttribute("color-interpolation-filters", "sRGB");
            n.setAttribute("in", "SourceGraphic");
            n.setAttribute("type", "matrix");
            h.appendChild(n);
            l = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
            l.setAttribute("in2", "SourceAlpha");
            l.setAttribute("operator", "in");
            h.appendChild(l);
            f.appendChild(h);
            b._svgColorMatrixFilter = n;
            a.appendChild(f);
            document.documentElement.appendChild(a);
          }
        };
        b._applyFilter = function(h, l, m) {
          if (b._svgFiltersAreSupported) {
            if (b._prepareSVGFilters(), b._removeFilter(l), m instanceof q.BlurFilter) {
              var n = a(h, m.quality);
              b._svgBlurFilter.setAttribute("stdDeviation", m.blurX * n + " " + m.blurY * n);
              l.filter = "url(#svgBlurFilter)";
            } else {
              m instanceof q.DropshadowFilter ? (n = a(h, m.quality), b._svgDropshadowFilterBlur.setAttribute("stdDeviation", m.blurX * n + " " + m.blurY * n), b._svgDropshadowFilterOffset.setAttribute("dx", String(Math.cos(m.angle * Math.PI / 180) * m.distance * h)), b._svgDropshadowFilterOffset.setAttribute("dy", String(Math.sin(m.angle * Math.PI / 180) * m.distance * h)), b._svgDropshadowFilterFlood.setAttribute("flood-color", f.ColorUtilities.rgbaToCSSStyle(m.color << 8 | Math.round(255 * m.alpha))), 
              b._svgDropshadowMergeNode.setAttribute("in", m.knockout ? "outer" : "SourceGraphic"), l.filter = "url(#svgDropShadowFilter)") : m instanceof q.ColorMatrix && (b._svgColorMatrixFilter.setAttribute("values", m.toSVGFilterMatrix()), l.filter = "url(#svgColorMatrixFilter)");
            }
          }
        };
        b._removeFilter = function(a) {
          a.filter = "none";
        };
        b._applyColorMatrix = function(a, f) {
          f.isIdentity() ? (a.globalAlpha = 1, a.globalColorMatrix = null) : f.hasOnlyAlphaMultiplier() ? (a.globalAlpha = n(f.alphaMultiplier, 0, 1), a.globalColorMatrix = null) : (a.globalAlpha = 1, b._svgFiltersAreSupported ? (b._applyFilter(1, a, f), a.globalColorMatrix = null) : a.globalColorMatrix = f);
        };
        b._svgFiltersAreSupported = !!Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype, "filter");
        return b;
      }();
      t.Filters = b;
      q.filters && b._svgFiltersAreSupported && ("registerScratchCanvas" in window || (window.registerScratchCanvas = function(a) {
        a.style.display = "none";
        document.body.appendChild(a);
      }));
      var h = function() {
        function a(b, e, f, h) {
          this.surface = b;
          this.region = e;
          this.w = f;
          this.h = h;
        }
        a.prototype.free = function() {
          this.surface.free(this);
        };
        a._ensureCopyCanvasSize = function(b, h) {
          var m;
          if (a._copyCanvasContext) {
            if (m = a._copyCanvasContext.canvas, m.width < b || m.height < h) {
              m.width = f.IntegerUtilities.nearestPowerOfTwo(b), m.height = f.IntegerUtilities.nearestPowerOfTwo(h);
            }
          } else {
            m = document.createElement("canvas"), "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(m), m.width = f.IntegerUtilities.nearestPowerOfTwo(b), m.height = f.IntegerUtilities.nearestPowerOfTwo(h), a._copyCanvasContext = m.getContext("2d");
          }
        };
        a.prototype.draw = function(f, h, m, l, n, d, c, g, k) {
          this.context.setTransform(1, 0, 0, 1, 0, 0);
          var q, p, t = 0, L = 0;
          f.context.canvas === this.context.canvas ? (a._ensureCopyCanvasSize(l, n), p = a._copyCanvasContext, p.clearRect(0, 0, l, n), p.drawImage(f.surface.canvas, f.region.x, f.region.y, l, n, 0, 0, l, n), q = p, L = t = 0) : (q = f.surface.context, t = f.region.x, L = f.region.y);
          a: {
            switch(c) {
              case 11:
                f = !0;
                break a;
              default:
                f = !1;
            }
          }
          f && (this.context.save(), this.context.beginPath(), this.context.rect(h, m, l, n), this.context.clip());
          this.context.globalAlpha = 1;
          this.context.globalCompositeOperation = w(c);
          if (g) {
            d && !d.isIdentity() && (g = g.concat(d));
            d = 0;
            if (1 < g.length) {
              var Y, J, U;
              p ? (c = p, p = q, q = c) : (a._ensureCopyCanvasSize(l, n), p = a._copyCanvasContext, J = Y = 0);
              for (;d < g.length - 1;d++) {
                p.clearRect(0, 0, l, n), b._applyFilter(k, p, g[d]), p.drawImage(q.canvas, t, L, l, n, Y, J, l, n), b._removeFilter(p), c = p, J = t, U = L, p = q, q = c, L = t = Y, Y = J, J = U;
              }
              b._removeFilter(q);
              b._removeFilter(p);
            }
            b._applyFilter(k, this.context, g[d]);
          }
          this.context.drawImage(q.canvas, t, L, l, n, h, m, l, n);
          this.context.globalCompositeOperation = w(1);
          b._removeFilter(this.context);
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
          a.fillStyle = "#000000";
          a.strokeStyle = "#000000";
          a.globalAlpha = 1;
          a.globalColorMatrix = null;
          a.globalCompositeOperation = w(1);
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
      t.Canvas2DSurfaceRegion = h;
      var l = function() {
        function a(b, e) {
          this.canvas = b;
          this.context = b.getContext("2d");
          this.w = b.width;
          this.h = b.height;
          this._regionAllocator = e;
        }
        a.prototype.allocate = function(a, b) {
          var e = this._regionAllocator.allocate(a, b);
          return e ? new h(this, e, a, b) : null;
        };
        a.prototype.free = function(a) {
          this._regionAllocator.free(a.region);
        };
        return a;
      }();
      t.Canvas2DSurface = l;
    })(q.Canvas2D || (q.Canvas2D = {}));
  })(f.GFX || (f.GFX = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(q) {
    (function(t) {
      var a = f.Debug.assert, w = f.GFX.Geometry.Rectangle, n = f.GFX.Geometry.Point, b = f.GFX.Geometry.Matrix, h = f.NumberUtilities.clamp, l = f.NumberUtilities.pow2, e = function() {
        return function(a, b) {
          this.surfaceRegion = a;
          this.scale = b;
        };
      }();
      t.MipMapLevel = e;
      var r = function() {
        function a(b, d, e, f) {
          this._node = d;
          this._levels = [];
          this._surfaceRegionAllocator = e;
          this._size = f;
          this._renderer = b;
        }
        a.prototype.getLevel = function(a) {
          a = Math.max(a.getAbsoluteScaleX(), a.getAbsoluteScaleY());
          var b = 0;
          1 !== a && (b = h(Math.round(Math.log(a) / Math.LN2), -5, 3));
          this._node.hasFlags(512) || (b = h(b, -5, 0));
          a = l(b);
          var d = 5 + b, b = this._levels[d];
          if (!b) {
            var f = this._node.getBounds().clone();
            f.scale(a, a);
            f.snap();
            var p = this._surfaceRegionAllocator.allocate(f.w, f.h, null), n = p.region, b = this._levels[d] = new e(p, a), d = new m(p);
            d.clip.set(n);
            d.matrix.setElements(a, 0, 0, a, n.x - f.x, n.y - f.y);
            d.flags |= 64;
            this._renderer.renderNodeWithState(this._node, d);
            d.free();
          }
          return b;
        };
        return a;
      }();
      t.MipMap = r;
      (function(a) {
        a[a.NonZero = 0] = "NonZero";
        a[a.EvenOdd = 1] = "EvenOdd";
      })(t.FillRule || (t.FillRule = {}));
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
      t.Canvas2DRendererOptions = u;
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
      })(t.RenderFlags || (t.RenderFlags = {}));
      w.createMaxI16();
      var m = function(a) {
        function c(g) {
          a.call(this);
          this.clip = w.createEmpty();
          this.clipList = [];
          this.clipPath = null;
          this.flags = 0;
          this.target = null;
          this.matrix = b.createIdentity();
          this.colorMatrix = q.ColorMatrix.createIdentity();
          c.allocationCount++;
          this.target = g;
        }
        __extends(c, a);
        c.prototype.set = function(a) {
          this.clip.set(a.clip);
          this.clipPath = a.clipPath;
          this.target = a.target;
          this.matrix.set(a.matrix);
          this.colorMatrix.set(a.colorMatrix);
          this.flags = a.flags;
          f.ArrayUtilities.copyFrom(this.clipList, a.clipList);
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
      }(q.State);
      t.RenderState = m;
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
      t.FrameInfo = v;
      var x = function(d) {
        function c(a, b, e) {
          void 0 === e && (e = new u);
          d.call(this, a, b, e);
          this._visited = 0;
          this._frameInfo = new v;
          this._fontSize = 0;
          this._layers = [];
          if (a instanceof HTMLCanvasElement) {
            var f = a;
            this._viewport = new w(0, 0, f.width, f.height);
            this._target = this._createTarget(f);
          } else {
            this._addLayer("Background Layer");
            e = this._addLayer("Canvas Layer");
            f = document.createElement("canvas");
            e.appendChild(f);
            this._viewport = new w(0, 0, a.scrollWidth, a.scrollHeight);
            var h = this;
            b.addEventListener(1, function() {
              h._onStageBoundsChanged(f);
            });
            this._onStageBoundsChanged(f);
          }
          c._prepareSurfaceAllocators();
        }
        __extends(c, d);
        c.prototype._addLayer = function(a) {
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
        Object.defineProperty(c.prototype, "_backgroundVideoLayer", {get:function() {
          return this._layers[0];
        }, enumerable:!0, configurable:!0});
        c.prototype._createTarget = function(a) {
          return new t.Canvas2DSurfaceRegion(new t.Canvas2DSurface(a), new q.RegionAllocator.Region(0, 0, a.width, a.height), a.width, a.height);
        };
        c.prototype._onStageBoundsChanged = function(a) {
          var b = this._stage.getBounds(!0);
          b.snap();
          for (var c = this._devicePixelRatio = window.devicePixelRatio || 1, d = b.w / c + "px", c = b.h / c + "px", e = 0;e < this._layers.length;e++) {
            var f = this._layers[e];
            f.style.width = d;
            f.style.height = c;
          }
          a.width = b.w;
          a.height = b.h;
          a.style.position = "absolute";
          a.style.width = d;
          a.style.height = c;
          this._target = this._createTarget(a);
          this._fontSize = 10 * this._devicePixelRatio;
        };
        c._prepareSurfaceAllocators = function() {
          c._initializedCaches || (c._surfaceCache = new q.SurfaceRegionAllocator.SimpleAllocator(function(a, b) {
            var c = document.createElement("canvas");
            "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(c);
            var d = Math.max(1024, a), e = Math.max(1024, b);
            c.width = d;
            c.height = e;
            var f = null, f = 512 <= a || 512 <= b ? new q.RegionAllocator.GridAllocator(d, e, d, e) : new q.RegionAllocator.BucketAllocator(d, e);
            return new t.Canvas2DSurface(c, f);
          }), c._shapeCache = new q.SurfaceRegionAllocator.SimpleAllocator(function(a, b) {
            var c = document.createElement("canvas");
            "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(c);
            c.width = 1024;
            c.height = 1024;
            var d = d = new q.RegionAllocator.CompactAllocator(1024, 1024);
            return new t.Canvas2DSurface(c, d);
          }), c._initializedCaches = !0);
        };
        c.prototype.render = function() {
          var a = this._stage, b = this._target, c = this._options, d = this._viewport;
          b.reset();
          b.context.save();
          b.context.beginPath();
          b.context.rect(d.x, d.y, d.w, d.h);
          b.context.clip();
          this._renderStageToTarget(b, a, d);
          b.reset();
          c.paintViewport && (b.context.beginPath(), b.context.rect(d.x, d.y, d.w, d.h), b.context.strokeStyle = "#FF4981", b.context.lineWidth = 2, b.context.stroke());
          b.context.restore();
        };
        c.prototype.renderNode = function(a, b, c) {
          var d = new m(this._target);
          d.clip.set(b);
          d.flags = 256;
          d.matrix.set(c);
          a.visit(this, d);
          d.free();
        };
        c.prototype.renderNodeWithState = function(a, b) {
          a.visit(this, b);
        };
        c.prototype._renderWithCache = function(a, b) {
          var d = b.matrix, e = a.getBounds();
          if (e.isEmpty()) {
            return !1;
          }
          var f = this._options.cacheShapesMaxSize, h = Math.max(d.getAbsoluteScaleX(), d.getAbsoluteScaleY()), l = !!(b.flags & 16), m = !!(b.flags & 8);
          if (b.hasFlags(256)) {
            if (m || l || !b.colorMatrix.isIdentity() || a.hasFlags(256) || 100 < this._options.cacheShapesThreshold || e.w * h > f || e.h * h > f) {
              return !1;
            }
            (h = a.properties.mipMap) || (h = a.properties.mipMap = new r(this, a, c._shapeCache, f));
            l = h.getLevel(d);
            f = l.surfaceRegion;
            h = f.region;
            return l ? (l = b.target.context, l.imageSmoothingEnabled = l.mozImageSmoothingEnabled = !0, l.setTransform(d.a, d.b, d.c, d.d, d.tx, d.ty), l.drawImage(f.surface.canvas, h.x, h.y, h.w, h.h, e.x, e.y, e.w, e.h), !0) : !1;
          }
        };
        c.prototype._intersectsClipList = function(a, b) {
          var c = a.getBounds(!0), d = !1;
          b.matrix.transformRectangleAABB(c);
          b.clip.intersects(c) && (d = !0);
          var e = b.clipList;
          if (d && e.length) {
            for (var d = !1, f = 0;f < e.length;f++) {
              if (c.intersects(e[f])) {
                d = !0;
                break;
              }
            }
          }
          c.free();
          return d;
        };
        c.prototype.visitGroup = function(a, b) {
          this._frameInfo.groups++;
          a.getBounds();
          if ((!a.hasFlags(4) || b.flags & 4) && a.hasFlags(1)) {
            var c = b.flags & 1;
            if (!c && ((1 !== a.getLayer().blendMode || a.getLayer().mask) && this._options.blending || a.getLayer().filters && this._options.filters)) {
              b = b.clone(), b.flags |= 1, this._renderLayer(a, b), b.free();
            } else {
              if (c && b.removeFlags(1), this._intersectsClipList(a, b)) {
                for (var c = null, d = a.getChildren(), e = 0;e < d.length;e++) {
                  var f = d[e], h = f.getTransform(), l = b.transform(h);
                  l.toggleFlags(4096, f.hasFlags(64));
                  if (0 <= f.clip) {
                    c = c || new Uint8Array(d.length);
                    c[f.clip + e]++;
                    var m = l.clone();
                    m.flags |= 16;
                    m.beginClipPath(h.getMatrix());
                    f.visit(this, m);
                    m.applyClipPath();
                    m.free();
                  } else {
                    f.visit(this, l);
                  }
                  if (c && 0 < c[e]) {
                    for (;c[e]--;) {
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
        c.prototype._renderDebugInfo = function(a, b) {
          if (b.flags & 1024) {
            var d = b.target.context, e = a.getBounds(!0), h = a.properties.style;
            h || (h = a.properties.style = f.ColorStyle.randomStyle());
            d.strokeStyle = h;
            b.matrix.transformRectangleAABB(e);
            d.setTransform(1, 0, 0, 1, 0, 0);
            e.free();
            e = a.getBounds();
            h = c._debugPoints;
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
        c.prototype.visitStage = function(a, b) {
          var c = b.target.context, d = a.getBounds(!0);
          b.matrix.transformRectangleAABB(d);
          d.intersect(b.clip);
          b.target.reset();
          b = b.clone();
          this._options.clear && b.target.clear(b.clip);
          a.hasFlags(2) || !a.color || b.flags & 32 || (this._container.style.backgroundColor = a.color.toCSSStyle());
          this.visitGroup(a, b);
          a.dirtyRegion && (c.restore(), b.target.reset(), c.globalAlpha = .4, b.hasFlags(2048) && a.dirtyRegion.render(b.target.context), a.dirtyRegion.clear());
          b.free();
        };
        c.prototype.visitShape = function(a, b) {
          if (this._intersectsClipList(a, b)) {
            var c = b.matrix;
            b.flags & 8192 && (c = c.clone(), c.snap());
            var d = b.target.context;
            t.Filters._applyColorMatrix(d, b.colorMatrix);
            a.source instanceof q.RenderableVideo ? this.visitRenderableVideo(a.source, b) : 0 < d.globalAlpha && this.visitRenderable(a.source, b, a.ratio);
            b.flags & 8192 && c.free();
            t.Filters._removeFilter(d);
          }
        };
        c.prototype.visitRenderableVideo = function(a, b) {
          if (a.video && a.video.videoWidth) {
            var c = this._devicePixelRatio, d = b.matrix.clone();
            d.scale(1 / c, 1 / c);
            var c = a.getBounds(), e = f.GFX.Geometry.Matrix.createIdentity();
            e.scale(c.w / a.video.videoWidth, c.h / a.video.videoHeight);
            d.preMultiply(e);
            e.free();
            c = d.toCSSTransform();
            a.video.style.transformOrigin = "0 0";
            a.video.style.transform = c;
            var h = this._backgroundVideoLayer;
            h !== a.video.parentElement && (h.appendChild(a.video), a.addEventListener(2, function J(a) {
              h.removeChild(a.video);
              a.removeEventListener(2, J);
            }));
            d.free();
          }
        };
        c.prototype.visitRenderable = function(a, b, c) {
          var d = a.getBounds();
          if (!(b.flags & 32 || d.isEmpty())) {
            if (b.hasFlags(64)) {
              b.removeFlags(64);
            } else {
              if (this._renderWithCache(a, b)) {
                return;
              }
            }
            var e = b.matrix, d = b.target.context, f = !!(b.flags & 16), h = !!(b.flags & 8);
            d.setTransform(e.a, e.b, e.c, e.d, e.tx, e.ty);
            this._frameInfo.shapes++;
            d.imageSmoothingEnabled = d.mozImageSmoothingEnabled = b.hasFlags(4096);
            e = a.properties.renderCount || 0;
            a.properties.renderCount = ++e;
            a.render(d, c, null, f ? b.clipPath : null, h);
          }
        };
        c.prototype._renderLayer = function(a, b) {
          var c = a.getLayer(), d = c.mask;
          if (d) {
            var e = !a.hasFlags(16) || !d.hasFlags(16);
            this._renderWithMask(a, d, c.blendMode, e, b);
          } else {
            d = w.allocate();
            if (e = this._renderToTemporarySurface(a, a.getLayerBounds(!!this._options.filters), b, d, b.target.surface)) {
              b.target.draw(e, d.x, d.y, d.w, d.h, b.colorMatrix, this._options.blending ? c.blendMode : 1, this._options.filters ? c.filters : null, this._devicePixelRatio), e.free();
            }
            d.free();
          }
        };
        c.prototype._renderWithMask = function(a, b, c, d, e) {
          var f = b.getTransform().getConcatenatedMatrix(!0);
          b.parent || (f = f.scale(this._devicePixelRatio, this._devicePixelRatio));
          var h = a.getBounds().clone();
          e.matrix.transformRectangleAABB(h);
          h.snap();
          if (!h.isEmpty()) {
            var l = b.getBounds().clone();
            f.transformRectangleAABB(l);
            l.snap();
            if (!l.isEmpty()) {
              var m = e.clip.clone();
              m.intersect(h);
              m.intersect(l);
              m.snap();
              m.isEmpty() || (h = e.clone(), h.clip.set(m), a = this._renderToTemporarySurface(a, a.getBounds(), h, w.createEmpty(), null), h.free(), l = e.clone(), l.clip.set(m), l.matrix = f, l.flags |= 4, d && (l.flags |= 8), b = this._renderToTemporarySurface(b, b.getBounds(), l, w.createEmpty(), a.surface), l.free(), a.draw(b, 0, 0, m.w, m.h, l.colorMatrix, 11, null, this._devicePixelRatio), e.target.draw(a, m.x, m.y, m.w, m.h, h.colorMatrix, c, null, this._devicePixelRatio), b.free(), a.free());
            }
          }
        };
        c.prototype._renderStageToTarget = function(a, c, d) {
          w.allocationCount = b.allocationCount = m.allocationCount = 0;
          a = new m(a);
          a.clip.set(d);
          this._options.paintRenderable || (a.flags |= 32);
          this._options.paintBounds && (a.flags |= 1024);
          this._options.paintDirtyRegion && (a.flags |= 2048);
          this._options.paintFlashing && (a.flags |= 512);
          this._options.cacheShapes && (a.flags |= 256);
          this._options.imageSmoothing && (a.flags |= 4096);
          this._options.snapToDevicePixels && (a.flags |= 8192);
          this._frameInfo.enter(a);
          c.visit(this, a);
          this._frameInfo.leave();
        };
        c.prototype._renderToTemporarySurface = function(a, b, c, d, e) {
          var f = c.matrix;
          b = b.clone();
          f.transformRectangleAABB(b);
          b.snap();
          d.set(b);
          d.intersect(c.clip);
          d.snap();
          if (d.isEmpty()) {
            return null;
          }
          e = this._allocateSurface(d.w, d.h, e);
          b = e.region;
          b = new w(b.x, b.y, d.w, d.h);
          e.context.setTransform(1, 0, 0, 1, 0, 0);
          e.clear();
          f = f.clone();
          f.translate(b.x - d.x, b.y - d.y);
          e.context.save();
          c = c.clone();
          c.target = e;
          c.matrix = f;
          c.clip.set(b);
          a.visit(this, c);
          c.free();
          e.context.restore();
          return e;
        };
        c.prototype._allocateSurface = function(a, b, d) {
          return c._surfaceCache.allocate(a, b, d);
        };
        c.prototype.screenShot = function(b, c, d) {
          c && (c = this._stage.content.groupChild.child, a(c instanceof q.Stage), b = c.content.getBounds(!0), c.content.getTransform().getConcatenatedMatrix().transformRectangleAABB(b), b.intersect(this._viewport));
          b || (b = new w(0, 0, this._target.w, this._target.h));
          c = b.w;
          var e = b.h, f = this._devicePixelRatio;
          d && (c /= f, e /= f, f = 1);
          d = document.createElement("canvas");
          d.width = c;
          d.height = e;
          var h = d.getContext("2d");
          h.fillStyle = this._container.style.backgroundColor;
          h.fillRect(0, 0, c, e);
          h.drawImage(this._target.context.canvas, b.x, b.y, b.w, b.h, 0, 0, c, e);
          return new q.ScreenShot(d.toDataURL("image/png"), c, e, f);
        };
        c._initializedCaches = !1;
        c._debugPoints = n.createEmptyPoints(4);
        return c;
      }(q.Renderer);
      t.Canvas2DRenderer = x;
    })(q.Canvas2D || (q.Canvas2D = {}));
  })(f.GFX || (f.GFX = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(q) {
    var t = q.Geometry.Point, a = q.Geometry.Matrix, w = q.Geometry.Rectangle, n = f.Tools.Mini.FPS, b = function() {
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
    var h = function(a) {
      function b() {
        a.apply(this, arguments);
        this._keyCodes = [];
      }
      __extends(b, a);
      b.prototype.onMouseDown = function(a, b) {
        b.altKey && (a.state = new e(a.worldView, a.getMousePosition(b, null), a.worldView.getTransform().getMatrix(!0)));
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
    }(b), l = function(a) {
      function b() {
        a.apply(this, arguments);
        this._keyCodes = [];
        this._paused = !1;
        this._mousePosition = new t(0, 0);
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
          var d = a.getMousePosition(b, null), c = a.worldView.getTransform().getMatrix(!0), e = 1 + e / 1E3;
          c.translate(-d.x, -d.y);
          c.scale(e, e);
          c.translate(d.x, d.y);
          a.worldView.getTransform().setMatrix(c);
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
        if (a.getOption("paintViewport")) {
          var b = q.viewportLoupeDiameter.value, e = q.viewportLoupeDiameter.value;
          a.viewport = new w(this._mousePosition.x - b / 2, this._mousePosition.y - e / 2, b, e);
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
          var f = a._world;
          f && (a.state = new e(f, a.getMousePosition(b, null), f.getTransform().getMatrix(!0)));
        }
      };
      b.prototype.onMouseUp = function(a, b) {
        a.state = new h;
        a.selectNodeUnderMouse(b);
      };
      return b;
    })(b);
    var e = function(a) {
      function b(e, f, h) {
        a.call(this);
        this._target = e;
        this._startPosition = f;
        this._startMatrix = h;
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
        a.state = new h;
      };
      return b;
    }(b), b = function() {
      function b(a, e, r) {
        function t(a) {
          g._state.onMouseWheel(g, a);
          g._persistentState.onMouseWheel(g, a);
        }
        void 0 === e && (e = !1);
        void 0 === r && (r = void 0);
        this._state = new h;
        this._persistentState = new l;
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
        this._disableHiDPI = e;
        e = document.createElement("div");
        e.style.position = "absolute";
        e.style.width = "100%";
        e.style.height = "100%";
        e.style.zIndex = "0";
        a.appendChild(e);
        if (q.hud.value) {
          var d = document.createElement("div");
          d.style.position = "absolute";
          d.style.width = "100%";
          d.style.height = "100%";
          d.style.pointerEvents = "none";
          var c = document.createElement("div");
          c.style.position = "absolute";
          c.style.width = "100%";
          c.style.height = "20px";
          c.style.pointerEvents = "none";
          d.appendChild(c);
          a.appendChild(d);
          this._fps = new n(c);
        } else {
          this._fps = null;
        }
        this.transparent = d = 0 === r;
        void 0 === r || 0 === r || f.ColorUtilities.rgbaToCSSStyle(r);
        this._options = new q.Canvas2D.Canvas2DRendererOptions;
        this._options.alpha = d;
        this._renderer = new q.Canvas2D.Canvas2DRenderer(e, this._stage, this._options);
        this._listenForContainerSizeChanges();
        this._onMouseUp = this._onMouseUp.bind(this);
        this._onMouseDown = this._onMouseDown.bind(this);
        this._onMouseMove = this._onMouseMove.bind(this);
        var g = this;
        window.addEventListener("mouseup", function(a) {
          g._state.onMouseUp(g, a);
          g._render();
        }, !1);
        window.addEventListener("mousemove", function(a) {
          g._state.onMouseMove(g, a);
          g._persistentState.onMouseMove(g, a);
        }, !1);
        window.addEventListener("DOMMouseScroll", t);
        window.addEventListener("mousewheel", t);
        a.addEventListener("mousedown", function(a) {
          g._state.onMouseDown(g, a);
        });
        window.addEventListener("keydown", function(a) {
          g._state.onKeyDown(g, a);
          if (g._state !== g._persistentState) {
            g._persistentState.onKeyDown(g, a);
          }
        }, !1);
        window.addEventListener("keypress", function(a) {
          g._state.onKeyPress(g, a);
          if (g._state !== g._persistentState) {
            g._persistentState.onKeyPress(g, a);
          }
        }, !1);
        window.addEventListener("keyup", function(a) {
          g._state.onKeyUp(g, a);
          if (g._state !== g._persistentState) {
            g._persistentState.onKeyUp(g, a);
          }
        }, !1);
      }
      b.prototype._listenForContainerSizeChanges = function() {
        var a = this._containerWidth, b = this._containerHeight;
        this._onContainerSizeChanged();
        var e = this;
        setInterval(function() {
          if (a !== e._containerWidth || b !== e._containerHeight) {
            e._onContainerSizeChanged(), a = e._containerWidth, b = e._containerHeight;
          }
        }, 10);
      };
      b.prototype._onContainerSizeChanged = function() {
        var b = this.getRatio(), e = Math.ceil(this._containerWidth * b), f = Math.ceil(this._containerHeight * b);
        this._stage.setBounds(new w(0, 0, e, f));
        this._stage.content.setBounds(new w(0, 0, e, f));
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
          var e = this._renderer;
          e.viewport = this.viewport ? this.viewport : this._stage.getBounds();
          this._dispatchEvent("render");
          b = performance.now();
          e.render();
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
      b.prototype.getMousePosition = function(b, e) {
        var f = this._container, h = f.getBoundingClientRect(), d = this.getRatio(), f = new t(f.scrollWidth / h.width * (b.clientX - h.left) * d, f.scrollHeight / h.height * (b.clientY - h.top) * d);
        if (!e) {
          return f;
        }
        h = a.createIdentity();
        e.getTransform().getConcatenatedMatrix().inverse(h);
        h.transformPoint(f);
        return f;
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
      b.prototype.screenShot = function(a, b, e) {
        return this._renderer.screenShot(a, b, e);
      };
      return b;
    }();
    q.Easel = b;
  })(f.GFX || (f.GFX = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(q) {
    var t = f.GFX.Geometry.Matrix;
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
    var w = function(f) {
      function b(b, l, e) {
        void 0 === e && (e = new a);
        f.call(this, b, l, e);
        this._canvas = document.createElement("canvas");
        this._container.appendChild(this._canvas);
        this._context = this._canvas.getContext("2d");
        this._listenForContainerSizeChanges();
      }
      __extends(b, f);
      b.prototype._listenForContainerSizeChanges = function() {
        var a = this._containerWidth, b = this._containerHeight;
        this._onContainerSizeChanged();
        var e = this;
        setInterval(function() {
          if (a !== e._containerWidth || b !== e._containerHeight) {
            e._onContainerSizeChanged(), a = e._containerWidth, b = e._containerHeight;
          }
        }, 10);
      };
      b.prototype._getRatio = function() {
        var a = window.devicePixelRatio || 1, b = 1;
        1 !== a && (b = a / 1);
        return b;
      };
      b.prototype._onContainerSizeChanged = function() {
        var a = this._getRatio(), b = Math.ceil(this._containerWidth * a), e = Math.ceil(this._containerHeight * a), f = this._canvas;
        0 < a ? (f.width = b * a, f.height = e * a, f.style.width = b + "px", f.style.height = e + "px") : (f.width = b, f.height = e);
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
        0 === this._options.layout && this._renderNodeSimple(this._context, this._stage, t.createIdentity());
        a.restore();
      };
      b.prototype._renderNodeSimple = function(a, b, e) {
        function f(b) {
          var e = b.getChildren();
          b.hasFlags(4096) ? a.fillStyle = "red" : a.fillStyle = "white";
          var k = String(b.id);
          b instanceof q.RenderableText ? k = "T" + k : b instanceof q.RenderableShape ? k = "S" + k : b instanceof q.RenderableBitmap ? k = "B" + k : b instanceof q.RenderableVideo && (k = "V" + k);
          b instanceof q.Renderable && (k = k + " [" + b._parents.length + "]");
          b = a.measureText(k).width;
          a.fillText(k, m, t);
          if (e) {
            m += b + 4;
            d = Math.max(d, m + 20);
            for (k = 0;k < e.length;k++) {
              f(e[k]), k < e.length - 1 && (t += 18, t > n._canvas.height && (a.fillStyle = "gray", m = m - x + d + 8, x = d + 8, t = 0, a.fillStyle = "white"));
            }
            m -= b + 4;
          }
        }
        var n = this;
        a.save();
        a.font = "16px Arial";
        a.fillStyle = "white";
        var m = 0, t = 0, x = 0, d = 0;
        f(b);
        a.restore();
      };
      return b;
    }(q.Renderer);
    q.TreeRenderer = w;
  })(f.GFX || (f.GFX = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(q) {
    (function(t) {
      var a = f.GFX.BlurFilter, w = f.GFX.DropshadowFilter, n = f.GFX.Shape, b = f.GFX.Group, h = f.GFX.RenderableShape, l = f.GFX.RenderableMorphShape, e = f.GFX.RenderableBitmap, r = f.GFX.RenderableVideo, u = f.GFX.RenderableText, m = f.GFX.ColorMatrix, v = f.ShapeData, x = f.ArrayUtilities.DataBuffer, d = f.GFX.Stage, c = f.GFX.Geometry.Matrix, g = f.GFX.Geometry.Rectangle, k = function() {
        function a() {
        }
        a.prototype.writeMouseEvent = function(a, b) {
          var c = this.output;
          c.writeInt(300);
          var d = f.Remoting.MouseEventNames.indexOf(a.type);
          c.writeInt(d);
          c.writeFloat(b.x);
          c.writeFloat(b.y);
          c.writeInt(a.buttons);
          c.writeInt((a.ctrlKey ? 1 : 0) | (a.altKey ? 2 : 0) | (a.shiftKey ? 4 : 0));
        };
        a.prototype.writeKeyboardEvent = function(a) {
          var b = this.output;
          b.writeInt(301);
          var c = f.Remoting.KeyboardEventNames.indexOf(a.type);
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
      t.GFXChannelSerializer = k;
      k = function() {
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
          e && this.stage.setFlags(2);
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
          f.registerCSSFont(a, b, !inFirefox);
          inFirefox ? c(null) : window.setTimeout(c, 400);
        };
        a.prototype.registerImage = function(a, b, c, d, e, f) {
          this._registerAsset(a, b, this._decodeImage(c, d, e, f));
        };
        a.prototype.registerVideo = function(a) {
          this._registerAsset(a, 0, new r(a, this));
        };
        a.prototype._decodeImage = function(a, b, c, d) {
          var h = new Image, k = e.FromImage(h, -1, -1);
          h.src = URL.createObjectURL(new Blob([b], {type:f.getMIMETypeForImageType(a)}));
          h.onload = function() {
            k.setBounds(new g(0, 0, h.width, h.height));
            c && k.mask(c);
            k.invalidate();
            d({width:h.width, height:h.height});
          };
          h.onerror = function() {
            d(null);
          };
          return k;
        };
        a.prototype.sendVideoPlaybackEvent = function(a, b, c) {
          this._easelHost.sendVideoPlaybackEvent(a, b, c);
        };
        return a;
      }();
      t.GFXChannelDeserializerContext = k;
      k = function() {
        function d() {
        }
        d.prototype.read = function() {
          for (var a = 0, b = this.input, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0, k = 0, l = 0, m = 0;0 < b.bytesAvailable;) {
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
              case 107:
                h++;
                this._readUpdateCurrentMouseTarget();
                break;
              case 105:
                k++;
                this._readUpdateNetStream();
                break;
              case 200:
                l++;
                this._readDrawToBitmap();
                break;
              case 106:
                m++, this._readRequestBitmapData();
            }
          }
        };
        d.prototype._readMatrix = function() {
          var a = this.input, b = d._temporaryReadMatrix, c = 1, e = 0, f = 0, g = 1, h = 0, k = 0;
          switch(a.readInt()) {
            case 1:
              c = a.readFloat(), g = a.readFloat();
            case 0:
              h = a.readFloat() / 20;
              k = a.readFloat() / 20;
              break;
            case 2:
              c = g = a.readFloat();
              h = a.readFloat() / 20;
              k = a.readFloat() / 20;
              break;
            case 3:
              c = a.readFloat(), e = a.readFloat(), f = a.readFloat(), g = a.readFloat(), h = a.readFloat() / 20, k = a.readFloat() / 20;
          }
          b.setElements(c, e, f, g, h, k);
          return b;
        };
        d.prototype._readRectangle = function() {
          var a = this.input, b = d._temporaryReadRectangle;
          b.setElements(a.readInt() / 20, a.readInt() / 20, a.readInt() / 20, a.readInt() / 20);
          return b;
        };
        d.prototype._readColorMatrix = function() {
          var a = this.input, b = d._temporaryReadColorMatrix, c = 1, e = 1, f = 1, g = 1, h = 0, k = 0, l = 0, m = 0;
          switch(a.readInt()) {
            case 0:
              return d._temporaryReadColorMatrixIdentity;
            case 1:
              g = a.readFloat();
              break;
            case 2:
              f = e = c = 0;
              g = a.readFloat();
              h = a.readInt();
              k = a.readInt();
              l = a.readInt();
              m = a.readInt();
              break;
            case 3:
              c = a.readFloat(), e = a.readFloat(), f = a.readFloat(), g = a.readFloat(), h = a.readInt(), k = a.readInt(), l = a.readInt(), m = a.readInt();
          }
          b.setMultipliersAndOffsets(c, e, f, g, h, k, l, m);
          return b;
        };
        d.prototype._readAsset = function() {
          var a = this.input.readInt(), b = this.inputAssets[a];
          this.inputAssets[a] = null;
          return b;
        };
        d.prototype._readUpdateGraphics = function() {
          for (var a = this.input, b = this.context, c = a.readInt(), d = a.readInt(), e = b._getAsset(c), f = this._readRectangle(), g = v.FromPlainObject(this._readAsset()), k = a.readInt(), m = [], n = 0;n < k;n++) {
            var q = a.readInt();
            m.push(b._getBitmapAsset(q));
          }
          if (e) {
            e.update(g, m, f);
          } else {
            a = g.morphCoordinates ? new l(c, g, m, f) : new h(c, g, m, f);
            for (n = 0;n < m.length;n++) {
              m[n] && m[n].addRenderableParent(a);
            }
            b._registerAsset(c, d, a);
          }
        };
        d.prototype._readUpdateBitmapData = function() {
          var a = this.input, b = this.context, c = a.readInt(), d = a.readInt(), f = b._getBitmapAsset(c), g = this._readRectangle(), a = a.readInt(), h = x.FromPlainObject(this._readAsset());
          f ? f.updateFromDataBuffer(a, h) : (f = e.FromDataBuffer(a, h, g), b._registerAsset(c, d, f));
        };
        d.prototype._readUpdateTextContent = function() {
          var a = this.input, b = this.context, c = a.readInt(), d = a.readInt(), e = b._getTextAsset(c), f = this._readRectangle(), g = this._readMatrix(), h = a.readInt(), k = a.readInt(), l = a.readInt(), m = a.readBoolean(), n = a.readInt(), q = a.readInt(), r = this._readAsset(), t = x.FromPlainObject(this._readAsset()), v = null, w = a.readInt();
          w && (v = new x(4 * w), a.readBytes(v, 0, 4 * w));
          e ? (e.setBounds(f), e.setContent(r, t, g, v), e.setStyle(h, k, n, q), e.reflow(l, m)) : (e = new u(f), e.setContent(r, t, g, v), e.setStyle(h, k, n, q), e.reflow(l, m), b._registerAsset(c, d, e));
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
          a.stage.color = f.Color.FromARGB(b);
          a.stage.align = this.input.readInt();
          a.stage.scaleMode = this.input.readInt();
          b = this.input.readInt();
          a._easelHost.fullscreen = 0 === b || 1 === b;
        };
        d.prototype._readUpdateCurrentMouseTarget = function() {
          var a = this.context;
          this.input.readInt();
          var b = this.input.readInt();
          a._easelHost.cursor = f.UI.toCSSCursor(b);
        };
        d.prototype._readUpdateNetStream = function() {
          var a = this.context, b = this.input.readInt(), c = a._getVideoAsset(b), d = this._readRectangle();
          c || (a.registerVideo(b), c = a._getVideoAsset(b));
          c.setBounds(d);
        };
        d.prototype._readFilters = function(b) {
          var c = this.input, d = c.readInt(), e = [];
          if (d) {
            for (var g = 0;g < d;g++) {
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
                  e.push(new m(h));
                  break;
                default:
                  f.Debug.somewhatImplemented(q.FilterType[h]);
              }
            }
            b.getLayer().filters = e;
          }
        };
        d.prototype._readUpdateFrame = function() {
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
        d.prototype._readDrawToBitmap = function() {
          var a = this.input, b = this.context, d = a.readInt(), f = a.readInt(), g = a.readInt(), h, k, l;
          h = g & 1 ? this._readMatrix().clone() : c.createIdentity();
          g & 8 && (k = this._readColorMatrix());
          g & 16 && (l = this._readRectangle());
          g = a.readInt();
          a.readBoolean();
          a = b._getBitmapAsset(d);
          f = b._makeNode(f);
          a ? a.drawNode(f, h, k, g, l) : b._registerAsset(d, -1, e.FromNode(f, h, k, g, l));
        };
        d.prototype._readRequestBitmapData = function() {
          var a = this.output, b = this.context, c = this.input.readInt();
          b._getBitmapAsset(c).readImageData(a);
        };
        d._temporaryReadMatrix = c.createIdentity();
        d._temporaryReadRectangle = g.createEmpty();
        d._temporaryReadColorMatrix = m.createIdentity();
        d._temporaryReadColorMatrixIdentity = m.createIdentity();
        return d;
      }();
      t.GFXChannelDeserializer = k;
    })(q.GFX || (q.GFX = {}));
  })(f.Remoting || (f.Remoting = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(q) {
    var t = f.GFX.Geometry.Point, a = f.ArrayUtilities.DataBuffer;
    q.ContextMenuButton = 2;
    var w = function() {
      function n(a) {
        this._easel = a;
        var h = a.transparent;
        this._group = a.world;
        this._content = null;
        this._fullscreen = !1;
        this._context = new f.Remoting.GFX.GFXChannelDeserializerContext(this, this._group, h);
        this._addEventListeners();
        f.registerFallbackFont();
      }
      n.prototype.onSendUpdates = function(a, f) {
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
        if (b.button !== q.ContextMenuButton) {
          var h = this._easel.getMousePosition(b, this._content), h = new t(h.x, h.y), l = new a, e = new f.Remoting.GFX.GFXChannelSerializer;
          e.output = l;
          e.writeMouseEvent(b, h);
          this.onSendUpdates(l, []);
        }
      };
      n.prototype._keyboardEventListener = function(b) {
        var h = new a, l = new f.Remoting.GFX.GFXChannelSerializer;
        l.output = h;
        l.writeKeyboardEvent(b);
        this.onSendUpdates(h, []);
      };
      n.prototype._addEventListeners = function() {
        for (var a = this._mouseEventListener.bind(this), f = this._keyboardEventListener.bind(this), l = n._mouseEvents, e = 0;e < l.length;e++) {
          window.addEventListener(l[e], a);
        }
        a = n._keyboardEvents;
        for (e = 0;e < a.length;e++) {
          window.addEventListener(a[e], f);
        }
        this._addFocusEventListeners();
        this._easel.addEventListener("resize", this._resizeEventListener.bind(this));
      };
      n.prototype._sendFocusEvent = function(b) {
        var h = new a, l = new f.Remoting.GFX.GFXChannelSerializer;
        l.output = h;
        l.writeFocusEvent(b);
        this.onSendUpdates(h, []);
      };
      n.prototype._addFocusEventListeners = function() {
        var a = this;
        document.addEventListener("visibilitychange", function(f) {
          a._sendFocusEvent(document.hidden ? 0 : 1);
        });
        window.addEventListener("focus", function(f) {
          a._sendFocusEvent(3);
        });
        window.addEventListener("blur", function(f) {
          a._sendFocusEvent(2);
        });
      };
      n.prototype._resizeEventListener = function() {
        this.onDisplayParameters(this._easel.getDisplayParameters());
      };
      n.prototype.onDisplayParameters = function(a) {
        throw Error("This method is abstract");
      };
      n.prototype.processUpdates = function(a, h, l) {
        void 0 === l && (l = null);
        var e = new f.Remoting.GFX.GFXChannelDeserializer;
        e.input = a;
        e.inputAssets = h;
        e.output = l;
        e.context = this._context;
        e.read();
      };
      n.prototype.processVideoControl = function(a, f, l) {
        var e = this._context, n = e._getVideoAsset(a);
        if (!n) {
          if (1 !== f) {
            return;
          }
          e.registerVideo(a);
          n = e._getVideoAsset(a);
        }
        return n.processControlRequest(f, l);
      };
      n.prototype.processRegisterFont = function(a, f, l) {
        this._context.registerFont(a, f, l);
      };
      n.prototype.processRegisterImage = function(a, f, l, e, n, q) {
        this._context.registerImage(a, f, l, e, n, q);
      };
      n.prototype.processFSCommand = function(a, f) {
        "undefined" !== typeof ShumwayCom && "test" === ShumwayCom.environment && ShumwayCom.processFSCommand(a, f);
      };
      n.prototype.processFrame = function() {
        "undefined" !== typeof ShumwayCom && "test" === ShumwayCom.environment && ShumwayCom.processFrame();
      };
      n.prototype.onVideoPlaybackEvent = function(a, f, l) {
        throw Error("This method is abstract");
      };
      n.prototype.sendVideoPlaybackEvent = function(a, f, l) {
        this.onVideoPlaybackEvent(a, f, l);
      };
      n._mouseEvents = f.Remoting.MouseEventNames;
      n._keyboardEvents = f.Remoting.KeyboardEventNames;
      return n;
    }();
    q.EaselHost = w;
  })(f.GFX || (f.GFX = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(q) {
    (function(t) {
      var a = f.ArrayUtilities.DataBuffer, w = function(f) {
        function b(a, b) {
          f.call(this, a);
          this._peer = b;
          this._peer.onSyncMessage = function(a) {
            return this._onWindowMessage(a, !1);
          }.bind(this);
          this._peer.onAsyncMessage = function(a) {
            this._onWindowMessage(a, !0);
          }.bind(this);
        }
        __extends(b, f);
        b.prototype.onSendUpdates = function(a, b) {
          var e = a.getBytes();
          this._peer.postAsyncMessage({type:"gfx", updates:e, assets:b}, [e.buffer]);
        };
        b.prototype.onDisplayParameters = function(a) {
          this._peer.postAsyncMessage({type:"displayParameters", params:a});
        };
        b.prototype.onVideoPlaybackEvent = function(a, b, e) {
          this._peer.postAsyncMessage({type:"videoPlayback", id:a, eventType:b, data:e});
        };
        b.prototype._sendRegisterFontResponse = function(a, b) {
          this._peer.postAsyncMessage({type:"registerFontResponse", requestId:a, result:b});
        };
        b.prototype._sendRegisterImageResponse = function(a, b) {
          this._peer.postAsyncMessage({type:"registerImageResponse", requestId:a, result:b});
        };
        b.prototype._onWindowMessage = function(b, f) {
          var e;
          if ("object" === typeof b && null !== b) {
            if ("player" === b.type) {
              var n = a.FromArrayBuffer(b.updates.buffer);
              f ? this.processUpdates(n, b.assets) : (e = new a, this.processUpdates(n, b.assets, e), e = e.toPlainObject());
            } else {
              "frame" === b.type ? this.processFrame() : "videoControl" === b.type ? e = this.processVideoControl(b.id, b.eventType, b.data) : "registerFont" === b.type ? this.processRegisterFont(b.syncId, b.data, this._sendRegisterFontResponse.bind(this, b.requestId)) : "registerImage" === b.type ? this.processRegisterImage(b.syncId, b.symbolId, b.imageType, b.data, b.alphaData, this._sendRegisterImageResponse.bind(this, b.requestId)) : "fscommand" === b.type && this.processFSCommand(b.command, 
              b.args);
            }
          }
          return e;
        };
        return b;
      }(q.EaselHost);
      t.WindowEaselHost = w;
    })(q.Window || (q.Window = {}));
  })(f.GFX || (f.GFX = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(q) {
    (function(q) {
      function a(a, b) {
        a.writeInt(b.length);
        a.writeRawBytes(b);
      }
      function w(a, b) {
        return "byteLength" in a && "buffer" in a && (a.constructor && a.constructor.name) === b;
      }
      function n(a) {
        return "byteLength" in a && "ArrayBuffer" === (a.constructor && a.constructor.name);
      }
      function b(b) {
        function d(b) {
          switch(typeof b) {
            case "undefined":
              c.writeByte(0);
              break;
            case "boolean":
              c.writeByte(b ? 2 : 3);
              break;
            case "number":
              c.writeByte(4);
              c.writeDouble(b);
              break;
            case "string":
              c.writeByte(5);
              c.writeUTF(b);
              break;
            default:
              if (null === b) {
                c.writeByte(1);
                break;
              }
              if (Array.isArray(b)) {
                c.writeByte(6);
                c.writeInt(b.length);
                for (var e = 0;e < b.length;e++) {
                  d(b[e]);
                }
              } else {
                if (w(b, "Uint8Array")) {
                  c.writeByte(9), a(c, b);
                } else {
                  if ("length" in b && "buffer" in b && "littleEndian" in b) {
                    c.writeByte(b.littleEndian ? 10 : 11), a(c, new Uint8Array(b.buffer, 0, b.length));
                  } else {
                    if (n(b)) {
                      c.writeByte(8), a(c, new Uint8Array(b));
                    } else {
                      if (w(b, "Int32Array")) {
                        c.writeByte(12), a(c, new Uint8Array(b.buffer, b.byteOffset, b.byteLength));
                      } else {
                        if (!f.isNullOrUndefined(b.buffer) && n(b.buffer) && "number" === typeof b.byteOffset) {
                          throw Error("Some unsupported TypedArray is used");
                        }
                        c.writeByte(7);
                        for (e in b) {
                          c.writeUTF(e), d(b[e]);
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
        var c = new r;
        d(b);
        return c.getBytes();
      }
      function h(a) {
        var b = new r, c = a.readInt();
        a.readBytes(b, 0, c);
        return b.getBytes();
      }
      function l(a) {
        var b = new r, c = a.readInt();
        a.readBytes(b, 0, c);
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
            for (var b = [], c = a.readInt(), f = 0;f < c;f++) {
              b[f] = e(a);
            }
            return b;
          case 7:
            for (b = {};c = a.readUTF();) {
              b[c] = e(a);
            }
            return b;
          case 8:
            return h(a).buffer;
          case 9:
            return h(a);
          case 11:
          ;
          case 10:
            return a = h(a), new u(a.buffer, a.length, 10 === b);
          case 12:
            return new Int32Array(h(a).buffer);
        }
      }
      var r = f.ArrayUtilities.DataBuffer, u = f.ArrayUtilities.PlainObjectDataBuffer, m;
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
      })(q.MovieRecordType || (q.MovieRecordType = {}));
      m = function() {
        function e(a) {
          this._maxRecordingSize = a;
          this._recording = new r;
          this._recordingStarted = Date.now();
          this._recording.writeRawBytes(new Uint8Array([77, 83, 87, 70]));
          this._stopped = !1;
        }
        e.prototype.stop = function() {
          this._stopped = !0;
        };
        e.prototype.getRecording = function() {
          return new Blob([this._recording.getBytes()], {type:"application/octet-stream"});
        };
        e.prototype.dump = function() {
          (new v(this._recording.getBytes())).dump();
        };
        e.prototype._createRecord = function(a, b) {
          this._stopped || (this._recording.length + 8 + (b ? b.length : 0) >= this._maxRecordingSize ? (console.error("Recording limit reached"), this._stopped = !0) : (this._recording.writeInt(Date.now() - this._recordingStarted), this._recording.writeInt(a), null !== b ? (this._recording.writeInt(b.length), this._recording.writeRawBytes(b.getBytes())) : this._recording.writeInt(0)));
        };
        e.prototype.recordPlayerCommand = function(d, c, e) {
          var f = new r;
          a(f, c);
          f.writeInt(e.length);
          e.forEach(function(c) {
            c = b(c);
            a(f, c);
          });
          this._createRecord(d ? 2 : 1, f);
        };
        e.prototype.recordFrame = function() {
          this._createRecord(3, null);
        };
        e.prototype.recordFont = function(d, c) {
          var e = new r;
          e.writeInt(d);
          a(e, b(c));
          this._createRecord(4, e);
        };
        e.prototype.recordImage = function(d, c, e, f, h) {
          var l = new r;
          l.writeInt(d);
          l.writeInt(c);
          l.writeInt(e);
          a(l, b(f));
          a(l, b(h));
          this._createRecord(5, l);
        };
        e.prototype.recordFSCommand = function(a, b) {
          var e = new r;
          e.writeUTF(a);
          e.writeUTF(b || "");
          this._createRecord(6, e);
        };
        return e;
      }();
      q.MovieRecorder = m;
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
          var a = this._buffer.readInt(), b = this._buffer.readInt(), e = this._buffer.readInt(), f = null;
          0 < e && (f = new r, this._buffer.readBytes(f, 0, e));
          this.currentTimestamp = a;
          this.currentType = b;
          this.currentData = f;
          return b;
        };
        a.prototype.parsePlayerCommand = function() {
          for (var a = h(this.currentData), b = this.currentData.readInt(), e = [], f = 0;f < b;f++) {
            e.push(l(this.currentData));
          }
          return {updates:a, assets:e};
        };
        a.prototype.parseFSCommand = function() {
          var a = this.currentData.readUTF(), b = this.currentData.readUTF();
          return {command:a, args:b};
        };
        a.prototype.parseFont = function() {
          var a = this.currentData.readInt(), b = l(this.currentData);
          return {syncId:a, data:b};
        };
        a.prototype.parseImage = function() {
          var a = this.currentData.readInt(), b = this.currentData.readInt(), e = this.currentData.readInt(), f = l(this.currentData);
          return {syncId:a, symbolId:b, imageType:e, data:f};
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
  })(f.GFX || (f.GFX = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(q) {
    (function(t) {
      var a = f.ArrayUtilities.DataBuffer, w = function(f) {
        function b(a) {
          f.call(this, a);
          this.alwaysRenderFrame = this.ignoreTimestamps = !1;
          this.cpuTimeRendering = this.cpuTimeUpdates = 0;
          this.onComplete = null;
        }
        __extends(b, f);
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
          this._parser = new t.MovieRecordParser(a);
          this._lastTimestamp = 0;
          this._parseNext();
        };
        b.prototype.onSendUpdates = function(a, b) {
        };
        b.prototype.onDisplayParameters = function(a) {
        };
        b.prototype.onVideoPlaybackEvent = function(a, b, e) {
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
          var b, f = performance.now();
          switch(this._parser.currentType) {
            case 1:
            ;
            case 2:
              b = this._parser.parsePlayerCommand();
              var e = 2 === this._parser.currentType, n = a.FromArrayBuffer(b.updates.buffer);
              e ? this.processUpdates(n, b.assets) : (e = new a, this.processUpdates(n, b.assets, e));
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
          this.cpuTimeUpdates += performance.now() - f;
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
      t.PlaybackEaselHost = w;
    })(q.Test || (q.Test = {}));
  })(f.GFX || (f.GFX = {}));
})(Shumway || (Shumway = {}));
(function(f) {
  (function(q) {
    (function(q) {
      var a = function(a) {
        function f(b, h, l) {
          void 0 === l && (l = 0);
          a.call(this, b, h);
          this._recorder = null;
          this._recorder = new q.MovieRecorder(l);
        }
        __extends(f, a);
        Object.defineProperty(f.prototype, "recorder", {get:function() {
          return this._recorder;
        }, enumerable:!0, configurable:!0});
        f.prototype._onWindowMessage = function(b, f) {
          switch(b.type) {
            case "player":
              this._recorder.recordPlayerCommand(f, b.updates, b.assets);
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
          return a.prototype._onWindowMessage.call(this, b, f);
        };
        return f;
      }(f.GFX.Window.WindowEaselHost);
      q.RecordingEaselHost = a;
    })(q.Test || (q.Test = {}));
  })(f.GFX || (f.GFX = {}));
})(Shumway || (Shumway = {}));
console.timeEnd("Load GFX Dependencies");

