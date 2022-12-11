/*! For license information please see 977.e87240384eec19845a9b.js.LICENSE.txt */
(self.webpackChunkcolorapp = self.webpackChunkcolorapp || []).push([
    [977], {
        2977: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Coloring2D: function() {
                    return me
                }
            }), r(6992), r(1532), r(1539), r(8783), r(3948), r(1703), r(3689), r(9070), r(8304), r(489), r(1299), r(2419), r(7042), r(1038), r(4916), r(7601), r(2526), r(1817), r(2165), r(8674), r(2443), r(9341), r(3706), r(2703), r(4747);
            var n = r(1680),
                o = r(6710),
                i = r(1585),
                a = r(1014),
                u = r(8033),
                c = r(1601),
                s = r(6177),
                l = r(7823),
                d = r(9602),
                f = r(4392),
                h = r(1754),
                p = r(2555),
                y = (r(7922), r(2707), r(1249), r(9658)),
                v = function(e, t) {
                    return e.zOrder - t.zOrder
                };

            function m(e) {
                return m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, m(e)
            }

            function g(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (r = r.call(e); !(a = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                        } catch (e) {
                            u = !0, o = e
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return w(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? w(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function w(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function b(e, t) {
                return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, b(e, t)
            }

            function x(e, t) {
                if (t && ("object" === m(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function C(e) {
                return C = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, C(e)
            }
            var I = a.yR.BezierUtils,
                P = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && b(e, t)
                    }(i, e);
                    var t, r, n, o = (r = i, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, t = C(r);
                        if (n) {
                            var o = C(this).constructor;
                            e = Reflect.construct(t, arguments, o)
                        } else e = t.apply(this, arguments);
                        return x(this, e)
                    });

                    function i(e, t) {
                        var r;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, i), r = o.call(this);
                        var n = new y.mg([e[0][0], e[0][1]]);
                        n.closeStroke = !t;
                        for (var a = 1; a <= e.length; ++a) {
                            var u = g(e[a % e.length], 3),
                                c = u[0],
                                s = u[1],
                                l = u[2],
                                d = g(e[a - 1], 4),
                                f = d[0],
                                h = d[1],
                                p = d[3];
                            null !== l ? null !== p ? I.curveTo(p[0], p[1], l[0], l[1], c, s, n.points) : I.curveTo(f, h, l[0], l[1], c, s, n.points) : null !== p ? I.curveTo(p[0], p[1], c, s, c, s, n.points) : n.points.push(c, s)
                        }
                        return r.beginFill(16777215), r.drawShape(n), r.endFill(), r.hitArea = n, r.isMask = !0, r.interactive = !1, r.renderable = !1, r
                    }
                    return t = i, Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), t
                }(a.TC);

            function S(e) {
                return S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, S(e)
            }

            function T() {
                T = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

                function u(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    u({}, "")
                } catch (e) {
                    u = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var o = t && t.prototype instanceof d ? t : d,
                        i = Object.create(o.prototype),
                        a = new I(n || []);
                    return i._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return {
                                    value: void 0,
                                    done: !0
                                }
                            }
                            for (r.method = o, r.arg = i;;) {
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
                                var c = s(e, t, r);
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
                    }(e, r, a), i
                }

                function s(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var l = {};

                function d() {}

                function f() {}

                function h() {}
                var p = {};
                u(p, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    v = y && y(y(P([])));
                v && v !== t && r.call(v, o) && (p = v);
                var m = h.prototype = d.prototype = Object.create(p);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        u(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function w(e, t) {
                    function n(o, i, a, u) {
                        var c = s(e[o], e, i);
                        if ("throw" !== c.type) {
                            var l = c.arg,
                                d = l.value;
                            return d && "object" == S(d) && r.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                                n("next", e, a, u)
                            }), (function(e) {
                                n("throw", e, a, u)
                            })) : t.resolve(d).then((function(e) {
                                l.value = e, a(l)
                            }), (function(e) {
                                return n("throw", e, a, u)
                            }))
                        }
                        u(c.arg)
                    }
                    var o;
                    this._invoke = function(e, r) {
                        function i() {
                            return new t((function(t, o) {
                                n(e, r, t, o)
                            }))
                        }
                        return o = o ? o.then(i, i) : i()
                    }
                }

                function b(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return l;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return l
                    }
                    var n = s(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, l;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, l) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, l)
                }

                function x(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function C(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function I(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(x, this), this.reset(!0)
                }

                function P(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                i = function t() {
                                    for (; ++n < e.length;)
                                        if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return i.next = i
                        }
                    }
                    return {
                        next: A
                    }
                }

                function A() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return f.prototype = h, u(m, "constructor", h), u(h, "constructor", f), f.displayName = u(h, a, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, u(e, a, "GeneratorFunction")), e.prototype = Object.create(m), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(w.prototype), u(w.prototype, i, (function() {
                    return this
                })), e.AsyncIterator = w, e.async = function(t, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new w(c(t, r, n, o), i);
                    return e.isGeneratorFunction(r) ? a : a.next().then((function(e) {
                        return e.done ? e.value : a.next()
                    }))
                }, g(m), u(m, a, "Generator"), u(m, o, (function() {
                    return this
                })), u(m, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function r() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, e.values = P, I.prototype = {
                    constructor: I,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(C), !e)
                            for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function n(r, n) {
                            return a.type = "throw", a.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
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
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), l
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), C(r), l
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    C(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: P(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), l
                    }
                }, e
            }

            function A(e, t) {
                var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!r) {
                    if (Array.isArray(e) || (r = k(e)) || t && e && "number" == typeof e.length) {
                        r && (e = r);
                        var n = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, a = !0,
                    u = !1;
                return {
                    s: function() {
                        r = r.call(e)
                    },
                    n: function() {
                        var e = r.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        u = !0, i = e
                    },
                    f: function() {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (u) throw i
                        }
                    }
                }
            }

            function L(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (r = r.call(e); !(a = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                        } catch (e) {
                            u = !0, o = e
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || k(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function k(e, t) {
                if (e) {
                    if ("string" == typeof e) return j(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? j(e, t) : void 0
                }
            }

            function j(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function O(e, t, r, n, o, i, a) {
                try {
                    var u = e[i](a),
                        c = u.value
                } catch (e) {
                    return void r(e)
                }
                u.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function E(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function _(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var F = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), _(this, "drawAreas", []), _(this, "toPixiScale", {
                            x: 1,
                            y: 1
                        }), _(this, "toPixiOffset", {
                            x: 0,
                            y: 0
                        })
                    }
                    var t, r, n, i;
                    return t = e, r = [{
                        key: "destroy",
                        value: function() {
                            this.drawAreas.length = 0
                        }
                    }, {
                        key: "parse",
                        value: (n = T().mark((function e() {
                            var t, r, n, i, a, u, c, s, l, f, h, p, m, g, w = arguments;
                            return T().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = w.length > 0 && void 0 !== w[0] ? w[0] : 1, r = w.length > 1 ? w[1] : void 0, e.next = 4, Promise.allSettled([fetch(new Request("aniway/".concat(r.id, ".json"))), (0, d.po)("aniway/".concat(r.id, ".png"))]);
                                    case 4:
                                        if (n = e.sent, i = L(n, 2), a = i[0], u = i[1], "rejected" !== a.status) {
                                            e.next = 10;
                                            break
                                        }
                                        throw a.reason;
                                    case 10:
                                        if ("rejected" !== u.status) {
                                            e.next = 12;
                                            break
                                        }
                                        throw u.reason;
                                    case 12:
                                        return c = a.value, e.next = 15, c.json();
                                    case 15:
                                        s = e.sent, l = s.rect, f = s.layers, this.toPixiScale = {
                                            x: [0] <= l[2] ? t : -t,
                                            y: l[1] <= l[3] ? t : -t
                                        }, this.toPixiOffset = {
                                            x: -l[0] * this.toPixiScale.x,
                                            y: -l[1] * this.toPixiScale.y
                                        }, f.sort(v), h = A(f);
                                        try {
                                            for (h.s(); !(p = h.n()).done;)(m = p.value).hidden || this.parseLayer(m)
                                        } catch (e) {
                                            h.e(e)
                                        } finally {
                                            h.f()
                                        }
                                        return g = new y.Ae(0, 0, (l[2] - l[0]) * this.toPixiScale.x, (l[3] - l[1]) * this.toPixiScale.y), e.abrupt("return", {
                                            contentRect: g,
                                            overlayTexture: o.xE.from(u.value),
                                            drawAreas: this.drawAreas
                                        });
                                    case 25:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), i = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(r, o) {
                                var i = n.apply(e, t);

                                function a(e) {
                                    O(i, r, o, a, u, "next", e)
                                }

                                function u(e) {
                                    O(i, r, o, a, u, "throw", e)
                                }
                                a(void 0)
                            }))
                        }, function() {
                            return i.apply(this, arguments)
                        })
                    }, {
                        key: "parsePath",
                        value: function(e) {
                            var t = this.toPixiScale,
                                r = t.x,
                                n = t.y,
                                o = this.toPixiOffset,
                                i = o.x,
                                a = o.y,
                                u = e.points.map((function(e) {
                                    var t = L(e, 4),
                                        o = t[0],
                                        u = t[1],
                                        c = t[2],
                                        s = t[3];
                                    return [o * r + i, u * n + a, c ? [c[0] * r + i, c[1] * n + a] : null, s ? [s[0] * r + i, s[1] * n + a] : null]
                                })),
                                c = new P(u, e.closed);
                            c.position.set(e.position.x * r, e.position.y * n), this.drawAreas.push(c)
                        }
                    }, {
                        key: "parseGroup",
                        value: function(e) {
                            e.paths.sort(v);
                            var t, r = A(e.paths);
                            try {
                                for (r.s(); !(t = r.n()).done;) {
                                    var n = t.value;
                                    n.hidden || this.parsePath(n)
                                }
                            } catch (e) {
                                r.e(e)
                            } finally {
                                r.f()
                            }
                            e.groups.sort(v);
                            var o, i = A(e.groups);
                            try {
                                for (i.s(); !(o = i.n()).done;) {
                                    var a = o.value;
                                    a.hidden || this.parseGroup(a)
                                }
                            } catch (e) {
                                i.e(e)
                            } finally {
                                i.f()
                            }
                        }
                    }, {
                        key: "parseLayer",
                        value: function(e) {
                            e.paths.sort(v);
                            var t, r = A(e.paths);
                            try {
                                for (r.s(); !(t = r.n()).done;) {
                                    var n = t.value;
                                    n.hidden || this.parsePath(n)
                                }
                            } catch (e) {
                                r.e(e)
                            } finally {
                                r.f()
                            }
                            e.groups.sort(v);
                            var o, i = A(e.groups);
                            try {
                                for (i.s(); !(o = i.n()).done;) {
                                    var a = o.value;
                                    a.hidden || this.parseGroup(a)
                                }
                            } catch (e) {
                                i.e(e)
                            } finally {
                                i.f()
                            }
                            e.layers.sort(v);
                            var u, c = A(e.layers);
                            try {
                                for (c.s(); !(u = c.n()).done;) {
                                    var s = u.value;
                                    s.hidden || this.parseLayer(s)
                                }
                            } catch (e) {
                                c.e(e)
                            } finally {
                                c.f()
                            }
                        }
                    }], r && E(t.prototype, r), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e
                }(),
                M = (r(7941), r(9494), r(9653), r(2479), r(5438), r(2222), r(4819), r(5003), r(6730)),
                R = r(8942),
                D = r(6194),
                U = r(8381),
                z = r(7715),
                q = r(7117);

            function N(e) {
                return N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, N(e)
            }

            function G(e) {
                return function(e) {
                    if (Array.isArray(e)) return Y(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || K(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function B(e, t) {
                var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!r) {
                    if (Array.isArray(e) || (r = K(e)) || t && e && "number" == typeof e.length) {
                        r && (e = r);
                        var n = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, a = !0,
                    u = !1;
                return {
                    s: function() {
                        r = r.call(e)
                    },
                    n: function() {
                        var e = r.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        u = !0, i = e
                    },
                    f: function() {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (u) throw i
                        }
                    }
                }
            }

            function K(e, t) {
                if (e) {
                    if ("string" == typeof e) return Y(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Y(e, t) : void 0
                }
            }

            function Y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function H(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function $() {
                return $ = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
                    var n = W(e, t);
                    if (n) {
                        var o = Object.getOwnPropertyDescriptor(n, t);
                        return o.get ? o.get.call(arguments.length < 3 ? e : r) : o.value
                    }
                }, $.apply(this, arguments)
            }

            function W(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = J(e)););
                return e
            }

            function Z(e, t) {
                return Z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, Z(e, t)
            }

            function V(e, t) {
                if (t && ("object" === N(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return X(e)
            }

            function X(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function J(e) {
                return J = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, J(e)
            }

            function Q(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var ee = new y.y3,
                te = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && Z(e, t)
                    }(l, e);
                    var t, r, i, c, s = (i = l, c = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, t = J(i);
                        if (c) {
                            var r = J(this).constructor;
                            e = Reflect.construct(t, arguments, r)
                        } else e = t.apply(this, arguments);
                        return V(this, e)
                    });

                    function l(e, t, r) {
                        var n;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, l), Q(X(n = s.call(this)), "renderTexture", void 0), Q(X(n), "drawAreas", void 0), Q(X(n), "drawCache", {}), Q(X(n), "blurFilter", void 0), Q(X(n), "gradientFilter", void 0), Q(X(n), "brushLine", new a.TC), Q(X(n), "renderer", void 0), Q(X(n), "drawAreaMasks", void 0), n.renderTexture = e, n.drawAreas = t, n.gradientFilter = new o.wn(o.Y9, "precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\nuniform vec4 uTextureClamp;\nuniform vec4 uColor;\n\nuniform vec4 fromColor;\nuniform vec4 toColor;\nuniform vec2 fromPos;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n\n    vec2 middle = vec2(0.5, 0.5);\n    float dist = distance(fromPos, vTextureCoord);\n    dist = min(dist, 1.0);\n\n    if(gl_FragColor.a == 0.0)\n        discard;\n\n    gl_FragColor = mix(fromColor, toColor, dist);\n}", {
                            fromPos: [0, 0],
                            fromColor: [1, 0, 0, 1],
                            toColor: [0, 1, 0, 1]
                        }), n.blurFilter = new M.T(.5, 1, 1), n.blurFilter.padding = 2, n.renderer = z.pixi.renderer, n.drawAreaMasks = Object.keys(n.drawAreas).map((function(e) {
                            return n.renderAreaMaskSprite(Number.parseInt(e))
                        })), void 0 !== r && n.processHistory(r), n
                    }
                    return t = l, r = [{
                        key: "destroy",
                        value: function() {
                            $(J(l.prototype), "destroy", this).call(this), this.gradientFilter.destroy(), this.brushLine.destroy(), this.blurFilter.destroy();
                            var e, t = B(this.drawAreaMasks);
                            try {
                                for (t.s(); !(e = t.n()).done;) e.value.destroy({
                                    children: !0,
                                    texture: !0,
                                    baseTexture: !0
                                })
                            } catch (e) {
                                t.e(e)
                            } finally {
                                t.f()
                            }
                        }
                    }, {
                        key: "renderAreaMaskSprite",
                        value: function(e) {
                            var t = this.drawAreas[e],
                                r = t.getBounds(!1);
                            ee.tx = -r.x, ee.ty = -r.y;
                            for (var i = o.TI.create({
                                    width: r.width,
                                    height: r.height,
                                    scaleMode: n.aH.LINEAR,
                                    resolution: 1
                                }), a = 0, c = Object.values(this.drawAreas); a < c.length; a++) {
                                var s = c[a];
                                if (s.getBounds(!1).intersects(r)) {
                                    var l = s.clone();
                                    l.position.copyFrom(s), l.blendMode = s === t ? n.T$.NORMAL : n.T$.ERASE, this.renderer.render(l, {
                                        renderTexture: i,
                                        clear: !1,
                                        transform: ee
                                    }), l.destroy()
                                }
                            }
                            var d = new u.j(i);
                            d.position.copyFrom(r);
                            var f = d.enableTempParent();
                            return d.updateTransform(), d.disableTempParent(f), d
                        }
                    }, {
                        key: "preRender",
                        value: function() {
                            this.renderer.renderingToScreen = !1, this.renderer.runners.prerender.emit(), this.renderer.projection.transform = null, this.renderer.context.isLost || this.renderer.renderTexture.bind(this.renderTexture)
                        }
                    }, {
                        key: "postRender",
                        value: function() {
                            this.renderer.batch.currentRenderer.flush(), this.renderer.renderTexture.bind(void 0), this.renderTexture.baseTexture.update(), this.renderer.runners.postrender.emit(), this.renderer.projection.transform = null
                        }
                    }, {
                        key: "processCommands",
                        value: function(e, t) {
                            $(J(l.prototype), "processCommands", this).call(this, e, t)
                        }
                    }, {
                        key: "reprocessDrawCommands",
                        value: function(e, t) {
                            this.clearImage(), $(J(l.prototype), "reprocessDrawCommands", this).call(this, e, t)
                        }
                    }, {
                        key: "executeCommand",
                        value: function(e) {
                            var t, r, n, o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if ((0, U.u0)(e)) null !== (n = (t = this.drawCache)[r = e.sequenceId]) && void 0 !== n || (t[r] = []), this.drawCache[e.sequenceId].push(e.data);
                            else if ((0, U.kp)(e)) {
                                if (e.data.tool === U.qK.Fill) return;
                                var i = e.data.area,
                                    a = q.palettes.get(e.data.color.paletteId);
                                if (void 0 === a) throw new Error("Unknown palette ".concat(e.data.color.paletteId));
                                var u = (0, R.qm)(a.colors[e.data.color.colorIndex]),
                                    c = e.data.brushSize,
                                    s = this.drawCache[e.sequenceId];
                                if (void 0 === s) return;
                                s.push(e.data);
                                var l = s.length - 1,
                                    d = s[l - 1].position,
                                    h = s[l].position;
                                this.drawLine(i, d, h, c, u)
                            } else if ((0, U.CU)(e)) {
                                var p = e.data.area,
                                    y = q.palettes.get(e.data.color.paletteId);
                                if (void 0 === y) throw new Error("Unknown palette ".concat(e.data.color.paletteId));
                                var v = (0, R.qm)(y.colors[e.data.color.colorIndex]);
                                e.data.tool === U.qK.Brush ? this.drawBrush(p, e.data.position, e.data.brushSize, v) : e.data.tool === U.qK.Fill ? this.drawFill(p, e.data.position, v, o) : e.data.tool === U.qK.Gradient && this.drawGradient(p, e.data.position, v, o), delete this.drawCache[e.sequenceId]
                            } else(0, U.eP)(e) ? f.s_.next(e.data.index) : (0, U.b$)(e) ? f.D7.next(e.data.index) : (0, U.T)(e) ? f.cA.next(e.data.type) : (0, U.R2)(e) ? this.clearImage() : ((0, U.Kr)(e) || (0, U.UI)(e)) && this.reprocessDrawCommands()
                        }
                    }, {
                        key: "fastDrawCommands",
                        value: function(e) {
                            var t, r, n, o = this.brushLine,
                                i = B(e);
                            try {
                                for (i.s(); !(t = i.n()).done;) {
                                    var a = (r = t.value, n = 2, function(e) {
                                            if (Array.isArray(e)) return e
                                        }(r) || function(e, t) {
                                            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                            if (null != r) {
                                                var n, o, i = [],
                                                    a = !0,
                                                    u = !1;
                                                try {
                                                    for (r = r.call(e); !(a = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                                                } catch (e) {
                                                    u = !0, o = e
                                                } finally {
                                                    try {
                                                        a || null == r.return || r.return()
                                                    } finally {
                                                        if (u) throw o
                                                    }
                                                }
                                                return i
                                            }
                                        }(r, n) || K(r, n) || function() {
                                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                        }()),
                                        u = a[0],
                                        c = a[1];
                                    o.clear(), o._mask = this.drawAreaMasks[u];
                                    var s, l = B(c);
                                    try {
                                        for (l.s(); !(s = l.n()).done;) {
                                            var d, f, h, p = s.value;
                                            if ((0, U.u0)(p)) null !== (h = (d = this.drawCache)[f = p.sequenceId]) && void 0 !== h || (d[f] = []), this.drawCache[p.sequenceId].push(p.data);
                                            else if ((0, U.kp)(p)) {
                                                if (p.data.tool === U.qK.Fill) continue;
                                                var y = q.palettes.get(p.data.color.paletteId);
                                                if (void 0 === y) throw new Error("Unknown palette ".concat(p.data.color.paletteId));
                                                var v = (0, R.qm)(y.colors[p.data.color.colorIndex]),
                                                    m = p.data.brushSize,
                                                    g = this.drawCache[p.sequenceId];
                                                if (void 0 === g) continue;
                                                g.push(p.data);
                                                var w = g.length - 1,
                                                    b = g[w - 1].position,
                                                    x = g[w].position;
                                                o.beginFill(v), o.drawCircle(b.x, b.y, m), o.endFill(), o.lineStyle(2 * m, v), o.moveTo(b.x, b.y), o.lineTo(x.x, x.y), o.lineStyle(0)
                                            } else if ((0, U.CU)(p)) {
                                                var C = q.palettes.get(p.data.color.paletteId);
                                                if (void 0 === C) throw new Error("Unknown palette ".concat(p.data.color.paletteId));
                                                var I = (0, R.qm)(C.colors[p.data.color.colorIndex]);
                                                if (p.data.tool === U.qK.Brush) {
                                                    var P = p.data.position,
                                                        S = p.data.brushSize;
                                                    o.beginFill(I), o.drawCircle(P.x, P.y, S), o.endFill()
                                                } else if (p.data.tool === U.qK.Fill) {
                                                    var T = this.drawAreas[u].getBounds(!1);
                                                    o.beginFill(I), o.drawRect(T.x, T.y, T.width, T.height), o.endFill()
                                                }
                                                delete this.drawCache[p.sequenceId]
                                            }
                                        }
                                    } catch (e) {
                                        l.e(e)
                                    } finally {
                                        l.f()
                                    }
                                    this.renderer.render(o, {
                                        renderTexture: this.renderTexture,
                                        clear: !1,
                                        skipUpdateTransform: !0
                                    })
                                }
                            } catch (e) {
                                i.e(e)
                            } finally {
                                i.f()
                            }
                        }
                    }, {
                        key: "drawBrush",
                        value: function(e, t, r, n) {
                            this.brushLine.clear(), this.brushLine.beginFill(n), this.brushLine.drawCircle(t.x, t.y, r), this.brushLine.endFill(), this.brushLine._mask = this.drawAreaMasks[e], this.renderer.render(this.brushLine, {
                                renderTexture: this.renderTexture,
                                clear: !1,
                                skipUpdateTransform: !0
                            })
                        }
                    }, {
                        key: "drawLine",
                        value: function(e, t, r, n, o) {
                            this.brushLine.clear(), this.brushLine.beginFill(o), this.brushLine.drawCircle(t.x, t.y, n), this.brushLine.endFill(), this.brushLine.lineStyle(2 * n, o), this.brushLine.moveTo(t.x, t.y), this.brushLine.lineTo(r.x, r.y), this.brushLine._mask = this.drawAreaMasks[e], this.renderer.render(this.brushLine, {
                                renderTexture: this.renderTexture,
                                clear: !1,
                                skipUpdateTransform: !0
                            })
                        }
                    }, {
                        key: "drawFill",
                        value: function(e, t, r, n) {
                            var o = this,
                                i = this.drawAreas[e].getBounds(!1),
                                u = new a.TC;
                            if (u._mask = this.drawAreaMasks[e], n) u.beginFill(r), u.drawRect(i.x, i.y, i.width, i.height), u.endFill(), this.renderer.render(u, {
                                renderTexture: this.renderTexture,
                                clear: !1,
                                skipUpdateTransform: !0
                            }), u.destroy();
                            else {
                                var c = Math.hypot(Math.max(t.x - i.left, i.right - t.x), Math.max(t.y - i.top, i.bottom - t.y));
                                new D.kX({
                                    radius: 0
                                }).to({
                                    radius: c
                                }, Math.min(c, 400)).onUpdate((function(e) {
                                    u.clear(), u.beginFill(r), u.drawCircle(t.x, t.y, e.radius), u.endFill(), o.renderer.render(u, {
                                        renderTexture: o.renderTexture,
                                        clear: !1,
                                        skipUpdateTransform: !0
                                    })
                                })).onComplete((function(e) {
                                    u.destroy()
                                })).start()
                            }
                        }
                    }, {
                        key: "drawGradient",
                        value: function(e, t, r, n) {
                            var o, i = this,
                                u = this.drawAreas[e],
                                c = u.getBounds(!0),
                                s = new a.TC;
                            s._mask = u, s.filterArea = u.getBounds(!0);
                            var l = t,
                                d = Math.hypot(Math.max(l.x - c.left, c.right - l.x), Math.max(l.y - c.top, c.bottom - l.y)),
                                f = {
                                    x: (l.x - c.left) / c.width + .5,
                                    y: (l.y - c.top) / c.height + .5
                                };
                            s.filters = [].concat(G(null !== (o = this.brushLine.filters) && void 0 !== o ? o : []), [this.gradientFilter]), this.gradientFilter.uniforms.fromColor = [].concat(G((0, R.wK)(function(e, t) {
                                var r = e,
                                    n = Math.round(2.55 * 50),
                                    o = (r >> 16) + n,
                                    i = (r >> 8 & 255) + n,
                                    a = (255 & r) + n;
                                return 16777216 + 65536 * (o < 255 ? o < 1 ? 0 : o : 255) + 256 * (i < 255 ? i < 1 ? 0 : i : 255) + (a < 255 ? a < 1 ? 0 : a : 255)
                            }(r))), [1]), this.gradientFilter.uniforms.toColor = [].concat(G((0, R.wK)(r)), [1]), this.gradientFilter.uniforms.fromPos = [f.x, f.y], n ? (s.beginFill(r), s.drawRect(c.x, c.y, c.width, c.height), s.endFill(), this.renderer.render(s, {
                                renderTexture: this.renderTexture,
                                clear: !1,
                                skipUpdateTransform: !0
                            }), s.destroy()) : new D.kX({
                                radius: 0
                            }).to({
                                radius: d
                            }, .5 * d).onUpdate((function(e) {
                                s.clear(), s.beginFill(r), s.drawCircle(l.x, l.y, e.radius), s.endFill(), i.renderer.render(s, {
                                    renderTexture: i.renderTexture,
                                    clear: !1,
                                    skipUpdateTransform: !0
                                })
                            })).onComplete((function(e) {
                                return s.destroy()
                            })).start()
                        }
                    }, {
                        key: "cancelCommandSequence",
                        value: function(e) {
                            delete this.drawCache[e], $(J(l.prototype), "cancelCommandSequence", this).call(this, e)
                        }
                    }, {
                        key: "clearImage",
                        value: function() {
                            this.renderer.renderTexture.bind(this.renderTexture), this.renderer.renderTexture.clear(), this.renderer.renderTexture.bind(void 0)
                        }
                    }], r && H(t.prototype, r), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), l
                }(U.WP),
                re = r(286),
                ne = r(799),
                oe = r(6806);

            function ie(e) {
                return ie = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, ie(e)
            }

            function ae() {
                ae = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

                function u(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    u({}, "")
                } catch (e) {
                    u = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var o = t && t.prototype instanceof d ? t : d,
                        i = Object.create(o.prototype),
                        a = new I(n || []);
                    return i._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return {
                                    value: void 0,
                                    done: !0
                                }
                            }
                            for (r.method = o, r.arg = i;;) {
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
                                var c = s(e, t, r);
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
                    }(e, r, a), i
                }

                function s(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var l = {};

                function d() {}

                function f() {}

                function h() {}
                var p = {};
                u(p, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    v = y && y(y(P([])));
                v && v !== t && r.call(v, o) && (p = v);
                var m = h.prototype = d.prototype = Object.create(p);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        u(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function w(e, t) {
                    function n(o, i, a, u) {
                        var c = s(e[o], e, i);
                        if ("throw" !== c.type) {
                            var l = c.arg,
                                d = l.value;
                            return d && "object" == ie(d) && r.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                                n("next", e, a, u)
                            }), (function(e) {
                                n("throw", e, a, u)
                            })) : t.resolve(d).then((function(e) {
                                l.value = e, a(l)
                            }), (function(e) {
                                return n("throw", e, a, u)
                            }))
                        }
                        u(c.arg)
                    }
                    var o;
                    this._invoke = function(e, r) {
                        function i() {
                            return new t((function(t, o) {
                                n(e, r, t, o)
                            }))
                        }
                        return o = o ? o.then(i, i) : i()
                    }
                }

                function b(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return l;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return l
                    }
                    var n = s(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, l;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, l) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, l)
                }

                function x(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function C(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function I(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(x, this), this.reset(!0)
                }

                function P(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                i = function t() {
                                    for (; ++n < e.length;)
                                        if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return i.next = i
                        }
                    }
                    return {
                        next: S
                    }
                }

                function S() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return f.prototype = h, u(m, "constructor", h), u(h, "constructor", f), f.displayName = u(h, a, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, u(e, a, "GeneratorFunction")), e.prototype = Object.create(m), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(w.prototype), u(w.prototype, i, (function() {
                    return this
                })), e.AsyncIterator = w, e.async = function(t, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new w(c(t, r, n, o), i);
                    return e.isGeneratorFunction(r) ? a : a.next().then((function(e) {
                        return e.done ? e.value : a.next()
                    }))
                }, g(m), u(m, a, "Generator"), u(m, o, (function() {
                    return this
                })), u(m, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function r() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, e.values = P, I.prototype = {
                    constructor: I,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(C), !e)
                            for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function n(r, n) {
                            return a.type = "throw", a.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
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
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), l
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), C(r), l
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    C(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: P(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), l
                    }
                }, e
            }

            function ue(e, t, r, n, o, i, a) {
                try {
                    var u = e[i](a),
                        c = u.value
                } catch (e) {
                    return void r(e)
                }
                u.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function ce(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function a(e) {
                            ue(i, n, o, a, u, "next", e)
                        }

                        function u(e) {
                            ue(i, n, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function se(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function le(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function de(e, t) {
                return de = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, de(e, t)
            }

            function fe(e, t) {
                if (t && ("object" === ie(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return he(e)
            }

            function he(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function pe(e) {
                return pe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, pe(e)
            }

            function ye(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var ve = {
                    x: 0,
                    y: 0
                },
                me = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && de(e, t)
                    }(x, e);
                    var t, r, y, v, m, g, w, b = (g = x, w = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, t = pe(g);
                        if (w) {
                            var r = pe(this).constructor;
                            e = Reflect.construct(t, arguments, r)
                        } else e = t.apply(this, arguments);
                        return fe(this, e)
                    });

                    function x(e) {
                        var t;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, x), ye(he(t = b.call(this)), "background", void 0), ye(he(t), "gesturePointers", new Map), ye(he(t), "pointerIdToAreaId", {}), ye(he(t), "imageContainer", void 0), ye(he(t), "pinchDirty", !1), ye(he(t), "panning", !1), ye(he(t), "wasMousePanning", !1), ye(he(t), "brushSize", h.bB), t.background = e, t.imageContainer = t.addChild(new i.W2);
                        var r = z.pixi.interactionManager;
                        document.oncontextmenu = function(e) {
                            t.wasMousePanning && e.preventDefault(), t.wasMousePanning = !1
                        }, r.on("pointerdown", (function(e) {
                            if (t.worldVisible && t.parent) {
                                var r = e.data;
                                t.gesturePointers.set(r.pointerId, {
                                    pointerId: r.pointerId,
                                    startPosition: r.getLocalPosition(he(t)),
                                    currentPosition: r.getLocalPosition(he(t)),
                                    previousPosition: r.getLocalPosition(he(t)),
                                    stopped: e.stopped && void 0 === t.pointerIdToAreaId[r.pointerId]
                                }), (t.gesturePointers.size >= 2 || "mouse" === r.pointerType && r.button > 0) && (t.panning = !0)
                            }
                        })), r.on("pointermove", (function(e) {
                            if (t.worldVisible && t.parent) {
                                var r = e.data;
                                if (t.gesturePointers.has(r.pointerId)) {
                                    var n = t.gesturePointers.get(r.pointerId);
                                    n.stopped || (n.stopped = e.stopped), void 0 !== t.pointerIdToAreaId[r.pointerId] && (n.stopped = !1), t.gesturePointers.size >= 2 ? t.pinchDirty = !0 : t.panning && (0, s.TE)(n.startPosition, n.currentPosition) > 10 ? (t.pinchDirty = !0, t.wasMousePanning = "mouse" === r.pointerType) : f.cA.value === U.qK.Fill && (0, s.TE)(n.startPosition, n.currentPosition) > 10 ? (t.pinchDirty = !0, t.panning = !0) : n.previousPosition = n.currentPosition, n.currentPosition = r.getLocalPosition(he(t))
                                }
                            }
                        }));
                        var n = function(e) {
                            t.worldVisible && t.parent && (t.gesturePointers.delete(e.data.pointerId), 0 === t.gesturePointers.size && (t.panning = !1))
                        };
                        return r.on("pointerup", (function(e) {
                            return n(e)
                        })), r.on("pointerupoutside", (function(e) {
                            return n(e)
                        })), r.on("pointercancel", (function(e) {
                            return n(e)
                        })), z.pixi.view.addEventListener("wheel", (function(e) {
                            var n = 0;
                            0 === e.deltaMode ? n = e.deltaY / 1e4 : 1 === e.deltaMode ? n = e.deltaY / 100 : 2 === e.deltaMode && (n = e.deltaY / 10), r.mapPositionToPoint(ve, e.clientX, e.clientY), t.imageContainer.parent.toLocal(ve, void 0, ve);
                            var o = t.imageContainer.scale.x,
                                i = (0, d.uZ)(o * (1 - n), h.lJ, h.Hw) / o;
                            (0, s.bA)(t.imageContainer.scale, t.imageContainer.scale, i), (0, s.C2)(t.imageContainer.position, ve), (0, s.bA)(t.imageContainer.position, t.imageContainer.position, i), (0, s.jo)(t.imageContainer.position, ve)
                        })), p.he.connect((function() {
                            return null === f.gS || void 0 === f.gS ? void 0 : f.gS.commandProcessor.addCommand(U.wI.Undo, null, void 0)
                        })), p.UK.connect((function() {
                            return null === f.gS || void 0 === f.gS ? void 0 : f.gS.commandProcessor.addCommand(U.wI.Redo, null, void 0)
                        })), p.jC.connect((function(e) {
                            return null === f.gS || void 0 === f.gS ? void 0 : f.gS.commandProcessor.addCommand(U.wI.ChangeTool, null, {
                                type: e
                            })
                        })), p.FC.connect((function(e, t) {
                            null === f.gS || void 0 === f.gS || f.gS.commandProcessor.addCommand(U.wI.ChangePalette, null, {
                                index: e
                            }), null === f.gS || void 0 === f.gS || f.gS.commandProcessor.addCommand(U.wI.ChangeColor, null, {
                                index: t
                            })
                        })), l.u9.add((function() {
                            t.pinchDirty && (t.pinchDirty = !1, t.calculatePinch()), t.panning || t.returnToCenter()
                        })), z.pixi.sizeChanged.connect((function() {
                            return t.layoutUpdated()
                        })), t.on("added", (function() {
                            return t.added()
                        })), t.on("removed", (function() {
                            return t.unload()
                        })), t
                    }
                    return t = x, r = [{
                        key: "returnToCenter",
                        value: function() {
                            if (0 !== this.imageContainer.children.length) {
                                var e = z.pixi.stageWidth,
                                    t = z.pixi.stageHeight,
                                    r = Math.abs(this.imageContainer._localBounds.minX) * this.imageContainer.scale.x,
                                    n = Math.abs(this.imageContainer._localBounds.minY) * this.imageContainer.scale.y,
                                    o = this.imageContainer.x,
                                    i = this.imageContainer.x + this.imageContainer.width - 2 * r,
                                    a = this.imageContainer.y,
                                    u = this.imageContainer.y + this.imageContainer.height - 2 * n,
                                    c = e / 2,
                                    s = t / 2;
                                o > c && (this.imageContainer.position.x += .2 * (c - o)), i < c && (this.imageContainer.position.x += .2 * (c - i)), a > s && (this.imageContainer.position.y += .2 * (s - a)), u < s && (this.imageContainer.position.y += .2 * (s - u))
                            }
                        }
                    }, {
                        key: "added",
                        value: function() {
                            oe.GameAnalytics.addDesignEvent("View:Coloring"), this.layoutUpdated(), this.background.desaturate()
                        }
                    }, {
                        key: "unload",
                        value: function() {
                            var e, t = function(e, t) {
                                var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (!r) {
                                    if (Array.isArray(e) || (r = function(e, t) {
                                            if (e) {
                                                if ("string" == typeof e) return se(e, t);
                                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? se(e, t) : void 0
                                            }
                                        }(e)) || t && e && "number" == typeof e.length) {
                                        r && (e = r);
                                        var n = 0,
                                            o = function() {};
                                        return {
                                            s: o,
                                            n: function() {
                                                return n >= e.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: e[n++]
                                                }
                                            },
                                            e: function(e) {
                                                throw e
                                            },
                                            f: o
                                        }
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }
                                var i, a = !0,
                                    u = !1;
                                return {
                                    s: function() {
                                        r = r.call(e)
                                    },
                                    n: function() {
                                        var e = r.next();
                                        return a = e.done, e
                                    },
                                    e: function(e) {
                                        u = !0, i = e
                                    },
                                    f: function() {
                                        try {
                                            a || null == r.return || r.return()
                                        } finally {
                                            if (u) throw i
                                        }
                                    }
                                }
                            }(this.imageContainer.removeChildren());
                            try {
                                for (t.s(); !(e = t.n()).done;) e.value.destroy({
                                    children: !0
                                })
                            } catch (e) {
                                t.e(e)
                            } finally {
                                t.f()
                            }
                            this.background.reset(), this.gesturePointers.clear()
                        }
                    }, {
                        key: "layoutUpdated",
                        value: function() {
                            var e = this.imageContainer.getLocalBounds();
                            this.imageContainer.scale.set(1), z.pixi.isPortrait() ? this.imageContainer.position.set((z.pixi.stageWidth - e.width) / 2 - e.x, (z.pixi.stageHeight - e.height - 300) / 2 - e.y) : this.imageContainer.position.set((z.pixi.stageWidth - e.width - 350) / 2 - e.x, (z.pixi.stageHeight - e.height) / 2 - e.y)
                        }
                    }, {
                        key: "calculatePinch",
                        value: function() {
                            if (0 !== this.gesturePointers.size) {
                                var e = this.gesturePointers.values(),
                                    t = e.next().value;
                                if (1 !== this.gesturePointers.size || t.stopped || ((0, s.lu)(ve, t.currentPosition, t.previousPosition), (0, s.jo)(this.imageContainer.position, ve)), this.gesturePointers.size >= 2 && !t.stopped) {
                                    var r = e.next().value;
                                    if (r.stopped) return;
                                    var n = (0, s.TE)(r.currentPosition, t.currentPosition),
                                        o = (0, s.TE)(r.previousPosition, t.previousPosition),
                                        i = this.imageContainer.scale.x,
                                        a = (0, d.uZ)(i * n / o, h.lJ, h.Hw) / i;
                                    isNaN(a) || ((0, s.bA)(this.imageContainer.scale, this.imageContainer.scale, a), (0, s.bA)(ve, (0, s.IH)(ve, r.previousPosition, t.previousPosition), .5), (0, s.C2)(this.imageContainer.position, ve), (0, s.bA)(this.imageContainer.position, this.imageContainer.position, a), (0, s.bA)(ve, (0, s.IH)(ve, r.currentPosition, t.currentPosition), .5), (0, s.jo)(this.imageContainer.position, ve)), r.previousPosition = r.currentPosition
                                }
                                t.previousPosition = t.currentPosition
                            }
                        }
                    }, {
                        key: "reuseDrawing",
                        value: (m = ce(ae().mark((function e() {
                            var t, r, n, o, i, a, u, c, s;
                            return ae().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (void 0 !== f.gS) {
                                            e.next = 2;
                                            break
                                        }
                                        throw new Error("Missing drawing state.");
                                    case 2:
                                        t = f.gS.drawingData, r = f.gS.commandProcessor, n = f.gS.overlay, o = f.gS.implementationData, t.type === re.g.Aniway ? (i = o.drawAreas, a = o.renderTexture, this.setupAniwayDrawing(r, n, a, i)) : t.type === re.g.ReColor && (u = o.indexTexture, c = o.renderTexture, s = o.indexData, this.setupRecolorDrawing(r, n, u, c, s));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return m.apply(this, arguments)
                        })
                    }, {
                        key: "setupAniwayDrawing",
                        value: function(e, t, r, o) {
                            var i = this,
                                c = this.imageContainer.addChild(new a.TC);
                            c.beginFill(0, .33), c.drawRoundedRect(5, t.height - 15, t.width - 10, 45, 5), c.beginFill(16777215, 1), c.lineStyle(10, 11513517, 1, 1), c.drawRoundedRect(0, 0, t.width, t.height, 1), this.imageContainer.addChild(new u.j(r)), this.imageContainer.addChild(new u.j(t)).blendMode = n.T$.MULTIPLY;
                            for (var s = function(t) {
                                    var r = o[t],
                                        n = i.imageContainer.addChild(new a.TC);
                                    n.position.copyFrom(r.position), n.interactive = !0, n.renderable = !1, n.hitArea = r.hitArea;
                                    var u = function(t) {
                                        delete i.pointerIdToAreaId[t.pointerId], e.cancelCommandSequence(t.pointerId)
                                    };
                                    n.on("pointerdown", (function(r) {
                                        if (!r.stopped) {
                                            var n = r.data;
                                            i.panning ? u(n) : (r.stopPropagation(), i.pointerIdToAreaId[n.pointerId] = t, e.addCommand(U.wI.PointerDown, n.pointerId, {
                                                position: n.getLocalPosition(i.imageContainer),
                                                area: i.pointerIdToAreaId[n.pointerId],
                                                tool: f.cA.value,
                                                brushSize: i.brushSize / i.imageContainer.scale.x,
                                                color: {
                                                    paletteId: f.s_.value,
                                                    colorIndex: f.D7.value
                                                }
                                            }))
                                        }
                                    })), n.on("pointermove", (function(t) {
                                        if (!t.stopped) {
                                            var r = t.data;
                                            void 0 !== i.pointerIdToAreaId[r.pointerId] && (i.panning ? u(r) : (t.stopPropagation(), e.addCommand(U.wI.PointerMove, r.pointerId, {
                                                position: r.getLocalPosition(i.imageContainer),
                                                area: i.pointerIdToAreaId[r.pointerId],
                                                tool: f.cA.value,
                                                brushSize: i.brushSize / i.imageContainer.scale.x,
                                                color: {
                                                    paletteId: f.s_.value,
                                                    colorIndex: f.D7.value
                                                }
                                            })))
                                        }
                                    }));
                                    var c = function(t) {
                                        if (!t.stopped) {
                                            var r = t.data;
                                            void 0 !== i.pointerIdToAreaId[r.pointerId] && (i.panning ? u(r) : (t.stopPropagation(), e.addCommand(U.wI.PointerUp, r.pointerId, {
                                                position: r.getLocalPosition(i.imageContainer),
                                                area: i.pointerIdToAreaId[r.pointerId],
                                                tool: f.cA.value,
                                                brushSize: i.brushSize / i.imageContainer.scale.x,
                                                color: {
                                                    paletteId: f.s_.value,
                                                    colorIndex: f.D7.value
                                                }
                                            }), delete i.pointerIdToAreaId[r.pointerId]))
                                        }
                                    };
                                    n.on("pointerup", (function(e) {
                                        return c(e)
                                    })), n.on("pointerupoutside", (function(e) {
                                        return c(e)
                                    })), n.on("pointercancel", (function(e) {
                                        return c(e)
                                    }))
                                }, l = 0; l < o.length; ++l) s(l)
                        }
                    }, {
                        key: "setupRecolorDrawing",
                        value: function(e, t, r, o, i) {
                            var c = this,
                                s = this.imageContainer.addChild(new a.TC);
                            s.beginFill(0, .33), s.drawRoundedRect(5, o.height - 15, o.width - 10, 45, 5), s.beginFill(16777215, 1), s.lineStyle(10, 11513517, 1, 1), s.drawRoundedRect(0, 0, o.width, o.height, 1);
                            var l = this.imageContainer.addChild(new u.j(o));
                            this.imageContainer.addChild(new u.j(t)).blendMode = n.T$.MULTIPLY;
                            var d = function(t) {
                                delete c.pointerIdToAreaId[t.pointerId], e.cancelCommandSequence(t.pointerId)
                            };
                            l.interactive = !0, l.on("pointerdown", (function(t) {
                                if (!t.stopped) {
                                    var n = t.data;
                                    if (c.panning) d(n);
                                    else {
                                        var a = n.getLocalPosition(l);
                                        a.x *= r.width / o.width, a.y *= r.height / o.height;
                                        var u = i[Math.trunc(a.x) + Math.trunc(a.y) * r.width];
                                        c.pointerIdToAreaId[n.pointerId] = u;
                                        var s = n.getLocalPosition(c.imageContainer);
                                        e.addCommand(U.wI.PointerDown, n.pointerId, {
                                            position: s,
                                            area: u,
                                            tool: f.cA.value,
                                            brushSize: c.brushSize / c.imageContainer.scale.x,
                                            color: {
                                                paletteId: f.s_.value,
                                                colorIndex: f.D7.value
                                            }
                                        })
                                    }
                                }
                            })), l.on("pointermove", (function(t) {
                                if (!t.stopped) {
                                    var r = t.data;
                                    void 0 !== c.pointerIdToAreaId[r.pointerId] && (c.panning ? d(r) : e.addCommand(U.wI.PointerMove, r.pointerId, {
                                        position: r.getLocalPosition(c.imageContainer),
                                        area: c.pointerIdToAreaId[r.pointerId],
                                        tool: f.cA.value,
                                        brushSize: c.brushSize / c.imageContainer.scale.x,
                                        color: {
                                            paletteId: f.s_.value,
                                            colorIndex: f.D7.value
                                        }
                                    }))
                                }
                            }));
                            var h = function(t) {
                                if (!t.stopped) {
                                    var r = t.data;
                                    void 0 !== c.pointerIdToAreaId[r.pointerId] && (c.panning ? d(r) : (e.addCommand(U.wI.PointerUp, r.pointerId, {
                                        position: r.getLocalPosition(c.imageContainer),
                                        area: c.pointerIdToAreaId[r.pointerId],
                                        tool: f.cA.value,
                                        brushSize: c.brushSize / c.imageContainer.scale.x,
                                        color: {
                                            paletteId: f.s_.value,
                                            colorIndex: f.D7.value
                                        }
                                    }), delete c.pointerIdToAreaId[r.pointerId]))
                                }
                            };
                            l.on("pointerup", (function(e) {
                                return h(e)
                            })), l.on("pointerupoutside", (function(e) {
                                return h(e)
                            })), l.on("pointercancel", (function(e) {
                                return h(e)
                            }))
                        }
                    }, {
                        key: "createDrawing",
                        value: (v = ce(ae().mark((function e(t, r) {
                            var i, a, u, c, s, l, d, h, p;
                            return ae().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t.type !== re.g.Aniway) {
                                            e.next = 23;
                                            break
                                        }
                                        return i = new F, e.next = 4, i.parse(1, t);
                                    case 4:
                                        return a = e.sent, u = a.contentRect, c = a.overlayTexture, s = a.drawAreas, l = o.TI.create({
                                            width: u.width,
                                            height: u.height,
                                            scaleMode: n.aH.LINEAR,
                                            resolution: 1
                                        }), d = new te(l, s, r), e.prev = 10, e.next = 13, z.worksOfArt.loadWorkOfArtPostProcessData(t);
                                    case 13:
                                        h = e.sent, e.next = 18;
                                        break;
                                    case 16:
                                        e.prev = 16, e.t0 = e.catch(10);
                                    case 18:
                                        return e.prev = 18, null !== (p = h) && void 0 !== p || (h = {
                                            outlineColor: 0
                                        }), e.finish(18);
                                    case 21:
                                        (0, f.kh)({
                                            temporaryTextures: [l],
                                            drawingData: t,
                                            commandProcessor: d,
                                            drawing: l,
                                            overlay: c,
                                            implementationData: {
                                                drawAreas: s,
                                                renderTexture: l
                                            },
                                            postprocess: h
                                        }), this.setupAniwayDrawing(d, c, l, s);
                                    case 23:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [10, 16, 18, 21]
                            ])
                        }))), function(e, t) {
                            return v.apply(this, arguments)
                        })
                    }, {
                        key: "loadImage",
                        value: (y = ce(ae().mark((function e(t, r) {
                            var n;
                            return ae().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = this.imageContainer.addChild(new c.xv("Loading...", ne.h)), void 0 === t) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 4, this.createDrawing(t, r);
                                    case 4:
                                        e.next = 8;
                                        break;
                                    case 6:
                                        return e.next = 8, this.reuseDrawing();
                                    case 8:
                                        n.destroy(), this.layoutUpdated();
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return y.apply(this, arguments)
                        })
                    }], r && le(t.prototype, r), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), x
                }(i.W2)
        },
        1754: function(e, t, r) {
            "use strict";
            r.d(t, {
                Hw: function() {
                    return a
                },
                Kj: function() {
                    return o
                },
                Oz: function() {
                    return u
                },
                bB: function() {
                    return n
                },
                lJ: function() {
                    return i
                }
            });
            var n = 20,
                o = 20,
                i = .5,
                a = 6,
                u = "free"
        },
        2555: function(e, t, r) {
            "use strict";
            r.d(t, {
                FC: function() {
                    return u
                },
                UK: function() {
                    return i
                },
                he: function() {
                    return o
                },
                jC: function() {
                    return a
                }
            });
            var n = r(4242),
                o = new n.MZ,
                i = new n.MZ,
                a = new n.MZ,
                u = new n.MZ
        },
        9494: function(e, t, r) {
            var n = r(2109),
                o = r(3009);
            n({
                target: "Number",
                stat: !0,
                forced: Number.parseInt != o
            }, {
                parseInt: o
            })
        },
        7922: function(e, t, r) {
            "use strict";
            var n = r(2109),
                o = r(6916),
                i = r(9662),
                a = r(8523),
                u = r(2534),
                c = r(408);
            n({
                target: "Promise",
                stat: !0
            }, {
                allSettled: function(e) {
                    var t = this,
                        r = a.f(t),
                        n = r.resolve,
                        s = r.reject,
                        l = u((function() {
                            var r = i(t.resolve),
                                a = [],
                                u = 0,
                                s = 1;
                            c(e, (function(e) {
                                var i = u++,
                                    c = !1;
                                s++, o(r, t, e).then((function(e) {
                                    c || (c = !0, a[i] = {
                                        status: "fulfilled",
                                        value: e
                                    }, --s || n(a))
                                }), (function(e) {
                                    c || (c = !0, a[i] = {
                                        status: "rejected",
                                        reason: e
                                    }, --s || n(a))
                                }))
                            })), --s || n(a)
                        }));
                    return l.error && s(l.value), r.promise
                }
            })
        }
    }
]);