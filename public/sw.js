/* eslint-disable */
function getScope() {
  return self.registration.scope;
}

self.addEventListener("message", function (event) {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", function (event) {
  try {
    const url = new URL(event.request.url);
    if (url.pathname.includes("redirect") && url.href.includes(getScope())) {
      event.respondWith(
        new Response(
          new Blob(
            [
              `
<html>

<head>
  <style>
    * {
      box-sizing: border-box;
    }

    html,
    body {
      background: #fcfcfc;
      height: 100%;
      padding: 0;
      margin: 0;
    }

    .container {
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    h1.title {
      font-size: 14px;
      color: #0f1222;
      font-family: 'Roboto', sans-serif !important;
      margin: 0;
      text-align: center;
    }

    .spinner .beat {
      background-color: #0364ff;
      height: 12px;
      width: 12px;
      margin: 24px 2px 10px;
      border-radius: 100%;
      -webkit-animation: beatStretchDelay 0.7s infinite linear;
      animation: beatStretchDelay 0.7s infinite linear;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      display: inline-block;
    }

    .spinner .beat-odd {
      animation-delay: 0s;
    }

    .spinner .beat-even {
      animation-delay: 0.35s;
    }

    @-webkit-keyframes beatStretchDelay {
      50% {
        -webkit-transform: scale(0.75);
        transform: scale(0.75);
        -webkit-opacity: 0.2;
        opacity: 0.2;
      }

      100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-opacity: 1;
        opacity: 1;
      }
    }

    @keyframes beatStretchDelay {
      50% {
        -webkit-transform: scale(0.75);
        transform: scale(0.75);
        -webkit-opacity: 0.2;
        opacity: 0.2;
      }

      100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-opacity: 1;
        opacity: 1;
      }
    }

    @media (min-width: 768px) {
      h1.title {
        font-size: 14px;
      }

      p.info {
        font-size: 28px;
      }

      .spinner .beat {
        height: 12px;
        width: 12px;
      }
    }
  </style>
</head>

<body>
  <div id="message" class="container">
    <div class="spinner content">
      <div class="beat beat-odd"></div>
      <div class="beat beat-even"></div>
      <div class="beat beat-odd"></div>
    </div>
    <h1 class="title content">Loading</h1>
  </div>
  <script>
    // auth0 spa js production
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    ! function (e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define &&
        define.amd ? define(t) : (e = e || self).createAuth0Client = t()
    }(this, (function () {
      "use strict";
      var e = function (t, n) {
        return (e = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function (e, t) {
            e.__proto__ = t
          } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
          })(t, n)
      };

      function t(t, n) {
        function r() {
          this.constructor = t
        }
        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
      }
      var n = function () {
        return (n = Object.assign || function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }).apply(this, arguments)
      };

      function r(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype
            .propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
      }

      function o(e, t, n, r) {
        return new(n || (n = Promise))((function (o, i) {
          function c(e) {
            try {
              s(r.next(e))
            } catch (e) {
              i(e)
            }
          }

          function a(e) {
            try {
              s(r.throw(e))
            } catch (e) {
              i(e)
            }
          }

          function s(e) {
            e.done ? o(e.value) : new n((function (t) {
              t(e.value)
            })).then(c, a)
          }
          s((r = r.apply(e, t || [])).next())
        }))
      }

      function i(e, t) {
        var n, r, o, i, c = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1]
          },
          trys: [],
          ops: []
        };
        return i = {
          next: a(0),
          throw: a(1),
          return: a(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
          return this
        }), i;

        function a(i) {
          return function (a) {
            return function (i) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; c;) try {
                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                    0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                  case 0:
                  case 1:
                    o = i;
                    break;
                  case 4:
                    return c.label++, {
                      value: i[1],
                      done: !1
                    };
                  case 5:
                    c.label++, r = i[1], i = [0];
                    continue;
                  case 7:
                    i = c.ops.pop(), c.trys.pop();
                    continue;
                  default:
                    if (!(o = c.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                      c = 0;
                      continue
                    }
                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                      c.label = i[1];
                      break
                    }
                    if (6 === i[0] && c.label < o[1]) {
                      c.label = o[1], o = i;
                      break
                    }
                    if (o && c.label < o[2]) {
                      c.label = o[2], c.ops.push(i);
                      break
                    }
                    o[2] && c.ops.pop(), c.trys.pop();
                    continue
                }
                i = t.call(e, c)
              } catch (e) {
                i = [6, e], r = 0
              } finally {
                n = o = 0
              }
              if (5 & i[0]) throw i[1];
              return {
                value: i[0] ? i[1] : void 0,
                done: !0
              }
            }([i, a])
          }
        }
      }
      var c = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" !=
        typeof global ? global : "undefined" != typeof self ? self : {};

      function a(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
      }

      function s(e, t) {
        return e(t = {
          exports: {}
        }, t.exports), t.exports
      }
      var u = function (e) {
          return e && e.Math == Math && e
        },
        l = u("object" == typeof globalThis && globalThis) || u("object" == typeof window && window) || u(
          "object" == typeof self && self) || u("object" == typeof c && c) || Function("return this")(),
        f = function (e) {
          try {
            return !!e()
          } catch (e) {
            return !0
          }
        },
        d = !f((function () {
          return 7 != Object.defineProperty({}, 1, {
            get: function () {
              return 7
            }
          })[1]
        })),
        p = {}.propertyIsEnumerable,
        h = Object.getOwnPropertyDescriptor,
        y = {
          f: h && !p.call({
            1: 2
          }, 1) ? function (e) {
            var t = h(this, e);
            return !!t && t.enumerable
          } : p
        },
        m = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
          }
        },
        v = {}.toString,
        b = function (e) {
          return v.call(e).slice(8, -1)
        },
        g = "".split,
        w = f((function () {
          return !Object("z").propertyIsEnumerable(0)
        })) ? function (e) {
          return "String" == b(e) ? g.call(e, "") : Object(e)
        } : Object,
        S = function (e) {
          if (null == e) throw TypeError("Can't call method on " + e);
          return e
        },
        _ = function (e) {
          return w(S(e))
        },
        k = function (e) {
          return "object" == typeof e ? null !== e : "function" == typeof e
        },
        T = function (e, t) {
          if (!k(e)) return e;
          var n, r;
          if (t && "function" == typeof (n = e.toString) && !k(r = n.call(e))) return r;
          if ("function" == typeof (n = e.valueOf) && !k(r = n.call(e))) return r;
          if (!t && "function" == typeof (n = e.toString) && !k(r = n.call(e))) return r;
          throw TypeError("Can't convert object to primitive value")
        },
        I = {}.hasOwnProperty,
        O = function (e, t) {
          return I.call(e, t)
        },
        E = l.document,
        j = k(E) && k(E.createElement),
        A = function (e) {
          return j ? E.createElement(e) : {}
        },
        x = !d && !f((function () {
          return 7 != Object.defineProperty(A("div"), "a", {
            get: function () {
              return 7
            }
          }).a
        })),
        W = Object.getOwnPropertyDescriptor,
        Z = {
          f: d ? W : function (e, t) {
            if (e = _(e), t = T(t, !0), x) try {
              return W(e, t)
            } catch (e) {}
            if (O(e, t)) return m(!y.f.call(e, t), e[t])
          }
        },
        C = function (e) {
          if (!k(e)) throw TypeError(String(e) + " is not an object");
          return e
        },
        U = Object.defineProperty,
        L = {
          f: d ? U : function (e, t, n) {
            if (C(e), t = T(t, !0), C(n), x) try {
              return U(e, t, n)
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
            return "value" in n && (e[t] = n.value), e
          }
        },
        K = d ? function (e, t, n) {
          return L.f(e, t, m(1, n))
        } : function (e, t, n) {
          return e[t] = n, e
        },
        P = function (e, t) {
          try {
            K(l, e, t)
          } catch (n) {
            l[e] = t
          }
          return t
        },
        R = l["__core-js_shared__"] || P("__core-js_shared__", {}),
        G = Function.toString;
      "function" != typeof R.inspectSource && (R.inspectSource = function (e) {
        return G.call(e)
      });
      var X, F, V, Y = R.inspectSource,
        J = l.WeakMap,
        N = "function" == typeof J && /native code/.test(Y(J)),
        z = s((function (e) {
          (e.exports = function (e, t) {
            return R[e] || (R[e] = void 0 !== t ? t : {})
          })("versions", []).push({
            version: "3.6.4",
            mode: "global",
            copyright: "Â© 2020 Denis Pushkarev (zloirock.ru)"
          })
        })),
        B = 0,
        D = Math.random(),
        M = function (e) {
          return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++B + D).toString(36)
        },
        q = z("keys"),
        H = function (e) {
          return q[e] || (q[e] = M(e))
        },
        Q = {},
        $ = l.WeakMap;
      if (N) {
        var ee = new $,
          te = ee.get,
          ne = ee.has,
          re = ee.set;
        X = function (e, t) {
          return re.call(ee, e, t), t
        }, F = function (e) {
          return te.call(ee, e) || {}
        }, V = function (e) {
          return ne.call(ee, e)
        }
      } else {
        var oe = H("state");
        Q[oe] = !0, X = function (e, t) {
          return K(e, oe, t), t
        }, F = function (e) {
          return O(e, oe) ? e[oe] : {}
        }, V = function (e) {
          return O(e, oe)
        }
      }
      var ie, ce = {
          set: X,
          get: F,
          has: V,
          enforce: function (e) {
            return V(e) ? F(e) : X(e, {})
          },
          getterFor: function (e) {
            return function (t) {
              var n;
              if (!k(t) || (n = F(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
              return n
            }
          }
        },
        ae = s((function (e) {
          var t = ce.get,
            n = ce.enforce,
            r = String(String).split("String");
          (e.exports = function (e, t, o, i) {
            var c = !!i && !!i.unsafe,
              a = !!i && !!i.enumerable,
              s = !!i && !!i.noTargetGet;
            "function" == typeof o && ("string" != typeof t || O(o, "name") || K(o, "name", t), n(o).source =
              r.join("string" == typeof t ? t : "")), e !== l ? (c ? !s && e[t] && (a = !0) : delete e[t],
              a ? e[t] = o : K(e, t, o)) : a ? e[t] = o : P(t, o)
          })(Function.prototype, "toString", (function () {
            return "function" == typeof this && t(this).source || Y(this)
          }))
        })),
        se = l,
        ue = function (e) {
          return "function" == typeof e ? e : void 0
        },
        le = function (e, t) {
          return arguments.length < 2 ? ue(se[e]) || ue(l[e]) : se[e] && se[e][t] || l[e] && l[e][t]
        },
        fe = Math.ceil,
        de = Math.floor,
        pe = function (e) {
          return isNaN(e = +e) ? 0 : (e > 0 ? de : fe)(e)
        },
        he = Math.min,
        ye = function (e) {
          return e > 0 ? he(pe(e), 9007199254740991) : 0
        },
        me = Math.max,
        ve = Math.min,
        be = function (e) {
          return function (t, n, r) {
            var o, i = _(t),
              c = ye(i.length),
              a = function (e, t) {
                var n = pe(e);
                return n < 0 ? me(n + t, 0) : ve(n, t)
              }(r, c);
            if (e && n != n) {
              for (; c > a;)
                if ((o = i[a++]) != o) return !0
            } else
              for (; c > a; a++)
                if ((e || a in i) && i[a] === n) return e || a || 0;
            return !e && -1
          }
        },
        ge = {
          includes: be(!0),
          indexOf: be(!1)
        },
        we = ge.indexOf,
        Se = function (e, t) {
          var n, r = _(e),
            o = 0,
            i = [];
          for (n in r) !O(Q, n) && O(r, n) && i.push(n);
          for (; t.length > o;) O(r, n = t[o++]) && (~we(i, n) || i.push(n));
          return i
        },
        _e = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString",
          "toString", "valueOf"
        ],
        ke = _e.concat("length", "prototype"),
        Te = {
          f: Object.getOwnPropertyNames || function (e) {
            return Se(e, ke)
          }
        },
        Ie = {
          f: Object.getOwnPropertySymbols
        },
        Oe = le("Reflect", "ownKeys") || function (e) {
          var t = Te.f(C(e)),
            n = Ie.f;
          return n ? t.concat(n(e)) : t
        },
        Ee = function (e, t) {
          for (var n = Oe(t), r = L.f, o = Z.f, i = 0; i < n.length; i++) {
            var c = n[i];
            O(e, c) || r(e, c, o(t, c))
          }
        },
        je = /#|\\.prototype\\./,
        Ae = function (e, t) {
          var n = We[xe(e)];
          return n == Ce || n != Ze && ("function" == typeof t ? f(t) : !!t)
        },
        xe = Ae.normalize = function (e) {
          return String(e).replace(je, ".").toLowerCase()
        },
        We = Ae.data = {},
        Ze = Ae.NATIVE = "N",
        Ce = Ae.POLYFILL = "P",
        Ue = Ae,
        Le = Z.f,
        Ke = function (e, t) {
          var n, r, o, i, c, a = e.target,
            s = e.global,
            u = e.stat;
          if (n = s ? l : u ? l[a] || P(a, {}) : (l[a] || {}).prototype)
            for (r in t) {
              if (i = t[r], o = e.noTargetGet ? (c = Le(n, r)) && c.value : n[r], !Ue(s ? r : a + (u ? "." : "#") +
                  r, e.forced) && void 0 !== o) {
                if (typeof i == typeof o) continue;
                Ee(i, o)
              }(e.sham || o && o.sham) && K(i, "sham", !0), ae(n, r, i, e)
            }
        },
        Pe = !!Object.getOwnPropertySymbols && !f((function () {
          return !String(Symbol())
        })),
        Re = Pe && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        Ge = z("wks"),
        Xe = l.Symbol,
        Fe = Re ? Xe : Xe && Xe.withoutSetter || M,
        Ve = function (e) {
          return O(Ge, e) || (Pe && O(Xe, e) ? Ge[e] = Xe[e] : Ge[e] = Fe("Symbol." + e)), Ge[e]
        },
        Ye = Ve("match"),
        Je = function (e) {
          if (function (e) {
              var t;
              return k(e) && (void 0 !== (t = e[Ye]) ? !!t : "RegExp" == b(e))
            }(e)) throw TypeError("The method doesn't accept regular expressions");
          return e
        },
        Ne = Ve("match"),
        ze = function (e) {
          var t = /./;
          try {
            "/./" [e](t)
          } catch (n) {
            try {
              return t[Ne] = !1, "/./" [e](t)
            } catch (e) {}
          }
          return !1
        },
        Be = Z.f,
        De = "".startsWith,
        Me = Math.min,
        qe = ze("startsWith"),
        He = !(qe || (ie = Be(String.prototype, "startsWith"), !ie || ie.writable));
      Ke({
        target: "String",
        proto: !0,
        forced: !He && !qe
      }, {
        startsWith: function (e) {
          var t = String(S(this));
          Je(e);
          var n = ye(Me(arguments.length > 1 ? arguments[1] : void 0, t.length)),
            r = String(e);
          return De ? De.call(t, r, n) : t.slice(n, n + r.length) === r
        }
      });
      var Qe, $e, et, tt = function (e) {
          if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
          return e
        },
        nt = function (e, t, n) {
          if (tt(e), void 0 === t) return e;
          switch (n) {
            case 0:
              return function () {
                return e.call(t)
              };
            case 1:
              return function (n) {
                return e.call(t, n)
              };
            case 2:
              return function (n, r) {
                return e.call(t, n, r)
              };
            case 3:
              return function (n, r, o) {
                return e.call(t, n, r, o)
              }
          }
          return function () {
            return e.apply(t, arguments)
          }
        },
        rt = Function.call,
        ot = function (e, t, n) {
          return nt(rt, l[e].prototype[t], n)
        },
        it = (ot("String", "startsWith"), function (e) {
          return function (t, n) {
            var r, o, i = String(S(t)),
              c = pe(n),
              a = i.length;
            return c < 0 || c >= a ? e ? "" : void 0 : (r = i.charCodeAt(c)) < 55296 || r > 56319 || c + 1 ===
              a || (o = i.charCodeAt(c + 1)) < 56320 || o > 57343 ? e ? i.charAt(c) : r : e ? i.slice(c, c +
              2) : o - 56320 + (r - 55296 << 10) + 65536
          }
        }),
        ct = {
          codeAt: it(!1),
          charAt: it(!0)
        },
        at = function (e) {
          return Object(S(e))
        },
        st = !f((function () {
          function e() {}
          return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
        })),
        ut = H("IE_PROTO"),
        lt = Object.prototype,
        ft = st ? Object.getPrototypeOf : function (e) {
          return e = at(e), O(e, ut) ? e[ut] : "function" == typeof e.constructor && e instanceof e.constructor ? e
            .constructor.prototype : e instanceof Object ? lt : null
        },
        dt = Ve("iterator"),
        pt = !1;
      [].keys && ("next" in (et = [].keys()) ? ($e = ft(ft(et))) !== Object.prototype && (Qe = $e) : pt = !0),
        null == Qe && (Qe = {}), O(Qe, dt) || K(Qe, dt, (function () {
          return this
        }));
      var ht, yt = {
          IteratorPrototype: Qe,
          BUGGY_SAFARI_ITERATORS: pt
        },
        mt = Object.keys || function (e) {
          return Se(e, _e)
        },
        vt = d ? Object.defineProperties : function (e, t) {
          C(e);
          for (var n, r = mt(t), o = r.length, i = 0; o > i;) L.f(e, n = r[i++], t[n]);
          return e
        },
        bt = le("document", "documentElement"),
        gt = H("IE_PROTO"),
        wt = function () {},
        St = function (e) {
          return "<scr" + "ipt>" + e + "<\\/scr" + "ipt>"
        },
        _t = function () {
          try {
            ht = document.domain && new ActiveXObject("htmlfile")
          } catch (e) {}
          var e, t;
          _t = ht ? function (e) {
            e.write(St("")), e.close();
            var t = e.parentWindow.Object;
            return e = null, t
          }(ht) : ((t = A("iframe")).style.display = "none", bt.appendChild(t), t.src = String("javascript:"), (
            e = t.contentWindow.document).open(), e.write(St("document.F=Object")), e.close(), e.F);
          for (var n = _e.length; n--;) delete _t.prototype[_e[n]];
          return _t()
        };
      Q[gt] = !0;
      var kt = Object.create || function (e, t) {
          var n;
          return null !== e ? (wt.prototype = C(e), n = new wt, wt.prototype = null, n[gt] = e) : n = _t(),
            void 0 === t ? n : vt(n, t)
        },
        Tt = L.f,
        It = Ve("toStringTag"),
        Ot = function (e, t, n) {
          e && !O(e = n ? e : e.prototype, It) && Tt(e, It, {
            configurable: !0,
            value: t
          })
        },
        Et = {},
        jt = yt.IteratorPrototype,
        At = function () {
          return this
        },
        xt = Object.setPrototypeOf || ("__proto__" in {} ? function () {
          var e, t = !1,
            n = {};
          try {
            (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t =
              n instanceof Array
          } catch (e) {}
          return function (n, r) {
            return C(n),
              function (e) {
                if (!k(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype")
              }(r), t ? e.call(n, r) : n.__proto__ = r, n
          }
        }() : void 0),
        Wt = yt.IteratorPrototype,
        Zt = yt.BUGGY_SAFARI_ITERATORS,
        Ct = Ve("iterator"),
        Ut = function () {
          return this
        },
        Lt = ct.charAt,
        Kt = ce.set,
        Pt = ce.getterFor("String Iterator");
      ! function (e, t, n, r, o, i, c) {
        ! function (e, t, n) {
          var r = t + " Iterator";
          e.prototype = kt(jt, {
            next: m(1, n)
          }), Ot(e, r, !1), Et[r] = At
        }(n, t, r);
        var a, s, u, l = function (e) {
            if (e === o && y) return y;
            if (!Zt && e in p) return p[e];
            switch (e) {
              case "keys":
              case "values":
              case "entries":
                return function () {
                  return new n(this, e)
                }
            }
            return function () {
              return new n(this)
            }
          },
          f = t + " Iterator",
          d = !1,
          p = e.prototype,
          h = p[Ct] || p["@@iterator"] || o && p[o],
          y = !Zt && h || l(o),
          v = "Array" == t && p.entries || h;
        if (v && (a = ft(v.call(new e)), Wt !== Object.prototype && a.next && (ft(a) !== Wt && (xt ? xt(a, Wt) :
            "function" != typeof a[Ct] && K(a, Ct, Ut)), Ot(a, f, !0))), "values" == o && h && "values" !== h
          .name && (d = !0, y = function () {
            return h.call(this)
          }), p[Ct] !== y && K(p, Ct, y), Et[t] = y, o)
          if (s = {
              values: l("values"),
              keys: i ? y : l("keys"),
              entries: l("entries")
            }, c)
            for (u in s)(Zt || d || !(u in p)) && ae(p, u, s[u]);
          else Ke({
            target: t,
            proto: !0,
            forced: Zt || d
          }, s)
      }(String, "String", (function (e) {
        Kt(this, {
          type: "String Iterator",
          string: String(e),
          index: 0
        })
      }), (function () {
        var e, t = Pt(this),
          n = t.string,
          r = t.index;
        return r >= n.length ? {
          value: void 0,
          done: !0
        } : (e = Lt(n, r), t.index += e.length, {
          value: e,
          done: !1
        })
      }));
      var Rt = function (e, t, n, r) {
          try {
            return r ? t(C(n)[0], n[1]) : t(n)
          } catch (t) {
            var o = e.return;
            throw void 0 !== o && C(o.call(e)), t
          }
        },
        Gt = Ve("iterator"),
        Xt = Array.prototype,
        Ft = function (e) {
          return void 0 !== e && (Et.Array === e || Xt[Gt] === e)
        },
        Vt = function (e, t, n) {
          var r = T(t);
          r in e ? L.f(e, r, m(0, n)) : e[r] = n
        },
        Yt = {};
      Yt[Ve("toStringTag")] = "z";
      var Jt = "[object z]" === String(Yt),
        Nt = Ve("toStringTag"),
        zt = "Arguments" == b(function () {
          return arguments
        }()),
        Bt = Jt ? b : function (e) {
          var t, n, r;
          return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
              try {
                return e[t]
              } catch (e) {}
            }(t = Object(e), Nt)) ? n : zt ? b(t) : "Object" == (r = b(t)) && "function" == typeof t.callee ?
            "Arguments" : r
        },
        Dt = Ve("iterator"),
        Mt = function (e) {
          if (null != e) return e[Dt] || e["@@iterator"] || Et[Bt(e)]
        },
        qt = Ve("iterator"),
        Ht = !1;
      try {
        var Qt = 0,
          $t = {
            next: function () {
              return {
                done: !!Qt++
              }
            },
            return: function () {
              Ht = !0
            }
          };
        $t[qt] = function () {
          return this
        }, Array.from($t, (function () {
          throw 2
        }))
      } catch (e) {}
      var en = ! function (e, t) {
        if (!t && !Ht) return !1;
        var n = !1;
        try {
          var r = {};
          r[qt] = function () {
            return {
              next: function () {
                return {
                  done: n = !0
                }
              }
            }
          }, e(r)
        } catch (e) {}
        return n
      }((function (e) {
        Array.from(e)
      }));
      Ke({
        target: "Array",
        stat: !0,
        forced: en
      }, {
        from: function (e) {
          var t, n, r, o, i, c, a = at(e),
            s = "function" == typeof this ? this : Array,
            u = arguments.length,
            l = u > 1 ? arguments[1] : void 0,
            f = void 0 !== l,
            d = Mt(a),
            p = 0;
          if (f && (l = nt(l, u > 2 ? arguments[2] : void 0, 2)), null == d || s == Array && Ft(d))
            for (n = new s(t = ye(a.length)); t > p; p++) c = f ? l(a[p], p) : a[p], Vt(n, p, c);
          else
            for (i = (o = d.call(a)).next, n = new s; !(r = i.call(o)).done; p++) c = f ? Rt(o, l, [r.value,
              p], !0) : r.value, Vt(n, p, c);
          return n.length = p, n
        }
      });
      se.Array.from;
      var tn, nn = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView,
        rn = L.f,
        on = l.Int8Array,
        cn = on && on.prototype,
        an = l.Uint8ClampedArray,
        sn = an && an.prototype,
        un = on && ft(on),
        ln = cn && ft(cn),
        fn = Object.prototype,
        dn = fn.isPrototypeOf,
        pn = Ve("toStringTag"),
        hn = M("TYPED_ARRAY_TAG"),
        yn = nn && !!xt && "Opera" !== Bt(l.opera),
        mn = {
          Int8Array: 1,
          Uint8Array: 1,
          Uint8ClampedArray: 1,
          Int16Array: 2,
          Uint16Array: 2,
          Int32Array: 4,
          Uint32Array: 4,
          Float32Array: 4,
          Float64Array: 8
        },
        vn = function (e) {
          return k(e) && O(mn, Bt(e))
        };
      for (tn in mn) l[tn] || (yn = !1);
      if ((!yn || "function" != typeof un || un === Function.prototype) && (un = function () {
          throw TypeError("Incorrect invocation")
        }, yn))
        for (tn in mn) l[tn] && xt(l[tn], un);
      if ((!yn || !ln || ln === fn) && (ln = un.prototype, yn))
        for (tn in mn) l[tn] && xt(l[tn].prototype, ln);
      if (yn && ft(sn) !== ln && xt(sn, ln), d && !O(ln, pn))
        for (tn in !0, rn(ln, pn, {
            get: function () {
              return k(this) ? this[hn] : void 0
            }
          }), mn) l[tn] && K(l[tn], hn, tn);
      var bn = function (e) {
          if (vn(e)) return e;
          throw TypeError("Target is not a typed array")
        },
        gn = function (e) {
          if (xt) {
            if (dn.call(un, e)) return e
          } else
            for (var t in mn)
              if (O(mn, tn)) {
                var n = l[t];
                if (n && (e === n || dn.call(n, e))) return e
              } throw TypeError("Target is not a typed array constructor")
        },
        wn = function (e, t, n) {
          if (d) {
            if (n)
              for (var r in mn) {
                var o = l[r];
                o && O(o.prototype, e) && delete o.prototype[e]
              }
            ln[e] && !n || ae(ln, e, n ? t : yn && cn[e] || t)
          }
        },
        Sn = Ve("species"),
        _n = bn,
        kn = gn,
        Tn = [].slice;
      wn("slice", (function (e, t) {
        for (var n = Tn.call(_n(this), e, t), r = function (e, t) {
            var n, r = C(e).constructor;
            return void 0 === r || null == (n = C(r)[Sn]) ? t : tt(n)
          }(this, this.constructor), o = 0, i = n.length, c = new(kn(r))(i); i > o;) c[o] = n[o++];
        return c
      }), f((function () {
        new Int8Array(1).slice()
      })));
      var In = Ve("unscopables"),
        On = Array.prototype;
      null == On[In] && L.f(On, In, {
        configurable: !0,
        value: kt(null)
      });
      var En, jn = Object.defineProperty,
        An = {},
        xn = function (e) {
          throw e
        },
        Wn = ge.includes,
        Zn = function (e, t) {
          if (O(An, e)) return An[e];
          t || (t = {});
          var n = [][e],
            r = !!O(t, "ACCESSORS") && t.ACCESSORS,
            o = O(t, 0) ? t[0] : xn,
            i = O(t, 1) ? t[1] : void 0;
          return An[e] = !!n && !f((function () {
            if (r && !d) return !0;
            var e = {
              length: -1
            };
            r ? jn(e, 1, {
              enumerable: !0,
              get: xn
            }) : e[1] = 1, n.call(e, o, i)
          }))
        }("indexOf", {
          ACCESSORS: !0,
          1: 0
        });
      Ke({
        target: "Array",
        proto: !0,
        forced: !Zn
      }, {
        includes: function (e) {
          return Wn(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
      }), En = "includes", On[In][En] = !0;
      ot("Array", "includes");
      Ke({
        target: "String",
        proto: !0,
        forced: !ze("includes")
      }, {
        includes: function (e) {
          return !!~String(S(this)).indexOf(Je(e), arguments.length > 1 ? arguments[1] : void 0)
        }
      });
      ot("String", "includes");

      function Cn(e) {
        var t = this.constructor;
        return this.then((function (n) {
          return t.resolve(e()).then((function () {
            return n
          }))
        }), (function (n) {
          return t.resolve(e()).then((function () {
            return t.reject(n)
          }))
        }))
      }
      var Un = setTimeout;

      function Ln(e) {
        return Boolean(e && void 0 !== e.length)
      }

      function Kn() {}

      function Pn(e) {
        if (!(this instanceof Pn)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], Yn(e, this)
      }

      function Rn(e, t) {
        for (; 3 === e._state;) e = e._value;
        0 !== e._state ? (e._handled = !0, Pn._immediateFn((function () {
          var n = 1 === e._state ? t.onFulfilled : t.onRejected;
          if (null !== n) {
            var r;
            try {
              r = n(e._value)
            } catch (e) {
              return void Xn(t.promise, e)
            }
            Gn(t.promise, r)
          } else(1 === e._state ? Gn : Xn)(t.promise, e._value)
        }))) : e._deferreds.push(t)
      }

      function Gn(e, t) {
        try {
          if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
          if (t && ("object" == typeof t || "function" == typeof t)) {
            var n = t.then;
            if (t instanceof Pn) return e._state = 3, e._value = t, void Fn(e);
            if ("function" == typeof n) return void Yn((r = n, o = t, function () {
              r.apply(o, arguments)
            }), e)
          }
          e._state = 1, e._value = t, Fn(e)
        } catch (t) {
          Xn(e, t)
        }
        var r, o
      }

      function Xn(e, t) {
        e._state = 2, e._value = t, Fn(e)
      }

      function Fn(e) {
        2 === e._state && 0 === e._deferreds.length && Pn._immediateFn((function () {
          e._handled || Pn._unhandledRejectionFn(e._value)
        }));
        for (var t = 0, n = e._deferreds.length; t < n; t++) Rn(e, e._deferreds[t]);
        e._deferreds = null
      }

      function Vn(e, t, n) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null,
          this.promise = n
      }

      function Yn(e, t) {
        var n = !1;
        try {
          e((function (e) {
            n || (n = !0, Gn(t, e))
          }), (function (e) {
            n || (n = !0, Xn(t, e))
          }))
        } catch (e) {
          if (n) return;
          n = !0, Xn(t, e)
        }
      }
      Pn.prototype.catch = function (e) {
        return this.then(null, e)
      }, Pn.prototype.then = function (e, t) {
        var n = new this.constructor(Kn);
        return Rn(this, new Vn(e, t, n)), n
      }, Pn.prototype.finally = Cn, Pn.all = function (e) {
        return new Pn((function (t, n) {
          if (!Ln(e)) return n(new TypeError("Promise.all accepts an array"));
          var r = Array.prototype.slice.call(e);
          if (0 === r.length) return t([]);
          var o = r.length;

          function i(e, c) {
            try {
              if (c && ("object" == typeof c || "function" == typeof c)) {
                var a = c.then;
                if ("function" == typeof a) return void a.call(c, (function (t) {
                  i(e, t)
                }), n)
              }
              r[e] = c, 0 == --o && t(r)
            } catch (e) {
              n(e)
            }
          }
          for (var c = 0; c < r.length; c++) i(c, r[c])
        }))
      }, Pn.resolve = function (e) {
        return e && "object" == typeof e && e.constructor === Pn ? e : new Pn((function (t) {
          t(e)
        }))
      }, Pn.reject = function (e) {
        return new Pn((function (t, n) {
          n(e)
        }))
      }, Pn.race = function (e) {
        return new Pn((function (t, n) {
          if (!Ln(e)) return n(new TypeError("Promise.race accepts an array"));
          for (var r = 0, o = e.length; r < o; r++) Pn.resolve(e[r]).then(t, n)
        }))
      }, Pn._immediateFn = "function" == typeof setImmediate && function (e) {
        setImmediate(e)
      } || function (e) {
        Un(e, 0)
      }, Pn._unhandledRejectionFn = function (e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
      };
      var Jn = function () {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if ("undefined" != typeof global) return global;
        throw new Error("unable to locate global object")
      }();
      "Promise" in Jn ? Jn.Promise.prototype.finally || (Jn.Promise.prototype.finally = Cn) : Jn.Promise = Pn,
        function (e) {
          function t() {}

          function n(e, t) {
            if (e = void 0 === e ? "utf-8" : e, t = void 0 === t ? {
                fatal: !1
              } : t, -1 == r.indexOf(e.toLowerCase())) throw new RangeError(
              "Failed to construct 'TextDecoder': The encoding label provided ('" + e + "') is invalid.");
            if (t.fatal) throw Error("Failed to construct 'TextDecoder': the 'fatal' option is unsupported.")
          }
          if (e.TextEncoder && e.TextDecoder) return !1;
          var r = ["utf-8", "utf8", "unicode-1-1-utf-8"];
          Object.defineProperty(t.prototype, "encoding", {
            value: "utf-8"
          }), t.prototype.encode = function (e, t) {
            if ((t = void 0 === t ? {
                stream: !1
              } : t).stream) throw Error("Failed to encode: the 'stream' option is unsupported.");
            t = 0;
            for (var n = e.length, r = 0, o = Math.max(32, n + (n >> 1) + 7), i = new Uint8Array(o >> 3 << 3); t <
              n;) {
              var c = e.charCodeAt(t++);
              if (55296 <= c && 56319 >= c) {
                if (t < n) {
                  var a = e.charCodeAt(t);
                  56320 == (64512 & a) && (++t, c = ((1023 & c) << 10) + (1023 & a) + 65536)
                }
                if (55296 <= c && 56319 >= c) continue
              }
              if (r + 4 > i.length && (o += 8, o = (o *= 1 + t / e.length * 2) >> 3 << 3, (a = new Uint8Array(o))
                  .set(i), i = a), 0 == (4294967168 & c)) i[r++] = c;
              else {
                if (0 == (4294965248 & c)) i[r++] = c >> 6 & 31 | 192;
                else if (0 == (4294901760 & c)) i[r++] = c >> 12 & 15 | 224, i[r++] = c >> 6 & 63 | 128;
                else {
                  if (0 != (4292870144 & c)) continue;
                  i[r++] = c >> 18 & 7 | 240, i[r++] = c >> 12 & 63 | 128, i[r++] = c >> 6 & 63 | 128
                }
                i[r++] = 63 & c | 128
              }
            }
            return i.slice ? i.slice(0, r) : i.subarray(0, r)
          }, Object.defineProperty(n.prototype, "encoding", {
            value: "utf-8"
          }), Object.defineProperty(n.prototype, "fatal", {
            value: !1
          }), Object.defineProperty(n.prototype, "ignoreBOM", {
            value: !1
          }), n.prototype.decode = function (e, t) {
            if ((t = void 0 === t ? {
                stream: !1
              } : t).stream) throw Error("Failed to decode: the 'stream' option is unsupported.");
            e.buffer instanceof ArrayBuffer && (e = e.buffer), e = new Uint8Array(e), t = 0;
            for (var n = [], r = [];;) {
              var o = t < e.length;
              if (!o || 65536 & t) {
                if (r.push(String.fromCharCode.apply(null, n)), !o) return r.join("");
                n = [], e = e.subarray(t), t = 0
              }
              if (0 === (o = e[t++])) n.push(0);
              else if (0 == (128 & o)) n.push(o);
              else if (192 == (224 & o)) {
                var i = 63 & e[t++];
                n.push((31 & o) << 6 | i)
              } else if (224 == (240 & o)) {
                i = 63 & e[t++];
                var c = 63 & e[t++];
                n.push((31 & o) << 12 | i << 6 | c)
              } else if (240 == (248 & o)) {
                65535 < (o = (7 & o) << 18 | (i = 63 & e[t++]) << 12 | (c = 63 & e[t++]) << 6 | 63 & e[t++]) && (
                  o -= 65536, n.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), n.push(o)
              }
            }
          }, e.TextEncoder = t, e.TextDecoder = n
        }("undefined" != typeof window ? window : c),
        function () {
          function e(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }

          function t(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object
                .defineProperty(e, r.key, r)
            }
          }

          function n(e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
          }

          function r(e) {
            return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
          }

          function o(e, t) {
            return (o = Object.setPrototypeOf || function (e, t) {
              return e.__proto__ = t, e
            })(e, t)
          }

          function i(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
          }

          function a(e, t, n) {
            return (a = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
              var o = function (e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = r(e)););
                return e
              }(e, t);
              if (o) {
                var i = Object.getOwnPropertyDescriptor(o, t);
                return i.get ? i.get.call(n) : i.value
              }
            })(e, t, n || e)
          }
          var s = function () {
              function t() {
                e(this, t), Object.defineProperty(this, "listeners", {
                  value: {},
                  writable: !0,
                  configurable: !0
                })
              }
              return n(t, [{
                key: "addEventListener",
                value: function (e, t) {
                  e in this.listeners || (this.listeners[e] = []), this.listeners[e].push(t)
                }
              }, {
                key: "removeEventListener",
                value: function (e, t) {
                  if (e in this.listeners)
                    for (var n = this.listeners[e], r = 0, o = n.length; r < o; r++)
                      if (n[r] === t) return void n.splice(r, 1)
                }
              }, {
                key: "dispatchEvent",
                value: function (e) {
                  var t = this;
                  if (e.type in this.listeners) {
                    for (var n = function (n) {
                        setTimeout((function () {
                          return n.call(t, e)
                        }))
                      }, r = this.listeners[e.type], o = 0, i = r.length; o < i; o++) n(r[o]);
                    return !e.defaultPrevented
                  }
                }
              }]), t
            }(),
            u = function (t) {
              function c() {
                var t;
                return e(this, c), (t = function (e, t) {
                  return !t || "object" != typeof t && "function" != typeof t ? i(e) : t
                }(this, r(c).call(this))).listeners || s.call(i(t)), Object.defineProperty(i(t), "aborted", {
                  value: !1,
                  writable: !0,
                  configurable: !0
                }), Object.defineProperty(i(t), "onabort", {
                  value: null,
                  writable: !0,
                  configurable: !0
                }), t
              }
              return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError(
                  "Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                  }
                }), t && o(e, t)
              }(c, t), n(c, [{
                key: "toString",
                value: function () {
                  return "[object AbortSignal]"
                }
              }, {
                key: "dispatchEvent",
                value: function (e) {
                  "abort" === e.type && (this.aborted = !0, "function" == typeof this.onabort && this
                    .onabort.call(this, e)), a(r(c.prototype), "dispatchEvent", this).call(this, e)
                }
              }]), c
            }(s),
            l = function () {
              function t() {
                e(this, t), Object.defineProperty(this, "signal", {
                  value: new u,
                  writable: !0,
                  configurable: !0
                })
              }
              return n(t, [{
                key: "abort",
                value: function () {
                  var e;
                  try {
                    e = new Event("abort")
                  } catch (t) {
                    "undefined" != typeof document ? document.createEvent ? (e = document.createEvent(
                        "Event")).initEvent("abort", !1, !1) : (e = document.createEventObject()).type =
                      "abort" : e = {
                        type: "abort",
                        bubbles: !1,
                        cancelable: !1
                      }
                  }
                  this.signal.dispatchEvent(e)
                }
              }, {
                key: "toString",
                value: function () {
                  return "[object AbortController]"
                }
              }]), t
            }();
          "undefined" != typeof Symbol && Symbol.toStringTag && (l.prototype[Symbol.toStringTag] =
              "AbortController", u.prototype[Symbol.toStringTag] = "AbortSignal"),
            function (e) {
              (function (e) {
                return e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL ? (console.log(
                    "__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"), !0) :
                  "function" == typeof e.Request && !e.Request.prototype.hasOwnProperty("signal") || !e
                  .AbortController
              })(e) && (e.AbortController = l, e.AbortSignal = u)
            }("undefined" != typeof self ? self : c)
        }();
      var Nn = s((function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var n = function () {
          function e() {
            var e = this;
            this.locked = new Map, this.addToLocked = function (t, n) {
              var r = e.locked.get(t);
              void 0 === r ? void 0 === n ? e.locked.set(t, []) : e.locked.set(t, [n]) : void 0 !== n && (
                r.unshift(n), e.locked.set(t, r))
            }, this.isLocked = function (t) {
              return e.locked.has(t)
            }, this.lock = function (t) {
              return new Promise((function (n, r) {
                e.isLocked(t) ? e.addToLocked(t, n) : (e.addToLocked(t), n())
              }))
            }, this.unlock = function (t) {
              var n = e.locked.get(t);
              if (void 0 !== n && 0 !== n.length) {
                var r = n.pop();
                e.locked.set(t, n), void 0 !== r && setTimeout(r, 0)
              } else e.locked.delete(t)
            }
          }
          return e.getInstance = function () {
            return void 0 === e.instance && (e.instance = new e), e.instance
          }, e
        }();
        t.default = function () {
          return n.getInstance()
        }
      }));
      a(Nn);
      var zn = a(s((function (e, t) {
        var n = c && c.__awaiter || function (e, t, n, r) {
            return new(n || (n = Promise))((function (o, i) {
              function c(e) {
                try {
                  s(r.next(e))
                } catch (e) {
                  i(e)
                }
              }

              function a(e) {
                try {
                  s(r.throw(e))
                } catch (e) {
                  i(e)
                }
              }

              function s(e) {
                e.done ? o(e.value) : new n((function (t) {
                  t(e.value)
                })).then(c, a)
              }
              s((r = r.apply(e, t || [])).next())
            }))
          },
          r = c && c.__generator || function (e, t) {
            var n, r, o, i, c = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1]
              },
              trys: [],
              ops: []
            };
            return i = {
              next: a(0),
              throw: a(1),
              return: a(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
              return this
            }), i;

            function a(i) {
              return function (a) {
                return function (i) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; c;) try {
                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o
                        .call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return c.label++, {
                          value: i[1],
                          done: !1
                        };
                      case 5:
                        c.label++, r = i[1], i = [0];
                        continue;
                      case 7:
                        i = c.ops.pop(), c.trys.pop();
                        continue;
                      default:
                        if (!(o = c.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !==
                            i[0])) {
                          c = 0;
                          continue
                        }
                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                          c.label = i[1];
                          break
                        }
                        if (6 === i[0] && c.label < o[1]) {
                          c.label = o[1], o = i;
                          break
                        }
                        if (o && c.label < o[2]) {
                          c.label = o[2], c.ops.push(i);
                          break
                        }
                        o[2] && c.ops.pop(), c.trys.pop();
                        continue
                    }
                    i = t.call(e, c)
                  } catch (e) {
                    i = [6, e], r = 0
                  } finally {
                    n = o = 0
                  }
                  if (5 & i[0]) throw i[1];
                  return {
                    value: i[0] ? i[1] : void 0,
                    done: !0
                  }
                }([i, a])
              }
            }
          };
        Object.defineProperty(t, "__esModule", {
          value: !0
        });

        function o(e) {
          return new Promise((function (t) {
            return setTimeout(t, e)
          }))
        }

        function i(e) {
          for (var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", n = "", r = 0; r <
            e; r++) {
            n += t[Math.floor(Math.random() * t.length)]
          }
          return n
        }
        var a = function () {
          function e() {
            this.acquiredIatSet = new Set, this.id = Date.now().toString() + i(15), this.acquireLock =
              this.acquireLock.bind(this), this.releaseLock = this.releaseLock.bind(this), this
              .releaseLock__private__ = this.releaseLock__private__.bind(this), this
              .waitForSomethingToChange = this.waitForSomethingToChange.bind(this), this
              .refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(this), void 0 === e
              .waiters && (e.waiters = [])
          }
          return e.prototype.acquireLock = function (t, c) {
            return void 0 === c && (c = 5e3), n(this, void 0, void 0, (function () {
              var n, a, s, u, l, f;
              return r(this, (function (r) {
                switch (r.label) {
                  case 0:
                    n = Date.now() + i(4), a = Date.now() + c, s =
                      "browser-tabs-lock-key-" + t, u = window.localStorage, r.label = 1;
                  case 1:
                    return Date.now() < a ? [4, o(30)] : [3, 8];
                  case 2:
                    return r.sent(), null !== u.getItem(s) ? [3, 5] : (l = this.id + "-" +
                      t + "-" + n, [4, o(Math.floor(25 * Math.random()))]);
                  case 3:
                    return r.sent(), u.setItem(s, JSON.stringify({
                      id: this.id,
                      iat: n,
                      timeoutKey: l,
                      timeAcquired: Date.now(),
                      timeRefreshed: Date.now()
                    })), [4, o(30)];
                  case 4:
                    return r.sent(), null !== (f = u.getItem(s)) && (f = JSON.parse(f))
                      .id === this.id && f.iat === n ? (this.acquiredIatSet.add(n), this
                        .refreshLockWhileAcquired(s, n), [2, !0]) : [3, 7];
                  case 5:
                    return e.lockCorrector(), [4, this.waitForSomethingToChange(a)];
                  case 6:
                    r.sent(), r.label = 7;
                  case 7:
                    return n = Date.now() + i(4), [3, 1];
                  case 8:
                    return [2, !1]
                }
              }))
            }))
          }, e.prototype.refreshLockWhileAcquired = function (e, t) {
            return n(this, void 0, void 0, (function () {
              var o = this;
              return r(this, (function (i) {
                return setTimeout((function () {
                  return n(o, void 0, void 0, (function () {
                    var n, o;
                    return r(this, (function (r) {
                      switch (r.label) {
                        case 0:
                          return [4, Nn.default().lock(t)];
                        case 1:
                          return r.sent(), this.acquiredIatSet.has(t) ? (
                            n = window.localStorage, null === (o = n
                              .getItem(e)) ? (Nn.default().unlock(t), [
                              2]) : ((o = JSON.parse(o)).timeRefreshed =
                              Date.now(), n.setItem(e, JSON.stringify(
                                o)), Nn.default().unlock(t), this
                              .refreshLockWhileAcquired(e, t), [2])) : (
                            Nn.default().unlock(t), [2])
                      }
                    }))
                  }))
                }), 1e3), [2]
              }))
            }))
          }, e.prototype.waitForSomethingToChange = function (t) {
            return n(this, void 0, void 0, (function () {
              return r(this, (function (n) {
                switch (n.label) {
                  case 0:
                    return [4, new Promise((function (n) {
                      var r = !1,
                        o = Date.now(),
                        i = !1;

                      function c() {
                        if (i || (window.removeEventListener("storage", c), e
                            .removeFromWaiting(c), clearTimeout(a), i = !0), !r) {
                          r = !0;
                          var t = 50 - (Date.now() - o);
                          t > 0 ? setTimeout(n, t) : n()
                        }
                      }
                      window.addEventListener("storage", c), e.addToWaiting(c);
                      var a = setTimeout(c, Math.max(0, t - Date.now()))
                    }))];
                  case 1:
                    return n.sent(), [2]
                }
              }))
            }))
          }, e.addToWaiting = function (t) {
            this.removeFromWaiting(t), void 0 !== e.waiters && e.waiters.push(t)
          }, e.removeFromWaiting = function (t) {
            void 0 !== e.waiters && (e.waiters = e.waiters.filter((function (e) {
              return e !== t
            })))
          }, e.notifyWaiters = function () {
            void 0 !== e.waiters && e.waiters.slice().forEach((function (e) {
              return e()
            }))
          }, e.prototype.releaseLock = function (e) {
            return n(this, void 0, void 0, (function () {
              return r(this, (function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.releaseLock__private__(e)];
                  case 1:
                    return [2, t.sent()]
                }
              }))
            }))
          }, e.prototype.releaseLock__private__ = function (t) {
            return n(this, void 0, void 0, (function () {
              var n, o, i;
              return r(this, (function (r) {
                switch (r.label) {
                  case 0:
                    return n = window.localStorage, o = "browser-tabs-lock-key-" + t,
                      null === (i = n.getItem(o)) ? [2] : (i = JSON.parse(i)).id !== this
                      .id ? [3, 2] : [4, Nn.default().lock(i.iat)];
                  case 1:
                    r.sent(), this.acquiredIatSet.delete(i.iat), n.removeItem(o), Nn
                      .default().unlock(i.iat), e.notifyWaiters(), r.label = 2;
                  case 2:
                    return [2]
                }
              }))
            }))
          }, e.lockCorrector = function () {
            for (var t = Date.now() - 5e3, n = window.localStorage, r = Object.keys(n), o = !1, i =
              0; i < r.length; i++) {
              var c = r[i];
              if (c.includes("browser-tabs-lock-key")) {
                var a = n.getItem(c);
                null !== a && (void 0 === (a = JSON.parse(a)).timeRefreshed && a.timeAcquired < t ||
                  void 0 !== a.timeRefreshed && a.timeRefreshed < t) && (n.removeItem(c), o = !0)
              }
            }
            o && e.notifyWaiters()
          }, e.waiters = void 0, e
        }();
        t.default = a
      })));
      var Bn = {
          timeoutInSeconds: 60
        },
        Dn = function (e) {
          return e.filter((function (t, n) {
            return e.indexOf(t) === n
          }))
        },
        Mn = {
          error: "timeout",
          error_description: "Timeout"
        },
        qn = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          var n = e.filter(Boolean).join();
          return Dn(n.replace(/\\s/g, ",").split(",")).join(" ").trim()
        },
        Hn = function (e, t) {
          var r, o, i, c = t.popup;
          if (c ? c.location.href = e : (r = e, o = window.screenX + (window.innerWidth - 400) / 2, i = window
              .screenY + (window.innerHeight - 600) / 2, c = window.open(r, "auth0:authorize:popup", "left=" + o +
                ",top=" + i + ",width=400,height=600,resizable,scrollbars=yes,status=1")), !c) throw new Error(
            "Could not open popup");
          return new Promise((function (e, r) {
            var o = setTimeout((function () {
              r(n(n({}, Mn), {
                popup: c
              }))
            }), 1e3 * (t.timeoutInSeconds || 60));
            window.addEventListener("message", (function (t) {
              if (t.data && "authorization_response" === t.data.type) {
                if (clearTimeout(o), c.close(), t.data.response.error) return r(t.data.response);
                e(t.data.response)
              }
            }))
          }))
        },
        Qn = function () {
          var e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.",
            t = "";
          return Array.from(sr().getRandomValues(new Uint8Array(43))).forEach((function (n) {
            return t += e[n % e.length]
          })), t
        },
        $n = function (e) {
          return btoa(e)
        },
        er = function (e) {
          return Object.keys(e).filter((function (t) {
            return void 0 !== e[t]
          })).map((function (t) {
            return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
          })).join("&")
        },
        tr = function (e) {
          return o(void 0, void 0, void 0, (function () {
            var t;
            return i(this, (function (n) {
              switch (n.label) {
                case 0:
                  return t = ur().digest({
                    name: "SHA-256"
                  }, (new TextEncoder).encode(e)), window.msCrypto ? [2, new Promise((function (e,
                  n) {
                    t.oncomplete = function (t) {
                      e(t.target.result)
                    }, t.onerror = function (e) {
                      n(e.error)
                    }, t.onabort = function () {
                      n("The digest operation was aborted")
                    }
                  }))] : [4, t];
                case 1:
                  return [2, n.sent()]
              }
            }))
          }))
        },
        nr = function (e) {
          return function (e) {
            return decodeURIComponent(atob(e).split("").map((function (e) {
              return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
            })).join(""))
          }(e.replace(/_/g, "/").replace(/-/g, "+"))
        },
        rr = function (e) {
          var t = new Uint8Array(e);
          return function (e) {
            var t = {
              "+": "-",
              "/": "_",
              "=": ""
            };
            return e.replace(/[\\+\\/=]/g, (function (e) {
              return t[e]
            }))
          }(window.btoa(String.fromCharCode.apply(String, Array.from(t))))
        },
        or = function (e, t, r, c) {
          return o(void 0, void 0, void 0, (function () {
            var o, a;
            return i(this, (function (i) {
              switch (i.label) {
                case 0:
                  return c ? (delete t.signal, [2, (l = n({
                    url: e,
                    timeout: r
                  }, t), f = c, new Promise((function (e, t) {
                    var n = new MessageChannel;
                    n.port1.onmessage = function (n) {
                      n.data.error ? t(new Error(n.data.error)) : e(n.data)
                    }, f.postMessage(l, [n.port2])
                  })))]) : [3, 1];
                case 1:
                  return [4, (s = e, u = t, u = u || {}, new Promise((function (e, t) {
                    var n = new XMLHttpRequest,
                      r = [],
                      o = [],
                      i = {},
                      c = function () {
                        return {
                          ok: 2 == (n.status / 100 | 0),
                          statusText: n.statusText,
                          status: n.status,
                          url: n.responseURL,
                          text: function () {
                            return Promise.resolve(n.responseText)
                          },
                          json: function () {
                            return Promise.resolve(JSON.parse(n.responseText))
                          },
                          blob: function () {
                            return Promise.resolve(new Blob([n.response]))
                          },
                          clone: c,
                          headers: {
                            keys: function () {
                              return r
                            },
                            entries: function () {
                              return o
                            },
                            get: function (e) {
                              return i[e.toLowerCase()]
                            },
                            has: function (e) {
                              return e.toLowerCase() in i
                            }
                          }
                        }
                      };
                    for (var a in n.open(u.method || "get", s, !0), n.onload = function () {
                          n.getAllResponseHeaders().replace(/^(.*?):[^\\S\\n]*([\\s\\S]*?)$/gm, (
                            function (e, t, n) {
                              r.push(t = t.toLowerCase()), o.push([t, n]), i[t] = i[t] ?
                                i[t] + "," + n : n
                            })), e(c())
                        }, n.onerror = t, n.withCredentials = "include" == u.credentials, u
                        .headers) n.setRequestHeader(a, u.headers[a]);
                    n.send(u.body || null)
                  })))];
                case 2:
                  return o = i.sent(), a = {
                    ok: o.ok
                  }, [4, o.json()];
                case 3:
                  return [2, (a.json = i.sent(), a)]
              }
              var s, u, l, f
            }))
          }))
        },
        ir = function (e, t, r, o) {
          void 0 === o && (o = 1e4);
          var i = new AbortController,
            c = i.signal,
            a = n(n({}, t), {
              signal: c
            });
          return Promise.race([or(e, a, o, r), new Promise((function (e, t) {
            setTimeout((function () {
              i.abort(), t(new Error("Timeout when executing 'fetch'"))
            }), o)
          }))])
        },
        cr = function (e, t, n, c) {
          return o(void 0, void 0, void 0, (function () {
            var o, a, s, u, l, f, d, p, h, y;
            return i(this, (function (i) {
              switch (i.label) {
                case 0:
                  s = 0, i.label = 1;
                case 1:
                  if (!(s < 3)) return [3, 6];
                  i.label = 2;
                case 2:
                  return i.trys.push([2, 4, , 5]), [4, ir(e, n, c, t)];
                case 3:
                  return a = i.sent(), o = null, [3, 6];
                case 4:
                  return u = i.sent(), o = u, [3, 5];
                case 5:
                  return s++, [3, 1];
                case 6:
                  if (o) throw o;
                  if (l = a.json, f = l.error, d = l.error_description, p = r(l, ["error",
                      "error_description"
                    ]), !a.ok) throw h = d || "HTTP error. Unable to fetch " + e, (y = new Error(h))
                    .error = f || "request_error", y.error_description = h, y;
                  return [2, p]
              }
            }))
          }))
        },
        ar = function (e, t) {
          return o(void 0, void 0, void 0, (function () {
            var o = e.baseUrl,
              c = e.timeout,
              a = r(e, ["baseUrl", "timeout"]);
            return i(this, (function (e) {
              switch (e.label) {
                case 0:
                  return [4, cr(o + "/oauth/token", c, {
                    method: "POST",
                    body: JSON.stringify(n({
                      redirect_uri: window.location.origin
                    }, a)),
                    headers: {
                      "Content-type": "application/json"
                    }
                  }, t)];
                case 1:
                  return [2, e.sent()]
              }
            }))
          }))
        },
        sr = function () {
          return window.crypto || window.msCrypto
        },
        ur = function () {
          var e = sr();
          return e.subtle || e.webkitSubtle
        },
        lr = function (e) {
          return "@@auth0spajs@@::" + e.client_id + "::" + e.audience + "::" + e.scope
        },
        fr = function (e) {
          var t = Math.floor(Date.now() / 1e3) + e.expires_in;
          return {
            body: e,
            expiresAt: Math.min(t, e.decodedToken.claims.exp) - 60
          }
        },
        dr = function () {
          function e() {}
          return e.prototype.save = function (e) {
            var t = lr(e),
              n = fr(e);
            window.localStorage.setItem(t, JSON.stringify(n))
          }, e.prototype.get = function (e) {
            var t = lr(e),
              n = this.readJson(t),
              r = Math.floor(Date.now() / 1e3);
            if (n) {
              if (!(n.expiresAt < r)) return n.body;
              if (n.body.refresh_token) {
                var o = this.stripData(n);
                return this.writeJson(t, o), o.body
              }
              localStorage.removeItem(t)
            }
          }, e.prototype.clear = function () {
            for (var e = localStorage.length - 1; e >= 0; e--) localStorage.key(e).startsWith("@@auth0spajs@@") &&
              localStorage.removeItem(localStorage.key(e))
          }, e.prototype.readJson = function (e) {
            var t, n = window.localStorage.getItem(e);
            if (n && (t = JSON.parse(n))) return t
          }, e.prototype.writeJson = function (e, t) {
            localStorage.setItem(e, JSON.stringify(t))
          }, e.prototype.stripData = function (e) {
            return {
              body: {
                refresh_token: e.body.refresh_token
              },
              expiresAt: e.expiresAt
            }
          }, e
        }(),
        pr = function () {
          this.enclosedCache = function () {
            var e = {
              body: {},
              expiresAt: 0
            };
            return {
              save: function (t) {
                var n = lr(t),
                  r = fr(t);
                e[n] = r
              },
              get: function (t) {
                var n = lr(t),
                  r = e[n],
                  o = Math.floor(Date.now() / 1e3);
                if (r) return r.expiresAt < o ? r.body.refresh_token ? (r.body = {
                  refresh_token: r.body.refresh_token
                }, r.body) : void delete e[n] : r.body
              },
              clear: function () {
                e = {
                  body: {},
                  expiresAt: 0
                }
              }
            }
          }()
        },
        hr = s((function (e, t) {
          var n = c && c.__assign || function () {
            return (n = Object.assign || function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[
                  o]);
              return e
            }).apply(this, arguments)
          };

          function r(e, t) {
            if (!t) return "";
            var n = "; " + e;
            return !0 === t ? n : n + "=" + t
          }

          function o(e, t, n) {
            return encodeURIComponent(e).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/\\(/g,
              "%28").replace(/\\)/g, "%29") + "=" + encodeURIComponent(t).replace(
              /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent) + function (
            e) {
              if ("number" == typeof e.expires) {
                var t = new Date;
                t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires), e.expires = t
              }
              return r("Expires", e.expires ? e.expires.toUTCString() : "") + r("Domain", e.domain) + r(
                "Path", e.path) + r("Secure", e.secure) + r("SameSite", e.sameSite)
            }(n)
          }

          function i(e) {
            for (var t = {}, n = e ? e.split("; ") : [], r = /(%[\\dA-F]{2})+/gi, o = 0; o < n.length; o++) {
              var i = n[o].split("="),
                c = i.slice(1).join("=");
              '"' === c.charAt(0) && (c = c.slice(1, -1));
              try {
                t[i[0].replace(r, decodeURIComponent)] = c.replace(r, decodeURIComponent)
              } catch (e) {}
            }
            return t
          }

          function a() {
            return i(document.cookie)
          }

          function s(e, t, r) {
            document.cookie = o(e, t, n({
              path: "/"
            }, r))
          }
          t.__esModule = !0, t.encode = o, t.parse = i, t.getAll = a, t.get = function (e) {
            return a()[e]
          }, t.set = s, t.remove = function (e, t) {
            s(e, "", n(n({}, t), {
              expires: -1
            }))
          }
        }));
      a(hr);
      hr.encode, hr.parse;
      var yr = hr.getAll,
        mr = hr.get,
        vr = hr.set,
        br = hr.remove,
        gr = function (e) {
          var t = mr(e);
          if (void 0 !== t) return JSON.parse(t)
        },
        wr = function (e, t, n) {
          vr(e, JSON.stringify(t), {
            expires: n.daysUntilExpire
          })
        },
        Sr = function (e) {
          br(e)
        },
        _r = function (e) {
          return "a0.spajs.txs." + e
        },
        kr = function () {
          function e() {
            var e = this;
            this.transactions = {}, Object.keys(yr() || {}).filter((function (e) {
              return e.startsWith("a0.spajs.txs.")
            })).forEach((function (t) {
              var n = t.replace("a0.spajs.txs.", "");
              e.transactions[n] = gr(t)
            }))
          }
          return e.prototype.create = function (e, t) {
            this.transactions[e] = t, wr(_r(e), t, {
              daysUntilExpire: 1
            })
          }, e.prototype.get = function (e) {
            return this.transactions[e]
          }, e.prototype.remove = function (e) {
            delete this.transactions[e], Sr(_r(e))
          }, e
        }(),
        Tr = function (e) {
          return "number" == typeof e
        },
        Ir = ["iss", "aud", "exp", "nbf", "iat", "jti", "azp", "nonce", "auth_time", "at_hash", "c_hash", "acr",
          "amr", "sub_jwk", "cnf", "sip_from_tag", "sip_date", "sip_callid", "sip_cseq_num", "sip_via_branch",
          "orig", "dest", "mky", "events", "toe", "txn", "rph", "sid", "vot", "vtm"
        ],
        Or = function (e) {
          if (!e.id_token) throw new Error("ID token is required but missing");
          var t = function (e) {
            var t = e.split("."),
              n = t[0],
              r = t[1],
              o = t[2];
            if (3 !== t.length || !n || !r || !o) throw new Error("ID token could not be decoded");
            var i = JSON.parse(nr(r)),
              c = {
                __raw: e
              },
              a = {};
            return Object.keys(i).forEach((function (e) {
              c[e] = i[e], Ir.includes(e) || (a[e] = i[e])
            })), {
              encoded: {
                header: n,
                payload: r,
                signature: o
              },
              header: JSON.parse(nr(n)),
              claims: c,
              user: a
            }
          }(e.id_token);
          if (!t.claims.iss) throw new Error("Issuer (iss) claim must be a string present in the ID token");
          if (t.claims.iss !== e.iss) throw new Error('Issuer (iss) claim mismatch in the ID token; expected "' + e
            .iss + '", found "' + t.claims.iss + '"');
          if (!t.user.sub) throw new Error("Subject (sub) claim must be a string present in the ID token");
          if ("RS256" !== t.header.alg) throw new Error('Signature algorithm of "' + t.header.alg +
            '" is not supported. Expected the ID token to be signed with "RS256".');
          if (!t.claims.aud || "string" != typeof t.claims.aud && !Array.isArray(t.claims.aud)) throw new Error(
            "Audience (aud) claim must be a string or array of strings present in the ID token");
          if (Array.isArray(t.claims.aud)) {
            if (!t.claims.aud.includes(e.aud)) throw new Error(
              'Audience (aud) claim mismatch in the ID token; expected "' + e.aud + '" but was not one of "' + t
              .claims.aud.join(", ") + '"');
            if (t.claims.aud.length > 1) {
              if (!t.claims.azp) throw new Error(
                "Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values"
                );
              if (t.claims.azp !== e.aud) throw new Error(
                'Authorized Party (azp) claim mismatch in the ID token; expected "' + e.aud + '", found "' + t
                .claims.azp + '"')
            }
          } else if (t.claims.aud !== e.aud) throw new Error(
            'Audience (aud) claim mismatch in the ID token; expected "' + e.aud + '" but found "' + t.claims
            .aud + '"');
          if (e.nonce) {
            if (!t.claims.nonce) throw new Error("Nonce (nonce) claim must be a string present in the ID token");
            if (t.claims.nonce !== e.nonce) throw new Error(
              'Nonce (nonce) claim mismatch in the ID token; expected "' + e.nonce + '", found "' + t.claims
              .nonce + '"')
          }
          if (e.max_age && !Tr(t.claims.auth_time)) throw new Error(
            "Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified"
            );
          if (!Tr(t.claims.exp)) throw new Error(
            "Expiration Time (exp) claim must be a number present in the ID token");
          if (!Tr(t.claims.iat)) throw new Error("Issued At (iat) claim must be a number present in the ID token");
          var n = e.leeway || 60,
            r = new Date,
            o = new Date(0),
            i = new Date(0),
            c = new Date(0);
          if (c.setUTCSeconds((parseInt(t.claims.auth_time) + e.max_age) / 1e3 + n), o.setUTCSeconds(t.claims.exp +
              n), i.setUTCSeconds(t.claims.nbf - n), r > o) throw new Error(
            "Expiration Time (exp) claim error in the ID token; current time (" + r +
            ") is after expiration time (" + o + ")");
          if (Tr(t.claims.nbf) && r < i) throw new Error(
            "Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Currrent time (" +
            r + ") is before " + i);
          if (Tr(t.claims.auth_time) && r > c) throw new Error(
            "Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Currrent time (" +
            r + ") is after last auth at " + c);
          return t
        },
        Er = function (e) {
          function n(t, r, o, i) {
            void 0 === i && (i = null);
            var c = e.call(this, t, r) || this;
            return c.state = o, c.appState = i, Object.setPrototypeOf(c, n.prototype), c
          }
          return t(n, e), n
        }(function (e) {
          function n(t, r) {
            var o = e.call(this, r) || this;
            return o.error = t, o.error_description = r, Object.setPrototypeOf(o, n.prototype), o
          }
          return t(n, e), n
        }(Error)),
        jr = "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0),
        Ar = jr && "function" == typeof module.require ? module.require : null;
      var xr = function (e, t, n) {
          void 0 === t && (t = null), void 0 === n && (n = !1);
          var r = jr ? function (e, t) {
              return Buffer.from(e, "base64").toString(t ? "utf16" : "utf8")
            }(e, n) : function (e, t) {
              var n = atob(e);
              if (t) {
                var r = new Uint8Array(n.length);
                return Array.prototype.forEach.call(r, (function (e, t, r) {
                  r[t] = n.charCodeAt(t)
                })), String.fromCharCode.apply(null, new Uint16Array(r.buffer))
              }
              return n
            }(e, n),
            o = r.indexOf("\\n", 10) + 1,
            i = r.substring(o) + (t ? "//# sourceMappingURL=" + t : "");
          if (Ar) {
            var c = Ar("worker_threads").Worker;
            return function (e) {
              return new c(i, Object.assign({}, e, {
                eval: !0
              }))
            }
          }
          var a = new Blob([i], {
              type: "application/javascript"
            }),
            s = URL.createObjectURL(a);
          return function (e) {
            return new Worker(s, e)
          }
        }("Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwovKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioKQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuCkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOyB5b3UgbWF5IG5vdCB1c2UKdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUKTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAKClRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkKS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRApXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLApNRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULgoKU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zCmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi8KdmFyIGU9ZnVuY3Rpb24oKXtyZXR1cm4oZT1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHIsdD0xLG49YXJndW1lbnRzLmxlbmd0aDt0PG47dCsrKWZvcih2YXIgbyBpbiByPWFyZ3VtZW50c1t0XSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocixvKSYmKGVbb109cltvXSk7cmV0dXJuIGV9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O2Z1bmN0aW9uIHIoZSxyKXt2YXIgdCxuLG8scyxhPXtsYWJlbDowLHNlbnQ6ZnVuY3Rpb24oKXtpZigxJm9bMF0pdGhyb3cgb1sxXTtyZXR1cm4gb1sxXX0sdHJ5czpbXSxvcHM6W119O3JldHVybiBzPXtuZXh0OmkoMCksdGhyb3c6aSgxKSxyZXR1cm46aSgyKX0sImZ1bmN0aW9uIj09dHlwZW9mIFN5bWJvbCYmKHNbU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSkscztmdW5jdGlvbiBpKHMpe3JldHVybiBmdW5jdGlvbihpKXtyZXR1cm4gZnVuY3Rpb24ocyl7aWYodCl0aHJvdyBuZXcgVHlwZUVycm9yKCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuIik7Zm9yKDthOyl0cnl7aWYodD0xLG4mJihvPTImc1swXT9uLnJldHVybjpzWzBdP24udGhyb3d8fCgobz1uLnJldHVybikmJm8uY2FsbChuKSwwKTpuLm5leHQpJiYhKG89by5jYWxsKG4sc1sxXSkpLmRvbmUpcmV0dXJuIG87c3dpdGNoKG49MCxvJiYocz1bMiZzWzBdLG8udmFsdWVdKSxzWzBdKXtjYXNlIDA6Y2FzZSAxOm89czticmVhaztjYXNlIDQ6cmV0dXJuIGEubGFiZWwrKyx7dmFsdWU6c1sxXSxkb25lOiExfTtjYXNlIDU6YS5sYWJlbCsrLG49c1sxXSxzPVswXTtjb250aW51ZTtjYXNlIDc6cz1hLm9wcy5wb3AoKSxhLnRyeXMucG9wKCk7Y29udGludWU7ZGVmYXVsdDppZighKG89YS50cnlzLChvPW8ubGVuZ3RoPjAmJm9bby5sZW5ndGgtMV0pfHw2IT09c1swXSYmMiE9PXNbMF0pKXthPTA7Y29udGludWV9aWYoMz09PXNbMF0mJighb3x8c1sxXT5vWzBdJiZzWzFdPG9bM10pKXthLmxhYmVsPXNbMV07YnJlYWt9aWYoNj09PXNbMF0mJmEubGFiZWw8b1sxXSl7YS5sYWJlbD1vWzFdLG89czticmVha31pZihvJiZhLmxhYmVsPG9bMl0pe2EubGFiZWw9b1syXSxhLm9wcy5wdXNoKHMpO2JyZWFrfW9bMl0mJmEub3BzLnBvcCgpLGEudHJ5cy5wb3AoKTtjb250aW51ZX1zPXIuY2FsbChlLGEpfWNhdGNoKGUpe3M9WzYsZV0sbj0wfWZpbmFsbHl7dD1vPTB9aWYoNSZzWzBdKXRocm93IHNbMV07cmV0dXJue3ZhbHVlOnNbMF0/c1sxXTp2b2lkIDAsZG9uZTohMH19KFtzLGldKX19fXZhciB0O2FkZEV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLChmdW5jdGlvbihuKXt2YXIgbyxzLGEsaSx1LGwsYyxmLHA7cmV0dXJuIGw9dm9pZCAwLGM9dm9pZCAwLHA9ZnVuY3Rpb24oKXt2YXIgbCxjLGYscCxoLHksYjtyZXR1cm4gcih0aGlzLChmdW5jdGlvbihyKXtzd2l0Y2goci5sYWJlbCl7Y2FzZSAwOm89bi5kYXRhLHM9by51cmwsYT1vLnRpbWVvdXQsaT1mdW5jdGlvbihlLHIpe3ZhciB0PXt9O2Zvcih2YXIgbiBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG4pJiZyLmluZGV4T2Yobik8MCYmKHRbbl09ZVtuXSk7aWYobnVsbCE9ZSYmImZ1bmN0aW9uIj09dHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBvPTA7Zm9yKG49T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtvPG4ubGVuZ3RoO28rKylyLmluZGV4T2YobltvXSk8MCYmT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKGUsbltvXSkmJih0W25bb11dPWVbbltvXV0pfXJldHVybiB0fShvLFsidXJsIiwidGltZW91dCJdKSx1PW4ucG9ydHNbMF0sci5sYWJlbD0xO2Nhc2UgMTppZihyLnRyeXMucHVzaChbMSw3LCw4XSksIShjPUpTT04ucGFyc2UoaS5ib2R5KSkucmVmcmVzaF90b2tlbiYmInJlZnJlc2hfdG9rZW4iPT09Yy5ncmFudF90eXBlKXtpZighdCl0aHJvdyBuZXcgRXJyb3IoIlRoZSB3ZWIgd29ya2VyIGlzIG1pc3NpbmcgdGhlIHJlZnJlc2ggdG9rZW4iKTtpLmJvZHk9SlNPTi5zdHJpbmdpZnkoZShlKHt9LGMpLHtyZWZyZXNoX3Rva2VuOnR9KSl9Zj1uZXcgQWJvcnRDb250cm9sbGVyLHA9Zi5zaWduYWwsaD12b2lkIDAsci5sYWJlbD0yO2Nhc2UgMjpyZXR1cm4gci50cnlzLnB1c2goWzIsNCwsNV0pLFs0LFByb21pc2UucmFjZShbKHY9YSxuZXcgUHJvbWlzZSgoZnVuY3Rpb24oZSl7cmV0dXJuIHNldFRpbWVvdXQoZSx2KX0pKSksZmV0Y2gocyxlKGUoe30saSkse3NpZ25hbDpwfSkpXSldO2Nhc2UgMzpyZXR1cm4gaD1yLnNlbnQoKSxbMyw1XTtjYXNlIDQ6cmV0dXJuIHk9ci5zZW50KCksdS5wb3N0TWVzc2FnZSh7ZXJyb3I6eS5tZXNzYWdlfSksWzJdO2Nhc2UgNTpyZXR1cm4gaD9bNCxoLmpzb24oKV06KGYuYWJvcnQoKSxbMl0pO2Nhc2UgNjpyZXR1cm4obD1yLnNlbnQoKSkucmVmcmVzaF90b2tlbj8odD1sLnJlZnJlc2hfdG9rZW4sZGVsZXRlIGwucmVmcmVzaF90b2tlbik6dD1udWxsLHUucG9zdE1lc3NhZ2Uoe29rOmgub2ssanNvbjpsfSksWzMsOF07Y2FzZSA3OnJldHVybiBiPXIuc2VudCgpLHUucG9zdE1lc3NhZ2Uoe29rOiExLGpzb246e2Vycm9yX2Rlc2NyaXB0aW9uOmIubWVzc2FnZX19KSxbMyw4XTtjYXNlIDg6cmV0dXJuWzJdfXZhciB2fSkpfSxuZXcoKGY9dm9pZCAwKXx8KGY9UHJvbWlzZSkpKChmdW5jdGlvbihlLHIpe2Z1bmN0aW9uIHQoZSl7dHJ5e28ocC5uZXh0KGUpKX1jYXRjaChlKXtyKGUpfX1mdW5jdGlvbiBuKGUpe3RyeXtvKHAudGhyb3coZSkpfWNhdGNoKGUpe3IoZSl9fWZ1bmN0aW9uIG8ocil7ci5kb25lP2Uoci52YWx1ZSk6bmV3IGYoKGZ1bmN0aW9uKGUpe2Uoci52YWx1ZSl9KSkudGhlbih0LG4pfW8oKHA9cC5hcHBseShsLGN8fFtdKSkubmV4dCgpKX0pKX0pKTsKCg==",
          null, !1),
        Wr = new zn,
        Zr = {
          memory: function () {
            return (new pr).enclosedCache
          },
          localstorage: function () {
            return new dr
          }
        },
        Cr = function (e) {
          return Zr[e]
        },
        Ur = function () {
          function e(e) {
            if (this.options = e, this.DEFAULT_SCOPE = "openid profile email", function () {
                if (!sr()) throw new Error(
                  "For security reasons, 'window.crypto' is required to run 'auth0-spa-js'.");
                if (void 0 === ur()) throw new Error(
                  "\\n      auth0-spa-js must run on a secure origin.\\n      See https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin \\n      for more information.\\n    "
                  )
              }(), this.cacheLocation = e.cacheLocation || "memory", !Cr(this.cacheLocation)) throw new Error(
              'Invalid cache location "' + this.cacheLocation + '"');
            this.cache = Cr(this.cacheLocation)(), this.transactionManager = new kr, this.domainUrl = "https://" +
              this.options.domain, this.tokenIssuer = this.options.issuer ? "https://" + this.options.issuer + "/" :
              this.domainUrl + "/", this.options.useRefreshTokens && (this.options.scope = qn(this.options.scope,
                "offline_access")), window.Worker && this.options.useRefreshTokens && "memory" === this
              .cacheLocation && !/Trident.*rv:11\\.0/.test(navigator.userAgent) && (this.worker = new xr)
          }
          return e.prototype._url = function (e) {
            var t = encodeURIComponent(btoa(JSON.stringify({
              name: "auth0-spa-js",
              version: "1.7.0-beta.5"
            })));
            return "" + this.domainUrl + e + "&auth0Client=" + t
          }, e.prototype._getParams = function (e, t, o, i, c) {
            var a = this.options,
              s = (a.domain, a.leeway, a.useRefreshTokens, a.cacheLocation, r(a, ["domain", "leeway",
                "useRefreshTokens", "cacheLocation"
              ]));
            return n(n(n({}, s), e), {
              scope: qn(this.DEFAULT_SCOPE, this.options.scope, e.scope),
              response_type: "code",
              response_mode: "query",
              state: t,
              nonce: o,
              redirect_uri: c || this.options.redirect_uri,
              code_challenge: i,
              code_challenge_method: "S256"
            })
          }, e.prototype._authorizeUrl = function (e) {
            return this._url("/authorize?" + er(e))
          }, e.prototype._verifyIdToken = function (e, t) {
            return Or({
              iss: this.tokenIssuer,
              aud: this.options.client_id,
              id_token: e,
              nonce: t,
              leeway: this.options.leeway,
              max_age: this._parseNumber(this.options.max_age)
            })
          }, e.prototype._parseNumber = function (e) {
            return "string" != typeof e ? e : parseInt(e, 10) || void 0
          }, e.prototype.buildAuthorizeUrl = function (e) {
            return void 0 === e && (e = {}), o(this, void 0, void 0, (function () {
              var t, n, o, c, a, s, u, l, f, d, p;
              return i(this, (function (i) {
                switch (i.label) {
                  case 0:
                    return t = e.redirect_uri, n = e.appState, o = r(e, ["redirect_uri", "appState"]),
                      c = $n(Qn()), a = $n(Qn()), s = Qn(), [4, tr(s)];
                  case 1:
                    return u = i.sent(), l = rr(u), f = e.fragment ? "#" + e.fragment : "", d = this
                      ._getParams(o, c, a, l, t), p = this._authorizeUrl(d), this.transactionManager
                      .create(c, {
                        nonce: a,
                        code_verifier: s,
                        appState: n,
                        scope: d.scope,
                        audience: d.audience || "default",
                        redirect_uri: d.redirect_uri
                      }), [2, p + f]
                }
              }))
            }))
          }, e.prototype.loginWithPopup = function (e, t) {
            return void 0 === e && (e = {}), void 0 === t && (t = {}), o(this, void 0, void 0, (function () {
              var o, c, a, s, u, l, f, d, p, h, y, m;
              return i(this, (function (i) {
                switch (i.label) {
                  case 0:
                    return o = r(e, []), c = $n(Qn()), a = $n(Qn()), s = Qn(), [4, tr(s)];
                  case 1:
                    return u = i.sent(), l = rr(u), f = this._getParams(o, c, a, l, this.options
                      .redirect_uri || window.location.origin), d = this._authorizeUrl(n(n({}, f), {
                      response_mode: "web_message"
                    })), [4, Hn(d, n(n({}, t), {
                      timeoutInSeconds: t.timeoutInSeconds || this.options
                        .authorizeTimeoutInSeconds || 60
                    }))];
                  case 2:
                    if (p = i.sent(), c !== p.state) throw new Error("Invalid state");
                    return [4, ar({
                      baseUrl: this.domainUrl,
                      client_id: this.options.client_id,
                      code_verifier: s,
                      code: p.code,
                      grant_type: "authorization_code",
                      redirect_uri: f.redirect_uri
                    }, this.worker)];
                  case 3:
                    return h = i.sent(), y = this._verifyIdToken(h.id_token, a), m = n(n({}, h), {
                      decodedToken: y,
                      scope: f.scope,
                      audience: f.audience || "default",
                      client_id: this.options.client_id
                    }), this.cache.save(m), wr("auth0.is.authenticated", !0, {
                      daysUntilExpire: 1
                    }), [2]
                }
              }))
            }))
          }, e.prototype.getUser = function (e) {
            return void 0 === e && (e = {
              audience: this.options.audience || "default",
              scope: this.options.scope || this.DEFAULT_SCOPE
            }), o(this, void 0, void 0, (function () {
              var t;
              return i(this, (function (r) {
                return e.scope = qn(this.DEFAULT_SCOPE, e.scope), [2, (t = this.cache.get(n({
                  client_id: this.options.client_id
                }, e))) && t.decodedToken && t.decodedToken.user]
              }))
            }))
          }, e.prototype.getIdTokenClaims = function (e) {
            return void 0 === e && (e = {
              audience: this.options.audience || "default",
              scope: this.options.scope || this.DEFAULT_SCOPE
            }), o(this, void 0, void 0, (function () {
              var t;
              return i(this, (function (r) {
                return e.scope = qn(this.DEFAULT_SCOPE, this.options.scope, e.scope), [2, (t = this
                  .cache.get(n({
                    client_id: this.options.client_id
                  }, e))) && t.decodedToken && t.decodedToken.claims]
              }))
            }))
          }, e.prototype.loginWithRedirect = function (e) {
            return void 0 === e && (e = {}), o(this, void 0, void 0, (function () {
              var t;
              return i(this, (function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.buildAuthorizeUrl(e)];
                  case 1:
                    return t = n.sent(), window.location.assign(t), [2]
                }
              }))
            }))
          }, e.prototype.handleRedirectCallback = function (e) {
            return void 0 === e && (e = window.location.href), o(this, void 0, void 0, (function () {
              var t, r, o, c, a, s, u, l, f, d, p;
              return i(this, (function (i) {
                switch (i.label) {
                  case 0:
                    if (0 === (t = e.split("?").slice(1)).length) throw new Error(
                      "There are no query params available for parsing.");
                    if (r = function (e) {
                        e.indexOf("#") > -1 && (e = e.substr(0, e.indexOf("#")));
                        var t = e.split("&"),
                          r = {};
                        return t.forEach((function (e) {
                          var t = e.split("="),
                            n = t[0],
                            o = t[1];
                          r[n] = decodeURIComponent(o)
                        })), n(n({}, r), {
                          expires_in: parseInt(r.expires_in)
                        })
                      }(t.join("")), o = r.state, c = r.code, a = r.error, s = r.error_description, !(
                        u = this.transactionManager.get(o))) throw new Error("Invalid state");
                    if (a) throw this.transactionManager.remove(o), new Er(a, s, o, u.appState);
                    return this.transactionManager.remove(o), l = {
                      baseUrl: this.domainUrl,
                      client_id: this.options.client_id,
                      code_verifier: u.code_verifier,
                      grant_type: "authorization_code",
                      code: c
                    }, void 0 !== u.redirect_uri && (l.redirect_uri = u.redirect_uri), [4, ar(l,
                      this.worker)];
                  case 1:
                    return f = i.sent(), d = this._verifyIdToken(f.id_token, u.nonce), p = n(n({},
                    f), {
                      decodedToken: d,
                      audience: u.audience,
                      scope: u.scope,
                      client_id: this.options.client_id
                    }), this.cache.save(p), wr("auth0.is.authenticated", !0, {
                      daysUntilExpire: 1
                    }), [2, {
                      appState: u.appState
                    }]
                }
              }))
            }))
          }, e.prototype.getTokenSilently = function (e) {
            return void 0 === e && (e = {}), o(this, void 0, void 0, (function () {
              var t, o, c, a, s, u;
              return i(this, (function (i) {
                switch (i.label) {
                  case 0:
                    t = n({
                      audience: this.options.audience,
                      scope: qn(this.DEFAULT_SCOPE, this.options.scope, e.scope),
                      ignoreCache: !1
                    }, e), o = t.ignoreCache, c = r(t, ["ignoreCache"]), i.label = 1;
                  case 1:
                    return i.trys.push([1, 7, 8, 10]), !o && (a = this.cache.get({
                      scope: c.scope,
                      audience: c.audience || "default",
                      client_id: this.options.client_id
                    })) && a.access_token ? [2, a.access_token] : [4, Wr.acquireLock(
                      "auth0.lock.getTokenSilently", 5e3)];
                  case 2:
                    return i.sent(), !this.options.useRefreshTokens || e.audience ? [3, 4] : [4, this
                      ._getTokenUsingRefreshToken(c)
                    ];
                  case 3:
                    return u = i.sent(), [3, 6];
                  case 4:
                    return [4, this._getTokenFromIFrame(c)];
                  case 5:
                    u = i.sent(), i.label = 6;
                  case 6:
                    return s = u, this.cache.save(n({
                      client_id: this.options.client_id
                    }, s)), wr("auth0.is.authenticated", !0, {
                      daysUntilExpire: 1
                    }), [2, s.access_token];
                  case 7:
                    throw i.sent();
                  case 8:
                    return [4, Wr.releaseLock("auth0.lock.getTokenSilently")];
                  case 9:
                    return i.sent(), [7];
                  case 10:
                    return [2]
                }
              }))
            }))
          }, e.prototype.getTokenWithPopup = function (e, t) {
            return void 0 === e && (e = {
              audience: this.options.audience,
              scope: this.options.scope || this.DEFAULT_SCOPE
            }), void 0 === t && (t = Bn), o(this, void 0, void 0, (function () {
              return i(this, (function (n) {
                switch (n.label) {
                  case 0:
                    return e.scope = qn(this.DEFAULT_SCOPE, this.options.scope, e.scope), [4, this
                      .loginWithPopup(e, t)
                    ];
                  case 1:
                    return n.sent(), [2, this.cache.get({
                      scope: e.scope,
                      audience: e.audience || "default",
                      client_id: this.options.client_id
                    }).access_token]
                }
              }))
            }))
          }, e.prototype.isAuthenticated = function () {
            return o(this, void 0, void 0, (function () {
              return i(this, (function (e) {
                switch (e.label) {
                  case 0:
                    return [4, this.getUser()];
                  case 1:
                    return [2, !!e.sent()]
                }
              }))
            }))
          }, e.prototype.logout = function (e) {
            void 0 === e && (e = {}), null !== e.client_id ? e.client_id = e.client_id || this.options.client_id :
              delete e.client_id;
            var t = e.federated,
              n = e.localOnly,
              o = r(e, ["federated", "localOnly"]);
            if (n && t) throw new Error(
              "It is invalid to set both the 'federated' and 'localOnly' options to 'true'");
            if (this.cache.clear(), Sr("auth0.is.authenticated"), !n) {
              var i = t ? "&federated" : "",
                c = this._url("/v2/logout?" + er(o));
              window.location.assign("" + c + i)
            }
          }, e.prototype._getTokenFromIFrame = function (e) {
            return o(this, void 0, void 0, (function () {
              var t, r, o, c, a, s, u, l, f, d, p;
              return i(this, (function (i) {
                switch (i.label) {
                  case 0:
                    return t = $n(Qn()), r = $n(Qn()), o = Qn(), [4, tr(o)];
                  case 1:
                    return c = i.sent(), a = rr(c), s = this._getParams(e, t, r, a, e.redirect_uri ||
                      this.options.redirect_uri || window.location.origin), u = this._authorizeUrl(
                      n(n({}, s), {
                        prompt: "none",
                        response_mode: "web_message"
                      })), l = e.timeoutInSeconds || this.options.authorizeTimeoutInSeconds, [4, (
                      h = u, y = this.domainUrl, m = l, void 0 === m && (m = 60), new Promise((
                        function (e, t) {
                          var n = window.document.createElement("iframe");
                          n.setAttribute("width", "0"), n.setAttribute("height", "0"), n.style
                            .display = "none";
                          var r = function () {
                              window.document.body.contains(n) && window.document.body
                                .removeChild(n)
                            },
                            o = setTimeout((function () {
                              t(Mn), r()
                            }), 1e3 * m),
                            i = function (n) {
                              if (n.origin == y && n.data && "authorization_response" === n.data
                                .type) {
                                var c = n.source;
                                c && c.close(), n.data.response.error ? t(n.data.response) : e(n
                                    .data.response), clearTimeout(o), window
                                  .removeEventListener("message", i, !1), setTimeout(r, 2e3)
                              }
                            };
                          window.addEventListener("message", i, !1), window.document.body
                            .appendChild(n), n.setAttribute("src", h)
                        })))];
                  case 2:
                    if (f = i.sent(), t !== f.state) throw new Error("Invalid state");
                    return [4, ar({
                      baseUrl: this.domainUrl,
                      client_id: this.options.client_id,
                      code_verifier: o,
                      code: f.code,
                      grant_type: "authorization_code",
                      redirect_uri: s.redirect_uri
                    }, this.worker)];
                  case 3:
                    return d = i.sent(), p = this._verifyIdToken(d.id_token, r), [2, n(n({}, d), {
                      decodedToken: p,
                      scope: s.scope,
                      audience: s.audience || "default"
                    })]
                }
                var h, y, m
              }))
            }))
          }, e.prototype._getTokenUsingRefreshToken = function (e) {
            return o(this, void 0, void 0, (function () {
              var t, r, o, c, a;
              return i(this, (function (i) {
                switch (i.label) {
                  case 0:
                    return e.scope = qn(this.DEFAULT_SCOPE, this.options.scope, e.scope), (t = this
                      .cache.get({
                        scope: e.scope,
                        audience: e.audience || "default",
                        client_id: this.options.client_id
                      })) && t.refresh_token || this.worker ? [3, 2] : [4, this._getTokenFromIFrame(
                      e)];
                  case 1:
                    return [2, i.sent()];
                  case 2:
                    r = e.redirect_uri || this.options.redirect_uri || window.location.origin, i
                      .label = 3;
                  case 3:
                    return i.trys.push([3, 5, , 8]), [4, ar({
                      baseUrl: this.domainUrl,
                      client_id: this.options.client_id,
                      grant_type: "refresh_token",
                      refresh_token: t && t.refresh_token,
                      redirect_uri: r
                    }, this.worker)];
                  case 4:
                    return o = i.sent(), [3, 8];
                  case 5:
                    return "The web worker is missing the refresh token" !== (c = i.sent()).message ?
                      [3, 7] : [4, this._getTokenFromIFrame(e)];
                  case 6:
                    return [2, i.sent()];
                  case 7:
                    throw c;
                  case 8:
                    return a = this._verifyIdToken(o.id_token), [2, n(n({}, o), {
                      decodedToken: a,
                      scope: e.scope,
                      audience: e.audience || "default"
                    })]
                }
              }))
            }))
          }, e
        }();

      function Lr(e) {
        return o(this, void 0, void 0, (function () {
          var t, n;
          return i(this, (function (r) {
            switch (r.label) {
              case 0:
                if ("memory" === (t = new Ur(e)).cacheLocation && !gr("auth0.is.authenticated"))
                return [2, t];
                r.label = 1;
              case 1:
                return r.trys.push([1, 3, , 4]), [4, t.getTokenSilently()];
              case 2:
                return r.sent(), [3, 4];
              case 3:
                if ("login_required" !== (n = r.sent()).error) throw n;
                return [3, 4];
              case 4:
                return [2, t]
            }
          }))
        }))
      }
      var Kr = Lr;
      return Kr.Auth0Client = Ur, Kr.createAuth0Client = Lr, Kr
    })), "Auth0Client" in this && this.console && this.console.warn && this.console.warn(
      "Auth0Client already declared on the global namespace"), this && this.createAuth0Client && (this.Auth0Client =
      this.Auth0Client || this.createAuth0Client.Auth0Client);
    //# sourceMappingURL=auth0-spa-js.production.js.map
  </script>
  </script>
  <script>
    function storageAvailable(type) {
      var storage
      try {
        storage = window[type]
        var x = '__storage_test__'
        storage.setItem(x, x)
        storage.removeItem(x)
        return true
      } catch (e) {
        return (
          e &&
          // everything except Firefox
          (e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          // acknowledge QuotaExceededError only if there's something already stored
          storage &&
          storage.length !== 0
        )
      }
    }
    // set theme
    let theme = 'light'
    if (storageAvailable('localStorage')) {
      var torusTheme = localStorage.getItem('torus-theme')
      if (torusTheme) {
        theme = torusTheme.split('-')[0]
      }
    }

    if (theme === 'dark') {
      document.querySelector('h1.title').style.color = '#d3d3d4'
      document.querySelector('body').style.backgroundColor = '#24252A'
    }
    // broadcast-channel
    /* eslint no-param-reassign: 0 */
    var broadcastChannelLib = {};
    (function () {
      function r(e, n, t) {
        function o(i, f) {
          if (!n[i]) {
            if (!e[i]) {
              var c = 'function' == typeof require && require
              if (!f && c) return c(i, !0)
              if (u) return u(i, !0)
              var a = new Error("Cannot find module '" + i + "'")
              throw ((a.code = 'MODULE_NOT_FOUND'), a)
            }
            var p = (n[i] = {
              exports: {}
            })
            e[i][0].call(
              p.exports,
              function (r) {
                var n = e[i][1][r]
                return o(n || r)
              },
              p,
              p.exports,
              r,
              e,
              n,
              t
            )
          }
          return n[i].exports
        }
        for (var u = 'function' == typeof require && require, i = 0; i < t.length; i++) o(t[i])
        return o
      }
      return r
    })()({
        1: [function (require, module, exports) {}, {}],
        2: [
          function (require, module, exports) {
            // shim for using process in browser
            var process = (module.exports = {})

            // cached from whatever global is present so that test runners that stub it
            // don't break things.  But we need to wrap it in a try catch in case it is
            // wrapped in strict mode code which doesn't define any globals.  It's inside a
            // function because try/catches deoptimize in certain engines.

            var cachedSetTimeout
            var cachedClearTimeout

            function defaultSetTimout() {
              throw new Error('setTimeout has not been defined')
            }

            function defaultClearTimeout() {
              throw new Error('clearTimeout has not been defined')
            };
            (function () {
              try {
                if (typeof setTimeout === 'function') {
                  cachedSetTimeout = setTimeout
                } else {
                  cachedSetTimeout = defaultSetTimout
                }
              } catch (e) {
                cachedSetTimeout = defaultSetTimout
              }
              try {
                if (typeof clearTimeout === 'function') {
                  cachedClearTimeout = clearTimeout
                } else {
                  cachedClearTimeout = defaultClearTimeout
                }
              } catch (e) {
                cachedClearTimeout = defaultClearTimeout
              }
            })()

            function runTimeout(fun) {
              if (cachedSetTimeout === setTimeout) {
                //normal enviroments in sane situations
                return setTimeout(fun, 0)
              }
              // if setTimeout wasn't available but was latter defined
              if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                cachedSetTimeout = setTimeout
                return setTimeout(fun, 0)
              }
              try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedSetTimeout(fun, 0)
              } catch (e) {
                try {
                  // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                  return cachedSetTimeout.call(null, fun, 0)
                } catch (e) {
                  // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                  return cachedSetTimeout.call(this, fun, 0)
                }
              }
            }

            function runClearTimeout(marker) {
              if (cachedClearTimeout === clearTimeout) {
                //normal enviroments in sane situations
                return clearTimeout(marker)
              }
              // if clearTimeout wasn't available but was latter defined
              if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                cachedClearTimeout = clearTimeout
                return clearTimeout(marker)
              }
              try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedClearTimeout(marker)
              } catch (e) {
                try {
                  // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                  return cachedClearTimeout.call(null, marker)
                } catch (e) {
                  // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                  // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                  return cachedClearTimeout.call(this, marker)
                }
              }
            }
            var queue = []
            var draining = false
            var currentQueue
            var queueIndex = -1

            function cleanUpNextTick() {
              if (!draining || !currentQueue) {
                return
              }
              draining = false
              if (currentQueue.length) {
                queue = currentQueue.concat(queue)
              } else {
                queueIndex = -1
              }
              if (queue.length) {
                drainQueue()
              }
            }

            function drainQueue() {
              if (draining) {
                return
              }
              var timeout = runTimeout(cleanUpNextTick)
              draining = true

              var len = queue.length
              while (len) {
                currentQueue = queue
                queue = []
                while (++queueIndex < len) {
                  if (currentQueue) {
                    currentQueue[queueIndex].run()
                  }
                }
                queueIndex = -1
                len = queue.length
              }
              currentQueue = null
              draining = false
              runClearTimeout(timeout)
            }

            process.nextTick = function (fun) {
              var args = new Array(arguments.length - 1)
              if (arguments.length > 1) {
                for (var i = 1; i < arguments.length; i++) {
                  args[i - 1] = arguments[i]
                }
              }
              queue.push(new Item(fun, args))
              if (queue.length === 1 && !draining) {
                runTimeout(drainQueue)
              }
            }

            // v8 likes predictible objects
            function Item(fun, array) {
              this.fun = fun
              this.array = array
            }
            Item.prototype.run = function () {
              this.fun.apply(null, this.array)
            }
            process.title = 'browser'
            process.browser = true
            process.env = {}
            process.argv = []
            process.version = '' // empty string to avoid regexp issues
            process.versions = {}

            function noop() {}

            process.on = noop
            process.addListener = noop
            process.once = noop
            process.off = noop
            process.removeListener = noop
            process.removeAllListeners = noop
            process.emit = noop
            process.prependListener = noop
            process.prependOnceListener = noop

            process.listeners = function (name) {
              return []
            }

            process.binding = function (name) {
              throw new Error('process.binding is not supported')
            }

            process.cwd = function () {
              return '/'
            }
            process.chdir = function (dir) {
              throw new Error('process.chdir is not supported')
            }
            process.umask = function () {
              return 0
            }
          },
          {}
        ],
        3: [
          function (require, module, exports) {
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ?
                obj : {
                  default: obj
                }
            }

            module.exports = _interopRequireDefault
          },
          {}
        ],
        4: [
          function (require, module, exports) {
            'use strict'

            Object.defineProperty(exports, '__esModule', {
              value: true
            })
            exports.clearNodeFolder = clearNodeFolder
            exports.enforceOptions = enforceOptions
            exports.BroadcastChannel = void 0

            var _util = require('./util.js')

            var _methodChooser = require('./method-chooser.js')

            var _options = require('./options.js')

            var BroadcastChannel = function BroadcastChannel(name, options) {
              this.name = name

              if (ENFORCED_OPTIONS) {
                options = ENFORCED_OPTIONS
              }

              this.options = (0, _options.fillOptionsWithDefaults)(options)
              this.method = (0, _methodChooser.chooseMethod)(this.options) // isListening

              this._iL = false
              /**
               * _onMessageListener
               * setting onmessage twice,
               * will overwrite the first listener
               */

              this._onML = null
              /**
               * _addEventListeners
               */

              this._addEL = {
                message: [],
                internal: []
              }
              /**
               * _beforeClose
               * array of promises that will be awaited
               * before the channel is closed
               */

              this._befC = []
              /**
               * _preparePromise
               */

              this._prepP = null

              _prepareChannel(this)
            } // STATICS

            /**
             * used to identify if someone overwrites
             * window.BroadcastChannel with this
             * See methods/native.js
             */

            exports.BroadcastChannel = BroadcastChannel
            BroadcastChannel._pubkey = true
            /**
             * clears the tmp-folder if is node
             * @return {Promise<boolean>} true if has run, false if not node
             */

            function clearNodeFolder(options) {
              options = (0, _options.fillOptionsWithDefaults)(options)
              var method = (0, _methodChooser.chooseMethod)(options)

              if (method.type === 'node') {
                return method.clearNodeFolder().then(function () {
                  return true
                })
              } else {
                return Promise.resolve(false)
              }
            }
            /**
             * if set, this method is enforced,
             * no mather what the options are
             */

            var ENFORCED_OPTIONS

            function enforceOptions(options) {
              ENFORCED_OPTIONS = options
            } // PROTOTYPE

            BroadcastChannel.prototype = {
              postMessage: function postMessage(msg) {
                if (this.closed) {
                  throw new Error('BroadcastChannel.postMessage(): ' +
                    'Cannot post message after channel has closed')
                }

                return _post(this, 'message', msg)
              },
              postInternal: function postInternal(msg) {
                return _post(this, 'internal', msg)
              },

              set onmessage(fn) {
                var time = this.method.microSeconds()
                var listenObj = {
                  time: time,
                  fn: fn
                }

                _removeListenerObject(this, 'message', this._onML)

                if (fn && typeof fn === 'function') {
                  this._onML = listenObj

                  _addListenerObject(this, 'message', listenObj)
                } else {
                  this._onML = null
                }
              },

              addEventListener: function addEventListener(type, fn) {
                var time = this.method.microSeconds()
                var listenObj = {
                  time: time,
                  fn: fn
                }

                _addListenerObject(this, type, listenObj)
              },
              removeEventListener: function removeEventListener(type, fn) {
                var obj = this._addEL[type].find(function (obj) {
                  return obj.fn === fn
                })

                _removeListenerObject(this, type, obj)
              },
              close: function close() {
                var _this = this

                if (this.closed) return
                this.closed = true
                var awaitPrepare = this._prepP ? this._prepP : Promise.resolve()
                this._onML = null
                this._addEL.message = []
                return awaitPrepare
                  .then(function () {
                    return Promise.all(
                      _this._befC.map(function (fn) {
                        return fn()
                      })
                    )
                  })
                  .then(function () {
                    return _this.method.close(_this._state)
                  })
              },

              get type() {
                return this.method.type
              }
            }

            function _post(broadcastChannel, type, msg) {
              var time = broadcastChannel.method.microSeconds()
              var msgObj = {
                time: time,
                type: type,
                data: msg
              }
              var awaitPrepare = broadcastChannel._prepP ? broadcastChannel._prepP : Promise.resolve()
              return awaitPrepare.then(function () {
                return broadcastChannel.method.postMessage(broadcastChannel._state, msgObj)
              })
            }

            function _prepareChannel(channel) {
              var maybePromise = channel.method.create(channel.name, channel.options)

              if ((0, _util.isPromise)(maybePromise)) {
                channel._prepP = maybePromise
                maybePromise.then(function (s) {
                  // used in tests to simulate slow runtime

                  /*if (channel.options.prepareDelay) {
           await new Promise(res => setTimeout(res, this.options.prepareDelay));
      }*/
                  channel._state = s
                })
              } else {
                channel._state = maybePromise
              }
            }

            function _hasMessageListeners(channel) {
              if (channel._addEL.message.length > 0) return true
              if (channel._addEL.internal.length > 0) return true
              return false
            }

            function _addListenerObject(channel, type, obj) {
              channel._addEL[type].push(obj)

              _startListening(channel)
            }

            function _removeListenerObject(channel, type, obj) {
              channel._addEL[type] = channel._addEL[type].filter(function (o) {
                return o !== obj
              })

              _stopListening(channel)
            }

            function _startListening(channel) {
              if (!channel._iL && _hasMessageListeners(channel)) {
                // someone is listening, start subscribing
                var listenerFn = function listenerFn(msgObj) {
                  channel._addEL[msgObj.type].forEach(function (obj) {
                    if (msgObj.time >= obj.time) {
                      obj.fn(msgObj.data)
                    }
                  })
                }

                var time = channel.method.microSeconds()

                if (channel._prepP) {
                  channel._prepP.then(function () {
                    channel._iL = true
                    channel.method.onMessage(channel._state, listenerFn, time)
                  })
                } else {
                  channel._iL = true
                  channel.method.onMessage(channel._state, listenerFn, time)
                }
              }
            }

            function _stopListening(channel) {
              if (channel._iL && !_hasMessageListeners(channel)) {
                // noone is listening, stop subscribing
                channel._iL = false
                var time = channel.method.microSeconds()
                channel.method.onMessage(channel._state, null, time)
              }
            }
          },
          {
            './method-chooser.js': 8,
            './options.js': 14,
            './util.js': 15
          }
        ],
        5: [
          function (require, module, exports) {
            'use strict'

            var _index = require('./index.js')

            /**
             * because babel can only export on default-attribute,
             * we use this for the non-module-build
             * this ensures that users do not have to use
             * var BroadcastChannel = require('broadcast-channel').default;
             * but
             * var BroadcastChannel = require('broadcast-channel');
             */
            module.exports = {
              BroadcastChannel: _index.BroadcastChannel,
              createLeaderElection: _index.createLeaderElection,
              clearNodeFolder: _index.clearNodeFolder,
              enforceOptions: _index.enforceOptions
            }
          },
          {
            './index.js': 6
          }
        ],
        6: [
          function (require, module, exports) {
            'use strict'

            Object.defineProperty(exports, '__esModule', {
              value: true
            })
            Object.defineProperty(exports, 'BroadcastChannel', {
              enumerable: true,
              get: function get() {
                return _broadcastChannel.BroadcastChannel
              }
            })
            Object.defineProperty(exports, 'clearNodeFolder', {
              enumerable: true,
              get: function get() {
                return _broadcastChannel.clearNodeFolder
              }
            })
            Object.defineProperty(exports, 'enforceOptions', {
              enumerable: true,
              get: function get() {
                return _broadcastChannel.enforceOptions
              }
            })
            Object.defineProperty(exports, 'createLeaderElection', {
              enumerable: true,
              get: function get() {
                return _leaderElection.createLeaderElection
              }
            })

            var _broadcastChannel = require('./broadcast-channel')

            var _leaderElection = require('./leader-election')
          },
          {
            './broadcast-channel': 4,
            './leader-election': 7
          }
        ],
        7: [
          function (require, module, exports) {
            'use strict'

            var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

            Object.defineProperty(exports, '__esModule', {
              value: true
            })
            exports.createLeaderElection = createLeaderElection

            var _util = require('./util.js')

            var _unload = _interopRequireDefault(require('unload'))

            var LeaderElection = function LeaderElection(channel, options) {
              this._channel = channel
              this._options = options
              this.isLeader = false
              this.isDead = false
              this.token = (0, _util.randomToken)()
              this._isApl = false // _isApplying

              this._reApply = false // things to clean up

              this._unl = [] // _unloads

              this._lstns = [] // _listeners

              this._invs = [] // _intervals
            }

            LeaderElection.prototype = {
              applyOnce: function applyOnce() {
                var _this = this

                if (this.isLeader) return Promise.resolve(false)
                if (this.isDead) return Promise.resolve(false) // do nothing if already running

                if (this._isApl) {
                  this._reApply = true
                  return Promise.resolve(false)
                }

                this._isApl = true
                var stopCriteria = false
                var recieved = []

                var handleMessage = function handleMessage(msg) {
                  if (msg.context === 'leader' && msg.token != _this.token) {
                    recieved.push(msg)

                    if (msg.action === 'apply') {
                      // other is applying
                      if (msg.token > _this.token) {
                        // other has higher token, stop applying
                        stopCriteria = true
                      }
                    }

                    if (msg.action === 'tell') {
                      // other is already leader
                      stopCriteria = true
                    }
                  }
                }

                this._channel.addEventListener('internal', handleMessage)

                var ret = _sendMessage(this, 'apply') // send out that this one is applying
                  .then(function () {
                    return (0, _util.sleep)(_this._options.responseTime)
                  }) // let others time to respond
                  .then(function () {
                    if (stopCriteria) return Promise.reject(new Error())
                    else return _sendMessage(_this, 'apply')
                  })
                  .then(function () {
                    return (0, _util.sleep)(_this._options.responseTime)
                  }) // let others time to respond
                  .then(function () {
                    if (stopCriteria) return Promise.reject(new Error())
                    else return _sendMessage(_this)
                  })
                  .then(function () {
                    return _beLeader(_this)
                  }) // no one disagreed -> this one is now leader
                  .then(function () {
                    return true
                  })['catch'](function () {
                    return false
                  }) // apply not successfull
                  .then(function (success) {
                    _this._channel.removeEventListener('internal', handleMessage)

                    _this._isApl = false

                    if (!success && _this._reApply) {
                      _this._reApply = false
                      return _this.applyOnce()
                    } else return success
                  })

                return ret
              },
              awaitLeadership: function awaitLeadership() {
                if (
                  /* _awaitLeadershipPromise */
                  !this._aLP
                ) {
                  this._aLP = _awaitLeadershipOnce(this)
                }

                return this._aLP
              },
              die: function die() {
                var _this2 = this

                if (this.isDead) return
                this.isDead = true

                this._lstns.forEach(function (listener) {
                  return _this2._channel.removeEventListener('internal', listener)
                })

                this._invs.forEach(function (interval) {
                  return clearInterval(interval)
                })

                this._unl.forEach(function (uFn) {
                  uFn.remove()
                })

                return _sendMessage(this, 'death')
              }
            }

            function _awaitLeadershipOnce(leaderElector) {
              if (leaderElector.isLeader) return Promise.resolve()
              return new Promise(function (res) {
                var resolved = false

                var finish = function finish() {
                  if (resolved) return
                  resolved = true
                  clearInterval(interval)

                  leaderElector._channel.removeEventListener('internal', whenDeathListener)

                  res(true)
                } // try once now

                leaderElector.applyOnce().then(function () {
                  if (leaderElector.isLeader) finish()
                }) // try on fallbackInterval

                var interval = setInterval(function () {
                  leaderElector.applyOnce().then(function () {
                    if (leaderElector.isLeader) finish()
                  })
                }, leaderElector._options.fallbackInterval)

                leaderElector._invs.push(interval) // try when other leader dies

                var whenDeathListener = function whenDeathListener(msg) {
                  if (msg.context === 'leader' && msg.action === 'death') {
                    leaderElector.applyOnce().then(function () {
                      if (leaderElector.isLeader) finish()
                    })
                  }
                }

                leaderElector._channel.addEventListener('internal', whenDeathListener)

                leaderElector._lstns.push(whenDeathListener)
              })
            }
            /**
             * sends and internal message over the broadcast-channel
             */

            function _sendMessage(leaderElector, action) {
              var msgJson = {
                context: 'leader',
                action: action,
                token: leaderElector.token
              }
              return leaderElector._channel.postInternal(msgJson)
            }

            function _beLeader(leaderElector) {
              leaderElector.isLeader = true

              var unloadFn = _unload['default'].add(function () {
                return leaderElector.die()
              })

              leaderElector._unl.push(unloadFn)

              var isLeaderListener = function isLeaderListener(msg) {
                if (msg.context === 'leader' && msg.action === 'apply') {
                  _sendMessage(leaderElector, 'tell')
                }
              }

              leaderElector._channel.addEventListener('internal', isLeaderListener)

              leaderElector._lstns.push(isLeaderListener)

              return _sendMessage(leaderElector, 'tell')
            }

            function fillOptionsWithDefaults(options, channel) {
              if (!options) options = {}
              options = JSON.parse(JSON.stringify(options))

              if (!options.fallbackInterval) {
                options.fallbackInterval = 3000
              }

              if (!options.responseTime) {
                options.responseTime = channel.method.averageResponseTime(channel.options)
              }

              return options
            }

            function createLeaderElection(channel, options) {
              if (channel._leaderElector) {
                throw new Error('BroadcastChannel already has a leader-elector')
              }

              options = fillOptionsWithDefaults(options, channel)
              var elector = new LeaderElection(channel, options)

              channel._befC.push(function () {
                return elector.die()
              })

              channel._leaderElector = elector
              return elector
            }
          },
          {
            './util.js': 15,
            '@babel/runtime/helpers/interopRequireDefault': 3,
            unload: 18
          }
        ],
        8: [
          function (require, module, exports) {
            'use strict'

            var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

            Object.defineProperty(exports, '__esModule', {
              value: true
            })
            exports.chooseMethod = chooseMethod

            var _native = _interopRequireDefault(require('./methods/native.js'))

            var _indexedDb = _interopRequireDefault(require('./methods/indexed-db.js'))

            var _localstorage = _interopRequireDefault(require('./methods/localstorage.js'))

            var _simulate = _interopRequireDefault(require('./methods/simulate.js'))

            var _util = require('./util')

            // order is important
            var METHODS = [
              _native['default'], // fastest
              _indexedDb['default'],
              _localstorage['default']
            ]
            /**
             * The NodeMethod is loaded lazy
             * so it will not get bundled in browser-builds
             */

            if (_util.isNode) {
              /**
               * we use the non-transpiled code for nodejs
               * because it runs faster
               */
              var NodeMethod = require('../../src/methods/' + // use this hack so that browserify and others
                // do not import the node-method by default
                // when bundling.
                'node.js')
              /**
               * this will be false for webpackbuilds
               * which will shim the node-method with an empty object {}
               */

              if (typeof NodeMethod.canBeUsed === 'function') {
                METHODS.push(NodeMethod)
              }
            }

            function chooseMethod(options) {
              var chooseMethods = [].concat(options.methods, METHODS).filter(Boolean) // directly chosen

              if (options.type) {
                if (options.type === 'simulate') {
                  // only use simulate-method if directly chosen
                  return _simulate['default']
                }

                var ret = chooseMethods.find(function (m) {
                  return m.type === options.type
                })
                if (!ret) throw new Error('method-type ' + options.type + ' not found')
                else return ret
              }
              /**
               * if no webworker support is needed,
               * remove idb from the list so that localstorage is been chosen
               */

              if (!options.webWorkerSupport && !_util.isNode) {
                chooseMethods = chooseMethods.filter(function (m) {
                  return m.type !== 'idb'
                })
              }

              var useMethod = chooseMethods.find(function (method) {
                return method.canBeUsed()
              })
              if (!useMethod)
                throw new Error(
                  'No useable methode found:' +
                  JSON.stringify(
                    METHODS.map(function (m) {
                      return m.type
                    })
                  )
                )
              else return useMethod
            }
          },
          {
            './methods/indexed-db.js': 9,
            './methods/localstorage.js': 10,
            './methods/native.js': 11,
            './methods/simulate.js': 12,
            './util': 15,
            '@babel/runtime/helpers/interopRequireDefault': 3
          }
        ],
        9: [
          function (require, module, exports) {
            'use strict'

            var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

            Object.defineProperty(exports, '__esModule', {
              value: true
            })
            exports.getIdb = getIdb
            exports.createDatabase = createDatabase
            exports.writeMessage = writeMessage
            exports.getAllMessages = getAllMessages
            exports.getMessagesHigherThen = getMessagesHigherThen
            exports.removeMessageById = removeMessageById
            exports.getOldMessages = getOldMessages
            exports.cleanOldMessages = cleanOldMessages
            exports.create = create
            exports.close = close
            exports.postMessage = postMessage
            exports.onMessage = onMessage
            exports.canBeUsed = canBeUsed
            exports.averageResponseTime = averageResponseTime
            exports['default'] = exports.type = exports.microSeconds = void 0

            var _util = require('../util.js')

            var _obliviousSet = _interopRequireDefault(require('../oblivious-set'))

            var _options = require('../options')

            /**
             * this method uses indexeddb to store the messages
             * There is currently no observerAPI for idb
             * @link https://github.com/w3c/IndexedDB/issues/51
             */
            var microSeconds = _util.microSeconds
            exports.microSeconds = microSeconds
            var DB_PREFIX = 'pubkey.broadcast-channel-0-'
            var OBJECT_STORE_ID = 'messages'
            var type = 'idb'
            exports.type = type

            function getIdb() {
              if (typeof indexedDB !== 'undefined') return indexedDB
              if (typeof window.mozIndexedDB !== 'undefined') return window.mozIndexedDB
              if (typeof window.webkitIndexedDB !== 'undefined') return window.webkitIndexedDB
              if (typeof window.msIndexedDB !== 'undefined') return window.msIndexedDB
              return false
            }

            function createDatabase(channelName) {
              var IndexedDB = getIdb() // create table

              var dbName = DB_PREFIX + channelName
              var openRequest = IndexedDB.open(dbName, 1)

              openRequest.onupgradeneeded = function (ev) {
                var db = ev.target.result
                db.createObjectStore(OBJECT_STORE_ID, {
                  keyPath: 'id',
                  autoIncrement: true
                })
              }

              var dbPromise = new Promise(function (res, rej) {
                openRequest.onerror = function (ev) {
                  return rej(ev)
                }

                openRequest.onsuccess = function () {
                  res(openRequest.result)
                }
              })
              return dbPromise
            }
            /**
             * writes the new message to the database
             * so other readers can find it
             */

            function writeMessage(db, readerUuid, messageJson) {
              var time = new Date().getTime()
              var writeObject = {
                uuid: readerUuid,
                time: time,
                data: messageJson
              }
              var transaction = db.transaction([OBJECT_STORE_ID], 'readwrite')
              return new Promise(function (res, rej) {
                transaction.oncomplete = function () {
                  return res()
                }

                transaction.onerror = function (ev) {
                  return rej(ev)
                }

                var objectStore = transaction.objectStore(OBJECT_STORE_ID)
                objectStore.add(writeObject)
              })
            }

            function getAllMessages(db) {
              var objectStore = db.transaction(OBJECT_STORE_ID).objectStore(OBJECT_STORE_ID)
              var ret = []
              return new Promise(function (res) {
                objectStore.openCursor().onsuccess = function (ev) {
                  var cursor = ev.target.result

                  if (cursor) {
                    ret.push(cursor.value) //alert("Name for SSN " + cursor.key + " is " + cursor.value.name);

                    cursor['continue']()
                  } else {
                    res(ret)
                  }
                }
              })
            }

            function getMessagesHigherThen(db, lastCursorId) {
              var objectStore = db.transaction(OBJECT_STORE_ID).objectStore(OBJECT_STORE_ID)
              var ret = []
              var keyRangeValue = IDBKeyRange.bound(lastCursorId + 1, Infinity)
              return new Promise(function (res) {
                objectStore.openCursor(keyRangeValue).onsuccess = function (ev) {
                  var cursor = ev.target.result

                  if (cursor) {
                    ret.push(cursor.value)
                    cursor['continue']()
                  } else {
                    res(ret)
                  }
                }
              })
            }

            function removeMessageById(db, id) {
              var request = db
                .transaction([OBJECT_STORE_ID], 'readwrite')
                .objectStore(OBJECT_STORE_ID)['delete'](id)
              return new Promise(function (res) {
                request.onsuccess = function () {
                  return res()
                }
              })
            }

            function getOldMessages(db, ttl) {
              var olderThen = new Date().getTime() - ttl
              var objectStore = db.transaction(OBJECT_STORE_ID).objectStore(OBJECT_STORE_ID)
              var ret = []
              return new Promise(function (res) {
                objectStore.openCursor().onsuccess = function (ev) {
                  var cursor = ev.target.result

                  if (cursor) {
                    var msgObk = cursor.value

                    if (msgObk.time < olderThen) {
                      ret.push(msgObk) //alert("Name for SSN " + cursor.key + " is " + cursor.value.name);

                      cursor['continue']()
                    } else {
                      // no more old messages,
                      res(ret)
                      return
                    }
                  } else {
                    res(ret)
                  }
                }
              })
            }

            function cleanOldMessages(db, ttl) {
              return getOldMessages(db, ttl).then(function (tooOld) {
                return Promise.all(
                  tooOld.map(function (msgObj) {
                    return removeMessageById(db, msgObj.id)
                  })
                )
              })
            }

            function create(channelName, options) {
              options = (0, _options.fillOptionsWithDefaults)(options)
              return createDatabase(channelName).then(function (db) {
                var state = {
                  closed: false,
                  lastCursorId: 0,
                  channelName: channelName,
                  options: options,
                  uuid: (0, _util.randomToken)(),

                  /**
                   * emittedMessagesIds
                   * contains all messages that have been emitted before
                   * @type {ObliviousSet}
                   */
                  eMIs: new _obliviousSet['default'](options.idb.ttl * 2),
                  // ensures we do not read messages in parrallel
                  writeBlockPromise: Promise.resolve(),
                  messagesCallback: null,
                  readQueuePromises: [],
                  db: db
                }
                /**
                 * if service-workers are used,
                 * we have no 'storage'-event if they post a message,
                 * therefore we also have to set an interval
                 */

                _readLoop(state)

                return state
              })
            }

            function _readLoop(state) {
              if (state.closed) return
              return readNewMessages(state)
                .then(function () {
                  return (0, _util.sleep)(state.options.idb.fallbackInterval)
                })
                .then(function () {
                  return _readLoop(state)
                })
            }

            function _filterMessage(msgObj, state) {
              if (msgObj.uuid === state.uuid) return false // send by own

              if (state.eMIs.has(msgObj.id)) return false // already emitted

              if (msgObj.data.time < state.messagesCallbackTime) return false // older then onMessageCallback

              return true
            }
            /**
             * reads all new messages from the database and emits them
             */

            function readNewMessages(state) {
              // channel already closed
              if (state.closed) return Promise
                .resolve() // if no one is listening, we do not need to scan for new messages

              if (!state.messagesCallback) return Promise.resolve()
              return getMessagesHigherThen(state.db, state.lastCursorId).then(function (newerMessages) {
                var useMessages = newerMessages
                  /**
                   * there is a bug in iOS where the msgObj can be undefined some times
                   * so we filter them out
                   * @link https://github.com/pubkey/broadcast-channel/issues/19
                   */
                  .filter(function (msgObj) {
                    return !!msgObj
                  })
                  .map(function (msgObj) {
                    if (msgObj.id > state.lastCursorId) {
                      state.lastCursorId = msgObj.id
                    }

                    return msgObj
                  })
                  .filter(function (msgObj) {
                    return _filterMessage(msgObj, state)
                  })
                  .sort(function (msgObjA, msgObjB) {
                    return msgObjA.time - msgObjB.time
                  }) // sort by time

                useMessages.forEach(function (msgObj) {
                  if (state.messagesCallback) {
                    state.eMIs.add(msgObj.id)
                    state.messagesCallback(msgObj.data)
                  }
                })
                return Promise.resolve()
              })
            }

            function close(channelState) {
              channelState.closed = true
              channelState.db.close()
            }

            function postMessage(channelState, messageJson) {
              channelState.writeBlockPromise = channelState.writeBlockPromise
                .then(function () {
                  return writeMessage(channelState.db, channelState.uuid, messageJson)
                })
                .then(function () {
                  if ((0, _util.randomInt)(0, 10) === 0) {
                    /* await (do not await) */
                    cleanOldMessages(channelState.db, channelState.options.idb.ttl)
                  }
                })
              return channelState.writeBlockPromise
            }

            function onMessage(channelState, fn, time) {
              channelState.messagesCallbackTime = time
              channelState.messagesCallback = fn
              readNewMessages(channelState)
            }

            function canBeUsed() {
              if (_util.isNode) return false
              var idb = getIdb()
              if (!idb) return false
              return true
            }

            function averageResponseTime(options) {
              return options.idb.fallbackInterval * 2
            }

            var _default = {
              create: create,
              close: close,
              onMessage: onMessage,
              postMessage: postMessage,
              canBeUsed: canBeUsed,
              type: type,
              averageResponseTime: averageResponseTime,
              microSeconds: microSeconds
            }
            exports['default'] = _default
          },
          {
            '../oblivious-set': 13,
            '../options': 14,
            '../util.js': 15,
            '@babel/runtime/helpers/interopRequireDefault': 3
          }
        ],
        10: [
          function (require, module, exports) {
            'use strict'

            var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

            Object.defineProperty(exports, '__esModule', {
              value: true
            })
            exports.getLocalStorage = getLocalStorage
            exports.storageKey = storageKey
            exports.postMessage = postMessage
            exports.addStorageEventListener = addStorageEventListener
            exports.removeStorageEventListener = removeStorageEventListener
            exports.create = create
            exports.close = close
            exports.onMessage = onMessage
            exports.canBeUsed = canBeUsed
            exports.averageResponseTime = averageResponseTime
            exports['default'] = exports.type = exports.microSeconds = void 0

            var _obliviousSet = _interopRequireDefault(require('../oblivious-set'))

            var _options = require('../options')

            var _util = require('../util')

            /**
             * A localStorage-only method which uses localstorage and its 'storage'-event
             * This does not work inside of webworkers because they have no access to locastorage
             * This is basically implemented to support IE9 or your grandmothers toaster.
             * @link https://caniuse.com/#feat=namevalue-storage
             * @link https://caniuse.com/#feat=indexeddb
             */
            var microSeconds = _util.microSeconds
            exports.microSeconds = microSeconds
            var KEY_PREFIX = 'pubkey.broadcastChannel-'
            var type = 'localstorage'
            /**
             * copied from crosstab
             * @link https://github.com/tejacques/crosstab/blob/master/src/crosstab.js#L32
             */

            exports.type = type

            function getLocalStorage() {
              var localStorage
              if (typeof window === 'undefined') return null

              try {
                localStorage = window.localStorage
                localStorage = window['ie8-eventlistener/storage'] || window.localStorage
              } catch (e) {
                // New versions of Firefox throw a Security exception
                // if cookies are disabled. See
                // https://bugzilla.mozilla.org/show_bug.cgi?id=1028153
              }

              return localStorage
            }

            function storageKey(channelName) {
              return KEY_PREFIX + channelName
            }
            /**
             * writes the new message to the storage
             * and fires the storage-event so other readers can find it
             */

            function postMessage(channelState, messageJson) {
              return new Promise(function (res) {
                ;
                (0, _util.sleep)().then(function () {
                  var key = storageKey(channelState.channelName)
                  var writeObj = {
                    token: (0, _util.randomToken)(),
                    time: new Date().getTime(),
                    data: messageJson,
                    uuid: channelState.uuid
                  }
                  var value = JSON.stringify(writeObj)
                  getLocalStorage().setItem(key, value)
                  /**
                   * StorageEvent does not fire the 'storage' event
                   * in the window that changes the state of the local storage.
                   * So we fire it manually
                   */

                  var ev = document.createEvent('Event')
                  ev.initEvent('storage', true, true)
                  ev.key = key
                  ev.newValue = value
                  window.dispatchEvent(ev)
                  res()
                })
              })
            }

            function addStorageEventListener(channelName, fn) {
              var key = storageKey(channelName)

              var listener = function listener(ev) {
                if (ev.key === key) {
                  fn(JSON.parse(ev.newValue))
                }
              }

              window.addEventListener('storage', listener)
              return listener
            }

            function removeStorageEventListener(listener) {
              window.removeEventListener('storage', listener)
            }

            function create(channelName, options) {
              options = (0, _options.fillOptionsWithDefaults)(options)

              if (!canBeUsed()) {
                throw new Error('BroadcastChannel: localstorage cannot be used')
              }

              var uuid = (0, _util.randomToken)()
              /**
               * eMIs
               * contains all messages that have been emitted before
               * @type {ObliviousSet}
               */

              var eMIs = new _obliviousSet['default'](options.localstorage.removeTimeout)
              var state = {
                channelName: channelName,
                uuid: uuid,
                eMIs: eMIs // emittedMessagesIds
              }
              state.listener = addStorageEventListener(channelName, function (msgObj) {
                if (!state.messagesCallback) return // no listener

                if (msgObj.uuid === uuid) return // own message

                if (!msgObj.token || eMIs.has(msgObj.token)) return // already emitted

                if (msgObj.data.time && msgObj.data.time < state.messagesCallbackTime) return // too old

                eMIs.add(msgObj.token)
                state.messagesCallback(msgObj.data)
              })
              return state
            }

            function close(channelState) {
              removeStorageEventListener(channelState.listener)
            }

            function onMessage(channelState, fn, time) {
              channelState.messagesCallbackTime = time
              channelState.messagesCallback = fn
            }

            function canBeUsed() {
              if (_util.isNode) return false
              var ls = getLocalStorage()
              if (!ls) return false

              try {
                var key = '__broadcastchannel_check'
                ls.setItem(key, 'works')
                ls.removeItem(key)
              } catch (e) {
                // Safari 10 in private mode will not allow write access to local
                // storage and fail with a QuotaExceededError. See
                // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API#Private_Browsing_Incognito_modes
                return false
              }

              return true
            }

            function averageResponseTime() {
              var defaultTime = 120
              var userAgent = navigator.userAgent.toLowerCase()

              if (userAgent.includes('safari') && !userAgent.includes('chrome')) {
                // safari is much slower so this time is higher
                return defaultTime * 2
              }

              return defaultTime
            }

            var _default = {
              create: create,
              close: close,
              onMessage: onMessage,
              postMessage: postMessage,
              canBeUsed: canBeUsed,
              type: type,
              averageResponseTime: averageResponseTime,
              microSeconds: microSeconds
            }
            exports['default'] = _default
          },
          {
            '../oblivious-set': 13,
            '../options': 14,
            '../util': 15,
            '@babel/runtime/helpers/interopRequireDefault': 3
          }
        ],
        11: [
          function (require, module, exports) {
            'use strict'

            Object.defineProperty(exports, '__esModule', {
              value: true
            })
            exports.create = create
            exports.close = close
            exports.postMessage = postMessage
            exports.onMessage = onMessage
            exports.canBeUsed = canBeUsed
            exports.averageResponseTime = averageResponseTime
            exports['default'] = exports.type = exports.microSeconds = void 0

            var _util = require('../util')

            var microSeconds = _util.microSeconds
            exports.microSeconds = microSeconds
            var type = 'native'
            exports.type = type

            function create(channelName) {
              var state = {
                messagesCallback: null,
                bc: new BroadcastChannel(channelName),
                subFns: [] // subscriberFunctions
              }

              state.bc.onmessage = function (msg) {
                if (state.messagesCallback) {
                  state.messagesCallback(msg.data)
                }
              }

              return state
            }

            function close(channelState) {
              channelState.bc.close()
              channelState.subFns = []
            }

            function postMessage(channelState, messageJson) {
              channelState.bc.postMessage(messageJson, false)
            }

            function onMessage(channelState, fn) {
              channelState.messagesCallback = fn
            }

            function canBeUsed() {
              /**
               * in the electron-renderer, isNode will be true even if we are in browser-context
               * so we also check if window is undefined
               */
              if (_util.isNode && typeof window === 'undefined') return false

              if (typeof BroadcastChannel === 'function') {
                if (BroadcastChannel._pubkey) {
                  throw new Error(
                    'BroadcastChannel: Do not overwrite window.BroadcastChannel with this module, this is not a polyfill'
                  )
                }

                return true
              } else return false
            }

            function averageResponseTime() {
              return 150
            }

            var _default = {
              create: create,
              close: close,
              onMessage: onMessage,
              postMessage: postMessage,
              canBeUsed: canBeUsed,
              type: type,
              averageResponseTime: averageResponseTime,
              microSeconds: microSeconds
            }
            exports['default'] = _default
          },
          {
            '../util': 15
          }
        ],
        12: [
          function (require, module, exports) {
            'use strict'

            Object.defineProperty(exports, '__esModule', {
              value: true
            })
            exports.create = create
            exports.close = close
            exports.postMessage = postMessage
            exports.onMessage = onMessage
            exports.canBeUsed = canBeUsed
            exports.averageResponseTime = averageResponseTime
            exports['default'] = exports.type = exports.microSeconds = void 0

            var _util = require('../util')

            var microSeconds = _util.microSeconds
            exports.microSeconds = microSeconds
            var type = 'simulate'
            exports.type = type
            var SIMULATE_CHANNELS = new Set()

            function create(channelName) {
              var state = {
                name: channelName,
                messagesCallback: null
              }
              SIMULATE_CHANNELS.add(state)
              return state
            }

            function close(channelState) {
              SIMULATE_CHANNELS['delete'](channelState)
            }

            function postMessage(channelState, messageJson) {
              return new Promise(function (res) {
                return setTimeout(function () {
                  var channelArray = Array.from(SIMULATE_CHANNELS)
                  channelArray
                    .filter(function (channel) {
                      return channel.name === channelState.name
                    })
                    .filter(function (channel) {
                      return channel !== channelState
                    })
                    .filter(function (channel) {
                      return !!channel.messagesCallback
                    })
                    .forEach(function (channel) {
                      return channel.messagesCallback(messageJson)
                    })
                  res()
                }, 5)
              })
            }

            function onMessage(channelState, fn) {
              channelState.messagesCallback = fn
            }

            function canBeUsed() {
              return true
            }

            function averageResponseTime() {
              return 5
            }

            var _default = {
              create: create,
              close: close,
              onMessage: onMessage,
              postMessage: postMessage,
              canBeUsed: canBeUsed,
              type: type,
              averageResponseTime: averageResponseTime,
              microSeconds: microSeconds
            }
            exports['default'] = _default
          },
          {
            '../util': 15
          }
        ],
        13: [
          function (require, module, exports) {
            'use strict'

            Object.defineProperty(exports, '__esModule', {
              value: true
            })
            exports['default'] = void 0

            /**
             * this is a set which automatically forgets
             * a given entry when a new entry is set and the ttl
             * of the old one is over
             * @constructor
             */
            var ObliviousSet = function ObliviousSet(ttl) {
              var set = new Set()
              var timeMap = new Map()
              this.has = set.has.bind(set)

              this.add = function (value) {
                timeMap.set(value, now())
                set.add(value)

                _removeTooOldValues()
              }

              this.clear = function () {
                set.clear()
                timeMap.clear()
              }

              function _removeTooOldValues() {
                var olderThen = now() - ttl
                var iterator = set[Symbol.iterator]()

                while (true) {
                  var value = iterator.next().value
                  if (!value) return // no more elements

                  var time = timeMap.get(value)

                  if (time < olderThen) {
                    timeMap['delete'](value)
                    set['delete'](value)
                  } else {
                    // we reached a value that is not old enough
                    return
                  }
                }
              }
            }

            function now() {
              return new Date().getTime()
            }

            var _default = ObliviousSet
            exports['default'] = _default
          },
          {}
        ],
        14: [
          function (require, module, exports) {
            'use strict'

            Object.defineProperty(exports, '__esModule', {
              value: true
            })
            exports.fillOptionsWithDefaults = fillOptionsWithDefaults

            function fillOptionsWithDefaults() {
              var originalOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
              var options = JSON.parse(JSON.stringify(originalOptions)) // main

              if (typeof options.webWorkerSupport === 'undefined') options.webWorkerSupport = true // indexed-db

              if (!options.idb) options.idb = {} //  after this time the messages get deleted

              if (!options.idb.ttl) options.idb.ttl = 1000 * 45
              if (!options.idb.fallbackInterval) options.idb.fallbackInterval = 150 // localstorage

              if (!options.localstorage) options.localstorage = {}
              if (!options.localstorage.removeTimeout) options.localstorage.removeTimeout = 1000 *
                60 // custom methods

              if (originalOptions.methods) options.methods = originalOptions.methods // node

              if (!options.node) options.node = {}
              if (!options.node.ttl) options.node.ttl = 1000 * 60 * 2 // 2 minutes;

              if (typeof options.node.useFastPath === 'undefined') options.node.useFastPath = true
              return options
            }
          },
          {}
        ],
        15: [
          function (require, module, exports) {
            ;
            (function (process) {
              'use strict'

              Object.defineProperty(exports, '__esModule', {
                value: true
              })
              exports.isPromise = isPromise
              exports.sleep = sleep
              exports.randomInt = randomInt
              exports.randomToken = randomToken
              exports.microSeconds = microSeconds
              exports.isNode = void 0

              /**
               * returns true if the given object is a promise
               */
              function isPromise(obj) {
                if (obj && typeof obj.then === 'function') {
                  return true
                } else {
                  return false
                }
              }

              function sleep(time) {
                if (!time) time = 0
                return new Promise(function (res) {
                  return setTimeout(res, time)
                })
              }

              function randomInt(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min)
              }
              /**
               * https://stackoverflow.com/a/8084248
               */

              function randomToken() {
                return Math.random()
                  .toString(36)
                  .substring(2)
              }

              var lastMs = 0
              var additional = 0
              /**
               * returns the current time in micro-seconds,
               * WARNING: This is a pseudo-function
               * Performance.now is not reliable in webworkers, so we just make sure to never return the same time.
               * This is enough in browsers, and this function will not be used in nodejs.
               * The main reason for this hack is to ensure that BroadcastChannel behaves equal to production when it is used in fast-running unit tests.
               */

              function microSeconds() {
                var ms = new Date().getTime()

                if (ms === lastMs) {
                  additional++
                  return ms * 1000 + additional
                } else {
                  lastMs = ms
                  additional = 0
                  return ms * 1000
                }
              }
              /**
               * copied from the 'detect-node' npm module
               * We cannot use the module directly because it causes problems with rollup
               * @link https://github.com/iliakan/detect-node/blob/master/index.js
               */

              var isNode = Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) ===
                '[object process]'
              exports.isNode = isNode
            }.call(this, require('_process')))
          },
          {
            _process: 2
          }
        ],
        16: [
          function (require, module, exports) {
            module.exports = false
          },
          {}
        ],
        17: [
          function (require, module, exports) {
            'use strict'

            Object.defineProperty(exports, '__esModule', {
              value: true
            })
            exports['default'] = void 0

            /* global WorkerGlobalScope */
            function add(fn) {
              if (typeof WorkerGlobalScope === 'function' && self instanceof WorkerGlobalScope) {
                // this is run inside of a webworker
              } else {
                /**
                 * if we are on react-native, there is no window.addEventListener
                 * @link https://github.com/pubkey/unload/issues/6
                 */
                if (typeof window.addEventListener !== 'function') return
                /**
                 * for normal browser-windows, we use the beforeunload-event
                 */

                window.addEventListener(
                  'beforeunload',
                  function () {
                    fn()
                  },
                  true
                )
                /**
                 * for iframes, we have to use the unload-event
                 * @link https://stackoverflow.com/q/47533670/3443137
                 */

                window.addEventListener(
                  'unload',
                  function () {
                    fn()
                  },
                  true
                )
              }
              /**
               * TODO add fallback for safari-mobile
               * @link https://stackoverflow.com/a/26193516/3443137
               */
            }

            var _default = {
              add: add
            }
            exports['default'] = _default
          },
          {}
        ],
        18: [
          function (require, module, exports) {
            'use strict'

            var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

            Object.defineProperty(exports, '__esModule', {
              value: true
            })
            exports.add = add
            exports.runAll = runAll
            exports.removeAll = removeAll
            exports.getSize = getSize
            exports['default'] = void 0

            var _detectNode = _interopRequireDefault(require('detect-node'))

            var _browser = _interopRequireDefault(require('./browser.js'))

            var _node = _interopRequireDefault(require('./node.js'))

            var USE_METHOD = _detectNode['default'] ? _node['default'] : _browser['default']
            var LISTENERS = new Set()
            var startedListening = false

            function startListening() {
              if (startedListening) return
              startedListening = true
              USE_METHOD.add(runAll)
            }

            function add(fn) {
              startListening()
              if (typeof fn !== 'function') throw new Error('Listener is no function')
              LISTENERS.add(fn)
              var addReturn = {
                remove: function remove() {
                  return LISTENERS['delete'](fn)
                },
                run: function run() {
                  LISTENERS['delete'](fn)
                  return fn()
                }
              }
              return addReturn
            }

            function runAll() {
              var promises = []
              LISTENERS.forEach(function (fn) {
                promises.push(fn())
                LISTENERS['delete'](fn)
              })
              return Promise.all(promises)
            }

            function removeAll() {
              LISTENERS.clear()
            }

            function getSize() {
              return LISTENERS.size
            }

            var _default = {
              add: add,
              runAll: runAll,
              removeAll: removeAll,
              getSize: getSize
            }
            exports['default'] = _default
          },
          {
            './browser.js': 17,
            './node.js': 1,
            '@babel/runtime/helpers/interopRequireDefault': 3,
            'detect-node': 16
          }
        ],
        19: [
          function (require, module, exports) {
            var {
              BroadcastChannel
            } = require('broadcast-channel')
            broadcastChannelLib.BroadcastChannel = BroadcastChannel
          },
          {
            'broadcast-channel': 5
          }
        ]
      }, {},
      [19]
    )
    var bc
    var broadcastChannelOptions = {
      // type: 'localstorage', // (optional) enforce a type, oneOf['native', 'idb', 'localstorage', 'node'
      webWorkerSupport: false // (optional) set this to false if you know that your channel will never be used in a WebWorker (increase performance)
    }
    var instanceParams = {}
    var preopenInstanceId = new URL(window.location.href).searchParams.get('preopenInstanceId')
    var auth0Params = new URL(window.location.href).searchParams.get('auth0Params')
    var auth0Login = new URL(window.location.href).searchParams.get('auth0Login')
    var auth0ParamsObj
    var auth0LoginObj
    if (!auth0Params) {
      auth0Params = window.localStorage.getItem('auth0Params')
    }
    if (auth0Params) {
      auth0ParamsObj = JSON.parse(window.atob(auth0Params))
      window.localStorage.setItem('auth0Params', auth0Params)
    }
    if (!auth0Login) {
      auth0Login = window.sessionStorage.getItem('auth0Login')
    }
    if (auth0Login) {
      auth0LoginObj = JSON.parse(window.atob(auth0Login))
      window.sessionStorage.setItem('auth0Login', auth0Login)
    }

    // trying to get a new auth0 login
    if (auth0ParamsObj && auth0LoginObj) {

      new Promise(function (resolve, reject) {
        // wait for page load
        var readyInterval = setInterval(function () {
          if (window && window.document && window.document.readyState === 'complete') {
            clearInterval(readyInterval)
            resolve()
          }
        }, 100)
        setTimeout(function () {
          reject('timed out waiting for document to load')
        }, 5000)
      }).then(function () {
        // create auth0 client
        return new window.Auth0Client(auth0ParamsObj)
      }).then(function (auth0Client) {
        // check if already authenticated
        window.auth0 = auth0Client
        return auth0Client.isAuthenticated()
      }).then(function (isAuthenticated) {
        if (isAuthenticated) {
          // if already authenticated but trying to get a login, then logout and refresh page
          alert('logging out')
          window.auth0.logout({
            returnTo: auth0LoginObj.redirect_uri
          })
        } else {
          // not authenticated yet and trying to get a login
          if (!auth0LoginObj.appState) {
            auth0LoginObj.appState = {}
          }
          auth0LoginObj.appState.auth0Params = auth0ParamsObj
          window.sessionStorage.removeItem('auth0Login')
          return window.auth0.loginWithRedirect(auth0LoginObj)
        }
      })
    } else if (!preopenInstanceId) {
      window.document.getElementById('message').style.visibility = 'visible'
      // in general oauth redirect
      try {
        var url = new URL(location.href)
        var hash = url.hash.substr(1)
        var hashParams = hash.split('&').reduce(function (result, item) {
          var parts = item.split('=')
          result[parts[0]] = parts[1]
          return result
        }, {})
        var queryParams = {}
        for (var key of url.searchParams.keys()) {
          queryParams[key] = url.searchParams.get(key)
        }
        var auth0ShouldParseResult = false
        var error = ''
        try {
          if (Object.keys(hashParams).length > 0 && hashParams.state) {
            instanceParams = JSON.parse(window.atob(decodeURIComponent(decodeURIComponent(hashParams.state)))) || {}
            if (hashParams.error) error = hashParams.error
          } else if (Object.keys(queryParams).length > 0 && queryParams.state) {
            instanceParams = JSON.parse(window.atob(decodeURIComponent(decodeURIComponent(queryParams.state)))) || {}
            if (queryParams.error) error = queryParams.error
          }
        } catch (e) {
          // might be an auth0 redirect, which has a non-JSON state
          var query = window.location.search
          auth0ShouldParseResult = query.includes("code=") && query.includes("state=")
        }
        if (auth0ShouldParseResult) {
          // auth0 redirect
          new Promise(function (resolve, reject) {
              // wait for page load
              var readyInterval = setInterval(function () {
                if (window && window.document && window.document.readyState === 'complete') {
                  clearInterval(readyInterval)
                  resolve()
                }
              }, 100)
              setTimeout(function () {
                reject('timed out waiting for document to load')
              }, 5000)
            }).then(function () {
              // create auth0 client
              return new window.Auth0Client(auth0ParamsObj)
            }).then(function (auth0Client) {
              window.auth0 = auth0Client
              return window.auth0.handleRedirectCallback()
            }).then(function (result) {
              instanceParams = JSON.parse(window.atob(decodeURIComponent(decodeURIComponent(result.appState))))
              return window.auth0.getIdTokenClaims()
            }).then(function (claim) {
              if (!claim || !claim.__raw) {
                throw new Error('invalid idtoken claim')
              }
              bc = new broadcastChannelLib.BroadcastChannel('redirect_channel_' + instanceParams.instanceId,
                broadcastChannelOptions)
              for (var key in claim) {
                hashParams[key] = claim[key]
              }
              hashParams.idtoken = claim.__raw
              return bc.postMessage({
                data: {
                  instanceParams,
                  queryParams: {},
                  hashParams: hashParams
                },
                error: ''
              })
            }).then(function () {
              bc && bc.close()
              console.log('posted', {
                queryParams,
                instanceParams,
                hashParams
              })
              setTimeout(function () {
                window.close()
              }, 1000)
            })
            .catch(function (e) {
              console.error('could not handle auth0 redirect', e)
            })
        } else if (instanceParams.redirectToOpener) {
          // communicate to window.opener
          window.opener.postMessage({
            channel: 'redirect_channel_' + instanceParams.instanceId,
            data: {
              instanceParams: instanceParams,
              hashParams: hashParams,
              queryParams: queryParams
            },
            error: error
          }, '*')
        } else {
          // communicate via broadcast channel
          bc = new broadcastChannelLib.BroadcastChannel('redirect_channel_' + instanceParams.instanceId,
            broadcastChannelOptions)
          bc.postMessage({
            data: {
              instanceParams: instanceParams,
              hashParams: hashParams,
              queryParams: queryParams
            },
            error: error
          }).then(function () {
            bc.close()
            console.log('posted', {
              queryParams,
              instanceParams,
              hashParams
            })
            setTimeout(function () {
              window.close()
            }, 30000)
          })
        }
      } catch (err) {
        console.error(err, 'service worker error in redirect')
        bc && bc.close()
        // TODO PUT BACK
        // window.close()
      }
    } else {
      // in preopen, awaiting redirect
      try {
        bc = new broadcastChannelLib.BroadcastChannel('preopen_channel_' + preopenInstanceId, broadcastChannelOptions)
        bc.onmessage = function (ev) {
          var {
            preopenInstanceId: oldId,
            payload,
            message
          } = ev.data
          if (oldId === preopenInstanceId && payload && payload.url) {
            window.location.href = payload.url
          } else if (oldId === preopenInstanceId && message === 'setup_complete') {
            bc.postMessage({
              data: {
                preopenInstanceId: preopenInstanceId,
                message: 'popup_loaded'
              }
            })
          }
          if (ev.error && ev.error !== '') {
            console.error(ev.error)
            bc.close()
          }
        }
      } catch (err) {
        console.error(err, 'service worker error in preopen')
        bc && bc.close()
        window.close()
      }
    }
  </script>
</body>

</html>                        
${""}
  `,
            ],
            { type: "text/html" }
          )
        )
      );
    }
  } catch (error) {
    console.error(error);
  }
});
