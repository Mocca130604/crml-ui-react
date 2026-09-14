import Pe, { useState as _e, useRef as ut, useEffect as dt } from "react";
var ce = { exports: {} }, H = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function pt() {
  if (Te) return H;
  Te = 1;
  var n = Pe, i = Symbol.for("react.element"), r = Symbol.for("react.fragment"), e = Object.prototype.hasOwnProperty, s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(C, $, B) {
    var x, v = {}, W = null, y = null;
    B !== void 0 && (W = "" + B), $.key !== void 0 && (W = "" + $.key), $.ref !== void 0 && (y = $.ref);
    for (x in $) e.call($, x) && !l.hasOwnProperty(x) && (v[x] = $[x]);
    if (C && C.defaultProps) for (x in $ = C.defaultProps, $) v[x] === void 0 && (v[x] = $[x]);
    return { $$typeof: i, type: C, key: W, ref: y, props: v, _owner: s.current };
  }
  return H.Fragment = r, H.jsx = o, H.jsxs = o, H;
}
var I = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function ht() {
  return Ae || (Ae = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Pe, i = Symbol.for("react.element"), r = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), C = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), E = Symbol.iterator, Y = "@@iterator";
    function X(t) {
      if (t === null || typeof t != "object")
        return null;
      var c = E && t[E] || t[Y];
      return typeof c == "function" ? c : null;
    }
    var S = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(t) {
      {
        for (var c = arguments.length, m = new Array(c > 1 ? c - 1 : 0), u = 1; u < c; u++)
          m[u - 1] = arguments[u];
        D("error", t, m);
      }
    }
    function D(t, c, m) {
      {
        var u = S.ReactDebugCurrentFrame, h = u.getStackAddendum();
        h !== "" && (c += "%s", m = m.concat([h]));
        var g = m.map(function(p) {
          return String(p);
        });
        g.unshift("Warning: " + c), Function.prototype.apply.call(console[t], console, g);
      }
    }
    var K = !1, Z = !1, P = !1, Q = !1, ee = !1, j;
    j = Symbol.for("react.module.reference");
    function R(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === e || t === l || ee || t === s || t === B || t === x || Q || t === y || K || Z || P || typeof t == "object" && t !== null && (t.$$typeof === W || t.$$typeof === v || t.$$typeof === o || t.$$typeof === C || t.$$typeof === $ || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === j || t.getModuleId !== void 0));
    }
    function _(t, c, m) {
      var u = t.displayName;
      if (u)
        return u;
      var h = c.displayName || c.name || "";
      return h !== "" ? m + "(" + h + ")" : m;
    }
    function me(t) {
      return t.displayName || "Context";
    }
    function z(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case e:
          return "Fragment";
        case r:
          return "Portal";
        case l:
          return "Profiler";
        case s:
          return "StrictMode";
        case B:
          return "Suspense";
        case x:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case C:
            var c = t;
            return me(c) + ".Consumer";
          case o:
            var m = t;
            return me(m._context) + ".Provider";
          case $:
            return _(t, t.render, "ForwardRef");
          case v:
            var u = t.displayName || null;
            return u !== null ? u : z(t.type) || "Memo";
          case W: {
            var h = t, g = h._payload, p = h._init;
            try {
              return z(p(g));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, L = 0, ye, ue, de, pe, he, ge, xe;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function Fe() {
      {
        if (L === 0) {
          ye = console.log, ue = console.info, de = console.warn, pe = console.error, he = console.group, ge = console.groupCollapsed, xe = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: ve,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        L++;
      }
    }
    function Oe() {
      {
        if (L--, L === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, t, {
              value: ye
            }),
            info: T({}, t, {
              value: ue
            }),
            warn: T({}, t, {
              value: de
            }),
            error: T({}, t, {
              value: pe
            }),
            group: T({}, t, {
              value: he
            }),
            groupCollapsed: T({}, t, {
              value: ge
            }),
            groupEnd: T({}, t, {
              value: xe
            })
          });
        }
        L < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var te = S.ReactCurrentDispatcher, re;
    function q(t, c, m) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (h) {
            var u = h.stack.trim().match(/\n( *(at )?)/);
            re = u && u[1] || "";
          }
        return `
` + re + t;
      }
    }
    var ae = !1, U;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Le();
    }
    function fe(t, c) {
      if (!t || ae)
        return "";
      {
        var m = U.get(t);
        if (m !== void 0)
          return m;
      }
      var u;
      ae = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var g;
      g = te.current, te.current = null, Fe();
      try {
        if (c) {
          var p = function() {
            throw Error();
          };
          if (Object.defineProperty(p.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(p, []);
            } catch (b) {
              u = b;
            }
            Reflect.construct(t, [], p);
          } else {
            try {
              p.call();
            } catch (b) {
              u = b;
            }
            t.call(p.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (b) {
            u = b;
          }
          t();
        }
      } catch (b) {
        if (b && u && typeof b.stack == "string") {
          for (var d = b.stack.split(`
`), N = u.stack.split(`
`), w = d.length - 1, k = N.length - 1; w >= 1 && k >= 0 && d[w] !== N[k]; )
            k--;
          for (; w >= 1 && k >= 0; w--, k--)
            if (d[w] !== N[k]) {
              if (w !== 1 || k !== 1)
                do
                  if (w--, k--, k < 0 || d[w] !== N[k]) {
                    var M = `
` + d[w].replace(" at new ", " at ");
                    return t.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", t.displayName)), typeof t == "function" && U.set(t, M), M;
                  }
                while (w >= 1 && k >= 0);
              break;
            }
        }
      } finally {
        ae = !1, te.current = g, Oe(), Error.prepareStackTrace = h;
      }
      var O = t ? t.displayName || t.name : "", A = O ? q(O) : "";
      return typeof t == "function" && U.set(t, A), A;
    }
    function Ve(t, c, m) {
      return fe(t, !1);
    }
    function He(t) {
      var c = t.prototype;
      return !!(c && c.isReactComponent);
    }
    function G(t, c, m) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return fe(t, He(t));
      if (typeof t == "string")
        return q(t);
      switch (t) {
        case B:
          return q("Suspense");
        case x:
          return q("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case $:
            return Ve(t.render);
          case v:
            return G(t.type, c, m);
          case W: {
            var u = t, h = u._payload, g = u._init;
            try {
              return G(g(h), c, m);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, we = {}, ke = S.ReactDebugCurrentFrame;
    function J(t) {
      if (t) {
        var c = t._owner, m = G(t.type, t._source, c ? c.type : null);
        ke.setExtraStackFrame(m);
      } else
        ke.setExtraStackFrame(null);
    }
    function Ie(t, c, m, u, h) {
      {
        var g = Function.call.bind(V);
        for (var p in t)
          if (g(t, p)) {
            var d = void 0;
            try {
              if (typeof t[p] != "function") {
                var N = Error((u || "React class") + ": " + m + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw N.name = "Invariant Violation", N;
              }
              d = t[p](c, p, u, m, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              d = w;
            }
            d && !(d instanceof Error) && (J(h), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", m, p, typeof d), J(null)), d instanceof Error && !(d.message in we) && (we[d.message] = !0, J(h), f("Failed %s type: %s", m, d.message), J(null));
          }
      }
    }
    var Ye = Array.isArray;
    function ne(t) {
      return Ye(t);
    }
    function Ke(t) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, m = c && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return m;
      }
    }
    function qe(t) {
      try {
        return $e(t), !1;
      } catch {
        return !0;
      }
    }
    function $e(t) {
      return "" + t;
    }
    function je(t) {
      if (qe(t))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(t)), $e(t);
    }
    var Ce = S.ReactCurrentOwner, Ue = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ne, be;
    function Ge(t) {
      if (V.call(t, "ref")) {
        var c = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Je(t) {
      if (V.call(t, "key")) {
        var c = Object.getOwnPropertyDescriptor(t, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Xe(t, c) {
      typeof t.ref == "string" && Ce.current;
    }
    function Ze(t, c) {
      {
        var m = function() {
          Ne || (Ne = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        m.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: m,
          configurable: !0
        });
      }
    }
    function Qe(t, c) {
      {
        var m = function() {
          be || (be = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        m.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: m,
          configurable: !0
        });
      }
    }
    var et = function(t, c, m, u, h, g, p) {
      var d = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: t,
        key: c,
        ref: m,
        props: p,
        // Record the component responsible for creating this element.
        _owner: g
      };
      return d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(d, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.defineProperty(d, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    };
    function tt(t, c, m, u, h) {
      {
        var g, p = {}, d = null, N = null;
        m !== void 0 && (je(m), d = "" + m), Je(c) && (je(c.key), d = "" + c.key), Ge(c) && (N = c.ref, Xe(c, h));
        for (g in c)
          V.call(c, g) && !Ue.hasOwnProperty(g) && (p[g] = c[g]);
        if (t && t.defaultProps) {
          var w = t.defaultProps;
          for (g in w)
            p[g] === void 0 && (p[g] = w[g]);
        }
        if (d || N) {
          var k = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          d && Ze(p, k), N && Qe(p, k);
        }
        return et(t, d, N, h, u, Ce.current, p);
      }
    }
    var ie = S.ReactCurrentOwner, Ee = S.ReactDebugCurrentFrame;
    function F(t) {
      if (t) {
        var c = t._owner, m = G(t.type, t._source, c ? c.type : null);
        Ee.setExtraStackFrame(m);
      } else
        Ee.setExtraStackFrame(null);
    }
    var se;
    se = !1;
    function le(t) {
      return typeof t == "object" && t !== null && t.$$typeof === i;
    }
    function Se() {
      {
        if (ie.current) {
          var t = z(ie.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function rt(t) {
      return "";
    }
    var Me = {};
    function at(t) {
      {
        var c = Se();
        if (!c) {
          var m = typeof t == "string" ? t : t.displayName || t.name;
          m && (c = `

Check the top-level render call using <` + m + ">.");
        }
        return c;
      }
    }
    function Be(t, c) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var m = at(c);
        if (Me[m])
          return;
        Me[m] = !0;
        var u = "";
        t && t._owner && t._owner !== ie.current && (u = " It was passed a child from " + z(t._owner.type) + "."), F(t), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', m, u), F(null);
      }
    }
    function We(t, c) {
      {
        if (typeof t != "object")
          return;
        if (ne(t))
          for (var m = 0; m < t.length; m++) {
            var u = t[m];
            le(u) && Be(u, c);
          }
        else if (le(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var h = X(t);
          if (typeof h == "function" && h !== t.entries)
            for (var g = h.call(t), p; !(p = g.next()).done; )
              le(p.value) && Be(p.value, c);
        }
      }
    }
    function nt(t) {
      {
        var c = t.type;
        if (c == null || typeof c == "string")
          return;
        var m;
        if (typeof c == "function")
          m = c.propTypes;
        else if (typeof c == "object" && (c.$$typeof === $ || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        c.$$typeof === v))
          m = c.propTypes;
        else
          return;
        if (m) {
          var u = z(c);
          Ie(m, t.props, "prop", u, t);
        } else if (c.PropTypes !== void 0 && !se) {
          se = !0;
          var h = z(c);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function it(t) {
      {
        for (var c = Object.keys(t.props), m = 0; m < c.length; m++) {
          var u = c[m];
          if (u !== "children" && u !== "key") {
            F(t), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), F(null);
            break;
          }
        }
        t.ref !== null && (F(t), f("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    var Re = {};
    function ze(t, c, m, u, h, g) {
      {
        var p = R(t);
        if (!p) {
          var d = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (d += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var N = rt();
          N ? d += N : d += Se();
          var w;
          t === null ? w = "null" : ne(t) ? w = "array" : t !== void 0 && t.$$typeof === i ? (w = "<" + (z(t.type) || "Unknown") + " />", d = " Did you accidentally export a JSX literal instead of a component?") : w = typeof t, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, d);
        }
        var k = tt(t, c, m, h, g);
        if (k == null)
          return k;
        if (p) {
          var M = c.children;
          if (M !== void 0)
            if (u)
              if (ne(M)) {
                for (var O = 0; O < M.length; O++)
                  We(M[O], t);
                Object.freeze && Object.freeze(M);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              We(M, t);
        }
        if (V.call(c, "key")) {
          var A = z(t), b = Object.keys(c).filter(function(yt) {
            return yt !== "key";
          }), oe = b.length > 0 ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Re[A + oe]) {
            var mt = b.length > 0 ? "{" + b.join(": ..., ") + ": ...}" : "{}";
            f(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, oe, A, mt, A), Re[A + oe] = !0;
          }
        }
        return t === e ? it(k) : nt(k), k;
      }
    }
    function st(t, c, m) {
      return ze(t, c, m, !0);
    }
    function lt(t, c, m) {
      return ze(t, c, m, !1);
    }
    var ot = lt, ct = st;
    I.Fragment = e, I.jsx = ot, I.jsxs = ct;
  }()), I;
}
process.env.NODE_ENV === "production" ? ce.exports = pt() : ce.exports = ht();
var a = ce.exports;
const xt = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-blobavatar variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), vt = ({
  variant: n = "primary",
  size: i = "md",
  children: r,
  className: e = ""
}) => /* @__PURE__ */ a.jsx("span", { className: `crml-badge variant-${n} size-${i} ${e}`, children: r }), ft = ({
  variant: n = "pink",
  tilt: i = "right",
  star: r = !1,
  children: e,
  className: s = ""
}) => /* @__PURE__ */ a.jsxs("div", { className: `crml-sticker variant-${n} tilt-${i} ${s}`, children: [
  r && /* @__PURE__ */ a.jsx("span", { children: "★" }),
  /* @__PURE__ */ a.jsx("span", { children: e })
] }), wt = ({
  variant: n = "lime",
  size: i = "md",
  iconLeft: r,
  iconRight: e,
  children: s,
  className: l = "",
  disabled: o,
  ...C
}) => /* @__PURE__ */ a.jsxs(
  "button",
  {
    className: `crml-bouncy-btn variant-${n} size-${i} ${l}`,
    disabled: o,
    ...C,
    children: [
      r && /* @__PURE__ */ a.jsx("span", { className: "crml-icon-left", children: r }),
      /* @__PURE__ */ a.jsx("span", { children: s }),
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-icon-right", children: e })
    ]
  }
), kt = ({
  variant: n = "primary",
  size: i = "md",
  iconLeft: r,
  iconRight: e,
  children: s,
  className: l = "",
  disabled: o,
  ...C
}) => /* @__PURE__ */ a.jsxs(
  "button",
  {
    className: `crml-btn variant-${n} size-${i} ${l}`,
    disabled: o,
    ...C,
    children: [
      r && /* @__PURE__ */ a.jsx("span", { className: "crml-icon-left", children: r }),
      /* @__PURE__ */ a.jsx("span", { children: s }),
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-icon-right", children: e })
    ]
  }
), $t = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-checkbox variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), jt = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-divider variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), De = {
  bolt: {
    name: "bolt",
    category: "Actions & System",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "polygon",
        points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
        fill: "currentColor"
      }
    ]
  },
  terminal: {
    name: "terminal",
    category: "Actions & System",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "polyline",
        points: "4 17 10 11 4 5"
      },
      {
        tag: "line",
        x1: 12,
        y1: 19,
        x2: 20,
        y2: 19,
        strokeWidth: 3
      }
    ]
  },
  coffee: {
    name: "coffee",
    category: "Actions & System",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M18 8h1a4 4 0 0 1 0 8h-1"
      },
      {
        tag: "path",
        d: "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"
      },
      {
        tag: "line",
        x1: 6,
        y1: 1,
        x2: 6,
        y2: 4
      },
      {
        tag: "line",
        x1: 10,
        y1: 1,
        x2: 10,
        y2: 4
      },
      {
        tag: "line",
        x1: 14,
        y1: 1,
        x2: 14,
        y2: 4
      }
    ]
  },
  search: {
    name: "search",
    category: "Actions & System",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "circle",
        cx: 10.5,
        cy: 10.5,
        r: 7.5
      },
      {
        tag: "line",
        x1: 21,
        y1: 21,
        x2: 15.8,
        y2: 15.8,
        strokeWidth: 3
      }
    ]
  },
  settings: {
    name: "settings",
    category: "Actions & System",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "circle",
        cx: 12,
        cy: 12,
        r: 3
      },
      {
        tag: "path",
        d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
      }
    ]
  },
  sliders: {
    name: "sliders",
    category: "Actions & System",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "line",
        x1: 4,
        y1: 21,
        x2: 4,
        y2: 14
      },
      {
        tag: "line",
        x1: 4,
        y1: 10,
        x2: 4,
        y2: 3
      },
      {
        tag: "line",
        x1: 12,
        y1: 21,
        x2: 12,
        y2: 12
      },
      {
        tag: "line",
        x1: 12,
        y1: 8,
        x2: 12,
        y2: 3
      },
      {
        tag: "line",
        x1: 20,
        y1: 21,
        x2: 20,
        y2: 16
      },
      {
        tag: "line",
        x1: 20,
        y1: 12,
        x2: 20,
        y2: 3
      },
      {
        tag: "rect",
        x: 2,
        y: 10,
        width: 4,
        height: 4,
        fill: "currentColor"
      },
      {
        tag: "rect",
        x: 10,
        y: 8,
        width: 4,
        height: 4,
        fill: "currentColor"
      },
      {
        tag: "rect",
        x: 18,
        y: 12,
        width: 4,
        height: 4,
        fill: "currentColor"
      }
    ]
  },
  filter: {
    name: "filter",
    category: "Actions & System",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "polygon",
        points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
      }
    ]
  },
  cross: {
    name: "cross",
    category: "Actions & System",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "line",
        x1: 18,
        y1: 6,
        x2: 6,
        y2: 18,
        strokeWidth: 3
      },
      {
        tag: "line",
        x1: 6,
        y1: 6,
        x2: 18,
        y2: 18,
        strokeWidth: 3
      }
    ]
  },
  check: {
    name: "check",
    category: "Actions & System",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "polyline",
        points: "20 6 9 17 4 12",
        strokeWidth: 3
      }
    ]
  },
  plus: {
    name: "plus",
    category: "Actions & System",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "line",
        x1: 12,
        y1: 5,
        x2: 12,
        y2: 19,
        strokeWidth: 3
      },
      {
        tag: "line",
        x1: 5,
        y1: 12,
        x2: 19,
        y2: 12,
        strokeWidth: 3
      }
    ]
  },
  minus: {
    name: "minus",
    category: "Actions & System",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "line",
        x1: 5,
        y1: 12,
        x2: 19,
        y2: 12,
        strokeWidth: 3
      }
    ]
  },
  trash: {
    name: "trash",
    category: "Actions & System",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "polyline",
        points: "3 6 5 6 21 6"
      },
      {
        tag: "path",
        d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
      },
      {
        tag: "line",
        x1: 10,
        y1: 11,
        x2: 10,
        y2: 17
      },
      {
        tag: "line",
        x1: 14,
        y1: 11,
        x2: 14,
        y2: 17
      }
    ]
  },
  edit: {
    name: "edit",
    category: "Actions & System",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
      },
      {
        tag: "path",
        d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
      }
    ]
  },
  copy: {
    name: "copy",
    category: "Actions & System",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "rect",
        x: 9,
        y: 9,
        width: 13,
        height: 13,
        rx: 2,
        ry: 2
      },
      {
        tag: "path",
        d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
      }
    ]
  },
  share: {
    name: "share",
    category: "Actions & System",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "circle",
        cx: 18,
        cy: 5,
        r: 3
      },
      {
        tag: "circle",
        cx: 6,
        cy: 12,
        r: 3
      },
      {
        tag: "circle",
        cx: 18,
        cy: 19,
        r: 3
      },
      {
        tag: "line",
        x1: 8.59,
        y1: 13.51,
        x2: 15.42,
        y2: 17.49
      },
      {
        tag: "line",
        x1: 15.41,
        y1: 6.51,
        x2: 8.59,
        y2: 10.49
      }
    ]
  },
  download: {
    name: "download",
    category: "Actions & System",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
      },
      {
        tag: "polyline",
        points: "7 10 12 15 17 10",
        strokeWidth: 3
      },
      {
        tag: "line",
        x1: 12,
        y1: 15,
        x2: 12,
        y2: 3,
        strokeWidth: 3
      }
    ]
  },
  upload: {
    name: "upload",
    category: "Actions & System",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
      },
      {
        tag: "polyline",
        points: "17 8 12 3 7 8",
        strokeWidth: 3
      },
      {
        tag: "line",
        x1: 12,
        y1: 3,
        x2: 12,
        y2: 15,
        strokeWidth: 3
      }
    ]
  },
  refresh: {
    name: "refresh",
    category: "Actions & System",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "polyline",
        points: "23 4 23 10 17 10"
      },
      {
        tag: "polyline",
        points: "1 20 1 14 7 14"
      },
      {
        tag: "path",
        d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
      }
    ]
  },
  power: {
    name: "power",
    category: "Actions & System",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M18.36 6.64a9 9 0 1 1-12.73 0"
      },
      {
        tag: "line",
        x1: 12,
        y1: 2,
        x2: 12,
        y2: 12,
        strokeWidth: 3
      }
    ]
  },
  maximize: {
    name: "maximize",
    category: "Actions & System",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
      }
    ]
  },
  "arrow-right": {
    name: "arrow-right",
    category: "Navigation",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "line",
        x1: 5,
        y1: 12,
        x2: 19,
        y2: 12,
        strokeWidth: 3
      },
      {
        tag: "polyline",
        points: "12 5 19 12 12 19",
        strokeWidth: 3
      }
    ]
  },
  "arrow-left": {
    name: "arrow-left",
    category: "Navigation",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "line",
        x1: 19,
        y1: 12,
        x2: 5,
        y2: 12,
        strokeWidth: 3
      },
      {
        tag: "polyline",
        points: "12 19 5 12 12 5",
        strokeWidth: 3
      }
    ]
  },
  "arrow-up": {
    name: "arrow-up",
    category: "Navigation",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "line",
        x1: 12,
        y1: 19,
        x2: 12,
        y2: 5,
        strokeWidth: 3
      },
      {
        tag: "polyline",
        points: "5 12 12 5 19 12",
        strokeWidth: 3
      }
    ]
  },
  "arrow-down": {
    name: "arrow-down",
    category: "Navigation",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "line",
        x1: 12,
        y1: 5,
        x2: 12,
        y2: 19,
        strokeWidth: 3
      },
      {
        tag: "polyline",
        points: "19 12 12 19 5 12",
        strokeWidth: 3
      }
    ]
  },
  "arrow-up-right": {
    name: "arrow-up-right",
    category: "Navigation",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "line",
        x1: 7,
        y1: 17,
        x2: 17,
        y2: 7,
        strokeWidth: 3
      },
      {
        tag: "polyline",
        points: "7 7 17 7 17 17",
        strokeWidth: 3
      }
    ]
  },
  "chevron-right": {
    name: "chevron-right",
    category: "Navigation",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "polyline",
        points: "9 18 15 12 9 6",
        strokeWidth: 3
      }
    ]
  },
  "chevron-left": {
    name: "chevron-left",
    category: "Navigation",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "polyline",
        points: "15 18 9 12 15 6",
        strokeWidth: 3
      }
    ]
  },
  "chevron-up": {
    name: "chevron-up",
    category: "Navigation",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "polyline",
        points: "18 15 12 9 6 15",
        strokeWidth: 3
      }
    ]
  },
  "chevron-down": {
    name: "chevron-down",
    category: "Navigation",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "polyline",
        points: "6 9 12 15 18 9",
        strokeWidth: 3
      }
    ]
  },
  menu: {
    name: "menu",
    category: "Navigation",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "line",
        x1: 3,
        y1: 6,
        x2: 21,
        y2: 6,
        strokeWidth: 3
      },
      {
        tag: "line",
        x1: 3,
        y1: 12,
        x2: 21,
        y2: 12,
        strokeWidth: 3
      },
      {
        tag: "line",
        x1: 3,
        y1: 18,
        x2: 21,
        y2: 18,
        strokeWidth: 3
      }
    ]
  },
  grid: {
    name: "grid",
    category: "Navigation",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "rect",
        x: 3,
        y: 3,
        width: 7,
        height: 7
      },
      {
        tag: "rect",
        x: 14,
        y: 3,
        width: 7,
        height: 7
      },
      {
        tag: "rect",
        x: 14,
        y: 14,
        width: 7,
        height: 7
      },
      {
        tag: "rect",
        x: 3,
        y: 14,
        width: 7,
        height: 7
      }
    ]
  },
  compass: {
    name: "compass",
    category: "Navigation",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "circle",
        cx: 12,
        cy: 12,
        r: 10
      },
      {
        tag: "polygon",
        points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",
        fill: "currentColor"
      }
    ]
  },
  anchor: {
    name: "anchor",
    category: "Navigation",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "circle",
        cx: 12,
        cy: 5,
        r: 3
      },
      {
        tag: "line",
        x1: 12,
        y1: 22,
        x2: 12,
        y2: 8
      },
      {
        tag: "path",
        d: "M5 12H2a10 10 0 0 0 20 0h-3"
      }
    ]
  },
  "map-pin": {
    name: "map-pin",
    category: "Navigation",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
      },
      {
        tag: "circle",
        cx: 12,
        cy: 10,
        r: 3
      }
    ]
  },
  disk: {
    name: "disk",
    category: "Hardware & Cyber",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
      },
      {
        tag: "polyline",
        points: "17 21 17 13 7 13 7 21"
      },
      {
        tag: "polyline",
        points: "7 3 7 8 15 8"
      }
    ]
  },
  radar: {
    name: "radar",
    category: "Hardware & Cyber",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "circle",
        cx: 12,
        cy: 12,
        r: 10
      },
      {
        tag: "circle",
        cx: 12,
        cy: 12,
        r: 5
      },
      {
        tag: "line",
        x1: 12,
        y1: 2,
        x2: 12,
        y2: 22
      },
      {
        tag: "line",
        x1: 2,
        y1: 12,
        x2: 22,
        y2: 12
      }
    ]
  },
  cpu: {
    name: "cpu",
    category: "Hardware & Cyber",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "rect",
        x: 4,
        y: 4,
        width: 16,
        height: 16,
        rx: 2
      },
      {
        tag: "rect",
        x: 9,
        y: 9,
        width: 6,
        height: 6,
        fill: "currentColor"
      },
      {
        tag: "line",
        x1: 9,
        y1: 1,
        x2: 9,
        y2: 4
      },
      {
        tag: "line",
        x1: 15,
        y1: 1,
        x2: 15,
        y2: 4
      },
      {
        tag: "line",
        x1: 9,
        y1: 20,
        x2: 9,
        y2: 23
      },
      {
        tag: "line",
        x1: 15,
        y1: 20,
        x2: 15,
        y2: 23
      },
      {
        tag: "line",
        x1: 20,
        y1: 9,
        x2: 23,
        y2: 9
      },
      {
        tag: "line",
        x1: 20,
        y1: 15,
        x2: 23,
        y2: 15
      },
      {
        tag: "line",
        x1: 1,
        y1: 9,
        x2: 4,
        y2: 9
      },
      {
        tag: "line",
        x1: 1,
        y1: 15,
        x2: 4,
        y2: 15
      }
    ]
  },
  chip: {
    name: "chip",
    category: "Hardware & Cyber",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "rect",
        x: 5,
        y: 5,
        width: 14,
        height: 14
      },
      {
        tag: "circle",
        cx: 12,
        cy: 12,
        r: 2,
        fill: "currentColor"
      },
      {
        tag: "line",
        x1: 8,
        y1: 1,
        x2: 8,
        y2: 5
      },
      {
        tag: "line",
        x1: 16,
        y1: 1,
        x2: 16,
        y2: 5
      },
      {
        tag: "line",
        x1: 8,
        y1: 19,
        x2: 8,
        y2: 23
      },
      {
        tag: "line",
        x1: 16,
        y1: 19,
        x2: 16,
        y2: 23
      }
    ]
  },
  database: {
    name: "database",
    category: "Hardware & Cyber",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "ellipse",
        cx: 12,
        cy: 5,
        rx: 9,
        ry: 3
      },
      {
        tag: "path",
        d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
      },
      {
        tag: "path",
        d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
      }
    ]
  },
  server: {
    name: "server",
    category: "Hardware & Cyber",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "rect",
        x: 2,
        y: 2,
        width: 20,
        height: 8,
        rx: 2,
        ry: 2
      },
      {
        tag: "rect",
        x: 2,
        y: 14,
        width: 20,
        height: 8,
        rx: 2,
        ry: 2
      },
      {
        tag: "line",
        x1: 6,
        y1: 6,
        x2: 6.01,
        y2: 6,
        strokeWidth: 3
      },
      {
        tag: "line",
        x1: 6,
        y1: 18,
        x2: 6.01,
        y2: 18,
        strokeWidth: 3
      }
    ]
  },
  cloud: {
    name: "cloud",
    category: "Hardware & Cyber",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
      }
    ]
  },
  monitor: {
    name: "monitor",
    category: "Hardware & Cyber",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "rect",
        x: 2,
        y: 3,
        width: 20,
        height: 14,
        rx: 2,
        ry: 2
      },
      {
        tag: "line",
        x1: 8,
        y1: 21,
        x2: 16,
        y2: 21,
        strokeWidth: 3
      },
      {
        tag: "line",
        x1: 12,
        y1: 17,
        x2: 12,
        y2: 21
      }
    ]
  },
  smartphone: {
    name: "smartphone",
    category: "Hardware & Cyber",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "rect",
        x: 5,
        y: 2,
        width: 14,
        height: 20,
        rx: 2,
        ry: 2
      },
      {
        tag: "line",
        x1: 12,
        y1: 18,
        x2: 12.01,
        y2: 18,
        strokeWidth: 3
      }
    ]
  },
  gamepad: {
    name: "gamepad",
    category: "Hardware & Cyber",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M6 12h4m-2-2v4"
      },
      {
        tag: "circle",
        cx: 15,
        cy: 11,
        r: 1,
        fill: "currentColor"
      },
      {
        tag: "circle",
        cx: 18,
        cy: 13,
        r: 1,
        fill: "currentColor"
      },
      {
        tag: "rect",
        x: 2,
        y: 6,
        width: 20,
        height: 12,
        rx: 4
      }
    ]
  },
  cassette: {
    name: "cassette",
    category: "Hardware & Cyber",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "rect",
        x: 2,
        y: 4,
        width: 20,
        height: 16,
        rx: 2
      },
      {
        tag: "circle",
        cx: 8,
        cy: 12,
        r: 2.5
      },
      {
        tag: "circle",
        cx: 16,
        cy: 12,
        r: 2.5
      },
      {
        tag: "path",
        d: "M6 17h12l-1-4H7l-1 4z"
      }
    ]
  },
  "battery-charging": {
    name: "battery-charging",
    category: "Hardware & Cyber",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"
      },
      {
        tag: "line",
        x1: 23,
        y1: 13,
        x2: 23,
        y2: 11
      },
      {
        tag: "polyline",
        points: "11 6 7 12 13 12 9 18",
        fill: "currentColor"
      }
    ]
  },
  "battery-full": {
    name: "battery-full",
    category: "Hardware & Cyber",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "rect",
        x: 1,
        y: 6,
        width: 18,
        height: 12,
        rx: 2
      },
      {
        tag: "line",
        x1: 23,
        y1: 13,
        x2: 23,
        y2: 11,
        strokeWidth: 3
      },
      {
        tag: "rect",
        x: 4,
        y: 9,
        width: 12,
        height: 6,
        fill: "currentColor"
      }
    ]
  },
  wifi: {
    name: "wifi",
    category: "Hardware & Cyber",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M5 12.55a11 11 0 0 1 14.08 0"
      },
      {
        tag: "path",
        d: "M1.42 9a16 16 0 0 1 21.16 0"
      },
      {
        tag: "path",
        d: "M8.53 16.11a6 6 0 0 1 6.95 0"
      },
      {
        tag: "line",
        x1: 12,
        y1: 20,
        x2: 12.01,
        y2: 20,
        strokeWidth: 4
      }
    ]
  },
  bluetooth: {
    name: "bluetooth",
    category: "Hardware & Cyber",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "polyline",
        points: "6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"
      }
    ]
  },
  speaker: {
    name: "speaker",
    category: "Hardware & Cyber",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "rect",
        x: 4,
        y: 2,
        width: 16,
        height: 20,
        rx: 2
      },
      {
        tag: "circle",
        cx: 12,
        cy: 14,
        r: 4
      },
      {
        tag: "line",
        x1: 12,
        y1: 6,
        x2: 12.01,
        y2: 6,
        strokeWidth: 3
      }
    ]
  },
  lock: {
    name: "lock",
    category: "Security & Status",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "rect",
        x: 3,
        y: 11,
        width: 18,
        height: 11,
        rx: 2,
        ry: 2
      },
      {
        tag: "path",
        d: "M7 11V7a5 5 0 0 1 10 0v4"
      },
      {
        tag: "circle",
        cx: 12,
        cy: 16,
        r: 1.5,
        fill: "currentColor"
      }
    ]
  },
  unlock: {
    name: "unlock",
    category: "Security & Status",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "rect",
        x: 3,
        y: 11,
        width: 18,
        height: 11,
        rx: 2,
        ry: 2
      },
      {
        tag: "path",
        d: "M7 11V7a5 5 0 0 1 9.9-1"
      },
      {
        tag: "circle",
        cx: 12,
        cy: 16,
        r: 1.5,
        fill: "currentColor"
      }
    ]
  },
  key: {
    name: "key",
    category: "Security & Status",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M21 2l-2 2m-1.5 1.5L14 9l-3-3-8.5 8.5a4.95 4.95 0 0 0 7 7L18 13l3.5-3.5a2.12 2.12 0 0 0 0-3L21 2z"
      },
      {
        tag: "circle",
        cx: 7.5,
        cy: 16.5,
        r: 1.5
      }
    ]
  },
  shield: {
    name: "shield",
    category: "Security & Status",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      }
    ]
  },
  "shield-alert": {
    name: "shield-alert",
    category: "Security & Status",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      },
      {
        tag: "line",
        x1: 12,
        y1: 8,
        x2: 12,
        y2: 12,
        strokeWidth: 3
      },
      {
        tag: "line",
        x1: 12,
        y1: 16,
        x2: 12.01,
        y2: 16,
        strokeWidth: 3
      }
    ]
  },
  eye: {
    name: "eye",
    category: "Security & Status",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
      },
      {
        tag: "circle",
        cx: 12,
        cy: 12,
        r: 3,
        fill: "currentColor"
      }
    ]
  },
  "eye-closed": {
    name: "eye-closed",
    category: "Security & Status",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
      },
      {
        tag: "line",
        x1: 1,
        y1: 1,
        x2: 23,
        y2: 23,
        strokeWidth: 3
      }
    ]
  },
  "face-id": {
    name: "face-id",
    category: "Security & Status",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
      },
      {
        tag: "line",
        x1: 9,
        y1: 9,
        x2: 9.01,
        y2: 9,
        strokeWidth: 3
      },
      {
        tag: "line",
        x1: 15,
        y1: 9,
        x2: 15.01,
        y2: 9,
        strokeWidth: 3
      },
      {
        tag: "path",
        d: "M10 15c.67.67 1.33 1 2 1s1.33-.33 2-1"
      }
    ]
  },
  fingerprint: {
    name: "fingerprint",
    category: "Security & Status",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"
      },
      {
        tag: "path",
        d: "M5 19.5C5.5 18 6 15 6 12c0-3.5 2.5-6 6-6a6 6 0 0 1 6 6c0 2.5-.5 5-1.5 7.5"
      },
      {
        tag: "path",
        d: "M12 10a2 2 0 0 0-2 2c0 3 1 6 2 8"
      },
      {
        tag: "path",
        d: "M9 13a3 3 0 0 1 6 0c0 4-1 6-2 9"
      }
    ]
  },
  "alert-circle": {
    name: "alert-circle",
    category: "Security & Status",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "circle",
        cx: 12,
        cy: 12,
        r: 10
      },
      {
        tag: "line",
        x1: 12,
        y1: 8,
        x2: 12,
        y2: 12,
        strokeWidth: 3
      },
      {
        tag: "line",
        x1: 12,
        y1: 16,
        x2: 12.01,
        y2: 16,
        strokeWidth: 3
      }
    ]
  },
  "alert-triangle": {
    name: "alert-triangle",
    category: "Security & Status",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
      },
      {
        tag: "line",
        x1: 12,
        y1: 9,
        x2: 12,
        y2: 13,
        strokeWidth: 3
      },
      {
        tag: "line",
        x1: 12,
        y1: 17,
        x2: 12.01,
        y2: 17,
        strokeWidth: 3
      }
    ]
  },
  info: {
    name: "info",
    category: "Security & Status",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "circle",
        cx: 12,
        cy: 12,
        r: 10
      },
      {
        tag: "line",
        x1: 12,
        y1: 16,
        x2: 12,
        y2: 12,
        strokeWidth: 3
      },
      {
        tag: "line",
        x1: 12,
        y1: 8,
        x2: 12.01,
        y2: 8,
        strokeWidth: 3
      }
    ]
  },
  star: {
    name: "star",
    category: "Y2K Streetwear",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "polygon",
        points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
        fill: "currentColor"
      }
    ]
  },
  sparkle: {
    name: "sparkle",
    category: "Y2K Streetwear",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z",
        fill: "currentColor"
      }
    ]
  },
  sparkles: {
    name: "sparkles",
    category: "Y2K Streetwear",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M10 2L11.5 6.5L16 8L11.5 9.5L10 14L8.5 9.5L4 8L8.5 6.5L10 2Z",
        fill: "currentColor"
      },
      {
        tag: "path",
        d: "M18 13L19 16L22 17L19 18L18 21L17 18L14 17L17 16L18 13Z",
        fill: "currentColor"
      }
    ]
  },
  heart: {
    name: "heart",
    category: "Y2K Streetwear",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
        fill: "currentColor"
      }
    ]
  },
  flame: {
    name: "flame",
    category: "Y2K Streetwear",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
        fill: "currentColor"
      }
    ]
  },
  skull: {
    name: "skull",
    category: "Y2K Streetwear",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M12 2a8 8 0 0 0-8 8c0 3.5 2 6 4 7v3h8v-3c2-1 4-3.5 4-7a8 8 0 0 0-8-8z"
      },
      {
        tag: "circle",
        cx: 9,
        cy: 10,
        r: 1.5,
        fill: "currentColor"
      },
      {
        tag: "circle",
        cx: 15,
        cy: 10,
        r: 1.5,
        fill: "currentColor"
      },
      {
        tag: "line",
        x1: 10,
        y1: 17,
        x2: 10,
        y2: 20
      },
      {
        tag: "line",
        x1: 14,
        y1: 17,
        x2: 14,
        y2: 20
      }
    ]
  },
  target: {
    name: "target",
    category: "Y2K Streetwear",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "circle",
        cx: 12,
        cy: 12,
        r: 10
      },
      {
        tag: "circle",
        cx: 12,
        cy: 12,
        r: 6
      },
      {
        tag: "circle",
        cx: 12,
        cy: 12,
        r: 2,
        fill: "currentColor"
      }
    ]
  },
  zap: {
    name: "zap",
    category: "Y2K Streetwear",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "polygon",
        points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
        fill: "currentColor"
      }
    ]
  },
  crown: {
    name: "crown",
    category: "Y2K Streetwear",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z",
        fill: "currentColor"
      },
      {
        tag: "rect",
        x: 5,
        y: 18,
        width: 14,
        height: 3
      }
    ]
  },
  gem: {
    name: "gem",
    category: "Y2K Streetwear",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "polygon",
        points: "6 3 18 3 22 9 12 22 2 9 6 3"
      },
      {
        tag: "polyline",
        points: "2 9 12 22 22 9"
      },
      {
        tag: "polyline",
        points: "6 3 12 22 18 3"
      }
    ]
  },
  "badge-check": {
    name: "badge-check",
    category: "Y2K Streetwear",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M12 2l2.4 2.8 3.7-.5 1.1 3.5 3.4 1.5-1 3.6 2 3.1-2.7 2.5.2 3.7-3.7.9-1.8 3.3L12 22l-3.6 1.4-1.8-3.3-3.7-.9.2-3.7-2.7-2.5 2-3.1-1-3.6 3.4-1.5 1.1-3.5 3.7.5L12 2z"
      },
      {
        tag: "polyline",
        points: "8.5 12.5 11 15 16 9.5",
        strokeWidth: 3
      }
    ]
  },
  tag: {
    name: "tag",
    category: "Y2K Streetwear",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
      },
      {
        tag: "circle",
        cx: 7,
        cy: 7,
        r: 1.5,
        fill: "currentColor"
      }
    ]
  },
  sticker: {
    name: "sticker",
    category: "Y2K Streetwear",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M4 4h16v10l-6 6H4V4z"
      },
      {
        tag: "polyline",
        points: "14 20 14 14 20 14",
        fill: "currentColor"
      }
    ]
  },
  flag: {
    name: "flag",
    category: "Y2K Streetwear",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",
        fill: "currentColor"
      },
      {
        tag: "line",
        x1: 4,
        y1: 22,
        x2: 4,
        y2: 15,
        strokeWidth: 3
      }
    ]
  },
  sun: {
    name: "sun",
    category: "Time & Weather",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "circle",
        cx: 12,
        cy: 12,
        r: 5,
        fill: "currentColor"
      },
      {
        tag: "line",
        x1: 12,
        y1: 1,
        x2: 12,
        y2: 3,
        strokeWidth: 3
      },
      {
        tag: "line",
        x1: 12,
        y1: 21,
        x2: 12,
        y2: 23,
        strokeWidth: 3
      },
      {
        tag: "line",
        x1: 4.22,
        y1: 4.22,
        x2: 5.64,
        y2: 5.64,
        strokeWidth: 3
      },
      {
        tag: "line",
        x1: 18.36,
        y1: 18.36,
        x2: 19.78,
        y2: 19.78,
        strokeWidth: 3
      },
      {
        tag: "line",
        x1: 1,
        y1: 12,
        x2: 3,
        y2: 12,
        strokeWidth: 3
      },
      {
        tag: "line",
        x1: 21,
        y1: 12,
        x2: 23,
        y2: 12,
        strokeWidth: 3
      },
      {
        tag: "line",
        x1: 4.22,
        y1: 19.78,
        x2: 5.64,
        y2: 18.36,
        strokeWidth: 3
      },
      {
        tag: "line",
        x1: 18.36,
        y1: 5.64,
        x2: 19.78,
        y2: 4.22,
        strokeWidth: 3
      }
    ]
  },
  moon: {
    name: "moon",
    category: "Time & Weather",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",
        fill: "currentColor"
      }
    ]
  },
  "cloud-rain": {
    name: "cloud-rain",
    category: "Time & Weather",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M16 13a4 4 0 0 0-7.8-1.5A5 5 0 0 0 4 16h13a3 3 0 0 0 0-6h-.3"
      },
      {
        tag: "line",
        x1: 8,
        y1: 19,
        x2: 8,
        y2: 22,
        strokeWidth: 2.5
      },
      {
        tag: "line",
        x1: 12,
        y1: 19,
        x2: 12,
        y2: 22,
        strokeWidth: 2.5
      },
      {
        tag: "line",
        x1: 16,
        y1: 19,
        x2: 16,
        y2: 22,
        strokeWidth: 2.5
      }
    ]
  },
  calendar: {
    name: "calendar",
    category: "Time & Weather",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "rect",
        x: 3,
        y: 4,
        width: 18,
        height: 18,
        rx: 2,
        ry: 2
      },
      {
        tag: "line",
        x1: 16,
        y1: 2,
        x2: 16,
        y2: 6,
        strokeWidth: 3
      },
      {
        tag: "line",
        x1: 8,
        y1: 2,
        x2: 8,
        y2: 6,
        strokeWidth: 3
      },
      {
        tag: "line",
        x1: 3,
        y1: 10,
        x2: 21,
        y2: 10,
        strokeWidth: 3
      }
    ]
  },
  clock: {
    name: "clock",
    category: "Time & Weather",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "circle",
        cx: 12,
        cy: 12,
        r: 10
      },
      {
        tag: "polyline",
        points: "12 6 12 12 16 14",
        strokeWidth: 3
      }
    ]
  },
  timer: {
    name: "timer",
    category: "Time & Weather",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "line",
        x1: 10,
        y1: 2,
        x2: 14,
        y2: 2,
        strokeWidth: 3
      },
      {
        tag: "circle",
        cx: 12,
        cy: 14,
        r: 8
      },
      {
        tag: "line",
        x1: 12,
        y1: 14,
        x2: 15,
        y2: 11,
        strokeWidth: 2.5
      }
    ]
  },
  hourglass: {
    name: "hourglass",
    category: "Time & Weather",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M5 22h14"
      },
      {
        tag: "path",
        d: "M5 2h14"
      },
      {
        tag: "path",
        d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"
      },
      {
        tag: "path",
        d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"
      }
    ]
  },
  rocket: {
    name: "rocket",
    category: "Time & Weather",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
      },
      {
        tag: "path",
        d: "M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2s-.7 7.5-6.05 11a22 22 0 0 1-3.95 2z"
      },
      {
        tag: "circle",
        cx: 15,
        cy: 9,
        r: 1.5,
        fill: "currentColor"
      }
    ]
  },
  planet: {
    name: "planet",
    category: "Time & Weather",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "circle",
        cx: 12,
        cy: 12,
        r: 7
      },
      {
        tag: "path",
        d: "M2 12c2.5-4 12.5-6 20 0M2 12c3 4 12.5 6 18.5 1.5"
      }
    ]
  },
  comet: {
    name: "comet",
    category: "Time & Weather",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "circle",
        cx: 18,
        cy: 6,
        r: 4,
        fill: "currentColor"
      },
      {
        tag: "line",
        x1: 15,
        y1: 9,
        x2: 3,
        y2: 21,
        strokeWidth: 3
      },
      {
        tag: "line",
        x1: 12,
        y1: 5,
        x2: 4,
        y2: 13,
        strokeWidth: 2
      },
      {
        tag: "line",
        x1: 19,
        y1: 12,
        x2: 11,
        y2: 20,
        strokeWidth: 2
      }
    ]
  },
  chat: {
    name: "chat",
    category: "Communication & Media",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
      }
    ]
  },
  "message-square": {
    name: "message-square",
    category: "Communication & Media",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
      },
      {
        tag: "line",
        x1: 8,
        y1: 9,
        x2: 16,
        y2: 9,
        strokeWidth: 2.5
      },
      {
        tag: "line",
        x1: 8,
        y1: 13,
        x2: 13,
        y2: 13,
        strokeWidth: 2.5
      }
    ]
  },
  mail: {
    name: "mail",
    category: "Communication & Media",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
      },
      {
        tag: "polyline",
        points: "22 6 12 13 2 6",
        strokeWidth: 2.5
      }
    ]
  },
  bell: {
    name: "bell",
    category: "Communication & Media",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
      },
      {
        tag: "path",
        d: "M13.73 21a2 2 0 0 1-3.46 0"
      }
    ]
  },
  user: {
    name: "user",
    category: "Communication & Media",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
      },
      {
        tag: "circle",
        cx: 12,
        cy: 7,
        r: 4,
        fill: "currentColor"
      }
    ]
  },
  users: {
    name: "users",
    category: "Communication & Media",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
      },
      {
        tag: "circle",
        cx: 9,
        cy: 7,
        r: 4
      },
      {
        tag: "path",
        d: "M23 21v-2a4 4 0 0 0-3-3.87"
      },
      {
        tag: "path",
        d: "M16 3.13a4 4 0 0 1 0 7.75"
      }
    ]
  },
  "user-plus": {
    name: "user-plus",
    category: "Communication & Media",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
      },
      {
        tag: "circle",
        cx: 8.5,
        cy: 7,
        r: 4
      },
      {
        tag: "line",
        x1: 20,
        y1: 8,
        x2: 20,
        y2: 14,
        strokeWidth: 3
      },
      {
        tag: "line",
        x1: 17,
        y1: 11,
        x2: 23,
        y2: 11,
        strokeWidth: 3
      }
    ]
  },
  camera: {
    name: "camera",
    category: "Communication & Media",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
      },
      {
        tag: "circle",
        cx: 12,
        cy: 13,
        r: 4
      }
    ]
  },
  video: {
    name: "video",
    category: "Communication & Media",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "polygon",
        points: "23 7 16 12 23 17 23 7",
        fill: "currentColor"
      },
      {
        tag: "rect",
        x: 1,
        y: 5,
        width: 15,
        height: 14,
        rx: 2,
        ry: 2
      }
    ]
  },
  music: {
    name: "music",
    category: "Communication & Media",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M9 18V5l12-2v13"
      },
      {
        tag: "circle",
        cx: 6,
        cy: 18,
        r: 3,
        fill: "currentColor"
      },
      {
        tag: "circle",
        cx: 18,
        cy: 16,
        r: 3,
        fill: "currentColor"
      }
    ]
  },
  mic: {
    name: "mic",
    category: "Communication & Media",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z",
        fill: "currentColor"
      },
      {
        tag: "path",
        d: "M19 10v2a7 7 0 0 1-14 0v-2"
      },
      {
        tag: "line",
        x1: 12,
        y1: 19,
        x2: 12,
        y2: 23,
        strokeWidth: 3
      }
    ]
  },
  "thumbs-up": {
    name: "thumbs-up",
    category: "Communication & Media",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
      }
    ]
  },
  "thumbs-down": {
    name: "thumbs-down",
    category: "Communication & Media",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"
      }
    ]
  },
  bookmark: {
    name: "bookmark",
    category: "Communication & Media",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z",
        fill: "currentColor"
      }
    ]
  },
  code: {
    name: "code",
    category: "Dev & Analytics",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "polyline",
        points: "16 18 22 12 16 6",
        strokeWidth: 3
      },
      {
        tag: "polyline",
        points: "8 6 2 12 8 18",
        strokeWidth: 3
      }
    ]
  },
  "git-branch": {
    name: "git-branch",
    category: "Dev & Analytics",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "line",
        x1: 6,
        y1: 3,
        x2: 6,
        y2: 15
      },
      {
        tag: "circle",
        cx: 18,
        cy: 9,
        r: 3
      },
      {
        tag: "circle",
        cx: 6,
        cy: 18,
        r: 3
      },
      {
        tag: "path",
        d: "M6 9a9 9 0 0 1 9-9"
      }
    ]
  },
  "git-commit": {
    name: "git-commit",
    category: "Dev & Analytics",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "circle",
        cx: 12,
        cy: 12,
        r: 4
      },
      {
        tag: "line",
        x1: 1.05,
        y1: 12,
        x2: 8,
        y2: 12,
        strokeWidth: 3
      },
      {
        tag: "line",
        x1: 16,
        y1: 12,
        x2: 22.95,
        y2: 12,
        strokeWidth: 3
      }
    ]
  },
  "git-pull-request": {
    name: "git-pull-request",
    category: "Dev & Analytics",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "circle",
        cx: 18,
        cy: 18,
        r: 3
      },
      {
        tag: "circle",
        cx: 6,
        cy: 6,
        r: 3
      },
      {
        tag: "path",
        d: "M13 6h3a2 2 0 0 1 2 2v7"
      },
      {
        tag: "line",
        x1: 6,
        y1: 9,
        x2: 6,
        y2: 21
      }
    ]
  },
  "terminal-box": {
    name: "terminal-box",
    category: "Dev & Analytics",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "rect",
        x: 2,
        y: 3,
        width: 20,
        height: 18,
        rx: 2
      },
      {
        tag: "polyline",
        points: "6 9 9 12 6 15",
        strokeWidth: 2.5
      },
      {
        tag: "line",
        x1: 11,
        y1: 15,
        x2: 15,
        y2: 15,
        strokeWidth: 3
      }
    ]
  },
  "chart-bar": {
    name: "chart-bar",
    category: "Dev & Analytics",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "line",
        x1: 12,
        y1: 20,
        x2: 12,
        y2: 10,
        strokeWidth: 3
      },
      {
        tag: "line",
        x1: 18,
        y1: 20,
        x2: 18,
        y2: 4,
        strokeWidth: 3
      },
      {
        tag: "line",
        x1: 6,
        y1: 20,
        x2: 6,
        y2: 16,
        strokeWidth: 3
      }
    ]
  },
  "chart-line": {
    name: "chart-line",
    category: "Dev & Analytics",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "polyline",
        points: "22 12 18 12 15 21 9 3 6 12 2 12",
        strokeWidth: 3
      }
    ]
  },
  "pie-chart": {
    name: "pie-chart",
    category: "Dev & Analytics",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M21.21 15.89A10 10 0 1 1 8 2.83"
      },
      {
        tag: "path",
        d: "M22 12A10 10 0 0 0 12 2v10z",
        fill: "currentColor"
      }
    ]
  },
  layers: {
    name: "layers",
    category: "Dev & Analytics",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "polygon",
        points: "12 2 2 7 12 12 22 7 12 2"
      },
      {
        tag: "polyline",
        points: "2 17 12 22 22 17"
      },
      {
        tag: "polyline",
        points: "2 12 12 17 22 12"
      }
    ]
  },
  box: {
    name: "box",
    category: "Dev & Analytics",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      },
      {
        tag: "polyline",
        points: "3.27 6.96 12 12.01 20.73 6.96"
      },
      {
        tag: "line",
        x1: 12,
        y1: 22.08,
        x2: 12,
        y2: 12
      }
    ]
  },
  folder: {
    name: "folder",
    category: "Dev & Analytics",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
      }
    ]
  },
  file: {
    name: "file",
    category: "Dev & Analytics",
    viewBox: "0 0 24 24",
    elements: [
      {
        tag: "path",
        d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
      },
      {
        tag: "polyline",
        points: "13 2 13 9 20 9"
      }
    ]
  }
}, Ct = ({
  name: n = "bolt",
  size: i = "md",
  variant: r = "current",
  strokeWidth: e = 2.5,
  spin: s = !1,
  title: l,
  className: o = "",
  style: C = {},
  ...$
}) => {
  const B = De[n] || De.bolt;
  let x = "24px";
  if (typeof i == "number")
    x = `${i}px`;
  else
    switch (i) {
      case "xs":
        x = "16px";
        break;
      case "sm":
        x = "20px";
        break;
      case "md":
        x = "24px";
        break;
      case "lg":
        x = "32px";
        break;
      case "xl":
        x = "40px";
        break;
      default:
        x = "24px";
    }
  let v = "currentColor";
  switch (r) {
    case "lime":
      v = "var(--crt-electric-lime, #CCFF00)";
      break;
    case "pink":
      v = "var(--crt-hot-pink, #FF007F)";
      break;
    case "cyan":
      v = "var(--crt-cyber-cyan, #00F0FF)";
      break;
    case "yellow":
      v = "var(--crt-sunburst-yellow, #FFD600)";
      break;
    case "obsidian":
      v = "var(--crt-obsidian, #0D0D0D)";
      break;
    case "white":
      v = "var(--crt-pure-white, #FFFFFF)";
      break;
    case "ghost":
      v = "rgba(13, 13, 13, 0.4)";
      break;
    default:
      v = "currentColor";
  }
  const W = {
    width: x,
    height: x,
    color: v,
    display: "inline-block",
    verticalAlign: "middle",
    flexShrink: 0,
    userSelect: "none",
    transition: "transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.15s ease",
    ...s ? { animation: "crml-spin 1s linear infinite" } : {},
    ...C
  };
  return /* @__PURE__ */ a.jsxs(
    "svg",
    {
      className: `crml-icon crml-icon--${r} ${s ? "crml-icon--spin" : ""} ${o}`,
      style: W,
      viewBox: B.viewBox || "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: e,
      strokeLinecap: "square",
      strokeLinejoin: "miter",
      xmlns: "http://www.w3.org/2000/svg",
      role: "img",
      "aria-label": l || n,
      ...$,
      children: [
        l && /* @__PURE__ */ a.jsx("title", { children: l }),
        B.elements.map((y, E) => !y.tag || y.tag === "path" ? /* @__PURE__ */ a.jsx(
          "path",
          {
            d: y.d,
            fill: y.fill || "none",
            stroke: y.stroke || "currentColor",
            strokeWidth: y.strokeWidth || e,
            strokeLinecap: y.strokeLinecap || "square",
            strokeLinejoin: y.strokeLinejoin || "miter"
          },
          E
        ) : y.tag === "circle" ? /* @__PURE__ */ a.jsx(
          "circle",
          {
            cx: y.cx,
            cy: y.cy,
            r: y.r,
            fill: y.fill || "none",
            stroke: y.stroke || "currentColor",
            strokeWidth: y.strokeWidth || e
          },
          E
        ) : y.tag === "ellipse" ? /* @__PURE__ */ a.jsx(
          "ellipse",
          {
            cx: y.cx,
            cy: y.cy,
            rx: y.rx,
            ry: y.ry,
            fill: y.fill || "none",
            stroke: y.stroke || "currentColor",
            strokeWidth: y.strokeWidth || e
          },
          E
        ) : y.tag === "rect" ? /* @__PURE__ */ a.jsx(
          "rect",
          {
            x: y.x,
            y: y.y,
            width: y.width,
            height: y.height,
            rx: y.rx,
            ry: y.ry,
            fill: y.fill || "none",
            stroke: y.stroke || "currentColor",
            strokeWidth: y.strokeWidth || e
          },
          E
        ) : y.tag === "line" ? /* @__PURE__ */ a.jsx(
          "line",
          {
            x1: y.x1,
            y1: y.y1,
            x2: y.x2,
            y2: y.y2,
            stroke: y.stroke || "currentColor",
            strokeWidth: y.strokeWidth || e,
            strokeLinecap: y.strokeLinecap || "square"
          },
          E
        ) : y.tag === "polyline" ? /* @__PURE__ */ a.jsx(
          "polyline",
          {
            points: y.points,
            fill: y.fill || "none",
            stroke: y.stroke || "currentColor",
            strokeWidth: y.strokeWidth || e,
            strokeLinecap: y.strokeLinecap || "square",
            strokeLinejoin: y.strokeLinejoin || "miter"
          },
          E
        ) : y.tag === "polygon" ? /* @__PURE__ */ a.jsx(
          "polygon",
          {
            points: y.points,
            fill: y.fill || "none",
            stroke: y.stroke || "currentColor",
            strokeWidth: y.strokeWidth || e,
            strokeLinecap: y.strokeLinecap || "square",
            strokeLinejoin: y.strokeLinejoin || "miter"
          },
          E
        ) : null)
      ]
    }
  );
}, Nt = ({
  label: n,
  variant: i = "lime",
  className: r = "",
  id: e,
  ...s
}) => {
  const l = e || (n ? n.toLowerCase().replace(/\s+/g, "-") : void 0);
  return /* @__PURE__ */ a.jsxs("div", { className: "crml-input-wrapper", children: [
    n && /* @__PURE__ */ a.jsx("label", { htmlFor: l, className: "crml-label", children: n }),
    /* @__PURE__ */ a.jsx("input", { id: l, className: `crml-input variant-${i} ${r}`, ...s })
  ] });
}, bt = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-kbd variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), Et = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-marquee variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), St = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-numberinput variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), Mt = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-pixeliconwrapper variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), Bt = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-progress variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), Wt = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-skeleton variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), Rt = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-speechbubble variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), zt = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-stampbadge variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), _t = ({
  checked: n = !1,
  onChange: i,
  label: r,
  variant: e = "lime",
  disabled: s = !1
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-switch-row variant-${e}`,
    onClick: () => !s && i && i(!n),
    style: { opacity: s ? 0.5 : 1, cursor: s ? "not-allowed" : "pointer" },
    children: [
      /* @__PURE__ */ a.jsx("div", { className: `crml-switch-track ${n ? "active" : ""}`, children: /* @__PURE__ */ a.jsx("div", { className: "crml-switch-thumb" }) }),
      r && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: r })
    ]
  }
), Tt = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-textarea variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), At = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-tooltip variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), Dt = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-wavydivider variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), Pt = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-alert variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), Ft = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-faceidtoggle variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), Ot = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-breadcrumb variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), Lt = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-codeblock variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), Vt = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-colorpicker variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), Ht = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-datepicker variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), It = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-doodlecontainer variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), Yt = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-dropdown variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), Kt = ({
  minLimit: n = 0,
  maxLimit: i = 1e3,
  value: r,
  defaultValue: e = [150, 800],
  step: s = 10,
  prefix: l = "$",
  suffix: o = "",
  label: C = "PRICE RANGE FILTER",
  variant: $ = "lime",
  compact: B = !1,
  showLimits: x = !0,
  onChange: v
}) => {
  const [W, y] = _e(r || e), [E, Y] = _e(null), X = ut(null);
  dt(() => {
    r && y(r);
  }, [r]);
  const [S, f] = W, D = i - n, K = D > 0 ? Math.max(0, Math.min(100, (S - n) / D * 100)) : 0, Z = D > 0 ? Math.max(0, Math.min(100, (f - n) / D * 100)) : 100, P = (j) => {
    let R = j.toString();
    return B ? Math.abs(j) >= 1e6 ? R = (j / 1e6).toFixed(j % 1e6 === 0 ? 0 : 1) + "M" : Math.abs(j) >= 1e3 && (R = (j / 1e3).toFixed(j % 1e3 === 0 ? 0 : 1) + "K") : R = j.toLocaleString(), `${l}${R}${o}`;
  }, Q = (j) => {
    const _ = [Math.max(n, Math.min(j, f - s)), f];
    y(_), v && v(_);
  }, ee = (j) => {
    const R = Math.min(i, Math.max(j, S + s)), _ = [S, R];
    y(_), v && v(_);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: `crml-dual-range-wrapper variant-${$}`, style: { display: "flex", flexDirection: "column", gap: "0.5rem", width: "100%" }, children: [
    /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.75rem", fontWeight: 800 }, children: [
      /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: C }),
      /* @__PURE__ */ a.jsxs("span", { className: "crml-badge variant-lime", style: { fontWeight: 900 }, children: [
        P(S),
        " — ",
        P(f)
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { ref: X, style: { position: "relative", width: "100%", height: 24, display: "flex", alignItems: "center" }, children: [
      /* @__PURE__ */ a.jsx("div", { style: { position: "relative", width: "100%", height: 10, backgroundColor: "#E4E4E7", border: "2.5px solid #0D0D0D", borderRadius: 999, overflow: "hidden" }, children: /* @__PURE__ */ a.jsx(
        "div",
        {
          style: {
            position: "absolute",
            height: "100%",
            backgroundColor: "#FF007F",
            left: `${K}%`,
            width: `${Math.max(0, Z - K)}%`
          }
        }
      ) }),
      /* @__PURE__ */ a.jsx(
        "input",
        {
          type: "range",
          min: n,
          max: i,
          step: s,
          value: S,
          onChange: (j) => Q(Number(j.target.value)),
          onPointerDown: () => Y("min"),
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 24,
            background: "transparent",
            pointerEvents: "none",
            appearance: "none",
            margin: 0,
            border: "none",
            outline: "none",
            zIndex: E === "min" ? 5 : 2
          }
        }
      ),
      /* @__PURE__ */ a.jsx(
        "input",
        {
          type: "range",
          min: n,
          max: i,
          step: s,
          value: f,
          onChange: (j) => ee(Number(j.target.value)),
          onPointerDown: () => Y("max"),
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 24,
            background: "transparent",
            pointerEvents: "none",
            appearance: "none",
            margin: 0,
            border: "none",
            outline: "none",
            zIndex: E === "max" ? 5 : 3
          }
        }
      )
    ] }),
    x && /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "0.6875rem", fontWeight: 800, color: "#757575" }, children: [
      /* @__PURE__ */ a.jsx("span", { style: { background: "#F4F4F5", border: "1px solid #0D0D0D", padding: "1px 5px", borderRadius: 3, fontWeight: 900 }, children: P(n) }),
      /* @__PURE__ */ a.jsx("span", { style: { background: "#F4F4F5", border: "1px solid #0D0D0D", padding: "1px 5px", borderRadius: 3, fontWeight: 900 }, children: P(i) })
    ] })
  ] });
}, qt = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-floatingemojibar variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), Ut = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-emojiratingslider variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), Gt = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-otpinput variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), Jt = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-pagination variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), Xt = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-radiogroup variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), Zt = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-searchtagfilter variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), Qt = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-segmentedcontrol variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), er = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-statusmatrix variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), tr = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-stepper variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), rr = ({
  tabs: n,
  activeTab: i,
  onChange: r,
  variant: e = "lime"
}) => {
  var l;
  const s = i || ((l = n[0]) == null ? void 0 : l.id);
  return /* @__PURE__ */ a.jsx("div", { style: { display: "inline-flex", gap: "0.5rem", background: "#F4F4F5", padding: "0.35rem", border: "2.5px solid #0D0D0D", borderRadius: 999 }, children: n.map((o) => {
    const C = o.id === s;
    return /* @__PURE__ */ a.jsxs(
      "button",
      {
        onClick: () => r && r(o.id),
        className: `crml-btn ${C ? `variant-${e}` : "variant-outline"} size-sm`,
        style: { borderRadius: 999, border: "2px solid #0D0D0D", boxShadow: C ? "2px 2px 0px #0D0D0D" : "none" },
        children: [
          o.icon && /* @__PURE__ */ a.jsx("span", { children: o.icon }),
          /* @__PURE__ */ a.jsx("span", { children: o.label })
        ]
      },
      o.id
    );
  }) });
}, ar = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-taginput variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), nr = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-timepicker variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), ir = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-vaporwavevisualizer variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), sr = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-funkyaccordion variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), lr = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-aipromptinput variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), or = ({
  title: n,
  badge: i,
  variant: r = "lime",
  children: e,
  className: s = ""
}) => /* @__PURE__ */ a.jsxs("div", { className: `crml-card variant-${r} ${s}`, children: [
  (n || i) && /* @__PURE__ */ a.jsxs("div", { className: "crml-card-header", children: [
    n && /* @__PURE__ */ a.jsx("h3", { style: { margin: 0, fontSize: "1.1rem", fontWeight: 900, textTransform: "uppercase" }, children: n }),
    i && /* @__PURE__ */ a.jsx("span", { className: "crml-badge variant-cyan", children: i })
  ] }),
  /* @__PURE__ */ a.jsx("div", { className: "crml-card-body", children: e })
] }), cr = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-neubrutalcard variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), mr = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-commandpalette variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), yr = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-retrodialog variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), ur = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-fileupload variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), dr = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-filterdrawer variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), pr = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-formgroup variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), hr = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-glasscard variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), gr = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-hypebeastdropbanner variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), xr = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-kanbancard variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), vr = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-navbar variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), fr = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-notificationdrawer variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), wr = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-pricetagwidget variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), kr = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-pricingcard variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), $r = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-radartelemetry variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), jr = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-reviewquotecard variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), Cr = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-richtexteditor variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), Nr = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-sidebar variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), br = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-soundboard variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), Er = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-speedometerdial variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), Sr = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-stickynote variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), Mr = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-swipecard variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), Br = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-table variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), Wr = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-timeline variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), Rr = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-toast variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
), zr = ({
  variant: n = "lime",
  size: i = "md",
  disabled: r = !1,
  label: e,
  children: s,
  className: l = "",
  ...o
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-videoplayer variant-${n} size-${i} ${l}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...o,
    children: [
      e && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: e }),
      s
    ]
  }
);
export {
  lr as CrmlAiPromptInput,
  Pt as CrmlAlert,
  vt as CrmlBadge,
  xt as CrmlBlobAvatar,
  wt as CrmlBouncyButton,
  Ot as CrmlBreadcrumb,
  kt as CrmlButton,
  or as CrmlCard,
  $t as CrmlCheckbox,
  Lt as CrmlCodeBlock,
  Vt as CrmlColorPicker,
  mr as CrmlCommandPalette,
  Ht as CrmlDatePicker,
  jt as CrmlDivider,
  It as CrmlDoodleContainer,
  Yt as CrmlDropdown,
  Kt as CrmlDualRangeSlider,
  Ut as CrmlEmojiRatingSlider,
  Ft as CrmlFaceIdToggle,
  ur as CrmlFileUpload,
  dr as CrmlFilterDrawer,
  qt as CrmlFloatingEmojiBar,
  pr as CrmlFormGroup,
  sr as CrmlFunkyAccordion,
  hr as CrmlGlassCard,
  gr as CrmlHypebeastDropBanner,
  Ct as CrmlIcon,
  Nt as CrmlInput,
  xr as CrmlKanbanCard,
  bt as CrmlKbd,
  Et as CrmlMarquee,
  vr as CrmlNavbar,
  _t as CrmlNeonSwitch,
  cr as CrmlNeubrutalCard,
  fr as CrmlNotificationDrawer,
  St as CrmlNumberInput,
  Gt as CrmlOtpInput,
  Jt as CrmlPagination,
  rr as CrmlPillTabs,
  Mt as CrmlPixelIconWrapper,
  wr as CrmlPriceTagWidget,
  kr as CrmlPricingCard,
  Bt as CrmlProgress,
  $r as CrmlRadarTelemetry,
  Xt as CrmlRadioGroup,
  yr as CrmlRetroDialog,
  jr as CrmlReviewQuoteCard,
  Cr as CrmlRichTextEditor,
  Zt as CrmlSearchTagFilter,
  Qt as CrmlSegmentedControl,
  Nr as CrmlSidebar,
  Wt as CrmlSkeleton,
  br as CrmlSoundboard,
  Rt as CrmlSpeechBubble,
  Er as CrmlSpeedometerDial,
  zt as CrmlStampBadge,
  er as CrmlStatusMatrix,
  tr as CrmlStepper,
  ft as CrmlStickerBadge,
  Sr as CrmlStickyNote,
  Mr as CrmlSwipeCard,
  Br as CrmlTable,
  ar as CrmlTagInput,
  Tt as CrmlTextarea,
  nr as CrmlTimePicker,
  Wr as CrmlTimeline,
  Rr as CrmlToast,
  At as CrmlTooltip,
  ir as CrmlVaporwaveVisualizer,
  zr as CrmlVideoPlayer,
  Dt as CrmlWavyDivider
};
