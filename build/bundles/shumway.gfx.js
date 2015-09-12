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
Shumway$$inline_0.version = "0.11.592";
Shumway$$inline_0.build = "1723ae2";
var jsGlobal = function() {
  return this || (0,eval)("this//# sourceURL=jsGlobal-getter");
}(), inBrowser = "undefined" !== typeof window && "document" in window && "plugins" in window.document, inFirefox = "undefined" !== typeof navigator && 0 <= navigator.userAgent.indexOf("Firefox");
jsGlobal.performance || (jsGlobal.performance = {});
jsGlobal.performance.now || (jsGlobal.performance.now = function() {
  return Date.now();
});
var START_TIME = performance.now();
(function(f) {
  function h(a) {
    return (a | 0) === a;
  }
  function u(a) {
    return "object" === typeof a || "function" === typeof a;
  }
  function r(a) {
    return String(Number(a)) === a;
  }
  function w(a) {
    var l = 0;
    if ("number" === typeof a) {
      return l = a | 0, a === l && 0 <= l ? !0 : a >>> 0 === a;
    }
    if ("string" !== typeof a) {
      return !1;
    }
    var b = a.length;
    if (0 === b) {
      return !1;
    }
    if ("0" === a) {
      return !0;
    }
    if (b > f.UINT32_CHAR_BUFFER_LENGTH) {
      return !1;
    }
    var e = 0, l = a.charCodeAt(e++) - 48;
    if (1 > l || 9 < l) {
      return !1;
    }
    for (var c = 0, d = 0;e < b;) {
      d = a.charCodeAt(e++) - 48;
      if (0 > d || 9 < d) {
        return !1;
      }
      c = l;
      l = 10 * l + d;
    }
    return c < f.UINT32_MAX_DIV_10 || c === f.UINT32_MAX_DIV_10 && d <= f.UINT32_MAX_MOD_10 ? !0 : !1;
  }
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
  f.isInteger = h;
  f.isArray = function(a) {
    return a instanceof Array;
  };
  f.isNumberOrString = function(a) {
    return "number" === typeof a || "string" === typeof a;
  };
  f.isObject = u;
  f.toNumber = function(a) {
    return +a;
  };
  f.isNumericString = r;
  f.isNumeric = function(a) {
    if ("number" === typeof a) {
      return !0;
    }
    if ("string" === typeof a) {
      var b = a.charCodeAt(0);
      return 65 <= b && 90 >= b || 97 <= b && 122 >= b || 36 === b || 95 === b ? !1 : w(a) || r(a);
    }
    return !1;
  };
  f.isIndex = w;
  f.isNullOrUndefined = function(a) {
    return void 0 == a;
  };
  f.argumentsToString = function(a) {
    for (var b = [], e = 0;e < a.length;e++) {
      var c = a[e];
      try {
        var d;
        d = "object" === typeof c && c ? "toString" in c ? c.toString() : Object.prototype.toString.call(c) : c + "";
        b.push(d);
      } catch (p) {
        b.push("<unprintable value>");
      }
    }
    return b.join(", ");
  };
  var y;
  (function(a) {
    a.error = function(a) {
      console.error(a);
      throw Error(a);
    };
    a.assert = function(b, l) {
      void 0 === l && (l = "assertion failed");
      "" === b && (b = !0);
      if (!b) {
        if ("undefined" !== typeof console && "assert" in console) {
          throw console.assert(!1, l), Error(l);
        }
        a.error(l.toString());
      }
    };
    a.assertUnreachable = function(a) {
      var b = Error().stack.split("\n")[1];
      throw Error("Reached unreachable location " + b + a);
    };
    a.assertNotImplemented = function(b, l) {
      b || a.error("notImplemented: " + l);
    };
    var b = Object.create(null);
    a.warning = function(a, b, l) {
    };
    a.warnCounts = function() {
      var a = [], e;
      for (e in b) {
        a.push({key:e, count:b[e]});
      }
      a.sort(function(a, b) {
        return b.count - a.count;
      });
      return a.reduce(function(a, b) {
        return a + ("\n" + b.count + "\t" + b.key);
      }, "");
    };
    a.notImplemented = function(a) {
    };
    a.dummyConstructor = function(a) {
    };
    a.abstractMethod = function(a) {
    };
    var e = {};
    a.somewhatImplemented = function(b) {
      e[b] || (e[b] = !0, a.warning("somewhatImplemented: " + b));
    };
    a.unexpected = function(b) {
      a.assert(!1, "Unexpected: " + b);
    };
    a.unexpectedCase = function(b) {
      a.assert(!1, "Unexpected Case: " + b);
    };
  })(y = f.Debug || (f.Debug = {}));
  f.getTicks = function() {
    return performance.now();
  };
  (function(a) {
    function b(a, l) {
      for (var e = 0, c = a.length;e < c;e++) {
        if (a[e] === l) {
          return e;
        }
      }
      a.push(l);
      return a.length - 1;
    }
    a.popManyInto = function(a, b, l) {
      for (var e = b - 1;0 <= e;e--) {
        l[e] = a.pop();
      }
      l.length = b;
    };
    a.popMany = function(a, b) {
      var l = a.length - b, e = a.slice(l, this.length);
      a.length = l;
      return e;
    };
    a.popManyIntoVoid = function(a, b) {
      a.length -= b;
    };
    a.pushMany = function(a, b) {
      for (var l = 0;l < b.length;l++) {
        a.push(b[l]);
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
    a.indexOf = function(a, b) {
      for (var l = 0, e = a.length;l < e;l++) {
        if (a[l] === b) {
          return l;
        }
      }
      return -1;
    };
    a.equals = function(a, b) {
      if (a.length !== b.length) {
        return !1;
      }
      for (var l = 0;l < a.length;l++) {
        if (a[l] !== b[l]) {
          return !1;
        }
      }
      return !0;
    };
    a.pushUnique = b;
    a.unique = function(a) {
      for (var e = [], c = 0;c < a.length;c++) {
        b(e, a[c]);
      }
      return e;
    };
    a.copyFrom = function(b, l) {
      b.length = 0;
      a.pushMany(b, l);
    };
    a.ensureTypedArrayCapacity = function(a, b) {
      if (a.length < b) {
        var l = a;
        a = new a.constructor(f.IntegerUtilities.nearestPowerOfTwo(b));
        a.set(l, 0);
      }
      return a;
    };
    a.memCopy = function(a, b, l, e, c) {
      void 0 === l && (l = 0);
      void 0 === e && (e = 0);
      void 0 === c && (c = 0);
      0 < e || 0 < c && c < b.length ? (0 >= c && (c = b.length - e), a.set(b.subarray(e, e + c), l)) : a.set(b, l);
    };
  })(f.ArrayUtilities || (f.ArrayUtilities = {}));
  (function(a) {
    function b(a, l) {
      return Object.prototype.hasOwnProperty.call(a, l);
    }
    a.boxValue = function(a) {
      return void 0 == a || u(a) ? a : Object(a);
    };
    a.toKeyValueArray = function(a) {
      var b = Object.prototype.hasOwnProperty, l = [], e;
      for (e in a) {
        b.call(a, e) && l.push([e, a[e]]);
      }
      return l;
    };
    a.isPrototypeWriteable = function(a) {
      return Object.getOwnPropertyDescriptor(a, "prototype").writable;
    };
    a.hasOwnProperty = b;
    a.propertyIsEnumerable = function(a, b) {
      return Object.prototype.propertyIsEnumerable.call(a, b);
    };
    a.getPropertyDescriptor = function(a, b) {
      do {
        var l = Object.getOwnPropertyDescriptor(a, b);
        if (l) {
          return l;
        }
        a = Object.getPrototypeOf(a);
      } while (a);
      return null;
    };
    a.hasOwnGetter = function(a, b) {
      var l = Object.getOwnPropertyDescriptor(a, b);
      return !(!l || !l.get);
    };
    a.getOwnGetter = function(a, b) {
      var l = Object.getOwnPropertyDescriptor(a, b);
      return l ? l.get : null;
    };
    a.hasOwnSetter = function(a, b) {
      var l = Object.getOwnPropertyDescriptor(a, b);
      return !(!l || !l.set);
    };
    a.createMap = function() {
      return Object.create(null);
    };
    a.createArrayMap = function() {
      return [];
    };
    a.defineReadOnlyProperty = function(a, b, l) {
      Object.defineProperty(a, b, {value:l, writable:!1, configurable:!0, enumerable:!1});
    };
    a.copyProperties = function(a, b) {
      for (var l in b) {
        a[l] = b[l];
      }
    };
    a.copyOwnProperties = function(a, e) {
      for (var c in e) {
        b(e, c) && (a[c] = e[c]);
      }
    };
    a.copyOwnPropertyDescriptors = function(a, e, c, d, p) {
      void 0 === c && (c = null);
      void 0 === d && (d = !0);
      void 0 === p && (p = !1);
      for (var n in e) {
        if (b(e, n) && (!c || c(n))) {
          var k = Object.getOwnPropertyDescriptor(e, n);
          if (d || !b(a, n)) {
            try {
              p && !1 === k.writable && (k.writable = !0), Object.defineProperty(a, n, k);
            } catch (t) {
              y.assert("Can't define: " + n);
            }
          }
        }
      }
    };
    a.copyPropertiesByList = function(a, b, l) {
      for (var e = 0;e < l.length;e++) {
        var c = l[e];
        a[c] = b[c];
      }
    };
    a.defineNonEnumerableGetter = function(a, b, l) {
      Object.defineProperty(a, b, {get:l, configurable:!0, enumerable:!1});
    };
    a.defineNonEnumerableProperty = function(a, b, l) {
      Object.defineProperty(a, b, {value:l, writable:!0, configurable:!0, enumerable:!1});
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
    function b(a) {
      return "string" === typeof a ? '"' + a + '"' : "number" === typeof a || "boolean" === typeof a ? String(a) : a instanceof Array ? "[] " + a.length : typeof a;
    }
    function e(a, b, l) {
      p[0] = a;
      p[1] = b;
      p[2] = l;
      return p.join("");
    }
    function c(a, b, l, n) {
      g[0] = a;
      g[1] = b;
      g[2] = l;
      g[3] = n;
      return g.join("");
    }
    a.repeatString = function(a, b) {
      for (var l = "", n = 0;n < b;n++) {
        l += a;
      }
      return l;
    };
    a.memorySizeToString = function(a) {
      a |= 0;
      return 1024 > a ? a + " B" : 1048576 > a ? (a / 1024).toFixed(2) + "KB" : (a / 1048576).toFixed(2) + "MB";
    };
    a.toSafeString = b;
    a.toSafeArrayString = function(a) {
      for (var n = [], e = 0;e < a.length;e++) {
        n.push(b(a[e]));
      }
      return n.join(", ");
    };
    a.utf8decode = function(a) {
      for (var b = new Uint8Array(4 * a.length), l = 0, n = 0, e = a.length;n < e;n++) {
        var c = a.charCodeAt(n);
        if (127 >= c) {
          b[l++] = c;
        } else {
          if (55296 <= c && 56319 >= c) {
            var d = a.charCodeAt(n + 1);
            56320 <= d && 57343 >= d && (c = ((c & 1023) << 10) + (d & 1023) + 65536, ++n);
          }
          0 !== (c & 4292870144) ? (b[l++] = 248 | c >>> 24 & 3, b[l++] = 128 | c >>> 18 & 63, b[l++] = 128 | c >>> 12 & 63, b[l++] = 128 | c >>> 6 & 63) : 0 !== (c & 4294901760) ? (b[l++] = 240 | c >>> 18 & 7, b[l++] = 128 | c >>> 12 & 63, b[l++] = 128 | c >>> 6 & 63) : 0 !== (c & 4294965248) ? (b[l++] = 224 | c >>> 12 & 15, b[l++] = 128 | c >>> 6 & 63) : b[l++] = 192 | c >>> 6 & 31;
          b[l++] = 128 | c & 63;
        }
      }
      return b.subarray(0, l);
    };
    a.utf8encode = function(a) {
      for (var b = 0, l = "";b < a.length;) {
        var n = a[b++] & 255;
        if (127 >= n) {
          l += String.fromCharCode(n);
        } else {
          var e = 192, c = 5;
          do {
            if ((n & (e >> 1 | 128)) === e) {
              break;
            }
            e = e >> 1 | 128;
            --c;
          } while (0 <= c);
          if (0 >= c) {
            l += String.fromCharCode(n);
          } else {
            for (var n = n & (1 << c) - 1, e = !1, d = 5;d >= c;--d) {
              var p = a[b++];
              if (128 != (p & 192)) {
                e = !0;
                break;
              }
              n = n << 6 | p & 63;
            }
            if (e) {
              for (c = b - (7 - d);c < b;++c) {
                l += String.fromCharCode(a[c] & 255);
              }
            } else {
              l = 65536 <= n ? l + String.fromCharCode(n - 65536 >> 10 & 1023 | 55296, n & 1023 | 56320) : l + String.fromCharCode(n);
            }
          }
        }
      }
      return l;
    };
    a.base64EncodeBytes = function(a) {
      for (var b = "", l = a.byteLength, n = l % 3, l = l - n, d, p, C, z, A = 0;A < l;A += 3) {
        z = a[A] << 16 | a[A + 1] << 8 | a[A + 2], d = (z & 16515072) >> 18, p = (z & 258048) >> 12, C = (z & 4032) >> 6, z &= 63, b += c("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[d], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[p], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[C], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[z]);
      }
      1 == n ? (z = a[l], b += e("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(z & 252) >> 2], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(z & 3) << 4], "==")) : 2 == n && (z = a[l] << 8 | a[l + 1], b += c("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(z & 64512) >> 10], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(z & 1008) >> 4], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(z & 15) << 
      2], "="));
      return b;
    };
    var d = [62, 0, 0, 0, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 0, 0, 0, 0, 0, 0, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];
    a.decodeRestrictedBase64ToBytes = function(a) {
      var b, l, n;
      b = a.length;
      b = "=" === a.charAt(b - 2) ? 2 : "=" === a.charAt(b - 1) ? 1 : 0;
      for (var e = new Uint8Array(3 * (a.length >> 2) - b), c = 0, p = 0;c < a.length;) {
        b = a.charCodeAt(c++);
        l = d[b - 43];
        b = a.charCodeAt(c++);
        n = d[b - 43];
        e[p++] = l << 2 | (n & 48) >> 4;
        b = a.charCodeAt(c++);
        if (61 == b) {
          break;
        }
        l = d[b - 43];
        e[p++] = (n & 15) << 4 | (l & 60) >> 2;
        b = a.charCodeAt(c++);
        if (61 == b) {
          break;
        }
        n = d[b - 43];
        e[p++] = (l & 3) << 6 | n;
      }
      return e;
    };
    a.escapeString = function(a) {
      void 0 !== a && (a = a.replace(/[^\w$]/gi, "$"), /^\d/.test(a) && (a = "$" + a));
      return a;
    };
    a.fromCharCodeArray = function(a) {
      for (var b = "", l = 0;l < a.length;l += 16384) {
        var n = Math.min(a.length - l, 16384), b = b + String.fromCharCode.apply(null, a.subarray(l, l + n))
      }
      return b;
    };
    a.variableLengthEncodeInt32 = function(a) {
      for (var b = 32 - Math.clz32(a), l = Math.ceil(b / 6), b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[l], l = l - 1;0 <= l;l--) {
        b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[a >> 6 * l & 63];
      }
      return b;
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
    a.variableLengthDecodeInt32 = function(k) {
      for (var b = a.fromEncoding(k.charCodeAt(0)), l = 0, n = 0;n < b;n++) {
        var e = 6 * (b - n - 1), l = l | a.fromEncoding(k.charCodeAt(1 + n)) << e
      }
      return l;
    };
    a.trimMiddle = function(a, b) {
      if (a.length <= b) {
        return a;
      }
      var l = b >> 1, n = b - l - 1;
      return a.substr(0, l) + "\u2026" + a.substr(a.length - n, n);
    };
    a.multiple = function(a, b) {
      for (var l = "", n = 0;n < b;n++) {
        l += a;
      }
      return l;
    };
    a.indexOfAny = function(a, b, l) {
      for (var n = a.length, e = 0;e < b.length;e++) {
        var c = a.indexOf(b[e], l);
        0 <= c && (n = Math.min(n, c));
      }
      return n === a.length ? -1 : n;
    };
    var p = Array(3), g = Array(4), n = Array(9);
    a.concat3 = e;
    a.concat4 = c;
    a.concat9 = function(a, b, l, e, c, d, p, K, A) {
      n[0] = a;
      n[1] = b;
      n[2] = l;
      n[3] = e;
      n[4] = c;
      n[5] = d;
      n[6] = p;
      n[7] = K;
      n[8] = A;
      return n.join("");
    };
  })(f.StringUtilities || (f.StringUtilities = {}));
  (function(a) {
    var b = new Uint8Array([7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21]), e = new Int32Array([-680876936, -389564586, 606105819, -1044525330, -176418897, 1200080426, -1473231341, -45705983, 1770035416, -1958414417, -42063, -1990404162, 1804603682, -40341101, -1502002290, 1236535329, -165796510, -1069501632, 
    643717713, -373897302, -701558691, 38016083, -660478335, -405537848, 568446438, -1019803690, -187363961, 1163531501, -1444681467, -51403784, 1735328473, -1926607734, -378558, -2022574463, 1839030562, -35309556, -1530992060, 1272893353, -155497632, -1094730640, 681279174, -358537222, -722521979, 76029189, -640364487, -421815835, 530742520, -995338651, -198630844, 1126891415, -1416354905, -57434055, 1700485571, -1894986606, -1051523, -2054922799, 1873313359, -30611744, -1560198380, 1309151649, 
    -145523070, -1120210379, 718787259, -343485551]);
    a.hashBytesTo32BitsMD5 = function(a, c, d) {
      var p = 1732584193, n = -271733879, k = -1732584194, t = 271733878, J = d + 72 & -64, F = new Uint8Array(J), B;
      for (B = 0;B < d;++B) {
        F[B] = a[c++];
      }
      F[B++] = 128;
      for (a = J - 8;B < a;) {
        F[B++] = 0;
      }
      F[B++] = d << 3 & 255;
      F[B++] = d >> 5 & 255;
      F[B++] = d >> 13 & 255;
      F[B++] = d >> 21 & 255;
      F[B++] = d >>> 29 & 255;
      F[B++] = 0;
      F[B++] = 0;
      F[B++] = 0;
      a = new Int32Array(16);
      for (B = 0;B < J;) {
        for (d = 0;16 > d;++d, B += 4) {
          a[d] = F[B] | F[B + 1] << 8 | F[B + 2] << 16 | F[B + 3] << 24;
        }
        var G = p;
        c = n;
        var C = k, z = t, A, v;
        for (d = 0;64 > d;++d) {
          16 > d ? (A = c & C | ~c & z, v = d) : 32 > d ? (A = z & c | ~z & C, v = 5 * d + 1 & 15) : 48 > d ? (A = c ^ C ^ z, v = 3 * d + 5 & 15) : (A = C ^ (c | ~z), v = 7 * d & 15);
          var m = z, G = G + A + e[d] + a[v] | 0;
          A = b[d];
          z = C;
          C = c;
          c = c + (G << A | G >>> 32 - A) | 0;
          G = m;
        }
        p = p + G | 0;
        n = n + c | 0;
        k = k + C | 0;
        t = t + z | 0;
      }
      return p;
    };
    a.mixHash = function(a, b) {
      return (31 * a | 0) + b | 0;
    };
  })(f.HashUtilities || (f.HashUtilities = {}));
  var g = function() {
    function a(a) {
      this._data = Object.create(null);
      this._size = 0;
      this._maxSize = a;
    }
    a.prototype.get = function(a) {
      return this._data[a];
    };
    a.prototype.set = function(a, b) {
      if (this._size >= this._maxSize) {
        return !1;
      }
      this._data[a] = b;
      this._size++;
      return !0;
    };
    return a;
  }();
  f.Cache = g;
  var E = function() {
    function a() {
    }
    a.seed = function(b) {
      a._state[0] = b;
      a._state[1] = b;
    };
    a.reset = function() {
      a._state[0] = 57005;
      a._state[1] = 48879;
    };
    a.next = function() {
      var a = this._state, b = Math.imul(18273, a[0] & 65535) + (a[0] >>> 16) | 0;
      a[0] = b;
      var e = Math.imul(36969, a[1] & 65535) + (a[1] >>> 16) | 0;
      a[1] = e;
      a = (b << 16) + (e & 65535) | 0;
      return 2.3283064365386963E-10 * (0 > a ? a + 4294967296 : a);
    };
    a._state = new Uint32Array([57005, 48879]);
    return a;
  }();
  f.Random = E;
  Math.random = function() {
    return E.next();
  };
  f.installTimeWarper = function() {
    var a = Date, b = 1428107694580;
    jsGlobal.Date = function(e, c, d, p, g, n, k) {
      switch(arguments.length) {
        case 0:
          return new a(b);
        case 1:
          return new a(e);
        case 2:
          return new a(e, c);
        case 3:
          return new a(e, c, d);
        case 4:
          return new a(e, c, d, p);
        case 5:
          return new a(e, c, d, p, g);
        case 6:
          return new a(e, c, d, p, g, n);
        default:
          return new a(e, c, d, p, g, n, k);
      }
    };
    jsGlobal.Date.now = function() {
      return b += 10;
    };
    jsGlobal.Date.UTC = function() {
      return a.UTC.apply(a, arguments);
    };
  };
  (function() {
    function a() {
      this.id = "$weakmap" + b++;
    }
    if ("function" !== typeof jsGlobal.WeakMap) {
      var b = 0;
      a.prototype = {has:function(a) {
        return a.hasOwnProperty(this.id);
      }, get:function(a, b) {
        return a.hasOwnProperty(this.id) ? a[this.id] : b;
      }, set:function(a, b) {
        Object.defineProperty(a, this.id, {value:b, enumerable:!1, configurable:!0});
      }, delete:function(a) {
        delete a[this.id];
      }};
      jsGlobal.WeakMap = a;
    }
  })();
  var d = function() {
    function a() {
      "undefined" !== typeof ShumwayCom && ShumwayCom.getWeakMapKeys ? (this._map = new WeakMap, this._id = 0, this._newAdditions = []) : this._list = [];
    }
    a.prototype.clear = function() {
      this._map ? this._map.clear() : this._list.length = 0;
    };
    a.prototype.push = function(a) {
      this._map ? (this._map.set(a, this._id++), this._newAdditions.forEach(function(b) {
        b.push(a);
      })) : this._list.push(a);
    };
    a.prototype.remove = function(a) {
      this._map ? this._map.delete(a) : this._list[this._list.indexOf(a)] = null;
    };
    a.prototype.forEach = function(a) {
      if (this._map) {
        var b = [];
        this._newAdditions.push(b);
        var e = this._map, c = ShumwayCom.getWeakMapKeys(e);
        c.sort(function(a, b) {
          return e.get(a) - e.get(b);
        });
        c.forEach(function(b) {
          0 !== b._referenceCount && a(b);
        });
        b.forEach(function(b) {
          0 !== b._referenceCount && a(b);
        });
        this._newAdditions.splice(this._newAdditions.indexOf(b), 1);
      } else {
        for (var b = this._list, d = 0, c = 0;c < b.length;c++) {
          var p = b[c];
          p && (0 === p._referenceCount ? (b[c] = null, d++) : a(p));
        }
        if (16 < d && d > b.length >> 2) {
          d = [];
          for (c = 0;c < b.length;c++) {
            (p = b[c]) && 0 < p._referenceCount && d.push(p);
          }
          this._list = d;
        }
      }
    };
    Object.defineProperty(a.prototype, "length", {get:function() {
      return this._map ? -1 : this._list.length;
    }, enumerable:!0, configurable:!0});
    return a;
  }();
  f.WeakList = d;
  var b;
  (function(a) {
    a.pow2 = function(a) {
      return a === (a | 0) ? 0 > a ? 1 / (1 << -a) : 1 << a : Math.pow(2, a);
    };
    a.clamp = function(a, b, e) {
      return Math.max(b, Math.min(e, a));
    };
    a.roundHalfEven = function(a) {
      if (.5 === Math.abs(a % 1)) {
        var b = Math.floor(a);
        return 0 === b % 2 ? b : Math.ceil(a);
      }
      return Math.round(a);
    };
    a.altTieBreakRound = function(a, b) {
      return .5 !== Math.abs(a % 1) || b ? Math.round(a) : a | 0;
    };
    a.epsilonEquals = function(a, b) {
      return 1E-7 > Math.abs(a - b);
    };
  })(b = f.NumberUtilities || (f.NumberUtilities = {}));
  var e;
  (function(a) {
    function b(a) {
      return 256 * a << 16 >> 16;
    }
    function e(a) {
      return a / 256;
    }
    var c = new ArrayBuffer(8);
    a.i8 = new Int8Array(c);
    a.u8 = new Uint8Array(c);
    a.i32 = new Int32Array(c);
    a.f32 = new Float32Array(c);
    a.f64 = new Float64Array(c);
    a.nativeLittleEndian = 1 === (new Int8Array((new Int32Array([1])).buffer))[0];
    a.floatToInt32 = function(b) {
      a.f32[0] = b;
      return a.i32[0];
    };
    a.int32ToFloat = function(b) {
      a.i32[0] = b;
      return a.f32[0];
    };
    a.swap16 = function(a) {
      return (a & 255) << 8 | a >> 8 & 255;
    };
    a.swap32 = function(a) {
      return (a & 255) << 24 | (a & 65280) << 8 | a >> 8 & 65280 | a >> 24 & 255;
    };
    a.toS8U8 = b;
    a.fromS8U8 = e;
    a.clampS8U8 = function(a) {
      return e(b(a));
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
    a.trailingZeros = function(b) {
      return a.ones((b & -b) - 1);
    };
    a.getFlags = function(a, b) {
      var l = "";
      for (a = 0;a < b.length;a++) {
        a & 1 << a && (l += b[a] + " ");
      }
      return 0 === l.length ? "" : l.trim();
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
    a.roundToMultipleOfPowerOfTwo = function(a, b) {
      var l = (1 << b) - 1;
      return a + l & ~l;
    };
    a.toHEX = function(a) {
      return "0x" + ("00000000" + (0 > a ? 4294967295 + a + 1 : a).toString(16)).substr(-8);
    };
    Math.imul || (Math.imul = function(a, b) {
      var l = a & 65535, n = b & 65535;
      return l * n + ((a >>> 16 & 65535) * n + l * (b >>> 16 & 65535) << 16 >>> 0) | 0;
    });
    Math.clz32 || (Math.clz32 = function(b) {
      b |= b >> 1;
      b |= b >> 2;
      b |= b >> 4;
      b |= b >> 8;
      return 32 - a.ones(b | b >> 16);
    });
  })(e = f.IntegerUtilities || (f.IntegerUtilities = {}));
  d = function() {
    function a(b, e) {
      void 0 === b && (b = !1);
      this._tab = "  ";
      this._padding = "";
      this._suppressOutput = b;
      this._out = e || a._consoleOut;
      this._outNoNewline = e || a._consoleOutNoNewline;
    }
    Object.defineProperty(a.prototype, "suppressOutput", {get:function() {
      return this._suppressOutput;
    }, set:function(a) {
      this._suppressOutput = a;
    }, enumerable:!0, configurable:!0});
    a.prototype.write = function(a, b) {
      void 0 === a && (a = "");
      void 0 === b && (b = !1);
      this._suppressOutput || this._outNoNewline((b ? this._padding : "") + a);
    };
    a.prototype.writeLn = function(a) {
      void 0 === a && (a = "");
      this._suppressOutput || this._out(this._padding + a);
    };
    a.prototype.writeObject = function(a, b) {
      void 0 === a && (a = "");
      this._suppressOutput || this._out(this._padding + a, b);
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
        for (var b = 0;b < a.length;b++) {
          this.writeLn(" * " + a[b]);
        }
        this.writeLn(" */");
      }
    };
    a.prototype.writeLns = function(a) {
      a = (a || "").split("\n");
      for (var b = 0;b < a.length;b++) {
        this.writeLn(a[b]);
      }
    };
    a.prototype.errorLn = function(b) {
      a.logLevel & 1 && this.boldRedLn(b);
    };
    a.prototype.warnLn = function(b) {
      a.logLevel & 2 && this.yellowLn(b);
    };
    a.prototype.debugLn = function(b) {
      a.logLevel & 4 && this.purpleLn(b);
    };
    a.prototype.logLn = function(b) {
      a.logLevel & 8 && this.writeLn(b);
    };
    a.prototype.infoLn = function(b) {
      a.logLevel & 16 && this.writeLn(b);
    };
    a.prototype.yellowLn = function(b) {
      this.colorLn(a.YELLOW, b);
    };
    a.prototype.greenLn = function(b) {
      this.colorLn(a.GREEN, b);
    };
    a.prototype.boldRedLn = function(b) {
      this.colorLn(a.BOLD_RED, b);
    };
    a.prototype.redLn = function(b) {
      this.colorLn(a.RED, b);
    };
    a.prototype.purpleLn = function(b) {
      this.colorLn(a.PURPLE, b);
    };
    a.prototype.colorLn = function(b, e) {
      this._suppressOutput || (inBrowser ? this._out(this._padding + e) : this._out(this._padding + b + e + a.ENDC));
    };
    a.prototype.redLns = function(b) {
      this.colorLns(a.RED, b);
    };
    a.prototype.colorLns = function(a, b) {
      for (var e = (b || "").split("\n"), c = 0;c < e.length;c++) {
        this.colorLn(a, e[c]);
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
    a.prototype.writeArray = function(a, b, e) {
      void 0 === b && (b = !1);
      void 0 === e && (e = !1);
      b = b || !1;
      for (var c = 0, d = a.length;c < d;c++) {
        var p = "";
        b && (p = null === a[c] ? "null" : void 0 === a[c] ? "undefined" : a[c].constructor.name, p += " ");
        var n = e ? "" : ("" + c).padRight(" ", 4);
        this.writeLn(n + p + a[c]);
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
  f.IndentingWriter = d;
  d = function() {
    function a(a, b) {
      void 0 === b && (b = 12);
      this.start = this.index = 0;
      this._size = 1 << b;
      this._mask = this._size - 1;
      this.array = new a(this._size);
    }
    a.prototype.get = function(a) {
      return this.array[a];
    };
    a.prototype.forEachInReverse = function(a) {
      if (!this.isEmpty()) {
        for (var b = 0 === this.index ? this._size - 1 : this.index - 1, e = this.start - 1 & this._mask;b !== e && !a(this.array[b], b);) {
          b = 0 === b ? this._size - 1 : b - 1;
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
  f.CircularBuffer = d;
  d = function() {
    function a() {
    }
    a.randomStyle = function() {
      a._randomStyleCache || (a._randomStyleCache = "#ff5e3a #ff9500 #ffdb4c #87fc70 #52edc7 #1ad6fd #c644fc #ef4db6 #4a4a4a #dbddde #ff3b30 #ff9500 #ffcc00 #4cd964 #34aadc #007aff #5856d6 #ff2d55 #8e8e93 #c7c7cc #5ad427 #c86edf #d1eefc #e0f8d8 #fb2b69 #f7f7f7 #1d77ef #d6cec3 #55efcb #ff4981 #ffd3e0 #f7f7f7 #ff1300 #1f1f21 #bdbec2 #ff3a2d".split(" "));
      return a._randomStyleCache[a._nextStyle++ % a._randomStyleCache.length];
    };
    a.gradientColor = function(e) {
      return a._gradient[a._gradient.length * b.clamp(e, 0, 1) | 0];
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
  f.ColorStyle = d;
  d = function() {
    function a(a, b, e, c) {
      this.xMin = a | 0;
      this.yMin = b | 0;
      this.xMax = e | 0;
      this.yMax = c | 0;
    }
    a.FromUntyped = function(b) {
      return new a(b.xMin, b.yMin, b.xMax, b.yMax);
    };
    a.FromRectangle = function(b) {
      return new a(20 * b.x | 0, 20 * b.y | 0, 20 * (b.x + b.width) | 0, 20 * (b.y + b.height) | 0);
    };
    a.prototype.setElements = function(a, b, e, c) {
      this.xMin = a;
      this.yMin = b;
      this.xMax = e;
      this.yMax = c;
    };
    a.prototype.copyFrom = function(a) {
      this.setElements(a.xMin, a.yMin, a.xMax, a.yMax);
    };
    a.prototype.contains = function(a, b) {
      return a < this.xMin !== a < this.xMax && b < this.yMin !== b < this.yMax;
    };
    a.prototype.unionInPlace = function(a) {
      a.isEmpty() || (this.extendByPoint(a.xMin, a.yMin), this.extendByPoint(a.xMax, a.yMax));
    };
    a.prototype.extendByPoint = function(a, b) {
      this.extendByX(a);
      this.extendByY(b);
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
      var b = Math.abs(Math.cos(a));
      a = Math.abs(Math.sin(a));
      return b * (this.xMax - this.xMin) + a * (this.yMax - this.yMin);
    };
    a.prototype.getBaseHeight = function(a) {
      var b = Math.abs(Math.cos(a));
      return Math.abs(Math.sin(a)) * (this.xMax - this.xMin) + b * (this.yMax - this.yMin);
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
  f.Bounds = d;
  d = function() {
    function a(a, b, e, c) {
      y.assert(h(a));
      y.assert(h(b));
      y.assert(h(e));
      y.assert(h(c));
      this._xMin = a | 0;
      this._yMin = b | 0;
      this._xMax = e | 0;
      this._yMax = c | 0;
    }
    a.FromUntyped = function(b) {
      return new a(b.xMin, b.yMin, b.xMax, b.yMax);
    };
    a.FromRectangle = function(b) {
      return new a(20 * b.x | 0, 20 * b.y | 0, 20 * (b.x + b.width) | 0, 20 * (b.y + b.height) | 0);
    };
    a.prototype.setElements = function(a, b, e, c) {
      this.xMin = a;
      this.yMin = b;
      this.xMax = e;
      this.yMax = c;
    };
    a.prototype.copyFrom = function(a) {
      this.setElements(a.xMin, a.yMin, a.xMax, a.yMax);
    };
    a.prototype.contains = function(a, b) {
      return a < this.xMin !== a < this.xMax && b < this.yMin !== b < this.yMax;
    };
    a.prototype.unionInPlace = function(a) {
      a.isEmpty() || (this.extendByPoint(a.xMin, a.yMin), this.extendByPoint(a.xMax, a.yMax));
    };
    a.prototype.extendByPoint = function(a, b) {
      this.extendByX(a);
      this.extendByY(b);
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
      y.assert(h(a));
      this._xMin = a;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(a.prototype, "yMin", {get:function() {
      return this._yMin;
    }, set:function(a) {
      y.assert(h(a));
      this._yMin = a | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(a.prototype, "xMax", {get:function() {
      return this._xMax;
    }, set:function(a) {
      y.assert(h(a));
      this._xMax = a | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(a.prototype, "width", {get:function() {
      return this._xMax - this._xMin;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(a.prototype, "yMax", {get:function() {
      return this._yMax;
    }, set:function(a) {
      y.assert(h(a));
      this._yMax = a | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(a.prototype, "height", {get:function() {
      return this._yMax - this._yMin;
    }, enumerable:!0, configurable:!0});
    a.prototype.getBaseWidth = function(a) {
      var b = Math.abs(Math.cos(a));
      a = Math.abs(Math.sin(a));
      return b * (this._xMax - this._xMin) + a * (this._yMax - this._yMin);
    };
    a.prototype.getBaseHeight = function(a) {
      var b = Math.abs(Math.cos(a));
      return Math.abs(Math.sin(a)) * (this._xMax - this._xMin) + b * (this._yMax - this._yMin);
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
  f.DebugBounds = d;
  d = function() {
    function a(a, b, e, c) {
      this.r = a;
      this.g = b;
      this.b = e;
      this.a = c;
    }
    a.FromARGB = function(b) {
      return new a((b >> 16 & 255) / 255, (b >> 8 & 255) / 255, (b >> 0 & 255) / 255, (b >> 24 & 255) / 255);
    };
    a.FromRGBA = function(b) {
      return a.FromARGB(c.RGBAToARGB(b));
    };
    a.prototype.toRGBA = function() {
      return 255 * this.r << 24 | 255 * this.g << 16 | 255 * this.b << 8 | 255 * this.a;
    };
    a.prototype.toCSSStyle = function() {
      return c.rgbaToCSSStyle(this.toRGBA());
    };
    a.prototype.set = function(a) {
      this.r = a.r;
      this.g = a.g;
      this.b = a.b;
      this.a = a.a;
    };
    a.randomColor = function(b) {
      void 0 === b && (b = 1);
      return new a(Math.random(), Math.random(), Math.random(), b);
    };
    a.parseColor = function(b) {
      a.colorCache || (a.colorCache = Object.create(null));
      if (a.colorCache[b]) {
        return a.colorCache[b];
      }
      var e = document.createElement("span");
      document.body.appendChild(e);
      e.style.backgroundColor = b;
      var c = getComputedStyle(e).backgroundColor;
      document.body.removeChild(e);
      (e = /^rgb\((\d+), (\d+), (\d+)\)$/.exec(c)) || (e = /^rgba\((\d+), (\d+), (\d+), ([\d.]+)\)$/.exec(c));
      c = new a(0, 0, 0, 0);
      c.r = parseFloat(e[1]) / 255;
      c.g = parseFloat(e[2]) / 255;
      c.b = parseFloat(e[3]) / 255;
      c.a = e[4] ? parseFloat(e[4]) / 255 : 1;
      return a.colorCache[b] = c;
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
  f.Color = d;
  var c;
  (function(a) {
    function b(a) {
      var k = a >> 0 & 255, e = a >> 8 & 255, c = a >> 24 & 255;
      a = (Math.imul(a >> 16 & 255, c) + 127) / 255 | 0;
      e = (Math.imul(e, c) + 127) / 255 | 0;
      k = (Math.imul(k, c) + 127) / 255 | 0;
      return c << 24 | a << 16 | e << 8 | k;
    }
    function c() {
      if (!E) {
        E = new Uint8Array(65536);
        for (var a = 0;256 > a;a++) {
          for (var b = 0;256 > b;b++) {
            E[(b << 8) + a] = Math.imul(255, a) / b;
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
    var d = new g(1024);
    a.rgbaToCSSStyle = function(a) {
      var b = d.get(a);
      if ("string" === typeof b) {
        return b;
      }
      b = f.StringUtilities.concat9("rgba(", a >> 24 & 255, ",", a >> 16 & 255, ",", a >> 8 & 255, ",", (a & 255) / 255, ")");
      d.set(a, b);
      return b;
    };
    var y = new g(1024);
    a.cssStyleToRGBA = function(a) {
      var b = y.get(a);
      if ("number" === typeof b) {
        return b;
      }
      b = 4278190335;
      if ("#" === a[0]) {
        7 === a.length && (b = parseInt(a.substring(1), 16) << 8 | 255);
      } else {
        if ("r" === a[0]) {
          var e = a.substring(5, a.length - 1).split(","), b = parseInt(e[0]), c = parseInt(e[1]), d = parseInt(e[2]), e = parseFloat(e[3]), b = (b & 255) << 24 | (c & 255) << 16 | (d & 255) << 8 | 255 * e & 255
        }
      }
      y.set(a, b);
      return b;
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
      var b = a >> 0 & 255, e = a >> 8 & 255, c = a >> 24 & 255;
      a = Math.imul(255, a >> 16 & 255) / c & 255;
      e = Math.imul(255, e) / c & 255;
      b = Math.imul(255, b) / c & 255;
      return c << 24 | a << 16 | e << 8 | b;
    };
    a.premultiplyARGB = b;
    var E;
    a.ensureUnpremultiplyTable = c;
    a.getUnpremultiplyTable = function() {
      c();
      return E;
    };
    a.tableLookupUnpremultiplyARGB = function(a) {
      a |= 0;
      var b = a >> 24 & 255;
      if (0 === b) {
        return 0;
      }
      if (255 === b) {
        return a;
      }
      var e, c, d = b << 8, l = E;
      c = l[d + (a >> 16 & 255)];
      e = l[d + (a >> 8 & 255)];
      a = l[d + (a >> 0 & 255)];
      return b << 24 | c << 16 | e << 8 | a;
    };
    a.blendPremultipliedBGRA = function(a, b) {
      var e = b & 16711935, c = b >> 8 & 16711935, d, l = a >> 8 & 16711935, p = 256 - (b & 255);
      d = Math.imul(a & 16711935, p) >> 8;
      l = Math.imul(l, p) >> 8;
      return (c + l & 16711935) << 8 | e + d & 16711935;
    };
    var x = e.swap32;
    a.convertImage = function(a, k, e, c) {
      var d = e.length;
      if (a === k) {
        if (e !== c) {
          for (a = 0;a < d;a++) {
            c[a] = e[a];
          }
        }
      } else {
        if (a === p.PremultipliedAlphaARGB && k === p.StraightAlphaRGBA) {
          for (f.ColorUtilities.ensureUnpremultiplyTable(), a = 0;a < d;a++) {
            var B = e[a];
            k = B & 255;
            if (0 === k) {
              c[a] = 0;
            } else {
              if (255 === k) {
                c[a] = 4278190080 | B >> 8 & 16777215;
              } else {
                var G = B >> 24 & 255, C = B >> 16 & 255, B = B >> 8 & 255, z = k << 8, A = E, B = A[z + B], C = A[z + C], G = A[z + G];
                c[a] = k << 24 | G << 16 | C << 8 | B;
              }
            }
          }
        } else {
          if (a === p.StraightAlphaARGB && k === p.StraightAlphaRGBA) {
            for (a = 0;a < d;a++) {
              c[a] = x(e[a]);
            }
          } else {
            if (a === p.StraightAlphaRGBA && k === p.PremultipliedAlphaARGB) {
              for (a = 0;a < d;a++) {
                k = e[a], c[a] = x(b(k & 4278255360 | k >> 16 & 255 | (k & 255) << 16));
              }
            } else {
              for (a = 0;a < d;a++) {
                c[a] = e[a];
              }
            }
          }
        }
      }
    };
  })(c = f.ColorUtilities || (f.ColorUtilities = {}));
  d = function() {
    function a(a) {
      void 0 === a && (a = 32);
      this._list = [];
      this._maxSize = a;
    }
    a.prototype.acquire = function(b) {
      if (a._enabled) {
        for (var e = this._list, c = 0;c < e.length;c++) {
          var d = e[c];
          if (d.byteLength >= b) {
            return e.splice(c, 1), d;
          }
        }
      }
      return new ArrayBuffer(b);
    };
    a.prototype.release = function(b) {
      if (a._enabled) {
        var e = this._list;
        e.length === this._maxSize && e.shift();
        e.push(b);
      }
    };
    a.prototype.ensureUint8ArrayLength = function(a, b) {
      if (a.length >= b) {
        return a;
      }
      var e = Math.max(a.length + b, (3 * a.length >> 1) + 1), e = new Uint8Array(this.acquire(e), 0, e);
      e.set(a);
      this.release(a.buffer);
      return e;
    };
    a.prototype.ensureFloat64ArrayLength = function(a, b) {
      if (a.length >= b) {
        return a;
      }
      var e = Math.max(a.length + b, (3 * a.length >> 1) + 1), e = new Float64Array(this.acquire(e * Float64Array.BYTES_PER_ELEMENT), 0, e);
      e.set(a);
      this.release(a.buffer);
      return e;
    };
    a._enabled = !0;
    return a;
  }();
  f.ArrayBufferPool = d;
  (function(a) {
    a.instance;
  })(f.Telemetry || (f.Telemetry = {}));
  (function(a) {
    a.instance;
  })(f.FileLoadingService || (f.FileLoadingService = {}));
  (function(a) {
    a.instance;
  })(f.SystemResourcesLoadingService || (f.SystemResourcesLoadingService = {}));
  f.registerCSSFont = function(a, b, e) {
    if (inBrowser) {
      var c = document.head;
      c.insertBefore(document.createElement("style"), c.firstChild);
      c = document.styleSheets[0];
      b = "@font-face{font-family:swffont" + a + ";src:url(data:font/opentype;base64," + f.StringUtilities.base64EncodeBytes(b) + ")}";
      c.insertRule(b, c.cssRules.length);
      e && (e = document.createElement("div"), e.style.fontFamily = "swffont" + a, e.innerHTML = "hello", document.body.appendChild(e), document.body.removeChild(e));
    } else {
      y.warning("Cannot register CSS font outside the browser");
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
    a.instance;
  })(f.LocalConnectionService || (f.LocalConnectionService = {}));
  (function(a) {
    a.instance = {setClipboard:function(a) {
    }};
  })(f.ClipboardService || (f.ClipboardService = {}));
  d = function() {
    function a() {
      this._queues = {};
    }
    a.prototype.register = function(a, b) {
      y.assert(a);
      y.assert(b);
      var e = this._queues[a];
      if (e) {
        if (-1 < e.indexOf(b)) {
          return;
        }
      } else {
        e = this._queues[a] = [];
      }
      e.push(b);
    };
    a.prototype.unregister = function(a, b) {
      y.assert(a);
      y.assert(b);
      var e = this._queues[a];
      if (e) {
        var c = e.indexOf(b);
        -1 !== c && e.splice(c, 1);
        0 === e.length && (this._queues[a] = null);
      }
    };
    a.prototype.notify = function(a, b) {
      var e = this._queues[a];
      if (e) {
        e = e.slice();
        b = Array.prototype.slice.call(arguments, 0);
        for (var c = 0;c < e.length;c++) {
          e[c].apply(null, b);
        }
      }
    };
    a.prototype.notify1 = function(a, b) {
      var e = this._queues[a];
      if (e) {
        for (var e = e.slice(), c = 0;c < e.length;c++) {
          (0,e[c])(a, b);
        }
      }
    };
    return a;
  }();
  f.Callback = d;
  (function(a) {
    a[a.None = 0] = "None";
    a[a.PremultipliedAlphaARGB = 1] = "PremultipliedAlphaARGB";
    a[a.StraightAlphaARGB = 2] = "StraightAlphaARGB";
    a[a.StraightAlphaRGBA = 3] = "StraightAlphaRGBA";
    a[a.JPEG = 4] = "JPEG";
    a[a.PNG = 5] = "PNG";
    a[a.GIF = 6] = "GIF";
  })(f.ImageType || (f.ImageType = {}));
  var p = f.ImageType;
  f.getMIMETypeForImageType = function(a) {
    switch(a) {
      case p.JPEG:
        return "image/jpeg";
      case p.PNG:
        return "image/png";
      case p.GIF:
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
  d = function() {
    function a() {
      this.promise = new Promise(function(a, b) {
        this.resolve = a;
        this.reject = b;
      }.bind(this));
    }
    a.prototype.then = function(a, b) {
      return this.promise.then(a, b);
    };
    return a;
  }();
  f.PromiseWrapper = d;
})(Shumway || (Shumway = {}));
"undefined" !== typeof exports && (exports.Shumway = Shumway);
(function() {
  function f(f, u, r) {
    f[u] || Object.defineProperty(f, u, {value:r, writable:!0, configurable:!0, enumerable:!1});
  }
  f(String.prototype, "padRight", function(f, u) {
    var r = this, w = r.replace(/\033\[[0-9]*m/g, "").length;
    if (!f || w >= u) {
      return r;
    }
    for (var w = (u - w) / f.length, y = 0;y < w;y++) {
      r += f;
    }
    return r;
  });
  f(String.prototype, "padLeft", function(f, u) {
    var r = this, w = r.length;
    if (!f || w >= u) {
      return r;
    }
    for (var w = (u - w) / f.length, y = 0;y < w;y++) {
      r = f + r;
    }
    return r;
  });
  f(String.prototype, "trim", function() {
    return this.replace(/^\s+|\s+$/g, "");
  });
  f(String.prototype, "endsWith", function(f) {
    return -1 !== this.indexOf(f, this.length - f.length);
  });
  f(Array.prototype, "replace", function(f, u) {
    if (f === u) {
      return 0;
    }
    for (var r = 0, w = 0;w < this.length;w++) {
      this[w] === f && (this[w] = u, r++);
    }
    return r;
  });
})();
(function(f) {
  (function(h) {
    var r = f.isObject, w = function() {
      function d(b, e, c, d) {
        this.shortName = b;
        this.longName = e;
        this.type = c;
        d = d || {};
        this.positional = d.positional;
        this.parseFn = d.parse;
        this.value = d.defaultValue;
      }
      d.prototype.parse = function(b) {
        this.value = "boolean" === this.type ? b : "number" === this.type ? parseInt(b, 10) : b;
        this.parseFn && this.parseFn(this.value);
      };
      return d;
    }();
    h.Argument = w;
    var y = function() {
      function d() {
        this.args = [];
      }
      d.prototype.addArgument = function(b, e, c, d) {
        b = new w(b, e, c, d);
        this.args.push(b);
        return b;
      };
      d.prototype.addBoundOption = function(b) {
        this.args.push(new w(b.shortName, b.longName, b.type, {parse:function(e) {
          b.value = e;
        }}));
      };
      d.prototype.addBoundOptionSet = function(b) {
        var e = this;
        b.options.forEach(function(b) {
          g.isOptionSet(b) ? e.addBoundOptionSet(b) : e.addBoundOption(b);
        });
      };
      d.prototype.getUsage = function() {
        var b = "";
        this.args.forEach(function(e) {
          b = e.positional ? b + e.longName : b + ("[-" + e.shortName + "|--" + e.longName + ("boolean" === e.type ? "" : " " + e.type[0].toUpperCase()) + "]");
          b += " ";
        });
        return b;
      };
      d.prototype.parse = function(b) {
        var e = {}, c = [];
        this.args.forEach(function(a) {
          a.positional ? c.push(a) : (e["-" + a.shortName] = a, e["--" + a.longName] = a);
        });
        for (var d = [];b.length;) {
          var a = b.shift(), l = null, g = a;
          if ("--" == a) {
            d = d.concat(b);
            break;
          } else {
            if ("-" == a.slice(0, 1) || "--" == a.slice(0, 2)) {
              l = e[a];
              if (!l) {
                continue;
              }
              g = "boolean" !== l.type ? b.shift() : b.length && 0 <= "yes no true false t f".split(" ").indexOf(b[0]) ? 0 <= ["yes", "true", "t"].indexOf(b.shift()) : !0;
            } else {
              c.length ? l = c.shift() : d.push(g);
            }
          }
          l && l.parse(g);
        }
        return d;
      };
      return d;
    }();
    h.ArgumentParser = y;
    var g = function() {
      function d(b, e) {
        void 0 === e && (e = null);
        this.open = !1;
        this.name = b;
        this.settings = e || {};
        this.options = [];
      }
      d.isOptionSet = function(b) {
        return b instanceof d ? !0 : "object" !== typeof b || null === b || b instanceof E ? !1 : "options" in b && "name" in b && "settings" in b;
      };
      d.prototype.register = function(b) {
        if (d.isOptionSet(b)) {
          for (var e = 0;e < this.options.length;e++) {
            var c = this.options[e];
            if (d.isOptionSet(c) && c.name === b.name) {
              return c;
            }
          }
        }
        this.options.push(b);
        if (this.settings) {
          if (d.isOptionSet(b)) {
            e = this.settings[b.name], r(e) && (b.settings = e.settings, b.open = e.open);
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
      d.prototype.trace = function(b) {
        b.enter(this.name + " {");
        this.options.forEach(function(e) {
          e.trace(b);
        });
        b.leave("}");
      };
      d.prototype.getSettings = function() {
        var b = {};
        this.options.forEach(function(e) {
          d.isOptionSet(e) ? b[e.name] = {settings:e.getSettings(), open:e.open} : b[e.longName] = e.value;
        });
        return b;
      };
      d.prototype.setSettings = function(b) {
        b && this.options.forEach(function(e) {
          d.isOptionSet(e) ? e.name in b && e.setSettings(b[e.name].settings) : e.longName in b && (e.value = b[e.longName]);
        });
      };
      return d;
    }();
    h.OptionSet = g;
    var E = function() {
      function d(b, e, c, d, a, l) {
        void 0 === l && (l = null);
        this.longName = e;
        this.shortName = b;
        this.type = c;
        this.value = this.defaultValue = d;
        this.description = a;
        this.config = l;
      }
      d.prototype.parse = function(b) {
        this.value = b;
      };
      d.prototype.trace = function(b) {
        b.writeLn(("-" + this.shortName + "|--" + this.longName).padRight(" ", 30) + " = " + this.type + " " + this.value + " [" + this.defaultValue + "] (" + this.description + ")");
      };
      return d;
    }();
    h.Option = E;
  })(f.Options || (f.Options = {}));
  (function(h) {
    h.ROOT = "Shumway Options";
    h.shumwayOptions = new f.Options.OptionSet(h.ROOT);
    h.setSettings = function(f) {
      h.shumwayOptions.setSettings(f);
    };
    h.getSettings = function() {
      return h.shumwayOptions.getSettings();
    };
  })(f.Settings || (f.Settings = {}));
  var h = f.Options.Option;
  f.loggingOptions = f.Settings.shumwayOptions.register(new f.Options.OptionSet("Logging Options"));
  f.omitRepeatedWarnings = f.loggingOptions.register(new h("wo", "warnOnce", "boolean", !0, "Omit Repeated Warnings"));
  (function(h) {
    var r = function() {
      function h(y, g) {
        this._parent = y;
        this._timers = f.ObjectUtilities.createMap();
        this._name = g;
        this._count = this._total = this._last = this._begin = 0;
      }
      h.time = function(f, g) {
        h.start(f);
        g();
        h.stop();
      };
      h.start = function(f) {
        h._top = h._top._timers[f] || (h._top._timers[f] = new h(h._top, f));
        h._top.start();
        f = h._flat._timers[f] || (h._flat._timers[f] = new h(h._flat, f));
        f.start();
        h._flatStack.push(f);
      };
      h.stop = function() {
        h._top.stop();
        h._top = h._top._parent;
        h._flatStack.pop().stop();
      };
      h.stopStart = function(f) {
        h.stop();
        h.start(f);
      };
      h.prototype.start = function() {
        this._begin = f.getTicks();
      };
      h.prototype.stop = function() {
        this._last = f.getTicks() - this._begin;
        this._total += this._last;
        this._count += 1;
      };
      h.prototype.toJSON = function() {
        return {name:this._name, total:this._total, timers:this._timers};
      };
      h.prototype.trace = function(f) {
        f.enter(this._name + ": " + this._total.toFixed(2) + " ms, count: " + this._count + ", average: " + (this._total / this._count).toFixed(2) + " ms");
        for (var g in this._timers) {
          this._timers[g].trace(f);
        }
        f.outdent();
      };
      h.trace = function(f) {
        h._base.trace(f);
        h._flat.trace(f);
      };
      h._base = new h(null, "Total");
      h._top = h._base;
      h._flat = new h(null, "Flat");
      h._flatStack = [];
      return h;
    }();
    h.Timer = r;
    r = function() {
      function h(f) {
        this._enabled = f;
        this.clear();
      }
      Object.defineProperty(h.prototype, "counts", {get:function() {
        return this._counts;
      }, enumerable:!0, configurable:!0});
      h.prototype.setEnabled = function(f) {
        this._enabled = f;
      };
      h.prototype.clear = function() {
        this._counts = f.ObjectUtilities.createMap();
        this._times = f.ObjectUtilities.createMap();
      };
      h.prototype.toJSON = function() {
        return {counts:this._counts, times:this._times};
      };
      h.prototype.count = function(f, g, h) {
        void 0 === g && (g = 1);
        void 0 === h && (h = 0);
        if (this._enabled) {
          return void 0 === this._counts[f] && (this._counts[f] = 0, this._times[f] = 0), this._counts[f] += g, this._times[f] += h, this._counts[f];
        }
      };
      h.prototype.trace = function(f) {
        for (var g in this._counts) {
          f.writeLn(g + ": " + this._counts[g]);
        }
      };
      h.prototype._pairToString = function(f, g) {
        var h = g[0], d = g[1], b = f[h], h = h + ": " + d;
        b && (h += ", " + b.toFixed(4), 1 < d && (h += " (" + (b / d).toFixed(4) + ")"));
        return h;
      };
      h.prototype.toStringSorted = function() {
        var f = this, g = this._times, h = [], d;
        for (d in this._counts) {
          h.push([d, this._counts[d]]);
        }
        h.sort(function(b, e) {
          return e[1] - b[1];
        });
        return h.map(function(b) {
          return f._pairToString(g, b);
        }).join(", ");
      };
      h.prototype.traceSorted = function(f, g) {
        void 0 === g && (g = !1);
        var h = this, d = this._times, b = [], e;
        for (e in this._counts) {
          b.push([e, this._counts[e]]);
        }
        b.sort(function(b, e) {
          return e[1] - b[1];
        });
        g ? f.writeLn(b.map(function(b) {
          return h._pairToString(d, b);
        }).join(", ")) : b.forEach(function(b) {
          f.writeLn(h._pairToString(d, b));
        });
      };
      h.instance = new h(!0);
      return h;
    }();
    h.Counter = r;
    r = function() {
      function f(h) {
        this._samples = new Float64Array(h);
        this._index = this._count = 0;
      }
      f.prototype.push = function(f) {
        this._count < this._samples.length && this._count++;
        this._index++;
        this._samples[this._index % this._samples.length] = f;
      };
      f.prototype.average = function() {
        for (var f = 0, g = 0;g < this._count;g++) {
          f += this._samples[g];
        }
        return f / this._count;
      };
      return f;
    }();
    h.Average = r;
  })(f.Metrics || (f.Metrics = {}));
})(Shumway || (Shumway = {}));
var __extends = this && this.__extends || function(f, h) {
  function u() {
    this.constructor = f;
  }
  for (var r in h) {
    h.hasOwnProperty(r) && (f[r] = h[r]);
  }
  u.prototype = h.prototype;
  f.prototype = new u;
};
(function(f) {
  (function(g) {
    function d(a) {
      for (var b = Math.max.apply(null, a), k = a.length, e = 1 << b, m = new Uint32Array(e), c = b << 16 | 65535, n = 0;n < e;n++) {
        m[n] = c;
      }
      for (var c = 0, n = 1, t = 2;n <= b;c <<= 1, ++n, t <<= 1) {
        for (var d = 0;d < k;++d) {
          if (a[d] === n) {
            for (var v = 0, A = 0;A < n;++A) {
              v = 2 * v + (c >> A & 1);
            }
            for (A = v;A < e;A += t) {
              m[A] = n << 16 | d;
            }
            ++c;
          }
        }
      }
      return {codes:m, maxBits:b};
    }
    function b(a) {
      for (var b = new Uint16Array(a), k = 0;k < a;k++) {
        b[k] = 1024;
      }
      return b;
    }
    function e(a, b, k, e) {
      for (var m = 1, c = 0, n = 0;n < k;n++) {
        var t = e.decodeBit(a, m + b), m = (m << 1) + t, c = c | t << n
      }
      return c;
    }
    function c(a, b) {
      var k = [];
      k.length = b;
      for (var e = 0;e < b;e++) {
        k[e] = new m(a);
      }
      return k;
    }
    function p(a) {
      return "string" === typeof a ? a : void 0 == a ? null : a + "";
    }
    var a;
    (function(a) {
      a[a.INIT = 0] = "INIT";
      a[a.BLOCK_0 = 1] = "BLOCK_0";
      a[a.BLOCK_1 = 2] = "BLOCK_1";
      a[a.BLOCK_2_PRE = 3] = "BLOCK_2_PRE";
      a[a.BLOCK_2 = 4] = "BLOCK_2";
      a[a.DONE = 5] = "DONE";
      a[a.ERROR = 6] = "ERROR";
      a[a.VERIFY_HEADER = 7] = "VERIFY_HEADER";
    })(a || (a = {}));
    var l = function() {
      function a(b) {
      }
      a.prototype.push = function(a) {
      };
      a.prototype.close = function() {
      };
      a.create = function(a) {
        return "undefined" !== typeof ShumwayCom && ShumwayCom.createSpecialInflate ? new F(a, ShumwayCom.createSpecialInflate) : new h(a);
      };
      a.prototype._processZLibHeader = function(a, b, k) {
        if (b + 2 > k) {
          return 0;
        }
        a = a[b] << 8 | a[b + 1];
        b = null;
        2048 !== (a & 3840) ? b = "inflate: unknown compression method" : 0 !== a % 31 ? b = "inflate: bad FCHECK" : 0 !== (a & 32) && (b = "inflate: FDICT bit set");
        if (b) {
          if (this.onError) {
            this.onError(b);
          }
          return -1;
        }
        return 2;
      };
      a.inflate = function(b, k, e) {
        var m = new Uint8Array(k), c = 0;
        k = a.create(e);
        k.onData = function(a) {
          var b = Math.min(a.length, m.length - c);
          b && g.memCopy(m, a, c, 0, b);
          c += b;
        };
        k.onError = function(a) {
          throw Error(a);
        };
        k.push(b);
        k.close();
        return m;
      };
      return a;
    }();
    g.Inflate = l;
    var h = function(b) {
      function e(m) {
        b.call(this, m);
        this._buffer = null;
        this._bitLength = this._bitBuffer = this._bufferPosition = this._bufferSize = 0;
        this._window = new Uint8Array(65794);
        this._windowPosition = 0;
        this._state = m ? a.VERIFY_HEADER : a.INIT;
        this._isFinalBlock = !1;
        this._distanceTable = this._literalTable = null;
        this._block0Read = 0;
        this._block2State = null;
        this._copyState = {state:0, len:0, lenBits:0, dist:0, distBits:0};
        if (!J) {
          r = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
          y = new Uint16Array(30);
          q = new Uint8Array(30);
          for (var c = m = 0, v = 1;30 > m;++m) {
            y[m] = v, v += 1 << (q[m] = ~~((c += 2 < m ? 1 : 0) / 2));
          }
          var A = new Uint8Array(288);
          for (m = 0;32 > m;++m) {
            A[m] = 5;
          }
          x = d(A.subarray(0, 32));
          n = new Uint16Array(29);
          k = new Uint8Array(29);
          c = m = 0;
          for (v = 3;29 > m;++m) {
            n[m] = v - (28 == m ? 1 : 0), v += 1 << (k[m] = ~~((c += 4 < m ? 1 : 0) / 4 % 6));
          }
          for (m = 0;288 > m;++m) {
            A[m] = 144 > m || 279 < m ? 8 : 256 > m ? 9 : 7;
          }
          t = d(A);
          J = !0;
        }
      }
      __extends(e, b);
      e.prototype.push = function(b) {
        if (!this._buffer || this._buffer.length < this._bufferSize + b.length) {
          var k = new Uint8Array(this._bufferSize + b.length);
          this._buffer && k.set(this._buffer);
          this._buffer = k;
        }
        this._buffer.set(b, this._bufferSize);
        this._bufferSize += b.length;
        this._bufferPosition = 0;
        b = !1;
        do {
          k = this._windowPosition;
          if (this._state === a.INIT && (b = this._decodeInitState())) {
            break;
          }
          switch(this._state) {
            case a.BLOCK_0:
              b = this._decodeBlock0();
              break;
            case a.BLOCK_2_PRE:
              if (b = this._decodeBlock2Pre()) {
                break;
              }
            ;
            case a.BLOCK_1:
            ;
            case a.BLOCK_2:
              b = this._decodeBlock();
              break;
            case a.ERROR:
            ;
            case a.DONE:
              this._bufferPosition = this._bufferSize;
              break;
            case a.VERIFY_HEADER:
              var m = this._processZLibHeader(this._buffer, this._bufferPosition, this._bufferSize);
              0 < m ? (this._bufferPosition += m, this._state = a.INIT) : 0 === m ? b = !0 : this._state = a.ERROR;
          }
          if (0 < this._windowPosition - k) {
            this.onData(this._window.subarray(k, this._windowPosition));
          }
          65536 <= this._windowPosition && ("copyWithin" in this._buffer ? this._window.copyWithin(0, this._windowPosition - 32768, this._windowPosition) : this._window.set(this._window.subarray(this._windowPosition - 32768, this._windowPosition)), this._windowPosition = 32768);
        } while (!b && this._bufferPosition < this._bufferSize);
        this._bufferPosition < this._bufferSize ? ("copyWithin" in this._buffer ? this._buffer.copyWithin(0, this._bufferPosition, this._bufferSize) : this._buffer.set(this._buffer.subarray(this._bufferPosition, this._bufferSize)), this._bufferSize -= this._bufferPosition) : this._bufferSize = 0;
      };
      e.prototype._decodeInitState = function() {
        if (this._isFinalBlock) {
          return this._state = a.DONE, !1;
        }
        var b = this._buffer, k = this._bufferSize, m = this._bitBuffer, e = this._bitLength, c = this._bufferPosition;
        if (3 > (k - c << 3) + e) {
          return !0;
        }
        3 > e && (m |= b[c++] << e, e += 8);
        var n = m & 7, m = m >> 3, e = e - 3;
        switch(n >> 1) {
          case 0:
            e = m = 0;
            if (4 > k - c) {
              return !0;
            }
            var v = b[c] | b[c + 1] << 8, b = b[c + 2] | b[c + 3] << 8, c = c + 4;
            if (65535 !== (v ^ b)) {
              this._error("inflate: invalid block 0 length");
              b = a.ERROR;
              break;
            }
            0 === v ? b = a.INIT : (this._block0Read = v, b = a.BLOCK_0);
            break;
          case 1:
            b = a.BLOCK_1;
            this._literalTable = t;
            this._distanceTable = x;
            break;
          case 2:
            if (26 > (k - c << 3) + e) {
              return !0;
            }
            for (;14 > e;) {
              m |= b[c++] << e, e += 8;
            }
            v = (m >> 10 & 15) + 4;
            if ((k - c << 3) + e < 14 + 3 * v) {
              return !0;
            }
            for (var k = {numLiteralCodes:(m & 31) + 257, numDistanceCodes:(m >> 5 & 31) + 1, codeLengthTable:void 0, bitLengths:void 0, codesRead:0, dupBits:0}, m = m >> 14, e = e - 14, A = new Uint8Array(19), p = 0;p < v;++p) {
              3 > e && (m |= b[c++] << e, e += 8), A[r[p]] = m & 7, m >>= 3, e -= 3;
            }
            for (;19 > p;p++) {
              A[r[p]] = 0;
            }
            k.bitLengths = new Uint8Array(k.numLiteralCodes + k.numDistanceCodes);
            k.codeLengthTable = d(A);
            this._block2State = k;
            b = a.BLOCK_2_PRE;
            break;
          default:
            return this._error("inflate: unsupported block type"), !1;
        }
        this._isFinalBlock = !!(n & 1);
        this._state = b;
        this._bufferPosition = c;
        this._bitBuffer = m;
        this._bitLength = e;
        return !1;
      };
      e.prototype._error = function(a) {
        if (this.onError) {
          this.onError(a);
        }
      };
      e.prototype._decodeBlock0 = function() {
        var b = this._bufferPosition, k = this._windowPosition, m = this._block0Read, e = 65794 - k, c = this._bufferSize - b, n = c < m, t = Math.min(e, c, m);
        this._window.set(this._buffer.subarray(b, b + t), k);
        this._windowPosition = k + t;
        this._bufferPosition = b + t;
        this._block0Read = m - t;
        return m === t ? (this._state = a.INIT, !1) : n && e < c;
      };
      e.prototype._readBits = function(a) {
        var b = this._bitBuffer, k = this._bitLength;
        if (a > k) {
          var m = this._bufferPosition, e = this._bufferSize;
          do {
            if (m >= e) {
              return this._bufferPosition = m, this._bitBuffer = b, this._bitLength = k, -1;
            }
            b |= this._buffer[m++] << k;
            k += 8;
          } while (a > k);
          this._bufferPosition = m;
        }
        this._bitBuffer = b >> a;
        this._bitLength = k - a;
        return b & (1 << a) - 1;
      };
      e.prototype._readCode = function(b) {
        var k = this._bitBuffer, m = this._bitLength, e = b.maxBits;
        if (e > m) {
          var c = this._bufferPosition, n = this._bufferSize;
          do {
            if (c >= n) {
              return this._bufferPosition = c, this._bitBuffer = k, this._bitLength = m, -1;
            }
            k |= this._buffer[c++] << m;
            m += 8;
          } while (e > m);
          this._bufferPosition = c;
        }
        b = b.codes[k & (1 << e) - 1];
        e = b >> 16;
        if (b & 32768) {
          return this._error("inflate: invalid encoding"), this._state = a.ERROR, -1;
        }
        this._bitBuffer = k >> e;
        this._bitLength = m - e;
        return b & 65535;
      };
      e.prototype._decodeBlock2Pre = function() {
        var b = this._block2State, k = b.numLiteralCodes + b.numDistanceCodes, m = b.bitLengths, e = b.codesRead, c = 0 < e ? m[e - 1] : 0, n = b.codeLengthTable, t;
        if (0 < b.dupBits) {
          t = this._readBits(b.dupBits);
          if (0 > t) {
            return !0;
          }
          for (;t--;) {
            m[e++] = c;
          }
          b.dupBits = 0;
        }
        for (;e < k;) {
          var v = this._readCode(n);
          if (0 > v) {
            return b.codesRead = e, !0;
          }
          if (16 > v) {
            m[e++] = c = v;
          } else {
            var A;
            switch(v) {
              case 16:
                A = 2;
                t = 3;
                v = c;
                break;
              case 17:
                t = A = 3;
                v = 0;
                break;
              case 18:
                A = 7, t = 11, v = 0;
            }
            for (;t--;) {
              m[e++] = v;
            }
            t = this._readBits(A);
            if (0 > t) {
              return b.codesRead = e, b.dupBits = A, !0;
            }
            for (;t--;) {
              m[e++] = v;
            }
            c = v;
          }
        }
        this._literalTable = d(m.subarray(0, b.numLiteralCodes));
        this._distanceTable = d(m.subarray(b.numLiteralCodes));
        this._state = a.BLOCK_2;
        this._block2State = null;
        return !1;
      };
      e.prototype._decodeBlock = function() {
        var b = this._literalTable, m = this._distanceTable, e = this._window, c = this._windowPosition, t = this._copyState, v, d, A, p;
        if (0 !== t.state) {
          switch(t.state) {
            case 1:
              if (0 > (v = this._readBits(t.lenBits))) {
                return !0;
              }
              t.len += v;
              t.state = 2;
            case 2:
              if (0 > (v = this._readCode(m))) {
                return !0;
              }
              t.distBits = q[v];
              t.dist = y[v];
              t.state = 3;
            case 3:
              v = 0;
              if (0 < t.distBits && 0 > (v = this._readBits(t.distBits))) {
                return !0;
              }
              p = t.dist + v;
              d = t.len;
              for (v = c - p;d--;) {
                e[c++] = e[v++];
              }
              t.state = 0;
              if (65536 <= c) {
                return this._windowPosition = c, !1;
              }
              break;
          }
        }
        do {
          v = this._readCode(b);
          if (0 > v) {
            return this._windowPosition = c, !0;
          }
          if (256 > v) {
            e[c++] = v;
          } else {
            if (256 < v) {
              this._windowPosition = c;
              v -= 257;
              A = k[v];
              d = n[v];
              v = 0 === A ? 0 : this._readBits(A);
              if (0 > v) {
                return t.state = 1, t.len = d, t.lenBits = A, !0;
              }
              d += v;
              v = this._readCode(m);
              if (0 > v) {
                return t.state = 2, t.len = d, !0;
              }
              A = q[v];
              p = y[v];
              v = 0 === A ? 0 : this._readBits(A);
              if (0 > v) {
                return t.state = 3, t.len = d, t.dist = p, t.distBits = A, !0;
              }
              p += v;
              for (v = c - p;d--;) {
                e[c++] = e[v++];
              }
            } else {
              this._state = a.INIT;
              break;
            }
          }
        } while (65536 > c);
        this._windowPosition = c;
        return !1;
      };
      return e;
    }(l), r, y, q, x, n, k, t, J = !1, F = function(a) {
      function b(k, m) {
        a.call(this, k);
        this._verifyHeader = k;
        this._specialInflate = m();
        this._specialInflate.setDataCallback(function(a) {
          this.onData(a);
        }.bind(this));
      }
      __extends(b, a);
      b.prototype.push = function(a) {
        if (this._verifyHeader) {
          var b;
          this._buffer ? (b = new Uint8Array(this._buffer.length + a.length), b.set(this._buffer), b.set(a, this._buffer.length), this._buffer = null) : b = new Uint8Array(a);
          var k = this._processZLibHeader(b, 0, b.length);
          if (0 === k) {
            this._buffer = b;
            return;
          }
          this._verifyHeader = !0;
          0 < k && (a = b.subarray(k));
        }
        this._specialInflate.push(a);
      };
      b.prototype.close = function() {
        this._specialInflate && (this._specialInflate.close(), this._specialInflate = null);
      };
      return b;
    }(l), B;
    (function(a) {
      a[a.WRITE = 0] = "WRITE";
      a[a.DONE = 1] = "DONE";
      a[a.ZLIB_HEADER = 2] = "ZLIB_HEADER";
    })(B || (B = {}));
    var G = function() {
      function a() {
        this.a = 1;
        this.b = 0;
      }
      a.prototype.update = function(a, b, k) {
        for (var m = this.a, e = this.b;b < k;++b) {
          m = (m + (a[b] & 255)) % 65521, e = (e + m) % 65521;
        }
        this.a = m;
        this.b = e;
      };
      a.prototype.getChecksum = function() {
        return this.b << 16 | this.a;
      };
      return a;
    }();
    g.Adler32 = G;
    l = function() {
      function a(b) {
        this._state = (this._writeZlibHeader = b) ? B.ZLIB_HEADER : B.WRITE;
        this._adler32 = b ? new G : null;
      }
      a.prototype.push = function(a) {
        this._state === B.ZLIB_HEADER && (this.onData(new Uint8Array([120, 156])), this._state = B.WRITE);
        for (var b = a.length, k = b + 5 * Math.ceil(b / 65535), k = new Uint8Array(k), m = 0, e = 0;65535 < b;) {
          k.set(new Uint8Array([0, 255, 255, 0, 0]), m), m += 5, k.set(a.subarray(e, e + 65535), m), e += 65535, m += 65535, b -= 65535;
        }
        k.set(new Uint8Array([0, b & 255, b >> 8 & 255, ~b & 255, ~b >> 8 & 255]), m);
        m += 5;
        k.set(a.subarray(e, b), m);
        this.onData(k);
        this._adler32 && this._adler32.update(a, 0, b);
      };
      a.prototype.close = function() {
        this._state = B.DONE;
        this.onData(new Uint8Array([1, 0, 0, 255, 255]));
        if (this._adler32) {
          var a = this._adler32.getChecksum();
          this.onData(new Uint8Array([a & 255, a >> 8 & 255, a >> 16 & 255, a >>> 24 & 255]));
        }
      };
      return a;
    }();
    g.Deflate = l;
    var C = function() {
      function a() {
        this.pos = this.available = 0;
        this.buffer = new Uint8Array(2E3);
      }
      a.prototype.append = function(a) {
        var b = this.pos + this.available, k = b + a.length;
        if (k > this.buffer.length) {
          for (var m = 2 * this.buffer.length;m < k;) {
            m *= 2;
          }
          k = new Uint8Array(m);
          k.set(this.buffer);
          this.buffer = k;
        }
        this.buffer.set(a, b);
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
    }(), z = function() {
      function a(b) {
        this.onData = b;
        this.processed = 0;
      }
      a.prototype.writeBytes = function(a) {
        this.onData.call(null, a);
        this.processed += a.length;
      };
      return a;
    }(), A = function() {
      function a(b) {
        this.outStream = b;
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
      a.prototype.copyMatch = function(a, b) {
        for (var k = this.pos, m = this.size, e = this.buf, c = a <= k ? k - a : m - a + k, n = b;0 < n;) {
          for (var t = Math.min(Math.min(n, m - k), m - c), v = 0;v < t;v++) {
            var d = e[c++];
            e[k++] = d;
          }
          k === m && (this.pos = k, this.flush(), k = 0, this.isFull = !0);
          c === m && (c = 0);
          n -= t;
        }
        this.pos = k;
        this.totalPos += b;
      };
      a.prototype.checkDistance = function(a) {
        return a <= this.pos || this.isFull;
      };
      a.prototype.isEmpty = function() {
        return 0 === this.pos && !this.isFull;
      };
      return a;
    }(), v = function() {
      function a(b) {
        this.inStream = b;
        this.code = this.range = 0;
        this.corrupted = !1;
      }
      a.prototype.init = function() {
        0 !== this.inStream.readByte() && (this.corrupted = !0);
        this.range = -1;
        for (var a = 0, b = 0;4 > b;b++) {
          a = a << 8 | this.inStream.readByte();
        }
        a === this.range && (this.corrupted = !0);
        this.code = a;
      };
      a.prototype.isFinishedOK = function() {
        return 0 === this.code;
      };
      a.prototype.decodeDirectBits = function(a) {
        var b = 0, k = this.range, m = this.code;
        do {
          var k = k >>> 1 | 0, m = m - k | 0, e = m >> 31, m = m + (k & e) | 0;
          m === k && (this.corrupted = !0);
          0 <= k && 16777216 > k && (k <<= 8, m = m << 8 | this.inStream.readByte());
          b = (b << 1) + e + 1 | 0;
        } while (--a);
        this.range = k;
        this.code = m;
        return b;
      };
      a.prototype.decodeBit = function(a, b) {
        var k = this.range, m = this.code, e = a[b], c = (k >>> 11) * e;
        m >>> 0 < c ? (e = e + (2048 - e >> 5) | 0, k = c | 0, c = 0) : (e = e - (e >> 5) | 0, m = m - c | 0, k = k - c | 0, c = 1);
        a[b] = e & 65535;
        0 <= k && 16777216 > k && (k <<= 8, m = m << 8 | this.inStream.readByte());
        this.range = k;
        this.code = m;
        return c;
      };
      return a;
    }(), m = function() {
      function a(k) {
        this.numBits = k;
        this.probs = b(1 << k);
      }
      a.prototype.decode = function(a) {
        for (var b = 1, k = 0;k < this.numBits;k++) {
          b = (b << 1) + a.decodeBit(this.probs, b);
        }
        return b - (1 << this.numBits);
      };
      a.prototype.reverseDecode = function(a) {
        return e(this.probs, 0, this.numBits, a);
      };
      return a;
    }(), H = function() {
      function a() {
        this.choice = b(2);
        this.lowCoder = c(3, 16);
        this.midCoder = c(3, 16);
        this.highCoder = new m(8);
      }
      a.prototype.decode = function(a, b) {
        return 0 === a.decodeBit(this.choice, 0) ? this.lowCoder[b].decode(a) : 0 === a.decodeBit(this.choice, 1) ? 8 + this.midCoder[b].decode(a) : 16 + this.highCoder.decode(a);
      };
      return a;
    }(), D = function() {
      function a(b, k) {
        this.rangeDec = new v(b);
        this.outWindow = new A(k);
        this.markerIsMandatory = !1;
        this.dictSizeInProperties = this.dictSize = this.lp = this.pb = this.lc = 0;
        this.leftToUnpack = this.unpackSize = void 0;
        this.reps = new Int32Array(4);
        this.state = 0;
      }
      a.prototype.decodeProperties = function(a) {
        var b = a[0];
        if (225 <= b) {
          throw Error("Incorrect LZMA properties");
        }
        this.lc = b % 9;
        b = b / 9 | 0;
        this.pb = b / 5 | 0;
        this.lp = b % 5;
        for (b = this.dictSizeInProperties = 0;4 > b;b++) {
          this.dictSizeInProperties |= a[b + 1] << 8 * b;
        }
        this.dictSize = this.dictSizeInProperties;
        4096 > this.dictSize && (this.dictSize = 4096);
      };
      a.prototype.create = function() {
        this.outWindow.create(this.dictSize);
        this.init();
        this.rangeDec.init();
        this.reps[0] = 0;
        this.reps[1] = 0;
        this.reps[2] = 0;
        this.state = this.reps[3] = 0;
        this.leftToUnpack = this.unpackSize;
      };
      a.prototype.decodeLiteral = function(a, b) {
        var k = this.outWindow, m = this.rangeDec, e = 0;
        k.isEmpty() || (e = k.getByte(1));
        var c = 1, e = 768 * (((k.totalPos & (1 << this.lp) - 1) << this.lc) + (e >> 8 - this.lc));
        if (7 <= a) {
          k = k.getByte(b + 1);
          do {
            var n = k >> 7 & 1, k = k << 1, t = m.decodeBit(this.litProbs, e + ((1 + n << 8) + c)), c = c << 1 | t;
            if (n !== t) {
              break;
            }
          } while (256 > c);
        }
        for (;256 > c;) {
          c = c << 1 | m.decodeBit(this.litProbs, e + c);
        }
        return c - 256 & 255;
      };
      a.prototype.decodeDistance = function(a) {
        var b = a;
        3 < b && (b = 3);
        a = this.rangeDec;
        b = this.posSlotDecoder[b].decode(a);
        if (4 > b) {
          return b;
        }
        var k = (b >> 1) - 1, m = (2 | b & 1) << k;
        14 > b ? m = m + e(this.posDecoders, m - b, k, a) | 0 : (m = m + (a.decodeDirectBits(k - 4) << 4) | 0, m = m + this.alignDecoder.reverseDecode(a) | 0);
        return m;
      };
      a.prototype.init = function() {
        this.litProbs = b(768 << this.lc + this.lp);
        this.posSlotDecoder = c(6, 4);
        this.alignDecoder = new m(4);
        this.posDecoders = b(115);
        this.isMatch = b(192);
        this.isRep = b(12);
        this.isRepG0 = b(12);
        this.isRepG1 = b(12);
        this.isRepG2 = b(12);
        this.isRep0Long = b(192);
        this.lenDecoder = new H;
        this.repLenDecoder = new H;
      };
      a.prototype.decode = function(a) {
        for (var b = this.rangeDec, k = this.outWindow, m = this.pb, e = this.dictSize, c = this.markerIsMandatory, n = this.leftToUnpack, t = this.isMatch, v = this.isRep, d = this.isRepG0, A = this.isRepG1, p = this.isRepG2, l = this.isRep0Long, H = this.lenDecoder, C = this.repLenDecoder, D = this.reps[0], J = this.reps[1], B = this.reps[2], G = this.reps[3], g = this.state;;) {
          if (a && 48 > b.inStream.available) {
            this.outWindow.flush();
            break;
          }
          if (0 === n && !c && (this.outWindow.flush(), b.isFinishedOK())) {
            return R;
          }
          var z = k.totalPos & (1 << m) - 1;
          if (0 === b.decodeBit(t, (g << 4) + z)) {
            if (0 === n) {
              return N;
            }
            k.putByte(this.decodeLiteral(g, D));
            g = 4 > g ? 0 : 10 > g ? g - 3 : g - 6;
            n--;
          } else {
            if (0 !== b.decodeBit(v, g)) {
              if (0 === n || k.isEmpty()) {
                return N;
              }
              if (0 === b.decodeBit(d, g)) {
                if (0 === b.decodeBit(l, (g << 4) + z)) {
                  g = 7 > g ? 9 : 11;
                  k.putByte(k.getByte(D + 1));
                  n--;
                  continue;
                }
              } else {
                var f;
                0 === b.decodeBit(A, g) ? f = J : (0 === b.decodeBit(p, g) ? f = B : (f = G, G = B), B = J);
                J = D;
                D = f;
              }
              z = C.decode(b, z);
              g = 7 > g ? 8 : 11;
            } else {
              G = B;
              B = J;
              J = D;
              z = H.decode(b, z);
              g = 7 > g ? 7 : 10;
              D = this.decodeDistance(z);
              if (-1 === D) {
                return this.outWindow.flush(), b.isFinishedOK() ? M : N;
              }
              if (0 === n || D >= e || !k.checkDistance(D)) {
                return N;
              }
            }
            z += 2;
            f = !1;
            void 0 !== n && n < z && (z = n, f = !0);
            k.copyMatch(D + 1, z);
            n -= z;
            if (f) {
              return N;
            }
          }
        }
        this.state = g;
        this.reps[0] = D;
        this.reps[1] = J;
        this.reps[2] = B;
        this.reps[3] = G;
        this.leftToUnpack = n;
        return u;
      };
      a.prototype.flushOutput = function() {
        this.outWindow.flush();
      };
      return a;
    }(), N = 0, M = 1, R = 2, u = 3, O;
    (function(a) {
      a[a.WAIT_FOR_LZMA_HEADER = 0] = "WAIT_FOR_LZMA_HEADER";
      a[a.WAIT_FOR_SWF_HEADER = 1] = "WAIT_FOR_SWF_HEADER";
      a[a.PROCESS_DATA = 2] = "PROCESS_DATA";
      a[a.CLOSED = 3] = "CLOSED";
      a[a.ERROR = 4] = "ERROR";
    })(O || (O = {}));
    l = function() {
      function a(b) {
        void 0 === b && (b = !1);
        this._state = b ? O.WAIT_FOR_SWF_HEADER : O.WAIT_FOR_LZMA_HEADER;
        this.buffer = null;
      }
      a.prototype.push = function(a) {
        if (this._state < O.PROCESS_DATA) {
          var b = this.buffer ? this.buffer.length : 0, k = (this._state === O.WAIT_FOR_SWF_HEADER ? 17 : 13) + 5;
          if (b + a.length < k) {
            k = new Uint8Array(b + a.length);
            0 < b && k.set(this.buffer);
            k.set(a, b);
            this.buffer = k;
            return;
          }
          var m = new Uint8Array(k);
          0 < b && m.set(this.buffer);
          m.set(a.subarray(0, k - b), b);
          this._inStream = new C;
          this._inStream.append(m.subarray(k - 5));
          this._outStream = new z(function(a) {
            this.onData.call(null, a);
          }.bind(this));
          this._decoder = new D(this._inStream, this._outStream);
          if (this._state === O.WAIT_FOR_SWF_HEADER) {
            this._decoder.decodeProperties(m.subarray(12, 17)), this._decoder.markerIsMandatory = !1, this._decoder.unpackSize = ((m[4] | m[5] << 8 | m[6] << 16 | m[7] << 24) >>> 0) - 8;
          } else {
            this._decoder.decodeProperties(m.subarray(0, 5));
            for (var b = 0, e = !1, c = 0;8 > c;c++) {
              var n = m[5 + c];
              255 !== n && (e = !0);
              b |= n << 8 * c;
            }
            this._decoder.markerIsMandatory = !e;
            this._decoder.unpackSize = e ? b : void 0;
          }
          this._decoder.create();
          a = a.subarray(k);
          this._state = O.PROCESS_DATA;
        } else {
          if (this._state !== O.PROCESS_DATA) {
            return;
          }
        }
        try {
          this._inStream.append(a);
          var t = this._decoder.decode(!0);
          this._inStream.compact();
          t !== u && this._checkError(t);
        } catch (v) {
          this._decoder.flushOutput(), this._decoder = null, this._error(v);
        }
      };
      a.prototype.close = function() {
        if (this._state === O.PROCESS_DATA) {
          this._state = O.CLOSED;
          try {
            var a = this._decoder.decode(!1);
            this._checkError(a);
          } catch (b) {
            this._decoder.flushOutput(), this._error(b);
          }
          this._decoder = null;
        }
      };
      a.prototype._error = function(a) {
        this._state = O.ERROR;
        if (this.onError) {
          this.onError(a);
        }
      };
      a.prototype._checkError = function(a) {
        var b;
        a === N ? b = "LZMA decoding error" : a === u ? b = "Decoding is not complete" : a === M ? void 0 !== this._decoder.unpackSize && this._decoder.unpackSize !== this._outStream.processed && (b = "Finished with end marker before than specified size") : b = "Internal LZMA Error";
        b && this._error(b);
      };
      return a;
    }();
    g.LzmaDecoder = l;
    var Q = f.StringUtilities.utf8decode, pa = f.StringUtilities.utf8encode, w = f.NumberUtilities.clamp, S = function() {
      return function(a, b, k) {
        this.buffer = a;
        this.length = b;
        this.littleEndian = k;
      };
    }();
    g.PlainObjectDataBuffer = S;
    for (var T = new Uint32Array(33), l = 1, Y = 0;32 >= l;l++) {
      T[l] = Y = Y << 1 | 1;
    }
    var P;
    (function(a) {
      a[a.U8 = 1] = "U8";
      a[a.I32 = 2] = "I32";
      a[a.F32 = 4] = "F32";
    })(P || (P = {}));
    l = function() {
      function a(b) {
        void 0 === b && (b = a.INITIAL_SIZE);
        this._buffer || (this._buffer = new ArrayBuffer(b), this._position = this._length = 0, this._resetViews(), this._littleEndian = a._nativeLittleEndian, this._bitLength = this._bitBuffer = 0);
      }
      a.FromArrayBuffer = function(b, k) {
        void 0 === k && (k = -1);
        var m = Object.create(a.prototype);
        m._buffer = b;
        m._length = -1 === k ? b.byteLength : k;
        m._position = 0;
        m._resetViews();
        m._littleEndian = a._nativeLittleEndian;
        m._bitBuffer = 0;
        m._bitLength = 0;
        return m;
      };
      a.FromPlainObject = function(b) {
        var k = a.FromArrayBuffer(b.buffer, b.length);
        k._littleEndian = b.littleEndian;
        return k;
      };
      a.prototype.toPlainObject = function() {
        return new S(this._buffer, this._length, this._littleEndian);
      };
      a.prototype.clone = function() {
        var b = a.FromArrayBuffer((new Uint8Array(this._u8)).buffer, this._length);
        b._position = this._position;
        b._littleEndian = this._littleEndian;
        b._bitBuffer = this._bitBuffer;
        b._bitLength = this._bitLength;
        return b;
      };
      a.prototype._resetViews = function() {
        this._u8 = new Uint8Array(this._buffer);
        this._f32 = this._i32 = null;
      };
      a.prototype._requestViews = function(a) {
        0 === (this._buffer.byteLength & 3) && (null === this._i32 && a & P.I32 && (this._i32 = new Int32Array(this._buffer)), null === this._f32 && a & P.F32 && (this._f32 = new Float32Array(this._buffer)));
      };
      a.prototype.getBytes = function() {
        return new Uint8Array(this._buffer, 0, this._length);
      };
      a.prototype._ensureCapacity = function(b) {
        var k = this._buffer;
        if (!(k.byteLength >= b)) {
          for (var m = Math.max(k.byteLength, 1);m < b;) {
            m *= 2;
          }
          4294967295 < m && this.sec.throwError("RangeError", Errors.ParamRangeError);
          m = a._arrayBufferPool.acquire(m);
          b = this._u8;
          this._buffer = m;
          this._resetViews();
          this._u8.set(b);
          m = this._u8;
          for (b = b.length;b < m.length;b++) {
            m[b] = 0;
          }
          a._arrayBufferPool.release(k);
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
      a.prototype.readBytes = function(a, b, k) {
        var m = this._position;
        b >>>= 0;
        k >>>= 0;
        0 === k && (k = this._length - m);
        m + k > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        a.length < b + k && (a._ensureCapacity(b + k), a.length = b + k);
        a._u8.set(new Uint8Array(this._buffer, m, k), b);
        this._position += k;
      };
      a.prototype.readShort = function() {
        return this.readUnsignedShort() << 16 >> 16;
      };
      a.prototype.readUnsignedShort = function() {
        var a = this._u8, b = this._position;
        b + 2 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var k = a[b + 0], a = a[b + 1];
        this._position = b + 2;
        return this._littleEndian ? a << 8 | k : k << 8 | a;
      };
      a.prototype.readInt = function() {
        var a = this._u8, b = this._position;
        b + 4 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var k = a[b + 0], m = a[b + 1], e = a[b + 2], a = a[b + 3];
        this._position = b + 4;
        return this._littleEndian ? a << 24 | e << 16 | m << 8 | k : k << 24 | m << 16 | e << 8 | a;
      };
      a.prototype.readUnsignedInt = function() {
        return this.readInt() >>> 0;
      };
      a.prototype.readFloat = function() {
        var a = this._position;
        a + 4 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        this._position = a + 4;
        this._requestViews(P.F32);
        if (this._littleEndian && 0 === (a & 3) && this._f32) {
          return this._f32[a >> 2];
        }
        var b = this._u8, k = f.IntegerUtilities.u8;
        this._littleEndian ? (k[0] = b[a + 0], k[1] = b[a + 1], k[2] = b[a + 2], k[3] = b[a + 3]) : (k[3] = b[a + 0], k[2] = b[a + 1], k[1] = b[a + 2], k[0] = b[a + 3]);
        return f.IntegerUtilities.f32[0];
      };
      a.prototype.readDouble = function() {
        var a = this._u8, b = this._position;
        b + 8 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var k = f.IntegerUtilities.u8;
        this._littleEndian ? (k[0] = a[b + 0], k[1] = a[b + 1], k[2] = a[b + 2], k[3] = a[b + 3], k[4] = a[b + 4], k[5] = a[b + 5], k[6] = a[b + 6], k[7] = a[b + 7]) : (k[0] = a[b + 7], k[1] = a[b + 6], k[2] = a[b + 5], k[3] = a[b + 4], k[4] = a[b + 3], k[5] = a[b + 2], k[6] = a[b + 1], k[7] = a[b + 0]);
        this._position = b + 8;
        return f.IntegerUtilities.f64[0];
      };
      a.prototype.writeBoolean = function(a) {
        this.writeByte(a ? 1 : 0);
      };
      a.prototype.writeByte = function(a) {
        var b = this._position + 1;
        this._ensureCapacity(b);
        this._u8[this._position++] = a;
        b > this._length && (this._length = b);
      };
      a.prototype.writeUnsignedByte = function(a) {
        var b = this._position + 1;
        this._ensureCapacity(b);
        this._u8[this._position++] = a;
        b > this._length && (this._length = b);
      };
      a.prototype.writeRawBytes = function(a) {
        var b = this._position + a.length;
        this._ensureCapacity(b);
        this._u8.set(a, this._position);
        this._position = b;
        b > this._length && (this._length = b);
      };
      a.prototype.writeBytes = function(a, b, k) {
        f.isNullOrUndefined(a) && this.sec.throwError("TypeError", Errors.NullPointerError, "bytes");
        b >>>= 0;
        k >>>= 0;
        2 > arguments.length && (b = 0);
        3 > arguments.length && (k = 0);
        b === w(b, 0, a.length) && b + k === w(b + k, 0, a.length) || this.sec.throwError("RangeError", Errors.ParamRangeError);
        0 === k && (k = a.length - b);
        this.writeRawBytes(new Int8Array(a._buffer, b, k));
      };
      a.prototype.writeShort = function(a) {
        this.writeUnsignedShort(a);
      };
      a.prototype.writeUnsignedShort = function(a) {
        var b = this._position;
        this._ensureCapacity(b + 2);
        var k = this._u8;
        this._littleEndian ? (k[b + 0] = a, k[b + 1] = a >> 8) : (k[b + 0] = a >> 8, k[b + 1] = a);
        this._position = b += 2;
        b > this._length && (this._length = b);
      };
      a.prototype.writeInt = function(a) {
        this.writeUnsignedInt(a);
      };
      a.prototype.write2Ints = function(a, b) {
        this.write2UnsignedInts(a, b);
      };
      a.prototype.write4Ints = function(a, b, k, m) {
        this.write4UnsignedInts(a, b, k, m);
      };
      a.prototype.writeUnsignedInt = function(b) {
        var k = this._position;
        this._ensureCapacity(k + 4);
        this._requestViews(P.I32);
        if (this._littleEndian === a._nativeLittleEndian && 0 === (k & 3) && this._i32) {
          this._i32[k >> 2] = b;
        } else {
          var m = this._u8;
          this._littleEndian ? (m[k + 0] = b, m[k + 1] = b >> 8, m[k + 2] = b >> 16, m[k + 3] = b >> 24) : (m[k + 0] = b >> 24, m[k + 1] = b >> 16, m[k + 2] = b >> 8, m[k + 3] = b);
        }
        this._position = k += 4;
        k > this._length && (this._length = k);
      };
      a.prototype.write2UnsignedInts = function(b, k) {
        var m = this._position;
        this._ensureCapacity(m + 8);
        this._requestViews(P.I32);
        this._littleEndian === a._nativeLittleEndian && 0 === (m & 3) && this._i32 ? (this._i32[(m >> 2) + 0] = b, this._i32[(m >> 2) + 1] = k, this._position = m += 8, m > this._length && (this._length = m)) : (this.writeUnsignedInt(b), this.writeUnsignedInt(k));
      };
      a.prototype.write4UnsignedInts = function(b, k, m, e) {
        var c = this._position;
        this._ensureCapacity(c + 16);
        this._requestViews(P.I32);
        this._littleEndian === a._nativeLittleEndian && 0 === (c & 3) && this._i32 ? (this._i32[(c >> 2) + 0] = b, this._i32[(c >> 2) + 1] = k, this._i32[(c >> 2) + 2] = m, this._i32[(c >> 2) + 3] = e, this._position = c += 16, c > this._length && (this._length = c)) : (this.writeUnsignedInt(b), this.writeUnsignedInt(k), this.writeUnsignedInt(m), this.writeUnsignedInt(e));
      };
      a.prototype.writeFloat = function(b) {
        var k = this._position;
        this._ensureCapacity(k + 4);
        this._requestViews(P.F32);
        if (this._littleEndian === a._nativeLittleEndian && 0 === (k & 3) && this._f32) {
          this._f32[k >> 2] = b;
        } else {
          var m = this._u8;
          f.IntegerUtilities.f32[0] = b;
          b = f.IntegerUtilities.u8;
          this._littleEndian ? (m[k + 0] = b[0], m[k + 1] = b[1], m[k + 2] = b[2], m[k + 3] = b[3]) : (m[k + 0] = b[3], m[k + 1] = b[2], m[k + 2] = b[1], m[k + 3] = b[0]);
        }
        this._position = k += 4;
        k > this._length && (this._length = k);
      };
      a.prototype.write2Floats = function(b, k) {
        var m = this._position;
        this._ensureCapacity(m + 8);
        this._requestViews(P.F32);
        this._littleEndian === a._nativeLittleEndian && 0 === (m & 3) && this._f32 ? (this._f32[(m >> 2) + 0] = b, this._f32[(m >> 2) + 1] = k, this._position = m += 8, m > this._length && (this._length = m)) : (this.writeFloat(b), this.writeFloat(k));
      };
      a.prototype.write6Floats = function(b, k, m, e, c, n) {
        var t = this._position;
        this._ensureCapacity(t + 24);
        this._requestViews(P.F32);
        this._littleEndian === a._nativeLittleEndian && 0 === (t & 3) && this._f32 ? (this._f32[(t >> 2) + 0] = b, this._f32[(t >> 2) + 1] = k, this._f32[(t >> 2) + 2] = m, this._f32[(t >> 2) + 3] = e, this._f32[(t >> 2) + 4] = c, this._f32[(t >> 2) + 5] = n, this._position = t += 24, t > this._length && (this._length = t)) : (this.writeFloat(b), this.writeFloat(k), this.writeFloat(m), this.writeFloat(e), this.writeFloat(c), this.writeFloat(n));
      };
      a.prototype.writeDouble = function(a) {
        var b = this._position;
        this._ensureCapacity(b + 8);
        var k = this._u8;
        f.IntegerUtilities.f64[0] = a;
        a = f.IntegerUtilities.u8;
        this._littleEndian ? (k[b + 0] = a[0], k[b + 1] = a[1], k[b + 2] = a[2], k[b + 3] = a[3], k[b + 4] = a[4], k[b + 5] = a[5], k[b + 6] = a[6], k[b + 7] = a[7]) : (k[b + 0] = a[7], k[b + 1] = a[6], k[b + 2] = a[5], k[b + 3] = a[4], k[b + 4] = a[3], k[b + 5] = a[2], k[b + 6] = a[1], k[b + 7] = a[0]);
        this._position = b += 8;
        b > this._length && (this._length = b);
      };
      a.prototype.readRawBytes = function() {
        return new Int8Array(this._buffer, 0, this._length);
      };
      a.prototype.writeUTF = function(a) {
        a = p(a);
        a = Q(a);
        this.writeShort(a.length);
        this.writeRawBytes(a);
      };
      a.prototype.writeUTFBytes = function(a) {
        a = p(a);
        a = Q(a);
        this.writeRawBytes(a);
      };
      a.prototype.readUTF = function() {
        return this.readUTFBytes(this.readShort());
      };
      a.prototype.readUTFBytes = function(a) {
        a >>>= 0;
        var b = this._position;
        b + a > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        this._position += a;
        return pa(new Int8Array(this._buffer, b, a));
      };
      Object.defineProperty(a.prototype, "length", {get:function() {
        return this._length;
      }, set:function(a) {
        a >>>= 0;
        a > this._buffer.byteLength && this._ensureCapacity(a);
        this._length = a;
        this._position = w(this._position, 0, this._length);
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
        this._requestViews(P.I32);
        return this._i32;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "objectEncoding", {get:function() {
        return this._objectEncoding;
      }, set:function(a) {
        this._objectEncoding = a >>> 0;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "endian", {get:function() {
        return this._littleEndian ? "littleEndian" : "bigEndian";
      }, set:function(b) {
        b = p(b);
        this._littleEndian = "auto" === b ? a._nativeLittleEndian : "littleEndian" === b;
      }, enumerable:!0, configurable:!0});
      a.prototype.toString = function() {
        return pa(new Int8Array(this._buffer, 0, this._length));
      };
      a.prototype.toBlob = function(a) {
        return new Blob([new Int8Array(this._buffer, this._position, this._length)], {type:a});
      };
      a.prototype.writeMultiByte = function(a, b) {
        p(a);
        p(b);
      };
      a.prototype.readMultiByte = function(a, b) {
        p(b);
      };
      a.prototype.getValue = function(a) {
        a |= 0;
        return a >= this._length ? void 0 : this._u8[a];
      };
      a.prototype.setValue = function(a, b) {
        a |= 0;
        var k = a + 1;
        this._ensureCapacity(k);
        this._u8[a] = b;
        k > this._length && (this._length = k);
      };
      a.prototype.readFixed = function() {
        return this.readInt() / 65536;
      };
      a.prototype.readFixed8 = function() {
        return this.readShort() / 256;
      };
      a.prototype.readFloat16 = function() {
        var a = this.readUnsignedShort(), b = a >> 15 ? -1 : 1, k = (a & 31744) >> 10, a = a & 1023;
        return k ? 31 === k ? a ? NaN : Infinity * b : b * Math.pow(2, k - 15) * (1 + a / 1024) : b * Math.pow(2, -14) * (a / 1024);
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
        for (var b = this._bitBuffer, k = this._bitLength;a > k;) {
          b = b << 8 | this.readUnsignedByte(), k += 8;
        }
        k -= a;
        a = b >>> k & T[a];
        this._bitBuffer = b;
        this._bitLength = k;
        return a;
      };
      a.prototype.readFixedBits = function(a) {
        return this.readBits(a) / 65536;
      };
      a.prototype.readString = function(a) {
        var b = this._position;
        if (a) {
          b + a > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError), this._position += a;
        } else {
          a = 0;
          for (var k = b;k < this._length && this._u8[k];k++) {
            a++;
          }
          this._position += a + 1;
        }
        return pa(new Int8Array(this._buffer, b, a));
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
      a.prototype.compress = function(b) {
        b = 0 === arguments.length ? "zlib" : p(b);
        var k;
        switch(b) {
          case "zlib":
            k = new g.Deflate(!0);
            break;
          case "deflate":
            k = new g.Deflate(!1);
            break;
          default:
            return;
        }
        var m = new a;
        k.onData = m.writeRawBytes.bind(m);
        k.push(this._u8.subarray(0, this._length));
        k.close();
        this._ensureCapacity(m._u8.length);
        this._u8.set(m._u8);
        this.length = m.length;
        this._position = 0;
      };
      a.prototype.uncompress = function(b) {
        b = 0 === arguments.length ? "zlib" : p(b);
        var k;
        switch(b) {
          case "zlib":
            k = g.Inflate.create(!0);
            break;
          case "deflate":
            k = g.Inflate.create(!1);
            break;
          case "lzma":
            k = new g.LzmaDecoder(!1);
            break;
          default:
            return;
        }
        var m = new a, e;
        k.onData = m.writeRawBytes.bind(m);
        k.onError = function(a) {
          return e = a;
        };
        k.push(this._u8.subarray(0, this._length));
        e && this.sec.throwError("IOError", Errors.CompressedDataError);
        k.close();
        this._ensureCapacity(m._u8.length);
        this._u8.set(m._u8);
        this.length = m.length;
        this._position = 0;
      };
      a._nativeLittleEndian = 1 === (new Int8Array((new Int32Array([1])).buffer))[0];
      a.INITIAL_SIZE = 128;
      a._arrayBufferPool = new f.ArrayBufferPool;
      return a;
    }();
    g.DataBuffer = l;
  })(f.ArrayUtilities || (f.ArrayUtilities = {}));
  var h = f.ArrayUtilities.DataBuffer, u = f.ArrayUtilities.ensureTypedArrayCapacity, r = function() {
    return function(g, d, b, e, c, p, a, l, f, h, r) {
      this.commands = g;
      this.commandsPosition = d;
      this.coordinates = b;
      this.morphCoordinates = e;
      this.coordinatesPosition = c;
      this.styles = p;
      this.stylesLength = a;
      this.morphStyles = l;
      this.morphStylesLength = f;
      this.hasFills = h;
      this.hasLines = r;
    };
  }();
  f.PlainObjectShapeData = r;
  var w;
  (function(g) {
    g[g.Commands = 32] = "Commands";
    g[g.Coordinates = 128] = "Coordinates";
    g[g.Styles = 16] = "Styles";
  })(w || (w = {}));
  var y = function() {
    function g(d) {
      void 0 === d && (d = !0);
      d && this.clear();
    }
    g.FromPlainObject = function(d) {
      var b = new g(!1);
      b.commands = d.commands;
      b.coordinates = d.coordinates;
      b.morphCoordinates = d.morphCoordinates;
      b.commandsPosition = d.commandsPosition;
      b.coordinatesPosition = d.coordinatesPosition;
      b.styles = h.FromArrayBuffer(d.styles, d.stylesLength);
      b.styles.endian = "auto";
      d.morphStyles && (b.morphStyles = h.FromArrayBuffer(d.morphStyles, d.morphStylesLength), b.morphStyles.endian = "auto");
      b.hasFills = d.hasFills;
      b.hasLines = d.hasLines;
      return b;
    };
    g.prototype.moveTo = function(d, b) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = 9;
      this.coordinates[this.coordinatesPosition++] = d;
      this.coordinates[this.coordinatesPosition++] = b;
    };
    g.prototype.lineTo = function(d, b) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = 10;
      this.coordinates[this.coordinatesPosition++] = d;
      this.coordinates[this.coordinatesPosition++] = b;
    };
    g.prototype.curveTo = function(d, b, e, c) {
      this.ensurePathCapacities(1, 4);
      this.commands[this.commandsPosition++] = 11;
      this.coordinates[this.coordinatesPosition++] = d;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = e;
      this.coordinates[this.coordinatesPosition++] = c;
    };
    g.prototype.cubicCurveTo = function(d, b, e, c, p, a) {
      this.ensurePathCapacities(1, 6);
      this.commands[this.commandsPosition++] = 12;
      this.coordinates[this.coordinatesPosition++] = d;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = e;
      this.coordinates[this.coordinatesPosition++] = c;
      this.coordinates[this.coordinatesPosition++] = p;
      this.coordinates[this.coordinatesPosition++] = a;
    };
    g.prototype.beginFill = function(d) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 1;
      this.styles.writeUnsignedInt(d);
      this.hasFills = !0;
    };
    g.prototype.writeMorphFill = function(d) {
      this.morphStyles.writeUnsignedInt(d);
    };
    g.prototype.endFill = function() {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 4;
    };
    g.prototype.endLine = function() {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 8;
    };
    g.prototype.lineStyle = function(d, b, e, c, p, a, l) {
      this.ensurePathCapacities(2, 0);
      this.commands[this.commandsPosition++] = 5;
      this.coordinates[this.coordinatesPosition++] = d;
      d = this.styles;
      d.writeUnsignedInt(b);
      d.writeBoolean(e);
      d.writeUnsignedByte(c);
      d.writeUnsignedByte(p);
      d.writeUnsignedByte(a);
      d.writeUnsignedByte(l);
      this.hasLines = !0;
    };
    g.prototype.writeMorphLineStyle = function(d, b) {
      this.morphCoordinates[this.coordinatesPosition - 1] = d;
      this.morphStyles.writeUnsignedInt(b);
    };
    g.prototype.beginBitmap = function(d, b, e, c, p) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = d;
      d = this.styles;
      d.writeUnsignedInt(b);
      this._writeStyleMatrix(e, !1);
      d.writeBoolean(c);
      d.writeBoolean(p);
      this.hasFills = !0;
    };
    g.prototype.writeMorphBitmap = function(d) {
      this._writeStyleMatrix(d, !0);
    };
    g.prototype.beginGradient = function(d, b, e, c, p, a, l, g) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = d;
      d = this.styles;
      d.writeUnsignedByte(c);
      d.writeShort(g);
      this._writeStyleMatrix(p, !1);
      c = b.length;
      d.writeByte(c);
      for (p = 0;p < c;p++) {
        d.writeUnsignedByte(e[p]), d.writeUnsignedInt(b[p]);
      }
      d.writeUnsignedByte(a);
      d.writeUnsignedByte(l);
      this.hasFills = !0;
    };
    g.prototype.writeMorphGradient = function(d, b, e) {
      this._writeStyleMatrix(e, !0);
      e = this.morphStyles;
      for (var c = 0;c < d.length;c++) {
        e.writeUnsignedByte(b[c]), e.writeUnsignedInt(d[c]);
      }
    };
    g.prototype.writeCommandAndCoordinates = function(d, b, e) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = d;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = e;
    };
    g.prototype.writeCoordinates = function(d, b) {
      this.ensurePathCapacities(0, 2);
      this.coordinates[this.coordinatesPosition++] = d;
      this.coordinates[this.coordinatesPosition++] = b;
    };
    g.prototype.writeMorphCoordinates = function(d, b) {
      this.morphCoordinates = u(this.morphCoordinates, this.coordinatesPosition);
      this.morphCoordinates[this.coordinatesPosition - 2] = d;
      this.morphCoordinates[this.coordinatesPosition - 1] = b;
    };
    g.prototype.clear = function() {
      this.commandsPosition = this.coordinatesPosition = 0;
      this.commands = new Uint8Array(w.Commands);
      this.coordinates = new Int32Array(w.Coordinates);
      this.styles = new h(w.Styles);
      this.styles.endian = "auto";
      this.hasFills = this.hasLines = !1;
    };
    g.prototype.isEmpty = function() {
      return 0 === this.commandsPosition;
    };
    g.prototype.clone = function() {
      var d = new g(!1);
      d.commands = new Uint8Array(this.commands);
      d.commandsPosition = this.commandsPosition;
      d.coordinates = new Int32Array(this.coordinates);
      d.coordinatesPosition = this.coordinatesPosition;
      d.styles = new h(this.styles.length);
      d.styles.writeRawBytes(this.styles.bytes.subarray(0, this.styles.length));
      this.morphStyles && (d.morphStyles = new h(this.morphStyles.length), d.morphStyles.writeRawBytes(this.morphStyles.bytes.subarray(0, this.morphStyles.length)));
      d.hasFills = this.hasFills;
      d.hasLines = this.hasLines;
      return d;
    };
    g.prototype.toPlainObject = function() {
      return new r(this.commands, this.commandsPosition, this.coordinates, this.morphCoordinates, this.coordinatesPosition, this.styles.buffer, this.styles.length, this.morphStyles && this.morphStyles.buffer, this.morphStyles ? this.morphStyles.length : 0, this.hasFills, this.hasLines);
    };
    Object.defineProperty(g.prototype, "buffers", {get:function() {
      var d = [this.commands.buffer, this.coordinates.buffer, this.styles.buffer];
      this.morphCoordinates && d.push(this.morphCoordinates.buffer);
      this.morphStyles && d.push(this.morphStyles.buffer);
      return d;
    }, enumerable:!0, configurable:!0});
    g.prototype._writeStyleMatrix = function(d, b) {
      (b ? this.morphStyles : this.styles).write6Floats(d.a, d.b, d.c, d.d, d.tx, d.ty);
    };
    g.prototype.ensurePathCapacities = function(d, b) {
      this.commands = u(this.commands, this.commandsPosition + d);
      this.coordinates = u(this.coordinates, this.coordinatesPosition + b);
    };
    return g;
  }();
  f.ShapeData = y;
  (function(g) {
    (function(d) {
      d.getSwfTagCodeName = function(b) {
        return "SwfTagCode: " + b;
      };
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
        b[b.CODE_DEFINE_VIDEO_STREAM = 60] = "CODE_DEFINE_VIDEO_STREAM";
        b[b.CODE_DEFINE_FONT3 = 75] = "CODE_DEFINE_FONT3";
        b[b.CODE_DEFINE_SHAPE4 = 83] = "CODE_DEFINE_SHAPE4";
        b[b.CODE_DEFINE_MORPH_SHAPE2 = 84] = "CODE_DEFINE_MORPH_SHAPE2";
        b[b.CODE_DEFINE_BINARY_DATA = 87] = "CODE_DEFINE_BINARY_DATA";
        b[b.CODE_DEFINE_BITS_JPEG4 = 90] = "CODE_DEFINE_BITS_JPEG4";
        b[b.CODE_DEFINE_FONT4 = 91] = "CODE_DEFINE_FONT4";
      })(d.DefinitionTags || (d.DefinitionTags = {}));
      (function(b) {
        b[b.CODE_DEFINE_BITS = 6] = "CODE_DEFINE_BITS";
        b[b.CODE_DEFINE_BITS_JPEG2 = 21] = "CODE_DEFINE_BITS_JPEG2";
        b[b.CODE_DEFINE_BITS_JPEG3 = 35] = "CODE_DEFINE_BITS_JPEG3";
        b[b.CODE_DEFINE_BITS_JPEG4 = 90] = "CODE_DEFINE_BITS_JPEG4";
      })(d.ImageDefinitionTags || (d.ImageDefinitionTags = {}));
      (function(b) {
        b[b.CODE_DEFINE_FONT = 10] = "CODE_DEFINE_FONT";
        b[b.CODE_DEFINE_FONT2 = 48] = "CODE_DEFINE_FONT2";
        b[b.CODE_DEFINE_FONT3 = 75] = "CODE_DEFINE_FONT3";
        b[b.CODE_DEFINE_FONT4 = 91] = "CODE_DEFINE_FONT4";
      })(d.FontDefinitionTags || (d.FontDefinitionTags = {}));
      (function(b) {
        b[b.CODE_PLACE_OBJECT = 4] = "CODE_PLACE_OBJECT";
        b[b.CODE_PLACE_OBJECT2 = 26] = "CODE_PLACE_OBJECT2";
        b[b.CODE_PLACE_OBJECT3 = 70] = "CODE_PLACE_OBJECT3";
        b[b.CODE_REMOVE_OBJECT = 5] = "CODE_REMOVE_OBJECT";
        b[b.CODE_REMOVE_OBJECT2 = 28] = "CODE_REMOVE_OBJECT2";
        b[b.CODE_START_SOUND = 15] = "CODE_START_SOUND";
        b[b.CODE_START_SOUND2 = 89] = "CODE_START_SOUND2";
        b[b.CODE_VIDEO_FRAME = 61] = "CODE_VIDEO_FRAME";
      })(d.ControlTags || (d.ControlTags = {}));
    })(g.Parser || (g.Parser = {}));
  })(f.SWF || (f.SWF = {}));
  var g = f.Debug.unexpected, y = function() {
    function f(d, b, e, c) {
      this.url = d;
      this.method = b;
      this.mimeType = e;
      this.data = c;
    }
    f.prototype.readAll = function(d, b) {
      var e = this.url, c = this.xhr = new XMLHttpRequest({mozSystem:!0});
      c.open(this.method || "GET", this.url, !0);
      c.responseType = "arraybuffer";
      d && (c.onprogress = function(b) {
        d(c.response, b.loaded, b.total);
      });
      c.onreadystatechange = function(d) {
        4 === c.readyState && (200 !== c.status && 0 !== c.status || null === c.response ? (g("Path: " + e + " not found."), b(null, c.statusText)) : b(c.response));
      };
      this.mimeType && c.setRequestHeader("Content-Type", this.mimeType);
      c.send(this.data || null);
    };
    f.prototype.readChunked = function(d, b, e, c, p, a) {
      if (0 >= d) {
        this.readAsync(b, e, c, p, a);
      } else {
        var l = 0, g = new Uint8Array(d), f = 0, h;
        this.readAsync(function(a, e) {
          h = e.total;
          for (var c = a.length, k = 0;l + c >= d;) {
            var t = d - l;
            g.set(a.subarray(k, k + t), l);
            k += t;
            c -= t;
            f += d;
            b(g, {loaded:f, total:h});
            l = 0;
          }
          g.set(a.subarray(k), l);
          l += c;
        }, e, c, function() {
          0 < l && (f += l, b(g.subarray(0, l), {loaded:f, total:h}), l = 0);
          p && p();
        }, a);
      }
    };
    f.prototype.readAsync = function(d, b, e, c, p) {
      var a = this.xhr = new XMLHttpRequest({mozSystem:!0}), l = this.url, g = 0, f = 0;
      a.open(this.method || "GET", l, !0);
      a.responseType = "moz-chunked-arraybuffer";
      var h = "moz-chunked-arraybuffer" !== a.responseType;
      h && (a.responseType = "arraybuffer");
      a.onprogress = function(b) {
        h || (g = b.loaded, f = b.total, b = new Uint8Array(a.response), g = Math.max(g, b.byteLength), f = Math.max(f, b.byteLength), d(b, {loaded:g, total:f}));
      };
      a.onreadystatechange = function(e) {
        2 === a.readyState && p && p(l, a.status, a.getAllResponseHeaders());
        4 === a.readyState && (200 !== a.status && 0 !== a.status || null === a.response && (0 === f || g !== f) ? b(a.statusText) : h && (e = a.response, d(new Uint8Array(e), {loaded:e.byteLength, total:e.byteLength})));
      };
      a.onload = function() {
        c && c();
      };
      this.mimeType && a.setRequestHeader("Content-Type", this.mimeType);
      a.send(this.data || null);
      e && e();
    };
    f.prototype.abort = function() {
      this.xhr && (this.xhr.abort(), this.xhr = null);
    };
    return f;
  }();
  f.BinaryFileReader = y;
  y = function() {
    function g() {
      this.isAS3TraceOn = !0;
      this._startTime = Date.now();
    }
    Object.defineProperty(g.prototype, "currentTimestamp", {get:function() {
      return Date.now() - this._startTime;
    }, enumerable:!0, configurable:!0});
    g.prototype._writeLine = function(d) {
    };
    g.prototype.writeAS3Trace = function(d) {
    };
    return g;
  }();
  f.FlashLog = y;
  f.flashlog = null;
  (function(g) {
    (function(b) {
      b[b.Blur = 0] = "Blur";
      b[b.DropShadow = 1] = "DropShadow";
      b[b.ColorMatrix = 2] = "ColorMatrix";
    })(g.FilterType || (g.FilterType = {}));
    g.MouseEventNames = "click dblclick mousedown mousemove mouseup mouseover mouseout".split(" ");
    g.KeyboardEventNames = ["keydown", "keypress", "keyup"];
    var d = function() {
      function b(b, c) {
        this.window = b;
        this.target = c;
      }
      Object.defineProperty(b.prototype, "onAsyncMessage", {set:function(b) {
        this.window.addEventListener("message", function(c) {
          Promise.resolve(c.data).then(function(c) {
            b(c);
          });
        });
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(b.prototype, "onSyncMessage", {set:function(b) {
        this.window.addEventListener("syncmessage", function(c) {
          c = c.detail;
          c.result = b(c.msg);
        });
      }, enumerable:!0, configurable:!0});
      b.prototype.postAsyncMessage = function(b, c) {
        this.target.postMessage(b, "*", c);
      };
      b.prototype.sendSyncMessage = function(b, c) {
        var d = this.target.document.createEvent("CustomEvent"), a = {msg:b, result:void 0};
        d.initCustomEvent("syncmessage", !1, !1, a);
        this.target.dispatchEvent(d);
        return a.result;
      };
      return b;
    }();
    g.WindowTransportPeer = d;
    d = function() {
      function b() {
      }
      Object.defineProperty(b.prototype, "onAsyncMessage", {set:function(b) {
        ShumwayCom.setAsyncMessageCallback(b);
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(b.prototype, "onSyncMessage", {set:function(b) {
        ShumwayCom.setSyncMessageCallback(b);
      }, enumerable:!0, configurable:!0});
      b.prototype.postAsyncMessage = function(b, c) {
        ShumwayCom.postAsyncMessage(b);
      };
      b.prototype.sendSyncMessage = function(b, c) {
        return ShumwayCom.sendSyncMessage(b);
      };
      return b;
    }();
    g.ShumwayComTransportPeer = d;
  })(f.Remoting || (f.Remoting = {}));
})(Shumway || (Shumway = {}));
var throwError, Errors;
(function(f) {
  (function(f) {
    (function(f) {
      var h = function() {
        function f() {
        }
        f.toRGBA = function(g, f, d, b) {
          void 0 === b && (b = 1);
          return "rgba(" + g + "," + f + "," + d + "," + b + ")";
        };
        return f;
      }();
      f.UI = h;
      var w = function() {
        function f() {
        }
        f.prototype.tabToolbar = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(37, 44, 51, g);
        };
        f.prototype.toolbars = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(52, 60, 69, g);
        };
        f.prototype.selectionBackground = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(29, 79, 115, g);
        };
        f.prototype.selectionText = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(245, 247, 250, g);
        };
        f.prototype.splitters = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(0, 0, 0, g);
        };
        f.prototype.bodyBackground = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(17, 19, 21, g);
        };
        f.prototype.sidebarBackground = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(24, 29, 32, g);
        };
        f.prototype.attentionBackground = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(161, 134, 80, g);
        };
        f.prototype.bodyText = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(143, 161, 178, g);
        };
        f.prototype.foregroundTextGrey = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(182, 186, 191, g);
        };
        f.prototype.contentTextHighContrast = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(169, 186, 203, g);
        };
        f.prototype.contentTextGrey = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(143, 161, 178, g);
        };
        f.prototype.contentTextDarkGrey = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(95, 115, 135, g);
        };
        f.prototype.blueHighlight = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(70, 175, 227, g);
        };
        f.prototype.purpleHighlight = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(107, 122, 187, g);
        };
        f.prototype.pinkHighlight = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(223, 128, 255, g);
        };
        f.prototype.redHighlight = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(235, 83, 104, g);
        };
        f.prototype.orangeHighlight = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(217, 102, 41, g);
        };
        f.prototype.lightOrangeHighlight = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(217, 155, 40, g);
        };
        f.prototype.greenHighlight = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(112, 191, 83, g);
        };
        f.prototype.blueGreyHighlight = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(94, 136, 176, g);
        };
        return f;
      }();
      f.UIThemeDark = w;
      w = function() {
        function f() {
        }
        f.prototype.tabToolbar = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(235, 236, 237, g);
        };
        f.prototype.toolbars = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(240, 241, 242, g);
        };
        f.prototype.selectionBackground = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(76, 158, 217, g);
        };
        f.prototype.selectionText = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(245, 247, 250, g);
        };
        f.prototype.splitters = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(170, 170, 170, g);
        };
        f.prototype.bodyBackground = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(252, 252, 252, g);
        };
        f.prototype.sidebarBackground = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(247, 247, 247, g);
        };
        f.prototype.attentionBackground = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(161, 134, 80, g);
        };
        f.prototype.bodyText = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(24, 25, 26, g);
        };
        f.prototype.foregroundTextGrey = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(88, 89, 89, g);
        };
        f.prototype.contentTextHighContrast = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(41, 46, 51, g);
        };
        f.prototype.contentTextGrey = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(143, 161, 178, g);
        };
        f.prototype.contentTextDarkGrey = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(102, 115, 128, g);
        };
        f.prototype.blueHighlight = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(0, 136, 204, g);
        };
        f.prototype.purpleHighlight = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(91, 95, 255, g);
        };
        f.prototype.pinkHighlight = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(184, 46, 229, g);
        };
        f.prototype.redHighlight = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(237, 38, 85, g);
        };
        f.prototype.orangeHighlight = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(241, 60, 0, g);
        };
        f.prototype.lightOrangeHighlight = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(217, 126, 0, g);
        };
        f.prototype.greenHighlight = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(44, 187, 15, g);
        };
        f.prototype.blueGreyHighlight = function(g) {
          void 0 === g && (g = 1);
          return h.toRGBA(95, 136, 176, g);
        };
        return f;
      }();
      f.UIThemeLight = w;
    })(f.Theme || (f.Theme = {}));
    (function(f) {
      var h = function() {
        function f(h, g) {
          this._buffers = h || [];
          this._snapshots = [];
          this._windowStart = this._startTime = g;
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
          for (var g = 0, h = this.snapshotCount;g < h;g++) {
            f(this._snapshots[g], g);
          }
        };
        f.prototype.createSnapshots = function() {
          var f = Number.MIN_VALUE, g = 0;
          for (this._snapshots = [];0 < this._buffers.length;) {
            var h = this._buffers.shift().createSnapshot();
            h && (f < h.endTime && (f = h.endTime), g < h.maxDepth && (g = h.maxDepth), this._snapshots.push(h));
          }
          this._windowEnd = this._endTime = f;
          this._maxDepth = g;
        };
        f.prototype.setWindow = function(f, g) {
          if (f > g) {
            var h = f;
            f = g;
            g = h;
          }
          h = Math.min(g - f, this.totalTime);
          f < this._startTime ? (f = this._startTime, g = this._startTime + h) : g > this._endTime && (f = this._endTime - h, g = this._endTime);
          this._windowStart = f;
          this._windowEnd = g;
        };
        f.prototype.moveWindowTo = function(f) {
          this.setWindow(f - this.windowLength / 2, f + this.windowLength / 2);
        };
        return f;
      }();
      f.Profile = h;
    })(f.Profiler || (f.Profiler = {}));
  })(f.Tools || (f.Tools = {}));
})(Shumway || (Shumway = {}));
__extends = this && this.__extends || function(f, h) {
  function u() {
    this.constructor = f;
  }
  for (var r in h) {
    h.hasOwnProperty(r) && (f[r] = h[r]);
  }
  u.prototype = h.prototype;
  f.prototype = new u;
};
(function(f) {
  (function(h) {
    (function(u) {
      var r = function() {
        return function(d) {
          this.kind = d;
          this.totalTime = this.selfTime = this.count = 0;
        };
      }();
      u.TimelineFrameStatistics = r;
      var w = function() {
        function d(b, e, c, d, a, l) {
          this.parent = b;
          this.kind = e;
          this.startData = c;
          this.endData = d;
          this.startTime = a;
          this.endTime = l;
          this.maxDepth = 0;
        }
        Object.defineProperty(d.prototype, "totalTime", {get:function() {
          return this.endTime - this.startTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(d.prototype, "selfTime", {get:function() {
          var b = this.totalTime;
          if (this.children) {
            for (var e = 0, c = this.children.length;e < c;e++) {
              var d = this.children[e], b = b - (d.endTime - d.startTime)
            }
          }
          return b;
        }, enumerable:!0, configurable:!0});
        d.prototype.getChildIndex = function(b) {
          for (var e = this.children, c = 0;c < e.length;c++) {
            if (e[c].endTime > b) {
              return c;
            }
          }
          return 0;
        };
        d.prototype.getChildRange = function(b, e) {
          if (this.children && b <= this.endTime && e >= this.startTime && e >= b) {
            var c = this._getNearestChild(b), d = this._getNearestChildReverse(e);
            if (c <= d) {
              return b = this.children[c].startTime, e = this.children[d].endTime, {startIndex:c, endIndex:d, startTime:b, endTime:e, totalTime:e - b};
            }
          }
          return null;
        };
        d.prototype._getNearestChild = function(b) {
          var e = this.children;
          if (e && e.length) {
            if (b <= e[0].endTime) {
              return 0;
            }
            for (var c, d = 0, a = e.length - 1;a > d;) {
              c = (d + a) / 2 | 0;
              var l = e[c];
              if (b >= l.startTime && b <= l.endTime) {
                return c;
              }
              b > l.endTime ? d = c + 1 : a = c;
            }
            return Math.ceil((d + a) / 2);
          }
          return 0;
        };
        d.prototype._getNearestChildReverse = function(b) {
          var e = this.children;
          if (e && e.length) {
            var c = e.length - 1;
            if (b >= e[c].startTime) {
              return c;
            }
            for (var d, a = 0;c > a;) {
              d = Math.ceil((a + c) / 2);
              var l = e[d];
              if (b >= l.startTime && b <= l.endTime) {
                return d;
              }
              b > l.endTime ? a = d : c = d - 1;
            }
            return (a + c) / 2 | 0;
          }
          return 0;
        };
        d.prototype.query = function(b) {
          if (b < this.startTime || b > this.endTime) {
            return null;
          }
          var e = this.children;
          if (e && 0 < e.length) {
            for (var c, d = 0, a = e.length - 1;a > d;) {
              var l = (d + a) / 2 | 0;
              c = e[l];
              if (b >= c.startTime && b <= c.endTime) {
                return c.query(b);
              }
              b > c.endTime ? d = l + 1 : a = l;
            }
            c = e[a];
            if (b >= c.startTime && b <= c.endTime) {
              return c.query(b);
            }
          }
          return this;
        };
        d.prototype.queryNext = function(b) {
          for (var e = this;b > e.endTime;) {
            if (e.parent) {
              e = e.parent;
            } else {
              break;
            }
          }
          return e.query(b);
        };
        d.prototype.getDepth = function() {
          for (var b = 0, e = this;e;) {
            b++, e = e.parent;
          }
          return b;
        };
        d.prototype.calculateStatistics = function() {
          function b(c) {
            if (c.kind) {
              var d = e[c.kind.id] || (e[c.kind.id] = new r(c.kind));
              d.count++;
              d.selfTime += c.selfTime;
              d.totalTime += c.totalTime;
            }
            c.children && c.children.forEach(b);
          }
          var e = this.statistics = [];
          b(this);
        };
        d.prototype.trace = function(b) {
          var e = (this.kind ? this.kind.name + ": " : "Profile: ") + (this.endTime - this.startTime).toFixed(2);
          if (this.children && this.children.length) {
            b.enter(e);
            for (e = 0;e < this.children.length;e++) {
              this.children[e].trace(b);
            }
            b.outdent();
          } else {
            b.writeLn(e);
          }
        };
        return d;
      }();
      u.TimelineFrame = w;
      w = function(d) {
        function b(b) {
          d.call(this, null, null, null, null, NaN, NaN);
          this.name = b;
        }
        __extends(b, d);
        return b;
      }(w);
      u.TimelineBufferSnapshot = w;
      w = function() {
        function d(b, e) {
          void 0 === b && (b = "");
          this.name = b || "";
          this._startTime = f.isNullOrUndefined(e) ? jsGlobal.START_TIME : e;
        }
        d.prototype.getKind = function(b) {
          return this._kinds[b];
        };
        Object.defineProperty(d.prototype, "kinds", {get:function() {
          return this._kinds.concat();
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(d.prototype, "depth", {get:function() {
          return this._depth;
        }, enumerable:!0, configurable:!0});
        d.prototype._initialize = function() {
          this._depth = 0;
          this._stack = [];
          this._data = [];
          this._kinds = [];
          this._kindNameMap = Object.create(null);
          this._marks = new f.CircularBuffer(Int32Array, 20);
          this._times = new f.CircularBuffer(Float64Array, 20);
        };
        d.prototype._getKindId = function(b) {
          var e = d.MAX_KINDID;
          if (void 0 === this._kindNameMap[b]) {
            if (e = this._kinds.length, e < d.MAX_KINDID) {
              var c = {id:e, name:b, visible:!0};
              this._kinds.push(c);
              this._kindNameMap[b] = c;
            } else {
              e = d.MAX_KINDID;
            }
          } else {
            e = this._kindNameMap[b].id;
          }
          return e;
        };
        d.prototype._getMark = function(b, e, c) {
          var p = d.MAX_DATAID;
          f.isNullOrUndefined(c) || e === d.MAX_KINDID || (p = this._data.length, p < d.MAX_DATAID ? this._data.push(c) : p = d.MAX_DATAID);
          return b | p << 16 | e;
        };
        d.prototype.enter = function(b, e, c) {
          c = (f.isNullOrUndefined(c) ? performance.now() : c) - this._startTime;
          this._marks || this._initialize();
          this._depth++;
          b = this._getKindId(b);
          this._marks.write(this._getMark(d.ENTER, b, e));
          this._times.write(c);
          this._stack.push(b);
        };
        d.prototype.leave = function(b, e, c) {
          c = (f.isNullOrUndefined(c) ? performance.now() : c) - this._startTime;
          var p = this._stack.pop();
          b && (p = this._getKindId(b));
          this._marks.write(this._getMark(d.LEAVE, p, e));
          this._times.write(c);
          this._depth--;
        };
        d.prototype.count = function(b, e, c) {
        };
        d.prototype.createSnapshot = function(b) {
          void 0 === b && (b = Number.MAX_VALUE);
          if (!this._marks) {
            return null;
          }
          var e = this._times, c = this._kinds, p = this._data, a = new u.TimelineBufferSnapshot(this.name), l = [a], g = 0;
          this._marks || this._initialize();
          this._marks.forEachInReverse(function(a, h) {
            var q = p[a >>> 16 & d.MAX_DATAID], x = c[a & d.MAX_KINDID];
            if (f.isNullOrUndefined(x) || x.visible) {
              var n = a & 2147483648, k = e.get(h), t = l.length;
              if (n === d.LEAVE) {
                if (1 === t && (g++, g > b)) {
                  return !0;
                }
                l.push(new u.TimelineFrame(l[t - 1], x, null, q, NaN, k));
              } else {
                if (n === d.ENTER) {
                  if (x = l.pop(), n = l[l.length - 1]) {
                    for (n.children ? n.children.unshift(x) : n.children = [x], n = l.length, x.depth = n, x.startData = q, x.startTime = k;x;) {
                      if (x.maxDepth < n) {
                        x.maxDepth = n, x = x.parent;
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
          a.children && a.children.length && (a.startTime = a.children[0].startTime, a.endTime = a.children[a.children.length - 1].endTime);
          return a;
        };
        d.prototype.reset = function(b) {
          this._startTime = f.isNullOrUndefined(b) ? performance.now() : b;
          this._marks ? (this._depth = 0, this._data = [], this._marks.reset(), this._times.reset()) : this._initialize();
        };
        d.FromFirefoxProfile = function(b, e) {
          for (var c = b.profile.threads[0].samples, p = new d(e, c[0].time), a = [], l, f = 0;f < c.length;f++) {
            l = c[f];
            var g = l.time, h = l.frames, q = 0;
            for (l = Math.min(h.length, a.length);q < l && h[q].location === a[q].location;) {
              q++;
            }
            for (var x = a.length - q, n = 0;n < x;n++) {
              l = a.pop(), p.leave(l.location, null, g);
            }
            for (;q < h.length;) {
              l = h[q++], p.enter(l.location, null, g);
            }
            a = h;
          }
          for (;l = a.pop();) {
            p.leave(l.location, null, g);
          }
          return p;
        };
        d.FromChromeProfile = function(b, e) {
          var c = b.timestamps, p = b.samples, a = new d(e, c[0] / 1E3), l = [], f = {}, g;
          d._resolveIds(b.head, f);
          for (var h = 0;h < c.length;h++) {
            var q = c[h] / 1E3, x = [];
            for (g = f[p[h]];g;) {
              x.unshift(g), g = g.parent;
            }
            var n = 0;
            for (g = Math.min(x.length, l.length);n < g && x[n] === l[n];) {
              n++;
            }
            for (var k = l.length - n, t = 0;t < k;t++) {
              g = l.pop(), a.leave(g.functionName, null, q);
            }
            for (;n < x.length;) {
              g = x[n++], a.enter(g.functionName, null, q);
            }
            l = x;
          }
          for (;g = l.pop();) {
            a.leave(g.functionName, null, q);
          }
          return a;
        };
        d._resolveIds = function(b, e) {
          e[b.id] = b;
          if (b.children) {
            for (var c = 0;c < b.children.length;c++) {
              b.children[c].parent = b, d._resolveIds(b.children[c], e);
            }
          }
        };
        d.ENTER = 0;
        d.LEAVE = -2147483648;
        d.MAX_KINDID = 65535;
        d.MAX_DATAID = 32767;
        return d;
      }();
      u.TimelineBuffer = w;
      w = function() {
        function d(b, e) {
          void 0 === e && (e = 0);
          this._container = b;
          this._headers = [];
          this._charts = [];
          this._profiles = [];
          this._activeProfile = null;
          this.themeType = e;
          this._tooltip = this._createTooltip();
        }
        d.prototype.createProfile = function(b, e) {
          var c = new u.Profile(b, e);
          c.createSnapshots();
          this._profiles.push(c);
          this.activateProfile(c);
          return c;
        };
        d.prototype.activateProfile = function(b) {
          this.deactivateProfile();
          this._activeProfile = b;
          this._createViews();
          this._initializeViews();
        };
        d.prototype.activateProfileAt = function(b) {
          this.activateProfile(this.getProfileAt(b));
        };
        d.prototype.deactivateProfile = function() {
          this._activeProfile && (this._destroyViews(), this._activeProfile = null);
        };
        d.prototype.resize = function() {
          this._onResize();
        };
        d.prototype.getProfileAt = function(b) {
          return this._profiles[b];
        };
        Object.defineProperty(d.prototype, "activeProfile", {get:function() {
          return this._activeProfile;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(d.prototype, "profileCount", {get:function() {
          return this._profiles.length;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(d.prototype, "container", {get:function() {
          return this._container;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(d.prototype, "themeType", {get:function() {
          return this._themeType;
        }, set:function(b) {
          switch(b) {
            case 0:
              this._theme = new h.Theme.UIThemeDark;
              break;
            case 1:
              this._theme = new h.Theme.UIThemeLight;
          }
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(d.prototype, "theme", {get:function() {
          return this._theme;
        }, enumerable:!0, configurable:!0});
        d.prototype.getSnapshotAt = function(b) {
          return this._activeProfile.getSnapshotAt(b);
        };
        d.prototype._createViews = function() {
          if (this._activeProfile) {
            var b = this;
            this._overviewHeader = new u.FlameChartHeader(this, 0);
            this._overview = new u.FlameChartOverview(this, 0);
            this._activeProfile.forEachSnapshot(function(e, c) {
              b._headers.push(new u.FlameChartHeader(b, 1));
              b._charts.push(new u.FlameChart(b, e));
            });
            window.addEventListener("resize", this._onResize.bind(this));
          }
        };
        d.prototype._destroyViews = function() {
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
        d.prototype._initializeViews = function() {
          if (this._activeProfile) {
            var b = this, e = this._activeProfile.startTime, c = this._activeProfile.endTime;
            this._overviewHeader.initialize(e, c);
            this._overview.initialize(e, c);
            this._activeProfile.forEachSnapshot(function(d, a) {
              b._headers[a].initialize(e, c);
              b._charts[a].initialize(e, c);
            });
          }
        };
        d.prototype._onResize = function() {
          if (this._activeProfile) {
            var b = this, e = this._container.offsetWidth;
            this._overviewHeader.setSize(e);
            this._overview.setSize(e);
            this._activeProfile.forEachSnapshot(function(c, d) {
              b._headers[d].setSize(e);
              b._charts[d].setSize(e);
            });
          }
        };
        d.prototype._updateViews = function() {
          if (this._activeProfile) {
            var b = this, e = this._activeProfile.windowStart, c = this._activeProfile.windowEnd;
            this._overviewHeader.setWindow(e, c);
            this._overview.setWindow(e, c);
            this._activeProfile.forEachSnapshot(function(d, a) {
              b._headers[a].setWindow(e, c);
              b._charts[a].setWindow(e, c);
            });
          }
        };
        d.prototype._drawViews = function() {
        };
        d.prototype._createTooltip = function() {
          var b = document.createElement("div");
          b.classList.add("profiler-tooltip");
          b.style.display = "none";
          this._container.insertBefore(b, this._container.firstChild);
          return b;
        };
        d.prototype.setWindow = function(b, e) {
          this._activeProfile.setWindow(b, e);
          this._updateViews();
        };
        d.prototype.moveWindowTo = function(b) {
          this._activeProfile.moveWindowTo(b);
          this._updateViews();
        };
        d.prototype.showTooltip = function(b, e, c, d) {
          this.removeTooltipContent();
          this._tooltip.appendChild(this.createTooltipContent(b, e));
          this._tooltip.style.display = "block";
          var a = this._tooltip.firstChild;
          e = a.clientWidth;
          a = a.clientHeight;
          c += c + e >= b.canvas.clientWidth - 50 ? -(e + 20) : 25;
          d += b.canvas.offsetTop - a / 2;
          this._tooltip.style.left = c + "px";
          this._tooltip.style.top = d + "px";
        };
        d.prototype.hideTooltip = function() {
          this._tooltip.style.display = "none";
        };
        d.prototype.createTooltipContent = function(b, e) {
          var c = Math.round(1E5 * e.totalTime) / 1E5, d = Math.round(1E5 * e.selfTime) / 1E5, a = Math.round(1E4 * e.selfTime / e.totalTime) / 100, l = document.createElement("div"), f = document.createElement("h1");
          f.textContent = e.kind.name;
          l.appendChild(f);
          f = document.createElement("p");
          f.textContent = "Total: " + c + " ms";
          l.appendChild(f);
          c = document.createElement("p");
          c.textContent = "Self: " + d + " ms (" + a + "%)";
          l.appendChild(c);
          if (d = b.getStatistics(e.kind)) {
            a = document.createElement("p"), a.textContent = "Count: " + d.count, l.appendChild(a), a = Math.round(1E5 * d.totalTime) / 1E5, c = document.createElement("p"), c.textContent = "All Total: " + a + " ms", l.appendChild(c), d = Math.round(1E5 * d.selfTime) / 1E5, a = document.createElement("p"), a.textContent = "All Self: " + d + " ms", l.appendChild(a);
          }
          this.appendDataElements(l, e.startData);
          this.appendDataElements(l, e.endData);
          return l;
        };
        d.prototype.appendDataElements = function(b, e) {
          if (!f.isNullOrUndefined(e)) {
            b.appendChild(document.createElement("hr"));
            var c;
            if (f.isObject(e)) {
              for (var d in e) {
                c = document.createElement("p"), c.textContent = d + ": " + e[d], b.appendChild(c);
              }
            } else {
              c = document.createElement("p"), c.textContent = e.toString(), b.appendChild(c);
            }
          }
        };
        d.prototype.removeTooltipContent = function() {
          for (var b = this._tooltip;b.firstChild;) {
            b.removeChild(b.firstChild);
          }
        };
        return d;
      }();
      u.Controller = w;
      var y = f.NumberUtilities.clamp, g = function() {
        function d(b) {
          this.value = b;
        }
        d.prototype.toString = function() {
          return this.value;
        };
        d.AUTO = new d("auto");
        d.DEFAULT = new d("default");
        d.NONE = new d("none");
        d.HELP = new d("help");
        d.POINTER = new d("pointer");
        d.PROGRESS = new d("progress");
        d.WAIT = new d("wait");
        d.CELL = new d("cell");
        d.CROSSHAIR = new d("crosshair");
        d.TEXT = new d("text");
        d.ALIAS = new d("alias");
        d.COPY = new d("copy");
        d.MOVE = new d("move");
        d.NO_DROP = new d("no-drop");
        d.NOT_ALLOWED = new d("not-allowed");
        d.ALL_SCROLL = new d("all-scroll");
        d.COL_RESIZE = new d("col-resize");
        d.ROW_RESIZE = new d("row-resize");
        d.N_RESIZE = new d("n-resize");
        d.E_RESIZE = new d("e-resize");
        d.S_RESIZE = new d("s-resize");
        d.W_RESIZE = new d("w-resize");
        d.NE_RESIZE = new d("ne-resize");
        d.NW_RESIZE = new d("nw-resize");
        d.SE_RESIZE = new d("se-resize");
        d.SW_RESIZE = new d("sw-resize");
        d.EW_RESIZE = new d("ew-resize");
        d.NS_RESIZE = new d("ns-resize");
        d.NESW_RESIZE = new d("nesw-resize");
        d.NWSE_RESIZE = new d("nwse-resize");
        d.ZOOM_IN = new d("zoom-in");
        d.ZOOM_OUT = new d("zoom-out");
        d.GRAB = new d("grab");
        d.GRABBING = new d("grabbing");
        return d;
      }();
      u.MouseCursor = g;
      w = function() {
        function d(b, e) {
          this._target = b;
          this._eventTarget = e;
          this._wheelDisabled = !1;
          this._boundOnMouseDown = this._onMouseDown.bind(this);
          this._boundOnMouseUp = this._onMouseUp.bind(this);
          this._boundOnMouseOver = this._onMouseOver.bind(this);
          this._boundOnMouseOut = this._onMouseOut.bind(this);
          this._boundOnMouseMove = this._onMouseMove.bind(this);
          this._boundOnMouseWheel = this._onMouseWheel.bind(this);
          this._boundOnDrag = this._onDrag.bind(this);
          e.addEventListener("mousedown", this._boundOnMouseDown, !1);
          e.addEventListener("mouseover", this._boundOnMouseOver, !1);
          e.addEventListener("mouseout", this._boundOnMouseOut, !1);
          e.addEventListener("onwheel" in document ? "wheel" : "mousewheel", this._boundOnMouseWheel, !1);
        }
        d.prototype.destroy = function() {
          var b = this._eventTarget;
          b.removeEventListener("mousedown", this._boundOnMouseDown);
          b.removeEventListener("mouseover", this._boundOnMouseOver);
          b.removeEventListener("mouseout", this._boundOnMouseOut);
          b.removeEventListener("onwheel" in document ? "wheel" : "mousewheel", this._boundOnMouseWheel);
          window.removeEventListener("mousemove", this._boundOnDrag);
          window.removeEventListener("mouseup", this._boundOnMouseUp);
          this._killHoverCheck();
          this._target = this._eventTarget = null;
        };
        d.prototype.updateCursor = function(b) {
          if (!d._cursorOwner || d._cursorOwner === this._target) {
            var e = this._eventTarget.parentElement;
            d._cursor !== b && (d._cursor = b, ["", "-moz-", "-webkit-"].forEach(function(c) {
              e.style.cursor = c + b;
            }));
            d._cursorOwner = d._cursor === g.DEFAULT ? null : this._target;
          }
        };
        d.prototype._onMouseDown = function(b) {
          this._killHoverCheck();
          if (0 === b.button) {
            var e = this._getTargetMousePos(b, b.target);
            this._dragInfo = {start:e, current:e, delta:{x:0, y:0}, hasMoved:!1, originalTarget:b.target};
            window.addEventListener("mousemove", this._boundOnDrag, !1);
            window.addEventListener("mouseup", this._boundOnMouseUp, !1);
            this._target.onMouseDown(e.x, e.y);
          }
        };
        d.prototype._onDrag = function(b) {
          var e = this._dragInfo;
          b = this._getTargetMousePos(b, e.originalTarget);
          var c = {x:b.x - e.start.x, y:b.y - e.start.y};
          e.current = b;
          e.delta = c;
          e.hasMoved = !0;
          this._target.onDrag(e.start.x, e.start.y, b.x, b.y, c.x, c.y);
        };
        d.prototype._onMouseUp = function(b) {
          window.removeEventListener("mousemove", this._boundOnDrag);
          window.removeEventListener("mouseup", this._boundOnMouseUp);
          var e = this;
          b = this._dragInfo;
          if (b.hasMoved) {
            this._target.onDragEnd(b.start.x, b.start.y, b.current.x, b.current.y, b.delta.x, b.delta.y);
          } else {
            this._target.onClick(b.current.x, b.current.y);
          }
          this._dragInfo = null;
          this._wheelDisabled = !0;
          setTimeout(function() {
            e._wheelDisabled = !1;
          }, 500);
        };
        d.prototype._onMouseOver = function(b) {
          b.target.addEventListener("mousemove", this._boundOnMouseMove, !1);
          if (!this._dragInfo) {
            var e = this._getTargetMousePos(b, b.target);
            this._target.onMouseOver(e.x, e.y);
            this._startHoverCheck(b);
          }
        };
        d.prototype._onMouseOut = function(b) {
          b.target.removeEventListener("mousemove", this._boundOnMouseMove, !1);
          if (!this._dragInfo) {
            this._target.onMouseOut();
          }
          this._killHoverCheck();
        };
        d.prototype._onMouseMove = function(b) {
          if (!this._dragInfo) {
            var e = this._getTargetMousePos(b, b.target);
            this._target.onMouseMove(e.x, e.y);
            this._killHoverCheck();
            this._startHoverCheck(b);
          }
        };
        d.prototype._onMouseWheel = function(b) {
          if (!(b.altKey || b.metaKey || b.ctrlKey || b.shiftKey || (b.preventDefault(), this._dragInfo || this._wheelDisabled))) {
            var e = this._getTargetMousePos(b, b.target);
            b = y("undefined" !== typeof b.deltaY ? b.deltaY / 16 : -b.wheelDelta / 40, -1, 1);
            b = Math.pow(1.2, b) - 1;
            this._target.onMouseWheel(e.x, e.y, b);
          }
        };
        d.prototype._startHoverCheck = function(b) {
          this._hoverInfo = {isHovering:!1, timeoutHandle:setTimeout(this._onMouseMoveIdleHandler.bind(this), d.HOVER_TIMEOUT), pos:this._getTargetMousePos(b, b.target)};
        };
        d.prototype._killHoverCheck = function() {
          if (this._hoverInfo) {
            clearTimeout(this._hoverInfo.timeoutHandle);
            if (this._hoverInfo.isHovering) {
              this._target.onHoverEnd();
            }
            this._hoverInfo = null;
          }
        };
        d.prototype._onMouseMoveIdleHandler = function() {
          var b = this._hoverInfo;
          b.isHovering = !0;
          this._target.onHoverStart(b.pos.x, b.pos.y);
        };
        d.prototype._getTargetMousePos = function(b, e) {
          var c = e.getBoundingClientRect();
          return {x:b.clientX - c.left, y:b.clientY - c.top};
        };
        d.HOVER_TIMEOUT = 500;
        d._cursor = g.DEFAULT;
        return d;
      }();
      u.MouseController = w;
      w = function() {
        function d(b) {
          this._controller = b;
          this._initialized = !1;
          this._canvas = document.createElement("canvas");
          this._context = this._canvas.getContext("2d");
          this._mouseController = new u.MouseController(this, this._canvas);
          b = b.container;
          b.appendChild(this._canvas);
          b = b.getBoundingClientRect();
          this.setSize(b.width);
        }
        Object.defineProperty(d.prototype, "canvas", {get:function() {
          return this._canvas;
        }, enumerable:!0, configurable:!0});
        d.prototype.setSize = function(b, e) {
          void 0 === e && (e = 20);
          this._width = b;
          this._height = e;
          this._resetCanvas();
          this.draw();
        };
        d.prototype.initialize = function(b, e) {
          this._initialized = !0;
          this.setRange(b, e, !1);
          this.setWindow(b, e, !1);
          this.draw();
        };
        d.prototype.setWindow = function(b, e, c) {
          void 0 === c && (c = !0);
          this._windowStart = b;
          this._windowEnd = e;
          !c || this.draw();
        };
        d.prototype.setRange = function(b, e, c) {
          void 0 === c && (c = !0);
          this._rangeStart = b;
          this._rangeEnd = e;
          !c || this.draw();
        };
        d.prototype.destroy = function() {
          this._mouseController.destroy();
          this._mouseController = null;
          this._controller.container.removeChild(this._canvas);
          this._controller = null;
        };
        d.prototype._resetCanvas = function() {
          var b = window.devicePixelRatio, e = this._canvas;
          e.width = this._width * b;
          e.height = this._height * b;
          e.style.width = this._width + "px";
          e.style.height = this._height + "px";
        };
        d.prototype.draw = function() {
        };
        d.prototype._almostEq = function(b, e, c) {
          void 0 === c && (c = 10);
          c = Math.pow(10, c);
          return Math.abs(b - e) < 1 / c;
        };
        d.prototype._windowEqRange = function() {
          return this._almostEq(this._windowStart, this._rangeStart) && this._almostEq(this._windowEnd, this._rangeEnd);
        };
        d.prototype._decimalPlaces = function(b) {
          return (+b).toFixed(10).replace(/^-?\d*\.?|0+$/g, "").length;
        };
        d.prototype._toPixelsRelative = function(b) {
          return 0;
        };
        d.prototype._toPixels = function(b) {
          return 0;
        };
        d.prototype._toTimeRelative = function(b) {
          return 0;
        };
        d.prototype._toTime = function(b) {
          return 0;
        };
        d.prototype.onMouseWheel = function(b, e, c) {
          b = this._toTime(b);
          e = this._windowStart;
          var f = this._windowEnd, a = f - e;
          c = Math.max((d.MIN_WINDOW_LEN - a) / a, c);
          this._controller.setWindow(e + (e - b) * c, f + (f - b) * c);
          this.onHoverEnd();
        };
        d.prototype.onMouseDown = function(b, e) {
        };
        d.prototype.onMouseMove = function(b, e) {
        };
        d.prototype.onMouseOver = function(b, e) {
        };
        d.prototype.onMouseOut = function() {
        };
        d.prototype.onDrag = function(b, e, c, d, a, l) {
        };
        d.prototype.onDragEnd = function(b, e, c, d, a, l) {
        };
        d.prototype.onClick = function(b, e) {
        };
        d.prototype.onHoverStart = function(b, e) {
        };
        d.prototype.onHoverEnd = function() {
        };
        d.DRAGHANDLE_WIDTH = 4;
        d.MIN_WINDOW_LEN = .1;
        return d;
      }();
      u.FlameChartBase = w;
      var E = f.StringUtilities.trimMiddle, w = function(d) {
        function b(b, c) {
          d.call(this, b);
          this._textWidth = {};
          this._minFrameWidthInPixels = 1;
          this._snapshot = c;
          this._kindStyle = Object.create(null);
        }
        __extends(b, d);
        b.prototype.setSize = function(b, c) {
          d.prototype.setSize.call(this, b, c || this._initialized ? 12.5 * this._maxDepth : 100);
        };
        b.prototype.initialize = function(b, c) {
          this._initialized = !0;
          this._maxDepth = this._snapshot.maxDepth;
          this.setRange(b, c, !1);
          this.setWindow(b, c, !1);
          this.setSize(this._width, 12.5 * this._maxDepth);
        };
        b.prototype.destroy = function() {
          d.prototype.destroy.call(this);
          this._snapshot = null;
        };
        b.prototype.draw = function() {
          var b = this._context, c = window.devicePixelRatio;
          f.ColorStyle.reset();
          b.save();
          b.scale(c, c);
          b.fillStyle = this._controller.theme.bodyBackground(1);
          b.fillRect(0, 0, this._width, this._height);
          this._initialized && this._drawChildren(this._snapshot);
          b.restore();
        };
        b.prototype._drawChildren = function(b, c) {
          void 0 === c && (c = 0);
          var d = b.getChildRange(this._windowStart, this._windowEnd);
          if (d) {
            for (var a = d.startIndex;a <= d.endIndex;a++) {
              var l = b.children[a];
              this._drawFrame(l, c) && this._drawChildren(l, c + 1);
            }
          }
        };
        b.prototype._drawFrame = function(b, c) {
          var d = this._context, a = this._toPixels(b.startTime), l = this._toPixels(b.endTime), g = l - a;
          if (g <= this._minFrameWidthInPixels) {
            return d.fillStyle = this._controller.theme.tabToolbar(1), d.fillRect(a, 12.5 * c, this._minFrameWidthInPixels, 12 + 12.5 * (b.maxDepth - b.depth)), !1;
          }
          0 > a && (l = g + a, a = 0);
          var l = l - a, h = this._kindStyle[b.kind.id];
          h || (h = f.ColorStyle.randomStyle(), h = this._kindStyle[b.kind.id] = {bgColor:h, textColor:f.ColorStyle.contrastStyle(h)});
          d.save();
          d.fillStyle = h.bgColor;
          d.fillRect(a, 12.5 * c, l, 12);
          12 < g && (g = b.kind.name) && g.length && (g = this._prepareText(d, g, l - 4), g.length && (d.fillStyle = h.textColor, d.textBaseline = "bottom", d.fillText(g, a + 2, 12.5 * (c + 1) - 1)));
          d.restore();
          return !0;
        };
        b.prototype._prepareText = function(b, c, d) {
          var a = this._measureWidth(b, c);
          if (d > a) {
            return c;
          }
          for (var a = 3, l = c.length;a < l;) {
            var f = a + l >> 1;
            this._measureWidth(b, E(c, f)) < d ? a = f + 1 : l = f;
          }
          c = E(c, l - 1);
          a = this._measureWidth(b, c);
          return a <= d ? c : "";
        };
        b.prototype._measureWidth = function(b, c) {
          var d = this._textWidth[c];
          d || (d = b.measureText(c).width, this._textWidth[c] = d);
          return d;
        };
        b.prototype._toPixelsRelative = function(b) {
          return b * this._width / (this._windowEnd - this._windowStart);
        };
        b.prototype._toPixels = function(b) {
          return this._toPixelsRelative(b - this._windowStart);
        };
        b.prototype._toTimeRelative = function(b) {
          return b * (this._windowEnd - this._windowStart) / this._width;
        };
        b.prototype._toTime = function(b) {
          return this._toTimeRelative(b) + this._windowStart;
        };
        b.prototype._getFrameAtPosition = function(b, c) {
          var d = this._toTime(b), a = 1 + c / 12.5 | 0;
          if ((d = this._snapshot.query(d)) && d.depth >= a) {
            for (;d && d.depth > a;) {
              d = d.parent;
            }
            return d;
          }
          return null;
        };
        b.prototype.onMouseDown = function(b, c) {
          this._windowEqRange() || (this._mouseController.updateCursor(u.MouseCursor.ALL_SCROLL), this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:1});
        };
        b.prototype.onMouseMove = function(b, c) {
        };
        b.prototype.onMouseOver = function(b, c) {
        };
        b.prototype.onMouseOut = function() {
        };
        b.prototype.onDrag = function(b, c, d, a, f, g) {
          if (b = this._dragInfo) {
            f = this._toTimeRelative(-f), this._controller.setWindow(b.windowStartInitial + f, b.windowEndInitial + f);
          }
        };
        b.prototype.onDragEnd = function(b, c, d, a, f, g) {
          this._dragInfo = null;
          this._mouseController.updateCursor(u.MouseCursor.DEFAULT);
        };
        b.prototype.onClick = function(b, c) {
          this._dragInfo = null;
          this._mouseController.updateCursor(u.MouseCursor.DEFAULT);
        };
        b.prototype.onHoverStart = function(b, c) {
          var d = this._getFrameAtPosition(b, c);
          d && (this._hoveredFrame = d, this._controller.showTooltip(this, d, b, c));
        };
        b.prototype.onHoverEnd = function() {
          this._hoveredFrame && (this._hoveredFrame = null, this._controller.hideTooltip());
        };
        b.prototype.getStatistics = function(b) {
          var c = this._snapshot;
          c.statistics || c.calculateStatistics();
          return c.statistics[b.id];
        };
        return b;
      }(u.FlameChartBase);
      u.FlameChart = w;
      y = f.NumberUtilities.clamp;
      w = function(d) {
        function b(b, c) {
          void 0 === c && (c = 1);
          this._mode = c;
          this._overviewCanvasDirty = !0;
          this._overviewCanvas = document.createElement("canvas");
          this._overviewContext = this._overviewCanvas.getContext("2d");
          d.call(this, b);
        }
        __extends(b, d);
        b.prototype.setSize = function(b, c) {
          d.prototype.setSize.call(this, b, c || 64);
        };
        Object.defineProperty(b.prototype, "mode", {set:function(b) {
          this._mode = b;
          this.draw();
        }, enumerable:!0, configurable:!0});
        b.prototype._resetCanvas = function() {
          d.prototype._resetCanvas.call(this);
          this._overviewCanvas.width = this._canvas.width;
          this._overviewCanvas.height = this._canvas.height;
          this._overviewCanvasDirty = !0;
        };
        b.prototype.draw = function() {
          var b = this._context, c = window.devicePixelRatio, d = this._width, a = this._height;
          b.save();
          b.scale(c, c);
          b.fillStyle = this._controller.theme.bodyBackground(1);
          b.fillRect(0, 0, d, a);
          b.restore();
          this._initialized && (this._overviewCanvasDirty && (this._drawChart(), this._overviewCanvasDirty = !1), b.drawImage(this._overviewCanvas, 0, 0), this._drawSelection());
        };
        b.prototype._drawSelection = function() {
          var b = this._context, c = this._height, d = window.devicePixelRatio, a = this._selection ? this._selection.left : this._toPixels(this._windowStart), f = this._selection ? this._selection.right : this._toPixels(this._windowEnd), g = this._controller.theme;
          b.save();
          b.scale(d, d);
          this._selection ? (b.fillStyle = g.selectionText(.15), b.fillRect(a, 1, f - a, c - 1), b.fillStyle = "rgba(133, 0, 0, 1)", b.fillRect(a + .5, 0, f - a - 1, 4), b.fillRect(a + .5, c - 4, f - a - 1, 4)) : (b.fillStyle = g.bodyBackground(.4), b.fillRect(0, 1, a, c - 1), b.fillRect(f, 1, this._width, c - 1));
          b.beginPath();
          b.moveTo(a, 0);
          b.lineTo(a, c);
          b.moveTo(f, 0);
          b.lineTo(f, c);
          b.lineWidth = .5;
          b.strokeStyle = g.foregroundTextGrey(1);
          b.stroke();
          c = this._selection ? this._toTime(this._selection.left) : this._windowStart;
          d = this._selection ? this._toTime(this._selection.right) : this._windowEnd;
          c = Math.abs(d - c);
          b.fillStyle = g.selectionText(.5);
          b.font = "8px sans-serif";
          b.textBaseline = "alphabetic";
          b.textAlign = "end";
          b.fillText(c.toFixed(2), Math.min(a, f) - 4, 10);
          b.fillText((c / 60).toFixed(2), Math.min(a, f) - 4, 20);
          b.restore();
        };
        b.prototype._drawChart = function() {
          var b = window.devicePixelRatio, c = this._height, d = this._controller.activeProfile, a = 4 * this._width, f = d.totalTime / a, g = this._overviewContext, h = this._controller.theme.blueHighlight(1);
          g.save();
          g.translate(0, b * c);
          var u = -b * c / (d.maxDepth - 1);
          g.scale(b / 4, u);
          g.clearRect(0, 0, a, d.maxDepth - 1);
          1 == this._mode && g.scale(1, 1 / d.snapshotCount);
          for (var q = 0, x = d.snapshotCount;q < x;q++) {
            var n = d.getSnapshotAt(q);
            if (n) {
              var k = null, t = 0;
              g.beginPath();
              g.moveTo(0, 0);
              for (var J = 0;J < a;J++) {
                t = d.startTime + J * f, t = (k = k ? k.queryNext(t) : n.query(t)) ? k.getDepth() - 1 : 0, g.lineTo(J, t);
              }
              g.lineTo(J, 0);
              g.fillStyle = h;
              g.fill();
              1 == this._mode && g.translate(0, -c * b / u);
            }
          }
          g.restore();
        };
        b.prototype._toPixelsRelative = function(b) {
          return b * this._width / (this._rangeEnd - this._rangeStart);
        };
        b.prototype._toPixels = function(b) {
          return this._toPixelsRelative(b - this._rangeStart);
        };
        b.prototype._toTimeRelative = function(b) {
          return b * (this._rangeEnd - this._rangeStart) / this._width;
        };
        b.prototype._toTime = function(b) {
          return this._toTimeRelative(b) + this._rangeStart;
        };
        b.prototype._getDragTargetUnderCursor = function(b, c) {
          if (0 <= c && c < this._height) {
            var d = this._toPixels(this._windowStart), a = this._toPixels(this._windowEnd), f = 2 + u.FlameChartBase.DRAGHANDLE_WIDTH / 2, g = b >= d - f && b <= d + f, h = b >= a - f && b <= a + f;
            if (g && h) {
              return 4;
            }
            if (g) {
              return 2;
            }
            if (h) {
              return 3;
            }
            if (!this._windowEqRange() && b > d + f && b < a - f) {
              return 1;
            }
          }
          return 0;
        };
        b.prototype.onMouseDown = function(b, c) {
          var d = this._getDragTargetUnderCursor(b, c);
          0 === d ? (this._selection = {left:b, right:b}, this.draw()) : (1 === d && this._mouseController.updateCursor(u.MouseCursor.GRABBING), this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:d});
        };
        b.prototype.onMouseMove = function(b, c) {
          var d = u.MouseCursor.DEFAULT, a = this._getDragTargetUnderCursor(b, c);
          0 === a || this._selection || (d = 1 === a ? u.MouseCursor.GRAB : u.MouseCursor.EW_RESIZE);
          this._mouseController.updateCursor(d);
        };
        b.prototype.onMouseOver = function(b, c) {
          this.onMouseMove(b, c);
        };
        b.prototype.onMouseOut = function() {
          this._mouseController.updateCursor(u.MouseCursor.DEFAULT);
        };
        b.prototype.onDrag = function(b, c, d, a, f, g) {
          if (this._selection) {
            this._selection = {left:b, right:y(d, 0, this._width - 1)}, this.draw();
          } else {
            b = this._dragInfo;
            if (4 === b.target) {
              if (0 !== f) {
                b.target = 0 > f ? 2 : 3;
              } else {
                return;
              }
            }
            c = this._windowStart;
            d = this._windowEnd;
            f = this._toTimeRelative(f);
            switch(b.target) {
              case 1:
                c = b.windowStartInitial + f;
                d = b.windowEndInitial + f;
                break;
              case 2:
                c = y(b.windowStartInitial + f, this._rangeStart, d - u.FlameChartBase.MIN_WINDOW_LEN);
                break;
              case 3:
                d = y(b.windowEndInitial + f, c + u.FlameChartBase.MIN_WINDOW_LEN, this._rangeEnd);
                break;
              default:
                return;
            }
            this._controller.setWindow(c, d);
          }
        };
        b.prototype.onDragEnd = function(b, c, d, a, f, g) {
          this._selection && (this._selection = null, this._controller.setWindow(this._toTime(b), this._toTime(d)));
          this._dragInfo = null;
          this.onMouseMove(d, a);
        };
        b.prototype.onClick = function(b, c) {
          this._selection = this._dragInfo = null;
          this._windowEqRange() || (0 === this._getDragTargetUnderCursor(b, c) && this._controller.moveWindowTo(this._toTime(b)), this.onMouseMove(b, c));
          this.draw();
        };
        b.prototype.onHoverStart = function(b, c) {
        };
        b.prototype.onHoverEnd = function() {
        };
        return b;
      }(u.FlameChartBase);
      u.FlameChartOverview = w;
      y = f.NumberUtilities.clamp;
      w = function(d) {
        function b(b, c) {
          this._type = c;
          d.call(this, b);
        }
        __extends(b, d);
        b.prototype.draw = function() {
          var b = this._context, c = window.devicePixelRatio, d = this._width, a = this._height;
          b.save();
          b.scale(c, c);
          b.fillStyle = this._controller.theme.tabToolbar(1);
          b.fillRect(0, 0, d, a);
          this._initialized && (0 == this._type ? (c = this._toPixels(this._windowStart), d = this._toPixels(this._windowEnd), b.fillStyle = this._controller.theme.bodyBackground(1), b.fillRect(c, 0, d - c, a), this._drawLabels(this._rangeStart, this._rangeEnd), this._drawDragHandle(c), this._drawDragHandle(d)) : this._drawLabels(this._windowStart, this._windowEnd));
          b.restore();
        };
        b.prototype._drawLabels = function(e, c) {
          var d = this._context, a = this._calculateTickInterval(e, c), f = Math.ceil(e / a) * a, g = 500 <= a, h = g ? 1E3 : 1, u = this._decimalPlaces(a / h), g = g ? "s" : "ms", q = this._toPixels(f), x = this._height / 2, n = this._controller.theme;
          d.lineWidth = 1;
          d.strokeStyle = n.contentTextDarkGrey(.5);
          d.fillStyle = n.contentTextDarkGrey(1);
          d.textAlign = "right";
          d.textBaseline = "middle";
          d.font = "11px sans-serif";
          for (n = this._width + b.TICK_MAX_WIDTH;q < n;) {
            var k = (f / h).toFixed(u) + " " + g;
            d.fillText(k, q - 7, x + 1);
            d.beginPath();
            d.moveTo(q, 0);
            d.lineTo(q, this._height + 1);
            d.closePath();
            d.stroke();
            f += a;
            q = this._toPixels(f);
          }
        };
        b.prototype._calculateTickInterval = function(d, c) {
          var f = (c - d) / (this._width / b.TICK_MAX_WIDTH), a = Math.pow(10, Math.floor(Math.log(f) / Math.LN10)), f = f / a;
          return 5 < f ? 10 * a : 2 < f ? 5 * a : 1 < f ? 2 * a : a;
        };
        b.prototype._drawDragHandle = function(b) {
          var c = this._context;
          c.lineWidth = 2;
          c.strokeStyle = this._controller.theme.bodyBackground(1);
          c.fillStyle = this._controller.theme.foregroundTextGrey(.7);
          this._drawRoundedRect(c, b - u.FlameChartBase.DRAGHANDLE_WIDTH / 2, 1, u.FlameChartBase.DRAGHANDLE_WIDTH, this._height - 2, 2, !0);
        };
        b.prototype._drawRoundedRect = function(b, c, d, a, f, g, h, u) {
          void 0 === h && (h = !0);
          void 0 === u && (u = !0);
          b.beginPath();
          b.moveTo(c + g, d);
          b.lineTo(c + a - g, d);
          b.quadraticCurveTo(c + a, d, c + a, d + g);
          b.lineTo(c + a, d + f - g);
          b.quadraticCurveTo(c + a, d + f, c + a - g, d + f);
          b.lineTo(c + g, d + f);
          b.quadraticCurveTo(c, d + f, c, d + f - g);
          b.lineTo(c, d + g);
          b.quadraticCurveTo(c, d, c + g, d);
          b.closePath();
          h && b.stroke();
          u && b.fill();
        };
        b.prototype._toPixelsRelative = function(b) {
          return b * this._width / (0 === this._type ? this._rangeEnd - this._rangeStart : this._windowEnd - this._windowStart);
        };
        b.prototype._toPixels = function(b) {
          return this._toPixelsRelative(b - (0 === this._type ? this._rangeStart : this._windowStart));
        };
        b.prototype._toTimeRelative = function(b) {
          return b * (0 === this._type ? this._rangeEnd - this._rangeStart : this._windowEnd - this._windowStart) / this._width;
        };
        b.prototype._toTime = function(b) {
          var c = 0 === this._type ? this._rangeStart : this._windowStart;
          return this._toTimeRelative(b) + c;
        };
        b.prototype._getDragTargetUnderCursor = function(b, c) {
          if (0 <= c && c < this._height) {
            if (0 === this._type) {
              var d = this._toPixels(this._windowStart), a = this._toPixels(this._windowEnd), f = 2 + u.FlameChartBase.DRAGHANDLE_WIDTH / 2, d = b >= d - f && b <= d + f, a = b >= a - f && b <= a + f;
              if (d && a) {
                return 4;
              }
              if (d) {
                return 2;
              }
              if (a) {
                return 3;
              }
            }
            if (!this._windowEqRange()) {
              return 1;
            }
          }
          return 0;
        };
        b.prototype.onMouseDown = function(b, c) {
          var d = this._getDragTargetUnderCursor(b, c);
          1 === d && this._mouseController.updateCursor(u.MouseCursor.GRABBING);
          this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:d};
        };
        b.prototype.onMouseMove = function(b, c) {
          var d = u.MouseCursor.DEFAULT, a = this._getDragTargetUnderCursor(b, c);
          0 !== a && (1 !== a ? d = u.MouseCursor.EW_RESIZE : 1 !== a || this._windowEqRange() || (d = u.MouseCursor.GRAB));
          this._mouseController.updateCursor(d);
        };
        b.prototype.onMouseOver = function(b, c) {
          this.onMouseMove(b, c);
        };
        b.prototype.onMouseOut = function() {
          this._mouseController.updateCursor(u.MouseCursor.DEFAULT);
        };
        b.prototype.onDrag = function(b, c, d, a, f, g) {
          b = this._dragInfo;
          if (4 === b.target) {
            if (0 !== f) {
              b.target = 0 > f ? 2 : 3;
            } else {
              return;
            }
          }
          c = this._windowStart;
          d = this._windowEnd;
          f = this._toTimeRelative(f);
          switch(b.target) {
            case 1:
              d = 0 === this._type ? 1 : -1;
              c = b.windowStartInitial + d * f;
              d = b.windowEndInitial + d * f;
              break;
            case 2:
              c = y(b.windowStartInitial + f, this._rangeStart, d - u.FlameChartBase.MIN_WINDOW_LEN);
              break;
            case 3:
              d = y(b.windowEndInitial + f, c + u.FlameChartBase.MIN_WINDOW_LEN, this._rangeEnd);
              break;
            default:
              return;
          }
          this._controller.setWindow(c, d);
        };
        b.prototype.onDragEnd = function(b, c, d, a, f, g) {
          this._dragInfo = null;
          this.onMouseMove(d, a);
        };
        b.prototype.onClick = function(b, c) {
          1 === this._dragInfo.target && this._mouseController.updateCursor(u.MouseCursor.GRAB);
        };
        b.prototype.onHoverStart = function(b, c) {
        };
        b.prototype.onHoverEnd = function() {
        };
        b.TICK_MAX_WIDTH = 75;
        return b;
      }(u.FlameChartBase);
      u.FlameChartHeader = w;
      (function(d) {
        var b = function() {
          function b(d, a, c, e, f) {
            this.pageLoaded = d;
            this.threadsTotal = a;
            this.threadsLoaded = c;
            this.threadFilesTotal = e;
            this.threadFilesLoaded = f;
          }
          b.prototype.toString = function() {
            return "[" + ["pageLoaded", "threadsTotal", "threadsLoaded", "threadFilesTotal", "threadFilesLoaded"].map(function(b, a, d) {
              return b + ":" + this[b];
            }, this).join(", ") + "]";
          };
          return b;
        }();
        d.TraceLoggerProgressInfo = b;
        var e = function() {
          function c(b) {
            this._baseUrl = b;
            this._threads = [];
            this._progressInfo = null;
          }
          c.prototype.loadPage = function(d, a, c) {
            this._threads = [];
            this._pageLoadCallback = a;
            this._pageLoadProgressCallback = c;
            this._progressInfo = new b(!1, 0, 0, 0, 0);
            this._loadData([d], this._onLoadPage.bind(this));
          };
          Object.defineProperty(c.prototype, "buffers", {get:function() {
            for (var b = [], a = 0, d = this._threads.length;a < d;a++) {
              b.push(this._threads[a].buffer);
            }
            return b;
          }, enumerable:!0, configurable:!0});
          c.prototype._onProgress = function() {
            this._pageLoadProgressCallback && this._pageLoadProgressCallback.call(this, this._progressInfo);
          };
          c.prototype._onLoadPage = function(b) {
            if (b && 1 == b.length) {
              var a = this, c = 0;
              b = b[0];
              var e = b.length;
              this._threads = Array(e);
              this._progressInfo.pageLoaded = !0;
              this._progressInfo.threadsTotal = e;
              for (var f = 0;f < b.length;f++) {
                var g = b[f], h = [g.dict, g.tree];
                g.corrections && h.push(g.corrections);
                this._progressInfo.threadFilesTotal += h.length;
                this._loadData(h, function(b) {
                  return function(n) {
                    n && (n = new d.Thread(n), n.buffer.name = "Thread " + b, a._threads[b] = n);
                    c++;
                    a._progressInfo.threadsLoaded++;
                    a._onProgress();
                    c === e && a._pageLoadCallback.call(a, null, a._threads);
                  };
                }(f), function(b) {
                  a._progressInfo.threadFilesLoaded++;
                  a._onProgress();
                });
              }
              this._onProgress();
            } else {
              this._pageLoadCallback.call(this, "Error loading page.", null);
            }
          };
          c.prototype._loadData = function(b, a, d) {
            var c = 0, e = 0, f = b.length, g = [];
            g.length = f;
            for (var h = 0;h < f;h++) {
              var n = this._baseUrl + b[h], k = /\.tl$/i.test(n), t = new XMLHttpRequest, k = k ? "arraybuffer" : "json";
              t.open("GET", n, !0);
              t.responseType = k;
              t.onload = function(b, k) {
                return function(n) {
                  if ("json" === k) {
                    if (n = this.response, "string" === typeof n) {
                      try {
                        n = JSON.parse(n), g[b] = n;
                      } catch (t) {
                        e++;
                      }
                    } else {
                      g[b] = n;
                    }
                  } else {
                    g[b] = this.response;
                  }
                  ++c;
                  d && d(c);
                  c === f && a(g);
                };
              }(h, k);
              t.send();
            }
          };
          c.colors = "#0044ff #8c4b00 #cc5c33 #ff80c4 #ffbfd9 #ff8800 #8c5e00 #adcc33 #b380ff #bfd9ff #ffaa00 #8c0038 #bf8f30 #f780ff #cc99c9 #aaff00 #000073 #452699 #cc8166 #cca799 #000066 #992626 #cc6666 #ccc299 #ff6600 #526600 #992663 #cc6681 #99ccc2 #ff0066 #520066 #269973 #61994d #739699 #ffcc00 #006629 #269199 #94994d #738299 #ff0000 #590000 #234d8c #8c6246 #7d7399 #ee00ff #00474d #8c2385 #8c7546 #7c8c69 #eeff00 #4d003d #662e1a #62468c #8c6969 #6600ff #4c2900 #1a6657 #8c464f #8c6981 #44ff00 #401100 #1a2466 #663355 #567365 #d90074 #403300 #101d40 #59562d #66614d #cc0000 #002b40 #234010 #4c2626 #4d5e66 #00a3cc #400011 #231040 #4c3626 #464359 #0000bf #331b00 #80e6ff #311a33 #4d3939 #a69b00 #003329 #80ffb2 #331a20 #40303d #00a658 #40ffd9 #ffc480 #ffe1bf #332b26 #8c2500 #9933cc #80fff6 #ffbfbf #303326 #005e8c #33cc47 #b2ff80 #c8bfff #263332 #00708c #cc33ad #ffe680 #f2ffbf #262a33 #388c00 #335ccc #8091ff #bfffd9".split(" ");
          return c;
        }();
        d.TraceLogger = e;
      })(u.TraceLogger || (u.TraceLogger = {}));
      (function(d) {
        var b;
        (function(b) {
          b[b.START_HI = 0] = "START_HI";
          b[b.START_LO = 4] = "START_LO";
          b[b.STOP_HI = 8] = "STOP_HI";
          b[b.STOP_LO = 12] = "STOP_LO";
          b[b.TEXTID = 16] = "TEXTID";
          b[b.NEXTID = 20] = "NEXTID";
        })(b || (b = {}));
        var e = function() {
          function d(b) {
            2 <= b.length && (this._text = b[0], this._data = new DataView(b[1]), this._buffer = new u.TimelineBuffer, this._walkTree(0));
          }
          Object.defineProperty(d.prototype, "buffer", {get:function() {
            return this._buffer;
          }, enumerable:!0, configurable:!0});
          d.prototype._walkTree = function(e) {
            var a = this._data, f = this._buffer;
            do {
              var g = e * d.ITEM_SIZE, h = 4294967295 * a.getUint32(g + b.START_HI, !1) + a.getUint32(g + b.START_LO, !1), u = 4294967295 * a.getUint32(g + b.STOP_HI, !1) + a.getUint32(g + b.STOP_LO, !1), q = a.getUint32(g + b.TEXTID, !1), g = a.getUint32(g + b.NEXTID, !1), x = 1 === (q & 1), q = q >>> 1, q = this._text[q];
              f.enter(q, null, h / 1E6);
              x && this._walkTree(e + 1);
              f.leave(q, null, u / 1E6);
              e = g;
            } while (0 !== e);
          };
          d.ITEM_SIZE = 24;
          return d;
        }();
        d.Thread = e;
      })(u.TraceLogger || (u.TraceLogger = {}));
    })(h.Profiler || (h.Profiler = {}));
    (function(h) {
      var r = f.NumberUtilities.clamp, w = function() {
        function f() {
          this.length = 0;
          this.lines = [];
          this.format = [];
          this.time = [];
          this.repeat = [];
          this.length = 0;
        }
        f.prototype.append = function(f, d) {
          var b = this.lines;
          0 < b.length && b[b.length - 1] === f ? this.repeat[b.length - 1]++ : (this.lines.push(f), this.repeat.push(1), this.format.push(d ? {backgroundFillStyle:d} : void 0), this.time.push(performance.now()), this.length++);
        };
        f.prototype.get = function(f) {
          return this.lines[f];
        };
        f.prototype.getFormat = function(f) {
          return this.format[f];
        };
        f.prototype.getTime = function(f) {
          return this.time[f];
        };
        f.prototype.getRepeat = function(f) {
          return this.repeat[f];
        };
        return f;
      }();
      h.Buffer = w;
      var y = function() {
        function f(g) {
          this.lineColor = "#2A2A2A";
          this.alternateLineColor = "#262626";
          this.textColor = "#FFFFFF";
          this.selectionColor = "#96C9F3";
          this.selectionTextColor = "#000000";
          this.ratio = 1;
          this.showLineNumbers = !0;
          this.showLineCounter = this.showLineTime = !1;
          this.canvas = g;
          this.canvas.focus();
          this.context = g.getContext("2d", {original:!0});
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
          g.addEventListener("keydown", function(t) {
            var f = 0;
            switch(t.keyCode) {
              case n:
                this.printHelp();
                break;
              case q:
                this.showLineNumbers = !this.showLineNumbers;
                break;
              case x:
                this.showLineTime = !this.showLineTime;
                break;
              case h:
                f = -1;
                break;
              case a:
                f = 1;
                break;
              case d:
                f = -this.pageLineCount;
                break;
              case b:
                f = this.pageLineCount;
                break;
              case e:
                f = -this.lineIndex;
                break;
              case c:
                f = this.buffer.length - this.lineIndex;
                break;
              case l:
                this.columnIndex -= t.metaKey ? 10 : 1;
                0 > this.columnIndex && (this.columnIndex = 0);
                t.preventDefault();
                break;
              case u:
                this.columnIndex += t.metaKey ? 10 : 1;
                t.preventDefault();
                break;
              case r:
                if (t.metaKey || t.ctrlKey) {
                  this.selection = {start:0, end:this.buffer.length - 1}, t.preventDefault();
                }
                break;
              case y:
              ;
              case k:
                if (t.metaKey || t.ctrlKey) {
                  var g = "";
                  if (this.selection) {
                    for (var B = this.selection.start;B <= this.selection.end;B++) {
                      g += this.buffer.get(B) + "\n";
                    }
                  } else {
                    g = this.buffer.get(this.lineIndex);
                  }
                  t.keyCode === y ? alert(g) : window.open(URL.createObjectURL(new Blob([g], {type:"text/plain"})), "_blank");
                }
              ;
            }
            t.metaKey && (f *= this.pageLineCount);
            f && (this.scroll(f), t.preventDefault());
            f && t.shiftKey ? this.selection ? this.lineIndex > this.selection.start ? this.selection.end = this.lineIndex : this.selection.start = this.lineIndex : 0 < f ? this.selection = {start:this.lineIndex - f, end:this.lineIndex} : 0 > f && (this.selection = {start:this.lineIndex, end:this.lineIndex - f}) : f && (this.selection = null);
            this.paint();
          }.bind(this), !1);
          g.addEventListener("focus", function(a) {
            this.hasFocus = !0;
          }.bind(this), !1);
          g.addEventListener("blur", function(a) {
            this.hasFocus = !1;
          }.bind(this), !1);
          var d = 33, b = 34, e = 36, c = 35, h = 38, a = 40, l = 37, u = 39, r = 65, y = 67, q = 78, x = 84, n = 72, k = 83;
        }
        f.prototype.printHelp = function() {
          var f = this;
          "h - help;n - turn on/off line numbers;t - turn on/off line time;arrow_keys - navigation;cmd/ctrl+a - select all;cmd/ctrl+c - copy/alert selection;cmd/ctrl+s - open selection in new tab;shift+arrow_keys - selection".split(";").forEach(function(d) {
            return f.buffer.append(d, "#002000");
          });
        };
        f.prototype.resize = function() {
          this._resizeHandler();
        };
        f.prototype._resizeHandler = function() {
          var f = this.canvas.parentElement, d = f.clientWidth, f = f.clientHeight && f.clientHeight - 1, b = window.devicePixelRatio || 1;
          1 !== b ? (this.ratio = b / 1, this.canvas.width = d * this.ratio, this.canvas.height = f * this.ratio, this.canvas.style.width = d + "px", this.canvas.style.height = f + "px") : (this.ratio = 1, this.canvas.width = d, this.canvas.height = f);
          this.pageLineCount = Math.floor(this.canvas.height / this.lineHeight);
        };
        f.prototype.gotoLine = function(f) {
          this.lineIndex = r(f, 0, this.buffer.length - 1);
        };
        f.prototype.scrollIntoView = function() {
          this.lineIndex < this.pageIndex ? this.pageIndex = this.lineIndex : this.lineIndex >= this.pageIndex + this.pageLineCount && (this.pageIndex = this.lineIndex - this.pageLineCount + 1);
        };
        f.prototype.scroll = function(f) {
          this.gotoLine(this.lineIndex + f);
          this.scrollIntoView();
        };
        f.prototype.paint = function() {
          var f = this.pageLineCount;
          this.pageIndex + f > this.buffer.length && (f = this.buffer.length - this.pageIndex);
          var d = this.textMarginLeft, b = d + (this.showLineNumbers ? 5 * (String(this.buffer.length).length + 2) : 0), e = b + (this.showLineTime ? 40 : 10), c = e + 25;
          this.context.font = this.fontSize + 'px Consolas, "Liberation Mono", Courier, monospace';
          this.context.setTransform(this.ratio, 0, 0, this.ratio, 0, 0);
          for (var g = this.canvas.width, a = this.lineHeight, l = 0;l < f;l++) {
            var h = l * this.lineHeight, u = this.pageIndex + l, r = this.buffer.get(u), q = this.buffer.getFormat(u), x = this.buffer.getRepeat(u), n = 1 < u ? this.buffer.getTime(u) - this.buffer.getTime(0) : 0;
            this.context.fillStyle = u % 2 ? this.lineColor : this.alternateLineColor;
            q && q.backgroundFillStyle && (this.context.fillStyle = q.backgroundFillStyle);
            this.context.fillRect(0, h, g, a);
            this.context.fillStyle = this.selectionTextColor;
            this.context.fillStyle = this.textColor;
            this.selection && u >= this.selection.start && u <= this.selection.end && (this.context.fillStyle = this.selectionColor, this.context.fillRect(0, h, g, a), this.context.fillStyle = this.selectionTextColor);
            this.hasFocus && u === this.lineIndex && (this.context.fillStyle = this.selectionColor, this.context.fillRect(0, h, g, a), this.context.fillStyle = this.selectionTextColor);
            0 < this.columnIndex && (r = r.substring(this.columnIndex));
            h = (l + 1) * this.lineHeight - this.textMarginBottom;
            this.showLineNumbers && this.context.fillText(String(u), d, h);
            this.showLineTime && this.context.fillText(n.toFixed(1).padLeft(" ", 6), b, h);
            1 < x && this.context.fillText(String(x).padLeft(" ", 3), e, h);
            this.context.fillText(r, c, h);
          }
        };
        f.prototype.refreshEvery = function(f) {
          function d() {
            b.paint();
            b.refreshFrequency && setTimeout(d, b.refreshFrequency);
          }
          var b = this;
          this.refreshFrequency = f;
          b.refreshFrequency && setTimeout(d, b.refreshFrequency);
        };
        f.prototype.isScrolledToBottom = function() {
          return this.lineIndex === this.buffer.length - 1;
        };
        return f;
      }();
      h.Terminal = y;
    })(h.Terminal || (h.Terminal = {}));
    (function(f) {
      var h = function() {
        function f(h) {
          this._lastWeightedTime = this._lastTime = this._index = 0;
          this._gradient = "#FF0000 #FF1100 #FF2300 #FF3400 #FF4600 #FF5700 #FF6900 #FF7B00 #FF8C00 #FF9E00 #FFAF00 #FFC100 #FFD300 #FFE400 #FFF600 #F7FF00 #E5FF00 #D4FF00 #C2FF00 #B0FF00 #9FFF00 #8DFF00 #7CFF00 #6AFF00 #58FF00 #47FF00 #35FF00 #24FF00 #12FF00 #00FF00".split(" ");
          this._container = h;
          this._canvas = document.createElement("canvas");
          this._container.appendChild(this._canvas);
          this._context = this._canvas.getContext("2d");
          this._listenForContainerSizeChanges();
        }
        f.prototype._listenForContainerSizeChanges = function() {
          var f = this._containerWidth, g = this._containerHeight;
          this._onContainerSizeChanged();
          var h = this;
          setInterval(function() {
            if (f !== h._containerWidth || g !== h._containerHeight) {
              h._onContainerSizeChanged(), f = h._containerWidth, g = h._containerHeight;
            }
          }, 10);
        };
        f.prototype._onContainerSizeChanged = function() {
          var f = this._containerWidth, g = this._containerHeight, h = window.devicePixelRatio || 1;
          1 !== h ? (this._ratio = h / 1, this._canvas.width = f * this._ratio, this._canvas.height = g * this._ratio, this._canvas.style.width = f + "px", this._canvas.style.height = g + "px") : (this._ratio = 1, this._canvas.width = f, this._canvas.height = g);
        };
        Object.defineProperty(f.prototype, "_containerWidth", {get:function() {
          return this._container.clientWidth;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(f.prototype, "_containerHeight", {get:function() {
          return this._container.clientHeight;
        }, enumerable:!0, configurable:!0});
        f.prototype.tickAndRender = function(f, g) {
          void 0 === f && (f = !1);
          void 0 === g && (g = 0);
          if (0 === this._lastTime) {
            this._lastTime = performance.now();
          } else {
            var h = 1 * (performance.now() - this._lastTime) + 0 * this._lastWeightedTime, d = this._context, b = 2 * this._ratio, e = 30 * this._ratio, c = performance;
            c.memory && (e += 30 * this._ratio);
            var p = (this._canvas.width - e) / (b + 1) | 0, a = this._index++;
            this._index > p && (this._index = 0);
            p = this._canvas.height;
            d.globalAlpha = 1;
            d.fillStyle = "black";
            d.fillRect(e + a * (b + 1), 0, 4 * b, this._canvas.height);
            var l = Math.min(1E3 / 60 / h, 1);
            d.fillStyle = "#00FF00";
            d.globalAlpha = f ? .5 : 1;
            l = p / 2 * l | 0;
            d.fillRect(e + a * (b + 1), p - l, b, l);
            g && (l = Math.min(1E3 / 240 / g, 1), d.fillStyle = "#FF6347", l = p / 2 * l | 0, d.fillRect(e + a * (b + 1), p / 2 - l, b, l));
            0 === a % 16 && (d.globalAlpha = 1, d.fillStyle = "black", d.fillRect(0, 0, e, this._canvas.height), d.fillStyle = "white", d.font = 8 * this._ratio + "px Arial", d.textBaseline = "middle", b = (1E3 / h).toFixed(0), g && (b += " " + g.toFixed(0)), c.memory && (b += " " + (c.memory.usedJSHeapSize / 1024 / 1024).toFixed(2)), d.fillText(b, 2 * this._ratio, this._containerHeight / 2 * this._ratio));
            this._lastTime = performance.now();
            this._lastWeightedTime = h;
          }
        };
        return f;
      }();
      f.FPS = h;
    })(h.Mini || (h.Mini = {}));
  })(f.Tools || (f.Tools = {}));
})(Shumway || (Shumway = {}));
console.timeEnd("Load Shared Dependencies");
console.time("Load GFX Dependencies");
(function(f) {
  (function(h) {
    function r(a, k, d) {
      return b && d ? "string" === typeof k ? (a = f.ColorUtilities.cssStyleToRGBA(k), f.ColorUtilities.rgbaToCSSStyle(d.transformRGBA(a))) : k instanceof CanvasGradient && k._template ? k._template.createCanvasGradient(a, d) : k : k;
    }
    var w = f.NumberUtilities.clamp, y = f.Metrics.Counter.instance;
    h.frameCounter = new f.Metrics.Counter(!0);
    h.traceLevel = 2;
    h.writer = null;
    h.frameCount = function(a) {
      y.count(a);
      h.frameCounter.count(a);
    };
    h.timelineBuffer = new f.Tools.Profiler.TimelineBuffer("GFX");
    h.enterTimeline = function(a, b) {
    };
    h.leaveTimeline = function(a, b) {
    };
    var g = null, E = null, d = null, b = !0;
    b && "undefined" !== typeof CanvasRenderingContext2D && (g = CanvasGradient.prototype.addColorStop, E = CanvasRenderingContext2D.prototype.createLinearGradient, d = CanvasRenderingContext2D.prototype.createRadialGradient, CanvasRenderingContext2D.prototype.createLinearGradient = function(a, b, k, d) {
      return (new c(a, b, k, d)).createCanvasGradient(this, null);
    }, CanvasRenderingContext2D.prototype.createRadialGradient = function(a, b, k, d, c, e) {
      return (new p(a, b, k, d, c, e)).createCanvasGradient(this, null);
    }, CanvasGradient.prototype.addColorStop = function(a, b) {
      g.call(this, a, b);
      this._template.addColorStop(a, b);
    });
    var e = function() {
      return function(a, b) {
        this.offset = a;
        this.color = b;
      };
    }(), c = function() {
      function a(b, k, d, c) {
        this.x0 = b;
        this.y0 = k;
        this.x1 = d;
        this.y1 = c;
        this.colorStops = [];
      }
      a.prototype.addColorStop = function(a, b) {
        this.colorStops.push(new e(a, b));
      };
      a.prototype.createCanvasGradient = function(a, b) {
        for (var k = E.call(a, this.x0, this.y0, this.x1, this.y1), d = this.colorStops, c = 0;c < d.length;c++) {
          var m = d[c], e = m.offset, m = m.color, m = b ? r(a, m, b) : m;
          g.call(k, e, m);
        }
        k._template = this;
        k._transform = this._transform;
        return k;
      };
      return a;
    }(), p = function() {
      function a(b, k, d, c, e, m) {
        this.x0 = b;
        this.y0 = k;
        this.r0 = d;
        this.x1 = c;
        this.y1 = e;
        this.r1 = m;
        this.colorStops = [];
      }
      a.prototype.addColorStop = function(a, b) {
        this.colorStops.push(new e(a, b));
      };
      a.prototype.createCanvasGradient = function(a, b) {
        for (var k = d.call(a, this.x0, this.y0, this.r0, this.x1, this.y1, this.r1), c = this.colorStops, e = 0;e < c.length;e++) {
          var m = c[e], n = m.offset, m = m.color, m = b ? r(a, m, b) : m;
          g.call(k, n, m);
        }
        k._template = this;
        k._transform = this._transform;
        return k;
      };
      return a;
    }(), a;
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
    })(a || (a = {}));
    var l = function() {
      function b(a) {
        this._commands = new Uint8Array(b._arrayBufferPool.acquire(8), 0, 8);
        this._commandPosition = 0;
        this._data = new Float64Array(b._arrayBufferPool.acquire(8 * Float64Array.BYTES_PER_ELEMENT), 0, 8);
        this._dataPosition = 0;
        a instanceof b && this.addPath(a);
      }
      b._apply = function(b, k) {
        var d = b._commands, c = b._data, e = 0, m = 0;
        k.beginPath();
        for (var n = b._commandPosition;e < n;) {
          switch(d[e++]) {
            case a.ClosePath:
              k.closePath();
              break;
            case a.MoveTo:
              k.moveTo(c[m++], c[m++]);
              break;
            case a.LineTo:
              k.lineTo(c[m++], c[m++]);
              break;
            case a.QuadraticCurveTo:
              k.quadraticCurveTo(c[m++], c[m++], c[m++], c[m++]);
              break;
            case a.BezierCurveTo:
              k.bezierCurveTo(c[m++], c[m++], c[m++], c[m++], c[m++], c[m++]);
              break;
            case a.ArcTo:
              k.arcTo(c[m++], c[m++], c[m++], c[m++], c[m++]);
              break;
            case a.Rect:
              k.rect(c[m++], c[m++], c[m++], c[m++]);
              break;
            case a.Arc:
              k.arc(c[m++], c[m++], c[m++], c[m++], c[m++], !!c[m++]);
              break;
            case a.Save:
              k.save();
              break;
            case a.Restore:
              k.restore();
              break;
            case a.Transform:
              k.transform(c[m++], c[m++], c[m++], c[m++], c[m++], c[m++]);
          }
        }
      };
      b.prototype._ensureCommandCapacity = function(a) {
        this._commands = b._arrayBufferPool.ensureUint8ArrayLength(this._commands, a);
      };
      b.prototype._ensureDataCapacity = function(a) {
        this._data = b._arrayBufferPool.ensureFloat64ArrayLength(this._data, a);
      };
      b.prototype._writeCommand = function(a) {
        this._commandPosition >= this._commands.length && this._ensureCommandCapacity(this._commandPosition + 1);
        this._commands[this._commandPosition++] = a;
      };
      b.prototype._writeData = function(a, b, k, c, d, m) {
        var e = arguments.length;
        this._dataPosition + e >= this._data.length && this._ensureDataCapacity(this._dataPosition + e);
        var n = this._data, t = this._dataPosition;
        n[t] = a;
        n[t + 1] = b;
        2 < e && (n[t + 2] = k, n[t + 3] = c, 4 < e && (n[t + 4] = d, 6 === e && (n[t + 5] = m)));
        this._dataPosition += e;
      };
      b.prototype.closePath = function() {
        this._writeCommand(a.ClosePath);
      };
      b.prototype.moveTo = function(b, k) {
        this._writeCommand(a.MoveTo);
        this._writeData(b, k);
      };
      b.prototype.lineTo = function(b, k) {
        this._writeCommand(a.LineTo);
        this._writeData(b, k);
      };
      b.prototype.quadraticCurveTo = function(b, k, c, d) {
        this._writeCommand(a.QuadraticCurveTo);
        this._writeData(b, k, c, d);
      };
      b.prototype.bezierCurveTo = function(b, k, c, d, e, m) {
        this._writeCommand(a.BezierCurveTo);
        this._writeData(b, k, c, d, e, m);
      };
      b.prototype.arcTo = function(b, k, c, d, e) {
        this._writeCommand(a.ArcTo);
        this._writeData(b, k, c, d, e);
      };
      b.prototype.rect = function(b, k, c, d) {
        this._writeCommand(a.Rect);
        this._writeData(b, k, c, d);
      };
      b.prototype.arc = function(b, k, c, d, e, m) {
        this._writeCommand(a.Arc);
        this._writeData(b, k, c, d, e, +m);
      };
      b.prototype.addPath = function(b, k) {
        k && (this._writeCommand(a.Save), this._writeCommand(a.Transform), this._writeData(k.a, k.b, k.c, k.d, k.e, k.f));
        var c = this._commandPosition + b._commandPosition;
        c >= this._commands.length && this._ensureCommandCapacity(c);
        for (var d = this._commands, e = b._commands, m = this._commandPosition, n = 0;m < c;m++) {
          d[m] = e[n++];
        }
        this._commandPosition = c;
        c = this._dataPosition + b._dataPosition;
        c >= this._data.length && this._ensureDataCapacity(c);
        d = this._data;
        e = b._data;
        m = this._dataPosition;
        for (n = 0;m < c;m++) {
          d[m] = e[n++];
        }
        this._dataPosition = c;
        k && this._writeCommand(a.Restore);
      };
      b._arrayBufferPool = new f.ArrayBufferPool;
      return b;
    }();
    h.Path = l;
    if ("undefined" !== typeof CanvasRenderingContext2D && ("undefined" === typeof Path2D || !Path2D.prototype.addPath)) {
      var K = CanvasRenderingContext2D.prototype.fill;
      CanvasRenderingContext2D.prototype.fill = function(a, b) {
        arguments.length && (a instanceof l ? l._apply(a, this) : b = a);
        b ? K.call(this, b) : K.call(this);
      };
      var I = CanvasRenderingContext2D.prototype.stroke;
      CanvasRenderingContext2D.prototype.stroke = function(a, b) {
        arguments.length && (a instanceof l ? l._apply(a, this) : b = a);
        b ? I.call(this, b) : I.call(this);
      };
      var L = CanvasRenderingContext2D.prototype.clip;
      CanvasRenderingContext2D.prototype.clip = function(a, b) {
        arguments.length && (a instanceof l ? l._apply(a, this) : b = a);
        b ? L.call(this, b) : L.call(this);
      };
      window.Path2D = l;
    }
    if ("undefined" !== typeof CanvasPattern && Path2D.prototype.addPath) {
      var q = function(a) {
        this._transform = a;
        this._template && (this._template._transform = a);
      };
      CanvasPattern.prototype.setTransform || (CanvasPattern.prototype.setTransform = q);
      CanvasGradient.prototype.setTransform || (CanvasGradient.prototype.setTransform = q);
      var x = CanvasRenderingContext2D.prototype.fill, n = CanvasRenderingContext2D.prototype.stroke;
      CanvasRenderingContext2D.prototype.fill = function(a, b) {
        var k = !!this.fillStyle._transform;
        if ((this.fillStyle instanceof CanvasPattern || this.fillStyle instanceof CanvasGradient) && k && a instanceof Path2D) {
          var k = this.fillStyle._transform, c;
          try {
            c = k.inverse();
          } catch (d) {
            c = k = h.Geometry.Matrix.createIdentitySVGMatrix();
          }
          this.transform(k.a, k.b, k.c, k.d, k.e, k.f);
          k = new Path2D;
          k.addPath(a, c);
          x.call(this, k, b);
          this.transform(c.a, c.b, c.c, c.d, c.e, c.f);
        } else {
          0 === arguments.length ? x.call(this) : 1 === arguments.length ? x.call(this, a) : 2 === arguments.length && x.call(this, a, b);
        }
      };
      CanvasRenderingContext2D.prototype.stroke = function(a) {
        var b = !!this.strokeStyle._transform;
        if ((this.strokeStyle instanceof CanvasPattern || this.strokeStyle instanceof CanvasGradient) && b && a instanceof Path2D) {
          var b = this.strokeStyle._transform, k;
          try {
            k = b.inverse();
          } catch (c) {
            k = b = h.Geometry.Matrix.createIdentitySVGMatrix();
          }
          this.transform(b.a, b.b, b.c, b.d, b.e, b.f);
          b = new Path2D;
          b.addPath(a, k);
          var d = this.lineWidth;
          this.lineWidth = this.lineWidth * Math.sqrt((k.a + k.c) * (k.a + k.c) + (k.d + k.b) * (k.d + k.b)) * Math.SQRT1_2;
          n.call(this, b);
          this.transform(k.a, k.b, k.c, k.d, k.e, k.f);
          this.lineWidth = d;
        } else {
          0 === arguments.length ? n.call(this) : 1 === arguments.length && n.call(this, a);
        }
      };
    }
    "undefined" !== typeof CanvasRenderingContext2D && function() {
      function a() {
        return h.Geometry.Matrix.createSVGMatrixFromArray(this.mozCurrentTransform);
      }
      var b = "currentTransform" in CanvasRenderingContext2D.prototype;
      CanvasRenderingContext2D.prototype.flashStroke = function(a, k) {
        if (b) {
          var c = this.currentTransform, m = new Path2D;
          m.addPath(a, c);
          var d = this.lineWidth;
          this.setTransform(1, 0, 0, 1, 0, 0);
          switch(k) {
            case 1:
              var e = Math.sqrt((c.a + c.c) * (c.a + c.c) + (c.d + c.b) * (c.d + c.b)) * Math.SQRT1_2;
              this.lineWidth = w(d * e, 1, 1024);
              break;
            case 2:
              this.lineWidth = w(d * (c.d + c.b), 1, 1024);
              break;
            case 3:
              this.lineWidth = w(d * (c.a + c.c), 1, 1024);
          }
          this.stroke(m);
          this.setTransform(c.a, c.b, c.c, c.d, c.e, c.f);
          this.lineWidth = d;
        } else {
          this.stroke(a);
        }
      };
      if (!b) {
        if ("mozCurrentTransform" in CanvasRenderingContext2D.prototype) {
          Object.defineProperty(CanvasRenderingContext2D.prototype, "currentTransform", {get:a}), b = !0;
        } else {
          var k = CanvasRenderingContext2D.prototype.setTransform;
          CanvasRenderingContext2D.prototype.setTransform = function(a, b, c, m, d, e) {
            var n = this.currentTransform;
            n.a = a;
            n.b = b;
            n.c = c;
            n.d = m;
            n.e = d;
            n.f = e;
            k.call(this, a, b, c, m, d, e);
          };
          Object.defineProperty(CanvasRenderingContext2D.prototype, "currentTransform", {get:function() {
            return this._currentTransform || (this._currentTransform = h.Geometry.Matrix.createIdentitySVGMatrix());
          }});
        }
      }
    }();
    if ("undefined" !== typeof CanvasRenderingContext2D && void 0 === CanvasRenderingContext2D.prototype.globalColorMatrix) {
      var k = CanvasRenderingContext2D.prototype.fill, t = CanvasRenderingContext2D.prototype.stroke, J = CanvasRenderingContext2D.prototype.fillText, F = CanvasRenderingContext2D.prototype.strokeText;
      Object.defineProperty(CanvasRenderingContext2D.prototype, "globalColorMatrix", {get:function() {
        return this._globalColorMatrix ? this._globalColorMatrix.clone() : null;
      }, set:function(a) {
        a ? this._globalColorMatrix ? this._globalColorMatrix.set(a) : this._globalColorMatrix = a.clone() : this._globalColorMatrix = null;
      }, enumerable:!0, configurable:!0});
      CanvasRenderingContext2D.prototype.fill = function(a, b) {
        var c = null;
        this._globalColorMatrix && (c = this.fillStyle, this.fillStyle = r(this, this.fillStyle, this._globalColorMatrix));
        0 === arguments.length ? k.call(this) : 1 === arguments.length ? k.call(this, a) : 2 === arguments.length && k.call(this, a, b);
        c && (this.fillStyle = c);
      };
      CanvasRenderingContext2D.prototype.stroke = function(a, b) {
        var k = null;
        this._globalColorMatrix && (k = this.strokeStyle, this.strokeStyle = r(this, this.strokeStyle, this._globalColorMatrix));
        0 === arguments.length ? t.call(this) : 1 === arguments.length && t.call(this, a);
        k && (this.strokeStyle = k);
      };
      CanvasRenderingContext2D.prototype.fillText = function(a, b, k, c) {
        var d = null;
        this._globalColorMatrix && (d = this.fillStyle, this.fillStyle = r(this, this.fillStyle, this._globalColorMatrix));
        3 === arguments.length ? J.call(this, a, b, k) : 4 === arguments.length ? J.call(this, a, b, k, c) : f.Debug.unexpected();
        d && (this.fillStyle = d);
      };
      CanvasRenderingContext2D.prototype.strokeText = function(a, b, k, c) {
        var d = null;
        this._globalColorMatrix && (d = this.strokeStyle, this.strokeStyle = r(this, this.strokeStyle, this._globalColorMatrix));
        3 === arguments.length ? F.call(this, a, b, k) : 4 === arguments.length ? F.call(this, a, b, k, c) : f.Debug.unexpected();
        d && (this.strokeStyle = d);
      };
    }
    q = function() {
      return function(a, b, k, c) {
        this.dataURL = a;
        this.w = b;
        this.h = k;
        this.pixelRatio = c;
      };
    }();
    h.ScreenShot = q;
  })(f.GFX || (f.GFX = {}));
  var h = function() {
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
    f.prototype.visit = function(f, h) {
      void 0 === h && (h = !0);
      for (var u = h ? this._head : this._tail;u && f(u);) {
        u = h ? u.next : u.previous;
      }
    };
    return f;
  }();
  f.LRUList = h;
  f.registerFallbackFont = function() {
    var f = document.styleSheets[0];
    f.insertRule('@font-face{font-family:AdobeBlank;src:url("data:font/opentype;base64,T1RUTwAKAIAAAwAgQ0ZGIDTeCDQAACFkAAAZPERTSUcAAAABAABKqAAAAAhPUy8yAF+xmwAAARAAAABgY21hcCRDbtEAAAdcAAAZ6GhlYWQFl9tDAAAArAAAADZoaGVhB1oD7wAAAOQAAAAkaG10eAPoAHwAADqgAAAQBm1heHAIAVAAAAABCAAAAAZuYW1lIE0HkgAAAXAAAAXrcG9zdP+4ADIAACFEAAAAIAABAAAAAQuFfcPHtV8PPPUAAwPoAAAAANFMRfMAAAAA0UxF8wB8/4gDbANwAAAAAwACAAAAAAAAAAEAAANw/4gAAAPoAHwAfANsAAEAAAAAAAAAAAAAAAAAAAACAABQAAgBAAAAAwPoAZAABQAAAooCWAAAAEsCigJYAAABXgAyANwAAAAAAAAAAAAAAAD3/67/+9///w/gAD8AAAAAQURCTwBAAAD//wNw/4gAAANwAHhgLwH/AAAAAAAAAAAAAAAgAAAAAAARANIAAQAAAAAAAQALAAAAAQAAAAAAAgAHAAsAAQAAAAAAAwAbABIAAQAAAAAABAALAAAAAQAAAAAABQA6AC0AAQAAAAAABgAKAGcAAwABBAkAAACUAHEAAwABBAkAAQAWAQUAAwABBAkAAgAOARsAAwABBAkAAwA2ASkAAwABBAkABAAWAQUAAwABBAkABQB0AV8AAwABBAkABgAUAdMAAwABBAkACAA0AecAAwABBAkACwA0AhsAAwABBAkADQKWAk8AAwABBAkADgA0BOVBZG9iZSBCbGFua1JlZ3VsYXIxLjA0NTtBREJPO0Fkb2JlQmxhbms7QURPQkVWZXJzaW9uIDEuMDQ1O1BTIDEuMDQ1O2hvdGNvbnYgMS4wLjgyO21ha2VvdGYubGliMi41LjYzNDA2QWRvYmVCbGFuawBDAG8AcAB5AHIAaQBnAGgAdAAgAKkAIAAyADAAMQAzACwAIAAyADAAMQA1ACAAQQBkAG8AYgBlACAAUwB5AHMAdABlAG0AcwAgAEkAbgBjAG8AcgBwAG8AcgBhAHQAZQBkACAAKABoAHQAdABwADoALwAvAHcAdwB3AC4AYQBkAG8AYgBlAC4AYwBvAG0ALwApAC4AQQBkAG8AYgBlACAAQgBsAGEAbgBrAFIAZQBnAHUAbABhAHIAMQAuADAANAA1ADsAQQBEAEIATwA7AEEAZABvAGIAZQBCAGwAYQBuAGsAOwBBAEQATwBCAEUAVgBlAHIAcwBpAG8AbgAgADEALgAwADQANQA7AFAAUwAgADEALgAwADQANQA7AGgAbwB0AGMAbwBuAHYAIAAxAC4AMAAuADgAMgA7AG0AYQBrAGUAbwB0AGYALgBsAGkAYgAyAC4ANQAuADYAMwA0ADAANgBBAGQAbwBiAGUAQgBsAGEAbgBrAEEAZABvAGIAZQAgAFMAeQBzAHQAZQBtAHMAIABJAG4AYwBvAHIAcABvAHIAYQB0AGUAZABoAHQAdABwADoALwAvAHcAdwB3AC4AYQBkAG8AYgBlAC4AYwBvAG0ALwB0AHkAcABlAC8AVABoAGkAcwAgAEYAbwBuAHQAIABTAG8AZgB0AHcAYQByAGUAIABpAHMAIABsAGkAYwBlAG4AcwBlAGQAIAB1AG4AZABlAHIAIAB0AGgAZQAgAFMASQBMACAATwBwAGUAbgAgAEYAbwBuAHQAIABMAGkAYwBlAG4AcwBlACwAIABWAGUAcgBzAGkAbwBuACAAMQAuADEALgAgAFQAaABpAHMAIABGAG8AbgB0ACAAUwBvAGYAdAB3AGEAcgBlACAAaQBzACAAZABpAHMAdAByAGkAYgB1AHQAZQBkACAAbwBuACAAYQBuACAAIgBBAFMAIABJAFMAIgAgAEIAQQBTAEkAUwAsACAAVwBJAFQASABPAFUAVAAgAFcAQQBSAFIAQQBOAFQASQBFAFMAIABPAFIAIABDAE8ATgBEAEkAVABJAE8ATgBTACAATwBGACAAQQBOAFkAIABLAEkATgBEACwAIABlAGkAdABoAGUAcgAgAGUAeABwAHIAZQBzAHMAIABvAHIAIABpAG0AcABsAGkAZQBkAC4AIABTAGUAZQAgAHQAaABlACAAUwBJAEwAIABPAHAAZQBuACAARgBvAG4AdAAgAEwAaQBjAGUAbgBzAGUAIABmAG8AcgAgAHQAaABlACAAcwBwAGUAYwBpAGYAaQBjACAAbABhAG4AZwB1AGEAZwBlACwAIABwAGUAcgBtAGkAcwBzAGkAbwBuAHMAIABhAG4AZAAgAGwAaQBtAGkAdABhAHQAaQBvAG4AcwAgAGcAbwB2AGUAcgBuAGkAbgBnACAAeQBvAHUAcgAgAHUAcwBlACAAbwBmACAAdABoAGkAcwAgAEYAbwBuAHQAIABTAG8AZgB0AHcAYQByAGUALgBoAHQAdABwADoALwAvAHMAYwByAGkAcAB0AHMALgBzAGkAbAAuAG8AcgBnAC8ATwBGAEwAAAAABQAAAAMAAAA4AAAABAAAAFgAAQAAAAAALAADAAEAAAA4AAMACgAAAFgABgAMAAAAAAABAAAABAAgAAAABAAEAAEAAAf///8AAAAA//8AAQABAAAAAAAMAAAAABmQAAAAAAAAAiAAAAAAAAAH/wAAAAEAAAgAAAAP/wAAAAEAABAAAAAX/wAAAAEAABgAAAAf/wAAAAEAACAAAAAn/wAAAAEAACgAAAAv/wAAAAEAADAAAAA3/wAAAAEAADgAAAA//wAAAAEAAEAAAABH/wAAAAEAAEgAAABP/wAAAAEAAFAAAABX/wAAAAEAAFgAAABf/wAAAAEAAGAAAABn/wAAAAEAAGgAAABv/wAAAAEAAHAAAAB3/wAAAAEAAHgAAAB//wAAAAEAAIAAAACH/wAAAAEAAIgAAACP/wAAAAEAAJAAAACX/wAAAAEAAJgAAACf/wAAAAEAAKAAAACn/wAAAAEAAKgAAACv/wAAAAEAALAAAAC3/wAAAAEAALgAAAC//wAAAAEAAMAAAADH/wAAAAEAAMgAAADP/wAAAAEAANAAAADX/wAAAAEAAOAAAADn/wAAAAEAAOgAAADv/wAAAAEAAPAAAAD3/wAAAAEAAPgAAAD9zwAAAAEAAP3wAAD//QAABfEAAQAAAAEH/wAAAAEAAQgAAAEP/wAAAAEAARAAAAEX/wAAAAEAARgAAAEf/wAAAAEAASAAAAEn/wAAAAEAASgAAAEv/wAAAAEAATAAAAE3/wAAAAEAATgAAAE//wAAAAEAAUAAAAFH/wAAAAEAAUgAAAFP/wAAAAEAAVAAAAFX/wAAAAEAAVgAAAFf/wAAAAEAAWAAAAFn/wAAAAEAAWgAAAFv/wAAAAEAAXAAAAF3/wAAAAEAAXgAAAF//wAAAAEAAYAAAAGH/wAAAAEAAYgAAAGP/wAAAAEAAZAAAAGX/wAAAAEAAZgAAAGf/wAAAAEAAaAAAAGn/wAAAAEAAagAAAGv/wAAAAEAAbAAAAG3/wAAAAEAAbgAAAG//wAAAAEAAcAAAAHH/wAAAAEAAcgAAAHP/wAAAAEAAdAAAAHX/wAAAAEAAdgAAAHf/wAAAAEAAeAAAAHn/wAAAAEAAegAAAHv/wAAAAEAAfAAAAH3/wAAAAEAAfgAAAH//QAAAAEAAgAAAAIH/wAAAAEAAggAAAIP/wAAAAEAAhAAAAIX/wAAAAEAAhgAAAIf/wAAAAEAAiAAAAIn/wAAAAEAAigAAAIv/wAAAAEAAjAAAAI3/wAAAAEAAjgAAAI//wAAAAEAAkAAAAJH/wAAAAEAAkgAAAJP/wAAAAEAAlAAAAJX/wAAAAEAAlgAAAJf/wAAAAEAAmAAAAJn/wAAAAEAAmgAAAJv/wAAAAEAAnAAAAJ3/wAAAAEAAngAAAJ//wAAAAEAAoAAAAKH/wAAAAEAAogAAAKP/wAAAAEAApAAAAKX/wAAAAEAApgAAAKf/wAAAAEAAqAAAAKn/wAAAAEAAqgAAAKv/wAAAAEAArAAAAK3/wAAAAEAArgAAAK//wAAAAEAAsAAAALH/wAAAAEAAsgAAALP/wAAAAEAAtAAAALX/wAAAAEAAtgAAALf/wAAAAEAAuAAAALn/wAAAAEAAugAAALv/wAAAAEAAvAAAAL3/wAAAAEAAvgAAAL//QAAAAEAAwAAAAMH/wAAAAEAAwgAAAMP/wAAAAEAAxAAAAMX/wAAAAEAAxgAAAMf/wAAAAEAAyAAAAMn/wAAAAEAAygAAAMv/wAAAAEAAzAAAAM3/wAAAAEAAzgAAAM//wAAAAEAA0AAAANH/wAAAAEAA0gAAANP/wAAAAEAA1AAAANX/wAAAAEAA1gAAANf/wAAAAEAA2AAAANn/wAAAAEAA2gAAANv/wAAAAEAA3AAAAN3/wAAAAEAA3gAAAN//wAAAAEAA4AAAAOH/wAAAAEAA4gAAAOP/wAAAAEAA5AAAAOX/wAAAAEAA5gAAAOf/wAAAAEAA6AAAAOn/wAAAAEAA6gAAAOv/wAAAAEAA7AAAAO3/wAAAAEAA7gAAAO//wAAAAEAA8AAAAPH/wAAAAEAA8gAAAPP/wAAAAEAA9AAAAPX/wAAAAEAA9gAAAPf/wAAAAEAA+AAAAPn/wAAAAEAA+gAAAPv/wAAAAEAA/AAAAP3/wAAAAEAA/gAAAP//QAAAAEABAAAAAQH/wAAAAEABAgAAAQP/wAAAAEABBAAAAQX/wAAAAEABBgAAAQf/wAAAAEABCAAAAQn/wAAAAEABCgAAAQv/wAAAAEABDAAAAQ3/wAAAAEABDgAAAQ//wAAAAEABEAAAARH/wAAAAEABEgAAARP/wAAAAEABFAAAARX/wAAAAEABFgAAARf/wAAAAEABGAAAARn/wAAAAEABGgAAARv/wAAAAEABHAAAAR3/wAAAAEABHgAAAR//wAAAAEABIAAAASH/wAAAAEABIgAAASP/wAAAAEABJAAAASX/wAAAAEABJgAAASf/wAAAAEABKAAAASn/wAAAAEABKgAAASv/wAAAAEABLAAAAS3/wAAAAEABLgAAAS//wAAAAEABMAAAATH/wAAAAEABMgAAATP/wAAAAEABNAAAATX/wAAAAEABNgAAATf/wAAAAEABOAAAATn/wAAAAEABOgAAATv/wAAAAEABPAAAAT3/wAAAAEABPgAAAT//QAAAAEABQAAAAUH/wAAAAEABQgAAAUP/wAAAAEABRAAAAUX/wAAAAEABRgAAAUf/wAAAAEABSAAAAUn/wAAAAEABSgAAAUv/wAAAAEABTAAAAU3/wAAAAEABTgAAAU//wAAAAEABUAAAAVH/wAAAAEABUgAAAVP/wAAAAEABVAAAAVX/wAAAAEABVgAAAVf/wAAAAEABWAAAAVn/wAAAAEABWgAAAVv/wAAAAEABXAAAAV3/wAAAAEABXgAAAV//wAAAAEABYAAAAWH/wAAAAEABYgAAAWP/wAAAAEABZAAAAWX/wAAAAEABZgAAAWf/wAAAAEABaAAAAWn/wAAAAEABagAAAWv/wAAAAEABbAAAAW3/wAAAAEABbgAAAW//wAAAAEABcAAAAXH/wAAAAEABcgAAAXP/wAAAAEABdAAAAXX/wAAAAEABdgAAAXf/wAAAAEABeAAAAXn/wAAAAEABegAAAXv/wAAAAEABfAAAAX3/wAAAAEABfgAAAX//QAAAAEABgAAAAYH/wAAAAEABggAAAYP/wAAAAEABhAAAAYX/wAAAAEABhgAAAYf/wAAAAEABiAAAAYn/wAAAAEABigAAAYv/wAAAAEABjAAAAY3/wAAAAEABjgAAAY//wAAAAEABkAAAAZH/wAAAAEABkgAAAZP/wAAAAEABlAAAAZX/wAAAAEABlgAAAZf/wAAAAEABmAAAAZn/wAAAAEABmgAAAZv/wAAAAEABnAAAAZ3/wAAAAEABngAAAZ//wAAAAEABoAAAAaH/wAAAAEABogAAAaP/wAAAAEABpAAAAaX/wAAAAEABpgAAAaf/wAAAAEABqAAAAan/wAAAAEABqgAAAav/wAAAAEABrAAAAa3/wAAAAEABrgAAAa//wAAAAEABsAAAAbH/wAAAAEABsgAAAbP/wAAAAEABtAAAAbX/wAAAAEABtgAAAbf/wAAAAEABuAAAAbn/wAAAAEABugAAAbv/wAAAAEABvAAAAb3/wAAAAEABvgAAAb//QAAAAEABwAAAAcH/wAAAAEABwgAAAcP/wAAAAEABxAAAAcX/wAAAAEABxgAAAcf/wAAAAEAByAAAAcn/wAAAAEABygAAAcv/wAAAAEABzAAAAc3/wAAAAEABzgAAAc//wAAAAEAB0AAAAdH/wAAAAEAB0gAAAdP/wAAAAEAB1AAAAdX/wAAAAEAB1gAAAdf/wAAAAEAB2AAAAdn/wAAAAEAB2gAAAdv/wAAAAEAB3AAAAd3/wAAAAEAB3gAAAd//wAAAAEAB4AAAAeH/wAAAAEAB4gAAAeP/wAAAAEAB5AAAAeX/wAAAAEAB5gAAAef/wAAAAEAB6AAAAen/wAAAAEAB6gAAAev/wAAAAEAB7AAAAe3/wAAAAEAB7gAAAe//wAAAAEAB8AAAAfH/wAAAAEAB8gAAAfP/wAAAAEAB9AAAAfX/wAAAAEAB9gAAAff/wAAAAEAB+AAAAfn/wAAAAEAB+gAAAfv/wAAAAEAB/AAAAf3/wAAAAEAB/gAAAf//QAAAAEACAAAAAgH/wAAAAEACAgAAAgP/wAAAAEACBAAAAgX/wAAAAEACBgAAAgf/wAAAAEACCAAAAgn/wAAAAEACCgAAAgv/wAAAAEACDAAAAg3/wAAAAEACDgAAAg//wAAAAEACEAAAAhH/wAAAAEACEgAAAhP/wAAAAEACFAAAAhX/wAAAAEACFgAAAhf/wAAAAEACGAAAAhn/wAAAAEACGgAAAhv/wAAAAEACHAAAAh3/wAAAAEACHgAAAh//wAAAAEACIAAAAiH/wAAAAEACIgAAAiP/wAAAAEACJAAAAiX/wAAAAEACJgAAAif/wAAAAEACKAAAAin/wAAAAEACKgAAAiv/wAAAAEACLAAAAi3/wAAAAEACLgAAAi//wAAAAEACMAAAAjH/wAAAAEACMgAAAjP/wAAAAEACNAAAAjX/wAAAAEACNgAAAjf/wAAAAEACOAAAAjn/wAAAAEACOgAAAjv/wAAAAEACPAAAAj3/wAAAAEACPgAAAj//QAAAAEACQAAAAkH/wAAAAEACQgAAAkP/wAAAAEACRAAAAkX/wAAAAEACRgAAAkf/wAAAAEACSAAAAkn/wAAAAEACSgAAAkv/wAAAAEACTAAAAk3/wAAAAEACTgAAAk//wAAAAEACUAAAAlH/wAAAAEACUgAAAlP/wAAAAEACVAAAAlX/wAAAAEACVgAAAlf/wAAAAEACWAAAAln/wAAAAEACWgAAAlv/wAAAAEACXAAAAl3/wAAAAEACXgAAAl//wAAAAEACYAAAAmH/wAAAAEACYgAAAmP/wAAAAEACZAAAAmX/wAAAAEACZgAAAmf/wAAAAEACaAAAAmn/wAAAAEACagAAAmv/wAAAAEACbAAAAm3/wAAAAEACbgAAAm//wAAAAEACcAAAAnH/wAAAAEACcgAAAnP/wAAAAEACdAAAAnX/wAAAAEACdgAAAnf/wAAAAEACeAAAAnn/wAAAAEACegAAAnv/wAAAAEACfAAAAn3/wAAAAEACfgAAAn//QAAAAEACgAAAAoH/wAAAAEACggAAAoP/wAAAAEAChAAAAoX/wAAAAEAChgAAAof/wAAAAEACiAAAAon/wAAAAEACigAAAov/wAAAAEACjAAAAo3/wAAAAEACjgAAAo//wAAAAEACkAAAApH/wAAAAEACkgAAApP/wAAAAEAClAAAApX/wAAAAEAClgAAApf/wAAAAEACmAAAApn/wAAAAEACmgAAApv/wAAAAEACnAAAAp3/wAAAAEACngAAAp//wAAAAEACoAAAAqH/wAAAAEACogAAAqP/wAAAAEACpAAAAqX/wAAAAEACpgAAAqf/wAAAAEACqAAAAqn/wAAAAEACqgAAAqv/wAAAAEACrAAAAq3/wAAAAEACrgAAAq//wAAAAEACsAAAArH/wAAAAEACsgAAArP/wAAAAEACtAAAArX/wAAAAEACtgAAArf/wAAAAEACuAAAArn/wAAAAEACugAAArv/wAAAAEACvAAAAr3/wAAAAEACvgAAAr//QAAAAEACwAAAAsH/wAAAAEACwgAAAsP/wAAAAEACxAAAAsX/wAAAAEACxgAAAsf/wAAAAEACyAAAAsn/wAAAAEACygAAAsv/wAAAAEACzAAAAs3/wAAAAEACzgAAAs//wAAAAEAC0AAAAtH/wAAAAEAC0gAAAtP/wAAAAEAC1AAAAtX/wAAAAEAC1gAAAtf/wAAAAEAC2AAAAtn/wAAAAEAC2gAAAtv/wAAAAEAC3AAAAt3/wAAAAEAC3gAAAt//wAAAAEAC4AAAAuH/wAAAAEAC4gAAAuP/wAAAAEAC5AAAAuX/wAAAAEAC5gAAAuf/wAAAAEAC6AAAAun/wAAAAEAC6gAAAuv/wAAAAEAC7AAAAu3/wAAAAEAC7gAAAu//wAAAAEAC8AAAAvH/wAAAAEAC8gAAAvP/wAAAAEAC9AAAAvX/wAAAAEAC9gAAAvf/wAAAAEAC+AAAAvn/wAAAAEAC+gAAAvv/wAAAAEAC/AAAAv3/wAAAAEAC/gAAAv//QAAAAEADAAAAAwH/wAAAAEADAgAAAwP/wAAAAEADBAAAAwX/wAAAAEADBgAAAwf/wAAAAEADCAAAAwn/wAAAAEADCgAAAwv/wAAAAEADDAAAAw3/wAAAAEADDgAAAw//wAAAAEADEAAAAxH/wAAAAEADEgAAAxP/wAAAAEADFAAAAxX/wAAAAEADFgAAAxf/wAAAAEADGAAAAxn/wAAAAEADGgAAAxv/wAAAAEADHAAAAx3/wAAAAEADHgAAAx//wAAAAEADIAAAAyH/wAAAAEADIgAAAyP/wAAAAEADJAAAAyX/wAAAAEADJgAAAyf/wAAAAEADKAAAAyn/wAAAAEADKgAAAyv/wAAAAEADLAAAAy3/wAAAAEADLgAAAy//wAAAAEADMAAAAzH/wAAAAEADMgAAAzP/wAAAAEADNAAAAzX/wAAAAEADNgAAAzf/wAAAAEADOAAAAzn/wAAAAEADOgAAAzv/wAAAAEADPAAAAz3/wAAAAEADPgAAAz//QAAAAEADQAAAA0H/wAAAAEADQgAAA0P/wAAAAEADRAAAA0X/wAAAAEADRgAAA0f/wAAAAEADSAAAA0n/wAAAAEADSgAAA0v/wAAAAEADTAAAA03/wAAAAEADTgAAA0//wAAAAEADUAAAA1H/wAAAAEADUgAAA1P/wAAAAEADVAAAA1X/wAAAAEADVgAAA1f/wAAAAEADWAAAA1n/wAAAAEADWgAAA1v/wAAAAEADXAAAA13/wAAAAEADXgAAA1//wAAAAEADYAAAA2H/wAAAAEADYgAAA2P/wAAAAEADZAAAA2X/wAAAAEADZgAAA2f/wAAAAEADaAAAA2n/wAAAAEADagAAA2v/wAAAAEADbAAAA23/wAAAAEADbgAAA2//wAAAAEADcAAAA3H/wAAAAEADcgAAA3P/wAAAAEADdAAAA3X/wAAAAEADdgAAA3f/wAAAAEADeAAAA3n/wAAAAEADegAAA3v/wAAAAEADfAAAA33/wAAAAEADfgAAA3//QAAAAEADgAAAA4H/wAAAAEADggAAA4P/wAAAAEADhAAAA4X/wAAAAEADhgAAA4f/wAAAAEADiAAAA4n/wAAAAEADigAAA4v/wAAAAEADjAAAA43/wAAAAEADjgAAA4//wAAAAEADkAAAA5H/wAAAAEADkgAAA5P/wAAAAEADlAAAA5X/wAAAAEADlgAAA5f/wAAAAEADmAAAA5n/wAAAAEADmgAAA5v/wAAAAEADnAAAA53/wAAAAEADngAAA5//wAAAAEADoAAAA6H/wAAAAEADogAAA6P/wAAAAEADpAAAA6X/wAAAAEADpgAAA6f/wAAAAEADqAAAA6n/wAAAAEADqgAAA6v/wAAAAEADrAAAA63/wAAAAEADrgAAA6//wAAAAEADsAAAA7H/wAAAAEADsgAAA7P/wAAAAEADtAAAA7X/wAAAAEADtgAAA7f/wAAAAEADuAAAA7n/wAAAAEADugAAA7v/wAAAAEADvAAAA73/wAAAAEADvgAAA7//QAAAAEADwAAAA8H/wAAAAEADwgAAA8P/wAAAAEADxAAAA8X/wAAAAEADxgAAA8f/wAAAAEADyAAAA8n/wAAAAEADygAAA8v/wAAAAEADzAAAA83/wAAAAEADzgAAA8//wAAAAEAD0AAAA9H/wAAAAEAD0gAAA9P/wAAAAEAD1AAAA9X/wAAAAEAD1gAAA9f/wAAAAEAD2AAAA9n/wAAAAEAD2gAAA9v/wAAAAEAD3AAAA93/wAAAAEAD3gAAA9//wAAAAEAD4AAAA+H/wAAAAEAD4gAAA+P/wAAAAEAD5AAAA+X/wAAAAEAD5gAAA+f/wAAAAEAD6AAAA+n/wAAAAEAD6gAAA+v/wAAAAEAD7AAAA+3/wAAAAEAD7gAAA+//wAAAAEAD8AAAA/H/wAAAAEAD8gAAA/P/wAAAAEAD9AAAA/X/wAAAAEAD9gAAA/f/wAAAAEAD+AAAA/n/wAAAAEAD+gAAA/v/wAAAAEAD/AAAA/3/wAAAAEAD/gAAA///QAAAAEAEAAAABAH/wAAAAEAEAgAABAP/wAAAAEAEBAAABAX/wAAAAEAEBgAABAf/wAAAAEAECAAABAn/wAAAAEAECgAABAv/wAAAAEAEDAAABA3/wAAAAEAEDgAABA//wAAAAEAEEAAABBH/wAAAAEAEEgAABBP/wAAAAEAEFAAABBX/wAAAAEAEFgAABBf/wAAAAEAEGAAABBn/wAAAAEAEGgAABBv/wAAAAEAEHAAABB3/wAAAAEAEHgAABB//wAAAAEAEIAAABCH/wAAAAEAEIgAABCP/wAAAAEAEJAAABCX/wAAAAEAEJgAABCf/wAAAAEAEKAAABCn/wAAAAEAEKgAABCv/wAAAAEAELAAABC3/wAAAAEAELgAABC//wAAAAEAEMAAABDH/wAAAAEAEMgAABDP/wAAAAEAENAAABDX/wAAAAEAENgAABDf/wAAAAEAEOAAABDn/wAAAAEAEOgAABDv/wAAAAEAEPAAABD3/wAAAAEAEPgAABD//QAAAAEAAwAAAAAAAP+1ADIAAAAAAAAAAAAAAAAAAAAAAAAAAAEABAIAAQEBC0Fkb2JlQmxhbmsAAQEBMPgb+ByLDB74HQH4HgKL+wz6APoEBR4aBF8MHxwIAQwi91UP92IR91oMJRwZHwwkAAUBAQYOVmFwQWRvYmVJZGVudGl0eUNvcHlyaWdodCAyMDEzLCAyMDE1IEFkb2JlIFN5c3RlbXMgSW5jb3Jwb3JhdGVkIChodHRwOi8vd3d3LmFkb2JlLmNvbS8pLkFkb2JlIEJsYW5rQWRvYmVCbGFuay0yMDQ5AAACAAEH/wMAAQAAAAgBCAECAAEASwBMAE0ATgBPAFAAUQBSAFMAVABVAFYAVwBYAFkAWgBbAFwAXQBeAF8AYABhAGIAYwBkAGUAZgBnAGgAaQBqAGsAbABtAG4AbwBwAHEAcgBzAHQAdQB2AHcAeAB5AHoAewB8AH0AfgB/AIAAgQCCAIMAhACFAIYAhwCIAIkAigCLAIwAjQCOAI8AkACRAJIAkwCUAJUAlgCXAJgAmQCaAJsAnACdAJ4AnwCgAKEAogCjAKQApQCmAKcAqACpAKoAqwCsAK0ArgCvALAAsQCyALMAtAC1ALYAtwC4ALkAugC7ALwAvQC+AL8AwADBAMIAwwDEAMUAxgDHAMgAyQDKAMsAzADNAM4AzwDQANEA0gDTANQA1QDWANcA2ADZANoA2wDcAN0A3gDfAOAA4QDiAOMA5ADlAOYA5wDoAOkA6gDrAOwA7QDuAO8A8ADxAPIA8wD0APUA9gD3APgA+QD6APsA/AD9AP4A/wEAAQEBAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMBFAEVARYBFwEYARkBGgEbARwBHQEeAR8BIAEhASIBIwEkASUBJgEnASgBKQEqASsBLAEtAS4BLwEwATEBMgEzATQBNQE2ATcBOAE5AToBOwE8AT0BPgE/AUABQQFCAUMBRAFFAUYBRwFIAUkBSgFLAUwBTQFOAU8BUAFRAVIBUwFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEBYgFjAWQBZQFmAWcBaAFpAWoBawFsAW0BbgFvAXABcQFyAXMBdAF1AXYBdwF4AXkBegF7AXwBfQF+AX8BgAGBAYIBgwGEAYUBhgGHAYgBiQGKAYsBjAGNAY4BjwGQAZEBkgGTAZQBlQGWAZcBmAGZAZoBmwGcAZ0BngGfAaABoQGiAaMBpAGlAaYBpwGoAakBqgGrAawBrQGuAa8BsAGxAbIBswG0AbUBtgG3AbgBuQG6AbsBvAG9Ab4BvwHAAcEBwgHDAcQBxQHGAccByAHJAcoBywHMAc0BzgHPAdAB0QHSAdMB1AHVAdYB1wHYAdkB2gHbAdwB3QHeAd8B4AHhAeIB4wHkAeUB5gHnAegB6QHqAesB7AHtAe4B7wHwAfEB8gHzAfQB9QH2AfcB+AH5AfoB+wH8Af0B/gH/AgACAQICAgMCBAIFAgYCBwIIAgkCCgILAgwCDQIOAg8CEAIRAhICEwIUAhUCFgIXAhgCGQIaAhsCHAIdAh4CHwIgAiECIgIjAiQCJQImAicCKAIpAioCKwIsAi0CLgIvAjACMQIyAjMCNAI1AjYCNwI4AjkCOgI7AjwCPQI+Aj8CQAJBAkICQwJEAkUCRgJHAkgCSQJKAksCTAJNAk4CTwJQAlECUgJTAlQCVQJWAlcCWAJZAloCWwJcAl0CXgJfAmACYQJiAmMCZAJlAmYCZwJoAmkCagJrAmwCbQJuAm8CcAJxAnICcwJ0AnUCdgJ3AngCeQJ6AnsCfAJ9An4CfwKAAoECggKDAoQChQKGAocCiAKJAooCiwKMAo0CjgKPApACkQKSApMClAKVApYClwKYApkCmgKbApwCnQKeAp8CoAKhAqICowKkAqUCpgKnAqgCqQKqAqsCrAKtAq4CrwKwArECsgKzArQCtQK2ArcCuAK5AroCuwK8Ar0CvgK/AsACwQLCAsMCxALFAsYCxwLIAskCygLLAswCzQLOAs8C0ALRAtIC0wLUAtUC1gLXAtgC2QLaAtsC3ALdAt4C3wLgAuEC4gLjAuQC5QLmAucC6ALpAuoC6wLsAu0C7gLvAvAC8QLyAvMC9AL1AvYC9wL4AvkC+gL7AvwC/QL+Av8DAAMBAwIDAwMEAwUDBgMHAwgDCQMKAwsDDAMNAw4DDwMQAxEDEgMTAxQDFQMWAxcDGAMZAxoDGwMcAx0DHgMfAyADIQMiAyMDJAMlAyYDJwMoAykDKgMrAywDLQMuAy8DMAMxAzIDMwM0AzUDNgM3AzgDOQM6AzsDPAM9Az4DPwNAA0EDQgNDA0QDRQNGA0cDSANJA0oDSwNMA00DTgNPA1ADUQNSA1MDVANVA1YDVwNYA1kDWgNbA1wDXQNeA18DYANhA2IDYwNkA2UDZgNnA2gDaQNqA2sDbANtA24DbwNwA3EDcgNzA3QDdQN2A3cDeAN5A3oDewN8A30DfgN/A4ADgQOCA4MDhAOFA4YDhwOIA4kDigOLA4wDjQOOA48DkAORA5IDkwOUA5UDlgOXA5gDmQOaA5sDnAOdA54DnwOgA6EDogOjA6QDpQOmA6cDqAOpA6oDqwOsA60DrgOvA7ADsQOyA7MDtAO1A7YDtwO4A7kDugO7A7wDvQO+A78DwAPBA8IDwwPEA8UDxgPHA8gDyQPKA8sDzAPNA84DzwPQA9ED0gPTA9QD1QPWA9cD2APZA9oD2wPcA90D3gPfA+AD4QPiA+MD5APlA+YD5wPoA+kD6gPrA+wD7QPuA+8D8APxA/ID8wP0A/UD9gP3A/gD+QP6A/sD/AP9A/4D/wQABAEEAgQDBAQEBQQGBAcECAQJBAoECwQMBA0EDgQPBBAEEQQSBBMEFAQVBBYEFwQYBBkEGgQbBBwEHQQeBB8EIAQhBCIEIwQkBCUEJgQnBCgEKQQqBCsELAQtBC4ELwQwBDEEMgQzBDQENQQ2BDcEOAQ5BDoEOwQ8BD0EPgQ/BEAEQQRCBEMERARFBEYERwRIBEkESgRLBEwETQROBE8EUARRBFIEUwRUBFUEVgRXBFgEWQRaBFsEXARdBF4EXwRgBGEEYgRjBGQEZQRmBGcEaARpBGoEawRsBG0EbgRvBHAEcQRyBHMEdAR1BHYEdwR4BHkEegR7BHwEfQR+BH8EgASBBIIEgwSEBIUEhgSHBIgEiQSKBIsEjASNBI4EjwSQBJEEkgSTBJQElQSWBJcEmASZBJoEmwScBJ0EngSfBKAEoQSiBKMEpASlBKYEpwSoBKkEqgSrBKwErQSuBK8EsASxBLIEswS0BLUEtgS3BLgEuQS6BLsEvAS9BL4EvwTABMEEwgTDBMQExQTGBMcEyATJBMoEywTMBM0EzgTPBNAE0QTSBNME1ATVBNYE1wTYBNkE2gTbBNwE3QTeBN8E4AThBOIE4wTkBOUE5gTnBOgE6QTqBOsE7ATtBO4E7wTwBPEE8gTzBPQE9QT2BPcE+AT5BPoE+wT8BP0E/gT/BQAFAQUCBQMFBAUFBQYFBwUIBQkFCgULBQwFDQUOBQ8FEAURBRIFEwUUBRUFFgUXBRgFGQUaBRsFHAUdBR4FHwUgBSEFIgUjBSQFJQUmBScFKAUpBSoFKwUsBS0FLgUvBTAFMQUyBTMFNAU1BTYFNwU4BTkFOgU7BTwFPQU+BT8FQAVBBUIFQwVEBUUFRgVHBUgFSQVKBUsFTAVNBU4FTwVQBVEFUgVTBVQFVQVWBVcFWAVZBVoFWwVcBV0FXgVfBWAFYQViBWMFZAVlBWYFZwVoBWkFagVrBWwFbQVuBW8FcAVxBXIFcwV0BXUFdgV3BXgFeQV6BXsFfAV9BX4FfwWABYEFggWDBYQFhQWGBYcFiAWJBYoFiwWMBY0FjgWPBZAFkQWSBZMFlAWVBZYFlwWYBZkFmgWbBZwFnQWeBZ8FoAWhBaIFowWkBaUFpgWnBagFqQWqBasFrAWtBa4FrwWwBbEFsgWzBbQFtQW2BbcFuAW5BboFuwW8Bb0FvgW/BcAFwQXCBcMFxAXFBcYFxwXIBckFygXLBcwFzQXOBc8F0AXRBdIF0wXUBdUF1gXXBdgF2QXaBdsF3AXdBd4F3wXgBeEF4gXjBeQF5QXmBecF6AXpBeoF6wXsBe0F7gXvBfAF8QXyBfMF9AX1BfYF9wX4BfkF+gX7BfwF/QX+Bf8GAAYBBgIGAwYEBgUGBgYHBggGCQYKBgsGDAYNBg4GDwYQBhEGEgYTBhQGFQYWBhcGGAYZBhoGGwYcBh0GHgYfBiAGIQYiBiMGJAYlBiYGJwYoBikGKgYrBiwGLQYuBi8GMAYxBjIGMwY0BjUGNgY3BjgGOQY6BjsGPAY9Bj4GPwZABkEGQgZDBkQGRQZGBkcGSAZJBkoGSwZMBk0GTgZPBlAGUQZSBlMGVAZVBlYGVwZYBlkGWgZbBlwGXQZeBl8GYAZhBmIGYwZkBmUGZgZnBmgGaQZqBmsGbAZtBm4GbwZwBnEGcgZzBnQGdQZ2BncGeAZ5BnoGewZ8Bn0GfgZ/BoAGgQaCBoMGhAaFBoYGhwaIBokGigaLBowGjQaOBo8GkAaRBpIGkwaUBpUGlgaXBpgGmQaaBpsGnAadBp4GnwagBqEGogajBqQGpQamBqcGqAapBqoGqwasBq0GrgavBrAGsQayBrMGtAa1BrYGtwa4BrkGuga7BrwGvQa+Br8GwAbBBsIGwwbEBsUGxgbHBsgGyQbKBssGzAbNBs4GzwbQBtEG0gbTBtQG1QbWBtcG2AbZBtoG2wbcBt0G3gbfBuAG4QbiBuMG5AblBuYG5wboBukG6gbrBuwG7QbuBu8G8AbxBvIG8wb0BvUG9gb3BvgG+Qb6BvsG/Ab9Bv4G/wcABwEHAgcDBwQHBQcGBwcHCAcJBwoHCwcMBw0HDgcPBxAHEQcSBxMHFAcVBxYHFwcYBxkHGgcbBxwHHQceBx8HIAchByIHIwckByUHJgcnBygHKQcqBysHLActBy4HLwcwBzEHMgczBzQHNQc2BzcHOAc5BzoHOwc8Bz0HPgc/B0AHQQdCB0MHRAdFB0YHRwdIB0kHSgdLB0wHTQdOB08HUAdRB1IHUwdUB1UHVgdXB1gHWQdaB1sHXAddB14HXwdgB2EHYgdjB2QHZQdmB2cHaAdpB2oHawdsB20HbgdvB3AHcQdyB3MHdAd1B3YHdwd4B3kHegd7B3wHfQd+B38HgAeBB4IHgweEB4UHhgeHB4gHiQeKB4sHjAeNB44HjweQB5EHkgeTB5QHlQeWB5cHmAeZB5oHmwecB50HngefB6AHoQeiB6MHpAelB6YHpweoB6kHqgerB6wHrQeuB68HsAexB7IHswe0B7UHtge3B7gHuQe6B7sHvAe9B74HvwfAB8EHwgfDB8QHxQfGB8cHyAfJB8oHywfMB80HzgfPB9AH0QfSB9MH1AfVB9YH1wfYB9kH2gfbB9wH3QfeB98H4AfhB+IH4wfkB+UH5gfnB+gH6QfqB+sH7AftB+4H7wfwB/EH8gfzB/QH9Qf2B/cH+Af5B/oH+wf8B/0H/gf/CAAIAQgCCAMIBAgFCAYIBwgICAkICggLCAwIDQgOCA8IEAgRCBIIEwgUCBUIFggXCBgIGQgaCBsIHAgdCB4IHwggCCEIIggjCCQIJQgmCCcIKAgpCCoIKwgsCC0ILggvCDAIMQgyCDMINAg1CDYINwg4CDkIOgg7CDwIPQg+CD8IQAhBCEIIQwhECEUIRghHCEgISQhKCEsg+wy3+iS3AfcQt/kstwP3EPoEFf58+YT6fAf9WP4nFfnSB/fF/DMFprAV+8X4NwX49gamYhX90gf7xfgzBXBmFffF/DcF/PYGDg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4OAAEBAQr4HwwmmhwZLRL7joscBUaLBr0KvQv65xUD6AB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAA==");}', 
    f.cssRules.length);
  };
  (function(h) {
    var r = f.Options.Option, w = f.Options.OptionSet, y = f.Settings.shumwayOptions, g = y.register(new w("Renderer Options"));
    h.imageUpdateOption = g.register(new r("", "imageUpdate", "boolean", !0, "Enable image updating."));
    h.imageConvertOption = g.register(new r("", "imageConvert", "boolean", !0, "Enable image conversion."));
    h.stageOptions = y.register(new w("Stage Renderer Options"));
    h.forcePaint = h.stageOptions.register(new r("", "forcePaint", "boolean", !1, "Force repainting."));
    h.ignoreViewport = h.stageOptions.register(new r("", "ignoreViewport", "boolean", !1, "Cull elements outside of the viewport."));
    h.viewportLoupeDiameter = h.stageOptions.register(new r("", "viewportLoupeDiameter", "number", 256, "Size of the viewport loupe.", {range:{min:1, max:1024, step:1}}));
    h.disableClipping = h.stageOptions.register(new r("", "disableClipping", "boolean", !1, "Disable clipping."));
    h.debugClipping = h.stageOptions.register(new r("", "debugClipping", "boolean", !1, "Disable clipping."));
    h.hud = h.stageOptions.register(new r("", "hud", "boolean", !1, "Enable HUD."));
    w = h.stageOptions.register(new w("Canvas2D Options"));
    h.clipDirtyRegions = w.register(new r("", "clipDirtyRegions", "boolean", !1, "Clip dirty regions."));
    h.clipCanvas = w.register(new r("", "clipCanvas", "boolean", !1, "Clip Regions."));
    h.cull = w.register(new r("", "cull", "boolean", !1, "Enable culling."));
    h.snapToDevicePixels = w.register(new r("", "snapToDevicePixels", "boolean", !1, ""));
    h.imageSmoothing = w.register(new r("", "imageSmoothing", "boolean", !1, ""));
    h.masking = w.register(new r("", "masking", "boolean", !0, "Composite Mask."));
    h.blending = w.register(new r("", "blending", "boolean", !0, ""));
    h.debugLayers = w.register(new r("", "debugLayers", "boolean", !1, ""));
    h.filters = w.register(new r("", "filters", "boolean", !0, ""));
    h.cacheShapes = w.register(new r("", "cacheShapes", "boolean", !0, ""));
    h.cacheShapesMaxSize = w.register(new r("", "cacheShapesMaxSize", "number", 256, "", {range:{min:1, max:1024, step:1}}));
    h.cacheShapesThreshold = w.register(new r("", "cacheShapesThreshold", "number", 256, "", {range:{min:1, max:1024, step:1}}));
    (function(g) {
      function d(a, b, c, d) {
        var e = 1 - d;
        return a * e * e + 2 * b * e * d + c * d * d;
      }
      function b(a, b, c, d, e) {
        var f = e * e, g = 1 - e, h = g * g;
        return a * g * h + 3 * b * e * h + 3 * c * g * f + d * e * f;
      }
      var e = f.NumberUtilities.clamp, c = f.NumberUtilities.pow2, p = f.NumberUtilities.epsilonEquals;
      g.radianToDegrees = function(a) {
        return 180 * a / Math.PI;
      };
      g.degreesToRadian = function(a) {
        return a * Math.PI / 180;
      };
      g.quadraticBezier = d;
      g.quadraticBezierExtreme = function(a, b, c) {
        var e = (a - b) / (a - 2 * b + c);
        return 0 > e ? a : 1 < e ? c : d(a, b, c, e);
      };
      g.cubicBezier = b;
      g.cubicBezierExtremes = function(a, k, c, d) {
        var e = k - a, f;
        f = 2 * (c - k);
        var g = d - c;
        e + g === f && (g *= 1.0001);
        var h = 2 * e - f, l = f - 2 * e, l = Math.sqrt(l * l - 4 * e * (e - f + g));
        f = 2 * (e - f + g);
        e = (h + l) / f;
        h = (h - l) / f;
        l = [];
        0 <= e && 1 >= e && l.push(b(a, k, c, d, e));
        0 <= h && 1 >= h && l.push(b(a, k, c, d, h));
        return l;
      };
      var a = function() {
        function a(b, c) {
          this.x = b;
          this.y = c;
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
          var d = a.y * c.x - a.x * c.y + (c.y - a.y) * this.x + (a.x - c.x) * this.y, e = a.x * b.y - a.y * b.x + (a.y - b.y) * this.x + (b.x - a.x) * this.y;
          if (0 > d != 0 > e) {
            return !1;
          }
          a = -b.y * c.x + a.y * (c.x - b.x) + a.x * (b.y - c.y) + b.x * c.y;
          0 > a && (d = -d, e = -e, a = -a);
          return 0 < d && 0 < e && d + e < a;
        };
        a.createEmpty = function() {
          return new a(0, 0);
        };
        a.createEmptyPoints = function(b) {
          for (var c = [], d = 0;d < b;d++) {
            c.push(new a(0, 0));
          }
          return c;
        };
        return a;
      }();
      g.Point = a;
      var l = function() {
        function a(b, c, d) {
          this.x = b;
          this.y = c;
          this.z = d;
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
        a.createEmptyPoints = function(b) {
          for (var c = [], d = 0;d < b;d++) {
            c.push(new a(0, 0, 0));
          }
          return c;
        };
        return a;
      }();
      g.Point3D = l;
      var r = function() {
        function b(a, c, d, e) {
          this.setElements(a, c, d, e);
          b.allocationCount++;
        }
        b.prototype.setElements = function(a, b, c, d) {
          this.x = a;
          this.y = b;
          this.w = c;
          this.h = d;
        };
        b.prototype.set = function(a) {
          this.x = a.x;
          this.y = a.y;
          this.w = a.w;
          this.h = a.h;
        };
        b.prototype.contains = function(a) {
          var b = a.x + a.w, c = a.y + a.h, d = this.x + this.w, e = this.y + this.h;
          return a.x >= this.x && a.x < d && a.y >= this.y && a.y < e && b > this.x && b <= d && c > this.y && c <= e;
        };
        b.prototype.containsPoint = function(a) {
          return a.x >= this.x && a.x < this.x + this.w && a.y >= this.y && a.y < this.y + this.h;
        };
        b.prototype.isContained = function(a) {
          for (var b = 0;b < a.length;b++) {
            if (a[b].contains(this)) {
              return !0;
            }
          }
          return !1;
        };
        b.prototype.isSmallerThan = function(a) {
          return this.w < a.w && this.h < a.h;
        };
        b.prototype.isLargerThan = function(a) {
          return this.w > a.w && this.h > a.h;
        };
        b.prototype.union = function(a) {
          if (this.isEmpty()) {
            this.set(a);
          } else {
            if (!a.isEmpty()) {
              var b = this.x, c = this.y;
              this.x > a.x && (b = a.x);
              this.y > a.y && (c = a.y);
              var d = this.x + this.w;
              d < a.x + a.w && (d = a.x + a.w);
              var e = this.y + this.h;
              e < a.y + a.h && (e = a.y + a.h);
              this.x = b;
              this.y = c;
              this.w = d - b;
              this.h = e - c;
            }
          }
        };
        b.prototype.isEmpty = function() {
          return 0 >= this.w || 0 >= this.h;
        };
        b.prototype.setEmpty = function() {
          this.h = this.w = this.y = this.x = 0;
        };
        b.prototype.intersect = function(a) {
          var c = b.createEmpty();
          this.isEmpty() || a.isEmpty() ? c.setEmpty() : (c.x = Math.max(this.x, a.x), c.y = Math.max(this.y, a.y), c.w = Math.min(this.x + this.w, a.x + a.w) - c.x, c.h = Math.min(this.y + this.h, a.y + a.h) - c.y, c.isEmpty() && c.setEmpty(), this.set(c));
        };
        b.prototype.intersects = function(a) {
          if (this.isEmpty() || a.isEmpty()) {
            return !1;
          }
          var b = Math.max(this.x, a.x), c = Math.max(this.y, a.y), b = Math.min(this.x + this.w, a.x + a.w) - b;
          a = Math.min(this.y + this.h, a.y + a.h) - c;
          return !(0 >= b || 0 >= a);
        };
        b.prototype.intersectsTransformedAABB = function(a, c) {
          var d = b._temporary;
          d.set(a);
          c.transformRectangleAABB(d);
          return this.intersects(d);
        };
        b.prototype.intersectsTranslated = function(a, b, c) {
          if (this.isEmpty() || a.isEmpty()) {
            return !1;
          }
          var d = Math.max(this.x, a.x + b), e = Math.max(this.y, a.y + c);
          b = Math.min(this.x + this.w, a.x + b + a.w) - d;
          a = Math.min(this.y + this.h, a.y + c + a.h) - e;
          return !(0 >= b || 0 >= a);
        };
        b.prototype.area = function() {
          return this.w * this.h;
        };
        b.prototype.clone = function() {
          var a = b.allocate();
          a.set(this);
          return a;
        };
        b.allocate = function() {
          var a = b._dirtyStack;
          return a.length ? a.pop() : new b(12345, 67890, 12345, 67890);
        };
        b.prototype.free = function() {
          b._dirtyStack.push(this);
        };
        b.prototype.snap = function() {
          var a = Math.ceil(this.x + this.w), b = Math.ceil(this.y + this.h);
          this.x = Math.floor(this.x);
          this.y = Math.floor(this.y);
          this.w = a - this.x;
          this.h = b - this.y;
          return this;
        };
        b.prototype.scale = function(a, b) {
          this.x *= a;
          this.y *= b;
          this.w *= a;
          this.h *= b;
          return this;
        };
        b.prototype.offset = function(a, b) {
          this.x += a;
          this.y += b;
          return this;
        };
        b.prototype.resize = function(a, b) {
          this.w += a;
          this.h += b;
          return this;
        };
        b.prototype.expand = function(a, b) {
          this.offset(-a, -b).resize(2 * a, 2 * b);
          return this;
        };
        b.prototype.getCenter = function() {
          return new a(this.x + this.w / 2, this.y + this.h / 2);
        };
        b.prototype.getAbsoluteBounds = function() {
          return new b(0, 0, this.w, this.h);
        };
        b.prototype.toString = function(a) {
          void 0 === a && (a = 2);
          return "{" + this.x.toFixed(a) + ", " + this.y.toFixed(a) + ", " + this.w.toFixed(a) + ", " + this.h.toFixed(a) + "}";
        };
        b.createEmpty = function() {
          var a = b.allocate();
          a.setEmpty();
          return a;
        };
        b.createSquare = function(a) {
          return new b(-a / 2, -a / 2, a, a);
        };
        b.createMaxI16 = function() {
          return new b(-32768, -32768, 65535, 65535);
        };
        b.prototype.setMaxI16 = function() {
          this.setElements(-32768, -32768, 65535, 65535);
        };
        b.prototype.getCorners = function(a) {
          a[0].x = this.x;
          a[0].y = this.y;
          a[1].x = this.x + this.w;
          a[1].y = this.y;
          a[2].x = this.x + this.w;
          a[2].y = this.y + this.h;
          a[3].x = this.x;
          a[3].y = this.y + this.h;
        };
        b.allocationCount = 0;
        b._temporary = new b(0, 0, 0, 0);
        b._dirtyStack = [];
        return b;
      }();
      g.Rectangle = r;
      var y = function() {
        function b(a) {
          this.corners = a.map(function(a) {
            return a.clone();
          });
          this.axes = [a[1].clone().sub(a[0]), a[3].clone().sub(a[0])];
          this.origins = [];
          for (var c = 0;2 > c;c++) {
            this.axes[c].mul(1 / this.axes[c].squaredLength()), this.origins.push(a[0].dot(this.axes[c]));
          }
        }
        b.prototype.getBounds = function() {
          return b.getBounds(this.corners);
        };
        b.getBounds = function(b) {
          for (var c = new a(Number.MAX_VALUE, Number.MAX_VALUE), d = new a(Number.MIN_VALUE, Number.MIN_VALUE), e = 0;4 > e;e++) {
            var f = b[e].x, n = b[e].y;
            c.x = Math.min(c.x, f);
            c.y = Math.min(c.y, n);
            d.x = Math.max(d.x, f);
            d.y = Math.max(d.y, n);
          }
          return new r(c.x, c.y, d.x - c.x, d.y - c.y);
        };
        b.prototype.intersects = function(a) {
          return this.intersectsOneWay(a) && a.intersectsOneWay(this);
        };
        b.prototype.intersectsOneWay = function(a) {
          for (var b = 0;2 > b;b++) {
            for (var c = 0;4 > c;c++) {
              var d = a.corners[c].dot(this.axes[b]), e, f;
              0 === c ? f = e = d : d < e ? e = d : d > f && (f = d);
            }
            if (e > 1 + this.origins[b] || f < this.origins[b]) {
              return !1;
            }
          }
          return !0;
        };
        return b;
      }();
      g.OBB = y;
      var w = function() {
        function a(b, c, d, e, f, g) {
          this._data = new Float64Array(6);
          this._type = 0;
          this.setElements(b, c, d, e, f, g);
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
        a.prototype.setElements = function(a, b, c, d, e, f) {
          var g = this._data;
          g[0] = a;
          g[1] = b;
          g[2] = c;
          g[3] = d;
          g[4] = e;
          g[5] = f;
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
        a.prototype.transform = function(a, b, c, d, e, f) {
          var g = this._data, n = g[0], A = g[1], v = g[2], m = g[3], h = g[4], D = g[5];
          g[0] = n * a + v * b;
          g[1] = A * a + m * b;
          g[2] = n * c + v * d;
          g[3] = A * c + m * d;
          g[4] = n * e + v * f + h;
          g[5] = A * e + m * f + D;
          this._type = 0;
          return this;
        };
        a.prototype.transformRectangle = function(a, b) {
          var c = this._data, d = c[0], e = c[1], f = c[2], g = c[3], n = c[4], c = c[5], h = a.x, v = a.y, m = a.w, H = a.h;
          b[0].x = d * h + f * v + n;
          b[0].y = e * h + g * v + c;
          b[1].x = d * (h + m) + f * v + n;
          b[1].y = e * (h + m) + g * v + c;
          b[2].x = d * (h + m) + f * (v + H) + n;
          b[2].y = e * (h + m) + g * (v + H) + c;
          b[3].x = d * h + f * (v + H) + n;
          b[3].y = e * h + g * (v + H) + c;
        };
        a.prototype.isTranslationOnly = function() {
          if (2 === this._type) {
            return !0;
          }
          var a = this._data;
          return 1 === a[0] && 0 === a[1] && 0 === a[2] && 1 === a[3] || p(a[0], 1) && p(a[1], 0) && p(a[2], 0) && p(a[3], 1) ? (this._type = 2, !0) : !1;
        };
        a.prototype.transformRectangleAABB = function(a) {
          var b = this._data;
          if (1 !== this._type) {
            if (2 === this._type) {
              a.x += b[4], a.y += b[5];
            } else {
              var c = b[0], d = b[1], e = b[2], f = b[3], g = b[4], n = b[5], h = a.x, v = a.y, m = a.w, H = a.h, b = c * h + e * v + g, D = d * h + f * v + n, l = c * (h + m) + e * v + g, p = d * (h + m) + f * v + n, R = c * (h + m) + e * (v + H) + g, m = d * (h + m) + f * (v + H) + n, c = c * h + e * (v + H) + g, d = d * h + f * (v + H) + n, f = 0;
              b > l && (f = b, b = l, l = f);
              R > c && (f = R, R = c, c = f);
              a.x = b < R ? b : R;
              a.w = (l > c ? l : c) - a.x;
              D > p && (f = D, D = p, p = f);
              m > d && (f = m, m = d, d = f);
              a.y = D < m ? D : m;
              a.h = (p > d ? p : d) - a.y;
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
          var b = this._data, c = b[0], d = b[1], e = b[2], f = b[3], g = b[4], n = b[5], h = Math.cos(a);
          a = Math.sin(a);
          b[0] = h * c - a * d;
          b[1] = a * c + h * d;
          b[2] = h * e - a * f;
          b[3] = a * e + h * f;
          b[4] = h * g - a * n;
          b[5] = a * g + h * n;
          this._type = 0;
          return this;
        };
        a.prototype.concat = function(a) {
          if (1 === a._type) {
            return this;
          }
          var b = this._data;
          a = a._data;
          var c = b[0] * a[0], d = 0, e = 0, f = b[3] * a[3], g = b[4] * a[0] + a[4], n = b[5] * a[3] + a[5];
          if (0 !== b[1] || 0 !== b[2] || 0 !== a[1] || 0 !== a[2]) {
            c += b[1] * a[2], f += b[2] * a[1], d += b[0] * a[1] + b[1] * a[3], e += b[2] * a[0] + b[3] * a[2], g += b[5] * a[2], n += b[4] * a[1];
          }
          b[0] = c;
          b[1] = d;
          b[2] = e;
          b[3] = f;
          b[4] = g;
          b[5] = n;
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
              var d = 0, e = 0, f = c[3] * b[3], g = c[4] * b[0] + b[4], n = c[5] * b[3] + b[5];
              if (0 !== c[1] || 0 !== c[2] || 0 !== b[1] || 0 !== b[2]) {
                a += c[1] * b[2], f += c[2] * b[1], d += c[0] * b[1] + c[1] * b[3], e += c[2] * b[0] + c[3] * b[2], g += c[5] * b[2], n += c[4] * b[1];
              }
              b[0] = a;
              b[1] = d;
              b[2] = e;
              b[3] = f;
              b[4] = g;
              b[5] = n;
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
            var b = this._data, c = a.x, d = a.y;
            a.x = b[0] * c + b[2] * d + b[4];
            a.y = b[1] * c + b[3] * d + b[5];
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
            var b = this._data, c = a.x, d = a.y;
            a.x = b[0] * c + b[2] * d;
            a.y = b[1] * c + b[3] * d;
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
              var d = b[1], e = b[2], f = b[4], g = b[5];
              if (0 === d && 0 === e) {
                var n = c[0] = 1 / b[0], b = c[3] = 1 / b[3];
                c[1] = 0;
                c[2] = 0;
                c[4] = -n * f;
                c[5] = -b * g;
              } else {
                var n = b[0], b = b[3], h = n * b - d * e;
                if (0 === h) {
                  a.setIdentity();
                  return;
                }
                h = 1 / h;
                c[0] = b * h;
                d = c[1] = -d * h;
                e = c[2] = -e * h;
                b = c[3] = n * h;
                c[4] = -(c[0] * f + e * g);
                c[5] = -(d * f + b * g);
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
        a.multiply = function(a, b) {
          var c = b._data;
          a.transform(c[0], c[1], c[2], c[3], c[4], c[5]);
        };
        return a;
      }();
      g.Matrix = w;
      w = function() {
        function a(b) {
          this._m = new Float32Array(b);
        }
        a.prototype.asWebGLMatrix = function() {
          return this._m;
        };
        a.createCameraLookAt = function(b, c, d) {
          c = b.clone().sub(c).normalize();
          d = d.clone().cross(c).normalize();
          var e = c.clone().cross(d);
          return new a([d.x, d.y, d.z, 0, e.x, e.y, e.z, 0, c.x, c.y, c.z, 0, b.x, b.y, b.z, 1]);
        };
        a.createLookAt = function(b, c, d) {
          c = b.clone().sub(c).normalize();
          d = d.clone().cross(c).normalize();
          var e = c.clone().cross(d);
          return new a([d.x, e.x, c.x, 0, e.x, e.y, c.y, 0, c.x, e.z, c.z, 0, -d.dot(b), -e.dot(b), -c.dot(b), 1]);
        };
        a.prototype.mul = function(a) {
          a = [a.x, a.y, a.z, 0];
          for (var b = this._m, c = [], d = 0;4 > d;d++) {
            c[d] = 0;
            for (var e = 4 * d, f = 0;4 > f;f++) {
              c[d] += b[e + f] * a[f];
            }
          }
          return new l(c[0], c[1], c[2]);
        };
        a.create2DProjection = function(b, c, d) {
          return new a([2 / b, 0, 0, 0, 0, -2 / c, 0, 0, 0, 0, 2 / d, 0, -1, 1, 0, 1]);
        };
        a.createPerspective = function(b, c, d, e) {
          b = Math.tan(.5 * Math.PI - .5 * b);
          var f = 1 / (d - e);
          return new a([b / c, 0, 0, 0, 0, b, 0, 0, 0, 0, (d + e) * f, -1, 0, 0, d * e * f * 2, 0]);
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
          var d = b._m, e = c._m, f = d[0], g = d[1], h = d[2], l = d[3], A = d[4], v = d[5], m = d[6], H = d[7], D = d[8], p = d[9], M = d[10], R = d[11], x = d[12], q = d[13], Q = d[14], d = d[15], r = e[0], u = e[1], S = e[2], T = e[3], Y = e[4], P = e[5], U = e[6], y = e[7], w = e[8], K = e[9], E = e[10], I = e[11], V = e[12], W = e[13], L = e[14], e = e[15];
          return new a([f * r + g * Y + h * w + l * V, f * u + g * P + h * K + l * W, f * S + g * U + h * E + l * L, f * T + g * y + h * I + l * e, A * r + v * Y + m * w + H * V, A * u + v * P + m * K + H * W, A * S + v * U + m * E + H * L, A * T + v * y + m * I + H * e, D * r + p * Y + M * w + R * V, D * u + p * P + M * K + R * W, D * S + p * U + M * E + R * L, D * T + p * y + M * I + R * e, x * r + q * Y + Q * w + d * V, x * u + q * P + Q * K + d * W, x * S + q * U + Q * E + d * L, x * T + q * 
          y + Q * I + d * e]);
        };
        a.createInverse = function(b) {
          var c = b._m;
          b = c[0];
          var d = c[1], e = c[2], f = c[3], g = c[4], h = c[5], l = c[6], A = c[7], v = c[8], m = c[9], H = c[10], D = c[11], p = c[12], M = c[13], x = c[14], c = c[15], q = H * c, O = x * D, Q = l * c, r = x * A, u = l * D, S = H * A, T = e * c, y = x * f, P = e * D, U = H * f, w = e * A, K = l * f, E = v * M, I = p * m, L = g * M, V = p * h, W = g * m, Z = v * h, aa = b * M, ba = p * d, ca = b * m, da = v * d, ea = b * h, fa = g * d, qa = q * h + r * m + u * M - (O * h + Q * m + S * M), X = O * 
          d + T * m + U * M - (q * d + y * m + P * M), M = Q * d + y * h + w * M - (r * d + T * h + K * M), d = S * d + P * h + K * m - (u * d + U * h + w * m), h = 1 / (b * qa + g * X + v * M + p * d);
          return new a([h * qa, h * X, h * M, h * d, h * (O * g + Q * v + S * p - (q * g + r * v + u * p)), h * (q * b + y * v + P * p - (O * b + T * v + U * p)), h * (r * b + T * g + K * p - (Q * b + y * g + w * p)), h * (u * b + U * g + w * v - (S * b + P * g + K * v)), h * (E * A + V * D + W * c - (I * A + L * D + Z * c)), h * (I * f + aa * D + da * c - (E * f + ba * D + ca * c)), h * (L * f + ba * A + ea * c - (V * f + aa * A + fa * c)), h * (Z * f + ca * A + fa * D - (W * f + da * A + ea * D)), 
          h * (L * H + Z * x + I * l - (W * x + E * l + V * H)), h * (ca * x + E * e + ba * H - (aa * H + da * x + I * e)), h * (aa * l + fa * x + V * e - (ea * x + L * e + ba * l)), h * (ea * H + W * e + da * l - (ca * l + fa * H + Z * e))]);
        };
        return a;
      }();
      g.Matrix3D = w;
      w = function() {
        function a(b, c, d) {
          void 0 === d && (d = 7);
          var e = this.size = 1 << d;
          this.sizeInBits = d;
          this.w = b;
          this.h = c;
          this.c = Math.ceil(b / e);
          this.r = Math.ceil(c / e);
          this.grid = [];
          for (b = 0;b < this.r;b++) {
            for (this.grid.push([]), c = 0;c < this.c;c++) {
              this.grid[b][c] = new a.Cell(new r(c * e, b * e, e, e));
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
          var b = a.x >> this.sizeInBits, c = a.y >> this.sizeInBits;
          if (!(b >= this.c || c >= this.r)) {
            0 > b && (b = 0);
            0 > c && (c = 0);
            var d = this.grid[c][b];
            a = a.clone();
            a.snap();
            if (d.region.contains(a)) {
              d.bounds.isEmpty() ? d.bounds.set(a) : d.bounds.contains(a) || d.bounds.union(a);
            } else {
              for (var e = Math.min(this.c, Math.ceil((a.x + a.w) / this.size)) - b, f = Math.min(this.r, Math.ceil((a.y + a.h) / this.size)) - c, g = 0;g < e;g++) {
                for (var n = 0;n < f;n++) {
                  d = this.grid[c + n][b + g], d = d.region.clone(), d.intersect(a), d.isEmpty() || this.addDirtyRectangle(d);
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
            for (var d = 0;d < this.c;d++) {
              b += this.grid[c][d].region.area();
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
            for (var d = 0;d < this.r;d++) {
              for (var e = 0;e < this.c;e++) {
                var f = this.grid[d][e];
                a.beginPath();
                c(f.region);
                a.closePath();
                a.stroke();
              }
            }
          }
          a.strokeStyle = "#E0F8D8";
          for (d = 0;d < this.r;d++) {
            for (e = 0;e < this.c;e++) {
              f = this.grid[d][e], a.beginPath(), c(f.bounds), a.closePath(), a.stroke();
            }
          }
        };
        a.tmpRectangle = r.createEmpty();
        return a;
      }();
      g.DirtyRegion = w;
      (function(a) {
        var b = function() {
          function a(b) {
            this.region = b;
            this.bounds = r.createEmpty();
          }
          a.prototype.clear = function() {
            this.bounds.setEmpty();
          };
          return a;
        }();
        a.Cell = b;
      })(w = g.DirtyRegion || (g.DirtyRegion = {}));
      var q = function() {
        function b(a, c, d, e, f, g) {
          this.index = a;
          this.x = c;
          this.y = d;
          this.scale = g;
          this.bounds = new r(c * e, d * f, e, f);
        }
        b.prototype.getOBB = function() {
          if (this._obb) {
            return this._obb;
          }
          this.bounds.getCorners(b.corners);
          return this._obb = new y(b.corners);
        };
        b.corners = a.createEmptyPoints(4);
        return b;
      }();
      g.Tile = q;
      var x = function() {
        function b(a, c, d, e, f) {
          this.tileW = d;
          this.tileH = e;
          this.scale = f;
          this.w = a;
          this.h = c;
          this.rows = Math.ceil(c / e);
          this.columns = Math.ceil(a / d);
          this.tiles = [];
          for (c = a = 0;c < this.rows;c++) {
            for (var g = 0;g < this.columns;g++) {
              this.tiles.push(new q(a++, g, c, d, e, f));
            }
          }
        }
        b.prototype.getTiles = function(a, b) {
          if (b.emptyArea(a)) {
            return [];
          }
          if (b.infiniteArea(a)) {
            return this.tiles;
          }
          var c = this.columns * this.rows;
          return 40 > c && b.isScaleOrRotation() ? this.getFewTiles(a, b, 10 < c) : this.getManyTiles(a, b);
        };
        b.prototype.getFewTiles = function(a, c, d) {
          void 0 === d && (d = !0);
          if (c.isTranslationOnly() && 1 === this.tiles.length) {
            return this.tiles[0].bounds.intersectsTranslated(a, c.tx, c.ty) ? [this.tiles[0]] : [];
          }
          c.transformRectangle(a, b._points);
          var f;
          a = new r(0, 0, this.w, this.h);
          d && (f = new y(b._points));
          a.intersect(y.getBounds(b._points));
          if (a.isEmpty()) {
            return [];
          }
          var g = a.x / this.tileW | 0;
          c = a.y / this.tileH | 0;
          var h = Math.ceil((a.x + a.w) / this.tileW) | 0, l = Math.ceil((a.y + a.h) / this.tileH) | 0, g = e(g, 0, this.columns), h = e(h, 0, this.columns);
          c = e(c, 0, this.rows);
          for (var l = e(l, 0, this.rows), p = [];g < h;g++) {
            for (var A = c;A < l;A++) {
              var v = this.tiles[A * this.columns + g];
              v.bounds.intersects(a) && (d ? v.getOBB().intersects(f) : 1) && p.push(v);
            }
          }
          return p;
        };
        b.prototype.getManyTiles = function(a, c) {
          function d(a, b, c) {
            return (a - b.x) * (c.y - b.y) / (c.x - b.x) + b.y;
          }
          function f(a, b, c, d, m) {
            if (!(0 > c || c >= b.columns)) {
              for (d = e(d, 0, b.rows), m = e(m + 1, 0, b.rows);d < m;d++) {
                a.push(b.tiles[d * b.columns + c]);
              }
            }
          }
          var g = b._points;
          c.transformRectangle(a, g);
          for (var h = g[0].x < g[1].x ? 0 : 1, l = g[2].x < g[3].x ? 2 : 3, l = g[h].x < g[l].x ? h : l, h = [], p = 0;5 > p;p++, l++) {
            h.push(g[l % 4]);
          }
          (h[1].x - h[0].x) * (h[3].y - h[0].y) < (h[1].y - h[0].y) * (h[3].x - h[0].x) && (g = h[1], h[1] = h[3], h[3] = g);
          var g = [], A, v, l = Math.floor(h[0].x / this.tileW), p = (l + 1) * this.tileW;
          if (h[2].x < p) {
            A = Math.min(h[0].y, h[1].y, h[2].y, h[3].y);
            v = Math.max(h[0].y, h[1].y, h[2].y, h[3].y);
            var m = Math.floor(A / this.tileH), H = Math.floor(v / this.tileH);
            f(g, this, l, m, H);
            return g;
          }
          var D = 0, N = 4, M = !1;
          if (h[0].x === h[1].x || h[0].x === h[3].x) {
            h[0].x === h[1].x ? (M = !0, D++) : N--, A = d(p, h[D], h[D + 1]), v = d(p, h[N], h[N - 1]), m = Math.floor(h[D].y / this.tileH), H = Math.floor(h[N].y / this.tileH), f(g, this, l, m, H), l++;
          }
          do {
            var x, q, O, Q;
            h[D + 1].x < p ? (x = h[D + 1].y, O = !0) : (x = d(p, h[D], h[D + 1]), O = !1);
            h[N - 1].x < p ? (q = h[N - 1].y, Q = !0) : (q = d(p, h[N], h[N - 1]), Q = !1);
            m = Math.floor((h[D].y < h[D + 1].y ? A : x) / this.tileH);
            H = Math.floor((h[N].y > h[N - 1].y ? v : q) / this.tileH);
            f(g, this, l, m, H);
            if (O && M) {
              break;
            }
            O ? (M = !0, D++, A = d(p, h[D], h[D + 1])) : A = x;
            Q ? (N--, v = d(p, h[N], h[N - 1])) : v = q;
            l++;
            p = (l + 1) * this.tileW;
          } while (D < N);
          return g;
        };
        b._points = a.createEmptyPoints(4);
        return b;
      }();
      g.TileCache = x;
      w = function() {
        function a(b, c, d) {
          this._cacheLevels = [];
          this._source = b;
          this._tileSize = c;
          this._minUntiledSize = d;
        }
        a.prototype._getTilesAtScale = function(a, b, d) {
          var f = Math.max(b.getAbsoluteScaleX(), b.getAbsoluteScaleY()), g = 0;
          1 !== f && (g = e(Math.round(Math.log(1 / f) / Math.LN2), -5, 3));
          f = c(g);
          if (this._source.hasFlags(256)) {
            for (;;) {
              f = c(g);
              if (d.contains(this._source.getBounds().getAbsoluteBounds().clone().scale(f, f))) {
                break;
              }
              g--;
            }
          }
          this._source.hasFlags(512) || (g = e(g, -5, 0));
          f = c(g);
          d = 5 + g;
          g = this._cacheLevels[d];
          if (!g) {
            var g = this._source.getBounds().getAbsoluteBounds().clone().scale(f, f), h, n;
            this._source.hasFlags(256) || !this._source.hasFlags(1024) || Math.max(g.w, g.h) <= this._minUntiledSize ? (h = g.w, n = g.h) : h = n = this._tileSize;
            g = this._cacheLevels[d] = new x(g.w, g.h, h, n, f);
          }
          return g.getTiles(a, b.scaleClone(f, f));
        };
        a.prototype.fetchTiles = function(a, b, c, d) {
          var e = new r(0, 0, c.canvas.width, c.canvas.height);
          a = this._getTilesAtScale(a, b, e);
          var f;
          b = this._source;
          for (var g = 0;g < a.length;g++) {
            var h = a[g];
            h.cachedSurfaceRegion && h.cachedSurfaceRegion.surface && !b.hasFlags(4352) || (f || (f = []), f.push(h));
          }
          f && this._cacheTiles(c, f, d, e);
          b.removeFlags(4096);
          return a;
        };
        a.prototype._getTileBounds = function(a) {
          for (var b = r.createEmpty(), c = 0;c < a.length;c++) {
            b.union(a[c].bounds);
          }
          return b;
        };
        a.prototype._cacheTiles = function(a, b, c, d, e) {
          void 0 === e && (e = 4);
          var f = this._getTileBounds(b);
          a.save();
          a.setTransform(1, 0, 0, 1, 0, 0);
          a.clearRect(0, 0, d.w, d.h);
          a.translate(-f.x, -f.y);
          a.scale(b[0].scale, b[0].scale);
          var g = this._source.getBounds();
          a.translate(-g.x, -g.y);
          2 <= h.traceLevel && h.writer && h.writer.writeLn("Rendering Tiles: " + f);
          this._source.render(a, 0);
          a.restore();
          for (var g = null, n = 0;n < b.length;n++) {
            var l = b[n], v = l.bounds.clone();
            v.x -= f.x;
            v.y -= f.y;
            d.contains(v) || (g || (g = []), g.push(l));
            l.cachedSurfaceRegion = c(l.cachedSurfaceRegion, a, v);
          }
          g && (2 <= g.length ? (b = g.slice(0, g.length / 2 | 0), f = g.slice(b.length), this._cacheTiles(a, b, c, d, e - 1), this._cacheTiles(a, f, c, d, e - 1)) : this._cacheTiles(a, g, c, d, e - 1));
        };
        return a;
      }();
      g.RenderableTileCache = w;
    })(h.Geometry || (h.Geometry = {}));
  })(f.GFX || (f.GFX = {}));
})(Shumway || (Shumway = {}));
__extends = this && this.__extends || function(f, h) {
  function u() {
    this.constructor = f;
  }
  for (var r in h) {
    h.hasOwnProperty(r) && (f[r] = h[r]);
  }
  u.prototype = h.prototype;
  f.prototype = new u;
};
(function(f) {
  (function(h) {
    function u(a) {
      if (1 === a) {
        return "Node";
      }
      if (3 === a) {
        return "Shape";
      }
      if (5 === a) {
        return "Group";
      }
      if (13 === a) {
        return "Stage";
      }
      if (33 === a) {
        return "Renderable";
      }
    }
    function r(a, b, c) {
      return a + (b - a) * c;
    }
    function w(a, b, c) {
      return r(a >> 24 & 255, b >> 24 & 255, c) << 24 | r(a >> 16 & 255, b >> 16 & 255, c) << 16 | r(a >> 8 & 255, b >> 8 & 255, c) << 8 | r(a & 255, b & 255, c);
    }
    function y(a, b, c) {
      a = a.measureText(b).width | 0;
      0 < c && (a += b.length * c);
      return a;
    }
    function g(a, b, c, d, e) {
      b = z[b - 1];
      e && (e = b / 4, c -= e, d -= e);
      e = Math.ceil((1 > c ? 1 : c) / (b - 1E-9));
      b = Math.ceil((1 > d ? 1 : d) / (b - 1E-9));
      a.x -= e;
      a.w += 2 * e;
      a.y -= b;
      a.h += 2 * b;
    }
    var E = f.IntegerUtilities.roundToMultipleOfPowerOfTwo, d = h.Geometry.Rectangle;
    (function(a) {
      var b = function(a) {
        function b() {
          a.apply(this, arguments);
        }
        __extends(b, a);
        return b;
      }(h.Geometry.Rectangle);
      a.Region = b;
      var c = function() {
        function a(b, c) {
          this._root = new e(0, 0, b | 0, c | 0, !1);
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
      a.CompactAllocator = c;
      var e = function(a) {
        function b(c, d, m, e, f) {
          a.call(this, c, d, m, e);
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
        b.prototype._insert = function(a, d, e) {
          if (!(e > c.MAX_DEPTH || this.allocated || this.w < a || this.h < d)) {
            if (this._children) {
              var f;
              if ((f = this._children[0]._insert(a, d, e + 1)) || (f = this._children[1]._insert(a, d, e + 1))) {
                return f;
              }
            } else {
              return f = !this._horizontal, c.RANDOM_ORIENTATION && (f = .5 <= Math.random()), this._children = this._horizontal ? [new b(this.x, this.y, this.w, d, !1), new b(this.x, this.y + d, this.w, this.h - d, f)] : [new b(this.x, this.y, a, this.h, !0), new b(this.x + a, this.y, this.w - a, this.h, f)], f = this._children[0], f.w === a && f.h === d ? (f.allocated = !0, f) : this._insert(a, d, e + 1);
            }
          }
        };
        return b;
      }(a.Region), f = function() {
        function a(b, c, d, m) {
          this._columns = b / d | 0;
          this._rows = c / m | 0;
          this._sizeW = d;
          this._sizeH = m;
          this._freeList = [];
          this._index = 0;
          this._total = this._columns * this._rows;
        }
        a.prototype.allocate = function(a, b) {
          a = Math.ceil(a);
          b = Math.ceil(b);
          var c = this._sizeW, d = this._sizeH;
          if (a > c || b > d) {
            return null;
          }
          var m = this._freeList, e = this._index;
          return 0 < m.length ? (c = m.pop(), c.w = a, c.h = b, c.allocated = !0, c) : e < this._total ? (m = e / this._columns | 0, c = new g((e - m * this._columns) * c, m * d, a, b), c.index = e, c.allocator = this, c.allocated = !0, this._index++, c) : null;
        };
        a.prototype.free = function(a) {
          a.allocated = !1;
          this._freeList.push(a);
        };
        return a;
      }();
      a.GridAllocator = f;
      var g = function(a) {
        function b(c, d, m, e) {
          a.call(this, c, d, m, e);
          this.index = -1;
        }
        __extends(b, a);
        return b;
      }(a.Region);
      a.GridCell = g;
      var k = function() {
        return function(a, b, c) {
          this.size = a;
          this.region = b;
          this.allocator = c;
        };
      }(), n = function(a) {
        function b(c, d, m, e, f) {
          a.call(this, c, d, m, e);
          this.region = f;
        }
        __extends(b, a);
        return b;
      }(a.Region);
      a.BucketCell = n;
      b = function() {
        function a(b, c) {
          this._buckets = [];
          this._w = b | 0;
          this._h = c | 0;
          this._filled = 0;
        }
        a.prototype.allocate = function(a, b) {
          a = Math.ceil(a);
          b = Math.ceil(b);
          var c = Math.max(a, b);
          if (a > this._w || b > this._h) {
            return null;
          }
          var m = null, e, g = this._buckets;
          do {
            for (var h = 0;h < g.length && !(g[h].size >= c && (e = g[h], m = e.allocator.allocate(a, b)));h++) {
            }
            if (!m) {
              var v = this._h - this._filled;
              if (v < b) {
                return null;
              }
              var h = E(c, 8), l = 2 * h;
              l > v && (l = v);
              if (l < h) {
                return null;
              }
              v = new d(0, this._filled, this._w, l);
              this._buckets.push(new k(h, v, new f(v.w, v.h, h, h)));
              this._filled += l;
            }
          } while (!m);
          return new n(e.region.x + m.x, e.region.y + m.y, m.w, m.h, m);
        };
        a.prototype.free = function(a) {
          a.region.allocator.free(a.region);
        };
        return a;
      }();
      a.BucketAllocator = b;
    })(h.RegionAllocator || (h.RegionAllocator = {}));
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
          for (var d = 0;d < this._surfaces.length;d++) {
            var m = this._surfaces[d];
            if (m !== c && (m = m.allocate(a, b))) {
              return m;
            }
          }
          return this._createNewSurface(a, b).allocate(a, b);
        };
        a.prototype.free = function(a) {
        };
        return a;
      }();
      a.SimpleAllocator = b;
    })(h.SurfaceRegionAllocator || (h.SurfaceRegionAllocator = {}));
    var d = h.Geometry.Rectangle, b = h.Geometry.Matrix, e = h.Geometry.DirtyRegion;
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
    })(h.BlendMode || (h.BlendMode = {}));
    var c = h.BlendMode, p = function() {
      function a() {
      }
      a.prototype.visitNode = function(a, b) {
      };
      a.prototype.visitShape = function(a, b) {
        this.visitNode(a, b);
      };
      a.prototype.visitGroup = function(a, b) {
        this.visitNode(a, b);
        for (var c = a.getChildren(), d = 0;d < c.length;d++) {
          c[d].visit(this, b);
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
    h.NodeVisitor = p;
    var a = function() {
      return function() {
      };
    }();
    h.State = a;
    var l = function(a) {
      function c(d) {
        a.call(this);
        this.matrix = b.createIdentity();
        this.depth = 0;
      }
      __extends(c, a);
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
    }(a);
    h.PreRenderState = l;
    var K = function(a) {
      function b() {
        a.apply(this, arguments);
        this.isDirty = !0;
      }
      __extends(b, a);
      b.prototype.start = function(a, b) {
        this._dirtyRegion = b;
        var c = l.allocate();
        c.matrix.setIdentity();
        a.visit(this, c);
        c.free();
      };
      b.prototype.visitGroup = function(a, b) {
        var c = a.getChildren();
        this.visitNode(a, b);
        for (var d = 0;d < c.length;d++) {
          var e = c[d], f = b.transform(e.getTransform());
          e.visit(this, f);
          f.free();
        }
      };
      b.prototype.visitNode = function(a, b) {
        a.hasFlags(4096) && (this.isDirty = !0);
        a.toggleFlags(4096, !1);
        a.depth = b.depth++;
      };
      return b;
    }(p);
    h.PreRenderVisitor = K;
    a = function(a) {
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
        for (var d = 0;d < c.length;d++) {
          c[d].visit(this, b);
        }
        this.writer.outdent();
      };
      b.prototype.visitStage = function(a, b) {
        this.visitGroup(a, b);
      };
      return b;
    }(p);
    h.TracingNodeVisitor = a;
    var I = function() {
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
            var d = b[c];
            d.type === a && d.listener(this, a);
          }
        }
      };
      a.prototype.addEventListener = function(a, b) {
        this._eventListeners || (this._eventListeners = []);
        this._eventListeners.push({type:a, listener:b});
      };
      a.prototype.removeEventListener = function(a, b) {
        for (var c = this._eventListeners, d = 0;d < c.length;d++) {
          var e = c[d];
          if (e.type === a && e.listener === b) {
            c.splice(d, 1);
            break;
          }
        }
      };
      Object.defineProperty(a.prototype, "properties", {get:function() {
        return this._properties || (this._properties = {});
      }, enumerable:!0, configurable:!0});
      a.prototype.reset = function() {
        this._flags = 59393;
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
        (this._bounds || (this._bounds = d.createEmpty())).set(a);
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
        var d = a._path;
        for (d.length = 0;b && b !== c;) {
          d.push(b), b = b._parent;
        }
        return d;
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
        null === this._transform && (this._transform = new q(this));
        return this._transform;
      };
      a.prototype.getLayer = function() {
        null === this._layer && (this._layer = new x(this));
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
        this._propagateFlagsUp(12288);
      };
      a.prototype.toString = function(a) {
        void 0 === a && (a = !1);
        var b = u(this._type) + " " + this._id;
        a && (b += " " + this._bounds.toString());
        return b;
      };
      a._path = [];
      a._nextId = 0;
      return a;
    }();
    h.Node = I;
    var L = function(a) {
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
        this._propagateFlagsUp(12288);
        a._propagateFlagsDown(114688);
      };
      b.prototype.removeChildAt = function(a) {
        var b = this._children[a];
        this._children.splice(a, 1);
        b._index = -1;
        b._parent = null;
        this._propagateFlagsUp(12288);
        b._propagateFlagsDown(114688);
      };
      b.prototype.clearChildren = function() {
        for (var a = 0;a < this._children.length;a++) {
          var b = this._children[a];
          b && (b._index = -1, b._parent = null, b._propagateFlagsDown(114688));
        }
        this._children.length = 0;
        this._propagateFlagsUp(12288);
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
        var b = this._bounds || (this._bounds = d.createEmpty());
        if (this.hasFlags(8192)) {
          b.setEmpty();
          for (var c = this._children, e = d.allocate(), f = 0;f < c.length;f++) {
            var g = c[f];
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
        for (var b = d.createEmpty(), c = this._children, e = d.allocate(), f = 0;f < c.length;f++) {
          var g = c[f];
          e.set(g.getLayerBounds(a));
          g.getTransformMatrix().transformRectangleAABB(e);
          b.union(e);
        }
        e.free();
        a && this._layer && this._layer.expandBounds(b);
        return b;
      };
      return b;
    }(I);
    h.Group = L;
    var q = function() {
      function a(c) {
        this._node = c;
        this._matrix = b.createIdentity();
        this._colorMatrix = h.ColorMatrix.createIdentity();
        this._concatenatedMatrix = b.createIdentity();
        this._invertedConcatenatedMatrix = b.createIdentity();
        this._concatenatedColorMatrix = h.ColorMatrix.createIdentity();
      }
      a.prototype.setMatrix = function(a) {
        this._matrix.isEqual(a) || (this._matrix.set(a), this._node._propagateFlagsUp(12288), this._node._propagateFlagsDown(49152));
      };
      a.prototype.setColorMatrix = function(a) {
        this._colorMatrix.set(a);
        this._node._propagateFlagsUp(4096);
        this._node._propagateFlagsDown(65536);
      };
      a.prototype.getMatrix = function(a) {
        void 0 === a && (a = !1);
        return a ? this._matrix.clone() : this._matrix;
      };
      a.prototype.hasColorMatrix = function() {
        return null !== this._colorMatrix;
      };
      a.prototype.getColorMatrix = function(a) {
        void 0 === a && (a = !1);
        null === this._colorMatrix && (this._colorMatrix = h.ColorMatrix.createIdentity());
        return a ? this._colorMatrix.clone() : this._colorMatrix;
      };
      a.prototype.getConcatenatedMatrix = function(a) {
        void 0 === a && (a = !1);
        if (this._node.hasFlags(16384)) {
          for (var c = this._node._findClosestAncestor(16384, !1), d = I._getAncestors(this._node, c), e = c ? c.getTransform()._concatenatedMatrix.clone() : b.createIdentity(), f = d.length - 1;0 <= f;f--) {
            var c = d[f], g = c.getTransform();
            e.preMultiply(g._matrix);
            g._concatenatedMatrix.set(e);
            c.removeFlags(16384);
          }
        }
        return a ? this._concatenatedMatrix.clone() : this._concatenatedMatrix;
      };
      a.prototype.getInvertedConcatenatedMatrix = function(a) {
        void 0 === a && (a = !1);
        this._node.hasFlags(32768) && (this.getConcatenatedMatrix().inverse(this._invertedConcatenatedMatrix), this._node.removeFlags(32768));
        return a ? this._invertedConcatenatedMatrix.clone() : this._invertedConcatenatedMatrix;
      };
      a.prototype.toString = function() {
        return this._matrix.toString();
      };
      return a;
    }();
    h.Transform = q;
    var x = function() {
      function a(b) {
        this._node = b;
        this._mask = null;
        this._blendMode = c.Normal;
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
    h.Layer = x;
    a = function(a) {
      function b(c) {
        a.call(this);
        this._source = c;
        this._type = 3;
        this._ratio = 0;
      }
      __extends(b, a);
      b.prototype.getBounds = function(a) {
        void 0 === a && (a = !1);
        var b = this._bounds || (this._bounds = d.createEmpty());
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
    }(I);
    h.Shape = a;
    a = function() {
      return function() {
        this.debug = !1;
        this.paintRenderable = !0;
        this.paintViewport = this.paintFlashing = this.paintDirtyRegion = this.paintBounds = !1;
        this.clear = !0;
      };
    }();
    h.RendererOptions = a;
    p = function(a) {
      function b(c, e, f) {
        a.call(this);
        this._container = c;
        this._stage = e;
        this._options = f;
        this._viewport = d.createSquare(1024);
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
    }(p);
    h.Renderer = p;
    p = function(a) {
      function c(b, f, g) {
        void 0 === g && (g = !1);
        a.call(this);
        this._preVisitor = new K;
        this._flags &= -2049;
        this._type = 13;
        this._scaleMode = c.DEFAULT_SCALE;
        this._align = c.DEFAULT_ALIGN;
        this._content = new L;
        this._content._flags &= -2049;
        this.addChild(this._content);
        this.setFlags(4096);
        this.setBounds(new d(0, 0, b, f));
        g ? (this._dirtyRegion = new e(b, f), this._dirtyRegion.addDirtyRectangle(new d(0, 0, b, f))) : this._dirtyRegion = null;
        this._updateContentMatrix();
      }
      __extends(c, a);
      Object.defineProperty(c.prototype, "dirtyRegion", {get:function() {
        return this._dirtyRegion;
      }, enumerable:!0, configurable:!0});
      c.prototype.setBounds = function(b) {
        a.prototype.setBounds.call(this, b);
        this._updateContentMatrix();
        this._dispatchEvent(1);
        this._dirtyRegion && (this._dirtyRegion = new e(b.w, b.h), this._dirtyRegion.addDirtyRectangle(b));
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
    }(L);
    h.Stage = p;
    var n = h.Geometry.Point, d = h.Geometry.Rectangle, b = h.Geometry.Matrix, k = f.ArrayUtilities.indexOf, p = function(a) {
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
        k(this._parents, a);
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
        a = new h.Shape(this);
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
        k(this._invalidateEventListeners, a);
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
      b.prototype.render = function(a, b, c, d, e) {
      };
      return b;
    }(h.Node);
    h.Renderable = p;
    a = function(a) {
      function b(c, d) {
        a.call(this);
        this.setBounds(c);
        this.render = d;
      }
      __extends(b, a);
      return b;
    }(p);
    h.CustomRenderable = a;
    a = function(a) {
      function b(c, e) {
        a.call(this);
        this._flags = 4352;
        this._lastPausedTime = this._lastTimeInvalidated = 0;
        this._pauseHappening = this._seekHappening = !1;
        this._isDOMElement = !0;
        this.setBounds(new d(0, 0, 1, 1));
        this._assetId = c;
        this._eventSerializer = e;
        var f = document.createElement("video"), g = this._handleVideoEvent.bind(this);
        f.preload = "metadata";
        f.addEventListener("play", g);
        f.addEventListener("pause", g);
        f.addEventListener("ended", g);
        f.addEventListener("loadeddata", g);
        f.addEventListener("progress", g);
        f.addEventListener("suspend", g);
        f.addEventListener("loadedmetadata", g);
        f.addEventListener("error", g);
        f.addEventListener("seeking", g);
        f.addEventListener("seeked", g);
        f.addEventListener("canplay", g);
        f.style.position = "absolute";
        this._video = f;
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
            var d = -1;
            if (c.buffered) {
              for (var e = 0;e < c.buffered.length;e++) {
                d = Math.max(d, c.buffered.end(e));
              }
            } else {
              d = c.duration;
            }
            return Math.round(500 * d);
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
          var d = a[c];
          d.willRender() ? (d._video.parentElement || d.invalidate(), d._video.style.zIndex = d.parents[0].depth + "") : d._video.parentElement && d._dispatchEvent(2);
          a[c].checkForUpdate();
        }
      };
      b.prototype.render = function(a, b, c) {
        (b = this._video) && 0 < b.videoWidth && a.drawImage(b, 0, 0, b.videoWidth, b.videoHeight, 0, 0, this._bounds.w, this._bounds.h);
      };
      b._renderableVideos = [];
      return b;
    }(p);
    h.RenderableVideo = a;
    a = function(a) {
      function b(c, d) {
        a.call(this);
        this._flags = 4352;
        this.properties = {};
        this.setBounds(d);
        c instanceof HTMLCanvasElement ? this._initializeSourceCanvas(c) : this._sourceImage = c;
      }
      __extends(b, a);
      b.FromDataBuffer = function(a, c, d) {
        var e = document.createElement("canvas");
        e.width = d.w;
        e.height = d.h;
        d = new b(e, d);
        d.updateFromDataBuffer(a, c);
        return d;
      };
      b.FromNode = function(a, c, d, e, f) {
        var g = document.createElement("canvas"), k = a.getBounds();
        g.width = k.w;
        g.height = k.h;
        g = new b(g, k);
        g.drawNode(a, c, d, e, f);
        return g;
      };
      b.FromImage = function(a, c, e) {
        return new b(a, new d(0, 0, c, e));
      };
      b.prototype.updateFromDataBuffer = function(a, b) {
        if (h.imageUpdateOption.value) {
          var c = b.buffer;
          if (a !== f.ImageType.JPEG && a !== f.ImageType.PNG && a !== f.ImageType.GIF) {
            var d = this._bounds, e = this._imageData;
            e && e.width === d.w && e.height === d.h || (e = this._imageData = this._context.createImageData(d.w, d.h));
            h.imageConvertOption.value && (c = new Int32Array(c), d = new Int32Array(e.data.buffer), f.ColorUtilities.convertImage(a, f.ImageType.StraightAlphaRGBA, c, d));
            this._ensureSourceCanvas();
            this._context.putImageData(e, 0, 0);
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
      b.prototype.drawNode = function(a, b, c, d, e) {
        c = h.Canvas2D;
        d = this.getBounds();
        (new c.Canvas2DRenderer(this._canvas, null)).renderNode(a, e || d, b);
      };
      b.prototype.mask = function(a) {
        for (var b = this.imageData, c = new Int32Array(b.data.buffer), d = f.ColorUtilities.getUnpremultiplyTable(), e = 0;e < a.length;e++) {
          var g = a[e];
          if (0 === g) {
            c[e] = 0;
          } else {
            if (255 !== g) {
              var k = c[e], h = k >> 0 & 255, n = k >> 8 & 255, k = k >> 16 & 255, l = g << 8, h = d[l + Math.min(h, g)], n = d[l + Math.min(n, g)], k = d[l + Math.min(k, g)];
              c[e] = g << 24 | k << 16 | n << 8 | h;
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
    }(p);
    h.RenderableBitmap = a;
    var t = function() {
      return function(a, b, c, d) {
        this.type = a;
        this.style = b;
        this.smoothImage = c;
        this.strokeProperties = d;
        this.path = new Path2D;
      };
    }();
    h.StyledPath = t;
    var J = function() {
      return function(a, b, c, d, e) {
        this.thickness = a;
        this.scaleMode = b;
        this.capsStyle = c;
        this.jointsStyle = d;
        this.miterLimit = e;
      };
    }();
    h.StrokeProperties = J;
    var F = function(a) {
      function c(b, d, e, f) {
        a.call(this);
        this._flags = 5632;
        this.properties = {};
        this.setBounds(f);
        this._id = b;
        this._pathData = d;
        this._textures = e;
        e.length && this.setFlags(256);
      }
      __extends(c, a);
      c.prototype.update = function(a, b, c) {
        this.setBounds(c);
        this._pathData = a;
        this._paths = null;
        this._textures = b;
        this.setFlags(256);
        this.invalidate();
      };
      c.prototype.render = function(a, b, c, d, e) {
        void 0 === d && (d = null);
        void 0 === e && (e = !1);
        a.fillStyle = a.strokeStyle = "transparent";
        b = this._deserializePaths(this._pathData, a, b);
        for (c = 0;c < b.length;c++) {
          var f = b[c];
          a.mozImageSmoothingEnabled = a.msImageSmoothingEnabled = a.imageSmoothingEnabled = f.smoothImage;
          if (0 === f.type) {
            d ? d.addPath(f.path, a.currentTransform) : (a.fillStyle = e ? "#000000" : f.style, a.fill(f.path, "evenodd"), a.fillStyle = "transparent");
          } else {
            if (!d && !e) {
              a.strokeStyle = f.style;
              var g = 1;
              f.strokeProperties && (g = f.strokeProperties.scaleMode, a.lineWidth = f.strokeProperties.thickness, a.lineCap = f.strokeProperties.capsStyle, a.lineJoin = f.strokeProperties.jointsStyle, a.miterLimit = f.strokeProperties.miterLimit);
              var k = a.lineWidth;
              (k = 1 === k || 3 === k) && a.translate(.5, .5);
              a.flashStroke(f.path, g);
              k && a.translate(-.5, -.5);
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
        var e = null, g = null, k = 0, h = 0, n, l, p = !1, A = 0, t = 0, C = a.commands, z = a.coordinates, x = a.styles, q = x.position = 0;
        a = a.commandsPosition;
        for (var r = 0;r < a;r++) {
          switch(C[r]) {
            case 9:
              p && e && (e.lineTo(A, t), g && g.lineTo(A, t));
              p = !0;
              k = A = z[q++] / 20;
              h = t = z[q++] / 20;
              e && e.moveTo(k, h);
              g && g.moveTo(k, h);
              break;
            case 10:
              k = z[q++] / 20;
              h = z[q++] / 20;
              e && e.lineTo(k, h);
              g && g.lineTo(k, h);
              break;
            case 11:
              n = z[q++] / 20;
              l = z[q++] / 20;
              k = z[q++] / 20;
              h = z[q++] / 20;
              e && e.quadraticCurveTo(n, l, k, h);
              g && g.quadraticCurveTo(n, l, k, h);
              break;
            case 12:
              n = z[q++] / 20;
              l = z[q++] / 20;
              var B = z[q++] / 20, u = z[q++] / 20, k = z[q++] / 20, h = z[q++] / 20;
              e && e.bezierCurveTo(n, l, B, u, k, h);
              g && g.bezierCurveTo(n, l, B, u, k, h);
              break;
            case 1:
              e = this._createPath(0, f.ColorUtilities.rgbaToCSSStyle(x.readUnsignedInt()), !1, null, k, h);
              break;
            case 3:
              n = this._readBitmap(x, b);
              e = this._createPath(0, n.style, n.smoothImage, null, k, h);
              break;
            case 2:
              e = this._createPath(0, this._readGradient(x, b), !1, null, k, h);
              break;
            case 4:
              e = null;
              break;
            case 5:
              g = f.ColorUtilities.rgbaToCSSStyle(x.readUnsignedInt());
              x.position += 1;
              n = x.readByte();
              l = c.LINE_CAPS_STYLES[x.readByte()];
              B = c.LINE_JOINTS_STYLES[x.readByte()];
              l = new J(z[q++] / 20, n, l, B, x.readByte());
              6 === C[r + 1] ? (r++, g = this._createPath(2, this._readGradient(x, b), !1, l, k, h)) : 6 === C[r + 1] ? (r++, n = this._readBitmap(x, b), g = this._createPath(2, n.style, n.smoothImage, l, k, h)) : g = this._createPath(1, g, !1, l, k, h);
              break;
            case 8:
              g = null;
          }
        }
        p && e && (e.lineTo(A, t), g && g.lineTo(A, t));
        this._pathData = null;
        return d;
      };
      c.prototype._createPath = function(a, b, c, d, e, f) {
        a = new t(a, b, c, d);
        this._paths.push(a);
        a.path.moveTo(e, f);
        return a.path;
      };
      c.prototype._readMatrix = function(a) {
        return new b(a.readFloat(), a.readFloat(), a.readFloat(), a.readFloat(), a.readFloat(), a.readFloat());
      };
      c.prototype._readGradient = function(a, b) {
        var c = a.readUnsignedByte(), d = 2 * a.readShort() / 255, e = this._readMatrix(a), c = 16 === c ? b.createLinearGradient(-1, 0, 1, 0) : b.createRadialGradient(d, 0, 0, 0, 0, 1);
        c.setTransform && c.setTransform(e.toSVGMatrix());
        e = a.readUnsignedByte();
        for (d = 0;d < e;d++) {
          var g = a.readUnsignedByte() / 255, k = f.ColorUtilities.rgbaToCSSStyle(a.readUnsignedInt());
          c.addColorStop(g, k);
        }
        a.position += 2;
        return c;
      };
      c.prototype._readBitmap = function(a, b) {
        var c = a.readUnsignedInt(), d = this._readMatrix(a), e = a.readBoolean() ? "repeat" : "no-repeat", f = a.readBoolean();
        (c = this._textures[c]) ? (e = b.createPattern(c.renderSource, e), e.setTransform(d.toSVGMatrix())) : e = null;
        return {style:e, smoothImage:f};
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
    }(p);
    h.RenderableShape = F;
    a = function(a) {
      function c() {
        a.apply(this, arguments);
        this._flags = 5888;
        this._morphPaths = Object.create(null);
      }
      __extends(c, a);
      c.prototype._deserializePaths = function(a, b, c) {
        if (this._morphPaths[c]) {
          return this._morphPaths[c];
        }
        var d = this._morphPaths[c] = [], e = null, g = null, k = 0, h = 0, n, l, p = !1, v = 0, A = 0, t = a.commands, z = a.coordinates, C = a.morphCoordinates, x = a.styles, q = a.morphStyles;
        x.position = 0;
        var B = q.position = 0;
        a = a.commandsPosition;
        for (var u = 0;u < a;u++) {
          switch(t[u]) {
            case 9:
              p && e && (e.lineTo(v, A), g && g.lineTo(v, A));
              p = !0;
              k = v = r(z[B], C[B++], c) / 20;
              h = A = r(z[B], C[B++], c) / 20;
              e && e.moveTo(k, h);
              g && g.moveTo(k, h);
              break;
            case 10:
              k = r(z[B], C[B++], c) / 20;
              h = r(z[B], C[B++], c) / 20;
              e && e.lineTo(k, h);
              g && g.lineTo(k, h);
              break;
            case 11:
              n = r(z[B], C[B++], c) / 20;
              l = r(z[B], C[B++], c) / 20;
              k = r(z[B], C[B++], c) / 20;
              h = r(z[B], C[B++], c) / 20;
              e && e.quadraticCurveTo(n, l, k, h);
              g && g.quadraticCurveTo(n, l, k, h);
              break;
            case 12:
              n = r(z[B], C[B++], c) / 20;
              l = r(z[B], C[B++], c) / 20;
              var G = r(z[B], C[B++], c) / 20, y = r(z[B], C[B++], c) / 20, k = r(z[B], C[B++], c) / 20, h = r(z[B], C[B++], c) / 20;
              e && e.bezierCurveTo(n, l, G, y, k, h);
              g && g.bezierCurveTo(n, l, G, y, k, h);
              break;
            case 1:
              e = this._createMorphPath(0, c, f.ColorUtilities.rgbaToCSSStyle(w(x.readUnsignedInt(), q.readUnsignedInt(), c)), !1, null, k, h);
              break;
            case 3:
              n = this._readMorphBitmap(x, q, c, b);
              e = this._createMorphPath(0, c, n.style, n.smoothImage, null, k, h);
              break;
            case 2:
              n = this._readMorphGradient(x, q, c, b);
              e = this._createMorphPath(0, c, n, !1, null, k, h);
              break;
            case 4:
              e = null;
              break;
            case 5:
              l = r(z[B], C[B++], c) / 20;
              n = f.ColorUtilities.rgbaToCSSStyle(w(x.readUnsignedInt(), q.readUnsignedInt(), c));
              x.position += 1;
              var G = x.readByte(), y = F.LINE_CAPS_STYLES[x.readByte()], K = F.LINE_JOINTS_STYLES[x.readByte()];
              l = new J(l, G, y, K, x.readByte());
              0 < l.thickness && (g = this._createMorphPath(1, c, n, !1, l, k, h));
              break;
            case 6:
              n = this._readMorphGradient(x, q, c, b);
              g = this._createMorphPath(2, c, n, !1, null, k, h);
              break;
            case 7:
              n = this._readMorphBitmap(x, q, c, b);
              g = this._createMorphPath(2, c, n.style, n.smoothImage, null, k, h);
              break;
            case 8:
              g = null;
          }
        }
        p && e && (e.lineTo(v, A), g && g.lineTo(v, A));
        return d;
      };
      c.prototype._createMorphPath = function(a, b, c, d, e, f, g) {
        a = new t(a, c, d, e);
        this._morphPaths[b].push(a);
        a.path.moveTo(f, g);
        return a.path;
      };
      c.prototype._readMorphMatrix = function(a, c, d) {
        return new b(r(a.readFloat(), c.readFloat(), d), r(a.readFloat(), c.readFloat(), d), r(a.readFloat(), c.readFloat(), d), r(a.readFloat(), c.readFloat(), d), r(a.readFloat(), c.readFloat(), d), r(a.readFloat(), c.readFloat(), d));
      };
      c.prototype._readMorphGradient = function(a, b, c, d) {
        var e = a.readUnsignedByte(), g = 2 * a.readShort() / 255, k = this._readMorphMatrix(a, b, c);
        d = 16 === e ? d.createLinearGradient(-1, 0, 1, 0) : d.createRadialGradient(g, 0, 0, 0, 0, 1);
        d.setTransform && d.setTransform(k.toSVGMatrix());
        k = a.readUnsignedByte();
        for (e = 0;e < k;e++) {
          var g = r(a.readUnsignedByte() / 255, b.readUnsignedByte() / 255, c), h = w(a.readUnsignedInt(), b.readUnsignedInt(), c), h = f.ColorUtilities.rgbaToCSSStyle(h);
          d.addColorStop(g, h);
        }
        a.position += 2;
        return d;
      };
      c.prototype._readMorphBitmap = function(a, b, c, d) {
        var e = a.readUnsignedInt();
        b = this._readMorphMatrix(a, b, c);
        c = a.readBoolean() ? "repeat" : "no-repeat";
        a = a.readBoolean();
        d = d.createPattern(this._textures[e]._canvas, c);
        d.setTransform(b.toSVGMatrix());
        return {style:d, smoothImage:a};
      };
      return c;
    }(F);
    h.RenderableMorphShape = a;
    var B = function() {
      function a() {
        this.align = this.leading = this.descent = this.ascent = this.width = this.y = this.x = 0;
        this.runs = [];
      }
      a._getMeasureContext = function() {
        a._measureContext || (a._measureContext = document.createElement("canvas").getContext("2d"));
        return a._measureContext;
      };
      a.prototype.addRun = function(b, c, d, e, f) {
        if (d) {
          var g = a._getMeasureContext();
          g.font = b;
          g = y(g, d, e);
          this.runs.push(new G(b, c, d, g, e, f));
          this.width += g;
        }
      };
      a.prototype.wrap = function(b) {
        var c = [this], d = this.runs, e = this;
        e.width = 0;
        e.runs = [];
        for (var f = a._getMeasureContext(), g = 0;g < d.length;g++) {
          var k = d[g], h = k.text;
          k.text = "";
          k.width = 0;
          f.font = k.font;
          for (var n = b, l = h.split(/[\s.-]/), p = 0, z = 0;z < l.length;z++) {
            var C = l[z], t = h.substr(p, C.length + 1), x = k.letterSpacing, q = y(f, t, x);
            if (q > n) {
              do {
                if (k.text && (e.runs.push(k), e.width += k.width, k = new G(k.font, k.fillStyle, "", 0, k.letterSpacing, k.underline), n = new a, n.y = e.y + e.descent + e.leading + e.ascent | 0, n.ascent = e.ascent, n.descent = e.descent, n.leading = e.leading, n.align = e.align, c.push(n), e = n), n = b - q, 0 > n) {
                  for (var B = t.length, r = t;1 < B && !(B--, r = t.substr(0, B), q = y(f, r, x), q <= b);) {
                  }
                  k.text = r;
                  k.width = q;
                  t = t.substr(B);
                  q = y(f, t, x);
                }
              } while (t && 0 > n);
            } else {
              n -= q;
            }
            k.text += t;
            k.width += q;
            p += C.length + 1;
          }
          e.runs.push(k);
          e.width += k.width;
        }
        return c;
      };
      a.prototype.toString = function() {
        return "TextLine {x: " + this.x + ", y: " + this.y + ", width: " + this.width + ", height: " + (this.ascent + this.descent + this.leading) + "}";
      };
      return a;
    }();
    h.TextLine = B;
    var G = function() {
      return function(a, b, c, d, e, f) {
        void 0 === a && (a = "");
        void 0 === b && (b = "");
        void 0 === c && (c = "");
        void 0 === d && (d = 0);
        void 0 === e && (e = 0);
        void 0 === f && (f = !1);
        this.font = a;
        this.fillStyle = b;
        this.text = c;
        this.width = d;
        this.letterSpacing = e;
        this.underline = f;
      };
    }();
    h.TextRun = G;
    a = function(a) {
      function c(d) {
        a.call(this);
        this._flags = 4352;
        this.properties = {};
        this._textBounds = d.clone();
        this._textRunData = null;
        this._plainText = "";
        this._borderColor = this._backgroundColor = 0;
        this._matrix = b.createIdentity();
        this._coords = null;
        this._scrollV = 1;
        this._scrollH = 0;
        this.textRect = d.clone();
        this.lines = [];
        this.setBounds(d);
      }
      __extends(c, a);
      c.prototype.setBounds = function(b) {
        a.prototype.setBounds.call(this, b);
        this._textBounds.set(b);
        this.textRect.setElements(b.x + 2, b.y + 2, b.w - 2, b.h - 2);
      };
      c.prototype.setContent = function(a, b, c, d) {
        this._textRunData = b;
        this._plainText = a;
        this._matrix.set(c);
        this._coords = d;
        this.lines = [];
      };
      c.prototype.setStyle = function(a, b, c, d) {
        this._backgroundColor = a;
        this._borderColor = b;
        this._scrollV = c;
        this._scrollH = d;
      };
      c.prototype.reflow = function(a, b) {
        var c = this._textRunData;
        if (c) {
          for (var d = this._bounds, e = d.w - 4, g = this._plainText, k = this.lines, h = new B, n = 0, l = 0, p = 0, v = 0, t = -4294967295, z = -1;c.position < c.length;) {
            var C = c.readInt(), A = c.readInt(), x = c.readInt(), q = c.readUTF(), r = c.readInt(), u = c.readInt(), G = c.readInt();
            r > p && (p = r);
            u > v && (v = u);
            G > t && (t = G);
            r = c.readBoolean();
            u = "";
            c.readBoolean() && (u += "italic ");
            r && (u += "bold ");
            x = u + x + "px " + q + ", AdobeBlank";
            q = c.readInt();
            q = f.ColorUtilities.rgbToHex(q);
            r = c.readInt();
            -1 === z && (z = r);
            c.readBoolean();
            c.readInt();
            c.readInt();
            c.readInt();
            r = c.readInt();
            c.readInt();
            for (var u = c.readBoolean(), F = "", G = !1;!G;C++) {
              var G = C >= A - 1, y = g[C];
              if ("\r" !== y && "\n" !== y && (F += y, C < g.length - 1)) {
                continue;
              }
              h.addRun(x, q, F, r, u);
              if (h.runs.length) {
                k.length && (n += t);
                n += p;
                h.y = n | 0;
                n += v;
                h.ascent = p;
                h.descent = v;
                h.leading = t;
                h.align = z;
                if (b && h.width > e) {
                  for (h = h.wrap(e), F = 0;F < h.length;F++) {
                    var w = h[F], n = w.y + w.descent + w.leading;
                    k.push(w);
                    w.width > l && (l = w.width);
                  }
                } else {
                  k.push(h), h.width > l && (l = h.width);
                }
                h = new B;
              } else {
                n += p + v + t;
              }
              F = "";
              if (G) {
                v = p = 0;
                t = -4294967295;
                z = -1;
                break;
              }
              "\r" === y && "\n" === g[C + 1] && C++;
            }
            h.addRun(x, q, F, r, u);
          }
          c = g[g.length - 1];
          "\r" !== c && "\n" !== c || k.push(h);
          c = this.textRect;
          c.w = l;
          c.h = n;
          if (a) {
            if (!b) {
              e = l;
              l = d.w;
              switch(a) {
                case 1:
                  c.x = l - (e + 4) >> 1;
                  break;
                case 3:
                  c.x = l - (e + 4);
              }
              this._textBounds.setElements(c.x - 2, c.y - 2, c.w + 4, c.h + 4);
              d.w = e + 4;
            }
            d.x = c.x - 2;
            d.h = n + 4;
          } else {
            this._textBounds = d;
          }
          for (C = 0;C < k.length;C++) {
            if (d = k[C], d.width < e) {
              switch(d.align) {
                case 1:
                  d.x = e - d.width | 0;
                  break;
                case 2:
                  d.x = (e - d.width) / 2 | 0;
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
      c.prototype.render = function(a) {
        a.save();
        var d = this._textBounds;
        this._backgroundColor && (a.fillStyle = f.ColorUtilities.rgbaToCSSStyle(this._backgroundColor), a.fillRect(d.x, d.y, d.w, d.h));
        if (this._borderColor) {
          a.strokeStyle = f.ColorUtilities.rgbaToCSSStyle(this._borderColor);
          a.lineCap = "square";
          a.lineWidth = 1;
          var e = c.absoluteBoundPoints, g = a.currentTransform;
          g ? (d = d.clone(), (new b(g.a, g.b, g.c, g.d, g.e, g.f)).transformRectangle(d, e), a.setTransform(1, 0, 0, 1, 0, 0)) : (e[0].x = d.x, e[0].y = d.y, e[1].x = d.x + d.w, e[1].y = d.y, e[2].x = d.x + d.w, e[2].y = d.y + d.h, e[3].x = d.x, e[3].y = d.y + d.h);
          c.roundBoundPoints(e);
          d = new Path2D;
          d.moveTo(e[0].x, e[0].y);
          d.lineTo(e[1].x, e[1].y);
          d.lineTo(e[2].x, e[2].y);
          d.lineTo(e[3].x, e[3].y);
          d.lineTo(e[0].x, e[0].y);
          a.stroke(d);
          g && a.setTransform(g.a, g.b, g.c, g.d, g.e, g.f);
        }
        this._coords ? this._renderChars(a) : this._renderLines(a);
        a.restore();
      };
      c.prototype._renderChars = function(a) {
        if (this._matrix) {
          var b = this._matrix;
          a.transform(b.a, b.b, b.c, b.d, b.tx, b.ty);
        }
        var b = this.lines, c = this._coords;
        c.position = 0;
        for (var d = "", e = "", f = 0;f < b.length;f++) {
          for (var g = b[f].runs, k = 0;k < g.length;k++) {
            var h = g[k];
            h.font !== d && (a.font = d = h.font);
            h.fillStyle !== e && (a.fillStyle = e = h.fillStyle);
            for (var h = h.text, n = 0;n < h.length;n++) {
              var l = c.readInt() / 20, p = c.readInt() / 20;
              a.fillText(h[n], l, p);
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
        var c = this.lines, d = this._scrollV, e = 0, f = "", g = "";
        a.textAlign = "left";
        a.textBaseline = "alphabetic";
        for (var k = 0;k < c.length;k++) {
          var h = c[k], n = h.x, l = h.y;
          if (k + 1 < d) {
            e = l + h.descent + h.leading;
          } else {
            l -= e;
            if (k + 1 - d && l > b.h) {
              break;
            }
            for (var p = h.runs, v = 0;v < p.length;v++) {
              var t = p[v];
              t.font !== f && (a.font = f = t.font);
              t.fillStyle !== g && (a.fillStyle = g = t.fillStyle);
              t.underline && a.fillRect(n, l + h.descent / 2 | 0, t.width, 1);
              a.textAlign = "left";
              a.textBaseline = "alphabetic";
              if (0 < t.letterSpacing) {
                for (var C = t.text, z = 0;z < C.length;z++) {
                  a.fillText(C[z], n, l), n += y(a, C[z], t.letterSpacing);
                }
              } else {
                a.fillText(t.text, n, l), n += t.width;
              }
            }
          }
        }
      };
      c.absoluteBoundPoints = [new n(0, 0), new n(0, 0), new n(0, 0), new n(0, 0)];
      return c;
    }(p);
    h.RenderableText = a;
    p = function(a) {
      function b(c, e) {
        a.call(this);
        this._flags = 768;
        this.properties = {};
        this.setBounds(new d(0, 0, c, e));
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
    }(p);
    h.Label = p;
    var C = f.ColorUtilities.clampByte, p = function() {
      function a() {
      }
      a.prototype.expandBounds = function(a) {
      };
      return a;
    }();
    h.Filter = p;
    var z = [2, 1 / 1.05, 1 / 1.35, 1 / 1.55, 1 / 1.75, 1 / 1.9, .5, 1 / 2.1, 1 / 2.2, 1 / 2.3, .4, 1 / 3, 1 / 3, 1 / 3.5, 1 / 3.5], a = function(a) {
      function b(c, d, e) {
        a.call(this);
        this.blurX = c;
        this.blurY = d;
        this.quality = e;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        g(a, this.quality, this.blurX, this.blurY, !0);
      };
      return b;
    }(p);
    h.BlurFilter = a;
    a = function(a) {
      function b(c, d, e, f, g, k, h, n, l, p, v) {
        a.call(this);
        this.alpha = c;
        this.angle = d;
        this.blurX = e;
        this.blurY = f;
        this.color = g;
        this.distance = k;
        this.hideObject = h;
        this.inner = n;
        this.knockout = l;
        this.quality = p;
        this.strength = v;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        g(a, this.quality, this.blurX, this.blurY, !1);
        if (this.distance) {
          var b = this.angle * Math.PI / 180, c = Math.cos(b) * this.distance, d = Math.sin(b) * this.distance, b = a.x + (0 <= c ? 0 : Math.floor(c)), c = a.x + a.w + Math.ceil(Math.abs(c)), e = a.y + (0 <= d ? 0 : Math.floor(d)), d = a.y + a.h + Math.ceil(Math.abs(d));
          a.x = b;
          a.w = c - b;
          a.y = e;
          a.h = d - e;
        }
      };
      return b;
    }(p);
    h.DropshadowFilter = a;
    a = function(a) {
      function b(c, d, e, f, g, k, h, n) {
        a.call(this);
        this.alpha = c;
        this.blurX = d;
        this.blurY = e;
        this.color = f;
        this.inner = g;
        this.knockout = k;
        this.quality = h;
        this.strength = n;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        this.inner || g(a, this.quality, this.blurX, this.blurY, !1);
      };
      return b;
    }(p);
    h.GlowFilter = a;
    p = function(a) {
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
      b.prototype.setMultipliersAndOffsets = function(a, b, c, d, e, f, g, k) {
        for (var h = this._data, n = 0;n < h.length;n++) {
          h[n] = 0;
        }
        h[0] = a;
        h[5] = b;
        h[10] = c;
        h[15] = d;
        h[16] = e / 255;
        h[17] = f / 255;
        h[18] = g / 255;
        h[19] = k / 255;
        this._type = 0;
      };
      b.prototype.transformRGBA = function(a) {
        var b = a >> 24 & 255, c = a >> 16 & 255, d = a >> 8 & 255, e = a & 255, f = this._data;
        a = C(b * f[0] + c * f[1] + d * f[2] + e * f[3] + 255 * f[16]);
        var g = C(b * f[4] + c * f[5] + d * f[6] + e * f[7] + 255 * f[17]), k = C(b * f[8] + c * f[9] + d * f[10] + e * f[11] + 255 * f[18]), b = C(b * f[12] + c * f[13] + d * f[14] + e * f[15] + 255 * f[19]);
        return a << 24 | g << 16 | k << 8 | b;
      };
      b.prototype.multiply = function(a) {
        if (!(a._type & 1)) {
          var b = this._data, c = a._data;
          a = b[0];
          var d = b[1], e = b[2], f = b[3], g = b[4], k = b[5], h = b[6], n = b[7], l = b[8], p = b[9], t = b[10], C = b[11], v = b[12], z = b[13], x = b[14], q = b[15], A = b[16], B = b[17], r = b[18], u = b[19], G = c[0], F = c[1], y = c[2], w = c[3], K = c[4], J = c[5], E = c[6], I = c[7], L = c[8], X = c[9], ga = c[10], ha = c[11], ia = c[12], ja = c[13], ka = c[14], la = c[15], ma = c[16], na = c[17], oa = c[18], c = c[19];
          b[0] = a * G + g * F + l * y + v * w;
          b[1] = d * G + k * F + p * y + z * w;
          b[2] = e * G + h * F + t * y + x * w;
          b[3] = f * G + n * F + C * y + q * w;
          b[4] = a * K + g * J + l * E + v * I;
          b[5] = d * K + k * J + p * E + z * I;
          b[6] = e * K + h * J + t * E + x * I;
          b[7] = f * K + n * J + C * E + q * I;
          b[8] = a * L + g * X + l * ga + v * ha;
          b[9] = d * L + k * X + p * ga + z * ha;
          b[10] = e * L + h * X + t * ga + x * ha;
          b[11] = f * L + n * X + C * ga + q * ha;
          b[12] = a * ia + g * ja + l * ka + v * la;
          b[13] = d * ia + k * ja + p * ka + z * la;
          b[14] = e * ia + h * ja + t * ka + x * la;
          b[15] = f * ia + n * ja + C * ka + q * la;
          b[16] = a * ma + g * na + l * oa + v * c + A;
          b[17] = d * ma + k * na + p * oa + z * c + B;
          b[18] = e * ma + h * na + t * oa + x * c + r;
          b[19] = f * ma + n * na + C * oa + q * c + u;
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
    }(p);
    h.ColorMatrix = p;
    (function(a) {
      function b(a, c) {
        var d = a / 2;
        switch(c) {
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
      function c(a) {
        var b = "source-over";
        switch(a) {
          case h.BlendMode.Multiply:
            b = "multiply";
            break;
          case h.BlendMode.Add:
          ;
          case h.BlendMode.Screen:
            b = "screen";
            break;
          case h.BlendMode.Lighten:
            b = "lighten";
            break;
          case h.BlendMode.Darken:
            b = "darken";
            break;
          case h.BlendMode.Difference:
            b = "difference";
            break;
          case h.BlendMode.Overlay:
            b = "overlay";
            break;
          case h.BlendMode.HardLight:
            b = "hard-light";
            break;
          case h.BlendMode.Alpha:
            b = "destination-in";
            break;
          case h.BlendMode.Erase:
            b = "destination-out";
        }
        return b;
      }
      var d = CanvasRenderingContext2D.prototype.save, e = CanvasRenderingContext2D.prototype.clip, g = CanvasRenderingContext2D.prototype.fill, k = CanvasRenderingContext2D.prototype.stroke, n = CanvasRenderingContext2D.prototype.restore, l = CanvasRenderingContext2D.prototype.beginPath;
      a.notifyReleaseChanged = function() {
        CanvasRenderingContext2D.prototype.save = d;
        CanvasRenderingContext2D.prototype.clip = e;
        CanvasRenderingContext2D.prototype.fill = g;
        CanvasRenderingContext2D.prototype.stroke = k;
        CanvasRenderingContext2D.prototype.restore = n;
        CanvasRenderingContext2D.prototype.beginPath = l;
      };
      CanvasRenderingContext2D.prototype.enterBuildingClippingRegion = function() {
        this.buildingClippingRegionDepth || (this.buildingClippingRegionDepth = 0);
        this.buildingClippingRegionDepth++;
      };
      CanvasRenderingContext2D.prototype.leaveBuildingClippingRegion = function() {
        this.buildingClippingRegionDepth--;
      };
      var p = f.NumberUtilities.clamp;
      navigator.userAgent.indexOf("Firefox");
      var t = function() {
        function a() {
        }
        a._prepareSVGFilters = function() {
          if (!a._svgBlurFilter) {
            var b = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            b.setAttribute("style", "display:block;width:0px;height:0px");
            var c = document.createElementNS("http://www.w3.org/2000/svg", "defs"), d = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            d.setAttribute("id", "svgBlurFilter");
            var e = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
            e.setAttribute("stdDeviation", "0 0");
            d.appendChild(e);
            c.appendChild(d);
            a._svgBlurFilter = e;
            d = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            d.setAttribute("id", "svgDropShadowFilter");
            e = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
            e.setAttribute("in", "SourceAlpha");
            e.setAttribute("stdDeviation", "3");
            d.appendChild(e);
            a._svgDropshadowFilterBlur = e;
            e = document.createElementNS("http://www.w3.org/2000/svg", "feOffset");
            e.setAttribute("dx", "0");
            e.setAttribute("dy", "0");
            e.setAttribute("result", "offsetblur");
            d.appendChild(e);
            a._svgDropshadowFilterOffset = e;
            e = document.createElementNS("http://www.w3.org/2000/svg", "feFlood");
            e.setAttribute("flood-color", "rgba(0,0,0,1)");
            d.appendChild(e);
            a._svgDropshadowFilterFlood = e;
            e = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
            e.setAttribute("in2", "offsetblur");
            e.setAttribute("operator", "in");
            d.appendChild(e);
            e = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
            e.setAttribute("in2", "SourceAlpha");
            e.setAttribute("operator", "out");
            e.setAttribute("result", "outer");
            d.appendChild(e);
            var e = document.createElementNS("http://www.w3.org/2000/svg", "feMerge"), f = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
            e.appendChild(f);
            f = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
            e.appendChild(f);
            a._svgDropshadowMergeNode = f;
            d.appendChild(e);
            c.appendChild(d);
            d = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            d.setAttribute("id", "svgColorMatrixFilter");
            f = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
            f.setAttribute("color-interpolation-filters", "sRGB");
            f.setAttribute("in", "SourceGraphic");
            f.setAttribute("type", "matrix");
            d.appendChild(f);
            e = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
            e.setAttribute("in2", "SourceAlpha");
            e.setAttribute("operator", "in");
            d.appendChild(e);
            c.appendChild(d);
            a._svgColorMatrixFilter = f;
            b.appendChild(c);
            document.documentElement.appendChild(b);
          }
        };
        a._applyFilter = function(c, d, e) {
          if (a._svgFiltersAreSupported) {
            if (a._prepareSVGFilters(), a._removeFilter(d), e instanceof h.BlurFilter) {
              var g = b(c, e.quality);
              a._svgBlurFilter.setAttribute("stdDeviation", e.blurX * g + " " + e.blurY * g);
              d.filter = "url(#svgBlurFilter)";
            } else {
              e instanceof h.DropshadowFilter ? (g = b(c, e.quality), a._svgDropshadowFilterBlur.setAttribute("stdDeviation", e.blurX * g + " " + e.blurY * g), a._svgDropshadowFilterOffset.setAttribute("dx", String(Math.cos(e.angle * Math.PI / 180) * e.distance * c)), a._svgDropshadowFilterOffset.setAttribute("dy", String(Math.sin(e.angle * Math.PI / 180) * e.distance * c)), a._svgDropshadowFilterFlood.setAttribute("flood-color", f.ColorUtilities.rgbaToCSSStyle(e.color << 8 | Math.round(255 * e.alpha))), 
              a._svgDropshadowMergeNode.setAttribute("in", e.knockout ? "outer" : "SourceGraphic"), d.filter = "url(#svgDropShadowFilter)") : e instanceof h.ColorMatrix && (a._svgColorMatrixFilter.setAttribute("values", e.toSVGFilterMatrix()), d.filter = "url(#svgColorMatrixFilter)");
            }
          }
        };
        a._removeFilter = function(a) {
          a.filter = "none";
        };
        a._applyColorMatrix = function(b, c) {
          c.isIdentity() ? (b.globalAlpha = 1, b.globalColorMatrix = null) : c.hasOnlyAlphaMultiplier() ? (b.globalAlpha = p(c.alphaMultiplier, 0, 1), b.globalColorMatrix = null) : (b.globalAlpha = 1, a._svgFiltersAreSupported ? (a._applyFilter(1, b, c), b.globalColorMatrix = null) : b.globalColorMatrix = c);
        };
        a._svgFiltersAreSupported = !!Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype, "filter");
        return a;
      }();
      a.Filters = t;
      h.filters && t._svgFiltersAreSupported && ("registerScratchCanvas" in window || (window.registerScratchCanvas = function(a) {
        a.style.display = "none";
        document.body.appendChild(a);
      }));
      var C = function() {
        function a(b, c, d, e) {
          this.surface = b;
          this.region = c;
          this.w = d;
          this.h = e;
        }
        a.prototype.free = function() {
          this.surface.free(this);
        };
        a._ensureCopyCanvasSize = function(b, c) {
          var d;
          if (a._copyCanvasContext) {
            if (d = a._copyCanvasContext.canvas, d.width < b || d.height < c) {
              d.width = f.IntegerUtilities.nearestPowerOfTwo(b), d.height = f.IntegerUtilities.nearestPowerOfTwo(c);
            }
          } else {
            d = document.createElement("canvas"), "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(d), d.width = f.IntegerUtilities.nearestPowerOfTwo(b), d.height = f.IntegerUtilities.nearestPowerOfTwo(c), a._copyCanvasContext = d.getContext("2d");
          }
        };
        a.prototype.draw = function(b, d, e, f, g, k, n, l, p) {
          this.context.setTransform(1, 0, 0, 1, 0, 0);
          var C, z, v = 0, x = 0;
          b.context.canvas === this.context.canvas ? (a._ensureCopyCanvasSize(f, g), z = a._copyCanvasContext, z.clearRect(0, 0, f, g), z.drawImage(b.surface.canvas, b.region.x, b.region.y, f, g, 0, 0, f, g), C = z, x = v = 0) : (C = b.surface.context, v = b.region.x, x = b.region.y);
          a: {
            switch(n) {
              case h.BlendMode.Alpha:
                b = !0;
                break a;
              default:
                b = !1;
            }
          }
          b && (this.context.save(), this.context.beginPath(), this.context.rect(d, e, f, g), this.context.clip());
          this.context.globalAlpha = 1;
          this.context.globalCompositeOperation = c(n);
          if (l) {
            k && !k.isIdentity() && (l = l.concat(k));
            k = 0;
            if (1 < l.length) {
              var q, A, B;
              z ? (n = z, z = C, C = n) : (a._ensureCopyCanvasSize(f, g), z = a._copyCanvasContext, A = q = 0);
              for (;k < l.length - 1;k++) {
                z.clearRect(0, 0, f, g), t._applyFilter(p, z, l[k]), z.drawImage(C.canvas, v, x, f, g, q, A, f, g), t._removeFilter(z), n = z, A = v, B = x, z = C, C = n, x = v = q, q = A, A = B;
              }
              t._removeFilter(C);
              t._removeFilter(z);
            }
            t._applyFilter(p, this.context, l[k]);
          }
          this.context.drawImage(C.canvas, v, x, f, g, d, e, f, g);
          this.context.globalCompositeOperation = c(h.BlendMode.Normal);
          t._removeFilter(this.context);
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
          a.globalCompositeOperation = c(h.BlendMode.Normal);
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
      a.Canvas2DSurfaceRegion = C;
      var z = function() {
        function a(b, c) {
          this.canvas = b;
          this.context = b.getContext("2d");
          this.w = b.width;
          this.h = b.height;
          this._regionAllocator = c;
        }
        a.prototype.allocate = function(a, b) {
          var c = this._regionAllocator.allocate(a, b);
          return c ? new C(this, c, a, b) : null;
        };
        a.prototype.free = function(a) {
          this._regionAllocator.free(a.region);
        };
        return a;
      }();
      a.Canvas2DSurface = z;
    })(h.Canvas2D || (h.Canvas2D = {}));
  })(f.GFX || (f.GFX = {}));
})(Shumway || (Shumway = {}));
__extends = this && this.__extends || function(f, h) {
  function u() {
    this.constructor = f;
  }
  for (var r in h) {
    h.hasOwnProperty(r) && (f[r] = h[r]);
  }
  u.prototype = h.prototype;
  f.prototype = new u;
};
(function(f) {
  (function(h) {
    (function(b) {
      var d = f.Debug.assert, a = f.GFX.Geometry.Rectangle, e = f.GFX.Geometry.Point, g = f.GFX.Geometry.Matrix, r = f.GFX.BlendMode, u = f.NumberUtilities.clamp, q = f.NumberUtilities.pow2, x = function() {
        return function(a, b) {
          this.surfaceRegion = a;
          this.scale = b;
        };
      }();
      b.MipMapLevel = x;
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
          1 !== a && (b = u(Math.round(Math.log(a) / Math.LN2), -5, 3));
          this._node.hasFlags(512) || (b = u(b, -5, 0));
          a = q(b);
          var c = 5 + b, b = this._levels[c];
          if (!b) {
            var d = this._node.getBounds().clone();
            d.scale(a, a);
            d.snap();
            var e = this._surfaceRegionAllocator.allocate(d.w, d.h, null), f = e.region, b = this._levels[c] = new x(e, a), c = new t(e);
            c.clip.set(f);
            c.matrix.setElements(a, 0, 0, a, f.x - d.x, f.y - d.y);
            c.flags |= 64;
            this._renderer.renderNodeWithState(this._node, c);
            c.free();
          }
          return b;
        };
        return a;
      }();
      b.MipMap = n;
      var k = function(a) {
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
      }(h.RendererOptions);
      b.Canvas2DRendererOptions = k;
      a.createMaxI16();
      var t = function(b) {
        function c(d) {
          b.call(this);
          this.clip = a.createEmpty();
          this.clipList = [];
          this.clipPath = null;
          this.flags = 0;
          this.target = null;
          this.matrix = g.createIdentity();
          this.colorMatrix = h.ColorMatrix.createIdentity();
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
      }(h.State);
      b.RenderState = t;
      var y = function() {
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
      b.FrameInfo = y;
      var F = function(x) {
        function q(b, c, d) {
          void 0 === d && (d = new k);
          x.call(this, b, c, d);
          this._visited = 0;
          this._frameInfo = new y;
          this._fontSize = 0;
          this._layers = [];
          if (b instanceof HTMLCanvasElement) {
            var e = b;
            this._viewport = new a(0, 0, e.width, e.height);
            this._target = this._createTarget(e);
          } else {
            this._addLayer("Background Layer");
            d = this._addLayer("Canvas Layer");
            e = document.createElement("canvas");
            d.appendChild(e);
            this._viewport = new a(0, 0, b.scrollWidth, b.scrollHeight);
            var f = this;
            c.addEventListener(1, function() {
              f._onStageBoundsChanged(e);
            });
            this._onStageBoundsChanged(e);
          }
          q._prepareSurfaceAllocators();
        }
        __extends(q, x);
        q.prototype._addLayer = function(a) {
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
        Object.defineProperty(q.prototype, "_backgroundVideoLayer", {get:function() {
          return this._layers[0];
        }, enumerable:!0, configurable:!0});
        q.prototype._createTarget = function(a) {
          return new b.Canvas2DSurfaceRegion(new b.Canvas2DSurface(a), new h.RegionAllocator.Region(0, 0, a.width, a.height), a.width, a.height);
        };
        q.prototype._onStageBoundsChanged = function(a) {
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
        q._prepareSurfaceAllocators = function() {
          q._initializedCaches || (q._surfaceCache = new h.SurfaceRegionAllocator.SimpleAllocator(function(a, d) {
            var e = document.createElement("canvas");
            "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(e);
            var f = Math.max(1024, a), g = Math.max(1024, d);
            e.width = f;
            e.height = g;
            var k = null, k = 512 <= a || 512 <= d ? new h.RegionAllocator.GridAllocator(f, g, f, g) : new h.RegionAllocator.BucketAllocator(f, g);
            return new b.Canvas2DSurface(e, k);
          }), q._shapeCache = new h.SurfaceRegionAllocator.SimpleAllocator(function(a, d) {
            var e = document.createElement("canvas");
            "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(e);
            e.width = 1024;
            e.height = 1024;
            var f = f = new h.RegionAllocator.CompactAllocator(1024, 1024);
            return new b.Canvas2DSurface(e, f);
          }), q._initializedCaches = !0);
        };
        q.prototype.render = function() {
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
        q.prototype.renderNode = function(a, b, c) {
          var d = new t(this._target);
          d.clip.set(b);
          d.flags = 256;
          d.matrix.set(c);
          a.visit(this, d);
          d.free();
        };
        q.prototype.renderNodeWithState = function(a, b) {
          a.visit(this, b);
        };
        q.prototype._renderWithCache = function(a, b) {
          var c = b.matrix, d = a.getBounds();
          if (d.isEmpty()) {
            return !1;
          }
          var e = this._options.cacheShapesMaxSize, f = Math.max(c.getAbsoluteScaleX(), c.getAbsoluteScaleY()), g = !!(b.flags & 16), k = !!(b.flags & 8);
          if (b.hasFlags(256)) {
            if (k || g || !b.colorMatrix.isIdentity() || a.hasFlags(256) || 100 < this._options.cacheShapesThreshold || d.w * f > e || d.h * f > e) {
              return !1;
            }
            (f = a.properties.mipMap) || (f = a.properties.mipMap = new n(this, a, q._shapeCache, e));
            g = f.getLevel(c);
            e = g.surfaceRegion;
            f = e.region;
            return g ? (g = b.target.context, g.imageSmoothingEnabled = g.mozImageSmoothingEnabled = !0, g.setTransform(c.a, c.b, c.c, c.d, c.tx, c.ty), g.drawImage(e.surface.canvas, f.x, f.y, f.w, f.h, d.x, d.y, d.w, d.h), !0) : !1;
          }
        };
        q.prototype._intersectsClipList = function(a, b) {
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
        q.prototype.visitGroup = function(a, b) {
          this._frameInfo.groups++;
          a.getBounds();
          if ((!a.hasFlags(4) || b.flags & 4) && a.hasFlags(1)) {
            var c = b.flags & 1;
            if (!c && ((a.getLayer().blendMode !== r.Normal || a.getLayer().mask) && this._options.blending || a.getLayer().filters && this._options.filters)) {
              b = b.clone(), b.flags |= 1, this._renderLayer(a, b), b.free();
            } else {
              if (c && b.removeFlags(1), this._intersectsClipList(a, b)) {
                for (var c = null, d = a.getChildren(), e = 0;e < d.length;e++) {
                  var f = d[e], g = f.getTransform(), k = b.transform(g);
                  k.toggleFlags(4096, f.hasFlags(64));
                  if (0 < f.clip) {
                    c = c || new Uint8Array(d.length);
                    c[f.clip + e]++;
                    var h = k.clone();
                    h.flags |= 16;
                    h.beginClipPath(g.getMatrix());
                    f.visit(this, h);
                    h.applyClipPath();
                    h.free();
                  } else {
                    f.visit(this, k);
                  }
                  if (c && 0 < c[e]) {
                    for (;c[e]--;) {
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
        q.prototype._renderDebugInfo = function(a, b) {
          if (b.flags & 1024) {
            var c = b.target.context, d = a.getBounds(!0), e = a.properties.style;
            e || (e = a.properties.style = f.ColorStyle.randomStyle());
            c.strokeStyle = e;
            b.matrix.transformRectangleAABB(d);
            c.setTransform(1, 0, 0, 1, 0, 0);
            d.free();
            d = a.getBounds();
            e = q._debugPoints;
            b.matrix.transformRectangle(d, e);
            c.lineWidth = 1;
            c.beginPath();
            c.moveTo(e[0].x, e[0].y);
            c.lineTo(e[1].x, e[1].y);
            c.lineTo(e[2].x, e[2].y);
            c.lineTo(e[3].x, e[3].y);
            c.lineTo(e[0].x, e[0].y);
            c.stroke();
          }
        };
        q.prototype.visitStage = function(a, b) {
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
        q.prototype.visitShape = function(a, d) {
          if (this._intersectsClipList(a, d)) {
            var e = d.matrix;
            d.flags & 8192 && (e = e.clone(), e.snap());
            var f = d.target.context;
            b.Filters._applyColorMatrix(f, d.colorMatrix);
            a.source instanceof h.RenderableVideo ? this.visitRenderableVideo(a.source, d) : 0 < f.globalAlpha && this.visitRenderable(a.source, d, a.ratio);
            d.flags & 8192 && e.free();
            b.Filters._removeFilter(f);
          }
        };
        q.prototype.visitRenderableVideo = function(a, b) {
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
            var g = this._backgroundVideoLayer;
            g !== a.video.parentElement && (g.appendChild(a.video), a.addEventListener(2, function N(a) {
              g.removeChild(a.video);
              a.removeEventListener(2, N);
            }));
            d.free();
          }
        };
        q.prototype.visitRenderable = function(a, b, c) {
          var d = a.getBounds();
          if (!(b.flags & 32 || d.isEmpty())) {
            if (b.hasFlags(64)) {
              b.removeFlags(64);
            } else {
              if (this._renderWithCache(a, b)) {
                return;
              }
            }
            var e = b.matrix, d = b.target.context, f = !!(b.flags & 16), g = !!(b.flags & 8);
            d.setTransform(e.a, e.b, e.c, e.d, e.tx, e.ty);
            this._frameInfo.shapes++;
            d.imageSmoothingEnabled = d.mozImageSmoothingEnabled = b.hasFlags(4096);
            e = a.properties.renderCount || 0;
            a.properties.renderCount = ++e;
            a.render(d, c, null, f ? b.clipPath : null, g);
          }
        };
        q.prototype._renderLayer = function(b, c) {
          var d = b.getLayer(), e = d.mask;
          if (e) {
            var f = !b.hasFlags(16) || !e.hasFlags(16);
            this._renderWithMask(b, e, d.blendMode, f, c);
          } else {
            e = a.allocate();
            if (f = this._renderToTemporarySurface(b, b.getLayerBounds(!!this._options.filters), c, e, c.target.surface)) {
              c.target.draw(f, e.x, e.y, e.w, e.h, c.colorMatrix, this._options.blending ? d.blendMode : r.Normal, this._options.filters ? d.filters : null, this._devicePixelRatio), f.free();
            }
            e.free();
          }
        };
        q.prototype._renderWithMask = function(b, c, d, e, f) {
          var g = c.getTransform().getConcatenatedMatrix(!0);
          c.parent || (g = g.scale(this._devicePixelRatio, this._devicePixelRatio));
          var k = b.getBounds().clone();
          f.matrix.transformRectangleAABB(k);
          k.snap();
          if (!k.isEmpty()) {
            var h = c.getBounds().clone();
            g.transformRectangleAABB(h);
            h.snap();
            if (!h.isEmpty()) {
              var n = f.clip.clone();
              n.intersect(k);
              n.intersect(h);
              n.snap();
              n.isEmpty() || (k = f.clone(), k.clip.set(n), b = this._renderToTemporarySurface(b, b.getBounds(), k, a.createEmpty(), null), k.free(), h = f.clone(), h.clip.set(n), h.matrix = g, h.flags |= 4, e && (h.flags |= 8), c = this._renderToTemporarySurface(c, c.getBounds(), h, a.createEmpty(), b.surface), h.free(), b.draw(c, 0, 0, n.w, n.h, h.colorMatrix, r.Alpha, null, this._devicePixelRatio), f.target.draw(b, n.x, n.y, n.w, n.h, k.colorMatrix, d, null, this._devicePixelRatio), c.free(), 
              b.free());
            }
          }
        };
        q.prototype._renderStageToTarget = function(b, c, d) {
          a.allocationCount = g.allocationCount = t.allocationCount = 0;
          b = new t(b);
          b.clip.set(d);
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
        q.prototype._renderToTemporarySurface = function(b, c, d, e, f) {
          var g = d.matrix;
          c = c.clone();
          g.transformRectangleAABB(c);
          c.snap();
          e.set(c);
          e.intersect(d.clip);
          e.snap();
          if (e.isEmpty()) {
            return null;
          }
          f = this._allocateSurface(e.w, e.h, f);
          c = f.region;
          c = new a(c.x, c.y, e.w, e.h);
          f.context.setTransform(1, 0, 0, 1, 0, 0);
          f.clear();
          g = g.clone();
          g.translate(c.x - e.x, c.y - e.y);
          f.context.save();
          d = d.clone();
          d.target = f;
          d.matrix = g;
          d.clip.set(c);
          b.visit(this, d);
          d.free();
          f.context.restore();
          return f;
        };
        q.prototype._allocateSurface = function(a, b, c) {
          return q._surfaceCache.allocate(a, b, c);
        };
        q.prototype.screenShot = function(b, c, e) {
          c && (c = this._stage.content.groupChild.child, d(c instanceof h.Stage), b = c.content.getBounds(!0), c.content.getTransform().getConcatenatedMatrix().transformRectangleAABB(b), b.intersect(this._viewport));
          b || (b = new a(0, 0, this._target.w, this._target.h));
          c = b.w;
          var f = b.h, g = this._devicePixelRatio;
          e && (c /= g, f /= g, g = 1);
          e = document.createElement("canvas");
          e.width = c;
          e.height = f;
          var k = e.getContext("2d");
          k.fillStyle = this._container.style.backgroundColor;
          k.fillRect(0, 0, c, f);
          k.drawImage(this._target.context.canvas, b.x, b.y, b.w, b.h, 0, 0, c, f);
          return new h.ScreenShot(e.toDataURL("image/png"), c, f, g);
        };
        q._initializedCaches = !1;
        q._debugPoints = e.createEmptyPoints(4);
        return q;
      }(h.Renderer);
      b.Canvas2DRenderer = F;
    })(h.Canvas2D || (h.Canvas2D = {}));
    var u = h.Geometry.Point, r = h.Geometry.Matrix, w = h.Geometry.Rectangle, y = f.Tools.Mini.FPS, g = function() {
      function b() {
      }
      b.prototype.onMouseUp = function(b, a) {
        b.state = this;
      };
      b.prototype.onMouseDown = function(b, a) {
        b.state = this;
      };
      b.prototype.onMouseMove = function(b, a) {
        b.state = this;
      };
      b.prototype.onMouseWheel = function(b, a) {
        b.state = this;
      };
      b.prototype.onMouseClick = function(b, a) {
        b.state = this;
      };
      b.prototype.onKeyUp = function(b, a) {
        b.state = this;
      };
      b.prototype.onKeyDown = function(b, a) {
        b.state = this;
      };
      b.prototype.onKeyPress = function(b, a) {
        b.state = this;
      };
      return b;
    }();
    h.UIState = g;
    var E = function(c) {
      function d() {
        c.apply(this, arguments);
        this._keyCodes = [];
      }
      __extends(d, c);
      d.prototype.onMouseDown = function(a, c) {
        c.altKey && (a.state = new b(a.worldView, a.getMousePosition(c, null), a.worldView.getTransform().getMatrix(!0)));
      };
      d.prototype.onMouseClick = function(a, b) {
      };
      d.prototype.onKeyDown = function(a, b) {
        this._keyCodes[b.keyCode] = !0;
      };
      d.prototype.onKeyUp = function(a, b) {
        this._keyCodes[b.keyCode] = !1;
      };
      return d;
    }(g), d = function(b) {
      function d() {
        b.apply(this, arguments);
        this._keyCodes = [];
        this._paused = !1;
        this._mousePosition = new u(0, 0);
      }
      __extends(d, b);
      d.prototype.onMouseMove = function(a, b) {
        this._mousePosition = a.getMousePosition(b, null);
        this._update(a);
      };
      d.prototype.onMouseDown = function(a, b) {
      };
      d.prototype.onMouseClick = function(a, b) {
      };
      d.prototype.onMouseWheel = function(a, b) {
        var c = "DOMMouseScroll" === b.type ? -b.detail : b.wheelDelta / 40;
        if (b.altKey) {
          b.preventDefault();
          var d = a.getMousePosition(b, null), e = a.worldView.getTransform().getMatrix(!0), c = 1 + c / 1E3;
          e.translate(-d.x, -d.y);
          e.scale(c, c);
          e.translate(d.x, d.y);
          a.worldView.getTransform().setMatrix(e);
        }
      };
      d.prototype.onKeyPress = function(a, b) {
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
      d.prototype.onKeyDown = function(a, b) {
        this._keyCodes[b.keyCode] = !0;
        this._update(a);
      };
      d.prototype.onKeyUp = function(a, b) {
        this._keyCodes[b.keyCode] = !1;
        this._update(a);
      };
      d.prototype._update = function(a) {
        a.paused = this._paused;
        if (a.getOption("paintViewport")) {
          var b = h.viewportLoupeDiameter.value, c = h.viewportLoupeDiameter.value;
          a.viewport = new w(this._mousePosition.x - b / 2, this._mousePosition.y - c / 2, b, c);
        } else {
          a.viewport = null;
        }
      };
      return d;
    }(g);
    (function(c) {
      function d() {
        c.apply(this, arguments);
        this._startTime = Date.now();
      }
      __extends(d, c);
      d.prototype.onMouseMove = function(a, c) {
        if (!(10 > Date.now() - this._startTime)) {
          var d = a._world;
          d && (a.state = new b(d, a.getMousePosition(c, null), d.getTransform().getMatrix(!0)));
        }
      };
      d.prototype.onMouseUp = function(a, b) {
        a.state = new E;
        a.selectNodeUnderMouse(b);
      };
      return d;
    })(g);
    var b = function(b) {
      function d(a, e, f) {
        b.call(this);
        this._target = a;
        this._startPosition = e;
        this._startMatrix = f;
      }
      __extends(d, b);
      d.prototype.onMouseMove = function(a, b) {
        b.preventDefault();
        var c = a.getMousePosition(b, null);
        c.sub(this._startPosition);
        this._target.getTransform().setMatrix(this._startMatrix.clone().translate(c.x, c.y));
        a.state = this;
      };
      d.prototype.onMouseUp = function(a, b) {
        a.state = new E;
      };
      return d;
    }(g), g = function() {
      function b(c, a, e) {
        function g(a) {
          q._state.onMouseWheel(q, a);
          q._persistentState.onMouseWheel(q, a);
        }
        void 0 === a && (a = !1);
        void 0 === e && (e = void 0);
        this._state = new E;
        this._persistentState = new d;
        this.paused = !1;
        this.viewport = null;
        this._selectedNodes = [];
        this._isRendering = !1;
        this._rAF = void 0;
        this._eventListeners = Object.create(null);
        this._fullScreen = !1;
        this._container = c;
        this._stage = new h.Stage(512, 512, !0);
        this._worldView = this._stage.content;
        this._world = new h.Group;
        this._worldView.addChild(this._world);
        this._disableHiDPI = a;
        a = document.createElement("div");
        a.style.position = "absolute";
        a.style.width = "100%";
        a.style.height = "100%";
        a.style.zIndex = "0";
        c.appendChild(a);
        if (h.hud.value) {
          var r = document.createElement("div");
          r.style.position = "absolute";
          r.style.width = "100%";
          r.style.height = "100%";
          r.style.pointerEvents = "none";
          var u = document.createElement("div");
          u.style.position = "absolute";
          u.style.width = "100%";
          u.style.height = "20px";
          u.style.pointerEvents = "none";
          r.appendChild(u);
          c.appendChild(r);
          this._fps = new y(u);
        } else {
          this._fps = null;
        }
        this.transparent = r = 0 === e;
        void 0 === e || 0 === e || f.ColorUtilities.rgbaToCSSStyle(e);
        this._options = new h.Canvas2D.Canvas2DRendererOptions;
        this._options.alpha = r;
        this._renderer = new h.Canvas2D.Canvas2DRenderer(a, this._stage, this._options);
        this._listenForContainerSizeChanges();
        this._onMouseUp = this._onMouseUp.bind(this);
        this._onMouseDown = this._onMouseDown.bind(this);
        this._onMouseMove = this._onMouseMove.bind(this);
        var q = this;
        window.addEventListener("mouseup", function(a) {
          q._state.onMouseUp(q, a);
          q._render();
        }, !1);
        window.addEventListener("mousemove", function(a) {
          q._state.onMouseMove(q, a);
          q._persistentState.onMouseMove(q, a);
        }, !1);
        window.addEventListener("DOMMouseScroll", g);
        window.addEventListener("mousewheel", g);
        c.addEventListener("mousedown", function(a) {
          q._state.onMouseDown(q, a);
        });
        window.addEventListener("keydown", function(a) {
          q._state.onKeyDown(q, a);
          if (q._state !== q._persistentState) {
            q._persistentState.onKeyDown(q, a);
          }
        }, !1);
        window.addEventListener("keypress", function(a) {
          q._state.onKeyPress(q, a);
          if (q._state !== q._persistentState) {
            q._persistentState.onKeyPress(q, a);
          }
        }, !1);
        window.addEventListener("keyup", function(a) {
          q._state.onKeyUp(q, a);
          if (q._state !== q._persistentState) {
            q._persistentState.onKeyUp(q, a);
          }
        }, !1);
      }
      b.prototype._listenForContainerSizeChanges = function() {
        var b = this._containerWidth, a = this._containerHeight;
        this._onContainerSizeChanged();
        var c = this;
        setInterval(function() {
          if (b !== c._containerWidth || a !== c._containerHeight) {
            c._onContainerSizeChanged(), b = c._containerWidth, a = c._containerHeight;
          }
        }, 10);
      };
      b.prototype._onContainerSizeChanged = function() {
        var b = this.getRatio(), a = Math.ceil(this._containerWidth * b), c = Math.ceil(this._containerHeight * b);
        this._stage.setBounds(new w(0, 0, a, c));
        this._stage.content.setBounds(new w(0, 0, a, c));
        this._worldView.getTransform().setMatrix(new r(b, 0, 0, b, 0, 0));
        this._dispatchEvent("resize");
      };
      b.prototype.addEventListener = function(b, a) {
        this._eventListeners[b] || (this._eventListeners[b] = []);
        this._eventListeners[b].push(a);
      };
      b.prototype._dispatchEvent = function(b) {
        if (b = this._eventListeners[b]) {
          for (var a = 0;a < b.length;a++) {
            b[a]();
          }
        }
      };
      b.prototype.startRendering = function() {
        if (!this._isRendering) {
          this._isRendering = !0;
          var b = this;
          this._rAF = requestAnimationFrame(function l() {
            b.render();
            b._rAF = requestAnimationFrame(l);
          });
        }
      };
      b.prototype.stopRendering = function() {
        this._isRendering && (this._isRendering = !1, cancelAnimationFrame(this._rAF));
      };
      Object.defineProperty(b.prototype, "state", {set:function(b) {
        this._state = b;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(b.prototype, "cursor", {set:function(b) {
        this._container.style.cursor = b;
      }, enumerable:!0, configurable:!0});
      b.prototype._render = function() {
        h.RenderableVideo.checkForVideoUpdates();
        var b = (this._stage.readyToRender() || h.forcePaint.value) && !this.paused, a = 0;
        if (b) {
          var c = this._renderer;
          c.viewport = this.viewport ? this.viewport : this._stage.getBounds();
          this._dispatchEvent("render");
          a = performance.now();
          c.render();
          a = performance.now() - a;
        }
        this._fps && this._fps.tickAndRender(!b, a);
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
        var b = this.getRatio();
        return {stageWidth:this._containerWidth, stageHeight:this._containerHeight, pixelRatio:b, screenWidth:window.screen ? window.screen.width : 640, screenHeight:window.screen ? window.screen.height : 480};
      };
      b.prototype.toggleOption = function(b) {
        var a = this._options;
        a[b] = !a[b];
      };
      b.prototype.getOption = function(b) {
        return this._options[b];
      };
      b.prototype.getRatio = function() {
        var b = window.devicePixelRatio || 1, a = 1;
        1 === b || this._disableHiDPI || (a = b / 1);
        return a;
      };
      Object.defineProperty(b.prototype, "_containerWidth", {get:function() {
        return this._container.clientWidth;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(b.prototype, "_containerHeight", {get:function() {
        return this._container.clientHeight;
      }, enumerable:!0, configurable:!0});
      b.prototype.queryNodeUnderMouse = function(b) {
        return this._world;
      };
      b.prototype.selectNodeUnderMouse = function(b) {
        (b = this._world) && this._selectedNodes.push(b);
        this._render();
      };
      b.prototype.getMousePosition = function(b, a) {
        var c = this._container, d = c.getBoundingClientRect(), e = this.getRatio(), c = new u(c.scrollWidth / d.width * (b.clientX - d.left) * e, c.scrollHeight / d.height * (b.clientY - d.top) * e);
        if (!a) {
          return c;
        }
        d = r.createIdentity();
        a.getTransform().getConcatenatedMatrix().inverse(d);
        d.transformPoint(c);
        return c;
      };
      b.prototype.getMouseWorldPosition = function(b) {
        return this.getMousePosition(b, this._world);
      };
      b.prototype._onMouseDown = function(b) {
      };
      b.prototype._onMouseUp = function(b) {
      };
      b.prototype._onMouseMove = function(b) {
      };
      b.prototype.screenShot = function(b, a, c) {
        return this._renderer.screenShot(b, a, c);
      };
      return b;
    }();
    h.Easel = g;
    var r = f.GFX.Geometry.Matrix, e = function(b) {
      function d() {
        b.apply(this, arguments);
        this.layout = 0;
      }
      __extends(d, b);
      return d;
    }(h.RendererOptions);
    h.TreeRendererOptions = e;
    g = function(b) {
      function d(a, f, g) {
        void 0 === g && (g = new e);
        b.call(this, a, f, g);
        this._canvas = document.createElement("canvas");
        this._container.appendChild(this._canvas);
        this._context = this._canvas.getContext("2d");
        this._listenForContainerSizeChanges();
      }
      __extends(d, b);
      d.prototype._listenForContainerSizeChanges = function() {
        var a = this._containerWidth, b = this._containerHeight;
        this._onContainerSizeChanged();
        var c = this;
        setInterval(function() {
          if (a !== c._containerWidth || b !== c._containerHeight) {
            c._onContainerSizeChanged(), a = c._containerWidth, b = c._containerHeight;
          }
        }, 10);
      };
      d.prototype._getRatio = function() {
        var a = window.devicePixelRatio || 1, b = 1;
        1 !== a && (b = a / 1);
        return b;
      };
      d.prototype._onContainerSizeChanged = function() {
        var a = this._getRatio(), b = Math.ceil(this._containerWidth * a), c = Math.ceil(this._containerHeight * a), d = this._canvas;
        0 < a ? (d.width = b * a, d.height = c * a, d.style.width = b + "px", d.style.height = c + "px") : (d.width = b, d.height = c);
      };
      Object.defineProperty(d.prototype, "_containerWidth", {get:function() {
        return this._container.clientWidth;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(d.prototype, "_containerHeight", {get:function() {
        return this._container.clientHeight;
      }, enumerable:!0, configurable:!0});
      d.prototype.render = function() {
        var a = this._context;
        a.save();
        a.clearRect(0, 0, this._canvas.width, this._canvas.height);
        a.scale(1, 1);
        0 === this._options.layout && this._renderNodeSimple(this._context, this._stage, r.createIdentity());
        a.restore();
      };
      d.prototype._renderNodeSimple = function(a, b, c) {
        function d(b) {
          var c = b.getChildren();
          b.hasFlags(4096) ? a.fillStyle = "red" : a.fillStyle = "white";
          var l = String(b.id);
          b instanceof h.RenderableText ? l = "T" + l : b instanceof h.RenderableShape ? l = "S" + l : b instanceof h.RenderableBitmap ? l = "B" + l : b instanceof h.RenderableVideo && (l = "V" + l);
          b instanceof h.Renderable && (l = l + " [" + b._parents.length + "]");
          b = a.measureText(l).width;
          a.fillText(l, f, g);
          if (c) {
            f += b + 4;
            k = Math.max(k, f + 20);
            for (l = 0;l < c.length;l++) {
              d(c[l]), l < c.length - 1 && (g += 18, g > e._canvas.height && (a.fillStyle = "gray", f = f - n + k + 8, n = k + 8, g = 0, a.fillStyle = "white"));
            }
            f -= b + 4;
          }
        }
        var e = this;
        a.save();
        a.font = "16px Arial";
        a.fillStyle = "white";
        var f = 0, g = 0, n = 0, k = 0;
        d(b);
        a.restore();
      };
      return d;
    }(h.Renderer);
    h.TreeRenderer = g;
  })(f.GFX || (f.GFX = {}));
  (function(h) {
    (function(u) {
      var r = f.GFX.BlurFilter, w = f.GFX.DropshadowFilter, y = f.GFX.Shape, g = f.GFX.Group, E = f.GFX.RenderableShape, d = f.GFX.RenderableMorphShape, b = f.GFX.RenderableBitmap, e = f.GFX.RenderableVideo, c = f.GFX.RenderableText, p = f.GFX.ColorMatrix, a = f.ShapeData, l = f.ArrayUtilities.DataBuffer, K = f.GFX.Stage, I = f.GFX.Geometry.Matrix, L = f.GFX.Geometry.Rectangle, q = function() {
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
      u.GFXChannelSerializer = q;
      q = function() {
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
          this._registerAsset(a, 0, new e(a, this));
        };
        a.prototype._decodeImage = function(a, c, d, e) {
          var g = new Image, h = b.FromImage(g, -1, -1);
          g.src = URL.createObjectURL(new Blob([c], {type:f.getMIMETypeForImageType(a)}));
          g.onload = function() {
            h.setBounds(new L(0, 0, g.width, g.height));
            d && h.mask(d);
            h.invalidate();
            e({width:g.width, height:g.height});
          };
          g.onerror = function() {
            e(null);
          };
          return h;
        };
        a.prototype.sendVideoPlaybackEvent = function(a, b, c) {
          this._easelHost.sendVideoPlaybackEvent(a, b, c);
        };
        return a;
      }();
      u.GFXChannelDeserializerContext = q;
      q = function() {
        function e() {
        }
        e.prototype.read = function() {
          for (var a = 0, b = this.input, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0, l = 0, q = 0, p = 0;0 < b.bytesAvailable;) {
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
                l++;
                this._readUpdateNetStream();
                break;
              case 200:
                q++;
                this._readDrawToBitmap();
                break;
              case 106:
                p++, this._readRequestBitmapData();
            }
          }
        };
        e.prototype._readMatrix = function() {
          var a = this.input, b = e._temporaryReadMatrix, c = 1, d = 0, f = 0, g = 1, h = 0, l = 0;
          switch(a.readInt()) {
            case 1:
              c = a.readFloat(), g = a.readFloat();
            case 0:
              h = a.readFloat() / 20;
              l = a.readFloat() / 20;
              break;
            case 2:
              c = g = a.readFloat();
              h = a.readFloat() / 20;
              l = a.readFloat() / 20;
              break;
            case 3:
              c = a.readFloat(), d = a.readFloat(), f = a.readFloat(), g = a.readFloat(), h = a.readFloat() / 20, l = a.readFloat() / 20;
          }
          b.setElements(c, d, f, g, h, l);
          return b;
        };
        e.prototype._readRectangle = function() {
          var a = this.input, b = e._temporaryReadRectangle;
          b.setElements(a.readInt() / 20, a.readInt() / 20, a.readInt() / 20, a.readInt() / 20);
          return b;
        };
        e.prototype._readColorMatrix = function() {
          var a = this.input, b = e._temporaryReadColorMatrix, c = 1, d = 1, f = 1, g = 1, h = 0, l = 0, q = 0, p = 0;
          switch(a.readInt()) {
            case 0:
              return e._temporaryReadColorMatrixIdentity;
            case 1:
              g = a.readFloat();
              break;
            case 2:
              f = d = c = 0;
              g = a.readFloat();
              h = a.readInt();
              l = a.readInt();
              q = a.readInt();
              p = a.readInt();
              break;
            case 3:
              c = a.readFloat(), d = a.readFloat(), f = a.readFloat(), g = a.readFloat(), h = a.readInt(), l = a.readInt(), q = a.readInt(), p = a.readInt();
          }
          b.setMultipliersAndOffsets(c, d, f, g, h, l, q, p);
          return b;
        };
        e.prototype._readAsset = function() {
          var a = this.input.readInt(), b = this.inputAssets[a];
          this.inputAssets[a] = null;
          return b;
        };
        e.prototype._readUpdateGraphics = function() {
          for (var b = this.input, c = this.context, e = b.readInt(), f = b.readInt(), g = c._getAsset(e), h = this._readRectangle(), l = a.FromPlainObject(this._readAsset()), q = b.readInt(), p = [], x = 0;x < q;x++) {
            var r = b.readInt();
            p.push(c._getBitmapAsset(r));
          }
          if (g) {
            g.update(l, p, h);
          } else {
            b = l.morphCoordinates ? new d(e, l, p, h) : new E(e, l, p, h);
            for (x = 0;x < p.length;x++) {
              p[x] && p[x].addRenderableParent(b);
            }
            c._registerAsset(e, f, b);
          }
        };
        e.prototype._readUpdateBitmapData = function() {
          var a = this.input, c = this.context, d = a.readInt(), e = a.readInt(), f = c._getBitmapAsset(d), g = this._readRectangle(), a = a.readInt(), h = l.FromPlainObject(this._readAsset());
          f ? f.updateFromDataBuffer(a, h) : (f = b.FromDataBuffer(a, h, g), c._registerAsset(d, e, f));
        };
        e.prototype._readUpdateTextContent = function() {
          var a = this.input, b = this.context, d = a.readInt(), e = a.readInt(), f = b._getTextAsset(d), g = this._readRectangle(), h = this._readMatrix(), q = a.readInt(), p = a.readInt(), x = a.readInt(), r = a.readBoolean(), m = a.readInt(), u = a.readInt(), y = this._readAsset(), w = l.FromPlainObject(this._readAsset()), E = null, K = a.readInt();
          K && (E = new l(4 * K), a.readBytes(E, 0, 4 * K));
          f ? (f.setBounds(g), f.setContent(y, w, h, E), f.setStyle(q, p, m, u), f.reflow(x, r)) : (f = new c(g), f.setContent(y, w, h, E), f.setStyle(q, p, m, u), f.reflow(x, r), b._registerAsset(d, e, f));
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
          a.stage.color = f.Color.FromARGB(b);
          a.stage.align = this.input.readInt();
          a.stage.scaleMode = this.input.readInt();
          b = this.input.readInt();
          a._easelHost.fullscreen = 0 === b || 1 === b;
        };
        e.prototype._readUpdateCurrentMouseTarget = function() {
          var a = this.context;
          this.input.readInt();
          var b = this.input.readInt();
          a._easelHost.cursor = f.UI.toCSSCursor(b);
        };
        e.prototype._readUpdateNetStream = function() {
          var a = this.context, b = this.input.readInt(), c = a._getVideoAsset(b), d = this._readRectangle();
          c || (a.registerVideo(b), c = a._getVideoAsset(b));
          c.setBounds(d);
        };
        e.prototype._readFilters = function(a) {
          var b = this.input, c = b.readInt(), d = [];
          if (c) {
            for (var e = 0;e < c;e++) {
              var g = b.readInt();
              switch(g) {
                case h.FilterType.Blur:
                  d.push(new r(b.readFloat(), b.readFloat(), b.readInt()));
                  break;
                case h.FilterType.DropShadow:
                  d.push(new w(b.readFloat(), b.readFloat(), b.readFloat(), b.readFloat(), b.readInt(), b.readFloat(), b.readBoolean(), b.readBoolean(), b.readBoolean(), b.readInt(), b.readFloat()));
                  break;
                case h.FilterType.ColorMatrix:
                  g = new Float32Array(20);
                  g[0] = b.readFloat();
                  g[4] = b.readFloat();
                  g[8] = b.readFloat();
                  g[12] = b.readFloat();
                  g[16] = b.readFloat() / 255;
                  g[1] = b.readFloat();
                  g[5] = b.readFloat();
                  g[9] = b.readFloat();
                  g[13] = b.readFloat();
                  g[17] = b.readFloat() / 255;
                  g[2] = b.readFloat();
                  g[6] = b.readFloat();
                  g[10] = b.readFloat();
                  g[14] = b.readFloat();
                  g[18] = b.readFloat() / 255;
                  g[3] = b.readFloat();
                  g[7] = b.readFloat();
                  g[11] = b.readFloat();
                  g[15] = b.readFloat();
                  g[19] = b.readFloat() / 255;
                  d.push(new p(g));
                  break;
                default:
                  f.Debug.somewhatImplemented(h.FilterType[g]);
              }
            }
            a.getLayer().filters = d;
          }
        };
        e.prototype._readUpdateFrame = function() {
          var a = this.input, b = this.context, c = a.readInt(), d = 0, e = b._nodes[c];
          e || (e = b._nodes[c] = new g);
          c = a.readInt();
          c & 1 && e.getTransform().setMatrix(this._readMatrix());
          c & 8 && e.getTransform().setColorMatrix(this._readColorMatrix());
          if (c & 64) {
            var f = a.readInt();
            e.getLayer().mask = 0 <= f ? b._makeNode(f) : null;
          }
          c & 128 && (e.clip = a.readInt());
          c & 32 && (d = a.readInt() / 65535, e.getLayer().blendMode = a.readInt(), this._readFilters(e), e.toggleFlags(1, a.readBoolean()), e.toggleFlags(16, a.readBoolean()), e.toggleFlags(32, !!a.readInt()), e.toggleFlags(64, !!a.readInt()));
          if (c & 4) {
            c = a.readInt();
            f = e;
            f.clearChildren();
            for (var h = 0;h < c;h++) {
              var l = a.readInt(), l = b._makeNode(l);
              f.addChild(l);
            }
          }
          d && (l = e.getChildren()[0], l instanceof y && (l.ratio = d));
        };
        e.prototype._readDrawToBitmap = function() {
          var a = this.input, c = this.context, d = a.readInt(), e = a.readInt(), f = a.readInt(), g, h, l;
          g = f & 1 ? this._readMatrix().clone() : I.createIdentity();
          f & 8 && (h = this._readColorMatrix());
          f & 16 && (l = this._readRectangle());
          f = a.readInt();
          a.readBoolean();
          a = c._getBitmapAsset(d);
          e = c._makeNode(e);
          a ? a.drawNode(e, g, h, f, l) : c._registerAsset(d, -1, b.FromNode(e, g, h, f, l));
        };
        e.prototype._readRequestBitmapData = function() {
          var a = this.output, b = this.context, c = this.input.readInt();
          b._getBitmapAsset(c).readImageData(a);
        };
        e._temporaryReadMatrix = I.createIdentity();
        e._temporaryReadRectangle = L.createEmpty();
        e._temporaryReadColorMatrix = p.createIdentity();
        e._temporaryReadColorMatrixIdentity = p.createIdentity();
        return e;
      }();
      u.GFXChannelDeserializer = q;
    })(h.GFX || (h.GFX = {}));
  })(f.Remoting || (f.Remoting = {}));
  (function(h) {
    var u = f.GFX.Geometry.Point, r = f.ArrayUtilities.DataBuffer;
    h.ContextMenuButton = 2;
    var w = function() {
      function y(g) {
        this._easel = g;
        var h = g.transparent;
        this._group = g.world;
        this._content = null;
        this._fullscreen = !1;
        this._context = new f.Remoting.GFX.GFXChannelDeserializerContext(this, this._group, h);
        this._addEventListeners();
        f.registerFallbackFont();
      }
      y.prototype.onSendUpdates = function(f, h) {
        throw Error("This method is abstract");
      };
      Object.defineProperty(y.prototype, "easel", {get:function() {
        return this._easel;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(y.prototype, "stage", {get:function() {
        return this._easel.stage;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(y.prototype, "content", {set:function(f) {
        this._content = f;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(y.prototype, "cursor", {set:function(f) {
        this._easel.cursor = f;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(y.prototype, "fullscreen", {set:function(f) {
        this._fullscreen !== f && (this._fullscreen = f, "undefined" !== typeof ShumwayCom && ShumwayCom.setFullscreen && ShumwayCom.setFullscreen(f));
      }, enumerable:!0, configurable:!0});
      y.prototype._mouseEventListener = function(g) {
        if (g.button !== h.ContextMenuButton) {
          var y = this._easel.getMousePosition(g, this._content), y = new u(y.x, y.y), d = new r, b = new f.Remoting.GFX.GFXChannelSerializer;
          b.output = d;
          b.writeMouseEvent(g, y);
          this.onSendUpdates(d, []);
        }
      };
      y.prototype._keyboardEventListener = function(g) {
        var h = new r, d = new f.Remoting.GFX.GFXChannelSerializer;
        d.output = h;
        d.writeKeyboardEvent(g);
        this.onSendUpdates(h, []);
      };
      y.prototype._addEventListeners = function() {
        for (var f = this._mouseEventListener.bind(this), h = this._keyboardEventListener.bind(this), d = y._mouseEvents, b = 0;b < d.length;b++) {
          window.addEventListener(d[b], f);
        }
        f = y._keyboardEvents;
        for (b = 0;b < f.length;b++) {
          window.addEventListener(f[b], h);
        }
        this._addFocusEventListeners();
        this._easel.addEventListener("resize", this._resizeEventListener.bind(this));
      };
      y.prototype._sendFocusEvent = function(g) {
        var h = new r, d = new f.Remoting.GFX.GFXChannelSerializer;
        d.output = h;
        d.writeFocusEvent(g);
        this.onSendUpdates(h, []);
      };
      y.prototype._addFocusEventListeners = function() {
        var f = this;
        document.addEventListener("visibilitychange", function(h) {
          f._sendFocusEvent(document.hidden ? 0 : 1);
        });
        window.addEventListener("focus", function(h) {
          f._sendFocusEvent(3);
        });
        window.addEventListener("blur", function(h) {
          f._sendFocusEvent(2);
        });
      };
      y.prototype._resizeEventListener = function() {
        this.onDisplayParameters(this._easel.getDisplayParameters());
      };
      y.prototype.onDisplayParameters = function(f) {
        throw Error("This method is abstract");
      };
      y.prototype.processUpdates = function(g, h, d) {
        void 0 === d && (d = null);
        var b = new f.Remoting.GFX.GFXChannelDeserializer;
        b.input = g;
        b.inputAssets = h;
        b.output = d;
        b.context = this._context;
        b.read();
      };
      y.prototype.processVideoControl = function(f, h, d) {
        var b = this._context, e = b._getVideoAsset(f);
        if (!e) {
          if (1 !== h) {
            return;
          }
          b.registerVideo(f);
          e = b._getVideoAsset(f);
        }
        return e.processControlRequest(h, d);
      };
      y.prototype.processRegisterFont = function(f, h, d) {
        this._context.registerFont(f, h, d);
      };
      y.prototype.processRegisterImage = function(f, h, d, b, e, c) {
        this._context.registerImage(f, h, d, b, e, c);
      };
      y.prototype.processFSCommand = function(f, h) {
        "undefined" !== typeof ShumwayCom && "test" === ShumwayCom.environment && ShumwayCom.processFSCommand(f, h);
      };
      y.prototype.processFrame = function() {
        "undefined" !== typeof ShumwayCom && "test" === ShumwayCom.environment && ShumwayCom.processFrame();
      };
      y.prototype.onVideoPlaybackEvent = function(f, h, d) {
        throw Error("This method is abstract");
      };
      y.prototype.sendVideoPlaybackEvent = function(f, h, d) {
        this.onVideoPlaybackEvent(f, h, d);
      };
      y._mouseEvents = f.Remoting.MouseEventNames;
      y._keyboardEvents = f.Remoting.KeyboardEventNames;
      return y;
    }();
    h.EaselHost = w;
    (function(r) {
      var g = f.ArrayUtilities.DataBuffer, u = function(d) {
        function b(b, c) {
          d.call(this, b);
          this._peer = c;
          this._peer.onSyncMessage = function(b) {
            return this._onWindowMessage(b, !1);
          }.bind(this);
          this._peer.onAsyncMessage = function(b) {
            this._onWindowMessage(b, !0);
          }.bind(this);
        }
        __extends(b, d);
        b.prototype.onSendUpdates = function(b, c) {
          var d = b.getBytes();
          this._peer.postAsyncMessage({type:"gfx", updates:d, assets:c}, [d.buffer]);
        };
        b.prototype.onDisplayParameters = function(b) {
          this._peer.postAsyncMessage({type:"displayParameters", params:b});
        };
        b.prototype.onVideoPlaybackEvent = function(b, c, d) {
          this._peer.postAsyncMessage({type:"videoPlayback", id:b, eventType:c, data:d});
        };
        b.prototype._sendRegisterFontResponse = function(b, c) {
          this._peer.postAsyncMessage({type:"registerFontResponse", requestId:b, result:c});
        };
        b.prototype._sendRegisterImageResponse = function(b, c) {
          this._peer.postAsyncMessage({type:"registerImageResponse", requestId:b, result:c});
        };
        b.prototype._onWindowMessage = function(b, c) {
          var d;
          if ("object" === typeof b && null !== b) {
            if ("player" === b.type) {
              var a = g.FromArrayBuffer(b.updates.buffer);
              c ? this.processUpdates(a, b.assets) : (d = new g, this.processUpdates(a, b.assets, d), d = d.toPlainObject());
            } else {
              "frame" === b.type ? this.processFrame() : "videoControl" === b.type ? d = this.processVideoControl(b.id, b.eventType, b.data) : "registerFont" === b.type ? this.processRegisterFont(b.syncId, b.data, this._sendRegisterFontResponse.bind(this, b.requestId)) : "registerImage" === b.type ? this.processRegisterImage(b.syncId, b.symbolId, b.imageType, b.data, b.alphaData, this._sendRegisterImageResponse.bind(this, b.requestId)) : "fscommand" === b.type && this.processFSCommand(b.command, 
              b.args);
            }
          }
          return d;
        };
        return b;
      }(h.EaselHost);
      r.WindowEaselHost = u;
    })(h.Window || (h.Window = {}));
    (function(r) {
      function g(a, b) {
        a.writeInt(b.length);
        a.writeRawBytes(b);
      }
      function u(a, b) {
        return "byteLength" in a && "buffer" in a && (a.constructor && a.constructor.name) === b;
      }
      function d(a) {
        return "byteLength" in a && "ArrayBuffer" === (a.constructor && a.constructor.name);
      }
      function b(b) {
        function c(a) {
          switch(typeof a) {
            case "undefined":
              e.writeByte(w.Undefined);
              break;
            case "boolean":
              e.writeByte(a ? w.True : w.False);
              break;
            case "number":
              e.writeByte(w.Number);
              e.writeDouble(a);
              break;
            case "string":
              e.writeByte(w.String);
              e.writeUTF(a);
              break;
            default:
              if (null === a) {
                e.writeByte(w.Null);
                break;
              }
              if (Array.isArray(a)) {
                e.writeByte(w.Array);
                e.writeInt(a.length);
                for (var b = 0;b < a.length;b++) {
                  c(a[b]);
                }
              } else {
                if (u(a, "Uint8Array")) {
                  e.writeByte(w.Uint8Array), g(e, a);
                } else {
                  if ("length" in a && "buffer" in a && "littleEndian" in a) {
                    e.writeByte(a.littleEndian ? w.PlainObjectDataBufferLE : w.PlainObjectDataBufferBE), g(e, new Uint8Array(a.buffer, 0, a.length));
                  } else {
                    if (d(a)) {
                      e.writeByte(w.ArrayBuffer), g(e, new Uint8Array(a));
                    } else {
                      if (u(a, "Int32Array")) {
                        e.writeByte(w.Int32Array), g(e, new Uint8Array(a.buffer, a.byteOffset, a.byteLength));
                      } else {
                        if (!f.isNullOrUndefined(a.buffer) && d(a.buffer) && "number" === typeof a.byteOffset) {
                          throw Error("Some unsupported TypedArray is used");
                        }
                        e.writeByte(w.Object);
                        for (b in a) {
                          e.writeUTF(b), c(a[b]);
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
        var e = new a;
        c(b);
        return e.getBytes();
      }
      function e(b) {
        var c = new a, d = b.readInt();
        b.readBytes(c, 0, d);
        return c.getBytes();
      }
      function c(b) {
        var c = new a, d = b.readInt();
        b.readBytes(c, 0, d);
        return p(c);
      }
      function p(a) {
        var b = a.readByte();
        switch(b) {
          case w.Null:
            return null;
          case w.True:
            return !0;
          case w.False:
            return !1;
          case w.Number:
            return a.readDouble();
          case w.String:
            return a.readUTF();
          case w.Array:
            for (var b = [], c = a.readInt(), d = 0;d < c;d++) {
              b[d] = p(a);
            }
            return b;
          case w.Object:
            for (b = {};c = a.readUTF();) {
              b[c] = p(a);
            }
            return b;
          case w.ArrayBuffer:
            return e(a).buffer;
          case w.Uint8Array:
            return e(a);
          case w.PlainObjectDataBufferBE:
          ;
          case w.PlainObjectDataBufferLE:
            return a = e(a), new l(a.buffer, a.length, b === w.PlainObjectDataBufferLE);
          case w.Int32Array:
            return new Int32Array(e(a).buffer);
        }
      }
      var a = f.ArrayUtilities.DataBuffer, l = f.ArrayUtilities.PlainObjectDataBuffer, w;
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
      var I = function() {
        function c(b) {
          this._maxRecordingSize = b;
          this._recording = new a;
          this._recordingStarted = Date.now();
          this._recording.writeRawBytes(new Uint8Array([77, 83, 87, 70]));
          this._stopped = !1;
        }
        c.prototype.stop = function() {
          this._stopped = !0;
        };
        c.prototype.getRecording = function() {
          return new Blob([this._recording.getBytes()], {type:"application/octet-stream"});
        };
        c.prototype.dump = function() {
          (new L(this._recording.getBytes())).dump();
        };
        c.prototype._createRecord = function(a, b) {
          this._stopped || (this._recording.length + 8 + (b ? b.length : 0) >= this._maxRecordingSize ? (console.error("Recording limit reached"), this._stopped = !0) : (this._recording.writeInt(Date.now() - this._recordingStarted), this._recording.writeInt(a), null !== b ? (this._recording.writeInt(b.length), this._recording.writeRawBytes(b.getBytes())) : this._recording.writeInt(0)));
        };
        c.prototype.recordPlayerCommand = function(c, d, e) {
          var f = new a;
          g(f, d);
          f.writeInt(e.length);
          e.forEach(function(a) {
            a = b(a);
            g(f, a);
          });
          this._createRecord(c ? 2 : 1, f);
        };
        c.prototype.recordFrame = function() {
          this._createRecord(3, null);
        };
        c.prototype.recordFont = function(c, d) {
          var e = new a;
          e.writeInt(c);
          g(e, b(d));
          this._createRecord(4, e);
        };
        c.prototype.recordImage = function(c, d, e, f, h) {
          var l = new a;
          l.writeInt(c);
          l.writeInt(d);
          l.writeInt(e);
          g(l, b(f));
          g(l, b(h));
          this._createRecord(5, l);
        };
        c.prototype.recordFSCommand = function(b, c) {
          var d = new a;
          d.writeUTF(b);
          d.writeUTF(c || "");
          this._createRecord(6, d);
        };
        return c;
      }();
      r.MovieRecorder = I;
      var L = function() {
        function b(c) {
          this._buffer = new a;
          this._buffer.writeRawBytes(c);
          this._buffer.position = 4;
        }
        b.prototype.readNextRecord = function() {
          if (this._buffer.position >= this._buffer.length) {
            return 0;
          }
          var b = this._buffer.readInt(), c = this._buffer.readInt(), d = this._buffer.readInt(), e = null;
          0 < d && (e = new a, this._buffer.readBytes(e, 0, d));
          this.currentTimestamp = b;
          this.currentType = c;
          this.currentData = e;
          return c;
        };
        b.prototype.parsePlayerCommand = function() {
          for (var a = e(this.currentData), b = this.currentData.readInt(), d = [], f = 0;f < b;f++) {
            d.push(c(this.currentData));
          }
          return {updates:a, assets:d};
        };
        b.prototype.parseFSCommand = function() {
          var a = this.currentData.readUTF(), b = this.currentData.readUTF();
          return {command:a, args:b};
        };
        b.prototype.parseFont = function() {
          var a = this.currentData.readInt(), b = c(this.currentData);
          return {syncId:a, data:b};
        };
        b.prototype.parseImage = function() {
          var a = this.currentData.readInt(), b = this.currentData.readInt(), d = this.currentData.readInt(), e = c(this.currentData), f = c(this.currentData);
          return {syncId:a, symbolId:b, imageType:d, data:e, alphaData:f};
        };
        b.prototype.dump = function() {
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
        return b;
      }();
      r.MovieRecordParser = L;
      a = f.ArrayUtilities.DataBuffer;
      I = function(b) {
        function c(a) {
          b.call(this, a);
          this.alwaysRenderFrame = this.ignoreTimestamps = !1;
          this.cpuTimeRendering = this.cpuTimeUpdates = 0;
          this.onComplete = null;
        }
        __extends(c, b);
        Object.defineProperty(c.prototype, "cpuTime", {get:function() {
          return this.cpuTimeUpdates + this.cpuTimeRendering;
        }, enumerable:!0, configurable:!0});
        c.prototype.playUrl = function(a) {
          var b = new XMLHttpRequest;
          b.open("GET", a, !0);
          b.responseType = "arraybuffer";
          b.onload = function() {
            this.playBytes(new Uint8Array(b.response));
          }.bind(this);
          b.send();
        };
        c.prototype.playBytes = function(a) {
          this._parser = new r.MovieRecordParser(a);
          this._lastTimestamp = 0;
          this._parseNext();
        };
        c.prototype.onSendUpdates = function(a, b) {
        };
        c.prototype.onDisplayParameters = function(a) {
        };
        c.prototype.onVideoPlaybackEvent = function(a, b, c) {
        };
        c.prototype._parseNext = function() {
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
        c.prototype._runRecord = function() {
          var b, c = performance.now();
          switch(this._parser.currentType) {
            case 1:
            ;
            case 2:
              b = this._parser.parsePlayerCommand();
              var d = 2 === this._parser.currentType, e = a.FromArrayBuffer(b.updates.buffer);
              d ? this.processUpdates(e, b.assets) : (d = new a, this.processUpdates(e, b.assets, d));
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
          this.cpuTimeUpdates += performance.now() - c;
          3 === this._parser.currentType && this.alwaysRenderFrame ? requestAnimationFrame(this._renderFrameJustAfterRAF.bind(this)) : this._parseNext();
        };
        c.prototype._renderFrameJustAfterRAF = function() {
          var a = performance.now();
          this.easel.render();
          this.cpuTimeRendering += performance.now() - a;
          this._parseNext();
        };
        return c;
      }(h.EaselHost);
      r.PlaybackEaselHost = I;
      I = function(a) {
        function b(c, d, e) {
          void 0 === e && (e = 0);
          a.call(this, c, d);
          this._recorder = null;
          this._recorder = new r.MovieRecorder(e);
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
      r.RecordingEaselHost = I;
    })(h.Test || (h.Test = {}));
  })(f.GFX || (f.GFX = {}));
})(Shumway || (Shumway = {}));
console.timeEnd("Load GFX Dependencies");

