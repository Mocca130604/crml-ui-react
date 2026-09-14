import Ie, { useState as De, useRef as ur, useEffect as dr } from "react";
var oe = { exports: {} }, B = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function pr() {
  if (Oe) return B;
  Oe = 1;
  var t = Ie, s = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(g, j, S) {
    var E, C = {}, w = null, P = null;
    S !== void 0 && (w = "" + S), j.key !== void 0 && (w = "" + j.key), j.ref !== void 0 && (P = j.ref);
    for (E in j) n.call(j, E) && !c.hasOwnProperty(E) && (C[E] = j[E]);
    if (g && g.defaultProps) for (E in j = g.defaultProps, j) C[E] === void 0 && (C[E] = j[E]);
    return { $$typeof: s, type: g, key: w, ref: P, props: C, _owner: i.current };
  }
  return B.Fragment = r, B.jsx = l, B.jsxs = l, B;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function fr() {
  return Fe || (Fe = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Ie, s = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), g = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), W = Symbol.iterator, q = "@@iterator";
    function H(e) {
      if (e === null || typeof e != "object")
        return null;
      var o = W && e[W] || e[q];
      return typeof o == "function" ? o : null;
    }
    var b = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var o = arguments.length, m = new Array(o > 1 ? o - 1 : 0), u = 1; u < o; u++)
          m[u - 1] = arguments[u];
        F("error", e, m);
      }
    }
    function F(e, o, m) {
      {
        var u = b.ReactDebugCurrentFrame, f = u.getStackAddendum();
        f !== "" && (o += "%s", m = m.concat([f]));
        var v = m.map(function(p) {
          return String(p);
        });
        v.unshift("Warning: " + o), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var K = !1, Q = !1, I = !1, Z = !1, ee = !1, $;
    $ = Symbol.for("react.module.reference");
    function T(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === n || e === c || ee || e === i || e === S || e === E || Z || e === P || K || Q || I || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === C || e.$$typeof === l || e.$$typeof === g || e.$$typeof === j || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === $ || e.getModuleId !== void 0));
    }
    function z(e, o, m) {
      var u = e.displayName;
      if (u)
        return u;
      var f = o.displayName || o.name || "";
      return f !== "" ? m + "(" + f + ")" : m;
    }
    function me(e) {
      return e.displayName || "Context";
    }
    function k(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case c:
          return "Profiler";
        case i:
          return "StrictMode";
        case S:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            var o = e;
            return me(o) + ".Consumer";
          case l:
            var m = e;
            return me(m._context) + ".Provider";
          case j:
            return z(e, e.render, "ForwardRef");
          case C:
            var u = e.displayName || null;
            return u !== null ? u : k(e.type) || "Memo";
          case w: {
            var f = e, v = f._payload, p = f._init;
            try {
              return k(p(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, V = 0, ue, de, pe, fe, ve, he, ye;
    function xe() {
    }
    xe.__reactDisabledLog = !0;
    function Ae() {
      {
        if (V === 0) {
          ue = console.log, de = console.info, pe = console.warn, fe = console.error, ve = console.group, he = console.groupCollapsed, ye = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: xe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        V++;
      }
    }
    function Me() {
      {
        if (V--, V === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: ue
            }),
            info: D({}, e, {
              value: de
            }),
            warn: D({}, e, {
              value: pe
            }),
            error: D({}, e, {
              value: fe
            }),
            group: D({}, e, {
              value: ve
            }),
            groupCollapsed: D({}, e, {
              value: he
            }),
            groupEnd: D({}, e, {
              value: ye
            })
          });
        }
        V < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = b.ReactCurrentDispatcher, ne;
    function G(e, o, m) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (f) {
            var u = f.stack.trim().match(/\n( *(at )?)/);
            ne = u && u[1] || "";
          }
        return `
` + ne + e;
      }
    }
    var ae = !1, J;
    {
      var We = typeof WeakMap == "function" ? WeakMap : Map;
      J = new We();
    }
    function $e(e, o) {
      if (!e || ae)
        return "";
      {
        var m = J.get(e);
        if (m !== void 0)
          return m;
      }
      var u;
      ae = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = re.current, re.current = null, Ae();
      try {
        if (o) {
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
            } catch (R) {
              u = R;
            }
            Reflect.construct(e, [], p);
          } else {
            try {
              p.call();
            } catch (R) {
              u = R;
            }
            e.call(p.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            u = R;
          }
          e();
        }
      } catch (R) {
        if (R && u && typeof R.stack == "string") {
          for (var d = R.stack.split(`
`), N = u.stack.split(`
`), y = d.length - 1, x = N.length - 1; y >= 1 && x >= 0 && d[y] !== N[x]; )
            x--;
          for (; y >= 1 && x >= 0; y--, x--)
            if (d[y] !== N[x]) {
              if (y !== 1 || x !== 1)
                do
                  if (y--, x--, x < 0 || d[y] !== N[x]) {
                    var _ = `
` + d[y].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, _), _;
                  }
                while (y >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        ae = !1, re.current = v, Me(), Error.prepareStackTrace = f;
      }
      var M = e ? e.displayName || e.name : "", O = M ? G(M) : "";
      return typeof e == "function" && J.set(e, O), O;
    }
    function Ve(e, o, m) {
      return $e(e, !1);
    }
    function Ye(e) {
      var o = e.prototype;
      return !!(o && o.isReactComponent);
    }
    function L(e, o, m) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return $e(e, Ye(e));
      if (typeof e == "string")
        return G(e);
      switch (e) {
        case S:
          return G("Suspense");
        case E:
          return G("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case j:
            return Ve(e.render);
          case C:
            return L(e.type, o, m);
          case w: {
            var u = e, f = u._payload, v = u._init;
            try {
              return L(v(f), o, m);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, je = {}, ge = b.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var o = e._owner, m = L(e.type, e._source, o ? o.type : null);
        ge.setExtraStackFrame(m);
      } else
        ge.setExtraStackFrame(null);
    }
    function Be(e, o, m, u, f) {
      {
        var v = Function.call.bind(Y);
        for (var p in e)
          if (v(e, p)) {
            var d = void 0;
            try {
              if (typeof e[p] != "function") {
                var N = Error((u || "React class") + ": " + m + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw N.name = "Invariant Violation", N;
              }
              d = e[p](o, p, u, m, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              d = y;
            }
            d && !(d instanceof Error) && (X(f), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", m, p, typeof d), X(null)), d instanceof Error && !(d.message in je) && (je[d.message] = !0, X(f), h("Failed %s type: %s", m, d.message), X(null));
          }
      }
    }
    var Ue = Array.isArray;
    function te(e) {
      return Ue(e);
    }
    function qe(e) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, m = o && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return m;
      }
    }
    function Ke(e) {
      try {
        return Ee(e), !1;
      } catch {
        return !0;
      }
    }
    function Ee(e) {
      return "" + e;
    }
    function Ne(e) {
      if (Ke(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), Ee(e);
    }
    var Ce = b.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, be;
    function Je(e) {
      if (Y.call(e, "ref")) {
        var o = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Le(e) {
      if (Y.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, o) {
      typeof e.ref == "string" && Ce.current;
    }
    function He(e, o) {
      {
        var m = function() {
          Re || (Re = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        m.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: m,
          configurable: !0
        });
      }
    }
    function Qe(e, o) {
      {
        var m = function() {
          be || (be = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        m.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: m,
          configurable: !0
        });
      }
    }
    var Ze = function(e, o, m, u, f, v, p) {
      var d = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: o,
        ref: m,
        props: p,
        // Record the component responsible for creating this element.
        _owner: v
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
        value: f
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    };
    function er(e, o, m, u, f) {
      {
        var v, p = {}, d = null, N = null;
        m !== void 0 && (Ne(m), d = "" + m), Le(o) && (Ne(o.key), d = "" + o.key), Je(o) && (N = o.ref, Xe(o, f));
        for (v in o)
          Y.call(o, v) && !Ge.hasOwnProperty(v) && (p[v] = o[v]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (v in y)
            p[v] === void 0 && (p[v] = y[v]);
        }
        if (d || N) {
          var x = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          d && He(p, x), N && Qe(p, x);
        }
        return Ze(e, d, N, f, u, Ce.current, p);
      }
    }
    var se = b.ReactCurrentOwner, _e = b.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var o = e._owner, m = L(e.type, e._source, o ? o.type : null);
        _e.setExtraStackFrame(m);
      } else
        _e.setExtraStackFrame(null);
    }
    var ie;
    ie = !1;
    function le(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function we() {
      {
        if (se.current) {
          var e = k(se.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rr(e) {
      return "";
    }
    var Te = {};
    function nr(e) {
      {
        var o = we();
        if (!o) {
          var m = typeof e == "string" ? e : e.displayName || e.name;
          m && (o = `

Check the top-level render call using <` + m + ">.");
        }
        return o;
      }
    }
    function Se(e, o) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var m = nr(o);
        if (Te[m])
          return;
        Te[m] = !0;
        var u = "";
        e && e._owner && e._owner !== se.current && (u = " It was passed a child from " + k(e._owner.type) + "."), A(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', m, u), A(null);
      }
    }
    function Pe(e, o) {
      {
        if (typeof e != "object")
          return;
        if (te(e))
          for (var m = 0; m < e.length; m++) {
            var u = e[m];
            le(u) && Se(u, o);
          }
        else if (le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = H(e);
          if (typeof f == "function" && f !== e.entries)
            for (var v = f.call(e), p; !(p = v.next()).done; )
              le(p.value) && Se(p.value, o);
        }
      }
    }
    function ar(e) {
      {
        var o = e.type;
        if (o == null || typeof o == "string")
          return;
        var m;
        if (typeof o == "function")
          m = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === j || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === C))
          m = o.propTypes;
        else
          return;
        if (m) {
          var u = k(o);
          Be(m, e.props, "prop", u, e);
        } else if (o.PropTypes !== void 0 && !ie) {
          ie = !0;
          var f = k(o);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tr(e) {
      {
        for (var o = Object.keys(e.props), m = 0; m < o.length; m++) {
          var u = o[m];
          if (u !== "children" && u !== "key") {
            A(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    var ke = {};
    function ze(e, o, m, u, f, v) {
      {
        var p = T(e);
        if (!p) {
          var d = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (d += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var N = rr();
          N ? d += N : d += we();
          var y;
          e === null ? y = "null" : te(e) ? y = "array" : e !== void 0 && e.$$typeof === s ? (y = "<" + (k(e.type) || "Unknown") + " />", d = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, d);
        }
        var x = er(e, o, m, f, v);
        if (x == null)
          return x;
        if (p) {
          var _ = o.children;
          if (_ !== void 0)
            if (u)
              if (te(_)) {
                for (var M = 0; M < _.length; M++)
                  Pe(_[M], e);
                Object.freeze && Object.freeze(_);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pe(_, e);
        }
        if (Y.call(o, "key")) {
          var O = k(e), R = Object.keys(o).filter(function(mr) {
            return mr !== "key";
          }), ce = R.length > 0 ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ke[O + ce]) {
            var or = R.length > 0 ? "{" + R.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ce, O, or, O), ke[O + ce] = !0;
          }
        }
        return e === n ? tr(x) : ar(x), x;
      }
    }
    function sr(e, o, m) {
      return ze(e, o, m, !0);
    }
    function ir(e, o, m) {
      return ze(e, o, m, !1);
    }
    var lr = ir, cr = sr;
    U.Fragment = n, U.jsx = lr, U.jsxs = cr;
  }()), U;
}
process.env.NODE_ENV === "production" ? oe.exports = pr() : oe.exports = fr();
var a = oe.exports;
const hr = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-blobavatar variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), yr = ({
  variant: t = "primary",
  size: s = "md",
  children: r,
  className: n = ""
}) => /* @__PURE__ */ a.jsx("span", { className: `crml-badge variant-${t} size-${s} ${n}`, children: r }), xr = ({
  variant: t = "pink",
  tilt: s = "right",
  star: r = !1,
  children: n,
  className: i = ""
}) => /* @__PURE__ */ a.jsxs("div", { className: `crml-sticker variant-${t} tilt-${s} ${i}`, children: [
  r && /* @__PURE__ */ a.jsx("span", { children: "★" }),
  /* @__PURE__ */ a.jsx("span", { children: n })
] }), $r = ({
  variant: t = "lime",
  size: s = "md",
  iconLeft: r,
  iconRight: n,
  children: i,
  className: c = "",
  disabled: l,
  ...g
}) => /* @__PURE__ */ a.jsxs(
  "button",
  {
    className: `crml-bouncy-btn variant-${t} size-${s} ${c}`,
    disabled: l,
    ...g,
    children: [
      r && /* @__PURE__ */ a.jsx("span", { className: "crml-icon-left", children: r }),
      /* @__PURE__ */ a.jsx("span", { children: i }),
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-icon-right", children: n })
    ]
  }
), jr = ({
  variant: t = "primary",
  size: s = "md",
  iconLeft: r,
  iconRight: n,
  children: i,
  className: c = "",
  disabled: l,
  ...g
}) => /* @__PURE__ */ a.jsxs(
  "button",
  {
    className: `crml-btn variant-${t} size-${s} ${c}`,
    disabled: l,
    ...g,
    children: [
      r && /* @__PURE__ */ a.jsx("span", { className: "crml-icon-left", children: r }),
      /* @__PURE__ */ a.jsx("span", { children: i }),
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-icon-right", children: n })
    ]
  }
), gr = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-checkbox variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), Er = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-divider variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), Nr = ({
  label: t,
  variant: s = "lime",
  className: r = "",
  id: n,
  ...i
}) => {
  const c = n || (t ? t.toLowerCase().replace(/\s+/g, "-") : void 0);
  return /* @__PURE__ */ a.jsxs("div", { className: "crml-input-wrapper", children: [
    t && /* @__PURE__ */ a.jsx("label", { htmlFor: c, className: "crml-label", children: t }),
    /* @__PURE__ */ a.jsx("input", { id: c, className: `crml-input variant-${s} ${r}`, ...i })
  ] });
}, Cr = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-kbd variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), Rr = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-marquee variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), br = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-numberinput variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), _r = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-pixeliconwrapper variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), wr = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-progress variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), Tr = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-skeleton variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), Sr = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-speechbubble variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), Pr = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-stampbadge variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), kr = ({
  checked: t = !1,
  onChange: s,
  label: r,
  variant: n = "lime",
  disabled: i = !1
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-switch-row variant-${n}`,
    onClick: () => !i && s && s(!t),
    style: { opacity: i ? 0.5 : 1, cursor: i ? "not-allowed" : "pointer" },
    children: [
      /* @__PURE__ */ a.jsx("div", { className: `crml-switch-track ${t ? "active" : ""}`, children: /* @__PURE__ */ a.jsx("div", { className: "crml-switch-thumb" }) }),
      r && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: r })
    ]
  }
), zr = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-textarea variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), Dr = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-tooltip variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), Or = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-wavydivider variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), Fr = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-alert variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), Ir = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-faceidtoggle variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), Ar = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-breadcrumb variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), Mr = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-codeblock variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), Wr = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-colorpicker variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), Vr = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-datepicker variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), Yr = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-doodlecontainer variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), Br = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-dropdown variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), Ur = ({
  minLimit: t = 0,
  maxLimit: s = 1e3,
  value: r,
  defaultValue: n = [150, 800],
  step: i = 10,
  prefix: c = "$",
  suffix: l = "",
  label: g = "PRICE RANGE FILTER",
  variant: j = "lime",
  compact: S = !1,
  showLimits: E = !0,
  onChange: C
}) => {
  const [w, P] = De(r || n), [W, q] = De(null), H = ur(null);
  dr(() => {
    r && P(r);
  }, [r]);
  const [b, h] = w, F = s - t, K = F > 0 ? Math.max(0, Math.min(100, (b - t) / F * 100)) : 0, Q = F > 0 ? Math.max(0, Math.min(100, (h - t) / F * 100)) : 100, I = ($) => {
    let T = $.toString();
    return S ? Math.abs($) >= 1e6 ? T = ($ / 1e6).toFixed($ % 1e6 === 0 ? 0 : 1) + "M" : Math.abs($) >= 1e3 && (T = ($ / 1e3).toFixed($ % 1e3 === 0 ? 0 : 1) + "K") : T = $.toLocaleString(), `${c}${T}${l}`;
  }, Z = ($) => {
    const z = [Math.max(t, Math.min($, h - i)), h];
    P(z), C && C(z);
  }, ee = ($) => {
    const T = Math.min(s, Math.max($, b + i)), z = [b, T];
    P(z), C && C(z);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: `crml-dual-range-wrapper variant-${j}`, style: { display: "flex", flexDirection: "column", gap: "0.5rem", width: "100%" }, children: [
    /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.75rem", fontWeight: 800 }, children: [
      /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: g }),
      /* @__PURE__ */ a.jsxs("span", { className: "crml-badge variant-lime", style: { fontWeight: 900 }, children: [
        I(b),
        " — ",
        I(h)
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { ref: H, style: { position: "relative", width: "100%", height: 24, display: "flex", alignItems: "center" }, children: [
      /* @__PURE__ */ a.jsx("div", { style: { position: "relative", width: "100%", height: 10, backgroundColor: "#E4E4E7", border: "2.5px solid #0D0D0D", borderRadius: 999, overflow: "hidden" }, children: /* @__PURE__ */ a.jsx(
        "div",
        {
          style: {
            position: "absolute",
            height: "100%",
            backgroundColor: "#FF007F",
            left: `${K}%`,
            width: `${Math.max(0, Q - K)}%`
          }
        }
      ) }),
      /* @__PURE__ */ a.jsx(
        "input",
        {
          type: "range",
          min: t,
          max: s,
          step: i,
          value: b,
          onChange: ($) => Z(Number($.target.value)),
          onPointerDown: () => q("min"),
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
            zIndex: W === "min" ? 5 : 2
          }
        }
      ),
      /* @__PURE__ */ a.jsx(
        "input",
        {
          type: "range",
          min: t,
          max: s,
          step: i,
          value: h,
          onChange: ($) => ee(Number($.target.value)),
          onPointerDown: () => q("max"),
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
            zIndex: W === "max" ? 5 : 3
          }
        }
      )
    ] }),
    E && /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "0.6875rem", fontWeight: 800, color: "#757575" }, children: [
      /* @__PURE__ */ a.jsx("span", { style: { background: "#F4F4F5", border: "1px solid #0D0D0D", padding: "1px 5px", borderRadius: 3, fontWeight: 900 }, children: I(t) }),
      /* @__PURE__ */ a.jsx("span", { style: { background: "#F4F4F5", border: "1px solid #0D0D0D", padding: "1px 5px", borderRadius: 3, fontWeight: 900 }, children: I(s) })
    ] })
  ] });
}, qr = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-floatingemojibar variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), Kr = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-emojiratingslider variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), Gr = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-otpinput variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), Jr = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-pagination variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), Lr = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-radiogroup variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), Xr = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-searchtagfilter variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), Hr = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-segmentedcontrol variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), Qr = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-statusmatrix variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), Zr = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-stepper variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), en = ({
  tabs: t,
  activeTab: s,
  onChange: r,
  variant: n = "lime"
}) => {
  var c;
  const i = s || ((c = t[0]) == null ? void 0 : c.id);
  return /* @__PURE__ */ a.jsx("div", { style: { display: "inline-flex", gap: "0.5rem", background: "#F4F4F5", padding: "0.35rem", border: "2.5px solid #0D0D0D", borderRadius: 999 }, children: t.map((l) => {
    const g = l.id === i;
    return /* @__PURE__ */ a.jsxs(
      "button",
      {
        onClick: () => r && r(l.id),
        className: `crml-btn ${g ? `variant-${n}` : "variant-outline"} size-sm`,
        style: { borderRadius: 999, border: "2px solid #0D0D0D", boxShadow: g ? "2px 2px 0px #0D0D0D" : "none" },
        children: [
          l.icon && /* @__PURE__ */ a.jsx("span", { children: l.icon }),
          /* @__PURE__ */ a.jsx("span", { children: l.label })
        ]
      },
      l.id
    );
  }) });
}, rn = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-taginput variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), nn = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-timepicker variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), an = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-vaporwavevisualizer variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), tn = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-funkyaccordion variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), sn = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-aipromptinput variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), ln = ({
  title: t,
  badge: s,
  variant: r = "lime",
  children: n,
  className: i = ""
}) => /* @__PURE__ */ a.jsxs("div", { className: `crml-card variant-${r} ${i}`, children: [
  (t || s) && /* @__PURE__ */ a.jsxs("div", { className: "crml-card-header", children: [
    t && /* @__PURE__ */ a.jsx("h3", { style: { margin: 0, fontSize: "1.1rem", fontWeight: 900, textTransform: "uppercase" }, children: t }),
    s && /* @__PURE__ */ a.jsx("span", { className: "crml-badge variant-cyan", children: s })
  ] }),
  /* @__PURE__ */ a.jsx("div", { className: "crml-card-body", children: n })
] }), cn = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-neubrutalcard variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), on = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-commandpalette variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), mn = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-retrodialog variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), un = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-fileupload variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), dn = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-filterdrawer variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), pn = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-formgroup variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), fn = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-glasscard variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), vn = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-hypebeastdropbanner variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), hn = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-kanbancard variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), yn = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-navbar variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), xn = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-notificationdrawer variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), $n = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-pricetagwidget variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), jn = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-pricingcard variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), gn = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-radartelemetry variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), En = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-reviewquotecard variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), Nn = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-richtexteditor variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), Cn = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-sidebar variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), Rn = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-soundboard variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), bn = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-speedometerdial variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), _n = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-stickynote variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), wn = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-swipecard variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), Tn = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-table variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), Sn = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-timeline variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), Pn = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-toast variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
), kn = ({
  variant: t = "lime",
  size: s = "md",
  disabled: r = !1,
  label: n,
  children: i,
  className: c = "",
  ...l
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: `crml-videoplayer variant-${t} size-${s} ${c}`,
    style: { opacity: r ? 0.5 : 1, pointerEvents: r ? "none" : "auto" },
    ...l,
    children: [
      n && /* @__PURE__ */ a.jsx("span", { className: "crml-label", children: n }),
      i
    ]
  }
);
export {
  sn as CrmlAiPromptInput,
  Fr as CrmlAlert,
  yr as CrmlBadge,
  hr as CrmlBlobAvatar,
  $r as CrmlBouncyButton,
  Ar as CrmlBreadcrumb,
  jr as CrmlButton,
  ln as CrmlCard,
  gr as CrmlCheckbox,
  Mr as CrmlCodeBlock,
  Wr as CrmlColorPicker,
  on as CrmlCommandPalette,
  Vr as CrmlDatePicker,
  Er as CrmlDivider,
  Yr as CrmlDoodleContainer,
  Br as CrmlDropdown,
  Ur as CrmlDualRangeSlider,
  Kr as CrmlEmojiRatingSlider,
  Ir as CrmlFaceIdToggle,
  un as CrmlFileUpload,
  dn as CrmlFilterDrawer,
  qr as CrmlFloatingEmojiBar,
  pn as CrmlFormGroup,
  tn as CrmlFunkyAccordion,
  fn as CrmlGlassCard,
  vn as CrmlHypebeastDropBanner,
  Nr as CrmlInput,
  hn as CrmlKanbanCard,
  Cr as CrmlKbd,
  Rr as CrmlMarquee,
  yn as CrmlNavbar,
  kr as CrmlNeonSwitch,
  cn as CrmlNeubrutalCard,
  xn as CrmlNotificationDrawer,
  br as CrmlNumberInput,
  Gr as CrmlOtpInput,
  Jr as CrmlPagination,
  en as CrmlPillTabs,
  _r as CrmlPixelIconWrapper,
  $n as CrmlPriceTagWidget,
  jn as CrmlPricingCard,
  wr as CrmlProgress,
  gn as CrmlRadarTelemetry,
  Lr as CrmlRadioGroup,
  mn as CrmlRetroDialog,
  En as CrmlReviewQuoteCard,
  Nn as CrmlRichTextEditor,
  Xr as CrmlSearchTagFilter,
  Hr as CrmlSegmentedControl,
  Cn as CrmlSidebar,
  Tr as CrmlSkeleton,
  Rn as CrmlSoundboard,
  Sr as CrmlSpeechBubble,
  bn as CrmlSpeedometerDial,
  Pr as CrmlStampBadge,
  Qr as CrmlStatusMatrix,
  Zr as CrmlStepper,
  xr as CrmlStickerBadge,
  _n as CrmlStickyNote,
  wn as CrmlSwipeCard,
  Tn as CrmlTable,
  rn as CrmlTagInput,
  zr as CrmlTextarea,
  nn as CrmlTimePicker,
  Sn as CrmlTimeline,
  Pn as CrmlToast,
  Dr as CrmlTooltip,
  an as CrmlVaporwaveVisualizer,
  kn as CrmlVideoPlayer,
  Or as CrmlWavyDivider
};
