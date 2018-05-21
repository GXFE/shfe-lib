!(function(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
      ? define('ShfeLib', [], t)
      : 'object' == typeof exports
        ? (exports.ShfeLib = t())
        : (e.ShfeLib = t());
})(window, function() {
  return (function(e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, r) {
        n.o(e, t) ||
          Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: r
          });
      }),
      (n.r = function(e) {
        Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ''),
      n((n.s = 0))
    );
  })([
    function(e, t, n) {
      'use strict';
      n.r(t);
      var r = {
          name: 'Utils',
          getUid: function() {
            return (
              +new Date() +
              Math.random()
                .toString(10)
                .substring(2, 6)
            );
          },
          getRandom: function(e, t) {
            return Math.floor(Math.random() * (t - e) + e);
          }
        },
        o = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
      var u = (function() {
          function e() {
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e);
          }
          return (
            o(e, [
              {
                key: 'set',
                value: function(e, t, n) {
                  var r = n ? 60 * Number(n) * 60 * 1e3 : 864e5,
                    o = new Date();
                  o.setTime(o.getTime() + r);
                  var u = n ? '; expires=' + o.toUTCString() : '';
                  document.cookie = e + '=' + encodeURI(t) + u + '; path=/';
                }
              },
              {
                key: 'get',
                value: function(e) {
                  var t = '; ' + document.cookie + '; ',
                    n = t.indexOf('; ' + e + '=');
                  if (-1 !== n) {
                    var r = t.substring(n + e.length + 3, t.length);
                    return decodeURI(r.substring(0, r.indexOf('; ')));
                  }
                  return null;
                }
              },
              {
                key: 'del',
                value: function(e) {
                  var t = new Date(new Date().getTime() - 1),
                    n = this.read(e);
                  null !== n &&
                    (document.cookie =
                      e +
                      '=' +
                      n +
                      '; expires=' +
                      t.toUTCString() +
                      '; path=/');
                }
              }
            ]),
            e
          );
        })(),
        i = {
          name: 'Url',
          parseQueryString: function() {
            return {};
          },
          getQueryString: function(e) {
            var t = new RegExp('(^|&)' + e + '=([^&]*)(&|$)', 'i'),
              n = window.location.search.substr(1).match(t);
            return null != n ? decodeURI(n[2]) : null;
          }
        };
      t.default = { Util: r, Cookie: u, Date: { name: 'Date' }, Url: i };
    }
  ]).default;
});
//# sourceMappingURL=ShfeLib.js.map
