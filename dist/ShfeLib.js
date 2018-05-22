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
      var i = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
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
      n.r(t),
        Array.prototype.contains ||
          (Array.prototype.contains = function(e) {
            for (var t = 0; t < this.length; t++) if (this[t] === e) return !0;
          });
      for (
        var r = {
            difference: function(e, t) {
              try {
                var n = [],
                  r = 0,
                  i = e.length;
                for (r = 0; r < i; r++) t.contains(e[r]) || n.push(e[r]);
                return n;
              } catch (t) {
                return e;
              }
            },
            upsetArr: function(e) {
              return e.sort(function() {
                return 0.5 - Math.random();
              });
            }
          },
          i = navigator.userAgent,
          o = {
            wechat: i.indexOf('MicroMessenger') > -1,
            weibo: i.toLowerCase().indexOf('weibo') > -1,
            qq: i.indexOf('QQ/') > -1,
            qqbrowser: i.indexOf('MQQBrowser') > -1,
            getBrowserType: function() {
              var e = i.toLowerCase(),
                t = '';
              return (
                e.indexOf('msie') > 0 && (t = 'IE'),
                e.indexOf('firefox') > 0 && (t = 'firefox'),
                e.indexOf('chrome') > 0 &&
                  e.indexOf('mb2345browser') < 0 &&
                  e.indexOf('360 aphone browser') < 0 &&
                  (t = 'chrome'),
                (e.indexOf('360 aphone browser') > 0 ||
                  e.indexOf('qhbrowser') > 0) &&
                  (t = '360'),
                e.indexOf('ucbrowser') > 0 && (t = 'UC'),
                e.indexOf('micromessenger') > 0 && (t = 'WeChat'),
                (e.indexOf('mqqbrowser') > 0 || e.indexOf('qq') > 0) &&
                  e.indexOf('micromessenger') < 0 &&
                  (t = 'QQ'),
                e.indexOf('miuibrowser') > 0 && (t = 'MIUI'),
                e.indexOf('mb2345browser') > 0 && (t = '2345'),
                e.indexOf('sogoumobilebrowser') > 0 && (t = 'sogou'),
                e.indexOf('liebaofast') > 0 && (t = 'liebao'),
                e.indexOf('weibo') > 0 && (t = 'weibo'),
                e.indexOf('safari') > 0 &&
                  e.indexOf('chrome') < 0 &&
                  e.indexOf('ucbrowser') < 0 &&
                  e.indexOf('micromessenger') < 0 &&
                  e.indexOf('mqqbrowser') < 0 &&
                  e.indexOf('miuibrowser') < 0 &&
                  e.indexOf('mb2345browser') < 0 &&
                  e.indexOf('sogoumobilebrowser') < 0 &&
                  e.indexOf('liebaofast') < 0 &&
                  e.indexOf('qhbrowser') < 0 &&
                  e.indexOf('weibo') < 0 &&
                  (t = 'safari'),
                t
              );
            }
          },
          a = {
            set: function(e, t, n) {
              var r = n ? 60 * Number(n) * 60 * 1e3 : 864e5,
                i = new Date();
              i.setTime(i.getTime() + r);
              var o = n ? '; expires=' + i.toUTCString() : '';
              document.cookie = e + '=' + encodeURI(t) + o + '; path=/';
            },
            get: function(e) {
              var t = '; ' + document.cookie + '; ',
                n = t.indexOf('; ' + e + '=');
              if (-1 !== n) {
                var r = t.substring(n + e.length + 3, t.length);
                return decodeURI(r.substring(0, r.indexOf('; ')));
              }
              return null;
            },
            del: function(e) {
              var t = new Date(new Date().getTime() - 1),
                n = this.read(e);
              null !== n &&
                (document.cookie =
                  e + '=' + n + '; expires=' + t.toUTCString() + '; path=/');
            }
          },
          u = {
            strToTimestamp: function(e) {
              return Date.parse(e.replace(/-/g, '/'));
            },
            timestampToDateStr: function(e, t) {
              return this.dateToString(this.timestampToDate(e), t);
            },
            timestampToDate: function(e) {
              return new Date(e);
            },
            dateToString: function(e, t) {
              var n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                r = e.getFullYear().toString(),
                i = (e.getMonth() + 1).toString(),
                o = e.getDate().toString(),
                a = e.getHours().toString(),
                u = e.getMinutes().toString();
              (i = i.length > 1 ? i : '0' + i),
                (o = o.length > 1 ? o : '0' + o),
                (a = a.length > 1 ? a : '0' + a),
                (u = u.length > 1 ? u : '0' + u);
              var s = (n ? r + '-' : '') + i + '-' + o + ' ' + a + ':' + u;
              return t && (s = s.replace(/-/g, t)), s;
            },
            dateToStringWithYear: function(e, t) {
              return this.dateToString(e, t, !0);
            },
            getSpecialTimeStr: function(e) {
              var t = this.strToTimestamp(e);
              if (!t) return !1;
              var n = new Date().getTime(),
                r = Number(n - t);
              if (r >= 864e5) {
                var i = r / 864e5;
                return i > 2 ? this.timeToString(t) : i > 1 ? '前天' : '昨天';
              }
              return r >= 36e5
                ? Math.floor(r / 36e5) + '小时前'
                : r >= 6e4
                  ? Math.floor(r / 6e4) + '分钟前'
                  : '最新';
            },
            secondsToTimestr: function(e) {
              var t,
                n,
                r,
                i =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
              if (!(null == e || e < 0))
                return (
                  (t = ((e = Math.ceil(e)) / 3600) | 0),
                  (e = parseInt(e) - 3600 * t),
                  parseInt(t) < 10 && (t = '0' + t),
                  (n = (e / 60) | 0),
                  parseInt(n) < 10 && (n = '0' + n),
                  (r = parseInt(e) - 60 * n) < 10 && (r = '0' + r),
                  i ? t + ':' + n + ':' + r : n + ':' + r
                );
            },
            timestampToTimestr: function(e, t) {
              var n = e ? Number(e) / 1e3 : 0;
              return this.secondsToTimestr(n, t);
            }
          },
          s = {
            getScript: function(e, t, n) {
              var r = document.getElementsByTagName('head')[0],
                i = document.createElement('script');
              i.setAttribute('type', 'text/javascript'),
                i.setAttribute('src', e),
                n ? n.appendChild(i) : r.appendChild(i);
              var o = function() {
                'function' == typeof t && t();
              };
              document.all
                ? (i.onreadystatechange = function() {
                    ('loaded' !== i.readyState &&
                      'complete' !== i.readyState) ||
                      o();
                  })
                : (i.onload = function() {
                    o();
                  });
            },
            createScript: function(e, t, n) {
              if (e) {
                var r = document.getElementsByTagName('head')[0],
                  i = document.createElement('script');
                i.setAttribute('type', 'text/javascript'),
                  (i.innerHTML = e),
                  n ? n.appendChild(i) : r.appendChild(i),
                  t();
              }
            },
            createStyle: function(e, t, n) {
              if (e) {
                var r = document.getElementsByTagName('head')[0],
                  i = document.createElement('style');
                (i.innerHTML = e),
                  n ? n.appendChild(i) : r.appendChild(i),
                  t && t();
              }
            },
            filterHtmlTags: function(e) {
              return e && 'string' == typeof e
                ? e.replace(/<\/?[^>]*>/g, '')
                : '';
            },
            getScrollTop: function() {
              var e = 0,
                t = 0;
              try {
                document.body && (e = document.body.scrollTop),
                  document.documentElement &&
                    (t = document.documentElement.scrollTop);
              } catch (e) {
                console.error(e);
              }
              return e - t > 0 ? e : t;
            }
          },
          c = {
            getSpecialCountStr: function(e) {
              return 'string' != typeof e && 'number' != typeof e
                ? e
                : (e = parseInt(e, 10)) > 9999
                  ? Math.ceil(e / 1e4) + '万'
                  : '' + e;
            }
          },
          f = navigator.userAgent,
          d = new Array(
            'Android',
            'iPhone',
            'SymbianOS',
            'Windows Phone',
            'iPad',
            'iPod'
          ),
          l = !1,
          g = 0;
        g < d.length;
        g++
      )
        if (f.indexOf(d[g]) > -1) {
          l = !0;
          break;
        }
      var p,
        m,
        h = {
          mobile: l,
          ios: !!f.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
          android: f.indexOf('Android') > -1 || f.indexOf('Linux') > -1,
          iphone: f.indexOf('iPhone') > -1,
          ipad: f.indexOf('iPad') > -1,
          webapp: -1 === f.indexOf('Safari'),
          getOsType: function() {
            var e = navigator.userAgent.toLowerCase(),
              t = '',
              n = '';
            return (
              /android/i.test(navigator.userAgent) &&
                ((n = e.indexOf('android')),
                (t = 'Android ' + e.substr(n + 8, 3))),
              /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) &&
                ((n = e.indexOf('os')), (t = 'iOS ' + e.substr(n + 3, 4))),
              !/Linux/i.test(navigator.userAgent) ||
                /android/i.test(navigator.userAgent) ||
                /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ||
                (t = 'Linux'),
              /windows|win32/i.test(navigator.userAgent) && (t = 'windows32'),
              /windows|win64/i.test(navigator.userAgent) && (t = 'windows64'),
              t
            );
          }
        },
        b = function(e, t) {
          return '' !== e ? e + t.slice(0, 1).toUpperCase() + t.slice(1) : t;
        },
        w = ((m = !1),
        'number' == typeof window.screenX &&
          ['webkit', 'moz', 'ms', 'o', ''].forEach(function(e) {
            !1 === m &&
              void 0 !== document[b(e, 'hidden')] &&
              ((p = e), (m = !0));
          }),
        m),
        x = function() {
          if (w) return document[b(p, 'hidden')];
        },
        v = function() {
          if (w) return document[b(p, 'visibilityState')];
        },
        O = {
          hidden: x(),
          visibilityState: v(),
          visibilitychange: function(e, t) {
            if ((!1, w && 'function' == typeof e))
              return document.addEventListener(
                p + 'visibilitychange',
                function(t) {
                  (this.hidden = x()),
                    (this.visibilityState = v()),
                    e.call(this, t);
                }.bind(this),
                !1
              );
          }
        },
        y = {
          parse: function(e) {
            if (void 0 === e || '' === e) return {};
            var t = {};
            return (
              e.split('&').map(function(e) {
                t[e.split('=')[0]] = e.split('=')[1] || '';
              }),
              t
            );
          },
          parseQueryString: function() {
            var e = location.search.length ? location.search.slice(1) : '';
            return this.parse(e);
          },
          stringify: function(e) {
            return e
              ? Object.keys(e)
                  .map(function(t) {
                    var n = e[t];
                    return void 0 === n
                      ? ''
                      : encodeURI(t) + '=' + encodeURI(n);
                  })
                  .filter(function(e) {
                    return e.length > 0;
                  })
                  .join('&')
              : '';
          },
          getQueryString: function(e) {
            var t = new RegExp('(^|&)' + e + '=([^&]*)(&|$)', 'i'),
              n = window.location.search.substr(1).match(t);
            return null != n ? decodeURI(n[2]) : null;
          },
          getReferrer: function() {
            var e = '';
            try {
              e = window.top.document.referrer;
            } catch (t) {
              if (window.parent)
                try {
                  e = window.parent.document.referrer;
                } catch (t) {
                  e = '';
                }
            }
            return '' === e && (e = document.referrer), e;
          },
          getUrlNoParams: function() {
            var e = window.location.href,
              t = 0;
            return e.indexOf('?') >= 0
              ? ((t = e.indexOf('?')), e.substring(0, t))
              : e.indexOf('#') >= 0
                ? ((t = e.indexOf('#')), e.substring(0, t))
                : e;
          }
        },
        S = {
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
          },
          isNumber: function(e) {
            return !isNaN(e);
          },
          isString: function(e) {
            return 'string' == typeof e;
          },
          isBoolean: function(e) {
            return 'boolean' == typeof e;
          },
          isFunction: function(e) {
            return 'function' == typeof e;
          },
          isNull: function(e) {
            return null === e;
          },
          isUndefined: function(e) {
            return void 0 === e;
          },
          isEmpty: function(e) {
            return /^\s*$/.test(e);
          },
          isArray: function(e) {
            return e instanceof Array;
          }
        };
      t.default = {
        Array: r,
        Browser: o,
        Cookie: a,
        DateTime: u,
        Html: s,
        Number: c,
        Os: h,
        PageVisibility: O,
        String: {
          trim: function(e, t) {
            switch (t) {
              case 0:
                return e.replace(/\s+/g, '');
              case 1:
                return e.replace(/(^\s*)/g, '');
              case 2:
                return e.replace(/(\s*$)/g, '');
              default:
                return e.replace(/(^\s*)|(\s*$)/g, '');
            }
          },
          getBytes: function(e) {
            var t = 0,
              n = e.length;
            if (e) {
              for (var r = 0; r < n; r++)
                e.charCodeAt(r) > 255 ? (t += 2) : t++;
              return t;
            }
            return 0;
          }
        },
        Url: y,
        Util: S
      };
    }
  ]).default;
});
//# sourceMappingURL=ShfeLib.js.map
