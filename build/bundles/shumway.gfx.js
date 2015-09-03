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
Shumway$$inline_0.version = "0.11.524";
Shumway$$inline_0.build = "65628cb";
var jsGlobal = function() {
  return this || (0,eval)("this//# sourceURL=jsGlobal-getter");
}(), inBrowser = "undefined" !== typeof window && "document" in window && "plugins" in window.document, inFirefox = "undefined" !== typeof navigator && 0 <= navigator.userAgent.indexOf("Firefox");
jsGlobal.performance || (jsGlobal.performance = {});
jsGlobal.performance.now || (jsGlobal.performance.now = function() {
  return Date.now();
});
var START_TIME = performance.now();
(function(e) {
  function m(b) {
    return (b | 0) === b;
  }
  function r(b) {
    return "object" === typeof b || "function" === typeof b;
  }
  function a(b) {
    return String(Number(b)) === b;
  }
  function w(b) {
    var l = 0;
    if ("number" === typeof b) {
      return l = b | 0, b === l && 0 <= l ? !0 : b >>> 0 === b;
    }
    if ("string" !== typeof b) {
      return !1;
    }
    var t = b.length;
    if (0 === t) {
      return !1;
    }
    if ("0" === b) {
      return !0;
    }
    if (t > e.UINT32_CHAR_BUFFER_LENGTH) {
      return !1;
    }
    var g = 0, l = b.charCodeAt(g++) - 48;
    if (1 > l || 9 < l) {
      return !1;
    }
    for (var d = 0, p = 0;g < t;) {
      p = b.charCodeAt(g++) - 48;
      if (0 > p || 9 < p) {
        return !1;
      }
      d = l;
      l = 10 * l + p;
    }
    return d < e.UINT32_MAX_DIV_10 || d === e.UINT32_MAX_DIV_10 && p <= e.UINT32_MAX_MOD_10 ? !0 : !1;
  }
  (function(b) {
    b[b._0 = 48] = "_0";
    b[b._1 = 49] = "_1";
    b[b._2 = 50] = "_2";
    b[b._3 = 51] = "_3";
    b[b._4 = 52] = "_4";
    b[b._5 = 53] = "_5";
    b[b._6 = 54] = "_6";
    b[b._7 = 55] = "_7";
    b[b._8 = 56] = "_8";
    b[b._9 = 57] = "_9";
  })(e.CharacterCodes || (e.CharacterCodes = {}));
  e.UINT32_CHAR_BUFFER_LENGTH = 10;
  e.UINT32_MAX = 4294967295;
  e.UINT32_MAX_DIV_10 = 429496729;
  e.UINT32_MAX_MOD_10 = 5;
  e.isString = function(b) {
    return "string" === typeof b;
  };
  e.isFunction = function(b) {
    return "function" === typeof b;
  };
  e.isNumber = function(b) {
    return "number" === typeof b;
  };
  e.isInteger = m;
  e.isArray = function(b) {
    return b instanceof Array;
  };
  e.isNumberOrString = function(b) {
    return "number" === typeof b || "string" === typeof b;
  };
  e.isObject = r;
  e.toNumber = function(b) {
    return +b;
  };
  e.isNumericString = a;
  e.isNumeric = function(b) {
    if ("number" === typeof b) {
      return !0;
    }
    if ("string" === typeof b) {
      var l = b.charCodeAt(0);
      return 65 <= l && 90 >= l || 97 <= l && 122 >= l || 36 === l || 95 === l ? !1 : w(b) || a(b);
    }
    return !1;
  };
  e.isIndex = w;
  e.isNullOrUndefined = function(b) {
    return void 0 == b;
  };
  e.argumentsToString = function(b) {
    for (var l = [], t = 0;t < b.length;t++) {
      var g = b[t];
      try {
        var d;
        d = "object" === typeof g && g ? "toString" in g ? g.toString() : Object.prototype.toString.call(g) : g + "";
        l.push(d);
      } catch (p) {
        l.push("<unprintable value>");
      }
    }
    return l.join(", ");
  };
  var k;
  (function(b) {
    b.error = function(g) {
      console.error(g);
      throw Error(g);
    };
    b.assert = function(g, d) {
      void 0 === d && (d = "assertion failed");
      "" === g && (g = !0);
      if (!g) {
        if ("undefined" !== typeof console && "assert" in console) {
          throw console.assert(!1, d), Error(d);
        }
        b.error(d.toString());
      }
    };
    b.assertUnreachable = function(g) {
      var d = Error().stack.split("\n")[1];
      throw Error("Reached unreachable location " + d + g);
    };
    b.assertNotImplemented = function(g, d) {
      g || b.error("notImplemented: " + d);
    };
    var l = Object.create(null);
    b.warning = function(g, d, p) {
    };
    b.warnCounts = function() {
      var g = [], d;
      for (d in l) {
        g.push({key:d, count:l[d]});
      }
      g.sort(function(d, g) {
        return g.count - d.count;
      });
      return g.reduce(function(d, g) {
        return d + ("\n" + g.count + "\t" + g.key);
      }, "");
    };
    b.notImplemented = function(g) {
    };
    b.dummyConstructor = function(g) {
    };
    b.abstractMethod = function(g) {
    };
    var t = {};
    b.somewhatImplemented = function(g) {
      t[g] || (t[g] = !0, b.warning("somewhatImplemented: " + g));
    };
    b.unexpected = function(g) {
      b.assert(!1, "Unexpected: " + g);
    };
    b.unexpectedCase = function(g) {
      b.assert(!1, "Unexpected Case: " + g);
    };
  })(k = e.Debug || (e.Debug = {}));
  e.getTicks = function() {
    return performance.now();
  };
  (function(b) {
    function l(b, g) {
      for (var d = 0, p = b.length;d < p;d++) {
        if (b[d] === g) {
          return d;
        }
      }
      b.push(g);
      return b.length - 1;
    }
    b.popManyInto = function(b, g, d) {
      for (var p = g - 1;0 <= p;p--) {
        d[p] = b.pop();
      }
      d.length = g;
    };
    b.popMany = function(b, g) {
      var d = b.length - g, p = b.slice(d, this.length);
      b.length = d;
      return p;
    };
    b.popManyIntoVoid = function(b, g) {
      b.length -= g;
    };
    b.pushMany = function(b, g) {
      for (var d = 0;d < g.length;d++) {
        b.push(g[d]);
      }
    };
    b.top = function(b) {
      return b.length && b[b.length - 1];
    };
    b.last = function(b) {
      return b.length && b[b.length - 1];
    };
    b.peek = function(b) {
      return b[b.length - 1];
    };
    b.indexOf = function(b, g) {
      for (var d = 0, p = b.length;d < p;d++) {
        if (b[d] === g) {
          return d;
        }
      }
      return -1;
    };
    b.equals = function(b, g) {
      if (b.length !== g.length) {
        return !1;
      }
      for (var d = 0;d < b.length;d++) {
        if (b[d] !== g[d]) {
          return !1;
        }
      }
      return !0;
    };
    b.pushUnique = l;
    b.unique = function(b) {
      for (var g = [], d = 0;d < b.length;d++) {
        l(g, b[d]);
      }
      return g;
    };
    b.copyFrom = function(l, g) {
      l.length = 0;
      b.pushMany(l, g);
    };
    b.ensureTypedArrayCapacity = function(b, g) {
      if (b.length < g) {
        var d = b;
        b = new b.constructor(e.IntegerUtilities.nearestPowerOfTwo(g));
        b.set(d, 0);
      }
      return b;
    };
    b.memCopy = function(b, g, d, p, y) {
      void 0 === d && (d = 0);
      void 0 === p && (p = 0);
      void 0 === y && (y = 0);
      0 < p || 0 < y && y < g.length ? (0 >= y && (y = g.length - p), b.set(g.subarray(p, p + y), d)) : b.set(g, d);
    };
  })(e.ArrayUtilities || (e.ArrayUtilities = {}));
  (function(b) {
    function l(b, g) {
      return Object.prototype.hasOwnProperty.call(b, g);
    }
    b.boxValue = function(b) {
      return void 0 == b || r(b) ? b : Object(b);
    };
    b.toKeyValueArray = function(b) {
      var g = Object.prototype.hasOwnProperty, d = [], p;
      for (p in b) {
        g.call(b, p) && d.push([p, b[p]]);
      }
      return d;
    };
    b.isPrototypeWriteable = function(b) {
      return Object.getOwnPropertyDescriptor(b, "prototype").writable;
    };
    b.hasOwnProperty = l;
    b.propertyIsEnumerable = function(b, g) {
      return Object.prototype.propertyIsEnumerable.call(b, g);
    };
    b.getPropertyDescriptor = function(b, g) {
      do {
        var d = Object.getOwnPropertyDescriptor(b, g);
        if (d) {
          return d;
        }
        b = Object.getPrototypeOf(b);
      } while (b);
      return null;
    };
    b.hasOwnGetter = function(b, g) {
      var d = Object.getOwnPropertyDescriptor(b, g);
      return !(!d || !d.get);
    };
    b.getOwnGetter = function(b, g) {
      var d = Object.getOwnPropertyDescriptor(b, g);
      return d ? d.get : null;
    };
    b.hasOwnSetter = function(b, g) {
      var d = Object.getOwnPropertyDescriptor(b, g);
      return !(!d || !d.set);
    };
    b.createMap = function() {
      return Object.create(null);
    };
    b.createArrayMap = function() {
      return [];
    };
    b.defineReadOnlyProperty = function(b, g, d) {
      Object.defineProperty(b, g, {value:d, writable:!1, configurable:!0, enumerable:!1});
    };
    b.copyProperties = function(b, g) {
      for (var d in g) {
        b[d] = g[d];
      }
    };
    b.copyOwnProperties = function(b, g) {
      for (var d in g) {
        l(g, d) && (b[d] = g[d]);
      }
    };
    b.copyOwnPropertyDescriptors = function(b, g, d, p, y) {
      void 0 === d && (d = null);
      void 0 === p && (p = !0);
      void 0 === y && (y = !1);
      for (var x in g) {
        if (l(g, x) && (!d || d(x))) {
          var a = Object.getOwnPropertyDescriptor(g, x);
          if (p || !l(b, x)) {
            try {
              y && !1 === a.writable && (a.writable = !0), Object.defineProperty(b, x, a);
            } catch (c) {
              k.assert("Can't define: " + x);
            }
          }
        }
      }
    };
    b.copyPropertiesByList = function(b, g, d) {
      for (var p = 0;p < d.length;p++) {
        var y = d[p];
        b[y] = g[y];
      }
    };
    b.defineNonEnumerableGetter = function(b, g, d) {
      Object.defineProperty(b, g, {get:d, configurable:!0, enumerable:!1});
    };
    b.defineNonEnumerableProperty = function(b, g, d) {
      Object.defineProperty(b, g, {value:d, writable:!0, configurable:!0, enumerable:!1});
    };
  })(e.ObjectUtilities || (e.ObjectUtilities = {}));
  (function(b) {
    b.makeForwardingGetter = function(b) {
      return new Function('return this["' + b + '"]//# sourceURL=fwd-get-' + b + ".as");
    };
    b.makeForwardingSetter = function(b) {
      return new Function("value", 'this["' + b + '"] = value;//# sourceURL=fwd-set-' + b + ".as");
    };
  })(e.FunctionUtilities || (e.FunctionUtilities = {}));
  (function(b) {
    function l(d) {
      return "string" === typeof d ? '"' + d + '"' : "number" === typeof d || "boolean" === typeof d ? String(d) : d instanceof Array ? "[] " + d.length : typeof d;
    }
    function a(g, p, b) {
      d[0] = g;
      d[1] = p;
      d[2] = b;
      return d.join("");
    }
    function g(d, g, b, y) {
      p[0] = d;
      p[1] = g;
      p[2] = b;
      p[3] = y;
      return p.join("");
    }
    b.repeatString = function(d, g) {
      for (var p = "", b = 0;b < g;b++) {
        p += d;
      }
      return p;
    };
    b.memorySizeToString = function(d) {
      d |= 0;
      return 1024 > d ? d + " B" : 1048576 > d ? (d / 1024).toFixed(2) + "KB" : (d / 1048576).toFixed(2) + "MB";
    };
    b.toSafeString = l;
    b.toSafeArrayString = function(d) {
      for (var g = [], p = 0;p < d.length;p++) {
        g.push(l(d[p]));
      }
      return g.join(", ");
    };
    b.utf8decode = function(d) {
      for (var g = new Uint8Array(4 * d.length), p = 0, b = 0, y = d.length;b < y;b++) {
        var l = d.charCodeAt(b);
        if (127 >= l) {
          g[p++] = l;
        } else {
          if (55296 <= l && 56319 >= l) {
            var a = d.charCodeAt(b + 1);
            56320 <= a && 57343 >= a && (l = ((l & 1023) << 10) + (a & 1023) + 65536, ++b);
          }
          0 !== (l & 4292870144) ? (g[p++] = 248 | l >>> 24 & 3, g[p++] = 128 | l >>> 18 & 63, g[p++] = 128 | l >>> 12 & 63, g[p++] = 128 | l >>> 6 & 63) : 0 !== (l & 4294901760) ? (g[p++] = 240 | l >>> 18 & 7, g[p++] = 128 | l >>> 12 & 63, g[p++] = 128 | l >>> 6 & 63) : 0 !== (l & 4294965248) ? (g[p++] = 224 | l >>> 12 & 15, g[p++] = 128 | l >>> 6 & 63) : g[p++] = 192 | l >>> 6 & 31;
          g[p++] = 128 | l & 63;
        }
      }
      return g.subarray(0, p);
    };
    b.utf8encode = function(d) {
      for (var g = 0, p = "";g < d.length;) {
        var b = d[g++] & 255;
        if (127 >= b) {
          p += String.fromCharCode(b);
        } else {
          var l = 192, y = 5;
          do {
            if ((b & (l >> 1 | 128)) === l) {
              break;
            }
            l = l >> 1 | 128;
            --y;
          } while (0 <= y);
          if (0 >= y) {
            p += String.fromCharCode(b);
          } else {
            for (var b = b & (1 << y) - 1, l = !1, a = 5;a >= y;--a) {
              var c = d[g++];
              if (128 != (c & 192)) {
                l = !0;
                break;
              }
              b = b << 6 | c & 63;
            }
            if (l) {
              for (y = g - (7 - a);y < g;++y) {
                p += String.fromCharCode(d[y] & 255);
              }
            } else {
              p = 65536 <= b ? p + String.fromCharCode(b - 65536 >> 10 & 1023 | 55296, b & 1023 | 56320) : p + String.fromCharCode(b);
            }
          }
        }
      }
      return p;
    };
    b.base64ArrayBuffer = function(d) {
      var p = "";
      d = new Uint8Array(d);
      for (var b = d.byteLength, y = b % 3, b = b - y, l, c, h, f, n = 0;n < b;n += 3) {
        f = d[n] << 16 | d[n + 1] << 8 | d[n + 2], l = (f & 16515072) >> 18, c = (f & 258048) >> 12, h = (f & 4032) >> 6, f &= 63, p += g("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[l], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[c], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[h], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[f]);
      }
      1 == y ? (f = d[b], p += a("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(f & 252) >> 2], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(f & 3) << 4], "==")) : 2 == y && (f = d[b] << 8 | d[b + 1], p += g("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(f & 64512) >> 10], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(f & 1008) >> 4], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(f & 15) << 
      2], "="));
      return p;
    };
    b.escapeString = function(d) {
      void 0 !== d && (d = d.replace(/[^\w$]/gi, "$"), /^\d/.test(d) && (d = "$" + d));
      return d;
    };
    b.fromCharCodeArray = function(d) {
      for (var g = "", p = 0;p < d.length;p += 16384) {
        var b = Math.min(d.length - p, 16384), g = g + String.fromCharCode.apply(null, d.subarray(p, p + b))
      }
      return g;
    };
    b.variableLengthEncodeInt32 = function(d) {
      for (var g = 32 - Math.clz32(d), p = Math.ceil(g / 6), g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[p], p = p - 1;0 <= p;p--) {
        g += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[d >> 6 * p & 63];
      }
      return g;
    };
    b.toEncoding = function(d) {
      return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[d];
    };
    b.fromEncoding = function(d) {
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
    b.variableLengthDecodeInt32 = function(d) {
      for (var g = b.fromEncoding(d.charCodeAt(0)), p = 0, y = 0;y < g;y++) {
        var l = 6 * (g - y - 1), p = p | b.fromEncoding(d.charCodeAt(1 + y)) << l
      }
      return p;
    };
    b.trimMiddle = function(d, g) {
      if (d.length <= g) {
        return d;
      }
      var p = g >> 1, b = g - p - 1;
      return d.substr(0, p) + "\u2026" + d.substr(d.length - b, b);
    };
    b.multiple = function(d, g) {
      for (var p = "", b = 0;b < g;b++) {
        p += d;
      }
      return p;
    };
    b.indexOfAny = function(d, g, p) {
      for (var b = d.length, y = 0;y < g.length;y++) {
        var l = d.indexOf(g[y], p);
        0 <= l && (b = Math.min(b, l));
      }
      return b === d.length ? -1 : b;
    };
    var d = Array(3), p = Array(4), y = Array(9);
    b.concat3 = a;
    b.concat4 = g;
    b.concat9 = function(d, g, p, b, l, a, c, t, h) {
      y[0] = d;
      y[1] = g;
      y[2] = p;
      y[3] = b;
      y[4] = l;
      y[5] = a;
      y[6] = c;
      y[7] = t;
      y[8] = h;
      return y.join("");
    };
  })(e.StringUtilities || (e.StringUtilities = {}));
  (function(b) {
    var l = new Uint8Array([7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21]), a = new Int32Array([-680876936, -389564586, 606105819, -1044525330, -176418897, 1200080426, -1473231341, -45705983, 1770035416, -1958414417, -42063, -1990404162, 1804603682, -40341101, -1502002290, 1236535329, -165796510, -1069501632, 
    643717713, -373897302, -701558691, 38016083, -660478335, -405537848, 568446438, -1019803690, -187363961, 1163531501, -1444681467, -51403784, 1735328473, -1926607734, -378558, -2022574463, 1839030562, -35309556, -1530992060, 1272893353, -155497632, -1094730640, 681279174, -358537222, -722521979, 76029189, -640364487, -421815835, 530742520, -995338651, -198630844, 1126891415, -1416354905, -57434055, 1700485571, -1894986606, -1051523, -2054922799, 1873313359, -30611744, -1560198380, 1309151649, 
    -145523070, -1120210379, 718787259, -343485551]);
    b.hashBytesTo32BitsMD5 = function(g, d, p) {
      var b = 1732584193, x = -271733879, c = -1732584194, h = 271733878, f = p + 72 & -64, n = new Uint8Array(f), k;
      for (k = 0;k < p;++k) {
        n[k] = g[d++];
      }
      n[k++] = 128;
      for (g = f - 8;k < g;) {
        n[k++] = 0;
      }
      n[k++] = p << 3 & 255;
      n[k++] = p >> 5 & 255;
      n[k++] = p >> 13 & 255;
      n[k++] = p >> 21 & 255;
      n[k++] = p >>> 29 & 255;
      n[k++] = 0;
      n[k++] = 0;
      n[k++] = 0;
      g = new Int32Array(16);
      for (k = 0;k < f;) {
        for (p = 0;16 > p;++p, k += 4) {
          g[p] = n[k] | n[k + 1] << 8 | n[k + 2] << 16 | n[k + 3] << 24;
        }
        var q = b;
        d = x;
        var v = c, u = h, e, w;
        for (p = 0;64 > p;++p) {
          16 > p ? (e = d & v | ~d & u, w = p) : 32 > p ? (e = u & d | ~u & v, w = 5 * p + 1 & 15) : 48 > p ? (e = d ^ v ^ u, w = 3 * p + 5 & 15) : (e = v ^ (d | ~u), w = 7 * p & 15);
          var m = u, q = q + e + a[p] + g[w] | 0;
          e = l[p];
          u = v;
          v = d;
          d = d + (q << e | q >>> 32 - e) | 0;
          q = m;
        }
        b = b + q | 0;
        x = x + d | 0;
        c = c + v | 0;
        h = h + u | 0;
      }
      return b;
    };
    b.mixHash = function(g, d) {
      return (31 * g | 0) + d | 0;
    };
  })(e.HashUtilities || (e.HashUtilities = {}));
  var c = function() {
    function b(b) {
      this._data = Object.create(null);
      this._size = 0;
      this._maxSize = b;
    }
    b.prototype.get = function(b) {
      return this._data[b];
    };
    b.prototype.set = function(b, a) {
      if (this._size >= this._maxSize) {
        return !1;
      }
      this._data[b] = a;
      this._size++;
      return !0;
    };
    return b;
  }();
  e.Cache = c;
  var h = function() {
    function b() {
    }
    b.seed = function(l) {
      b._state[0] = l;
      b._state[1] = l;
    };
    b.reset = function() {
      b._state[0] = 57005;
      b._state[1] = 48879;
    };
    b.next = function() {
      var b = this._state, a = Math.imul(18273, b[0] & 65535) + (b[0] >>> 16) | 0;
      b[0] = a;
      var g = Math.imul(36969, b[1] & 65535) + (b[1] >>> 16) | 0;
      b[1] = g;
      b = (a << 16) + (g & 65535) | 0;
      return 2.3283064365386963E-10 * (0 > b ? b + 4294967296 : b);
    };
    b._state = new Uint32Array([57005, 48879]);
    return b;
  }();
  e.Random = h;
  Math.random = function() {
    return h.next();
  };
  e.installTimeWarper = function() {
    var b = Date, l = 1428107694580;
    jsGlobal.Date = function(a, g, d, p, y, x, c) {
      switch(arguments.length) {
        case 0:
          return new b(l);
        case 1:
          return new b(a);
        case 2:
          return new b(a, g);
        case 3:
          return new b(a, g, d);
        case 4:
          return new b(a, g, d, p);
        case 5:
          return new b(a, g, d, p, y);
        case 6:
          return new b(a, g, d, p, y, x);
        default:
          return new b(a, g, d, p, y, x, c);
      }
    };
    jsGlobal.Date.now = function() {
      return l += 10;
    };
    jsGlobal.Date.UTC = function() {
      return b.UTC.apply(b, arguments);
    };
  };
  (function() {
    function b() {
      this.id = "$weakmap" + l++;
    }
    if ("function" !== typeof jsGlobal.WeakMap) {
      var l = 0;
      b.prototype = {has:function(b) {
        return b.hasOwnProperty(this.id);
      }, get:function(b, g) {
        return b.hasOwnProperty(this.id) ? b[this.id] : g;
      }, set:function(b, g) {
        Object.defineProperty(b, this.id, {value:g, enumerable:!1, configurable:!0});
      }, delete:function(b) {
        delete b[this.id];
      }};
      jsGlobal.WeakMap = b;
    }
  })();
  var n = function() {
    function b() {
      "undefined" !== typeof ShumwayCom && ShumwayCom.getWeakMapKeys ? (this._map = new WeakMap, this._id = 0, this._newAdditions = []) : this._list = [];
    }
    b.prototype.clear = function() {
      this._map ? this._map.clear() : this._list.length = 0;
    };
    b.prototype.push = function(b) {
      this._map ? (this._map.set(b, this._id++), this._newAdditions.forEach(function(a) {
        a.push(b);
      })) : this._list.push(b);
    };
    b.prototype.remove = function(b) {
      this._map ? this._map.delete(b) : this._list[this._list.indexOf(b)] = null;
    };
    b.prototype.forEach = function(b) {
      if (this._map) {
        var a = [];
        this._newAdditions.push(a);
        var g = this._map, d = ShumwayCom.getWeakMapKeys(g);
        d.sort(function(d, p) {
          return g.get(d) - g.get(p);
        });
        d.forEach(function(d) {
          0 !== d._referenceCount && b(d);
        });
        a.forEach(function(d) {
          0 !== d._referenceCount && b(d);
        });
        this._newAdditions.splice(this._newAdditions.indexOf(a), 1);
      } else {
        for (var a = this._list, p = 0, d = 0;d < a.length;d++) {
          var y = a[d];
          y && (0 === y._referenceCount ? (a[d] = null, p++) : b(y));
        }
        if (16 < p && p > a.length >> 2) {
          p = [];
          for (d = 0;d < a.length;d++) {
            (y = a[d]) && 0 < y._referenceCount && p.push(y);
          }
          this._list = p;
        }
      }
    };
    Object.defineProperty(b.prototype, "length", {get:function() {
      return this._map ? -1 : this._list.length;
    }, enumerable:!0, configurable:!0});
    return b;
  }();
  e.WeakList = n;
  var f;
  (function(b) {
    b.pow2 = function(b) {
      return b === (b | 0) ? 0 > b ? 1 / (1 << -b) : 1 << b : Math.pow(2, b);
    };
    b.clamp = function(b, a, g) {
      return Math.max(a, Math.min(g, b));
    };
    b.roundHalfEven = function(b) {
      if (.5 === Math.abs(b % 1)) {
        var a = Math.floor(b);
        return 0 === a % 2 ? a : Math.ceil(b);
      }
      return Math.round(b);
    };
    b.altTieBreakRound = function(b, a) {
      return .5 !== Math.abs(b % 1) || a ? Math.round(b) : b | 0;
    };
    b.epsilonEquals = function(b, a) {
      return 1E-7 > Math.abs(b - a);
    };
  })(f = e.NumberUtilities || (e.NumberUtilities = {}));
  (function(b) {
    b[b.MaxU16 = 65535] = "MaxU16";
    b[b.MaxI16 = 32767] = "MaxI16";
    b[b.MinI16 = -32768] = "MinI16";
  })(e.Numbers || (e.Numbers = {}));
  var v;
  (function(b) {
    function a(d) {
      return 256 * d << 16 >> 16;
    }
    function c(d) {
      return d / 256;
    }
    var g = new ArrayBuffer(8);
    b.i8 = new Int8Array(g);
    b.u8 = new Uint8Array(g);
    b.i32 = new Int32Array(g);
    b.f32 = new Float32Array(g);
    b.f64 = new Float64Array(g);
    b.nativeLittleEndian = 1 === (new Int8Array((new Int32Array([1])).buffer))[0];
    b.floatToInt32 = function(d) {
      b.f32[0] = d;
      return b.i32[0];
    };
    b.int32ToFloat = function(d) {
      b.i32[0] = d;
      return b.f32[0];
    };
    b.swap16 = function(d) {
      return (d & 255) << 8 | d >> 8 & 255;
    };
    b.swap32 = function(d) {
      return (d & 255) << 24 | (d & 65280) << 8 | d >> 8 & 65280 | d >> 24 & 255;
    };
    b.toS8U8 = a;
    b.fromS8U8 = c;
    b.clampS8U8 = function(d) {
      return c(a(d));
    };
    b.toS16 = function(d) {
      return d << 16 >> 16;
    };
    b.bitCount = function(d) {
      d -= d >> 1 & 1431655765;
      d = (d & 858993459) + (d >> 2 & 858993459);
      return 16843009 * (d + (d >> 4) & 252645135) >> 24;
    };
    b.ones = function(d) {
      d -= d >> 1 & 1431655765;
      d = (d & 858993459) + (d >> 2 & 858993459);
      return 16843009 * (d + (d >> 4) & 252645135) >> 24;
    };
    b.trailingZeros = function(d) {
      return b.ones((d & -d) - 1);
    };
    b.getFlags = function(d, g) {
      var b = "";
      for (d = 0;d < g.length;d++) {
        d & 1 << d && (b += g[d] + " ");
      }
      return 0 === b.length ? "" : b.trim();
    };
    b.isPowerOfTwo = function(d) {
      return d && 0 === (d & d - 1);
    };
    b.roundToMultipleOfFour = function(d) {
      return d + 3 & -4;
    };
    b.nearestPowerOfTwo = function(d) {
      d--;
      d |= d >> 1;
      d |= d >> 2;
      d |= d >> 4;
      d |= d >> 8;
      d |= d >> 16;
      d++;
      return d;
    };
    b.roundToMultipleOfPowerOfTwo = function(d, g) {
      var b = (1 << g) - 1;
      return d + b & ~b;
    };
    b.toHEX = function(d) {
      return "0x" + ("00000000" + (0 > d ? 4294967295 + d + 1 : d).toString(16)).substr(-8);
    };
    Math.imul || (Math.imul = function(d, g) {
      var b = d & 65535, x = g & 65535;
      return b * x + ((d >>> 16 & 65535) * x + b * (g >>> 16 & 65535) << 16 >>> 0) | 0;
    });
    Math.clz32 || (Math.clz32 = function(d) {
      d |= d >> 1;
      d |= d >> 2;
      d |= d >> 4;
      d |= d >> 8;
      return 32 - b.ones(d | d >> 16);
    });
  })(v = e.IntegerUtilities || (e.IntegerUtilities = {}));
  (function(b) {
    b[b.Error = 1] = "Error";
    b[b.Warn = 2] = "Warn";
    b[b.Debug = 4] = "Debug";
    b[b.Log = 8] = "Log";
    b[b.Info = 16] = "Info";
    b[b.All = 31] = "All";
  })(e.LogLevel || (e.LogLevel = {}));
  n = function() {
    function b(a, c) {
      void 0 === a && (a = !1);
      this._tab = "  ";
      this._padding = "";
      this._suppressOutput = a;
      this._out = c || b._consoleOut;
      this._outNoNewline = c || b._consoleOutNoNewline;
    }
    Object.defineProperty(b.prototype, "suppressOutput", {get:function() {
      return this._suppressOutput;
    }, set:function(b) {
      this._suppressOutput = b;
    }, enumerable:!0, configurable:!0});
    b.prototype.write = function(b, a) {
      void 0 === b && (b = "");
      void 0 === a && (a = !1);
      this._suppressOutput || this._outNoNewline((a ? this._padding : "") + b);
    };
    b.prototype.writeLn = function(b) {
      void 0 === b && (b = "");
      this._suppressOutput || this._out(this._padding + b);
    };
    b.prototype.writeObject = function(b, a) {
      void 0 === b && (b = "");
      this._suppressOutput || this._out(this._padding + b, a);
    };
    b.prototype.writeTimeLn = function(b) {
      void 0 === b && (b = "");
      this._suppressOutput || this._out(this._padding + performance.now().toFixed(2) + " " + b);
    };
    b.prototype.writeComment = function(b) {
      b = (b || "").split("\n");
      if (1 === b.length) {
        this.writeLn("// " + b[0]);
      } else {
        this.writeLn("/**");
        for (var a = 0;a < b.length;a++) {
          this.writeLn(" * " + b[a]);
        }
        this.writeLn(" */");
      }
    };
    b.prototype.writeLns = function(b) {
      b = (b || "").split("\n");
      for (var a = 0;a < b.length;a++) {
        this.writeLn(b[a]);
      }
    };
    b.prototype.errorLn = function(a) {
      b.logLevel & 1 && this.boldRedLn(a);
    };
    b.prototype.warnLn = function(a) {
      b.logLevel & 2 && this.yellowLn(a);
    };
    b.prototype.debugLn = function(a) {
      b.logLevel & 4 && this.purpleLn(a);
    };
    b.prototype.logLn = function(a) {
      b.logLevel & 8 && this.writeLn(a);
    };
    b.prototype.infoLn = function(a) {
      b.logLevel & 16 && this.writeLn(a);
    };
    b.prototype.yellowLn = function(a) {
      this.colorLn(b.YELLOW, a);
    };
    b.prototype.greenLn = function(a) {
      this.colorLn(b.GREEN, a);
    };
    b.prototype.boldRedLn = function(a) {
      this.colorLn(b.BOLD_RED, a);
    };
    b.prototype.redLn = function(a) {
      this.colorLn(b.RED, a);
    };
    b.prototype.purpleLn = function(a) {
      this.colorLn(b.PURPLE, a);
    };
    b.prototype.colorLn = function(a, c) {
      this._suppressOutput || (inBrowser ? this._out(this._padding + c) : this._out(this._padding + a + c + b.ENDC));
    };
    b.prototype.redLns = function(a) {
      this.colorLns(b.RED, a);
    };
    b.prototype.colorLns = function(b, a) {
      for (var g = (a || "").split("\n"), d = 0;d < g.length;d++) {
        this.colorLn(b, g[d]);
      }
    };
    b.prototype.enter = function(b) {
      this._suppressOutput || this._out(this._padding + b);
      this.indent();
    };
    b.prototype.leaveAndEnter = function(b) {
      this.leave(b);
      this.indent();
    };
    b.prototype.leave = function(b) {
      this.outdent();
      !this._suppressOutput && b && this._out(this._padding + b);
    };
    b.prototype.indent = function() {
      this._padding += this._tab;
    };
    b.prototype.outdent = function() {
      0 < this._padding.length && (this._padding = this._padding.substring(0, this._padding.length - this._tab.length));
    };
    b.prototype.writeArray = function(b, a, g) {
      void 0 === a && (a = !1);
      void 0 === g && (g = !1);
      a = a || !1;
      for (var d = 0, p = b.length;d < p;d++) {
        var y = "";
        a && (y = null === b[d] ? "null" : void 0 === b[d] ? "undefined" : b[d].constructor.name, y += " ");
        var x = g ? "" : ("" + d).padRight(" ", 4);
        this.writeLn(x + y + b[d]);
      }
    };
    b.PURPLE = "\u001b[94m";
    b.YELLOW = "\u001b[93m";
    b.GREEN = "\u001b[92m";
    b.RED = "\u001b[91m";
    b.BOLD_RED = "\u001b[1;91m";
    b.ENDC = "\u001b[0m";
    b.logLevel = 31;
    b._consoleOut = console.log.bind(console);
    b._consoleOutNoNewline = console.log.bind(console);
    return b;
  }();
  e.IndentingWriter = n;
  n = function() {
    function b(b, a) {
      void 0 === a && (a = 12);
      this.start = this.index = 0;
      this._size = 1 << a;
      this._mask = this._size - 1;
      this.array = new b(this._size);
    }
    b.prototype.get = function(b) {
      return this.array[b];
    };
    b.prototype.forEachInReverse = function(b) {
      if (!this.isEmpty()) {
        for (var a = 0 === this.index ? this._size - 1 : this.index - 1, g = this.start - 1 & this._mask;a !== g && !b(this.array[a], a);) {
          a = 0 === a ? this._size - 1 : a - 1;
        }
      }
    };
    b.prototype.write = function(b) {
      this.array[this.index] = b;
      this.index = this.index + 1 & this._mask;
      this.index === this.start && (this.start = this.start + 1 & this._mask);
    };
    b.prototype.isFull = function() {
      return (this.index + 1 & this._mask) === this.start;
    };
    b.prototype.isEmpty = function() {
      return this.index === this.start;
    };
    b.prototype.reset = function() {
      this.start = this.index = 0;
    };
    return b;
  }();
  e.CircularBuffer = n;
  n = function() {
    function b() {
    }
    b.randomStyle = function() {
      b._randomStyleCache || (b._randomStyleCache = "#ff5e3a #ff9500 #ffdb4c #87fc70 #52edc7 #1ad6fd #c644fc #ef4db6 #4a4a4a #dbddde #ff3b30 #ff9500 #ffcc00 #4cd964 #34aadc #007aff #5856d6 #ff2d55 #8e8e93 #c7c7cc #5ad427 #c86edf #d1eefc #e0f8d8 #fb2b69 #f7f7f7 #1d77ef #d6cec3 #55efcb #ff4981 #ffd3e0 #f7f7f7 #ff1300 #1f1f21 #bdbec2 #ff3a2d".split(" "));
      return b._randomStyleCache[b._nextStyle++ % b._randomStyleCache.length];
    };
    b.gradientColor = function(a) {
      return b._gradient[b._gradient.length * f.clamp(a, 0, 1) | 0];
    };
    b.contrastStyle = function(b) {
      b = parseInt(b.substr(1), 16);
      return 128 <= (299 * (b >> 16) + 587 * (b >> 8 & 255) + 114 * (b & 255)) / 1E3 ? "#000000" : "#ffffff";
    };
    b.reset = function() {
      b._nextStyle = 0;
    };
    b.TabToolbar = "#252c33";
    b.Toolbars = "#343c45";
    b.HighlightBlue = "#1d4f73";
    b.LightText = "#f5f7fa";
    b.ForegroundText = "#b6babf";
    b.Black = "#000000";
    b.VeryDark = "#14171a";
    b.Dark = "#181d20";
    b.Light = "#a9bacb";
    b.Grey = "#8fa1b2";
    b.DarkGrey = "#5f7387";
    b.Blue = "#46afe3";
    b.Purple = "#6b7abb";
    b.Pink = "#df80ff";
    b.Red = "#eb5368";
    b.Orange = "#d96629";
    b.LightOrange = "#d99b28";
    b.Green = "#70bf53";
    b.BlueGrey = "#5e88b0";
    b._nextStyle = 0;
    b._gradient = "#FF0000 #FF1100 #FF2300 #FF3400 #FF4600 #FF5700 #FF6900 #FF7B00 #FF8C00 #FF9E00 #FFAF00 #FFC100 #FFD300 #FFE400 #FFF600 #F7FF00 #E5FF00 #D4FF00 #C2FF00 #B0FF00 #9FFF00 #8DFF00 #7CFF00 #6AFF00 #58FF00 #47FF00 #35FF00 #24FF00 #12FF00 #00FF00".split(" ");
    return b;
  }();
  e.ColorStyle = n;
  n = function() {
    function b(b, a, g, d) {
      this.xMin = b | 0;
      this.yMin = a | 0;
      this.xMax = g | 0;
      this.yMax = d | 0;
    }
    b.FromUntyped = function(a) {
      return new b(a.xMin, a.yMin, a.xMax, a.yMax);
    };
    b.FromRectangle = function(a) {
      return new b(20 * a.x | 0, 20 * a.y | 0, 20 * (a.x + a.width) | 0, 20 * (a.y + a.height) | 0);
    };
    b.prototype.setElements = function(b, a, g, d) {
      this.xMin = b;
      this.yMin = a;
      this.xMax = g;
      this.yMax = d;
    };
    b.prototype.copyFrom = function(b) {
      this.setElements(b.xMin, b.yMin, b.xMax, b.yMax);
    };
    b.prototype.contains = function(b, a) {
      return b < this.xMin !== b < this.xMax && a < this.yMin !== a < this.yMax;
    };
    b.prototype.unionInPlace = function(b) {
      b.isEmpty() || (this.extendByPoint(b.xMin, b.yMin), this.extendByPoint(b.xMax, b.yMax));
    };
    b.prototype.extendByPoint = function(b, a) {
      this.extendByX(b);
      this.extendByY(a);
    };
    b.prototype.extendByX = function(b) {
      134217728 === this.xMin ? this.xMin = this.xMax = b : (this.xMin = Math.min(this.xMin, b), this.xMax = Math.max(this.xMax, b));
    };
    b.prototype.extendByY = function(b) {
      134217728 === this.yMin ? this.yMin = this.yMax = b : (this.yMin = Math.min(this.yMin, b), this.yMax = Math.max(this.yMax, b));
    };
    b.prototype.intersects = function(b) {
      return this.contains(b.xMin, b.yMin) || this.contains(b.xMax, b.yMax);
    };
    b.prototype.isEmpty = function() {
      return this.xMax <= this.xMin || this.yMax <= this.yMin;
    };
    Object.defineProperty(b.prototype, "width", {get:function() {
      return this.xMax - this.xMin;
    }, set:function(b) {
      this.xMax = this.xMin + b;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "height", {get:function() {
      return this.yMax - this.yMin;
    }, set:function(b) {
      this.yMax = this.yMin + b;
    }, enumerable:!0, configurable:!0});
    b.prototype.getBaseWidth = function(b) {
      var a = Math.abs(Math.cos(b));
      b = Math.abs(Math.sin(b));
      return a * (this.xMax - this.xMin) + b * (this.yMax - this.yMin);
    };
    b.prototype.getBaseHeight = function(b) {
      var a = Math.abs(Math.cos(b));
      return Math.abs(Math.sin(b)) * (this.xMax - this.xMin) + a * (this.yMax - this.yMin);
    };
    b.prototype.setEmpty = function() {
      this.xMin = this.yMin = this.xMax = this.yMax = 0;
    };
    b.prototype.setToSentinels = function() {
      this.xMin = this.yMin = this.xMax = this.yMax = 134217728;
    };
    b.prototype.clone = function() {
      return new b(this.xMin, this.yMin, this.xMax, this.yMax);
    };
    b.prototype.toString = function() {
      return "{ xMin: " + this.xMin + ", xMin: " + this.yMin + ", xMax: " + this.xMax + ", xMax: " + this.yMax + " }";
    };
    return b;
  }();
  e.Bounds = n;
  n = function() {
    function b(b, a, g, d) {
      k.assert(m(b));
      k.assert(m(a));
      k.assert(m(g));
      k.assert(m(d));
      this._xMin = b | 0;
      this._yMin = a | 0;
      this._xMax = g | 0;
      this._yMax = d | 0;
    }
    b.FromUntyped = function(a) {
      return new b(a.xMin, a.yMin, a.xMax, a.yMax);
    };
    b.FromRectangle = function(a) {
      return new b(20 * a.x | 0, 20 * a.y | 0, 20 * (a.x + a.width) | 0, 20 * (a.y + a.height) | 0);
    };
    b.prototype.setElements = function(b, a, g, d) {
      this.xMin = b;
      this.yMin = a;
      this.xMax = g;
      this.yMax = d;
    };
    b.prototype.copyFrom = function(b) {
      this.setElements(b.xMin, b.yMin, b.xMax, b.yMax);
    };
    b.prototype.contains = function(b, a) {
      return b < this.xMin !== b < this.xMax && a < this.yMin !== a < this.yMax;
    };
    b.prototype.unionInPlace = function(b) {
      b.isEmpty() || (this.extendByPoint(b.xMin, b.yMin), this.extendByPoint(b.xMax, b.yMax));
    };
    b.prototype.extendByPoint = function(b, a) {
      this.extendByX(b);
      this.extendByY(a);
    };
    b.prototype.extendByX = function(b) {
      134217728 === this.xMin ? this.xMin = this.xMax = b : (this.xMin = Math.min(this.xMin, b), this.xMax = Math.max(this.xMax, b));
    };
    b.prototype.extendByY = function(b) {
      134217728 === this.yMin ? this.yMin = this.yMax = b : (this.yMin = Math.min(this.yMin, b), this.yMax = Math.max(this.yMax, b));
    };
    b.prototype.intersects = function(b) {
      return this.contains(b._xMin, b._yMin) || this.contains(b._xMax, b._yMax);
    };
    b.prototype.isEmpty = function() {
      return this._xMax <= this._xMin || this._yMax <= this._yMin;
    };
    Object.defineProperty(b.prototype, "xMin", {get:function() {
      return this._xMin;
    }, set:function(b) {
      k.assert(m(b));
      this._xMin = b;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "yMin", {get:function() {
      return this._yMin;
    }, set:function(b) {
      k.assert(m(b));
      this._yMin = b | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "xMax", {get:function() {
      return this._xMax;
    }, set:function(b) {
      k.assert(m(b));
      this._xMax = b | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "width", {get:function() {
      return this._xMax - this._xMin;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "yMax", {get:function() {
      return this._yMax;
    }, set:function(b) {
      k.assert(m(b));
      this._yMax = b | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "height", {get:function() {
      return this._yMax - this._yMin;
    }, enumerable:!0, configurable:!0});
    b.prototype.getBaseWidth = function(b) {
      var a = Math.abs(Math.cos(b));
      b = Math.abs(Math.sin(b));
      return a * (this._xMax - this._xMin) + b * (this._yMax - this._yMin);
    };
    b.prototype.getBaseHeight = function(b) {
      var a = Math.abs(Math.cos(b));
      return Math.abs(Math.sin(b)) * (this._xMax - this._xMin) + a * (this._yMax - this._yMin);
    };
    b.prototype.setEmpty = function() {
      this._xMin = this._yMin = this._xMax = this._yMax = 0;
    };
    b.prototype.clone = function() {
      return new b(this.xMin, this.yMin, this.xMax, this.yMax);
    };
    b.prototype.toString = function() {
      return "{ xMin: " + this._xMin + ", yMin: " + this._yMin + ", xMax: " + this._xMax + ", yMax: " + this._yMax + " }";
    };
    b.prototype.assertValid = function() {
    };
    return b;
  }();
  e.DebugBounds = n;
  n = function() {
    function b(b, a, g, d) {
      this.r = b;
      this.g = a;
      this.b = g;
      this.a = d;
    }
    b.FromARGB = function(a) {
      return new b((a >> 16 & 255) / 255, (a >> 8 & 255) / 255, (a >> 0 & 255) / 255, (a >> 24 & 255) / 255);
    };
    b.FromRGBA = function(a) {
      return b.FromARGB(u.RGBAToARGB(a));
    };
    b.prototype.toRGBA = function() {
      return 255 * this.r << 24 | 255 * this.g << 16 | 255 * this.b << 8 | 255 * this.a;
    };
    b.prototype.toCSSStyle = function() {
      return u.rgbaToCSSStyle(this.toRGBA());
    };
    b.prototype.set = function(b) {
      this.r = b.r;
      this.g = b.g;
      this.b = b.b;
      this.a = b.a;
    };
    b.randomColor = function(a) {
      void 0 === a && (a = 1);
      return new b(Math.random(), Math.random(), Math.random(), a);
    };
    b.parseColor = function(a) {
      b.colorCache || (b.colorCache = Object.create(null));
      if (b.colorCache[a]) {
        return b.colorCache[a];
      }
      var c = document.createElement("span");
      document.body.appendChild(c);
      c.style.backgroundColor = a;
      var g = getComputedStyle(c).backgroundColor;
      document.body.removeChild(c);
      (c = /^rgb\((\d+), (\d+), (\d+)\)$/.exec(g)) || (c = /^rgba\((\d+), (\d+), (\d+), ([\d.]+)\)$/.exec(g));
      g = new b(0, 0, 0, 0);
      g.r = parseFloat(c[1]) / 255;
      g.g = parseFloat(c[2]) / 255;
      g.b = parseFloat(c[3]) / 255;
      g.a = c[4] ? parseFloat(c[4]) / 255 : 1;
      return b.colorCache[a] = g;
    };
    b.Red = new b(1, 0, 0, 1);
    b.Green = new b(0, 1, 0, 1);
    b.Blue = new b(0, 0, 1, 1);
    b.None = new b(0, 0, 0, 0);
    b.White = new b(1, 1, 1, 1);
    b.Black = new b(0, 0, 0, 1);
    b.colorCache = {};
    return b;
  }();
  e.Color = n;
  var u;
  (function(b) {
    function a(d) {
      var g = d >> 0 & 255, b = d >> 8 & 255, p = d >> 24 & 255;
      d = (Math.imul(d >> 16 & 255, p) + 127) / 255 | 0;
      b = (Math.imul(b, p) + 127) / 255 | 0;
      g = (Math.imul(g, p) + 127) / 255 | 0;
      return p << 24 | d << 16 | b << 8 | g;
    }
    function h() {
      if (!p) {
        p = new Uint8Array(65536);
        for (var d = 0;256 > d;d++) {
          for (var g = 0;256 > g;g++) {
            p[(g << 8) + d] = Math.imul(255, d) / g;
          }
        }
      }
    }
    b.RGBAToARGB = function(d) {
      return d >> 8 & 16777215 | (d & 255) << 24;
    };
    b.ARGBToRGBA = function(d) {
      return d << 8 | d >> 24 & 255;
    };
    var g = new c(1024);
    b.rgbaToCSSStyle = function(d) {
      var b = g.get(d);
      if ("string" === typeof b) {
        return b;
      }
      b = e.StringUtilities.concat9("rgba(", d >> 24 & 255, ",", d >> 16 & 255, ",", d >> 8 & 255, ",", (d & 255) / 255, ")");
      g.set(d, b);
      return b;
    };
    var d = new c(1024);
    b.cssStyleToRGBA = function(g) {
      var b = d.get(g);
      if ("number" === typeof b) {
        return b;
      }
      b = 4278190335;
      if ("#" === g[0]) {
        7 === g.length && (b = parseInt(g.substring(1), 16) << 8 | 255);
      } else {
        if ("r" === g[0]) {
          var p = g.substring(5, g.length - 1).split(","), b = parseInt(p[0]), a = parseInt(p[1]), y = parseInt(p[2]), p = parseFloat(p[3]), b = (b & 255) << 24 | (a & 255) << 16 | (y & 255) << 8 | 255 * p & 255
        }
      }
      d.set(g, b);
      return b;
    };
    b.hexToRGB = function(d) {
      return parseInt(d.slice(1), 16);
    };
    b.rgbToHex = function(d) {
      return "#" + ("000000" + (d >>> 0).toString(16)).slice(-6);
    };
    b.isValidHexColor = function(d) {
      return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(d);
    };
    b.clampByte = function(d) {
      return Math.max(0, Math.min(255, d));
    };
    b.unpremultiplyARGB = function(d) {
      var g = d >> 0 & 255, b = d >> 8 & 255, p = d >> 24 & 255;
      d = Math.imul(255, d >> 16 & 255) / p & 255;
      b = Math.imul(255, b) / p & 255;
      g = Math.imul(255, g) / p & 255;
      return p << 24 | d << 16 | b << 8 | g;
    };
    b.premultiplyARGB = a;
    var p;
    b.ensureUnpremultiplyTable = h;
    b.getUnpremultiplyTable = function() {
      h();
      return p;
    };
    b.tableLookupUnpremultiplyARGB = function(d) {
      d |= 0;
      var g = d >> 24 & 255;
      if (0 === g) {
        return 0;
      }
      if (255 === g) {
        return d;
      }
      var b, a, y = g << 8, c = p;
      a = c[y + (d >> 16 & 255)];
      b = c[y + (d >> 8 & 255)];
      d = c[y + (d >> 0 & 255)];
      return g << 24 | a << 16 | b << 8 | d;
    };
    b.blendPremultipliedBGRA = function(d, g) {
      var b = g & 16711935, p = g >> 8 & 16711935, a, y = d >> 8 & 16711935, c = 256 - (g & 255);
      a = Math.imul(d & 16711935, c) >> 8;
      y = Math.imul(y, c) >> 8;
      return (p + y & 16711935) << 8 | b + a & 16711935;
    };
    var y = v.swap32;
    b.convertImage = function(d, g, b, c) {
      var h = b.length;
      if (d === g) {
        if (b !== c) {
          for (d = 0;d < h;d++) {
            c[d] = b[d];
          }
        }
      } else {
        if (1 === d && 3 === g) {
          for (e.ColorUtilities.ensureUnpremultiplyTable(), d = 0;d < h;d++) {
            var t = b[d];
            g = t & 255;
            if (0 === g) {
              c[d] = 0;
            } else {
              if (255 === g) {
                c[d] = 4278190080 | t >> 8 & 16777215;
              } else {
                var f = t >> 24 & 255, n = t >> 16 & 255, t = t >> 8 & 255, v = g << 8, u = p, t = u[v + t], n = u[v + n], f = u[v + f];
                c[d] = g << 24 | f << 16 | n << 8 | t;
              }
            }
          }
        } else {
          if (2 === d && 3 === g) {
            for (d = 0;d < h;d++) {
              c[d] = y(b[d]);
            }
          } else {
            if (3 === d && 1 === g) {
              for (d = 0;d < h;d++) {
                g = b[d], c[d] = y(a(g & 4278255360 | g >> 16 & 255 | (g & 255) << 16));
              }
            } else {
              for (k.somewhatImplemented("Image Format Conversion: " + q[d] + " -> " + q[g]), d = 0;d < h;d++) {
                c[d] = b[d];
              }
            }
          }
        }
      }
    };
  })(u = e.ColorUtilities || (e.ColorUtilities = {}));
  n = function() {
    function b(b) {
      void 0 === b && (b = 32);
      this._list = [];
      this._maxSize = b;
    }
    b.prototype.acquire = function(a) {
      if (b._enabled) {
        for (var c = this._list, g = 0;g < c.length;g++) {
          var d = c[g];
          if (d.byteLength >= a) {
            return c.splice(g, 1), d;
          }
        }
      }
      return new ArrayBuffer(a);
    };
    b.prototype.release = function(a) {
      if (b._enabled) {
        var c = this._list;
        c.length === this._maxSize && c.shift();
        c.push(a);
      }
    };
    b.prototype.ensureUint8ArrayLength = function(b, a) {
      if (b.length >= a) {
        return b;
      }
      var g = Math.max(b.length + a, (3 * b.length >> 1) + 1), g = new Uint8Array(this.acquire(g), 0, g);
      g.set(b);
      this.release(b.buffer);
      return g;
    };
    b.prototype.ensureFloat64ArrayLength = function(b, a) {
      if (b.length >= a) {
        return b;
      }
      var g = Math.max(b.length + a, (3 * b.length >> 1) + 1), g = new Float64Array(this.acquire(g * Float64Array.BYTES_PER_ELEMENT), 0, g);
      g.set(b);
      this.release(b.buffer);
      return g;
    };
    b._enabled = !0;
    return b;
  }();
  e.ArrayBufferPool = n;
  (function(b) {
    (function(b) {
      b[b.EXTERNAL_INTERFACE_FEATURE = 1] = "EXTERNAL_INTERFACE_FEATURE";
      b[b.CLIPBOARD_FEATURE = 2] = "CLIPBOARD_FEATURE";
      b[b.SHAREDOBJECT_FEATURE = 3] = "SHAREDOBJECT_FEATURE";
      b[b.VIDEO_FEATURE = 4] = "VIDEO_FEATURE";
      b[b.SOUND_FEATURE = 5] = "SOUND_FEATURE";
      b[b.NETCONNECTION_FEATURE = 6] = "NETCONNECTION_FEATURE";
    })(b.Feature || (b.Feature = {}));
    (function(b) {
      b[b.AVM1_ERROR = 1] = "AVM1_ERROR";
      b[b.AVM2_ERROR = 2] = "AVM2_ERROR";
    })(b.ErrorTypes || (b.ErrorTypes = {}));
    (function(b) {
      b[b.LoadSource = 0] = "LoadSource";
      b[b.LoadWhitelistAllowed = 1] = "LoadWhitelistAllowed";
      b[b.LoadWhitelistDenied = 2] = "LoadWhitelistDenied";
      b[b.StreamAllowed = 3] = "StreamAllowed";
      b[b.StreamDenied = 4] = "StreamDenied";
      b[b.StreamCrossdomain = 5] = "StreamCrossdomain";
    })(b.LoadResource || (b.LoadResource = {}));
    b.instance;
  })(e.Telemetry || (e.Telemetry = {}));
  (function(b) {
    b.instance;
  })(e.FileLoadingService || (e.FileLoadingService = {}));
  (function(b) {
    b[b.BuiltinAbc = 0] = "BuiltinAbc";
    b[b.PlayerglobalAbcs = 1] = "PlayerglobalAbcs";
    b[b.PlayerglobalManifest = 2] = "PlayerglobalManifest";
    b[b.ShellAbc = 3] = "ShellAbc";
  })(e.SystemResourceId || (e.SystemResourceId = {}));
  (function(b) {
    b.instance;
  })(e.SystemResourcesLoadingService || (e.SystemResourcesLoadingService = {}));
  e.registerCSSFont = function(b, a, c) {
    if (inBrowser) {
      var g = document.head;
      g.insertBefore(document.createElement("style"), g.firstChild);
      g = document.styleSheets[0];
      a = "@font-face{font-family:swffont" + b + ";src:url(data:font/opentype;base64," + e.StringUtilities.base64ArrayBuffer(a.buffer) + ")}";
      g.insertRule(a, g.cssRules.length);
      c && (c = document.createElement("div"), c.style.fontFamily = "swffont" + b, c.innerHTML = "hello", document.body.appendChild(c), document.body.removeChild(c));
    } else {
      k.warning("Cannot register CSS font outside the browser");
    }
  };
  (function(b) {
    b.instance = {enabled:!1, initJS:function(b) {
    }, registerCallback:function(b) {
    }, unregisterCallback:function(b) {
    }, eval:function(b) {
    }, call:function(b) {
    }, getId:function() {
      return null;
    }};
  })(e.ExternalInterfaceService || (e.ExternalInterfaceService = {}));
  (function(b) {
    b[b.InvalidCallback = -3] = "InvalidCallback";
    b[b.AlreadyTaken = -2] = "AlreadyTaken";
    b[b.InvalidName = -1] = "InvalidName";
    b[b.Success = 0] = "Success";
  })(e.LocalConnectionConnectResult || (e.LocalConnectionConnectResult = {}));
  (function(b) {
    b[b.NotConnected = -1] = "NotConnected";
    b[b.Success = 0] = "Success";
  })(e.LocalConnectionCloseResult || (e.LocalConnectionCloseResult = {}));
  (function(b) {
    b.instance;
  })(e.LocalConnectionService || (e.LocalConnectionService = {}));
  (function(b) {
    b.instance = {setClipboard:function(b) {
    }};
  })(e.ClipboardService || (e.ClipboardService = {}));
  n = function() {
    function b() {
      this._queues = {};
    }
    b.prototype.register = function(b, a) {
      k.assert(b);
      k.assert(a);
      var g = this._queues[b];
      if (g) {
        if (-1 < g.indexOf(a)) {
          return;
        }
      } else {
        g = this._queues[b] = [];
      }
      g.push(a);
    };
    b.prototype.unregister = function(b, a) {
      k.assert(b);
      k.assert(a);
      var g = this._queues[b];
      if (g) {
        var d = g.indexOf(a);
        -1 !== d && g.splice(d, 1);
        0 === g.length && (this._queues[b] = null);
      }
    };
    b.prototype.notify = function(b, a) {
      var g = this._queues[b];
      if (g) {
        g = g.slice();
        a = Array.prototype.slice.call(arguments, 0);
        for (var d = 0;d < g.length;d++) {
          g[d].apply(null, a);
        }
      }
    };
    b.prototype.notify1 = function(b, a) {
      var g = this._queues[b];
      if (g) {
        for (var g = g.slice(), d = 0;d < g.length;d++) {
          (0,g[d])(b, a);
        }
      }
    };
    return b;
  }();
  e.Callback = n;
  (function(b) {
    b[b.None = 0] = "None";
    b[b.PremultipliedAlphaARGB = 1] = "PremultipliedAlphaARGB";
    b[b.StraightAlphaARGB = 2] = "StraightAlphaARGB";
    b[b.StraightAlphaRGBA = 3] = "StraightAlphaRGBA";
    b[b.JPEG = 4] = "JPEG";
    b[b.PNG = 5] = "PNG";
    b[b.GIF = 6] = "GIF";
  })(e.ImageType || (e.ImageType = {}));
  var q = e.ImageType;
  e.getMIMETypeForImageType = function(b) {
    switch(b) {
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
  (function(b) {
    b.toCSSCursor = function(b) {
      switch(b) {
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
  })(e.UI || (e.UI = {}));
  n = function() {
    function b() {
      this.promise = new Promise(function(b, a) {
        this.resolve = b;
        this.reject = a;
      }.bind(this));
    }
    b.prototype.then = function(b, a) {
      return this.promise.then(b, a);
    };
    return b;
  }();
  e.PromiseWrapper = n;
})(Shumway || (Shumway = {}));
"undefined" !== typeof exports && (exports.Shumway = Shumway);
(function() {
  function e(e, r, a) {
    e[r] || Object.defineProperty(e, r, {value:a, writable:!0, configurable:!0, enumerable:!1});
  }
  e(String.prototype, "padRight", function(e, r) {
    var a = this, w = a.replace(/\033\[[0-9]*m/g, "").length;
    if (!e || w >= r) {
      return a;
    }
    for (var w = (r - w) / e.length, k = 0;k < w;k++) {
      a += e;
    }
    return a;
  });
  e(String.prototype, "padLeft", function(e, r) {
    var a = this, w = a.length;
    if (!e || w >= r) {
      return a;
    }
    for (var w = (r - w) / e.length, k = 0;k < w;k++) {
      a = e + a;
    }
    return a;
  });
  e(String.prototype, "trim", function() {
    return this.replace(/^\s+|\s+$/g, "");
  });
  e(String.prototype, "endsWith", function(e) {
    return -1 !== this.indexOf(e, this.length - e.length);
  });
  e(Array.prototype, "replace", function(e, r) {
    if (e === r) {
      return 0;
    }
    for (var a = 0, w = 0;w < this.length;w++) {
      this[w] === e && (this[w] = r, a++);
    }
    return a;
  });
})();
(function(e) {
  (function(m) {
    var r = e.isObject, a = function() {
      function a(c, h, k, u) {
        this.shortName = c;
        this.longName = h;
        this.type = k;
        u = u || {};
        this.positional = u.positional;
        this.parseFn = u.parse;
        this.value = u.defaultValue;
      }
      a.prototype.parse = function(a) {
        this.value = "boolean" === this.type ? a : "number" === this.type ? parseInt(a, 10) : a;
        this.parseFn && this.parseFn(this.value);
      };
      return a;
    }();
    m.Argument = a;
    var w = function() {
      function c() {
        this.args = [];
      }
      c.prototype.addArgument = function(c, h, k, u) {
        c = new a(c, h, k, u);
        this.args.push(c);
        return c;
      };
      c.prototype.addBoundOption = function(c) {
        this.args.push(new a(c.shortName, c.longName, c.type, {parse:function(a) {
          c.value = a;
        }}));
      };
      c.prototype.addBoundOptionSet = function(a) {
        var c = this;
        a.options.forEach(function(a) {
          k.isOptionSet(a) ? c.addBoundOptionSet(a) : c.addBoundOption(a);
        });
      };
      c.prototype.getUsage = function() {
        var a = "";
        this.args.forEach(function(c) {
          a = c.positional ? a + c.longName : a + ("[-" + c.shortName + "|--" + c.longName + ("boolean" === c.type ? "" : " " + c.type[0].toUpperCase()) + "]");
          a += " ";
        });
        return a;
      };
      c.prototype.parse = function(a) {
        var c = {}, h = [];
        this.args.forEach(function(b) {
          b.positional ? h.push(b) : (c["-" + b.shortName] = b, c["--" + b.longName] = b);
        });
        for (var k = [];a.length;) {
          var q = a.shift(), b = null, l = q;
          if ("--" == q) {
            k = k.concat(a);
            break;
          } else {
            if ("-" == q.slice(0, 1) || "--" == q.slice(0, 2)) {
              b = c[q];
              if (!b) {
                continue;
              }
              l = "boolean" !== b.type ? a.shift() : !0;
            } else {
              h.length ? b = h.shift() : k.push(l);
            }
          }
          b && b.parse(l);
        }
        return k;
      };
      return c;
    }();
    m.ArgumentParser = w;
    var k = function() {
      function a(c, h) {
        void 0 === h && (h = null);
        this.open = !1;
        this.name = c;
        this.settings = h || {};
        this.options = [];
      }
      a.isOptionSet = function(n) {
        return n instanceof a ? !0 : "object" !== typeof n || null === n || n instanceof c ? !1 : "options" in n && "name" in n && "settings" in n;
      };
      a.prototype.register = function(c) {
        if (a.isOptionSet(c)) {
          for (var f = 0;f < this.options.length;f++) {
            var k = this.options[f];
            if (a.isOptionSet(k) && k.name === c.name) {
              return k;
            }
          }
        }
        this.options.push(c);
        if (this.settings) {
          if (a.isOptionSet(c)) {
            f = this.settings[c.name], r(f) && (c.settings = f.settings, c.open = f.open);
          } else {
            if ("undefined" !== typeof this.settings[c.longName]) {
              switch(c.type) {
                case "boolean":
                  c.value = !!this.settings[c.longName];
                  break;
                case "number":
                  c.value = +this.settings[c.longName];
                  break;
                default:
                  c.value = this.settings[c.longName];
              }
            }
          }
        }
        return c;
      };
      a.prototype.trace = function(a) {
        a.enter(this.name + " {");
        this.options.forEach(function(c) {
          c.trace(a);
        });
        a.leave("}");
      };
      a.prototype.getSettings = function() {
        var c = {};
        this.options.forEach(function(f) {
          a.isOptionSet(f) ? c[f.name] = {settings:f.getSettings(), open:f.open} : c[f.longName] = f.value;
        });
        return c;
      };
      a.prototype.setSettings = function(c) {
        c && this.options.forEach(function(f) {
          a.isOptionSet(f) ? f.name in c && f.setSettings(c[f.name].settings) : f.longName in c && (f.value = c[f.longName]);
        });
      };
      return a;
    }();
    m.OptionSet = k;
    var c = function() {
      function a(c, h, k, u, q, b) {
        void 0 === b && (b = null);
        this.longName = h;
        this.shortName = c;
        this.type = k;
        this.value = this.defaultValue = u;
        this.description = q;
        this.config = b;
      }
      a.prototype.parse = function(a) {
        this.value = a;
      };
      a.prototype.trace = function(a) {
        a.writeLn(("-" + this.shortName + "|--" + this.longName).padRight(" ", 30) + " = " + this.type + " " + this.value + " [" + this.defaultValue + "] (" + this.description + ")");
      };
      return a;
    }();
    m.Option = c;
  })(e.Options || (e.Options = {}));
})(Shumway || (Shumway = {}));
(function(e) {
  (function(r) {
    r.ROOT = "Shumway Options";
    r.shumwayOptions = new e.Options.OptionSet(r.ROOT);
    r.setSettings = function(a) {
      r.shumwayOptions.setSettings(a);
    };
    r.getSettings = function() {
      return r.shumwayOptions.getSettings();
    };
  })(e.Settings || (e.Settings = {}));
  var m = e.Options.Option;
  e.loggingOptions = e.Settings.shumwayOptions.register(new e.Options.OptionSet("Logging Options"));
  e.omitRepeatedWarnings = e.loggingOptions.register(new m("wo", "warnOnce", "boolean", !0, "Omit Repeated Warnings"));
})(Shumway || (Shumway = {}));
(function(e) {
  (function(m) {
    var r = function() {
      function a(a, k) {
        this._parent = a;
        this._timers = e.ObjectUtilities.createMap();
        this._name = k;
        this._count = this._total = this._last = this._begin = 0;
      }
      a.time = function(e, k) {
        a.start(e);
        k();
        a.stop();
      };
      a.start = function(e) {
        a._top = a._top._timers[e] || (a._top._timers[e] = new a(a._top, e));
        a._top.start();
        e = a._flat._timers[e] || (a._flat._timers[e] = new a(a._flat, e));
        e.start();
        a._flatStack.push(e);
      };
      a.stop = function() {
        a._top.stop();
        a._top = a._top._parent;
        a._flatStack.pop().stop();
      };
      a.stopStart = function(e) {
        a.stop();
        a.start(e);
      };
      a.prototype.start = function() {
        this._begin = e.getTicks();
      };
      a.prototype.stop = function() {
        this._last = e.getTicks() - this._begin;
        this._total += this._last;
        this._count += 1;
      };
      a.prototype.toJSON = function() {
        return {name:this._name, total:this._total, timers:this._timers};
      };
      a.prototype.trace = function(a) {
        a.enter(this._name + ": " + this._total.toFixed(2) + " ms, count: " + this._count + ", average: " + (this._total / this._count).toFixed(2) + " ms");
        for (var k in this._timers) {
          this._timers[k].trace(a);
        }
        a.outdent();
      };
      a.trace = function(e) {
        a._base.trace(e);
        a._flat.trace(e);
      };
      a._base = new a(null, "Total");
      a._top = a._base;
      a._flat = new a(null, "Flat");
      a._flatStack = [];
      return a;
    }();
    m.Timer = r;
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
        this._counts = e.ObjectUtilities.createMap();
        this._times = e.ObjectUtilities.createMap();
      };
      a.prototype.toJSON = function() {
        return {counts:this._counts, times:this._times};
      };
      a.prototype.count = function(a, k, c) {
        void 0 === k && (k = 1);
        void 0 === c && (c = 0);
        if (this._enabled) {
          return void 0 === this._counts[a] && (this._counts[a] = 0, this._times[a] = 0), this._counts[a] += k, this._times[a] += c, this._counts[a];
        }
      };
      a.prototype.trace = function(a) {
        for (var k in this._counts) {
          a.writeLn(k + ": " + this._counts[k]);
        }
      };
      a.prototype._pairToString = function(a, k) {
        var c = k[0], h = k[1], n = a[c], c = c + ": " + h;
        n && (c += ", " + n.toFixed(4), 1 < h && (c += " (" + (n / h).toFixed(4) + ")"));
        return c;
      };
      a.prototype.toStringSorted = function() {
        var a = this, k = this._times, c = [], h;
        for (h in this._counts) {
          c.push([h, this._counts[h]]);
        }
        c.sort(function(a, c) {
          return c[1] - a[1];
        });
        return c.map(function(c) {
          return a._pairToString(k, c);
        }).join(", ");
      };
      a.prototype.traceSorted = function(a, k) {
        void 0 === k && (k = !1);
        var c = this, h = this._times, n = [], f;
        for (f in this._counts) {
          n.push([f, this._counts[f]]);
        }
        n.sort(function(a, c) {
          return c[1] - a[1];
        });
        k ? a.writeLn(n.map(function(a) {
          return c._pairToString(h, a);
        }).join(", ")) : n.forEach(function(f) {
          a.writeLn(c._pairToString(h, f));
        });
      };
      a.instance = new a(!0);
      return a;
    }();
    m.Counter = r;
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
        for (var a = 0, k = 0;k < this._count;k++) {
          a += this._samples[k];
        }
        return a / this._count;
      };
      return a;
    }();
    m.Average = r;
  })(e.Metrics || (e.Metrics = {}));
})(Shumway || (Shumway = {}));
var __extends = this.__extends || function(e, m) {
  function r() {
    this.constructor = e;
  }
  for (var a in m) {
    m.hasOwnProperty(a) && (e[a] = m[a]);
  }
  r.prototype = m.prototype;
  e.prototype = new r;
};
(function(e) {
  (function(e) {
    function r(b) {
      for (var d = Math.max.apply(null, b), p = b.length, a = 1 << d, c = new Uint32Array(a), h = d << 16 | 65535, t = 0;t < a;t++) {
        c[t] = h;
      }
      for (var h = 0, t = 1, f = 2;t <= d;h <<= 1, ++t, f <<= 1) {
        for (var l = 0;l < p;++l) {
          if (b[l] === t) {
            for (var k = 0, n = 0;n < t;++n) {
              k = 2 * k + (h >> n & 1);
            }
            for (n = k;n < a;n += f) {
              c[n] = t << 16 | l;
            }
            ++h;
          }
        }
      }
      return {codes:c, maxBits:d};
    }
    var a;
    (function(b) {
      b[b.INIT = 0] = "INIT";
      b[b.BLOCK_0 = 1] = "BLOCK_0";
      b[b.BLOCK_1 = 2] = "BLOCK_1";
      b[b.BLOCK_2_PRE = 3] = "BLOCK_2_PRE";
      b[b.BLOCK_2 = 4] = "BLOCK_2";
      b[b.DONE = 5] = "DONE";
      b[b.ERROR = 6] = "ERROR";
      b[b.VERIFY_HEADER = 7] = "VERIFY_HEADER";
    })(a || (a = {}));
    a = function() {
      function g(d) {
      }
      g.prototype.push = function(d) {
      };
      g.prototype.close = function() {
      };
      g.create = function(d) {
        return "undefined" !== typeof ShumwayCom && ShumwayCom.createSpecialInflate ? new b(d, ShumwayCom.createSpecialInflate) : new w(d);
      };
      g.prototype._processZLibHeader = function(d, b, g) {
        if (b + 2 > g) {
          return 0;
        }
        d = d[b] << 8 | d[b + 1];
        b = null;
        2048 !== (d & 3840) ? b = "inflate: unknown compression method" : 0 !== d % 31 ? b = "inflate: bad FCHECK" : 0 !== (d & 32) && (b = "inflate: FDICT bit set");
        if (b) {
          if (this.onError) {
            this.onError(b);
          }
          return -1;
        }
        return 2;
      };
      g.inflate = function(d, b, a) {
        var c = new Uint8Array(b), h = 0;
        b = g.create(a);
        b.onData = function(d) {
          var b = Math.min(d.length, c.length - h);
          b && e.memCopy(c, d, h, 0, b);
          h += b;
        };
        b.onError = function(d) {
          throw Error(d);
        };
        b.push(d);
        b.close();
        return c;
      };
      return g;
    }();
    e.Inflate = a;
    var w = function(b) {
      function d(d) {
        b.call(this, d);
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
        if (!q) {
          k = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
          c = new Uint16Array(30);
          h = new Uint8Array(30);
          for (var a = d = 0, x = 1;30 > d;++d) {
            c[d] = x, x += 1 << (h[d] = ~~((a += 2 < d ? 1 : 0) / 2));
          }
          var t = new Uint8Array(288);
          for (d = 0;32 > d;++d) {
            t[d] = 5;
          }
          n = r(t.subarray(0, 32));
          f = new Uint16Array(29);
          v = new Uint8Array(29);
          a = d = 0;
          for (x = 3;29 > d;++d) {
            f[d] = x - (28 == d ? 1 : 0), x += 1 << (v[d] = ~~((a += 4 < d ? 1 : 0) / 4 % 6));
          }
          for (d = 0;288 > d;++d) {
            t[d] = 144 > d || 279 < d ? 8 : 256 > d ? 9 : 7;
          }
          u = r(t);
          q = !0;
        }
      }
      __extends(d, b);
      d.prototype.push = function(d) {
        if (!this._buffer || this._buffer.length < this._bufferSize + d.length) {
          var b = new Uint8Array(this._bufferSize + d.length);
          this._buffer && b.set(this._buffer);
          this._buffer = b;
        }
        this._buffer.set(d, this._bufferSize);
        this._bufferSize += d.length;
        this._bufferPosition = 0;
        d = !1;
        do {
          b = this._windowPosition;
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
              var g = this._processZLibHeader(this._buffer, this._bufferPosition, this._bufferSize);
              0 < g ? (this._bufferPosition += g, this._state = 0) : 0 === g ? d = !0 : this._state = 6;
          }
          if (0 < this._windowPosition - b) {
            this.onData(this._window.subarray(b, this._windowPosition));
          }
          65536 <= this._windowPosition && ("copyWithin" in this._buffer ? this._window.copyWithin(0, this._windowPosition - 32768, this._windowPosition) : this._window.set(this._window.subarray(this._windowPosition - 32768, this._windowPosition)), this._windowPosition = 32768);
        } while (!d && this._bufferPosition < this._bufferSize);
        this._bufferPosition < this._bufferSize ? ("copyWithin" in this._buffer ? this._buffer.copyWithin(0, this._bufferPosition, this._bufferSize) : this._buffer.set(this._buffer.subarray(this._bufferPosition, this._bufferSize)), this._bufferSize -= this._bufferPosition) : this._bufferSize = 0;
      };
      d.prototype._decodeInitState = function() {
        if (this._isFinalBlock) {
          return this._state = 5, !1;
        }
        var d = this._buffer, b = this._bufferSize, g = this._bitBuffer, a = this._bitLength, c = this._bufferPosition;
        if (3 > (b - c << 3) + a) {
          return !0;
        }
        3 > a && (g |= d[c++] << a, a += 8);
        var h = g & 7, g = g >> 3, a = a - 3;
        switch(h >> 1) {
          case 0:
            a = g = 0;
            if (4 > b - c) {
              return !0;
            }
            var t = d[c] | d[c + 1] << 8, d = d[c + 2] | d[c + 3] << 8, c = c + 4;
            if (65535 !== (t ^ d)) {
              this._error("inflate: invalid block 0 length");
              d = 6;
              break;
            }
            0 === t ? d = 0 : (this._block0Read = t, d = 1);
            break;
          case 1:
            d = 2;
            this._literalTable = u;
            this._distanceTable = n;
            break;
          case 2:
            if (26 > (b - c << 3) + a) {
              return !0;
            }
            for (;14 > a;) {
              g |= d[c++] << a, a += 8;
            }
            t = (g >> 10 & 15) + 4;
            if ((b - c << 3) + a < 14 + 3 * t) {
              return !0;
            }
            for (var b = {numLiteralCodes:(g & 31) + 257, numDistanceCodes:(g >> 5 & 31) + 1, codeLengthTable:void 0, bitLengths:void 0, codesRead:0, dupBits:0}, g = g >> 14, a = a - 14, f = new Uint8Array(19), l = 0;l < t;++l) {
              3 > a && (g |= d[c++] << a, a += 8), f[k[l]] = g & 7, g >>= 3, a -= 3;
            }
            for (;19 > l;l++) {
              f[k[l]] = 0;
            }
            b.bitLengths = new Uint8Array(b.numLiteralCodes + b.numDistanceCodes);
            b.codeLengthTable = r(f);
            this._block2State = b;
            d = 3;
            break;
          default:
            return this._error("inflate: unsupported block type"), !1;
        }
        this._isFinalBlock = !!(h & 1);
        this._state = d;
        this._bufferPosition = c;
        this._bitBuffer = g;
        this._bitLength = a;
        return !1;
      };
      d.prototype._error = function(d) {
        if (this.onError) {
          this.onError(d);
        }
      };
      d.prototype._decodeBlock0 = function() {
        var d = this._bufferPosition, b = this._windowPosition, g = this._block0Read, a = 65794 - b, c = this._bufferSize - d, h = c < g, t = Math.min(a, c, g);
        this._window.set(this._buffer.subarray(d, d + t), b);
        this._windowPosition = b + t;
        this._bufferPosition = d + t;
        this._block0Read = g - t;
        return g === t ? (this._state = 0, !1) : h && a < c;
      };
      d.prototype._readBits = function(d) {
        var b = this._bitBuffer, g = this._bitLength;
        if (d > g) {
          var a = this._bufferPosition, c = this._bufferSize;
          do {
            if (a >= c) {
              return this._bufferPosition = a, this._bitBuffer = b, this._bitLength = g, -1;
            }
            b |= this._buffer[a++] << g;
            g += 8;
          } while (d > g);
          this._bufferPosition = a;
        }
        this._bitBuffer = b >> d;
        this._bitLength = g - d;
        return b & (1 << d) - 1;
      };
      d.prototype._readCode = function(d) {
        var b = this._bitBuffer, g = this._bitLength, a = d.maxBits;
        if (a > g) {
          var c = this._bufferPosition, h = this._bufferSize;
          do {
            if (c >= h) {
              return this._bufferPosition = c, this._bitBuffer = b, this._bitLength = g, -1;
            }
            b |= this._buffer[c++] << g;
            g += 8;
          } while (a > g);
          this._bufferPosition = c;
        }
        d = d.codes[b & (1 << a) - 1];
        a = d >> 16;
        if (d & 32768) {
          return this._error("inflate: invalid encoding"), this._state = 6, -1;
        }
        this._bitBuffer = b >> a;
        this._bitLength = g - a;
        return d & 65535;
      };
      d.prototype._decodeBlock2Pre = function() {
        var d = this._block2State, b = d.numLiteralCodes + d.numDistanceCodes, g = d.bitLengths, a = d.codesRead, c = 0 < a ? g[a - 1] : 0, h = d.codeLengthTable, t;
        if (0 < d.dupBits) {
          t = this._readBits(d.dupBits);
          if (0 > t) {
            return !0;
          }
          for (;t--;) {
            g[a++] = c;
          }
          d.dupBits = 0;
        }
        for (;a < b;) {
          var f = this._readCode(h);
          if (0 > f) {
            return d.codesRead = a, !0;
          }
          if (16 > f) {
            g[a++] = c = f;
          } else {
            var l;
            switch(f) {
              case 16:
                l = 2;
                t = 3;
                f = c;
                break;
              case 17:
                t = l = 3;
                f = 0;
                break;
              case 18:
                l = 7, t = 11, f = 0;
            }
            for (;t--;) {
              g[a++] = f;
            }
            t = this._readBits(l);
            if (0 > t) {
              return d.codesRead = a, d.dupBits = l, !0;
            }
            for (;t--;) {
              g[a++] = f;
            }
            c = f;
          }
        }
        this._literalTable = r(g.subarray(0, d.numLiteralCodes));
        this._distanceTable = r(g.subarray(d.numLiteralCodes));
        this._state = 4;
        this._block2State = null;
        return !1;
      };
      d.prototype._decodeBlock = function() {
        var d = this._literalTable, b = this._distanceTable, g = this._window, a = this._windowPosition, t = this._copyState, l, k, n, q;
        if (0 !== t.state) {
          switch(t.state) {
            case 1:
              if (0 > (l = this._readBits(t.lenBits))) {
                return !0;
              }
              t.len += l;
              t.state = 2;
            case 2:
              if (0 > (l = this._readCode(b))) {
                return !0;
              }
              t.distBits = h[l];
              t.dist = c[l];
              t.state = 3;
            case 3:
              l = 0;
              if (0 < t.distBits && 0 > (l = this._readBits(t.distBits))) {
                return !0;
              }
              q = t.dist + l;
              k = t.len;
              for (l = a - q;k--;) {
                g[a++] = g[l++];
              }
              t.state = 0;
              if (65536 <= a) {
                return this._windowPosition = a, !1;
              }
              break;
          }
        }
        do {
          l = this._readCode(d);
          if (0 > l) {
            return this._windowPosition = a, !0;
          }
          if (256 > l) {
            g[a++] = l;
          } else {
            if (256 < l) {
              this._windowPosition = a;
              l -= 257;
              n = v[l];
              k = f[l];
              l = 0 === n ? 0 : this._readBits(n);
              if (0 > l) {
                return t.state = 1, t.len = k, t.lenBits = n, !0;
              }
              k += l;
              l = this._readCode(b);
              if (0 > l) {
                return t.state = 2, t.len = k, !0;
              }
              n = h[l];
              q = c[l];
              l = 0 === n ? 0 : this._readBits(n);
              if (0 > l) {
                return t.state = 3, t.len = k, t.dist = q, t.distBits = n, !0;
              }
              q += l;
              for (l = a - q;k--;) {
                g[a++] = g[l++];
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
      return d;
    }(a), k, c, h, n, f, v, u, q = !1, b = function(b) {
      function d(d, a) {
        b.call(this, d);
        this._verifyHeader = d;
        this._specialInflate = a();
        this._specialInflate.setDataCallback(function(d) {
          this.onData(d);
        }.bind(this));
      }
      __extends(d, b);
      d.prototype.push = function(d) {
        if (this._verifyHeader) {
          var b;
          this._buffer ? (b = new Uint8Array(this._buffer.length + d.length), b.set(this._buffer), b.set(d, this._buffer.length), this._buffer = null) : b = new Uint8Array(d);
          var g = this._processZLibHeader(b, 0, b.length);
          if (0 === g) {
            this._buffer = b;
            return;
          }
          this._verifyHeader = !0;
          0 < g && (d = b.subarray(g));
        }
        this._specialInflate.push(d);
      };
      d.prototype.close = function() {
        this._specialInflate && (this._specialInflate.close(), this._specialInflate = null);
      };
      return d;
    }(a), l;
    (function(b) {
      b[b.WRITE = 0] = "WRITE";
      b[b.DONE = 1] = "DONE";
      b[b.ZLIB_HEADER = 2] = "ZLIB_HEADER";
    })(l || (l = {}));
    var t = function() {
      function b() {
        this.a = 1;
        this.b = 0;
      }
      b.prototype.update = function(d, b, g) {
        for (var a = this.a, c = this.b;b < g;++b) {
          a = (a + (d[b] & 255)) % 65521, c = (c + a) % 65521;
        }
        this.a = a;
        this.b = c;
      };
      b.prototype.getChecksum = function() {
        return this.b << 16 | this.a;
      };
      return b;
    }();
    e.Adler32 = t;
    l = function() {
      function b(d) {
        this._state = (this._writeZlibHeader = d) ? 2 : 0;
        this._adler32 = d ? new t : null;
      }
      b.prototype.push = function(d) {
        2 === this._state && (this.onData(new Uint8Array([120, 156])), this._state = 0);
        for (var b = d.length, g = b + 5 * Math.ceil(b / 65535), g = new Uint8Array(g), a = 0, c = 0;65535 < b;) {
          g.set(new Uint8Array([0, 255, 255, 0, 0]), a), a += 5, g.set(d.subarray(c, c + 65535), a), c += 65535, a += 65535, b -= 65535;
        }
        g.set(new Uint8Array([0, b & 255, b >> 8 & 255, ~b & 255, ~b >> 8 & 255]), a);
        a += 5;
        g.set(d.subarray(c, b), a);
        this.onData(g);
        this._adler32 && this._adler32.update(d, 0, b);
      };
      b.prototype.close = function() {
        this._state = 1;
        this.onData(new Uint8Array([1, 0, 0, 255, 255]));
        if (this._adler32) {
          var d = this._adler32.getChecksum();
          this.onData(new Uint8Array([d & 255, d >> 8 & 255, d >> 16 & 255, d >>> 24 & 255]));
        }
      };
      return b;
    }();
    e.Deflate = l;
  })(e.ArrayUtilities || (e.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(e) {
  (function(e) {
    function r(d) {
      for (var b = new Uint16Array(d), g = 0;g < d;g++) {
        b[g] = 1024;
      }
      return b;
    }
    function a(d, b, g, a) {
      for (var c = 1, h = 0, t = 0;t < g;t++) {
        var f = a.decodeBit(d, c + b), c = (c << 1) + f, h = h | f << t
      }
      return h;
    }
    function w(d, b) {
      var g = [];
      g.length = b;
      for (var a = 0;a < b;a++) {
        g[a] = new f(d);
      }
      return g;
    }
    var k = function() {
      function d() {
        this.pos = this.available = 0;
        this.buffer = new Uint8Array(2E3);
      }
      d.prototype.append = function(d) {
        var b = this.pos + this.available, g = b + d.length;
        if (g > this.buffer.length) {
          for (var a = 2 * this.buffer.length;a < g;) {
            a *= 2;
          }
          g = new Uint8Array(a);
          g.set(this.buffer);
          this.buffer = g;
        }
        this.buffer.set(d, b);
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
    }(), c = function() {
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
      d.prototype.copyMatch = function(d, b) {
        for (var g = this.pos, a = this.size, c = this.buf, h = d <= g ? g - d : a - d + g, t = b;0 < t;) {
          for (var f = Math.min(Math.min(t, a - g), a - h), l = 0;l < f;l++) {
            var k = c[h++];
            c[g++] = k;
          }
          g === a && (this.pos = g, this.flush(), g = 0, this.isFull = !0);
          h === a && (h = 0);
          t -= f;
        }
        this.pos = g;
        this.totalPos += b;
      };
      d.prototype.checkDistance = function(d) {
        return d <= this.pos || this.isFull;
      };
      d.prototype.isEmpty = function() {
        return 0 === this.pos && !this.isFull;
      };
      return d;
    }(), n = function() {
      function d(d) {
        this.inStream = d;
        this.code = this.range = 0;
        this.corrupted = !1;
      }
      d.prototype.init = function() {
        0 !== this.inStream.readByte() && (this.corrupted = !0);
        this.range = -1;
        for (var d = 0, b = 0;4 > b;b++) {
          d = d << 8 | this.inStream.readByte();
        }
        d === this.range && (this.corrupted = !0);
        this.code = d;
      };
      d.prototype.isFinishedOK = function() {
        return 0 === this.code;
      };
      d.prototype.decodeDirectBits = function(d) {
        var b = 0, g = this.range, a = this.code;
        do {
          var g = g >>> 1 | 0, a = a - g | 0, c = a >> 31, a = a + (g & c) | 0;
          a === g && (this.corrupted = !0);
          0 <= g && 16777216 > g && (g <<= 8, a = a << 8 | this.inStream.readByte());
          b = (b << 1) + c + 1 | 0;
        } while (--d);
        this.range = g;
        this.code = a;
        return b;
      };
      d.prototype.decodeBit = function(d, b) {
        var g = this.range, a = this.code, c = d[b], h = (g >>> 11) * c;
        a >>> 0 < h ? (c = c + (2048 - c >> 5) | 0, g = h | 0, h = 0) : (c = c - (c >> 5) | 0, a = a - h | 0, g = g - h | 0, h = 1);
        d[b] = c & 65535;
        0 <= g && 16777216 > g && (g <<= 8, a = a << 8 | this.inStream.readByte());
        this.range = g;
        this.code = a;
        return h;
      };
      return d;
    }(), f = function() {
      function d(d) {
        this.numBits = d;
        this.probs = r(1 << d);
      }
      d.prototype.decode = function(d) {
        for (var b = 1, g = 0;g < this.numBits;g++) {
          b = (b << 1) + d.decodeBit(this.probs, b);
        }
        return b - (1 << this.numBits);
      };
      d.prototype.reverseDecode = function(d) {
        return a(this.probs, 0, this.numBits, d);
      };
      return d;
    }(), v = function() {
      function d() {
        this.choice = r(2);
        this.lowCoder = w(3, 16);
        this.midCoder = w(3, 16);
        this.highCoder = new f(8);
      }
      d.prototype.decode = function(d, b) {
        return 0 === d.decodeBit(this.choice, 0) ? this.lowCoder[b].decode(d) : 0 === d.decodeBit(this.choice, 1) ? 8 + this.midCoder[b].decode(d) : 16 + this.highCoder.decode(d);
      };
      return d;
    }(), u = function() {
      function d(d, b) {
        this.rangeDec = new n(d);
        this.outWindow = new h(b);
        this.markerIsMandatory = !1;
        this.dictSizeInProperties = this.dictSize = this.lp = this.pb = this.lc = 0;
        this.leftToUnpack = this.unpackSize = void 0;
        this.reps = new Int32Array(4);
        this.state = 0;
      }
      d.prototype.decodeProperties = function(d) {
        var b = d[0];
        if (225 <= b) {
          throw Error("Incorrect LZMA properties");
        }
        this.lc = b % 9;
        b = b / 9 | 0;
        this.pb = b / 5 | 0;
        this.lp = b % 5;
        for (b = this.dictSizeInProperties = 0;4 > b;b++) {
          this.dictSizeInProperties |= d[b + 1] << 8 * b;
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
      d.prototype.decodeLiteral = function(d, b) {
        var g = this.outWindow, a = this.rangeDec, c = 0;
        g.isEmpty() || (c = g.getByte(1));
        var h = 1, c = 768 * (((g.totalPos & (1 << this.lp) - 1) << this.lc) + (c >> 8 - this.lc));
        if (7 <= d) {
          g = g.getByte(b + 1);
          do {
            var t = g >> 7 & 1, g = g << 1, f = a.decodeBit(this.litProbs, c + ((1 + t << 8) + h)), h = h << 1 | f;
            if (t !== f) {
              break;
            }
          } while (256 > h);
        }
        for (;256 > h;) {
          h = h << 1 | a.decodeBit(this.litProbs, c + h);
        }
        return h - 256 & 255;
      };
      d.prototype.decodeDistance = function(d) {
        var b = d;
        3 < b && (b = 3);
        d = this.rangeDec;
        b = this.posSlotDecoder[b].decode(d);
        if (4 > b) {
          return b;
        }
        var g = (b >> 1) - 1, c = (2 | b & 1) << g;
        14 > b ? c = c + a(this.posDecoders, c - b, g, d) | 0 : (c = c + (d.decodeDirectBits(g - 4) << 4) | 0, c = c + this.alignDecoder.reverseDecode(d) | 0);
        return c;
      };
      d.prototype.init = function() {
        this.litProbs = r(768 << this.lc + this.lp);
        this.posSlotDecoder = w(6, 4);
        this.alignDecoder = new f(4);
        this.posDecoders = r(115);
        this.isMatch = r(192);
        this.isRep = r(12);
        this.isRepG0 = r(12);
        this.isRepG1 = r(12);
        this.isRepG2 = r(12);
        this.isRep0Long = r(192);
        this.lenDecoder = new v;
        this.repLenDecoder = new v;
      };
      d.prototype.decode = function(d) {
        for (var g = this.rangeDec, a = this.outWindow, c = this.pb, h = this.dictSize, f = this.markerIsMandatory, k = this.leftToUnpack, n = this.isMatch, v = this.isRep, e = this.isRepG0, u = this.isRepG1, r = this.isRepG2, w = this.isRep0Long, m = this.lenDecoder, B = this.repLenDecoder, z = this.reps[0], C = this.reps[1], E = this.reps[2], A = this.reps[3], D = this.state;;) {
          if (d && 48 > g.inStream.available) {
            this.outWindow.flush();
            break;
          }
          if (0 === k && !f && (this.outWindow.flush(), g.isFinishedOK())) {
            return l;
          }
          var F = a.totalPos & (1 << c) - 1;
          if (0 === g.decodeBit(n, (D << 4) + F)) {
            if (0 === k) {
              return q;
            }
            a.putByte(this.decodeLiteral(D, z));
            D = 4 > D ? 0 : 10 > D ? D - 3 : D - 6;
            k--;
          } else {
            if (0 !== g.decodeBit(v, D)) {
              if (0 === k || a.isEmpty()) {
                return q;
              }
              if (0 === g.decodeBit(e, D)) {
                if (0 === g.decodeBit(w, (D << 4) + F)) {
                  D = 7 > D ? 9 : 11;
                  a.putByte(a.getByte(z + 1));
                  k--;
                  continue;
                }
              } else {
                var G;
                0 === g.decodeBit(u, D) ? G = C : (0 === g.decodeBit(r, D) ? G = E : (G = A, A = E), E = C);
                C = z;
                z = G;
              }
              F = B.decode(g, F);
              D = 7 > D ? 8 : 11;
            } else {
              A = E;
              E = C;
              C = z;
              F = m.decode(g, F);
              D = 7 > D ? 7 : 10;
              z = this.decodeDistance(F);
              if (-1 === z) {
                return this.outWindow.flush(), g.isFinishedOK() ? b : q;
              }
              if (0 === k || z >= h || !a.checkDistance(z)) {
                return q;
              }
            }
            F += 2;
            G = !1;
            void 0 !== k && k < F && (F = k, G = !0);
            a.copyMatch(z + 1, F);
            k -= F;
            if (G) {
              return q;
            }
          }
        }
        this.state = D;
        this.reps[0] = z;
        this.reps[1] = C;
        this.reps[2] = E;
        this.reps[3] = A;
        this.leftToUnpack = k;
        return t;
      };
      d.prototype.flushOutput = function() {
        this.outWindow.flush();
      };
      return d;
    }(), q = 0, b = 1, l = 2, t = 3, g;
    (function(d) {
      d[d.WAIT_FOR_LZMA_HEADER = 0] = "WAIT_FOR_LZMA_HEADER";
      d[d.WAIT_FOR_SWF_HEADER = 1] = "WAIT_FOR_SWF_HEADER";
      d[d.PROCESS_DATA = 2] = "PROCESS_DATA";
      d[d.CLOSED = 3] = "CLOSED";
      d[d.ERROR = 4] = "ERROR";
    })(g || (g = {}));
    g = function() {
      function d(d) {
        void 0 === d && (d = !1);
        this._state = d ? 1 : 0;
        this.buffer = null;
      }
      d.prototype.push = function(d) {
        if (2 > this._state) {
          var b = this.buffer ? this.buffer.length : 0, g = (1 === this._state ? 17 : 13) + 5;
          if (b + d.length < g) {
            g = new Uint8Array(b + d.length);
            0 < b && g.set(this.buffer);
            g.set(d, b);
            this.buffer = g;
            return;
          }
          var a = new Uint8Array(g);
          0 < b && a.set(this.buffer);
          a.set(d.subarray(0, g - b), b);
          this._inStream = new k;
          this._inStream.append(a.subarray(g - 5));
          this._outStream = new c(function(d) {
            this.onData.call(null, d);
          }.bind(this));
          this._decoder = new u(this._inStream, this._outStream);
          if (1 === this._state) {
            this._decoder.decodeProperties(a.subarray(12, 17)), this._decoder.markerIsMandatory = !1, this._decoder.unpackSize = ((a[4] | a[5] << 8 | a[6] << 16 | a[7] << 24) >>> 0) - 8;
          } else {
            this._decoder.decodeProperties(a.subarray(0, 5));
            for (var b = 0, h = !1, f = 0;8 > f;f++) {
              var l = a[5 + f];
              255 !== l && (h = !0);
              b |= l << 8 * f;
            }
            this._decoder.markerIsMandatory = !h;
            this._decoder.unpackSize = h ? b : void 0;
          }
          this._decoder.create();
          d = d.subarray(g);
          this._state = 2;
        } else {
          if (2 !== this._state) {
            return;
          }
        }
        try {
          this._inStream.append(d);
          var n = this._decoder.decode(!0);
          this._inStream.compact();
          n !== t && this._checkError(n);
        } catch (q) {
          this._decoder.flushOutput(), this._decoder = null, this._error(q);
        }
      };
      d.prototype.close = function() {
        if (2 === this._state) {
          this._state = 3;
          try {
            var d = this._decoder.decode(!1);
            this._checkError(d);
          } catch (b) {
            this._decoder.flushOutput(), this._error(b);
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
        var g;
        d === q ? g = "LZMA decoding error" : d === t ? g = "Decoding is not complete" : d === b ? void 0 !== this._decoder.unpackSize && this._decoder.unpackSize !== this._outStream.processed && (g = "Finished with end marker before than specified size") : g = "Internal LZMA Error";
        g && this._error(g);
      };
      return d;
    }();
    e.LzmaDecoder = g;
  })(e.ArrayUtilities || (e.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(e) {
  (function(m) {
    function r(a) {
      return "string" === typeof a ? a : void 0 == a ? null : a + "";
    }
    var a = e.Debug.notImplemented, w = e.StringUtilities.utf8decode, k = e.StringUtilities.utf8encode, c = e.NumberUtilities.clamp, h = function() {
      return function(a, b, c) {
        this.buffer = a;
        this.length = b;
        this.littleEndian = c;
      };
    }();
    m.PlainObjectDataBuffer = h;
    for (var n = new Uint32Array(33), f = 1, v = 0;32 >= f;f++) {
      n[f] = v = v << 1 | 1;
    }
    var u;
    (function(a) {
      a[a.U8 = 1] = "U8";
      a[a.I32 = 2] = "I32";
      a[a.F32 = 4] = "F32";
    })(u || (u = {}));
    f = function() {
      function f(b) {
        void 0 === b && (b = f.INITIAL_SIZE);
        this._buffer || (this._buffer = new ArrayBuffer(b), this._position = this._length = 0, this._resetViews(), this._littleEndian = f._nativeLittleEndian, this._bitLength = this._bitBuffer = 0);
      }
      f.FromArrayBuffer = function(b, a) {
        void 0 === a && (a = -1);
        var c = Object.create(f.prototype);
        c._buffer = b;
        c._length = -1 === a ? b.byteLength : a;
        c._position = 0;
        c._resetViews();
        c._littleEndian = f._nativeLittleEndian;
        c._bitBuffer = 0;
        c._bitLength = 0;
        return c;
      };
      f.FromPlainObject = function(b) {
        var a = f.FromArrayBuffer(b.buffer, b.length);
        a._littleEndian = b.littleEndian;
        return a;
      };
      f.prototype.toPlainObject = function() {
        return new h(this._buffer, this._length, this._littleEndian);
      };
      f.prototype.clone = function() {
        var b = f.FromArrayBuffer((new Uint8Array(this._u8)).buffer, this._length);
        b._position = this._position;
        b._littleEndian = this._littleEndian;
        b._bitBuffer = this._bitBuffer;
        b._bitLength = this._bitLength;
        return b;
      };
      f.prototype._resetViews = function() {
        this._u8 = new Uint8Array(this._buffer);
        this._f32 = this._i32 = null;
      };
      f.prototype._requestViews = function(b) {
        0 === (this._buffer.byteLength & 3) && (null === this._i32 && b & 2 && (this._i32 = new Int32Array(this._buffer)), null === this._f32 && b & 4 && (this._f32 = new Float32Array(this._buffer)));
      };
      f.prototype.getBytes = function() {
        return new Uint8Array(this._buffer, 0, this._length);
      };
      f.prototype._ensureCapacity = function(b) {
        var a = this._buffer;
        if (!(a.byteLength >= b)) {
          for (var c = Math.max(a.byteLength, 1);c < b;) {
            c *= 2;
          }
          4294967295 < c && this.sec.throwError("RangeError", Errors.ParamRangeError);
          c = f._arrayBufferPool.acquire(c);
          b = this._u8;
          this._buffer = c;
          this._resetViews();
          this._u8.set(b);
          c = this._u8;
          for (b = b.length;b < c.length;b++) {
            c[b] = 0;
          }
          f._arrayBufferPool.release(a);
        }
      };
      f.prototype.clear = function() {
        this._position = this._length = 0;
      };
      f.prototype.readBoolean = function() {
        return 0 !== this.readUnsignedByte();
      };
      f.prototype.readByte = function() {
        return this.readUnsignedByte() << 24 >> 24;
      };
      f.prototype.readUnsignedByte = function() {
        this._position + 1 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        return this._u8[this._position++];
      };
      f.prototype.readBytes = function(b, a, c) {
        var g = this._position;
        a >>>= 0;
        c >>>= 0;
        0 === c && (c = this._length - g);
        g + c > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        b.length < a + c && (b._ensureCapacity(a + c), b.length = a + c);
        b._u8.set(new Uint8Array(this._buffer, g, c), a);
        this._position += c;
      };
      f.prototype.readShort = function() {
        return this.readUnsignedShort() << 16 >> 16;
      };
      f.prototype.readUnsignedShort = function() {
        var b = this._u8, a = this._position;
        a + 2 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var c = b[a + 0], b = b[a + 1];
        this._position = a + 2;
        return this._littleEndian ? b << 8 | c : c << 8 | b;
      };
      f.prototype.readInt = function() {
        var b = this._u8, a = this._position;
        a + 4 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var c = b[a + 0], g = b[a + 1], d = b[a + 2], b = b[a + 3];
        this._position = a + 4;
        return this._littleEndian ? b << 24 | d << 16 | g << 8 | c : c << 24 | g << 16 | d << 8 | b;
      };
      f.prototype.readUnsignedInt = function() {
        return this.readInt() >>> 0;
      };
      f.prototype.readFloat = function() {
        var b = this._position;
        b + 4 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        this._position = b + 4;
        this._requestViews(4);
        if (this._littleEndian && 0 === (b & 3) && this._f32) {
          return this._f32[b >> 2];
        }
        var a = this._u8, c = e.IntegerUtilities.u8;
        this._littleEndian ? (c[0] = a[b + 0], c[1] = a[b + 1], c[2] = a[b + 2], c[3] = a[b + 3]) : (c[3] = a[b + 0], c[2] = a[b + 1], c[1] = a[b + 2], c[0] = a[b + 3]);
        return e.IntegerUtilities.f32[0];
      };
      f.prototype.readDouble = function() {
        var b = this._u8, a = this._position;
        a + 8 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var c = e.IntegerUtilities.u8;
        this._littleEndian ? (c[0] = b[a + 0], c[1] = b[a + 1], c[2] = b[a + 2], c[3] = b[a + 3], c[4] = b[a + 4], c[5] = b[a + 5], c[6] = b[a + 6], c[7] = b[a + 7]) : (c[0] = b[a + 7], c[1] = b[a + 6], c[2] = b[a + 5], c[3] = b[a + 4], c[4] = b[a + 3], c[5] = b[a + 2], c[6] = b[a + 1], c[7] = b[a + 0]);
        this._position = a + 8;
        return e.IntegerUtilities.f64[0];
      };
      f.prototype.writeBoolean = function(b) {
        this.writeByte(b ? 1 : 0);
      };
      f.prototype.writeByte = function(b) {
        var a = this._position + 1;
        this._ensureCapacity(a);
        this._u8[this._position++] = b;
        a > this._length && (this._length = a);
      };
      f.prototype.writeUnsignedByte = function(b) {
        var a = this._position + 1;
        this._ensureCapacity(a);
        this._u8[this._position++] = b;
        a > this._length && (this._length = a);
      };
      f.prototype.writeRawBytes = function(b) {
        var a = this._position + b.length;
        this._ensureCapacity(a);
        this._u8.set(b, this._position);
        this._position = a;
        a > this._length && (this._length = a);
      };
      f.prototype.writeBytes = function(b, a, h) {
        e.isNullOrUndefined(b) && this.sec.throwError("TypeError", Errors.NullPointerError, "bytes");
        a >>>= 0;
        h >>>= 0;
        2 > arguments.length && (a = 0);
        3 > arguments.length && (h = 0);
        a === c(a, 0, b.length) && a + h === c(a + h, 0, b.length) || this.sec.throwError("RangeError", Errors.ParamRangeError);
        0 === h && (h = b.length - a);
        this.writeRawBytes(new Int8Array(b._buffer, a, h));
      };
      f.prototype.writeShort = function(b) {
        this.writeUnsignedShort(b);
      };
      f.prototype.writeUnsignedShort = function(b) {
        var a = this._position;
        this._ensureCapacity(a + 2);
        var c = this._u8;
        this._littleEndian ? (c[a + 0] = b, c[a + 1] = b >> 8) : (c[a + 0] = b >> 8, c[a + 1] = b);
        this._position = a += 2;
        a > this._length && (this._length = a);
      };
      f.prototype.writeInt = function(b) {
        this.writeUnsignedInt(b);
      };
      f.prototype.write2Ints = function(b, a) {
        this.write2UnsignedInts(b, a);
      };
      f.prototype.write4Ints = function(b, a, c, g) {
        this.write4UnsignedInts(b, a, c, g);
      };
      f.prototype.writeUnsignedInt = function(b) {
        var a = this._position;
        this._ensureCapacity(a + 4);
        this._requestViews(2);
        if (this._littleEndian === f._nativeLittleEndian && 0 === (a & 3) && this._i32) {
          this._i32[a >> 2] = b;
        } else {
          var c = this._u8;
          this._littleEndian ? (c[a + 0] = b, c[a + 1] = b >> 8, c[a + 2] = b >> 16, c[a + 3] = b >> 24) : (c[a + 0] = b >> 24, c[a + 1] = b >> 16, c[a + 2] = b >> 8, c[a + 3] = b);
        }
        this._position = a += 4;
        a > this._length && (this._length = a);
      };
      f.prototype.write2UnsignedInts = function(b, a) {
        var c = this._position;
        this._ensureCapacity(c + 8);
        this._requestViews(2);
        this._littleEndian === f._nativeLittleEndian && 0 === (c & 3) && this._i32 ? (this._i32[(c >> 2) + 0] = b, this._i32[(c >> 2) + 1] = a, this._position = c += 8, c > this._length && (this._length = c)) : (this.writeUnsignedInt(b), this.writeUnsignedInt(a));
      };
      f.prototype.write4UnsignedInts = function(b, a, c, g) {
        var d = this._position;
        this._ensureCapacity(d + 16);
        this._requestViews(2);
        this._littleEndian === f._nativeLittleEndian && 0 === (d & 3) && this._i32 ? (this._i32[(d >> 2) + 0] = b, this._i32[(d >> 2) + 1] = a, this._i32[(d >> 2) + 2] = c, this._i32[(d >> 2) + 3] = g, this._position = d += 16, d > this._length && (this._length = d)) : (this.writeUnsignedInt(b), this.writeUnsignedInt(a), this.writeUnsignedInt(c), this.writeUnsignedInt(g));
      };
      f.prototype.writeFloat = function(b) {
        var a = this._position;
        this._ensureCapacity(a + 4);
        this._requestViews(4);
        if (this._littleEndian === f._nativeLittleEndian && 0 === (a & 3) && this._f32) {
          this._f32[a >> 2] = b;
        } else {
          var c = this._u8;
          e.IntegerUtilities.f32[0] = b;
          b = e.IntegerUtilities.u8;
          this._littleEndian ? (c[a + 0] = b[0], c[a + 1] = b[1], c[a + 2] = b[2], c[a + 3] = b[3]) : (c[a + 0] = b[3], c[a + 1] = b[2], c[a + 2] = b[1], c[a + 3] = b[0]);
        }
        this._position = a += 4;
        a > this._length && (this._length = a);
      };
      f.prototype.write2Floats = function(b, a) {
        var c = this._position;
        this._ensureCapacity(c + 8);
        this._requestViews(4);
        this._littleEndian === f._nativeLittleEndian && 0 === (c & 3) && this._f32 ? (this._f32[(c >> 2) + 0] = b, this._f32[(c >> 2) + 1] = a, this._position = c += 8, c > this._length && (this._length = c)) : (this.writeFloat(b), this.writeFloat(a));
      };
      f.prototype.write6Floats = function(b, a, c, g, d, p) {
        var h = this._position;
        this._ensureCapacity(h + 24);
        this._requestViews(4);
        this._littleEndian === f._nativeLittleEndian && 0 === (h & 3) && this._f32 ? (this._f32[(h >> 2) + 0] = b, this._f32[(h >> 2) + 1] = a, this._f32[(h >> 2) + 2] = c, this._f32[(h >> 2) + 3] = g, this._f32[(h >> 2) + 4] = d, this._f32[(h >> 2) + 5] = p, this._position = h += 24, h > this._length && (this._length = h)) : (this.writeFloat(b), this.writeFloat(a), this.writeFloat(c), this.writeFloat(g), this.writeFloat(d), this.writeFloat(p));
      };
      f.prototype.writeDouble = function(b) {
        var a = this._position;
        this._ensureCapacity(a + 8);
        var c = this._u8;
        e.IntegerUtilities.f64[0] = b;
        b = e.IntegerUtilities.u8;
        this._littleEndian ? (c[a + 0] = b[0], c[a + 1] = b[1], c[a + 2] = b[2], c[a + 3] = b[3], c[a + 4] = b[4], c[a + 5] = b[5], c[a + 6] = b[6], c[a + 7] = b[7]) : (c[a + 0] = b[7], c[a + 1] = b[6], c[a + 2] = b[5], c[a + 3] = b[4], c[a + 4] = b[3], c[a + 5] = b[2], c[a + 6] = b[1], c[a + 7] = b[0]);
        this._position = a += 8;
        a > this._length && (this._length = a);
      };
      f.prototype.readRawBytes = function() {
        return new Int8Array(this._buffer, 0, this._length);
      };
      f.prototype.writeUTF = function(b) {
        b = r(b);
        b = w(b);
        this.writeShort(b.length);
        this.writeRawBytes(b);
      };
      f.prototype.writeUTFBytes = function(b) {
        b = r(b);
        b = w(b);
        this.writeRawBytes(b);
      };
      f.prototype.readUTF = function() {
        return this.readUTFBytes(this.readShort());
      };
      f.prototype.readUTFBytes = function(b) {
        b >>>= 0;
        var a = this._position;
        a + b > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        this._position += b;
        return k(new Int8Array(this._buffer, a, b));
      };
      Object.defineProperty(f.prototype, "length", {get:function() {
        return this._length;
      }, set:function(b) {
        b >>>= 0;
        b > this._buffer.byteLength && this._ensureCapacity(b);
        this._length = b;
        this._position = c(this._position, 0, this._length);
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(f.prototype, "bytesAvailable", {get:function() {
        return this._length - this._position;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(f.prototype, "position", {get:function() {
        return this._position;
      }, set:function(b) {
        this._position = b >>> 0;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(f.prototype, "buffer", {get:function() {
        return this._buffer;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(f.prototype, "bytes", {get:function() {
        return this._u8;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(f.prototype, "ints", {get:function() {
        this._requestViews(2);
        return this._i32;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(f.prototype, "objectEncoding", {get:function() {
        return this._objectEncoding;
      }, set:function(b) {
        this._objectEncoding = b >>> 0;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(f.prototype, "endian", {get:function() {
        return this._littleEndian ? "littleEndian" : "bigEndian";
      }, set:function(b) {
        b = r(b);
        this._littleEndian = "auto" === b ? f._nativeLittleEndian : "littleEndian" === b;
      }, enumerable:!0, configurable:!0});
      f.prototype.toString = function() {
        return k(new Int8Array(this._buffer, 0, this._length));
      };
      f.prototype.toBlob = function(b) {
        return new Blob([new Int8Array(this._buffer, this._position, this._length)], {type:b});
      };
      f.prototype.writeMultiByte = function(b, c) {
        r(b);
        r(c);
        a("packageInternal flash.utils.ObjectOutput::writeMultiByte");
      };
      f.prototype.readMultiByte = function(b, c) {
        r(c);
        a("packageInternal flash.utils.ObjectInput::readMultiByte");
      };
      f.prototype.getValue = function(b) {
        b |= 0;
        return b >= this._length ? void 0 : this._u8[b];
      };
      f.prototype.setValue = function(b, a) {
        b |= 0;
        var c = b + 1;
        this._ensureCapacity(c);
        this._u8[b] = a;
        c > this._length && (this._length = c);
      };
      f.prototype.readFixed = function() {
        return this.readInt() / 65536;
      };
      f.prototype.readFixed8 = function() {
        return this.readShort() / 256;
      };
      f.prototype.readFloat16 = function() {
        var b = this.readUnsignedShort(), a = b >> 15 ? -1 : 1, c = (b & 31744) >> 10, b = b & 1023;
        return c ? 31 === c ? b ? NaN : Infinity * a : a * Math.pow(2, c - 15) * (1 + b / 1024) : a * Math.pow(2, -14) * (b / 1024);
      };
      f.prototype.readEncodedU32 = function() {
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
      f.prototype.readBits = function(b) {
        return this.readUnsignedBits(b) << 32 - b >> 32 - b;
      };
      f.prototype.readUnsignedBits = function(b) {
        for (var a = this._bitBuffer, c = this._bitLength;b > c;) {
          a = a << 8 | this.readUnsignedByte(), c += 8;
        }
        c -= b;
        b = a >>> c & n[b];
        this._bitBuffer = a;
        this._bitLength = c;
        return b;
      };
      f.prototype.readFixedBits = function(b) {
        return this.readBits(b) / 65536;
      };
      f.prototype.readString = function(b) {
        var a = this._position;
        if (b) {
          a + b > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError), this._position += b;
        } else {
          b = 0;
          for (var c = a;c < this._length && this._u8[c];c++) {
            b++;
          }
          this._position += b + 1;
        }
        return k(new Int8Array(this._buffer, a, b));
      };
      f.prototype.align = function() {
        this._bitLength = this._bitBuffer = 0;
      };
      f.prototype.deflate = function() {
        this.compress("deflate");
      };
      f.prototype.inflate = function() {
        this.uncompress("deflate");
      };
      f.prototype.compress = function(b) {
        b = 0 === arguments.length ? "zlib" : r(b);
        var a;
        switch(b) {
          case "zlib":
            a = new m.Deflate(!0);
            break;
          case "deflate":
            a = new m.Deflate(!1);
            break;
          default:
            return;
        }
        var c = new f;
        a.onData = c.writeRawBytes.bind(c);
        a.push(this._u8.subarray(0, this._length));
        a.close();
        this._ensureCapacity(c._u8.length);
        this._u8.set(c._u8);
        this.length = c.length;
        this._position = 0;
      };
      f.prototype.uncompress = function(b) {
        b = 0 === arguments.length ? "zlib" : r(b);
        var a;
        switch(b) {
          case "zlib":
            a = m.Inflate.create(!0);
            break;
          case "deflate":
            a = m.Inflate.create(!1);
            break;
          case "lzma":
            a = new m.LzmaDecoder(!1);
            break;
          default:
            return;
        }
        var c = new f, g;
        a.onData = c.writeRawBytes.bind(c);
        a.onError = function(d) {
          return g = d;
        };
        a.push(this._u8.subarray(0, this._length));
        g && this.sec.throwError("IOError", Errors.CompressedDataError);
        a.close();
        this._ensureCapacity(c._u8.length);
        this._u8.set(c._u8);
        this.length = c.length;
        this._position = 0;
      };
      f._nativeLittleEndian = 1 === (new Int8Array((new Int32Array([1])).buffer))[0];
      f.INITIAL_SIZE = 128;
      f._arrayBufferPool = new e.ArrayBufferPool;
      return f;
    }();
    m.DataBuffer = f;
  })(e.ArrayUtilities || (e.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(e) {
  var m = e.ArrayUtilities.DataBuffer, r = e.ArrayUtilities.ensureTypedArrayCapacity;
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
  })(e.PathCommand || (e.PathCommand = {}));
  (function(a) {
    a[a.Linear = 16] = "Linear";
    a[a.Radial = 18] = "Radial";
  })(e.GradientType || (e.GradientType = {}));
  (function(a) {
    a[a.Pad = 0] = "Pad";
    a[a.Reflect = 1] = "Reflect";
    a[a.Repeat = 2] = "Repeat";
  })(e.GradientSpreadMethod || (e.GradientSpreadMethod = {}));
  (function(a) {
    a[a.RGB = 0] = "RGB";
    a[a.LinearRGB = 1] = "LinearRGB";
  })(e.GradientInterpolationMethod || (e.GradientInterpolationMethod = {}));
  (function(a) {
    a[a.None = 0] = "None";
    a[a.Normal = 1] = "Normal";
    a[a.Vertical = 2] = "Vertical";
    a[a.Horizontal = 3] = "Horizontal";
  })(e.LineScaleMode || (e.LineScaleMode = {}));
  var a = function() {
    return function(a, c, h, n, f, v, e, q, b, l, t) {
      this.commands = a;
      this.commandsPosition = c;
      this.coordinates = h;
      this.morphCoordinates = n;
      this.coordinatesPosition = f;
      this.styles = v;
      this.stylesLength = e;
      this.morphStyles = q;
      this.morphStylesLength = b;
      this.hasFills = l;
      this.hasLines = t;
    };
  }();
  e.PlainObjectShapeData = a;
  var w;
  (function(a) {
    a[a.Commands = 32] = "Commands";
    a[a.Coordinates = 128] = "Coordinates";
    a[a.Styles = 16] = "Styles";
  })(w || (w = {}));
  w = function() {
    function k(a) {
      void 0 === a && (a = !0);
      a && this.clear();
    }
    k.FromPlainObject = function(a) {
      var h = new k(!1);
      h.commands = a.commands;
      h.coordinates = a.coordinates;
      h.morphCoordinates = a.morphCoordinates;
      h.commandsPosition = a.commandsPosition;
      h.coordinatesPosition = a.coordinatesPosition;
      h.styles = m.FromArrayBuffer(a.styles, a.stylesLength);
      h.styles.endian = "auto";
      a.morphStyles && (h.morphStyles = m.FromArrayBuffer(a.morphStyles, a.morphStylesLength), h.morphStyles.endian = "auto");
      h.hasFills = a.hasFills;
      h.hasLines = a.hasLines;
      return h;
    };
    k.prototype.moveTo = function(a, h) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = 9;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = h;
    };
    k.prototype.lineTo = function(a, h) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = 10;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = h;
    };
    k.prototype.curveTo = function(a, h, n, f) {
      this.ensurePathCapacities(1, 4);
      this.commands[this.commandsPosition++] = 11;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = h;
      this.coordinates[this.coordinatesPosition++] = n;
      this.coordinates[this.coordinatesPosition++] = f;
    };
    k.prototype.cubicCurveTo = function(a, h, n, f, k, e) {
      this.ensurePathCapacities(1, 6);
      this.commands[this.commandsPosition++] = 12;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = h;
      this.coordinates[this.coordinatesPosition++] = n;
      this.coordinates[this.coordinatesPosition++] = f;
      this.coordinates[this.coordinatesPosition++] = k;
      this.coordinates[this.coordinatesPosition++] = e;
    };
    k.prototype.beginFill = function(a) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 1;
      this.styles.writeUnsignedInt(a);
      this.hasFills = !0;
    };
    k.prototype.writeMorphFill = function(a) {
      this.morphStyles.writeUnsignedInt(a);
    };
    k.prototype.endFill = function() {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 4;
    };
    k.prototype.endLine = function() {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 8;
    };
    k.prototype.lineStyle = function(a, h, n, f, k, e, q) {
      this.ensurePathCapacities(2, 0);
      this.commands[this.commandsPosition++] = 5;
      this.coordinates[this.coordinatesPosition++] = a;
      a = this.styles;
      a.writeUnsignedInt(h);
      a.writeBoolean(n);
      a.writeUnsignedByte(f);
      a.writeUnsignedByte(k);
      a.writeUnsignedByte(e);
      a.writeUnsignedByte(q);
      this.hasLines = !0;
    };
    k.prototype.writeMorphLineStyle = function(a, h) {
      this.morphCoordinates[this.coordinatesPosition - 1] = a;
      this.morphStyles.writeUnsignedInt(h);
    };
    k.prototype.beginBitmap = function(a, h, n, f, k) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = a;
      a = this.styles;
      a.writeUnsignedInt(h);
      this._writeStyleMatrix(n, !1);
      a.writeBoolean(f);
      a.writeBoolean(k);
      this.hasFills = !0;
    };
    k.prototype.writeMorphBitmap = function(a) {
      this._writeStyleMatrix(a, !0);
    };
    k.prototype.beginGradient = function(a, h, n, f, k, e, q, b) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = a;
      a = this.styles;
      a.writeUnsignedByte(f);
      a.writeShort(b);
      this._writeStyleMatrix(k, !1);
      f = h.length;
      a.writeByte(f);
      for (k = 0;k < f;k++) {
        a.writeUnsignedByte(n[k]), a.writeUnsignedInt(h[k]);
      }
      a.writeUnsignedByte(e);
      a.writeUnsignedByte(q);
      this.hasFills = !0;
    };
    k.prototype.writeMorphGradient = function(a, h, n) {
      this._writeStyleMatrix(n, !0);
      n = this.morphStyles;
      for (var f = 0;f < a.length;f++) {
        n.writeUnsignedByte(h[f]), n.writeUnsignedInt(a[f]);
      }
    };
    k.prototype.writeCommandAndCoordinates = function(a, h, n) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = h;
      this.coordinates[this.coordinatesPosition++] = n;
    };
    k.prototype.writeCoordinates = function(a, h) {
      this.ensurePathCapacities(0, 2);
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = h;
    };
    k.prototype.writeMorphCoordinates = function(a, h) {
      this.morphCoordinates = r(this.morphCoordinates, this.coordinatesPosition);
      this.morphCoordinates[this.coordinatesPosition - 2] = a;
      this.morphCoordinates[this.coordinatesPosition - 1] = h;
    };
    k.prototype.clear = function() {
      this.commandsPosition = this.coordinatesPosition = 0;
      this.commands = new Uint8Array(32);
      this.coordinates = new Int32Array(128);
      this.styles = new m(16);
      this.styles.endian = "auto";
      this.hasFills = this.hasLines = !1;
    };
    k.prototype.isEmpty = function() {
      return 0 === this.commandsPosition;
    };
    k.prototype.clone = function() {
      var a = new k(!1);
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
    k.prototype.toPlainObject = function() {
      return new a(this.commands, this.commandsPosition, this.coordinates, this.morphCoordinates, this.coordinatesPosition, this.styles.buffer, this.styles.length, this.morphStyles && this.morphStyles.buffer, this.morphStyles ? this.morphStyles.length : 0, this.hasFills, this.hasLines);
    };
    Object.defineProperty(k.prototype, "buffers", {get:function() {
      var a = [this.commands.buffer, this.coordinates.buffer, this.styles.buffer];
      this.morphCoordinates && a.push(this.morphCoordinates.buffer);
      this.morphStyles && a.push(this.morphStyles.buffer);
      return a;
    }, enumerable:!0, configurable:!0});
    k.prototype._writeStyleMatrix = function(a, h) {
      (h ? this.morphStyles : this.styles).write6Floats(a.a, a.b, a.c, a.d, a.tx, a.ty);
    };
    k.prototype.ensurePathCapacities = function(a, h) {
      this.commands = r(this.commands, this.commandsPosition + a);
      this.coordinates = r(this.coordinates, this.coordinatesPosition + h);
    };
    return k;
  }();
  e.ShapeData = w;
})(Shumway || (Shumway = {}));
(function(e) {
  (function(e) {
    (function(e) {
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
      })(e.SwfTagCode || (e.SwfTagCode = {}));
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
      })(e.DefinitionTags || (e.DefinitionTags = {}));
      (function(a) {
        a[a.CODE_DEFINE_BITS = 6] = "CODE_DEFINE_BITS";
        a[a.CODE_DEFINE_BITS_JPEG2 = 21] = "CODE_DEFINE_BITS_JPEG2";
        a[a.CODE_DEFINE_BITS_JPEG3 = 35] = "CODE_DEFINE_BITS_JPEG3";
        a[a.CODE_DEFINE_BITS_JPEG4 = 90] = "CODE_DEFINE_BITS_JPEG4";
      })(e.ImageDefinitionTags || (e.ImageDefinitionTags = {}));
      (function(a) {
        a[a.CODE_DEFINE_FONT = 10] = "CODE_DEFINE_FONT";
        a[a.CODE_DEFINE_FONT2 = 48] = "CODE_DEFINE_FONT2";
        a[a.CODE_DEFINE_FONT3 = 75] = "CODE_DEFINE_FONT3";
        a[a.CODE_DEFINE_FONT4 = 91] = "CODE_DEFINE_FONT4";
      })(e.FontDefinitionTags || (e.FontDefinitionTags = {}));
      (function(a) {
        a[a.CODE_PLACE_OBJECT = 4] = "CODE_PLACE_OBJECT";
        a[a.CODE_PLACE_OBJECT2 = 26] = "CODE_PLACE_OBJECT2";
        a[a.CODE_PLACE_OBJECT3 = 70] = "CODE_PLACE_OBJECT3";
        a[a.CODE_REMOVE_OBJECT = 5] = "CODE_REMOVE_OBJECT";
        a[a.CODE_REMOVE_OBJECT2 = 28] = "CODE_REMOVE_OBJECT2";
        a[a.CODE_START_SOUND = 15] = "CODE_START_SOUND";
        a[a.CODE_START_SOUND2 = 89] = "CODE_START_SOUND2";
        a[a.CODE_VIDEO_FRAME = 61] = "CODE_VIDEO_FRAME";
      })(e.ControlTags || (e.ControlTags = {}));
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
      })(e.PlaceObjectFlags || (e.PlaceObjectFlags = {}));
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
      })(e.AVM1ClipEvents || (e.AVM1ClipEvents = {}));
      (function(a) {
        a[a.StateUp = 1] = "StateUp";
        a[a.StateOver = 2] = "StateOver";
        a[a.StateDown = 4] = "StateDown";
        a[a.StateHitTest = 8] = "StateHitTest";
        a[a.HasFilterList = 16] = "HasFilterList";
        a[a.HasBlendMode = 32] = "HasBlendMode";
      })(e.ButtonCharacterFlags || (e.ButtonCharacterFlags = {}));
      (function(a) {
        a[a.Bold = 1] = "Bold";
        a[a.Italic = 2] = "Italic";
        a[a.WideOrHasFontData = 4] = "WideOrHasFontData";
        a[a.WideOffset = 8] = "WideOffset";
        a[a.Ansi = 16] = "Ansi";
        a[a.SmallText = 32] = "SmallText";
        a[a.ShiftJis = 64] = "ShiftJis";
        a[a.HasLayout = 128] = "HasLayout";
      })(e.FontFlags || (e.FontFlags = {}));
      (function(a) {
        a[a.HasMoveX = 1] = "HasMoveX";
        a[a.HasMoveY = 2] = "HasMoveY";
        a[a.HasColor = 4] = "HasColor";
        a[a.HasFont = 8] = "HasFont";
      })(e.TextRecordFlags || (e.TextRecordFlags = {}));
      (function(a) {
        a[a.HasInPoint = 1] = "HasInPoint";
        a[a.HasOutPoint = 2] = "HasOutPoint";
        a[a.HasLoops = 4] = "HasLoops";
        a[a.HasEnvelope = 8] = "HasEnvelope";
        a[a.NoMultiple = 16] = "NoMultiple";
        a[a.Stop = 32] = "Stop";
      })(e.SoundInfoFlags || (e.SoundInfoFlags = {}));
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
      })(e.TextFlags || (e.TextFlags = {}));
      (function(a) {
        a[a.UsesScalingStrokes = 1] = "UsesScalingStrokes";
        a[a.UsesNonScalingStrokes = 2] = "UsesNonScalingStrokes";
        a[a.UsesFillWindingRule = 4] = "UsesFillWindingRule";
        a[a.IsMorph = 8] = "IsMorph";
      })(e.ShapeFlags || (e.ShapeFlags = {}));
      (function(a) {
        a[a.Move = 1] = "Move";
        a[a.HasFillStyle0 = 2] = "HasFillStyle0";
        a[a.HasFillStyle1 = 4] = "HasFillStyle1";
        a[a.HasLineStyle = 8] = "HasLineStyle";
        a[a.HasNewStyles = 16] = "HasNewStyles";
        a[a.IsStraight = 32] = "IsStraight";
        a[a.IsGeneral = 64] = "IsGeneral";
        a[a.IsVertical = 128] = "IsVertical";
      })(e.ShapeRecordFlags || (e.ShapeRecordFlags = {}));
    })(e.Parser || (e.Parser = {}));
  })(e.SWF || (e.SWF = {}));
})(Shumway || (Shumway = {}));
(function(e) {
  var m = e.Debug.unexpected, r = function() {
    function a(a, k, c, h) {
      this.url = a;
      this.method = k;
      this.mimeType = c;
      this.data = h;
    }
    a.prototype.readAll = function(a, k) {
      var c = this.url, h = this.xhr = new XMLHttpRequest({mozSystem:!0});
      h.open(this.method || "GET", this.url, !0);
      h.responseType = "arraybuffer";
      a && (h.onprogress = function(c) {
        a(h.response, c.loaded, c.total);
      });
      h.onreadystatechange = function(a) {
        4 === h.readyState && (200 !== h.status && 0 !== h.status || null === h.response ? (m("Path: " + c + " not found."), k(null, h.statusText)) : k(h.response));
      };
      this.mimeType && h.setRequestHeader("Content-Type", this.mimeType);
      h.send(this.data || null);
    };
    a.prototype.readChunked = function(a, k, c, h, n, f) {
      if (0 >= a) {
        this.readAsync(k, c, h, n, f);
      } else {
        var v = 0, e = new Uint8Array(a), q = 0, b;
        this.readAsync(function(c, h) {
          b = h.total;
          for (var g = c.length, d = 0;v + g >= a;) {
            var p = a - v;
            e.set(c.subarray(d, d + p), v);
            d += p;
            g -= p;
            q += a;
            k(e, {loaded:q, total:b});
            v = 0;
          }
          e.set(c.subarray(d), v);
          v += g;
        }, c, h, function() {
          0 < v && (q += v, k(e.subarray(0, v), {loaded:q, total:b}), v = 0);
          n && n();
        }, f);
      }
    };
    a.prototype.readAsync = function(a, k, c, h, n) {
      var f = this.xhr = new XMLHttpRequest({mozSystem:!0}), e = this.url, u = 0, q = 0;
      f.open(this.method || "GET", e, !0);
      f.responseType = "moz-chunked-arraybuffer";
      var b = "moz-chunked-arraybuffer" !== f.responseType;
      b && (f.responseType = "arraybuffer");
      f.onprogress = function(c) {
        b || (u = c.loaded, q = c.total, c = new Uint8Array(f.response), u = Math.max(u, c.byteLength), q = Math.max(q, c.byteLength), a(c, {loaded:u, total:q}));
      };
      f.onreadystatechange = function(c) {
        2 === f.readyState && n && n(e, f.status, f.getAllResponseHeaders());
        4 === f.readyState && (200 !== f.status && 0 !== f.status || null === f.response && (0 === q || u !== q) ? k(f.statusText) : b && (c = f.response, a(new Uint8Array(c), {loaded:c.byteLength, total:c.byteLength})));
      };
      f.onload = function() {
        h && h();
      };
      this.mimeType && f.setRequestHeader("Content-Type", this.mimeType);
      f.send(this.data || null);
      c && c();
    };
    a.prototype.abort = function() {
      this.xhr && (this.xhr.abort(), this.xhr = null);
    };
    return a;
  }();
  e.BinaryFileReader = r;
})(Shumway || (Shumway = {}));
(function(e) {
  var m = function() {
    function e() {
      this.isAS3TraceOn = !0;
      this._startTime = Date.now();
    }
    Object.defineProperty(e.prototype, "currentTimestamp", {get:function() {
      return Date.now() - this._startTime;
    }, enumerable:!0, configurable:!0});
    e.prototype._writeLine = function(a) {
    };
    e.prototype.writeAS3Trace = function(a) {
    };
    return e;
  }();
  e.FlashLog = m;
  e.flashlog = null;
})(Shumway || (Shumway = {}));
(function(e) {
  (function(e) {
    (function(a) {
      a[a.Objects = 0] = "Objects";
      a[a.References = 1] = "References";
    })(e.RemotingPhase || (e.RemotingPhase = {}));
    (function(a) {
      a[a.HasMatrix = 1] = "HasMatrix";
      a[a.HasBounds = 2] = "HasBounds";
      a[a.HasChildren = 4] = "HasChildren";
      a[a.HasColorTransform = 8] = "HasColorTransform";
      a[a.HasClipRect = 16] = "HasClipRect";
      a[a.HasMiscellaneousProperties = 32] = "HasMiscellaneousProperties";
      a[a.HasMask = 64] = "HasMask";
      a[a.HasClip = 128] = "HasClip";
    })(e.MessageBits || (e.MessageBits = {}));
    (function(a) {
      a[a.None = 0] = "None";
      a[a.Asset = 134217728] = "Asset";
    })(e.IDMask || (e.IDMask = {}));
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
    })(e.MessageTag || (e.MessageTag = {}));
    (function(a) {
      a[a.Blur = 0] = "Blur";
      a[a.DropShadow = 1] = "DropShadow";
      a[a.ColorMatrix = 2] = "ColorMatrix";
    })(e.FilterType || (e.FilterType = {}));
    (function(a) {
      a[a.Identity = 0] = "Identity";
      a[a.AlphaMultiplierOnly = 1] = "AlphaMultiplierOnly";
      a[a.AlphaMultiplierWithOffsets = 2] = "AlphaMultiplierWithOffsets";
      a[a.All = 3] = "All";
    })(e.ColorTransformEncoding || (e.ColorTransformEncoding = {}));
    (function(a) {
      a[a.TranslationOnly = 0] = "TranslationOnly";
      a[a.ScaleAndTranslationOnly = 1] = "ScaleAndTranslationOnly";
      a[a.UniformScaleAndTranslationOnly = 2] = "UniformScaleAndTranslationOnly";
      a[a.All = 3] = "All";
    })(e.MatrixEncoding || (e.MatrixEncoding = {}));
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
    })(e.VideoPlaybackEvent || (e.VideoPlaybackEvent = {}));
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
    })(e.VideoControlEvent || (e.VideoControlEvent = {}));
    (function(a) {
      a[a.ShowAll = 0] = "ShowAll";
      a[a.ExactFit = 1] = "ExactFit";
      a[a.NoBorder = 2] = "NoBorder";
      a[a.NoScale = 4] = "NoScale";
    })(e.StageScaleMode || (e.StageScaleMode = {}));
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
    })(e.StageAlignFlags || (e.StageAlignFlags = {}));
    e.MouseEventNames = "click dblclick mousedown mousemove mouseup mouseover mouseout".split(" ");
    e.KeyboardEventNames = ["keydown", "keypress", "keyup"];
    (function(a) {
      a[a.CtrlKey = 1] = "CtrlKey";
      a[a.AltKey = 2] = "AltKey";
      a[a.ShiftKey = 4] = "ShiftKey";
    })(e.KeyboardEventFlags || (e.KeyboardEventFlags = {}));
    (function(a) {
      a[a.DocumentHidden = 0] = "DocumentHidden";
      a[a.DocumentVisible = 1] = "DocumentVisible";
      a[a.WindowBlur = 2] = "WindowBlur";
      a[a.WindowFocus = 3] = "WindowFocus";
    })(e.FocusEventType || (e.FocusEventType = {}));
    var r = function() {
      function a(a, k) {
        this.window = a;
        this.target = k;
      }
      Object.defineProperty(a.prototype, "onAsyncMessage", {set:function(a) {
        this.window.addEventListener("message", function(k) {
          Promise.resolve(k.data).then(function(c) {
            a(c);
          });
        });
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "onSyncMessage", {set:function(a) {
        this.window.addEventListener("syncmessage", function(k) {
          k = k.detail;
          k.result = a(k.msg);
        });
      }, enumerable:!0, configurable:!0});
      a.prototype.postAsyncMessage = function(a, k) {
        this.target.postMessage(a, "*", k);
      };
      a.prototype.sendSyncMessage = function(a, k) {
        var c = this.target.document.createEvent("CustomEvent"), h = {msg:a, result:void 0};
        c.initCustomEvent("syncmessage", !1, !1, h);
        this.target.dispatchEvent(c);
        return h.result;
      };
      return a;
    }();
    e.WindowTransportPeer = r;
    r = function() {
      function a() {
      }
      Object.defineProperty(a.prototype, "onAsyncMessage", {set:function(a) {
        ShumwayCom.setAsyncMessageCallback(a);
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "onSyncMessage", {set:function(a) {
        ShumwayCom.setSyncMessageCallback(a);
      }, enumerable:!0, configurable:!0});
      a.prototype.postAsyncMessage = function(a, k) {
        ShumwayCom.postAsyncMessage(a);
      };
      a.prototype.sendSyncMessage = function(a, k) {
        return ShumwayCom.sendSyncMessage(a);
      };
      return a;
    }();
    e.ShumwayComTransportPeer = r;
  })(e.Remoting || (e.Remoting = {}));
})(Shumway || (Shumway = {}));
var throwError, Errors;
(function(e) {
  (function(e) {
    (function(e) {
      var a = function() {
        function a() {
        }
        a.toRGBA = function(a, h, n, f) {
          void 0 === f && (f = 1);
          return "rgba(" + a + "," + h + "," + n + "," + f + ")";
        };
        return a;
      }();
      e.UI = a;
      var w = function() {
        function k() {
        }
        k.prototype.tabToolbar = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(37, 44, 51, c);
        };
        k.prototype.toolbars = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(52, 60, 69, c);
        };
        k.prototype.selectionBackground = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(29, 79, 115, c);
        };
        k.prototype.selectionText = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(245, 247, 250, c);
        };
        k.prototype.splitters = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(0, 0, 0, c);
        };
        k.prototype.bodyBackground = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(17, 19, 21, c);
        };
        k.prototype.sidebarBackground = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(24, 29, 32, c);
        };
        k.prototype.attentionBackground = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(161, 134, 80, c);
        };
        k.prototype.bodyText = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(143, 161, 178, c);
        };
        k.prototype.foregroundTextGrey = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(182, 186, 191, c);
        };
        k.prototype.contentTextHighContrast = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(169, 186, 203, c);
        };
        k.prototype.contentTextGrey = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(143, 161, 178, c);
        };
        k.prototype.contentTextDarkGrey = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(95, 115, 135, c);
        };
        k.prototype.blueHighlight = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(70, 175, 227, c);
        };
        k.prototype.purpleHighlight = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(107, 122, 187, c);
        };
        k.prototype.pinkHighlight = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(223, 128, 255, c);
        };
        k.prototype.redHighlight = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(235, 83, 104, c);
        };
        k.prototype.orangeHighlight = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(217, 102, 41, c);
        };
        k.prototype.lightOrangeHighlight = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(217, 155, 40, c);
        };
        k.prototype.greenHighlight = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(112, 191, 83, c);
        };
        k.prototype.blueGreyHighlight = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(94, 136, 176, c);
        };
        return k;
      }();
      e.UIThemeDark = w;
      w = function() {
        function k() {
        }
        k.prototype.tabToolbar = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(235, 236, 237, c);
        };
        k.prototype.toolbars = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(240, 241, 242, c);
        };
        k.prototype.selectionBackground = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(76, 158, 217, c);
        };
        k.prototype.selectionText = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(245, 247, 250, c);
        };
        k.prototype.splitters = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(170, 170, 170, c);
        };
        k.prototype.bodyBackground = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(252, 252, 252, c);
        };
        k.prototype.sidebarBackground = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(247, 247, 247, c);
        };
        k.prototype.attentionBackground = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(161, 134, 80, c);
        };
        k.prototype.bodyText = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(24, 25, 26, c);
        };
        k.prototype.foregroundTextGrey = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(88, 89, 89, c);
        };
        k.prototype.contentTextHighContrast = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(41, 46, 51, c);
        };
        k.prototype.contentTextGrey = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(143, 161, 178, c);
        };
        k.prototype.contentTextDarkGrey = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(102, 115, 128, c);
        };
        k.prototype.blueHighlight = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(0, 136, 204, c);
        };
        k.prototype.purpleHighlight = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(91, 95, 255, c);
        };
        k.prototype.pinkHighlight = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(184, 46, 229, c);
        };
        k.prototype.redHighlight = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(237, 38, 85, c);
        };
        k.prototype.orangeHighlight = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(241, 60, 0, c);
        };
        k.prototype.lightOrangeHighlight = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(217, 126, 0, c);
        };
        k.prototype.greenHighlight = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(44, 187, 15, c);
        };
        k.prototype.blueGreyHighlight = function(c) {
          void 0 === c && (c = 1);
          return a.toRGBA(95, 136, 176, c);
        };
        return k;
      }();
      e.UIThemeLight = w;
    })(e.Theme || (e.Theme = {}));
  })(e.Tools || (e.Tools = {}));
})(Shumway || (Shumway = {}));
(function(e) {
  (function(e) {
    (function(e) {
      var a = function() {
        function a(k, c) {
          this._buffers = k || [];
          this._snapshots = [];
          this._windowStart = this._startTime = c;
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
          for (var c = 0, h = this.snapshotCount;c < h;c++) {
            a(this._snapshots[c], c);
          }
        };
        a.prototype.createSnapshots = function() {
          var a = Number.MIN_VALUE, c = 0;
          for (this._snapshots = [];0 < this._buffers.length;) {
            var h = this._buffers.shift().createSnapshot();
            h && (a < h.endTime && (a = h.endTime), c < h.maxDepth && (c = h.maxDepth), this._snapshots.push(h));
          }
          this._windowEnd = this._endTime = a;
          this._maxDepth = c;
        };
        a.prototype.setWindow = function(a, c) {
          if (a > c) {
            var h = a;
            a = c;
            c = h;
          }
          h = Math.min(c - a, this.totalTime);
          a < this._startTime ? (a = this._startTime, c = this._startTime + h) : c > this._endTime && (a = this._endTime - h, c = this._endTime);
          this._windowStart = a;
          this._windowEnd = c;
        };
        a.prototype.moveWindowTo = function(a) {
          this.setWindow(a - this.windowLength / 2, a + this.windowLength / 2);
        };
        return a;
      }();
      e.Profile = a;
    })(e.Profiler || (e.Profiler = {}));
  })(e.Tools || (e.Tools = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(e, m) {
  function r() {
    this.constructor = e;
  }
  for (var a in m) {
    m.hasOwnProperty(a) && (e[a] = m[a]);
  }
  r.prototype = m.prototype;
  e.prototype = new r;
};
(function(e) {
  (function(e) {
    (function(e) {
      var a = function() {
        return function(a) {
          this.kind = a;
          this.totalTime = this.selfTime = this.count = 0;
        };
      }();
      e.TimelineFrameStatistics = a;
      var m = function() {
        function k(a, h, n, f, k, e) {
          this.parent = a;
          this.kind = h;
          this.startData = n;
          this.endData = f;
          this.startTime = k;
          this.endTime = e;
          this.maxDepth = 0;
        }
        Object.defineProperty(k.prototype, "totalTime", {get:function() {
          return this.endTime - this.startTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(k.prototype, "selfTime", {get:function() {
          var a = this.totalTime;
          if (this.children) {
            for (var h = 0, n = this.children.length;h < n;h++) {
              var f = this.children[h], a = a - (f.endTime - f.startTime)
            }
          }
          return a;
        }, enumerable:!0, configurable:!0});
        k.prototype.getChildIndex = function(a) {
          for (var h = this.children, n = 0;n < h.length;n++) {
            if (h[n].endTime > a) {
              return n;
            }
          }
          return 0;
        };
        k.prototype.getChildRange = function(a, h) {
          if (this.children && a <= this.endTime && h >= this.startTime && h >= a) {
            var n = this._getNearestChild(a), f = this._getNearestChildReverse(h);
            if (n <= f) {
              return a = this.children[n].startTime, h = this.children[f].endTime, {startIndex:n, endIndex:f, startTime:a, endTime:h, totalTime:h - a};
            }
          }
          return null;
        };
        k.prototype._getNearestChild = function(a) {
          var h = this.children;
          if (h && h.length) {
            if (a <= h[0].endTime) {
              return 0;
            }
            for (var n, f = 0, k = h.length - 1;k > f;) {
              n = (f + k) / 2 | 0;
              var e = h[n];
              if (a >= e.startTime && a <= e.endTime) {
                return n;
              }
              a > e.endTime ? f = n + 1 : k = n;
            }
            return Math.ceil((f + k) / 2);
          }
          return 0;
        };
        k.prototype._getNearestChildReverse = function(a) {
          var h = this.children;
          if (h && h.length) {
            var n = h.length - 1;
            if (a >= h[n].startTime) {
              return n;
            }
            for (var f, k = 0;n > k;) {
              f = Math.ceil((k + n) / 2);
              var e = h[f];
              if (a >= e.startTime && a <= e.endTime) {
                return f;
              }
              a > e.endTime ? k = f : n = f - 1;
            }
            return (k + n) / 2 | 0;
          }
          return 0;
        };
        k.prototype.query = function(a) {
          if (a < this.startTime || a > this.endTime) {
            return null;
          }
          var h = this.children;
          if (h && 0 < h.length) {
            for (var n, f = 0, k = h.length - 1;k > f;) {
              var e = (f + k) / 2 | 0;
              n = h[e];
              if (a >= n.startTime && a <= n.endTime) {
                return n.query(a);
              }
              a > n.endTime ? f = e + 1 : k = e;
            }
            n = h[k];
            if (a >= n.startTime && a <= n.endTime) {
              return n.query(a);
            }
          }
          return this;
        };
        k.prototype.queryNext = function(a) {
          for (var h = this;a > h.endTime;) {
            if (h.parent) {
              h = h.parent;
            } else {
              break;
            }
          }
          return h.query(a);
        };
        k.prototype.getDepth = function() {
          for (var a = 0, h = this;h;) {
            a++, h = h.parent;
          }
          return a;
        };
        k.prototype.calculateStatistics = function() {
          function c(n) {
            if (n.kind) {
              var f = h[n.kind.id] || (h[n.kind.id] = new a(n.kind));
              f.count++;
              f.selfTime += n.selfTime;
              f.totalTime += n.totalTime;
            }
            n.children && n.children.forEach(c);
          }
          var h = this.statistics = [];
          c(this);
        };
        k.prototype.trace = function(a) {
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
        return k;
      }();
      e.TimelineFrame = m;
      m = function(a) {
        function c(c) {
          a.call(this, null, null, null, null, NaN, NaN);
          this.name = c;
        }
        __extends(c, a);
        return c;
      }(m);
      e.TimelineBufferSnapshot = m;
    })(e.Profiler || (e.Profiler = {}));
  })(e.Tools || (e.Tools = {}));
})(Shumway || (Shumway = {}));
(function(e) {
  (function(m) {
    (function(r) {
      var a = function() {
        function a(k, c) {
          void 0 === k && (k = "");
          this.name = k || "";
          this._startTime = e.isNullOrUndefined(c) ? jsGlobal.START_TIME : c;
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
          this._marks = new e.CircularBuffer(Int32Array, 20);
          this._times = new e.CircularBuffer(Float64Array, 20);
        };
        a.prototype._getKindId = function(k) {
          var c = a.MAX_KINDID;
          if (void 0 === this._kindNameMap[k]) {
            if (c = this._kinds.length, c < a.MAX_KINDID) {
              var h = {id:c, name:k, visible:!0};
              this._kinds.push(h);
              this._kindNameMap[k] = h;
            } else {
              c = a.MAX_KINDID;
            }
          } else {
            c = this._kindNameMap[k].id;
          }
          return c;
        };
        a.prototype._getMark = function(k, c, h) {
          var n = a.MAX_DATAID;
          e.isNullOrUndefined(h) || c === a.MAX_KINDID || (n = this._data.length, n < a.MAX_DATAID ? this._data.push(h) : n = a.MAX_DATAID);
          return k | n << 16 | c;
        };
        a.prototype.enter = function(k, c, h) {
          h = (e.isNullOrUndefined(h) ? performance.now() : h) - this._startTime;
          this._marks || this._initialize();
          this._depth++;
          k = this._getKindId(k);
          this._marks.write(this._getMark(a.ENTER, k, c));
          this._times.write(h);
          this._stack.push(k);
        };
        a.prototype.leave = function(k, c, h) {
          h = (e.isNullOrUndefined(h) ? performance.now() : h) - this._startTime;
          var n = this._stack.pop();
          k && (n = this._getKindId(k));
          this._marks.write(this._getMark(a.LEAVE, n, c));
          this._times.write(h);
          this._depth--;
        };
        a.prototype.count = function(a, c, h) {
        };
        a.prototype.createSnapshot = function(k) {
          void 0 === k && (k = Number.MAX_VALUE);
          if (!this._marks) {
            return null;
          }
          var c = this._times, h = this._kinds, n = this._data, f = new r.TimelineBufferSnapshot(this.name), v = [f], u = 0;
          this._marks || this._initialize();
          this._marks.forEachInReverse(function(f, b) {
            var l = n[f >>> 16 & a.MAX_DATAID], t = h[f & a.MAX_KINDID];
            if (e.isNullOrUndefined(t) || t.visible) {
              var g = f & 2147483648, d = c.get(b), p = v.length;
              if (g === a.LEAVE) {
                if (1 === p && (u++, u > k)) {
                  return !0;
                }
                v.push(new r.TimelineFrame(v[p - 1], t, null, l, NaN, d));
              } else {
                if (g === a.ENTER) {
                  if (t = v.pop(), g = v[v.length - 1]) {
                    for (g.children ? g.children.unshift(t) : g.children = [t], g = v.length, t.depth = g, t.startData = l, t.startTime = d;t;) {
                      if (t.maxDepth < g) {
                        t.maxDepth = g, t = t.parent;
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
          f.children && f.children.length && (f.startTime = f.children[0].startTime, f.endTime = f.children[f.children.length - 1].endTime);
          return f;
        };
        a.prototype.reset = function(a) {
          this._startTime = e.isNullOrUndefined(a) ? performance.now() : a;
          this._marks ? (this._depth = 0, this._data = [], this._marks.reset(), this._times.reset()) : this._initialize();
        };
        a.FromFirefoxProfile = function(k, c) {
          for (var h = k.profile.threads[0].samples, n = new a(c, h[0].time), f = [], e, u = 0;u < h.length;u++) {
            e = h[u];
            var q = e.time, b = e.frames, l = 0;
            for (e = Math.min(b.length, f.length);l < e && b[l].location === f[l].location;) {
              l++;
            }
            for (var t = f.length - l, g = 0;g < t;g++) {
              e = f.pop(), n.leave(e.location, null, q);
            }
            for (;l < b.length;) {
              e = b[l++], n.enter(e.location, null, q);
            }
            f = b;
          }
          for (;e = f.pop();) {
            n.leave(e.location, null, q);
          }
          return n;
        };
        a.FromChromeProfile = function(e, c) {
          var h = e.timestamps, n = e.samples, f = new a(c, h[0] / 1E3), v = [], u = {}, q;
          a._resolveIds(e.head, u);
          for (var b = 0;b < h.length;b++) {
            var l = h[b] / 1E3, t = [];
            for (q = u[n[b]];q;) {
              t.unshift(q), q = q.parent;
            }
            var g = 0;
            for (q = Math.min(t.length, v.length);g < q && t[g] === v[g];) {
              g++;
            }
            for (var d = v.length - g, p = 0;p < d;p++) {
              q = v.pop(), f.leave(q.functionName, null, l);
            }
            for (;g < t.length;) {
              q = t[g++], f.enter(q.functionName, null, l);
            }
            v = t;
          }
          for (;q = v.pop();) {
            f.leave(q.functionName, null, l);
          }
          return f;
        };
        a._resolveIds = function(e, c) {
          c[e.id] = e;
          if (e.children) {
            for (var h = 0;h < e.children.length;h++) {
              e.children[h].parent = e, a._resolveIds(e.children[h], c);
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
    })(m.Profiler || (m.Profiler = {}));
  })(e.Tools || (e.Tools = {}));
})(Shumway || (Shumway = {}));
(function(e) {
  (function(m) {
    (function(r) {
      (function(a) {
        a[a.DARK = 0] = "DARK";
        a[a.LIGHT = 1] = "LIGHT";
      })(r.UIThemeType || (r.UIThemeType = {}));
      var a = function() {
        function a(e, c) {
          void 0 === c && (c = 0);
          this._container = e;
          this._headers = [];
          this._charts = [];
          this._profiles = [];
          this._activeProfile = null;
          this.themeType = c;
          this._tooltip = this._createTooltip();
        }
        a.prototype.createProfile = function(a, c) {
          var h = new r.Profile(a, c);
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
              this._theme = new m.Theme.UIThemeDark;
              break;
            case 1:
              this._theme = new m.Theme.UIThemeLight;
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
            this._activeProfile.forEachSnapshot(function(c, h) {
              a._headers.push(new r.FlameChartHeader(a, 1));
              a._charts.push(new r.FlameChart(a, c));
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
            var a = this, c = this._activeProfile.startTime, h = this._activeProfile.endTime;
            this._overviewHeader.initialize(c, h);
            this._overview.initialize(c, h);
            this._activeProfile.forEachSnapshot(function(n, f) {
              a._headers[f].initialize(c, h);
              a._charts[f].initialize(c, h);
            });
          }
        };
        a.prototype._onResize = function() {
          if (this._activeProfile) {
            var a = this, c = this._container.offsetWidth;
            this._overviewHeader.setSize(c);
            this._overview.setSize(c);
            this._activeProfile.forEachSnapshot(function(h, n) {
              a._headers[n].setSize(c);
              a._charts[n].setSize(c);
            });
          }
        };
        a.prototype._updateViews = function() {
          if (this._activeProfile) {
            var a = this, c = this._activeProfile.windowStart, h = this._activeProfile.windowEnd;
            this._overviewHeader.setWindow(c, h);
            this._overview.setWindow(c, h);
            this._activeProfile.forEachSnapshot(function(n, f) {
              a._headers[f].setWindow(c, h);
              a._charts[f].setWindow(c, h);
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
        a.prototype.setWindow = function(a, c) {
          this._activeProfile.setWindow(a, c);
          this._updateViews();
        };
        a.prototype.moveWindowTo = function(a) {
          this._activeProfile.moveWindowTo(a);
          this._updateViews();
        };
        a.prototype.showTooltip = function(a, c, h, n) {
          this.removeTooltipContent();
          this._tooltip.appendChild(this.createTooltipContent(a, c));
          this._tooltip.style.display = "block";
          var f = this._tooltip.firstChild;
          c = f.clientWidth;
          f = f.clientHeight;
          h += h + c >= a.canvas.clientWidth - 50 ? -(c + 20) : 25;
          n += a.canvas.offsetTop - f / 2;
          this._tooltip.style.left = h + "px";
          this._tooltip.style.top = n + "px";
        };
        a.prototype.hideTooltip = function() {
          this._tooltip.style.display = "none";
        };
        a.prototype.createTooltipContent = function(a, c) {
          var h = Math.round(1E5 * c.totalTime) / 1E5, n = Math.round(1E5 * c.selfTime) / 1E5, f = Math.round(1E4 * c.selfTime / c.totalTime) / 100, e = document.createElement("div"), u = document.createElement("h1");
          u.textContent = c.kind.name;
          e.appendChild(u);
          u = document.createElement("p");
          u.textContent = "Total: " + h + " ms";
          e.appendChild(u);
          h = document.createElement("p");
          h.textContent = "Self: " + n + " ms (" + f + "%)";
          e.appendChild(h);
          if (n = a.getStatistics(c.kind)) {
            f = document.createElement("p"), f.textContent = "Count: " + n.count, e.appendChild(f), f = Math.round(1E5 * n.totalTime) / 1E5, h = document.createElement("p"), h.textContent = "All Total: " + f + " ms", e.appendChild(h), n = Math.round(1E5 * n.selfTime) / 1E5, f = document.createElement("p"), f.textContent = "All Self: " + n + " ms", e.appendChild(f);
          }
          this.appendDataElements(e, c.startData);
          this.appendDataElements(e, c.endData);
          return e;
        };
        a.prototype.appendDataElements = function(a, c) {
          if (!e.isNullOrUndefined(c)) {
            a.appendChild(document.createElement("hr"));
            var h;
            if (e.isObject(c)) {
              for (var n in c) {
                h = document.createElement("p"), h.textContent = n + ": " + c[n], a.appendChild(h);
              }
            } else {
              h = document.createElement("p"), h.textContent = c.toString(), a.appendChild(h);
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
    })(m.Profiler || (m.Profiler = {}));
  })(e.Tools || (e.Tools = {}));
})(Shumway || (Shumway = {}));
(function(e) {
  (function(m) {
    (function(r) {
      var a = e.NumberUtilities.clamp, m = function() {
        function a(c) {
          this.value = c;
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
      r.MouseCursor = m;
      var k = function() {
        function c(a, c) {
          this._target = a;
          this._eventTarget = c;
          this._wheelDisabled = !1;
          this._boundOnMouseDown = this._onMouseDown.bind(this);
          this._boundOnMouseUp = this._onMouseUp.bind(this);
          this._boundOnMouseOver = this._onMouseOver.bind(this);
          this._boundOnMouseOut = this._onMouseOut.bind(this);
          this._boundOnMouseMove = this._onMouseMove.bind(this);
          this._boundOnMouseWheel = this._onMouseWheel.bind(this);
          this._boundOnDrag = this._onDrag.bind(this);
          c.addEventListener("mousedown", this._boundOnMouseDown, !1);
          c.addEventListener("mouseover", this._boundOnMouseOver, !1);
          c.addEventListener("mouseout", this._boundOnMouseOut, !1);
          c.addEventListener("onwheel" in document ? "wheel" : "mousewheel", this._boundOnMouseWheel, !1);
        }
        c.prototype.destroy = function() {
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
        c.prototype.updateCursor = function(a) {
          if (!c._cursorOwner || c._cursorOwner === this._target) {
            var n = this._eventTarget.parentElement;
            c._cursor !== a && (c._cursor = a, ["", "-moz-", "-webkit-"].forEach(function(c) {
              n.style.cursor = c + a;
            }));
            c._cursorOwner = c._cursor === m.DEFAULT ? null : this._target;
          }
        };
        c.prototype._onMouseDown = function(a) {
          this._killHoverCheck();
          if (0 === a.button) {
            var c = this._getTargetMousePos(a, a.target);
            this._dragInfo = {start:c, current:c, delta:{x:0, y:0}, hasMoved:!1, originalTarget:a.target};
            window.addEventListener("mousemove", this._boundOnDrag, !1);
            window.addEventListener("mouseup", this._boundOnMouseUp, !1);
            this._target.onMouseDown(c.x, c.y);
          }
        };
        c.prototype._onDrag = function(a) {
          var c = this._dragInfo;
          a = this._getTargetMousePos(a, c.originalTarget);
          var f = {x:a.x - c.start.x, y:a.y - c.start.y};
          c.current = a;
          c.delta = f;
          c.hasMoved = !0;
          this._target.onDrag(c.start.x, c.start.y, a.x, a.y, f.x, f.y);
        };
        c.prototype._onMouseUp = function(a) {
          window.removeEventListener("mousemove", this._boundOnDrag);
          window.removeEventListener("mouseup", this._boundOnMouseUp);
          var c = this;
          a = this._dragInfo;
          if (a.hasMoved) {
            this._target.onDragEnd(a.start.x, a.start.y, a.current.x, a.current.y, a.delta.x, a.delta.y);
          } else {
            this._target.onClick(a.current.x, a.current.y);
          }
          this._dragInfo = null;
          this._wheelDisabled = !0;
          setTimeout(function() {
            c._wheelDisabled = !1;
          }, 500);
        };
        c.prototype._onMouseOver = function(a) {
          a.target.addEventListener("mousemove", this._boundOnMouseMove, !1);
          if (!this._dragInfo) {
            var c = this._getTargetMousePos(a, a.target);
            this._target.onMouseOver(c.x, c.y);
            this._startHoverCheck(a);
          }
        };
        c.prototype._onMouseOut = function(a) {
          a.target.removeEventListener("mousemove", this._boundOnMouseMove, !1);
          if (!this._dragInfo) {
            this._target.onMouseOut();
          }
          this._killHoverCheck();
        };
        c.prototype._onMouseMove = function(a) {
          if (!this._dragInfo) {
            var c = this._getTargetMousePos(a, a.target);
            this._target.onMouseMove(c.x, c.y);
            this._killHoverCheck();
            this._startHoverCheck(a);
          }
        };
        c.prototype._onMouseWheel = function(c) {
          if (!(c.altKey || c.metaKey || c.ctrlKey || c.shiftKey || (c.preventDefault(), this._dragInfo || this._wheelDisabled))) {
            var e = this._getTargetMousePos(c, c.target);
            c = a("undefined" !== typeof c.deltaY ? c.deltaY / 16 : -c.wheelDelta / 40, -1, 1);
            c = Math.pow(1.2, c) - 1;
            this._target.onMouseWheel(e.x, e.y, c);
          }
        };
        c.prototype._startHoverCheck = function(a) {
          this._hoverInfo = {isHovering:!1, timeoutHandle:setTimeout(this._onMouseMoveIdleHandler.bind(this), c.HOVER_TIMEOUT), pos:this._getTargetMousePos(a, a.target)};
        };
        c.prototype._killHoverCheck = function() {
          if (this._hoverInfo) {
            clearTimeout(this._hoverInfo.timeoutHandle);
            if (this._hoverInfo.isHovering) {
              this._target.onHoverEnd();
            }
            this._hoverInfo = null;
          }
        };
        c.prototype._onMouseMoveIdleHandler = function() {
          var a = this._hoverInfo;
          a.isHovering = !0;
          this._target.onHoverStart(a.pos.x, a.pos.y);
        };
        c.prototype._getTargetMousePos = function(a, c) {
          var f = c.getBoundingClientRect();
          return {x:a.clientX - f.left, y:a.clientY - f.top};
        };
        c.HOVER_TIMEOUT = 500;
        c._cursor = m.DEFAULT;
        return c;
      }();
      r.MouseController = k;
    })(m.Profiler || (m.Profiler = {}));
  })(e.Tools || (e.Tools = {}));
})(Shumway || (Shumway = {}));
(function(e) {
  (function(e) {
    (function(e) {
      (function(a) {
        a[a.NONE = 0] = "NONE";
        a[a.WINDOW = 1] = "WINDOW";
        a[a.HANDLE_LEFT = 2] = "HANDLE_LEFT";
        a[a.HANDLE_RIGHT = 3] = "HANDLE_RIGHT";
        a[a.HANDLE_BOTH = 4] = "HANDLE_BOTH";
      })(e.FlameChartDragTarget || (e.FlameChartDragTarget = {}));
      var a = function() {
        function a(k) {
          this._controller = k;
          this._initialized = !1;
          this._canvas = document.createElement("canvas");
          this._context = this._canvas.getContext("2d");
          this._mouseController = new e.MouseController(this, this._canvas);
          k = k.container;
          k.appendChild(this._canvas);
          k = k.getBoundingClientRect();
          this.setSize(k.width);
        }
        Object.defineProperty(a.prototype, "canvas", {get:function() {
          return this._canvas;
        }, enumerable:!0, configurable:!0});
        a.prototype.setSize = function(a, c) {
          void 0 === c && (c = 20);
          this._width = a;
          this._height = c;
          this._resetCanvas();
          this.draw();
        };
        a.prototype.initialize = function(a, c) {
          this._initialized = !0;
          this.setRange(a, c, !1);
          this.setWindow(a, c, !1);
          this.draw();
        };
        a.prototype.setWindow = function(a, c, h) {
          void 0 === h && (h = !0);
          this._windowStart = a;
          this._windowEnd = c;
          !h || this.draw();
        };
        a.prototype.setRange = function(a, c, h) {
          void 0 === h && (h = !0);
          this._rangeStart = a;
          this._rangeEnd = c;
          !h || this.draw();
        };
        a.prototype.destroy = function() {
          this._mouseController.destroy();
          this._mouseController = null;
          this._controller.container.removeChild(this._canvas);
          this._controller = null;
        };
        a.prototype._resetCanvas = function() {
          var a = window.devicePixelRatio, c = this._canvas;
          c.width = this._width * a;
          c.height = this._height * a;
          c.style.width = this._width + "px";
          c.style.height = this._height + "px";
        };
        a.prototype.draw = function() {
        };
        a.prototype._almostEq = function(a, c, h) {
          void 0 === h && (h = 10);
          h = Math.pow(10, h);
          return Math.abs(a - c) < 1 / h;
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
        a.prototype.onMouseWheel = function(e, c, h) {
          e = this._toTime(e);
          c = this._windowStart;
          var n = this._windowEnd, f = n - c;
          h = Math.max((a.MIN_WINDOW_LEN - f) / f, h);
          this._controller.setWindow(c + (c - e) * h, n + (n - e) * h);
          this.onHoverEnd();
        };
        a.prototype.onMouseDown = function(a, c) {
        };
        a.prototype.onMouseMove = function(a, c) {
        };
        a.prototype.onMouseOver = function(a, c) {
        };
        a.prototype.onMouseOut = function() {
        };
        a.prototype.onDrag = function(a, c, h, e, f, v) {
        };
        a.prototype.onDragEnd = function(a, c, h, e, f, v) {
        };
        a.prototype.onClick = function(a, c) {
        };
        a.prototype.onHoverStart = function(a, c) {
        };
        a.prototype.onHoverEnd = function() {
        };
        a.DRAGHANDLE_WIDTH = 4;
        a.MIN_WINDOW_LEN = .1;
        return a;
      }();
      e.FlameChartBase = a;
    })(e.Profiler || (e.Profiler = {}));
  })(e.Tools || (e.Tools = {}));
})(Shumway || (Shumway = {}));
(function(e) {
  (function(m) {
    (function(m) {
      var a = e.StringUtilities.trimMiddle, w = function(k) {
        function c(a, c) {
          k.call(this, a);
          this._textWidth = {};
          this._minFrameWidthInPixels = 1;
          this._snapshot = c;
          this._kindStyle = Object.create(null);
        }
        __extends(c, k);
        c.prototype.setSize = function(a, c) {
          k.prototype.setSize.call(this, a, c || this._initialized ? 12.5 * this._maxDepth : 100);
        };
        c.prototype.initialize = function(a, c) {
          this._initialized = !0;
          this._maxDepth = this._snapshot.maxDepth;
          this.setRange(a, c, !1);
          this.setWindow(a, c, !1);
          this.setSize(this._width, 12.5 * this._maxDepth);
        };
        c.prototype.destroy = function() {
          k.prototype.destroy.call(this);
          this._snapshot = null;
        };
        c.prototype.draw = function() {
          var a = this._context, c = window.devicePixelRatio;
          e.ColorStyle.reset();
          a.save();
          a.scale(c, c);
          a.fillStyle = this._controller.theme.bodyBackground(1);
          a.fillRect(0, 0, this._width, this._height);
          this._initialized && this._drawChildren(this._snapshot);
          a.restore();
        };
        c.prototype._drawChildren = function(a, c) {
          void 0 === c && (c = 0);
          var f = a.getChildRange(this._windowStart, this._windowEnd);
          if (f) {
            for (var e = f.startIndex;e <= f.endIndex;e++) {
              var k = a.children[e];
              this._drawFrame(k, c) && this._drawChildren(k, c + 1);
            }
          }
        };
        c.prototype._drawFrame = function(a, c) {
          var f = this._context, k = this._toPixels(a.startTime), u = this._toPixels(a.endTime), q = u - k;
          if (q <= this._minFrameWidthInPixels) {
            return f.fillStyle = this._controller.theme.tabToolbar(1), f.fillRect(k, 12.5 * c, this._minFrameWidthInPixels, 12 + 12.5 * (a.maxDepth - a.depth)), !1;
          }
          0 > k && (u = q + k, k = 0);
          var u = u - k, b = this._kindStyle[a.kind.id];
          b || (b = e.ColorStyle.randomStyle(), b = this._kindStyle[a.kind.id] = {bgColor:b, textColor:e.ColorStyle.contrastStyle(b)});
          f.save();
          f.fillStyle = b.bgColor;
          f.fillRect(k, 12.5 * c, u, 12);
          12 < q && (q = a.kind.name) && q.length && (q = this._prepareText(f, q, u - 4), q.length && (f.fillStyle = b.textColor, f.textBaseline = "bottom", f.fillText(q, k + 2, 12.5 * (c + 1) - 1)));
          f.restore();
          return !0;
        };
        c.prototype._prepareText = function(c, e, f) {
          var k = this._measureWidth(c, e);
          if (f > k) {
            return e;
          }
          for (var k = 3, u = e.length;k < u;) {
            var q = k + u >> 1;
            this._measureWidth(c, a(e, q)) < f ? k = q + 1 : u = q;
          }
          e = a(e, u - 1);
          k = this._measureWidth(c, e);
          return k <= f ? e : "";
        };
        c.prototype._measureWidth = function(a, c) {
          var f = this._textWidth[c];
          f || (f = a.measureText(c).width, this._textWidth[c] = f);
          return f;
        };
        c.prototype._toPixelsRelative = function(a) {
          return a * this._width / (this._windowEnd - this._windowStart);
        };
        c.prototype._toPixels = function(a) {
          return this._toPixelsRelative(a - this._windowStart);
        };
        c.prototype._toTimeRelative = function(a) {
          return a * (this._windowEnd - this._windowStart) / this._width;
        };
        c.prototype._toTime = function(a) {
          return this._toTimeRelative(a) + this._windowStart;
        };
        c.prototype._getFrameAtPosition = function(a, c) {
          var f = this._toTime(a), e = 1 + c / 12.5 | 0;
          if ((f = this._snapshot.query(f)) && f.depth >= e) {
            for (;f && f.depth > e;) {
              f = f.parent;
            }
            return f;
          }
          return null;
        };
        c.prototype.onMouseDown = function(a, c) {
          this._windowEqRange() || (this._mouseController.updateCursor(m.MouseCursor.ALL_SCROLL), this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:1});
        };
        c.prototype.onMouseMove = function(a, c) {
        };
        c.prototype.onMouseOver = function(a, c) {
        };
        c.prototype.onMouseOut = function() {
        };
        c.prototype.onDrag = function(a, c, f, e, k, q) {
          if (a = this._dragInfo) {
            k = this._toTimeRelative(-k), this._controller.setWindow(a.windowStartInitial + k, a.windowEndInitial + k);
          }
        };
        c.prototype.onDragEnd = function(a, c, f, e, k, q) {
          this._dragInfo = null;
          this._mouseController.updateCursor(m.MouseCursor.DEFAULT);
        };
        c.prototype.onClick = function(a, c) {
          this._dragInfo = null;
          this._mouseController.updateCursor(m.MouseCursor.DEFAULT);
        };
        c.prototype.onHoverStart = function(a, c) {
          var f = this._getFrameAtPosition(a, c);
          f && (this._hoveredFrame = f, this._controller.showTooltip(this, f, a, c));
        };
        c.prototype.onHoverEnd = function() {
          this._hoveredFrame && (this._hoveredFrame = null, this._controller.hideTooltip());
        };
        c.prototype.getStatistics = function(a) {
          var c = this._snapshot;
          c.statistics || c.calculateStatistics();
          return c.statistics[a.id];
        };
        return c;
      }(m.FlameChartBase);
      m.FlameChart = w;
    })(m.Profiler || (m.Profiler = {}));
  })(e.Tools || (e.Tools = {}));
})(Shumway || (Shumway = {}));
(function(e) {
  (function(m) {
    (function(m) {
      var a = e.NumberUtilities.clamp;
      (function(a) {
        a[a.OVERLAY = 0] = "OVERLAY";
        a[a.STACK = 1] = "STACK";
        a[a.UNION = 2] = "UNION";
      })(m.FlameChartOverviewMode || (m.FlameChartOverviewMode = {}));
      var w = function(e) {
        function c(a, c) {
          void 0 === c && (c = 1);
          this._mode = c;
          this._overviewCanvasDirty = !0;
          this._overviewCanvas = document.createElement("canvas");
          this._overviewContext = this._overviewCanvas.getContext("2d");
          e.call(this, a);
        }
        __extends(c, e);
        c.prototype.setSize = function(a, c) {
          e.prototype.setSize.call(this, a, c || 64);
        };
        Object.defineProperty(c.prototype, "mode", {set:function(a) {
          this._mode = a;
          this.draw();
        }, enumerable:!0, configurable:!0});
        c.prototype._resetCanvas = function() {
          e.prototype._resetCanvas.call(this);
          this._overviewCanvas.width = this._canvas.width;
          this._overviewCanvas.height = this._canvas.height;
          this._overviewCanvasDirty = !0;
        };
        c.prototype.draw = function() {
          var a = this._context, c = window.devicePixelRatio, f = this._width, e = this._height;
          a.save();
          a.scale(c, c);
          a.fillStyle = this._controller.theme.bodyBackground(1);
          a.fillRect(0, 0, f, e);
          a.restore();
          this._initialized && (this._overviewCanvasDirty && (this._drawChart(), this._overviewCanvasDirty = !1), a.drawImage(this._overviewCanvas, 0, 0), this._drawSelection());
        };
        c.prototype._drawSelection = function() {
          var a = this._context, c = this._height, f = window.devicePixelRatio, e = this._selection ? this._selection.left : this._toPixels(this._windowStart), k = this._selection ? this._selection.right : this._toPixels(this._windowEnd), q = this._controller.theme;
          a.save();
          a.scale(f, f);
          this._selection ? (a.fillStyle = q.selectionText(.15), a.fillRect(e, 1, k - e, c - 1), a.fillStyle = "rgba(133, 0, 0, 1)", a.fillRect(e + .5, 0, k - e - 1, 4), a.fillRect(e + .5, c - 4, k - e - 1, 4)) : (a.fillStyle = q.bodyBackground(.4), a.fillRect(0, 1, e, c - 1), a.fillRect(k, 1, this._width, c - 1));
          a.beginPath();
          a.moveTo(e, 0);
          a.lineTo(e, c);
          a.moveTo(k, 0);
          a.lineTo(k, c);
          a.lineWidth = .5;
          a.strokeStyle = q.foregroundTextGrey(1);
          a.stroke();
          c = this._selection ? this._toTime(this._selection.left) : this._windowStart;
          f = this._selection ? this._toTime(this._selection.right) : this._windowEnd;
          c = Math.abs(f - c);
          a.fillStyle = q.selectionText(.5);
          a.font = "8px sans-serif";
          a.textBaseline = "alphabetic";
          a.textAlign = "end";
          a.fillText(c.toFixed(2), Math.min(e, k) - 4, 10);
          a.fillText((c / 60).toFixed(2), Math.min(e, k) - 4, 20);
          a.restore();
        };
        c.prototype._drawChart = function() {
          var a = window.devicePixelRatio, c = this._height, f = this._controller.activeProfile, e = 4 * this._width, k = f.totalTime / e, q = this._overviewContext, b = this._controller.theme.blueHighlight(1);
          q.save();
          q.translate(0, a * c);
          var l = -a * c / (f.maxDepth - 1);
          q.scale(a / 4, l);
          q.clearRect(0, 0, e, f.maxDepth - 1);
          1 == this._mode && q.scale(1, 1 / f.snapshotCount);
          for (var t = 0, g = f.snapshotCount;t < g;t++) {
            var d = f.getSnapshotAt(t);
            if (d) {
              var p = null, y = 0;
              q.beginPath();
              q.moveTo(0, 0);
              for (var x = 0;x < e;x++) {
                y = f.startTime + x * k, y = (p = p ? p.queryNext(y) : d.query(y)) ? p.getDepth() - 1 : 0, q.lineTo(x, y);
              }
              q.lineTo(x, 0);
              q.fillStyle = b;
              q.fill();
              1 == this._mode && q.translate(0, -c * a / l);
            }
          }
          q.restore();
        };
        c.prototype._toPixelsRelative = function(a) {
          return a * this._width / (this._rangeEnd - this._rangeStart);
        };
        c.prototype._toPixels = function(a) {
          return this._toPixelsRelative(a - this._rangeStart);
        };
        c.prototype._toTimeRelative = function(a) {
          return a * (this._rangeEnd - this._rangeStart) / this._width;
        };
        c.prototype._toTime = function(a) {
          return this._toTimeRelative(a) + this._rangeStart;
        };
        c.prototype._getDragTargetUnderCursor = function(a, c) {
          if (0 <= c && c < this._height) {
            var f = this._toPixels(this._windowStart), e = this._toPixels(this._windowEnd), k = 2 + m.FlameChartBase.DRAGHANDLE_WIDTH / 2, q = a >= f - k && a <= f + k, b = a >= e - k && a <= e + k;
            if (q && b) {
              return 4;
            }
            if (q) {
              return 2;
            }
            if (b) {
              return 3;
            }
            if (!this._windowEqRange() && a > f + k && a < e - k) {
              return 1;
            }
          }
          return 0;
        };
        c.prototype.onMouseDown = function(a, c) {
          var f = this._getDragTargetUnderCursor(a, c);
          0 === f ? (this._selection = {left:a, right:a}, this.draw()) : (1 === f && this._mouseController.updateCursor(m.MouseCursor.GRABBING), this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:f});
        };
        c.prototype.onMouseMove = function(a, c) {
          var f = m.MouseCursor.DEFAULT, e = this._getDragTargetUnderCursor(a, c);
          0 === e || this._selection || (f = 1 === e ? m.MouseCursor.GRAB : m.MouseCursor.EW_RESIZE);
          this._mouseController.updateCursor(f);
        };
        c.prototype.onMouseOver = function(a, c) {
          this.onMouseMove(a, c);
        };
        c.prototype.onMouseOut = function() {
          this._mouseController.updateCursor(m.MouseCursor.DEFAULT);
        };
        c.prototype.onDrag = function(c, e, f, k, u, q) {
          if (this._selection) {
            this._selection = {left:c, right:a(f, 0, this._width - 1)}, this.draw();
          } else {
            c = this._dragInfo;
            if (4 === c.target) {
              if (0 !== u) {
                c.target = 0 > u ? 2 : 3;
              } else {
                return;
              }
            }
            e = this._windowStart;
            f = this._windowEnd;
            u = this._toTimeRelative(u);
            switch(c.target) {
              case 1:
                e = c.windowStartInitial + u;
                f = c.windowEndInitial + u;
                break;
              case 2:
                e = a(c.windowStartInitial + u, this._rangeStart, f - m.FlameChartBase.MIN_WINDOW_LEN);
                break;
              case 3:
                f = a(c.windowEndInitial + u, e + m.FlameChartBase.MIN_WINDOW_LEN, this._rangeEnd);
                break;
              default:
                return;
            }
            this._controller.setWindow(e, f);
          }
        };
        c.prototype.onDragEnd = function(a, c, f, e, k, q) {
          this._selection && (this._selection = null, this._controller.setWindow(this._toTime(a), this._toTime(f)));
          this._dragInfo = null;
          this.onMouseMove(f, e);
        };
        c.prototype.onClick = function(a, c) {
          this._selection = this._dragInfo = null;
          this._windowEqRange() || (0 === this._getDragTargetUnderCursor(a, c) && this._controller.moveWindowTo(this._toTime(a)), this.onMouseMove(a, c));
          this.draw();
        };
        c.prototype.onHoverStart = function(a, c) {
        };
        c.prototype.onHoverEnd = function() {
        };
        return c;
      }(m.FlameChartBase);
      m.FlameChartOverview = w;
    })(m.Profiler || (m.Profiler = {}));
  })(e.Tools || (e.Tools = {}));
})(Shumway || (Shumway = {}));
(function(e) {
  (function(m) {
    (function(m) {
      var a = e.NumberUtilities.clamp;
      (function(a) {
        a[a.OVERVIEW = 0] = "OVERVIEW";
        a[a.CHART = 1] = "CHART";
      })(m.FlameChartHeaderType || (m.FlameChartHeaderType = {}));
      var w = function(e) {
        function c(a, c) {
          this._type = c;
          e.call(this, a);
        }
        __extends(c, e);
        c.prototype.draw = function() {
          var a = this._context, c = window.devicePixelRatio, f = this._width, e = this._height;
          a.save();
          a.scale(c, c);
          a.fillStyle = this._controller.theme.tabToolbar(1);
          a.fillRect(0, 0, f, e);
          this._initialized && (0 == this._type ? (c = this._toPixels(this._windowStart), f = this._toPixels(this._windowEnd), a.fillStyle = this._controller.theme.bodyBackground(1), a.fillRect(c, 0, f - c, e), this._drawLabels(this._rangeStart, this._rangeEnd), this._drawDragHandle(c), this._drawDragHandle(f)) : this._drawLabels(this._windowStart, this._windowEnd));
          a.restore();
        };
        c.prototype._drawLabels = function(a, e) {
          var f = this._context, k = this._calculateTickInterval(a, e), u = Math.ceil(a / k) * k, q = 500 <= k, b = q ? 1E3 : 1, l = this._decimalPlaces(k / b), q = q ? "s" : "ms", t = this._toPixels(u), g = this._height / 2, d = this._controller.theme;
          f.lineWidth = 1;
          f.strokeStyle = d.contentTextDarkGrey(.5);
          f.fillStyle = d.contentTextDarkGrey(1);
          f.textAlign = "right";
          f.textBaseline = "middle";
          f.font = "11px sans-serif";
          for (d = this._width + c.TICK_MAX_WIDTH;t < d;) {
            var p = (u / b).toFixed(l) + " " + q;
            f.fillText(p, t - 7, g + 1);
            f.beginPath();
            f.moveTo(t, 0);
            f.lineTo(t, this._height + 1);
            f.closePath();
            f.stroke();
            u += k;
            t = this._toPixels(u);
          }
        };
        c.prototype._calculateTickInterval = function(a, e) {
          var f = (e - a) / (this._width / c.TICK_MAX_WIDTH), k = Math.pow(10, Math.floor(Math.log(f) / Math.LN10)), f = f / k;
          return 5 < f ? 10 * k : 2 < f ? 5 * k : 1 < f ? 2 * k : k;
        };
        c.prototype._drawDragHandle = function(a) {
          var c = this._context;
          c.lineWidth = 2;
          c.strokeStyle = this._controller.theme.bodyBackground(1);
          c.fillStyle = this._controller.theme.foregroundTextGrey(.7);
          this._drawRoundedRect(c, a - m.FlameChartBase.DRAGHANDLE_WIDTH / 2, 1, m.FlameChartBase.DRAGHANDLE_WIDTH, this._height - 2, 2, !0);
        };
        c.prototype._drawRoundedRect = function(a, c, f, e, k, q, b, l) {
          void 0 === b && (b = !0);
          void 0 === l && (l = !0);
          a.beginPath();
          a.moveTo(c + q, f);
          a.lineTo(c + e - q, f);
          a.quadraticCurveTo(c + e, f, c + e, f + q);
          a.lineTo(c + e, f + k - q);
          a.quadraticCurveTo(c + e, f + k, c + e - q, f + k);
          a.lineTo(c + q, f + k);
          a.quadraticCurveTo(c, f + k, c, f + k - q);
          a.lineTo(c, f + q);
          a.quadraticCurveTo(c, f, c + q, f);
          a.closePath();
          b && a.stroke();
          l && a.fill();
        };
        c.prototype._toPixelsRelative = function(a) {
          return a * this._width / (0 === this._type ? this._rangeEnd - this._rangeStart : this._windowEnd - this._windowStart);
        };
        c.prototype._toPixels = function(a) {
          return this._toPixelsRelative(a - (0 === this._type ? this._rangeStart : this._windowStart));
        };
        c.prototype._toTimeRelative = function(a) {
          return a * (0 === this._type ? this._rangeEnd - this._rangeStart : this._windowEnd - this._windowStart) / this._width;
        };
        c.prototype._toTime = function(a) {
          var c = 0 === this._type ? this._rangeStart : this._windowStart;
          return this._toTimeRelative(a) + c;
        };
        c.prototype._getDragTargetUnderCursor = function(a, c) {
          if (0 <= c && c < this._height) {
            if (0 === this._type) {
              var f = this._toPixels(this._windowStart), e = this._toPixels(this._windowEnd), k = 2 + m.FlameChartBase.DRAGHANDLE_WIDTH / 2, f = a >= f - k && a <= f + k, e = a >= e - k && a <= e + k;
              if (f && e) {
                return 4;
              }
              if (f) {
                return 2;
              }
              if (e) {
                return 3;
              }
            }
            if (!this._windowEqRange()) {
              return 1;
            }
          }
          return 0;
        };
        c.prototype.onMouseDown = function(a, c) {
          var f = this._getDragTargetUnderCursor(a, c);
          1 === f && this._mouseController.updateCursor(m.MouseCursor.GRABBING);
          this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:f};
        };
        c.prototype.onMouseMove = function(a, c) {
          var f = m.MouseCursor.DEFAULT, e = this._getDragTargetUnderCursor(a, c);
          0 !== e && (1 !== e ? f = m.MouseCursor.EW_RESIZE : 1 !== e || this._windowEqRange() || (f = m.MouseCursor.GRAB));
          this._mouseController.updateCursor(f);
        };
        c.prototype.onMouseOver = function(a, c) {
          this.onMouseMove(a, c);
        };
        c.prototype.onMouseOut = function() {
          this._mouseController.updateCursor(m.MouseCursor.DEFAULT);
        };
        c.prototype.onDrag = function(c, e, f, k, u, q) {
          c = this._dragInfo;
          if (4 === c.target) {
            if (0 !== u) {
              c.target = 0 > u ? 2 : 3;
            } else {
              return;
            }
          }
          e = this._windowStart;
          f = this._windowEnd;
          u = this._toTimeRelative(u);
          switch(c.target) {
            case 1:
              f = 0 === this._type ? 1 : -1;
              e = c.windowStartInitial + f * u;
              f = c.windowEndInitial + f * u;
              break;
            case 2:
              e = a(c.windowStartInitial + u, this._rangeStart, f - m.FlameChartBase.MIN_WINDOW_LEN);
              break;
            case 3:
              f = a(c.windowEndInitial + u, e + m.FlameChartBase.MIN_WINDOW_LEN, this._rangeEnd);
              break;
            default:
              return;
          }
          this._controller.setWindow(e, f);
        };
        c.prototype.onDragEnd = function(a, c, f, e, k, q) {
          this._dragInfo = null;
          this.onMouseMove(f, e);
        };
        c.prototype.onClick = function(a, c) {
          1 === this._dragInfo.target && this._mouseController.updateCursor(m.MouseCursor.GRAB);
        };
        c.prototype.onHoverStart = function(a, c) {
        };
        c.prototype.onHoverEnd = function() {
        };
        c.TICK_MAX_WIDTH = 75;
        return c;
      }(m.FlameChartBase);
      m.FlameChartHeader = w;
    })(m.Profiler || (m.Profiler = {}));
  })(e.Tools || (e.Tools = {}));
})(Shumway || (Shumway = {}));
(function(e) {
  (function(e) {
    (function(e) {
      (function(a) {
        var e = function() {
          function a(c, e, f, k, u) {
            this.pageLoaded = c;
            this.threadsTotal = e;
            this.threadsLoaded = f;
            this.threadFilesTotal = k;
            this.threadFilesLoaded = u;
          }
          a.prototype.toString = function() {
            return "[" + ["pageLoaded", "threadsTotal", "threadsLoaded", "threadFilesTotal", "threadFilesLoaded"].map(function(a, c, f) {
              return a + ":" + this[a];
            }, this).join(", ") + "]";
          };
          return a;
        }();
        a.TraceLoggerProgressInfo = e;
        var k = function() {
          function c(a) {
            this._baseUrl = a;
            this._threads = [];
            this._progressInfo = null;
          }
          c.prototype.loadPage = function(a, c, f) {
            this._threads = [];
            this._pageLoadCallback = c;
            this._pageLoadProgressCallback = f;
            this._progressInfo = new e(!1, 0, 0, 0, 0);
            this._loadData([a], this._onLoadPage.bind(this));
          };
          Object.defineProperty(c.prototype, "buffers", {get:function() {
            for (var a = [], c = 0, f = this._threads.length;c < f;c++) {
              a.push(this._threads[c].buffer);
            }
            return a;
          }, enumerable:!0, configurable:!0});
          c.prototype._onProgress = function() {
            this._pageLoadProgressCallback && this._pageLoadProgressCallback.call(this, this._progressInfo);
          };
          c.prototype._onLoadPage = function(c) {
            if (c && 1 == c.length) {
              var e = this, f = 0;
              c = c[0];
              var k = c.length;
              this._threads = Array(k);
              this._progressInfo.pageLoaded = !0;
              this._progressInfo.threadsTotal = k;
              for (var u = 0;u < c.length;u++) {
                var q = c[u], b = [q.dict, q.tree];
                q.corrections && b.push(q.corrections);
                this._progressInfo.threadFilesTotal += b.length;
                this._loadData(b, function(b) {
                  return function(c) {
                    c && (c = new a.Thread(c), c.buffer.name = "Thread " + b, e._threads[b] = c);
                    f++;
                    e._progressInfo.threadsLoaded++;
                    e._onProgress();
                    f === k && e._pageLoadCallback.call(e, null, e._threads);
                  };
                }(u), function(a) {
                  e._progressInfo.threadFilesLoaded++;
                  e._onProgress();
                });
              }
              this._onProgress();
            } else {
              this._pageLoadCallback.call(this, "Error loading page.", null);
            }
          };
          c.prototype._loadData = function(a, c, f) {
            var e = 0, k = 0, q = a.length, b = [];
            b.length = q;
            for (var l = 0;l < q;l++) {
              var t = this._baseUrl + a[l], g = /\.tl$/i.test(t), d = new XMLHttpRequest, g = g ? "arraybuffer" : "json";
              d.open("GET", t, !0);
              d.responseType = g;
              d.onload = function(a, d) {
                return function(g) {
                  if ("json" === d) {
                    if (g = this.response, "string" === typeof g) {
                      try {
                        g = JSON.parse(g), b[a] = g;
                      } catch (h) {
                        k++;
                      }
                    } else {
                      b[a] = g;
                    }
                  } else {
                    b[a] = this.response;
                  }
                  ++e;
                  f && f(e);
                  e === q && c(b);
                };
              }(l, g);
              d.send();
            }
          };
          c.colors = "#0044ff #8c4b00 #cc5c33 #ff80c4 #ffbfd9 #ff8800 #8c5e00 #adcc33 #b380ff #bfd9ff #ffaa00 #8c0038 #bf8f30 #f780ff #cc99c9 #aaff00 #000073 #452699 #cc8166 #cca799 #000066 #992626 #cc6666 #ccc299 #ff6600 #526600 #992663 #cc6681 #99ccc2 #ff0066 #520066 #269973 #61994d #739699 #ffcc00 #006629 #269199 #94994d #738299 #ff0000 #590000 #234d8c #8c6246 #7d7399 #ee00ff #00474d #8c2385 #8c7546 #7c8c69 #eeff00 #4d003d #662e1a #62468c #8c6969 #6600ff #4c2900 #1a6657 #8c464f #8c6981 #44ff00 #401100 #1a2466 #663355 #567365 #d90074 #403300 #101d40 #59562d #66614d #cc0000 #002b40 #234010 #4c2626 #4d5e66 #00a3cc #400011 #231040 #4c3626 #464359 #0000bf #331b00 #80e6ff #311a33 #4d3939 #a69b00 #003329 #80ffb2 #331a20 #40303d #00a658 #40ffd9 #ffc480 #ffe1bf #332b26 #8c2500 #9933cc #80fff6 #ffbfbf #303326 #005e8c #33cc47 #b2ff80 #c8bfff #263332 #00708c #cc33ad #ffe680 #f2ffbf #262a33 #388c00 #335ccc #8091ff #bfffd9".split(" ");
          return c;
        }();
        a.TraceLogger = k;
      })(e.TraceLogger || (e.TraceLogger = {}));
    })(e.Profiler || (e.Profiler = {}));
  })(e.Tools || (e.Tools = {}));
})(Shumway || (Shumway = {}));
(function(e) {
  (function(e) {
    (function(e) {
      (function(a) {
        var m;
        (function(a) {
          a[a.START_HI = 0] = "START_HI";
          a[a.START_LO = 4] = "START_LO";
          a[a.STOP_HI = 8] = "STOP_HI";
          a[a.STOP_LO = 12] = "STOP_LO";
          a[a.TEXTID = 16] = "TEXTID";
          a[a.NEXTID = 20] = "NEXTID";
        })(m || (m = {}));
        m = function() {
          function a(c) {
            2 <= c.length && (this._text = c[0], this._data = new DataView(c[1]), this._buffer = new e.TimelineBuffer, this._walkTree(0));
          }
          Object.defineProperty(a.prototype, "buffer", {get:function() {
            return this._buffer;
          }, enumerable:!0, configurable:!0});
          a.prototype._walkTree = function(c) {
            var e = this._data, n = this._buffer;
            do {
              var f = c * a.ITEM_SIZE, v = 4294967295 * e.getUint32(f + 0) + e.getUint32(f + 4), u = 4294967295 * e.getUint32(f + 8) + e.getUint32(f + 12), q = e.getUint32(f + 16), f = e.getUint32(f + 20), b = 1 === (q & 1), q = q >>> 1, q = this._text[q];
              n.enter(q, null, v / 1E6);
              b && this._walkTree(c + 1);
              n.leave(q, null, u / 1E6);
              c = f;
            } while (0 !== c);
          };
          a.ITEM_SIZE = 24;
          return a;
        }();
        a.Thread = m;
      })(e.TraceLogger || (e.TraceLogger = {}));
    })(e.Profiler || (e.Profiler = {}));
  })(e.Tools || (e.Tools = {}));
})(Shumway || (Shumway = {}));
(function(e) {
  (function(m) {
    (function(m) {
      var a = e.NumberUtilities.clamp, w = function() {
        function a() {
          this.length = 0;
          this.lines = [];
          this.format = [];
          this.time = [];
          this.repeat = [];
          this.length = 0;
        }
        a.prototype.append = function(a, c) {
          var f = this.lines;
          0 < f.length && f[f.length - 1] === a ? this.repeat[f.length - 1]++ : (this.lines.push(a), this.repeat.push(1), this.format.push(c ? {backgroundFillStyle:c} : void 0), this.time.push(performance.now()), this.length++);
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
      var k = function() {
        function c(a) {
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
              case x:
                this.printHelp();
                break;
              case p:
                this.showLineNumbers = !this.showLineNumbers;
                break;
              case y:
                this.showLineTime = !this.showLineTime;
                break;
              case q:
                h = -1;
                break;
              case b:
                h = 1;
                break;
              case c:
                h = -this.pageLineCount;
                break;
              case f:
                h = this.pageLineCount;
                break;
              case e:
                h = -this.lineIndex;
                break;
              case k:
                h = this.buffer.length - this.lineIndex;
                break;
              case l:
                this.columnIndex -= a.metaKey ? 10 : 1;
                0 > this.columnIndex && (this.columnIndex = 0);
                a.preventDefault();
                break;
              case t:
                this.columnIndex += a.metaKey ? 10 : 1;
                a.preventDefault();
                break;
              case g:
                if (a.metaKey || a.ctrlKey) {
                  this.selection = {start:0, end:this.buffer.length - 1}, a.preventDefault();
                }
                break;
              case d:
              ;
              case Y:
                if (a.metaKey || a.ctrlKey) {
                  var J = "";
                  if (this.selection) {
                    for (var U = this.selection.start;U <= this.selection.end;U++) {
                      J += this.buffer.get(U) + "\n";
                    }
                  } else {
                    J = this.buffer.get(this.lineIndex);
                  }
                  a.keyCode === d ? alert(J) : window.open(URL.createObjectURL(new Blob([J], {type:"text/plain"})), "_blank");
                }
              ;
            }
            a.metaKey && (h *= this.pageLineCount);
            h && (this.scroll(h), a.preventDefault());
            h && a.shiftKey ? this.selection ? this.lineIndex > this.selection.start ? this.selection.end = this.lineIndex : this.selection.start = this.lineIndex : 0 < h ? this.selection = {start:this.lineIndex - h, end:this.lineIndex} : 0 > h && (this.selection = {start:this.lineIndex, end:this.lineIndex - h}) : h && (this.selection = null);
            this.paint();
          }.bind(this), !1);
          a.addEventListener("focus", function(a) {
            this.hasFocus = !0;
          }.bind(this), !1);
          a.addEventListener("blur", function(a) {
            this.hasFocus = !1;
          }.bind(this), !1);
          var c = 33, f = 34, e = 36, k = 35, q = 38, b = 40, l = 37, t = 39, g = 65, d = 67, p = 78, y = 84, x = 72, Y = 83;
        }
        c.prototype.printHelp = function() {
          var a = this;
          "h - help;n - turn on/off line numbers;t - turn on/off line time;arrow_keys - navigation;cmd/ctrl+a - select all;cmd/ctrl+c - copy/alert selection;cmd/ctrl+s - open selection in new tab;shift+arrow_keys - selection".split(";").forEach(function(c) {
            return a.buffer.append(c, "#002000");
          });
        };
        c.prototype.resize = function() {
          this._resizeHandler();
        };
        c.prototype._resizeHandler = function() {
          var a = this.canvas.parentElement, c = a.clientWidth, a = a.clientHeight && a.clientHeight - 1, f = window.devicePixelRatio || 1;
          1 !== f ? (this.ratio = f / 1, this.canvas.width = c * this.ratio, this.canvas.height = a * this.ratio, this.canvas.style.width = c + "px", this.canvas.style.height = a + "px") : (this.ratio = 1, this.canvas.width = c, this.canvas.height = a);
          this.pageLineCount = Math.floor(this.canvas.height / this.lineHeight);
        };
        c.prototype.gotoLine = function(c) {
          this.lineIndex = a(c, 0, this.buffer.length - 1);
        };
        c.prototype.scrollIntoView = function() {
          this.lineIndex < this.pageIndex ? this.pageIndex = this.lineIndex : this.lineIndex >= this.pageIndex + this.pageLineCount && (this.pageIndex = this.lineIndex - this.pageLineCount + 1);
        };
        c.prototype.scroll = function(a) {
          this.gotoLine(this.lineIndex + a);
          this.scrollIntoView();
        };
        c.prototype.paint = function() {
          var a = this.pageLineCount;
          this.pageIndex + a > this.buffer.length && (a = this.buffer.length - this.pageIndex);
          var c = this.textMarginLeft, f = c + (this.showLineNumbers ? 5 * (String(this.buffer.length).length + 2) : 0), e = f + (this.showLineTime ? 40 : 10), k = e + 25;
          this.context.font = this.fontSize + 'px Consolas, "Liberation Mono", Courier, monospace';
          this.context.setTransform(this.ratio, 0, 0, this.ratio, 0, 0);
          for (var q = this.canvas.width, b = this.lineHeight, l = 0;l < a;l++) {
            var t = l * this.lineHeight, g = this.pageIndex + l, d = this.buffer.get(g), p = this.buffer.getFormat(g), y = this.buffer.getRepeat(g), x = 1 < g ? this.buffer.getTime(g) - this.buffer.getTime(0) : 0;
            this.context.fillStyle = g % 2 ? this.lineColor : this.alternateLineColor;
            p && p.backgroundFillStyle && (this.context.fillStyle = p.backgroundFillStyle);
            this.context.fillRect(0, t, q, b);
            this.context.fillStyle = this.selectionTextColor;
            this.context.fillStyle = this.textColor;
            this.selection && g >= this.selection.start && g <= this.selection.end && (this.context.fillStyle = this.selectionColor, this.context.fillRect(0, t, q, b), this.context.fillStyle = this.selectionTextColor);
            this.hasFocus && g === this.lineIndex && (this.context.fillStyle = this.selectionColor, this.context.fillRect(0, t, q, b), this.context.fillStyle = this.selectionTextColor);
            0 < this.columnIndex && (d = d.substring(this.columnIndex));
            t = (l + 1) * this.lineHeight - this.textMarginBottom;
            this.showLineNumbers && this.context.fillText(String(g), c, t);
            this.showLineTime && this.context.fillText(x.toFixed(1).padLeft(" ", 6), f, t);
            1 < y && this.context.fillText(String(y).padLeft(" ", 3), e, t);
            this.context.fillText(d, k, t);
          }
        };
        c.prototype.refreshEvery = function(a) {
          function c() {
            f.paint();
            f.refreshFrequency && setTimeout(c, f.refreshFrequency);
          }
          var f = this;
          this.refreshFrequency = a;
          f.refreshFrequency && setTimeout(c, f.refreshFrequency);
        };
        c.prototype.isScrolledToBottom = function() {
          return this.lineIndex === this.buffer.length - 1;
        };
        return c;
      }();
      m.Terminal = k;
    })(m.Terminal || (m.Terminal = {}));
  })(e.Tools || (e.Tools = {}));
})(Shumway || (Shumway = {}));
(function(e) {
  (function(e) {
    (function(e) {
      var a = function() {
        function a(e) {
          this._lastWeightedTime = this._lastTime = this._index = 0;
          this._gradient = "#FF0000 #FF1100 #FF2300 #FF3400 #FF4600 #FF5700 #FF6900 #FF7B00 #FF8C00 #FF9E00 #FFAF00 #FFC100 #FFD300 #FFE400 #FFF600 #F7FF00 #E5FF00 #D4FF00 #C2FF00 #B0FF00 #9FFF00 #8DFF00 #7CFF00 #6AFF00 #58FF00 #47FF00 #35FF00 #24FF00 #12FF00 #00FF00".split(" ");
          this._container = e;
          this._canvas = document.createElement("canvas");
          this._container.appendChild(this._canvas);
          this._context = this._canvas.getContext("2d");
          this._listenForContainerSizeChanges();
        }
        a.prototype._listenForContainerSizeChanges = function() {
          var a = this._containerWidth, c = this._containerHeight;
          this._onContainerSizeChanged();
          var e = this;
          setInterval(function() {
            if (a !== e._containerWidth || c !== e._containerHeight) {
              e._onContainerSizeChanged(), a = e._containerWidth, c = e._containerHeight;
            }
          }, 10);
        };
        a.prototype._onContainerSizeChanged = function() {
          var a = this._containerWidth, c = this._containerHeight, e = window.devicePixelRatio || 1;
          1 !== e ? (this._ratio = e / 1, this._canvas.width = a * this._ratio, this._canvas.height = c * this._ratio, this._canvas.style.width = a + "px", this._canvas.style.height = c + "px") : (this._ratio = 1, this._canvas.width = a, this._canvas.height = c);
        };
        Object.defineProperty(a.prototype, "_containerWidth", {get:function() {
          return this._container.clientWidth;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "_containerHeight", {get:function() {
          return this._container.clientHeight;
        }, enumerable:!0, configurable:!0});
        a.prototype.tickAndRender = function(a, c) {
          void 0 === a && (a = !1);
          void 0 === c && (c = 0);
          if (0 === this._lastTime) {
            this._lastTime = performance.now();
          } else {
            var e = 1 * (performance.now() - this._lastTime) + 0 * this._lastWeightedTime, n = this._context, f = 2 * this._ratio, v = 30 * this._ratio, u = performance;
            u.memory && (v += 30 * this._ratio);
            var q = (this._canvas.width - v) / (f + 1) | 0, b = this._index++;
            this._index > q && (this._index = 0);
            q = this._canvas.height;
            n.globalAlpha = 1;
            n.fillStyle = "black";
            n.fillRect(v + b * (f + 1), 0, 4 * f, this._canvas.height);
            var l = Math.min(1E3 / 60 / e, 1);
            n.fillStyle = "#00FF00";
            n.globalAlpha = a ? .5 : 1;
            l = q / 2 * l | 0;
            n.fillRect(v + b * (f + 1), q - l, f, l);
            c && (l = Math.min(1E3 / 240 / c, 1), n.fillStyle = "#FF6347", l = q / 2 * l | 0, n.fillRect(v + b * (f + 1), q / 2 - l, f, l));
            0 === b % 16 && (n.globalAlpha = 1, n.fillStyle = "black", n.fillRect(0, 0, v, this._canvas.height), n.fillStyle = "white", n.font = 8 * this._ratio + "px Arial", n.textBaseline = "middle", f = (1E3 / e).toFixed(0), c && (f += " " + c.toFixed(0)), u.memory && (f += " " + (u.memory.usedJSHeapSize / 1024 / 1024).toFixed(2)), n.fillText(f, 2 * this._ratio, this._containerHeight / 2 * this._ratio));
            this._lastTime = performance.now();
            this._lastWeightedTime = e;
          }
        };
        return a;
      }();
      e.FPS = a;
    })(e.Mini || (e.Mini = {}));
  })(e.Tools || (e.Tools = {}));
})(Shumway || (Shumway = {}));
console.timeEnd("Load Shared Dependencies");
console.time("Load GFX Dependencies");
(function(e) {
  (function(m) {
    function r(a, d, b) {
      return n && b ? "string" === typeof d ? (a = e.ColorUtilities.cssStyleToRGBA(d), e.ColorUtilities.rgbaToCSSStyle(b.transformRGBA(a))) : d instanceof CanvasGradient && d._template ? d._template.createCanvasGradient(a, b) : d : d;
    }
    var a = e.NumberUtilities.clamp;
    (function(a) {
      a[a.None = 0] = "None";
      a[a.Brief = 1] = "Brief";
      a[a.Verbose = 2] = "Verbose";
    })(m.TraceLevel || (m.TraceLevel = {}));
    var w = e.Metrics.Counter.instance;
    m.frameCounter = new e.Metrics.Counter(!0);
    m.traceLevel = 2;
    m.writer = null;
    m.frameCount = function(a) {
      w.count(a);
      m.frameCounter.count(a);
    };
    m.timelineBuffer = new e.Tools.Profiler.TimelineBuffer("GFX");
    m.enterTimeline = function(a, d) {
    };
    m.leaveTimeline = function(a, d) {
    };
    var k = null, c = null, h = null, n = !0;
    n && "undefined" !== typeof CanvasRenderingContext2D && (k = CanvasGradient.prototype.addColorStop, c = CanvasRenderingContext2D.prototype.createLinearGradient, h = CanvasRenderingContext2D.prototype.createRadialGradient, CanvasRenderingContext2D.prototype.createLinearGradient = function(a, d, b, g) {
      return (new v(a, d, b, g)).createCanvasGradient(this, null);
    }, CanvasRenderingContext2D.prototype.createRadialGradient = function(a, d, b, g, c, p) {
      return (new u(a, d, b, g, c, p)).createCanvasGradient(this, null);
    }, CanvasGradient.prototype.addColorStop = function(a, d) {
      k.call(this, a, d);
      this._template.addColorStop(a, d);
    });
    var f = function() {
      return function(a, d) {
        this.offset = a;
        this.color = d;
      };
    }(), v = function() {
      function a(d, b, g, c) {
        this.x0 = d;
        this.y0 = b;
        this.x1 = g;
        this.y1 = c;
        this.colorStops = [];
      }
      a.prototype.addColorStop = function(a, d) {
        this.colorStops.push(new f(a, d));
      };
      a.prototype.createCanvasGradient = function(a, d) {
        for (var b = c.call(a, this.x0, this.y0, this.x1, this.y1), g = this.colorStops, p = 0;p < g.length;p++) {
          var x = g[p], f = x.offset, x = x.color, x = d ? r(a, x, d) : x;
          k.call(b, f, x);
        }
        b._template = this;
        b._transform = this._transform;
        return b;
      };
      return a;
    }(), u = function() {
      function a(d, b, g, c, p, x) {
        this.x0 = d;
        this.y0 = b;
        this.r0 = g;
        this.x1 = c;
        this.y1 = p;
        this.r1 = x;
        this.colorStops = [];
      }
      a.prototype.addColorStop = function(a, d) {
        this.colorStops.push(new f(a, d));
      };
      a.prototype.createCanvasGradient = function(a, d) {
        for (var b = h.call(a, this.x0, this.y0, this.r0, this.x1, this.y1, this.r1), g = this.colorStops, c = 0;c < g.length;c++) {
          var p = g[c], x = p.offset, p = p.color, p = d ? r(a, p, d) : p;
          k.call(b, x, p);
        }
        b._template = this;
        b._transform = this._transform;
        return b;
      };
      return a;
    }(), q;
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
    })(q || (q = {}));
    var b = function() {
      function a(d) {
        this._commands = new Uint8Array(a._arrayBufferPool.acquire(8), 0, 8);
        this._commandPosition = 0;
        this._data = new Float64Array(a._arrayBufferPool.acquire(8 * Float64Array.BYTES_PER_ELEMENT), 0, 8);
        this._dataPosition = 0;
        d instanceof a && this.addPath(d);
      }
      a._apply = function(a, d) {
        var b = a._commands, g = a._data, c = 0, p = 0;
        d.beginPath();
        for (var x = a._commandPosition;c < x;) {
          switch(b[c++]) {
            case 1:
              d.closePath();
              break;
            case 2:
              d.moveTo(g[p++], g[p++]);
              break;
            case 3:
              d.lineTo(g[p++], g[p++]);
              break;
            case 4:
              d.quadraticCurveTo(g[p++], g[p++], g[p++], g[p++]);
              break;
            case 5:
              d.bezierCurveTo(g[p++], g[p++], g[p++], g[p++], g[p++], g[p++]);
              break;
            case 6:
              d.arcTo(g[p++], g[p++], g[p++], g[p++], g[p++]);
              break;
            case 7:
              d.rect(g[p++], g[p++], g[p++], g[p++]);
              break;
            case 8:
              d.arc(g[p++], g[p++], g[p++], g[p++], g[p++], !!g[p++]);
              break;
            case 9:
              d.save();
              break;
            case 10:
              d.restore();
              break;
            case 11:
              d.transform(g[p++], g[p++], g[p++], g[p++], g[p++], g[p++]);
          }
        }
      };
      a.prototype._ensureCommandCapacity = function(d) {
        this._commands = a._arrayBufferPool.ensureUint8ArrayLength(this._commands, d);
      };
      a.prototype._ensureDataCapacity = function(d) {
        this._data = a._arrayBufferPool.ensureFloat64ArrayLength(this._data, d);
      };
      a.prototype._writeCommand = function(a) {
        this._commandPosition >= this._commands.length && this._ensureCommandCapacity(this._commandPosition + 1);
        this._commands[this._commandPosition++] = a;
      };
      a.prototype._writeData = function(a, d, b, g, c, p) {
        var x = arguments.length;
        this._dataPosition + x >= this._data.length && this._ensureDataCapacity(this._dataPosition + x);
        var f = this._data, y = this._dataPosition;
        f[y] = a;
        f[y + 1] = d;
        2 < x && (f[y + 2] = b, f[y + 3] = g, 4 < x && (f[y + 4] = c, 6 === x && (f[y + 5] = p)));
        this._dataPosition += x;
      };
      a.prototype.closePath = function() {
        this._writeCommand(1);
      };
      a.prototype.moveTo = function(a, d) {
        this._writeCommand(2);
        this._writeData(a, d);
      };
      a.prototype.lineTo = function(a, d) {
        this._writeCommand(3);
        this._writeData(a, d);
      };
      a.prototype.quadraticCurveTo = function(a, d, b, g) {
        this._writeCommand(4);
        this._writeData(a, d, b, g);
      };
      a.prototype.bezierCurveTo = function(a, d, b, g, c, p) {
        this._writeCommand(5);
        this._writeData(a, d, b, g, c, p);
      };
      a.prototype.arcTo = function(a, d, b, g, c) {
        this._writeCommand(6);
        this._writeData(a, d, b, g, c);
      };
      a.prototype.rect = function(a, d, b, g) {
        this._writeCommand(7);
        this._writeData(a, d, b, g);
      };
      a.prototype.arc = function(a, d, b, g, c, p) {
        this._writeCommand(8);
        this._writeData(a, d, b, g, c, +p);
      };
      a.prototype.addPath = function(a, d) {
        d && (this._writeCommand(9), this._writeCommand(11), this._writeData(d.a, d.b, d.c, d.d, d.e, d.f));
        var b = this._commandPosition + a._commandPosition;
        b >= this._commands.length && this._ensureCommandCapacity(b);
        for (var g = this._commands, c = a._commands, p = this._commandPosition, x = 0;p < b;p++) {
          g[p] = c[x++];
        }
        this._commandPosition = b;
        b = this._dataPosition + a._dataPosition;
        b >= this._data.length && this._ensureDataCapacity(b);
        g = this._data;
        c = a._data;
        p = this._dataPosition;
        for (x = 0;p < b;p++) {
          g[p] = c[x++];
        }
        this._dataPosition = b;
        d && this._writeCommand(10);
      };
      a._arrayBufferPool = new e.ArrayBufferPool;
      return a;
    }();
    m.Path = b;
    if ("undefined" !== typeof CanvasRenderingContext2D && ("undefined" === typeof Path2D || !Path2D.prototype.addPath)) {
      var l = CanvasRenderingContext2D.prototype.fill;
      CanvasRenderingContext2D.prototype.fill = function(a, d) {
        arguments.length && (a instanceof b ? b._apply(a, this) : d = a);
        d ? l.call(this, d) : l.call(this);
      };
      var t = CanvasRenderingContext2D.prototype.stroke;
      CanvasRenderingContext2D.prototype.stroke = function(a, d) {
        arguments.length && (a instanceof b ? b._apply(a, this) : d = a);
        d ? t.call(this, d) : t.call(this);
      };
      var g = CanvasRenderingContext2D.prototype.clip;
      CanvasRenderingContext2D.prototype.clip = function(a, d) {
        arguments.length && (a instanceof b ? b._apply(a, this) : d = a);
        d ? g.call(this, d) : g.call(this);
      };
      window.Path2D = b;
    }
    if ("undefined" !== typeof CanvasPattern && Path2D.prototype.addPath) {
      q = function(a) {
        this._transform = a;
        this._template && (this._template._transform = a);
      };
      CanvasPattern.prototype.setTransform || (CanvasPattern.prototype.setTransform = q);
      CanvasGradient.prototype.setTransform || (CanvasGradient.prototype.setTransform = q);
      var d = CanvasRenderingContext2D.prototype.fill, p = CanvasRenderingContext2D.prototype.stroke;
      CanvasRenderingContext2D.prototype.fill = function(a, b) {
        var g = !!this.fillStyle._transform;
        if ((this.fillStyle instanceof CanvasPattern || this.fillStyle instanceof CanvasGradient) && g && a instanceof Path2D) {
          var g = this.fillStyle._transform, c;
          try {
            c = g.inverse();
          } catch (p) {
            c = g = m.Geometry.Matrix.createIdentitySVGMatrix();
          }
          this.transform(g.a, g.b, g.c, g.d, g.e, g.f);
          g = new Path2D;
          g.addPath(a, c);
          d.call(this, g, b);
          this.transform(c.a, c.b, c.c, c.d, c.e, c.f);
        } else {
          0 === arguments.length ? d.call(this) : 1 === arguments.length ? d.call(this, a) : 2 === arguments.length && d.call(this, a, b);
        }
      };
      CanvasRenderingContext2D.prototype.stroke = function(a) {
        var d = !!this.strokeStyle._transform;
        if ((this.strokeStyle instanceof CanvasPattern || this.strokeStyle instanceof CanvasGradient) && d && a instanceof Path2D) {
          var b = this.strokeStyle._transform, d = b.inverse();
          this.transform(b.a, b.b, b.c, b.d, b.e, b.f);
          b = new Path2D;
          b.addPath(a, d);
          var g = this.lineWidth;
          this.lineWidth *= (d.a + d.d) / 2;
          p.call(this, b);
          this.transform(d.a, d.b, d.c, d.d, d.e, d.f);
          this.lineWidth = g;
        } else {
          0 === arguments.length ? p.call(this) : 1 === arguments.length && p.call(this, a);
        }
      };
    }
    "undefined" !== typeof CanvasRenderingContext2D && function() {
      function d() {
        return m.Geometry.Matrix.createSVGMatrixFromArray(this.mozCurrentTransform);
      }
      var b = "currentTransform" in CanvasRenderingContext2D.prototype;
      CanvasRenderingContext2D.prototype.flashStroke = function(d, g) {
        if (b) {
          var c = this.currentTransform, p = new Path2D;
          p.addPath(d, c);
          var x = this.lineWidth;
          this.setTransform(1, 0, 0, 1, 0, 0);
          switch(g) {
            case 1:
              var f = Math.sqrt((c.a + c.c) * (c.a + c.c) + (c.d + c.b) * (c.d + c.b)) * Math.SQRT1_2;
              this.lineWidth = a(x * f, 1, 1024);
              break;
            case 2:
              this.lineWidth = a(x * (c.d + c.b), 1, 1024);
              break;
            case 3:
              this.lineWidth = a(x * (c.a + c.c), 1, 1024);
          }
          this.stroke(p);
          this.setTransform(c.a, c.b, c.c, c.d, c.e, c.f);
          this.lineWidth = x;
        } else {
          this.stroke(d);
        }
      };
      if (!b) {
        if ("mozCurrentTransform" in CanvasRenderingContext2D.prototype) {
          Object.defineProperty(CanvasRenderingContext2D.prototype, "currentTransform", {get:d}), b = !0;
        } else {
          var g = CanvasRenderingContext2D.prototype.setTransform;
          CanvasRenderingContext2D.prototype.setTransform = function(a, d, b, c, p, x) {
            var f = this.currentTransform;
            f.a = a;
            f.b = d;
            f.c = b;
            f.d = c;
            f.e = p;
            f.f = x;
            g.call(this, a, d, b, c, p, x);
          };
          Object.defineProperty(CanvasRenderingContext2D.prototype, "currentTransform", {get:function() {
            return this._currentTransform || (this._currentTransform = m.Geometry.Matrix.createIdentitySVGMatrix());
          }});
        }
      }
    }();
    if ("undefined" !== typeof CanvasRenderingContext2D && void 0 === CanvasRenderingContext2D.prototype.globalColorMatrix) {
      var y = CanvasRenderingContext2D.prototype.fill, x = CanvasRenderingContext2D.prototype.stroke, Y = CanvasRenderingContext2D.prototype.fillText, W = CanvasRenderingContext2D.prototype.strokeText;
      Object.defineProperty(CanvasRenderingContext2D.prototype, "globalColorMatrix", {get:function() {
        return this._globalColorMatrix ? this._globalColorMatrix.clone() : null;
      }, set:function(a) {
        a ? this._globalColorMatrix ? this._globalColorMatrix.set(a) : this._globalColorMatrix = a.clone() : this._globalColorMatrix = null;
      }, enumerable:!0, configurable:!0});
      CanvasRenderingContext2D.prototype.fill = function(a, d) {
        var b = null;
        this._globalColorMatrix && (b = this.fillStyle, this.fillStyle = r(this, this.fillStyle, this._globalColorMatrix));
        0 === arguments.length ? y.call(this) : 1 === arguments.length ? y.call(this, a) : 2 === arguments.length && y.call(this, a, d);
        b && (this.fillStyle = b);
      };
      CanvasRenderingContext2D.prototype.stroke = function(a, d) {
        var b = null;
        this._globalColorMatrix && (b = this.strokeStyle, this.strokeStyle = r(this, this.strokeStyle, this._globalColorMatrix));
        0 === arguments.length ? x.call(this) : 1 === arguments.length && x.call(this, a);
        b && (this.strokeStyle = b);
      };
      CanvasRenderingContext2D.prototype.fillText = function(a, d, b, g) {
        var c = null;
        this._globalColorMatrix && (c = this.fillStyle, this.fillStyle = r(this, this.fillStyle, this._globalColorMatrix));
        3 === arguments.length ? Y.call(this, a, d, b) : 4 === arguments.length ? Y.call(this, a, d, b, g) : e.Debug.unexpected();
        c && (this.fillStyle = c);
      };
      CanvasRenderingContext2D.prototype.strokeText = function(a, d, b, g) {
        var c = null;
        this._globalColorMatrix && (c = this.strokeStyle, this.strokeStyle = r(this, this.strokeStyle, this._globalColorMatrix));
        3 === arguments.length ? W.call(this, a, d, b) : 4 === arguments.length ? W.call(this, a, d, b, g) : e.Debug.unexpected();
        c && (this.strokeStyle = c);
      };
    }
  })(e.GFX || (e.GFX = {}));
})(Shumway || (Shumway = {}));
(function(e) {
  (function(e) {
    var r = function() {
      return function(a, e, k, c) {
        this.dataURL = a;
        this.w = e;
        this.h = k;
        this.pixelRatio = c;
      };
    }();
    e.ScreenShot = r;
  })(e.GFX || (e.GFX = {}));
})(Shumway || (Shumway = {}));
(function(e) {
  var m = function() {
    function e() {
      this._count = 0;
      this._head = this._tail = null;
    }
    Object.defineProperty(e.prototype, "count", {get:function() {
      return this._count;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(e.prototype, "head", {get:function() {
      return this._head;
    }, enumerable:!0, configurable:!0});
    e.prototype._unshift = function(a) {
      0 === this._count ? this._head = this._tail = a : (a.next = this._head, this._head = a.next.previous = a);
      this._count++;
    };
    e.prototype._remove = function(a) {
      a === this._head && a === this._tail ? this._head = this._tail = null : a === this._head ? (this._head = a.next, this._head.previous = null) : a == this._tail ? (this._tail = a.previous, this._tail.next = null) : (a.previous.next = a.next, a.next.previous = a.previous);
      a.previous = a.next = null;
      this._count--;
    };
    e.prototype.use = function(a) {
      this._head !== a && ((a.next || a.previous || this._tail === a) && this._remove(a), this._unshift(a));
    };
    e.prototype.pop = function() {
      if (!this._tail) {
        return null;
      }
      var a = this._tail;
      this._remove(a);
      return a;
    };
    e.prototype.visit = function(a, e) {
      void 0 === e && (e = !0);
      for (var k = e ? this._head : this._tail;k && a(k);) {
        k = e ? k.next : k.previous;
      }
    };
    return e;
  }();
  e.LRUList = m;
  e.registerFallbackFont = function() {
    var e = document.styleSheets[0];
    e.insertRule('@font-face{font-family:AdobeBlank;src:url("data:font/opentype;base64,T1RUTwAKAIAAAwAgQ0ZGIDTeCDQAACFkAAAZPERTSUcAAAABAABKqAAAAAhPUy8yAF+xmwAAARAAAABgY21hcCRDbtEAAAdcAAAZ6GhlYWQFl9tDAAAArAAAADZoaGVhB1oD7wAAAOQAAAAkaG10eAPoAHwAADqgAAAQBm1heHAIAVAAAAABCAAAAAZuYW1lIE0HkgAAAXAAAAXrcG9zdP+4ADIAACFEAAAAIAABAAAAAQuFfcPHtV8PPPUAAwPoAAAAANFMRfMAAAAA0UxF8wB8/4gDbANwAAAAAwACAAAAAAAAAAEAAANw/4gAAAPoAHwAfANsAAEAAAAAAAAAAAAAAAAAAAACAABQAAgBAAAAAwPoAZAABQAAAooCWAAAAEsCigJYAAABXgAyANwAAAAAAAAAAAAAAAD3/67/+9///w/gAD8AAAAAQURCTwBAAAD//wNw/4gAAANwAHhgLwH/AAAAAAAAAAAAAAAgAAAAAAARANIAAQAAAAAAAQALAAAAAQAAAAAAAgAHAAsAAQAAAAAAAwAbABIAAQAAAAAABAALAAAAAQAAAAAABQA6AC0AAQAAAAAABgAKAGcAAwABBAkAAACUAHEAAwABBAkAAQAWAQUAAwABBAkAAgAOARsAAwABBAkAAwA2ASkAAwABBAkABAAWAQUAAwABBAkABQB0AV8AAwABBAkABgAUAdMAAwABBAkACAA0AecAAwABBAkACwA0AhsAAwABBAkADQKWAk8AAwABBAkADgA0BOVBZG9iZSBCbGFua1JlZ3VsYXIxLjA0NTtBREJPO0Fkb2JlQmxhbms7QURPQkVWZXJzaW9uIDEuMDQ1O1BTIDEuMDQ1O2hvdGNvbnYgMS4wLjgyO21ha2VvdGYubGliMi41LjYzNDA2QWRvYmVCbGFuawBDAG8AcAB5AHIAaQBnAGgAdAAgAKkAIAAyADAAMQAzACwAIAAyADAAMQA1ACAAQQBkAG8AYgBlACAAUwB5AHMAdABlAG0AcwAgAEkAbgBjAG8AcgBwAG8AcgBhAHQAZQBkACAAKABoAHQAdABwADoALwAvAHcAdwB3AC4AYQBkAG8AYgBlAC4AYwBvAG0ALwApAC4AQQBkAG8AYgBlACAAQgBsAGEAbgBrAFIAZQBnAHUAbABhAHIAMQAuADAANAA1ADsAQQBEAEIATwA7AEEAZABvAGIAZQBCAGwAYQBuAGsAOwBBAEQATwBCAEUAVgBlAHIAcwBpAG8AbgAgADEALgAwADQANQA7AFAAUwAgADEALgAwADQANQA7AGgAbwB0AGMAbwBuAHYAIAAxAC4AMAAuADgAMgA7AG0AYQBrAGUAbwB0AGYALgBsAGkAYgAyAC4ANQAuADYAMwA0ADAANgBBAGQAbwBiAGUAQgBsAGEAbgBrAEEAZABvAGIAZQAgAFMAeQBzAHQAZQBtAHMAIABJAG4AYwBvAHIAcABvAHIAYQB0AGUAZABoAHQAdABwADoALwAvAHcAdwB3AC4AYQBkAG8AYgBlAC4AYwBvAG0ALwB0AHkAcABlAC8AVABoAGkAcwAgAEYAbwBuAHQAIABTAG8AZgB0AHcAYQByAGUAIABpAHMAIABsAGkAYwBlAG4AcwBlAGQAIAB1AG4AZABlAHIAIAB0AGgAZQAgAFMASQBMACAATwBwAGUAbgAgAEYAbwBuAHQAIABMAGkAYwBlAG4AcwBlACwAIABWAGUAcgBzAGkAbwBuACAAMQAuADEALgAgAFQAaABpAHMAIABGAG8AbgB0ACAAUwBvAGYAdAB3AGEAcgBlACAAaQBzACAAZABpAHMAdAByAGkAYgB1AHQAZQBkACAAbwBuACAAYQBuACAAIgBBAFMAIABJAFMAIgAgAEIAQQBTAEkAUwAsACAAVwBJAFQASABPAFUAVAAgAFcAQQBSAFIAQQBOAFQASQBFAFMAIABPAFIAIABDAE8ATgBEAEkAVABJAE8ATgBTACAATwBGACAAQQBOAFkAIABLAEkATgBEACwAIABlAGkAdABoAGUAcgAgAGUAeABwAHIAZQBzAHMAIABvAHIAIABpAG0AcABsAGkAZQBkAC4AIABTAGUAZQAgAHQAaABlACAAUwBJAEwAIABPAHAAZQBuACAARgBvAG4AdAAgAEwAaQBjAGUAbgBzAGUAIABmAG8AcgAgAHQAaABlACAAcwBwAGUAYwBpAGYAaQBjACAAbABhAG4AZwB1AGEAZwBlACwAIABwAGUAcgBtAGkAcwBzAGkAbwBuAHMAIABhAG4AZAAgAGwAaQBtAGkAdABhAHQAaQBvAG4AcwAgAGcAbwB2AGUAcgBuAGkAbgBnACAAeQBvAHUAcgAgAHUAcwBlACAAbwBmACAAdABoAGkAcwAgAEYAbwBuAHQAIABTAG8AZgB0AHcAYQByAGUALgBoAHQAdABwADoALwAvAHMAYwByAGkAcAB0AHMALgBzAGkAbAAuAG8AcgBnAC8ATwBGAEwAAAAABQAAAAMAAAA4AAAABAAAAFgAAQAAAAAALAADAAEAAAA4AAMACgAAAFgABgAMAAAAAAABAAAABAAgAAAABAAEAAEAAAf///8AAAAA//8AAQABAAAAAAAMAAAAABmQAAAAAAAAAiAAAAAAAAAH/wAAAAEAAAgAAAAP/wAAAAEAABAAAAAX/wAAAAEAABgAAAAf/wAAAAEAACAAAAAn/wAAAAEAACgAAAAv/wAAAAEAADAAAAA3/wAAAAEAADgAAAA//wAAAAEAAEAAAABH/wAAAAEAAEgAAABP/wAAAAEAAFAAAABX/wAAAAEAAFgAAABf/wAAAAEAAGAAAABn/wAAAAEAAGgAAABv/wAAAAEAAHAAAAB3/wAAAAEAAHgAAAB//wAAAAEAAIAAAACH/wAAAAEAAIgAAACP/wAAAAEAAJAAAACX/wAAAAEAAJgAAACf/wAAAAEAAKAAAACn/wAAAAEAAKgAAACv/wAAAAEAALAAAAC3/wAAAAEAALgAAAC//wAAAAEAAMAAAADH/wAAAAEAAMgAAADP/wAAAAEAANAAAADX/wAAAAEAAOAAAADn/wAAAAEAAOgAAADv/wAAAAEAAPAAAAD3/wAAAAEAAPgAAAD9zwAAAAEAAP3wAAD//QAABfEAAQAAAAEH/wAAAAEAAQgAAAEP/wAAAAEAARAAAAEX/wAAAAEAARgAAAEf/wAAAAEAASAAAAEn/wAAAAEAASgAAAEv/wAAAAEAATAAAAE3/wAAAAEAATgAAAE//wAAAAEAAUAAAAFH/wAAAAEAAUgAAAFP/wAAAAEAAVAAAAFX/wAAAAEAAVgAAAFf/wAAAAEAAWAAAAFn/wAAAAEAAWgAAAFv/wAAAAEAAXAAAAF3/wAAAAEAAXgAAAF//wAAAAEAAYAAAAGH/wAAAAEAAYgAAAGP/wAAAAEAAZAAAAGX/wAAAAEAAZgAAAGf/wAAAAEAAaAAAAGn/wAAAAEAAagAAAGv/wAAAAEAAbAAAAG3/wAAAAEAAbgAAAG//wAAAAEAAcAAAAHH/wAAAAEAAcgAAAHP/wAAAAEAAdAAAAHX/wAAAAEAAdgAAAHf/wAAAAEAAeAAAAHn/wAAAAEAAegAAAHv/wAAAAEAAfAAAAH3/wAAAAEAAfgAAAH//QAAAAEAAgAAAAIH/wAAAAEAAggAAAIP/wAAAAEAAhAAAAIX/wAAAAEAAhgAAAIf/wAAAAEAAiAAAAIn/wAAAAEAAigAAAIv/wAAAAEAAjAAAAI3/wAAAAEAAjgAAAI//wAAAAEAAkAAAAJH/wAAAAEAAkgAAAJP/wAAAAEAAlAAAAJX/wAAAAEAAlgAAAJf/wAAAAEAAmAAAAJn/wAAAAEAAmgAAAJv/wAAAAEAAnAAAAJ3/wAAAAEAAngAAAJ//wAAAAEAAoAAAAKH/wAAAAEAAogAAAKP/wAAAAEAApAAAAKX/wAAAAEAApgAAAKf/wAAAAEAAqAAAAKn/wAAAAEAAqgAAAKv/wAAAAEAArAAAAK3/wAAAAEAArgAAAK//wAAAAEAAsAAAALH/wAAAAEAAsgAAALP/wAAAAEAAtAAAALX/wAAAAEAAtgAAALf/wAAAAEAAuAAAALn/wAAAAEAAugAAALv/wAAAAEAAvAAAAL3/wAAAAEAAvgAAAL//QAAAAEAAwAAAAMH/wAAAAEAAwgAAAMP/wAAAAEAAxAAAAMX/wAAAAEAAxgAAAMf/wAAAAEAAyAAAAMn/wAAAAEAAygAAAMv/wAAAAEAAzAAAAM3/wAAAAEAAzgAAAM//wAAAAEAA0AAAANH/wAAAAEAA0gAAANP/wAAAAEAA1AAAANX/wAAAAEAA1gAAANf/wAAAAEAA2AAAANn/wAAAAEAA2gAAANv/wAAAAEAA3AAAAN3/wAAAAEAA3gAAAN//wAAAAEAA4AAAAOH/wAAAAEAA4gAAAOP/wAAAAEAA5AAAAOX/wAAAAEAA5gAAAOf/wAAAAEAA6AAAAOn/wAAAAEAA6gAAAOv/wAAAAEAA7AAAAO3/wAAAAEAA7gAAAO//wAAAAEAA8AAAAPH/wAAAAEAA8gAAAPP/wAAAAEAA9AAAAPX/wAAAAEAA9gAAAPf/wAAAAEAA+AAAAPn/wAAAAEAA+gAAAPv/wAAAAEAA/AAAAP3/wAAAAEAA/gAAAP//QAAAAEABAAAAAQH/wAAAAEABAgAAAQP/wAAAAEABBAAAAQX/wAAAAEABBgAAAQf/wAAAAEABCAAAAQn/wAAAAEABCgAAAQv/wAAAAEABDAAAAQ3/wAAAAEABDgAAAQ//wAAAAEABEAAAARH/wAAAAEABEgAAARP/wAAAAEABFAAAARX/wAAAAEABFgAAARf/wAAAAEABGAAAARn/wAAAAEABGgAAARv/wAAAAEABHAAAAR3/wAAAAEABHgAAAR//wAAAAEABIAAAASH/wAAAAEABIgAAASP/wAAAAEABJAAAASX/wAAAAEABJgAAASf/wAAAAEABKAAAASn/wAAAAEABKgAAASv/wAAAAEABLAAAAS3/wAAAAEABLgAAAS//wAAAAEABMAAAATH/wAAAAEABMgAAATP/wAAAAEABNAAAATX/wAAAAEABNgAAATf/wAAAAEABOAAAATn/wAAAAEABOgAAATv/wAAAAEABPAAAAT3/wAAAAEABPgAAAT//QAAAAEABQAAAAUH/wAAAAEABQgAAAUP/wAAAAEABRAAAAUX/wAAAAEABRgAAAUf/wAAAAEABSAAAAUn/wAAAAEABSgAAAUv/wAAAAEABTAAAAU3/wAAAAEABTgAAAU//wAAAAEABUAAAAVH/wAAAAEABUgAAAVP/wAAAAEABVAAAAVX/wAAAAEABVgAAAVf/wAAAAEABWAAAAVn/wAAAAEABWgAAAVv/wAAAAEABXAAAAV3/wAAAAEABXgAAAV//wAAAAEABYAAAAWH/wAAAAEABYgAAAWP/wAAAAEABZAAAAWX/wAAAAEABZgAAAWf/wAAAAEABaAAAAWn/wAAAAEABagAAAWv/wAAAAEABbAAAAW3/wAAAAEABbgAAAW//wAAAAEABcAAAAXH/wAAAAEABcgAAAXP/wAAAAEABdAAAAXX/wAAAAEABdgAAAXf/wAAAAEABeAAAAXn/wAAAAEABegAAAXv/wAAAAEABfAAAAX3/wAAAAEABfgAAAX//QAAAAEABgAAAAYH/wAAAAEABggAAAYP/wAAAAEABhAAAAYX/wAAAAEABhgAAAYf/wAAAAEABiAAAAYn/wAAAAEABigAAAYv/wAAAAEABjAAAAY3/wAAAAEABjgAAAY//wAAAAEABkAAAAZH/wAAAAEABkgAAAZP/wAAAAEABlAAAAZX/wAAAAEABlgAAAZf/wAAAAEABmAAAAZn/wAAAAEABmgAAAZv/wAAAAEABnAAAAZ3/wAAAAEABngAAAZ//wAAAAEABoAAAAaH/wAAAAEABogAAAaP/wAAAAEABpAAAAaX/wAAAAEABpgAAAaf/wAAAAEABqAAAAan/wAAAAEABqgAAAav/wAAAAEABrAAAAa3/wAAAAEABrgAAAa//wAAAAEABsAAAAbH/wAAAAEABsgAAAbP/wAAAAEABtAAAAbX/wAAAAEABtgAAAbf/wAAAAEABuAAAAbn/wAAAAEABugAAAbv/wAAAAEABvAAAAb3/wAAAAEABvgAAAb//QAAAAEABwAAAAcH/wAAAAEABwgAAAcP/wAAAAEABxAAAAcX/wAAAAEABxgAAAcf/wAAAAEAByAAAAcn/wAAAAEABygAAAcv/wAAAAEABzAAAAc3/wAAAAEABzgAAAc//wAAAAEAB0AAAAdH/wAAAAEAB0gAAAdP/wAAAAEAB1AAAAdX/wAAAAEAB1gAAAdf/wAAAAEAB2AAAAdn/wAAAAEAB2gAAAdv/wAAAAEAB3AAAAd3/wAAAAEAB3gAAAd//wAAAAEAB4AAAAeH/wAAAAEAB4gAAAeP/wAAAAEAB5AAAAeX/wAAAAEAB5gAAAef/wAAAAEAB6AAAAen/wAAAAEAB6gAAAev/wAAAAEAB7AAAAe3/wAAAAEAB7gAAAe//wAAAAEAB8AAAAfH/wAAAAEAB8gAAAfP/wAAAAEAB9AAAAfX/wAAAAEAB9gAAAff/wAAAAEAB+AAAAfn/wAAAAEAB+gAAAfv/wAAAAEAB/AAAAf3/wAAAAEAB/gAAAf//QAAAAEACAAAAAgH/wAAAAEACAgAAAgP/wAAAAEACBAAAAgX/wAAAAEACBgAAAgf/wAAAAEACCAAAAgn/wAAAAEACCgAAAgv/wAAAAEACDAAAAg3/wAAAAEACDgAAAg//wAAAAEACEAAAAhH/wAAAAEACEgAAAhP/wAAAAEACFAAAAhX/wAAAAEACFgAAAhf/wAAAAEACGAAAAhn/wAAAAEACGgAAAhv/wAAAAEACHAAAAh3/wAAAAEACHgAAAh//wAAAAEACIAAAAiH/wAAAAEACIgAAAiP/wAAAAEACJAAAAiX/wAAAAEACJgAAAif/wAAAAEACKAAAAin/wAAAAEACKgAAAiv/wAAAAEACLAAAAi3/wAAAAEACLgAAAi//wAAAAEACMAAAAjH/wAAAAEACMgAAAjP/wAAAAEACNAAAAjX/wAAAAEACNgAAAjf/wAAAAEACOAAAAjn/wAAAAEACOgAAAjv/wAAAAEACPAAAAj3/wAAAAEACPgAAAj//QAAAAEACQAAAAkH/wAAAAEACQgAAAkP/wAAAAEACRAAAAkX/wAAAAEACRgAAAkf/wAAAAEACSAAAAkn/wAAAAEACSgAAAkv/wAAAAEACTAAAAk3/wAAAAEACTgAAAk//wAAAAEACUAAAAlH/wAAAAEACUgAAAlP/wAAAAEACVAAAAlX/wAAAAEACVgAAAlf/wAAAAEACWAAAAln/wAAAAEACWgAAAlv/wAAAAEACXAAAAl3/wAAAAEACXgAAAl//wAAAAEACYAAAAmH/wAAAAEACYgAAAmP/wAAAAEACZAAAAmX/wAAAAEACZgAAAmf/wAAAAEACaAAAAmn/wAAAAEACagAAAmv/wAAAAEACbAAAAm3/wAAAAEACbgAAAm//wAAAAEACcAAAAnH/wAAAAEACcgAAAnP/wAAAAEACdAAAAnX/wAAAAEACdgAAAnf/wAAAAEACeAAAAnn/wAAAAEACegAAAnv/wAAAAEACfAAAAn3/wAAAAEACfgAAAn//QAAAAEACgAAAAoH/wAAAAEACggAAAoP/wAAAAEAChAAAAoX/wAAAAEAChgAAAof/wAAAAEACiAAAAon/wAAAAEACigAAAov/wAAAAEACjAAAAo3/wAAAAEACjgAAAo//wAAAAEACkAAAApH/wAAAAEACkgAAApP/wAAAAEAClAAAApX/wAAAAEAClgAAApf/wAAAAEACmAAAApn/wAAAAEACmgAAApv/wAAAAEACnAAAAp3/wAAAAEACngAAAp//wAAAAEACoAAAAqH/wAAAAEACogAAAqP/wAAAAEACpAAAAqX/wAAAAEACpgAAAqf/wAAAAEACqAAAAqn/wAAAAEACqgAAAqv/wAAAAEACrAAAAq3/wAAAAEACrgAAAq//wAAAAEACsAAAArH/wAAAAEACsgAAArP/wAAAAEACtAAAArX/wAAAAEACtgAAArf/wAAAAEACuAAAArn/wAAAAEACugAAArv/wAAAAEACvAAAAr3/wAAAAEACvgAAAr//QAAAAEACwAAAAsH/wAAAAEACwgAAAsP/wAAAAEACxAAAAsX/wAAAAEACxgAAAsf/wAAAAEACyAAAAsn/wAAAAEACygAAAsv/wAAAAEACzAAAAs3/wAAAAEACzgAAAs//wAAAAEAC0AAAAtH/wAAAAEAC0gAAAtP/wAAAAEAC1AAAAtX/wAAAAEAC1gAAAtf/wAAAAEAC2AAAAtn/wAAAAEAC2gAAAtv/wAAAAEAC3AAAAt3/wAAAAEAC3gAAAt//wAAAAEAC4AAAAuH/wAAAAEAC4gAAAuP/wAAAAEAC5AAAAuX/wAAAAEAC5gAAAuf/wAAAAEAC6AAAAun/wAAAAEAC6gAAAuv/wAAAAEAC7AAAAu3/wAAAAEAC7gAAAu//wAAAAEAC8AAAAvH/wAAAAEAC8gAAAvP/wAAAAEAC9AAAAvX/wAAAAEAC9gAAAvf/wAAAAEAC+AAAAvn/wAAAAEAC+gAAAvv/wAAAAEAC/AAAAv3/wAAAAEAC/gAAAv//QAAAAEADAAAAAwH/wAAAAEADAgAAAwP/wAAAAEADBAAAAwX/wAAAAEADBgAAAwf/wAAAAEADCAAAAwn/wAAAAEADCgAAAwv/wAAAAEADDAAAAw3/wAAAAEADDgAAAw//wAAAAEADEAAAAxH/wAAAAEADEgAAAxP/wAAAAEADFAAAAxX/wAAAAEADFgAAAxf/wAAAAEADGAAAAxn/wAAAAEADGgAAAxv/wAAAAEADHAAAAx3/wAAAAEADHgAAAx//wAAAAEADIAAAAyH/wAAAAEADIgAAAyP/wAAAAEADJAAAAyX/wAAAAEADJgAAAyf/wAAAAEADKAAAAyn/wAAAAEADKgAAAyv/wAAAAEADLAAAAy3/wAAAAEADLgAAAy//wAAAAEADMAAAAzH/wAAAAEADMgAAAzP/wAAAAEADNAAAAzX/wAAAAEADNgAAAzf/wAAAAEADOAAAAzn/wAAAAEADOgAAAzv/wAAAAEADPAAAAz3/wAAAAEADPgAAAz//QAAAAEADQAAAA0H/wAAAAEADQgAAA0P/wAAAAEADRAAAA0X/wAAAAEADRgAAA0f/wAAAAEADSAAAA0n/wAAAAEADSgAAA0v/wAAAAEADTAAAA03/wAAAAEADTgAAA0//wAAAAEADUAAAA1H/wAAAAEADUgAAA1P/wAAAAEADVAAAA1X/wAAAAEADVgAAA1f/wAAAAEADWAAAA1n/wAAAAEADWgAAA1v/wAAAAEADXAAAA13/wAAAAEADXgAAA1//wAAAAEADYAAAA2H/wAAAAEADYgAAA2P/wAAAAEADZAAAA2X/wAAAAEADZgAAA2f/wAAAAEADaAAAA2n/wAAAAEADagAAA2v/wAAAAEADbAAAA23/wAAAAEADbgAAA2//wAAAAEADcAAAA3H/wAAAAEADcgAAA3P/wAAAAEADdAAAA3X/wAAAAEADdgAAA3f/wAAAAEADeAAAA3n/wAAAAEADegAAA3v/wAAAAEADfAAAA33/wAAAAEADfgAAA3//QAAAAEADgAAAA4H/wAAAAEADggAAA4P/wAAAAEADhAAAA4X/wAAAAEADhgAAA4f/wAAAAEADiAAAA4n/wAAAAEADigAAA4v/wAAAAEADjAAAA43/wAAAAEADjgAAA4//wAAAAEADkAAAA5H/wAAAAEADkgAAA5P/wAAAAEADlAAAA5X/wAAAAEADlgAAA5f/wAAAAEADmAAAA5n/wAAAAEADmgAAA5v/wAAAAEADnAAAA53/wAAAAEADngAAA5//wAAAAEADoAAAA6H/wAAAAEADogAAA6P/wAAAAEADpAAAA6X/wAAAAEADpgAAA6f/wAAAAEADqAAAA6n/wAAAAEADqgAAA6v/wAAAAEADrAAAA63/wAAAAEADrgAAA6//wAAAAEADsAAAA7H/wAAAAEADsgAAA7P/wAAAAEADtAAAA7X/wAAAAEADtgAAA7f/wAAAAEADuAAAA7n/wAAAAEADugAAA7v/wAAAAEADvAAAA73/wAAAAEADvgAAA7//QAAAAEADwAAAA8H/wAAAAEADwgAAA8P/wAAAAEADxAAAA8X/wAAAAEADxgAAA8f/wAAAAEADyAAAA8n/wAAAAEADygAAA8v/wAAAAEADzAAAA83/wAAAAEADzgAAA8//wAAAAEAD0AAAA9H/wAAAAEAD0gAAA9P/wAAAAEAD1AAAA9X/wAAAAEAD1gAAA9f/wAAAAEAD2AAAA9n/wAAAAEAD2gAAA9v/wAAAAEAD3AAAA93/wAAAAEAD3gAAA9//wAAAAEAD4AAAA+H/wAAAAEAD4gAAA+P/wAAAAEAD5AAAA+X/wAAAAEAD5gAAA+f/wAAAAEAD6AAAA+n/wAAAAEAD6gAAA+v/wAAAAEAD7AAAA+3/wAAAAEAD7gAAA+//wAAAAEAD8AAAA/H/wAAAAEAD8gAAA/P/wAAAAEAD9AAAA/X/wAAAAEAD9gAAA/f/wAAAAEAD+AAAA/n/wAAAAEAD+gAAA/v/wAAAAEAD/AAAA/3/wAAAAEAD/gAAA///QAAAAEAEAAAABAH/wAAAAEAEAgAABAP/wAAAAEAEBAAABAX/wAAAAEAEBgAABAf/wAAAAEAECAAABAn/wAAAAEAECgAABAv/wAAAAEAEDAAABA3/wAAAAEAEDgAABA//wAAAAEAEEAAABBH/wAAAAEAEEgAABBP/wAAAAEAEFAAABBX/wAAAAEAEFgAABBf/wAAAAEAEGAAABBn/wAAAAEAEGgAABBv/wAAAAEAEHAAABB3/wAAAAEAEHgAABB//wAAAAEAEIAAABCH/wAAAAEAEIgAABCP/wAAAAEAEJAAABCX/wAAAAEAEJgAABCf/wAAAAEAEKAAABCn/wAAAAEAEKgAABCv/wAAAAEAELAAABC3/wAAAAEAELgAABC//wAAAAEAEMAAABDH/wAAAAEAEMgAABDP/wAAAAEAENAAABDX/wAAAAEAENgAABDf/wAAAAEAEOAAABDn/wAAAAEAEOgAABDv/wAAAAEAEPAAABD3/wAAAAEAEPgAABD//QAAAAEAAwAAAAAAAP+1ADIAAAAAAAAAAAAAAAAAAAAAAAAAAAEABAIAAQEBC0Fkb2JlQmxhbmsAAQEBMPgb+ByLDB74HQH4HgKL+wz6APoEBR4aBF8MHxwIAQwi91UP92IR91oMJRwZHwwkAAUBAQYOVmFwQWRvYmVJZGVudGl0eUNvcHlyaWdodCAyMDEzLCAyMDE1IEFkb2JlIFN5c3RlbXMgSW5jb3Jwb3JhdGVkIChodHRwOi8vd3d3LmFkb2JlLmNvbS8pLkFkb2JlIEJsYW5rQWRvYmVCbGFuay0yMDQ5AAACAAEH/wMAAQAAAAgBCAECAAEASwBMAE0ATgBPAFAAUQBSAFMAVABVAFYAVwBYAFkAWgBbAFwAXQBeAF8AYABhAGIAYwBkAGUAZgBnAGgAaQBqAGsAbABtAG4AbwBwAHEAcgBzAHQAdQB2AHcAeAB5AHoAewB8AH0AfgB/AIAAgQCCAIMAhACFAIYAhwCIAIkAigCLAIwAjQCOAI8AkACRAJIAkwCUAJUAlgCXAJgAmQCaAJsAnACdAJ4AnwCgAKEAogCjAKQApQCmAKcAqACpAKoAqwCsAK0ArgCvALAAsQCyALMAtAC1ALYAtwC4ALkAugC7ALwAvQC+AL8AwADBAMIAwwDEAMUAxgDHAMgAyQDKAMsAzADNAM4AzwDQANEA0gDTANQA1QDWANcA2ADZANoA2wDcAN0A3gDfAOAA4QDiAOMA5ADlAOYA5wDoAOkA6gDrAOwA7QDuAO8A8ADxAPIA8wD0APUA9gD3APgA+QD6APsA/AD9AP4A/wEAAQEBAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMBFAEVARYBFwEYARkBGgEbARwBHQEeAR8BIAEhASIBIwEkASUBJgEnASgBKQEqASsBLAEtAS4BLwEwATEBMgEzATQBNQE2ATcBOAE5AToBOwE8AT0BPgE/AUABQQFCAUMBRAFFAUYBRwFIAUkBSgFLAUwBTQFOAU8BUAFRAVIBUwFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEBYgFjAWQBZQFmAWcBaAFpAWoBawFsAW0BbgFvAXABcQFyAXMBdAF1AXYBdwF4AXkBegF7AXwBfQF+AX8BgAGBAYIBgwGEAYUBhgGHAYgBiQGKAYsBjAGNAY4BjwGQAZEBkgGTAZQBlQGWAZcBmAGZAZoBmwGcAZ0BngGfAaABoQGiAaMBpAGlAaYBpwGoAakBqgGrAawBrQGuAa8BsAGxAbIBswG0AbUBtgG3AbgBuQG6AbsBvAG9Ab4BvwHAAcEBwgHDAcQBxQHGAccByAHJAcoBywHMAc0BzgHPAdAB0QHSAdMB1AHVAdYB1wHYAdkB2gHbAdwB3QHeAd8B4AHhAeIB4wHkAeUB5gHnAegB6QHqAesB7AHtAe4B7wHwAfEB8gHzAfQB9QH2AfcB+AH5AfoB+wH8Af0B/gH/AgACAQICAgMCBAIFAgYCBwIIAgkCCgILAgwCDQIOAg8CEAIRAhICEwIUAhUCFgIXAhgCGQIaAhsCHAIdAh4CHwIgAiECIgIjAiQCJQImAicCKAIpAioCKwIsAi0CLgIvAjACMQIyAjMCNAI1AjYCNwI4AjkCOgI7AjwCPQI+Aj8CQAJBAkICQwJEAkUCRgJHAkgCSQJKAksCTAJNAk4CTwJQAlECUgJTAlQCVQJWAlcCWAJZAloCWwJcAl0CXgJfAmACYQJiAmMCZAJlAmYCZwJoAmkCagJrAmwCbQJuAm8CcAJxAnICcwJ0AnUCdgJ3AngCeQJ6AnsCfAJ9An4CfwKAAoECggKDAoQChQKGAocCiAKJAooCiwKMAo0CjgKPApACkQKSApMClAKVApYClwKYApkCmgKbApwCnQKeAp8CoAKhAqICowKkAqUCpgKnAqgCqQKqAqsCrAKtAq4CrwKwArECsgKzArQCtQK2ArcCuAK5AroCuwK8Ar0CvgK/AsACwQLCAsMCxALFAsYCxwLIAskCygLLAswCzQLOAs8C0ALRAtIC0wLUAtUC1gLXAtgC2QLaAtsC3ALdAt4C3wLgAuEC4gLjAuQC5QLmAucC6ALpAuoC6wLsAu0C7gLvAvAC8QLyAvMC9AL1AvYC9wL4AvkC+gL7AvwC/QL+Av8DAAMBAwIDAwMEAwUDBgMHAwgDCQMKAwsDDAMNAw4DDwMQAxEDEgMTAxQDFQMWAxcDGAMZAxoDGwMcAx0DHgMfAyADIQMiAyMDJAMlAyYDJwMoAykDKgMrAywDLQMuAy8DMAMxAzIDMwM0AzUDNgM3AzgDOQM6AzsDPAM9Az4DPwNAA0EDQgNDA0QDRQNGA0cDSANJA0oDSwNMA00DTgNPA1ADUQNSA1MDVANVA1YDVwNYA1kDWgNbA1wDXQNeA18DYANhA2IDYwNkA2UDZgNnA2gDaQNqA2sDbANtA24DbwNwA3EDcgNzA3QDdQN2A3cDeAN5A3oDewN8A30DfgN/A4ADgQOCA4MDhAOFA4YDhwOIA4kDigOLA4wDjQOOA48DkAORA5IDkwOUA5UDlgOXA5gDmQOaA5sDnAOdA54DnwOgA6EDogOjA6QDpQOmA6cDqAOpA6oDqwOsA60DrgOvA7ADsQOyA7MDtAO1A7YDtwO4A7kDugO7A7wDvQO+A78DwAPBA8IDwwPEA8UDxgPHA8gDyQPKA8sDzAPNA84DzwPQA9ED0gPTA9QD1QPWA9cD2APZA9oD2wPcA90D3gPfA+AD4QPiA+MD5APlA+YD5wPoA+kD6gPrA+wD7QPuA+8D8APxA/ID8wP0A/UD9gP3A/gD+QP6A/sD/AP9A/4D/wQABAEEAgQDBAQEBQQGBAcECAQJBAoECwQMBA0EDgQPBBAEEQQSBBMEFAQVBBYEFwQYBBkEGgQbBBwEHQQeBB8EIAQhBCIEIwQkBCUEJgQnBCgEKQQqBCsELAQtBC4ELwQwBDEEMgQzBDQENQQ2BDcEOAQ5BDoEOwQ8BD0EPgQ/BEAEQQRCBEMERARFBEYERwRIBEkESgRLBEwETQROBE8EUARRBFIEUwRUBFUEVgRXBFgEWQRaBFsEXARdBF4EXwRgBGEEYgRjBGQEZQRmBGcEaARpBGoEawRsBG0EbgRvBHAEcQRyBHMEdAR1BHYEdwR4BHkEegR7BHwEfQR+BH8EgASBBIIEgwSEBIUEhgSHBIgEiQSKBIsEjASNBI4EjwSQBJEEkgSTBJQElQSWBJcEmASZBJoEmwScBJ0EngSfBKAEoQSiBKMEpASlBKYEpwSoBKkEqgSrBKwErQSuBK8EsASxBLIEswS0BLUEtgS3BLgEuQS6BLsEvAS9BL4EvwTABMEEwgTDBMQExQTGBMcEyATJBMoEywTMBM0EzgTPBNAE0QTSBNME1ATVBNYE1wTYBNkE2gTbBNwE3QTeBN8E4AThBOIE4wTkBOUE5gTnBOgE6QTqBOsE7ATtBO4E7wTwBPEE8gTzBPQE9QT2BPcE+AT5BPoE+wT8BP0E/gT/BQAFAQUCBQMFBAUFBQYFBwUIBQkFCgULBQwFDQUOBQ8FEAURBRIFEwUUBRUFFgUXBRgFGQUaBRsFHAUdBR4FHwUgBSEFIgUjBSQFJQUmBScFKAUpBSoFKwUsBS0FLgUvBTAFMQUyBTMFNAU1BTYFNwU4BTkFOgU7BTwFPQU+BT8FQAVBBUIFQwVEBUUFRgVHBUgFSQVKBUsFTAVNBU4FTwVQBVEFUgVTBVQFVQVWBVcFWAVZBVoFWwVcBV0FXgVfBWAFYQViBWMFZAVlBWYFZwVoBWkFagVrBWwFbQVuBW8FcAVxBXIFcwV0BXUFdgV3BXgFeQV6BXsFfAV9BX4FfwWABYEFggWDBYQFhQWGBYcFiAWJBYoFiwWMBY0FjgWPBZAFkQWSBZMFlAWVBZYFlwWYBZkFmgWbBZwFnQWeBZ8FoAWhBaIFowWkBaUFpgWnBagFqQWqBasFrAWtBa4FrwWwBbEFsgWzBbQFtQW2BbcFuAW5BboFuwW8Bb0FvgW/BcAFwQXCBcMFxAXFBcYFxwXIBckFygXLBcwFzQXOBc8F0AXRBdIF0wXUBdUF1gXXBdgF2QXaBdsF3AXdBd4F3wXgBeEF4gXjBeQF5QXmBecF6AXpBeoF6wXsBe0F7gXvBfAF8QXyBfMF9AX1BfYF9wX4BfkF+gX7BfwF/QX+Bf8GAAYBBgIGAwYEBgUGBgYHBggGCQYKBgsGDAYNBg4GDwYQBhEGEgYTBhQGFQYWBhcGGAYZBhoGGwYcBh0GHgYfBiAGIQYiBiMGJAYlBiYGJwYoBikGKgYrBiwGLQYuBi8GMAYxBjIGMwY0BjUGNgY3BjgGOQY6BjsGPAY9Bj4GPwZABkEGQgZDBkQGRQZGBkcGSAZJBkoGSwZMBk0GTgZPBlAGUQZSBlMGVAZVBlYGVwZYBlkGWgZbBlwGXQZeBl8GYAZhBmIGYwZkBmUGZgZnBmgGaQZqBmsGbAZtBm4GbwZwBnEGcgZzBnQGdQZ2BncGeAZ5BnoGewZ8Bn0GfgZ/BoAGgQaCBoMGhAaFBoYGhwaIBokGigaLBowGjQaOBo8GkAaRBpIGkwaUBpUGlgaXBpgGmQaaBpsGnAadBp4GnwagBqEGogajBqQGpQamBqcGqAapBqoGqwasBq0GrgavBrAGsQayBrMGtAa1BrYGtwa4BrkGuga7BrwGvQa+Br8GwAbBBsIGwwbEBsUGxgbHBsgGyQbKBssGzAbNBs4GzwbQBtEG0gbTBtQG1QbWBtcG2AbZBtoG2wbcBt0G3gbfBuAG4QbiBuMG5AblBuYG5wboBukG6gbrBuwG7QbuBu8G8AbxBvIG8wb0BvUG9gb3BvgG+Qb6BvsG/Ab9Bv4G/wcABwEHAgcDBwQHBQcGBwcHCAcJBwoHCwcMBw0HDgcPBxAHEQcSBxMHFAcVBxYHFwcYBxkHGgcbBxwHHQceBx8HIAchByIHIwckByUHJgcnBygHKQcqBysHLActBy4HLwcwBzEHMgczBzQHNQc2BzcHOAc5BzoHOwc8Bz0HPgc/B0AHQQdCB0MHRAdFB0YHRwdIB0kHSgdLB0wHTQdOB08HUAdRB1IHUwdUB1UHVgdXB1gHWQdaB1sHXAddB14HXwdgB2EHYgdjB2QHZQdmB2cHaAdpB2oHawdsB20HbgdvB3AHcQdyB3MHdAd1B3YHdwd4B3kHegd7B3wHfQd+B38HgAeBB4IHgweEB4UHhgeHB4gHiQeKB4sHjAeNB44HjweQB5EHkgeTB5QHlQeWB5cHmAeZB5oHmwecB50HngefB6AHoQeiB6MHpAelB6YHpweoB6kHqgerB6wHrQeuB68HsAexB7IHswe0B7UHtge3B7gHuQe6B7sHvAe9B74HvwfAB8EHwgfDB8QHxQfGB8cHyAfJB8oHywfMB80HzgfPB9AH0QfSB9MH1AfVB9YH1wfYB9kH2gfbB9wH3QfeB98H4AfhB+IH4wfkB+UH5gfnB+gH6QfqB+sH7AftB+4H7wfwB/EH8gfzB/QH9Qf2B/cH+Af5B/oH+wf8B/0H/gf/CAAIAQgCCAMIBAgFCAYIBwgICAkICggLCAwIDQgOCA8IEAgRCBIIEwgUCBUIFggXCBgIGQgaCBsIHAgdCB4IHwggCCEIIggjCCQIJQgmCCcIKAgpCCoIKwgsCC0ILggvCDAIMQgyCDMINAg1CDYINwg4CDkIOgg7CDwIPQg+CD8IQAhBCEIIQwhECEUIRghHCEgISQhKCEsg+wy3+iS3AfcQt/kstwP3EPoEFf58+YT6fAf9WP4nFfnSB/fF/DMFprAV+8X4NwX49gamYhX90gf7xfgzBXBmFffF/DcF/PYGDg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4OAAEBAQr4HwwmmhwZLRL7joscBUaLBr0KvQv65xUD6AB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAA==");}', 
    e.cssRules.length);
  };
})(Shumway || (Shumway = {}));
var Shumway$$inline_22 = Shumway || (Shumway = {}), GFX$$inline_23 = Shumway$$inline_22.GFX || (Shumway$$inline_22.GFX = {}), Option$$inline_24 = Shumway$$inline_22.Options.Option, OptionSet$$inline_25 = Shumway$$inline_22.Options.OptionSet, shumwayOptions$$inline_26 = Shumway$$inline_22.Settings.shumwayOptions, rendererOptions$$inline_27 = shumwayOptions$$inline_26.register(new OptionSet$$inline_25("Renderer Options"));
GFX$$inline_23.imageUpdateOption = rendererOptions$$inline_27.register(new Option$$inline_24("", "imageUpdate", "boolean", !0, "Enable image updating."));
GFX$$inline_23.imageConvertOption = rendererOptions$$inline_27.register(new Option$$inline_24("", "imageConvert", "boolean", !0, "Enable image conversion."));
GFX$$inline_23.stageOptions = shumwayOptions$$inline_26.register(new OptionSet$$inline_25("Stage Renderer Options"));
GFX$$inline_23.forcePaint = GFX$$inline_23.stageOptions.register(new Option$$inline_24("", "forcePaint", "boolean", !1, "Force repainting."));
GFX$$inline_23.ignoreViewport = GFX$$inline_23.stageOptions.register(new Option$$inline_24("", "ignoreViewport", "boolean", !1, "Cull elements outside of the viewport."));
GFX$$inline_23.viewportLoupeDiameter = GFX$$inline_23.stageOptions.register(new Option$$inline_24("", "viewportLoupeDiameter", "number", 256, "Size of the viewport loupe.", {range:{min:1, max:1024, step:1}}));
GFX$$inline_23.disableClipping = GFX$$inline_23.stageOptions.register(new Option$$inline_24("", "disableClipping", "boolean", !1, "Disable clipping."));
GFX$$inline_23.debugClipping = GFX$$inline_23.stageOptions.register(new Option$$inline_24("", "debugClipping", "boolean", !1, "Disable clipping."));
GFX$$inline_23.hud = GFX$$inline_23.stageOptions.register(new Option$$inline_24("", "hud", "boolean", !1, "Enable HUD."));
var canvas2DOptions$$inline_28 = GFX$$inline_23.stageOptions.register(new OptionSet$$inline_25("Canvas2D Options"));
GFX$$inline_23.clipDirtyRegions = canvas2DOptions$$inline_28.register(new Option$$inline_24("", "clipDirtyRegions", "boolean", !1, "Clip dirty regions."));
GFX$$inline_23.clipCanvas = canvas2DOptions$$inline_28.register(new Option$$inline_24("", "clipCanvas", "boolean", !1, "Clip Regions."));
GFX$$inline_23.cull = canvas2DOptions$$inline_28.register(new Option$$inline_24("", "cull", "boolean", !1, "Enable culling."));
GFX$$inline_23.snapToDevicePixels = canvas2DOptions$$inline_28.register(new Option$$inline_24("", "snapToDevicePixels", "boolean", !1, ""));
GFX$$inline_23.imageSmoothing = canvas2DOptions$$inline_28.register(new Option$$inline_24("", "imageSmoothing", "boolean", !1, ""));
GFX$$inline_23.masking = canvas2DOptions$$inline_28.register(new Option$$inline_24("", "masking", "boolean", !0, "Composite Mask."));
GFX$$inline_23.blending = canvas2DOptions$$inline_28.register(new Option$$inline_24("", "blending", "boolean", !0, ""));
GFX$$inline_23.debugLayers = canvas2DOptions$$inline_28.register(new Option$$inline_24("", "debugLayers", "boolean", !1, ""));
GFX$$inline_23.filters = canvas2DOptions$$inline_28.register(new Option$$inline_24("", "filters", "boolean", !0, ""));
GFX$$inline_23.cacheShapes = canvas2DOptions$$inline_28.register(new Option$$inline_24("", "cacheShapes", "boolean", !0, ""));
GFX$$inline_23.cacheShapesMaxSize = canvas2DOptions$$inline_28.register(new Option$$inline_24("", "cacheShapesMaxSize", "number", 256, "", {range:{min:1, max:1024, step:1}}));
GFX$$inline_23.cacheShapesThreshold = canvas2DOptions$$inline_28.register(new Option$$inline_24("", "cacheShapesThreshold", "number", 256, "", {range:{min:1, max:1024, step:1}}));
(function(e) {
  (function(m) {
    (function(r) {
      function a(a, b, d, c) {
        var f = 1 - c;
        return a * f * f + 2 * b * f * c + d * c * c;
      }
      function w(a, b, d, c, f) {
        var x = f * f, e = 1 - f, h = e * e;
        return a * e * h + 3 * b * f * h + 3 * d * e * x + c * f * x;
      }
      var k = e.NumberUtilities.clamp, c = e.NumberUtilities.pow2, h = e.NumberUtilities.epsilonEquals;
      r.radianToDegrees = function(a) {
        return 180 * a / Math.PI;
      };
      r.degreesToRadian = function(a) {
        return a * Math.PI / 180;
      };
      r.quadraticBezier = a;
      r.quadraticBezierExtreme = function(b, g, d) {
        var c = (b - g) / (b - 2 * g + d);
        return 0 > c ? b : 1 < c ? d : a(b, g, d, c);
      };
      r.cubicBezier = w;
      r.cubicBezierExtremes = function(a, b, d, c) {
        var f = b - a, x;
        x = 2 * (d - b);
        var e = c - d;
        f + e === x && (e *= 1.0001);
        var h = 2 * f - x, k = x - 2 * f, k = Math.sqrt(k * k - 4 * f * (f - x + e));
        x = 2 * (f - x + e);
        f = (h + k) / x;
        h = (h - k) / x;
        k = [];
        0 <= f && 1 >= f && k.push(w(a, b, d, c, f));
        0 <= h && 1 >= h && k.push(w(a, b, d, c, h));
        return k;
      };
      var n = function() {
        function a(b, d) {
          this.x = b;
          this.y = d;
        }
        a.prototype.setElements = function(a, d) {
          this.x = a;
          this.y = d;
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
        a.prototype.inTriangle = function(a, d, b) {
          var c = a.y * b.x - a.x * b.y + (b.y - a.y) * this.x + (a.x - b.x) * this.y, x = a.x * d.y - a.y * d.x + (a.y - d.y) * this.x + (d.x - a.x) * this.y;
          if (0 > c != 0 > x) {
            return !1;
          }
          a = -d.y * b.x + a.y * (b.x - d.x) + a.x * (d.y - b.y) + d.x * b.y;
          0 > a && (c = -c, x = -x, a = -a);
          return 0 < c && 0 < x && c + x < a;
        };
        a.createEmpty = function() {
          return new a(0, 0);
        };
        a.createEmptyPoints = function(b) {
          for (var d = [], c = 0;c < b;c++) {
            d.push(new a(0, 0));
          }
          return d;
        };
        return a;
      }();
      r.Point = n;
      var f = function() {
        function a(b, d, c) {
          this.x = b;
          this.y = d;
          this.z = c;
        }
        a.prototype.setElements = function(a, d, b) {
          this.x = a;
          this.y = d;
          this.z = b;
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
          var d = this.z * a.x - this.x * a.z, b = this.x * a.y - this.y * a.x;
          this.x = this.y * a.z - this.z * a.y;
          this.y = d;
          this.z = b;
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
        a.createEmptyPoints = function(b) {
          for (var d = [], c = 0;c < b;c++) {
            d.push(new a(0, 0, 0));
          }
          return d;
        };
        return a;
      }();
      r.Point3D = f;
      var v = function() {
        function a(b, d, c, f) {
          this.setElements(b, d, c, f);
          a.allocationCount++;
        }
        a.prototype.setElements = function(a, d, b, c) {
          this.x = a;
          this.y = d;
          this.w = b;
          this.h = c;
        };
        a.prototype.set = function(a) {
          this.x = a.x;
          this.y = a.y;
          this.w = a.w;
          this.h = a.h;
        };
        a.prototype.contains = function(a) {
          var d = a.x + a.w, b = a.y + a.h, c = this.x + this.w, x = this.y + this.h;
          return a.x >= this.x && a.x < c && a.y >= this.y && a.y < x && d > this.x && d <= c && b > this.y && b <= x;
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
              var d = this.x, b = this.y;
              this.x > a.x && (d = a.x);
              this.y > a.y && (b = a.y);
              var c = this.x + this.w;
              c < a.x + a.w && (c = a.x + a.w);
              var x = this.y + this.h;
              x < a.y + a.h && (x = a.y + a.h);
              this.x = d;
              this.y = b;
              this.w = c - d;
              this.h = x - b;
            }
          }
        };
        a.prototype.isEmpty = function() {
          return 0 >= this.w || 0 >= this.h;
        };
        a.prototype.setEmpty = function() {
          this.h = this.w = this.y = this.x = 0;
        };
        a.prototype.intersect = function(b) {
          var d = a.createEmpty();
          this.isEmpty() || b.isEmpty() ? d.setEmpty() : (d.x = Math.max(this.x, b.x), d.y = Math.max(this.y, b.y), d.w = Math.min(this.x + this.w, b.x + b.w) - d.x, d.h = Math.min(this.y + this.h, b.y + b.h) - d.y, d.isEmpty() && d.setEmpty(), this.set(d));
        };
        a.prototype.intersects = function(a) {
          if (this.isEmpty() || a.isEmpty()) {
            return !1;
          }
          var d = Math.max(this.x, a.x), b = Math.max(this.y, a.y), d = Math.min(this.x + this.w, a.x + a.w) - d;
          a = Math.min(this.y + this.h, a.y + a.h) - b;
          return !(0 >= d || 0 >= a);
        };
        a.prototype.intersectsTransformedAABB = function(b, d) {
          var c = a._temporary;
          c.set(b);
          d.transformRectangleAABB(c);
          return this.intersects(c);
        };
        a.prototype.intersectsTranslated = function(a, d, b) {
          if (this.isEmpty() || a.isEmpty()) {
            return !1;
          }
          var c = Math.max(this.x, a.x + d), x = Math.max(this.y, a.y + b);
          d = Math.min(this.x + this.w, a.x + d + a.w) - c;
          a = Math.min(this.y + this.h, a.y + b + a.h) - x;
          return !(0 >= d || 0 >= a);
        };
        a.prototype.area = function() {
          return this.w * this.h;
        };
        a.prototype.clone = function() {
          var b = a.allocate();
          b.set(this);
          return b;
        };
        a.allocate = function() {
          var b = a._dirtyStack;
          return b.length ? b.pop() : new a(12345, 67890, 12345, 67890);
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
          var b = a.allocate();
          b.setEmpty();
          return b;
        };
        a.createSquare = function(b) {
          return new a(-b / 2, -b / 2, b, b);
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
      r.Rectangle = v;
      var u = function() {
        function a(b) {
          this.corners = b.map(function(a) {
            return a.clone();
          });
          this.axes = [b[1].clone().sub(b[0]), b[3].clone().sub(b[0])];
          this.origins = [];
          for (var d = 0;2 > d;d++) {
            this.axes[d].mul(1 / this.axes[d].squaredLength()), this.origins.push(b[0].dot(this.axes[d]));
          }
        }
        a.prototype.getBounds = function() {
          return a.getBounds(this.corners);
        };
        a.getBounds = function(a) {
          for (var d = new n(Number.MAX_VALUE, Number.MAX_VALUE), b = new n(Number.MIN_VALUE, Number.MIN_VALUE), c = 0;4 > c;c++) {
            var x = a[c].x, f = a[c].y;
            d.x = Math.min(d.x, x);
            d.y = Math.min(d.y, f);
            b.x = Math.max(b.x, x);
            b.y = Math.max(b.y, f);
          }
          return new v(d.x, d.y, b.x - d.x, b.y - d.y);
        };
        a.prototype.intersects = function(a) {
          return this.intersectsOneWay(a) && a.intersectsOneWay(this);
        };
        a.prototype.intersectsOneWay = function(a) {
          for (var d = 0;2 > d;d++) {
            for (var b = 0;4 > b;b++) {
              var c = a.corners[b].dot(this.axes[d]), x, f;
              0 === b ? f = x = c : c < x ? x = c : c > f && (f = c);
            }
            if (x > 1 + this.origins[d] || f < this.origins[d]) {
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
      var q = function() {
        function a(b, d, c, f, x, e) {
          this._data = new Float64Array(6);
          this._type = 0;
          this.setElements(b, d, c, f, x, e);
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
        a.prototype.setElements = function(a, d, b, c, x, f) {
          var e = this._data;
          e[0] = a;
          e[1] = d;
          e[2] = b;
          e[3] = c;
          e[4] = x;
          e[5] = f;
          this._type = 0;
        };
        a.prototype.set = function(a) {
          var d = this._data, b = a._data;
          d[0] = b[0];
          d[1] = b[1];
          d[2] = b[2];
          d[3] = b[3];
          d[4] = b[4];
          d[5] = b[5];
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
          var b = a.allocate();
          b.set(this);
          return b;
        };
        a.allocate = function() {
          var b = a._dirtyStack;
          return b.length ? b.pop() : new a(12345, 12345, 12345, 12345, 12345, 12345);
        };
        a.prototype.free = function() {
          a._dirtyStack.push(this);
        };
        a.prototype.transform = function(a, d, b, c, x, f) {
          var e = this._data, h = e[0], k = e[1], l = e[2], t = e[3], q = e[4], n = e[5];
          e[0] = h * a + l * d;
          e[1] = k * a + t * d;
          e[2] = h * b + l * c;
          e[3] = k * b + t * c;
          e[4] = h * x + l * f + q;
          e[5] = k * x + t * f + n;
          this._type = 0;
          return this;
        };
        a.prototype.transformRectangle = function(a, d) {
          var b = this._data, c = b[0], x = b[1], f = b[2], e = b[3], h = b[4], b = b[5], k = a.x, l = a.y, t = a.w, q = a.h;
          d[0].x = c * k + f * l + h;
          d[0].y = x * k + e * l + b;
          d[1].x = c * (k + t) + f * l + h;
          d[1].y = x * (k + t) + e * l + b;
          d[2].x = c * (k + t) + f * (l + q) + h;
          d[2].y = x * (k + t) + e * (l + q) + b;
          d[3].x = c * k + f * (l + q) + h;
          d[3].y = x * k + e * (l + q) + b;
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
              var b = d[0], c = d[1], f = d[2], e = d[3], h = d[4], k = d[5], l = a.x, t = a.y, q = a.w, n = a.h, d = b * l + f * t + h, u = c * l + e * t + k, v = b * (l + q) + f * t + h, m = c * (l + q) + e * t + k, r = b * (l + q) + f * (t + n) + h, q = c * (l + q) + e * (t + n) + k, b = b * l + f * (t + n) + h, c = c * l + e * (t + n) + k, e = 0;
              d > v && (e = d, d = v, v = e);
              r > b && (e = r, r = b, b = e);
              a.x = d < r ? d : r;
              a.w = (v > b ? v : b) - a.x;
              u > m && (e = u, u = m, m = e);
              q > c && (e = q, q = c, c = e);
              a.y = u < q ? u : q;
              a.h = (m > c ? m : c) - a.y;
            }
          }
        };
        a.prototype.scale = function(a, d) {
          var b = this._data;
          b[0] *= a;
          b[1] *= d;
          b[2] *= a;
          b[3] *= d;
          b[4] *= a;
          b[5] *= d;
          this._type = 0;
          return this;
        };
        a.prototype.scaleClone = function(a, d) {
          return 1 === a && 1 === d ? this : this.clone().scale(a, d);
        };
        a.prototype.rotate = function(a) {
          var d = this._data, b = d[0], c = d[1], f = d[2], e = d[3], h = d[4], k = d[5], l = Math.cos(a);
          a = Math.sin(a);
          d[0] = l * b - a * c;
          d[1] = a * b + l * c;
          d[2] = l * f - a * e;
          d[3] = a * f + l * e;
          d[4] = l * h - a * k;
          d[5] = a * h + l * k;
          this._type = 0;
          return this;
        };
        a.prototype.concat = function(a) {
          if (1 === a._type) {
            return this;
          }
          var d = this._data;
          a = a._data;
          var b = d[0] * a[0], c = 0, f = 0, e = d[3] * a[3], h = d[4] * a[0] + a[4], k = d[5] * a[3] + a[5];
          if (0 !== d[1] || 0 !== d[2] || 0 !== a[1] || 0 !== a[2]) {
            b += d[1] * a[2], e += d[2] * a[1], c += d[0] * a[1] + d[1] * a[3], f += d[2] * a[0] + d[3] * a[2], h += d[5] * a[2], k += d[4] * a[1];
          }
          d[0] = b;
          d[1] = c;
          d[2] = f;
          d[3] = e;
          d[4] = h;
          d[5] = k;
          this._type = 0;
          return this;
        };
        a.prototype.concatClone = function(a) {
          return this.clone().concat(a);
        };
        a.prototype.preMultiply = function(a) {
          var d = this._data, b = a._data;
          if (2 === a._type && this._type & 3) {
            d[4] += b[4], d[5] += b[5], this._type = 2;
          } else {
            if (1 !== a._type) {
              a = b[0] * d[0];
              var c = 0, f = 0, e = b[3] * d[3], h = b[4] * d[0] + d[4], k = b[5] * d[3] + d[5];
              if (0 !== b[1] || 0 !== b[2] || 0 !== d[1] || 0 !== d[2]) {
                a += b[1] * d[2], e += b[2] * d[1], c += b[0] * d[1] + b[1] * d[3], f += b[2] * d[0] + b[3] * d[2], h += b[5] * d[2], k += b[4] * d[1];
              }
              d[0] = a;
              d[1] = c;
              d[2] = f;
              d[3] = e;
              d[4] = h;
              d[5] = k;
              this._type = 0;
            }
          }
        };
        a.prototype.translate = function(a, b) {
          var c = this._data;
          c[4] += a;
          c[5] += b;
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
            var b = this._data, c = a.x, f = a.y;
            a.x = b[0] * c + b[2] * f + b[4];
            a.y = b[1] * c + b[3] * f + b[5];
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
            var b = this._data, c = a.x, f = a.y;
            a.x = b[0] * c + b[2] * f;
            a.y = b[1] * c + b[3] * f;
          }
        };
        a.prototype.inverse = function(a) {
          var b = this._data, c = a._data;
          if (1 === this._type) {
            a.setIdentity();
          } else {
            if (2 === this._type) {
              c[0] = 1, c[1] = 0, c[2] = 0, c[3] = 1, c[4] = -b[4], c[5] = -b[5], a._type = 2;
            } else {
              var f = b[1], x = b[2], e = b[4], h = b[5];
              if (0 === f && 0 === x) {
                var k = c[0] = 1 / b[0], b = c[3] = 1 / b[3];
                c[1] = 0;
                c[2] = 0;
                c[4] = -k * e;
                c[5] = -b * h;
              } else {
                var k = b[0], b = b[3], l = k * b - f * x;
                if (0 === l) {
                  a.setIdentity();
                  return;
                }
                l = 1 / l;
                c[0] = b * l;
                f = c[1] = -f * l;
                x = c[2] = -x * l;
                b = c[3] = k * l;
                c[4] = -(c[0] * e + x * h);
                c[5] = -(f * e + b * h);
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
          var b = a.allocate();
          b.setIdentity();
          return b;
        };
        a.prototype.toSVGMatrix = function() {
          var b = this._data, d = a._createSVGMatrix();
          try {
            d.a = b[0], d.b = b[1], d.c = b[2], d.d = b[3], d.e = b[4], d.f = b[5];
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
        a.createSVGMatrixFromArray = function(b) {
          var d = a._createSVGMatrix();
          d.a = b[0];
          d.b = b[1];
          d.c = b[2];
          d.d = b[3];
          d.e = b[4];
          d.f = b[5];
          return d;
        };
        a.allocationCount = 0;
        a._dirtyStack = [];
        a.multiply = function(a, b) {
          var c = b._data;
          a.transform(c[0], c[1], c[2], c[3], c[4], c[5]);
        };
        return a;
      }();
      r.Matrix = q;
      q = function() {
        function a(b) {
          this._m = new Float32Array(b);
        }
        a.prototype.asWebGLMatrix = function() {
          return this._m;
        };
        a.createCameraLookAt = function(b, d, c) {
          d = b.clone().sub(d).normalize();
          c = c.clone().cross(d).normalize();
          var f = d.clone().cross(c);
          return new a([c.x, c.y, c.z, 0, f.x, f.y, f.z, 0, d.x, d.y, d.z, 0, b.x, b.y, b.z, 1]);
        };
        a.createLookAt = function(b, d, c) {
          d = b.clone().sub(d).normalize();
          c = c.clone().cross(d).normalize();
          var f = d.clone().cross(c);
          return new a([c.x, f.x, d.x, 0, f.x, f.y, d.y, 0, d.x, f.z, d.z, 0, -c.dot(b), -f.dot(b), -d.dot(b), 1]);
        };
        a.prototype.mul = function(a) {
          a = [a.x, a.y, a.z, 0];
          for (var b = this._m, c = [], e = 0;4 > e;e++) {
            c[e] = 0;
            for (var x = 4 * e, h = 0;4 > h;h++) {
              c[e] += b[x + h] * a[h];
            }
          }
          return new f(c[0], c[1], c[2]);
        };
        a.create2DProjection = function(b, d, c) {
          return new a([2 / b, 0, 0, 0, 0, -2 / d, 0, 0, 0, 0, 2 / c, 0, -1, 1, 0, 1]);
        };
        a.createPerspective = function(b, d, c, f) {
          b = Math.tan(.5 * Math.PI - .5 * b);
          var e = 1 / (c - f);
          return new a([b / d, 0, 0, 0, 0, b, 0, 0, 0, 0, (c + f) * e, -1, 0, 0, c * f * e * 2, 0]);
        };
        a.createIdentity = function() {
          return a.createTranslation(0, 0, 0);
        };
        a.createTranslation = function(b, d, c) {
          return new a([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, b, d, c, 1]);
        };
        a.createXRotation = function(b) {
          var d = Math.cos(b);
          b = Math.sin(b);
          return new a([1, 0, 0, 0, 0, d, b, 0, 0, -b, d, 0, 0, 0, 0, 1]);
        };
        a.createYRotation = function(b) {
          var d = Math.cos(b);
          b = Math.sin(b);
          return new a([d, 0, -b, 0, 0, 1, 0, 0, b, 0, d, 0, 0, 0, 0, 1]);
        };
        a.createZRotation = function(b) {
          var d = Math.cos(b);
          b = Math.sin(b);
          return new a([d, b, 0, 0, -b, d, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        };
        a.createScale = function(b, d, c) {
          return new a([b, 0, 0, 0, 0, d, 0, 0, 0, 0, c, 0, 0, 0, 0, 1]);
        };
        a.createMultiply = function(b, d) {
          var c = b._m, f = d._m, e = c[0], h = c[1], k = c[2], l = c[3], q = c[4], n = c[5], u = c[6], v = c[7], m = c[8], r = c[9], w = c[10], H = c[11], B = c[12], z = c[13], C = c[14], c = c[15], E = f[0], A = f[1], D = f[2], F = f[3], G = f[4], K = f[5], I = f[6], M = f[7], N = f[8], O = f[9], P = f[10], Q = f[11], R = f[12], S = f[13], T = f[14], f = f[15];
          return new a([e * E + h * G + k * N + l * R, e * A + h * K + k * O + l * S, e * D + h * I + k * P + l * T, e * F + h * M + k * Q + l * f, q * E + n * G + u * N + v * R, q * A + n * K + u * O + v * S, q * D + n * I + u * P + v * T, q * F + n * M + u * Q + v * f, m * E + r * G + w * N + H * R, m * A + r * K + w * O + H * S, m * D + r * I + w * P + H * T, m * F + r * M + w * Q + H * f, B * E + z * G + C * N + c * R, B * A + z * K + C * O + c * S, B * D + z * I + C * P + c * T, B * F + z * 
          M + C * Q + c * f]);
        };
        a.createInverse = function(b) {
          var d = b._m;
          b = d[0];
          var c = d[1], f = d[2], e = d[3], h = d[4], k = d[5], l = d[6], q = d[7], n = d[8], u = d[9], v = d[10], m = d[11], r = d[12], w = d[13], H = d[14], d = d[15], B = v * d, z = H * m, C = l * d, E = H * q, A = l * m, D = v * q, F = f * d, G = H * e, K = f * m, I = v * e, M = f * q, N = l * e, O = n * w, P = r * u, Q = h * w, R = r * k, S = h * u, T = n * k, Z = b * w, aa = r * c, ba = b * u, ca = n * c, da = b * k, ea = h * c, fa = B * k + E * u + A * w - (z * k + C * u + D * w), ga = z * 
          c + F * u + I * w - (B * c + G * u + K * w), w = C * c + G * k + M * w - (E * c + F * k + N * w), c = D * c + K * k + N * u - (A * c + I * k + M * u), k = 1 / (b * fa + h * ga + n * w + r * c);
          return new a([k * fa, k * ga, k * w, k * c, k * (z * h + C * n + D * r - (B * h + E * n + A * r)), k * (B * b + G * n + K * r - (z * b + F * n + I * r)), k * (E * b + F * h + N * r - (C * b + G * h + M * r)), k * (A * b + I * h + M * n - (D * b + K * h + N * n)), k * (O * q + R * m + S * d - (P * q + Q * m + T * d)), k * (P * e + Z * m + ca * d - (O * e + aa * m + ba * d)), k * (Q * e + aa * q + da * d - (R * e + Z * q + ea * d)), k * (T * e + ba * q + ea * m - (S * e + ca * q + da * m)), 
          k * (Q * v + T * H + P * l - (S * H + O * l + R * v)), k * (ba * H + O * f + aa * v - (Z * v + ca * H + P * f)), k * (Z * l + ea * H + R * f - (da * H + Q * f + aa * l)), k * (da * v + S * f + ca * l - (ba * l + ea * v + T * f))]);
        };
        return a;
      }();
      r.Matrix3D = q;
      q = function() {
        function a(b, d, c) {
          void 0 === c && (c = 7);
          var f = this.size = 1 << c;
          this.sizeInBits = c;
          this.w = b;
          this.h = d;
          this.c = Math.ceil(b / f);
          this.r = Math.ceil(d / f);
          this.grid = [];
          for (b = 0;b < this.r;b++) {
            for (this.grid.push([]), d = 0;d < this.c;d++) {
              this.grid[b][d] = new a.Cell(new v(d * f, b * f, f, f));
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
          return new v(0, 0, this.w, this.h);
        };
        a.prototype.addDirtyRectangle = function(a) {
          var b = a.x >> this.sizeInBits, c = a.y >> this.sizeInBits;
          if (!(b >= this.c || c >= this.r)) {
            0 > b && (b = 0);
            0 > c && (c = 0);
            var f = this.grid[c][b];
            a = a.clone();
            a.snap();
            if (f.region.contains(a)) {
              f.bounds.isEmpty() ? f.bounds.set(a) : f.bounds.contains(a) || f.bounds.union(a);
            } else {
              for (var e = Math.min(this.c, Math.ceil((a.x + a.w) / this.size)) - b, h = Math.min(this.r, Math.ceil((a.y + a.h) / this.size)) - c, k = 0;k < e;k++) {
                for (var l = 0;l < h;l++) {
                  f = this.grid[c + l][b + k], f = f.region.clone(), f.intersect(a), f.isEmpty() || this.addDirtyRectangle(f);
                }
              }
            }
          }
        };
        a.prototype.gatherRegions = function(a) {
          for (var b = 0;b < this.r;b++) {
            for (var c = 0;c < this.c;c++) {
              this.grid[b][c].bounds.isEmpty() || a.push(this.grid[b][c].bounds);
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
          for (var b = 0, c = 0;c < this.r;c++) {
            for (var f = 0;f < this.c;f++) {
              b += this.grid[c][f].region.area();
            }
          }
          return b / a;
        };
        a.prototype.render = function(a, b) {
          function c(b) {
            a.rect(b.x, b.y, b.w, b.h);
          }
          if (b && b.drawGrid) {
            a.strokeStyle = "white";
            for (var f = 0;f < this.r;f++) {
              for (var e = 0;e < this.c;e++) {
                var h = this.grid[f][e];
                a.beginPath();
                c(h.region);
                a.closePath();
                a.stroke();
              }
            }
          }
          a.strokeStyle = "#E0F8D8";
          for (f = 0;f < this.r;f++) {
            for (e = 0;e < this.c;e++) {
              h = this.grid[f][e], a.beginPath(), c(h.bounds), a.closePath(), a.stroke();
            }
          }
        };
        a.tmpRectangle = v.createEmpty();
        return a;
      }();
      r.DirtyRegion = q;
      (function(a) {
        var b = function() {
          function a(b) {
            this.region = b;
            this.bounds = v.createEmpty();
          }
          a.prototype.clear = function() {
            this.bounds.setEmpty();
          };
          return a;
        }();
        a.Cell = b;
      })(q = r.DirtyRegion || (r.DirtyRegion = {}));
      var b = function() {
        function a(b, d, c, f, e, h) {
          this.index = b;
          this.x = d;
          this.y = c;
          this.scale = h;
          this.bounds = new v(d * f, c * e, f, e);
        }
        a.prototype.getOBB = function() {
          if (this._obb) {
            return this._obb;
          }
          this.bounds.getCorners(a.corners);
          return this._obb = new u(a.corners);
        };
        a.corners = n.createEmptyPoints(4);
        return a;
      }();
      r.Tile = b;
      var l = function() {
        function a(c, d, p, f, e) {
          this.tileW = p;
          this.tileH = f;
          this.scale = e;
          this.w = c;
          this.h = d;
          this.rows = Math.ceil(d / f);
          this.columns = Math.ceil(c / p);
          this.tiles = [];
          for (d = c = 0;d < this.rows;d++) {
            for (var h = 0;h < this.columns;h++) {
              this.tiles.push(new b(c++, h, d, p, f, e));
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
          var c = this.columns * this.rows;
          return 40 > c && b.isScaleOrRotation() ? this.getFewTiles(a, b, 10 < c) : this.getManyTiles(a, b);
        };
        a.prototype.getFewTiles = function(b, d, c) {
          void 0 === c && (c = !0);
          if (d.isTranslationOnly() && 1 === this.tiles.length) {
            return this.tiles[0].bounds.intersectsTranslated(b, d.tx, d.ty) ? [this.tiles[0]] : [];
          }
          d.transformRectangle(b, a._points);
          var f;
          b = new v(0, 0, this.w, this.h);
          c && (f = new u(a._points));
          b.intersect(u.getBounds(a._points));
          if (b.isEmpty()) {
            return [];
          }
          var e = b.x / this.tileW | 0;
          d = b.y / this.tileH | 0;
          var h = Math.ceil((b.x + b.w) / this.tileW) | 0, l = Math.ceil((b.y + b.h) / this.tileH) | 0, e = k(e, 0, this.columns), h = k(h, 0, this.columns);
          d = k(d, 0, this.rows);
          for (var l = k(l, 0, this.rows), q = [];e < h;e++) {
            for (var n = d;n < l;n++) {
              var m = this.tiles[n * this.columns + e];
              m.bounds.intersects(b) && (c ? m.getOBB().intersects(f) : 1) && q.push(m);
            }
          }
          return q;
        };
        a.prototype.getManyTiles = function(b, d) {
          function c(a, b, d) {
            return (a - b.x) * (d.y - b.y) / (d.x - b.x) + b.y;
          }
          function f(a, b, d, c, g) {
            if (!(0 > d || d >= b.columns)) {
              for (c = k(c, 0, b.rows), g = k(g + 1, 0, b.rows);c < g;c++) {
                a.push(b.tiles[c * b.columns + d]);
              }
            }
          }
          var e = a._points;
          d.transformRectangle(b, e);
          for (var h = e[0].x < e[1].x ? 0 : 1, l = e[2].x < e[3].x ? 2 : 3, l = e[h].x < e[l].x ? h : l, h = [], q = 0;5 > q;q++, l++) {
            h.push(e[l % 4]);
          }
          (h[1].x - h[0].x) * (h[3].y - h[0].y) < (h[1].y - h[0].y) * (h[3].x - h[0].x) && (e = h[1], h[1] = h[3], h[3] = e);
          var e = [], n, u, l = Math.floor(h[0].x / this.tileW), q = (l + 1) * this.tileW;
          if (h[2].x < q) {
            n = Math.min(h[0].y, h[1].y, h[2].y, h[3].y);
            u = Math.max(h[0].y, h[1].y, h[2].y, h[3].y);
            var v = Math.floor(n / this.tileH), m = Math.floor(u / this.tileH);
            f(e, this, l, v, m);
            return e;
          }
          var r = 0, w = 4, L = !1;
          if (h[0].x === h[1].x || h[0].x === h[3].x) {
            h[0].x === h[1].x ? (L = !0, r++) : w--, n = c(q, h[r], h[r + 1]), u = c(q, h[w], h[w - 1]), v = Math.floor(h[r].y / this.tileH), m = Math.floor(h[w].y / this.tileH), f(e, this, l, v, m), l++;
          }
          do {
            var H, B, z, C;
            h[r + 1].x < q ? (H = h[r + 1].y, z = !0) : (H = c(q, h[r], h[r + 1]), z = !1);
            h[w - 1].x < q ? (B = h[w - 1].y, C = !0) : (B = c(q, h[w], h[w - 1]), C = !1);
            v = Math.floor((h[r].y < h[r + 1].y ? n : H) / this.tileH);
            m = Math.floor((h[w].y > h[w - 1].y ? u : B) / this.tileH);
            f(e, this, l, v, m);
            if (z && L) {
              break;
            }
            z ? (L = !0, r++, n = c(q, h[r], h[r + 1])) : n = H;
            C ? (w--, u = c(q, h[w], h[w - 1])) : u = B;
            l++;
            q = (l + 1) * this.tileW;
          } while (r < w);
          return e;
        };
        a._points = n.createEmptyPoints(4);
        return a;
      }();
      r.TileCache = l;
      q = function() {
        function a(b, d, c) {
          this._cacheLevels = [];
          this._source = b;
          this._tileSize = d;
          this._minUntiledSize = c;
        }
        a.prototype._getTilesAtScale = function(a, b, p) {
          var f = Math.max(b.getAbsoluteScaleX(), b.getAbsoluteScaleY()), e = 0;
          1 !== f && (e = k(Math.round(Math.log(1 / f) / Math.LN2), -5, 3));
          f = c(e);
          if (this._source.hasFlags(256)) {
            for (;;) {
              f = c(e);
              if (p.contains(this._source.getBounds().getAbsoluteBounds().clone().scale(f, f))) {
                break;
              }
              e--;
            }
          }
          this._source.hasFlags(512) || (e = k(e, -5, 0));
          f = c(e);
          p = 5 + e;
          e = this._cacheLevels[p];
          if (!e) {
            var e = this._source.getBounds().getAbsoluteBounds().clone().scale(f, f), h, q;
            this._source.hasFlags(256) || !this._source.hasFlags(1024) || Math.max(e.w, e.h) <= this._minUntiledSize ? (h = e.w, q = e.h) : h = q = this._tileSize;
            e = this._cacheLevels[p] = new l(e.w, e.h, h, q, f);
          }
          return e.getTiles(a, b.scaleClone(f, f));
        };
        a.prototype.fetchTiles = function(a, b, c, f) {
          var e = new v(0, 0, c.canvas.width, c.canvas.height);
          a = this._getTilesAtScale(a, b, e);
          var h;
          b = this._source;
          for (var k = 0;k < a.length;k++) {
            var l = a[k];
            l.cachedSurfaceRegion && l.cachedSurfaceRegion.surface && !b.hasFlags(4352) || (h || (h = []), h.push(l));
          }
          h && this._cacheTiles(c, h, f, e);
          b.removeFlags(4096);
          return a;
        };
        a.prototype._getTileBounds = function(a) {
          for (var b = v.createEmpty(), c = 0;c < a.length;c++) {
            b.union(a[c].bounds);
          }
          return b;
        };
        a.prototype._cacheTiles = function(a, b, c, f, e) {
          void 0 === e && (e = 4);
          var h = this._getTileBounds(b);
          a.save();
          a.setTransform(1, 0, 0, 1, 0, 0);
          a.clearRect(0, 0, f.w, f.h);
          a.translate(-h.x, -h.y);
          a.scale(b[0].scale, b[0].scale);
          var k = this._source.getBounds();
          a.translate(-k.x, -k.y);
          2 <= m.traceLevel && m.writer && m.writer.writeLn("Rendering Tiles: " + h);
          this._source.render(a, 0);
          a.restore();
          for (var k = null, l = 0;l < b.length;l++) {
            var q = b[l], n = q.bounds.clone();
            n.x -= h.x;
            n.y -= h.y;
            f.contains(n) || (k || (k = []), k.push(q));
            q.cachedSurfaceRegion = c(q.cachedSurfaceRegion, a, n);
          }
          k && (2 <= k.length ? (b = k.slice(0, k.length / 2 | 0), h = k.slice(b.length), this._cacheTiles(a, b, c, f, e - 1), this._cacheTiles(a, h, c, f, e - 1)) : this._cacheTiles(a, k, c, f, e - 1));
        };
        return a;
      }();
      r.RenderableTileCache = q;
    })(m.Geometry || (m.Geometry = {}));
  })(e.GFX || (e.GFX = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(e, m) {
  function r() {
    this.constructor = e;
  }
  for (var a in m) {
    m.hasOwnProperty(a) && (e[a] = m[a]);
  }
  r.prototype = m.prototype;
  e.prototype = new r;
};
(function(e) {
  (function(m) {
    var r = e.IntegerUtilities.roundToMultipleOfPowerOfTwo, a = m.Geometry.Rectangle;
    (function(e) {
      var k = function(a) {
        function b() {
          a.apply(this, arguments);
        }
        __extends(b, a);
        return b;
      }(m.Geometry.Rectangle);
      e.Region = k;
      var c = function() {
        function a(b, c) {
          this._root = new h(0, 0, b | 0, c | 0, !1);
        }
        a.prototype.allocate = function(a, c) {
          a = Math.ceil(a);
          c = Math.ceil(c);
          var f = this._root.insert(a, c);
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
      e.CompactAllocator = c;
      var h = function(a) {
        function b(b, c, g, d, f) {
          a.call(this, b, c, g, d);
          this._children = null;
          this._horizontal = f;
          this.allocated = !1;
        }
        __extends(b, a);
        b.prototype.clear = function() {
          this._children = null;
          this.allocated = !1;
        };
        b.prototype.insert = function(a, b) {
          return this._insert(a, b, 0);
        };
        b.prototype._insert = function(a, f, g) {
          if (!(g > c.MAX_DEPTH || this.allocated || this.w < a || this.h < f)) {
            if (this._children) {
              var d;
              if ((d = this._children[0]._insert(a, f, g + 1)) || (d = this._children[1]._insert(a, f, g + 1))) {
                return d;
              }
            } else {
              return d = !this._horizontal, c.RANDOM_ORIENTATION && (d = .5 <= Math.random()), this._children = this._horizontal ? [new b(this.x, this.y, this.w, f, !1), new b(this.x, this.y + f, this.w, this.h - f, d)] : [new b(this.x, this.y, a, this.h, !0), new b(this.x + a, this.y, this.w - a, this.h, d)], d = this._children[0], d.w === a && d.h === f ? (d.allocated = !0, d) : this._insert(a, f, g + 1);
            }
          }
        };
        return b;
      }(e.Region), n = function() {
        function a(b, c, f, g) {
          this._columns = b / f | 0;
          this._rows = c / g | 0;
          this._sizeW = f;
          this._sizeH = g;
          this._freeList = [];
          this._index = 0;
          this._total = this._columns * this._rows;
        }
        a.prototype.allocate = function(a, c) {
          a = Math.ceil(a);
          c = Math.ceil(c);
          var e = this._sizeW, g = this._sizeH;
          if (a > e || c > g) {
            return null;
          }
          var d = this._freeList, p = this._index;
          return 0 < d.length ? (e = d.pop(), e.w = a, e.h = c, e.allocated = !0, e) : p < this._total ? (d = p / this._columns | 0, e = new f((p - d * this._columns) * e, d * g, a, c), e.index = p, e.allocator = this, e.allocated = !0, this._index++, e) : null;
        };
        a.prototype.free = function(a) {
          a.allocated = !1;
          this._freeList.push(a);
        };
        return a;
      }();
      e.GridAllocator = n;
      var f = function(a) {
        function b(b, c, g, d) {
          a.call(this, b, c, g, d);
          this.index = -1;
        }
        __extends(b, a);
        return b;
      }(e.Region);
      e.GridCell = f;
      var v = function() {
        return function(a, b, c) {
          this.size = a;
          this.region = b;
          this.allocator = c;
        };
      }(), u = function(a) {
        function b(b, c, g, d, f) {
          a.call(this, b, c, g, d);
          this.region = f;
        }
        __extends(b, a);
        return b;
      }(e.Region);
      e.BucketCell = u;
      k = function() {
        function c(a, f) {
          this._buckets = [];
          this._w = a | 0;
          this._h = f | 0;
          this._filled = 0;
        }
        c.prototype.allocate = function(b, c) {
          b = Math.ceil(b);
          c = Math.ceil(c);
          var f = Math.max(b, c);
          if (b > this._w || c > this._h) {
            return null;
          }
          var g = null, d, p = this._buckets;
          do {
            for (var e = 0;e < p.length && !(p[e].size >= f && (d = p[e], g = d.allocator.allocate(b, c)));e++) {
            }
            if (!g) {
              var x = this._h - this._filled;
              if (x < c) {
                return null;
              }
              var e = r(f, 8), h = 2 * e;
              h > x && (h = x);
              if (h < e) {
                return null;
              }
              x = new a(0, this._filled, this._w, h);
              this._buckets.push(new v(e, x, new n(x.w, x.h, e, e)));
              this._filled += h;
            }
          } while (!g);
          return new u(d.region.x + g.x, d.region.y + g.y, g.w, g.h, g);
        };
        c.prototype.free = function(a) {
          a.region.allocator.free(a.region);
        };
        return c;
      }();
      e.BucketAllocator = k;
    })(m.RegionAllocator || (m.RegionAllocator = {}));
    (function(a) {
      var e = function() {
        function a(c) {
          this._createSurface = c;
          this._surfaces = [];
        }
        Object.defineProperty(a.prototype, "surfaces", {get:function() {
          return this._surfaces;
        }, enumerable:!0, configurable:!0});
        a.prototype._createNewSurface = function(a, c) {
          var f = this._createSurface(a, c);
          this._surfaces.push(f);
          return f;
        };
        a.prototype.addSurface = function(a) {
          this._surfaces.push(a);
        };
        a.prototype.allocate = function(a, c, f) {
          for (var e = 0;e < this._surfaces.length;e++) {
            var k = this._surfaces[e];
            if (k !== f && (k = k.allocate(a, c))) {
              return k;
            }
          }
          return this._createNewSurface(a, c).allocate(a, c);
        };
        a.prototype.free = function(a) {
        };
        return a;
      }();
      a.SimpleAllocator = e;
    })(m.SurfaceRegionAllocator || (m.SurfaceRegionAllocator = {}));
  })(e.GFX || (e.GFX = {}));
})(Shumway || (Shumway = {}));
(function(e) {
  (function(m) {
    var r = m.Geometry.Rectangle, a = m.Geometry.Matrix, w = m.Geometry.DirtyRegion;
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
    var k = m.BlendMode;
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
    })(m.NodeFlags || (m.NodeFlags = {}));
    var c = m.NodeFlags;
    (function(a) {
      a[a.Node = 1] = "Node";
      a[a.Shape = 3] = "Shape";
      a[a.Group = 5] = "Group";
      a[a.Stage = 13] = "Stage";
      a[a.Renderable = 33] = "Renderable";
    })(m.NodeType || (m.NodeType = {}));
    var h = m.NodeType;
    (function(a) {
      a[a.None = 0] = "None";
      a[a.OnStageBoundsChanged = 1] = "OnStageBoundsChanged";
      a[a.RemovedFromStage = 2] = "RemovedFromStage";
    })(m.NodeEventType || (m.NodeEventType = {}));
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
        for (var c = a.getChildren(), g = 0;g < c.length;g++) {
          c[g].visit(this, b);
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
    m.NodeVisitor = n;
    var f = function() {
      return function() {
      };
    }();
    m.State = f;
    var v = function(b) {
      function d(d) {
        b.call(this);
        this.matrix = a.createIdentity();
        this.depth = 0;
      }
      __extends(d, b);
      d.prototype.transform = function(a) {
        var b = this.clone();
        b.matrix.preMultiply(a.getMatrix());
        return b;
      };
      d.allocate = function() {
        var a = d._dirtyStack, b = null;
        return b = a.length ? a.pop() : new d(this._doNotCallCtorDirectly);
      };
      d.prototype.clone = function() {
        var a = d.allocate();
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
      d._doNotCallCtorDirectly = Object.create(null);
      return d;
    }(f);
    m.PreRenderState = v;
    var u = function(a) {
      function b() {
        a.apply(this, arguments);
        this.isDirty = !0;
      }
      __extends(b, a);
      b.prototype.start = function(a, b) {
        this._dirtyRegion = b;
        var d = v.allocate();
        d.matrix.setIdentity();
        a.visit(this, d);
        d.free();
      };
      b.prototype.visitGroup = function(a, b) {
        var d = a.getChildren();
        this.visitNode(a, b);
        for (var c = 0;c < d.length;c++) {
          var g = d[c], f = b.transform(g.getTransform());
          g.visit(this, f);
          f.free();
        }
      };
      b.prototype.visitNode = function(a, b) {
        a.hasFlags(4096) && (this.isDirty = !0);
        a.toggleFlags(4096, !1);
        a.depth = b.depth++;
      };
      return b;
    }(n);
    m.PreRenderVisitor = u;
    f = function(a) {
      function b(d) {
        a.call(this);
        this.writer = d;
      }
      __extends(b, a);
      b.prototype.visitNode = function(a, b) {
      };
      b.prototype.visitShape = function(a, b) {
        this.writer.writeLn(a.toString());
        this.visitNode(a, b);
      };
      b.prototype.visitGroup = function(a, b) {
        this.visitNode(a, b);
        var d = a.getChildren();
        this.writer.enter(a.toString() + " " + d.length);
        for (var c = 0;c < d.length;c++) {
          d[c].visit(this, b);
        }
        this.writer.outdent();
      };
      b.prototype.visitStage = function(a, b) {
        this.visitGroup(a, b);
      };
      return b;
    }(n);
    m.TracingNodeVisitor = f;
    var q = function() {
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
          for (var b = this._eventListeners, c = 0;c < b.length;c++) {
            var f = b[c];
            f.type === a && f.listener(this, a);
          }
        }
      };
      a.prototype.addEventListener = function(a, b) {
        this._eventListeners || (this._eventListeners = []);
        this._eventListeners.push({type:a, listener:b});
      };
      a.prototype.removeEventListener = function(a, b) {
        for (var c = this._eventListeners, f = 0;f < c.length;f++) {
          var g = c[f];
          if (g.type === a && g.listener === b) {
            c.splice(f, 1);
            break;
          }
        }
      };
      Object.defineProperty(a.prototype, "properties", {get:function() {
        return this._properties || (this._properties = {});
      }, enumerable:!0, configurable:!0});
      a.prototype.reset = function() {
        this._flags = c.Default;
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
          var c = this.getTransform().getConcatenatedMatrix();
          a ? (a = a.getTransform().getInvertedConcatenatedMatrix(!0), a.preMultiply(c), a.transformRectangleAABB(b), a.free()) : c.transformRectangleAABB(b);
        }
        return b;
      };
      a.prototype._markCurrentBoundsAsDirtyRegion = function() {
      };
      a.prototype.getStage = function(a) {
        void 0 === a && (a = !0);
        for (var b = this._parent;b;) {
          if (b.isType(13)) {
            var c = b;
            if (a) {
              if (c.dirtyRegion) {
                return c;
              }
            } else {
              return c;
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
      a.prototype.toggleFlags = function(a, b) {
        this._flags = b ? this._flags | a : this._flags & ~a;
      };
      a.prototype._propagateFlagsUp = function(a) {
        if (0 !== a && !this.hasFlags(a)) {
          this.hasFlags(2048) || (a &= -8193);
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
      a._getAncestors = function(b, c) {
        var f = a._path;
        for (f.length = 0;b && b !== c;) {
          f.push(b), b = b._parent;
        }
        return f;
      };
      a.prototype._findClosestAncestor = function(a, b) {
        for (var c = this;c;) {
          if (c.hasFlags(a) === b) {
            return c;
          }
          c = c._parent;
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
        null === this._transform && (this._transform = new l(this));
        return this._transform;
      };
      a.prototype.getLayer = function() {
        null === this._layer && (this._layer = new t(this));
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
            e.Debug.unexpectedCase();
        }
      };
      a.prototype.invalidate = function() {
        this._propagateFlagsUp(c.UpOnInvalidate);
      };
      a.prototype.toString = function(a) {
        void 0 === a && (a = !1);
        var b = h[this._type] + " " + this._id;
        a && (b += " " + this._bounds.toString());
        return b;
      };
      a._path = [];
      a._nextId = 0;
      return a;
    }();
    m.Node = q;
    var b = function(a) {
      function b() {
        a.call(this);
        this._type = 5;
        this._children = [];
      }
      __extends(b, a);
      b.prototype.getChildren = function(a) {
        void 0 === a && (a = !1);
        return a ? this._children.slice(0) : this._children;
      };
      b.prototype.childAt = function(a) {
        return this._children[a];
      };
      Object.defineProperty(b.prototype, "child", {get:function() {
        return this._children[0];
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(b.prototype, "groupChild", {get:function() {
        return this._children[0];
      }, enumerable:!0, configurable:!0});
      b.prototype.addChild = function(a) {
        a._parent && a._parent.removeChildAt(a._index);
        a._parent = this;
        a._index = this._children.length;
        this._children.push(a);
        this._propagateFlagsUp(c.UpOnAddedOrRemoved);
        a._propagateFlagsDown(c.DownOnAddedOrRemoved);
      };
      b.prototype.removeChildAt = function(a) {
        var b = this._children[a];
        this._children.splice(a, 1);
        b._index = -1;
        b._parent = null;
        this._propagateFlagsUp(c.UpOnAddedOrRemoved);
        b._propagateFlagsDown(c.DownOnAddedOrRemoved);
      };
      b.prototype.clearChildren = function() {
        for (var a = 0;a < this._children.length;a++) {
          var b = this._children[a];
          b && (b._index = -1, b._parent = null, b._propagateFlagsDown(c.DownOnAddedOrRemoved));
        }
        this._children.length = 0;
        this._propagateFlagsUp(c.UpOnAddedOrRemoved);
      };
      b.prototype._propagateFlagsDown = function(a) {
        if (!this.hasFlags(a)) {
          this.setFlags(a);
          for (var b = this._children, d = 0;d < b.length;d++) {
            b[d]._propagateFlagsDown(a);
          }
        }
      };
      b.prototype.getBounds = function(a) {
        void 0 === a && (a = !1);
        var b = this._bounds || (this._bounds = r.createEmpty());
        if (this.hasFlags(8192)) {
          b.setEmpty();
          for (var d = this._children, c = r.allocate(), f = 0;f < d.length;f++) {
            var g = d[f];
            c.set(g.getBounds());
            g.getTransformMatrix().transformRectangleAABB(c);
            b.union(c);
          }
          c.free();
          this.removeFlags(8192);
        }
        return a ? b.clone() : b;
      };
      b.prototype.getLayerBounds = function(a) {
        if (!a) {
          return this.getBounds();
        }
        for (var b = r.createEmpty(), d = this._children, c = r.allocate(), f = 0;f < d.length;f++) {
          var g = d[f];
          c.set(g.getLayerBounds(a));
          g.getTransformMatrix().transformRectangleAABB(c);
          b.union(c);
        }
        c.free();
        a && this._layer && this._layer.expandBounds(b);
        return b;
      };
      return b;
    }(q);
    m.Group = b;
    var l = function() {
      function b(d) {
        this._node = d;
        this._matrix = a.createIdentity();
        this._colorMatrix = m.ColorMatrix.createIdentity();
        this._concatenatedMatrix = a.createIdentity();
        this._invertedConcatenatedMatrix = a.createIdentity();
        this._concatenatedColorMatrix = m.ColorMatrix.createIdentity();
      }
      b.prototype.setMatrix = function(a) {
        this._matrix.isEqual(a) || (this._matrix.set(a), this._node._propagateFlagsUp(c.UpOnMoved), this._node._propagateFlagsDown(c.DownOnMoved));
      };
      b.prototype.setColorMatrix = function(a) {
        this._colorMatrix.set(a);
        this._node._propagateFlagsUp(c.UpOnColorMatrixChanged);
        this._node._propagateFlagsDown(c.DownOnColorMatrixChanged);
      };
      b.prototype.getMatrix = function(a) {
        void 0 === a && (a = !1);
        return a ? this._matrix.clone() : this._matrix;
      };
      b.prototype.hasColorMatrix = function() {
        return null !== this._colorMatrix;
      };
      b.prototype.getColorMatrix = function(a) {
        void 0 === a && (a = !1);
        null === this._colorMatrix && (this._colorMatrix = m.ColorMatrix.createIdentity());
        return a ? this._colorMatrix.clone() : this._colorMatrix;
      };
      b.prototype.getConcatenatedMatrix = function(b) {
        void 0 === b && (b = !1);
        if (this._node.hasFlags(16384)) {
          for (var c = this._node._findClosestAncestor(16384, !1), f = q._getAncestors(this._node, c), g = c ? c.getTransform()._concatenatedMatrix.clone() : a.createIdentity(), e = f.length - 1;0 <= e;e--) {
            var c = f[e], h = c.getTransform();
            g.preMultiply(h._matrix);
            h._concatenatedMatrix.set(g);
            c.removeFlags(16384);
          }
        }
        return b ? this._concatenatedMatrix.clone() : this._concatenatedMatrix;
      };
      b.prototype.getInvertedConcatenatedMatrix = function(a) {
        void 0 === a && (a = !1);
        this._node.hasFlags(32768) && (this.getConcatenatedMatrix().inverse(this._invertedConcatenatedMatrix), this._node.removeFlags(32768));
        return a ? this._invertedConcatenatedMatrix.clone() : this._invertedConcatenatedMatrix;
      };
      b.prototype.toString = function() {
        return this._matrix.toString();
      };
      return b;
    }();
    m.Transform = l;
    var t = function() {
      function a(b) {
        this._node = b;
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
        return k[this._blendMode];
      };
      a.prototype.expandBounds = function(a) {
        var b = this._filters;
        if (b) {
          for (var c = 0;c < b.length;c++) {
            b[c].expandBounds(a);
          }
        }
      };
      return a;
    }();
    m.Layer = t;
    f = function(a) {
      function b(d) {
        a.call(this);
        this._source = d;
        this._type = 3;
        this._ratio = 0;
      }
      __extends(b, a);
      b.prototype.getBounds = function(a) {
        void 0 === a && (a = !1);
        var b = this._bounds || (this._bounds = r.createEmpty());
        this.hasFlags(8192) && (b.set(this._source.getBounds()), this.removeFlags(8192));
        return a ? b.clone() : b;
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
    }(q);
    m.Shape = f;
    f = function() {
      return function() {
        this.debug = !1;
        this.paintRenderable = !0;
        this.paintViewport = this.paintFlashing = this.paintDirtyRegion = this.paintBounds = !1;
        this.clear = !0;
      };
    }();
    m.RendererOptions = f;
    (function(a) {
      a[a.Canvas2D = 0] = "Canvas2D";
      a[a.WebGL = 1] = "WebGL";
      a[a.Both = 2] = "Both";
      a[a.DOM = 3] = "DOM";
      a[a.SVG = 4] = "SVG";
    })(m.Backend || (m.Backend = {}));
    n = function(a) {
      function b(d, c, f) {
        a.call(this);
        this._container = d;
        this._stage = c;
        this._options = f;
        this._viewport = r.createSquare(1024);
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
      b.prototype.screenShot = function(a, b, d) {
        throw void 0;
      };
      return b;
    }(n);
    m.Renderer = n;
    n = function(c) {
      function d(a, f, e) {
        void 0 === e && (e = !1);
        c.call(this);
        this._preVisitor = new u;
        this._flags &= -2049;
        this._type = 13;
        this._scaleMode = d.DEFAULT_SCALE;
        this._align = d.DEFAULT_ALIGN;
        this._content = new b;
        this._content._flags &= -2049;
        this.addChild(this._content);
        this.setFlags(4096);
        this.setBounds(new r(0, 0, a, f));
        e ? (this._dirtyRegion = new w(a, f), this._dirtyRegion.addDirtyRectangle(new r(0, 0, a, f))) : this._dirtyRegion = null;
        this._updateContentMatrix();
      }
      __extends(d, c);
      Object.defineProperty(d.prototype, "dirtyRegion", {get:function() {
        return this._dirtyRegion;
      }, enumerable:!0, configurable:!0});
      d.prototype.setBounds = function(a) {
        c.prototype.setBounds.call(this, a);
        this._updateContentMatrix();
        this._dispatchEvent(1);
        this._dirtyRegion && (this._dirtyRegion = new w(a.w, a.h), this._dirtyRegion.addDirtyRectangle(a));
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
          this._content.getTransform().setMatrix(new a(1, 0, 0, 1, 0, 0));
        } else {
          var b = this.getBounds(), c = this._content.getBounds(), f = b.w / c.w, e = b.h / c.h;
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
          var g;
          g = this._align & 4 ? 0 : this._align & 8 ? b.w - c.w * f : (b.w - c.w * f) / 2;
          b = this._align & 1 ? 0 : this._align & 2 ? b.h - c.h * e : (b.h - c.h * e) / 2;
          this._content.getTransform().setMatrix(new a(f, 0, 0, e, g, b));
        }
      };
      d.DEFAULT_SCALE = 4;
      d.DEFAULT_ALIGN = 5;
      return d;
    }(b);
    m.Stage = n;
  })(e.GFX || (e.GFX = {}));
})(Shumway || (Shumway = {}));
(function(e) {
  (function(m) {
    function r(a, b, c) {
      return a + (b - a) * c;
    }
    function a(a, b, c) {
      return r(a >> 24 & 255, b >> 24 & 255, c) << 24 | r(a >> 16 & 255, b >> 16 & 255, c) << 16 | r(a >> 8 & 255, b >> 8 & 255, c) << 8 | r(a & 255, b & 255, c);
    }
    function w(a, b, c) {
      a = a.measureText(b).width | 0;
      0 < c && (a += b.length * c);
      return a;
    }
    var k = m.Geometry.Point, c = m.Geometry.Rectangle, h = m.Geometry.Matrix, n = e.ArrayUtilities.indexOf, f = function(a) {
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
        n(this._parents, a);
        this._parents.push(a);
      };
      b.prototype.willRender = function() {
        for (var a = this._parents, b = 0;b < a.length;b++) {
          for (var d = a[b];d;) {
            if (d.isType(13)) {
              return !0;
            }
            if (!d.hasFlags(1)) {
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
        this.setFlags(4096);
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
        n(this._invalidateEventListeners, a);
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
      b.prototype.render = function(a, b, d, c, f) {
      };
      return b;
    }(m.Node);
    m.Renderable = f;
    var v = function(a) {
      function b(d, c) {
        a.call(this);
        this.setBounds(d);
        this.render = c;
      }
      __extends(b, a);
      return b;
    }(f);
    m.CustomRenderable = v;
    (function(a) {
      a[a.Idle = 1] = "Idle";
      a[a.Playing = 2] = "Playing";
      a[a.Paused = 3] = "Paused";
      a[a.Ended = 4] = "Ended";
    })(m.RenderableVideoState || (m.RenderableVideoState = {}));
    v = function(a) {
      function b(f, e) {
        a.call(this);
        this._flags = 4352;
        this._lastPausedTime = this._lastTimeInvalidated = 0;
        this._pauseHappening = this._seekHappening = !1;
        this._isDOMElement = !0;
        this.setBounds(new c(0, 0, 1, 1));
        this._assetId = f;
        this._eventSerializer = e;
        var h = document.createElement("video"), k = this._handleVideoEvent.bind(this);
        h.preload = "metadata";
        h.addEventListener("play", k);
        h.addEventListener("pause", k);
        h.addEventListener("ended", k);
        h.addEventListener("loadeddata", k);
        h.addEventListener("progress", k);
        h.addEventListener("suspend", k);
        h.addEventListener("loadedmetadata", k);
        h.addEventListener("error", k);
        h.addEventListener("seeking", k);
        h.addEventListener("seeked", k);
        h.addEventListener("canplay", k);
        h.style.position = "absolute";
        this._video = h;
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
            var c = -1;
            if (d.buffered) {
              for (var f = 0;f < d.buffered.length;f++) {
                c = Math.max(c, d.buffered.end(f));
              }
            } else {
              c = d.duration;
            }
            return Math.round(500 * c);
          case 8:
            return d ? Math.round(500 * d.duration) : 0;
        }
      };
      b.prototype.checkForUpdate = function() {
        this._lastTimeInvalidated !== this._video.currentTime && (this._isDOMElement || this.invalidate());
        this._lastTimeInvalidated = this._video.currentTime;
      };
      b.checkForVideoUpdates = function() {
        for (var a = b._renderableVideos, c = 0;c < a.length;c++) {
          var f = a[c];
          f.willRender() ? (f._video.parentElement || f.invalidate(), f._video.style.zIndex = f.parents[0].depth + "") : f._video.parentElement && f._dispatchEvent(2);
          a[c].checkForUpdate();
        }
      };
      b.prototype.render = function(a, b, d) {
        (b = this._video) && 0 < b.videoWidth && a.drawImage(b, 0, 0, b.videoWidth, b.videoHeight, 0, 0, this._bounds.w, this._bounds.h);
      };
      b._renderableVideos = [];
      return b;
    }(f);
    m.RenderableVideo = v;
    v = function(a) {
      function b(d, c) {
        a.call(this);
        this._flags = 4352;
        this.properties = {};
        this.setBounds(c);
        d instanceof HTMLCanvasElement ? this._initializeSourceCanvas(d) : this._sourceImage = d;
      }
      __extends(b, a);
      b.FromDataBuffer = function(a, c, f) {
        var e = document.createElement("canvas");
        e.width = f.w;
        e.height = f.h;
        f = new b(e, f);
        f.updateFromDataBuffer(a, c);
        return f;
      };
      b.FromNode = function(a, c, f, e, g) {
        var h = document.createElement("canvas"), k = a.getBounds();
        h.width = k.w;
        h.height = k.h;
        h = new b(h, k);
        h.drawNode(a, c, f, e, g);
        return h;
      };
      b.FromImage = function(a, f, e) {
        return new b(a, new c(0, 0, f, e));
      };
      b.prototype.updateFromDataBuffer = function(a, b) {
        if (m.imageUpdateOption.value) {
          var d = b.buffer;
          if (4 !== a && 5 !== a && 6 !== a) {
            var c = this._bounds, f = this._imageData;
            f && f.width === c.w && f.height === c.h || (f = this._imageData = this._context.createImageData(c.w, c.h));
            m.imageConvertOption.value && (d = new Int32Array(d), c = new Int32Array(f.data.buffer), e.ColorUtilities.convertImage(a, 3, d, c));
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
      b.prototype.drawNode = function(a, b, d, c, f) {
        d = m.Canvas2D;
        c = this.getBounds();
        (new d.Canvas2DRenderer(this._canvas, null)).renderNode(a, f || c, b);
      };
      b.prototype.mask = function(a) {
        for (var b = this.imageData, d = new Int32Array(b.data.buffer), c = e.ColorUtilities.getUnpremultiplyTable(), f = 0;f < a.length;f++) {
          var g = a[f];
          if (0 === g) {
            d[f] = 0;
          } else {
            if (255 !== g) {
              var h = d[f], k = h >> 0 & 255, l = h >> 8 & 255, h = h >> 16 & 255, q = g << 8, k = c[q + Math.min(k, g)], l = c[q + Math.min(l, g)], h = c[q + Math.min(h, g)];
              d[f] = g << 24 | h << 16 | l << 8 | k;
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
    }(f);
    m.RenderableBitmap = v;
    (function(a) {
      a[a.Fill = 0] = "Fill";
      a[a.Stroke = 1] = "Stroke";
      a[a.StrokeFill = 2] = "StrokeFill";
    })(m.PathType || (m.PathType = {}));
    var u = function() {
      return function(a, b, c, f) {
        this.type = a;
        this.style = b;
        this.smoothImage = c;
        this.strokeProperties = f;
        this.path = new Path2D;
      };
    }();
    m.StyledPath = u;
    var q = function() {
      return function(a, b, c, f, e) {
        this.thickness = a;
        this.scaleMode = b;
        this.capsStyle = c;
        this.jointsStyle = f;
        this.miterLimit = e;
      };
    }();
    m.StrokeProperties = q;
    var b = function(a) {
      function b(d, c, f, e) {
        a.call(this);
        this._flags = 5632;
        this.properties = {};
        this.setBounds(e);
        this._id = d;
        this._pathData = c;
        this._textures = f;
        f.length && this.setFlags(256);
      }
      __extends(b, a);
      b.prototype.update = function(a, b, d) {
        this.setBounds(d);
        this._pathData = a;
        this._paths = null;
        this._textures = b;
        this.setFlags(256);
        this.invalidate();
      };
      b.prototype.render = function(a, b, d, c, f) {
        void 0 === c && (c = null);
        void 0 === f && (f = !1);
        a.fillStyle = a.strokeStyle = "transparent";
        b = this._deserializePaths(this._pathData, a, b);
        for (d = 0;d < b.length;d++) {
          var e = b[d];
          a.mozImageSmoothingEnabled = a.msImageSmoothingEnabled = a.imageSmoothingEnabled = e.smoothImage;
          if (0 === e.type) {
            c ? c.addPath(e.path, a.currentTransform) : (a.fillStyle = f ? "#000000" : e.style, a.fill(e.path, "evenodd"), a.fillStyle = "transparent");
          } else {
            if (!c && !f) {
              a.strokeStyle = e.style;
              var g = 1;
              e.strokeProperties && (g = e.strokeProperties.scaleMode, a.lineWidth = e.strokeProperties.thickness, a.lineCap = e.strokeProperties.capsStyle, a.lineJoin = e.strokeProperties.jointsStyle, a.miterLimit = e.strokeProperties.miterLimit);
              var h = a.lineWidth;
              (h = 1 === h || 3 === h) && a.translate(.5, .5);
              a.flashStroke(e.path, g);
              h && a.translate(-.5, -.5);
              a.strokeStyle = "transparent";
            }
          }
        }
      };
      b.prototype._deserializePaths = function(a, c, f) {
        if (this._paths) {
          return this._paths;
        }
        f = this._paths = [];
        var g = null, h = null, k = 0, l = 0, n, u, v = !1, m = 0, t = 0, r = a.commands, w = a.coordinates, B = a.styles, z = B.position = 0;
        a = a.commandsPosition;
        for (var C = 0;C < a;C++) {
          switch(r[C]) {
            case 9:
              v && g && (g.lineTo(m, t), h && h.lineTo(m, t));
              v = !0;
              k = m = w[z++] / 20;
              l = t = w[z++] / 20;
              g && g.moveTo(k, l);
              h && h.moveTo(k, l);
              break;
            case 10:
              k = w[z++] / 20;
              l = w[z++] / 20;
              g && g.lineTo(k, l);
              h && h.lineTo(k, l);
              break;
            case 11:
              n = w[z++] / 20;
              u = w[z++] / 20;
              k = w[z++] / 20;
              l = w[z++] / 20;
              g && g.quadraticCurveTo(n, u, k, l);
              h && h.quadraticCurveTo(n, u, k, l);
              break;
            case 12:
              n = w[z++] / 20;
              u = w[z++] / 20;
              var E = w[z++] / 20, A = w[z++] / 20, k = w[z++] / 20, l = w[z++] / 20;
              g && g.bezierCurveTo(n, u, E, A, k, l);
              h && h.bezierCurveTo(n, u, E, A, k, l);
              break;
            case 1:
              g = this._createPath(0, e.ColorUtilities.rgbaToCSSStyle(B.readUnsignedInt()), !1, null, k, l);
              break;
            case 3:
              n = this._readBitmap(B, c);
              g = this._createPath(0, n.style, n.smoothImage, null, k, l);
              break;
            case 2:
              g = this._createPath(0, this._readGradient(B, c), !1, null, k, l);
              break;
            case 4:
              g = null;
              break;
            case 5:
              h = e.ColorUtilities.rgbaToCSSStyle(B.readUnsignedInt());
              B.position += 1;
              n = B.readByte();
              u = b.LINE_CAPS_STYLES[B.readByte()];
              E = b.LINE_JOINTS_STYLES[B.readByte()];
              n = new q(w[z++] / 20, n, u, E, B.readByte());
              h = this._createPath(1, h, !1, n, k, l);
              break;
            case 6:
              h = this._createPath(2, this._readGradient(B, c), !1, null, k, l);
              break;
            case 7:
              n = this._readBitmap(B, c);
              h = this._createPath(2, n.style, n.smoothImage, null, k, l);
              break;
            case 8:
              h = null;
          }
        }
        v && g && (g.lineTo(m, t), h && h.lineTo(m, t));
        this._pathData = null;
        return f;
      };
      b.prototype._createPath = function(a, b, d, c, f, e) {
        a = new u(a, b, d, c);
        this._paths.push(a);
        a.path.moveTo(f, e);
        return a.path;
      };
      b.prototype._readMatrix = function(a) {
        return new h(a.readFloat(), a.readFloat(), a.readFloat(), a.readFloat(), a.readFloat(), a.readFloat());
      };
      b.prototype._readGradient = function(a, b) {
        var d = a.readUnsignedByte(), c = 2 * a.readShort() / 255, f = this._readMatrix(a), d = 16 === d ? b.createLinearGradient(-1, 0, 1, 0) : b.createRadialGradient(c, 0, 0, 0, 0, 1);
        d.setTransform && d.setTransform(f.toSVGMatrix());
        f = a.readUnsignedByte();
        for (c = 0;c < f;c++) {
          var g = a.readUnsignedByte() / 255, h = e.ColorUtilities.rgbaToCSSStyle(a.readUnsignedInt());
          d.addColorStop(g, h);
        }
        a.position += 2;
        return d;
      };
      b.prototype._readBitmap = function(a, b) {
        var d = a.readUnsignedInt(), c = this._readMatrix(a), f = a.readBoolean() ? "repeat" : "no-repeat", e = a.readBoolean();
        (d = this._textures[d]) ? (f = b.createPattern(d.renderSource, f), f.setTransform(c.toSVGMatrix())) : f = null;
        return {style:f, smoothImage:e};
      };
      b.prototype._renderFallback = function(a) {
        this.fillStyle || (this.fillStyle = e.ColorStyle.randomStyle());
        var b = this._bounds;
        a.save();
        a.beginPath();
        a.lineWidth = 2;
        a.fillStyle = this.fillStyle;
        a.fillRect(b.x, b.y, b.w, b.h);
        a.restore();
      };
      b.LINE_CAPS_STYLES = ["round", "butt", "square"];
      b.LINE_JOINTS_STYLES = ["round", "bevel", "miter"];
      return b;
    }(f);
    m.RenderableShape = b;
    v = function(c) {
      function d() {
        c.apply(this, arguments);
        this._flags = 5888;
        this._morphPaths = Object.create(null);
      }
      __extends(d, c);
      d.prototype._deserializePaths = function(d, c, f) {
        if (this._morphPaths[f]) {
          return this._morphPaths[f];
        }
        var g = this._morphPaths[f] = [], h = null, k = null, l = 0, n = 0, u, v, m = !1, t = 0, w = 0, H = d.commands, B = d.coordinates, z = d.morphCoordinates, C = d.styles, E = d.morphStyles;
        C.position = 0;
        var A = E.position = 0;
        d = d.commandsPosition;
        for (var D = 0;D < d;D++) {
          switch(H[D]) {
            case 9:
              m && h && (h.lineTo(t, w), k && k.lineTo(t, w));
              m = !0;
              l = t = r(B[A], z[A++], f) / 20;
              n = w = r(B[A], z[A++], f) / 20;
              h && h.moveTo(l, n);
              k && k.moveTo(l, n);
              break;
            case 10:
              l = r(B[A], z[A++], f) / 20;
              n = r(B[A], z[A++], f) / 20;
              h && h.lineTo(l, n);
              k && k.lineTo(l, n);
              break;
            case 11:
              u = r(B[A], z[A++], f) / 20;
              v = r(B[A], z[A++], f) / 20;
              l = r(B[A], z[A++], f) / 20;
              n = r(B[A], z[A++], f) / 20;
              h && h.quadraticCurveTo(u, v, l, n);
              k && k.quadraticCurveTo(u, v, l, n);
              break;
            case 12:
              u = r(B[A], z[A++], f) / 20;
              v = r(B[A], z[A++], f) / 20;
              var F = r(B[A], z[A++], f) / 20, G = r(B[A], z[A++], f) / 20, l = r(B[A], z[A++], f) / 20, n = r(B[A], z[A++], f) / 20;
              h && h.bezierCurveTo(u, v, F, G, l, n);
              k && k.bezierCurveTo(u, v, F, G, l, n);
              break;
            case 1:
              h = this._createMorphPath(0, f, e.ColorUtilities.rgbaToCSSStyle(a(C.readUnsignedInt(), E.readUnsignedInt(), f)), !1, null, l, n);
              break;
            case 3:
              u = this._readMorphBitmap(C, E, f, c);
              h = this._createMorphPath(0, f, u.style, u.smoothImage, null, l, n);
              break;
            case 2:
              u = this._readMorphGradient(C, E, f, c);
              h = this._createMorphPath(0, f, u, !1, null, l, n);
              break;
            case 4:
              h = null;
              break;
            case 5:
              u = r(B[A], z[A++], f) / 20;
              k = e.ColorUtilities.rgbaToCSSStyle(a(C.readUnsignedInt(), E.readUnsignedInt(), f));
              C.position += 1;
              v = C.readByte();
              F = b.LINE_CAPS_STYLES[C.readByte()];
              G = b.LINE_JOINTS_STYLES[C.readByte()];
              u = new q(u, v, F, G, C.readByte());
              k = this._createMorphPath(1, f, k, !1, u, l, n);
              break;
            case 6:
              u = this._readMorphGradient(C, E, f, c);
              k = this._createMorphPath(2, f, u, !1, null, l, n);
              break;
            case 7:
              u = this._readMorphBitmap(C, E, f, c);
              k = this._createMorphPath(2, f, u.style, u.smoothImage, null, l, n);
              break;
            case 8:
              k = null;
          }
        }
        m && h && (h.lineTo(t, w), k && k.lineTo(t, w));
        return g;
      };
      d.prototype._createMorphPath = function(a, b, d, c, f, e, g) {
        a = new u(a, d, c, f);
        this._morphPaths[b].push(a);
        a.path.moveTo(e, g);
        return a.path;
      };
      d.prototype._readMorphMatrix = function(a, b, d) {
        return new h(r(a.readFloat(), b.readFloat(), d), r(a.readFloat(), b.readFloat(), d), r(a.readFloat(), b.readFloat(), d), r(a.readFloat(), b.readFloat(), d), r(a.readFloat(), b.readFloat(), d), r(a.readFloat(), b.readFloat(), d));
      };
      d.prototype._readMorphGradient = function(b, d, c, f) {
        var g = b.readUnsignedByte(), h = 2 * b.readShort() / 255, k = this._readMorphMatrix(b, d, c);
        f = 16 === g ? f.createLinearGradient(-1, 0, 1, 0) : f.createRadialGradient(h, 0, 0, 0, 0, 1);
        f.setTransform && f.setTransform(k.toSVGMatrix());
        k = b.readUnsignedByte();
        for (g = 0;g < k;g++) {
          var h = r(b.readUnsignedByte() / 255, d.readUnsignedByte() / 255, c), l = a(b.readUnsignedInt(), d.readUnsignedInt(), c), l = e.ColorUtilities.rgbaToCSSStyle(l);
          f.addColorStop(h, l);
        }
        b.position += 2;
        return f;
      };
      d.prototype._readMorphBitmap = function(a, b, d, c) {
        var f = a.readUnsignedInt();
        b = this._readMorphMatrix(a, b, d);
        d = a.readBoolean() ? "repeat" : "no-repeat";
        a = a.readBoolean();
        c = c.createPattern(this._textures[f]._canvas, d);
        c.setTransform(b.toSVGMatrix());
        return {style:c, smoothImage:a};
      };
      return d;
    }(b);
    m.RenderableMorphShape = v;
    var l = function() {
      function a() {
        this.align = this.leading = this.descent = this.ascent = this.width = this.y = this.x = 0;
        this.runs = [];
      }
      a._getMeasureContext = function() {
        a._measureContext || (a._measureContext = document.createElement("canvas").getContext("2d"));
        return a._measureContext;
      };
      a.prototype.addRun = function(b, c, f, e, h) {
        if (f) {
          var k = a._getMeasureContext();
          k.font = b;
          k = w(k, f, e);
          this.runs.push(new t(b, c, f, k, e, h));
          this.width += k;
        }
      };
      a.prototype.wrap = function(b) {
        var c = [this], f = this.runs, e = this;
        e.width = 0;
        e.runs = [];
        for (var h = a._getMeasureContext(), k = 0;k < f.length;k++) {
          var l = f[k], n = l.text;
          l.text = "";
          l.width = 0;
          h.font = l.font;
          for (var q = b, u = n.split(/[\s.-]/), v = 0, m = 0;m < u.length;m++) {
            var r = u[m], L = n.substr(v, r.length + 1), H = l.letterSpacing, B = w(h, L, H);
            if (B > q) {
              do {
                if (l.text && (e.runs.push(l), e.width += l.width, l = new t(l.font, l.fillStyle, "", 0, l.letterSpacing, l.underline), q = new a, q.y = e.y + e.descent + e.leading + e.ascent | 0, q.ascent = e.ascent, q.descent = e.descent, q.leading = e.leading, q.align = e.align, c.push(q), e = q), q = b - B, 0 > q) {
                  for (var z = L.length, C = L;1 < z && !(z--, C = L.substr(0, z), B = w(h, C, H), B <= b);) {
                  }
                  l.text = C;
                  l.width = B;
                  L = L.substr(z);
                  B = w(h, L, H);
                }
              } while (L && 0 > q);
            } else {
              q -= B;
            }
            l.text += L;
            l.width += B;
            v += r.length + 1;
          }
          e.runs.push(l);
          e.width += l.width;
        }
        return c;
      };
      a.prototype.toString = function() {
        return "TextLine {x: " + this.x + ", y: " + this.y + ", width: " + this.width + ", height: " + (this.ascent + this.descent + this.leading) + "}";
      };
      return a;
    }();
    m.TextLine = l;
    var t = function() {
      return function(a, b, c, f, e, h) {
        void 0 === a && (a = "");
        void 0 === b && (b = "");
        void 0 === c && (c = "");
        void 0 === f && (f = 0);
        void 0 === e && (e = 0);
        void 0 === h && (h = !1);
        this.font = a;
        this.fillStyle = b;
        this.text = c;
        this.width = f;
        this.letterSpacing = e;
        this.underline = h;
      };
    }();
    m.TextRun = t;
    v = function(a) {
      function b(c) {
        a.call(this);
        this._flags = 4352;
        this.properties = {};
        this._textBounds = c.clone();
        this._textRunData = null;
        this._plainText = "";
        this._borderColor = this._backgroundColor = 0;
        this._matrix = h.createIdentity();
        this._coords = null;
        this._scrollV = 1;
        this._scrollH = 0;
        this.textRect = c.clone();
        this.lines = [];
        this.setBounds(c);
      }
      __extends(b, a);
      b.prototype.setBounds = function(b) {
        a.prototype.setBounds.call(this, b);
        this._textBounds.set(b);
        this.textRect.setElements(b.x + 2, b.y + 2, b.w - 2, b.h - 2);
      };
      b.prototype.setContent = function(a, b, c, d) {
        this._textRunData = b;
        this._plainText = a;
        this._matrix.set(c);
        this._coords = d;
        this.lines = [];
      };
      b.prototype.setStyle = function(a, b, c, d) {
        this._backgroundColor = a;
        this._borderColor = b;
        this._scrollV = c;
        this._scrollH = d;
      };
      b.prototype.reflow = function(a, b) {
        var c = this._textRunData;
        if (c) {
          for (var d = this._bounds, f = d.w - 4, g = this._plainText, h = this.lines, k = new l, q = 0, n = 0, u = 0, v = 0, m = -4294967295, t = -1;c.position < c.length;) {
            var r = c.readInt(), w = c.readInt(), C = c.readInt(), E = c.readUTF(), A = c.readInt(), D = c.readInt(), F = c.readInt();
            A > u && (u = A);
            D > v && (v = D);
            F > m && (m = F);
            A = c.readBoolean();
            D = "";
            c.readBoolean() && (D += "italic ");
            A && (D += "bold ");
            C = D + C + "px " + E + ", AdobeBlank";
            E = c.readInt();
            E = e.ColorUtilities.rgbToHex(E);
            A = c.readInt();
            -1 === t && (t = A);
            c.readBoolean();
            c.readInt();
            c.readInt();
            c.readInt();
            A = c.readInt();
            c.readInt();
            for (var D = c.readBoolean(), G = "", F = !1;!F;r++) {
              var F = r >= w - 1, K = g[r];
              if ("\r" !== K && "\n" !== K && (G += K, r < g.length - 1)) {
                continue;
              }
              k.addRun(C, E, G, A, D);
              if (k.runs.length) {
                h.length && (q += m);
                q += u;
                k.y = q | 0;
                q += v;
                k.ascent = u;
                k.descent = v;
                k.leading = m;
                k.align = t;
                if (b && k.width > f) {
                  for (k = k.wrap(f), G = 0;G < k.length;G++) {
                    var I = k[G], q = I.y + I.descent + I.leading;
                    h.push(I);
                    I.width > n && (n = I.width);
                  }
                } else {
                  h.push(k), k.width > n && (n = k.width);
                }
                k = new l;
              } else {
                q += u + v + m;
              }
              G = "";
              if (F) {
                v = u = 0;
                m = -4294967295;
                t = -1;
                break;
              }
              "\r" === K && "\n" === g[r + 1] && r++;
            }
            k.addRun(C, E, G, A, D);
          }
          c = g[g.length - 1];
          "\r" !== c && "\n" !== c || h.push(k);
          c = this.textRect;
          c.w = n;
          c.h = q;
          if (a) {
            if (!b) {
              f = n;
              n = d.w;
              switch(a) {
                case 1:
                  c.x = n - (f + 4) >> 1;
                  break;
                case 3:
                  c.x = n - (f + 4);
              }
              this._textBounds.setElements(c.x - 2, c.y - 2, c.w + 4, c.h + 4);
              d.w = f + 4;
            }
            d.x = c.x - 2;
            d.h = q + 4;
          } else {
            this._textBounds = d;
          }
          for (r = 0;r < h.length;r++) {
            if (d = h[r], d.width < f) {
              switch(d.align) {
                case 1:
                  d.x = f - d.width | 0;
                  break;
                case 2:
                  d.x = (f - d.width) / 2 | 0;
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
        this._backgroundColor && (a.fillStyle = e.ColorUtilities.rgbaToCSSStyle(this._backgroundColor), a.fillRect(c.x, c.y, c.w, c.h));
        if (this._borderColor) {
          a.strokeStyle = e.ColorUtilities.rgbaToCSSStyle(this._borderColor);
          a.lineCap = "square";
          a.lineWidth = 1;
          var f = b.absoluteBoundPoints, g = a.currentTransform;
          g ? (c = c.clone(), (new h(g.a, g.b, g.c, g.d, g.e, g.f)).transformRectangle(c, f), a.setTransform(1, 0, 0, 1, 0, 0)) : (f[0].x = c.x, f[0].y = c.y, f[1].x = c.x + c.w, f[1].y = c.y, f[2].x = c.x + c.w, f[2].y = c.y + c.h, f[3].x = c.x, f[3].y = c.y + c.h);
          b.roundBoundPoints(f);
          c = new Path2D;
          c.moveTo(f[0].x, f[0].y);
          c.lineTo(f[1].x, f[1].y);
          c.lineTo(f[2].x, f[2].y);
          c.lineTo(f[3].x, f[3].y);
          c.lineTo(f[0].x, f[0].y);
          a.stroke(c);
          g && a.setTransform(g.a, g.b, g.c, g.d, g.e, g.f);
        }
        this._coords ? this._renderChars(a) : this._renderLines(a);
        a.restore();
      };
      b.prototype._renderChars = function(a) {
        if (this._matrix) {
          var b = this._matrix;
          a.transform(b.a, b.b, b.c, b.d, b.tx, b.ty);
        }
        var b = this.lines, c = this._coords;
        c.position = 0;
        for (var d = "", f = "", e = 0;e < b.length;e++) {
          for (var g = b[e].runs, h = 0;h < g.length;h++) {
            var k = g[h];
            k.font !== d && (a.font = d = k.font);
            k.fillStyle !== f && (a.fillStyle = f = k.fillStyle);
            for (var k = k.text, l = 0;l < k.length;l++) {
              var q = c.readInt() / 20, n = c.readInt() / 20;
              a.fillText(k[l], q, n);
            }
          }
        }
      };
      b.prototype._renderLines = function(a) {
        var b = this._textBounds;
        a.beginPath();
        a.rect(b.x + 2, b.y + 2, b.w - 4, b.h - 4);
        a.clip();
        a.translate(b.x - this._scrollH + 2, b.y + 2);
        var c = this.lines, d = this._scrollV, f = 0, e = "", g = "";
        a.textAlign = "left";
        a.textBaseline = "alphabetic";
        for (var h = 0;h < c.length;h++) {
          var k = c[h], l = k.x, q = k.y;
          if (h + 1 < d) {
            f = q + k.descent + k.leading;
          } else {
            q -= f;
            if (h + 1 - d && q > b.h) {
              break;
            }
            for (var n = k.runs, u = 0;u < n.length;u++) {
              var v = n[u];
              v.font !== e && (a.font = e = v.font);
              v.fillStyle !== g && (a.fillStyle = g = v.fillStyle);
              v.underline && a.fillRect(l, q + k.descent / 2 | 0, v.width, 1);
              a.textAlign = "left";
              a.textBaseline = "alphabetic";
              if (0 < v.letterSpacing) {
                for (var m = v.text, t = 0;t < m.length;t++) {
                  a.fillText(m[t], l, q), l += w(a, m[t], v.letterSpacing);
                }
              } else {
                a.fillText(v.text, l, q), l += v.width;
              }
            }
          }
        }
      };
      b.absoluteBoundPoints = [new k(0, 0), new k(0, 0), new k(0, 0), new k(0, 0)];
      return b;
    }(f);
    m.RenderableText = v;
    f = function(a) {
      function b(d, f) {
        a.call(this);
        this._flags = 768;
        this.properties = {};
        this.setBounds(new c(0, 0, d, f));
      }
      __extends(b, a);
      Object.defineProperty(b.prototype, "text", {get:function() {
        return this._text;
      }, set:function(a) {
        this._text = a;
      }, enumerable:!0, configurable:!0});
      b.prototype.render = function(a, b, c) {
        a.save();
        a.textBaseline = "top";
        a.fillStyle = "white";
        a.fillText(this.text, 0, 0);
        a.restore();
      };
      return b;
    }(f);
    m.Label = f;
  })(e.GFX || (e.GFX = {}));
})(Shumway || (Shumway = {}));
(function(e) {
  (function(m) {
    function r(a, c, f, e, u) {
      c = k[c - 1];
      u && (u = c / 4, f -= u, e -= u);
      u = Math.ceil((1 > f ? 1 : f) / (c - 1E-9));
      c = Math.ceil((1 > e ? 1 : e) / (c - 1E-9));
      a.x -= u;
      a.w += 2 * u;
      a.y -= c;
      a.h += 2 * c;
    }
    var a = e.ColorUtilities.clampByte, w = function() {
      function a() {
      }
      a.prototype.expandBounds = function(a) {
      };
      return a;
    }();
    m.Filter = w;
    var k = [2, 1 / 1.05, 1 / 1.35, 1 / 1.55, 1 / 1.75, 1 / 1.9, .5, 1 / 2.1, 1 / 2.2, 1 / 2.3, .4, 1 / 3, 1 / 3, 1 / 3.5, 1 / 3.5], c = function(a) {
      function c(f, e, k) {
        a.call(this);
        this.blurX = f;
        this.blurY = e;
        this.quality = k;
      }
      __extends(c, a);
      c.prototype.expandBounds = function(a) {
        r(a, this.quality, this.blurX, this.blurY, !0);
      };
      return c;
    }(w);
    m.BlurFilter = c;
    c = function(a) {
      function c(f, e, k, q, b, l, n, g, d, p, m) {
        a.call(this);
        this.alpha = f;
        this.angle = e;
        this.blurX = k;
        this.blurY = q;
        this.color = b;
        this.distance = l;
        this.hideObject = n;
        this.inner = g;
        this.knockout = d;
        this.quality = p;
        this.strength = m;
      }
      __extends(c, a);
      c.prototype.expandBounds = function(a) {
        r(a, this.quality, this.blurX, this.blurY, !1);
        if (this.distance) {
          var c = this.angle * Math.PI / 180, e = Math.cos(c) * this.distance, h = Math.sin(c) * this.distance, c = a.x + (0 <= e ? 0 : Math.floor(e)), e = a.x + a.w + Math.ceil(Math.abs(e)), b = a.y + (0 <= h ? 0 : Math.floor(h)), h = a.y + a.h + Math.ceil(Math.abs(h));
          a.x = c;
          a.w = e - c;
          a.y = b;
          a.h = h - b;
        }
      };
      return c;
    }(w);
    m.DropshadowFilter = c;
    c = function(a) {
      function c(f, e, k, q, b, l, n, g) {
        a.call(this);
        this.alpha = f;
        this.blurX = e;
        this.blurY = k;
        this.color = q;
        this.inner = b;
        this.knockout = l;
        this.quality = n;
        this.strength = g;
      }
      __extends(c, a);
      c.prototype.expandBounds = function(a) {
        this.inner || r(a, this.quality, this.blurX, this.blurY, !1);
      };
      return c;
    }(w);
    m.GlowFilter = c;
    (function(a) {
      a[a.Unknown = 0] = "Unknown";
      a[a.Identity = 1] = "Identity";
    })(m.ColorMatrixType || (m.ColorMatrixType = {}));
    w = function(c) {
      function e(a) {
        c.call(this);
        this._data = new Float32Array(a);
        this._type = 0;
      }
      __extends(e, c);
      e.prototype.clone = function() {
        var a = new e(this._data);
        a._type = this._type;
        return a;
      };
      e.prototype.set = function(a) {
        this._data.set(a._data);
        this._type = a._type;
      };
      e.prototype.toWebGLMatrix = function() {
        return new Float32Array(this._data);
      };
      e.prototype.asWebGLMatrix = function() {
        return this._data.subarray(0, 16);
      };
      e.prototype.asWebGLVector = function() {
        return this._data.subarray(16, 20);
      };
      e.prototype.isIdentity = function() {
        if (this._type & 1) {
          return !0;
        }
        var a = this._data;
        return 1 == a[0] && 0 == a[1] && 0 == a[2] && 0 == a[3] && 0 == a[4] && 1 == a[5] && 0 == a[6] && 0 == a[7] && 0 == a[8] && 0 == a[9] && 1 == a[10] && 0 == a[11] && 0 == a[12] && 0 == a[13] && 0 == a[14] && 1 == a[15] && 0 == a[16] && 0 == a[17] && 0 == a[18] && 0 == a[19];
      };
      e.createIdentity = function() {
        var a = new e([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0]);
        a._type = 1;
        return a;
      };
      e.prototype.setMultipliersAndOffsets = function(a, c, e, h, b, k, n, g) {
        for (var d = this._data, p = 0;p < d.length;p++) {
          d[p] = 0;
        }
        d[0] = a;
        d[5] = c;
        d[10] = e;
        d[15] = h;
        d[16] = b / 255;
        d[17] = k / 255;
        d[18] = n / 255;
        d[19] = g / 255;
        this._type = 0;
      };
      e.prototype.transformRGBA = function(c) {
        var e = c >> 24 & 255, h = c >> 16 & 255, k = c >> 8 & 255, b = c & 255, l = this._data;
        c = a(e * l[0] + h * l[1] + k * l[2] + b * l[3] + 255 * l[16]);
        var n = a(e * l[4] + h * l[5] + k * l[6] + b * l[7] + 255 * l[17]), g = a(e * l[8] + h * l[9] + k * l[10] + b * l[11] + 255 * l[18]), e = a(e * l[12] + h * l[13] + k * l[14] + b * l[15] + 255 * l[19]);
        return c << 24 | n << 16 | g << 8 | e;
      };
      e.prototype.multiply = function(a) {
        if (!(a._type & 1)) {
          var c = this._data, e = a._data;
          a = c[0];
          var h = c[1], b = c[2], k = c[3], n = c[4], g = c[5], d = c[6], p = c[7], m = c[8], x = c[9], r = c[10], w = c[11], V = c[12], J = c[13], U = c[14], X = c[15], ha = c[16], ia = c[17], ja = c[18], L = c[19], H = e[0], B = e[1], z = e[2], C = e[3], E = e[4], A = e[5], D = e[6], F = e[7], G = e[8], K = e[9], I = e[10], M = e[11], N = e[12], O = e[13], P = e[14], Q = e[15], R = e[16], S = e[17], T = e[18], e = e[19];
          c[0] = a * H + n * B + m * z + V * C;
          c[1] = h * H + g * B + x * z + J * C;
          c[2] = b * H + d * B + r * z + U * C;
          c[3] = k * H + p * B + w * z + X * C;
          c[4] = a * E + n * A + m * D + V * F;
          c[5] = h * E + g * A + x * D + J * F;
          c[6] = b * E + d * A + r * D + U * F;
          c[7] = k * E + p * A + w * D + X * F;
          c[8] = a * G + n * K + m * I + V * M;
          c[9] = h * G + g * K + x * I + J * M;
          c[10] = b * G + d * K + r * I + U * M;
          c[11] = k * G + p * K + w * I + X * M;
          c[12] = a * N + n * O + m * P + V * Q;
          c[13] = h * N + g * O + x * P + J * Q;
          c[14] = b * N + d * O + r * P + U * Q;
          c[15] = k * N + p * O + w * P + X * Q;
          c[16] = a * R + n * S + m * T + V * e + ha;
          c[17] = h * R + g * S + x * T + J * e + ia;
          c[18] = b * R + d * S + r * T + U * e + ja;
          c[19] = k * R + p * S + w * T + X * e + L;
          this._type = 0;
        }
      };
      Object.defineProperty(e.prototype, "alphaMultiplier", {get:function() {
        return this._data[15];
      }, enumerable:!0, configurable:!0});
      e.prototype.hasOnlyAlphaMultiplier = function() {
        var a = this._data;
        return 1 == a[0] && 0 == a[1] && 0 == a[2] && 0 == a[3] && 0 == a[4] && 1 == a[5] && 0 == a[6] && 0 == a[7] && 0 == a[8] && 0 == a[9] && 1 == a[10] && 0 == a[11] && 0 == a[12] && 0 == a[13] && 0 == a[14] && 0 == a[16] && 0 == a[17] && 0 == a[18] && 0 == a[19];
      };
      e.prototype.equals = function(a) {
        if (!a) {
          return !1;
        }
        if (this._type === a._type && 1 === this._type) {
          return !0;
        }
        var c = this._data;
        a = a._data;
        for (var e = 0;20 > e;e++) {
          if (.001 < Math.abs(c[e] - a[e])) {
            return !1;
          }
        }
        return !0;
      };
      e.prototype.toSVGFilterMatrix = function() {
        var a = this._data;
        return [a[0], a[4], a[8], a[12], a[16], a[1], a[5], a[9], a[13], a[17], a[2], a[6], a[10], a[14], a[18], a[3], a[7], a[11], a[15], a[19]].join(" ");
      };
      return e;
    }(w);
    m.ColorMatrix = w;
  })(e.GFX || (e.GFX = {}));
})(Shumway || (Shumway = {}));
(function(e) {
  (function(e) {
    (function(e) {
      var a = CanvasRenderingContext2D.prototype.save, m = CanvasRenderingContext2D.prototype.clip, k = CanvasRenderingContext2D.prototype.fill, c = CanvasRenderingContext2D.prototype.stroke, h = CanvasRenderingContext2D.prototype.restore, n = CanvasRenderingContext2D.prototype.beginPath;
      e.notifyReleaseChanged = function() {
        CanvasRenderingContext2D.prototype.save = a;
        CanvasRenderingContext2D.prototype.clip = m;
        CanvasRenderingContext2D.prototype.fill = k;
        CanvasRenderingContext2D.prototype.stroke = c;
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
    })(e.Canvas2D || (e.Canvas2D = {}));
  })(e.GFX || (e.GFX = {}));
})(Shumway || (Shumway = {}));
(function(e) {
  (function(m) {
    (function(r) {
      function a(a, c) {
        var e = a / 2;
        switch(c) {
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
      function w(a) {
        var c = "source-over";
        switch(a) {
          case 1:
          ;
          case 2:
            break;
          case 3:
            c = "multiply";
            break;
          case 8:
          ;
          case 4:
            c = "screen";
            break;
          case 5:
            c = "lighten";
            break;
          case 6:
            c = "darken";
            break;
          case 7:
            c = "difference";
            break;
          case 13:
            c = "overlay";
            break;
          case 14:
            c = "hard-light";
            break;
          case 11:
            c = "destination-in";
            break;
          case 12:
            c = "destination-out";
            break;
          default:
            e.Debug.somewhatImplemented("Blend Mode: " + m.BlendMode[a]);
        }
        return c;
      }
      var k = e.NumberUtilities.clamp;
      navigator.userAgent.indexOf("Firefox");
      var c = function() {
        function c() {
        }
        c._prepareSVGFilters = function() {
          if (!c._svgBlurFilter) {
            var a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            a.setAttribute("style", "display:block;width:0px;height:0px");
            var e = document.createElementNS("http://www.w3.org/2000/svg", "defs"), h = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            h.setAttribute("id", "svgBlurFilter");
            var b = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
            b.setAttribute("stdDeviation", "0 0");
            h.appendChild(b);
            e.appendChild(h);
            c._svgBlurFilter = b;
            h = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            h.setAttribute("id", "svgDropShadowFilter");
            b = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
            b.setAttribute("in", "SourceAlpha");
            b.setAttribute("stdDeviation", "3");
            h.appendChild(b);
            c._svgDropshadowFilterBlur = b;
            b = document.createElementNS("http://www.w3.org/2000/svg", "feOffset");
            b.setAttribute("dx", "0");
            b.setAttribute("dy", "0");
            b.setAttribute("result", "offsetblur");
            h.appendChild(b);
            c._svgDropshadowFilterOffset = b;
            b = document.createElementNS("http://www.w3.org/2000/svg", "feFlood");
            b.setAttribute("flood-color", "rgba(0,0,0,1)");
            h.appendChild(b);
            c._svgDropshadowFilterFlood = b;
            b = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
            b.setAttribute("in2", "offsetblur");
            b.setAttribute("operator", "in");
            h.appendChild(b);
            b = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
            b.setAttribute("in2", "SourceAlpha");
            b.setAttribute("operator", "out");
            b.setAttribute("result", "outer");
            h.appendChild(b);
            var b = document.createElementNS("http://www.w3.org/2000/svg", "feMerge"), k = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
            b.appendChild(k);
            k = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
            b.appendChild(k);
            c._svgDropshadowMergeNode = k;
            h.appendChild(b);
            e.appendChild(h);
            h = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            h.setAttribute("id", "svgColorMatrixFilter");
            k = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
            k.setAttribute("color-interpolation-filters", "sRGB");
            k.setAttribute("in", "SourceGraphic");
            k.setAttribute("type", "matrix");
            h.appendChild(k);
            b = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
            b.setAttribute("in2", "SourceAlpha");
            b.setAttribute("operator", "in");
            h.appendChild(b);
            e.appendChild(h);
            c._svgColorMatrixFilter = k;
            a.appendChild(e);
            document.documentElement.appendChild(a);
          }
        };
        c._applyFilter = function(h, k, q) {
          if (c._svgFiltersAreSupported) {
            if (c._prepareSVGFilters(), c._removeFilter(k), q instanceof m.BlurFilter) {
              var b = a(h, q.quality);
              c._svgBlurFilter.setAttribute("stdDeviation", q.blurX * b + " " + q.blurY * b);
              k.filter = "url(#svgBlurFilter)";
            } else {
              q instanceof m.DropshadowFilter ? (b = a(h, q.quality), c._svgDropshadowFilterBlur.setAttribute("stdDeviation", q.blurX * b + " " + q.blurY * b), c._svgDropshadowFilterOffset.setAttribute("dx", String(Math.cos(q.angle * Math.PI / 180) * q.distance * h)), c._svgDropshadowFilterOffset.setAttribute("dy", String(Math.sin(q.angle * Math.PI / 180) * q.distance * h)), c._svgDropshadowFilterFlood.setAttribute("flood-color", e.ColorUtilities.rgbaToCSSStyle(q.color << 8 | Math.round(255 * q.alpha))), 
              c._svgDropshadowMergeNode.setAttribute("in", q.knockout ? "outer" : "SourceGraphic"), k.filter = "url(#svgDropShadowFilter)") : q instanceof m.ColorMatrix && (c._svgColorMatrixFilter.setAttribute("values", q.toSVGFilterMatrix()), k.filter = "url(#svgColorMatrixFilter)");
            }
          }
        };
        c._removeFilter = function(a) {
          a.filter = "none";
        };
        c._applyColorMatrix = function(a, e) {
          e.isIdentity() ? (a.globalAlpha = 1, a.globalColorMatrix = null) : e.hasOnlyAlphaMultiplier() ? (a.globalAlpha = k(e.alphaMultiplier, 0, 1), a.globalColorMatrix = null) : (a.globalAlpha = 1, c._svgFiltersAreSupported ? (c._applyFilter(1, a, e), a.globalColorMatrix = null) : a.globalColorMatrix = e);
        };
        c._svgFiltersAreSupported = !!Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype, "filter");
        return c;
      }();
      r.Filters = c;
      m.filters && c._svgFiltersAreSupported && ("registerScratchCanvas" in window || (window.registerScratchCanvas = function(a) {
        a.style.display = "none";
        document.body.appendChild(a);
      }));
      var h = function() {
        function a(c, e, f, b) {
          this.surface = c;
          this.region = e;
          this.w = f;
          this.h = b;
        }
        a.prototype.free = function() {
          this.surface.free(this);
        };
        a._ensureCopyCanvasSize = function(c, h) {
          var k;
          if (a._copyCanvasContext) {
            if (k = a._copyCanvasContext.canvas, k.width < c || k.height < h) {
              k.width = e.IntegerUtilities.nearestPowerOfTwo(c), k.height = e.IntegerUtilities.nearestPowerOfTwo(h);
            }
          } else {
            k = document.createElement("canvas"), "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(k), k.width = e.IntegerUtilities.nearestPowerOfTwo(c), k.height = e.IntegerUtilities.nearestPowerOfTwo(h), a._copyCanvasContext = k.getContext("2d");
          }
        };
        a.prototype.draw = function(e, h, k, b, l, n, g, d, p) {
          this.context.setTransform(1, 0, 0, 1, 0, 0);
          var m, x, r = 0, W = 0;
          e.context.canvas === this.context.canvas ? (a._ensureCopyCanvasSize(b, l), x = a._copyCanvasContext, x.clearRect(0, 0, b, l), x.drawImage(e.surface.canvas, e.region.x, e.region.y, b, l, 0, 0, b, l), m = x, W = r = 0) : (m = e.surface.context, r = e.region.x, W = e.region.y);
          a: {
            switch(g) {
              case 11:
                e = !0;
                break a;
              default:
                e = !1;
            }
          }
          e && (this.context.save(), this.context.beginPath(), this.context.rect(h, k, b, l), this.context.clip());
          this.context.globalAlpha = 1;
          this.context.globalCompositeOperation = w(g);
          if (d) {
            n && !n.isIdentity() && (d = d.concat(n));
            n = 0;
            if (1 < d.length) {
              var V, J, U;
              x ? (g = x, x = m, m = g) : (a._ensureCopyCanvasSize(b, l), x = a._copyCanvasContext, J = V = 0);
              for (;n < d.length - 1;n++) {
                x.clearRect(0, 0, b, l), c._applyFilter(p, x, d[n]), x.drawImage(m.canvas, r, W, b, l, V, J, b, l), c._removeFilter(x), g = x, J = r, U = W, x = m, m = g, W = r = V, V = J, J = U;
              }
              c._removeFilter(m);
              c._removeFilter(x);
            }
            c._applyFilter(p, this.context, d[n]);
          }
          this.context.drawImage(m.canvas, r, W, b, l, h, k, b, l);
          this.context.globalCompositeOperation = w(1);
          c._removeFilter(this.context);
          e && this.context.restore();
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
          var c = this.surface.context, e = this.region;
          c.fillStyle = a;
          c.fillRect(e.x, e.y, e.w, e.h);
        };
        a.prototype.clear = function(a) {
          var c = this.surface.context, e = this.region;
          a || (a = e);
          c.clearRect(a.x, a.y, a.w, a.h);
        };
        return a;
      }();
      r.Canvas2DSurfaceRegion = h;
      var n = function() {
        function a(c, e) {
          this.canvas = c;
          this.context = c.getContext("2d");
          this.w = c.width;
          this.h = c.height;
          this._regionAllocator = e;
        }
        a.prototype.allocate = function(a, c) {
          var e = this._regionAllocator.allocate(a, c);
          return e ? new h(this, e, a, c) : null;
        };
        a.prototype.free = function(a) {
          this._regionAllocator.free(a.region);
        };
        return a;
      }();
      r.Canvas2DSurface = n;
    })(m.Canvas2D || (m.Canvas2D = {}));
  })(e.GFX || (e.GFX = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(e, m) {
  function r() {
    this.constructor = e;
  }
  for (var a in m) {
    m.hasOwnProperty(a) && (e[a] = m[a]);
  }
  r.prototype = m.prototype;
  e.prototype = new r;
};
(function(e) {
  (function(m) {
    (function(r) {
      var a = e.Debug.assert, w = e.GFX.Geometry.Rectangle, k = e.GFX.Geometry.Point, c = e.GFX.Geometry.Matrix, h = e.NumberUtilities.clamp, n = e.NumberUtilities.pow2, f = function() {
        return function(a, b) {
          this.surfaceRegion = a;
          this.scale = b;
        };
      }();
      r.MipMapLevel = f;
      var v = function() {
        function a(b, c, e, f) {
          this._node = c;
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
          a = n(b);
          var c = 5 + b, b = this._levels[c];
          if (!b) {
            var e = this._node.getBounds().clone();
            e.scale(a, a);
            e.snap();
            var k = this._surfaceRegionAllocator.allocate(e.w, e.h, null), l = k.region, b = this._levels[c] = new f(k, a), c = new q(k);
            c.clip.set(l);
            c.matrix.setElements(a, 0, 0, a, l.x - e.x, l.y - e.y);
            c.flags |= 64;
            this._renderer.renderNodeWithState(this._node, c);
            c.free();
          }
          return b;
        };
        return a;
      }();
      r.MipMap = v;
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
      }(m.RendererOptions);
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
      var q = function(a) {
        function b(d) {
          a.call(this);
          this.clip = w.createEmpty();
          this.clipList = [];
          this.clipPath = null;
          this.flags = 0;
          this.target = null;
          this.matrix = c.createIdentity();
          this.colorMatrix = m.ColorMatrix.createIdentity();
          b.allocationCount++;
          this.target = d;
        }
        __extends(b, a);
        b.prototype.set = function(a) {
          this.clip.set(a.clip);
          this.clipPath = a.clipPath;
          this.target = a.target;
          this.matrix.set(a.matrix);
          this.colorMatrix.set(a.colorMatrix);
          this.flags = a.flags;
          e.ArrayUtilities.copyFrom(this.clipList, a.clipList);
        };
        b.prototype.clone = function() {
          var a = b.allocate();
          a || (a = new b(this.target));
          a.set(this);
          return a;
        };
        b.allocate = function() {
          var a = b._dirtyStack, c = null;
          a.length && (c = a.pop());
          return c;
        };
        b.prototype.free = function() {
          this.clipPath = null;
          b._dirtyStack.push(this);
        };
        b.prototype.transform = function(a) {
          var b = this.clone();
          b.matrix.preMultiply(a.getMatrix());
          a.hasColorMatrix() && b.colorMatrix.multiply(a.getColorMatrix());
          return b;
        };
        b.prototype.hasFlags = function(a) {
          return (this.flags & a) === a;
        };
        b.prototype.removeFlags = function(a) {
          this.flags &= ~a;
        };
        b.prototype.toggleFlags = function(a, b) {
          this.flags = b ? this.flags | a : this.flags & ~a;
        };
        b.prototype.beginClipPath = function(a) {
          this.target.context.save();
          this.clipPath = new Path2D;
        };
        b.prototype.applyClipPath = function() {
          var a = this.target.context;
          a.setTransform(1, 0, 0, 1, 0, 0);
          a.clip(this.clipPath);
          var b = this.matrix;
          a.setTransform(b.a, b.b, b.c, b.d, b.tx, b.ty);
        };
        b.prototype.closeClipPath = function() {
          this.target.context.restore();
        };
        b.allocationCount = 0;
        b._dirtyStack = [];
        return b;
      }(m.State);
      r.RenderState = q;
      var b = function() {
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
      r.FrameInfo = b;
      var l = function(f) {
        function g(a, c, e) {
          void 0 === e && (e = new u);
          f.call(this, a, c, e);
          this._visited = 0;
          this._frameInfo = new b;
          this._fontSize = 0;
          this._layers = [];
          if (a instanceof HTMLCanvasElement) {
            var h = a;
            this._viewport = new w(0, 0, h.width, h.height);
            this._target = this._createTarget(h);
          } else {
            this._addLayer("Background Layer");
            e = this._addLayer("Canvas Layer");
            h = document.createElement("canvas");
            e.appendChild(h);
            this._viewport = new w(0, 0, a.scrollWidth, a.scrollHeight);
            var k = this;
            c.addEventListener(1, function() {
              k._onStageBoundsChanged(h);
            });
            this._onStageBoundsChanged(h);
          }
          g._prepareSurfaceAllocators();
        }
        __extends(g, f);
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
          return new r.Canvas2DSurfaceRegion(new r.Canvas2DSurface(a), new m.RegionAllocator.Region(0, 0, a.width, a.height), a.width, a.height);
        };
        g.prototype._onStageBoundsChanged = function(a) {
          var b = this._stage.getBounds(!0);
          b.snap();
          for (var c = this._devicePixelRatio = window.devicePixelRatio || 1, e = b.w / c + "px", c = b.h / c + "px", f = 0;f < this._layers.length;f++) {
            var g = this._layers[f];
            g.style.width = e;
            g.style.height = c;
          }
          a.width = b.w;
          a.height = b.h;
          a.style.position = "absolute";
          a.style.width = e;
          a.style.height = c;
          this._target = this._createTarget(a);
          this._fontSize = 10 * this._devicePixelRatio;
        };
        g._prepareSurfaceAllocators = function() {
          g._initializedCaches || (g._surfaceCache = new m.SurfaceRegionAllocator.SimpleAllocator(function(a, b) {
            var c = document.createElement("canvas");
            "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(c);
            var e = Math.max(1024, a), f = Math.max(1024, b);
            c.width = e;
            c.height = f;
            var g = null, g = 512 <= a || 512 <= b ? new m.RegionAllocator.GridAllocator(e, f, e, f) : new m.RegionAllocator.BucketAllocator(e, f);
            return new r.Canvas2DSurface(c, g);
          }), g._shapeCache = new m.SurfaceRegionAllocator.SimpleAllocator(function(a, b) {
            var c = document.createElement("canvas");
            "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(c);
            c.width = 1024;
            c.height = 1024;
            var e = e = new m.RegionAllocator.CompactAllocator(1024, 1024);
            return new r.Canvas2DSurface(c, e);
          }), g._initializedCaches = !0);
        };
        g.prototype.render = function() {
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
        g.prototype.renderNode = function(a, b, c) {
          var e = new q(this._target);
          e.clip.set(b);
          e.flags = 256;
          e.matrix.set(c);
          a.visit(this, e);
          e.free();
        };
        g.prototype.renderNodeWithState = function(a, b) {
          a.visit(this, b);
        };
        g.prototype._renderWithCache = function(a, b) {
          var c = b.matrix, e = a.getBounds();
          if (e.isEmpty()) {
            return !1;
          }
          var f = this._options.cacheShapesMaxSize, h = Math.max(c.getAbsoluteScaleX(), c.getAbsoluteScaleY()), k = !!(b.flags & 16), l = !!(b.flags & 8);
          if (b.hasFlags(256)) {
            if (l || k || !b.colorMatrix.isIdentity() || a.hasFlags(256) || 100 < this._options.cacheShapesThreshold || e.w * h > f || e.h * h > f) {
              return !1;
            }
            (h = a.properties.mipMap) || (h = a.properties.mipMap = new v(this, a, g._shapeCache, f));
            k = h.getLevel(c);
            f = k.surfaceRegion;
            h = f.region;
            return k ? (k = b.target.context, k.imageSmoothingEnabled = k.mozImageSmoothingEnabled = !0, k.setTransform(c.a, c.b, c.c, c.d, c.tx, c.ty), k.drawImage(f.surface.canvas, h.x, h.y, h.w, h.h, e.x, e.y, e.w, e.h), !0) : !1;
          }
        };
        g.prototype._intersectsClipList = function(a, b) {
          var c = a.getBounds(!0), e = !1;
          b.matrix.transformRectangleAABB(c);
          b.clip.intersects(c) && (e = !0);
          var f = b.clipList;
          if (e && f.length) {
            for (var e = !1, g = 0;g < f.length;g++) {
              if (c.intersects(f[g])) {
                e = !0;
                break;
              }
            }
          }
          c.free();
          return e;
        };
        g.prototype.visitGroup = function(a, b) {
          this._frameInfo.groups++;
          a.getBounds();
          if ((!a.hasFlags(4) || b.flags & 4) && a.hasFlags(1)) {
            var c = b.flags & 1;
            if (!c && ((1 !== a.getLayer().blendMode || a.getLayer().mask) && this._options.blending || a.getLayer().filters && this._options.filters)) {
              b = b.clone(), b.flags |= 1, this._renderLayer(a, b), b.free();
            } else {
              if (c && b.removeFlags(1), this._intersectsClipList(a, b)) {
                for (var c = null, e = a.getChildren(), f = 0;f < e.length;f++) {
                  var g = e[f], h = g.getTransform(), k = b.transform(h);
                  k.toggleFlags(4096, g.hasFlags(64));
                  if (0 <= g.clip) {
                    c = c || new Uint8Array(e.length);
                    c[g.clip + f]++;
                    var l = k.clone();
                    l.flags |= 16;
                    l.beginClipPath(h.getMatrix());
                    g.visit(this, l);
                    l.applyClipPath();
                    l.free();
                  } else {
                    g.visit(this, k);
                  }
                  if (c && 0 < c[f]) {
                    for (;c[f]--;) {
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
        g.prototype._renderDebugInfo = function(a, b) {
          if (b.flags & 1024) {
            var c = b.target.context, f = a.getBounds(!0), h = a.properties.style;
            h || (h = a.properties.style = e.ColorStyle.randomStyle());
            c.strokeStyle = h;
            b.matrix.transformRectangleAABB(f);
            c.setTransform(1, 0, 0, 1, 0, 0);
            f.free();
            f = a.getBounds();
            h = g._debugPoints;
            b.matrix.transformRectangle(f, h);
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
        g.prototype.visitStage = function(a, b) {
          var c = b.target.context, e = a.getBounds(!0);
          b.matrix.transformRectangleAABB(e);
          e.intersect(b.clip);
          b.target.reset();
          b = b.clone();
          this._options.clear && b.target.clear(b.clip);
          a.hasFlags(2) || !a.color || b.flags & 32 || (this._container.style.backgroundColor = a.color.toCSSStyle());
          this.visitGroup(a, b);
          a.dirtyRegion && (c.restore(), b.target.reset(), c.globalAlpha = .4, b.hasFlags(2048) && a.dirtyRegion.render(b.target.context), a.dirtyRegion.clear());
          b.free();
        };
        g.prototype.visitShape = function(a, b) {
          if (this._intersectsClipList(a, b)) {
            var c = b.matrix;
            b.flags & 8192 && (c = c.clone(), c.snap());
            var e = b.target.context;
            r.Filters._applyColorMatrix(e, b.colorMatrix);
            a.source instanceof m.RenderableVideo ? this.visitRenderableVideo(a.source, b) : 0 < e.globalAlpha && this.visitRenderable(a.source, b, a.ratio);
            b.flags & 8192 && c.free();
            r.Filters._removeFilter(e);
          }
        };
        g.prototype.visitRenderableVideo = function(a, b) {
          if (a.video && a.video.videoWidth) {
            var c = this._devicePixelRatio, f = b.matrix.clone();
            f.scale(1 / c, 1 / c);
            var c = a.getBounds(), g = e.GFX.Geometry.Matrix.createIdentity();
            g.scale(c.w / a.video.videoWidth, c.h / a.video.videoHeight);
            f.preMultiply(g);
            g.free();
            c = f.toCSSTransform();
            a.video.style.transformOrigin = "0 0";
            a.video.style.transform = c;
            var h = this._backgroundVideoLayer;
            h !== a.video.parentElement && (h.appendChild(a.video), a.addEventListener(2, function J(a) {
              h.removeChild(a.video);
              a.removeEventListener(2, J);
            }));
            f.free();
          }
        };
        g.prototype.visitRenderable = function(a, b, c) {
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
            a.render(e, c, null, g ? b.clipPath : null, h);
          }
        };
        g.prototype._renderLayer = function(a, b) {
          var c = a.getLayer(), e = c.mask;
          if (e) {
            var f = !a.hasFlags(16) || !e.hasFlags(16);
            this._renderWithMask(a, e, c.blendMode, f, b);
          } else {
            e = w.allocate();
            if (f = this._renderToTemporarySurface(a, a.getLayerBounds(!!this._options.filters), b, e, b.target.surface)) {
              b.target.draw(f, e.x, e.y, e.w, e.h, b.colorMatrix, this._options.blending ? c.blendMode : 1, this._options.filters ? c.filters : null, this._devicePixelRatio), f.free();
            }
            e.free();
          }
        };
        g.prototype._renderWithMask = function(a, b, c, e, f) {
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
              l.isEmpty() || (h = f.clone(), h.clip.set(l), a = this._renderToTemporarySurface(a, a.getBounds(), h, w.createEmpty(), null), h.free(), k = f.clone(), k.clip.set(l), k.matrix = g, k.flags |= 4, e && (k.flags |= 8), b = this._renderToTemporarySurface(b, b.getBounds(), k, w.createEmpty(), a.surface), k.free(), a.draw(b, 0, 0, l.w, l.h, k.colorMatrix, 11, null, this._devicePixelRatio), f.target.draw(a, l.x, l.y, l.w, l.h, h.colorMatrix, c, null, this._devicePixelRatio), b.free(), a.free());
            }
          }
        };
        g.prototype._renderStageToTarget = function(a, b, e) {
          w.allocationCount = c.allocationCount = q.allocationCount = 0;
          a = new q(a);
          a.clip.set(e);
          this._options.paintRenderable || (a.flags |= 32);
          this._options.paintBounds && (a.flags |= 1024);
          this._options.paintDirtyRegion && (a.flags |= 2048);
          this._options.paintFlashing && (a.flags |= 512);
          this._options.cacheShapes && (a.flags |= 256);
          this._options.imageSmoothing && (a.flags |= 4096);
          this._options.snapToDevicePixels && (a.flags |= 8192);
          this._frameInfo.enter(a);
          b.visit(this, a);
          this._frameInfo.leave();
        };
        g.prototype._renderToTemporarySurface = function(a, b, c, e, f) {
          var g = c.matrix;
          b = b.clone();
          g.transformRectangleAABB(b);
          b.snap();
          e.set(b);
          e.intersect(c.clip);
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
          c = c.clone();
          c.target = f;
          c.matrix = g;
          c.clip.set(b);
          a.visit(this, c);
          c.free();
          f.context.restore();
          return f;
        };
        g.prototype._allocateSurface = function(a, b, c) {
          return g._surfaceCache.allocate(a, b, c);
        };
        g.prototype.screenShot = function(b, c, e) {
          c && (c = this._stage.content.groupChild.child, a(c instanceof m.Stage), b = c.content.getBounds(!0), c.content.getTransform().getConcatenatedMatrix().transformRectangleAABB(b), b.intersect(this._viewport));
          b || (b = new w(0, 0, this._target.w, this._target.h));
          c = b.w;
          var f = b.h, g = this._devicePixelRatio;
          e && (c /= g, f /= g, g = 1);
          e = document.createElement("canvas");
          e.width = c;
          e.height = f;
          var h = e.getContext("2d");
          h.fillStyle = this._container.style.backgroundColor;
          h.fillRect(0, 0, c, f);
          h.drawImage(this._target.context.canvas, b.x, b.y, b.w, b.h, 0, 0, c, f);
          return new m.ScreenShot(e.toDataURL("image/png"), c, f, g);
        };
        g._initializedCaches = !1;
        g._debugPoints = k.createEmptyPoints(4);
        return g;
      }(m.Renderer);
      r.Canvas2DRenderer = l;
    })(m.Canvas2D || (m.Canvas2D = {}));
  })(e.GFX || (e.GFX = {}));
})(Shumway || (Shumway = {}));
(function(e) {
  (function(m) {
    var r = m.Geometry.Point, a = m.Geometry.Matrix, w = m.Geometry.Rectangle, k = e.Tools.Mini.FPS, c = function() {
      function a() {
      }
      a.prototype.onMouseUp = function(a, c) {
        a.state = this;
      };
      a.prototype.onMouseDown = function(a, c) {
        a.state = this;
      };
      a.prototype.onMouseMove = function(a, c) {
        a.state = this;
      };
      a.prototype.onMouseWheel = function(a, c) {
        a.state = this;
      };
      a.prototype.onMouseClick = function(a, c) {
        a.state = this;
      };
      a.prototype.onKeyUp = function(a, c) {
        a.state = this;
      };
      a.prototype.onKeyDown = function(a, c) {
        a.state = this;
      };
      a.prototype.onKeyPress = function(a, c) {
        a.state = this;
      };
      return a;
    }();
    m.UIState = c;
    var h = function(a) {
      function c() {
        a.apply(this, arguments);
        this._keyCodes = [];
      }
      __extends(c, a);
      c.prototype.onMouseDown = function(a, b) {
        b.altKey && (a.state = new f(a.worldView, a.getMousePosition(b, null), a.worldView.getTransform().getMatrix(!0)));
      };
      c.prototype.onMouseClick = function(a, b) {
      };
      c.prototype.onKeyDown = function(a, b) {
        this._keyCodes[b.keyCode] = !0;
      };
      c.prototype.onKeyUp = function(a, b) {
        this._keyCodes[b.keyCode] = !1;
      };
      return c;
    }(c), n = function(a) {
      function c() {
        a.apply(this, arguments);
        this._keyCodes = [];
        this._paused = !1;
        this._mousePosition = new r(0, 0);
      }
      __extends(c, a);
      c.prototype.onMouseMove = function(a, b) {
        this._mousePosition = a.getMousePosition(b, null);
        this._update(a);
      };
      c.prototype.onMouseDown = function(a, b) {
      };
      c.prototype.onMouseClick = function(a, b) {
      };
      c.prototype.onMouseWheel = function(a, b) {
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
      c.prototype.onKeyPress = function(a, b) {
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
      c.prototype.onKeyDown = function(a, b) {
        this._keyCodes[b.keyCode] = !0;
        this._update(a);
      };
      c.prototype.onKeyUp = function(a, b) {
        this._keyCodes[b.keyCode] = !1;
        this._update(a);
      };
      c.prototype._update = function(a) {
        a.paused = this._paused;
        if (a.getOption("paintViewport")) {
          var b = m.viewportLoupeDiameter.value, c = m.viewportLoupeDiameter.value;
          a.viewport = new w(this._mousePosition.x - b / 2, this._mousePosition.y - c / 2, b, c);
        } else {
          a.viewport = null;
        }
      };
      return c;
    }(c);
    (function(a) {
      function c() {
        a.apply(this, arguments);
        this._startTime = Date.now();
      }
      __extends(c, a);
      c.prototype.onMouseMove = function(a, b) {
        if (!(10 > Date.now() - this._startTime)) {
          var c = a._world;
          c && (a.state = new f(c, a.getMousePosition(b, null), c.getTransform().getMatrix(!0)));
        }
      };
      c.prototype.onMouseUp = function(a, b) {
        a.state = new h;
        a.selectNodeUnderMouse(b);
      };
      return c;
    })(c);
    var f = function(a) {
      function c(e, b, f) {
        a.call(this);
        this._target = e;
        this._startPosition = b;
        this._startMatrix = f;
      }
      __extends(c, a);
      c.prototype.onMouseMove = function(a, b) {
        b.preventDefault();
        var c = a.getMousePosition(b, null);
        c.sub(this._startPosition);
        this._target.getTransform().setMatrix(this._startMatrix.clone().translate(c.x, c.y));
        a.state = this;
      };
      c.prototype.onMouseUp = function(a, b) {
        a.state = new h;
      };
      return c;
    }(c), c = function() {
      function c(a, f, b) {
        function l(a) {
          d._state.onMouseWheel(d, a);
          d._persistentState.onMouseWheel(d, a);
        }
        void 0 === f && (f = !1);
        void 0 === b && (b = void 0);
        this._state = new h;
        this._persistentState = new n;
        this.paused = !1;
        this.viewport = null;
        this._selectedNodes = [];
        this._isRendering = !1;
        this._rAF = void 0;
        this._eventListeners = Object.create(null);
        this._fullScreen = !1;
        this._container = a;
        this._stage = new m.Stage(512, 512, !0);
        this._worldView = this._stage.content;
        this._world = new m.Group;
        this._worldView.addChild(this._world);
        this._disableHiDPI = f;
        f = document.createElement("div");
        f.style.position = "absolute";
        f.style.width = "100%";
        f.style.height = "100%";
        f.style.zIndex = "0";
        a.appendChild(f);
        if (m.hud.value) {
          var r = document.createElement("div");
          r.style.position = "absolute";
          r.style.width = "100%";
          r.style.height = "100%";
          r.style.pointerEvents = "none";
          var g = document.createElement("div");
          g.style.position = "absolute";
          g.style.width = "100%";
          g.style.height = "20px";
          g.style.pointerEvents = "none";
          r.appendChild(g);
          a.appendChild(r);
          this._fps = new k(g);
        } else {
          this._fps = null;
        }
        this.transparent = r = 0 === b;
        void 0 === b || 0 === b || e.ColorUtilities.rgbaToCSSStyle(b);
        this._options = new m.Canvas2D.Canvas2DRendererOptions;
        this._options.alpha = r;
        this._renderer = new m.Canvas2D.Canvas2DRenderer(f, this._stage, this._options);
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
        window.addEventListener("DOMMouseScroll", l);
        window.addEventListener("mousewheel", l);
        a.addEventListener("mousedown", function(a) {
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
      c.prototype._listenForContainerSizeChanges = function() {
        var a = this._containerWidth, c = this._containerHeight;
        this._onContainerSizeChanged();
        var b = this;
        setInterval(function() {
          if (a !== b._containerWidth || c !== b._containerHeight) {
            b._onContainerSizeChanged(), a = b._containerWidth, c = b._containerHeight;
          }
        }, 10);
      };
      c.prototype._onContainerSizeChanged = function() {
        var c = this.getRatio(), e = Math.ceil(this._containerWidth * c), b = Math.ceil(this._containerHeight * c);
        this._stage.setBounds(new w(0, 0, e, b));
        this._stage.content.setBounds(new w(0, 0, e, b));
        this._worldView.getTransform().setMatrix(new a(c, 0, 0, c, 0, 0));
        this._dispatchEvent("resize");
      };
      c.prototype.addEventListener = function(a, c) {
        this._eventListeners[a] || (this._eventListeners[a] = []);
        this._eventListeners[a].push(c);
      };
      c.prototype._dispatchEvent = function(a) {
        if (a = this._eventListeners[a]) {
          for (var c = 0;c < a.length;c++) {
            a[c]();
          }
        }
      };
      c.prototype.startRendering = function() {
        if (!this._isRendering) {
          this._isRendering = !0;
          var a = this;
          this._rAF = requestAnimationFrame(function b() {
            a.render();
            a._rAF = requestAnimationFrame(b);
          });
        }
      };
      c.prototype.stopRendering = function() {
        this._isRendering && (this._isRendering = !1, cancelAnimationFrame(this._rAF));
      };
      Object.defineProperty(c.prototype, "state", {set:function(a) {
        this._state = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(c.prototype, "cursor", {set:function(a) {
        this._container.style.cursor = a;
      }, enumerable:!0, configurable:!0});
      c.prototype._render = function() {
        m.RenderableVideo.checkForVideoUpdates();
        var a = (this._stage.readyToRender() || m.forcePaint.value) && !this.paused, c = 0;
        if (a) {
          var b = this._renderer;
          b.viewport = this.viewport ? this.viewport : this._stage.getBounds();
          this._dispatchEvent("render");
          c = performance.now();
          b.render();
          c = performance.now() - c;
        }
        this._fps && this._fps.tickAndRender(!a, c);
      };
      c.prototype.render = function() {
        this._render();
      };
      Object.defineProperty(c.prototype, "world", {get:function() {
        return this._world;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(c.prototype, "worldView", {get:function() {
        return this._worldView;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(c.prototype, "stage", {get:function() {
        return this._stage;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(c.prototype, "options", {get:function() {
        return this._options;
      }, enumerable:!0, configurable:!0});
      c.prototype.getDisplayParameters = function() {
        var a = this.getRatio();
        return {stageWidth:this._containerWidth, stageHeight:this._containerHeight, pixelRatio:a, screenWidth:window.screen ? window.screen.width : 640, screenHeight:window.screen ? window.screen.height : 480};
      };
      c.prototype.toggleOption = function(a) {
        var c = this._options;
        c[a] = !c[a];
      };
      c.prototype.getOption = function(a) {
        return this._options[a];
      };
      c.prototype.getRatio = function() {
        var a = window.devicePixelRatio || 1, c = 1;
        1 === a || this._disableHiDPI || (c = a / 1);
        return c;
      };
      Object.defineProperty(c.prototype, "_containerWidth", {get:function() {
        return this._container.clientWidth;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(c.prototype, "_containerHeight", {get:function() {
        return this._container.clientHeight;
      }, enumerable:!0, configurable:!0});
      c.prototype.queryNodeUnderMouse = function(a) {
        return this._world;
      };
      c.prototype.selectNodeUnderMouse = function(a) {
        (a = this._world) && this._selectedNodes.push(a);
        this._render();
      };
      c.prototype.getMousePosition = function(c, e) {
        var b = this._container, f = b.getBoundingClientRect(), h = this.getRatio(), b = new r(b.scrollWidth / f.width * (c.clientX - f.left) * h, b.scrollHeight / f.height * (c.clientY - f.top) * h);
        if (!e) {
          return b;
        }
        f = a.createIdentity();
        e.getTransform().getConcatenatedMatrix().inverse(f);
        f.transformPoint(b);
        return b;
      };
      c.prototype.getMouseWorldPosition = function(a) {
        return this.getMousePosition(a, this._world);
      };
      c.prototype._onMouseDown = function(a) {
      };
      c.prototype._onMouseUp = function(a) {
      };
      c.prototype._onMouseMove = function(a) {
      };
      c.prototype.screenShot = function(a, c, b) {
        return this._renderer.screenShot(a, c, b);
      };
      return c;
    }();
    m.Easel = c;
  })(e.GFX || (e.GFX = {}));
})(Shumway || (Shumway = {}));
(function(e) {
  (function(m) {
    var r = e.GFX.Geometry.Matrix;
    (function(a) {
      a[a.Simple = 0] = "Simple";
    })(m.Layout || (m.Layout = {}));
    var a = function(a) {
      function c() {
        a.apply(this, arguments);
        this.layout = 0;
      }
      __extends(c, a);
      return c;
    }(m.RendererOptions);
    m.TreeRendererOptions = a;
    var w = function(e) {
      function c(c, n, f) {
        void 0 === f && (f = new a);
        e.call(this, c, n, f);
        this._canvas = document.createElement("canvas");
        this._container.appendChild(this._canvas);
        this._context = this._canvas.getContext("2d");
        this._listenForContainerSizeChanges();
      }
      __extends(c, e);
      c.prototype._listenForContainerSizeChanges = function() {
        var a = this._containerWidth, c = this._containerHeight;
        this._onContainerSizeChanged();
        var e = this;
        setInterval(function() {
          if (a !== e._containerWidth || c !== e._containerHeight) {
            e._onContainerSizeChanged(), a = e._containerWidth, c = e._containerHeight;
          }
        }, 10);
      };
      c.prototype._getRatio = function() {
        var a = window.devicePixelRatio || 1, c = 1;
        1 !== a && (c = a / 1);
        return c;
      };
      c.prototype._onContainerSizeChanged = function() {
        var a = this._getRatio(), c = Math.ceil(this._containerWidth * a), e = Math.ceil(this._containerHeight * a), k = this._canvas;
        0 < a ? (k.width = c * a, k.height = e * a, k.style.width = c + "px", k.style.height = e + "px") : (k.width = c, k.height = e);
      };
      Object.defineProperty(c.prototype, "_containerWidth", {get:function() {
        return this._container.clientWidth;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(c.prototype, "_containerHeight", {get:function() {
        return this._container.clientHeight;
      }, enumerable:!0, configurable:!0});
      c.prototype.render = function() {
        var a = this._context;
        a.save();
        a.clearRect(0, 0, this._canvas.width, this._canvas.height);
        a.scale(1, 1);
        0 === this._options.layout && this._renderNodeSimple(this._context, this._stage, r.createIdentity());
        a.restore();
      };
      c.prototype._renderNodeSimple = function(a, c, e) {
        function k(c) {
          var d = c.getChildren();
          c.hasFlags(4096) ? a.fillStyle = "red" : a.fillStyle = "white";
          var e = String(c.id);
          c instanceof m.RenderableText ? e = "T" + e : c instanceof m.RenderableShape ? e = "S" + e : c instanceof m.RenderableBitmap ? e = "B" + e : c instanceof m.RenderableVideo && (e = "V" + e);
          c instanceof m.Renderable && (e = e + " [" + c._parents.length + "]");
          c = a.measureText(e).width;
          a.fillText(e, q, b);
          if (d) {
            q += c + 4;
            t = Math.max(t, q + 20);
            for (e = 0;e < d.length;e++) {
              k(d[e]), e < d.length - 1 && (b += 18, b > r._canvas.height && (a.fillStyle = "gray", q = q - l + t + 8, l = t + 8, b = 0, a.fillStyle = "white"));
            }
            q -= c + 4;
          }
        }
        var r = this;
        a.save();
        a.font = "16px Arial";
        a.fillStyle = "white";
        var q = 0, b = 0, l = 0, t = 0;
        k(c);
        a.restore();
      };
      return c;
    }(m.Renderer);
    m.TreeRenderer = w;
  })(e.GFX || (e.GFX = {}));
})(Shumway || (Shumway = {}));
(function(e) {
  (function(m) {
    (function(r) {
      var a = e.GFX.BlurFilter, w = e.GFX.DropshadowFilter, k = e.GFX.Shape, c = e.GFX.Group, h = e.GFX.RenderableShape, n = e.GFX.RenderableMorphShape, f = e.GFX.RenderableBitmap, v = e.GFX.RenderableVideo, u = e.GFX.RenderableText, q = e.GFX.ColorMatrix, b = e.ShapeData, l = e.ArrayUtilities.DataBuffer, t = e.GFX.Stage, g = e.GFX.Geometry.Matrix, d = e.GFX.Geometry.Rectangle, p = function() {
        function a() {
        }
        a.prototype.writeMouseEvent = function(a, b) {
          var c = this.output;
          c.writeInt(300);
          var d = e.Remoting.MouseEventNames.indexOf(a.type);
          c.writeInt(d);
          c.writeFloat(b.x);
          c.writeFloat(b.y);
          c.writeInt(a.buttons);
          c.writeInt((a.ctrlKey ? 1 : 0) | (a.altKey ? 2 : 0) | (a.shiftKey ? 4 : 0));
        };
        a.prototype.writeKeyboardEvent = function(a) {
          var b = this.output;
          b.writeInt(301);
          var c = e.Remoting.KeyboardEventNames.indexOf(a.type);
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
      r.GFXChannelSerializer = p;
      p = function() {
        function a(b, c, d) {
          function e(a) {
            a = a.getBounds(!0);
            var c = b.easel.getRatio();
            a.scale(1 / c, 1 / c);
            a.snap();
            f.setBounds(a);
          }
          var f = this.stage = new t(128, 512);
          "undefined" !== typeof registerInspectorStage && registerInspectorStage(f);
          e(b.stage);
          b.stage.addEventListener(1, e);
          b.content = f.content;
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
          e.registerCSSFont(a, b, !inFirefox);
          inFirefox ? c(null) : window.setTimeout(c, 400);
        };
        a.prototype.registerImage = function(a, b, c, d, e, f) {
          this._registerAsset(a, b, this._decodeImage(c, d, e, f));
        };
        a.prototype.registerVideo = function(a) {
          this._registerAsset(a, 0, new v(a, this));
        };
        a.prototype._decodeImage = function(a, b, c, g) {
          var h = new Image, k = f.FromImage(h, -1, -1);
          h.src = URL.createObjectURL(new Blob([b], {type:e.getMIMETypeForImageType(a)}));
          h.onload = function() {
            k.setBounds(new d(0, 0, h.width, h.height));
            c && k.mask(c);
            k.invalidate();
            g({width:h.width, height:h.height});
          };
          h.onerror = function() {
            g(null);
          };
          return k;
        };
        a.prototype.sendVideoPlaybackEvent = function(a, b, c) {
          this._easelHost.sendVideoPlaybackEvent(a, b, c);
        };
        return a;
      }();
      r.GFXChannelDeserializerContext = p;
      p = function() {
        function p() {
        }
        p.prototype.read = function() {
          for (var a = 0, b = this.input, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0, k = 0, l = 0, n = 0;0 < b.bytesAvailable;) {
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
                n++, this._readRequestBitmapData();
            }
          }
        };
        p.prototype._readMatrix = function() {
          var a = this.input, b = p._temporaryReadMatrix, c = 1, d = 0, e = 0, f = 1, g = 0, h = 0;
          switch(a.readInt()) {
            case 1:
              c = a.readFloat(), f = a.readFloat();
            case 0:
              g = a.readFloat() / 20;
              h = a.readFloat() / 20;
              break;
            case 2:
              c = f = a.readFloat();
              g = a.readFloat() / 20;
              h = a.readFloat() / 20;
              break;
            case 3:
              c = a.readFloat(), d = a.readFloat(), e = a.readFloat(), f = a.readFloat(), g = a.readFloat() / 20, h = a.readFloat() / 20;
          }
          b.setElements(c, d, e, f, g, h);
          return b;
        };
        p.prototype._readRectangle = function() {
          var a = this.input, b = p._temporaryReadRectangle;
          b.setElements(a.readInt() / 20, a.readInt() / 20, a.readInt() / 20, a.readInt() / 20);
          return b;
        };
        p.prototype._readColorMatrix = function() {
          var a = this.input, b = p._temporaryReadColorMatrix, c = 1, d = 1, e = 1, f = 1, g = 0, h = 0, k = 0, l = 0;
          switch(a.readInt()) {
            case 0:
              return p._temporaryReadColorMatrixIdentity;
            case 1:
              f = a.readFloat();
              break;
            case 2:
              e = d = c = 0;
              f = a.readFloat();
              g = a.readInt();
              h = a.readInt();
              k = a.readInt();
              l = a.readInt();
              break;
            case 3:
              c = a.readFloat(), d = a.readFloat(), e = a.readFloat(), f = a.readFloat(), g = a.readInt(), h = a.readInt(), k = a.readInt(), l = a.readInt();
          }
          b.setMultipliersAndOffsets(c, d, e, f, g, h, k, l);
          return b;
        };
        p.prototype._readAsset = function() {
          var a = this.input.readInt(), b = this.inputAssets[a];
          this.inputAssets[a] = null;
          return b;
        };
        p.prototype._readUpdateGraphics = function() {
          for (var a = this.input, c = this.context, d = a.readInt(), e = a.readInt(), f = c._getAsset(d), g = this._readRectangle(), k = b.FromPlainObject(this._readAsset()), l = a.readInt(), m = [], p = 0;p < l;p++) {
            var q = a.readInt();
            m.push(c._getBitmapAsset(q));
          }
          if (f) {
            f.update(k, m, g);
          } else {
            a = k.morphCoordinates ? new n(d, k, m, g) : new h(d, k, m, g);
            for (p = 0;p < m.length;p++) {
              m[p] && m[p].addRenderableParent(a);
            }
            c._registerAsset(d, e, a);
          }
        };
        p.prototype._readUpdateBitmapData = function() {
          var a = this.input, b = this.context, c = a.readInt(), d = a.readInt(), e = b._getBitmapAsset(c), g = this._readRectangle(), a = a.readInt(), h = l.FromPlainObject(this._readAsset());
          e ? e.updateFromDataBuffer(a, h) : (e = f.FromDataBuffer(a, h, g), b._registerAsset(c, d, e));
        };
        p.prototype._readUpdateTextContent = function() {
          var a = this.input, b = this.context, c = a.readInt(), d = a.readInt(), e = b._getTextAsset(c), f = this._readRectangle(), g = this._readMatrix(), h = a.readInt(), k = a.readInt(), n = a.readInt(), m = a.readBoolean(), p = a.readInt(), q = a.readInt(), r = this._readAsset(), t = l.FromPlainObject(this._readAsset()), v = null, w = a.readInt();
          w && (v = new l(4 * w), a.readBytes(v, 0, 4 * w));
          e ? (e.setBounds(f), e.setContent(r, t, g, v), e.setStyle(h, k, p, q), e.reflow(n, m)) : (e = new u(f), e.setContent(r, t, g, v), e.setStyle(h, k, p, q), e.reflow(n, m), b._registerAsset(c, d, e));
          if (this.output) {
            for (a = e.textRect, this.output.writeInt(20 * a.w), this.output.writeInt(20 * a.h), this.output.writeInt(20 * a.x), e = e.lines, a = e.length, this.output.writeInt(a), b = 0;b < a;b++) {
              this._writeLineMetrics(e[b]);
            }
          }
        };
        p.prototype._writeLineMetrics = function(a) {
          this.output.writeInt(a.x);
          this.output.writeInt(a.width);
          this.output.writeInt(a.ascent);
          this.output.writeInt(a.descent);
          this.output.writeInt(a.leading);
        };
        p.prototype._readUpdateStage = function() {
          var a = this.context, b = this.input.readInt();
          a._nodes[b] || (a._nodes[b] = a.stage.content);
          var b = this.input.readInt(), c = this._readRectangle();
          a.stage.content.setBounds(c);
          a.stage.color = e.Color.FromARGB(b);
          a.stage.align = this.input.readInt();
          a.stage.scaleMode = this.input.readInt();
          b = this.input.readInt();
          a._easelHost.fullscreen = 0 === b || 1 === b;
        };
        p.prototype._readUpdateCurrentMouseTarget = function() {
          var a = this.context;
          this.input.readInt();
          var b = this.input.readInt();
          a._easelHost.cursor = e.UI.toCSSCursor(b);
        };
        p.prototype._readUpdateNetStream = function() {
          var a = this.context, b = this.input.readInt(), c = a._getVideoAsset(b), d = this._readRectangle();
          c || (a.registerVideo(b), c = a._getVideoAsset(b));
          c.setBounds(d);
        };
        p.prototype._readFilters = function(b) {
          var c = this.input, d = c.readInt(), f = [];
          if (d) {
            for (var g = 0;g < d;g++) {
              var h = c.readInt();
              switch(h) {
                case 0:
                  f.push(new a(c.readFloat(), c.readFloat(), c.readInt()));
                  break;
                case 1:
                  f.push(new w(c.readFloat(), c.readFloat(), c.readFloat(), c.readFloat(), c.readInt(), c.readFloat(), c.readBoolean(), c.readBoolean(), c.readBoolean(), c.readInt(), c.readFloat()));
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
                  f.push(new q(h));
                  break;
                default:
                  e.Debug.somewhatImplemented(m.FilterType[h]);
              }
            }
            b.getLayer().filters = f;
          }
        };
        p.prototype._readUpdateFrame = function() {
          var a = this.input, b = this.context, d = a.readInt(), e = 0, f = b._nodes[d];
          f || (f = b._nodes[d] = new c);
          d = a.readInt();
          d & 1 && f.getTransform().setMatrix(this._readMatrix());
          d & 8 && f.getTransform().setColorMatrix(this._readColorMatrix());
          if (d & 64) {
            var g = a.readInt();
            f.getLayer().mask = 0 <= g ? b._makeNode(g) : null;
          }
          d & 128 && (f.clip = a.readInt());
          d & 32 && (e = a.readInt() / 65535, f.getLayer().blendMode = a.readInt(), this._readFilters(f), f.toggleFlags(1, a.readBoolean()), f.toggleFlags(16, a.readBoolean()), f.toggleFlags(32, !!a.readInt()), f.toggleFlags(64, !!a.readInt()));
          if (d & 4) {
            d = a.readInt();
            g = f;
            g.clearChildren();
            for (var h = 0;h < d;h++) {
              var l = a.readInt(), l = b._makeNode(l);
              g.addChild(l);
            }
          }
          e && (l = f.getChildren()[0], l instanceof k && (l.ratio = e));
        };
        p.prototype._readDrawToBitmap = function() {
          var a = this.input, b = this.context, c = a.readInt(), d = a.readInt(), e = a.readInt(), h, k, l;
          h = e & 1 ? this._readMatrix().clone() : g.createIdentity();
          e & 8 && (k = this._readColorMatrix());
          e & 16 && (l = this._readRectangle());
          e = a.readInt();
          a.readBoolean();
          a = b._getBitmapAsset(c);
          d = b._makeNode(d);
          a ? a.drawNode(d, h, k, e, l) : b._registerAsset(c, -1, f.FromNode(d, h, k, e, l));
        };
        p.prototype._readRequestBitmapData = function() {
          var a = this.output, b = this.context, c = this.input.readInt();
          b._getBitmapAsset(c).readImageData(a);
        };
        p._temporaryReadMatrix = g.createIdentity();
        p._temporaryReadRectangle = d.createEmpty();
        p._temporaryReadColorMatrix = q.createIdentity();
        p._temporaryReadColorMatrixIdentity = q.createIdentity();
        return p;
      }();
      r.GFXChannelDeserializer = p;
    })(m.GFX || (m.GFX = {}));
  })(e.Remoting || (e.Remoting = {}));
})(Shumway || (Shumway = {}));
(function(e) {
  (function(m) {
    var r = e.GFX.Geometry.Point, a = e.ArrayUtilities.DataBuffer;
    m.ContextMenuButton = 2;
    var w = function() {
      function k(a) {
        this._easel = a;
        var h = a.transparent;
        this._group = a.world;
        this._content = null;
        this._fullscreen = !1;
        this._context = new e.Remoting.GFX.GFXChannelDeserializerContext(this, this._group, h);
        this._addEventListeners();
        e.registerFallbackFont();
      }
      k.prototype.onSendUpdates = function(a, e) {
        throw Error("This method is abstract");
      };
      Object.defineProperty(k.prototype, "easel", {get:function() {
        return this._easel;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(k.prototype, "stage", {get:function() {
        return this._easel.stage;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(k.prototype, "content", {set:function(a) {
        this._content = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(k.prototype, "cursor", {set:function(a) {
        this._easel.cursor = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(k.prototype, "fullscreen", {set:function(a) {
        this._fullscreen !== a && (this._fullscreen = a, "undefined" !== typeof ShumwayCom && ShumwayCom.setFullscreen && ShumwayCom.setFullscreen(a));
      }, enumerable:!0, configurable:!0});
      k.prototype._mouseEventListener = function(c) {
        if (c.button !== m.ContextMenuButton) {
          var h = this._easel.getMousePosition(c, this._content), h = new r(h.x, h.y), k = new a, f = new e.Remoting.GFX.GFXChannelSerializer;
          f.output = k;
          f.writeMouseEvent(c, h);
          this.onSendUpdates(k, []);
        }
      };
      k.prototype._keyboardEventListener = function(c) {
        var h = new a, k = new e.Remoting.GFX.GFXChannelSerializer;
        k.output = h;
        k.writeKeyboardEvent(c);
        this.onSendUpdates(h, []);
      };
      k.prototype._addEventListeners = function() {
        for (var a = this._mouseEventListener.bind(this), e = this._keyboardEventListener.bind(this), n = k._mouseEvents, f = 0;f < n.length;f++) {
          window.addEventListener(n[f], a);
        }
        a = k._keyboardEvents;
        for (f = 0;f < a.length;f++) {
          window.addEventListener(a[f], e);
        }
        this._addFocusEventListeners();
        this._easel.addEventListener("resize", this._resizeEventListener.bind(this));
      };
      k.prototype._sendFocusEvent = function(c) {
        var h = new a, k = new e.Remoting.GFX.GFXChannelSerializer;
        k.output = h;
        k.writeFocusEvent(c);
        this.onSendUpdates(h, []);
      };
      k.prototype._addFocusEventListeners = function() {
        var a = this;
        document.addEventListener("visibilitychange", function(e) {
          a._sendFocusEvent(document.hidden ? 0 : 1);
        });
        window.addEventListener("focus", function(e) {
          a._sendFocusEvent(3);
        });
        window.addEventListener("blur", function(e) {
          a._sendFocusEvent(2);
        });
      };
      k.prototype._resizeEventListener = function() {
        this.onDisplayParameters(this._easel.getDisplayParameters());
      };
      k.prototype.onDisplayParameters = function(a) {
        throw Error("This method is abstract");
      };
      k.prototype.processUpdates = function(a, h, k) {
        void 0 === k && (k = null);
        var f = new e.Remoting.GFX.GFXChannelDeserializer;
        f.input = a;
        f.inputAssets = h;
        f.output = k;
        f.context = this._context;
        f.read();
      };
      k.prototype.processVideoControl = function(a, e, k) {
        var f = this._context, m = f._getVideoAsset(a);
        if (!m) {
          if (1 !== e) {
            return;
          }
          f.registerVideo(a);
          m = f._getVideoAsset(a);
        }
        return m.processControlRequest(e, k);
      };
      k.prototype.processRegisterFont = function(a, e, k) {
        this._context.registerFont(a, e, k);
      };
      k.prototype.processRegisterImage = function(a, e, k, f, m, r) {
        this._context.registerImage(a, e, k, f, m, r);
      };
      k.prototype.processFSCommand = function(a, e) {
        "undefined" !== typeof ShumwayCom && "test" === ShumwayCom.environment && ShumwayCom.processFSCommand(a, e);
      };
      k.prototype.processFrame = function() {
        "undefined" !== typeof ShumwayCom && "test" === ShumwayCom.environment && ShumwayCom.processFrame();
      };
      k.prototype.onVideoPlaybackEvent = function(a, e, k) {
        throw Error("This method is abstract");
      };
      k.prototype.sendVideoPlaybackEvent = function(a, e, k) {
        this.onVideoPlaybackEvent(a, e, k);
      };
      k._mouseEvents = e.Remoting.MouseEventNames;
      k._keyboardEvents = e.Remoting.KeyboardEventNames;
      return k;
    }();
    m.EaselHost = w;
  })(e.GFX || (e.GFX = {}));
})(Shumway || (Shumway = {}));
(function(e) {
  (function(m) {
    (function(r) {
      var a = e.ArrayUtilities.DataBuffer, w = function(e) {
        function c(a, c) {
          e.call(this, a);
          this._peer = c;
          this._peer.onSyncMessage = function(a) {
            return this._onWindowMessage(a, !1);
          }.bind(this);
          this._peer.onAsyncMessage = function(a) {
            this._onWindowMessage(a, !0);
          }.bind(this);
        }
        __extends(c, e);
        c.prototype.onSendUpdates = function(a, c) {
          var e = a.getBytes();
          this._peer.postAsyncMessage({type:"gfx", updates:e, assets:c}, [e.buffer]);
        };
        c.prototype.onDisplayParameters = function(a) {
          this._peer.postAsyncMessage({type:"displayParameters", params:a});
        };
        c.prototype.onVideoPlaybackEvent = function(a, c, e) {
          this._peer.postAsyncMessage({type:"videoPlayback", id:a, eventType:c, data:e});
        };
        c.prototype._sendRegisterFontResponse = function(a, c) {
          this._peer.postAsyncMessage({type:"registerFontResponse", requestId:a, result:c});
        };
        c.prototype._sendRegisterImageResponse = function(a, c) {
          this._peer.postAsyncMessage({type:"registerImageResponse", requestId:a, result:c});
        };
        c.prototype._onWindowMessage = function(c, e) {
          var f;
          if ("object" === typeof c && null !== c) {
            if ("player" === c.type) {
              var k = a.FromArrayBuffer(c.updates.buffer);
              e ? this.processUpdates(k, c.assets) : (f = new a, this.processUpdates(k, c.assets, f), f = f.toPlainObject());
            } else {
              "frame" === c.type ? this.processFrame() : "videoControl" === c.type ? f = this.processVideoControl(c.id, c.eventType, c.data) : "registerFont" === c.type ? this.processRegisterFont(c.syncId, c.data, this._sendRegisterFontResponse.bind(this, c.requestId)) : "registerImage" === c.type ? this.processRegisterImage(c.syncId, c.symbolId, c.imageType, c.data, c.alphaData, this._sendRegisterImageResponse.bind(this, c.requestId)) : "fscommand" === c.type && this.processFSCommand(c.command, 
              c.args);
            }
          }
          return f;
        };
        return c;
      }(m.EaselHost);
      r.WindowEaselHost = w;
    })(m.Window || (m.Window = {}));
  })(e.GFX || (e.GFX = {}));
})(Shumway || (Shumway = {}));
(function(e) {
  (function(m) {
    (function(m) {
      function a(a, b) {
        a.writeInt(b.length);
        a.writeRawBytes(b);
      }
      function w(a, b) {
        return "byteLength" in a && "buffer" in a && (a.constructor && a.constructor.name) === b;
      }
      function k(a) {
        return "byteLength" in a && "ArrayBuffer" === (a.constructor && a.constructor.name);
      }
      function c(b) {
        function c(b) {
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
                for (var h = 0;h < b.length;h++) {
                  c(b[h]);
                }
              } else {
                if (w(b, "Uint8Array")) {
                  f.writeByte(9), a(f, b);
                } else {
                  if ("length" in b && "buffer" in b && "littleEndian" in b) {
                    f.writeByte(b.littleEndian ? 10 : 11), a(f, new Uint8Array(b.buffer, 0, b.length));
                  } else {
                    if (k(b)) {
                      f.writeByte(8), a(f, new Uint8Array(b));
                    } else {
                      if (w(b, "Int32Array")) {
                        f.writeByte(12), a(f, new Uint8Array(b.buffer, b.byteOffset, b.byteLength));
                      } else {
                        if (!e.isNullOrUndefined(b.buffer) && k(b.buffer) && "number" === typeof b.byteOffset) {
                          throw Error("Some unsupported TypedArray is used");
                        }
                        f.writeByte(7);
                        for (h in b) {
                          f.writeUTF(h), c(b[h]);
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
        var f = new v;
        c(b);
        return f.getBytes();
      }
      function h(a) {
        var b = new v, c = a.readInt();
        a.readBytes(b, 0, c);
        return b.getBytes();
      }
      function n(a) {
        var b = new v, c = a.readInt();
        a.readBytes(b, 0, c);
        return f(b);
      }
      function f(a) {
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
            for (var b = [], c = a.readInt(), d = 0;d < c;d++) {
              b[d] = f(a);
            }
            return b;
          case 7:
            for (b = {};c = a.readUTF();) {
              b[c] = f(a);
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
      var v = e.ArrayUtilities.DataBuffer, u = e.ArrayUtilities.PlainObjectDataBuffer, q;
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
      })(m.MovieRecordType || (m.MovieRecordType = {}));
      q = function() {
        function e(a) {
          this._maxRecordingSize = a;
          this._recording = new v;
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
          (new b(this._recording.getBytes())).dump();
        };
        e.prototype._createRecord = function(a, b) {
          this._stopped || (this._recording.length + 8 + (b ? b.length : 0) >= this._maxRecordingSize ? (console.error("Recording limit reached"), this._stopped = !0) : (this._recording.writeInt(Date.now() - this._recordingStarted), this._recording.writeInt(a), null !== b ? (this._recording.writeInt(b.length), this._recording.writeRawBytes(b.getBytes())) : this._recording.writeInt(0)));
        };
        e.prototype.recordPlayerCommand = function(b, e, d) {
          var f = new v;
          a(f, e);
          f.writeInt(d.length);
          d.forEach(function(b) {
            b = c(b);
            a(f, b);
          });
          this._createRecord(b ? 2 : 1, f);
        };
        e.prototype.recordFrame = function() {
          this._createRecord(3, null);
        };
        e.prototype.recordFont = function(b, e) {
          var d = new v;
          d.writeInt(b);
          a(d, c(e));
          this._createRecord(4, d);
        };
        e.prototype.recordImage = function(b, e, d, f, h) {
          var k = new v;
          k.writeInt(b);
          k.writeInt(e);
          k.writeInt(d);
          a(k, c(f));
          a(k, c(h));
          this._createRecord(5, k);
        };
        e.prototype.recordFSCommand = function(a, b) {
          var c = new v;
          c.writeUTF(a);
          c.writeUTF(b || "");
          this._createRecord(6, c);
        };
        return e;
      }();
      m.MovieRecorder = q;
      var b = function() {
        function a(b) {
          this._buffer = new v;
          this._buffer.writeRawBytes(b);
          this._buffer.position = 4;
        }
        a.prototype.readNextRecord = function() {
          if (this._buffer.position >= this._buffer.length) {
            return 0;
          }
          var a = this._buffer.readInt(), b = this._buffer.readInt(), c = this._buffer.readInt(), e = null;
          0 < c && (e = new v, this._buffer.readBytes(e, 0, c));
          this.currentTimestamp = a;
          this.currentType = b;
          this.currentData = e;
          return b;
        };
        a.prototype.parsePlayerCommand = function() {
          for (var a = h(this.currentData), b = this.currentData.readInt(), c = [], e = 0;e < b;e++) {
            c.push(n(this.currentData));
          }
          return {updates:a, assets:c};
        };
        a.prototype.parseFSCommand = function() {
          var a = this.currentData.readUTF(), b = this.currentData.readUTF();
          return {command:a, args:b};
        };
        a.prototype.parseFont = function() {
          var a = this.currentData.readInt(), b = n(this.currentData);
          return {syncId:a, data:b};
        };
        a.prototype.parseImage = function() {
          var a = this.currentData.readInt(), b = this.currentData.readInt(), c = this.currentData.readInt(), e = n(this.currentData);
          return {syncId:a, symbolId:b, imageType:c, data:e};
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
      m.MovieRecordParser = b;
    })(m.Test || (m.Test = {}));
  })(e.GFX || (e.GFX = {}));
})(Shumway || (Shumway = {}));
(function(e) {
  (function(m) {
    (function(r) {
      var a = e.ArrayUtilities.DataBuffer, w = function(e) {
        function c(a) {
          e.call(this, a);
          this.alwaysRenderFrame = this.ignoreTimestamps = !1;
          this.cpuTimeRendering = this.cpuTimeUpdates = 0;
          this.onComplete = null;
        }
        __extends(c, e);
        Object.defineProperty(c.prototype, "cpuTime", {get:function() {
          return this.cpuTimeUpdates + this.cpuTimeRendering;
        }, enumerable:!0, configurable:!0});
        c.prototype.playUrl = function(a) {
          var c = new XMLHttpRequest;
          c.open("GET", a, !0);
          c.responseType = "arraybuffer";
          c.onload = function() {
            this.playBytes(new Uint8Array(c.response));
          }.bind(this);
          c.send();
        };
        c.prototype.playBytes = function(a) {
          this._parser = new r.MovieRecordParser(a);
          this._lastTimestamp = 0;
          this._parseNext();
        };
        c.prototype.onSendUpdates = function(a, c) {
        };
        c.prototype.onDisplayParameters = function(a) {
        };
        c.prototype.onVideoPlaybackEvent = function(a, c, e) {
        };
        c.prototype._parseNext = function() {
          if (0 !== this._parser.readNextRecord()) {
            var a = this._runRecord.bind(this), c = this._parser.currentTimestamp - this._lastTimestamp;
            this._lastTimestamp = this._parser.currentTimestamp;
            5 > c ? Promise.resolve(void 0).then(a) : this.ignoreTimestamps ? setTimeout(a) : setTimeout(a, c);
          } else {
            if (this.onComplete) {
              this.onComplete();
            }
          }
        };
        c.prototype._runRecord = function() {
          var c, e = performance.now();
          switch(this._parser.currentType) {
            case 1:
            ;
            case 2:
              c = this._parser.parsePlayerCommand();
              var f = 2 === this._parser.currentType, k = a.FromArrayBuffer(c.updates.buffer);
              f ? this.processUpdates(k, c.assets) : (f = new a, this.processUpdates(k, c.assets, f));
              break;
            case 3:
              this.processFrame();
              break;
            case 4:
              c = this._parser.parseFont();
              this.processRegisterFont(c.syncId, c.data, function() {
              });
              break;
            case 5:
              c = this._parser.parseImage();
              this.processRegisterImage(c.syncId, c.symbolId, c.imageType, c.data, c.alphaData, function() {
              });
              break;
            case 6:
              c = this._parser.parseFSCommand();
              this.processFSCommand(c.command, c.args);
              break;
            default:
              throw Error("Invalid movie record type");;
          }
          this.cpuTimeUpdates += performance.now() - e;
          3 === this._parser.currentType && this.alwaysRenderFrame ? requestAnimationFrame(this._renderFrameJustAfterRAF.bind(this)) : this._parseNext();
        };
        c.prototype._renderFrameJustAfterRAF = function() {
          var a = performance.now();
          this.easel.render();
          this.cpuTimeRendering += performance.now() - a;
          this._parseNext();
        };
        return c;
      }(m.EaselHost);
      r.PlaybackEaselHost = w;
    })(m.Test || (m.Test = {}));
  })(e.GFX || (e.GFX = {}));
})(Shumway || (Shumway = {}));
(function(e) {
  (function(m) {
    (function(m) {
      var a = function(a) {
        function e(c, h, k) {
          void 0 === k && (k = 0);
          a.call(this, c, h);
          this._recorder = null;
          this._recorder = new m.MovieRecorder(k);
        }
        __extends(e, a);
        Object.defineProperty(e.prototype, "recorder", {get:function() {
          return this._recorder;
        }, enumerable:!0, configurable:!0});
        e.prototype._onWindowMessage = function(c, e) {
          switch(c.type) {
            case "player":
              this._recorder.recordPlayerCommand(e, c.updates, c.assets);
              break;
            case "frame":
              this._recorder.recordFrame();
              break;
            case "registerFont":
              this._recorder.recordFont(c.syncId, c.data);
              break;
            case "registerImage":
              this._recorder.recordImage(c.syncId, c.symbolId, c.imageType, c.data, c.alphaData);
              break;
            case "fscommand":
              this._recorder.recordFSCommand(c.command, c.args);
          }
          return a.prototype._onWindowMessage.call(this, c, e);
        };
        return e;
      }(e.GFX.Window.WindowEaselHost);
      m.RecordingEaselHost = a;
    })(m.Test || (m.Test = {}));
  })(e.GFX || (e.GFX = {}));
})(Shumway || (Shumway = {}));
console.timeEnd("Load GFX Dependencies");

