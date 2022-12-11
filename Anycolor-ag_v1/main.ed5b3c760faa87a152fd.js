/*! For license information please see main.ed5b3c760faa87a152fd.js.LICENSE.txt */ ! function () {
    "use strict";
    var t, e, r, n = {
        825: function (t, e, r) {
            r(5837), r(6992), r(1539), r(8674), r(8783), r(3948);
            var n = r(5569),
                o = r(6806);
            globalThis, o.GameAnalytics.setEnabledInfoLog(!1), o.GameAnalytics.setEnabledVerboseLog(!1), o.GameAnalytics.configureBuild("1.0.0"), o.GameAnalytics.initialize("9c0922f87c577fc30730a13fbbf2ac29", "dab62137acc07872ec30f9178cddb80fa2f50967"), o.GameAnalytics.addDesignEvent("View:Loading"), (0, n.JC)((0, n.zi)(), Promise.all([r.e(532), r.e(592), r.e(606), r.e(124), r.e(684)]).then(r.bind(r, 7715)), Promise.all([r.e(532), r.e(592), r.e(124)]).then(r.bind(r, 7117)))
        },
        5569: function (t, e, r) {
            r.d(e, {
                JC: function () {
                    return w
                },
                lA: function () {
                    return g
                },
                zi: function () {
                    return x
                }
            }), r(6992), r(1539), r(8674), r(8783), r(3948), r(1249), r(9070), r(1703), r(2526), r(1817), r(2165), r(2443), r(9341), r(3706), r(2703), r(489), r(4747), r(8304), r(7042), r(1038), r(4916), r(7601);
            var n = r(8844),
                o = r(5882),
                i = r(4390),
                a = r(1686),
                u = r(7823);

            function c(t) {
                return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, c(t)
            }

            function s(t, e) {
                return function (t) {
                    if (Array.isArray(t)) return t
                }(t) || function (t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (r = r.call(t); !(a = (n = r.next()).done) && (i.push(n.value), !e || i.length !== e); a = !0);
                        } catch (t) {
                            u = !0, o = t
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(t, e) || f(t, e) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function l(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = f(t)) || e && t && "number" == typeof t.length) {
                        r && (t = r);
                        var n = 0,
                            o = function () { };
                        return {
                            s: o,
                            n: function () {
                                return n >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[n++]
                                }
                            },
                            e: function (t) {
                                throw t
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, a = !0,
                    u = !1;
                return {
                    s: function () {
                        r = r.call(t)
                    },
                    n: function () {
                        var t = r.next();
                        return a = t.done, t
                    },
                    e: function (t) {
                        u = !0, i = t
                    },
                    f: function () {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (u) throw i
                        }
                    }
                }
            }

            function f(t, e) {
                if (t) {
                    if ("string" == typeof t) return h(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? h(t, e) : void 0
                }
            }

            function h(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function p() {
                p = function () {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

                function u(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    u({}, "")
                } catch (t) {
                    u = function (t, e, r) {
                        return t[e] = r
                    }
                }

                function s(t, e, r, n) {
                    var o = e && e.prototype instanceof h ? e : h,
                        i = Object.create(o.prototype),
                        a = new E(n || []);
                    return i._invoke = function (t, e, r) {
                        var n = "suspendedStart";
                        return function (o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return {
                                    value: void 0,
                                    done: !0
                                }
                            }
                            for (r.method = o, r.arg = i; ;) {
                                var a = r.delegate;
                                if (a) {
                                    var u = k(a, r);
                                    if (u) {
                                        if (u === f) continue;
                                        return u
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = l(t, e, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === f) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(t, r, a), i
                }

                function l(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = s;
                var f = {};

                function h() { }

                function d() { }

                function y() { }
                var v = {};
                u(v, o, (function () {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    g = m && m(m(O([])));
                g && g !== e && r.call(g, o) && (v = g);
                var w = y.prototype = h.prototype = Object.create(v);

                function b(t) {
                    ["next", "throw", "return"].forEach((function (e) {
                        u(t, e, (function (t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function x(t, e) {
                    function n(o, i, a, u) {
                        var s = l(t[o], t, i);
                        if ("throw" !== s.type) {
                            var f = s.arg,
                                h = f.value;
                            return h && "object" == c(h) && r.call(h, "__await") ? e.resolve(h.__await).then((function (t) {
                                n("next", t, a, u)
                            }), (function (t) {
                                n("throw", t, a, u)
                            })) : e.resolve(h).then((function (t) {
                                f.value = t, a(f)
                            }), (function (t) {
                                return n("throw", t, a, u)
                            }))
                        }
                        u(s.arg)
                    }
                    var o;
                    this._invoke = function (t, r) {
                        function i() {
                            return new e((function (e, o) {
                                n(t, r, e, o)
                            }))
                        }
                        return o = o ? o.then(i, i) : i()
                    }
                }

                function k(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method)) return f;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return f
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, f;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
                }

                function L(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function S(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function E(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(L, this), this.reset(!0)
                }

                function O(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                i = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return i.next = i
                        }
                    }
                    return {
                        next: P
                    }
                }

                function P() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return d.prototype = y, u(w, "constructor", y), u(y, "constructor", d), d.displayName = u(y, a, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, u(t, a, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function (t) {
                    return {
                        __await: t
                    }
                }, b(x.prototype), u(x.prototype, i, (function () {
                    return this
                })), t.AsyncIterator = x, t.async = function (e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new x(s(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function (t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(w), u(w, a, "Generator"), u(w, o, (function () {
                    return this
                })), u(w, "toString", (function () {
                    return "[object Generator]"
                })), t.keys = function (t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = O, E.prototype = {
                    constructor: E,
                    reset: function (t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function (t) {
                        if (this.done) throw t;
                        var e = this;

                        function n(r, n) {
                            return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var u = r.call(i, "catchLoc"),
                                    c = r.call(i, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (u) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function (t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a)
                    },
                    complete: function (t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
                    },
                    finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), S(r), f
                        }
                    },
                    catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    S(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function (t, e, r) {
                        return this.delegate = {
                            iterator: O(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), f
                    }
                }, t
            }

            function d(t, e, r, n, o, i, a) {
                try {
                    var u = t[i](a),
                        c = u.value
                } catch (t) {
                    return void r(t)
                }
                u.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function y(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise((function (n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            d(i, n, o, a, u, "next", t)
                        }

                        function u(t) {
                            d(i, n, o, a, u, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function v(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var m = new i.Y(n.Z.setLoadingProgress),
                g = function () {
                    function t() {
                        var e, r;
                        ! function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), r = [], (e = "subSystems") in this ? Object.defineProperty(this, e, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : this[e] = r
                    }
                    var e, r, n;
                    return e = t, r = [{
                        key: "initGame",
                        value: (n = y(p().mark((function t() {
                            return p().wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return u.tT.add(this.update, u._C.NORMAL - 1, this), t.next = 3, Promise.all(this.subSystems.map((function (t) {
                                            var e;
                                            return null === (e = t.setup) || void 0 === e ? void 0 : e.call(t)
                                        })));
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function () {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "update",
                        value: function (t) {
                            var e, r = l(this.subSystems);
                            try {
                                for (r.s(); !(e = r.n()).done;) {
                                    var n, o = e.value;
                                    null === (n = o.update) || void 0 === n || n.call(o)
                                }
                            } catch (t) {
                                r.e(t)
                            } finally {
                                r.f()
                            } (0, a.KO)(t)
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            (0, a.mW)();
                            var t, e = l(this.subSystems);
                            try {
                                for (e.s(); !(t = e.n()).done;) {
                                    var r, n = t.value;
                                    null === (r = n.destroy) || void 0 === r || r.call(n)
                                }
                            } catch (t) {
                                e.e(t)
                            } finally {
                                e.f()
                            }
                        }
                    }], r && v(e.prototype, r), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }();

            function w(t, e, r) {
                return b.apply(this, arguments)
            }

            function b() {
                return (b = y(p().mark((function t(e, r, i) {
                    var a, u, c, l, f;
                    return p().wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return t.t0 = Promise, t.t1 = r, t.t2 = i, t.t3 = n.Z, t.next = 6, e;
                            case 6:
                                return t.t4 = t.sent, t.t5 = t.t3.initializeAsync.call(t.t3, t.t4), t.t6 = [t.t1, t.t2, t.t5], t.next = 11, t.t0.all.call(t.t0, t.t6);
                            case 11:
                                return a = t.sent, u = s(a, 2), c = u[0].default, l = u[1].default, t.next = 17, m.load(l);
                            case 17:
                                return t.next = 19, n.Z.startPlatform();
                            case 19:
                                return t.next = 21, o.Z.startPlatforms();
                            case 21:
                                return f = new c, t.next = 24, f.initGame();
                            case 24:
                                return n.Z.setupComplete(), t.abrupt("return", f);
                            case 26:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function x() {
                return new Promise((function (t) {
                    "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", (function () {
                        return t(document.body)
                    }), {
                        once: !0,
                        passive: !0
                    }) : t(document.body)
                }))
            }
        },
        4390: function (t, e, r) {
            function n(t) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, n(t)
            }

            function o() {
                o = function () {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    i = "function" == typeof Symbol ? Symbol : {},
                    a = i.iterator || "@@iterator",
                    u = i.asyncIterator || "@@asyncIterator",
                    c = i.toStringTag || "@@toStringTag";

                function s(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    s({}, "")
                } catch (t) {
                    s = function (t, e, r) {
                        return t[e] = r
                    }
                }

                function l(t, e, r, n) {
                    var o = e && e.prototype instanceof p ? e : p,
                        i = Object.create(o.prototype),
                        a = new E(n || []);
                    return i._invoke = function (t, e, r) {
                        var n = "suspendedStart";
                        return function (o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return {
                                    value: void 0,
                                    done: !0
                                }
                            }
                            for (r.method = o, r.arg = i; ;) {
                                var a = r.delegate;
                                if (a) {
                                    var u = k(a, r);
                                    if (u) {
                                        if (u === h) continue;
                                        return u
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = f(t, e, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === h) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(t, r, a), i
                }

                function f(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = l;
                var h = {};

                function p() { }

                function d() { }

                function y() { }
                var v = {};
                s(v, a, (function () {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    g = m && m(m(O([])));
                g && g !== e && r.call(g, a) && (v = g);
                var w = y.prototype = p.prototype = Object.create(v);

                function b(t) {
                    ["next", "throw", "return"].forEach((function (e) {
                        s(t, e, (function (t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function x(t, e) {
                    function o(i, a, u, c) {
                        var s = f(t[i], t, a);
                        if ("throw" !== s.type) {
                            var l = s.arg,
                                h = l.value;
                            return h && "object" == n(h) && r.call(h, "__await") ? e.resolve(h.__await).then((function (t) {
                                o("next", t, u, c)
                            }), (function (t) {
                                o("throw", t, u, c)
                            })) : e.resolve(h).then((function (t) {
                                l.value = t, u(l)
                            }), (function (t) {
                                return o("throw", t, u, c)
                            }))
                        }
                        c(s.arg)
                    }
                    var i;
                    this._invoke = function (t, r) {
                        function n() {
                            return new e((function (e, n) {
                                o(t, r, e, n)
                            }))
                        }
                        return i = i ? i.then(n, n) : n()
                    }
                }

                function k(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method)) return h;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return h
                    }
                    var n = f(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, h;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, h) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, h)
                }

                function L(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function S(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function E(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(L, this), this.reset(!0)
                }

                function O(t) {
                    if (t) {
                        var e = t[a];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                o = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: P
                    }
                }

                function P() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return d.prototype = y, s(w, "constructor", y), s(y, "constructor", d), d.displayName = s(y, c, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, s(t, c, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function (t) {
                    return {
                        __await: t
                    }
                }, b(x.prototype), s(x.prototype, u, (function () {
                    return this
                })), t.AsyncIterator = x, t.async = function (e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new x(l(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function (t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(w), s(w, c, "Generator"), s(w, a, (function () {
                    return this
                })), s(w, "toString", (function () {
                    return "[object Generator]"
                })), t.keys = function (t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = O, E.prototype = {
                    constructor: E,
                    reset: function (t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function (t) {
                        if (this.done) throw t;
                        var e = this;

                        function n(r, n) {
                            return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var u = r.call(i, "catchLoc"),
                                    c = r.call(i, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (u) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function (t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, h) : this.complete(a)
                    },
                    complete: function (t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), h
                    },
                    finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), S(r), h
                        }
                    },
                    catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    S(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function (t, e, r) {
                        return this.delegate = {
                            iterator: O(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, t
            }

            function i(t, e, r, n, o, i, a) {
                try {
                    var u = t[i](a),
                        c = u.value
                } catch (t) {
                    return void r(t)
                }
                u.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function a(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise((function (n, o) {
                        var a = t.apply(e, r);

                        function u(t) {
                            i(a, n, o, u, c, "next", t)
                        }

                        function c(t) {
                            i(a, n, o, u, c, "throw", t)
                        }
                        u(void 0)
                    }))
                }
            }

            function u(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function c(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            r.d(e, {
                Y: function () {
                    return s
                }
            }), r(6992), r(1539), r(8674), r(8783), r(3948), r(1249), r(9070), r(1703), r(2526), r(1817), r(2165), r(2443), r(9341), r(3706), r(2703), r(489), r(4747), r(8304), r(7042);
            var s = function () {
                function t(e) {
                    ! function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), c(this, "progressListener", void 0), c(this, "loadingProgress", 1), c(this, "allAssetsToLoad", 1), this.progressListener = e
                }
                var e, r, n;
                return e = t, r = [{
                    key: "advanceProgress",
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                        this.loadingProgress += t, this.showProgress()
                    }
                }, {
                    key: "increaseAssetCount",
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                        this.allAssetsToLoad += t, this.showProgress()
                    }
                }, {
                    key: "showProgress",
                    value: function () {
                        this.progressListener(this.loadingProgress / this.allAssetsToLoad)
                    }
                }, {
                    key: "load",
                    value: (n = a(o().mark((function t(e) {
                        var r = this;
                        return o().wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return this.allAssetsToLoad += e.length, this.showProgress(), t.next = 4, Promise.all(e.map(function () {
                                        var t = a(o().mark((function t(e) {
                                            return o().wrap((function (t) {
                                                for (; ;) switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.next = 2, e(r);
                                                    case 2:
                                                        r.advanceProgress();
                                                    case 3:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }), t)
                                        })));
                                        return function (e) {
                                            return t.apply(this, arguments)
                                        }
                                    }()));
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function (t) {
                        return n.apply(this, arguments)
                    })
                }], r && u(e.prototype, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }()
        },
        1686: function (t, e, r) {
            function n(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            r.d(e, {
                KO: function () {
                    return c
                },
                _l: function () {
                    return a
                },
                mW: function () {
                    return u
                }
            }), r(7941), r(2479), r(1539), r(8674), r(2526), r(1817), r(2165), r(6992), r(8783), r(3948), r(1038), r(7042), r(4916), r(7601), r(1703), r(2443), r(9341), r(3706), r(2703), r(9070), r(489), r(4747), r(8304);
            var o = 1,
                i = {};

            function a(t, e) {
                for (var r = o++, n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), u = 2; u < n; u++) a[u - 2] = arguments[u];
                return i[r] = {
                    id: r,
                    func: t,
                    delayMS: e,
                    params: a,
                    intervalMS: e
                }, r
            }

            function u() {
                for (var t = 0, e = Object.keys(i); t < e.length; t++) {
                    var r = e[t];
                    i[r].delayMS = Infinity, delete i[r]
                }
            }

            function c(t) {
                for (var e = 0, r = Object.values(i); e < r.length; e++) {
                    var o = r[e];
                    o.delayMS -= t, o.delayMS <= 0 && (void 0 === o.intervalMS ? delete i[o.id] : o.delayMS += o.intervalMS, o.func.apply(o, function (t) {
                        if (Array.isArray(t)) return n(t)
                    }(a = o.params) || function (t) {
                        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                    }(a) || function (t, e) {
                        if (t) {
                            if ("string" == typeof t) return n(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(t, e) : void 0
                        }
                    }(a) || function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()))
                }
                var a
            }
        },
        7823: function (t, e, r) {
            var n;

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function a(t, e, r) {
                return e && i(t.prototype, e), r && i(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function u(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            r.d(e, {
                _C: function () {
                    return n
                },
                tT: function () {
                    return f
                },
                u9: function () {
                    return l
                }
            }), r(4916), r(4723), r(1703), r(9070),
                function (t) {
                    t[t.HIGH = 100] = "HIGH", t[t.NORMAL = 0] = "NORMAL", t[t.LOW = -100] = "LOW"
                }(n || (n = {}));
            var c = function () {
                function t(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    o(this, t), u(this, "callback", void 0), u(this, "priority", void 0), u(this, "context", void 0), u(this, "once", void 0), u(this, "next", void 0), u(this, "previous", void 0), u(this, "destroyed", !1), this.callback = e, this.priority = r, this.context = n, this.once = i
                }
                return a(t, [{
                    key: "match",
                    value: function (t, e) {
                        return this.callback === t && this.context === e
                    }
                }, {
                    key: "emit",
                    value: function (t) {
                        var e, r;
                        this.context ? null === (e = this.callback) || void 0 === e || e.call(this.context, t) : null === (r = this.callback) || void 0 === r || r.call(this, t);
                        var n = this.next;
                        return this.once && this.destroy(!0), this.destroyed && (this.next = void 0), n
                    }
                }, {
                    key: "link",
                    value: function (t) {
                        this.previous = t, void 0 !== t.next && (t.next.previous = this), this.next = t.next, t.next = this
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this.destroyed = !0, this.callback = void 0, this.context = void 0, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
                        var e = this.next;
                        return this.next = t ? void 0 : e, this.previous = void 0, e
                    }
                }]), t
            }(),
                s = function () {
                    function t() {
                        var e = this;
                        o(this, t), u(this, "elapsedMS", 0), u(this, "lastTime", -1), u(this, "gameTimeMs", 0), u(this, "deltaMS", 0), u(this, "speed", 1), u(this, "maxElapsedMS", 100), u(this, "autoStart", !1), u(this, "started", !1), u(this, "animationFrame", null), u(this, "head", new c(void 0, Infinity)), u(this, "handleAnimationFrame", (function (t) {
                            var r;
                            e.animationFrame = null, e.started && (e.animate(t), e.started && null == e.animationFrame && void 0 !== (null === (r = e.head) || void 0 === r ? void 0 : r.next) && (e.animationFrame = requestAnimationFrame(e.handleAnimationFrame)))
                        }))
                    }
                    return a(t, [{
                        key: "animate",
                        value: function (t) {
                            if (t > this.lastTime) {
                                var e = this.elapsedMS = t - this.lastTime;
                                e > this.maxElapsedMS && (e = this.maxElapsedMS), e *= this.speed, this.deltaMS = e, this.gameTimeMs += e;
                                for (var r = this.head, n = null == r ? void 0 : r.next; void 0 !== n;) n = n.emit(e);
                                void 0 === (null == r ? void 0 : r.next) && this.cancelAnimationFrameIfRequested()
                            } else this.deltaMS = this.elapsedMS = 0;
                            this.lastTime = t
                        }
                    }, {
                        key: "start",
                        value: function () {
                            this.started || (this.started = !0, this.requestAnimationFrameIfNotRequested())
                        }
                    }, {
                        key: "stop",
                        value: function () {
                            this.started && (this.started = !1, this.cancelAnimationFrameIfRequested())
                        }
                    }, {
                        key: "requestAnimationFrameIfNotRequested",
                        value: function () {
                            var t;
                            null === this.animationFrame && void 0 !== (null === (t = this.head) || void 0 === t ? void 0 : t.next) && (this.lastTime = performance.now(), this.animationFrame = requestAnimationFrame(this.handleAnimationFrame))
                        }
                    }, {
                        key: "cancelAnimationFrameIfRequested",
                        value: function () {
                            null !== this.animationFrame && (cancelAnimationFrame(this.animationFrame), this.animationFrame = null)
                        }
                    }, {
                        key: "checkAndStart",
                        value: function () {
                            this.started ? this.requestAnimationFrameIfNotRequested() : this.autoStart && this.start()
                        }
                    }, {
                        key: "add",
                        value: function (t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                r = arguments.length > 2 ? arguments[2] : void 0;
                            return this.addListener(new c(t, e, r))
                        }
                    }, {
                        key: "addOnce",
                        value: function (t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                r = arguments.length > 2 ? arguments[2] : void 0;
                            return this.addListener(new c(t, e, r, !0))
                        }
                    }, {
                        key: "remove",
                        value: function (t, e) {
                            for (var r, n, o = null === (r = this.head) || void 0 === r ? void 0 : r.next; void 0 !== o;) o = o.match(t, e) ? o.destroy() : o.next;
                            return void 0 === (null === (n = this.head) || void 0 === n ? void 0 : n.next) && this.cancelAnimationFrameIfRequested(), this
                        }
                    }, {
                        key: "addListener",
                        value: function (t) {
                            var e, r = null === (e = this.head) || void 0 === e ? void 0 : e.next,
                                n = this.head;
                            if (void 0 === n) throw new Error("Missing head.");
                            if (void 0 === r) t.link(n);
                            else {
                                for (; void 0 !== r;) {
                                    if (t.priority > r.priority) {
                                        t.link(n);
                                        break
                                    }
                                    n = r, r = r.next
                                }
                                void 0 === t.previous && t.link(n)
                            }
                            return this.checkAndStart(), this
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            var t, e;
                            this.stop();
                            for (var r = null === (t = this.head) || void 0 === t ? void 0 : t.next; void 0 !== r;) r = r.destroy(!0);
                            null === (e = this.head) || void 0 === e || e.destroy(), this.head = void 0
                        }
                    }]), t
                }(),
                l = new s;
            l.autoStart = !0;
            var f = new s;
            f.autoStart = !0
        },
        1431: function (t, e, r) {
            function n(t) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, n(t)
            }

            function o(t, e) {
                if (e && ("object" === n(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return i(t)
            }

            function i(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function a(t) {
                var e = "function" == typeof Map ? new Map : void 0;
                return a = function (t) {
                    if (null === t || (r = t, -1 === Function.toString.call(r).indexOf("[native code]"))) return t;
                    var r;
                    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== e) {
                        if (e.has(t)) return e.get(t);
                        e.set(t, n)
                    }

                    function n() {
                        return u(t, arguments, l(this).constructor)
                    }
                    return n.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: n,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), s(n, t)
                }, a(t)
            }

            function u(t, e, r) {
                return u = c() ? Reflect.construct.bind() : function (t, e, r) {
                    var n = [null];
                    n.push.apply(n, e);
                    var o = new (Function.bind.apply(t, n));
                    return r && s(o, r.prototype), o
                }, u.apply(null, arguments)
            }

            function c() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0
                } catch (t) {
                    return !1
                }
            }

            function s(t, e) {
                return s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                    return t.__proto__ = e, t
                }, s(t, e)
            }

            function l(t) {
                return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, l(t)
            }

            function f(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            r.d(e, {
                _: function () {
                    return p
                },
                j: function () {
                    return h
                }
            }), r(8304), r(1703), r(9070), r(489), r(2772), r(1539), r(9714), r(1299), r(2419), r(6992), r(1532), r(8783), r(3948), r(2526), r(1817), r(2165);
            var h = {
                TooFrequent: 0,
                NoFill: 1,
                Unknown: 2
            },
                p = function (t) {
                    ! function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e && s(t, e)
                    }(u, t);
                    var e, r, n, a = (e = u, r = c(), function () {
                        var t, n = l(e);
                        if (r) {
                            var i = l(this).constructor;
                            t = Reflect.construct(n, arguments, i)
                        } else t = n.apply(this, arguments);
                        return o(this, t)
                    });

                    function u(t, e) {
                        var r;
                        return function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, u), f(i(r = a.call(this, "Ad error ".concat(t))), "code", void 0), f(i(r), "extra", void 0), r.code = t, r.extra = e, Object.setPrototypeOf(i(r), u.prototype), r
                    }
                    return n = u, Object.defineProperty(n, "prototype", {
                        writable: !1
                    }), n
                }(a(Error))
        },
        8844: function (t, e, r) {
            r.d(e, {
                Z: function () {
                    return C
                }
            }), r(2222), r(1058), r(1249), r(5505), r(7714), r(2801), r(1174), r(2772), r(6699), r(1539), r(8674), r(7727), r(9070), r(8304), r(489), r(1299), r(2419), r(1703), r(4819), r(5003), r(2526), r(1817), r(2165), r(6992), r(8783), r(3948), r(2443), r(9341), r(3706), r(2703), r(4747), r(7042), r(1532);
            var n = r(4242),
                o = new Map,
                i = !1,
                a = new n.MZ,
                u = new n.MZ;

            function c() {
                i = !0
            }

            function s() {
                i = !1
            }
            window.addEventListener("keydown", (function (t) {
                o.set(t.key, !0), i || a.emit(t), t.stopPropagation()
            })), window.addEventListener("keyup", (function (t) {
                o.set(t.key, !1), i || u.emit(t), t.stopPropagation()
            }));
            var l = r(1431);

            function f(t) {
                return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, f(t)
            }

            function h() {
                h = function () {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

                function u(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    u({}, "")
                } catch (t) {
                    u = function (t, e, r) {
                        return t[e] = r
                    }
                }

                function c(t, e, r, n) {
                    var o = e && e.prototype instanceof p ? e : p,
                        i = Object.create(o.prototype),
                        a = new E(n || []);
                    return i._invoke = function (t, e, r) {
                        var n = "suspendedStart";
                        return function (o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return {
                                    value: void 0,
                                    done: !0
                                }
                            }
                            for (r.method = o, r.arg = i; ;) {
                                var a = r.delegate;
                                if (a) {
                                    var u = k(a, r);
                                    if (u) {
                                        if (u === l) continue;
                                        return u
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = s(t, e, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === l) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(t, r, a), i
                }

                function s(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = c;
                var l = {};

                function p() { }

                function d() { }

                function y() { }
                var v = {};
                u(v, o, (function () {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    g = m && m(m(O([])));
                g && g !== e && r.call(g, o) && (v = g);
                var w = y.prototype = p.prototype = Object.create(v);

                function b(t) {
                    ["next", "throw", "return"].forEach((function (e) {
                        u(t, e, (function (t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function x(t, e) {
                    function n(o, i, a, u) {
                        var c = s(t[o], t, i);
                        if ("throw" !== c.type) {
                            var l = c.arg,
                                h = l.value;
                            return h && "object" == f(h) && r.call(h, "__await") ? e.resolve(h.__await).then((function (t) {
                                n("next", t, a, u)
                            }), (function (t) {
                                n("throw", t, a, u)
                            })) : e.resolve(h).then((function (t) {
                                l.value = t, a(l)
                            }), (function (t) {
                                return n("throw", t, a, u)
                            }))
                        }
                        u(c.arg)
                    }
                    var o;
                    this._invoke = function (t, r) {
                        function i() {
                            return new e((function (e, o) {
                                n(t, r, e, o)
                            }))
                        }
                        return o = o ? o.then(i, i) : i()
                    }
                }

                function k(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method)) return l;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return l
                    }
                    var n = s(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, l;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
                }

                function L(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function S(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function E(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(L, this), this.reset(!0)
                }

                function O(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                i = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return i.next = i
                        }
                    }
                    return {
                        next: P
                    }
                }

                function P() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return d.prototype = y, u(w, "constructor", y), u(y, "constructor", d), d.displayName = u(y, a, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, u(t, a, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function (t) {
                    return {
                        __await: t
                    }
                }, b(x.prototype), u(x.prototype, i, (function () {
                    return this
                })), t.AsyncIterator = x, t.async = function (e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new x(c(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function (t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(w), u(w, a, "Generator"), u(w, o, (function () {
                    return this
                })), u(w, "toString", (function () {
                    return "[object Generator]"
                })), t.keys = function (t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = O, E.prototype = {
                    constructor: E,
                    reset: function (t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function (t) {
                        if (this.done) throw t;
                        var e = this;

                        function n(r, n) {
                            return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var u = r.call(i, "catchLoc"),
                                    c = r.call(i, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (u) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function (t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
                    },
                    complete: function (t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
                    },
                    finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), S(r), l
                        }
                    },
                    catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    S(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function (t, e, r) {
                        return this.delegate = {
                            iterator: O(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), l
                    }
                }, t
            }

            function p(t, e, r, n, o, i, a) {
                try {
                    var u = t[i](a),
                        c = u.value
                } catch (t) {
                    return void r(t)
                }
                u.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function d(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise((function (n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            p(i, n, o, a, u, "next", t)
                        }

                        function u(t) {
                            p(i, n, o, a, u, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function y(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = function (t, e) {
                        if (t) {
                            if ("string" == typeof t) return v(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? v(t, e) : void 0
                        }
                    }(t)) || e && t && "number" == typeof t.length) {
                        r && (t = r);
                        var n = 0,
                            o = function () { };
                        return {
                            s: o,
                            n: function () {
                                return n >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[n++]
                                }
                            },
                            e: function (t) {
                                throw t
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, a = !0,
                    u = !1;
                return {
                    s: function () {
                        r = r.call(t)
                    },
                    n: function () {
                        var t = r.next();
                        return a = t.done, t
                    },
                    e: function (t) {
                        u = !0, i = t
                    },
                    f: function () {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (u) throw i
                        }
                    }
                }
            }

            function v(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function m(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function g(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            r(8862), r(561), r(1038), r(4916), r(7601);
            var w = "stats_".concat("colorapp"),
                b = function () {
                    function t() {
                        var e = this;
                        ! function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), g(this, "targetElement", void 0), g(this, "gameDownloadURL", void 0), g(this, "resizeHandlers", []), g(this, "visibilityChangeHandlers", []), g(this, "muteChangeHandlers", []), g(this, "callAllResizeHandlers", (function () {
                            var t, r = y(e.resizeHandlers);
                            try {
                                for (r.s(); !(t = r.n()).done;)(0, t.value)()
                            } catch (t) {
                                r.e(t)
                            } finally {
                                r.f()
                            }
                        })), g(this, "callAllVisibilityChangeHandlers", (function () {
                            var t, r = y(e.visibilityChangeHandlers);
                            try {
                                for (r.s(); !(t = r.n()).done;)(0, t.value)()
                            } catch (t) {
                                r.e(t)
                            } finally {
                                r.f()
                            }
                        })), g(this, "callAllMuteChangeHandlers", (function () {
                            var t, r = y(e.muteChangeHandlers);
                            try {
                                for (r.s(); !(t = r.n()).done;)(0, t.value)()
                            } catch (t) {
                                r.e(t)
                            } finally {
                                r.f()
                            }
                        }))
                    }
                    var e, r, n, o, i, a, u, c, s;
                    return e = t, r = [{
                        key: "getScreenSize",
                        value: function () {
                            return {
                                width: window.innerWidth,
                                height: window.innerHeight
                            }
                        }
                    }, {
                        key: "setLoadingProgress",
                        value: function (t) { }
                    }, {
                        key: "setGameDownloadURL",
                        value: function (t) {
                            this.gameDownloadURL = t
                        }
                    }, {
                        key: "initializeAsync",
                        value: (s = d(h().mark((function t(e) {
                            return h().wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        this.targetElement = e, window.addEventListener("resize", this.callAllResizeHandlers, {
                                            passive: !0
                                        }), document.addEventListener("visibilitychange", this.callAllVisibilityChangeHandlers, {
                                            passive: !0
                                        });
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function (t) {
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "startPlatform",
                        value: (c = d(h().mark((function t() {
                            return h().wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", Promise.resolve());
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), function () {
                            return c.apply(this, arguments)
                        })
                    }, {
                        key: "setupComplete",
                        value: function () {
                            var t, e = document.getElementById("loadingIndicator");
                            null == e || null === (t = e.parentElement) || void 0 === t || t.removeChild(e)
                        }
                    }, {
                        key: "loadState",
                        value: (u = d(h().mark((function t() {
                            var e;
                            return h().wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return e = localStorage.getItem(w), t.abrupt("return", e ? JSON.parse(e) : {});
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), function () {
                            return u.apply(this, arguments)
                        })
                    }, {
                        key: "saveState",
                        value: (a = d(h().mark((function t(e) {
                            return h().wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        localStorage.setItem(w, JSON.stringify(e));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), function (t) {
                            return a.apply(this, arguments)
                        })
                    }, {
                        key: "getRewardedAd",
                        value: (i = d(h().mark((function t() {
                            return h().wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", Promise.resolve({
                                            mediator: "dummy",
                                            show: function () {
                                                return Promise.resolve()
                                            }
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), function () {
                            return i.apply(this, arguments)
                        })
                    }, {
                        key: "getInterstitialAd",
                        value: (o = d(h().mark((function t() {
                            return h().wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", Promise.resolve({
                                            mediator: "dummy",
                                            show: function () {
                                                return Promise.resolve()
                                            }
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), function () {
                            return o.apply(this, arguments)
                        })
                    }, {
                        key: "setScore",
                        value: (n = d(h().mark((function t(e, r) {
                            return h().wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", Promise.resolve());
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), function (t, e) {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "getLeaderboard",
                        value: function (t) {
                            return Promise.resolve([])
                        }
                    }, {
                        key: "openUrl",
                        value: function (t) {
                            return null !== window.open(t)
                        }
                    }, {
                        key: "openStoreUrl",
                        value: function () {
                            return null !== window.open(this.gameDownloadURL)
                        }
                    }, {
                        key: "gameplayStart",
                        value: function () { }
                    }, {
                        key: "gameplayStop",
                        value: function () { }
                    }, {
                        key: "registerInteraction",
                        value: function () { }
                    }, {
                        key: "waitForClose",
                        value: function () { }
                    }, {
                        key: "isMuted",
                        value: function () {
                            return !1
                        }
                    }, {
                        key: "isVisible",
                        value: function () {
                            return "visible" === document.visibilityState
                        }
                    }, {
                        key: "addResizeHandler",
                        value: function (t) {
                            this.resizeHandlers.push(t)
                        }
                    }, {
                        key: "removeResizeHandler",
                        value: function (t) {
                            var e = this.resizeHandlers.indexOf(t);
                            e > -1 && this.resizeHandlers.splice(e, 1)
                        }
                    }, {
                        key: "addVisibleHandler",
                        value: function (t) {
                            this.visibilityChangeHandlers.push(t)
                        }
                    }, {
                        key: "removeVisibleHandler",
                        value: function (t) {
                            var e = this.visibilityChangeHandlers.indexOf(t);
                            e > -1 && this.visibilityChangeHandlers.splice(e, 1)
                        }
                    }, {
                        key: "addMuteHandler",
                        value: function (t) {
                            this.muteChangeHandlers.push(t)
                        }
                    }, {
                        key: "removeMuteHandler",
                        value: function (t) {
                            var e = this.muteChangeHandlers.indexOf(t);
                            e > -1 && this.muteChangeHandlers.splice(e, 1)
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            window.removeEventListener("resize", this.callAllResizeHandlers), document.removeEventListener("visibilitychange", this.callAllVisibilityChangeHandlers)
                        }
                    }], r && m(e.prototype, r), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }();

            function x(t) {
                return x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, x(t)
            }

            function k() {
                k = function () {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

                function u(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    u({}, "")
                } catch (t) {
                    u = function (t, e, r) {
                        return t[e] = r
                    }
                }

                function c(t, e, r, n) {
                    var o = e && e.prototype instanceof f ? e : f,
                        i = Object.create(o.prototype),
                        a = new E(n || []);
                    return i._invoke = function (t, e, r) {
                        var n = "suspendedStart";
                        return function (o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return {
                                    value: void 0,
                                    done: !0
                                }
                            }
                            for (r.method = o, r.arg = i; ;) {
                                var a = r.delegate;
                                if (a) {
                                    var u = b(a, r);
                                    if (u) {
                                        if (u === l) continue;
                                        return u
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = s(t, e, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === l) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(t, r, a), i
                }

                function s(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = c;
                var l = {};

                function f() { }

                function h() { }

                function p() { }
                var d = {};
                u(d, o, (function () {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    v = y && y(y(O([])));
                v && v !== e && r.call(v, o) && (d = v);
                var m = p.prototype = f.prototype = Object.create(d);

                function g(t) {
                    ["next", "throw", "return"].forEach((function (e) {
                        u(t, e, (function (t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function w(t, e) {
                    function n(o, i, a, u) {
                        var c = s(t[o], t, i);
                        if ("throw" !== c.type) {
                            var l = c.arg,
                                f = l.value;
                            return f && "object" == x(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function (t) {
                                n("next", t, a, u)
                            }), (function (t) {
                                n("throw", t, a, u)
                            })) : e.resolve(f).then((function (t) {
                                l.value = t, a(l)
                            }), (function (t) {
                                return n("throw", t, a, u)
                            }))
                        }
                        u(c.arg)
                    }
                    var o;
                    this._invoke = function (t, r) {
                        function i() {
                            return new e((function (e, o) {
                                n(t, r, e, o)
                            }))
                        }
                        return o = o ? o.then(i, i) : i()
                    }
                }

                function b(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, b(t, e), "throw" === e.method)) return l;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return l
                    }
                    var n = s(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, l;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
                }

                function L(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function S(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function E(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(L, this), this.reset(!0)
                }

                function O(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                i = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return i.next = i
                        }
                    }
                    return {
                        next: P
                    }
                }

                function P() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return h.prototype = p, u(m, "constructor", p), u(p, "constructor", h), h.displayName = u(p, a, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, u(t, a, "GeneratorFunction")), t.prototype = Object.create(m), t
                }, t.awrap = function (t) {
                    return {
                        __await: t
                    }
                }, g(w.prototype), u(w.prototype, i, (function () {
                    return this
                })), t.AsyncIterator = w, t.async = function (e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new w(c(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function (t) {
                        return t.done ? t.value : a.next()
                    }))
                }, g(m), u(m, a, "Generator"), u(m, o, (function () {
                    return this
                })), u(m, "toString", (function () {
                    return "[object Generator]"
                })), t.keys = function (t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = O, E.prototype = {
                    constructor: E,
                    reset: function (t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function (t) {
                        if (this.done) throw t;
                        var e = this;

                        function n(r, n) {
                            return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var u = r.call(i, "catchLoc"),
                                    c = r.call(i, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (u) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function (t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
                    },
                    complete: function (t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
                    },
                    finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), S(r), l
                        }
                    },
                    catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    S(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function (t, e, r) {
                        return this.delegate = {
                            iterator: O(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), l
                    }
                }, t
            }

            function L(t, e, r, n, o, i, a) {
                try {
                    var u = t[i](a),
                        c = u.value
                } catch (t) {
                    return void r(t)
                }
                u.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function S(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise((function (n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            L(i, n, o, a, u, "next", t)
                        }

                        function u(t) {
                            L(i, n, o, a, u, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function E(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function O(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function P() {
                return P = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (t, e, r) {
                    var n = j(t, e);
                    if (n) {
                        var o = Object.getOwnPropertyDescriptor(n, e);
                        return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value
                    }
                }, P.apply(this, arguments)
            }

            function j(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = I(t)););
                return t
            }

            function _(t, e) {
                return _ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                    return t.__proto__ = e, t
                }, _(t, e)
            }

            function A(t, e) {
                if (e && ("object" === x(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return T(t)
            }

            function T(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function I(t) {
                return I = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, I(t)
            }

            function N(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            new b;
            var F = "poki",
                G = function (t) {
                    ! function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e && _(t, e)
                    }(p, t);
                    var e, r, n, o, i, a, u, f, h = (u = p, f = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function () {
                        var t, e = I(u);
                        if (f) {
                            var r = I(this).constructor;
                            t = Reflect.construct(e, arguments, r)
                        } else t = e.apply(this, arguments);
                        return A(this, t)
                    });

                    function p() {
                        var t;
                        E(this, p);
                        for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                        return N(T(t = h.call.apply(h, [this].concat(r))), "gameplayState", 1), N(T(t), "adsBlocked", !1), N(T(t), "_muted", !1), t
                    }
                    return e = p, r = [{
                        key: "setLoadingProgress",
                        value: function (t) {

                        }
                    }, {
                        key: "initializeAsync",
                        value: (a = S(k().mark((function t(e) {
                            return k().wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, P(I(p.prototype), "initializeAsync", this).call(this, e);
                                    case 2:
                                        return t.prev = 2, t.next = 5, window.adsGameCon.startup(AdsName);
                                    case 5:
                                        t.next = 11;
                                        break;
                                    case 7:
                                        t.prev = 7, t.t0 = t.catch(2), this.adsBlocked = !0;
                                    case 11:
                                        //this.sitelock();
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [2, 7]
                            ])
                        }))), function (t) {
                            return a.apply(this, arguments)
                        })
                    }, {
                        key: "sitelock",
                        value: function () {
                            var t, e, r = ["LnBva2kuY29t", "bG9jYWxob3N0", "139KObtWR", "6505XySddN", "1187125jopCbV", "913662FnvCIe", "740825sNyBkZ", "459327dmigPF", "335606FqHNeg", "770186hYUBAW", "some", "top", "aHR0cHM6Ly9wb2tpLmNvbS9zaXRlbG9jaw==", "location", "length", "href"],
                                n = function (t, e) {
                                    return r[t -= 340]
                                };
                            (function (t, e) {
                                for (var r = n; ;) try {
                                    if (725092 === parseInt(r(349)) + parseInt(r(348)) + -parseInt(r(350)) + parseInt(r(345)) * parseInt(r(344)) + -parseInt(r(346)) + -parseInt(r(351)) + parseInt(r(347))) break;
                                    t.push(t.shift())
                                } catch (e) {
                                    t.push(t.shift())
                                }
                            })(r), t = n, e = window.location.hostname, [t(343), t(342), "LnBva2ktZ2RuLmNvbQ=="].map((function (t) {
                                return atob(t)
                            }))[t(352)]((function (t) {
                                return r = e, i = n, "." === (o = t).charAt(0) ? -1 !== r.indexOf(o, r[i(340)] - o[i(340)]) : o === r;
                                var r, o, i
                            })) || (window[t(355)][t(341)] = atob(t(354)), window[t(353)][t(355)] !== window[t(355)] && (window[t(353)][t(355)] = window[t(355)]))
                        }
                    }, {
                        key: "startPlatform",
                        value: (i = S(k().mark((function t() {
                            var e = this;
                            return k().wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        window.addEventListener("keydown", (function (t) {
                                            ["ArrowDown", "ArrowUp", " "].includes(t.key) && t.preventDefault()
                                        })), window.addEventListener("wheel", (function (t) {
                                            return t.preventDefault()
                                        }), {
                                            passive: !1
                                        }), window.adsGameCon.recordOpen();
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), function () {
                            return i.apply(this, arguments)
                        })
                    }, {
                        key: "setupComplete",
                        value: function () {
                            var t = this;
                            P(I(p.prototype), "setupComplete", this).call(this), this.adsBlocked ? this.gameplayStart() : (this.muted = !0,
                                window.adsGameCon.showAd({
                                    beforeShowAd: () => {

                                    },
                                    afterShowAd: () => {
                                        t.muted = !1, t.gameplayStart()
                                    }
                                }))
                        }
                    }, {
                        key: "getRewardedAd",
                        value: (o = S(k().mark((function t() {
                            var e = this;
                            return k().wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", {
                                            mediator: F,
                                            show: function () {
                                                var t = S(k().mark((function t() {
                                                    var r;
                                                    return k().wrap((function (t) {
                                                        for (; ;) switch (t.prev = t.next) {
                                                            case 0:
                                                                if (e.muted = !0, e.gameplayStop(), c(), !e.adsBlocked) {
                                                                    t.next = 7;
                                                                    break
                                                                }
                                                                t.t0 = !1, t.next = 10;
                                                                break;
                                                            case 7:
                                                                return t.next = 9,
                                                                window.adsGameCon.showAdOfEvent({
                                                                                onRewardBeforeBreak: () => {
                                                                                },
                                                                                onRewardAfterBreak: () => {
                                                                                },
                                                                                onRewardComplete: () => {
                                                                                },
                                                                                onRewardDismissed: () => {
                                                                                }
                                                                            });
                                                            case 9:
                                                                t.t0 = t.sent;
                                                            case 10:
                                                                if (r = t.t0, s(), e.muted = !1, e.gameplayStart(), r) {
                                                                    t.next = 16;
                                                                    break
                                                                }
                                                                throw new l._(l.j.Unknown, "Rewarded Ad not displayed.");
                                                            case 16:
                                                            case "end":
                                                                return t.stop()
                                                        }
                                                    }), t)
                                                })));
                                                return function () {
                                                    return t.apply(this, arguments)
                                                }
                                            }()
                                        });
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), function () {
                            return o.apply(this, arguments)
                        })
                    }, {
                        key: "getInterstitialAd",
                        value: (n = S(k().mark((function t() {
                            var e = this;
                            return k().wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", {
                                            mediator: F,
                                            show: function () {
                                                var t = S(k().mark((function t() {
                                                    return k().wrap((function (t) {
                                                        for (; ;) switch (t.prev = t.next) {
                                                            case 0:
                                                                if (e.muted = !0, e.gameplayStop(), c(), e.adsBlocked) {
                                                                    t.next = 6;
                                                                    break
                                                                }
                                                                return t.next = 6, window.adsGameCon.showAd({
                                                                    beforeShowAd: () => {
                                                                      
                                                                    },
                                                                    afterShowAd: () => {
                                                                       
                                                                    }
                                                                });
                                                            case 6:
                                                                s(), e.muted = !1, e.gameplayStart();
                                                            case 9:
                                                            case "end":
                                                                return t.stop()
                                                        }
                                                    }), t)
                                                })));
                                                return function () {
                                                    return t.apply(this, arguments)
                                                }
                                            }()
                                        });
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), function () {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "registerInteraction",
                        value: function () { }
                    }, {
                        key: "gameplayStart",
                        value: function () {
                            --this.gameplayState
                        }
                    }, {
                        key: "gameplayStop",
                        value: function () {
                            ++this.gameplayState
                        }
                    }, {
                        key: "muted",
                        get: function () {
                            return this._muted
                        },
                        set: function (t) {
                            this._muted = t, this.callAllMuteChangeHandlers()
                        }
                    }, {
                        key: "isMuted",
                        value: function () {
                            return this.muted
                        }
                    }], r && O(e.prototype, r), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), p
                }(b),
                C = new G
        },
        5882: function (t, e, r) {
            function n(t) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, n(t)
            }

            function o(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = function (t, e) {
                        if (t) {
                            if ("string" == typeof t) return i(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? i(t, e) : void 0
                        }
                    }(t)) || e && t && "number" == typeof t.length) {
                        r && (t = r);
                        var n = 0,
                            o = function () { };
                        return {
                            s: o,
                            n: function () {
                                return n >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[n++]
                                }
                            },
                            e: function (t) {
                                throw t
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, u = !0,
                    c = !1;
                return {
                    s: function () {
                        r = r.call(t)
                    },
                    n: function () {
                        var t = r.next();
                        return u = t.done, t
                    },
                    e: function (t) {
                        c = !0, a = t
                    },
                    f: function () {
                        try {
                            u || null == r.return || r.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                }
            }

            function i(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function a() {
                a = function () {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    o = "function" == typeof Symbol ? Symbol : {},
                    i = o.iterator || "@@iterator",
                    u = o.asyncIterator || "@@asyncIterator",
                    c = o.toStringTag || "@@toStringTag";

                function s(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    s({}, "")
                } catch (t) {
                    s = function (t, e, r) {
                        return t[e] = r
                    }
                }

                function l(t, e, r, n) {
                    var o = e && e.prototype instanceof p ? e : p,
                        i = Object.create(o.prototype),
                        a = new E(n || []);
                    return i._invoke = function (t, e, r) {
                        var n = "suspendedStart";
                        return function (o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return {
                                    value: void 0,
                                    done: !0
                                }
                            }
                            for (r.method = o, r.arg = i; ;) {
                                var a = r.delegate;
                                if (a) {
                                    var u = k(a, r);
                                    if (u) {
                                        if (u === h) continue;
                                        return u
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = f(t, e, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === h) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(t, r, a), i
                }

                function f(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = l;
                var h = {};

                function p() { }

                function d() { }

                function y() { }
                var v = {};
                s(v, i, (function () {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    g = m && m(m(O([])));
                g && g !== e && r.call(g, i) && (v = g);
                var w = y.prototype = p.prototype = Object.create(v);

                function b(t) {
                    ["next", "throw", "return"].forEach((function (e) {
                        s(t, e, (function (t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function x(t, e) {
                    function o(i, a, u, c) {
                        var s = f(t[i], t, a);
                        if ("throw" !== s.type) {
                            var l = s.arg,
                                h = l.value;
                            return h && "object" == n(h) && r.call(h, "__await") ? e.resolve(h.__await).then((function (t) {
                                o("next", t, u, c)
                            }), (function (t) {
                                o("throw", t, u, c)
                            })) : e.resolve(h).then((function (t) {
                                l.value = t, u(l)
                            }), (function (t) {
                                return o("throw", t, u, c)
                            }))
                        }
                        c(s.arg)
                    }
                    var i;
                    this._invoke = function (t, r) {
                        function n() {
                            return new e((function (e, n) {
                                o(t, r, e, n)
                            }))
                        }
                        return i = i ? i.then(n, n) : n()
                    }
                }

                function k(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method)) return h;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return h
                    }
                    var n = f(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, h;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, h) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, h)
                }

                function L(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function S(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function E(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(L, this), this.reset(!0)
                }

                function O(t) {
                    if (t) {
                        var e = t[i];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                o = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: P
                    }
                }

                function P() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return d.prototype = y, s(w, "constructor", y), s(y, "constructor", d), d.displayName = s(y, c, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, s(t, c, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function (t) {
                    return {
                        __await: t
                    }
                }, b(x.prototype), s(x.prototype, u, (function () {
                    return this
                })), t.AsyncIterator = x, t.async = function (e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new x(l(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function (t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(w), s(w, c, "Generator"), s(w, i, (function () {
                    return this
                })), s(w, "toString", (function () {
                    return "[object Generator]"
                })), t.keys = function (t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = O, E.prototype = {
                    constructor: E,
                    reset: function (t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function (t) {
                        if (this.done) throw t;
                        var e = this;

                        function n(r, n) {
                            return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var u = r.call(i, "catchLoc"),
                                    c = r.call(i, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (u) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function (t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, h) : this.complete(a)
                    },
                    complete: function (t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), h
                    },
                    finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), S(r), h
                        }
                    },
                    catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    S(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function (t, e, r) {
                        return this.delegate = {
                            iterator: O(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, t
            }

            function u(t, e, r, n, o, i, a) {
                try {
                    var u = t[i](a),
                        c = u.value
                } catch (t) {
                    return void r(t)
                }
                u.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function c(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise((function (n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            u(i, n, o, a, c, "next", t)
                        }

                        function c(t) {
                            u(i, n, o, a, c, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function s(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            r(6992), r(1539), r(8674), r(8783), r(3948), r(1249), r(1703), r(9070), r(2526), r(1817), r(2165), r(2443), r(9341), r(3706), r(2703), r(489), r(4747), r(8304), r(7042), r(1038), r(4916), r(7601);
            var l = function () {
                function t() {
                    var e, r;
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    })(this, t), r = [], (e = "socialPlatforms") in this ? Object.defineProperty(this, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : this[e] = r
                }
                var e, r, n, i, u, l;
                return i = t, u = [{
                    key: "startPlatforms",
                    value: (n = c(a().mark((function t() {
                        return a().wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", Promise.all(this.socialPlatforms.map((function (t) {
                                        return t.startPlatform()
                                    }))));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function () {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "availableNetworks",
                    get: function () {
                        return this.socialPlatforms.map((function (t) {
                            return t.Id
                        }))
                    }
                }, {
                    key: "defaultNetwork",
                    get: function () {
                        return this.socialPlatforms.length ? this.socialPlatforms[0].Id : void 0
                    }
                }, {
                    key: "canShare",
                    value: (r = c(a().mark((function t(e) {
                        return a().wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.socialPlatforms.some((function (t) {
                                        return t.Id === e
                                    })));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function (t) {
                        return r.apply(this, arguments)
                    })
                }, {
                    key: "share",
                    value: (e = c(a().mark((function t(e, r, n) {
                        var i, u, c;
                        return a().wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    i = o(this.socialPlatforms), t.prev = 1, i.s();
                                case 3:
                                    if ((u = i.n()).done) {
                                        t.next = 14;
                                        break
                                    }
                                    if (c = u.value, t.t0 = c.Id === e, !t.t0) {
                                        t.next = 10;
                                        break
                                    }
                                    return t.next = 9, c.canShare();
                                case 9:
                                    t.t0 = t.sent;
                                case 10:
                                    if (!t.t0) {
                                        t.next = 12;
                                        break
                                    }
                                    return t.abrupt("return", c.share(r, n));
                                case 12:
                                    t.next = 3;
                                    break;
                                case 14:
                                    t.next = 19;
                                    break;
                                case 16:
                                    t.prev = 16, t.t1 = t.catch(1), i.e(t.t1);
                                case 19:
                                    return t.prev = 19, i.f(), t.finish(19);
                                case 22:
                                    return t.abrupt("return", {});
                                case 23:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this, [
                            [1, 16, 19, 22]
                        ])
                    }))), function (t, r, n) {
                        return e.apply(this, arguments)
                    })
                }], u && s(i.prototype, u), l && s(i, l), Object.defineProperty(i, "prototype", {
                    writable: !1
                }), t
            }();
            e.Z = new l
        }
    },
        o = {};

    function i(t) {
        var e = o[t];
        if (void 0 !== e) return e.exports;
        var r = o[t] = {
            id: t,
            loaded: !1,
            exports: {}
        };
        return n[t].call(r.exports, r, r.exports, i), r.loaded = !0, r.exports
    }
    i.m = n, t = [], i.O = function (e, r, n, o) {
        if (!r) {
            var a = Infinity;
            for (l = 0; l < t.length; l++) {
                r = t[l][0], n = t[l][1], o = t[l][2];
                for (var u = !0, c = 0; c < r.length; c++)(!1 & o || a >= o) && Object.keys(i.O).every((function (t) {
                    return i.O[t](r[c])
                })) ? r.splice(c--, 1) : (u = !1, o < a && (a = o));
                if (u) {
                    t.splice(l--, 1);
                    var s = n();
                    void 0 !== s && (e = s)
                }
            }
            return e
        }
        o = o || 0;
        for (var l = t.length; l > 0 && t[l - 1][2] > o; l--) t[l] = t[l - 1];
        t[l] = [r, n, o]
    }, i.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return i.d(e, {
            a: e
        }), e
    }, i.d = function (t, e) {
        for (var r in e) i.o(e, r) && !i.o(t, r) && Object.defineProperty(t, r, {
            enumerable: !0,
            get: e[r]
        })
    }, i.f = {}, i.e = function (t) {
        return Promise.all(Object.keys(i.f).reduce((function (e, r) {
            return i.f[r](t, e), e
        }), []))
    }, i.u = function (t) {
        return t + "." + {
            68: "59d95c8e9e1c75ffa738",
            124: "06c4d53027d09059b8a4",
            592: "fb434700e76a3b6255cc",
            606: "a6cc992855a668c372c9",
            676: "f9fe459793de54583e93",
            684: "58ad821fc3405645eee0",
            688: "5892f8b93ad202b5529b",
            692: "f72be7ec2354eaf82d8b",
            696: "20fbd9e65c40fb2d547e",
            730: "2167539a65bcedee8c01",
            885: "d37d83b8ffc02f79e2b7",
            977: "e87240384eec19845a9b"
        }[t] + ".js"
    }, i.miniCssF = function (t) { }, i.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e = {}, r = "colorapp:", i.l = function (t, n, o, a) {
        if (e[t]) e[t].push(n);
        else {
            var u, c;
            if (void 0 !== o)
                for (var s = document.getElementsByTagName("script"), l = 0; l < s.length; l++) {
                    var f = s[l];
                    if (f.getAttribute("src") == t || f.getAttribute("data-webpack") == r + o) {
                        u = f;
                        break
                    }
                }
            u || (c = !0, (u = document.createElement("script")).charset = "utf-8", u.timeout = 120, i.nc && u.setAttribute("nonce", i.nc), u.setAttribute("data-webpack", r + o), u.src = t), e[t] = [n];
            var h = function (r, n) {
                u.onerror = u.onload = null, clearTimeout(p);
                var o = e[t];
                if (delete e[t], u.parentNode && u.parentNode.removeChild(u), o && o.forEach((function (t) {
                    return t(n)
                })), r) return r(n)
            },
                p = setTimeout(h.bind(null, void 0, {
                    type: "timeout",
                    target: u
                }), 12e4);
            u.onerror = h.bind(null, u.onerror), u.onload = h.bind(null, u.onload), c && document.head.appendChild(u)
        }
    }, i.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.nmd = function (t) {
        return t.paths = [], t.children || (t.children = []), t
    },
        function () {
            var t;
            i.g.importScripts && (t = i.g.location + "");
            var e = i.g.document;
            if (!t && e && (e.currentScript && (t = e.currentScript.src), !t)) {
                var r = e.getElementsByTagName("script");
                r.length && (t = r[r.length - 1].src)
            }
            if (!t) throw new Error("Automatic publicPath is not supported in this browser");
            t = t.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = t
        }(),
        function () {
            var t = {
                179: 0,
                532: 0
            };
            i.f.j = function (e, r) {
                var n = i.o(t, e) ? t[e] : void 0;
                if (0 !== n)
                    if (n) r.push(n[2]);
                    else if (532 != e) {
                        var o = new Promise((function (r, o) {
                            n = t[e] = [r, o]
                        }));
                        r.push(n[2] = o);
                        var a = i.p + i.u(e),
                            u = new Error;
                        i.l(a, (function (r) {
                            if (i.o(t, e) && (0 !== (n = t[e]) && (t[e] = void 0), n)) {
                                var o = r && ("load" === r.type ? "missing" : r.type),
                                    a = r && r.target && r.target.src;
                                u.message = "Loading chunk " + e + " failed.\n(" + o + ": " + a + ")", u.name = "ChunkLoadError", u.type = o, u.request = a, n[1](u)
                            }
                        }), "chunk-" + e, e)
                    } else t[e] = 0
            }, i.O.j = function (e) {
                return 0 === t[e]
            };
            var e = function (e, r) {
                var n, o, a = r[0],
                    u = r[1],
                    c = r[2],
                    s = 0;
                if (a.some((function (e) {
                    return 0 !== t[e]
                }))) {
                    for (n in u) i.o(u, n) && (i.m[n] = u[n]);
                    if (c) var l = c(i)
                }
                for (e && e(r); s < a.length; s++) o = a[s], i.o(t, o) && t[o] && t[o][0](), t[o] = 0;
                return i.O(l)
            },
                r = self.webpackChunkcolorapp = self.webpackChunkcolorapp || [];
            r.forEach(e.bind(null, 0)), r.push = e.bind(null, r.push.bind(r))
        }();
    var a = i.O(void 0, [532, 34], (function () {
        return i(825)
    }));
    a = i.O(a)
}();