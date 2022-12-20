import { createServer } from "http";
import { initCustomFormatter, ref, computed, defineComponent, h, Fragment, onMounted, watch, onUnmounted, provide, inject, watchEffect, Teleport, reactive, unref, nextTick, cloneVNode, openBlock, createBlock, createCommentVNode, createElementBlock, normalizeStyle, KeepAlive, createVNode, renderList, onBeforeUnmount, renderSlot, withModifiers, createElementVNode, resolveComponent, withCtx, withDirectives, resolveDynamicComponent, normalizeProps, guardReactiveProps, vShow, createSSRApp } from "@vue/runtime-dom";
import { renderToString } from "@vue/server-renderer";
import we from "axios";
function initDev() {
  {
    initCustomFormatter();
  }
}
if (process.env.NODE_ENV !== "production") {
  initDev();
}
function qs(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== false; )
    ;
  return e;
}
function Ds(e) {
  return function(t, r, n) {
    for (var i = -1, s = Object(t), a = n(t), o = a.length; o--; ) {
      var l = a[e ? o : ++i];
      if (r(s[l], l, s) === false)
        break;
    }
    return t;
  };
}
var Ls = Ds();
const js = Ls;
function ks(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Bs = typeof global == "object" && global && global.Object === Object && global;
const oi = Bs;
var Rs = typeof self == "object" && self && self.Object === Object && self, Ms = oi || Rs || Function("return this")();
const le = Ms;
var Ns = le.Symbol;
const Oe = Ns;
var li = Object.prototype, Vs = li.hasOwnProperty, Hs = li.toString, st = Oe ? Oe.toStringTag : void 0;
function Us(e) {
  var t = Vs.call(e, st), r = e[st];
  try {
    e[st] = void 0;
    var n = true;
  } catch {
  }
  var i = Hs.call(e);
  return n && (t ? e[st] = r : delete e[st]), i;
}
var Ws = Object.prototype, zs = Ws.toString;
function Gs(e) {
  return zs.call(e);
}
var Ks = "[object Null]", Xs = "[object Undefined]", yn = Oe ? Oe.toStringTag : void 0;
function _e(e) {
  return e == null ? e === void 0 ? Xs : Ks : yn && yn in Object(e) ? Us(e) : Gs(e);
}
function $e(e) {
  return e != null && typeof e == "object";
}
var Qs = "[object Arguments]";
function bn(e) {
  return $e(e) && _e(e) == Qs;
}
var ui = Object.prototype, Js = ui.hasOwnProperty, Ys = ui.propertyIsEnumerable, Zs = bn(function() {
  return arguments;
}()) ? bn : function(e) {
  return $e(e) && Js.call(e, "callee") && !Ys.call(e, "callee");
};
const ci = Zs;
var ea = Array.isArray;
const L = ea;
function ta() {
  return false;
}
var fi = typeof exports == "object" && exports && !exports.nodeType && exports, wn = fi && typeof module == "object" && module && !module.nodeType && module, ra = wn && wn.exports === fi, Sn = ra ? le.Buffer : void 0, na = Sn ? Sn.isBuffer : void 0, ia = na || ta;
const fr = ia;
var sa = 9007199254740991, aa = /^(?:0|[1-9]\d*)$/;
function Fr(e, t) {
  var r = typeof e;
  return t = t == null ? sa : t, !!t && (r == "number" || r != "symbol" && aa.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var oa = 9007199254740991;
function qr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= oa;
}
var la = "[object Arguments]", ua = "[object Array]", ca = "[object Boolean]", fa = "[object Date]", da = "[object Error]", pa = "[object Function]", ha = "[object Map]", ma = "[object Number]", va = "[object Object]", ga = "[object RegExp]", ya = "[object Set]", ba = "[object String]", wa = "[object WeakMap]", Sa = "[object ArrayBuffer]", Oa = "[object DataView]", $a = "[object Float32Array]", xa = "[object Float64Array]", Ea = "[object Int8Array]", Ta = "[object Int16Array]", _a = "[object Int32Array]", Aa = "[object Uint8Array]", Ia = "[object Uint8ClampedArray]", Pa = "[object Uint16Array]", Ca = "[object Uint32Array]", F = {};
F[$a] = F[xa] = F[Ea] = F[Ta] = F[_a] = F[Aa] = F[Ia] = F[Pa] = F[Ca] = true;
F[la] = F[ua] = F[Sa] = F[ca] = F[Oa] = F[fa] = F[da] = F[pa] = F[ha] = F[ma] = F[va] = F[ga] = F[ya] = F[ba] = F[wa] = false;
function Fa(e) {
  return $e(e) && qr(e.length) && !!F[_e(e)];
}
function qa(e) {
  return function(t) {
    return e(t);
  };
}
var di = typeof exports == "object" && exports && !exports.nodeType && exports, lt = di && typeof module == "object" && module && !module.nodeType && module, Da = lt && lt.exports === di, rr = Da && oi.process, La = function() {
  try {
    var e = lt && lt.require && lt.require("util").types;
    return e || rr && rr.binding && rr.binding("util");
  } catch {
  }
}();
const On = La;
var $n = On && On.isTypedArray, ja = $n ? qa($n) : Fa;
const pi = ja;
var ka = Object.prototype, Ba = ka.hasOwnProperty;
function Ra(e, t) {
  var r = L(e), n = !r && ci(e), i = !r && !n && fr(e), s = !r && !n && !i && pi(e), a = r || n || i || s, o = a ? ks(e.length, String) : [], l = o.length;
  for (var u in e)
    (t || Ba.call(e, u)) && !(a && (u == "length" || i && (u == "offset" || u == "parent") || s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || Fr(u, l))) && o.push(u);
  return o;
}
var Ma = Object.prototype;
function Na(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Ma;
  return e === r;
}
function Va(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Ha = Va(Object.keys, Object);
const Ua = Ha;
var Wa = Object.prototype, za = Wa.hasOwnProperty;
function Ga(e) {
  if (!Na(e))
    return Ua(e);
  var t = [];
  for (var r in Object(e))
    za.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function W(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ka = "[object AsyncFunction]", Xa = "[object Function]", Qa = "[object GeneratorFunction]", Ja = "[object Proxy]";
function hi(e) {
  if (!W(e))
    return false;
  var t = _e(e);
  return t == Xa || t == Qa || t == Ka || t == Ja;
}
function Bt(e) {
  return e != null && qr(e.length) && !hi(e);
}
function Rt(e) {
  return Bt(e) ? Ra(e) : Ga(e);
}
function Dr(e, t) {
  return e && js(e, t, Rt);
}
function Ya(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!Bt(r))
      return e(r, n);
    for (var i = r.length, s = t ? i : -1, a = Object(r); (t ? s-- : ++s < i) && n(a[s], s, a) !== false; )
      ;
    return r;
  };
}
var Za = Ya(Dr);
const Lr = Za;
function mi(e) {
  return e;
}
function vi(e) {
  return typeof e == "function" ? e : mi;
}
function eo(e, t) {
  var r = L(e) ? qs : Lr;
  return r(e, vi(t));
}
function Y(e, t) {
  return e && Dr(e, vi(t));
}
var to = Array.prototype, ro = to.reverse;
function no(e) {
  return e == null ? e : ro.call(e);
}
const qt = ref(0), dr = ref(1), q = ref({}), ne = ref(0), xe = typeof window > "u";
function io(e, t, r) {
  xe || window.addEventListener("popstate", so.bind(this)), Object.keys(t).length > 0 && qt.value++, Rr(r), Mt(r.head), Mr(e);
  const n = xe ? "" : location.href, i = jr(
    n,
    r.head,
    e,
    t,
    {},
    dr.value,
    qt.value,
    r.persistentLayout
  );
  gi(i);
}
function so(e) {
  !e.state || (q.value = e.state, ne.value = 0, Nr.value = {}, kr.value = q.value.persistentLayoutKey, Mt(q.value.head), Mr(q.value.html, q.value.rememberedState.scrollY));
}
function jr(e, t, r, n, i, s, a, o) {
  const l = {
    url: e,
    head: t,
    html: r,
    dynamics: n,
    rememberedState: i,
    pageVisitId: s,
    dynamicVisitId: a,
    persistentLayoutKey: o
  };
  return q.value = l, l;
}
function ao(e) {
  xe || window.history.pushState(e, "", e.url);
}
function oo(e) {
  const t = jr(
    e,
    JSON.parse(JSON.stringify(q.value.head)),
    q.value.html,
    q.value.dynamics,
    { ...q.value.rememberedState },
    q.value.pageVisitId,
    q.value.dynamicVisitId,
    q.value.persistentLayoutKey
  );
  xe || window.history.replaceState(t, "", t.url);
}
function gi(e) {
  xe || window.history.replaceState(e, "", e.url);
}
const nr = ref(0), kr = ref(null);
function lo(e, t) {
  var c;
  nr.value++;
  const r = e.request.responseURL;
  if (W((c = e.data) == null ? void 0 : c.splade) || console.error("The response is not a Splade response. Did you use the Splade Middleware on this route?"), e.data.splade.lazy)
    return;
  e.data.splade.modal && ne.value++;
  const n = kr.value;
  if (Rr(e.data.splade), Mt(e.data.splade.head), r === q.value.url && (t = true), e.data.splade.modal)
    return _i(e.data.html, e.data.splade.modal);
  if (e.data.splade.preventRefresh)
    return;
  ne.value = 0;
  let i = e.data.html, s = e.data.dynamics;
  const a = Object.keys(q.value.dynamics).length > 0, o = Object.keys(s).length > 0;
  t ? (o && Y(s, (p, f) => {
    s[f] += `<!-- ${nr.value} -->`;
  }), (!o || !a) && (i += `<!-- ${nr.value} -->`)) : (o && qt.value++, (!o || !a) && dr.value++);
  let l = e.data.splade.persistentLayout && n === e.data.splade.persistentLayout;
  Mr(l ? q.value.html : i, 0);
  const u = jr(
    r,
    e.data.splade.head,
    l ? q.value.html : i,
    s,
    q.value.rememberedState ? { ...q.value.rememberedState } : {},
    dr.value,
    qt.value,
    e.data.splade.persistentLayout
  );
  t ? gi(u) : ao(u);
}
function uo() {
  ne.value--, Mt(fo(ne.value));
}
const yi = ref({}), bi = (e) => yi.value[e], co = (e) => Object.keys(bi.value[e]).length > 0, wi = ref({}), fo = (e) => wi.value[e], Si = ref({}), po = (e) => Si.value[e], Ke = ref([]);
function ho(e) {
  Ke.value.push(e);
}
const mo = computed(() => no(Ke.value));
function vo(e) {
  Ke.value[e].dismissed = true, Ke.value[e].html = null;
}
const Br = ref(null);
function go(e, t, r, n) {
  let i, s;
  const a = new Promise((o, l) => {
    i = o, s = l;
  });
  return Br.value = {
    title: e,
    text: t,
    confirmButton: r,
    cancelButton: n,
    resolvePromise: i,
    rejectPromise: s
  }, a;
}
function yo() {
  Br.value = null;
}
const Oi = ref({});
function Rr(e) {
  kr.value = e.persistentLayout, Oi.value = e.shared ? e.shared : {}, Si.value[ne.value] = e.flash ? e.flash : {}, wi.value[ne.value] = e.head ? e.head : {}, eo(e.toasts ? e.toasts : [], (t) => {
    Ke.value.push(t);
  }), yi.value[ne.value] = e.errors ? e.errors : {};
}
const $i = ref(() => {
}), xi = ref(() => {
}), Ei = ref(() => {
}), Ti = ref(() => {
});
function Mt(e) {
  $i.value(e);
}
function Mr(e, t) {
  xi.value(e, t);
}
function _i(e, t) {
  Ei.value(e, t);
}
function bo(e) {
  Ti.value(e);
}
const Ai = ref({});
function Ii(e, t, r) {
  Ai.value[e] = t, r && wo(e, t);
}
function wo(e, t) {
  let r = JSON.parse(localStorage.getItem("splade") || "{}") || {};
  r[e] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function So(e, t) {
  return t ? (JSON.parse(localStorage.getItem("splade") || "{}") || {})[e] : Ai.value[e];
}
function Et(e, t) {
  xe || document.dispatchEvent(new CustomEvent(`splade:${e}`, { detail: t }));
}
function Ze(e, t, r, n, i) {
  xe || Ii("scrollY", window.scrollY), Et("request", { url: e, method: t, data: r, headers: n, replace: i });
  const s = we({
    method: t,
    url: e,
    data: r,
    headers: {
      "X-Splade": true,
      "X-Requested-With": "XMLHttpRequest",
      Accept: "text/html, application/xhtml+xml",
      ...n
    },
    onUploadProgress: (a) => {
      r instanceof FormData && (a.percentage = Math.round(a.loaded / a.total * 100), Et("request-progress", { url: e, method: t, data: r, headers: n, replace: i, progress: a }));
    }
  });
  return s.then((a) => {
    lo(a, i), Et("request-response", { url: e, method: t, data: r, headers: n, replace: i, response: a });
  }).catch((a) => {
    if (Et("request-error", { url: e, method: t, data: r, headers: n, replace: i, error: a }), !a.response)
      return;
    if (a.response.status == 409 && a.response.headers["x-splade-redirect-away"])
      return window.location = a.response.headers["x-splade-redirect-away"];
    const o = a.response.data.splade;
    o && (o.lazy || Rr(o)), a.response.status != 422 && bo(
      a.response.data.html ? a.response.data.html : a.response.data
    );
  }), s;
}
function Pi(e) {
  return Ze(e, "GET", {}, {}, true);
}
function Oo(e) {
  return Ze(e, "GET", {}, {}, false);
}
function $o(e) {
  return Ze(e, "GET", {}, { "X-Splade-Modal": "modal" }, false);
}
const Nr = ref({});
function xo(e) {
  const t = Nr.value[e];
  return t ? (ne.value++, _i(t.html, t.type), true) : false;
}
function Eo(e, t, r) {
  Nr.value[e] = { html: t, type: r };
}
function To(e) {
  return Ze(e, "GET", {}, { "X-Splade-Modal": "slideover" }, false);
}
function _o(e, t) {
  return Ze(e, "GET", {}, { "X-Splade-Lazy": t }, false);
}
function Ao() {
  return Pi(q.value.url);
}
const m = {
  init: io,
  replace: Pi,
  visit: Oo,
  modal: $o,
  slideover: To,
  refresh: Ao,
  request: Ze,
  lazy: _o,
  replaceUrlOfCurrentPage: oo,
  htmlForDynamicComponent(e) {
    return q.value.dynamics[e];
  },
  setOnHead(e) {
    $i.value = e;
  },
  setOnHtml(e) {
    xi.value = e;
  },
  setOnModal(e) {
    Ei.value = e;
  },
  setOnServerError(e) {
    Ti.value = e;
  },
  hasValidationErrors: co,
  validationErrors: bi,
  sharedData: Oi,
  flashData: po,
  toasts: Ke,
  toastsReversed: mo,
  confirmModal: Br,
  confirm: go,
  clearConfirmModal: yo,
  pushToast: ho,
  dismissToast: vo,
  restore: So,
  remember: Ii,
  popStack: uo,
  currentStack: ne,
  pageVisitId: computed(() => q.value.pageVisitId),
  dynamicVisitId: computed(() => q.value.dynamicVisitId),
  isSsr: xe,
  openPreloadedModal: xo,
  registerPreloadedModal: Eo
};
var Io = "[object String]";
function ze(e) {
  return typeof e == "string" || !L(e) && $e(e) && _e(e) == Io;
}
const ue = {
  __name: "Render",
  props: {
    html: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(e) {
    const t = e, r = ref(null);
    function n() {
      r.value = h({
        template: t.html
      });
    }
    return watch(() => t.html, n, { immediate: true }), (i, s) => e.html ? (openBlock(), createBlock(unref(r), { key: 0 })) : createCommentVNode("", true);
  }
}, Po = {
  __name: "ServerError",
  props: {
    html: {
      type: String,
      required: true
    }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const r = e, n = ref(null);
    function i() {
      const o = document.createElement("html");
      o.innerHTML = r.html, o.querySelectorAll("a").forEach((u) => u.setAttribute("target", "_top")), document.body.style.overflow = "hidden";
      const l = n.value;
      if (!l.contentWindow)
        throw new Error("iframe not yet ready.");
      l.contentWindow.document.open(), l.contentWindow.document.write(o.outerHTML), l.contentWindow.document.close(), document.addEventListener("keydown", s);
    }
    function s(o) {
      o.keyCode === 27 && a();
    }
    function a() {
      document.body.style.overflow = "visible", document.removeEventListener("keydown", s), t("close");
    }
    return onMounted(() => i()), (o, l) => (openBlock(), createElementBlock("div", {
      style: { position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px", "z-index": "200000", "box-sizing": "border-box", height: "100vh", width: "100vw", "background-color": "rgb(0 0 0 / 0.75)", padding: "2rem" },
      onClick: a
    }, [
      createElementVNode("iframe", {
        ref_key: "iframeElement",
        ref: n,
        class: "bg-white w-full h-full"
      }, null, 512)
    ]));
  }
}, Co = {
  __name: "SpladeApp",
  props: {
    el: {
      type: [String, Object],
      required: false,
      default: ""
    },
    components: {
      type: String,
      required: false,
      default: (e) => {
        if (!m.isSsr) {
          const t = ze(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.components) || "";
        }
      }
    },
    initialHtml: {
      type: String,
      required: false,
      default: (e) => {
        if (!m.isSsr) {
          const t = ze(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.html) || "";
        }
      }
    },
    initialDynamics: {
      type: Object,
      required: false,
      default: (e) => {
        if (!m.isSsr) {
          const t = ze(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.dynamics) || {};
        }
      }
    },
    initialSpladeData: {
      type: Object,
      required: false,
      default: (e) => {
        if (!m.isSsr) {
          const t = ze(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.splade) || {};
        }
      }
    }
  },
  setup(e) {
    const t = e;
    provide("stack", 0);
    const r = ref(), n = ref([]), i = ref(null), s = ref(null), a = inject("$spladeOptions") || {}, o = computed(() => m.currentStack.value < 1 ? [] : {
      filter: "blur(4px)",
      "transition-property": "filter",
      "transition-duration": "150ms",
      "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)"
    });
    function l() {
      i.value = null;
    }
    function u(f) {
      n[f] = null, m.popStack();
    }
    function c(f) {
      const d = document.createElement("meta");
      Y(f, (h2, y) => {
        d[y] = h2;
      }), document.getElementsByTagName("head")[0].appendChild(d);
    }
    function p(f) {
      var h2;
      let d = "meta";
      Y(f, (y, v) => {
        d = `${d}[${v}="${y}"]`;
      });
      try {
        (h2 = document.querySelector(d)) == null || h2.remove();
      } catch {
      }
    }
    return m.setOnHead((f) => {
      var d;
      if (!m.isSsr) {
        if (s.value === null) {
          s.value = f.meta;
          return;
        }
        if (s.value.forEach((h2) => {
          p(h2);
        }), s.value = f.meta, document.title = f.title, f.meta.forEach((h2) => {
          c(h2);
        }), (d = document.querySelector('link[rel="canonical"]')) == null || d.remove(), f.canonical) {
          const h2 = document.createElement("link");
          h2.rel = "canonical", h2.href = f.canonical, document.getElementsByTagName("head")[0].appendChild(h2);
        }
      }
    }), m.setOnHtml((f, d) => {
      n.value = [], r.value = f, nextTick(() => {
        m.isSsr || window.scrollTo(0, d), a.transform_anchors && [...document.querySelectorAll("a")].forEach((h2) => {
          h2.href == "" || h2.href.charAt(0) == "#" || h2.__vnode.dynamicProps === null && (h2.hasAttribute("download") || (h2.onclick = function(y) {
            y.preventDefault(), m.visit(h2.href);
          }));
        });
      });
    }), m.setOnModal(function(f, d) {
      n.value[m.currentStack.value] = { html: f, type: d };
    }), m.setOnServerError(function(f) {
      i.value = f;
    }), m.init(t.initialHtml, t.initialDynamics, t.initialSpladeData), onMounted(() => {
      if (m.isSsr)
        return;
      const f = ze(t.el) ? document.getElementById(t.el) : t.el;
      ["components", "html", "dynamics", "splade"].forEach((d) => {
        delete f.dataset[d];
      });
    }), (f, d) => (openBlock(), createElementBlock("div", null, [
      unref(m).isSsr ? (openBlock(), createBlock(ue, {
        key: `visit.${unref(m).pageVisitId.value}`,
        style: normalizeStyle(unref(o)),
        html: r.value
      }, null, 8, ["style", "html"])) : (openBlock(), createBlock(KeepAlive, {
        key: 0,
        max: unref(a).max_keep_alive
      }, [
        (openBlock(), createBlock(ue, {
          key: `visit.${unref(m).pageVisitId.value}`,
          style: normalizeStyle(unref(o)),
          html: r.value
        }, null, 8, ["style", "html"]))
      ], 1032, ["max"])),
      createVNode(ue, { html: e.components }, null, 8, ["html"]),
      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(m).currentStack.value, (h2) => (openBlock(), createBlock(ue, {
        key: `modal.${h2}`,
        type: n.value[h2].type,
        html: n.value[h2].html,
        stack: h2,
        "on-top-of-stack": unref(m).currentStack.value === h2,
        onClose: (y) => u(h2)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "onClose"]))), 128)),
      i.value ? (openBlock(), createBlock(Po, {
        key: 2,
        html: i.value,
        onClose: l
      }, null, 8, ["html"])) : createCommentVNode("", true)
    ]));
  }
};
function np(e) {
  return () => h(Co, e);
}
var Fo = Object.prototype, qo = Fo.hasOwnProperty;
function Do(e, t) {
  return e != null && qo.call(e, t);
}
var Lo = "[object Symbol]";
function Nt(e) {
  return typeof e == "symbol" || $e(e) && _e(e) == Lo;
}
var jo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ko = /^\w*$/;
function Vr(e, t) {
  if (L(e))
    return false;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Nt(e) ? true : ko.test(e) || !jo.test(e) || t != null && e in Object(t);
}
var Bo = le["__core-js_shared__"];
const ir = Bo;
var xn = function() {
  var e = /[^.]+$/.exec(ir && ir.keys && ir.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ro(e) {
  return !!xn && xn in e;
}
var Mo = Function.prototype, No = Mo.toString;
function Me(e) {
  if (e != null) {
    try {
      return No.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Vo = /[\\^$.*+?()[\]{}|]/g, Ho = /^\[object .+?Constructor\]$/, Uo = Function.prototype, Wo = Object.prototype, zo = Uo.toString, Go = Wo.hasOwnProperty, Ko = RegExp(
  "^" + zo.call(Go).replace(Vo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Xo(e) {
  if (!W(e) || Ro(e))
    return false;
  var t = hi(e) ? Ko : Ho;
  return t.test(Me(e));
}
function Qo(e, t) {
  return e == null ? void 0 : e[t];
}
function Ne(e, t) {
  var r = Qo(e, t);
  return Xo(r) ? r : void 0;
}
var Jo = Ne(Object, "create");
const ft = Jo;
function Yo() {
  this.__data__ = ft ? ft(null) : {}, this.size = 0;
}
function Zo(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var el = "__lodash_hash_undefined__", tl = Object.prototype, rl = tl.hasOwnProperty;
function nl(e) {
  var t = this.__data__;
  if (ft) {
    var r = t[e];
    return r === el ? void 0 : r;
  }
  return rl.call(t, e) ? t[e] : void 0;
}
var il = Object.prototype, sl = il.hasOwnProperty;
function al(e) {
  var t = this.__data__;
  return ft ? t[e] !== void 0 : sl.call(t, e);
}
var ol = "__lodash_hash_undefined__";
function ll(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ft && t === void 0 ? ol : t, this;
}
function ke(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ke.prototype.clear = Yo;
ke.prototype.delete = Zo;
ke.prototype.get = nl;
ke.prototype.has = al;
ke.prototype.set = ll;
function ul() {
  this.__data__ = [], this.size = 0;
}
function Hr(e, t) {
  return e === t || e !== e && t !== t;
}
function Vt(e, t) {
  for (var r = e.length; r--; )
    if (Hr(e[r][0], t))
      return r;
  return -1;
}
var cl = Array.prototype, fl = cl.splice;
function dl(e) {
  var t = this.__data__, r = Vt(t, e);
  if (r < 0)
    return false;
  var n = t.length - 1;
  return r == n ? t.pop() : fl.call(t, r, 1), --this.size, true;
}
function pl(e) {
  var t = this.__data__, r = Vt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function hl(e) {
  return Vt(this.__data__, e) > -1;
}
function ml(e, t) {
  var r = this.__data__, n = Vt(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function me(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
me.prototype.clear = ul;
me.prototype.delete = dl;
me.prototype.get = pl;
me.prototype.has = hl;
me.prototype.set = ml;
var vl = Ne(le, "Map");
const dt = vl;
function gl() {
  this.size = 0, this.__data__ = {
    hash: new ke(),
    map: new (dt || me)(),
    string: new ke()
  };
}
function yl(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ht(e, t) {
  var r = e.__data__;
  return yl(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function bl(e) {
  var t = Ht(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function wl(e) {
  return Ht(this, e).get(e);
}
function Sl(e) {
  return Ht(this, e).has(e);
}
function Ol(e, t) {
  var r = Ht(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function ve(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ve.prototype.clear = gl;
ve.prototype.delete = bl;
ve.prototype.get = wl;
ve.prototype.has = Sl;
ve.prototype.set = Ol;
var $l = "Expected a function";
function Ur(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError($l);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(i))
      return s.get(i);
    var a = e.apply(this, n);
    return r.cache = s.set(i, a) || s, a;
  };
  return r.cache = new (Ur.Cache || ve)(), r;
}
Ur.Cache = ve;
var xl = 500;
function El(e) {
  var t = Ur(e, function(n) {
    return r.size === xl && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Tl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, _l = /\\(\\)?/g, Al = El(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Tl, function(r, n, i, s) {
    t.push(i ? s.replace(_l, "$1") : n || r);
  }), t;
});
const Il = Al;
function Ci(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Pl = 1 / 0, En = Oe ? Oe.prototype : void 0, Tn = En ? En.toString : void 0;
function Ut(e) {
  if (typeof e == "string")
    return e;
  if (L(e))
    return Ci(e, Ut) + "";
  if (Nt(e))
    return Tn ? Tn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Pl ? "-0" : t;
}
function Wr(e) {
  return e == null ? "" : Ut(e);
}
function zr(e, t) {
  return L(e) ? e : Vr(e, t) ? [e] : Il(Wr(e));
}
var Cl = 1 / 0;
function gt(e) {
  if (typeof e == "string" || Nt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Cl ? "-0" : t;
}
function Fi(e, t, r) {
  t = zr(t, e);
  for (var n = -1, i = t.length, s = false; ++n < i; ) {
    var a = gt(t[n]);
    if (!(s = e != null && r(e, a)))
      break;
    e = e[a];
  }
  return s || ++n != i ? s : (i = e == null ? 0 : e.length, !!i && qr(i) && Fr(a, i) && (L(e) || ci(e)));
}
function K(e, t) {
  return e != null && Fi(e, t, Do);
}
function Z(e, t, ...r) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, Z), n;
}
var Dt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Dt || {}), Se = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Se || {});
function G({ visible: e = true, features: t = 0, ourProps: r, theirProps: n, ...i }) {
  var s;
  let a = Fl(n, r), o = Object.assign(i, { props: a });
  if (e || t & 2 && a.static)
    return sr(o);
  if (t & 1) {
    let l = (s = a.unmount) == null || s ? 0 : 1;
    return Z(l, { [0]() {
      return null;
    }, [1]() {
      return sr({ ...i, props: { ...a, hidden: true, style: { display: "none" } } });
    } });
  }
  return sr(o);
}
function sr({ props: e, attrs: t, slots: r, slot: n, name: i }) {
  var s;
  let { as: a, ...o } = Di(e, ["unmount", "static"]), l = (s = r.default) == null ? void 0 : s.call(r, n), u = {};
  if (n) {
    let c = false, p = [];
    for (let [f, d] of Object.entries(n))
      typeof d == "boolean" && (c = true), d === true && p.push(f);
    c && (u["data-headlessui-state"] = p.join(" "));
  }
  if (a === "template") {
    if (l = qi(l != null ? l : []), Object.keys(o).length > 0 || Object.keys(t).length > 0) {
      let [c, ...p] = l != null ? l : [];
      if (!ql(c) || p.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(o).concat(Object.keys(t)).sort((f, d) => f.localeCompare(d)).map((f) => `  - ${f}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((f) => `  - ${f}`).join(`
`)].join(`
`));
      return cloneVNode(c, Object.assign({}, o, u));
    }
    return Array.isArray(l) && l.length === 1 ? l[0] : l;
  }
  return h(a, Object.assign({}, o, u), { default: () => l });
}
function qi(e) {
  return e.flatMap((t) => t.type === Fragment ? qi(t.children) : [t]);
}
function Fl(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, r = {};
  for (let n of e)
    for (let i in n)
      i.startsWith("on") && typeof n[i] == "function" ? (r[i] != null || (r[i] = []), r[i].push(n[i])) : t[i] = n[i];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(r).map((n) => [n, void 0])));
  for (let n in r)
    Object.assign(t, { [n](i, ...s) {
      let a = r[n];
      for (let o of a) {
        if (i instanceof Event && i.defaultPrevented)
          return;
        o(i, ...s);
      }
    } });
  return t;
}
function Di(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t)
    n in r && delete r[n];
  return r;
}
function ql(e) {
  return e == null ? false : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Dl = 0;
function Ll() {
  return ++Dl;
}
function Ve() {
  return Ll();
}
var Li = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Li || {});
function he(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let ji = Symbol("Context");
var Be = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Be || {});
function jl() {
  return Gr() !== null;
}
function Gr() {
  return inject(ji, null);
}
function kl(e) {
  provide(ji, e);
}
const Wt = typeof window > "u" || typeof document > "u";
function et(e) {
  if (Wt)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = he(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let pr = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var pt = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(pt || {}), ki = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(ki || {}), Bl = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Bl || {});
function Rl(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(pr));
}
var Bi = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Bi || {});
function Ml(e, t = 0) {
  var r;
  return e === ((r = et(e)) == null ? void 0 : r.body) ? false : Z(t, { [0]() {
    return e.matches(pr);
  }, [1]() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(pr))
        return true;
      n = n.parentElement;
    }
    return false;
  } });
}
function ut(e) {
  e == null || e.focus({ preventScroll: true });
}
let Nl = ["textarea", "input"].join(",");
function Vl(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Nl)) != null ? r : false;
}
function Hl(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let i = t(r), s = t(n);
    if (i === null || s === null)
      return 0;
    let a = i.compareDocumentPosition(s);
    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function hr(e, t, r = true, n = null) {
  var i;
  let s = (i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? i : document, a = Array.isArray(e) ? r ? Hl(e) : e : Rl(e);
  n = n != null ? n : s.activeElement;
  let o = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), l = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, a.indexOf(n)) - 1;
    if (t & 4)
      return Math.max(0, a.indexOf(n)) + 1;
    if (t & 8)
      return a.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = t & 32 ? { preventScroll: true } : {}, c = 0, p = a.length, f;
  do {
    if (c >= p || c + p <= 0)
      return 0;
    let d = l + c;
    if (t & 16)
      d = (d + p) % p;
    else {
      if (d < 0)
        return 3;
      if (d >= p)
        return 1;
    }
    f = a[d], f == null || f.focus(u), c += o;
  } while (f !== s.activeElement);
  return t & 6 && Vl(f) && f.select(), f.hasAttribute("tabindex") || f.setAttribute("tabindex", "0"), 2;
}
function ar(e, t, r) {
  Wt || watchEffect((n) => {
    document.addEventListener(e, t, r), n(() => document.removeEventListener(e, t, r));
  });
}
function Ul(e, t, r = computed(() => true)) {
  function n(s, a) {
    if (!r.value || s.defaultPrevented)
      return;
    let o = a(s);
    if (o === null || !o.getRootNode().contains(o))
      return;
    let l = function u(c) {
      return typeof c == "function" ? u(c()) : Array.isArray(c) || c instanceof Set ? c : [c];
    }(e);
    for (let u of l) {
      if (u === null)
        continue;
      let c = u instanceof HTMLElement ? u : he(u);
      if (c != null && c.contains(o))
        return;
    }
    return !Ml(o, Bi.Loose) && o.tabIndex !== -1 && s.preventDefault(), t(s, o);
  }
  let i = ref(null);
  ar("mousedown", (s) => {
    var a, o;
    r.value && (i.value = ((o = (a = s.composedPath) == null ? void 0 : a.call(s)) == null ? void 0 : o[0]) || s.target);
  }, true), ar("click", (s) => {
    !i.value || (n(s, () => i.value), i.value = null);
  }, true), ar("blur", (s) => n(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}
var Lt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Lt || {});
let mr = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...i } = e, s = { "aria-hidden": (n & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return G({ ourProps: s, theirProps: i, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
function Wl(e, t, r) {
  Wt || watchEffect((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
var vr = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(vr || {});
function zl() {
  let e = ref(0);
  return Wl("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Ri(e, t, r, n) {
  Wt || watchEffect((i) => {
    e = e != null ? e : window, e.addEventListener(t, r, n), i(() => e.removeEventListener(t, r, n));
  });
}
function Gl(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
var Mi = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Mi || {});
let at = Object.assign(defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: ref(/* @__PURE__ */ new Set()) } }, inheritAttrs: false, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = ref(null);
  n({ el: i, $el: i });
  let s = computed(() => et(i));
  Kl({ ownerDocument: s }, computed(() => Boolean(e.features & 16)));
  let a = Xl({ ownerDocument: s, container: i, initialFocus: computed(() => e.initialFocus) }, computed(() => Boolean(e.features & 2)));
  Ql({ ownerDocument: s, container: i, containers: e.containers, previousActiveElement: a }, computed(() => Boolean(e.features & 8)));
  let o = zl();
  function l() {
    let u = he(i);
    !u || Z(o.value, { [vr.Forwards]: () => hr(u, pt.First), [vr.Backwards]: () => hr(u, pt.Last) });
  }
  return () => {
    let u = {}, c = { ref: i }, { features: p, initialFocus: f, containers: d, ...h$1 } = e;
    return h(Fragment, [Boolean(p & 4) && h(mr, { as: "button", type: "button", onFocus: l, features: Lt.Focusable }), G({ ourProps: c, theirProps: { ...t, ...h$1 }, slot: u, attrs: t, slots: r, name: "FocusTrap" }), Boolean(p & 4) && h(mr, { as: "button", type: "button", onFocus: l, features: Lt.Focusable })]);
  };
} }), { features: Mi });
function Kl({ ownerDocument: e }, t) {
  let r = ref(null);
  function n() {
    var s;
    r.value || (r.value = (s = e.value) == null ? void 0 : s.activeElement);
  }
  function i() {
    !r.value || (ut(r.value), r.value = null);
  }
  onMounted(() => {
    watch(t, (s, a) => {
      s !== a && (s ? n() : i());
    }, { immediate: true });
  }), onUnmounted(i);
}
function Xl({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = ref(null), s = ref(false);
  return onMounted(() => s.value = true), onUnmounted(() => s.value = false), onMounted(() => {
    watch([t, r, n], (a, o) => {
      if (a.every((u, c) => (o == null ? void 0 : o[c]) === u) || !n.value)
        return;
      let l = he(t);
      !l || Gl(() => {
        var u, c;
        if (!s.value)
          return;
        let p = he(r), f = (u = e.value) == null ? void 0 : u.activeElement;
        if (p) {
          if (p === f) {
            i.value = f;
            return;
          }
        } else if (l.contains(f)) {
          i.value = f;
          return;
        }
        p ? ut(p) : hr(l, pt.First | pt.NoScroll) === ki.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: true, flush: "post" });
  }), i;
}
function Ql({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
  var s;
  Ri((s = e.value) == null ? void 0 : s.defaultView, "focus", (a) => {
    if (!i.value)
      return;
    let o = new Set(r == null ? void 0 : r.value);
    o.add(t);
    let l = n.value;
    if (!l)
      return;
    let u = a.target;
    u && u instanceof HTMLElement ? Jl(o, u) ? (n.value = u, ut(u)) : (a.preventDefault(), a.stopPropagation(), ut(l)) : ut(n.value);
  }, true);
}
function Jl(e, t) {
  var r;
  for (let n of e)
    if ((r = n.value) != null && r.contains(t))
      return true;
  return false;
}
let _n = "body > *", We = /* @__PURE__ */ new Set(), be = /* @__PURE__ */ new Map();
function An(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = true;
}
function In(e) {
  let t = be.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function Yl(e, t = ref(true)) {
  watchEffect((r) => {
    if (!t.value || !e.value)
      return;
    let n = e.value, i = et(n);
    if (i) {
      We.add(n);
      for (let s of be.keys())
        s.contains(n) && (In(s), be.delete(s));
      i.querySelectorAll(_n).forEach((s) => {
        if (s instanceof HTMLElement) {
          for (let a of We)
            if (s.contains(a))
              return;
          We.size === 1 && (be.set(s, { "aria-hidden": s.getAttribute("aria-hidden"), inert: s.inert }), An(s));
        }
      }), r(() => {
        if (We.delete(n), We.size > 0)
          i.querySelectorAll(_n).forEach((s) => {
            if (s instanceof HTMLElement && !be.has(s)) {
              for (let a of We)
                if (s.contains(a))
                  return;
              be.set(s, { "aria-hidden": s.getAttribute("aria-hidden"), inert: s.inert }), An(s);
            }
          });
        else
          for (let s of be.keys())
            In(s), be.delete(s);
      });
    }
  });
}
let Ni = Symbol("ForcePortalRootContext");
function Zl() {
  return inject(Ni, false);
}
let gr = defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(e, { slots: t, attrs: r }) {
  return provide(Ni, e.force), () => {
    let { force: n, ...i } = e;
    return G({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function eu(e) {
  let t = et(e);
  if (!t) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let r = t.getElementById("headlessui-portal-root");
  if (r)
    return r;
  let n = t.createElement("div");
  return n.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(n);
}
let Vi = defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = ref(null), i = computed(() => et(n)), s = Zl(), a = inject(Hi, null), o = ref(s === true || a == null ? eu(n.value) : a.resolveTarget());
  return watchEffect(() => {
    s || a != null && (o.value = a.resolveTarget());
  }), onUnmounted(() => {
    var l, u;
    let c = (l = i.value) == null ? void 0 : l.getElementById("headlessui-portal-root");
    !c || o.value === c && o.value.children.length <= 0 && ((u = o.value.parentElement) == null || u.removeChild(o.value));
  }), () => {
    if (o.value === null)
      return null;
    let l = { ref: n, "data-headlessui-portal": "" };
    return h(Teleport, { to: o.value }, G({ ourProps: l, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), Hi = Symbol("PortalGroupContext"), tu = defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = reactive({ resolveTarget() {
    return e.target;
  } });
  return provide(Hi, n), () => {
    let { target: i, ...s } = e;
    return G({ theirProps: s, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), Ui = Symbol("StackContext");
var yr = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(yr || {});
function ru() {
  return inject(Ui, () => {
  });
}
function nu({ type: e, enabled: t, element: r, onUpdate: n }) {
  let i = ru();
  function s(...a) {
    n == null || n(...a), i(...a);
  }
  onMounted(() => {
    watch(t, (a, o) => {
      a ? s(0, e, r) : o === true && s(1, e, r);
    }, { immediate: true, flush: "sync" });
  }), onUnmounted(() => {
    t.value && s(1, e, r);
  }), provide(Ui, s);
}
let Wi = Symbol("DescriptionContext");
function iu() {
  let e = inject(Wi, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function su({ slot: e = ref({}), name: t = "Description", props: r = {} } = {}) {
  let n = ref([]);
  function i(s) {
    return n.value.push(s), () => {
      let a = n.value.indexOf(s);
      a !== -1 && n.value.splice(a, 1);
    };
  }
  return provide(Wi, { register: i, slot: e, name: t, props: r }), computed(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" } }, setup(e, { attrs: t, slots: r }) {
  let n = iu(), i = `headlessui-description-${Ve()}`;
  return onMounted(() => onUnmounted(n.register(i))), () => {
    let { name: s = "Description", slot: a = ref({}), props: o = {} } = n, l = e, u = { ...Object.entries(o).reduce((c, [p, f]) => Object.assign(c, { [p]: unref(f) }), {}), id: i };
    return G({ ourProps: u, theirProps: l, slot: a.value, attrs: t, slots: r, name: s });
  };
} });
function Kr() {
  let e = [], t = [], r = { enqueue(n) {
    t.push(n);
  }, addEventListener(n, i, s, a) {
    return n.addEventListener(i, s, a), r.add(() => n.removeEventListener(i, s, a));
  }, requestAnimationFrame(...n) {
    let i = requestAnimationFrame(...n);
    r.add(() => cancelAnimationFrame(i));
  }, nextFrame(...n) {
    r.requestAnimationFrame(() => {
      r.requestAnimationFrame(...n);
    });
  }, setTimeout(...n) {
    let i = setTimeout(...n);
    r.add(() => clearTimeout(i));
  }, add(n) {
    e.push(n);
  }, dispose() {
    for (let n of e.splice(0))
      n();
  }, async workQueue() {
    for (let n of t.splice(0))
      await n();
  } };
  return r;
}
function au() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
var ou = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ou || {});
let br = Symbol("DialogContext");
function yt(e) {
  let t = inject(br, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, yt), r;
  }
  return t;
}
let Tt = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Xr = defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: Tt }, initialFocus: { type: Object, default: null } }, emits: { close: (e) => true }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  var s;
  let a = ref(false);
  onMounted(() => {
    a.value = true;
  });
  let o = ref(0), l = Gr(), u = computed(() => e.open === Tt && l !== null ? Z(l.value, { [Be.Open]: true, [Be.Closed]: false }) : e.open), c = ref(/* @__PURE__ */ new Set()), p = ref(null), f = ref(null), d = computed(() => et(p));
  if (i({ el: p, $el: p }), !(e.open !== Tt || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === Tt ? void 0 : e.open}`);
  let h$1 = computed(() => a.value && u.value ? 0 : 1), y = computed(() => h$1.value === 0), v = computed(() => o.value > 1), T = inject(br, null) !== null, A = computed(() => v.value ? "parent" : "leaf");
  Yl(p, computed(() => v.value ? y.value : false)), nu({ type: "Dialog", enabled: computed(() => h$1.value === 0), element: p, onUpdate: (w, S, E) => {
    if (S === "Dialog")
      return Z(w, { [yr.Add]() {
        c.value.add(E), o.value += 1;
      }, [yr.Remove]() {
        c.value.delete(E), o.value -= 1;
      } });
  } });
  let I = su({ name: "DialogDescription", slot: computed(() => ({ open: u.value })) }), x = `headlessui-dialog-${Ve()}`, O = ref(null), g = { titleId: O, panelRef: ref(null), dialogState: h$1, setTitleId(w) {
    O.value !== w && (O.value = w);
  }, close() {
    t("close", false);
  } };
  return provide(br, g), Ul(() => {
    var w, S, E;
    return [...Array.from((S = (w = d.value) == null ? void 0 : w.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? S : []).filter((_) => !(!(_ instanceof HTMLElement) || _.contains(he(f)) || g.panelRef.value && _.contains(g.panelRef.value))), (E = g.panelRef.value) != null ? E : p.value];
  }, (w, S) => {
    g.close(), nextTick(() => S == null ? void 0 : S.focus());
  }, computed(() => h$1.value === 0 && !v.value)), Ri((s = d.value) == null ? void 0 : s.defaultView, "keydown", (w) => {
    w.defaultPrevented || w.key === Li.Escape && h$1.value === 0 && (v.value || (w.preventDefault(), w.stopPropagation(), g.close()));
  }), watchEffect((w) => {
    var S;
    if (h$1.value !== 0 || T)
      return;
    let E = d.value;
    if (!E)
      return;
    let _ = Kr();
    function $(k, V, R) {
      let N = k.style.getPropertyValue(V);
      return Object.assign(k.style, { [V]: R }), _.add(() => {
        Object.assign(k.style, { [V]: N });
      });
    }
    let C = E == null ? void 0 : E.documentElement, j = ((S = E.defaultView) != null ? S : window).innerWidth - C.clientWidth;
    if ($(C, "overflow", "hidden"), j > 0) {
      let k = C.clientWidth - C.offsetWidth, V = j - k;
      $(C, "paddingRight", `${V}px`);
    }
    if (au()) {
      let k = window.pageYOffset;
      $(C, "position", "fixed"), $(C, "marginTop", `-${k}px`), $(C, "width", "100%"), _.add(() => window.scrollTo(0, k));
    }
    w(_.dispose);
  }), watchEffect((w) => {
    if (h$1.value !== 0)
      return;
    let S = he(p);
    if (!S)
      return;
    let E = new IntersectionObserver((_) => {
      for (let $ of _)
        $.boundingClientRect.x === 0 && $.boundingClientRect.y === 0 && $.boundingClientRect.width === 0 && $.boundingClientRect.height === 0 && g.close();
    });
    E.observe(S), w(() => E.disconnect());
  }), () => {
    let w = { ...r, ref: p, id: x, role: "dialog", "aria-modal": h$1.value === 0 ? true : void 0, "aria-labelledby": O.value, "aria-describedby": I.value }, { open: S, initialFocus: E, ..._ } = e, $ = { open: h$1.value === 0 };
    return h(gr, { force: true }, () => [h(Vi, () => h(tu, { target: p.value }, () => h(gr, { force: false }, () => h(at, { initialFocus: E, containers: c, features: y.value ? Z(A.value, { parent: at.features.RestoreFocus, leaf: at.features.All & ~at.features.FocusLock }) : at.features.None }, () => G({ ourProps: w, theirProps: _, slot: $, attrs: r, slots: n, visible: h$1.value === 0, features: Dt.RenderStrategy | Dt.Static, name: "Dialog" }))))), h(mr, { features: Lt.Hidden, ref: f })]);
  };
} });
defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r }) {
  let n = yt("DialogOverlay"), i = `headlessui-dialog-overlay-${Ve()}`;
  function s(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), n.close());
  }
  return () => G({ ourProps: { id: i, "aria-hidden": true, onClick: s }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
} });
defineComponent({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" } }, inheritAttrs: false, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = yt("DialogBackdrop"), s = `headlessui-dialog-backdrop-${Ve()}`, a = ref(null);
  return n({ el: a, $el: a }), onMounted(() => {
    if (i.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let o = e, l = { id: s, ref: a, "aria-hidden": true };
    return h(gr, { force: true }, () => h(Vi, () => G({ ourProps: l, theirProps: { ...t, ...o }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let Qr = defineComponent({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = yt("DialogPanel"), s = `headlessui-dialog-panel-${Ve()}`;
  n({ el: i.panelRef, $el: i.panelRef });
  function a(o) {
    o.stopPropagation();
  }
  return () => {
    let o = { id: s, ref: i.panelRef, onClick: a };
    return G({ ourProps: o, theirProps: e, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogPanel" });
  };
} });
defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" } }, setup(e, { attrs: t, slots: r }) {
  let n = yt("DialogTitle"), i = `headlessui-dialog-title-${Ve()}`;
  return onMounted(() => {
    n.setTitleId(i), onUnmounted(() => n.setTitleId(null));
  }), () => G({ ourProps: { id: i }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
} });
function lu(e) {
  let t = { called: false };
  return (...r) => {
    if (!t.called)
      return t.called = true, e(...r);
  };
}
function or(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function _t(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var wr = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(wr || {});
function uu(e, t) {
  let r = Kr();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [s, a] = [n, i].map((o) => {
    let [l = 0] = o.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return s !== 0 ? r.setTimeout(() => t("finished"), s + a) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function Pn(e, t, r, n, i, s) {
  let a = Kr(), o = s !== void 0 ? lu(s) : () => {
  };
  return _t(e, ...i), or(e, ...t, ...r), a.nextFrame(() => {
    _t(e, ...r), or(e, ...n), a.add(uu(e, (l) => (_t(e, ...n, ...t), or(e, ...i), o(l))));
  }), a.add(() => _t(e, ...t, ...r, ...n, ...i)), a.add(() => o("cancelled")), a.dispose;
}
function Fe(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Jr = Symbol("TransitionContext");
var cu = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(cu || {});
function fu() {
  return inject(Jr, null) !== null;
}
function du() {
  let e = inject(Jr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function pu() {
  let e = inject(Yr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Yr = Symbol("NestingContext");
function zt(e) {
  return "children" in e ? zt(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function zi(e) {
  let t = ref([]), r = ref(false);
  onMounted(() => r.value = true), onUnmounted(() => r.value = false);
  function n(s, a = Se.Hidden) {
    let o = t.value.findIndex(({ id: l }) => l === s);
    o !== -1 && (Z(a, { [Se.Unmount]() {
      t.value.splice(o, 1);
    }, [Se.Hidden]() {
      t.value[o].state = "hidden";
    } }), !zt(t) && r.value && (e == null || e()));
  }
  function i(s) {
    let a = t.value.find(({ id: o }) => o === s);
    return a ? a.state !== "visible" && (a.state = "visible") : t.value.push({ id: s, state: "visible" }), () => n(s, Se.Unmount);
  }
  return { children: t, register: i, unregister: n };
}
let Gi = Dt.RenderStrategy, tt = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  if (!fu() && jl())
    return () => h(rt, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, n);
  let s = ref(null), a = ref("visible"), o = computed(() => e.unmount ? Se.Unmount : Se.Hidden);
  i({ el: s, $el: s });
  let { show: l, appear: u } = du(), { register: c, unregister: p } = pu(), f = { value: true }, d = Ve(), h$1 = { value: false }, y = zi(() => {
    h$1.value || (a.value = "hidden", p(d), t("afterLeave"));
  });
  onMounted(() => {
    let S = c(d);
    onUnmounted(S);
  }), watchEffect(() => {
    if (o.value === Se.Hidden && !!d) {
      if (l && a.value !== "visible") {
        a.value = "visible";
        return;
      }
      Z(a.value, { hidden: () => p(d), visible: () => c(d) });
    }
  });
  let v = Fe(e.enter), T = Fe(e.enterFrom), A = Fe(e.enterTo), I = Fe(e.entered), x = Fe(e.leave), O = Fe(e.leaveFrom), g = Fe(e.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (a.value === "visible") {
        let S = he(s);
        if (S instanceof Comment && S.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function w(S) {
    let E = f.value && !u.value, _ = he(s);
    !_ || !(_ instanceof HTMLElement) || E || (h$1.value = true, l.value && t("beforeEnter"), l.value || t("beforeLeave"), S(l.value ? Pn(_, v, T, A, I, ($) => {
      h$1.value = false, $ === wr.Finished && t("afterEnter");
    }) : Pn(_, x, O, g, I, ($) => {
      h$1.value = false, $ === wr.Finished && (zt(y) || (a.value = "hidden", p(d), t("afterLeave")));
    })));
  }
  return onMounted(() => {
    watch([l], (S, E, _) => {
      w(_), f.value = false;
    }, { immediate: true });
  }), provide(Yr, y), kl(computed(() => Z(a.value, { visible: Be.Open, hidden: Be.Closed }))), () => {
    let { appear: S, show: E, enter: _, enterFrom: $, enterTo: C, entered: j, leave: k, leaveFrom: V, leaveTo: R, ...N } = e;
    return G({ theirProps: N, ourProps: { ref: s }, slot: {}, slots: n, attrs: r, features: Gi, visible: a.value === "visible", name: "TransitionChild" });
  };
} }), hu = tt, rt = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e, { emit: t, attrs: r, slots: n }) {
  let i = Gr(), s = computed(() => e.show === null && i !== null ? Z(i.value, { [Be.Open]: true, [Be.Closed]: false }) : e.show);
  watchEffect(() => {
    if (![true, false].includes(s.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = ref(s.value ? "visible" : "hidden"), o = zi(() => {
    a.value = "hidden";
  }), l = ref(true), u = { show: s, appear: computed(() => e.appear || !l.value) };
  return onMounted(() => {
    watchEffect(() => {
      l.value = false, s.value ? a.value = "visible" : zt(o) || (a.value = "hidden");
    });
  }), provide(Yr, o), provide(Jr, u), () => {
    let c = Di(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), p = { unmount: e.unmount };
    return G({ ourProps: { ...p, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [h(hu, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...p, ...c }, n.default)] }, attrs: {}, features: Gi, visible: a.value === "visible", name: "Transition" });
  };
} });
const mu = {
  props: {
    defaultTitle: {
      type: String,
      required: false,
      default: ""
    },
    defaultText: {
      type: String,
      required: false,
      default: ""
    },
    defaultConfirmButton: {
      type: String,
      required: false,
      default: ""
    },
    defaultCancelButton: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    hasConfirmModal: () => !!m.confirmModal.value,
    title: function() {
      var e;
      return (e = m.confirmModal.value) != null && e.title ? m.confirmModal.value.title : this.defaultTitle;
    },
    text: function() {
      var e;
      return (e = m.confirmModal.value) != null && e.text ? m.confirmModal.value.text : this.defaultText;
    },
    confirmButton: function() {
      var e;
      return (e = m.confirmModal.value) != null && e.confirmButton ? m.confirmModal.value.confirmButton : this.defaultConfirmButton;
    },
    cancelButton: function() {
      var e;
      return (e = m.confirmModal.value) != null && e.cancelButton ? m.confirmModal.value.cancelButton : this.defaultCancelButton;
    }
  },
  watch: {
    hasConfirmModal(e) {
      e && (this.isOpen = true);
    }
  },
  methods: {
    cancel() {
      m.confirmModal.value.rejectPromise(), this.setIsOpen(false);
    },
    confirm() {
      m.confirmModal.value.resolvePromise(), this.setIsOpen(false);
    },
    setIsOpen(e) {
      this.isOpen = e;
    },
    emitClose() {
      m.clearConfirmModal();
    }
  },
  render() {
    return this.$slots.default({
      title: this.title,
      text: this.text,
      confirmButton: this.confirmButton,
      cancelButton: this.cancelButton,
      isOpen: this.isOpen,
      setIsOpen: this.setIsOpen,
      cancel: this.cancel,
      confirm: this.confirm,
      emitClose: this.emitClose,
      Dialog: Xr,
      DialogPanel: Qr,
      TransitionRoot: rt,
      TransitionChild: tt
    });
  }
};
function Ki(e, t) {
  t = zr(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[gt(t[r++])];
  return r && r == n ? e : void 0;
}
function ht(e, t, r) {
  var n = e == null ? void 0 : Ki(e, t);
  return n === void 0 ? r : n;
}
var vu = function() {
  try {
    var e = Ne(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Cn = vu;
function Xi(e, t, r) {
  t == "__proto__" && Cn ? Cn(e, t, {
    configurable: true,
    enumerable: true,
    value: r,
    writable: true
  }) : e[t] = r;
}
var gu = Object.prototype, yu = gu.hasOwnProperty;
function bu(e, t, r) {
  var n = e[t];
  (!(yu.call(e, t) && Hr(n, r)) || r === void 0 && !(t in e)) && Xi(e, t, r);
}
function wu(e, t, r, n) {
  if (!W(e))
    return e;
  t = zr(t, e);
  for (var i = -1, s = t.length, a = s - 1, o = e; o != null && ++i < s; ) {
    var l = gt(t[i]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != a) {
      var c = o[l];
      u = n ? n(c, l, o) : void 0, u === void 0 && (u = W(c) ? c : Fr(t[i + 1]) ? [] : {});
    }
    bu(o, l, u), o = o[l];
  }
  return e;
}
function Qi(e, t, r) {
  return e == null ? e : wu(e, t, r);
}
const Su = {
  props: {
    default: {
      type: Object,
      default: () => ({}),
      required: false
    },
    remember: {
      type: String,
      default: null,
      required: false
    },
    localStorage: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data() {
    return {
      values: {}
    };
  },
  mounted() {
    if (this.remember) {
      let e = m.restore(this.remember, this.localStorage);
      e || (e = {}), this.values = Object.assign({}, { ...this.default, ...e });
    } else
      this.values = Object.assign({}, { ...this.default });
  },
  updated() {
    this.remember && m.remember(this.remember, { ...this.values }, this.localStorage);
  },
  render() {
    const e = this;
    return this.$slots.default(
      new Proxy(this.values, {
        ownKeys() {
          return Object.keys(e.values);
        },
        get(t, r) {
          return ht(e.values, r);
        },
        set(t, r, n) {
          Qi(e.values, r, n);
        }
      })
    );
  }
};
var Ou = function() {
  return le.Date.now();
};
const lr = Ou;
var $u = /\s/;
function xu(e) {
  for (var t = e.length; t-- && $u.test(e.charAt(t)); )
    ;
  return t;
}
var Eu = /^\s+/;
function Tu(e) {
  return e && e.slice(0, xu(e) + 1).replace(Eu, "");
}
var Fn = 0 / 0, _u = /^[-+]0x[0-9a-f]+$/i, Au = /^0b[01]+$/i, Iu = /^0o[0-7]+$/i, Pu = parseInt;
function Sr(e) {
  if (typeof e == "number")
    return e;
  if (Nt(e))
    return Fn;
  if (W(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = W(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Tu(e);
  var r = Au.test(e);
  return r || Iu.test(e) ? Pu(e.slice(2), r ? 2 : 8) : _u.test(e) ? Fn : +e;
}
var Cu = "Expected a function", Fu = Math.max, qu = Math.min;
function Zr(e, t, r) {
  var n, i, s, a, o, l, u = 0, c = false, p = false, f = true;
  if (typeof e != "function")
    throw new TypeError(Cu);
  t = Sr(t) || 0, W(r) && (c = !!r.leading, p = "maxWait" in r, s = p ? Fu(Sr(r.maxWait) || 0, t) : s, f = "trailing" in r ? !!r.trailing : f);
  function d(g) {
    var w = n, S = i;
    return n = i = void 0, u = g, a = e.apply(S, w), a;
  }
  function h2(g) {
    return u = g, o = setTimeout(T, t), c ? d(g) : a;
  }
  function y(g) {
    var w = g - l, S = g - u, E = t - w;
    return p ? qu(E, s - S) : E;
  }
  function v(g) {
    var w = g - l, S = g - u;
    return l === void 0 || w >= t || w < 0 || p && S >= s;
  }
  function T() {
    var g = lr();
    if (v(g))
      return A(g);
    o = setTimeout(T, y(g));
  }
  function A(g) {
    return o = void 0, f && n ? d(g) : (n = i = void 0, a);
  }
  function I() {
    o !== void 0 && clearTimeout(o), u = 0, n = l = i = o = void 0;
  }
  function x() {
    return o === void 0 ? a : A(lr());
  }
  function O() {
    var g = lr(), w = v(g);
    if (n = arguments, i = this, l = g, w) {
      if (o === void 0)
        return h2(l);
      if (p)
        return clearTimeout(o), o = setTimeout(T, t), d(l);
    }
    return o === void 0 && (o = setTimeout(T, t)), a;
  }
  return O.cancel = I, O.flush = x, O;
}
const Du = {
  props: {
    url: {
      type: String,
      required: true
    },
    method: {
      type: String,
      required: false,
      default: "GET"
    },
    acceptHeader: {
      type: String,
      required: false,
      default: "application/json"
    },
    poll: {
      type: Number,
      required: false,
      default: null
    },
    default: {
      type: Object,
      required: false,
      default: () => ({})
    },
    request: {
      type: Object,
      required: false,
      default: () => ({})
    },
    manual: {
      type: Boolean,
      required: false,
      default: false
    },
    watchDebounce: {
      type: Number,
      required: false,
      default: 0
    },
    watchValue: {
      validator() {
        return true;
      },
      required: false,
      default: null
    }
  },
  data() {
    return {
      response: Object.assign({}, { ...this.default }),
      processing: false,
      debounceFunction: null
    };
  },
  watch: {
    watchValue: {
      deep: true,
      handler() {
        this.processing = true, this.watchDebounce ? this.debounceFunction() : this.performRequest();
      }
    }
  },
  mounted() {
    this.manual || this.$nextTick(this.performRequest);
  },
  created() {
    this.debounceFunction = Zr(() => {
      this.performRequest();
    }, this.watchDebounce);
  },
  methods: {
    performRequest() {
      this.processing = true;
      const e = {
        url: this.url,
        method: this.method,
        headers: {
          Accept: this.acceptHeader
        }
      };
      Object.keys(this.request).length > 0 && (e.data = this.request), we(e).then((t) => {
        this.response = t.data, this.processing = false;
      }).catch(() => {
        this.processing = false;
      }), this.poll && setTimeout(() => {
        this.performRequest();
      }, this.poll);
    }
  },
  render() {
    return this.$slots.default({
      processing: this.processing,
      response: this.response,
      reload: this.performRequest
    });
  }
}, Lu = {
  data() {
    return {
      isActivated: true
    };
  },
  deactivated() {
    this.isActivated = false;
  },
  activated() {
    this.isActivated = true;
  },
  render() {
    return this.$slots.default({
      Dialog: Xr,
      DialogPanel: Qr,
      isActivated: this.isActivated
    });
  }
}, Ji = {
  __name: "OnClickOutside",
  props: {
    do: {
      type: Function,
      required: true
    },
    opened: {
      type: Boolean,
      required: true
    },
    closeOnEscape: {
      type: Boolean,
      required: false,
      default: true
    },
    ignoreInnerTargets: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(e) {
    const t = e, r = ref(null), n = ref(null), i = ref(null);
    return onMounted(() => {
      r.value = (s) => {
        n.value.children[0].contains(s.target) || t.ignoreInnerTargets && n.value.contains(s.target) || t.do();
      }, document.addEventListener("click", r.value), document.addEventListener("touchstart", r.value), t.closeOnEscape && (i.value = (s) => {
        t.opened && s.key === "Escape" && t.do();
      }, document.addEventListener("keydown", i.value));
    }), onBeforeUnmount(() => {
      document.removeEventListener("click", r.value), document.removeEventListener("touchstart", r.value), t.closeOnEscape && document.removeEventListener("keydown", i.value);
    }), (s, a) => (openBlock(), createElementBlock("div", {
      ref_key: "root",
      ref: n
    }, [
      renderSlot(s.$slots, "default")
    ], 512));
  }
};
function J(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Re(e) {
  var t = J(e).Element;
  return e instanceof t || e instanceof Element;
}
function Q(e) {
  var t = J(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function en(e) {
  if (typeof ShadowRoot > "u")
    return false;
  var t = J(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Le = Math.max, jt = Math.min, Xe = Math.round;
function Or() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Yi() {
  return !/^((?!chrome|android).)*safari/i.test(Or());
}
function Qe(e, t, r) {
  t === void 0 && (t = false), r === void 0 && (r = false);
  var n = e.getBoundingClientRect(), i = 1, s = 1;
  t && Q(e) && (i = e.offsetWidth > 0 && Xe(n.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && Xe(n.height) / e.offsetHeight || 1);
  var a = Re(e) ? J(e) : window, o = a.visualViewport, l = !Yi() && r, u = (n.left + (l && o ? o.offsetLeft : 0)) / i, c = (n.top + (l && o ? o.offsetTop : 0)) / s, p = n.width / i, f = n.height / s;
  return {
    width: p,
    height: f,
    top: c,
    right: u + p,
    bottom: c + f,
    left: u,
    x: u,
    y: c
  };
}
function tn(e) {
  var t = J(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function ju(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function ku(e) {
  return e === J(e) || !Q(e) ? tn(e) : ju(e);
}
function ae(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ae(e) {
  return ((Re(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function rn(e) {
  return Qe(Ae(e)).left + tn(e).scrollLeft;
}
function re(e) {
  return J(e).getComputedStyle(e);
}
function nn(e) {
  var t = re(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function Bu(e) {
  var t = e.getBoundingClientRect(), r = Xe(t.width) / e.offsetWidth || 1, n = Xe(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Ru(e, t, r) {
  r === void 0 && (r = false);
  var n = Q(t), i = Q(t) && Bu(t), s = Ae(t), a = Qe(e, i, r), o = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((ae(t) !== "body" || nn(s)) && (o = ku(t)), Q(t) ? (l = Qe(t, true), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = rn(s))), {
    x: a.left + o.scrollLeft - l.x,
    y: a.top + o.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function Zi(e) {
  var t = Qe(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Gt(e) {
  return ae(e) === "html" ? e : e.assignedSlot || e.parentNode || (en(e) ? e.host : null) || Ae(e);
}
function es(e) {
  return ["html", "body", "#document"].indexOf(ae(e)) >= 0 ? e.ownerDocument.body : Q(e) && nn(e) ? e : es(Gt(e));
}
function ct(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = es(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), s = J(n), a = i ? [s].concat(s.visualViewport || [], nn(n) ? n : []) : n, o = t.concat(a);
  return i ? o : o.concat(ct(Gt(a)));
}
function Mu(e) {
  return ["table", "td", "th"].indexOf(ae(e)) >= 0;
}
function qn(e) {
  return !Q(e) || re(e).position === "fixed" ? null : e.offsetParent;
}
function Nu(e) {
  var t = /firefox/i.test(Or()), r = /Trident/i.test(Or());
  if (r && Q(e)) {
    var n = re(e);
    if (n.position === "fixed")
      return null;
  }
  var i = Gt(e);
  for (en(i) && (i = i.host); Q(i) && ["html", "body"].indexOf(ae(i)) < 0; ) {
    var s = re(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Kt(e) {
  for (var t = J(e), r = qn(e); r && Mu(r) && re(r).position === "static"; )
    r = qn(r);
  return r && (ae(r) === "html" || ae(r) === "body" && re(r).position === "static") ? t : r || Nu(e) || t;
}
var ee = "top", oe = "bottom", Ee = "right", ce = "left", Xt = "auto", Qt = [ee, oe, Ee, ce], Je = "start", mt = "end", Vu = "clippingParents", ts = "viewport", ot = "popper", Hu = "reference", Dn = /* @__PURE__ */ Qt.reduce(function(e, t) {
  return e.concat([t + "-" + Je, t + "-" + mt]);
}, []), Uu = /* @__PURE__ */ [].concat(Qt, [Xt]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Je, t + "-" + mt]);
}, []), Wu = "beforeRead", zu = "read", Gu = "afterRead", Ku = "beforeMain", Xu = "main", Qu = "afterMain", Ju = "beforeWrite", Yu = "write", Zu = "afterWrite", $r = [Wu, zu, Gu, Ku, Xu, Qu, Ju, Yu, Zu];
function ec(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function i(s) {
    r.add(s.name);
    var a = [].concat(s.requires || [], s.requiresIfExists || []);
    a.forEach(function(o) {
      if (!r.has(o)) {
        var l = t.get(o);
        l && i(l);
      }
    }), n.push(s);
  }
  return e.forEach(function(s) {
    r.has(s.name) || i(s);
  }), n;
}
function tc(e) {
  var t = ec(e);
  return $r.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function rc(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function ye(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return [].concat(r).reduce(function(i, s) {
    return i.replace(/%s/, s);
  }, e);
}
var qe = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', nc = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Ln = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function ic(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Ln).filter(function(r, n, i) {
      return i.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(ye(qe, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(ye(qe, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          $r.indexOf(t.phase) < 0 && console.error(ye(qe, t.name, '"phase"', "either " + $r.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(ye(qe, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(ye(qe, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(ye(qe, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(ye(qe, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Ln.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(i) {
          return i.name === n;
        }) == null && console.error(ye(nc, String(t.name), n, n));
      });
    });
  });
}
function sc(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(n) {
    var i = t(n);
    if (!r.has(i))
      return r.add(i), true;
  });
}
function fe(e) {
  return e.split("-")[0];
}
function ac(e) {
  var t = e.reduce(function(r, n) {
    var i = r[n.name];
    return r[n.name] = i ? Object.assign({}, i, n, {
      options: Object.assign({}, i.options, n.options),
      data: Object.assign({}, i.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
function oc(e, t) {
  var r = J(e), n = Ae(e), i = r.visualViewport, s = n.clientWidth, a = n.clientHeight, o = 0, l = 0;
  if (i) {
    s = i.width, a = i.height;
    var u = Yi();
    (u || !u && t === "fixed") && (o = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: o + rn(e),
    y: l
  };
}
function lc(e) {
  var t, r = Ae(e), n = tn(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, s = Le(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = Le(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), o = -n.scrollLeft + rn(e), l = -n.scrollTop;
  return re(i || r).direction === "rtl" && (o += Le(r.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: a,
    x: o,
    y: l
  };
}
function uc(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return true;
  if (r && en(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return true;
      n = n.parentNode || n.host;
    } while (n);
  }
  return false;
}
function xr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function cc(e, t) {
  var r = Qe(e, false, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function jn(e, t, r) {
  return t === ts ? xr(oc(e, r)) : Re(t) ? cc(t, r) : xr(lc(Ae(e)));
}
function fc(e) {
  var t = ct(Gt(e)), r = ["absolute", "fixed"].indexOf(re(e).position) >= 0, n = r && Q(e) ? Kt(e) : e;
  return Re(n) ? t.filter(function(i) {
    return Re(i) && uc(i, n) && ae(i) !== "body";
  }) : [];
}
function dc(e, t, r, n) {
  var i = t === "clippingParents" ? fc(e) : [].concat(t), s = [].concat(i, [r]), a = s[0], o = s.reduce(function(l, u) {
    var c = jn(e, u, n);
    return l.top = Le(c.top, l.top), l.right = jt(c.right, l.right), l.bottom = jt(c.bottom, l.bottom), l.left = Le(c.left, l.left), l;
  }, jn(e, a, n));
  return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
function Ye(e) {
  return e.split("-")[1];
}
function rs(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ns(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? fe(n) : null, s = n ? Ye(n) : null, a = t.x + t.width / 2 - r.width / 2, o = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case ee:
      l = {
        x: a,
        y: t.y - r.height
      };
      break;
    case oe:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case Ee:
      l = {
        x: t.x + t.width,
        y: o
      };
      break;
    case ce:
      l = {
        x: t.x - r.width,
        y: o
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = i ? rs(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (s) {
      case Je:
        l[u] = l[u] - (t[c] / 2 - r[c] / 2);
        break;
      case mt:
        l[u] = l[u] + (t[c] / 2 - r[c] / 2);
        break;
    }
  }
  return l;
}
function is() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function pc(e) {
  return Object.assign({}, is(), e);
}
function hc(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
function sn(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, s = r.strategy, a = s === void 0 ? e.strategy : s, o = r.boundary, l = o === void 0 ? Vu : o, u = r.rootBoundary, c = u === void 0 ? ts : u, p = r.elementContext, f = p === void 0 ? ot : p, d = r.altBoundary, h2 = d === void 0 ? false : d, y = r.padding, v = y === void 0 ? 0 : y, T = pc(typeof v != "number" ? v : hc(v, Qt)), A = f === ot ? Hu : ot, I = e.rects.popper, x = e.elements[h2 ? A : f], O = dc(Re(x) ? x : x.contextElement || Ae(e.elements.popper), l, c, a), g = Qe(e.elements.reference), w = ns({
    reference: g,
    element: I,
    strategy: "absolute",
    placement: i
  }), S = xr(Object.assign({}, I, w)), E = f === ot ? S : g, _ = {
    top: O.top - E.top + T.top,
    bottom: E.bottom - O.bottom + T.bottom,
    left: O.left - E.left + T.left,
    right: E.right - O.right + T.right
  }, $ = e.modifiersData.offset;
  if (f === ot && $) {
    var C = $[i];
    Object.keys(_).forEach(function(j) {
      var k = [Ee, oe].indexOf(j) >= 0 ? 1 : -1, V = [ee, oe].indexOf(j) >= 0 ? "y" : "x";
      _[j] += C[V] * k;
    });
  }
  return _;
}
var kn = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", mc = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Bn = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Rn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function vc(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, s = i === void 0 ? Bn : i;
  return function(o, l, u) {
    u === void 0 && (u = s);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Bn, s),
      modifiersData: {},
      elements: {
        reference: o,
        popper: l
      },
      attributes: {},
      styles: {}
    }, p = [], f = false, d = {
      state: c,
      setOptions: function(T) {
        var A = typeof T == "function" ? T(c.options) : T;
        y(), c.options = Object.assign({}, s, c.options, A), c.scrollParents = {
          reference: Re(o) ? ct(o) : o.contextElement ? ct(o.contextElement) : [],
          popper: ct(l)
        };
        var I = tc(ac([].concat(n, c.options.modifiers)));
        if (c.orderedModifiers = I.filter(function($) {
          return $.enabled;
        }), process.env.NODE_ENV !== "production") {
          var x = sc([].concat(I, c.options.modifiers), function($) {
            var C = $.name;
            return C;
          });
          if (ic(x), fe(c.options.placement) === Xt) {
            var O = c.orderedModifiers.find(function($) {
              var C = $.name;
              return C === "flip";
            });
            O || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var g = re(l), w = g.marginTop, S = g.marginRight, E = g.marginBottom, _ = g.marginLeft;
          [w, S, E, _].some(function($) {
            return parseFloat($);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return h2(), d.update();
      },
      forceUpdate: function() {
        if (!f) {
          var T = c.elements, A = T.reference, I = T.popper;
          if (!Rn(A, I)) {
            process.env.NODE_ENV !== "production" && console.error(kn);
            return;
          }
          c.rects = {
            reference: Ru(A, Kt(I), c.options.strategy === "fixed"),
            popper: Zi(I)
          }, c.reset = false, c.placement = c.options.placement, c.orderedModifiers.forEach(function($) {
            return c.modifiersData[$.name] = Object.assign({}, $.data);
          });
          for (var x = 0, O = 0; O < c.orderedModifiers.length; O++) {
            if (process.env.NODE_ENV !== "production" && (x += 1, x > 100)) {
              console.error(mc);
              break;
            }
            if (c.reset === true) {
              c.reset = false, O = -1;
              continue;
            }
            var g = c.orderedModifiers[O], w = g.fn, S = g.options, E = S === void 0 ? {} : S, _ = g.name;
            typeof w == "function" && (c = w({
              state: c,
              options: E,
              name: _,
              instance: d
            }) || c);
          }
        }
      },
      update: rc(function() {
        return new Promise(function(v) {
          d.forceUpdate(), v(c);
        });
      }),
      destroy: function() {
        y(), f = true;
      }
    };
    if (!Rn(o, l))
      return process.env.NODE_ENV !== "production" && console.error(kn), d;
    d.setOptions(u).then(function(v) {
      !f && u.onFirstUpdate && u.onFirstUpdate(v);
    });
    function h2() {
      c.orderedModifiers.forEach(function(v) {
        var T = v.name, A = v.options, I = A === void 0 ? {} : A, x = v.effect;
        if (typeof x == "function") {
          var O = x({
            state: c,
            name: T,
            instance: d,
            options: I
          }), g = function() {
          };
          p.push(O || g);
        }
      });
    }
    function y() {
      p.forEach(function(v) {
        return v();
      }), p = [];
    }
    return d;
  };
}
var At = {
  passive: true
};
function gc(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, s = i === void 0 ? true : i, a = n.resize, o = a === void 0 ? true : a, l = J(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, At);
  }), o && l.addEventListener("resize", r.update, At), function() {
    s && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, At);
    }), o && l.removeEventListener("resize", r.update, At);
  };
}
const yc = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function() {
  },
  effect: gc,
  data: {}
};
function bc(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = ns({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const wc = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: bc,
  data: {}
};
var Sc = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Oc(e) {
  var t = e.x, r = e.y, n = window, i = n.devicePixelRatio || 1;
  return {
    x: Xe(t * i) / i || 0,
    y: Xe(r * i) / i || 0
  };
}
function Mn(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, s = e.variation, a = e.offsets, o = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, p = e.isFixed, f = a.x, d = f === void 0 ? 0 : f, h2 = a.y, y = h2 === void 0 ? 0 : h2, v = typeof c == "function" ? c({
    x: d,
    y
  }) : {
    x: d,
    y
  };
  d = v.x, y = v.y;
  var T = a.hasOwnProperty("x"), A = a.hasOwnProperty("y"), I = ce, x = ee, O = window;
  if (u) {
    var g = Kt(r), w = "clientHeight", S = "clientWidth";
    if (g === J(r) && (g = Ae(r), re(g).position !== "static" && o === "absolute" && (w = "scrollHeight", S = "scrollWidth")), g = g, i === ee || (i === ce || i === Ee) && s === mt) {
      x = oe;
      var E = p && g === O && O.visualViewport ? O.visualViewport.height : g[w];
      y -= E - n.height, y *= l ? 1 : -1;
    }
    if (i === ce || (i === ee || i === oe) && s === mt) {
      I = Ee;
      var _ = p && g === O && O.visualViewport ? O.visualViewport.width : g[S];
      d -= _ - n.width, d *= l ? 1 : -1;
    }
  }
  var $ = Object.assign({
    position: o
  }, u && Sc), C = c === true ? Oc({
    x: d,
    y
  }) : {
    x: d,
    y
  };
  if (d = C.x, y = C.y, l) {
    var j;
    return Object.assign({}, $, (j = {}, j[x] = A ? "0" : "", j[I] = T ? "0" : "", j.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + y + "px)" : "translate3d(" + d + "px, " + y + "px, 0)", j));
  }
  return Object.assign({}, $, (t = {}, t[x] = A ? y + "px" : "", t[I] = T ? d + "px" : "", t.transform = "", t));
}
function $c(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? true : n, s = r.adaptive, a = s === void 0 ? true : s, o = r.roundOffsets, l = o === void 0 ? true : o;
  if (process.env.NODE_ENV !== "production") {
    var u = re(t.elements.popper).transitionProperty || "";
    a && ["transform", "top", "right", "bottom", "left"].some(function(p) {
      return u.indexOf(p) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var c = {
    placement: fe(t.placement),
    variation: Ye(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Mn(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Mn(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: false,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const xc = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: $c,
  data: {}
};
function Ec(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, s = t.elements[r];
    !Q(s) || !ae(s) || (Object.assign(s.style, n), Object.keys(i).forEach(function(a) {
      var o = i[a];
      o === false ? s.removeAttribute(a) : s.setAttribute(a, o === true ? "" : o);
    }));
  });
}
function Tc(e) {
  var t = e.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var i = t.elements[n], s = t.attributes[n] || {}, a = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), o = a.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !Q(i) || !ae(i) || (Object.assign(i.style, o), Object.keys(s).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const _c = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: Ec,
  effect: Tc,
  requires: ["computeStyles"]
};
var Ac = [yc, wc, xc, _c], Ic = /* @__PURE__ */ vc({
  defaultModifiers: Ac
});
function Pc(e) {
  return e === "x" ? "y" : "x";
}
function Pt(e, t, r) {
  return Le(e, jt(t, r));
}
function Cc(e, t, r) {
  var n = Pt(e, t, r);
  return n > r ? r : n;
}
function Fc(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, s = i === void 0 ? true : i, a = r.altAxis, o = a === void 0 ? false : a, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, p = r.padding, f = r.tether, d = f === void 0 ? true : f, h2 = r.tetherOffset, y = h2 === void 0 ? 0 : h2, v = sn(t, {
    boundary: l,
    rootBoundary: u,
    padding: p,
    altBoundary: c
  }), T = fe(t.placement), A = Ye(t.placement), I = !A, x = rs(T), O = Pc(x), g = t.modifiersData.popperOffsets, w = t.rects.reference, S = t.rects.popper, E = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, _ = typeof E == "number" ? {
    mainAxis: E,
    altAxis: E
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, E), $ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, C = {
    x: 0,
    y: 0
  };
  if (!!g) {
    if (s) {
      var j, k = x === "y" ? ee : ce, V = x === "y" ? oe : Ee, R = x === "y" ? "height" : "width", N = g[x], wt = N + v[k], Ie = N - v[V], St = d ? -S[R] / 2 : 0, Yt = A === Je ? w[R] : S[R], nt = A === Je ? -S[R] : -w[R], Ot = t.elements.arrow, Ue = d && Ot ? Zi(Ot) : {
        width: 0,
        height: 0
      }, ge = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : is(), it = ge[k], $t = ge[V], Pe = Pt(0, w[R], Ue[R]), Zt = I ? w[R] / 2 - St - Pe - it - _.mainAxis : Yt - Pe - it - _.mainAxis, vs = I ? -w[R] / 2 + St + Pe + $t + _.mainAxis : nt + Pe + $t + _.mainAxis, er = t.elements.arrow && Kt(t.elements.arrow), gs = er ? x === "y" ? er.clientTop || 0 : er.clientLeft || 0 : 0, un = (j = $ == null ? void 0 : $[x]) != null ? j : 0, ys = N + Zt - un - gs, bs = N + vs - un, cn = Pt(d ? jt(wt, ys) : wt, N, d ? Le(Ie, bs) : Ie);
      g[x] = cn, C[x] = cn - N;
    }
    if (o) {
      var fn, ws = x === "x" ? ee : ce, Ss = x === "x" ? oe : Ee, Ce = g[O], xt = O === "y" ? "height" : "width", dn = Ce + v[ws], pn = Ce - v[Ss], tr = [ee, ce].indexOf(T) !== -1, hn = (fn = $ == null ? void 0 : $[O]) != null ? fn : 0, mn = tr ? dn : Ce - w[xt] - S[xt] - hn + _.altAxis, vn = tr ? Ce + w[xt] + S[xt] - hn - _.altAxis : pn, gn = d && tr ? Cc(mn, Ce, vn) : Pt(d ? mn : dn, Ce, d ? vn : pn);
      g[O] = gn, C[O] = gn - Ce;
    }
    t.modifiersData[n] = C;
  }
}
const qc = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: Fc,
  requiresIfExists: ["offset"]
};
var Dc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ct(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Dc[t];
  });
}
var Lc = {
  start: "end",
  end: "start"
};
function Nn(e) {
  return e.replace(/start|end/g, function(t) {
    return Lc[t];
  });
}
function jc(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, s = r.rootBoundary, a = r.padding, o = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? Uu : l, c = Ye(n), p = c ? o ? Dn : Dn.filter(function(h2) {
    return Ye(h2) === c;
  }) : Qt, f = p.filter(function(h2) {
    return u.indexOf(h2) >= 0;
  });
  f.length === 0 && (f = p, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var d = f.reduce(function(h2, y) {
    return h2[y] = sn(e, {
      placement: y,
      boundary: i,
      rootBoundary: s,
      padding: a
    })[fe(y)], h2;
  }, {});
  return Object.keys(d).sort(function(h2, y) {
    return d[h2] - d[y];
  });
}
function kc(e) {
  if (fe(e) === Xt)
    return [];
  var t = Ct(e);
  return [Nn(e), t, Nn(t)];
}
function Bc(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, s = i === void 0 ? true : i, a = r.altAxis, o = a === void 0 ? true : a, l = r.fallbackPlacements, u = r.padding, c = r.boundary, p = r.rootBoundary, f = r.altBoundary, d = r.flipVariations, h2 = d === void 0 ? true : d, y = r.allowedAutoPlacements, v = t.options.placement, T = fe(v), A = T === v, I = l || (A || !h2 ? [Ct(v)] : kc(v)), x = [v].concat(I).reduce(function(Ue, ge) {
      return Ue.concat(fe(ge) === Xt ? jc(t, {
        placement: ge,
        boundary: c,
        rootBoundary: p,
        padding: u,
        flipVariations: h2,
        allowedAutoPlacements: y
      }) : ge);
    }, []), O = t.rects.reference, g = t.rects.popper, w = /* @__PURE__ */ new Map(), S = true, E = x[0], _ = 0; _ < x.length; _++) {
      var $ = x[_], C = fe($), j = Ye($) === Je, k = [ee, oe].indexOf(C) >= 0, V = k ? "width" : "height", R = sn(t, {
        placement: $,
        boundary: c,
        rootBoundary: p,
        altBoundary: f,
        padding: u
      }), N = k ? j ? Ee : ce : j ? oe : ee;
      O[V] > g[V] && (N = Ct(N));
      var wt = Ct(N), Ie = [];
      if (s && Ie.push(R[C] <= 0), o && Ie.push(R[N] <= 0, R[wt] <= 0), Ie.every(function(Ue) {
        return Ue;
      })) {
        E = $, S = false;
        break;
      }
      w.set($, Ie);
    }
    if (S)
      for (var St = h2 ? 3 : 1, Yt = function(ge) {
        var it = x.find(function($t) {
          var Pe = w.get($t);
          if (Pe)
            return Pe.slice(0, ge).every(function(Zt) {
              return Zt;
            });
        });
        if (it)
          return E = it, "break";
      }, nt = St; nt > 0; nt--) {
        var Ot = Yt(nt);
        if (Ot === "break")
          break;
      }
    t.placement !== E && (t.modifiersData[n]._skip = true, t.placement = E, t.reset = true);
  }
}
const Rc = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: Bc,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
}, He = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, Mc = {
  components: {
    OnClickOutside: Ji
  },
  props: {
    spladeId: {
      type: String,
      required: true
    },
    placement: {
      type: String,
      default: "bottom-start",
      required: false
    },
    strategy: {
      type: String,
      default: "absolute",
      required: false
    },
    inline: {
      type: Boolean,
      default: false,
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    teleport: {
      type: Boolean,
      default: false,
      required: false
    },
    closeOnClick: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data() {
    return {
      opened: false,
      popper: null
    };
  },
  computed: {
    buttonStyle() {
      return this.inline ? { display: "inline" } : {};
    },
    wrapperStyle() {
      const e = { position: "relative" };
      return this.inline && (e.display = "inline"), e;
    }
  },
  watch: {
    opened() {
      this.popper.update();
    }
  },
  mounted: async function() {
    this.teleport && await nextTick();
    const e = this.teleport ? document.querySelector(`div[data-splade-dropdown-id="${this.spladeId}"]`) : this.$refs.tooltip.children[0];
    this.popper = Ic(this.$refs.button, e, {
      placement: this.placement,
      modifiers: [Rc, qc],
      strategy: this.strategy
    });
  },
  methods: {
    toggle() {
      this.opened = !this.opened;
    },
    hide() {
      this.opened = false;
    }
  }
}, Nc = { ref: "tooltip" };
function Vc(e, t, r, n, i, s) {
  const a = resolveComponent("OnClickOutside");
  return openBlock(), createBlock(a, {
    style: normalizeStyle(s.wrapperStyle),
    do: s.hide,
    opened: i.opened,
    "ignore-inner-targets": !r.closeOnClick
  }, {
    default: withCtx(() => [
      createElementVNode("div", {
        ref: "button",
        style: normalizeStyle(s.buttonStyle)
      }, [
        renderSlot(e.$slots, "button", {
          toggle: s.toggle,
          disabled: r.disabled
        })
      ], 4),
      createElementVNode("div", Nc, [
        renderSlot(e.$slots, "default", {
          hide: s.hide,
          opened: i.opened
        })
      ], 512)
    ]),
    _: 3
  }, 8, ["style", "do", "opened", "ignore-inner-targets"]);
}
const Hc = /* @__PURE__ */ He(Mc, [["render", Vc]]), Uc = {
  __name: "DynamicHtml",
  props: {
    keepAliveKey: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  setup(e) {
    const t = inject("$splade") || {}, r = inject("$spladeOptions") || {};
    return (n, i) => unref(t).isSsr ? (openBlock(), createBlock(ue, {
      key: e.keepAliveKey,
      html: unref(t).htmlForDynamicComponent(e.name)
    }, null, 8, ["html"])) : (openBlock(), createBlock(KeepAlive, {
      key: 0,
      max: unref(r).max_keep_alive
    }, [
      (openBlock(), createBlock(ue, {
        key: e.keepAliveKey,
        html: unref(t).htmlForDynamicComponent(e.name)
      }, null, 8, ["html"]))
    ], 1032, ["max"]));
  }
};
function ss(e) {
  return e && e.length ? e[0] : void 0;
}
const Wc = {
  inject: ["stack"],
  computed: {
    values() {
      return m.validationErrors(this.stack);
    }
  },
  render() {
    const e = this;
    return this.$slots.default({
      has(t) {
        return K(e.values, t);
      },
      first(t) {
        return ss(e.values[t] || []);
      },
      all: { ...this.values },
      ...this.values
    });
  }
}, zc = {
  props: {
    private: {
      type: Boolean,
      required: false,
      default: false
    },
    channel: {
      type: String,
      required: true
    },
    listeners: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      subscribed: false,
      subscription: null,
      subscriptions: [],
      events: []
    };
  },
  beforeUnmount() {
    this.subscription && (window.Echo.leave(this.subscription.subscription.name), this.subscription = null, this.subscriptions = []);
  },
  mounted() {
    this.subscription = this.private ? window.Echo.private(this.channel) : window.Echo.channel(this.channel), this.subscription.on("pusher:subscription_succeeded", () => {
      this.subscribed = true;
    }), this.listeners.forEach((e) => {
      const t = this.subscription.listen(e, (r) => {
        const n = "splade.redirect", i = "splade.refresh", s = "splade.toast";
        let a = null, o = false, l = [];
        Y(r, (u) => {
          !W(u) || (n in u && (a = u[n]), i in u && (o = u[i]), s in u && l.push(u));
        }), a ? m.visit(a) : o ? m.refresh() : this.events.push({ name: e, data: r }), l.length > 0 && l.forEach((u) => {
          m.pushToast(u);
        }), this.$root.$emit(`event.${e}`, r);
      });
      this.subscriptions.push(t);
    });
  },
  render() {
    return this.$slots.default({
      subscribed: this.subscribed,
      events: this.events
    });
  }
};
function Gc() {
  this.__data__ = new me(), this.size = 0;
}
function Kc(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Xc(e) {
  return this.__data__.get(e);
}
function Qc(e) {
  return this.__data__.has(e);
}
var Jc = 200;
function Yc(e, t) {
  var r = this.__data__;
  if (r instanceof me) {
    var n = r.__data__;
    if (!dt || n.length < Jc - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new ve(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function de(e) {
  var t = this.__data__ = new me(e);
  this.size = t.size;
}
de.prototype.clear = Gc;
de.prototype.delete = Kc;
de.prototype.get = Xc;
de.prototype.has = Qc;
de.prototype.set = Yc;
var Zc = "__lodash_hash_undefined__";
function ef(e) {
  return this.__data__.set(e, Zc), this;
}
function tf(e) {
  return this.__data__.has(e);
}
function kt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new ve(); ++t < r; )
    this.add(e[t]);
}
kt.prototype.add = kt.prototype.push = ef;
kt.prototype.has = tf;
function rf(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return true;
  return false;
}
function nf(e, t) {
  return e.has(t);
}
var sf = 1, af = 2;
function as(e, t, r, n, i, s) {
  var a = r & sf, o = e.length, l = t.length;
  if (o != l && !(a && l > o))
    return false;
  var u = s.get(e), c = s.get(t);
  if (u && c)
    return u == t && c == e;
  var p = -1, f = true, d = r & af ? new kt() : void 0;
  for (s.set(e, t), s.set(t, e); ++p < o; ) {
    var h2 = e[p], y = t[p];
    if (n)
      var v = a ? n(y, h2, p, t, e, s) : n(h2, y, p, e, t, s);
    if (v !== void 0) {
      if (v)
        continue;
      f = false;
      break;
    }
    if (d) {
      if (!rf(t, function(T, A) {
        if (!nf(d, A) && (h2 === T || i(h2, T, r, n, s)))
          return d.push(A);
      })) {
        f = false;
        break;
      }
    } else if (!(h2 === y || i(h2, y, r, n, s))) {
      f = false;
      break;
    }
  }
  return s.delete(e), s.delete(t), f;
}
var of = le.Uint8Array;
const Vn = of;
function lf(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function uf(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var cf = 1, ff = 2, df = "[object Boolean]", pf = "[object Date]", hf = "[object Error]", mf = "[object Map]", vf = "[object Number]", gf = "[object RegExp]", yf = "[object Set]", bf = "[object String]", wf = "[object Symbol]", Sf = "[object ArrayBuffer]", Of = "[object DataView]", Hn = Oe ? Oe.prototype : void 0, ur = Hn ? Hn.valueOf : void 0;
function $f(e, t, r, n, i, s, a) {
  switch (r) {
    case Of:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return false;
      e = e.buffer, t = t.buffer;
    case Sf:
      return !(e.byteLength != t.byteLength || !s(new Vn(e), new Vn(t)));
    case df:
    case pf:
    case vf:
      return Hr(+e, +t);
    case hf:
      return e.name == t.name && e.message == t.message;
    case gf:
    case bf:
      return e == t + "";
    case mf:
      var o = lf;
    case yf:
      var l = n & cf;
      if (o || (o = uf), e.size != t.size && !l)
        return false;
      var u = a.get(e);
      if (u)
        return u == t;
      n |= ff, a.set(e, t);
      var c = as(o(e), o(t), n, i, s, a);
      return a.delete(e), c;
    case wf:
      if (ur)
        return ur.call(e) == ur.call(t);
  }
  return false;
}
function xf(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function Ef(e, t, r) {
  var n = t(e);
  return L(e) ? n : xf(n, r(e));
}
function os(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, s = []; ++r < n; ) {
    var a = e[r];
    t(a, r, e) && (s[i++] = a);
  }
  return s;
}
function Tf() {
  return [];
}
var _f = Object.prototype, Af = _f.propertyIsEnumerable, Un = Object.getOwnPropertySymbols, If = Un ? function(e) {
  return e == null ? [] : (e = Object(e), os(Un(e), function(t) {
    return Af.call(e, t);
  }));
} : Tf;
const Pf = If;
function Wn(e) {
  return Ef(e, Rt, Pf);
}
var Cf = 1, Ff = Object.prototype, qf = Ff.hasOwnProperty;
function Df(e, t, r, n, i, s) {
  var a = r & Cf, o = Wn(e), l = o.length, u = Wn(t), c = u.length;
  if (l != c && !a)
    return false;
  for (var p = l; p--; ) {
    var f = o[p];
    if (!(a ? f in t : qf.call(t, f)))
      return false;
  }
  var d = s.get(e), h2 = s.get(t);
  if (d && h2)
    return d == t && h2 == e;
  var y = true;
  s.set(e, t), s.set(t, e);
  for (var v = a; ++p < l; ) {
    f = o[p];
    var T = e[f], A = t[f];
    if (n)
      var I = a ? n(A, T, f, t, e, s) : n(T, A, f, e, t, s);
    if (!(I === void 0 ? T === A || i(T, A, r, n, s) : I)) {
      y = false;
      break;
    }
    v || (v = f == "constructor");
  }
  if (y && !v) {
    var x = e.constructor, O = t.constructor;
    x != O && "constructor" in e && "constructor" in t && !(typeof x == "function" && x instanceof x && typeof O == "function" && O instanceof O) && (y = false);
  }
  return s.delete(e), s.delete(t), y;
}
var Lf = Ne(le, "DataView");
const Er = Lf;
var jf = Ne(le, "Promise");
const Tr = jf;
var kf = Ne(le, "Set");
const _r = kf;
var Bf = Ne(le, "WeakMap");
const Ar = Bf;
var zn = "[object Map]", Rf = "[object Object]", Gn = "[object Promise]", Kn = "[object Set]", Xn = "[object WeakMap]", Qn = "[object DataView]", Mf = Me(Er), Nf = Me(dt), Vf = Me(Tr), Hf = Me(_r), Uf = Me(Ar), De = _e;
(Er && De(new Er(new ArrayBuffer(1))) != Qn || dt && De(new dt()) != zn || Tr && De(Tr.resolve()) != Gn || _r && De(new _r()) != Kn || Ar && De(new Ar()) != Xn) && (De = function(e) {
  var t = _e(e), r = t == Rf ? e.constructor : void 0, n = r ? Me(r) : "";
  if (n)
    switch (n) {
      case Mf:
        return Qn;
      case Nf:
        return zn;
      case Vf:
        return Gn;
      case Hf:
        return Kn;
      case Uf:
        return Xn;
    }
  return t;
});
const Jn = De;
var Wf = 1, Yn = "[object Arguments]", Zn = "[object Array]", It = "[object Object]", zf = Object.prototype, ei = zf.hasOwnProperty;
function Gf(e, t, r, n, i, s) {
  var a = L(e), o = L(t), l = a ? Zn : Jn(e), u = o ? Zn : Jn(t);
  l = l == Yn ? It : l, u = u == Yn ? It : u;
  var c = l == It, p = u == It, f = l == u;
  if (f && fr(e)) {
    if (!fr(t))
      return false;
    a = true, c = false;
  }
  if (f && !c)
    return s || (s = new de()), a || pi(e) ? as(e, t, r, n, i, s) : $f(e, t, l, r, n, i, s);
  if (!(r & Wf)) {
    var d = c && ei.call(e, "__wrapped__"), h2 = p && ei.call(t, "__wrapped__");
    if (d || h2) {
      var y = d ? e.value() : e, v = h2 ? t.value() : t;
      return s || (s = new de()), i(y, v, r, n, s);
    }
  }
  return f ? (s || (s = new de()), Df(e, t, r, n, i, s)) : false;
}
function Jt(e, t, r, n, i) {
  return e === t ? true : e == null || t == null || !$e(e) && !$e(t) ? e !== e && t !== t : Gf(e, t, r, n, Jt, i);
}
var Kf = 1, Xf = 2;
function Qf(e, t, r, n) {
  var i = r.length, s = i, a = !n;
  if (e == null)
    return !s;
  for (e = Object(e); i--; ) {
    var o = r[i];
    if (a && o[2] ? o[1] !== e[o[0]] : !(o[0] in e))
      return false;
  }
  for (; ++i < s; ) {
    o = r[i];
    var l = o[0], u = e[l], c = o[1];
    if (a && o[2]) {
      if (u === void 0 && !(l in e))
        return false;
    } else {
      var p = new de();
      if (n)
        var f = n(u, c, l, e, t, p);
      if (!(f === void 0 ? Jt(c, u, Kf | Xf, n, p) : f))
        return false;
    }
  }
  return true;
}
function ls(e) {
  return e === e && !W(e);
}
function Jf(e) {
  for (var t = Rt(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, ls(i)];
  }
  return t;
}
function us(e, t) {
  return function(r) {
    return r == null ? false : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function Yf(e) {
  var t = Jf(e);
  return t.length == 1 && t[0][2] ? us(t[0][0], t[0][1]) : function(r) {
    return r === e || Qf(r, e, t);
  };
}
function Zf(e, t) {
  return e != null && t in Object(e);
}
function ed(e, t) {
  return e != null && Fi(e, t, Zf);
}
var td = 1, rd = 2;
function nd(e, t) {
  return Vr(e) && ls(t) ? us(gt(e), t) : function(r) {
    var n = ht(r, e);
    return n === void 0 && n === t ? ed(r, e) : Jt(t, n, td | rd);
  };
}
function id(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function sd(e) {
  return function(t) {
    return Ki(t, e);
  };
}
function ad(e) {
  return Vr(e) ? id(gt(e)) : sd(e);
}
function bt(e) {
  return typeof e == "function" ? e : e == null ? mi : typeof e == "object" ? L(e) ? nd(e[0], e[1]) : Yf(e) : ad(e);
}
function od(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!Bt(t)) {
      var s = bt(r);
      t = Rt(t), r = function(o) {
        return s(i[o], o, i);
      };
    }
    var a = e(t, r, n);
    return a > -1 ? i[s ? t[a] : a] : void 0;
  };
}
function ld(e, t, r, n) {
  for (var i = e.length, s = r + (n ? 1 : -1); n ? s-- : ++s < i; )
    if (t(e[s], s, e))
      return s;
  return -1;
}
var ti = 1 / 0, ud = 17976931348623157e292;
function cd(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Sr(e), e === ti || e === -ti) {
    var t = e < 0 ? -1 : 1;
    return t * ud;
  }
  return e === e ? e : 0;
}
function an(e) {
  var t = cd(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var fd = Math.max;
function dd(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : an(r);
  return i < 0 && (i = fd(n + i, 0)), ld(e, bt(t), i);
}
var pd = od(dd);
const on = pd, hd = {
  props: {
    form: {
      type: Object,
      required: true
    },
    field: {
      type: String,
      required: true
    },
    multiple: {
      type: Boolean,
      required: true
    },
    filepond: {
      type: [Boolean, Object],
      required: false,
      default: true
    },
    jsFilepondOptions: {
      type: Object,
      required: false,
      default: () => ({})
    },
    placeholder: {
      type: String,
      required: false,
      default: ""
    },
    preview: {
      type: Boolean,
      required: false,
      default: false
    },
    server: {
      type: [Boolean, String],
      required: false,
      default: false
    },
    accept: {
      type: Array,
      required: false,
      default: () => []
    },
    minFileSize: {
      type: [Boolean, Number, String],
      required: false,
      default: false
    },
    maxFileSize: {
      type: [Boolean, Number, String],
      required: false,
      default: false
    },
    minImageWidth: {
      type: [Boolean, Number],
      required: false,
      default: false
    },
    maxImageWidth: {
      type: [Boolean, Number],
      required: false,
      default: false
    },
    minImageHeight: {
      type: [Boolean, Number],
      required: false,
      default: false
    },
    maxImageHeight: {
      type: [Boolean, Number],
      required: false,
      default: false
    },
    minImageResolution: {
      type: [Boolean, Number],
      required: false,
      default: false
    },
    maxImageResolution: {
      type: [Boolean, Number],
      required: false,
      default: false
    },
    existingSuffix: {
      type: String,
      required: false,
      default: "_existing"
    },
    orderSuffix: {
      type: String,
      required: false,
      default: "_order"
    },
    dusk: {
      type: String,
      required: false,
      default: null
    }
  },
  emits: ["start-uploading", "stop-uploading"],
  data() {
    return {
      inputElement: null,
      filepondInstance: null,
      filenames: [],
      uploadedFiles: [],
      hadExistingFiles: false
    };
  },
  computed: {
    existingField() {
      return this.field + this.existingSuffix;
    },
    orderField() {
      return this.field + this.orderSuffix;
    },
    handlesExistingFiles() {
      return this.existingSuffix && this.hadExistingFiles;
    }
  },
  mounted() {
    this.inputElement = this.$refs.file.querySelector('input[type="file"]');
    const e = this.form[this.field];
    this.hadExistingFiles = this.multiple && e.length > 0 || !this.multiple && e, this.form.$put(this.field, this.multiple ? [] : null), this.filepond && (this.setExisting(e), this.initFilepond(e || []).then(() => {
      this.form.$registerFilepond(this.field, this.addFileToFilepond, this.addFilesToFilepond);
    }));
  },
  methods: {
    extractMetadataFromExistingFile(e) {
      return e ? ze(e) ? e : L(e) ? e.map(this.extractMetadataFromExistingFile) : W(e) ? e.options.metadata.metadata : null : null;
    },
    setExisting(e) {
      !this.handlesExistingFiles || (this.form.$put(this.existingField, this.extractMetadataFromExistingFile(e)), this.setOrder());
    },
    setOrder() {
      if (!this.multiple || !this.handlesExistingFiles || !this.filepondInstance)
        return;
      const t = this.filepondInstance.getFiles().filter((n) => !n.getMetadata("identifier")), r = this.filepondInstance.getFiles().map((n) => {
        const i = n.getMetadata("identifier");
        return i ? "existing-file-" + i : "new-file-" + t.indexOf(n);
      });
      this.form.$put(this.orderField, r);
    },
    addFileToFilepond(e) {
      e && this.filepondInstance.addFile(e);
    },
    addFilesToFilepond(e) {
      e.forEach((t) => this.addFileToFilepond(t));
    },
    loadFilepondPlugins() {
      const e = [];
      return this.preview && (e.push(import("filepond-plugin-image-preview")), e.push(import("filepond-plugin-image-exif-orientation"))), this.accept.length > 0 && e.push(import("filepond-plugin-file-validate-type")), (this.minFileSize || this.maxFileSize) && e.push(import("filepond-plugin-file-validate-size")), (this.minImageWidth || this.maxImageWidth || this.minImageHeight || this.maxImageHeight || this.minImageResolution || this.maxImageResolution) && e.push(import("filepond-plugin-image-validate-size")), Promise.all(e);
    },
    initFilepond(e) {
      const t = this.inputElement.getAttribute("name"), r = this;
      return new Promise((n) => {
        import("filepond").then((i) => {
          const s = Object.assign({}, r.filepond, r.jsFilepondOptions, {
            oninit() {
              const a = setInterval(() => {
                if (r.filepondInstance.status < 2)
                  clearInterval(a);
                else
                  return;
                r.setOrder();
                const o = r.filepondInstance.element.querySelector('input[type="file"]');
                o.hasAttribute("name") || o.setAttribute("name", t), r.dusk && r.filepondInstance.element.setAttribute("dusk", r.dusk), r.multiple && r.filepondInstance.element.addEventListener("moveFile", function(l) {
                  r.filepondInstance.moveFile(l.detail[0], l.detail[1]), r.setOrder();
                }), n();
              }, 15);
            },
            onaddfile(a, o) {
              a || o.origin !== i.FileOrigin.LOCAL && (r.server ? r.$emit("start-uploading", [o.id]) : r.addFiles([o.file]), r.setOrder());
            },
            onremovefile(a, o) {
              a || (r.handlesExistingFiles && (r.multiple ? r.setExisting(r.form[r.existingField].filter((l) => o.getMetadata("metadata") !== l)) : r.setExisting(null)), r.removeFile(o.file));
            },
            onprocessfile(a, o) {
              a || (r.uploadedFiles.push({
                file: o.file,
                id: o.serverId
              }), r.addFiles([o.serverId]), r.$emit("stop-uploading", [o.id]));
            },
            onreorderfiles() {
              r.setOrder();
            }
          });
          this.hadExistingFiles && (s.files = this.multiple ? e : [e]), this.accept.length > 0 && (s.acceptedFileTypes = this.accept), this.minFileSize && (s.minFileSize = this.minFileSize), this.maxFileSize && (s.maxFileSize = this.maxFileSize), this.minImageWidth && (s.imageValidateSizeMinWidth = this.minImageWidth), this.maxImageWidth && (s.imageValidateSizeMaxWidth = this.maxImageWidth), this.minImageHeight && (s.imageValidateSizeMinHeight = this.minImageHeight), this.maxImageHeight && (s.imageValidateSizeMaxHeight = this.maxImageHeight), this.minImageResolution && (s.imageValidateSizeMinResolution = this.minImageResolution), this.maxImageResolution && (s.imageValidateSizeMaxResolution = this.maxImageResolution), s.server = {
            load: (a, o, l, u, c) => {
              const f = we.CancelToken.source();
              return we({
                url: a.preview_url,
                method: "GET",
                cancelToken: f.token,
                responseType: "blob"
              }).then((d) => {
                const h2 = new File([d.data], a.name, { type: a.type });
                o(h2);
              }).catch(function(d) {
                axios.isCancel(d) || l(d);
              }), {
                abort: () => {
                  f.cancel(), c();
                }
              };
            }
          }, this.server && (s.server.process = (a, o, l, u, c, p, f) => {
            const d = new FormData();
            d.append("file", o, o.name);
            const y = we.CancelToken.source();
            we({
              url: r.server,
              method: "POST",
              data: d,
              cancelToken: y.token,
              onUploadProgress: (v) => {
                p(v.lengthComputable, v.loaded, v.total);
              }
            }).then((v) => {
              v.status >= 200 && v.status < 300 ? u(v.data) : c(v.statusText);
            }).catch(function(v) {
              var T;
              axios.isCancel(v) ? f() : c((T = v.response) == null ? void 0 : T.statusText);
            });
          }, s.server.revert = (a, o, l) => {
            we({
              url: r.server,
              method: "POST",
              data: { _method: "DELETE", file: a }
            }).then(() => {
              o();
            }).catch(function(u) {
              var c;
              l((c = u.response) == null ? void 0 : c.statusText);
            });
          }), this.loadFilepondPlugins(i).then((a) => {
            a.length > 0 && i.registerPlugin(...a.map((o) => o.default)), this.filepondInstance = i.create(this.inputElement, s);
          });
        });
      });
    },
    removeFile(e) {
      this.server && (e = on(this.uploadedFiles, (t) => t.file === e).serverId), this.form.$put(this.field, this.multiple ? this.form[this.field].filter((t) => t !== e) : null);
    },
    addFiles(e) {
      if (this.multiple) {
        const t = this.form[this.field];
        e.forEach((r) => {
          t.push(r);
        }), this.form.$put(this.field, t);
      } else
        this.form.$put(this.field, e[0]), this.setExisting(null);
      this.filepond || this.updateFilenames();
    },
    updateFilenames() {
      this.filenames = [];
      const e = this.form[this.field];
      this.multiple ? e.forEach((t) => {
        this.filenames.push(t.name);
      }) : e && this.filenames.push(e.name);
    },
    handleFileInput(e) {
      this.form.$put(this.field, this.multiple ? [] : null);
      const t = Object.values(e.target.files);
      this.addFiles(t);
    }
  }
}, md = { ref: "file" };
function vd(e, t, r, n, i, s) {
  return openBlock(), createElementBlock("div", md, [
    renderSlot(e.$slots, "default", {
      handleFileInput: s.handleFileInput,
      filenames: i.filenames
    })
  ], 512);
}
const gd = /* @__PURE__ */ He(hd, [["render", vd]]), yd = {
  inject: ["stack"],
  computed: {
    values() {
      return m.flashData(this.stack);
    }
  },
  render() {
    const e = this;
    return this.$slots.default({
      has(t) {
        return K(e.values, t);
      },
      ...this.values
    });
  }
};
function ln(e, t, r) {
  e = e || {}, t = t || new FormData(), r = r || null;
  for (const n in e)
    Object.prototype.hasOwnProperty.call(e, n) && fs(t, cs(r, n), e[n]);
  return t;
}
function cs(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function fs(e, t, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => fs(e, cs(t, n.toString()), r[n]));
  if (r instanceof Date)
    return e.append(t, r.toISOString());
  if (r instanceof File)
    return e.append(t, r, r.name);
  if (r instanceof Blob)
    return e.append(t, r);
  if (typeof r == "boolean")
    return e.append(t, r ? "1" : "0");
  if (typeof r == "string")
    return e.append(t, r);
  if (typeof r == "number")
    return e.append(t, `${r}`);
  if (r == null)
    return e.append(t, "");
  ln(r, e, t);
}
var bd = "[object Boolean]";
function ds(e) {
  return e === true || e === false || $e(e) && _e(e) == bd;
}
function ps(e, t) {
  var r = {};
  return t = bt(t), Dr(e, function(n, i, s) {
    Xi(r, i, t(n, i, s));
  }), r;
}
function hs(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function Ge(e, t, r) {
  return e = Wr(e), r = r == null ? 0 : hs(an(r), 0, e.length), t = Ut(t), e.slice(r, r + t.length) == t;
}
const wd = {
  inject: ["stack"],
  props: {
    spladeId: {
      type: String,
      required: true,
      default: ""
    },
    action: {
      type: String,
      required: false,
      default() {
        return m.isSsr ? "" : location.href;
      }
    },
    method: {
      type: String,
      required: false,
      default: "POST"
    },
    default: {
      type: Object,
      required: false,
      default: () => ({})
    },
    confirm: {
      type: [Boolean, String],
      required: false,
      default: false
    },
    confirmText: {
      type: String,
      required: false,
      default: ""
    },
    confirmButton: {
      type: String,
      required: false,
      default: ""
    },
    cancelButton: {
      type: String,
      required: false,
      default: ""
    },
    stay: {
      type: Boolean,
      require: false,
      default: false
    },
    restoreOnSuccess: {
      type: Boolean,
      required: false,
      default: true
    },
    resetOnSuccess: {
      type: Boolean,
      required: false,
      default: false
    },
    scrollOnError: {
      type: Boolean,
      required: false,
      default: true
    },
    submitOnChange: {
      type: [Boolean, Array],
      required: false,
      default: false
    },
    escapeValidationMessages: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["success", "error"],
  data() {
    return {
      isMounted: false,
      missingAttributes: [],
      values: Object.assign({}, { ...this.default }),
      processing: false,
      wasSuccessful: false,
      recentlySuccessful: false,
      recentlySuccessfulTimeoutId: null,
      formElement: null,
      elementsUploading: [],
      fileponds: {}
    };
  },
  computed: {
    $all() {
      return this.values;
    },
    $uploading() {
      return this.elementsUploading.length > 0;
    },
    rawErrors() {
      return m.validationErrors(this.stack);
    },
    errors() {
      return ps(this.rawErrors, (e) => e.join(`
`));
    }
  },
  mounted() {
    let e = document.querySelector(`form[data-splade-id="${this.spladeId}"]`);
    e || (e = document), this.formElement = e, this.missingAttributes.forEach((r) => {
      let n = "";
      const i = e.querySelector(`[name="${r}"]`);
      i ? n = i.type === "checkbox" ? false : "" : e.querySelector(`[name="${r}[]"]`) ? n = [] : (e.querySelector(`[name^="${r}."]`) || e.querySelector(`[name^="${r}["]`)) && (n = {}), this.$put(r, n);
    }), this.missingAttributes = [], this.submitOnChange === true ? this.$watch("values", () => {
      this.$nextTick(() => this.request());
    }, { deep: true }) : L(this.submitOnChange) && this.submitOnChange.forEach((r) => {
      this.$watch(`values.${r}`, () => {
        this.$nextTick(() => this.request());
      }, { deep: true });
    }), this.isMounted = true;
    const t = this.formElement.querySelector("[autofocus]");
    t && this.focusAndScrollToElement(t);
  },
  methods: {
    $startUploading(e) {
      this.elementsUploading.push(e[0]);
    },
    $stopUploading(e) {
      this.elementsUploading = this.elementsUploading.filter((t) => t != e[0]);
    },
    hasError(e) {
      return e in this.errors;
    },
    $registerFilepond(e, t, r) {
      this.fileponds[e] = {
        addFile: t,
        addFiles: r
      };
    },
    $addFile(e, t) {
      if (!this.fileponds[e])
        return console.log("Filepond instance not found");
      this.fileponds[e].addFile(t);
    },
    $addFiles(e, t) {
      if (!this.fileponds[e])
        return console.log("Filepond instance not found");
      this.fileponds[e].addFiles(t);
    },
    $errorAttributes(e) {
      return {
        [this.escapeValidationMessages ? "textContent" : "innerHTML"]: this.errors[e]
      };
    },
    reset() {
      this.values = {};
    },
    restore() {
      this.values = Object.assign({}, { ...this.default });
    },
    $put(e, t) {
      return Qi(this.values, e, t);
    },
    focusAndScrollToElement(e) {
      let t = true;
      if (e._flatpickr && (t = false), e.tagName === "SELECT" && e.getAttribute("data-choice") && (t = false), t) {
        const r = new IntersectionObserver((n) => {
          let [i] = n;
          i.isIntersecting && (setTimeout(() => i.target.focus(), 150), r.disconnect());
        });
        r.observe(e);
      }
      e.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
      });
    },
    submit(e) {
      if (!this.$uploading) {
        if (e) {
          const t = e.submitter;
          t && t.name && this.$put(t.name, t.value);
        }
        if (!this.confirm)
          return this.request();
        m.confirm(
          ds(this.confirm) ? "" : this.confirm,
          this.confirmText,
          this.confirmButton,
          this.cancelButton
        ).then(() => {
          this.request();
        }).catch(() => {
        });
      }
    },
    async request() {
      if (this.$uploading)
        return;
      await this.$nextTick(), this.processing = true, this.wasSuccessful = false, this.recentlySuccessful = false, clearTimeout(this.recentlySuccessfulTimeoutId);
      const e = this.values instanceof FormData ? this.values : ln(this.values), t = { Accept: "application/json" };
      this.stay && (t["X-Splade-Prevent-Refresh"] = true);
      let r = this.method.toUpperCase();
      r !== "GET" && r !== "POST" && (e.append("_method", r), r = "POST"), m.request(this.action, r, e, t).then((n) => {
        this.$emit("success", n), this.restoreOnSuccess && this.restore(), this.resetOnSuccess && this.reset(), this.processing = false, this.wasSuccessful = true, this.recentlySuccessful = true, this.recentlySuccessfulTimeoutId = setTimeout(() => this.recentlySuccessful = false, 2e3);
      }).catch(async (n) => {
        if (this.processing = false, this.$emit("error", n), !this.scrollOnError)
          return;
        await this.$nextTick();
        const i = on(Object.keys(this.errors), (s) => this.formElement.querySelector(`[data-validation-key="${s}"]`));
        i && this.focusAndScrollToElement(
          this.formElement.querySelector(`[data-validation-key="${i}"]`)
        );
      });
    }
  },
  render() {
    const e = this;
    return this.$slots.default(
      new Proxy(
        {},
        {
          ownKeys() {
            return Object.keys(e.values);
          },
          get(t, r) {
            return [
              "$all",
              "$attrs",
              "$put",
              "$startUploading",
              "$stopUploading",
              "$processing",
              "$uploading",
              "$errorAttributes",
              "$registerFilepond",
              "$addFile",
              "$addFiles",
              "errors",
              "restore",
              "reset",
              "hasError",
              "processing",
              "rawErrors",
              "submit",
              "wasSuccessful",
              "recentlySuccessful"
            ].includes(r) || Ge(r, "__v_") ? e[r] : (!e.isMounted && !K(e.values, r) && (e.missingAttributes.push(r), e.$put(r, "")), ht(e.values, r));
          },
          set(t, r, n) {
            return e.$put(r, n);
          }
        }
      )
    );
  }
}, Sd = {
  props: {
    flatpickr: {
      type: [Boolean, Object],
      required: false,
      default: false
    },
    jsFlatpickrOptions: {
      type: Object,
      required: false,
      default: () => ({})
    },
    modelValue: {
      type: [String, Number],
      required: false
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      disabled: false,
      element: null,
      flatpickrInstance: null,
      observer: null
    };
  },
  watch: {
    modelValue(e) {
      this.flatpickrInstance && this.flatpickrInstance.setDate(e);
    }
  },
  mounted() {
    this.element = this.$refs.input.querySelector("input"), this.flatpickr && this.initFlatpickr(this.element), this.disabled = this.element.disabled;
    const e = this;
    this.observer = new MutationObserver(function(t) {
      t.forEach(function(r) {
        r.attributeName === "disabled" && (e.disabled = r.target.disabled);
      });
    }), this.observer.observe(this.element, { attributes: true });
  },
  beforeUnmount() {
    this.observer.disconnect(), this.flatpickrInstance && this.flatpickrInstance.destroy();
  },
  methods: {
    initFlatpickr(e) {
      import("flatpickr").then((t) => {
        this.flatpickrInstance = t.default(
          e,
          Object.assign({}, this.flatpickr, this.jsFlatpickrOptions, {
            onChange: (r, n) => {
              this.flatpickrInstance.config.mode === "range" && this.flatpickrInstance.selectedDates.length < 2 || n != this.modelValue && this.$emit("update:modelValue", n);
            }
          })
        ), this.modelValue && this.flatpickrInstance.setDate(this.modelValue);
      });
    }
  }
}, Od = { ref: "input" };
function $d(e, t, r, n, i, s) {
  return openBlock(), createElementBlock("div", Od, [
    renderSlot(e.$slots, "default", { disabled: i.disabled })
  ], 512);
}
const xd = /* @__PURE__ */ He(Sd, [["render", $d]]), Ed = {
  components: { Render: ue },
  props: {
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: false,
      default() {
        return m.isSsr ? "" : window.location.href;
      }
    },
    show: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      html: null
    };
  },
  watch: {
    show(e) {
      e ? this.request() : this.html = null;
    }
  },
  mounted() {
    this.show && this.request();
  },
  methods: {
    async request() {
      this.html = null, m.lazy(this.url, this.name).then((e) => {
        this.html = e.data.html;
      });
    }
  }
};
function Td(e, t, r, n, i, s) {
  const a = resolveComponent("Render");
  return i.html ? (openBlock(), createBlock(a, {
    key: 0,
    html: i.html
  }, null, 8, ["html"])) : r.show ? renderSlot(e.$slots, "default", { key: 1 }) : createCommentVNode("", true);
}
const _d = /* @__PURE__ */ He(Ed, [["render", Td]]), Ad = ["href", "onClick"], Id = {
  __name: "Link",
  props: {
    href: {
      type: String,
      required: false,
      default: "#"
    },
    method: {
      type: String,
      required: false,
      default: "GET"
    },
    data: {
      type: Object,
      required: false,
      default: () => ({})
    },
    headers: {
      type: Object,
      required: false,
      default: () => ({ Accept: "application/json" })
    },
    replace: {
      type: Boolean,
      required: false,
      default: false
    },
    confirm: {
      type: [Boolean, String],
      required: false,
      default: false
    },
    confirmText: {
      type: String,
      required: false,
      default: ""
    },
    confirmButton: {
      type: String,
      required: false,
      default: ""
    },
    cancelButton: {
      type: String,
      required: false,
      default: ""
    },
    modal: {
      type: Boolean,
      required: false,
      default: false
    },
    slideover: {
      type: Boolean,
      required: false,
      default: false
    },
    away: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(e) {
    const t = e;
    function r() {
      if (!t.confirm)
        return n();
      m.confirm(
        ds(t.confirm) ? "" : t.confirm,
        t.confirmText,
        t.confirmButton,
        t.cancelButton
      ).then(() => {
        n();
      }).catch(() => {
      });
    }
    function n() {
      if (t.away)
        return window.location = t.href;
      if (t.modal)
        return m.modal(t.href);
      if (t.slideover)
        return m.slideover(t.href);
      if (Ge(t.href, "#")) {
        if (m.openPreloadedModal(t.href.substring(1)))
          return;
        console.log("No preloaded modal found for " + t.href);
      }
      let i = t.method.trim().toUpperCase();
      if (i === "GET")
        return t.replace ? m.replace(t.href) : m.visit(t.href);
      const s = t.data instanceof FormData ? t.data : ln(t.data);
      i !== "POST" && (s.append("_method", i), i = "POST"), m.request(t.href, i, s, t.headers, t.replace);
    }
    return (i, s) => (openBlock(), createElementBlock("a", {
      href: e.href,
      onClick: withModifiers(r, ["prevent"])
    }, [
      renderSlot(i.$slots, "default")
    ], 8, Ad));
  }
}, Pd = {
  provide() {
    return {
      stack: this.stack
    };
  },
  props: {
    closeButton: {
      type: Boolean,
      required: false,
      default: true
    },
    type: {
      type: String,
      required: true
    },
    stack: {
      type: Number,
      required: true
    },
    onTopOfStack: {
      type: Boolean,
      required: false,
      default: false
    },
    maxWidth: {
      type: String,
      required: false,
      default: (e) => e.type === "modal" ? "2xl" : "md"
    },
    name: {
      type: String,
      required: false,
      default: null
    }
  },
  emits: ["close"],
  data() {
    return {
      isOpen: false
    };
  },
  mounted() {
    this.setIsOpen(true);
  },
  methods: {
    emitClose() {
      this.$emit("close");
    },
    close() {
      this.setIsOpen(false);
    },
    setIsOpen(e) {
      this.isOpen = e;
    }
  },
  render() {
    return this.$slots.default({
      type: this.type,
      isOpen: this.isOpen,
      setIsOpen: this.setIsOpen,
      close: this.close,
      stack: this.stack,
      onTopOfStack: this.onTopOfStack,
      maxWidth: this.maxWidth,
      emitClose: this.emitClose,
      closeButton: this.closeButton,
      Dialog: Xr,
      DialogPanel: Qr,
      TransitionRoot: rt,
      TransitionChild: tt
    });
  }
}, Cd = {
  __name: "PreloadedModal",
  props: {
    name: {
      type: String,
      required: true
    },
    html: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: "modal"
    }
  },
  setup(e) {
    const t = e;
    return m.registerPreloadedModal(t.name, t.html, t.type), () => {
    };
  }
};
function Fd(e, t) {
  var r = -1, n = Bt(e) ? Array(e.length) : [];
  return Lr(e, function(i, s, a) {
    n[++r] = t(i, s, a);
  }), n;
}
function ms(e, t) {
  var r = L(e) ? Ci : Fd;
  return r(e, bt(t));
}
const qd = {
  inject: ["stack"],
  props: {
    choices: {
      type: [Boolean, Object],
      required: false,
      default: false
    },
    jsChoicesOptions: {
      type: Object,
      required: false,
      default: () => ({})
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false
    },
    modelValue: {
      type: [String, Number, Array],
      required: false
    },
    placeholder: {
      type: [Boolean, Object],
      required: false,
      default: false
    },
    dusk: {
      type: String,
      required: false,
      default: null
    },
    remoteUrl: {
      type: String,
      required: false,
      default: null
    },
    optionValue: {
      type: String,
      required: false,
      default: null
    },
    optionLabel: {
      type: String,
      required: false,
      default: null
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      choicesInstance: null,
      element: null,
      placeholderText: null,
      headlessListener: null,
      selectChangeListener: null,
      selectShowDropdownListener: null,
      loading: false
    };
  },
  computed: {
    hasSelection() {
      return this.multiple ? Array.isArray(this.modelValue) ? this.modelValue.length > 0 : false : !(this.modelValue === null || this.modelValue === "" || this.modelValue === void 0);
    }
  },
  watch: {
    modelValue(e, t) {
      if (!this.choicesInstance && this.multiple && L(e)) {
        const r = e.filter((n) => n !== "" && n !== null && n !== void 0);
        if (JSON.stringify(r) != JSON.stringify(e)) {
          this.$emit("update:modelValue", r);
          return;
        }
      }
      if (this.choicesInstance) {
        if (JSON.stringify(e) == JSON.stringify(t))
          return;
        this.setValueOnChoices(e);
      }
    },
    remoteUrl: {
      handler() {
        this.loadRemoteOptions();
      }
    }
  },
  mounted() {
    if (this.element = this.$refs.select.querySelector("select"), this.choices)
      return this.initChoices(this.element).then(() => {
        this.loadRemoteOptions();
      });
    this.loadRemoteOptions();
  },
  beforeUnmount() {
    this.destroyChoicesInstance();
  },
  methods: {
    loadRemoteOptions() {
      !this.remoteUrl || (this.loading = true, we({
        url: this.remoteUrl,
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }).then((e) => {
        this.destroyChoicesInstance();
        let t = [];
        this.placeholder && t.push(this.placeholder), t = this.normalizeOptions(e.data, t);
        var r, n = this.element.options.length - 1;
        for (r = n; r >= 0; r--)
          this.element.remove(r);
        let i = false;
        if (Y(t, (s) => {
          var a = document.createElement("option");
          a.value = s.value, a.text = s.label, s.value === this.modelValue && (i = true), s.disabled && (a.disabled = s.disabled), s.placeholder && (a.placeholder = s.placeholder), this.element.appendChild(a);
        }), i || this.$emit("update:modelValue", this.multiple ? [] : ""), this.choices)
          return this.initChoices(this.element).then(() => {
            this.loading = false;
          });
        i ? this.element.value = this.modelValue : this.$nextTick(() => {
          this.element.selectedIndex = 0;
        }), this.loading = false;
      }).catch(() => {
        this.loading = false;
      }));
    },
    destroyChoicesInstance() {
      var e;
      this.choices && this.choicesInstance && (this.headlessListener && ((e = document.querySelector("#headlessui-portal-root")) == null || e.removeEventListener("click", this.headlessListener)), this.selectChangeListener && this.element.removeEventListener("change", this.selectChangeListener), this.selectShowDropdownListener && this.element.removeEventListener("showDropdown", this.selectShowDropdownListener), this.choicesInstance.destroy(), this.choicesInstance = null);
    },
    normalizeOptions(e, t) {
      const r = L(e);
      return !r && W(e) ? this.optionValue && this.optionLabel ? t.push({
        value: ht(e, this.optionValue),
        label: ht(e, this.optionLabel)
      }) : Y(e, (n, i) => {
        t.push({ label: n, value: i });
      }) : r && e.forEach((n) => {
        this.normalizeOptions(n, t);
      }), t;
    },
    setValueOnChoices(e) {
      Array.isArray(e) && (e = ms(e, (t) => `${t}`), this.choicesInstance.removeActiveItems()), e == null ? e = "" : Array.isArray(e) || (e = `${e}`), this.choicesInstance.setChoiceByValue(e), this.updateHasSelectionAttribute(), this.handlePlaceholderVisibility();
    },
    getItemOfCurrentModel() {
      const e = this.modelValue;
      return on(this.choicesInstance._store.choices, (t) => t.value == e);
    },
    handlePlaceholderVisibility() {
      if (!this.multiple)
        return;
      const e = this.choicesInstance.containerInner.element.querySelector(
        "input.choices__input"
      );
      this.placeholderText = e.placeholder ? e.placeholder : this.placeholderText;
      const t = this.choicesInstance.getValue().length;
      e.placeholder = t ? "" : this.placeholderText ? this.placeholderText : "", e.style.minWidth = "0", e.style.width = t ? "1px" : "auto", e.style.paddingTop = t ? "0px" : "1px", e.style.paddingBottom = t ? "0px" : "1px";
    },
    initChoices(e) {
      return new Promise((t) => {
        const r = Array.from(
          e.querySelectorAll("option:not([placeholder])")
        ).length, n = this;
        import("choices.js").then((i) => {
          const s = Object.assign({}, this.choices, this.jsChoicesOptions, {
            callbackOnInit: function() {
              const a = this;
              n.stack > 0 && (n.headlessListener = function(o) {
                const l = n.choicesInstance.dropdown.isActive;
                !l && o.target === e ? n.choicesInstance.showDropdown() : l && o.target !== e && n.choicesInstance.hideDropdown();
              }, document.querySelector("#headlessui-portal-root").addEventListener("click", n.headlessListener, { capture: true })), a.containerInner.element.setAttribute(
                "data-select-name",
                e.name
              ), e.hasAttribute("dusk") && e.removeAttribute("dusk"), n.dusk && (a.containerInner.element.setAttribute("dusk", n.dusk), a.choiceList.element.setAttribute("dusk", `${n.dusk}-listbox`)), n.selectChangeListener = function() {
                let o = a.getValue(true);
                if (o == null && (o = ""), n.$emit("update:modelValue", o), !n.multiple || r < 1)
                  return;
                a.getValue().length >= r && a.hideDropdown();
              }, e.addEventListener("change", n.selectChangeListener), a.containerInner.element.addEventListener("hideDropdownFromDusk", function() {
                a.hideDropdown();
              }), n.selectShowDropdownListener = function() {
                if (n.multiple || !n.modelValue)
                  return;
                const o = n.getItemOfCurrentModel(), l = a.dropdown.element.querySelector(
                  `.choices__item[data-id="${o.id}"]`
                );
                a.choiceList.scrollToChildElement(l, 1), a._highlightChoice(l);
              }, e.addEventListener("showDropdown", n.selectShowDropdownListener), n.choicesInstance = a, n.setValueOnChoices(n.modelValue), t();
            }
          });
          new i.default(e, s);
        });
      });
    },
    updateHasSelectionAttribute() {
      this.choicesInstance.containerInner.element.setAttribute(
        "data-has-selection",
        this.hasSelection
      );
    }
  }
}, Dd = { ref: "select" };
function Ld(e, t, r, n, i, s) {
  return openBlock(), createElementBlock("div", Dd, [
    renderSlot(e.$slots, "default", { loading: i.loading })
  ], 512);
}
const jd = /* @__PURE__ */ He(qd, [["render", Ld]]), kd = {
  inject: ["stack"],
  render() {
    const e = m.validationErrors(this.stack), t = m.flashData(this.stack), r = m.sharedData.value, n = ps(e, (i) => i.join(`
`));
    return this.$slots.default({
      flash: t,
      errors: n,
      rawErrors: e,
      shared: r,
      hasError(i) {
        return i in e;
      },
      hasFlash(i) {
        return K(t, i);
      },
      hasShared(i) {
        return K(r, i);
      },
      hasErrors: Object.keys(e).length > 0
    });
  }
};
function Bd(e, t, r) {
  e = Wr(e), t = Ut(t);
  var n = e.length;
  r = r === void 0 ? n : hs(an(r), 0, n);
  var i = r;
  return r -= t.length, r >= 0 && e.slice(r, i) == t;
}
function Rd(e, t) {
  var r = [];
  return Lr(e, function(n, i, s) {
    t(n, i, s) && r.push(n);
  }), r;
}
function Md(e, t) {
  var r = L(e) ? os : Rd;
  return r(e, bt(t));
}
function ri(e, t) {
  return Jt(e, t);
}
const Nd = {
  props: {
    striped: {
      type: Boolean,
      required: false,
      default: false
    },
    columns: {
      type: Object,
      required: true
    },
    defaultVisibleToggleableColumns: {
      type: Array,
      required: true
    },
    searchDebounce: {
      type: Number,
      required: false,
      default: 350
    },
    itemsOnThisPage: {
      type: Number,
      required: false,
      default: 0
    },
    itemsOnAllPages: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data() {
    return {
      selectedItems: [],
      visibleColumns: [],
      forcedVisibleSearchInputs: [],
      debounceUpdateQuery: null,
      isLoading: false,
      processingAction: false
    };
  },
  computed: {
    columnsAreToggled() {
      return !ri(this.visibleColumns, this.defaultVisibleToggleableColumns);
    },
    hasForcedVisibleSearchInputs() {
      return this.forcedVisibleSearchInputs.length > 0;
    },
    allItemsFromAllPagesAreSelected() {
      return this.selectedItems.length === 1 && this.selectedItems[0] === "*";
    },
    allVisibleItemsAreSelected() {
      const e = this.selectedItems.length;
      return e === 1 && this.selectedItems[0] === "*" || e > 0 && e === this.itemsOnThisPage;
    },
    hasSelectedItems() {
      return this.selectedItems.length > 0;
    },
    totalSelectedItems() {
      const e = this.selectedItems.length;
      return e === 1 && this.selectedItems[0] === "*" ? this.itemsOnAllPages : e;
    }
  },
  created() {
    this.debounceUpdateQuery = Zr(function(e, t, r) {
      this.updateQuery(e, t, r);
    }, this.searchDebounce);
  },
  mounted() {
    const e = this.getCurrentQuery(), t = e.columns || [];
    Y(e, (r, n) => {
      if (Ge(n, "filter[") && !r) {
        const i = n.split("["), s = i[1].substring(0, i[1].length - 1);
        this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, s];
      }
    }), t.length === 0 ? this.visibleColumns = this.defaultVisibleToggleableColumns : this.visibleColumns = t;
  },
  methods: {
    visitLink(e, t, r) {
      var n, i;
      if (!(((n = r == null ? void 0 : r.target) == null ? void 0 : n.tagName) === "A" || ((i = r == null ? void 0 : r.target) == null ? void 0 : i.tagName) === "BUTTON"))
        return t === "modal" ? m.modal(e) : t === "slideover" ? m.slideover(e) : m.visit(e);
    },
    reset() {
      this.forcedVisibleSearchInputs = [], this.visibleColumns = this.defaultVisibleToggleableColumns;
      let e = this.getCurrentQuery();
      e.columns = [], e.page = null, e.perPage = null, e.sort = null, Y(e, (t, r) => {
        Ge(r, "filter[") && (e[r] = null);
      }), this.visitWithQueryObject(e, null, true);
    },
    columnIsVisible(e) {
      return this.visibleColumns.includes(e);
    },
    toggleColumn(e) {
      const t = !this.columnIsVisible(e), r = Md(this.columns, (i) => i.can_be_hidden ? i.key === e ? t : this.visibleColumns.includes(i.key) : true);
      let n = ms(r, (i) => i.key).sort();
      ri(n, this.defaultVisibleToggleableColumns) && (n = []), this.visibleColumns = n.length === 0 ? this.defaultVisibleToggleableColumns : n, this.updateQuery("columns", n, null, false);
    },
    disableSearchInput(e) {
      this.forcedVisibleSearchInputs = this.forcedVisibleSearchInputs.filter((t) => t != e), this.updateQuery(`filter[${e}]`, null);
    },
    showSearchInput(e) {
      this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, e], nextTick(() => {
        document.querySelector(`[name="searchInput-${e}"]`).focus();
      });
    },
    isForcedVisible(e) {
      return this.forcedVisibleSearchInputs.includes(e);
    },
    getCurrentQuery() {
      const e = window.location.search;
      if (!e)
        return {};
      let t = {};
      return e.substring(1).split("&").forEach((r) => {
        const n = decodeURIComponent(r).split("=");
        let i = n[0];
        if (!Bd(i, "]")) {
          t[i] = n[1];
          return;
        }
        const s = i.split("["), a = s[1].substring(0, s[1].length - 1);
        parseInt(a) == a ? (i = s[0], L(t[i]) || (t[i] = []), t[i].push(n[1])) : t[i] = n[1];
      }), t;
    },
    updateQuery(e, t, r, n) {
      typeof n > "u" && (n = true);
      let i = this.getCurrentQuery();
      i[e] = t, (Ge(e, "perPage") || Ge(e, "filter[")) && delete i.page, this.visitWithQueryObject(i, r, n);
    },
    visitWithQueryObject(e, t, r) {
      var o;
      typeof r > "u" && (r = true);
      let n = {};
      Y(e, (l, u) => {
        if (!L(l)) {
          n[u] = l;
          return;
        }
        l.length !== 0 && l.forEach((c, p) => {
          n[`${u}[${p}]`] = c;
        });
      });
      let i = "";
      Y(n, (l, u) => {
        l === null || l === [] || (i && (i += "&"), i += `${u}=${l}`);
      }), i && (i = "?" + i);
      const s = window.location.pathname + i;
      if (!r)
        return m.replaceUrlOfCurrentPage(s);
      this.isLoading = true;
      let a = null;
      typeof t < "u" && t && (a = (o = document.querySelector(`[name="${t.name}"]`)) == null ? void 0 : o.value), m.replace(s).then(() => {
        this.isLoading = false, typeof t < "u" && t && nextTick(() => {
          const l = document.querySelector(`[name="${t.name}"]`);
          l.focus(), a && (l.value = a);
        });
      });
    },
    async performBulkAction(e, t, r, n, i) {
      if (t)
        try {
          await m.confirm(t === true ? "" : t, r, n, i);
        } catch {
          return false;
        }
      this.isLoading = true, m.request(e, "POST", { ids: this.selectedItems }, {}, false).then((s) => {
        s.data;
      }).catch(() => {
        this.isLoading = false;
      });
    },
    setSelectedItems(e) {
      this.selectedItems = L(e) ? e : [];
    },
    itemIsSelected(e) {
      return this.selectedItems.length == 1 && this.selectedItems[0] == "*" ? true : this.selectedItems.includes(e);
    },
    setSelectedItem(e, t) {
      t ? this.selectedItems.push(e) : this.selectedItems = this.selectedItems.filter((r) => r !== e);
    }
  },
  render() {
    return this.$slots.default({
      columnIsVisible: this.columnIsVisible,
      columnsAreToggled: this.columnsAreToggled,
      debounceUpdateQuery: this.debounceUpdateQuery,
      disableSearchInput: this.disableSearchInput,
      hasForcedVisibleSearchInputs: this.hasForcedVisibleSearchInputs,
      isForcedVisible: this.isForcedVisible,
      reset: this.reset,
      showSearchInput: this.showSearchInput,
      striped: this.striped,
      toggleColumn: this.toggleColumn,
      updateQuery: this.updateQuery,
      visit: this.visitLink,
      totalSelectedItems: this.totalSelectedItems,
      allItemsFromAllPagesAreSelected: this.allItemsFromAllPagesAreSelected,
      allVisibleItemsAreSelected: this.allVisibleItemsAreSelected,
      hasSelectedItems: this.hasSelectedItems,
      setSelectedItems: this.setSelectedItems,
      itemIsSelected: this.itemIsSelected,
      setSelectedItem: this.setSelectedItem,
      performBulkAction: this.performBulkAction,
      processingAction: this.processingAction,
      isLoading: this.isLoading
    });
  }
}, Vd = {
  inheritAttrs: false,
  data() {
    return {
      isMounted: false,
      Teleport
    };
  },
  mounted() {
    this.isMounted = true;
  }
};
function Hd(e, t, r, n, i, s) {
  return withDirectives((openBlock(), createBlock(resolveDynamicComponent(i.isMounted ? i.Teleport : "div"), normalizeProps(guardReactiveProps(e.$attrs)), {
    default: withCtx(() => [
      renderSlot(e.$slots, "default")
    ]),
    _: 3
  }, 16)), [
    [vShow, i.isMounted]
  ]);
}
const Ud = /* @__PURE__ */ He(Vd, [["render", Hd]]), Wd = {
  props: {
    autosize: {
      type: Boolean,
      required: false,
      default: false
    },
    modelValue: {
      type: [String, Number],
      required: false
    }
  },
  data() {
    return {
      autosizeInstance: null,
      element: null
    };
  },
  watch: {
    modelValue() {
      !this.autosize || !this.autosizeInstance || import("autosize").then((e) => {
        nextTick(() => e.default.update(this.element));
      });
    }
  },
  mounted() {
    this.element = this.$refs.textarea.querySelector("textarea"), this.autosize && import("autosize").then((e) => {
      this.autosizeInstance = e.default(this.element);
    });
  },
  beforeUnmount() {
    this.autosize && this.autosizeInstance && import("autosize").then((e) => {
      e.default.destroy(this.element);
    });
  }
}, zd = { ref: "textarea" };
function Gd(e, t, r, n, i, s) {
  return openBlock(), createElementBlock("div", zd, [
    renderSlot(e.$slots, "default")
  ], 512);
}
const Kd = /* @__PURE__ */ He(Wd, [["render", Gd]]), Xd = {
  props: {
    toastKey: {
      type: Number,
      required: true
    },
    autoDismiss: {
      type: Number,
      required: false,
      default: 0
    }
  },
  emits: ["dismiss"],
  data() {
    return {
      show: true
    };
  },
  mounted() {
    this.autoDismiss && setTimeout(() => {
      this.setShow(false);
    }, this.autoDismiss * 1e3);
  },
  methods: {
    setShow(e) {
      this.show = e;
    },
    emitDismiss() {
      this.$emit("dismiss");
    }
  },
  render() {
    return this.$slots.default({
      key: this.toastKey,
      show: this.show,
      setShow: this.setShow,
      emitDismiss: this.emitDismiss,
      TransitionRoot: rt,
      TransitionChild: tt
    });
  }
}, Qd = [
  "left-top",
  "center-top",
  "right-top",
  "left-center",
  "center-center",
  "right-center",
  "left-bottom",
  "center-bottom",
  "right-bottom"
], Jd = {
  computed: {
    toasts: function() {
      return m.toastsReversed.value;
    },
    hasBackdrop: function() {
      return m.toasts.value.filter((e) => !e.dismissed && e.backdrop && e.html).length > 0;
    }
  },
  methods: {
    dismissToast(e) {
      m.dismissToast(e);
    }
  },
  render() {
    return this.$slots.default({
      positions: Qd,
      toasts: this.toasts,
      dismissToast: this.dismissToast,
      hasBackdrop: this.hasBackdrop,
      Render: ue,
      TransitionRoot: rt,
      TransitionChild: tt
    });
  }
}, Yd = {
  props: {
    default: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      toggles: { ...this.default }
    };
  },
  methods: {
    toggled(e) {
      var t;
      return (t = this.toggles[e]) != null ? t : false;
    },
    toggle(e) {
      this.setToggle(e, !this.toggled(e));
    },
    setToggle(e, t) {
      this.toggles[e] = t;
    }
  },
  render() {
    const e = this;
    return this.$slots.default(
      new Proxy(
        {},
        {
          ownKeys() {
            return Object.keys(e.toggles);
          },
          get(t, r) {
            const n = Object.keys(e.toggles);
            if (n.length === 1 && ss(n) === "default") {
              if (r === "toggled")
                return e.toggled("default");
              if (r === "setToggle")
                return (i) => {
                  e.setToggle("default", i);
                };
              if (r === "toggle")
                return () => {
                  e.toggle("default");
                };
            }
            return r === "setToggle" ? (i, s) => {
              e.setToggle(i, s);
            } : r === "toggle" ? (i) => {
              e.toggle(i);
            } : e.toggled(r);
          }
        }
      )
    );
  }
}, Zd = {
  render() {
    return this.$slots.default({
      TransitionRoot: rt,
      TransitionChild: tt
    });
  }
}, ep = {
  created: (e, t) => {
    if (m.isSsr)
      return;
    const r = `preserveScroll-${t.arg}`, n = m.restore(r);
    n && nextTick(() => {
      typeof e.scrollTo == "function" ? e.scrollTo(n.left, n.top) : (e.scrollTop = n.top, e.scrollLeft = n.left);
    });
    const i = function() {
      m.remember(r, {
        top: e.scrollTop,
        left: e.scrollLeft
      });
    };
    e.addEventListener("scroll", Zr(i, 100)), i();
  }
}, Ir = {
  injectCSS(e) {
    const t = document.createElement("style");
    t.type = "text/css", t.textContent = `
    #nprogress {
      pointer-events: none;
    }
    #nprogress .bar {
      background: ${e};
      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
    }
    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
      opacity: 1.0;
      -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
    }
    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }
    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;
      border: solid 2px transparent;
      border-top-color: ${e};
      border-left-color: ${e};
      border-radius: 50%;
      -webkit-animation: nprogress-spinner 400ms linear infinite;
              animation: nprogress-spinner 400ms linear infinite;
    }
    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }
    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }
    @-webkit-keyframes nprogress-spinner {
      0%   { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes nprogress-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `, document.head.appendChild(t);
  },
  timeout: null,
  start(e, t, r) {
    Ir.timeout = setTimeout(() => r.start(), t);
  },
  progress(e, t) {
    t.isStarted() && e.detail.progress.percentage && t.set(Math.max(t.status, e.detail.progress.percentage / 100 * 0.9));
  },
  stop(e, t) {
    clearTimeout(Ir.timeout), t.done(), t.remove();
  },
  init(e) {
    const t = this;
    import("nprogress").then((r) => {
      document.addEventListener("splade:request", (n) => t.start(n, e.delay, r.default)), document.addEventListener("splade:request-progress", (n) => t.progress(n, r.default)), document.addEventListener("splade:request-response", (n) => t.stop(n, r.default)), document.addEventListener("splade:request-error", (n) => t.stop(n, r.default)), r.default.configure({ showSpinner: e.spinner }), e.css && this.injectCSS(e.color);
    });
  }
}, sp = {
  install: (e, t) => {
    t = t || {}, t.max_keep_alive = K(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = K(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = K(t, "transform_anchors") ? t.transform_anchors : false, t.link_component = K(t, "link_component") ? t.link_component : "Link", t.progress_bar = K(t, "progress_bar") ? t.progress_bar : false, t.components = K(t, "components") ? t.components : {};
    const r = t.prefix;
    if (e.component(`${r}Confirm`, mu).component(`${r}Data`, Su).component(`${r}Defer`, Du).component(`${r}Dialog`, Lu).component(`${r}Dropdown`, Hc).component(`${r}DynamicHtml`, Uc).component(`${r}Errors`, Wc).component(`${r}Event`, zc).component(`${r}File`, gd).component(`${r}Flash`, yd).component(`${r}Form`, wd).component(`${r}Input`, xd).component(`${r}Lazy`, _d).component(`${r}Modal`, Pd).component(`${r}OnClickOutside`, Ji).component(`${r}PreloadedModal`, Cd).component(`${r}Render`, ue).component(`${r}Select`, jd).component(`${r}State`, kd).component(`${r}Table`, Nd).component(`${r}Teleport`, Ud).component(`${r}Textarea`, Kd).component(`${r}Toast`, Xd).component(`${r}Toasts`, Jd).component(`${r}Toggle`, Yd).component(`${r}Transition`, Zd).component(t.link_component, Id).directive(`${r}PreserveScroll`, ep), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => m }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions), t.progress_bar) {
      const n = {
        delay: 250,
        color: "#4B5563",
        css: true,
        spinner: false
      };
      W(t.progress_bar) || (t.progress_bar = {}), ["delay", "color", "css", "spinner"].forEach((i) => {
        K(t.progress_bar, i) || (t.progress_bar[i] = n[i]);
      }), Ir.init(t.progress_bar);
    }
    Y(t.components, (n, i) => {
      e.component(i, n);
    });
  }
};
function ap(e, t, r) {
  const n = {};
  process.argv.slice(2).forEach((s) => {
    const a = s.replace(/^-+/, "").split("=");
    n[a[0]] = a.length === 2 ? a[1] : true;
  });
  const i = n.port || 9e3;
  e(async (s, a) => {
    if (s.method == "POST") {
      let o = "";
      s.on("data", (l) => o += l), s.on("end", async () => {
        const l = JSON.parse(o), u = r({
          components: l.components,
          initialDynamics: l.dynamics,
          initialHtml: l.html,
          initialSpladeData: l.splade
        }), c = await t(u);
        a.writeHead(200, { "Content-Type": "application/json", Server: "Splade SSR" }), a.write(JSON.stringify({ body: c })), a.end();
      });
    }
  }).listen(i, () => console.log(`Splade SSR server started on port ${i}.`));
}
ap(createServer, renderToString, (props) => {
  return createSSRApp({
    render: np(props)
  }).use(sp);
});
