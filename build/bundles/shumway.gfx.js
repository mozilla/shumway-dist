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
Shumway$$inline_0.version = "0.11.535";
Shumway$$inline_0.build = "74c3cbd";
var jsGlobal = function() {
  return this || (0,eval)("this//# sourceURL=jsGlobal-getter");
}(), inBrowser = "undefined" !== typeof window && "document" in window && "plugins" in window.document, inFirefox = "undefined" !== typeof navigator && 0 <= navigator.userAgent.indexOf("Firefox");
jsGlobal.performance || (jsGlobal.performance = {});
jsGlobal.performance.now || (jsGlobal.performance.now = function() {
  return Date.now();
});
var START_TIME = performance.now();
(function(f) {
  function l(a) {
    return (a | 0) === a;
  }
  function k(a) {
    return "object" === typeof a || "function" === typeof a;
  }
  function z(a) {
    return String(Number(a)) === a;
  }
  function v(a) {
    var h = 0;
    if ("number" === typeof a) {
      return h = a | 0, a === h && 0 <= h ? !0 : a >>> 0 === a;
    }
    if ("string" !== typeof a) {
      return !1;
    }
    var c = a.length;
    if (0 === c) {
      return !1;
    }
    if ("0" === a) {
      return !0;
    }
    if (c > f.UINT32_CHAR_BUFFER_LENGTH) {
      return !1;
    }
    var d = 0, h = a.charCodeAt(d++) - 48;
    if (1 > h || 9 < h) {
      return !1;
    }
    for (var m = 0, b = 0;d < c;) {
      b = a.charCodeAt(d++) - 48;
      if (0 > b || 9 < b) {
        return !1;
      }
      m = h;
      h = 10 * h + b;
    }
    return m < f.UINT32_MAX_DIV_10 || m === f.UINT32_MAX_DIV_10 && b <= f.UINT32_MAX_MOD_10 ? !0 : !1;
  }
  (function(a) {
    a[a._0 = 48] = "_0";
    a[a._1 = 49] = "_1";
    a[a._2 = 50] = "_2";
    a[a._3 = 51] = "_3";
    a[a._4 = 52] = "_4";
    a[a._5 = 53] = "_5";
    a[a._6 = 54] = "_6";
    a[a._7 = 55] = "_7";
    a[a._8 = 56] = "_8";
    a[a._9 = 57] = "_9";
  })(f.CharacterCodes || (f.CharacterCodes = {}));
  f.UINT32_CHAR_BUFFER_LENGTH = 10;
  f.UINT32_MAX = 4294967295;
  f.UINT32_MAX_DIV_10 = 429496729;
  f.UINT32_MAX_MOD_10 = 5;
  f.isString = function(a) {
    return "string" === typeof a;
  };
  f.isFunction = function(a) {
    return "function" === typeof a;
  };
  f.isNumber = function(a) {
    return "number" === typeof a;
  };
  f.isInteger = l;
  f.isArray = function(a) {
    return a instanceof Array;
  };
  f.isNumberOrString = function(a) {
    return "number" === typeof a || "string" === typeof a;
  };
  f.isObject = k;
  f.toNumber = function(a) {
    return +a;
  };
  f.isNumericString = z;
  f.isNumeric = function(a) {
    if ("number" === typeof a) {
      return !0;
    }
    if ("string" === typeof a) {
      var h = a.charCodeAt(0);
      return 65 <= h && 90 >= h || 97 <= h && 122 >= h || 36 === h || 95 === h ? !1 : v(a) || z(a);
    }
    return !1;
  };
  f.isIndex = v;
  f.isNullOrUndefined = function(a) {
    return void 0 == a;
  };
  f.argumentsToString = function(a) {
    for (var h = [], c = 0;c < a.length;c++) {
      var d = a[c];
      try {
        var m;
        m = "object" === typeof d && d ? "toString" in d ? d.toString() : Object.prototype.toString.call(d) : d + "";
        h.push(m);
      } catch (b) {
        h.push("<unprintable value>");
      }
    }
    return h.join(", ");
  };
  var B;
  (function(a) {
    a.error = function(a) {
      console.error(a);
      throw Error(a);
    };
    a.assert = function(h, c) {
      void 0 === c && (c = "assertion failed");
      "" === h && (h = !0);
      if (!h) {
        if ("undefined" !== typeof console && "assert" in console) {
          throw console.assert(!1, c), Error(c);
        }
        a.error(c.toString());
      }
    };
    a.assertUnreachable = function(a) {
      var e = Error().stack.split("\n")[1];
      throw Error("Reached unreachable location " + e + a);
    };
    a.assertNotImplemented = function(h, c) {
      h || a.error("notImplemented: " + c);
    };
    var h = Object.create(null);
    a.warning = function(a, e, h) {
    };
    a.warnCounts = function() {
      var a = [], e;
      for (e in h) {
        a.push({key:e, count:h[e]});
      }
      a.sort(function(a, e) {
        return e.count - a.count;
      });
      return a.reduce(function(a, e) {
        return a + ("\n" + e.count + "\t" + e.key);
      }, "");
    };
    a.notImplemented = function(a) {
    };
    a.dummyConstructor = function(a) {
    };
    a.abstractMethod = function(a) {
    };
    var c = {};
    a.somewhatImplemented = function(h) {
      c[h] || (c[h] = !0, a.warning("somewhatImplemented: " + h));
    };
    a.unexpected = function(h) {
      a.assert(!1, "Unexpected: " + h);
    };
    a.unexpectedCase = function(h) {
      a.assert(!1, "Unexpected Case: " + h);
    };
  })(B = f.Debug || (f.Debug = {}));
  f.getTicks = function() {
    return performance.now();
  };
  (function(a) {
    function h(a, e) {
      for (var h = 0, c = a.length;h < c;h++) {
        if (a[h] === e) {
          return h;
        }
      }
      a.push(e);
      return a.length - 1;
    }
    a.popManyInto = function(a, e, h) {
      for (var c = e - 1;0 <= c;c--) {
        h[c] = a.pop();
      }
      h.length = e;
    };
    a.popMany = function(a, e) {
      var h = a.length - e, c = a.slice(h, this.length);
      a.length = h;
      return c;
    };
    a.popManyIntoVoid = function(a, e) {
      a.length -= e;
    };
    a.pushMany = function(a, e) {
      for (var h = 0;h < e.length;h++) {
        a.push(e[h]);
      }
    };
    a.top = function(a) {
      return a.length && a[a.length - 1];
    };
    a.last = function(a) {
      return a.length && a[a.length - 1];
    };
    a.peek = function(a) {
      return a[a.length - 1];
    };
    a.indexOf = function(a, e) {
      for (var h = 0, c = a.length;h < c;h++) {
        if (a[h] === e) {
          return h;
        }
      }
      return -1;
    };
    a.equals = function(a, e) {
      if (a.length !== e.length) {
        return !1;
      }
      for (var h = 0;h < a.length;h++) {
        if (a[h] !== e[h]) {
          return !1;
        }
      }
      return !0;
    };
    a.pushUnique = h;
    a.unique = function(a) {
      for (var e = [], c = 0;c < a.length;c++) {
        h(e, a[c]);
      }
      return e;
    };
    a.copyFrom = function(h, c) {
      h.length = 0;
      a.pushMany(h, c);
    };
    a.ensureTypedArrayCapacity = function(a, e) {
      if (a.length < e) {
        var h = a;
        a = new a.constructor(f.IntegerUtilities.nearestPowerOfTwo(e));
        a.set(h, 0);
      }
      return a;
    };
    a.memCopy = function(a, e, h, c, d) {
      void 0 === h && (h = 0);
      void 0 === c && (c = 0);
      void 0 === d && (d = 0);
      0 < c || 0 < d && d < e.length ? (0 >= d && (d = e.length - c), a.set(e.subarray(c, c + d), h)) : a.set(e, h);
    };
  })(f.ArrayUtilities || (f.ArrayUtilities = {}));
  (function(a) {
    function h(a, e) {
      return Object.prototype.hasOwnProperty.call(a, e);
    }
    a.boxValue = function(a) {
      return void 0 == a || k(a) ? a : Object(a);
    };
    a.toKeyValueArray = function(a) {
      var e = Object.prototype.hasOwnProperty, h = [], c;
      for (c in a) {
        e.call(a, c) && h.push([c, a[c]]);
      }
      return h;
    };
    a.isPrototypeWriteable = function(a) {
      return Object.getOwnPropertyDescriptor(a, "prototype").writable;
    };
    a.hasOwnProperty = h;
    a.propertyIsEnumerable = function(a, e) {
      return Object.prototype.propertyIsEnumerable.call(a, e);
    };
    a.getPropertyDescriptor = function(a, e) {
      do {
        var h = Object.getOwnPropertyDescriptor(a, e);
        if (h) {
          return h;
        }
        a = Object.getPrototypeOf(a);
      } while (a);
      return null;
    };
    a.hasOwnGetter = function(a, e) {
      var h = Object.getOwnPropertyDescriptor(a, e);
      return !(!h || !h.get);
    };
    a.getOwnGetter = function(a, e) {
      var h = Object.getOwnPropertyDescriptor(a, e);
      return h ? h.get : null;
    };
    a.hasOwnSetter = function(a, e) {
      var h = Object.getOwnPropertyDescriptor(a, e);
      return !(!h || !h.set);
    };
    a.createMap = function() {
      return Object.create(null);
    };
    a.createArrayMap = function() {
      return [];
    };
    a.defineReadOnlyProperty = function(a, e, h) {
      Object.defineProperty(a, e, {value:h, writable:!1, configurable:!0, enumerable:!1});
    };
    a.copyProperties = function(a, e) {
      for (var h in e) {
        a[h] = e[h];
      }
    };
    a.copyOwnProperties = function(a, e) {
      for (var c in e) {
        h(e, c) && (a[c] = e[c]);
      }
    };
    a.copyOwnPropertyDescriptors = function(a, e, c, d, m) {
      void 0 === c && (c = null);
      void 0 === d && (d = !0);
      void 0 === m && (m = !1);
      for (var p in e) {
        if (h(e, p) && (!c || c(p))) {
          var g = Object.getOwnPropertyDescriptor(e, p);
          if (d || !h(a, p)) {
            try {
              m && !1 === g.writable && (g.writable = !0), Object.defineProperty(a, p, g);
            } catch (r) {
              B.assert("Can't define: " + p);
            }
          }
        }
      }
    };
    a.copyPropertiesByList = function(a, e, h) {
      for (var c = 0;c < h.length;c++) {
        var d = h[c];
        a[d] = e[d];
      }
    };
    a.defineNonEnumerableGetter = function(a, e, h) {
      Object.defineProperty(a, e, {get:h, configurable:!0, enumerable:!1});
    };
    a.defineNonEnumerableProperty = function(a, e, h) {
      Object.defineProperty(a, e, {value:h, writable:!0, configurable:!0, enumerable:!1});
    };
  })(f.ObjectUtilities || (f.ObjectUtilities = {}));
  (function(a) {
    a.makeForwardingGetter = function(a) {
      return new Function('return this["' + a + '"]//# sourceURL=fwd-get-' + a + ".as");
    };
    a.makeForwardingSetter = function(a) {
      return new Function("value", 'this["' + a + '"] = value;//# sourceURL=fwd-set-' + a + ".as");
    };
  })(f.FunctionUtilities || (f.FunctionUtilities = {}));
  (function(a) {
    function h(a) {
      return "string" === typeof a ? '"' + a + '"' : "number" === typeof a || "boolean" === typeof a ? String(a) : a instanceof Array ? "[] " + a.length : typeof a;
    }
    function c(a, g, e) {
      m[0] = a;
      m[1] = g;
      m[2] = e;
      return m.join("");
    }
    function d(a, g, e, h) {
      b[0] = a;
      b[1] = g;
      b[2] = e;
      b[3] = h;
      return b.join("");
    }
    a.repeatString = function(a, g) {
      for (var e = "", h = 0;h < g;h++) {
        e += a;
      }
      return e;
    };
    a.memorySizeToString = function(a) {
      a |= 0;
      return 1024 > a ? a + " B" : 1048576 > a ? (a / 1024).toFixed(2) + "KB" : (a / 1048576).toFixed(2) + "MB";
    };
    a.toSafeString = h;
    a.toSafeArrayString = function(a) {
      for (var g = [], e = 0;e < a.length;e++) {
        g.push(h(a[e]));
      }
      return g.join(", ");
    };
    a.utf8decode = function(a) {
      for (var g = new Uint8Array(4 * a.length), e = 0, h = 0, c = a.length;h < c;h++) {
        var d = a.charCodeAt(h);
        if (127 >= d) {
          g[e++] = d;
        } else {
          if (55296 <= d && 56319 >= d) {
            var A = a.charCodeAt(h + 1);
            56320 <= A && 57343 >= A && (d = ((d & 1023) << 10) + (A & 1023) + 65536, ++h);
          }
          0 !== (d & 4292870144) ? (g[e++] = 248 | d >>> 24 & 3, g[e++] = 128 | d >>> 18 & 63, g[e++] = 128 | d >>> 12 & 63, g[e++] = 128 | d >>> 6 & 63) : 0 !== (d & 4294901760) ? (g[e++] = 240 | d >>> 18 & 7, g[e++] = 128 | d >>> 12 & 63, g[e++] = 128 | d >>> 6 & 63) : 0 !== (d & 4294965248) ? (g[e++] = 224 | d >>> 12 & 15, g[e++] = 128 | d >>> 6 & 63) : g[e++] = 192 | d >>> 6 & 31;
          g[e++] = 128 | d & 63;
        }
      }
      return g.subarray(0, e);
    };
    a.utf8encode = function(a) {
      for (var g = 0, e = "";g < a.length;) {
        var h = a[g++] & 255;
        if (127 >= h) {
          e += String.fromCharCode(h);
        } else {
          var c = 192, d = 5;
          do {
            if ((h & (c >> 1 | 128)) === c) {
              break;
            }
            c = c >> 1 | 128;
            --d;
          } while (0 <= d);
          if (0 >= d) {
            e += String.fromCharCode(h);
          } else {
            for (var h = h & (1 << d) - 1, c = !1, A = 5;A >= d;--A) {
              var m = a[g++];
              if (128 != (m & 192)) {
                c = !0;
                break;
              }
              h = h << 6 | m & 63;
            }
            if (c) {
              for (d = g - (7 - A);d < g;++d) {
                e += String.fromCharCode(a[d] & 255);
              }
            } else {
              e = 65536 <= h ? e + String.fromCharCode(h - 65536 >> 10 & 1023 | 55296, h & 1023 | 56320) : e + String.fromCharCode(h);
            }
          }
        }
      }
      return e;
    };
    a.base64ArrayBuffer = function(a) {
      var g = "";
      a = new Uint8Array(a);
      for (var e = a.byteLength, h = e % 3, e = e - h, E, m, A, b, n = 0;n < e;n += 3) {
        b = a[n] << 16 | a[n + 1] << 8 | a[n + 2], E = (b & 16515072) >> 18, m = (b & 258048) >> 12, A = (b & 4032) >> 6, b &= 63, g += d("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[E], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[m], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[A], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[b]);
      }
      1 == h ? (b = a[e], g += c("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(b & 252) >> 2], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(b & 3) << 4], "==")) : 2 == h && (b = a[e] << 8 | a[e + 1], g += d("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(b & 64512) >> 10], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(b & 1008) >> 4], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(b & 15) << 
      2], "="));
      return g;
    };
    a.escapeString = function(a) {
      void 0 !== a && (a = a.replace(/[^\w$]/gi, "$"), /^\d/.test(a) && (a = "$" + a));
      return a;
    };
    a.fromCharCodeArray = function(a) {
      for (var g = "", e = 0;e < a.length;e += 16384) {
        var h = Math.min(a.length - e, 16384), g = g + String.fromCharCode.apply(null, a.subarray(e, e + h))
      }
      return g;
    };
    a.variableLengthEncodeInt32 = function(a) {
      for (var g = 32 - Math.clz32(a), e = Math.ceil(g / 6), g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[e], e = e - 1;0 <= e;e--) {
        g += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[a >> 6 * e & 63];
      }
      return g;
    };
    a.toEncoding = function(a) {
      return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[a];
    };
    a.fromEncoding = function(a) {
      if (65 <= a && 90 >= a) {
        return a - 65;
      }
      if (97 <= a && 122 >= a) {
        return a - 71;
      }
      if (48 <= a && 57 >= a) {
        return a + 4;
      }
      if (36 === a) {
        return 62;
      }
      if (95 === a) {
        return 63;
      }
    };
    a.variableLengthDecodeInt32 = function(h) {
      for (var g = a.fromEncoding(h.charCodeAt(0)), c = 0, d = 0;d < g;d++) {
        var E = 6 * (g - d - 1), c = c | a.fromEncoding(h.charCodeAt(1 + d)) << E
      }
      return c;
    };
    a.trimMiddle = function(a, g) {
      if (a.length <= g) {
        return a;
      }
      var e = g >> 1, h = g - e - 1;
      return a.substr(0, e) + "\u2026" + a.substr(a.length - h, h);
    };
    a.multiple = function(a, g) {
      for (var e = "", h = 0;h < g;h++) {
        e += a;
      }
      return e;
    };
    a.indexOfAny = function(a, g, e) {
      for (var h = a.length, c = 0;c < g.length;c++) {
        var d = a.indexOf(g[c], e);
        0 <= d && (h = Math.min(h, d));
      }
      return h === a.length ? -1 : h;
    };
    var m = Array(3), b = Array(4), n = Array(9);
    a.concat3 = c;
    a.concat4 = d;
    a.concat9 = function(a, g, e, h, c, d, A, m, b) {
      n[0] = a;
      n[1] = g;
      n[2] = e;
      n[3] = h;
      n[4] = c;
      n[5] = d;
      n[6] = A;
      n[7] = m;
      n[8] = b;
      return n.join("");
    };
  })(f.StringUtilities || (f.StringUtilities = {}));
  (function(a) {
    var h = new Uint8Array([7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21]), c = new Int32Array([-680876936, -389564586, 606105819, -1044525330, -176418897, 1200080426, -1473231341, -45705983, 1770035416, -1958414417, -42063, -1990404162, 1804603682, -40341101, -1502002290, 1236535329, -165796510, -1069501632, 
    643717713, -373897302, -701558691, 38016083, -660478335, -405537848, 568446438, -1019803690, -187363961, 1163531501, -1444681467, -51403784, 1735328473, -1926607734, -378558, -2022574463, 1839030562, -35309556, -1530992060, 1272893353, -155497632, -1094730640, 681279174, -358537222, -722521979, 76029189, -640364487, -421815835, 530742520, -995338651, -198630844, 1126891415, -1416354905, -57434055, 1700485571, -1894986606, -1051523, -2054922799, 1873313359, -30611744, -1560198380, 1309151649, 
    -145523070, -1120210379, 718787259, -343485551]);
    a.hashBytesTo32BitsMD5 = function(a, e, d) {
      var m = 1732584193, p = -271733879, g = -1732584194, r = 271733878, b = d + 72 & -64, E = new Uint8Array(b), n;
      for (n = 0;n < d;++n) {
        E[n] = a[e++];
      }
      E[n++] = 128;
      for (a = b - 8;n < a;) {
        E[n++] = 0;
      }
      E[n++] = d << 3 & 255;
      E[n++] = d >> 5 & 255;
      E[n++] = d >> 13 & 255;
      E[n++] = d >> 21 & 255;
      E[n++] = d >>> 29 & 255;
      E[n++] = 0;
      E[n++] = 0;
      E[n++] = 0;
      a = new Int32Array(16);
      for (n = 0;n < b;) {
        for (d = 0;16 > d;++d, n += 4) {
          a[d] = E[n] | E[n + 1] << 8 | E[n + 2] << 16 | E[n + 3] << 24;
        }
        var A = m;
        e = p;
        var C = g, q = r, f, w;
        for (d = 0;64 > d;++d) {
          16 > d ? (f = e & C | ~e & q, w = d) : 32 > d ? (f = q & e | ~q & C, w = 5 * d + 1 & 15) : 48 > d ? (f = e ^ C ^ q, w = 3 * d + 5 & 15) : (f = C ^ (e | ~q), w = 7 * d & 15);
          var y = q, A = A + f + c[d] + a[w] | 0;
          f = h[d];
          q = C;
          C = e;
          e = e + (A << f | A >>> 32 - f) | 0;
          A = y;
        }
        m = m + A | 0;
        p = p + e | 0;
        g = g + C | 0;
        r = r + q | 0;
      }
      return m;
    };
    a.mixHash = function(a, e) {
      return (31 * a | 0) + e | 0;
    };
  })(f.HashUtilities || (f.HashUtilities = {}));
  var b = function() {
    function a(e) {
      this._data = Object.create(null);
      this._size = 0;
      this._maxSize = e;
    }
    a.prototype.get = function(a) {
      return this._data[a];
    };
    a.prototype.set = function(a, e) {
      if (this._size >= this._maxSize) {
        return !1;
      }
      this._data[a] = e;
      this._size++;
      return !0;
    };
    return a;
  }();
  f.Cache = b;
  var q = function() {
    function a() {
    }
    a.seed = function(h) {
      a._state[0] = h;
      a._state[1] = h;
    };
    a.reset = function() {
      a._state[0] = 57005;
      a._state[1] = 48879;
    };
    a.next = function() {
      var a = this._state, e = Math.imul(18273, a[0] & 65535) + (a[0] >>> 16) | 0;
      a[0] = e;
      var c = Math.imul(36969, a[1] & 65535) + (a[1] >>> 16) | 0;
      a[1] = c;
      a = (e << 16) + (c & 65535) | 0;
      return 2.3283064365386963E-10 * (0 > a ? a + 4294967296 : a);
    };
    a._state = new Uint32Array([57005, 48879]);
    return a;
  }();
  f.Random = q;
  Math.random = function() {
    return q.next();
  };
  f.installTimeWarper = function() {
    var a = Date, h = 1428107694580;
    jsGlobal.Date = function(c, d, m, b, n, p, g) {
      switch(arguments.length) {
        case 0:
          return new a(h);
        case 1:
          return new a(c);
        case 2:
          return new a(c, d);
        case 3:
          return new a(c, d, m);
        case 4:
          return new a(c, d, m, b);
        case 5:
          return new a(c, d, m, b, n);
        case 6:
          return new a(c, d, m, b, n, p);
        default:
          return new a(c, d, m, b, n, p, g);
      }
    };
    jsGlobal.Date.now = function() {
      return h += 10;
    };
    jsGlobal.Date.UTC = function() {
      return a.UTC.apply(a, arguments);
    };
  };
  (function() {
    function a() {
      this.id = "$weakmap" + h++;
    }
    if ("function" !== typeof jsGlobal.WeakMap) {
      var h = 0;
      a.prototype = {has:function(a) {
        return a.hasOwnProperty(this.id);
      }, get:function(a, e) {
        return a.hasOwnProperty(this.id) ? a[this.id] : e;
      }, set:function(a, e) {
        Object.defineProperty(a, this.id, {value:e, enumerable:!1, configurable:!0});
      }, delete:function(a) {
        delete a[this.id];
      }};
      jsGlobal.WeakMap = a;
    }
  })();
  var a = function() {
    function a() {
      "undefined" !== typeof ShumwayCom && ShumwayCom.getWeakMapKeys ? (this._map = new WeakMap, this._id = 0, this._newAdditions = []) : this._list = [];
    }
    a.prototype.clear = function() {
      this._map ? this._map.clear() : this._list.length = 0;
    };
    a.prototype.push = function(a) {
      this._map ? (this._map.set(a, this._id++), this._newAdditions.forEach(function(e) {
        e.push(a);
      })) : this._list.push(a);
    };
    a.prototype.remove = function(a) {
      this._map ? this._map.delete(a) : this._list[this._list.indexOf(a)] = null;
    };
    a.prototype.forEach = function(a) {
      if (this._map) {
        var e = [];
        this._newAdditions.push(e);
        var c = this._map, d = ShumwayCom.getWeakMapKeys(c);
        d.sort(function(a, g) {
          return c.get(a) - c.get(g);
        });
        d.forEach(function(e) {
          0 !== e._referenceCount && a(e);
        });
        e.forEach(function(e) {
          0 !== e._referenceCount && a(e);
        });
        this._newAdditions.splice(this._newAdditions.indexOf(e), 1);
      } else {
        for (var e = this._list, m = 0, d = 0;d < e.length;d++) {
          var b = e[d];
          b && (0 === b._referenceCount ? (e[d] = null, m++) : a(b));
        }
        if (16 < m && m > e.length >> 2) {
          m = [];
          for (d = 0;d < e.length;d++) {
            (b = e[d]) && 0 < b._referenceCount && m.push(b);
          }
          this._list = m;
        }
      }
    };
    Object.defineProperty(a.prototype, "length", {get:function() {
      return this._map ? -1 : this._list.length;
    }, enumerable:!0, configurable:!0});
    return a;
  }();
  f.WeakList = a;
  var d;
  (function(a) {
    a.pow2 = function(a) {
      return a === (a | 0) ? 0 > a ? 1 / (1 << -a) : 1 << a : Math.pow(2, a);
    };
    a.clamp = function(a, e, c) {
      return Math.max(e, Math.min(c, a));
    };
    a.roundHalfEven = function(a) {
      if (.5 === Math.abs(a % 1)) {
        var e = Math.floor(a);
        return 0 === e % 2 ? e : Math.ceil(a);
      }
      return Math.round(a);
    };
    a.altTieBreakRound = function(a, e) {
      return .5 !== Math.abs(a % 1) || e ? Math.round(a) : a | 0;
    };
    a.epsilonEquals = function(a, e) {
      return 1E-7 > Math.abs(a - e);
    };
  })(d = f.NumberUtilities || (f.NumberUtilities = {}));
  (function(a) {
    a[a.MaxU16 = 65535] = "MaxU16";
    a[a.MaxI16 = 32767] = "MaxI16";
    a[a.MinI16 = -32768] = "MinI16";
  })(f.Numbers || (f.Numbers = {}));
  var c;
  (function(a) {
    function h(a) {
      return 256 * a << 16 >> 16;
    }
    function c(a) {
      return a / 256;
    }
    var d = new ArrayBuffer(8);
    a.i8 = new Int8Array(d);
    a.u8 = new Uint8Array(d);
    a.i32 = new Int32Array(d);
    a.f32 = new Float32Array(d);
    a.f64 = new Float64Array(d);
    a.nativeLittleEndian = 1 === (new Int8Array((new Int32Array([1])).buffer))[0];
    a.floatToInt32 = function(h) {
      a.f32[0] = h;
      return a.i32[0];
    };
    a.int32ToFloat = function(h) {
      a.i32[0] = h;
      return a.f32[0];
    };
    a.swap16 = function(a) {
      return (a & 255) << 8 | a >> 8 & 255;
    };
    a.swap32 = function(a) {
      return (a & 255) << 24 | (a & 65280) << 8 | a >> 8 & 65280 | a >> 24 & 255;
    };
    a.toS8U8 = h;
    a.fromS8U8 = c;
    a.clampS8U8 = function(a) {
      return c(h(a));
    };
    a.toS16 = function(a) {
      return a << 16 >> 16;
    };
    a.bitCount = function(a) {
      a -= a >> 1 & 1431655765;
      a = (a & 858993459) + (a >> 2 & 858993459);
      return 16843009 * (a + (a >> 4) & 252645135) >> 24;
    };
    a.ones = function(a) {
      a -= a >> 1 & 1431655765;
      a = (a & 858993459) + (a >> 2 & 858993459);
      return 16843009 * (a + (a >> 4) & 252645135) >> 24;
    };
    a.trailingZeros = function(h) {
      return a.ones((h & -h) - 1);
    };
    a.getFlags = function(a, e) {
      var h = "";
      for (a = 0;a < e.length;a++) {
        a & 1 << a && (h += e[a] + " ");
      }
      return 0 === h.length ? "" : h.trim();
    };
    a.isPowerOfTwo = function(a) {
      return a && 0 === (a & a - 1);
    };
    a.roundToMultipleOfFour = function(a) {
      return a + 3 & -4;
    };
    a.nearestPowerOfTwo = function(a) {
      a--;
      a |= a >> 1;
      a |= a >> 2;
      a |= a >> 4;
      a |= a >> 8;
      a |= a >> 16;
      a++;
      return a;
    };
    a.roundToMultipleOfPowerOfTwo = function(a, e) {
      var h = (1 << e) - 1;
      return a + h & ~h;
    };
    a.toHEX = function(a) {
      return "0x" + ("00000000" + (0 > a ? 4294967295 + a + 1 : a).toString(16)).substr(-8);
    };
    Math.imul || (Math.imul = function(a, e) {
      var h = a & 65535, c = e & 65535;
      return h * c + ((a >>> 16 & 65535) * c + h * (e >>> 16 & 65535) << 16 >>> 0) | 0;
    });
    Math.clz32 || (Math.clz32 = function(h) {
      h |= h >> 1;
      h |= h >> 2;
      h |= h >> 4;
      h |= h >> 8;
      return 32 - a.ones(h | h >> 16);
    });
  })(c = f.IntegerUtilities || (f.IntegerUtilities = {}));
  (function(a) {
    a[a.Error = 1] = "Error";
    a[a.Warn = 2] = "Warn";
    a[a.Debug = 4] = "Debug";
    a[a.Log = 8] = "Log";
    a[a.Info = 16] = "Info";
    a[a.All = 31] = "All";
  })(f.LogLevel || (f.LogLevel = {}));
  a = function() {
    function a(h, c) {
      void 0 === h && (h = !1);
      this._tab = "  ";
      this._padding = "";
      this._suppressOutput = h;
      this._out = c || a._consoleOut;
      this._outNoNewline = c || a._consoleOutNoNewline;
    }
    Object.defineProperty(a.prototype, "suppressOutput", {get:function() {
      return this._suppressOutput;
    }, set:function(a) {
      this._suppressOutput = a;
    }, enumerable:!0, configurable:!0});
    a.prototype.write = function(a, e) {
      void 0 === a && (a = "");
      void 0 === e && (e = !1);
      this._suppressOutput || this._outNoNewline((e ? this._padding : "") + a);
    };
    a.prototype.writeLn = function(a) {
      void 0 === a && (a = "");
      this._suppressOutput || this._out(this._padding + a);
    };
    a.prototype.writeObject = function(a, e) {
      void 0 === a && (a = "");
      this._suppressOutput || this._out(this._padding + a, e);
    };
    a.prototype.writeTimeLn = function(a) {
      void 0 === a && (a = "");
      this._suppressOutput || this._out(this._padding + performance.now().toFixed(2) + " " + a);
    };
    a.prototype.writeComment = function(a) {
      a = (a || "").split("\n");
      if (1 === a.length) {
        this.writeLn("// " + a[0]);
      } else {
        this.writeLn("/**");
        for (var e = 0;e < a.length;e++) {
          this.writeLn(" * " + a[e]);
        }
        this.writeLn(" */");
      }
    };
    a.prototype.writeLns = function(a) {
      a = (a || "").split("\n");
      for (var e = 0;e < a.length;e++) {
        this.writeLn(a[e]);
      }
    };
    a.prototype.errorLn = function(h) {
      a.logLevel & 1 && this.boldRedLn(h);
    };
    a.prototype.warnLn = function(h) {
      a.logLevel & 2 && this.yellowLn(h);
    };
    a.prototype.debugLn = function(h) {
      a.logLevel & 4 && this.purpleLn(h);
    };
    a.prototype.logLn = function(h) {
      a.logLevel & 8 && this.writeLn(h);
    };
    a.prototype.infoLn = function(h) {
      a.logLevel & 16 && this.writeLn(h);
    };
    a.prototype.yellowLn = function(h) {
      this.colorLn(a.YELLOW, h);
    };
    a.prototype.greenLn = function(h) {
      this.colorLn(a.GREEN, h);
    };
    a.prototype.boldRedLn = function(h) {
      this.colorLn(a.BOLD_RED, h);
    };
    a.prototype.redLn = function(h) {
      this.colorLn(a.RED, h);
    };
    a.prototype.purpleLn = function(h) {
      this.colorLn(a.PURPLE, h);
    };
    a.prototype.colorLn = function(h, c) {
      this._suppressOutput || (inBrowser ? this._out(this._padding + c) : this._out(this._padding + h + c + a.ENDC));
    };
    a.prototype.redLns = function(h) {
      this.colorLns(a.RED, h);
    };
    a.prototype.colorLns = function(a, e) {
      for (var c = (e || "").split("\n"), d = 0;d < c.length;d++) {
        this.colorLn(a, c[d]);
      }
    };
    a.prototype.enter = function(a) {
      this._suppressOutput || this._out(this._padding + a);
      this.indent();
    };
    a.prototype.leaveAndEnter = function(a) {
      this.leave(a);
      this.indent();
    };
    a.prototype.leave = function(a) {
      this.outdent();
      !this._suppressOutput && a && this._out(this._padding + a);
    };
    a.prototype.indent = function() {
      this._padding += this._tab;
    };
    a.prototype.outdent = function() {
      0 < this._padding.length && (this._padding = this._padding.substring(0, this._padding.length - this._tab.length));
    };
    a.prototype.writeArray = function(a, e, c) {
      void 0 === e && (e = !1);
      void 0 === c && (c = !1);
      e = e || !1;
      for (var d = 0, m = a.length;d < m;d++) {
        var b = "";
        e && (b = null === a[d] ? "null" : void 0 === a[d] ? "undefined" : a[d].constructor.name, b += " ");
        var p = c ? "" : ("" + d).padRight(" ", 4);
        this.writeLn(p + b + a[d]);
      }
    };
    a.PURPLE = "\u001b[94m";
    a.YELLOW = "\u001b[93m";
    a.GREEN = "\u001b[92m";
    a.RED = "\u001b[91m";
    a.BOLD_RED = "\u001b[1;91m";
    a.ENDC = "\u001b[0m";
    a.logLevel = 31;
    a._consoleOut = console.log.bind(console);
    a._consoleOutNoNewline = console.log.bind(console);
    return a;
  }();
  f.IndentingWriter = a;
  a = function() {
    function a(e, c) {
      void 0 === c && (c = 12);
      this.start = this.index = 0;
      this._size = 1 << c;
      this._mask = this._size - 1;
      this.array = new e(this._size);
    }
    a.prototype.get = function(a) {
      return this.array[a];
    };
    a.prototype.forEachInReverse = function(a) {
      if (!this.isEmpty()) {
        for (var e = 0 === this.index ? this._size - 1 : this.index - 1, c = this.start - 1 & this._mask;e !== c && !a(this.array[e], e);) {
          e = 0 === e ? this._size - 1 : e - 1;
        }
      }
    };
    a.prototype.write = function(a) {
      this.array[this.index] = a;
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
  f.CircularBuffer = a;
  a = function() {
    function a() {
    }
    a.randomStyle = function() {
      a._randomStyleCache || (a._randomStyleCache = "#ff5e3a #ff9500 #ffdb4c #87fc70 #52edc7 #1ad6fd #c644fc #ef4db6 #4a4a4a #dbddde #ff3b30 #ff9500 #ffcc00 #4cd964 #34aadc #007aff #5856d6 #ff2d55 #8e8e93 #c7c7cc #5ad427 #c86edf #d1eefc #e0f8d8 #fb2b69 #f7f7f7 #1d77ef #d6cec3 #55efcb #ff4981 #ffd3e0 #f7f7f7 #ff1300 #1f1f21 #bdbec2 #ff3a2d".split(" "));
      return a._randomStyleCache[a._nextStyle++ % a._randomStyleCache.length];
    };
    a.gradientColor = function(h) {
      return a._gradient[a._gradient.length * d.clamp(h, 0, 1) | 0];
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
  f.ColorStyle = a;
  a = function() {
    function a(e, c, d, m) {
      this.xMin = e | 0;
      this.yMin = c | 0;
      this.xMax = d | 0;
      this.yMax = m | 0;
    }
    a.FromUntyped = function(h) {
      return new a(h.xMin, h.yMin, h.xMax, h.yMax);
    };
    a.FromRectangle = function(h) {
      return new a(20 * h.x | 0, 20 * h.y | 0, 20 * (h.x + h.width) | 0, 20 * (h.y + h.height) | 0);
    };
    a.prototype.setElements = function(a, e, c, d) {
      this.xMin = a;
      this.yMin = e;
      this.xMax = c;
      this.yMax = d;
    };
    a.prototype.copyFrom = function(a) {
      this.setElements(a.xMin, a.yMin, a.xMax, a.yMax);
    };
    a.prototype.contains = function(a, e) {
      return a < this.xMin !== a < this.xMax && e < this.yMin !== e < this.yMax;
    };
    a.prototype.unionInPlace = function(a) {
      a.isEmpty() || (this.extendByPoint(a.xMin, a.yMin), this.extendByPoint(a.xMax, a.yMax));
    };
    a.prototype.extendByPoint = function(a, e) {
      this.extendByX(a);
      this.extendByY(e);
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
      var e = Math.abs(Math.cos(a));
      a = Math.abs(Math.sin(a));
      return e * (this.xMax - this.xMin) + a * (this.yMax - this.yMin);
    };
    a.prototype.getBaseHeight = function(a) {
      var e = Math.abs(Math.cos(a));
      return Math.abs(Math.sin(a)) * (this.xMax - this.xMin) + e * (this.yMax - this.yMin);
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
  f.Bounds = a;
  a = function() {
    function a(e, c, d, m) {
      B.assert(l(e));
      B.assert(l(c));
      B.assert(l(d));
      B.assert(l(m));
      this._xMin = e | 0;
      this._yMin = c | 0;
      this._xMax = d | 0;
      this._yMax = m | 0;
    }
    a.FromUntyped = function(h) {
      return new a(h.xMin, h.yMin, h.xMax, h.yMax);
    };
    a.FromRectangle = function(h) {
      return new a(20 * h.x | 0, 20 * h.y | 0, 20 * (h.x + h.width) | 0, 20 * (h.y + h.height) | 0);
    };
    a.prototype.setElements = function(a, e, c, d) {
      this.xMin = a;
      this.yMin = e;
      this.xMax = c;
      this.yMax = d;
    };
    a.prototype.copyFrom = function(a) {
      this.setElements(a.xMin, a.yMin, a.xMax, a.yMax);
    };
    a.prototype.contains = function(a, e) {
      return a < this.xMin !== a < this.xMax && e < this.yMin !== e < this.yMax;
    };
    a.prototype.unionInPlace = function(a) {
      a.isEmpty() || (this.extendByPoint(a.xMin, a.yMin), this.extendByPoint(a.xMax, a.yMax));
    };
    a.prototype.extendByPoint = function(a, e) {
      this.extendByX(a);
      this.extendByY(e);
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
      B.assert(l(a));
      this._xMin = a;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(a.prototype, "yMin", {get:function() {
      return this._yMin;
    }, set:function(a) {
      B.assert(l(a));
      this._yMin = a | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(a.prototype, "xMax", {get:function() {
      return this._xMax;
    }, set:function(a) {
      B.assert(l(a));
      this._xMax = a | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(a.prototype, "width", {get:function() {
      return this._xMax - this._xMin;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(a.prototype, "yMax", {get:function() {
      return this._yMax;
    }, set:function(a) {
      B.assert(l(a));
      this._yMax = a | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(a.prototype, "height", {get:function() {
      return this._yMax - this._yMin;
    }, enumerable:!0, configurable:!0});
    a.prototype.getBaseWidth = function(a) {
      var e = Math.abs(Math.cos(a));
      a = Math.abs(Math.sin(a));
      return e * (this._xMax - this._xMin) + a * (this._yMax - this._yMin);
    };
    a.prototype.getBaseHeight = function(a) {
      var e = Math.abs(Math.cos(a));
      return Math.abs(Math.sin(a)) * (this._xMax - this._xMin) + e * (this._yMax - this._yMin);
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
  f.DebugBounds = a;
  a = function() {
    function a(e, c, d, m) {
      this.r = e;
      this.g = c;
      this.b = d;
      this.a = m;
    }
    a.FromARGB = function(c) {
      return new a((c >> 16 & 255) / 255, (c >> 8 & 255) / 255, (c >> 0 & 255) / 255, (c >> 24 & 255) / 255);
    };
    a.FromRGBA = function(c) {
      return a.FromARGB(m.RGBAToARGB(c));
    };
    a.prototype.toRGBA = function() {
      return 255 * this.r << 24 | 255 * this.g << 16 | 255 * this.b << 8 | 255 * this.a;
    };
    a.prototype.toCSSStyle = function() {
      return m.rgbaToCSSStyle(this.toRGBA());
    };
    a.prototype.set = function(a) {
      this.r = a.r;
      this.g = a.g;
      this.b = a.b;
      this.a = a.a;
    };
    a.randomColor = function(c) {
      void 0 === c && (c = 1);
      return new a(Math.random(), Math.random(), Math.random(), c);
    };
    a.parseColor = function(c) {
      a.colorCache || (a.colorCache = Object.create(null));
      if (a.colorCache[c]) {
        return a.colorCache[c];
      }
      var d = document.createElement("span");
      document.body.appendChild(d);
      d.style.backgroundColor = c;
      var m = getComputedStyle(d).backgroundColor;
      document.body.removeChild(d);
      (d = /^rgb\((\d+), (\d+), (\d+)\)$/.exec(m)) || (d = /^rgba\((\d+), (\d+), (\d+), ([\d.]+)\)$/.exec(m));
      m = new a(0, 0, 0, 0);
      m.r = parseFloat(d[1]) / 255;
      m.g = parseFloat(d[2]) / 255;
      m.b = parseFloat(d[3]) / 255;
      m.a = d[4] ? parseFloat(d[4]) / 255 : 1;
      return a.colorCache[c] = m;
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
  f.Color = a;
  var m;
  (function(a) {
    function d(a) {
      var g = a >> 0 & 255, c = a >> 8 & 255, e = a >> 24 & 255;
      a = (Math.imul(a >> 16 & 255, e) + 127) / 255 | 0;
      c = (Math.imul(c, e) + 127) / 255 | 0;
      g = (Math.imul(g, e) + 127) / 255 | 0;
      return e << 24 | a << 16 | c << 8 | g;
    }
    function m() {
      if (!k) {
        k = new Uint8Array(65536);
        for (var a = 0;256 > a;a++) {
          for (var g = 0;256 > g;g++) {
            k[(g << 8) + a] = Math.imul(255, a) / g;
          }
        }
      }
    }
    a.RGBAToARGB = function(a) {
      return a >> 8 & 16777215 | (a & 255) << 24;
    };
    a.ARGBToRGBA = function(a) {
      return a << 8 | a >> 24 & 255;
    };
    var q = new b(1024);
    a.rgbaToCSSStyle = function(a) {
      var g = q.get(a);
      if ("string" === typeof g) {
        return g;
      }
      g = f.StringUtilities.concat9("rgba(", a >> 24 & 255, ",", a >> 16 & 255, ",", a >> 8 & 255, ",", (a & 255) / 255, ")");
      q.set(a, g);
      return g;
    };
    var D = new b(1024);
    a.cssStyleToRGBA = function(a) {
      var g = D.get(a);
      if ("number" === typeof g) {
        return g;
      }
      g = 4278190335;
      if ("#" === a[0]) {
        7 === a.length && (g = parseInt(a.substring(1), 16) << 8 | 255);
      } else {
        if ("r" === a[0]) {
          var c = a.substring(5, a.length - 1).split(","), g = parseInt(c[0]), e = parseInt(c[1]), d = parseInt(c[2]), c = parseFloat(c[3]), g = (g & 255) << 24 | (e & 255) << 16 | (d & 255) << 8 | 255 * c & 255
        }
      }
      D.set(a, g);
      return g;
    };
    a.hexToRGB = function(a) {
      return parseInt(a.slice(1), 16);
    };
    a.rgbToHex = function(a) {
      return "#" + ("000000" + (a >>> 0).toString(16)).slice(-6);
    };
    a.isValidHexColor = function(a) {
      return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(a);
    };
    a.clampByte = function(a) {
      return Math.max(0, Math.min(255, a));
    };
    a.unpremultiplyARGB = function(a) {
      var g = a >> 0 & 255, c = a >> 8 & 255, e = a >> 24 & 255;
      a = Math.imul(255, a >> 16 & 255) / e & 255;
      c = Math.imul(255, c) / e & 255;
      g = Math.imul(255, g) / e & 255;
      return e << 24 | a << 16 | c << 8 | g;
    };
    a.premultiplyARGB = d;
    var k;
    a.ensureUnpremultiplyTable = m;
    a.getUnpremultiplyTable = function() {
      m();
      return k;
    };
    a.tableLookupUnpremultiplyARGB = function(a) {
      a |= 0;
      var g = a >> 24 & 255;
      if (0 === g) {
        return 0;
      }
      if (255 === g) {
        return a;
      }
      var c, e, d = g << 8, h = k;
      e = h[d + (a >> 16 & 255)];
      c = h[d + (a >> 8 & 255)];
      a = h[d + (a >> 0 & 255)];
      return g << 24 | e << 16 | c << 8 | a;
    };
    a.blendPremultipliedBGRA = function(a, g) {
      var c = g & 16711935, e = g >> 8 & 16711935, d, h = a >> 8 & 16711935, m = 256 - (g & 255);
      d = Math.imul(a & 16711935, m) >> 8;
      h = Math.imul(h, m) >> 8;
      return (e + h & 16711935) << 8 | c + d & 16711935;
    };
    var x = c.swap32;
    a.convertImage = function(a, g, c, e) {
      var m = c.length;
      if (a === g) {
        if (c !== e) {
          for (a = 0;a < m;a++) {
            e[a] = c[a];
          }
        }
      } else {
        if (1 === a && 3 === g) {
          for (f.ColorUtilities.ensureUnpremultiplyTable(), a = 0;a < m;a++) {
            var b = c[a];
            g = b & 255;
            if (0 === g) {
              e[a] = 0;
            } else {
              if (255 === g) {
                e[a] = 4278190080 | b >> 8 & 16777215;
              } else {
                var A = b >> 24 & 255, C = b >> 16 & 255, b = b >> 8 & 255, q = g << 8, L = k, b = L[q + b], C = L[q + C], A = L[q + A];
                e[a] = g << 24 | A << 16 | C << 8 | b;
              }
            }
          }
        } else {
          if (2 === a && 3 === g) {
            for (a = 0;a < m;a++) {
              e[a] = x(c[a]);
            }
          } else {
            if (3 === a && 1 === g) {
              for (a = 0;a < m;a++) {
                g = c[a], e[a] = x(d(g & 4278255360 | g >> 16 & 255 | (g & 255) << 16));
              }
            } else {
              for (B.somewhatImplemented("Image Format Conversion: " + n[a] + " -> " + n[g]), a = 0;a < m;a++) {
                e[a] = c[a];
              }
            }
          }
        }
      }
    };
  })(m = f.ColorUtilities || (f.ColorUtilities = {}));
  a = function() {
    function a(c) {
      void 0 === c && (c = 32);
      this._list = [];
      this._maxSize = c;
    }
    a.prototype.acquire = function(c) {
      if (a._enabled) {
        for (var d = this._list, m = 0;m < d.length;m++) {
          var b = d[m];
          if (b.byteLength >= c) {
            return d.splice(m, 1), b;
          }
        }
      }
      return new ArrayBuffer(c);
    };
    a.prototype.release = function(c) {
      if (a._enabled) {
        var d = this._list;
        d.length === this._maxSize && d.shift();
        d.push(c);
      }
    };
    a.prototype.ensureUint8ArrayLength = function(a, c) {
      if (a.length >= c) {
        return a;
      }
      var e = Math.max(a.length + c, (3 * a.length >> 1) + 1), e = new Uint8Array(this.acquire(e), 0, e);
      e.set(a);
      this.release(a.buffer);
      return e;
    };
    a.prototype.ensureFloat64ArrayLength = function(a, c) {
      if (a.length >= c) {
        return a;
      }
      var e = Math.max(a.length + c, (3 * a.length >> 1) + 1), e = new Float64Array(this.acquire(e * Float64Array.BYTES_PER_ELEMENT), 0, e);
      e.set(a);
      this.release(a.buffer);
      return e;
    };
    a._enabled = !0;
    return a;
  }();
  f.ArrayBufferPool = a;
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
    (function(a) {
      a[a.LoadSource = 0] = "LoadSource";
      a[a.LoadWhitelistAllowed = 1] = "LoadWhitelistAllowed";
      a[a.LoadWhitelistDenied = 2] = "LoadWhitelistDenied";
      a[a.StreamAllowed = 3] = "StreamAllowed";
      a[a.StreamDenied = 4] = "StreamDenied";
      a[a.StreamCrossdomain = 5] = "StreamCrossdomain";
    })(a.LoadResource || (a.LoadResource = {}));
    a.instance;
  })(f.Telemetry || (f.Telemetry = {}));
  (function(a) {
    a.instance;
  })(f.FileLoadingService || (f.FileLoadingService = {}));
  (function(a) {
    a[a.BuiltinAbc = 0] = "BuiltinAbc";
    a[a.PlayerglobalAbcs = 1] = "PlayerglobalAbcs";
    a[a.PlayerglobalManifest = 2] = "PlayerglobalManifest";
    a[a.ShellAbc = 3] = "ShellAbc";
  })(f.SystemResourceId || (f.SystemResourceId = {}));
  (function(a) {
    a.instance;
  })(f.SystemResourcesLoadingService || (f.SystemResourcesLoadingService = {}));
  f.registerCSSFont = function(a, c, d) {
    if (inBrowser) {
      var m = document.head;
      m.insertBefore(document.createElement("style"), m.firstChild);
      m = document.styleSheets[0];
      c = "@font-face{font-family:swffont" + a + ";src:url(data:font/opentype;base64," + f.StringUtilities.base64ArrayBuffer(c.buffer) + ")}";
      m.insertRule(c, m.cssRules.length);
      d && (d = document.createElement("div"), d.style.fontFamily = "swffont" + a, d.innerHTML = "hello", document.body.appendChild(d), document.body.removeChild(d));
    } else {
      B.warning("Cannot register CSS font outside the browser");
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
  })(f.ExternalInterfaceService || (f.ExternalInterfaceService = {}));
  (function(a) {
    a[a.InvalidCallback = -3] = "InvalidCallback";
    a[a.AlreadyTaken = -2] = "AlreadyTaken";
    a[a.InvalidName = -1] = "InvalidName";
    a[a.Success = 0] = "Success";
  })(f.LocalConnectionConnectResult || (f.LocalConnectionConnectResult = {}));
  (function(a) {
    a[a.NotConnected = -1] = "NotConnected";
    a[a.Success = 0] = "Success";
  })(f.LocalConnectionCloseResult || (f.LocalConnectionCloseResult = {}));
  (function(a) {
    a.instance;
  })(f.LocalConnectionService || (f.LocalConnectionService = {}));
  (function(a) {
    a.instance = {setClipboard:function(a) {
    }};
  })(f.ClipboardService || (f.ClipboardService = {}));
  a = function() {
    function a() {
      this._queues = {};
    }
    a.prototype.register = function(a, c) {
      B.assert(a);
      B.assert(c);
      var d = this._queues[a];
      if (d) {
        if (-1 < d.indexOf(c)) {
          return;
        }
      } else {
        d = this._queues[a] = [];
      }
      d.push(c);
    };
    a.prototype.unregister = function(a, c) {
      B.assert(a);
      B.assert(c);
      var d = this._queues[a];
      if (d) {
        var e = d.indexOf(c);
        -1 !== e && d.splice(e, 1);
        0 === d.length && (this._queues[a] = null);
      }
    };
    a.prototype.notify = function(a, c) {
      var d = this._queues[a];
      if (d) {
        d = d.slice();
        c = Array.prototype.slice.call(arguments, 0);
        for (var e = 0;e < d.length;e++) {
          d[e].apply(null, c);
        }
      }
    };
    a.prototype.notify1 = function(a, c) {
      var d = this._queues[a];
      if (d) {
        for (var d = d.slice(), e = 0;e < d.length;e++) {
          (0,d[e])(a, c);
        }
      }
    };
    return a;
  }();
  f.Callback = a;
  (function(a) {
    a[a.None = 0] = "None";
    a[a.PremultipliedAlphaARGB = 1] = "PremultipliedAlphaARGB";
    a[a.StraightAlphaARGB = 2] = "StraightAlphaARGB";
    a[a.StraightAlphaRGBA = 3] = "StraightAlphaRGBA";
    a[a.JPEG = 4] = "JPEG";
    a[a.PNG = 5] = "PNG";
    a[a.GIF = 6] = "GIF";
  })(f.ImageType || (f.ImageType = {}));
  var n = f.ImageType;
  f.getMIMETypeForImageType = function(a) {
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
  })(f.UI || (f.UI = {}));
  a = function() {
    function a() {
      this.promise = new Promise(function(a, c) {
        this.resolve = a;
        this.reject = c;
      }.bind(this));
    }
    a.prototype.then = function(a, c) {
      return this.promise.then(a, c);
    };
    return a;
  }();
  f.PromiseWrapper = a;
})(Shumway || (Shumway = {}));
"undefined" !== typeof exports && (exports.Shumway = Shumway);
(function() {
  function f(f, k, z) {
    f[k] || Object.defineProperty(f, k, {value:z, writable:!0, configurable:!0, enumerable:!1});
  }
  f(String.prototype, "padRight", function(f, k) {
    var z = this, v = z.replace(/\033\[[0-9]*m/g, "").length;
    if (!f || v >= k) {
      return z;
    }
    for (var v = (k - v) / f.length, B = 0;B < v;B++) {
      z += f;
    }
    return z;
  });
  f(String.prototype, "padLeft", function(f, k) {
    var z = this, v = z.length;
    if (!f || v >= k) {
      return z;
    }
    for (var v = (k - v) / f.length, B = 0;B < v;B++) {
      z = f + z;
    }
    return z;
  });
  f(String.prototype, "trim", function() {
    return this.replace(/^\s+|\s+$/g, "");
  });
  f(String.prototype, "endsWith", function(f) {
    return -1 !== this.indexOf(f, this.length - f.length);
  });
  f(Array.prototype, "replace", function(f, k) {
    if (f === k) {
      return 0;
    }
    for (var z = 0, v = 0;v < this.length;v++) {
      this[v] === f && (this[v] = k, z++);
    }
    return z;
  });
})();
(function(f) {
  (function(k) {
    var l = f.isObject, v = function() {
      function a(a, c, m, b) {
        this.shortName = a;
        this.longName = c;
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
    k.Argument = v;
    var B = function() {
      function a() {
        this.args = [];
      }
      a.prototype.addArgument = function(a, c, m, b) {
        a = new v(a, c, m, b);
        this.args.push(a);
        return a;
      };
      a.prototype.addBoundOption = function(a) {
        this.args.push(new v(a.shortName, a.longName, a.type, {parse:function(c) {
          a.value = c;
        }}));
      };
      a.prototype.addBoundOptionSet = function(a) {
        var c = this;
        a.options.forEach(function(a) {
          b.isOptionSet(a) ? c.addBoundOptionSet(a) : c.addBoundOption(a);
        });
      };
      a.prototype.getUsage = function() {
        var a = "";
        this.args.forEach(function(c) {
          a = c.positional ? a + c.longName : a + ("[-" + c.shortName + "|--" + c.longName + ("boolean" === c.type ? "" : " " + c.type[0].toUpperCase()) + "]");
          a += " ";
        });
        return a;
      };
      a.prototype.parse = function(a) {
        var c = {}, m = [];
        this.args.forEach(function(a) {
          a.positional ? m.push(a) : (c["-" + a.shortName] = a, c["--" + a.longName] = a);
        });
        for (var b = [];a.length;) {
          var e = a.shift(), h = null, q = e;
          if ("--" == e) {
            b = b.concat(a);
            break;
          } else {
            if ("-" == e.slice(0, 1) || "--" == e.slice(0, 2)) {
              h = c[e];
              if (!h) {
                continue;
              }
              q = "boolean" !== h.type ? a.shift() : a.length && 0 <= "yes no true false t f".split(" ").indexOf(a[0]) ? 0 <= ["yes", "true", "t"].indexOf(a.shift()) : !0;
            } else {
              m.length ? h = m.shift() : b.push(q);
            }
          }
          h && h.parse(q);
        }
        return b;
      };
      return a;
    }();
    k.ArgumentParser = B;
    var b = function() {
      function a(a, c) {
        void 0 === c && (c = null);
        this.open = !1;
        this.name = a;
        this.settings = c || {};
        this.options = [];
      }
      a.isOptionSet = function(d) {
        return d instanceof a ? !0 : "object" !== typeof d || null === d || d instanceof q ? !1 : "options" in d && "name" in d && "settings" in d;
      };
      a.prototype.register = function(d) {
        if (a.isOptionSet(d)) {
          for (var c = 0;c < this.options.length;c++) {
            var m = this.options[c];
            if (a.isOptionSet(m) && m.name === d.name) {
              return m;
            }
          }
        }
        this.options.push(d);
        if (this.settings) {
          if (a.isOptionSet(d)) {
            c = this.settings[d.name], l(c) && (d.settings = c.settings, d.open = c.open);
          } else {
            if ("undefined" !== typeof this.settings[d.longName]) {
              switch(d.type) {
                case "boolean":
                  d.value = !!this.settings[d.longName];
                  break;
                case "number":
                  d.value = +this.settings[d.longName];
                  break;
                default:
                  d.value = this.settings[d.longName];
              }
            }
          }
        }
        return d;
      };
      a.prototype.trace = function(a) {
        a.enter(this.name + " {");
        this.options.forEach(function(c) {
          c.trace(a);
        });
        a.leave("}");
      };
      a.prototype.getSettings = function() {
        var d = {};
        this.options.forEach(function(c) {
          a.isOptionSet(c) ? d[c.name] = {settings:c.getSettings(), open:c.open} : d[c.longName] = c.value;
        });
        return d;
      };
      a.prototype.setSettings = function(d) {
        d && this.options.forEach(function(c) {
          a.isOptionSet(c) ? c.name in d && c.setSettings(d[c.name].settings) : c.longName in d && (c.value = d[c.longName]);
        });
      };
      return a;
    }();
    k.OptionSet = b;
    var q = function() {
      function a(a, c, m, b, e, h) {
        void 0 === h && (h = null);
        this.longName = c;
        this.shortName = a;
        this.type = m;
        this.value = this.defaultValue = b;
        this.description = e;
        this.config = h;
      }
      a.prototype.parse = function(a) {
        this.value = a;
      };
      a.prototype.trace = function(a) {
        a.writeLn(("-" + this.shortName + "|--" + this.longName).padRight(" ", 30) + " = " + this.type + " " + this.value + " [" + this.defaultValue + "] (" + this.description + ")");
      };
      return a;
    }();
    k.Option = q;
  })(f.Options || (f.Options = {}));
  (function(k) {
    k.ROOT = "Shumway Options";
    k.shumwayOptions = new f.Options.OptionSet(k.ROOT);
    k.setSettings = function(f) {
      k.shumwayOptions.setSettings(f);
    };
    k.getSettings = function() {
      return k.shumwayOptions.getSettings();
    };
  })(f.Settings || (f.Settings = {}));
  var l = f.Options.Option;
  f.loggingOptions = f.Settings.shumwayOptions.register(new f.Options.OptionSet("Logging Options"));
  f.omitRepeatedWarnings = f.loggingOptions.register(new l("wo", "warnOnce", "boolean", !0, "Omit Repeated Warnings"));
  (function(k) {
    var l = function() {
      function k(B, b) {
        this._parent = B;
        this._timers = f.ObjectUtilities.createMap();
        this._name = b;
        this._count = this._total = this._last = this._begin = 0;
      }
      k.time = function(f, b) {
        k.start(f);
        b();
        k.stop();
      };
      k.start = function(f) {
        k._top = k._top._timers[f] || (k._top._timers[f] = new k(k._top, f));
        k._top.start();
        f = k._flat._timers[f] || (k._flat._timers[f] = new k(k._flat, f));
        f.start();
        k._flatStack.push(f);
      };
      k.stop = function() {
        k._top.stop();
        k._top = k._top._parent;
        k._flatStack.pop().stop();
      };
      k.stopStart = function(f) {
        k.stop();
        k.start(f);
      };
      k.prototype.start = function() {
        this._begin = f.getTicks();
      };
      k.prototype.stop = function() {
        this._last = f.getTicks() - this._begin;
        this._total += this._last;
        this._count += 1;
      };
      k.prototype.toJSON = function() {
        return {name:this._name, total:this._total, timers:this._timers};
      };
      k.prototype.trace = function(f) {
        f.enter(this._name + ": " + this._total.toFixed(2) + " ms, count: " + this._count + ", average: " + (this._total / this._count).toFixed(2) + " ms");
        for (var b in this._timers) {
          this._timers[b].trace(f);
        }
        f.outdent();
      };
      k.trace = function(f) {
        k._base.trace(f);
        k._flat.trace(f);
      };
      k._base = new k(null, "Total");
      k._top = k._base;
      k._flat = new k(null, "Flat");
      k._flatStack = [];
      return k;
    }();
    k.Timer = l;
    l = function() {
      function k(f) {
        this._enabled = f;
        this.clear();
      }
      Object.defineProperty(k.prototype, "counts", {get:function() {
        return this._counts;
      }, enumerable:!0, configurable:!0});
      k.prototype.setEnabled = function(f) {
        this._enabled = f;
      };
      k.prototype.clear = function() {
        this._counts = f.ObjectUtilities.createMap();
        this._times = f.ObjectUtilities.createMap();
      };
      k.prototype.toJSON = function() {
        return {counts:this._counts, times:this._times};
      };
      k.prototype.count = function(f, b, q) {
        void 0 === b && (b = 1);
        void 0 === q && (q = 0);
        if (this._enabled) {
          return void 0 === this._counts[f] && (this._counts[f] = 0, this._times[f] = 0), this._counts[f] += b, this._times[f] += q, this._counts[f];
        }
      };
      k.prototype.trace = function(f) {
        for (var b in this._counts) {
          f.writeLn(b + ": " + this._counts[b]);
        }
      };
      k.prototype._pairToString = function(f, b) {
        var q = b[0], a = b[1], d = f[q], q = q + ": " + a;
        d && (q += ", " + d.toFixed(4), 1 < a && (q += " (" + (d / a).toFixed(4) + ")"));
        return q;
      };
      k.prototype.toStringSorted = function() {
        var f = this, b = this._times, q = [], a;
        for (a in this._counts) {
          q.push([a, this._counts[a]]);
        }
        q.sort(function(a, c) {
          return c[1] - a[1];
        });
        return q.map(function(a) {
          return f._pairToString(b, a);
        }).join(", ");
      };
      k.prototype.traceSorted = function(f, b) {
        void 0 === b && (b = !1);
        var q = this, a = this._times, d = [], c;
        for (c in this._counts) {
          d.push([c, this._counts[c]]);
        }
        d.sort(function(a, c) {
          return c[1] - a[1];
        });
        b ? f.writeLn(d.map(function(c) {
          return q._pairToString(a, c);
        }).join(", ")) : d.forEach(function(c) {
          f.writeLn(q._pairToString(a, c));
        });
      };
      k.instance = new k(!0);
      return k;
    }();
    k.Counter = l;
    l = function() {
      function f(k) {
        this._samples = new Float64Array(k);
        this._index = this._count = 0;
      }
      f.prototype.push = function(f) {
        this._count < this._samples.length && this._count++;
        this._index++;
        this._samples[this._index % this._samples.length] = f;
      };
      f.prototype.average = function() {
        for (var f = 0, b = 0;b < this._count;b++) {
          f += this._samples[b];
        }
        return f / this._count;
      };
      return f;
    }();
    k.Average = l;
  })(f.Metrics || (f.Metrics = {}));
})(Shumway || (Shumway = {}));
var __extends = this.__extends || function(f, l) {
  function k() {
    this.constructor = f;
  }
  for (var z in l) {
    l.hasOwnProperty(z) && (f[z] = l[z]);
  }
  k.prototype = l.prototype;
  f.prototype = new k;
};
(function(f) {
  (function(b) {
    function q(a) {
      for (var g = Math.max.apply(null, a), c = a.length, d = 1 << g, e = new Uint32Array(d), u = g << 16 | 65535, h = 0;h < d;h++) {
        e[h] = u;
      }
      for (var u = 0, h = 1, r = 2;h <= g;u <<= 1, ++h, r <<= 1) {
        for (var m = 0;m < c;++m) {
          if (a[m] === h) {
            for (var w = 0, p = 0;p < h;++p) {
              w = 2 * w + (u >> p & 1);
            }
            for (p = w;p < d;p += r) {
              e[p] = h << 16 | m;
            }
            ++u;
          }
        }
      }
      return {codes:e, maxBits:g};
    }
    function a(a) {
      for (var g = new Uint16Array(a), c = 0;c < a;c++) {
        g[c] = 1024;
      }
      return g;
    }
    function d(a, g, c, d) {
      for (var e = 1, u = 0, h = 0;h < c;h++) {
        var r = d.decodeBit(a, e + g), e = (e << 1) + r, u = u | r << h
      }
      return u;
    }
    function c(a, g) {
      var c = [];
      c.length = g;
      for (var d = 0;d < g;d++) {
        c[d] = new L(a);
      }
      return c;
    }
    function m(a) {
      return "string" === typeof a ? a : void 0 == a ? null : a + "";
    }
    var n;
    (function(a) {
      a[a.INIT = 0] = "INIT";
      a[a.BLOCK_0 = 1] = "BLOCK_0";
      a[a.BLOCK_1 = 2] = "BLOCK_1";
      a[a.BLOCK_2_PRE = 3] = "BLOCK_2_PRE";
      a[a.BLOCK_2 = 4] = "BLOCK_2";
      a[a.DONE = 5] = "DONE";
      a[a.ERROR = 6] = "ERROR";
      a[a.VERIFY_HEADER = 7] = "VERIFY_HEADER";
    })(n || (n = {}));
    n = function() {
      function a(g) {
      }
      a.prototype.push = function(a) {
      };
      a.prototype.close = function() {
      };
      a.create = function(a) {
        return "undefined" !== typeof ShumwayCom && ShumwayCom.createSpecialInflate ? new r(a, ShumwayCom.createSpecialInflate) : new e(a);
      };
      a.prototype._processZLibHeader = function(a, g, c) {
        if (g + 2 > c) {
          return 0;
        }
        a = a[g] << 8 | a[g + 1];
        g = null;
        2048 !== (a & 3840) ? g = "inflate: unknown compression method" : 0 !== a % 31 ? g = "inflate: bad FCHECK" : 0 !== (a & 32) && (g = "inflate: FDICT bit set");
        if (g) {
          if (this.onError) {
            this.onError(g);
          }
          return -1;
        }
        return 2;
      };
      a.inflate = function(g, c, d) {
        var e = new Uint8Array(c), u = 0;
        c = a.create(d);
        c.onData = function(a) {
          var g = Math.min(a.length, e.length - u);
          g && b.memCopy(e, a, u, 0, g);
          u += g;
        };
        c.onError = function(a) {
          throw Error(a);
        };
        c.push(g);
        c.close();
        return e;
      };
      return a;
    }();
    b.Inflate = n;
    var e = function(a) {
      function c(d) {
        a.call(this, d);
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
        if (!g) {
          h = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
          k = new Uint16Array(30);
          l = new Uint8Array(30);
          for (var e = d = 0, u = 1;30 > d;++d) {
            k[d] = u, u += 1 << (l[d] = ~~((e += 2 < d ? 1 : 0) / 2));
          }
          var r = new Uint8Array(288);
          for (d = 0;32 > d;++d) {
            r[d] = 5;
          }
          D = q(r.subarray(0, 32));
          B = new Uint16Array(29);
          x = new Uint8Array(29);
          e = d = 0;
          for (u = 3;29 > d;++d) {
            B[d] = u - (28 == d ? 1 : 0), u += 1 << (x[d] = ~~((e += 4 < d ? 1 : 0) / 4 % 6));
          }
          for (d = 0;288 > d;++d) {
            r[d] = 144 > d || 279 < d ? 8 : 256 > d ? 9 : 7;
          }
          p = q(r);
          g = !0;
        }
      }
      __extends(c, a);
      c.prototype.push = function(a) {
        if (!this._buffer || this._buffer.length < this._bufferSize + a.length) {
          var g = new Uint8Array(this._bufferSize + a.length);
          this._buffer && g.set(this._buffer);
          this._buffer = g;
        }
        this._buffer.set(a, this._bufferSize);
        this._bufferSize += a.length;
        this._bufferPosition = 0;
        a = !1;
        do {
          g = this._windowPosition;
          if (0 === this._state && (a = this._decodeInitState())) {
            break;
          }
          switch(this._state) {
            case 1:
              a = this._decodeBlock0();
              break;
            case 3:
              if (a = this._decodeBlock2Pre()) {
                break;
              }
            ;
            case 2:
            ;
            case 4:
              a = this._decodeBlock();
              break;
            case 6:
            ;
            case 5:
              this._bufferPosition = this._bufferSize;
              break;
            case 7:
              var c = this._processZLibHeader(this._buffer, this._bufferPosition, this._bufferSize);
              0 < c ? (this._bufferPosition += c, this._state = 0) : 0 === c ? a = !0 : this._state = 6;
          }
          if (0 < this._windowPosition - g) {
            this.onData(this._window.subarray(g, this._windowPosition));
          }
          65536 <= this._windowPosition && ("copyWithin" in this._buffer ? this._window.copyWithin(0, this._windowPosition - 32768, this._windowPosition) : this._window.set(this._window.subarray(this._windowPosition - 32768, this._windowPosition)), this._windowPosition = 32768);
        } while (!a && this._bufferPosition < this._bufferSize);
        this._bufferPosition < this._bufferSize ? ("copyWithin" in this._buffer ? this._buffer.copyWithin(0, this._bufferPosition, this._bufferSize) : this._buffer.set(this._buffer.subarray(this._bufferPosition, this._bufferSize)), this._bufferSize -= this._bufferPosition) : this._bufferSize = 0;
      };
      c.prototype._decodeInitState = function() {
        if (this._isFinalBlock) {
          return this._state = 5, !1;
        }
        var a = this._buffer, g = this._bufferSize, c = this._bitBuffer, d = this._bitLength, e = this._bufferPosition;
        if (3 > (g - e << 3) + d) {
          return !0;
        }
        3 > d && (c |= a[e++] << d, d += 8);
        var u = c & 7, c = c >> 3, d = d - 3;
        switch(u >> 1) {
          case 0:
            d = c = 0;
            if (4 > g - e) {
              return !0;
            }
            var r = a[e] | a[e + 1] << 8, a = a[e + 2] | a[e + 3] << 8, e = e + 4;
            if (65535 !== (r ^ a)) {
              this._error("inflate: invalid block 0 length");
              a = 6;
              break;
            }
            0 === r ? a = 0 : (this._block0Read = r, a = 1);
            break;
          case 1:
            a = 2;
            this._literalTable = p;
            this._distanceTable = D;
            break;
          case 2:
            if (26 > (g - e << 3) + d) {
              return !0;
            }
            for (;14 > d;) {
              c |= a[e++] << d, d += 8;
            }
            r = (c >> 10 & 15) + 4;
            if ((g - e << 3) + d < 14 + 3 * r) {
              return !0;
            }
            for (var g = {numLiteralCodes:(c & 31) + 257, numDistanceCodes:(c >> 5 & 31) + 1, codeLengthTable:void 0, bitLengths:void 0, codesRead:0, dupBits:0}, c = c >> 14, d = d - 14, m = new Uint8Array(19), w = 0;w < r;++w) {
              3 > d && (c |= a[e++] << d, d += 8), m[h[w]] = c & 7, c >>= 3, d -= 3;
            }
            for (;19 > w;w++) {
              m[h[w]] = 0;
            }
            g.bitLengths = new Uint8Array(g.numLiteralCodes + g.numDistanceCodes);
            g.codeLengthTable = q(m);
            this._block2State = g;
            a = 3;
            break;
          default:
            return this._error("inflate: unsupported block type"), !1;
        }
        this._isFinalBlock = !!(u & 1);
        this._state = a;
        this._bufferPosition = e;
        this._bitBuffer = c;
        this._bitLength = d;
        return !1;
      };
      c.prototype._error = function(a) {
        if (this.onError) {
          this.onError(a);
        }
      };
      c.prototype._decodeBlock0 = function() {
        var a = this._bufferPosition, g = this._windowPosition, c = this._block0Read, d = 65794 - g, e = this._bufferSize - a, u = e < c, h = Math.min(d, e, c);
        this._window.set(this._buffer.subarray(a, a + h), g);
        this._windowPosition = g + h;
        this._bufferPosition = a + h;
        this._block0Read = c - h;
        return c === h ? (this._state = 0, !1) : u && d < e;
      };
      c.prototype._readBits = function(a) {
        var g = this._bitBuffer, c = this._bitLength;
        if (a > c) {
          var d = this._bufferPosition, e = this._bufferSize;
          do {
            if (d >= e) {
              return this._bufferPosition = d, this._bitBuffer = g, this._bitLength = c, -1;
            }
            g |= this._buffer[d++] << c;
            c += 8;
          } while (a > c);
          this._bufferPosition = d;
        }
        this._bitBuffer = g >> a;
        this._bitLength = c - a;
        return g & (1 << a) - 1;
      };
      c.prototype._readCode = function(a) {
        var g = this._bitBuffer, c = this._bitLength, d = a.maxBits;
        if (d > c) {
          var e = this._bufferPosition, u = this._bufferSize;
          do {
            if (e >= u) {
              return this._bufferPosition = e, this._bitBuffer = g, this._bitLength = c, -1;
            }
            g |= this._buffer[e++] << c;
            c += 8;
          } while (d > c);
          this._bufferPosition = e;
        }
        a = a.codes[g & (1 << d) - 1];
        d = a >> 16;
        if (a & 32768) {
          return this._error("inflate: invalid encoding"), this._state = 6, -1;
        }
        this._bitBuffer = g >> d;
        this._bitLength = c - d;
        return a & 65535;
      };
      c.prototype._decodeBlock2Pre = function() {
        var a = this._block2State, g = a.numLiteralCodes + a.numDistanceCodes, c = a.bitLengths, d = a.codesRead, e = 0 < d ? c[d - 1] : 0, u = a.codeLengthTable, h;
        if (0 < a.dupBits) {
          h = this._readBits(a.dupBits);
          if (0 > h) {
            return !0;
          }
          for (;h--;) {
            c[d++] = e;
          }
          a.dupBits = 0;
        }
        for (;d < g;) {
          var r = this._readCode(u);
          if (0 > r) {
            return a.codesRead = d, !0;
          }
          if (16 > r) {
            c[d++] = e = r;
          } else {
            var m;
            switch(r) {
              case 16:
                m = 2;
                h = 3;
                r = e;
                break;
              case 17:
                h = m = 3;
                r = 0;
                break;
              case 18:
                m = 7, h = 11, r = 0;
            }
            for (;h--;) {
              c[d++] = r;
            }
            h = this._readBits(m);
            if (0 > h) {
              return a.codesRead = d, a.dupBits = m, !0;
            }
            for (;h--;) {
              c[d++] = r;
            }
            e = r;
          }
        }
        this._literalTable = q(c.subarray(0, a.numLiteralCodes));
        this._distanceTable = q(c.subarray(a.numLiteralCodes));
        this._state = 4;
        this._block2State = null;
        return !1;
      };
      c.prototype._decodeBlock = function() {
        var a = this._literalTable, g = this._distanceTable, c = this._window, d = this._windowPosition, e = this._copyState, u, h, r, m;
        if (0 !== e.state) {
          switch(e.state) {
            case 1:
              if (0 > (u = this._readBits(e.lenBits))) {
                return !0;
              }
              e.len += u;
              e.state = 2;
            case 2:
              if (0 > (u = this._readCode(g))) {
                return !0;
              }
              e.distBits = l[u];
              e.dist = k[u];
              e.state = 3;
            case 3:
              u = 0;
              if (0 < e.distBits && 0 > (u = this._readBits(e.distBits))) {
                return !0;
              }
              m = e.dist + u;
              h = e.len;
              for (u = d - m;h--;) {
                c[d++] = c[u++];
              }
              e.state = 0;
              if (65536 <= d) {
                return this._windowPosition = d, !1;
              }
              break;
          }
        }
        do {
          u = this._readCode(a);
          if (0 > u) {
            return this._windowPosition = d, !0;
          }
          if (256 > u) {
            c[d++] = u;
          } else {
            if (256 < u) {
              this._windowPosition = d;
              u -= 257;
              r = x[u];
              h = B[u];
              u = 0 === r ? 0 : this._readBits(r);
              if (0 > u) {
                return e.state = 1, e.len = h, e.lenBits = r, !0;
              }
              h += u;
              u = this._readCode(g);
              if (0 > u) {
                return e.state = 2, e.len = h, !0;
              }
              r = l[u];
              m = k[u];
              u = 0 === r ? 0 : this._readBits(r);
              if (0 > u) {
                return e.state = 3, e.len = h, e.dist = m, e.distBits = r, !0;
              }
              m += u;
              for (u = d - m;h--;) {
                c[d++] = c[u++];
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
    }(n), h, k, l, D, B, x, p, g = !1, r = function(a) {
      function g(c, d) {
        a.call(this, c);
        this._verifyHeader = c;
        this._specialInflate = d();
        this._specialInflate.setDataCallback(function(a) {
          this.onData(a);
        }.bind(this));
      }
      __extends(g, a);
      g.prototype.push = function(a) {
        if (this._verifyHeader) {
          var g;
          this._buffer ? (g = new Uint8Array(this._buffer.length + a.length), g.set(this._buffer), g.set(a, this._buffer.length), this._buffer = null) : g = new Uint8Array(a);
          var c = this._processZLibHeader(g, 0, g.length);
          if (0 === c) {
            this._buffer = g;
            return;
          }
          this._verifyHeader = !0;
          0 < c && (a = g.subarray(c));
        }
        this._specialInflate.push(a);
      };
      g.prototype.close = function() {
        this._specialInflate && (this._specialInflate.close(), this._specialInflate = null);
      };
      return g;
    }(n), F;
    (function(a) {
      a[a.WRITE = 0] = "WRITE";
      a[a.DONE = 1] = "DONE";
      a[a.ZLIB_HEADER = 2] = "ZLIB_HEADER";
    })(F || (F = {}));
    var E = function() {
      function a() {
        this.a = 1;
        this.b = 0;
      }
      a.prototype.update = function(a, g, c) {
        for (var d = this.a, e = this.b;g < c;++g) {
          d = (d + (a[g] & 255)) % 65521, e = (e + d) % 65521;
        }
        this.a = d;
        this.b = e;
      };
      a.prototype.getChecksum = function() {
        return this.b << 16 | this.a;
      };
      return a;
    }();
    b.Adler32 = E;
    F = function() {
      function a(g) {
        this._state = (this._writeZlibHeader = g) ? 2 : 0;
        this._adler32 = g ? new E : null;
      }
      a.prototype.push = function(a) {
        2 === this._state && (this.onData(new Uint8Array([120, 156])), this._state = 0);
        for (var g = a.length, c = g + 5 * Math.ceil(g / 65535), c = new Uint8Array(c), d = 0, e = 0;65535 < g;) {
          c.set(new Uint8Array([0, 255, 255, 0, 0]), d), d += 5, c.set(a.subarray(e, e + 65535), d), e += 65535, d += 65535, g -= 65535;
        }
        c.set(new Uint8Array([0, g & 255, g >> 8 & 255, ~g & 255, ~g >> 8 & 255]), d);
        d += 5;
        c.set(a.subarray(e, g), d);
        this.onData(c);
        this._adler32 && this._adler32.update(a, 0, g);
      };
      a.prototype.close = function() {
        this._state = 1;
        this.onData(new Uint8Array([1, 0, 0, 255, 255]));
        if (this._adler32) {
          var a = this._adler32.getChecksum();
          this.onData(new Uint8Array([a & 255, a >> 8 & 255, a >> 16 & 255, a >>> 24 & 255]));
        }
      };
      return a;
    }();
    b.Deflate = F;
    var J = function() {
      function a() {
        this.pos = this.available = 0;
        this.buffer = new Uint8Array(2E3);
      }
      a.prototype.append = function(a) {
        var g = this.pos + this.available, c = g + a.length;
        if (c > this.buffer.length) {
          for (var d = 2 * this.buffer.length;d < c;) {
            d *= 2;
          }
          c = new Uint8Array(d);
          c.set(this.buffer);
          this.buffer = c;
        }
        this.buffer.set(a, g);
        this.available += a.length;
      };
      a.prototype.compact = function() {
        0 !== this.available && (this.buffer.set(this.buffer.subarray(this.pos, this.pos + this.available), 0), this.pos = 0);
      };
      a.prototype.readByte = function() {
        if (0 >= this.available) {
          throw Error("Unexpected end of file");
        }
        this.available--;
        return this.buffer[this.pos++];
      };
      return a;
    }(), A = function() {
      function a(g) {
        this.onData = g;
        this.processed = 0;
      }
      a.prototype.writeBytes = function(a) {
        this.onData.call(null, a);
        this.processed += a.length;
      };
      return a;
    }(), C = function() {
      function a(g) {
        this.outStream = g;
        this.buf = null;
        this.size = this.pos = 0;
        this.isFull = !1;
        this.totalPos = this.writePos = 0;
      }
      a.prototype.create = function(a) {
        this.buf = new Uint8Array(a);
        this.pos = 0;
        this.size = a;
        this.isFull = !1;
        this.totalPos = this.writePos = 0;
      };
      a.prototype.putByte = function(a) {
        this.totalPos++;
        this.buf[this.pos++] = a;
        this.pos === this.size && (this.flush(), this.pos = 0, this.isFull = !0);
      };
      a.prototype.getByte = function(a) {
        return this.buf[a <= this.pos ? this.pos - a : this.size - a + this.pos];
      };
      a.prototype.flush = function() {
        this.writePos < this.pos && (this.outStream.writeBytes(this.buf.subarray(this.writePos, this.pos)), this.writePos = this.pos === this.size ? 0 : this.pos);
      };
      a.prototype.copyMatch = function(a, g) {
        for (var c = this.pos, d = this.size, e = this.buf, u = a <= c ? c - a : d - a + c, h = g;0 < h;) {
          for (var r = Math.min(Math.min(h, d - c), d - u), m = 0;m < r;m++) {
            var w = e[u++];
            e[c++] = w;
          }
          c === d && (this.pos = c, this.flush(), c = 0, this.isFull = !0);
          u === d && (u = 0);
          h -= r;
        }
        this.pos = c;
        this.totalPos += g;
      };
      a.prototype.checkDistance = function(a) {
        return a <= this.pos || this.isFull;
      };
      a.prototype.isEmpty = function() {
        return 0 === this.pos && !this.isFull;
      };
      return a;
    }(), I = function() {
      function a(g) {
        this.inStream = g;
        this.code = this.range = 0;
        this.corrupted = !1;
      }
      a.prototype.init = function() {
        0 !== this.inStream.readByte() && (this.corrupted = !0);
        this.range = -1;
        for (var a = 0, g = 0;4 > g;g++) {
          a = a << 8 | this.inStream.readByte();
        }
        a === this.range && (this.corrupted = !0);
        this.code = a;
      };
      a.prototype.isFinishedOK = function() {
        return 0 === this.code;
      };
      a.prototype.decodeDirectBits = function(a) {
        var g = 0, c = this.range, d = this.code;
        do {
          var c = c >>> 1 | 0, d = d - c | 0, e = d >> 31, d = d + (c & e) | 0;
          d === c && (this.corrupted = !0);
          0 <= c && 16777216 > c && (c <<= 8, d = d << 8 | this.inStream.readByte());
          g = (g << 1) + e + 1 | 0;
        } while (--a);
        this.range = c;
        this.code = d;
        return g;
      };
      a.prototype.decodeBit = function(a, g) {
        var c = this.range, d = this.code, e = a[g], u = (c >>> 11) * e;
        d >>> 0 < u ? (e = e + (2048 - e >> 5) | 0, c = u | 0, u = 0) : (e = e - (e >> 5) | 0, d = d - u | 0, c = c - u | 0, u = 1);
        a[g] = e & 65535;
        0 <= c && 16777216 > c && (c <<= 8, d = d << 8 | this.inStream.readByte());
        this.range = c;
        this.code = d;
        return u;
      };
      return a;
    }(), L = function() {
      function g(c) {
        this.numBits = c;
        this.probs = a(1 << c);
      }
      g.prototype.decode = function(a) {
        for (var g = 1, c = 0;c < this.numBits;c++) {
          g = (g << 1) + a.decodeBit(this.probs, g);
        }
        return g - (1 << this.numBits);
      };
      g.prototype.reverseDecode = function(a) {
        return d(this.probs, 0, this.numBits, a);
      };
      return g;
    }(), w = function() {
      function g() {
        this.choice = a(2);
        this.lowCoder = c(3, 16);
        this.midCoder = c(3, 16);
        this.highCoder = new L(8);
      }
      g.prototype.decode = function(a, g) {
        return 0 === a.decodeBit(this.choice, 0) ? this.lowCoder[g].decode(a) : 0 === a.decodeBit(this.choice, 1) ? 8 + this.midCoder[g].decode(a) : 16 + this.highCoder.decode(a);
      };
      return g;
    }(), y = function() {
      function g(a, c) {
        this.rangeDec = new I(a);
        this.outWindow = new C(c);
        this.markerIsMandatory = !1;
        this.dictSizeInProperties = this.dictSize = this.lp = this.pb = this.lc = 0;
        this.leftToUnpack = this.unpackSize = void 0;
        this.reps = new Int32Array(4);
        this.state = 0;
      }
      g.prototype.decodeProperties = function(a) {
        var g = a[0];
        if (225 <= g) {
          throw Error("Incorrect LZMA properties");
        }
        this.lc = g % 9;
        g = g / 9 | 0;
        this.pb = g / 5 | 0;
        this.lp = g % 5;
        for (g = this.dictSizeInProperties = 0;4 > g;g++) {
          this.dictSizeInProperties |= a[g + 1] << 8 * g;
        }
        this.dictSize = this.dictSizeInProperties;
        4096 > this.dictSize && (this.dictSize = 4096);
      };
      g.prototype.create = function() {
        this.outWindow.create(this.dictSize);
        this.init();
        this.rangeDec.init();
        this.reps[0] = 0;
        this.reps[1] = 0;
        this.reps[2] = 0;
        this.state = this.reps[3] = 0;
        this.leftToUnpack = this.unpackSize;
      };
      g.prototype.decodeLiteral = function(a, g) {
        var c = this.outWindow, d = this.rangeDec, e = 0;
        c.isEmpty() || (e = c.getByte(1));
        var u = 1, e = 768 * (((c.totalPos & (1 << this.lp) - 1) << this.lc) + (e >> 8 - this.lc));
        if (7 <= a) {
          c = c.getByte(g + 1);
          do {
            var h = c >> 7 & 1, c = c << 1, r = d.decodeBit(this.litProbs, e + ((1 + h << 8) + u)), u = u << 1 | r;
            if (h !== r) {
              break;
            }
          } while (256 > u);
        }
        for (;256 > u;) {
          u = u << 1 | d.decodeBit(this.litProbs, e + u);
        }
        return u - 256 & 255;
      };
      g.prototype.decodeDistance = function(a) {
        var g = a;
        3 < g && (g = 3);
        a = this.rangeDec;
        g = this.posSlotDecoder[g].decode(a);
        if (4 > g) {
          return g;
        }
        var c = (g >> 1) - 1, e = (2 | g & 1) << c;
        14 > g ? e = e + d(this.posDecoders, e - g, c, a) | 0 : (e = e + (a.decodeDirectBits(c - 4) << 4) | 0, e = e + this.alignDecoder.reverseDecode(a) | 0);
        return e;
      };
      g.prototype.init = function() {
        this.litProbs = a(768 << this.lc + this.lp);
        this.posSlotDecoder = c(6, 4);
        this.alignDecoder = new L(4);
        this.posDecoders = a(115);
        this.isMatch = a(192);
        this.isRep = a(12);
        this.isRepG0 = a(12);
        this.isRepG1 = a(12);
        this.isRepG2 = a(12);
        this.isRep0Long = a(192);
        this.lenDecoder = new w;
        this.repLenDecoder = new w;
      };
      g.prototype.decode = function(a) {
        for (var g = this.rangeDec, c = this.outWindow, d = this.pb, e = this.dictSize, h = this.markerIsMandatory, r = this.leftToUnpack, m = this.isMatch, w = this.isRep, p = this.isRepG0, b = this.isRepG1, A = this.isRepG2, E = this.isRep0Long, n = this.lenDecoder, y = this.repLenDecoder, J = this.reps[0], C = this.reps[1], F = this.reps[2], f = this.reps[3], q = this.state;;) {
          if (a && 48 > g.inStream.available) {
            this.outWindow.flush();
            break;
          }
          if (0 === r && !h && (this.outWindow.flush(), g.isFinishedOK())) {
            return H;
          }
          var I = c.totalPos & (1 << d) - 1;
          if (0 === g.decodeBit(m, (q << 4) + I)) {
            if (0 === r) {
              return u;
            }
            c.putByte(this.decodeLiteral(q, J));
            q = 4 > q ? 0 : 10 > q ? q - 3 : q - 6;
            r--;
          } else {
            if (0 !== g.decodeBit(w, q)) {
              if (0 === r || c.isEmpty()) {
                return u;
              }
              if (0 === g.decodeBit(p, q)) {
                if (0 === g.decodeBit(E, (q << 4) + I)) {
                  q = 7 > q ? 9 : 11;
                  c.putByte(c.getByte(J + 1));
                  r--;
                  continue;
                }
              } else {
                var k;
                0 === g.decodeBit(b, q) ? k = C : (0 === g.decodeBit(A, q) ? k = F : (k = f, f = F), F = C);
                C = J;
                J = k;
              }
              I = y.decode(g, I);
              q = 7 > q ? 8 : 11;
            } else {
              f = F;
              F = C;
              C = J;
              I = n.decode(g, I);
              q = 7 > q ? 7 : 10;
              J = this.decodeDistance(I);
              if (-1 === J) {
                return this.outWindow.flush(), g.isFinishedOK() ? G : u;
              }
              if (0 === r || J >= e || !c.checkDistance(J)) {
                return u;
              }
            }
            I += 2;
            k = !1;
            void 0 !== r && r < I && (I = r, k = !0);
            c.copyMatch(J + 1, I);
            r -= I;
            if (k) {
              return u;
            }
          }
        }
        this.state = q;
        this.reps[0] = J;
        this.reps[1] = C;
        this.reps[2] = F;
        this.reps[3] = f;
        this.leftToUnpack = r;
        return oa;
      };
      g.prototype.flushOutput = function() {
        this.outWindow.flush();
      };
      return g;
    }(), u = 0, G = 1, H = 2, oa = 3, Q;
    (function(a) {
      a[a.WAIT_FOR_LZMA_HEADER = 0] = "WAIT_FOR_LZMA_HEADER";
      a[a.WAIT_FOR_SWF_HEADER = 1] = "WAIT_FOR_SWF_HEADER";
      a[a.PROCESS_DATA = 2] = "PROCESS_DATA";
      a[a.CLOSED = 3] = "CLOSED";
      a[a.ERROR = 4] = "ERROR";
    })(Q || (Q = {}));
    Q = function() {
      function a(g) {
        void 0 === g && (g = !1);
        this._state = g ? 1 : 0;
        this.buffer = null;
      }
      a.prototype.push = function(a) {
        if (2 > this._state) {
          var g = this.buffer ? this.buffer.length : 0, c = (1 === this._state ? 17 : 13) + 5;
          if (g + a.length < c) {
            c = new Uint8Array(g + a.length);
            0 < g && c.set(this.buffer);
            c.set(a, g);
            this.buffer = c;
            return;
          }
          var d = new Uint8Array(c);
          0 < g && d.set(this.buffer);
          d.set(a.subarray(0, c - g), g);
          this._inStream = new J;
          this._inStream.append(d.subarray(c - 5));
          this._outStream = new A(function(a) {
            this.onData.call(null, a);
          }.bind(this));
          this._decoder = new y(this._inStream, this._outStream);
          if (1 === this._state) {
            this._decoder.decodeProperties(d.subarray(12, 17)), this._decoder.markerIsMandatory = !1, this._decoder.unpackSize = ((d[4] | d[5] << 8 | d[6] << 16 | d[7] << 24) >>> 0) - 8;
          } else {
            this._decoder.decodeProperties(d.subarray(0, 5));
            for (var g = 0, e = !1, u = 0;8 > u;u++) {
              var h = d[5 + u];
              255 !== h && (e = !0);
              g |= h << 8 * u;
            }
            this._decoder.markerIsMandatory = !e;
            this._decoder.unpackSize = e ? g : void 0;
          }
          this._decoder.create();
          a = a.subarray(c);
          this._state = 2;
        } else {
          if (2 !== this._state) {
            return;
          }
        }
        try {
          this._inStream.append(a);
          var r = this._decoder.decode(!0);
          this._inStream.compact();
          r !== oa && this._checkError(r);
        } catch (m) {
          this._decoder.flushOutput(), this._decoder = null, this._error(m);
        }
      };
      a.prototype.close = function() {
        if (2 === this._state) {
          this._state = 3;
          try {
            var a = this._decoder.decode(!1);
            this._checkError(a);
          } catch (g) {
            this._decoder.flushOutput(), this._error(g);
          }
          this._decoder = null;
        }
      };
      a.prototype._error = function(a) {
        this._state = 4;
        if (this.onError) {
          this.onError(a);
        }
      };
      a.prototype._checkError = function(a) {
        var g;
        a === u ? g = "LZMA decoding error" : a === oa ? g = "Decoding is not complete" : a === G ? void 0 !== this._decoder.unpackSize && this._decoder.unpackSize !== this._outStream.processed && (g = "Finished with end marker before than specified size") : g = "Internal LZMA Error";
        g && this._error(g);
      };
      return a;
    }();
    b.LzmaDecoder = Q;
    var N = f.Debug.notImplemented, z = f.StringUtilities.utf8decode, O = f.StringUtilities.utf8encode, pa = f.NumberUtilities.clamp, sa = function() {
      return function(a, g, c) {
        this.buffer = a;
        this.length = g;
        this.littleEndian = c;
      };
    }();
    b.PlainObjectDataBuffer = sa;
    var v = new Uint32Array(33);
    Q = 1;
    for (F = 0;32 >= Q;Q++) {
      v[Q] = F = F << 1 | 1;
    }
    var P;
    (function(a) {
      a[a.U8 = 1] = "U8";
      a[a.I32 = 2] = "I32";
      a[a.F32 = 4] = "F32";
    })(P || (P = {}));
    P = function() {
      function a(g) {
        void 0 === g && (g = a.INITIAL_SIZE);
        this._buffer || (this._buffer = new ArrayBuffer(g), this._position = this._length = 0, this._resetViews(), this._littleEndian = a._nativeLittleEndian, this._bitLength = this._bitBuffer = 0);
      }
      a.FromArrayBuffer = function(g, c) {
        void 0 === c && (c = -1);
        var d = Object.create(a.prototype);
        d._buffer = g;
        d._length = -1 === c ? g.byteLength : c;
        d._position = 0;
        d._resetViews();
        d._littleEndian = a._nativeLittleEndian;
        d._bitBuffer = 0;
        d._bitLength = 0;
        return d;
      };
      a.FromPlainObject = function(g) {
        var c = a.FromArrayBuffer(g.buffer, g.length);
        c._littleEndian = g.littleEndian;
        return c;
      };
      a.prototype.toPlainObject = function() {
        return new sa(this._buffer, this._length, this._littleEndian);
      };
      a.prototype.clone = function() {
        var g = a.FromArrayBuffer((new Uint8Array(this._u8)).buffer, this._length);
        g._position = this._position;
        g._littleEndian = this._littleEndian;
        g._bitBuffer = this._bitBuffer;
        g._bitLength = this._bitLength;
        return g;
      };
      a.prototype._resetViews = function() {
        this._u8 = new Uint8Array(this._buffer);
        this._f32 = this._i32 = null;
      };
      a.prototype._requestViews = function(a) {
        0 === (this._buffer.byteLength & 3) && (null === this._i32 && a & 2 && (this._i32 = new Int32Array(this._buffer)), null === this._f32 && a & 4 && (this._f32 = new Float32Array(this._buffer)));
      };
      a.prototype.getBytes = function() {
        return new Uint8Array(this._buffer, 0, this._length);
      };
      a.prototype._ensureCapacity = function(g) {
        var c = this._buffer;
        if (!(c.byteLength >= g)) {
          for (var d = Math.max(c.byteLength, 1);d < g;) {
            d *= 2;
          }
          4294967295 < d && this.sec.throwError("RangeError", Errors.ParamRangeError);
          d = a._arrayBufferPool.acquire(d);
          g = this._u8;
          this._buffer = d;
          this._resetViews();
          this._u8.set(g);
          d = this._u8;
          for (g = g.length;g < d.length;g++) {
            d[g] = 0;
          }
          a._arrayBufferPool.release(c);
        }
      };
      a.prototype.clear = function() {
        this._position = this._length = 0;
      };
      a.prototype.readBoolean = function() {
        return 0 !== this.readUnsignedByte();
      };
      a.prototype.readByte = function() {
        return this.readUnsignedByte() << 24 >> 24;
      };
      a.prototype.readUnsignedByte = function() {
        this._position + 1 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        return this._u8[this._position++];
      };
      a.prototype.readBytes = function(a, g, c) {
        var d = this._position;
        g >>>= 0;
        c >>>= 0;
        0 === c && (c = this._length - d);
        d + c > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        a.length < g + c && (a._ensureCapacity(g + c), a.length = g + c);
        a._u8.set(new Uint8Array(this._buffer, d, c), g);
        this._position += c;
      };
      a.prototype.readShort = function() {
        return this.readUnsignedShort() << 16 >> 16;
      };
      a.prototype.readUnsignedShort = function() {
        var a = this._u8, g = this._position;
        g + 2 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var c = a[g + 0], a = a[g + 1];
        this._position = g + 2;
        return this._littleEndian ? a << 8 | c : c << 8 | a;
      };
      a.prototype.readInt = function() {
        var a = this._u8, g = this._position;
        g + 4 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var c = a[g + 0], d = a[g + 1], e = a[g + 2], a = a[g + 3];
        this._position = g + 4;
        return this._littleEndian ? a << 24 | e << 16 | d << 8 | c : c << 24 | d << 16 | e << 8 | a;
      };
      a.prototype.readUnsignedInt = function() {
        return this.readInt() >>> 0;
      };
      a.prototype.readFloat = function() {
        var a = this._position;
        a + 4 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        this._position = a + 4;
        this._requestViews(4);
        if (this._littleEndian && 0 === (a & 3) && this._f32) {
          return this._f32[a >> 2];
        }
        var g = this._u8, c = f.IntegerUtilities.u8;
        this._littleEndian ? (c[0] = g[a + 0], c[1] = g[a + 1], c[2] = g[a + 2], c[3] = g[a + 3]) : (c[3] = g[a + 0], c[2] = g[a + 1], c[1] = g[a + 2], c[0] = g[a + 3]);
        return f.IntegerUtilities.f32[0];
      };
      a.prototype.readDouble = function() {
        var a = this._u8, g = this._position;
        g + 8 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var c = f.IntegerUtilities.u8;
        this._littleEndian ? (c[0] = a[g + 0], c[1] = a[g + 1], c[2] = a[g + 2], c[3] = a[g + 3], c[4] = a[g + 4], c[5] = a[g + 5], c[6] = a[g + 6], c[7] = a[g + 7]) : (c[0] = a[g + 7], c[1] = a[g + 6], c[2] = a[g + 5], c[3] = a[g + 4], c[4] = a[g + 3], c[5] = a[g + 2], c[6] = a[g + 1], c[7] = a[g + 0]);
        this._position = g + 8;
        return f.IntegerUtilities.f64[0];
      };
      a.prototype.writeBoolean = function(a) {
        this.writeByte(a ? 1 : 0);
      };
      a.prototype.writeByte = function(a) {
        var g = this._position + 1;
        this._ensureCapacity(g);
        this._u8[this._position++] = a;
        g > this._length && (this._length = g);
      };
      a.prototype.writeUnsignedByte = function(a) {
        var g = this._position + 1;
        this._ensureCapacity(g);
        this._u8[this._position++] = a;
        g > this._length && (this._length = g);
      };
      a.prototype.writeRawBytes = function(a) {
        var g = this._position + a.length;
        this._ensureCapacity(g);
        this._u8.set(a, this._position);
        this._position = g;
        g > this._length && (this._length = g);
      };
      a.prototype.writeBytes = function(a, g, c) {
        f.isNullOrUndefined(a) && this.sec.throwError("TypeError", Errors.NullPointerError, "bytes");
        g >>>= 0;
        c >>>= 0;
        2 > arguments.length && (g = 0);
        3 > arguments.length && (c = 0);
        g === pa(g, 0, a.length) && g + c === pa(g + c, 0, a.length) || this.sec.throwError("RangeError", Errors.ParamRangeError);
        0 === c && (c = a.length - g);
        this.writeRawBytes(new Int8Array(a._buffer, g, c));
      };
      a.prototype.writeShort = function(a) {
        this.writeUnsignedShort(a);
      };
      a.prototype.writeUnsignedShort = function(a) {
        var g = this._position;
        this._ensureCapacity(g + 2);
        var c = this._u8;
        this._littleEndian ? (c[g + 0] = a, c[g + 1] = a >> 8) : (c[g + 0] = a >> 8, c[g + 1] = a);
        this._position = g += 2;
        g > this._length && (this._length = g);
      };
      a.prototype.writeInt = function(a) {
        this.writeUnsignedInt(a);
      };
      a.prototype.write2Ints = function(a, g) {
        this.write2UnsignedInts(a, g);
      };
      a.prototype.write4Ints = function(a, g, c, d) {
        this.write4UnsignedInts(a, g, c, d);
      };
      a.prototype.writeUnsignedInt = function(g) {
        var c = this._position;
        this._ensureCapacity(c + 4);
        this._requestViews(2);
        if (this._littleEndian === a._nativeLittleEndian && 0 === (c & 3) && this._i32) {
          this._i32[c >> 2] = g;
        } else {
          var d = this._u8;
          this._littleEndian ? (d[c + 0] = g, d[c + 1] = g >> 8, d[c + 2] = g >> 16, d[c + 3] = g >> 24) : (d[c + 0] = g >> 24, d[c + 1] = g >> 16, d[c + 2] = g >> 8, d[c + 3] = g);
        }
        this._position = c += 4;
        c > this._length && (this._length = c);
      };
      a.prototype.write2UnsignedInts = function(g, c) {
        var d = this._position;
        this._ensureCapacity(d + 8);
        this._requestViews(2);
        this._littleEndian === a._nativeLittleEndian && 0 === (d & 3) && this._i32 ? (this._i32[(d >> 2) + 0] = g, this._i32[(d >> 2) + 1] = c, this._position = d += 8, d > this._length && (this._length = d)) : (this.writeUnsignedInt(g), this.writeUnsignedInt(c));
      };
      a.prototype.write4UnsignedInts = function(g, c, d, e) {
        var u = this._position;
        this._ensureCapacity(u + 16);
        this._requestViews(2);
        this._littleEndian === a._nativeLittleEndian && 0 === (u & 3) && this._i32 ? (this._i32[(u >> 2) + 0] = g, this._i32[(u >> 2) + 1] = c, this._i32[(u >> 2) + 2] = d, this._i32[(u >> 2) + 3] = e, this._position = u += 16, u > this._length && (this._length = u)) : (this.writeUnsignedInt(g), this.writeUnsignedInt(c), this.writeUnsignedInt(d), this.writeUnsignedInt(e));
      };
      a.prototype.writeFloat = function(g) {
        var c = this._position;
        this._ensureCapacity(c + 4);
        this._requestViews(4);
        if (this._littleEndian === a._nativeLittleEndian && 0 === (c & 3) && this._f32) {
          this._f32[c >> 2] = g;
        } else {
          var d = this._u8;
          f.IntegerUtilities.f32[0] = g;
          g = f.IntegerUtilities.u8;
          this._littleEndian ? (d[c + 0] = g[0], d[c + 1] = g[1], d[c + 2] = g[2], d[c + 3] = g[3]) : (d[c + 0] = g[3], d[c + 1] = g[2], d[c + 2] = g[1], d[c + 3] = g[0]);
        }
        this._position = c += 4;
        c > this._length && (this._length = c);
      };
      a.prototype.write2Floats = function(g, c) {
        var d = this._position;
        this._ensureCapacity(d + 8);
        this._requestViews(4);
        this._littleEndian === a._nativeLittleEndian && 0 === (d & 3) && this._f32 ? (this._f32[(d >> 2) + 0] = g, this._f32[(d >> 2) + 1] = c, this._position = d += 8, d > this._length && (this._length = d)) : (this.writeFloat(g), this.writeFloat(c));
      };
      a.prototype.write6Floats = function(g, c, d, e, u, h) {
        var r = this._position;
        this._ensureCapacity(r + 24);
        this._requestViews(4);
        this._littleEndian === a._nativeLittleEndian && 0 === (r & 3) && this._f32 ? (this._f32[(r >> 2) + 0] = g, this._f32[(r >> 2) + 1] = c, this._f32[(r >> 2) + 2] = d, this._f32[(r >> 2) + 3] = e, this._f32[(r >> 2) + 4] = u, this._f32[(r >> 2) + 5] = h, this._position = r += 24, r > this._length && (this._length = r)) : (this.writeFloat(g), this.writeFloat(c), this.writeFloat(d), this.writeFloat(e), this.writeFloat(u), this.writeFloat(h));
      };
      a.prototype.writeDouble = function(a) {
        var g = this._position;
        this._ensureCapacity(g + 8);
        var c = this._u8;
        f.IntegerUtilities.f64[0] = a;
        a = f.IntegerUtilities.u8;
        this._littleEndian ? (c[g + 0] = a[0], c[g + 1] = a[1], c[g + 2] = a[2], c[g + 3] = a[3], c[g + 4] = a[4], c[g + 5] = a[5], c[g + 6] = a[6], c[g + 7] = a[7]) : (c[g + 0] = a[7], c[g + 1] = a[6], c[g + 2] = a[5], c[g + 3] = a[4], c[g + 4] = a[3], c[g + 5] = a[2], c[g + 6] = a[1], c[g + 7] = a[0]);
        this._position = g += 8;
        g > this._length && (this._length = g);
      };
      a.prototype.readRawBytes = function() {
        return new Int8Array(this._buffer, 0, this._length);
      };
      a.prototype.writeUTF = function(a) {
        a = m(a);
        a = z(a);
        this.writeShort(a.length);
        this.writeRawBytes(a);
      };
      a.prototype.writeUTFBytes = function(a) {
        a = m(a);
        a = z(a);
        this.writeRawBytes(a);
      };
      a.prototype.readUTF = function() {
        return this.readUTFBytes(this.readShort());
      };
      a.prototype.readUTFBytes = function(a) {
        a >>>= 0;
        var g = this._position;
        g + a > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        this._position += a;
        return O(new Int8Array(this._buffer, g, a));
      };
      Object.defineProperty(a.prototype, "length", {get:function() {
        return this._length;
      }, set:function(a) {
        a >>>= 0;
        a > this._buffer.byteLength && this._ensureCapacity(a);
        this._length = a;
        this._position = pa(this._position, 0, this._length);
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "bytesAvailable", {get:function() {
        return this._length - this._position;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "position", {get:function() {
        return this._position;
      }, set:function(a) {
        this._position = a >>> 0;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "buffer", {get:function() {
        return this._buffer;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "bytes", {get:function() {
        return this._u8;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "ints", {get:function() {
        this._requestViews(2);
        return this._i32;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "objectEncoding", {get:function() {
        return this._objectEncoding;
      }, set:function(a) {
        this._objectEncoding = a >>> 0;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "endian", {get:function() {
        return this._littleEndian ? "littleEndian" : "bigEndian";
      }, set:function(g) {
        g = m(g);
        this._littleEndian = "auto" === g ? a._nativeLittleEndian : "littleEndian" === g;
      }, enumerable:!0, configurable:!0});
      a.prototype.toString = function() {
        return O(new Int8Array(this._buffer, 0, this._length));
      };
      a.prototype.toBlob = function(a) {
        return new Blob([new Int8Array(this._buffer, this._position, this._length)], {type:a});
      };
      a.prototype.writeMultiByte = function(a, g) {
        m(a);
        m(g);
        N("packageInternal flash.utils.ObjectOutput::writeMultiByte");
      };
      a.prototype.readMultiByte = function(a, g) {
        m(g);
        N("packageInternal flash.utils.ObjectInput::readMultiByte");
      };
      a.prototype.getValue = function(a) {
        a |= 0;
        return a >= this._length ? void 0 : this._u8[a];
      };
      a.prototype.setValue = function(a, g) {
        a |= 0;
        var c = a + 1;
        this._ensureCapacity(c);
        this._u8[a] = g;
        c > this._length && (this._length = c);
      };
      a.prototype.readFixed = function() {
        return this.readInt() / 65536;
      };
      a.prototype.readFixed8 = function() {
        return this.readShort() / 256;
      };
      a.prototype.readFloat16 = function() {
        var a = this.readUnsignedShort(), g = a >> 15 ? -1 : 1, c = (a & 31744) >> 10, a = a & 1023;
        return c ? 31 === c ? a ? NaN : Infinity * g : g * Math.pow(2, c - 15) * (1 + a / 1024) : g * Math.pow(2, -14) * (a / 1024);
      };
      a.prototype.readEncodedU32 = function() {
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
      a.prototype.readBits = function(a) {
        return this.readUnsignedBits(a) << 32 - a >> 32 - a;
      };
      a.prototype.readUnsignedBits = function(a) {
        for (var g = this._bitBuffer, c = this._bitLength;a > c;) {
          g = g << 8 | this.readUnsignedByte(), c += 8;
        }
        c -= a;
        a = g >>> c & v[a];
        this._bitBuffer = g;
        this._bitLength = c;
        return a;
      };
      a.prototype.readFixedBits = function(a) {
        return this.readBits(a) / 65536;
      };
      a.prototype.readString = function(a) {
        var g = this._position;
        if (a) {
          g + a > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError), this._position += a;
        } else {
          a = 0;
          for (var c = g;c < this._length && this._u8[c];c++) {
            a++;
          }
          this._position += a + 1;
        }
        return O(new Int8Array(this._buffer, g, a));
      };
      a.prototype.align = function() {
        this._bitLength = this._bitBuffer = 0;
      };
      a.prototype.deflate = function() {
        this.compress("deflate");
      };
      a.prototype.inflate = function() {
        this.uncompress("deflate");
      };
      a.prototype.compress = function(g) {
        g = 0 === arguments.length ? "zlib" : m(g);
        var c;
        switch(g) {
          case "zlib":
            c = new b.Deflate(!0);
            break;
          case "deflate":
            c = new b.Deflate(!1);
            break;
          default:
            return;
        }
        var d = new a;
        c.onData = d.writeRawBytes.bind(d);
        c.push(this._u8.subarray(0, this._length));
        c.close();
        this._ensureCapacity(d._u8.length);
        this._u8.set(d._u8);
        this.length = d.length;
        this._position = 0;
      };
      a.prototype.uncompress = function(g) {
        g = 0 === arguments.length ? "zlib" : m(g);
        var c;
        switch(g) {
          case "zlib":
            c = b.Inflate.create(!0);
            break;
          case "deflate":
            c = b.Inflate.create(!1);
            break;
          case "lzma":
            c = new b.LzmaDecoder(!1);
            break;
          default:
            return;
        }
        var d = new a, e;
        c.onData = d.writeRawBytes.bind(d);
        c.onError = function(a) {
          return e = a;
        };
        c.push(this._u8.subarray(0, this._length));
        e && this.sec.throwError("IOError", Errors.CompressedDataError);
        c.close();
        this._ensureCapacity(d._u8.length);
        this._u8.set(d._u8);
        this.length = d.length;
        this._position = 0;
      };
      a._nativeLittleEndian = 1 === (new Int8Array((new Int32Array([1])).buffer))[0];
      a.INITIAL_SIZE = 128;
      a._arrayBufferPool = new f.ArrayBufferPool;
      return a;
    }();
    b.DataBuffer = P;
  })(f.ArrayUtilities || (f.ArrayUtilities = {}));
  var l = f.ArrayUtilities.DataBuffer, k = f.ArrayUtilities.ensureTypedArrayCapacity;
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
  })(f.PathCommand || (f.PathCommand = {}));
  (function(b) {
    b[b.Linear = 16] = "Linear";
    b[b.Radial = 18] = "Radial";
  })(f.GradientType || (f.GradientType = {}));
  (function(b) {
    b[b.Pad = 0] = "Pad";
    b[b.Reflect = 1] = "Reflect";
    b[b.Repeat = 2] = "Repeat";
  })(f.GradientSpreadMethod || (f.GradientSpreadMethod = {}));
  (function(b) {
    b[b.RGB = 0] = "RGB";
    b[b.LinearRGB = 1] = "LinearRGB";
  })(f.GradientInterpolationMethod || (f.GradientInterpolationMethod = {}));
  (function(b) {
    b[b.None = 0] = "None";
    b[b.Normal = 1] = "Normal";
    b[b.Vertical = 2] = "Vertical";
    b[b.Horizontal = 3] = "Horizontal";
  })(f.LineScaleMode || (f.LineScaleMode = {}));
  var z = function() {
    return function(b, f, a, d, c, m, n, e, h, k, l) {
      this.commands = b;
      this.commandsPosition = f;
      this.coordinates = a;
      this.morphCoordinates = d;
      this.coordinatesPosition = c;
      this.styles = m;
      this.stylesLength = n;
      this.morphStyles = e;
      this.morphStylesLength = h;
      this.hasFills = k;
      this.hasLines = l;
    };
  }();
  f.PlainObjectShapeData = z;
  var v;
  (function(b) {
    b[b.Commands = 32] = "Commands";
    b[b.Coordinates = 128] = "Coordinates";
    b[b.Styles = 16] = "Styles";
  })(v || (v = {}));
  v = function() {
    function b(b) {
      void 0 === b && (b = !0);
      b && this.clear();
    }
    b.FromPlainObject = function(f) {
      var a = new b(!1);
      a.commands = f.commands;
      a.coordinates = f.coordinates;
      a.morphCoordinates = f.morphCoordinates;
      a.commandsPosition = f.commandsPosition;
      a.coordinatesPosition = f.coordinatesPosition;
      a.styles = l.FromArrayBuffer(f.styles, f.stylesLength);
      a.styles.endian = "auto";
      f.morphStyles && (a.morphStyles = l.FromArrayBuffer(f.morphStyles, f.morphStylesLength), a.morphStyles.endian = "auto");
      a.hasFills = f.hasFills;
      a.hasLines = f.hasLines;
      return a;
    };
    b.prototype.moveTo = function(b, a) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = 9;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = a;
    };
    b.prototype.lineTo = function(b, a) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = 10;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = a;
    };
    b.prototype.curveTo = function(b, a, d, c) {
      this.ensurePathCapacities(1, 4);
      this.commands[this.commandsPosition++] = 11;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = d;
      this.coordinates[this.coordinatesPosition++] = c;
    };
    b.prototype.cubicCurveTo = function(b, a, d, c, m, n) {
      this.ensurePathCapacities(1, 6);
      this.commands[this.commandsPosition++] = 12;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = d;
      this.coordinates[this.coordinatesPosition++] = c;
      this.coordinates[this.coordinatesPosition++] = m;
      this.coordinates[this.coordinatesPosition++] = n;
    };
    b.prototype.beginFill = function(b) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 1;
      this.styles.writeUnsignedInt(b);
      this.hasFills = !0;
    };
    b.prototype.writeMorphFill = function(b) {
      this.morphStyles.writeUnsignedInt(b);
    };
    b.prototype.endFill = function() {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 4;
    };
    b.prototype.endLine = function() {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 8;
    };
    b.prototype.lineStyle = function(b, a, d, c, m, n, e) {
      this.ensurePathCapacities(2, 0);
      this.commands[this.commandsPosition++] = 5;
      this.coordinates[this.coordinatesPosition++] = b;
      b = this.styles;
      b.writeUnsignedInt(a);
      b.writeBoolean(d);
      b.writeUnsignedByte(c);
      b.writeUnsignedByte(m);
      b.writeUnsignedByte(n);
      b.writeUnsignedByte(e);
      this.hasLines = !0;
    };
    b.prototype.writeMorphLineStyle = function(b, a) {
      this.morphCoordinates[this.coordinatesPosition - 1] = b;
      this.morphStyles.writeUnsignedInt(a);
    };
    b.prototype.beginBitmap = function(b, a, d, c, m) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = b;
      b = this.styles;
      b.writeUnsignedInt(a);
      this._writeStyleMatrix(d, !1);
      b.writeBoolean(c);
      b.writeBoolean(m);
      this.hasFills = !0;
    };
    b.prototype.writeMorphBitmap = function(b) {
      this._writeStyleMatrix(b, !0);
    };
    b.prototype.beginGradient = function(b, a, d, c, m, n, e, h) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = b;
      b = this.styles;
      b.writeUnsignedByte(c);
      b.writeShort(h);
      this._writeStyleMatrix(m, !1);
      c = a.length;
      b.writeByte(c);
      for (m = 0;m < c;m++) {
        b.writeUnsignedByte(d[m]), b.writeUnsignedInt(a[m]);
      }
      b.writeUnsignedByte(n);
      b.writeUnsignedByte(e);
      this.hasFills = !0;
    };
    b.prototype.writeMorphGradient = function(b, a, d) {
      this._writeStyleMatrix(d, !0);
      d = this.morphStyles;
      for (var c = 0;c < b.length;c++) {
        d.writeUnsignedByte(a[c]), d.writeUnsignedInt(b[c]);
      }
    };
    b.prototype.writeCommandAndCoordinates = function(b, a, d) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = d;
    };
    b.prototype.writeCoordinates = function(b, a) {
      this.ensurePathCapacities(0, 2);
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = a;
    };
    b.prototype.writeMorphCoordinates = function(b, a) {
      this.morphCoordinates = k(this.morphCoordinates, this.coordinatesPosition);
      this.morphCoordinates[this.coordinatesPosition - 2] = b;
      this.morphCoordinates[this.coordinatesPosition - 1] = a;
    };
    b.prototype.clear = function() {
      this.commandsPosition = this.coordinatesPosition = 0;
      this.commands = new Uint8Array(32);
      this.coordinates = new Int32Array(128);
      this.styles = new l(16);
      this.styles.endian = "auto";
      this.hasFills = this.hasLines = !1;
    };
    b.prototype.isEmpty = function() {
      return 0 === this.commandsPosition;
    };
    b.prototype.clone = function() {
      var f = new b(!1);
      f.commands = new Uint8Array(this.commands);
      f.commandsPosition = this.commandsPosition;
      f.coordinates = new Int32Array(this.coordinates);
      f.coordinatesPosition = this.coordinatesPosition;
      f.styles = new l(this.styles.length);
      f.styles.writeRawBytes(this.styles.bytes.subarray(0, this.styles.length));
      this.morphStyles && (f.morphStyles = new l(this.morphStyles.length), f.morphStyles.writeRawBytes(this.morphStyles.bytes.subarray(0, this.morphStyles.length)));
      f.hasFills = this.hasFills;
      f.hasLines = this.hasLines;
      return f;
    };
    b.prototype.toPlainObject = function() {
      return new z(this.commands, this.commandsPosition, this.coordinates, this.morphCoordinates, this.coordinatesPosition, this.styles.buffer, this.styles.length, this.morphStyles && this.morphStyles.buffer, this.morphStyles ? this.morphStyles.length : 0, this.hasFills, this.hasLines);
    };
    Object.defineProperty(b.prototype, "buffers", {get:function() {
      var b = [this.commands.buffer, this.coordinates.buffer, this.styles.buffer];
      this.morphCoordinates && b.push(this.morphCoordinates.buffer);
      this.morphStyles && b.push(this.morphStyles.buffer);
      return b;
    }, enumerable:!0, configurable:!0});
    b.prototype._writeStyleMatrix = function(b, a) {
      (a ? this.morphStyles : this.styles).write6Floats(b.a, b.b, b.c, b.d, b.tx, b.ty);
    };
    b.prototype.ensurePathCapacities = function(b, a) {
      this.commands = k(this.commands, this.commandsPosition + b);
      this.coordinates = k(this.coordinates, this.coordinatesPosition + a);
    };
    return b;
  }();
  f.ShapeData = v;
  (function(b) {
    (function(b) {
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
      })(b.SwfTagCode || (b.SwfTagCode = {}));
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
      })(b.DefinitionTags || (b.DefinitionTags = {}));
      (function(a) {
        a[a.CODE_DEFINE_BITS = 6] = "CODE_DEFINE_BITS";
        a[a.CODE_DEFINE_BITS_JPEG2 = 21] = "CODE_DEFINE_BITS_JPEG2";
        a[a.CODE_DEFINE_BITS_JPEG3 = 35] = "CODE_DEFINE_BITS_JPEG3";
        a[a.CODE_DEFINE_BITS_JPEG4 = 90] = "CODE_DEFINE_BITS_JPEG4";
      })(b.ImageDefinitionTags || (b.ImageDefinitionTags = {}));
      (function(a) {
        a[a.CODE_DEFINE_FONT = 10] = "CODE_DEFINE_FONT";
        a[a.CODE_DEFINE_FONT2 = 48] = "CODE_DEFINE_FONT2";
        a[a.CODE_DEFINE_FONT3 = 75] = "CODE_DEFINE_FONT3";
        a[a.CODE_DEFINE_FONT4 = 91] = "CODE_DEFINE_FONT4";
      })(b.FontDefinitionTags || (b.FontDefinitionTags = {}));
      (function(a) {
        a[a.CODE_PLACE_OBJECT = 4] = "CODE_PLACE_OBJECT";
        a[a.CODE_PLACE_OBJECT2 = 26] = "CODE_PLACE_OBJECT2";
        a[a.CODE_PLACE_OBJECT3 = 70] = "CODE_PLACE_OBJECT3";
        a[a.CODE_REMOVE_OBJECT = 5] = "CODE_REMOVE_OBJECT";
        a[a.CODE_REMOVE_OBJECT2 = 28] = "CODE_REMOVE_OBJECT2";
        a[a.CODE_START_SOUND = 15] = "CODE_START_SOUND";
        a[a.CODE_START_SOUND2 = 89] = "CODE_START_SOUND2";
        a[a.CODE_VIDEO_FRAME = 61] = "CODE_VIDEO_FRAME";
      })(b.ControlTags || (b.ControlTags = {}));
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
      })(b.PlaceObjectFlags || (b.PlaceObjectFlags = {}));
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
      })(b.AVM1ClipEvents || (b.AVM1ClipEvents = {}));
      (function(a) {
        a[a.StateUp = 1] = "StateUp";
        a[a.StateOver = 2] = "StateOver";
        a[a.StateDown = 4] = "StateDown";
        a[a.StateHitTest = 8] = "StateHitTest";
        a[a.HasFilterList = 16] = "HasFilterList";
        a[a.HasBlendMode = 32] = "HasBlendMode";
      })(b.ButtonCharacterFlags || (b.ButtonCharacterFlags = {}));
      (function(a) {
        a[a.Bold = 1] = "Bold";
        a[a.Italic = 2] = "Italic";
        a[a.WideOrHasFontData = 4] = "WideOrHasFontData";
        a[a.WideOffset = 8] = "WideOffset";
        a[a.Ansi = 16] = "Ansi";
        a[a.SmallText = 32] = "SmallText";
        a[a.ShiftJis = 64] = "ShiftJis";
        a[a.HasLayout = 128] = "HasLayout";
      })(b.FontFlags || (b.FontFlags = {}));
      (function(a) {
        a[a.HasMoveX = 1] = "HasMoveX";
        a[a.HasMoveY = 2] = "HasMoveY";
        a[a.HasColor = 4] = "HasColor";
        a[a.HasFont = 8] = "HasFont";
      })(b.TextRecordFlags || (b.TextRecordFlags = {}));
      (function(a) {
        a[a.HasInPoint = 1] = "HasInPoint";
        a[a.HasOutPoint = 2] = "HasOutPoint";
        a[a.HasLoops = 4] = "HasLoops";
        a[a.HasEnvelope = 8] = "HasEnvelope";
        a[a.NoMultiple = 16] = "NoMultiple";
        a[a.Stop = 32] = "Stop";
      })(b.SoundInfoFlags || (b.SoundInfoFlags = {}));
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
      })(b.TextFlags || (b.TextFlags = {}));
      (function(a) {
        a[a.UsesScalingStrokes = 1] = "UsesScalingStrokes";
        a[a.UsesNonScalingStrokes = 2] = "UsesNonScalingStrokes";
        a[a.UsesFillWindingRule = 4] = "UsesFillWindingRule";
        a[a.IsMorph = 8] = "IsMorph";
      })(b.ShapeFlags || (b.ShapeFlags = {}));
      (function(a) {
        a[a.Move = 1] = "Move";
        a[a.HasFillStyle0 = 2] = "HasFillStyle0";
        a[a.HasFillStyle1 = 4] = "HasFillStyle1";
        a[a.HasLineStyle = 8] = "HasLineStyle";
        a[a.HasNewStyles = 16] = "HasNewStyles";
        a[a.IsStraight = 32] = "IsStraight";
        a[a.IsGeneral = 64] = "IsGeneral";
        a[a.IsVertical = 128] = "IsVertical";
      })(b.ShapeRecordFlags || (b.ShapeRecordFlags = {}));
    })(b.Parser || (b.Parser = {}));
  })(f.SWF || (f.SWF = {}));
  var B = f.Debug.unexpected;
  v = function() {
    function b(b, a, d, c) {
      this.url = b;
      this.method = a;
      this.mimeType = d;
      this.data = c;
    }
    b.prototype.readAll = function(b, a) {
      var d = this.url, c = this.xhr = new XMLHttpRequest({mozSystem:!0});
      c.open(this.method || "GET", this.url, !0);
      c.responseType = "arraybuffer";
      b && (c.onprogress = function(a) {
        b(c.response, a.loaded, a.total);
      });
      c.onreadystatechange = function(b) {
        4 === c.readyState && (200 !== c.status && 0 !== c.status || null === c.response ? (B("Path: " + d + " not found."), a(null, c.statusText)) : a(c.response));
      };
      this.mimeType && c.setRequestHeader("Content-Type", this.mimeType);
      c.send(this.data || null);
    };
    b.prototype.readChunked = function(b, a, d, c, m, n) {
      if (0 >= b) {
        this.readAsync(a, d, c, m, n);
      } else {
        var e = 0, h = new Uint8Array(b), f = 0, k;
        this.readAsync(function(c, d) {
          k = d.total;
          for (var m = c.length, p = 0;e + m >= b;) {
            var g = b - e;
            h.set(c.subarray(p, p + g), e);
            p += g;
            m -= g;
            f += b;
            a(h, {loaded:f, total:k});
            e = 0;
          }
          h.set(c.subarray(p), e);
          e += m;
        }, d, c, function() {
          0 < e && (f += e, a(h.subarray(0, e), {loaded:f, total:k}), e = 0);
          m && m();
        }, n);
      }
    };
    b.prototype.readAsync = function(b, a, d, c, m) {
      var n = this.xhr = new XMLHttpRequest({mozSystem:!0}), e = this.url, h = 0, f = 0;
      n.open(this.method || "GET", e, !0);
      n.responseType = "moz-chunked-arraybuffer";
      var k = "moz-chunked-arraybuffer" !== n.responseType;
      k && (n.responseType = "arraybuffer");
      n.onprogress = function(a) {
        k || (h = a.loaded, f = a.total, a = new Uint8Array(n.response), h = Math.max(h, a.byteLength), f = Math.max(f, a.byteLength), b(a, {loaded:h, total:f}));
      };
      n.onreadystatechange = function(c) {
        2 === n.readyState && m && m(e, n.status, n.getAllResponseHeaders());
        4 === n.readyState && (200 !== n.status && 0 !== n.status || null === n.response && (0 === f || h !== f) ? a(n.statusText) : k && (c = n.response, b(new Uint8Array(c), {loaded:c.byteLength, total:c.byteLength})));
      };
      n.onload = function() {
        c && c();
      };
      this.mimeType && n.setRequestHeader("Content-Type", this.mimeType);
      n.send(this.data || null);
      d && d();
    };
    b.prototype.abort = function() {
      this.xhr && (this.xhr.abort(), this.xhr = null);
    };
    return b;
  }();
  f.BinaryFileReader = v;
  v = function() {
    function b() {
      this.isAS3TraceOn = !0;
      this._startTime = Date.now();
    }
    Object.defineProperty(b.prototype, "currentTimestamp", {get:function() {
      return Date.now() - this._startTime;
    }, enumerable:!0, configurable:!0});
    b.prototype._writeLine = function(b) {
    };
    b.prototype.writeAS3Trace = function(b) {
    };
    return b;
  }();
  f.FlashLog = v;
  f.flashlog = null;
  (function(b) {
    (function(a) {
      a[a.Objects = 0] = "Objects";
      a[a.References = 1] = "References";
    })(b.RemotingPhase || (b.RemotingPhase = {}));
    (function(a) {
      a[a.HasMatrix = 1] = "HasMatrix";
      a[a.HasBounds = 2] = "HasBounds";
      a[a.HasChildren = 4] = "HasChildren";
      a[a.HasColorTransform = 8] = "HasColorTransform";
      a[a.HasClipRect = 16] = "HasClipRect";
      a[a.HasMiscellaneousProperties = 32] = "HasMiscellaneousProperties";
      a[a.HasMask = 64] = "HasMask";
      a[a.HasClip = 128] = "HasClip";
    })(b.MessageBits || (b.MessageBits = {}));
    (function(a) {
      a[a.None = 0] = "None";
      a[a.Asset = 134217728] = "Asset";
    })(b.IDMask || (b.IDMask = {}));
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
    })(b.MessageTag || (b.MessageTag = {}));
    (function(a) {
      a[a.Blur = 0] = "Blur";
      a[a.DropShadow = 1] = "DropShadow";
      a[a.ColorMatrix = 2] = "ColorMatrix";
    })(b.FilterType || (b.FilterType = {}));
    (function(a) {
      a[a.Identity = 0] = "Identity";
      a[a.AlphaMultiplierOnly = 1] = "AlphaMultiplierOnly";
      a[a.AlphaMultiplierWithOffsets = 2] = "AlphaMultiplierWithOffsets";
      a[a.All = 3] = "All";
    })(b.ColorTransformEncoding || (b.ColorTransformEncoding = {}));
    (function(a) {
      a[a.TranslationOnly = 0] = "TranslationOnly";
      a[a.ScaleAndTranslationOnly = 1] = "ScaleAndTranslationOnly";
      a[a.UniformScaleAndTranslationOnly = 2] = "UniformScaleAndTranslationOnly";
      a[a.All = 3] = "All";
    })(b.MatrixEncoding || (b.MatrixEncoding = {}));
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
    })(b.VideoPlaybackEvent || (b.VideoPlaybackEvent = {}));
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
    })(b.VideoControlEvent || (b.VideoControlEvent = {}));
    (function(a) {
      a[a.ShowAll = 0] = "ShowAll";
      a[a.ExactFit = 1] = "ExactFit";
      a[a.NoBorder = 2] = "NoBorder";
      a[a.NoScale = 4] = "NoScale";
    })(b.StageScaleMode || (b.StageScaleMode = {}));
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
    })(b.StageAlignFlags || (b.StageAlignFlags = {}));
    b.MouseEventNames = "click dblclick mousedown mousemove mouseup mouseover mouseout".split(" ");
    b.KeyboardEventNames = ["keydown", "keypress", "keyup"];
    (function(a) {
      a[a.CtrlKey = 1] = "CtrlKey";
      a[a.AltKey = 2] = "AltKey";
      a[a.ShiftKey = 4] = "ShiftKey";
    })(b.KeyboardEventFlags || (b.KeyboardEventFlags = {}));
    (function(a) {
      a[a.DocumentHidden = 0] = "DocumentHidden";
      a[a.DocumentVisible = 1] = "DocumentVisible";
      a[a.WindowBlur = 2] = "WindowBlur";
      a[a.WindowFocus = 3] = "WindowFocus";
    })(b.FocusEventType || (b.FocusEventType = {}));
    var f = function() {
      function a(a, c) {
        this.window = a;
        this.target = c;
      }
      Object.defineProperty(a.prototype, "onAsyncMessage", {set:function(a) {
        this.window.addEventListener("message", function(c) {
          Promise.resolve(c.data).then(function(c) {
            a(c);
          });
        });
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "onSyncMessage", {set:function(a) {
        this.window.addEventListener("syncmessage", function(c) {
          c = c.detail;
          c.result = a(c.msg);
        });
      }, enumerable:!0, configurable:!0});
      a.prototype.postAsyncMessage = function(a, c) {
        this.target.postMessage(a, "*", c);
      };
      a.prototype.sendSyncMessage = function(a, c) {
        var b = this.target.document.createEvent("CustomEvent"), n = {msg:a, result:void 0};
        b.initCustomEvent("syncmessage", !1, !1, n);
        this.target.dispatchEvent(b);
        return n.result;
      };
      return a;
    }();
    b.WindowTransportPeer = f;
    f = function() {
      function a() {
      }
      Object.defineProperty(a.prototype, "onAsyncMessage", {set:function(a) {
        ShumwayCom.setAsyncMessageCallback(a);
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "onSyncMessage", {set:function(a) {
        ShumwayCom.setSyncMessageCallback(a);
      }, enumerable:!0, configurable:!0});
      a.prototype.postAsyncMessage = function(a, c) {
        ShumwayCom.postAsyncMessage(a);
      };
      a.prototype.sendSyncMessage = function(a, c) {
        return ShumwayCom.sendSyncMessage(a);
      };
      return a;
    }();
    b.ShumwayComTransportPeer = f;
  })(f.Remoting || (f.Remoting = {}));
})(Shumway || (Shumway = {}));
var throwError, Errors;
(function(f) {
  (function(f) {
    (function(f) {
      var l = function() {
        function f() {
        }
        f.toRGBA = function(b, f, a, d) {
          void 0 === d && (d = 1);
          return "rgba(" + b + "," + f + "," + a + "," + d + ")";
        };
        return f;
      }();
      f.UI = l;
      var v = function() {
        function f() {
        }
        f.prototype.tabToolbar = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(37, 44, 51, b);
        };
        f.prototype.toolbars = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(52, 60, 69, b);
        };
        f.prototype.selectionBackground = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(29, 79, 115, b);
        };
        f.prototype.selectionText = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(245, 247, 250, b);
        };
        f.prototype.splitters = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(0, 0, 0, b);
        };
        f.prototype.bodyBackground = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(17, 19, 21, b);
        };
        f.prototype.sidebarBackground = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(24, 29, 32, b);
        };
        f.prototype.attentionBackground = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(161, 134, 80, b);
        };
        f.prototype.bodyText = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(143, 161, 178, b);
        };
        f.prototype.foregroundTextGrey = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(182, 186, 191, b);
        };
        f.prototype.contentTextHighContrast = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(169, 186, 203, b);
        };
        f.prototype.contentTextGrey = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(143, 161, 178, b);
        };
        f.prototype.contentTextDarkGrey = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(95, 115, 135, b);
        };
        f.prototype.blueHighlight = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(70, 175, 227, b);
        };
        f.prototype.purpleHighlight = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(107, 122, 187, b);
        };
        f.prototype.pinkHighlight = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(223, 128, 255, b);
        };
        f.prototype.redHighlight = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(235, 83, 104, b);
        };
        f.prototype.orangeHighlight = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(217, 102, 41, b);
        };
        f.prototype.lightOrangeHighlight = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(217, 155, 40, b);
        };
        f.prototype.greenHighlight = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(112, 191, 83, b);
        };
        f.prototype.blueGreyHighlight = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(94, 136, 176, b);
        };
        return f;
      }();
      f.UIThemeDark = v;
      v = function() {
        function f() {
        }
        f.prototype.tabToolbar = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(235, 236, 237, b);
        };
        f.prototype.toolbars = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(240, 241, 242, b);
        };
        f.prototype.selectionBackground = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(76, 158, 217, b);
        };
        f.prototype.selectionText = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(245, 247, 250, b);
        };
        f.prototype.splitters = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(170, 170, 170, b);
        };
        f.prototype.bodyBackground = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(252, 252, 252, b);
        };
        f.prototype.sidebarBackground = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(247, 247, 247, b);
        };
        f.prototype.attentionBackground = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(161, 134, 80, b);
        };
        f.prototype.bodyText = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(24, 25, 26, b);
        };
        f.prototype.foregroundTextGrey = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(88, 89, 89, b);
        };
        f.prototype.contentTextHighContrast = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(41, 46, 51, b);
        };
        f.prototype.contentTextGrey = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(143, 161, 178, b);
        };
        f.prototype.contentTextDarkGrey = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(102, 115, 128, b);
        };
        f.prototype.blueHighlight = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(0, 136, 204, b);
        };
        f.prototype.purpleHighlight = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(91, 95, 255, b);
        };
        f.prototype.pinkHighlight = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(184, 46, 229, b);
        };
        f.prototype.redHighlight = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(237, 38, 85, b);
        };
        f.prototype.orangeHighlight = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(241, 60, 0, b);
        };
        f.prototype.lightOrangeHighlight = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(217, 126, 0, b);
        };
        f.prototype.greenHighlight = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(44, 187, 15, b);
        };
        f.prototype.blueGreyHighlight = function(b) {
          void 0 === b && (b = 1);
          return l.toRGBA(95, 136, 176, b);
        };
        return f;
      }();
      f.UIThemeLight = v;
    })(f.Theme || (f.Theme = {}));
    (function(f) {
      var l = function() {
        function f(k, b) {
          this._buffers = k || [];
          this._snapshots = [];
          this._windowStart = this._startTime = b;
          this._maxDepth = 0;
        }
        f.prototype.addBuffer = function(f) {
          this._buffers.push(f);
        };
        f.prototype.getSnapshotAt = function(f) {
          return this._snapshots[f];
        };
        Object.defineProperty(f.prototype, "hasSnapshots", {get:function() {
          return 0 < this.snapshotCount;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(f.prototype, "snapshotCount", {get:function() {
          return this._snapshots.length;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(f.prototype, "startTime", {get:function() {
          return this._startTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(f.prototype, "endTime", {get:function() {
          return this._endTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(f.prototype, "totalTime", {get:function() {
          return this.endTime - this.startTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(f.prototype, "windowStart", {get:function() {
          return this._windowStart;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(f.prototype, "windowEnd", {get:function() {
          return this._windowEnd;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(f.prototype, "windowLength", {get:function() {
          return this.windowEnd - this.windowStart;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(f.prototype, "maxDepth", {get:function() {
          return this._maxDepth;
        }, enumerable:!0, configurable:!0});
        f.prototype.forEachSnapshot = function(f) {
          for (var b = 0, k = this.snapshotCount;b < k;b++) {
            f(this._snapshots[b], b);
          }
        };
        f.prototype.createSnapshots = function() {
          var f = Number.MIN_VALUE, b = 0;
          for (this._snapshots = [];0 < this._buffers.length;) {
            var k = this._buffers.shift().createSnapshot();
            k && (f < k.endTime && (f = k.endTime), b < k.maxDepth && (b = k.maxDepth), this._snapshots.push(k));
          }
          this._windowEnd = this._endTime = f;
          this._maxDepth = b;
        };
        f.prototype.setWindow = function(f, b) {
          if (f > b) {
            var k = f;
            f = b;
            b = k;
          }
          k = Math.min(b - f, this.totalTime);
          f < this._startTime ? (f = this._startTime, b = this._startTime + k) : b > this._endTime && (f = this._endTime - k, b = this._endTime);
          this._windowStart = f;
          this._windowEnd = b;
        };
        f.prototype.moveWindowTo = function(f) {
          this.setWindow(f - this.windowLength / 2, f + this.windowLength / 2);
        };
        return f;
      }();
      f.Profile = l;
    })(f.Profiler || (f.Profiler = {}));
  })(f.Tools || (f.Tools = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(f, l) {
  function k() {
    this.constructor = f;
  }
  for (var z in l) {
    l.hasOwnProperty(z) && (f[z] = l[z]);
  }
  k.prototype = l.prototype;
  f.prototype = new k;
};
(function(f) {
  (function(l) {
    (function(k) {
      var z = function() {
        return function(a) {
          this.kind = a;
          this.totalTime = this.selfTime = this.count = 0;
        };
      }();
      k.TimelineFrameStatistics = z;
      var v = function() {
        function a(a, c, b, f, e, h) {
          this.parent = a;
          this.kind = c;
          this.startData = b;
          this.endData = f;
          this.startTime = e;
          this.endTime = h;
          this.maxDepth = 0;
        }
        Object.defineProperty(a.prototype, "totalTime", {get:function() {
          return this.endTime - this.startTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "selfTime", {get:function() {
          var a = this.totalTime;
          if (this.children) {
            for (var c = 0, b = this.children.length;c < b;c++) {
              var f = this.children[c], a = a - (f.endTime - f.startTime)
            }
          }
          return a;
        }, enumerable:!0, configurable:!0});
        a.prototype.getChildIndex = function(a) {
          for (var c = this.children, b = 0;b < c.length;b++) {
            if (c[b].endTime > a) {
              return b;
            }
          }
          return 0;
        };
        a.prototype.getChildRange = function(a, c) {
          if (this.children && a <= this.endTime && c >= this.startTime && c >= a) {
            var b = this._getNearestChild(a), f = this._getNearestChildReverse(c);
            if (b <= f) {
              return a = this.children[b].startTime, c = this.children[f].endTime, {startIndex:b, endIndex:f, startTime:a, endTime:c, totalTime:c - a};
            }
          }
          return null;
        };
        a.prototype._getNearestChild = function(a) {
          var c = this.children;
          if (c && c.length) {
            if (a <= c[0].endTime) {
              return 0;
            }
            for (var b, f = 0, e = c.length - 1;e > f;) {
              b = (f + e) / 2 | 0;
              var h = c[b];
              if (a >= h.startTime && a <= h.endTime) {
                return b;
              }
              a > h.endTime ? f = b + 1 : e = b;
            }
            return Math.ceil((f + e) / 2);
          }
          return 0;
        };
        a.prototype._getNearestChildReverse = function(a) {
          var c = this.children;
          if (c && c.length) {
            var b = c.length - 1;
            if (a >= c[b].startTime) {
              return b;
            }
            for (var f, e = 0;b > e;) {
              f = Math.ceil((e + b) / 2);
              var h = c[f];
              if (a >= h.startTime && a <= h.endTime) {
                return f;
              }
              a > h.endTime ? e = f : b = f - 1;
            }
            return (e + b) / 2 | 0;
          }
          return 0;
        };
        a.prototype.query = function(a) {
          if (a < this.startTime || a > this.endTime) {
            return null;
          }
          var c = this.children;
          if (c && 0 < c.length) {
            for (var b, f = 0, e = c.length - 1;e > f;) {
              var h = (f + e) / 2 | 0;
              b = c[h];
              if (a >= b.startTime && a <= b.endTime) {
                return b.query(a);
              }
              a > b.endTime ? f = h + 1 : e = h;
            }
            b = c[e];
            if (a >= b.startTime && a <= b.endTime) {
              return b.query(a);
            }
          }
          return this;
        };
        a.prototype.queryNext = function(a) {
          for (var c = this;a > c.endTime;) {
            if (c.parent) {
              c = c.parent;
            } else {
              break;
            }
          }
          return c.query(a);
        };
        a.prototype.getDepth = function() {
          for (var a = 0, c = this;c;) {
            a++, c = c.parent;
          }
          return a;
        };
        a.prototype.calculateStatistics = function() {
          function a(b) {
            if (b.kind) {
              var f = c[b.kind.id] || (c[b.kind.id] = new z(b.kind));
              f.count++;
              f.selfTime += b.selfTime;
              f.totalTime += b.totalTime;
            }
            b.children && b.children.forEach(a);
          }
          var c = this.statistics = [];
          a(this);
        };
        a.prototype.trace = function(a) {
          var c = (this.kind ? this.kind.name + ": " : "Profile: ") + (this.endTime - this.startTime).toFixed(2);
          if (this.children && this.children.length) {
            a.enter(c);
            for (c = 0;c < this.children.length;c++) {
              this.children[c].trace(a);
            }
            a.outdent();
          } else {
            a.writeLn(c);
          }
        };
        return a;
      }();
      k.TimelineFrame = v;
      v = function(a) {
        function d(c) {
          a.call(this, null, null, null, null, NaN, NaN);
          this.name = c;
        }
        __extends(d, a);
        return d;
      }(v);
      k.TimelineBufferSnapshot = v;
      v = function() {
        function a(a, c) {
          void 0 === a && (a = "");
          this.name = a || "";
          this._startTime = f.isNullOrUndefined(c) ? jsGlobal.START_TIME : c;
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
        a.prototype._getKindId = function(d) {
          var c = a.MAX_KINDID;
          if (void 0 === this._kindNameMap[d]) {
            if (c = this._kinds.length, c < a.MAX_KINDID) {
              var b = {id:c, name:d, visible:!0};
              this._kinds.push(b);
              this._kindNameMap[d] = b;
            } else {
              c = a.MAX_KINDID;
            }
          } else {
            c = this._kindNameMap[d].id;
          }
          return c;
        };
        a.prototype._getMark = function(d, c, b) {
          var n = a.MAX_DATAID;
          f.isNullOrUndefined(b) || c === a.MAX_KINDID || (n = this._data.length, n < a.MAX_DATAID ? this._data.push(b) : n = a.MAX_DATAID);
          return d | n << 16 | c;
        };
        a.prototype.enter = function(d, c, b) {
          b = (f.isNullOrUndefined(b) ? performance.now() : b) - this._startTime;
          this._marks || this._initialize();
          this._depth++;
          d = this._getKindId(d);
          this._marks.write(this._getMark(a.ENTER, d, c));
          this._times.write(b);
          this._stack.push(d);
        };
        a.prototype.leave = function(d, c, b) {
          b = (f.isNullOrUndefined(b) ? performance.now() : b) - this._startTime;
          var n = this._stack.pop();
          d && (n = this._getKindId(d));
          this._marks.write(this._getMark(a.LEAVE, n, c));
          this._times.write(b);
          this._depth--;
        };
        a.prototype.count = function(a, c, b) {
        };
        a.prototype.createSnapshot = function(d) {
          void 0 === d && (d = Number.MAX_VALUE);
          if (!this._marks) {
            return null;
          }
          var c = this._times, b = this._kinds, n = this._data, e = new k.TimelineBufferSnapshot(this.name), h = [e], l = 0;
          this._marks || this._initialize();
          this._marks.forEachInReverse(function(e, q) {
            var t = n[e >>> 16 & a.MAX_DATAID], x = b[e & a.MAX_KINDID];
            if (f.isNullOrUndefined(x) || x.visible) {
              var p = e & 2147483648, g = c.get(q), r = h.length;
              if (p === a.LEAVE) {
                if (1 === r && (l++, l > d)) {
                  return !0;
                }
                h.push(new k.TimelineFrame(h[r - 1], x, null, t, NaN, g));
              } else {
                if (p === a.ENTER) {
                  if (x = h.pop(), p = h[h.length - 1]) {
                    for (p.children ? p.children.unshift(x) : p.children = [x], p = h.length, x.depth = p, x.startData = t, x.startTime = g;x;) {
                      if (x.maxDepth < p) {
                        x.maxDepth = p, x = x.parent;
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
        a.FromFirefoxProfile = function(d, c) {
          for (var b = d.profile.threads[0].samples, f = new a(c, b[0].time), e = [], h, k = 0;k < b.length;k++) {
            h = b[k];
            var l = h.time, q = h.frames, t = 0;
            for (h = Math.min(q.length, e.length);t < h && q[t].location === e[t].location;) {
              t++;
            }
            for (var x = e.length - t, p = 0;p < x;p++) {
              h = e.pop(), f.leave(h.location, null, l);
            }
            for (;t < q.length;) {
              h = q[t++], f.enter(h.location, null, l);
            }
            e = q;
          }
          for (;h = e.pop();) {
            f.leave(h.location, null, l);
          }
          return f;
        };
        a.FromChromeProfile = function(d, c) {
          var b = d.timestamps, f = d.samples, e = new a(c, b[0] / 1E3), h = [], k = {}, l;
          a._resolveIds(d.head, k);
          for (var q = 0;q < b.length;q++) {
            var t = b[q] / 1E3, x = [];
            for (l = k[f[q]];l;) {
              x.unshift(l), l = l.parent;
            }
            var p = 0;
            for (l = Math.min(x.length, h.length);p < l && x[p] === h[p];) {
              p++;
            }
            for (var g = h.length - p, r = 0;r < g;r++) {
              l = h.pop(), e.leave(l.functionName, null, t);
            }
            for (;p < x.length;) {
              l = x[p++], e.enter(l.functionName, null, t);
            }
            h = x;
          }
          for (;l = h.pop();) {
            e.leave(l.functionName, null, t);
          }
          return e;
        };
        a._resolveIds = function(d, c) {
          c[d.id] = d;
          if (d.children) {
            for (var b = 0;b < d.children.length;b++) {
              d.children[b].parent = d, a._resolveIds(d.children[b], c);
            }
          }
        };
        a.ENTER = 0;
        a.LEAVE = -2147483648;
        a.MAX_KINDID = 65535;
        a.MAX_DATAID = 32767;
        return a;
      }();
      k.TimelineBuffer = v;
      (function(a) {
        a[a.DARK = 0] = "DARK";
        a[a.LIGHT = 1] = "LIGHT";
      })(k.UIThemeType || (k.UIThemeType = {}));
      v = function() {
        function a(a, c) {
          void 0 === c && (c = 0);
          this._container = a;
          this._headers = [];
          this._charts = [];
          this._profiles = [];
          this._activeProfile = null;
          this.themeType = c;
          this._tooltip = this._createTooltip();
        }
        a.prototype.createProfile = function(a, c) {
          var b = new k.Profile(a, c);
          b.createSnapshots();
          this._profiles.push(b);
          this.activateProfile(b);
          return b;
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
              this._theme = new l.Theme.UIThemeDark;
              break;
            case 1:
              this._theme = new l.Theme.UIThemeLight;
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
            this._overviewHeader = new k.FlameChartHeader(this, 0);
            this._overview = new k.FlameChartOverview(this, 0);
            this._activeProfile.forEachSnapshot(function(c, b) {
              a._headers.push(new k.FlameChartHeader(a, 1));
              a._charts.push(new k.FlameChart(a, c));
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
            var a = this, c = this._activeProfile.startTime, b = this._activeProfile.endTime;
            this._overviewHeader.initialize(c, b);
            this._overview.initialize(c, b);
            this._activeProfile.forEachSnapshot(function(f, e) {
              a._headers[e].initialize(c, b);
              a._charts[e].initialize(c, b);
            });
          }
        };
        a.prototype._onResize = function() {
          if (this._activeProfile) {
            var a = this, c = this._container.offsetWidth;
            this._overviewHeader.setSize(c);
            this._overview.setSize(c);
            this._activeProfile.forEachSnapshot(function(b, f) {
              a._headers[f].setSize(c);
              a._charts[f].setSize(c);
            });
          }
        };
        a.prototype._updateViews = function() {
          if (this._activeProfile) {
            var a = this, c = this._activeProfile.windowStart, b = this._activeProfile.windowEnd;
            this._overviewHeader.setWindow(c, b);
            this._overview.setWindow(c, b);
            this._activeProfile.forEachSnapshot(function(f, e) {
              a._headers[e].setWindow(c, b);
              a._charts[e].setWindow(c, b);
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
        a.prototype.showTooltip = function(a, c, b, f) {
          this.removeTooltipContent();
          this._tooltip.appendChild(this.createTooltipContent(a, c));
          this._tooltip.style.display = "block";
          var e = this._tooltip.firstChild;
          c = e.clientWidth;
          e = e.clientHeight;
          b += b + c >= a.canvas.clientWidth - 50 ? -(c + 20) : 25;
          f += a.canvas.offsetTop - e / 2;
          this._tooltip.style.left = b + "px";
          this._tooltip.style.top = f + "px";
        };
        a.prototype.hideTooltip = function() {
          this._tooltip.style.display = "none";
        };
        a.prototype.createTooltipContent = function(a, c) {
          var b = Math.round(1E5 * c.totalTime) / 1E5, f = Math.round(1E5 * c.selfTime) / 1E5, e = Math.round(1E4 * c.selfTime / c.totalTime) / 100, h = document.createElement("div"), k = document.createElement("h1");
          k.textContent = c.kind.name;
          h.appendChild(k);
          k = document.createElement("p");
          k.textContent = "Total: " + b + " ms";
          h.appendChild(k);
          b = document.createElement("p");
          b.textContent = "Self: " + f + " ms (" + e + "%)";
          h.appendChild(b);
          if (f = a.getStatistics(c.kind)) {
            e = document.createElement("p"), e.textContent = "Count: " + f.count, h.appendChild(e), e = Math.round(1E5 * f.totalTime) / 1E5, b = document.createElement("p"), b.textContent = "All Total: " + e + " ms", h.appendChild(b), f = Math.round(1E5 * f.selfTime) / 1E5, e = document.createElement("p"), e.textContent = "All Self: " + f + " ms", h.appendChild(e);
          }
          this.appendDataElements(h, c.startData);
          this.appendDataElements(h, c.endData);
          return h;
        };
        a.prototype.appendDataElements = function(a, c) {
          if (!f.isNullOrUndefined(c)) {
            a.appendChild(document.createElement("hr"));
            var b;
            if (f.isObject(c)) {
              for (var n in c) {
                b = document.createElement("p"), b.textContent = n + ": " + c[n], a.appendChild(b);
              }
            } else {
              b = document.createElement("p"), b.textContent = c.toString(), a.appendChild(b);
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
      k.Controller = v;
      var B = f.NumberUtilities.clamp, b = function() {
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
      k.MouseCursor = b;
      v = function() {
        function a(a, c) {
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
        a.prototype.updateCursor = function(d) {
          if (!a._cursorOwner || a._cursorOwner === this._target) {
            var c = this._eventTarget.parentElement;
            a._cursor !== d && (a._cursor = d, ["", "-moz-", "-webkit-"].forEach(function(a) {
              c.style.cursor = a + d;
            }));
            a._cursorOwner = a._cursor === b.DEFAULT ? null : this._target;
          }
        };
        a.prototype._onMouseDown = function(a) {
          this._killHoverCheck();
          if (0 === a.button) {
            var c = this._getTargetMousePos(a, a.target);
            this._dragInfo = {start:c, current:c, delta:{x:0, y:0}, hasMoved:!1, originalTarget:a.target};
            window.addEventListener("mousemove", this._boundOnDrag, !1);
            window.addEventListener("mouseup", this._boundOnMouseUp, !1);
            this._target.onMouseDown(c.x, c.y);
          }
        };
        a.prototype._onDrag = function(a) {
          var c = this._dragInfo;
          a = this._getTargetMousePos(a, c.originalTarget);
          var b = {x:a.x - c.start.x, y:a.y - c.start.y};
          c.current = a;
          c.delta = b;
          c.hasMoved = !0;
          this._target.onDrag(c.start.x, c.start.y, a.x, a.y, b.x, b.y);
        };
        a.prototype._onMouseUp = function(a) {
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
        a.prototype._onMouseOver = function(a) {
          a.target.addEventListener("mousemove", this._boundOnMouseMove, !1);
          if (!this._dragInfo) {
            var c = this._getTargetMousePos(a, a.target);
            this._target.onMouseOver(c.x, c.y);
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
            var c = this._getTargetMousePos(a, a.target);
            this._target.onMouseMove(c.x, c.y);
            this._killHoverCheck();
            this._startHoverCheck(a);
          }
        };
        a.prototype._onMouseWheel = function(a) {
          if (!(a.altKey || a.metaKey || a.ctrlKey || a.shiftKey || (a.preventDefault(), this._dragInfo || this._wheelDisabled))) {
            var c = this._getTargetMousePos(a, a.target);
            a = B("undefined" !== typeof a.deltaY ? a.deltaY / 16 : -a.wheelDelta / 40, -1, 1);
            a = Math.pow(1.2, a) - 1;
            this._target.onMouseWheel(c.x, c.y, a);
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
        a.prototype._getTargetMousePos = function(a, c) {
          var b = c.getBoundingClientRect();
          return {x:a.clientX - b.left, y:a.clientY - b.top};
        };
        a.HOVER_TIMEOUT = 500;
        a._cursor = b.DEFAULT;
        return a;
      }();
      k.MouseController = v;
      (function(a) {
        a[a.NONE = 0] = "NONE";
        a[a.WINDOW = 1] = "WINDOW";
        a[a.HANDLE_LEFT = 2] = "HANDLE_LEFT";
        a[a.HANDLE_RIGHT = 3] = "HANDLE_RIGHT";
        a[a.HANDLE_BOTH = 4] = "HANDLE_BOTH";
      })(k.FlameChartDragTarget || (k.FlameChartDragTarget = {}));
      v = function() {
        function a(a) {
          this._controller = a;
          this._initialized = !1;
          this._canvas = document.createElement("canvas");
          this._context = this._canvas.getContext("2d");
          this._mouseController = new k.MouseController(this, this._canvas);
          a = a.container;
          a.appendChild(this._canvas);
          a = a.getBoundingClientRect();
          this.setSize(a.width);
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
        a.prototype.setWindow = function(a, c, b) {
          void 0 === b && (b = !0);
          this._windowStart = a;
          this._windowEnd = c;
          !b || this.draw();
        };
        a.prototype.setRange = function(a, c, b) {
          void 0 === b && (b = !0);
          this._rangeStart = a;
          this._rangeEnd = c;
          !b || this.draw();
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
        a.prototype._almostEq = function(a, c, b) {
          void 0 === b && (b = 10);
          b = Math.pow(10, b);
          return Math.abs(a - c) < 1 / b;
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
        a.prototype.onMouseWheel = function(b, c, f) {
          b = this._toTime(b);
          c = this._windowStart;
          var n = this._windowEnd, e = n - c;
          f = Math.max((a.MIN_WINDOW_LEN - e) / e, f);
          this._controller.setWindow(c + (c - b) * f, n + (n - b) * f);
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
        a.prototype.onDrag = function(a, c, b, f, e, h) {
        };
        a.prototype.onDragEnd = function(a, c, b, f, e, h) {
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
      k.FlameChartBase = v;
      var q = f.StringUtilities.trimMiddle, v = function(a) {
        function b(c, d) {
          a.call(this, c);
          this._textWidth = {};
          this._minFrameWidthInPixels = 1;
          this._snapshot = d;
          this._kindStyle = Object.create(null);
        }
        __extends(b, a);
        b.prototype.setSize = function(c, b) {
          a.prototype.setSize.call(this, c, b || this._initialized ? 12.5 * this._maxDepth : 100);
        };
        b.prototype.initialize = function(a, b) {
          this._initialized = !0;
          this._maxDepth = this._snapshot.maxDepth;
          this.setRange(a, b, !1);
          this.setWindow(a, b, !1);
          this.setSize(this._width, 12.5 * this._maxDepth);
        };
        b.prototype.destroy = function() {
          a.prototype.destroy.call(this);
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
          var d = a.getChildRange(this._windowStart, this._windowEnd);
          if (d) {
            for (var e = d.startIndex;e <= d.endIndex;e++) {
              var h = a.children[e];
              this._drawFrame(h, b) && this._drawChildren(h, b + 1);
            }
          }
        };
        b.prototype._drawFrame = function(a, b) {
          var d = this._context, e = this._toPixels(a.startTime), h = this._toPixels(a.endTime), k = h - e;
          if (k <= this._minFrameWidthInPixels) {
            return d.fillStyle = this._controller.theme.tabToolbar(1), d.fillRect(e, 12.5 * b, this._minFrameWidthInPixels, 12 + 12.5 * (a.maxDepth - a.depth)), !1;
          }
          0 > e && (h = k + e, e = 0);
          var h = h - e, l = this._kindStyle[a.kind.id];
          l || (l = f.ColorStyle.randomStyle(), l = this._kindStyle[a.kind.id] = {bgColor:l, textColor:f.ColorStyle.contrastStyle(l)});
          d.save();
          d.fillStyle = l.bgColor;
          d.fillRect(e, 12.5 * b, h, 12);
          12 < k && (k = a.kind.name) && k.length && (k = this._prepareText(d, k, h - 4), k.length && (d.fillStyle = l.textColor, d.textBaseline = "bottom", d.fillText(k, e + 2, 12.5 * (b + 1) - 1)));
          d.restore();
          return !0;
        };
        b.prototype._prepareText = function(a, b, d) {
          var e = this._measureWidth(a, b);
          if (d > e) {
            return b;
          }
          for (var e = 3, h = b.length;e < h;) {
            var f = e + h >> 1;
            this._measureWidth(a, q(b, f)) < d ? e = f + 1 : h = f;
          }
          b = q(b, h - 1);
          e = this._measureWidth(a, b);
          return e <= d ? b : "";
        };
        b.prototype._measureWidth = function(a, b) {
          var d = this._textWidth[b];
          d || (d = a.measureText(b).width, this._textWidth[b] = d);
          return d;
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
          var d = this._toTime(a), e = 1 + b / 12.5 | 0;
          if ((d = this._snapshot.query(d)) && d.depth >= e) {
            for (;d && d.depth > e;) {
              d = d.parent;
            }
            return d;
          }
          return null;
        };
        b.prototype.onMouseDown = function(a, b) {
          this._windowEqRange() || (this._mouseController.updateCursor(k.MouseCursor.ALL_SCROLL), this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:1});
        };
        b.prototype.onMouseMove = function(a, b) {
        };
        b.prototype.onMouseOver = function(a, b) {
        };
        b.prototype.onMouseOut = function() {
        };
        b.prototype.onDrag = function(a, b, d, e, h, f) {
          if (a = this._dragInfo) {
            h = this._toTimeRelative(-h), this._controller.setWindow(a.windowStartInitial + h, a.windowEndInitial + h);
          }
        };
        b.prototype.onDragEnd = function(a, b, d, e, h, f) {
          this._dragInfo = null;
          this._mouseController.updateCursor(k.MouseCursor.DEFAULT);
        };
        b.prototype.onClick = function(a, b) {
          this._dragInfo = null;
          this._mouseController.updateCursor(k.MouseCursor.DEFAULT);
        };
        b.prototype.onHoverStart = function(a, b) {
          var d = this._getFrameAtPosition(a, b);
          d && (this._hoveredFrame = d, this._controller.showTooltip(this, d, a, b));
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
      }(k.FlameChartBase);
      k.FlameChart = v;
      B = f.NumberUtilities.clamp;
      (function(a) {
        a[a.OVERLAY = 0] = "OVERLAY";
        a[a.STACK = 1] = "STACK";
        a[a.UNION = 2] = "UNION";
      })(k.FlameChartOverviewMode || (k.FlameChartOverviewMode = {}));
      v = function(a) {
        function b(c, d) {
          void 0 === d && (d = 1);
          this._mode = d;
          this._overviewCanvasDirty = !0;
          this._overviewCanvas = document.createElement("canvas");
          this._overviewContext = this._overviewCanvas.getContext("2d");
          a.call(this, c);
        }
        __extends(b, a);
        b.prototype.setSize = function(c, b) {
          a.prototype.setSize.call(this, c, b || 64);
        };
        Object.defineProperty(b.prototype, "mode", {set:function(a) {
          this._mode = a;
          this.draw();
        }, enumerable:!0, configurable:!0});
        b.prototype._resetCanvas = function() {
          a.prototype._resetCanvas.call(this);
          this._overviewCanvas.width = this._canvas.width;
          this._overviewCanvas.height = this._canvas.height;
          this._overviewCanvasDirty = !0;
        };
        b.prototype.draw = function() {
          var a = this._context, b = window.devicePixelRatio, d = this._width, e = this._height;
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.bodyBackground(1);
          a.fillRect(0, 0, d, e);
          a.restore();
          this._initialized && (this._overviewCanvasDirty && (this._drawChart(), this._overviewCanvasDirty = !1), a.drawImage(this._overviewCanvas, 0, 0), this._drawSelection());
        };
        b.prototype._drawSelection = function() {
          var a = this._context, b = this._height, d = window.devicePixelRatio, e = this._selection ? this._selection.left : this._toPixels(this._windowStart), h = this._selection ? this._selection.right : this._toPixels(this._windowEnd), f = this._controller.theme;
          a.save();
          a.scale(d, d);
          this._selection ? (a.fillStyle = f.selectionText(.15), a.fillRect(e, 1, h - e, b - 1), a.fillStyle = "rgba(133, 0, 0, 1)", a.fillRect(e + .5, 0, h - e - 1, 4), a.fillRect(e + .5, b - 4, h - e - 1, 4)) : (a.fillStyle = f.bodyBackground(.4), a.fillRect(0, 1, e, b - 1), a.fillRect(h, 1, this._width, b - 1));
          a.beginPath();
          a.moveTo(e, 0);
          a.lineTo(e, b);
          a.moveTo(h, 0);
          a.lineTo(h, b);
          a.lineWidth = .5;
          a.strokeStyle = f.foregroundTextGrey(1);
          a.stroke();
          b = this._selection ? this._toTime(this._selection.left) : this._windowStart;
          d = this._selection ? this._toTime(this._selection.right) : this._windowEnd;
          b = Math.abs(d - b);
          a.fillStyle = f.selectionText(.5);
          a.font = "8px sans-serif";
          a.textBaseline = "alphabetic";
          a.textAlign = "end";
          a.fillText(b.toFixed(2), Math.min(e, h) - 4, 10);
          a.fillText((b / 60).toFixed(2), Math.min(e, h) - 4, 20);
          a.restore();
        };
        b.prototype._drawChart = function() {
          var a = window.devicePixelRatio, b = this._height, d = this._controller.activeProfile, e = 4 * this._width, h = d.totalTime / e, f = this._overviewContext, k = this._controller.theme.blueHighlight(1);
          f.save();
          f.translate(0, a * b);
          var l = -a * b / (d.maxDepth - 1);
          f.scale(a / 4, l);
          f.clearRect(0, 0, e, d.maxDepth - 1);
          1 == this._mode && f.scale(1, 1 / d.snapshotCount);
          for (var q = 0, x = d.snapshotCount;q < x;q++) {
            var p = d.getSnapshotAt(q);
            if (p) {
              var g = null, r = 0;
              f.beginPath();
              f.moveTo(0, 0);
              for (var F = 0;F < e;F++) {
                r = d.startTime + F * h, r = (g = g ? g.queryNext(r) : p.query(r)) ? g.getDepth() - 1 : 0, f.lineTo(F, r);
              }
              f.lineTo(F, 0);
              f.fillStyle = k;
              f.fill();
              1 == this._mode && f.translate(0, -b * a / l);
            }
          }
          f.restore();
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
            var d = this._toPixels(this._windowStart), e = this._toPixels(this._windowEnd), h = 2 + k.FlameChartBase.DRAGHANDLE_WIDTH / 2, f = a >= d - h && a <= d + h, l = a >= e - h && a <= e + h;
            if (f && l) {
              return 4;
            }
            if (f) {
              return 2;
            }
            if (l) {
              return 3;
            }
            if (!this._windowEqRange() && a > d + h && a < e - h) {
              return 1;
            }
          }
          return 0;
        };
        b.prototype.onMouseDown = function(a, b) {
          var d = this._getDragTargetUnderCursor(a, b);
          0 === d ? (this._selection = {left:a, right:a}, this.draw()) : (1 === d && this._mouseController.updateCursor(k.MouseCursor.GRABBING), this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:d});
        };
        b.prototype.onMouseMove = function(a, b) {
          var d = k.MouseCursor.DEFAULT, e = this._getDragTargetUnderCursor(a, b);
          0 === e || this._selection || (d = 1 === e ? k.MouseCursor.GRAB : k.MouseCursor.EW_RESIZE);
          this._mouseController.updateCursor(d);
        };
        b.prototype.onMouseOver = function(a, b) {
          this.onMouseMove(a, b);
        };
        b.prototype.onMouseOut = function() {
          this._mouseController.updateCursor(k.MouseCursor.DEFAULT);
        };
        b.prototype.onDrag = function(a, b, d, e, h, f) {
          if (this._selection) {
            this._selection = {left:a, right:B(d, 0, this._width - 1)}, this.draw();
          } else {
            a = this._dragInfo;
            if (4 === a.target) {
              if (0 !== h) {
                a.target = 0 > h ? 2 : 3;
              } else {
                return;
              }
            }
            b = this._windowStart;
            d = this._windowEnd;
            h = this._toTimeRelative(h);
            switch(a.target) {
              case 1:
                b = a.windowStartInitial + h;
                d = a.windowEndInitial + h;
                break;
              case 2:
                b = B(a.windowStartInitial + h, this._rangeStart, d - k.FlameChartBase.MIN_WINDOW_LEN);
                break;
              case 3:
                d = B(a.windowEndInitial + h, b + k.FlameChartBase.MIN_WINDOW_LEN, this._rangeEnd);
                break;
              default:
                return;
            }
            this._controller.setWindow(b, d);
          }
        };
        b.prototype.onDragEnd = function(a, b, d, e, h, f) {
          this._selection && (this._selection = null, this._controller.setWindow(this._toTime(a), this._toTime(d)));
          this._dragInfo = null;
          this.onMouseMove(d, e);
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
      }(k.FlameChartBase);
      k.FlameChartOverview = v;
      B = f.NumberUtilities.clamp;
      (function(a) {
        a[a.OVERVIEW = 0] = "OVERVIEW";
        a[a.CHART = 1] = "CHART";
      })(k.FlameChartHeaderType || (k.FlameChartHeaderType = {}));
      v = function(a) {
        function b(c, d) {
          this._type = d;
          a.call(this, c);
        }
        __extends(b, a);
        b.prototype.draw = function() {
          var a = this._context, b = window.devicePixelRatio, d = this._width, e = this._height;
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.tabToolbar(1);
          a.fillRect(0, 0, d, e);
          this._initialized && (0 == this._type ? (b = this._toPixels(this._windowStart), d = this._toPixels(this._windowEnd), a.fillStyle = this._controller.theme.bodyBackground(1), a.fillRect(b, 0, d - b, e), this._drawLabels(this._rangeStart, this._rangeEnd), this._drawDragHandle(b), this._drawDragHandle(d)) : this._drawLabels(this._windowStart, this._windowEnd));
          a.restore();
        };
        b.prototype._drawLabels = function(a, f) {
          var n = this._context, e = this._calculateTickInterval(a, f), h = Math.ceil(a / e) * e, k = 500 <= e, l = k ? 1E3 : 1, q = this._decimalPlaces(e / l), k = k ? "s" : "ms", t = this._toPixels(h), x = this._height / 2, p = this._controller.theme;
          n.lineWidth = 1;
          n.strokeStyle = p.contentTextDarkGrey(.5);
          n.fillStyle = p.contentTextDarkGrey(1);
          n.textAlign = "right";
          n.textBaseline = "middle";
          n.font = "11px sans-serif";
          for (p = this._width + b.TICK_MAX_WIDTH;t < p;) {
            var g = (h / l).toFixed(q) + " " + k;
            n.fillText(g, t - 7, x + 1);
            n.beginPath();
            n.moveTo(t, 0);
            n.lineTo(t, this._height + 1);
            n.closePath();
            n.stroke();
            h += e;
            t = this._toPixels(h);
          }
        };
        b.prototype._calculateTickInterval = function(a, f) {
          var n = (f - a) / (this._width / b.TICK_MAX_WIDTH), e = Math.pow(10, Math.floor(Math.log(n) / Math.LN10)), n = n / e;
          return 5 < n ? 10 * e : 2 < n ? 5 * e : 1 < n ? 2 * e : e;
        };
        b.prototype._drawDragHandle = function(a) {
          var b = this._context;
          b.lineWidth = 2;
          b.strokeStyle = this._controller.theme.bodyBackground(1);
          b.fillStyle = this._controller.theme.foregroundTextGrey(.7);
          this._drawRoundedRect(b, a - k.FlameChartBase.DRAGHANDLE_WIDTH / 2, 1, k.FlameChartBase.DRAGHANDLE_WIDTH, this._height - 2, 2, !0);
        };
        b.prototype._drawRoundedRect = function(a, b, d, e, h, f, k, l) {
          void 0 === k && (k = !0);
          void 0 === l && (l = !0);
          a.beginPath();
          a.moveTo(b + f, d);
          a.lineTo(b + e - f, d);
          a.quadraticCurveTo(b + e, d, b + e, d + f);
          a.lineTo(b + e, d + h - f);
          a.quadraticCurveTo(b + e, d + h, b + e - f, d + h);
          a.lineTo(b + f, d + h);
          a.quadraticCurveTo(b, d + h, b, d + h - f);
          a.lineTo(b, d + f);
          a.quadraticCurveTo(b, d, b + f, d);
          a.closePath();
          k && a.stroke();
          l && a.fill();
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
              var d = this._toPixels(this._windowStart), e = this._toPixels(this._windowEnd), h = 2 + k.FlameChartBase.DRAGHANDLE_WIDTH / 2, d = a >= d - h && a <= d + h, e = a >= e - h && a <= e + h;
              if (d && e) {
                return 4;
              }
              if (d) {
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
        b.prototype.onMouseDown = function(a, b) {
          var d = this._getDragTargetUnderCursor(a, b);
          1 === d && this._mouseController.updateCursor(k.MouseCursor.GRABBING);
          this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:d};
        };
        b.prototype.onMouseMove = function(a, b) {
          var d = k.MouseCursor.DEFAULT, e = this._getDragTargetUnderCursor(a, b);
          0 !== e && (1 !== e ? d = k.MouseCursor.EW_RESIZE : 1 !== e || this._windowEqRange() || (d = k.MouseCursor.GRAB));
          this._mouseController.updateCursor(d);
        };
        b.prototype.onMouseOver = function(a, b) {
          this.onMouseMove(a, b);
        };
        b.prototype.onMouseOut = function() {
          this._mouseController.updateCursor(k.MouseCursor.DEFAULT);
        };
        b.prototype.onDrag = function(a, b, d, e, h, f) {
          a = this._dragInfo;
          if (4 === a.target) {
            if (0 !== h) {
              a.target = 0 > h ? 2 : 3;
            } else {
              return;
            }
          }
          b = this._windowStart;
          d = this._windowEnd;
          h = this._toTimeRelative(h);
          switch(a.target) {
            case 1:
              d = 0 === this._type ? 1 : -1;
              b = a.windowStartInitial + d * h;
              d = a.windowEndInitial + d * h;
              break;
            case 2:
              b = B(a.windowStartInitial + h, this._rangeStart, d - k.FlameChartBase.MIN_WINDOW_LEN);
              break;
            case 3:
              d = B(a.windowEndInitial + h, b + k.FlameChartBase.MIN_WINDOW_LEN, this._rangeEnd);
              break;
            default:
              return;
          }
          this._controller.setWindow(b, d);
        };
        b.prototype.onDragEnd = function(a, b, d, e, h, f) {
          this._dragInfo = null;
          this.onMouseMove(d, e);
        };
        b.prototype.onClick = function(a, b) {
          1 === this._dragInfo.target && this._mouseController.updateCursor(k.MouseCursor.GRAB);
        };
        b.prototype.onHoverStart = function(a, b) {
        };
        b.prototype.onHoverEnd = function() {
        };
        b.TICK_MAX_WIDTH = 75;
        return b;
      }(k.FlameChartBase);
      k.FlameChartHeader = v;
      (function(a) {
        var b = function() {
          function a(b, c, d, f, k) {
            this.pageLoaded = b;
            this.threadsTotal = c;
            this.threadsLoaded = d;
            this.threadFilesTotal = f;
            this.threadFilesLoaded = k;
          }
          a.prototype.toString = function() {
            return "[" + ["pageLoaded", "threadsTotal", "threadsLoaded", "threadFilesTotal", "threadFilesLoaded"].map(function(a, b, c) {
              return a + ":" + this[a];
            }, this).join(", ") + "]";
          };
          return a;
        }();
        a.TraceLoggerProgressInfo = b;
        var c = function() {
          function c(a) {
            this._baseUrl = a;
            this._threads = [];
            this._progressInfo = null;
          }
          c.prototype.loadPage = function(a, c, h) {
            this._threads = [];
            this._pageLoadCallback = c;
            this._pageLoadProgressCallback = h;
            this._progressInfo = new b(!1, 0, 0, 0, 0);
            this._loadData([a], this._onLoadPage.bind(this));
          };
          Object.defineProperty(c.prototype, "buffers", {get:function() {
            for (var a = [], b = 0, c = this._threads.length;b < c;b++) {
              a.push(this._threads[b].buffer);
            }
            return a;
          }, enumerable:!0, configurable:!0});
          c.prototype._onProgress = function() {
            this._pageLoadProgressCallback && this._pageLoadProgressCallback.call(this, this._progressInfo);
          };
          c.prototype._onLoadPage = function(b) {
            if (b && 1 == b.length) {
              var c = this, d = 0;
              b = b[0];
              var f = b.length;
              this._threads = Array(f);
              this._progressInfo.pageLoaded = !0;
              this._progressInfo.threadsTotal = f;
              for (var k = 0;k < b.length;k++) {
                var m = b[k], l = [m.dict, m.tree];
                m.corrections && l.push(m.corrections);
                this._progressInfo.threadFilesTotal += l.length;
                this._loadData(l, function(b) {
                  return function(p) {
                    p && (p = new a.Thread(p), p.buffer.name = "Thread " + b, c._threads[b] = p);
                    d++;
                    c._progressInfo.threadsLoaded++;
                    c._onProgress();
                    d === f && c._pageLoadCallback.call(c, null, c._threads);
                  };
                }(k), function(a) {
                  c._progressInfo.threadFilesLoaded++;
                  c._onProgress();
                });
              }
              this._onProgress();
            } else {
              this._pageLoadCallback.call(this, "Error loading page.", null);
            }
          };
          c.prototype._loadData = function(a, b, c) {
            var d = 0, f = 0, k = a.length, m = [];
            m.length = k;
            for (var l = 0;l < k;l++) {
              var p = this._baseUrl + a[l], g = /\.tl$/i.test(p), r = new XMLHttpRequest, g = g ? "arraybuffer" : "json";
              r.open("GET", p, !0);
              r.responseType = g;
              r.onload = function(a, g) {
                return function(r) {
                  if ("json" === g) {
                    if (r = this.response, "string" === typeof r) {
                      try {
                        r = JSON.parse(r), m[a] = r;
                      } catch (p) {
                        f++;
                      }
                    } else {
                      m[a] = r;
                    }
                  } else {
                    m[a] = this.response;
                  }
                  ++d;
                  c && c(d);
                  d === k && b(m);
                };
              }(l, g);
              r.send();
            }
          };
          c.colors = "#0044ff #8c4b00 #cc5c33 #ff80c4 #ffbfd9 #ff8800 #8c5e00 #adcc33 #b380ff #bfd9ff #ffaa00 #8c0038 #bf8f30 #f780ff #cc99c9 #aaff00 #000073 #452699 #cc8166 #cca799 #000066 #992626 #cc6666 #ccc299 #ff6600 #526600 #992663 #cc6681 #99ccc2 #ff0066 #520066 #269973 #61994d #739699 #ffcc00 #006629 #269199 #94994d #738299 #ff0000 #590000 #234d8c #8c6246 #7d7399 #ee00ff #00474d #8c2385 #8c7546 #7c8c69 #eeff00 #4d003d #662e1a #62468c #8c6969 #6600ff #4c2900 #1a6657 #8c464f #8c6981 #44ff00 #401100 #1a2466 #663355 #567365 #d90074 #403300 #101d40 #59562d #66614d #cc0000 #002b40 #234010 #4c2626 #4d5e66 #00a3cc #400011 #231040 #4c3626 #464359 #0000bf #331b00 #80e6ff #311a33 #4d3939 #a69b00 #003329 #80ffb2 #331a20 #40303d #00a658 #40ffd9 #ffc480 #ffe1bf #332b26 #8c2500 #9933cc #80fff6 #ffbfbf #303326 #005e8c #33cc47 #b2ff80 #c8bfff #263332 #00708c #cc33ad #ffe680 #f2ffbf #262a33 #388c00 #335ccc #8091ff #bfffd9".split(" ");
          return c;
        }();
        a.TraceLogger = c;
      })(k.TraceLogger || (k.TraceLogger = {}));
      (function(a) {
        var b;
        (function(a) {
          a[a.START_HI = 0] = "START_HI";
          a[a.START_LO = 4] = "START_LO";
          a[a.STOP_HI = 8] = "STOP_HI";
          a[a.STOP_LO = 12] = "STOP_LO";
          a[a.TEXTID = 16] = "TEXTID";
          a[a.NEXTID = 20] = "NEXTID";
        })(b || (b = {}));
        b = function() {
          function a(b) {
            2 <= b.length && (this._text = b[0], this._data = new DataView(b[1]), this._buffer = new k.TimelineBuffer, this._walkTree(0));
          }
          Object.defineProperty(a.prototype, "buffer", {get:function() {
            return this._buffer;
          }, enumerable:!0, configurable:!0});
          a.prototype._walkTree = function(b) {
            var d = this._data, e = this._buffer;
            do {
              var h = b * a.ITEM_SIZE, f = 4294967295 * d.getUint32(h + 0) + d.getUint32(h + 4), k = 4294967295 * d.getUint32(h + 8) + d.getUint32(h + 12), l = d.getUint32(h + 16), h = d.getUint32(h + 20), q = 1 === (l & 1), l = l >>> 1, l = this._text[l];
              e.enter(l, null, f / 1E6);
              q && this._walkTree(b + 1);
              e.leave(l, null, k / 1E6);
              b = h;
            } while (0 !== b);
          };
          a.ITEM_SIZE = 24;
          return a;
        }();
        a.Thread = b;
      })(k.TraceLogger || (k.TraceLogger = {}));
    })(l.Profiler || (l.Profiler = {}));
    (function(k) {
      var l = f.NumberUtilities.clamp, v = function() {
        function b() {
          this.length = 0;
          this.lines = [];
          this.format = [];
          this.time = [];
          this.repeat = [];
          this.length = 0;
        }
        b.prototype.append = function(b, a) {
          var d = this.lines;
          0 < d.length && d[d.length - 1] === b ? this.repeat[d.length - 1]++ : (this.lines.push(b), this.repeat.push(1), this.format.push(a ? {backgroundFillStyle:a} : void 0), this.time.push(performance.now()), this.length++);
        };
        b.prototype.get = function(b) {
          return this.lines[b];
        };
        b.prototype.getFormat = function(b) {
          return this.format[b];
        };
        b.prototype.getTime = function(b) {
          return this.time[b];
        };
        b.prototype.getRepeat = function(b) {
          return this.repeat[b];
        };
        return b;
      }();
      k.Buffer = v;
      var B = function() {
        function b(b) {
          this.lineColor = "#2A2A2A";
          this.alternateLineColor = "#262626";
          this.textColor = "#FFFFFF";
          this.selectionColor = "#96C9F3";
          this.selectionTextColor = "#000000";
          this.ratio = 1;
          this.showLineNumbers = !0;
          this.showLineCounter = this.showLineTime = !1;
          this.canvas = b;
          this.canvas.focus();
          this.context = b.getContext("2d", {original:!0});
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
          this.buffer = new v;
          b.addEventListener("keydown", function(b) {
            var F = 0;
            switch(b.keyCode) {
              case p:
                this.printHelp();
                break;
              case t:
                this.showLineNumbers = !this.showLineNumbers;
                break;
              case x:
                this.showLineTime = !this.showLineTime;
                break;
              case k:
                F = -1;
                break;
              case e:
                F = 1;
                break;
              case a:
                F = -this.pageLineCount;
                break;
              case d:
                F = this.pageLineCount;
                break;
              case c:
                F = -this.lineIndex;
                break;
              case f:
                F = this.buffer.length - this.lineIndex;
                break;
              case h:
                this.columnIndex -= b.metaKey ? 10 : 1;
                0 > this.columnIndex && (this.columnIndex = 0);
                b.preventDefault();
                break;
              case l:
                this.columnIndex += b.metaKey ? 10 : 1;
                b.preventDefault();
                break;
              case z:
                if (b.metaKey || b.ctrlKey) {
                  this.selection = {start:0, end:this.buffer.length - 1}, b.preventDefault();
                }
                break;
              case D:
              ;
              case g:
                if (b.metaKey || b.ctrlKey) {
                  var E = "";
                  if (this.selection) {
                    for (var J = this.selection.start;J <= this.selection.end;J++) {
                      E += this.buffer.get(J) + "\n";
                    }
                  } else {
                    E = this.buffer.get(this.lineIndex);
                  }
                  b.keyCode === D ? alert(E) : window.open(URL.createObjectURL(new Blob([E], {type:"text/plain"})), "_blank");
                }
              ;
            }
            b.metaKey && (F *= this.pageLineCount);
            F && (this.scroll(F), b.preventDefault());
            F && b.shiftKey ? this.selection ? this.lineIndex > this.selection.start ? this.selection.end = this.lineIndex : this.selection.start = this.lineIndex : 0 < F ? this.selection = {start:this.lineIndex - F, end:this.lineIndex} : 0 > F && (this.selection = {start:this.lineIndex, end:this.lineIndex - F}) : F && (this.selection = null);
            this.paint();
          }.bind(this), !1);
          b.addEventListener("focus", function(a) {
            this.hasFocus = !0;
          }.bind(this), !1);
          b.addEventListener("blur", function(a) {
            this.hasFocus = !1;
          }.bind(this), !1);
          var a = 33, d = 34, c = 36, f = 35, k = 38, e = 40, h = 37, l = 39, z = 65, D = 67, t = 78, x = 84, p = 72, g = 83;
        }
        b.prototype.printHelp = function() {
          var b = this;
          "h - help;n - turn on/off line numbers;t - turn on/off line time;arrow_keys - navigation;cmd/ctrl+a - select all;cmd/ctrl+c - copy/alert selection;cmd/ctrl+s - open selection in new tab;shift+arrow_keys - selection".split(";").forEach(function(a) {
            return b.buffer.append(a, "#002000");
          });
        };
        b.prototype.resize = function() {
          this._resizeHandler();
        };
        b.prototype._resizeHandler = function() {
          var b = this.canvas.parentElement, a = b.clientWidth, b = b.clientHeight && b.clientHeight - 1, d = window.devicePixelRatio || 1;
          1 !== d ? (this.ratio = d / 1, this.canvas.width = a * this.ratio, this.canvas.height = b * this.ratio, this.canvas.style.width = a + "px", this.canvas.style.height = b + "px") : (this.ratio = 1, this.canvas.width = a, this.canvas.height = b);
          this.pageLineCount = Math.floor(this.canvas.height / this.lineHeight);
        };
        b.prototype.gotoLine = function(b) {
          this.lineIndex = l(b, 0, this.buffer.length - 1);
        };
        b.prototype.scrollIntoView = function() {
          this.lineIndex < this.pageIndex ? this.pageIndex = this.lineIndex : this.lineIndex >= this.pageIndex + this.pageLineCount && (this.pageIndex = this.lineIndex - this.pageLineCount + 1);
        };
        b.prototype.scroll = function(b) {
          this.gotoLine(this.lineIndex + b);
          this.scrollIntoView();
        };
        b.prototype.paint = function() {
          var b = this.pageLineCount;
          this.pageIndex + b > this.buffer.length && (b = this.buffer.length - this.pageIndex);
          var a = this.textMarginLeft, d = a + (this.showLineNumbers ? 5 * (String(this.buffer.length).length + 2) : 0), c = d + (this.showLineTime ? 40 : 10), f = c + 25;
          this.context.font = this.fontSize + 'px Consolas, "Liberation Mono", Courier, monospace';
          this.context.setTransform(this.ratio, 0, 0, this.ratio, 0, 0);
          for (var k = this.canvas.width, e = this.lineHeight, h = 0;h < b;h++) {
            var l = h * this.lineHeight, z = this.pageIndex + h, D = this.buffer.get(z), t = this.buffer.getFormat(z), x = this.buffer.getRepeat(z), p = 1 < z ? this.buffer.getTime(z) - this.buffer.getTime(0) : 0;
            this.context.fillStyle = z % 2 ? this.lineColor : this.alternateLineColor;
            t && t.backgroundFillStyle && (this.context.fillStyle = t.backgroundFillStyle);
            this.context.fillRect(0, l, k, e);
            this.context.fillStyle = this.selectionTextColor;
            this.context.fillStyle = this.textColor;
            this.selection && z >= this.selection.start && z <= this.selection.end && (this.context.fillStyle = this.selectionColor, this.context.fillRect(0, l, k, e), this.context.fillStyle = this.selectionTextColor);
            this.hasFocus && z === this.lineIndex && (this.context.fillStyle = this.selectionColor, this.context.fillRect(0, l, k, e), this.context.fillStyle = this.selectionTextColor);
            0 < this.columnIndex && (D = D.substring(this.columnIndex));
            l = (h + 1) * this.lineHeight - this.textMarginBottom;
            this.showLineNumbers && this.context.fillText(String(z), a, l);
            this.showLineTime && this.context.fillText(p.toFixed(1).padLeft(" ", 6), d, l);
            1 < x && this.context.fillText(String(x).padLeft(" ", 3), c, l);
            this.context.fillText(D, f, l);
          }
        };
        b.prototype.refreshEvery = function(b) {
          function a() {
            d.paint();
            d.refreshFrequency && setTimeout(a, d.refreshFrequency);
          }
          var d = this;
          this.refreshFrequency = b;
          d.refreshFrequency && setTimeout(a, d.refreshFrequency);
        };
        b.prototype.isScrolledToBottom = function() {
          return this.lineIndex === this.buffer.length - 1;
        };
        return b;
      }();
      k.Terminal = B;
    })(l.Terminal || (l.Terminal = {}));
    (function(f) {
      var l = function() {
        function f(k) {
          this._lastWeightedTime = this._lastTime = this._index = 0;
          this._gradient = "#FF0000 #FF1100 #FF2300 #FF3400 #FF4600 #FF5700 #FF6900 #FF7B00 #FF8C00 #FF9E00 #FFAF00 #FFC100 #FFD300 #FFE400 #FFF600 #F7FF00 #E5FF00 #D4FF00 #C2FF00 #B0FF00 #9FFF00 #8DFF00 #7CFF00 #6AFF00 #58FF00 #47FF00 #35FF00 #24FF00 #12FF00 #00FF00".split(" ");
          this._container = k;
          this._canvas = document.createElement("canvas");
          this._container.appendChild(this._canvas);
          this._context = this._canvas.getContext("2d");
          this._listenForContainerSizeChanges();
        }
        f.prototype._listenForContainerSizeChanges = function() {
          var f = this._containerWidth, b = this._containerHeight;
          this._onContainerSizeChanged();
          var k = this;
          setInterval(function() {
            if (f !== k._containerWidth || b !== k._containerHeight) {
              k._onContainerSizeChanged(), f = k._containerWidth, b = k._containerHeight;
            }
          }, 10);
        };
        f.prototype._onContainerSizeChanged = function() {
          var f = this._containerWidth, b = this._containerHeight, k = window.devicePixelRatio || 1;
          1 !== k ? (this._ratio = k / 1, this._canvas.width = f * this._ratio, this._canvas.height = b * this._ratio, this._canvas.style.width = f + "px", this._canvas.style.height = b + "px") : (this._ratio = 1, this._canvas.width = f, this._canvas.height = b);
        };
        Object.defineProperty(f.prototype, "_containerWidth", {get:function() {
          return this._container.clientWidth;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(f.prototype, "_containerHeight", {get:function() {
          return this._container.clientHeight;
        }, enumerable:!0, configurable:!0});
        f.prototype.tickAndRender = function(f, b) {
          void 0 === f && (f = !1);
          void 0 === b && (b = 0);
          if (0 === this._lastTime) {
            this._lastTime = performance.now();
          } else {
            var k = 1 * (performance.now() - this._lastTime) + 0 * this._lastWeightedTime, a = this._context, d = 2 * this._ratio, c = 30 * this._ratio, l = performance;
            l.memory && (c += 30 * this._ratio);
            var n = (this._canvas.width - c) / (d + 1) | 0, e = this._index++;
            this._index > n && (this._index = 0);
            n = this._canvas.height;
            a.globalAlpha = 1;
            a.fillStyle = "black";
            a.fillRect(c + e * (d + 1), 0, 4 * d, this._canvas.height);
            var h = Math.min(1E3 / 60 / k, 1);
            a.fillStyle = "#00FF00";
            a.globalAlpha = f ? .5 : 1;
            h = n / 2 * h | 0;
            a.fillRect(c + e * (d + 1), n - h, d, h);
            b && (h = Math.min(1E3 / 240 / b, 1), a.fillStyle = "#FF6347", h = n / 2 * h | 0, a.fillRect(c + e * (d + 1), n / 2 - h, d, h));
            0 === e % 16 && (a.globalAlpha = 1, a.fillStyle = "black", a.fillRect(0, 0, c, this._canvas.height), a.fillStyle = "white", a.font = 8 * this._ratio + "px Arial", a.textBaseline = "middle", d = (1E3 / k).toFixed(0), b && (d += " " + b.toFixed(0)), l.memory && (d += " " + (l.memory.usedJSHeapSize / 1024 / 1024).toFixed(2)), a.fillText(d, 2 * this._ratio, this._containerHeight / 2 * this._ratio));
            this._lastTime = performance.now();
            this._lastWeightedTime = k;
          }
        };
        return f;
      }();
      f.FPS = l;
    })(l.Mini || (l.Mini = {}));
  })(f.Tools || (f.Tools = {}));
})(Shumway || (Shumway = {}));
console.timeEnd("Load Shared Dependencies");
console.time("Load GFX Dependencies");
(function(f) {
  (function(k) {
    function l(a, g, b) {
      return d && b ? "string" === typeof g ? (a = f.ColorUtilities.cssStyleToRGBA(g), f.ColorUtilities.rgbaToCSSStyle(b.transformRGBA(a))) : g instanceof CanvasGradient && g._template ? g._template.createCanvasGradient(a, b) : g : g;
    }
    var v = f.NumberUtilities.clamp;
    (function(a) {
      a[a.None = 0] = "None";
      a[a.Brief = 1] = "Brief";
      a[a.Verbose = 2] = "Verbose";
    })(k.TraceLevel || (k.TraceLevel = {}));
    var B = f.Metrics.Counter.instance;
    k.frameCounter = new f.Metrics.Counter(!0);
    k.traceLevel = 2;
    k.writer = null;
    k.frameCount = function(a) {
      B.count(a);
      k.frameCounter.count(a);
    };
    k.timelineBuffer = new f.Tools.Profiler.TimelineBuffer("GFX");
    k.enterTimeline = function(a, g) {
    };
    k.leaveTimeline = function(a, g) {
    };
    var b = null, q = null, a = null, d = !0;
    d && "undefined" !== typeof CanvasRenderingContext2D && (b = CanvasGradient.prototype.addColorStop, q = CanvasRenderingContext2D.prototype.createLinearGradient, a = CanvasRenderingContext2D.prototype.createRadialGradient, CanvasRenderingContext2D.prototype.createLinearGradient = function(a, g, b, c) {
      return (new m(a, g, b, c)).createCanvasGradient(this, null);
    }, CanvasRenderingContext2D.prototype.createRadialGradient = function(a, g, b, c, e, d) {
      return (new n(a, g, b, c, e, d)).createCanvasGradient(this, null);
    }, CanvasGradient.prototype.addColorStop = function(a, g) {
      b.call(this, a, g);
      this._template.addColorStop(a, g);
    });
    var c = function() {
      return function(a, g) {
        this.offset = a;
        this.color = g;
      };
    }(), m = function() {
      function a(g, b, c, e) {
        this.x0 = g;
        this.y0 = b;
        this.x1 = c;
        this.y1 = e;
        this.colorStops = [];
      }
      a.prototype.addColorStop = function(a, g) {
        this.colorStops.push(new c(a, g));
      };
      a.prototype.createCanvasGradient = function(a, g) {
        for (var c = q.call(a, this.x0, this.y0, this.x1, this.y1), e = this.colorStops, d = 0;d < e.length;d++) {
          var f = e[d], h = f.offset, f = f.color, f = g ? l(a, f, g) : f;
          b.call(c, h, f);
        }
        c._template = this;
        c._transform = this._transform;
        return c;
      };
      return a;
    }(), n = function() {
      function g(a, b, c, e, d, f) {
        this.x0 = a;
        this.y0 = b;
        this.r0 = c;
        this.x1 = e;
        this.y1 = d;
        this.r1 = f;
        this.colorStops = [];
      }
      g.prototype.addColorStop = function(a, g) {
        this.colorStops.push(new c(a, g));
      };
      g.prototype.createCanvasGradient = function(g, c) {
        for (var e = a.call(g, this.x0, this.y0, this.r0, this.x1, this.y1, this.r1), d = this.colorStops, f = 0;f < d.length;f++) {
          var h = d[f], r = h.offset, h = h.color, h = c ? l(g, h, c) : h;
          b.call(e, r, h);
        }
        e._template = this;
        e._transform = this._transform;
        return e;
      };
      return g;
    }(), e;
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
    })(e || (e = {}));
    var h = function() {
      function a(g) {
        this._commands = new Uint8Array(a._arrayBufferPool.acquire(8), 0, 8);
        this._commandPosition = 0;
        this._data = new Float64Array(a._arrayBufferPool.acquire(8 * Float64Array.BYTES_PER_ELEMENT), 0, 8);
        this._dataPosition = 0;
        g instanceof a && this.addPath(g);
      }
      a._apply = function(a, g) {
        var b = a._commands, c = a._data, e = 0, d = 0;
        g.beginPath();
        for (var f = a._commandPosition;e < f;) {
          switch(b[e++]) {
            case 1:
              g.closePath();
              break;
            case 2:
              g.moveTo(c[d++], c[d++]);
              break;
            case 3:
              g.lineTo(c[d++], c[d++]);
              break;
            case 4:
              g.quadraticCurveTo(c[d++], c[d++], c[d++], c[d++]);
              break;
            case 5:
              g.bezierCurveTo(c[d++], c[d++], c[d++], c[d++], c[d++], c[d++]);
              break;
            case 6:
              g.arcTo(c[d++], c[d++], c[d++], c[d++], c[d++]);
              break;
            case 7:
              g.rect(c[d++], c[d++], c[d++], c[d++]);
              break;
            case 8:
              g.arc(c[d++], c[d++], c[d++], c[d++], c[d++], !!c[d++]);
              break;
            case 9:
              g.save();
              break;
            case 10:
              g.restore();
              break;
            case 11:
              g.transform(c[d++], c[d++], c[d++], c[d++], c[d++], c[d++]);
          }
        }
      };
      a.prototype._ensureCommandCapacity = function(g) {
        this._commands = a._arrayBufferPool.ensureUint8ArrayLength(this._commands, g);
      };
      a.prototype._ensureDataCapacity = function(g) {
        this._data = a._arrayBufferPool.ensureFloat64ArrayLength(this._data, g);
      };
      a.prototype._writeCommand = function(a) {
        this._commandPosition >= this._commands.length && this._ensureCommandCapacity(this._commandPosition + 1);
        this._commands[this._commandPosition++] = a;
      };
      a.prototype._writeData = function(a, g, b, c, e, d) {
        var f = arguments.length;
        this._dataPosition + f >= this._data.length && this._ensureDataCapacity(this._dataPosition + f);
        var u = this._data, h = this._dataPosition;
        u[h] = a;
        u[h + 1] = g;
        2 < f && (u[h + 2] = b, u[h + 3] = c, 4 < f && (u[h + 4] = e, 6 === f && (u[h + 5] = d)));
        this._dataPosition += f;
      };
      a.prototype.closePath = function() {
        this._writeCommand(1);
      };
      a.prototype.moveTo = function(a, g) {
        this._writeCommand(2);
        this._writeData(a, g);
      };
      a.prototype.lineTo = function(a, g) {
        this._writeCommand(3);
        this._writeData(a, g);
      };
      a.prototype.quadraticCurveTo = function(a, g, b, c) {
        this._writeCommand(4);
        this._writeData(a, g, b, c);
      };
      a.prototype.bezierCurveTo = function(a, g, b, c, e, d) {
        this._writeCommand(5);
        this._writeData(a, g, b, c, e, d);
      };
      a.prototype.arcTo = function(a, g, b, c, e) {
        this._writeCommand(6);
        this._writeData(a, g, b, c, e);
      };
      a.prototype.rect = function(a, g, b, c) {
        this._writeCommand(7);
        this._writeData(a, g, b, c);
      };
      a.prototype.arc = function(a, g, b, c, e, d) {
        this._writeCommand(8);
        this._writeData(a, g, b, c, e, +d);
      };
      a.prototype.addPath = function(a, g) {
        g && (this._writeCommand(9), this._writeCommand(11), this._writeData(g.a, g.b, g.c, g.d, g.e, g.f));
        var b = this._commandPosition + a._commandPosition;
        b >= this._commands.length && this._ensureCommandCapacity(b);
        for (var c = this._commands, e = a._commands, d = this._commandPosition, f = 0;d < b;d++) {
          c[d] = e[f++];
        }
        this._commandPosition = b;
        b = this._dataPosition + a._dataPosition;
        b >= this._data.length && this._ensureDataCapacity(b);
        c = this._data;
        e = a._data;
        d = this._dataPosition;
        for (f = 0;d < b;d++) {
          c[d] = e[f++];
        }
        this._dataPosition = b;
        g && this._writeCommand(10);
      };
      a._arrayBufferPool = new f.ArrayBufferPool;
      return a;
    }();
    k.Path = h;
    if ("undefined" !== typeof CanvasRenderingContext2D && ("undefined" === typeof Path2D || !Path2D.prototype.addPath)) {
      var K = CanvasRenderingContext2D.prototype.fill;
      CanvasRenderingContext2D.prototype.fill = function(a, g) {
        arguments.length && (a instanceof h ? h._apply(a, this) : g = a);
        g ? K.call(this, g) : K.call(this);
      };
      var M = CanvasRenderingContext2D.prototype.stroke;
      CanvasRenderingContext2D.prototype.stroke = function(a, g) {
        arguments.length && (a instanceof h ? h._apply(a, this) : g = a);
        g ? M.call(this, g) : M.call(this);
      };
      var D = CanvasRenderingContext2D.prototype.clip;
      CanvasRenderingContext2D.prototype.clip = function(a, g) {
        arguments.length && (a instanceof h ? h._apply(a, this) : g = a);
        g ? D.call(this, g) : D.call(this);
      };
      window.Path2D = h;
    }
    if ("undefined" !== typeof CanvasPattern && Path2D.prototype.addPath) {
      e = function(a) {
        this._transform = a;
        this._template && (this._template._transform = a);
      };
      CanvasPattern.prototype.setTransform || (CanvasPattern.prototype.setTransform = e);
      CanvasGradient.prototype.setTransform || (CanvasGradient.prototype.setTransform = e);
      var t = CanvasRenderingContext2D.prototype.fill, x = CanvasRenderingContext2D.prototype.stroke;
      CanvasRenderingContext2D.prototype.fill = function(a, g) {
        var b = !!this.fillStyle._transform;
        if ((this.fillStyle instanceof CanvasPattern || this.fillStyle instanceof CanvasGradient) && b && a instanceof Path2D) {
          var b = this.fillStyle._transform, c;
          try {
            c = b.inverse();
          } catch (e) {
            c = b = k.Geometry.Matrix.createIdentitySVGMatrix();
          }
          this.transform(b.a, b.b, b.c, b.d, b.e, b.f);
          b = new Path2D;
          b.addPath(a, c);
          t.call(this, b, g);
          this.transform(c.a, c.b, c.c, c.d, c.e, c.f);
        } else {
          0 === arguments.length ? t.call(this) : 1 === arguments.length ? t.call(this, a) : 2 === arguments.length && t.call(this, a, g);
        }
      };
      CanvasRenderingContext2D.prototype.stroke = function(a) {
        var g = !!this.strokeStyle._transform;
        if ((this.strokeStyle instanceof CanvasPattern || this.strokeStyle instanceof CanvasGradient) && g && a instanceof Path2D) {
          var b = this.strokeStyle._transform, g = b.inverse();
          this.transform(b.a, b.b, b.c, b.d, b.e, b.f);
          b = new Path2D;
          b.addPath(a, g);
          var c = this.lineWidth;
          this.lineWidth *= (g.a + g.d) / 2;
          x.call(this, b);
          this.transform(g.a, g.b, g.c, g.d, g.e, g.f);
          this.lineWidth = c;
        } else {
          0 === arguments.length ? x.call(this) : 1 === arguments.length && x.call(this, a);
        }
      };
    }
    "undefined" !== typeof CanvasRenderingContext2D && function() {
      function a() {
        return k.Geometry.Matrix.createSVGMatrixFromArray(this.mozCurrentTransform);
      }
      var g = "currentTransform" in CanvasRenderingContext2D.prototype;
      CanvasRenderingContext2D.prototype.flashStroke = function(a, b) {
        if (g) {
          var c = this.currentTransform, e = new Path2D;
          e.addPath(a, c);
          var d = this.lineWidth;
          this.setTransform(1, 0, 0, 1, 0, 0);
          switch(b) {
            case 1:
              var u = Math.sqrt((c.a + c.c) * (c.a + c.c) + (c.d + c.b) * (c.d + c.b)) * Math.SQRT1_2;
              this.lineWidth = v(d * u, 1, 1024);
              break;
            case 2:
              this.lineWidth = v(d * (c.d + c.b), 1, 1024);
              break;
            case 3:
              this.lineWidth = v(d * (c.a + c.c), 1, 1024);
          }
          this.stroke(e);
          this.setTransform(c.a, c.b, c.c, c.d, c.e, c.f);
          this.lineWidth = d;
        } else {
          this.stroke(a);
        }
      };
      if (!g) {
        if ("mozCurrentTransform" in CanvasRenderingContext2D.prototype) {
          Object.defineProperty(CanvasRenderingContext2D.prototype, "currentTransform", {get:a}), g = !0;
        } else {
          var b = CanvasRenderingContext2D.prototype.setTransform;
          CanvasRenderingContext2D.prototype.setTransform = function(a, g, c, e, d, u) {
            var f = this.currentTransform;
            f.a = a;
            f.b = g;
            f.c = c;
            f.d = e;
            f.e = d;
            f.f = u;
            b.call(this, a, g, c, e, d, u);
          };
          Object.defineProperty(CanvasRenderingContext2D.prototype, "currentTransform", {get:function() {
            return this._currentTransform || (this._currentTransform = k.Geometry.Matrix.createIdentitySVGMatrix());
          }});
        }
      }
    }();
    if ("undefined" !== typeof CanvasRenderingContext2D && void 0 === CanvasRenderingContext2D.prototype.globalColorMatrix) {
      var p = CanvasRenderingContext2D.prototype.fill, g = CanvasRenderingContext2D.prototype.stroke, r = CanvasRenderingContext2D.prototype.fillText, F = CanvasRenderingContext2D.prototype.strokeText;
      Object.defineProperty(CanvasRenderingContext2D.prototype, "globalColorMatrix", {get:function() {
        return this._globalColorMatrix ? this._globalColorMatrix.clone() : null;
      }, set:function(a) {
        a ? this._globalColorMatrix ? this._globalColorMatrix.set(a) : this._globalColorMatrix = a.clone() : this._globalColorMatrix = null;
      }, enumerable:!0, configurable:!0});
      CanvasRenderingContext2D.prototype.fill = function(a, g) {
        var b = null;
        this._globalColorMatrix && (b = this.fillStyle, this.fillStyle = l(this, this.fillStyle, this._globalColorMatrix));
        0 === arguments.length ? p.call(this) : 1 === arguments.length ? p.call(this, a) : 2 === arguments.length && p.call(this, a, g);
        b && (this.fillStyle = b);
      };
      CanvasRenderingContext2D.prototype.stroke = function(a, b) {
        var c = null;
        this._globalColorMatrix && (c = this.strokeStyle, this.strokeStyle = l(this, this.strokeStyle, this._globalColorMatrix));
        0 === arguments.length ? g.call(this) : 1 === arguments.length && g.call(this, a);
        c && (this.strokeStyle = c);
      };
      CanvasRenderingContext2D.prototype.fillText = function(a, g, b, c) {
        var e = null;
        this._globalColorMatrix && (e = this.fillStyle, this.fillStyle = l(this, this.fillStyle, this._globalColorMatrix));
        3 === arguments.length ? r.call(this, a, g, b) : 4 === arguments.length ? r.call(this, a, g, b, c) : f.Debug.unexpected();
        e && (this.fillStyle = e);
      };
      CanvasRenderingContext2D.prototype.strokeText = function(a, g, b, c) {
        var e = null;
        this._globalColorMatrix && (e = this.strokeStyle, this.strokeStyle = l(this, this.strokeStyle, this._globalColorMatrix));
        3 === arguments.length ? F.call(this, a, g, b) : 4 === arguments.length ? F.call(this, a, g, b, c) : f.Debug.unexpected();
        e && (this.strokeStyle = e);
      };
    }
    e = function() {
      return function(a, g, b, c) {
        this.dataURL = a;
        this.w = g;
        this.h = b;
        this.pixelRatio = c;
      };
    }();
    k.ScreenShot = e;
  })(f.GFX || (f.GFX = {}));
  var l = function() {
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
    f.prototype._unshift = function(f) {
      0 === this._count ? this._head = this._tail = f : (f.next = this._head, this._head = f.next.previous = f);
      this._count++;
    };
    f.prototype._remove = function(f) {
      f === this._head && f === this._tail ? this._head = this._tail = null : f === this._head ? (this._head = f.next, this._head.previous = null) : f == this._tail ? (this._tail = f.previous, this._tail.next = null) : (f.previous.next = f.next, f.next.previous = f.previous);
      f.previous = f.next = null;
      this._count--;
    };
    f.prototype.use = function(f) {
      this._head !== f && ((f.next || f.previous || this._tail === f) && this._remove(f), this._unshift(f));
    };
    f.prototype.pop = function() {
      if (!this._tail) {
        return null;
      }
      var f = this._tail;
      this._remove(f);
      return f;
    };
    f.prototype.visit = function(f, k) {
      void 0 === k && (k = !0);
      for (var l = k ? this._head : this._tail;l && f(l);) {
        l = k ? l.next : l.previous;
      }
    };
    return f;
  }();
  f.LRUList = l;
  f.registerFallbackFont = function() {
    var f = document.styleSheets[0];
    f.insertRule('@font-face{font-family:AdobeBlank;src:url("data:font/opentype;base64,T1RUTwAKAIAAAwAgQ0ZGIDTeCDQAACFkAAAZPERTSUcAAAABAABKqAAAAAhPUy8yAF+xmwAAARAAAABgY21hcCRDbtEAAAdcAAAZ6GhlYWQFl9tDAAAArAAAADZoaGVhB1oD7wAAAOQAAAAkaG10eAPoAHwAADqgAAAQBm1heHAIAVAAAAABCAAAAAZuYW1lIE0HkgAAAXAAAAXrcG9zdP+4ADIAACFEAAAAIAABAAAAAQuFfcPHtV8PPPUAAwPoAAAAANFMRfMAAAAA0UxF8wB8/4gDbANwAAAAAwACAAAAAAAAAAEAAANw/4gAAAPoAHwAfANsAAEAAAAAAAAAAAAAAAAAAAACAABQAAgBAAAAAwPoAZAABQAAAooCWAAAAEsCigJYAAABXgAyANwAAAAAAAAAAAAAAAD3/67/+9///w/gAD8AAAAAQURCTwBAAAD//wNw/4gAAANwAHhgLwH/AAAAAAAAAAAAAAAgAAAAAAARANIAAQAAAAAAAQALAAAAAQAAAAAAAgAHAAsAAQAAAAAAAwAbABIAAQAAAAAABAALAAAAAQAAAAAABQA6AC0AAQAAAAAABgAKAGcAAwABBAkAAACUAHEAAwABBAkAAQAWAQUAAwABBAkAAgAOARsAAwABBAkAAwA2ASkAAwABBAkABAAWAQUAAwABBAkABQB0AV8AAwABBAkABgAUAdMAAwABBAkACAA0AecAAwABBAkACwA0AhsAAwABBAkADQKWAk8AAwABBAkADgA0BOVBZG9iZSBCbGFua1JlZ3VsYXIxLjA0NTtBREJPO0Fkb2JlQmxhbms7QURPQkVWZXJzaW9uIDEuMDQ1O1BTIDEuMDQ1O2hvdGNvbnYgMS4wLjgyO21ha2VvdGYubGliMi41LjYzNDA2QWRvYmVCbGFuawBDAG8AcAB5AHIAaQBnAGgAdAAgAKkAIAAyADAAMQAzACwAIAAyADAAMQA1ACAAQQBkAG8AYgBlACAAUwB5AHMAdABlAG0AcwAgAEkAbgBjAG8AcgBwAG8AcgBhAHQAZQBkACAAKABoAHQAdABwADoALwAvAHcAdwB3AC4AYQBkAG8AYgBlAC4AYwBvAG0ALwApAC4AQQBkAG8AYgBlACAAQgBsAGEAbgBrAFIAZQBnAHUAbABhAHIAMQAuADAANAA1ADsAQQBEAEIATwA7AEEAZABvAGIAZQBCAGwAYQBuAGsAOwBBAEQATwBCAEUAVgBlAHIAcwBpAG8AbgAgADEALgAwADQANQA7AFAAUwAgADEALgAwADQANQA7AGgAbwB0AGMAbwBuAHYAIAAxAC4AMAAuADgAMgA7AG0AYQBrAGUAbwB0AGYALgBsAGkAYgAyAC4ANQAuADYAMwA0ADAANgBBAGQAbwBiAGUAQgBsAGEAbgBrAEEAZABvAGIAZQAgAFMAeQBzAHQAZQBtAHMAIABJAG4AYwBvAHIAcABvAHIAYQB0AGUAZABoAHQAdABwADoALwAvAHcAdwB3AC4AYQBkAG8AYgBlAC4AYwBvAG0ALwB0AHkAcABlAC8AVABoAGkAcwAgAEYAbwBuAHQAIABTAG8AZgB0AHcAYQByAGUAIABpAHMAIABsAGkAYwBlAG4AcwBlAGQAIAB1AG4AZABlAHIAIAB0AGgAZQAgAFMASQBMACAATwBwAGUAbgAgAEYAbwBuAHQAIABMAGkAYwBlAG4AcwBlACwAIABWAGUAcgBzAGkAbwBuACAAMQAuADEALgAgAFQAaABpAHMAIABGAG8AbgB0ACAAUwBvAGYAdAB3AGEAcgBlACAAaQBzACAAZABpAHMAdAByAGkAYgB1AHQAZQBkACAAbwBuACAAYQBuACAAIgBBAFMAIABJAFMAIgAgAEIAQQBTAEkAUwAsACAAVwBJAFQASABPAFUAVAAgAFcAQQBSAFIAQQBOAFQASQBFAFMAIABPAFIAIABDAE8ATgBEAEkAVABJAE8ATgBTACAATwBGACAAQQBOAFkAIABLAEkATgBEACwAIABlAGkAdABoAGUAcgAgAGUAeABwAHIAZQBzAHMAIABvAHIAIABpAG0AcABsAGkAZQBkAC4AIABTAGUAZQAgAHQAaABlACAAUwBJAEwAIABPAHAAZQBuACAARgBvAG4AdAAgAEwAaQBjAGUAbgBzAGUAIABmAG8AcgAgAHQAaABlACAAcwBwAGUAYwBpAGYAaQBjACAAbABhAG4AZwB1AGEAZwBlACwAIABwAGUAcgBtAGkAcwBzAGkAbwBuAHMAIABhAG4AZAAgAGwAaQBtAGkAdABhAHQAaQBvAG4AcwAgAGcAbwB2AGUAcgBuAGkAbgBnACAAeQBvAHUAcgAgAHUAcwBlACAAbwBmACAAdABoAGkAcwAgAEYAbwBuAHQAIABTAG8AZgB0AHcAYQByAGUALgBoAHQAdABwADoALwAvAHMAYwByAGkAcAB0AHMALgBzAGkAbAAuAG8AcgBnAC8ATwBGAEwAAAAABQAAAAMAAAA4AAAABAAAAFgAAQAAAAAALAADAAEAAAA4AAMACgAAAFgABgAMAAAAAAABAAAABAAgAAAABAAEAAEAAAf///8AAAAA//8AAQABAAAAAAAMAAAAABmQAAAAAAAAAiAAAAAAAAAH/wAAAAEAAAgAAAAP/wAAAAEAABAAAAAX/wAAAAEAABgAAAAf/wAAAAEAACAAAAAn/wAAAAEAACgAAAAv/wAAAAEAADAAAAA3/wAAAAEAADgAAAA//wAAAAEAAEAAAABH/wAAAAEAAEgAAABP/wAAAAEAAFAAAABX/wAAAAEAAFgAAABf/wAAAAEAAGAAAABn/wAAAAEAAGgAAABv/wAAAAEAAHAAAAB3/wAAAAEAAHgAAAB//wAAAAEAAIAAAACH/wAAAAEAAIgAAACP/wAAAAEAAJAAAACX/wAAAAEAAJgAAACf/wAAAAEAAKAAAACn/wAAAAEAAKgAAACv/wAAAAEAALAAAAC3/wAAAAEAALgAAAC//wAAAAEAAMAAAADH/wAAAAEAAMgAAADP/wAAAAEAANAAAADX/wAAAAEAAOAAAADn/wAAAAEAAOgAAADv/wAAAAEAAPAAAAD3/wAAAAEAAPgAAAD9zwAAAAEAAP3wAAD//QAABfEAAQAAAAEH/wAAAAEAAQgAAAEP/wAAAAEAARAAAAEX/wAAAAEAARgAAAEf/wAAAAEAASAAAAEn/wAAAAEAASgAAAEv/wAAAAEAATAAAAE3/wAAAAEAATgAAAE//wAAAAEAAUAAAAFH/wAAAAEAAUgAAAFP/wAAAAEAAVAAAAFX/wAAAAEAAVgAAAFf/wAAAAEAAWAAAAFn/wAAAAEAAWgAAAFv/wAAAAEAAXAAAAF3/wAAAAEAAXgAAAF//wAAAAEAAYAAAAGH/wAAAAEAAYgAAAGP/wAAAAEAAZAAAAGX/wAAAAEAAZgAAAGf/wAAAAEAAaAAAAGn/wAAAAEAAagAAAGv/wAAAAEAAbAAAAG3/wAAAAEAAbgAAAG//wAAAAEAAcAAAAHH/wAAAAEAAcgAAAHP/wAAAAEAAdAAAAHX/wAAAAEAAdgAAAHf/wAAAAEAAeAAAAHn/wAAAAEAAegAAAHv/wAAAAEAAfAAAAH3/wAAAAEAAfgAAAH//QAAAAEAAgAAAAIH/wAAAAEAAggAAAIP/wAAAAEAAhAAAAIX/wAAAAEAAhgAAAIf/wAAAAEAAiAAAAIn/wAAAAEAAigAAAIv/wAAAAEAAjAAAAI3/wAAAAEAAjgAAAI//wAAAAEAAkAAAAJH/wAAAAEAAkgAAAJP/wAAAAEAAlAAAAJX/wAAAAEAAlgAAAJf/wAAAAEAAmAAAAJn/wAAAAEAAmgAAAJv/wAAAAEAAnAAAAJ3/wAAAAEAAngAAAJ//wAAAAEAAoAAAAKH/wAAAAEAAogAAAKP/wAAAAEAApAAAAKX/wAAAAEAApgAAAKf/wAAAAEAAqAAAAKn/wAAAAEAAqgAAAKv/wAAAAEAArAAAAK3/wAAAAEAArgAAAK//wAAAAEAAsAAAALH/wAAAAEAAsgAAALP/wAAAAEAAtAAAALX/wAAAAEAAtgAAALf/wAAAAEAAuAAAALn/wAAAAEAAugAAALv/wAAAAEAAvAAAAL3/wAAAAEAAvgAAAL//QAAAAEAAwAAAAMH/wAAAAEAAwgAAAMP/wAAAAEAAxAAAAMX/wAAAAEAAxgAAAMf/wAAAAEAAyAAAAMn/wAAAAEAAygAAAMv/wAAAAEAAzAAAAM3/wAAAAEAAzgAAAM//wAAAAEAA0AAAANH/wAAAAEAA0gAAANP/wAAAAEAA1AAAANX/wAAAAEAA1gAAANf/wAAAAEAA2AAAANn/wAAAAEAA2gAAANv/wAAAAEAA3AAAAN3/wAAAAEAA3gAAAN//wAAAAEAA4AAAAOH/wAAAAEAA4gAAAOP/wAAAAEAA5AAAAOX/wAAAAEAA5gAAAOf/wAAAAEAA6AAAAOn/wAAAAEAA6gAAAOv/wAAAAEAA7AAAAO3/wAAAAEAA7gAAAO//wAAAAEAA8AAAAPH/wAAAAEAA8gAAAPP/wAAAAEAA9AAAAPX/wAAAAEAA9gAAAPf/wAAAAEAA+AAAAPn/wAAAAEAA+gAAAPv/wAAAAEAA/AAAAP3/wAAAAEAA/gAAAP//QAAAAEABAAAAAQH/wAAAAEABAgAAAQP/wAAAAEABBAAAAQX/wAAAAEABBgAAAQf/wAAAAEABCAAAAQn/wAAAAEABCgAAAQv/wAAAAEABDAAAAQ3/wAAAAEABDgAAAQ//wAAAAEABEAAAARH/wAAAAEABEgAAARP/wAAAAEABFAAAARX/wAAAAEABFgAAARf/wAAAAEABGAAAARn/wAAAAEABGgAAARv/wAAAAEABHAAAAR3/wAAAAEABHgAAAR//wAAAAEABIAAAASH/wAAAAEABIgAAASP/wAAAAEABJAAAASX/wAAAAEABJgAAASf/wAAAAEABKAAAASn/wAAAAEABKgAAASv/wAAAAEABLAAAAS3/wAAAAEABLgAAAS//wAAAAEABMAAAATH/wAAAAEABMgAAATP/wAAAAEABNAAAATX/wAAAAEABNgAAATf/wAAAAEABOAAAATn/wAAAAEABOgAAATv/wAAAAEABPAAAAT3/wAAAAEABPgAAAT//QAAAAEABQAAAAUH/wAAAAEABQgAAAUP/wAAAAEABRAAAAUX/wAAAAEABRgAAAUf/wAAAAEABSAAAAUn/wAAAAEABSgAAAUv/wAAAAEABTAAAAU3/wAAAAEABTgAAAU//wAAAAEABUAAAAVH/wAAAAEABUgAAAVP/wAAAAEABVAAAAVX/wAAAAEABVgAAAVf/wAAAAEABWAAAAVn/wAAAAEABWgAAAVv/wAAAAEABXAAAAV3/wAAAAEABXgAAAV//wAAAAEABYAAAAWH/wAAAAEABYgAAAWP/wAAAAEABZAAAAWX/wAAAAEABZgAAAWf/wAAAAEABaAAAAWn/wAAAAEABagAAAWv/wAAAAEABbAAAAW3/wAAAAEABbgAAAW//wAAAAEABcAAAAXH/wAAAAEABcgAAAXP/wAAAAEABdAAAAXX/wAAAAEABdgAAAXf/wAAAAEABeAAAAXn/wAAAAEABegAAAXv/wAAAAEABfAAAAX3/wAAAAEABfgAAAX//QAAAAEABgAAAAYH/wAAAAEABggAAAYP/wAAAAEABhAAAAYX/wAAAAEABhgAAAYf/wAAAAEABiAAAAYn/wAAAAEABigAAAYv/wAAAAEABjAAAAY3/wAAAAEABjgAAAY//wAAAAEABkAAAAZH/wAAAAEABkgAAAZP/wAAAAEABlAAAAZX/wAAAAEABlgAAAZf/wAAAAEABmAAAAZn/wAAAAEABmgAAAZv/wAAAAEABnAAAAZ3/wAAAAEABngAAAZ//wAAAAEABoAAAAaH/wAAAAEABogAAAaP/wAAAAEABpAAAAaX/wAAAAEABpgAAAaf/wAAAAEABqAAAAan/wAAAAEABqgAAAav/wAAAAEABrAAAAa3/wAAAAEABrgAAAa//wAAAAEABsAAAAbH/wAAAAEABsgAAAbP/wAAAAEABtAAAAbX/wAAAAEABtgAAAbf/wAAAAEABuAAAAbn/wAAAAEABugAAAbv/wAAAAEABvAAAAb3/wAAAAEABvgAAAb//QAAAAEABwAAAAcH/wAAAAEABwgAAAcP/wAAAAEABxAAAAcX/wAAAAEABxgAAAcf/wAAAAEAByAAAAcn/wAAAAEABygAAAcv/wAAAAEABzAAAAc3/wAAAAEABzgAAAc//wAAAAEAB0AAAAdH/wAAAAEAB0gAAAdP/wAAAAEAB1AAAAdX/wAAAAEAB1gAAAdf/wAAAAEAB2AAAAdn/wAAAAEAB2gAAAdv/wAAAAEAB3AAAAd3/wAAAAEAB3gAAAd//wAAAAEAB4AAAAeH/wAAAAEAB4gAAAeP/wAAAAEAB5AAAAeX/wAAAAEAB5gAAAef/wAAAAEAB6AAAAen/wAAAAEAB6gAAAev/wAAAAEAB7AAAAe3/wAAAAEAB7gAAAe//wAAAAEAB8AAAAfH/wAAAAEAB8gAAAfP/wAAAAEAB9AAAAfX/wAAAAEAB9gAAAff/wAAAAEAB+AAAAfn/wAAAAEAB+gAAAfv/wAAAAEAB/AAAAf3/wAAAAEAB/gAAAf//QAAAAEACAAAAAgH/wAAAAEACAgAAAgP/wAAAAEACBAAAAgX/wAAAAEACBgAAAgf/wAAAAEACCAAAAgn/wAAAAEACCgAAAgv/wAAAAEACDAAAAg3/wAAAAEACDgAAAg//wAAAAEACEAAAAhH/wAAAAEACEgAAAhP/wAAAAEACFAAAAhX/wAAAAEACFgAAAhf/wAAAAEACGAAAAhn/wAAAAEACGgAAAhv/wAAAAEACHAAAAh3/wAAAAEACHgAAAh//wAAAAEACIAAAAiH/wAAAAEACIgAAAiP/wAAAAEACJAAAAiX/wAAAAEACJgAAAif/wAAAAEACKAAAAin/wAAAAEACKgAAAiv/wAAAAEACLAAAAi3/wAAAAEACLgAAAi//wAAAAEACMAAAAjH/wAAAAEACMgAAAjP/wAAAAEACNAAAAjX/wAAAAEACNgAAAjf/wAAAAEACOAAAAjn/wAAAAEACOgAAAjv/wAAAAEACPAAAAj3/wAAAAEACPgAAAj//QAAAAEACQAAAAkH/wAAAAEACQgAAAkP/wAAAAEACRAAAAkX/wAAAAEACRgAAAkf/wAAAAEACSAAAAkn/wAAAAEACSgAAAkv/wAAAAEACTAAAAk3/wAAAAEACTgAAAk//wAAAAEACUAAAAlH/wAAAAEACUgAAAlP/wAAAAEACVAAAAlX/wAAAAEACVgAAAlf/wAAAAEACWAAAAln/wAAAAEACWgAAAlv/wAAAAEACXAAAAl3/wAAAAEACXgAAAl//wAAAAEACYAAAAmH/wAAAAEACYgAAAmP/wAAAAEACZAAAAmX/wAAAAEACZgAAAmf/wAAAAEACaAAAAmn/wAAAAEACagAAAmv/wAAAAEACbAAAAm3/wAAAAEACbgAAAm//wAAAAEACcAAAAnH/wAAAAEACcgAAAnP/wAAAAEACdAAAAnX/wAAAAEACdgAAAnf/wAAAAEACeAAAAnn/wAAAAEACegAAAnv/wAAAAEACfAAAAn3/wAAAAEACfgAAAn//QAAAAEACgAAAAoH/wAAAAEACggAAAoP/wAAAAEAChAAAAoX/wAAAAEAChgAAAof/wAAAAEACiAAAAon/wAAAAEACigAAAov/wAAAAEACjAAAAo3/wAAAAEACjgAAAo//wAAAAEACkAAAApH/wAAAAEACkgAAApP/wAAAAEAClAAAApX/wAAAAEAClgAAApf/wAAAAEACmAAAApn/wAAAAEACmgAAApv/wAAAAEACnAAAAp3/wAAAAEACngAAAp//wAAAAEACoAAAAqH/wAAAAEACogAAAqP/wAAAAEACpAAAAqX/wAAAAEACpgAAAqf/wAAAAEACqAAAAqn/wAAAAEACqgAAAqv/wAAAAEACrAAAAq3/wAAAAEACrgAAAq//wAAAAEACsAAAArH/wAAAAEACsgAAArP/wAAAAEACtAAAArX/wAAAAEACtgAAArf/wAAAAEACuAAAArn/wAAAAEACugAAArv/wAAAAEACvAAAAr3/wAAAAEACvgAAAr//QAAAAEACwAAAAsH/wAAAAEACwgAAAsP/wAAAAEACxAAAAsX/wAAAAEACxgAAAsf/wAAAAEACyAAAAsn/wAAAAEACygAAAsv/wAAAAEACzAAAAs3/wAAAAEACzgAAAs//wAAAAEAC0AAAAtH/wAAAAEAC0gAAAtP/wAAAAEAC1AAAAtX/wAAAAEAC1gAAAtf/wAAAAEAC2AAAAtn/wAAAAEAC2gAAAtv/wAAAAEAC3AAAAt3/wAAAAEAC3gAAAt//wAAAAEAC4AAAAuH/wAAAAEAC4gAAAuP/wAAAAEAC5AAAAuX/wAAAAEAC5gAAAuf/wAAAAEAC6AAAAun/wAAAAEAC6gAAAuv/wAAAAEAC7AAAAu3/wAAAAEAC7gAAAu//wAAAAEAC8AAAAvH/wAAAAEAC8gAAAvP/wAAAAEAC9AAAAvX/wAAAAEAC9gAAAvf/wAAAAEAC+AAAAvn/wAAAAEAC+gAAAvv/wAAAAEAC/AAAAv3/wAAAAEAC/gAAAv//QAAAAEADAAAAAwH/wAAAAEADAgAAAwP/wAAAAEADBAAAAwX/wAAAAEADBgAAAwf/wAAAAEADCAAAAwn/wAAAAEADCgAAAwv/wAAAAEADDAAAAw3/wAAAAEADDgAAAw//wAAAAEADEAAAAxH/wAAAAEADEgAAAxP/wAAAAEADFAAAAxX/wAAAAEADFgAAAxf/wAAAAEADGAAAAxn/wAAAAEADGgAAAxv/wAAAAEADHAAAAx3/wAAAAEADHgAAAx//wAAAAEADIAAAAyH/wAAAAEADIgAAAyP/wAAAAEADJAAAAyX/wAAAAEADJgAAAyf/wAAAAEADKAAAAyn/wAAAAEADKgAAAyv/wAAAAEADLAAAAy3/wAAAAEADLgAAAy//wAAAAEADMAAAAzH/wAAAAEADMgAAAzP/wAAAAEADNAAAAzX/wAAAAEADNgAAAzf/wAAAAEADOAAAAzn/wAAAAEADOgAAAzv/wAAAAEADPAAAAz3/wAAAAEADPgAAAz//QAAAAEADQAAAA0H/wAAAAEADQgAAA0P/wAAAAEADRAAAA0X/wAAAAEADRgAAA0f/wAAAAEADSAAAA0n/wAAAAEADSgAAA0v/wAAAAEADTAAAA03/wAAAAEADTgAAA0//wAAAAEADUAAAA1H/wAAAAEADUgAAA1P/wAAAAEADVAAAA1X/wAAAAEADVgAAA1f/wAAAAEADWAAAA1n/wAAAAEADWgAAA1v/wAAAAEADXAAAA13/wAAAAEADXgAAA1//wAAAAEADYAAAA2H/wAAAAEADYgAAA2P/wAAAAEADZAAAA2X/wAAAAEADZgAAA2f/wAAAAEADaAAAA2n/wAAAAEADagAAA2v/wAAAAEADbAAAA23/wAAAAEADbgAAA2//wAAAAEADcAAAA3H/wAAAAEADcgAAA3P/wAAAAEADdAAAA3X/wAAAAEADdgAAA3f/wAAAAEADeAAAA3n/wAAAAEADegAAA3v/wAAAAEADfAAAA33/wAAAAEADfgAAA3//QAAAAEADgAAAA4H/wAAAAEADggAAA4P/wAAAAEADhAAAA4X/wAAAAEADhgAAA4f/wAAAAEADiAAAA4n/wAAAAEADigAAA4v/wAAAAEADjAAAA43/wAAAAEADjgAAA4//wAAAAEADkAAAA5H/wAAAAEADkgAAA5P/wAAAAEADlAAAA5X/wAAAAEADlgAAA5f/wAAAAEADmAAAA5n/wAAAAEADmgAAA5v/wAAAAEADnAAAA53/wAAAAEADngAAA5//wAAAAEADoAAAA6H/wAAAAEADogAAA6P/wAAAAEADpAAAA6X/wAAAAEADpgAAA6f/wAAAAEADqAAAA6n/wAAAAEADqgAAA6v/wAAAAEADrAAAA63/wAAAAEADrgAAA6//wAAAAEADsAAAA7H/wAAAAEADsgAAA7P/wAAAAEADtAAAA7X/wAAAAEADtgAAA7f/wAAAAEADuAAAA7n/wAAAAEADugAAA7v/wAAAAEADvAAAA73/wAAAAEADvgAAA7//QAAAAEADwAAAA8H/wAAAAEADwgAAA8P/wAAAAEADxAAAA8X/wAAAAEADxgAAA8f/wAAAAEADyAAAA8n/wAAAAEADygAAA8v/wAAAAEADzAAAA83/wAAAAEADzgAAA8//wAAAAEAD0AAAA9H/wAAAAEAD0gAAA9P/wAAAAEAD1AAAA9X/wAAAAEAD1gAAA9f/wAAAAEAD2AAAA9n/wAAAAEAD2gAAA9v/wAAAAEAD3AAAA93/wAAAAEAD3gAAA9//wAAAAEAD4AAAA+H/wAAAAEAD4gAAA+P/wAAAAEAD5AAAA+X/wAAAAEAD5gAAA+f/wAAAAEAD6AAAA+n/wAAAAEAD6gAAA+v/wAAAAEAD7AAAA+3/wAAAAEAD7gAAA+//wAAAAEAD8AAAA/H/wAAAAEAD8gAAA/P/wAAAAEAD9AAAA/X/wAAAAEAD9gAAA/f/wAAAAEAD+AAAA/n/wAAAAEAD+gAAA/v/wAAAAEAD/AAAA/3/wAAAAEAD/gAAA///QAAAAEAEAAAABAH/wAAAAEAEAgAABAP/wAAAAEAEBAAABAX/wAAAAEAEBgAABAf/wAAAAEAECAAABAn/wAAAAEAECgAABAv/wAAAAEAEDAAABA3/wAAAAEAEDgAABA//wAAAAEAEEAAABBH/wAAAAEAEEgAABBP/wAAAAEAEFAAABBX/wAAAAEAEFgAABBf/wAAAAEAEGAAABBn/wAAAAEAEGgAABBv/wAAAAEAEHAAABB3/wAAAAEAEHgAABB//wAAAAEAEIAAABCH/wAAAAEAEIgAABCP/wAAAAEAEJAAABCX/wAAAAEAEJgAABCf/wAAAAEAEKAAABCn/wAAAAEAEKgAABCv/wAAAAEAELAAABC3/wAAAAEAELgAABC//wAAAAEAEMAAABDH/wAAAAEAEMgAABDP/wAAAAEAENAAABDX/wAAAAEAENgAABDf/wAAAAEAEOAAABDn/wAAAAEAEOgAABDv/wAAAAEAEPAAABD3/wAAAAEAEPgAABD//QAAAAEAAwAAAAAAAP+1ADIAAAAAAAAAAAAAAAAAAAAAAAAAAAEABAIAAQEBC0Fkb2JlQmxhbmsAAQEBMPgb+ByLDB74HQH4HgKL+wz6APoEBR4aBF8MHxwIAQwi91UP92IR91oMJRwZHwwkAAUBAQYOVmFwQWRvYmVJZGVudGl0eUNvcHlyaWdodCAyMDEzLCAyMDE1IEFkb2JlIFN5c3RlbXMgSW5jb3Jwb3JhdGVkIChodHRwOi8vd3d3LmFkb2JlLmNvbS8pLkFkb2JlIEJsYW5rQWRvYmVCbGFuay0yMDQ5AAACAAEH/wMAAQAAAAgBCAECAAEASwBMAE0ATgBPAFAAUQBSAFMAVABVAFYAVwBYAFkAWgBbAFwAXQBeAF8AYABhAGIAYwBkAGUAZgBnAGgAaQBqAGsAbABtAG4AbwBwAHEAcgBzAHQAdQB2AHcAeAB5AHoAewB8AH0AfgB/AIAAgQCCAIMAhACFAIYAhwCIAIkAigCLAIwAjQCOAI8AkACRAJIAkwCUAJUAlgCXAJgAmQCaAJsAnACdAJ4AnwCgAKEAogCjAKQApQCmAKcAqACpAKoAqwCsAK0ArgCvALAAsQCyALMAtAC1ALYAtwC4ALkAugC7ALwAvQC+AL8AwADBAMIAwwDEAMUAxgDHAMgAyQDKAMsAzADNAM4AzwDQANEA0gDTANQA1QDWANcA2ADZANoA2wDcAN0A3gDfAOAA4QDiAOMA5ADlAOYA5wDoAOkA6gDrAOwA7QDuAO8A8ADxAPIA8wD0APUA9gD3APgA+QD6APsA/AD9AP4A/wEAAQEBAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMBFAEVARYBFwEYARkBGgEbARwBHQEeAR8BIAEhASIBIwEkASUBJgEnASgBKQEqASsBLAEtAS4BLwEwATEBMgEzATQBNQE2ATcBOAE5AToBOwE8AT0BPgE/AUABQQFCAUMBRAFFAUYBRwFIAUkBSgFLAUwBTQFOAU8BUAFRAVIBUwFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEBYgFjAWQBZQFmAWcBaAFpAWoBawFsAW0BbgFvAXABcQFyAXMBdAF1AXYBdwF4AXkBegF7AXwBfQF+AX8BgAGBAYIBgwGEAYUBhgGHAYgBiQGKAYsBjAGNAY4BjwGQAZEBkgGTAZQBlQGWAZcBmAGZAZoBmwGcAZ0BngGfAaABoQGiAaMBpAGlAaYBpwGoAakBqgGrAawBrQGuAa8BsAGxAbIBswG0AbUBtgG3AbgBuQG6AbsBvAG9Ab4BvwHAAcEBwgHDAcQBxQHGAccByAHJAcoBywHMAc0BzgHPAdAB0QHSAdMB1AHVAdYB1wHYAdkB2gHbAdwB3QHeAd8B4AHhAeIB4wHkAeUB5gHnAegB6QHqAesB7AHtAe4B7wHwAfEB8gHzAfQB9QH2AfcB+AH5AfoB+wH8Af0B/gH/AgACAQICAgMCBAIFAgYCBwIIAgkCCgILAgwCDQIOAg8CEAIRAhICEwIUAhUCFgIXAhgCGQIaAhsCHAIdAh4CHwIgAiECIgIjAiQCJQImAicCKAIpAioCKwIsAi0CLgIvAjACMQIyAjMCNAI1AjYCNwI4AjkCOgI7AjwCPQI+Aj8CQAJBAkICQwJEAkUCRgJHAkgCSQJKAksCTAJNAk4CTwJQAlECUgJTAlQCVQJWAlcCWAJZAloCWwJcAl0CXgJfAmACYQJiAmMCZAJlAmYCZwJoAmkCagJrAmwCbQJuAm8CcAJxAnICcwJ0AnUCdgJ3AngCeQJ6AnsCfAJ9An4CfwKAAoECggKDAoQChQKGAocCiAKJAooCiwKMAo0CjgKPApACkQKSApMClAKVApYClwKYApkCmgKbApwCnQKeAp8CoAKhAqICowKkAqUCpgKnAqgCqQKqAqsCrAKtAq4CrwKwArECsgKzArQCtQK2ArcCuAK5AroCuwK8Ar0CvgK/AsACwQLCAsMCxALFAsYCxwLIAskCygLLAswCzQLOAs8C0ALRAtIC0wLUAtUC1gLXAtgC2QLaAtsC3ALdAt4C3wLgAuEC4gLjAuQC5QLmAucC6ALpAuoC6wLsAu0C7gLvAvAC8QLyAvMC9AL1AvYC9wL4AvkC+gL7AvwC/QL+Av8DAAMBAwIDAwMEAwUDBgMHAwgDCQMKAwsDDAMNAw4DDwMQAxEDEgMTAxQDFQMWAxcDGAMZAxoDGwMcAx0DHgMfAyADIQMiAyMDJAMlAyYDJwMoAykDKgMrAywDLQMuAy8DMAMxAzIDMwM0AzUDNgM3AzgDOQM6AzsDPAM9Az4DPwNAA0EDQgNDA0QDRQNGA0cDSANJA0oDSwNMA00DTgNPA1ADUQNSA1MDVANVA1YDVwNYA1kDWgNbA1wDXQNeA18DYANhA2IDYwNkA2UDZgNnA2gDaQNqA2sDbANtA24DbwNwA3EDcgNzA3QDdQN2A3cDeAN5A3oDewN8A30DfgN/A4ADgQOCA4MDhAOFA4YDhwOIA4kDigOLA4wDjQOOA48DkAORA5IDkwOUA5UDlgOXA5gDmQOaA5sDnAOdA54DnwOgA6EDogOjA6QDpQOmA6cDqAOpA6oDqwOsA60DrgOvA7ADsQOyA7MDtAO1A7YDtwO4A7kDugO7A7wDvQO+A78DwAPBA8IDwwPEA8UDxgPHA8gDyQPKA8sDzAPNA84DzwPQA9ED0gPTA9QD1QPWA9cD2APZA9oD2wPcA90D3gPfA+AD4QPiA+MD5APlA+YD5wPoA+kD6gPrA+wD7QPuA+8D8APxA/ID8wP0A/UD9gP3A/gD+QP6A/sD/AP9A/4D/wQABAEEAgQDBAQEBQQGBAcECAQJBAoECwQMBA0EDgQPBBAEEQQSBBMEFAQVBBYEFwQYBBkEGgQbBBwEHQQeBB8EIAQhBCIEIwQkBCUEJgQnBCgEKQQqBCsELAQtBC4ELwQwBDEEMgQzBDQENQQ2BDcEOAQ5BDoEOwQ8BD0EPgQ/BEAEQQRCBEMERARFBEYERwRIBEkESgRLBEwETQROBE8EUARRBFIEUwRUBFUEVgRXBFgEWQRaBFsEXARdBF4EXwRgBGEEYgRjBGQEZQRmBGcEaARpBGoEawRsBG0EbgRvBHAEcQRyBHMEdAR1BHYEdwR4BHkEegR7BHwEfQR+BH8EgASBBIIEgwSEBIUEhgSHBIgEiQSKBIsEjASNBI4EjwSQBJEEkgSTBJQElQSWBJcEmASZBJoEmwScBJ0EngSfBKAEoQSiBKMEpASlBKYEpwSoBKkEqgSrBKwErQSuBK8EsASxBLIEswS0BLUEtgS3BLgEuQS6BLsEvAS9BL4EvwTABMEEwgTDBMQExQTGBMcEyATJBMoEywTMBM0EzgTPBNAE0QTSBNME1ATVBNYE1wTYBNkE2gTbBNwE3QTeBN8E4AThBOIE4wTkBOUE5gTnBOgE6QTqBOsE7ATtBO4E7wTwBPEE8gTzBPQE9QT2BPcE+AT5BPoE+wT8BP0E/gT/BQAFAQUCBQMFBAUFBQYFBwUIBQkFCgULBQwFDQUOBQ8FEAURBRIFEwUUBRUFFgUXBRgFGQUaBRsFHAUdBR4FHwUgBSEFIgUjBSQFJQUmBScFKAUpBSoFKwUsBS0FLgUvBTAFMQUyBTMFNAU1BTYFNwU4BTkFOgU7BTwFPQU+BT8FQAVBBUIFQwVEBUUFRgVHBUgFSQVKBUsFTAVNBU4FTwVQBVEFUgVTBVQFVQVWBVcFWAVZBVoFWwVcBV0FXgVfBWAFYQViBWMFZAVlBWYFZwVoBWkFagVrBWwFbQVuBW8FcAVxBXIFcwV0BXUFdgV3BXgFeQV6BXsFfAV9BX4FfwWABYEFggWDBYQFhQWGBYcFiAWJBYoFiwWMBY0FjgWPBZAFkQWSBZMFlAWVBZYFlwWYBZkFmgWbBZwFnQWeBZ8FoAWhBaIFowWkBaUFpgWnBagFqQWqBasFrAWtBa4FrwWwBbEFsgWzBbQFtQW2BbcFuAW5BboFuwW8Bb0FvgW/BcAFwQXCBcMFxAXFBcYFxwXIBckFygXLBcwFzQXOBc8F0AXRBdIF0wXUBdUF1gXXBdgF2QXaBdsF3AXdBd4F3wXgBeEF4gXjBeQF5QXmBecF6AXpBeoF6wXsBe0F7gXvBfAF8QXyBfMF9AX1BfYF9wX4BfkF+gX7BfwF/QX+Bf8GAAYBBgIGAwYEBgUGBgYHBggGCQYKBgsGDAYNBg4GDwYQBhEGEgYTBhQGFQYWBhcGGAYZBhoGGwYcBh0GHgYfBiAGIQYiBiMGJAYlBiYGJwYoBikGKgYrBiwGLQYuBi8GMAYxBjIGMwY0BjUGNgY3BjgGOQY6BjsGPAY9Bj4GPwZABkEGQgZDBkQGRQZGBkcGSAZJBkoGSwZMBk0GTgZPBlAGUQZSBlMGVAZVBlYGVwZYBlkGWgZbBlwGXQZeBl8GYAZhBmIGYwZkBmUGZgZnBmgGaQZqBmsGbAZtBm4GbwZwBnEGcgZzBnQGdQZ2BncGeAZ5BnoGewZ8Bn0GfgZ/BoAGgQaCBoMGhAaFBoYGhwaIBokGigaLBowGjQaOBo8GkAaRBpIGkwaUBpUGlgaXBpgGmQaaBpsGnAadBp4GnwagBqEGogajBqQGpQamBqcGqAapBqoGqwasBq0GrgavBrAGsQayBrMGtAa1BrYGtwa4BrkGuga7BrwGvQa+Br8GwAbBBsIGwwbEBsUGxgbHBsgGyQbKBssGzAbNBs4GzwbQBtEG0gbTBtQG1QbWBtcG2AbZBtoG2wbcBt0G3gbfBuAG4QbiBuMG5AblBuYG5wboBukG6gbrBuwG7QbuBu8G8AbxBvIG8wb0BvUG9gb3BvgG+Qb6BvsG/Ab9Bv4G/wcABwEHAgcDBwQHBQcGBwcHCAcJBwoHCwcMBw0HDgcPBxAHEQcSBxMHFAcVBxYHFwcYBxkHGgcbBxwHHQceBx8HIAchByIHIwckByUHJgcnBygHKQcqBysHLActBy4HLwcwBzEHMgczBzQHNQc2BzcHOAc5BzoHOwc8Bz0HPgc/B0AHQQdCB0MHRAdFB0YHRwdIB0kHSgdLB0wHTQdOB08HUAdRB1IHUwdUB1UHVgdXB1gHWQdaB1sHXAddB14HXwdgB2EHYgdjB2QHZQdmB2cHaAdpB2oHawdsB20HbgdvB3AHcQdyB3MHdAd1B3YHdwd4B3kHegd7B3wHfQd+B38HgAeBB4IHgweEB4UHhgeHB4gHiQeKB4sHjAeNB44HjweQB5EHkgeTB5QHlQeWB5cHmAeZB5oHmwecB50HngefB6AHoQeiB6MHpAelB6YHpweoB6kHqgerB6wHrQeuB68HsAexB7IHswe0B7UHtge3B7gHuQe6B7sHvAe9B74HvwfAB8EHwgfDB8QHxQfGB8cHyAfJB8oHywfMB80HzgfPB9AH0QfSB9MH1AfVB9YH1wfYB9kH2gfbB9wH3QfeB98H4AfhB+IH4wfkB+UH5gfnB+gH6QfqB+sH7AftB+4H7wfwB/EH8gfzB/QH9Qf2B/cH+Af5B/oH+wf8B/0H/gf/CAAIAQgCCAMIBAgFCAYIBwgICAkICggLCAwIDQgOCA8IEAgRCBIIEwgUCBUIFggXCBgIGQgaCBsIHAgdCB4IHwggCCEIIggjCCQIJQgmCCcIKAgpCCoIKwgsCC0ILggvCDAIMQgyCDMINAg1CDYINwg4CDkIOgg7CDwIPQg+CD8IQAhBCEIIQwhECEUIRghHCEgISQhKCEsg+wy3+iS3AfcQt/kstwP3EPoEFf58+YT6fAf9WP4nFfnSB/fF/DMFprAV+8X4NwX49gamYhX90gf7xfgzBXBmFffF/DcF/PYGDg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4OAAEBAQr4HwwmmhwZLRL7joscBUaLBr0KvQv65xUD6AB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAA==");}', 
    f.cssRules.length);
  };
  (function(k) {
    var l = f.Options.Option, v = f.Options.OptionSet, B = f.Settings.shumwayOptions, b = B.register(new v("Renderer Options"));
    k.imageUpdateOption = b.register(new l("", "imageUpdate", "boolean", !0, "Enable image updating."));
    k.imageConvertOption = b.register(new l("", "imageConvert", "boolean", !0, "Enable image conversion."));
    k.stageOptions = B.register(new v("Stage Renderer Options"));
    k.forcePaint = k.stageOptions.register(new l("", "forcePaint", "boolean", !1, "Force repainting."));
    k.ignoreViewport = k.stageOptions.register(new l("", "ignoreViewport", "boolean", !1, "Cull elements outside of the viewport."));
    k.viewportLoupeDiameter = k.stageOptions.register(new l("", "viewportLoupeDiameter", "number", 256, "Size of the viewport loupe.", {range:{min:1, max:1024, step:1}}));
    k.disableClipping = k.stageOptions.register(new l("", "disableClipping", "boolean", !1, "Disable clipping."));
    k.debugClipping = k.stageOptions.register(new l("", "debugClipping", "boolean", !1, "Disable clipping."));
    k.hud = k.stageOptions.register(new l("", "hud", "boolean", !1, "Enable HUD."));
    v = k.stageOptions.register(new v("Canvas2D Options"));
    k.clipDirtyRegions = v.register(new l("", "clipDirtyRegions", "boolean", !1, "Clip dirty regions."));
    k.clipCanvas = v.register(new l("", "clipCanvas", "boolean", !1, "Clip Regions."));
    k.cull = v.register(new l("", "cull", "boolean", !1, "Enable culling."));
    k.snapToDevicePixels = v.register(new l("", "snapToDevicePixels", "boolean", !1, ""));
    k.imageSmoothing = v.register(new l("", "imageSmoothing", "boolean", !1, ""));
    k.masking = v.register(new l("", "masking", "boolean", !0, "Composite Mask."));
    k.blending = v.register(new l("", "blending", "boolean", !0, ""));
    k.debugLayers = v.register(new l("", "debugLayers", "boolean", !1, ""));
    k.filters = v.register(new l("", "filters", "boolean", !0, ""));
    k.cacheShapes = v.register(new l("", "cacheShapes", "boolean", !0, ""));
    k.cacheShapesMaxSize = v.register(new l("", "cacheShapesMaxSize", "number", 256, "", {range:{min:1, max:1024, step:1}}));
    k.cacheShapesThreshold = v.register(new l("", "cacheShapesThreshold", "number", 256, "", {range:{min:1, max:1024, step:1}}));
    (function(b) {
      function a(a, g, b, c) {
        var e = 1 - c;
        return a * e * e + 2 * g * e * c + b * c * c;
      }
      function d(a, g, b, c, e) {
        var d = e * e, f = 1 - e, h = f * f;
        return a * f * h + 3 * g * e * h + 3 * b * f * d + c * e * d;
      }
      var c = f.NumberUtilities.clamp, l = f.NumberUtilities.pow2, n = f.NumberUtilities.epsilonEquals;
      b.radianToDegrees = function(a) {
        return 180 * a / Math.PI;
      };
      b.degreesToRadian = function(a) {
        return a * Math.PI / 180;
      };
      b.quadraticBezier = a;
      b.quadraticBezierExtreme = function(b, g, c) {
        var e = (b - g) / (b - 2 * g + c);
        return 0 > e ? b : 1 < e ? c : a(b, g, c, e);
      };
      b.cubicBezier = d;
      b.cubicBezierExtremes = function(a, g, b, c) {
        var e = g - a, f;
        f = 2 * (b - g);
        var h = c - b;
        e + h === f && (h *= 1.0001);
        var k = 2 * e - f, l = f - 2 * e, l = Math.sqrt(l * l - 4 * e * (e - f + h));
        f = 2 * (e - f + h);
        e = (k + l) / f;
        k = (k - l) / f;
        l = [];
        0 <= e && 1 >= e && l.push(d(a, g, b, c, e));
        0 <= k && 1 >= k && l.push(d(a, g, b, c, k));
        return l;
      };
      var e = function() {
        function a(g, b) {
          this.x = g;
          this.y = b;
        }
        a.prototype.setElements = function(a, b) {
          this.x = a;
          this.y = b;
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
        a.prototype.inTriangle = function(a, b, c) {
          var e = a.y * c.x - a.x * c.y + (c.y - a.y) * this.x + (a.x - c.x) * this.y, d = a.x * b.y - a.y * b.x + (a.y - b.y) * this.x + (b.x - a.x) * this.y;
          if (0 > e != 0 > d) {
            return !1;
          }
          a = -b.y * c.x + a.y * (c.x - b.x) + a.x * (b.y - c.y) + b.x * c.y;
          0 > a && (e = -e, d = -d, a = -a);
          return 0 < e && 0 < d && e + d < a;
        };
        a.createEmpty = function() {
          return new a(0, 0);
        };
        a.createEmptyPoints = function(g) {
          for (var b = [], c = 0;c < g;c++) {
            b.push(new a(0, 0));
          }
          return b;
        };
        return a;
      }();
      b.Point = e;
      var h = function() {
        function a(g, b, c) {
          this.x = g;
          this.y = b;
          this.z = c;
        }
        a.prototype.setElements = function(a, b, c) {
          this.x = a;
          this.y = b;
          this.z = c;
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
          var b = this.z * a.x - this.x * a.z, c = this.x * a.y - this.y * a.x;
          this.x = this.y * a.z - this.z * a.y;
          this.y = b;
          this.z = c;
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
          for (var b = [], c = 0;c < g;c++) {
            b.push(new a(0, 0, 0));
          }
          return b;
        };
        return a;
      }();
      b.Point3D = h;
      var v = function() {
        function a(g, b, c, e) {
          this.setElements(g, b, c, e);
          a.allocationCount++;
        }
        a.prototype.setElements = function(a, b, c, e) {
          this.x = a;
          this.y = b;
          this.w = c;
          this.h = e;
        };
        a.prototype.set = function(a) {
          this.x = a.x;
          this.y = a.y;
          this.w = a.w;
          this.h = a.h;
        };
        a.prototype.contains = function(a) {
          var b = a.x + a.w, c = a.y + a.h, e = this.x + this.w, d = this.y + this.h;
          return a.x >= this.x && a.x < e && a.y >= this.y && a.y < d && b > this.x && b <= e && c > this.y && c <= d;
        };
        a.prototype.containsPoint = function(a) {
          return a.x >= this.x && a.x < this.x + this.w && a.y >= this.y && a.y < this.y + this.h;
        };
        a.prototype.isContained = function(a) {
          for (var b = 0;b < a.length;b++) {
            if (a[b].contains(this)) {
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
              var b = this.x, c = this.y;
              this.x > a.x && (b = a.x);
              this.y > a.y && (c = a.y);
              var e = this.x + this.w;
              e < a.x + a.w && (e = a.x + a.w);
              var d = this.y + this.h;
              d < a.y + a.h && (d = a.y + a.h);
              this.x = b;
              this.y = c;
              this.w = e - b;
              this.h = d - c;
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
          var b = a.createEmpty();
          this.isEmpty() || g.isEmpty() ? b.setEmpty() : (b.x = Math.max(this.x, g.x), b.y = Math.max(this.y, g.y), b.w = Math.min(this.x + this.w, g.x + g.w) - b.x, b.h = Math.min(this.y + this.h, g.y + g.h) - b.y, b.isEmpty() && b.setEmpty(), this.set(b));
        };
        a.prototype.intersects = function(a) {
          if (this.isEmpty() || a.isEmpty()) {
            return !1;
          }
          var b = Math.max(this.x, a.x), c = Math.max(this.y, a.y), b = Math.min(this.x + this.w, a.x + a.w) - b;
          a = Math.min(this.y + this.h, a.y + a.h) - c;
          return !(0 >= b || 0 >= a);
        };
        a.prototype.intersectsTransformedAABB = function(g, b) {
          var c = a._temporary;
          c.set(g);
          b.transformRectangleAABB(c);
          return this.intersects(c);
        };
        a.prototype.intersectsTranslated = function(a, b, c) {
          if (this.isEmpty() || a.isEmpty()) {
            return !1;
          }
          var e = Math.max(this.x, a.x + b), d = Math.max(this.y, a.y + c);
          b = Math.min(this.x + this.w, a.x + b + a.w) - e;
          a = Math.min(this.y + this.h, a.y + c + a.h) - d;
          return !(0 >= b || 0 >= a);
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
          var a = Math.ceil(this.x + this.w), b = Math.ceil(this.y + this.h);
          this.x = Math.floor(this.x);
          this.y = Math.floor(this.y);
          this.w = a - this.x;
          this.h = b - this.y;
          return this;
        };
        a.prototype.scale = function(a, b) {
          this.x *= a;
          this.y *= b;
          this.w *= a;
          this.h *= b;
          return this;
        };
        a.prototype.offset = function(a, b) {
          this.x += a;
          this.y += b;
          return this;
        };
        a.prototype.resize = function(a, b) {
          this.w += a;
          this.h += b;
          return this;
        };
        a.prototype.expand = function(a, b) {
          this.offset(-a, -b).resize(2 * a, 2 * b);
          return this;
        };
        a.prototype.getCenter = function() {
          return new e(this.x + this.w / 2, this.y + this.h / 2);
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
        a.createSquare = function(g) {
          return new a(-g / 2, -g / 2, g, g);
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
      b.Rectangle = v;
      var B = function() {
        function a(g) {
          this.corners = g.map(function(a) {
            return a.clone();
          });
          this.axes = [g[1].clone().sub(g[0]), g[3].clone().sub(g[0])];
          this.origins = [];
          for (var b = 0;2 > b;b++) {
            this.axes[b].mul(1 / this.axes[b].squaredLength()), this.origins.push(g[0].dot(this.axes[b]));
          }
        }
        a.prototype.getBounds = function() {
          return a.getBounds(this.corners);
        };
        a.getBounds = function(a) {
          for (var b = new e(Number.MAX_VALUE, Number.MAX_VALUE), c = new e(Number.MIN_VALUE, Number.MIN_VALUE), d = 0;4 > d;d++) {
            var f = a[d].x, h = a[d].y;
            b.x = Math.min(b.x, f);
            b.y = Math.min(b.y, h);
            c.x = Math.max(c.x, f);
            c.y = Math.max(c.y, h);
          }
          return new v(b.x, b.y, c.x - b.x, c.y - b.y);
        };
        a.prototype.intersects = function(a) {
          return this.intersectsOneWay(a) && a.intersectsOneWay(this);
        };
        a.prototype.intersectsOneWay = function(a) {
          for (var b = 0;2 > b;b++) {
            for (var c = 0;4 > c;c++) {
              var e = a.corners[c].dot(this.axes[b]), d, f;
              0 === c ? f = d = e : e < d ? d = e : e > f && (f = e);
            }
            if (d > 1 + this.origins[b] || f < this.origins[b]) {
              return !1;
            }
          }
          return !0;
        };
        return a;
      }();
      b.OBB = B;
      (function(a) {
        a[a.Unknown = 0] = "Unknown";
        a[a.Identity = 1] = "Identity";
        a[a.Translation = 2] = "Translation";
      })(b.MatrixType || (b.MatrixType = {}));
      var D = function() {
        function a(b, c, e, d, f, h) {
          this._data = new Float64Array(6);
          this._type = 0;
          this.setElements(b, c, e, d, f, h);
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
        a.prototype.setElements = function(a, b, c, e, d, f) {
          var h = this._data;
          h[0] = a;
          h[1] = b;
          h[2] = c;
          h[3] = e;
          h[4] = d;
          h[5] = f;
          this._type = 0;
        };
        a.prototype.set = function(a) {
          var b = this._data, c = a._data;
          b[0] = c[0];
          b[1] = c[1];
          b[2] = c[2];
          b[3] = c[3];
          b[4] = c[4];
          b[5] = c[5];
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
          var b = this._data;
          a = a._data;
          return b[0] === a[0] && b[1] === a[1] && b[2] === a[2] && b[3] === a[3] && b[4] === a[4] && b[5] === a[5];
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
        a.prototype.transform = function(a, b, c, e, d, f) {
          var h = this._data, p = h[0], k = h[1], w = h[2], y = h[3], u = h[4], G = h[5];
          h[0] = p * a + w * b;
          h[1] = k * a + y * b;
          h[2] = p * c + w * e;
          h[3] = k * c + y * e;
          h[4] = p * d + w * f + u;
          h[5] = k * d + y * f + G;
          this._type = 0;
          return this;
        };
        a.prototype.transformRectangle = function(a, b) {
          var c = this._data, e = c[0], d = c[1], f = c[2], h = c[3], p = c[4], c = c[5], k = a.x, w = a.y, y = a.w, u = a.h;
          b[0].x = e * k + f * w + p;
          b[0].y = d * k + h * w + c;
          b[1].x = e * (k + y) + f * w + p;
          b[1].y = d * (k + y) + h * w + c;
          b[2].x = e * (k + y) + f * (w + u) + p;
          b[2].y = d * (k + y) + h * (w + u) + c;
          b[3].x = e * k + f * (w + u) + p;
          b[3].y = d * k + h * (w + u) + c;
        };
        a.prototype.isTranslationOnly = function() {
          if (2 === this._type) {
            return !0;
          }
          var a = this._data;
          return 1 === a[0] && 0 === a[1] && 0 === a[2] && 1 === a[3] || n(a[0], 1) && n(a[1], 0) && n(a[2], 0) && n(a[3], 1) ? (this._type = 2, !0) : !1;
        };
        a.prototype.transformRectangleAABB = function(a) {
          var b = this._data;
          if (1 !== this._type) {
            if (2 === this._type) {
              a.x += b[4], a.y += b[5];
            } else {
              var c = b[0], e = b[1], d = b[2], f = b[3], h = b[4], p = b[5], k = a.x, w = a.y, y = a.w, u = a.h, b = c * k + d * w + h, G = e * k + f * w + p, H = c * (k + y) + d * w + h, l = e * (k + y) + f * w + p, m = c * (k + y) + d * (w + u) + h, y = e * (k + y) + f * (w + u) + p, c = c * k + d * (w + u) + h, e = e * k + f * (w + u) + p, f = 0;
              b > H && (f = b, b = H, H = f);
              m > c && (f = m, m = c, c = f);
              a.x = b < m ? b : m;
              a.w = (H > c ? H : c) - a.x;
              G > l && (f = G, G = l, l = f);
              y > e && (f = y, y = e, e = f);
              a.y = G < y ? G : y;
              a.h = (l > e ? l : e) - a.y;
            }
          }
        };
        a.prototype.scale = function(a, b) {
          var c = this._data;
          c[0] *= a;
          c[1] *= b;
          c[2] *= a;
          c[3] *= b;
          c[4] *= a;
          c[5] *= b;
          this._type = 0;
          return this;
        };
        a.prototype.scaleClone = function(a, b) {
          return 1 === a && 1 === b ? this : this.clone().scale(a, b);
        };
        a.prototype.rotate = function(a) {
          var b = this._data, c = b[0], e = b[1], d = b[2], f = b[3], h = b[4], p = b[5], k = Math.cos(a);
          a = Math.sin(a);
          b[0] = k * c - a * e;
          b[1] = a * c + k * e;
          b[2] = k * d - a * f;
          b[3] = a * d + k * f;
          b[4] = k * h - a * p;
          b[5] = a * h + k * p;
          this._type = 0;
          return this;
        };
        a.prototype.concat = function(a) {
          if (1 === a._type) {
            return this;
          }
          var b = this._data;
          a = a._data;
          var c = b[0] * a[0], e = 0, d = 0, f = b[3] * a[3], h = b[4] * a[0] + a[4], p = b[5] * a[3] + a[5];
          if (0 !== b[1] || 0 !== b[2] || 0 !== a[1] || 0 !== a[2]) {
            c += b[1] * a[2], f += b[2] * a[1], e += b[0] * a[1] + b[1] * a[3], d += b[2] * a[0] + b[3] * a[2], h += b[5] * a[2], p += b[4] * a[1];
          }
          b[0] = c;
          b[1] = e;
          b[2] = d;
          b[3] = f;
          b[4] = h;
          b[5] = p;
          this._type = 0;
          return this;
        };
        a.prototype.concatClone = function(a) {
          return this.clone().concat(a);
        };
        a.prototype.preMultiply = function(a) {
          var b = this._data, c = a._data;
          if (2 === a._type && this._type & 3) {
            b[4] += c[4], b[5] += c[5], this._type = 2;
          } else {
            if (1 !== a._type) {
              a = c[0] * b[0];
              var e = 0, d = 0, f = c[3] * b[3], h = c[4] * b[0] + b[4], p = c[5] * b[3] + b[5];
              if (0 !== c[1] || 0 !== c[2] || 0 !== b[1] || 0 !== b[2]) {
                a += c[1] * b[2], f += c[2] * b[1], e += c[0] * b[1] + c[1] * b[3], d += c[2] * b[0] + c[3] * b[2], h += c[5] * b[2], p += c[4] * b[1];
              }
              b[0] = a;
              b[1] = e;
              b[2] = d;
              b[3] = f;
              b[4] = h;
              b[5] = p;
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
            var b = this._data, c = a.x, e = a.y;
            a.x = b[0] * c + b[2] * e + b[4];
            a.y = b[1] * c + b[3] * e + b[5];
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
            var b = this._data, c = a.x, e = a.y;
            a.x = b[0] * c + b[2] * e;
            a.y = b[1] * c + b[3] * e;
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
              var e = b[1], d = b[2], f = b[4], h = b[5];
              if (0 === e && 0 === d) {
                var p = c[0] = 1 / b[0], b = c[3] = 1 / b[3];
                c[1] = 0;
                c[2] = 0;
                c[4] = -p * f;
                c[5] = -b * h;
              } else {
                var p = b[0], b = b[3], k = p * b - e * d;
                if (0 === k) {
                  a.setIdentity();
                  return;
                }
                k = 1 / k;
                c[0] = b * k;
                e = c[1] = -e * k;
                d = c[2] = -d * k;
                b = c[3] = p * k;
                c[4] = -(c[0] * f + d * h);
                c[5] = -(e * f + b * h);
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
          var b = this._data, c = a._createSVGMatrix();
          try {
            c.a = b[0], c.b = b[1], c.c = b[2], c.d = b[3], c.e = b[4], c.f = b[5];
          } catch (e) {
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
        a.multiply = function(a, b) {
          var c = b._data;
          a.transform(c[0], c[1], c[2], c[3], c[4], c[5]);
        };
        return a;
      }();
      b.Matrix = D;
      D = function() {
        function a(b) {
          this._m = new Float32Array(b);
        }
        a.prototype.asWebGLMatrix = function() {
          return this._m;
        };
        a.createCameraLookAt = function(b, c, e) {
          c = b.clone().sub(c).normalize();
          e = e.clone().cross(c).normalize();
          var d = c.clone().cross(e);
          return new a([e.x, e.y, e.z, 0, d.x, d.y, d.z, 0, c.x, c.y, c.z, 0, b.x, b.y, b.z, 1]);
        };
        a.createLookAt = function(b, c, e) {
          c = b.clone().sub(c).normalize();
          e = e.clone().cross(c).normalize();
          var d = c.clone().cross(e);
          return new a([e.x, d.x, c.x, 0, d.x, d.y, c.y, 0, c.x, d.z, c.z, 0, -e.dot(b), -d.dot(b), -c.dot(b), 1]);
        };
        a.prototype.mul = function(a) {
          a = [a.x, a.y, a.z, 0];
          for (var b = this._m, c = [], e = 0;4 > e;e++) {
            c[e] = 0;
            for (var d = 4 * e, f = 0;4 > f;f++) {
              c[e] += b[d + f] * a[f];
            }
          }
          return new h(c[0], c[1], c[2]);
        };
        a.create2DProjection = function(b, c, e) {
          return new a([2 / b, 0, 0, 0, 0, -2 / c, 0, 0, 0, 0, 2 / e, 0, -1, 1, 0, 1]);
        };
        a.createPerspective = function(b, c, e, d) {
          b = Math.tan(.5 * Math.PI - .5 * b);
          var f = 1 / (e - d);
          return new a([b / c, 0, 0, 0, 0, b, 0, 0, 0, 0, (e + d) * f, -1, 0, 0, e * d * f * 2, 0]);
        };
        a.createIdentity = function() {
          return a.createTranslation(0, 0, 0);
        };
        a.createTranslation = function(b, c, e) {
          return new a([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, b, c, e, 1]);
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
        a.createScale = function(b, c, e) {
          return new a([b, 0, 0, 0, 0, c, 0, 0, 0, 0, e, 0, 0, 0, 0, 1]);
        };
        a.createMultiply = function(b, c) {
          var e = b._m, d = c._m, f = e[0], h = e[1], k = e[2], l = e[3], m = e[4], w = e[5], y = e[6], u = e[7], G = e[8], H = e[9], n = e[10], x = e[11], N = e[12], q = e[13], O = e[14], e = e[15], t = d[0], D = d[1], v = d[2], P = d[3], R = d[4], X = d[5], S = d[6], T = d[7], B = d[8], z = d[9], K = d[10], M = d[11], U = d[12], V = d[13], W = d[14], d = d[15];
          return new a([f * t + h * R + k * B + l * U, f * D + h * X + k * z + l * V, f * v + h * S + k * K + l * W, f * P + h * T + k * M + l * d, m * t + w * R + y * B + u * U, m * D + w * X + y * z + u * V, m * v + w * S + y * K + u * W, m * P + w * T + y * M + u * d, G * t + H * R + n * B + x * U, G * D + H * X + n * z + x * V, G * v + H * S + n * K + x * W, G * P + H * T + n * M + x * d, N * t + q * R + O * B + e * U, N * D + q * X + O * z + e * V, N * v + q * S + O * K + e * W, N * P + q * 
          T + O * M + e * d]);
        };
        a.createInverse = function(b) {
          var c = b._m;
          b = c[0];
          var e = c[1], d = c[2], f = c[3], h = c[4], k = c[5], l = c[6], m = c[7], w = c[8], y = c[9], u = c[10], G = c[11], H = c[12], n = c[13], x = c[14], c = c[15], N = u * c, q = x * G, O = l * c, t = x * m, D = l * G, v = u * m, P = d * c, R = x * f, B = d * G, S = u * f, T = d * m, z = l * f, K = w * n, Y = H * y, M = h * n, U = H * k, V = h * y, W = w * k, Z = b * n, aa = H * e, ba = b * y, ca = w * e, da = b * k, ea = h * e, qa = N * k + t * y + D * n - (q * k + O * y + v * n), ra = q * 
          e + P * y + S * n - (N * e + R * y + B * n), n = O * e + R * k + T * n - (t * e + P * k + z * n), e = v * e + B * k + z * y - (D * e + S * k + T * y), k = 1 / (b * qa + h * ra + w * n + H * e);
          return new a([k * qa, k * ra, k * n, k * e, k * (q * h + O * w + v * H - (N * h + t * w + D * H)), k * (N * b + R * w + B * H - (q * b + P * w + S * H)), k * (t * b + P * h + z * H - (O * b + R * h + T * H)), k * (D * b + S * h + T * w - (v * b + B * h + z * w)), k * (K * m + U * G + V * c - (Y * m + M * G + W * c)), k * (Y * f + Z * G + ca * c - (K * f + aa * G + ba * c)), k * (M * f + aa * m + da * c - (U * f + Z * m + ea * c)), k * (W * f + ba * m + ea * G - (V * f + ca * m + da * G)), 
          k * (M * u + W * x + Y * l - (V * x + K * l + U * u)), k * (ba * x + K * d + aa * u - (Z * u + ca * x + Y * d)), k * (Z * l + ea * x + U * d - (da * x + M * d + aa * l)), k * (da * u + V * d + ca * l - (ba * l + ea * u + W * d))]);
        };
        return a;
      }();
      b.Matrix3D = D;
      D = function() {
        function a(b, c, e) {
          void 0 === e && (e = 7);
          var d = this.size = 1 << e;
          this.sizeInBits = e;
          this.w = b;
          this.h = c;
          this.c = Math.ceil(b / d);
          this.r = Math.ceil(c / d);
          this.grid = [];
          for (b = 0;b < this.r;b++) {
            for (this.grid.push([]), c = 0;c < this.c;c++) {
              this.grid[b][c] = new a.Cell(new v(c * d, b * d, d, d));
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
            var e = this.grid[c][b];
            a = a.clone();
            a.snap();
            if (e.region.contains(a)) {
              e.bounds.isEmpty() ? e.bounds.set(a) : e.bounds.contains(a) || e.bounds.union(a);
            } else {
              for (var d = Math.min(this.c, Math.ceil((a.x + a.w) / this.size)) - b, f = Math.min(this.r, Math.ceil((a.y + a.h) / this.size)) - c, h = 0;h < d;h++) {
                for (var k = 0;k < f;k++) {
                  e = this.grid[c + k][b + h], e = e.region.clone(), e.intersect(a), e.isEmpty() || this.addDirtyRectangle(e);
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
            for (var e = 0;e < this.c;e++) {
              b += this.grid[c][e].region.area();
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
            for (var e = 0;e < this.r;e++) {
              for (var d = 0;d < this.c;d++) {
                var f = this.grid[e][d];
                a.beginPath();
                c(f.region);
                a.closePath();
                a.stroke();
              }
            }
          }
          a.strokeStyle = "#E0F8D8";
          for (e = 0;e < this.r;e++) {
            for (d = 0;d < this.c;d++) {
              f = this.grid[e][d], a.beginPath(), c(f.bounds), a.closePath(), a.stroke();
            }
          }
        };
        a.tmpRectangle = v.createEmpty();
        return a;
      }();
      b.DirtyRegion = D;
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
      })(D = b.DirtyRegion || (b.DirtyRegion = {}));
      var t = function() {
        function a(b, c, e, d, f, h) {
          this.index = b;
          this.x = c;
          this.y = e;
          this.scale = h;
          this.bounds = new v(c * d, e * f, d, f);
        }
        a.prototype.getOBB = function() {
          if (this._obb) {
            return this._obb;
          }
          this.bounds.getCorners(a.corners);
          return this._obb = new B(a.corners);
        };
        a.corners = e.createEmptyPoints(4);
        return a;
      }();
      b.Tile = t;
      var x = function() {
        function a(b, c, e, d, f) {
          this.tileW = e;
          this.tileH = d;
          this.scale = f;
          this.w = b;
          this.h = c;
          this.rows = Math.ceil(c / d);
          this.columns = Math.ceil(b / e);
          this.tiles = [];
          for (c = b = 0;c < this.rows;c++) {
            for (var h = 0;h < this.columns;h++) {
              this.tiles.push(new t(b++, h, c, e, d, f));
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
        a.prototype.getFewTiles = function(b, e, d) {
          void 0 === d && (d = !0);
          if (e.isTranslationOnly() && 1 === this.tiles.length) {
            return this.tiles[0].bounds.intersectsTranslated(b, e.tx, e.ty) ? [this.tiles[0]] : [];
          }
          e.transformRectangle(b, a._points);
          var f;
          b = new v(0, 0, this.w, this.h);
          d && (f = new B(a._points));
          b.intersect(B.getBounds(a._points));
          if (b.isEmpty()) {
            return [];
          }
          var h = b.x / this.tileW | 0;
          e = b.y / this.tileH | 0;
          var k = Math.ceil((b.x + b.w) / this.tileW) | 0, l = Math.ceil((b.y + b.h) / this.tileH) | 0, h = c(h, 0, this.columns), k = c(k, 0, this.columns);
          e = c(e, 0, this.rows);
          for (var l = c(l, 0, this.rows), m = [];h < k;h++) {
            for (var n = e;n < l;n++) {
              var w = this.tiles[n * this.columns + h];
              w.bounds.intersects(b) && (d ? w.getOBB().intersects(f) : 1) && m.push(w);
            }
          }
          return m;
        };
        a.prototype.getManyTiles = function(b, e) {
          function d(a, b, c) {
            return (a - b.x) * (c.y - b.y) / (c.x - b.x) + b.y;
          }
          function f(a, b, e, d, g) {
            if (!(0 > e || e >= b.columns)) {
              for (d = c(d, 0, b.rows), g = c(g + 1, 0, b.rows);d < g;d++) {
                a.push(b.tiles[d * b.columns + e]);
              }
            }
          }
          var h = a._points;
          e.transformRectangle(b, h);
          for (var k = h[0].x < h[1].x ? 0 : 1, l = h[2].x < h[3].x ? 2 : 3, l = h[k].x < h[l].x ? k : l, k = [], m = 0;5 > m;m++, l++) {
            k.push(h[l % 4]);
          }
          (k[1].x - k[0].x) * (k[3].y - k[0].y) < (k[1].y - k[0].y) * (k[3].x - k[0].x) && (h = k[1], k[1] = k[3], k[3] = h);
          var h = [], n, w, l = Math.floor(k[0].x / this.tileW), m = (l + 1) * this.tileW;
          if (k[2].x < m) {
            n = Math.min(k[0].y, k[1].y, k[2].y, k[3].y);
            w = Math.max(k[0].y, k[1].y, k[2].y, k[3].y);
            var y = Math.floor(n / this.tileH), u = Math.floor(w / this.tileH);
            f(h, this, l, y, u);
            return h;
          }
          var G = 0, H = 4, x = !1;
          if (k[0].x === k[1].x || k[0].x === k[3].x) {
            k[0].x === k[1].x ? (x = !0, G++) : H--, n = d(m, k[G], k[G + 1]), w = d(m, k[H], k[H - 1]), y = Math.floor(k[G].y / this.tileH), u = Math.floor(k[H].y / this.tileH), f(h, this, l, y, u), l++;
          }
          do {
            var Q, N, q, O;
            k[G + 1].x < m ? (Q = k[G + 1].y, q = !0) : (Q = d(m, k[G], k[G + 1]), q = !1);
            k[H - 1].x < m ? (N = k[H - 1].y, O = !0) : (N = d(m, k[H], k[H - 1]), O = !1);
            y = Math.floor((k[G].y < k[G + 1].y ? n : Q) / this.tileH);
            u = Math.floor((k[H].y > k[H - 1].y ? w : N) / this.tileH);
            f(h, this, l, y, u);
            if (q && x) {
              break;
            }
            q ? (x = !0, G++, n = d(m, k[G], k[G + 1])) : n = Q;
            O ? (H--, w = d(m, k[H], k[H - 1])) : w = N;
            l++;
            m = (l + 1) * this.tileW;
          } while (G < H);
          return h;
        };
        a._points = e.createEmptyPoints(4);
        return a;
      }();
      b.TileCache = x;
      D = function() {
        function a(b, c, e) {
          this._cacheLevels = [];
          this._source = b;
          this._tileSize = c;
          this._minUntiledSize = e;
        }
        a.prototype._getTilesAtScale = function(a, b, e) {
          var d = Math.max(b.getAbsoluteScaleX(), b.getAbsoluteScaleY()), f = 0;
          1 !== d && (f = c(Math.round(Math.log(1 / d) / Math.LN2), -5, 3));
          d = l(f);
          if (this._source.hasFlags(256)) {
            for (;;) {
              d = l(f);
              if (e.contains(this._source.getBounds().getAbsoluteBounds().clone().scale(d, d))) {
                break;
              }
              f--;
            }
          }
          this._source.hasFlags(512) || (f = c(f, -5, 0));
          d = l(f);
          e = 5 + f;
          f = this._cacheLevels[e];
          if (!f) {
            var f = this._source.getBounds().getAbsoluteBounds().clone().scale(d, d), h, k;
            this._source.hasFlags(256) || !this._source.hasFlags(1024) || Math.max(f.w, f.h) <= this._minUntiledSize ? (h = f.w, k = f.h) : h = k = this._tileSize;
            f = this._cacheLevels[e] = new x(f.w, f.h, h, k, d);
          }
          return f.getTiles(a, b.scaleClone(d, d));
        };
        a.prototype.fetchTiles = function(a, b, c, e) {
          var d = new v(0, 0, c.canvas.width, c.canvas.height);
          a = this._getTilesAtScale(a, b, d);
          var f;
          b = this._source;
          for (var h = 0;h < a.length;h++) {
            var k = a[h];
            k.cachedSurfaceRegion && k.cachedSurfaceRegion.surface && !b.hasFlags(4352) || (f || (f = []), f.push(k));
          }
          f && this._cacheTiles(c, f, e, d);
          b.removeFlags(4096);
          return a;
        };
        a.prototype._getTileBounds = function(a) {
          for (var b = v.createEmpty(), c = 0;c < a.length;c++) {
            b.union(a[c].bounds);
          }
          return b;
        };
        a.prototype._cacheTiles = function(a, b, c, e, d) {
          void 0 === d && (d = 4);
          var f = this._getTileBounds(b);
          a.save();
          a.setTransform(1, 0, 0, 1, 0, 0);
          a.clearRect(0, 0, e.w, e.h);
          a.translate(-f.x, -f.y);
          a.scale(b[0].scale, b[0].scale);
          var h = this._source.getBounds();
          a.translate(-h.x, -h.y);
          2 <= k.traceLevel && k.writer && k.writer.writeLn("Rendering Tiles: " + f);
          this._source.render(a, 0);
          a.restore();
          for (var h = null, l = 0;l < b.length;l++) {
            var p = b[l], w = p.bounds.clone();
            w.x -= f.x;
            w.y -= f.y;
            e.contains(w) || (h || (h = []), h.push(p));
            p.cachedSurfaceRegion = c(p.cachedSurfaceRegion, a, w);
          }
          h && (2 <= h.length ? (b = h.slice(0, h.length / 2 | 0), f = h.slice(b.length), this._cacheTiles(a, b, c, e, d - 1), this._cacheTiles(a, f, c, e, d - 1)) : this._cacheTiles(a, h, c, e, d - 1));
        };
        return a;
      }();
      b.RenderableTileCache = D;
    })(k.Geometry || (k.Geometry = {}));
  })(f.GFX || (f.GFX = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(f, l) {
  function k() {
    this.constructor = f;
  }
  for (var z in l) {
    l.hasOwnProperty(z) && (f[z] = l[z]);
  }
  k.prototype = l.prototype;
  f.prototype = new k;
};
(function(f) {
  (function(l) {
    function k(a, b, c) {
      return a + (b - a) * c;
    }
    function z(a, b, c) {
      return k(a >> 24 & 255, b >> 24 & 255, c) << 24 | k(a >> 16 & 255, b >> 16 & 255, c) << 16 | k(a >> 8 & 255, b >> 8 & 255, c) << 8 | k(a & 255, b & 255, c);
    }
    function v(a, b, c) {
      a = a.measureText(b).width | 0;
      0 < c && (a += b.length * c);
      return a;
    }
    function B(a, b, c, e, d) {
      b = L[b - 1];
      d && (d = b / 4, c -= d, e -= d);
      d = Math.ceil((1 > c ? 1 : c) / (b - 1E-9));
      b = Math.ceil((1 > e ? 1 : e) / (b - 1E-9));
      a.x -= d;
      a.w += 2 * d;
      a.y -= b;
      a.h += 2 * b;
    }
    var b = f.IntegerUtilities.roundToMultipleOfPowerOfTwo, q = l.Geometry.Rectangle;
    (function(a) {
      var c = function(a) {
        function b() {
          a.apply(this, arguments);
        }
        __extends(b, a);
        return b;
      }(l.Geometry.Rectangle);
      a.Region = c;
      var e = function() {
        function a(b, c) {
          this._root = new d(0, 0, b | 0, c | 0, !1);
        }
        a.prototype.allocate = function(a, b) {
          a = Math.ceil(a);
          b = Math.ceil(b);
          var c = this._root.insert(a, b);
          c && (c.allocator = this, c.allocated = !0);
          return c;
        };
        a.prototype.free = function(a) {
          a.clear();
          a.allocated = !1;
        };
        a.RANDOM_ORIENTATION = !0;
        a.MAX_DEPTH = 256;
        return a;
      }();
      a.CompactAllocator = e;
      var d = function(a) {
        function b(c, e, d, g, f) {
          a.call(this, c, e, d, g);
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
        b.prototype._insert = function(a, c, d) {
          if (!(d > e.MAX_DEPTH || this.allocated || this.w < a || this.h < c)) {
            if (this._children) {
              var g;
              if ((g = this._children[0]._insert(a, c, d + 1)) || (g = this._children[1]._insert(a, c, d + 1))) {
                return g;
              }
            } else {
              return g = !this._horizontal, e.RANDOM_ORIENTATION && (g = .5 <= Math.random()), this._children = this._horizontal ? [new b(this.x, this.y, this.w, c, !1), new b(this.x, this.y + c, this.w, this.h - c, g)] : [new b(this.x, this.y, a, this.h, !0), new b(this.x + a, this.y, this.w - a, this.h, g)], g = this._children[0], g.w === a && g.h === c ? (g.allocated = !0, g) : this._insert(a, c, d + 1);
            }
          }
        };
        return b;
      }(a.Region), g = function() {
        function a(b, c, e, d) {
          this._columns = b / e | 0;
          this._rows = c / d | 0;
          this._sizeW = e;
          this._sizeH = d;
          this._freeList = [];
          this._index = 0;
          this._total = this._columns * this._rows;
        }
        a.prototype.allocate = function(a, b) {
          a = Math.ceil(a);
          b = Math.ceil(b);
          var c = this._sizeW, e = this._sizeH;
          if (a > c || b > e) {
            return null;
          }
          var d = this._freeList, g = this._index;
          return 0 < d.length ? (c = d.pop(), c.w = a, c.h = b, c.allocated = !0, c) : g < this._total ? (d = g / this._columns | 0, c = new f((g - d * this._columns) * c, d * e, a, b), c.index = g, c.allocator = this, c.allocated = !0, this._index++, c) : null;
        };
        a.prototype.free = function(a) {
          a.allocated = !1;
          this._freeList.push(a);
        };
        return a;
      }();
      a.GridAllocator = g;
      var f = function(a) {
        function b(c, e, d, g) {
          a.call(this, c, e, d, g);
          this.index = -1;
        }
        __extends(b, a);
        return b;
      }(a.Region);
      a.GridCell = f;
      var h = function() {
        return function(a, b, c) {
          this.size = a;
          this.region = b;
          this.allocator = c;
        };
      }(), k = function(a) {
        function b(c, e, d, g, f) {
          a.call(this, c, e, d, g);
          this.region = f;
        }
        __extends(b, a);
        return b;
      }(a.Region);
      a.BucketCell = k;
      c = function() {
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
          var d = null, f, u = this._buckets;
          do {
            for (var w = 0;w < u.length && !(u[w].size >= e && (f = u[w], d = f.allocator.allocate(a, c)));w++) {
            }
            if (!d) {
              var y = this._h - this._filled;
              if (y < c) {
                return null;
              }
              var w = b(e, 8), G = 2 * w;
              G > y && (G = y);
              if (G < w) {
                return null;
              }
              y = new q(0, this._filled, this._w, G);
              this._buckets.push(new h(w, y, new g(y.w, y.h, w, w)));
              this._filled += G;
            }
          } while (!d);
          return new k(f.region.x + d.x, f.region.y + d.y, d.w, d.h, d);
        };
        a.prototype.free = function(a) {
          a.region.allocator.free(a.region);
        };
        return a;
      }();
      a.BucketAllocator = c;
    })(l.RegionAllocator || (l.RegionAllocator = {}));
    (function(a) {
      var b = function() {
        function a(b) {
          this._createSurface = b;
          this._surfaces = [];
        }
        Object.defineProperty(a.prototype, "surfaces", {get:function() {
          return this._surfaces;
        }, enumerable:!0, configurable:!0});
        a.prototype._createNewSurface = function(a, b) {
          var c = this._createSurface(a, b);
          this._surfaces.push(c);
          return c;
        };
        a.prototype.addSurface = function(a) {
          this._surfaces.push(a);
        };
        a.prototype.allocate = function(a, b, c) {
          for (var e = 0;e < this._surfaces.length;e++) {
            var d = this._surfaces[e];
            if (d !== c && (d = d.allocate(a, b))) {
              return d;
            }
          }
          return this._createNewSurface(a, b).allocate(a, b);
        };
        a.prototype.free = function(a) {
        };
        return a;
      }();
      a.SimpleAllocator = b;
    })(l.SurfaceRegionAllocator || (l.SurfaceRegionAllocator = {}));
    var q = l.Geometry.Rectangle, a = l.Geometry.Matrix, d = l.Geometry.DirtyRegion;
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
    })(l.BlendMode || (l.BlendMode = {}));
    var c = l.BlendMode;
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
    })(l.NodeFlags || (l.NodeFlags = {}));
    var m = l.NodeFlags;
    (function(a) {
      a[a.Node = 1] = "Node";
      a[a.Shape = 3] = "Shape";
      a[a.Group = 5] = "Group";
      a[a.Stage = 13] = "Stage";
      a[a.Renderable = 33] = "Renderable";
    })(l.NodeType || (l.NodeType = {}));
    var n = l.NodeType;
    (function(a) {
      a[a.None = 0] = "None";
      a[a.OnStageBoundsChanged = 1] = "OnStageBoundsChanged";
      a[a.RemovedFromStage = 2] = "RemovedFromStage";
    })(l.NodeEventType || (l.NodeEventType = {}));
    var e = function() {
      function a() {
      }
      a.prototype.visitNode = function(a, b) {
      };
      a.prototype.visitShape = function(a, b) {
        this.visitNode(a, b);
      };
      a.prototype.visitGroup = function(a, b) {
        this.visitNode(a, b);
        for (var c = a.getChildren(), e = 0;e < c.length;e++) {
          c[e].visit(this, b);
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
    l.NodeVisitor = e;
    var h = function() {
      return function() {
      };
    }();
    l.State = h;
    var K = function(b) {
      function c(e) {
        b.call(this);
        this.matrix = a.createIdentity();
        this.depth = 0;
      }
      __extends(c, b);
      c.prototype.transform = function(a) {
        var b = this.clone();
        b.matrix.preMultiply(a.getMatrix());
        return b;
      };
      c.allocate = function() {
        var a = c._dirtyStack, b = null;
        return b = a.length ? a.pop() : new c(this._doNotCallCtorDirectly);
      };
      c.prototype.clone = function() {
        var a = c.allocate();
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
      c._doNotCallCtorDirectly = Object.create(null);
      return c;
    }(h);
    l.PreRenderState = K;
    var M = function(a) {
      function b() {
        a.apply(this, arguments);
        this.isDirty = !0;
      }
      __extends(b, a);
      b.prototype.start = function(a, b) {
        this._dirtyRegion = b;
        var c = K.allocate();
        c.matrix.setIdentity();
        a.visit(this, c);
        c.free();
      };
      b.prototype.visitGroup = function(a, b) {
        var c = a.getChildren();
        this.visitNode(a, b);
        for (var e = 0;e < c.length;e++) {
          var d = c[e], g = b.transform(d.getTransform());
          d.visit(this, g);
          g.free();
        }
      };
      b.prototype.visitNode = function(a, b) {
        a.hasFlags(4096) && (this.isDirty = !0);
        a.toggleFlags(4096, !1);
        a.depth = b.depth++;
      };
      return b;
    }(e);
    l.PreRenderVisitor = M;
    h = function(a) {
      function b(c) {
        a.call(this);
        this.writer = c;
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
        var c = a.getChildren();
        this.writer.enter(a.toString() + " " + c.length);
        for (var e = 0;e < c.length;e++) {
          c[e].visit(this, b);
        }
        this.writer.outdent();
      };
      b.prototype.visitStage = function(a, b) {
        this.visitGroup(a, b);
      };
      return b;
    }(e);
    l.TracingNodeVisitor = h;
    var D = function() {
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
            var e = b[c];
            e.type === a && e.listener(this, a);
          }
        }
      };
      a.prototype.addEventListener = function(a, b) {
        this._eventListeners || (this._eventListeners = []);
        this._eventListeners.push({type:a, listener:b});
      };
      a.prototype.removeEventListener = function(a, b) {
        for (var c = this._eventListeners, e = 0;e < c.length;e++) {
          var d = c[e];
          if (d.type === a && d.listener === b) {
            c.splice(e, 1);
            break;
          }
        }
      };
      Object.defineProperty(a.prototype, "properties", {get:function() {
        return this._properties || (this._properties = {});
      }, enumerable:!0, configurable:!0});
      a.prototype.reset = function() {
        this._flags = m.Default;
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
        (this._bounds || (this._bounds = q.createEmpty())).set(a);
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
        var e = a._path;
        for (e.length = 0;b && b !== c;) {
          e.push(b), b = b._parent;
        }
        return e;
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
        null === this._transform && (this._transform = new x(this));
        return this._transform;
      };
      a.prototype.getLayer = function() {
        null === this._layer && (this._layer = new p(this));
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
            f.Debug.unexpectedCase();
        }
      };
      a.prototype.invalidate = function() {
        this._propagateFlagsUp(m.UpOnInvalidate);
      };
      a.prototype.toString = function(a) {
        void 0 === a && (a = !1);
        var b = n[this._type] + " " + this._id;
        a && (b += " " + this._bounds.toString());
        return b;
      };
      a._path = [];
      a._nextId = 0;
      return a;
    }();
    l.Node = D;
    var t = function(a) {
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
        this._propagateFlagsUp(m.UpOnAddedOrRemoved);
        a._propagateFlagsDown(m.DownOnAddedOrRemoved);
      };
      b.prototype.removeChildAt = function(a) {
        var b = this._children[a];
        this._children.splice(a, 1);
        b._index = -1;
        b._parent = null;
        this._propagateFlagsUp(m.UpOnAddedOrRemoved);
        b._propagateFlagsDown(m.DownOnAddedOrRemoved);
      };
      b.prototype.clearChildren = function() {
        for (var a = 0;a < this._children.length;a++) {
          var b = this._children[a];
          b && (b._index = -1, b._parent = null, b._propagateFlagsDown(m.DownOnAddedOrRemoved));
        }
        this._children.length = 0;
        this._propagateFlagsUp(m.UpOnAddedOrRemoved);
      };
      b.prototype._propagateFlagsDown = function(a) {
        if (!this.hasFlags(a)) {
          this.setFlags(a);
          for (var b = this._children, c = 0;c < b.length;c++) {
            b[c]._propagateFlagsDown(a);
          }
        }
      };
      b.prototype.getBounds = function(a) {
        void 0 === a && (a = !1);
        var b = this._bounds || (this._bounds = q.createEmpty());
        if (this.hasFlags(8192)) {
          b.setEmpty();
          for (var c = this._children, e = q.allocate(), d = 0;d < c.length;d++) {
            var g = c[d];
            e.set(g.getBounds());
            g.getTransformMatrix().transformRectangleAABB(e);
            b.union(e);
          }
          e.free();
          this.removeFlags(8192);
        }
        return a ? b.clone() : b;
      };
      b.prototype.getLayerBounds = function(a) {
        if (!a) {
          return this.getBounds();
        }
        for (var b = q.createEmpty(), c = this._children, e = q.allocate(), d = 0;d < c.length;d++) {
          var g = c[d];
          e.set(g.getLayerBounds(a));
          g.getTransformMatrix().transformRectangleAABB(e);
          b.union(e);
        }
        e.free();
        a && this._layer && this._layer.expandBounds(b);
        return b;
      };
      return b;
    }(D);
    l.Group = t;
    var x = function() {
      function b(c) {
        this._node = c;
        this._matrix = a.createIdentity();
        this._colorMatrix = l.ColorMatrix.createIdentity();
        this._concatenatedMatrix = a.createIdentity();
        this._invertedConcatenatedMatrix = a.createIdentity();
        this._concatenatedColorMatrix = l.ColorMatrix.createIdentity();
      }
      b.prototype.setMatrix = function(a) {
        this._matrix.isEqual(a) || (this._matrix.set(a), this._node._propagateFlagsUp(m.UpOnMoved), this._node._propagateFlagsDown(m.DownOnMoved));
      };
      b.prototype.setColorMatrix = function(a) {
        this._colorMatrix.set(a);
        this._node._propagateFlagsUp(m.UpOnColorMatrixChanged);
        this._node._propagateFlagsDown(m.DownOnColorMatrixChanged);
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
        null === this._colorMatrix && (this._colorMatrix = l.ColorMatrix.createIdentity());
        return a ? this._colorMatrix.clone() : this._colorMatrix;
      };
      b.prototype.getConcatenatedMatrix = function(b) {
        void 0 === b && (b = !1);
        if (this._node.hasFlags(16384)) {
          for (var c = this._node._findClosestAncestor(16384, !1), e = D._getAncestors(this._node, c), d = c ? c.getTransform()._concatenatedMatrix.clone() : a.createIdentity(), g = e.length - 1;0 <= g;g--) {
            var c = e[g], f = c.getTransform();
            d.preMultiply(f._matrix);
            f._concatenatedMatrix.set(d);
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
    l.Transform = x;
    var p = function() {
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
        return c[this._blendMode];
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
    l.Layer = p;
    h = function(a) {
      function b(c) {
        a.call(this);
        this._source = c;
        this._type = 3;
        this._ratio = 0;
      }
      __extends(b, a);
      b.prototype.getBounds = function(a) {
        void 0 === a && (a = !1);
        var b = this._bounds || (this._bounds = q.createEmpty());
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
    }(D);
    l.Shape = h;
    h = function() {
      return function() {
        this.debug = !1;
        this.paintRenderable = !0;
        this.paintViewport = this.paintFlashing = this.paintDirtyRegion = this.paintBounds = !1;
        this.clear = !0;
      };
    }();
    l.RendererOptions = h;
    (function(a) {
      a[a.Canvas2D = 0] = "Canvas2D";
      a[a.WebGL = 1] = "WebGL";
      a[a.Both = 2] = "Both";
      a[a.DOM = 3] = "DOM";
      a[a.SVG = 4] = "SVG";
    })(l.Backend || (l.Backend = {}));
    e = function(a) {
      function b(c, e, d) {
        a.call(this);
        this._container = c;
        this._stage = e;
        this._options = d;
        this._viewport = q.createSquare(1024);
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
      b.prototype.screenShot = function(a, b, c) {
        throw void 0;
      };
      return b;
    }(e);
    l.Renderer = e;
    e = function(b) {
      function c(a, e, g) {
        void 0 === g && (g = !1);
        b.call(this);
        this._preVisitor = new M;
        this._flags &= -2049;
        this._type = 13;
        this._scaleMode = c.DEFAULT_SCALE;
        this._align = c.DEFAULT_ALIGN;
        this._content = new t;
        this._content._flags &= -2049;
        this.addChild(this._content);
        this.setFlags(4096);
        this.setBounds(new q(0, 0, a, e));
        g ? (this._dirtyRegion = new d(a, e), this._dirtyRegion.addDirtyRectangle(new q(0, 0, a, e))) : this._dirtyRegion = null;
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
        this._dirtyRegion && (this._dirtyRegion = new d(a.w, a.h), this._dirtyRegion.addDirtyRectangle(a));
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
          var b = this.getBounds(), e = this._content.getBounds(), d = b.w / e.w, g = b.h / e.h;
          switch(this._scaleMode) {
            case 2:
              d = g = Math.max(d, g);
              break;
            case 4:
              d = g = 1;
              break;
            case 1:
              break;
            default:
              d = g = Math.min(d, g);
          }
          var f;
          f = this._align & 4 ? 0 : this._align & 8 ? b.w - e.w * d : (b.w - e.w * d) / 2;
          b = this._align & 1 ? 0 : this._align & 2 ? b.h - e.h * g : (b.h - e.h * g) / 2;
          this._content.getTransform().setMatrix(new a(d, 0, 0, g, f, b));
        }
      };
      c.DEFAULT_SCALE = 4;
      c.DEFAULT_ALIGN = 5;
      return c;
    }(t);
    l.Stage = e;
    var g = l.Geometry.Point, q = l.Geometry.Rectangle, a = l.Geometry.Matrix, r = f.ArrayUtilities.indexOf, e = function(a) {
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
        r(this._parents, a);
        this._parents.push(a);
      };
      b.prototype.willRender = function() {
        for (var a = this._parents, b = 0;b < a.length;b++) {
          for (var c = a[b];c;) {
            if (c.isType(13)) {
              return !0;
            }
            if (!c.hasFlags(1)) {
              break;
            }
            c = c._parent;
          }
        }
        return !1;
      };
      b.prototype.addRenderableParent = function(a) {
        this._renderableParents.push(a);
      };
      b.prototype.wrap = function() {
        for (var a, b = this._parents, c = 0;c < b.length;c++) {
          if (a = b[c], !a._parent) {
            return a;
          }
        }
        a = new l.Shape(this);
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
        r(this._invalidateEventListeners, a);
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
      b.prototype.render = function(a, b, c, e, d) {
      };
      return b;
    }(l.Node);
    l.Renderable = e;
    h = function(a) {
      function b(c, e) {
        a.call(this);
        this.setBounds(c);
        this.render = e;
      }
      __extends(b, a);
      return b;
    }(e);
    l.CustomRenderable = h;
    (function(a) {
      a[a.Idle = 1] = "Idle";
      a[a.Playing = 2] = "Playing";
      a[a.Paused = 3] = "Paused";
      a[a.Ended = 4] = "Ended";
    })(l.RenderableVideoState || (l.RenderableVideoState = {}));
    h = function(a) {
      function b(c, e) {
        a.call(this);
        this._flags = 4352;
        this._lastPausedTime = this._lastTimeInvalidated = 0;
        this._pauseHappening = this._seekHappening = !1;
        this._isDOMElement = !0;
        this.setBounds(new q(0, 0, 1, 1));
        this._assetId = c;
        this._eventSerializer = e;
        var d = document.createElement("video"), g = this._handleVideoEvent.bind(this);
        d.preload = "metadata";
        d.addEventListener("play", g);
        d.addEventListener("pause", g);
        d.addEventListener("ended", g);
        d.addEventListener("loadeddata", g);
        d.addEventListener("progress", g);
        d.addEventListener("suspend", g);
        d.addEventListener("loadedmetadata", g);
        d.addEventListener("error", g);
        d.addEventListener("seeking", g);
        d.addEventListener("seeked", g);
        d.addEventListener("canplay", g);
        d.style.position = "absolute";
        this._video = d;
        this._videoEventHandler = g;
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
        var b = null, c = this._video;
        switch(a.type) {
          case "play":
            if (!this._pauseHappening) {
              return;
            }
            a = 7;
            break;
          case "pause":
            if (2 === this._state) {
              c.play();
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
            b = {videoWidth:c.videoWidth, videoHeight:c.videoHeight, duration:c.duration};
            break;
          case "error":
            a = 11;
            b = {code:c.error.code};
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
        var c = this._video;
        switch(a) {
          case 1:
            c.src = b.url;
            this.play();
            this._notifyNetStream(0, null);
            break;
          case 9:
            c.paused && c.play();
            break;
          case 2:
            c && (b.paused && !c.paused ? (isNaN(b.time) ? this._lastPausedTime = c.currentTime : (0 !== c.seekable.length && (c.currentTime = b.time), this._lastPausedTime = b.time), this.pause()) : !b.paused && c.paused && (this.play(), isNaN(b.time) || this._lastPausedTime === b.time || 0 === c.seekable.length || (c.currentTime = b.time)));
            break;
          case 3:
            c && 0 !== c.seekable.length && (this._seekHappening = !0, c.currentTime = b.time);
            break;
          case 4:
            return c ? c.currentTime : 0;
          case 5:
            return c ? c.duration : 0;
          case 6:
            c && (c.volume = b.volume);
            break;
          case 7:
            if (!c) {
              return 0;
            }
            var e = -1;
            if (c.buffered) {
              for (var d = 0;d < c.buffered.length;d++) {
                e = Math.max(e, c.buffered.end(d));
              }
            } else {
              e = c.duration;
            }
            return Math.round(500 * e);
          case 8:
            return c ? Math.round(500 * c.duration) : 0;
        }
      };
      b.prototype.checkForUpdate = function() {
        this._lastTimeInvalidated !== this._video.currentTime && (this._isDOMElement || this.invalidate());
        this._lastTimeInvalidated = this._video.currentTime;
      };
      b.checkForVideoUpdates = function() {
        for (var a = b._renderableVideos, c = 0;c < a.length;c++) {
          var e = a[c];
          e.willRender() ? (e._video.parentElement || e.invalidate(), e._video.style.zIndex = e.parents[0].depth + "") : e._video.parentElement && e._dispatchEvent(2);
          a[c].checkForUpdate();
        }
      };
      b.prototype.render = function(a, b, c) {
        (b = this._video) && 0 < b.videoWidth && a.drawImage(b, 0, 0, b.videoWidth, b.videoHeight, 0, 0, this._bounds.w, this._bounds.h);
      };
      b._renderableVideos = [];
      return b;
    }(e);
    l.RenderableVideo = h;
    h = function(a) {
      function b(c, e) {
        a.call(this);
        this._flags = 4352;
        this.properties = {};
        this.setBounds(e);
        c instanceof HTMLCanvasElement ? this._initializeSourceCanvas(c) : this._sourceImage = c;
      }
      __extends(b, a);
      b.FromDataBuffer = function(a, c, e) {
        var d = document.createElement("canvas");
        d.width = e.w;
        d.height = e.h;
        e = new b(d, e);
        e.updateFromDataBuffer(a, c);
        return e;
      };
      b.FromNode = function(a, c, e, d, g) {
        var f = document.createElement("canvas"), h = a.getBounds();
        f.width = h.w;
        f.height = h.h;
        f = new b(f, h);
        f.drawNode(a, c, e, d, g);
        return f;
      };
      b.FromImage = function(a, c, e) {
        return new b(a, new q(0, 0, c, e));
      };
      b.prototype.updateFromDataBuffer = function(a, b) {
        if (l.imageUpdateOption.value) {
          var c = b.buffer;
          if (4 !== a && 5 !== a && 6 !== a) {
            var e = this._bounds, d = this._imageData;
            d && d.width === e.w && d.height === e.h || (d = this._imageData = this._context.createImageData(e.w, e.h));
            l.imageConvertOption.value && (c = new Int32Array(c), e = new Int32Array(d.data.buffer), f.ColorUtilities.convertImage(a, 3, c, e));
            this._ensureSourceCanvas();
            this._context.putImageData(d, 0, 0);
          }
          this.invalidate();
        }
      };
      b.prototype.readImageData = function(a) {
        a.writeRawBytes(this.imageData.data);
      };
      b.prototype.render = function(a, b, c) {
        this.renderSource ? a.drawImage(this.renderSource, 0, 0) : this._renderFallback(a);
      };
      b.prototype.drawNode = function(a, b, c, e, d) {
        c = l.Canvas2D;
        e = this.getBounds();
        (new c.Canvas2DRenderer(this._canvas, null)).renderNode(a, d || e, b);
      };
      b.prototype.mask = function(a) {
        for (var b = this.imageData, c = new Int32Array(b.data.buffer), e = f.ColorUtilities.getUnpremultiplyTable(), d = 0;d < a.length;d++) {
          var g = a[d];
          if (0 === g) {
            c[d] = 0;
          } else {
            if (255 !== g) {
              var h = c[d], k = h >> 0 & 255, l = h >> 8 & 255, h = h >> 16 & 255, p = g << 8, k = e[p + Math.min(k, g)], l = e[p + Math.min(l, g)], h = e[p + Math.min(h, g)];
              c[d] = g << 24 | h << 16 | l << 8 | k;
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
    }(e);
    l.RenderableBitmap = h;
    (function(a) {
      a[a.Fill = 0] = "Fill";
      a[a.Stroke = 1] = "Stroke";
      a[a.StrokeFill = 2] = "StrokeFill";
    })(l.PathType || (l.PathType = {}));
    var F = function() {
      return function(a, b, c, e) {
        this.type = a;
        this.style = b;
        this.smoothImage = c;
        this.strokeProperties = e;
        this.path = new Path2D;
      };
    }();
    l.StyledPath = F;
    var E = function() {
      return function(a, b, c, e, d) {
        this.thickness = a;
        this.scaleMode = b;
        this.capsStyle = c;
        this.jointsStyle = e;
        this.miterLimit = d;
      };
    }();
    l.StrokeProperties = E;
    var J = function(b) {
      function c(a, e, d, g) {
        b.call(this);
        this._flags = 5632;
        this.properties = {};
        this.setBounds(g);
        this._id = a;
        this._pathData = e;
        this._textures = d;
        d.length && this.setFlags(256);
      }
      __extends(c, b);
      c.prototype.update = function(a, b, c) {
        this.setBounds(c);
        this._pathData = a;
        this._paths = null;
        this._textures = b;
        this.setFlags(256);
        this.invalidate();
      };
      c.prototype.render = function(a, b, c, e, d) {
        void 0 === e && (e = null);
        void 0 === d && (d = !1);
        a.fillStyle = a.strokeStyle = "transparent";
        b = this._deserializePaths(this._pathData, a, b);
        for (c = 0;c < b.length;c++) {
          var g = b[c];
          a.mozImageSmoothingEnabled = a.msImageSmoothingEnabled = a.imageSmoothingEnabled = g.smoothImage;
          if (0 === g.type) {
            e ? e.addPath(g.path, a.currentTransform) : (a.fillStyle = d ? "#000000" : g.style, a.fill(g.path, "evenodd"), a.fillStyle = "transparent");
          } else {
            if (!e && !d) {
              a.strokeStyle = g.style;
              var f = 1;
              g.strokeProperties && (f = g.strokeProperties.scaleMode, a.lineWidth = g.strokeProperties.thickness, a.lineCap = g.strokeProperties.capsStyle, a.lineJoin = g.strokeProperties.jointsStyle, a.miterLimit = g.strokeProperties.miterLimit);
              var h = a.lineWidth;
              (h = 1 === h || 3 === h) && a.translate(.5, .5);
              a.flashStroke(g.path, f);
              h && a.translate(-.5, -.5);
              a.strokeStyle = "transparent";
            }
          }
        }
      };
      c.prototype._deserializePaths = function(a, b, e) {
        if (this._paths) {
          return this._paths;
        }
        e = this._paths = [];
        var d = null, g = null, h = 0, k = 0, l, p, m = !1, n = 0, A = 0, x = a.commands, w = a.coordinates, C = a.styles, r = C.position = 0;
        a = a.commandsPosition;
        for (var q = 0;q < a;q++) {
          switch(x[q]) {
            case 9:
              m && d && (d.lineTo(n, A), g && g.lineTo(n, A));
              m = !0;
              h = n = w[r++] / 20;
              k = A = w[r++] / 20;
              d && d.moveTo(h, k);
              g && g.moveTo(h, k);
              break;
            case 10:
              h = w[r++] / 20;
              k = w[r++] / 20;
              d && d.lineTo(h, k);
              g && g.lineTo(h, k);
              break;
            case 11:
              l = w[r++] / 20;
              p = w[r++] / 20;
              h = w[r++] / 20;
              k = w[r++] / 20;
              d && d.quadraticCurveTo(l, p, h, k);
              g && g.quadraticCurveTo(l, p, h, k);
              break;
            case 12:
              l = w[r++] / 20;
              p = w[r++] / 20;
              var t = w[r++] / 20, J = w[r++] / 20, h = w[r++] / 20, k = w[r++] / 20;
              d && d.bezierCurveTo(l, p, t, J, h, k);
              g && g.bezierCurveTo(l, p, t, J, h, k);
              break;
            case 1:
              d = this._createPath(0, f.ColorUtilities.rgbaToCSSStyle(C.readUnsignedInt()), !1, null, h, k);
              break;
            case 3:
              l = this._readBitmap(C, b);
              d = this._createPath(0, l.style, l.smoothImage, null, h, k);
              break;
            case 2:
              d = this._createPath(0, this._readGradient(C, b), !1, null, h, k);
              break;
            case 4:
              d = null;
              break;
            case 5:
              g = f.ColorUtilities.rgbaToCSSStyle(C.readUnsignedInt());
              C.position += 1;
              l = C.readByte();
              p = c.LINE_CAPS_STYLES[C.readByte()];
              t = c.LINE_JOINTS_STYLES[C.readByte()];
              l = new E(w[r++] / 20, l, p, t, C.readByte());
              g = this._createPath(1, g, !1, l, h, k);
              break;
            case 6:
              g = this._createPath(2, this._readGradient(C, b), !1, null, h, k);
              break;
            case 7:
              l = this._readBitmap(C, b);
              g = this._createPath(2, l.style, l.smoothImage, null, h, k);
              break;
            case 8:
              g = null;
          }
        }
        m && d && (d.lineTo(n, A), g && g.lineTo(n, A));
        this._pathData = null;
        return e;
      };
      c.prototype._createPath = function(a, b, c, e, d, g) {
        a = new F(a, b, c, e);
        this._paths.push(a);
        a.path.moveTo(d, g);
        return a.path;
      };
      c.prototype._readMatrix = function(b) {
        return new a(b.readFloat(), b.readFloat(), b.readFloat(), b.readFloat(), b.readFloat(), b.readFloat());
      };
      c.prototype._readGradient = function(a, b) {
        var c = a.readUnsignedByte(), e = 2 * a.readShort() / 255, d = this._readMatrix(a), c = 16 === c ? b.createLinearGradient(-1, 0, 1, 0) : b.createRadialGradient(e, 0, 0, 0, 0, 1);
        c.setTransform && c.setTransform(d.toSVGMatrix());
        d = a.readUnsignedByte();
        for (e = 0;e < d;e++) {
          var g = a.readUnsignedByte() / 255, h = f.ColorUtilities.rgbaToCSSStyle(a.readUnsignedInt());
          c.addColorStop(g, h);
        }
        a.position += 2;
        return c;
      };
      c.prototype._readBitmap = function(a, b) {
        var c = a.readUnsignedInt(), e = this._readMatrix(a), d = a.readBoolean() ? "repeat" : "no-repeat", g = a.readBoolean();
        (c = this._textures[c]) ? (d = b.createPattern(c.renderSource, d), d.setTransform(e.toSVGMatrix())) : d = null;
        return {style:d, smoothImage:g};
      };
      c.prototype._renderFallback = function(a) {
        this.fillStyle || (this.fillStyle = f.ColorStyle.randomStyle());
        var b = this._bounds;
        a.save();
        a.beginPath();
        a.lineWidth = 2;
        a.fillStyle = this.fillStyle;
        a.fillRect(b.x, b.y, b.w, b.h);
        a.restore();
      };
      c.LINE_CAPS_STYLES = ["round", "butt", "square"];
      c.LINE_JOINTS_STYLES = ["round", "bevel", "miter"];
      return c;
    }(e);
    l.RenderableShape = J;
    h = function(b) {
      function c() {
        b.apply(this, arguments);
        this._flags = 5888;
        this._morphPaths = Object.create(null);
      }
      __extends(c, b);
      c.prototype._deserializePaths = function(a, b, c) {
        if (this._morphPaths[c]) {
          return this._morphPaths[c];
        }
        var e = this._morphPaths[c] = [], d = null, g = null, h = 0, l = 0, p, m, n = !1, A = 0, w = 0, x = a.commands, C = a.coordinates, r = a.morphCoordinates, q = a.styles, t = a.morphStyles;
        q.position = 0;
        var y = t.position = 0;
        a = a.commandsPosition;
        for (var D = 0;D < a;D++) {
          switch(x[D]) {
            case 9:
              n && d && (d.lineTo(A, w), g && g.lineTo(A, w));
              n = !0;
              h = A = k(C[y], r[y++], c) / 20;
              l = w = k(C[y], r[y++], c) / 20;
              d && d.moveTo(h, l);
              g && g.moveTo(h, l);
              break;
            case 10:
              h = k(C[y], r[y++], c) / 20;
              l = k(C[y], r[y++], c) / 20;
              d && d.lineTo(h, l);
              g && g.lineTo(h, l);
              break;
            case 11:
              p = k(C[y], r[y++], c) / 20;
              m = k(C[y], r[y++], c) / 20;
              h = k(C[y], r[y++], c) / 20;
              l = k(C[y], r[y++], c) / 20;
              d && d.quadraticCurveTo(p, m, h, l);
              g && g.quadraticCurveTo(p, m, h, l);
              break;
            case 12:
              p = k(C[y], r[y++], c) / 20;
              m = k(C[y], r[y++], c) / 20;
              var I = k(C[y], r[y++], c) / 20, L = k(C[y], r[y++], c) / 20, h = k(C[y], r[y++], c) / 20, l = k(C[y], r[y++], c) / 20;
              d && d.bezierCurveTo(p, m, I, L, h, l);
              g && g.bezierCurveTo(p, m, I, L, h, l);
              break;
            case 1:
              d = this._createMorphPath(0, c, f.ColorUtilities.rgbaToCSSStyle(z(q.readUnsignedInt(), t.readUnsignedInt(), c)), !1, null, h, l);
              break;
            case 3:
              p = this._readMorphBitmap(q, t, c, b);
              d = this._createMorphPath(0, c, p.style, p.smoothImage, null, h, l);
              break;
            case 2:
              p = this._readMorphGradient(q, t, c, b);
              d = this._createMorphPath(0, c, p, !1, null, h, l);
              break;
            case 4:
              d = null;
              break;
            case 5:
              p = k(C[y], r[y++], c) / 20;
              g = f.ColorUtilities.rgbaToCSSStyle(z(q.readUnsignedInt(), t.readUnsignedInt(), c));
              q.position += 1;
              m = q.readByte();
              I = J.LINE_CAPS_STYLES[q.readByte()];
              L = J.LINE_JOINTS_STYLES[q.readByte()];
              p = new E(p, m, I, L, q.readByte());
              g = this._createMorphPath(1, c, g, !1, p, h, l);
              break;
            case 6:
              p = this._readMorphGradient(q, t, c, b);
              g = this._createMorphPath(2, c, p, !1, null, h, l);
              break;
            case 7:
              p = this._readMorphBitmap(q, t, c, b);
              g = this._createMorphPath(2, c, p.style, p.smoothImage, null, h, l);
              break;
            case 8:
              g = null;
          }
        }
        n && d && (d.lineTo(A, w), g && g.lineTo(A, w));
        return e;
      };
      c.prototype._createMorphPath = function(a, b, c, e, d, g, f) {
        a = new F(a, c, e, d);
        this._morphPaths[b].push(a);
        a.path.moveTo(g, f);
        return a.path;
      };
      c.prototype._readMorphMatrix = function(b, c, e) {
        return new a(k(b.readFloat(), c.readFloat(), e), k(b.readFloat(), c.readFloat(), e), k(b.readFloat(), c.readFloat(), e), k(b.readFloat(), c.readFloat(), e), k(b.readFloat(), c.readFloat(), e), k(b.readFloat(), c.readFloat(), e));
      };
      c.prototype._readMorphGradient = function(a, b, c, e) {
        var d = a.readUnsignedByte(), g = 2 * a.readShort() / 255, h = this._readMorphMatrix(a, b, c);
        e = 16 === d ? e.createLinearGradient(-1, 0, 1, 0) : e.createRadialGradient(g, 0, 0, 0, 0, 1);
        e.setTransform && e.setTransform(h.toSVGMatrix());
        h = a.readUnsignedByte();
        for (d = 0;d < h;d++) {
          var g = k(a.readUnsignedByte() / 255, b.readUnsignedByte() / 255, c), l = z(a.readUnsignedInt(), b.readUnsignedInt(), c), l = f.ColorUtilities.rgbaToCSSStyle(l);
          e.addColorStop(g, l);
        }
        a.position += 2;
        return e;
      };
      c.prototype._readMorphBitmap = function(a, b, c, e) {
        var d = a.readUnsignedInt();
        b = this._readMorphMatrix(a, b, c);
        c = a.readBoolean() ? "repeat" : "no-repeat";
        a = a.readBoolean();
        e = e.createPattern(this._textures[d]._canvas, c);
        e.setTransform(b.toSVGMatrix());
        return {style:e, smoothImage:a};
      };
      return c;
    }(J);
    l.RenderableMorphShape = h;
    var A = function() {
      function a() {
        this.align = this.leading = this.descent = this.ascent = this.width = this.y = this.x = 0;
        this.runs = [];
      }
      a._getMeasureContext = function() {
        a._measureContext || (a._measureContext = document.createElement("canvas").getContext("2d"));
        return a._measureContext;
      };
      a.prototype.addRun = function(b, c, e, d, g) {
        if (e) {
          var f = a._getMeasureContext();
          f.font = b;
          f = v(f, e, d);
          this.runs.push(new C(b, c, e, f, d, g));
          this.width += f;
        }
      };
      a.prototype.wrap = function(b) {
        var c = [this], e = this.runs, d = this;
        d.width = 0;
        d.runs = [];
        for (var g = a._getMeasureContext(), f = 0;f < e.length;f++) {
          var h = e[f], k = h.text;
          h.text = "";
          h.width = 0;
          g.font = h.font;
          for (var l = b, p = k.split(/[\s.-]/), m = 0, n = 0;n < p.length;n++) {
            var A = p[n], x = k.substr(m, A.length + 1), r = h.letterSpacing, q = v(g, x, r);
            if (q > l) {
              do {
                if (h.text && (d.runs.push(h), d.width += h.width, h = new C(h.font, h.fillStyle, "", 0, h.letterSpacing, h.underline), l = new a, l.y = d.y + d.descent + d.leading + d.ascent | 0, l.ascent = d.ascent, l.descent = d.descent, l.leading = d.leading, l.align = d.align, c.push(l), d = l), l = b - q, 0 > l) {
                  for (var t = x.length, E = x;1 < t && !(t--, E = x.substr(0, t), q = v(g, E, r), q <= b);) {
                  }
                  h.text = E;
                  h.width = q;
                  x = x.substr(t);
                  q = v(g, x, r);
                }
              } while (x && 0 > l);
            } else {
              l -= q;
            }
            h.text += x;
            h.width += q;
            m += A.length + 1;
          }
          d.runs.push(h);
          d.width += h.width;
        }
        return c;
      };
      a.prototype.toString = function() {
        return "TextLine {x: " + this.x + ", y: " + this.y + ", width: " + this.width + ", height: " + (this.ascent + this.descent + this.leading) + "}";
      };
      return a;
    }();
    l.TextLine = A;
    var C = function() {
      return function(a, b, c, e, d, g) {
        void 0 === a && (a = "");
        void 0 === b && (b = "");
        void 0 === c && (c = "");
        void 0 === e && (e = 0);
        void 0 === d && (d = 0);
        void 0 === g && (g = !1);
        this.font = a;
        this.fillStyle = b;
        this.text = c;
        this.width = e;
        this.letterSpacing = d;
        this.underline = g;
      };
    }();
    l.TextRun = C;
    h = function(b) {
      function c(e) {
        b.call(this);
        this._flags = 4352;
        this.properties = {};
        this._textBounds = e.clone();
        this._textRunData = null;
        this._plainText = "";
        this._borderColor = this._backgroundColor = 0;
        this._matrix = a.createIdentity();
        this._coords = null;
        this._scrollV = 1;
        this._scrollH = 0;
        this.textRect = e.clone();
        this.lines = [];
        this.setBounds(e);
      }
      __extends(c, b);
      c.prototype.setBounds = function(a) {
        b.prototype.setBounds.call(this, a);
        this._textBounds.set(a);
        this.textRect.setElements(a.x + 2, a.y + 2, a.w - 2, a.h - 2);
      };
      c.prototype.setContent = function(a, b, c, e) {
        this._textRunData = b;
        this._plainText = a;
        this._matrix.set(c);
        this._coords = e;
        this.lines = [];
      };
      c.prototype.setStyle = function(a, b, c, e) {
        this._backgroundColor = a;
        this._borderColor = b;
        this._scrollV = c;
        this._scrollH = e;
      };
      c.prototype.reflow = function(a, b) {
        var c = this._textRunData;
        if (c) {
          for (var e = this._bounds, d = e.w - 4, g = this._plainText, h = this.lines, k = new A, l = 0, p = 0, m = 0, n = 0, x = -4294967295, C = -1;c.position < c.length;) {
            var r = c.readInt(), w = c.readInt(), q = c.readInt(), t = c.readUTF(), E = c.readInt(), y = c.readInt(), J = c.readInt();
            E > m && (m = E);
            y > n && (n = y);
            J > x && (x = J);
            E = c.readBoolean();
            y = "";
            c.readBoolean() && (y += "italic ");
            E && (y += "bold ");
            q = y + q + "px " + t + ", AdobeBlank";
            t = c.readInt();
            t = f.ColorUtilities.rgbToHex(t);
            E = c.readInt();
            -1 === C && (C = E);
            c.readBoolean();
            c.readInt();
            c.readInt();
            c.readInt();
            E = c.readInt();
            c.readInt();
            for (var y = c.readBoolean(), D = "", J = !1;!J;r++) {
              var J = r >= w - 1, I = g[r];
              if ("\r" !== I && "\n" !== I && (D += I, r < g.length - 1)) {
                continue;
              }
              k.addRun(q, t, D, E, y);
              if (k.runs.length) {
                h.length && (l += x);
                l += m;
                k.y = l | 0;
                l += n;
                k.ascent = m;
                k.descent = n;
                k.leading = x;
                k.align = C;
                if (b && k.width > d) {
                  for (k = k.wrap(d), D = 0;D < k.length;D++) {
                    var L = k[D], l = L.y + L.descent + L.leading;
                    h.push(L);
                    L.width > p && (p = L.width);
                  }
                } else {
                  h.push(k), k.width > p && (p = k.width);
                }
                k = new A;
              } else {
                l += m + n + x;
              }
              D = "";
              if (J) {
                n = m = 0;
                x = -4294967295;
                C = -1;
                break;
              }
              "\r" === I && "\n" === g[r + 1] && r++;
            }
            k.addRun(q, t, D, E, y);
          }
          c = g[g.length - 1];
          "\r" !== c && "\n" !== c || h.push(k);
          c = this.textRect;
          c.w = p;
          c.h = l;
          if (a) {
            if (!b) {
              d = p;
              p = e.w;
              switch(a) {
                case 1:
                  c.x = p - (d + 4) >> 1;
                  break;
                case 3:
                  c.x = p - (d + 4);
              }
              this._textBounds.setElements(c.x - 2, c.y - 2, c.w + 4, c.h + 4);
              e.w = d + 4;
            }
            e.x = c.x - 2;
            e.h = l + 4;
          } else {
            this._textBounds = e;
          }
          for (r = 0;r < h.length;r++) {
            if (e = h[r], e.width < d) {
              switch(e.align) {
                case 1:
                  e.x = d - e.width | 0;
                  break;
                case 2:
                  e.x = (d - e.width) / 2 | 0;
              }
            }
          }
          this.invalidate();
        }
      };
      c.roundBoundPoints = function(a) {
        for (var b = 0;b < a.length;b++) {
          var c = a[b];
          c.x = Math.floor(c.x + .1) + .5;
          c.y = Math.floor(c.y + .1) + .5;
        }
      };
      c.prototype.render = function(b) {
        b.save();
        var e = this._textBounds;
        this._backgroundColor && (b.fillStyle = f.ColorUtilities.rgbaToCSSStyle(this._backgroundColor), b.fillRect(e.x, e.y, e.w, e.h));
        if (this._borderColor) {
          b.strokeStyle = f.ColorUtilities.rgbaToCSSStyle(this._borderColor);
          b.lineCap = "square";
          b.lineWidth = 1;
          var d = c.absoluteBoundPoints, g = b.currentTransform;
          g ? (e = e.clone(), (new a(g.a, g.b, g.c, g.d, g.e, g.f)).transformRectangle(e, d), b.setTransform(1, 0, 0, 1, 0, 0)) : (d[0].x = e.x, d[0].y = e.y, d[1].x = e.x + e.w, d[1].y = e.y, d[2].x = e.x + e.w, d[2].y = e.y + e.h, d[3].x = e.x, d[3].y = e.y + e.h);
          c.roundBoundPoints(d);
          e = new Path2D;
          e.moveTo(d[0].x, d[0].y);
          e.lineTo(d[1].x, d[1].y);
          e.lineTo(d[2].x, d[2].y);
          e.lineTo(d[3].x, d[3].y);
          e.lineTo(d[0].x, d[0].y);
          b.stroke(e);
          g && b.setTransform(g.a, g.b, g.c, g.d, g.e, g.f);
        }
        this._coords ? this._renderChars(b) : this._renderLines(b);
        b.restore();
      };
      c.prototype._renderChars = function(a) {
        if (this._matrix) {
          var b = this._matrix;
          a.transform(b.a, b.b, b.c, b.d, b.tx, b.ty);
        }
        var b = this.lines, c = this._coords;
        c.position = 0;
        for (var e = "", d = "", g = 0;g < b.length;g++) {
          for (var f = b[g].runs, h = 0;h < f.length;h++) {
            var k = f[h];
            k.font !== e && (a.font = e = k.font);
            k.fillStyle !== d && (a.fillStyle = d = k.fillStyle);
            for (var k = k.text, l = 0;l < k.length;l++) {
              var p = c.readInt() / 20, m = c.readInt() / 20;
              a.fillText(k[l], p, m);
            }
          }
        }
      };
      c.prototype._renderLines = function(a) {
        var b = this._textBounds;
        a.beginPath();
        a.rect(b.x + 2, b.y + 2, b.w - 4, b.h - 4);
        a.clip();
        a.translate(b.x - this._scrollH + 2, b.y + 2);
        var c = this.lines, e = this._scrollV, d = 0, g = "", f = "";
        a.textAlign = "left";
        a.textBaseline = "alphabetic";
        for (var h = 0;h < c.length;h++) {
          var k = c[h], l = k.x, p = k.y;
          if (h + 1 < e) {
            d = p + k.descent + k.leading;
          } else {
            p -= d;
            if (h + 1 - e && p > b.h) {
              break;
            }
            for (var m = k.runs, n = 0;n < m.length;n++) {
              var A = m[n];
              A.font !== g && (a.font = g = A.font);
              A.fillStyle !== f && (a.fillStyle = f = A.fillStyle);
              A.underline && a.fillRect(l, p + k.descent / 2 | 0, A.width, 1);
              a.textAlign = "left";
              a.textBaseline = "alphabetic";
              if (0 < A.letterSpacing) {
                for (var x = A.text, C = 0;C < x.length;C++) {
                  a.fillText(x[C], l, p), l += v(a, x[C], A.letterSpacing);
                }
              } else {
                a.fillText(A.text, l, p), l += A.width;
              }
            }
          }
        }
      };
      c.absoluteBoundPoints = [new g(0, 0), new g(0, 0), new g(0, 0), new g(0, 0)];
      return c;
    }(e);
    l.RenderableText = h;
    e = function(a) {
      function b(c, e) {
        a.call(this);
        this._flags = 768;
        this.properties = {};
        this.setBounds(new q(0, 0, c, e));
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
    }(e);
    l.Label = e;
    var I = f.ColorUtilities.clampByte, e = function() {
      function a() {
      }
      a.prototype.expandBounds = function(a) {
      };
      return a;
    }();
    l.Filter = e;
    var L = [2, 1 / 1.05, 1 / 1.35, 1 / 1.55, 1 / 1.75, 1 / 1.9, .5, 1 / 2.1, 1 / 2.2, 1 / 2.3, .4, 1 / 3, 1 / 3, 1 / 3.5, 1 / 3.5], h = function(a) {
      function b(c, e, d) {
        a.call(this);
        this.blurX = c;
        this.blurY = e;
        this.quality = d;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        B(a, this.quality, this.blurX, this.blurY, !0);
      };
      return b;
    }(e);
    l.BlurFilter = h;
    h = function(a) {
      function b(c, e, d, g, f, h, k, l, p, m, n) {
        a.call(this);
        this.alpha = c;
        this.angle = e;
        this.blurX = d;
        this.blurY = g;
        this.color = f;
        this.distance = h;
        this.hideObject = k;
        this.inner = l;
        this.knockout = p;
        this.quality = m;
        this.strength = n;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        B(a, this.quality, this.blurX, this.blurY, !1);
        if (this.distance) {
          var b = this.angle * Math.PI / 180, c = Math.cos(b) * this.distance, e = Math.sin(b) * this.distance, b = a.x + (0 <= c ? 0 : Math.floor(c)), c = a.x + a.w + Math.ceil(Math.abs(c)), d = a.y + (0 <= e ? 0 : Math.floor(e)), e = a.y + a.h + Math.ceil(Math.abs(e));
          a.x = b;
          a.w = c - b;
          a.y = d;
          a.h = e - d;
        }
      };
      return b;
    }(e);
    l.DropshadowFilter = h;
    h = function(a) {
      function b(c, e, d, g, f, h, k, l) {
        a.call(this);
        this.alpha = c;
        this.blurX = e;
        this.blurY = d;
        this.color = g;
        this.inner = f;
        this.knockout = h;
        this.quality = k;
        this.strength = l;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        this.inner || B(a, this.quality, this.blurX, this.blurY, !1);
      };
      return b;
    }(e);
    l.GlowFilter = h;
    (function(a) {
      a[a.Unknown = 0] = "Unknown";
      a[a.Identity = 1] = "Identity";
    })(l.ColorMatrixType || (l.ColorMatrixType = {}));
    e = function(a) {
      function b(c) {
        a.call(this);
        this._data = new Float32Array(c);
        this._type = 0;
      }
      __extends(b, a);
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
      b.prototype.setMultipliersAndOffsets = function(a, b, c, e, d, g, f, h) {
        for (var k = this._data, l = 0;l < k.length;l++) {
          k[l] = 0;
        }
        k[0] = a;
        k[5] = b;
        k[10] = c;
        k[15] = e;
        k[16] = d / 255;
        k[17] = g / 255;
        k[18] = f / 255;
        k[19] = h / 255;
        this._type = 0;
      };
      b.prototype.transformRGBA = function(a) {
        var b = a >> 24 & 255, c = a >> 16 & 255, e = a >> 8 & 255, d = a & 255, g = this._data;
        a = I(b * g[0] + c * g[1] + e * g[2] + d * g[3] + 255 * g[16]);
        var f = I(b * g[4] + c * g[5] + e * g[6] + d * g[7] + 255 * g[17]), h = I(b * g[8] + c * g[9] + e * g[10] + d * g[11] + 255 * g[18]), b = I(b * g[12] + c * g[13] + e * g[14] + d * g[15] + 255 * g[19]);
        return a << 24 | f << 16 | h << 8 | b;
      };
      b.prototype.multiply = function(a) {
        if (!(a._type & 1)) {
          var b = this._data, c = a._data;
          a = b[0];
          var e = b[1], d = b[2], g = b[3], f = b[4], h = b[5], k = b[6], l = b[7], p = b[8], m = b[9], n = b[10], A = b[11], x = b[12], C = b[13], r = b[14], w = b[15], q = b[16], t = b[17], E = b[18], J = b[19], D = c[0], I = c[1], y = c[2], L = c[3], v = c[4], B = c[5], F = c[6], z = c[7], K = c[8], M = c[9], fa = c[10], ga = c[11], ha = c[12], ia = c[13], ja = c[14], ka = c[15], la = c[16], ma = c[17], na = c[18], c = c[19];
          b[0] = a * D + f * I + p * y + x * L;
          b[1] = e * D + h * I + m * y + C * L;
          b[2] = d * D + k * I + n * y + r * L;
          b[3] = g * D + l * I + A * y + w * L;
          b[4] = a * v + f * B + p * F + x * z;
          b[5] = e * v + h * B + m * F + C * z;
          b[6] = d * v + k * B + n * F + r * z;
          b[7] = g * v + l * B + A * F + w * z;
          b[8] = a * K + f * M + p * fa + x * ga;
          b[9] = e * K + h * M + m * fa + C * ga;
          b[10] = d * K + k * M + n * fa + r * ga;
          b[11] = g * K + l * M + A * fa + w * ga;
          b[12] = a * ha + f * ia + p * ja + x * ka;
          b[13] = e * ha + h * ia + m * ja + C * ka;
          b[14] = d * ha + k * ia + n * ja + r * ka;
          b[15] = g * ha + l * ia + A * ja + w * ka;
          b[16] = a * la + f * ma + p * na + x * c + q;
          b[17] = e * la + h * ma + m * na + C * c + t;
          b[18] = d * la + k * ma + n * na + r * c + E;
          b[19] = g * la + l * ma + A * na + w * c + J;
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
        for (var c = 0;20 > c;c++) {
          if (.001 < Math.abs(b[c] - a[c])) {
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
    }(e);
    l.ColorMatrix = e;
    (function(a) {
      function b(a, c) {
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
      function c(a) {
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
            f.Debug.somewhatImplemented("Blend Mode: " + l.BlendMode[a]);
        }
        return b;
      }
      var e = CanvasRenderingContext2D.prototype.save, d = CanvasRenderingContext2D.prototype.clip, g = CanvasRenderingContext2D.prototype.fill, h = CanvasRenderingContext2D.prototype.stroke, k = CanvasRenderingContext2D.prototype.restore, p = CanvasRenderingContext2D.prototype.beginPath;
      a.notifyReleaseChanged = function() {
        CanvasRenderingContext2D.prototype.save = e;
        CanvasRenderingContext2D.prototype.clip = d;
        CanvasRenderingContext2D.prototype.fill = g;
        CanvasRenderingContext2D.prototype.stroke = h;
        CanvasRenderingContext2D.prototype.restore = k;
        CanvasRenderingContext2D.prototype.beginPath = p;
      };
      CanvasRenderingContext2D.prototype.enterBuildingClippingRegion = function() {
        this.buildingClippingRegionDepth || (this.buildingClippingRegionDepth = 0);
        this.buildingClippingRegionDepth++;
      };
      CanvasRenderingContext2D.prototype.leaveBuildingClippingRegion = function() {
        this.buildingClippingRegionDepth--;
      };
      var m = f.NumberUtilities.clamp;
      navigator.userAgent.indexOf("Firefox");
      var n = function() {
        function a() {
        }
        a._prepareSVGFilters = function() {
          if (!a._svgBlurFilter) {
            var b = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            b.setAttribute("style", "display:block;width:0px;height:0px");
            var c = document.createElementNS("http://www.w3.org/2000/svg", "defs"), e = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            e.setAttribute("id", "svgBlurFilter");
            var d = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
            d.setAttribute("stdDeviation", "0 0");
            e.appendChild(d);
            c.appendChild(e);
            a._svgBlurFilter = d;
            e = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            e.setAttribute("id", "svgDropShadowFilter");
            d = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
            d.setAttribute("in", "SourceAlpha");
            d.setAttribute("stdDeviation", "3");
            e.appendChild(d);
            a._svgDropshadowFilterBlur = d;
            d = document.createElementNS("http://www.w3.org/2000/svg", "feOffset");
            d.setAttribute("dx", "0");
            d.setAttribute("dy", "0");
            d.setAttribute("result", "offsetblur");
            e.appendChild(d);
            a._svgDropshadowFilterOffset = d;
            d = document.createElementNS("http://www.w3.org/2000/svg", "feFlood");
            d.setAttribute("flood-color", "rgba(0,0,0,1)");
            e.appendChild(d);
            a._svgDropshadowFilterFlood = d;
            d = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
            d.setAttribute("in2", "offsetblur");
            d.setAttribute("operator", "in");
            e.appendChild(d);
            d = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
            d.setAttribute("in2", "SourceAlpha");
            d.setAttribute("operator", "out");
            d.setAttribute("result", "outer");
            e.appendChild(d);
            var d = document.createElementNS("http://www.w3.org/2000/svg", "feMerge"), g = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
            d.appendChild(g);
            g = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
            d.appendChild(g);
            a._svgDropshadowMergeNode = g;
            e.appendChild(d);
            c.appendChild(e);
            e = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            e.setAttribute("id", "svgColorMatrixFilter");
            g = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
            g.setAttribute("color-interpolation-filters", "sRGB");
            g.setAttribute("in", "SourceGraphic");
            g.setAttribute("type", "matrix");
            e.appendChild(g);
            d = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
            d.setAttribute("in2", "SourceAlpha");
            d.setAttribute("operator", "in");
            e.appendChild(d);
            c.appendChild(e);
            a._svgColorMatrixFilter = g;
            b.appendChild(c);
            document.documentElement.appendChild(b);
          }
        };
        a._applyFilter = function(c, e, d) {
          if (a._svgFiltersAreSupported) {
            if (a._prepareSVGFilters(), a._removeFilter(e), d instanceof l.BlurFilter) {
              var g = b(c, d.quality);
              a._svgBlurFilter.setAttribute("stdDeviation", d.blurX * g + " " + d.blurY * g);
              e.filter = "url(#svgBlurFilter)";
            } else {
              d instanceof l.DropshadowFilter ? (g = b(c, d.quality), a._svgDropshadowFilterBlur.setAttribute("stdDeviation", d.blurX * g + " " + d.blurY * g), a._svgDropshadowFilterOffset.setAttribute("dx", String(Math.cos(d.angle * Math.PI / 180) * d.distance * c)), a._svgDropshadowFilterOffset.setAttribute("dy", String(Math.sin(d.angle * Math.PI / 180) * d.distance * c)), a._svgDropshadowFilterFlood.setAttribute("flood-color", f.ColorUtilities.rgbaToCSSStyle(d.color << 8 | Math.round(255 * d.alpha))), 
              a._svgDropshadowMergeNode.setAttribute("in", d.knockout ? "outer" : "SourceGraphic"), e.filter = "url(#svgDropShadowFilter)") : d instanceof l.ColorMatrix && (a._svgColorMatrixFilter.setAttribute("values", d.toSVGFilterMatrix()), e.filter = "url(#svgColorMatrixFilter)");
            }
          }
        };
        a._removeFilter = function(a) {
          a.filter = "none";
        };
        a._applyColorMatrix = function(b, c) {
          c.isIdentity() ? (b.globalAlpha = 1, b.globalColorMatrix = null) : c.hasOnlyAlphaMultiplier() ? (b.globalAlpha = m(c.alphaMultiplier, 0, 1), b.globalColorMatrix = null) : (b.globalAlpha = 1, a._svgFiltersAreSupported ? (a._applyFilter(1, b, c), b.globalColorMatrix = null) : b.globalColorMatrix = c);
        };
        a._svgFiltersAreSupported = !!Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype, "filter");
        return a;
      }();
      a.Filters = n;
      l.filters && n._svgFiltersAreSupported && ("registerScratchCanvas" in window || (window.registerScratchCanvas = function(a) {
        a.style.display = "none";
        document.body.appendChild(a);
      }));
      var A = function() {
        function a(b, c, e, d) {
          this.surface = b;
          this.region = c;
          this.w = e;
          this.h = d;
        }
        a.prototype.free = function() {
          this.surface.free(this);
        };
        a._ensureCopyCanvasSize = function(b, c) {
          var e;
          if (a._copyCanvasContext) {
            if (e = a._copyCanvasContext.canvas, e.width < b || e.height < c) {
              e.width = f.IntegerUtilities.nearestPowerOfTwo(b), e.height = f.IntegerUtilities.nearestPowerOfTwo(c);
            }
          } else {
            e = document.createElement("canvas"), "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(e), e.width = f.IntegerUtilities.nearestPowerOfTwo(b), e.height = f.IntegerUtilities.nearestPowerOfTwo(c), a._copyCanvasContext = e.getContext("2d");
          }
        };
        a.prototype.draw = function(b, e, d, g, f, h, k, l, p) {
          this.context.setTransform(1, 0, 0, 1, 0, 0);
          var m, A, x = 0, C = 0;
          b.context.canvas === this.context.canvas ? (a._ensureCopyCanvasSize(g, f), A = a._copyCanvasContext, A.clearRect(0, 0, g, f), A.drawImage(b.surface.canvas, b.region.x, b.region.y, g, f, 0, 0, g, f), m = A, C = x = 0) : (m = b.surface.context, x = b.region.x, C = b.region.y);
          a: {
            switch(k) {
              case 11:
                b = !0;
                break a;
              default:
                b = !1;
            }
          }
          b && (this.context.save(), this.context.beginPath(), this.context.rect(e, d, g, f), this.context.clip());
          this.context.globalAlpha = 1;
          this.context.globalCompositeOperation = c(k);
          if (l) {
            h && !h.isIdentity() && (l = l.concat(h));
            h = 0;
            if (1 < l.length) {
              var r, w, q;
              A ? (k = A, A = m, m = k) : (a._ensureCopyCanvasSize(g, f), A = a._copyCanvasContext, w = r = 0);
              for (;h < l.length - 1;h++) {
                A.clearRect(0, 0, g, f), n._applyFilter(p, A, l[h]), A.drawImage(m.canvas, x, C, g, f, r, w, g, f), n._removeFilter(A), k = A, w = x, q = C, A = m, m = k, C = x = r, r = w, w = q;
              }
              n._removeFilter(m);
              n._removeFilter(A);
            }
            n._applyFilter(p, this.context, l[h]);
          }
          this.context.drawImage(m.canvas, x, C, g, f, e, d, g, f);
          this.context.globalCompositeOperation = c(1);
          n._removeFilter(this.context);
          b && this.context.restore();
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
          a.globalCompositeOperation = c(1);
        };
        a.prototype.fill = function(a) {
          var b = this.surface.context, c = this.region;
          b.fillStyle = a;
          b.fillRect(c.x, c.y, c.w, c.h);
        };
        a.prototype.clear = function(a) {
          var b = this.surface.context, c = this.region;
          a || (a = c);
          b.clearRect(a.x, a.y, a.w, a.h);
        };
        return a;
      }();
      a.Canvas2DSurfaceRegion = A;
      var x = function() {
        function a(b, c) {
          this.canvas = b;
          this.context = b.getContext("2d");
          this.w = b.width;
          this.h = b.height;
          this._regionAllocator = c;
        }
        a.prototype.allocate = function(a, b) {
          var c = this._regionAllocator.allocate(a, b);
          return c ? new A(this, c, a, b) : null;
        };
        a.prototype.free = function(a) {
          this._regionAllocator.free(a.region);
        };
        return a;
      }();
      a.Canvas2DSurface = x;
    })(l.Canvas2D || (l.Canvas2D = {}));
  })(f.GFX || (f.GFX = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(f, l) {
  function k() {
    this.constructor = f;
  }
  for (var z in l) {
    l.hasOwnProperty(z) && (f[z] = l[z]);
  }
  k.prototype = l.prototype;
  f.prototype = new k;
};
(function(f) {
  (function(l) {
    (function(a) {
      var b = f.Debug.assert, c = f.GFX.Geometry.Rectangle, d = f.GFX.Geometry.Point, k = f.GFX.Geometry.Matrix, q = f.NumberUtilities.clamp, D = f.NumberUtilities.pow2, t = function() {
        return function(a, b) {
          this.surfaceRegion = a;
          this.scale = b;
        };
      }();
      a.MipMapLevel = t;
      var x = function() {
        function a(b, c, e, d) {
          this._node = c;
          this._levels = [];
          this._surfaceRegionAllocator = e;
          this._size = d;
          this._renderer = b;
        }
        a.prototype.getLevel = function(a) {
          a = Math.max(a.getAbsoluteScaleX(), a.getAbsoluteScaleY());
          var b = 0;
          1 !== a && (b = q(Math.round(Math.log(a) / Math.LN2), -5, 3));
          this._node.hasFlags(512) || (b = q(b, -5, 0));
          a = D(b);
          var c = 5 + b, b = this._levels[c];
          if (!b) {
            var e = this._node.getBounds().clone();
            e.scale(a, a);
            e.snap();
            var d = this._surfaceRegionAllocator.allocate(e.w, e.h, null), f = d.region, b = this._levels[c] = new t(d, a), c = new g(d);
            c.clip.set(f);
            c.matrix.setElements(a, 0, 0, a, f.x - e.x, f.y - e.y);
            c.flags |= 64;
            this._renderer.renderNodeWithState(this._node, c);
            c.free();
          }
          return b;
        };
        return a;
      }();
      a.MipMap = x;
      (function(a) {
        a[a.NonZero = 0] = "NonZero";
        a[a.EvenOdd = 1] = "EvenOdd";
      })(a.FillRule || (a.FillRule = {}));
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
      }(l.RendererOptions);
      a.Canvas2DRendererOptions = p;
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
      })(a.RenderFlags || (a.RenderFlags = {}));
      c.createMaxI16();
      var g = function(a) {
        function b(d) {
          a.call(this);
          this.clip = c.createEmpty();
          this.clipList = [];
          this.clipPath = null;
          this.flags = 0;
          this.target = null;
          this.matrix = k.createIdentity();
          this.colorMatrix = l.ColorMatrix.createIdentity();
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
          f.ArrayUtilities.copyFrom(this.clipList, a.clipList);
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
      }(l.State);
      a.RenderState = g;
      var r = function() {
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
      a.FrameInfo = r;
      var v = function(q) {
        function t(a, b, d) {
          void 0 === d && (d = new p);
          q.call(this, a, b, d);
          this._visited = 0;
          this._frameInfo = new r;
          this._fontSize = 0;
          this._layers = [];
          if (a instanceof HTMLCanvasElement) {
            var g = a;
            this._viewport = new c(0, 0, g.width, g.height);
            this._target = this._createTarget(g);
          } else {
            this._addLayer("Background Layer");
            d = this._addLayer("Canvas Layer");
            g = document.createElement("canvas");
            d.appendChild(g);
            this._viewport = new c(0, 0, a.scrollWidth, a.scrollHeight);
            var f = this;
            b.addEventListener(1, function() {
              f._onStageBoundsChanged(g);
            });
            this._onStageBoundsChanged(g);
          }
          t._prepareSurfaceAllocators();
        }
        __extends(t, q);
        t.prototype._addLayer = function(a) {
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
        Object.defineProperty(t.prototype, "_backgroundVideoLayer", {get:function() {
          return this._layers[0];
        }, enumerable:!0, configurable:!0});
        t.prototype._createTarget = function(b) {
          return new a.Canvas2DSurfaceRegion(new a.Canvas2DSurface(b), new l.RegionAllocator.Region(0, 0, b.width, b.height), b.width, b.height);
        };
        t.prototype._onStageBoundsChanged = function(a) {
          var b = this._stage.getBounds(!0);
          b.snap();
          for (var c = this._devicePixelRatio = window.devicePixelRatio || 1, e = b.w / c + "px", c = b.h / c + "px", d = 0;d < this._layers.length;d++) {
            var g = this._layers[d];
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
        t._prepareSurfaceAllocators = function() {
          t._initializedCaches || (t._surfaceCache = new l.SurfaceRegionAllocator.SimpleAllocator(function(b, c) {
            var e = document.createElement("canvas");
            "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(e);
            var d = Math.max(1024, b), g = Math.max(1024, c);
            e.width = d;
            e.height = g;
            var f = null, f = 512 <= b || 512 <= c ? new l.RegionAllocator.GridAllocator(d, g, d, g) : new l.RegionAllocator.BucketAllocator(d, g);
            return new a.Canvas2DSurface(e, f);
          }), t._shapeCache = new l.SurfaceRegionAllocator.SimpleAllocator(function(b, c) {
            var e = document.createElement("canvas");
            "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(e);
            e.width = 1024;
            e.height = 1024;
            var d = d = new l.RegionAllocator.CompactAllocator(1024, 1024);
            return new a.Canvas2DSurface(e, d);
          }), t._initializedCaches = !0);
        };
        t.prototype.render = function() {
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
        t.prototype.renderNode = function(a, b, c) {
          var e = new g(this._target);
          e.clip.set(b);
          e.flags = 256;
          e.matrix.set(c);
          a.visit(this, e);
          e.free();
        };
        t.prototype.renderNodeWithState = function(a, b) {
          a.visit(this, b);
        };
        t.prototype._renderWithCache = function(a, b) {
          var c = b.matrix, e = a.getBounds();
          if (e.isEmpty()) {
            return !1;
          }
          var d = this._options.cacheShapesMaxSize, g = Math.max(c.getAbsoluteScaleX(), c.getAbsoluteScaleY()), f = !!(b.flags & 16), h = !!(b.flags & 8);
          if (b.hasFlags(256)) {
            if (h || f || !b.colorMatrix.isIdentity() || a.hasFlags(256) || 100 < this._options.cacheShapesThreshold || e.w * g > d || e.h * g > d) {
              return !1;
            }
            (g = a.properties.mipMap) || (g = a.properties.mipMap = new x(this, a, t._shapeCache, d));
            f = g.getLevel(c);
            d = f.surfaceRegion;
            g = d.region;
            return f ? (f = b.target.context, f.imageSmoothingEnabled = f.mozImageSmoothingEnabled = !0, f.setTransform(c.a, c.b, c.c, c.d, c.tx, c.ty), f.drawImage(d.surface.canvas, g.x, g.y, g.w, g.h, e.x, e.y, e.w, e.h), !0) : !1;
          }
        };
        t.prototype._intersectsClipList = function(a, b) {
          var c = a.getBounds(!0), e = !1;
          b.matrix.transformRectangleAABB(c);
          b.clip.intersects(c) && (e = !0);
          var d = b.clipList;
          if (e && d.length) {
            for (var e = !1, g = 0;g < d.length;g++) {
              if (c.intersects(d[g])) {
                e = !0;
                break;
              }
            }
          }
          c.free();
          return e;
        };
        t.prototype.visitGroup = function(a, b) {
          this._frameInfo.groups++;
          a.getBounds();
          if ((!a.hasFlags(4) || b.flags & 4) && a.hasFlags(1)) {
            var c = b.flags & 1;
            if (!c && ((1 !== a.getLayer().blendMode || a.getLayer().mask) && this._options.blending || a.getLayer().filters && this._options.filters)) {
              b = b.clone(), b.flags |= 1, this._renderLayer(a, b), b.free();
            } else {
              if (c && b.removeFlags(1), this._intersectsClipList(a, b)) {
                for (var c = null, e = a.getChildren(), d = 0;d < e.length;d++) {
                  var g = e[d], f = g.getTransform(), h = b.transform(f);
                  h.toggleFlags(4096, g.hasFlags(64));
                  if (0 <= g.clip) {
                    c = c || new Uint8Array(e.length);
                    c[g.clip + d]++;
                    var k = h.clone();
                    k.flags |= 16;
                    k.beginClipPath(f.getMatrix());
                    g.visit(this, k);
                    k.applyClipPath();
                    k.free();
                  } else {
                    g.visit(this, h);
                  }
                  if (c && 0 < c[d]) {
                    for (;c[d]--;) {
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
        t.prototype._renderDebugInfo = function(a, b) {
          if (b.flags & 1024) {
            var c = b.target.context, e = a.getBounds(!0), d = a.properties.style;
            d || (d = a.properties.style = f.ColorStyle.randomStyle());
            c.strokeStyle = d;
            b.matrix.transformRectangleAABB(e);
            c.setTransform(1, 0, 0, 1, 0, 0);
            e.free();
            e = a.getBounds();
            d = t._debugPoints;
            b.matrix.transformRectangle(e, d);
            c.lineWidth = 1;
            c.beginPath();
            c.moveTo(d[0].x, d[0].y);
            c.lineTo(d[1].x, d[1].y);
            c.lineTo(d[2].x, d[2].y);
            c.lineTo(d[3].x, d[3].y);
            c.lineTo(d[0].x, d[0].y);
            c.stroke();
          }
        };
        t.prototype.visitStage = function(a, b) {
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
        t.prototype.visitShape = function(b, c) {
          if (this._intersectsClipList(b, c)) {
            var e = c.matrix;
            c.flags & 8192 && (e = e.clone(), e.snap());
            var d = c.target.context;
            a.Filters._applyColorMatrix(d, c.colorMatrix);
            b.source instanceof l.RenderableVideo ? this.visitRenderableVideo(b.source, c) : 0 < d.globalAlpha && this.visitRenderable(b.source, c, b.ratio);
            c.flags & 8192 && e.free();
            a.Filters._removeFilter(d);
          }
        };
        t.prototype.visitRenderableVideo = function(a, b) {
          if (a.video && a.video.videoWidth) {
            var c = this._devicePixelRatio, e = b.matrix.clone();
            e.scale(1 / c, 1 / c);
            var c = a.getBounds(), d = f.GFX.Geometry.Matrix.createIdentity();
            d.scale(c.w / a.video.videoWidth, c.h / a.video.videoHeight);
            e.preMultiply(d);
            d.free();
            c = e.toCSSTransform();
            a.video.style.transformOrigin = "0 0";
            a.video.style.transform = c;
            var g = this._backgroundVideoLayer;
            g !== a.video.parentElement && (g.appendChild(a.video), a.addEventListener(2, function G(a) {
              g.removeChild(a.video);
              a.removeEventListener(2, G);
            }));
            e.free();
          }
        };
        t.prototype.visitRenderable = function(a, b, c) {
          var e = a.getBounds();
          if (!(b.flags & 32 || e.isEmpty())) {
            if (b.hasFlags(64)) {
              b.removeFlags(64);
            } else {
              if (this._renderWithCache(a, b)) {
                return;
              }
            }
            var d = b.matrix, e = b.target.context, g = !!(b.flags & 16), f = !!(b.flags & 8);
            e.setTransform(d.a, d.b, d.c, d.d, d.tx, d.ty);
            this._frameInfo.shapes++;
            e.imageSmoothingEnabled = e.mozImageSmoothingEnabled = b.hasFlags(4096);
            d = a.properties.renderCount || 0;
            a.properties.renderCount = ++d;
            a.render(e, c, null, g ? b.clipPath : null, f);
          }
        };
        t.prototype._renderLayer = function(a, b) {
          var d = a.getLayer(), g = d.mask;
          if (g) {
            var f = !a.hasFlags(16) || !g.hasFlags(16);
            this._renderWithMask(a, g, d.blendMode, f, b);
          } else {
            g = c.allocate();
            if (f = this._renderToTemporarySurface(a, a.getLayerBounds(!!this._options.filters), b, g, b.target.surface)) {
              b.target.draw(f, g.x, g.y, g.w, g.h, b.colorMatrix, this._options.blending ? d.blendMode : 1, this._options.filters ? d.filters : null, this._devicePixelRatio), f.free();
            }
            g.free();
          }
        };
        t.prototype._renderWithMask = function(a, b, d, g, f) {
          var h = b.getTransform().getConcatenatedMatrix(!0);
          b.parent || (h = h.scale(this._devicePixelRatio, this._devicePixelRatio));
          var k = a.getBounds().clone();
          f.matrix.transformRectangleAABB(k);
          k.snap();
          if (!k.isEmpty()) {
            var l = b.getBounds().clone();
            h.transformRectangleAABB(l);
            l.snap();
            if (!l.isEmpty()) {
              var p = f.clip.clone();
              p.intersect(k);
              p.intersect(l);
              p.snap();
              p.isEmpty() || (k = f.clone(), k.clip.set(p), a = this._renderToTemporarySurface(a, a.getBounds(), k, c.createEmpty(), null), k.free(), l = f.clone(), l.clip.set(p), l.matrix = h, l.flags |= 4, g && (l.flags |= 8), b = this._renderToTemporarySurface(b, b.getBounds(), l, c.createEmpty(), a.surface), l.free(), a.draw(b, 0, 0, p.w, p.h, l.colorMatrix, 11, null, this._devicePixelRatio), f.target.draw(a, p.x, p.y, p.w, p.h, k.colorMatrix, d, null, this._devicePixelRatio), b.free(), a.free());
            }
          }
        };
        t.prototype._renderStageToTarget = function(a, b, d) {
          c.allocationCount = k.allocationCount = g.allocationCount = 0;
          a = new g(a);
          a.clip.set(d);
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
        t.prototype._renderToTemporarySurface = function(a, b, d, g, f) {
          var h = d.matrix;
          b = b.clone();
          h.transformRectangleAABB(b);
          b.snap();
          g.set(b);
          g.intersect(d.clip);
          g.snap();
          if (g.isEmpty()) {
            return null;
          }
          f = this._allocateSurface(g.w, g.h, f);
          b = f.region;
          b = new c(b.x, b.y, g.w, g.h);
          f.context.setTransform(1, 0, 0, 1, 0, 0);
          f.clear();
          h = h.clone();
          h.translate(b.x - g.x, b.y - g.y);
          f.context.save();
          d = d.clone();
          d.target = f;
          d.matrix = h;
          d.clip.set(b);
          a.visit(this, d);
          d.free();
          f.context.restore();
          return f;
        };
        t.prototype._allocateSurface = function(a, b, c) {
          return t._surfaceCache.allocate(a, b, c);
        };
        t.prototype.screenShot = function(a, d, g) {
          d && (d = this._stage.content.groupChild.child, b(d instanceof l.Stage), a = d.content.getBounds(!0), d.content.getTransform().getConcatenatedMatrix().transformRectangleAABB(a), a.intersect(this._viewport));
          a || (a = new c(0, 0, this._target.w, this._target.h));
          d = a.w;
          var f = a.h, h = this._devicePixelRatio;
          g && (d /= h, f /= h, h = 1);
          g = document.createElement("canvas");
          g.width = d;
          g.height = f;
          var k = g.getContext("2d");
          k.fillStyle = this._container.style.backgroundColor;
          k.fillRect(0, 0, d, f);
          k.drawImage(this._target.context.canvas, a.x, a.y, a.w, a.h, 0, 0, d, f);
          return new l.ScreenShot(g.toDataURL("image/png"), d, f, h);
        };
        t._initializedCaches = !1;
        t._debugPoints = d.createEmptyPoints(4);
        return t;
      }(l.Renderer);
      a.Canvas2DRenderer = v;
    })(l.Canvas2D || (l.Canvas2D = {}));
    var k = l.Geometry.Point, z = l.Geometry.Matrix, v = l.Geometry.Rectangle, B = f.Tools.Mini.FPS, b = function() {
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
    l.UIState = b;
    var q = function(a) {
      function b() {
        a.apply(this, arguments);
        this._keyCodes = [];
      }
      __extends(b, a);
      b.prototype.onMouseDown = function(a, b) {
        b.altKey && (a.state = new d(a.worldView, a.getMousePosition(b, null), a.worldView.getTransform().getMatrix(!0)));
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
    }(b), a = function(a) {
      function b() {
        a.apply(this, arguments);
        this._keyCodes = [];
        this._paused = !1;
        this._mousePosition = new k(0, 0);
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
          var d = a.getMousePosition(b, null), f = a.worldView.getTransform().getMatrix(!0), c = 1 + c / 1E3;
          f.translate(-d.x, -d.y);
          f.scale(c, c);
          f.translate(d.x, d.y);
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
        if (a.getOption("paintViewport")) {
          var b = l.viewportLoupeDiameter.value, c = l.viewportLoupeDiameter.value;
          a.viewport = new v(this._mousePosition.x - b / 2, this._mousePosition.y - c / 2, b, c);
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
          var c = a._world;
          c && (a.state = new d(c, a.getMousePosition(b, null), c.getTransform().getMatrix(!0)));
        }
      };
      b.prototype.onMouseUp = function(a, b) {
        a.state = new q;
        a.selectNodeUnderMouse(b);
      };
      return b;
    })(b);
    var d = function(a) {
      function b(c, d, f) {
        a.call(this);
        this._target = c;
        this._startPosition = d;
        this._startMatrix = f;
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
        a.state = new q;
      };
      return b;
    }(b), b = function() {
      function b(c, d, h) {
        function k(a) {
          t._state.onMouseWheel(t, a);
          t._persistentState.onMouseWheel(t, a);
        }
        void 0 === d && (d = !1);
        void 0 === h && (h = void 0);
        this._state = new q;
        this._persistentState = new a;
        this.paused = !1;
        this.viewport = null;
        this._selectedNodes = [];
        this._isRendering = !1;
        this._rAF = void 0;
        this._eventListeners = Object.create(null);
        this._fullScreen = !1;
        this._container = c;
        this._stage = new l.Stage(512, 512, !0);
        this._worldView = this._stage.content;
        this._world = new l.Group;
        this._worldView.addChild(this._world);
        this._disableHiDPI = d;
        d = document.createElement("div");
        d.style.position = "absolute";
        d.style.width = "100%";
        d.style.height = "100%";
        d.style.zIndex = "0";
        c.appendChild(d);
        if (l.hud.value) {
          var m = document.createElement("div");
          m.style.position = "absolute";
          m.style.width = "100%";
          m.style.height = "100%";
          m.style.pointerEvents = "none";
          var D = document.createElement("div");
          D.style.position = "absolute";
          D.style.width = "100%";
          D.style.height = "20px";
          D.style.pointerEvents = "none";
          m.appendChild(D);
          c.appendChild(m);
          this._fps = new B(D);
        } else {
          this._fps = null;
        }
        this.transparent = m = 0 === h;
        void 0 === h || 0 === h || f.ColorUtilities.rgbaToCSSStyle(h);
        this._options = new l.Canvas2D.Canvas2DRendererOptions;
        this._options.alpha = m;
        this._renderer = new l.Canvas2D.Canvas2DRenderer(d, this._stage, this._options);
        this._listenForContainerSizeChanges();
        this._onMouseUp = this._onMouseUp.bind(this);
        this._onMouseDown = this._onMouseDown.bind(this);
        this._onMouseMove = this._onMouseMove.bind(this);
        var t = this;
        window.addEventListener("mouseup", function(a) {
          t._state.onMouseUp(t, a);
          t._render();
        }, !1);
        window.addEventListener("mousemove", function(a) {
          t._state.onMouseMove(t, a);
          t._persistentState.onMouseMove(t, a);
        }, !1);
        window.addEventListener("DOMMouseScroll", k);
        window.addEventListener("mousewheel", k);
        c.addEventListener("mousedown", function(a) {
          t._state.onMouseDown(t, a);
        });
        window.addEventListener("keydown", function(a) {
          t._state.onKeyDown(t, a);
          if (t._state !== t._persistentState) {
            t._persistentState.onKeyDown(t, a);
          }
        }, !1);
        window.addEventListener("keypress", function(a) {
          t._state.onKeyPress(t, a);
          if (t._state !== t._persistentState) {
            t._persistentState.onKeyPress(t, a);
          }
        }, !1);
        window.addEventListener("keyup", function(a) {
          t._state.onKeyUp(t, a);
          if (t._state !== t._persistentState) {
            t._persistentState.onKeyUp(t, a);
          }
        }, !1);
      }
      b.prototype._listenForContainerSizeChanges = function() {
        var a = this._containerWidth, b = this._containerHeight;
        this._onContainerSizeChanged();
        var c = this;
        setInterval(function() {
          if (a !== c._containerWidth || b !== c._containerHeight) {
            c._onContainerSizeChanged(), a = c._containerWidth, b = c._containerHeight;
          }
        }, 10);
      };
      b.prototype._onContainerSizeChanged = function() {
        var a = this.getRatio(), b = Math.ceil(this._containerWidth * a), c = Math.ceil(this._containerHeight * a);
        this._stage.setBounds(new v(0, 0, b, c));
        this._stage.content.setBounds(new v(0, 0, b, c));
        this._worldView.getTransform().setMatrix(new z(a, 0, 0, a, 0, 0));
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
          this._rAF = requestAnimationFrame(function h() {
            a.render();
            a._rAF = requestAnimationFrame(h);
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
        l.RenderableVideo.checkForVideoUpdates();
        var a = (this._stage.readyToRender() || l.forcePaint.value) && !this.paused, b = 0;
        if (a) {
          var c = this._renderer;
          c.viewport = this.viewport ? this.viewport : this._stage.getBounds();
          this._dispatchEvent("render");
          b = performance.now();
          c.render();
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
      b.prototype.getMousePosition = function(a, b) {
        var c = this._container, d = c.getBoundingClientRect(), f = this.getRatio(), c = new k(c.scrollWidth / d.width * (a.clientX - d.left) * f, c.scrollHeight / d.height * (a.clientY - d.top) * f);
        if (!b) {
          return c;
        }
        d = z.createIdentity();
        b.getTransform().getConcatenatedMatrix().inverse(d);
        d.transformPoint(c);
        return c;
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
      b.prototype.screenShot = function(a, b, c) {
        return this._renderer.screenShot(a, b, c);
      };
      return b;
    }();
    l.Easel = b;
    z = f.GFX.Geometry.Matrix;
    (function(a) {
      a[a.Simple = 0] = "Simple";
    })(l.Layout || (l.Layout = {}));
    var c = function(a) {
      function b() {
        a.apply(this, arguments);
        this.layout = 0;
      }
      __extends(b, a);
      return b;
    }(l.RendererOptions);
    l.TreeRendererOptions = c;
    b = function(a) {
      function b(d, f, k) {
        void 0 === k && (k = new c);
        a.call(this, d, f, k);
        this._canvas = document.createElement("canvas");
        this._container.appendChild(this._canvas);
        this._context = this._canvas.getContext("2d");
        this._listenForContainerSizeChanges();
      }
      __extends(b, a);
      b.prototype._listenForContainerSizeChanges = function() {
        var a = this._containerWidth, b = this._containerHeight;
        this._onContainerSizeChanged();
        var c = this;
        setInterval(function() {
          if (a !== c._containerWidth || b !== c._containerHeight) {
            c._onContainerSizeChanged(), a = c._containerWidth, b = c._containerHeight;
          }
        }, 10);
      };
      b.prototype._getRatio = function() {
        var a = window.devicePixelRatio || 1, b = 1;
        1 !== a && (b = a / 1);
        return b;
      };
      b.prototype._onContainerSizeChanged = function() {
        var a = this._getRatio(), b = Math.ceil(this._containerWidth * a), c = Math.ceil(this._containerHeight * a), d = this._canvas;
        0 < a ? (d.width = b * a, d.height = c * a, d.style.width = b + "px", d.style.height = c + "px") : (d.width = b, d.height = c);
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
        0 === this._options.layout && this._renderNodeSimple(this._context, this._stage, z.createIdentity());
        a.restore();
      };
      b.prototype._renderNodeSimple = function(a, b, c) {
        function d(b) {
          var c = b.getChildren();
          b.hasFlags(4096) ? a.fillStyle = "red" : a.fillStyle = "white";
          var h = String(b.id);
          b instanceof l.RenderableText ? h = "T" + h : b instanceof l.RenderableShape ? h = "S" + h : b instanceof l.RenderableBitmap ? h = "B" + h : b instanceof l.RenderableVideo && (h = "V" + h);
          b instanceof l.Renderable && (h = h + " [" + b._parents.length + "]");
          b = a.measureText(h).width;
          a.fillText(h, k, m);
          if (c) {
            k += b + 4;
            g = Math.max(g, k + 20);
            for (h = 0;h < c.length;h++) {
              d(c[h]), h < c.length - 1 && (m += 18, m > f._canvas.height && (a.fillStyle = "gray", k = k - p + g + 8, p = g + 8, m = 0, a.fillStyle = "white"));
            }
            k -= b + 4;
          }
        }
        var f = this;
        a.save();
        a.font = "16px Arial";
        a.fillStyle = "white";
        var k = 0, m = 0, p = 0, g = 0;
        d(b);
        a.restore();
      };
      return b;
    }(l.Renderer);
    l.TreeRenderer = b;
  })(f.GFX || (f.GFX = {}));
  (function(l) {
    (function(k) {
      var z = f.GFX.BlurFilter, v = f.GFX.DropshadowFilter, B = f.GFX.Shape, b = f.GFX.Group, q = f.GFX.RenderableShape, a = f.GFX.RenderableMorphShape, d = f.GFX.RenderableBitmap, c = f.GFX.RenderableVideo, m = f.GFX.RenderableText, n = f.GFX.ColorMatrix, e = f.ShapeData, h = f.ArrayUtilities.DataBuffer, K = f.GFX.Stage, M = f.GFX.Geometry.Matrix, D = f.GFX.Geometry.Rectangle, t = function() {
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
      k.GFXChannelSerializer = t;
      t = function() {
        function a(b, c, d) {
          function e(a) {
            a = a.getBounds(!0);
            var c = b.easel.getRatio();
            a.scale(1 / c, 1 / c);
            a.snap();
            f.setBounds(a);
          }
          var f = this.stage = new K(128, 512);
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
          f.registerCSSFont(a, b, !inFirefox);
          inFirefox ? c(null) : window.setTimeout(c, 400);
        };
        a.prototype.registerImage = function(a, b, c, d, e, f) {
          this._registerAsset(a, b, this._decodeImage(c, d, e, f));
        };
        a.prototype.registerVideo = function(a) {
          this._registerAsset(a, 0, new c(a, this));
        };
        a.prototype._decodeImage = function(a, b, c, e) {
          var h = new Image, k = d.FromImage(h, -1, -1);
          h.src = URL.createObjectURL(new Blob([b], {type:f.getMIMETypeForImageType(a)}));
          h.onload = function() {
            k.setBounds(new D(0, 0, h.width, h.height));
            c && k.mask(c);
            k.invalidate();
            e({width:h.width, height:h.height});
          };
          h.onerror = function() {
            e(null);
          };
          return k;
        };
        a.prototype.sendVideoPlaybackEvent = function(a, b, c) {
          this._easelHost.sendVideoPlaybackEvent(a, b, c);
        };
        return a;
      }();
      k.GFXChannelDeserializerContext = t;
      t = function() {
        function c() {
        }
        c.prototype.read = function() {
          for (var a = 0, b = this.input, c = 0, d = 0, e = 0, f = 0, h = 0, k = 0, l = 0, m = 0, n = 0;0 < b.bytesAvailable;) {
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
                h++;
                this._readUpdateStage();
                break;
              case 107:
                k++;
                this._readUpdateCurrentMouseTarget();
                break;
              case 105:
                l++;
                this._readUpdateNetStream();
                break;
              case 200:
                m++;
                this._readDrawToBitmap();
                break;
              case 106:
                n++, this._readRequestBitmapData();
            }
          }
        };
        c.prototype._readMatrix = function() {
          var a = this.input, b = c._temporaryReadMatrix, d = 1, e = 0, f = 0, h = 1, k = 0, l = 0;
          switch(a.readInt()) {
            case 1:
              d = a.readFloat(), h = a.readFloat();
            case 0:
              k = a.readFloat() / 20;
              l = a.readFloat() / 20;
              break;
            case 2:
              d = h = a.readFloat();
              k = a.readFloat() / 20;
              l = a.readFloat() / 20;
              break;
            case 3:
              d = a.readFloat(), e = a.readFloat(), f = a.readFloat(), h = a.readFloat(), k = a.readFloat() / 20, l = a.readFloat() / 20;
          }
          b.setElements(d, e, f, h, k, l);
          return b;
        };
        c.prototype._readRectangle = function() {
          var a = this.input, b = c._temporaryReadRectangle;
          b.setElements(a.readInt() / 20, a.readInt() / 20, a.readInt() / 20, a.readInt() / 20);
          return b;
        };
        c.prototype._readColorMatrix = function() {
          var a = this.input, b = c._temporaryReadColorMatrix, d = 1, e = 1, f = 1, h = 1, k = 0, l = 0, m = 0, n = 0;
          switch(a.readInt()) {
            case 0:
              return c._temporaryReadColorMatrixIdentity;
            case 1:
              h = a.readFloat();
              break;
            case 2:
              f = e = d = 0;
              h = a.readFloat();
              k = a.readInt();
              l = a.readInt();
              m = a.readInt();
              n = a.readInt();
              break;
            case 3:
              d = a.readFloat(), e = a.readFloat(), f = a.readFloat(), h = a.readFloat(), k = a.readInt(), l = a.readInt(), m = a.readInt(), n = a.readInt();
          }
          b.setMultipliersAndOffsets(d, e, f, h, k, l, m, n);
          return b;
        };
        c.prototype._readAsset = function() {
          var a = this.input.readInt(), b = this.inputAssets[a];
          this.inputAssets[a] = null;
          return b;
        };
        c.prototype._readUpdateGraphics = function() {
          for (var b = this.input, c = this.context, d = b.readInt(), f = b.readInt(), h = c._getAsset(d), k = this._readRectangle(), l = e.FromPlainObject(this._readAsset()), m = b.readInt(), n = [], t = 0;t < m;t++) {
            var x = b.readInt();
            n.push(c._getBitmapAsset(x));
          }
          if (h) {
            h.update(l, n, k);
          } else {
            b = l.morphCoordinates ? new a(d, l, n, k) : new q(d, l, n, k);
            for (t = 0;t < n.length;t++) {
              n[t] && n[t].addRenderableParent(b);
            }
            c._registerAsset(d, f, b);
          }
        };
        c.prototype._readUpdateBitmapData = function() {
          var a = this.input, b = this.context, c = a.readInt(), e = a.readInt(), f = b._getBitmapAsset(c), k = this._readRectangle(), a = a.readInt(), l = h.FromPlainObject(this._readAsset());
          f ? f.updateFromDataBuffer(a, l) : (f = d.FromDataBuffer(a, l, k), b._registerAsset(c, e, f));
        };
        c.prototype._readUpdateTextContent = function() {
          var a = this.input, b = this.context, c = a.readInt(), d = a.readInt(), e = b._getTextAsset(c), f = this._readRectangle(), k = this._readMatrix(), l = a.readInt(), n = a.readInt(), t = a.readInt(), x = a.readBoolean(), q = a.readInt(), D = a.readInt(), v = this._readAsset(), B = h.FromPlainObject(this._readAsset()), z = null, K = a.readInt();
          K && (z = new h(4 * K), a.readBytes(z, 0, 4 * K));
          e ? (e.setBounds(f), e.setContent(v, B, k, z), e.setStyle(l, n, q, D), e.reflow(t, x)) : (e = new m(f), e.setContent(v, B, k, z), e.setStyle(l, n, q, D), e.reflow(t, x), b._registerAsset(c, d, e));
          if (this.output) {
            for (a = e.textRect, this.output.writeInt(20 * a.w), this.output.writeInt(20 * a.h), this.output.writeInt(20 * a.x), e = e.lines, a = e.length, this.output.writeInt(a), b = 0;b < a;b++) {
              this._writeLineMetrics(e[b]);
            }
          }
        };
        c.prototype._writeLineMetrics = function(a) {
          this.output.writeInt(a.x);
          this.output.writeInt(a.width);
          this.output.writeInt(a.ascent);
          this.output.writeInt(a.descent);
          this.output.writeInt(a.leading);
        };
        c.prototype._readUpdateStage = function() {
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
        c.prototype._readUpdateCurrentMouseTarget = function() {
          var a = this.context;
          this.input.readInt();
          var b = this.input.readInt();
          a._easelHost.cursor = f.UI.toCSSCursor(b);
        };
        c.prototype._readUpdateNetStream = function() {
          var a = this.context, b = this.input.readInt(), c = a._getVideoAsset(b), d = this._readRectangle();
          c || (a.registerVideo(b), c = a._getVideoAsset(b));
          c.setBounds(d);
        };
        c.prototype._readFilters = function(a) {
          var b = this.input, c = b.readInt(), d = [];
          if (c) {
            for (var e = 0;e < c;e++) {
              var h = b.readInt();
              switch(h) {
                case 0:
                  d.push(new z(b.readFloat(), b.readFloat(), b.readInt()));
                  break;
                case 1:
                  d.push(new v(b.readFloat(), b.readFloat(), b.readFloat(), b.readFloat(), b.readInt(), b.readFloat(), b.readBoolean(), b.readBoolean(), b.readBoolean(), b.readInt(), b.readFloat()));
                  break;
                case 2:
                  h = new Float32Array(20);
                  h[0] = b.readFloat();
                  h[4] = b.readFloat();
                  h[8] = b.readFloat();
                  h[12] = b.readFloat();
                  h[16] = b.readFloat() / 255;
                  h[1] = b.readFloat();
                  h[5] = b.readFloat();
                  h[9] = b.readFloat();
                  h[13] = b.readFloat();
                  h[17] = b.readFloat() / 255;
                  h[2] = b.readFloat();
                  h[6] = b.readFloat();
                  h[10] = b.readFloat();
                  h[14] = b.readFloat();
                  h[18] = b.readFloat() / 255;
                  h[3] = b.readFloat();
                  h[7] = b.readFloat();
                  h[11] = b.readFloat();
                  h[15] = b.readFloat();
                  h[19] = b.readFloat() / 255;
                  d.push(new n(h));
                  break;
                default:
                  f.Debug.somewhatImplemented(l.FilterType[h]);
              }
            }
            a.getLayer().filters = d;
          }
        };
        c.prototype._readUpdateFrame = function() {
          var a = this.input, c = this.context, d = a.readInt(), e = 0, f = c._nodes[d];
          f || (f = c._nodes[d] = new b);
          d = a.readInt();
          d & 1 && f.getTransform().setMatrix(this._readMatrix());
          d & 8 && f.getTransform().setColorMatrix(this._readColorMatrix());
          if (d & 64) {
            var h = a.readInt();
            f.getLayer().mask = 0 <= h ? c._makeNode(h) : null;
          }
          d & 128 && (f.clip = a.readInt());
          d & 32 && (e = a.readInt() / 65535, f.getLayer().blendMode = a.readInt(), this._readFilters(f), f.toggleFlags(1, a.readBoolean()), f.toggleFlags(16, a.readBoolean()), f.toggleFlags(32, !!a.readInt()), f.toggleFlags(64, !!a.readInt()));
          if (d & 4) {
            d = a.readInt();
            h = f;
            h.clearChildren();
            for (var k = 0;k < d;k++) {
              var l = a.readInt(), l = c._makeNode(l);
              h.addChild(l);
            }
          }
          e && (l = f.getChildren()[0], l instanceof B && (l.ratio = e));
        };
        c.prototype._readDrawToBitmap = function() {
          var a = this.input, b = this.context, c = a.readInt(), e = a.readInt(), f = a.readInt(), h, k, l;
          h = f & 1 ? this._readMatrix().clone() : M.createIdentity();
          f & 8 && (k = this._readColorMatrix());
          f & 16 && (l = this._readRectangle());
          f = a.readInt();
          a.readBoolean();
          a = b._getBitmapAsset(c);
          e = b._makeNode(e);
          a ? a.drawNode(e, h, k, f, l) : b._registerAsset(c, -1, d.FromNode(e, h, k, f, l));
        };
        c.prototype._readRequestBitmapData = function() {
          var a = this.output, b = this.context, c = this.input.readInt();
          b._getBitmapAsset(c).readImageData(a);
        };
        c._temporaryReadMatrix = M.createIdentity();
        c._temporaryReadRectangle = D.createEmpty();
        c._temporaryReadColorMatrix = n.createIdentity();
        c._temporaryReadColorMatrixIdentity = n.createIdentity();
        return c;
      }();
      k.GFXChannelDeserializer = t;
    })(l.GFX || (l.GFX = {}));
  })(f.Remoting || (f.Remoting = {}));
  (function(l) {
    var k = f.GFX.Geometry.Point, z = f.ArrayUtilities.DataBuffer;
    l.ContextMenuButton = 2;
    var v = function() {
      function v(b) {
        this._easel = b;
        var k = b.transparent;
        this._group = b.world;
        this._content = null;
        this._fullscreen = !1;
        this._context = new f.Remoting.GFX.GFXChannelDeserializerContext(this, this._group, k);
        this._addEventListeners();
        f.registerFallbackFont();
      }
      v.prototype.onSendUpdates = function(b, f) {
        throw Error("This method is abstract");
      };
      Object.defineProperty(v.prototype, "easel", {get:function() {
        return this._easel;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(v.prototype, "stage", {get:function() {
        return this._easel.stage;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(v.prototype, "content", {set:function(b) {
        this._content = b;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(v.prototype, "cursor", {set:function(b) {
        this._easel.cursor = b;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(v.prototype, "fullscreen", {set:function(b) {
        this._fullscreen !== b && (this._fullscreen = b, "undefined" !== typeof ShumwayCom && ShumwayCom.setFullscreen && ShumwayCom.setFullscreen(b));
      }, enumerable:!0, configurable:!0});
      v.prototype._mouseEventListener = function(b) {
        if (b.button !== l.ContextMenuButton) {
          var q = this._easel.getMousePosition(b, this._content), q = new k(q.x, q.y), a = new z, d = new f.Remoting.GFX.GFXChannelSerializer;
          d.output = a;
          d.writeMouseEvent(b, q);
          this.onSendUpdates(a, []);
        }
      };
      v.prototype._keyboardEventListener = function(b) {
        var k = new z, a = new f.Remoting.GFX.GFXChannelSerializer;
        a.output = k;
        a.writeKeyboardEvent(b);
        this.onSendUpdates(k, []);
      };
      v.prototype._addEventListeners = function() {
        for (var b = this._mouseEventListener.bind(this), f = this._keyboardEventListener.bind(this), a = v._mouseEvents, d = 0;d < a.length;d++) {
          window.addEventListener(a[d], b);
        }
        b = v._keyboardEvents;
        for (d = 0;d < b.length;d++) {
          window.addEventListener(b[d], f);
        }
        this._addFocusEventListeners();
        this._easel.addEventListener("resize", this._resizeEventListener.bind(this));
      };
      v.prototype._sendFocusEvent = function(b) {
        var k = new z, a = new f.Remoting.GFX.GFXChannelSerializer;
        a.output = k;
        a.writeFocusEvent(b);
        this.onSendUpdates(k, []);
      };
      v.prototype._addFocusEventListeners = function() {
        var b = this;
        document.addEventListener("visibilitychange", function(f) {
          b._sendFocusEvent(document.hidden ? 0 : 1);
        });
        window.addEventListener("focus", function(f) {
          b._sendFocusEvent(3);
        });
        window.addEventListener("blur", function(f) {
          b._sendFocusEvent(2);
        });
      };
      v.prototype._resizeEventListener = function() {
        this.onDisplayParameters(this._easel.getDisplayParameters());
      };
      v.prototype.onDisplayParameters = function(b) {
        throw Error("This method is abstract");
      };
      v.prototype.processUpdates = function(b, k, a) {
        void 0 === a && (a = null);
        var d = new f.Remoting.GFX.GFXChannelDeserializer;
        d.input = b;
        d.inputAssets = k;
        d.output = a;
        d.context = this._context;
        d.read();
      };
      v.prototype.processVideoControl = function(b, f, a) {
        var d = this._context, c = d._getVideoAsset(b);
        if (!c) {
          if (1 !== f) {
            return;
          }
          d.registerVideo(b);
          c = d._getVideoAsset(b);
        }
        return c.processControlRequest(f, a);
      };
      v.prototype.processRegisterFont = function(b, f, a) {
        this._context.registerFont(b, f, a);
      };
      v.prototype.processRegisterImage = function(b, f, a, d, c, k) {
        this._context.registerImage(b, f, a, d, c, k);
      };
      v.prototype.processFSCommand = function(b, f) {
        "undefined" !== typeof ShumwayCom && "test" === ShumwayCom.environment && ShumwayCom.processFSCommand(b, f);
      };
      v.prototype.processFrame = function() {
        "undefined" !== typeof ShumwayCom && "test" === ShumwayCom.environment && ShumwayCom.processFrame();
      };
      v.prototype.onVideoPlaybackEvent = function(b, f, a) {
        throw Error("This method is abstract");
      };
      v.prototype.sendVideoPlaybackEvent = function(b, f, a) {
        this.onVideoPlaybackEvent(b, f, a);
      };
      v._mouseEvents = f.Remoting.MouseEventNames;
      v._keyboardEvents = f.Remoting.KeyboardEventNames;
      return v;
    }();
    l.EaselHost = v;
    (function(k) {
      var b = f.ArrayUtilities.DataBuffer, q = function(a) {
        function d(b, d) {
          a.call(this, b);
          this._peer = d;
          this._peer.onSyncMessage = function(a) {
            return this._onWindowMessage(a, !1);
          }.bind(this);
          this._peer.onAsyncMessage = function(a) {
            this._onWindowMessage(a, !0);
          }.bind(this);
        }
        __extends(d, a);
        d.prototype.onSendUpdates = function(a, b) {
          var d = a.getBytes();
          this._peer.postAsyncMessage({type:"gfx", updates:d, assets:b}, [d.buffer]);
        };
        d.prototype.onDisplayParameters = function(a) {
          this._peer.postAsyncMessage({type:"displayParameters", params:a});
        };
        d.prototype.onVideoPlaybackEvent = function(a, b, d) {
          this._peer.postAsyncMessage({type:"videoPlayback", id:a, eventType:b, data:d});
        };
        d.prototype._sendRegisterFontResponse = function(a, b) {
          this._peer.postAsyncMessage({type:"registerFontResponse", requestId:a, result:b});
        };
        d.prototype._sendRegisterImageResponse = function(a, b) {
          this._peer.postAsyncMessage({type:"registerImageResponse", requestId:a, result:b});
        };
        d.prototype._onWindowMessage = function(a, d) {
          var f;
          if ("object" === typeof a && null !== a) {
            if ("player" === a.type) {
              var e = b.FromArrayBuffer(a.updates.buffer);
              d ? this.processUpdates(e, a.assets) : (f = new b, this.processUpdates(e, a.assets, f), f = f.toPlainObject());
            } else {
              "frame" === a.type ? this.processFrame() : "videoControl" === a.type ? f = this.processVideoControl(a.id, a.eventType, a.data) : "registerFont" === a.type ? this.processRegisterFont(a.syncId, a.data, this._sendRegisterFontResponse.bind(this, a.requestId)) : "registerImage" === a.type ? this.processRegisterImage(a.syncId, a.symbolId, a.imageType, a.data, a.alphaData, this._sendRegisterImageResponse.bind(this, a.requestId)) : "fscommand" === a.type && this.processFSCommand(a.command, 
              a.args);
            }
          }
          return f;
        };
        return d;
      }(l.EaselHost);
      k.WindowEaselHost = q;
    })(l.Window || (l.Window = {}));
    (function(k) {
      function b(a, b) {
        a.writeInt(b.length);
        a.writeRawBytes(b);
      }
      function q(a, b) {
        return "byteLength" in a && "buffer" in a && (a.constructor && a.constructor.name) === b;
      }
      function a(a) {
        return "byteLength" in a && "ArrayBuffer" === (a.constructor && a.constructor.name);
      }
      function d(c) {
        function d(c) {
          switch(typeof c) {
            case "undefined":
              h.writeByte(0);
              break;
            case "boolean":
              h.writeByte(c ? 2 : 3);
              break;
            case "number":
              h.writeByte(4);
              h.writeDouble(c);
              break;
            case "string":
              h.writeByte(5);
              h.writeUTF(c);
              break;
            default:
              if (null === c) {
                h.writeByte(1);
                break;
              }
              if (Array.isArray(c)) {
                h.writeByte(6);
                h.writeInt(c.length);
                for (var e = 0;e < c.length;e++) {
                  d(c[e]);
                }
              } else {
                if (q(c, "Uint8Array")) {
                  h.writeByte(9), b(h, c);
                } else {
                  if ("length" in c && "buffer" in c && "littleEndian" in c) {
                    h.writeByte(c.littleEndian ? 10 : 11), b(h, new Uint8Array(c.buffer, 0, c.length));
                  } else {
                    if (a(c)) {
                      h.writeByte(8), b(h, new Uint8Array(c));
                    } else {
                      if (q(c, "Int32Array")) {
                        h.writeByte(12), b(h, new Uint8Array(c.buffer, c.byteOffset, c.byteLength));
                      } else {
                        if (!f.isNullOrUndefined(c.buffer) && a(c.buffer) && "number" === typeof c.byteOffset) {
                          throw Error("Some unsupported TypedArray is used");
                        }
                        h.writeByte(7);
                        for (e in c) {
                          h.writeUTF(e), d(c[e]);
                        }
                        h.writeUTF("");
                      }
                    }
                  }
                }
              }
            ;
          }
        }
        var h = new e;
        d(c);
        return h.getBytes();
      }
      function c(a) {
        var b = new e, c = a.readInt();
        a.readBytes(b, 0, c);
        return b.getBytes();
      }
      function m(a) {
        var b = new e, c = a.readInt();
        a.readBytes(b, 0, c);
        return n(b);
      }
      function n(a) {
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
              b[e] = n(a);
            }
            return b;
          case 7:
            for (b = {};d = a.readUTF();) {
              b[d] = n(a);
            }
            return b;
          case 8:
            return c(a).buffer;
          case 9:
            return c(a);
          case 11:
          ;
          case 10:
            return a = c(a), new h(a.buffer, a.length, 10 === b);
          case 12:
            return new Int32Array(c(a).buffer);
        }
      }
      var e = f.ArrayUtilities.DataBuffer, h = f.ArrayUtilities.PlainObjectDataBuffer, v;
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
      })(v || (v = {}));
      (function(a) {
        a[a.None = 0] = "None";
        a[a.PlayerCommand = 1] = "PlayerCommand";
        a[a.PlayerCommandAsync = 2] = "PlayerCommandAsync";
        a[a.Frame = 3] = "Frame";
        a[a.Font = 4] = "Font";
        a[a.Image = 5] = "Image";
        a[a.FSCommand = 6] = "FSCommand";
      })(k.MovieRecordType || (k.MovieRecordType = {}));
      v = function() {
        function a(b) {
          this._maxRecordingSize = b;
          this._recording = new e;
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
          (new z(this._recording.getBytes())).dump();
        };
        a.prototype._createRecord = function(a, b) {
          this._stopped || (this._recording.length + 8 + (b ? b.length : 0) >= this._maxRecordingSize ? (console.error("Recording limit reached"), this._stopped = !0) : (this._recording.writeInt(Date.now() - this._recordingStarted), this._recording.writeInt(a), null !== b ? (this._recording.writeInt(b.length), this._recording.writeRawBytes(b.getBytes())) : this._recording.writeInt(0)));
        };
        a.prototype.recordPlayerCommand = function(a, c, f) {
          var g = new e;
          b(g, c);
          g.writeInt(f.length);
          f.forEach(function(a) {
            a = d(a);
            b(g, a);
          });
          this._createRecord(a ? 2 : 1, g);
        };
        a.prototype.recordFrame = function() {
          this._createRecord(3, null);
        };
        a.prototype.recordFont = function(a, c) {
          var f = new e;
          f.writeInt(a);
          b(f, d(c));
          this._createRecord(4, f);
        };
        a.prototype.recordImage = function(a, c, f, g, h) {
          var k = new e;
          k.writeInt(a);
          k.writeInt(c);
          k.writeInt(f);
          b(k, d(g));
          b(k, d(h));
          this._createRecord(5, k);
        };
        a.prototype.recordFSCommand = function(a, b) {
          var c = new e;
          c.writeUTF(a);
          c.writeUTF(b || "");
          this._createRecord(6, c);
        };
        return a;
      }();
      k.MovieRecorder = v;
      var z = function() {
        function a(b) {
          this._buffer = new e;
          this._buffer.writeRawBytes(b);
          this._buffer.position = 4;
        }
        a.prototype.readNextRecord = function() {
          if (this._buffer.position >= this._buffer.length) {
            return 0;
          }
          var a = this._buffer.readInt(), b = this._buffer.readInt(), c = this._buffer.readInt(), d = null;
          0 < c && (d = new e, this._buffer.readBytes(d, 0, c));
          this.currentTimestamp = a;
          this.currentType = b;
          this.currentData = d;
          return b;
        };
        a.prototype.parsePlayerCommand = function() {
          for (var a = c(this.currentData), b = this.currentData.readInt(), d = [], e = 0;e < b;e++) {
            d.push(m(this.currentData));
          }
          return {updates:a, assets:d};
        };
        a.prototype.parseFSCommand = function() {
          var a = this.currentData.readUTF(), b = this.currentData.readUTF();
          return {command:a, args:b};
        };
        a.prototype.parseFont = function() {
          var a = this.currentData.readInt(), b = m(this.currentData);
          return {syncId:a, data:b};
        };
        a.prototype.parseImage = function() {
          var a = this.currentData.readInt(), b = this.currentData.readInt(), c = this.currentData.readInt(), d = m(this.currentData);
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
      k.MovieRecordParser = z;
      e = f.ArrayUtilities.DataBuffer;
      v = function(a) {
        function b(c) {
          a.call(this, c);
          this.alwaysRenderFrame = this.ignoreTimestamps = !1;
          this.cpuTimeRendering = this.cpuTimeUpdates = 0;
          this.onComplete = null;
        }
        __extends(b, a);
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
          this._parser = new k.MovieRecordParser(a);
          this._lastTimestamp = 0;
          this._parseNext();
        };
        b.prototype.onSendUpdates = function(a, b) {
        };
        b.prototype.onDisplayParameters = function(a) {
        };
        b.prototype.onVideoPlaybackEvent = function(a, b, c) {
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
          var a, b = performance.now();
          switch(this._parser.currentType) {
            case 1:
            ;
            case 2:
              a = this._parser.parsePlayerCommand();
              var c = 2 === this._parser.currentType, d = e.FromArrayBuffer(a.updates.buffer);
              c ? this.processUpdates(d, a.assets) : (c = new e, this.processUpdates(d, a.assets, c));
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
          this.cpuTimeUpdates += performance.now() - b;
          3 === this._parser.currentType && this.alwaysRenderFrame ? requestAnimationFrame(this._renderFrameJustAfterRAF.bind(this)) : this._parseNext();
        };
        b.prototype._renderFrameJustAfterRAF = function() {
          var a = performance.now();
          this.easel.render();
          this.cpuTimeRendering += performance.now() - a;
          this._parseNext();
        };
        return b;
      }(l.EaselHost);
      k.PlaybackEaselHost = v;
      v = function(a) {
        function b(c, d, e) {
          void 0 === e && (e = 0);
          a.call(this, c, d);
          this._recorder = null;
          this._recorder = new k.MovieRecorder(e);
        }
        __extends(b, a);
        Object.defineProperty(b.prototype, "recorder", {get:function() {
          return this._recorder;
        }, enumerable:!0, configurable:!0});
        b.prototype._onWindowMessage = function(b, c) {
          switch(b.type) {
            case "player":
              this._recorder.recordPlayerCommand(c, b.updates, b.assets);
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
          return a.prototype._onWindowMessage.call(this, b, c);
        };
        return b;
      }(f.GFX.Window.WindowEaselHost);
      k.RecordingEaselHost = v;
    })(l.Test || (l.Test = {}));
  })(f.GFX || (f.GFX = {}));
})(Shumway || (Shumway = {}));
console.timeEnd("Load GFX Dependencies");

