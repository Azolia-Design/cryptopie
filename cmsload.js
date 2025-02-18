function cmsLoad() {
    var Ke = Object.create;
    var V = Object.defineProperty,
        Ue = Object.defineProperties,
        Fe = Object.getOwnPropertyDescriptor,
        Ve = Object.getOwnPropertyDescriptors,
        He = Object.getOwnPropertyNames,
        te = Object.getOwnPropertySymbols,
        Ge = Object.getPrototypeOf,
        oe = Object.prototype.hasOwnProperty,
        We = Object.prototype.propertyIsEnumerable;
    var F = (e, t, o) => (t in e ? V(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : (e[t] = o)),
        H = (e, t) => {
            for (var o in t || (t = {})) oe.call(t, o) && F(e, o, t[o]);
            if (te) for (var o of te(t)) We.call(t, o) && F(e, o, t[o]);
            return e;
        },
        G = (e, t) => Ue(e, Ve(t));
    var Ye = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
    var qe = (e, t, o, n) => {
        if ((t && typeof t == "object") || typeof t == "function") for (let r of He(t)) !oe.call(e, r) && r !== o && V(e, r, { get: () => t[r], enumerable: !(n = Fe(t, r)) || n.enumerable });
        return e;
    };
    var je = (e, t, o) => ((o = e != null ? Ke(Ge(e)) : {}), qe(t || !e || !e.__esModule ? V(o, "default", { value: e, enumerable: !0 }) : o, e));
    var re = (e, t, o) => (F(e, typeof t != "symbol" ? t + "" : t, o), o);
    var p = (e, t, o) =>
        new Promise((n, r) => {
            var i = (c) => {
                    try {
                        a(o.next(c));
                    } catch (m) {
                        r(m);
                    }
                },
                s = (c) => {
                    try {
                        a(o.throw(c));
                    } catch (m) {
                        r(m);
                    }
                },
                a = (c) => (c.done ? n(c.value) : Promise.resolve(c.value).then(i, s));
            a((o = o.apply(e, t)).next());
        });
    var ve = Ye((hr, Le) => {
        Le.exports = Ot;
        function Ot(e, t, o, n) {
            var r, i, s;
            return function () {
                if (((s = this), (i = Array.prototype.slice.call(arguments)), r && (o || n))) return;
                if (!o) return m(), (r = setTimeout(c, t)), r;
                (r = setTimeout(m, t)), e.apply(s, i);
                function c() {
                    m(), e.apply(s, i);
                }
                function m() {
                    clearTimeout(r), (r = null);
                }
            };
        }
    });
    var b = class {
        static activateAlerts() {
            this.alertsActivated = !0;
        }
        static alert(t, o) {
            if ((this.alertsActivated && window.alert(t), o === "error")) throw new Error(t);
        }
    };
    re(b, "alertsActivated", !1);
    var $ = "w--current";
    var h = {
        wrapper: "w-dyn-list",
        list: "w-dyn-items",
        item: "w-dyn-item",
        paginationWrapper: "w-pagination-wrapper",
        paginationNext: "w-pagination-next",
        paginationPrevious: "w-pagination-previous",
        pageCount: "w-page-count",
        emptyState: "w-dyn-empty",
    };
    var ne = { addToCartForm: "w-commerce-commerceaddtocartform" },
        ie = { trigger: "w-lightbox" };
    var k = (e, t = !0) => e.cloneNode(t);
    var C = (e, t) => !!e && t.includes(e);
    function B(e, t, o, n = !0) {
        let r = o ? [o] : [];
        if (!e) return r;
        let i = e.split(",").reduce((s, a) => {
            let c = a.trim();
            return (!n || c) && s.push(c), s;
        }, []);
        if (t) {
            let s = i.filter((a) => C(a, t));
            return s.length ? s : r;
        }
        return i;
    }
    var W = (e) => Object.keys(e);
    var Y = (e) => e != null;
    var se = new Map([
        ["tiny", "(max-width: 479px)"],
        ["small", "(max-width: 767px)"],
        ["medium", "(max-width: 991px)"],
        ["main", "(min-width: 992px)"],
    ]);
    var { wrapper: Qe, list: Xe, paginationWrapper: ze, paginationNext: Je, paginationPrevious: Ze, emptyState: et, pageCount: tt } = h;
    function x(e, t, o = document) {
        let n = typeof e == "string" ? o.querySelector(e) : e;
        if (!n) return;
        let r = n.closest(`.${Qe}`);
        if (!r) return;
        let i = r.querySelector(`.${Xe}`);
        return t === "wrapper"
            ? r
            : t === "list"
            ? i
            : t === "items"
            ? [...((i == null ? void 0 : i.children) || [])]
            : t === "pageCount"
            ? r.querySelector(`.${tt}`)
            : t === "empty"
            ? r.querySelector(`:scope > .${et}`)
            : t === "pagination"
            ? r.querySelector(`.${ze}`)
            : r.querySelector(`.${t === "next" ? Je : Ze}`);
    }
    var q = (e, t = document) => {
        e = e.filter((i) => i);
        let o = e.join(", ") || `.${h.wrapper}`;
        return [...t.querySelectorAll(o)].reduce((i, s) => {
            if (!s) return i;
            let a = x(s, "wrapper");
            return !a || i.includes(a) || i.push(a), i;
        }, []);
    };
    var j = () => {
        for (let [e, t] of se) if (window.matchMedia(t).matches) return e;
        return "main";
    };
    var T = (e) => (t) => `${e}${t ? `-${t}` : ""}`,
        I = (e) => {
            let t = (n, r, i) => {
                let s = e[n],
                    { key: a, values: c } = s,
                    m;
                if (!r) return `[${a}]`;
                let l = c == null ? void 0 : c[r];
                if ((typeof l == "string" ? (m = l) : (m = l(i && "instanceIndex" in i ? i.instanceIndex : void 0)), !(i != null && i.operator))) return `[${a}="${m}"]`;
                switch (i.operator) {
                    case "prefixed":
                        return `[${a}^="${m}"]`;
                    case "suffixed":
                        return `[${a}$="${m}"]`;
                    case "contains":
                        return `[${a}*="${m}"]`;
                }
            };
            return [
                t,
                (n, r) => {
                    let i = t("element", n, r);
                    return ((r == null ? void 0 : r.scope) || document).querySelector(i);
                },
            ];
        };
    var v = "fs-attributes",
        _ = { preventLoad: { key: `${v}-preventload` }, debugMode: { key: `${v}-debug` }, src: { key: "src", values: { finsweet: "@finsweet/attributes" } }, dev: { key: `${v}-dev` } },
        [Q, Oo] = I(_);
    var ae = () => {
        let { currentScript: e } = document,
            { preventLoad: t, debugMode: o } = _,
            n = typeof (e == null ? void 0 : e.getAttribute(t.key)) == "string";
        return typeof (e == null ? void 0 : e.getAttribute(o.key)) == "string" && b.activateAlerts(), { preventsLoad: n };
    };
    var ot = `${v}-support`,
        rt = "https://cdn.jsdelivr.net/npm/@finsweet/attributes-support@1/support.js",
        ce = () =>
            p(void 0, null, function* () {
                let { fsAttributes: e, location: t } = window,
                    { host: o, searchParams: n } = new URL(t.href);
                if (!o.includes("webflow.io") || !n.has(ot)) return !1;
                if (e.supportImport) return e.supportImport;
                try {
                    e.supportImport = new Promise((r, i) => {
                        let s = document.createElement("script");
                        (s.src = rt), (s.onload = () => r(!0)), (s.onerror = i), document.head.append(s);
                    });
                } catch (r) {
                    return !1;
                }
                return e.supportImport;
            });
    var me = () => {
            if (window.fsAttributes && !Array.isArray(window.fsAttributes)) return;
            let e = {
                cms: {},
                push(...t) {
                    var o, n;
                    for (let [r, i] of t) (n = (o = this[r]) == null ? void 0 : o.loading) == null || n.then(i);
                },
            };
            nt(e), it(e), (window.fsAttributes = e), (window.FsAttributes = window.fsAttributes), ce();
        },
        nt = (e) => {
            let t = Q("src", "finsweet", { operator: "contains" }),
                o = Q("dev"),
                r = [...document.querySelectorAll(`script${t}, script${o}`)].reduce((i, s) => {
                    var c;
                    let a = s.getAttribute(_.dev.key) || ((c = s.src.match(/[\w-. ]+(?=(\.js)$)/)) == null ? void 0 : c[0]);
                    return a && !i.includes(a) && i.push(a), i;
                }, []);
            for (let i of r) {
                e[i] = {};
                let s = e[i];
                s.loading = new Promise((a) => {
                    s.resolve = (c) => {
                        a(c), delete s.resolve;
                    };
                });
            }
        },
        it = (e) => {
            let t = Array.isArray(window.fsAttributes) ? window.fsAttributes : [];
            e.push(...t);
        };
    var st = "https://cdn.jsdelivr.net/npm/@finsweet/attributes-animation@1/functions.js",
        M = () =>
            p(void 0, null, function* () {
                let { fsAttributes: e } = window;
                if (e.animationImport) return e.animationImport;
                try {
                    let t = import(st);
                    return (e.animationImport = t), t;
                } catch (t) {
                    b.alert(`${t}`, "error");
                    return;
                }
            });
    var at = "https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmscore@1/cmscore.js",
        R = () =>
            p(void 0, null, function* () {
                let { fsAttributes: e } = window;
                e.cms || (e.cms = {});
                let { cms: t } = e;
                if (t.coreImport) return t.coreImport;
                try {
                    let o = import(at);
                    return (
                        (t.coreImport = o),
                        o.then((n) => {
                            n && (t.coreVersion || (t.coreVersion = n.version));
                        }),
                        o
                    );
                } catch (o) {
                    b.alert(`${o}`, "error");
                    return;
                }
            });
    var le = "1.7.1";
    var ue = (n, r) =>
            p(void 0, [n, r], function* (e, { durationKey: t, easingKey: o }) {
                let i = yield M();
                if (!i) return;
                let {
                        animations: { fade: s },
                        easings: a,
                    } = i,
                    { listAnimation: c } = e,
                    m = e.getAttribute(t),
                    l = e.getAttribute(o);
                if (c && !m && !l) return;
                let d = C(l, a) ? l : void 0,
                    g = m ? parseFloat(m) / 2e3 : 0.1;
                if (!c) {
                    e.listAnimation = G(H({}, s), { options: { easing: d, duration: g } });
                    return;
                }
                let { options: f } = c;
                if (!f) {
                    c.options = { easing: d, duration: g };
                    return;
                }
                f.easing || (f.easing = d), m && (f.duration = g);
            }),
        pe = (i, s) =>
            p(void 0, [i, s], function* (e, { animationKey: t, durationKey: o, easingKey: n, staggerKey: r }) {
                let a = yield M();
                if (!a) return;
                let { animations: c, easings: m } = a,
                    l = e.getAttribute(t),
                    d = C(l, W(c)) ? c[l] : c.fade,
                    g = e.getAttribute(o),
                    f = e.getAttribute(n),
                    u = e.getAttribute(r);
                e.itemsAnimation = G(H({}, d), { options: { easing: C(f, m) ? f : void 0, duration: g ? parseFloat(g) / 1e3 : void 0, stagger: u ? parseFloat(u) : void 0 } });
            });
    var de = (e, t) => {
        let { coreVersion: o } = window.fsAttributes.cms;
        if (!o) return !1;
        let n = { numeric: !0, sensitivity: "base" },
            r = t.localeCompare(o, void 0, n);
        return r === 0 || (e === ">=" ? r < 0 : r > 0);
    };
    var mt = new DOMParser(),
        O = (e) =>
            p(void 0, null, function* () {
                let o = yield (yield fetch(e)).text();
                return mt.parseFromString(o, "text/html");
            });
    var fe = ({ textContent: e }) => {
            if (!e) return;
            let [, t] = e.split("/");
            return t ? parseInt(t.trim()) : void 0;
        },
        D = (e, t, o, n) =>
            p(void 0, null, function* () {
                n == null || n.preventDefault();
                let { items: r, itemsPerPage: i } = e;
                if (!(!t && i === r.length)) {
                    if (i + o <= r.length) e.itemsPerPage = i + o;
                    else if (t) {
                        let s = yield e.once("renderitems");
                        e.itemsPerPage = i + s.length;
                    } else e.itemsPerPage += r.length - i;
                    yield e.renderItems(!0);
                }
            }),
        ge = (e) => {
            let { pagesQuery: t, currentPage: o, totalPages: n, paginationNext: r, paginationPrevious: i } = e;
            !o || (i && ((i.style.display = o !== 1 ? "" : "none"), (i.href = `?${t}=${o - 1}`)), r && ((r.style.display = o !== n ? "" : "none"), (r.href = `?${t}=${o + 1}`)));
        },
        Se = (e, { currentPage: t, totalPages: o }) => {
            e.setAttribute("aria-label", `Page ${t} of ${o}`), (e.textContent = `${t} / ${o}`);
        };
    var K = (e, t, o) =>
        p(void 0, null, function* () {
            var d;
            let { index: n, paginationNext: r, paginationPrevious: i, originalItemsPerPage: s } = t,
                a = q([], e)[n];
            if (!a) return;
            if (!i || !r) {
                let g = x(a, "pagination"),
                    f = x(a, "previous"),
                    u = x(a, "next");
                if (f) {
                    let S = [...((g == null ? void 0 : g.children) || [])].indexOf(f);
                    t.addPaginationButton(f, "paginationPrevious", S);
                }
                if (u) {
                    let S = [...((g == null ? void 0 : g.children) || [])].indexOf(u);
                    f || (S += 1), t.addPaginationButton(u, "paginationNext", S);
                }
            }
            let c = (d = x(a, "next")) == null ? void 0 : d.href,
                m = x(a, "items"),
                { length: l } = m;
            return c && s !== l && (t.originalItemsPerPage = t.itemsPerPage = l), yield t.addItems(m, o), c;
        });
    var w = (e) =>
            p(void 0, null, function* () {
                let { paginationNext: t, paginationPrevious: o, paginationCount: n, extractingPaginationData: r } = e;
                if (!t && !o) return;
                yield r;
                let i = n ? fe(n) : void 0;
                yield e.displayElement("loader"), i ? yield Ee(e, i) : yield lt(e), yield e.emit("finishload"), yield e.displayElement("loader", !1);
            }),
        lt = (e) =>
            p(void 0, null, function* () {
                let { paginationNext: t, currentPage: o } = e;
                if ((o && (yield Ee(e, o)), !t)) return;
                let { href: n } = t,
                    r = [n],
                    i = (s) =>
                        p(void 0, null, function* () {
                            try {
                                let a = yield O(s),
                                    c = yield K(a, e);
                                if (!c || r.includes(c)) return;
                                r.push(c), yield i(c);
                            } catch (a) {
                                return;
                            }
                        });
                yield i(n);
            }),
        Ee = (e, t) =>
            p(void 0, null, function* () {
                let { paginationNext: o, paginationPrevious: n } = e;
                if (!o && !n) return;
                let { pagesQuery: r, currentPage: i } = e;
                if (!r || !i) return;
                let { origin: s, pathname: a } = window.location;
                for (let m = i - 1; m >= 1; m--)
                    try {
                        let l = yield O(`${s}${a}?${r}=${m}`);
                        yield K(l, e, "unshift");
                    } catch (l) {
                        return;
                    }
                let c = [];
                for (let m = i + 1; m <= t; m++)
                    c[m] = (() =>
                        p(void 0, null, function* () {
                            let l = c[m - 1];
                            try {
                                let d = yield O(`${s}${a}?${r}=${m}`);
                                yield l, yield K(d, e);
                            } catch (d) {
                                yield l;
                                return;
                            }
                        }))();
                yield Promise.all(c);
            });
    var ye = (e) =>
        p(void 0, null, function* () {
            let { paginationNext: t, paginationPrevious: o, paginationCount: n, itemsPerPage: r } = e;
            if (!t) return;
            o && (o.style.display = "none"), n == null || n.remove();
            let i = !0,
                s = !1;
            e.initPagination(),
                e.on("renderitems", () => {
                    let { validItems: m, items: l, itemsPerPage: d } = e;
                    if (!i && l.length === d) {
                        c();
                        return;
                    }
                    t.style.display = m.length > d ? "" : "none";
                });
            let a = (m) =>
                    p(void 0, null, function* () {
                        m.preventDefault(), !s && ((s = !0), yield D(e, i, r, m), (s = !1));
                    }),
                c = () => {
                    t.removeEventListener("click", a), (t.style.display = "none");
                };
            t.addEventListener("click", a), yield w(e), (i = !1);
        });
    var be = ut;
    function ut(e, t, o) {
        var n = null,
            r = null,
            i = o && o.leading,
            s = o && o.trailing;
        i == null && (i = !0), s == null && (s = !i), i == !0 && (s = !1);
        var a = function () {
                n && (clearTimeout(n), (n = null));
            },
            c = function () {
                var l = r;
                a(), l && l();
            },
            m = function () {
                var l = i && !n,
                    d = this,
                    g = arguments;
                if (
                    ((r = function () {
                        return e.apply(d, g);
                    }),
                    n ||
                        (n = setTimeout(function () {
                            if (((n = null), s)) return r();
                        }, t)),
                    l)
                )
                    return (l = !1), r();
            };
        return (m.cancel = a), (m.flush = c), m;
    }
    var L = "cmsload",
        y = `fs-${L}`,
        pt = "list",
        dt = "loader",
        ft = "items-count",
        gt = "visible-count",
        St = "scroll-anchor",
        Et = "page-button",
        yt = "page-dots",
        bt = "mode",
        xt = { loadUnder: "load-under", renderAll: "render-all", pagination: "pagination", infinite: "infinite" },
        wt = "threshold",
        At = "pagesiblings",
        Ct = "pageboundary",
        Pt = "animation",
        ht = "easing",
        Tt = "duration",
        Lt = "stagger",
        vt = "resetix",
        _t = { true: "true" },
        Mt = "showquery",
        Nt = { true: "true" },
        N = {
            element: { key: `${y}-element`, values: { list: T(pt), loader: T(dt), itemsCount: T(ft), visibleCount: T(gt), scrollAnchor: T(St), pageButton: Et, pageDots: yt } },
            mode: { key: `${y}-${bt}`, values: xt },
            threshold: { key: `${y}-${wt}` },
            pageSiblings: { key: `${y}-${At}` },
            pageBoundary: { key: `${y}-${Ct}` },
            animation: { key: `${y}-${Pt}` },
            easing: { key: `${y}-${ht}` },
            duration: { key: `${y}-${Tt}` },
            stagger: { key: `${y}-${Lt}` },
            resetIx: { key: `${y}-${vt}`, values: _t },
            showQuery: { key: `${y}-${Mt}`, values: Nt },
        },
        [U, A] = I(N),
        xe = "-20",
        we = 1,
        Ae = 1,
        Ce = { main: 0, medium: 1, small: 2, tiny: 3 };
    var {
            pageSiblings: { key: $t },
            pageBoundary: { key: kt },
            threshold: { key: Bt },
            showQuery: { key: It, values: Rt },
        } = N,
        Pe = (e) => {
            let { paginationWrapper: t, paginationCount: o } = e;
            if (!t) return;
            let n = A("pageButton", { operator: "prefixed", scope: t }),
                r = A("pageDots", { operator: "prefixed", scope: t });
            r ? r.remove() : ((r = document.createElement("div")), (r.textContent = "..."));
            let i = e.getAttribute(kt),
                s = (i ? B(i) : []).map((f) => parseInt(f)),
                a = e.getAttribute($t),
                c = (a ? B(a) : []).map((f) => parseInt(f)),
                [m, l] = X(s, c),
                d = [s, c].some(({ length: f }) => f > 1),
                g = e.getAttribute(It) === Rt.true;
            return { paginationWrapper: t, pageButtonTemplate: n, pageDotsTemplate: r, paginationCount: o, pageBoundary: m, pageBoundaryValues: s, pageSiblings: l, pageSiblingsValues: c, hasBreakpoints: d, showQueryParams: g };
        },
        X = (e, t) => {
            let o = j(),
                n = Ce[o],
                r = [];
            [e, t].forEach((a, c) => {
                for (let m = n; m >= 0; m--) {
                    let l = a[m];
                    if (typeof l == "number") {
                        r[c] = l;
                        break;
                    }
                }
            });
            let [i, s] = r;
            return i != null || (i = Ae), s != null || (s = we), [i, s];
        },
        he = (e) => {
            let t = parseInt(e.getAttribute(Bt) || xe);
            return 1 - t / 100;
        };
    var Te = (e) =>
        p(void 0, null, function* () {
            let { list: t, paginationNext: o, paginationPrevious: n, paginationCount: r, itemsPerPage: i } = e;
            if (!t || !o) return;
            n && (n.style.display = "none"), r == null || r.remove();
            let s = he(e),
                a = !0,
                c = !1;
            e.initPagination(),
                e.on("renderitems", () => {
                    let { validItems: f, items: u, itemsPerPage: S } = e;
                    if (!a && u.length === S) {
                        g();
                        return;
                    }
                    o.style.display = f.length > S ? "" : "none";
                });
            let m = (f) =>
                    p(void 0, null, function* () {
                        f.preventDefault();
                    }),
                l = be(
                    () =>
                        p(void 0, null, function* () {
                            if (c) return;
                            let { innerHeight: f } = window,
                                { bottom: u } = t.getBoundingClientRect(),
                                S = s * f;
                            u > 0 && u <= S && ((c = !0), yield D(e, a, i), (c = !1));
                        }),
                    100
                ),
                d = new IntersectionObserver((f) => {
                    for (let { isIntersecting: u } of f) window[u ? "addEventListener" : "removeEventListener"]("scroll", l);
                }),
                g = () => {
                    window.removeEventListener("scroll", l), o.removeEventListener("click", m), (o.style.display = "none"), d.disconnect();
                };
            o.addEventListener("click", m), d.observe(t), yield w(e), (a = !1);
        });
    var _e = je(ve(), 1);
    var { paginationNext: Dt, paginationPrevious: Kt } = h,
        Me = (e) =>
            p(void 0, null, function* () {
                let t = Pe(e);
                if (!t) return;
                let { paginationWrapper: o, pageButtonTemplate: n, pageDotsTemplate: r, paginationCount: i, pageBoundary: s, pageBoundaryValues: a, pageSiblings: c, pageSiblingsValues: m, hasBreakpoints: l, showQueryParams: d } = t,
                    g;
                if (n) {
                    let { parentElement: f } = n;
                    n.remove(), f && (g = { parentElement: f, pageButtonTemplate: n, pageDotsTemplate: r, pageBoundary: s, pageSiblings: c, renderedElements: new Map([]) });
                }
                e.initPagination(d),
                    e.on("renderitems", () => Ut(e, g, i)),
                    o.addEventListener("click", (f) => Ht(f, g, e)),
                    g &&
                        l &&
                        window.addEventListener(
                            "resize",
                            (0, _e.default)(() => {
                                Gt(g, e, a, m);
                            }, 100)
                        ),
                    yield w(e);
            }),
        Ut = (e, t, o, n = !0) => {
            t && Ne(t, e), o && Se(o, e), n && ge(e);
        },
        Ne = (e, t) => {
            let { currentPage: o, totalPages: n } = t;
            if (!o) return;
            let { parentElement: r, renderedElements: i, pageBoundary: s, pageSiblings: a } = e,
                c = [...i],
                m = a * 2 + 1,
                d = s * 2 + m + 2,
                g = o - 1 < d - m,
                f = n - o < d - m;
            for (let u = 1; u <= d; u++) {
                let [S, J] = c[u - 1] || [],
                    [Z] = c[u - 2] || [];
                if (u > n) {
                    S && (S.remove(), (c[u - 1] = void 0));
                    continue;
                }
                let E;
                n <= d
                    ? (E = u)
                    : g
                    ? u > d - s
                        ? (E = n - (d - u))
                        : u === d - s
                        ? (E = null)
                        : (E = u)
                    : f
                    ? u < s + 1
                        ? (E = u)
                        : u === s + 1
                        ? (E = null)
                        : (E = n - (d - u))
                    : u < s + 1
                    ? (E = u)
                    : u > d - s
                    ? (E = n - (d - u))
                    : u === s + 1 || u === d - s
                    ? (E = null)
                    : (E = o + (u - (s + 1) - (1 + a)));
                let P;
                J !== E && (S == null || S.remove(), (P = Ft(e, E, t)), (c[u - 1] = [P, E]), Z ? r.insertBefore(P, Z.nextSibling) : r.appendChild(P), (P.style.opacity = ""));
                let ee = P || S;
                !ee || Vt(ee, E === o);
            }
            e.renderedElements = new Map([...c.filter(Y)]);
        },
        Ft = ({ pageButtonTemplate: e, pageDotsTemplate: t }, o, { pagesQuery: n }) => {
            if (!o) return k(t);
            let r = k(e);
            return r.classList.remove($), (r.textContent = `${o}`), r instanceof HTMLAnchorElement && n && (r.href = `?${n}=${o}`), r;
        },
        Vt = (e, t) => {
            t ? (e.classList.add($), e.setAttribute("aria-current", "page")) : (e.classList.remove($), e.removeAttribute("aria-current"));
        },
        Ht = (e, t, o) => {
            let { target: n } = e;
            if (!(n instanceof Element)) return;
            let r = n.closest(U("element", "pageButton", { operator: "prefixed" })),
                i = n.closest(`.${Dt}`),
                s = n.closest(`.${Kt}`);
            if (!r && !i && !s) return;
            e.preventDefault();
            let { currentPage: a, totalPages: c } = o;
            if (!a) return;
            let m;
            i && (m = a + 1), s && (m = a - 1), r && (m = t == null ? void 0 : t.renderedElements.get(r)), !!m && m >= 1 && m <= c && o.switchPage(m);
        },
        Gt = (e, t, ...o) => {
            let { pageBoundary: n, pageSiblings: r, renderedElements: i } = e,
                [s, a] = X(...o);
            if (!(n === s && r === a)) {
                (e.pageBoundary = s), (e.pageSiblings = a);
                for (let [c] of i) c.remove();
                i.clear(), Ne(e, t);
            }
        };
    var $e = (e) =>
        p(void 0, null, function* () {
            let { paginationNext: t, paginationPrevious: o, paginationCount: n } = e;
            !t || ((t.style.display = "none"), o && (o.style.display = "none"), n == null || n.remove(), yield w(e));
        });
    var {
            element: { key: Wt },
            mode: {
                key: Yt,
                values: { renderAll: qt, infinite: jt, pagination: Qt },
            },
            animation: { key: Xt },
            duration: { key: ke },
            easing: { key: Be },
            stagger: { key: zt },
            resetIx: { key: Jt, values: Zt },
        } = N,
        Ie = (e) =>
            p(void 0, null, function* () {
                let t = e.getInstanceIndex(Wt),
                    { items: o } = e,
                    { Webflow: n } = window,
                    r = !!n && "require" in n;
                pe(e, { animationKey: Xt, durationKey: ke, easingKey: Be, staggerKey: zt }), ue(e, { durationKey: ke, easingKey: Be });
                let i = r && !!n.require("commerce") && o.some(({ element: l }) => l.querySelector(`.${ne.addToCartForm}`));
                i && (e.restartCommerce = i);
                let s = r && !!n.require("lightbox") && o.some(({ element: l }) => l.querySelector(`.${ie.trigger}`));
                s && (e.restartLightbox = s);
                let a = e.getAttribute(Jt) === Zt.true;
                a && (e.restartIx = a);
                let c = A("loader", { instanceIndex: t });
                if ((c && e.addLoader(c), !e.itemsCount)) {
                    let l = A("itemsCount", { instanceIndex: t });
                    l && e.addItemsCount(l);
                }
                if (!e.visibleCount) {
                    let l = A("visibleCount", { instanceIndex: t });
                    l && de(">=", "1.6.1") && e.addVisibleCount(l);
                }
                if (!e.scrollAnchor) {
                    let l = A("scrollAnchor", { instanceIndex: t });
                    l && (e.scrollAnchor = l);
                }
                let m = e.getAttribute(Yt);
                return m === qt ? yield $e(e) : m === jt ? yield Te(e) : m === Qt ? yield Me(e) : yield ye(e), e;
            });
    var z = () =>
        p(void 0, null, function* () {
            var o, n;
            let e = yield R();
            if (!e) return [];
            let t = e.createCMSListInstances([U("element", "list", { operator: "prefixed" })]);
            return yield Promise.all(t.map(Ie)), (n = (o = window.fsAttributes[L]).resolve) == null || n.call(o, t), t;
        });
    me();
    R();
    M();
    var Re, Oe;
    (Re = window.fsAttributes)[(Oe = L)] || (Re[Oe] = {});
    var { preventsLoad: eo } = ae(),
        De = window.fsAttributes[L];
    De.version = le;
    eo ? (De.init = z) : (window.Webflow || (window.Webflow = []), window.Webflow.push(z));
};
